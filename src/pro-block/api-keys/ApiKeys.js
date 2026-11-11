function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ApiKeys: () => B, default: () => W });
  var s = a(95155), i = a(12115), n = a(80642), r = a(79196), o = a(25354), l = a(28245), c = a(92171), d = a(18310), u = a(11012), p = a(12363), h = a(2125), m = a(92218), y = a(90034), f = a(51288), _ = a(20530), x = a(73474), v = a(70614), k = a(35978), j = a(66558), g = a(7770), b = a(68764), N = a.n(b);
  let w = { name: "Sofia Ramirez", photo: "media/people/sofia-ramirez.svg" }, T = [
    {
      id: "payments:write",
      description: "Create, capture, and refund payments"
    },
    {
      id: "customers:read",
      description: "Read customers and saved payment methods"
    },
    {
      id: "invoices:write",
      description: "Draft, finalize, and send invoices"
    },
    {
      id: "reports:read",
      description: "Download balance and payout reports"
    }
  ], S = [
    {
      id: "production",
      name: "Production server",
      env: "live",
      last4: "4f2a",
      scopes: ["payments:write", "customers:read", "invoices:write"],
      created: "Mar 4, 2026",
      used: "2 min ago",
      source: "34.201.18.7, Ashburn",
      requests: 1284902,
      owner: {
        name: "Emma Collins",
        photo: "media/people/emma-collins.svg"
      }
    },
    {
      id: "billing",
      name: "Billing worker",
      env: "live",
      last4: "9c01",
      scopes: ["invoices:write", "reports:read"],
      created: "Jan 18, 2026",
      used: "3 hours ago",
      source: "18.184.72.40, Frankfurt",
      requests: 48211,
      owner: {
        name: "Marcus Johnson",
        photo: "media/people/marcus-johnson.svg"
      }
    },
    {
      id: "staging",
      name: "Staging",
      env: "test",
      last4: "d7e3",
      scopes: ["payments:write", "customers:read"],
      created: "Aug 30, 2026",
      used: "yesterday",
      source: "CI runner 10.0.12.8",
      requests: 9870,
      owner: {
        name: "Ava Mitchell",
        photo: "media/people/ava-mitchell.svg"
      }
    },
    {
      id: "export",
      name: "Analytics export",
      env: "live",
      last4: "2b8a",
      scopes: ["reports:read"],
      created: "Nov 2, 2025",
      used: "41 days ago",
      source: "52.17.230.9, Dublin",
      idle: "No requests in 41 days. Revoke it if nothing depends on it.",
      requests: 0,
      owner: {
        name: "Jasmine Brooks",
        photo: "media/people/jasmine-brooks.svg"
      }
    },
    {
      id: "local",
      name: "Local development",
      env: "test",
      last4: "6a55",
      scopes: [
        "payments:write",
        "customers:read",
        "invoices:write",
        "reports:read"
      ],
      created: "Sep 9, 2026",
      used: "never",
      requests: 0,
      owner: w
    }
  ], C = [
    { value: "test", label: "Test" },
    { value: "live", label: "Live" }
  ], $ = ["customers:read"], R = new Intl.NumberFormat("en-US"), P = [...g.T.ease.enter], I = [...g.T.ease.standard], E = { duration: 0 }, A = { opacity: 1, y: "0em", filter: "blur(0px)" }, F = { opacity: 0, y: "0.35em", filter: `blur(${g.T.blur.soft}px)` }, L = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${g.T.blur.subtle}px)`,
    transition: { duration: g.T.duration.fast, ease: I }
  }, Y = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${g.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: "0em", filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${g.T.blur.subtle}px)`
    })
  };
  function O({ text: e2, reduced: t2 }) {
    return (0, s.jsx)("span", {
      className: N().swap,
      children: (0, s.jsx)(n.N, {
        mode: "popLayout",
        initial: false,
        children: (0, s.jsx)(z, { text: e2, reduced: t2 }, e2)
      })
    });
  }
  function z({ text: e2, reduced: t2 }) {
    let a2 = (0, r.tF)();
    return (0, s.jsx)(o.PY1.span, {
      className: N().swapText,
      "aria-hidden": !a2 || void 0,
      initial: t2 ? { opacity: 0 } : F,
      animate: A,
      exit: t2 ? { opacity: 0, transition: E } : L,
      transition: t2 ? E : { duration: g.T.duration.standard, ease: P },
      children: e2
    });
  }
  function M({ value: e2, reduced: t2 }) {
    let [a2, r2] = (0, i.useState)({ value: e2, direction: 1 });
    return a2.value !== e2 && r2({ value: e2, direction: e2 > a2.value ? 1 : -1 }), (0, s.jsx)("span", {
      className: N().roll,
      "aria-hidden": "true",
      children: (0, s.jsx)(n.N, {
        mode: "popLayout",
        initial: false,
        custom: a2.direction,
        children: (0, s.jsx)(
          o.PY1.span,
          {
            custom: a2.direction,
            variants: Y,
            initial: !t2 && "enter",
            animate: "center",
            exit: t2 ? void 0 : "exit",
            transition: t2 ? E : {
              y: g.T.spring.snappy,
              opacity: { duration: g.T.duration.fast },
              filter: { duration: g.T.duration.fast }
            },
            children: e2
          },
          e2
        )
      })
    });
  }
  function q({ on: e2, delay: t2, reduced: a2 }) {
    return (0, s.jsx)(o.PY1.span, {
      className: N().strike,
      "aria-hidden": "true",
      initial: false,
      animate: { scaleX: +!!e2 },
      transition: a2 ? E : { duration: g.T.duration.considered, ease: P, delay: t2 }
    });
  }
  function D({
    item: e2,
    rowId: t2,
    open: a2,
    fresh: i2,
    revoked: r2,
    reduced: l2,
    onToggle: c2,
    onRevoke: d2,
    triggerRef: h2
  }) {
    let f2, _2 = `${t2}-detail`;
    return (0, s.jsx)(o.PY1.div, {
      id: t2,
      role: "listitem",
      className: N().row,
      "data-open": a2,
      "data-fresh": i2,
      "data-revoked": r2,
      initial: l2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: l2 ? { opacity: 0, transition: E } : {
        opacity: 0,
        height: 0,
        transition: {
          height: g.T.spring.smooth,
          opacity: { duration: g.T.duration.standard, ease: I }
        }
      },
      transition: l2 ? E : {
        height: g.T.spring.smooth,
        opacity: { duration: g.T.duration.standard, ease: P, delay: 0.08 }
      },
      children: (0, s.jsxs)("div", {
        className: N().rowInner,
        children: [
          (0, s.jsx)("span", { className: N().flash, "aria-hidden": "true" }),
          (0, s.jsxs)("button", {
            ref: h2,
            className: N().trigger,
            type: "button",
            "aria-expanded": a2,
            "aria-controls": a2 ? _2 : void 0,
            disabled: r2,
            onClick: c2,
            children: [
              (0, s.jsxs)("span", {
                className: N().identity,
                children: [
                  (0, s.jsxs)("span", {
                    className: N().nameLine,
                    children: [
                      (0, s.jsxs)("span", {
                        className: N().strikeable,
                        children: [
                          (0, s.jsx)("span", {
                            className: N().name,
                            children: e2.name
                          }),
                          (0, s.jsx)(q, { on: r2, delay: 0, reduced: l2 })
                        ]
                      }),
                      (0, s.jsx)(y.E, {
                        size: "sm",
                        tone: "live" === e2.env ? "success" : "neutral",
                        className: N().env,
                        children: "live" === e2.env ? "Live" : "Test"
                      })
                    ]
                  }),
                  (0, s.jsxs)("span", {
                    className: N().strikeable,
                    children: [
                      (0, s.jsx)("span", {
                        className: N().masked,
                        "aria-hidden": "true",
                        children: `sk_${e2.env}_\u2022\u2022\u2022\u2022${e2.last4}`
                      }),
                      (0, s.jsx)(q, { on: r2, delay: 0.08, reduced: l2 })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: N().srOnly,
                    children: `Key ending in ${e2.last4}${r2 ? ", revoked" : ""}`
                  })
                ]
              }),
              (0, s.jsxs)("span", {
                className: N().scopes,
                children: [
                  (0, s.jsx)("span", {
                    className: N().srOnly,
                    children: "Scopes: "
                  }),
                  e2.scopes.map(
                    (e3) => (0, s.jsx)("span", { className: N().chip, children: e3 }, e3)
                  )
                ]
              }),
              (0, s.jsxs)("span", {
                className: N().dates,
                children: [
                  (0, s.jsxs)("span", {
                    className: N().used,
                    children: [
                      e2.idle ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(u.A, {
                            className: N().idleIcon,
                            size: 13,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, s.jsx)("span", {
                            className: N().srOnly,
                            children: "Idle, "
                          })
                        ]
                      }) : null,
                      "never" === e2.used ? "Never used" : `Used ${e2.used}`
                    ]
                  }),
                  (0, s.jsxs)("span", {
                    className: N().created,
                    children: ["Created ", e2.created]
                  })
                ]
              }),
              (0, s.jsx)(p.A, {
                className: N().chevron,
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            ]
          }),
          (0, s.jsx)(n.N, {
            initial: false,
            children: a2 && (0, s.jsx)(
              o.PY1.div,
              {
                id: _2,
                className: N().detail,
                role: "region",
                "aria-label": `${e2.name} details`,
                initial: l2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: l2 ? { opacity: 0, transition: E } : {
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: g.T.spring.smooth,
                    opacity: { duration: g.T.duration.fast }
                  }
                },
                transition: l2 ? E : {
                  height: g.T.spring.smooth,
                  opacity: {
                    duration: g.T.duration.standard,
                    ease: P,
                    delay: 0.05
                  }
                },
                children: (0, s.jsxs)("div", {
                  className: N().detailInner,
                  children: [
                    (0, s.jsxs)("dl", {
                      className: N().facts,
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("dt", { children: "Created by" }),
                            (0, s.jsxs)("dd", {
                              children: [
                                (0, s.jsx)(m.e, {
                                  name: e2.owner.name,
                                  src: e2.owner.photo,
                                  size: "sm",
                                  "aria-hidden": "true"
                                }),
                                e2.owner.name
                              ]
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("dt", { children: "Last request" }),
                            (0, s.jsx)("dd", {
                              children: "never" === e2.used ? "No requests yet" : `${(f2 = e2.used).charAt(0).toUpperCase() + f2.slice(1)} from ${e2.source}`
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("dt", {
                              children: "Requests in 30 days"
                            }),
                            (0, s.jsx)("dd", {
                              className: N().number,
                              children: R.format(e2.requests)
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: N().narrowFact,
                          children: [
                            (0, s.jsx)("dt", { children: "Created" }),
                            (0, s.jsx)("dd", { children: e2.created })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: `${N().narrowFact} ${N().scopeFact}`,
                          children: [
                            (0, s.jsx)("dt", { children: "Scopes" }),
                            (0, s.jsx)("dd", {
                              className: N().factChips,
                              children: e2.scopes.map(
                                (e3) => (0, s.jsx)(
                                  "span",
                                  { className: N().chip, children: e3 },
                                  e3
                                )
                              )
                            })
                          ]
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: N().revokeRow,
                      children: [
                        (0, s.jsx)("p", {
                          className: N().revokeNote,
                          children: e2.idle ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(u.A, {
                                className: N().idleIcon,
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, s.jsx)("span", { children: e2.idle })
                            ]
                          }) : (0, s.jsx)("span", {
                            children: "Requests signed with this key fail as soon as it is revoked."
                          })
                        }),
                        (0, s.jsx)(v.j, {
                          label: "Hold to revoke",
                          confirmedLabel: "Revoked",
                          onConfirm: d2
                        })
                      ]
                    })
                  ]
                })
              },
              "detail"
            )
          })
        ]
      })
    });
  }
  function B() {
    let e2 = (0, i.useId)(), t2 = (0, d.I)() ?? false, [a2, r2] = (0, i.useState)(S), [p2, m2] = (0, i.useState)(false), [y2, v2] = (0, i.useState)("form"), [b2, R2] = (0, i.useState)(""), [A2, F2] = (0, i.useState)("test"), [L2, Y2] = (0, i.useState)($), [z2, q2] = (0, i.useState)({}), [B2, W2] = (0, i.useState)(false), [K, G] = (0, i.useState)(""), [Q, U] = (0, i.useState)(null), [V, H] = (0, i.useState)(null), [X, Z] = (0, i.useState)([]), [J, ee] = (0, i.useState)(
      "Open a key to see who created it and where it was last used"
    ), {
      width: et,
      height: ea,
      trackRef: es,
      faceRef: ei,
      innerRef: en,
      arm: er
    } = (function(e3, t3) {
      let a3 = (0, l.d)("auto"), s2 = (0, l.d)("auto"), [n2, r3] = (0, i.useState)({ track: 0, face: 0, row: 0, inner: 0 }), o2 = (0, i.useRef)(null), d2 = (0, i.useRef)(null), u2 = (0, i.useRef)(null), p3 = (0, i.useRef)(e3), h2 = (0, i.useRef)(0), m3 = (0, i.useRef)({});
      return (0, i.useLayoutEffect)(() => {
        p3.current = e3;
      }, [e3]), (0, i.useEffect)(() => {
        let e4 = o2.current, t4 = d2.current, a4 = u2.current;
        if (!e4 || !t4 || !a4 || "u" < typeof ResizeObserver) return;
        let s3 = new ResizeObserver(
          () => r3((s4) => {
            let i2 = {
              track: e4.getBoundingClientRect().width,
              face: p3.current && s4.face ? s4.face : t4.getBoundingClientRect().width,
              row: t4.offsetHeight,
              inner: a4.getBoundingClientRect().height
            };
            return i2.track === s4.track && i2.face === s4.face && i2.row === s4.row && i2.inner === s4.inner ? s4 : i2;
          })
        );
        return [e4, t4, a4].forEach((e5) => s3.observe(e5)), () => s3.disconnect();
      }, []), (0, i.useEffect)(() => {
        if (!n2.track || !n2.face || !n2.row) return;
        let i2 = !t3 && performance.now() < h2.current, r4 = (e4, t4, a4) => {
          let s3 = e4.get();
          m3.current[a4]?.stop(), i2 && "number" == typeof s3 ? Math.abs(s3 - t4) > 0.5 && (m3.current[a4] = (0, c.i)(e4, t4, g.T.spring.smooth)) : e4.jump(t4);
        };
        r4(a3, e3 ? n2.track : n2.face, "width"), r4(s2, e3 ? Math.max(n2.inner, n2.row) : n2.row, "height");
      }, [e3, n2, t3, a3, s2]), (0, i.useEffect)(
        () => () => {
          m3.current.width?.stop(), m3.current.height?.stop();
        },
        []
      ), {
        width: a3,
        height: s2,
        trackRef: o2,
        faceRef: d2,
        innerRef: u2,
        arm: () => {
          h2.current = performance.now() + 900;
        }
      };
    })(p2, t2), eo = (0, i.useRef)(null), el = (0, i.useRef)(null), ec = (0, i.useRef)(null), ed = (0, i.useRef)(null), eu = (0, i.useRef)(/* @__PURE__ */ new Map()), ep = (0, i.useRef)(a2), eh = (0, i.useRef)([]), em = (0, i.useRef)(0), ey = (0, i.useRef)(0), ef = (0, i.useRef)(""), e_ = p2 && "reveal" === y2 ? "Key created" : "Create key";
    (0, i.useEffect)(() => {
      ep.current = a2;
    }, [a2]), (0, i.useEffect)(() => {
      let e3 = eh.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let ex = (e3, t3) => {
      eh.current.push(window.setTimeout(e3, t3));
    };
    function ev() {
      p2 && (em.current++, er(), m2(false), W2(false), "reveal" === y2 ? (U(null), ee(
        `${ef.current} added. Only its last four characters stay visible.`
      )) : ee("New key discarded"), eo.current?.focus({ preventScroll: true }));
    }
    return (0, s.jsxs)("section", {
      className: N().keys,
      "aria-labelledby": `${e2}-heading`,
      children: [
        (0, s.jsxs)("div", {
          className: N().top,
          children: [
            (0, s.jsxs)("header", {
              className: N().header,
              children: [
                (0, s.jsx)("h2", { id: `${e2}-heading`, children: "API keys" }),
                (0, s.jsx)("p", {
                  children: "Secret keys sign requests from your servers to the Halden API. Keep them out of browsers and source control."
                })
              ]
            }),
            (0, s.jsxs)("div", {
              ref: es,
              className: N().toolbar,
              onKeyDown: function(e3) {
                "Escape" === e3.key && p2 && (e3.stopPropagation(), ev());
              },
              children: [
                (0, s.jsxs)("p", {
                  className: N().count,
                  "data-hidden": p2,
                  inert: p2,
                  children: [
                    (0, s.jsx)(M, { value: a2.length, reduced: t2 }),
                    (0, s.jsx)("span", {
                      className: N().srOnly,
                      children: a2.length
                    }),
                    " active ",
                    1 === a2.length ? "key" : "keys"
                  ]
                }),
                (0, s.jsx)(o.PY1.div, {
                  className: N().shell,
                  "data-open": p2,
                  style: { width: et, height: ea },
                  children: (0, s.jsxs)("div", {
                    ref: en,
                    className: N().shellInner,
                    children: [
                      (0, s.jsxs)("div", {
                        ref: ei,
                        className: N().face,
                        children: [
                          (0, s.jsx)("button", {
                            ref: eo,
                            className: N().toggle,
                            type: "button",
                            "aria-label": p2 ? "Close" : "Create key",
                            "aria-expanded": p2,
                            "aria-controls": p2 ? `${e2}-panel` : void 0,
                            onClick: p2 ? ev : function() {
                              er(), v2("form"), R2(""), F2("test"), Y2($), q2({}), W2(false), m2(true), ee(
                                "Name the key, pick an environment, and choose its scopes"
                              ), requestAnimationFrame(
                                () => el.current?.focus({ preventScroll: true })
                              );
                            },
                            children: (0, s.jsx)(o.PY1.span, {
                              className: N().toggleIcon,
                              initial: false,
                              animate: { rotate: 45 * !!p2 },
                              transition: t2 ? E : g.T.spring.snappy,
                              children: (0, s.jsx)(h.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          }),
                          (0, s.jsx)("span", {
                            id: `${e2}-title`,
                            className: N().title,
                            role: p2 ? "heading" : void 0,
                            "aria-level": p2 ? 3 : void 0,
                            "aria-hidden": !p2 || void 0,
                            children: (0, s.jsx)(O, { text: e_, reduced: t2 })
                          })
                        ]
                      }),
                      (0, s.jsx)(n.N, {
                        initial: false,
                        children: p2 && (0, s.jsx)(
                          o.PY1.div,
                          {
                            id: `${e2}-panel`,
                            className: N().body,
                            role: "group",
                            "aria-labelledby": `${e2}-title`,
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: t2 ? E : {
                                duration: g.T.duration.standard + 0.04,
                                ease: P,
                                delay: 0.14
                              }
                            },
                            exit: {
                              opacity: 0,
                              transition: t2 ? E : { duration: 0.1, ease: I }
                            },
                            children: (0, s.jsx)(n.N, {
                              mode: "popLayout",
                              initial: false,
                              children: "form" === y2 ? (0, s.jsxs)(
                                o.PY1.form,
                                {
                                  className: N().form,
                                  noValidate: true,
                                  onSubmit: function(e3) {
                                    if (e3.preventDefault(), B2) return;
                                    let t3 = b2.trim(), a3 = {
                                      name: t3 ? void 0 : "Name the key so your team can tell it apart",
                                      scopes: L2.length ? void 0 : "Choose at least one scope"
                                    };
                                    if (q2(a3), a3.name || a3.scopes) {
                                      ee(a3.name ?? a3.scopes ?? ""), a3.name ? el.current?.focus() : ec.current?.querySelector("button")?.focus();
                                      return;
                                    }
                                    let s2 = ++em.current;
                                    W2(true), ee(`Generating ${t3}.`), ex(() => {
                                      if (s2 !== em.current) return;
                                      ey.current += 1;
                                      let e4 = (function(e5, t4) {
                                        let a5 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", s3 = 2166136261;
                                        for (let t5 of e5)
                                          s3 = Math.imul(
                                            s3 ^ t5.charCodeAt(0),
                                            16777619
                                          );
                                        let i2 = "";
                                        for (let e6 = 0; e6 < 40; e6++)
                                          s3 = Math.imul(
                                            (s3 = Math.imul(
                                              s3 ^ s3 >>> 16,
                                              2246822507
                                            )) ^ s3 >>> 13,
                                            3266489909
                                          ), s3 ^= s3 >>> 16, i2 += a5[(s3 >>> 0) % a5.length], s3 = s3 + 2654435769 | 0;
                                        return `sk_${t4}_${i2}`;
                                      })(
                                        `${t3}:${A2}:${ey.current}`,
                                        A2
                                      ), a4 = {
                                        id: `created-${ey.current}`,
                                        name: t3,
                                        env: A2,
                                        last4: e4.slice(-4),
                                        scopes: T.map(
                                          (e5) => e5.id
                                        ).filter(
                                          (e5) => L2.includes(e5)
                                        ),
                                        created: "Sep 22, 2026",
                                        used: "never",
                                        requests: 0,
                                        owner: w
                                      };
                                      ef.current = t3, er(), G(e4), r2((e5) => [a4, ...e5]), U(a4.id), W2(false), v2("reveal"), ee(
                                        `${t3} created. Copy the secret now, it will not be shown again.`
                                      ), requestAnimationFrame(
                                        () => ed.current?.querySelector("button")?.focus({
                                          preventScroll: true
                                        })
                                      );
                                    }, 720);
                                  },
                                  exit: {
                                    opacity: 0,
                                    transition: t2 ? E : {
                                      duration: g.T.duration.instant
                                    }
                                  },
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: N().fields,
                                      children: [
                                        (0, s.jsx)(k.p, {
                                          ref: el,
                                          label: "Name",
                                          placeholder: "Billing sync",
                                          autoComplete: "off",
                                          maxLength: 40,
                                          value: b2,
                                          error: z2.name,
                                          onChange: (e3) => {
                                            R2(e3.target.value), z2.name && q2((e4) => ({
                                              ...e4,
                                              name: void 0
                                            }));
                                          }
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: N().envField,
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: N().fieldLabel,
                                              "aria-hidden": "true",
                                              children: "Environment"
                                            }),
                                            (0, s.jsx)(j.A, {
                                              label: "Environment",
                                              value: A2,
                                              options: C,
                                              onValueChange: (e3) => F2(e3)
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("fieldset", {
                                      ref: ec,
                                      className: N().scopeSet,
                                      "aria-describedby": z2.scopes ? `${e2}-scope-error` : void 0,
                                      children: [
                                        (0, s.jsx)("legend", {
                                          children: "Scopes"
                                        }),
                                        (0, s.jsx)("div", {
                                          className: N().scopeGrid,
                                          children: T.map(
                                            (e3) => (0, s.jsx)(
                                              _.S,
                                              {
                                                label: e3.id,
                                                description: e3.description,
                                                checked: L2.includes(
                                                  e3.id
                                                ),
                                                onCheckedChange: (t3) => {
                                                  var a3, s2;
                                                  return a3 = e3.id, s2 = true === t3, void (Y2(
                                                    (e4) => s2 ? [
                                                      ...e4.filter(
                                                        (e5) => e5 !== a3
                                                      ),
                                                      a3
                                                    ] : e4.filter(
                                                      (e5) => e5 !== a3
                                                    )
                                                  ), s2 && z2.scopes && q2((e4) => ({
                                                    ...e4,
                                                    scopes: void 0
                                                  })));
                                                }
                                              },
                                              e3.id
                                            )
                                          )
                                        }),
                                        (0, s.jsx)(n.N, {
                                          initial: false,
                                          children: z2.scopes && (0, s.jsx)(
                                            o.PY1.p,
                                            {
                                              id: `${e2}-scope-error`,
                                              className: N().scopeError,
                                              role: "alert",
                                              initial: t2 ? { opacity: 0 } : {
                                                height: 0,
                                                opacity: 0
                                              },
                                              animate: {
                                                height: "auto",
                                                opacity: 1
                                              },
                                              exit: t2 ? {
                                                opacity: 0,
                                                transition: E
                                              } : {
                                                height: 0,
                                                opacity: 0
                                              },
                                              transition: t2 ? E : g.T.spring.smooth,
                                              children: (0, s.jsx)(
                                                "span",
                                                {
                                                  children: z2.scopes
                                                }
                                              )
                                            },
                                            "error"
                                          )
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: N().actions,
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: N().hint,
                                          children: (0, s.jsx)(O, {
                                            text: "live" === A2 ? "Live keys act on real payments and customers" : "Test keys only reach test data",
                                            reduced: t2
                                          })
                                        }),
                                        (0, s.jsx)(f.$, {
                                          type: "button",
                                          variant: "ghost",
                                          onClick: ev,
                                          children: "Cancel"
                                        }),
                                        (0, s.jsx)(f.$, {
                                          type: "submit",
                                          loading: B2,
                                          children: "Generate key"
                                        })
                                      ]
                                    })
                                  ]
                                },
                                "form"
                              ) : (0, s.jsxs)(
                                o.PY1.div,
                                {
                                  ref: ed,
                                  className: N().reveal,
                                  initial: t2 ? { opacity: 0 } : { opacity: 0, y: 8 },
                                  animate: { opacity: 1, y: 0 },
                                  transition: t2 ? E : {
                                    duration: g.T.duration.standard + 0.08,
                                    ease: P,
                                    delay: 0.06
                                  },
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: N().secretBlock,
                                      children: [
                                        (0, s.jsx)("span", {
                                          id: `${e2}-secret-label`,
                                          className: N().fieldLabel,
                                          children: "Secret key"
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: N().secretField,
                                          role: "group",
                                          "aria-labelledby": `${e2}-secret-label`,
                                          children: [
                                            (0, s.jsx)(o.PY1.code, {
                                              className: N().secret,
                                              initial: !t2 && {
                                                opacity: 0,
                                                filter: `blur(${g.T.blur.text}px)`
                                              },
                                              animate: {
                                                opacity: 1,
                                                filter: "blur(0px)"
                                              },
                                              transition: {
                                                duration: g.T.duration.considered,
                                                ease: P,
                                                delay: 0.14
                                              },
                                              children: K
                                            }),
                                            (0, s.jsx)(x.CopyButton, {
                                              value: K,
                                              label: "Copy",
                                              onCopied: () => ee(
                                                "Secret copied. Paste it into your secrets manager."
                                              )
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("p", {
                                      className: N().once,
                                      children: [
                                        (0, s.jsx)(u.A, {
                                          size: 16,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        }),
                                        (0, s.jsx)("span", {
                                          children: "Copy it now and keep it in your secrets manager. You will not see this key again after you close this panel."
                                        })
                                      ]
                                    }),
                                    (0, s.jsx)("div", {
                                      className: N().actions,
                                      children: (0, s.jsx)(f.$, {
                                        type: "button",
                                        onClick: ev,
                                        children: "Done"
                                      })
                                    })
                                  ]
                                },
                                "reveal"
                              )
                            })
                          },
                          "body"
                        )
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: N().list,
          role: "list",
          "aria-label": "Active keys",
          children: (0, s.jsx)(n.N, {
            initial: false,
            children: a2.map(
              (a3) => (0, s.jsx)(
                D,
                {
                  item: a3,
                  rowId: `${e2}-${a3.id}`,
                  open: V === a3.id,
                  fresh: Q === a3.id,
                  revoked: X.includes(a3.id),
                  reduced: t2,
                  onToggle: () => {
                    let e3;
                    H(e3 = V === a3.id ? null : a3.id), ee(
                      e3 ? `${a3.name} details opened` : `${a3.name} details closed`
                    );
                  },
                  onRevoke: () => {
                    Z((e3) => [...e3, a3.id]), ee(`${a3.name} revoked.`), ex(() => {
                      let t3 = ep.current, s2 = t3.findIndex((e3) => e3.id === a3.id), i2 = t3[s2 + 1] ?? t3[s2 - 1], n2 = document.getElementById(`${e2}-${a3.id}`)?.contains(document.activeElement) ?? false;
                      r2((e3) => e3.filter((e4) => e4.id !== a3.id)), Z((e3) => e3.filter((e4) => e4 !== a3.id)), H((e3) => e3 === a3.id ? null : e3), n2 && requestAnimationFrame(
                        () => (i2 ? eu.current.get(i2.id) : eo.current)?.focus({
                          preventScroll: true
                        })
                      );
                    }, 900);
                  },
                  triggerRef: (e3) => {
                    e3 ? eu.current.set(a3.id, e3) : eu.current.delete(a3.id);
                  }
                },
                a3.id
              )
            )
          })
        }),
        (0, s.jsx)(n.N, {
          initial: false,
          children: 0 === a2.length && (0, s.jsxs)(
            o.PY1.div,
            {
              className: N().empty,
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: t2 ? E : { duration: g.T.duration.standard, delay: 0.3 }
              },
              exit: { opacity: 0, transition: E },
              children: [
                (0, s.jsx)("p", { children: "No active keys" }),
                (0, s.jsx)("span", {
                  children: "Requests to the Halden API fail until you create one."
                }),
                (0, s.jsx)(f.$, {
                  type: "button",
                  variant: "secondary",
                  size: "sm",
                  onClick: function() {
                    r2(S), ee("Sample keys restored");
                  },
                  children: "Restore sample keys"
                })
              ]
            },
            "empty"
          )
        }),
        (0, s.jsx)("footer", {
          className: N().srOnly,
          children: (0, s.jsx)("p", {
            role: "status",
            "aria-live": "polite",
            children: J
          })
        })
      ]
    });
  }
  let W = B;
}

__m(__module,__exports,__require);
}