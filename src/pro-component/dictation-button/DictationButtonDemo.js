function(__module,__exports,__require){
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
}