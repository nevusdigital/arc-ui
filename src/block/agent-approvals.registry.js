/* agent-approvals (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(8344, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { AgentApprovals: () => eN, default: () => ek });
  var n = t(95155), r = t(12115), s = t(18310), i = t(80642), l = t(25354), o = t(68394), d = t(50981), c = t(76721), u = t(65024), p = t(51288), m = t(76266), h = t(7770);
  function g({ title: e2 = "Claude", ...a2 }) {
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
  }
  function _({ title: e2 = "OpenAI", ...a2 }) {
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
  }
  function y({ title: e2 = "Gemini", ...a2 }) {
    let t2 = (0, r.useId)().replace(/[^a-zA-Z0-9-_]/g, "");
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
          fill: `url(#${t2}-g0)`
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${t2}-g1)`
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${t2}-g2)`
        }),
        (0, n.jsxs)("defs", {
          children: [
            (0, n.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `${t2}-g0`,
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
              id: `${t2}-g1`,
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
              id: `${t2}-g2`,
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
  function f({ title: e2 = "Northwind", ...a2 }) {
    let t2 = (0, r.useId)().replace(/:/g, "");
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      role: "img",
      "aria-label": e2,
      ...a2,
      children: [
        (0, n.jsxs)("defs", {
          children: [
            (0, n.jsxs)("linearGradient", {
              id: `${t2}-light`,
              x1: "8",
              y1: "3",
              x2: "8",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, n.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".42"
                }),
                (0, n.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: ".72"
                })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `${t2}-dark`,
              x1: "16",
              y1: "3",
              x2: "16",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, n.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".88"
                }),
                (0, n.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: "1"
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("path", {
          d: "M12 2.5 4.75 20.75 12 16.9Z",
          fill: `url(#${t2}-light)`
        }),
        (0, n.jsx)("path", {
          d: "M12 2.5 19.25 20.75 12 16.9Z",
          fill: `url(#${t2}-dark)`
        })
      ]
    });
  }
  var x = t(9005), v = t(64577), b = t(35484), w = t(92298), j = t(71363), N = t(57465), k = t(18986), T = t(60466), C = t(52898), S = t(90710), A = t(57990), E = t(69203), $ = t(78841), R = t(76704), M = t.n(R);
  let B = [...h.T.ease.enter], z = { type: "spring", visualDuration: 0.3, bounce: 0 }, I = { duration: h.T.duration.fast, ease: B }, L = { duration: 0.1, ease: [...h.T.ease.standard] }, D = (...e2) => e2.filter(Boolean).join(" ");
  function P({ agent: e2, className: a2 }) {
    let t2 = { className: D(M().mark, a2), "aria-hidden": true };
    return "anthropic" === e2.provider ? (0, n.jsx)(g, { ...t2, "data-brand": "claude" }) : "openai" === e2.provider ? (0, n.jsx)(_, { ...t2 }) : "google" === e2.provider ? (0, n.jsx)(y, { ...t2 }) : (0, n.jsx)(S.A, { ...t2, strokeWidth: 1.75 });
  }
  let q = {
    vercel: function({ title: e2 = "Vercel", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", { d: "m12 1.608 12 20.784H0Z" })
      });
    },
    gmail: function({ title: e2 = "Gmail", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", {
          d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        })
      });
    },
    postgresql: function({ title: e2 = "PostgreSQL", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", {
          d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
        })
      });
    },
    linear: function({ title: e2 = "Linear", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", {
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        })
      });
    },
    github: function({ title: e2 = "GitHub", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", {
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
      });
    },
    sentry: function({ title: e2 = "Sentry", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", {
          d: "M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z"
        })
      });
    },
    stripe: function({ title: e2 = "Stripe", ...a2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, n.jsx)("path", {
          d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
        })
      });
    }
  };
  function O({ tool: e2, className: a2 }) {
    let t2 = e2.brand ? q[e2.brand] : void 0;
    return t2 ? (0, n.jsx)(t2, {
      className: D(M().mark, a2),
      "data-brand": e2.brand,
      "aria-hidden": true
    }) : (0, n.jsx)(A.A, {
      className: D(M().mark, a2),
      strokeWidth: 1.75,
      "aria-hidden": "true"
    });
  }
  let W = { low: "Low", medium: "Medium", high: "High" }, U = { low: d.A, medium: E.A, high: $.A };
  function F({ risk: e2, long: a2 = false }) {
    let t2 = U[e2];
    return (0, n.jsxs)("span", {
      className: M().risk,
      "data-risk": e2,
      children: [
        (0, n.jsx)(t2, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }),
        (0, n.jsxs)("span", {
          children: [
            W[e2],
            (0, n.jsx)("span", {
              className: a2 ? M().riskWord : M().srOnly,
              children: " risk"
            })
          ]
        })
      ]
    });
  }
  function H({ text: e2 }) {
    return (0, n.jsx)(n.Fragment, {
      children: e2.split("`").map(
        (e3, a2) => a2 % 2 ? (0, n.jsx)("code", { className: M().code, children: e3 }, a2) : (0, n.jsx)("span", { children: e3 }, a2)
      )
    });
  }
  function G({ id: e2, children: a2, reduced: t2, className: r2 }) {
    return (0, n.jsx)("span", {
      className: D(M().swap, r2),
      children: (0, n.jsx)(i.N, {
        initial: false,
        mode: "popLayout",
        children: (0, n.jsx)(
          l.PY1.span,
          {
            className: M().swapItem,
            initial: { opacity: 0, y: 2 * !t2 },
            animate: { opacity: 1, y: 0, transition: t2 ? { duration: 0 } : I },
            exit: { opacity: 0, transition: t2 ? { duration: 0 } : L },
            children: a2
          },
          e2
        )
      })
    });
  }
  function Y({ children: e2, reduced: a2, className: t2, innerClassName: s2 }) {
    let i2 = (0, r.useRef)(null), [o2, d2] = (0, r.useState)("auto");
    return (0, r.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(([a4]) => {
        a4 && d2(a4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, n.jsx)(l.PY1.div, {
      className: D(M().autoHeight, t2),
      initial: false,
      animate: { height: o2 },
      transition: a2 ? { duration: 0 } : z,
      children: (0, n.jsx)("div", {
        ref: i2,
        className: D(M().autoHeightInner, s2),
        children: e2
      })
    });
  }
  let K = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });
  function V(e2) {
    let a2 = Date.parse(e2);
    return Number.isNaN(a2) ? "" : K.format(a2);
  }
  function Z({
    request: e2,
    state: a2,
    edits: t2,
    now: s2,
    reduced: o2,
    workspace: d2,
    workspaceMark: c2,
    demo: u2,
    allowRef: p2,
    onEdit: m2,
    onRestore: h2,
    onDecide: g2,
    onAlwaysAllow: _2
  }) {
    let y2 = (0, r.useId)(), { agent: f2, tool: x2 } = e2, v2 = "idle" === a2.phase || "error" === a2.phase;
    return (0, n.jsxs)("div", {
      className: M().focus,
      role: "group",
      "aria-labelledby": y2,
      children: [
        (0, n.jsxs)("div", {
          className: M().focusMeta,
          children: [
            (0, n.jsxs)("span", {
              className: M().agent,
              children: [
                (0, n.jsx)(P, { agent: f2, className: M().agentMark }),
                (0, n.jsx)("span", {
                  className: M().agentName,
                  children: f2.name
                }),
                (0, n.jsx)("span", {
                  className: M().agentModel,
                  children: f2.model
                }),
                (0, n.jsx)("time", {
                  className: M().agentTime,
                  dateTime: e2.requestedAt,
                  title: `Asked at ${V(e2.requestedAt)}`,
                  suppressHydrationWarning: true,
                  children: (function(e3, a3) {
                    let t3 = Date.parse(e3);
                    if (null === a3 || Number.isNaN(t3)) return V(e3);
                    let n2 = Math.max(0, Math.round((a3 - t3) / 6e4));
                    return n2 < 1 ? "Just now" : n2 < 60 ? `${n2} min ago` : V(e3);
                  })(e2.requestedAt, s2)
                })
              ]
            }),
            (0, n.jsx)(F, { risk: e2.risk, long: true })
          ]
        }),
        (0, n.jsxs)("h3", {
          id: y2,
          className: M().focusTitle,
          children: [
            (0, n.jsx)(O, { tool: x2, className: M().titleMark }),
            (0, n.jsxs)("span", {
              className: M().titleText,
              children: [
                (0, n.jsx)(H, { text: e2.title }),
                (0, n.jsxs)("span", {
                  className: M().srOnly,
                  children: [", asked by ", f2.name]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("p", { className: M().reason, children: e2.reason }),
        (0, n.jsx)("dl", {
          className: M().args,
          "aria-label": "Arguments",
          children: e2.args.map((e3) => {
            let a3 = t2[e3.key] ?? e3.value;
            return (0, n.jsx)(
              Q,
              {
                arg: e3,
                value: a3,
                edited: a3 !== e3.value,
                disabled: !v2,
                onChange: (a4) => m2(e3.key, a4),
                onRestore: () => h2(e3.key)
              },
              e3.key
            );
          })
        }),
        (0, n.jsx)(Y, {
          reduced: o2,
          className: M().decisionSlot,
          children: (0, n.jsx)("div", {
            className: M().decisionStack,
            children: (0, n.jsx)(i.N, {
              initial: false,
              mode: "popLayout",
              children: (0, n.jsx)(
                l.PY1.div,
                {
                  className: M().decision,
                  initial: { opacity: 0, y: 2 * !o2 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: o2 ? { duration: 0 } : I
                  },
                  exit: { opacity: 0, transition: o2 ? { duration: 0 } : L },
                  children: (0, n.jsx)(X, {
                    request: e2,
                    state: a2,
                    reduced: o2,
                    workspace: d2,
                    workspaceMark: c2,
                    demo: u2,
                    allowRef: p2,
                    onDecide: g2,
                    onAlwaysAllow: _2
                  })
                },
                J(a2)
              )
            })
          })
        })
      ]
    });
  }
  let J = (e2) => "idle" === e2.phase ? "idle" : `${e2.phase}-${e2.outcome ?? ""}-${e2.rule ? "rule" : ""}`;
  function X({
    request: e2,
    state: a2,
    reduced: t2,
    workspace: r2,
    workspaceMark: s2,
    demo: i2,
    allowRef: l2,
    onDecide: o2,
    onAlwaysAllow: c2
  }) {
    let { agent: u2 } = e2;
    switch (a2.phase) {
      case "sending":
        return (0, n.jsx)("p", {
          className: M().line,
          children: (0, n.jsx)(C.n, {
            active: !t2,
            children: "denied" === a2.outcome ? `Telling ${u2.name} no` : `Sending your approval to ${u2.name}`
          })
        });
      case "done":
        if ("denied" === a2.outcome)
          return (0, n.jsxs)("p", {
            className: M().line,
            children: [
              (0, n.jsx)(x.A, {
                className: M().lineIcon,
                "data-tone": "muted",
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              (0, n.jsxs)("span", {
                children: [
                  "Denied",
                  (0, n.jsxs)("span", {
                    className: M().lineNote,
                    children: [u2.name, " will not run it"]
                  })
                ]
              })
            ]
          });
        if (a2.rule)
          return (0, n.jsxs)("p", {
            className: M().line,
            children: [
              (0, n.jsx)(d.A, {
                className: M().lineIcon,
                "data-tone": "accent",
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              (0, n.jsxs)("span", {
                children: [
                  "Approved",
                  (0, n.jsx)("span", {
                    className: M().lineNote,
                    children: "agent" === a2.rule.scope ? `Always allowed for ${u2.name}` : `Always allowed for any agent in ${r2}`
                  })
                ]
              })
            ]
          });
        return (0, n.jsxs)("p", {
          className: M().line,
          children: [
            (0, n.jsx)(v.A, {
              className: M().lineIcon,
              "data-tone": "success",
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, n.jsxs)("span", {
              children: [
                a2.edited ? "Approved with your edits" : "Approved",
                (0, n.jsx)("span", {
                  className: M().lineNote,
                  children: i2 ? "Simulated, nothing ran" : `${u2.name} can go ahead`
                })
              ]
            })
          ]
        });
      case "error":
        return (0, n.jsxs)("div", {
          className: M().errorRow,
          role: "alert",
          children: [
            (0, n.jsxs)("p", {
              className: M().errorText,
              children: [
                (0, n.jsx)(b.A, {
                  className: M().lineIcon,
                  "data-tone": "danger",
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                a2.message ?? "Your decision was not sent. Nothing ran."
              ]
            }),
            (0, n.jsxs)("span", {
              className: M().actionsEnd,
              children: [
                (0, n.jsx)(p.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => o2("denied"),
                  children: "Deny"
                }),
                (0, n.jsxs)(p.$, {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => o2("denied" === a2.outcome ? "denied" : "approved"),
                  children: [
                    (0, n.jsx)(w.A, {
                      size: 15,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Retry"
                  ]
                })
              ]
            })
          ]
        });
      default:
        return (0, n.jsxs)("div", {
          className: M().actions,
          children: [
            (0, n.jsx)(p.$, {
              variant: "ghost",
              size: "sm",
              className: M().deny,
              onClick: () => o2("denied"),
              "aria-keyshortcuts": "d",
              children: "Deny"
            }),
            (0, n.jsxs)("span", {
              className: M().actionsEnd,
              children: [
                (0, n.jsx)("span", {
                  ref: l2,
                  className: M().allow,
                  children: (0, n.jsx)(T.r, {
                    label: "Always allow",
                    items: [
                      {
                        label: `For ${u2.name}`,
                        icon: (0, n.jsx)(j.A, { size: 16, strokeWidth: 1.75 }),
                        onSelect: () => c2("agent")
                      },
                      {
                        label: `For any agent in ${r2}`,
                        icon: s2 ?? (0, n.jsx)(N.A, { size: 16, strokeWidth: 1.75 }),
                        onSelect: () => c2("workspace")
                      }
                    ]
                  })
                }),
                (0, n.jsxs)(p.$, {
                  size: "sm",
                  className: M().approve,
                  onClick: () => o2("approved"),
                  "aria-keyshortcuts": "Enter a",
                  children: [
                    "Approve",
                    (0, n.jsx)(m.ue, {
                      keys: "Enter",
                      size: "sm",
                      className: M().approveKbd,
                      "aria-hidden": "true"
                    })
                  ]
                })
              ]
            })
          ]
        });
    }
  }
  function Q({
    arg: e2,
    value: a2,
    edited: t2,
    disabled: s2,
    onChange: i2,
    onRestore: l2
  }) {
    let [o2, d2] = (0, r.useState)(false), [c2, u2] = (0, r.useState)(a2), p2 = (0, r.useRef)(null), m2 = (0, r.useRef)(null), h2 = (0, r.useRef)(false), g2 = (0, r.useId)(), _2 = false !== e2.editable;
    (0, r.useEffect)(() => {
      if (o2) {
        p2.current?.focus(), p2.current?.select();
        return;
      }
      h2.current && (h2.current = false, m2.current?.focus());
    }, [o2]);
    let y2 = (e3, t3) => {
      let n2 = c2.trim();
      e3 && n2 && n2 !== a2 && i2(n2), h2.current = t3, d2(false);
    }, f2 = (a3) => {
      "Escape" === a3.key ? (a3.preventDefault(), a3.stopPropagation(), y2(false, true)) : "Enter" === a3.key && (!e2.multiline || a3.metaKey || a3.ctrlKey) && (a3.preventDefault(), a3.stopPropagation(), y2(true, true));
    }, x2 = [M().argValue, e2.mono ? M().mono : ""].filter(Boolean).join(" ");
    return (0, n.jsxs)("div", {
      className: M().argRow,
      "data-edited": t2 || void 0,
      children: [
        (0, n.jsxs)("dt", {
          className: M().argKey,
          children: [
            o2 ? (0, n.jsx)("label", { htmlFor: g2, children: e2.label }) : e2.label,
            t2 && (0, n.jsx)("span", {
              className: M().srOnly,
              children: ", edited"
            })
          ]
        }),
        (0, n.jsxs)("dd", {
          className: M().argCell,
          children: [
            !_2 || s2 ? (0, n.jsx)("span", {
              className: x2,
              "data-static": !_2 || void 0,
              children: a2
            }) : o2 ? e2.multiline ? (0, n.jsx)("textarea", {
              ref: p2,
              id: g2,
              className: [x2, M().field].join(" "),
              value: c2,
              rows: 2,
              onChange: (e3) => u2(e3.target.value),
              onKeyDown: f2,
              onBlur: () => y2(true, false),
              "aria-describedby": `${g2}-hint`,
              spellCheck: false
            }) : (0, n.jsx)("input", {
              ref: p2,
              id: g2,
              className: [x2, M().field].join(" "),
              value: c2,
              onChange: (e3) => u2(e3.target.value),
              onKeyDown: f2,
              onBlur: () => y2(true, false),
              "aria-describedby": `${g2}-hint`,
              spellCheck: false,
              autoComplete: "off"
            }) : (0, n.jsxs)("button", {
              ref: m2,
              type: "button",
              className: [x2, M().valueButton].join(" "),
              onClick: () => {
                u2(a2), d2(true);
              },
              "aria-label": `${e2.label}: ${a2}. Edit`,
              children: [
                (0, n.jsx)("span", {
                  className: M().valueText,
                  children: a2
                }),
                (0, n.jsx)(k.A, {
                  className: M().editIcon,
                  size: 13,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            }),
            o2 && (0, n.jsx)("span", {
              id: `${g2}-hint`,
              className: M().srOnly,
              children: e2.multiline ? "Command Enter saves, Escape cancels" : "Enter saves, Escape cancels"
            })
          ]
        }),
        t2 && !o2 && !s2 && (0, n.jsx)("button", {
          type: "button",
          className: M().restore,
          onClick: l2,
          "aria-label": `Restore ${e2.label} to the agent's value`,
          title: "Restore the agent's value",
          children: (0, n.jsx)(w.A, {
            size: 13,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        })
      ]
    });
  }
  var ee = t(83978);
  let ea = (0, r.forwardRef)(function({
    rules: e2,
    workspace: a2,
    reduced: t2,
    bump: s2,
    open: o2,
    onOpenChange: d2,
    onRemove: c2
  }, p2) {
    let m2 = (0, r.useRef)(null);
    return (0, n.jsxs)(ee.AM, {
      open: o2,
      onOpenChange: d2,
      children: [
        (0, n.jsxs)(ee.Wv, {
          ref: p2,
          className: M().rulesButton,
          "aria-label": `Rules, ${e2.length}`,
          children: [
            s2 > 0 && (0, n.jsx)(
              "span",
              {
                className: M().rulesFlash,
                "data-reduced": t2 || void 0,
                "aria-hidden": "true"
              },
              s2
            ),
            (0, n.jsxs)("span", {
              className: M().rulesLabel,
              "aria-hidden": "true",
              children: [
                "Rules",
                (0, n.jsx)("span", { className: M().dot, children: "\xB7" }),
                (0, n.jsx)(u.q, { value: e2.length })
              ]
            })
          ]
        }),
        (0, n.jsxs)(ee.hl, {
          align: "end",
          className: M().rulesPanel,
          "data-rules-panel": "",
          tabIndex: -1,
          "aria-label": "Always allow rules",
          children: [
            (0, n.jsx)("p", {
              className: M().panelTitle,
              children: "Always allowed"
            }),
            (0, n.jsxs)(Y, {
              reduced: t2,
              children: [
                0 === e2.length && (0, n.jsx)("p", {
                  className: M().panelEmpty,
                  children: "No rules yet. Choose Always allow on a request to skip the ask next time."
                }),
                (0, n.jsx)("ul", {
                  ref: m2,
                  className: M().ruleList,
                  children: (0, n.jsx)(i.N, {
                    initial: false,
                    children: e2.map(
                      (e3, r2) => (0, n.jsx)(
                        l.PY1.li,
                        {
                          className: M().ruleItem,
                          initial: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          exit: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                          transition: t2 ? { duration: 0 } : { height: z, opacity: { duration: 0.16 } },
                          children: (0, n.jsxs)("div", {
                            className: M().rule,
                            children: [
                              (0, n.jsx)(O, {
                                tool: e3.tool,
                                className: M().ruleMark
                              }),
                              (0, n.jsxs)("span", {
                                className: M().ruleText,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: M().ruleAction,
                                    children: e3.tool.action
                                  }),
                                  (0, n.jsx)("span", {
                                    className: M().ruleScope,
                                    title: e3.createdBy ? `Added by ${e3.createdBy}` : void 0,
                                    children: "agent" === e3.scope ? `${e3.agent?.name ?? "One agent"} only` : `Any agent in ${a2}`
                                  })
                                ]
                              }),
                              (0, n.jsx)("button", {
                                type: "button",
                                className: M().iconButton,
                                "data-remove": "",
                                onClick: () => ((e4, a3) => {
                                  let t3 = Array.from(
                                    m2.current?.querySelectorAll(
                                      "[data-remove]"
                                    ) ?? []
                                  ), n2 = t3[a3] === document.activeElement;
                                  if (c2(e4), !n2) return;
                                  let r3 = t3[a3 + 1] ?? t3[a3 - 1];
                                  r3 ? r3.focus() : m2.current?.closest("[data-rules-panel]")?.focus();
                                })(e3, r2),
                                "aria-label": `Remove rule: ${e3.tool.action}, ${"agent" === e3.scope ? e3.agent?.name ?? "one agent" : "any agent"}`,
                                children: (0, n.jsx)(x.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            ]
                          })
                        },
                        e3.id
                      )
                    )
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }), et = { approved: "Approved", denied: "Denied", allowed: "Allowed by rule" }, en = { approved: v.A, denied: x.A, allowed: d.A };
  function er({ entries: e2, reduced: a2, id: t2 }) {
    return (0, n.jsx)("ul", {
      id: t2,
      className: M().log,
      "aria-label": "Resolved requests",
      children: (0, n.jsx)(i.N, {
        initial: false,
        children: e2.map((e3) => {
          let t3 = en[e3.outcome];
          return (0, n.jsx)(
            l.PY1.li,
            {
              className: M().logItem,
              initial: a2 ? { opacity: 0 } : { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              transition: a2 ? { duration: 0 } : { height: z, opacity: { duration: 0.16 } },
              children: (0, n.jsxs)("div", {
                className: M().logRow,
                children: [
                  (0, n.jsx)(O, { tool: e3.tool, className: M().logMark }),
                  (0, n.jsxs)("span", {
                    className: M().logText,
                    children: [
                      (0, n.jsx)("span", {
                        className: M().logSummary,
                        title: e3.summary,
                        children: e3.summary
                      }),
                      (0, n.jsxs)("span", {
                        className: M().logMeta,
                        children: [
                          (0, n.jsxs)("span", {
                            className: M().logOutcome,
                            "data-outcome": e3.outcome,
                            children: [
                              (0, n.jsx)(t3, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              et[e3.outcome],
                              e3.edited ? " with edits" : ""
                            ]
                          }),
                          (0, n.jsx)("span", {
                            children: "Rule" === e3.decidedBy ? e3.agentName : `by ${e3.decidedBy}`
                          })
                        ]
                      })
                    ]
                  }),
                  (0, n.jsx)("time", {
                    className: M().logTime,
                    dateTime: e3.decidedAt,
                    children: V(e3.decidedAt)
                  })
                ]
              })
            },
            e3.id
          );
        })
      })
    });
  }
  let es = (e2) => `2026-10-20T${e2}:00`, ei = {
    id: "deploy",
    name: "Deploy agent",
    model: "Claude Opus 5.5",
    provider: "anthropic"
  }, el = {
    id: "support",
    name: "Support agent",
    model: "GPT-6 Luna",
    provider: "openai"
  }, eo = {
    id: "data",
    name: "Data agent",
    model: "Gemini 4 Argon",
    provider: "google"
  }, ed = {
    id: "triage",
    name: "Triage agent",
    model: "Claude Haiku 5.5",
    provider: "anthropic"
  }, ec = {
    id: "vercel.deploy",
    name: "Vercel",
    action: "Deploy to production",
    brand: "vercel"
  }, eu = {
    id: "gmail.send",
    name: "Gmail",
    action: "Send email",
    brand: "gmail"
  }, ep = {
    id: "postgres.write",
    name: "PostgreSQL",
    action: "Write to billing-prod",
    brand: "postgresql"
  }, em = {
    id: "github.pr",
    name: "GitHub",
    action: "Open pull requests",
    brand: "github"
  }, eh = {
    id: "sentry.read",
    name: "Sentry",
    action: "Read issues",
    brand: "sentry"
  }, eg = [
    {
      id: "req-deploy-web",
      agent: ei,
      tool: ec,
      title: "Run `vercel deploy --prod`",
      summary: "Deploy northwind-web to production",
      reason: "The preview passed all 214 checks and the release window opened at 14:00.",
      args: [
        {
          key: "project",
          label: "Project",
          value: "northwind-web",
          mono: true
        },
        {
          key: "commit",
          label: "Commit",
          value: "8f3c2a1 Ship pricing v3",
          mono: true,
          editable: false
        },
        { key: "target", label: "Target", value: "production", mono: true },
        { key: "regions", label: "Regions", value: "fra1, iad1", mono: true }
      ],
      risk: "high",
      requestedAt: es("14:30")
    },
    {
      id: "req-email-dana",
      agent: el,
      tool: eu,
      title: "Send an email with Gmail",
      summary: "Email dana@halcyon.studio about her refund",
      reason: "Dana asked for an update twice today, and the refund cleared in Stripe at 13:52.",
      args: [
        { key: "to", label: "To", value: "dana@halcyon.studio" },
        {
          key: "subject",
          label: "Subject",
          value: "Your refund for order #48213"
        },
        {
          key: "body",
          label: "Body",
          value: "Hi Dana, I have refunded $129.00 to your Visa ending 4242. It usually arrives in 5 to 10 business days.",
          multiline: true
        }
      ],
      risk: "medium",
      requestedAt: es("14:27")
    },
    {
      id: "req-sql-plans",
      agent: eo,
      tool: ep,
      title: "`UPDATE` 1,284 rows in PostgreSQL",
      summary: "Move 1,284 legacy plans to team",
      reason: "Moves legacy team plans to the new plan before the 02:00 billing run.",
      args: [
        {
          key: "database",
          label: "Database",
          value: "billing-prod",
          mono: true,
          editable: false
        },
        {
          key: "statement",
          label: "Statement",
          value: "UPDATE subscriptions SET plan = 'team' WHERE plan = 'team_legacy';",
          mono: true,
          multiline: true
        },
        { key: "rows", label: "Rows", value: "1,284", editable: false }
      ],
      risk: "high",
      requestedAt: es("14:21")
    },
    {
      id: "req-deploy-docs",
      agent: ei,
      tool: ec,
      title: "Run `vercel deploy --prod`",
      summary: "Deploy northwind-docs to production",
      reason: "The pricing v3 docs are reviewed and should ship with the web release.",
      args: [
        {
          key: "project",
          label: "Project",
          value: "northwind-docs",
          mono: true
        },
        {
          key: "commit",
          label: "Commit",
          value: "c41d9e7 Update pricing pages",
          mono: true,
          editable: false
        },
        { key: "target", label: "Target", value: "production", mono: true },
        { key: "regions", label: "Regions", value: "fra1", mono: true }
      ],
      risk: "medium",
      requestedAt: es("14:19")
    },
    {
      id: "req-close-web",
      agent: ed,
      tool: {
        id: "linear.close",
        name: "Linear",
        action: "Close issues",
        brand: "linear"
      },
      title: "Close 6 issues in Linear",
      summary: "Close 6 duplicates of WEB-398",
      reason: "All six report the Safari checkout bug that WEB-398 fixed in v2.14.",
      args: [
        {
          key: "issues",
          label: "Issues",
          value: "WEB-412, WEB-418, WEB-421, WEB-427, WEB-433, WEB-440",
          mono: true
        },
        { key: "state", label: "Close as", value: "Duplicate of WEB-398" },
        {
          key: "comment",
          label: "Comment",
          value: "Fixed by WEB-398, shipped in v2.14."
        }
      ],
      risk: "low",
      requestedAt: es("14:16")
    }
  ], e_ = [
    {
      id: "rule-github-pr",
      tool: em,
      scope: "agent",
      agent: { id: ei.id, name: ei.name },
      createdBy: "Marcus Johnson",
      createdAt: es("09:12")
    },
    {
      id: "rule-sentry-read",
      tool: eh,
      scope: "workspace",
      createdBy: "Emma Collins",
      createdAt: es("10:40")
    }
  ], ey = [
    {
      id: "log-refund",
      agentName: el.name,
      tool: {
        id: "stripe.refund",
        name: "Stripe",
        action: "Issue refunds",
        brand: "stripe"
      },
      summary: "Refund $129.00 on order #48213",
      outcome: "approved",
      decidedBy: "Emma Collins",
      decidedAt: es("13:52")
    },
    {
      id: "log-events",
      agentName: eo.name,
      tool: ep,
      summary: "Delete events older than January 2025",
      outcome: "denied",
      decidedBy: "Marcus Johnson",
      decidedAt: es("13:41")
    },
    {
      id: "log-sentry",
      agentName: ed.name,
      tool: eh,
      summary: "Read 14 issues in northwind-web",
      outcome: "allowed",
      decidedBy: "Rule",
      decidedAt: es("13:30")
    },
    {
      id: "log-pr",
      agentName: ei.name,
      tool: em,
      summary: "Open pull request #2143",
      outcome: "allowed",
      decidedBy: "Rule",
      decidedAt: es("12:58")
    },
    {
      id: "log-api",
      agentName: ei.name,
      tool: ec,
      summary: "Deploy northwind-api to production",
      outcome: "approved",
      edited: true,
      decidedBy: "Emma Collins",
      decidedAt: es("11:20")
    },
    {
      id: "log-invoice",
      agentName: el.name,
      tool: eu,
      summary: "Email leo@brightpath.io about invoice 1042",
      outcome: "denied",
      decidedBy: "Emma Collins",
      decidedAt: es("10:05")
    }
  ], ef = { phase: "idle" }, ex = (e2) => !e2 || "idle" === e2.phase || "error" === e2.phase, ev = [...h.T.ease.inOut], eb = (e2) => {
    let a2 = window.setInterval(e2, 15e3);
    return () => window.clearInterval(a2);
  }, ew = () => 15e3 * Math.floor(Date.now() / 15e3), ej = () => null;
  function eN({
    requests: e2,
    rules: a2,
    resolved: t2,
    reviewer: h2 = "Emma Collins",
    workspace: g2 = "Northwind",
    workspaceMark: _2 = "Northwind" === g2 ? (0, n.jsx)(f, { "aria-hidden": "true" }) : void 0,
    title: y2 = "Approvals",
    onDecision: x2,
    onRuleChange: v2,
    className: b2
  }) {
    let w2 = void 0 === e2, j2 = !!(0, s.I)(), N2 = (0, r.useId)(), { now: k2, stamp: T2 } = (function(e3) {
      let a3 = (0, r.useSyncExternalStore)(eb, ew, ej), [t3] = (0, r.useState)(() => ({
        wall: Date.now(),
        demo: Date.parse("2026-10-20T14:32:00")
      }));
      return {
        now: null === a3 ? null : e3 ? t3.demo + Math.max(0, a3 - t3.wall) : a3,
        stamp: (0, r.useCallback)(
          () => new Date(
            e3 ? t3.demo + (Date.now() - t3.wall) : Date.now()
          ).toISOString(),
          [e3, t3]
        )
      };
    })(w2), [C2, S2] = (0, r.useState)(() => e2 ?? eg), [A2, E2] = (0, r.useState)(() => (e2 ?? eg)[0]?.id ?? null), [$2, R2] = (0, r.useState)({}), [I2, D2] = (0, r.useState)({}), [q2, W2] = (0, r.useState)(() => a2 ?? (w2 ? e_ : [])), [U2, H2] = (0, r.useState)(() => t2 ?? (w2 ? ey : [])), [K2, V2] = (0, r.useState)("swap"), [J2, X2] = (0, r.useState)(null), [Q2, ee2] = (0, r.useState)(0), [et2, en2] = (0, r.useState)(false), [es2, ei2] = (0, r.useState)(false), [el2, eo2] = (0, r.useState)(""), [ed2, ec2] = (0, r.useState)(null), [eu2, ep2] = (0, r.useState)(e2);
    if (e2 !== eu2 && (ep2(e2), e2)) {
      let a3 = new Set(U2.map((e3) => e3.id)), t3 = new Set(C2.map((e3) => e3.id)), n2 = e2.filter((e3) => !t3.has(e3.id) && !a3.has(e3.id));
      n2.length && (S2([...C2, ...n2]), A2 || E2(n2[0].id));
    }
    let em2 = (0, r.useRef)(null), eh2 = (0, r.useRef)(null), ek2 = (0, r.useRef)(null), eT = (0, r.useRef)(null), eC = (0, r.useRef)({
      queue: C2,
      cards: $2,
      edits: I2,
      focusId: A2,
      onDecision: x2,
      onRuleChange: v2
    });
    (0, r.useLayoutEffect)(() => {
      eC.current = {
        queue: C2,
        cards: $2,
        edits: I2,
        focusId: A2,
        onDecision: x2,
        onRuleChange: v2
      };
    });
    let eS = (0, r.useRef)(/* @__PURE__ */ new Set()), eA = (0, r.useRef)(/* @__PURE__ */ new Set()), eE = (0, r.useRef)(false), e$ = (0, r.useRef)(false), eR = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      let e3 = eS.current;
      return () => {
        e3.forEach(window.clearTimeout), e3.clear();
      };
    }, []);
    let eM = (0, r.useCallback)((e3, a3) => {
      let t3 = window.setTimeout(() => {
        eS.current.delete(t3), e3();
      }, a3);
      eS.current.add(t3);
    }, []), eB = (0, r.useCallback)((e3) => eo2((a3) => a3 === e3 ? `${e3} ` : e3), []), ez = (0, r.useCallback)((e3, a3) => R2((t3) => ({ ...t3, [e3]: a3 })), []), eI = (0, r.useCallback)(
      () => eM(() => {
        let e3 = document.activeElement;
        (!e3 || e3 === document.body) && e$.current && eh2.current?.focus({ preventScroll: true });
      }, 150),
      [eM]
    ), eL = (e3) => {
      let a3 = eC.current.edits[e3.id] ?? {};
      return {
        args: Object.fromEntries(
          e3.args.map((e4) => [e4.key, a3[e4.key] ?? e4.value])
        ),
        edited: e3.args.some(
          (e4) => void 0 !== a3[e4.key] && a3[e4.key] !== e4.value
        )
      };
    }, eD = (0, r.useCallback)(
      (e3, a3) => {
        let t3 = eC.current.onDecision;
        if (t3)
          try {
            return Promise.resolve(t3(e3)).then(() => void 0);
          } catch (e4) {
            return Promise.reject(e4);
          }
        return new Promise(
          (t4, n2) => eM(
            () => a3 ? n2(Error("timeout")) : t4(),
            "denied" === e3.outcome ? 280 : 460
          )
        );
      },
      [eM]
    ), eP = (0, r.useCallback)(
      (e3, a3) => {
        let { queue: t3, cards: n2, focusId: r2 } = eC.current, s2 = t3.findIndex((a4) => a4.id === e3.id);
        if (s2 < 0) return;
        eA.current.delete(e3.id);
        let i2 = t3.filter((a4) => a4.id !== e3.id);
        if (r2 === e3.id) {
          let e4 = [...i2.slice(s2), ...i2.slice(0, s2)].find(
            (e5) => ex(n2[e5.id]) && !eA.current.has(e5.id)
          ) ?? null;
          V2("advance"), E2(e4?.id ?? null);
        }
        S2((a4) => a4.filter((a5) => a5.id !== e3.id)), H2((t4) => [
          {
            id: e3.id,
            agentName: e3.agent.name,
            tool: e3.tool,
            summary: e3.summary,
            ...a3
          },
          ...t4
        ]), eI();
      },
      [eI]
    ), eq = (0, r.useCallback)(
      (e3, a3) => {
        let t3 = eC.current.queue.find((a4) => a4.id === e3);
        if (!t3 || !ex(eC.current.cards[e3]) || eA.current.has(e3)) return;
        eA.current.add(e3);
        let { args: n2, edited: r2 } = eL(t3), s2 = {
          requestId: e3,
          outcome: a3,
          args: n2,
          edited: r2,
          decidedBy: h2,
          decidedAt: T2()
        }, i2 = w2 && !eC.current.onDecision && "approved" === a3 && "req-sql-plans" === e3 && !eE.current;
        i2 && (eE.current = true), ez(e3, { phase: "sending", outcome: a3 }), eI(), eD(s2, i2).then(
          () => {
            ez(e3, { phase: "done", outcome: a3, edited: r2 }), eB(
              `${"approved" === a3 ? r2 ? "Approved with your edits" : "Approved" : "Denied"}: ${t3.agent.name}, ${t3.summary}.${w2 ? " Simulated, nothing ran." : ""}`
            ), eM(
              () => eP(t3, {
                outcome: a3,
                edited: r2,
                decidedBy: h2,
                decidedAt: s2.decidedAt
              }),
              620
            );
          },
          (n3) => {
            let r3 = w2 && !eC.current.onDecision ? `${t3.agent.name} did not answer, so nothing ran. This failure is simulated.` : n3 instanceof Error && n3.message ? n3.message : `${t3.agent.name} did not get your decision. Nothing ran.`;
            eA.current.delete(e3), ez(e3, { phase: "error", outcome: a3, message: r3 }), eB(`Not sent. ${r3} Retry or deny.`);
          }
        );
      },
      [eB, eD, w2, eI, eM, h2, ez, eP, T2]
    ), eO = (0, r.useCallback)(
      (e3) => {
        let a3 = eC.current.focusId, t3 = eC.current.queue.find((e4) => e4.id === a3);
        if (!a3 || !t3 || !ex(eC.current.cards[a3]) || eA.current.has(a3)) return;
        eA.current.add(a3);
        let { args: n2, edited: r2 } = eL(t3), s2 = T2(), i2 = {
          id: `rule-${t3.tool.id}-${"agent" === e3 ? t3.agent.id : "all"}-${Date.now().toString(36)}`,
          tool: t3.tool,
          scope: e3,
          agent: "agent" === e3 ? { id: t3.agent.id, name: t3.agent.name } : void 0,
          createdBy: h2,
          createdAt: s2
        };
        ez(a3, { phase: "done", outcome: "approved", rule: i2, edited: r2 }), eI();
        let l2 = () => {
          eR.current = null, X2(null), W2((e4) => [i2, ...e4]), ee2((e4) => e4 + 1), eC.current.onRuleChange?.({ type: "added", rule: i2 });
          let { queue: n3, cards: r3 } = eC.current, s3 = n3.filter(
            (e4) => e4.id !== a3 && i2.tool.id === e4.tool.id && ("workspace" === i2.scope || i2.agent?.id === e4.agent.id) && ex(r3[e4.id]) && !eA.current.has(e4.id)
          );
          s3.forEach((e4) => eA.current.add(e4.id));
          let l3 = "agent" === e3 ? t3.agent.name : `Any agent in ${g2}`;
          eB(
            `Rule added: ${l3} can ${i2.tool.action.toLowerCase()} without asking.${s3.length ? ` It allowed ${s3.length} waiting ${1 === s3.length ? "request" : "requests"}.` : ""}`
          ), s3.forEach((e4, a4) => {
            ez(e4.id, { phase: "auto", outcome: "allowed", rule: i2 });
            let t4 = eL(e4), n4 = T2();
            eD(
              {
                requestId: e4.id,
                outcome: "allowed",
                args: t4.args,
                edited: t4.edited,
                ruleId: i2.id,
                decidedBy: "Rule",
                decidedAt: n4
              },
              false
            ).then(
              () => eM(
                () => eP(e4, {
                  outcome: "allowed",
                  decidedBy: "Rule",
                  decidedAt: n4
                }),
                1100 + 80 * a4
              ),
              () => {
                eA.current.delete(e4.id), ez(e4.id, ef), eB(
                  `The rule matched ${e4.summary}, but ${e4.agent.name} did not get the approval. It is still waiting.`
                );
              }
            );
          });
        }, o2 = em2.current?.getBoundingClientRect(), d2 = (e4) => {
          let a4 = e4?.getBoundingClientRect();
          return a4 && o2 ? {
            x: a4.left - o2.left + a4.width / 2,
            y: a4.top - o2.top + a4.height / 2
          } : null;
        }, c2 = d2(ek2.current), u2 = d2(eT.current);
        !j2 && c2 && u2 ? (eR.current = l2, X2({ id: i2.id, rule: i2, from: c2, to: u2 })) : l2();
        let p2 = Date.now();
        eD(
          {
            requestId: a3,
            outcome: "approved",
            args: n2,
            edited: r2,
            ruleId: i2.id,
            decidedBy: h2,
            decidedAt: s2
          },
          false
        ).then(
          () => eM(
            () => eP(t3, {
              outcome: "approved",
              edited: r2,
              decidedBy: h2,
              decidedAt: s2
            }),
            Math.max(620, 920 - (Date.now() - p2))
          ),
          () => {
            eA.current.delete(a3), ez(a3, {
              phase: "error",
              outcome: "approved",
              message: `The rule is saved, but ${t3.agent.name} did not get this approval. Nothing ran.`
            });
          }
        );
      },
      [eB, eD, eI, eM, j2, h2, ez, eP, T2, g2]
    ), eW = (0, r.useCallback)(
      (e3) => {
        W2((a4) => a4.filter((a5) => a5.id !== e3.id)), eC.current.onRuleChange?.({ type: "removed", rule: e3 });
        let a3 = "agent" === e3.scope ? e3.agent?.name ?? "This agent" : `Every agent in ${g2}`;
        eB(
          `Rule removed. ${a3} will ask before ${e3.tool.action.toLowerCase()} again.`
        );
      },
      [eB, g2]
    ), eU = (0, r.useCallback)(
      (e3, a3) => {
        let t3 = eC.current.focusId;
        if (!t3) return;
        D2((n3) => ({ ...n3, [t3]: { ...n3[t3], [e3]: a3 } }));
        let n2 = eC.current.queue.find((e4) => e4.id === t3)?.args.find((a4) => a4.key === e3);
        n2 && eB(`${n2.label} changed to ${a3}. Approve to send the edited value.`);
      },
      [eB]
    ), eF = (0, r.useCallback)(
      (e3) => {
        let a3 = eC.current.focusId;
        if (!a3) return;
        D2((t4) => {
          let n2 = { ...t4[a3] };
          return delete n2[e3], { ...t4, [a3]: n2 };
        });
        let t3 = eC.current.queue.find((e4) => e4.id === a3)?.args.find((a4) => a4.key === e3);
        t3 && eB(`${t3.label} restored to ${t3.value}.`);
      },
      [eB]
    ), eH = (0, r.useCallback)(
      (e3) => {
        let { focusId: a3, cards: t3 } = eC.current;
        e3 === a3 || a3 && !ex(t3[a3]) || !ex(t3[e3]) || eA.current.has(e3) || (V2("swap"), E2(e3), eI());
      },
      [eI]
    ), eG = (0, r.useCallback)(
      (e3) => {
        ec2(e3), eM(() => ec2((a3) => a3 === e3 ? null : a3), 160);
      },
      [eM]
    ), eY = (e3) => {
      if (e3.defaultPrevented || e3.metaKey || e3.ctrlKey || e3.altKey) return;
      let a3 = e3.target;
      if (a3?.closest(
        "input, textarea, select, [contenteditable='true'], [role='menu'], [role='dialog']"
      ))
        return;
      let t3 = 1 === e3.key.length ? e3.key.toLowerCase() : e3.key, n2 = eC.current.focusId;
      if ("j" === t3 || "k" === t3)
        ((e4) => {
          let { queue: a4, cards: t4, focusId: n3 } = eC.current, r2 = a4.filter(
            (e5) => e5.id === n3 || ex(t4[e5.id]) && !eA.current.has(e5.id)
          ), s2 = r2.findIndex((e5) => e5.id === n3), i2 = r2[Math.max(0, Math.min(r2.length - 1, s2 + e4))];
          i2 && eH(i2.id);
        })("j" === t3 ? 1 : -1);
      else if ("a" === t3 || "d" === t3) {
        if (!n2) return;
        eq(n2, "a" === t3 ? "approved" : "denied");
      } else {
        if ("Enter" !== t3 || !n2 || a3?.closest("button, a, [role='button']"))
          return;
        eq(n2, "approved");
      }
      e3.preventDefault(), eG("Enter" === t3 ? "enter" : t3);
    }, eK = (0, r.useRef)(eY);
    (0, r.useLayoutEffect)(() => {
      eK.current = eY;
    }), (0, r.useEffect)(() => {
      let e3 = (e4) => {
        e$.current = !!em2.current?.contains(e4.target);
      }, a3 = (e4) => {
        e$.current && (!document.activeElement || document.activeElement === document.body) && eK.current(e4);
      };
      return window.addEventListener("pointerdown", e3, true), window.addEventListener("keydown", a3), () => {
        window.removeEventListener("pointerdown", e3, true), window.removeEventListener("keydown", a3);
      };
    }, []);
    let eV = C2.find((e3) => e3.id === A2) ?? null, eZ = C2.filter((e3) => e3.id !== A2), eJ = C2.filter((e3) => {
      let a3 = $2[e3.id]?.phase;
      return "done" !== a3 && "auto" !== a3;
    }).length, eX = `${N2}-log`, eQ = "advance" === K2 && !j2;
    return (0, n.jsxs)("section", {
      ref: em2,
      className: [M().root, b2].filter(Boolean).join(" "),
      "aria-labelledby": `${N2}-title`,
      onKeyDown: eY,
      children: [
        (0, n.jsxs)("header", {
          className: M().header,
          children: [
            (0, n.jsx)("h2", {
              id: `${N2}-title`,
              className: M().title,
              children: y2
            }),
            (0, n.jsxs)("span", {
              className: M().count,
              children: [(0, n.jsx)(u.q, { value: eJ }), " pending"]
            }),
            (0, n.jsx)(ea, {
              ref: eT,
              rules: q2,
              workspace: g2,
              reduced: j2,
              bump: Q2,
              open: es2,
              onOpenChange: ei2,
              onRemove: eW
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: eh2,
          className: M().focusArea,
          tabIndex: -1,
          role: "region",
          "aria-label": "Request in focus",
          "aria-keyshortcuts": "Enter a d j k",
          children: (0, n.jsx)(Y, {
            reduced: j2,
            innerClassName: M().focusStack,
            children: (0, n.jsx)(i.N, {
              initial: false,
              mode: "popLayout",
              children: (0, n.jsx)(
                l.PY1.div,
                {
                  className: M().focusSlide,
                  initial: { opacity: 0, y: j2 ? 0 : eQ ? 14 : 3 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: j2 ? { duration: 0 } : {
                      opacity: { duration: 0.2, ease: B },
                      y: eQ ? z : { duration: 0.2, ease: B }
                    }
                  },
                  exit: {
                    opacity: 0,
                    y: j2 || !eQ ? 0 : -6,
                    transition: j2 ? { duration: 0 } : L
                  },
                  children: eV ? (0, n.jsx)(Z, {
                    request: eV,
                    state: $2[eV.id] ?? ef,
                    edits: I2[eV.id] ?? {},
                    now: k2,
                    reduced: j2,
                    workspace: g2,
                    workspaceMark: _2,
                    demo: w2,
                    allowRef: ek2,
                    onEdit: eU,
                    onRestore: eF,
                    onDecide: (e3) => eq(eV.id, e3),
                    onAlwaysAllow: eO
                  }) : (0, n.jsxs)("div", {
                    className: M().empty,
                    children: [
                      (0, n.jsx)(o.A, {
                        className: M().emptyIcon,
                        size: 20,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, n.jsx)("p", {
                        className: M().emptyTitle,
                        children: "All caught up"
                      }),
                      (0, n.jsx)("p", {
                        className: M().emptyText,
                        children: "Agents ask here when a tool call needs a person. Rules skip the ask."
                      }),
                      w2 && (0, n.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        onClick: () => {
                          eS.current.forEach(window.clearTimeout), eS.current.clear(), eA.current.clear(), eE.current = false, eR.current = null, X2(null), S2(eg), R2({}), D2({}), W2(e_), H2(ey), V2("advance"), E2(eg[0]?.id ?? null), eB("Sample requests restored."), eI();
                        },
                        children: "Restore sample requests"
                      })
                    ]
                  })
                },
                eV?.id ?? "empty"
              )
            })
          })
        }),
        (0, n.jsx)("ul", {
          className: M().queue,
          "aria-label": "Waiting requests",
          children: (0, n.jsx)(i.N, {
            initial: false,
            children: eZ.map((e3) => {
              let a3 = $2[e3.id]?.phase === "auto";
              return (0, n.jsx)(
                l.PY1.li,
                {
                  className: M().queueItem,
                  initial: j2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: j2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, height: 0 },
                  transition: j2 ? { duration: 0 } : { height: z, opacity: { duration: 0.16 } },
                  children: (0, n.jsxs)("button", {
                    type: "button",
                    className: M().row,
                    "data-auto": a3 || void 0,
                    "aria-disabled": a3 || void 0,
                    onClick: () => eH(e3.id),
                    "aria-label": `${e3.agent.name}: ${e3.summary}. ${a3 ? "Allowed by your new rule" : `${e3.risk} risk`}`,
                    children: [
                      (0, n.jsxs)("span", {
                        className: M().rowMarks,
                        "aria-hidden": "true",
                        children: [
                          (0, n.jsx)(P, {
                            agent: e3.agent,
                            className: M().rowMark
                          }),
                          (0, n.jsx)(O, {
                            tool: e3.tool,
                            className: M().rowMark
                          })
                        ]
                      }),
                      (0, n.jsxs)("span", {
                        className: M().rowText,
                        children: [
                          (0, n.jsx)("span", {
                            className: M().rowSummary,
                            children: e3.summary
                          }),
                          (0, n.jsx)("span", {
                            className: M().rowAgent,
                            children: e3.agent.name
                          })
                        ]
                      }),
                      (0, n.jsx)(G, {
                        id: a3 ? "auto" : "risk",
                        reduced: j2,
                        className: M().rowStatus,
                        children: a3 ? (0, n.jsxs)("span", {
                          className: M().allowed,
                          children: [
                            (0, n.jsx)(d.A, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            (0, n.jsxs)("span", {
                              children: [
                                "Allowed",
                                (0, n.jsx)("span", {
                                  className: M().wideOnly,
                                  children: " by rule"
                                })
                              ]
                            })
                          ]
                        }) : (0, n.jsx)(F, { risk: e3.risk })
                      })
                    ]
                  })
                },
                e3.id
              );
            })
          })
        }),
        (0, n.jsxs)("div", {
          className: M().footer,
          children: [
            (0, n.jsxs)("button", {
              type: "button",
              className: M().logToggle,
              "aria-expanded": et2,
              "aria-controls": eX,
              onClick: () => en2((e3) => !e3),
              children: [
                (0, n.jsx)(c.A, {
                  className: M().chevron,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Resolved",
                (0, n.jsx)("span", {
                  className: M().dot,
                  "aria-hidden": "true",
                  children: "\xB7"
                }),
                (0, n.jsx)(u.q, { value: U2.length })
              ]
            }),
            (0, n.jsxs)("span", {
              className: M().hints,
              "aria-hidden": "true",
              children: [
                (0, n.jsxs)("span", {
                  className: M().hint,
                  children: [
                    (0, n.jsx)(m.ue, {
                      keys: "j",
                      size: "sm",
                      pressed: "j" === ed2
                    }),
                    (0, n.jsx)(m.ue, {
                      keys: "k",
                      size: "sm",
                      pressed: "k" === ed2
                    }),
                    "Move"
                  ]
                }),
                (0, n.jsxs)("span", {
                  className: M().hint,
                  children: [
                    (0, n.jsx)(m.ue, {
                      keys: "a",
                      size: "sm",
                      pressed: "a" === ed2 || "enter" === ed2
                    }),
                    "Approve"
                  ]
                }),
                (0, n.jsxs)("span", {
                  className: M().hint,
                  children: [
                    (0, n.jsx)(m.ue, {
                      keys: "d",
                      size: "sm",
                      pressed: "d" === ed2
                    }),
                    "Deny"
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(i.N, {
          initial: false,
          children: et2 && (0, n.jsx)(
            l.PY1.div,
            {
              className: M().logWrap,
              initial: j2 ? { opacity: 0 } : { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: j2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, height: 0 },
              transition: j2 ? { duration: 0 } : { height: z, opacity: { duration: 0.16 } },
              children: (0, n.jsx)(er, { id: eX, entries: U2, reduced: j2 })
            },
            "log"
          )
        }),
        (0, n.jsx)(i.N, {
          children: J2 && (0, n.jsx)(
            l.PY1.span,
            {
              className: M().flight,
              "aria-hidden": "true",
              initial: { x: J2.from.x, y: J2.from.y, opacity: 0 },
              animate: { x: J2.to.x, y: J2.to.y, opacity: [0, 1, 1, 0] },
              exit: { opacity: 0, transition: { duration: 0 } },
              transition: {
                x: { duration: 0.56, ease: ev },
                y: { duration: 0.56, ease: [0.3, 0, 0.2, 1] },
                opacity: {
                  duration: 0.56,
                  times: [0, 0.16, 0.8, 1],
                  ease: "linear"
                }
              },
              onAnimationComplete: () => eR.current?.(),
              children: (0, n.jsxs)("span", {
                className: M().chip,
                children: [
                  (0, n.jsx)(O, {
                    tool: J2.rule.tool,
                    className: M().chipMark
                  }),
                  J2.rule.tool.action
                ]
              })
            },
            J2.id
          )
        }),
        (0, n.jsx)("p", {
          className: M().srOnly,
          role: "status",
          "aria-live": "polite",
          children: el2
        })
      ]
    });
  }
  let ek = eN;
}

__m(__module,__exports,__require);
});
A.reg(9146, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={trigger:"dropdown-menu_trigger__tHHfW",item:"dropdown-menu_item__2mM29",triggerIcon:"dropdown-menu_triggerIcon__ePoI_",label:"dropdown-menu_label__E6np5",labelMeasure:"dropdown-menu_labelMeasure__xGL22",labelText:"dropdown-menu_labelText__77jcs",chevron:"dropdown-menu_chevron__4EgVP",menu:"dropdown-menu_menu__N7a5H","menu-exit":"dropdown-menu_menu-exit__njtoa",highlight:"dropdown-menu_highlight___o21W",icon:"dropdown-menu_icon__HqlVs",separator:"dropdown-menu_separator__hTmo3",destructive:"dropdown-menu_destructive__sBler"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(18986, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "pencil",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
    ]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(25898, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={anchor:"popover_anchor__Mcc5T",content:"popover_content__FmDK_","popover-exit":"popover_popover-exit__j6_xO"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(40093, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, {
    Mz: () => Z,
    UC: () => H,
    ZL: () => q,
    bL: () => K,
    bm: () => Q,
    i3: () => U,
    l9: () => $
  });
  var r = n(12115), o = n(70379), a = n(47527), i = n(68599), s = n(19416), l = n(32007), u = n(69885), c = n(89971), d = n(80878), p = n(19040), f = n(83935), h = n(55897), b = n(42442), y = n(59322), v = n(22954), m = n(5174), _ = n(95155), g = Object.defineProperty, x = (e2, t2) => g(e2, "name", { value: t2, configurable: true }), j = "Popover", [C, P] = (0, i.A)(j, [d.Bk]), A = (0, d.Bk)(), [O, w] = C(j), k = x((e2) => {
    let {
      __scopePopover: t2,
      children: n2,
      open: o2,
      defaultOpen: a2,
      onOpenChange: i2,
      modal: s2 = false
    } = e2, l2 = A(t2), u2 = r.useRef(null), [p2, f2] = r.useState(false), [h2, b2] = (0, y.i)({
      prop: o2,
      defaultProp: a2 ?? false,
      onChange: i2,
      caller: j
    });
    return (0, _.jsx)(d.bL, {
      ...l2,
      children: (0, _.jsx)(O, {
        scope: t2,
        contentId: (0, c.B)(),
        triggerRef: u2,
        open: h2,
        onOpenChange: b2,
        onOpenToggle: r.useCallback(() => b2((e3) => !e3), [b2]),
        hasCustomAnchor: p2,
        onCustomAnchorAdd: r.useCallback(() => f2(true), []),
        onCustomAnchorRemove: r.useCallback(() => f2(false), []),
        modal: s2,
        children: n2
      })
    });
  }, "Popover"), R = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...o2 } = e2, a2 = w("PopoverAnchor", n2), i2 = A(n2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
      return r.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, _.jsx)(d.Mz, { ...i2, ...o2, ref: t2 });
    }, "PopoverAnchor")
  ), N = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, i2 = w("PopoverTrigger", n2), s2 = A(n2), l2 = (0, a.s)(t2, i2.triggerRef), u2 = (0, _.jsx)(h.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i2.open,
        "aria-controls": i2.open ? i2.contentId : void 0,
        "data-state": Y(i2.open),
        ...r2,
        ref: l2,
        onClick: (0, o.mK)(e2.onClick, i2.onOpenToggle)
      });
      return i2.hasCustomAnchor ? u2 : (0, _.jsx)(d.Mz, { asChild: true, ...s2, children: u2 });
    }, "PopoverTrigger")
  ), E = "PopoverPortal", [T, F] = C(E, { forceMount: void 0 }), M = x((e2) => {
    let { __scopePopover: t2, forceMount: n2, children: r2, container: o2 } = e2, a2 = w(E, t2);
    return (0, _.jsx)(T, {
      scope: t2,
      forceMount: n2,
      children: (0, _.jsx)(f.C, {
        present: n2 || a2.open,
        children: (0, _.jsx)(p.Z, { asChild: true, container: o2, children: r2 })
      })
    });
  }, "PopoverPortal"), L = "PopoverContent", D = r.forwardRef(
    x(function(e2, t2) {
      let n2 = F(L, e2.__scopePopover), { forceMount: r2 = n2.forceMount, ...o2 } = e2, a2 = w(L, e2.__scopePopover);
      return (0, _.jsx)(f.C, {
        present: r2 || a2.open,
        children: a2.modal ? (0, _.jsx)(I, { ...o2, ref: t2 }) : (0, _.jsx)(z, { ...o2, ref: t2 })
      });
    }, "PopoverContent")
  ), S = (0, b.TL)("PopoverContent.RemoveScroll"), I = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), i2 = r.useRef(null), s2 = (0, a.s)(t2, i2), l2 = r.useRef(false);
      return r.useEffect(() => {
        let e3 = i2.current;
        if (e3) return (0, v.Eq)(e3);
      }, []), (0, _.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        children: (0, _.jsx)(B, {
          ...e2,
          ref: s2,
          trapFocus: n2.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
            e3.preventDefault(), l2.current || n2.triggerRef.current?.focus();
          }),
          onPointerDownOutside: (0, o.mK)(
            e2.onPointerDownOutside,
            (e3) => {
              let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
              l2.current = 2 === t3.button || n3;
            },
            { checkForDefaultPrevented: false }
          ),
          onFocusOutside: (0, o.mK)(
            e2.onFocusOutside,
            (e3) => e3.preventDefault(),
            { checkForDefaultPrevented: false }
          )
        })
      });
    }, "PopoverContentModal")
  ), z = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), o2 = r.useRef(false), a2 = r.useRef(false);
      return (0, _.jsx)(B, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, a2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (a2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && a2.current && t3.preventDefault();
        }
      });
    }, "PopoverContentNonModal")
  ), B = r.forwardRef(
    x(function(e2, t2) {
      let {
        __scopePopover: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: a2,
        disableOutsidePointerEvents: i2,
        onEscapeKeyDown: c2,
        onPointerDownOutside: p2,
        onFocusOutside: f2,
        onInteractOutside: h2,
        ...b2
      } = e2, y2 = w(L, n2), v2 = A(n2);
      return (0, l.Oh)(), (0, _.jsx)(u.n, {
        asChild: true,
        loop: true,
        trapped: r2,
        onMountAutoFocus: o2,
        onUnmountAutoFocus: a2,
        children: (0, _.jsx)(s.qW, {
          asChild: true,
          disableOutsidePointerEvents: i2,
          onInteractOutside: h2,
          onEscapeKeyDown: c2,
          onPointerDownOutside: p2,
          onFocusOutside: f2,
          onDismiss: () => y2.onOpenChange(false),
          deferPointerDownOutside: true,
          children: (0, _.jsx)(d.UC, {
            "data-state": Y(y2.open),
            role: "dialog",
            id: y2.contentId,
            ...v2,
            ...b2,
            ref: t2,
            style: {
              ...b2.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        })
      });
    }, "PopoverContentImpl")
  ), W = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, a2 = w("PopoverClose", n2);
      return (0, _.jsx)(h.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => a2.onOpenChange(false))
      });
    }, "PopoverClose")
  ), G = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, o2 = A(n2);
      return (0, _.jsx)(d.i3, { ...o2, ...r2, ref: t2 });
    }, "PopoverArrow")
  );
  function Y(e2) {
    return e2 ? "open" : "closed";
  }
  x(Y, "getState");
  var K = k, Z = R, $ = N, q = M, H = D, Q = W, U = G;
}

