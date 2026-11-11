/* ai-setup-wizard (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(260, function(){return void 0;});
A.reg(360, function(){return void 0;});
A.reg(600, function(){return void 0;});
A.reg(650, function(){return void 0;});
A.regCss(800, ".demo{display:grid;width:100%;max-width:920px;margin-inline:auto}", {"demo":"demo"});
A.reg(850, function(){return void 0;});
A.reg(1500, function(){return void 0;});
A.reg(3200, function(){return void 0;});
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
A.reg(33309, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    AiSetupWizard: () => K,
    default: () => Z,
    defaultGuardrails: () => v,
    defaultModels: () => b,
    defaultSources: () => j,
    defaultSuggestions: () => N,
    defaultTones: () => y,
    simulateAsk: () => T,
    simulateConnect: () => C,
    simulateGoLive: () => M
  });
  var s = a(95155), i = a(12115), n = a(18310), r = a(80642), l = a(25354), o = a(64962), d = a(23723), c = a(53364), u = a(40852), p = a(38158), h = a(36408), m = a(35484), _ = a(51288), x = a(66558), w = a(50680), g = a(52898);
  function f({ title: e2 = "Northwind", ...t2 }) {
    let a2 = (0, i.useId)().replace(/:/g, "");
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, s.jsxs)("defs", {
          children: [
            (0, s.jsxs)("linearGradient", {
              id: `${a2}-light`,
              x1: "8",
              y1: "3",
              x2: "8",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, s.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".42"
                }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: ".72"
                })
              ]
            }),
            (0, s.jsxs)("linearGradient", {
              id: `${a2}-dark`,
              x1: "16",
              y1: "3",
              x2: "16",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, s.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".88"
                }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: "1"
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("path", {
          d: "M12 2.5 4.75 20.75 12 16.9Z",
          fill: `url(#${a2}-light)`
        }),
        (0, s.jsx)("path", {
          d: "M12 2.5 19.25 20.75 12 16.9Z",
          fill: `url(#${a2}-dark)`
        })
      ]
    });
  }
  let j = [
    {
      id: "notion",
      name: "Notion",
      description: "Product wiki",
      count: 1284,
      unit: "pages",
      mark: (0, s.jsx)(function({ title: e2 = "Notion", ...t2 }) {
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, s.jsx)("path", {
            d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
          })
        });
      }, {})
    },
    {
      id: "drive",
      name: "Google Drive",
      description: "Support shared drive",
      count: 1677,
      unit: "files",
      mark: (0, s.jsx)(function({ title: e2 = "Google Drive", ...t2 }) {
        return (0, s.jsxs)("svg", {
          viewBox: "0 0 87.3 78",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: [
            (0, s.jsx)("path", {
              fill: "#0066DA",
              d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
            }),
            (0, s.jsx)("path", {
              fill: "#00AC47",
              d: "m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
            }),
            (0, s.jsx)("path", {
              fill: "#EA4335",
              d: "m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
            }),
            (0, s.jsx)("path", {
              fill: "#00832D",
              d: "m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
            }),
            (0, s.jsx)("path", {
              fill: "#2684FC",
              d: "m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
            }),
            (0, s.jsx)("path", {
              fill: "#FFBA00",
              d: "m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
            })
          ]
        });
      }, {})
    },
    {
      id: "confluence",
      name: "Confluence",
      description: "Billing and ops space",
      count: 642,
      unit: "pages",
      mark: (0, s.jsx)(function({ title: e2 = "Confluence", ...t2 }) {
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#1868DB",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, s.jsx)("path", {
            d: "M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"
          })
        });
      }, {})
    },
    {
      id: "zendesk",
      name: "Zendesk",
      description: "Help center and macros",
      count: 309,
      unit: "articles",
      mark: (0, s.jsx)(function({ title: e2 = "Zendesk", ...t2 }) {
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, s.jsx)("path", {
            d: "M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
          })
        });
      }, {})
    }
  ], b = [
    {
      id: "claude-sonnet-5.5",
      name: "Claude Sonnet 5.5",
      shortName: "Sonnet 5.5",
      note: "Anthropic",
      mark: (0, s.jsx)(function({ title: e2 = "Claude", ...t2 }) {
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#D97757",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, s.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      }, {})
    },
    {
      id: "gpt-6.1-sol",
      name: "GPT-6.1 Sol",
      note: "OpenAI",
      mark: (0, s.jsx)(function({ title: e2 = "OpenAI", ...t2 }) {
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
      }, {})
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      note: "Google",
      mark: (0, s.jsx)(function({ title: e2 = "Gemini", ...t2 }) {
        let a2 = (0, i.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
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
      }, {})
    }
  ], y = [
    { value: "concise", label: "Concise" },
    { value: "friendly", label: "Friendly" },
    { value: "formal", label: "Formal" }
  ], v = [
    { id: "cite", label: "Cite a source in every answer", defaultOn: true },
    {
      id: "handoff",
      label: "Hand off to a person when unsure",
      defaultOn: true
    },
    { id: "pii", label: "Redact personal data", defaultOn: false }
  ], N = [
    "How do I issue a partial refund?",
    "What is our SLA for enterprise tickets?",
    "Can customers export their data?"
  ], z = [
    [
      {
        sourceId: "notion",
        title: "Refund policy",
        text: "Open the order in Stripe, choose Refund and enter the partial amount."
      },
      {
        sourceId: "confluence",
        title: "Billing approvals",
        text: "Anything over $500 needs a team lead's approval before you send it."
      },
      {
        sourceId: "zendesk",
        title: "Macro: Partial refund",
        text: "Reply with the Partial refund macro so the ticket is tagged and the customer gets the right email."
      },
      {
        sourceId: "drive",
        title: "Billing FAQ 2026.pdf",
        text: "The money reaches the original card in 5 to 10 business days."
      }
    ],
    [
      {
        sourceId: "notion",
        title: "Support SLAs",
        text: "Enterprise tickets get a first response within 1 hour, around the clock."
      },
      {
        sourceId: "drive",
        title: "Enterprise MSA 2026.pdf",
        text: "Urgent incidents have a 15 minute response target under the 2026 MSA."
      },
      {
        sourceId: "zendesk",
        title: "SLA policy: Enterprise",
        text: "The clock pauses while a ticket is pending on the customer."
      },
      {
        sourceId: "confluence",
        title: "Escalation runbook",
        text: "If a ticket is close to breaching, page the on call lead in #support-escalations."
      }
    ],
    [
      {
        sourceId: "notion",
        title: "Data export",
        text: "Yes. Admins can export all workspace data as CSV or JSON from Settings, then Data."
      },
      {
        sourceId: "drive",
        title: "Data export spec.pdf",
        text: "Exports include tickets, contacts and attachments in one zip file."
      },
      {
        sourceId: "confluence",
        title: "Export pipeline",
        text: "Exports over 10 GB run in the background and email a download link when ready."
      },
      {
        sourceId: "zendesk",
        title: "Article: Export your data",
        text: "Send customers the Export your data article and solve the ticket."
      }
    ]
  ], k = (e2, t2) => new Promise((a2, s2) => {
    if (t2.aborted) return s2(t2.reason);
    let i2 = window.setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(i2), s2(t2.reason);
      },
      { once: true }
    );
  });
  async function C(e2, t2, a2) {
    await k(480, a2);
    let s2 = 18 + Math.round(Math.min(e2.count, 2e3) / 160);
    for (let e3 = 1; e3 <= s2; e3 += 1)
      await k(70, a2), t2(1 - Math.pow(1 - e3 / s2, 1.6));
  }
  let S = (e2) => new Set(e2.toLowerCase().match(/[a-z]+/g) ?? []);
  async function T(e2, t2, a2) {
    await k(900, a2);
    let s2 = S(e2), i2 = 0, n2 = -1;
    N.forEach((e3, t3) => {
      let a3 = [...S(e3)].filter((e4) => e4.length > 3 && s2.has(e4)).length;
      a3 > n2 && (n2 = a3, i2 = t3);
    });
    let r2 = z[i2].filter((e3) => t2.sources.includes(e3.sourceId)).slice(0, 3), l2 = r2.length ? r2 : z[i2].slice(0, 1);
    return {
      text: l2.map((e3, t3) => `${e3.text} [${t3 + 1}]`).join(" "),
      citations: l2.map(({ sourceId: e3, title: t3 }) => ({
        sourceId: e3,
        title: t3
      }))
    };
  }
  async function M(e2, t2) {
    await k(900, t2);
  }
  var $ = a(64577), A = a(77988), L = a.n(A);
  let I = [0.22, 1, 0.36, 1], R = { type: "spring", visualDuration: 0.24, bounce: 0 };
  function E({ id: e2, children: t2, className: a2, reduced: i2 }) {
    return (0, s.jsx)(r.N, {
      mode: "popLayout",
      initial: false,
      children: (0, s.jsx)(
        l.PY1.span,
        {
          className: a2,
          initial: { opacity: 0, y: 2 * !i2 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.16, ease: I }
          },
          exit: { opacity: 0, transition: { duration: 0.1, ease: I } },
          children: t2
        },
        e2
      )
    });
  }
  function B({
    steps: e2,
    current: t2,
    furthest: a2,
    done: i2,
    onSelect: n2,
    reduced: r2
  }) {
    return (0, s.jsx)("ol", {
      className: L().stepper,
      "aria-label": "Setup steps",
      children: e2.map((e3, d2) => {
        let c2 = i2 || d2 < t2, u2 = !i2 && d2 === t2, p2 = d2 <= a2 && !u2;
        return (0, s.jsx)(
          "li",
          {
            className: L().stepItem,
            children: (0, s.jsxs)("button", {
              type: "button",
              className: L().step,
              "data-state": c2 ? "done" : u2 ? "current" : "upcoming",
              disabled: !p2,
              "aria-current": u2 ? "step" : void 0,
              onClick: () => n2(d2),
              children: [
                (0, s.jsx)("span", {
                  className: L().bar,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(l.PY1.span, {
                    className: L().barFill,
                    initial: false,
                    animate: { scaleX: c2 || u2 ? 1 : 0 },
                    transition: r2 ? { duration: 0 } : R
                  })
                }),
                (0, s.jsxs)("span", {
                  className: L().stepLabel,
                  children: [
                    (0, s.jsx)("span", {
                      className: L().stepGlyph,
                      "aria-hidden": "true",
                      children: (0, s.jsx)(E, {
                        id: c2 ? "done" : "num",
                        reduced: r2,
                        className: L().glyphInner,
                        children: c2 ? (0, s.jsx)(o.A, { size: 18, strokeWidth: 1.75 }) : (0, s.jsxs)("span", {
                          className: L().stepNum,
                          children: [
                            (0, s.jsx)("svg", {
                              viewBox: "0 0 24 24",
                              width: 18,
                              height: 18,
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: 1.75,
                              children: (0, s.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                              })
                            }),
                            (0, s.jsx)("span", {
                              className: L().stepDigit,
                              children: d2 + 1
                            })
                          ]
                        })
                      })
                    }),
                    (0, s.jsxs)("span", {
                      className: L().stepText,
                      children: [
                        (0, s.jsx)("span", {
                          className: L().long,
                          children: e3.label
                        }),
                        (0, s.jsx)("span", {
                          className: L().short,
                          children: e3.short
                        })
                      ]
                    }),
                    (0, s.jsx)("span", {
                      className: L().srOnly,
                      children: c2 ? ", done" : u2 ? ", current" : ""
                    })
                  ]
                })
              ]
            })
          },
          e3.label
        );
      })
    });
  }
  function O({ source: e2, state: t2, onConnect: a2, reduced: i2 }) {
    let { phase: n2, progress: r2 } = t2, o2 = Math.round(r2 * e2.count), d2 = "connecting" === n2 ? `Connecting to ${e2.name}` : "syncing" === n2 ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)("span", {
          className: L().num,
          children: o2.toLocaleString("en-US")
        }),
        " of ",
        e2.count.toLocaleString("en-US"),
        " ",
        e2.unit
      ]
    }) : "synced" === n2 ? `${e2.count.toLocaleString("en-US")} ${e2.unit} synced` : "error" === n2 ? `Couldn't connect. ${t2.error ?? "Try again."}` : `${e2.description} \xB7 ${e2.count.toLocaleString("en-US")} ${e2.unit}`, c2 = "synced" === n2 ? "synced" : "syncing" === n2 ? "syncing" : "button";
    return (0, s.jsxs)("li", {
      className: L().row,
      children: [
        (0, s.jsx)("span", {
          className: L().rowMark,
          "aria-hidden": "true",
          children: e2.mark
        }),
        (0, s.jsxs)("span", {
          className: L().rowText,
          children: [
            (0, s.jsx)("span", { className: L().rowName, children: e2.name }),
            (0, s.jsx)("span", {
              className: L().rowMetaSlot,
              "data-tone": "error" === n2 ? "danger" : void 0,
              children: (0, s.jsxs)(E, {
                id: "syncing" === n2 ? "syncing" : n2,
                reduced: i2,
                className: L().rowMeta,
                children: [
                  "error" === n2 ? (0, s.jsx)(m.A, {
                    size: 12,
                    strokeWidth: 2.25,
                    "aria-hidden": "true"
                  }) : null,
                  (0, s.jsx)("span", { className: L().truncate, children: d2 })
                ]
              })
            })
          ]
        }),
        (0, s.jsx)("span", {
          className: L().rowAction,
          children: (0, s.jsx)(E, {
            id: c2,
            reduced: i2,
            className: L().rowActionInner,
            children: "button" === c2 ? (0, s.jsx)(_.$, {
              variant: "secondary",
              size: "sm",
              loading: "connecting" === n2,
              onClick: a2,
              "aria-label": `${"error" === n2 ? "Retry" : "Connect"} ${e2.name}`,
              children: "error" === n2 ? "Retry" : "Connect"
            }) : "syncing" === c2 ? (0, s.jsxs)("span", {
              className: L().percent,
              "aria-hidden": "true",
              children: [Math.round(100 * r2), "%"]
            }) : (0, s.jsxs)("span", {
              className: L().syncedTag,
              children: [
                (0, s.jsx)($.A, {
                  size: 14,
                  strokeWidth: 2.25,
                  "aria-hidden": "true"
                }),
                "Synced"
              ]
            })
          })
        }),
        (0, s.jsx)(l.PY1.span, {
          className: L().progress,
          "aria-hidden": "true",
          initial: false,
          animate: {
            scaleX: "syncing" === n2 || "synced" === n2 ? Math.max(r2, 0.02) : 0,
            opacity: +("syncing" === n2)
          },
          transition: i2 ? { duration: 0 } : {
            scaleX: { duration: 0.12, ease: "linear" },
            opacity: {
              duration: "synced" === n2 ? 0.32 : 0.12,
              delay: 0.12 * ("synced" === n2)
            }
          }
        })
      ]
    });
  }
  function F({ models: e2, value: t2, onChange: a2 }) {
    let n2 = (0, i.useRef)([]);
    return (0, s.jsx)("div", {
      className: L().models,
      role: "radiogroup",
      "aria-label": "Model",
      children: e2.map((i2, r2) => {
        let d2 = i2.id === t2;
        return (0, s.jsxs)(
          "button",
          {
            ref: (e3) => {
              n2.current[r2] = e3;
            },
            type: "button",
            role: "radio",
            "aria-checked": d2,
            "aria-label": i2.note ? `${i2.name}, ${i2.note}` : i2.name,
            tabIndex: d2 ? 0 : -1,
            className: L().model,
            "data-selected": d2 || void 0,
            onClick: () => a2(i2.id),
            onKeyDown: (t3) => ((t4, s2) => {
              let i3 = "ArrowRight" === t4.key || "ArrowDown" === t4.key ? 1 : "ArrowLeft" === t4.key || "ArrowUp" === t4.key ? -1 : 0;
              if (!i3) return;
              t4.preventDefault();
              let r3 = (s2 + i3 + e2.length) % e2.length;
              a2(e2[r3].id), n2.current[r3]?.focus();
            })(t3, r2),
            children: [
              (0, s.jsx)("span", {
                className: L().modelMark,
                "aria-hidden": "true",
                children: i2.mark
              }),
              (0, s.jsx)(l.PY1.span, {
                className: L().modelCheck,
                "aria-hidden": "true",
                initial: false,
                animate: { opacity: +!!d2, scale: d2 ? 1 : 0.8 },
                transition: { duration: 0.16, ease: I },
                children: (0, s.jsx)(o.A, { size: 16, strokeWidth: 2 })
              }),
              (0, s.jsx)("span", {
                className: L().modelName,
                title: i2.name,
                children: i2.shortName ?? i2.name
              }),
              i2.note ? (0, s.jsx)("span", {
                className: L().modelNote,
                children: i2.note
              }) : null
            ]
          },
          i2.id
        );
      })
    });
  }
  let P = [4, 3, 5, 6, 3, 4, 5, 3, 6, 4];
  function D({ chunks: e2, shown: t2 }) {
    return (0, s.jsx)("p", {
      className: L().answerText,
      children: e2.slice(0, t2).map(
        (e3, t3) => (0, s.jsx)(
          "span",
          {
            className: L().chunk,
            children: e3.map((e4, t4) => {
              let a2 = /^\[(\d+)\](\s*)$/.exec(e4);
              return a2 ? (0, s.jsxs)(
                "span",
                {
                  children: [
                    (0, s.jsx)("span", {
                      className: L().cite,
                      "aria-label": `source ${a2[1]}`,
                      children: a2[1]
                    }),
                    a2[2]
                  ]
                },
                t4
              ) : e4;
            })
          },
          t3
        )
      )
    });
  }
  function G({ citations: e2, sources: t2, visible: a2, reduced: i2 }) {
    return (0, s.jsx)("ol", {
      className: L().citations,
      "aria-label": "Sources",
      children: a2 ? e2.slice(0, 3).map((e3, a3) => {
        let n2 = t2.find((t3) => t3.id === e3.sourceId);
        return (0, s.jsxs)(
          l.PY1.li,
          {
            className: L().citation,
            initial: { opacity: 0, y: 2 * !i2 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: 0.16,
              ease: I,
              delay: i2 ? 0 : 0.04 * a3
            },
            children: [
              (0, s.jsx)("span", {
                className: L().citeNum,
                children: a3 + 1
              }),
              (0, s.jsx)("span", {
                className: L().citeMark,
                "aria-hidden": "true",
                children: n2?.mark
              }),
              (0, s.jsx)("span", {
                className: L().citeTitle,
                children: e3.title
              }),
              (0, s.jsx)("span", {
                className: L().citeSource,
                children: n2?.name
              })
            ]
          },
          `${e3.sourceId}-${a3}`
        );
      }) : null
    });
  }
  let U = [
    { label: "Connect data", short: "Connect" },
    { label: "Choose behavior", short: "Behavior" },
    { label: "Test it", short: "Test" }
  ], W = {
    status: "idle",
    question: "",
    answer: null,
    shown: 0,
    startedAt: 0,
    elapsed: 0
  }, Y = { phase: "idle", progress: 0 }, q = (e2, t2) => new Promise((a2, s2) => {
    if (t2.aborted) return s2(t2.reason);
    let i2 = window.setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(i2), s2(t2.reason);
      },
      { once: true }
    );
  }), H = (e2, t2) => e2 instanceof Error && e2.message ? e2.message : t2, V = (e2) => Object.fromEntries(e2.map((e3) => [e3.id, e3.defaultOn ?? false]));
  function K({
    featureName: e2 = "Ask Northwind",
    audience: t2 = "Answers for 48 agents in Northwind support",
    logo: a2 = (0, s.jsx)(f, {}),
    sources: z2 = j,
    models: k2 = b,
    tones: S2 = y,
    guardrails: $2 = v,
    suggestions: A2 = N,
    defaultModelId: Z2,
    defaultTone: Q,
    onConnect: X,
    onAsk: J,
    onGoLive: ee,
    onStepChange: et,
    onConfigChange: ea,
    autoPlay: es,
    className: ei
  }) {
    let en = (0, n.I)() ?? false, er = (0, i.useId)(), el = (0, i.useRef)(null), [eo, ed] = (0, i.useState)(0), [ec, eu] = (0, i.useState)(1), [ep, eh] = (0, i.useState)(0), [em, e_] = (0, i.useState)({}), [ex, ew] = (0, i.useState)(Z2 ?? k2[0]?.id ?? ""), [eg, ef] = (0, i.useState)(Q ?? S2[0]?.value ?? ""), [ej, eb] = (0, i.useState)(() => V($2)), [ey, ev] = (0, i.useState)(""), [eN, ez] = (0, i.useState)(W), [ek, eC] = (0, i.useState)(false), [eS, eT] = (0, i.useState)(null), [eM, e$] = (0, i.useState)(false), [eA, eL] = (0, i.useState)(0), [eI, eR] = (0, i.useState)(""), eE = (0, i.useRef)(/* @__PURE__ */ new Map()), eB = (0, i.useRef)(null), eO = (0, i.useRef)(null), eF = (0, i.useRef)(null), eP = (0, i.useRef)(true), eD = (0, i.useRef)(null), eG = !X && !J && !ee, eU = (es ?? eG) && !en, eW = z2.filter((e10) => em[e10.id]?.phase === "synced").map((e10) => e10.id), eY = z2.filter((e10) => {
      let t3 = em[e10.id]?.phase;
      return "syncing" === t3 || "connecting" === t3;
    }).length, eq = z2.reduce((e10, t3) => e10 + (eW.includes(t3.id) ? t3.count : 0), 0), eH = k2.find((e10) => e10.id === ex) ?? k2[0], eV = S2.find((e10) => e10.value === eg)?.label ?? eg, eK = $2.filter((e10) => ej[e10.id]).length, eZ = (0, i.useMemo)(
      () => ({ sources: eW, modelId: ex, tone: eg, guardrails: ej }),
      [eW.join(","), ex, eg, ej]
    ), eQ = (0, i.useMemo)(
      () => eN.answer ? (function(e10) {
        let t3 = e10.match(/\S+\s*/g) ?? [], a3 = [], s2 = 0;
        for (; s2 < t3.length; ) {
          let e11 = P[a3.length % P.length];
          a3.push(t3.slice(s2, s2 + e11)), s2 += e11;
        }
        return a3;
      })(eN.answer.text) : [],
      [eN.answer]
    );
    (0, i.useEffect)(() => {
      ea?.(eZ);
    }, [eZ]), (0, i.useEffect)(() => {
      et?.(eo);
    }, [eo]), (0, i.useEffect)(
      () => () => {
        eE.current.forEach((e10) => e10.abort()), eB.current?.abort(), eO.current?.abort();
      },
      []
    ), (0, i.useEffect)(() => {
      if ("streaming" !== eN.status) return;
      let e10 = en || eN.shown >= eQ.length, t3 = window.setTimeout(
        () => {
          e10 ? (ez((e11) => ({
            ...e11,
            status: "done",
            shown: eQ.length,
            elapsed: performance.now() - e11.startedAt
          })), eR(
            `Answer ready with ${eN.answer?.citations.length ?? 0} sources.${eG ? " Simulated, nothing was sent." : ""}`
          )) : ez((e11) => ({ ...e11, shown: e11.shown + 1 }));
        },
        e10 && en ? 0 : 34
      );
      return () => window.clearTimeout(t3);
    }, [eN.status, eN.shown, eQ.length, en]), (0, i.useEffect)(() => {
      let e10 = eD.current;
      e10 && "streaming" === eN.status && (e10.scrollTop = e10.scrollHeight);
    }, [eN.shown, eN.status]);
    let eX = (e10) => {
      e10 !== eo && (eu(e10 > eo ? 1 : -1), ed(e10), eh((t3) => Math.max(t3, Math.min(e10, 2))), e10 < 3 && eR(`Step ${e10 + 1} of 3, ${U[e10].label}.`));
    }, eJ = (e10) => {
      eE.current.get(e10.id)?.abort();
      let t3 = new AbortController();
      eE.current.set(e10.id, t3);
      let a3 = (t4) => e_((a4) => ({ ...a4, [e10.id]: t4 }));
      a3({ phase: "connecting", progress: 0 }), (X ?? C)(
        e10,
        (e11) => {
          t3.signal.aborted || a3({ phase: "syncing", progress: Math.min(1, Math.max(0, e11)) });
        },
        t3.signal
      ).then(
        () => {
          t3.signal.aborted || (a3({ phase: "synced", progress: 1 }), eR(
            `${e10.name} synced, ${e10.count.toLocaleString("en-US")} ${e10.unit}.${X ? "" : " Simulated, nothing was sent."}`
          ));
        },
        (s2) => {
          t3.signal.aborted || (a3({ phase: "error", progress: 0, error: H(s2, "Try again.") }), eR(`Couldn't connect ${e10.name}.`));
        }
      );
    }, e0 = (e10) => {
      let t3 = e10.trim();
      if (!t3) return;
      eB.current?.abort();
      let a3 = new AbortController();
      eB.current = a3, ev(""), ez({
        ...W,
        status: "thinking",
        question: t3,
        startedAt: performance.now()
      }), (J ?? T)(t3, eZ, a3.signal).then(
        (e11) => {
          a3.signal.aborted || ez((t4) => ({ ...t4, status: "streaming", answer: e11, shown: 0 }));
        },
        (e11) => {
          a3.signal.aborted || (ez((t4) => ({
            ...t4,
            status: "error",
            error: H(e11, "Something went wrong.")
          })), eR("Couldn't get an answer."));
        }
      );
    }, e1 = () => {
      eO.current?.abort();
      let t3 = new AbortController();
      eO.current = t3, eC(true), eT(null), (ee ?? M)(eZ, t3.signal).then(
        () => {
          t3.signal.aborted || (eC(false), e$(true), eL((e10) => e10 + 1), eu(1), ed(3), eR(
            `${e2} is live.${ee ? "" : " Simulated, nothing went live."}`
          ));
        },
        (e10) => {
          t3.signal.aborted || (eC(false), eT(H(e10, "Try again.")), eR("Couldn't go live."));
        }
      );
    }, e4 = () => {
      eE.current.forEach((e10) => e10.abort()), eE.current.clear(), eB.current?.abort(), eO.current?.abort(), eu(-1), ed(0), eh(0), e_({}), ew(Z2 ?? k2[0]?.id ?? ""), ef(Q ?? S2[0]?.value ?? ""), eb(V($2)), ev(""), ez(W), eC(false), eT(null), e$(false), eL(0);
    }, e22 = (0, i.useRef)({ step: eo, sourceState: em, test: eN });
    e22.current = { step: eo, sourceState: em, test: eN };
    let e5 = (0, i.useRef)({
      connect: eJ,
      goTo: eX,
      ask: e0,
      goLive: e1,
      reset: e4,
      setTone: ef,
      setRails: eb,
      setQuestion: ev
    });
    e5.current = {
      connect: eJ,
      goTo: eX,
      ask: e0,
      goLive: e1,
      reset: e4,
      setTone: ef,
      setRails: eb,
      setQuestion: ev
    }, (0, i.useEffect)(() => {
      let e10 = el.current;
      if (!e10 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e11]) => {
        eP.current = e11.isIntersecting;
      });
      return t3.observe(e10), () => t3.disconnect();
    }, []), (0, i.useEffect)(() => {
      if (!eU) return;
      let e10 = new AbortController();
      eF.current = e10;
      let t3 = e10.signal, a3 = async (e11) => {
        let a4 = e11;
        for (; a4 > 0; ) await q(50, t3), eP.current && (a4 -= 50);
      }, s2 = async (e11) => {
        for (; !e11(); ) await q(50, t3);
      }, i2 = z2.slice(0, 3), n2 = A2[0] ?? "How do I issue a partial refund?";
      return (async () => {
        for (; ; ) {
          for (let e12 of (await a3(800), i2))
            e5.current.connect(e12), await a3(360);
          await s2(
            () => i2.every(
              (e12) => e22.current.sourceState[e12.id]?.phase === "synced"
            )
          ), await a3(650), e5.current.goTo(1), await a3(850), S2[1] && e5.current.setTone(S2[1].value), await a3(650);
          let e11 = $2.find((e12) => !e12.defaultOn);
          e11 && e5.current.setRails((t4) => ({ ...t4, [e11.id]: true })), await a3(800), e5.current.goTo(2), await a3(600);
          for (let e12 = 2; e12 <= n2.length; e12 += 2)
            e5.current.setQuestion(n2.slice(0, e12)), await q(22, t3);
          e5.current.setQuestion(n2), await a3(260), e5.current.ask(n2), await s2(() => "done" === e22.current.test.status), await a3(1500), e5.current.goLive(), await s2(() => 3 === e22.current.step), await a3(3200), e5.current.reset();
        }
      })().catch(() => {
      }), () => e10.abort();
    }, [eU]);
    let e3 = () => {
      eF.current?.abort(), eF.current = null;
    }, e7 = "thinking" === eN.status || "streaming" === eN.status, e6 = 0 !== eo || eW.length > 0, e8 = 3 === eo ? "Edit setup" : 2 === eo ? eS ? "Try again" : eM ? "Publish changes" : "Go live" : "Continue", e9 = (() => {
      if (0 === eo)
        return eW.length ? `${eW.length} ${1 === eW.length ? "source" : "sources"} \xB7 ${eq.toLocaleString("en-US")} documents` : eY ? `Syncing ${eY} ${1 === eY ? "source" : "sources"}` : "Connect at least one source";
      return 1 === eo ? `${eH?.shortName ?? eH?.name} \xB7 ${eV} \xB7 ${eK} ${1 === eK ? "guardrail" : "guardrails"} on` : 2 === eo ? eS ? `Couldn't go live. ${eS}` : "done" === eN.status ? `Answered in ${(eN.elapsed / 1e3).toFixed(1)}s by ${eH?.shortName ?? eH?.name}` : e7 ? `Answering with ${eH?.shortName ?? eH?.name}` : "error" === eN.status ? "Test failed" : eG ? "Simulated, nothing is sent" : "Test before you go live" : eG ? "Simulated, nothing went live" : `${e2} is live`;
    })();
    return (0, s.jsxs)("div", {
      ref: el,
      className: [L().root, ei].filter(Boolean).join(" "),
      onPointerDownCapture: e3,
      onKeyDownCapture: e3,
      children: [
        (0, s.jsxs)("header", {
          className: L().header,
          children: [
            (0, s.jsxs)("div", {
              className: L().brand,
              children: [
                a2 ? (0, s.jsx)("span", {
                  className: L().logo,
                  "aria-hidden": "true",
                  children: a2
                }) : null,
                (0, s.jsxs)("div", {
                  className: L().headText,
                  children: [
                    (0, s.jsxs)("h3", {
                      className: L().title,
                      children: ["Set up ", e2]
                    }),
                    (0, s.jsx)("p", { className: L().audience, children: t2 })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("span", {
              className: L().status,
              "data-live": eM || void 0,
              children: [
                (0, s.jsx)("span", {
                  className: L().statusIcon,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(E, {
                    id: eM ? "live" : "draft",
                    reduced: en,
                    className: L().glyphInner,
                    children: eM ? (0, s.jsx)(o.A, { size: 14, strokeWidth: 2.25 }) : (0, s.jsx)(d.A, { size: 14, strokeWidth: 2.25 })
                  })
                }),
                (0, s.jsx)("span", {
                  className: L().statusText,
                  children: (0, s.jsx)(E, {
                    id: eM ? "live" : "draft",
                    reduced: en,
                    children: eM ? "Live" : "Draft"
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)(B, {
          steps: U,
          current: Math.min(eo, 2),
          furthest: ep,
          done: 3 === eo,
          onSelect: eX,
          reduced: en
        }),
        (0, s.jsx)("div", {
          className: L().viewport,
          children: (0, s.jsx)(r.N, {
            initial: false,
            custom: ec,
            children: (0, s.jsx)(
              l.PY1.section,
              {
                className: L().page,
                custom: ec,
                variants: {
                  initial: (e10) => ({ x: en ? 0 : 32 * e10, opacity: 0 }),
                  center: {
                    x: 0,
                    opacity: 1,
                    transition: { x: R, opacity: { duration: 0.16, ease: I } }
                  },
                  exit: (e10) => ({
                    x: en ? 0 : -32 * e10,
                    opacity: 0,
                    transition: { x: R, opacity: { duration: 0.12, ease: I } }
                  })
                },
                initial: "initial",
                animate: "center",
                exit: "exit",
                "aria-label": eo < 3 ? U[eo].label : "Live",
                children: 0 === eo ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className: L().labelRow,
                      children: [
                        (0, s.jsx)("span", { children: "Sources" }),
                        (0, s.jsx)("span", {
                          className: L().labelMeta,
                          children: (0, s.jsxs)("span", {
                            children: [
                              (0, s.jsx)("span", {
                                className: L().num,
                                children: eW.length
                              }),
                              " of ",
                              z2.length,
                              " connected"
                            ]
                          })
                        })
                      ]
                    }),
                    (0, s.jsx)("ul", {
                      className: L().list,
                      children: z2.slice(0, 4).map(
                        (e10) => (0, s.jsx)(
                          O,
                          {
                            source: e10,
                            state: em[e10.id] ?? Y,
                            onConnect: () => eJ(e10),
                            reduced: en
                          },
                          e10.id
                        )
                      )
                    }),
                    (0, s.jsxs)("p", {
                      className: L().hint,
                      children: [
                        (0, s.jsx)(c.A, {
                          size: 14,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        }),
                        (0, s.jsx)("span", {
                          children: "Read only. Answers respect each source's permissions."
                        })
                      ]
                    })
                  ]
                }) : 1 === eo ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className: L().labelRow,
                      children: (0, s.jsx)("span", {
                        children: "Model"
                      })
                    }),
                    (0, s.jsx)(F, {
                      models: k2.slice(0, 3),
                      value: ex,
                      onChange: ew
                    }),
                    (0, s.jsxs)("div", {
                      className: [L().list, L().settings].join(" "),
                      children: [
                        (0, s.jsxs)("div", {
                          className: L().setRow,
                          children: [
                            (0, s.jsx)("span", {
                              className: L().setLabel,
                              children: "Tone"
                            }),
                            (0, s.jsx)(x.A, {
                              className: L().tone,
                              options: S2,
                              value: eg,
                              onValueChange: ef,
                              label: "Tone"
                            })
                          ]
                        }),
                        $2.slice(0, 3).map(
                          (e10) => (0, s.jsxs)(
                            "label",
                            {
                              className: L().setRow,
                              htmlFor: `${er}-${e10.id}`,
                              children: [
                                (0, s.jsx)("span", {
                                  className: L().setLabel,
                                  children: e10.label
                                }),
                                (0, s.jsx)(w.d, {
                                  id: `${er}-${e10.id}`,
                                  checked: ej[e10.id] ?? false,
                                  onCheckedChange: (t3) => eb((a3) => ({ ...a3, [e10.id]: t3 })),
                                  "aria-label": e10.label
                                })
                              ]
                            },
                            e10.id
                          )
                        )
                      ]
                    })
                  ]
                }) : 2 === eo ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className: L().labelRow,
                      children: [
                        (0, s.jsx)("label", {
                          htmlFor: er,
                          children: "Test question"
                        }),
                        (0, s.jsxs)("span", {
                          className: L().labelMeta,
                          children: [
                            (0, s.jsx)("span", {
                              className: L().metaMark,
                              "aria-hidden": "true",
                              children: eH?.mark
                            }),
                            eH?.name
                          ]
                        })
                      ]
                    }),
                    (0, s.jsxs)("form", {
                      className: L().composer,
                      onSubmit: (e10) => {
                        (e10.preventDefault(), "thinking" === eN.status || "streaming" === eN.status) ? (eB.current?.abort(), ez((e11) => ({
                          ...e11,
                          status: "streaming" === e11.status ? "stopped" : "idle"
                        })), eR("Stopped.")) : e0(ey);
                      },
                      children: [
                        (0, s.jsx)("input", {
                          id: er,
                          className: L().input,
                          value: ey,
                          onChange: (e10) => ev(e10.target.value),
                          placeholder: "Ask what your team asks every week",
                          autoComplete: "off"
                        }),
                        (0, s.jsx)("button", {
                          type: "submit",
                          className: L().send,
                          disabled: !e7 && !ey.trim(),
                          "aria-label": e7 ? "Stop" : "Ask",
                          children: (0, s.jsx)(E, {
                            id: e7 ? "stop" : "send",
                            reduced: en,
                            className: L().glyphInner,
                            children: e7 ? (0, s.jsx)(u.A, {
                              size: 12,
                              strokeWidth: 0,
                              fill: "currentColor"
                            }) : (0, s.jsx)(p.A, {
                              size: 16,
                              strokeWidth: 2.25
                            })
                          })
                        })
                      ]
                    }),
                    (0, s.jsx)("div", {
                      className: L().answer,
                      children: (0, s.jsx)(r.N, {
                        mode: "popLayout",
                        initial: false,
                        children: "idle" === eN.status ? (0, s.jsxs)(
                          l.PY1.div,
                          {
                            className: L().empty,
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: {
                                duration: 0.16,
                                ease: I
                              }
                            },
                            exit: {
                              opacity: 0,
                              transition: { duration: 0.1 }
                            },
                            children: [
                              (0, s.jsxs)("p", {
                                className: L().emptyText,
                                children: [
                                  "Answers only use the ",
                                  1 === eW.length ? "source" : `${eW.length} sources`,
                                  " you connected. Try one of these:"
                                ]
                              }),
                              (0, s.jsx)("ul", {
                                className: L().suggestions,
                                children: A2.slice(0, 3).map(
                                  (e10) => (0, s.jsx)(
                                    "li",
                                    {
                                      children: (0, s.jsxs)(
                                        "button",
                                        {
                                          type: "button",
                                          className: L().suggestion,
                                          onClick: () => e0(e10),
                                          children: [
                                            (0, s.jsx)(h.A, {
                                              size: 14,
                                              strokeWidth: 2,
                                              "aria-hidden": "true"
                                            }),
                                            (0, s.jsx)(
                                              "span",
                                              {
                                                className: L().truncate,
                                                children: e10
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    },
                                    e10
                                  )
                                )
                              })
                            ]
                          },
                          "empty"
                        ) : (0, s.jsxs)(
                          l.PY1.div,
                          {
                            className: L().result,
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: {
                                duration: 0.16,
                                ease: I
                              }
                            },
                            exit: {
                              opacity: 0,
                              transition: { duration: 0.1 }
                            },
                            children: [
                              (0, s.jsx)("p", {
                                className: L().question,
                                children: eN.question
                              }),
                              (0, s.jsxs)("div", {
                                ref: eD,
                                className: L().answerBody,
                                "aria-live": "off",
                                children: [
                                  "thinking" === eN.status ? (0, s.jsx)(g.n, {
                                    className: L().thinking,
                                    children: `Searching ${eq.toLocaleString("en-US")} documents`
                                  }) : "error" === eN.status ? (0, s.jsxs)("div", {
                                    className: L().error,
                                    children: [
                                      (0, s.jsxs)(
                                        "span",
                                        {
                                          className: L().errorText,
                                          children: [
                                            (0, s.jsx)(
                                              m.A,
                                              {
                                                size: 14,
                                                strokeWidth: 2.25,
                                                "aria-hidden": "true"
                                              }
                                            ),
                                            `Couldn't get an answer. ${eN.error ?? ""}`
                                          ]
                                        }
                                      ),
                                      (0, s.jsx)(_.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: () => e0(eN.question),
                                        children: "Retry"
                                      })
                                    ]
                                  }) : (0, s.jsx)(D, {
                                    chunks: eQ,
                                    shown: eN.shown
                                  }),
                                  "stopped" === eN.status ? (0, s.jsx)("p", {
                                    className: L().stopped,
                                    children: "Stopped"
                                  }) : null
                                ]
                              }),
                              (0, s.jsx)(G, {
                                citations: eN.answer?.citations ?? [],
                                sources: z2,
                                visible: "done" === eN.status,
                                reduced: en
                              })
                            ]
                          },
                          `answer-${eN.startedAt}`
                        )
                      })
                    })
                  ]
                }) : (0, s.jsxs)("div", {
                  className: L().live,
                  children: [
                    (0, s.jsxs)("svg", {
                      className: L().liveCheck,
                      viewBox: "0 0 40 40",
                      "aria-hidden": "true",
                      children: [
                        (0, s.jsx)(l.PY1.circle, {
                          cx: "20",
                          cy: "20",
                          r: "18.25",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          initial: { pathLength: +!!en, opacity: 0 },
                          animate: { pathLength: 1, opacity: 1 },
                          transition: { duration: 0.36, ease: I }
                        }),
                        (0, s.jsx)(l.PY1.path, {
                          d: "M13 20.5l4.75 4.75L27.5 15.5",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2.25",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          initial: { pathLength: +!!en },
                          animate: { pathLength: 1 },
                          transition: {
                            duration: 0.24,
                            ease: I,
                            delay: 0.22 * !en
                          }
                        })
                      ]
                    }),
                    (0, s.jsx)("h4", {
                      className: L().liveTitle,
                      children: eA > 1 ? "Your changes are live" : `${e2} is live`
                    }),
                    (0, s.jsxs)("p", {
                      className: L().liveText,
                      children: [
                        "Agents can ask it from any ticket. It answers from ",
                        eW.length,
                        " ",
                        1 === eW.length ? "source" : "sources",
                        " and cites each one."
                      ]
                    }),
                    (0, s.jsxs)("dl", {
                      className: L().summary,
                      children: [
                        (0, s.jsxs)("div", {
                          className: L().sumRow,
                          children: [
                            (0, s.jsx)("dt", { children: "Sources" }),
                            (0, s.jsxs)("dd", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: L().marks,
                                  "aria-hidden": "true",
                                  children: z2.filter((e10) => eW.includes(e10.id)).map(
                                    (e10) => (0, s.jsx)(
                                      "span",
                                      {
                                        className: L().sumMark,
                                        children: e10.mark
                                      },
                                      e10.id
                                    )
                                  )
                                }),
                                eq.toLocaleString("en-US"),
                                " documents"
                              ]
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: L().sumRow,
                          children: [
                            (0, s.jsx)("dt", { children: "Model" }),
                            (0, s.jsxs)("dd", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: L().sumMark,
                                  "aria-hidden": "true",
                                  children: eH?.mark
                                }),
                                eH?.name
                              ]
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: L().sumRow,
                          children: [
                            (0, s.jsx)("dt", {
                              children: "Behavior"
                            }),
                            (0, s.jsxs)("dd", {
                              children: [
                                eV,
                                " \xB7 ",
                                eK,
                                " ",
                                1 === eK ? "guardrail" : "guardrails",
                                " on"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              },
              eo
            )
          })
        }),
        (0, s.jsxs)("footer", {
          className: L().footer,
          children: [
            (0, s.jsx)("span", {
              className: L().footerMeta,
              "data-tone": 2 === eo && eS ? "danger" : void 0,
              children: (0, s.jsxs)(E, {
                id: `${eo}-${eS ? "error" : "done" === eN.status ? "done" : "base"}`,
                reduced: en,
                className: L().footerMetaInner,
                children: [
                  2 === eo && eS ? (0, s.jsx)(m.A, {
                    size: 14,
                    strokeWidth: 2.25,
                    "aria-hidden": "true"
                  }) : null,
                  (0, s.jsx)("span", { className: L().truncate, children: e9 })
                ]
              })
            }),
            (0, s.jsxs)("div", {
              className: L().actions,
              children: [
                (0, s.jsx)(_.$, {
                  variant: "ghost",
                  className: L().back,
                  "data-hidden": 0 === eo || 3 === eo || void 0,
                  disabled: 0 === eo || 3 === eo || ek,
                  onClick: () => eX(eo - 1),
                  children: "Back"
                }),
                (0, s.jsx)(_.$, {
                  variant: 3 === eo ? "secondary" : "primary",
                  disabled: !e6,
                  loading: ek,
                  onClick: () => {
                    3 === eo ? eX(1) : 2 === eo ? e1() : eX(eo + 1);
                  },
                  children: ek ? "Going live" : e8
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: L().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eI
        })
      ]
    });
  }
  let Z = K;
}

__m(__module,__exports,__require);
});
A.reg(36408, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => l });
  var n = r(51811);
  let a = {
    name: "corner-down-right",
    size: 24,
    node: [
      ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
      ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
    ]
  };
  a.node;
  let l = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(53364, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => n });
  var d = t(51811);
  let h = {
    name: "lock-keyhole",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
      [
        "rect",
        { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }
      ],
      ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
    ]
  };
  h.node;
  let n = (0, d.A)(h);
}

__m(__module,__exports,__require);
});
A.regCss(77988, ".root{--pad:20px;--body:316px;position:relative;box-sizing:border-box;display:flex;flex-direction:column;width:100%;max-width:600px;min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;line-height:20px;letter-spacing:var(--tracking-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n@media (max-width:480px){.root{--pad:16px;--body:364px}\n.truncate{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.glyphInner{display:inline-flex;align-items:center;justify-content:center}\n.header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:var(--pad) var(--pad) 0}\n.brand{display:flex;align-items:center;gap:12px;min-width:0}\n.logo{display:inline-grid;flex:none;width:24px;height:24px;color:var(--foreground)}\n.logo svg{width:100%;height:100%;display:block}\n.headText{min-width:0}\n.title{margin:0;font-size:15px;line-height:22px;font-weight:500;letter-spacing:-.01em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.audience{margin:2px 0 0;font-size:12px;line-height:16px;color:var(--text-muted);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.status{display:inline-flex;flex:none;align-items:center;gap:6px;height:24px;padding:0 10px 0 8px;border:1px solid var(--border);border-radius:999px;font-size:12px;line-height:16px;color:var(--text-secondary);transition:border-color .24s var(--ease-standard),background-color .24s var(--ease-standard)}\n.status[data-live]{border-color:color-mix(in oklab,var(--success) 35%,var(--border));background:color-mix(in oklab,var(--success) 8%,var(--surface));color:var(--foreground)}\n.status[data-live] .statusIcon{color:var(--success)}\n.statusIcon{display:inline-grid;place-items:center;width:14px;height:14px;color:var(--text-muted)}\n.statusText{display:inline-grid;min-width:26px}\n.num{font-variant-numeric:tabular-nums}\n.stepper{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:0;padding:16px var(--pad) 0;list-style:none}\n.stepItem{min-width:0}\n.step{display:flex;flex-direction:column;gap:8px;width:100%;padding:0;border:0;border-radius:6px;background:none;color:var(--text-muted);font:inherit;text-align:start;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color .16s var(--ease-standard)}\n.step:disabled{cursor:default}\n.step[data-state=current]{color:var(--foreground)}\n.step[data-state=done]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.step:not(:disabled):hover{color:var(--foreground)}\n.step[data-state=done] .stepGlyph{color:var(--accent)}\n.step[data-state=current] .stepDigit,.step[data-state=current] .stepNum{color:var(--accent)}\n.bar{position:relative;display:block;height:2px;border-radius:1px;background:var(--border);overflow:hidden}\n.barFill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left center}\n.stepLabel{display:flex;align-items:center;gap:8px;min-width:0;height:20px}\n.stepGlyph{display:inline-grid;place-items:center;flex:none;width:18px;height:18px}\n.stepGlyph svg{display:block}\n.stepNum{display:inline-grid;place-items:center;width:18px;height:18px;color:var(--border-strong,var(--border))}\n.stepNum>*{grid-area:1/1}\n.stepDigit{font-size:11px;line-height:1;font-weight:500;letter-spacing:0;color:var(--text-muted);font-variant-numeric:tabular-nums lining-nums;text-box:trim-both cap alphabetic}\n.stepText{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.short{display:none}\n.short{display:inline}\n.viewport{position:relative;height:calc(var(--body) + 8px);margin:12px calc(var(--pad) - 4px) 0;overflow:hidden}\n.page{position:absolute;inset:0;display:flex;flex-direction:column;padding:4px}\n.labelRow{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;height:20px;margin-bottom:8px;color:var(--text-secondary)}\n.labelMeta{display:inline-flex;align-items:center;gap:6px;min-width:0;font-size:12px;line-height:16px;color:var(--text-muted);white-space:nowrap}\n.metaMark{display:inline-grid;width:14px;height:14px;color:var(--foreground)}\n.citeMark svg,.metaMark svg,.modelMark svg,.rowMark svg,.sumMark svg{width:100%;height:100%;display:block}\n.rowMark{display:inline-grid;flex:none;width:20px;height:20px;color:var(--foreground)}\n.modelMark{display:inline-grid;width:16px;height:16px;margin-bottom:12px;color:var(--foreground)}\n.citeMark{display:inline-grid;flex:none;width:14px;height:14px;color:var(--foreground)}\n.sumMark{display:inline-grid;flex:none;width:14px;height:14px;color:var(--foreground)}\n.list{margin:0;padding:0;list-style:none;border:1px solid var(--border);border-radius:var(--radius-control);overflow:hidden;background:var(--surface)}\n.row{position:relative;display:flex;align-items:center;gap:12px;height:60px;padding:0 12px 0 16px}\n.row+.row{border-top:1px solid var(--border-subtle)}\n.row,.setRow{padding-left:12px}\n.rowText{display:flex;flex:1;flex-direction:column;min-width:0}\n.rowName{font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.rowMetaSlot{position:relative;display:flex;height:16px;min-width:0;font-size:12px;line-height:16px;color:var(--text-muted)}\n.rowMetaSlot[data-tone=danger]{color:var(--danger)}\n.rowMeta{display:flex;align-items:center;gap:4px;min-width:0;max-width:100%}\n.rowMeta svg{flex:none}\n.rowAction{position:relative;display:flex;flex:none;align-items:center;justify-content:flex-end;width:96px;height:32px}\n.rowActionInner{display:inline-flex;align-items:center;justify-content:flex-end}\n.percent{min-width:40px;text-align:end;font-variant-numeric:tabular-nums;color:var(--text-secondary)}\n.syncedTag{display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary)}\n.syncedTag svg{color:var(--success)}\n.hint{display:flex;align-items:flex-start;gap:6px;margin:12px 0 0;padding-left:2px;font-size:12px;line-height:16px;color:var(--text-muted)}\n.hint svg{flex:none;margin-top:1px}\n.progress{position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--accent);transform-origin:left center;pointer-events:none}\n.models{display:grid;flex:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.model{position:relative;display:flex;flex-direction:column;align-items:flex-start;height:88px;min-width:0;padding:12px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;text-align:start;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color .16s var(--ease-standard),background-color .16s var(--ease-standard),box-shadow .16s var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.model:not([data-selected]):hover{background:color-mix(in oklab,var(--surface-muted) 60%,var(--surface))}\n.model:active:not([data-selected]){background:var(--surface-muted)}\n.model[data-selected]{border-color:var(--accent);box-shadow:inset 0 0 0 1px var(--accent);background:color-mix(in oklab,var(--accent) 5%,var(--surface))}\n.model{padding:12px 8px 8px}\n.modelCheck{position:absolute;top:12px;right:12px;display:inline-grid;color:var(--accent)}\n.modelCheck{right:8px}\n.modelName{font-weight:500;line-height:18px}\n.modelName,.modelNote{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.modelName{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:18px}\n.modelNote{font-size:12px;line-height:16px;color:var(--text-muted)}\n.modelNote{display:none}\n.settings{flex:none;margin-top:16px}\n@media (max-width:420px){.settings .setRow:first-child{flex-direction:column;align-items:stretch;justify-content:center;gap:8px;height:auto;padding-top:12px;padding-bottom:12px}\n.setRow{display:flex;align-items:center;justify-content:space-between;gap:12px;height:44px;padding:0 12px 0 16px;cursor:pointer}\n.setRow:first-child{cursor:default}\n.setRow+.setRow{border-top:1px solid var(--border-subtle)}\n.setRow .tone{flex:none;min-width:0;max-width:72%;border-radius:9px}\n.setRow .tone{max-width:78%}\n.setRow .tone{max-width:none;width:100%}\n.setLabel{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.tone>div{padding:2px}\n.tone button{min-height:22px;padding:0 10px;border-radius:7px;font-size:12px;line-height:16px}\n.tone>div{width:100%}\n.tone button{flex:1 0 auto}\n.composer{display:flex;flex:none;align-items:center;gap:8px;height:40px;padding:0 4px 0 16px;border:1px solid var(--border);border-radius:20px;background:var(--surface);transition:border-color .16s var(--ease-standard)}\n.composer:focus-within{border-color:var(--border-strong,var(--text-muted))}\n.input{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;outline:none}\n.input::placeholder{color:var(--text-muted)}\n.send{display:inline-grid;place-items:center;flex:none;width:30px;height:30px;padding:0;border:0;border-radius:50%;background:var(--foreground);color:var(--background);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:opacity .16s var(--ease-standard),transform .12s var(--ease-standard)}\n.send:disabled{opacity:.28;cursor:default}\n.send:active:not(:disabled){transform:scale(.94)}\n.answer{position:relative;flex:1;min-height:0;margin-top:12px;border:1px solid var(--border);border-radius:var(--radius-control);overflow:hidden}\n.empty,.result{position:absolute;inset:0;display:flex;flex-direction:column;padding:14px 16px}\n.emptyText{margin:0 0 8px;color:var(--text-muted)}\n.suggestions{display:flex;flex-direction:column;margin:0 -8px;padding:0;list-style:none}\n.suggestion{display:flex;align-items:center;gap:8px;width:100%;height:36px;padding:0 8px;border:0;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;text-align:start;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .12s var(--ease-standard),color .12s var(--ease-standard)}\n.suggestion svg{flex:none;color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.suggestion:hover{background:var(--surface-muted);color:var(--foreground)}\n.suggestion:active{background:var(--surface-muted)}\n.question{flex:none;margin:0 0 6px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.answerBody{flex:1;min-height:0;overflow-y:auto;scrollbar-width:none}\n.answerBody::-webkit-scrollbar{display:none}\n.thinking{color:var(--text-muted)}\n.answerText{margin:0;color:var(--text-secondary);text-wrap:pretty}\n.chunk{animation:chunkIn .14s var(--ease-standard) both}\n@media (prefers-reduced-motion:reduce){.chunk{animation:none}\n.cite{display:inline-grid;place-items:center;min-width:16px;height:16px;padding:0 4px;margin:0 1px;vertical-align:1px;border-radius:5px;background:var(--surface-muted);color:var(--text-secondary);font-size:12px;line-height:1;font-variant-numeric:tabular-nums}\n.stopped{margin:4px 0 0;font-size:12px;line-height:16px;color:var(--text-muted)}\n.error{display:flex;flex-direction:column;align-items:flex-start;gap:10px}\n.errorText{display:inline-flex;align-items:center;gap:6px;color:var(--danger)}\n.errorText svg{flex:none}\n.citations{display:flex;flex:none;flex-direction:column;height:76px;margin:8px 0 0;padding:4px 0 0;list-style:none;border-top:1px solid var(--border-subtle)}\n.citation{display:flex;align-items:center;gap:8px;height:24px;min-width:0}\n.citeNum{flex:none;width:12px;font-size:12px;line-height:16px;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.citeTitle{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.citeSource{flex:none;font-size:12px;line-height:16px;color:var(--text-muted)}\n.citeSource{display:none}\n.live{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;text-align:center}\n.liveCheck{width:40px;height:40px;color:var(--success)}\n.liveTitle{margin:12px 0 0;font-size:15px;line-height:22px;font-weight:500}\n.liveText{max-width:360px;margin:4px 0 0;color:var(--text-muted);text-wrap:balance}\n.summary{width:100%;max-width:400px;margin:20px 0 0;border:1px solid var(--border);border-radius:var(--radius-control);text-align:start}\n.sumRow{display:flex;align-items:center;justify-content:space-between;gap:12px;height:40px;padding:0 16px}\n.sumRow+.sumRow{border-top:1px solid var(--border-subtle)}\n.sumRow dt{color:var(--text-muted)}\n.sumRow dd{display:inline-flex;align-items:center;gap:8px;min-width:0;margin:0;white-space:nowrap}\n.marks{display:inline-flex;gap:4px}\n.footer{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px;padding:16px var(--pad);border-top:1px solid var(--border-subtle)}\n.footer{justify-content:flex-end}\n.footerMeta{position:relative;display:flex;flex:1;min-width:0;height:20px;color:var(--text-muted)}\n.footerMeta[data-tone=danger]{color:var(--danger)}\n@media (max-width:400px){.footerMeta{display:none}\n.footerMetaInner{display:flex;align-items:center;gap:6px;min-width:0;max-width:100%}\n.footerMetaInner svg{flex:none}\n.actions{display:flex;flex:none;align-items:center;gap:8px}\n.back[data-hidden]{visibility:hidden}\n.long{display:none}", {"root":"root","truncate":"truncate","srOnly":"srOnly","glyphInner":"glyphInner","header":"header","brand":"brand","logo":"logo","headText":"headText","title":"title","audience":"audience","status":"status","statusIcon":"statusIcon","statusText":"statusText","num":"num","stepper":"stepper","stepItem":"stepItem","step":"step","stepGlyph":"stepGlyph","stepDigit":"stepDigit","stepNum":"stepNum","bar":"bar","barFill":"barFill","stepLabel":"stepLabel","stepText":"stepText","short":"short","viewport":"viewport","page":"page","labelRow":"labelRow","labelMeta":"labelMeta","metaMark":"metaMark","citeMark":"citeMark","modelMark":"modelMark","rowMark":"rowMark","sumMark":"sumMark","list":"list","row":"row","setRow":"setRow","rowText":"rowText","rowName":"rowName","rowMetaSlot":"rowMetaSlot","rowMeta":"rowMeta","rowAction":"rowAction","rowActionInner":"rowActionInner","percent":"percent","syncedTag":"syncedTag","hint":"hint","progress":"progress","models":"models","model":"model","modelCheck":"modelCheck","modelName":"modelName","modelNote":"modelNote","settings":"settings","tone":"tone","setLabel":"setLabel","composer":"composer","input":"input","send":"send","answer":"answer","empty":"empty","result":"result","emptyText":"emptyText","suggestions":"suggestions","suggestion":"suggestion","question":"question","answerBody":"answerBody","thinking":"thinking","answerText":"answerText","chunk":"chunk","cite":"cite","stopped":"stopped","error":"error","errorText":"errorText","citations":"citations","citation":"citation","citeNum":"citeNum","citeTitle":"citeTitle","citeSource":"citeSource","live":"live","liveCheck":"liveCheck","liveTitle":"liveTitle","liveText":"liveText","summary":"summary","sumRow":"sumRow","marks":"marks","footer":"footer","footerMeta":"footerMeta","footerMetaInner":"footerMetaInner","actions":"actions","back":"back","long":"long"});
A.cssFor("ai-setup-wizard", [800,77988]);
A.item("ai-setup-wizard", {entry:33309, export:"AiSetupWizard", kind:"block", tier:"pro", unresolved:["360","650","850","600","260","1500","3200"]});
})();