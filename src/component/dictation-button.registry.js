/* dictation-button (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(5604, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { DictationButtonDemo: () => K, default: () => F });
  var n = r(95155), a = r(12115), i = r(66558), s = r(92171), l = r(25354), o = r(18310), c = r(80642), d = r(15688), u = r(9005), h = r(64577), m = r(48272), f = r(92298), p = r(35484), g = r(38158), y = r(76266), v = r(52898), b = r(36690);
  class w extends Error {
    constructor(e2, t2) {
      super(t2 ?? e2), this.name = "DictationError", this.code = e2;
    }
  }
  let x = [
    [
      { text: "Draft a reply to Priya", heard: "Draft a reply to Pria" },
      {
        text: "saying the Q4 pricing review moves to Thursday at 2 PM,",
        heard: "saying the cue for pricing review moves to Thursday at 2 PM"
      },
      { text: "and ask her to bring the churn numbers from Stripe." }
    ],
    [
      {
        text: "Summarize the open Linear issues tagged billing,",
        heard: "Summarize the open linear issues tagged billing"
      },
      { text: "group them by customer," },
      {
        text: "and flag anything that blocks the October 31 release.",
        heard: "and flag anything that blocks the October 30 first release"
      }
    ],
    [
      {
        text: "Rewrite this onboarding email so it's shorter and warmer.",
        heard: "Rewrite this on boarding email so it's shorter and warmer"
      },
      { text: "Keep the 14-day trial", heard: "Keep the 14 day trial" },
      { text: "and the link to the setup guide." }
    ]
  ];
  function _({
    scripts: e2 = x,
    deny: t2 = false,
    startDelay: r2 = 160,
    finalizeDelay: n2 = 620,
    wordInterval: a2 = 150
  } = {}) {
    let i2 = 0, s2 = (s3, l2) => new Promise((o2, c2) => {
      let d2, u2 = /* @__PURE__ */ new Set(), h2 = (e3, t3) => {
        let r3 = setTimeout(() => {
          u2.delete(r3), e3();
        }, t3);
        u2.add(r3);
      }, m2 = () => {
        u2.forEach(clearTimeout), u2.clear(), d2 && clearInterval(d2), d2 = void 0;
      };
      l2.addEventListener(
        "abort",
        () => {
          m2(), c2(new w("aborted"));
        },
        { once: true }
      ), h2(() => {
        if (t2)
          return void c2(
            new w("not-allowed", "Microphone access was denied")
          );
        let r3 = e2[i2++ % Math.max(1, e2.length)] ?? [], u3 = [], f2 = 0, p2 = 0, g2 = false, y2 = 0;
        d2 = setInterval(() => {
          y2 += 0.9;
          let e3 = g2 ? 0.32 + 0.5 * Math.abs(Math.sin(y2)) * (0.55 + 0.45 * Math.random()) + 0.12 * Math.random() : 0.03 + 0.05 * Math.random();
          s3.onLevel(Math.min(1, e3));
        }, 50);
        let v2 = (e3) => s3.onTranscript({ final: u3.join(" "), interim: e3 }), b2 = () => {
          let e3 = r3[f2];
          if (!e3) {
            g2 = false, s3.onSpeechEnd();
            return;
          }
          let t3 = (e3.heard ?? e3.text).split(/\s+/).filter(Boolean);
          if (p2 < t3.length) {
            g2 = true, p2 = Math.min(
              t3.length,
              p2 + (0.4 > Math.random() ? 2 : 1)
            ), v2(t3.slice(0, p2).join(" ")), h2(b2, a2 * (0.75 + 0.5 * Math.random()));
            return;
          }
          u3.push(e3.text), f2 += 1, p2 = 0, g2 = false, v2(""), h2(b2, 300);
        };
        h2(b2, 220), o2({
          stop: () => new Promise((e3, t3) => {
            m2();
            let a3 = r3[f2];
            (a3 && p2 > 0 && u3.push(a3.text), g2 = false, s3.onLevel(0), v2(""), l2.aborted) ? t3(new w("aborted")) : h2(() => e3(u3.join(" ")), n2);
          })
        });
      }, r2);
    });
    return k.add(s2), s2;
  }
  let k = /* @__PURE__ */ new WeakSet(), j = { final: "", interim: "" }, E = ["starting", "listening", "processing"], S = (e2) => e2 instanceof w ? e2.code : e2?.name === "NotAllowedError" ? "not-allowed" : "network";
  var N = r(16504), T = r.n(N);
  let M = { type: "spring", visualDuration: 0.24, bounce: 0 }, C = [0.16, 1, 0.3, 1], A = (e2) => 0.35 + 0.65 * Math.abs(Math.sin(1.7 * e2 + 0.6)), R = (e2) => e2.split(/\s+/).filter(Boolean), L = {
    "not-allowed": {
      wide: "Microphone blocked in site settings",
      narrow: "Blocked",
      live: "Microphone access is blocked. Allow it in your browser's site settings, then try again."
    },
    "no-speech": {
      wide: "Didn't catch that",
      narrow: "No speech",
      live: "No speech was detected. Try again."
    },
    "audio-capture": {
      wide: "No microphone found",
      narrow: "No mic",
      live: "No microphone was found."
    },
    network: {
      wide: "Recognition is offline",
      narrow: "Offline",
      live: "Speech recognition could not reach its service."
    },
    unsupported: {
      wide: "Dictation isn't supported here",
      narrow: "Unsupported",
      live: "This browser does not support dictation."
    },
    aborted: {
      wide: "Dictation stopped",
      narrow: "Stopped",
      live: "Dictation stopped."
    }
  };
  function D({ levelRef: e2, active: t2, reduced: r2 }) {
    let i2 = (0, a.useRef)(null), [s2, l2] = (0, a.useState)(16), o2 = (0, a.useRef)([]), c2 = (0, a.useRef)([]), d2 = (0, a.useRef)(0);
    return (0, a.useEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([e4]) => {
        let t4 = e4.contentRect.width;
        t4 > 0 && l2(Math.max(4, Math.floor((t4 + 2) / 5)));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.useEffect)(() => {
      let n2 = i2.current;
      if (!n2) return;
      let a2 = Array.from(n2.children), s3 = a2.length;
      for (let e3 of [o2.current, c2.current]) {
        for (; e3.length < s3; ) e3.unshift(0);
        e3.length > s3 && e3.splice(0, e3.length - s3);
      }
      let l3 = o2.current, u2 = c2.current, h2 = (e3) => {
        a2[e3].style.height = `${(3 + 17 * Math.pow(u2[e3], 1.35)).toFixed(2)}px`;
      };
      for (let e3 = 0; e3 < s3; e3++) h2(e3);
      let m2 = true, f2 = 0, p2 = 0, g2 = 0, y2 = "u" < typeof IntersectionObserver ? void 0 : new IntersectionObserver(([e3]) => {
        (m2 = e3.isIntersecting) && !f2 && (p2 = 0, f2 = requestAnimationFrame(v2));
      }), v2 = (n3) => {
        if (f2 = 0, !m2) {
          p2 = 0;
          return;
        }
        if (document.hidden) {
          p2 = 0, f2 = requestAnimationFrame(v2);
          return;
        }
        let a3 = p2 ? Math.min(64, n3 - p2) : 16;
        for (p2 = n3, g2 += a3; g2 >= 60; ) {
          g2 -= 60;
          let n4 = t2 ? e2.current ?? 0 : 0;
          if (d2.current += (n4 - d2.current) * (n4 > d2.current ? 0.55 : 0.3), t2)
            if (r2) for (let e3 = 0; e3 < s3; e3++) l3[e3] = d2.current * A(e3);
            else l3.shift(), l3.push(d2.current);
          else for (let e3 = 0; e3 < s3; e3++) l3[e3] *= 0.6;
        }
        let i3 = 1 - Math.exp(-a3 / 55), o3 = false;
        for (let e3 = 0; e3 < s3; e3++) {
          let t3 = u2[e3] + (l3[e3] - u2[e3]) * i3;
          Math.abs(t3 - u2[e3]) > 5e-4 && (u2[e3] = t3, h2(e3)), (l3[e3] > 2e-3 || u2[e3] > 2e-3) && (o3 = true);
        }
        (t2 || o3) && (f2 = requestAnimationFrame(v2));
      };
      return y2?.observe(n2), f2 = requestAnimationFrame(v2), () => {
        cancelAnimationFrame(f2), y2?.disconnect();
      };
    }, [t2, r2, e2, s2]), (0, n.jsx)("span", {
      ref: i2,
      className: T().wave,
      "aria-hidden": "true",
      children: Array.from(
        { length: s2 },
        (e3, t3) => (0, n.jsx)("span", {}, t3)
      )
    });
  }
  function z({ startedAt: e2, running: t2 }) {
    let r2 = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
      let n2 = r2.current;
      if (!n2 || null === e2) return;
      let a2 = () => {
        let t3;
        t3 = Math.max(0, Math.floor((performance.now() - e2) / 1e3)), n2.textContent = `${Math.floor(t3 / 60)}:${String(t3 % 60).padStart(2, "0")}`;
      };
      if (a2(), !t2) return;
      let i2 = setInterval(a2, 250);
      return () => clearInterval(i2);
    }, [e2, t2]), (0, n.jsx)("span", {
      ref: r2,
      className: T().time,
      role: "timer",
      "aria-label": "Elapsed",
      children: "0:00"
    });
  }
  function O() {
    return (0, n.jsxs)("svg", {
      className: T().spin,
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
          strokeOpacity: ".3",
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
  function $({
    dictation: e2,
    onStart: t2,
    disabled: r2 = false,
    reduced: i2,
    label: s2,
    refocusOnCommit: o2,
    activeWidth: c2 = 216,
    compact: p2 = false
  }) {
    let {
      status: g2,
      startedAt: y2,
      levelRef: v2,
      confirm: w2,
      cancel: x2,
      dismiss: _2
    } = e2, k2 = "idle" === g2 ? "idle" : "denied" === g2 || "error" === g2 ? "retry" : "active", j2 = "processing" === g2, [E2, S2] = (0, a.useState)("error");
    ("denied" === g2 || "error" === g2) && g2 !== E2 && S2(g2);
    let N2 = (0, a.useRef)(null), C2 = (0, a.useRef)(null), A2 = (0, a.useRef)(null), R2 = (0, a.useRef)(null), [L2, W2] = (0, a.useState)(116);
    return (0, a.useEffect)(() => {
      let e3 = A2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        e3.offsetWidth && W2(Math.ceil(e3.offsetWidth));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.useEffect)(() => {
      let e3 = R2.current;
      e3 && ("active" !== k2 || "skip-idle" !== e3) && (R2.current = null, ("idle" !== k2 || "skip-idle" !== e3) && ("idle" === k2 ? N2 : "active" === k2 ? C2 : A2).current?.focus({
        preventScroll: true
      }));
    }, [k2]), (0, n.jsxs)(l.PY1.div, {
      className: T().pill,
      "data-view": k2,
      "data-status": g2,
      initial: false,
      animate: { width: "active" === k2 ? c2 : "retry" === k2 ? L2 : 36 },
      transition: i2 ? { duration: 0 } : M,
      onKeyDown: (e3) => {
        "Escape" === e3.key && ("active" === k2 ? (e3.preventDefault(), R2.current = "follow", x2()) : "retry" === k2 && (e3.preventDefault(), R2.current = "follow", _2()));
      },
      children: [
        (0, n.jsx)("div", {
          className: T().layer,
          "data-on": "idle" === k2 || void 0,
          inert: "idle" !== k2,
          style: { width: 36 },
          children: (0, n.jsx)(b.m, {
            content: s2,
            children: (0, n.jsx)("button", {
              ref: N2,
              type: "button",
              className: T().mic,
              "aria-label": s2,
              disabled: r2,
              onClick: () => {
                R2.current = "follow", t2();
              },
              children: (0, n.jsx)(d.A, {
                size: 18,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          })
        }),
        (0, n.jsx)("div", {
          className: T().layer,
          "data-on": "active" === k2 || void 0,
          inert: "active" !== k2,
          style: { width: c2 },
          children: (0, n.jsxs)("div", {
            className: T().active,
            children: [
              (0, n.jsx)(b.m, {
                content: "Cancel",
                children: (0, n.jsx)("button", {
                  type: "button",
                  className: T().cancel,
                  "aria-label": "Cancel dictation",
                  "aria-disabled": j2 || void 0,
                  onClick: () => {
                    j2 || (R2.current = "follow", x2());
                  },
                  children: (0, n.jsx)(u.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              }),
              (0, n.jsx)(D, {
                levelRef: v2,
                active: "listening" === g2,
                reduced: i2
              }),
              (0, n.jsx)(z, {
                startedAt: y2,
                running: "starting" === g2 || "listening" === g2
              }),
              (0, n.jsx)(b.m, {
                content: j2 ? "Transcribing" : "Insert",
                children: (0, n.jsxs)("button", {
                  ref: C2,
                  type: "button",
                  className: T().confirm,
                  "aria-label": j2 ? "Transcribing" : "Insert transcript",
                  "aria-disabled": j2 || void 0,
                  onClick: () => {
                    j2 || (R2.current = o2 ? "follow" : "skip-idle", w2());
                  },
                  children: [
                    (0, n.jsx)("span", {
                      className: T().swap,
                      "data-on": !j2 || void 0,
                      children: (0, n.jsx)(h.A, {
                        size: 16,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: T().swap,
                      "data-on": j2 || void 0,
                      children: (0, n.jsx)(O, {})
                    })
                  ]
                })
              })
            ]
          })
        }),
        (0, n.jsx)("div", {
          className: T().layer,
          "data-on": "retry" === k2 || void 0,
          inert: "retry" !== k2,
          children: (0, n.jsxs)("button", {
            ref: A2,
            type: "button",
            className: T().retry,
            disabled: r2,
            onClick: () => {
              R2.current = "follow", t2();
            },
            children: [
              "denied" === E2 ? (0, n.jsx)(m.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }) : (0, n.jsx)(f.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              (0, n.jsx)("span", { children: p2 ? "Retry" : "Try again" })
            ]
          })
        })
      ]
    });
  }
  let W = {
    name: "Claude Sonnet 5.5",
    mark: (0, n.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      { className: T().claude, "aria-hidden": "true" }
    )
  };
  function I({
    value: e2,
    defaultValue: t2 = "",
    onValueChange: r2,
    placeholder: i2 = "Message Claude",
    recognizer: d2,
    onTranscript: u2,
    onCommit: f2,
    onSend: b2,
    onStatusChange: w2,
    autoPlay: x2,
    maxDuration: N2 = 120,
    model: A2 = W,
    disabled: D2 = false,
    className: z2,
    "aria-label": P2 = "Message"
  }) {
    var U2;
    let B2, K2, F2, q = (0, o.I)() ?? false, H = void 0 === d2 || k.has(d2), G = (0, a.useRef)(null), Y = (0, a.useRef)(null), [V, X] = (0, a.useState)(t2), Z = e2 ?? V, [J, Q] = (0, a.useState)(x2 ?? H), [ee, et] = (0, a.useState)(""), [er, en] = (0, a.useState)(false), [ea, ei] = (0, a.useState)(false), [es, el] = (0, a.useState)(false), [eo, ec] = (0, a.useState)(false), [ed, eu] = (0, a.useState)(""), eh = (0, a.useRef)(false), em = (0, a.useRef)(false), ef = (function(e3) {
      let [t3, r3] = (0, a.useState)(false);
      return (0, a.useEffect)(() => {
        let t4 = e3.current;
        if (!t4 || "u" < typeof IntersectionObserver) return void r3(true);
        let n2 = new IntersectionObserver(([e4]) => r3(e4.isIntersecting), {
          rootMargin: "48px"
        });
        return n2.observe(t4), () => n2.disconnect();
      }, [e3]), t3;
    })(G), { outer: ep, inner: eg } = (B2 = (0, a.useRef)(null), K2 = (0, a.useRef)(null), (0, a.useEffect)(() => {
      let e3, t3 = B2.current, r3 = K2.current;
      if (!t3 || !r3 || "u" < typeof ResizeObserver) return;
      let n2 = r3.offsetHeight, a2 = r3.offsetWidth, i3 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, l2 = new ResizeObserver(() => {
        let l3 = r3.offsetHeight, o2 = r3.offsetWidth, c2 = o2 !== a2;
        if (a2 = o2, l3 === n2) return;
        let d3 = e3 ? t3.getBoundingClientRect().height : n2;
        (n2 = l3, e3?.stop(), q || c2) ? i3() : (t3.style.overflow = "hidden", e3 = (0, s.i)(
          t3,
          { height: [d3, l3] },
          { ...M, onComplete: i3 }
        ));
      });
      return l2.observe(r3), () => {
        l2.disconnect(), e3?.stop();
      };
    }, [q]), { outer: B2, inner: K2 }), ey = (0, a.useRef)(null), [ev, eb] = (0, a.useState)(null);
    (0, a.useEffect)(() => {
      let e3 = ey.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([e4]) => eb(Math.round(e4.contentRect.width)));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let ew = null === ev ? 216 : Math.max(150, Math.min(216, ev - 52)), ex = (t3) => {
      void 0 === e2 && X(t3), r2?.(t3);
    }, e_ = (function(e3 = {}) {
      let { recognizer: t3, maxDuration: r3 = 120 } = e3, n2 = (0, a.useRef)(e3), [i3] = (0, a.useState)(() => _()), s2 = (0, a.useRef)(t3 ?? i3);
      (0, a.useEffect)(() => {
        n2.current = e3, s2.current = t3 ?? i3;
      });
      let [l2, o2] = (0, a.useState)("idle"), c2 = (0, a.useRef)("idle"), [d3, u3] = (0, a.useState)(j), [h2, m2] = (0, a.useState)(null), [f3, p2] = (0, a.useState)(null), g2 = (0, a.useRef)(0), y2 = (0, a.useRef)(null), v2 = (0, a.useCallback)((e4, t4) => {
        c2.current = e4, o2(e4), n2.current.onStatusChange?.(e4, t4);
      }, []), b3 = (0, a.useCallback)(
        (e4) => {
          if (y2.current?.controller.abort(), y2.current = null, g2.current = 0, "aborted" === e4) {
            u3(j), v2("idle");
            return;
          }
          m2(e4), v2("not-allowed" === e4 ? "denied" : "error", e4);
        },
        [v2]
      ), w3 = (0, a.useCallback)(() => {
        let e4 = y2.current;
        e4 && (e4.controller.abort(), y2.current = null, g2.current = 0, u3(j), v2("idle"), n2.current.onCancel?.());
      }, [v2]), x3 = (0, a.useCallback)(async () => {
        let e4 = y2.current;
        if (e4) {
          if ("starting" === c2.current || !e4.session) return void w3();
          if ("listening" === c2.current) {
            v2("processing"), g2.current = 0;
            try {
              let t4 = (await e4.session.stop()).trim();
              if (y2.current !== e4) return;
              if (!t4) return void b3("no-speech");
              y2.current = null, u3({ final: t4, interim: "" }), v2("idle"), n2.current.onCommit?.(t4);
            } catch (t4) {
              y2.current === e4 && b3(S(t4));
            }
          }
        }
      }, [w3, b3, v2]), k2 = (0, a.useCallback)(async () => {
        if (E.includes(c2.current)) return;
        let e4 = new AbortController(), t4 = { controller: e4 };
        y2.current = t4;
        let r4 = () => y2.current === t4 && !e4.signal.aborted;
        g2.current = 0, u3(j), m2(null), p2(performance.now()), v2("starting");
        try {
          let a2 = await s2.current(
            {
              onTranscript: (e5) => {
                r4() && ("processing" !== c2.current || !e5.interim) && (u3(e5), n2.current.onTranscript?.(e5));
              },
              onLevel: (e5) => {
                r4() && (g2.current = Math.max(0, Math.min(1, e5)));
              },
              onSpeechEnd: () => {
                r4() && n2.current.onSpeechEnd?.();
              },
              onError: (e5) => {
                r4() && b3(e5);
              }
            },
            e4.signal
          );
          if (!r4()) return;
          t4.session = a2, "starting" === c2.current && v2("listening");
        } catch (e5) {
          r4() && b3(S(e5));
        }
      }, [b3, v2]), N3 = (0, a.useCallback)(() => {
        ("denied" === c2.current || "error" === c2.current) && (m2(null), v2("idle"));
      }, [v2]);
      return (0, a.useEffect)(() => {
        if ("listening" !== l2 || null === f3 || !r3) return;
        let e4 = setTimeout(
          () => void x3(),
          Math.max(0, f3 + 1e3 * r3 - performance.now())
        );
        return () => clearTimeout(e4);
      }, [l2, f3, r3, x3]), (0, a.useEffect)(
        () => () => {
          y2.current?.controller.abort(), y2.current = null;
        },
        []
      ), {
        status: l2,
        transcript: d3,
        error: h2,
        startedAt: f3,
        levelRef: g2,
        start: () => void k2(),
        confirm: () => void x3(),
        cancel: w3,
        dismiss: N3
      };
    })({
      recognizer: d2,
      maxDuration: N2,
      onTranscript: u2,
      onStatusChange: w2,
      onSpeechEnd: () => en(true),
      onCommit: (e3) => {
        ex(ee ? /\s$/.test(ee) ? ee + e3 : `${ee} ${e3}` : e3), f2?.(e3);
        let t3 = R(e3).length;
        eu(`Inserted ${t3} ${1 === t3 ? "word" : "words"}`), eh.current ? em.current = true : ei(true);
      },
      onCancel: () => eu("Dictation cancelled, nothing was inserted")
    }), { status: ek, transcript: ej, error: eE } = e_, eS = "starting" === ek || "listening" === ek || "processing" === ek, eN = !!Z.trim() && !eS && !eo && !D2, eT = (e3) => {
      D2 || (eh.current = e3, e3 && Q(false), et(Z), en(false), el(false), eu(""), e_.start());
    }, eM = async () => {
      let e3 = Z.trim();
      if (e3 && !eS && !eo && !D2) {
        if (ei(false), b2) {
          ec(true);
          try {
            await b2(e3), ex(""), eu("Sent");
          } finally {
            ec(false);
          }
          return;
        }
        ex(""), el(true), eu("Sent. Simulated, nothing was sent.");
      }
    };
    (0, a.useEffect)(() => {
      if ("idle" !== ek || !em.current) return;
      em.current = false;
      let e3 = Y.current;
      e3 && (e3.focus({ preventScroll: true }), e3.setSelectionRange(e3.value.length, e3.value.length));
    }, [ek, Z]), (0, a.useEffect)(() => {
      let e3 = eg.current;
      eS && e3 && (e3.scrollTop = e3.scrollHeight);
    }, [eS, ej, eg]), (0, a.useEffect)(() => {
      if (!es) return;
      let e3 = setTimeout(() => el(false), 1400);
      return () => clearTimeout(e3);
    }, [es]);
    let eC = (0, a.useRef)({ begin: eT, send: eM, confirm: e_.confirm });
    (0, a.useEffect)(() => {
      eC.current = { begin: eT, send: eM, confirm: e_.confirm };
    }), (0, a.useEffect)(() => {
      let e3;
      if (J && ef && !D2)
        return "idle" === ek && ea ? e3 = setTimeout(() => void eC.current.send(), 1500) : "idle" !== ek || Z || es ? "listening" === ek && er && (e3 = setTimeout(() => eC.current.confirm(), 450)) : e3 = setTimeout(() => eC.current.begin(false), 900), () => clearTimeout(e3);
    }, [J, ef, D2, ek, Z, es, er, ea]);
    let eA = () => {
      J && Q(false);
    }, eR = es ? "sent" : "processing" === ek ? "processing" : eS ? "listening" : "denied" === ek ? "denied" : "error" === ek ? "error" : "model", eL = L[eE ?? "aborted"], eD = eS ? (U2 = [
      ...R(ej.final).map((e3) => ({ word: e3, final: true })),
      ...R(ej.interim).map((e3) => ({ word: e3, final: false }))
    ], F2 = /* @__PURE__ */ new Map(), U2.map((e3) => {
      let t3 = F2.get(e3.word) ?? 0;
      return F2.set(e3.word, t3 + 1), { ...e3, key: `${e3.word}#${t3}` };
    })) : [], ez = "idle" === ek && ed ? ed : ("starting" === ek || "listening" === ek ? H ? "Listening. Simulated microphone, nothing is recorded." : "Listening" : "processing" === ek ? "Transcribing" : "denied" === ek || "error" === ek ? L[eE ?? "aborted"].live : "") || ed;
    return (0, n.jsxs)("div", {
      ref: G,
      className: ((...e3) => e3.filter(Boolean).join(" "))(T().root, z2),
      onPointerDown: eA,
      onKeyDown: (e3) => {
        eA(), !e3.defaultPrevented && ("listening" === ek || "starting" === ek) && ("Escape" === e3.key ? (e3.preventDefault(), e_.cancel()) : "Enter" !== e3.key || e3.target instanceof HTMLButtonElement || (e3.preventDefault(), eh.current = true, e_.confirm()));
      },
      onFocus: eA,
      children: [
        (0, n.jsxs)("div", {
          className: T().card,
          "data-dictating": eS || void 0,
          "data-disabled": D2 || void 0,
          children: [
            (0, n.jsx)("div", {
              ref: ep,
              className: T().field,
              children: (0, n.jsx)("div", {
                ref: eg,
                className: T().scroll,
                children: (0, n.jsxs)("div", {
                  className: T().stack,
                  "data-dictating": eS || void 0,
                  children: [
                    (0, n.jsxs)("div", {
                      className: T().mirror,
                      "aria-hidden": "true",
                      children: [
                        eS ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            ee,
                            ee && eD.length && !/\s$/.test(ee) ? " " : null,
                            eD.map(
                              (e3, t3) => (0, n.jsxs)(
                                a.Fragment,
                                {
                                  children: [
                                    t3 ? " " : null,
                                    (0, n.jsx)("span", {
                                      className: T().word,
                                      "data-interim": e3.final ? void 0 : "",
                                      children: e3.word
                                    })
                                  ]
                                },
                                e3.key
                              )
                            ),
                            eD.length || ee ? null : (0, n.jsx)("span", {
                              className: T().hint,
                              children: "Speak now"
                            })
                          ]
                        }) : Z,
                        "\u200B"
                      ]
                    }),
                    (0, n.jsx)("textarea", {
                      ref: Y,
                      className: T().input,
                      value: Z,
                      placeholder: i2,
                      "aria-label": P2,
                      rows: 2,
                      disabled: D2,
                      readOnly: eS,
                      tabIndex: eS ? -1 : void 0,
                      onChange: (e3) => {
                        ex(e3.target.value), ei(false), ("denied" === ek || "error" === ek) && e_.dismiss();
                      },
                      onKeyDown: (e3) => {
                        "Enter" !== e3.key || e3.shiftKey || e3.nativeEvent.isComposing || (e3.preventDefault(), eM());
                      }
                    })
                  ]
                })
              })
            }),
            (0, n.jsxs)("div", {
              ref: ey,
              className: T().bar,
              children: [
                (0, n.jsx)("div", {
                  className: T().slot,
                  children: (0, n.jsx)(c.N, {
                    initial: false,
                    children: (0, n.jsx)(
                      l.PY1.div,
                      {
                        className: T().slotItem,
                        initial: { opacity: 0, y: 2 * !q },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.16, ease: C, delay: 0.04 }
                        },
                        exit: { opacity: 0, transition: { duration: 0.1 } },
                        children: "model" === eR ? A2 ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            A2.mark,
                            (0, n.jsx)("span", {
                              className: T().slotText,
                              children: A2.name
                            })
                          ]
                        }) : null : "listening" === eR ? (0, n.jsxs)("span", {
                          className: T().hints,
                          children: [
                            (0, n.jsx)(y.ue, {
                              keys: "enter",
                              size: "sm"
                            }),
                            (0, n.jsx)("span", { children: "Insert" }),
                            (0, n.jsx)(y.ue, {
                              keys: "esc",
                              size: "sm",
                              className: T().gap
                            }),
                            (0, n.jsx)("span", { children: "Cancel" })
                          ]
                        }) : "processing" === eR ? (0, n.jsx)(v.n, {
                          className: T().slotText,
                          children: "Transcribing"
                        }) : "sent" === eR ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(h.A, {
                              size: 16,
                              strokeWidth: 2,
                              className: T().ok,
                              "aria-hidden": "true"
                            }),
                            (0, n.jsx)("span", {
                              className: T().slotText,
                              children: b2 ? "Sent" : "Sent, simulated"
                            })
                          ]
                        }) : (0, n.jsxs)(n.Fragment, {
                          children: [
                            "denied" === eR ? (0, n.jsx)(m.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              className: T().warn,
                              "aria-hidden": "true"
                            }) : (0, n.jsx)(p.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              className: T().warn,
                              "aria-hidden": "true"
                            }),
                            (0, n.jsxs)("span", {
                              className: T().slotText,
                              children: [
                                (0, n.jsx)("span", {
                                  className: T().wide,
                                  children: eL.wide
                                }),
                                (0, n.jsx)("span", {
                                  className: T().narrow,
                                  children: eL.narrow
                                })
                              ]
                            })
                          ]
                        })
                      },
                      eR
                    )
                  })
                }),
                (0, n.jsx)($, {
                  dictation: e_,
                  onStart: () => eT(true),
                  disabled: D2,
                  reduced: q,
                  label: "Dictate",
                  refocusOnCommit: false,
                  activeWidth: ew,
                  compact: null !== ev && ev < 300
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: T().send,
                  "aria-label": "Send message",
                  disabled: !eN,
                  onClick: () => void eM(),
                  children: eo ? (0, n.jsx)(O, {}) : (0, n.jsx)(g.A, {
                    size: 18,
                    strokeWidth: 2,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: T().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ez
        })
      ]
    });
  }
  var P = r(16376), U = r.n(P);
  let B = [
    { value: "allowed", label: "Mic allowed" },
    { value: "blocked", label: "Mic blocked" }
  ];
  function K() {
    let [e2, t2] = (0, a.useState)("allowed"), r2 = (0, a.useMemo)(() => _({ deny: "blocked" === e2 }), [e2]);
    return (0, n.jsxs)("div", {
      className: U().demo,
      children: [
        (0, n.jsx)(I, { recognizer: r2, autoPlay: true }, e2),
        (0, n.jsx)(i.A, {
          options: B,
          value: e2,
          onValueChange: t2,
          label: "Simulated microphone permission"
        })
      ]
    });
  }
  let F = K;
}

__m(__module,__exports,__require);
});
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(15688, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var a = i(51811);
  let n = {
    name: "mic",
    size: 24,
    node: [
      ["path", { d: "M12 19v3", key: "npa21l" }],
      ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
      [
        "rect",
        { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }
      ]
    ]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(16376, ".demo{display:flex;box-sizing:border-box;width:100%;min-height:320px;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:32px 16px}\n.demo>:first-child{max-width:600px}", {"demo":"demo"});
A.regCss(16504, ".dictation-button_root___BGtX{container:dictation/inline-size;width:100%;max-width:640px;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.dictation-button_control__MFOfJ{display:inline-flex}.dictation-button_srOnly__SwtH5{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.dictation-button_card__mWTpe{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}.dictation-button_card__mWTpe:focus-within{border-color:color-mix(in oklab,var(--foreground) 22%,var(--border))}.dictation-button_card__mWTpe[data-dictating]{border-color:color-mix(in oklab,var(--accent) 28%,var(--border))}.dictation-button_card__mWTpe[data-disabled]{opacity:.6}.dictation-button_field__ct1sx{position:relative}.dictation-button_scroll__OH9Mc{max-height:calc(22px * 6 + 14px);overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.dictation-button_stack__bxCKZ{position:relative}.dictation-button_input__D59BU,.dictation-button_mirror__DOeUK{box-sizing:border-box;min-height:calc(22px * 2 + 14px);margin:0;padding:8px 8px 6px;font:inherit;font-size:15px;letter-spacing:var(--tracking-body);line-height:22px;white-space:pre-wrap;overflow-wrap:anywhere}.dictation-button_mirror__DOeUK{visibility:hidden;color:var(--foreground)}.dictation-button_input__D59BU{position:absolute;inset:0;display:block;width:100%;height:100%;resize:none;overflow:hidden;border:0;background:transparent;color:var(--foreground);outline:none}.dictation-button_input__D59BU::placeholder{color:var(--text-muted);opacity:1}.dictation-button_stack__bxCKZ[data-dictating] .dictation-button_mirror__DOeUK{visibility:visible}.dictation-button_stack__bxCKZ[data-dictating] .dictation-button_input__D59BU{visibility:hidden}.dictation-button_word___yXqz{animation:dictation-button_db-in__5ilAa .14s var(--ease-standard) both;transition:color var(--duration-fast) var(--ease-standard)}.dictation-button_word___yXqz[data-interim]{color:color-mix(in oklab,var(--text-muted) 55%,var(--text-secondary))}.dictation-button_hint__NA5rb{color:var(--text-muted);animation:dictation-button_db-in__5ilAa .16s var(--ease-standard) both}@keyframes dictation-button_db-in__5ilAa{0%{opacity:0}}.dictation-button_bar__On3DM{display:flex;align-items:center;gap:8px;height:36px;padding-left:8px}.dictation-button_slot__GOVqY{position:relative;flex:1 1 auto;min-width:0;height:36px}.dictation-button_slotItem__jgRue{position:absolute;inset:0;display:flex;min-width:0;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-sm);line-height:20px;white-space:nowrap}.dictation-button_slotText__HV59T{min-width:0;overflow:hidden;text-overflow:ellipsis}.dictation-button_claude__f92EL{display:block;flex:none;width:16px;height:16px;color:#d97757}.dictation-button_warn__N6eap{flex:none;color:var(--warning)}.dictation-button_ok__2_aX6{flex:none;color:var(--success)}.dictation-button_hints__ghqYO{display:inline-flex;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs)}.dictation-button_gap__ZwasI{margin-left:6px}.dictation-button_narrow__6XaxC{display:none}.dictation-button_pill__8bzfB{position:relative;flex:none;height:36px;overflow:hidden;border-radius:999px;background:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}.dictation-button_pill__8bzfB[data-view=active],.dictation-button_pill__8bzfB[data-view=retry]{background:var(--surface-muted)}.dictation-button_pill__8bzfB button{--focus-outline-offset:-2px;-webkit-tap-highlight-color:transparent}.dictation-button_layer__D0rol{position:absolute;top:0;right:0;display:flex;height:100%;align-items:center;justify-content:flex-end;opacity:0;visibility:hidden;transition:opacity .1s var(--ease-standard),visibility 0s linear .1s}.dictation-button_layer__D0rol[data-on]{opacity:1;visibility:visible;transition:opacity var(--duration-fast) var(--ease-standard) 40ms,visibility 0s}.dictation-button_cancel__TPL2q,.dictation-button_confirm__Z3Ca1,.dictation-button_mic__Galbh,.dictation-button_send__xldxI{display:grid;flex:none;place-items:center;margin:0;padding:0;border:0;border-radius:999px;cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}.dictation-button_mic__Galbh{width:36px;height:36px;background:transparent;color:var(--text-secondary)}.dictation-button_mic__Galbh:active:not(:disabled){transform:scale(.94)}.dictation-button_mic__Galbh:disabled{color:var(--text-muted);cursor:default}.dictation-button_active__SAJZk{display:flex;box-sizing:border-box;width:100%;align-items:center;gap:8px;padding:4px}.dictation-button_cancel__TPL2q{width:28px;height:28px;background:transparent;color:var(--text-secondary)}.dictation-button_cancel__TPL2q:active:not([aria-disabled]){transform:scale(.92)}.dictation-button_cancel__TPL2q[aria-disabled]{color:var(--text-muted);cursor:default}.dictation-button_wave__AHBLW{display:flex;flex:1 1 auto;min-width:0;height:20px;align-items:center;justify-content:center;gap:2px;overflow:hidden;color:var(--foreground);contain:layout paint;transition:color var(--duration-fast) var(--ease-standard)}.dictation-button_pill__8bzfB[data-status=processing] .dictation-button_wave__AHBLW,.dictation-button_pill__8bzfB[data-status=starting] .dictation-button_wave__AHBLW{color:var(--text-muted)}.dictation-button_wave__AHBLW>span{display:block;flex:none;width:3px;height:3px;border-radius:999px;background:currentColor;will-change:height}.dictation-button_time__DQdCb{flex:none;width:4.5ch;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:16px;text-align:center}.dictation-button_confirm__Z3Ca1{position:relative;width:28px;height:28px;background:var(--accent);color:var(--accent-foreground)}.dictation-button_confirm__Z3Ca1:active:not([aria-disabled]){transform:scale(.92)}.dictation-button_confirm__Z3Ca1[aria-disabled]{cursor:default}.dictation-button_swap__idPf_{position:absolute;inset:0;display:grid;place-items:center;opacity:0;transform:scale(.7);transition:opacity var(--duration-instant) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.dictation-button_swap__idPf_[data-on]{opacity:1;transform:none}.dictation-button_spin__kBf4K{animation:dictation-button_db-spin__KDfDG .8s linear infinite}@keyframes dictation-button_db-spin__KDfDG{to{transform:rotate(1turn)}}.dictation-button_retry__VRY_E{display:inline-flex;box-sizing:border-box;flex:none;width:max-content;height:36px;align-items:center;justify-content:center;gap:6px;margin:0;padding:0 14px;border:0;border-radius:999px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard)}.dictation-button_retry__VRY_E:active:not(:disabled){background:color-mix(in oklab,var(--foreground) 9%,transparent)}.dictation-button_retry__VRY_E:disabled{color:var(--text-muted);cursor:default}.dictation-button_send__xldxI{width:36px;height:36px;background:var(--accent);color:var(--accent-foreground)}.dictation-button_send__xldxI:active:not(:disabled){transform:scale(.94)}.dictation-button_send__xldxI:disabled{background:var(--surface-muted);color:var(--text-muted);cursor:default}@media (hover:hover) and (pointer:fine){.dictation-button_mic__Galbh:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.dictation-button_cancel__TPL2q:hover:not([aria-disabled]){background:color-mix(in oklab,var(--foreground) 8%,transparent);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.dictation-button_confirm__Z3Ca1:hover:not([aria-disabled]),.dictation-button_send__xldxI:hover:not(:disabled){background:color-mix(in oklab,var(--accent) 88%,var(--foreground))}}@media (hover:hover) and (pointer:fine){.dictation-button_retry__VRY_E:hover:not(:disabled){background:color-mix(in oklab,var(--foreground) 6%,transparent)}}@media (prefers-reduced-motion:reduce){.dictation-button_hint__NA5rb,.dictation-button_word___yXqz{animation:none}}@media (prefers-reduced-motion:reduce){.dictation-button_wave__AHBLW>span{transition:none}}@media (prefers-reduced-motion:reduce){.dictation-button_spin__kBf4K{animation-duration:1.6s}}", {"root":"dictation-button_root___BGtX","control":"dictation-button_control__MFOfJ","srOnly":"dictation-button_srOnly__SwtH5","card":"dictation-button_card__mWTpe","field":"dictation-button_field__ct1sx","scroll":"dictation-button_scroll__OH9Mc","stack":"dictation-button_stack__bxCKZ","mirror":"dictation-button_mirror__DOeUK","input":"dictation-button_input__D59BU","word":"dictation-button_word___yXqz","db-in":"dictation-button_db-in__5ilAa","hint":"dictation-button_hint__NA5rb","bar":"dictation-button_bar__On3DM","slot":"dictation-button_slot__GOVqY","slotItem":"dictation-button_slotItem__jgRue","slotText":"dictation-button_slotText__HV59T","claude":"dictation-button_claude__f92EL","warn":"dictation-button_warn__N6eap","ok":"dictation-button_ok__2_aX6","hints":"dictation-button_hints__ghqYO","gap":"dictation-button_gap__ZwasI","narrow":"dictation-button_narrow__6XaxC","wide":"dictation-button_wide__kKTv_","pill":"dictation-button_pill__8bzfB","layer":"dictation-button_layer__D0rol","mic":"dictation-button_mic__Galbh","cancel":"dictation-button_cancel__TPL2q","confirm":"dictation-button_confirm__Z3Ca1","send":"dictation-button_send__xldxI","active":"dictation-button_active__SAJZk","wave":"dictation-button_wave__AHBLW","time":"dictation-button_time__DQdCb","swap":"dictation-button_swap__idPf_","spin":"dictation-button_spin__kBf4K","db-spin":"dictation-button_db-spin__KDfDG","retry":"dictation-button_retry__VRY_E"});
A.reg(48272, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var a = i(51811);
  let n = {
    name: "mic-off",
    size: 24,
    node: [
      ["path", { d: "M12 19v3", key: "npa21l" }],
      ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
      ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
      ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
    ]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(76266, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { YV: () => u, ue: () => h });
  var r = a(95155), n = a(12115), s = a(12053), i = a.n(s);
  let o = (...e2) => (t2) => e2.includes(t2.key), l = (e2, ...t2) => (a2) => a2.code === e2 || t2.includes(a2.key), d = () => () => {
  }, c = () => {
    let e2 = navigator;
    return /mac|iphone|ipad|ipod/i.test(
      e2.userAgentData?.platform || e2.platform || e2.userAgent
    ) ? "mac" : "pc";
  };
  function u(e2 = "auto") {
    let t2 = (0, n.useSyncExternalStore)(d, c, () => "mac");
    return "auto" === e2 ? t2 : e2;
  }
  function h({
    keys: e2,
    children: t2,
    size: a2 = "md",
    platform: s2 = "auto",
    listen: d2 = false,
    pressed: c2 = false,
    onTrigger: p,
    className: m,
    ..._
  }) {
    let b = u(s2), y = (void 0 !== e2 ? "string" != typeof e2 ? [...e2] : e2.replace(/\+\+$/, "+plus").split("+").filter(Boolean) : "string" == typeof t2 ? [t2] : []).map(
      (e3) => (function e4(t3, { platform: a3 }) {
        let r2 = t3.trim(), n2 = r2.toLowerCase(), s3 = "mac" === a3;
        switch (n2) {
          case "mod":
            return s3 ? e4("meta", { platform: a3 }) : e4("ctrl", { platform: a3 });
          case "meta":
          case "cmd":
          case "command":
          case "win":
          case "super":
            return {
              id: "meta",
              glyph: s3 ? "\u2318" : "Win",
              name: s3 ? "Command" : "Windows",
              modifier: "meta",
              match: o("Meta", "OS")
            };
          case "ctrl":
          case "control":
            return {
              id: "ctrl",
              glyph: s3 ? "\u2303" : "Ctrl",
              name: "Control",
              modifier: "ctrl",
              match: o("Control")
            };
          case "alt":
          case "option":
          case "opt":
            return {
              id: "alt",
              glyph: s3 ? "\u2325" : "Alt",
              name: s3 ? "Option" : "Alt",
              modifier: "alt",
              match: o("Alt")
            };
          case "shift":
            return {
              id: "shift",
              glyph: s3 ? "\u21E7" : "Shift",
              name: "Shift",
              modifier: "shift",
              match: o("Shift")
            };
          case "enter":
          case "return":
            return {
              id: n2,
              glyph: s3 ? "\u21B5" : "Enter",
              name: s3 ? "Return" : "Enter",
              match: o("Enter")
            };
          case "esc":
          case "escape":
            return {
              id: "esc",
              glyph: "Esc",
              name: "Escape",
              match: o("Escape", "Esc")
            };
          case "tab":
            return {
              id: n2,
              glyph: s3 ? "\u21E5" : "Tab",
              name: "Tab",
              match: o("Tab")
            };
          case "backspace":
            return {
              id: n2,
              glyph: s3 ? "\u232B" : "Backspace",
              name: s3 ? "Delete" : "Backspace",
              match: o("Backspace")
            };
          case "delete":
          case "del":
            return {
              id: "delete",
              glyph: s3 ? "\u2326" : "Del",
              name: s3 ? "Forward delete" : "Delete",
              match: o("Delete")
            };
          case "space":
            return {
              id: n2,
              glyph: "Space",
              name: "Space",
              match: l("Space", " ")
            };
          case "up":
          case "arrowup":
            return {
              id: "up",
              glyph: "\u2191",
              name: "Up arrow",
              match: o("ArrowUp")
            };
          case "down":
          case "arrowdown":
            return {
              id: "down",
              glyph: "\u2193",
              name: "Down arrow",
              match: o("ArrowDown")
            };
          case "left":
          case "arrowleft":
            return {
              id: "left",
              glyph: "\u2190",
              name: "Left arrow",
              match: o("ArrowLeft")
            };
          case "right":
          case "arrowright":
            return {
              id: "right",
              glyph: "\u2192",
              name: "Right arrow",
              match: o("ArrowRight")
            };
          case "pageup":
            return {
              id: n2,
              glyph: "PgUp",
              name: "Page up",
              match: o("PageUp")
            };
          case "pagedown":
            return {
              id: n2,
              glyph: "PgDn",
              name: "Page down",
              match: o("PageDown")
            };
          case "home":
            return { id: n2, glyph: "Home", name: "Home", match: o("Home") };
          case "end":
            return { id: n2, glyph: "End", name: "End", match: o("End") };
          case "plus":
            return { id: n2, glyph: "+", name: "Plus", match: o("+", "=") };
          case "capslock":
            return {
              id: n2,
              glyph: s3 ? "\u21EA" : "Caps",
              name: "Caps lock",
              match: o("CapsLock")
            };
        }
        return /^[a-z]$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: l(`Key${n2.toUpperCase()}`, n2, n2.toUpperCase())
        } : /^[0-9]$/.test(n2) ? { id: n2, glyph: n2, name: n2, match: l(`Digit${n2}`, n2) } : /^f([1-9]|1[0-9]|2[0-4])$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: o(n2.toUpperCase())
        } : {
          id: n2,
          glyph: 1 === r2.length ? r2 : r2.charAt(0).toUpperCase() + r2.slice(1),
          name: r2,
          match: (e5) => e5.key.toLowerCase() === n2
        };
      })(e3, { platform: b })
    ), f = y.map((e3) => e3.id).join("+") + b, [w, x] = (0, n.useState)(() => /* @__PURE__ */ new Set()), k = (0, n.useRef)({ parsed: y, onTrigger: p, mac: "mac" === b });
    (0, n.useEffect)(() => {
      k.current = { parsed: y, onTrigger: p, mac: "mac" === b };
    }), (0, n.useEffect)(() => {
      if (!d2) return;
      let e3 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Map(), a3 = () => x(new Set(e3)), r2 = (r3) => {
        window.clearTimeout(t3.get(r3)), t3.delete(r3), e3.delete(r3) && a3();
      }, n2 = () => {
        t3.forEach((e4) => window.clearTimeout(e4)), t3.clear(), e3.size && (e3.clear(), a3());
      }, s3 = (n3) => {
        var s4;
        let { parsed: i3, onTrigger: o2, mac: l2 } = k.current;
        if (!i3.some(
          (e4) => "meta" === e4.modifier || "ctrl" === e4.modifier || "alt" === e4.modifier
        ) && (s4 = n3.target) && s4.tagName && (s4.isContentEditable || "TEXTAREA" === s4.tagName || "SELECT" === s4.tagName || "INPUT" === s4.tagName && ![
          "checkbox",
          "radio",
          "button",
          "submit",
          "range",
          "color"
        ].includes(s4.type)))
          return;
        let d3 = false;
        if (i3.forEach((a4, s5) => {
          a4.match(n3) && (e3.has(s5) || (e3.add(s5), d3 = true), l2 && n3.metaKey && !a4.modifier && (window.clearTimeout(t3.get(s5)), t3.set(
            s5,
            window.setTimeout(() => r2(s5), 170)
          )));
        }), d3 && a3(), !o2 || n3.repeat || !i3.length)
          return;
        let c3 = { meta: false, ctrl: false, alt: false, shift: false };
        i3.forEach((e4) => {
          e4.modifier && (c3[e4.modifier] = true);
        });
        let u2 = i3.filter((e4) => !e4.modifier), h2 = c3.meta === n3.metaKey && c3.ctrl === n3.ctrlKey && c3.alt === n3.altKey && (c3.shift === n3.shiftKey || !c3.shift && 1 === u2.length && 1 === u2[0].glyph.length && !/[a-z0-9]/i.test(u2[0].glyph)), p2 = u2.length ? u2.every((e4) => e4.match(n3)) : i3.some((e4) => e4.match(n3));
        h2 && p2 && (n3.preventDefault(), o2(n3));
      }, i2 = (e4) => {
        let { parsed: t4 } = k.current;
        "Meta" === e4.key || "OS" === e4.key ? n2() : t4.forEach((t5, a4) => {
          t5.match(e4) && r2(a4);
        });
      };
      return window.addEventListener("keydown", s3), window.addEventListener("keyup", i2), window.addEventListener("blur", n2), document.addEventListener("visibilitychange", n2), () => {
        window.removeEventListener("keydown", s3), window.removeEventListener("keyup", i2), window.removeEventListener("blur", n2), document.removeEventListener("visibilitychange", n2), t3.forEach((e4) => window.clearTimeout(e4)), x(/* @__PURE__ */ new Set());
      };
    }, [d2, f]);
    let g = (e3, t3, a3) => (0, r.jsx)(
      "kbd",
      {
        className: i().key,
        "data-pressed": c2 || w.has(a3) ? "" : void 0,
        children: null === t3 ? e3 : (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("span", {
              className: i().glyph,
              "aria-hidden": "true",
              children: e3
            }),
            (0, r.jsx)("span", {
              className: i().hidden,
              children: t3
            })
          ]
        })
      },
      a3
    ), v = [i().kbd, i()[a2], m].filter(Boolean).join(" ");
    if (void 0 === e2) {
      let e3 = y[0], a3 = e3 && e3.glyph !== e3.name;
      return (0, r.jsx)("kbd", {
        ..._,
        className: v,
        children: g(a3 ? e3.glyph : t2, a3 ? e3.name : null, 0)
      });
    }
    return (0, r.jsx)("kbd", {
      ..._,
      className: v,
      children: y.map(
        (e3, t3) => (0, r.jsxs)(
          "span",
          {
            className: i().slot,
            children: [
              t3 > 0 && (0, r.jsx)("span", { className: i().hidden, children: " " }),
              g(e3.glyph, e3.glyph === e3.name ? null : e3.name, t3)
            ]
          },
          `${e3.id}-${t3}`
        )
      )
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("dictation-button", [12053,16376,16504]);
A.item("dictation-button", {entry:5604, export:"DictationButtonDemo", kind:"component", tier:"pro", unresolved:[]});
})();