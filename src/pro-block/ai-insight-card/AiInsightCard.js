function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, {
    AiInsightCard: () => M,
    default: () => R,
    formatCompactUsd: () => E,
    sampleFollowUps: () => k,
    sampleInsight: () => w,
    sampleMetric: () => N
  });
  var a = i(95155), n = i(12115), r = i(92171), s = i(18310), l = i(61792), o = i(80642), d = i(25354), c = i(40852), u = i(94088), h = i(86272), p = i(35484), m = i(92298), _ = i(51288), g = i(52898), x = i(7770), f = i(8700), v = i.n(f);
  function b(e2) {
    let t2 = e2.length;
    if (0 === t2) return "";
    if (1 === t2) return `M${e2[0].x},${e2[0].y}`;
    let i2 = [], a2 = [];
    for (let n3 = 0; n3 < t2 - 1; n3++)
      i2.push(e2[n3 + 1].x - e2[n3].x), a2.push((e2[n3 + 1].y - e2[n3].y) / i2[n3]);
    let n2 = [a2[0]];
    for (let e3 = 1; e3 < t2 - 1; e3++)
      n2.push(a2[e3 - 1] * a2[e3] <= 0 ? 0 : (a2[e3 - 1] + a2[e3]) / 2);
    n2.push(a2[t2 - 2]);
    for (let e3 = 0; e3 < t2 - 1; e3++) {
      if (0 === a2[e3]) {
        n2[e3] = 0, n2[e3 + 1] = 0;
        continue;
      }
      let t3 = n2[e3] / a2[e3], i3 = n2[e3 + 1] / a2[e3], r3 = t3 * t3 + i3 * i3;
      if (r3 > 9) {
        let s2 = 3 / Math.sqrt(r3);
        n2[e3] = s2 * t3 * a2[e3], n2[e3 + 1] = s2 * i3 * a2[e3];
      }
    }
    let r2 = `M${e2[0].x.toFixed(2)},${e2[0].y.toFixed(2)}`;
    for (let a3 = 0; a3 < t2 - 1; a3++) {
      let t3 = e2[a3], s2 = e2[a3 + 1], l2 = i2[a3] / 3;
      r2 += `C${(t3.x + l2).toFixed(2)},${(t3.y + n2[a3] * l2).toFixed(2)} ${(s2.x - l2).toFixed(2)},${(s2.y - n2[a3 + 1] * l2).toFixed(2)} ${s2.x.toFixed(2)},${s2.y.toFixed(2)}`;
    }
    return r2;
  }
  function y({
    metric: e2,
    format: t2,
    drivers: i2,
    mentioned: r2,
    activeId: s2,
    onHoverDriver: l2
  }) {
    let o2 = (0, n.useRef)(null), [d2, c2] = (0, n.useState)(0), [u2, h2] = (0, n.useState)(null), { series: p2, previousSeries: m2 = [], points: _2 } = e2;
    (0, n.useEffect)(() => {
      let e3 = o2.current;
      if (!e3 || (c2(e3.clientWidth), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(() => c2(e3.clientWidth));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let g2 = (0, n.useMemo)(() => {
      let e3 = [...p2, ...m2];
      if (!d2 || p2.length < 2 || 0 === e3.length) return null;
      let t3 = Math.min(...e3), i3 = Math.max(...e3), a2 = i3 - t3 || 1, n2 = t3 - 0.12 * a2, r3 = i3 + 0.08 * a2, s3 = (d2 - 12) / (p2.length - 1), l3 = (e4, t4) => ({
        x: 6 + t4 * s3,
        y: 30 + (1 - (e4 - n2) / (r3 - n2)) * 76
      });
      return {
        step: s3,
        current: p2.map(l3),
        previous: m2.slice(0, p2.length).map(l3)
      };
    }, [d2, p2, m2]), x2 = (e3) => {
      if (!g2 || !o2.current) return;
      let t3 = e3 - o2.current.getBoundingClientRect().left;
      h2(Math.max(0, Math.min(p2.length - 1, Math.round((t3 - 6) / g2.step))));
    };
    if (p2.length < 2)
      return (0, a.jsx)("div", {
        className: v().chartEmpty,
        children: "No data for this period yet"
      });
    let f2 = null !== u2 && g2 ? g2.current[u2] : null, N2 = null !== u2 && g2 ? g2.previous[u2] : null, w2 = f2 ? Math.max(104, Math.min(d2 - 104, f2.x)) : 0, k2 = `${e2.label}, ${e2.points[0]} to ${e2.points[e2.points.length - 1]}. Use the arrow keys to read each point.`, E2 = null !== u2 ? `${_2[u2]}: ${t2(p2[u2])}${void 0 !== m2[u2] ? `, ${e2.previousSeriesLabel ?? "previous"} ${t2(m2[u2])}` : ""}` : "";
    return (0, a.jsxs)("div", {
      ref: o2,
      className: v().chart,
      tabIndex: 0,
      role: "group",
      "aria-label": k2,
      onPointerMove: (e3) => {
        ("touch" !== e3.pointerType || e3.buttons) && x2(e3.clientX);
      },
      onPointerDown: (e3) => x2(e3.clientX),
      onPointerLeave: () => h2(null),
      onKeyDown: (e3) => {
        let t3 = p2.length - 1, i3 = "ArrowRight" === e3.key ? Math.min(t3, (u2 ?? -1) + 1) : "ArrowLeft" === e3.key ? Math.max(0, (u2 ?? t3 + 1) - 1) : "Home" === e3.key ? 0 : "End" === e3.key ? t3 : "Escape" === e3.key ? null : void 0;
        void 0 !== i3 && (e3.preventDefault(), h2(i3));
      },
      onBlur: () => h2(null),
      children: [
        g2 ? (0, a.jsxs)("svg", {
          className: v().chartSvg,
          width: d2,
          height: 112,
          viewBox: `0 0 ${d2} 112`,
          "aria-hidden": "true",
          children: [
            (0, a.jsx)("line", {
              className: v().baseline,
              x1: 0,
              x2: d2,
              y1: 111.5,
              y2: 111.5
            }),
            g2.previous.length > 1 ? (0, a.jsx)("path", {
              className: v().linePrevious,
              d: b(g2.previous)
            }) : null,
            (0, a.jsx)("path", {
              className: v().lineCurrent,
              d: b(g2.current)
            }),
            i2.map((e3) => {
              let t3 = g2.current[e3.point];
              return t3 ? (0, a.jsx)(
                "line",
                {
                  className: v().guide,
                  "data-state": j(e3.id, r2, s2),
                  x1: t3.x,
                  x2: t3.x,
                  y1: 23,
                  y2: t3.y - 6
                },
                e3.id
              ) : null;
            }),
            f2 ? (0, a.jsx)("line", {
              className: v().scrubLine,
              x1: f2.x,
              x2: f2.x,
              y1: 24,
              y2: 112
            }) : null
          ]
        }) : null,
        g2 ? i2.map((e3, t3) => {
          let i3 = g2.current[e3.point];
          if (!i3) return null;
          let n2 = j(e3.id, r2, s2);
          return (0, a.jsxs)(
            "span",
            {
              "aria-hidden": "true",
              children: [
                (0, a.jsx)("span", {
                  className: v().annotationDot,
                  "data-state": n2,
                  style: { left: i3.x, top: i3.y }
                }),
                (0, a.jsx)("span", {
                  className: v().annotationBadge,
                  "data-state": n2,
                  style: { left: i3.x, top: 10 },
                  onPointerEnter: () => l2?.(e3.id),
                  onPointerLeave: () => l2?.(void 0),
                  children: t3 + 1
                })
              ]
            },
            e3.id
          );
        }) : null,
        f2 ? (0, a.jsxs)(a.Fragment, {
          children: [
            N2 ? (0, a.jsx)("span", {
              className: v().scrubDotPrevious,
              style: { left: N2.x, top: N2.y },
              "aria-hidden": "true"
            }) : null,
            (0, a.jsx)("span", {
              className: v().scrubDot,
              style: { left: f2.x, top: f2.y },
              "aria-hidden": "true"
            }),
            (0, a.jsxs)("span", {
              className: v().tooltip,
              style: { left: w2 },
              "aria-hidden": "true",
              children: [
                (0, a.jsx)("span", {
                  className: v().tooltipLabel,
                  children: _2[u2]
                }),
                (0, a.jsxs)("span", {
                  className: v().tooltipRow,
                  children: [
                    (0, a.jsx)("i", { className: v().swatchCurrent }),
                    t2(p2[u2])
                  ]
                }),
                void 0 !== m2[u2] ? (0, a.jsxs)("span", {
                  className: v().tooltipRow,
                  children: [
                    (0, a.jsx)("i", { className: v().swatchPrevious }),
                    t2(m2[u2])
                  ]
                }) : null
              ]
            })
          ]
        }) : null,
        (0, a.jsx)("span", {
          className: v().srOnly,
          "aria-live": "polite",
          children: E2
        })
      ]
    });
  }
  function j(e2, t2, i2) {
    return i2 === e2 ? "active" : t2.has(e2) ? "mentioned" : "hidden";
  }
  let N = {
    label: "Net revenue",
    period: "Oct 20 to 26",
    value: 482100,
    previous: 515100,
    comparisonLabel: "vs last week",
    series: [74800, 66100, 73200, 69e3, 70600, 60400, 68e3],
    previousSeries: [76200, 78900, 77400, 75800, 74100, 66300, 66400],
    points: [
      "Mon, Oct 20",
      "Tue, Oct 21",
      "Wed, Oct 22",
      "Thu, Oct 23",
      "Fri, Oct 24",
      "Sat, Oct 25",
      "Sun, Oct 26"
    ],
    seriesLabel: "This week",
    previousSeriesLabel: "Last week"
  }, w = {
    segments: [
      {
        text: "Driven by fewer annual renewals in EMEA, down from 41 to 23 on Tuesday.",
        driver: "emea"
      },
      { text: " " },
      {
        text: "Failed card payments in North America cost another $11.8k on Thursday,",
        driver: "failed"
      },
      { text: " while " },
      {
        text: "Enterprise usage overages added back $3.4k on Sunday.",
        driver: "overage"
      }
    ],
    drivers: [
      { id: "emea", label: "Annual renewals, EMEA", delta: -24600, point: 1 },
      {
        id: "failed",
        label: "Failed card payments, NA",
        delta: -11800,
        point: 3
      },
      {
        id: "overage",
        label: "Usage overages, Enterprise",
        delta: 3400,
        point: 6
      }
    ]
  }, k = [
    {
      id: "quarter",
      label: "Compare to last quarter",
      insight: {
        segments: [
          {
            text: "This week is $13.2k above the Q3 weekly average of $468.9k. "
          },
          {
            text: "New business in North America ran ahead from Monday,",
            driver: "new"
          },
          { text: " and " },
          {
            text: "Enterprise expansion landed on Sunday.",
            driver: "expansion"
          },
          { text: " Only " },
          {
            text: "failed card payments on Thursday fell below the Q3 pace.",
            driver: "failed"
          }
        ],
        drivers: [
          { id: "new", label: "New business, NA", delta: 9800, point: 0 },
          {
            id: "expansion",
            label: "Expansion, Enterprise",
            delta: 6600,
            point: 6
          },
          {
            id: "failed",
            label: "Failed card payments, NA",
            delta: -3200,
            point: 3
          }
        ]
      }
    },
    {
      id: "plan",
      label: "Break down by plan",
      insight: {
        segments: [
          {
            text: "Team carried the decline, down $26.9k as EMEA renewals lapsed on Tuesday.",
            driver: "team"
          },
          { text: " " },
          {
            text: "Pro slipped $9.5k, mostly from failed payments on Thursday.",
            driver: "pro"
          },
          { text: " " },
          {
            text: "Enterprise grew $3.4k on overage invoices billed Sunday.",
            driver: "enterprise"
          }
        ],
        drivers: [
          { id: "team", label: "Team plan", delta: -26900, point: 1 },
          { id: "pro", label: "Pro plan", delta: -9500, point: 3 },
          {
            id: "enterprise",
            label: "Enterprise plan",
            delta: 3400,
            point: 6
          }
        ]
      }
    }
  ];
  function E(e2) {
    let t2 = Math.abs(e2), i2 = e2 < 0 ? "\u2212" : "";
    return t2 >= 1e6 ? `${i2}$${(t2 / 1e6).toFixed(2)}M` : t2 >= 1e3 ? `${i2}$${(t2 / 1e3).toFixed(1)}k` : `${i2}$${Math.round(t2)}`;
  }
  let T = "main", $ = /* @__PURE__ */ new Set(), C = [4, 6, 3, 5, 7, 4, 5], L = {
    label: "Stripe billing, 1,284 invoices",
    icon: (0, a.jsx)(
      function({ title: e2 = "Stripe", ...t2 }) {
        return (0, a.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#635BFF",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, a.jsx)("path", {
            d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
          })
        });
      },
      { width: 14, height: 14, "aria-hidden": "true" }
    )
  }, S = {
    label: "Claude Sonnet 5.5",
    icon: (0, a.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, a.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#D97757",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, a.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      { width: 14, height: 14, "aria-hidden": "true" }
    )
  };
  function M({
    metric: e2 = N,
    insight: t2 = w,
    followUps: i2 = k,
    explain: f2,
    onExplain: b2,
    autoPlay: j2,
    thinkingLabel: R2 = "Reading invoices and renewals",
    source: A = L,
    model: P = S,
    className: B
  }) {
    let O, D, F = (0, s.I)() ?? false, I = (0, n.useRef)(null), z = (0, l.W)(I, { amount: 0.4 }), [q, W] = (0, n.useState)(false), [Y, G] = (0, n.useState)("idle"), [U, K] = (0, n.useState)(T), [Q, H] = (0, n.useState)(t2), [X, J] = (0, n.useState)(0), [V, Z] = (0, n.useState)(), [ee, et] = (0, n.useState)(""), [ei, ea] = (0, n.useState)(false), en = (0, n.useRef)(0), er = (0, n.useRef)(null), { outer: es, inner: el } = (O = (0, n.useRef)(null), D = (0, n.useRef)(null), (0, n.useEffect)(() => {
      let e3, t3 = O.current, i3 = D.current;
      if (!t3 || !i3 || "u" < typeof ResizeObserver) return;
      let a2 = i3.offsetHeight, n2 = i3.offsetWidth, s2 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, l2 = new ResizeObserver(() => {
        let l3 = i3.offsetHeight, o2 = i3.offsetWidth, d2 = o2 !== n2;
        if (n2 = o2, l3 === a2) return;
        let c2 = e3 ? t3.getBoundingClientRect().height : a2;
        (a2 = l3, e3?.stop(), F || d2) ? s2() : (t3.style.overflow = "hidden", e3 = (0, r.i)(
          t3,
          { height: [c2, l3] },
          {
            type: "spring",
            visualDuration: 0.24,
            bounce: 0,
            onComplete: s2
          }
        ));
      });
      return l2.observe(i3), () => {
        l2.disconnect(), e3?.stop();
      };
    }, [F]), { outer: O, inner: D }), eo = (0, n.useId)(), ed = e2.format ?? E, ec = (j2 ?? !f2) && !ei && !F, { tokens: eu, total: eh } = (0, n.useMemo)(() => {
      let e3, t3, i3, a2;
      return e3 = [], t3 = 0, i3 = 0, Q.segments.forEach((a3, n2) => {
        for (let r2 of a3.text.match(/\S+\s*|\s+/g) ?? [])
          e3.push({ text: r2, segment: n2, chunk: t3 }), /\S/.test(r2) && ++i3 >= C[t3 % C.length] && (t3++, i3 = 0);
      }), a2 = e3.length ? e3[e3.length - 1].chunk + 1 : 0, { tokens: e3, total: a2 };
    }, [Q]), ep = "done" === Y ? 1 / 0 : X, { mentioned: em, reading: e_ } = (0, n.useMemo)(() => {
      let e3, t3 = /* @__PURE__ */ new Set();
      for (let i3 of eu) {
        if (i3.chunk >= ep) break;
        let a2 = Q.segments[i3.segment].driver;
        a2 && (t3.add(a2), e3 = a2);
      }
      return { mentioned: t3, reading: e3 };
    }, [eu, ep, Q]), eg = V ?? ("streaming" === Y ? e_ : void 0), ex = (0, n.useCallback)(
      async (a2) => {
        let n2 = ++en.current;
        er.current?.abort();
        let r2 = new AbortController();
        er.current = r2;
        let s2 = a2 === T ? void 0 : i2.find((e3) => e3.id === a2), l2 = s2?.insight ?? t2;
        W(true), K(a2), G("thinking"), J(0), Z(void 0), et(""), f2 || H(l2), b2?.(s2);
        try {
          let t3, i3, a3 = performance.now(), o2 = f2 ? await f2({ metric: e2, followUp: s2, signal: r2.signal }) : l2;
          if (await (t3 = Math.max(0, 820 - (performance.now() - a3)), i3 = r2.signal, new Promise((e3, a4) => {
            let n3 = setTimeout(e3, t3);
            i3.addEventListener(
              "abort",
              () => {
                clearTimeout(n3), a4(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          })), n2 !== en.current)
            return;
          H(o2), G(F ? "done" : "streaming");
        } catch (e3) {
          if (r2.signal.aborted || n2 !== en.current) return;
          et(
            e3 instanceof Error && e3.message ? e3.message : "The request failed."
          ), G("error");
        }
      },
      [f2, i2, t2, e2, b2, F]
    ), ef = (0, n.useCallback)(() => {
      en.current++, er.current?.abort(), G("stopped");
    }, []), ev = (0, n.useCallback)(() => {
      en.current++, er.current?.abort(), W(false), Z(void 0);
    }, []);
    (0, n.useEffect)(() => {
      if ("streaming" !== Y) return;
      let e3 = setTimeout(
        () => {
          X + 1 >= eh && G("done"), J(X + 1);
        },
        X >= eh ? 0 : 34
      );
      return () => clearTimeout(e3);
    }, [Y, X, eh]), (0, n.useEffect)(() => {
      if (!ec || !z) return;
      let e3, t3 = 3600;
      if (q || "idle" !== Y && "done" !== Y && "stopped" !== Y) {
        if (q && "done" === Y) {
          let t4 = [T, ...i2.map((e4) => e4.id)], a3 = t4[t4.indexOf(U) + 1];
          e3 = a3 ? () => ex(a3) : ev;
        }
      } else e3 = () => ex(T), t3 = 1400;
      if (!e3) return;
      let a2 = setTimeout(e3, t3);
      return () => clearTimeout(a2);
    }, [ec, z, q, Y, U, i2, ex, ev]), (0, n.useEffect)(() => () => er.current?.abort(), []);
    let eb = q && ("thinking" === Y || "streaming" === Y), ey = e2.value - e2.previous, ej = e2.previous ? ey / e2.previous * 100 : 0, eN = (t3) => 0 === t3 ? "neutral" : t3 < 0 != !!e2.lowerIsBetter ? "bad" : "good", ew = Math.max(1, ...Q.drivers.map((e3) => Math.abs(e3.delta))), ek = Q.segments.map((e3) => e3.text).join(""), eE = q ? "thinking" === Y ? `Explaining ${e2.label.toLowerCase()}.${f2 ? "" : " Simulated from sample data, nothing was queried."}` : "done" === Y ? `Explanation ready. ${ek}` : "stopped" === Y ? "Stopped." : "error" === Y ? `Could not explain this change. ${ee}` : "" : "", eT = eb ? {
      label: "Stop",
      icon: (0, a.jsx)(c.A, { className: v().stopIcon }),
      onClick: ef
    } : q ? { label: "Hide", icon: (0, a.jsx)(u.A, {}), onClick: ev } : {
      label: "Explain",
      icon: (0, a.jsx)(h.A, { className: v().sparkle }),
      onClick: () => ex(T)
    }, e$ = Q.segments.map((e3, t3) => {
      let i3 = [];
      for (let e4 of eu) {
        if (e4.segment !== t3 || e4.chunk >= ep) continue;
        let a2 = i3[i3.length - 1];
        a2 && a2.chunk === e4.chunk ? a2.text += e4.text : i3.push({ chunk: e4.chunk, text: e4.text });
      }
      if (!i3.length) return null;
      let n2 = i3.map(
        (e4) => (0, a.jsx)(
          "span",
          { className: v().chunk, children: e4.text },
          e4.chunk
        )
      );
      if (!e3.driver) return (0, a.jsx)("span", { children: n2 }, t3);
      let r2 = e3.driver;
      return (0, a.jsx)(
        "span",
        {
          className: v().mention,
          "data-active": eg === r2 || void 0,
          onPointerEnter: () => Z(r2),
          onPointerLeave: () => Z(void 0),
          children: n2
        },
        t3
      );
    });
    return (0, a.jsxs)("section", {
      ref: I,
      className: ((...e3) => e3.filter(Boolean).join(" "))(v().root, B),
      "aria-label": `${e2.label}, ${e2.period}`,
      onPointerDownCapture: () => ea(true),
      onKeyDownCapture: () => ea(true),
      children: [
        (0, a.jsxs)("div", {
          className: v().head,
          children: [
            (0, a.jsxs)("div", {
              className: v().titleRow,
              children: [
                (0, a.jsx)("h3", { className: v().title, children: e2.label }),
                (0, a.jsx)("span", {
                  className: v().period,
                  children: e2.period
                })
              ]
            }),
            (0, a.jsxs)(_.$, {
              size: "sm",
              variant: "secondary",
              className: v().explain,
              onClick: eT.onClick,
              disabled: e2.series.length < 2 && !q,
              "aria-expanded": q,
              "aria-controls": q ? eo : void 0,
              children: [eT.icon, eT.label]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: v().valueRow,
          children: [
            (0, a.jsx)("span", { className: v().value, children: ed(e2.value) }),
            (0, a.jsxs)("span", {
              className: v().delta,
              "data-tone": eN(ey),
              children: [
                ej < 0 ? "\u2212" : ej > 0 ? "+" : "",
                Math.abs(ej).toFixed(1),
                "%"
              ]
            }),
            (0, a.jsx)("span", {
              className: v().compare,
              children: e2.comparisonLabel
            }),
            e2.previousSeries?.length ? (0, a.jsxs)("span", {
              className: v().legend,
              "aria-hidden": "true",
              children: [
                (0, a.jsxs)("span", {
                  className: v().legendItem,
                  children: [
                    (0, a.jsx)("i", { className: v().swatchCurrent }),
                    e2.seriesLabel ?? "Current"
                  ]
                }),
                (0, a.jsxs)("span", {
                  className: v().legendItem,
                  children: [
                    (0, a.jsx)("i", { className: v().swatchPrevious }),
                    e2.previousSeriesLabel ?? "Previous"
                  ]
                })
              ]
            }) : null
          ]
        }),
        (0, a.jsx)(y, {
          metric: e2,
          format: ed,
          drivers: Q.drivers,
          mentioned: q ? em : $,
          activeId: eg,
          onHoverDriver: Z
        }),
        e2.series.length >= 2 ? (0, a.jsxs)("div", {
          className: v().axis,
          "aria-hidden": "true",
          children: [
            (0, a.jsx)("span", { children: e2.points[0] }),
            (0, a.jsx)("span", { children: e2.points[e2.points.length - 1] })
          ]
        }) : null,
        (0, a.jsx)(o.N, {
          initial: false,
          children: q ? (0, a.jsx)(
            d.PY1.div,
            {
              id: eo,
              className: v().panelClip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: F ? { duration: 0 } : {
                height: {
                  type: "spring",
                  visualDuration: 0.26,
                  bounce: 0
                },
                opacity: {
                  duration: x.T.duration.fast,
                  ease: [...x.T.ease.standard]
                }
              },
              children: (0, a.jsx)("div", {
                ref: es,
                children: (0, a.jsxs)("div", {
                  ref: el,
                  className: v().panel,
                  children: [
                    (0, a.jsxs)("div", {
                      className: v().textBox,
                      children: [
                        (0, a.jsx)("p", {
                          className: v().ghost,
                          "aria-hidden": "true",
                          children: ek
                        }),
                        (0, a.jsx)("div", {
                          className: v().textLayer,
                          children: (0, a.jsx)(o.N, {
                            initial: false,
                            mode: "popLayout",
                            children: "thinking" === Y ? (0, a.jsxs)(
                              d.PY1.div,
                              {
                                className: v().thinking,
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: {
                                  opacity: 0,
                                  transition: { duration: 0.1 }
                                },
                                transition: { duration: 0.16 },
                                children: [
                                  (0, a.jsx)(h.A, {
                                    className: v().sparkle,
                                    "aria-hidden": "true"
                                  }),
                                  (0, a.jsx)(g.n, { children: R2 })
                                ]
                              },
                              "thinking"
                            ) : "error" === Y ? (0, a.jsxs)(
                              d.PY1.div,
                              {
                                className: v().error,
                                role: "alert",
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: {
                                  opacity: 0,
                                  transition: { duration: 0.1 }
                                },
                                transition: { duration: 0.16 },
                                children: [
                                  (0, a.jsx)(p.A, {
                                    className: v().errorIcon,
                                    "aria-hidden": "true"
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: v().errorText,
                                    children: [
                                      "Could not explain this change. ",
                                      ee
                                    ]
                                  }),
                                  (0, a.jsxs)(_.$, {
                                    size: "sm",
                                    variant: "ghost",
                                    className: v().retry,
                                    onClick: () => ex(U),
                                    children: [
                                      (0, a.jsx)(m.A, {}),
                                      "Retry"
                                    ]
                                  })
                                ]
                              },
                              "error"
                            ) : (0, a.jsxs)(
                              d.PY1.p,
                              {
                                className: v().text,
                                initial: { opacity: 1 },
                                animate: { opacity: 1 },
                                exit: {
                                  opacity: 0,
                                  transition: { duration: 0.1 }
                                },
                                children: [
                                  e$,
                                  "stopped" === Y ? (0, a.jsx)("span", {
                                    className: v().stopped,
                                    children: 0 === X ? "Stopped before the answer started." : " Stopped."
                                  }) : null
                                ]
                              },
                              `answer-${U}`
                            )
                          })
                        })
                      ]
                    }),
                    (0, a.jsx)("ol", {
                      className: v().drivers,
                      "aria-label": "Top drivers",
                      children: Q.drivers.slice(0, 3).map((e3, t3) => {
                        let i3 = em.has(e3.id), n2 = Math.abs(e3.delta) / ew;
                        return (0, a.jsxs)(
                          "li",
                          {
                            className: v().driver,
                            "aria-hidden": !i3 || void 0,
                            "data-shown": i3 || void 0,
                            "data-active": eg === e3.id || void 0,
                            onPointerEnter: i3 ? () => Z(e3.id) : void 0,
                            onPointerLeave: () => Z(void 0),
                            children: [
                              (0, a.jsx)("span", {
                                className: v().rank,
                                "aria-hidden": "true",
                                children: t3 + 1
                              }),
                              (0, a.jsxs)("span", {
                                className: v().driverBody,
                                children: [
                                  (0, a.jsx)("span", {
                                    className: v().skeleton,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("i", {
                                      style: {
                                        width: `${[62, 48, 54][t3]}%`
                                      }
                                    })
                                  }),
                                  (0, a.jsx)("span", {
                                    className: v().driverLabel,
                                    children: e3.label
                                  })
                                ]
                              }),
                              (0, a.jsx)("span", {
                                className: v().bar,
                                "aria-hidden": "true",
                                children: (0, a.jsx)("i", {
                                  "data-tone": eN(e3.delta),
                                  style: { width: `${i3 ? 100 * n2 : 0}%` }
                                })
                              }),
                              (0, a.jsxs)("span", {
                                className: v().driverDelta,
                                "data-tone": eN(e3.delta),
                                children: [
                                  e3.delta > 0 ? "+" : "",
                                  ed(e3.delta)
                                ]
                              })
                            ]
                          },
                          `${U}-${e3.id}`
                        );
                      })
                    }),
                    i2.length ? (0, a.jsx)("div", {
                      className: v().chips,
                      role: "group",
                      "aria-label": "Follow-up questions",
                      children: i2.map(
                        (e3) => (0, a.jsx)(
                          "button",
                          {
                            type: "button",
                            className: v().chip,
                            "aria-pressed": U === e3.id,
                            disabled: eb,
                            onClick: () => {
                              (U !== e3.id || "done" !== Y) && ex(e3.id);
                            },
                            children: e3.label
                          },
                          e3.id
                        )
                      )
                    }) : null,
                    A || P ? (0, a.jsxs)("div", {
                      className: v().footer,
                      children: [
                        A ? (0, a.jsxs)("span", {
                          className: v().meta,
                          children: [
                            A.icon,
                            (0, a.jsx)("span", {
                              className: v().metaText,
                              children: A.label
                            })
                          ]
                        }) : (0, a.jsx)("span", {}),
                        P ? (0, a.jsxs)("span", {
                          className: v().meta,
                          children: [
                            P.icon,
                            (0, a.jsx)("span", {
                              className: v().metaText,
                              children: P.label
                            })
                          ]
                        }) : null
                      ]
                    }) : null
                  ]
                })
              })
            },
            "panel"
          ) : null
        }),
        (0, a.jsx)("span", {
          className: v().srOnly,
          "aria-live": "polite",
          children: eE
        })
      ]
    });
  }
  let R = M;
}

__m(__module,__exports,__require);
}