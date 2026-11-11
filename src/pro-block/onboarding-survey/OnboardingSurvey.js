function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    OnboardingSurvey: () => U,
    default: () => K,
    onboardingSurveySampleQuestions: () => A,
    onboardingSurveySampleSteps: () => R
  });
  var n = a(95155), r = a(12115), i = a(92171), s = a(25354), o = a(80642), l = a(18310), d = a(35484), u = a(64577), c = a(76721), p = a(21759), m = a(92298), h = a(78780), y = a(51288), g = a(76266), f = a(52898), b = a(7770), _ = a(28786), v = a(72809), w = a(24413), x = a(80167), j = a(71363), k = a(57465), N = a(2501), T = a(22350), S = a(17143), C = a(21748);
  let E = (e2) => (0, n.jsx)(e2, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), A = [
    {
      id: "role",
      label: "Role",
      title: "What's your role?",
      description: "We'll set up views and defaults for how you work.",
      options: [
        {
          value: "engineering",
          label: "Engineering",
          description: "Ship features and review code",
          icon: E(_.A)
        },
        {
          value: "design",
          label: "Design",
          description: "Specs, reviews and handoff",
          icon: E(v.A)
        },
        {
          value: "product",
          label: "Product",
          description: "Roadmaps and planning",
          icon: E(w.A)
        },
        {
          value: "marketing",
          label: "Marketing",
          description: "Launches and campaigns",
          icon: E(x.A)
        }
      ]
    },
    {
      id: "team",
      label: "Team size",
      title: "How big is your team?",
      description: "We'll size your workspace and seats to match.",
      options: [
        {
          value: "solo",
          label: "Just me",
          description: "Trying it out on my own",
          icon: E(j.A)
        },
        {
          value: "small",
          label: "2 to 10",
          description: "One small, fast team",
          icon: E(k.A)
        },
        {
          value: "medium",
          label: "11 to 50",
          description: "A few teams, one workspace",
          icon: E(N.A)
        },
        {
          value: "large",
          label: "51 or more",
          description: "Many teams and departments",
          icon: E(T.A)
        }
      ]
    },
    {
      id: "first",
      label: "First up",
      title: "What do you want to do first?",
      description: "We'll open your workspace right where you need it.",
      options: [
        {
          value: "linear",
          label: "Import from Linear",
          description: "Bring issues, cycles and labels",
          icon: (0, n.jsx)(function({ size: e2 = 16, ...t2 }) {
            return (0, n.jsx)("svg", {
              width: e2,
              height: e2,
              viewBox: "0 0 24 24",
              fill: "currentColor",
              "aria-hidden": "true",
              ...t2,
              children: (0, n.jsx)("path", {
                d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
              })
            });
          }, {})
        },
        {
          value: "github",
          label: "Connect GitHub",
          description: "Link repos and pull requests",
          icon: (0, n.jsx)(function({ size: e2 = 16, ...t2 }) {
            return (0, n.jsx)("svg", {
              width: e2,
              height: e2,
              viewBox: "0 0 24 24",
              fill: "currentColor",
              "aria-hidden": "true",
              ...t2,
              children: (0, n.jsx)("path", {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              })
            });
          }, {})
        },
        {
          value: "invite",
          label: "Invite your team",
          description: "Send invites by email",
          icon: E(S.A)
        },
        {
          value: "template",
          label: "Start from a template",
          description: "Sprint, roadmap or bug triage",
          icon: E(C.A)
        }
      ]
    }
  ], L = {
    solo: "Setting up a personal workspace",
    small: "Adding seats for a team of 10",
    medium: "Adding seats for a team of 50",
    large: "Preparing team spaces and roles"
  }, $ = {
    linear: "Preparing your Linear import",
    github: "Getting GitHub ready to connect",
    invite: "Drafting your team invite",
    template: "Loading starter templates"
  };
  function R(e2, t2) {
    if (t2 !== A)
      return [
        "Saving your answers",
        "Setting up your workspace",
        "Applying your preferences"
      ];
    let a2 = t2[0].options.find((t3) => t3.value === e2.role)?.label;
    return [
      a2 ? `Creating ${a2} views` : "Creating your views",
      L[e2.team] ?? "Setting up your workspace",
      $[e2.first] ?? "Preparing your home screen",
      "Applying your preferences"
    ];
  }
  var q = a(3036), P = a.n(q);
  let I = (...e2) => e2.filter(Boolean).join(" "), D = [
    [0, 2, 0],
    [1, 1, 3]
  ], z = [...b.T.ease.standard], M = { type: "spring", visualDuration: 0.28, bounce: 0 }, O = { ...b.T.spring.snappy, opacity: { duration: b.T.duration.instant } };
  function B() {
    return (0, n.jsxs)("svg", {
      className: P().spinner,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, n.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".2",
          strokeWidth: "1.75"
        }),
        (0, n.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function W({ reduced: e2, size: t2 = 16 }) {
    return (0, n.jsx)("svg", {
      width: t2,
      height: t2,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, n.jsx)(s.PY1.path, {
        d: "M3.25 8.5 6.5 11.75 12.75 4.75",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.28, ease: z, delay: 0.04 }
      })
    });
  }
  function Y({ state: e2, reduced: t2 }) {
    let a2 = "active" === e2 ? (0, n.jsx)(B, {}) : "done" === e2 ? (0, n.jsx)(W, { reduced: t2 }) : "error" === e2 ? (0, n.jsx)(d.A, { size: 16, strokeWidth: 1.75 }) : (0, n.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: (0, n.jsx)("circle", {
        cx: "8",
        cy: "8",
        r: "5.25",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeDasharray: "2.5 2.5"
      })
    });
    return (0, n.jsx)("span", {
      className: P().stepIcon,
      "aria-hidden": "true",
      children: (0, n.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: (0, n.jsx)(
          s.PY1.span,
          {
            className: P().layer,
            "data-state": e2,
            initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
            transition: t2 ? { duration: 0 } : O,
            children: a2
          },
          e2
        )
      })
    });
  }
  function F({ id: e2, children: t2, className: a2, reduced: r2 }) {
    return (0, n.jsx)("span", {
      className: I(P().swap, a2),
      children: (0, n.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: (0, n.jsx)(
          s.PY1.span,
          {
            className: P().swapText,
            initial: r2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: b.T.duration.fast, ease: z, delay: 0.04 }
            },
            exit: { opacity: 0, transition: { duration: 0.1, ease: z } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function U({
    questions: e2 = A,
    defaultAnswers: t2,
    setupSteps: a2,
    personalize: d2,
    onAnswer: _2,
    onComplete: v2,
    autoPlay: w2,
    doneTitle: x2 = "You're all set",
    doneDescription: j2 = "Your workspace is ready. Change any answer below.",
    finishLabel: k2 = "Open workspace",
    className: N2,
    "aria-label": T2 = "Onboarding survey"
  }) {
    let S2, C2, E2, L2 = (0, l.I)() ?? false, $2 = (0, r.useId)(), q2 = e2.length, [B2, K2] = (0, r.useState)("question"), [H, V] = (0, r.useState)(0), [Q, Z] = (0, r.useState)(() => ({ ...t2 })), [G, X] = (0, r.useState)(0), [J, ee] = (0, r.useState)(null), [et, ea] = (0, r.useState)(0), [en, er] = (0, r.useState)(null), [ei, es] = (0, r.useState)(false), [eo, el] = (0, r.useState)(null), [ed, eu] = (0, r.useState)(""), [ec, ep] = (0, r.useState)(false), [em, eh] = (0, r.useState)(false), [ey, eg] = (0, r.useState)(0), ef = (0, r.useRef)(null), eb = (0, r.useRef)(false), e_ = (0, r.useRef)(void 0), ev = (0, r.useRef)(void 0), { outer: ew, inner: ex } = (C2 = (0, r.useRef)(null), E2 = (0, r.useRef)(null), (0, r.useEffect)(() => {
      let e3, t3 = C2.current, a3 = E2.current;
      if (!t3 || !a3 || "u" < typeof ResizeObserver) return;
      let n2 = a3.offsetHeight, r2 = a3.offsetWidth, s2 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, o2 = new ResizeObserver(() => {
        let o3 = a3.offsetHeight, l2 = a3.offsetWidth, d3 = l2 !== r2;
        if (r2 = l2, o3 === n2) return;
        let u2 = e3 ? t3.getBoundingClientRect().height : n2;
        (n2 = o3, e3?.stop(), L2 || d3) ? s2() : (t3.style.overflow = "hidden", e3 = (0, i.i)(
          t3,
          { height: [u2, o3] },
          { ...M, onComplete: s2 }
        ));
      });
      return o2.observe(a3), () => {
        o2.disconnect(), e3?.stop();
      };
    }, [L2]), { outer: C2, inner: E2 }), ej = e2[Math.min(H, q2 - 1)], ek = "question" === B2 && ej ? Q[ej.id] : void 0, eN = (0, r.useMemo)(
      () => "function" == typeof a2 ? a2(Q) : a2 ?? R(Q, e2),
      [a2, Q, e2]
    ), eT = "question" === B2 ? `q${H}` : B2, eS = "question" === B2 ? (H + 1) / (q2 + 1) : "setup" === B2 ? (q2 + G / Math.max(eN.length, 1)) / (q2 + 1) : 1, eC = (w2 ?? e2 === A) && !ec && em && !L2, eE = (e3) => {
      window.clearTimeout(e_.current), er(e3), e_.current = window.setTimeout(() => er(null), 150);
    }, eA = (e3) => {
      if (!ej) return;
      let t3 = { ...Q };
      void 0 === e3 ? delete t3[ej.id] : t3[ej.id] = e3, Z(t3), _2?.(ej.id, e3, t3);
      let a3 = ej.options.find((t4) => t4.value === e3)?.label;
      a3 && eu(`${a3} selected`);
    }, eL = () => {
      X(0), ee(null), K2("setup"), ea((e3) => e3 + 1), eu("Personalizing your workspace");
    }, e$ = () => {
      "question" === B2 && (H < q2 - 1 ? (V(H + 1), eu(`Question ${H + 2} of ${q2}: ${e2[H + 1].title}`)) : eL());
    };
    function eR() {
      window.clearTimeout(ev.current), K2("question"), V(0), Z({ ...t2 }), X(0), ee(null), el(null), es(false), eu(`Question 1 of ${q2}: ${e2[0]?.title ?? ""}`);
    }
    let eq = async () => {
      if (!ei) {
        if (es(true), v2) {
          try {
            await v2(Q);
          } finally {
            es(false);
          }
          return;
        }
        ev.current = window.setTimeout(() => {
          es(false), el("Simulated. Your app would open the workspace here."), eu("Simulated, nothing was saved or opened.");
        }, 600);
      }
    }, eP = (0, r.useRef)({ select: eA, advance: e$, restart: eR, flash: eE });
    (0, r.useEffect)(() => {
      eP.current = { select: eA, advance: e$, restart: eR, flash: eE };
    });
    let eI = (0, r.useRef)({ personalize: d2, answers: Q, steps: eN });
    (0, r.useEffect)(() => {
      eI.current = { personalize: d2, answers: Q, steps: eN };
    }), (0, r.useEffect)(() => {
      if ("setup" !== B2) return;
      let { personalize: e3, answers: t3, steps: a3 } = eI.current, n2 = new AbortController(), r2 = [], i2 = false, s2 = (e4) => new Promise((t4) => {
        r2.push(window.setTimeout(t4, e4));
      }), o2 = e3 ? e3(t3, n2.signal) : Promise.resolve();
      return o2.catch(() => void 0), (async () => {
        try {
          for (let e4 = 0; e4 < a3.length; e4++) {
            if (await s2(520), e4 === a3.length - 1 && await o2, i2) return;
            X(e4 + 1);
          }
          if (await s2(420), i2) return;
          K2("done"), eu(
            e3 ? "You're all set." : "You're all set. Simulated, nothing was saved."
          );
        } catch (e4) {
          if (i2) return;
          ee(
            e4 instanceof Error && e4.message ? e4.message : "Check your connection and try again."
          ), eu("Setup didn't finish.");
        }
      })(), () => {
        i2 = true, n2.abort(), r2.forEach((e4) => window.clearTimeout(e4));
      };
    }, [B2, et]), (0, r.useEffect)(() => {
      let e3;
      if (!eC) return;
      let t3 = D[ey % D.length];
      return "question" === B2 && ej ? e3 = void 0 === ek ? window.setTimeout(
        () => {
          let e4 = Math.min(t3[H] ?? 0, ej.options.length - 1);
          eP.current.flash(String(e4 + 1)), eP.current.select(ej.options[e4].value);
        },
        0 === H ? 900 : 620
      ) : window.setTimeout(() => {
        eP.current.flash("enter"), eP.current.advance();
      }, 560) : "done" === B2 && (e3 = window.setTimeout(() => {
        eg((e4) => e4 + 1), eP.current.restart();
      }, 3e3)), () => window.clearTimeout(e3);
    }, [eC, B2, H, ek, ey, ej]), (0, r.useEffect)(() => {
      let e3 = ef.current;
      if (!e3 || "u" < typeof IntersectionObserver) return void eh(true);
      let t3 = new IntersectionObserver(([e4]) => eh(e4?.isIntersecting ?? false), {
        threshold: 0.35
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useEffect)(() => {
      if (!eb.current) return;
      let e3 = requestAnimationFrame(() => {
        let e4 = ef.current;
        if (!e4) return;
        let t3 = e4.querySelector(`[data-step="${eT}"]`), a3 = document.activeElement;
        (!a3 || !e4.contains(a3) || a3.closest("[data-step]") && !t3?.contains(a3)) && (t3?.querySelector('[role="radio"][tabindex="0"]') ?? e4).focus({
          preventScroll: true
        });
      });
      return () => cancelAnimationFrame(e3);
    }, [eT]), (0, r.useEffect)(
      () => () => {
        window.clearTimeout(e_.current), window.clearTimeout(ev.current);
      },
      []
    );
    let eD = `${$2}-title`, ez = "question" === B2 ? `Question ${H + 1} of ${q2}` : "setup" === B2 ? J ? "Setup paused" : "Setting up" : "Ready", eM = "question" === B2 && H > 0 || "setup" === B2 && null !== J || "done" === B2, eO = {
      initial: L2 ? { opacity: 0 } : { opacity: 0, y: 2 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: b.T.duration.fast, ease: z, delay: 0.04 }
      },
      exit: { opacity: 0, transition: { duration: 0.1, ease: z } }
    };
    if ("question" === B2 && ej) {
      let e3 = Math.max(
        0,
        ej.options.findIndex((e4) => e4.value === ek)
      );
      S2 = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)("div", {
            className: P().head,
            children: [
              (0, n.jsx)("h3", {
                id: eD,
                className: P().title,
                children: ej.title
              }),
              ej.description ? (0, n.jsx)("p", {
                className: P().description,
                children: ej.description
              }) : null
            ]
          }),
          (0, n.jsx)("div", {
            className: P().options,
            role: "radiogroup",
            "aria-labelledby": eD,
            children: ej.options.map((t3, a3) => {
              let r2 = t3.value === ek, i2 = String(a3 + 1);
              return (0, n.jsxs)(
                "button",
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": r2,
                  "data-index": a3,
                  tabIndex: a3 === e3 ? 0 : -1,
                  "aria-keyshortcuts": a3 < 9 ? i2 : void 0,
                  className: P().option,
                  onClick: () => eA(t3.value),
                  children: [
                    (0, n.jsx)("span", {
                      className: P().optionIcon,
                      "aria-hidden": "true",
                      children: t3.icon
                    }),
                    (0, n.jsx)("span", {
                      className: P().optionKey,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(o.N, {
                        initial: false,
                        mode: "popLayout",
                        children: r2 ? (0, n.jsx)(
                          s.PY1.span,
                          {
                            className: P().layer,
                            initial: L2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                            animate: { opacity: 1, scale: 1 },
                            exit: L2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                            transition: L2 ? { duration: 0 } : O,
                            children: (0, n.jsx)("span", {
                              className: P().check,
                              children: (0, n.jsx)(u.A, {
                                size: 12,
                                strokeWidth: 2.5
                              })
                            })
                          },
                          "check"
                        ) : a3 < 9 ? (0, n.jsx)(
                          s.PY1.span,
                          {
                            className: P().layer,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: {
                              duration: b.T.duration.instant
                            },
                            children: (0, n.jsx)(g.ue, {
                              size: "sm",
                              pressed: en === i2,
                              children: i2
                            })
                          },
                          "key"
                        ) : null
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: P().optionLabel,
                      children: t3.label
                    }),
                    t3.description ? (0, n.jsx)("span", {
                      className: P().optionDescription,
                      children: t3.description
                    }) : null
                  ]
                },
                t3.value
              );
            })
          })
        ]
      });
    } else
      S2 = "setup" === B2 ? (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)("div", {
            className: P().head,
            children: [
              (0, n.jsx)("h3", {
                className: P().title,
                children: (0, n.jsx)(f.n, {
                  active: !J,
                  children: "Personalizing your workspace"
                })
              }),
              (0, n.jsx)("p", {
                className: P().description,
                children: (0, n.jsx)(F, {
                  id: J ? "error" : "working",
                  reduced: L2,
                  children: J ?? "This takes a few seconds."
                })
              })
            ]
          }),
          (0, n.jsx)("ol", {
            className: P().list,
            "aria-label": "Setup progress",
            children: eN.map((e3, t3) => {
              let a3 = t3 < G ? "done" : t3 === G ? J ? "error" : "active" : "pending";
              return (0, n.jsxs)(
                "li",
                {
                  className: P().row,
                  "data-state": a3,
                  children: [
                    (0, n.jsx)(Y, { state: a3, reduced: L2 }),
                    (0, n.jsx)("span", {
                      className: P().rowLabel,
                      children: e3
                    }),
                    (0, n.jsx)("span", {
                      className: P().rowStatus,
                      children: "error" === a3 ? "Failed" : "done" === a3 ? (0, n.jsx)("span", {
                        className: P().srOnly,
                        children: "Done"
                      }) : null
                    })
                  ]
                },
                t3
              );
            })
          })
        ]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)("div", {
            className: P().head,
            children: [
              (0, n.jsxs)("h3", {
                className: I(P().title, P().doneTitle),
                children: [
                  (0, n.jsx)("span", {
                    className: P().doneMark,
                    "aria-hidden": "true",
                    children: (0, n.jsx)(W, { reduced: L2, size: 18 })
                  }),
                  x2
                ]
              }),
              (0, n.jsx)("p", {
                className: P().description,
                children: (0, n.jsx)(F, {
                  id: eo ? "note" : "ready",
                  reduced: L2,
                  children: eo ?? j2
                })
              })
            ]
          }),
          (0, n.jsx)("ul", {
            className: P().list,
            "aria-label": "Your answers",
            children: e2.map((t3, a3) => {
              let r2 = t3.options.find((e3) => e3.value === Q[t3.id]), i2 = t3.label ?? t3.title;
              return (0, n.jsx)(
                "li",
                {
                  children: (0, n.jsxs)("button", {
                    type: "button",
                    className: P().summary,
                    onClick: () => {
                      K2("question"), V(a3), el(null), eu(`Question ${a3 + 1} of ${q2}: ${e2[a3].title}`);
                    },
                    "aria-label": `Change ${i2.toLowerCase()}, currently ${r2?.label ?? "skipped"}`,
                    children: [
                      (0, n.jsx)("span", {
                        className: P().summaryName,
                        children: i2
                      }),
                      (0, n.jsxs)("span", {
                        className: I(P().summaryValue, !r2 && P().skipped),
                        children: [
                          r2?.icon ? (0, n.jsx)("span", {
                            className: P().summaryIcon,
                            "aria-hidden": "true",
                            children: r2.icon
                          }) : null,
                          (0, n.jsx)("span", {
                            className: P().summaryText,
                            children: r2?.label ?? "Skipped"
                          })
                        ]
                      }),
                      (0, n.jsx)(c.A, {
                        className: P().chevron,
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    ]
                  })
                },
                t3.id
              );
            })
          })
        ]
      });
    let eB = "question" === B2 ? (0, n.jsxs)(n.Fragment, {
      children: [
        "Continue",
        (0, n.jsx)(p.A, {
          className: P().enter,
          size: 14,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        })
      ]
    }) : "setup" === B2 ? J ? "Try again" : "Setting up" : k2;
    return (0, n.jsxs)("section", {
      ref: ef,
      className: I(P().root, N2),
      "aria-label": T2,
      tabIndex: -1,
      onKeyDown: (e3) => {
        if (ep(true), e3.metaKey || e3.ctrlKey || e3.altKey) return;
        let t3 = e3.target;
        if (t3.closest("input, textarea, select, [contenteditable='true']"))
          return;
        let a3 = t3.closest('[role="radio"]');
        if ("question" === B2 && ej && /^[1-9]$/.test(e3.key)) {
          let t4 = Number(e3.key) - 1, n2 = ej.options[t4];
          if (!n2) return;
          e3.preventDefault(), eE(e3.key), eA(n2.value), a3 && requestAnimationFrame(
            () => ef.current?.querySelector(`[data-step="${eT}"] [data-index="${t4}"]`)?.focus()
          );
          return;
        }
        if ("Enter" === e3.key) {
          if (t3.closest("button") && !a3) return;
          "question" !== B2 || void 0 === ek || e3.repeat || (e3.preventDefault(), eE("enter"), e$());
          return;
        }
        if (a3 && ej && ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e3.key)) {
          e3.preventDefault();
          let t4 = (Number(a3.dataset.index) + ("ArrowRight" === e3.key || "ArrowDown" === e3.key ? 1 : -1) + ej.options.length) % ej.options.length;
          eA(ej.options[t4].value), requestAnimationFrame(
            () => ef.current?.querySelector(`[data-step="${eT}"] [data-index="${t4}"]`)?.focus()
          );
        }
      },
      onPointerDown: () => ep(true),
      onFocus: () => {
        eb.current = true;
      },
      onBlur: (e3) => {
        e3.currentTarget.contains(e3.relatedTarget) || (eb.current = false);
      },
      children: [
        (0, n.jsx)("div", {
          className: P().progress,
          role: "progressbar",
          "aria-label": "Onboarding progress",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Math.round(100 * eS),
          children: (0, n.jsx)(s.PY1.div, {
            className: P().progressFill,
            initial: false,
            animate: { scaleX: eS },
            transition: L2 ? { duration: 0 } : { type: "spring", visualDuration: 0.4, bounce: 0 }
          })
        }),
        (0, n.jsxs)("div", {
          className: P().meta,
          children: [
            (0, n.jsx)(F, {
              id: ez,
              className: P().metaText,
              reduced: L2,
              children: ez
            }),
            (0, n.jsx)("button", {
              type: "button",
              className: I(P().skip, "question" !== B2 && P().hidden),
              onClick: () => {
                void 0 !== ek ? eA(void 0) : _2?.(ej.id, void 0, Q), e$();
              },
              tabIndex: "question" === B2 ? 0 : -1,
              "aria-hidden": "question" !== B2 || void 0,
              disabled: "question" !== B2,
              children: "Skip"
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: ew,
          className: P().stageClip,
          children: (0, n.jsx)("div", {
            ref: ex,
            className: P().stage,
            children: (0, n.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: (0, n.jsx)(
                s.PY1.div,
                { "data-step": eT, className: P().step, ...eO, children: S2 },
                eT
              )
            })
          })
        }),
        (0, n.jsxs)("div", {
          className: P().footer,
          children: [
            (0, n.jsx)(y.$, {
              variant: "ghost",
              size: "sm",
              className: I(P().back, !eM && P().hidden),
              onClick: () => {
                if ("done" === B2) return void eR();
                let t3 = "setup" === B2 ? q2 - 1 : H - 1;
                t3 < 0 || (K2("question"), V(t3), ee(null), eu(`Question ${t3 + 1} of ${q2}: ${e2[t3].title}`));
              },
              disabled: !eM,
              tabIndex: eM ? 0 : -1,
              "aria-hidden": !eM || void 0,
              children: "done" === B2 ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(m.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  "Start over"
                ]
              }) : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(h.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  "Back"
                ]
              })
            }),
            (0, n.jsx)(y.$, {
              variant: "primary",
              size: "sm",
              className: P().cta,
              "data-pressed": "enter" === en || void 0,
              disabled: "question" === B2 && void 0 === ek,
              loading: "setup" === B2 && !J || ei,
              "aria-keyshortcuts": "question" === B2 ? "Enter" : void 0,
              onClick: "question" === B2 ? e$ : "setup" === B2 ? eL : eq,
              children: eB
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: P().srOnly,
          "aria-live": "polite",
          role: "status",
          children: ed
        })
      ]
    });
  }
  let K = U;
}

__m(__module,__exports,__require);
}