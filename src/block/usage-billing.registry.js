/* usage-billing (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(2971, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { UsageBilling: () => K, default: () => V });
  var i = a(95155), n = a(12115), s = a(25354), r = a(80642), l = a(18310), o = a(28245), d = a(92171), u = a(11012), c = a(64577), m = a(75796), h = a(9005), p = a(92298), g = a(50825), x = a(90467), _ = a(2125), b = a(71019), y = a(65024), f = a(51288), j = a(98344), N = a(7770);
  let v = {
    label: "Sep 1 to Sep 30",
    start: "2026-09-01",
    days: 30,
    today: 24
  }, w = [
    38.2,
    41.6,
    36.9,
    44.1,
    52.8,
    29.4,
    27.1,
    47.3,
    49.9,
    51.2,
    55.6,
    58.3,
    33.8,
    31.2,
    54.7,
    57.9,
    62.4,
    60.1,
    64.8,
    38.6,
    35.1,
    66.2,
    69.4,
    78.2
  ], T = [
    {
      id: "requests",
      name: "API requests",
      unit: "requests",
      used: 842e4,
      limit: 1e7,
      overage: "\u20AC2 per extra million"
    },
    {
      id: "bandwidth",
      name: "Bandwidth",
      unit: "gigabytes",
      used: 1840,
      limit: 2e3,
      overage: "\u20AC0.08 per extra GB"
    },
    {
      id: "builds",
      name: "Build minutes",
      unit: "minutes",
      used: 3120,
      limit: 6e3,
      overage: "\u20AC0.01 per extra minute"
    },
    {
      id: "functions",
      name: "Function invocations",
      unit: "invocations",
      used: 214e5,
      limit: 5e7,
      overage: "\u20AC0.60 per extra million"
    },
    {
      id: "seats",
      name: "Seats",
      unit: "seats",
      used: 18,
      limit: 20,
      overage: "\u20AC19 per extra seat"
    }
  ], k = {
    id: "pro",
    name: "Pro",
    price: 249,
    limits: {
      requests: 1e7,
      bandwidth: 2e3,
      builds: 6e3,
      functions: 5e7,
      seats: 20
    },
    perks: ["Email support", "7 day log retention"]
  }, $ = {
    id: "scale",
    name: "Scale",
    price: 699,
    limits: {
      requests: 25e6,
      bandwidth: 5e3,
      builds: 12e3,
      functions: 1e8,
      seats: 50
    },
    perks: [
      "Priority support",
      "30 day log retention",
      "SAML single sign-on"
    ]
  }, M = { brand: "Visa", last4: "4242", expires: "08/28" }, S = [
    { id: "a1", amount: 1e3, email: true, slack: false },
    { id: "a2", amount: 1500, email: true, slack: true }
  ], P = [
    {
      id: "inv-08",
      number: "NW-2026-008",
      period: "August 2026",
      issued: "Sep 1",
      amount: 1742.18,
      status: "paid"
    },
    {
      id: "inv-07",
      number: "NW-2026-007",
      period: "July 2026",
      issued: "Aug 1",
      amount: 1618.4,
      status: "paid"
    },
    {
      id: "inv-06",
      number: "NW-2026-006",
      period: "June 2026",
      issued: "Jul 1",
      amount: 1480.07,
      status: "paid"
    },
    {
      id: "inv-05",
      number: "NW-2026-005",
      period: "May 2026",
      issued: "Jun 1",
      amount: 1302.55,
      status: "refunded"
    },
    {
      id: "inv-04",
      number: "NW-2026-004",
      period: "April 2026",
      issued: "May 1",
      amount: 1211.9,
      status: "paid"
    }
  ];
  var A = a(26887), C = a.n(A);
  let z = [...N.T.ease.enter], L = N.T.spring.smooth, R = N.T.spring.smooth, E = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], I = (e2, t2 = 2) => e2.toFixed(t2).replace(/\.?0+$/, "");
  function D(e2, t2) {
    return "requests" === t2 || "invocations" === t2 ? e2 >= 1e6 ? `${I(e2 / 1e6)}M` : e2 >= 1e3 ? `${I(e2 / 1e3, 1)}K` : `${Math.round(e2)}` : "gigabytes" === t2 ? e2 >= 1e3 ? `${I(e2 / 1e3)} TB` : `${Math.round(e2)} GB` : "minutes" === t2 ? `${Math.round(e2).toLocaleString("en-US")} min` : `${Math.round(e2)} ${1 === Math.round(e2) ? "seat" : "seats"}`;
  }
  function Y(e2, t2) {
    let a2 = /* @__PURE__ */ new Date(`${e2}T12:00:00Z`);
    return a2.setUTCDate(a2.getUTCDate() + t2), `${E[a2.getUTCMonth()]} ${a2.getUTCDate()}`;
  }
  function F(e2, t2) {
    let a2 = e2.getBoundingClientRect(), i2 = t2.getBoundingClientRect();
    return {
      x: a2.left - i2.left,
      y: a2.top - i2.top,
      width: a2.width,
      height: a2.height
    };
  }
  function O(e2) {
    let [t2, a2] = (0, n.useState)(0);
    return (0, n.useLayoutEffect)(() => {
      let t3 = e2.current;
      if (!t3 || (a2(t3.offsetWidth), "u" < typeof ResizeObserver)) return;
      let i2 = new ResizeObserver(() => a2(t3.offsetWidth));
      return i2.observe(t3), () => i2.disconnect();
    }, [e2]), t2;
  }
  function H({
    cumulative: e2,
    projection: t2,
    days: a2,
    start: l2,
    budget: o2,
    alerts: d2,
    money: u2,
    reduce: c2
  }) {
    var m2;
    let h2, p2 = (0, n.useRef)(null), g2 = O(p2), [x2, _2] = (0, n.useState)(null), b2 = Math.max(0, g2 - 56), y2 = e2.length, f2 = (m2 = 1.06 * Math.max(o2, t2[t2.length - 1] ?? 0, ...d2.map((e3) => e3.amount)), h2 = 10 ** Math.floor(Math.log10(m2)) / 2, Math.ceil(m2 / h2) * h2), j2 = (e3) => (e3 - 1) / (a2 - 1) * b2, v2 = (e3) => 12 + (1 - e3 / f2) * 154, w2 = e2.map(
      (e3, t3) => `${t3 ? "L" : "M"}${j2(t3 + 1).toFixed(1)},${v2(e3).toFixed(1)}`
    ).join(""), T2 = `${w2}L${j2(y2).toFixed(1)},${v2(0)}L0,${v2(0)}Z`, k2 = t2.map(
      (e3, t3) => `${t3 ? "L" : "M"}${j2(y2 + t3).toFixed(1)},${v2(e3).toFixed(1)}`
    ).join(""), $2 = b2 < 360 ? [1, Math.ceil(a2 / 2), a2] : [1, 8, 15, 22, a2], M2 = (a3) => a3 <= y2 ? e2[a3 - 1] : t2[a3 - y2];
    function S2(e3) {
      let t3 = e3.currentTarget.getBoundingClientRect(), i2 = Math.round((e3.clientX - t3.left) / Math.max(1, b2) * (a2 - 1)) + 1;
      _2(Math.max(1, Math.min(a2, i2)));
    }
    let P2 = `Spend so far ${u2(e2[y2 - 1] ?? 0)}, projected ${u2(t2[t2.length - 1] ?? 0)} by ${Y(l2, a2 - 1)}, budget ${u2(o2)}.`, A2 = x2 ? Math.max(64, Math.min(b2 - 64, j2(x2))) : 0;
    return (0, i.jsxs)("div", {
      ref: p2,
      className: C().chart,
      tabIndex: 0,
      role: "img",
      "aria-label": P2,
      onKeyDown: function(e3) {
        let t3 = "ArrowRight" === e3.key ? 1 : "ArrowLeft" === e3.key ? -1 : 0;
        "Escape" === e3.key ? _2(null) : t3 && (e3.preventDefault(), _2((e4) => Math.max(1, Math.min(a2, (e4 ?? y2) + t3))));
      },
      onBlur: () => _2(null),
      onPointerMove: S2,
      onPointerLeave: () => _2(null),
      onPointerDown: S2,
      children: [
        g2 > 0 && (0, i.jsxs)("svg", {
          width: g2,
          height: 188,
          "aria-hidden": "true",
          children: [
            [0.25, 0.5, 0.75].map(
              (e3) => (0, i.jsx)(
                "line",
                {
                  x1: 0,
                  x2: b2,
                  y1: v2(f2 * e3),
                  y2: v2(f2 * e3),
                  className: C().gridLine
                },
                e3
              )
            ),
            (0, i.jsx)("line", {
              x1: 0,
              x2: b2,
              y1: v2(0),
              y2: v2(0),
              className: C().axis
            }),
            (0, i.jsxs)("g", {
              className: C().budget,
              children: [
                (0, i.jsx)("line", { x1: 0, x2: b2, y1: v2(o2), y2: v2(o2) }),
                (0, i.jsx)("text", {
                  x: b2 + 8,
                  y: v2(o2) + 4,
                  children: u2(o2).replace(/\.00$/, "")
                })
              ]
            }),
            d2.map(
              (e3) => (0, i.jsxs)(
                s.PY1.g,
                {
                  className: C().alertRule,
                  initial: false,
                  animate: { y: v2(e3.amount) },
                  transition: c2 ? { duration: 0 } : N.T.spring.smooth,
                  children: [
                    (0, i.jsx)("line", { x1: 0, x2: b2, y1: 0, y2: 0 }),
                    (0, i.jsx)("circle", { cx: b2, cy: 0, r: 2.5 }),
                    (0, i.jsx)("text", {
                      x: b2 + 8,
                      y: 4,
                      children: u2(e3.amount).replace(/\.00$/, "")
                    })
                  ]
                },
                e3.id
              )
            ),
            (0, i.jsx)(s.PY1.path, {
              d: T2,
              className: C().area,
              initial: !c2 && { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.6, delay: 0.5 }
            }),
            (0, i.jsx)(s.PY1.path, {
              d: w2,
              className: C().line,
              initial: !c2 && { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 0.9, ease: z }
            }),
            (0, i.jsx)(s.PY1.path, {
              d: k2,
              className: C().projection,
              initial: !c2 && { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.4, delay: 0.8 }
            }),
            (0, i.jsx)(s.PY1.circle, {
              cx: j2(y2),
              cy: v2(e2[y2 - 1] ?? 0),
              r: 3.5,
              className: C().today,
              initial: !c2 && { scale: 0 },
              animate: { scale: 1 },
              transition: c2 ? { duration: 0 } : { ...N.T.spring.snappy, delay: 0.8 }
            }),
            $2.map(
              (e3) => (0, i.jsx)(
                "text",
                {
                  x: j2(e3),
                  y: 182,
                  className: C().tick,
                  textAnchor: 1 === e3 ? "start" : e3 === a2 ? "end" : "middle",
                  children: Y(l2, e3 - 1)
                },
                e3
              )
            ),
            x2 && (0, i.jsxs)("g", {
              className: C().cursor,
              children: [
                (0, i.jsx)("line", {
                  x1: j2(x2),
                  x2: j2(x2),
                  y1: 12,
                  y2: v2(0)
                }),
                (0, i.jsx)("circle", { cx: j2(x2), cy: v2(M2(x2)), r: 3.5 })
              ]
            })
          ]
        }),
        (0, i.jsx)(r.N, {
          children: x2 && (0, i.jsxs)(s.PY1.div, {
            className: C().tip,
            style: { left: A2 },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: N.T.duration.instant },
            children: [
              (0, i.jsxs)("span", {
                children: [Y(l2, x2 - 1), x2 > y2 ? ", projected" : ""]
              }),
              (0, i.jsx)("strong", { children: u2(M2(x2)) }),
              x2 <= y2 && (0, i.jsxs)("small", {
                children: [u2(e2[x2 - 1] - (e2[x2 - 2] ?? 0)), " that day"]
              })
            ]
          })
        })
      ]
    });
  }
  function U({ size: e2 = 14, className: t2 }) {
    return (0, i.jsxs)("svg", {
      className: t2,
      width: e2,
      height: e2,
      viewBox: "0 0 122.8 122.8",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("path", {
          fill: "#e01e5a",
          d: "M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
        }),
        (0, i.jsx)("path", {
          fill: "#36c5f0",
          d: "M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
        }),
        (0, i.jsx)("path", {
          fill: "#2eb67d",
          d: "M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
        }),
        (0, i.jsx)("path", {
          fill: "#ecb22e",
          d: "M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
        })
      ]
    });
  }
  function B({ meter: e2, limit: t2, days: a2, today: n2, index: r2, reduce: l2 }) {
    let o2 = "seats" === e2.unit ? e2.used : e2.used * a2 / n2, d2 = e2.used / t2, c2 = Math.min(1, o2 / t2), m2 = d2 >= 0.9 ? "critical" : d2 >= 0.75 || o2 > t2 ? "warning" : "ok", h2 = o2 > t2 ? Math.round((o2 / t2 - 1) * 100) : 0, p2 = "seats" === e2.unit ? `${t2 - e2.used} ${t2 - e2.used == 1 ? "seat" : "seats"} left` : h2 ? `Projected ${D(o2, e2.unit)}, ${h2}% over` : `Projected ${D(o2, e2.unit)}`, g2 = l2 ? 0 : 0.15 + r2 * N.T.stagger.item * 2, x2 = l2 ? { duration: 0 } : { ...R, delay: g2 };
    return (0, i.jsxs)("li", {
      className: C().meter,
      "data-tone": m2,
      children: [
        (0, i.jsxs)("div", {
          className: C().meterHead,
          children: [
            (0, i.jsxs)("span", {
              className: C().meterName,
              children: [
                "ok" !== m2 && (0, i.jsx)(u.A, { size: 14, "aria-hidden": "true" }),
                e2.name
              ]
            }),
            (0, i.jsxs)("span", {
              className: C().meterValue,
              children: [
                (0, i.jsx)("strong", { children: D(e2.used, e2.unit) }),
                " of ",
                (0, i.jsx)(j.g, { children: D(t2, e2.unit) })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: C().track,
          role: "meter",
          "aria-label": e2.name,
          "aria-valuemin": 0,
          "aria-valuemax": t2,
          "aria-valuenow": e2.used,
          "aria-valuetext": `${D(e2.used, e2.unit)} of ${D(t2, e2.unit)}${"ok" === m2 ? "" : "critical" === m2 ? ", near the limit" : ", projected over"}`,
          children: [
            (0, i.jsx)(s.PY1.span, {
              className: C().ahead,
              initial: !l2 && { scaleX: 0 },
              animate: { scaleX: c2 },
              transition: x2
            }),
            (0, i.jsx)(s.PY1.span, {
              className: C().used,
              initial: !l2 && { scaleX: 0 },
              animate: { scaleX: Math.min(1, d2) },
              transition: x2
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: C().meterFoot,
          children: [
            (0, i.jsx)("span", {
              className: C().meterNote,
              children: (0, i.jsx)(j.g, {
                children: "critical" !== m2 || h2 ? p2 : `Near limit. ${p2}`
              })
            }),
            (0, i.jsx)("span", { children: e2.overage })
          ]
        })
      ]
    });
  }
  function G({
    alert: e2,
    budget: t2,
    sentOn: a2,
    money: r2,
    onChange: l2,
    onSettle: o2,
    onRemove: d2,
    autoFocus: u2,
    reduce: p2
  }) {
    let [g2, x2] = (0, n.useState)(String(e2.amount)), [_2, b2] = (0, n.useState)(false), y2 = (0, n.useRef)(null), f2 = _2 ? g2 : String(e2.amount);
    (0, n.useEffect)(() => {
      u2 && (y2.current?.focus(), y2.current?.select());
    }, [u2]);
    let j2 = Math.round(e2.amount / t2 * 100);
    return (0, i.jsx)(s.PY1.li, {
      layout: !p2,
      className: C().alert,
      initial: p2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: p2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      transition: p2 ? { duration: 0 } : {
        layout: N.T.spring.smooth,
        height: N.T.spring.smooth,
        opacity: { duration: N.T.duration.standard }
      },
      children: (0, i.jsxs)("div", {
        className: C().alertInner,
        children: [
          (0, i.jsxs)("label", {
            className: C().amount,
            children: [
              (0, i.jsx)("span", {
                className: C().srOnly,
                children: "Alert amount in euros"
              }),
              (0, i.jsx)("span", { "aria-hidden": "true", children: "\u20AC" }),
              (0, i.jsx)("input", {
                ref: y2,
                value: f2,
                inputMode: "numeric",
                onFocus: () => {
                  x2(String(e2.amount)), b2(true);
                },
                onBlur: () => {
                  b2(false), o2();
                },
                onChange: (t3) => {
                  var a3;
                  let i2;
                  return x2(a3 = t3.target.value), i2 = Number(a3.replace(/[^\d.]/g, "")), void (a3.trim() && Number.isFinite(i2) && i2 > 0 && i2 < 1e6 && l2({ ...e2, amount: Math.round(i2) }));
                },
                onKeyDown: (e3) => {
                  "Enter" === e3.key && y2.current?.blur();
                }
              })
            ]
          }),
          (0, i.jsx)("span", {
            className: C().alertMeta,
            title: a2 ? `Sent ${a2}` : `${j2}% of budget`,
            children: a2 ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(c.A, { size: 12, "aria-hidden": "true" }),
                (0, i.jsx)("span", {
                  className: C().srOnly,
                  children: "Sent "
                }),
                a2
              ]
            }) : (0, i.jsxs)(i.Fragment, {
              children: [
                j2,
                "%",
                (0, i.jsx)("span", {
                  className: C().srOnly,
                  children: " of budget"
                })
              ]
            })
          }),
          (0, i.jsxs)("span", {
            className: C().channels,
            children: [
              (0, i.jsx)("button", {
                type: "button",
                className: C().channel,
                "aria-pressed": e2.email,
                onClick: () => l2({ ...e2, email: !e2.email }),
                "aria-label": `Email at ${r2(e2.amount)}`,
                children: (0, i.jsx)(m.A, { size: 14, "aria-hidden": "true" })
              }),
              (0, i.jsx)("button", {
                type: "button",
                className: C().channel,
                "data-brand": "",
                "aria-pressed": e2.slack,
                onClick: () => l2({ ...e2, slack: !e2.slack }),
                "aria-label": `Slack at ${r2(e2.amount)}`,
                children: (0, i.jsx)(U, { className: C().slack })
              }),
              (0, i.jsx)("button", {
                type: "button",
                className: C().remove,
                onClick: d2,
                "aria-label": `Remove the ${r2(e2.amount)} alert`,
                children: (0, i.jsx)(h.A, { size: 14, "aria-hidden": "true" })
              })
            ]
          })
        ]
      })
    });
  }
  function W({ invoice: e2, onDownload: t2 }) {
    let [a2, o2] = (0, n.useState)("idle"), d2 = (0, l.I)(), u2 = (0, n.useRef)(0);
    (0, n.useEffect)(() => () => window.clearTimeout(u2.current), []);
    let m2 = "done" === a2 ? (0, i.jsx)(c.A, { size: 15 }) : "error" === a2 ? (0, i.jsx)(p.A, { size: 15 }) : "loading" === a2 ? (0, i.jsx)("span", { className: C().spinner }) : (0, i.jsx)(g.A, { size: 15 });
    return (0, i.jsx)("button", {
      type: "button",
      className: C().download,
      "data-state": a2,
      onClick: function() {
        "loading" === a2 || (o2("loading"), (t2 ? Promise.resolve().then(() => t2(e2)) : new Promise((e3) => {
          u2.current = window.setTimeout(e3, 700);
        })).then(
          () => o2("done"),
          () => o2("error")
        ).finally(() => {
          window.clearTimeout(u2.current), u2.current = window.setTimeout(() => o2("idle"), 1600);
        }));
      },
      "aria-label": "done" === a2 ? `${e2.number} downloaded` : "error" === a2 ? `Download of ${e2.number} failed, try again` : `Download ${e2.number} as PDF`,
      children: (0, i.jsx)(r.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          s.PY1.span,
          {
            className: C().downloadIcon,
            "aria-hidden": "true",
            initial: d2 ? { opacity: 0 } : { opacity: 0, scale: 0.6, filter: "blur(2px)" },
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: d2 ? { opacity: 0 } : { opacity: 0, scale: 0.6, filter: "blur(2px)" },
            transition: d2 ? { duration: 0 } : N.T.spring.snappy,
            children: m2
          },
          a2
        )
      })
    });
  }
  function q({
    origin: e2,
    minY: t2,
    rootWidth: a2,
    closing: l2,
    onClosed: u2,
    onCancel: c2,
    onConfirm: m2,
    state: p2,
    from: g2,
    to: _2,
    meters: b2,
    days: y2,
    today: j2,
    money: v2,
    payment: w2,
    reduce: T2
  }) {
    let k2 = Math.min(440, a2 - 24), $2 = { x: (a2 - k2) / 2, y: Math.max(t2, e2.y - 24), width: k2 }, M2 = (0, o.d)(T2 ? $2.x : e2.x), S2 = (0, o.d)(T2 ? $2.y : e2.y), P2 = (0, o.d)(T2 ? $2.width : e2.width), A2 = (0, o.d)(e2.height), R2 = (0, o.d)(+!T2), E2 = (0, o.d)(0), I2 = (0, n.useRef)(null), Y2 = (0, n.useRef)(null), F2 = (0, n.useId)(), O2 = y2 - j2 + 1, H2 = _2.price * O2 / y2, U2 = g2.price * O2 / y2;
    return (0, n.useLayoutEffect)(() => {
      if (l2) return;
      let e3 = I2.current;
      if (!e3) return;
      let t3 = (t4) => {
        if (T2) {
          M2.jump($2.x), S2.jump($2.y), P2.jump($2.width), A2.jump(e3.offsetHeight);
          return;
        }
        (0, d.i)(M2, $2.x, L), (0, d.i)(S2, $2.y, L), (0, d.i)(P2, $2.width, L), (0, d.i)(A2, e3.offsetHeight, t4 ? L : N.T.spring.smooth);
      };
      if (t3(true), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => t3(false));
      return a3.observe(e3), () => a3.disconnect();
    }, [l2, A2, T2, $2.width, $2.x, $2.y, P2, M2, S2]), (0, n.useEffect)(() => {
      l2 || ((0, d.i)(R2, 1, { duration: T2 ? N.T.duration.fast : 0 }), (0, d.i)(E2, 1, {
        duration: T2 ? N.T.duration.fast : N.T.duration.standard,
        delay: 0.1 * !T2,
        ease: z
      }), Y2.current?.focus({ preventScroll: true }));
    }, [E2, l2, T2, R2]), (0, n.useEffect)(() => {
      if (!l2) return;
      if (T2) {
        let e4 = (0, d.i)(R2, 0, { duration: N.T.duration.fast });
        return e4.then(u2), () => e4.stop();
      }
      (0, d.i)(E2, 0, { duration: N.T.duration.instant }), (0, d.i)(M2, l2.x, N.T.spring.smooth), (0, d.i)(S2, l2.y, N.T.spring.smooth), (0, d.i)(P2, l2.width, N.T.spring.smooth), (0, d.i)(A2, l2.height, N.T.spring.smooth);
      let e3 = (0, d.i)(R2, 0, { duration: N.T.duration.instant, delay: 0.3 });
      return e3.then(u2), () => e3.stop();
    }, [E2, l2, A2, u2, T2, R2, P2, M2, S2]), (0, i.jsx)(s.PY1.div, {
      className: C().sheet,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": F2,
      onKeyDown: function(e3) {
        if ("Escape" === e3.key && "working" !== p2) {
          e3.preventDefault(), c2();
          return;
        }
        if ("Tab" !== e3.key) return;
        let t3 = [
          ...e3.currentTarget.querySelectorAll("button:not([disabled])")
        ];
        if (!t3.length) return;
        let a3 = t3[0], i2 = t3[t3.length - 1];
        e3.shiftKey && document.activeElement === a3 ? (e3.preventDefault(), i2.focus()) : e3.shiftKey || document.activeElement !== i2 || (e3.preventDefault(), a3.focus());
      },
      style: { x: M2, y: S2, width: P2, height: A2, opacity: R2 },
      children: (0, i.jsx)(s.PY1.div, {
        ref: I2,
        className: C().sheetContent,
        style: { width: $2.width, opacity: E2 },
        children: (0, i.jsx)(r.N, {
          mode: "popLayout",
          initial: false,
          children: "done" === p2 ? (0, i.jsxs)(
            s.PY1.div,
            {
              className: C().sheetDone,
              initial: T2 ? { opacity: 0 } : { opacity: 0, filter: "blur(4px)" },
              animate: { opacity: 1, filter: "blur(0px)" },
              transition: { duration: N.T.duration.standard, ease: z },
              children: [
                (0, i.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  width: "28",
                  height: "28",
                  "aria-hidden": "true",
                  children: (0, i.jsx)(s.PY1.path, {
                    d: "M5 12.5 9.5 17 19 7.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    initial: { pathLength: +!!T2 },
                    animate: { pathLength: 1 },
                    transition: {
                      duration: 0.36 * !T2,
                      delay: 0.08 * !T2,
                      ease: z
                    }
                  })
                }),
                (0, i.jsxs)("h3", {
                  ref: Y2,
                  id: F2,
                  tabIndex: -1,
                  children: ["You are on ", _2.name]
                }),
                (0, i.jsx)("p", {
                  children: "New limits apply right away."
                })
              ]
            },
            "done"
          ) : (0, i.jsxs)(
            s.PY1.div,
            {
              exit: T2 ? { opacity: 0 } : { opacity: 0, filter: "blur(4px)" },
              transition: { duration: N.T.duration.fast },
              children: [
                (0, i.jsxs)("div", {
                  className: C().sheetHead,
                  children: [
                    (0, i.jsxs)("h3", {
                      ref: Y2,
                      id: F2,
                      tabIndex: -1,
                      children: ["Upgrade to ", _2.name]
                    }),
                    (0, i.jsx)("button", {
                      type: "button",
                      className: C().iconButton,
                      onClick: c2,
                      disabled: "working" === p2,
                      "aria-label": "Close",
                      children: (0, i.jsx)(h.A, {
                        size: 16,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                }),
                (0, i.jsxs)("table", {
                  className: C().limits,
                  children: [
                    (0, i.jsx)("caption", {
                      className: C().srOnly,
                      children: "Limits before and after the upgrade"
                    }),
                    (0, i.jsx)("tbody", {
                      children: b2.map(
                        (e3) => (0, i.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, i.jsx)("th", {
                                scope: "row",
                                children: e3.name
                              }),
                              (0, i.jsx)("td", {
                                children: D(
                                  g2.limits[e3.id] ?? e3.limit,
                                  e3.unit
                                )
                              }),
                              (0, i.jsx)("td", {
                                "aria-hidden": "true",
                                children: (0, i.jsx)(x.A, { size: 13 })
                              }),
                              (0, i.jsx)("td", {
                                children: (0, i.jsx)("strong", {
                                  children: D(
                                    _2.limits[e3.id] ?? e3.limit,
                                    e3.unit
                                  )
                                })
                              })
                            ]
                          },
                          e3.id
                        )
                      )
                    })
                  ]
                }),
                (0, i.jsxs)("dl", {
                  className: C().charges,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("dt", {
                          children: [_2.name, ", ", O2, " days"]
                        }),
                        (0, i.jsx)("dd", { children: v2(H2) })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("dt", {
                          children: ["Unused ", g2.name, " time"]
                        }),
                        (0, i.jsxs)("dd", { children: ["\u2212", v2(U2)] })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      className: C().due,
                      children: [
                        (0, i.jsx)("dt", { children: "Due today" }),
                        (0, i.jsx)("dd", { children: v2(H2 - U2) })
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("p", {
                  className: C().sheetNote,
                  children: [
                    "Then ",
                    v2(_2.price),
                    " a month. Charged to ",
                    w2.brand,
                    " ending ",
                    w2.last4,
                    "."
                  ]
                }),
                "error" === p2 && (0, i.jsx)("p", {
                  className: C().sheetError,
                  role: "alert",
                  children: "The card was declined. Nothing was charged."
                }),
                (0, i.jsxs)("div", {
                  className: C().sheetActions,
                  children: [
                    (0, i.jsx)(f.$, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: c2,
                      disabled: "working" === p2,
                      children: "Cancel"
                    }),
                    (0, i.jsx)(f.$, {
                      type: "button",
                      size: "sm",
                      loading: "working" === p2,
                      onClick: m2,
                      children: "working" === p2 ? "Upgrading" : `Pay ${v2(H2 - U2)}`
                    })
                  ]
                }),
                (0, i.jsx)("p", {
                  className: C().simulated,
                  children: "Preview only. No payment is taken."
                })
              ]
            },
            "review"
          )
        })
      })
    });
  }
  function K({
    period: e2 = v,
    daily: t2 = w,
    budget: a2 = 2e3,
    meters: o2 = T,
    plan: d2 = k,
    upgrade: h2 = $,
    defaultAlerts: p2 = S,
    onAlertsChange: g2,
    invoices: x2 = P,
    payment: A2 = M,
    onUpgrade: L2,
    onDownloadInvoice: R2,
    currency: E2 = "EUR",
    className: I2
  }) {
    let V2 = !!(0, l.I)(), [X, J] = (0, n.useState)(d2), [Z, Q] = (0, n.useState)(
      () => [...p2].sort((e3, t3) => e3.amount - t3.amount)
    ), [ee, et] = (0, n.useState)(null), [ea, ei] = (0, n.useState)(null), [en, es] = (0, n.useState)(null), [er, el] = (0, n.useState)("review"), [eo, ed] = (0, n.useState)(""), eu = (0, n.useRef)(null), ec = (0, n.useRef)(null), em = (0, n.useRef)(null), eh = (0, n.useRef)(/* @__PURE__ */ new Set()), ep = (0, n.useRef)(0), eg = O(eu), ex = (0, n.useMemo)(() => {
      let e3 = new Intl.NumberFormat("en-IE", {
        style: "currency",
        currency: E2,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return (t3) => e3.format(t3);
    }, [E2]), e_ = (0, n.useMemo)(
      () => new Intl.NumberFormat("en-IE", { style: "currency", currency: E2 }).formatToParts(0).find((e3) => "currency" === e3.type)?.value ?? "",
      [E2]
    ), eb = (0, n.useMemo)(
      () => t2.reduce((e3, t3) => [...e3, (e3[e3.length - 1] ?? 0) + t3], []),
      [t2]
    ), ey = eb.length, ef = eb[ey - 1] ?? 0, ej = t2.slice(-7).reduce((e3, t3) => e3 + t3, 0) / Math.max(1, Math.min(7, t2.length)), eN = (0, n.useMemo)(
      () => Array.from({ length: e2.days - ey + 1 }, (e3, t3) => ef + ej * t3),
      [e2.days, ej, ef, ey]
    ), ev = eN[eN.length - 1] ?? ef, ew = Z.find((e3) => e3.amount > ef && e3.amount <= ev), eT = (e3) => {
      let t3 = eb.findIndex((t4) => t4 >= e3);
      return t3 >= 0 ? t3 + 1 : null;
    }, ek = ev > a2 ? {
      tone: "critical",
      text: `On pace to pass your budget around ${Y(e2.start, Math.min(e2.days, ey + Math.ceil((a2 - ef) / ej)) - 1)}`
    } : ew ? {
      tone: "warning",
      text: `On pace to reach your ${ex(ew.amount).replace(/\.00$/, "")} alert around ${Y(e2.start, Math.min(e2.days, ey + Math.ceil((ew.amount - ef) / ej)) - 1)}`
    } : { tone: "ok", text: "On pace to stay under every alert" }, e$ = h2 && X.id !== h2.id ? h2 : null, eM = o2.filter((e3) => e3.used / (X.limits[e3.id] ?? e3.limit) >= 0.75).map((e3) => e3.name.toLowerCase());
    (0, n.useEffect)(() => {
      let e3 = eh.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let eS = (0, n.useCallback)((e3, t3) => {
      let a3 = window.setTimeout(() => {
        eh.current.delete(a3), e3();
      }, t3);
      eh.current.add(a3);
    }, []);
    function eP(e3) {
      Q(e3), g2?.(e3);
    }
    function eA(e3 = false) {
      eu.current && ec.current && (es(F(ec.current, eu.current)), eS(
        () => (e3 ? ec.current : em.current)?.focus({ preventScroll: true }),
        360 * !V2
      ));
    }
    let eC = (0, n.useCallback)(() => {
      ei(null), es(null);
    }, []);
    return (0, i.jsxs)("div", {
      ref: eu,
      className: `${C().root} ${I2 ?? ""}`,
      children: [
        (0, i.jsx)("header", {
          className: C().header,
          children: (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)("h2", { children: "Usage and billing" }),
              (0, i.jsxs)("p", {
                children: [e2.label, " \xB7 day ", ey, " of ", e2.days]
              })
            ]
          })
        }),
        (0, i.jsxs)("div", {
          className: C().grid,
          children: [
            (0, i.jsxs)("section", {
              className: `${C().panel} ${C().spend}`,
              "aria-labelledby": "usage-billing-spend",
              children: [
                (0, i.jsxs)("div", {
                  className: C().spendHead,
                  children: [
                    (0, i.jsxs)("div", {
                      className: C().stat,
                      children: [
                        (0, i.jsx)("h3", {
                          id: "usage-billing-spend",
                          children: "Spend so far"
                        }),
                        (0, i.jsx)("span", {
                          className: C().big,
                          children: (0, i.jsx)(y.q, {
                            value: ef,
                            prefix: e_,
                            decimals: 2,
                            animateOnView: true
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("dl", {
                      className: C().substats,
                      children: [
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("dt", { children: "Projected" }),
                            (0, i.jsx)("dd", { children: ex(ev) })
                          ]
                        }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("dt", { children: "Budget" }),
                            (0, i.jsx)("dd", { children: ex(a2) })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsx)(H, {
                  cumulative: eb,
                  projection: eN,
                  days: e2.days,
                  start: e2.start,
                  budget: a2,
                  alerts: Z,
                  money: ex,
                  reduce: V2
                }),
                (0, i.jsxs)("p", {
                  className: C().pace,
                  "data-tone": ek.tone,
                  children: [
                    "ok" !== ek.tone && (0, i.jsx)(u.A, { size: 14, "aria-hidden": "true" }),
                    eg >= 520 ? (0, i.jsx)(j.g, { children: ek.text }) : (0, i.jsx)("span", {
                      className: C().paceText,
                      children: (0, i.jsx)(r.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, i.jsx)(
                          s.PY1.span,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: {
                              duration: V2 ? N.T.duration.instant : N.T.duration.fast
                            },
                            children: ek.text
                          },
                          ek.text
                        )
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)("section", {
              ref: ec,
              tabIndex: -1,
              className: `${C().panel} ${C().plan}`,
              "data-hidden": ea ? "" : void 0,
              "aria-labelledby": "usage-billing-plan",
              children: [
                (0, i.jsxs)("div", {
                  className: C().planNow,
                  children: [
                    (0, i.jsx)("h3", {
                      id: "usage-billing-plan",
                      children: "Plan"
                    }),
                    (0, i.jsxs)("p", {
                      className: C().planName,
                      children: [
                        (0, i.jsx)(j.g, { children: X.name }),
                        (0, i.jsx)("span", {
                          className: C().planPrice,
                          children: (0, i.jsx)(j.g, {
                            children: `${ex(X.price).replace(/\.00$/, "")} a month`
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("p", {
                      className: C().muted,
                      children: [
                        "Renews Oct 1 \xB7 ",
                        A2.brand,
                        " ending ",
                        A2.last4
                      ]
                    })
                  ]
                }),
                (0, i.jsx)(r.N, {
                  initial: false,
                  mode: "popLayout",
                  children: e$ ? (0, i.jsxs)(
                    s.PY1.div,
                    {
                      className: C().offer,
                      exit: { opacity: 0 },
                      transition: { duration: N.T.duration.fast },
                      children: [
                        (0, i.jsx)("p", {
                          className: C().offerLead,
                          children: eM.length ? `${e$.name} gives you room on ${eM.slice(0, 2).join(" and ")}.` : `${e$.name} raises every limit.`
                        }),
                        (0, i.jsxs)("ul", {
                          className: C().perks,
                          children: [
                            o2.filter(
                              (e3) => (e$.limits[e3.id] ?? 0) > (X.limits[e3.id] ?? 0)
                            ).slice(0, 3).map((e3) => {
                              var t3;
                              let a3;
                              return (0, i.jsxs)(
                                "li",
                                {
                                  children: [
                                    (0, i.jsx)(c.A, {
                                      size: 14,
                                      "aria-hidden": "true"
                                    }),
                                    (t3 = e$.limits[e3.id], a3 = e3.name.split(" ").map(
                                      (e4) => e4 === e4.toUpperCase() ? e4 : e4.toLowerCase()
                                    ).join(" "), "minutes" === e3.unit || "seats" === e3.unit ? `${Math.round(t3).toLocaleString("en-US")} ${a3}` : `${D(t3, e3.unit)} ${a3}`)
                                  ]
                                },
                                e3.id
                              );
                            }),
                            e$.perks.slice(0, 1).map(
                              (e3) => (0, i.jsxs)(
                                "li",
                                {
                                  children: [
                                    (0, i.jsx)(c.A, {
                                      size: 14,
                                      "aria-hidden": "true"
                                    }),
                                    e3
                                  ]
                                },
                                e3
                              )
                            )
                          ]
                        }),
                        (0, i.jsxs)(f.$, {
                          ref: em,
                          type: "button",
                          size: "sm",
                          className: C().offerButton,
                          onClick: function() {
                            if (!eu.current || !ec.current || !e$) return;
                            el("review"), es(null);
                            let e3 = Math.max(
                              12,
                              88 - eu.current.getBoundingClientRect().top
                            );
                            ei({
                              origin: F(ec.current, eu.current),
                              minY: e3,
                              from: X,
                              to: e$
                            });
                          },
                          children: ["Upgrade to ", e$.name]
                        })
                      ]
                    },
                    "offer"
                  ) : (0, i.jsxs)(
                    s.PY1.div,
                    {
                      className: C().offer,
                      initial: V2 ? { opacity: 0 } : { opacity: 0, filter: "blur(4px)" },
                      animate: { opacity: 1, filter: "blur(0px)" },
                      transition: {
                        duration: N.T.duration.standard,
                        ease: z
                      },
                      children: [
                        (0, i.jsxs)("p", {
                          className: C().offerLead,
                          children: [
                            "Every limit is raised for the rest of ",
                            Y(e2.start, 0).split(" ")[0],
                            "."
                          ]
                        }),
                        (0, i.jsx)("ul", {
                          className: C().perks,
                          children: X.perks.map(
                            (e3) => (0, i.jsxs)(
                              "li",
                              {
                                children: [
                                  (0, i.jsx)(c.A, {
                                    size: 14,
                                    "aria-hidden": "true"
                                  }),
                                  e3
                                ]
                              },
                              e3
                            )
                          )
                        })
                      ]
                    },
                    "top"
                  )
                })
              ]
            }),
            (0, i.jsxs)("section", {
              className: `${C().panel} ${C().meters}`,
              "aria-labelledby": "usage-billing-meters",
              children: [
                (0, i.jsxs)("div", {
                  className: C().panelHead,
                  children: [
                    (0, i.jsx)("h3", {
                      id: "usage-billing-meters",
                      children: "Usage"
                    }),
                    (0, i.jsxs)("span", {
                      className: C().muted,
                      children: ["Resets ", Y(e2.start, e2.days)]
                    })
                  ]
                }),
                (0, i.jsx)("ul", {
                  className: C().meterList,
                  children: o2.map(
                    (t3, a3) => (0, i.jsx)(
                      B,
                      {
                        meter: t3,
                        limit: X.limits[t3.id] ?? t3.limit,
                        days: e2.days,
                        today: ey,
                        index: a3,
                        reduce: V2
                      },
                      t3.id
                    )
                  )
                })
              ]
            }),
            (0, i.jsxs)("section", {
              className: `${C().panel} ${C().alerts}`,
              "aria-labelledby": "usage-billing-alerts",
              children: [
                (0, i.jsxs)("div", {
                  className: C().panelHead,
                  children: [
                    (0, i.jsx)("h3", {
                      id: "usage-billing-alerts",
                      children: "Spend alerts"
                    }),
                    (0, i.jsxs)("span", {
                      className: C().legend,
                      "aria-hidden": "true",
                      children: [
                        (0, i.jsx)(m.A, { size: 12 }),
                        " Email ",
                        (0, i.jsx)(U, { size: 11 }),
                        " Slack"
                      ]
                    })
                  ]
                }),
                (0, i.jsx)("ul", {
                  className: C().alertList,
                  children: (0, i.jsx)(r.N, {
                    initial: false,
                    children: Z.map(
                      (t3) => (0, i.jsx)(
                        G,
                        {
                          alert: t3,
                          budget: a2,
                          money: ex,
                          autoFocus: ee === t3.id,
                          reduce: V2,
                          sentOn: eT(t3.amount) ? Y(e2.start, (eT(t3.amount) ?? 1) - 1) : null,
                          onChange: (e3) => eP(Z.map((t4) => t4.id === e3.id ? e3 : t4)),
                          onSettle: () => {
                            et(null), Q(
                              (e3) => e3.every(
                                (t4, a3) => !a3 || e3[a3 - 1].amount <= t4.amount
                              ) ? e3 : [...e3].sort((e4, t4) => e4.amount - t4.amount)
                            );
                          },
                          onRemove: () => {
                            eP(Z.filter((e3) => e3.id !== t3.id)), ed(`Removed the ${ex(t3.amount)} alert`);
                          }
                        },
                        t3.id
                      )
                    )
                  })
                }),
                !Z.length && (0, i.jsx)("p", {
                  className: C().muted,
                  children: "No alerts. You will only hear about spend on your invoice."
                }),
                (0, i.jsx)("div", {
                  className: C().alertFoot,
                  children: (0, i.jsxs)("button", {
                    type: "button",
                    className: C().add,
                    onClick: function() {
                      if (Z.length >= 5) return;
                      let e3 = Z[Z.length - 1]?.amount ?? 0.5 * a2, t3 = `alert-${Date.now().toString(36)}-${ep.current++}`;
                      eP([
                        ...Z,
                        {
                          id: t3,
                          amount: Math.min(a2, 50 * Math.round((e3 + 250) / 50)),
                          email: true,
                          slack: false
                        }
                      ]), et(t3), ed("Alert added");
                    },
                    disabled: Z.length >= 5,
                    children: [
                      (0, i.jsx)(_.A, { size: 14, "aria-hidden": "true" }),
                      "Add alert"
                    ]
                  })
                })
              ]
            }),
            (0, i.jsxs)("section", {
              className: `${C().panel} ${C().invoices}`,
              "aria-labelledby": "usage-billing-invoices",
              children: [
                (0, i.jsxs)("div", {
                  className: C().panelHead,
                  children: [
                    (0, i.jsx)("h3", {
                      id: "usage-billing-invoices",
                      children: "Invoices"
                    }),
                    (0, i.jsxs)("span", {
                      className: C().muted,
                      children: [
                        (0, i.jsx)(b.A, { size: 13, "aria-hidden": "true" }),
                        " ",
                        A2.brand,
                        " ending ",
                        A2.last4
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("table", {
                  className: C().table,
                  children: [
                    (0, i.jsx)("thead", {
                      children: (0, i.jsxs)("tr", {
                        children: [
                          (0, i.jsx)("th", {
                            scope: "col",
                            children: "Invoice"
                          }),
                          (0, i.jsx)("th", {
                            scope: "col",
                            className: C().issued,
                            children: "Issued"
                          }),
                          (0, i.jsx)("th", {
                            scope: "col",
                            className: C().num,
                            children: "Amount"
                          }),
                          (0, i.jsx)("th", {
                            scope: "col",
                            className: C().statusCol,
                            children: "Status"
                          }),
                          (0, i.jsx)("th", {
                            scope: "col",
                            children: (0, i.jsx)("span", {
                              className: C().srOnly,
                              children: "Download"
                            })
                          })
                        ]
                      })
                    }),
                    (0, i.jsx)("tbody", {
                      children: x2.map(
                        (e3) => (0, i.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, i.jsxs)("td", {
                                children: [
                                  (0, i.jsx)("span", {
                                    className: C().invoiceName,
                                    children: e3.period
                                  }),
                                  (0, i.jsx)("span", {
                                    className: C().invoiceNumber,
                                    children: e3.number
                                  })
                                ]
                              }),
                              (0, i.jsx)("td", {
                                className: C().issued,
                                children: e3.issued
                              }),
                              (0, i.jsxs)("td", {
                                className: C().num,
                                children: [
                                  ex(e3.amount),
                                  (0, i.jsx)("span", {
                                    className: `${C().status} ${C().statusInline}`,
                                    "data-status": e3.status,
                                    "aria-hidden": "true",
                                    children: "paid" === e3.status ? "Paid" : "refunded" === e3.status ? "Refunded" : "Failed"
                                  })
                                ]
                              }),
                              (0, i.jsx)("td", {
                                className: C().statusCol,
                                children: (0, i.jsx)("span", {
                                  className: C().status,
                                  "data-status": e3.status,
                                  children: "paid" === e3.status ? "Paid" : "refunded" === e3.status ? "Refunded" : "Failed"
                                })
                              }),
                              (0, i.jsx)("td", {
                                className: C().action,
                                children: (0, i.jsx)(W, {
                                  invoice: e3,
                                  onDownload: R2
                                })
                              })
                            ]
                          },
                          e3.id
                        )
                      )
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, i.jsx)(r.N, {
          children: ea && !en && (0, i.jsx)(
            s.PY1.div,
            {
              className: C().scrim,
              onPointerDown: () => "working" !== er && eA(),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: {
                duration: V2 ? N.T.duration.instant : N.T.duration.standard
              },
              "aria-hidden": "true"
            },
            "scrim"
          )
        }),
        ea && eg > 0 && (0, i.jsx)(q, {
          origin: ea.origin,
          minY: ea.minY,
          rootWidth: eg,
          closing: en,
          onClosed: eC,
          onCancel: () => eA(),
          onConfirm: function() {
            let e3 = ea?.to;
            if (!e3 || "working" === er) return;
            el("working"), ed(`Upgrading to ${e3.name}`);
            let t3 = () => {
              el("done"), ed(`You are on ${e3.name}. New limits apply right away.`), eS(() => {
                eA(true), eS(() => J(e3), 280 * !V2);
              }, 1100);
            };
            L2 ? Promise.resolve().then(() => L2(e3)).then(t3, () => {
              el("error"), ed("The upgrade failed. Nothing was charged.");
            }) : eS(t3, 1100);
          },
          state: er,
          from: ea.from,
          to: ea.to,
          meters: o2,
          days: e2.days,
          today: ey,
          money: ex,
          payment: A2,
          reduce: V2
        }),
        (0, i.jsx)("p", {
          className: C().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eo
        })
      ]
    });
  }
  let V = K;
}

__m(__module,__exports,__require);
});
A.regCss(26887, ".usage-billing_root__j67UM{position:relative;container-type:inline-size;width:min(100%,1040px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);--control-height-md:var(--control-height-sm)}.usage-billing_header__jtuJk{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:16px}.usage-billing_header__jtuJk h2{margin:0;font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.usage-billing_header__jtuJk p{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-sm)}.usage-billing_grid__kWal_{display:grid;grid-template-columns:minmax(0,1fr);gap:12px}.usage-billing_panel__PCsLM{min-width:0;border:1px solid var(--border);border-radius:14px;padding:16px;background:var(--surface)}.usage-billing_panel__PCsLM h3{margin:0;font-size:var(--text-sm);font-weight:500;line-height:1.4}.usage-billing_panelHead__nP9dI{display:flex;min-height:20px;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.usage-billing_muted__TgoL9{display:inline-flex;align-items:center;gap:6px;margin:0;color:var(--text-muted);font-size:var(--text-xs)}.usage-billing_spendHead__hK2XB{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 24px;margin-bottom:8px}.usage-billing_stat___G2_4 h3{color:var(--text-secondary);font-weight:400}.usage-billing_big__1tuEc{display:block;margin-top:2px;font-family:var(--font-body);font-size:var(--text-2xl);font-weight:500;letter-spacing:-.02em;line-height:1.1;font-variant-numeric:tabular-nums}.usage-billing_big__1tuEc>span{font:inherit;letter-spacing:inherit}.usage-billing_substats__jncGo{display:flex;gap:24px;margin:0}.usage-billing_substats__jncGo div{display:grid;gap:2px}.usage-billing_substats__jncGo dt{color:var(--text-muted);font-size:var(--text-xs)}.usage-billing_substats__jncGo dd{margin:0;font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums}.usage-billing_chart__paW4E{position:relative;margin-inline:-2px;touch-action:pan-y;cursor:crosshair}.usage-billing_chart__paW4E svg{display:block;overflow:visible}.usage-billing_gridLine__6O0A6{stroke:var(--border-subtle);stroke-width:1}.usage-billing_axis__HKUoY{stroke:var(--border);stroke-width:1}.usage-billing_budget__bx2gy line{stroke:var(--border-strong);stroke-width:1;stroke-dasharray:2 3}.usage-billing_alertRule__I84xW text,.usage-billing_budget__bx2gy text,.usage-billing_tick__IOW_P{fill:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.usage-billing_alertRule__I84xW line{stroke:color-mix(in oklab,var(--warning) 45%,transparent);stroke-width:1}.usage-billing_alertRule__I84xW circle{fill:var(--warning)}.usage-billing_alertRule__I84xW text{fill:var(--text-secondary)}.usage-billing_area__o_7Tp{fill:color-mix(in oklab,var(--accent) 10%,transparent)}.usage-billing_line__SzPpq{fill:none;stroke:var(--accent);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.usage-billing_projection__4sdjE{fill:none;stroke:var(--text-muted);stroke-width:1.5;stroke-dasharray:3 4;stroke-linecap:round}.usage-billing_today__NZmYd{fill:var(--accent);stroke:var(--surface);stroke-width:2;transform-box:fill-box;transform-origin:center}.usage-billing_cursor__4oAEQ line{stroke:var(--border-strong);stroke-width:1}.usage-billing_cursor__4oAEQ circle{fill:var(--surface);stroke:var(--accent);stroke-width:1.75}.usage-billing_tip__ogSCh{position:absolute;top:2px;z-index:2;display:grid;gap:1px;min-width:120px;transform:translateX(-50%);border:1px solid var(--border);border-radius:10px;padding:7px 10px;background:var(--surface-raised);box-shadow:var(--shadow-raised);pointer-events:none;white-space:nowrap}.usage-billing_tip__ogSCh small,.usage-billing_tip__ogSCh span{color:var(--text-muted);font-size:var(--text-xs)}.usage-billing_tip__ogSCh strong{font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums}.usage-billing_pace__lNp5F{display:flex;align-items:flex-start;gap:8px;margin:8px 0 0;color:var(--text-secondary);font-size:var(--text-sm)}.usage-billing_pace__lNp5F svg{flex:none;margin-top:2px}.usage-billing_paceText__NidD1{display:block;min-width:0;line-height:var(--leading-body)}.usage-billing_paceText__NidD1>span{display:block}.usage-billing_pace__lNp5F[data-tone=warning] svg{color:var(--warning)}.usage-billing_pace__lNp5F[data-tone=critical] svg{color:var(--danger)}.usage-billing_plan__D9CGh{display:flex;flex-direction:column;gap:14px}.usage-billing_plan__D9CGh[data-hidden]{visibility:hidden}.usage-billing_planNow__LuuDt h3{color:var(--text-secondary);font-weight:400}.usage-billing_planName__ah2x0{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;margin:2px 0 4px;font-family:var(--font-body);font-size:var(--text-xl);font-weight:500;letter-spacing:-.02em;line-height:1.2}.usage-billing_planPrice__qSAwS{color:var(--text-secondary);font-family:var(--font-body);font-size:var(--text-sm);font-weight:400;letter-spacing:var(--tracking-body)}.usage-billing_offer___LQwS{display:flex;flex:1;flex-direction:column;gap:10px;border-top:1px solid var(--border-subtle);padding-top:14px}.usage-billing_offerLead__rS_Uo{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}.usage-billing_perks__IiBKV{display:grid;gap:6px;margin:0;padding:0;list-style:none}.usage-billing_perks__IiBKV li{display:flex;align-items:center;gap:8px;font-size:var(--text-sm)}.usage-billing_perks__IiBKV svg{flex:none;color:var(--accent)}.usage-billing_offerButton__PZh9Z{align-self:flex-start;margin-top:auto}.usage-billing_meterList__63QC1{display:grid;gap:14px;margin:0;padding:0;list-style:none}.usage-billing_meter__r8XL2{display:grid;gap:6px}.usage-billing_meterFoot__ZgTQr,.usage-billing_meterHead__nNrsx{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:12px}.usage-billing_meterName__lsCbs{display:inline-flex;min-width:0;align-items:center;gap:6px;font-weight:500}.usage-billing_meterName__lsCbs svg{flex:none;color:var(--warning)}.usage-billing_meter__r8XL2[data-tone=critical] .usage-billing_meterName__lsCbs svg{color:var(--danger)}.usage-billing_meterValue__PFSKy{flex:none;color:var(--text-muted);font-variant-numeric:tabular-nums;white-space:nowrap}.usage-billing_meterValue__PFSKy strong{color:var(--foreground);font-weight:500}.usage-billing_meterValue__PFSKy>span{font:inherit}.usage-billing_track__uKy9p{position:relative;height:6px;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted)}.usage-billing_ahead__3K3mU,.usage-billing_used__szjRp{position:absolute;inset:0;border-radius:inherit;transform-origin:left center;background:var(--accent);transition:background-color var(--duration-considered) var(--ease-standard)}.usage-billing_ahead__3K3mU{opacity:.22}.usage-billing_meter__r8XL2[data-tone=warning] .usage-billing_ahead__3K3mU,.usage-billing_meter__r8XL2[data-tone=warning] .usage-billing_used__szjRp{background:var(--warning)}.usage-billing_meter__r8XL2[data-tone=critical] .usage-billing_ahead__3K3mU,.usage-billing_meter__r8XL2[data-tone=critical] .usage-billing_used__szjRp{background:var(--danger)}.usage-billing_meterFoot__ZgTQr{color:var(--text-muted);font-size:var(--text-xs)}.usage-billing_meterFoot__ZgTQr>span:last-child{flex:none}.usage-billing_meterNote__NZuz4{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.usage-billing_meter__r8XL2[data-tone=critical] .usage-billing_meterNote__NZuz4,.usage-billing_meter__r8XL2[data-tone=warning] .usage-billing_meterNote__NZuz4{color:var(--text-secondary)}.usage-billing_legend__jNpGz{display:inline-flex;align-items:center;gap:4px;color:var(--text-muted);font-size:var(--text-xs)}.usage-billing_legend__jNpGz svg:last-of-type{margin-left:6px}.usage-billing_alertList__wHuG_{margin:0;padding:0;list-style:none}.usage-billing_alert__18N3Y{overflow:hidden}.usage-billing_alertInner__AJUXk{display:grid;grid-template-columns:88px minmax(0,1fr) auto;align-items:center;gap:8px;border-top:1px solid var(--border-subtle);padding:8px 0}.usage-billing_alert__18N3Y:first-child .usage-billing_alertInner__AJUXk{border-top:0}.usage-billing_amount__mm9rn{display:flex;height:32px;align-items:center;gap:2px;border:1px solid var(--border);border-radius:9px;padding:0 8px;color:var(--text-muted);transition:border-color var(--duration-fast) var(--ease-standard)}.usage-billing_amount__mm9rn:focus-within{border-color:color-mix(in oklab,var(--accent) 55%,var(--border))}.usage-billing_amount__mm9rn input{width:100%;min-width:0;border:0;padding:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-variant-numeric:tabular-nums}.usage-billing_alertMeta__9TK_c{display:inline-flex;align-items:center;gap:4px;min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}.usage-billing_channels__MyCPH{display:flex;gap:2px}.usage-billing_channel__99vun,.usage-billing_iconButton__p6H4U,.usage-billing_remove__GAXCD{display:grid;width:28px;height:28px;place-items:center;border:0;border-radius:8px;background:transparent;color:var(--text-muted);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.usage-billing_channel__99vun[aria-pressed=true]{background:var(--accent-subtle);color:var(--accent-strong)}.usage-billing_slack___sI2_{display:block;filter:grayscale(1);opacity:.55;transition:filter var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}.usage-billing_channel__99vun[aria-pressed=true] .usage-billing_slack___sI2_{filter:none;opacity:1}.usage-billing_channel__99vun[data-brand][aria-pressed=true]{background:var(--surface-muted)}.usage-billing_channel__99vun:active,.usage-billing_iconButton__p6H4U:active,.usage-billing_remove__GAXCD:active{transform:scale(.94)}@media (hover:hover) and (pointer:fine){.usage-billing_channel__99vun:hover,.usage-billing_iconButton__p6H4U:hover,.usage-billing_remove__GAXCD:hover{color:var(--foreground)}}.usage-billing_alertFoot__WQuTy{display:flex;align-items:center;gap:8px;margin-top:8px}.usage-billing_add__kYwe_{display:inline-flex;height:32px;align-items:center;gap:6px;border:1px dashed var(--border-strong);border-radius:9px;padding:0 12px;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.usage-billing_add__kYwe_:active{transform:scale(.97)}.usage-billing_add__kYwe_:disabled{opacity:.5;cursor:default}@media (hover:hover) and (pointer:fine){.usage-billing_add__kYwe_:not(:disabled):hover{color:var(--foreground)}}.usage-billing_table__PPjDC{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.usage-billing_table__PPjDC th{padding:0 8px 8px 0;color:var(--text-muted);font-size:var(--text-xs);font-weight:400;text-align:left}.usage-billing_table__PPjDC td{border-top:1px solid var(--border-subtle);padding:8px 8px 8px 0;vertical-align:middle}.usage-billing_table__PPjDC .usage-billing_num__3T4cS{text-align:right;font-variant-numeric:tabular-nums}.usage-billing_table__PPjDC .usage-billing_action___kvbW{width:36px;padding-right:0;text-align:right}.usage-billing_invoiceName__30lYu{display:block;font-weight:500;white-space:nowrap}.usage-billing_status__DT41W.usage-billing_statusInline__N7UbC{display:none}.usage-billing_invoiceNumber__DS6Pq{display:block;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}.usage-billing_status__DT41W{display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary)}.usage-billing_status__DT41W:before{content:\"\";width:6px;height:6px;border-radius:var(--radius-pill);background:var(--success)}.usage-billing_status__DT41W[data-status=refunded]:before{background:var(--text-muted)}.usage-billing_status__DT41W[data-status=failed]:before{background:var(--danger)}.usage-billing_download__NpcLG{display:inline-grid;width:32px;height:32px;place-items:center;border:0;border-radius:8px;background:transparent;color:var(--text-muted);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.usage-billing_download__NpcLG:active{transform:scale(.94)}.usage-billing_download__NpcLG[data-state=done]{color:var(--success)}.usage-billing_download__NpcLG[data-state=error]{color:var(--danger)}@media (hover:hover) and (pointer:fine){.usage-billing_download__NpcLG:hover{color:var(--foreground)}}.usage-billing_downloadIcon__SzGOP{display:grid;place-items:center}.usage-billing_spinner__K55lu{width:14px;height:14px;border:1.5px solid var(--border-strong);border-top-color:var(--foreground);border-radius:50%;animation:usage-billing_usage-billing-spin__SBcS8 .7s linear infinite}@keyframes usage-billing_usage-billing-spin__SBcS8{to{transform:rotate(1turn)}}.usage-billing_scrim__HSW7u{position:absolute;z-index:20;inset:-8px;border-radius:18px;background:color-mix(in oklab,var(--background) 60%,transparent)}.usage-billing_sheet__9Ejho{position:absolute;z-index:21;top:0;left:0;overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface-raised);box-shadow:var(--shadow-floating);will-change:transform}.usage-billing_sheetContent__hR_U2{padding:16px}.usage-billing_sheetHead__YKgTY{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:-4px -6px 12px 0}.usage-billing_sheetDone__54dUx h3,.usage-billing_sheetHead__YKgTY h3{margin:0;font-size:var(--text-sm);font-weight:500;outline:none}.usage-billing_limits__7OVbM{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:var(--text-sm)}.usage-billing_limits__7OVbM th{padding:6px 0;color:var(--text-secondary);font-weight:400;text-align:left}.usage-billing_limits__7OVbM td{width:1%;padding:6px 0 6px 8px;color:var(--text-muted);text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}.usage-billing_limits__7OVbM td svg{display:block}.usage-billing_limits__7OVbM td strong{color:var(--accent-strong);font-weight:500}.usage-billing_limits__7OVbM tr+tr>*{border-top:1px solid var(--border-subtle)}.usage-billing_charges__e35hp{display:grid;gap:6px;margin:0;border-top:1px solid var(--border);padding-top:12px}.usage-billing_charges__e35hp div{display:flex;justify-content:space-between;gap:12px;color:var(--text-secondary)}.usage-billing_charges__e35hp dd{margin:0;font-variant-numeric:tabular-nums}.usage-billing_charges__e35hp .usage-billing_due__HNIHk{margin-top:4px;color:var(--foreground);font-weight:500}.usage-billing_sheetNote__4w33_{margin:10px 0 0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}.usage-billing_sheetError__6tcrZ{margin:10px 0 0;color:var(--danger);font-size:var(--text-xs)}.usage-billing_sheetActions__8XZ4_{display:flex;justify-content:flex-end;gap:6px;margin-top:16px}.usage-billing_simulated___P43_{margin:10px 0 0;color:var(--text-muted);font-size:var(--text-xs);text-align:right}.usage-billing_sheetDone__54dUx{display:grid;justify-items:center;gap:4px;padding:20px 0 16px;text-align:center}.usage-billing_sheetDone__54dUx svg{margin-bottom:6px;color:var(--success)}.usage-billing_sheetDone__54dUx p{margin:0;color:var(--text-secondary)}.usage-billing_srOnly__KRUm3{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.usage-billing_add__kYwe_,.usage-billing_ahead__3K3mU,.usage-billing_channel__99vun,.usage-billing_download__NpcLG,.usage-billing_iconButton__p6H4U,.usage-billing_remove__GAXCD,.usage-billing_used__szjRp{transition:none}}@media (prefers-reduced-motion:reduce){.usage-billing_spinner__K55lu{animation-duration:1.4s}}", {"root":"usage-billing_root__j67UM","header":"usage-billing_header__jtuJk","grid":"usage-billing_grid__kWal_","panel":"usage-billing_panel__PCsLM","panelHead":"usage-billing_panelHead__nP9dI","muted":"usage-billing_muted__TgoL9","spendHead":"usage-billing_spendHead__hK2XB","stat":"usage-billing_stat___G2_4","big":"usage-billing_big__1tuEc","substats":"usage-billing_substats__jncGo","chart":"usage-billing_chart__paW4E","gridLine":"usage-billing_gridLine__6O0A6","axis":"usage-billing_axis__HKUoY","budget":"usage-billing_budget__bx2gy","alertRule":"usage-billing_alertRule__I84xW","tick":"usage-billing_tick__IOW_P","area":"usage-billing_area__o_7Tp","line":"usage-billing_line__SzPpq","projection":"usage-billing_projection__4sdjE","today":"usage-billing_today__NZmYd","cursor":"usage-billing_cursor__4oAEQ","tip":"usage-billing_tip__ogSCh","pace":"usage-billing_pace__lNp5F","paceText":"usage-billing_paceText__NidD1","plan":"usage-billing_plan__D9CGh","planNow":"usage-billing_planNow__LuuDt","planName":"usage-billing_planName__ah2x0","planPrice":"usage-billing_planPrice__qSAwS","offer":"usage-billing_offer___LQwS","offerLead":"usage-billing_offerLead__rS_Uo","perks":"usage-billing_perks__IiBKV","offerButton":"usage-billing_offerButton__PZh9Z","meterList":"usage-billing_meterList__63QC1","meter":"usage-billing_meter__r8XL2","meterHead":"usage-billing_meterHead__nNrsx","meterFoot":"usage-billing_meterFoot__ZgTQr","meterName":"usage-billing_meterName__lsCbs","meterValue":"usage-billing_meterValue__PFSKy","track":"usage-billing_track__uKy9p","used":"usage-billing_used__szjRp","ahead":"usage-billing_ahead__3K3mU","meterNote":"usage-billing_meterNote__NZuz4","legend":"usage-billing_legend__jNpGz","alertList":"usage-billing_alertList__wHuG_","alert":"usage-billing_alert__18N3Y","alertInner":"usage-billing_alertInner__AJUXk","amount":"usage-billing_amount__mm9rn","alertMeta":"usage-billing_alertMeta__9TK_c","channels":"usage-billing_channels__MyCPH","channel":"usage-billing_channel__99vun","remove":"usage-billing_remove__GAXCD","iconButton":"usage-billing_iconButton__p6H4U","slack":"usage-billing_slack___sI2_","alertFoot":"usage-billing_alertFoot__WQuTy","add":"usage-billing_add__kYwe_","table":"usage-billing_table__PPjDC","num":"usage-billing_num__3T4cS","action":"usage-billing_action___kvbW","invoiceName":"usage-billing_invoiceName__30lYu","status":"usage-billing_status__DT41W","statusInline":"usage-billing_statusInline__N7UbC","invoiceNumber":"usage-billing_invoiceNumber__DS6Pq","download":"usage-billing_download__NpcLG","downloadIcon":"usage-billing_downloadIcon__SzGOP","spinner":"usage-billing_spinner__K55lu","usage-billing-spin":"usage-billing_usage-billing-spin__SBcS8","scrim":"usage-billing_scrim__HSW7u","sheet":"usage-billing_sheet__9Ejho","sheetContent":"usage-billing_sheetContent__hR_U2","sheetHead":"usage-billing_sheetHead__YKgTY","sheetDone":"usage-billing_sheetDone__54dUx","limits":"usage-billing_limits__7OVbM","charges":"usage-billing_charges__e35hp","due":"usage-billing_due__HNIHk","sheetNote":"usage-billing_sheetNote__4w33_","sheetError":"usage-billing_sheetError__6tcrZ","sheetActions":"usage-billing_sheetActions__8XZ4_","simulated":"usage-billing_simulated___P43_","srOnly":"usage-billing_srOnly__KRUm3","invoices":"usage-billing_invoices__qaaNG","issued":"usage-billing_issued__kVIXG","statusCol":"usage-billing_statusCol__huGm7"});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.reg(71019, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "credit-card",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ["path", { d: "M6 14h2", key: "mk7k0u" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(75796, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "mail",
    size: 24,
    node: [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("usage-billing", [26887,64444]);
A.item("usage-billing", {entry:2971, export:"UsageBilling", kind:"block", tier:"pro", unresolved:[]});
})();