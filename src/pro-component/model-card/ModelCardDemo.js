function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { ModelCardDemo: () => ey, default: () => eN });
  var n = t(95155), r = t(12115), s = t(92298), i = t(51288), l = t(66558), o = t(79196), c = t(25354), d = t(18310), m = t(80642), u = t(92171), p = t(61792), h = t(14929), x = t(86210), _ = t(36483), b = t(92437), f = t(12980), g = t(57990), j = t(5045), v = t(64577), y = t(35484), N = t(73474), w = t(60466), k = t(94274), C = t(50680), S = t(7770);
  let $ = (0, n.jsx)(
    function({ title: e2 = "Claude", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", {
          d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        })
      });
    },
    { "aria-hidden": true, style: { color: "#D97757" } }
  ), M = [
    {
      id: "swe-bench",
      name: "SWE-bench Verified",
      shortName: "SWE-bench",
      description: "real GitHub issues resolved"
    },
    {
      id: "gpqa",
      name: "GPQA Diamond",
      shortName: "GPQA",
      description: "graduate level science questions"
    },
    {
      id: "terminal-bench",
      name: "Terminal-Bench 2.0",
      shortName: "Terminal-Bench",
      description: "agentic tasks in a real terminal"
    }
  ], T = {
    opus: {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      provider: "Anthropic",
      mark: $,
      summary: "Anthropic's most capable model for long running agents, complex coding and deep research.",
      modalities: ["text", "image", "pdf", "tools", "reasoning"],
      contextWindow: 1e6,
      maxOutput: 128e3,
      knowledgeCutoff: "2026-03",
      pricing: { input: 5, output: 25, cachedInput: 0.5 },
      scores: { "swe-bench": 86.4, gpqa: 89.2, "terminal-bench": 68.3 }
    },
    sonnet: {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      provider: "Anthropic",
      mark: $,
      summary: "The balanced Claude for everyday coding, agents and analysis at scale.",
      modalities: ["text", "image", "pdf", "tools", "reasoning"],
      contextWindow: 1e6,
      maxOutput: 64e3,
      knowledgeCutoff: "2026-03",
      pricing: { input: 3, output: 15, cachedInput: 0.3 },
      scores: { "swe-bench": 82.1, gpqa: 85.4, "terminal-bench": 61.7 }
    },
    haiku: {
      id: "claude-haiku-5-5",
      name: "Claude Haiku 5.5",
      provider: "Anthropic",
      mark: $,
      summary: "The fastest Claude, for real time chat, sub-agents and high volume tasks.",
      modalities: ["text", "image", "tools"],
      contextWindow: 4e5,
      maxOutput: 64e3,
      knowledgeCutoff: "2026-02",
      pricing: { input: 1, output: 5, cachedInput: 0.1 },
      scores: { "swe-bench": 74.6, gpqa: 76.8, "terminal-bench": 48.2 }
    },
    gpt: {
      id: "gpt-6.1-sol",
      name: "GPT-6.1 Sol",
      provider: "OpenAI",
      mark: (0, n.jsx)(
        function({ title: e2 = "OpenAI", ...a2 }) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            role: "img",
            "aria-label": e2,
            ...a2,
            children: (0, n.jsx)("path", {
              d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
            })
          });
        },
        { "aria-hidden": true }
      ),
      summary: "OpenAI's flagship reasoning model for coding, agents and multimodal work.",
      modalities: ["text", "image", "audio", "tools", "reasoning"],
      contextWindow: 1e6,
      maxOutput: 128e3,
      knowledgeCutoff: "2026-01",
      pricing: { input: 4, output: 24, cachedInput: 0.4 },
      scores: { "swe-bench": 84.1, gpqa: 90.1, "terminal-bench": 63.9 }
    },
    gemini: {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      provider: "Google",
      mark: (0, n.jsx)(
        function({ title: e2 = "Gemini", ...a2 }) {
          let t2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 24 24",
            role: "img",
            "aria-label": e2,
            ...a2,
            children: [
              (0, n.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: "#3186FF"
              }),
              (0, n.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: `url(#lobe-icons-gemini-0-${t2})`
              }),
              (0, n.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: `url(#lobe-icons-gemini-1-${t2})`
              }),
              (0, n.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: `url(#lobe-icons-gemini-2-${t2})`
              }),
              (0, n.jsxs)("defs", {
                children: [
                  (0, n.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `lobe-icons-gemini-0-${t2}`,
                    x1: "7",
                    x2: "11",
                    y1: "15.5",
                    y2: "12",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "#08B962" }),
                      (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: "#08B962",
                        stopOpacity: "0"
                      })
                    ]
                  }),
                  (0, n.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `lobe-icons-gemini-1-${t2}`,
                    x1: "8",
                    x2: "11.5",
                    y1: "5.5",
                    y2: "11",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "#F94543" }),
                      (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: "#F94543",
                        stopOpacity: "0"
                      })
                    ]
                  }),
                  (0, n.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `lobe-icons-gemini-2-${t2}`,
                    x1: "3.5",
                    x2: "17.5",
                    y1: "13.5",
                    y2: "12",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "#FABC12" }),
                      (0, n.jsx)("stop", {
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
        },
        { "aria-hidden": true }
      ),
      summary: "Google's most capable Gemini, with native video and audio understanding.",
      modalities: [
        "text",
        "image",
        "audio",
        "video",
        "pdf",
        "tools",
        "reasoning"
      ],
      contextWindow: 2e6,
      maxOutput: 64e3,
      knowledgeCutoff: "2026-02",
      pricing: { input: 2.5, output: 15, cachedInput: 0.25 },
      scores: { "swe-bench": 82.7, gpqa: 88.5, "terminal-bench": 61.2 }
    },
    grok: {
      id: "grok-4.7",
      name: "Grok 4.7",
      provider: "xAI",
      mark: (0, n.jsx)(
        function({ title: e2 = "Grok", ...a2 }) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            fillRule: "evenodd",
            role: "img",
            "aria-label": e2,
            ...a2,
            children: (0, n.jsx)("path", {
              d: "M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815"
            })
          });
        },
        { "aria-hidden": true }
      ),
      summary: "xAI's frontier model with live search and long context reasoning.",
      modalities: ["text", "image", "tools", "reasoning"],
      contextWindow: 512e3,
      maxOutput: 64e3,
      knowledgeCutoff: "2026-04",
      pricing: { input: 3, output: 15, cachedInput: 0.75 },
      scores: { "swe-bench": 80.9, gpqa: 87.3, "terminal-bench": 57.6 }
    }
  }, O = [T.gpt, T.gemini, T.grok];
  var A = t(92720), L = t.n(A);
  let I = (...e2) => e2.filter(Boolean).join(" "), R = [...S.T.ease.standard], F = { duration: 0.16, ease: R }, W = { duration: 0.1, ease: R }, P = { duration: 0 }, B = { type: "spring", visualDuration: 0.24, bounce: 0 }, E = ["text", "image", "pdf", "audio", "video", "tools", "reasoning"], z = {
    text: { label: "Text", icon: h.A },
    image: { label: "Image", icon: x.A },
    pdf: { label: "PDF", icon: _.A },
    audio: { label: "Audio", icon: b.A },
    video: { label: "Video", icon: f.A },
    tools: { label: "Tools", icon: g.A },
    reasoning: { label: "Reasoning", icon: j.A }
  }, G = [1e6, 5e6, 1e7, 25e6, 5e7, 1e8, 25e7, 5e8, 1e9], V = (e2) => String(Number(e2.toFixed(2)));
  function D(e2) {
    if (void 0 !== e2 && Number.isFinite(e2))
      return e2 >= 1e9 ? `${V(e2 / 1e9)}B` : e2 >= 1e6 ? `${V(e2 / 1e6)}M` : e2 >= 1e3 ? `${V(e2 / 1e3)}K` : String(e2);
  }
  let K = /^(\d{4})-(\d{2})$/;
  function Y(e2) {
    if (!e2) return;
    let a2 = K.exec(e2);
    return a2 ? new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(Date.UTC(Number(a2[1]), Number(a2[2]) - 1, 1))) : e2;
  }
  function q(e2, a2, t2) {
    let n2 = t2 ?? (Math.abs(e2) >= 100 ? 0 : 2);
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: a2,
        minimumFractionDigits: n2,
        maximumFractionDigits: n2
      }).format(e2);
    } catch {
      return e2.toFixed(n2);
    }
  }
  let H = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), U = (e2) => {
    let a2 = e2 ? K.exec(e2) : null;
    return a2 ? 12 * Number(a2[1]) + Number(a2[2]) : void 0;
  };
  function Z(e2, a2, t2) {
    return void 0 === e2 || void 0 === a2 || e2 === a2 ? 0 : e2 > a2 == ("higher" === t2) ? 1 : -1;
  }
  function X(e2, a2, t2) {
    let n2 = e2.pricing;
    if (n2) return a2 / 1e6 * (n2.input * t2 + n2.output * (1 - t2));
  }
  function Q({ as: e2, className: a2, reduced: t2, children: r2 }) {
    let s2 = (0, o.tF)(), i2 = "div" === e2 ? c.PY1.div : c.PY1.span;
    return (0, n.jsx)(i2, {
      className: I(L().swapItem, a2),
      "aria-hidden": !s2 || void 0,
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: 2 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 0, transition: t2 ? P : W },
      transition: t2 ? P : F,
      children: r2
    });
  }
  function J({
    k: e2,
    children: a2,
    as: t2 = "span",
    className: r2,
    itemClassName: s2
  }) {
    let i2 = (0, d.I)() ?? false;
    return (0, n.jsx)(t2, {
      className: I("div" === t2 ? L().swapBlock : L().swap, r2),
      children: (0, n.jsx)(m.N, {
        initial: false,
        children: (0, n.jsx)(
          Q,
          { as: t2, className: s2, reduced: i2, children: a2 },
          e2
        )
      })
    });
  }
  function ee({ value: e2, format: a2, reduced: t2, className: s2 }) {
    let i2 = (0, r.useRef)(null), l2 = (0, r.useRef)(e2), o2 = (0, r.useRef)(a2);
    (0, r.useLayoutEffect)(() => {
      o2.current = a2;
    });
    let [c2] = (0, r.useState)(() => a2(e2));
    return (0, r.useEffect)(() => {
      let a3 = i2.current;
      if (!a3) return;
      let n2 = l2.current;
      if (t2 || n2 === e2) {
        l2.current = e2, a3.textContent = o2.current(e2);
        return;
      }
      let r2 = (0, u.i)(n2, e2, {
        duration: 0.32,
        ease: R,
        onUpdate: (e3) => {
          l2.current = e3, a3.textContent = o2.current(e3);
        }
      });
      return () => r2.stop();
    }, [e2, t2]), (0, r.useEffect)(() => {
      i2.current && l2.current === e2 && (i2.current.textContent = a2(e2));
    }, [a2, e2]), (0, n.jsx)("span", { ref: i2, className: I(L().number, s2), children: c2 });
  }
  function ea({ children: e2, className: a2 }) {
    return (0, n.jsx)("span", {
      className: I(L().mark, a2),
      "aria-hidden": "true",
      children: e2
    });
  }
  function et({ items: e2 }) {
    return (0, n.jsx)("ul", {
      className: L().chips,
      "aria-label": "Modalities",
      children: E.map((a2) => {
        let { label: t2, icon: r2 } = z[a2], s2 = e2.includes(a2);
        return (0, n.jsxs)(
          "li",
          {
            className: L().chip,
            "data-off": s2 ? void 0 : "",
            title: s2 ? void 0 : `${t2} not supported`,
            children: [
              (0, n.jsx)(r2, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              t2,
              (0, n.jsx)("span", {
                className: L().srOnly,
                children: s2 ? ", supported" : ", not supported"
              })
            ]
          },
          a2
        );
      })
    });
  }
  function en({ items: e2 }) {
    let a2 = E.filter((a3) => e2.includes(a3));
    return (0, n.jsxs)("span", {
      className: L().modIcons,
      children: [
        E.map((a3) => {
          let t2 = z[a3].icon;
          return (0, n.jsx)(
            t2,
            {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true",
              "data-off": e2.includes(a3) ? void 0 : ""
            },
            a3
          );
        }),
        (0, n.jsx)("span", {
          className: L().srOnly,
          children: a2.length ? a2.map((e3) => z[e3].label).join(", ") : "Not listed"
        })
      ]
    });
  }
  function er({ label: e2, children: a2 }) {
    return (0, n.jsxs)("div", {
      className: L().spec,
      children: [
        (0, n.jsx)("dt", { className: L().specLabel, children: e2 }),
        (0, n.jsx)("dd", { className: L().specValue, children: a2 })
      ]
    });
  }
  let es = (0, n.jsx)("span", {
    className: L().missing,
    children: "Not listed"
  });
  function ei({
    value: e2,
    primary: a2,
    reduced: t2,
    delay: r2 = 0,
    className: s2
  }) {
    return (0, n.jsx)("span", {
      className: I(L().track, s2),
      "data-primary": a2 || void 0,
      "aria-hidden": "true",
      children: (0, n.jsx)(c.PY1.span, {
        className: L().fill,
        initial: false,
        animate: { scaleX: Math.min(1, Math.max(0, e2)) },
        transition: t2 ? P : { ...B, delay: r2 }
      })
    });
  }
  function el(e2, a2, t2, n2) {
    var r2;
    let s2, i2 = n2.unit ?? "%";
    if (void 0 === e2.score || void 0 === e2.rank)
      return `${e2.model.name} has no ${n2.name} score listed.`;
    let l2 = a2.filter((a3) => void 0 !== a3.score && a3.model.id !== e2.model.id).sort((e3, a3) => (a3.score ?? 0) - (e3.score ?? 0)), o2 = `${e2.model.name} scores ${e2.score.toFixed(1)}${i2}, ${(s2 = (r2 = e2.rank) % 100) >= 11 && s2 <= 13 ? `${r2}th` : `${r2}${["th", "st", "nd", "rd"][r2 % 10] ?? "th"}`} of ${t2}.`;
    if (!l2.length) return o2;
    let c2 = 1 === e2.rank ? l2[0] : a2.find((e3) => 1 === e3.rank) ?? l2[0], d2 = Math.abs(e2.score - (c2.score ?? 0)).toFixed(1);
    return 1 === e2.rank ? `${o2} ${d2} points ahead of ${c2.model.name}.` : `${o2} ${d2} points behind ${c2.model.name}.`;
  }
  function eo({
    model: e2,
    others: a2,
    benchmarks: t2,
    benchmark: s2,
    onBenchmark: i2,
    sample: o2,
    active: c2,
    reduced: d2
  }) {
    let m2 = (0, r.useRef)(null), u2 = (0, p.W)(m2, { once: true, amount: 0.5 }) && c2 || d2, [h2, x2] = (0, r.useState)(false);
    (0, r.useEffect)(() => {
      if (!u2) return;
      let e3 = requestAnimationFrame(() => x2(true));
      return () => cancelAnimationFrame(e3);
    }, [u2]);
    let [_2, b2] = (0, r.useState)(null), f2 = s2.max ?? 100, g2 = s2.unit ?? "%", j2 = [e2, ...a2].map((e3) => e3.scores?.[s2.id]).filter((e3) => void 0 !== e3).sort((e3, a3) => a3 - e3), v2 = [e2, ...a2.slice(0, 2)].map((e3) => {
      let a3 = e3.scores?.[s2.id];
      return {
        model: e3,
        score: a3,
        rank: void 0 === a3 ? void 0 : j2.indexOf(a3) + 1
      };
    }), y2 = null !== _2 ? v2[_2] : void 0, N2 = y2 ? el(y2, v2, j2.length, s2) : `${s2.name}${s2.description ? `, ${s2.description}` : ""}.${o2 ? " Prices and scores are samples, not official." : ""}`;
    return (0, n.jsxs)("section", {
      className: L().section,
      "aria-label": "Benchmarks",
      children: [
        (0, n.jsxs)("div", {
          className: L().sectionHead,
          children: [
            (0, n.jsx)("h4", {
              className: L().sectionTitle,
              children: "Benchmarks"
            }),
            t2.length > 1 && (0, n.jsx)(l.A, {
              label: "Benchmark",
              className: L().benchTabs,
              value: s2.id,
              onValueChange: i2,
              options: t2.map((e3) => ({
                value: e3.id,
                label: e3.shortName ?? e3.name
              }))
            })
          ]
        }),
        (0, n.jsx)("ul", {
          ref: m2,
          className: L().bars,
          "data-hovering": y2 ? "" : void 0,
          onPointerLeave: () => b2(null),
          children: v2.map((e3, a3) => {
            let t3 = 0 === a3, r2 = el(e3, v2, j2.length, s2);
            return (0, n.jsxs)(
              "li",
              {
                className: L().barRow,
                "data-primary": t3 || void 0,
                "data-active": _2 === a3 || void 0,
                tabIndex: c2 ? 0 : -1,
                "aria-label": r2,
                onPointerEnter: () => b2(a3),
                onFocus: () => b2(a3),
                onBlur: () => b2((e4) => e4 === a3 ? null : e4),
                children: [
                  (0, n.jsx)(ea, {
                    className: L().barMark,
                    children: (0, n.jsx)(J, {
                      k: e3.model.id,
                      children: e3.model.mark
                    })
                  }),
                  (0, n.jsx)("span", {
                    className: L().barName,
                    children: (0, n.jsx)(J, {
                      k: e3.model.name,
                      itemClassName: L().ellipsis,
                      children: e3.model.name
                    })
                  }),
                  (0, n.jsx)(ei, {
                    value: u2 && void 0 !== e3.score ? e3.score / f2 : 0,
                    primary: t3,
                    reduced: d2,
                    delay: h2 ? 0 : 0.04 * a3
                  }),
                  (0, n.jsx)("span", {
                    className: L().score,
                    children: void 0 === e3.score ? (0, n.jsx)("span", {
                      className: L().missing,
                      children: "None"
                    }) : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(ee, {
                          value: u2 ? e3.score : 0,
                          format: (e4) => e4.toFixed(1),
                          reduced: d2
                        }),
                        (0, n.jsx)("span", {
                          className: L().unit,
                          children: g2
                        })
                      ]
                    })
                  })
                ]
              },
              a3
            );
          })
        }),
        (0, n.jsx)(J, { as: "div", k: N2, className: L().readout, children: N2 })
      ]
    });
  }
  function ec({
    model: e2,
    currency: a2,
    sample: t2,
    volumeIndex: r2,
    onVolume: s2,
    inputShare: i2,
    reduced: l2,
    active: o2
  }) {
    let c2 = e2.pricing, d2 = X(e2, G[r2], i2), m2 = (e3) => void 0 === e3 ? es : (0, n.jsx)(n.Fragment, {
      children: (0, n.jsx)(ee, {
        value: e3,
        format: (e4) => q(e4, a2, 2),
        reduced: l2
      })
    });
    return (0, n.jsxs)("section", {
      className: L().section,
      "aria-label": "Pricing",
      children: [
        (0, n.jsxs)("dl", {
          className: L().specs,
          children: [
            (0, n.jsx)(er, { label: "Input per 1M", children: m2(c2?.input) }),
            (0, n.jsx)(er, { label: "Output per 1M", children: m2(c2?.output) }),
            (0, n.jsx)(er, {
              label: "Cached per 1M",
              children: m2(c2?.cachedInput)
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: L().estimator,
          children: [
            (0, n.jsx)(k.A, {
              className: L().slider,
              label: "Monthly volume",
              min: 0,
              max: G.length - 1,
              step: 1,
              value: r2,
              onValueChange: s2,
              format: (e3) => `${D(G[Math.round(e3)])} tokens`,
              showValue: true,
              disabled: !o2 || !c2
            }),
            (0, n.jsxs)("div", {
              className: L().estimate,
              children: [
                (0, n.jsx)("span", {
                  className: L().estimateLabel,
                  children: "Estimated cost"
                }),
                (0, n.jsx)("span", {
                  className: L().estimateValue,
                  children: void 0 === d2 ? es : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(ee, {
                        value: d2,
                        format: (e3) => q(e3, a2),
                        reduced: l2,
                        className: L().costNumber
                      }),
                      (0, n.jsx)("span", {
                        className: L().unit,
                        children: "/mo"
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ed({
    model: e2,
    others: a2,
    benchmarks: t2,
    benchmark: r2,
    onBenchmark: s2,
    currency: i2,
    sample: l2,
    volumeIndex: o2,
    onVolume: c2,
    inputShare: d2,
    active: m2,
    reduced: u2
  }) {
    let p2 = Math.max(...[e2, ...a2].map((e3) => e3.contextWindow ?? 0), 1), h2 = e2.contextWindow, x2 = D(h2);
    return (0, n.jsxs)("div", {
      className: L().details,
      children: [
        (0, n.jsx)(J, {
          as: "div",
          k: e2.id,
          className: L().summary,
          children: e2.summary ?? (0, n.jsx)("span", {
            className: L().missing,
            children: "No summary listed."
          })
        }),
        (0, n.jsx)(et, { items: e2.modalities ?? [] }),
        (0, n.jsxs)("div", {
          className: L().limits,
          children: [
            (0, n.jsxs)("dl", {
              className: L().specs,
              children: [
                (0, n.jsx)(er, {
                  label: "Context window",
                  children: (0, n.jsx)(J, {
                    k: x2 ?? "none",
                    children: x2 ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        x2,
                        (0, n.jsx)("span", {
                          className: L().unit,
                          children: " tokens"
                        })
                      ]
                    }) : es
                  })
                }),
                (0, n.jsx)(er, {
                  label: "Max output",
                  children: (0, n.jsx)(J, {
                    k: D(e2.maxOutput) ?? "none",
                    children: e2.maxOutput ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        D(e2.maxOutput),
                        (0, n.jsx)("span", {
                          className: L().unit,
                          children: " tokens"
                        })
                      ]
                    }) : es
                  })
                }),
                (0, n.jsx)(er, {
                  label: "Knowledge cutoff",
                  children: (0, n.jsx)(J, {
                    k: e2.knowledgeCutoff ?? "none",
                    children: Y(e2.knowledgeCutoff) ?? es
                  })
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: L().contextRow,
              children: [
                (0, n.jsx)(ei, {
                  value: h2 ? h2 / p2 : 0,
                  primary: true,
                  reduced: u2,
                  className: L().contextTrack
                }),
                (0, n.jsx)("span", {
                  className: L().pages,
                  children: h2 ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "Fits about ",
                      (0, n.jsx)(ee, {
                        value: Math.round(0.75 * h2 / 500),
                        format: (e3) => H.format(e3),
                        reduced: u2
                      }),
                      " pages"
                    ]
                  }) : es
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(ec, {
          model: e2,
          currency: i2,
          sample: l2,
          volumeIndex: o2,
          onVolume: c2,
          inputShare: d2,
          reduced: u2,
          active: m2
        }),
        r2 && (0, n.jsx)(eo, {
          model: e2,
          others: a2,
          benchmarks: t2,
          benchmark: r2,
          onBenchmark: s2,
          sample: l2,
          active: m2,
          reduced: u2
        })
      ]
    });
  }
  function em(e2, a2, t2) {
    if (void 0 === e2 || void 0 === a2 || e2 === a2) return;
    let n2 = Math.max(e2, a2), r2 = Math.min(e2, a2);
    return "ratio" === t2 ? r2 > 0 && n2 / r2 >= 1.5 ? `${V(n2 / r2)}x` : `+${D(n2 - r2)}` : "points" === t2 ? `+${(n2 - r2).toFixed(1)}` : "months" === t2 ? `+${n2 - r2} mo` : n2 > 0 ? `\u2212${Math.round((n2 - r2) / n2 * 100)}%` : void 0;
  }
  function eu({ show: e2, delta: a2, reduced: t2 }) {
    return (0, n.jsx)("span", {
      className: L().betterSlot,
      children: (0, n.jsx)(m.N, {
        initial: false,
        children: e2 && (0, n.jsxs)(
          c.PY1.span,
          {
            className: L().better,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: t2 ? P : W },
            transition: t2 ? P : F,
            children: [
              (0, n.jsx)(v.A, {
                size: 14,
                strokeWidth: 2,
                "aria-hidden": "true"
              }),
              a2 && (0, n.jsx)("span", { className: L().delta, children: a2 }),
              (0, n.jsxs)("span", {
                className: L().srOnly,
                children: [", better", a2 ? ` by ${a2.replace("\u2212", "")}` : ""]
              })
            ]
          },
          `better-${a2 ?? ""}`
        )
      })
    });
  }
  function ep({
    model: e2,
    other: a2,
    others: t2,
    benchmarks: r2,
    currency: s2,
    sample: i2,
    onPick: l2,
    tokens: o2,
    inputShare: c2,
    active: d2,
    reduced: m2
  }) {
    let u2 = (e3) => {
      let a3 = D(e3);
      return a3 ? (0, n.jsxs)(n.Fragment, {
        children: [
          a3,
          (0, n.jsx)("span", {
            className: L().unit,
            children: " tokens"
          })
        ]
      }) : es;
    }, p2 = (e3) => void 0 === e3 ? es : q(e3, s2, 2), h2 = X(e2, o2, c2), x2 = X(a2, o2, c2), _2 = [
      {
        id: "context",
        label: "Context window",
        a: u2(e2.contextWindow),
        b: u2(a2.contextWindow),
        aKey: `${e2.contextWindow}`,
        bKey: `${a2.contextWindow}`,
        better: Z(e2.contextWindow, a2.contextWindow, "higher"),
        delta: em(e2.contextWindow, a2.contextWindow, "ratio")
      },
      {
        id: "output",
        label: "Max output",
        a: u2(e2.maxOutput),
        b: u2(a2.maxOutput),
        aKey: `${e2.maxOutput}`,
        bKey: `${a2.maxOutput}`,
        better: Z(e2.maxOutput, a2.maxOutput, "higher"),
        delta: em(e2.maxOutput, a2.maxOutput, "ratio")
      },
      {
        id: "cutoff",
        label: "Knowledge cutoff",
        a: Y(e2.knowledgeCutoff) ?? es,
        b: Y(a2.knowledgeCutoff) ?? es,
        aKey: `${e2.knowledgeCutoff}`,
        bKey: `${a2.knowledgeCutoff}`,
        better: Z(U(e2.knowledgeCutoff), U(a2.knowledgeCutoff), "higher"),
        delta: em(U(e2.knowledgeCutoff), U(a2.knowledgeCutoff), "months")
      },
      {
        id: "input",
        label: "Input price",
        a: p2(e2.pricing?.input),
        b: p2(a2.pricing?.input),
        aKey: `${e2.pricing?.input}`,
        bKey: `${a2.pricing?.input}`,
        better: Z(e2.pricing?.input, a2.pricing?.input, "lower"),
        delta: em(e2.pricing?.input, a2.pricing?.input, "cheaper")
      },
      {
        id: "output-price",
        label: "Output price",
        a: p2(e2.pricing?.output),
        b: p2(a2.pricing?.output),
        aKey: `${e2.pricing?.output}`,
        bKey: `${a2.pricing?.output}`,
        better: Z(e2.pricing?.output, a2.pricing?.output, "lower"),
        delta: em(e2.pricing?.output, a2.pricing?.output, "cheaper")
      },
      {
        id: "cost",
        label: `Cost at ${D(o2)}/mo`,
        a: void 0 === h2 ? es : q(h2, s2),
        b: void 0 === x2 ? es : q(x2, s2),
        aKey: `${h2}`,
        bKey: `${x2}`,
        better: Z(h2, x2, "lower"),
        delta: em(h2, x2, "cheaper")
      }
    ];
    for (let t3 of r2) {
      let r3 = e2.scores?.[t3.id], s3 = a2.scores?.[t3.id], i3 = t3.max ?? 100, l3 = t3.unit ?? "%", o3 = (e3, a3) => void 0 === e3 ? es : (0, n.jsxs)("span", {
        className: L().cmpScore,
        children: [
          (0, n.jsxs)("span", {
            className: L().number,
            children: [
              e3.toFixed(1),
              (0, n.jsx)("span", { className: L().unit, children: l3 })
            ]
          }),
          (0, n.jsx)(ei, {
            value: e3 / i3,
            primary: a3,
            reduced: m2,
            className: L().miniTrack
          })
        ]
      });
      _2.push({
        id: t3.id,
        label: t3.shortName ?? t3.name,
        a: o3(r3, true),
        b: o3(s3, false),
        aKey: `${r3}`,
        bKey: `${s3}`,
        better: Z(r3, s3, "higher"),
        delta: em(r3, s3, "points")
      });
    }
    let b2 = _2.filter((e3) => e3.better > 0).length, f2 = _2.filter((e3) => e3.better < 0).length, g2 = b2 === f2 ? `Even: each model leads on ${b2} of ${_2.length}.` : `${b2 > f2 ? e2.name : a2.name} leads on ${Math.max(b2, f2)} of ${_2.length}, ${b2 > f2 ? a2.name : e2.name} on ${Math.min(b2, f2)}.`;
    return (0, n.jsxs)("div", {
      className: L().compare,
      children: [
        (0, n.jsxs)("div", {
          className: L().cmpTable,
          role: "table",
          "aria-label": `${e2.name} compared with ${a2.name}`,
          children: [
            (0, n.jsxs)("div", {
              className: I(L().cmpRow, L().cmpHead),
              role: "row",
              children: [
                (0, n.jsx)("span", {
                  className: L().cmpCorner,
                  role: "columnheader",
                  children: (0, n.jsx)("span", {
                    className: L().srOnly,
                    children: "Spec"
                  })
                }),
                (0, n.jsxs)("div", {
                  className: L().cmpModel,
                  role: "columnheader",
                  children: [
                    (0, n.jsx)(ea, {
                      className: L().cmpMark,
                      children: (0, n.jsx)(J, { k: e2.id, children: e2.mark })
                    }),
                    (0, n.jsx)(J, {
                      k: e2.name,
                      itemClassName: L().ellipsis,
                      children: e2.name
                    })
                  ]
                }),
                (0, n.jsx)("div", {
                  className: L().cmpModel,
                  role: "columnheader",
                  children: t2.length > 1 ? (0, n.jsx)("span", {
                    className: L().picker,
                    inert: !d2,
                    children: (0, n.jsx)(w.r, {
                      label: a2.name,
                      icon: (0, n.jsx)(ea, {
                        className: L().cmpMark,
                        children: a2.mark
                      }),
                      items: t2.map((e3) => ({
                        label: e3.name,
                        icon: (0, n.jsx)(ea, {
                          className: L().cmpMark,
                          children: e3.mark
                        }),
                        onSelect: () => l2(e3.id)
                      }))
                    })
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(ea, {
                        className: L().cmpMark,
                        children: a2.mark
                      }),
                      (0, n.jsx)("span", {
                        className: L().ellipsis,
                        children: a2.name
                      })
                    ]
                  })
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: L().cmpRow,
              role: "row",
              children: [
                (0, n.jsx)("span", {
                  className: L().cmpLabel,
                  role: "rowheader",
                  children: "Modalities"
                }),
                (0, n.jsx)("span", {
                  className: L().cmpCell,
                  role: "cell",
                  children: (0, n.jsx)(en, { items: e2.modalities ?? [] })
                }),
                (0, n.jsx)("span", {
                  className: L().cmpCell,
                  role: "cell",
                  children: (0, n.jsx)(en, { items: a2.modalities ?? [] })
                })
              ]
            }),
            _2.map(
              (t3) => (0, n.jsxs)(
                "div",
                {
                  className: L().cmpRow,
                  role: "row",
                  children: [
                    (0, n.jsx)("span", {
                      className: L().cmpLabel,
                      role: "rowheader",
                      children: t3.label
                    }),
                    (0, n.jsxs)("span", {
                      className: L().cmpCell,
                      role: "cell",
                      "data-better": t3.better > 0 || void 0,
                      children: [
                        (0, n.jsx)(J, {
                          k: `${e2.id}-${t3.aKey}`,
                          className: L().cmpValue,
                          children: t3.a
                        }),
                        (0, n.jsx)(eu, {
                          show: t3.better > 0,
                          delta: t3.delta,
                          reduced: m2
                        })
                      ]
                    }),
                    (0, n.jsxs)("span", {
                      className: L().cmpCell,
                      role: "cell",
                      "data-better": t3.better < 0 || void 0,
                      children: [
                        (0, n.jsx)(J, {
                          k: `${a2.id}-${t3.bKey}`,
                          className: L().cmpValue,
                          children: t3.b
                        }),
                        (0, n.jsx)(eu, {
                          show: t3.better < 0,
                          delta: t3.delta,
                          reduced: m2
                        })
                      ]
                    })
                  ]
                },
                t3.id
              )
            )
          ]
        }),
        (0, n.jsx)(J, { as: "div", k: g2, className: L().tally, children: g2 }),
        (0, n.jsxs)("p", {
          className: L().caption,
          children: [
            "Prices per 1M tokens. Cost assumes ",
            Math.round(100 * c2),
            "% input. A check marks the better value.",
            i2 ? " Sample figures, not official." : ""
          ]
        })
      ]
    });
  }
  function eh() {
    let e2 = (0, n.jsx)("span", {
      className: L().boneGrid,
      children: [0, 1, 2].map(
        (e3) => (0, n.jsxs)(
          "span",
          {
            className: L().boneCell,
            children: [
              (0, n.jsx)("span", {
                className: L().bone,
                style: { width: "56%", height: 10 }
              }),
              (0, n.jsx)("span", {
                className: L().bone,
                style: { width: "44%", height: 14 }
              })
            ]
          },
          e3
        )
      )
    });
    return (0, n.jsxs)("div", {
      className: L().skeleton,
      "aria-hidden": "true",
      children: [
        (0, n.jsxs)("span", {
          className: L().boneLines,
          children: [
            (0, n.jsx)("span", {
              className: L().bone,
              style: { width: "94%", height: 12 }
            }),
            (0, n.jsx)("span", {
              className: L().bone,
              style: { width: "62%", height: 12 }
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: L().boneRow,
          children: [56, 64, 52, 64, 60, 60, 84].map(
            (e3, a2) => (0, n.jsx)(
              "span",
              {
                className: L().bone,
                style: { width: e3, height: 28, borderRadius: 999 }
              },
              a2
            )
          )
        }),
        e2,
        e2,
        [0, 1, 2, 3].map(
          (e3) => (0, n.jsxs)(
            "span",
            {
              className: L().boneBar,
              children: [
                (0, n.jsx)("span", {
                  className: L().bone,
                  style: { width: 16, height: 16, borderRadius: 999 }
                }),
                (0, n.jsx)("span", {
                  className: L().bone,
                  style: { width: 96, height: 10 }
                }),
                (0, n.jsx)("span", {
                  className: L().bone,
                  style: { flex: 1, height: 6 }
                }),
                (0, n.jsx)("span", {
                  className: L().bone,
                  style: { width: 36, height: 10 }
                })
              ]
            },
            e3
          )
        )
      ]
    });
  }
  function ex({ active: e2, reduced: a2, className: t2, children: r2 }) {
    return (0, n.jsx)(c.PY1.div, {
      className: I(L().panel, t2),
      "data-active": e2 || void 0,
      inert: !e2,
      "aria-hidden": !e2 || void 0,
      initial: false,
      animate: { opacity: +!!e2 },
      transition: a2 ? P : e2 ? { ...F, delay: 0.04 } : W,
      children: r2
    });
  }
  function e_({
    model: e2 = T.opus,
    rivals: a2 = O,
    benchmarks: t2 = M,
    view: l2,
    defaultView: o2 = "details",
    onViewChange: c2,
    compareWith: m2,
    defaultCompareWith: u2,
    onCompareWithChange: p2,
    defaultBenchmark: h2,
    onBenchmarkChange: x2,
    defaultMonthlyTokens: _2 = 1e8,
    onMonthlyTokensChange: b2,
    inputShare: f2 = 0.75,
    currency: g2 = "USD",
    sample: j2 = true,
    loading: w2 = false,
    error: k2,
    onRetry: S2,
    onCopyId: $2,
    onSelect: A2,
    selected: R2 = false,
    selectLabel: F2 = "Use model",
    className: W2,
    style: P2
  }) {
    let B2 = (0, d.I)() ?? false, E2 = (0, r.useId)(), z2 = a2.filter((a3) => a3.id !== e2.id), [V2, D2] = (0, r.useState)(o2), K2 = z2.length ? l2 ?? V2 : "details", [Y2, q2] = (0, r.useState)(u2), H2 = z2.find((e3) => e3.id === (m2 ?? Y2)) ?? z2[0], U2 = t2.filter((a3) => e2.scores?.[a3.id] !== void 0), [Z2, X2] = (0, r.useState)(h2), Q2 = U2.find((e3) => e3.id === Z2) ?? U2[0], [ee2, et2] = (0, r.useState)(
      () => G.reduce(
        (e3, a3, t3) => Math.abs(Math.log(a3 / _2)) < Math.abs(Math.log(G[e3] / _2)) ? t3 : e3,
        0
      )
    ), en2 = Math.min(1, Math.max(0, f2)), [er2, es2] = (0, r.useState)(""), ei2 = !w2 && !k2, el2 = ei2 && "compare" === K2 && !!H2, eo2 = ei2 && !el2;
    return (0, n.jsxs)("article", {
      className: I(L().root, W2),
      style: P2,
      "aria-labelledby": E2,
      "aria-busy": w2 || void 0,
      "data-view": K2,
      children: [
        (0, n.jsxs)("header", {
          className: L().header,
          children: [
            (0, n.jsxs)("div", {
              className: L().identitySlot,
              children: [
                (0, n.jsxs)(ex, {
                  active: !w2,
                  reduced: B2,
                  className: L().identity,
                  children: [
                    (0, n.jsx)(ea, {
                      className: L().headMark,
                      children: (0, n.jsx)(J, { k: e2.id, children: e2.mark })
                    }),
                    (0, n.jsxs)("div", {
                      className: L().titles,
                      children: [
                        (0, n.jsx)("h3", {
                          id: E2,
                          className: L().name,
                          children: (0, n.jsx)(J, {
                            k: e2.name,
                            itemClassName: L().ellipsis,
                            children: e2.name
                          })
                        }),
                        (0, n.jsx)("p", {
                          className: L().provider,
                          children: (0, n.jsx)(J, {
                            k: e2.provider,
                            itemClassName: L().ellipsis,
                            children: e2.provider
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)(ex, {
                  active: w2,
                  reduced: B2,
                  className: L().identity,
                  children: [
                    (0, n.jsx)("span", {
                      className: L().bone,
                      style: { width: 28, height: 28, borderRadius: 999 }
                    }),
                    (0, n.jsxs)("div", {
                      className: L().titles,
                      children: [
                        (0, n.jsx)("span", {
                          className: L().bone,
                          style: { width: 132, height: 14 }
                        }),
                        (0, n.jsx)("span", {
                          className: L().bone,
                          style: { width: 72, height: 10 }
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            z2.length > 0 && (0, n.jsx)(C.d, {
              className: L().compareSwitch,
              label: "Compare",
              checked: "compare" === K2,
              disabled: !ei2,
              onCheckedChange: (a3) => {
                var t3;
                return t3 = a3 ? "compare" : "details", void (void 0 === l2 && D2(t3), c2?.(t3), es2(
                  "compare" === t3 && H2 ? `Comparing ${e2.name} with ${H2.name}` : `Showing ${e2.name} details`
                ));
              }
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: L().stage,
          children: [
            (0, n.jsx)(ex, {
              active: eo2,
              reduced: B2,
              children: (0, n.jsx)(ed, {
                model: e2,
                others: z2,
                benchmarks: U2,
                benchmark: Q2,
                onBenchmark: function(e3) {
                  X2(e3), x2?.(e3);
                  let a3 = U2.find((a4) => a4.id === e3);
                  a3 && es2(`Showing ${a3.name} scores`);
                },
                currency: g2,
                sample: j2,
                volumeIndex: ee2,
                onVolume: function(e3) {
                  let a3 = Math.round(e3);
                  a3 !== ee2 && (et2(a3), b2?.(G[a3]));
                },
                inputShare: en2,
                active: eo2,
                reduced: B2
              })
            }),
            H2 && (0, n.jsx)(ex, {
              active: el2,
              reduced: B2,
              children: (0, n.jsx)(ep, {
                model: e2,
                other: H2,
                others: z2,
                benchmarks: U2.length ? U2 : t2,
                currency: g2,
                sample: j2,
                onPick: function(a3) {
                  void 0 === m2 && q2(a3), p2?.(a3);
                  let t3 = z2.find((e3) => e3.id === a3);
                  t3 && es2(`Comparing ${e2.name} with ${t3.name}`);
                },
                tokens: G[ee2],
                inputShare: en2,
                active: el2,
                reduced: B2
              })
            }),
            (0, n.jsx)(ex, {
              active: w2,
              reduced: B2,
              children: (0, n.jsx)(eh, {})
            }),
            (0, n.jsx)(ex, {
              active: !w2 && !!k2,
              reduced: B2,
              children: (0, n.jsxs)("div", {
                className: L().error,
                role: !w2 && k2 ? "alert" : void 0,
                children: [
                  (0, n.jsx)(y.A, {
                    className: L().errorIcon,
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, n.jsxs)("div", {
                    className: L().errorText,
                    children: [
                      (0, n.jsx)("p", {
                        className: L().errorTitle,
                        children: "Couldn't load model details"
                      }),
                      (0, n.jsx)("p", {
                        className: L().errorMessage,
                        children: k2
                      })
                    ]
                  }),
                  S2 && (0, n.jsxs)(i.$, {
                    size: "sm",
                    variant: "secondary",
                    onClick: S2,
                    children: [
                      (0, n.jsx)(s.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Retry"
                    ]
                  })
                ]
              })
            })
          ]
        }),
        (0, n.jsx)("footer", {
          className: L().footer,
          children: (0, n.jsxs)("div", {
            className: L().footerSlot,
            children: [
              (0, n.jsxs)(ex, {
                active: !w2,
                reduced: B2,
                className: L().footerRow,
                children: [
                  (0, n.jsx)("code", {
                    className: L().modelId,
                    title: e2.id,
                    children: (0, n.jsx)(J, {
                      k: e2.id,
                      itemClassName: L().ellipsis,
                      children: e2.id
                    })
                  }),
                  (0, n.jsxs)("span", {
                    className: L().actions,
                    children: [
                      (0, n.jsx)(N.CopyButton, {
                        value: e2.id,
                        label: "Copy model id",
                        onCopied: () => $2?.(e2.id)
                      }),
                      A2 && (0, n.jsx)(i.$, {
                        size: "sm",
                        variant: "primary",
                        "aria-pressed": R2,
                        onClick: () => A2(e2),
                        children: (0, n.jsxs)("span", {
                          className: L().selectSlot,
                          children: [
                            (0, n.jsx)("span", {
                              "data-on": !R2 || void 0,
                              children: F2
                            }),
                            (0, n.jsxs)("span", {
                              "data-on": R2 || void 0,
                              children: [
                                (0, n.jsx)(v.A, {
                                  size: 14,
                                  strokeWidth: 2,
                                  "aria-hidden": "true"
                                }),
                                "Selected"
                              ]
                            })
                          ]
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsxs)(ex, {
                active: w2,
                reduced: B2,
                className: L().footerRow,
                children: [
                  (0, n.jsx)("span", {
                    className: L().bone,
                    style: { width: 120, height: 12 }
                  }),
                  (0, n.jsx)("span", {
                    className: L().bone,
                    style: { width: 132, height: 32, borderRadius: 999 }
                  })
                ]
              })
            ]
          })
        }),
        (0, n.jsx)("span", {
          className: L().srOnly,
          role: "status",
          "aria-live": "polite",
          children: w2 ? "Loading model details" : er2
        })
      ]
    });
  }
  var eb = t(93074), ef = t.n(eb);
  let eg = { opus: T.opus, sonnet: T.sonnet, gpt: T.gpt, gemini: T.gemini }, ej = [
    { value: "opus", label: "Opus 5.5" },
    { value: "sonnet", label: "Sonnet 5.5" },
    { value: "gpt", label: "GPT-6.1" },
    { value: "gemini", label: "Gemini 4" }
  ], ev = [T.opus, T.gpt, T.gemini, T.sonnet, T.grok];
  function ey() {
    let [e2, a2] = (0, r.useState)("opus"), [t2, o2] = (0, r.useState)(false), c2 = (0, r.useRef)(0);
    return (0, r.useEffect)(() => () => window.clearTimeout(c2.current), []), (0, n.jsxs)("div", {
      className: ef().demo,
      children: [
        (0, n.jsxs)("div", {
          className: ef().controls,
          children: [
            (0, n.jsx)(l.A, {
              label: "Model",
              options: ej,
              value: e2,
              onValueChange: (e3) => a2(e3)
            }),
            (0, n.jsxs)(i.$, {
              size: "sm",
              variant: "ghost",
              onClick: function() {
                window.clearTimeout(c2.current), o2(true), c2.current = window.setTimeout(() => o2(false), 900);
              },
              disabled: t2,
              children: [
                (0, n.jsx)(s.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Reload"
              ]
            })
          ]
        }),
        (0, n.jsx)(e_, { model: eg[e2], rivals: ev, loading: t2 })
      ]
    });
  }
  let eN = ey;
}

__m(__module,__exports,__require);
}