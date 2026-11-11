function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    LeadScoring: () => J,
    default: () => ee,
    leadScore: () => z,
    leadScoringSamples: () => $
  });
  var n = a(95155), r = a(12115), i = a(25354), s = a(28245), l = a(55809), o = a(92171), d = a(80642), c = a(18310), u = a(25182), h = a(57465), p = a(51811);
  let m = {
    name: "briefcase-business",
    size: 24,
    node: [
      ["path", { d: "M12 12h.01", key: "1mp3jc" }],
      [
        "path",
        { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }
      ],
      ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }
      ]
    ]
  };
  m.node;
  let g = (0, p.A)(m);
  var f = a(75796), _ = a(51752), x = a(92782), y = a(36483), b = a(95697), v = a(81499), j = a(12363), w = a(64577), k = a(35484), A = a(92298), N = a(51288), T = a(66558), S = a(52898), M = a(36690), C = a(7770);
  let E = (e2, t2, a2, n2) => [
    { id: "fit", label: "Company fit", value: e2, weight: 0.35 },
    { id: "intent", label: "Buying intent", value: t2, weight: 0.3 },
    { id: "engagement", label: "Engagement", value: a2, weight: 0.2 },
    { id: "timing", label: "Timing", value: n2, weight: 0.15 }
  ];
  function z(e2) {
    if ("number" == typeof e2.score) return Math.round(e2.score);
    if (!e2.breakdown?.length) return 0;
    let t2 = e2.breakdown.reduce((e3, t3) => e3 + t3.weight, 0) || 1;
    return Math.round(
      e2.breakdown.reduce((e3, t3) => e3 + t3.value * t3.weight, 0) / t2
    );
  }
  let $ = [
    {
      id: "figma-alex",
      name: "Alex Kim",
      title: "Product designer",
      company: "Figma",
      mark: "figma",
      received: "2m ago",
      reason: "Single seat, downloaded the free kit only",
      signals: [
        { kind: "docs", label: "Read 2 docs pages" },
        { kind: "team", label: "1 seat" }
      ],
      breakdown: E(54, 40, 52, 38)
    },
    {
      id: "retool-sofia",
      name: "Sofia Lindqvist",
      title: "Engineering manager",
      company: "Retool",
      mark: "retool",
      received: "6m ago",
      reason: "Series C, 40 engineers, visited pricing 3x",
      signals: [
        { kind: "pricing", label: "Pricing page 3x" },
        { kind: "hiring", label: "Hiring 4 frontend roles" },
        { kind: "stack", label: "React, TypeScript" }
      ],
      breakdown: E(92, 90, 84, 80)
    },
    {
      id: "linear-tomas",
      name: "Tom\xE1s Herrera",
      title: "Design engineer",
      company: "Linear",
      mark: "linear",
      received: "14m ago",
      reason: "Starred the repo, opened 2 of 3 emails",
      signals: [
        { kind: "repo", label: "Starred on GitHub" },
        { kind: "email", label: "Opened 2 emails" }
      ],
      breakdown: E(72, 60, 64, 48)
    },
    {
      id: "ramp-maya",
      name: "Maya Chen",
      title: "VP of Engineering",
      company: "Ramp",
      mark: "ramp",
      received: "21m ago",
      reason: "Booked a demo, 120 engineers, contract ends Dec",
      signals: [
        { kind: "demo", label: "Demo booked Oct 29" },
        { kind: "pricing", label: "Compared plans" },
        { kind: "team", label: "12 trial seats" },
        { kind: "security", label: "Asked about SSO" }
      ],
      breakdown: E(96, 95, 92, 90)
    },
    {
      id: "notion-daniel",
      name: "Daniel Okafor",
      title: "Staff engineer",
      company: "Notion",
      mark: "notion",
      received: "38m ago",
      reason: "Read 6 docs pages, asked about SAML",
      signals: [
        { kind: "docs", label: "Read 6 docs pages" },
        { kind: "security", label: "Asked about SAML" }
      ],
      breakdown: E(84, 70, 62, 60)
    },
    {
      id: "vercel-priya",
      name: "Priya Nair",
      title: "Director of platform",
      company: "Vercel",
      mark: "vercel",
      received: "1h ago",
      reason: "Enterprise page twice, 3 teammates signed up",
      signals: [
        { kind: "pricing", label: "Enterprise page 2x" },
        { kind: "team", label: "3 teammates joined" },
        { kind: "email", label: "Replied to intro" }
      ],
      breakdown: E(90, 80, 78, 74)
    }
  ], L = { "aria-hidden": true, focusable: false };
  function R(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "#D97757",
      ...L,
      ...e2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let P = {
    vercel: function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "0 .6 24 24",
        fill: "currentColor",
        ...L,
        ...e2,
        children: (0, n.jsx)("path", { d: "m12 1.608 12 20.784H0Z" })
      });
    },
    ramp: function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "51.4 -1.6 19 19",
        fill: "currentColor",
        ...L,
        ...e2,
        children: (0, n.jsx)("path", {
          d: "M70.028 15.612v.07h-9.983v-.07c1.439-.82 2.432-1.654 3.327-2.526h4.1zm-2.473-13.11L65.027 0h-.074s.042 4.664-4.205 8.906c-4.156 4.15-9.046 4.16-9.046 4.16v.074l2.578 2.546s4.819.05 9.074-4.16c4.24-4.195 4.205-9.022 4.205-9.022z"
        })
      });
    },
    linear: function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "#5E6AD2",
        ...L,
        ...e2,
        children: (0, n.jsx)("path", {
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        })
      });
    },
    notion: function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...L,
        ...e2,
        children: (0, n.jsx)("path", {
          d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
        })
      });
    },
    retool: function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...L,
        ...e2,
        children: (0, n.jsx)("path", {
          d: "M0 2.2A2.2 2.2 0 0 1 2.2 0h8.6A2.2 2.2 0 0 1 13 2.2v1.7A1.1 1.1 0 0 1 11.9 5H1.1A1.1 1.1 0 0 1 0 3.9V2.2zm0 6.9A1.1 1.1 0 0 1 1.1 8h20.7a2.2 2.2 0 0 1 2.2 2.2v5.7a1.1 1.1 0 0 1-1.1 1.1H2.2A2.2 2.2 0 0 1 0 14.8V9.1zm11 12a1.1 1.1 0 0 1 1.1-1.1h10.8a1.1 1.1 0 0 1 1.1 1.1v.7a2.2 2.2 0 0 1-2.2 2.2h-8.6a2.2 2.2 0 0 1-2.2-2.2v-.7z"
        })
      });
    },
    figma: function(e2) {
      return (0, n.jsxs)("svg", {
        viewBox: "-9.5 0 57 57",
        ...L,
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
    }
  }, D = {
    hubspot: function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "#FF7A59",
        ...L,
        ...e2,
        children: (0, n.jsx)("path", {
          d: "M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
        })
      });
    },
    salesforce: function(e2) {
      return (0, n.jsx)("svg", {
        viewBox: "0 2.2 24 20",
        fill: "#00A1E0",
        ...L,
        ...e2,
        children: (0, n.jsx)("path", {
          d: "M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8"
        })
      });
    }
  }, O = { hubspot: "HubSpot", salesforce: "Salesforce" };
  var B = a(93354), I = a.n(B);
  let F = (...e2) => e2.filter(Boolean).join(" "), V = {
    pricing: u.A,
    team: h.A,
    hiring: g,
    email: f.A,
    demo: _.A,
    stack: x.A,
    docs: y.A,
    repo: b.A,
    security: v.A
  }, H = { type: "spring", visualDuration: 0.3, bounce: 0 }, Y = { duration: C.T.duration.fast, ease: [...C.T.ease.standard] }, K = { duration: 0.1, ease: [...C.T.ease.standard] }, G = (e2) => e2 >= 80 ? "strong" : e2 >= 60 ? "good" : "low", W = { strong: "Strong fit", good: "Possible fit", low: "Weak fit" };
  function q({ id: e2, children: t2, className: a2, reduced: r2 }) {
    return (0, n.jsx)(
      i.PY1.span,
      {
        className: F(I().swap, a2),
        initial: { opacity: 0, y: 2 * !r2 },
        animate: { opacity: 1, y: 0, transition: Y },
        exit: { opacity: 0, transition: K },
        children: t2
      },
      e2
    );
  }
  function Z({ score: e2, scoring: t2, reduced: a2 }) {
    let d2 = (0, s.d)(t2 ? 0 : e2), c2 = (0, l.G)(d2, (e3) => Math.max(0, Math.min(1, e3 / 100))), u2 = (0, l.G)(d2, (e3) => +(e3 > 0.5)), h2 = (0, l.G)(d2, (e3) => Math.round(e3));
    return (0, r.useEffect)(() => {
      if (t2) return void d2.jump(0);
      if (a2) return void d2.jump(e2);
      let n2 = (0, o.i)(d2, e2, { duration: 0.64, ease: [...C.T.ease.enter] });
      return () => n2.stop();
    }, [t2, e2, a2, d2]), (0, n.jsxs)("span", {
      className: I().ring,
      "data-band": G(e2),
      "data-scoring": t2 || void 0,
      "aria-hidden": "true",
      children: [
        (0, n.jsxs)("svg", {
          viewBox: "0 0 36 36",
          className: I().ringSvg,
          children: [
            (0, n.jsx)("circle", {
              cx: "18",
              cy: "18",
              r: "15",
              className: I().ringTrack
            }),
            (0, n.jsx)(i.PY1.circle, {
              cx: "18",
              cy: "18",
              r: "15",
              className: I().ringArc,
              style: { pathLength: c2, opacity: u2 }
            }),
            (0, n.jsx)("g", {
              className: I().ringSpin,
              children: (0, n.jsx)("circle", {
                cx: "18",
                cy: "18",
                r: "15",
                className: I().ringSpinner
              })
            })
          ]
        }),
        (0, n.jsx)(i.PY1.span, { className: I().ringValue, children: h2 })
      ]
    });
  }
  function Q({ lead: e2 }) {
    let t2 = e2.mark;
    if ("string" == typeof t2 && t2 in P) {
      let e3 = P[t2];
      return (0, n.jsx)(e3, { width: 20, height: 20 });
    }
    return null != t2 && "string" != typeof t2 ? (0, n.jsx)(n.Fragment, { children: t2 }) : (0, n.jsx)("span", {
      className: I().monogram,
      children: e2.company.slice(0, 1)
    });
  }
  function U({ crms: e2, value: t2, onChange: a2 }) {
    return (0, n.jsx)("div", {
      className: I().picker,
      role: "radiogroup",
      "aria-label": "Destination",
      onKeyDown: (n2) => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(n2.key))
          return;
        n2.preventDefault();
        let r2 = "ArrowLeft" === n2.key || "ArrowUp" === n2.key ? -1 : 1, i2 = e2[(e2.indexOf(t2) + r2 + e2.length) % e2.length];
        a2(i2), n2.currentTarget.querySelector(`[data-crm="${i2}"]`)?.focus();
      },
      children: e2.map((e3) => {
        let r2 = D[e3], i2 = e3 === t2;
        return (0, n.jsx)(
          M.m,
          {
            content: O[e3],
            children: (0, n.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": i2,
              "aria-label": O[e3],
              tabIndex: i2 ? 0 : -1,
              "data-crm": e3,
              className: I().pickerOption,
              onClick: () => a2(e3),
              children: (0, n.jsx)(r2, { width: 16, height: 16 })
            })
          },
          e3
        );
      })
    });
  }
  function X({
    lead: e2,
    scoring: t2,
    expanded: a2,
    onToggle: s2,
    crms: l2,
    crm: o2,
    onCrmChange: c2,
    pushState: h2,
    onPush: p2,
    reduced: m2
  }) {
    let g2 = (0, r.useId)(), f2 = z(e2), _2 = h2(o2), x2 = l2.find((e3) => "done" === h2(e3)) ?? e2.pushedTo?.[0], y2 = x2 ? D[x2] : null, b2 = O[o2], v2 = t2 ? `${e2.name}, ${e2.title} at ${e2.company}, scoring` : `${e2.name}, ${e2.title} at ${e2.company}, score ${f2}, ${W[G(f2)].toLowerCase()}. ${e2.reason}`;
    return (0, n.jsxs)(i.PY1.li, {
      layout: "position",
      transition: { layout: m2 ? { duration: 0 } : H },
      className: I().item,
      "data-expanded": a2 || void 0,
      children: [
        (0, n.jsxs)("button", {
          type: "button",
          className: I().row,
          "data-row": "",
          "aria-expanded": a2,
          "aria-controls": g2,
          "aria-label": v2,
          onClick: s2,
          children: [
            (0, n.jsx)("span", {
              className: I().mark,
              children: (0, n.jsx)(Q, { lead: e2 })
            }),
            (0, n.jsxs)("span", {
              className: I().text,
              children: [
                (0, n.jsxs)("span", {
                  className: I().line,
                  children: [
                    (0, n.jsx)("span", {
                      className: I().name,
                      children: e2.name
                    }),
                    (0, n.jsxs)("span", {
                      className: I().role,
                      children: [
                        (0, n.jsxs)("span", {
                          className: I().jobTitle,
                          children: [e2.title, ", "]
                        }),
                        e2.company
                      ]
                    }),
                    (0, n.jsx)("span", {
                      className: I().when,
                      children: (0, n.jsx)(d.N, {
                        initial: false,
                        children: y2 && x2 ? (0, n.jsxs)(q, {
                          id: `synced-${x2}`,
                          reduced: m2,
                          className: I().synced,
                          children: [
                            (0, n.jsx)(y2, { width: 14, height: 14 }),
                            "Synced"
                          ]
                        }) : (0, n.jsx)(q, {
                          id: "time",
                          reduced: m2,
                          children: e2.received
                        })
                      })
                    })
                  ]
                }),
                (0, n.jsx)("span", {
                  className: I().reason,
                  children: (0, n.jsx)(d.N, {
                    initial: false,
                    children: t2 ? (0, n.jsx)(q, {
                      id: "scoring",
                      reduced: m2,
                      children: (0, n.jsx)(S.n, {
                        children: "Scoring fit and intent"
                      })
                    }) : (0, n.jsx)(q, {
                      id: "reason",
                      reduced: m2,
                      children: e2.reason
                    })
                  })
                })
              ]
            }),
            (0, n.jsx)(Z, { score: f2, scoring: t2, reduced: m2 }),
            (0, n.jsx)(j.A, {
              className: I().chevron,
              size: 16,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, n.jsx)(d.N, {
          initial: false,
          children: a2 && (0, n.jsx)(
            i.PY1.div,
            {
              id: g2,
              role: "region",
              "aria-label": `${e2.name} score details`,
              className: I().panel,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: m2 ? { duration: 0 } : { height: H, opacity: Y },
              children: (0, n.jsxs)("div", {
                className: I().panelInner,
                children: [
                  e2.signals?.length ? (0, n.jsx)("ul", {
                    className: I().signals,
                    "aria-label": "Signals",
                    children: e2.signals.map((e3) => {
                      let t3 = V[e3.kind] ?? u.A;
                      return (0, n.jsxs)(
                        "li",
                        {
                          className: I().chip,
                          children: [
                            (0, n.jsx)(t3, {
                              size: 14,
                              "aria-hidden": "true"
                            }),
                            e3.label
                          ]
                        },
                        e3.label
                      );
                    })
                  }) : null,
                  e2.breakdown?.length ? (0, n.jsx)("ul", {
                    className: I().factors,
                    "aria-label": `Score breakdown, ${f2} of 100`,
                    children: e2.breakdown.map(
                      (e3, a3) => (0, n.jsxs)(
                        "li",
                        {
                          className: I().factor,
                          children: [
                            (0, n.jsx)("span", {
                              className: I().factorLabel,
                              children: e3.label
                            }),
                            (0, n.jsx)("span", {
                              className: I().bar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(i.PY1.span, {
                                className: I().barFill,
                                "data-band": G(e3.value),
                                initial: { scaleX: 0 },
                                animate: {
                                  scaleX: t2 ? 0 : e3.value / 100
                                },
                                transition: m2 ? { duration: 0 } : {
                                  duration: 0.48,
                                  delay: 0.06 + 0.03 * a3,
                                  ease: [...C.T.ease.enter]
                                }
                              })
                            }),
                            (0, n.jsx)("span", {
                              className: I().factorValue,
                              children: t2 ? "" : e3.value
                            })
                          ]
                        },
                        e3.id
                      )
                    )
                  }) : null,
                  (0, n.jsxs)("div", {
                    className: I().footer,
                    children: [
                      (0, n.jsx)("p", {
                        className: I().status,
                        children: (0, n.jsx)(d.N, {
                          initial: false,
                          children: "pushing" === _2 ? (0, n.jsx)(q, {
                            id: "pushing",
                            reduced: m2,
                            children: (0, n.jsx)(S.n, {
                              children: `Creating contact and deal in ${b2}`
                            })
                          }) : "done" === _2 ? (0, n.jsxs)(q, {
                            id: `done-${o2}`,
                            reduced: m2,
                            className: I().statusDone,
                            children: [
                              (0, n.jsx)(w.A, {
                                size: 14,
                                "aria-hidden": "true"
                              }),
                              "Contact and deal created in ",
                              b2
                            ]
                          }) : "error" === _2 ? (0, n.jsxs)(q, {
                            id: `error-${o2}`,
                            reduced: m2,
                            className: I().statusError,
                            children: [
                              (0, n.jsx)(k.A, {
                                size: 14,
                                "aria-hidden": "true"
                              }),
                              b2,
                              " did not respond"
                            ]
                          }) : (0, n.jsx)(q, {
                            id: `idle-${o2}`,
                            reduced: m2,
                            children: "Creates a contact and an open deal"
                          })
                        })
                      }),
                      (0, n.jsxs)("div", {
                        className: I().actions,
                        children: [
                          l2.length > 1 && (0, n.jsx)(U, { crms: l2, value: o2, onChange: c2 }),
                          (0, n.jsx)(N.$, {
                            size: "sm",
                            variant: "done" === _2 ? "secondary" : "primary",
                            loading: "pushing" === _2,
                            disabled: t2,
                            "aria-disabled": "done" === _2 || void 0,
                            onClick: () => {
                              "done" !== _2 && "pushing" !== _2 && p2();
                            },
                            children: "done" === _2 ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(w.A, {
                                  size: 14,
                                  "aria-hidden": "true"
                                }),
                                `In ${b2}`
                              ]
                            }) : "error" === _2 ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(A.A, {
                                  size: 14,
                                  "aria-hidden": "true"
                                }),
                                "Try again"
                              ]
                            }) : "pushing" === _2 ? "Pushing" : `Push to ${b2}`
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            },
            "panel"
          )
        })
      ]
    });
  }
  function J({
    leads: e2,
    title: t2 = "Inbound leads",
    description: a2,
    sort: i2,
    defaultSort: s2,
    onSortChange: l2,
    crms: o2 = ["hubspot", "salesforce"],
    onPush: u2,
    onRescore: h2,
    autoPlay: p2,
    defaultExpandedId: m2 = null,
    className: g2
  }) {
    let f2 = (0, c.I)() ?? false, _2 = void 0 === e2, x2 = p2 ?? _2, y2 = e2 ?? $, [b2, v2] = (0, r.useState)(s2 ?? (x2 ? "newest" : "score")), j2 = i2 ?? b2, [w2, k2] = (0, r.useState)(m2), [S2, C2] = (0, r.useState)(o2[0] ?? "hubspot"), [E2, L2] = (0, r.useState)({}), [P2, D2] = (0, r.useState)(
      () => _2 && x2 ? new Set(y2.map((e3) => e3.id)) : /* @__PURE__ */ new Set()
    ), [B2, V2] = (0, r.useState)(false), [H2, Y2] = (0, r.useState)(""), K2 = (0, r.useRef)(null), G2 = (0, r.useRef)(null), W2 = (0, r.useRef)([]), Z2 = (0, r.useRef)([]), Q2 = (0, r.useRef)(/* @__PURE__ */ new Map()), U2 = (0, r.useRef)(false), ee2 = (0, r.useCallback)((e3) => _2 ? P2.has(e3.id) : !!e3.scoring, [_2, P2]), et = (0, r.useMemo)(
      () => "newest" === j2 ? y2 : [...y2].sort((e3, t3) => z(t3) - z(e3)),
      [y2, j2]
    ), ea = (0, r.useCallback)(
      (e3) => {
        void 0 === i2 && v2(e3), l2?.(e3);
      },
      [i2, l2]
    ), en = (0, r.useCallback)(
      (e3, t3) => E2[`${e3.id}:${t3}`] ?? (e3.pushedTo?.includes(t3) ? "done" : "idle"),
      [E2]
    ), er = (0, r.useCallback)(
      async (e3, t3) => {
        let a3 = `${e3.id}:${t3}`;
        Q2.current.get(a3)?.abort();
        let n2 = new AbortController();
        Q2.current.set(a3, n2);
        let r2 = O[t3];
        L2((e4) => ({ ...e4, [a3]: "pushing" })), Y2(`Pushing ${e3.name} to ${r2}`);
        try {
          if (u2 ? await u2(e3, t3, n2.signal) : await new Promise((e4, t4) => {
            let a4 = window.setTimeout(e4, 900);
            n2.signal.addEventListener(
              "abort",
              () => {
                window.clearTimeout(a4), t4(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          }), n2.signal.aborted)
            return;
          L2((e4) => ({ ...e4, [a3]: "done" })), Y2(
            `${e3.name} added to ${r2} with an open deal.${u2 ? "" : " Simulated, nothing was sent."}`
          );
        } catch {
          if (n2.signal.aborted) return;
          L2((e4) => ({ ...e4, [a3]: "error" })), Y2(`${r2} did not respond. ${e3.name} was not pushed.`);
        } finally {
          Q2.current.get(a3) === n2 && Q2.current.delete(a3);
        }
      },
      [u2]
    );
    (0, r.useEffect)(() => {
      let e3 = Q2.current;
      return () => {
        e3.forEach((e4) => e4.abort()), e3.clear(), W2.current.forEach(clearTimeout), Z2.current.forEach(clearTimeout);
      };
    }, []);
    let ei = (0, r.useCallback)((e3, t3) => {
      Z2.current.forEach(clearTimeout), Z2.current = e3.map(
        (e4, a3) => window.setTimeout(
          () => {
            D2((t4) => {
              let a4 = new Set(t4);
              return a4.delete(e4.id), a4;
            });
          },
          t3 + 35 * a3
        )
      );
    }, []), es = (0, r.useCallback)(() => {
      W2.current.forEach(clearTimeout), W2.current = [];
    }, []), el = (0, r.useCallback)(() => {
      h2 && h2(), _2 && (D2(new Set(y2.map((e3) => e3.id))), Y2("Rescoring leads"), ei(et, 700), Z2.current.push(
        window.setTimeout(
          () => Y2("Leads rescored. Simulated with sample data."),
          700 + 35 * et.length + 640
        )
      ));
    }, [_2, et, h2, ei, y2]);
    (0, r.useEffect)(() => {
      let e3 = K2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(
        ([e4]) => {
          if (!e4 || (V2(!e4.isIntersecting), !e4.isIntersecting || U2.current || !x2))
            return;
          U2.current = true, _2 && ei(y2, 650);
          let t4 = [...y2].sort((e5, t5) => z(t5) - z(e5))[0], a3 = (e5, t5) => W2.current.push(window.setTimeout(t5, e5));
          a3(1750, () => ea("score")), t4 && (a3(2550, () => k2(t4.id)), o2[0] && a3(3650, () => {
            er(t4, o2[0]);
          }));
        },
        { threshold: 0.35 }
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let eo = y2.filter(ee2).length, ed = a2 ?? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(R, { width: 14, height: 14, className: I().metaMark }),
        (0, n.jsx)("span", {
          className: I().metaText,
          children: (0, n.jsx)(d.N, {
            initial: false,
            children: eo ? (0, n.jsx)(q, {
              id: "scoring",
              reduced: f2,
              children: `Scoring ${y2.length} leads with Claude Sonnet 5.5`
            }) : (0, n.jsx)(q, {
              id: "scored",
              reduced: f2,
              children: `${y2.length} new today, scored by Claude Sonnet 5.5`
            })
          })
        })
      ]
    });
    return (0, n.jsxs)("section", {
      ref: K2,
      className: F(I().root, g2),
      "aria-label": t2,
      "data-offscreen": B2 || void 0,
      onPointerDownCapture: es,
      onKeyDownCapture: es,
      children: [
        (0, n.jsxs)("header", {
          className: I().head,
          children: [
            (0, n.jsxs)("div", {
              className: I().headText,
              children: [
                (0, n.jsx)("h3", { className: I().title, children: t2 }),
                (0, n.jsx)("p", { className: I().meta, children: ed })
              ]
            }),
            (0, n.jsxs)("div", {
              className: I().headActions,
              children: [
                (0, n.jsx)(T.A, {
                  label: "Sort leads",
                  value: j2,
                  onValueChange: (e3) => ea(e3),
                  options: [
                    { value: "score", label: "Score" },
                    { value: "newest", label: "Newest" }
                  ]
                }),
                (_2 || h2) && (0, n.jsx)(M.m, {
                  content: "Rescore",
                  children: (0, n.jsx)(N.$, {
                    variant: "ghost",
                    size: "sm",
                    "aria-label": "Rescore leads",
                    className: I().iconButton,
                    onClick: el,
                    disabled: eo > 0,
                    children: (0, n.jsx)(A.A, {
                      size: 16,
                      "aria-hidden": "true"
                    })
                  })
                })
              ]
            })
          ]
        }),
        et.length ? (0, n.jsx)("ul", {
          ref: G2,
          className: I().list,
          onKeyDown: (e3) => {
            if ("ArrowDown" !== e3.key && "ArrowUp" !== e3.key && "Home" !== e3.key && "End" !== e3.key)
              return;
            let t3 = Array.from(
              G2.current?.querySelectorAll("[data-row]") ?? []
            ), a3 = t3.indexOf(document.activeElement);
            if (a3 < 0) return;
            e3.preventDefault();
            let n2 = "Home" === e3.key ? 0 : "End" === e3.key ? t3.length - 1 : Math.max(
              0,
              Math.min(
                t3.length - 1,
                a3 + ("ArrowDown" === e3.key ? 1 : -1)
              )
            );
            t3[n2]?.focus();
          },
          children: et.map(
            (e3) => (0, n.jsx)(
              X,
              {
                lead: e3,
                scoring: ee2(e3),
                expanded: w2 === e3.id,
                onToggle: () => k2((t3) => t3 === e3.id ? null : e3.id),
                crms: o2,
                crm: S2,
                onCrmChange: C2,
                pushState: (t3) => en(e3, t3),
                onPush: () => {
                  er(e3, S2);
                },
                reduced: f2
              },
              e3.id
            )
          )
        }) : (0, n.jsxs)("div", {
          className: I().empty,
          children: [
            (0, n.jsx)("p", {
              className: I().emptyTitle,
              children: "No new leads"
            }),
            (0, n.jsx)("p", {
              className: I().emptyText,
              children: "Inbound leads are scored here as they arrive."
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: I().srOnly,
          "aria-live": "polite",
          children: H2
        })
      ]
    });
  }
  let ee = J;
}

__m(__module,__exports,__require);
}