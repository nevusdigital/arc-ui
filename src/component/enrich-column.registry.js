/* enrich-column (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
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
A.regCss(32910, ".demo{display:flex;justify-content:center;width:100%}", {"demo":"demo"});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.reg(52732, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { EnrichColumnDemo: () => D, default: () => H });
  var n = r(95155), i = r(12115), a = r(25354), s = r(80642), l = r(18310), o = r(61792), c = r(23723), u = r(35484), d = r(92298), h = r(9751), m = r(36619), p = r(40852), x = r(86272), f = r(18986), _ = r(51288), y = r(35978), g = r(87796), j = r(52898), v = r(36690);
  let b = { "aria-hidden": true, focusable: false }, w = {
    name: "Headcount and funding",
    prompt: "Find the headcount and latest funding round"
  }, N = {
    name: "Claude Haiku 5.5",
    detail: "Web search",
    mark: (0, n.jsx)(function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "#D97757",
        ...b,
        ...e2,
        children: (0, n.jsx)("path", {
          d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        })
      });
    }, {})
  }, k = [
    {
      id: "linear",
      name: "Linear",
      domain: "linear.app",
      logo: (0, n.jsx)(function(e2) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#5E6AD2",
          ...b,
          ...e2,
          children: (0, n.jsx)("path", {
            d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
          })
        });
      }, {})
    },
    {
      id: "vercel",
      name: "Vercel",
      domain: "vercel.com",
      logo: (0, n.jsx)(function(e2) {
        return (0, n.jsx)("svg", {
          viewBox: "0 .6 24 24",
          fill: "currentColor",
          ...b,
          ...e2,
          children: (0, n.jsx)("path", { d: "m12 1.608 12 20.784H0Z" })
        });
      }, {})
    },
    {
      id: "notion",
      name: "Notion",
      domain: "notion.com",
      logo: (0, n.jsx)(function(e2) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...b,
          ...e2,
          children: (0, n.jsx)("path", {
            d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
          })
        });
      }, {})
    },
    {
      id: "figma",
      name: "Figma",
      domain: "figma.com",
      logo: (0, n.jsx)(function(e2) {
        return (0, n.jsxs)("svg", {
          viewBox: "-9.5 0 57 57",
          ...b,
          ...e2,
          children: [
            (0, n.jsx)("path", {
              fill: "#1ABCFE",
              d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
            }),
            (0, n.jsx)("path", {
              fill: "#0ACF83",
              d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
            }),
            (0, n.jsx)("path", {
              fill: "#FF7262",
              d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
            }),
            (0, n.jsx)("path", {
              fill: "#F24E1E",
              d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
            }),
            (0, n.jsx)("path", {
              fill: "#A259FF",
              d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
            })
          ]
        });
      }, {})
    },
    {
      id: "stripe",
      name: "Stripe",
      domain: "stripe.com",
      logo: (0, n.jsx)(function(e2) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#635BFF",
          ...b,
          ...e2,
          children: (0, n.jsx)("path", {
            d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
          })
        });
      }, {})
    },
    {
      id: "ramp",
      name: "Ramp",
      domain: "ramp.com",
      logo: (0, n.jsx)(function(e2) {
        return (0, n.jsx)("svg", {
          viewBox: "51.4 -1.6 19 19",
          fill: "currentColor",
          ...b,
          ...e2,
          children: (0, n.jsx)("path", {
            d: "M70.028 15.612v.07h-9.983v-.07c1.439-.82 2.432-1.654 3.327-2.526h4.1zm-2.473-13.11L65.027 0h-.074s.042 4.664-4.205 8.906c-4.156 4.15-9.046 4.16-9.046 4.16v.074l2.578 2.546s4.819.05 9.074-4.16c4.24-4.195 4.205-9.022 4.205-9.022z"
          })
        });
      }, {})
    },
    {
      id: "retool",
      name: "Retool",
      domain: "retool.com",
      logo: (0, n.jsx)(function(e2) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...b,
          ...e2,
          children: (0, n.jsx)("path", {
            d: "M0 2.2A2.2 2.2 0 0 1 2.2 0h8.6A2.2 2.2 0 0 1 13 2.2v1.7A1.1 1.1 0 0 1 11.9 5H1.1A1.1 1.1 0 0 1 0 3.9V2.2zm0 6.9A1.1 1.1 0 0 1 1.1 8h20.7a2.2 2.2 0 0 1 2.2 2.2v5.7a1.1 1.1 0 0 1-1.1 1.1H2.2A2.2 2.2 0 0 1 0 14.8V9.1zm11 12a1.1 1.1 0 0 1 1.1-1.1h10.8a1.1 1.1 0 0 1 1.1 1.1v.7a2.2 2.2 0 0 1-2.2 2.2h-8.6a2.2 2.2 0 0 1-2.2-2.2v-.7z"
          })
        });
      }, {})
    }
  ], T = {
    linear: {
      value: "180 people \xB7 Series C, $82M (Jun 2025)",
      source: { label: "linear.app/now", href: "https://linear.app/now" },
      search: 300,
      read: 420
    },
    vercel: {
      value: "820 people \xB7 Series F, $300M (Sep 2025)",
      source: { label: "vercel.com/blog", href: "https://vercel.com/blog" },
      search: 340,
      read: 380
    },
    notion: {
      value: "1,100 people \xB7 Series C, $275M (Oct 2021)",
      source: { label: "crunchbase.com", href: "https://www.crunchbase.com" },
      search: 280,
      read: 460
    },
    figma: {
      value: "1,700 people \xB7 IPO on the NYSE (Jul 2025)",
      source: { label: "sec.gov", href: "https://www.sec.gov" },
      search: 360,
      read: 400
    },
    stripe: {
      value: "8,500 people \xB7 Series I, $6.5B (Mar 2023)",
      source: {
        label: "stripe.com/newsroom",
        href: "https://stripe.com/newsroom"
      },
      search: 320,
      read: 440
    },
    ramp: {
      value: "1,200 people \xB7 Series E, $500M (Jul 2025)",
      source: { label: "ramp.com/blog", href: "https://ramp.com/blog" },
      search: 300,
      read: 400
    },
    retool: {
      value: "460 people \xB7 Series C, $45M (Jul 2022)",
      source: { label: "techcrunch.com", href: "https://techcrunch.com" },
      search: 340,
      read: 480,
      failFirst: "No dated source found"
    }
  };
  function A(e2, t2) {
    return new Promise((r2, n2) => {
      if (t2.aborted) return void n2(new DOMException("Aborted", "AbortError"));
      let i2 = window.setTimeout(() => {
        t2.removeEventListener("abort", a2), r2();
      }, e2);
      function a2() {
        window.clearTimeout(i2), n2(new DOMException("Aborted", "AbortError"));
      }
      t2.addEventListener("abort", a2, { once: true });
    });
  }
  let $ = async (e2, { signal: t2, attempt: r2, setActivity: n2 }) => {
    let i2 = T[e2.id] ?? {
      value: `Sample value for ${e2.name}`,
      source: e2.domain ? { label: e2.domain, href: `https://${e2.domain}` } : void 0,
      search: 320,
      read: 420
    };
    if (await A(i2.search, t2), i2.source && n2(`Reading ${i2.source.label}`), await A(i2.read, t2), i2.failFirst && 1 === r2)
      throw Error(i2.failFirst);
    return { value: i2.value, source: i2.source };
  };
  var z = r(88230), C = r.n(z);
  let M = (...e2) => e2.filter(Boolean).join(" "), S = { status: "idle" }, E = [0.22, 1, 0.36, 1], L = (e2) => "queued" === e2 || "running" === e2, R = (e2) => ({
    initial: e2 ? { opacity: 0 } : { opacity: 0, y: 2 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.16 * !e2, ease: E }
    },
    exit: { opacity: 0, transition: { duration: 0.1 * !e2, ease: E } }
  });
  function F() {
    return (0, n.jsxs)("svg", {
      className: C().spinner,
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
          strokeOpacity: ".22",
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
  function B({ reduced: e2 }) {
    return (0, n.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, n.jsx)(a.PY1.path, {
        d: "M3.25 8.5 6.5 11.75 12.75 4.75",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.24, ease: E, delay: 0.04 }
      })
    });
  }
  function I({ status: e2, reduced: t2 }) {
    let r2 = "queued" === e2 ? (0, n.jsx)(c.A, { size: 16, strokeWidth: 1.75 }) : "running" === e2 ? (0, n.jsx)(F, {}) : "done" === e2 ? (0, n.jsx)(B, { reduced: t2 }) : "failed" === e2 ? (0, n.jsx)(u.A, { size: 16, strokeWidth: 1.75 }) : null;
    return (0, n.jsx)("span", {
      className: C().statusIcon,
      "aria-hidden": "true",
      children: (0, n.jsx)(s.N, {
        initial: false,
        children: r2 ? (0, n.jsx)(
          a.PY1.span,
          {
            className: C().stack,
            "data-status": e2,
            initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.7 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: t2 ? { duration: 0 } : {
                scale: {
                  type: "spring",
                  visualDuration: 0.24,
                  bounce: 0
                },
                opacity: { duration: 0.12 }
              }
            },
            exit: {
              opacity: 0,
              scale: t2 ? 1 : 0.7,
              transition: { duration: 0.1 * !t2 }
            },
            children: r2
          },
          e2
        ) : null
      })
    });
  }
  function P({ row: e2, cell: t2, reduced: r2, onRun: i2, onRetry: l2 }) {
    let { status: o2 } = t2, c2 = R(r2), u2 = "running" === o2 ? `running:${t2.activity ?? ""}` : `${o2}:${t2.value ?? t2.error ?? ""}`, p2 = "idle" === o2 ? (0, n.jsx)("span", { className: C().muted, children: "Not run" }) : "queued" === o2 ? (0, n.jsx)("span", { className: C().muted, children: "Queued" }) : "running" === o2 ? (0, n.jsx)(j.n, {
      className: C().shimmer,
      children: t2.activity ?? "Working"
    }) : "done" === o2 ? (0, n.jsx)("span", { title: t2.value, children: t2.value }) : (0, n.jsxs)("span", {
      className: C().failText,
      children: [
        (0, n.jsx)("span", {
          className: C().failLabel,
          children: "Failed"
        }),
        (0, n.jsx)("span", {
          className: C().failReason,
          children: t2.error ?? "No result"
        })
      ]
    }), x2 = "done" === o2 && t2.source ? `source:${t2.source.href}` : "failed" === o2 ? "retry" : "none", f2 = "retry" === x2 ? (0, n.jsxs)(_.$, {
      variant: "ghost",
      size: "sm",
      className: C().retry,
      onClick: l2,
      "aria-label": `Retry ${e2.name}`,
      children: [
        (0, n.jsx)(d.A, {
          size: 14,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        }),
        (0, n.jsx)("span", {
          className: C().retryLabel,
          children: "Retry"
        })
      ]
    }) : "done" === o2 && t2.source ? (0, n.jsxs)("a", {
      className: C().source,
      href: t2.source.href,
      target: "_blank",
      rel: "noreferrer noopener",
      "aria-label": `Source for ${e2.name}: ${t2.source.label} (opens in a new tab)`,
      children: [
        (0, n.jsx)("span", {
          className: C().sourceLabel,
          children: t2.source.label
        }),
        (0, n.jsx)(h.A, {
          size: 14,
          strokeWidth: 1.75,
          "aria-hidden": "true",
          className: C().sourceIcon
        })
      ]
    }) : null, y2 = "idle" === o2 || "done" === o2;
    return (0, n.jsxs)("div", {
      className: C().cell,
      children: [
        (0, n.jsx)(I, { status: o2, reduced: r2 }),
        (0, n.jsx)("span", {
          className: C().content,
          children: (0, n.jsx)(s.N, {
            initial: false,
            children: (0, n.jsx)(
              a.PY1.span,
              { className: C().stack, ...c2, children: p2 },
              u2
            )
          })
        }),
        (0, n.jsx)("span", {
          className: C().aside,
          children: (0, n.jsx)(s.N, {
            initial: false,
            children: f2 ? (0, n.jsx)(
              a.PY1.span,
              { className: C().stack, ...c2, children: f2 },
              x2
            ) : null
          })
        }),
        (0, n.jsx)("span", {
          className: C().actionSlot,
          children: y2 ? (0, n.jsx)(v.m, {
            content: "done" === o2 ? "Re-run row" : "Run row",
            children: (0, n.jsx)("button", {
              type: "button",
              className: M(C().iconButton, C().rowAction),
              onClick: i2,
              "aria-label": `${"done" === o2 ? "Re-run" : "Run"} ${e2.name}`,
              children: "done" === o2 ? (0, n.jsx)(d.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }) : (0, n.jsx)(m.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          }) : null
        })
      ]
    });
  }
  function W({
    title: e2 = "Target accounts",
    rows: t2 = k,
    defaultColumn: r2 = w,
    onColumnChange: c2,
    model: h2 = N,
    enrich: j2,
    initialCells: b2,
    concurrency: T2 = 2,
    autoRun: A2,
    editable: z2 = true,
    note: F2,
    onCellChange: B2,
    onRunComplete: I2,
    className: O2
  }) {
    let Y2 = (0, l.I)() ?? false, D2 = (0, i.useId)(), H2 = !j2, [q, V] = (0, i.useState)(r2), [Z, G] = (0, i.useState)(() => ({ ...b2 })), [J, K] = (0, i.useState)(false), [Q, X] = (0, i.useState)(r2), [U, ee] = (0, i.useState)(""), et = (0, i.useRef)(null), er = (0, i.useRef)(null), en = (0, i.useRef)(null), ei = (0, o.W)(et, { once: true, amount: 0.35 }), ea = (0, i.useRef)(Z), es = (0, i.useRef)({
      rows: t2,
      column: q,
      enrich: j2 ?? $,
      concurrency: T2,
      onCellChange: B2,
      onRunComplete: I2,
      simulated: H2
    });
    (0, i.useEffect)(() => {
      es.current = {
        rows: t2,
        column: q,
        enrich: j2 ?? $,
        concurrency: T2,
        onCellChange: B2,
        onRunComplete: I2,
        simulated: H2
      };
    });
    let el = (0, i.useRef)([]), eo = (0, i.useRef)(0), ec = (0, i.useRef)(/* @__PURE__ */ new Map()), eu = (0, i.useRef)(/* @__PURE__ */ new Map()), ed = (0, i.useRef)(/* @__PURE__ */ new Map()), eh = (0, i.useRef)(false), em = (0, i.useRef)(false), ep = (e3, t3) => {
      ea.current = e3, G(e3);
      let { rows: r3, onCellChange: n2 } = es.current;
      if (n2)
        for (let i2 of t3) {
          let t4 = r3.find((e4) => e4.id === i2);
          t4 && n2(t4, e3[i2]);
        }
    }, ex = (e3, t3) => ep({ ...ea.current, [e3]: t3 }, [e3]), ef = (e3) => {
      let t3 = es.current.rows.map((t4) => e3[t4.id] ?? S), r3 = t3.filter((e4) => "done" === e4.status).length, n2 = t3.filter((e4) => "failed" === e4.status).length;
      return `${r3} of ${t3.length} rows enriched${n2 ? `, ${n2} failed` : ""}.`;
    }, e_ = async (e3) => {
      let t3 = es.current.rows.find((t4) => t4.id === e3);
      if (!t3) return;
      let r3 = new AbortController(), { signal: n2 } = r3;
      ec.current.set(e3, r3);
      let i2 = (eu.current.get(e3) ?? 0) + 1;
      eu.current.set(e3, i2);
      let { column: a2, enrich: s2 } = es.current;
      ex(e3, { status: "running", activity: "Searching the web" });
      try {
        var l2;
        let r4 = await (l2 = s2(t3, {
          prompt: a2.prompt,
          column: a2,
          signal: n2,
          attempt: i2,
          setActivity: (t4) => {
            n2.aborted || ea.current[e3]?.status !== "running" || ex(e3, { status: "running", activity: t4 });
          }
        }), new Promise((e4, t4) => {
          if (n2.aborted)
            return void t4(new DOMException("Aborted", "AbortError"));
          let r5 = () => t4(new DOMException("Aborted", "AbortError"));
          n2.addEventListener("abort", r5, { once: true }), l2.then(e4, t4).finally(() => n2.removeEventListener("abort", r5));
        }));
        if (n2.aborted) return;
        let o2 = { status: "done", value: r4.value, source: r4.source };
        ed.current.set(e3, o2), ex(e3, o2);
      } catch (r4) {
        if (n2.aborted) return;
        let t4 = {
          status: "failed",
          error: r4 instanceof Error && r4.message ? r4.message : "No result"
        };
        ed.current.set(e3, t4), ex(e3, t4);
      } finally {
        ec.current.get(e3) === r3 && ec.current.delete(e3);
      }
    }, ey = async (e3) => {
      for (e3 && await new Promise((t3) => window.setTimeout(t3, e3)); el.current.length; ) {
        let e4 = el.current.shift();
        e4 && await e_(e4);
      }
      eo.current -= 1, 0 === eo.current && eh.current && (eh.current = false, ee(ef(ea.current)), es.current.onRunComplete?.(ea.current));
    }, eg = (e3, t3) => {
      if (!e3.length) return;
      let r3 = { ...ea.current };
      for (let n3 of e3) {
        ec.current.get(n3)?.abort(), t3 && eu.current.delete(n3);
        let e4 = r3[n3] ?? S;
        L(e4.status) || ed.current.set(n3, e4), r3[n3] = { status: "queued" };
      }
      el.current = [...el.current.filter((t4) => !e3.includes(t4)), ...e3], ep(r3, e3), eh.current = true;
      let { column: n2, simulated: i2, rows: a2 } = es.current, s2 = e3.length === a2.length ? `all ${a2.length} rows` : 1 === e3.length ? a2.find((t4) => t4.id === e3[0])?.name ?? "1 row" : `${e3.length} rows`;
      ee(
        `Running ${n2.name} on ${s2}.${i2 ? " Simulated with sample values, nothing was sent." : ""}`
      );
      let l2 = Math.min(
        Math.max(1, es.current.concurrency) - eo.current,
        el.current.length
      );
      for (let e4 = 0; e4 < l2; e4 += 1) eo.current += 1, ey(140 * e4);
    }, ej = () => eg(
      es.current.rows.map((e3) => e3.id),
      true
    ), ev = (e3 = true) => {
      el.current = [];
      let t3 = { ...ea.current }, r3 = [];
      for (let e4 of es.current.rows) {
        let n2 = t3[e4.id];
        n2 && L(n2.status) && (ec.current.get(e4.id)?.abort(), t3[e4.id] = ed.current.get(e4.id) ?? S, r3.push(e4.id));
      }
      eh.current = false, r3.length && ep(t3, r3), e3 && ee(`Stopped. ${ef(t3)}`);
    };
    (0, i.useEffect)(() => {
      let e3 = ec.current;
      return () => {
        el.current = [], e3.forEach((e4) => e4.abort());
      };
    }, []);
    let eb = A2 ?? H2;
    (0, i.useEffect)(() => {
      if (!eb || !ei || em.current) return;
      let e3 = window.setTimeout(() => {
        em.current || (em.current = true, es.current.rows.every(
          (e4) => "idle" === (ea.current[e4.id] ?? S).status
        ) && ej());
      }, 450);
      return () => window.clearTimeout(e3);
    }, [eb, ei]), (0, i.useEffect)(() => {
      if (!J) return;
      let e3 = en.current;
      e3 && (e3.focus(), e3.setSelectionRange(e3.value.length, e3.value.length));
    }, [J]);
    let ew = () => {
      K(false), window.requestAnimationFrame(() => er.current?.focus());
    }, eN = Q.name.trim().length > 0 && Q.prompt.trim().length > 0, ek = (e3) => {
      if (e3?.preventDefault(), !eN) return;
      let t3 = { name: Q.name.trim(), prompt: Q.prompt.trim() };
      em.current = true, ev(false), V(t3), es.current.column = t3, c2?.(t3), ew(), ej();
    }, eT = t2.map((e3) => Z[e3.id] ?? S), eA = eT.some((e3) => L(e3.status)), e$ = eT.filter((e3) => "done" === e3.status).length, ez = eT.filter((e3) => "failed" === e3.status).length, eC = e$ + ez > 0, eM = F2 ?? (H2 ? "sample data" : void 0), eS = eA || eC ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsxs)("span", {
          className: C().num,
          children: [
            (0, n.jsx)("span", {
              className: C().numGhost,
              "aria-hidden": "true",
              children: t2.length
            }),
            (0, n.jsx)("span", { children: e$ })
          ]
        }),
        " of ",
        t2.length,
        " done"
      ]
    }) : "Not run yet", eE = `${D2}-editor`;
    return (0, n.jsxs)("div", {
      ref: et,
      className: M(C().root, O2),
      children: [
        (0, n.jsxs)("div", {
          className: C().card,
          children: [
            (0, n.jsxs)("div", {
              className: C().top,
              children: [
                (0, n.jsxs)("div", {
                  className: C().heading,
                  children: [
                    (0, n.jsx)("span", { className: C().title, children: e2 }),
                    (0, n.jsxs)("span", {
                      className: C().count,
                      children: [
                        t2.length,
                        " ",
                        1 === t2.length ? "row" : "rows",
                        eM ? ` \xB7 ${eM}` : ""
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)(_.$, {
                  variant: eA ? "secondary" : "primary",
                  size: "sm",
                  className: C().run,
                  disabled: !t2.length,
                  onClick: () => eA ? ev() : ej(),
                  "aria-label": eA ? "Stop the run" : `${eC ? "Re-run" : "Run"} ${q.name} on every row`,
                  children: [
                    eA ? (0, n.jsx)(p.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      fill: "currentColor",
                      "aria-hidden": "true"
                    }) : eC ? (0, n.jsx)(d.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }) : (0, n.jsx)(m.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      fill: "currentColor",
                      "aria-hidden": "true"
                    }),
                    eA ? "Stop" : eC ? "Re-run column" : "Run column"
                  ]
                })
              ]
            }),
            (0, n.jsx)(s.N, {
              initial: false,
              children: J ? (0, n.jsx)(
                a.PY1.div,
                {
                  id: eE,
                  className: C().editorClip,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: Y2 ? { duration: 0 } : {
                    height: {
                      type: "spring",
                      visualDuration: 0.24,
                      bounce: 0
                    },
                    opacity: { duration: 0.16, ease: E }
                  },
                  children: (0, n.jsxs)("form", {
                    className: C().editor,
                    onSubmit: ek,
                    onKeyDown: (e3) => {
                      "Escape" === e3.key && (e3.preventDefault(), ew()), "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && ek(e3);
                    },
                    "aria-label": "Edit AI column",
                    children: [
                      (0, n.jsx)(y.p, {
                        label: "Column name",
                        value: Q.name,
                        onChange: (e3) => X((t3) => ({ ...t3, name: e3.target.value })),
                        maxLength: 48,
                        autoComplete: "off"
                      }),
                      (0, n.jsx)(g.T, {
                        ref: en,
                        label: "Prompt",
                        value: Q.prompt,
                        rows: 2,
                        onChange: (e3) => X((t3) => ({ ...t3, prompt: e3.target.value })),
                        maxLength: 280
                      }),
                      (0, n.jsxs)("div", {
                        className: C().editorActions,
                        children: [
                          (0, n.jsx)("span", {
                            className: C().hint,
                            children: "Saving re-runs every row"
                          }),
                          (0, n.jsx)(_.$, {
                            type: "button",
                            variant: "secondary",
                            size: "sm",
                            onClick: ew,
                            children: "Cancel"
                          }),
                          (0, n.jsx)(_.$, {
                            type: "submit",
                            variant: "primary",
                            size: "sm",
                            disabled: !eN,
                            children: "Save and run"
                          })
                        ]
                      })
                    ]
                  })
                },
                "editor"
              ) : null
            }),
            (0, n.jsx)("div", {
              className: C().tableWrap,
              children: (0, n.jsxs)("table", {
                className: C().table,
                children: [
                  (0, n.jsxs)("colgroup", {
                    children: [
                      (0, n.jsx)("col", { className: C().colCompany }),
                      (0, n.jsx)("col", {})
                    ]
                  }),
                  (0, n.jsx)("thead", {
                    children: (0, n.jsxs)("tr", {
                      children: [
                        (0, n.jsx)("th", {
                          scope: "col",
                          className: C().headCompany,
                          children: "Company"
                        }),
                        (0, n.jsx)("th", {
                          scope: "col",
                          className: C().headAi,
                          children: (0, n.jsxs)("div", {
                            className: C().aiHead,
                            children: [
                              (0, n.jsx)(x.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                className: C().aiIcon,
                                "aria-hidden": "true"
                              }),
                              (0, n.jsx)("span", {
                                className: C().aiText,
                                children: (0, n.jsx)(s.N, {
                                  initial: false,
                                  children: (0, n.jsxs)(
                                    a.PY1.span,
                                    {
                                      className: M(C().stack, C().aiTextInner),
                                      ...R(Y2),
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: C().aiName,
                                          children: q.name
                                        }),
                                        (0, n.jsx)("span", {
                                          className: C().aiPrompt,
                                          title: q.prompt,
                                          children: q.prompt
                                        })
                                      ]
                                    },
                                    `${q.name}
${q.prompt}`
                                  )
                                })
                              }),
                              z2 ? (0, n.jsx)(v.m, {
                                content: "Edit column",
                                children: (0, n.jsx)("button", {
                                  ref: er,
                                  type: "button",
                                  className: C().iconButton,
                                  onClick: () => J ? ew() : void (X(q), K(true)),
                                  "aria-label": `Edit column: ${q.name}`,
                                  "aria-expanded": J,
                                  "aria-controls": J ? eE : void 0,
                                  "data-active": J || void 0,
                                  children: (0, n.jsx)(f.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                })
                              }) : null
                            ]
                          })
                        })
                      ]
                    })
                  }),
                  (0, n.jsx)("tbody", {
                    children: t2.length ? t2.map((e3) => {
                      let t3 = Z[e3.id] ?? S;
                      return (0, n.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, n.jsx)("th", {
                              scope: "row",
                              className: C().companyCell,
                              children: (0, n.jsxs)("span", {
                                className: C().company,
                                children: [
                                  e3.logo ? (0, n.jsx)("span", {
                                    className: C().logo,
                                    "aria-hidden": "true",
                                    children: e3.logo
                                  }) : (0, n.jsx)("span", {
                                    className: C().logoFallback,
                                    "aria-hidden": "true",
                                    children: e3.name.slice(0, 1)
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: C().companyText,
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: C().name,
                                        children: e3.name
                                      }),
                                      e3.domain ? (0, n.jsx)("span", {
                                        className: C().domain,
                                        children: e3.domain
                                      }) : null
                                    ]
                                  })
                                ]
                              })
                            }),
                            (0, n.jsx)("td", {
                              className: C().aiCell,
                              "data-status": t3.status,
                              children: (0, n.jsx)(P, {
                                row: e3,
                                cell: t3,
                                reduced: Y2,
                                onRun: () => eg([e3.id], true),
                                onRetry: () => eg([e3.id], false)
                              })
                            })
                          ]
                        },
                        e3.id
                      );
                    }) : (0, n.jsx)("tr", {
                      children: (0, n.jsx)("td", {
                        colSpan: 2,
                        className: C().empty,
                        children: "No rows yet. Add rows to run this column."
                      })
                    })
                  })
                ]
              })
            }),
            (0, n.jsxs)("div", {
              className: C().foot,
              children: [
                h2 ? (0, n.jsxs)("span", {
                  className: C().model,
                  children: [
                    h2.mark ? (0, n.jsx)("span", {
                      className: C().modelMark,
                      "aria-hidden": "true",
                      children: h2.mark
                    }) : null,
                    (0, n.jsxs)("span", {
                      className: C().modelName,
                      children: [
                        h2.name,
                        h2.detail ? (0, n.jsxs)("span", {
                          className: C().modelDetail,
                          children: [" \xB7 ", h2.detail]
                        }) : null
                      ]
                    })
                  ]
                }) : (0, n.jsx)("span", {}),
                (0, n.jsxs)("span", {
                  className: C().progress,
                  children: [
                    (0, n.jsx)("span", { children: eS }),
                    ez ? (0, n.jsxs)("span", {
                      className: C().progressFailed,
                      children: [
                        (0, n.jsx)(u.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        ez,
                        " failed"
                      ]
                    }) : null
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: C().srOnly,
          role: "status",
          "aria-live": "polite",
          children: U
        })
      ]
    });
  }
  var O = r(32910), Y = r.n(O);
  function D() {
    return (0, n.jsx)("div", {
      className: Y().demo,
      children: (0, n.jsx)(W, {})
    });
  }
  let H = D;
}

