function(__module,__exports,__require){
"use strict";
const __m = (e, a, t) => {
  "use strict";
  t.r(a), t.d(a, { EnvVariables: () => K, default: () => et });
  var i = t(95155), n = t(12115), s = t(92171), r = t(18310), l = t(80642), o = t(25354), d = t(23637), c = t(2125), u = t(64577), p = t(35484), h = t(14577), v = t(82749), m = t(5736), _ = t(89034), y = t(25182), x = t(18986), f = t(11012), b = t(77031), j = t(51288), g = t(20530), N = t(73474), k = t(35978), w = t(43298), T = t(66558), C = t(96220), S = t(50680), E = t(87796), R = t(7770);
  let $ = [
    { id: "development", label: "Development" },
    { id: "preview", label: "Preview" },
    { id: "production", label: "Production" }
  ], A = [
    {
      id: "db-prod",
      key: "DATABASE_URL",
      value: "postgresql://storefront:Qm7vR2xKp9LwT4nZ@db-prod.northwind.internal:5432/storefront?sslmode=require",
      environments: ["production"],
      sensitive: true,
      updated: "Aug 12",
      updatedBy: "Emma Collins"
    },
    {
      id: "db-dev",
      key: "DATABASE_URL",
      value: "postgresql://storefront:preview@db-staging.northwind.internal:5432/storefront_preview",
      environments: ["development", "preview"],
      sensitive: false,
      updated: "Aug 12",
      updatedBy: "Emma Collins"
    },
    {
      id: "site-prod",
      key: "NEXT_PUBLIC_SITE_URL",
      value: "https://shop.northwind.example",
      environments: ["production"],
      sensitive: false,
      updated: "Jun 3",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "site-preview",
      key: "NEXT_PUBLIC_SITE_URL",
      value: "https://preview.northwind.example",
      environments: ["preview"],
      sensitive: false,
      updated: "Jun 3",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "site-dev",
      key: "NEXT_PUBLIC_SITE_URL",
      value: "http://localhost:3000",
      environments: ["development"],
      sensitive: false,
      updated: "Jun 3",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "stripe-live",
      key: "STRIPE_SECRET_KEY",
      value: "sk_live_51Nw8QeHv2kR9tXa7LmPq4ZsY0bUcJ3dF",
      environments: ["production"],
      sensitive: true,
      updated: "Sep 2",
      updatedBy: "Ava Mitchell"
    },
    {
      id: "stripe-test",
      key: "STRIPE_SECRET_KEY",
      value: "sk_test_51Nw8QeHv2kR9tXa7Tg6Wn1KcE5pLr8yV",
      environments: ["development", "preview"],
      sensitive: false,
      updated: "Sep 2",
      updatedBy: "Ava Mitchell"
    },
    {
      id: "stripe-hook",
      key: "STRIPE_WEBHOOK_SECRET",
      value: "whsec_9f3KqL2vX8mN4pR7tY1wZ6cB5dH0jG",
      environments: ["production"],
      sensitive: true,
      updated: "Sep 2",
      updatedBy: "Ava Mitchell"
    },
    {
      id: "resend",
      key: "RESEND_API_KEY",
      value: "re_Hk4q9TzLm_8VbWcN2xPr5sJd7FgY3eA",
      environments: ["development", "preview", "production"],
      sensitive: false,
      updated: "Jul 19",
      updatedBy: "Jasmine Brooks"
    },
    {
      id: "sentry",
      key: "SENTRY_DSN",
      value: "https://4b7e21c9d0a34f86@errors.northwind.example/2",
      environments: ["preview", "production"],
      sensitive: false,
      updated: "May 27",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "redis-prod",
      key: "REDIS_URL",
      value: "rediss://default:Xt8pL3qW7nZ2@cache-prod.northwind.internal:6380",
      environments: ["production"],
      sensitive: true,
      updated: "Sep 18",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "redis-preview",
      key: "REDIS_URL",
      value: "redis://cache-staging.northwind.internal:6379",
      environments: ["preview"],
      sensitive: false,
      updated: "Sep 18",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "checkout-flag",
      key: "FEATURE_NEW_CHECKOUT",
      value: "true",
      environments: ["development", "preview"],
      sensitive: false,
      updated: "Sep 21",
      updatedBy: "Emma Collins"
    },
    {
      id: "checkout-flag-prod",
      key: "FEATURE_NEW_CHECKOUT",
      value: "false",
      environments: ["production"],
      sensitive: false,
      updated: "Sep 21",
      updatedBy: "Emma Collins"
    },
    {
      id: "log-dev",
      key: "LOG_LEVEL",
      value: "debug",
      environments: ["development"],
      sensitive: false,
      updated: "Apr 8",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "log",
      key: "LOG_LEVEL",
      value: "info",
      environments: ["preview", "production"],
      sensitive: false,
      updated: "Apr 8",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "search-admin",
      key: "SEARCH_ADMIN_KEY",
      value: "a1c9f4e27b8d6035e2f7a9b41c8d3e60",
      environments: ["production"],
      sensitive: true,
      updated: "Jul 30",
      updatedBy: "Jasmine Brooks"
    }
  ], L = `# Copied from .env.local
NEXT_PUBLIC_POSTHOG_KEY=phc_Rk2mT8vLq4xW9nZcB7pD1sF6hJ3yG5aE
SEARCH_ADMIN_KEY=b7e2a9c41d06f8e3a5c2b9d7e14f6a08
export SHIPPING_API_TOKEN="shippo_test_4e9c2b7a1f8d3e60c5b2"
LOG_LEVEL=warn
2FA_SECRET=JBSWY3DPEHPK3PXP
LOG_LEVEL=error`;
  var P = t(78136), B = t.n(P);
  let I = /^[A-Za-z_][A-Za-z0-9_]*$/, Y = $.map((e2) => e2.id), O = (e2) => $.find((a2) => a2.id === e2)?.label ?? e2, z = [...R.T.ease.exit], F = [...R.T.ease.standard], W = { duration: 0 };
  function D(e2) {
    let a2 = (0, n.useRef)(null), t2 = (0, n.useRef)(null), i2 = (0, n.useRef)(0);
    return (0, n.useEffect)(() => {
      let n2 = a2.current, r2 = t2.current;
      if (!n2 || !r2 || "u" < typeof ResizeObserver) return;
      let l2 = r2.offsetHeight, o2 = null, d2 = () => {
        o2 = null, n2.style.height = "", n2.style.overflow = "";
      }, c2 = new ResizeObserver(() => {
        let a3 = r2.offsetHeight;
        if (a3 === l2) return;
        let t3 = o2 ? n2.getBoundingClientRect().height : l2;
        if (l2 = a3, e2 || !o2 && performance.now() > i2.current) {
          o2 && (o2.stop(), d2());
          return;
        }
        o2?.stop(), n2.style.overflow = "hidden", n2.style.height = `${t3}px`;
        let c3 = (0, s.i)(n2, { height: [t3, a3] }, R.T.spring.smooth);
        o2 = c3, c3.then(() => {
          o2 === c3 && d2();
        });
      });
      return c2.observe(r2), () => {
        c2.disconnect(), o2?.stop();
      };
    }, [e2]), {
      outer: a2,
      inner: t2,
      arm: (0, n.useCallback)(() => {
        i2.current = performance.now() + 900;
      }, [])
    };
  }
  function M(e2) {
    let a2 = Y.filter((a3) => e2.includes(a3)).map(O);
    return a2.length < 2 ? a2[0] ?? "" : `${a2.slice(0, -1).join(", ")} and ${a2[a2.length - 1]}`;
  }
  let U = (e2, a2) => e2 < a2 ? -1 : +(e2 > a2);
  function V(e2) {
    let a2 = (e3) => Math.min(...e3.environments.map((e4) => Y.indexOf(e4)));
    return [...e2].sort((e3, t2) => U(e3.key, t2.key) || a2(e3) - a2(t2));
  }
  function H(e2) {
    return e2 ? /^[0-9]/.test(e2) ? "Keys can't start with a number" : I.test(e2) ? "" : "Use letters, numbers and underscores only" : "";
  }
  function K({
    variables: e2 = A,
    project: a2 = "northwind-storefront",
    sampleDotenv: t2 = L,
    title: s2 = "Environment variables",
    onChange: u2,
    onRedeploy: p2,
    className: h2
  }) {
    let v2 = !!(0, r.I)(), m2 = (0, n.useRef)(null), _2 = (0, n.useRef)(0), y2 = (0, n.useId)(), [x2, f2] = (0, n.useState)(() => V(e2)), [b2, g2] = (0, n.useState)("list"), [N2, k2] = (0, n.useState)(""), [C2, S2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [E2, P2] = (0, n.useState)(null), [I2, U2] = (0, n.useState)(null), [H2, Z2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [G2, X2] = (0, n.useState)({ count: 0, envs: [] }), [ea2, et2] = (0, n.useState)({ state: "idle", envs: [] }), [ei, en] = (0, n.useState)(null), [es, er] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [el, eo] = (0, n.useState)(""), [ed, ec] = (0, n.useState)("preview"), [eu, ep] = (0, n.useState)("production"), [eh, ev] = (0, n.useState)(false), em = v2 ? W : R.T.spring.smooth, { outer: e_, inner: ey, arm: ex } = D(v2);
    (0, n.useEffect)(() => {
      if (!ei) return;
      let e3 = window.setTimeout(() => en(null), 3800);
      return () => window.clearTimeout(e3);
    }, [ei]), (0, n.useEffect)(() => {
      if (!es.size) return;
      let e3 = window.setTimeout(() => er(/* @__PURE__ */ new Set()), 1800);
      return () => window.clearTimeout(e3);
    }, [es]), (0, n.useEffect)(() => {
      if ("done" !== ea2.state) return;
      let e3 = window.setTimeout(() => et2({ state: "idle", envs: [] }), 2600);
      return () => window.clearTimeout(e3);
    }, [ea2.state]);
    let ef = (e3) => `${e3}-${++_2.current}`;
    function eb(e3, a3, t3, i2) {
      f2(e3), u2?.(e3), Z2((e4) => /* @__PURE__ */ new Set([...e4, ...a3])), X2((e4) => ({
        count: e4.count + 1,
        envs: Y.filter((a4) => e4.envs.includes(a4) || t3.includes(a4))
      })), ("done" === ea2.state || "failed" === ea2.state) && et2({ state: "idle", envs: [] }), eo(i2);
    }
    function ej(e3) {
      window.requestAnimationFrame(() => m2.current?.querySelector(e3)?.focus());
    }
    function eg(e3) {
      P2(null), ej(`[data-edit="${e3}"]`);
    }
    async function eN() {
      let e3 = G2.envs;
      et2({ state: "running", envs: e3 });
      try {
        p2 ? await p2(e3) : await new Promise((e4) => window.setTimeout(e4, 1700)), et2({ state: "done", envs: e3 }), X2({ count: 0, envs: [] }), Z2(/* @__PURE__ */ new Set()), eo(`Redeployed ${M(e3)}`);
      } catch {
        et2({ state: "failed", envs: e3 }), eo("Redeploy failed. Your changes are still queued.");
      }
    }
    function ek(e3) {
      U2((a3) => a3 === e3 ? null : e3), P2(null);
    }
    let ew = N2.trim().toLowerCase(), eT = ew ? x2.filter((e3) => e3.key.toLowerCase().includes(ew)) : x2, eC = new Set(x2.map((e3) => e3.key)).size, eS = Y.map((e3) => x2.filter((a3) => a3.environments.includes(e3)).length), eE = G2.count > 0 || "idle" !== ea2.state, eR = `${b2}|${"list" === b2 && !eT.length}`, e$ = (0, n.useRef)(eR);
    return (0, n.useLayoutEffect)(() => {
      e$.current !== eR && (e$.current = eR, ex());
    }, [eR, ex]), (0, i.jsxs)("section", {
      ref: m2,
      className: [B().root, h2].filter(Boolean).join(" "),
      "aria-labelledby": y2,
      children: [
        (0, i.jsxs)("div", {
          className: B().shell,
          children: [
            (0, i.jsxs)("header", {
              className: B().header,
              children: [
                (0, i.jsxs)("div", {
                  className: B().headText,
                  children: [
                    (0, i.jsx)("h2", {
                      id: y2,
                      className: B().title,
                      children: s2
                    }),
                    (0, i.jsxs)("p", {
                      className: B().meta,
                      children: [
                        (0, i.jsx)("span", {
                          className: B().mono,
                          children: a2
                        }),
                        (0, i.jsx)("span", {
                          className: B().sep,
                          "aria-hidden": "true"
                        }),
                        (0, i.jsxs)("span", {
                          children: [
                            (0, i.jsx)("span", {
                              className: B().num,
                              children: eC
                            }),
                            " ",
                            1 === eC ? "key" : "keys",
                            " across ",
                            $.length,
                            " environments"
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: B().headActions,
                  children: [
                    (0, i.jsxs)(j.$, {
                      variant: "secondary",
                      "data-add-trigger": "paste",
                      "aria-expanded": "paste" === I2,
                      onClick: () => ek("paste"),
                      children: [
                        (0, i.jsx)(d.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Import .env"
                      ]
                    }),
                    (0, i.jsxs)(j.$, {
                      variant: "primary",
                      "data-add-trigger": "single",
                      "aria-expanded": "single" === I2,
                      onClick: () => ek("single"),
                      children: [
                        (0, i.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Add variable"
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)(l.N, {
              initial: false,
              children: eE ? (0, i.jsx)(
                o.PY1.div,
                {
                  className: B().bannerClip,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1, transition: em },
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: v2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  children: (0, i.jsx)(J, {
                    pending: G2,
                    deploy: ea2,
                    onRedeploy: eN,
                    reduce: v2
                  })
                },
                "banner"
              ) : null
            }),
            (0, i.jsx)(l.N, {
              initial: false,
              children: I2 ? (0, i.jsx)(
                o.PY1.div,
                {
                  className: B().addClip,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1, transition: em },
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: v2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  children: (0, i.jsx)(Q, {
                    mode: I2,
                    rows: x2,
                    sampleDotenv: t2,
                    reduce: v2,
                    onModeChange: U2,
                    onCancel: () => {
                      U2(null), ej(`[data-add-trigger='${I2}']`);
                    },
                    onAdd: function(e3, a3) {
                      let t3 = x2, i2 = [];
                      for (let n2 of e3) {
                        let e4 = ef("added");
                        i2.push(e4), t3 = (function(e5, a4) {
                          return V([
                            ...e5.map(
                              (e6) => e6.key === a4.key ? {
                                ...e6,
                                environments: e6.environments.filter(
                                  (e7) => !a4.environments.includes(e7)
                                )
                              } : e6
                            ).filter((e6) => e6.environments.length > 0),
                            a4
                          ]);
                        })(t3, {
                          id: e4,
                          key: n2.key,
                          value: n2.value,
                          environments: a3,
                          sensitive: n2.sensitive,
                          updated: "Just now",
                          updatedBy: "You"
                        });
                      }
                      eb(
                        t3,
                        i2,
                        a3,
                        1 === e3.length ? `${e3[0].key} added to ${M(a3)}` : `${e3.length} variables imported into ${M(a3)}`
                      ), er(new Set(i2)), k2(""), g2("list"), U2(null);
                    }
                  })
                },
                "add"
              ) : null
            }),
            (0, i.jsxs)("div", {
              className: B().toolbar,
              children: [
                (0, i.jsx)("div", {
                  className: B().search,
                  children: (0, i.jsx)(w.L, {
                    label: "Search variables",
                    placeholder: "Search keys",
                    value: N2,
                    onValueChange: k2
                  })
                }),
                (0, i.jsx)(T.A, {
                  label: "View",
                  value: b2,
                  onValueChange: (e3) => {
                    g2(e3), P2(null);
                  },
                  options: [
                    { value: "list", label: "Variables" },
                    { value: "compare", label: "Compare" }
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              ref: e_,
              className: B().viewFrame,
              children: (0, i.jsx)("div", {
                ref: ey,
                className: B().followInner,
                children: (0, i.jsx)(l.N, {
                  mode: "wait",
                  initial: false,
                  children: (0, i.jsx)(
                    o.PY1.div,
                    {
                      className: B().viewPane,
                      initial: v2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: v2 ? W : { duration: R.T.duration.standard, ease: F }
                      },
                      exit: {
                        opacity: 0,
                        transition: v2 ? W : { duration: R.T.duration.instant, ease: z }
                      },
                      children: "list" === b2 ? (0, i.jsx)(q, {
                        rows: eT,
                        total: x2.length,
                        query: N2,
                        envCounts: eS,
                        revealed: C2,
                        editing: E2,
                        changed: H2,
                        fresh: es,
                        note: ei,
                        reduce: v2,
                        onToggleEnv: function(e3, a3) {
                          let t3 = x2.find((a4) => a4.id === e3);
                          if (!t3) return;
                          let i2 = t3.environments.includes(a3);
                          if (i2 && 1 === t3.environments.length)
                            return void en({
                              id: e3,
                              text: "A value needs at least one environment. Remove it instead."
                            });
                          if (!i2 && x2.find(
                            (i3) => i3.id !== e3 && i3.key === t3.key && i3.environments.includes(a3)
                          ))
                            return void en({
                              id: e3,
                              text: `${t3.key} already has a ${O(a3)} value. Turn it off on that row first.`
                            });
                          let n2 = i2 ? t3.environments.filter((e4) => e4 !== a3) : Y.filter(
                            (e4) => e4 === a3 || t3.environments.includes(e4)
                          );
                          en((a4) => a4?.id === e3 ? null : a4), eb(
                            V(
                              x2.map(
                                (a4) => a4.id === e3 ? {
                                  ...a4,
                                  environments: n2,
                                  updated: "Just now",
                                  updatedBy: "You"
                                } : a4
                              )
                            ),
                            [e3],
                            [a3],
                            `${O(a3)} turned ${i2 ? "off" : "on"} for ${t3.key}`
                          );
                        },
                        onToggleReveal: function(e3) {
                          S2((a3) => {
                            let t3 = new Set(a3);
                            return t3.has(e3) ? t3.delete(e3) : t3.add(e3), t3;
                          });
                        },
                        onEdit: function(e3) {
                          P2((a3) => a3 === e3 ? null : e3), S2((a3) => {
                            if (!a3.has(e3)) return a3;
                            let t3 = new Set(a3);
                            return t3.delete(e3), t3;
                          });
                        },
                        onCloseEditor: eg,
                        onSave: function(e3, a3, t3) {
                          let i2 = x2.find((a4) => a4.id === e3);
                          i2 && (eb(
                            x2.map(
                              (i3) => i3.id === e3 ? {
                                ...i3,
                                value: a3 || i3.value,
                                sensitive: t3,
                                updated: "Just now",
                                updatedBy: "You"
                              } : i3
                            ),
                            [e3],
                            i2.environments,
                            `${i2.key} saved`
                          ), er(/* @__PURE__ */ new Set([e3])), eg(e3));
                        },
                        onRemove: function(e3) {
                          let a3 = x2.find((a4) => a4.id === e3);
                          a3 && (P2(null), eb(
                            x2.filter((a4) => a4.id !== e3),
                            [],
                            a3.environments,
                            `${a3.key} removed from ${M(a3.environments)}`
                          ), ej("[data-add-trigger='single']"));
                        },
                        onClearSearch: () => k2(""),
                        onAdd: () => ek("single")
                      }) : (0, i.jsx)(ee, {
                        rows: x2,
                        needle: ew,
                        base: ed,
                        target: eu,
                        showMatching: eh,
                        reduce: v2,
                        onBase: ec,
                        onTarget: ep,
                        onSwap: () => {
                          ec(eu), ep(ed);
                        },
                        onShowMatching: ev,
                        onCopy: function(e3, a3) {
                          eb(
                            V(
                              x2.map(
                                (t3) => t3.id === e3.id ? {
                                  ...t3,
                                  environments: Y.filter(
                                    (e4) => e4 === a3 || t3.environments.includes(e4)
                                  ),
                                  updated: "Just now",
                                  updatedBy: "You"
                                } : t3
                              )
                            ),
                            [e3.id],
                            [a3],
                            `${e3.key} copied to ${O(a3)}`
                          );
                        },
                        onClearSearch: () => k2("")
                      })
                    },
                    b2
                  )
                })
              })
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: B().srOnly,
          role: "status",
          "aria-live": "polite",
          children: el
        })
      ]
    });
  }
  function J({ pending: e2, deploy: a2, onRedeploy: t2, reduce: s2 }) {
    let r2 = "done" === a2.state, d2 = "failed" === a2.state, c2 = r2 ? `Redeployed ${M(a2.envs)}` : d2 ? "Redeploy failed" : `Redeploy to apply ${e2.count} ${1 === e2.count ? "change" : "changes"}`, m2 = r2 ? "New deployments picked up the changes. This demo only simulates the deploy." : d2 ? "Nothing was deployed and your changes are still queued. Try again." : `${M(e2.envs)} ${1 === e2.envs.length ? "keeps" : "keep"} the old values until the next deployment.`, { outer: _2, inner: y2, arm: x2 } = D(s2), f2 = (0, n.useRef)(a2.state);
    (0, n.useLayoutEffect)(() => {
      f2.current !== a2.state && (f2.current = a2.state, x2());
    }, [a2.state, x2]);
    let b2 = s2 ? { opacity: 0 } : { opacity: 0, y: 4 }, g2 = {
      opacity: 0,
      y: s2 ? 0 : -4,
      transition: s2 ? W : { duration: R.T.duration.instant, ease: z }
    }, N2 = s2 ? W : { duration: R.T.duration.standard, ease: F };
    return (0, i.jsx)("div", {
      ref: _2,
      children: (0, i.jsx)("div", {
        ref: y2,
        className: B().followInner,
        children: (0, i.jsxs)("div", {
          className: B().banner,
          "data-state": a2.state,
          children: [
            (0, i.jsx)("span", {
              className: B().bannerIcon,
              "aria-hidden": "true",
              children: (0, i.jsx)(l.N, {
                mode: "popLayout",
                initial: false,
                children: (0, i.jsx)(
                  o.PY1.span,
                  {
                    className: B().bannerGlyph,
                    initial: s2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                    animate: { opacity: 1, scale: 1 },
                    exit: {
                      opacity: 0,
                      scale: s2 ? 1 : 0.6,
                      transition: s2 ? W : { duration: R.T.duration.instant }
                    },
                    transition: s2 ? W : R.T.spring.snappy,
                    children: r2 ? (0, i.jsx)(u.A, { size: 16, strokeWidth: 1.75 }) : d2 ? (0, i.jsx)(p.A, { size: 16, strokeWidth: 1.75 }) : (0, i.jsx)(h.A, { size: 16, strokeWidth: 1.75 })
                  },
                  r2 ? "done" : d2 ? "failed" : "info"
                )
              })
            }),
            (0, i.jsxs)("div", {
              className: B().bannerText,
              children: [
                (0, i.jsx)(l.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, i.jsx)(
                    o.PY1.p,
                    {
                      className: B().bannerTitle,
                      initial: b2,
                      animate: { opacity: 1, y: 0 },
                      exit: g2,
                      transition: N2,
                      children: (0, i.jsx)("span", {
                        className: B().num,
                        children: c2
                      })
                    },
                    c2
                  )
                }),
                (0, i.jsx)(l.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, i.jsx)(
                    o.PY1.p,
                    {
                      className: B().bannerDetail,
                      initial: b2,
                      animate: { opacity: 1, y: 0 },
                      exit: g2,
                      transition: s2 ? W : { ...N2, delay: R.T.stagger.word },
                      children: m2
                    },
                    m2
                  )
                })
              ]
            }),
            (0, i.jsx)(l.N, {
              mode: "popLayout",
              initial: false,
              children: r2 ? null : (0, i.jsx)(
                o.PY1.span,
                {
                  className: B().bannerAction,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: s2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  transition: N2,
                  children: (0, i.jsxs)(j.$, {
                    variant: "secondary",
                    className: B().bannerButton,
                    loading: "running" === a2.state,
                    onClick: t2,
                    children: [
                      (0, i.jsx)(v.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "running" === a2.state ? "Redeploying" : d2 ? "Try again" : "Redeploy"
                    ]
                  })
                },
                "action"
              )
            })
          ]
        })
      })
    });
  }
  function Z({ env: e2, on: a2, name: t2, onToggle: n2, reduce: s2 }) {
    return (0, i.jsxs)("button", {
      type: "button",
      className: B().scope,
      "data-on": a2,
      "aria-pressed": a2,
      "aria-label": t2 ? `${O(e2)} for ${t2}` : void 0,
      onClick: n2,
      children: [
        (0, i.jsxs)("span", {
          className: B().box,
          "aria-hidden": "true",
          children: [
            (0, i.jsx)(o.PY1.span, {
              className: B().boxFill,
              initial: false,
              animate: { opacity: +!!a2, scale: a2 ? 1 : 0.6 },
              transition: s2 ? W : {
                scale: R.T.spring.snappy,
                opacity: { duration: R.T.duration.instant }
              }
            }),
            (0, i.jsx)("svg", {
              className: B().boxMark,
              viewBox: "0 0 18 18",
              fill: "none",
              focusable: "false",
              children: (0, i.jsx)(o.PY1.path, {
                d: "M5 9.4l2.6 2.6L13 6.6",
                initial: false,
                animate: { pathLength: +!!a2, opacity: +!!a2 },
                transition: s2 ? W : {
                  pathLength: R.T.spring.smooth,
                  opacity: { duration: R.T.duration.instant }
                },
                stroke: "currentColor",
                strokeWidth: 1.75,
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })
            })
          ]
        }),
        (0, i.jsx)("span", { className: B().scopeLabel, children: O(e2) })
      ]
    });
  }
  function q({
    rows: e2,
    total: a2,
    query: t2,
    envCounts: n2,
    revealed: s2,
    editing: r2,
    changed: d2,
    fresh: u2,
    note: p2,
    reduce: h2,
    onToggleEnv: v2,
    onToggleReveal: m2,
    onEdit: _2,
    onCloseEditor: y2,
    onSave: x2,
    onRemove: f2,
    onClearSearch: b2,
    onAdd: g2
  }) {
    let N2 = h2 ? W : R.T.spring.smooth;
    return e2.length ? (0, i.jsxs)("div", {
      className: B().table,
      children: [
        (0, i.jsxs)("div", {
          className: B().columns,
          "aria-hidden": "true",
          children: [
            (0, i.jsx)("span", { children: "Key" }),
            (0, i.jsx)("span", { children: "Value" }),
            $.map(
              (e3, a3) => (0, i.jsxs)(
                "span",
                {
                  className: B().envHead,
                  children: [
                    e3.label,
                    (0, i.jsxs)("span", {
                      className: B().envCount,
                      children: [n2[a3], " set"]
                    })
                  ]
                },
                e3.id
              )
            ),
            (0, i.jsx)("span", {})
          ]
        }),
        (0, i.jsx)("ul", {
          className: B().list,
          "aria-label": "Variables",
          children: (0, i.jsx)(l.N, {
            initial: false,
            children: e2.map(
              (e3) => (0, i.jsx)(
                o.PY1.li,
                {
                  className: B().item,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1, transition: N2 },
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: h2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  children: (0, i.jsx)(G, {
                    row: e3,
                    revealed: s2.has(e3.id),
                    editing: r2 === e3.id,
                    changed: d2.has(e3.id),
                    fresh: u2.has(e3.id),
                    note: p2?.id === e3.id ? p2.text : null,
                    reduce: h2,
                    onToggleEnv: (a3) => v2(e3.id, a3),
                    onToggleReveal: () => m2(e3.id),
                    onEdit: () => _2(e3.id),
                    onCloseEditor: () => y2(e3.id),
                    onSave: (a3, t3) => x2(e3.id, a3, t3),
                    onRemove: () => f2(e3.id)
                  })
                },
                e3.id
              )
            )
          })
        })
      ]
    }) : (0, i.jsxs)("div", {
      className: B().empty,
      children: [
        (0, i.jsx)("p", {
          className: B().emptyTitle,
          children: a2 ? `No keys match "${t2.trim()}"` : "No variables yet"
        }),
        (0, i.jsx)("p", {
          className: B().emptyText,
          children: a2 ? "Search looks at key names only. Values stay hidden." : "Add one, or paste a .env file to import many at once."
        }),
        a2 ? (0, i.jsx)(j.$, {
          variant: "secondary",
          onClick: b2,
          children: "Clear search"
        }) : (0, i.jsxs)(j.$, {
          variant: "secondary",
          onClick: g2,
          children: [
            (0, i.jsx)(c.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            "Add variable"
          ]
        })
      ]
    });
  }
  function G({
    row: e2,
    revealed: a2,
    editing: t2,
    changed: s2,
    fresh: r2,
    note: d2,
    reduce: c2,
    onToggleEnv: u2,
    onToggleReveal: p2,
    onEdit: h2,
    onCloseEditor: v2,
    onSave: b2,
    onRemove: j2
  }) {
    let g2 = (0, n.useId)(), k2 = c2 ? W : R.T.spring.smooth, w2 = c2 ? W : { duration: R.T.duration.exit, ease: z }, T2 = c2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    } : {
      initial: { opacity: 0, y: 4 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -4 }
    };
    return (0, i.jsxs)("div", {
      className: B().row,
      "data-editing": t2 || void 0,
      "data-fresh": r2 || void 0,
      children: [
        (0, i.jsxs)("div", {
          className: B().rowMain,
          children: [
            (0, i.jsxs)("div", {
              className: B().keyCell,
              children: [
                (0, i.jsxs)("span", {
                  className: B().keyLine,
                  children: [
                    (0, i.jsx)("span", { className: B().key, children: e2.key }),
                    s2 ? (0, i.jsx)("span", {
                      className: B().changedDot,
                      "aria-hidden": "true"
                    }) : null
                  ]
                }),
                (0, i.jsx)("span", {
                  className: B().updated,
                  "data-changed": s2 || void 0,
                  children: s2 ? "Changed, waiting for redeploy" : `Updated ${e2.updated} by ${e2.updatedBy}`
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().valueCell,
              children: [
                (0, i.jsx)("span", {
                  className: B().valueSlot,
                  children: (0, i.jsx)(l.N, {
                    mode: "popLayout",
                    initial: false,
                    children: a2 && !e2.sensitive ? (0, i.jsx)(
                      o.PY1.span,
                      {
                        className: B().value,
                        title: e2.value,
                        ...T2,
                        transition: c2 ? W : { duration: R.T.duration.standard, ease: F },
                        children: e2.value
                      },
                      "value"
                    ) : (0, i.jsxs)(
                      o.PY1.span,
                      {
                        className: B().mask,
                        ...T2,
                        transition: c2 ? W : { duration: R.T.duration.fast, ease: F },
                        children: [
                          (0, i.jsx)("span", {
                            "aria-hidden": "true",
                            children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                          }),
                          (0, i.jsx)("span", {
                            className: B().srOnly,
                            children: e2.sensitive ? "Sensitive value, write-only" : "Hidden value"
                          })
                        ]
                      },
                      "mask"
                    )
                  })
                }),
                e2.sensitive ? (0, i.jsxs)("span", {
                  className: B().sensitive,
                  children: [
                    (0, i.jsx)(m.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Sensitive"
                  ]
                }) : (0, i.jsxs)("span", {
                  className: B().valueActions,
                  children: [
                    (0, i.jsx)(l.N, {
                      initial: false,
                      children: a2 ? (0, i.jsx)(
                        o.PY1.span,
                        {
                          className: B().copySlot,
                          initial: c2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
                          animate: { opacity: 1, scale: 1 },
                          exit: {
                            opacity: 0,
                            scale: c2 ? 1 : 0.8,
                            transition: c2 ? W : {
                              duration: R.T.duration.exit,
                              ease: z
                            }
                          },
                          transition: c2 ? W : R.T.spring.snappy,
                          children: (0, i.jsx)(N.CopyButton, {
                            value: e2.value,
                            label: `Copy ${e2.key}`,
                            iconOnly: true,
                            variant: "plain"
                          })
                        },
                        "copy"
                      ) : null
                    }),
                    (0, i.jsx)("button", {
                      type: "button",
                      className: B().iconButton,
                      "aria-pressed": a2,
                      "aria-label": `Reveal ${e2.key}`,
                      onClick: p2,
                      children: a2 ? (0, i.jsx)(_.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }) : (0, i.jsx)(y.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              className: B().scopes,
              role: "group",
              "aria-label": `Environments for ${e2.key}`,
              children: $.map(
                (a3) => (0, i.jsx)(
                  Z,
                  {
                    env: a3.id,
                    on: e2.environments.includes(a3.id),
                    name: e2.key,
                    onToggle: () => u2(a3.id),
                    reduce: c2
                  },
                  a3.id
                )
              )
            }),
            (0, i.jsx)("div", {
              className: B().rowActions,
              children: (0, i.jsx)("button", {
                type: "button",
                className: B().iconButton,
                "data-edit": e2.id,
                "data-active": t2 || void 0,
                "aria-expanded": t2,
                "aria-controls": t2 ? g2 : void 0,
                "aria-label": `Edit ${e2.key}`,
                onClick: h2,
                children: (0, i.jsx)(x.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            })
          ]
        }),
        (0, i.jsx)(l.N, {
          initial: false,
          children: d2 ? (0, i.jsx)(
            o.PY1.p,
            {
              className: B().noteClip,
              role: "alert",
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1, transition: k2 },
              exit: { height: 0, opacity: 0, transition: w2 },
              children: (0, i.jsxs)("span", {
                className: B().note,
                children: [
                  (0, i.jsx)(f.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  d2
                ]
              })
            },
            "note"
          ) : null
        }),
        (0, i.jsx)(l.N, {
          initial: false,
          children: t2 ? (0, i.jsx)(
            o.PY1.div,
            {
              id: g2,
              className: B().editorClip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1, transition: k2 },
              exit: { height: 0, opacity: 0, transition: w2 },
              children: (0, i.jsx)(X, {
                row: e2,
                onCancel: v2,
                onSave: b2,
                onRemove: j2
              })
            },
            "editor"
          ) : null
        })
      ]
    });
  }
  function X({ row: e2, onCancel: a2, onSave: t2, onRemove: s2 }) {
    let r2 = (0, n.useRef)(null), [l2, o2] = (0, n.useState)(e2.sensitive ? "" : e2.value), [d2, c2] = (0, n.useState)(e2.sensitive), [u2, p2] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      r2.current?.focus({ preventScroll: true });
    }, []);
    let h2 = (e2.sensitive ? l2.length > 0 : l2 !== e2.value && l2.length > 0) || d2 !== e2.sensitive, v2 = !e2.sensitive && 0 === l2.length;
    return (0, i.jsxs)("form", {
      className: B().editor,
      onKeyDown: function(e3) {
        "Escape" === e3.key && (e3.stopPropagation(), a2());
      },
      onSubmit: (e3) => {
        e3.preventDefault(), h2 && !v2 && t2(l2, d2);
      },
      children: [
        (0, i.jsx)(k.p, {
          ref: r2,
          label: `Value for ${M(e2.environments)}`,
          className: B().monoInput,
          value: l2,
          placeholder: e2.sensitive ? "Enter a new value to replace it" : void 0,
          autoComplete: "off",
          spellCheck: false,
          error: v2 ? "A value can't be empty. Remove the variable instead." : void 0,
          onChange: (e3) => o2(e3.target.value)
        }),
        (0, i.jsx)(g.S, {
          label: "Sensitive",
          checked: d2,
          disabled: e2.sensitive,
          description: e2.sensitive ? "This value is write-only. To make it readable again, remove it and add it back." : "Write-only after saving. It can be replaced, but nobody can reveal it again.",
          onCheckedChange: (e3) => c2(true === e3)
        }),
        (0, i.jsxs)("div", {
          className: B().editorActions,
          children: [
            (0, i.jsx)(j.$, {
              type: "button",
              variant: u2 ? "danger" : "ghost",
              className: B().removeButton,
              onClick: () => {
                u2 ? s2() : p2(true);
              },
              onBlur: () => p2(false),
              children: u2 ? "Confirm remove" : "Remove variable"
            }),
            (0, i.jsxs)("span", {
              className: B().editorEnd,
              children: [
                (0, i.jsx)(j.$, {
                  type: "button",
                  variant: "secondary",
                  onClick: a2,
                  children: "Cancel"
                }),
                (0, i.jsx)(j.$, {
                  type: "submit",
                  variant: "primary",
                  disabled: !h2 || v2,
                  children: "Save value"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Q({
    mode: e2,
    rows: a2,
    sampleDotenv: t2,
    reduce: s2,
    onModeChange: r2,
    onCancel: l2,
    onAdd: o2
  }) {
    let d2 = (0, n.useRef)(null), u2 = (0, n.useRef)(null), [h2, v2] = (0, n.useState)(""), [m2, _2] = (0, n.useState)(""), [y2, x2] = (0, n.useState)(false), [b2, N2] = (0, n.useState)(["development", "preview"]), [w2, C2] = (0, n.useState)(t2), [S2, R2] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      let a3 = "single" === e2 ? d2.current : u2.current, t3 = window.requestAnimationFrame(() => a3?.focus({ preventScroll: true }));
      return () => window.cancelAnimationFrame(t3);
    }, [e2]);
    let A2 = (0, n.useMemo)(() => {
      let e3;
      return e3 = [], w2.split(/\r?\n/).forEach((a3, t3) => {
        let i2 = a3.trim();
        if (!i2 || i2.startsWith("#")) return;
        let n2 = i2.replace(/^export\s+/, ""), s3 = n2.indexOf("=");
        if (s3 < 0)
          return void e3.push({
            line: t3 + 1,
            key: n2.slice(0, 40),
            value: "",
            status: "invalid",
            detail: "Missing an equals sign, skipped"
          });
        let r3 = n2.slice(0, s3).trim(), l3 = (function(e4) {
          let a4 = e4.trim(), t4 = a4[0];
          if (('"' === t4 || "'" === t4) && a4.length > 1 && a4.endsWith(t4)) {
            let e5 = a4.slice(1, -1);
            return '"' === t4 ? e5.replace(/\\n/g, "\n").replace(/\\"/g, '"') : e5;
          }
          let i3 = a4.search(/\s#/);
          return (i3 >= 0 ? a4.slice(0, i3) : a4).trim();
        })(n2.slice(s3 + 1)), o3 = r3 ? H(r3) : "Missing a key";
        e3.push(
          o3 ? {
            line: t3 + 1,
            key: r3 || "(empty)",
            value: l3,
            status: "invalid",
            detail: `${o3}, skipped`
          } : {
            line: t3 + 1,
            key: r3,
            value: l3,
            status: "new",
            detail: "New"
          }
        );
      }), e3.map((t3, i2) => {
        if ("invalid" === t3.status) return t3;
        let n2 = e3.slice(i2 + 1).find((e4) => "invalid" !== e4.status && e4.key === t3.key);
        if (n2)
          return {
            ...t3,
            status: "duplicate",
            detail: `Line ${n2.line} sets it again, skipped`
          };
        let s3 = b2.filter(
          (e4) => a2.some((a3) => a3.key === t3.key && a3.environments.includes(e4))
        );
        return s3.length ? {
          ...t3,
          status: "replace",
          detail: `Replaces the ${M(s3)} value`
        } : t3;
      });
    }, [w2, a2, b2]), L2 = A2.filter((e3) => "new" === e3.status || "replace" === e3.status), P2 = A2.length - L2.length, I2 = h2.trim(), O2 = I2 ? b2.filter(
      (e3) => a2.some((a3) => a3.key === I2 && a3.environments.includes(e3))
    ) : [], z2 = H(I2) || (S2 && !I2 ? "Enter a key" : "") || (O2.length ? `Already set in ${M(O2)}. Edit that row, or turn those environments off here.` : ""), F2 = S2 && !m2 ? "Enter a value" : "", W2 = b2.length ? "" : "Choose at least one environment", D2 = (0, i.jsxs)("fieldset", {
      className: B().pickEnvs,
      children: [
        (0, i.jsx)("legend", {
          className: B().fieldLabel,
          children: "single" === e2 ? "Environments" : "Import into"
        }),
        (0, i.jsx)("div", {
          className: B().pickRow,
          children: $.map(
            (e3) => (0, i.jsx)(
              Z,
              {
                env: e3.id,
                on: b2.includes(e3.id),
                onToggle: () => {
                  var a3;
                  return a3 = e3.id, void N2(
                    (e4) => e4.includes(a3) ? e4.filter((e5) => e5 !== a3) : Y.filter((t3) => t3 === a3 || e4.includes(t3))
                  );
                },
                reduce: s2
              },
              e3.id
            )
          )
        }),
        W2 ? (0, i.jsx)("span", { className: B().fieldError, children: W2 }) : null
      ]
    });
    return (0, i.jsxs)("div", {
      className: B().add,
      onKeyDown: function(e3) {
        "Escape" === e3.key && (e3.stopPropagation(), l2());
      },
      role: "group",
      "aria-label": "single" === e2 ? "Add a variable" : "Import a .env file",
      children: [
        (0, i.jsx)("div", {
          className: B().addHead,
          children: (0, i.jsx)(T.A, {
            label: "How to add",
            value: e2,
            onValueChange: (e3) => r2(e3),
            options: [
              { value: "single", label: "One variable" },
              { value: "paste", label: "Paste .env" }
            ]
          })
        }),
        "single" === e2 ? (0, i.jsxs)("form", {
          className: B().addForm,
          onSubmit: (e3) => {
            e3.preventDefault(), R2(true), I2 && m2 && !z2 && !W2 && o2([{ key: I2, value: m2, sensitive: y2 }], b2);
          },
          children: [
            (0, i.jsxs)("div", {
              className: B().pair,
              children: [
                (0, i.jsx)(k.p, {
                  ref: d2,
                  label: "Key",
                  className: B().monoInput,
                  placeholder: "e.g. CLIENT_ID",
                  value: h2,
                  autoComplete: "off",
                  spellCheck: false,
                  description: z2 ? void 0 : "Paste a whole .env here to import many at once",
                  error: z2 || void 0,
                  onPaste: function(e3) {
                    let a3 = e3.clipboardData.getData("text");
                    /\r?\n/.test(a3.trim()) && a3.includes("=") && (e3.preventDefault(), C2(a3), r2("paste"));
                  },
                  onChange: (e3) => v2(e3.target.value)
                }),
                (0, i.jsx)(k.p, {
                  label: "Value",
                  className: B().monoInput,
                  value: m2,
                  autoComplete: "off",
                  spellCheck: false,
                  error: F2 || void 0,
                  onChange: (e3) => _2(e3.target.value)
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().addOptions,
              children: [
                D2,
                (0, i.jsx)(g.S, {
                  label: "Sensitive",
                  description: "Write-only after saving",
                  checked: y2,
                  onCheckedChange: (e3) => x2(true === e3)
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().addActions,
              children: [
                (0, i.jsx)(j.$, {
                  type: "button",
                  variant: "secondary",
                  onClick: l2,
                  children: "Cancel"
                }),
                (0, i.jsx)(j.$, {
                  type: "submit",
                  variant: "primary",
                  children: "Save variable"
                })
              ]
            })
          ]
        }) : (0, i.jsxs)("form", {
          className: B().addForm,
          onSubmit: (e3) => {
            e3.preventDefault(), L2.length && b2.length && o2(
              L2.map((e4) => ({
                key: e4.key,
                value: e4.value,
                sensitive: false
              })),
              b2
            );
          },
          children: [
            (0, i.jsx)(E.T, {
              ref: u2,
              label: ".env contents",
              className: B().monoArea,
              rows: 7,
              value: w2,
              spellCheck: false,
              autoComplete: "off",
              onChange: (e3) => C2(e3.target.value)
            }),
            D2,
            (0, i.jsxs)("div", {
              className: B().parsed,
              children: [
                (0, i.jsx)("p", {
                  className: B().parsedSummary,
                  "aria-live": "polite",
                  children: A2.length ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("span", {
                        className: B().num,
                        children: L2.length
                      }),
                      " to import",
                      P2 ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          ", ",
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: P2
                          }),
                          " skipped"
                        ]
                      }) : null
                    ]
                  }) : "Paste lines like KEY=value. Comments and blank lines are ignored."
                }),
                A2.length ? (0, i.jsx)("ul", {
                  className: B().parsedList,
                  children: A2.map(
                    (e3) => (0, i.jsxs)(
                      "li",
                      {
                        className: B().parsedRow,
                        "data-status": e3.status,
                        children: [
                          (0, i.jsx)("span", {
                            className: B().parsedLine,
                            children: e3.line
                          }),
                          (0, i.jsx)("span", {
                            className: B().parsedKey,
                            children: e3.key
                          }),
                          (0, i.jsx)("span", {
                            className: B().parsedValue,
                            "aria-hidden": "true",
                            children: e3.value ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : ""
                          }),
                          (0, i.jsxs)("span", {
                            className: B().parsedStatus,
                            children: [
                              "new" === e3.status ? (0, i.jsx)(c.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : "invalid" === e3.status ? (0, i.jsx)(p.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : (0, i.jsx)(f.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              e3.detail
                            ]
                          })
                        ]
                      },
                      `${e3.line}-${e3.key}`
                    )
                  )
                }) : null
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().addActions,
              children: [
                (0, i.jsx)(j.$, {
                  type: "button",
                  variant: "secondary",
                  onClick: l2,
                  children: "Cancel"
                }),
                (0, i.jsx)(j.$, {
                  type: "submit",
                  variant: "primary",
                  disabled: !L2.length || !b2.length,
                  children: 1 === L2.length ? "Import 1 variable" : `Import ${L2.length} variables`
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ee({
    rows: e2,
    needle: a2,
    base: t2,
    target: n2,
    showMatching: s2,
    reduce: r2,
    onBase: d2,
    onTarget: c2,
    onSwap: p2,
    onShowMatching: h2,
    onCopy: v2,
    onClearSearch: m2
  }) {
    let _2 = r2 ? W : R.T.spring.smooth, y2 = [...new Set(e2.map((e3) => e3.key))].sort(U).flatMap((a3) => {
      let i2 = e2.find((e3) => e3.key === a3 && e3.environments.includes(t2)), s3 = e2.find((e3) => e3.key === a3 && e3.environments.includes(n2));
      if (!i2 && !s3) return [];
      let r3 = s3 ? i2 ? i2.value === s3.value ? "same" : "different" : "missing-base" : "missing-target";
      return [{ key: a3, base: i2, target: s3, status: r3 }];
    }).filter((e3) => !a2 || e3.key.toLowerCase().includes(a2)), x2 = y2.filter(
      (e3) => "missing-base" === e3.status || "missing-target" === e3.status
    ).length, g2 = y2.filter((e3) => "different" === e3.status).length, N2 = y2.length - x2 - g2, k2 = s2 ? y2 : y2.filter((e3) => "same" !== e3.status), w2 = $.map((e3) => ({ value: e3.id, label: e3.label }));
    return (0, i.jsxs)("div", {
      className: B().compare,
      children: [
        (0, i.jsxs)("div", {
          className: B().compareControls,
          children: [
            (0, i.jsxs)("div", {
              className: B().pickers,
              children: [
                (0, i.jsx)(C.l, {
                  label: "Environment",
                  value: t2,
                  options: w2.map((e3) => ({ ...e3, disabled: e3.value === n2 })),
                  onValueChange: (e3) => d2(e3)
                }),
                (0, i.jsx)("button", {
                  type: "button",
                  className: B().swap,
                  "aria-label": "Swap environments",
                  onClick: p2,
                  children: (0, i.jsx)(b.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, i.jsx)(C.l, {
                  label: "Compared with",
                  value: n2,
                  options: w2.map((e3) => ({ ...e3, disabled: e3.value === t2 })),
                  onValueChange: (e3) => c2(e3)
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().summary,
              children: [
                (0, i.jsxs)("p", {
                  className: B().counts,
                  "aria-live": "polite",
                  children: [
                    (0, i.jsx)("span", {
                      "data-tone": "warning",
                      children: (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: x2
                          }),
                          " missing"
                        ]
                      })
                    }),
                    (0, i.jsx)("span", {
                      "data-tone": "info",
                      children: (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: g2
                          }),
                          " different"
                        ]
                      })
                    }),
                    (0, i.jsx)("span", {
                      children: (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: N2
                          }),
                          " matching"
                        ]
                      })
                    })
                  ]
                }),
                (0, i.jsx)(S.d, {
                  label: "Show matching",
                  checked: s2,
                  onCheckedChange: h2
                })
              ]
            })
          ]
        }),
        k2.length ? (0, i.jsxs)("div", {
          className: B().table,
          children: [
            (0, i.jsxs)("div", {
              className: B().diffColumns,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)("span", { children: "Key" }),
                (0, i.jsx)("span", { children: O(t2) }),
                (0, i.jsx)("span", { children: O(n2) }),
                (0, i.jsx)("span", { children: "Result" })
              ]
            }),
            (0, i.jsx)("ul", {
              className: B().list,
              "aria-label": `${O(t2)} compared with ${O(n2)}`,
              children: (0, i.jsx)(l.N, {
                initial: false,
                children: k2.map((e3) => {
                  let a3, s3 = "missing-target" === e3.status ? e3.base : "missing-base" === e3.status ? e3.target : void 0, l2 = "missing-target" === e3.status ? n2 : t2;
                  return (0, i.jsx)(
                    o.PY1.li,
                    {
                      className: B().item,
                      initial: { height: 0, opacity: 0 },
                      animate: {
                        height: "auto",
                        opacity: 1,
                        transition: _2
                      },
                      exit: {
                        height: 0,
                        opacity: 0,
                        transition: r2 ? W : { duration: R.T.duration.exit, ease: z }
                      },
                      children: (0, i.jsxs)("div", {
                        className: B().diffRow,
                        "data-status": e3.status,
                        children: [
                          (0, i.jsx)("span", {
                            className: B().key,
                            children: e3.key
                          }),
                          (0, i.jsx)(ea, { env: t2, row: e3.base }),
                          (0, i.jsx)(ea, { env: n2, row: e3.target }),
                          (0, i.jsxs)("span", {
                            className: B().diffResult,
                            children: [
                              (0, i.jsxs)("span", {
                                className: B().diffStatus,
                                "data-status": e3.status,
                                children: [
                                  "same" === e3.status ? (0, i.jsx)(u.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : "different" === e3.status ? (0, i.jsx)(b.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : (0, i.jsx)(f.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  (a3 = e3.status, "missing-target" === a3 ? `Missing in ${O(n2)}` : "missing-base" === a3 ? `Missing in ${O(t2)}` : "different" === a3 ? "Different values" : "Same value")
                                ]
                              }),
                              s3 ? (0, i.jsxs)(j.$, {
                                variant: "secondary",
                                className: B().copyTo,
                                onClick: () => v2(s3, l2),
                                children: ["Copy to ", O(l2)]
                              }) : null
                            ]
                          })
                        ]
                      })
                    },
                    e3.key
                  );
                })
              })
            })
          ]
        }) : (0, i.jsxs)("div", {
          className: B().empty,
          children: [
            (0, i.jsx)("p", {
              className: B().emptyTitle,
              children: y2.length ? `${O(t2)} and ${O(n2)} match` : "No keys match your search"
            }),
            (0, i.jsx)("p", {
              className: B().emptyText,
              children: y2.length ? `Every key has the same value in both. Turn on Show matching to list all ${y2.length}.` : "Search looks at key names only."
            }),
            y2.length ? (0, i.jsx)(j.$, {
              variant: "secondary",
              onClick: () => h2(true),
              children: "Show matching keys"
            }) : (0, i.jsx)(j.$, {
              variant: "secondary",
              onClick: m2,
              children: "Clear search"
            })
          ]
        })
      ]
    });
  }
  function ea({ env: e2, row: a2 }) {
    if (!a2)
      return (0, i.jsxs)("span", {
        className: B().diffCell,
        "data-empty": true,
        children: [
          (0, i.jsx)("span", { className: B().cellEnv, children: O(e2) }),
          "Not set"
        ]
      });
    let t2 = (function(e3) {
      let a3 = 2166136261;
      for (let t3 = 0; t3 < e3.length; t3++)
        a3 ^= e3.charCodeAt(t3), a3 = Math.imul(a3, 16777619);
      return (a3 >>> 0).toString(16).padStart(8, "0").slice(0, 6);
    })(a2.value);
    return (0, i.jsxs)("span", {
      className: B().diffCell,
      children: [
        (0, i.jsx)("span", { className: B().cellEnv, children: O(e2) }),
        (0, i.jsxs)("span", {
          className: B().print,
          children: [
            (0, i.jsx)("span", { "aria-hidden": "true", children: "\u2022\u2022\u2022\u2022" }),
            (0, i.jsx)("span", {
              className: B().srOnly,
              children: "Fingerprint"
            }),
            " ",
            t2
          ]
        }),
        a2.sensitive ? (0, i.jsx)(m.A, {
          size: 14,
          strokeWidth: 1.75,
          role: "img",
          "aria-label": "Sensitive"
        }) : null
      ]
    });
  }
  let et = K;
};

__m(__module,__exports,__require);
}