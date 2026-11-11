function(__module,__exports,__require){
"use strict";
function __m(e, i, t) {
  "use strict";
  t.r(i), t.d(i, { LoginImmersive: () => $, default: () => P });
  var a = t(95155), n = t(12115), r = t(5772), s = t(80642), o = t(25354), l = t(28245), d = t(55809), c = t(92171), u = t(18310), m = t(64577), p = t(75796), h = t(51288), g = t(35978), f = t(67752), y = t(7770), b = t(18464), x = t.n(b);
  let _ = "maya@northwind.studio", v = (0, f.jW)("mountain-ridges");
  function w({ className: e2 }) {
    return (0, a.jsxs)("svg", {
      className: e2,
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
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
  let j = ["Google", "Apple", "GitHub"], k = {
    Google: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
    Apple: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
    GitHub: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  }, T = {
    "sign-in": {
      title: "Sign in to Arc",
      lede: "We will email you a link that signs you in. No password needed.",
      sent: "The link signs you in on this browser. It expires in 15 minutes.",
      done: "You're signed in",
      switchAsk: "No account?",
      switchTo: "Sign up"
    },
    "sign-up": {
      title: "Create your account",
      lede: "Start with your work email. We will send a link to confirm it.",
      sent: "The link confirms your address and opens your new workspace. It expires in 15 minutes.",
      done: "Your account is ready",
      switchAsk: "Have an account?",
      switchTo: "Sign in"
    }
  }, N = {
    "gmial.com": "gmail.com",
    "gamil.com": "gmail.com",
    "gmai.com": "gmail.com",
    "gmail.co": "gmail.com",
    "hotmial.com": "hotmail.com",
    "outlok.com": "outlook.com",
    "iclod.com": "icloud.com",
    "yaho.com": "yahoo.com"
  }, S = (e2) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e2.trim()), C = {
    enter: (e2) => e2 ? { opacity: 0 } : { opacity: 0, y: 12, filter: `blur(${y.T.blur.soft}px)` },
    center: (e2) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: e2 ? { duration: y.T.duration.instant } : {
        y: y.T.spring.smooth,
        opacity: {
          duration: y.T.duration.standard,
          ease: y.T.ease.enter,
          delay: 0.06
        },
        filter: {
          duration: y.T.duration.standard,
          ease: y.T.ease.enter,
          delay: 0.06
        }
      }
    }),
    exit: (e2) => e2 ? { opacity: 0, transition: { duration: 0 } } : {
      opacity: 0,
      y: -8,
      filter: `blur(${y.T.blur.soft}px)`,
      transition: {
        duration: y.T.duration.exit,
        ease: y.T.ease.standard
      }
    }
  }, A = {
    enter: (e2) => ({
      opacity: 0,
      y: `${-0.7 * e2}em`,
      filter: `blur(${y.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${0.7 * e2}em`,
      filter: `blur(${y.T.blur.subtle}px)`
    })
  };
  function L({ seconds: e2, reduce: i2 }) {
    let [t2, r2] = (0, n.useState)({ seconds: e2, direction: 1 });
    t2.seconds !== e2 && r2({ seconds: e2, direction: e2 < t2.seconds ? 1 : -1 });
    let l2 = `${Math.floor(e2 / 60)}:${String(e2 % 60).padStart(2, "0")}`, d2 = i2 ? { duration: 0 } : {
      y: y.T.spring.snappy,
      opacity: { duration: y.T.duration.fast },
      filter: { duration: y.T.duration.fast }
    };
    return (0, a.jsx)("span", {
      className: x().time,
      children: l2.split("").map(
        (e3, i3) => (0, a.jsx)(
          "span",
          {
            className: x().timeColumn,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: t2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: t2.direction,
                  variants: A,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: d2,
                  children: e3
                },
                e3
              )
            })
          },
          i3
        )
      )
    });
  }
  function M({ reduce: e2 }) {
    let i2 = (0, l.d)(e2 ? 1 : -1), t2 = (0, l.d)(e2 ? 0 : -30), r2 = (0, l.d)(+!!e2), s2 = (0, d.G)(i2, (e3) => Math.min(0, e3)), u2 = (0, d.G)(i2, (e3) => Math.max(0, e3));
    (0, n.useEffect)(() => {
      if (e2) {
        i2.jump(1), t2.jump(0), r2.jump(1);
        return;
      }
      let a2 = [
        (0, c.i)(r2, 1, { duration: y.T.duration.fast, delay: 0.16 }),
        (0, c.i)(t2, 0, { ...y.T.spring.smooth, delay: 0.16 }),
        (0, c.i)(i2, 1, { ...y.T.spring.morph, delay: 0.56 })
      ];
      return () => a2.forEach((e3) => e3.stop());
    }, [e2, i2, t2, r2]);
    let m2 = "M9 33 L48 57 L87 33 Z";
    return (0, a.jsxs)("svg", {
      className: x().envelope,
      viewBox: "0 0 96 80",
      width: "96",
      height: "80",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, a.jsx)(o.PY1.path, {
          d: m2,
          className: x().paper,
          vectorEffect: "non-scaling-stroke",
          style: { scaleY: s2, originY: 0 }
        }),
        (0, a.jsxs)(o.PY1.g, {
          style: { y: t2, opacity: r2 },
          children: [
            (0, a.jsx)("rect", {
              x: "20",
              y: "38",
              width: "56",
              height: "34",
              rx: "3",
              className: x().paper
            }),
            (0, a.jsx)("path", {
              d: "M28 47h26M28 54h40M28 61h18",
              className: x().ink
            })
          ]
        }),
        (0, a.jsx)("rect", {
          x: "8",
          y: "32",
          width: "80",
          height: "44",
          rx: "4",
          className: x().paper
        }),
        (0, a.jsx)("path", {
          d: "M9 75 L40 52M87 75 L56 52",
          className: x().ink
        }),
        (0, a.jsx)(o.PY1.path, {
          d: m2,
          className: x().paper,
          vectorEffect: "non-scaling-stroke",
          style: { scaleY: u2, originY: 0 }
        })
      ]
    });
  }
  function $({
    fullScreen: e2 = false,
    resendSeconds: i2 = 30,
    termsHref: t2,
    privacyHref: d2,
    onSignIn: f2
  }) {
    var b2;
    let A2, P2, R, z, B, E, Y = !!(0, u.I)(), [O, F] = (0, n.useState)("sign-in"), [I, G] = (0, n.useState)("email"), [W, D] = (0, n.useState)(""), [H, V] = (0, n.useState)(_), [J, K] = (0, n.useState)(false), [Z, q] = (0, n.useState)(false), [Q, U] = (0, n.useState)(null), [X, ee] = (0, n.useState)(false), [ei, et] = (0, n.useState)(0), [ea, en] = (0, n.useState)(i2), [er, es] = (0, n.useState)("Magic link"), [eo, el] = (0, n.useState)(""), [ed, ec] = (0, n.useState)(""), eu = (0, n.useRef)(null), em = (0, n.useRef)(null), ep = (0, n.useRef)(null), eh = (0, n.useRef)([]), eg = (0, n.useRef)(0), { track: ef, height: ey } = (b2 = `${I}:${O}`, A2 = (0, n.useRef)(null), P2 = (0, l.d)("auto"), R = (0, n.useRef)(0), z = (0, n.useRef)(false), B = (0, n.useRef)(b2), E = (0, n.useCallback)(
      (e3) => {
        z.current = true, (0, c.i)(P2, e3, {
          ...y.T.spring.smooth,
          onComplete: () => {
            z.current = false, P2.jump("auto");
          }
        });
      },
      [P2]
    ), (0, n.useEffect)(() => {
      let e3 = A2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(([i4]) => {
        R.current = i4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight, z.current && E(R.current);
      });
      return i3.observe(e3), () => i3.disconnect();
    }, [E]), (0, n.useLayoutEffect)(() => {
      if (B.current === b2) return;
      B.current = b2;
      let e3 = P2.get(), i3 = "number" == typeof e3 ? e3 : R.current, t3 = A2.current?.offsetHeight ?? 0;
      if (Y || !i3 || !t3) {
        z.current = false, P2.jump("auto");
        return;
      }
      "auto" === e3 && P2.jump(i3), E(t3);
    }, [b2, Y, P2, E]), { track: A2, height: P2 }), eb = T[O], ex = (J || Z) && !S(W) ? W.trim() ? "Enter a full address, like name@example.com." : "Enter your email address." : "", e_ = J || Z ? (function(e3) {
      let [i3, t3, a2] = e3.trim().toLowerCase().split("@");
      return i3 && t3 && void 0 === a2 && N[t3] ? `${i3}@${N[t3]}` : "";
    })(W) : "", ev = ed || ("sent" === I ? "Demo: Open mail app follows the link for you." : ""), ew = Y ? { duration: y.T.duration.instant } : { duration: y.T.duration.standard, ease: y.T.ease.enter }, ej = {
      initial: Y ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${y.T.blur.soft}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: Y ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: -4,
        filter: `blur(${y.T.blur.subtle}px)`,
        transition: { duration: y.T.duration.fast }
      },
      transition: ew
    };
    function ek(e3, i3) {
      eh.current.push(window.setTimeout(e3, i3));
    }
    function eT(e3, i3) {
      ep.current = i3, G(e3);
    }
    function eN(e3, i3) {
      U(null), es(e3), V(i3), eT("done", "heading"), el(
        `${"sign-up" === O ? "Account created" : "Signed in"} with ${"Magic link" === e3 ? "a magic link" : e3}`
      ), f2?.(i3, e3);
    }
    return (0, n.useEffect)(() => {
      let e3 = eh.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, n.useEffect)(() => {
      if ("sent" !== I || ea <= 0) return;
      let e3 = window.setTimeout(() => en((e4) => Math.max(0, e4 - 1)), 1e3);
      return () => window.clearTimeout(e3);
    }, [I, ea]), (0, n.useEffect)(() => {
      let e3 = ep.current;
      ep.current = null, "email" === e3 && (eu.current?.focus(), eu.current?.select()), "heading" === e3 && em.current?.focus();
    }, [I]), (0, a.jsxs)("section", {
      className: [x().screen, e2 ? x().fullScreen : ""].filter(Boolean).join(" "),
      "aria-label": eb.title,
      children: [
        (0, a.jsx)(o.PY1.div, {
          className: x().photo,
          initial: { scale: 1.06 },
          animate: { scale: 1 },
          transition: Y ? { duration: 0 } : { duration: 1.6, ease: y.T.ease.enter },
          children: (0, a.jsx)(r.default, {
            src: v.src,
            alt: "",
            fill: true,
            sizes: "100vw",
            loading: "eager"
          })
        }),
        (0, a.jsx)("div", { className: x().scrim, "aria-hidden": "true" }),
        (0, a.jsxs)("header", {
          className: x().topBar,
          children: [
            (0, a.jsxs)("span", {
              className: x().brand,
              children: [
                (0, a.jsx)("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  "aria-hidden": "true",
                  children: (0, a.jsx)("path", {
                    d: "M3 15a7 7 0 0 1 14 0",
                    stroke: "currentColor",
                    strokeWidth: "2.25",
                    strokeLinecap: "round"
                  })
                }),
                "Arc"
              ]
            }),
            (0, a.jsx)("button", {
              type: "button",
              className: x().switch,
              "aria-label": `${eb.switchAsk} ${eb.switchTo}`,
              onClick: function() {
                if (Q || X) return;
                let e3 = "sign-in" === O ? "sign-up" : "sign-in";
                F(e3), q(false), "email" !== I && eT("email", null), el("sign-up" === e3 ? "Create an account" : "Sign in");
              },
              children: ["sign-in", "sign-up"].map(
                (e3) => (0, a.jsxs)(
                  o.PY1.span,
                  {
                    className: x().switchLabel,
                    "aria-hidden": "true",
                    initial: false,
                    animate: e3 === O ? { opacity: 1, y: 0, filter: "blur(0px)" } : {
                      opacity: 0,
                      y: Y ? 0 : -6,
                      filter: `blur(${Y ? 0 : y.T.blur.subtle}px)`
                    },
                    transition: ew,
                    children: [
                      T[e3].switchAsk,
                      " ",
                      (0, a.jsx)("span", {
                        className: x().switchAction,
                        children: T[e3].switchTo
                      })
                    ]
                  },
                  e3
                )
              )
            })
          ]
        }),
        (0, a.jsx)("div", {
          className: x().stage,
          children: (0, a.jsxs)(o.PY1.div, {
            className: x().card,
            initial: { opacity: 0, y: 18, scale: 0.985 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: Y ? { duration: 0 } : {
              y: { ...y.T.spring.smooth, delay: 0.18 },
              scale: { ...y.T.spring.smooth, delay: 0.18 },
              opacity: {
                duration: y.T.duration.considered,
                ease: y.T.ease.enter,
                delay: 0.18
              }
            },
            children: [
              (0, a.jsx)(o.PY1.div, {
                className: x().viewport,
                style: { height: ey },
                children: (0, a.jsx)("div", {
                  ref: ef,
                  className: x().track,
                  children: (0, a.jsxs)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    custom: Y,
                    children: [
                      "email" === I && (0, a.jsxs)(
                        o.PY1.div,
                        {
                          className: x().step,
                          custom: Y,
                          variants: C,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          children: [
                            (0, a.jsx)("div", {
                              className: x().headingSlot,
                              children: (0, a.jsx)(s.N, {
                                mode: "popLayout",
                                initial: false,
                                custom: Y,
                                children: (0, a.jsxs)(
                                  o.PY1.div,
                                  {
                                    className: x().heading,
                                    custom: Y,
                                    variants: C,
                                    initial: "enter",
                                    animate: "center",
                                    exit: "exit",
                                    children: [
                                      (0, a.jsx)("h2", {
                                        children: eb.title
                                      }),
                                      (0, a.jsx)("p", {
                                        children: eb.lede
                                      })
                                    ]
                                  },
                                  O
                                )
                              })
                            }),
                            (0, a.jsxs)("form", {
                              className: x().form,
                              onSubmit: function(e3) {
                                if (e3.preventDefault(), !Q && !X) {
                                  if (q(true), !S(W))
                                    return void eu.current?.focus();
                                  U("email"), el("Sending your link"), ek(() => {
                                    U(null), ee(true), V(W.trim().toLowerCase()), el("Link sent"), ek(() => {
                                      ee(false), en(i2), et((e4) => e4 + 1), eT("sent", "heading");
                                    }, 620);
                                  }, 900);
                                }
                              },
                              noValidate: true,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: x().fieldGroup,
                                  children: [
                                    (0, a.jsx)(g.p, {
                                      ref: eu,
                                      label: "Email",
                                      type: "email",
                                      name: "email",
                                      inputMode: "email",
                                      autoComplete: "email",
                                      autoCapitalize: "none",
                                      spellCheck: false,
                                      placeholder: "name@example.com",
                                      value: W,
                                      readOnly: "email" === Q || X,
                                      error: ex,
                                      onChange: (e3) => D(e3.target.value),
                                      onBlur: () => {
                                        W.trim() && K(true);
                                      }
                                    }),
                                    (0, a.jsx)(s.N, {
                                      initial: false,
                                      children: e_ && (0, a.jsx)(
                                        o.PY1.div,
                                        {
                                          className: x().suggestion,
                                          initial: {
                                            height: 0,
                                            opacity: 0
                                          },
                                          animate: {
                                            height: "auto",
                                            opacity: 1
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: Y ? { duration: 0 } : {
                                            height: y.T.spring.smooth,
                                            opacity: {
                                              duration: y.T.duration.fast
                                            }
                                          },
                                          children: (0, a.jsxs)("p", {
                                            children: [
                                              "Did you mean ",
                                              (0, a.jsx)("button", {
                                                type: "button",
                                                className: x().textButton,
                                                "aria-label": `Use ${e_}`,
                                                onClick: function() {
                                                  D(e_), el(
                                                    `Email changed to ${e_}`
                                                  ), eu.current?.focus();
                                                },
                                                children: e_
                                              }),
                                              "?"
                                            ]
                                          })
                                        },
                                        "suggestion"
                                      )
                                    })
                                  ]
                                }),
                                (0, a.jsx)(h.$, {
                                  type: "submit",
                                  className: x().wide,
                                  loading: "email" === Q,
                                  children: X ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(m.A, {
                                        size: 16,
                                        strokeWidth: 2,
                                        "aria-hidden": "true"
                                      }),
                                      "Link sent"
                                    ]
                                  }) : "Email me a link"
                                })
                              ]
                            }),
                            (0, a.jsx)("div", {
                              className: x().divider,
                              children: "or"
                            }),
                            (0, a.jsx)("div", {
                              className: x().sso,
                              role: "group",
                              "aria-label": "Continue with another account",
                              children: j.map(
                                (e3) => (0, a.jsxs)(
                                  h.$,
                                  {
                                    type: "button",
                                    variant: "secondary",
                                    className: x().ssoButton,
                                    "aria-label": `Continue with ${e3}`,
                                    loading: Q === e3,
                                    onClick: () => {
                                      !Q && !X && (U(e3), el(`Opening ${e3}`), ek(
                                        () => eN(
                                          e3,
                                          S(W) ? W.trim().toLowerCase() : _
                                        ),
                                        900
                                      ));
                                    },
                                    children: [
                                      "Google" === e3 ? (0, a.jsx)(w, {
                                        className: x().providerMark
                                      }) : (0, a.jsx)("svg", {
                                        className: x().providerMark,
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: (0, a.jsx)("path", {
                                          d: k[e3]
                                        })
                                      }),
                                      e3
                                    ]
                                  },
                                  e3
                                )
                              )
                            })
                          ]
                        },
                        "email"
                      ),
                      "sent" === I && (0, a.jsxs)(
                        o.PY1.div,
                        {
                          className: x().step,
                          custom: Y,
                          variants: C,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          children: [
                            (0, a.jsx)(M, { reduce: Y }, ei),
                            (0, a.jsxs)("div", {
                              className: x().heading,
                              children: [
                                (0, a.jsx)("h2", {
                                  ref: em,
                                  tabIndex: -1,
                                  children: "Check your inbox"
                                }),
                                (0, a.jsx)("p", { children: eb.sent })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: x().address,
                              children: [
                                (0, a.jsx)(p.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, a.jsx)("span", {
                                  className: x().addressText,
                                  children: H
                                }),
                                (0, a.jsx)("button", {
                                  type: "button",
                                  className: x().textButton,
                                  "aria-label": `Edit email, ${H}`,
                                  onClick: function() {
                                    Q || (q(false), eT("email", "email"), el("Edit your email"));
                                  },
                                  children: "Edit"
                                })
                              ]
                            }),
                            (0, a.jsx)(h.$, {
                              type: "button",
                              className: x().wide,
                              loading: "mail" === Q,
                              onClick: function() {
                                Q || (U("mail"), el("Opening your mail app"), ek(() => eN("Magic link", H), 1e3));
                              },
                              children: "Open mail app"
                            }),
                            (0, a.jsxs)("p", {
                              className: x().resendRow,
                              children: [
                                (0, a.jsx)("span", {
                                  children: "Didn't get it?"
                                }),
                                (0, a.jsx)("button", {
                                  type: "button",
                                  className: x().resend,
                                  "aria-disabled": ea > 0 || void 0,
                                  "aria-label": ea > 0 ? `Resend link, available in ${ea} seconds` : "Resend link",
                                  onClick: function() {
                                    Q || ea > 0 || (en(i2), et((e3) => e3 + 1), el("New link sent"));
                                  },
                                  children: (0, a.jsx)(s.N, {
                                    mode: "popLayout",
                                    initial: false,
                                    children: (0, a.jsx)(
                                      o.PY1.span,
                                      {
                                        className: x().resendLabel,
                                        ...ej,
                                        children: ea > 0 ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            "Resend in ",
                                            (0, a.jsx)(L, {
                                              seconds: ea,
                                              reduce: Y
                                            })
                                          ]
                                        }) : "Resend link"
                                      },
                                      ea > 0 ? "wait" : "ready"
                                    )
                                  })
                                })
                              ]
                            })
                          ]
                        },
                        "sent"
                      ),
                      "done" === I && (0, a.jsxs)(
                        o.PY1.div,
                        {
                          className: x().step,
                          custom: Y,
                          variants: C,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          children: [
                            (0, a.jsxs)("svg", {
                              className: x().doneMark,
                              viewBox: "0 0 56 56",
                              width: "56",
                              height: "56",
                              fill: "none",
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              "aria-hidden": "true",
                              children: [
                                (0, a.jsx)(o.PY1.circle, {
                                  cx: "28",
                                  cy: "28",
                                  r: "26",
                                  strokeWidth: "1.5",
                                  initial: !Y && { pathLength: 0 },
                                  animate: { pathLength: 1 },
                                  transition: {
                                    duration: 1.2 * y.T.duration.considered,
                                    ease: y.T.ease.inOut,
                                    delay: 0.12
                                  }
                                }),
                                (0, a.jsx)(o.PY1.path, {
                                  d: "M18 28.5 25 35.5 38.5 21.5",
                                  strokeWidth: "1.75",
                                  initial: !Y && {
                                    pathLength: 0,
                                    opacity: 0
                                  },
                                  animate: { pathLength: 1, opacity: 1 },
                                  transition: {
                                    pathLength: {
                                      ...y.T.spring.snappy,
                                      delay: 0.56
                                    },
                                    opacity: {
                                      duration: y.T.duration.instant,
                                      delay: 0.56
                                    }
                                  }
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: x().heading,
                              children: [
                                (0, a.jsx)("h2", {
                                  ref: em,
                                  tabIndex: -1,
                                  children: eb.done
                                }),
                                (0, a.jsxs)("p", {
                                  children: [
                                    "Magic link" === er ? "Your link worked" : `${er} confirmed it's you`,
                                    ". This browser stays signed in for 30 days."
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsxs)("dl", {
                              className: x().details,
                              children: [
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("dt", {
                                      children: "Account"
                                    }),
                                    (0, a.jsx)("dd", { children: H })
                                  ]
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("dt", {
                                      children: "Signed in with"
                                    }),
                                    (0, a.jsx)("dd", { children: er })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsx)(h.$, {
                              type: "button",
                              variant: "secondary",
                              className: x().wide,
                              onClick: function() {
                                D(H), K(false), q(false), eT("email", "email"), el("Signed out");
                              },
                              children: "Sign out"
                            })
                          ]
                        },
                        "done"
                      )
                    ]
                  })
                })
              }),
              (0, a.jsx)("p", {
                className: x().srOnly,
                role: "status",
                "aria-live": "polite",
                children: eo
              })
            ]
          })
        }),
        (0, a.jsxs)("footer", {
          className: x().footer,
          children: [
            (0, a.jsxs)("p", {
              className: x().note,
              children: [
                (0, a.jsx)("span", {
                  className: x().srOnly,
                  "aria-live": "polite",
                  children: ed
                }),
                (0, a.jsx)("span", {
                  className: x().noteSlot,
                  "aria-hidden": !!ed || void 0,
                  children: (0, a.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, a.jsx)(
                      o.PY1.span,
                      { ...ej, children: ev },
                      ev
                    )
                  })
                })
              ]
            }),
            (0, a.jsx)("nav", {
              className: x().legal,
              "aria-label": "Legal",
              children: [
                { label: "Terms", name: "Terms of service", href: t2 },
                { label: "Privacy", name: "Privacy policy", href: d2 }
              ].map(
                (e3) => e3.href ? (0, a.jsx)(
                  "a",
                  {
                    href: e3.href,
                    className: x().legalLink,
                    children: e3.label
                  },
                  e3.label
                ) : (0, a.jsx)(
                  "button",
                  {
                    type: "button",
                    className: x().legalLink,
                    onClick: () => {
                      var i3;
                      let t3;
                      return i3 = e3.name, ec(`${i3} would open here.`), t3 = ++eg.current, void ek(() => {
                        eg.current === t3 && ec("");
                      }, 3600);
                    },
                    children: e3.label
                  },
                  e3.label
                )
              )
            })
          ]
        })
      ]
    });
  }
  let P = $;
}

__m(__module,__exports,__require);
}