__m(__module,__exports,__require);
});
A.regCss(68272, ".field{display:grid;min-width:0}\n.field label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.control{width:100%;min-height:110px;resize:vertical;border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:var(--space-3);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);outline:none;box-shadow:0 0 0 6px transparent;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.control::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.control:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.control:focus-visible{border-color:var(--foreground);box-shadow:0 0 0 3px var(--focus-ring);outline:2px solid transparent;outline-offset:2px}\n.control[aria-invalid=true]{border-color:var(--danger)}\n.control:disabled{cursor:not-allowed;background:var(--surface-muted);opacity:.6}\n@media (prefers-reduced-motion:reduce){.control{transition:none}\n.messageSlot{display:block;overflow:hidden}\n.error,.hint{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.hint{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(86272, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr"
        }
      ],
      ["path", { d: "M20 2v4", key: "1rf3ol" }],
      ["path", { d: "M22 4h-4", key: "gwowj6" }],
      ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
    ],
    aliases: ["stars"]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(87796, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { T: () => g });
  var i = a(95155), n = a(12115), s = a(18310), r = a(80642), o = a(25354), l = a(7770), c = a(68272), d = a.n(c);
  let u = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function h({ word: e2 }) {
    let t2 = (0, s.I)(), [a2, c2] = (0, n.useState)({ word: e2, direction: 1 });
    a2.word !== e2 && c2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(a2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), p2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, i.jsx)(r.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, i.jsx)(
          o.PY1.span,
          {
            className: d().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: p2,
            children: (0, i.jsx)(r.N, {
              initial: false,
              mode: "popLayout",
              custom: a2.direction,
              children: (0, i.jsx)(
                o.PY1.span,
                {
                  custom: a2.direction,
                  variants: u,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: p2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, s.I)(), a2 = e2.split(" ");
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: d().srOnly, children: e2 }),
        (0, i.jsx)("span", {
          className: d().words,
          "aria-hidden": "true",
          children: (0, i.jsx)(r.N, {
            initial: false,
            mode: "popLayout",
            children: a2.map(
              (e3, n2) => (0, i.jsxs)(
                o.PY1.span,
                {
                  className: d().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.fast,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, i.jsx)(h, { word: e3 }) : e3,
                    n2 < a2.length - 1 ? " " : null
                  ]
                },
                `${n2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function p({ id: e2, text: t2, className: a2, alert: n2 }) {
    return (0, i.jsx)(r.N, {
      initial: false,
      children: t2 ? (0, i.jsx)(f, { id: e2, text: t2, className: a2, alert: n2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: a2, alert: r2 }) {
    let c2 = (0, s.I)(), u2 = (0, n.useRef)(null), [h2, p2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let e3 = u2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && p2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.jsx)(o.PY1.span, {
      className: d().messageSlot,
      initial: !c2 && { height: 0, opacity: 0 },
      animate: { height: h2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: c2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: c2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, i.jsx)(o.PY1.span, {
        ref: u2,
        id: e2,
        className: a2,
        role: r2 ? "alert" : void 0,
        initial: !c2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: c2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, i.jsx)(m, { text: t2 })
      })
    });
  }
  let g = (0, n.forwardRef)(function({ label: e2, description: t2, error: a2, id: s2, className: r2, ...o2 }, l2) {
    let c2 = (0, n.useId)(), u2 = s2 ?? c2, h2 = t2 ? `${u2}-description` : void 0, m2 = a2 ? `${u2}-error` : void 0;
    return (0, i.jsxs)("div", {
      className: d().field,
      children: [
        (0, i.jsx)("label", { htmlFor: u2, children: e2 }),
        (0, i.jsx)("textarea", {
          ...o2,
          id: u2,
          ref: l2,
          className: [d().control, r2].filter(Boolean).join(" "),
          "aria-invalid": !!a2 || o2["aria-invalid"],
          "aria-describedby": [o2["aria-describedby"], h2, m2].filter(Boolean).join(" ") || void 0
        }),
        (0, i.jsx)(p, { id: h2, text: t2, className: d().hint }),
        (0, i.jsx)(p, { id: m2, text: a2, className: d().error, alert: true })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.regCss(88230, ".enrich-column_root__N8s5e{container-type:inline-size;width:100%;max-width:760px;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:20px}.enrich-column_srOnly__Q_aO5{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.enrich-column_card__JUThJ{overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}.enrich-column_top__zg9dz{display:flex;align-items:center;gap:12px;min-height:60px;padding:12px 12px 12px 20px}.enrich-column_heading__8nVlI{display:flex;flex:1;align-items:baseline;gap:8px;min-width:0}.enrich-column_title__P8OCO{overflow:hidden;font-size:var(--text-base);font-weight:500;line-height:24px;text-overflow:ellipsis;white-space:nowrap}.enrich-column_count__GxbwV{flex:none;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;white-space:nowrap}.enrich-column_run__WDGEv{flex:none;min-width:140px}.enrich-column_editorClip__xQ2Fq{overflow:hidden}.enrich-column_editor__3jmWn{display:grid;gap:12px;padding:4px 20px 16px}.enrich-column_editor__3jmWn textarea{min-height:64px;height:64px;resize:vertical}.enrich-column_editorActions__3Hf8B{display:flex;align-items:center;justify-content:flex-end;gap:8px}.enrich-column_hint__jBzUK{flex:1;min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;text-overflow:ellipsis;white-space:nowrap}.enrich-column_tableWrap__BiOT_{border-top:1px solid var(--border-subtle)}.enrich-column_table__QyXIK{width:100%;border-collapse:collapse;table-layout:fixed}.enrich-column_colCompany__tcZFL{width:30%}.enrich-column_table__QyXIK td,.enrich-column_table__QyXIK th{padding:0 12px;border-bottom:1px solid var(--border-subtle);font-weight:400;text-align:left;vertical-align:middle}.enrich-column_table__QyXIK tr>:first-child{padding-left:20px}.enrich-column_table__QyXIK tr>:last-child{padding-right:8px;border-left:1px solid var(--border-subtle)}.enrich-column_table__QyXIK tbody tr:last-child>*{border-bottom:0}.enrich-column_headCompany__uLox8{height:60px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.enrich-column_headAi___gyb8{height:60px}.enrich-column_aiHead__ZcZBy{display:grid;grid-template-columns:16px minmax(0,1fr) 28px;align-items:center;column-gap:8px}.enrich-column_aiIcon__tY3sY{color:var(--accent)}.enrich-column_aiTextInner__MVrEa,.enrich-column_aiText__GSKy8{display:grid;min-width:0}.enrich-column_aiName__JysAQ{overflow:hidden;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}.enrich-column_aiPrompt__k0A3m{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;text-overflow:ellipsis;white-space:nowrap}.enrich-column_companyCell__iqpi4{height:44px}.enrich-column_company__izxqM{display:flex;align-items:center;gap:12px;min-width:0}.enrich-column_logoFallback__YnXdv,.enrich-column_logo__j_XrF{display:grid;flex:none;width:16px;height:16px;place-items:center;color:var(--foreground)}.enrich-column_logo__j_XrF svg{display:block;width:16px;height:16px}.enrich-column_logoFallback__YnXdv{border-radius:4px;background:var(--surface-muted);color:var(--text-secondary);font-size:10px;font-weight:500;line-height:1}.enrich-column_companyText__g9Wmu{display:flex;align-items:baseline;gap:8px;min-width:0}.enrich-column_name__Zfesl{flex:0 1 auto;font-weight:500}.enrich-column_domain__JtB5v,.enrich-column_name__Zfesl{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.enrich-column_domain__JtB5v{flex:0 100 auto;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.enrich-column_aiCell__uocxg{height:44px;transition:background-color var(--duration-fast) var(--ease-standard)}.enrich-column_aiCell__uocxg[data-status=running]{background:color-mix(in oklab,var(--accent) 5%,transparent)}.enrich-column_aiCell__uocxg[data-status=failed]{background:color-mix(in oklab,var(--danger) 4%,transparent)}.enrich-column_cell___L0PC{display:grid;grid-template-columns:16px minmax(0,1fr) auto 28px;align-items:center;column-gap:8px;min-width:0;height:44px}.enrich-column_stack__2Ylgz{grid-area:1/1;min-width:0}.enrich-column_statusIcon__LIugM{display:grid;width:16px;height:16px;place-items:center}.enrich-column_statusIcon__LIugM>.enrich-column_stack__2Ylgz{display:grid;place-items:center}.enrich-column_statusIcon__LIugM svg{display:block}.enrich-column_statusIcon__LIugM [data-status=queued]{color:var(--text-muted)}.enrich-column_statusIcon__LIugM [data-status=running]{color:var(--accent)}.enrich-column_statusIcon__LIugM [data-status=done]{color:var(--success)}.enrich-column_statusIcon__LIugM [data-status=failed]{color:var(--danger)}.enrich-column_spinner__kgrGt{animation:enrich-column_enrich-spin__oa7lC .7s linear infinite}@keyframes enrich-column_enrich-spin__oa7lC{to{transform:rotate(1turn)}}.enrich-column_content__kQkvX{display:grid;min-width:0}.enrich-column_content__kQkvX>.enrich-column_stack__2Ylgz{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.enrich-column_muted__3egLc{color:var(--text-muted)}.enrich-column_shimmer__5JzLf{color:var(--text-secondary);white-space:nowrap}.enrich-column_failText__5oQd7{display:inline}.enrich-column_failLabel__XeQ7R{color:var(--foreground)}.enrich-column_failReason__nqH0_{margin-left:8px;color:var(--text-secondary);font-size:var(--text-xs)}.enrich-column_aside__n0zMQ{display:grid;justify-items:end;min-width:0}.enrich-column_aside__n0zMQ>.enrich-column_stack__2Ylgz{display:flex;align-items:center}.enrich-column_source__MNNBN{display:inline-flex;align-items:center;gap:4px;max-width:168px;margin-right:-4px;padding:4px;border-radius:8px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;text-decoration:none;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.enrich-column_sourceLabel__hpsrI{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.enrich-column_sourceIcon__m_UoX{flex:none}.enrich-column_source__MNNBN:active{background:var(--surface-muted)}.enrich-column_retry__JauH_{min-height:28px;margin-right:-4px;padding-inline:8px;gap:4px;font-size:var(--text-xs)}.enrich-column_actionSlot__Ztqqv{display:grid;width:28px;height:28px;place-items:center}.enrich-column_iconButton__JDyEb{display:grid;width:28px;height:28px;flex:none;margin:0;padding:0;place-items:center;border:0;border-radius:999px;background:transparent;color:var(--text-muted);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-instant) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}.enrich-column_iconButton__JDyEb:active{transform:scale(.94);background:var(--surface-muted)}.enrich-column_iconButton__JDyEb[data-active]{background:var(--surface-muted);color:var(--foreground)}.enrich-column_rowAction__rzBHW{opacity:0}.enrich-column_rowAction__rzBHW:focus-visible,.enrich-column_table__QyXIK tbody tr:focus-within .enrich-column_rowAction__rzBHW{opacity:1}@media (hover:hover) and (pointer:fine){.enrich-column_table__QyXIK tbody tr:hover .enrich-column_rowAction__rzBHW{opacity:1}}@media (hover:hover) and (pointer:fine){.enrich-column_iconButton__JDyEb:hover,.enrich-column_source__MNNBN:hover{background:var(--surface-muted);color:var(--foreground)}}@media (hover:none){.enrich-column_rowAction__rzBHW{opacity:1}}.enrich-column_empty__jo1c3{height:88px;color:var(--text-muted);text-align:center!important}.enrich-column_foot__uVcXb{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:44px;padding:12px 20px;border-top:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.enrich-column_model__CVV29{display:inline-flex;align-items:center;gap:8px;min-width:0}.enrich-column_modelMark__uYYYR{display:grid;flex:none;width:14px;height:14px;place-items:center}.enrich-column_modelMark__uYYYR svg{display:block;width:14px;height:14px}.enrich-column_modelName___Bpp9{overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}.enrich-column_modelDetail__Hdl4k{color:var(--text-muted)}.enrich-column_progress__dbhrx{display:inline-flex;flex:none;align-items:center;gap:12px;white-space:nowrap}.enrich-column_num__qbpfu{display:inline-grid;justify-items:end;font-variant-numeric:tabular-nums}.enrich-column_num__qbpfu>*{grid-area:1/1}.enrich-column_numGhost__u0_xd{visibility:hidden}.enrich-column_progressFailed__MbFv4{display:inline-flex;align-items:center;gap:4px;color:var(--text-secondary)}.enrich-column_progressFailed__MbFv4 svg{color:var(--danger)}@media (prefers-reduced-motion:reduce){.enrich-column_spinner__kgrGt{animation-duration:1.6s}}", {"root":"enrich-column_root__N8s5e","srOnly":"enrich-column_srOnly__Q_aO5","card":"enrich-column_card__JUThJ","top":"enrich-column_top__zg9dz","heading":"enrich-column_heading__8nVlI","title":"enrich-column_title__P8OCO","count":"enrich-column_count__GxbwV","run":"enrich-column_run__WDGEv","editorClip":"enrich-column_editorClip__xQ2Fq","editor":"enrich-column_editor__3jmWn","editorActions":"enrich-column_editorActions__3Hf8B","hint":"enrich-column_hint__jBzUK","tableWrap":"enrich-column_tableWrap__BiOT_","table":"enrich-column_table__QyXIK","colCompany":"enrich-column_colCompany__tcZFL","headCompany":"enrich-column_headCompany__uLox8","headAi":"enrich-column_headAi___gyb8","aiHead":"enrich-column_aiHead__ZcZBy","aiIcon":"enrich-column_aiIcon__tY3sY","aiText":"enrich-column_aiText__GSKy8","aiTextInner":"enrich-column_aiTextInner__MVrEa","aiName":"enrich-column_aiName__JysAQ","aiPrompt":"enrich-column_aiPrompt__k0A3m","companyCell":"enrich-column_companyCell__iqpi4","company":"enrich-column_company__izxqM","logo":"enrich-column_logo__j_XrF","logoFallback":"enrich-column_logoFallback__YnXdv","companyText":"enrich-column_companyText__g9Wmu","name":"enrich-column_name__Zfesl","domain":"enrich-column_domain__JtB5v","aiCell":"enrich-column_aiCell__uocxg","cell":"enrich-column_cell___L0PC","stack":"enrich-column_stack__2Ylgz","statusIcon":"enrich-column_statusIcon__LIugM","spinner":"enrich-column_spinner__kgrGt","enrich-spin":"enrich-column_enrich-spin__oa7lC","content":"enrich-column_content__kQkvX","muted":"enrich-column_muted__3egLc","shimmer":"enrich-column_shimmer__5JzLf","failText":"enrich-column_failText__5oQd7","failLabel":"enrich-column_failLabel__XeQ7R","failReason":"enrich-column_failReason__nqH0_","aside":"enrich-column_aside__n0zMQ","source":"enrich-column_source__MNNBN","sourceLabel":"enrich-column_sourceLabel__hpsrI","sourceIcon":"enrich-column_sourceIcon__m_UoX","retry":"enrich-column_retry__JauH_","actionSlot":"enrich-column_actionSlot__Ztqqv","iconButton":"enrich-column_iconButton__JDyEb","rowAction":"enrich-column_rowAction__rzBHW","empty":"enrich-column_empty__jo1c3","foot":"enrich-column_foot__uVcXb","model":"enrich-column_model__CVV29","modelMark":"enrich-column_modelMark__uYYYR","modelName":"enrich-column_modelName___Bpp9","modelDetail":"enrich-column_modelDetail__Hdl4k","progress":"enrich-column_progress__dbhrx","num":"enrich-column_num__qbpfu","numGhost":"enrich-column_numGhost__u0_xd","progressFailed":"enrich-column_progressFailed__MbFv4","retryLabel":"enrich-column_retryLabel__caMLy"});
A.cssFor("enrich-column", [14290,32910,68272,88230]);
A.item("enrich-column", {entry:52732, export:"EnrichColumnDemo", kind:"component", tier:"pro", unresolved:[]});
})();