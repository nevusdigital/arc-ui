function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { SecuritySettings: () => ei, default: () => es });
  var s = i(95155), a = i(12115), n = i(18310), r = i(25354), o = i(80642), l = i(9937), d = i(57700), c = i(85633), u = i(95e3), p = i(70299), h = i(33533), m = i(64577), x = i(50825), f = i(28750), y = i(7428), _ = i(90034), g = i(51288), j = i(20530), v = i(73474), b = i(70614), w = i(78766), N = i(93744), k = i(50598), T = i(7770), S = i(69308), $ = i.n(S);
  let L = "maya@fieldnote.example", C = "N4XG K3LQ 7RPM 2VWD Y6HT A5CJ", P = "246810", M = [
    "7kq2-m9xp",
    "c4tn-8wzr",
    "p3hd-6yvb",
    "x9fm-2rkt",
    "b5wl-4qne",
    "r8jc-7tgs",
    "m2vx-9dph",
    "t6nz-3kwf",
    "h4gy-5bmq",
    "w7rs-8cjd"
  ], I = { off: 0, scan: 1, verify: 2, codes: 3, on: 4 }, R = [
    { step: "scan", label: "Scan" },
    { step: "verify", label: "Verify" },
    { step: "codes", label: "Save codes" }
  ], Y = { laptop: c.A, phone: u.A, desktop: p.A, tablet: h.A }, z = [
    {
      id: "mbp",
      device: "MacBook Pro",
      client: "Chrome 129",
      city: "San Francisco, US",
      seen: "Active now",
      kind: "laptop",
      current: true
    },
    {
      id: "iphone",
      device: "iPhone 15 Pro",
      client: "Fieldnote for iOS",
      city: "San Francisco, US",
      seen: "2 hours ago",
      kind: "phone"
    },
    {
      id: "windows",
      device: "Windows desktop",
      client: "Edge 128",
      city: "Austin, US",
      seen: "Yesterday at 4:12 PM",
      kind: "desktop"
    },
    {
      id: "ipad",
      device: "iPad Air",
      client: "Safari 18",
      city: "Lisbon, PT",
      seen: "Sep 14",
      kind: "tablet"
    },
    {
      id: "thinkpad",
      device: "ThinkPad X1",
      client: "Firefox 130",
      city: "Berlin, DE",
      seen: "Sep 9",
      kind: "laptop",
      flag: "New location"
    }
  ], B = ["1 / 1 / 8 / 8", "1 / 19 / 8 / 26", "19 / 1 / 26 / 8"], F = (() => {
    let e2 = 1592598101, t2 = () => {
      let t3 = Math.imul((e2 = e2 + 1831565813 | 0) ^ e2 >>> 15, 1 | e2);
      return (((t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3) ^ t3 >>> 14) >>> 0) / 4294967296;
    }, i2 = [];
    for (let e3 = 0; e3 < 25; e3++)
      for (let s2 = 0; s2 < 25; s2++) {
        if (e3 < 8 && s2 < 8 || e3 < 8 && s2 > 16 || e3 > 16 && s2 < 8)
          continue;
        let a2 = Math.max(Math.abs(e3 - 18), Math.abs(s2 - 18));
        (a2 <= 2 ? 1 !== a2 : 6 === e3 || 6 === s2 ? (e3 + s2) % 2 == 0 : 0.46 > t2()) && i2.push({ row: e3, col: s2 });
      }
    return i2;
  })(), { spring: O, duration: A, blur: E, stagger: W } = T.T, D = [...T.T.ease.enter], H = [...T.T.ease.standard], q = { duration: 0 }, U = {
    enter: (e2) => ({ opacity: 0, x: 24 * e2, filter: `blur(${E.soft}px)` }),
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      x: -24 * e2,
      filter: `blur(${E.soft}px)`,
      transition: { duration: A.exit, ease: H }
    })
  }, X = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.5 * e2}em`,
      filter: `blur(${E.subtle}px)`
    }),
    center: { opacity: 1, y: "0em", filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.5 * e2}em`,
      filter: `blur(${E.subtle}px)`,
      transition: { duration: A.instant, ease: H }
    })
  };
  function Q() {
    let e2 = (0, a.useRef)(null), [t2, i2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let t3 = e2.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let s2 = new ResizeObserver(() => i2(t3.offsetHeight));
      return s2.observe(t3), () => s2.disconnect();
    }, []), [e2, t2];
  }
  function V({ children: e2, className: t2 }) {
    let i2 = (0, n.I)(), [a2, o2] = Q();
    return (0, s.jsx)(r.PY1.div, {
      className: [$().collapse, t2].filter(Boolean).join(" "),
      initial: { height: 0, opacity: 0 },
      animate: { height: o2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: i2 ? q : { height: O.smooth, opacity: { duration: A.fast, ease: H } }
      },
      transition: i2 ? q : { height: O.smooth, opacity: { duration: A.standard, ease: D } },
      children: (0, s.jsx)("div", { ref: a2, children: e2 })
    });
  }
  function Z({ text: e2 }) {
    let t2 = (0, n.I)();
    return (0, s.jsxs)("span", {
      className: $().swap,
      children: [
        (0, s.jsx)("span", { className: $().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          className: $().swapTrack,
          "aria-hidden": "true",
          children: (0, s.jsx)(o.N, {
            mode: "popLayout",
            initial: false,
            children: (0, s.jsx)(
              r.PY1.span,
              {
                className: $().swapText,
                initial: {
                  opacity: 0,
                  y: "0.45em",
                  filter: `blur(${E.soft}px)`
                },
                animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
                exit: {
                  opacity: 0,
                  y: "-0.35em",
                  filter: `blur(${E.subtle}px)`,
                  transition: t2 ? q : { duration: A.fast, ease: H }
                },
                transition: t2 ? q : { duration: A.standard, ease: D },
                children: e2
              },
              e2
            )
          })
        })
      ]
    });
  }
  function K({ value: e2 }) {
    let t2 = (0, n.I)(), [i2, l2] = (0, a.useState)({ value: e2, direction: 1 });
    return i2.value !== e2 && l2({ value: e2, direction: e2 > i2.value ? 1 : -1 }), (0, s.jsxs)("span", {
      className: $().roll,
      children: [
        (0, s.jsx)("span", { className: $().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          className: $().swapTrack,
          "aria-hidden": "true",
          children: (0, s.jsx)(o.N, {
            mode: "popLayout",
            initial: false,
            custom: i2.direction,
            children: (0, s.jsx)(
              r.PY1.span,
              {
                className: $().swapText,
                custom: i2.direction,
                variants: X,
                initial: "enter",
                animate: "center",
                exit: "exit",
                transition: t2 ? q : {
                  y: O.snappy,
                  opacity: { duration: A.fast },
                  filter: { duration: A.fast }
                },
                children: e2
              },
              e2
            )
          })
        })
      ]
    });
  }
  function G() {
    return (0, s.jsxs)("div", {
      className: $().qr,
      role: "img",
      "aria-label": `QR code that adds Fieldnote for ${L} to an authenticator app`,
      children: [
        B.map(
          (e2, t2) => (0, s.jsx)(
            "span",
            {
              className: $().finder,
              style: { gridArea: e2, animationDelay: `${50 * t2}ms` },
              children: (0, s.jsx)("span", { className: $().finderDot })
            },
            e2
          )
        ),
        F.map(
          ({ row: e2, col: t2 }) => (0, s.jsx)(
            "span",
            {
              className: $().qrCell,
              style: {
                gridArea: `${e2 + 1} / ${t2 + 1}`,
                animationDelay: `${60 + (e2 + t2) * 7}ms`
              }
            },
            `${e2}-${t2}`
          )
        )
      ]
    });
  }
  function J() {
    let e2 = (0, n.I)();
    return (0, s.jsxs)("svg", {
      className: $().drawn,
      width: 40,
      height: 40,
      viewBox: "0 0 40 40",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)(r.PY1.circle, {
          cx: 20,
          cy: 20,
          r: 18.5,
          stroke: "currentColor",
          strokeWidth: 1.5,
          transform: "rotate(-90 20 20)",
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: e2 ? q : { duration: A.considered, ease: D }
        }),
        (0, s.jsx)(r.PY1.path, {
          d: "M13 20.5 18 25.5 27.5 15",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: e2 ? q : { duration: A.standard, ease: D, delay: 0.34 }
        })
      ]
    });
  }
  function ee({ index: e2, done: t2 }) {
    let i2 = (0, n.I)();
    return (0, s.jsx)("span", {
      className: $().railMark,
      "aria-hidden": "true",
      children: (0, s.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: t2 ? (0, s.jsx)(
          r.PY1.svg,
          {
            width: 12,
            height: 12,
            viewBox: "0 0 12 12",
            fill: "none",
            initial: { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.6 },
            transition: i2 ? q : O.snappy,
            children: (0, s.jsx)(r.PY1.path, {
              d: "M2.5 6.25 5 8.75 9.5 3.5",
              stroke: "currentColor",
              strokeWidth: 1.75,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: i2 ? q : { duration: A.standard, ease: D, delay: 0.06 }
            })
          },
          "done"
        ) : (0, s.jsx)(
          r.PY1.span,
          {
            initial: { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.6 },
            transition: i2 ? q : O.snappy,
            children: e2 + 1
          },
          "number"
        )
      })
    });
  }
  function et({ id: e2, children: t2 }) {
    let i2 = (0, n.I)(), [a2, o2] = Q();
    return (0, s.jsx)(r.PY1.li, {
      className: $().session,
      variants: {
        exit: (t3) => {
          let s2 = (t3?.[e2] ?? 0) * W.line;
          return i2 ? { height: 0, opacity: 0, transition: q } : {
            height: 0,
            opacity: 0,
            x: -12,
            transition: {
              height: { ...O.smooth, delay: s2 },
              x: { ...O.smooth, delay: s2 },
              opacity: { duration: A.standard, ease: H, delay: s2 }
            }
          };
        }
      },
      initial: false,
      animate: { height: o2, opacity: 1, x: 0 },
      exit: "exit",
      transition: i2 ? q : { height: O.smooth },
      children: (0, s.jsx)("div", { ref: a2, children: t2 })
    });
  }
  function ei() {
    let e2 = (0, a.useId)(), t2 = (0, n.I)(), [i2, c2] = (0, a.useState)("off"), [u2, p2] = (0, a.useState)(1), [h2, T2] = (0, a.useState)(""), [S2, B2] = (0, a.useState)(""), [F2, X2] = (0, a.useState)(false), [Q2, ei2] = (0, a.useState)(false), [es2, ea] = (0, a.useState)("idle"), [en, er] = (0, a.useState)(false), [eo, el] = (0, a.useState)(""), [ed, ec] = (0, a.useState)(""), [eu, ep] = (0, a.useState)(false), [eh, em] = (0, a.useState)("idle"), [ex, ef] = (0, a.useState)(null), [ey, e_] = (0, a.useState)("Last changed March 4, 2026"), [eg, ej] = (0, a.useState)(z), [ev, eb] = (0, a.useState)({}), [ew, eN] = (0, a.useState)(false), [ek, eT] = (0, a.useState)(""), eS = (0, a.useRef)([]), e$ = (0, a.useRef)(null), eL = (0, a.useRef)(eg), eC = (0, a.useRef)(null), eP = (0, a.useRef)(null), eM = (0, a.useRef)(null), eI = (0, a.useRef)(null), eR = (0, a.useRef)(null), eY = (0, a.useRef)(null), ez = (0, a.useRef)(null), eB = (0, a.useRef)(null), eF = (0, a.useRef)(/* @__PURE__ */ new Map());
    (0, a.useEffect)(() => {
      let e3 = eS.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, a.useEffect)(() => {
      eL.current = eg;
    }, [eg]);
    let eO = eg.filter((e3) => !e3.current), eA = "scan" === i2 || "verify" === i2 || "codes" === i2, eE = I[i2] - 1;
    function eW(e3, t3) {
      let i3 = window.setTimeout(e3, t3);
      return eS.current.push(i3), i3;
    }
    function eD(e3) {
      requestAnimationFrame(
        () => requestAnimationFrame(() => {
          let t3 = e3();
          t3?.isConnected && t3.focus({ preventScroll: true });
        })
      );
    }
    function eH() {
      null !== e$.current && window.clearTimeout(e$.current), e$.current = null, X2(false);
    }
    function eq(e3) {
      p2(I[e3] >= I[i2] ? 1 : -1), c2(e3);
    }
    function eU(e3 = h2) {
      if (null === e$.current) {
        if (e3.length < 6) return void B2("Enter all 6 digits from your app");
        X2(true), e$.current = eW(() => {
          (e$.current = null, X2(false), e3 !== P) ? B2("That code didn\u2019t match. Try the newest code in your app") : (eq("codes"), eT("Code accepted. Save your backup codes to finish"), eD(() => eM.current));
        }, 700);
      }
    }
    function eX(e3 = false) {
      let t3 = eL.current.filter((e4) => !e4.current);
      if (!t3.length) return;
      eb(Object.fromEntries(t3.map((e4, t4) => [e4.id, t4]))), ej((e4) => e4.filter((e5) => e5.current)), eN(false);
      let i3 = `${t3.length} other ${1 === t3.length ? "session" : "sessions"}`;
      eT(e3 ? `Password updated and signed out of ${i3}` : `Signed out of ${i3}`), e3 || eD(() => eB.current);
    }
    let eQ = t2 ? q : {
      x: O.smooth,
      opacity: { duration: A.standard, ease: D },
      filter: { duration: A.standard, ease: D }
    }, eV = {
      initial: { opacity: 0, filter: `blur(${E.subtle}px)` },
      animate: { opacity: 1, filter: "blur(0px)" },
      exit: {
        opacity: 0,
        filter: `blur(${E.subtle}px)`,
        transition: t2 ? q : { duration: A.fast, ease: H }
      },
      transition: t2 ? q : { duration: A.standard, ease: D }
    }, eZ = null;
    return "scan" === i2 && (eZ = (0, s.jsxs)("div", {
      className: $().scan,
      children: [
        (0, s.jsx)(G, {}),
        (0, s.jsxs)("div", {
          className: $().scanCopy,
          children: [
            (0, s.jsxs)("div", {
              className: $().copyBlock,
              children: [
                (0, s.jsx)("p", {
                  className: $().lead,
                  children: "Scan with your authenticator app"
                }),
                (0, s.jsxs)("p", {
                  className: $().muted,
                  children: [
                    "1Password, Authy, and Google Authenticator all work. It adds Fieldnote for ",
                    L,
                    "."
                  ]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: $().copyBlock,
              children: [
                (0, s.jsx)("p", {
                  className: $().keyLabel,
                  children: "Can\u2019t scan it? Enter this setup key"
                }),
                (0, s.jsxs)("div", {
                  className: $().keyRow,
                  children: [
                    (0, s.jsx)("code", { className: $().key, children: C }),
                    (0, s.jsx)(v.CopyButton, {
                      value: C.replace(/\s/g, ""),
                      label: "Copy key",
                      onCopied: () => eT("Setup key copied")
                    })
                  ]
                })
              ]
            }),
            (0, s.jsx)("div", {
              className: $().stepActions,
              children: (0, s.jsx)(g.$, {
                ref: eP,
                type: "button",
                size: "sm",
                onClick: () => eq("verify"),
                children: "Continue"
              })
            })
          ]
        })
      ]
    })), "verify" === i2 && (eZ = (0, s.jsxs)("form", {
      className: $().verify,
      noValidate: true,
      onSubmit: (e3) => {
        e3.preventDefault(), eU();
      },
      children: [
        (0, s.jsx)(w.I, {
          label: "Enter the 6-digit code from your app",
          value: h2,
          onChange: function(e3) {
            eH(), T2(e3), B2(""), 6 === e3.length && eU(e3);
          },
          autoFocus: true,
          error: S2 || void 0,
          description: F2 ? "Checking the code" : `Demo code: ${P}. Codes refresh every 30 seconds.`
        }),
        (0, s.jsxs)("div", {
          className: $().stepActions,
          children: [
            (0, s.jsx)(g.$, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: function() {
                eH(), B2(""), eq("scan"), eD(() => eP.current);
              },
              children: "Back"
            }),
            (0, s.jsx)(g.$, {
              type: "submit",
              size: "sm",
              loading: F2,
              children: "Verify"
            })
          ]
        })
      ]
    })), "codes" === i2 && (eZ = (0, s.jsxs)("div", {
      className: $().codesStep,
      children: [
        (0, s.jsxs)("div", {
          className: $().codesHead,
          children: [
            (0, s.jsxs)("div", {
              className: $().copyBlock,
              children: [
                (0, s.jsx)("h4", {
                  ref: eM,
                  tabIndex: -1,
                  className: $().lead,
                  children: "Save your backup codes"
                }),
                (0, s.jsx)("p", {
                  className: $().muted,
                  children: "Each code signs you in once if you lose your phone. This is the only time they are shown."
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: $().codeActions,
              children: [
                (0, s.jsx)(v.CopyButton, {
                  value: [`Fieldnote backup codes for ${L}`, "", ...M].join(
                    "\n"
                  ),
                  label: "Copy codes",
                  onCopied: () => {
                    ei2(true), eT("Backup codes copied");
                  }
                }),
                (0, s.jsx)(g.$, {
                  type: "button",
                  variant: "secondary",
                  size: "sm",
                  loading: "saving" === es2,
                  onClick: function() {
                    "idle" === es2 && (ea("saving"), eW(() => {
                      ea("done"), ei2(true), eT("Saved fieldnote-backup-codes.txt");
                    }, 600));
                  },
                  children: "done" === es2 ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      }),
                      "Downloaded"
                    ]
                  }) : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(x.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Download"
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("ol", {
          className: $().codes,
          "aria-label": "Backup codes",
          children: M.map(
            (e3, i3) => (0, s.jsx)(
              r.PY1.li,
              {
                className: $().code,
                initial: { opacity: 0, y: 6, filter: `blur(${E.soft}px)` },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                transition: t2 ? q : {
                  duration: A.standard,
                  ease: D,
                  delay: 0.14 + i3 * W.item
                },
                children: e3
              },
              e3
            )
          )
        }),
        (0, s.jsxs)("div", {
          className: $().codesFoot,
          children: [
            (0, s.jsx)("p", {
              className: $().muted,
              children: (0, s.jsx)(Z, {
                text: Q2 ? "Codes saved. Finish to turn on two-factor" : "Copy or download the codes to finish"
              })
            }),
            (0, s.jsx)(g.$, {
              type: "button",
              size: "sm",
              disabled: !Q2,
              onClick: function() {
                eq("on"), eT("Two-factor authentication is on"), eD(() => eI.current);
              },
              children: "Finish setup"
            })
          ]
        })
      ]
    })), "on" === i2 && (eZ = (0, s.jsxs)("div", {
      className: $().enabled,
      children: [
        (0, s.jsx)("span", {
          className: $().enabledMark,
          children: (0, s.jsx)(J, {})
        }),
        (0, s.jsxs)("div", {
          className: $().enabledText,
          children: [
            (0, s.jsx)("p", {
              ref: eI,
              tabIndex: -1,
              className: $().lead,
              children: "Two-factor authentication is on"
            }),
            (0, s.jsxs)("p", {
              className: $().muted,
              children: [
                "Authenticator app added Sep 22, 2026 \xB7 ",
                (0, s.jsx)("span", { className: $().num, children: "10" }),
                " of ",
                (0, s.jsx)("span", { className: $().num, children: "10" }),
                " backup codes unused"
              ]
            })
          ]
        }),
        (0, s.jsx)(b.j, {
          className: $().hold,
          label: "Hold to turn off",
          confirmedLabel: "Turned off",
          icon: (0, s.jsx)(f.A, {
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          onConfirm: function() {
            eW(() => {
              eq("off"), eT("Two-factor authentication turned off"), eD(() => eC.current);
            }, 520);
          }
        })
      ]
    })), (0, s.jsx)(l.x, {
      reducedMotion: "user",
      children: (0, s.jsx)(d.o, {
        id: e2,
        children: (0, s.jsxs)("section", {
          className: $().block,
          "aria-labelledby": `${e2}-title`,
          children: [
            (0, s.jsxs)("header", {
              className: $().header,
              children: [
                (0, s.jsx)("h2", { id: `${e2}-title`, children: "Security" }),
                (0, s.jsxs)("p", {
                  children: [
                    "Control how you sign in to Fieldnote as ",
                    L,
                    "."
                  ]
                })
              ]
            }),
            (0, s.jsxs)("section", {
              className: $().section,
              "aria-labelledby": `${e2}-tfa`,
              children: [
                (0, s.jsxs)("div", {
                  className: $().sectionHead,
                  children: [
                    (0, s.jsxs)("div", {
                      className: $().sectionText,
                      children: [
                        (0, s.jsx)("h3", {
                          id: `${e2}-tfa`,
                          children: "Two-factor authentication"
                        }),
                        (0, s.jsx)("p", {
                          children: "Ask for a code from your authenticator app when you sign in on a new device."
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: $().aside,
                      children: [
                        (0, s.jsx)(_.E, {
                          size: "sm",
                          tone: "on" === i2 ? "success" : "neutral",
                          children: "on" === i2 ? "On" : eA ? "Setting up" : "Off"
                        }),
                        (0, s.jsx)(o.N, {
                          mode: "popLayout",
                          initial: false,
                          children: ("off" === i2 || "scan" === i2 || "verify" === i2) && (0, s.jsx)(
                            r.PY1.span,
                            {
                              className: $().actionSlot,
                              ...eV,
                              children: (0, s.jsx)(g.$, {
                                ref: eC,
                                type: "button",
                                size: "sm",
                                variant: "off" === i2 ? "primary" : "ghost",
                                "aria-expanded": "off" !== i2,
                                onClick: "off" === i2 ? function() {
                                  T2(""), B2(""), ei2(false), ea("idle"), eq("scan"), eT(
                                    "Scan the code with your authenticator app to continue"
                                  );
                                } : function() {
                                  eH(), eq("off"), eT("Two-factor setup canceled");
                                },
                                children: "off" === i2 ? "Enable" : "Cancel"
                              })
                            },
                            "tfa-action"
                          )
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsx)(o.N, {
                  initial: false,
                  children: "off" !== i2 && (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsxs)("div", {
                        className: $().tfaBody,
                        children: [
                          (0, s.jsx)(o.N, {
                            initial: false,
                            children: eA && (0, s.jsx)(
                              V,
                              {
                                children: (0, s.jsx)("ol", {
                                  className: $().rail,
                                  "aria-label": "Setup progress",
                                  children: R.map((e3, i3) => {
                                    let a2 = i3 < eE ? "done" : i3 === eE ? "current" : "next";
                                    return (0, s.jsxs)(
                                      "li",
                                      {
                                        className: $().railItem,
                                        "data-state": a2,
                                        "aria-current": "current" === a2 ? "step" : void 0,
                                        children: [
                                          "current" === a2 && (0, s.jsx)(r.PY1.span, {
                                            layoutId: "security-rail",
                                            className: $().railHighlight,
                                            transition: t2 ? q : O.morph
                                          }),
                                          (0, s.jsx)(ee, {
                                            index: i3,
                                            done: "done" === a2
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: $().railLabel,
                                            children: [
                                              e3.label,
                                              "done" === a2 && (0, s.jsx)("span", {
                                                className: $().srOnly,
                                                children: ", done"
                                              })
                                            ]
                                          })
                                        ]
                                      },
                                      e3.step
                                    );
                                  })
                                })
                              },
                              "rail"
                            )
                          }),
                          (0, s.jsx)("div", {
                            className: $().stage,
                            children: (0, s.jsx)(o.N, {
                              mode: "popLayout",
                              initial: false,
                              custom: u2,
                              children: (0, s.jsx)(
                                r.PY1.div,
                                {
                                  className: $().stagePane,
                                  custom: u2,
                                  variants: U,
                                  initial: "enter",
                                  animate: "center",
                                  exit: "exit",
                                  transition: eQ,
                                  children: eZ
                                },
                                i2
                              )
                            })
                          })
                        ]
                      })
                    },
                    "tfa-body"
                  )
                })
              ]
            }),
            (0, s.jsxs)("section", {
              className: $().section,
              "aria-labelledby": `${e2}-password`,
              children: [
                (0, s.jsxs)("div", {
                  className: $().sectionHead,
                  children: [
                    (0, s.jsxs)("div", {
                      className: $().sectionText,
                      children: [
                        (0, s.jsx)("h3", {
                          id: `${e2}-password`,
                          children: "Password"
                        }),
                        (0, s.jsx)("p", {
                          children: (0, s.jsx)(Z, { text: ey })
                        })
                      ]
                    }),
                    (0, s.jsx)("div", {
                      className: $().aside,
                      children: (0, s.jsx)(g.$, {
                        ref: eR,
                        type: "button",
                        size: "sm",
                        variant: en ? "ghost" : "secondary",
                        disabled: "idle" !== eh,
                        "aria-expanded": en,
                        onClick: function() {
                          if ("idle" === eh) {
                            if (en) {
                              er(false), ef(null), eT("Password change canceled");
                              return;
                            }
                            er(true), eD(() => eY.current);
                          }
                        },
                        children: en ? "Cancel" : "Change password"
                      })
                    })
                  ]
                }),
                (0, s.jsx)(o.N, {
                  initial: false,
                  children: en && (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsxs)("form", {
                        className: $().pwForm,
                        noValidate: true,
                        onSubmit: function(e3) {
                          if (e3.preventDefault(), "idle" !== eh) return;
                          let t3 = (e4, t4) => {
                            ef({ field: e4, text: t4 }), ("current" === e4 ? eY : ez).current?.focus();
                          };
                          return eo ? ed ? ed === eo ? t3(
                            "new",
                            "Use a password that differs from your current one"
                          ) : (0, k.co)(ed).level < 3 ? t3(
                            "new",
                            "Meet at least three of the requirements below"
                          ) : void (ef(null), em("saving"), eW(() => {
                            em("saved"), eT("Password updated"), eu && eX(true), eW(() => {
                              er(false), em("idle"), el(""), ec(""), ep(false), e_("Last changed just now"), eD(() => eR.current);
                            }, 1400);
                          }, 900)) : t3("new", "Choose a new password") : t3("current", "Enter your current password");
                        },
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)(N.s, {
                                ref: eY,
                                label: "Current password",
                                autoComplete: "current-password",
                                value: eo,
                                readOnly: "idle" !== eh,
                                "aria-invalid": ex?.field === "current" || void 0,
                                "aria-describedby": ex?.field === "current" ? `${e2}-current-error` : void 0,
                                onChange: (e3) => {
                                  el(e3.target.value), ex?.field === "current" && ef(null);
                                }
                              }),
                              (0, s.jsx)(o.N, {
                                initial: false,
                                children: ex?.field === "current" && (0, s.jsx)(
                                  V,
                                  {
                                    children: (0, s.jsx)("p", {
                                      id: `${e2}-current-error`,
                                      className: $().fieldError,
                                      role: "alert",
                                      children: ex.text
                                    })
                                  },
                                  "current-error"
                                )
                              })
                            ]
                          }),
                          (0, s.jsx)(k.Xh, {
                            ref: ez,
                            label: "New password",
                            value: ed,
                            readOnly: "idle" !== eh,
                            error: ex?.field === "new" ? ex.text : void 0,
                            onValueChange: (e3) => {
                              ec(e3), ex?.field === "new" && ef(null);
                            }
                          }),
                          (0, s.jsxs)("div", {
                            className: $().pwFoot,
                            children: [
                              (0, s.jsx)("span", {
                                className: $().checkWrap,
                                children: (0, s.jsx)(j.S, {
                                  label: "Sign out of other sessions",
                                  checked: eu,
                                  disabled: !eO.length || "idle" !== eh,
                                  onCheckedChange: (e3) => ep(true === e3)
                                })
                              }),
                              (0, s.jsx)(g.$, {
                                type: "submit",
                                size: "sm",
                                loading: "saving" === eh,
                                children: "saved" === eh ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)(m.A, {
                                      size: 16,
                                      strokeWidth: 2,
                                      "aria-hidden": "true"
                                    }),
                                    "Password updated"
                                  ]
                                }) : "Update password"
                              })
                            ]
                          })
                        ]
                      })
                    },
                    "password-form"
                  )
                })
              ]
            }),
            (0, s.jsxs)("section", {
              className: $().section,
              "aria-labelledby": `${e2}-sessions`,
              children: [
                (0, s.jsx)("div", {
                  className: $().sectionHead,
                  children: (0, s.jsxs)("div", {
                    className: $().sectionText,
                    children: [
                      (0, s.jsxs)("h3", {
                        id: `${e2}-sessions`,
                        ref: eB,
                        tabIndex: -1,
                        children: [
                          "Active sessions ",
                          (0, s.jsx)("span", {
                            className: $().count,
                            children: (0, s.jsx)(K, { value: eg.length })
                          })
                        ]
                      }),
                      (0, s.jsx)("p", {
                        children: "Devices signed in to your account in the last 30 days."
                      })
                    ]
                  })
                }),
                (0, s.jsx)("ul", {
                  className: $().sessions,
                  "aria-labelledby": `${e2}-sessions`,
                  children: (0, s.jsx)(o.N, {
                    initial: false,
                    custom: ev,
                    children: eg.map((e3) => {
                      let t3 = Y[e3.kind];
                      return (0, s.jsx)(
                        et,
                        {
                          id: e3.id,
                          children: (0, s.jsxs)("div", {
                            className: $().sessionInner,
                            children: [
                              (0, s.jsx)(t3, {
                                className: $().deviceIcon,
                                size: 16,
                                strokeWidth: 1.5,
                                "aria-hidden": "true"
                              }),
                              (0, s.jsxs)("div", {
                                className: $().sessionText,
                                children: [
                                  (0, s.jsxs)("span", {
                                    className: $().sessionName,
                                    children: [
                                      e3.device,
                                      e3.current && (0, s.jsx)(_.E, {
                                        size: "sm",
                                        children: "This device"
                                      }),
                                      e3.flag && (0, s.jsx)(_.E, {
                                        size: "sm",
                                        tone: "warning",
                                        children: e3.flag
                                      })
                                    ]
                                  }),
                                  (0, s.jsxs)("span", {
                                    className: $().sessionMeta,
                                    children: [
                                      e3.client,
                                      " \xB7 ",
                                      e3.city,
                                      " \xB7 ",
                                      e3.seen
                                    ]
                                  })
                                ]
                              }),
                              !e3.current && (0, s.jsx)(g.$, {
                                ref: (t4) => {
                                  t4 ? eF.current.set(e3.id, t4) : eF.current.delete(e3.id);
                                },
                                type: "button",
                                variant: "ghost",
                                size: "sm",
                                "aria-label": `Revoke ${e3.device} session in ${e3.city}`,
                                onClick: () => {
                                  let t4, i3;
                                  return t4 = eO.findIndex(
                                    (t5) => t5.id === e3.id
                                  ), i3 = eO[t4 + 1] ?? eO[t4 - 1], void (eb({}), ej(
                                    (t5) => t5.filter((t6) => t6.id !== e3.id)
                                  ), eT(
                                    `Signed out of ${e3.device} in ${e3.city}`
                                  ), eD(
                                    () => (i3 ? eF.current.get(i3.id) : null) ?? eB.current
                                  ));
                                },
                                children: "Revoke"
                              })
                            ]
                          })
                        },
                        e3.id
                      );
                    })
                  })
                }),
                (0, s.jsx)(o.N, {
                  initial: false,
                  children: eO.length ? (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsxs)("div", {
                        className: $().sessionsFoot,
                        children: [
                          (0, s.jsx)("p", {
                            className: $().muted,
                            children: (0, s.jsx)(Z, {
                              text: ew ? `Keep holding to sign out ${eO.length} ${1 === eO.length ? "device" : "devices"}` : "You stay signed in on this device"
                            })
                          }),
                          (0, s.jsx)(b.j, {
                            className: $().hold,
                            label: "Sign out of other sessions",
                            confirmedLabel: "Signed out",
                            icon: (0, s.jsx)(y.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            onHoldChange: eN,
                            onConfirm: () => eX()
                          })
                        ]
                      })
                    },
                    "sign-out-all"
                  ) : (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsx)("p", {
                        className: $().alone,
                        children: "Only this device is signed in."
                      })
                    },
                    "alone"
                  )
                })
              ]
            }),
            (0, s.jsx)("p", {
              className: $().srOnly,
              "aria-live": "polite",
              children: ek
            })
          ]
        })
      })
    });
  }
  let es = ei;
}

__m(__module,__exports,__require);
}