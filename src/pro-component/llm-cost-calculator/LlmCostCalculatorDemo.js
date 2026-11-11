function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { LlmCostCalculatorDemo: () => U, default: () => G });
  var l = a(95155), s = a(12115), r = a(66558), o = a(18310), n = a(28245), c = a(7890), i = a(92171), u = a(80642), d = a(25354), m = a(35484), p = a(92298), h = a(51288), _ = a(94274), x = a(50680);
  function j({ title: e2 = "OpenAI", ...t2 }) {
    return (0, l.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, l.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  function f({ title: e2 = "Gemini", ...t2 }) {
    let a2 = (0, s.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
    return (0, l.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, l.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: "#3186FF"
        }),
        (0, l.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-0-${a2})`
        }),
        (0, l.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-1-${a2})`
        }),
        (0, l.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-2-${a2})`
        }),
        (0, l.jsxs)("defs", {
          children: [
            (0, l.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `lobe-icons-gemini-0-${a2}`,
              x1: "7",
              x2: "11",
              y1: "15.5",
              y2: "12",
              children: [
                (0, l.jsx)("stop", { stopColor: "#08B962" }),
                (0, l.jsx)("stop", {
                  offset: "1",
                  stopColor: "#08B962",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, l.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `lobe-icons-gemini-1-${a2}`,
              x1: "8",
              x2: "11.5",
              y1: "5.5",
              y2: "11",
              children: [
                (0, l.jsx)("stop", { stopColor: "#F94543" }),
                (0, l.jsx)("stop", {
                  offset: "1",
                  stopColor: "#F94543",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, l.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `lobe-icons-gemini-2-${a2}`,
              x1: "3.5",
              x2: "17.5",
              y1: "13.5",
              y2: "12",
              children: [
                (0, l.jsx)("stop", { stopColor: "#FABC12" }),
                (0, l.jsx)("stop", {
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
  let k = (0, l.jsx)(
    function({ title: e2 = "Claude", ...t2 }) {
      return (0, l.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, l.jsx)("path", {
          d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        })
      });
    },
    { style: { color: "#D97757" } }
  ), g = [
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      provider: "Anthropic",
      mark: k,
      input: 5,
      cachedInput: 0.5,
      output: 25
    },
    {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      provider: "Anthropic",
      mark: k,
      input: 3,
      cachedInput: 0.3,
      output: 15
    },
    {
      id: "claude-haiku-5-5",
      name: "Claude Haiku 5.5",
      provider: "Anthropic",
      mark: k,
      input: 1,
      cachedInput: 0.1,
      output: 5
    },
    {
      id: "gpt-6-1-sol",
      name: "GPT-6.1 Sol",
      provider: "OpenAI",
      mark: (0, l.jsx)(j, {}),
      input: 2.5,
      cachedInput: 0.25,
      output: 20
    },
    {
      id: "gpt-6-luna",
      name: "GPT-6 Luna",
      provider: "OpenAI",
      mark: (0, l.jsx)(j, {}),
      input: 0.25,
      cachedInput: 0.025,
      output: 3
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      provider: "Google",
      mark: (0, l.jsx)(f, {}),
      input: 2,
      cachedInput: 0.5,
      output: 12
    },
    {
      id: "gemini-3-8-flash",
      name: "Gemini 3.8 Flash",
      provider: "Google",
      mark: (0, l.jsx)(f, {}),
      input: 0.3,
      cachedInput: 0.075,
      output: 2.5
    },
    {
      id: "deepseek-v4-1-flash",
      name: "DeepSeek V4.1 Flash",
      provider: "DeepSeek",
      mark: (0, l.jsx)(function({ title: e2 = "DeepSeek", ...t2 }) {
        return (0, l.jsx)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, l.jsx)("path", {
            d: "M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z",
            fill: "#4D6BFE"
          })
        });
      }, {}),
      input: 0.2,
      cachedInput: 0.02,
      output: 0.8
    }
  ], v = [
    {
      id: "chat",
      label: "Chat",
      usage: {
        inputTokens: 2e3,
        outputTokens: 500,
        requestsPerDay: 1e4,
        cached: false
      }
    },
    {
      id: "rag",
      label: "RAG",
      usage: {
        inputTokens: 16e3,
        outputTokens: 500,
        requestsPerDay: 5e3,
        cached: true
      }
    },
    {
      id: "agent",
      label: "Agent",
      usage: {
        inputTokens: 64e3,
        outputTokens: 2e3,
        requestsPerDay: 2500,
        cached: true
      }
    },
    {
      id: "batch",
      label: "Batch",
      usage: {
        inputTokens: 8e3,
        outputTokens: 250,
        requestsPerDay: 5e4,
        cached: false
      }
    }
  ], y = {
    inputTokens: [250, 500, 1e3, 2e3, 4e3, 8e3, 16e3, 32e3, 64e3, 128e3, 2e5],
    outputTokens: [100, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3],
    requestsPerDay: [
      100,
      250,
      500,
      1e3,
      2500,
      5e3,
      1e4,
      25e3,
      5e4,
      1e5,
      25e4,
      5e5,
      1e6
    ]
  };
  var N = a(63906), b = a.n(N);
  let w = (...e2) => e2.filter(Boolean).join(" "), T = [0.22, 1, 0.36, 1], C = { type: "spring", visualDuration: 0.24, bounce: 0 }, I = new Intl.NumberFormat("en-US"), $ = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), M = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), S = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1
  });
  function A(e2) {
    return e2 < 100 ? M.format(e2) : e2 < 1e5 ? $.format(e2) : S.format(e2);
  }
  let P = (e2) => e2 < 100 ? M.format(e2) : $.format(e2);
  function D(e2) {
    let t2 = e2 < 1e-3 ? 5 : e2 < 0.01 ? 4 : e2 < 1 ? 3 : 2;
    return `$${e2.toFixed(t2)}`;
  }
  let F = (e2) => `$${e2 < 0.1 ? e2.toFixed(3) : e2.toFixed(2)}`, L = (e2, t2) => e2.reduce((a2, l2, s2) => Math.abs(l2 - t2) < Math.abs(e2[a2] - t2) ? s2 : a2, 0), R = v[1].usage;
  function z({ value: e2, format: t2, className: a2 }) {
    let r2 = (0, o.I)(), u2 = (0, s.useRef)(null), d2 = (0, n.d)(e2), [m2] = (0, s.useState)(() => t2(e2));
    return (0, c.L)(d2, "change", (e3) => {
      u2.current && (u2.current.textContent = t2(e3));
    }), (0, s.useEffect)(() => {
      if (r2) {
        d2.jump(e2), u2.current && (u2.current.textContent = t2(e2));
        return;
      }
      let a3 = (0, i.i)(d2, e2, { duration: 0.24, ease: T });
      return () => a3.stop();
    }, [e2, r2, d2, t2]), (0, l.jsx)("span", { ref: u2, className: w(b().num, a2), children: m2 });
  }
  function q({ text: e2, className: t2 }) {
    let a2 = (0, o.I)();
    return (0, l.jsx)("span", {
      className: w(b().swap, t2),
      children: (0, l.jsx)(u.N, {
        initial: false,
        children: (0, l.jsx)(
          d.PY1.span,
          {
            className: b().swapItem,
            initial: { opacity: 0, y: 2 * !a2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16 * !a2, ease: T }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !a2 } },
            children: e2
          },
          e2
        )
      })
    });
  }
  function E({
    models: e2 = g,
    usage: t2,
    defaultUsage: a2 = R,
    onUsageChange: n2,
    selected: c2,
    defaultSelected: i2,
    onSelectedChange: j2,
    presets: f2 = v,
    cacheHitRate: k2 = 0.6,
    daysPerMonth: N2 = 30,
    loading: $2 = false,
    error: M2,
    onRetry: S2,
    title: O2 = "Estimated monthly cost",
    description: B2 = "Sample list prices per 1M tokens, October 2026",
    note: U2 = "Sample prices for illustration, not a quote. Calculated in your browser, nothing was sent.",
    className: G2
  }) {
    let V = (0, s.useId)(), W = (0, o.I)(), [Y, H] = (0, s.useState)(a2), J = t2 ?? Y, [K, Q] = (0, s.useState)(i2 ?? e2[1]?.id ?? e2[0]?.id ?? ""), Z = (0, s.useRef)(null), X = (e3) => {
      t2 || H(e3), n2?.(e3);
    }, ee = (0, s.useMemo)(
      () => e2.map((e3, t3) => ({
        model: e3,
        index: t3,
        cost: (function(e4, t4, a3 = {}) {
          let l2 = t4.cached ? Math.min(1, Math.max(0, a3.cacheHitRate ?? 0.6)) : 0, s2 = t4.requestsPerDay * (a3.daysPerMonth ?? 30), r2 = t4.inputTokens * (1 - l2) * e4.input / 1e6, o2 = t4.inputTokens * l2 * (e4.cachedInput ?? e4.input) / 1e6, n3 = t4.outputTokens * e4.output / 1e6, c3 = r2 + o2 + n3;
          return {
            input: r2 * s2,
            cachedInput: o2 * s2,
            output: n3 * s2,
            total: c3 * s2,
            perRequest: c3
          };
        })(e3, J, { cacheHitRate: k2, daysPerMonth: N2 })
      })).sort((e3, t3) => e3.cost.total - t3.cost.total || e3.index - t3.index),
      [e2, J, k2, N2]
    ), et = ee.reduce((e3, t3) => Math.max(e3, t3.cost.total), 0), ea = ee.some((e3) => e3.model.id === (c2 ?? K)) ? c2 ?? K : ee[0]?.model.id, el = ee.findIndex((e3) => e3.model.id === ea), es = ee[el], er = (e3) => {
      void 0 === c2 && Q(e3.model.id), j2?.(e3.model.id, e3.model);
    }, eo = !$2 && !M2 && ee.length > 0, en = $2 ? "loading" : M2 ? "error" : 0 === ee.length ? "empty" : "list", ec = Math.max(e2.length, 4), [ei, eu] = (0, s.useState)(""), ed = (0, s.useRef)(false), em = $2 ? "Loading prices." : M2 ? `Prices did not load. ${M2}` : es ? `${es.model.name}, ${P(es.cost.total)} per month, ${0 === el ? "the lowest cost" : `rank ${el + 1} of ${ee.length}`}. Sample prices, calculated in your browser, nothing was sent.` : "No models to compare.";
    (0, s.useEffect)(() => {
      if (!ed.current) {
        ed.current = true;
        return;
      }
      let e3 = window.setTimeout(() => eu(em), 450);
      return () => window.clearTimeout(e3);
    }, [em]);
    let ep = f2 ? f2.find((e3) => {
      let t3;
      return t3 = e3.usage, t3.inputTokens === J.inputTokens && t3.outputTokens === J.outputTokens && t3.requestsPerDay === J.requestsPerDay && t3.cached === J.cached;
    })?.id ?? "custom" : "custom", eh = {
      inputTokens: L(y.inputTokens, J.inputTokens),
      outputTokens: L(y.outputTokens, J.outputTokens),
      requestsPerDay: L(y.requestsPerDay, J.requestsPerDay)
    }, e_ = (e3, t3) => (0, l.jsx)(_.A, {
      label: t3,
      min: 0,
      max: y[e3].length - 1,
      step: 1,
      largeStep: 2,
      value: eh[e3],
      format: (t4) => I.format(y[e3][Math.round(t4)] ?? 0),
      onValueChange: (t4) => X({ ...J, [e3]: y[e3][t4] ?? J[e3] }),
      disabled: !eo
    }), ex = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.16 * !W, ease: T } },
      exit: { opacity: 0, transition: { duration: 0.1 * !W } }
    }, ej = Math.round(100 * Math.min(1, Math.max(0, k2)));
    return (0, l.jsxs)("section", {
      className: w(b().root, G2),
      "aria-labelledby": `${V}-title`,
      "aria-busy": $2 || void 0,
      children: [
        (0, l.jsxs)("header", {
          className: b().header,
          children: [
            (0, l.jsxs)("div", {
              className: b().heading,
              children: [
                (0, l.jsx)("h3", {
                  id: `${V}-title`,
                  className: b().title,
                  children: O2
                }),
                B2 && (0, l.jsx)("p", { className: b().meta, children: B2 })
              ]
            }),
            (0, l.jsx)("div", {
              className: b().hero,
              "aria-hidden": "true",
              children: eo && es ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(z, {
                    value: es.cost.total,
                    format: P,
                    className: b().total
                  }),
                  (0, l.jsx)("span", {
                    className: b().heroMeta,
                    children: (0, l.jsx)(q, {
                      text: `${es.model.name} per month`
                    })
                  })
                ]
              }) : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("span", {
                    className: w(b().total, b().totalIdle),
                    children: $2 ? (0, l.jsx)("span", {
                      className: w(b().skeleton, b().skeletonTotal)
                    }) : "$0.00"
                  }),
                  (0, l.jsx)("span", {
                    className: b().heroMeta,
                    children: $2 ? "Loading prices" : M2 ? "Prices unavailable" : "No model selected"
                  })
                ]
              })
            })
          ]
        }),
        f2 && f2.length > 0 && (0, l.jsx)(r.A, {
          className: b().presets,
          label: "Workload",
          value: ep,
          onValueChange: (e3) => {
            let t3 = f2.find((t4) => t4.id === e3);
            t3 && X(t3.usage);
          },
          options: [
            ...f2.map((e3) => ({ value: e3.id, label: e3.label })),
            { value: "custom", label: "Custom" }
          ]
        }),
        (0, l.jsxs)("div", {
          className: b().controls,
          children: [
            (0, l.jsxs)("div", {
              className: b().sliders,
              children: [
                e_("inputTokens", "Input tokens"),
                e_("outputTokens", "Output tokens"),
                e_("requestsPerDay", "Requests per day")
              ]
            }),
            (0, l.jsxs)("div", {
              className: b().cache,
              children: [
                (0, l.jsx)(x.d, {
                  label: "Cached input",
                  checked: J.cached,
                  onCheckedChange: (e3) => X({ ...J, cached: e3 }),
                  disabled: !eo
                }),
                (0, l.jsx)("span", {
                  className: b().meta,
                  children: (0, l.jsx)(q, {
                    text: J.cached ? `${ej}% of input billed at the cache read rate` : "All input billed at the full rate"
                  })
                })
              ]
            })
          ]
        }),
        (0, l.jsxs)("div", {
          className: b().ranking,
          children: [
            (0, l.jsxs)("div", {
              className: b().listHead,
              "aria-hidden": "true",
              children: [
                (0, l.jsx)("span", { children: "Model" }),
                (0, l.jsx)("span", { children: "Per month" })
              ]
            }),
            (0, l.jsx)("div", {
              className: b().stage,
              style: { "--slots": ec },
              children: (0, l.jsxs)(u.N, {
                initial: false,
                mode: "wait",
                children: [
                  "list" === en && (0, l.jsxs)(
                    d.PY1.div,
                    {
                      ref: Z,
                      className: b().list,
                      role: "radiogroup",
                      "aria-label": "Models ranked by monthly cost, lowest first",
                      style: { "--rows": ee.length },
                      ...ex,
                      children: [
                        ee.map(
                          (e3, t3) => (0, l.jsx)(
                            "span",
                            {
                              className: b().rankSlot,
                              style: {
                                transform: `translateY(calc(var(--row) * ${t3}))`
                              },
                              "aria-hidden": "true",
                              children: t3 + 1
                            },
                            t3
                          )
                        ),
                        ee.map((e3, t3) => {
                          let a3 = e3.model.id === ea, s2 = et > 0 ? e3.cost.total / et : 0;
                          return (0, l.jsxs)(
                            d.PY1.button,
                            {
                              type: "button",
                              role: "radio",
                              "aria-checked": a3,
                              "aria-label": `${e3.model.name} by ${e3.model.provider}, rank ${t3 + 1}, ${A(e3.cost.total)} per month`,
                              tabIndex: a3 ? 0 : -1,
                              "data-model": e3.model.id,
                              "data-on": a3 || void 0,
                              className: b().row,
                              initial: false,
                              animate: { y: `${100 * t3}%` },
                              transition: W ? { duration: 0 } : C,
                              onClick: () => er(e3),
                              onKeyDown: (e4) => ((e5, t4) => {
                                let a4 = ee.length - 1, l2 = "ArrowDown" === e5.key || "ArrowRight" === e5.key ? Math.min(a4, t4 + 1) : "ArrowUp" === e5.key || "ArrowLeft" === e5.key ? Math.max(0, t4 - 1) : "Home" === e5.key ? 0 : "End" === e5.key ? a4 : -1;
                                if (l2 < 0) return;
                                e5.preventDefault();
                                let s3 = ee[l2];
                                er(s3), Z.current?.querySelector(
                                  `[data-model="${CSS.escape(s3.model.id)}"]`
                                )?.focus();
                              })(e4, t3),
                              children: [
                                (0, l.jsx)("span", { className: b().rank }),
                                (0, l.jsx)("span", {
                                  className: b().mark,
                                  "aria-hidden": "true",
                                  children: e3.model.mark
                                }),
                                (0, l.jsx)("span", {
                                  className: b().name,
                                  children: e3.model.name
                                }),
                                (0, l.jsx)("span", {
                                  className: b().track,
                                  "aria-hidden": "true",
                                  children: (0, l.jsx)(d.PY1.span, {
                                    className: b().bar,
                                    initial: false,
                                    animate: {
                                      width: `${Math.max(1.5, 100 * s2)}%`
                                    },
                                    transition: W ? { duration: 0 } : C
                                  })
                                }),
                                (0, l.jsx)(z, {
                                  value: e3.cost.total,
                                  format: A,
                                  className: b().cost
                                })
                              ]
                            },
                            e3.model.id
                          );
                        })
                      ]
                    },
                    "list"
                  ),
                  "loading" === en && (0, l.jsx)(
                    d.PY1.div,
                    {
                      className: b().list,
                      "aria-hidden": "true",
                      style: { "--rows": ec },
                      ...ex,
                      children: Array.from(
                        { length: ec },
                        (e3, t3) => (0, l.jsxs)(
                          "div",
                          {
                            className: w(b().row, b().ghost),
                            style: { transform: `translateY(${100 * t3}%)` },
                            children: [
                              (0, l.jsx)("span", {
                                className: b().rank,
                                children: t3 + 1
                              }),
                              (0, l.jsx)("span", {
                                className: w(b().skeleton, b().skeletonMark)
                              }),
                              (0, l.jsx)("span", {
                                className: w(b().skeleton, b().skeletonName),
                                style: { width: `${62 + 23 * t3 % 30}%` }
                              }),
                              (0, l.jsx)("span", { className: b().track }),
                              (0, l.jsx)("span", {
                                className: w(b().skeleton, b().skeletonCost)
                              })
                            ]
                          },
                          t3
                        )
                      )
                    },
                    "loading"
                  ),
                  ("error" === en || "empty" === en) && (0, l.jsx)(
                    d.PY1.div,
                    {
                      className: b().message,
                      ...ex,
                      children: "error" === en ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsxs)("span", {
                            className: b().messageTitle,
                            children: [
                              (0, l.jsx)(m.A, {
                                size: 16,
                                "aria-hidden": "true",
                                className: b().messageIcon
                              }),
                              "Prices did not load"
                            ]
                          }),
                          (0, l.jsx)("span", {
                            className: b().meta,
                            children: M2
                          }),
                          S2 && (0, l.jsxs)(h.$, {
                            size: "sm",
                            variant: "secondary",
                            onClick: S2,
                            className: b().retry,
                            children: [
                              (0, l.jsx)(p.A, {
                                size: 14,
                                "aria-hidden": "true"
                              }),
                              "Try again"
                            ]
                          })
                        ]
                      }) : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("span", {
                            className: b().messageTitle,
                            children: "No models to compare"
                          }),
                          (0, l.jsx)("span", {
                            className: b().meta,
                            children: "Add models with input and output prices to rank them."
                          })
                        ]
                      })
                    },
                    en
                  )
                ]
              })
            })
          ]
        }),
        (0, l.jsxs)("footer", {
          className: b().footer,
          children: [
            (0, l.jsxs)("dl", {
              className: b().breakdown,
              "aria-label": es ? `${es.model.name} breakdown` : "Breakdown",
              children: [
                (0, l.jsxs)("div", {
                  className: b().stat,
                  children: [
                    (0, l.jsx)("dt", {
                      className: b().meta,
                      children: "Input"
                    }),
                    (0, l.jsx)("dd", {
                      children: eo && es ? (0, l.jsx)(z, { value: es.cost.input, format: A }) : (0, l.jsx)("span", {
                        className: b().num,
                        children: "$0.00"
                      })
                    })
                  ]
                }),
                (0, l.jsxs)("div", {
                  className: b().stat,
                  children: [
                    (0, l.jsx)("dt", {
                      className: b().meta,
                      children: "Cached"
                    }),
                    (0, l.jsx)("dd", {
                      children: eo && es ? (0, l.jsx)(z, {
                        value: es.cost.cachedInput,
                        format: A
                      }) : (0, l.jsx)("span", {
                        className: b().num,
                        children: "$0.00"
                      })
                    })
                  ]
                }),
                (0, l.jsxs)("div", {
                  className: b().stat,
                  children: [
                    (0, l.jsx)("dt", {
                      className: b().meta,
                      children: "Output"
                    }),
                    (0, l.jsx)("dd", {
                      children: eo && es ? (0, l.jsx)(z, { value: es.cost.output, format: A }) : (0, l.jsx)("span", {
                        className: b().num,
                        children: "$0.00"
                      })
                    })
                  ]
                }),
                (0, l.jsxs)("div", {
                  className: w(b().stat, b().statEnd),
                  children: [
                    (0, l.jsx)("dt", {
                      className: b().meta,
                      children: "Per request"
                    }),
                    (0, l.jsx)("dd", {
                      children: eo && es ? (0, l.jsx)(z, {
                        value: es.cost.perRequest,
                        format: D
                      }) : (0, l.jsx)("span", {
                        className: b().num,
                        children: "$0.0000"
                      })
                    })
                  ]
                })
              ]
            }),
            (0, l.jsxs)("p", {
              className: b().note,
              children: [
                es && eo ? (0, l.jsx)(q, {
                  text: `${es.model.name}: ${F(es.model.input)} in, ${F(es.model.cachedInput ?? es.model.input)} cached, ${F(es.model.output)} out per 1M tokens.`
                }) : (0, l.jsx)("span", { children: "\xA0" }),
                (0, l.jsx)("span", { className: b().fine, children: U2 })
              ]
            })
          ]
        }),
        (0, l.jsx)("span", {
          className: b().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ei
        })
      ]
    });
  }
  var O = a(17106), B = a.n(O);
  function U() {
    let [e2, t2] = (0, s.useState)("ready"), a2 = (0, s.useRef)(void 0);
    return (0, s.useEffect)(() => () => window.clearTimeout(a2.current), []), (0, l.jsxs)("div", {
      className: B().demo,
      children: [
        (0, l.jsx)(E, {
          loading: "loading" === e2,
          error: "error" === e2 ? "The pricing service timed out after 10 seconds. Simulated, nothing was sent." : void 0,
          onRetry: () => {
            t2("loading"), window.clearTimeout(a2.current), a2.current = window.setTimeout(() => t2("ready"), 900);
          },
          models: "empty" === e2 ? [] : void 0
        }),
        (0, l.jsx)(r.A, {
          className: B().states,
          label: "Preview state",
          value: e2,
          onValueChange: (e3) => {
            window.clearTimeout(a2.current), t2(e3);
          },
          options: [
            { value: "ready", label: "Ready" },
            { value: "loading", label: "Loading" },
            { value: "error", label: "Error" },
            { value: "empty", label: "Empty" }
          ]
        })
      ]
    });
  }
  let G = U;
}

__m(__module,__exports,__require);
}