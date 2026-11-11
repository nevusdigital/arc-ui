function(__module,__exports,__require){
"use strict";
function __m(e, a, n) {
  "use strict";
  n.r(a), n.d(a, { TrialBannerDemo: () => R, default: () => W });
  var r = n(95155), t = n(12115), i = n(66558), l = n(57793), s = n(40093), d = n(18310), o = n(80642), c = n(25354), u = n(57465), h = n(64577), _ = n(5736), b = n(9005), m = n(35484), p = n(76599), x = n(7770), g = n(51288), f = n(90570), j = n.n(f);
  let v = Date.UTC(2026, 9, 27), w = [...x.T.ease.standard], y = { type: "spring", visualDuration: 0.24, bounce: 0 }, N = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), k = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), S = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "UTC" }), $ = (e2, a2) => `${e2} ${a2}${1 === e2 ? "" : "s"}`, T = (...e2) => e2.filter(Boolean).join(" "), A = [
    {
      id: "sso",
      label: "Single sign-on with Okta",
      icon: (0, r.jsx)(function({ size: e2 = 14, ...a2 }) {
        return (0, r.jsx)("svg", {
          width: e2,
          height: e2,
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          ...a2,
          children: (0, r.jsx)("path", {
            fill: "#007DC1",
            d: "M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z"
          })
        });
      }, {})
    },
    {
      id: "slack",
      label: "Slack alerts",
      detail: "4 channels",
      icon: (0, r.jsx)(function({ size: e2 = 14, ...a2 }) {
        return (0, r.jsxs)("svg", {
          width: e2,
          height: e2,
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          ...a2,
          children: [
            (0, r.jsx)("path", {
              fill: "#E01E5A",
              d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
            }),
            (0, r.jsx)("path", {
              fill: "#36C5F0",
              d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
            }),
            (0, r.jsx)("path", {
              fill: "#2EB67D",
              d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
            }),
            (0, r.jsx)("path", {
              fill: "#ECB22E",
              d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
            })
          ]
        });
      }, {})
    },
    {
      id: "linear",
      label: "Linear issue sync",
      detail: "148 issues",
      icon: (0, r.jsx)(function({ size: e2 = 14, ...a2 }) {
        return (0, r.jsx)("svg", {
          width: e2,
          height: e2,
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          ...a2,
          children: (0, r.jsx)("path", {
            fill: "#5E6AD2",
            d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
          })
        });
      }, {})
    },
    {
      id: "seats",
      label: "Team seats",
      detail: "12 in use",
      icon: (0, r.jsx)(u.A, { size: 14, strokeWidth: 1.8 })
    }
  ];
  function L({
    variant: e2 = "banner",
    plan: a2 = "Pro",
    daysLeft: n2 = 9,
    trialDays: i2 = 14,
    endsAt: l2,
    warnAt: u2 = 3,
    workspace: p2 = "Northwind",
    features: x2 = A,
    lossSummary: f2 = "Okta SSO and 12 seats",
    onAddPayment: y2,
    onComparePlans: E2,
    onManageBilling: I2,
    onDismiss: B2,
    onSnooze: P2,
    collapseTo: R2 = "pill",
    dismissible: W2 = true,
    snoozable: O = true,
    className: Y
  }) {
    let U, F = !!(0, d.I)(), [Z, H] = (0, t.useState)("idle"), [V, J] = (0, t.useState)(false), [K, Q] = (0, t.useState)(false), [q, X] = (0, t.useState)(null), [G, ee] = (0, t.useState)(""), ea = (0, t.useRef)(null), en = (0, t.useRef)(0), er = (0, t.useRef)(null), et = (0, t.useRef)(null), ei = (0, t.useRef)(null);
    (0, t.useEffect)(
      () => () => {
        ea.current?.abort(), window.clearTimeout(en.current);
      },
      []
    );
    let el = Math.max(0, Math.ceil(n2)), es = new Date(void 0 !== l2 ? l2 : v + 864e5 * el), ed = "added" === Z ? "upgraded" : el <= 0 ? "expired" : el <= u2 ? "warning" : "active", eo = "upgraded" === ed ? 1 : "expired" === ed ? 0 : Math.min(1, el / Math.max(1, i2)), ec = N.format(es), eu = k.format(es), eh = S.format(es), e_ = {
      active: {
        title: `${$(el, "day")} left in your ${a2} trial`,
        sub: `Keep ${f2} after ${eu}.`,
        meta: `Trial ends ${ec}`,
        list: "Add a card to keep",
        pill: `${$(el, "day")} left`
      },
      warning: {
        title: 1 === el ? `Your ${a2} trial ends tomorrow` : `Your ${a2} trial ends in ${$(el, "day")}`,
        sub: `On ${eh} you lose ${f2}.`,
        meta: `Ends ${ec}`,
        list: `You lose these on ${eh}`,
        pill: `${$(el, "day")} left`
      },
      expired: {
        title: `Your ${a2} trial has ended`,
        sub: `${f2[0]?.toUpperCase() ?? ""}${f2.slice(1)} are paused on Free.`,
        meta: `Ended ${ec}`,
        list: `Paused while ${p2} is on Free`,
        pill: "Trial ended"
      },
      upgraded: {
        title: `You're all set on ${a2}`,
        sub: `Payment method added. Billing starts ${eu}.`,
        meta: `Billing starts ${ec}`,
        list: `Staying on ${a2}`,
        pill: `${a2} active`
      }
    }[ed], eb = "error" === Z ? "Billing didn't open. Check your connection and try again." : null, em = q ?? eb ?? e_.sub, ep = "upgraded" === ed ? "Done" : "error" === Z ? "Try again" : "expired" === ed ? `Upgrade to ${a2}` : "Add payment method", ex = "upgraded" === ed ? "Manage billing" : "Compare plans", eg = [{ id: "tomorrow", label: "Remind me tomorrow", days: 1 }];
    "active" === ed && el > 3 && eg.push({ id: "3-days", label: "Remind me in 3 days", days: 3 }), "active" === ed && el > u2 + 1 && eg.push({
      id: "warning",
      label: `Remind me when ${$(u2, "day")} are left`,
      days: el - u2
    }), (0, t.useLayoutEffect)(() => {
      let e3 = ei.current;
      e3 && (ei.current = null, ("pill" === e3 ? er : et).current?.focus());
    });
    let ef = (0, t.useCallback)((e3) => {
      window.clearTimeout(en.current), X(e3), en.current = window.setTimeout(() => X(null), 2200);
    }, []), ej = (a3) => {
      Q(false), X(null), ee(a3), "pill" !== e2 && (J(true), ei.current = "pill" === R2 ? "pill" : null);
    }, ev = () => {
      B2?.(), ej(
        B2 ? "Trial banner hidden." : "Trial banner hidden. Simulated, nothing was saved."
      );
    }, ew = (e3) => {
      let a3 = new Date(v + 864e5 * e3.days);
      P2?.({ ...e3, until: a3 }), ej(
        `Snoozed until ${N.format(a3)}.${P2 ? "" : " Simulated, nothing was saved."}`
      );
    }, ey = async () => {
      if ("adding" === Z) return;
      if ("upgraded" === ed) return void ev();
      ea.current?.abort();
      let e3 = new AbortController();
      ea.current = e3, X(null), H("adding"), ee(
        y2 ? "Opening billing." : "Opening billing. Simulated, no card is charged."
      );
      try {
        if (y2) await y2(e3.signal);
        else {
          var n3;
          await (n3 = e3.signal, new Promise((e4, a3) => {
            let r2 = window.setTimeout(e4, 900);
            n3.addEventListener(
              "abort",
              () => {
                window.clearTimeout(r2), a3(n3.reason);
              },
              { once: true }
            );
          }));
        }
        if (e3.signal.aborted) return;
        H("added"), ee(
          y2 ? `Payment method added. You stay on ${a2}.` : `Payment method added. You stay on ${a2}. Simulated, no card was charged.`
        );
      } catch {
        if (e3.signal.aborted) return;
        H("error"), ee("Billing didn't open. Try again.");
      }
    }, eN = () => {
      "upgraded" === ed ? I2 ? I2() : ef("Simulated: this opens your billing settings.") : E2 ? E2() : ef("Simulated: this opens your plans page.");
    }, ek = (e3, a3, n3) => (0, r.jsx)(C, {
      size: e3,
      stroke: a3,
      progress: eo,
      tone: ed,
      reduced: F,
      children: n3 && (0, r.jsx)(z, {
        id: "upgraded" === ed ? "check" : "expired" === ed ? "lock" : String(el),
        reduced: F,
        className: j().ringCenter,
        children: "upgraded" === ed ? (0, r.jsx)(h.A, { size: 14, strokeWidth: 2 }) : "expired" === ed ? (0, r.jsx)(_.A, { size: 14, strokeWidth: 1.8 }) : (0, r.jsx)("span", {
          className: j().ringDays,
          children: el
        })
      })
    }), eS = (0, r.jsxs)("span", {
      className: j().icons,
      children: [
        O && (0, r.jsx)(M, { options: eg, onSelect: ew }),
        W2 && (0, r.jsx)("button", {
          type: "button",
          className: j().iconButton,
          "aria-label": "Dismiss",
          onClick: ev,
          children: (0, r.jsx)(b.A, {
            size: 16,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          })
        })
      ]
    }), e$ = (e3) => (0, r.jsx)(z, {
      id: em,
      reduced: F,
      className: e3,
      children: (0, r.jsxs)("span", {
        className: j().subInner,
        children: [
          eb && !q && (0, r.jsx)(m.A, {
            className: j().errorIcon,
            size: 14,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          }),
          (0, r.jsx)("span", { className: j().subText, children: em })
        ]
      })
    }), eT = (e3) => (0, r.jsx)(g.$, {
      variant: "ghost",
      size: e3,
      onClick: eN,
      children: ex
    }), eA = (e3) => (0, r.jsx)(g.$, {
      ref: et,
      variant: "primary",
      size: e3,
      loading: "adding" === Z,
      onClick: ey,
      children: ep
    }), eL = (e3) => (0, r.jsxs)("div", {
      className: T(j().card, e3 && j().cardFloating),
      "data-tone": ed,
      children: [
        (0, r.jsxs)("div", {
          className: j().cardHead,
          children: [
            ek(40, 3, true),
            !e3 && eS,
            e3 && (0, r.jsxs)("span", {
              className: j().icons,
              children: [
                O && (0, r.jsx)(M, { options: eg, onSelect: ew }),
                (0, r.jsx)(s.bm, {
                  className: j().iconButton,
                  "aria-label": "Close",
                  children: (0, r.jsx)(b.A, {
                    size: 16,
                    strokeWidth: 1.8,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(z, {
          id: e_.title,
          reduced: F,
          className: j().cardTitle,
          children: (0, r.jsx)("span", {
            className: j().truncate,
            children: e_.title
          })
        }),
        q || eb ? e$(j().cardMeta) : (0, r.jsx)(z, {
          id: e_.meta,
          reduced: F,
          className: j().cardMeta,
          children: (0, r.jsx)("span", {
            className: j().truncate,
            children: e_.meta
          })
        }),
        (0, r.jsxs)("div", {
          className: j().list,
          children: [
            (0, r.jsx)(z, {
              id: e_.list,
              reduced: F,
              className: j().listLabel,
              children: (0, r.jsx)("span", {
                className: j().truncate,
                children: e_.list
              })
            }),
            (0, r.jsx)("ul", {
              className: j().rows,
              children: x2.map(
                (e4) => (0, r.jsxs)(
                  "li",
                  {
                    className: j().row,
                    children: [
                      (0, r.jsx)("span", {
                        className: j().rowIcon,
                        "aria-hidden": "true",
                        children: e4.icon
                      }),
                      (0, r.jsx)("span", {
                        className: j().rowLabel,
                        children: e4.label
                      }),
                      e4.detail && (0, r.jsx)("span", {
                        className: j().rowDetail,
                        children: e4.detail
                      }),
                      (0, r.jsx)(z, {
                        id: ed,
                        reduced: F,
                        className: j().rowState,
                        children: "expired" === ed ? (0, r.jsx)(_.A, {
                          size: 14,
                          strokeWidth: 1.8,
                          "aria-label": "Paused"
                        }) : "upgraded" === ed ? (0, r.jsx)(h.A, {
                          size: 14,
                          strokeWidth: 2,
                          "aria-label": "Kept"
                        }) : (0, r.jsx)("span", {})
                      })
                    ]
                  },
                  e4.id
                )
              )
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: j().cardActions,
          children: [eA("md"), eT("md")]
        })
      ]
    }), eC = (e3 = {}) => (0, r.jsxs)("button", {
      ref: er,
      type: "button",
      className: j().pill,
      "data-tone": ed,
      ...e3,
      "aria-label": `${a2} trial: ${e_.pill}${V ? ". Show details" : ""}`,
      children: [
        (0, r.jsx)(z, {
          id: "expired" === ed ? "lock" : "upgraded" === ed ? "check" : "ring",
          reduced: F,
          className: j().pillLead,
          children: "expired" === ed ? (0, r.jsx)(_.A, { size: 14, strokeWidth: 1.8 }) : "upgraded" === ed ? (0, r.jsx)(h.A, { size: 14, strokeWidth: 2 }) : (0, r.jsx)(C, {
            size: 16,
            stroke: 2,
            progress: eo,
            tone: ed,
            reduced: F
          })
        }),
        (0, r.jsx)(D, { text: e_.pill, reduced: F })
      ]
    }), ez = e2;
    return "pill" === e2 ? U = (0, r.jsxs)(s.bL, {
      open: K,
      onOpenChange: Q,
      children: [
        (0, r.jsx)(s.l9, { asChild: true, children: eC() }),
        (0, r.jsx)(s.ZL, {
          children: (0, r.jsx)(s.UC, {
            className: j().popover,
            side: "bottom",
            align: "start",
            sideOffset: 8,
            collisionPadding: 12,
            "aria-label": `${a2} trial`,
            children: eL(true)
          })
        })
      ]
    }) : V ? (ez = "collapsed", U = "pill" === R2 ? eC({
      onClick: () => {
        J(false), ee(""), ei.current = "primary";
      }
    }) : null) : U = "card" === e2 ? (0, r.jsx)("section", {
      "aria-label": `${a2} trial`,
      children: eL(false)
    }) : (0, r.jsxs)("section", {
      className: j().banner,
      "data-tone": ed,
      "aria-label": `${a2} trial`,
      children: [
        (0, r.jsx)("span", {
          className: j().bannerRing,
          children: ek(28, 2.5, true)
        }),
        (0, r.jsxs)("div", {
          className: j().bannerText,
          children: [
            (0, r.jsx)(z, {
              id: e_.title,
              reduced: F,
              className: j().bannerTitle,
              children: (0, r.jsx)("span", {
                className: j().truncate,
                children: e_.title
              })
            }),
            e$(j().bannerSub)
          ]
        }),
        (0, r.jsxs)("div", {
          className: j().bannerActions,
          children: [eT("sm"), eA("sm")]
        }),
        eS
      ]
    }), (0, r.jsxs)("div", {
      className: T(
        j().root,
        "pill" === e2 ? j().isPill : "card" === e2 ? j().isCard : j().isBanner,
        Y
      ),
      children: [
        (0, r.jsx)(o.N, {
          mode: "wait",
          initial: false,
          children: (0, r.jsx)(
            c.PY1.div,
            {
              className: j().view,
              initial: !F && { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { duration: 0.16 * !F, ease: w }
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.1 * !F, ease: w }
              },
              children: U
            },
            ez
          )
        }),
        (0, r.jsx)("span", {
          className: j().srOnly,
          role: "status",
          "aria-live": "polite",
          children: G
        })
      ]
    });
  }
  function C({
    size: e2,
    stroke: a2,
    progress: n2,
    tone: t2,
    reduced: i2,
    children: l2
  }) {
    let s2 = (e2 - a2) / 2, d2 = e2 / 2;
    return (0, r.jsxs)("span", {
      className: j().ring,
      "data-tone": t2,
      style: { width: e2, height: e2 },
      "aria-hidden": "true",
      children: [
        (0, r.jsxs)("svg", {
          width: e2,
          height: e2,
          viewBox: `0 0 ${e2} ${e2}`,
          className: j().ringSvg,
          children: [
            (0, r.jsx)("circle", {
              className: j().ringTrack,
              cx: d2,
              cy: d2,
              r: s2,
              strokeWidth: a2,
              fill: "none"
            }),
            (0, r.jsx)(c.PY1.circle, {
              className: j().ringValue,
              cx: d2,
              cy: d2,
              r: s2,
              strokeWidth: a2,
              fill: "none",
              pathLength: 1,
              strokeDasharray: "1 1",
              strokeLinecap: "round",
              initial: false,
              animate: { strokeDashoffset: 1 - n2, opacity: +(n2 > 0) },
              transition: i2 ? { duration: 0 } : { strokeDashoffset: y, opacity: { duration: 0.16, ease: w } }
            })
          ]
        }),
        l2
      ]
    });
  }
  function z({ id: e2, children: a2, className: n2, reduced: t2 }) {
    return (0, r.jsx)("span", {
      className: T(j().swap, n2),
      children: (0, r.jsx)(o.N, {
        initial: false,
        children: (0, r.jsx)(
          c.PY1.span,
          {
            className: j().swapItem,
            initial: !t2 && { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16 * !t2, ease: w }
            },
            exit: {
              opacity: 0,
              y: 0,
              transition: { duration: 0.1 * !t2, ease: w }
            },
            children: a2
          },
          e2
        )
      })
    });
  }
  function D({ text: e2, reduced: a2 }) {
    let n2 = (0, t.useRef)(null), i2 = (0, t.useRef)(null), [l2, s2] = (0, t.useState)({ width: "auto", animate: false });
    return (0, t.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = e3.textContent, n3 = null !== i2.current && i2.current !== a4;
        i2.current = a4, s2({
          width: Math.ceil(e3.getBoundingClientRect().width),
          animate: n3
        });
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, r.jsxs)(c.PY1.span, {
      className: j().pillLabel,
      initial: false,
      animate: { width: l2.width },
      transition: l2.animate && !a2 ? y : { duration: 0 },
      children: [
        (0, r.jsx)("span", {
          ref: n2,
          className: j().pillMeasure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, r.jsx)(z, {
          id: e2,
          reduced: a2,
          children: (0, r.jsx)("span", {
            className: j().truncate,
            children: e2
          })
        })
      ]
    });
  }
  function M({ options: e2, onSelect: a2 }) {
    return (0, r.jsxs)(l.bL, {
      modal: false,
      children: [
        (0, r.jsx)(l.l9, {
          className: j().iconButton,
          "aria-label": "Snooze",
          children: (0, r.jsx)(p.A, {
            size: 16,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          })
        }),
        (0, r.jsx)(l.ZL, {
          children: (0, r.jsx)(l.UC, {
            className: j().menu,
            align: "end",
            sideOffset: 6,
            collisionPadding: 12,
            loop: true,
            children: e2.map(
              (e3) => (0, r.jsx)(
                l.q7,
                {
                  className: j().menuItem,
                  onSelect: () => a2(e3),
                  children: e3.label
                },
                e3.id
              )
            )
          })
        })
      ]
    });
  }
  var E = n(18305), I = n.n(E);
  let B = [
    { value: "banner", label: "Banner" },
    { value: "card", label: "Sidebar card" },
    { value: "pill", label: "Pill" }
  ], P = [
    { value: "9", label: "9 days left" },
    { value: "2", label: "2 days left" },
    { value: "0", label: "Expired" }
  ];
  function R() {
    let [e2, a2] = (0, t.useState)("banner"), [n2, l2] = (0, t.useState)("9");
    return (0, r.jsxs)("div", {
      className: I().demo,
      children: [
        (0, r.jsxs)("div", {
          className: I().controls,
          children: [
            (0, r.jsx)(i.A, {
              label: "Variant",
              options: B,
              value: e2,
              onValueChange: (e3) => a2(e3)
            }),
            (0, r.jsx)(i.A, {
              label: "Trial",
              options: P,
              value: n2,
              onValueChange: l2
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: I().stage,
          "data-variant": e2,
          children: (0, r.jsx)(L, { variant: e2, daysLeft: Number(n2) }, e2)
        })
      ]
    });
  }
  let W = R;
}

__m(__module,__exports,__require);
}