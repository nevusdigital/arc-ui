/* model-picker (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(7338, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, {
    ModelPicker: () => D,
    default: () => q,
    sampleFeatured: () => w,
    sampleModels: () => y,
    sampleProviders: () => j
  });
  var i = t(95155), r = t(12115), l = t(57793), s = t(80642), o = t(25354), n = t(18310), c = t(64577), d = t(44236), p = t(76721), m = t(19707), u = t(78780), h = t(12363), x = t(7770);
  let f = ["low", "medium", "high", "xhigh", "max"], g = {
    low: "Low",
    medium: "Medium",
    high: "High",
    xhigh: "Extra high",
    max: "Max"
  }, j = [
    {
      id: "anthropic",
      name: "Anthropic",
      mark: function({ title: e2 = "Anthropic", ...a2 }) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, i.jsx)("path", {
            d: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
          })
        });
      }
    },
    {
      id: "openai",
      name: "OpenAI",
      mark: function({ title: e2 = "OpenAI", ...a2 }) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, i.jsx)("path", {
            d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          })
        });
      }
    },
    {
      id: "google",
      name: "Google",
      mark: function({ title: e2 = "Gemini", ...a2 }) {
        let t2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: [
            (0, i.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: "#3186FF"
            }),
            (0, i.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-0-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-1-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-2-${t2})`
            }),
            (0, i.jsxs)("defs", {
              children: [
                (0, i.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-0-${t2}`,
                  x1: "7",
                  x2: "11",
                  y1: "15.5",
                  y2: "12",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#08B962" }),
                    (0, i.jsx)("stop", {
                      offset: "1",
                      stopColor: "#08B962",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-1-${t2}`,
                  x1: "8",
                  x2: "11.5",
                  y1: "5.5",
                  y2: "11",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#F94543" }),
                    (0, i.jsx)("stop", {
                      offset: "1",
                      stopColor: "#F94543",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-2-${t2}`,
                  x1: "3.5",
                  x2: "17.5",
                  y1: "13.5",
                  y2: "12",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#FABC12" }),
                    (0, i.jsx)("stop", {
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
    },
    {
      id: "xai",
      name: "xAI",
      mark: function({ title: e2 = "xAI", ...a2 }) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          fillRule: "evenodd",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, i.jsx)("path", {
            d: "M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9l2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"
          })
        });
      }
    },
    {
      id: "mistral",
      name: "Mistral",
      mark: function({ title: e2 = "Mistral AI", ...a2 }) {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: [
            (0, i.jsx)("path", {
              d: "M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z",
              fill: "gold"
            }),
            (0, i.jsx)("path", {
              d: "M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z",
              fill: "#FFAF00"
            }),
            (0, i.jsx)("path", {
              d: "M3.428 10.258h17.144v3.428H3.428v-3.428z",
              fill: "#FF8205"
            }),
            (0, i.jsx)("path", {
              d: "M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z",
              fill: "#FA500F"
            }),
            (0, i.jsx)("path", {
              d: "M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z",
              fill: "#E10500"
            })
          ]
        });
      }
    },
    {
      id: "deepseek",
      name: "DeepSeek",
      mark: function({ title: e2 = "DeepSeek", ...a2 }) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, i.jsx)("path", {
            d: "M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z",
            fill: "#4D6BFE"
          })
        });
      }
    },
    {
      id: "meta",
      name: "Meta",
      mark: function({ title: e2 = "Meta", ...a2 }) {
        let t2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: [
            (0, i.jsx)("path", {
              d: "M6.897 4h-.024l-.031 2.615h.022c1.715 0 3.046 1.357 5.94 6.246l.175.297.012.02 1.62-2.438-.012-.019a48.763 48.763 0 00-1.098-1.716 28.01 28.01 0 00-1.175-1.629C10.413 4.932 8.812 4 6.896 4z",
              fill: `url(#lobe-icons-meta-0-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M6.873 4C4.95 4.01 3.247 5.258 2.02 7.17a4.352 4.352 0 00-.01.017l2.254 1.231.011-.017c.718-1.083 1.61-1.774 2.568-1.785h.021L6.896 4h-.023z",
              fill: `url(#lobe-icons-meta-1-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M2.019 7.17l-.011.017C1.2 8.447.598 9.995.274 11.664l-.005.022 2.534.6.004-.022c.27-1.467.786-2.828 1.456-3.845l.011-.017L2.02 7.17z",
              fill: `url(#lobe-icons-meta-2-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M2.807 12.264l-2.533-.6-.005.022c-.177.918-.267 1.851-.269 2.786v.023l2.598.233v-.023a12.591 12.591 0 01.21-2.44z",
              fill: `url(#lobe-icons-meta-3-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M2.677 15.537a5.462 5.462 0 01-.079-.813v-.022L0 14.468v.024a8.89 8.89 0 00.146 1.652l2.535-.585a4.106 4.106 0 01-.004-.022z",
              fill: `url(#lobe-icons-meta-4-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M3.27 16.89c-.284-.31-.484-.756-.589-1.328l-.004-.021-2.535.585.004.021c.192 1.01.568 1.85 1.106 2.487l.014.017 2.018-1.745a2.106 2.106 0 01-.015-.016z",
              fill: `url(#lobe-icons-meta-5-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M10.78 9.654c-1.528 2.35-2.454 3.825-2.454 3.825-2.035 3.2-2.739 3.917-3.871 3.917a1.545 1.545 0 01-1.186-.508l-2.017 1.744.014.017C2.01 19.518 3.058 20 4.356 20c1.963 0 3.374-.928 5.884-5.33l1.766-3.13a41.283 41.283 0 00-1.227-1.886z",
              fill: "#0082FB"
            }),
            (0, i.jsx)("path", {
              d: "M13.502 5.946l-.016.016c-.4.43-.786.908-1.16 1.416.378.483.768 1.024 1.175 1.63.48-.743.928-1.345 1.367-1.807l.016-.016-1.382-1.24z",
              fill: `url(#lobe-icons-meta-6-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M20.918 5.713C19.853 4.633 18.583 4 17.225 4c-1.432 0-2.637.787-3.723 1.944l-.016.016 1.382 1.24.016-.017c.715-.747 1.408-1.12 2.176-1.12.826 0 1.6.39 2.27 1.075l.015.016 1.589-1.425-.016-.016z",
              fill: "#0082FB"
            }),
            (0, i.jsx)("path", {
              d: "M23.998 14.125c-.06-3.467-1.27-6.566-3.064-8.396l-.016-.016-1.588 1.424.015.016c1.35 1.392 2.277 3.98 2.361 6.971v.023h2.292v-.022z",
              fill: `url(#lobe-icons-meta-7-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M23.998 14.15v-.023h-2.292v.022c.004.14.006.282.006.424 0 .815-.121 1.474-.368 1.95l-.011.022 1.708 1.782.013-.02c.62-.96.946-2.293.946-3.91 0-.083 0-.165-.002-.247z",
              fill: `url(#lobe-icons-meta-8-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M21.344 16.52l-.011.02c-.214.402-.519.67-.917.787l.778 2.462a3.493 3.493 0 00.438-.182 3.558 3.558 0 001.366-1.218l.044-.065.012-.02-1.71-1.784z",
              fill: `url(#lobe-icons-meta-9-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M19.92 17.393c-.262 0-.492-.039-.718-.14l-.798 2.522c.449.153.927.222 1.46.222.492 0 .943-.073 1.352-.215l-.78-2.462c-.167.05-.341.075-.517.073z",
              fill: `url(#lobe-icons-meta-10-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M18.323 16.534l-.014-.017-1.836 1.914.016.017c.637.682 1.246 1.105 1.937 1.337l.797-2.52c-.291-.125-.573-.353-.9-.731z",
              fill: `url(#lobe-icons-meta-11-${t2})`
            }),
            (0, i.jsx)("path", {
              d: "M18.309 16.515c-.55-.642-1.232-1.712-2.303-3.44l-1.396-2.336-.011-.02-1.62 2.438.012.02.989 1.668c.959 1.61 1.74 2.774 2.493 3.585l.016.016 1.834-1.914a2.353 2.353 0 01-.014-.017z",
              fill: `url(#lobe-icons-meta-12-${t2})`
            }),
            (0, i.jsxs)("defs", {
              children: [
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-0-${t2}`,
                  x1: "75.897%",
                  x2: "26.312%",
                  y1: "89.199%",
                  y2: "12.194%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: ".06%",
                      stopColor: "#0867DF"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "45.39%",
                      stopColor: "#0668E1"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "85.91%",
                      stopColor: "#0064E0"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-1-${t2}`,
                  x1: "21.67%",
                  x2: "97.068%",
                  y1: "75.874%",
                  y2: "23.985%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "13.23%",
                      stopColor: "#0064DF"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "99.88%",
                      stopColor: "#0064E0"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-2-${t2}`,
                  x1: "38.263%",
                  x2: "60.895%",
                  y1: "89.127%",
                  y2: "16.131%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "1.47%",
                      stopColor: "#0072EC"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "68.81%",
                      stopColor: "#0064DF"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-3-${t2}`,
                  x1: "47.032%",
                  x2: "52.15%",
                  y1: "90.19%",
                  y2: "15.745%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "7.31%",
                      stopColor: "#007CF6"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "99.43%",
                      stopColor: "#0072EC"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-4-${t2}`,
                  x1: "52.155%",
                  x2: "47.591%",
                  y1: "58.301%",
                  y2: "37.004%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "7.31%",
                      stopColor: "#007FF9"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#007CF6"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-5-${t2}`,
                  x1: "37.689%",
                  x2: "61.961%",
                  y1: "12.502%",
                  y2: "63.624%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "7.31%",
                      stopColor: "#007FF9"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#0082FB"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-6-${t2}`,
                  x1: "34.808%",
                  x2: "62.313%",
                  y1: "68.859%",
                  y2: "23.174%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "27.99%",
                      stopColor: "#007FF8"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "91.41%",
                      stopColor: "#0082FB"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-7-${t2}`,
                  x1: "43.762%",
                  x2: "57.602%",
                  y1: "6.235%",
                  y2: "98.514%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "0%",
                      stopColor: "#0082FB"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "99.95%",
                      stopColor: "#0081FA"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-8-${t2}`,
                  x1: "60.055%",
                  x2: "39.88%",
                  y1: "4.661%",
                  y2: "69.077%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "6.19%",
                      stopColor: "#0081FA"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#0080F9"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-9-${t2}`,
                  x1: "30.282%",
                  x2: "61.081%",
                  y1: "59.32%",
                  y2: "33.244%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "0%",
                      stopColor: "#027AF3"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#0080F9"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-10-${t2}`,
                  x1: "20.433%",
                  x2: "82.112%",
                  y1: "50.001%",
                  y2: "50.001%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "0%",
                      stopColor: "#0377EF"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "99.94%",
                      stopColor: "#0279F1"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-11-${t2}`,
                  x1: "40.303%",
                  x2: "72.394%",
                  y1: "35.298%",
                  y2: "57.811%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: ".19%",
                      stopColor: "#0471E9"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#0377EF"
                    })
                  ]
                }),
                (0, i.jsxs)("linearGradient", {
                  id: `lobe-icons-meta-12-${t2}`,
                  x1: "32.254%",
                  x2: "68.003%",
                  y1: "19.719%",
                  y2: "84.908%",
                  children: [
                    (0, i.jsx)("stop", {
                      offset: "27.65%",
                      stopColor: "#0867DF"
                    }),
                    (0, i.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#0471E9"
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
    },
    {
      id: "qwen",
      name: "Qwen",
      mark: function({ title: e2 = "Qwen", ...a2 }) {
        let t2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: [
            (0, i.jsx)("path", {
              d: "M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z",
              fill: `url(#lobe-icons-qwen-${t2})`,
              fillRule: "nonzero"
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsxs)("linearGradient", {
                id: `lobe-icons-qwen-${t2}`,
                x1: "0%",
                x2: "100%",
                y1: "0%",
                y2: "0%",
                children: [
                  (0, i.jsx)("stop", {
                    offset: "0%",
                    stopColor: "#6336E7",
                    stopOpacity: ".84"
                  }),
                  (0, i.jsx)("stop", {
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
    }
  ], v = (e2) => ({ levels: f, default: e2 }), _ = { levels: ["low", "medium", "high"], default: "medium" }, k = {
    mark: function({ title: e2 = "Claude", ...a2 }) {
      return (0, i.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, i.jsx)("path", {
          d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        })
      });
    },
    color: "#D97757"
  }, y = [
    {
      id: "claude-fable-5-1",
      name: "Claude Fable 5.1",
      provider: "anthropic",
      tag: "Most capable",
      ...k,
      blurb: "Most capable, for the hardest work",
      description: "The most capable widely released Claude. Thinking is always on, for the hardest research, coding and agent work.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 1e6,
      maxOutput: 128e3,
      price: { input: 10, output: 50 },
      released: "2026-09-01",
      effort: v("high"),
      latency: 1.3
    },
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      provider: "anthropic",
      tag: "Recommended",
      ...k,
      blurb: "Complex coding, agents and analysis",
      description: "The default flagship for complex coding, long agent runs and careful analysis. Effort sets how long it thinks.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 1e6,
      maxOutput: 128e3,
      price: { input: 4, output: 20 },
      released: "2026-09-22",
      effort: v("medium"),
      latency: 0.95
    },
    {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      provider: "anthropic",
      ...k,
      blurb: "Smart and efficient for everyday work",
      description: "Everyday coding and agents at a lower price, with strong tool use across a full 1M token context.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 1e6,
      maxOutput: 128e3,
      price: { input: 2, output: 10 },
      released: "2026-09-28",
      effort: v("high"),
      latency: 0.6
    },
    {
      id: "claude-haiku-5-5",
      name: "Claude Haiku 5.5",
      provider: "anthropic",
      tag: "Fast",
      ...k,
      blurb: "Fastest, for quick answers",
      description: "The fastest and cheapest Claude, for high volume work, sub-agents and quick replies.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 1e6,
      maxOutput: 128e3,
      price: { input: 0.1, output: 0.5 },
      released: "2026-10-07",
      effort: v("medium"),
      latency: 0.28
    },
    {
      id: "gpt-6.1-sol",
      name: "GPT-6.1 Sol",
      provider: "openai",
      blurb: "General reasoning across text and images",
      description: "A general reasoning model for coding, analysis and multimodal work, tuned for long tool loops.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 1e6,
      maxOutput: 128e3,
      price: { input: 5, output: 30 },
      released: "2026-09-29",
      effort: _,
      latency: 0.85
    },
    {
      id: "gpt-6-luna",
      name: "GPT-6 Luna",
      provider: "openai",
      tag: "Fast",
      blurb: "Small and quick for simple tasks",
      description: "A small, quick model for classification, extraction and chat that has to feel instant.",
      capabilities: ["vision", "tools"],
      context: 4e5,
      maxOutput: 64e3,
      price: { input: 0.4, output: 2 },
      released: "2026-09-22",
      latency: 0.32
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      provider: "google",
      blurb: "Long context, reads whole repositories",
      description: "A long context reasoning model that reads whole repositories, videos and document sets in one pass.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 2e6,
      maxOutput: 64e3,
      price: { input: 3.5, output: 21 },
      released: "2026-09-30",
      effort: _,
      latency: 0.9
    },
    {
      id: "gemini-3.8-flash",
      name: "Gemini 3.8 Flash",
      provider: "google",
      tag: "Fast",
      blurb: "Fast multimodal for high volume",
      description: "A fast multimodal model for high volume pipelines, with light thinking when it helps.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 1e6,
      maxOutput: 64e3,
      price: { input: 0.3, output: 2.5 },
      released: "2026-09-02",
      effort: _,
      latency: 0.3
    },
    {
      id: "grok-4.7",
      name: "Grok 4.7",
      provider: "xai",
      mark: function({ title: e2 = "Grok", ...a2 }) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          fillRule: "evenodd",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, i.jsx)("path", {
            d: "M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815"
          })
        });
      },
      blurb: "Reasoning with live search",
      description: "A reasoning model with live search tools, for research and fast moving topics.",
      capabilities: ["reasoning", "vision", "tools"],
      context: 512e3,
      maxOutput: 64e3,
      price: { input: 3, output: 15 },
      released: "2026-09-21",
      effort: _,
      latency: 0.75
    },
    {
      id: "mistral-large-4",
      name: "Mistral Large 4",
      provider: "mistral",
      blurb: "Multilingual generalist",
      description: "A strong multilingual generalist for European languages, documents and agents.",
      capabilities: ["vision", "tools"],
      context: 256e3,
      maxOutput: 32e3,
      price: { input: 1.5, output: 6 },
      released: "2026-10-06",
      latency: 0.5
    },
    {
      id: "deepseek-v4.1-flash",
      name: "DeepSeek V4.1 Flash",
      provider: "deepseek",
      tag: "Open weights",
      blurb: "Low cost, with open weights",
      description: "A low cost reasoning model you can also run on your own hardware.",
      capabilities: ["reasoning", "tools"],
      context: 256e3,
      maxOutput: 32e3,
      price: { input: 0.14, output: 0.56 },
      released: "2026-09-10",
      effort: _,
      latency: 0.45
    },
    {
      id: "muse-spark-1.3",
      name: "Muse Spark 1.3",
      provider: "meta",
      blurb: "Everyday chat and images",
      description: "A multimodal assistant model for chat, images and everyday writing.",
      capabilities: ["vision", "tools"],
      context: 1e6,
      maxOutput: 32e3,
      price: { input: 0.6, output: 2.4 },
      released: "2026-09-02",
      latency: 0.48
    },
    {
      id: "qwen3.8-max",
      name: "Qwen3.8 Max",
      provider: "qwen",
      blurb: "Strong at code and math",
      description: "A large reasoning model with strong code and math, and wide language coverage.",
      capabilities: ["reasoning", "tools"],
      context: 1e6,
      maxOutput: 64e3,
      price: { input: 1.2, output: 6 },
      released: "2026-08-02",
      effort: _,
      latency: 0.8
    }
  ], w = [
    "claude-opus-5-5",
    "claude-sonnet-5-5",
    "gpt-6.1-sol",
    "gemini-4-argon"
  ], b = {
    low: "Quickest answers",
    medium: "Balanced speed and depth",
    high: "Thinks longer",
    xhigh: "Thinks much longer",
    max: "Deepest thinking, slowest"
  };
  function M(e2, a2) {
    if (!e2.effort) return;
    let { levels: t2 } = e2.effort;
    if (!a2) return e2.effort.default;
    if (t2.includes(a2)) return a2;
    let i2 = f.indexOf(a2);
    return t2.reduce(
      (e3, a3) => Math.abs(f.indexOf(a3) - i2) < Math.abs(f.indexOf(e3) - i2) ? a3 : e3,
      t2[0]
    );
  }
  var N = t(61597), C = t.n(N);
  let { spring: F, duration: z, ease: L } = x.T, A = { type: "spring", visualDuration: 0.24, bounce: 0 }, $ = [...L.standard], E = (e2) => `$${e2.toFixed(2)}`, S = (...e2) => e2.filter(Boolean).join(" ");
  function O(e2, a2, t2) {
    let [i2, l2] = (0, r.useState)(a2), s2 = void 0 !== e2;
    return [
      s2 ? e2 : i2,
      (0, r.useCallback)(
        (e3) => {
          s2 || l2(e3), t2?.(e3);
        },
        [s2, t2]
      )
    ];
  }
  function B({ model: e2, provider: a2, className: t2 }) {
    let r2 = e2.mark ?? a2?.mark, l2 = e2.mark ? e2.color : a2?.color;
    return r2 ? (0, i.jsx)(r2, {
      className: S(C().mark, t2),
      style: l2 ? { color: l2 } : void 0,
      "aria-hidden": "true",
      focusable: "false"
    }) : (0, i.jsx)("span", {
      className: S(C().letter, t2),
      "aria-hidden": "true",
      children: e2.name[0]
    });
  }
  function G({ children: e2, reduced: a2 }) {
    return (0, i.jsx)("span", {
      className: C().swap,
      children: (0, i.jsx)(s.N, {
        initial: false,
        mode: "popLayout",
        children: (0, i.jsx)(
          o.PY1.span,
          {
            initial: !a2 && { opacity: 0, y: 3 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: 0.1 * !a2, ease: $ } },
            transition: { duration: a2 ? 0 : z.fast, ease: $ },
            children: e2
          },
          e2
        )
      })
    });
  }
  function V({ model: e2, provider: a2, level: t2, reduced: l2 }) {
    let n2 = (0, r.useRef)(null), c2 = (0, r.useRef)(null), [d2, p2] = (0, r.useState)({ width: "auto", animate: false }), m2 = `${e2.id}|${t2 ?? ""}`;
    (0, r.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3) return;
      let a3 = new ResizeObserver(([a4]) => {
        if (!a4) return;
        let t3 = e3.dataset.key ?? "", i2 = null !== c2.current && c2.current !== t3;
        c2.current = t3, p2({
          width: Math.ceil(a4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth),
          animate: i2
        });
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let u2 = (a3) => (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: C().triggerName, children: e2.name }),
        t2 && (0, i.jsx)("span", {
          className: C().triggerEffort,
          "aria-hidden": a3 || void 0,
          children: g[t2]
        })
      ]
    });
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", {
          className: C().triggerMark,
          "aria-hidden": "true",
          children: (0, i.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: (0, i.jsx)(
              o.PY1.span,
              {
                className: C().triggerMarkLayer,
                initial: l2 ? { opacity: 0 } : { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                exit: l2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: { duration: 0.1, ease: $ } },
                transition: l2 ? { duration: 0 } : { duration: z.fast, ease: $ },
                children: (0, i.jsx)(B, { model: e2, provider: a2 })
              },
              e2.id
            )
          })
        }),
        (0, i.jsxs)(o.PY1.span, {
          className: C().triggerText,
          initial: false,
          animate: { width: d2.width },
          transition: d2.animate && !l2 ? A : { duration: 0 },
          children: [
            (0, i.jsx)("span", {
              ref: n2,
              "data-key": m2,
              className: S(C().triggerInner, C().measure),
              "aria-hidden": "true",
              children: u2(true)
            }),
            (0, i.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              children: (0, i.jsx)(
                o.PY1.span,
                {
                  className: C().triggerInner,
                  initial: l2 ? { opacity: 0 } : { opacity: 0, y: 3 },
                  animate: { opacity: 1, y: 0 },
                  exit: l2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: { duration: 0.1, ease: $ } },
                  transition: l2 ? { duration: 0 } : { duration: z.fast, ease: $ },
                  children: u2()
                },
                m2
              )
            })
          ]
        })
      ]
    });
  }
  function I(e2, a2) {
    let [t2, l2] = (0, r.useState)(null), s2 = (0, r.useRef)(null), n2 = (0, r.useRef)(false), c2 = (0, r.useRef)(0);
    (0, r.useEffect)(() => () => window.clearTimeout(c2.current), []);
    let [d2, p2] = (0, r.useState)(a2);
    return d2 !== a2 && (p2(a2), l2(null)), {
      container: s2,
      highlight: (0, i.jsx)(o.PY1.span, {
        className: C().highlight,
        "aria-hidden": "true",
        initial: false,
        animate: t2 ? { y: t2.top, height: t2.height, opacity: 1 } : { opacity: 0 },
        transition: {
          default: t2?.glide && !e2 ? A : { duration: 0 },
          opacity: { duration: 0.08 * !e2 }
        }
      }),
      handlers: {
        onFocus: (e3) => {
          let a3 = e3.target instanceof HTMLElement ? e3.target.closest('[role^="menuitem"]') : null;
          if (a3 && a3.offsetParent !== s2.current) return;
          if (window.clearTimeout(c2.current), !a3) {
            c2.current = window.setTimeout(() => l2(null), 70 * !!n2.current);
            return;
          }
          let t3 = n2.current;
          l2((e4) => ({
            top: a3.offsetTop,
            height: a3.offsetHeight,
            glide: t3 && null !== e4
          }));
        },
        onPointerMoveCapture: () => {
          n2.current = true;
        },
        onKeyDownCapture: () => {
          n2.current = false;
        }
      }
    };
  }
  function T({ children: e2, reduced: a2 }) {
    let t2 = (0, r.useRef)(null), [l2, s2] = (0, r.useState)("auto");
    return (0, r.useLayoutEffect)(() => {
      let e3 = t2.current;
      if (!e3) return;
      let a3 = new ResizeObserver(() => s2(e3.offsetHeight));
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, i.jsx)(o.PY1.div, {
      className: C().autoHeight,
      initial: false,
      animate: { height: l2 },
      transition: a2 ? { duration: 0 } : F.smooth,
      children: (0, i.jsx)("div", { ref: t2, children: e2 })
    });
  }
  function H({
    children: e2,
    reduced: a2,
    page: t2,
    listId: r2,
    onCloseAutoFocus: s2,
    onKeyDown: o2
  }) {
    let { container: n2, highlight: c2, handlers: d2 } = I(a2, t2);
    return (0, i.jsx)(l.ZL, {
      children: (0, i.jsx)(l.UC, {
        className: C().menu,
        align: "center",
        sideOffset: 8,
        collisionPadding: 12,
        loop: true,
        onCloseAutoFocus: s2,
        onKeyDown: o2,
        ...d2,
        children: (0, i.jsx)(T, {
          reduced: a2,
          children: (0, i.jsxs)("div", {
            ref: n2,
            id: r2,
            className: C().list,
            "data-page": t2,
            children: [c2, e2]
          })
        })
      })
    });
  }
  function P({ children: e2, reduced: a2, className: t2, label: r2 }) {
    let { container: s2, highlight: o2, handlers: n2 } = I(a2);
    return (0, i.jsx)(l.ZL, {
      children: (0, i.jsx)(l.G5, {
        className: S(C().menu, t2),
        sideOffset: 8,
        alignOffset: -7,
        collisionPadding: 12,
        loop: true,
        "aria-label": r2,
        ...n2,
        children: (0, i.jsxs)("div", {
          ref: s2,
          className: C().list,
          children: [o2, e2]
        })
      })
    });
  }
  let R = "(max-width: 640px)";
  function D({
    models: e2,
    providers: a2,
    featured: t2,
    value: x2,
    defaultValue: f2,
    onValueChange: v2,
    effort: _2,
    defaultEffort: k2,
    onEffortChange: N2,
    open: F2,
    defaultOpen: L2 = false,
    onOpenChange: A2,
    showSummary: I2 = true,
    className: T2
  }) {
    var q2;
    let Z = !!(0, n.I)(), Y = e2 ?? y, U = a2 ?? j, K = t2 ?? (e2 ? Y.slice(0, 4).map((e3) => e3.id) : w), J = (0, r.useMemo)(() => new Map(U.map((e3) => [e3.id, e3])), [U]), [Q, W] = O(x2, f2 ?? K[0] ?? Y[0]?.id ?? ""), X = Y.find((e3) => e3.id === Q) ?? Y[0], [ee, ea] = O(_2, k2 ?? (X && M(X, void 0)) ?? "medium", N2), [et, ei] = O(F2, L2, A2), [er, el] = (0, r.useState)(null), [es, eo] = (0, r.useState)(""), en = (0, r.useRef)(0), ec = (0, r.useRef)(null), ed = (0, r.useRef)("pointer"), ep = (0, r.useSyncExternalStore)(
      (e3) => {
        let a3 = window.matchMedia(R);
        return a3.addEventListener("change", e3), () => a3.removeEventListener("change", e3);
      },
      () => window.matchMedia(R).matches,
      () => false
    ), [em, eu] = (0, r.useState)("main"), [eh, ex] = (0, r.useState)(false), ef = (0, r.useRef)("main"), eg = (0, r.useId)();
    (0, r.useEffect)(() => {
      if (!et || em === ef.current) return;
      let e3 = ef.current;
      ef.current = em;
      let a3 = requestAnimationFrame(() => {
        let a4 = document.getElementById(eg), t3 = "main" === em ? a4?.querySelector(`[data-row="${e3}"]`) : a4?.querySelector(
          '[role="menuitemradio"][data-state="checked"]'
        ) ?? a4?.querySelector('[role="menuitemradio"]');
        t3?.focus({ preventScroll: false }), t3?.scrollIntoView({ block: "nearest" });
      });
      return () => cancelAnimationFrame(a3);
    }, [em, et, eg]), (0, r.useEffect)(() => {
      let e3 = () => {
        ed.current = "pointer";
      }, a3 = () => {
        ed.current = "keyboard";
      };
      return window.addEventListener("pointerdown", e3, true), window.addEventListener("keydown", a3, true), () => {
        window.removeEventListener("pointerdown", e3, true), window.removeEventListener("keydown", a3, true);
      };
    }, []);
    let ej = K.map((e3) => Y.find((a3) => a3.id === e3)).filter((e3) => !!e3), ev = new Set(ej.map((e3) => e3.id)), e_ = U.map((e3) => ({
      provider: e3,
      models: Y.filter((a3) => a3.provider === e3.id && !ev.has(a3.id))
    })).filter((e3) => e3.models.length), ek = Y.filter((e3) => !ev.has(e3.id) && !J.has(e3.provider));
    if ((0, r.useEffect)(() => {
      if (!er) return;
      let e3 = window.setTimeout(() => el(null), 2600);
      return () => window.clearTimeout(e3);
    }, [er]), !X)
      return null;
    let ey = M(X, ee), ew = J.get(X.provider), eb = !ev.has(X.id), eM = (e3) => {
      let a3 = Y.find((a4) => a4.id === e3);
      if (!a3 || e3 === X.id) return;
      let t3 = M(a3, ee);
      W(e3), v2?.(e3, a3), t3 && t3 !== ee && ea(t3), el({ text: `Switched from ${X.name}`, key: ++en.current }), eo(
        `Now using ${a3.name}${t3 ? `, ${g[t3].toLowerCase()} effort` : ""}`
      );
    }, eN = Z ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0 } },
      transition: { duration: 0 }
    } : {
      initial: { opacity: 0, y: 4 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, transition: { duration: z.instant, ease: $ } },
      transition: { duration: z.fast, ease: $ }
    }, eC = X.effort && ey ? (0, i.jsx)(l.z6, {
      value: ey,
      onValueChange: (e3) => {
        e3 !== ey && (ea(e3), el({
          text: `Effort set to ${g[e3].toLowerCase()}`,
          key: ++en.current
        }), eo(`${X.name}, ${g[e3].toLowerCase()} effort`));
      },
      children: X.effort.levels.map(
        (e3) => (0, i.jsxs)(
          l.hN,
          {
            value: e3,
            textValue: g[e3],
            className: S(C().item, C().effortItem),
            children: [
              (0, i.jsxs)("span", {
                className: C().itemText,
                children: [
                  (0, i.jsxs)("span", {
                    className: C().itemName,
                    children: [
                      g[e3],
                      e3 === X.effort?.default && (0, i.jsx)("span", {
                        className: C().default,
                        children: "Default"
                      })
                    ]
                  }),
                  (0, i.jsx)("span", {
                    className: C().itemBlurb,
                    children: b[e3]
                  })
                ]
              }),
              (0, i.jsx)(l.VF, {
                className: C().check,
                children: (0, i.jsx)(c.A, { "aria-hidden": "true" })
              })
            ]
          },
          e3
        )
      )
    }) : null, eF = e_.length > 0 || ek.length > 0, ez = (0, i.jsx)(l.z6, {
      value: X.id,
      onValueChange: eM,
      children: [
        ...e_,
        ...ek.length ? [{ provider: void 0, models: ek }] : []
      ].map(
        (e3) => (0, i.jsxs)(
          r.Fragment,
          {
            children: [
              (0, i.jsx)(l.JU, {
                className: C().groupLabel,
                children: e3.provider?.name ?? "Other"
              }),
              e3.models.map(
                (a3) => (0, i.jsxs)(
                  l.hN,
                  {
                    value: a3.id,
                    textValue: a3.name,
                    className: S(C().item, C().compact),
                    children: [
                      (0, i.jsx)(B, {
                        model: a3,
                        provider: e3.provider,
                        className: C().compactMark
                      }),
                      (0, i.jsx)("span", {
                        className: C().compactName,
                        children: a3.name
                      }),
                      a3.tag && (0, i.jsx)("span", {
                        className: C().tag,
                        children: a3.tag
                      }),
                      (0, i.jsx)(l.VF, {
                        className: C().check,
                        children: (0, i.jsx)(c.A, { "aria-hidden": "true" })
                      })
                    ]
                  },
                  a3.id
                )
              )
            ]
          },
          e3.provider?.id ?? "other"
        )
      )
    }), eL = ey ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(d.A, {
          className: C().rowIcon,
          "aria-hidden": "true"
        }),
        (0, i.jsx)("span", {
          className: C().rowLabel,
          children: "Effort"
        }),
        (0, i.jsx)("span", { className: C().rowValue, children: g[ey] }),
        (0, i.jsx)(p.A, {
          className: C().rowChevron,
          "aria-hidden": "true"
        })
      ]
    }) : null, eA = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(m.A, { className: C().rowIcon, "aria-hidden": "true" }),
        (0, i.jsx)("span", {
          className: C().rowLabel,
          children: "More models"
        }),
        eb && (0, i.jsx)("span", { className: C().rowValue, children: X.name }),
        (0, i.jsx)(p.A, { className: C().rowChevron, "aria-hidden": "true" })
      ]
    }), e$ = (e3) => (a3) => {
      a3.preventDefault(), ex(true), eu(e3);
    }, eE = (e3) => (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)(l.q7, {
          className: S(C().row, C().back),
          textValue: "Back",
          "aria-label": `Back to all models, ${e3}`,
          onSelect: e$("main"),
          children: [
            (0, i.jsx)(u.A, {
              className: C().rowIcon,
              "aria-hidden": "true"
            }),
            (0, i.jsx)("span", { className: C().rowLabel, children: e3 })
          ]
        }),
        (0, i.jsx)(l.wv, { className: C().separator })
      ]
    }), eS = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(l.z6, {
          value: X.id,
          onValueChange: eM,
          children: ej.map(
            (e3, a3) => (0, i.jsxs)(
              l.hN,
              {
                value: e3.id,
                textValue: e3.name,
                className: C().item,
                style: { "--i": a3 },
                children: [
                  (0, i.jsx)(B, {
                    model: e3,
                    provider: J.get(e3.provider),
                    className: C().itemMark
                  }),
                  (0, i.jsxs)("span", {
                    className: C().itemText,
                    children: [
                      (0, i.jsx)("span", {
                        className: C().itemName,
                        children: e3.name
                      }),
                      (0, i.jsx)("span", {
                        className: C().itemBlurb,
                        children: e3.blurb
                      })
                    ]
                  }),
                  (0, i.jsx)(l.VF, {
                    className: C().check,
                    children: (0, i.jsx)(c.A, { "aria-hidden": "true" })
                  })
                ]
              },
              e3.id
            )
          )
        }),
        (eC || eF) && (0, i.jsx)(l.wv, { className: C().separator }),
        eC && (ep ? (0, i.jsx)(l.q7, {
          className: C().row,
          "data-row": "effort",
          textValue: "Effort",
          onSelect: e$("effort"),
          children: eL
        }) : (0, i.jsxs)(l.Pb, {
          children: [
            (0, i.jsx)(l.ZP, {
              className: C().row,
              textValue: "Effort",
              children: eL
            }),
            (0, i.jsx)(P, {
              reduced: Z,
              label: "Effort",
              className: C().effortMenu,
              children: eC
            })
          ]
        })),
        eF && (ep ? (0, i.jsx)(l.q7, {
          className: C().row,
          "data-row": "more",
          textValue: "More models",
          onSelect: e$("more"),
          children: eA
        }) : (0, i.jsxs)(l.Pb, {
          children: [
            (0, i.jsx)(l.ZP, {
              className: C().row,
              textValue: "More models",
              children: eA
            }),
            (0, i.jsx)(P, {
              reduced: Z,
              label: "More models",
              className: C().moreMenu,
              children: ez
            })
          ]
        }))
      ]
    }), eO = ep ? em : "main", eB = "effort" === eO && eC ? (0, i.jsxs)(i.Fragment, { children: [eE("Effort"), eC] }) : "more" === eO ? (0, i.jsxs)(i.Fragment, { children: [eE("More models"), ez] }) : eS;
    return (0, i.jsxs)("div", {
      className: S(C().root, T2),
      children: [
        (0, i.jsxs)("div", {
          className: C().stage,
          children: [
            (0, i.jsxs)(l.bL, {
              open: et,
              onOpenChange: (e3) => {
                e3 && (eu("main"), ex(false), ef.current = "main"), ei(e3);
              },
              children: [
                (0, i.jsxs)(l.l9, {
                  ref: ec,
                  className: C().trigger,
                  "aria-label": `Model: ${X.name}${ey ? `, ${g[ey].toLowerCase()} effort` : ""}. Change model`,
                  children: [
                    (0, i.jsx)(V, {
                      model: X,
                      provider: ew,
                      level: ey,
                      reduced: Z
                    }),
                    (0, i.jsx)(h.A, {
                      className: C().chevron,
                      "aria-hidden": "true"
                    })
                  ]
                }),
                (0, i.jsx)(H, {
                  reduced: Z,
                  page: eO,
                  listId: eg,
                  onCloseAutoFocus: (e3) => {
                    "pointer" === ed.current && (e3.preventDefault(), ec.current?.focus({
                      preventScroll: true,
                      focusVisible: false
                    }));
                  },
                  onKeyDown: (e3) => {
                    if (!ep) return;
                    if ("main" !== eO && "ArrowLeft" === e3.key) {
                      e3.preventDefault(), ex(true), eu("main");
                      return;
                    }
                    let a3 = e3.target.dataset?.row;
                    "main" === eO && "ArrowRight" === e3.key && a3 && (e3.preventDefault(), ex(true), eu(a3));
                  },
                  children: (0, i.jsx)(
                    o.PY1.div,
                    {
                      className: C().page,
                      initial: !Z && !!eh && { opacity: 0, x: "main" === eO ? -12 : 12 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: z.fast, ease: $ },
                      children: eB
                    },
                    eO
                  )
                })
              ]
            }),
            I2 && (0, i.jsxs)("section", {
              className: C().summary,
              "aria-label": "Selected model",
              children: [
                (0, i.jsx)("div", {
                  className: C().descriptionSlot,
                  children: (0, i.jsx)(s.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, i.jsx)(
                      o.PY1.p,
                      {
                        className: C().description,
                        ...eN,
                        children: X.description
                      },
                      X.id
                    )
                  })
                }),
                (0, i.jsxs)("dl", {
                  className: C().facts,
                  children: [
                    (0, i.jsxs)("div", {
                      className: C().fact,
                      children: [
                        (0, i.jsx)("dt", { children: "Context" }),
                        (0, i.jsx)("dd", {
                          children: (0, i.jsx)(G, {
                            reduced: Z,
                            children: `${(q2 = X.context) >= 1e6 ? `${+(q2 / 1e6).toFixed(1)}M` : `${Math.round(q2 / 1e3)}K`} tokens`
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      className: C().fact,
                      children: [
                        (0, i.jsx)("dt", { children: "Input" }),
                        (0, i.jsx)("dd", {
                          children: (0, i.jsx)(G, {
                            reduced: Z,
                            children: E(X.price.input)
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      className: C().fact,
                      children: [
                        (0, i.jsx)("dt", { children: "Output" }),
                        (0, i.jsx)("dd", {
                          children: (0, i.jsx)(G, {
                            reduced: Z,
                            children: E(X.price.output)
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      className: C().fact,
                      children: [
                        (0, i.jsx)("dt", { children: "Effort" }),
                        (0, i.jsx)("dd", {
                          children: (0, i.jsx)(G, {
                            reduced: Z,
                            children: ey ? g[ey] : "Fixed"
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("p", {
                  className: C().note,
                  children: [
                    "Prices per million tokens",
                    Y === y ? ". Non-Anthropic prices are sample values" : ""
                  ]
                }),
                (0, i.jsx)("div", {
                  className: C().changeSlot,
                  children: (0, i.jsx)(s.N, {
                    initial: false,
                    children: er && (0, i.jsxs)(
                      o.PY1.p,
                      {
                        className: C().change,
                        ...eN,
                        children: [
                          (0, i.jsx)(c.A, { "aria-hidden": "true" }),
                          er.text
                        ]
                      },
                      er.key
                    )
                  })
                })
              ]
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: C().srOnly,
          role: "status",
          "aria-live": "polite",
          children: es
        })
      ]
    });
  }
  let q = D;
}

__m(__module,__exports,__require);
});
A.reg(19707, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var r = t(51811);
  let l = {
    name: "layers",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
          key: "zw3jo"
        }
      ],
      [
        "path",
        {
          d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
          key: "1wduqc"
        }
      ],
      [
        "path",
        {
          d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
          key: "kqbvx6"
        }
      ]
    ],
    aliases: ["layers-3"]
  };
  l.node;
  let s = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(44236, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "gauge",
    size: 24,
    node: [
      ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
      ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
    ]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(61597, ".model-picker_root__Kzapi{container-type:inline-size;display:grid;width:100%;min-height:460px;place-items:center;padding:var(--space-8) var(--space-4)}.model-picker_stage__lme2m{display:grid;width:100%;max-width:440px;justify-items:center;gap:var(--space-6)}.model-picker_trigger__YHeAR{display:inline-flex;max-width:100%;height:40px;align-items:center;gap:8px;padding:0 12px 0 13px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:-.01em;cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.model-picker_trigger__YHeAR:hover{border-color:var(--border-strong);background:var(--surface-muted)}}.model-picker_trigger__YHeAR[data-state=open]{border-color:var(--border-strong);background:var(--surface-muted)}.model-picker_trigger__YHeAR:active{border-color:var(--border-strong);background:color-mix(in oklab,var(--surface-muted),var(--border) 55%)}.model-picker_triggerMark__JuHET{position:relative;display:inline-grid;width:16px;height:16px;flex:none}.model-picker_triggerMarkLayer__atumT{display:grid;grid-area:1/1}.model-picker_triggerText__lIxr1{position:relative;display:inline-flex;min-width:0;overflow-x:clip}.model-picker_triggerInner__ey8OR{display:inline-flex;align-items:baseline;gap:7px;white-space:nowrap}.model-picker_measure__0lMLn{position:absolute;top:0;left:0;visibility:hidden;pointer-events:none}.model-picker_triggerName__ZC__0{font-weight:500}.model-picker_triggerEffort__Qi93Z{color:var(--text-muted)}.model-picker_chevron__AhAhV{width:15px;height:15px;flex:none;color:var(--text-muted);stroke-width:1.75;transition:transform var(--duration-spring) var(--ease-spring)}.model-picker_trigger__YHeAR[data-state=open] .model-picker_chevron__AhAhV{transform:rotate(180deg)}.model-picker_mark__aKlxF{display:block;width:100%;height:100%}.model-picker_letter__JGPa1{display:inline-grid;place-items:center;border-radius:4px;background:var(--surface-muted);color:var(--text-secondary);font-size:10px;font-weight:500}.model-picker_menu__owGKL{--menu-x:0px;--menu-y:-6px;position:relative;z-index:60;width:304px;max-width:var(--radix-dropdown-menu-content-available-width);padding:0;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-size:var(--text-sm);letter-spacing:-.01em;transform-origin:var(--radix-dropdown-menu-content-transform-origin);outline:none;transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring)}.model-picker_menu__owGKL[data-side=top]{--menu-y:6px}.model-picker_menu__owGKL[data-side=right]{--menu-x:-6px;--menu-y:0px}.model-picker_menu__owGKL[data-side=left]{--menu-x:6px;--menu-y:0px}.model-picker_menu__owGKL[data-state=closed]{opacity:0;transform:translate(calc(var(--menu-x) * .5),calc(var(--menu-y) * .5)) scale(.985);transition:opacity .13s var(--ease-standard),transform .13s var(--ease-standard);animation:model-picker_menu-exit__KGk9s .13s linear both;pointer-events:none}@keyframes model-picker_menu-exit__KGk9s{to{--menu-exit:1}}.model-picker_effortMenu__1Cagt{width:264px}.model-picker_moreMenu__RAUkx{width:272px}.model-picker_autoHeight__07sf_{overflow:hidden}.model-picker_list__y_c21{position:relative;max-height:min(420px,calc(var(--radix-dropdown-menu-content-available-height) - 2px));padding:6px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.model-picker_page__7VhO2{display:block}.model-picker_back__9CU3c .model-picker_rowLabel__PO4sG{font-weight:500}.model-picker_highlight__c8kpy{position:absolute;top:0;right:6px;left:6px;border-radius:calc(var(--radius-panel) - 8px);background:var(--surface-muted);opacity:0;pointer-events:none}.model-picker_item__HnpJq,.model-picker_row__YIgRl{position:relative;display:flex;align-items:center;gap:12px;padding:0 10px;border-radius:calc(var(--radius-panel) - 8px);color:var(--foreground);cursor:pointer;outline:none;user-select:none;-webkit-user-select:none}.model-picker_item__HnpJq:focus-visible,.model-picker_row__YIgRl:focus-visible{outline:none}.model-picker_item__HnpJq{min-height:54px}.model-picker_row__YIgRl{min-height:40px}.model-picker_itemMark__okLtJ{width:18px;height:18px;flex:none}.model-picker_itemText__KZhJy{display:grid;min-width:0;flex:1;gap:1px}.model-picker_itemName__M2urS{display:flex;align-items:baseline;gap:8px;font-weight:500;line-height:1.3}.model-picker_itemBlurb__6_i9I{overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);line-height:1.35;text-overflow:ellipsis;white-space:nowrap}.model-picker_default__swBkW{color:var(--text-muted);font-size:var(--text-xs);font-weight:400}.model-picker_effortItem__TnHo_{min-height:50px;padding-left:12px}.model-picker_check__Sy79F{display:inline-flex;flex:none;color:var(--accent)}.model-picker_check__Sy79F svg{width:16px;height:16px;stroke-width:2}.model-picker_rowIcon__e81RN{width:18px;height:18px;flex:none;color:var(--text-secondary);stroke-width:1.75}.model-picker_rowLabel__PO4sG{flex:1}.model-picker_rowValue__eFh5r{max-width:132px;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}.model-picker_rowChevron__l8_Wx{width:15px;height:15px;flex:none;margin-right:-2px;color:var(--text-muted);stroke-width:1.75}.model-picker_row__YIgRl[data-state=open] .model-picker_rowChevron__l8_Wx,.model-picker_row__YIgRl[data-state=open] .model-picker_rowIcon__e81RN{color:var(--foreground)}.model-picker_separator__6rfpz{height:1px;margin:6px;background:var(--border-subtle)}.model-picker_groupLabel__tw7Y2{padding:10px 10px 4px;color:var(--text-muted);font-size:var(--text-xs);line-height:1.3}.model-picker_groupLabel__tw7Y2:first-child{padding-top:6px}.model-picker_compact__C9JAY{min-height:38px;gap:10px}.model-picker_compactMark__j4rPu{width:16px;height:16px;flex:none}.model-picker_compactName__07UWG{min-width:0;flex:1;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.model-picker_tag__kT8zq{flex:none;color:var(--text-muted);font-size:var(--text-xs)}.model-picker_summary__EyGrF{display:grid;width:100%;justify-items:center;gap:var(--space-3);text-align:center}.model-picker_descriptionSlot__wi46r{display:grid;width:100%;max-width:380px;min-height:3em;align-items:start}.model-picker_description__60VU0{grid-area:1/1;margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:1.5;text-wrap:balance}.model-picker_facts__6ptDR{display:grid;width:100%;grid-template-columns:repeat(4,minmax(0,1fr));margin:var(--space-1) 0 0;border:1px solid var(--border-subtle);border-radius:var(--radius-control)}.model-picker_fact__e2gAM{display:grid;min-width:0;gap:3px;padding:11px 8px 12px}.model-picker_fact__e2gAM+.model-picker_fact__e2gAM{border-left:1px solid var(--border-subtle)}.model-picker_fact__e2gAM dt{color:var(--text-muted);font-size:var(--text-xs);line-height:1.3}.model-picker_fact__e2gAM dd{margin:0;overflow:hidden;font-size:var(--text-sm);font-variant-numeric:tabular-nums;font-weight:500;line-height:1.3;text-overflow:ellipsis;white-space:nowrap}.model-picker_note__3SBBr{margin:0;color:var(--text-muted);font-size:var(--text-xs)}.model-picker_changeSlot__hgpAY{display:grid;min-height:20px;place-items:center}.model-picker_change__FEfXl{display:inline-flex;grid-area:1/1;align-items:center;gap:6px;margin:0;color:var(--text-secondary);font-size:var(--text-xs)}.model-picker_change__FEfXl svg{width:14px;height:14px;color:var(--success);stroke-width:2}.model-picker_swap__QR_c_{display:inline-grid;max-width:100%}.model-picker_swap__QR_c_>*{grid-area:1/1}.model-picker_srOnly__sDZD2{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.model-picker_chevron__AhAhV,.model-picker_trigger__YHeAR{transition:none}}@media (prefers-reduced-motion:reduce){.model-picker_menu__owGKL,.model-picker_menu__owGKL[data-state=closed]{transform:none;transition:opacity var(--duration-instant) linear}}", {"root":"model-picker_root__Kzapi","stage":"model-picker_stage__lme2m","trigger":"model-picker_trigger__YHeAR","triggerMark":"model-picker_triggerMark__JuHET","triggerMarkLayer":"model-picker_triggerMarkLayer__atumT","triggerText":"model-picker_triggerText__lIxr1","triggerInner":"model-picker_triggerInner__ey8OR","measure":"model-picker_measure__0lMLn","triggerName":"model-picker_triggerName__ZC__0","triggerEffort":"model-picker_triggerEffort__Qi93Z","chevron":"model-picker_chevron__AhAhV","mark":"model-picker_mark__aKlxF","letter":"model-picker_letter__JGPa1","menu":"model-picker_menu__owGKL","menu-exit":"model-picker_menu-exit__KGk9s","effortMenu":"model-picker_effortMenu__1Cagt","moreMenu":"model-picker_moreMenu__RAUkx","autoHeight":"model-picker_autoHeight__07sf_","list":"model-picker_list__y_c21","page":"model-picker_page__7VhO2","back":"model-picker_back__9CU3c","rowLabel":"model-picker_rowLabel__PO4sG","highlight":"model-picker_highlight__c8kpy","item":"model-picker_item__HnpJq","row":"model-picker_row__YIgRl","itemMark":"model-picker_itemMark__okLtJ","itemText":"model-picker_itemText__KZhJy","itemName":"model-picker_itemName__M2urS","itemBlurb":"model-picker_itemBlurb__6_i9I","default":"model-picker_default__swBkW","effortItem":"model-picker_effortItem__TnHo_","check":"model-picker_check__Sy79F","rowIcon":"model-picker_rowIcon__e81RN","rowValue":"model-picker_rowValue__eFh5r","rowChevron":"model-picker_rowChevron__l8_Wx","separator":"model-picker_separator__6rfpz","groupLabel":"model-picker_groupLabel__tw7Y2","compact":"model-picker_compact__C9JAY","compactMark":"model-picker_compactMark__j4rPu","compactName":"model-picker_compactName__07UWG","tag":"model-picker_tag__kT8zq","summary":"model-picker_summary__EyGrF","descriptionSlot":"model-picker_descriptionSlot__wi46r","description":"model-picker_description__60VU0","facts":"model-picker_facts__6ptDR","fact":"model-picker_fact__e2gAM","note":"model-picker_note__3SBBr","changeSlot":"model-picker_changeSlot__hgpAY","change":"model-picker_change__FEfXl","swap":"model-picker_swap__QR_c_","srOnly":"model-picker_srOnly__sDZD2"});
A.cssFor("model-picker", [61597]);
A.item("model-picker", {entry:7338, export:"ModelPicker", kind:"block", tier:"pro", unresolved:[]});
})();