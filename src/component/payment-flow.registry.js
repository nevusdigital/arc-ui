/* payment-flow (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(5669, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "landmark",
    size: 24,
    node: [
      ["path", { d: "M10 18v-7", key: "wt116b" }],
      [
        "path",
        {
          d: "M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",
          key: "yxxwt6"
        }
      ],
      ["path", { d: "M14 18v-7", key: "vav6t3" }],
      ["path", { d: "M18 18v-7", key: "aexdmj" }],
      ["path", { d: "M3 22h18", key: "8prr45" }],
      ["path", { d: "M6 18v-7", key: "1ivflk" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(72077, ".demo{display:grid;width:100%;max-width:920px;margin-inline:auto}", {"demo":"demo"});
A.reg(83521, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { PaymentFlowDemo: () => $, default: () => L });
  var l = a(95155), s = a(12115), r = a(18310), i = a(51811);
  let n = {
    name: "nfc",
    size: 24,
    node: [
      ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
      ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }],
      ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }],
      ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }]
    ]
  };
  n.node;
  let o = (0, i.A)(n);
  var c = a(5669), d = a(85974), p = a(84146), h = a.n(p);
  let u = (0, l.jsxs)("svg", {
    viewBox: "2 2 20 20",
    "aria-hidden": "true",
    children: [
      (0, l.jsx)("circle", { cx: "9", cy: "12", r: "6.5", fill: "#EB001B" }),
      (0, l.jsx)("circle", { cx: "15", cy: "12", r: "6.5", fill: "#F79E1B" }),
      (0, l.jsx)("path", {
        d: "M12 6.234A6.5 6.5 0 0 1 12 17.766A6.5 6.5 0 0 1 12 6.234Z",
        fill: "#FF5F00"
      })
    ]
  }), y = {
    terminal: {
      label: "Checkout",
      meta: "Tap to pay",
      detail: "A card or phone is tapped on the reader",
      icon: (0, l.jsx)(o, {})
    },
    processor: {
      label: "Stripe",
      meta: "Processor",
      detail: "Checks risk and forwards the request",
      icon: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z",
      color: "#635BFF"
    },
    network: {
      label: "Mastercard",
      meta: "Card network",
      detail: "Routes it to the bank that issued the card",
      icon: u
    },
    issuer: {
      label: "Bank",
      meta: "Card issuer",
      detail: "Checks the balance and holds the funds",
      icon: (0, l.jsx)(c.A, {})
    },
    merchant: {
      label: "Your balance",
      detail: "Receives the payout, minus fees",
      icon: (0, l.jsx)(d.A, {})
    }
  }, f = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), m = (e2) => 0.5 - Math.cos(Math.PI * f(e2)) / 2, x = (e2) => 1 - (1 - f(e2)) ** 3, w = (e2) => e2.toFixed(2), k = () => () => {
  };
  function b(e2) {
    let t2 = [], a2 = [], l2 = [], s2 = [], r2 = "", i2 = (e3, s3) => {
      let r3 = t2.length;
      l2.push(r3 ? l2[r3 - 1] + Math.hypot(e3 - t2[r3 - 1], s3 - a2[r3 - 1]) : 0), t2.push(e3), a2.push(s3);
    };
    return e2.forEach((e3, t3) => {
      if (0 === t3 && (r2 = `M${w(e3.a.x)} ${w(e3.a.y)}`, i2(e3.a.x, e3.a.y)), "line" === e3.kind)
        r2 += ` L${w(e3.b.x)} ${w(e3.b.y)}`, i2(e3.b.x, e3.b.y);
      else {
        r2 += ` Q${w(e3.c.x)} ${w(e3.c.y)} ${w(e3.b.x)} ${w(e3.b.y)}`;
        for (let t4 = 1; t4 <= 12; t4++) {
          let a3 = t4 / 12, l3 = 1 - a3;
          i2(
            l3 * l3 * e3.a.x + 2 * l3 * a3 * e3.c.x + a3 * a3 * e3.b.x,
            l3 * l3 * e3.a.y + 2 * l3 * a3 * e3.c.y + a3 * a3 * e3.b.y
          );
        }
      }
      s2.push(l2[l2.length - 1]);
    }), {
      curve: {
        d: r2,
        xs: Float32Array.from(t2),
        ys: Float32Array.from(a2),
        acc: Float32Array.from(l2),
        len: l2[l2.length - 1] || 1
      },
      marks: s2
    };
  }
  let _ = (e2, t2) => `M${w(e2.x)} ${w(e2.y)} L${w(t2.x)} ${w(t2.y)}`;
  function v({ node: e2 }) {
    let { icon: t2, color: a2 } = e2;
    if (null == t2) return null;
    if ("string" == typeof t2)
      return /^(\/|\.|https?:|data:|blob:)/.test(t2) ? (0, l.jsx)("img", {
        className: h().mark,
        src: t2,
        alt: "",
        draggable: false
      }) : (0, l.jsx)("svg", {
        className: h().mark,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: (0, l.jsx)("path", { d: t2, fill: a2 ?? "currentColor" })
      });
    return (0, l.jsx)("span", {
      className: h().mark,
      "aria-hidden": "true",
      children: t2
    });
  }
  let g = [
    { seg: [0], rail: [], stub: [] },
    { seg: [0, 1], rail: [], stub: [1] },
    { seg: [1, 2], rail: [], stub: [0] },
    { seg: [2], rail: [0], stub: [] },
    { seg: [], rail: [2], stub: [] }
  ];
  function j({
    nodes: e2,
    amount: t2 = 42.5,
    fee: a2 = 1.53,
    balance: i2 = 1284.1,
    currency: n2 = "USD",
    locale: o2 = "en-US",
    authorizationMs: c2 = 1340,
    labels: d2,
    hideSteps: p2 = false,
    speed: u2 = 1,
    paused: M2 = false,
    accent: N2,
    label: $2,
    caption: L2,
    className: A,
    style: F
  }) {
    let E, C = (E = (0, s.useSyncExternalStore)(
      k,
      () => true,
      () => false
    ), !!(0, r.I)() && E), S = (0, s.useRef)(null), [z, B] = (0, s.useState)(0), [R, H] = (0, s.useState)(null), I = (0, s.useMemo)(
      () => [
        { ...y.terminal, ...e2?.terminal },
        { ...y.processor, ...e2?.processor },
        { ...y.network, ...e2?.network },
        { ...y.issuer, ...e2?.issuer },
        { ...y.merchant, ...e2?.merchant }
      ],
      [e2]
    ), V = (0, s.useMemo)(
      () => new Intl.NumberFormat(o2, { style: "currency", currency: n2 }),
      [o2, n2]
    ), P = Math.max(0, t2), q = f(a2, 0, P), D = P - q, W = d2?.approved ?? "Approved", T = d2?.authorization ?? "Authorization", G = d2?.settlement ?? "Settlement", J = d2?.settlementTime ?? "Next business day", U = (0, s.useMemo)(
      () => (function() {
        let e3 = [], t3 = 0.95, a3 = [];
        for (let l3 = 0; l3 < 3; l3++)
          e3.push({ pill: 0, t0: t3, dur: 0.72, kind: "fwd", k: l3 }), a3.push(t3 += 0.72), l3 < 2 && (t3 += 0.5);
        let l2 = t3, s2 = t3 + 0.9;
        t3 = s2;
        let r2 = [];
        for (let a4 = 2; a4 >= 0; a4--)
          e3.push({ pill: 1, t0: t3, dur: 0.64, kind: "back", k: a4 }), r2.push(t3 += 0.64), a4 > 0 && (t3 += 0.16);
        let i3 = t3, n3 = i3 + 1.55;
        e3.push({
          pill: 2,
          t0: t3 = n3,
          dur: 1.1700000000000002,
          kind: "rail",
          k: 0
        });
        let o3 = t3 += 1.1700000000000002;
        e3.push({
          pill: 2,
          t0: t3 += 0.45,
          dur: 0.765,
          kind: "rail",
          k: 1
        });
        let c3 = t3 += 0.765, d3 = c3 + 0.08;
        e3.push({ pill: 3, t0: t3 += 0.7, dur: 0.9, kind: "rail", k: 2 });
        let p3 = t3 += 0.9, h2 = p3 + 1.9 + 0.6, u3 = h2 - 0.6, y2 = [
          { from: 0.95, to: l2 },
          { from: s2, to: i3 },
          { from: n3, to: d3 + 0.3 },
          { from: d3, to: p3 }
        ], f2 = (e4 = null) => ({ at: 0, state: "idle", text: e4 }), m2 = [
          [
            f2(),
            { at: 0.35, state: "active", text: "Card tapped" },
            { at: 1.2, state: "active", text: "Authorizing" },
            { at: i3 - 0.1, state: "ok", text: "Approved" }
          ],
          [
            f2(),
            { at: a3[0] - 0.12, state: "active", text: "Checking risk" },
            { at: a3[0] + 0.5, state: "done", text: "Risk checked" },
            { at: c3 - 0.1, state: "active", text: "fee" },
            { at: c3 + 0.7, state: "done", text: "fee" }
          ],
          [
            f2(),
            { at: a3[1] - 0.12, state: "active", text: "Routing" },
            { at: a3[1] + 0.5, state: "done", text: "Routed to bank" },
            { at: o3 - 0.1, state: "active", text: "Clearing" },
            { at: o3 + 0.45, state: "done", text: "Cleared" }
          ],
          [
            f2(),
            { at: a3[2] - 0.12, state: "active", text: "Checking funds" },
            { at: s2, state: "ok", text: "Approved" },
            { at: s2 + 0.9, state: "done", text: "Funds held" },
            { at: n3 - 0.05, state: "active", text: "Settling" },
            { at: n3 + 0.45, state: "ok", text: "Settled" }
          ],
          [
            f2(),
            { at: d3 + 0.3, state: "active", text: null },
            { at: p3 - 0.08, state: "ok", text: null }
          ]
        ];
        m2.forEach((e4) => e4.push({ at: u3, state: "idle", text: null }));
        let x2 = m2.map((e4) => {
          let t4 = [], a4 = e4[e4.length - 1].text;
          for (let l3 of e4) l3.text !== a4 && t4.push(l3.at), a4 = l3.text;
          return t4;
        });
        return {
          hops: e3,
          life: y2,
          phases: m2,
          changes: x2,
          T: h2,
          end: u3,
          approve: s2,
          approved: i3,
          fadeAuth: i3 + 1.1,
          s0: n3,
          atNet: o3,
          atProc: c3,
          swap: d3,
          settled: p3,
          still: d3 + 0.3 + 0.15
        };
      })(),
      []
    ), O = (0, s.useMemo)(
      () => z > 0 ? (function(e3) {
        let t3, a3, l2, s2 = e3 < 700, r2 = [], i3 = [], n3 = [];
        if (s2) {
          let s3 = 2 * Math.round(Math.min(e3 * (e3 < 300 ? 0.56 : 0.5), 240) / 2);
          for (let e4 = 0; e4 < 4; e4++)
            r2.push({ x: 1, y: 10 + 108 * e4, w: s3, h: 56 });
          let o4 = 1 + s3 + 14, c4 = Math.round(
            (t3 = { x: o4, y: 10, w: e3 - 1 - o4, h: 56 }).x + t3.w / 2
          ), d4 = (e4) => r2[e4].y + 28, p4 = { x: c4, y: d4(2) }, h3 = { x: c4, y: d4(1) };
          n3.push(p4, h3), i3.push(
            { a: { x: 1 + s3, y: p4.y }, b: { x: c4 - 4, y: p4.y } },
            { a: { x: 1 + s3, y: h3.y }, b: { x: c4 - 4, y: h3.y } }
          );
          let u4 = d4(3);
          l2 = [
            {
              kind: "line",
              a: { x: 1 + s3 / 2, y: u4 },
              b: { x: c4 - 18, y: u4 }
            },
            {
              kind: "quad",
              a: { x: c4 - 18, y: u4 },
              c: { x: c4, y: u4 },
              b: { x: c4, y: u4 - 18 }
            },
            { kind: "line", a: { x: c4, y: u4 - 18 }, b: p4 },
            { kind: "line", a: p4, b: h3 },
            { kind: "line", a: h3, b: { x: c4, y: 38 } }
          ], a3 = r2[3].y + 56 + 1;
        } else {
          let s3 = 2 * Math.round(f(0.18 * e3, 150, 196) / 2), o4 = (e3 - 2 - 4 * s3) / 3;
          for (let e4 = 0; e4 < 4; e4++)
            r2.push({
              x: Math.round(1 + e4 * (s3 + o4)),
              y: 10,
              w: s3,
              h: 60
            });
          let c4 = (e4) => e4.x + e4.w / 2, d4 = (t3 = { x: 1, y: 126, w: s3, h: 60 }).y + 30, p4 = c4(r2[3]), h3 = { x: c4(r2[2]), y: d4 }, u4 = { x: c4(r2[1]), y: d4 };
          n3.push(h3, u4), i3.push(
            { a: { x: h3.x, y: 70 }, b: { x: h3.x, y: d4 - 4 } },
            { a: { x: u4.x, y: 70 }, b: { x: u4.x, y: d4 - 4 } }
          ), l2 = [
            {
              kind: "line",
              a: { x: p4, y: 40 },
              b: { x: p4, y: d4 - 18 }
            },
            {
              kind: "quad",
              a: { x: p4, y: d4 - 18 },
              c: { x: p4, y: d4 },
              b: { x: p4 - 18, y: d4 }
            },
            { kind: "line", a: { x: p4 - 18, y: d4 }, b: h3 },
            { kind: "line", a: h3, b: u4 },
            { kind: "line", a: u4, b: { x: c4(t3), y: d4 } }
          ], a3 = t3.y + 60 + 1;
        }
        let o3 = r2.map((e4) => ({ x: e4.x + e4.w / 2, y: e4.y + e4.h / 2 })), c3 = b(
          [0, 1, 2].map((e4) => ({
            kind: "line",
            a: o3[e4],
            b: o3[e4 + 1]
          }))
        ), d3 = b(l2), p3 = [0, ...c3.marks], h2 = [d3.marks[2], d3.marks[3]], u3 = [0, 1, 2].map((e4) => _(o3[e4], o3[e4 + 1])), y2 = [
          b(l2.slice(0, 3)).curve.d,
          _(l2[3].a, l2[3].b),
          _(l2[4].a, l2[4].b)
        ], m2 = [];
        for (let e4 = 0; e4 < 3; e4++) {
          let t4 = r2[e4], a4 = r2[e4 + 1];
          s2 ? m2.push(
            { x: o3[e4].x, y: t4.y + t4.h },
            { x: o3[e4 + 1].x, y: a4.y }
          ) : m2.push(
            { x: t4.x + t4.w, y: o3[e4].y },
            { x: a4.x, y: o3[e4 + 1].y }
          );
        }
        return s2 ? m2.push(
          { x: r2[3].x + r2[3].w, y: o3[3].y },
          { x: t3.x + t3.w / 2, y: t3.y + t3.h }
        ) : m2.push(
          { x: o3[3].x, y: r2[3].y + r2[3].h },
          { x: t3.x + t3.w, y: t3.y + t3.h / 2 }
        ), i3.forEach((e4) => m2.push(e4.a)), {
          w: e3,
          h: a3,
          narrow: s2,
          compact: t3.w < 140,
          chips: r2,
          merchant: t3,
          centers: o3,
          auth: c3.curve,
          rail: d3.curve,
          stops: p3,
          railStops: h2,
          segs: u3,
          railSegs: y2,
          stubs: i3,
          waypoints: n3,
          ports: m2
        };
      })(z) : null,
      [z]
    ), Q = (0, s.useRef)({
      pill: [],
      authLit: null,
      okLit: null,
      railLit: null,
      tap: [],
      waypoint: [],
      stub: [],
      check: null,
      chip: [],
      status: [],
      step: [],
      stepMeta: null,
      fill: []
    }), X = (0, s.useRef)({
      t: 0,
      rate: NaN,
      rateV: 0,
      frame: 0,
      running: false,
      visible: true,
      dims: [
        { w: 64, h: 24 },
        { w: 96, h: 24 },
        { w: 64, h: 24 },
        { w: 64, h: 24 }
      ],
      cache: /* @__PURE__ */ new Map(),
      text: /* @__PURE__ */ new Map()
    }), Z = M2 ? 0 : Math.max(0, u2) * (null !== R ? 0.6 : 1), Y = (0, s.useRef)({
      geometry: O,
      timeline: U,
      target: Z,
      reduced: C,
      nodes: I,
      money: V,
      gross: P,
      cut: q,
      net: D,
      balance: i2,
      authorizationMs: c2
    });
    (0, s.useLayoutEffect)(() => {
      Y.current = {
        geometry: O,
        timeline: U,
        target: Z,
        reduced: C,
        nodes: I,
        money: V,
        gross: P,
        cut: q,
        net: D,
        balance: i2,
        authorizationMs: c2
      };
    });
    let K = (0, s.useCallback)((e3, t3, a3) => {
      if (!e3) return;
      let l2 = X.current.cache, s2 = l2.get(e3);
      s2 || (s2 = {}, l2.set(e3, s2)), s2[t3] !== a3 && (s2[t3] = a3, t3.startsWith("style:") ? e3.style.setProperty(t3.slice(6), a3) : e3.setAttribute(t3, a3));
    }, []), ee = (0, s.useCallback)((e3, t3) => {
      e3 && X.current.text.get(e3) !== t3 && (X.current.text.set(e3, t3), e3.textContent = t3);
    }, []), et = (0, s.useCallback)(
      (e3, t3 = false) => {
        let {
          geometry: a3,
          timeline: l2,
          nodes: s2,
          money: r2,
          cut: i3,
          net: n3,
          balance: o3,
          authorizationMs: c3
        } = Y.current;
        if (!a3) return;
        let d3 = Q.current, p3 = X.current.dims, { T: h2 } = l2, u3 = (e3 % h2 + h2) % h2, y2 = Math.floor(e3 / h2), k2 = (e4, t4) => (t4 ? p3[e4].h : p3[e4].w) / 2 + 1, b2 = (e4, t4) => (e4 ? t4.h : t4.w) / 2, _2 = (e4) => {
          let t4 = null, s3 = null;
          for (let a4 of l2.hops)
            a4.pill === e4 && (s3 || (s3 = a4), a4.t0 <= u3 && (t4 = a4));
          let r3 = t4 ?? s3, [i4, n4] = ((e5) => {
            if ("rail" !== e5.kind) {
              let t5 = b2(a3.narrow, a3.chips[0]) - k2(e5.pill, a3.narrow), l3 = a3.stops[e5.k] + t5, s4 = a3.stops[e5.k + 1] - t5;
              return "fwd" === e5.kind ? [l3, s4] : [s4, l3];
            }
            return 0 === e5.k ? [
              b2(!a3.narrow, a3.chips[3]) - k2(e5.pill, !a3.narrow),
              a3.railStops[0]
            ] : 1 === e5.k ? [a3.railStops[0], a3.railStops[1]] : [
              a3.railStops[1],
              a3.rail.len - (b2(a3.narrow, a3.merchant) - k2(e5.pill, a3.narrow))
            ];
          })(r3);
          return {
            s: i4 + (n4 - i4) * (t4 ? m((u3 - r3.t0) / r3.dur) : 0),
            rail: "rail" === r3.kind
          };
        }, v2 = a3.chips[0];
        d3.tap.forEach((e4, a4) => {
          let l3 = (u3 - 0.35 - 0.2 * a4) / 0.95;
          if (l3 < 0 || l3 >= 1 || t3) return void K(e4, "opacity", "0");
          let s3 = 2 + 14 * x(l3);
          K(e4, "x", w(v2.x - s3)), K(e4, "y", w(v2.y - s3)), K(e4, "width", w(v2.w + 2 * s3)), K(e4, "height", w(v2.h + 2 * s3)), K(e4, "rx", w(16 + s3)), K(e4, "opacity", (0.5 * f(l3 / 0.08) * (1 - l3) ** 2).toFixed(3));
        });
        let g2 = [];
        for (let e4 = 0; e4 < 4; e4++) {
          let t4 = d3.pill[e4], s3 = l2.life[e4], r3 = _2(e4);
          if (g2[e4] = r3, !(u3 >= s3.from && u3 <= s3.to)) {
            K(t4, "style:opacity", "0");
            continue;
          }
          let i4 = (function(e5, t5) {
            let { acc: a4, xs: l3, ys: s4 } = e5, r4 = f(t5, 0, e5.len), i5 = 0, n5 = a4.length - 1;
            for (; n5 - i5 > 1; ) {
              let e6 = i5 + n5 >> 1;
              a4[e6] < r4 ? i5 = e6 : n5 = e6;
            }
            let o5 = a4[n5] - a4[i5] || 1, c4 = (r4 - a4[i5]) / o5;
            return {
              x: l3[i5] + (l3[n5] - l3[i5]) * c4,
              y: s4[i5] + (s4[n5] - s4[i5]) * c4
            };
          })(r3.rail ? a3.rail : a3.auth, r3.s), n4 = 1, o4 = 1;
          if (2 === e4) {
            let e5 = m((u3 - l2.swap) / 0.3);
            n4 = 1 - e5, o4 = 1 - 0.12 * e5;
          }
          if (3 === e4) {
            let e5 = m((u3 - l2.swap) / 0.3);
            n4 = e5, o4 = 0.88 + 0.12 * e5;
          }
          K(
            t4,
            "style:transform",
            `translate(${w(i4.x)}px, ${w(i4.y)}px) translate(-50%, -50%) scale(${o4.toFixed(3)})`
          ), K(t4, "style:opacity", n4.toFixed(3));
        }
        let j2 = t3 ? 0 : f((u3 - l2.fadeAuth) / 0.6), M3 = a3.auth.len, N3 = u3 < 0.95 ? 0 : u3 >= l2.life[0].to ? M3 : g2[0].s;
        K(d3.authLit, "stroke-dasharray", `${w(N3 / M3 * 1e3)} 2000`), K(d3.authLit, "opacity", u3 < 0.95 ? "0" : (1 - j2).toFixed(3));
        let $3 = u3 < l2.approve ? M3 : u3 >= l2.approved ? 0 : g2[1].s;
        K(d3.okLit, "stroke-dasharray", `0 ${w($3 / M3 * 1e3)} 1000 2000`), K(d3.okLit, "opacity", u3 < l2.approve ? "0" : (1 - j2).toFixed(3));
        let L3 = a3.rail.len, A2 = u3 < l2.s0 ? 0 : u3 >= l2.settled ? L3 : u3 >= l2.swap ? g2[3].s : g2[2].s, F2 = f((u3 - l2.settled - 1.1) / 0.6);
        K(d3.railLit, "stroke-dasharray", `${w(A2 / L3 * 1e3)} 2000`), K(d3.railLit, "opacity", u3 < l2.s0 ? "0" : (1 - F2).toFixed(3));
        let E2 = u3 >= l2.s0 && u3 < l2.settled + 1.1;
        [l2.atNet, l2.atProc].forEach((e4, t4) => {
          let a4 = E2 && u3 >= e4 - 0.08 ? "true" : "false";
          K(d3.waypoint[t4], "data-lit", a4), K(d3.stub[t4], "data-lit", a4);
        });
        let C2 = (u3 - l2.approved) / 1.5;
        if (C2 >= 0 && C2 < 1 && !t3) {
          let e4, t4 = a3.chips[0], l3 = 0.55 + 0.45 * (1 + 2.1 * (e4 = f(3.2 * C2) - 1) ** 3 + 1.1 * e4 ** 2);
          K(
            d3.check,
            "transform",
            `translate(${w(t4.x + t4.w - 8)} ${w(t4.y + 1 - 4 * x(C2))}) scale(${l3.toFixed(3)})`
          ), K(
            d3.check,
            "opacity",
            Math.min(f(C2 / 0.08), f((1 - C2) / 0.3)).toFixed(3)
          );
        } else K(d3.check, "opacity", "0");
        let S2 = u3 >= l2.settled ? m((u3 - l2.settled) / 0.9) : 0;
        s2.forEach((e4, a4) => {
          let s3 = l2.phases[a4], c4 = s3[0];
          for (let e5 of s3) e5.at <= u3 && (c4 = e5);
          (K(d3.chip[a4], "data-state", c4.state), 4 === a4) ? ee(d3.status[a4], r2.format(o3 + n3 * (y2 + S2))) : (ee(
            d3.status[a4],
            "fee" === c4.text ? `Fee ${r2.format(i3)}` : c4.text ?? e4.meta ?? ""
          ), K(
            d3.status[a4],
            "style:opacity",
            ((e5) => {
              if (t3) return 1;
              let a5 = 1;
              for (let t4 of l2.changes[e5]) {
                let e6 = Math.abs(u3 - t4);
                a5 = Math.min(a5, f(Math.min(e6, h2 - e6) / 0.13));
              }
              return a5 * a5 * (3 - 2 * a5);
            })(a4).toFixed(3)
          ));
        });
        let z2 = f((u3 - 0.95) / (l2.approved - 0.95)), B2 = f((u3 - l2.s0) / (l2.settled - l2.s0)), R2 = 1 - f((u3 - l2.end) / 0.4);
        K(d3.fill[0], "style:transform", `scaleX(${(z2 * R2).toFixed(4)})`), K(d3.fill[1], "style:transform", `scaleX(${(B2 * R2).toFixed(4)})`), K(
          d3.step[0],
          "data-state",
          u3 >= l2.end ? "idle" : u3 >= l2.approved ? "done" : u3 >= 0.95 ? "active" : "idle"
        ), K(
          d3.step[1],
          "data-state",
          u3 >= l2.end ? "idle" : u3 >= l2.settled ? "done" : u3 >= l2.s0 ? "active" : "idle"
        ), ee(
          d3.stepMeta,
          `${((u3 >= l2.end ? 0 : z2) * c3 / 1e3).toFixed(2)} s`
        );
      },
      [K, ee]
    ), ea = (0, s.useCallback)(() => {
      let e3 = X.current;
      if (e3.running || !e3.visible || Y.current.reduced) return;
      e3.running = true;
      let t3 = performance.now(), a3 = (l2) => {
        if (!e3.visible || Y.current.reduced) {
          e3.running = false;
          return;
        }
        let s2 = f((l2 - t3) / 1e3, 0, 0.05);
        t3 = l2;
        let r2 = Y.current.target;
        if (Number.isNaN(e3.rate) && (e3.rate = r2), e3.rateV += (40 * (r2 - e3.rate) - 2 * Math.sqrt(40) * e3.rateV) * s2, e3.rate += e3.rateV * s2, 1e-4 > Math.abs(r2 - e3.rate) && 1e-4 > Math.abs(e3.rateV) && (e3.rate = r2, e3.rateV = 0), e3.t += s2 * e3.rate, et(e3.t), 0 === e3.rate && 0 === r2 || !e3.visible || Y.current.reduced) {
          e3.running = false;
          return;
        }
        e3.frame = requestAnimationFrame(a3);
      };
      e3.frame = requestAnimationFrame(a3);
    }, [et]);
    (0, s.useLayoutEffect)(() => {
      let e3 = S.current;
      if (!e3) return;
      let t3 = () => B(Math.floor(e3.clientWidth));
      t3();
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, s.useLayoutEffect)(() => {
      let e3 = X.current;
      e3.cache = /* @__PURE__ */ new Map(), e3.text = /* @__PURE__ */ new Map(), Q.current.pill.forEach((t3, a3) => {
        t3 && t3.offsetWidth && (e3.dims[a3] = { w: t3.offsetWidth, h: t3.offsetHeight });
      }), et(C ? U.still : e3.t, C), C || ea();
    }, [O, U, C, Z, p2, I, V, P, q, i2, W, et, ea]), (0, s.useEffect)(() => {
      let e3 = S.current, t3 = X.current;
      if (!e3) return;
      let a3 = true, l2 = true, s2 = () => {
        t3.visible = a3 && !document.hidden, t3.visible ? ea() : (cancelAnimationFrame(t3.frame), t3.running = false);
      }, r2 = new IntersectionObserver(([e4]) => {
        a3 = e4.isIntersecting, s2();
      });
      return r2.observe(e3), document.addEventListener("visibilitychange", s2), document.fonts?.ready.then(() => {
        l2 && Q.current.pill.forEach((e4, a4) => {
          e4 && e4.offsetWidth && (t3.dims[a4] = { w: e4.offsetWidth, h: e4.offsetHeight });
        });
      }), () => {
        l2 = false, r2.disconnect(), document.removeEventListener("visibilitychange", s2), cancelAnimationFrame(t3.frame), t3.running = false;
      };
    }, [ea]);
    let [el, es, er, , ei] = I, en = $2 ?? `Card payment flow. A ${V.format(P)} card tap at ${el.label} goes to ${es.label}, then the ${er.label} network, then the issuing bank, which approves it and holds the funds. The approval travels back to ${el.label} in about ${(c2 / 1e3).toFixed(1)} seconds. At settlement the funds clear through ${er.label} and ${es.label}, which keeps a ${V.format(q)} fee, and ${V.format(D)} reaches ${ei.label.toLowerCase()}.`, eo = { ...F, ...N2 ? { "--pf-accent": N2 } : null }, ec = null === R ? null : g[R], ed = O ? [...O.chips, O.merchant] : [];
    return (0, l.jsxs)("figure", {
      className: [h().root, A].filter(Boolean).join(" "),
      style: eo,
      "data-ready": !!O || void 0,
      "data-layout": O?.narrow ? "narrow" : "wide",
      children: [
        (0, l.jsxs)("div", {
          className: h().diagram,
          role: "img",
          "aria-label": en,
          children: [
            (0, l.jsx)("div", {
              ref: S,
              className: h().stage,
              style: O ? { height: O.h } : void 0,
              children: O && (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("svg", {
                    className: h().layer,
                    viewBox: `0 0 ${O.w} ${O.h}`,
                    width: O.w,
                    height: O.h,
                    "aria-hidden": "true",
                    children: [
                      O.segs.map(
                        (e3, t3) => (0, l.jsx)(
                          "path",
                          {
                            className: h().wire,
                            "data-on": ec?.seg.includes(t3) || void 0,
                            d: e3
                          },
                          `seg-${t3}`
                        )
                      ),
                      O.railSegs.map(
                        (e3, t3) => (0, l.jsx)(
                          "path",
                          {
                            className: h().wire,
                            "data-on": ec?.rail.includes(t3) || void 0,
                            d: e3
                          },
                          `rail-${t3}`
                        )
                      ),
                      O.stubs.map(
                        (e3, t3) => (0, l.jsx)(
                          "path",
                          {
                            ref: (e4) => {
                              Q.current.stub[t3] = e4;
                            },
                            className: h().stub,
                            "data-on": ec?.stub.includes(t3) || void 0,
                            "data-lit": "false",
                            d: _(e3.a, e3.b)
                          },
                          `stub-${t3}`
                        )
                      ),
                      (0, l.jsx)("path", {
                        ref: (e3) => {
                          Q.current.authLit = e3;
                        },
                        className: h().lit,
                        d: O.auth.d,
                        pathLength: 1e3,
                        opacity: 0
                      }),
                      (0, l.jsx)("path", {
                        ref: (e3) => {
                          Q.current.okLit = e3;
                        },
                        className: h().okLit,
                        d: O.auth.d,
                        pathLength: 1e3,
                        opacity: 0
                      }),
                      (0, l.jsx)("path", {
                        ref: (e3) => {
                          Q.current.railLit = e3;
                        },
                        className: h().lit,
                        d: O.rail.d,
                        pathLength: 1e3,
                        opacity: 0
                      }),
                      O.ports.map(
                        (e3, t3) => (0, l.jsx)(
                          "circle",
                          { className: h().port, cx: e3.x, cy: e3.y, r: 2.75 },
                          `port-${t3}`
                        )
                      ),
                      O.waypoints.map(
                        (e3, t3) => (0, l.jsx)(
                          "circle",
                          {
                            ref: (e4) => {
                              Q.current.waypoint[t3] = e4;
                            },
                            className: h().waypoint,
                            "data-lit": "false",
                            cx: e3.x,
                            cy: e3.y,
                            r: 4
                          },
                          `way-${t3}`
                        )
                      ),
                      [0, 1].map(
                        (e3) => (0, l.jsx)(
                          "rect",
                          {
                            ref: (t3) => {
                              Q.current.tap[e3] = t3;
                            },
                            className: h().tap,
                            opacity: 0
                          },
                          `tap-${e3}`
                        )
                      )
                    ]
                  }),
                  (0, l.jsx)("span", {
                    ref: (e3) => {
                      Q.current.pill[0] = e3;
                    },
                    className: h().pill,
                    style: { opacity: 0 },
                    children: V.format(P)
                  }),
                  (0, l.jsxs)("span", {
                    ref: (e3) => {
                      Q.current.pill[1] = e3;
                    },
                    className: h().pill,
                    "data-tone": "ok",
                    style: { opacity: 0 },
                    children: [
                      (0, l.jsx)("svg", {
                        viewBox: "0 0 12 12",
                        "aria-hidden": "true",
                        children: (0, l.jsx)("path", {
                          d: "M2.6 6.3 L5 8.6 L9.4 3.6"
                        })
                      }),
                      W
                    ]
                  }),
                  (0, l.jsx)("span", {
                    ref: (e3) => {
                      Q.current.pill[2] = e3;
                    },
                    className: h().pill,
                    style: { opacity: 0 },
                    children: V.format(P)
                  }),
                  (0, l.jsx)("span", {
                    ref: (e3) => {
                      Q.current.pill[3] = e3;
                    },
                    className: h().pill,
                    style: { opacity: 0 },
                    children: V.format(D)
                  }),
                  ed.map((e3, t3) => {
                    let a3 = I[t3];
                    return (0, l.jsxs)(
                      "div",
                      {
                        ref: (e4) => {
                          Q.current.chip[t3] = e4;
                        },
                        className: h().chip,
                        "data-state": "idle",
                        "data-on": R === t3 || void 0,
                        "data-edge": O ? O.narrow ? 4 === t3 ? "end" : "start" : 0 === t3 || 4 === t3 ? "start" : 3 === t3 ? "end" : void 0 : void 0,
                        "data-compact": 4 === t3 && O.compact || void 0,
                        style: {
                          left: e3.x,
                          top: e3.y,
                          width: e3.w,
                          height: e3.h
                        },
                        ...{
                          onPointerEnter: (e4) => {
                            "mouse" === e4.pointerType && H(t3);
                          },
                          onPointerLeave: () => H((e4) => e4 === t3 ? null : e4)
                        },
                        children: [
                          (0, l.jsx)(v, { node: a3 }),
                          (0, l.jsxs)("span", {
                            className: h().text,
                            children: [
                              (0, l.jsx)("span", {
                                className: h().label,
                                children: a3.label
                              }),
                              (0, l.jsxs)("span", {
                                className: h().meta,
                                children: [
                                  (0, l.jsx)("span", {
                                    className: h().health
                                  }),
                                  (0, l.jsx)("span", {
                                    ref: (e4) => {
                                      Q.current.status[t3] = e4;
                                    },
                                    children: 4 === t3 ? V.format(i2) : a3.meta
                                  })
                                ]
                              })
                            ]
                          }),
                          a3.detail && (0, l.jsx)("span", {
                            className: h().tag,
                            "data-place": O ? O.narrow ? 3 === t3 ? "above" : "below" : 4 === t3 ? "above" : "below" : "below",
                            "aria-hidden": "true",
                            children: a3.detail
                          })
                        ]
                      },
                      `chip-${t3}`
                    );
                  }),
                  (0, l.jsx)("svg", {
                    className: h().layer,
                    viewBox: `0 0 ${O.w} ${O.h}`,
                    width: O.w,
                    height: O.h,
                    "aria-hidden": "true",
                    children: (0, l.jsxs)("g", {
                      ref: (e3) => {
                        Q.current.check = e3;
                      },
                      opacity: 0,
                      children: [
                        (0, l.jsx)("circle", {
                          className: h().checkDisc,
                          r: 8
                        }),
                        (0, l.jsx)("path", {
                          className: h().checkGlyph,
                          d: "M-3.3 0.2 L-1 2.5 L3.4 -2"
                        })
                      ]
                    })
                  })
                ]
              })
            }),
            !p2 && (0, l.jsxs)("div", {
              className: h().steps,
              "aria-hidden": "true",
              children: [
                (0, l.jsxs)("div", {
                  ref: (e3) => {
                    Q.current.step[0] = e3;
                  },
                  className: h().step,
                  "data-state": "idle",
                  children: [
                    (0, l.jsxs)("span", {
                      className: h().stepHead,
                      children: [
                        (0, l.jsx)("span", {
                          className: h().stepLabel,
                          children: T
                        }),
                        (0, l.jsx)("span", {
                          ref: (e3) => {
                            Q.current.stepMeta = e3;
                          },
                          className: h().stepMeta,
                          children: "0.00 s"
                        })
                      ]
                    }),
                    (0, l.jsx)("span", {
                      className: h().track,
                      children: (0, l.jsx)("span", {
                        ref: (e3) => {
                          Q.current.fill[0] = e3;
                        },
                        className: h().fill
                      })
                    })
                  ]
                }),
                (0, l.jsxs)("div", {
                  ref: (e3) => {
                    Q.current.step[1] = e3;
                  },
                  className: h().step,
                  "data-state": "idle",
                  children: [
                    (0, l.jsxs)("span", {
                      className: h().stepHead,
                      children: [
                        (0, l.jsx)("span", {
                          className: h().stepLabel,
                          children: G
                        }),
                        (0, l.jsx)("span", {
                          className: h().stepMeta,
                          children: J
                        })
                      ]
                    }),
                    (0, l.jsx)("span", {
                      className: h().track,
                      children: (0, l.jsx)("span", {
                        ref: (e3) => {
                          Q.current.fill[1] = e3;
                        },
                        className: h().fill
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        L2 && (0, l.jsx)("figcaption", { className: h().figcaption, children: L2 })
      ]
    });
  }
  var M = a(72077), N = a.n(M);
  function $() {
    return (0, l.jsx)("div", {
      className: N().demo,
      "data-canvas": "wide",
      children: (0, l.jsx)(j, { amount: 42.5, fee: 1.53, balance: 1284.1 })
    });
  }
  let L = $;
}

__m(__module,__exports,__require);
});
A.regCss(84146, ".root{--pf-accent:var(--accent);display:grid;width:100%;min-width:0;margin:0;container-type:inline-size;overflow-x:clip;color:var(--foreground);-webkit-tap-highlight-color:transparent}\n.root:not([data-ready]) .stage{height:187px}\n@container (width < 700px){.root:not([data-ready]) .stage{height:391px}\n.root[data-ready] .chip,.root[data-ready] .layer,.root[data-ready] .steps{opacity:1}\n.root[data-layout=narrow] .chip{padding:0 var(--space-3);gap:10px}\n.root[data-layout=narrow] .chip[data-compact]{padding:0 var(--space-2)}\n.diagram{display:grid;min-width:0;gap:var(--space-6)}\n.stage{position:relative;width:100%;min-width:0}\n.chip,.layer,.steps{opacity:0;transition:opacity var(--duration-considered) var(--ease-standard)}\n.layer{position:absolute;inset:0;overflow:visible;pointer-events:none}\n.layer:first-child{z-index:0}\n.layer:last-child{z-index:3}\n@media (prefers-reduced-motion:reduce){.chip,.health,.layer,.meta,.stepLabel,.steps,.stub,.tag,.waypoint,.wire{transition-duration:var(--duration-instant)}\n.chip{position:absolute;z-index:2;display:flex;min-width:0;align-items:center;gap:var(--space-3);padding:0 var(--space-4);border:1px solid var(--border);border-radius:16px;background:var(--surface-raised);box-sizing:border-box;cursor:default;transition:opacity var(--duration-considered) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard)}\n.chip[data-state=active]{border-color:color-mix(in oklab,var(--pf-accent) 55%,var(--border-strong))}\n.chip[data-state=ok]{border-color:color-mix(in oklab,var(--success) 40%,var(--border))}\n.chip[data-on]{z-index:4;border-color:color-mix(in oklab,var(--pf-accent) 62%,var(--border-strong))}\n.chip[data-compact] .mark{display:none}\n.chip[data-state=active] .health{background:var(--pf-accent)}\n.chip[data-state=done] .health{background:var(--text-secondary)}\n.chip[data-state=ok] .health{background:var(--success)}\n.chip[data-state=active] .meta,.chip[data-state=done] .meta{color:var(--text-secondary)}\n.chip[data-state=ok] .meta{color:color-mix(in oklab,var(--success) 72%,var(--text-secondary))}\n.chip[data-edge=start] .tag{left:0;transform:translateY(4px) scale(.96);transform-origin:0 0}\n.chip[data-edge=start] .tag[data-place=above]{transform:translateY(-4px) scale(.96);transform-origin:0 100%}\n.chip[data-edge=end] .tag{left:auto;right:0;transform:translateY(4px) scale(.96);transform-origin:100% 0}\n.chip[data-edge=end] .tag[data-place=above]{transform:translateY(-4px) scale(.96);transform-origin:100% 100%}\n.chip[data-on] .tag{opacity:1;transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.chip[data-on] .tag[data-place=below]{transform:translate(-50%,8px)}\n.chip[data-on] .tag[data-place=above]{transform:translate(-50%,-8px)}\n.chip[data-on][data-edge] .tag[data-place=below]{transform:translateY(8px)}\n.chip[data-on][data-edge] .tag[data-place=above]{transform:translateY(-8px)}\n.steps{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-6)}\n@container (width < 420px){.steps{grid-template-columns:minmax(0,1fr);gap:var(--space-4)}\n.stub,.wire{fill:none;stroke:var(--border-strong);stroke-width:1.25;stroke-linecap:round;transition:stroke var(--duration-standard) var(--ease-standard)}\n[data-theme=dark] .stub,[data-theme=dark] .wire{stroke:color-mix(in oklab,var(--text-muted) 40%,var(--border-strong))}\n.stub[data-lit=true],.stub[data-on],.wire[data-on]{stroke:color-mix(in oklab,var(--pf-accent) 62%,var(--border-strong))}\n[data-theme=dark] .stub[data-lit=true],[data-theme=dark] .stub[data-on],[data-theme=dark] .wire[data-on]{stroke:color-mix(in oklab,var(--pf-accent) 70%,var(--border-strong))}\n.stub{stroke-dasharray:2 4}\n.lit,.okLit{fill:none;stroke-width:1.75;stroke-linecap:round}\n.lit{stroke:var(--pf-accent);stroke-opacity:.55}\n.okLit{stroke:var(--success);stroke-opacity:.6}\n.port,.waypoint{fill:var(--surface-raised);stroke:var(--border-strong);stroke-width:1.25}\n.waypoint{transition:fill var(--duration-standard) var(--ease-standard),stroke var(--duration-standard) var(--ease-standard)}\n.waypoint[data-lit=true]{fill:var(--pf-accent);stroke:var(--pf-accent)}\n.tap{fill:none;stroke:var(--pf-accent);stroke-width:1.25}\n.pill{position:absolute;top:0;left:0;z-index:1;display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 var(--space-2);border:1px solid color-mix(in oklab,var(--pf-accent) 45%,var(--border));border-radius:var(--radius-pill);color:var(--foreground);background:color-mix(in oklab,var(--pf-accent) 10%,var(--surface-raised));box-sizing:border-box;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);line-height:1;font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none;will-change:transform,opacity}\n.pill[data-tone=ok]{border-color:color-mix(in oklab,var(--success) 45%,var(--border));background:color-mix(in oklab,var(--success) 11%,var(--surface-raised))}\n.pill>svg{width:12px;height:12px;fill:none;stroke:var(--success);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.mark{display:grid;flex:none;place-items:center;width:16px;height:16px;color:var(--text-secondary);object-fit:contain}\n.mark>svg{width:16px;height:16px;stroke-width:1.75}\n.text{display:grid;min-width:0}\n.label{font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis}\n.label,.meta{overflow:hidden;letter-spacing:var(--tracking-body);line-height:var(--leading-body);white-space:nowrap}\n.meta{display:inline-flex;min-width:0;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;transition:color var(--duration-standard) var(--ease-standard)}\n.meta>span:last-child{overflow:hidden;text-overflow:ellipsis;will-change:opacity}\n.health{flex:none;width:6px;height:6px;border-radius:50%;background:var(--border-strong);transition:background-color var(--duration-standard) var(--ease-standard)}\n.tag{position:absolute;z-index:5;max-width:16rem;padding:3px var(--space-2);border-radius:var(--radius-pill);color:var(--background);background:var(--foreground);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.tag[data-place=below]{top:100%;left:50%;transform:translate(-50%,4px) scale(.96);transform-origin:50% 0}\n.tag[data-place=above]{bottom:100%;left:50%;transform:translate(-50%,-4px) scale(.96);transform-origin:50% 100%}\n.checkDisc{fill:var(--success)}\n.checkGlyph{fill:none;stroke:var(--background);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\n.step{display:grid;min-width:0;gap:var(--space-2)}\n.step[data-state=active] .stepLabel,.step[data-state=done] .stepLabel{color:var(--foreground)}\n.step[data-state=done] .fill{background:color-mix(in oklab,var(--pf-accent) 70%,var(--border-strong))}\n.stepHead{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-3)}\n.stepLabel{overflow:hidden;color:var(--text-secondary);font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.stepMeta{flex:none;color:var(--text-muted);font-size:var(--text-xs);letter-spacing:var(--tracking-body);line-height:var(--leading-body);font-variant-numeric:tabular-nums;white-space:nowrap}\n.track{position:relative;display:block;height:2px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--pf-accent);transform:scaleX(0);transform-origin:0 50%;will-change:transform}\n.figcaption{margin-top:var(--space-4);color:var(--text-secondary);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-align:center;text-wrap:balance}", {"root":"root","stage":"stage","chip":"chip","layer":"layer","steps":"steps","diagram":"diagram","health":"health","meta":"meta","stepLabel":"stepLabel","stub":"stub","tag":"tag","waypoint":"waypoint","wire":"wire","mark":"mark","lit":"lit","okLit":"okLit","port":"port","tap":"tap","pill":"pill","text":"text","label":"label","checkDisc":"checkDisc","checkGlyph":"checkGlyph","step":"step","fill":"fill","stepHead":"stepHead","stepMeta":"stepMeta","track":"track","figcaption":"figcaption"});
A.reg(85974, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var o = a(51811);
  let l = {
    name: "store",
    size: 24,
    node: [
      [
        "path",
        { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }
      ],
      [
        "path",
        {
          d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
          key: "o0xfot"
        }
      ],
      [
        "path",
        {
          d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
          key: "wn3emo"
        }
      ]
    ]
  };
  l.node;
  let r = (0, o.A)(l);
}

__m(__module,__exports,__require);
});
A.cssFor("payment-flow", [72077,84146]);
A.item("payment-flow", {entry:83521, export:"PaymentFlowDemo", kind:"component", tier:"pro", unresolved:[]});
})();