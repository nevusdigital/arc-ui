function(__module,__exports,__require){
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
}