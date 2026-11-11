function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { SpendAlert: () => E, default: () => P });
  var s = t(95155), n = t(12115), r = t(18310), l = t(80642), i = t(25354), d = t(64962), c = t(11012), o = t(23723), u = t(93954), p = t(75796), h = t(51288), m = t(50680);
  function _({ size: e2 = 16, ...a2 }) {
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: e2,
      height: e2,
      "aria-hidden": "true",
      focusable: "false",
      ...a2,
      children: [
        (0, s.jsx)("path", {
          fill: "#E01E5A",
          d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
        }),
        (0, s.jsx)("path", {
          fill: "#36C5F0",
          d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
        }),
        (0, s.jsx)("path", {
          fill: "#2EB67D",
          d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
        }),
        (0, s.jsx)("path", {
          fill: "#ECB22E",
          d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        })
      ]
    });
  }
  function f({ size: e2 = 16, ...a2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      width: e2,
      height: e2,
      "aria-hidden": "true",
      focusable: "false",
      ...a2,
      children: (0, s.jsx)("path", {
        fill: "#06AC38",
        d: "M16.965 1.18C15.085.164 13.769 0 10.683 0H3.73v14.55h6.926c2.743 0 4.8-.164 6.61-1.37 1.975-1.303 3.004-3.484 3.004-6.007 0-2.716-1.262-4.896-3.305-5.994zm-5.5 10.326h-3.86V3.135l3.65-.014c3.325-.041 4.99 1.13 4.99 4.12 0 3.21-2.059 4.265-4.78 4.265zM3.73 17.43h3.867V24H3.73Z"
      })
    });
  }
  var b = t(1952), x = t.n(b);
  let g = {
    label: "October",
    short: "Oct",
    day: 27,
    days: 31,
    resetsOn: "Nov 1"
  }, y = {
    email: "finance@acme.com",
    slack: "#eng-spend",
    pagerduty: "Platform on-call"
  }, v = {
    budget: 5e3,
    threshold: 80,
    channels: { email: true, slack: true, pagerduty: false },
    hardStop: false
  }, j = [0.16, 1, 0.3, 1], N = (...e2) => e2.filter(Boolean).join(" "), k = (e2, a2, t2) => Math.min(t2, Math.max(a2, e2)), w = (e2) => e2.toLocaleString("en-US", { maximumFractionDigits: 2 });
  function S({ id: e2, children: a2, className: t2 }) {
    let n2 = (0, r.I)();
    return (0, s.jsx)("span", {
      className: N(x().fade, t2),
      children: (0, s.jsx)(l.N, {
        initial: false,
        children: (0, s.jsx)(
          i.PY1.span,
          {
            className: x().fadeItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: n2 ? 0.12 : 0.16, ease: j }
            },
            exit: { opacity: 0, transition: { duration: 0.1 } },
            children: a2
          },
          e2
        )
      })
    });
  }
  let A = { success: d.A, warning: c.A, danger: c.A, muted: o.A };
  function M({ tone: e2, icon: a2, children: t2 }) {
    let n2 = a2 ?? A[e2];
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(n2, {
          size: 14,
          strokeWidth: 2,
          className: x().toneIcon,
          "data-tone": e2,
          "aria-hidden": "true"
        }),
        (0, s.jsx)("span", { className: x().ellipsis, children: t2 })
      ]
    });
  }
  function C({
    value: e2,
    onChange: a2,
    spendPct: t2,
    forecastPct: l2,
    markers: i2,
    labelId: d2,
    valueText: c2,
    disabled: o2,
    over: u2
  }) {
    let p2 = (0, r.I)(), h2 = (0, n.useRef)(null), m2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), [f2, b2] = (0, n.useState)(false), [g2, y2] = (0, n.useState)(false), [v2, j2] = (0, n.useState)(false), [N2, w2] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      let e3 = h2.current;
      if (!e3 || p2) return;
      if ("u" < typeof IntersectionObserver) {
        let e4 = requestAnimationFrame(() => j2(true));
        return () => cancelAnimationFrame(e4);
      }
      let a3 = new IntersectionObserver(
        ([e4]) => {
          e4?.isIntersecting && (a3.disconnect(), w2(true), requestAnimationFrame(() => j2(true)));
        },
        { threshold: 0.4 }
      );
      return a3.observe(e3), () => a3.disconnect();
    }, [p2]), (0, n.useEffect)(() => {
      if (!N2) return;
      let e3 = setTimeout(() => w2(false), 760);
      return () => clearTimeout(e3);
    }, [N2]);
    let S2 = (0, n.useMemo)(() => [...i2].sort((e3, a3) => e3 - a3), [i2]), A2 = (a3) => {
      let t3 = h2.current?.getBoundingClientRect();
      if (!t3 || 0 === t3.width) return e2;
      let s2 = k(Math.round((a3 - t3.left) / t3.width * 100), 10, 100);
      return S2.find((e3) => 2 >= Math.abs(e3 - s2)) ?? s2;
    }, M2 = () => {
      _2.current = null, b2(false), y2(false);
    }, E2 = v2 || !!p2, P2 = {
      "--t": `${e2}%`,
      "--spend": `${E2 ? t2 : 0}%`,
      "--forecast": `${E2 ? l2 : 0}%`
    };
    return (0, s.jsxs)("div", {
      className: x().bar,
      style: P2,
      "data-dragging": f2 || void 0,
      "data-intro": N2 || void 0,
      "data-disabled": o2 || void 0,
      "data-over": E2 && u2 || void 0,
      children: [
        (0, s.jsxs)("div", {
          ref: h2,
          className: x().rail,
          onPointerDown: (e3) => {
            o2 || 0 !== e3.button || (e3.preventDefault(), e3.currentTarget.setPointerCapture(e3.pointerId), _2.current = { id: e3.pointerId, moved: false }, y2(true), m2.current?.focus({ preventScroll: true }), a2(A2(e3.clientX)));
          },
          onPointerMove: (e3) => {
            let t3 = _2.current;
            t3 && t3.id === e3.pointerId && (t3.moved || (t3.moved = true, b2(true)), a2(A2(e3.clientX)));
          },
          onPointerUp: M2,
          onPointerCancel: M2,
          onLostPointerCapture: M2,
          children: [
            (0, s.jsxs)("div", {
              className: x().track,
              "aria-hidden": "true",
              children: [
                (0, s.jsx)("span", { className: x().forecastFill }),
                (0, s.jsx)("span", { className: x().spendFill }),
                (0, s.jsx)("span", { className: x().overFill }),
                S2.filter((e3) => e3 < 100).map(
                  (e3) => (0, s.jsx)(
                    "span",
                    { className: x().notch, style: { left: `${e3}%` } },
                    e3
                  )
                )
              ]
            }),
            (0, s.jsx)("div", {
              ref: m2,
              className: x().thumb,
              "data-pressed": g2 || void 0,
              role: "slider",
              tabIndex: o2 ? -1 : 0,
              "aria-labelledby": d2,
              "aria-valuemin": 10,
              "aria-valuemax": 100,
              "aria-valuenow": e2,
              "aria-valuetext": c2,
              "aria-disabled": o2 || void 0,
              onKeyDown: o2 ? void 0 : (t3) => {
                let s2, n2 = t3.shiftKey ? 10 : 1;
                "ArrowRight" === t3.key || "ArrowUp" === t3.key ? s2 = e2 + n2 : "ArrowLeft" === t3.key || "ArrowDown" === t3.key ? s2 = e2 - n2 : "PageUp" === t3.key ? s2 = S2.find((a3) => a3 > e2) ?? 100 : "PageDown" === t3.key ? s2 = [...S2].reverse().find((a3) => a3 < e2) ?? 10 : "Home" === t3.key ? s2 = 10 : "End" === t3.key && (s2 = 100), void 0 !== s2 && (t3.preventDefault(), a2(k(s2, 10, 100)));
              }
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: x().markers,
          children: S2.map(
            (t3) => (0, s.jsxs)(
              "button",
              {
                type: "button",
                tabIndex: -1,
                className: x().marker,
                "data-edge": 100 === t3 || void 0,
                "data-active": t3 === e2 || void 0,
                style: { left: `${t3}%` },
                disabled: o2,
                onClick: () => a2(t3),
                "aria-label": `Alert at ${t3}%`,
                children: [t3, "%"]
              },
              t3
            )
          )
        })
      ]
    });
  }
  function E({
    title: e2 = "Spend alerts",
    project: a2 = "Production",
    scope: t2 = "Model API usage",
    spend: r2 = 3412.8,
    forecast: l2,
    period: i2 = g,
    currency: d2 = "USD",
    defaultValue: o2,
    markers: b2 = [50, 80, 100],
    destinations: j2,
    appName: A2 = "Acme Billing",
    lastSaved: P2 = "Last edited Oct 24 by Maya Chen",
    onChange: T,
    onSave: R,
    onSendTest: I,
    className: $
  }) {
    let F, z = (0, n.useId)(), D = {
      title: `${z}-title`,
      budget: `${z}-budget`,
      budgetMeta: `${z}-budget-meta`,
      threshold: `${z}-threshold`,
      hardStop: `${z}-hardstop`
    }, L = { ...y, ...j2 }, O = (0, n.useMemo)(
      () => ({ ...v, ...o2, channels: { ...v.channels, ...o2?.channels } }),
      []
    ), [B, q] = (0, n.useState)(() => w(O.budget)), [H, U] = (0, n.useState)(() => k(Math.round(O.threshold), 10, 100)), [Y, W] = (0, n.useState)(O.channels), [K, Q] = (0, n.useState)(O.hardStop), [X, Z] = (0, n.useState)(O), [V, G] = (0, n.useState)("idle"), [J, ee] = (0, n.useState)(""), [ea, et] = (0, n.useState)(0), es = (0, n.useRef)(null), en = Number.isFinite(F = parseFloat(B.replace(/[^0-9.]/g, ""))) ? Math.min(F, 1e7) : 0, er = (0, n.useMemo)(
      () => ({ budget: en, threshold: H, channels: Y, hardStop: K }),
      [en, H, Y, K]
    ), el = en > 0, ei = er.budget !== X.budget || er.threshold !== X.threshold || er.hardStop !== X.hardStop || er.channels.email !== X.channels.email || er.channels.slack !== X.channels.slack || er.channels.pagerduty !== X.channels.pagerduty, ed = "saving" === V || "testing" === V, ec = (0, n.useMemo)(() => {
      let e3 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: d2,
        maximumFractionDigits: 0
      }), a3 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: d2,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return (t3, s2 = false) => (s2 ? a3 : e3).format(t3);
    }, [d2]), eo = r2 / Math.max(1, i2.day), eu = l2 ?? eo * i2.days, ep = en * H / 100, eh = el ? k(r2 / en * 100, 0, 100) : 0, em = el ? k(eu / en * 100, 0, 100) : 0, e_ = i2.days - i2.day + 1, ef = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      if (!ef.current) {
        ef.current = true;
        return;
      }
      T?.(er), G(
        (e3) => "saved" === e3 || "tested" === e3 || "error" === e3 ? "idle" : e3
      );
    }, [er]), (0, n.useEffect)(() => () => es.current?.abort(), []);
    let eb = (() => {
      if (!el) return { key: "none", tone: "muted", label: "No budget set" };
      if (r2 >= en)
        return { key: "over", tone: "danger", label: "Over budget" };
      if (r2 >= ep)
        return { key: "past", tone: "warning", label: `Past ${H}%` };
      if (eu >= ep) {
        let e3 = k(Math.ceil(ep / eo), i2.day, i2.days);
        return {
          key: "cross",
          tone: "warning",
          icon: u.A,
          label: `Hits ${H}% ${i2.short} ${e3}`
        };
      }
      return { key: "ok", tone: "success", label: "On track" };
    })(), ex = el ? r2 > en ? {
      key: "over",
      tone: "warning",
      label: `Already ${ec(r2 - en)} over this month`
    } : {
      key: "ok",
      label: `Resets ${i2.resetsOn}, in ${e_} ${1 === e_ ? "day" : "days"}`
    } : {
      key: "invalid",
      tone: "danger",
      label: `Enter a budget above ${ec(0)}`
    }, eg = Object.keys(Y).filter((e3) => Y[e3]), ey = { email: "email", slack: "Slack", pagerduty: "PagerDuty" }, ev = async (e3) => {
      es.current?.abort();
      let a3 = new AbortController();
      es.current = a3, G("save" === e3 ? "saving" : "testing");
      try {
        let n2 = "save" === e3 ? R : I;
        if (n2) await n2(er, a3.signal);
        else {
          var t3, s2;
          await (t3 = "save" === e3 ? 700 : 900, s2 = a3.signal, new Promise((e4, a4) => {
            let n3 = setTimeout(e4, t3);
            s2.addEventListener(
              "abort",
              () => {
                clearTimeout(n3), a4(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          }));
        }
        if (a3.signal.aborted) return;
        if ("save" === e3) Z(er), G("saved");
        else {
          let e4;
          ee(
            (e4 = eg.map((e5) => ey[e5])).length <= 1 ? e4.join("") : `${e4.slice(0, -1).join(", ")} and ${e4[e4.length - 1]}`
          ), et((e5) => e5 + 1), G("tested");
        }
      } catch (e4) {
        if (e4?.name === "AbortError") return;
        G("error");
      }
    }, ej = "saving" === V ? { key: "saving", label: "Saving" } : "testing" === V ? { key: "testing", label: "Sending test alert" } : "error" === V ? {
      key: "error",
      tone: "danger",
      label: "Could not save. Try again."
    } : "saved" === V ? {
      key: "saved",
      tone: "success",
      label: R ? "Saved" : "Saved. Simulated, nothing was stored."
    } : "tested" === V ? {
      key: "tested",
      tone: "success",
      label: `Test sent to ${J}.${I ? "" : " Simulated, nothing was sent."}`
    } : el ? ei ? { key: "dirty", label: "Unsaved changes" } : { key: "clean", label: P2 } : { key: "invalid", label: "Enter a budget to save" }, eN = 100 === H, ek = eN ? "danger" : "warning", ew = eN ? K ? `${a2} used its budget. Requests paused` : `${a2} used its full budget` : `${a2} passed ${H}% of budget`, eS = [
      Y.email ? `Also emailed ${L.email}` : null,
      eN && Y.pagerduty ? `Paged ${L.pagerduty}` : null,
      eN && K ? `Blocked until ${i2.resetsOn}` : null
    ].filter(Boolean).join(" \xB7 ") || `Posted to ${L.slack} only`;
    return (0, s.jsxs)("section", {
      className: N(x().root, $),
      "aria-labelledby": D.title,
      children: [
        (0, s.jsxs)("header", {
          className: x().header,
          children: [
            (0, s.jsxs)("div", {
              className: x().heading,
              children: [
                (0, s.jsx)("h2", {
                  id: D.title,
                  className: x().title,
                  children: e2
                }),
                (0, s.jsxs)("p", {
                  className: x().meta,
                  children: [a2, " \xB7 ", t2, " in ", i2.label]
                })
              ]
            }),
            (0, s.jsx)(S, {
              id: eb.key,
              className: x().status,
              children: (0, s.jsx)(M, {
                tone: eb.tone,
                icon: eb.icon,
                children: eb.label
              })
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: N(x().section, x().budgetRow),
          children: [
            (0, s.jsxs)("div", {
              className: x().rowText,
              children: [
                (0, s.jsx)("label", {
                  htmlFor: D.budget,
                  className: x().label,
                  children: "Monthly budget"
                }),
                (0, s.jsx)(S, {
                  id: ex.key,
                  className: x().meta,
                  children: (0, s.jsx)("span", {
                    id: D.budgetMeta,
                    className: x().metaLine,
                    children: ex.tone ? (0, s.jsx)(M, { tone: ex.tone, children: ex.label }) : (0, s.jsx)("span", {
                      className: x().ellipsis,
                      children: ex.label
                    })
                  })
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: x().field,
              "data-invalid": !el || void 0,
              children: [
                (0, s.jsx)("span", {
                  className: x().affix,
                  "aria-hidden": "true",
                  children: "$"
                }),
                (0, s.jsx)("input", {
                  id: D.budget,
                  className: x().input,
                  inputMode: "decimal",
                  autoComplete: "off",
                  spellCheck: false,
                  value: B,
                  "aria-invalid": !el || void 0,
                  "aria-describedby": D.budgetMeta,
                  onChange: (e3) => q(e3.target.value.replace(/[^0-9.,]/g, "")),
                  onBlur: () => {
                    el && q(w(en));
                  },
                  onKeyDown: (e3) => {
                    if ("ArrowUp" !== e3.key && "ArrowDown" !== e3.key) return;
                    e3.preventDefault();
                    let a3 = e3.shiftKey ? 1e3 : 100;
                    q(
                      w(
                        Math.max(
                          0,
                          Math.round(
                            (en + ("ArrowUp" === e3.key ? a3 : -a3)) / a3
                          ) * a3
                        )
                      )
                    );
                  }
                }),
                (0, s.jsx)("span", {
                  className: x().affix,
                  "aria-hidden": "true",
                  children: d2
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: x().section,
          children: [
            (0, s.jsxs)("div", {
              className: x().rowHead,
              children: [
                (0, s.jsx)("span", {
                  id: D.threshold,
                  className: x().label,
                  children: "Alert at"
                }),
                (0, s.jsxs)("span", {
                  className: x().value,
                  "aria-hidden": "true",
                  children: [
                    (0, s.jsxs)("span", {
                      className: x().percent,
                      children: [H, "%"]
                    }),
                    (0, s.jsx)("span", {
                      className: x().dot,
                      children: "\xB7"
                    }),
                    (0, s.jsx)("span", { children: ec(el ? ep : 0) })
                  ]
                })
              ]
            }),
            (0, s.jsx)(C, {
              value: H,
              onChange: U,
              spendPct: eh,
              forecastPct: em,
              markers: b2,
              labelId: D.threshold,
              valueText: `${H}%, ${ec(ep)}`,
              disabled: !el,
              over: el && r2 >= en
            }),
            (0, s.jsxs)("div", {
              className: x().legend,
              children: [
                (0, s.jsxs)("span", {
                  className: x().legendItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: x().swatch,
                      "data-kind": "spend",
                      "aria-hidden": "true"
                    }),
                    (0, s.jsxs)("span", {
                      className: x().ellipsis,
                      children: ["Spent ", ec(r2, true)]
                    })
                  ]
                }),
                (0, s.jsxs)("span", {
                  className: x().legendItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: x().swatch,
                      "data-kind": "forecast",
                      "aria-hidden": "true"
                    }),
                    (0, s.jsxs)("span", {
                      className: x().ellipsis,
                      children: [
                        "Forecast ",
                        ec(eu),
                        " by ",
                        i2.short,
                        " ",
                        i2.days
                      ]
                    })
                  ]
                }),
                (0, s.jsx)("span", {
                  className: x().legendPct,
                  children: el ? `${Math.round(r2 / en * 100)}% used` : "No budget"
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: x().section,
          children: [
            (0, s.jsx)("span", { className: x().label, children: "Notify" }),
            (0, s.jsxs)("ul", {
              className: x().channels,
              children: [
                (0, s.jsxs)("li", {
                  className: x().channel,
                  children: [
                    (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      className: x().mailIcon,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsxs)("span", {
                      className: x().channelText,
                      children: [
                        (0, s.jsx)("span", {
                          className: x().channelName,
                          children: "Email"
                        }),
                        (0, s.jsx)("span", {
                          className: N(x().muted, x().ellipsis),
                          children: L.email
                        })
                      ]
                    }),
                    (0, s.jsx)(m.d, {
                      checked: Y.email,
                      onCheckedChange: (e3) => W((a3) => ({ ...a3, email: e3 })),
                      "aria-label": "Email alerts"
                    })
                  ]
                }),
                (0, s.jsxs)("li", {
                  className: x().channel,
                  children: [
                    (0, s.jsx)(_, { className: x().mark }),
                    (0, s.jsxs)("span", {
                      className: x().channelText,
                      children: [
                        (0, s.jsx)("span", {
                          className: x().channelName,
                          children: "Slack"
                        }),
                        (0, s.jsx)("span", {
                          className: N(x().muted, x().ellipsis),
                          children: L.slack
                        })
                      ]
                    }),
                    (0, s.jsx)(m.d, {
                      checked: Y.slack,
                      onCheckedChange: (e3) => W((a3) => ({ ...a3, slack: e3 })),
                      "aria-label": "Slack alerts"
                    })
                  ]
                }),
                (0, s.jsxs)("li", {
                  className: x().channel,
                  children: [
                    (0, s.jsx)(f, { className: x().mark }),
                    (0, s.jsxs)("span", {
                      className: x().channelText,
                      children: [
                        (0, s.jsx)("span", {
                          className: x().channelName,
                          children: "PagerDuty"
                        }),
                        (0, s.jsxs)("span", {
                          className: N(x().muted, x().ellipsis),
                          children: [L.pagerduty, " at 100%"]
                        })
                      ]
                    }),
                    (0, s.jsx)(m.d, {
                      checked: Y.pagerduty,
                      onCheckedChange: (e3) => W((a3) => ({ ...a3, pagerduty: e3 })),
                      "aria-label": "PagerDuty alerts"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: N(x().section, x().stopRow),
          children: [
            (0, s.jsxs)("div", {
              className: x().rowText,
              children: [
                (0, s.jsx)("span", {
                  id: D.hardStop,
                  className: x().label,
                  children: "Hard stop at 100%"
                }),
                (0, s.jsx)(S, {
                  id: K ? "on" : "off",
                  className: x().meta,
                  children: K ? (0, s.jsxs)(M, {
                    tone: "warning",
                    children: ["Requests return 429 until ", i2.resetsOn]
                  }) : (0, s.jsx)("span", {
                    className: x().ellipsis,
                    children: "Keep serving past the budget"
                  })
                })
              ]
            }),
            (0, s.jsx)(m.d, {
              checked: K,
              onCheckedChange: Q,
              "aria-labelledby": D.hardStop
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: x().section,
          children: [
            (0, s.jsxs)("div", {
              className: x().rowHead,
              children: [
                (0, s.jsx)("span", {
                  className: x().label,
                  children: "Slack preview"
                }),
                (0, s.jsxs)("span", {
                  className: N(x().muted, x().previewWhere),
                  children: [(0, s.jsx)(_, { size: 14 }), L.slack]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: x().preview,
              "data-off": !Y.slack || void 0,
              children: [
                ea > 0 ? (0, s.jsx)(
                  "span",
                  { className: x().flash, "aria-hidden": "true" },
                  ea
                ) : null,
                (0, s.jsxs)("div", {
                  className: x().message,
                  "aria-hidden": !Y.slack || void 0,
                  children: [
                    (0, s.jsx)("span", {
                      className: x().avatar,
                      "aria-hidden": "true",
                      children: A2.charAt(0)
                    }),
                    (0, s.jsxs)("div", {
                      className: x().messageBody,
                      children: [
                        (0, s.jsxs)("div", {
                          className: x().sender,
                          children: [
                            (0, s.jsx)("span", {
                              className: N(x().senderName, x().ellipsis),
                              children: A2
                            }),
                            (0, s.jsx)("span", {
                              className: x().badge,
                              children: "App"
                            }),
                            (0, s.jsx)("span", {
                              className: x().time,
                              children: ea > 0 ? "Just now" : "9:41 AM"
                            })
                          ]
                        }),
                        (0, s.jsxs)("p", {
                          className: x().headline,
                          children: [
                            (0, s.jsx)(c.A, {
                              size: 14,
                              strokeWidth: 2,
                              className: x().toneIcon,
                              "data-tone": ek,
                              "aria-hidden": "true"
                            }),
                            (0, s.jsx)("span", {
                              className: x().ellipsis,
                              children: ew
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: x().attachment,
                          "data-tone": ek,
                          children: [
                            (0, s.jsxs)("span", {
                              className: x().field2,
                              children: [
                                (0, s.jsx)("span", {
                                  className: x().fieldLabel,
                                  children: "Used"
                                }),
                                (0, s.jsxs)("span", {
                                  className: x().ellipsis,
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: x().num,
                                      children: ec(ep)
                                    }),
                                    " of ",
                                    ec(en)
                                  ]
                                })
                              ]
                            }),
                            (0, s.jsxs)("span", {
                              className: x().field2,
                              children: [
                                (0, s.jsx)("span", {
                                  className: x().fieldLabel,
                                  children: "Forecast"
                                }),
                                (0, s.jsxs)("span", {
                                  className: x().ellipsis,
                                  children: [
                                    ec(eu),
                                    " by ",
                                    i2.short,
                                    " ",
                                    i2.days
                                  ]
                                })
                              ]
                            })
                          ]
                        }),
                        (0, s.jsx)("p", {
                          className: N(x().context, x().ellipsis),
                          children: eS
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: x().previewOff,
                  "aria-hidden": Y.slack || void 0,
                  children: [
                    (0, s.jsx)(_, { size: 16 }),
                    (0, s.jsx)("span", {
                      children: "Turn on Slack to preview this alert"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("footer", {
          className: x().footer,
          children: [
            (0, s.jsx)("div", {
              className: x().footerStatus,
              role: "status",
              "aria-live": "polite",
              children: (0, s.jsx)(S, {
                id: ej.key,
                className: x().meta,
                children: ej.tone ? (0, s.jsx)(M, { tone: ej.tone, children: ej.label }) : (0, s.jsx)("span", {
                  className: x().ellipsis,
                  children: ej.label
                })
              })
            }),
            (0, s.jsxs)("div", {
              className: x().actions,
              children: [
                (0, s.jsx)(h.$, {
                  variant: "secondary",
                  size: "sm",
                  loading: "testing" === V,
                  disabled: !el || 0 === eg.length || ed,
                  onClick: () => ev("test"),
                  children: "Send test"
                }),
                (0, s.jsx)(h.$, {
                  variant: "primary",
                  size: "sm",
                  loading: "saving" === V,
                  disabled: !el || !ei || ed,
                  onClick: () => ev("save"),
                  children: "Save"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let P = E;
}

__m(__module,__exports,__require);
}