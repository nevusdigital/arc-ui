/* generation-stats (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(16167, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.r(t), s.d(t, { GenerationStatsDemo: () => U, default: () => H });
  var n = s(95155), a = s(12115), r = s(25354), i = s(18310), o = s(80642), l = s(35484), c = s(40852), d = s(23723), u = s(12363), p = s(92298), h = s(51288), x = s(73474), m = s(52898);
  function f({ title: e2 = "Claude", ...t2 }) {
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
  }
  function g({ title: e2 = "OpenAI", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  function v({ title: e2 = "Gemini", ...t2 }) {
    let s2 = (0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: "#3186FF"
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-0-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-1-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#lobe-icons-gemini-2-${s2})`
        }),
        (0, n.jsxs)("defs", {
          children: [
            (0, n.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `lobe-icons-gemini-0-${s2}`,
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
              id: `lobe-icons-gemini-1-${s2}`,
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
              id: `lobe-icons-gemini-2-${s2}`,
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
  }
  function j({ title: e2 = "Grok", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      fillRule: "evenodd",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815"
      })
    });
  }
  function y({ title: e2 = "Mistral AI", ...t2 }) {
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("path", {
          d: "M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z",
          fill: "gold"
        }),
        (0, n.jsx)("path", {
          d: "M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z",
          fill: "#FFAF00"
        }),
        (0, n.jsx)("path", {
          d: "M3.428 10.258h17.144v3.428H3.428v-3.428z",
          fill: "#FF8205"
        }),
        (0, n.jsx)("path", {
          d: "M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z",
          fill: "#FA500F"
        }),
        (0, n.jsx)("path", {
          d: "M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z",
          fill: "#E10500"
        })
      ]
    });
  }
  function _({ title: e2 = "DeepSeek", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z",
        fill: "#4D6BFE"
      })
    });
  }
  function k({ title: e2 = "Meta", ...t2 }) {
    let s2 = (0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("path", {
          d: "M6.897 4h-.024l-.031 2.615h.022c1.715 0 3.046 1.357 5.94 6.246l.175.297.012.02 1.62-2.438-.012-.019a48.763 48.763 0 00-1.098-1.716 28.01 28.01 0 00-1.175-1.629C10.413 4.932 8.812 4 6.896 4z",
          fill: `url(#lobe-icons-meta-0-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M6.873 4C4.95 4.01 3.247 5.258 2.02 7.17a4.352 4.352 0 00-.01.017l2.254 1.231.011-.017c.718-1.083 1.61-1.774 2.568-1.785h.021L6.896 4h-.023z",
          fill: `url(#lobe-icons-meta-1-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M2.019 7.17l-.011.017C1.2 8.447.598 9.995.274 11.664l-.005.022 2.534.6.004-.022c.27-1.467.786-2.828 1.456-3.845l.011-.017L2.02 7.17z",
          fill: `url(#lobe-icons-meta-2-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M2.807 12.264l-2.533-.6-.005.022c-.177.918-.267 1.851-.269 2.786v.023l2.598.233v-.023a12.591 12.591 0 01.21-2.44z",
          fill: `url(#lobe-icons-meta-3-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M2.677 15.537a5.462 5.462 0 01-.079-.813v-.022L0 14.468v.024a8.89 8.89 0 00.146 1.652l2.535-.585a4.106 4.106 0 01-.004-.022z",
          fill: `url(#lobe-icons-meta-4-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M3.27 16.89c-.284-.31-.484-.756-.589-1.328l-.004-.021-2.535.585.004.021c.192 1.01.568 1.85 1.106 2.487l.014.017 2.018-1.745a2.106 2.106 0 01-.015-.016z",
          fill: `url(#lobe-icons-meta-5-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M10.78 9.654c-1.528 2.35-2.454 3.825-2.454 3.825-2.035 3.2-2.739 3.917-3.871 3.917a1.545 1.545 0 01-1.186-.508l-2.017 1.744.014.017C2.01 19.518 3.058 20 4.356 20c1.963 0 3.374-.928 5.884-5.33l1.766-3.13a41.283 41.283 0 00-1.227-1.886z",
          fill: "#0082FB"
        }),
        (0, n.jsx)("path", {
          d: "M13.502 5.946l-.016.016c-.4.43-.786.908-1.16 1.416.378.483.768 1.024 1.175 1.63.48-.743.928-1.345 1.367-1.807l.016-.016-1.382-1.24z",
          fill: `url(#lobe-icons-meta-6-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M20.918 5.713C19.853 4.633 18.583 4 17.225 4c-1.432 0-2.637.787-3.723 1.944l-.016.016 1.382 1.24.016-.017c.715-.747 1.408-1.12 2.176-1.12.826 0 1.6.39 2.27 1.075l.015.016 1.589-1.425-.016-.016z",
          fill: "#0082FB"
        }),
        (0, n.jsx)("path", {
          d: "M23.998 14.125c-.06-3.467-1.27-6.566-3.064-8.396l-.016-.016-1.588 1.424.015.016c1.35 1.392 2.277 3.98 2.361 6.971v.023h2.292v-.022z",
          fill: `url(#lobe-icons-meta-7-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M23.998 14.15v-.023h-2.292v.022c.004.14.006.282.006.424 0 .815-.121 1.474-.368 1.95l-.011.022 1.708 1.782.013-.02c.62-.96.946-2.293.946-3.91 0-.083 0-.165-.002-.247z",
          fill: `url(#lobe-icons-meta-8-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M21.344 16.52l-.011.02c-.214.402-.519.67-.917.787l.778 2.462a3.493 3.493 0 00.438-.182 3.558 3.558 0 001.366-1.218l.044-.065.012-.02-1.71-1.784z",
          fill: `url(#lobe-icons-meta-9-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M19.92 17.393c-.262 0-.492-.039-.718-.14l-.798 2.522c.449.153.927.222 1.46.222.492 0 .943-.073 1.352-.215l-.78-2.462c-.167.05-.341.075-.517.073z",
          fill: `url(#lobe-icons-meta-10-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M18.323 16.534l-.014-.017-1.836 1.914.016.017c.637.682 1.246 1.105 1.937 1.337l.797-2.52c-.291-.125-.573-.353-.9-.731z",
          fill: `url(#lobe-icons-meta-11-${s2})`
        }),
        (0, n.jsx)("path", {
          d: "M18.309 16.515c-.55-.642-1.232-1.712-2.303-3.44l-1.396-2.336-.011-.02-1.62 2.438.012.02.989 1.668c.959 1.61 1.74 2.774 2.493 3.585l.016.016 1.834-1.914a2.353 2.353 0 01-.014-.017z",
          fill: `url(#lobe-icons-meta-12-${s2})`
        }),
        (0, n.jsxs)("defs", {
          children: [
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-0-${s2}`,
              x1: "75.897%",
              x2: "26.312%",
              y1: "89.199%",
              y2: "12.194%",
              children: [
                (0, n.jsx)("stop", { offset: ".06%", stopColor: "#0867DF" }),
                (0, n.jsx)("stop", { offset: "45.39%", stopColor: "#0668E1" }),
                (0, n.jsx)("stop", { offset: "85.91%", stopColor: "#0064E0" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-1-${s2}`,
              x1: "21.67%",
              x2: "97.068%",
              y1: "75.874%",
              y2: "23.985%",
              children: [
                (0, n.jsx)("stop", { offset: "13.23%", stopColor: "#0064DF" }),
                (0, n.jsx)("stop", { offset: "99.88%", stopColor: "#0064E0" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-2-${s2}`,
              x1: "38.263%",
              x2: "60.895%",
              y1: "89.127%",
              y2: "16.131%",
              children: [
                (0, n.jsx)("stop", { offset: "1.47%", stopColor: "#0072EC" }),
                (0, n.jsx)("stop", { offset: "68.81%", stopColor: "#0064DF" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-3-${s2}`,
              x1: "47.032%",
              x2: "52.15%",
              y1: "90.19%",
              y2: "15.745%",
              children: [
                (0, n.jsx)("stop", { offset: "7.31%", stopColor: "#007CF6" }),
                (0, n.jsx)("stop", { offset: "99.43%", stopColor: "#0072EC" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-4-${s2}`,
              x1: "52.155%",
              x2: "47.591%",
              y1: "58.301%",
              y2: "37.004%",
              children: [
                (0, n.jsx)("stop", { offset: "7.31%", stopColor: "#007FF9" }),
                (0, n.jsx)("stop", { offset: "100%", stopColor: "#007CF6" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-5-${s2}`,
              x1: "37.689%",
              x2: "61.961%",
              y1: "12.502%",
              y2: "63.624%",
              children: [
                (0, n.jsx)("stop", { offset: "7.31%", stopColor: "#007FF9" }),
                (0, n.jsx)("stop", { offset: "100%", stopColor: "#0082FB" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-6-${s2}`,
              x1: "34.808%",
              x2: "62.313%",
              y1: "68.859%",
              y2: "23.174%",
              children: [
                (0, n.jsx)("stop", { offset: "27.99%", stopColor: "#007FF8" }),
                (0, n.jsx)("stop", { offset: "91.41%", stopColor: "#0082FB" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-7-${s2}`,
              x1: "43.762%",
              x2: "57.602%",
              y1: "6.235%",
              y2: "98.514%",
              children: [
                (0, n.jsx)("stop", { offset: "0%", stopColor: "#0082FB" }),
                (0, n.jsx)("stop", { offset: "99.95%", stopColor: "#0081FA" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-8-${s2}`,
              x1: "60.055%",
              x2: "39.88%",
              y1: "4.661%",
              y2: "69.077%",
              children: [
                (0, n.jsx)("stop", { offset: "6.19%", stopColor: "#0081FA" }),
                (0, n.jsx)("stop", { offset: "100%", stopColor: "#0080F9" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-9-${s2}`,
              x1: "30.282%",
              x2: "61.081%",
              y1: "59.32%",
              y2: "33.244%",
              children: [
                (0, n.jsx)("stop", { offset: "0%", stopColor: "#027AF3" }),
                (0, n.jsx)("stop", { offset: "100%", stopColor: "#0080F9" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-10-${s2}`,
              x1: "20.433%",
              x2: "82.112%",
              y1: "50.001%",
              y2: "50.001%",
              children: [
                (0, n.jsx)("stop", { offset: "0%", stopColor: "#0377EF" }),
                (0, n.jsx)("stop", { offset: "99.94%", stopColor: "#0279F1" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-11-${s2}`,
              x1: "40.303%",
              x2: "72.394%",
              y1: "35.298%",
              y2: "57.811%",
              children: [
                (0, n.jsx)("stop", { offset: ".19%", stopColor: "#0471E9" }),
                (0, n.jsx)("stop", { offset: "100%", stopColor: "#0377EF" })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `lobe-icons-meta-12-${s2}`,
              x1: "32.254%",
              x2: "68.003%",
              y1: "19.719%",
              y2: "84.908%",
              children: [
                (0, n.jsx)("stop", { offset: "27.65%", stopColor: "#0867DF" }),
                (0, n.jsx)("stop", { offset: "100%", stopColor: "#0471E9" })
              ]
            })
          ]
        })
      ]
    });
  }
  function b({ title: e2 = "Qwen", ...t2 }) {
    let s2 = (0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("path", {
          d: "M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z",
          fill: `url(#lobe-icons-qwen-${s2})`,
          fillRule: "nonzero"
        }),
        (0, n.jsx)("defs", {
          children: (0, n.jsxs)("linearGradient", {
            id: `lobe-icons-qwen-${s2}`,
            x1: "0%",
            x2: "100%",
            y1: "0%",
            y2: "0%",
            children: [
              (0, n.jsx)("stop", {
                offset: "0%",
                stopColor: "#6336E7",
                stopOpacity: ".84"
              }),
              (0, n.jsx)("stop", {
                offset: "100%",
                stopColor: "#6F69F7",
                stopOpacity: ".84"
              })
            ]
          })
        })
      ]
    });
  }
  function M({ provider: e2, size: t2 = 16, className: s2 }) {
    let a2 = {
      width: t2,
      height: t2,
      className: s2,
      "aria-hidden": true,
      focusable: false
    };
    switch (e2) {
      case "anthropic":
        return (0, n.jsx)(f, { ...a2, style: { color: "#D97757" } });
      case "openai":
        return (0, n.jsx)(g, { ...a2 });
      case "google":
        return (0, n.jsx)(v, { ...a2 });
      case "xai":
        return (0, n.jsx)(j, { ...a2 });
      case "mistral":
        return (0, n.jsx)(y, { ...a2 });
      case "deepseek":
        return (0, n.jsx)(_, { ...a2 });
      case "meta":
        return (0, n.jsx)(k, { ...a2 });
      case "qwen":
        return (0, n.jsx)(b, { ...a2 });
    }
  }
  let T = [
    {
      model: {
        name: "Claude Sonnet 5.5",
        provider: "anthropic",
        id: "claude-sonnet-5-5"
      },
      pricing: { input: 3, cachedInput: 0.3, output: 15 },
      inputTokens: 6214,
      cachedTokens: 5632,
      outputTokens: 284,
      ttftMs: 420,
      tokensPerSecond: 98
    },
    {
      model: { name: "GPT-6.1 Sol", provider: "openai", id: "gpt-6.1-sol" },
      pricing: { input: 2.5, cachedInput: 0.25, output: 12 },
      inputTokens: 3948,
      cachedTokens: 2560,
      outputTokens: 318,
      reasoningTokens: 224,
      ttftMs: 690,
      tokensPerSecond: 112
    },
    {
      model: {
        name: "Gemini 3.8 Flash",
        provider: "google",
        id: "gemini-3.8-flash"
      },
      pricing: { input: 0.3, cachedInput: 0.03, output: 2.5 },
      inputTokens: 8416,
      cachedTokens: 6144,
      outputTokens: 642,
      ttftMs: 260,
      tokensPerSecond: 246
    },
    {
      model: {
        name: "Mistral Large 4",
        provider: "mistral",
        id: "mistral-large-4"
      },
      pricing: { input: 2, cachedInput: 0.2, output: 6 },
      inputTokens: 4120,
      cachedTokens: 0,
      outputTokens: 356,
      ttftMs: 380,
      tokensPerSecond: 124,
      failAtTokens: 131,
      error: "Mistral returned 529 overloaded after 131 tokens."
    }
  ];
  var w = s(80292), C = s.n(w);
  let N = "Simulated run with sample rates. Nothing was sent.", $ = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  function z(e2) {
    return e2 < 1e3 ? `${Math.max(0, Math.round(e2))}ms` : e2 < 1e4 ? `${(e2 / 1e3).toFixed(2)}s` : e2 < 6e4 ? `${(e2 / 1e3).toFixed(1)}s` : `${Math.floor(e2 / 6e4)}m ${Math.round(e2 % 6e4 / 1e3)}s`;
  }
  function A(e2) {
    return `$${e2 < 10 ? e2.toFixed(4) : e2.toFixed(2)}`;
  }
  let F = (e2) => $.format(Math.round(e2)), S = (e2) => e2 < 10 ? e2.toFixed(1) : $.format(Math.round(e2)), E = (e2) => e2 ? { duration: 0 } : {
    height: { type: "spring", visualDuration: 0.26, bounce: 0 },
    opacity: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
  }, I = (e2) => ({ duration: 0.14 * !e2, ease: [0.22, 1, 0.36, 1] });
  function L({ value: e2, format: t2, reduced: s2 }) {
    let [r2, i2] = (0, a.useState)(e2), o2 = (0, a.useRef)(e2), l2 = (0, a.useRef)(t2);
    return (0, a.useEffect)(() => {
      l2.current = t2;
    }), (0, a.useEffect)(() => {
      if (void 0 === e2 || void 0 === o2.current || s2 || e2 < o2.current) {
        o2.current = e2, i2(e2);
        return;
      }
      let t3 = 0, n2 = performance.now(), a2 = (s3) => {
        let r3 = o2.current ?? e2, c2 = r3 + (e2 - r3) * (1 - Math.exp(-(s3 - n2) / 90));
        n2 = s3, l2.current(c2) === l2.current(e2) && (c2 = e2), o2.current = c2, i2(c2), c2 !== e2 && (t3 = requestAnimationFrame(a2));
      };
      return t3 = requestAnimationFrame(a2), () => cancelAnimationFrame(t3);
    }, [e2, s2]), (0, n.jsx)("span", {
      className: C().num,
      children: void 0 === r2 ? "\u2013" : t2(r2)
    });
  }
  function O({ points: e2, live: t2 }) {
    let s2 = 1.1 * Math.max(1, ...e2), a2 = Math.max(e2.length - 1, 23), r2 = e2.map((e3, t3) => [2.5 + t3 / a2 * 51, 17.5 - e3 / s2 * 15]), i2 = r2.map(([e3, t3], s3) => `${s3 ? "L" : "M"}${e3.toFixed(2)} ${t3.toFixed(2)}`).join(""), o2 = r2[r2.length - 1];
    return (0, n.jsxs)("svg", {
      className: C().spark,
      width: 56,
      height: 20,
      viewBox: "0 0 56 20",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, n.jsx)("line", {
          x1: 2.5,
          x2: 53.5,
          y1: 17.5,
          y2: 17.5,
          className: C().sparkBase
        }),
        r2.length > 1 ? (0, n.jsx)("path", { d: i2, className: C().sparkLine }) : null,
        o2 ? (0, n.jsx)("circle", {
          cx: o2[0],
          cy: o2[1],
          r: 2,
          className: C().sparkDot,
          "data-live": t2 || void 0
        }) : null
      ]
    });
  }
  function G() {
    return (0, n.jsxs)("svg", {
      className: C().spinner,
      width: 14,
      height: 14,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, n.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".22",
          strokeWidth: "2"
        }),
        (0, n.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function B({ reduced: e2 }) {
    return (0, n.jsx)("svg", {
      width: 14,
      height: 14,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, n.jsx)(r.PY1.path, {
        d: "M3.25 8.5 6.5 11.75 12.75 4.75",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.04 }
      })
    });
  }
  function R(e2, t2) {
    return "idle" === e2 ? "Not started" : "waiting" === e2 ? "Waiting" : "streaming" === e2 ? "Streaming" : "done" === e2 ? void 0 !== t2 ? `Done in ${z(t2)}` : "Done" : "stopped" === e2 ? void 0 !== t2 ? `Stopped at ${z(t2)}` : "Stopped" : "Failed";
  }
  function W({ status: e2, reduced: t2 }) {
    return "waiting" === e2 || "streaming" === e2 ? (0, n.jsx)(G, {}) : "done" === e2 ? (0, n.jsx)(B, { reduced: t2 }) : "error" === e2 ? (0, n.jsx)(l.A, { size: 14, strokeWidth: 2, "aria-hidden": "true" }) : "stopped" === e2 ? (0, n.jsx)(c.A, {
      size: 12,
      strokeWidth: 2.25,
      "aria-hidden": "true"
    }) : (0, n.jsx)(d.A, {
      size: 14,
      strokeWidth: 2,
      "aria-hidden": "true"
    });
  }
  function D({
    model: e2,
    status: t2,
    startedAt: s2,
    usage: c2,
    pricing: d2,
    speedSamples: f2,
    error: g2,
    variant: v2 = "card",
    expanded: j2,
    defaultExpanded: y2 = false,
    onExpandedChange: _2,
    onRetry: k2,
    note: b2,
    className: w2
  }) {
    let $2, G2, B2, q2 = (0, i.I)() ?? false, P2 = (0, a.useId)(), U2 = (0, a.useRef)(null), H2 = void 0 === t2, [Y, V] = (0, a.useState)(false), [K, Z] = (0, a.useState)(y2), [J, X] = (0, a.useState)(false);
    (0, a.useEffect)(() => {
      let e3 = U2.current;
      if (!H2 || !e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => V(e4.isIntersecting), {
        threshold: 0.1
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [H2]);
    let Q = j2 ?? K, ee = (function({
      runs: e3 = T,
      active: t3 = true,
      hold: s3 = false,
      loop: n2 = true
    } = {}) {
      let r2 = e3[0], [i2, o2] = (0, a.useState)(() => ({
        runKey: 0,
        model: r2.model,
        pricing: r2.pricing,
        status: "done",
        usage: {
          inputTokens: r2.inputTokens,
          cachedTokens: r2.cachedTokens,
          outputTokens: r2.outputTokens,
          reasoningTokens: r2.reasoningTokens,
          ttftMs: r2.ttftMs,
          durationMs: Math.round(
            r2.ttftMs + r2.outputTokens / (0.9 * r2.tokensPerSecond) * 1e3
          )
        },
        speedSamples: (function(e4) {
          let t4, s4 = e4.outputTokens / (0.9 * e4.tokensPerSecond), n3 = [];
          for (let a2 = 0.16; a2 <= s4; a2 += 0.16) {
            let s5 = e4.tokensPerSecond * (0.58 + 0.42 * Math.min(1, a2 / 0.4)) * (1 + 0.07 * Math.sin(6.3 * a2 + 1.3) + 0.045 * Math.sin(15.7 * a2 + 2.6));
            t4 = void 0 === t4 ? s5 : t4 + 0.45 * (s5 - t4), n3.push(Math.round(10 * t4) / 10);
          }
          return n3;
        })(r2)
      })), [l2, c3] = (0, a.useState)(false), d3 = (0, a.useRef)({
        index: 0,
        retrying: false,
        key: 0,
        vt: 0,
        runStart: 0,
        phase: "done",
        settledAt: 0,
        initial: true,
        acc: 0,
        delivered: 0,
        seed: 1.3
      }), u2 = (0, a.useRef)(s3), p2 = (0, a.useRef)(n2);
      (0, a.useEffect)(() => {
        u2.current = s3, p2.current = n2;
      }, [s3, n2]);
      let h2 = (0, a.useCallback)(
        (t4, s4) => {
          let n3 = d3.current, a2 = e3[t4 % e3.length];
          Object.assign(n3, {
            index: t4 % e3.length,
            retrying: s4,
            key: n3.key + 1,
            runStart: n3.vt,
            phase: "waiting",
            initial: false,
            acc: 0,
            delivered: 0,
            seed: 7.13 * n3.seed % 6.28
          }), c3(false), o2({
            runKey: n3.key,
            model: a2.model,
            pricing: a2.pricing,
            status: "waiting",
            startedAt: Date.now(),
            usage: {
              inputTokens: a2.inputTokens,
              cachedTokens: a2.cachedTokens,
              outputTokens: 0
            }
          });
        },
        [e3]
      ), x2 = (0, a.useCallback)(() => h2(d3.current.index, true), [h2]), m2 = (0, a.useCallback)(() => h2(d3.current.index + 1, false), [h2]);
      return (0, a.useEffect)(() => {
        if (!t3) return;
        let s4 = performance.now(), n3 = window.setInterval(() => {
          let t4 = performance.now(), n4 = Math.min(t4 - s4, 100);
          s4 = t4;
          let a2 = d3.current;
          a2.vt += n4;
          let r3 = e3[a2.index], i3 = a2.vt - a2.runStart, l3 = Date.now() - i3;
          if ("done" === a2.phase || "error" === a2.phase) {
            if (u2.current) {
              a2.settledAt += n4;
              return;
            }
            let e4 = a2.vt - a2.settledAt;
            if ("error" === a2.phase) {
              e4 >= 2400 && h2(a2.index, true);
              return;
            }
            if (a2.initial) {
              e4 >= 1200 && p2.current && h2(a2.index + 1, false);
              return;
            }
            e4 >= 1e3 && e4 < 3900 && c3(true), e4 >= 3900 && c3(false), e4 >= 4400 && p2.current && h2(a2.index + 1, false);
            return;
          }
          if (i3 < r3.ttftMs)
            return void o2(
              (e4) => Math.abs((e4.startedAt ?? 0) - l3) > 30 ? { ...e4, startedAt: l3 } : e4
            );
          let x3 = (i3 - r3.ttftMs) / 1e3, m3 = 0.58 + 0.42 * Math.min(1, x3 / 0.4), f3 = 1 + 0.07 * Math.sin(6.3 * x3 + a2.seed) + 0.045 * Math.sin(15.7 * x3 + 2 * a2.seed);
          a2.acc += r3.tokensPerSecond * m3 * f3 * (n4 / 1e3);
          let g3 = a2.retrying ? void 0 : r3.failAtTokens, v3 = g3 ?? r3.outputTokens, j3 = a2.acc >= v3, y3 = Math.min(v3, Math.max(1, Math.floor(a2.acc)));
          if (!j3 && y3 - a2.delivered < 4 && "streaming" === a2.phase)
            return;
          a2.delivered = y3;
          let _3 = {
            inputTokens: r3.inputTokens,
            cachedTokens: r3.cachedTokens,
            outputTokens: y3,
            reasoningTokens: r3.reasoningTokens,
            ttftMs: r3.ttftMs
          };
          if (j3) {
            a2.phase = void 0 !== g3 ? "error" : "done", a2.settledAt = a2.vt, o2({
              runKey: a2.key,
              model: r3.model,
              pricing: r3.pricing,
              status: a2.phase,
              startedAt: l3,
              usage: { ..._3, durationMs: Math.round(i3) },
              error: void 0 !== g3 ? r3.error : void 0
            });
            return;
          }
          a2.phase = "streaming", o2({
            runKey: a2.key,
            model: r3.model,
            pricing: r3.pricing,
            status: "streaming",
            startedAt: l3,
            usage: _3
          });
        }, 40);
        return () => window.clearInterval(n3);
      }, [t3, e3, h2]), { frame: i2, cueOpen: l2, retry: x2, next: m2 };
    })({ active: H2 && Y && !q2, hold: J && Q }), et = H2 ? ee.frame : void 0, es = et?.model ?? e2, en = et?.status ?? t2 ?? "idle", ea = et?.startedAt ?? s2, er = et?.usage ?? c2 ?? {}, ei = et?.pricing ?? d2, eo = et?.error ?? g2, el = b2 ?? (H2 ? N : void 0), ec = H2 ? ee.retry : k2, ed = !H2 || J || void 0 !== j2 || y2 ? Q : ee.cueOpen, eu = "waiting" === en || "streaming" === en, ep = (function(e3) {
      let [t3, s3] = (0, a.useState)(void 0);
      return (0, a.useEffect)(() => {
        if (!e3) return;
        let t4 = 0, n2 = () => {
          s3(Date.now()), t4 = requestAnimationFrame(n2);
        };
        return t4 = requestAnimationFrame(n2), () => cancelAnimationFrame(t4);
      }, [e3]), e3 ? t3 : void 0;
    })(eu && void 0 !== ea), eh = eu && void 0 !== ea ? Math.max(0, (ep ?? ea) - ea) : void 0, ex = er.ttftMs ?? ("waiting" === en ? eh : void 0), em = er.durationMs ?? (eu ? eh : void 0), ef = "waiting" !== en && void 0 !== em && void 0 !== ex ? Math.max(0, em - ex) : void 0, eg = er.outputTokens, [ev, ej] = (0, a.useState)({});
    ev.output !== eg && ej({ output: eg, elapsed: eh });
    let ey = "streaming" === en && void 0 === er.durationMs && void 0 !== ev.elapsed && void 0 !== ex ? ev.elapsed - ex : ef, e_ = er.tokensPerSecond ?? (eg && ey && ey >= 240 ? eg / (ey / 1e3) : void 0), ek = er.costUsd ?? (ei && void 0 !== er.inputTokens ? ($2 = Math.min(er.cachedTokens ?? 0, er.inputTokens ?? 0), G2 = (er.inputTokens ?? 0) - $2, B2 = (er.outputTokens ?? 0) + (er.reasoningTokens ?? 0), (G2 * ei.input + $2 * (ei.cachedInput ?? ei.input) + B2 * ei.output) / 1e6) : void 0), eb = (function(e3, t3, s3) {
      let [n2, r2] = (0, a.useState)([]), [i2, o2] = (0, a.useState)({ status: e3, reset: s3 }), l2 = (0, a.useRef)(t3 ?? 0);
      return (0, a.useEffect)(() => {
        l2.current = t3 ?? 0;
      }, [t3]), (i2.status !== e3 || i2.reset !== s3) && (o2({ status: e3, reset: s3 }), ("waiting" === e3 || "idle" === e3 || i2.reset !== s3) && r2([])), (0, a.useEffect)(() => {
        let t4;
        if ("streaming" !== e3) return;
        let s4 = performance.now(), n3 = l2.current, a2 = window.setInterval(() => {
          let e4 = performance.now(), a3 = l2.current, i3 = (a3 - n3) / ((e4 - s4) / 1e3);
          s4 = e4, n3 = a3;
          let o3 = Math.max(
            0,
            t4 = void 0 === t4 ? i3 : t4 + 0.45 * (i3 - t4)
          );
          r2((e5) => {
            let t5;
            return (t5 = [...e5, o3]).length <= 48 ? t5 : t5.reduce(
              (e6, t6, s5) => s5 % 2 ? (e6[e6.length - 1] = (e6[e6.length - 1] + t6) / 2, e6) : [...e6, t6],
              []
            );
          });
        }, 160);
        return () => window.clearInterval(a2);
      }, [e3]), n2;
    })(en, eg, et?.runKey), eM = f2 ?? et?.speedSamples ?? eb, [eT, ew] = (0, a.useState)(""), [eC, eN] = (0, a.useState)(en);
    if (eC !== en) {
      eN(en);
      let e3 = es?.name ?? "The model", t3 = "done" === en ? `${e3} done in ${void 0 !== em ? z(em) : "time unknown"}${void 0 !== eg ? `, ${F(eg)} output tokens` : ""}${e_ ? ` at ${S(e_)} tokens per second` : ""}${void 0 !== ek ? `, ${A(ek)}` : ""}.` : "error" === en ? `${e3} failed. ${eo ?? ""}`.trim() : "stopped" === en ? `${e3} stopped.` : "waiting" === en && J ? `Request sent to ${e3}.` : "";
      (!H2 || J) && ew(t3);
    }
    let e$ = Math.min(er.cachedTokens ?? 0, er.inputTokens ?? 0), ez = [
      {
        key: "input",
        label: "Input",
        tokens: void 0 !== er.inputTokens ? er.inputTokens - e$ : void 0,
        rate: ei?.input
      },
      {
        key: "cached",
        label: "Cached input",
        tokens: void 0 !== er.inputTokens ? e$ : void 0,
        rate: ei ? ei.cachedInput ?? ei.input : void 0
      },
      { key: "output", label: "Output", tokens: eg, rate: ei?.output },
      ...er.reasoningTokens ? [
        {
          key: "reasoning",
          label: "Reasoning",
          tokens: er.reasoningTokens,
          rate: ei?.output
        }
      ] : []
    ], eA = ez.reduce((e3, t3) => e3 + (t3.tokens ?? 0), 0), eF = void 0 !== ek, eS = !!ei && void 0 === er.costUsd, eE = JSON.stringify(
      {
        model: es?.id ?? es?.name,
        status: en,
        ttftMs: void 0 !== ex ? Math.round(ex) : void 0,
        durationMs: void 0 !== em ? Math.round(em) : void 0,
        tokensPerSecond: void 0 !== e_ ? Math.round(10 * e_) / 10 : void 0,
        inputTokens: er.inputTokens,
        cachedTokens: er.cachedTokens,
        outputTokens: eg,
        reasoningTokens: er.reasoningTokens,
        costUsd: void 0 !== ek ? Math.round(1e6 * ek) / 1e6 : void 0
      },
      null,
      2
    ), eI = { panel: `${P2}-panel`, label: `${P2}-label` }, eL = "inline" === v2, eO = void 0 !== ex && em ? Math.min(1, ex / em) : +("waiting" === en);
    return (0, n.jsxs)("div", {
      ref: U2,
      className: ((...e3) => e3.filter(Boolean).join(" "))(
        C().root,
        eL ? C().inline : C().card,
        w2
      ),
      "data-status": en,
      "data-open": ed || void 0,
      role: "group",
      "aria-labelledby": eI.label,
      children: [
        (0, n.jsxs)("div", {
          className: C().head,
          children: [
            es ? (0, n.jsx)(M, {
              provider: es.provider,
              size: eL ? 14 : 16,
              className: C().mark
            }) : null,
            (0, n.jsxs)("span", {
              id: eI.label,
              className: C().model,
              children: [
                es ? es.name : "Generation",
                (0, n.jsx)("span", {
                  className: C().srOnly,
                  children: " stats"
                })
              ]
            }),
            (0, n.jsx)("span", {
              className: C().status,
              children: (0, n.jsx)(o.N, {
                initial: false,
                mode: "popLayout",
                children: (0, n.jsxs)(
                  r.PY1.span,
                  {
                    className: C().statusInner,
                    initial: { opacity: 0, y: 2 * !q2 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { ...I(q2), duration: 0.16 * !q2 }
                    },
                    exit: {
                      opacity: 0,
                      transition: { ...I(q2), duration: 0.1 * !q2 }
                    },
                    children: [
                      (0, n.jsx)("span", {
                        className: C().statusIcon,
                        "data-status": en,
                        children: (0, n.jsx)(W, { status: en, reduced: q2 })
                      }),
                      "waiting" === en ? (0, n.jsx)(m.n, {
                        className: C().statusLabel,
                        children: "Waiting"
                      }) : (0, n.jsx)("span", {
                        className: C().statusLabel,
                        children: R(en, em)
                      })
                    ]
                  },
                  R(en, "done" === en || "stopped" === en ? em : void 0)
                )
              })
            })
          ]
        }),
        (0, n.jsxs)("dl", {
          className: C().stats,
          children: [
            (0, n.jsxs)("div", {
              className: C().cell,
              children: [
                (0, n.jsx)("dt", {
                  className: C().label,
                  children: "First token"
                }),
                (0, n.jsxs)("dd", {
                  className: C().value,
                  children: [
                    (0, n.jsx)(L, { value: ex, format: z, reduced: q2 }),
                    (0, n.jsx)("span", {
                      className: C().unitInline,
                      children: "to first token"
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: C().cell,
              children: [
                (0, n.jsx)("dt", { className: C().label, children: "Speed" }),
                (0, n.jsxs)("dd", {
                  className: C().value,
                  children: [
                    (0, n.jsx)(L, { value: e_, format: S, reduced: q2 }),
                    (0, n.jsx)("span", {
                      className: C().unit,
                      children: "tok/s"
                    }),
                    (0, n.jsx)(O, { points: eM, live: "streaming" === en })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: C().cell,
              children: [
                (0, n.jsx)("dt", {
                  className: C().label,
                  children: "Output tokens"
                }),
                (0, n.jsxs)("dd", {
                  className: C().value,
                  children: [
                    (0, n.jsx)(L, { value: eg, format: F, reduced: q2 }),
                    (0, n.jsx)("span", {
                      className: C().unitInline,
                      children: "tokens"
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: C().cell,
              children: [
                (0, n.jsx)("dt", { className: C().label, children: "Cost" }),
                (0, n.jsx)("dd", {
                  className: C().value,
                  children: (0, n.jsx)(L, { value: ek, format: A, reduced: q2 })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)(h.$, {
          variant: "ghost",
          size: "sm",
          className: C().toggle,
          onClick: () => {
            let e3 = !ed;
            X(true), void 0 === j2 && Z(e3), _2?.(e3);
          },
          disabled: "idle" === en,
          "aria-expanded": ed,
          "aria-controls": eI.panel,
          "aria-label": ed ? "Hide details" : "Show details",
          children: [
            (0, n.jsx)("span", {
              className: C().toggleLabel,
              children: "Details"
            }),
            (0, n.jsx)(u.A, {
              size: 16,
              strokeWidth: 1.75,
              className: C().chevron,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, n.jsx)(o.N, {
          initial: false,
          children: "error" === en ? (0, n.jsx)(
            r.PY1.div,
            {
              className: C().errorClip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: E(q2),
              children: (0, n.jsxs)("div", {
                className: C().error,
                children: [
                  (0, n.jsx)(l.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    className: C().errorIcon,
                    "aria-hidden": "true"
                  }),
                  (0, n.jsx)("p", {
                    className: C().errorText,
                    children: eo ?? "The request failed before it finished."
                  }),
                  ec ? (0, n.jsxs)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    className: C().retry,
                    onClick: () => {
                      X(true), ec();
                    },
                    children: [
                      (0, n.jsx)(p.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Retry"
                    ]
                  }) : null
                ]
              })
            },
            "error"
          ) : null
        }),
        (0, n.jsx)(o.N, {
          initial: false,
          children: ed ? (0, n.jsx)(
            r.PY1.div,
            {
              id: eI.panel,
              className: C().panelClip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: E(q2),
              children: (0, n.jsxs)("div", {
                className: C().panel,
                children: [
                  (0, n.jsxs)("section", {
                    className: C().latency,
                    "aria-label": "Latency",
                    children: [
                      (0, n.jsxs)("div", {
                        className: C().bar,
                        "aria-hidden": "true",
                        children: [
                          (0, n.jsx)("span", {
                            className: C().segTtft,
                            style: { flexGrow: Math.max(eO, 0.015) }
                          }),
                          void 0 !== ef ? (0, n.jsx)("span", {
                            className: C().segGen,
                            style: { flexGrow: Math.max(1 - eO, 0) }
                          }) : null
                        ]
                      }),
                      (0, n.jsxs)("dl", {
                        className: C().legend,
                        children: [
                          (0, n.jsxs)("div", {
                            className: C().legendItem,
                            children: [
                              (0, n.jsxs)("dt", {
                                children: [
                                  (0, n.jsx)("span", {
                                    className: C().swatchTtft,
                                    "aria-hidden": "true"
                                  }),
                                  "First token"
                                ]
                              }),
                              (0, n.jsx)("dd", {
                                children: (0, n.jsx)(L, {
                                  value: ex,
                                  format: z,
                                  reduced: q2
                                })
                              })
                            ]
                          }),
                          (0, n.jsxs)("div", {
                            className: C().legendItem,
                            children: [
                              (0, n.jsxs)("dt", {
                                children: [
                                  (0, n.jsx)("span", {
                                    className: C().swatchGen,
                                    "aria-hidden": "true"
                                  }),
                                  "Generation"
                                ]
                              }),
                              (0, n.jsx)("dd", {
                                children: (0, n.jsx)(L, {
                                  value: ef,
                                  format: z,
                                  reduced: q2
                                })
                              })
                            ]
                          }),
                          (0, n.jsxs)("div", {
                            className: C().legendItem,
                            children: [
                              (0, n.jsx)("dt", { children: "Total" }),
                              (0, n.jsx)("dd", {
                                children: (0, n.jsx)(L, {
                                  value: em,
                                  format: z,
                                  reduced: q2
                                })
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, n.jsxs)("table", {
                    className: C().table,
                    "data-rates": eS || void 0,
                    "data-cost": eF || void 0,
                    children: [
                      (0, n.jsxs)("caption", {
                        className: C().srOnly,
                        children: ["Token usage", eF ? " and cost" : ""]
                      }),
                      (0, n.jsx)("thead", {
                        children: (0, n.jsxs)("tr", {
                          children: [
                            (0, n.jsx)("th", {
                              scope: "col",
                              children: "Type"
                            }),
                            (0, n.jsx)("th", {
                              scope: "col",
                              children: "Tokens"
                            }),
                            eS ? (0, n.jsx)("th", {
                              scope: "col",
                              className: C().rateCol,
                              children: "Rate"
                            }) : null,
                            eF ? (0, n.jsx)("th", {
                              scope: "col",
                              children: "Cost"
                            }) : null
                          ]
                        })
                      }),
                      (0, n.jsx)("tbody", {
                        children: ez.map((e3) => {
                          let t3;
                          return (0, n.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, n.jsx)("th", {
                                  scope: "row",
                                  children: e3.label
                                }),
                                (0, n.jsx)("td", {
                                  children: (0, n.jsx)(L, {
                                    value: e3.tokens,
                                    format: F,
                                    reduced: q2
                                  })
                                }),
                                eS ? (0, n.jsx)("td", {
                                  className: C().rateCol,
                                  children: void 0 !== e3.rate ? (t3 = e3.rate, `$${t3 < 1 ? t3.toFixed(3).replace(/0$/, "") : t3.toFixed(2)}/M`) : "\u2013"
                                }) : null,
                                eF ? (0, n.jsx)("td", {
                                  children: eS && void 0 !== e3.tokens && void 0 !== e3.rate ? (0, n.jsx)(L, {
                                    value: e3.tokens * e3.rate / 1e6,
                                    format: A,
                                    reduced: q2
                                  }) : "\u2013"
                                }) : null
                              ]
                            },
                            e3.key
                          );
                        })
                      }),
                      (0, n.jsx)("tfoot", {
                        children: (0, n.jsxs)("tr", {
                          children: [
                            (0, n.jsx)("th", {
                              scope: "row",
                              children: "Total"
                            }),
                            (0, n.jsx)("td", {
                              children: (0, n.jsx)(L, {
                                value: eA,
                                format: F,
                                reduced: q2
                              })
                            }),
                            eS ? (0, n.jsx)("td", { className: C().rateCol }) : null,
                            eF ? (0, n.jsx)("td", {
                              children: (0, n.jsx)(L, {
                                value: ek,
                                format: A,
                                reduced: q2
                              })
                            }) : null
                          ]
                        })
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: C().foot,
                    children: [
                      (0, n.jsx)("p", {
                        className: C().note,
                        children: el
                      }),
                      (0, n.jsx)(x.CopyButton, {
                        value: eE,
                        label: "Copy stats as JSON",
                        iconOnly: true,
                        variant: "plain",
                        className: C().copy
                      })
                    ]
                  })
                ]
              })
            },
            "panel"
          ) : null
        }),
        (0, n.jsx)("span", {
          className: C().srOnly,
          role: "status",
          "aria-live": "polite",
          children: H2 && !J ? N : `${eT}${H2 && eT ? " Simulated, nothing was sent." : ""}`
        })
      ]
    });
  }
  var q = s(75596), P = s.n(q);
  function U() {
    return (0, n.jsx)("div", {
      className: P().demo,
      children: (0, n.jsx)("div", {
        className: P().frame,
        children: (0, n.jsx)(D, {})
      })
    });
  }
  let H = U;
}

__m(__module,__exports,__require);
});
A.reg(23723, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "circle-dashed",
    size: 24,
    node: [
      ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
      ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
      ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
      ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
      ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
      ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
      ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
      ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(75596, ".demo{display:flex;justify-content:center;width:100%}\n.frame{width:100%;max-width:640px;min-width:0}", {"demo":"demo","frame":"frame"});
A.regCss(80292, ".generation-stats_root__UcZ1e{--gs-pad:18px;position:relative;container-type:inline-size;width:100%;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.generation-stats_srOnly__hNnU7{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.generation-stats_num__2RgOR{font-variant-numeric:tabular-nums;white-space:nowrap}.generation-stats_card__xxne0{display:grid;max-width:760px;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"head toggle\" \"stats stats\" \"error error\" \"panel panel\";border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}.generation-stats_head__Etwl5{display:flex;grid-area:head;min-width:0;min-height:48px;align-items:center;gap:10px;padding:8px 0 0 var(--gs-pad)}.generation-stats_mark__UfFzE{display:block;flex:none;color:var(--foreground)}.generation-stats_model__NuaB_{min-width:0;overflow:hidden;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}.generation-stats_status__B3eGA{position:relative;display:flex;flex:none;min-width:0;color:var(--text-secondary);font-size:var(--text-xs);line-height:16px}.generation-stats_statusInner__kvU_j{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.generation-stats_statusIcon__pV1Gp{display:grid;width:14px;height:14px;flex:none;place-items:center;color:var(--text-muted)}.generation-stats_statusIcon__pV1Gp svg{display:block}.generation-stats_statusIcon__pV1Gp[data-status=done]{color:var(--success)}.generation-stats_statusIcon__pV1Gp[data-status=error]{color:var(--danger)}.generation-stats_statusLabel__pS3ST{display:block}.generation-stats_spinner__0BRbi{animation:generation-stats_gs-spin__79sId .8s linear infinite}@keyframes generation-stats_gs-spin__79sId{to{transform:rotate(1turn)}}.generation-stats_toggle__EqNO5.generation-stats_toggle__EqNO5{grid-area:toggle;align-self:center;min-height:32px;margin:8px 8px 0 0;padding-inline:12px 10px}.generation-stats_chevron__mAY6N{flex:none;transition:transform var(--duration-standard) var(--ease-standard)}.generation-stats_root__UcZ1e[data-open] .generation-stats_chevron__mAY6N{transform:rotate(180deg)}.generation-stats_stats__ue1NE{display:grid;grid-area:stats;grid-template-columns:repeat(4,minmax(0,1fr));margin:0;padding:8px var(--gs-pad) 16px}.generation-stats_cell__s2KAB{display:flex;min-width:0;flex-direction:column;gap:2px;padding-inline:16px;border-left:1px solid var(--border-subtle)}.generation-stats_cell__s2KAB:first-child{padding-left:0;border-left:0}.generation-stats_cell__s2KAB:last-child{padding-right:0}.generation-stats_label__Gfwwb{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;text-overflow:ellipsis;white-space:nowrap}.generation-stats_value__CEpXP{display:flex;min-width:0;height:24px;align-items:center;gap:4px;margin:0;color:var(--foreground);font-size:var(--text-base);line-height:24px;white-space:nowrap}.generation-stats_root__UcZ1e[data-status=error] .generation-stats_value__CEpXP,.generation-stats_root__UcZ1e[data-status=idle] .generation-stats_value__CEpXP,.generation-stats_root__UcZ1e[data-status=stopped] .generation-stats_value__CEpXP{color:var(--text-secondary)}.generation-stats_unit__YqIaM{color:var(--text-muted);font-size:var(--text-sm)}.generation-stats_unitInline__X2kRw{display:none}.generation-stats_spark__ZkhtA{display:block;flex:none;margin-left:8px;overflow:visible}.generation-stats_sparkBase__gX9xW{stroke:var(--border-subtle);stroke-width:1}.generation-stats_sparkLine__Q2RRc{stroke:var(--accent);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.generation-stats_sparkDot__Iwn_E{fill:var(--accent)}.generation-stats_root__UcZ1e[data-status=error] .generation-stats_sparkLine__Q2RRc,.generation-stats_root__UcZ1e[data-status=stopped] .generation-stats_sparkLine__Q2RRc{stroke:var(--text-muted)}.generation-stats_root__UcZ1e[data-status=error] .generation-stats_sparkDot__Iwn_E,.generation-stats_root__UcZ1e[data-status=stopped] .generation-stats_sparkDot__Iwn_E{fill:var(--text-muted)}.generation-stats_errorClip__pZWMv{grid-area:error;min-width:0;overflow:hidden}.generation-stats_error__RWsxh{display:flex;min-height:48px;align-items:center;gap:10px;margin:0 8px 8px;border-radius:var(--radius-control);padding:6px 8px 6px 10px;background:color-mix(in oklab,var(--danger) 7%,var(--surface))}.generation-stats_errorIcon__0ouvD{flex:none;color:var(--danger)}.generation-stats_errorText__k_6Xf{flex:1 1 auto;min-width:0;margin:0;color:var(--foreground);line-height:20px}.generation-stats_retry__j1ywc.generation-stats_retry__j1ywc{flex:none;min-height:32px;gap:6px;padding-inline:12px}.generation-stats_panelClip__QfYLQ{grid-area:panel;min-width:0;overflow:hidden}.generation-stats_panel__CA9yy{display:grid;gap:16px;border-top:1px solid var(--border-subtle);padding:16px var(--gs-pad) 10px}.generation-stats_latency__EY43f{min-width:0}.generation-stats_bar__Cjqvt{display:flex;height:6px;gap:2px}.generation-stats_segGen__i3nNJ,.generation-stats_segTtft__TzLwv{min-width:4px;flex-basis:0;border-radius:var(--radius-pill)}.generation-stats_segTtft__TzLwv,.generation-stats_swatchTtft__Bg3Kx{background:color-mix(in oklab,var(--text-muted) 50%,transparent)}.generation-stats_segGen__i3nNJ,.generation-stats_swatchGen__e3jH0{background:var(--accent)}.generation-stats_legend__W02qr{display:flex;flex-wrap:wrap;gap:4px 20px;margin:10px 0 0;font-size:var(--text-xs);line-height:16px}.generation-stats_legendItem__OLzF_{display:flex;align-items:center;gap:6px}.generation-stats_legendItem__OLzF_ dt{display:inline-flex;align-items:center;gap:6px;color:var(--text-muted)}.generation-stats_legendItem__OLzF_ dd{margin:0;color:var(--foreground)}.generation-stats_swatchGen__e3jH0,.generation-stats_swatchTtft__Bg3Kx{display:block;width:8px;height:8px;flex:none;border-radius:var(--radius-pill)}.generation-stats_table__IJAJa{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.generation-stats_table__IJAJa td,.generation-stats_table__IJAJa th{height:32px;padding:0 0 0 24px;font-weight:400;text-align:right;white-space:nowrap}.generation-stats_table__IJAJa th:first-child{width:100%;padding-left:0;text-align:left}.generation-stats_table__IJAJa thead th{height:28px;color:var(--text-muted);font-size:var(--text-xs);box-shadow:inset 0 -1px 0 var(--border-subtle)}.generation-stats_table__IJAJa tbody th{color:var(--text-secondary)}.generation-stats_table__IJAJa td{color:var(--foreground)}.generation-stats_table__IJAJa .generation-stats_rateCol__0qbeg{color:var(--text-muted)}.generation-stats_table__IJAJa tfoot td,.generation-stats_table__IJAJa tfoot th{color:var(--foreground);box-shadow:inset 0 1px 0 var(--border-subtle)}.generation-stats_foot__Alfi0{display:flex;min-height:28px;align-items:center;justify-content:space-between;gap:12px}.generation-stats_note__VwLUD{min-width:0;margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;text-wrap:pretty}.generation-stats_copy__DEK3A.generation-stats_copy__DEK3A{width:28px;height:28px;min-height:28px;flex:none;margin-right:-6px;border-radius:10px}.generation-stats_inline__wEJEA{display:flex;max-width:760px;flex-wrap:wrap;align-items:center;column-gap:12px;row-gap:0;color:var(--text-secondary);font-size:var(--text-xs);line-height:16px}.generation-stats_inline__wEJEA .generation-stats_head__Etwl5{min-height:28px;gap:8px;padding:0}.generation-stats_inline__wEJEA .generation-stats_model__NuaB_{color:var(--foreground);font-size:var(--text-xs);line-height:16px}.generation-stats_inline__wEJEA .generation-stats_stats__ue1NE{display:contents}.generation-stats_inline__wEJEA[data-status=done] .generation-stats_status__B3eGA{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.generation-stats_inline__wEJEA .generation-stats_cell__s2KAB{flex-direction:row;padding:0;border:0}.generation-stats_inline__wEJEA .generation-stats_label__Gfwwb{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.generation-stats_inline__wEJEA .generation-stats_value__CEpXP{height:28px;color:var(--text-secondary);font-size:var(--text-xs);line-height:16px}.generation-stats_inline__wEJEA .generation-stats_unitInline__X2kRw,.generation-stats_inline__wEJEA .generation-stats_unit__YqIaM{display:inline;margin-left:0;color:var(--text-muted);font-size:var(--text-xs)}.generation-stats_inline__wEJEA .generation-stats_spark__ZkhtA{margin-left:6px}.generation-stats_inline__wEJEA .generation-stats_toggle__EqNO5.generation-stats_toggle__EqNO5{width:28px;min-height:28px;margin:0 0 0 -6px;padding:0}.generation-stats_inline__wEJEA .generation-stats_toggleLabel__XOlVR{display:none}.generation-stats_inline__wEJEA .generation-stats_errorClip__pZWMv,.generation-stats_inline__wEJEA .generation-stats_panelClip__QfYLQ{flex:1 0 100%}.generation-stats_inline__wEJEA .generation-stats_error__RWsxh{margin:6px 0 0}.generation-stats_inline__wEJEA .generation-stats_panel__CA9yy{margin-top:6px;border:1px solid var(--border);border-radius:var(--radius-control);padding:14px 16px 8px;background:var(--surface)}@media (prefers-reduced-motion:reduce){.generation-stats_spinner__0BRbi{animation:none}}@media (prefers-reduced-motion:reduce){.generation-stats_chevron__mAY6N{transition:none}}", {"root":"generation-stats_root__UcZ1e","srOnly":"generation-stats_srOnly__hNnU7","num":"generation-stats_num__2RgOR","card":"generation-stats_card__xxne0","head":"generation-stats_head__Etwl5","mark":"generation-stats_mark__UfFzE","model":"generation-stats_model__NuaB_","status":"generation-stats_status__B3eGA","statusInner":"generation-stats_statusInner__kvU_j","statusIcon":"generation-stats_statusIcon__pV1Gp","statusLabel":"generation-stats_statusLabel__pS3ST","spinner":"generation-stats_spinner__0BRbi","gs-spin":"generation-stats_gs-spin__79sId","toggle":"generation-stats_toggle__EqNO5","chevron":"generation-stats_chevron__mAY6N","stats":"generation-stats_stats__ue1NE","cell":"generation-stats_cell__s2KAB","label":"generation-stats_label__Gfwwb","value":"generation-stats_value__CEpXP","unit":"generation-stats_unit__YqIaM","unitInline":"generation-stats_unitInline__X2kRw","spark":"generation-stats_spark__ZkhtA","sparkBase":"generation-stats_sparkBase__gX9xW","sparkLine":"generation-stats_sparkLine__Q2RRc","sparkDot":"generation-stats_sparkDot__Iwn_E","errorClip":"generation-stats_errorClip__pZWMv","error":"generation-stats_error__RWsxh","errorIcon":"generation-stats_errorIcon__0ouvD","errorText":"generation-stats_errorText__k_6Xf","retry":"generation-stats_retry__j1ywc","panelClip":"generation-stats_panelClip__QfYLQ","panel":"generation-stats_panel__CA9yy","latency":"generation-stats_latency__EY43f","bar":"generation-stats_bar__Cjqvt","segTtft":"generation-stats_segTtft__TzLwv","segGen":"generation-stats_segGen__i3nNJ","swatchTtft":"generation-stats_swatchTtft__Bg3Kx","swatchGen":"generation-stats_swatchGen__e3jH0","legend":"generation-stats_legend__W02qr","legendItem":"generation-stats_legendItem__OLzF_","table":"generation-stats_table__IJAJa","rateCol":"generation-stats_rateCol__0qbeg","foot":"generation-stats_foot__Alfi0","note":"generation-stats_note__VwLUD","copy":"generation-stats_copy__DEK3A","inline":"generation-stats_inline__wEJEA","toggleLabel":"generation-stats_toggleLabel__XOlVR"});
A.cssFor("generation-stats", [75596,80292]);
A.item("generation-stats", {entry:16167, export:"GenerationStatsDemo", kind:"component", tier:"pro", unresolved:[]});
})();