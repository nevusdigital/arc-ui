/* agent-loop (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(8143, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "list-checks",
    size: 24,
    node: [
      ["path", { d: "M13 5h8", key: "a7qcls" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 19h8", key: "c3s6r1" }],
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
    ]
  };
  l.node;
  let h = (0, d.A)(l);
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
A.regCss(36614, ".demo{display:grid;width:100%;max-width:760px;margin-inline:auto}", {"demo":"demo"});
A.reg(47059, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let s = {
    name: "step-forward",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
          key: "1ystz2"
        }
      ],
      ["path", { d: "M3 4v16", key: "1ph11n" }]
    ]
  };
  s.node;
  let n = (0, r.A)(s);
}

__m(__module,__exports,__require);
});
A.reg(56601, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { AgentLoopDemo: () => ed, default: () => eu });
  var n = a(95155), l = a(12115), s = a(18310), r = a(80642), i = a(25354), o = a(28245), c = a(55809), d = a(92171), u = a(19707), p = a(57990), h = a(8143), x = a(92571), m = a(9005), _ = a(64577), g = a(64962), f = a(92298), y = a(35484), v = a(23723), j = a(79267), b = a(36483), k = a(36619), N = a(47059), w = a(7770), $ = a(51288), M = a(66558), L = a(52898), A = a(36690), T = a(85964);
  function E({ title: e2 = "GitHub", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      })
    });
  }
  function S({ title: e2 = "PostgreSQL", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
      })
    });
  }
  let R = (e2) => e2 ? { color: e2 } : void 0, C = {
    name: "Claude Opus 5.5",
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
      { "aria-hidden": true, style: R("#D97757") }
    )
  }, z = [
    {
      gather: {
        label: "Task from Maya",
        detail: "EU card declines at checkout",
        tokens: 1200,
        mark: (0, n.jsx)(T.A, { "aria-hidden": true, strokeWidth: 1.75 })
      },
      calls: [
        {
          tool: "GitHub",
          mark: (0, n.jsx)(E, { "aria-hidden": true }),
          action: "Read issue #312",
          result: "EU cards, since Oct 18"
        }
      ],
      verify: { passed: false, note: "No root cause yet" }
    },
    {
      gather: {
        label: "Issue #312",
        detail: "14 comments, opened Oct 18",
        tokens: 6400,
        mark: (0, n.jsx)(E, { "aria-hidden": true })
      },
      calls: [
        {
          tool: "PostgreSQL",
          mark: (0, n.jsx)(S, { "aria-hidden": true, style: R("#4169E1") }),
          action: "Run query",
          result: "Timed out after 30s",
          status: "error"
        },
        {
          tool: "PostgreSQL",
          mark: (0, n.jsx)(S, { "aria-hidden": true, style: R("#4169E1") }),
          action: "Narrow to 72 hours",
          result: "1,284 declines, all 3DS"
        }
      ],
      verify: { passed: true, note: "3DS times out at 5s" }
    },
    {
      gather: {
        label: "Query result",
        detail: "1,284 declined orders",
        tokens: 9800,
        mark: (0, n.jsx)(S, { "aria-hidden": true, style: R("#4169E1") })
      },
      calls: [
        {
          tool: "Linear",
          mark: (0, n.jsx)(
            function({ title: e2 = "Linear", ...t2 }) {
              return (0, n.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                role: "img",
                "aria-label": e2,
                ...t2,
                children: (0, n.jsx)("path", {
                  d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
                })
              });
            },
            { "aria-hidden": true, style: R("#5E6AD2") }
          ),
          action: "Update status",
          result: "PAY-118 now in progress"
        },
        {
          tool: "Slack",
          mark: (0, n.jsx)(
            function({ title: e2 = "Slack", ...t2 }) {
              return (0, n.jsxs)("svg", {
                viewBox: "0 0 24 24",
                role: "img",
                "aria-label": e2,
                ...t2,
                children: [
                  (0, n.jsx)("path", {
                    fill: "#E01E5A",
                    d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
                  }),
                  (0, n.jsx)("path", {
                    fill: "#36C5F0",
                    d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
                  }),
                  (0, n.jsx)("path", {
                    fill: "#2EB67D",
                    d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
                  }),
                  (0, n.jsx)("path", {
                    fill: "#ECB22E",
                    d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
                  })
                ]
              });
            },
            { "aria-hidden": true }
          ),
          action: "Post update",
          result: "Posted in #payments"
        }
      ],
      verify: { passed: true, note: "Ticket and team updated" }
    }
  ], P = (e2) => e2 * Math.PI / 180, F = (e2, t2, a2, n2) => ({
    x: e2 + a2 * Math.cos(P(n2)),
    y: t2 + a2 * Math.sin(P(n2))
  }), I = (e2) => `M ${e2.cx} ${e2.cy - e2.r} A ${e2.r} ${e2.r} 0 1 1 ${e2.cx} ${e2.cy + e2.r} A ${e2.r} ${e2.r} 0 1 1 ${e2.cx} ${e2.cy - e2.r}`, O = ["gather", "act", "verify"], D = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), B = (e2) => e2 < 0.5 ? 4 * e2 * e2 * e2 : 1 - (-2 * e2 + 2) ** 3 / 2;
  function U(e2, t2) {
    let a2 = {
      ready: t2 < e2.start,
      done: false,
      loop: 0,
      at: null,
      last: null,
      context: 0,
      call: null,
      verify: null,
      beat: "ready"
    };
    if (a2.ready) return a2;
    for (let n2 of e2.events) {
      if (n2.t > t2) break;
      switch (n2.kind) {
        case "arrive":
          a2.at = n2.station ?? null, a2.last = a2.at, "gather" === n2.station && (a2.loop = n2.loop);
          break;
        case "depart":
          a2.at = null;
          break;
        case "context":
          a2.context += 1, a2.beat = "gather";
          break;
        case "callStart":
          a2.call = { loop: n2.loop, index: n2.call ?? 0, resolved: false }, a2.beat = "call";
          break;
        case "callEnd":
          a2.call && (a2.call = { ...a2.call, resolved: true }), a2.beat = "result";
          break;
        case "verify":
          a2.verify = { loop: n2.loop }, a2.beat = "verify";
          break;
        case "done":
          a2.done = true, a2.at = null, a2.beat = "done";
      }
    }
    return a2;
  }
  let W = (e2) => [
    e2.ready,
    e2.done,
    e2.loop,
    e2.at,
    e2.last,
    e2.context,
    e2.call ? `${e2.call.loop}.${e2.call.index}.${e2.call.resolved}` : "-",
    e2.verify ? e2.verify.loop : "-",
    e2.beat
  ].join("|");
  var H = a(60892), V = a.n(H);
  let Y = { gather: "Gather context", act: "Take action", verify: "Verify" }, G = {
    gather: (0, n.jsx)(u.A, { "aria-hidden": true }),
    act: (0, n.jsx)(p.A, { "aria-hidden": true }),
    verify: (0, n.jsx)(h.A, { "aria-hidden": true })
  }, Z = [
    { value: "0.5", label: "0.5\xD7" },
    { value: "1", label: "1\xD7" },
    { value: "2", label: "2\xD7" }
  ], K = [...w.T.ease.standard], J = { type: "spring", visualDuration: 0.24, bounce: 0 }, Q = (...e2) => e2.filter(Boolean).join(" "), q = (e2, t2) => `${e2} ${t2}${1 === e2 ? "" : "s"}`, X = (e2) => e2 < 1e3 ? `${Math.round(e2)}` : `${(e2 / 1e3).toFixed(1)}K`, ee = () => () => {
  };
  function et({ id: e2, reduced: t2, className: a2, children: l2 }) {
    return (0, n.jsx)("span", {
      className: Q(V().swap, a2),
      children: (0, n.jsx)(r.N, {
        initial: false,
        children: (0, n.jsx)(
          i.PY1.span,
          {
            className: V().swapItem,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: 0.1 * !t2 } },
            transition: {
              duration: t2 ? 0 : w.T.duration.fast,
              delay: 0.05 * !t2,
              ease: K
            },
            children: l2
          },
          e2
        )
      })
    });
  }
  function ea({ value: e2, reduced: t2 }) {
    return (0, n.jsx)("span", {
      className: V().roll,
      style: { "--digits": String(e2).length },
      children: (0, n.jsx)(r.N, {
        initial: false,
        children: (0, n.jsx)(
          i.PY1.span,
          {
            className: V().rollItem,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.75em" },
            animate: { opacity: 1, y: "0em" },
            exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: "-0.75em",
              transition: { duration: 0.14, ease: K }
            },
            transition: { duration: 0.22 * !t2, ease: [...w.T.ease.enter] },
            children: e2
          },
          e2
        )
      })
    });
  }
  function en({ value: e2, reduced: t2 }) {
    let a2 = (0, o.d)(e2), s2 = (0, c.G)(a2, X);
    return (0, l.useEffect)(() => {
      if (t2) return void a2.jump(e2);
      let n2 = (0, d.i)(a2, e2, { duration: 0.5, ease: K });
      return () => n2.stop();
    }, [e2, t2, a2]), (0, n.jsx)(i.PY1.span, { className: V().tokenValue, children: s2 });
  }
  function el({ call: e2, resolved: t2, reduced: a2 }) {
    let l2 = "error" === e2.status, s2 = t2 ? l2 ? "error" : "success" : "running";
    return (0, n.jsxs)("div", {
      className: V().chip,
      "data-state": s2,
      children: [
        (0, n.jsxs)("span", {
          className: V().chipHead,
          children: [
            (0, n.jsx)("span", {
              className: V().chipMark,
              children: e2.mark ?? (0, n.jsx)(p.A, { "aria-hidden": true })
            }),
            (0, n.jsx)("span", {
              className: V().chipTitle,
              children: e2.action
            }),
            (0, n.jsx)(et, {
              id: s2,
              reduced: a2,
              className: V().chipIcon,
              children: "running" === s2 ? (0, n.jsx)(x.A, { "aria-hidden": true, className: V().spin }) : "error" === s2 ? (0, n.jsx)(m.A, { "aria-hidden": true }) : (0, n.jsx)(_.A, { "aria-hidden": true })
            })
          ]
        }),
        (0, n.jsx)(et, {
          id: s2,
          reduced: a2,
          className: V().chipBody,
          children: "running" === s2 ? (0, n.jsx)(L.n, { active: !a2, children: `Calling ${e2.tool}` }) : (0, n.jsxs)("span", {
            className: V().chipText,
            children: [
              (0, n.jsx)("span", {
                className: V().srOnly,
                children: l2 ? `${e2.tool} failed: ` : `${e2.tool} returned: `
              }),
              e2.result
            ]
          })
        })
      ]
    });
  }
  function es({ check: e2 }) {
    return (0, n.jsxs)("div", {
      className: V().chip,
      "data-state": e2.passed ? "passed" : "retry",
      children: [
        (0, n.jsxs)("span", {
          className: V().chipHead,
          children: [
            (0, n.jsx)("span", {
              className: V().chipMark,
              "data-tone": e2.passed ? "success" : "warning",
              children: e2.passed ? (0, n.jsx)(g.A, { "aria-hidden": true }) : (0, n.jsx)(f.A, { "aria-hidden": true })
            }),
            (0, n.jsx)("span", {
              className: V().chipTitle,
              children: e2.passed ? "Check passed" : "Retry"
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: V().chipBody,
          children: (0, n.jsx)("span", {
            className: V().chipText,
            children: e2.note
          })
        })
      ]
    });
  }
  function er({ item: e2, empty: t2, live: a2, reduced: l2, pinX: s2 }) {
    return (0, n.jsx)("div", {
      className: V().lane,
      "data-live": a2 || void 0,
      children: (0, n.jsx)(r.N, {
        initial: false,
        children: (0, n.jsx)(
          i.PY1.div,
          {
            className: V().pop,
            style: { transformOrigin: `${s2}px 0` },
            initial: l2 || !e2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, transition: { duration: 0.08 * !l2 } },
            transition: l2 ? { duration: 0 } : e2 ? { ...J, delay: 0.1 } : { duration: w.T.duration.fast },
            children: e2 ? e2.node : (0, n.jsx)("div", { className: V().laneEmpty, children: t2 })
          },
          e2?.id ?? "empty"
        )
      })
    });
  }
  function ei({
    iterations: e2 = z,
    task: t2 = "Find out why EU cards are declined at checkout, then update the team.",
    summary: a2,
    model: o2 = C,
    title: c2 = "Agent loop",
    stationLabels: d2,
    autoPlay: u2 = true,
    loop: p2 = false,
    speed: h2,
    defaultSpeed: m2 = 1,
    onSpeedChange: _2,
    controls: T2 = true,
    onStationChange: E2,
    onDone: S2,
    className: R2,
    style: H2
  }) {
    let eo2, ec2 = (eo2 = (0, l.useSyncExternalStore)(
      ee,
      () => true,
      () => false
    ), !!(0, s.I)() && eo2), ed2 = (0, l.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), eu2 = { ...Y, ...d2 }, ep = 0 === e2.length, eh = e2.map((e10) => Math.min(3, Math.max(1, e10.calls.length))), ex = eh.join(","), em = (0, l.useMemo)(() => {
      let e10, t3, a3, n2;
      return e10 = [], t3 = [], a3 = [], n2 = 0.2, eh.forEach((l2, s2) => {
        let r2 = 3 * s2;
        e10.push({ t: n2, kind: "arrive", loop: s2, station: "gather" }), e10.push({ t: n2 + 0.12, kind: "context", loop: s2 }), a3.push(n2 + 0.12 + 0.4), n2 += 0.85, e10.push({ t: n2, kind: "depart", loop: s2, station: "gather" }), t3.push({ t0: n2, t1: n2 + 0.7, u0: r2 }), n2 += 0.7, e10.push({ t: n2, kind: "arrive", loop: s2, station: "act" }), n2 += 0.1;
        for (let t4 = 0; t4 < Math.max(1, l2); t4++)
          t4 > 0 && (n2 += 0.4), e10.push({ t: n2, kind: "callStart", loop: s2, call: t4 }), n2 += 0.75, e10.push({ t: n2, kind: "callEnd", loop: s2, call: t4 }), a3.push(n2 + 0.25);
        n2 += 0.5, e10.push({ t: n2, kind: "depart", loop: s2, station: "act" }), t3.push({ t0: n2, t1: n2 + 0.5, u0: r2 + 1 }), n2 += 0.5, e10.push({ t: n2, kind: "arrive", loop: s2, station: "verify" }), e10.push({ t: n2 + 0.1, kind: "verify", loop: s2 }), a3.push(n2 + 0.1 + 0.4), n2 += 0.95, e10.push({ t: n2, kind: "depart", loop: s2, station: "verify" }), t3.push({ t0: n2, t1: n2 + 0.7, u0: r2 + 2 }), n2 += 0.7;
      }), e10.push({ t: n2, kind: "done", loop: Math.max(0, eh.length - 1) }), a3.push(n2 + 0.05), { events: e10, travels: t3, settles: a3, start: 0.2, end: n2 + 0.05 };
    }, [ex]), e_ = e2.reduce((e10, t3) => e10 + Math.min(3, t3.calls.length), 0), eg = !ep && !e2[e2.length - 1].verify.passed, ef = a2 ?? (e2 === z ? "EU declines come from 3DS checks timing out after 5 seconds. PAY-118 is in progress and the plan is posted in #payments." : eg ? `Stopped after ${q(e2.length, "loop")} without a passing check.` : `Finished after ${q(e2.length, "loop")} and ${q(e_, "tool call")}.`), [ey, ev] = (0, l.useState)(m2), ej = h2 ?? ey, eb = (0, l.useRef)(null), ek = (0, l.useRef)(null), eN = (0, l.useRef)(null), ew = (0, l.useRef)(null), e$ = (0, l.useRef)(null), eM = (0, l.useRef)(null), eL = (0, l.useRef)(null), [eA, eT] = (0, l.useState)(null), eE = (0, l.useRef)(null), eS = (0, l.useRef)(0), eR = (0, l.useRef)(null), [eC, ez] = (0, l.useState)("idle"), [eP, eF] = (0, l.useState)(() => U(em, 0)), [eI, eO] = (0, l.useState)(""), eD = (0, l.useRef)({ tl: em, reduced: ec2, speed: ej });
    (0, l.useLayoutEffect)(() => {
      eD.current = { tl: em, reduced: ec2, speed: ej };
    });
    let eB = (0, l.useRef)({ onStationChange: E2, onDone: S2 });
    (0, l.useLayoutEffect)(() => {
      eB.current = { onStationChange: E2, onDone: S2 };
    });
    let eU = (0, l.useCallback)(() => {
      let e10, t3, a3, n2 = eE.current, l2 = eN.current, s2 = ew.current, r2 = e$.current;
      if (!n2 || !l2 || !s2 || !r2) return;
      let { tl: i2, reduced: o3 } = eD.current, { u: c3, moving: d3 } = (function(e11, t4, a4) {
        let n3 = 0;
        for (let l3 of e11.travels) {
          if (t4 < l3.t0) break;
          if (t4 >= l3.t1) {
            n3 = l3.u0 + 1;
            continue;
          }
          if (a4) return { u: l3.u0, moving: 0 };
          let e12 = D((t4 - l3.t0) / (l3.t1 - l3.t0));
          return { u: l3.u0 + B(e12), moving: Math.sin(Math.PI * e12) };
        }
        return { u: n3, moving: 0 };
      })(i2, eS.current, o3), u3 = (e10 = [...n2.angles, 270], e10[a3 = Math.min(2, Math.floor(t3 = (c3 % 3 + 3) % 3))] + (e10[a3 + 1] - e10[a3]) * (t3 - a3)), p3 = F(n2.cx, n2.cy, n2.r, u3);
      l2.setAttribute(
        "transform",
        `translate(${p3.x.toFixed(2)} ${p3.y.toFixed(2)})`
      );
      let h3 = [...n2.angles, 270], x2 = Math.min(2, Math.floor((c3 % 3 + 3) % 3)), m3 = o3 ? 0 : d3 * Math.min(72, 0.7 * (h3[x2 + 1] - h3[x2]));
      if (m3 < 1) return void s2.setAttribute("d", "");
      let _3 = F(n2.cx, n2.cy, n2.r, u3 - m3);
      s2.setAttribute(
        "d",
        `M ${_3.x.toFixed(2)} ${_3.y.toFixed(2)} A ${n2.r} ${n2.r} 0 0 1 ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}`
      ), r2.setAttribute("x1", _3.x.toFixed(2)), r2.setAttribute("y1", _3.y.toFixed(2)), r2.setAttribute("x2", p3.x.toFixed(2)), r2.setAttribute("y2", p3.y.toFixed(2));
    }, []), eW = (0, l.useCallback)(() => {
      let e10 = U(eD.current.tl, eS.current);
      eF((t3) => W(t3) === W(e10) ? t3 : e10);
    }, []);
    (0, l.useLayoutEffect)(() => {
      let e10 = ek.current;
      if (!e10) return;
      let t3 = () => {
        var t4;
        let a4, n2, l2, s2, r2, i2, o3, c3, d3, u3, p3, h3 = Math.round(e10.getBoundingClientRect().width);
        if (!h3 || eE.current?.w === h3) return;
        let x2 = (n2 = (a4 = (t4 = h3) < 360) ? 13 : 14, s2 = 30, (r2 = (l2 = t4 / 2 - n2 - (a4 ? 64 : 106)) / Math.cos(P(30))) < 66 && (r2 = l2 / Math.cos(P(s2 = 50))), i2 = [-90, s2, 180 - s2], o3 = Math.round(t4 / 2), c3 = (a4 ? 30 : 34) + (r2 = Math.round(Math.min(94, Math.max(54, r2)))), d3 = i2.map((e11) => F(o3, c3, r2, e11)), u3 = [...i2, 270], p3 = i2.map((e11, t5) => {
          let a5 = (e11 + u3[t5 + 1]) / 2;
          return { ...F(o3, c3, r2, a5), heading: a5 + 90 };
        }), {
          w: t4,
          h: c3 + r2 + 6,
          cx: o3,
          cy: c3,
          r: r2,
          compact: a4,
          gap: n2,
          angles: i2,
          nodes: d3,
          arrows: p3
        });
        eE.current = x2, eT(x2);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e10), () => a3.disconnect();
    }, []), (0, l.useLayoutEffect)(() => {
      eU();
    }, [eA, ec2, eU]);
    let eH = (0, l.useRef)(true);
    (0, l.useEffect)(() => {
      if (eH.current) {
        eH.current = false;
        return;
      }
      eS.current = 0, eR.current = null, ez("idle"), eW(), eU();
    }, [em, eW, eU]), (0, l.useEffect)(() => {
      ec2 && !ep && 0 === eS.current && (eS.current = em.end, eW(), eU());
    }, [ec2, ep, em, eW, eU]);
    let eV = "idle" !== eC;
    (0, l.useEffect)(() => {
      if (!eV) return;
      let e10 = 0, t3 = performance.now(), a3 = (n2) => {
        let { tl: l2, speed: s2, reduced: r2 } = eD.current, i2 = Math.min(0.05, (n2 - t3) / 1e3);
        t3 = n2;
        let o3 = eR.current, c3 = eS.current, d3 = c3;
        if (eS.current = d3 = null !== o3 ? r2 ? o3 : Math.min(o3, d3 + i2 * Math.max(1, s2) * 2.5) : Math.min(l2.end, d3 + i2 * s2), eU(), eW(), c3 < l2.end && d3 >= l2.end && eB.current.onDone?.(), null !== o3 && d3 >= o3) {
          eR.current = null, ez("idle");
          return;
        }
        d3 >= l2.end ? ez("idle") : e10 = requestAnimationFrame(a3);
      };
      return e10 = requestAnimationFrame(a3), () => cancelAnimationFrame(e10);
    }, [eV, eU, eW]);
    let eY = (0, l.useCallback)(() => {
      ep || (eS.current >= em.end && (eS.current = 0, eW(), eU()), eR.current = null, ez("playing"));
    }, [ep, em, eW, eU]), eG = (0, l.useRef)(false);
    (0, l.useEffect)(() => {
      let e10 = eb.current;
      if (!u2 || ec2 || ep || eG.current || !e10 || "u" < typeof IntersectionObserver)
        return;
      let t3 = new IntersectionObserver(
        ([e11]) => {
          e11?.isIntersecting && !eG.current && (eG.current = true, t3.disconnect(), 0 === eS.current && eY());
        },
        { threshold: 0.35 }
      );
      return t3.observe(e10), () => t3.disconnect();
    }, [u2, ec2, ep, eY]), (0, l.useEffect)(() => {
      if (!p2 || !eP.done || "idle" !== eC || ec2) return;
      let e10 = window.setTimeout(
        () => {
          eS.current = 0, eW(), eU(), ez("playing");
        },
        4e3 / Math.max(0.5, ej)
      );
      return () => window.clearTimeout(e10);
    }, [p2, eP.done, eC, ec2, ej, eW, eU]), (0, l.useEffect)(() => {
      eP.at && eB.current.onStationChange?.(eP.at, eP.loop);
    }, [eP.at, eP.loop]);
    let eZ = (function(e10, t3, a3) {
      let n2 = t3[e10.loop];
      switch (e10.beat) {
        case "ready":
          return "";
        case "done":
          return a3;
        case "gather":
          return n2 ? `Loop ${e10.loop + 1}. Gathered context: ${n2.gather.label}` : "";
        case "call": {
          let a4 = e10.call && t3[e10.call.loop]?.calls[e10.call.index];
          return a4 ? `Calling ${a4.tool}: ${a4.action}` : "";
        }
        case "result": {
          let a4 = e10.call && t3[e10.call.loop]?.calls[e10.call.index];
          return a4 ? `${a4.tool} ${"error" === a4.status ? "failed" : "returned"}: ${a4.result}` : "";
        }
        case "verify": {
          let a4 = e10.verify && t3[e10.verify.loop]?.verify;
          if (!a4) return "";
          return a4.passed ? `Check passed: ${a4.note}` : `Retry: ${a4.note}. The loop runs again`;
        }
      }
    })(eP, e2, ef), eK = "playing" !== eC || eP.done ? eZ : eI;
    eK !== eI && eO(eK), (0, l.useEffect)(() => {
      eP.done && document.activeElement === eM.current && eL.current?.focus();
    }, [eP.done]);
    let eJ = "idle" !== eC, eQ = eP.done, eq = e2.slice(0, eP.context).reduce((e10, t3) => e10 + t3.gather.tokens, 0), eX = (e10) => {
      if (eP.ready) return "idle";
      if (eQ) return "visited";
      if (eP.at === e10) return "active";
      let t3 = eP.last ? O.indexOf(eP.last) : -1;
      return O.indexOf(e10) <= t3 ? "visited" : "idle";
    }, e0 = eP.call ? e2[eP.call.loop]?.calls[eP.call.index] : void 0, e1 = eP.verify ? e2[eP.verify.loop]?.verify : void 0, e22 = e0 && eP.call ? {
      id: `call-${eP.call.loop}-${eP.call.index}`,
      node: (0, n.jsx)(el, {
        call: e0,
        resolved: eP.call.resolved,
        reduced: ec2
      })
    } : null, e5 = e1 && eP.verify ? {
      id: `check-${eP.verify.loop}`,
      node: (0, n.jsx)(es, { check: e1 })
    } : null, e3 = eP.verify && (!eP.call || eP.verify.loop >= eP.call.loop) ? "verify" : "act", e4 = eQ ? eg ? {
      key: "stopped",
      icon: (0, n.jsx)(y.A, { "aria-hidden": true }),
      label: "Stopped",
      tone: "warning"
    } : {
      key: "done",
      icon: (0, n.jsx)(g.A, { "aria-hidden": true }),
      label: "Done",
      tone: "success"
    } : eJ ? {
      key: "running",
      icon: (0, n.jsx)(x.A, { "aria-hidden": true, className: V().spin }),
      label: "Running",
      tone: "accent"
    } : eP.ready ? {
      key: "ready",
      icon: (0, n.jsx)(v.A, { "aria-hidden": true }),
      label: "Ready",
      tone: "muted"
    } : {
      key: "paused",
      icon: (0, n.jsx)(j.A, { "aria-hidden": true }),
      label: "Paused",
      tone: "muted"
    }, e6 = "playing" === eC ? "Pause" : eQ ? "Play again" : "Play", e8 = ep ? (0, n.jsx)("span", { children: "No loops yet" }) : eQ ? (0, n.jsxs)("span", {
      className: V().centerEnd,
      "data-tone": eg ? "warning" : "success",
      children: [
        eg ? (0, n.jsx)(y.A, { "aria-hidden": true }) : (0, n.jsx)(g.A, { "aria-hidden": true }),
        (0, n.jsxs)("span", {
          children: [
            (0, n.jsx)("span", {
              className: V().centerLead,
              children: eg ? "Stopped after " : "Done in "
            }),
            q(e2.length, "loop")
          ]
        })
      ]
    }) : eP.ready ? (0, n.jsx)("span", { children: "Ready" }) : (0, n.jsxs)("span", {
      className: V().centerCount,
      children: [
        "Loop ",
        (0, n.jsx)(ea, { value: eP.loop + 1, reduced: ec2 })
      ]
    }), e7 = !!eA && !eA.compact, e9 = eA ? eA.nodes[1].x : 0, te = eA ? eA.nodes[2].x : 0, tt = eA ? e7 ? (eA.w - 12) / 2 : eA.w : 0, ta = eA ? e7 ? [
      { key: "verify", x: te, on: !!e5, live: "verify" === eP.at },
      { key: "act", x: e9, on: !!e22, live: "act" === eP.at }
    ] : [
      {
        key: e3,
        x: "act" === e3 ? e9 : te,
        on: !!("act" === e3 ? e22 : e5),
        live: "act" === eP.at || "verify" === eP.at
      }
    ] : [];
    return (0, n.jsxs)("div", {
      ref: eb,
      className: Q(V().root, R2),
      style: H2,
      role: "group",
      "aria-labelledby": `${ed2}-title`,
      "data-ready": eP.ready || void 0,
      "data-done": eQ && !eg || void 0,
      "data-ended": eQ || void 0,
      "data-measured": eA ? "" : void 0,
      "data-compact": eA?.compact || void 0,
      children: [
        (0, n.jsxs)("div", {
          className: V().header,
          children: [
            (0, n.jsx)("h3", {
              id: `${ed2}-title`,
              className: V().title,
              children: c2
            }),
            (0, n.jsx)("span", {
              className: V().status,
              "data-tone": e4.tone,
              children: (0, n.jsx)(et, {
                id: e4.key,
                reduced: ec2,
                className: V().statusSwap,
                children: (0, n.jsxs)("span", {
                  className: V().statusItem,
                  children: [e4.icon, e4.label]
                })
              })
            }),
            (0, n.jsx)("p", {
              className: V().caption,
              children: (0, n.jsx)(et, {
                id: eQ ? "summary" : "task",
                reduced: ec2,
                children: eQ ? ef : t2
              })
            }),
            (0, n.jsx)("p", {
              className: V().srOnly,
              role: "status",
              "aria-live": "polite",
              children: eI
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: V().stage,
          children: [
            (0, n.jsxs)("div", {
              className: V().loop,
              children: [
                (0, n.jsx)("div", {
                  ref: ek,
                  className: V().ring,
                  style: eA ? { height: eA.h } : void 0,
                  children: eA && (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("svg", {
                        className: V().svg,
                        width: eA.w,
                        height: eA.h + 14,
                        viewBox: `0 0 ${eA.w} ${eA.h + 14}`,
                        "aria-hidden": "true",
                        children: [
                          (0, n.jsx)("defs", {
                            children: (0, n.jsxs)("linearGradient", {
                              ref: e$,
                              id: `${ed2}-trail`,
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, n.jsx)("stop", {
                                  offset: "0",
                                  className: V().trailStop,
                                  stopOpacity: "0"
                                }),
                                (0, n.jsx)("stop", {
                                  offset: "1",
                                  className: V().trailStop,
                                  stopOpacity: "0.7"
                                })
                              ]
                            })
                          }),
                          ta.map((e10) => {
                            let t3 = "act" === e10.key ? eA.nodes[1] : eA.nodes[2], a3 = `M ${e10.x} ${t3.y + 9} V ${eA.h + 14}`;
                            return (0, n.jsxs)(
                              "g",
                              {
                                children: [
                                  (0, n.jsx)("path", {
                                    className: V().pin,
                                    d: a3
                                  }),
                                  (0, n.jsx)(r.N, {
                                    initial: false,
                                    children: e10.on && (0, n.jsx)(
                                      i.PY1.path,
                                      {
                                        className: V().pinLive,
                                        d: a3,
                                        "data-live": e10.live || void 0,
                                        initial: ec2 ? { pathLength: 1, opacity: 0 } : { pathLength: 0, opacity: 1 },
                                        animate: {
                                          pathLength: 1,
                                          opacity: 1
                                        },
                                        exit: {
                                          opacity: 0,
                                          transition: {
                                            duration: 0.1 * !ec2
                                          }
                                        },
                                        transition: {
                                          duration: 0.18 * !ec2,
                                          ease: K
                                        }
                                      },
                                      "act" === e10.key ? e22?.id : e5?.id
                                    )
                                  })
                                ]
                              },
                              e10.key
                            );
                          }),
                          (0, n.jsx)("path", {
                            className: V().track,
                            d: I(eA)
                          }),
                          eA.arrows.map(
                            (e10, t3) => (0, n.jsx)(
                              "path",
                              {
                                className: V().arrow,
                                d: "M -2.75 -4 L 1.75 0 L -2.75 4",
                                transform: `translate(${e10.x.toFixed(2)} ${e10.y.toFixed(2)}) rotate(${e10.heading})`
                              },
                              t3
                            )
                          ),
                          (0, n.jsx)("path", {
                            className: V().doneLine,
                            d: I(eA),
                            pathLength: 1
                          }),
                          (0, n.jsx)("path", {
                            ref: ew,
                            className: V().trail,
                            stroke: `url(#${ed2}-trail)`
                          }),
                          O.map((e10, t3) => {
                            let a3 = eA.nodes[t3], l2 = eX(e10);
                            return (0, n.jsxs)(
                              "g",
                              {
                                transform: `translate(${a3.x.toFixed(2)} ${a3.y.toFixed(2)})`,
                                children: [
                                  (0, n.jsx)("circle", {
                                    className: V().nodeRing,
                                    r: 10.5,
                                    "data-on": "active" === l2 || void 0
                                  }),
                                  (0, n.jsx)("circle", {
                                    className: V().node,
                                    r: 5,
                                    "data-state": l2
                                  })
                                ]
                              },
                              e10
                            );
                          }),
                          (0, n.jsx)("g", {
                            ref: eN,
                            className: V().headGroup,
                            children: (0, n.jsx)("circle", {
                              className: V().head,
                              r: 5
                            })
                          })
                        ]
                      }),
                      O.map((e10, t3) => {
                        let a3, l2, s2;
                        return a3 = eX(e10), l2 = eA.nodes[t3], s2 = "gather" === e10 ? {
                          left: l2.x,
                          top: l2.y - eA.gap,
                          maxWidth: eA.w
                        } : "act" === e10 ? {
                          left: l2.x + eA.gap,
                          top: l2.y,
                          maxWidth: eA.w - l2.x - eA.gap
                        } : {
                          left: l2.x - eA.gap,
                          top: l2.y,
                          maxWidth: l2.x - eA.gap
                        }, (0, n.jsxs)(
                          "span",
                          {
                            className: V().station,
                            "data-key": e10,
                            "data-state": a3,
                            style: s2,
                            children: [
                              G[e10],
                              (0, n.jsx)(L.n, {
                                active: "active" === a3 && eJ && !ec2,
                                className: V().stationText,
                                children: eu2[e10]
                              })
                            ]
                          },
                          e10
                        );
                      }),
                      (0, n.jsxs)("div", {
                        className: V().center,
                        style: {
                          left: eA.cx,
                          top: eA.cy,
                          maxWidth: 1.7 * eA.r
                        },
                        children: [
                          o2?.mark && (0, n.jsx)("span", {
                            className: V().centerMark,
                            children: o2.mark
                          }),
                          o2 && (0, n.jsx)("span", {
                            className: V().centerName,
                            title: o2.name,
                            children: o2.name
                          }),
                          (0, n.jsx)(et, {
                            id: ep ? "empty" : eQ ? "end" : eP.ready ? "ready" : "loop",
                            reduced: ec2,
                            className: V().centerLine,
                            children: e8
                          })
                        ]
                      })
                    ]
                  })
                }),
                (0, n.jsx)("div", {
                  className: V().lanes,
                  "data-split": e7 || void 0,
                  children: e7 ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(er, {
                        item: e5,
                        empty: "Checks land here",
                        live: "verify" === eP.at,
                        reduced: ec2,
                        pinX: te
                      }),
                      (0, n.jsx)(er, {
                        item: e22,
                        empty: "Tool calls land here",
                        live: "act" === eP.at,
                        reduced: ec2,
                        pinX: e9 - tt - 12
                      })
                    ]
                  }) : (0, n.jsx)(er, {
                    item: "verify" === e3 ? e5 : e22,
                    empty: "Tool calls and checks land here",
                    live: "act" === eP.at || "verify" === eP.at,
                    reduced: ec2,
                    pinX: "act" === e3 ? e9 : te
                  })
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: V().context,
              children: [
                (0, n.jsxs)("div", {
                  className: V().contextHead,
                  children: [
                    (0, n.jsx)("span", {
                      className: V().contextTitle,
                      children: "Context"
                    }),
                    (0, n.jsxs)("span", {
                      className: V().tokens,
                      children: [
                        (0, n.jsx)(en, { value: eq, reduced: ec2 }),
                        " tokens"
                      ]
                    })
                  ]
                }),
                (0, n.jsx)("ol", {
                  className: V().blocks,
                  style: {
                    "--slots": Math.max(1, e2.length),
                    "--rows": Math.max(1, Math.ceil(e2.length / 2))
                  },
                  "aria-label": "Context blocks",
                  children: (0, n.jsxs)(r.N, {
                    initial: false,
                    children: [
                      e2.slice(0, eP.context).map(
                        (e10, t3) => (0, n.jsxs)(
                          i.PY1.li,
                          {
                            className: V().block,
                            "data-fresh": t3 === eP.context - 1 && "gather" === eP.at || void 0,
                            initial: ec2 ? { opacity: 0 } : { opacity: 0, y: -6 },
                            animate: { opacity: 1, y: 0 },
                            exit: {
                              opacity: 0,
                              transition: { duration: 0.12 * !ec2 }
                            },
                            transition: ec2 ? { duration: 0 } : J,
                            children: [
                              (0, n.jsx)("span", {
                                className: V().blockMark,
                                children: e10.gather.mark ?? (0, n.jsx)(b.A, { "aria-hidden": true })
                              }),
                              (0, n.jsx)("span", {
                                className: V().blockLabel,
                                children: e10.gather.label
                              }),
                              (0, n.jsxs)("span", {
                                className: V().blockTokens,
                                children: [
                                  X(e10.gather.tokens),
                                  (0, n.jsx)("span", {
                                    className: V().srOnly,
                                    children: " tokens"
                                  })
                                ]
                              }),
                              e10.gather.detail && (0, n.jsx)("span", {
                                className: V().blockDetail,
                                children: e10.gather.detail
                              })
                            ]
                          },
                          `${t3}-${e10.gather.label}`
                        )
                      ),
                      0 === eP.context && (0, n.jsx)(
                        i.PY1.li,
                        {
                          className: V().blocksEmpty,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            transition: { duration: 0.1 * !ec2 }
                          },
                          transition: {
                            duration: ec2 ? 0 : w.T.duration.fast
                          },
                          children: ep ? "Nothing to gather yet" : "Fills as the agent gathers context"
                        },
                        "empty"
                      )
                    ]
                  })
                })
              ]
            })
          ]
        }),
        T2 && (0, n.jsxs)("div", {
          className: V().footer,
          children: [
            (0, n.jsxs)("div", {
              className: V().buttons,
              children: [
                (0, n.jsx)(A.m, {
                  content: e6,
                  children: (0, n.jsx)($.$, {
                    variant: "secondary",
                    size: "sm",
                    className: V().iconButton,
                    "aria-label": e6,
                    disabled: ep,
                    onClick: "playing" === eC ? () => {
                      eR.current = null, ez("idle");
                    } : eY,
                    children: (0, n.jsxs)("span", {
                      className: V().glyph,
                      children: [
                        (0, n.jsx)(k.A, {
                          "data-on": "playing" !== eC,
                          "aria-hidden": true
                        }),
                        (0, n.jsx)(j.A, {
                          "data-on": "playing" === eC,
                          "aria-hidden": true
                        })
                      ]
                    })
                  })
                }),
                (0, n.jsx)(A.m, {
                  content: "Next step",
                  children: (0, n.jsx)($.$, {
                    ref: eM,
                    variant: "secondary",
                    size: "sm",
                    className: V().iconButton,
                    "aria-label": "Next step",
                    disabled: ep || eQ,
                    onClick: () => {
                      if (!ep && !(eS.current >= em.end)) {
                        var e10;
                        e10 = eS.current, eR.current = em.settles.find((t3) => t3 > e10 + 0.01) ?? em.end, ez("stepping");
                      }
                    },
                    children: (0, n.jsx)(N.A, { "aria-hidden": true })
                  })
                }),
                (0, n.jsx)(A.m, {
                  content: "Restart",
                  children: (0, n.jsx)($.$, {
                    ref: eL,
                    variant: "secondary",
                    size: "sm",
                    className: V().iconButton,
                    "aria-label": "Restart",
                    disabled: ep,
                    onClick: () => {
                      ep || (eS.current = 0, eR.current = null, eW(), eU(), ez("playing"));
                    },
                    children: (0, n.jsx)(f.A, { "aria-hidden": true })
                  })
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: V().speed,
              children: [
                (0, n.jsx)("span", {
                  className: V().speedLabel,
                  "aria-hidden": "true",
                  children: "Speed"
                }),
                (0, n.jsx)(M.A, {
                  label: "Speed",
                  value: String(ej),
                  onValueChange: (e10) => {
                    var t3;
                    return t3 = Number(e10), void (void 0 === h2 && ev(t3), _2?.(t3));
                  },
                  options: Z
                })
              ]
            })
          ]
        })
      ]
    });
  }
  var eo = a(36614), ec = a.n(eo);
  function ed() {
    return (0, n.jsx)("div", {
      className: ec().demo,
      children: (0, n.jsx)(ei, {})
    });
  }
  let eu = ed;
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
A.regCss(60892, ".agent-loop_root__iuL6U{--al-accent:var(--series-1);--al-pad:clamp(1rem,4vw,1.5rem);--al-chip-h:3.5rem;container:agent-loop/inline-size;position:relative;display:grid;gap:var(--space-5);width:100%;max-width:47.5rem;min-width:0;box-sizing:border-box;margin-inline:auto;padding:var(--al-pad);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);-webkit-tap-highlight-color:transparent}.agent-loop_root__iuL6U *,.agent-loop_root__iuL6U :after,.agent-loop_root__iuL6U :before{box-sizing:border-box}.agent-loop_srOnly__xUHu7{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}.agent-loop_swap__Fv7FG{display:inline-grid;min-width:0}.agent-loop_swapItem__hZlnX{grid-area:1/1;min-width:0}.agent-loop_roll__up6aH{display:inline-grid;overflow:hidden;min-width:calc(var(--digits, 1) * 1ch);font-variant-numeric:tabular-nums;vertical-align:bottom}.agent-loop_rollItem__OflVE{grid-area:1/1;text-align:left}.agent-loop_spin__5_onF{animation:agent-loop_al-spin__2Ghp_ 1s linear infinite}@keyframes agent-loop_al-spin__2Ghp_{to{transform:rotate(1turn)}}.agent-loop_header__YehN4{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:var(--space-1) var(--space-3)}.agent-loop_title__SJ_co{min-width:0;margin:0;font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.agent-loop_status__SgDnT{display:flex;justify-content:flex-end;color:var(--text-secondary)}.agent-loop_statusSwap__U3eVY{justify-items:end}.agent-loop_statusItem__lx8KL{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.agent-loop_statusItem__lx8KL svg{flex:none;width:16px;height:16px;stroke-width:1.75}.agent-loop_status__SgDnT[data-tone=success] svg{color:var(--success)}.agent-loop_status__SgDnT[data-tone=warning] svg{color:var(--warning)}.agent-loop_status__SgDnT[data-tone=accent] svg{color:var(--al-accent)}.agent-loop_status__SgDnT[data-tone=muted] svg{color:var(--text-muted)}.agent-loop_caption__58Wpr{grid-column:1/-1;display:grid;min-width:0;min-height:calc(2 * 1.4em);margin:0;color:var(--text-secondary);text-wrap:pretty}.agent-loop_caption__58Wpr>.agent-loop_swap__Fv7FG{display:grid}.agent-loop_stage__KbtAs{display:grid;min-width:0;gap:var(--space-5)}.agent-loop_loop__cUSy6{display:grid;min-width:0;align-content:start;gap:14px}.agent-loop_ring__SMPPh{position:relative;width:100%;min-width:0;height:232px}.agent-loop_ring__SMPPh>*{opacity:0;transition:opacity var(--duration-standard) var(--ease-standard)}.agent-loop_root__iuL6U[data-measured] .agent-loop_ring__SMPPh>*{opacity:1}.agent-loop_svg__DjvV4{position:absolute;top:0;left:0;overflow:visible;pointer-events:none}.agent-loop_track__UGuog{fill:none;stroke:var(--border-strong);stroke-width:1.5}.agent-loop_arrow__KH178{fill:none;stroke:var(--text-muted);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.agent-loop_doneLine__jjy_W{fill:none;stroke:var(--al-accent);stroke-width:1.5;stroke-dasharray:1 1;stroke-dashoffset:1;opacity:0;transition:stroke-dashoffset 0s linear var(--duration-standard),opacity var(--duration-standard) var(--ease-standard)}.agent-loop_root__iuL6U[data-done] .agent-loop_doneLine__jjy_W{stroke-dashoffset:0;opacity:1;transition:stroke-dashoffset .76s var(--ease-in-out),opacity var(--duration-fast) var(--ease-standard)}.agent-loop_trail__kMTrc{fill:none;stroke-width:3;stroke-linecap:round}.agent-loop_trailStop__6UgPL{stop-color:var(--al-accent)}.agent-loop_pin__hasN3{fill:none;stroke:var(--border);stroke-width:1}.agent-loop_pinLive__dUnb_{fill:none;stroke:var(--al-accent);stroke-width:1;stroke-opacity:.32;transition:stroke-opacity var(--duration-standard) var(--ease-standard)}.agent-loop_pinLive__dUnb_[data-live]{stroke-opacity:1}.agent-loop_node__sbmAJ{fill:var(--surface);stroke:var(--border-strong);stroke-width:1.5;transition:fill var(--duration-standard) var(--ease-standard),stroke var(--duration-standard) var(--ease-standard)}.agent-loop_node__sbmAJ[data-state=visited]{stroke:var(--al-accent)}.agent-loop_node__sbmAJ[data-state=active]{fill:var(--al-accent);stroke:var(--al-accent)}.agent-loop_nodeRing__82mzw{fill:none;stroke:var(--al-accent);stroke-width:1.5;opacity:0;transform:scale(.6);transform-box:fill-box;transform-origin:center;transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-standard) var(--ease-standard)}.agent-loop_nodeRing__82mzw[data-on]{opacity:.3;transform:scale(1)}.agent-loop_headGroup__1p9UP{transition:opacity var(--duration-standard) var(--ease-standard)}.agent-loop_root__iuL6U:is([data-ready],[data-ended]) .agent-loop_headGroup__1p9UP{opacity:0}.agent-loop_head__jVYT_{fill:var(--al-accent);stroke:var(--surface);stroke-width:2.5}.agent-loop_station__A61Eo{position:absolute;display:inline-flex;align-items:center;gap:6px;min-width:0;height:20px;color:var(--text-muted);white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}.agent-loop_station__A61Eo[data-key=gather]{transform:translate(-50%,-100%)}.agent-loop_station__A61Eo[data-key=act]{transform:translateY(-50%)}.agent-loop_station__A61Eo[data-key=verify]{flex-direction:row-reverse;transform:translate(-100%,-50%)}.agent-loop_station__A61Eo svg{flex:none;width:14px;height:14px;stroke-width:1.75;transition:color var(--duration-standard) var(--ease-standard)}.agent-loop_stationText__VCNe4{min-width:0;overflow:hidden;text-overflow:ellipsis}.agent-loop_station__A61Eo[data-state=visited]{color:var(--text-secondary)}.agent-loop_station__A61Eo[data-state=active]{color:var(--foreground)}.agent-loop_station__A61Eo[data-state=active] svg{color:var(--al-accent)}.agent-loop_root__iuL6U[data-compact] .agent-loop_station__A61Eo{font-size:var(--text-xs)}.agent-loop_root__iuL6U[data-compact] .agent-loop_station__A61Eo svg{display:none}.agent-loop_center__uZ_bg{position:absolute;display:grid;justify-items:center;gap:2px;text-align:center;transform:translate(-50%,-50%);pointer-events:none}.agent-loop_centerMark__vokDK{display:grid;width:22px;height:22px;margin-bottom:6px}.agent-loop_centerMark__vokDK svg{width:100%;height:100%}.agent-loop_centerName__dLMi0{max-width:100%;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.agent-loop_centerLine__OycFy{justify-items:center;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}.agent-loop_centerCount__JDN39{display:inline-flex;gap:.3em;font-variant-numeric:tabular-nums}.agent-loop_centerEnd__G440T{display:inline-flex;align-items:center;gap:5px;color:var(--text-secondary)}.agent-loop_centerEnd__G440T svg{flex:none;width:14px;height:14px;stroke-width:1.75}.agent-loop_centerEnd__G440T[data-tone=success] svg{color:var(--success)}.agent-loop_centerEnd__G440T[data-tone=warning] svg{color:var(--warning)}.agent-loop_root__iuL6U[data-compact] .agent-loop_centerMark__vokDK{width:20px;height:20px;margin-bottom:4px}.agent-loop_root__iuL6U[data-compact] .agent-loop_centerName__dLMi0{font-size:var(--text-xs)}.agent-loop_root__iuL6U[data-compact] .agent-loop_centerLead__wvS3J{display:none}.agent-loop_lanes___C5Nd{display:grid;min-width:0;gap:12px}.agent-loop_lanes___C5Nd[data-split]{grid-template-columns:repeat(2,minmax(0,1fr))}.agent-loop_lane__y5pYe{display:grid;min-width:0;min-height:var(--al-chip-h)}.agent-loop_lane__y5pYe>*{grid-area:1/1;min-width:0}.agent-loop_laneEmpty__KO8Hj{display:grid;place-items:center;height:100%;padding:0 var(--space-3);border:1px dashed var(--border-strong);border-radius:14px;color:var(--text-muted);font-size:var(--text-xs);text-align:center}.agent-loop_chip__WFFgP,.agent-loop_pop__RNZRQ{display:grid;min-width:0}.agent-loop_chip__WFFgP{align-content:center;gap:1px;min-height:var(--al-chip-h);padding:8px 12px;border:1px solid var(--border);border-radius:14px;background:var(--surface);opacity:.62;transition:opacity var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard)}.agent-loop_lane__y5pYe[data-live] .agent-loop_chip__WFFgP,.agent-loop_root__iuL6U[data-ended] .agent-loop_chip__WFFgP{opacity:1}.agent-loop_lane__y5pYe[data-live] .agent-loop_chip__WFFgP{border-color:color-mix(in oklab,var(--al-accent) 40%,var(--border))}.agent-loop_chip__WFFgP[data-state=error],.agent-loop_lane__y5pYe[data-live] .agent-loop_chip__WFFgP[data-state=error]{border-color:color-mix(in oklab,var(--danger) 35%,var(--border))}.agent-loop_chipHead__K0Pqj{display:flex;min-width:0;align-items:center;gap:8px}.agent-loop_chipMark__gQiws{display:grid;flex:none;width:16px;height:16px;color:var(--foreground)}.agent-loop_chipMark__gQiws svg{width:16px;height:16px;stroke-width:1.75}.agent-loop_chipMark__gQiws[data-tone=success]{color:var(--success)}.agent-loop_chipMark__gQiws[data-tone=warning]{color:var(--warning)}.agent-loop_chipTitle__wJB5k{flex:1;min-width:0;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.agent-loop_chipIcon__SnV_O{flex:none;width:16px;height:16px;color:var(--text-muted)}.agent-loop_chipIcon__SnV_O svg{width:16px;height:16px;stroke-width:1.75}.agent-loop_chip__WFFgP[data-state=success] .agent-loop_chipIcon__SnV_O{color:var(--success)}.agent-loop_chip__WFFgP[data-state=error] .agent-loop_chipIcon__SnV_O{color:var(--danger)}.agent-loop_chipBody__LY8vp{display:grid;min-width:0;padding-left:24px;color:var(--text-secondary);font-size:var(--text-xs)}.agent-loop_chipText__hykls{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.agent-loop_context__Q4gwr{display:grid;min-width:0;align-content:start;gap:var(--space-3);padding-top:var(--space-5);border-top:1px solid var(--border)}.agent-loop_contextHead__ZAzIH{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-2)}.agent-loop_contextTitle__JFUxQ{font-weight:500}.agent-loop_tokens__1WV1l{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.agent-loop_tokenValue__VcSRd{display:inline-block;min-width:4.5ch;text-align:right}.agent-loop_blocks__b5xwg{position:relative;display:grid;align-content:start;gap:var(--space-2);min-height:calc(var(--slots) * var(--al-chip-h) + (var(--slots) - 1) * var(--space-2));margin:0;padding:0;list-style:none}.agent-loop_block__IkPyP{display:grid;grid-template-columns:16px minmax(0,1fr) auto;align-content:center;align-items:center;gap:1px 10px;min-width:0;min-height:var(--al-chip-h);padding:8px 12px;border:1px solid var(--border);border-radius:14px;background:var(--surface);transition:border-color var(--duration-considered) var(--ease-standard)}.agent-loop_block__IkPyP[data-fresh]{border-color:color-mix(in oklab,var(--al-accent) 45%,var(--border));transition-duration:var(--duration-fast)}.agent-loop_blockMark__GZOZ6{display:grid;width:16px;height:16px;color:var(--text-secondary)}.agent-loop_blockMark__GZOZ6 svg{width:16px;height:16px;stroke-width:1.75}.agent-loop_blockLabel__h5m4v{min-width:0;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.agent-loop_blockTokens__h_hrv{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.agent-loop_blockDetail__0UKDy{grid-column:2/-1;min-width:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}.agent-loop_blocksEmpty__mL4x5{position:absolute;inset:0;display:grid;place-items:center;padding:var(--space-4);border:1px dashed var(--border-strong);border-radius:14px;color:var(--text-muted);font-size:var(--text-xs);text-align:center}.agent-loop_footer__j2PJe{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3);margin-inline:calc(-1 * var(--al-pad));padding:var(--space-4) var(--al-pad) 0;border-top:1px solid var(--border)}.agent-loop_buttons__VXHBz{display:flex;gap:6px}.agent-loop_iconButton___D893{width:var(--control-height-sm);padding-inline:0}.agent-loop_iconButton___D893 svg{width:16px;height:16px;stroke-width:1.75}.agent-loop_glyph__0L6wg{display:inline-grid;width:16px;height:16px}.agent-loop_glyph__0L6wg svg{grid-area:1/1;transition:opacity var(--duration-fast) var(--ease-standard)}.agent-loop_glyph__0L6wg svg[data-on=false]{opacity:0;transition-duration:.1s}.agent-loop_speed__JoPQF{display:flex;min-width:0;align-items:center;gap:var(--space-3)}.agent-loop_speedLabel__tLQUu{color:var(--text-secondary)}@media (prefers-reduced-motion:reduce){.agent-loop_block__IkPyP,.agent-loop_chip__WFFgP,.agent-loop_doneLine__jjy_W,.agent-loop_glyph__0L6wg svg,.agent-loop_headGroup__1p9UP,.agent-loop_nodeRing__82mzw,.agent-loop_node__sbmAJ,.agent-loop_pinLive__dUnb_,.agent-loop_ring__SMPPh>*,.agent-loop_station__A61Eo,.agent-loop_station__A61Eo svg{transition-duration:0s!important}}@media (prefers-reduced-motion:reduce){.agent-loop_spin__5_onF{animation:none}}", {"root":"agent-loop_root__iuL6U","srOnly":"agent-loop_srOnly__xUHu7","swap":"agent-loop_swap__Fv7FG","swapItem":"agent-loop_swapItem__hZlnX","roll":"agent-loop_roll__up6aH","rollItem":"agent-loop_rollItem__OflVE","spin":"agent-loop_spin__5_onF","al-spin":"agent-loop_al-spin__2Ghp_","header":"agent-loop_header__YehN4","title":"agent-loop_title__SJ_co","status":"agent-loop_status__SgDnT","statusSwap":"agent-loop_statusSwap__U3eVY","statusItem":"agent-loop_statusItem__lx8KL","caption":"agent-loop_caption__58Wpr","stage":"agent-loop_stage__KbtAs","loop":"agent-loop_loop__cUSy6","ring":"agent-loop_ring__SMPPh","svg":"agent-loop_svg__DjvV4","track":"agent-loop_track__UGuog","arrow":"agent-loop_arrow__KH178","doneLine":"agent-loop_doneLine__jjy_W","trail":"agent-loop_trail__kMTrc","trailStop":"agent-loop_trailStop__6UgPL","pin":"agent-loop_pin__hasN3","pinLive":"agent-loop_pinLive__dUnb_","node":"agent-loop_node__sbmAJ","nodeRing":"agent-loop_nodeRing__82mzw","headGroup":"agent-loop_headGroup__1p9UP","head":"agent-loop_head__jVYT_","station":"agent-loop_station__A61Eo","stationText":"agent-loop_stationText__VCNe4","center":"agent-loop_center__uZ_bg","centerMark":"agent-loop_centerMark__vokDK","centerName":"agent-loop_centerName__dLMi0","centerLine":"agent-loop_centerLine__OycFy","centerCount":"agent-loop_centerCount__JDN39","centerEnd":"agent-loop_centerEnd__G440T","centerLead":"agent-loop_centerLead__wvS3J","lanes":"agent-loop_lanes___C5Nd","lane":"agent-loop_lane__y5pYe","laneEmpty":"agent-loop_laneEmpty__KO8Hj","pop":"agent-loop_pop__RNZRQ","chip":"agent-loop_chip__WFFgP","chipHead":"agent-loop_chipHead__K0Pqj","chipMark":"agent-loop_chipMark__gQiws","chipTitle":"agent-loop_chipTitle__wJB5k","chipIcon":"agent-loop_chipIcon__SnV_O","chipBody":"agent-loop_chipBody__LY8vp","chipText":"agent-loop_chipText__hykls","context":"agent-loop_context__Q4gwr","contextHead":"agent-loop_contextHead__ZAzIH","contextTitle":"agent-loop_contextTitle__JFUxQ","tokens":"agent-loop_tokens__1WV1l","tokenValue":"agent-loop_tokenValue__VcSRd","blocks":"agent-loop_blocks__b5xwg","block":"agent-loop_block__IkPyP","blockMark":"agent-loop_blockMark__GZOZ6","blockLabel":"agent-loop_blockLabel__h5m4v","blockTokens":"agent-loop_blockTokens__h_hrv","blockDetail":"agent-loop_blockDetail__0UKDy","blocksEmpty":"agent-loop_blocksEmpty__mL4x5","footer":"agent-loop_footer__j2PJe","buttons":"agent-loop_buttons__VXHBz","iconButton":"agent-loop_iconButton___D893","glyph":"agent-loop_glyph__0L6wg","speed":"agent-loop_speed__JoPQF","speedLabel":"agent-loop_speedLabel__tLQUu"});
A.reg(85964, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var i = a(51811);
  let s = {
    name: "message-square-text",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
          key: "18887p"
        }
      ],
      ["path", { d: "M7 11h10", key: "1twpyw" }],
      ["path", { d: "M7 15h6", key: "d9of3u" }],
      ["path", { d: "M7 7h8", key: "af5zfr" }]
    ]
  };
  s.node;
  let n = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.cssFor("agent-loop", [36614,60892]);
A.item("agent-loop", {entry:56601, export:"AgentLoopDemo", kind:"component", tier:"pro", unresolved:[]});
})();