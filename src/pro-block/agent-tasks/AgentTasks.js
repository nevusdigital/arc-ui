function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { AgentTasks: () => eL, default: () => eP });
  var s = a(95155), n = a(12115), i = a(18310), r = a(80642), l = a(25354), d = a(15480), o = a(38158), c = a(35484), u = a(40852), p = a(92298), h = a(92571), m = a(51811);
  let g = {
    name: "git-pull-request-arrow",
    size: 24,
    node: [
      ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
      ["path", { d: "M5 9v12", key: "ih889a" }],
      ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
      ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]
    ]
  };
  g.node;
  let f = (0, m.A)(g);
  var _ = a(12363), x = a(32159), y = a(15330), k = a(7770), v = a(51288), b = a(76266), j = a(66558), w = a(36690);
  function N({ title: e2 = "Claude", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function A({ title: e2 = "OpenAI", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  function C({ title: e2 = "GitHub", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      })
    });
  }
  function R({ title: e2 = "Gemini", ...t2 }) {
    let a2 = (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: "#3186FF"
        }),
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-0-${a2})`
        }),
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-1-${a2})`
        }),
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-2-${a2})`
        }),
        (0, s.jsxs)("defs", {
          children: [
            (0, s.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `lobe-icons-gemini-0-${a2}`,
              x1: "7",
              x2: "11",
              y1: "15.5",
              y2: "12",
              children: [
                (0, s.jsx)("stop", { stopColor: "#08B962" }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "#08B962",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, s.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `lobe-icons-gemini-1-${a2}`,
              x1: "8",
              x2: "11.5",
              y1: "5.5",
              y2: "11",
              children: [
                (0, s.jsx)("stop", { stopColor: "#F94543" }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "#F94543",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, s.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `lobe-icons-gemini-2-${a2}`,
              x1: "3.5",
              x2: "17.5",
              y1: "13.5",
              y2: "12",
              children: [
                (0, s.jsx)("stop", { stopColor: "#FABC12" }),
                (0, s.jsx)("stop", {
                  offset: ".46",
                  stopColor: "#FABC12",
                  stopOpacity: "0"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  var S = a(57793), T = a(28245), M = a(92171), $ = a(50981), z = a(69203);
  let E = {
    name: "shield-ellipsis",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "M8 12h.01", key: "czm47f" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }],
      ["path", { d: "M16 12h.01", key: "1l6xoz" }]
    ]
  };
  E.node;
  let I = (0, m.A)(E);
  var L = a(59103), P = a(64962), O = a(94890), D = a(48329), F = a(81290), B = a(64577), q = a(44354);
  let U = {
    name: "file-minus",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M9 15h6", key: "cctwl0" }]
    ]
  };
  U.node;
  let V = (0, m.A)(U);
  var H = a(36455), Y = a(54776), W = a.n(Y);
  let { spring: K, duration: G, ease: Q } = k.T, Z = { type: "spring", visualDuration: 0.24, bounce: 0 }, J = [...Q.enter], X = (...e2) => e2.filter(Boolean).join(" ");
  function ee(e2) {
    let t2 = Math.max(0, Math.floor(e2 / 1e3));
    if (t2 < 60) return `${t2}s`;
    let a2 = Math.floor(t2 / 60);
    if (a2 < 60) return t2 % 60 ? `${a2}m ${t2 % 60}s` : `${a2}m`;
    let s2 = Math.floor(a2 / 60);
    return `${s2}h ${a2 % 60}m`;
  }
  function et(e2) {
    let t2 = Math.max(0, Math.floor(e2 / 1e3)), a2 = [], s2 = Math.floor(t2 / 3600), n2 = Math.floor(t2 % 3600 / 60), i2 = t2 % 60;
    return s2 && a2.push(`${s2} hour${1 === s2 ? "" : "s"}`), n2 && a2.push(`${n2} minute${1 === n2 ? "" : "s"}`), s2 || !i2 && a2.length || a2.push(`${i2} second${1 === i2 ? "" : "s"}`), a2.join(" ");
  }
  let ea = (e2) => "queued" === e2 || "setting-up" === e2 || "running" === e2;
  function es({ id: e2, children: t2, className: a2, align: d2 = "start" }) {
    let o2 = (0, i.I)() ?? false, c2 = (0, n.useRef)(null), u2 = (0, T.d)("auto"), p2 = (0, n.useRef)(e2), h2 = (0, n.useRef)(0);
    return (0, n.useLayoutEffect)(() => {
      p2.current !== e2 && (p2.current = e2, h2.current = performance.now() + 600);
    }, [e2]), (0, n.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = false, a3 = new ResizeObserver(([a4]) => {
        let s2 = a4?.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth;
        if (!t3 || o2 || performance.now() > h2.current) {
          t3 = s2 > 0, u2.jump(s2 || "auto");
          return;
        }
        (0, M.i)(u2, s2, Z);
      });
      return a3.observe(e3), () => a3.disconnect();
    }, [o2, u2]), (0, s.jsx)(l.PY1.span, {
      className: X(W().swap, a2),
      "data-align": d2,
      style: { width: u2 },
      children: (0, s.jsx)("span", {
        ref: c2,
        className: W().swapContent,
        children: (0, s.jsx)(r.N, {
          mode: "popLayout",
          initial: false,
          children: (0, s.jsx)(
            l.PY1.span,
            {
              className: W().swapItem,
              initial: { opacity: 0, y: 2 * !o2 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, transition: { duration: 0.1 * !o2 } },
              transition: { duration: o2 ? G.instant : G.fast, ease: J },
              children: t2
            },
            e2
          )
        })
      })
    });
  }
  function en({ id: e2, children: t2, className: a2 }) {
    let n2 = (0, i.I)() ?? false;
    return (0, s.jsx)("span", {
      className: X(W().fade, a2),
      children: (0, s.jsx)(r.N, {
        initial: false,
        children: (0, s.jsx)(
          l.PY1.span,
          {
            className: W().fadeItem,
            initial: { opacity: 0, y: 2 * !n2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: 0.1 * !n2 } },
            transition: { duration: n2 ? G.instant : G.fast, ease: J },
            children: t2
          },
          e2
        )
      })
    });
  }
  let ei = {
    enter: (e2) => ({ y: `${0.7 * e2}em`, opacity: 0 }),
    center: {
      y: 0,
      opacity: 1,
      transition: { ...Z, opacity: { duration: G.fast } }
    },
    exit: (e2) => ({
      y: `${-0.7 * e2}em`,
      opacity: 0,
      transition: { duration: G.instant }
    })
  }, er = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: G.instant } },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function el({ value: e2 }) {
    let t2 = (0, i.I)() ?? false, [a2, d2] = (0, n.useState)(e2), [o2, c2] = (0, n.useState)(1);
    return a2 !== e2 && (d2(e2), c2(e2 > a2 ? 1 : -1)), (0, s.jsxs)("span", {
      className: W().count,
      children: [
        (0, s.jsx)("span", { className: W().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          className: W().countClip,
          "aria-hidden": "true",
          children: (0, s.jsx)(r.N, {
            mode: "popLayout",
            initial: false,
            custom: o2,
            children: (0, s.jsx)(
              l.PY1.span,
              {
                custom: o2,
                variants: t2 ? er : ei,
                initial: "enter",
                animate: "center",
                exit: "exit",
                children: e2
              },
              e2
            )
          })
        })
      ]
    });
  }
  function ed({ text: e2, live: t2 }) {
    let a2 = (0, i.I)() ?? false;
    return (0, s.jsx)("span", {
      className: W().live,
      children: (0, s.jsx)(r.N, {
        initial: false,
        children: (0, s.jsx)(
          l.PY1.span,
          {
            className: X(W().liveText, t2 && W().shimmer),
            title: e2,
            initial: { opacity: 0, y: 3 * !a2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: 0.1 * !a2 } },
            transition: { duration: a2 ? G.instant : G.fast, ease: J },
            children: e2
          },
          e2
        )
      })
    });
  }
  function eo({ model: e2, className: t2 }) {
    let a2 = { className: X(W().mark, t2), "aria-hidden": true, title: void 0 };
    return e2?.provider === "anthropic" ? (0, s.jsx)(N, { ...a2, className: X(W().mark, W().claude, t2) }) : e2?.provider === "openai" ? (0, s.jsx)(A, { ...a2 }) : e2?.provider === "google" ? (0, s.jsx)(R, { ...a2 }) : (0, s.jsx)("span", {
      className: X(W().mark, W().markLetter, t2),
      "aria-hidden": "true",
      children: e2?.short[0] ?? "?"
    });
  }
  function ec({ files: e2 }) {
    let { additions: t2, deletions: a2 } = (function(e3 = []) {
      return e3.reduce(
        (e4, t3) => ({
          additions: e4.additions + t3.additions,
          deletions: e4.deletions + t3.deletions
        }),
        { additions: 0, deletions: 0 }
      );
    })(e2), n2 = t2 + a2 || 1, i2 = Math.round(t2 / n2 * 100);
    return (0, s.jsxs)("span", {
      className: W().diff,
      children: [
        (0, s.jsxs)("span", {
          className: W().srOnly,
          children: [
            t2,
            " lines added, ",
            a2,
            " removed, ",
            e2.length,
            " ",
            1 === e2.length ? "file" : "files",
            " changed"
          ]
        }),
        (0, s.jsxs)("span", {
          className: W().diffNumbers,
          "aria-hidden": "true",
          children: [
            (0, s.jsxs)("span", { className: W().add, children: ["+", t2] }),
            (0, s.jsxs)("span", { className: W().del, children: ["\u2212", a2] })
          ]
        }),
        (0, s.jsxs)("span", {
          className: W().diffBar,
          "aria-hidden": "true",
          children: [
            i2 > 0 ? (0, s.jsx)("span", {
              className: W().diffAdd,
              style: { flexGrow: i2 }
            }) : null,
            i2 < 100 ? (0, s.jsx)("span", {
              className: W().diffDel,
              style: { flexGrow: 100 - i2 }
            }) : null
          ]
        }),
        (0, s.jsxs)("span", {
          className: W().diffFiles,
          "aria-hidden": "true",
          children: [e2.length, " ", 1 === e2.length ? "file" : "files"]
        })
      ]
    });
  }
  function eu({ checks: e2 }) {
    if ("passed" === e2.state)
      return (0, s.jsxs)("span", {
        className: W().fact,
        "data-tone": "success",
        children: [
          (0, s.jsx)($.A, { "aria-hidden": "true" }),
          (0, s.jsx)("span", { children: "Checks passed" })
        ]
      });
    if ("failed" === e2.state) {
      let t2 = e2.failed ?? 1;
      return (0, s.jsxs)("span", {
        className: W().fact,
        "data-tone": "danger",
        children: [
          (0, s.jsx)(z.A, { "aria-hidden": "true" }),
          (0, s.jsxs)("span", {
            children: [t2, " ", 1 === t2 ? "check" : "checks", " failed"]
          })
        ]
      });
    }
    return (0, s.jsxs)("span", {
      className: W().fact,
      children: [
        (0, s.jsx)(I, { "aria-hidden": "true" }),
        (0, s.jsx)("span", { children: "Checks running" })
      ]
    });
  }
  let ep = {
    queued: "Queued",
    "setting-up": "Setting up environment",
    running: "Running",
    ready: "Ready for review",
    failed: "Failed",
    cancelled: "Cancelled",
    merged: "Merged"
  }, eh = (e2) => ep[e2];
  function em({ status: e2 }) {
    switch (e2) {
      case "queued":
        return (0, s.jsx)(L.A, { "aria-hidden": "true" });
      case "setting-up":
      case "running":
        return (0, s.jsx)(h.A, { className: W().spin, "aria-hidden": "true" });
      case "ready":
        return (0, s.jsx)(P.A, { "aria-hidden": "true" });
      case "failed":
        return (0, s.jsx)(O.A, { "aria-hidden": "true" });
      case "cancelled":
        return (0, s.jsx)(D.A, { "aria-hidden": "true" });
      case "merged":
        return (0, s.jsx)(F.A, { "aria-hidden": "true" });
    }
  }
  function eg({ state: e2 }) {
    return "done" === e2 ? (0, s.jsx)(B.A, { "aria-hidden": "true" }) : "failed" === e2 ? (0, s.jsx)(O.A, { "aria-hidden": "true" }) : "stopped" === e2 ? (0, s.jsx)(u.A, { "aria-hidden": "true" }) : (0, s.jsx)(h.A, { className: W().spin, "aria-hidden": "true" });
  }
  let ef = {
    done: "Done",
    active: "In progress",
    failed: "Failed",
    stopped: "Stopped"
  };
  function e_({ steps: e2, reduced: t2 }) {
    return e2.length ? (0, s.jsx)("ol", {
      className: W().steps,
      children: (0, s.jsx)(r.N, {
        initial: false,
        children: e2.map(
          (e3, a2) => (0, s.jsxs)(
            l.PY1.li,
            {
              className: W().step,
              "data-state": e3.state,
              initial: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              transition: t2 ? { duration: G.instant } : {
                ...K.smooth,
                opacity: { duration: G.standard, ease: J }
              },
              children: [
                (0, s.jsxs)("span", {
                  className: W().stepRow,
                  children: [
                    (0, s.jsx)("span", {
                      className: W().stepIcon,
                      children: (0, s.jsx)(eg, { state: e3.state })
                    }),
                    (0, s.jsxs)("span", {
                      className: W().srOnly,
                      children: [ef[e3.state], ": "]
                    }),
                    (0, s.jsx)("span", {
                      className: W().stepText,
                      children: e3.text
                    }),
                    void 0 !== e3.seconds && "active" !== e3.state ? (0, s.jsx)("span", {
                      className: W().stepTime,
                      children: ee(1e3 * e3.seconds)
                    }) : null
                  ]
                }),
                e3.detail ? (0, s.jsx)("span", {
                  className: W().stepDetail,
                  children: e3.detail
                }) : null
              ]
            },
            `${a2}-${e3.text}`
          )
        )
      })
    }) : (0, s.jsx)("p", {
      className: W().quiet,
      children: "Waiting for a runner"
    });
  }
  function ex({ change: e2 }) {
    return "added" === e2 ? (0, s.jsx)(q.A, { "aria-hidden": "true" }) : "deleted" === e2 ? (0, s.jsx)(V, { "aria-hidden": "true" }) : (0, s.jsx)(H.A, { "aria-hidden": "true" });
  }
  let ey = { added: "Added", deleted: "Deleted", modified: "Modified" };
  function ek({ files: e2 }) {
    return (0, s.jsx)("ul", {
      className: W().files,
      children: e2.map((e3) => {
        let t2 = e3.path.lastIndexOf("/");
        return (0, s.jsxs)(
          "li",
          {
            className: W().file,
            "data-change": e3.change ?? "modified",
            children: [
              (0, s.jsx)("span", {
                className: W().fileIcon,
                children: (0, s.jsx)(ex, { change: e3.change })
              }),
              (0, s.jsxs)("span", {
                className: W().srOnly,
                children: [ey[e3.change ?? "modified"], ": "]
              }),
              (0, s.jsxs)("span", {
                className: W().path,
                title: e3.path,
                children: [
                  t2 > 0 ? (0, s.jsx)("span", {
                    className: W().dir,
                    children: e3.path.slice(0, t2 + 1)
                  }) : null,
                  (0, s.jsx)("span", {
                    className: W().base,
                    children: e3.path.slice(t2 + 1)
                  })
                ]
              }),
              (0, s.jsxs)("span", {
                className: W().fileStat,
                children: [
                  (0, s.jsxs)("span", {
                    className: W().add,
                    children: ["+", e3.additions]
                  }),
                  (0, s.jsxs)("span", {
                    className: W().del,
                    children: ["\u2212", e3.deletions]
                  })
                ]
              })
            ]
          },
          e3.path
        );
      })
    });
  }
  function ev({ label: e2, value: t2, options: a2, onChange: n2, icon: i2 }) {
    let r2 = a2.find((e3) => e3.value === t2) ?? a2[0];
    return (0, s.jsxs)(S.bL, {
      modal: false,
      children: [
        (0, s.jsxs)(S.l9, {
          className: W().chip,
          "aria-label": `${e2}: ${r2?.label ?? "none"}`,
          children: [
            (0, s.jsx)(es, {
              id: t2,
              children: (0, s.jsxs)("span", {
                className: W().chipValue,
                children: [
                  r2?.icon ?? i2,
                  (0, s.jsx)("span", {
                    className: W().chipText,
                    children: r2?.label
                  })
                ]
              })
            }),
            (0, s.jsx)(_.A, {
              className: W().chipChevron,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, s.jsx)(S.ZL, {
          children: (0, s.jsxs)(S.UC, {
            className: W().menu,
            align: "start",
            sideOffset: 6,
            collisionPadding: 12,
            loop: true,
            children: [
              (0, s.jsx)(S.JU, { className: W().menuLabel, children: e2 }),
              (0, s.jsx)(S.z6, {
                value: t2,
                onValueChange: n2,
                children: a2.map(
                  (e3) => (0, s.jsxs)(
                    S.hN,
                    {
                      value: e3.value,
                      className: W().menuItem,
                      children: [
                        (0, s.jsx)("span", {
                          className: W().menuIcon,
                          "aria-hidden": "true",
                          children: e3.icon ?? i2
                        }),
                        (0, s.jsx)("span", {
                          className: W().menuText,
                          children: e3.label
                        }),
                        (0, s.jsx)(S.VF, {
                          className: W().menuCheck,
                          children: (0, s.jsx)(B.A, { "aria-hidden": "true" })
                        })
                      ]
                    },
                    e3.value
                  )
                )
              })
            ]
          })
        })
      ]
    });
  }
  let eb = [
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      short: "Opus 5.5",
      provider: "anthropic"
    },
    {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      short: "Sonnet 5.5",
      provider: "anthropic"
    },
    {
      id: "claude-fable-5-1",
      name: "Claude Fable 5.1",
      short: "Fable 5.1",
      provider: "anthropic"
    },
    {
      id: "gpt-6-1-sol",
      name: "GPT-6.1 Sol",
      short: "GPT-6.1 Sol",
      provider: "openai"
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      short: "Gemini 4 Argon",
      provider: "google"
    }
  ], ej = [
    {
      name: "arc-ui/web",
      branches: ["main", "release/2026-10", "next"],
      defaultBranch: "main"
    },
    {
      name: "arc-ui/api",
      branches: ["main", "staging"],
      defaultBranch: "main"
    },
    {
      name: "arc-ui/billing",
      branches: ["main", "stripe-migration"],
      defaultBranch: "main"
    },
    { name: "arc-ui/docs", branches: ["main"], defaultBranch: "main" }
  ], ew = [
    {
      match: /rate[- ]?limit|throttl|\blimits?\b/i,
      script: () => ({
        steps: [
          { live: "Reading src/server.ts", done: "Read src/server.ts" },
          {
            live: "Reading src/middleware/auth.ts",
            done: "Read src/middleware/auth.ts"
          },
          {
            live: "Writing src/middleware/rate-limit.ts",
            done: "Added a sliding window limiter"
          },
          {
            live: "Writing tests for limit headers",
            done: "Wrote 9 tests for limits and headers"
          },
          { live: "Running tests", done: "Ran pnpm test, all passed" }
        ],
        files: [
          {
            path: "src/middleware/rate-limit.ts",
            additions: 61,
            deletions: 0,
            change: "added"
          },
          {
            path: "src/middleware/rate-limit.test.ts",
            additions: 44,
            deletions: 0,
            change: "added"
          },
          {
            path: "src/server.ts",
            additions: 5,
            deletions: 1,
            change: "modified"
          }
        ]
      })
    },
    {
      match: /webhook|\bretr(y|ies)\b|backoff/i,
      script: () => ({
        steps: [
          {
            live: "Reading packages/webhooks/src/sender.ts",
            done: "Read packages/webhooks/src/sender.ts"
          },
          {
            live: "Reading packages/webhooks/src/sender.test.ts",
            done: "Read the failing test"
          },
          {
            live: "Using fake timers in the retry test",
            done: "Switched the retry test to fake timers"
          },
          { live: "Running tests", done: "Ran pnpm test, 148 passed" }
        ],
        files: [
          {
            path: "packages/webhooks/src/sender.ts",
            additions: 52,
            deletions: 14,
            change: "modified"
          },
          {
            path: "packages/webhooks/src/backoff.ts",
            additions: 27,
            deletions: 0,
            change: "added"
          },
          {
            path: "packages/webhooks/src/sender.test.ts",
            additions: 9,
            deletions: 6,
            change: "modified"
          }
        ]
      })
    },
    {
      match: /flaky|failing test|\bci\b/i,
      script: () => ({
        steps: [
          {
            live: "Searching for waitForPayment",
            done: "Searched for waitForPayment"
          },
          {
            live: "Reading src/checkout/payment.ts",
            done: "Read src/checkout/payment.ts"
          },
          {
            live: "Reading src/checkout/payment.test.ts",
            done: "Read src/checkout/payment.test.ts"
          },
          {
            live: "Replacing the fixed timeout with a polled assertion",
            done: "Replaced the fixed timeout with a polled assertion"
          },
          {
            live: "Running tests 20 times in a row",
            done: "Ran the checkout tests 20 times, all passed"
          },
          {
            live: "Running lint and typecheck",
            done: "Ran pnpm lint and typecheck"
          }
        ],
        files: [
          {
            path: "src/checkout/payment.test.ts",
            additions: 14,
            deletions: 9,
            change: "modified"
          },
          {
            path: "src/test/wait-for.ts",
            additions: 19,
            deletions: 0,
            change: "added"
          },
          {
            path: "vitest.config.ts",
            additions: 1,
            deletions: 1,
            change: "modified"
          }
        ]
      })
    },
    {
      match: /upgrade|bump|update|dependenc|version/i,
      script: () => ({
        steps: [
          { live: "Reading package.json", done: "Read package.json" },
          { live: "Updating pnpm-lock.yaml", done: "Updated the lockfile" },
          { live: "Running typecheck", done: "Ran pnpm typecheck, 7 errors" },
          {
            live: "Fixing type errors in src/lib",
            done: "Fixed 7 type errors in src/lib"
          },
          { live: "Running tests", done: "Ran pnpm test, all passed" }
        ],
        files: [
          {
            path: "package.json",
            additions: 2,
            deletions: 2,
            change: "modified"
          },
          {
            path: "pnpm-lock.yaml",
            additions: 26,
            deletions: 31,
            change: "modified"
          },
          {
            path: "src/lib/client.ts",
            additions: 12,
            deletions: 15,
            change: "modified"
          },
          {
            path: "src/lib/errors.ts",
            additions: 8,
            deletions: 4,
            change: "modified"
          }
        ]
      })
    }
  ], { spring: eN, duration: eA, ease: eC } = k.T, eR = [...eC.standard], eS = {
    all: {
      title: "No tasks yet",
      body: "Describe a task above. An agent works on it in the background and comes back with a branch to review."
    },
    running: {
      title: "Nothing running",
      body: "Started tasks show here while an agent works on them."
    },
    review: {
      title: "Nothing to review",
      body: "Finished runs wait here until you open a pull request."
    },
    merged: {
      title: "Nothing merged yet",
      body: "Pull requests from agent runs land here once they merge."
    }
  };
  function eT(e2) {
    let t2 = e2.split("\n").find((e3) => e3.trim())?.trim().replace(/\s+/g, " ") ?? "", a2 = t2.length > 110 ? `${t2.slice(0, 107).trimEnd()}\u2026` : t2;
    return a2.charAt(0).toUpperCase() + a2.slice(1);
  }
  function eM(e2) {
    var t2, a2;
    let s2 = (t2 = e2.title, a2 = e2.repo, (ew.find((e3) => e3.match.test(t2))?.script ?? (() => ({
      steps: [
        {
          live: "Reading the repository layout",
          done: "Read the repository layout"
        },
        {
          live: "Reading src/billing/invoice.ts",
          done: "Read src/billing/invoice.ts"
        },
        {
          live: "Editing src/billing/invoice.ts",
          done: "Edited src/billing/invoice.ts"
        },
        { live: "Running tests", done: "Ran pnpm test, all passed" },
        {
          live: "Running lint and typecheck",
          done: "Ran pnpm lint and typecheck"
        }
      ],
      files: [
        {
          path: "src/billing/invoice.ts",
          additions: 34,
          deletions: 11,
          change: "modified"
        },
        {
          path: "src/billing/invoice.test.ts",
          additions: 22,
          deletions: 3,
          change: "modified"
        }
      ]
    })))(a2));
    return {
      phases: [
        {
          live: `Cloning ${e2.repo}`,
          done: `Cloned ${e2.repo} at ${e2.baseBranch ?? "main"}`,
          ms: 900,
          status: "setting-up"
        },
        {
          live: "Installing dependencies",
          done: "Installed dependencies with pnpm",
          ms: 1500,
          status: "setting-up"
        },
        ...s2.steps.map((e3, t3) => ({
          ...e3,
          ms: 1150 + 389 * t3 % 700,
          status: "running"
        }))
      ],
      files: s2.files
    };
  }
  function e$(e2, t2) {
    let { phases: a2, files: s2 } = eM(e2), n2 = [], i2 = (e3, t3) => n2.push({
      delay: t3,
      apply: (t4) => {
        let s3 = a2[e3], n3 = a2[e3 - 1], i3 = (t4.steps ?? []).map(
          (e4) => "active" === e4.state ? {
            ...e4,
            text: n3?.done ?? e4.text,
            state: "done",
            seconds: Math.max(1, Math.round((n3?.ms ?? 1e3) / 1e3))
          } : e4
        );
        return {
          ...t4,
          status: s3.status,
          step: "setting-up" === s3.status ? "Setting up environment" : s3.live,
          steps: [...i3, { text: s3.live, state: "active" }]
        };
      }
    });
    t2 < 0 && i2(0, 1100);
    for (let e3 = Math.max(1, t2 + 1); e3 < a2.length; e3++) i2(e3, a2[e3 - 1].ms);
    let r2 = a2[a2.length - 1];
    return n2.push({
      delay: r2.ms,
      announce: `${e2.title} is ready for review.`,
      apply: (e3, t3) => ({
        ...e3,
        status: "ready",
        step: void 0,
        finishedAt: t3,
        steps: (e3.steps ?? []).map(
          (e4) => "active" === e4.state ? {
            ...e4,
            text: r2.done,
            state: "done",
            seconds: Math.max(1, Math.round(r2.ms / 1e3))
          } : e4
        ),
        files: s2,
        checks: { state: "passed" }
      })
    }), n2;
  }
  function ez({ repositories: e2, models: t2, onSubmit: a2, textareaRef: u2 }) {
    let p2 = (0, n.useId)(), [h2, m2] = (0, n.useState)(""), [g2, f2] = (0, n.useState)(e2[0]?.name ?? ""), _2 = e2.find((e3) => e3.name === g2) ?? e2[0], [x2, y2] = (0, n.useState)(_2?.defaultBranch ?? _2?.branches[0] ?? "main"), [k2, j2] = (0, n.useState)(t2[0]?.id ?? ""), [w2, N2] = (0, n.useState)(false), [A2, R2] = (0, n.useState)(""), S2 = (0, i.I)() ?? false, T2 = h2.trim().length > 0 && !w2;
    (0, n.useLayoutEffect)(() => {
      let e3 = u2.current;
      e3 && (e3.style.height = "auto", e3.style.height = `${Math.min(e3.scrollHeight, 168)}px`);
    }, [h2, u2]);
    let M2 = async (e3) => {
      if (e3?.preventDefault(), !T2) return;
      N2(true), R2("");
      let t3 = await a2({ prompt: h2.trim(), repo: g2, branch: x2, model: k2 });
      N2(false), t3 ? m2("") : R2("Could not start the task. Check the connection and try again.");
    };
    return (0, s.jsxs)("form", {
      className: W().composer,
      onSubmit: M2,
      "aria-label": "New task",
      children: [
        (0, s.jsxs)("div", {
          className: W().field,
          children: [
            (0, s.jsx)("label", {
              className: W().srOnly,
              htmlFor: `${p2}-prompt`,
              children: "Describe a task"
            }),
            (0, s.jsx)("textarea", {
              ref: u2,
              id: `${p2}-prompt`,
              className: W().textarea,
              rows: 2,
              placeholder: "Describe a task",
              value: h2,
              "aria-describedby": A2 ? `${p2}-error` : void 0,
              onChange: (e3) => {
                m2(e3.target.value), A2 && R2("");
              },
              onKeyDown: (e3) => {
                "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && (e3.preventDefault(), M2());
              }
            }),
            (0, s.jsxs)("div", {
              className: W().bar,
              children: [
                (0, s.jsxs)("div", {
                  className: W().pickers,
                  children: [
                    (0, s.jsx)(ev, {
                      label: "Repository",
                      value: g2,
                      onChange: (t3) => {
                        let a3 = e2.find((e3) => e3.name === t3);
                        f2(t3), y2(a3?.defaultBranch ?? a3?.branches[0] ?? "main");
                      },
                      icon: (0, s.jsx)(C, {
                        className: W().mark,
                        "aria-hidden": "true"
                      }),
                      options: e2.map((e3) => ({ value: e3.name, label: e3.name }))
                    }),
                    (0, s.jsx)(ev, {
                      label: "Branch",
                      value: x2,
                      onChange: y2,
                      icon: (0, s.jsx)(d.A, {
                        className: W().lucideMark,
                        "aria-hidden": "true"
                      }),
                      options: (_2?.branches ?? [x2]).map((e3) => ({
                        value: e3,
                        label: e3
                      }))
                    }),
                    (0, s.jsx)(ev, {
                      label: "Model",
                      value: k2,
                      onChange: j2,
                      options: t2.map((e3) => ({
                        value: e3.id,
                        label: e3.short,
                        icon: (0, s.jsx)(eo, { model: e3 })
                      }))
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: W().submit,
                  children: [
                    (0, s.jsx)(b.ue, {
                      keys: "mod+enter",
                      size: "sm",
                      className: W().hint,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsxs)(v.$, {
                      type: "submit",
                      size: "sm",
                      className: W().start,
                      disabled: !h2.trim(),
                      loading: w2,
                      children: [
                        (0, s.jsx)("span", {
                          className: W().startText,
                          children: "Start"
                        }),
                        (0, s.jsx)(o.A, {
                          className: W().startIcon,
                          "aria-hidden": "true"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsx)(r.N, {
          initial: false,
          children: A2 ? (0, s.jsxs)(
            l.PY1.p,
            {
              id: `${p2}-error`,
              className: W().composerError,
              role: "alert",
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: S2 ? { duration: 0 } : eN.smooth,
              children: [(0, s.jsx)(c.A, { "aria-hidden": "true" }), A2]
            },
            "error"
          ) : null
        })
      ]
    });
  }
  function eE({
    task: e2,
    model: t2,
    now: a2,
    open: i2,
    fresh: r2,
    pullRequest: o2,
    prPhase: c2,
    reduced: m2,
    onToggle: g2,
    onCancel: x2,
    onRetry: y2,
    onArchive: k2,
    onCreatePullRequest: v2
  }) {
    let b2 = (0, n.useId)(), j2 = ea(e2.status), w2 = (e2.finishedAt ?? Math.max(a2, e2.startedAt)) - e2.startedAt, N2 = e2.files ?? [], A2 = e2.steps ?? [], R2 = m2 ? { duration: 0 } : eN.smooth, S2 = "creating" === c2, T2 = (0, s.jsxs)("span", {
      className: W().status,
      "data-status": e2.status,
      children: [
        (0, s.jsx)(em, { status: e2.status }),
        (0, s.jsx)("span", { children: eh(e2.status) })
      ]
    });
    ("running" === e2.status || "setting-up" === e2.status) && (T2 = (0, s.jsxs)("span", {
      className: W().status,
      "data-status": e2.status,
      children: [
        (0, s.jsx)(em, { status: e2.status }),
        (0, s.jsxs)("span", {
          className: W().srOnly,
          children: [eh(e2.status), ": "]
        }),
        (0, s.jsx)(ed, { text: e2.step ?? eh(e2.status), live: !m2 })
      ]
    }));
    let M2 = null;
    "queued" === e2.status ? M2 = (0, s.jsx)("span", {
      className: W().quietFact,
      children: "Waiting for a runner"
    }) : "failed" === e2.status ? M2 = (0, s.jsx)("span", {
      className: W().reason,
      children: e2.error ?? "The run stopped with an error"
    }) : ("ready" === e2.status || "merged" === e2.status) && N2.length && (M2 = (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(ec, { files: N2 }),
        e2.checks ? (0, s.jsx)(eu, { checks: e2.checks }) : null
      ]
    }));
    let $2 = "none", z2 = null;
    return j2 ? ($2 = "cancel", z2 = (0, s.jsxs)("button", {
      type: "button",
      className: W().action,
      "data-focus": "cancel",
      onClick: x2,
      "aria-label": `Cancel ${e2.title}`,
      children: [(0, s.jsx)(u.A, { "aria-hidden": "true" }), "Cancel"]
    })) : "failed" === e2.status || "cancelled" === e2.status ? ($2 = "retry", z2 = (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsxs)("button", {
          type: "button",
          className: W().action,
          "data-focus": "retry",
          onClick: y2,
          "aria-label": `Retry ${e2.title}`,
          children: [
            (0, s.jsx)(p.A, { "aria-hidden": "true" }),
            "Retry"
          ]
        }),
        (0, s.jsx)(eI, { title: e2.title, onArchive: k2 })
      ]
    })) : ("ready" === e2.status || "merged" === e2.status) && ($2 = o2 ? `pr-${o2.number}` : "create", z2 = (0, s.jsxs)(s.Fragment, {
      children: [
        o2 ? o2.url ? (0, s.jsxs)("a", {
          className: W().prChip,
          href: o2.url,
          target: "_blank",
          rel: "noreferrer",
          "data-focus": "pr",
          children: [
            (0, s.jsx)(C, {
              className: W().mark,
              "aria-hidden": "true"
            }),
            "PR #",
            o2.number,
            "merged" === o2.state ? null : " open"
          ]
        }) : (0, s.jsxs)("span", {
          className: W().prChip,
          children: [
            (0, s.jsx)(C, {
              className: W().mark,
              "aria-hidden": "true"
            }),
            "PR #",
            o2.number,
            "merged" === o2.state ? null : " open"
          ]
        }) : (0, s.jsx)("button", {
          type: "button",
          className: W().primary,
          "data-focus": "create",
          "aria-busy": S2 || void 0,
          "aria-disabled": S2 || void 0,
          onClick: () => {
            S2 || v2();
          },
          children: (0, s.jsx)(es, {
            id: S2 ? "creating" : "failed" === c2 ? "again" : "create",
            children: (0, s.jsxs)("span", {
              className: W().primaryLabel,
              children: [
                S2 ? (0, s.jsx)(h.A, {
                  className: W().spin,
                  "aria-hidden": "true"
                }) : (0, s.jsx)(f, { "aria-hidden": "true" }),
                S2 ? "Creating pull request" : "failed" === c2 ? "Try again" : "Create pull request"
              ]
            })
          })
        }),
        (0, s.jsx)(eI, { title: e2.title, onArchive: k2 })
      ]
    })), (0, s.jsxs)(l.PY1.li, {
      className: W().card,
      "data-task-id": e2.id,
      "data-open": i2 || void 0,
      "data-fresh": r2 || void 0,
      "data-status": e2.status,
      initial: m2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: m2 ? { opacity: 0, transition: { duration: eA.instant } } : {
        opacity: 0,
        height: 0,
        transition: {
          ...eN.smooth,
          opacity: { duration: eA.fast, ease: eR }
        }
      },
      transition: m2 ? { duration: eA.fast } : { ...eN.smooth, opacity: { duration: eA.standard, ease: eR } },
      children: [
        (0, s.jsxs)("div", {
          className: W().summary,
          children: [
            (0, s.jsxs)("button", {
              type: "button",
              className: W().toggle,
              "data-focus": "toggle",
              "aria-expanded": i2,
              "aria-controls": b2,
              onClick: g2,
              children: [
                (0, s.jsxs)("span", {
                  className: W().titleRow,
                  children: [
                    (0, s.jsx)("span", {
                      className: W().title,
                      children: e2.title
                    }),
                    (0, s.jsx)("span", {
                      className: W().time,
                      "aria-hidden": "true",
                      suppressHydrationWarning: true,
                      children: ee(w2)
                    }),
                    (0, s.jsx)("span", {
                      className: W().srOnly,
                      suppressHydrationWarning: true,
                      children: j2 ? `, running for ${et(w2)}` : `, took ${et(w2)}`
                    }),
                    (0, s.jsx)(_.A, {
                      className: W().chevron,
                      "data-open": i2 || void 0,
                      "aria-hidden": "true"
                    })
                  ]
                }),
                (0, s.jsxs)("span", {
                  className: W().meta,
                  children: [
                    (0, s.jsxs)("span", {
                      className: W().metaItem,
                      children: [
                        (0, s.jsx)(C, {
                          className: W().mark,
                          "aria-hidden": "true"
                        }),
                        (0, s.jsx)("span", {
                          className: W().metaText,
                          children: e2.repo
                        })
                      ]
                    }),
                    (0, s.jsxs)("span", {
                      className: X(W().metaItem, W().metaBranch),
                      children: [
                        (0, s.jsx)(d.A, {
                          className: W().lucideMark,
                          "aria-hidden": "true"
                        }),
                        (0, s.jsx)("span", {
                          className: W().metaText,
                          children: e2.branch
                        })
                      ]
                    }),
                    (0, s.jsxs)("span", {
                      className: W().metaItem,
                      children: [
                        (0, s.jsx)(eo, { model: t2 }),
                        (0, s.jsx)("span", {
                          className: W().metaText,
                          children: t2?.short ?? e2.model
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: W().stateRow,
              "data-actions": "cancel" === $2 ? "compact" : "wide",
              children: [
                (0, s.jsx)(en, {
                  id: e2.status,
                  className: W().stateFade,
                  children: (0, s.jsxs)("span", {
                    className: W().stateLine,
                    children: [T2, M2]
                  })
                }),
                z2 ? (0, s.jsx)(es, {
                  id: $2,
                  align: "end",
                  className: W().actionsSwap,
                  children: (0, s.jsx)("span", {
                    className: W().actions,
                    children: z2
                  })
                }) : null
              ]
            })
          ]
        }),
        (0, s.jsx)(l.PY1.div, {
          id: b2,
          className: W().clip,
          initial: false,
          animate: { height: i2 ? "auto" : 0, opacity: +!!i2 },
          transition: R2,
          inert: !i2 || void 0,
          children: (0, s.jsxs)("div", {
            className: W().details,
            "data-files": N2.length > 0 || void 0,
            children: [
              (0, s.jsxs)("section", {
                className: W().section,
                "aria-labelledby": `${b2}-steps`,
                children: [
                  (0, s.jsx)("span", {
                    id: `${b2}-steps`,
                    className: W().sectionTitle,
                    children: "Steps"
                  }),
                  (0, s.jsx)(e_, { steps: A2, reduced: m2 })
                ]
              }),
              N2.length ? (0, s.jsxs)("section", {
                className: W().section,
                "aria-labelledby": `${b2}-files`,
                children: [
                  (0, s.jsxs)("span", {
                    id: `${b2}-files`,
                    className: W().sectionTitle,
                    children: [
                      "Changed files",
                      (0, s.jsx)("span", {
                        className: W().sectionCount,
                        children: N2.length
                      })
                    ]
                  }),
                  (0, s.jsx)(ek, { files: N2 })
                ]
              }) : null
            ]
          })
        })
      ]
    });
  }
  function eI({ title: e2, onArchive: t2 }) {
    return (0, s.jsx)(w.m, {
      content: "Archive",
      children: (0, s.jsx)("button", {
        type: "button",
        className: W().iconAction,
        "data-focus": "archive",
        onClick: t2,
        "aria-label": `Archive ${e2}`,
        children: (0, s.jsx)(x.A, { "aria-hidden": "true" })
      })
    });
  }
  function eL({
    tasks: e2,
    repositories: t2 = ej,
    models: a2 = eb,
    onStart: d2,
    onCreatePullRequest: o2,
    onCancel: c2,
    onRetry: u2,
    onArchive: p2,
    defaultFilter: h2 = "all",
    className: m2
  }) {
    let g2 = void 0 !== e2, f2 = (0, i.I)() ?? false, [_2] = (0, n.useState)(() => {
      let e3 = Date.now();
      return {
        base: e3,
        tasks: [
          {
            id: "task-flaky-checkout",
            title: "Fix the flaky checkout test in CI",
            repo: "arc-ui/web",
            branch: "fix/flaky-checkout-test",
            model: "claude-opus-5-5",
            status: "running",
            startedAt: e3 - 112e3,
            step: "Reading src/checkout/payment.test.ts",
            steps: [
              {
                text: "Cloned arc-ui/web at main",
                state: "done",
                seconds: 4
              },
              {
                text: "Installed dependencies with pnpm",
                state: "done",
                seconds: 38
              },
              {
                text: "Searched for waitForPayment",
                state: "done",
                seconds: 2
              },
              {
                text: "Read src/checkout/payment.ts",
                state: "done",
                seconds: 6
              },
              {
                text: "Reading src/checkout/payment.test.ts",
                state: "active"
              }
            ]
          },
          {
            id: "task-rate-limit",
            title: "Add rate limiting to the public API",
            repo: "arc-ui/api",
            branch: "feat/api-rate-limit",
            model: "claude-sonnet-5-5",
            status: "ready",
            startedAt: e3 - 246e4,
            finishedAt: e3 - 206e4,
            steps: [
              {
                text: "Cloned arc-ui/api at main",
                state: "done",
                seconds: 3
              },
              {
                text: "Installed dependencies with pnpm",
                state: "done",
                seconds: 41
              },
              {
                text: "Read src/server.ts and src/middleware",
                state: "done",
                seconds: 9
              },
              {
                text: "Added a sliding window limiter keyed by API key",
                state: "done",
                seconds: 132
              },
              {
                text: "Wrote 12 tests for limits and headers",
                state: "done",
                seconds: 96
              },
              {
                text: "Ran pnpm test, 148 passed",
                state: "done",
                seconds: 64
              },
              {
                text: "Ran pnpm lint and typecheck",
                state: "done",
                seconds: 55
              }
            ],
            files: [
              {
                path: "src/middleware/rate-limit.ts",
                additions: 68,
                deletions: 0,
                change: "added"
              },
              {
                path: "src/middleware/rate-limit.test.ts",
                additions: 31,
                deletions: 0,
                change: "added"
              },
              {
                path: "src/server.ts",
                additions: 6,
                deletions: 2,
                change: "modified"
              },
              {
                path: "src/config/limits.ts",
                additions: 11,
                deletions: 0,
                change: "added"
              },
              {
                path: "src/routes/public/index.ts",
                additions: 4,
                deletions: 9,
                change: "modified"
              },
              {
                path: "src/lib/redis.ts",
                additions: 3,
                deletions: 7,
                change: "modified"
              },
              {
                path: "docs/api/rate-limits.md",
                additions: 2,
                deletions: 0,
                change: "modified"
              }
            ],
            checks: { state: "passed" }
          },
          {
            id: "task-zod-upgrade",
            title: "Upgrade zod to v4 and fix the schema types",
            repo: "arc-ui/web",
            branch: "chore/zod-v4",
            model: "gpt-6-1-sol",
            status: "ready",
            startedAt: e3 - 91e5,
            finishedAt: e3 - 824e4,
            steps: [
              {
                text: "Cloned arc-ui/web at main",
                state: "done",
                seconds: 4
              },
              {
                text: "Installed dependencies with pnpm",
                state: "done",
                seconds: 39
              },
              {
                text: "Bumped zod from 3.25 to 4.1",
                state: "done",
                seconds: 12
              },
              {
                text: "Fixed 31 type errors across 19 schemas",
                state: "done",
                seconds: 488
              },
              {
                text: "Ran pnpm test, 412 passed",
                state: "done",
                seconds: 211
              },
              { text: "Ran pnpm typecheck", state: "done", seconds: 106 }
            ],
            files: [
              {
                path: "package.json",
                additions: 1,
                deletions: 1,
                change: "modified"
              },
              {
                path: "pnpm-lock.yaml",
                additions: 18,
                deletions: 22,
                change: "modified"
              },
              {
                path: "src/schemas/checkout.ts",
                additions: 46,
                deletions: 51,
                change: "modified"
              },
              {
                path: "src/schemas/account.ts",
                additions: 38,
                deletions: 40,
                change: "modified"
              },
              {
                path: "src/schemas/invoice.ts",
                additions: 29,
                deletions: 33,
                change: "modified"
              },
              {
                path: "src/lib/forms/resolver.ts",
                additions: 22,
                deletions: 17,
                change: "modified"
              },
              {
                path: "src/schemas/errors.ts",
                additions: 64,
                deletions: 0,
                change: "added"
              },
              {
                path: "src/schemas/legacy-messages.ts",
                additions: 0,
                deletions: 58,
                change: "deleted"
              }
            ],
            checks: { state: "passed" },
            pullRequest: { number: 479, state: "open" }
          },
          {
            id: "task-webhook-retry",
            title: "Retry failed webhook deliveries with backoff",
            repo: "arc-ui/billing",
            branch: "feat/webhook-backoff",
            model: "gemini-4-argon",
            status: "failed",
            startedAt: e3 - 148e5,
            finishedAt: e3 - 1439e4,
            error: "2 of 148 tests failed in packages/webhooks",
            steps: [
              {
                text: "Cloned arc-ui/billing at main",
                state: "done",
                seconds: 3
              },
              {
                text: "Installed dependencies with pnpm",
                state: "done",
                seconds: 44
              },
              {
                text: "Added exponential backoff to the delivery queue",
                state: "done",
                seconds: 174
              },
              {
                text: "Ran pnpm test",
                state: "failed",
                seconds: 188,
                detail: "sender.test.ts: retries a 503 within 30 seconds timed out after 5000 ms"
              }
            ],
            files: [
              {
                path: "packages/webhooks/src/sender.ts",
                additions: 52,
                deletions: 14,
                change: "modified"
              },
              {
                path: "packages/webhooks/src/backoff.ts",
                additions: 27,
                deletions: 0,
                change: "added"
              }
            ],
            checks: { state: "failed", failed: 2 }
          },
          {
            id: "task-invoices-v1",
            title: "Remove the deprecated invoices v1 endpoint",
            repo: "arc-ui/api",
            branch: "chore/remove-invoices-v1",
            model: "claude-opus-5-5",
            status: "merged",
            startedAt: e3 - 178e6,
            finishedAt: e3 - 17746e4,
            steps: [
              {
                text: "Cloned arc-ui/api at main",
                state: "done",
                seconds: 3
              },
              {
                text: "Installed dependencies with pnpm",
                state: "done",
                seconds: 40
              },
              {
                text: "Found 6 callers of /v1/invoices",
                state: "done",
                seconds: 18
              },
              {
                text: "Removed the route, handlers and fixtures",
                state: "done",
                seconds: 241
              },
              {
                text: "Ran pnpm test, 139 passed",
                state: "done",
                seconds: 72
              }
            ],
            files: [
              {
                path: "src/routes/v1/invoices.ts",
                additions: 0,
                deletions: 318,
                change: "deleted"
              },
              {
                path: "src/routes/v1/invoices.test.ts",
                additions: 0,
                deletions: 204,
                change: "deleted"
              },
              {
                path: "src/routes/index.ts",
                additions: 2,
                deletions: 9,
                change: "modified"
              },
              {
                path: "test/fixtures/invoices-v1.json",
                additions: 0,
                deletions: 96,
                change: "deleted"
              },
              {
                path: "docs/api/changelog.md",
                additions: 10,
                deletions: 0,
                change: "modified"
              }
            ],
            checks: { state: "passed" },
            pullRequest: { number: 476, state: "merged" }
          }
        ]
      };
    }), [x2, k2] = (0, n.useState)(_2.tasks), [v2, b2] = (0, n.useState)(_2.base), [w2, N2] = (0, n.useState)(h2), [A2, C2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [R2, S2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [T2, M2] = (0, n.useState)(null), [$2, z2] = (0, n.useState)(null), [E2, I2] = (0, n.useState)({}), [L2, P2] = (0, n.useState)({}), [O2, D2] = (0, n.useState)(""), F2 = (0, n.useRef)(null), B2 = (0, n.useRef)(null), q2 = (0, n.useRef)(/* @__PURE__ */ new Map()), U2 = (0, n.useRef)(null), V2 = (0, n.useRef)(482), H2 = (0, n.useRef)(0), Y2 = g2 ? e2 : x2, K2 = (0, n.useMemo)(() => Y2.filter((e3) => !R2.has(e3.id)), [Y2, R2]), G2 = K2.filter((e3) => {
      let t3;
      return t3 = e3.status, "all" === w2 || ("running" === w2 ? ea(t3) : "review" === w2 ? "ready" === t3 : "merged" === t3);
    }), Q2 = {
      all: K2.length,
      running: K2.filter((e3) => ea(e3.status)).length,
      review: K2.filter((e3) => "ready" === e3.status).length,
      merged: K2.filter((e3) => "merged" === e3.status).length
    }, Z2 = K2.some((e3) => ea(e3.status));
    (0, n.useEffect)(() => {
      if (!Z2) return;
      let e3 = window.setInterval(() => b2(Date.now()), 1e3);
      return () => window.clearInterval(e3);
    }, [Z2]);
    let J2 = (0, n.useCallback)((e3) => D2(e3), []), ee2 = (0, n.useCallback)((e3) => {
      window.clearTimeout(q2.current.get(e3)), q2.current.delete(e3);
    }, []), et2 = (0, n.useCallback)(
      (e3, t3) => {
        ee2(e3);
        let a3 = 0, s2 = () => {
          let n2 = t3[a3++];
          n2 ? q2.current.set(
            e3,
            window.setTimeout(() => {
              let t4 = Date.now();
              k2((a4) => a4.map((a5) => a5.id === e3 ? n2.apply(a5, t4) : a5)), n2.announce && J2(n2.announce), s2();
            }, n2.delay)
          ) : q2.current.delete(e3);
        };
        s2();
      },
      [J2, ee2]
    );
    (0, n.useEffect)(() => {
      if (g2) return;
      let e3 = q2.current;
      return _2.tasks.forEach((e4) => {
        let t3;
        if (!ea(e4.status)) return;
        let a3 = (t3 = e4.steps?.find((e5) => "active" === e5.state)?.text) ? eM(e4).phases.findIndex((e5) => e5.live === t3) : -1;
        a3 >= 0 && et2(e4.id, e$(e4, a3));
      }), () => {
        e3.forEach((e4) => window.clearTimeout(e4)), e3.clear();
      };
    }, [g2, _2, et2]), (0, n.useEffect)(() => () => window.clearTimeout(H2.current), []), (0, n.useEffect)(() => {
      if (!$2) return;
      let e3 = window.setTimeout(() => z2(null), 2e3);
      return () => window.clearTimeout(e3);
    }, [$2]), (0, n.useEffect)(() => {
      let e3 = U2.current;
      if (!e3) return;
      U2.current = null;
      let t3 = F2.current;
      if ("composer" === e3.id) return void B2.current?.focus();
      let a3 = t3?.querySelector(`[data-task-id="${CSS.escape(e3.id)}"]`), s2 = a3?.querySelector(`[data-focus="${e3.target}"]`) ?? a3?.querySelector('[data-focus="toggle"]');
      s2?.focus({ preventScroll: true });
    });
    let es2 = async (e3) => {
      let t3;
      if (g2) {
        try {
          await d2?.(e3);
        } catch {
          return false;
        }
        return J2(`Started ${eT(e3.prompt)} on ${e3.repo}.`), true;
      }
      try {
        await d2?.(e3);
      } catch {
        return false;
      }
      let a3 = eT(e3.prompt), s2 = {
        id: `task-${Date.now().toString(36)}`,
        title: a3,
        repo: e3.repo,
        branch: (t3 = a3.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter(
          (e4) => e4 && ![
            "the",
            "a",
            "an",
            "to",
            "and",
            "in",
            "of",
            "for",
            "on"
          ].includes(e4)
        ), `agent/${t3.slice(0, 4).join("-") || "task"}`),
        baseBranch: e3.branch,
        model: e3.model,
        status: "queued",
        startedAt: Date.now(),
        steps: []
      };
      return k2((e4) => [s2, ...e4]), b2(Date.now()), ("review" === w2 || "merged" === w2) && N2("all"), z2(s2.id), J2(
        `Started ${s2.title} on ${s2.repo}. The agent run is simulated in this preview.`
      ), et2(s2.id, e$(s2, -1)), true;
    }, en2 = (e3) => {
      let t3 = G2.findIndex((t4) => t4.id === e3.id), a3 = G2[t3 + 1] ?? G2[t3 - 1];
      U2.current = a3 ? { id: a3.id, target: "toggle" } : { id: "composer", target: "" };
    }, ei2 = async (e3) => {
      P2((t3) => ({ ...t3, [e3.id]: "creating" }));
      try {
        let t3 = o2 ? await o2(e3) : await new Promise(
          (e4) => window.setTimeout(
            () => e4({ number: V2.current++, state: "open" }),
            1100
          )
        );
        F2.current?.querySelector(
          `[data-task-id="${CSS.escape(e3.id)}"] [data-focus="create"]`
        ) === document.activeElement && (U2.current = { id: e3.id, target: "toggle" }), I2((a3) => ({ ...a3, [e3.id]: { state: "open", ...t3 } })), P2((t4) => {
          let a3 = { ...t4 };
          return delete a3[e3.id], a3;
        }), J2(
          o2 ? `Opened pull request #${t3.number} for ${e3.title}.` : `Opened pull request #${t3.number} for ${e3.title}. Simulated in this preview.`
        );
      } catch {
        P2((t3) => ({ ...t3, [e3.id]: "failed" })), J2(`Could not open a pull request for ${e3.title}. Try again.`);
      }
    }, er2 = [
      {
        value: "all",
        label: "All",
        accessory: (0, s.jsx)(el, { value: Q2.all })
      },
      {
        value: "running",
        label: "Running",
        accessory: (0, s.jsx)(el, { value: Q2.running })
      },
      {
        value: "review",
        label: "Ready for review",
        accessory: (0, s.jsx)(el, { value: Q2.review })
      },
      {
        value: "merged",
        label: "Merged",
        accessory: (0, s.jsx)(el, { value: Q2.merged })
      }
    ], ed2 = eS[w2];
    return (0, s.jsx)("div", {
      ref: F2,
      className: X(W().root, m2),
      children: (0, s.jsxs)("div", {
        className: W().panel,
        children: [
          (0, s.jsx)(ez, {
            repositories: t2,
            models: a2,
            onSubmit: es2,
            textareaRef: B2
          }),
          (0, s.jsx)("div", {
            className: W().toolbar,
            children: (0, s.jsx)(j.A, {
              label: "Filter tasks",
              options: er2,
              value: w2,
              onValueChange: (e3) => N2(e3),
              className: W().filters
            })
          }),
          (0, s.jsx)("ul", {
            className: W().list,
            "aria-label": "Tasks",
            children: (0, s.jsxs)(r.N, {
              initial: false,
              children: [
                G2.map((e3) => {
                  let t3;
                  return (0, s.jsx)(
                    eE,
                    {
                      task: e3,
                      model: (t3 = e3.model, a2.find((e4) => e4.id === t3) ?? eb.find((e4) => e4.id === t3)),
                      now: v2,
                      reduced: f2,
                      open: A2.has(e3.id),
                      fresh: $2 === e3.id,
                      pullRequest: e3.pullRequest ?? E2[e3.id],
                      prPhase: L2[e3.id],
                      onToggle: () => {
                        let t4;
                        return t4 = e3.id, C2((e4) => {
                          let a3 = new Set(e4);
                          return a3.has(t4) ? a3.delete(t4) : a3.add(t4), a3;
                        });
                      },
                      onCancel: () => ((e4) => {
                        if ("running" === w2 ? en2(e4) : U2.current = { id: e4.id, target: "retry" }, c2?.(e4), g2)
                          return;
                        ee2(e4.id);
                        let t4 = Date.now();
                        k2(
                          (a3) => a3.map(
                            (a4) => a4.id === e4.id ? {
                              ...a4,
                              status: "cancelled",
                              step: void 0,
                              finishedAt: t4,
                              steps: (a4.steps ?? []).map(
                                (e5) => "active" === e5.state ? { ...e5, state: "stopped" } : e5
                              )
                            } : a4
                          )
                        ), J2(`Cancelled ${e4.title}.`);
                      })(e3),
                      onRetry: () => ((e4) => {
                        if (U2.current = { id: e4.id, target: "cancel" }, u2?.(e4), g2)
                          return;
                        let t4 = {
                          ...e4,
                          status: "queued",
                          startedAt: Date.now(),
                          finishedAt: void 0,
                          step: void 0,
                          steps: [],
                          files: void 0,
                          checks: void 0,
                          error: void 0,
                          pullRequest: void 0
                        };
                        k2((a3) => a3.map((a4) => a4.id === e4.id ? t4 : a4)), b2(Date.now()), J2(
                          `Retrying ${e4.title}. The agent run is simulated in this preview.`
                        ), et2(e4.id, e$(t4, -1));
                      })(e3),
                      onArchive: () => {
                        en2(e3), p2?.(e3), S2((t4) => new Set(t4).add(e3.id)), M2({ id: e3.id, title: e3.title }), J2(`Archived ${e3.title}.`), window.clearTimeout(H2.current), H2.current = window.setTimeout(() => M2(null), 6e3);
                      },
                      onCreatePullRequest: () => void ei2(e3)
                    },
                    e3.id
                  );
                }),
                0 === G2.length ? (0, s.jsxs)(
                  l.PY1.li,
                  {
                    className: W().empty,
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { duration: eA.fast, delay: 0.12 * !f2 }
                    },
                    exit: { opacity: 0, transition: { duration: 0.1 } },
                    children: [
                      (0, s.jsx)("span", {
                        className: W().emptyTitle,
                        children: ed2.title
                      }),
                      (0, s.jsx)("span", {
                        className: W().emptyBody,
                        children: ed2.body
                      })
                    ]
                  },
                  `empty-${w2}`
                ) : null
              ]
            })
          }),
          (0, s.jsx)(r.N, {
            initial: false,
            children: T2 ? (0, s.jsx)(
              l.PY1.div,
              {
                className: W().clip,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: f2 ? { duration: 0 } : { ...eN.smooth, opacity: { duration: eA.fast } },
                children: (0, s.jsxs)("div", {
                  className: W().undo,
                  children: [
                    (0, s.jsxs)("span", {
                      className: W().undoText,
                      children: [
                        "Archived ",
                        (0, s.jsx)("span", {
                          className: W().undoTitle,
                          children: T2.title
                        })
                      ]
                    }),
                    (0, s.jsxs)("button", {
                      type: "button",
                      className: W().action,
                      onClick: () => {
                        T2 && (S2((e3) => {
                          let t3 = new Set(e3);
                          return t3.delete(T2.id), t3;
                        }), U2.current = { id: T2.id, target: "toggle" }, J2(`Restored ${T2.title}.`), M2(null), window.clearTimeout(H2.current));
                      },
                      children: [
                        (0, s.jsx)(y.A, { "aria-hidden": "true" }),
                        "Undo"
                      ]
                    })
                  ]
                })
              },
              "undo"
            ) : null
          }),
          (0, s.jsx)("p", {
            className: W().srOnly,
            role: "status",
            "aria-live": "polite",
            children: O2
          })
        ]
      })
    });
  }
  let eP = eL;
}

__m(__module,__exports,__require);
}