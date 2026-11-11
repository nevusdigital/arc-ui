function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { HeroSignup: () => R, default: () => B });
  var i = t(95155), n = t(12115), o = t(18310), r = t(30464), s = t(9937), l = t(25354), d = t(80642), c = t(64577), u = t(7770), h = t(67752);
  let p = {
    title: "Close the month in an afternoon",
    description: "Tally matches every card payment to its receipt as it lands, so month end is a short review instead of a week of spreadsheets.",
    placeholder: "you@company.com",
    buttonLabel: "Join waitlist",
    shortButtonLabel: "Join",
    footnote: "One email when your invite is ready. Nothing else.",
    count: 1283,
    people: [
      { name: "Andre Williams", src: (0, h.my)("andre-williams") },
      { name: "Chloe Nguyen", src: (0, h.my)("chloe-nguyen") },
      { name: "Diane Foster", src: (0, h.my)("diane-foster") },
      { name: "Daniel Kim", src: (0, h.my)("daniel-kim") },
      { name: "Sofia Ramirez", src: (0, h.my)("sofia-ramirez") }
    ]
  }, m = {
    "gmial.com": "gmail.com",
    "gmal.com": "gmail.com",
    "gamil.com": "gmail.com",
    "gnail.com": "gmail.com",
    "gmail.co": "gmail.com",
    "gmail.con": "gmail.com",
    "gmaill.com": "gmail.com",
    "hotmial.com": "hotmail.com",
    "hotmal.com": "hotmail.com",
    "hotmail.co": "hotmail.com",
    "yahooo.com": "yahoo.com",
    "yaho.com": "yahoo.com",
    "yahoo.co": "yahoo.com",
    "outlok.com": "outlook.com",
    "outloo.com": "outlook.com",
    "outlook.co": "outlook.com",
    "iclod.com": "icloud.com",
    "icloud.co": "icloud.com",
    "icoud.com": "icloud.com"
  };
  var g = t(86454);
  let f = (e2, a2 = 0, t2 = 1) => Math.min(t2, Math.max(a2, e2)), y = (e2) => e2 <= 0.04045 ? e2 / 12.92 : ((e2 + 0.055) / 1.055) ** 2.4;
  function b(e2, a2, t2) {
    let i2 = t2 * Math.PI / 180, n2 = a2 * Math.cos(i2), o2 = a2 * Math.sin(i2), r2 = (e2 + 0.3963377774 * n2 + 0.2158037573 * o2) ** 3, s2 = (e2 - 0.1055613458 * n2 - 0.0638541728 * o2) ** 3, l2 = (e2 - 0.0894841775 * n2 - 1.291485548 * o2) ** 3;
    return `#${[
      4.0767416621 * r2 - 3.3077115913 * s2 + 0.2309699292 * l2,
      -1.2684380046 * r2 + 2.6097574011 * s2 - 0.3413193965 * l2,
      -0.0041960863 * r2 - 0.7034186147 * s2 + 1.707614701 * l2
    ].map((e3) => {
      let a3;
      return Math.round(
        255 * f(
          (a3 = f(e3)) <= 31308e-7 ? 12.92 * a3 : 1.055 * a3 ** (1 / 2.4) - 0.055
        )
      ).toString(16).padStart(2, "0");
    }).join("")}`;
  }
  function _([e2, a2, t2]) {
    let [i2, n2, o2] = [y(e2), y(a2), y(t2)], r2 = Math.cbrt(0.4122214708 * i2 + 0.5363325363 * n2 + 0.0514459929 * o2), s2 = Math.cbrt(0.2119034982 * i2 + 0.6806995451 * n2 + 0.1073969566 * o2), l2 = Math.cbrt(0.0883024619 * i2 + 0.2817188376 * n2 + 0.6299787005 * o2), d2 = 1.9779984951 * r2 - 2.428592205 * s2 + 0.4505937099 * l2, c2 = 0.0259040371 * r2 + 0.7827717662 * s2 - 0.808675766 * l2;
    return [
      0.2104542553 * r2 + 0.793617785 * s2 - 0.0040720468 * l2,
      Math.hypot(d2, c2),
      (180 * Math.atan2(c2, d2) / Math.PI + 360) % 360
    ];
  }
  let w = null;
  function x(e2) {
    if (!e2.trim() || !(w ?? (w = document.createElement("canvas").getContext("2d", { willReadFrequently: true }))))
      return null;
    w.canvas.width = w.canvas.height = 1, w.fillStyle = "#000", w.fillStyle = e2.trim(), w.clearRect(0, 0, 1, 1), w.fillRect(0, 0, 1, 1);
    let [a2, t2, i2] = w.getImageData(0, 0, 1, 1).data;
    return [a2 / 255, t2 / 255, i2 / 255];
  }
  let v = [
    { id: "a", x: 0.06, y: 0.04, spread: 1.05 },
    { id: "b", x: 0.96, y: 0.1, spread: 0.95 },
    { id: "c", x: 0.94, y: 0.96, spread: 1 },
    { id: "d", x: 0.04, y: 0.94, spread: 0.9 },
    { id: "pool", x: 0.5, y: 0.48, spread: 0.62 }
  ], j = [
    [0.935, 0.042, 0],
    [0.95, 0.032, 38],
    [0.93, 0.04, -34],
    [0.955, 0.026, 150],
    [0.99, 4e-3, 0]
  ], k = [
    [0.29, 0.045, 0],
    [0.26, 0.036, 38],
    [0.27, 0.042, -34],
    [0.23, 0.024, 150],
    [0.18, 0.01, 0]
  ];
  var N = t(92736), S = t.n(N);
  let { spring: T, duration: A, ease: C, stagger: P } = u.T, $ = [...C.enter], L = () => () => {
  };
  function E(e2) {
    let a2 = e2.trim();
    if (!a2) return { ok: false, message: "Enter your email to join the list" };
    if (/\s/.test(a2)) return { ok: false, message: "Emails can't contain spaces" };
    let t2 = a2.indexOf("@");
    if (t2 < 0)
      return {
        ok: false,
        message: "Add an @ and your domain, like you@company.com"
      };
    if (0 === t2) return { ok: false, message: "Add your name before the @" };
    let i2 = a2.slice(t2 + 1);
    if (!i2) return { ok: false, message: "Add your domain after the @" };
    if (i2.includes("@")) return { ok: false, message: "Use a single @" };
    if (!/^[^\s.@]+(\.[^\s.@]+)*\.[a-z]{2,}$/i.test(i2))
      return { ok: false, message: "Finish the domain, like company.com" };
    let n2 = m[i2.toLowerCase()];
    return n2 ? { ok: true, fix: `${a2.slice(0, t2)}@${n2}` } : { ok: true };
  }
  let M = (e2) => new Intl.NumberFormat("en-US").format(e2);
  function R({
    title: e2 = p.title,
    description: a2 = p.description,
    placeholder: t2 = p.placeholder,
    buttonLabel: u2 = p.buttonLabel,
    shortButtonLabel: h2 = p.shortButtonLabel,
    footnote: m2 = p.footnote,
    count: g2 = p.count,
    people: f2 = p.people,
    proof: y2 = (e3) => (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: S().proofStrong, children: e3 }),
        " finance teams are on the list"
      ]
    }),
    hue: b2,
    onSubscribe: _2,
    onStateChange: w2,
    className: x2
  }) {
    let v2, j2 = (v2 = (0, o.I)(), (0, n.useSyncExternalStore)(
      L,
      () => true,
      () => false
    ) && !!v2), k2 = (0, n.useId)(), [N2, C2] = (0, n.useState)(""), [B2, D] = (0, n.useState)(false), [O, W] = (0, n.useState)("idle"), [J, Y] = (0, n.useState)(null), [H, I] = (0, n.useState)(g2 + 1), [V, q] = (0, n.useState)(false), [K, U] = (0, n.useState)(""), [Z, Q] = (0, n.useState)(null), [G, X] = (0, r.l)(), ee = (0, n.useRef)(null), ea = (0, n.useRef)(null), et = (0, n.useRef)(null), ei = (0, n.useRef)(/* @__PURE__ */ new Set()), en = (0, n.useRef)(true);
    (0, n.useEffect)(
      () => (en.current = true, () => {
        en.current = false;
      }),
      []
    );
    let eo = (0, n.useRef)(w2);
    (0, n.useEffect)(() => {
      eo.current = w2;
    });
    let er = (0, n.useRef)(true);
    (0, n.useEffect)(() => {
      if (er.current) {
        er.current = false;
        return;
      }
      eo.current?.(O);
    }, [O]);
    let es = E(N2), el = "submitting" === O, ed = "success" === O, ec = B2 && !es.ok && !ed, eu = `${k2}-note`, eh = () => {
      let e3 = G.current, a3 = ea.current;
      if (!e3 || !a3) return null;
      let t3 = a3.offsetTop, i2 = a3.offsetLeft;
      return {
        top: t3,
        left: i2,
        right: e3.clientWidth - i2 - a3.offsetWidth,
        bottom: e3.clientHeight - t3 - a3.offsetHeight,
        radius: a3.offsetHeight / 2
      };
    }, ep = async (e3) => {
      if (e3?.preventDefault(), el || ed) return;
      let a3 = N2.trim(), t3 = E(a3);
      if (!t3.ok) {
        D(true), U(t3.message), ee.current?.focus({ preventScroll: true }), !j2 && G.current && X(
          G.current,
          { x: [0, -8, 7, -4, 2, 0] },
          { duration: 0.4, ease: "easeOut" }
        );
        return;
      }
      Y(null), W("submitting"), U("Joining the waitlist");
      try {
        let e4;
        if (_2) e4 = await _2(a3);
        else if (await new Promise((e5) => setTimeout(e5, 1400)), /fail/i.test(a3) && !ei.current.has(a3.toLowerCase()))
          throw ei.current.add(a3.toLowerCase()), Error("We couldn't save your spot");
        if (!en.current) return;
        let t4 = "number" == typeof e4 ? e4 : g2 + 1;
        Q(eh()), I(t4), q(true), W("success"), U(
          `You're number ${M(t4)} on the list. ${_2 ? `We'll email ${a3} when your invite is ready.` : "This preview is simulated, nothing was sent."}`
        ), requestAnimationFrame(
          () => et.current?.focus({ preventScroll: true })
        );
      } catch (a4) {
        if (!en.current) return;
        let e4 = a4 instanceof Error && a4.message ? a4.message : "We couldn't save your spot. Try again";
        W("error"), Y(e4), U(e4);
      }
    }, em = "footnote", eg = m2;
    if (ed)
      em = "done", eg = (0, i.jsxs)(i.Fragment, {
        children: [
          _2 ? (0, i.jsxs)(i.Fragment, {
            children: [
              "We'll email ",
              N2.trim(),
              " when your invite is ready."
            ]
          }) : (0, i.jsx)(i.Fragment, {
            children: "Preview only, no email was sent."
          }),
          " ",
          (0, i.jsx)("button", {
            type: "button",
            className: S().link,
            onClick: () => {
              Q(eh()), W("idle"), q(false), U(""), requestAnimationFrame(
                () => ee.current?.focus({ preventScroll: true })
              );
            },
            children: "Change email"
          })
        ]
      });
    else if (ec && !es.ok)
      em = `invalid-${es.message}`, eg = (0, i.jsx)("span", {
        className: S().error,
        children: es.message
      });
    else if ("error" === O && J)
      em = "failure", eg = (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsxs)("span", { className: S().error, children: [J, "."] }),
          " ",
          (0, i.jsx)("button", {
            type: "button",
            className: S().link,
            onClick: () => void ep(),
            children: "Try again"
          })
        ]
      });
    else if (es.ok && es.fix) {
      let e3 = es.fix;
      em = `fix-${e3}`, eg = (0, i.jsxs)(i.Fragment, {
        children: [
          "Did you mean ",
          (0, i.jsx)("button", {
            type: "button",
            className: S().link,
            onClick: () => {
              C2(e3), ee.current?.focus({ preventScroll: true });
            },
            children: e3
          }),
          "?"
        ]
      });
    }
    let ef = "string" == typeof e2 ? e2.split(" ") : null, ey = (e3) => ({
      initial: !j2 && { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: j2 ? { duration: 0 } : { duration: 0.7, ease: $, delay: e3 }
    }), eb = Z ? `inset(${Z.top}px ${Z.right}px ${Z.bottom}px ${Z.left}px round ${Z.radius}px)` : "inset(6px 6px 6px calc(100% - 50px) round 22px)", e_ = `inset(0px 0px 0px 0px round ${Z ? Z.top + Z.radius : 28}px)`;
    return (0, i.jsx)(s.x, {
      reducedMotion: "user",
      children: (0, i.jsxs)("section", {
        className: [S().root, x2].filter(Boolean).join(" "),
        "aria-labelledby": `${k2}-title`,
        children: [
          (0, i.jsx)(F, { hue: b2 }),
          (0, i.jsxs)("div", {
            className: S().inner,
            children: [
              (0, i.jsx)("h1", {
                id: `${k2}-title`,
                className: S().title,
                children: ef ? ef.map(
                  (e3, a3) => (0, i.jsxs)(
                    "span",
                    {
                      children: [
                        (0, i.jsx)(l.PY1.span, {
                          className: S().word,
                          initial: !j2 && {
                            opacity: 0,
                            y: "0.4em",
                            filter: "blur(6px)"
                          },
                          animate: {
                            opacity: 1,
                            y: "0em",
                            filter: "blur(0px)"
                          },
                          transition: {
                            duration: 0.8,
                            ease: $,
                            delay: 0.06 + a3 * P.word * 1.5
                          },
                          children: e3
                        }),
                        a3 < ef.length - 1 ? " " : null
                      ]
                    },
                    a3
                  )
                ) : e2
              }),
              a2 ? (0, i.jsx)(l.PY1.p, {
                className: S().description,
                ...ey(0.3),
                children: a2
              }) : null,
              (0, i.jsxs)(l.PY1.div, {
                className: S().formWrap,
                ...ey(0.42),
                children: [
                  (0, i.jsxs)("form", {
                    ref: G,
                    className: S().pill,
                    onSubmit: ep,
                    noValidate: true,
                    "data-state": O,
                    "data-invalid": ec || void 0,
                    "aria-busy": el,
                    children: [
                      (0, i.jsx)("label", {
                        className: S().srOnly,
                        htmlFor: `${k2}-email`,
                        children: "Email address"
                      }),
                      (0, i.jsxs)("div", {
                        className: S().field,
                        inert: ed,
                        "data-valid": es.ok && !el || void 0,
                        children: [
                          (0, i.jsx)("input", {
                            ref: ee,
                            id: `${k2}-email`,
                            name: "email",
                            className: S().input,
                            type: "email",
                            inputMode: "email",
                            autoComplete: "email",
                            autoCapitalize: "none",
                            autoCorrect: "off",
                            spellCheck: false,
                            enterKeyHint: "send",
                            placeholder: t2,
                            value: N2,
                            readOnly: el,
                            "aria-invalid": ec || void 0,
                            "aria-describedby": eu,
                            onChange: (e3) => {
                              C2(e3.target.value), "error" === O && (W("idle"), Y(null));
                            },
                            onBlur: () => {
                              N2.trim() && D(true);
                            }
                          }),
                          (0, i.jsx)(d.N, {
                            initial: false,
                            children: es.ok && !el && (0, i.jsx)(
                              l.PY1.span,
                              {
                                className: S().valid,
                                initial: { opacity: 0, scale: 0.6 },
                                animate: { opacity: 1, scale: 1 },
                                exit: {
                                  opacity: 0,
                                  scale: 0.6,
                                  transition: { duration: A.fast }
                                },
                                transition: T.snappy,
                                "aria-hidden": "true",
                                children: (0, i.jsx)(c.A, {
                                  size: 16,
                                  strokeWidth: 2
                                })
                              },
                              "valid"
                            )
                          }),
                          (0, i.jsxs)("button", {
                            ref: ea,
                            type: "submit",
                            className: S().go,
                            "aria-disabled": el || void 0,
                            "data-busy": el || void 0,
                            children: [
                              (0, i.jsxs)("span", {
                                className: S().goLabel,
                                "data-hidden": el || void 0,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: S().labelLong,
                                    children: u2
                                  }),
                                  (0, i.jsx)("span", {
                                    className: S().labelShort,
                                    "aria-hidden": "true",
                                    children: h2
                                  })
                                ]
                              }),
                              (0, i.jsx)("span", {
                                className: S().spinner,
                                "data-shown": el || void 0,
                                "aria-hidden": "true"
                              }),
                              el && (0, i.jsx)("span", {
                                className: S().srOnly,
                                children: "Joining"
                              })
                            ]
                          })
                        ]
                      }),
                      (0, i.jsx)(l.PY1.div, {
                        ref: et,
                        className: S().done,
                        tabIndex: -1,
                        "aria-hidden": !ed,
                        initial: false,
                        animate: ed ? { clipPath: e_, opacity: 1 } : { clipPath: eb, transitionEnd: { opacity: 0 } },
                        transition: j2 ? { duration: 0 } : { clipPath: T.smooth, opacity: { duration: 0 } },
                        children: (0, i.jsxs)(l.PY1.span, {
                          className: S().doneBody,
                          initial: false,
                          animate: ed ? { opacity: 1, y: 0, filter: "blur(0px)" } : {
                            opacity: 0,
                            y: 6 * !j2,
                            filter: j2 ? "blur(0px)" : "blur(4px)"
                          },
                          transition: ed ? {
                            duration: A.considered,
                            ease: $,
                            delay: 0.12 * !j2
                          } : { duration: A.instant },
                          children: [
                            (0, i.jsx)("span", {
                              className: S().doneMark,
                              "aria-hidden": "true",
                              children: (0, i.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                width: "14",
                                height: "14",
                                children: (0, i.jsx)(l.PY1.path, {
                                  d: "M5 12.5l4.5 4.5L19 7.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2.6",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  initial: false,
                                  animate: { pathLength: ed || j2 ? 1 : 0 },
                                  transition: {
                                    duration: 0.45 * !!ed,
                                    ease: $,
                                    delay: 0.22 * !!ed
                                  }
                                })
                              })
                            }),
                            (0, i.jsxs)("span", {
                              children: [
                                "You're #",
                                ed ? (0, i.jsx)(z, {
                                  value: H,
                                  from: 0,
                                  reduced: j2,
                                  delay: 0.2
                                }) : M(H),
                                " on the list"
                              ]
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)("div", {
                    id: eu,
                    className: S().note,
                    children: (0, i.jsx)(d.N, {
                      initial: false,
                      children: (0, i.jsx)(
                        l.PY1.p,
                        {
                          className: S().noteText,
                          initial: { opacity: 0, y: j2 ? 0 : -4 },
                          animate: { opacity: 1, y: 0 },
                          exit: {
                            opacity: 0,
                            transition: { duration: A.instant }
                          },
                          transition: { duration: A.standard, ease: $ },
                          children: eg
                        },
                        em
                      )
                    })
                  })
                ]
              }),
              (0, i.jsxs)(l.PY1.div, {
                className: S().proof,
                ...ey(0.54),
                children: [
                  f2.length > 0 && (0, i.jsx)("span", {
                    className: S().faces,
                    children: f2.slice(0, 5).map(
                      (e3) => (0, i.jsx)(
                        "img",
                        {
                          className: S().face,
                          src: e3.src,
                          alt: "",
                          width: 28,
                          height: 28,
                          loading: "lazy",
                          decoding: "async"
                        },
                        e3.src
                      )
                    )
                  }),
                  (0, i.jsxs)("p", {
                    className: S().proofText,
                    children: [
                      (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        children: y2(
                          (0, i.jsx)(z, { value: g2 + +!!V, reduced: j2 })
                        )
                      }),
                      (0, i.jsx)("span", {
                        className: S().srOnly,
                        children: `${M(g2 + +!!V)} people are on the list`
                      })
                    ]
                  })
                ]
              }),
              (0, i.jsx)("p", {
                className: S().srOnly,
                role: "status",
                "aria-live": "polite",
                children: K
              })
            ]
          })
        ]
      })
    });
  }
  function F({ hue: e2 }) {
    let a2 = (0, n.useRef)(null), [t2, o2] = (0, n.useState)(null);
    return (0, n.useEffect)(() => {
      let t3 = a2.current;
      if (!t3) return;
      let i2 = () => o2((a3) => {
        let i3 = (function(e3, a4) {
          var t4;
          let i4, n3 = getComputedStyle(e3), o3 = _(x(n3.getPropertyValue("--background")) ?? [1, 1, 1])[0] < 0.5, r2 = a4;
          if (void 0 === r2) {
            let e4 = x(n3.getPropertyValue("--accent")), a5 = e4 ? _(e4) : null;
            r2 = a5 && a5[1] > 0.04 ? a5[2] : 268;
          }
          return t4 = r2, i4 = o3 ? k : j, {
            base: o3 ? b(0.175, 0.012, t4) : b(0.982, 8e-3, t4),
            points: v.map((e4, a5) => ({
              ...e4,
              color: b(i4[a5][0], i4[a5][1], t4 + i4[a5][2])
            }))
          };
        })(t3, e2);
        return a3 && JSON.stringify(a3) === JSON.stringify(i3) ? a3 : i3;
      });
      i2();
      let n2 = new MutationObserver(i2);
      return n2.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      }), () => n2.disconnect();
    }, [e2]), (0, i.jsx)("div", {
      ref: a2,
      className: S().mesh,
      "data-ready": t2 ? "" : void 0,
      "aria-hidden": "true",
      children: t2 && (0, i.jsx)(g.o, {
        mode: "background",
        base: t2.base,
        points: t2.points,
        grain: 0.06,
        speed: 0.55,
        maxPoints: 8
      })
    });
  }
  function z({ value: e2, from: a2, reduced: t2, delay: n2 = 0 }) {
    let o2 = M(e2).split(""), r2 = void 0 === a2 ? null : M(a2).padStart(o2.length, "0");
    return (0, i.jsx)("span", {
      className: S().roll,
      "aria-hidden": "true",
      children: o2.map((e3, a3) => {
        let s2 = o2.length - 1 - a3;
        if (!/\d/.test(e3))
          return (0, i.jsx)("span", { children: e3 }, `sep-${s2}`);
        let d2 = Number(e3), c2 = r2 ? Number(/\d/.test(r2[a3]) ? r2[a3] : 0) : null;
        return (0, i.jsx)(
          "span",
          {
            className: S().digit,
            children: (0, i.jsx)(l.PY1.span, {
              className: S().reel,
              initial: !t2 && null !== c2 && { y: `${-(10 * c2)}%` },
              animate: { y: `${-(10 * d2)}%` },
              transition: t2 ? { duration: 0 } : {
                type: "spring",
                visualDuration: 0.9,
                bounce: 0,
                delay: n2 + 0.06 * a3
              },
              children: Array.from(
                { length: 10 },
                (e4, a4) => (0, i.jsx)("span", { children: a4 }, a4)
              )
            })
          },
          `digit-${s2}`
        );
      })
    });
  }
  let B = R;
}

__m(__module,__exports,__require);
}