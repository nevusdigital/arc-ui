function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { DomainVerify: () => F, default: () => Y });
  var i = a(95155), n = a(12115), r = a(80642), s = a(25354), o = a(18310), l = a(61792), d = a(92571), c = a(23723), u = a(64962), p = a(35484), m = a(50626), y = a(5736), f = a(9005), h = a(51288), _ = a(73474), v = a(52898), g = a(7770);
  function x({ size: e2 = 14 }) {
    return (0, i.jsx)("svg", {
      width: e2,
      height: e2,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: (0, i.jsx)("path", {
        fill: "#F38020",
        d: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"
      })
    });
  }
  function b({ title: e2 = "Northwind", ...t2 }) {
    let a2 = (0, n.useId)().replace(/:/g, "");
    return (0, i.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, i.jsxs)("defs", {
          children: [
            (0, i.jsxs)("linearGradient", {
              id: `${a2}-light`,
              x1: "8",
              y1: "3",
              x2: "8",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, i.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".42"
                }),
                (0, i.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: ".72"
                })
              ]
            }),
            (0, i.jsxs)("linearGradient", {
              id: `${a2}-dark`,
              x1: "16",
              y1: "3",
              x2: "16",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, i.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".88"
                }),
                (0, i.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: "1"
                })
              ]
            })
          ]
        }),
        (0, i.jsx)("path", {
          d: "M12 2.5 4.75 20.75 12 16.9Z",
          fill: `url(#${a2}-light)`
        }),
        (0, i.jsx)("path", {
          d: "M12 2.5 19.25 20.75 12 16.9Z",
          fill: `url(#${a2}-dark)`
        })
      ]
    });
  }
  let j = "app.acme.com", N = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/;
  function k(e2) {
    return e2.trim().toLowerCase().replace(/^[a-z]+:\/\//, "").replace(/[/?#:].*$/, "").replace(/\.$/, "");
  }
  function w(e2, t2 = "edge.northwind.app") {
    let a2 = e2.split("."), i2 = a2.length <= 2, n2 = i2 ? "@" : a2.slice(0, -2).join(".");
    return [
      i2 ? {
        id: "route",
        type: "A",
        name: "@",
        value: "203.0.113.24",
        purpose: "Routes traffic to Northwind"
      } : {
        id: "route",
        type: "CNAME",
        name: n2,
        value: t2,
        purpose: "Routes traffic to Northwind"
      },
      {
        id: "owner",
        type: "TXT",
        name: i2 ? "_northwind" : `_northwind.${n2}`,
        value: `northwind-verify=${(function(e3) {
          let t3 = 2166136261, a3 = 16777619;
          for (let i3 of e3)
            t3 = Math.imul(t3 ^ i3.charCodeAt(0), 16777619) >>> 0, a3 = Math.imul(a3 ^ i3.charCodeAt(0), 2246822507) >>> 0;
          return (t3.toString(16).padStart(8, "0") + a3.toString(16).padStart(8, "0")).slice(0, 16);
        })(e2)}`,
        purpose: "Proves you own the domain"
      },
      {
        id: "ssl",
        type: "CAA",
        name: n2,
        value: '0 issue "letsencrypt.org"',
        purpose: "Lets Let's Encrypt issue the certificate"
      }
    ];
  }
  function S(e2, t2) {
    return new Promise((a2, i2) => {
      if (t2?.aborted) return i2(t2.reason);
      let n2 = setTimeout(a2, e2);
      t2?.addEventListener(
        "abort",
        () => {
          clearTimeout(n2), i2(t2.reason);
        },
        { once: true }
      );
    });
  }
  async function C(e2, t2) {
    return await S(520, t2), w(e2);
  }
  async function T(e2, t2, { signal: a2, attempt: i2, run: n2 }) {
    await S(620, a2);
    let r2 = t2.find((e3) => "route" === e3.id), s2 = r2?.type === "CNAME" ? "104.21.48.112" : "172.67.141.9", o2 = (e3) => `Seen in ${e3} of 3 regions`, l2 = (e3, t3) => ({ id: e3, ...t3 }), d2 = (e3) => l2(e3, { status: "valid", detail: "Matches in all regions" });
    return 0 === n2 ? 0 === i2 ? {
      regions: { propagated: 1, total: 3 },
      records: [
        l2("route", { status: "missing", detail: "Not found yet" }),
        d2("owner"),
        l2("ssl", { status: "missing", detail: o2(1) })
      ]
    } : {
      regions: { propagated: 2, total: 3 },
      records: [
        l2("route", {
          status: "invalid",
          found: s2,
          fix: "Set the Cloudflare proxy status to DNS only."
        }),
        d2("owner"),
        d2("ssl")
      ]
    } : 0 === i2 ? {
      regions: { propagated: 2, total: 3 },
      records: [
        l2("route", {
          status: "missing",
          detail: `Updated value ${o2(2).toLowerCase()}`
        }),
        d2("owner"),
        d2("ssl")
      ]
    } : {
      regions: { propagated: 3, total: 3 },
      records: [d2("route"), d2("owner"), d2("ssl")]
    };
  }
  async function $(e2, t2) {
    return await S(1100, t2), { issuer: "Let's Encrypt", renews: "Jan 25, 2027" };
  }
  var A = a(72448), E = a.n(A);
  let z = [...g.T.ease.standard], O = { duration: 0.16, ease: z }, M = { duration: 0.1, ease: z }, L = { type: "spring", visualDuration: 0.24, bounce: 0 }, R = { duration: 0 };
  function I({ id: e2, children: t2, className: a2, reduced: n2 }) {
    return (0, i.jsx)("span", {
      className: [E().swap, a2].filter(Boolean).join(" "),
      children: (0, i.jsx)(r.N, {
        initial: false,
        children: (0, i.jsx)(
          s.PY1.span,
          {
            className: E().swapItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 0, transition: n2 ? R : M },
            transition: n2 ? R : O,
            children: t2
          },
          e2
        )
      })
    });
  }
  function D() {
    return (0, i.jsx)(d.A, {
      size: 16,
      strokeWidth: 1.75,
      className: E().spin,
      "aria-hidden": "true"
    });
  }
  let P = {
    pending: {
      label: "Not checked",
      icon: (0, i.jsx)(c.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    checking: { label: "Checking", icon: (0, i.jsx)(D, {}) },
    valid: {
      label: "Valid",
      icon: (0, i.jsx)(u.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    missing: {
      label: "Not found",
      icon: (0, i.jsx)(c.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    invalid: {
      label: "Misconfigured",
      icon: (0, i.jsx)(p.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    }
  }, W = {
    adding: {
      key: "pending",
      label: "Pending",
      icon: (0, i.jsx)(c.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    records: {
      key: "pending",
      label: "Pending",
      icon: (0, i.jsx)(c.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    checking: { key: "checking", label: "Checking", icon: (0, i.jsx)(D, {}) },
    invalid: {
      key: "invalid",
      label: "Misconfigured",
      icon: (0, i.jsx)(p.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    verified: {
      key: "valid",
      label: "Verified",
      icon: (0, i.jsx)(u.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    }
  }, B = (e2) => e2 instanceof DOMException && "AbortError" === e2.name;
  function F({
    defaultDomain: e2 = j,
    title: t2 = "Custom domain",
    description: a2 = "Serve your workspace from a domain you own.",
    provider: d2 = { name: "Cloudflare", mark: (0, i.jsx)(x, {}) },
    getRecords: c2,
    verify: u2,
    issueCertificate: p2,
    pollInterval: g2,
    autoPlay: A2,
    onPhaseChange: D2,
    onVerified: Y2,
    onRemove: G,
    className: U
  }) {
    let V = (0, o.I)() ?? false, H = !u2, q = A2 ?? (!c2 && !u2 && !p2), X = g2 ?? (u2 ? 5e3 : 800), K = (0, n.useId)(), Q = (0, n.useRef)(null), Z = (0, n.useRef)(null), J = (0, l.W)(Q, { margin: "64px" }), [ee, et] = (0, n.useState)("enter"), [ea, ei] = (0, n.useState)(e2), [en, er] = (0, n.useState)(false), [es, eo] = (0, n.useState)(k(e2)), [el, ed] = (0, n.useState)(() => {
      var t3;
      return w((t3 = k(e2), N.test(t3)) ? k(e2) : j);
    }), [ec, eu] = (0, n.useState)({}), [ep, em] = (0, n.useState)(null), [ey, ef] = (0, n.useState)(null), [eh, e_] = (0, n.useState)(null), [ev, eg] = (0, n.useState)(""), [ex, eb] = (0, n.useState)(false), ej = (0, n.useRef)(0), eN = (0, n.useRef)(null), ek = (0, n.useRef)(false), ew = (0, n.useCallback)(
      (e3) => {
        et(e3), D2?.(e3);
      },
      [D2]
    ), eS = (0, n.useCallback)(
      (e3) => eg(H ? `${e3} Simulated, no DNS was queried.` : e3),
      [H]
    ), eC = () => {
      eN.current?.abort();
      let e3 = new AbortController();
      return eN.current = e3, e3;
    };
    async function eT() {
      let e3 = k(ea);
      if (!N.test(e3)) {
        er(true), eS("Enter a valid domain, like app.acme.com."), Z.current?.focus();
        return;
      }
      let t3 = eC();
      er(false), e_(null), eo(e3), ew("adding");
      try {
        let a3 = await (c2 ?? C)(e3, t3.signal);
        ej.current = 0, ed(a3), eu(Object.fromEntries(a3.map((e4) => [e4.id, { status: "pending" }]))), em(null), ef(null), ew("records"), eS(`${e3} added. Add ${a3.length} DNS records, then verify.`);
      } catch (e4) {
        if (B(e4)) return;
        ew("enter"), e_("Could not add the domain. Try again."), eS("Could not add the domain.");
      }
    }
    async function e$() {
      let e3 = eC(), t3 = ej.current++;
      e_(null), ew("checking"), eS(`Checking DNS for ${es}.`), eu(
        (e4) => Object.fromEntries(
          el.map((t4) => [
            t4.id,
            e4[t4.id]?.status === "valid" ? e4[t4.id] : { ...e4[t4.id], status: "checking" }
          ])
        )
      );
      try {
        for (let a3 = 0; ; a3++) {
          let i2 = await (u2 ?? T)(es, el, {
            signal: e3.signal,
            attempt: a3,
            run: t3
          }), n2 = new Map(i2.records.map((e4) => [e4.id, e4])), r2 = el.every((e4) => n2.get(e4.id)?.status === "valid"), s2 = el.some((e4) => n2.get(e4.id)?.status === "invalid");
          if (em(i2.regions), eu(
            Object.fromEntries(
              el.map((e4) => {
                let t4 = n2.get(e4.id), a4 = t4 && ("missing" !== t4.status || s2) ? t4.status : "checking";
                return [e4.id, { status: a4, check: t4 }];
              })
            )
          ), s2) {
            let e4 = el.filter((e5) => n2.get(e5.id)?.status === "invalid").length;
            ew("invalid"), eS(`${1 === e4 ? "1 record needs" : `${e4} records need`} a fix.`);
            return;
          }
          if (r2) {
            ew("verified"), eS(`${es} verified. Issuing the SSL certificate.`);
            let t4 = await (p2 ?? $)(es, e3.signal);
            ef(t4), eS(`SSL certificate issued by ${t4.issuer}. ${es} is live.`), Y2?.(es, t4);
            return;
          }
          await S(X, e3.signal);
        }
      } catch (e4) {
        if (B(e4)) return;
        ew("invalid"), e_("The check failed. Try again."), eS("The DNS check failed.");
      }
    }
    function eA(t3) {
      eN.current?.abort(), "enter" !== ee && G?.(es), eu({}), em(null), ef(null), e_(null), er(false), ei(t3 ? "" : e2), ek.current = t3, ew("enter");
    }
    (0, n.useEffect)(() => () => eN.current?.abort(), []), (0, n.useEffect)(() => {
      "enter" === ee && ek.current && (ek.current = false, Z.current?.focus());
    }, [ee]);
    let eE = (0, n.useEffectEvent)((e3) => {
      "enter" === e3 ? eT() : "records" === e3 || "invalid" === e3 ? e$() : eA(false);
    });
    (0, n.useEffect)(() => {
      if (!q || ex || !J) return;
      let e3 = "enter" === ee ? 1100 : "records" === ee ? 1300 : "invalid" === ee ? 2600 : "verified" === ee && ey ? 3400 : 0;
      if (!e3) return;
      let t3 = setTimeout(() => eE(ee), e3);
      return () => clearTimeout(t3);
    }, [q, ex, J, ee, ey]);
    let ez = () => {
      q && !ex && eb(true);
    }, eO = (0, n.useRef)(null), [eM, eL] = (0, n.useState)(null);
    (0, n.useLayoutEffect)(() => {
      let e3 = eO.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = e3.offsetHeight;
        eL(
          (e4) => e4 && !e4.first && e4.height === t4 ? e4 : { height: t4, first: null === e4 }
        );
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let eR = eM?.height ?? null, eI = eM?.first ?? true, eD = "enter" === ee || "adding" === ee, eP = ep?.total ?? 3, eW = ep?.propagated ?? 0, eB = el.filter((e3) => ec[e3.id]?.status === "invalid").length, eF = eh ? {
      key: "failure",
      primary: eh,
      secondary: "enter" === ee ? "Check the domain and try again" : "No changes were made"
    } : "enter" === ee && en ? {
      key: "error",
      primary: "Enter a valid domain",
      secondary: "For example app.acme.com"
    } : eD ? {
      key: "enter",
      primary: "Add a domain",
      secondary: "Use a domain or subdomain you own"
    } : "records" === ee ? {
      key: "records",
      primary: `Add ${el.length} records${d2 ? ` at ${d2.name}` : ""}`,
      secondary: "Changes can take a few minutes"
    } : "checking" === ee ? {
      key: "checking",
      primary: "Checking DNS",
      secondary: ep ? `Propagated in ${eW} of ${eP} regions` : `Querying ${eP} regions`
    } : "invalid" === ee ? {
      key: "invalid",
      primary: `${1 === eB ? "1 record needs" : `${eB} records need`} a fix`,
      secondary: `Propagated in ${eW} of ${eP} regions`
    } : ey ? {
      key: "live",
      primary: "Domain verified",
      secondary: `Live in ${eP} of ${eP} regions`
    } : {
      key: "issuing",
      primary: "Domain verified",
      secondary: "Issuing the SSL certificate"
    }, eY = "enter" === ee || "adding" === ee ? {
      label: "adding" === ee ? "Adding" : "Add domain",
      run: () => void eT(),
      loading: "adding" === ee,
      disabled: !ea.trim(),
      variant: "primary"
    } : "records" === ee ? {
      label: "Verify DNS",
      run: () => void e$(),
      loading: false,
      disabled: false,
      variant: "primary"
    } : "checking" === ee ? {
      label: "Checking",
      run: () => {
      },
      loading: true,
      disabled: false,
      variant: "primary"
    } : "invalid" === ee ? {
      label: "Check again",
      run: () => void e$(),
      loading: false,
      disabled: false,
      variant: "primary"
    } : {
      label: "Add another",
      run: () => eA(true),
      loading: false,
      disabled: !ey,
      variant: "secondary"
    }, eG = eD ? null : W[ee];
    return (0, i.jsxs)("section", {
      ref: Q,
      className: [E().root, U].filter(Boolean).join(" "),
      "aria-labelledby": `${K}-title`,
      onPointerDownCapture: ez,
      onKeyDownCapture: ez,
      children: [
        (0, i.jsx)(s.PY1.div, {
          className: E().clip,
          initial: false,
          animate: null === eR ? void 0 : { height: eR },
          transition: V || eI ? R : L,
          children: (0, i.jsxs)("div", {
            ref: eO,
            children: [
              (0, i.jsxs)("div", {
                className: E().body,
                children: [
                  (0, i.jsxs)("header", {
                    className: E().header,
                    children: [
                      (0, i.jsx)("h3", {
                        id: `${K}-title`,
                        className: E().title,
                        children: t2
                      }),
                      (0, i.jsx)("p", {
                        className: E().description,
                        children: a2
                      })
                    ]
                  }),
                  (0, i.jsxs)("div", {
                    className: E().domain,
                    "data-phase": ee,
                    "data-error": en || void 0,
                    children: [
                      (0, i.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        className: E().globe,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)(r.N, {
                        initial: false,
                        children: eD ? (0, i.jsxs)(
                          s.PY1.div,
                          {
                            className: E().domainSlot,
                            initial: V ? { opacity: 0 } : { opacity: 0, y: 2 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, transition: V ? R : M },
                            transition: V ? R : O,
                            children: [
                              (0, i.jsx)("label", {
                                htmlFor: K,
                                className: E().srOnly,
                                children: "Domain"
                              }),
                              (0, i.jsx)("input", {
                                ref: Z,
                                id: K,
                                className: E().input,
                                value: ea,
                                placeholder: "app.acme.com",
                                inputMode: "url",
                                autoComplete: "off",
                                autoCapitalize: "off",
                                spellCheck: false,
                                disabled: "adding" === ee,
                                "aria-invalid": en || void 0,
                                "aria-describedby": `${K}-status`,
                                onChange: (e3) => {
                                  ei(e3.target.value), en && er(false);
                                },
                                onKeyDown: (e3) => {
                                  "Enter" === e3.key && (e3.preventDefault(), eT());
                                }
                              })
                            ]
                          },
                          "field"
                        ) : (0, i.jsxs)(
                          s.PY1.div,
                          {
                            className: E().domainSlot,
                            initial: V ? { opacity: 0 } : { opacity: 0, y: 2 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, transition: V ? R : M },
                            transition: V ? R : O,
                            children: [
                              (0, i.jsxs)("span", {
                                className: E().domainText,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: E().domainName,
                                    title: es,
                                    children: es
                                  }),
                                  (0, i.jsx)(I, {
                                    id: "verified" === ee ? ey ? "ssl" : "issuing" : "dns",
                                    className: E().domainMeta,
                                    reduced: V,
                                    children: "verified" === ee ? ey ? (0, i.jsxs)("span", {
                                      className: E().metaLine,
                                      children: [
                                        (0, i.jsx)(y.A, {
                                          size: 14,
                                          strokeWidth: 1.75,
                                          className: E().metaIcon,
                                          "aria-hidden": "true"
                                        }),
                                        (0, i.jsxs)("span", {
                                          className: E().ellipsis,
                                          children: [
                                            "SSL by ",
                                            ey.issuer,
                                            (0, i.jsxs)("span", {
                                              className: E().wide,
                                              children: [
                                                ", renews ",
                                                ey.renews
                                              ]
                                            })
                                          ]
                                        })
                                      ]
                                    }) : (0, i.jsxs)("span", {
                                      className: E().metaLine,
                                      children: [
                                        (0, i.jsx)(y.A, {
                                          size: 14,
                                          strokeWidth: 1.75,
                                          className: E().metaIcon,
                                          "aria-hidden": "true"
                                        }),
                                        (0, i.jsx)(v.n, {
                                          className: E().ellipsis,
                                          children: "Issuing SSL"
                                        })
                                      ]
                                    }) : d2 ? (0, i.jsxs)("span", {
                                      className: E().metaLine,
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: E().metaIcon,
                                          children: d2.mark
                                        }),
                                        (0, i.jsxs)("span", {
                                          className: E().ellipsis,
                                          children: [
                                            "DNS ",
                                            (0, i.jsx)("span", {
                                              className: E().wide,
                                              children: "hosted "
                                            }),
                                            "at ",
                                            d2.name
                                          ]
                                        })
                                      ]
                                    }) : (0, i.jsx)("span", {
                                      className: E().ellipsis,
                                      children: "Waiting for DNS records"
                                    })
                                  })
                                ]
                              }),
                              (0, i.jsx)(I, {
                                id: eG?.key ?? "none",
                                className: E().status,
                                reduced: V,
                                children: eG && (0, i.jsxs)("span", {
                                  className: E().statusInner,
                                  "data-status": eG.key,
                                  children: [
                                    eG.icon,
                                    (0, i.jsx)("span", {
                                      children: eG.label
                                    })
                                  ]
                                })
                              }),
                              (0, i.jsx)(h.$, {
                                variant: "ghost",
                                size: "sm",
                                className: E().remove,
                                "aria-label": `Remove ${es}`,
                                onClick: () => eA(false),
                                children: (0, i.jsx)(f.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            ]
                          },
                          "domain"
                        )
                      })
                    ]
                  }),
                  (0, i.jsxs)("div", {
                    className: E().table,
                    "data-empty": eD || void 0,
                    children: [
                      (0, i.jsxs)("div", {
                        className: E().head,
                        "aria-hidden": "true",
                        children: [
                          (0, i.jsx)("span", { children: "Type" }),
                          (0, i.jsx)("span", { children: "Name" }),
                          (0, i.jsx)("span", { children: "Value" }),
                          (0, i.jsx)("span", {
                            className: E().headStatus,
                            children: "Status"
                          })
                        ]
                      }),
                      (0, i.jsx)("ul", {
                        className: E().rows,
                        "aria-label": "DNS records",
                        inert: eD || void 0,
                        children: el.map((e3, t3) => {
                          let a3 = ec[e3.id] ?? { status: "pending" }, n2 = "invalid" === a3.status && a3.check ? {
                            key: `invalid-${a3.check.found}`,
                            node: (0, i.jsxs)(i.Fragment, {
                              children: [
                                a3.check.found && (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    "Found ",
                                    (0, i.jsx)("code", {
                                      className: E().found,
                                      children: a3.check.found
                                    }),
                                    ". "
                                  ]
                                }),
                                a3.check.fix
                              ]
                            })
                          } : {
                            key: a3.check?.detail ?? `purpose-${"valid" === a3.status ? "valid" : ""}`,
                            node: a3.check?.detail ?? (c2 || "route" !== e3.id ? e3.purpose ?? "" : (0, i.jsxs)(i.Fragment, {
                              children: [
                                "Routes traffic to ",
                                (0, i.jsx)("span", {
                                  className: E().inlineMark,
                                  children: (0, i.jsx)(b, {})
                                }),
                                "Northwind"
                              ]
                            }))
                          };
                          return (0, i.jsxs)(
                            s.PY1.li,
                            {
                              className: E().row,
                              "data-status": a3.status,
                              initial: false,
                              animate: { opacity: +!eD },
                              transition: V ? R : {
                                duration: 0.16,
                                ease: z,
                                delay: eD ? 0 : 0.04 * t3
                              },
                              children: [
                                (0, i.jsx)("span", {
                                  className: E().type,
                                  children: e3.type
                                }),
                                (0, i.jsx)("span", {
                                  className: E().name,
                                  title: e3.name,
                                  children: e3.name
                                }),
                                (0, i.jsxs)("span", {
                                  className: E().value,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: E().valueText,
                                      title: e3.value,
                                      children: e3.value
                                    }),
                                    (0, i.jsx)(_.CopyButton, {
                                      value: e3.value,
                                      iconOnly: true,
                                      variant: "plain",
                                      label: `Copy ${e3.type} value`,
                                      className: E().copy
                                    })
                                  ]
                                }),
                                (0, i.jsx)(I, {
                                  id: a3.status,
                                  className: E().status,
                                  reduced: V,
                                  children: (0, i.jsxs)("span", {
                                    className: E().statusInner,
                                    "data-status": a3.status,
                                    children: [
                                      P[a3.status].icon,
                                      (0, i.jsx)("span", {
                                        children: P[a3.status].label
                                      })
                                    ]
                                  })
                                }),
                                (0, i.jsx)(I, {
                                  id: n2.key,
                                  className: E().meta,
                                  reduced: V,
                                  children: (0, i.jsx)("span", {
                                    className: "invalid" === a3.status ? E().hint : E().ellipsis,
                                    children: n2.node
                                  })
                                })
                              ]
                            },
                            e3.id
                          );
                        })
                      }),
                      (0, i.jsx)(r.N, {
                        initial: false,
                        children: eD && (0, i.jsx)(
                          s.PY1.p,
                          {
                            className: E().empty,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0, transition: V ? R : M },
                            transition: V ? R : O,
                            children: "DNS records appear here after you add a domain"
                          },
                          "empty"
                        )
                      })
                    ]
                  })
                ]
              }),
              (0, i.jsxs)("footer", {
                className: E().footer,
                children: [
                  (0, i.jsxs)("div", {
                    className: E().footerText,
                    id: `${K}-status`,
                    children: [
                      (0, i.jsx)(I, {
                        id: eF.key + eF.primary,
                        className: E().footerPrimary,
                        reduced: V,
                        children: "checking" !== ee || eh ? (0, i.jsx)("span", {
                          className: E().ellipsis,
                          "data-tone": "error" === eF.key || "failure" === eF.key ? "danger" : void 0,
                          children: eF.primary
                        }) : (0, i.jsx)(v.n, {
                          className: E().ellipsis,
                          children: eF.primary
                        })
                      }),
                      (0, i.jsx)(I, {
                        id: eF.secondary,
                        className: E().footerSecondary,
                        reduced: V,
                        children: (0, i.jsx)("span", {
                          className: E().ellipsis,
                          children: eF.secondary
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)(h.$, {
                    variant: eY.variant,
                    size: "sm",
                    loading: eY.loading,
                    disabled: eY.disabled,
                    onClick: eY.run,
                    className: E().action,
                    children: eY.label
                  })
                ]
              })
            ]
          })
        }),
        (0, i.jsx)("span", {
          className: E().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ev
        })
      ]
    });
  }
  let Y = F;
};

__m(__module,__exports,__require);
}