__m(__module,__exports,__require);
});
A.reg(50981, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "shield-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(57465, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "users",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(57990, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "wrench",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
          key: "1ngwbx"
        }
      ]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(60466, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { r: () => f });
  var r = n(95155), a = n(12115), i = n(57793), o = n(18310), s = n(25354), l = n(80642), u = n(12363), d = n(7770), c = n(9146), m = n.n(c);
  function p({ text: e2 }) {
    let t2 = (0, o.I)(), n2 = (0, a.useRef)(null), i2 = (0, a.useRef)(null), [u2, c2] = (0, a.useState)({ width: "auto", animate: false });
    return (0, a.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([t4]) => {
        if (!t4) return;
        let n3 = e3.textContent, r2 = null !== i2.current && i2.current !== n3;
        i2.current = n3, c2({
          width: Math.ceil(
            t4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth
          ),
          animate: r2
        });
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsxs)(s.PY1.span, {
      className: m().label,
      initial: false,
      animate: { width: u2.width },
      transition: u2.animate && !t2 ? d.T.spring.morph : { duration: 0 },
      children: [
        (0, r.jsx)("span", {
          ref: n2,
          className: m().labelMeasure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, r.jsx)(l.N, {
          mode: "popLayout",
          initial: false,
          children: (0, r.jsx)(
            s.PY1.span,
            {
              className: m().labelText,
              initial: !t2 && {
                opacity: 0,
                y: "0.3em",
                filter: `blur(${d.T.blur.soft}px)`
              },
              animate: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                opacity: 0,
                y: "-0.3em",
                filter: `blur(${d.T.blur.subtle}px)`,
                transition: {
                  duration: d.T.duration.fast,
                  ease: [...d.T.ease.standard]
                }
              },
              transition: {
                duration: d.T.duration.standard,
                ease: [...d.T.ease.enter]
              },
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function f({ label: e2, items: t2, icon: n2 }) {
    let l2 = (0, o.I)(), [c2, h] = (0, a.useState)(null), _ = (0, a.useRef)(false), x = (0, a.useRef)(0);
    return (0, a.useEffect)(() => () => window.clearTimeout(x.current), []), (0, r.jsxs)(i.bL, {
      onOpenChange: (e3) => {
        e3 && (window.clearTimeout(x.current), h(null));
      },
      children: [
        (0, r.jsxs)(i.l9, {
          className: m().trigger,
          type: "button",
          children: [
            n2 && (0, r.jsx)("span", {
              className: m().triggerIcon,
              "aria-hidden": "true",
              children: n2
            }),
            (0, r.jsx)(p, { text: e2 }),
            (0, r.jsx)(u.A, {
              className: m().chevron,
              size: 15,
              strokeWidth: 1.8,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, r.jsx)(i.ZL, {
          children: (0, r.jsxs)(i.UC, {
            className: m().menu,
            sideOffset: 6,
            align: "end",
            collisionPadding: 12,
            loop: true,
            onFocus: function(e3) {
              let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitem"]') : null;
              if (window.clearTimeout(x.current), !t3) {
                x.current = window.setTimeout(
                  () => h(null),
                  70 * !!_.current
                );
                return;
              }
              let n3 = {
                top: t3.offsetTop,
                height: t3.offsetHeight,
                danger: "danger" === t3.dataset.tone
              }, r2 = _.current;
              h((e4) => ({ ...n3, glide: r2 && null !== e4 }));
            },
            onPointerMoveCapture: () => {
              _.current = true;
            },
            onKeyDownCapture: () => {
              _.current = false;
            },
            children: [
              (0, r.jsx)(s.PY1.span, {
                className: m().highlight,
                "data-tone": c2?.danger ? "danger" : void 0,
                "aria-hidden": "true",
                initial: false,
                animate: c2 ? { y: c2.top, height: c2.height, opacity: 1 } : { opacity: 0 },
                transition: {
                  default: c2?.glide && !l2 ? d.T.spring.snappy : { duration: 0 },
                  opacity: { duration: 0.08 * !l2 }
                }
              }),
              t2.map(
                (e3, t3) => (0, r.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      e3.separatorBefore && (0, r.jsx)(i.wv, { className: m().separator }),
                      (0, r.jsxs)(i.q7, {
                        className: [
                          m().item,
                          e3.destructive ? m().destructive : ""
                        ].filter(Boolean).join(" "),
                        "data-tone": e3.destructive ? "danger" : void 0,
                        style: { "--i": t3 },
                        disabled: e3.disabled,
                        onSelect: e3.onSelect,
                        children: [
                          e3.icon && (0, r.jsx)("span", {
                            className: m().icon,
                            "aria-hidden": "true",
                            children: e3.icon
                          }),
                          e3.label
                        ]
                      })
                    ]
                  },
                  e3.label
                )
              )
            ]
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(68394, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var i = a(51811);
  let n = {
    name: "check-check",
    size: 24,
    node: [
      ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
      ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(69203, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var s = a(51811);
  let n = {
    name: "shield-alert",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "M12 8v4", key: "1got3b" }],
      ["path", { d: "M12 16h.01", key: "1drbdi" }]
    ]
  };
  n.node;
  let i = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(71363, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var s = a(51811);
  let i = {
    name: "user",
    size: 24,
    node: [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
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
A.regCss(76704, ".agent-approvals_root__XFMLH{--mono:ui-monospace,\"SF Mono\",Menlo,monospace;--hover:color-mix(in oklab,var(--foreground) 4.5%,transparent);--pad:20px;position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:640px;min-width:0;margin-inline:auto;border:1px solid var(--border);border-radius:24px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);container:approvals/inline-size}.agent-approvals_root__XFMLH *,.agent-approvals_root__XFMLH :after,.agent-approvals_root__XFMLH :before{box-sizing:border-box}.agent-approvals_srOnly__4xeO0{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.agent-approvals_mono__ciFW8{font-family:var(--mono);font-size:.8125rem;letter-spacing:0}.agent-approvals_dot__svP__{margin-inline:5px;color:var(--text-muted)}.agent-approvals_count__tAMc_>span:first-child,.agent-approvals_logToggle__9ePFK>span:last-child,.agent-approvals_rulesLabel__1P9Dg>span:last-child{font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;color:inherit}.agent-approvals_swap__5fcpA{position:relative;display:inline-grid}.agent-approvals_swapItem__aMqCN{display:inline-flex;grid-area:1/1;align-items:center;white-space:nowrap}.agent-approvals_autoHeight__28CSs{margin:-4px;overflow:hidden}.agent-approvals_autoHeightInner__W5QVj{position:relative;padding:4px}.agent-approvals_mark__9zD1X{flex:none;display:block;color:var(--foreground)}.agent-approvals_mark__9zD1X[data-brand=claude]{color:#d97757}.agent-approvals_mark__9zD1X[data-brand=gmail]{color:#ea4335}.agent-approvals_mark__9zD1X[data-brand=postgresql]{color:#4169e1}.agent-approvals_mark__9zD1X[data-brand=linear]{color:#5e6ad2}.agent-approvals_mark__9zD1X[data-brand=stripe]{color:#635bff}:root[data-theme=dark] .agent-approvals_mark__9zD1X[data-brand=postgresql]{color:#7d9cf0}:root[data-theme=dark] .agent-approvals_mark__9zD1X[data-brand=linear]{color:#8f98e6}:root[data-theme=dark] .agent-approvals_mark__9zD1X[data-brand=stripe]{color:#8f89ff}.agent-approvals_header__e_ybi{display:flex;align-items:center;gap:10px;min-height:60px;padding:12px 12px 12px var(--pad)}.agent-approvals_title__I9d5S{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}.agent-approvals_count__tAMc_{display:inline-flex;align-items:baseline;gap:4px;margin-right:auto;color:var(--text-muted);font-variant-numeric:tabular-nums;white-space:nowrap}.agent-approvals_rulesButton__J6nO8{--focus-outline-offset:-2px;position:relative;display:inline-flex;flex:none;align-items:center;height:34px;padding:0 12px;overflow:hidden;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-approvals_rulesButton__J6nO8:hover{background:var(--hover);color:var(--foreground)}}.agent-approvals_rulesButton__J6nO8[data-state=open]{background:var(--surface-muted);color:var(--foreground)}.agent-approvals_rulesLabel__1P9Dg{position:relative;display:inline-flex;align-items:baseline;font-variant-numeric:tabular-nums}.agent-approvals_rulesFlash__skevn{position:absolute;inset:0;border-radius:inherit;background:var(--accent-subtle);animation:agent-approvals_rules-flash__ytgSm .9s var(--ease-standard) both;pointer-events:none}.agent-approvals_rulesFlash__skevn[data-reduced]{animation-duration:.4s}@keyframes agent-approvals_rules-flash__ytgSm{0%{opacity:0}18%{opacity:1}to{opacity:0}}.agent-approvals_rulesPanel__ddxtX{width:min(300px,calc(100vw - 24px));padding:12px 8px 8px}.agent-approvals_panelTitle__ILxW_{margin:0;padding:0 10px 6px;color:var(--text-muted);font-size:var(--text-xs)}.agent-approvals_panelEmpty__1lTnC{margin:0;padding:4px 10px 8px;color:var(--text-secondary);font-size:var(--text-sm);text-wrap:pretty}.agent-approvals_ruleList__HvNRZ{display:grid;margin:0;padding:0;list-style:none}.agent-approvals_ruleItem__QlYYk{overflow:hidden}.agent-approvals_rule__Bs9_k{display:grid;grid-template-columns:16px minmax(0,1fr) auto;align-items:center;gap:10px;padding:7px 4px 7px 10px}.agent-approvals_ruleMark__kkj6l{width:15px;height:15px}.agent-approvals_ruleText__JOVRC{display:grid;min-width:0}.agent-approvals_ruleAction__SPM9O{overflow:hidden;color:var(--foreground);font-size:var(--text-sm);text-overflow:ellipsis;white-space:nowrap}.agent-approvals_ruleScope__LbHSF{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}.agent-approvals_iconButton__TP_Ff{--focus-outline-offset:-2px;display:grid;flex:none;place-items:center;width:30px;height:30px;padding:0;border:0;border-radius:10px;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-approvals_iconButton__TP_Ff:hover{background:var(--hover);color:var(--foreground)}}.agent-approvals_focusArea__aXYyI{position:relative;padding:0 var(--pad) 18px;outline:none}.agent-approvals_focusStack__2bfNI{position:relative}.agent-approvals_focusSlide__p6HpR{width:100%}.agent-approvals_focus__5cOfq{display:grid;min-width:0}.agent-approvals_focusMeta__mzqjs{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.agent-approvals_agent__UnFvj{display:flex;align-items:center;gap:7px;min-width:0;color:var(--text-muted);font-size:var(--text-sm);white-space:nowrap}.agent-approvals_agentMark__E6UHC{width:15px;height:15px}.agent-approvals_agentName__JVGHA{flex:none;color:var(--foreground)}.agent-approvals_agentModel__LqG9G,.agent-approvals_agentTime__fhZ8o{min-width:0;overflow:hidden;text-overflow:ellipsis}.agent-approvals_agentTime__fhZ8o{font-variant-numeric:tabular-nums}.agent-approvals_agentTime__fhZ8o:before{content:\"·\";margin-right:7px}.agent-approvals_focusTitle__3LPXT{display:flex;align-items:center;gap:10px;min-width:0;margin:14px 0 0;color:var(--foreground);font-size:var(--text-xl);font-weight:500;line-height:1.25;letter-spacing:-.015em}.agent-approvals_titleMark__K0YPK{width:20px;height:20px}.agent-approvals_titleText___H_Zv{min-width:0;text-wrap:balance}.agent-approvals_code__9JJVx{font-family:var(--mono);font-size:.92em;letter-spacing:-.01em}.agent-approvals_reason__6LlMm{margin:6px 0 0;color:var(--text-secondary);text-wrap:pretty}.agent-approvals_risk__x_WHK{display:inline-flex;flex:none;align-items:center;gap:5px;color:var(--text-secondary);font-size:var(--text-sm);white-space:nowrap}.agent-approvals_risk__x_WHK>svg{flex:none}.agent-approvals_risk__x_WHK[data-risk=low]>svg{color:var(--success)}.agent-approvals_risk__x_WHK[data-risk=medium]>svg{color:var(--warning)}.agent-approvals_risk__x_WHK[data-risk=high]>svg{color:var(--danger)}.agent-approvals_args__y9Gqd{display:grid;margin:16px 0 0;padding:6px;border-radius:16px;background:var(--surface-muted)}.agent-approvals_argRow__141wI{position:relative;display:grid;grid-template-columns:92px minmax(0,1fr) 28px;align-items:start;column-gap:4px}.agent-approvals_argKey__fIi8t{display:flex;align-items:center;min-height:32px;margin:0;padding-left:8px;color:var(--text-muted)}.agent-approvals_argKey__fIi8t label{cursor:default}.agent-approvals_argCell___Fqda{grid-column:2;min-width:0;margin:0}.agent-approvals_argValue__RvqHg{display:block;width:100%;min-height:32px;margin:0;padding:5px 8px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:20px;text-align:left;overflow-wrap:anywhere;white-space:pre-wrap}.agent-approvals_argValue__RvqHg[data-static]{color:var(--text-secondary)}.agent-approvals_argValue__RvqHg.agent-approvals_mono__ciFW8{font-family:var(--mono);font-size:.8125rem;letter-spacing:0}.agent-approvals_valueButton__TdawR{--focus-outline-offset:-1px;display:flex;align-items:flex-start;gap:8px;cursor:text;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}.agent-approvals_valueText__xkXUd{flex:1 1 auto;min-width:0}.agent-approvals_editIcon__JHw7P{flex:none;margin-top:4px;color:var(--text-muted);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}.agent-approvals_valueButton__TdawR:focus-visible .agent-approvals_editIcon__JHw7P{opacity:1}@media (hover:hover) and (pointer:fine){.agent-approvals_valueButton__TdawR:hover{border-color:var(--border);background:var(--surface)}}@media (hover:hover) and (pointer:fine){.agent-approvals_valueButton__TdawR:hover .agent-approvals_editIcon__JHw7P{opacity:1}}.agent-approvals_field__Sq5gc{border-color:var(--border-strong);background:var(--surface);outline:none;resize:none}.agent-approvals_field__Sq5gc:focus{border-color:color-mix(in oklab,var(--accent) 55%,var(--border-strong))}textarea.agent-approvals_field__Sq5gc{field-sizing:content;min-height:32px}.agent-approvals_argRow__141wI[data-edited] .agent-approvals_argKey__fIi8t:after{content:\"\";width:5px;height:5px;margin-left:6px;border-radius:var(--radius-pill);background:var(--accent)}.agent-approvals_restore__b4e6u{--focus-outline-offset:-2px;grid-column:3;display:grid;place-items:center;width:28px;height:32px;padding:0;border:0;border-radius:9px;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-approvals_restore__b4e6u:hover{background:var(--hover);color:var(--foreground)}}.agent-approvals_decisionSlot__lD8sC{margin-top:14px}.agent-approvals_decisionStack__0W8g7{position:relative}.agent-approvals_decision__tc6o6{display:flex;align-items:center;width:100%;min-height:var(--control-height-sm)}.agent-approvals_actions__3BQGK{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;width:100%}.agent-approvals_actionsEnd__zmuL7{display:flex;align-items:center;justify-content:flex-end;gap:6px;margin-left:auto}.agent-approvals_allow__pNMi0{display:inline-flex}.agent-approvals_allow__pNMi0>button{border-color:transparent;background:transparent;color:var(--text-secondary);font-weight:400}@media (hover:hover) and (pointer:fine){.agent-approvals_allow__pNMi0>button:hover{border-color:transparent;background:var(--hover);color:var(--foreground);box-shadow:none}}.agent-approvals_allow__pNMi0>button:active,.agent-approvals_allow__pNMi0>button[data-state=open]{border-color:transparent;background:var(--surface-muted);color:var(--foreground)}.agent-approvals_root__XFMLH .agent-approvals_deny__fOlJa{color:var(--text-secondary)}.agent-approvals_root__XFMLH .agent-approvals_approve__kCXz4{gap:10px;padding-right:8px;border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.agent-approvals_approveKbd__z0D_8 kbd{--kbd-face:transparent;border-color:color-mix(in oklab,var(--accent-foreground) 30%,transparent);background:color-mix(in oklab,var(--accent-foreground) 12%,transparent);box-shadow:none;color:var(--accent-foreground)}.agent-approvals_line__xzUzG{display:flex;align-items:flex-start;gap:8px;min-height:var(--control-height-sm);margin:0;padding-block:8px;color:var(--foreground);line-height:20px}.agent-approvals_line__xzUzG>svg{margin-top:2px}.agent-approvals_lineNote__BXIBA{color:var(--text-muted)}.agent-approvals_lineNote__BXIBA:before{content:\"·\";margin-inline:8px}.agent-approvals_lineIcon__48gdP{flex:none}.agent-approvals_lineIcon__48gdP[data-tone=success]{color:var(--success)}.agent-approvals_lineIcon__48gdP[data-tone=danger]{color:var(--danger)}.agent-approvals_lineIcon__48gdP[data-tone=accent]{color:var(--accent)}.agent-approvals_lineIcon__48gdP[data-tone=muted]{color:var(--text-muted)}.agent-approvals_errorRow__6Rx2h{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;width:100%}.agent-approvals_errorText__zDRWK{display:flex;flex:1 1 240px;align-items:flex-start;gap:8px;margin:0;color:var(--foreground);text-wrap:pretty}.agent-approvals_errorText__zDRWK>svg{margin-top:2px}.agent-approvals_empty__M4UIS{display:grid;justify-items:center;gap:4px;padding:28px 16px 16px;text-align:center}.agent-approvals_emptyIcon__32KML{margin-bottom:6px;color:var(--success)}.agent-approvals_emptyTitle__eVyvH{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500}.agent-approvals_emptyText__iXDNF{max-width:34ch;margin:0 0 12px;color:var(--text-secondary);text-wrap:pretty}.agent-approvals_queue__QDrB4{display:grid;margin:0;padding:0 8px;list-style:none}.agent-approvals_queueItem__vjzfs{overflow:hidden}.agent-approvals_row__7b0kh{--focus-outline-offset:-2px;display:grid;grid-template-columns:auto minmax(0,1fr) 128px;align-items:center;gap:12px;width:100%;min-height:48px;margin:0;padding:0 12px;border:0;border-top:1px solid var(--border-subtle);border-radius:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-approvals_row__7b0kh:not([data-auto]):hover{border-radius:12px;border-top-color:transparent;background:var(--hover)}}@media (hover:hover) and (pointer:fine){.agent-approvals_queueItem__vjzfs:has(.agent-approvals_row__7b0kh:not([data-auto]):hover)+.agent-approvals_queueItem__vjzfs .agent-approvals_row__7b0kh{border-top-color:transparent}}.agent-approvals_row__7b0kh[data-auto]{cursor:default}.agent-approvals_rowMarks__IG3vI{display:inline-flex;align-items:center;gap:6px}.agent-approvals_rowMark__vVDzU{width:15px;height:15px}.agent-approvals_rowText__UZjGt{display:flex;align-items:baseline;gap:8px;min-width:0;white-space:nowrap}.agent-approvals_rowSummary___F5Z4{min-width:0;overflow:hidden;color:var(--foreground);text-overflow:ellipsis}.agent-approvals_rowAgent__48n_H{flex:none;color:var(--text-muted)}.agent-approvals_rowStatus__SLzwd{justify-items:end}.agent-approvals_rowStatus__SLzwd>.agent-approvals_swapItem__aMqCN{justify-content:flex-end}.agent-approvals_allowed__SeTsw{display:inline-flex;align-items:center;gap:5px;color:var(--text-secondary);white-space:nowrap}.agent-approvals_allowed__SeTsw>svg{flex:none;color:var(--accent)}.agent-approvals_footer__gMyXg{position:relative;display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:52px;margin-top:8px;padding:8px 16px 8px 10px}.agent-approvals_footer__gMyXg:before{content:\"\";position:absolute;inset:0 0 auto;height:1px;background:var(--border-subtle)}.agent-approvals_logToggle__9ePFK{--focus-outline-offset:-2px;display:inline-flex;align-items:baseline;height:34px;padding:0 12px 0 8px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);line-height:34px;font-variant-numeric:tabular-nums;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-approvals_logToggle__9ePFK:hover{background:var(--hover);color:var(--foreground)}}.agent-approvals_chevron__GqgVr{align-self:center;margin-right:4px;color:var(--text-muted);transition:transform var(--duration-standard) var(--ease-standard)}.agent-approvals_logToggle__9ePFK[aria-expanded=true] .agent-approvals_chevron__GqgVr{transform:rotate(90deg)}.agent-approvals_hints__LCvgk{display:flex;align-items:center;gap:14px;color:var(--text-muted);font-size:var(--text-xs)}.agent-approvals_hint__hbLhL{display:inline-flex;align-items:center;gap:4px;white-space:nowrap}.agent-approvals_hint__hbLhL>kbd:last-of-type{margin-right:2px}.agent-approvals_logWrap__5RQiY{overflow:hidden}.agent-approvals_log__46R1R{display:grid;max-height:288px;margin:0;padding:0 8px 10px;overflow-y:auto;list-style:none;overscroll-behavior:contain}.agent-approvals_logItem__Rpong{overflow:hidden}.agent-approvals_logRow__MzM99{display:grid;grid-template-columns:15px minmax(0,1fr) auto;align-items:start;gap:12px;padding:9px 12px}.agent-approvals_logMark__wMGEx{width:15px;height:15px;margin-top:3px}.agent-approvals_logText__sRQP_{display:grid;gap:1px;min-width:0}.agent-approvals_logSummary__4nIyw{overflow:hidden;color:var(--foreground);text-overflow:ellipsis;white-space:nowrap}.agent-approvals_logMeta__fOPxK{display:flex;flex-wrap:wrap;align-items:center;gap:2px 8px;color:var(--text-muted);font-size:var(--text-xs)}.agent-approvals_logOutcome__LM3wr{display:inline-flex;align-items:center;gap:4px;color:var(--text-secondary)}.agent-approvals_logOutcome__LM3wr>svg{flex:none}.agent-approvals_logOutcome__LM3wr[data-outcome=approved]>svg{color:var(--success)}.agent-approvals_logOutcome__LM3wr[data-outcome=denied]>svg{color:var(--text-muted)}.agent-approvals_logOutcome__LM3wr[data-outcome=allowed]>svg{color:var(--accent)}.agent-approvals_logTime__45JN1{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:20px}.agent-approvals_flight__pYjRN{position:absolute;top:0;left:0;z-index:5;pointer-events:none}.agent-approvals_chip__q2eqY{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 11px 0 9px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-raised);color:var(--foreground);font-size:var(--text-xs);font-weight:500;white-space:nowrap;transform:translate(-50%,-50%)}.agent-approvals_chipMark__mqTus{width:13px;height:13px}.agent-approvals_wideOnly__jbN6e{display:inline}@media (prefers-reduced-motion:reduce){.agent-approvals_chevron__GqgVr,.agent-approvals_editIcon__JHw7P,.agent-approvals_iconButton__TP_Ff,.agent-approvals_logToggle__9ePFK,.agent-approvals_restore__b4e6u,.agent-approvals_row__7b0kh,.agent-approvals_rulesButton__J6nO8,.agent-approvals_valueButton__TdawR{transition:none}}", {"root":"agent-approvals_root__XFMLH","srOnly":"agent-approvals_srOnly__4xeO0","mono":"agent-approvals_mono__ciFW8","dot":"agent-approvals_dot__svP__","count":"agent-approvals_count__tAMc_","rulesLabel":"agent-approvals_rulesLabel__1P9Dg","logToggle":"agent-approvals_logToggle__9ePFK","swap":"agent-approvals_swap__5fcpA","swapItem":"agent-approvals_swapItem__aMqCN","autoHeight":"agent-approvals_autoHeight__28CSs","autoHeightInner":"agent-approvals_autoHeightInner__W5QVj","mark":"agent-approvals_mark__9zD1X","header":"agent-approvals_header__e_ybi","title":"agent-approvals_title__I9d5S","rulesButton":"agent-approvals_rulesButton__J6nO8","rulesFlash":"agent-approvals_rulesFlash__skevn","rules-flash":"agent-approvals_rules-flash__ytgSm","rulesPanel":"agent-approvals_rulesPanel__ddxtX","panelTitle":"agent-approvals_panelTitle__ILxW_","panelEmpty":"agent-approvals_panelEmpty__1lTnC","ruleList":"agent-approvals_ruleList__HvNRZ","ruleItem":"agent-approvals_ruleItem__QlYYk","rule":"agent-approvals_rule__Bs9_k","ruleMark":"agent-approvals_ruleMark__kkj6l","ruleText":"agent-approvals_ruleText__JOVRC","ruleAction":"agent-approvals_ruleAction__SPM9O","ruleScope":"agent-approvals_ruleScope__LbHSF","iconButton":"agent-approvals_iconButton__TP_Ff","focusArea":"agent-approvals_focusArea__aXYyI","focusStack":"agent-approvals_focusStack__2bfNI","focusSlide":"agent-approvals_focusSlide__p6HpR","focus":"agent-approvals_focus__5cOfq","focusMeta":"agent-approvals_focusMeta__mzqjs","agent":"agent-approvals_agent__UnFvj","agentMark":"agent-approvals_agentMark__E6UHC","agentName":"agent-approvals_agentName__JVGHA","agentModel":"agent-approvals_agentModel__LqG9G","agentTime":"agent-approvals_agentTime__fhZ8o","focusTitle":"agent-approvals_focusTitle__3LPXT","titleMark":"agent-approvals_titleMark__K0YPK","titleText":"agent-approvals_titleText___H_Zv","code":"agent-approvals_code__9JJVx","reason":"agent-approvals_reason__6LlMm","risk":"agent-approvals_risk__x_WHK","args":"agent-approvals_args__y9Gqd","argRow":"agent-approvals_argRow__141wI","argKey":"agent-approvals_argKey__fIi8t","argCell":"agent-approvals_argCell___Fqda","argValue":"agent-approvals_argValue__RvqHg","valueButton":"agent-approvals_valueButton__TdawR","valueText":"agent-approvals_valueText__xkXUd","editIcon":"agent-approvals_editIcon__JHw7P","field":"agent-approvals_field__Sq5gc","restore":"agent-approvals_restore__b4e6u","decisionSlot":"agent-approvals_decisionSlot__lD8sC","decisionStack":"agent-approvals_decisionStack__0W8g7","decision":"agent-approvals_decision__tc6o6","actions":"agent-approvals_actions__3BQGK","actionsEnd":"agent-approvals_actionsEnd__zmuL7","allow":"agent-approvals_allow__pNMi0","deny":"agent-approvals_deny__fOlJa","approve":"agent-approvals_approve__kCXz4","approveKbd":"agent-approvals_approveKbd__z0D_8","line":"agent-approvals_line__xzUzG","lineNote":"agent-approvals_lineNote__BXIBA","lineIcon":"agent-approvals_lineIcon__48gdP","errorRow":"agent-approvals_errorRow__6Rx2h","errorText":"agent-approvals_errorText__zDRWK","empty":"agent-approvals_empty__M4UIS","emptyIcon":"agent-approvals_emptyIcon__32KML","emptyTitle":"agent-approvals_emptyTitle__eVyvH","emptyText":"agent-approvals_emptyText__iXDNF","queue":"agent-approvals_queue__QDrB4","queueItem":"agent-approvals_queueItem__vjzfs","row":"agent-approvals_row__7b0kh","rowMarks":"agent-approvals_rowMarks__IG3vI","rowMark":"agent-approvals_rowMark__vVDzU","rowText":"agent-approvals_rowText__UZjGt","rowSummary":"agent-approvals_rowSummary___F5Z4","rowAgent":"agent-approvals_rowAgent__48n_H","rowStatus":"agent-approvals_rowStatus__SLzwd","allowed":"agent-approvals_allowed__SeTsw","footer":"agent-approvals_footer__gMyXg","chevron":"agent-approvals_chevron__GqgVr","hints":"agent-approvals_hints__LCvgk","hint":"agent-approvals_hint__hbLhL","logWrap":"agent-approvals_logWrap__5RQiY","log":"agent-approvals_log__46R1R","logItem":"agent-approvals_logItem__Rpong","logRow":"agent-approvals_logRow__MzM99","logMark":"agent-approvals_logMark__wMGEx","logText":"agent-approvals_logText__sRQP_","logSummary":"agent-approvals_logSummary__4nIyw","logMeta":"agent-approvals_logMeta__fOPxK","logOutcome":"agent-approvals_logOutcome__LM3wr","logTime":"agent-approvals_logTime__45JN1","flight":"agent-approvals_flight__pYjRN","chip":"agent-approvals_chip__q2eqY","chipMark":"agent-approvals_chipMark__mqTus","wideOnly":"agent-approvals_wideOnly__jbN6e","riskWord":"agent-approvals_riskWord__CkOYG"});
A.reg(78841, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let l = {
    name: "shield-x",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
      ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]
    ],
    aliases: ["shield-close"]
  };
  l.node;
  let n = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(83978, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { AM: () => l, Wv: () => u, hl: () => c, iN: () => d });
  var a = r(95155), n = r(40093), i = r(12115), s = r(25898), o = r.n(s);
  let l = n.bL, d = n.bm, u = (0, i.forwardRef)(function({ className: e2, ...t2 }, r2) {
    return (0, a.jsx)(n.l9, {
      ...t2,
      ref: r2,
      className: [o().anchor, e2].filter(Boolean).join(" ")
    });
  });
  u.displayName = "PopoverTrigger";
  let c = (0, i.forwardRef)(function({
    className: e2,
    align: t2 = "start",
    sideOffset: r2 = 6,
    collisionPadding: i2 = 10,
    ...s2
  }, l2) {
    return (0, a.jsx)(n.ZL, {
      children: (0, a.jsx)(n.UC, {
        ...s2,
        ref: l2,
        align: t2,
        sideOffset: r2,
        collisionPadding: i2,
        className: [o().content, e2].filter(Boolean).join(" ")
      })
    });
  });
  c.displayName = "PopoverContent";
}

__m(__module,__exports,__require);
});
A.reg(90710, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "bot",
    size: 24,
    node: [
      ["path", { d: "M12 8V4H8", key: "hb8ula" }],
      [
        "rect",
        { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }
      ],
      ["path", { d: "M2 14h2", key: "vft8re" }],
      ["path", { d: "M20 14h2", key: "4cs60a" }],
      ["path", { d: "M15 13v2", key: "1xurst" }],
      ["path", { d: "M9 13v2", key: "rq6x2g" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("agent-approvals", [12053,76704]);
A.item("agent-approvals", {entry:8344, export:"AgentApprovals", kind:"block", tier:"pro", unresolved:[]});
})();