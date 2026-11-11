function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { ResearchRun: () => em, default: () => ef });
  var s = r(95155), a = r(12115), n = r(25354), i = r(80642), o = r(12363), l = r(64577), c = r(40852), u = r(92571), d = r(35484), h = r(92298), p = r(36408), m = r(38158), f = r(2125), _ = r(19805), g = r(7770), x = r(28245), y = r(92171), w = r(18310), j = r(99314), v = r(49907), b = r.n(v), k = r(55665);
  let N = () => () => {
  };
  function q() {
    let e2 = (0, w.I)();
    return !!((0, a.useSyncExternalStore)(
      N,
      () => true,
      () => false
    ) && e2);
  }
  function S(e2, t2) {
    let r2 = [], s2 = false, a2 = "", n2 = false, i2 = 0, o2 = t2.n, l2 = false, c2 = (e3) => {
      l2 && "cite" !== e3.kind && (o2 = t2.n, l2 = false), r2.push({ ...e3, space: n2 && r2.length > 0, index: t2.n++, sentence: o2 }), n2 = false, "text" === e3.kind && /[.!?]["”)]?$/.test(e3.text) && (l2 = true);
    }, u2 = () => {
      for (let e3 of a2.split(/(\s+)/))
        e3 && (/^\s+$/.test(e3) ? n2 = true : c2({ kind: "text", text: e3, bold: s2 }));
      a2 = "";
    };
    for (; i2 < e2.length; ) {
      if (e2.startsWith("**", i2)) {
        u2(), s2 = !s2, i2 += 2;
        continue;
      }
      if ("`" === e2[i2]) {
        u2();
        let t3 = e2.indexOf("`", i2 + 1);
        if (-1 === t3) break;
        t3 > i2 + 1 && c2({ kind: "code", text: e2.slice(i2 + 1, t3) }), i2 = t3 + 1;
        continue;
      }
      if ("[" === e2[i2]) {
        let t3 = /^\[(\d{1,2})\]/.exec(e2.slice(i2, i2 + 4));
        if (t3) {
          u2(), c2({ kind: "cite", n: Number(t3[1]) }), i2 += t3[0].length;
          continue;
        }
        if (/^\[\d{0,2}$/.test(e2.slice(i2))) break;
      }
      a2 += e2[i2++];
    }
    return u2(), r2;
  }
  let T = /^\s*(#{1,6}|[-*+]|\d+[.)]?|`{1,3}\w*)\s*$/, A = (0, a.memo)(
    function({ units: e2, enter: t2, cite: r2 }) {
      let a2 = e2[0]?.space && "cite" === e2[0].kind ? " " : null;
      return (0, s.jsxs)("span", {
        className: t2 ? b().enter : void 0,
        children: [
          a2,
          e2.map(
            (e3) => (function(e4, t3) {
              if ("cite" === e4.kind)
                return (0, s.jsx)(
                  "span",
                  {
                    className: b().cite,
                    children: t3 ? t3(e4.n, e4.sentence) : (0, s.jsx)("sup", { children: e4.n })
                  },
                  e4.index
                );
              if ("line" === e4.kind)
                return (0, s.jsx)(
                  "span",
                  { className: b().codeLine, children: e4.text || " " },
                  e4.index
                );
              let r3 = "code" === e4.kind ? (0, s.jsx)("code", {
                className: b().inlineCode,
                children: e4.text
              }) : e4.bold ? (0, s.jsx)("strong", {
                className: b().strong,
                children: e4.text
              }) : e4.text;
              return (0, s.jsxs)(
                "span",
                { "data-s": e4.sentence, children: [e4.space ? " " : null, r3] },
                e4.index
              );
            })(e3, r2.current)
          )
        ]
      });
    },
    (e2, t2) => e2.enter === t2.enter && e2.units.length === t2.units.length && e2.units[0]?.index === t2.units[0]?.index
  );
  function E() {
    return (0, s.jsx)(n.PY1.span, {
      className: b().waiting,
      "aria-hidden": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: g.T.duration.standard },
      children: (0, s.jsx)("span", {})
    });
  }
  function L() {
    let [e2, t2] = (0, a.useState)("idle"), r2 = (0, a.useRef)(0);
    return (0, a.useEffect)(() => () => window.clearTimeout(r2.current), []), {
      state: e2,
      copy: (0, a.useCallback)(async (e3) => {
        window.clearTimeout(r2.current);
        try {
          await (0, k.a)(e3), t2("copied");
        } catch {
          t2("failed");
        }
        r2.current = window.setTimeout(() => t2("idle"), 1800);
      }, [])
    };
  }
  let M = [...g.T.ease.standard], R = { duration: 0.16, ease: M }, C = { duration: 0.1, ease: M }, $ = ["idle", "copied", "failed"];
  function P({ reduced: e2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: (0, s.jsx)(n.PY1.path, {
        d: "M4 12l5 5L20 6",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.22, ease: M, delay: 0.04 }
      })
    });
  }
  function I({ state: e2, idle: t2 = "Copy", done: r2 = "Copied" }) {
    var o2;
    let l2, c2, u2 = (0, w.I)() ?? false, h2 = { idle: t2, copied: r2, failed: "Try again" }, p2 = (0, a.useRef)({}), [m2, f2] = (0, a.useState)({});
    (0, a.useLayoutEffect)(() => {
      let e3 = () => f2(
        Object.fromEntries($.map((e4) => [e4, p2.current[e4]?.offsetWidth ?? 0]))
      );
      if (e3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(e3);
      return $.forEach((e4) => {
        let r3 = p2.current[e4];
        r3 && t3.observe(r3);
      }), () => t3.disconnect();
    }, [t2, r2]);
    let _2 = (o2 = m2[e2], l2 = (0, x.d)("auto"), c2 = (0, a.useRef)(false), (0, a.useLayoutEffect)(() => {
      if (!o2) return;
      if (!c2.current || u2) {
        c2.current = true, l2.jump(o2);
        return;
      }
      let e3 = (0, y.i)(l2, o2, {
        type: "spring",
        visualDuration: 0.22,
        bounce: 0
      });
      return () => e3.stop();
    }, [o2, u2, l2]), l2);
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)("span", {
          className: b().iconSlot,
          "aria-hidden": "true",
          children: (0, s.jsx)(i.N, {
            initial: false,
            children: (0, s.jsx)(
              n.PY1.span,
              {
                "data-state": e2,
                initial: u2 ? { opacity: 0 } : { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, transition: u2 ? { duration: 0 } : C },
                transition: u2 ? { duration: 0 } : R,
                children: "copied" === e2 ? (0, s.jsx)(P, { reduced: u2 }) : "failed" === e2 ? (0, s.jsx)(d.A, {}) : (0, s.jsx)(j.A, {})
              },
              e2
            )
          })
        }),
        (0, s.jsxs)(n.PY1.span, {
          className: b().swap,
          "aria-hidden": "true",
          style: { width: _2 },
          children: [
            $.map(
              (e3) => (0, s.jsx)(
                "span",
                {
                  ref: (t3) => {
                    p2.current[e3] = t3;
                  },
                  className: b().swapMeasure,
                  children: h2[e3]
                },
                e3
              )
            ),
            (0, s.jsx)(i.N, {
              initial: false,
              children: (0, s.jsx)(
                n.PY1.span,
                {
                  className: b().swapText,
                  initial: u2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, transition: u2 ? { duration: 0 } : C },
                  transition: u2 ? { duration: 0 } : R,
                  children: h2[e2]
                },
                e2
              )
            })
          ]
        })
      ]
    });
  }
  function H({ lang: e2, source: t2, children: r2 }) {
    let { state: a2, copy: n2 } = L();
    return (0, s.jsxs)("div", {
      className: b().codeBlock,
      children: [
        (0, s.jsxs)("div", {
          className: b().codeHeader,
          children: [
            (0, s.jsx)("span", { children: e2 || "Code" }),
            (0, s.jsx)("button", {
              type: "button",
              className: b().codeCopy,
              onClick: () => n2(t2),
              "aria-label": "copied" === a2 ? "Code copied" : "Copy code",
              children: (0, s.jsx)(I, { state: a2 })
            })
          ]
        }),
        (0, s.jsx)("pre", {
          className: b().pre,
          children: (0, s.jsx)("code", { children: r2 })
        })
      ]
    });
  }
  function B({ children: e2, reduced: t2 }) {
    return (0, s.jsx)("span", {
      className: t2 ? b().statusStatic : b().shimmer,
      children: e2
    });
  }
  function F({
    text: e2,
    streaming: t2,
    markdown: r2 = true,
    smooth: o2 = true,
    pace: l2,
    placeholder: c2,
    renderCite: u2,
    onShown: d2,
    onRevealed: h2,
    className: p2
  }) {
    let m2, f2 = q(), { text: _2, revealing: x2 } = (function(e3, { streaming: t3, pace: r3 = 70, enabled: s2 = true }) {
      let [n2, i2] = (0, a.useState)(() => t3 ? 0 : e3.length), [o3, l3] = (0, a.useState)(e3), c3 = n2;
      o3 !== e3 && (l3(e3), e3.startsWith(o3) || (c3 = 0, i2(0)));
      let u3 = (0, a.useRef)(c3), d3 = (0, a.useRef)(e3), h3 = (0, a.useRef)([]), p3 = (0, a.useRef)(0);
      (0, a.useEffect)(() => {
        let a2 = performance.now();
        e3.startsWith(d3.current) || (u3.current = 0, h3.current = []), d3.current = e3;
        let n3 = h3.current;
        for (n3.push([a2, e3.length]); n3.length > 2 && a2 - n3[1][0] > 1500; )
          n3.shift();
        if (!s2) {
          u3.current = e3.length;
          return;
        }
        let o4 = 0, l4 = a2, c4 = -1, m4 = p3.current, f3 = (s3) => {
          let a3 = Math.min(0.05, Math.max(0, (s3 - l4) / 1e3));
          l4 = s3;
          let d4 = e3.length - u3.current;
          if (d4 > 0) {
            let s4, i3, o5, l5 = (s4 = n3[0], o5 = ((i3 = n3[n3.length - 1])[0] - s4[0]) / 1e3, n3.length > 1 && o5 > 0.2 ? Math.max(12, (i3[1] - s4[1]) / o5) : r3), c5 = t3 ? l5 * Math.min(2.5, Math.max(0.45, d4 / Math.max(1, 0.5 * l5))) : Math.max(1.5 * r3, d4 / 0.4);
            p3.current = m4 = m4 ? m4 + (c5 - m4) * Math.min(1, a3 * (t3 ? 5 : 12)) : c5, u3.current = Math.min(e3.length, u3.current + m4 * a3);
          }
          let h4 = (function(e4, t4, r4) {
            if (t4 >= e4.length && !r4) return e4.length;
            let s4 = Math.min(Math.floor(t4), e4.length);
            if (s4 < e4.length && /\s/.test(e4[s4])) return s4;
            for (; s4 > 0 && !/\s/.test(e4[s4 - 1]); ) s4--;
            return s4;
          })(e3, u3.current, t3);
          h4 !== c4 && (c4 = h4, i2(h4)), u3.current < e3.length && (o4 = requestAnimationFrame(f3));
        };
        return o4 = requestAnimationFrame(f3), () => cancelAnimationFrame(o4);
      }, [e3, t3, s2, r3]);
      let m3 = s2 ? e3.slice(0, Math.min(c3, e3.length)) : e3;
      return { text: m3, revealing: m3.length < e3.length };
    })(e2, { streaming: t2, pace: l2, enabled: o2 }), y2 = t2 || x2, { blocks: w2, count: j2 } = r2 ? (function(e3, t3) {
      let r3 = e3;
      if (t3) {
        let e4 = r3.lastIndexOf("\n");
        T.test(r3.slice(e4 + 1)) && (r3 = r3.slice(0, e4 + 1));
      }
      let s2 = { n: 0 }, a2 = [], n2 = r3.split("\n"), i2 = null, o3 = [], l3 = () => {
        o3.length && a2.push({ kind: "p", units: S(o3.join(" "), s2) }), o3 = [];
      };
      for (let e4 = 0; e4 < n2.length; e4++) {
        let r4 = n2[e4].trim(), c3 = /^```(\w*)/.exec(r4);
        if (c3) {
          l3(), i2 = null;
          let r5 = [];
          for (e4++; e4 < n2.length && !/^\s*```/.test(n2[e4]); )
            r5.push(n2[e4++]);
          let o4 = e4 < n2.length || !t3 ? r5 : r5.slice(0, -1);
          a2.push({
            kind: "code",
            lang: c3[1],
            source: r5.join("\n"),
            units: o4.map((e5) => ({
              kind: "line",
              text: e5,
              index: s2.n++,
              space: false,
              sentence: -1
            }))
          });
          continue;
        }
        if (!r4) {
          l3(), i2 = null;
          continue;
        }
        let u3 = /^[-*+]\s+(.*)$/.exec(r4), d3 = /^\d+[.)]\s+(.*)$/.exec(r4), h3 = /^#{1,6}\s+(.*)$/.exec(r4);
        if (u3 || d3) {
          l3();
          let e5 = u3 ? "ul" : "ol";
          i2 && i2.kind === e5 || (i2 = { kind: e5, items: [] }, a2.push(i2)), i2.items.push(S((u3 ?? d3)[1], s2));
          continue;
        }
        if (i2 = null, h3) {
          l3(), a2.push({ kind: "h", units: S(h3[1], s2) });
          continue;
        }
        o3.push(r4);
      }
      return l3(), { blocks: a2, count: s2.n };
    })(_2, y2) : (m2 = { n: 0 }, {
      blocks: _2.split(/\n{2,}/).filter((e3) => e3.trim()).map((e3) => ({
        kind: "p",
        units: e3.trim().split(/\s+/).map((e4, t3) => ({
          kind: "text",
          text: e4,
          bold: false,
          index: m2.n++,
          space: t3 > 0,
          sentence: -1
        }))
      })),
      count: m2.n
    }), v2 = (0, a.useRef)(u2);
    (0, a.useEffect)(() => {
      v2.current = u2;
    });
    let [k2, N2] = (0, a.useState)(() => ({
      count: j2,
      starts: [0],
      enterFrom: t2 ? 0 : j2
    })), L2 = k2;
    j2 !== k2.count && N2(
      L2 = j2 > k2.count ? {
        ...k2,
        count: j2,
        starts: k2.starts[k2.starts.length - 1] === k2.count ? k2.starts : [...k2.starts, k2.count]
      } : {
        count: j2,
        starts: k2.starts.filter((e3) => e3 < j2),
        enterFrom: Math.min(k2.enterFrom, j2)
      }
    );
    let M2 = (e3) => {
      let t3 = 0, r3 = L2.starts.length - 1;
      for (; t3 < r3; ) {
        let s2 = t3 + r3 + 1 >> 1;
        L2.starts[s2] <= e3 ? t3 = s2 : r3 = s2 - 1;
      }
      return L2.starts[t3];
    }, R2 = (e3) => {
      let t3 = [];
      for (let r3 of e3) {
        let e4 = M2(r3.index), s2 = t3[t3.length - 1];
        s2 && s2.start === e4 ? s2.units.push(r3) : t3.push({ start: e4, units: [r3] });
      }
      return t3.map(
        (e4) => (0, s.jsx)(
          A,
          { units: e4.units, enter: !f2 && e4.start >= L2.enterFrom, cite: v2 },
          e4.units[0].index
        )
      );
    }, [C2, $2] = (0, a.useState)(-1);
    (0, a.useEffect)(() => {
      if (!t2 || x2) return;
      let e3 = window.setTimeout(() => $2(j2), 450);
      return () => window.clearTimeout(e3);
    }, [t2, x2, j2]);
    let P2 = t2 && !x2 && C2 === j2 && j2 > 0, I2 = (0, s.jsx)(i.N, {
      initial: false,
      children: P2 ? (0, s.jsx)(E, {}, "wait") : null
    }), B2 = (0, a.useRef)(d2), W2 = (0, a.useRef)(h2);
    (0, a.useEffect)(() => {
      B2.current = d2, W2.current = h2;
    }), (0, a.useEffect)(() => {
      B2.current?.(_2);
    }, [_2]);
    let z2 = !y2 && _2.length > 0;
    (0, a.useEffect)(() => {
      z2 && W2.current?.();
    }, [z2]);
    let D2 = w2.length - 1, G2 = { duration: f2 ? 0 : g.T.duration.fast, ease: [...g.T.ease.standard] };
    return (0, s.jsxs)("div", {
      className: [b().stage, p2].filter(Boolean).join(" "),
      "aria-busy": y2 || void 0,
      children: [
        (0, s.jsx)(i.N, {
          initial: false,
          children: c2 && t2 && !_2.trim() ? (0, s.jsx)(
            n.PY1.div,
            {
              className: b().placeholder,
              role: "status",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: G2 },
              transition: G2,
              children: c2
            },
            "placeholder"
          ) : null
        }),
        w2.length ? (0, s.jsx)("div", {
          className: r2 ? b().markdown : b().plain,
          children: w2.map((e3, t3) => {
            let r3 = t3 === D2 ? I2 : null;
            if ("code" === e3.kind)
              return (0, s.jsxs)(
                H,
                {
                  lang: e3.lang,
                  source: e3.source,
                  children: [R2(e3.units), r3]
                },
                `c${t3}`
              );
            if ("items" in e3) {
              let a2 = e3.kind;
              return (0, s.jsx)(
                a2,
                {
                  className: b().list,
                  children: e3.items.map(
                    (t4, a3) => (0, s.jsxs)(
                      Y,
                      {
                        enter: !f2 && (t4[0]?.index ?? 0) >= L2.enterFrom,
                        children: [
                          R2(t4),
                          a3 === e3.items.length - 1 ? r3 : null
                        ]
                      },
                      a3
                    )
                  )
                },
                `${e3.kind}${t3}`
              );
            }
            return "h" === e3.kind ? (0, s.jsxs)(
              "h4",
              { className: b().heading, children: [R2(e3.units), r3] },
              `h${t3}`
            ) : (0, s.jsxs)(
              "p",
              { className: b().paragraph, children: [R2(e3.units), r3] },
              `p${t3}`
            );
          })
        }) : null
      ]
    });
  }
  function Y({ enter: e2, children: t2 }) {
    let [r2] = (0, a.useState)(e2);
    return (0, s.jsx)("li", {
      className: r2 ? b().itemEnter : void 0,
      children: t2
    });
  }
  let W = (e2, t2, r2, s2, a2, n2, i2 = "") => ({
    id: e2,
    domain: r2,
    title: s2,
    snippet: a2,
    date: n2,
    logo: `block-logos/${t2}.svg`,
    url: `https://${r2}/${i2}`
  }), z = "How do teams like Stripe and Slack ship risky changes without outages?", D = [
    z,
    "What is the safest way to migrate a live database table?",
    "How do feature flags reduce deploy risk?"
  ], G = {
    queries: [
      {
        text: "staged deploy rollout percentage engineering blog",
        results: 16
      },
      { text: "feature flags separate deploy from release", results: 12 },
      { text: "online data migration dual writes", results: 9 },
      { text: "automatic rollback guardrail metrics canary", results: 11 }
    ],
    sources: [
      {
        query: 0,
        read: 1.1,
        source: W(
          "slack",
          "slack",
          "slack.engineering",
          "Deploys at Slack",
          "Every deploy moves through dogfood and canary stages, then widens in percentage steps while engineers watch error and latency dashboards.",
          "2020",
          "deploys-at-slack"
        )
      },
      {
        query: 1,
        read: 1.3,
        source: W(
          "github",
          "github",
          "github.blog",
          "How we ship code faster and safer with feature flags",
          "Most changes ship dark behind a flag, so deploying code and turning a feature on become separate, reversible decisions.",
          "2021",
          "feature-flags"
        )
      },
      {
        query: 2,
        read: 1.4,
        source: W(
          "stripe",
          "stripe",
          "stripe.com",
          "Online migrations at scale",
          "Live data moves in four steps: dual write to both stores, switch reads, switch writes, then remove the old path.",
          "2017",
          "blog/online-migrations"
        )
      },
      {
        query: 3,
        read: 1,
        source: W(
          "cloudflare",
          "cloudflare",
          "blog.cloudflare.com",
          "Gradual deployments for Workers",
          "A new version can take a small share of traffic first, and the split can be raised or rolled back without a redeploy.",
          "2023",
          "gradual-deployments"
        )
      },
      {
        query: 0,
        read: 0.9,
        source: W(
          "vercel",
          "vercel",
          "vercel.com",
          "Rolling releases",
          "Traffic shifts to a new deployment in stages, with its metrics compared against the current version before each step.",
          "2025",
          "docs/rolling-releases"
        )
      },
      {
        query: 3,
        read: 1.2,
        source: W(
          "spotify",
          "spotify",
          "engineering.atspotify.com",
          "Risk aware product decisions in A/B tests",
          "Teams define guardrail metrics up front, and a test that moves them the wrong way is stopped early.",
          "2024",
          "risk-aware-decisions"
        )
      },
      {
        query: 3,
        read: 0.8,
        source: W(
          "shopify",
          "shopify",
          "shopify.engineering",
          "Resiliency planning for high traffic events",
          "Load tests and game days rehearse failure well before the traffic peak, not during it.",
          "2021",
          "resiliency-planning"
        )
      },
      {
        query: 3,
        read: 1,
        source: W(
          "airbnb",
          "airbnb",
          "airbnb.tech",
          "Designing experimentation guardrails",
          "Guardrails flag launches that hurt key metrics, even when the target metric improves.",
          "2022",
          "guardrails"
        )
      },
      {
        query: 0,
        read: 0.7,
        source: W(
          "atlassian",
          "atlassian",
          "atlassian.com",
          "Progressive delivery",
          "Release to a subset of users first and widen exposure as confidence grows.",
          "2024",
          "continuous-delivery/progressive-delivery"
        )
      },
      {
        query: 2,
        read: 1.1,
        source: W(
          "figma",
          "figma",
          "figma.com",
          "How our databases team lived to tell the scale",
          "Tables moved to new databases step by step, and every change stayed reversible until the final cutover.",
          "2024",
          "blog/how-figmas-databases-team-lived-to-tell-the-scale"
        )
      },
      {
        query: 2,
        read: 0.9,
        source: W(
          "notion",
          "notion",
          "notion.com",
          "Lessons learned from sharding Postgres",
          "The team double wrote to the old and new databases and compared results before switching reads over.",
          "2021",
          "blog/sharding-postgres-at-notion"
        )
      },
      {
        query: 1,
        read: 0.7,
        source: W(
          "supabase",
          "supabase",
          "supabase.com",
          "Branching",
          "Each pull request gets its own preview database, so a schema change runs against real migrations before merge.",
          "2025",
          "docs/guides/branching"
        )
      }
    ],
    answer: `**Separate deploying code from releasing it, and widen exposure in small, reversible steps.** Teams that ship risky changes safely treat every change as something they can turn off.[2][9]

### How they roll out

- **Ship dark behind a flag.** Code reaches production turned off, so turning it on is a separate decision you can undo in seconds.[2]
- **Widen in stages.** A deploy goes to internal users first, then a small share of production, then larger steps while error rates and latency are watched.[1][5]
- **Split traffic at the edge.** A slice of requests can go to the new version and roll back without a redeploy.[4]

### Data changes need their own plan

Schema and data moves are the riskiest part, because a flag cannot undo them. The common pattern is to dual write to the old and new store, switch reads, switch writes, and only then delete the old path.[3][11] Every step stays reversible until the last one.[10] Preview databases per pull request let you run the migration before it merges.[12]

Decide the guardrail metrics before launch and stop automatically when they move the wrong way.[6][8] Rehearse the rollback in a quiet week, so the first time you use it is not during an incident.[7]`,
    followUps: [
      "What should we measure before widening a rollout?",
      "How do we clean up old feature flags?",
      "How does dual writing work in Postgres?"
    ]
  }, O = {
    queries: [
      { text: "rollout guardrail metrics error rate latency", results: 10 },
      { text: "canary analysis compare against baseline", results: 8 }
    ],
    sources: [
      {
        query: 0,
        read: 1,
        source: W(
          "spotify-metrics",
          "spotify",
          "engineering.atspotify.com",
          "Choosing sequential testing frameworks",
          "Stop rules written before a test starts keep teams from peeking and widening too early.",
          "2023",
          "sequential-testing"
        )
      },
      {
        query: 0,
        read: 0.8,
        source: W(
          "airbnb-guardrails",
          "airbnb",
          "airbnb.tech",
          "Designing experimentation guardrails",
          "A launch that improves its goal but hurts bookings or support contacts is paused for review.",
          "2022",
          "guardrails"
        )
      },
      {
        query: 1,
        read: 0.9,
        source: W(
          "cloudflare-docs",
          "cloudflare",
          "developers.cloudflare.com",
          "Gradual deployments",
          "Compare the new version's errors against the current one on the same share of traffic.",
          "2025",
          "workers/configuration/versions-and-deployments/gradual-deployments"
        )
      },
      {
        query: 1,
        read: 0.7,
        source: W(
          "vercel-metrics",
          "vercel",
          "vercel.com",
          "Rolling releases metrics",
          "Each stage shows the new deployment's error rate and response times beside the current one.",
          "2025",
          "docs/rolling-releases"
        )
      }
    ],
    answer: `Pick a small set of metrics before the first step, and write the stop rule down.[1]

- **Error rate** of the new version against the current one, on the same slice of traffic.[3]
- **Latency** at p95 and p99, since averages hide the slow tail.[4]
- **One business guardrail**, such as checkout success or sign ups, so a change that is technically healthy but hurts people still stops.[2]

Compare against a live baseline rather than last week, and widen only after each step holds for a full traffic cycle.[1][3]`,
    followUps: [
      "How long should each rollout stage last?",
      "Can the rollback be automatic?"
    ]
  }, U = (e2, t2) => new Promise((r2, s2) => {
    if (t2.aborted) return s2(t2.reason);
    let a2 = window.setTimeout(() => {
      t2.removeEventListener("abort", n2), r2();
    }, e2), n2 = () => {
      window.clearTimeout(a2), s2(t2.reason);
    };
    t2.addEventListener("abort", n2, { once: true });
  });
  async function* K(e2, t2, r2) {
    let s2 = t2.length ? O : G;
    await U(500, r2), yield { type: "plan", queries: s2.queries.map((e3) => e3.text) }, await U(450, r2);
    let a2 = /* @__PURE__ */ new Set();
    for (let e3 = 0; e3 < s2.queries.length; e3++)
      yield { type: "search", query: e3 }, await U(160, r2);
    let n2 = [], i2 = [...s2.sources], o2 = 0, l2 = 0, c2 = s2.queries.map((e3, t3) => 700 + 520 * t3);
    for (; i2.length || n2.length || a2.size < s2.queries.length; ) {
      await U(90, r2), o2 += 90;
      for (let e3 = 0; e3 < s2.queries.length; e3++)
        !a2.has(e3) && o2 >= c2[e3] && (a2.add(e3), yield { type: "searched", query: e3, results: s2.queries[e3].results });
      if (n2.length < 3 && o2 >= l2 && i2.length && a2.has(i2[0].query)) {
        let e3 = i2.shift();
        yield { type: "source", source: e3.source, query: e3.query }, n2.push({ id: e3.source.id, left: 1e3 * e3.read, total: 1e3 * e3.read }), l2 = o2 + 260;
      }
      for (let e3 of [...n2]) {
        e3.left -= 90;
        let t3 = Math.min(1, 1 - e3.left / e3.total);
        yield { type: "read", id: e3.id, progress: t3 }, t3 >= 1 && n2.splice(n2.indexOf(e3), 1);
      }
    }
    for (let { delta: e3, wait: t3 } of (await U(500, r2), (function* (e4) {
      let t4 = 0, r3 = 0;
      for (; t4 < e4.length; ) {
        let s3 = 3 + Math.floor(16 * Math.random());
        yield {
          delta: e4.slice(t4, t4 + s3),
          wait: r3++ % 17 == 9 ? 420 : 24 + 90 * Math.random()
        }, t4 += s3;
      }
    })(s2.answer)))
      yield { type: "text", delta: e3 }, await U(t3, r2);
    yield { type: "followUps", items: s2.followUps }, yield {
      type: "done",
      tokens: Math.round(s2.answer.length / 3.6) + 1850 * s2.sources.length
    };
  }
  var Q = r(34592), X = r.n(Q);
  let { spring: J, duration: V, ease: Z, stagger: ee } = g.T, et = [...Z.standard], er = (...e2) => e2.filter(Boolean).join(" "), es = (e2) => "planning" === e2 || "searching" === e2 || "reading" === e2, ea = (e2) => "done" !== e2 && "stopped" !== e2 && "error" !== e2;
  function en({ source: e2, className: t2 }) {
    if (!e2.logo)
      return (0, s.jsx)("span", {
        className: er(X().mark, X().letter, t2),
        "aria-hidden": "true",
        children: e2.domain[0]?.toUpperCase()
      });
    let r2 = `url("${e2.logo}")`;
    return (0, s.jsx)("span", {
      className: er(X().mark, t2),
      style: { maskImage: r2, WebkitMaskImage: r2 },
      "aria-hidden": "true"
    });
  }
  function ei({ from: e2, to: t2 }) {
    let r2 = (function(e3, t3 = 250) {
      let [r3, s2] = (0, a.useState)(() => Date.now());
      return (0, a.useEffect)(() => {
        if (!e3) return;
        let r4 = window.setInterval(() => s2(Date.now()), t3);
        return () => window.clearInterval(r4);
      }, [e3, t3]), r3;
    })(void 0 === t2, 200), n2 = Math.max(0, Math.floor(((t2 ?? r2) - e2) / 1e3));
    return (0, s.jsxs)("span", { className: X().tabular, children: [n2, "s"] });
  }
  function eo({ turn: e2, reduced: t2, onToggle: r2 }) {
    let d2, h2 = (0, a.useId)(), p2 = es(e2.status), m2 = e2.stepsOpen ?? p2, f2 = e2.sources.filter((e3) => e3.progress >= 1).length, _2 = t2 ? { duration: 0 } : J.smooth;
    return d2 = "planning" === e2.status ? (0, s.jsx)("span", {
      className: X().shimmer,
      children: "Planning the research"
    }) : p2 ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)("span", {
          className: X().shimmer,
          children: "Researching"
        }),
        (0, s.jsx)("span", {
          className: X().dotSep,
          "aria-hidden": "true"
        }),
        (0, s.jsx)(ei, { from: e2.started }),
        (0, s.jsx)("span", {
          className: X().dotSep,
          "aria-hidden": "true"
        }),
        (0, s.jsxs)("span", {
          className: X().tabular,
          children: [f2, " of ", e2.sources.length, " read"]
        })
      ]
    }) : "stopped" !== e2.status || e2.answer ? (0, s.jsxs)(s.Fragment, {
      children: [
        "Researched for ",
        (0, s.jsx)(ei, {
          from: e2.started,
          to: e2.researched ?? e2.ended
        }),
        (0, s.jsx)("span", {
          className: X().dotSep,
          "aria-hidden": "true"
        }),
        (0, s.jsxs)("span", {
          className: X().tabular,
          children: [e2.sources.length, " sources"]
        })
      ]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [
        "Stopped after ",
        (0, s.jsx)(ei, {
          from: e2.started,
          to: e2.researched ?? e2.ended
        }),
        (0, s.jsx)("span", {
          className: X().dotSep,
          "aria-hidden": "true"
        }),
        (0, s.jsxs)("span", {
          className: X().tabular,
          children: [f2, " sources read"]
        })
      ]
    }), (0, s.jsxs)("div", {
      className: X().steps,
      children: [
        (0, s.jsxs)("button", {
          type: "button",
          className: X().stepsToggle,
          "aria-expanded": m2,
          "aria-controls": h2,
          onClick: () => r2(!m2),
          children: [
            (0, s.jsx)("span", { className: X().stepsLabel, children: d2 }),
            (0, s.jsx)(o.A, {
              className: X().chevron,
              "data-open": m2 || void 0,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, s.jsx)(n.PY1.div, {
          id: h2,
          className: X().clip,
          initial: false,
          animate: { height: m2 ? "auto" : 0, opacity: +!!m2 },
          transition: _2,
          inert: !m2 || void 0,
          children: (0, s.jsx)("ol", {
            className: X().queries,
            children: (0, s.jsx)(i.N, {
              initial: false,
              children: e2.queries.map((r3, a2) => {
                let o2 = e2.sources.filter((e3) => e3.query === a2);
                return (0, s.jsx)(
                  n.PY1.li,
                  {
                    className: X().queryItem,
                    initial: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    transition: t2 ? { duration: V.fast } : {
                      ...J.smooth,
                      delay: a2 * ee.item * 2,
                      opacity: {
                        duration: V.standard,
                        ease: et,
                        delay: a2 * ee.item * 2
                      }
                    },
                    children: (0, s.jsxs)("div", {
                      className: X().query,
                      "data-state": r3.state,
                      children: [
                        (0, s.jsx)("span", {
                          className: X().queryIcon,
                          "aria-hidden": "true",
                          children: (0, s.jsx)(i.N, {
                            initial: false,
                            mode: "popLayout",
                            children: "done" === r3.state ? (0, s.jsx)(
                              n.PY1.span,
                              {
                                initial: { opacity: 0, scale: 0.6 },
                                animate: { opacity: 1, scale: 1 },
                                transition: t2 ? { duration: 0 } : J.snappy,
                                children: (0, s.jsx)(l.A, {})
                              },
                              "done"
                            ) : "stopped" === e2.status ? (0, s.jsx)(
                              n.PY1.span,
                              {
                                initial: false,
                                children: (0, s.jsx)(c.A, {
                                  className: X().stopGlyph
                                })
                              },
                              "stop"
                            ) : (0, s.jsx)(
                              n.PY1.span,
                              {
                                exit: { opacity: 0, scale: 0.6 },
                                transition: { duration: V.instant },
                                children: (0, s.jsx)(u.A, {
                                  className: "searching" === r3.state ? X().spin : X().idleSpin
                                })
                              },
                              "spin"
                            )
                          })
                        }),
                        (0, s.jsx)("span", {
                          className: X().queryText,
                          children: r3.text
                        }),
                        (0, s.jsxs)("span", {
                          className: X().queryMeta,
                          children: [
                            (0, s.jsx)("span", {
                              className: X().faviconStack,
                              "aria-hidden": "true",
                              children: (0, s.jsx)(i.N, {
                                initial: false,
                                children: o2.slice(0, 4).map(
                                  (e3) => (0, s.jsx)(
                                    n.PY1.span,
                                    {
                                      initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.5, x: -4 },
                                      animate: {
                                        opacity: 1,
                                        scale: 1,
                                        x: 0
                                      },
                                      transition: t2 ? { duration: 0 } : J.snappy,
                                      children: (0, s.jsx)(en, {
                                        source: e3.source,
                                        className: X().markSmall
                                      })
                                    },
                                    e3.source.id
                                  )
                                )
                              })
                            }),
                            (0, s.jsxs)("span", {
                              className: X().results,
                              "data-shown": void 0 !== r3.results || void 0,
                              children: [r3.results ?? 0, " results"]
                            })
                          ]
                        })
                      ]
                    })
                  },
                  r3.text
                );
              })
            })
          })
        })
      ]
    });
  }
  function el({ state: e2, lit: t2, flash: r2, reduced: i2, onHover: o2, id: l2 }) {
    let [c2, u2] = (0, a.useState)(false), d2 = e2.progress < 1, { source: h2 } = e2;
    return (0, s.jsxs)(n.PY1.li, {
      "data-source": l2,
      className: X().source,
      "data-lit": t2 || void 0,
      "data-flash": r2 || void 0,
      "data-reading": d2 || void 0,
      initial: i2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      transition: i2 ? { duration: V.fast } : J.smooth,
      onPointerEnter: (t3) => {
        "mouse" === t3.pointerType && o2({ n: e2.n });
      },
      onPointerLeave: (e3) => {
        "mouse" === e3.pointerType && o2(null);
      },
      children: [
        (0, s.jsxs)("button", {
          type: "button",
          className: X().sourceButton,
          "aria-expanded": c2,
          onClick: () => u2(!c2),
          onFocus: () => o2({ n: e2.n }),
          onBlur: () => o2(null),
          children: [
            (0, s.jsx)(en, { source: h2, className: X().markRow }),
            (0, s.jsxs)("span", {
              className: X().sourceMain,
              children: [
                (0, s.jsx)("span", {
                  className: X().sourceTitle,
                  children: h2.title
                }),
                (0, s.jsxs)("span", {
                  className: X().sourceMeta,
                  children: [
                    h2.domain,
                    h2.date ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("span", {
                          className: X().dotSep,
                          "aria-hidden": "true"
                        }),
                        h2.date
                      ]
                    }) : null
                  ]
                })
              ]
            }),
            (0, s.jsxs)("span", {
              className: X().sourceN,
              "aria-label": d2 ? `Reading, ${Math.round(100 * e2.progress)} percent` : `Source ${e2.n}`,
              children: [
                (0, s.jsxs)("svg", {
                  viewBox: "0 0 20 20",
                  "aria-hidden": "true",
                  children: [
                    (0, s.jsx)("circle", {
                      className: X().ringTrack,
                      cx: "10",
                      cy: "10",
                      r: "8.75"
                    }),
                    (0, s.jsx)("circle", {
                      className: X().ring,
                      cx: "10",
                      cy: "10",
                      r: "8.75",
                      pathLength: 1,
                      style: { strokeDashoffset: 1 - e2.progress }
                    })
                  ]
                }),
                (0, s.jsx)("span", { "aria-hidden": "true", children: e2.n })
              ]
            })
          ]
        }),
        (0, s.jsxs)(n.PY1.div, {
          className: X().clip,
          initial: false,
          animate: { height: c2 ? "auto" : 0, opacity: +!!c2 },
          transition: i2 ? { duration: 0 } : J.smooth,
          inert: !c2 || void 0,
          children: [
            (0, s.jsx)("p", { className: X().snippet, children: h2.snippet }),
            (0, s.jsx)("a", {
              className: X().sourceLink,
              href: h2.url,
              target: "_blank",
              rel: "noreferrer",
              children: h2.url.replace(/^https:\/\//, "")
            })
          ]
        })
      ]
    });
  }
  function ec({ turn: e2, hover: t2, flash: r2, reduced: a2, onHover: n2 }) {
    return (0, s.jsx)("ol", {
      className: X().sourceList,
      children: (0, s.jsx)(i.N, {
        initial: false,
        children: e2.sources.map(
          (i2) => (0, s.jsx)(
            el,
            {
              id: `${e2.id}-${i2.n}`,
              state: i2,
              reduced: a2,
              onHover: n2,
              lit: t2?.n === i2.n,
              flash: r2 === i2.n
            },
            i2.source.id
          )
        )
      })
    });
  }
  function eu(e2) {
    let { turn: t2, reduced: r2, open: i2, onOpen: l2 } = e2, c2 = (0, a.useId)(), u2 = t2.sources.filter((e3) => e3.progress >= 1).length;
    return t2.sources.length ? (0, s.jsxs)(n.PY1.div, {
      className: X().strip,
      initial: r2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      transition: r2 ? { duration: V.fast } : J.smooth,
      children: [
        (0, s.jsxs)("button", {
          type: "button",
          className: X().stripToggle,
          "aria-expanded": i2,
          "aria-controls": c2,
          onClick: () => l2(!i2),
          children: [
            (0, s.jsx)("span", {
              className: X().stripIcons,
              "aria-hidden": "true",
              children: t2.sources.slice(0, 5).map(
                (e3) => (0, s.jsx)(
                  en,
                  { source: e3.source, className: X().markStrip },
                  e3.source.id
                )
              )
            }),
            (0, s.jsx)("span", {
              className: X().tabular,
              children: es(t2.status) ? `${u2} of ${t2.sources.length} sources read` : `${t2.sources.length} sources`
            }),
            (0, s.jsx)(o.A, {
              className: X().chevron,
              "data-open": i2 || void 0,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, s.jsx)(n.PY1.div, {
          id: c2,
          className: X().clip,
          initial: false,
          animate: { height: i2 ? "auto" : 0, opacity: +!!i2 },
          transition: r2 ? { duration: 0 } : J.smooth,
          inert: !i2 || void 0,
          children: (0, s.jsx)(ec, { ...e2 })
        })
      ]
    }) : null;
  }
  function ed({ text: e2 }) {
    let { state: t2, copy: r2 } = L();
    return (0, s.jsx)("button", {
      type: "button",
      className: X().action,
      onClick: () => r2(e2),
      "aria-label": "copied" === t2 ? "Answer copied" : "failed" === t2 ? "Copy failed, try again" : "Copy answer",
      children: (0, s.jsx)(I, { state: t2 })
    });
  }
  function eh({
    turn: e2,
    hover: t2,
    flash: r2,
    onHover: o2,
    onCite: l2,
    last: u2,
    reduced: f2,
    pace: _2,
    shown: g2,
    onToggleSteps: x2,
    onStop: y2,
    onRerun: w2,
    onAsk: j2
  }) {
    let v2, b2, [k2, N2] = (0, a.useState)(false), [q2, S2] = (0, a.useState)(e2.answer), [T2, A2] = (0, a.useState)(!ea(e2.status)), E2 = "composing" === e2.status || "writing" === e2.status, L2 = !T2 && "done" === e2.status, M2 = E2 || L2, R2 = !ea(e2.status) && !L2, C2 = ea(e2.status) || L2, $2 = { duration: f2 ? 0 : V.fast, ease: et }, P2 = (0, a.useRef)({ onHover: o2, onCite: l2 });
    (0, a.useLayoutEffect)(() => {
      P2.current = { onHover: o2, onCite: l2 };
    });
    let I2 = (0, a.useCallback)(
      (t3, r3) => {
        let a2 = e2.sources.find((e3) => e3.n === t3)?.source;
        return (0, s.jsx)("button", {
          type: "button",
          className: X().chip,
          "data-cite": t3,
          "data-s": r3,
          "aria-label": a2 ? `Source ${t3}: ${a2.title}` : `Source ${t3}`,
          onPointerEnter: (e3) => {
            "mouse" === e3.pointerType && P2.current.onHover({ n: t3, sentence: r3 });
          },
          onPointerLeave: (e3) => {
            "mouse" === e3.pointerType && P2.current.onHover(null);
          },
          onFocus: () => P2.current.onHover({ n: t3, sentence: r3 }),
          onBlur: () => P2.current.onHover(null),
          onClick: () => {
            N2(true), P2.current.onCite(t3);
          },
          children: t3
        });
      },
      [e2.sources]
    ), H2 = q2.trim() ? q2.trim().split(/\s+/).length : 0, Y2 = e2.tokens ?? Math.round(e2.answer.length / 3.6);
    return (0, s.jsxs)("article", {
      className: X().turn,
      "aria-label": e2.question,
      "data-turn": e2.id,
      children: [
        (0, s.jsxs)("div", {
          className: X().main,
          children: [
            (0, s.jsx)("h3", { className: X().question, children: e2.question }),
            (0, s.jsx)(eo, { turn: e2, reduced: f2, onToggle: x2 }),
            (0, s.jsx)(eu, {
              turn: e2,
              hover: t2,
              flash: r2,
              reduced: f2,
              onHover: o2,
              open: k2,
              onOpen: N2
            }),
            (0, s.jsxs)("div", {
              className: X().stage,
              children: [
                e2.answer || E2 ? (0, s.jsx)(F, {
                  className: X().answerText,
                  text: e2.answer,
                  streaming: E2,
                  smooth: "stopped" !== e2.status,
                  pace: _2,
                  placeholder: (0, s.jsx)(B, {
                    reduced: f2,
                    children: "Writing the answer"
                  }),
                  renderCite: I2,
                  onShown: (t3) => {
                    S2(t3), g2.current.set(e2.id, t3);
                  },
                  onRevealed: () => A2(true)
                }) : null,
                "stopped" !== e2.status || e2.answer ? null : (0, s.jsx)("p", {
                  className: X().note,
                  children: "Stopped before the answer. Rerun to research again."
                }),
                "error" === e2.status ? (0, s.jsxs)("p", {
                  className: X().note,
                  role: "alert",
                  children: [
                    (0, s.jsx)(d.A, {
                      className: X().inlineIcon,
                      "aria-hidden": "true"
                    }),
                    e2.error ?? "The research failed.",
                    " Rerun to try again."
                  ]
                }) : null
              ]
            }),
            (0, s.jsx)("div", {
              className: X().actions,
              children: (0, s.jsx)(i.N, {
                initial: false,
                mode: "popLayout",
                children: C2 ? (0, s.jsxs)(
                  n.PY1.div,
                  {
                    className: X().actionGroup,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: $2 },
                    transition: $2,
                    children: [
                      ea(e2.status) ? (0, s.jsxs)("button", {
                        type: "button",
                        className: X().action,
                        onClick: y2,
                        children: [
                          (0, s.jsx)("span", {
                            className: X().iconSlot,
                            "aria-hidden": "true",
                            children: (0, s.jsx)(c.A, {
                              className: X().stopGlyph
                            })
                          }),
                          "Stop"
                        ]
                      }) : null,
                      M2 && H2 ? (0, s.jsxs)("span", {
                        className: X().readout,
                        children: [
                          (0, s.jsx)("span", {
                            className: X().tabular,
                            children: H2
                          }),
                          " words"
                        ]
                      }) : null
                    ]
                  },
                  "busy"
                ) : R2 && u2 || R2 && e2.answer ? (0, s.jsxs)(
                  n.PY1.div,
                  {
                    className: X().actionGroup,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: $2 },
                    transition: { ...$2, delay: 0.08 * !f2 },
                    children: [
                      e2.answer ? (0, s.jsx)(ed, {
                        text: (v2 = (function(e3, { cites: t3 = true } = {}) {
                          let r3 = e3.replace(/^\s*```.*$/gm, "").replace(/^#{1,6}\s+/gm, "").replace(/^\s*[-*+]\s+/gm, "\u2022 ").replace(/\*\*/g, "").replace(/`/g, "");
                          return t3 || (r3 = r3.replace(
                            /\s?\[\d{1,2}\]/g,
                            ""
                          )), r3.replace(/\n{3,}/g, "\n\n").trim();
                        })(e2.answer), (b2 = e2.sources.filter(
                          (e3) => v2.includes(`[${e3.n}]`)
                        )).length ? `${v2}

Sources
${b2.map((e3) => `[${e3.n}] ${e3.source.title}, ${e3.source.url}`).join("\n")}` : v2)
                      }) : null,
                      u2 ? (0, s.jsxs)("button", {
                        type: "button",
                        className: er(X().action, X().rerun),
                        onClick: w2,
                        children: [
                          (0, s.jsx)("span", {
                            className: X().iconSlot,
                            "aria-hidden": "true",
                            children: (0, s.jsx)(h.A, {})
                          }),
                          "Rerun"
                        ]
                      }) : null,
                      (0, s.jsx)("span", {
                        className: X().readout,
                        children: "stopped" === e2.status ? "Stopped" : "error" === e2.status ? "Failed" : (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(ei, {
                              from: e2.started,
                              to: e2.ended
                            }),
                            (0, s.jsx)("span", {
                              className: X().dotSep,
                              "aria-hidden": "true"
                            }),
                            (0, s.jsx)("span", {
                              className: X().tabular,
                              children: Y2 >= 1e3 ? `${(Y2 / 1e3).toFixed(1)}k` : String(Y2)
                            }),
                            " tokens"
                          ]
                        })
                      })
                    ]
                  },
                  "done"
                ) : null
              })
            }),
            (0, s.jsx)(i.N, {
              initial: false,
              children: u2 && R2 && "done" === e2.status && e2.followUps.length ? (0, s.jsxs)(
                n.PY1.div,
                {
                  className: X().followUps,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: $2,
                  children: [
                    (0, s.jsx)("p", {
                      className: X().followLabel,
                      children: "Follow up"
                    }),
                    (0, s.jsx)("ul", {
                      className: X().followList,
                      children: e2.followUps.map(
                        (e3, t3) => (0, s.jsx)(
                          n.PY1.li,
                          {
                            initial: f2 ? { opacity: 0 } : { opacity: 0, y: 4 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                              duration: V.standard,
                              ease: et,
                              delay: f2 ? 0 : 0.12 + t3 * ee.item * 2
                            },
                            children: (0, s.jsxs)("button", {
                              type: "button",
                              className: X().followButton,
                              onClick: () => j2(e3),
                              children: [
                                (0, s.jsx)(p.A, {
                                  className: X().followIcon,
                                  "aria-hidden": "true"
                                }),
                                (0, s.jsx)("span", { children: e3 }),
                                (0, s.jsx)(m.A, {
                                  className: X().followGo,
                                  "aria-hidden": "true"
                                })
                              ]
                            })
                          },
                          e3
                        )
                      )
                    })
                  ]
                },
                "follow"
              ) : null
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: X().srOnly,
          "aria-live": "polite",
          children: R2 && e2.answer ? `Answer ${"stopped" === e2.status ? "stopped" : "ready"}, ${e2.sources.length} sources.` : ""
        })
      ]
    });
  }
  let ep = 1;
  function em({
    question: e2 = z,
    autoStart: t2 = true,
    onAsk: r2 = K,
    suggestions: o2 = D,
    pace: l2,
    onComplete: u2,
    title: d2,
    className: h2
  }) {
    let g2 = q(), [x2, y2] = (0, a.useState)([]), [w2, j2] = (0, a.useState)(""), v2 = (0, a.useRef)(null), b2 = (0, a.useRef)(/* @__PURE__ */ new Map()), k2 = (0, a.useRef)(x2);
    (0, a.useLayoutEffect)(() => {
      k2.current = x2;
    });
    let N2 = (0, a.useRef)(r2), S2 = (0, a.useRef)(u2);
    (0, a.useEffect)(() => {
      N2.current = r2, S2.current = u2;
    });
    let {
      scroller: T2,
      content: A2,
      away: E2,
      jump: L2,
      scrolled: M2
    } = (function(e3) {
      let t3 = (0, a.useRef)(null), r3 = (0, a.useRef)(null), s2 = (0, a.useRef)(true), n2 = (0, a.useRef)(0), [i2, o3] = (0, a.useState)(false), [l3, c2] = (0, a.useState)(false), u3 = (0, a.useCallback)(
        (r4 = false) => {
          let a2 = t3.current;
          if (!a2) return;
          cancelAnimationFrame(n2.current);
          let i3 = () => {
            let t4 = a2.scrollHeight - a2.clientHeight, o4 = t4 - a2.scrollTop;
            !(o4 <= 0.5) && s2.current && (a2.scrollTop = r4 || e3 ? t4 : a2.scrollTop + Math.max(1, 0.16 * o4), n2.current = requestAnimationFrame(i3));
          };
          i3();
        },
        [e3]
      );
      return (0, a.useEffect)(() => {
        let e4 = t3.current, a2 = r3.current;
        if (!e4 || !a2) return;
        let i3 = false, l4 = e4.scrollTop, d3 = 0, h3 = () => {
          s2.current && (s2.current = false, cancelAnimationFrame(n2.current));
        }, p2 = () => {
          let t4 = e4.scrollHeight - e4.clientHeight - e4.scrollTop;
          i3 && e4.scrollTop < l4 - 1 && h3(), t4 < 6 && (s2.current = true), l4 = e4.scrollTop, o3(!s2.current && t4 > 60), c2(e4.scrollTop > 56);
        }, m2 = (e5) => {
          e5.deltaY < 0 && h3();
        }, f2 = (e5) => {
          d3 = e5.touches[0]?.clientY ?? 0;
        }, _2 = (e5) => {
          (e5.touches[0]?.clientY ?? 0) > d3 + 2 && h3();
        }, g3 = (e5) => {
          (["ArrowUp", "PageUp", "Home"].includes(e5.key) || " " === e5.key && e5.shiftKey) && h3();
        }, x3 = (t4) => {
          t4.target === e4 && (i3 = true);
        }, y3 = () => {
          i3 = false;
        }, w3 = new ResizeObserver(() => {
          s2.current ? u3() : p2();
        });
        return w3.observe(a2), e4.addEventListener("scroll", p2, { passive: true }), e4.addEventListener("wheel", m2, { passive: true }), e4.addEventListener("touchstart", f2, { passive: true }), e4.addEventListener("touchmove", _2, { passive: true }), e4.addEventListener("keydown", g3), e4.addEventListener("pointerdown", x3), window.addEventListener("pointerup", y3), () => {
          w3.disconnect(), e4.removeEventListener("scroll", p2), e4.removeEventListener("wheel", m2), e4.removeEventListener("touchstart", f2), e4.removeEventListener("touchmove", _2), e4.removeEventListener("keydown", g3), e4.removeEventListener("pointerdown", x3), window.removeEventListener("pointerup", y3), cancelAnimationFrame(n2.current);
        };
      }, [u3]), {
        scroller: t3,
        content: r3,
        away: i2,
        scrolled: l3,
        jump: (0, a.useCallback)(() => {
          s2.current = true, o3(false), u3();
        }, [u3])
      };
    })(g2), R2 = (0, a.useRef)(null), C2 = x2.find((e3) => ea(e3.status)), [$2, P2] = (0, a.useState)(null), [I2, H2] = (0, a.useState)(null), [B2, F2] = (0, a.useState)(null), Y2 = (0, a.useRef)(0);
    (0, a.useEffect)(() => () => window.clearTimeout(Y2.current), []);
    let W2 = (0, a.useRef)(null), G2 = x2.find((e3) => e3.id === ($2?.turn ?? B2)) ?? x2[x2.length - 1], O2 = (e3) => (t3) => {
      if (!t3) return void P2(null);
      let r3 = void 0 !== t3.sentence ? [t3.sentence] : Array.from(
        document.querySelectorAll(
          `[data-turn="${e3}"] [data-cite="${t3.n}"]`
        ),
        (e4) => Number(e4.dataset.s)
      );
      P2({ ...t3, turn: e3, sentences: r3 }), F2(e3), void 0 !== t3.sentence && requestAnimationFrame(() => {
        let r4 = W2.current?.querySelector(`[data-source="${e3}-${t3.n}"]`), s2 = W2.current?.querySelector(`.${X().railScroll}`);
        if (!r4 || !s2) return;
        let a2 = r4.offsetTop - s2.offsetTop, n2 = a2 + r4.offsetHeight;
        (a2 < s2.scrollTop || n2 > s2.scrollTop + s2.clientHeight) && s2.scrollTo({
          top: a2 - s2.clientHeight / 2 + r4.offsetHeight / 2,
          behavior: g2 ? "auto" : "smooth"
        });
      });
    }, U2 = (0, a.useCallback)(
      (e3, t3) => y2((r3) => r3.map((r4) => r4.id === e3 ? t3(r4) : r4)),
      []
    ), Q2 = (0, a.useCallback)(
      async (e3, t3) => {
        v2.current?.abort();
        let r3 = new AbortController();
        v2.current = r3;
        let s2 = ep++, a2 = {
          id: s2,
          question: e3,
          status: "planning",
          queries: [],
          sources: [],
          answer: "",
          followUps: [],
          started: Date.now()
        }, n2 = k2.current.filter((e4) => e4.id !== t3 && e4.answer).map((e4) => ({ question: e4.question, answer: e4.answer }));
        y2(
          (e4) => void 0 === t3 ? [...e4, a2] : e4.map((e5) => e5.id === t3 ? a2 : e5)
        ), F2(s2), L2();
        try {
          for await (let t5 of N2.current(e3, n2, r3.signal)) {
            if (r3.signal.aborted) break;
            U2(
              s2,
              (e4) => (function(e5, t6, r4) {
                switch (t6.type) {
                  case "plan":
                    return {
                      ...e5,
                      status: "searching",
                      queries: t6.queries.map((e6) => ({
                        text: e6,
                        state: "queued"
                      }))
                    };
                  case "search":
                    return {
                      ...e5,
                      queries: e5.queries.map(
                        (e6, r5) => r5 === t6.query ? { ...e6, state: "searching" } : e6
                      )
                    };
                  case "searched":
                    return {
                      ...e5,
                      queries: e5.queries.map(
                        (e6, r5) => r5 === t6.query ? { ...e6, state: "done", results: t6.results } : e6
                      )
                    };
                  case "source":
                    return {
                      ...e5,
                      status: "searching" === e5.status ? "reading" : e5.status,
                      sources: [
                        ...e5.sources,
                        {
                          source: t6.source,
                          query: t6.query,
                          progress: 0,
                          n: e5.sources.length + 1
                        }
                      ]
                    };
                  case "read": {
                    let s3 = e5.sources.map(
                      (e6) => e6.source.id === t6.id ? { ...e6, progress: Math.max(e6.progress, t6.progress) } : e6
                    );
                    return e5.queries.every((e6) => "done" === e6.state) && s3.every((e6) => e6.progress >= 1) && es(e5.status) ? {
                      ...e5,
                      sources: s3,
                      status: "composing",
                      researched: r4
                    } : { ...e5, sources: s3 };
                  }
                  case "text":
                    return {
                      ...e5,
                      answer: e5.answer + t6.delta,
                      status: "writing",
                      researched: e5.researched ?? r4
                    };
                  case "followUps":
                    return { ...e5, followUps: t6.items };
                  case "done":
                    return {
                      ...e5,
                      status: "done",
                      tokens: t6.tokens,
                      ended: r4,
                      researched: e5.researched ?? r4
                    };
                }
              })(e4, t5, Date.now())
            );
          }
          if (r3.signal.aborted) return;
          U2(
            s2,
            (e4) => ea(e4.status) ? {
              ...e4,
              status: "done",
              ended: Date.now(),
              researched: e4.researched ?? Date.now()
            } : e4
          );
          let t4 = k2.current.find((e4) => e4.id === s2);
          t4 && S2.current?.({ question: t4.question, answer: t4.answer });
        } catch (e4) {
          if (r3.signal.aborted) return;
          U2(s2, (t4) => ({
            ...t4,
            status: "error",
            ended: Date.now(),
            error: e4 instanceof Error ? e4.message : void 0
          }));
        }
      },
      [L2, U2]
    ), Z2 = (0, a.useCallback)(() => {
      let e3 = k2.current.find((e4) => ea(e4.status));
      if (v2.current?.abort(), !e3) return;
      let t3 = b2.current.get(e3.id) ?? "";
      U2(e3.id, (e4) => ({
        ...e4,
        status: "stopped",
        answer: t3.trimEnd(),
        ended: Date.now(),
        researched: e4.researched ?? Date.now(),
        queries: e4.queries
      }));
    }, [U2]), ee2 = (0, a.useRef)(false);
    (0, a.useEffect)(() => {
      if (!t2 || ee2.current) return;
      ee2.current = true;
      let r3 = window.setTimeout(() => Q2(e2), 450);
      return () => {
        window.clearTimeout(r3), ee2.current = false;
      };
    }, [t2, e2, Q2]), (0, a.useEffect)(() => () => v2.current?.abort(), []);
    let en2 = () => {
      let e3 = w2.trim();
      e3 && !C2 && (j2(""), Q2(e3));
    }, ei2 = d2 ?? x2[0]?.question ?? "Research", eo2 = $2 ? [
      ...$2.sentences.map(
        (e3) => `[data-turn="${$2.turn}"] span[data-s="${e3}"]{background:var(--accent-subtle)}`
      ),
      `[data-turn="${$2.turn}"] .${X().chip}[data-cite="${$2.n}"]${void 0 !== $2.sentence ? `[data-s="${$2.sentence}"]` : ""}{border-color:var(--foreground);background:var(--foreground);color:var(--background)}`
    ].join("") : "", el2 = !!d2 || M2 || !x2.length;
    return (0, s.jsxs)("section", {
      className: er(X().root, h2),
      "aria-label": "Research",
      children: [
        eo2 ? (0, s.jsx)("style", { children: eo2 }) : null,
        (0, s.jsxs)("header", {
          className: X().header,
          children: [
            (0, s.jsx)("div", {
              className: X().titleWrap,
              children: (0, s.jsx)(i.N, {
                initial: false,
                mode: "popLayout",
                children: (0, s.jsx)(
                  n.PY1.h2,
                  {
                    className: X().title,
                    initial: { opacity: 0, y: 6 * !g2 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: g2 ? 0 : -6 },
                    transition: { duration: V.standard, ease: et },
                    children: el2 ? ei2 : "Research"
                  },
                  el2 ? ei2 : "research"
                )
              })
            }),
            (0, s.jsxs)("button", {
              type: "button",
              className: X().headerButton,
              onClick: () => {
                v2.current?.abort(), y2([]), j2(""), requestAnimationFrame(() => R2.current?.focus());
              },
              disabled: !x2.length,
              children: [
                (0, s.jsx)(f.A, { "aria-hidden": "true" }),
                (0, s.jsx)("span", { children: "New research" })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: X().body,
          children: [
            (0, s.jsxs)("div", {
              className: X().column,
              children: [
                (0, s.jsx)("div", {
                  ref: T2,
                  className: X().scroller,
                  tabIndex: -1,
                  children: (0, s.jsxs)("div", {
                    ref: A2,
                    className: X().thread,
                    children: [
                      0 === x2.length ? (0, s.jsxs)("div", {
                        className: X().empty,
                        children: [
                          (0, s.jsx)("p", {
                            className: X().emptyTitle,
                            children: "What should we research?"
                          }),
                          (0, s.jsx)("ul", {
                            className: X().followList,
                            children: o2.map(
                              (e3) => (0, s.jsx)(
                                "li",
                                {
                                  children: (0, s.jsxs)("button", {
                                    type: "button",
                                    className: X().followButton,
                                    onClick: () => Q2(e3),
                                    children: [
                                      (0, s.jsx)(p.A, {
                                        className: X().followIcon,
                                        "aria-hidden": "true"
                                      }),
                                      (0, s.jsx)("span", { children: e3 }),
                                      (0, s.jsx)(m.A, {
                                        className: X().followGo,
                                        "aria-hidden": "true"
                                      })
                                    ]
                                  })
                                },
                                e3
                              )
                            )
                          })
                        ]
                      }) : null,
                      x2.map((e3, t3) => {
                        let r3;
                        return (0, s.jsx)(
                          eh,
                          {
                            turn: e3,
                            last: t3 === x2.length - 1,
                            reduced: g2,
                            pace: l2,
                            shown: b2,
                            hover: $2?.turn === e3.id ? $2 : null,
                            flash: I2?.turn === e3.id ? I2.n : null,
                            onHover: O2(e3.id),
                            onCite: (r3 = e3.id, (e4) => {
                              F2(r3), H2({ turn: r3, n: e4 }), window.clearTimeout(Y2.current), Y2.current = window.setTimeout(
                                () => H2(null),
                                1400
                              ), window.setTimeout(() => {
                                document.querySelectorAll(
                                  `[data-source="${r3}-${e4}"]`
                                ).forEach((e5) => {
                                  e5.offsetParent && e5.scrollIntoView({
                                    block: "nearest",
                                    behavior: g2 ? "auto" : "smooth"
                                  });
                                });
                              }, 60);
                            }),
                            onToggleSteps: (t4) => U2(e3.id, (e4) => ({ ...e4, stepsOpen: t4 })),
                            onStop: Z2,
                            onRerun: () => Q2(e3.question, e3.id),
                            onAsk: (e4) => Q2(e4)
                          },
                          e3.id
                        );
                      })
                    ]
                  })
                }),
                (0, s.jsxs)("div", {
                  className: X().dock,
                  children: [
                    (0, s.jsx)(i.N, {
                      children: E2 ? (0, s.jsxs)(
                        n.PY1.button,
                        {
                          type: "button",
                          className: X().jump,
                          onClick: L2,
                          initial: { opacity: 0, y: 6 * !g2, x: "-50%" },
                          animate: { opacity: 1, y: 0, x: "-50%" },
                          exit: { opacity: 0, y: 6 * !g2, x: "-50%" },
                          transition: g2 ? { duration: 0 } : J.snappy,
                          children: [
                            (0, s.jsx)(_.A, { "aria-hidden": "true" }),
                            "Jump to latest"
                          ]
                        },
                        "jump"
                      ) : null
                    }),
                    (0, s.jsxs)("form", {
                      className: X().composer,
                      onSubmit: (e3) => {
                        e3.preventDefault(), C2 ? Z2() : en2();
                      },
                      children: [
                        (0, s.jsx)("textarea", {
                          ref: R2,
                          className: X().input,
                          rows: 1,
                          value: w2,
                          onChange: (e3) => j2(e3.target.value),
                          onKeyDown: (e3) => {
                            "Enter" !== e3.key || e3.shiftKey || e3.nativeEvent.isComposing || (e3.preventDefault(), en2()), "Escape" === e3.key && C2 && (e3.preventDefault(), Z2());
                          },
                          placeholder: x2.length ? "Ask a follow up" : "Ask a research question",
                          "aria-label": x2.length ? "Ask a follow up" : "Ask a research question"
                        }),
                        (0, s.jsx)("button", {
                          type: "submit",
                          className: X().send,
                          "data-mode": C2 ? "stop" : "send",
                          disabled: !C2 && !w2.trim(),
                          "aria-label": C2 ? "Stop research" : "Send question",
                          children: (0, s.jsx)(i.N, {
                            initial: false,
                            mode: "popLayout",
                            children: (0, s.jsx)(
                              n.PY1.span,
                              {
                                className: X().sendIcon,
                                initial: {
                                  opacity: 0,
                                  scale: 0.5,
                                  rotate: g2 ? 0 : -45
                                },
                                animate: { opacity: 1, scale: 1, rotate: 0 },
                                exit: { opacity: 0, scale: 0.5 },
                                transition: g2 ? { duration: 0 } : J.snappy,
                                children: C2 ? (0, s.jsx)(c.A, {
                                  className: X().stopGlyph
                                }) : (0, s.jsx)(m.A, {})
                              },
                              C2 ? "stop" : "send"
                            )
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("aside", {
              ref: W2,
              className: X().rail,
              "aria-label": "Sources",
              children: [
                (0, s.jsxs)("div", {
                  className: X().railHead,
                  children: [
                    (0, s.jsx)("span", { children: "Sources" }),
                    (0, s.jsx)("span", {
                      className: X().tabular,
                      children: G2?.sources.length || ""
                    })
                  ]
                }),
                x2.length > 1 && G2 ? (0, s.jsx)("p", {
                  className: X().railFor,
                  children: G2.question
                }) : null,
                (0, s.jsx)("div", {
                  className: X().railScroll,
                  children: G2?.sources.length ? (0, s.jsx)(
                    ec,
                    {
                      turn: G2,
                      hover: $2?.turn === G2.id ? $2 : null,
                      flash: I2?.turn === G2.id ? I2.n : null,
                      reduced: g2,
                      onHover: O2(G2.id)
                    },
                    G2.id
                  ) : (0, s.jsx)("p", {
                    className: X().railEmpty,
                    children: G2 ? "planning" === G2.status ? "Planning searches" : ea(G2.status) ? "Searching" : "No sources" : "Sources appear here as the research reads them."
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let ef = em;
};

__m(__module,__exports,__require);
}