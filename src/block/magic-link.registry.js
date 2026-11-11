/* magic-link (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(63689, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { MagicLink: () => C, default: () => M });
  var a = n(95155), i = n(12115), l = n(18310), s = n(25354), r = n(80642), o = n(35484), c = n(64577), d = n(31966), u = n(7770), m = n(51288), h = n(91586), _ = n.n(h);
  let g = [0.16, 1, 0.3, 1], p = [0.4, 0, 1, 1], x = [0, 0, 0.2, 1], f = { transformBox: "view-box", transformOrigin: "32px 19px" };
  function y({ play: e2 }) {
    let t2 = (0, l.I)() ?? false, n2 = e2 && !t2, r2 = `${(0, i.useId)().replace(/:/g, "")}-body`;
    return (0, a.jsxs)("svg", {
      className: _().envelope,
      viewBox: "0 0 64 52",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("defs", {
          children: (0, a.jsx)("clipPath", {
            id: r2,
            children: (0, a.jsx)("rect", {
              x: "4.75",
              y: "18.75",
              width: "54.5",
              height: "30.5",
              rx: "5"
            })
          })
        }),
        (0, a.jsx)("rect", {
          x: "4.75",
          y: "18.75",
          width: "54.5",
          height: "30.5",
          rx: "5",
          className: _().envBack
        }),
        (0, a.jsx)(s.PY1.path, {
          d: "M5.5 19.25 32 3.75l26.5 15.5Z",
          className: _().envFlapOpen,
          style: f,
          initial: !!n2 && { scaleY: 1 },
          animate: { scaleY: 0 },
          transition: { duration: 0.1, delay: 0.36, ease: p }
        }),
        (0, a.jsxs)(s.PY1.g, {
          initial: !!n2 && { y: -16, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: {
            y: { duration: 0.3, delay: 0.06, ease: g },
            opacity: { duration: 0.12, delay: 0.06 }
          },
          children: [
            (0, a.jsx)("rect", {
              x: "12.75",
              y: "21.75",
              width: "38.5",
              height: "26",
              rx: "3",
              className: _().envLetter
            }),
            (0, a.jsx)("path", {
              d: "M18.5 28h12",
              className: _().envLineStrong
            }),
            (0, a.jsx)("path", {
              d: "M18.5 33h27M18.5 37.5h20",
              className: _().envLine
            })
          ]
        }),
        (0, a.jsxs)("g", {
          clipPath: `url(#${r2})`,
          children: [
            (0, a.jsx)("path", {
              d: "M0 18.75 32 33l32-14.25V52H0Z",
              className: _().envPocket
            }),
            (0, a.jsx)("path", {
              d: "M4.75 19.5 32 33l27.25-13.5",
              className: _().envStroke
            })
          ]
        }),
        (0, a.jsx)(s.PY1.path, {
          d: "M5.5 19.25 32 36l26.5-16.75Z",
          className: _().envFlap,
          style: f,
          initial: !!n2 && { scaleY: 0 },
          animate: { scaleY: 1 },
          transition: { duration: 0.16, delay: 0.46, ease: x }
        }),
        (0, a.jsx)("rect", {
          x: "4.75",
          y: "18.75",
          width: "54.5",
          height: "30.5",
          rx: "5",
          className: _().envStroke
        }),
        (0, a.jsxs)(s.PY1.g, {
          style: { transformBox: "view-box", transformOrigin: "53px 43px" },
          initial: !!n2 && { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: {
            scale: { duration: 0.2, delay: 0.62, ease: g },
            opacity: { duration: 0.12, delay: 0.62 }
          },
          children: [
            (0, a.jsx)("circle", {
              cx: "53",
              cy: "43",
              r: "8.25",
              className: _().envBadge
            }),
            (0, a.jsx)("path", {
              d: "m49.6 43.1 2.3 2.3 4.5-4.6",
              className: _().envCheck
            })
          ]
        })
      ]
    });
  }
  let k = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i, b = (e2) => [...e2], j = {
    google: {
      label: "Google",
      Mark: function(e2) {
        return (0, a.jsxs)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          ...e2,
          children: [
            (0, a.jsx)("path", {
              fill: "#4285F4",
              d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            }),
            (0, a.jsx)("path", {
              fill: "#34A853",
              d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            }),
            (0, a.jsx)("path", {
              fill: "#FBBC05",
              d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            }),
            (0, a.jsx)("path", {
              fill: "#EA4335",
              d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            })
          ]
        });
      }
    },
    github: {
      label: "GitHub",
      Mark: function(e2) {
        return (0, a.jsx)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          fill: "currentColor",
          ...e2,
          children: (0, a.jsx)("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          })
        });
      }
    }
  }, v = {
    gmail: {
      label: "Gmail",
      Mark: function(e2) {
        return (0, a.jsxs)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          ...e2,
          children: [
            (0, a.jsx)("path", {
              fill: "#4285F4",
              d: "M1.636 21.002h3.819v-9.273L0 7.638v11.728c0 .904.732 1.636 1.636 1.636z"
            }),
            (0, a.jsx)("path", {
              fill: "#34A853",
              d: "M18.545 21.002h3.819c.904 0 1.636-.732 1.636-1.636V7.638l-5.455 4.091z"
            }),
            (0, a.jsx)("path", {
              fill: "#FBBC04",
              d: "M18.545 4.638v7.091L24 7.638V5.457c0-2.023-2.309-3.178-3.927-1.964z"
            }),
            (0, a.jsx)("path", {
              fill: "#EA4335",
              d: "M5.455 11.729V4.638L12 9.548l6.545-4.91v7.091L12 16.639z"
            }),
            (0, a.jsx)("path", {
              fill: "#C5221F",
              d: "M0 5.457v2.181l5.455 4.091V4.638L3.927 3.493C2.309 2.279 0 3.434 0 5.457z"
            })
          ]
        });
      }
    },
    outlook: {
      label: "Outlook",
      Mark: function(e2) {
        return (0, a.jsxs)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          ...e2,
          children: [
            (0, a.jsx)("rect", {
              x: "7.5",
              y: "3",
              width: "16",
              height: "18",
              rx: "2",
              fill: "#0078D4"
            }),
            (0, a.jsx)("path", {
              fill: "#28A8EA",
              d: "M7.5 10.6 15.5 15.4l8-4.8V19a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z"
            }),
            (0, a.jsx)("path", {
              fill: "#50D9FF",
              d: "M15.5 3h6a2 2 0 0 1 2 2v3.4h-8z",
              opacity: ".55"
            }),
            (0, a.jsx)("rect", {
              x: "0.5",
              y: "6",
              width: "12.5",
              height: "12",
              rx: "2",
              fill: "#0A5CB0"
            }),
            (0, a.jsx)("ellipse", {
              cx: "6.75",
              cy: "12",
              rx: "2.75",
              ry: "3.3",
              fill: "none",
              stroke: "#fff",
              strokeWidth: "1.8"
            })
          ]
        });
      }
    }
  }, N = {
    "gmial.com": "gmail.com",
    "gmal.com": "gmail.com",
    "gmai.com": "gmail.com",
    "gamil.com": "gmail.com",
    "gnail.com": "gmail.com",
    "gmail.co": "gmail.com",
    "gmail.con": "gmail.com",
    "hotmial.com": "hotmail.com",
    "hotmal.com": "hotmail.com",
    "hotmail.co": "hotmail.com",
    "outlok.com": "outlook.com",
    "outloo.com": "outlook.com",
    "outlook.co": "outlook.com",
    "yaho.com": "yahoo.com",
    "yahooo.com": "yahoo.com",
    "iclod.com": "icloud.com",
    "icloud.co": "icloud.com"
  }, w = /@(outlook|hotmail|live|msn)\./i;
  function S(e2, t2) {
    return new Promise((n2, a2) => {
      let i2 = setTimeout(n2, e2);
      t2.addEventListener(
        "abort",
        () => {
          clearTimeout(i2), a2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  function C({
    appName: e2 = "Halden",
    sender: t2 = "login@halden.app",
    defaultEmail: n2 = "",
    emailLabel: h2 = "Work email",
    providers: g2 = ["google", "github"],
    mailApps: p2 = ["gmail", "outlook"],
    resendAfter: x2 = 30,
    expiresInMinutes: f2 = 15,
    onSendLink: M2,
    onProviderSignIn: T,
    onOpenMail: $,
    validateEmail: F,
    termsHref: L = "#",
    privacyHref: P = "#",
    className: R
  }) {
    let A = (0, l.I)() ?? false, E = (0, i.useId)(), [O, I] = (0, i.useState)(n2), [z, Y] = (0, i.useState)(""), [D, H] = (0, i.useState)("form"), [V, W] = (0, i.useState)(false), [J, Z] = (0, i.useState)(null), [q, Q] = (0, i.useState)(null), [U, G] = (0, i.useState)(false), [K, X] = (0, i.useState)(""), [ee, et] = (0, i.useState)(0), [en, ea] = (0, i.useState)(0), [ei, el] = (0, i.useState)(0), [es, er] = (0, i.useState)("idle"), [eo, ec] = (0, i.useState)(""), ed = (0, i.useRef)(null), eu = (0, i.useRef)(null), em = (0, i.useRef)(null), eh = (0, i.useRef)(null), e_ = (0, i.useRef)(void 0), eg = (0, i.useRef)(false);
    (0, i.useEffect)(
      () => () => {
        em.current?.abort(), eh.current?.abort(), clearTimeout(e_.current);
      },
      []
    ), (0, i.useEffect)(() => {
      eg.current && ("sent" === D ? eu.current?.focus({ preventScroll: true }) : (ed.current?.focus({ preventScroll: true }), ed.current?.select()));
    }, [D]), (0, i.useEffect)(() => {
      if ("sent" !== D || !en) return;
      let e3 = setInterval(() => {
        let t3 = Date.now();
        el(t3), t3 >= en && clearInterval(e3);
      }, 250);
      return () => clearInterval(e3);
    }, [D, en]);
    let ep = Math.max(0, Math.ceil((en - ei) / 1e3)), ex = !M2;
    function ef(e3) {
      if (!e3) return { tone: "error", text: "Enter your email address" };
      if (!k.test(e3))
        return { tone: "error", text: "Check the email address for typos" };
      let t3 = F?.(e3);
      return t3 ? { tone: "error", text: t3 } : null;
    }
    async function ey(e3, t3) {
      em.current?.abort();
      let n3 = new AbortController();
      em.current = n3;
      try {
        if (M2 ? await M2(e3, n3.signal) : await S("first" === t3 ? 900 : 700, n3.signal), n3.signal.aborted)
          return;
        let a2 = Date.now();
        return el(a2), ea(a2 + 1e3 * x2), et((e4) => e4 + 1), true;
      } catch {
        return !!n3.signal.aborted && void 0;
      }
    }
    async function ek(e3) {
      let t3, n3;
      if (e3.preventDefault(), V || J) return;
      let a2 = O.trim();
      G(true);
      let i2 = ef(a2);
      if (i2) {
        Q(i2), ec(""), ed.current?.focus();
        return;
      }
      let l2 = (t3 = a2.lastIndexOf("@"), (n3 = N[a2.slice(t3 + 1).toLowerCase()]) ? `${a2.slice(0, t3)}@${n3}` : void 0);
      if (l2 && K !== a2) {
        X(a2), Q({ tone: "hint", text: "Did you mean", suggestion: l2 });
        return;
      }
      Q(null), W(true), ec("Sending your sign in link");
      let s2 = await ey(a2, "first");
      if (void 0 !== s2) {
        if (W(false), !s2) {
          Q({ tone: "error", text: "We couldn't send the link. Try again." }), ec("We couldn't send the link");
          return;
        }
        eg.current = true, Y(a2), er("idle"), H("sent"), ec(
          `Magic link sent to ${a2}.${ex ? " Simulated, nothing was sent." : ""}`
        );
      }
    }
    async function eb() {
      if (ep > 0 || "sending" === es) return;
      clearTimeout(e_.current), er("sending");
      let e3 = await ey(z, "resend");
      if (void 0 !== e3) {
        if (!e3) {
          er("failed"), ec("We couldn't resend the link");
          return;
        }
        er("sent"), ec(
          `New link sent to ${z}.${ex ? " Simulated, nothing was sent." : ""}`
        ), e_.current = setTimeout(() => er("idle"), 1800);
      }
    }
    async function ej(e3) {
      if (J || V) return;
      let { label: t3 } = j[e3];
      eh.current?.abort();
      let n3 = new AbortController();
      eh.current = n3, Z(e3), Q(null);
      try {
        T ? await T(e3, n3.signal) : (await S(800, n3.signal), Q({
          tone: "info",
          text: `Simulated, ${t3} sign in would open here`
        }), ec(`Simulated, ${t3} sign in was not opened`));
      } catch {
        if (n3.signal.aborted) return;
        Q({ tone: "error", text: `${t3} sign in didn't finish. Try again.` });
      }
      n3.signal.aborted || Z(null);
    }
    let ev = {
      shown: {
        opacity: 1,
        y: 0,
        transition: {
          duration: A ? 0.12 : 0.2,
          delay: 0.08 * !A,
          ease: b(u.T.ease.enter)
        }
      },
      hidden: (e3) => ({
        opacity: 0,
        y: A ? 0 : e3,
        transition: { duration: 0.1, ease: b(u.T.ease.standard) }
      })
    }, eN = A ? { duration: 0.12 } : { duration: 0.16, ease: b(u.T.ease.enter) }, ew = `${E}-message`, eS = V || null !== J;
    return (0, a.jsx)("div", {
      className: [_().root, R].filter(Boolean).join(" "),
      children: (0, a.jsxs)("section", {
        className: _().card,
        "aria-label": `Sign in to ${e2}`,
        children: [
          (0, a.jsxs)("div", {
            className: _().stack,
            children: [
              (0, a.jsxs)(s.PY1.div, {
                className: _().view,
                custom: -4,
                variants: ev,
                initial: false,
                animate: "form" === D ? "shown" : "hidden",
                inert: "form" !== D,
                children: [
                  (0, a.jsxs)("div", {
                    className: _().body,
                    children: [
                      (0, a.jsxs)("header", {
                        className: _().header,
                        children: [
                          (0, a.jsxs)("h2", {
                            className: _().title,
                            children: ["Sign in to ", e2]
                          }),
                          (0, a.jsx)("p", {
                            className: _().subtitle,
                            children: "Welcome back. No password needed."
                          })
                        ]
                      }),
                      g2.length ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", {
                            className: [
                              _().pair,
                              1 === g2.length ? _().single : ""
                            ].filter(Boolean).join(" "),
                            children: g2.map((e3) => {
                              let { label: t3, Mark: n3 } = j[e3];
                              return (0, a.jsxs)(
                                m.$,
                                {
                                  type: "button",
                                  variant: "secondary",
                                  className: _().wide,
                                  loading: J === e3,
                                  disabled: eS && J !== e3,
                                  onClick: () => ej(e3),
                                  "aria-label": `Continue with ${t3}`,
                                  children: [
                                    (0, a.jsx)(n3, { className: _().mark }),
                                    t3
                                  ]
                                },
                                e3
                              );
                            })
                          }),
                          (0, a.jsx)("div", {
                            className: _().divider,
                            role: "separator",
                            "aria-label": "or",
                            children: (0, a.jsx)("span", {
                              "aria-hidden": "true",
                              children: "or"
                            })
                          })
                        ]
                      }) : null,
                      (0, a.jsxs)("form", {
                        className: _().form,
                        onSubmit: ek,
                        noValidate: true,
                        children: [
                          (0, a.jsx)("label", {
                            className: _().label,
                            htmlFor: `${E}-email`,
                            children: h2
                          }),
                          (0, a.jsx)("input", {
                            ref: ed,
                            id: `${E}-email`,
                            className: _().input,
                            type: "email",
                            inputMode: "email",
                            autoComplete: "email",
                            spellCheck: false,
                            autoCapitalize: "none",
                            placeholder: "you@company.com",
                            value: O,
                            onChange: function(e3) {
                              let t3 = e3.target.value;
                              I(t3), q && ("error" === q.tone && U ? Q(ef(t3.trim())) : "error" !== q.tone && Q(null));
                            },
                            readOnly: V,
                            "aria-invalid": q?.tone === "error" || void 0,
                            "aria-describedby": q ? ew : void 0
                          }),
                          (0, a.jsx)("div", {
                            className: _().message,
                            id: ew,
                            children: (0, a.jsx)(r.N, {
                              initial: false,
                              children: q ? (0, a.jsxs)(
                                s.PY1.div,
                                {
                                  className: [
                                    _().messageRow,
                                    _()[q.tone]
                                  ].join(" "),
                                  role: "error" === q.tone ? "alert" : void 0,
                                  initial: { opacity: 0, y: 2 * !A },
                                  animate: {
                                    opacity: 1,
                                    y: 0,
                                    transition: eN
                                  },
                                  exit: {
                                    opacity: 0,
                                    transition: { duration: 0.1 }
                                  },
                                  children: [
                                    "error" === q.tone ? (0, a.jsx)(o.A, {
                                      className: _().messageIcon,
                                      "aria-hidden": "true"
                                    }) : null,
                                    "info" === q.tone ? (0, a.jsx)(c.A, {
                                      className: _().messageIcon,
                                      "aria-hidden": "true"
                                    }) : null,
                                    (0, a.jsx)("span", {
                                      className: _().messageText,
                                      children: q.text
                                    }),
                                    q.suggestion ? (0, a.jsxs)("span", {
                                      className: _().suggestion,
                                      children: [
                                        (0, a.jsx)("button", {
                                          type: "button",
                                          className: _().fix,
                                          onClick: () => {
                                            I(q.suggestion), Q(null), ed.current?.focus();
                                          },
                                          children: q.suggestion
                                        }),
                                        "?"
                                      ]
                                    }) : null
                                  ]
                                },
                                `${q.tone}:${q.text}:${q.suggestion ?? ""}`
                              ) : null
                            })
                          }),
                          (0, a.jsx)(m.$, {
                            type: "submit",
                            className: _().wide,
                            loading: V,
                            disabled: null !== J,
                            children: "Send magic link"
                          })
                        ]
                      })
                    ]
                  }),
                  (0, a.jsx)("footer", {
                    className: _().footer,
                    children: (0, a.jsxs)("p", {
                      className: _().terms,
                      children: [
                        "By continuing, you agree to the ",
                        (0, a.jsx)("a", { href: L, children: "Terms" }),
                        " and ",
                        (0, a.jsx)("a", {
                          href: P,
                          children: "Privacy Policy"
                        }),
                        "."
                      ]
                    })
                  })
                ]
              }),
              (0, a.jsxs)(s.PY1.div, {
                className: _().view,
                custom: 4,
                variants: ev,
                initial: false,
                animate: "sent" === D ? "shown" : "hidden",
                inert: "sent" !== D,
                children: [
                  (0, a.jsxs)("div", {
                    className: [_().body, _().sentBody].join(" "),
                    children: [
                      (0, a.jsx)(y, { play: ee > 0 }, ee),
                      (0, a.jsx)("h2", {
                        ref: eu,
                        tabIndex: -1,
                        className: _().title,
                        children: "Check your inbox"
                      }),
                      (0, a.jsx)("p", {
                        className: _().subtitle,
                        children: "We sent a sign in link to"
                      }),
                      (0, a.jsx)("p", {
                        className: _().email,
                        title: z,
                        children: z || "\xA0"
                      }),
                      (0, a.jsxs)("p", {
                        className: _().meta,
                        children: [
                          "From ",
                          t2,
                          " \xB7 expires in ",
                          f2,
                          " minutes"
                        ]
                      }),
                      p2.length ? (0, a.jsx)("div", {
                        className: [
                          _().pair,
                          _().apps,
                          1 === p2.length ? _().single : ""
                        ].filter(Boolean).join(" "),
                        children: p2.map((e3) => {
                          let { label: n3, Mark: i2 } = v[e3];
                          return (0, a.jsxs)(
                            m.$,
                            {
                              type: "button",
                              variant: "secondary",
                              className: _().wide,
                              onClick: () => (function(e4) {
                                if ($) return $(e4, z);
                                window.open(
                                  "gmail" === e4 ? `https://mail.google.com/mail/u/0/#search/${encodeURIComponent(`from:${t2} newer_than:1d`)}` : w.test(z) ? "https://outlook.live.com/mail/0/" : "https://outlook.office.com/mail/",
                                  "_blank",
                                  "noopener,noreferrer"
                                ), ec(
                                  `Opened ${v[e4].label} in a new tab`
                                );
                              })(e3),
                              children: [
                                (0, a.jsx)(i2, { className: _().mark }),
                                "Open ",
                                n3
                              ]
                            },
                            e3
                          );
                        })
                      }) : null
                    ]
                  }),
                  (0, a.jsxs)("footer", {
                    className: [_().footer, _().sentFooter].join(" "),
                    children: [
                      (0, a.jsxs)("button", {
                        type: "button",
                        className: _().textButton,
                        onClick: function() {
                          em.current?.abort(), clearTimeout(e_.current), eg.current = true, er("idle"), H("form"), ec("");
                        },
                        children: [
                          (0, a.jsx)(d.A, {
                            className: _().textIcon,
                            "aria-hidden": "true"
                          }),
                          "Use a different email"
                        ]
                      }),
                      (0, a.jsx)("button", {
                        type: "button",
                        className: _().textButton,
                        onClick: eb,
                        "aria-disabled": ep > 0 || "sending" === es || void 0,
                        children: (0, a.jsx)(B, {
                          phase: es,
                          remaining: ep,
                          fade: eN
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)("p", {
            className: _().srOnly,
            role: "status",
            "aria-live": "polite",
            children: eo
          })
        ]
      })
    });
  }
  function B({ phase: e2, remaining: t2, fade: n2 }) {
    let i2 = "idle" === e2 ? t2 > 0 ? "count" : "ready" : e2, l2 = {
      count: (0, a.jsxs)("span", {
        children: [
          "Resend in ",
          (0, a.jsx)("span", {
            className: _().count,
            children: `${Math.floor(t2 / 60)}:${String(t2 % 60).padStart(2, "0")}`
          })
        ]
      }),
      ready: "Resend link",
      sending: "Sending\u2026",
      sent: (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(c.A, { className: _().textIcon, "aria-hidden": "true" }),
          "New link sent"
        ]
      }),
      failed: (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(o.A, { className: _().textIcon, "aria-hidden": "true" }),
          "Retry resend"
        ]
      })
    };
    return (0, a.jsxs)("span", {
      className: _().resend,
      children: [
        Object.entries(l2).map(
          ([e3, t3]) => (0, a.jsx)(
            "span",
            {
              className: _().ghost,
              "aria-hidden": "true",
              children: "count" === e3 ? (0, a.jsxs)("span", {
                children: [
                  "Resend in ",
                  (0, a.jsx)("span", {
                    className: _().count,
                    children: "0:00"
                  })
                ]
              }) : t3
            },
            `ghost-${e3}`
          )
        ),
        (0, a.jsx)(r.N, {
          initial: false,
          children: (0, a.jsx)(
            s.PY1.span,
            {
              className: [_().resendLabel, "count" === i2 ? _().waiting : ""].filter(Boolean).join(" "),
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: n2 },
              exit: { opacity: 0, transition: { duration: 0.1 } },
              children: l2[i2]
            },
            i2
          )
        })
      ]
    });
  }
  let M = C;
}

__m(__module,__exports,__require);
});
A.regCss(91586, ".root{display:grid;width:100%;justify-items:center}\n.card{position:relative;box-sizing:border-box;width:100%;max-width:25rem;padding:var(--space-8) var(--space-8) var(--space-6);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n@media (max-width:30rem){.card{padding:var(--space-6) var(--space-6) var(--space-5);border-radius:var(--radius-panel)}\n.stack{display:grid}\n.view{grid-area:1/1;display:flex;min-width:0;flex-direction:column}\n.view[inert]{pointer-events:none}\n.body{display:flex;min-width:0;flex:1;flex-direction:column}\n.sentBody{align-items:center;justify-content:center;text-align:center}\n.sentBody .title{margin-bottom:var(--space-1)}\n.header{display:grid;gap:var(--space-1);margin-bottom:var(--space-6)}\n.title{margin:0;color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:1.3;letter-spacing:-.015em}\n.subtitle{margin:0;color:var(--text-secondary)}\n.pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-2)}\n.single{grid-template-columns:minmax(0,1fr)}\n.wide{width:100%;min-width:0}\n.mark{display:block;width:16px;height:16px;flex:none}\n.divider{display:flex;align-items:center;gap:var(--space-3);margin:var(--space-5) 0;color:var(--text-muted);font-size:var(--text-xs);line-height:1}\n.divider:after,.divider:before{content:\"\";height:1px;flex:1;background:var(--border)}\n.form{display:flex;min-width:0;flex-direction:column}\n.label{margin-bottom:var(--space-2);color:var(--foreground);font-weight:500}\n.input{box-sizing:border-box;width:100%;min-height:var(--control-height-md);padding:0 var(--space-4);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:read-only{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:focus-visible,[aria-invalid=true],:read-only){border-color:var(--text-muted)}\n@media (prefers-reduced-motion:reduce){.fix,.input,.terms a,.textButton{transition-duration:.01ms}\n.message{display:grid;height:1.875rem;align-items:center;font-size:var(--text-xs)}\n.messageRow{grid-area:1/1;display:flex;min-width:0;align-items:center;gap:6px;white-space:nowrap}\n.messageText{min-width:0;overflow:hidden;text-overflow:ellipsis}\n.messageIcon{width:14px;height:14px;flex:none}\n.info .messageIcon{color:var(--success)}\n.error{color:var(--danger)}\n.hint,.info{color:var(--text-secondary)}\n.suggestion{display:flex;min-width:0;color:var(--foreground)}\n.fix{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;padding:0;border:0;background:none;color:var(--foreground);font:inherit;font-weight:500;text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:3px;cursor:pointer;transition:text-decoration-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.fix:hover{text-decoration-color:currentColor}\n.footer{display:flex;min-height:2rem;align-items:center;justify-content:center;margin-top:var(--space-6);padding-top:var(--space-4);border-top:1px solid var(--border)}\n.sentFooter{justify-content:space-between;gap:var(--space-3)}\n.terms{margin:0;color:var(--text-muted);font-size:var(--text-xs);text-align:center;text-wrap:balance}\n.terms a{color:var(--text-secondary);text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:3px;transition:color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.terms a:hover{color:var(--foreground)}\n.envelope{display:block;width:76px;height:62px;flex:none;margin-bottom:var(--space-5);overflow:visible}\n.envBack{fill:var(--surface-muted)}\n.envFlapOpen{fill:var(--surface-muted);stroke:var(--border-strong);stroke-width:1.5;stroke-linejoin:round}\n.envLetter{fill:var(--surface);stroke:var(--border-strong);stroke-width:1.5}\n.envLineStrong{stroke:var(--foreground);stroke-width:2;stroke-linecap:round}\n.envLine{stroke:var(--border-strong);stroke-width:2;stroke-linecap:round}\n.envPocket{fill:var(--surface)}\n.envFlap{fill:var(--surface)}\n.envFlap,.envStroke{stroke:var(--border-strong);stroke-width:1.5;stroke-linejoin:round}\n.envStroke{fill:none}\n.envBadge{fill:var(--success);stroke:var(--surface);stroke-width:2.5}\n.envCheck{fill:none;stroke:var(--surface);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.email{max-width:100%;margin:0;overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.meta{margin:var(--space-1) 0 0;color:var(--text-muted);font-size:var(--text-xs)}\n.apps{width:100%;margin-top:var(--space-6)}\n.textButton{display:inline-flex;min-height:2rem;align-items:center;gap:6px;margin:0 calc(var(--space-2) * -1);padding:0 var(--space-2);border:0;border-radius:10px;background:none;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.textButton[aria-disabled=true]{cursor:default}\n@media (hover:hover) and (pointer:fine){.textButton:not([aria-disabled=true]):hover{color:var(--foreground);background:var(--surface-muted)}\n.textButton:not([aria-disabled=true]):active{color:var(--foreground);background:var(--surface-muted)}\n.textIcon{width:14px;height:14px;flex:none}\n.resend{display:grid;justify-items:end}\n.ghost,.resendLabel{grid-area:1/1;display:inline-flex;align-items:center;gap:6px}\n.ghost{visibility:hidden}\n.waiting{color:var(--text-muted)}\n.count{font-variant-numeric:tabular-nums}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","card":"card","stack":"stack","view":"view","body":"body","sentBody":"sentBody","title":"title","header":"header","subtitle":"subtitle","pair":"pair","single":"single","wide":"wide","mark":"mark","divider":"divider","form":"form","label":"label","input":"input","fix":"fix","terms":"terms","textButton":"textButton","message":"message","messageRow":"messageRow","messageText":"messageText","messageIcon":"messageIcon","info":"info","error":"error","hint":"hint","suggestion":"suggestion","footer":"footer","sentFooter":"sentFooter","envelope":"envelope","envBack":"envBack","envFlapOpen":"envFlapOpen","envLetter":"envLetter","envLineStrong":"envLineStrong","envLine":"envLine","envPocket":"envPocket","envFlap":"envFlap","envStroke":"envStroke","envBadge":"envBadge","envCheck":"envCheck","email":"email","meta":"meta","apps":"apps","textIcon":"textIcon","resend":"resend","ghost":"ghost","resendLabel":"resendLabel","waiting":"waiting","count":"count","srOnly":"srOnly"});
A.cssFor("magic-link", [91586]);
A.item("magic-link", {entry:63689, export:"MagicLink", kind:"block", tier:"pro", unresolved:[]});
})();