/* multi-region-failover (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(13729, ".demo{display:grid;width:100%;max-width:1080px;margin-inline:auto}", {"demo":"demo"});
A.reg(74232, function(__module,__exports,__require){
"use strict";
function __m(e, a, r) {
  "use strict";
  r.r(a), r.d(a, { MultiRegionFailoverDemo: () => O, default: () => H });
  var t = r(95155), s = r(12115), l = r(18310), i = r(36619), n = r(79267), o = r(78642), c = r.n(o);
  let d = ["users", "balancer", "primary", "secondary"], u = ["primary", "secondary"], m = [
    [0.2, 0.3],
    [0.5, 0.3],
    [0.8, 0.3],
    [0.2, 0.72],
    [0.5, 0.72],
    [0.8, 0.72]
  ], f = m.length, p = (e2) => 3.9 + 1.3 * e2, y = (e2) => p(e2) + 1.2, h = y(2), x = y(8), g = 11.4 + 0.12 * (f - 1), _ = Math.round(84), v = [
    { start: 0, rep: 2.4, short: "Balanced", title: "Balanced" },
    { start: 3.6, rep: 7, short: "Degrade", title: "Region degrades" },
    { start: h, rep: 8.6, short: "Fail over", title: "Fail over" },
    {
      start: 9.6,
      rep: 10.8,
      short: "One region",
      title: "One region serves"
    },
    { start: 11.3, rep: 14.5, short: "Recover", title: "Recovery" },
    { start: x, rep: 17.2, short: "Rebalance", title: "Rebalance" }
  ], b = v[2].rep, $ = (e2, a2, r2) => Math.min(r2, Math.max(a2, e2)), k = (e2) => 0.5 - Math.cos(Math.PI * $(e2, 0, 1)) / 2, N = (e2) => 0.45 * $(e2, 0, 1) + 0.55 * k(e2), j = (e2, a2 = 0.5) => e2 < 0 || e2 > a2 ? 0 : (1 - e2 / a2) ** 2, w = (e2) => (e2 % 21 + 21) % 21, A = (e2) => e2 - Math.floor(e2), M = (e2) => e2.toFixed(2);
  function F(e2) {
    return e2 < 7.8 ? 0.5 : e2 < 9.5 ? 0.5 * (1 - k((e2 - 7.8) / 1.7000000000000002)) : e2 < 15.7 ? 0 : e2 < 18.5 ? 0.5 * k((e2 - 15.7) / 2.8000000000000007) : 0.5;
  }
  let T = (e2, a2) => a2 >= 3.7 + 0.12 * e2 && a2 < 11.4 + 0.12 * e2, B = () => () => {
  };
  function E(e2, a2, r2, t2) {
    let s2 = r2 / 2, l2 = (e3) => e3.map(([e4, a3]) => `${M(e4)},${M(a3)}`).join(" ");
    return {
      top: l2([
        [e2, a2 - s2],
        [e2 + r2, a2],
        [e2, a2 + s2],
        [e2 - r2, a2]
      ]),
      left: l2([
        [e2 - r2, a2],
        [e2, a2 + s2],
        [e2, a2 + s2 + t2],
        [e2 - r2, a2 + t2]
      ]),
      right: l2([
        [e2, a2 + s2],
        [e2 + r2, a2],
        [e2 + r2, a2 + t2],
        [e2, a2 + s2 + t2]
      ]),
      outline: l2([
        [e2, a2 - s2],
        [e2 + r2, a2],
        [e2 + r2, a2 + t2],
        [e2, a2 + s2 + t2],
        [e2 - r2, a2 + t2],
        [e2 - r2, a2]
      ])
    };
  }
  let q = (e2, a2, r2, t2, s2) => ({
    x: e2 + (t2 - s2) * r2,
    y: a2 - r2 / 2 + r2 / 2 * (t2 + s2)
  });
  function R(e2, a2, r2) {
    let t2 = r2 / 2;
    return `M${M(e2)} ${M(a2 - t2)} A${M(r2)} ${M(t2)} 0 0 1 ${M(e2)} ${M(a2 + t2)} A${M(r2)} ${M(t2)} 0 0 1 ${M(e2)} ${M(a2 - t2)}`;
  }
  function L(e2, a2, r2, t2, s2, l2 = 0) {
    let i2 = { x: (e2.x + a2.x) / 2 + s2.x, y: (e2.y + a2.y) / 2 + s2.y }, n2 = new Float32Array(49), o2 = new Float32Array(49), c2 = new Float32Array(49), d2 = new Float32Array(49), u2 = new Float32Array(49), m2 = 1;
    for (let s3 = 0; s3 < 49; s3++) {
      let f2 = s3 / 48, p2 = 1 - f2;
      n2[s3] = p2 * p2 * e2.x + 2 * p2 * f2 * i2.x + f2 * f2 * a2.x, o2[s3] = p2 * p2 * e2.y + 2 * p2 * f2 * i2.y + f2 * f2 * a2.y, c2[s3] = l2 ? n2[s3] : r2.x + (t2.x - r2.x) * f2, d2[s3] = l2 ? o2[s3] + l2 : r2.y + (t2.y - r2.y) * f2, m2 = Math.max(m2, d2[s3] - o2[s3]), u2[s3] = s3 ? u2[s3 - 1] + Math.hypot(n2[s3] - n2[s3 - 1], o2[s3] - o2[s3 - 1]) : 0;
    }
    return {
      d: `M${M(e2.x)} ${M(e2.y)} Q${M(i2.x)} ${M(i2.y)} ${M(a2.x)} ${M(a2.y)}`,
      floorD: `M${M(r2.x)} ${M(r2.y)} L${M(t2.x)} ${M(t2.y)}`,
      len: u2[48] || 1,
      lift: m2,
      xs: n2,
      ys: o2,
      fx: c2,
      fy: d2,
      acc: u2
    };
  }
  function S(e2, a2) {
    let { acc: r2 } = e2, t2 = $(a2, 0, e2.len), s2 = 0, l2 = r2.length - 1;
    for (; l2 - s2 > 1; ) {
      let e3 = s2 + l2 >> 1;
      r2[e3] < t2 ? s2 = e3 : l2 = e3;
    }
    let i2 = (t2 - r2[s2]) / (r2[l2] - r2[s2] || 1), n2 = (e3) => e3[s2] + (e3[l2] - e3[s2]) * i2;
    return { x: n2(e2.xs), y: n2(e2.ys), fx: n2(e2.fx), fy: n2(e2.fy) };
  }
  function P({ node: e2, className: a2 }) {
    let { icon: r2, color: s2 } = e2;
    if (null == r2) return null;
    if ("string" == typeof r2)
      return /^(\/|\.|https?:|data:|blob:)/.test(r2) ? (0, t.jsx)("img", { className: a2, src: r2, alt: "", draggable: false }) : (0, t.jsx)("svg", {
        className: a2,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", { d: r2, fill: s2 ?? "currentColor" })
      });
    return (0, t.jsx)("span", {
      className: a2,
      "aria-hidden": "true",
      children: r2
    });
  }
  let D = (e2) => e2 >= 1e3 ? `${(e2 / 1e3).toFixed(1)}k` : `${Math.round(e2)}`, C = (e2, a2) => `${e2.replace(/ /g, "\xA0")} \xB7 ${a2.replace(/ /g, "\xA0")}`;
  function z({
    hostname: e2 = "api.acme.dev",
    requestsPerSecond: a2 = 12e3,
    latencyMs: r2 = 38,
    nodes: o2,
    speed: U2 = 1,
    paused: W2 = false,
    accent: O2,
    controls: H2 = true,
    caption: I = true,
    label: V,
    className: J,
    style: X
  }) {
    let G, K = (G = (0, s.useSyncExternalStore)(
      B,
      () => true,
      () => false
    ), !!(0, l.I)() && G), Y = (0, s.useRef)(null), [Q, Z] = (0, s.useState)(0), [ee, ea] = (0, s.useState)(null), [er, et] = (0, s.useState)(false), es = (0, s.useMemo)(() => {
      let a3 = o2 ?? {};
      return {
        users: {
          label: "Users",
          meta: "Worldwide",
          detail: "Every request goes to one hostname",
          ...a3.users
        },
        balancer: {
          label: "Load balancer",
          meta: e2,
          detail: "Checks each region and sets its share of traffic",
          ...a3.balancer
        },
        primary: {
          label: "US East",
          meta: "us-east-1",
          detail: "Six instances in Virginia",
          ...a3.primary
        },
        secondary: {
          label: "EU West",
          meta: "eu-west-1",
          detail: "Six instances in Ireland, ready to take it all",
          ...a3.secondary
        }
      };
    }, [o2, e2]), el = es.primary.label ?? "US East", ei = es.secondary.label ?? "EU West", en = (0, s.useMemo)(
      () => ({
        a: el,
        b: ei,
        captions: [
          `The load balancer splits traffic evenly between ${el} and ${ei}, and both regions pass their health checks.`,
          `Instances in ${el} start failing. Requests sent there return errors and its health checks fail one after another.`,
          `After 3 failed checks ${el} is marked unhealthy and its share of traffic shifts smoothly to ${ei}.`,
          `${ei} serves every request and errors fall back to zero while ${el} is out of rotation.`,
          `${el} comes back, but it has to pass 3 health checks in a row before it gets traffic again.`,
          `Traffic ramps back to ${el} gradually, so its warm up stays smooth, until the split is even again.`
        ]
      }),
      [el, ei]
    ), eo = Q >= 640, ec = Q > 0, ed = (0, s.useMemo)(
      () => ec ? (function(e3) {
        let a3 = e3 ? {
          users: [150, 300, 62, 14],
          balancer: [440, 300, 72, 16],
          primary: [790, 206, 118, 12],
          secondary: [790, 426, 118, 12]
        } : {
          users: [195, 150, 50, 12],
          balancer: [195, 330, 60, 14],
          primary: [100, 580, 80, 10],
          secondary: [290, 580, 80, 10]
        }, r3 = {};
        for (let e4 of d) {
          let [t3, s3, l3, i3] = a3[e4];
          r3[e4] = {
            cx: t3,
            cy: s3,
            a: l3,
            h: i3,
            port: { x: t3, y: s3 - 12 * ("balancer" === e4) },
            floor: s3 + i3
          };
        }
        let t2 = {};
        for (let e4 of u) {
          let a4 = r3[e4], s3 = 0.135 * a4.a, l3 = 0.95 * s3;
          t2[e4] = m.map(([e5, r4], t3) => {
            let i3 = q(a4.cx, a4.cy, a4.a, e5, r4);
            return { i: t3, x: i3.x, y: i3.y - l3, a: s3, h: l3 };
          });
        }
        let s2 = (e4) => ({ x: e4.cx, y: e4.floor + e4.a / 2 * 0.2 }), l2 = r3.balancer, i2 = r3.users, n2 = 16 * !e3, o3 = L(
          i2.port,
          l2.port,
          s2(i2),
          s2(l2),
          e3 ? { x: 0, y: -96 } : { x: -92, y: 0 },
          n2
        ), c2 = e3 ? {
          primary: { x: -20, y: -92 },
          secondary: { x: -10, y: -64 }
        } : {
          primary: { x: -130, y: -10 },
          secondary: { x: 130, y: -10 }
        }, f2 = {}, p2 = {};
        for (let e4 of u) {
          let a4 = r3[e4];
          f2[e4] = L(l2.port, a4.port, s2(l2), s2(a4), c2[e4], n2), p2[e4] = t2[e4].map(
            (r4) => (function(e5, a5, r5, t3) {
              let s3 = e5.xs.length, l3 = new Float32Array(s3), i3 = new Float32Array(s3), n3 = new Float32Array(s3), o4 = new Float32Array(s3), c3 = new Float32Array(s3);
              for (let d2 = 0; d2 < s3; d2++) {
                let u2 = k((d2 / (s3 - 1) - 0.6) / 0.4);
                l3[d2] = e5.xs[d2] + a5 * u2, i3[d2] = e5.ys[d2] + r5 * u2, n3[d2] = e5.fx[d2] + a5 * u2, o4[d2] = e5.fy[d2] + t3 * u2, c3[d2] = d2 ? c3[d2 - 1] + Math.hypot(l3[d2] - l3[d2 - 1], i3[d2] - i3[d2 - 1]) : 0;
              }
              return {
                ...e5,
                xs: l3,
                ys: i3,
                fx: n3,
                fy: o4,
                acc: c3,
                len: c3[s3 - 1] || 1
              };
            })(
              f2[e4],
              r4.x - a4.port.x,
              r4.y - a4.port.y,
              r4.y + r4.h - a4.port.y
            )
          );
        }
        let y2 = (e4, a4 = 0) => e4.floor + e4.a / 2 + 12 + a4, h2 = (e4, a4 = 0) => e4.cy - e4.a / 2 - 12 - a4, x2 = e3 ? {
          users: { x: i2.cx, y: y2(i2), above: false },
          balancer: { x: l2.cx, y: y2(l2), above: false },
          primary: {
            x: r3.primary.cx,
            y: h2(r3.primary, 12),
            above: true
          },
          secondary: {
            x: r3.secondary.cx,
            y: y2(r3.secondary),
            above: false
          }
        } : {
          users: { x: i2.cx, y: h2(i2), above: true },
          balancer: { x: l2.cx, y: y2(l2), above: false },
          primary: {
            x: r3.primary.cx,
            y: y2(r3.primary),
            above: false
          },
          secondary: {
            x: r3.secondary.cx,
            y: y2(r3.secondary),
            above: false
          }
        };
        return {
          w: e3 ? 1e3 : 390,
          h: e3 ? 600 : 750,
          wide: e3,
          nodes: r3,
          cubes: t2,
          trunk: o3,
          route: f2,
          lanes: p2,
          labels: x2
        };
      })(eo) : null,
      [ec, eo]
    ), eu = (0, s.useRef)({
      node: {},
      cube: { primary: [], secondary: [] },
      device: [],
      dialA: null,
      dialB: null,
      route: {},
      trunk: null,
      packet: [],
      shadow: [],
      probe: null,
      status: {},
      statusText: {},
      metric: {},
      barA: null,
      barB: null,
      pctA: null,
      pctB: null,
      fill: [],
      seg: [],
      caption: null,
      capTitle: null,
      capText: null,
      msg: null,
      msgText: null
    }), em = (0, s.useRef)({
      t: W2 || 0 === U2 ? b : 0,
      rate: NaN,
      rateV: 0,
      frame: 0,
      running: false,
      visible: true,
      cache: /* @__PURE__ */ new Map()
    }), ef = W2 || er ? 0 : U2 * (ee ? 0.7 : 1), ep = ed ? Q / ed.w : 1, ey = (0, s.useRef)({
      layout: ed,
      text: en,
      target: ef,
      reduced: K,
      requestsPerSecond: a2,
      latencyMs: r2,
      scale: ep
    });
    (0, s.useLayoutEffect)(() => {
      ey.current = {
        layout: ed,
        text: en,
        target: ef,
        reduced: K,
        requestsPerSecond: a2,
        latencyMs: r2,
        scale: ep
      };
    });
    let eh = (0, s.useCallback)((e3, a3, r3) => {
      if (!e3) return;
      let t2 = em.current.cache, s2 = t2.get(e3);
      if (s2 || (s2 = {}, t2.set(e3, s2)), s2[a3] !== r3)
        if (s2[a3] = r3, "text" === a3) {
          let a4 = e3.firstChild;
          a4 && 3 === a4.nodeType && !a4.nextSibling ? a4.data = r3 : e3.textContent = r3;
        } else
          a3.startsWith("--") ? e3.style.setProperty(a3, r3) : a3.startsWith("s:") ? e3.style.setProperty(a3.slice(2), r3) : e3.setAttribute(a3, r3);
    }, []), ex = (0, s.useCallback)(
      (e3) => {
        let {
          layout: a3,
          text: r3,
          requestsPerSecond: t2,
          latencyMs: s2,
          scale: l2,
          reduced: i2
        } = ey.current, n2 = eu.current, o3 = w(e3), c2 = F(o3), d2 = (function(e4) {
          let a4 = 0;
          for (let r4 = 0; r4 < f; r4++) T(r4, e4) && a4++;
          return a4;
        })(o3), { failed: m2, passed: b2 } = (function(e4) {
          let a4 = 0, r4 = 0;
          for (let r5 = 0; r5 < 3; r5++) e4 >= y(r5) && a4++;
          for (let a5 = 6; a5 < 9; a5++) e4 >= y(a5) && r4++;
          return { failed: a4, passed: r4 };
        })(o3), B2 = 0;
        v.forEach((e4, a4) => {
          o3 >= e4.start && (B2 = a4);
        });
        let E2 = o3 > 20.6 ? 1 - k((o3 - 20.6) / 0.4) : 1;
        v.forEach((e4, a4) => {
          let r4 = v[a4 + 1]?.start ?? 21, t3 = i2 ? +(a4 <= B2) : $((o3 - e4.start) / (r4 - e4.start), 0, 1);
          eh(n2.fill[a4], "s:transform", `scaleX(${t3.toFixed(4)})`), eh(n2.fill[a4], "s:opacity", E2.toFixed(3)), eh(n2.seg[a4], "data-current", a4 === B2 ? "true" : "false"), eh(n2.seg[a4], "aria-current", a4 === B2 ? "step" : "false");
        }), eh(n2.capTitle, "text", v[B2].title), eh(n2.capText, "text", r3.captions[B2]);
        let q2 = v[B2].start, R2 = v[B2 + 1]?.start ?? 21, L2 = i2 ? 1 : Math.min(e3 < 0.3 ? 1 : k((o3 - q2) / 0.3), k((R2 - o3) / 0.15));
        eh(n2.caption, "s:opacity", L2.toFixed(3));
        let P2 = t2 * (1 + 0.02 * Math.sin(2 * Math.PI * o3 / 10.5)), z2 = d2 / f * c2 * 100, U3 = { primary: c2, secondary: 1 - c2 };
        if (eh(n2.barA, "s:transform", `scaleX(${U3.primary.toFixed(4)})`), eh(n2.barB, "s:transform", `scaleX(${U3.secondary.toFixed(4)})`), eh(n2.pctA, "text", `${Math.round(100 * U3.primary)}%`), eh(n2.pctB, "text", `${Math.round(100 * U3.secondary)}%`), eh(
          n2.dialA,
          "stroke-dasharray",
          `${(1e3 * U3.primary).toFixed(1)} 1000`
        ), eh(n2.dialA, "opacity", U3.primary < 2e-3 ? "0" : "1"), eh(
          n2.dialB,
          "stroke-dasharray",
          `${(1e3 * U3.secondary).toFixed(1)} 1000`
        ), eh(
          n2.dialB,
          "stroke-dashoffset",
          `${(-(1e3 * U3.primary)).toFixed(1)}`
        ), eh(n2.route.primary, "--lit", Math.min(1, 2 * U3.primary).toFixed(3)), eh(n2.route.primary, "--err", (2 * U3.primary * (d2 / f)).toFixed(3)), eh(
          n2.route.secondary,
          "--lit",
          Math.min(1, 2 * U3.secondary).toFixed(3)
        ), !a3)
          return;
        let W3 = { primary: Array(f).fill(0), secondary: Array(f).fill(0) }, O3 = [, , , ,].fill(0), H3 = Array(12).fill(false), I2 = Math.ceil((o3 - 2.1 - 0.6) / 0.25), V2 = Math.floor(o3 / 0.25);
        for (let e4 = I2; e4 <= V2; e4++) {
          let r4 = 0.25 * e4, t3 = o3 - r4, s3 = (e4 % _ + _) % _, l3 = w(r4 + 1), i3 = A(0.6180339887 * s3 + 0.31) < F(l3) ? "primary" : "secondary", c3 = Math.floor(A(0.7548776662 * s3 + 0.4) * f), d3 = w(r4 + 2.1), u2 = "primary" === i3 && T(c3, d3);
          if (O3[(s3 % 4 + 4) % 4] = Math.max(
            O3[(s3 % 4 + 4) % 4],
            j(t3, 0.45)
          ), t3 > 2.1) {
            u2 || (W3[i3][c3] = Math.max(W3[i3][c3], j(t3 - 2.1, 0.55)));
            continue;
          }
          if (t3 < 0) continue;
          let m3 = (e4 % 12 + 12) % 12;
          H3[m3] = true;
          let p2 = n2.packet[m3], y2 = n2.shadow[m3], h2, x2, g2 = 1, v2 = 1, b3 = "request";
          if (t3 < 1) {
            let e5 = t3 / 1;
            h2 = S(a3.trunk, N(e5) * a3.trunk.len), x2 = a3.trunk.lift, g2 = k(e5 / 0.14);
          } else {
            let e5 = (t3 - 1) / 1.1, r5 = a3.lanes[i3][c3];
            if (u2)
              h2 = S(r5, N(Math.min(e5, 0.86)) * r5.len), e5 > 0.62 && (b3 = "error"), g2 = 1 - k((e5 - 0.86) / 0.14), v2 = 1 + 0.35 * k((e5 - 0.86) / 0.14);
            else {
              h2 = S(r5, N(e5) * r5.len);
              let a4 = k((e5 - 0.82) / 0.18);
              g2 = 1 - a4, v2 = 1 - 0.5 * a4;
            }
            x2 = r5.lift;
          }
          let B3 = $((h2.fy - h2.y) / x2, 0, 1);
          eh(
            p2,
            "transform",
            `translate(${M(h2.x)} ${M(h2.y)}) scale(${v2.toFixed(3)})`
          ), eh(p2, "opacity", g2.toFixed(3)), eh(p2, "data-kind", b3), eh(
            y2,
            "transform",
            `translate(${M(h2.fx)} ${M(h2.fy)}) scale(${(1 - 0.45 * B3).toFixed(3)})`
          ), eh(y2, "opacity", ((0.9 - 0.5 * B3) * g2).toFixed(3));
        }
        for (let e4 = 0; e4 < 12; e4++)
          H3[e4] || (eh(n2.packet[e4], "opacity", "0"), eh(n2.shadow[e4], "opacity", "0"));
        for (let e4 of (n2.device.forEach(
          (e5, a4) => eh(e5, "fill-opacity", O3[a4].toFixed(3))
        ), u)) {
          let r4 = "secondary" === e4 ? $((U3.secondary - 0.5) * 2, 0, 1) : 0;
          a3.cubes[e4].forEach((a4, t3) => {
            let s3 = n2.cube[e4][t3];
            eh(s3, "--hit", W3[e4][t3].toFixed(3)), eh(s3, "--load", r4.toFixed(3)), eh(
              s3,
              "data-state",
              "primary" === e4 && T(t3, o3) ? "down" : "up"
            );
          });
        }
        let J2 = false;
        for (let e4 = 0; e4 < 9; e4++) {
          let r4 = o3 - p(e4);
          if (r4 < 0 || r4 > 1.2) continue;
          J2 = true;
          let t3 = r4 > 0.6, s3 = t3 ? (r4 - 0.6) / 0.6 : r4 / 0.6, i3 = a3.route.primary, c3 = N(s3) * i3.len, d3 = S(i3, t3 ? i3.len - c3 : c3), u2 = e4 >= 6, m3 = Math.min(k(s3 / 0.2), k((1 - s3) / 0.2)), f2 = t3 ? k((1 - s3) / 0.2) : k(s3 / 0.2);
          eh(n2.probe, "transform", `translate(${M(d3.x)} ${M(d3.y)})`), eh(n2.probe, "opacity", f2.toFixed(3)), eh(n2.probe, "data-result", t3 ? u2 ? "pass" : "fail" : "out"), eh(
            n2.msg,
            "s:transform",
            `translate3d(${(d3.x * l2).toFixed(1)}px, ${(d3.y * l2 - 10).toFixed(1)}px, 0) translate(-50%, -100%)`
          ), eh(n2.msg, "s:opacity", m3.toFixed(3)), eh(n2.msg, "data-kind", t3 ? u2 ? "pass" : "fail" : "out"), eh(
            n2.msgText,
            "text",
            t3 ? u2 ? "200 OK" : "503" : "GET /healthz"
          );
        }
        J2 || (eh(n2.probe, "opacity", "0"), eh(n2.msg, "s:opacity", "0"));
        let X2 = (e4, a4, r4) => {
          eh(n2.status[e4], "data-state", a4), eh(n2.statusText[e4], "text", r4);
        };
        X2("users", "busy", `${D(P2)} req/s`), z2 < 0.05 ? X2("balancer", "done", "No errors") : X2("balancer", "error", `Errors ${z2.toFixed(1)}%`), o3 < 3.7 ? X2("primary", "done", "Healthy") : o3 < h ? X2(
          "primary",
          "warn",
          0 === m2 ? "Degraded" : `Failed checks ${m2}/3`
        ) : o3 < 9.5 ? X2("primary", "error", "Unhealthy, draining") : o3 < g ? X2("primary", "error", "Out of rotation") : o3 < x ? X2(
          "primary",
          "busy",
          0 === b2 ? "Recovering" : `Passed checks ${b2}/3`
        ) : o3 < 18.5 ? X2(
          "primary",
          "busy",
          `Warming up ${Math.round(c2 / 0.5 * 100)}%`
        ) : X2("primary", "done", "Healthy"), X2(
          "secondary",
          "done",
          U3.secondary > 0.505 ? `Serving ${Math.round(100 * U3.secondary)}%` : "Healthy"
        );
        let G2 = P2 * U3.primary, K2 = G2 * (1 - d2 / f);
        eh(
          n2.metric.primary,
          "text",
          G2 < 5 ? "0 req/s, no traffic" : d2 > 0 ? C(`${D(G2)} req/s`, `${Math.round((1 - K2 / G2) * 100)}% errors`) : C(`${D(G2)} req/s`, `p50 ${s2} ms`)
        );
        let Y2 = Math.round(s2 + 4 + 11 * $((U3.secondary - 0.5) * 2, 0, 1));
        eh(
          n2.metric.secondary,
          "text",
          C(`${D(P2 * U3.secondary)} req/s`, `p50 ${Y2} ms`)
        );
      },
      [eh]
    ), eg = (0, s.useCallback)(() => {
      let e3 = em.current;
      if (e3.running || !e3.visible || ey.current.reduced) return;
      e3.running = true;
      let a3 = performance.now(), r3 = (t2) => {
        if (!e3.visible || ey.current.reduced) {
          e3.running = false;
          return;
        }
        let s2 = $((t2 - a3) / 1e3, 0, 0.05);
        a3 = t2;
        let l2 = ey.current.target;
        if (Number.isNaN(e3.rate) && (e3.rate = l2), e3.rateV += (40 * (l2 - e3.rate) - 2 * Math.sqrt(40) * e3.rateV) * s2, e3.rate += e3.rateV * s2, 1e-4 > Math.abs(l2 - e3.rate) && 1e-4 > Math.abs(e3.rateV) && (e3.rate = l2, e3.rateV = 0), e3.t += s2 * e3.rate, ex(e3.t), 0 === e3.rate && 0 === l2 || !e3.visible || ey.current.reduced) {
          e3.running = false;
          return;
        }
        e3.frame = requestAnimationFrame(r3);
      };
      e3.frame = requestAnimationFrame(r3);
    }, [ex]);
    (0, s.useLayoutEffect)(() => {
      let e3 = Y.current;
      if (!e3) return;
      let a3 = () => Z(Math.floor(e3.clientWidth));
      a3();
      let r3 = new ResizeObserver(a3);
      return r3.observe(e3), () => r3.disconnect();
    }, []);
    let [e_, ev] = (0, s.useState)(2);
    (0, s.useLayoutEffect)(() => {
      em.current.cache = /* @__PURE__ */ new Map(), K ? ex(v[e_].rep) : (ex(em.current.t), eg());
    }, [ed, ep, en, K, ef, e_, a2, r2, ex, eg]), (0, s.useEffect)(() => {
      let e3 = Y.current, a3 = em.current;
      if (!e3) return;
      let r3 = true, t2 = () => {
        a3.visible = r3 && !document.hidden, a3.visible ? eg() : (cancelAnimationFrame(a3.frame), a3.running = false);
      }, s2 = new IntersectionObserver(([e4]) => {
        r3 = e4.isIntersecting, t2();
      });
      return s2.observe(e3), document.addEventListener("visibilitychange", t2), () => {
        s2.disconnect(), document.removeEventListener("visibilitychange", t2), cancelAnimationFrame(a3.frame), a3.running = false;
      };
    }, [eg]);
    let eb = (0, s.useCallback)(
      (e3) => {
        let a3 = em.current;
        ey.current.reduced ? ev(e3) : (a3.t = a3.t - w(a3.t) + v[e3].start + 1e-3 * (0 !== e3), ex(a3.t), eg());
      },
      [ex, eg]
    ), e$ = (e3) => ({
      onPointerEnter: (a3) => {
        "mouse" === a3.pointerType && ea(e3);
      },
      onPointerLeave: () => ea((a3) => a3 === e3 ? null : a3)
    }), ek = (e3) => "balancer" === ee || ee === e3, eN = "balancer" === ee || "users" === ee, ej = V ?? `Multi-region failover for ${e2}. A load balancer splits traffic between ${el} and ${ei}. When ${el} starts failing, its health checks fail 3 times in a row, it is marked unhealthy and traffic shifts smoothly to ${ei}, so errors fall back to zero. Once ${el} recovers and passes 3 checks, traffic ramps back until the split is even again.`, ew = { ...X, ...O2 ? { "--mrf-accent": O2 } : null }, eA = er || W2 || 0 === U2, eM = (e3, a3) => `${(e3 / a3 * 100).toFixed(3)}%`, eF = (e3) => (0, t.jsxs)(t.Fragment, {
      children: [
        (0, t.jsx)("polygon", { className: c().faceLeft, points: e3.left }),
        (0, t.jsx)("polygon", {
          className: c().faceRight,
          points: e3.right
        }),
        (0, t.jsx)("polygon", { className: c().faceTop, points: e3.top })
      ]
    });
    return (0, t.jsxs)("figure", {
      className: [c().root, J].filter(Boolean).join(" "),
      style: ew,
      "data-ready": !!ed || void 0,
      "data-layout": ed ? ed.wide ? "wide" : "stack" : void 0,
      children: [
        (0, t.jsx)("div", {
          ref: Y,
          className: c().stage,
          role: "img",
          "aria-label": ej,
          style: ed ? { aspectRatio: `${ed.w} / ${ed.h}` } : void 0,
          children: ed && (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("svg", {
                className: c().svg,
                viewBox: `0 0 ${ed.w} ${ed.h}`,
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                children: [
                  (0, t.jsxs)("g", {
                    children: [
                      (0, t.jsx)("path", {
                        className: c().floor,
                        d: ed.trunk.floorD,
                        "data-dim": null !== ee && !eN || void 0
                      }),
                      u.map(
                        (e3) => (0, t.jsx)(
                          "path",
                          {
                            className: c().floor,
                            d: ed.route[e3].floorD,
                            "data-dim": null !== ee && !ek(e3) || void 0
                          },
                          e3
                        )
                      ),
                      Array.from(
                        { length: 12 },
                        (e3, a3) => (0, t.jsx)(
                          "ellipse",
                          {
                            ref: (e4) => {
                              eu.current.shadow[a3] = e4;
                            },
                            className: c().shadow,
                            cx: 0,
                            cy: 0,
                            rx: 4.5,
                            ry: 2.25,
                            opacity: 0
                          },
                          a3
                        )
                      )
                    ]
                  }),
                  (0, t.jsx)("g", {
                    className: c().route,
                    "data-on": eN || void 0,
                    "data-dim": null !== ee && !eN || void 0,
                    children: (0, t.jsx)("path", {
                      ref: (e3) => {
                        eu.current.trunk = e3;
                      },
                      className: c().edge,
                      d: ed.trunk.d,
                      style: { "--lit": 1 }
                    })
                  }),
                  u.map(
                    (e3) => (0, t.jsx)(
                      "g",
                      {
                        className: c().route,
                        "data-on": ek(e3) || void 0,
                        "data-dim": null !== ee && !ek(e3) || void 0,
                        children: (0, t.jsx)("path", {
                          ref: (a3) => {
                            eu.current.route[e3] = a3;
                          },
                          className: c().edge,
                          d: ed.route[e3].d
                        })
                      },
                      e3
                    )
                  ),
                  [...d].sort((e3, a3) => ed.nodes[e3].cy - ed.nodes[a3].cy).map((e3) => {
                    if (!ed) return null;
                    let a3 = ed.nodes[e3], r3 = E(a3.cx, a3.cy, a3.a, a3.h), s2 = null;
                    if ("users" === e3 && (s2 = [
                      [0.3, 0.3],
                      [0.7, 0.3],
                      [0.3, 0.7],
                      [0.7, 0.7]
                    ].map(([e4, r4], s3) => {
                      let l2 = q(a3.cx, a3.cy, a3.a, e4, r4);
                      return (0, t.jsxs)(
                        "g",
                        {
                          children: [
                            (0, t.jsx)("ellipse", {
                              className: c().deviceBase,
                              cx: l2.x,
                              cy: l2.y,
                              rx: 0.1 * a3.a,
                              ry: 0.05 * a3.a
                            }),
                            (0, t.jsx)("circle", {
                              ref: (e5) => {
                                eu.current.device[s3] = e5;
                              },
                              className: c().device,
                              cx: l2.x,
                              cy: l2.y,
                              r: 0.05 * a3.a,
                              fillOpacity: 0
                            })
                          ]
                        },
                        s3
                      );
                    })), "balancer" === e3) {
                      let e4 = 0.6 * a3.a, r4 = a3.cy - 12, l2 = 0.62 * e4;
                      s2 = (0, t.jsxs)(t.Fragment, {
                        children: [
                          eF(E(a3.cx, r4, e4, 12)),
                          (0, t.jsx)("path", {
                            className: c().dialTrack,
                            d: R(a3.cx, r4, l2)
                          }),
                          (0, t.jsx)("path", {
                            ref: (e5) => {
                              eu.current.dialB = e5;
                            },
                            className: c().dialB,
                            d: R(a3.cx, r4, l2),
                            pathLength: 1e3,
                            strokeDasharray: "500 1000",
                            strokeDashoffset: -500
                          }),
                          (0, t.jsx)("path", {
                            ref: (e5) => {
                              eu.current.dialA = e5;
                            },
                            className: c().dialA,
                            d: R(a3.cx, r4, l2),
                            pathLength: 1e3,
                            strokeDasharray: "500 1000"
                          })
                        ]
                      });
                    }
                    return ("primary" === e3 || "secondary" === e3) && (s2 = [...ed.cubes[e3]].sort((e4, a4) => e4.y - a4.y).map(
                      (a4) => (0, t.jsx)(
                        "g",
                        {
                          ref: (r4) => {
                            eu.current.cube[e3][a4.i] = r4;
                          },
                          className: c().cube,
                          "data-state": "up",
                          children: eF(E(a4.x, a4.y, a4.a, a4.h))
                        },
                        a4.i
                      )
                    )), (0, t.jsxs)(
                      "g",
                      {
                        ref: (a4) => {
                          eu.current.node[e3] = a4;
                        },
                        className: c().node,
                        "data-on": ee === e3 || void 0,
                        "data-dim": null !== ee && ee !== e3 && "balancer" !== e3 && "balancer" !== ee || void 0,
                        ...e$(e3),
                        children: [
                          eF(r3),
                          s2,
                          (0, t.jsx)("polygon", {
                            className: c().hit,
                            points: r3.outline
                          })
                        ]
                      },
                      e3
                    );
                  }),
                  (0, t.jsx)("g", {
                    className: c().traffic,
                    "data-dim": "primary" === ee || "secondary" === ee || void 0,
                    children: Array.from(
                      { length: 12 },
                      (e3, a3) => (0, t.jsx)(
                        "circle",
                        {
                          ref: (e4) => {
                            eu.current.packet[a3] = e4;
                          },
                          className: c().packet,
                          cx: 0,
                          cy: 0,
                          r: 4,
                          opacity: 0,
                          "data-kind": "request"
                        },
                        a3
                      )
                    )
                  }),
                  (0, t.jsx)("circle", {
                    ref: (e3) => {
                      eu.current.probe = e3;
                    },
                    className: c().probe,
                    cx: 0,
                    cy: 0,
                    r: 4.5,
                    opacity: 0,
                    "data-result": "out"
                  })
                ]
              }),
              d.map((e3) => {
                let s2 = ed.labels[e3], l2 = es[e3], i2 = "primary" === e3 || "secondary" === e3;
                return (0, t.jsxs)(
                  "div",
                  {
                    className: c().label,
                    "data-on": ee === e3 || void 0,
                    "data-above": s2.above || void 0,
                    "data-kind": e3,
                    style: { left: eM(s2.x, ed.w), top: eM(s2.y, ed.h) },
                    ...e$(e3),
                    children: [
                      (0, t.jsxs)("span", {
                        className: c().name,
                        children: [
                          (0, t.jsx)(P, { node: l2, className: c().mark }),
                          l2.label
                        ]
                      }),
                      l2.meta && (0, t.jsx)("span", {
                        className: c().meta,
                        children: l2.meta
                      }),
                      (0, t.jsxs)("span", {
                        ref: (a3) => {
                          eu.current.status[e3] = a3;
                        },
                        className: c().status,
                        "data-state": "done",
                        children: [
                          (0, t.jsx)("span", {
                            className: c().dot,
                            "aria-hidden": "true"
                          }),
                          (0, t.jsx)("span", {
                            ref: (a3) => {
                              eu.current.statusText[e3] = a3;
                            },
                            children: "users" === e3 ? `${D(a2)} req/s` : "balancer" === e3 ? "No errors" : "Healthy"
                          })
                        ]
                      }),
                      i2 && (0, t.jsx)("span", {
                        ref: (a3) => {
                          eu.current.metric[e3] = a3;
                        },
                        className: c().metric,
                        children: C(
                          `${D(a2 / 2)} req/s`,
                          `p50 ${"primary" === e3 ? r2 : r2 + 4} ms`
                        )
                      }),
                      "balancer" === e3 && (0, t.jsxs)("span", {
                        className: c().weights,
                        children: [
                          (0, t.jsxs)("span", {
                            className: c().bar,
                            children: [
                              (0, t.jsx)("span", {
                                ref: (e4) => {
                                  eu.current.barA = e4;
                                },
                                className: c().barA
                              }),
                              (0, t.jsx)("span", {
                                ref: (e4) => {
                                  eu.current.barB = e4;
                                },
                                className: c().barB
                              })
                            ]
                          }),
                          (0, t.jsxs)("span", {
                            className: c().split,
                            children: [
                              (0, t.jsxs)("span", {
                                className: c().splitSide,
                                children: [
                                  (0, t.jsx)("span", {
                                    className: c().splitName,
                                    children: el
                                  }),
                                  (0, t.jsx)("span", {
                                    ref: (e4) => {
                                      eu.current.pctA = e4;
                                    },
                                    className: c().splitPct,
                                    children: "50%"
                                  })
                                ]
                              }),
                              (0, t.jsxs)("span", {
                                className: c().splitSide,
                                "data-end": true,
                                children: [
                                  (0, t.jsx)("span", {
                                    className: c().splitName,
                                    children: ei
                                  }),
                                  (0, t.jsx)("span", {
                                    ref: (e4) => {
                                      eu.current.pctB = e4;
                                    },
                                    className: c().splitPct,
                                    children: "50%"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  e3
                );
              }),
              d.map((e3) => {
                let a3 = ed.nodes[e3], r3 = es[e3].detail;
                if (!r3) return null;
                let s2 = "balancer" === e3 ? 12 + 0.6 * a3.a / 2 : "primary" === e3 || "secondary" === e3 ? a3.a / 2 + 0.14 * a3.a : a3.a / 2, l2 = ed.labels[e3].above && ed.labels[e3].y < a3.cy, i2 = l2 ? a3.floor + a3.a / 2 + 16 : a3.cy - s2 - 10, n2 = a3.cx / ed.w;
                return (0, t.jsx)(
                  "span",
                  {
                    className: c().tag,
                    "data-show": ee === e3 || void 0,
                    "data-below": l2 || void 0,
                    "data-align": n2 > 0.7 ? "end" : n2 < 0.3 ? "start" : "center",
                    style: { left: eM(a3.cx, ed.w), top: eM(i2, ed.h) },
                    "aria-hidden": "true",
                    children: r3
                  },
                  `tag-${e3}`
                );
              }),
              (0, t.jsx)("span", {
                ref: (e3) => {
                  eu.current.msg = e3;
                },
                className: c().msg,
                style: { opacity: 0 },
                "aria-hidden": "true",
                children: (0, t.jsx)("span", {
                  ref: (e3) => {
                    eu.current.msgText = e3;
                  },
                  children: "GET /healthz"
                })
              })
            ]
          })
        }),
        H2 && (0, t.jsxs)("div", {
          className: c().controls,
          children: [
            !K && (0, t.jsx)("button", {
              type: "button",
              className: c().toggle,
              "aria-label": eA ? "Play" : "Pause",
              "aria-pressed": er,
              disabled: W2 || 0 === U2,
              onClick: () => et((e3) => !e3),
              children: eA ? (0, t.jsx)(i.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }) : (0, t.jsx)(n.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, t.jsx)("div", {
              className: c().segments,
              role: "group",
              "aria-label": "Failover steps",
              children: v.map(
                (e3, a3) => (0, t.jsxs)(
                  "button",
                  {
                    ref: (e4) => {
                      eu.current.seg[a3] = e4;
                    },
                    type: "button",
                    className: c().seg,
                    "aria-label": `Step ${a3 + 1} of ${v.length}: ${e3.title}`,
                    onClick: () => eb(a3),
                    onKeyDown: (e4) => {
                      let r3;
                      !((r3 = "ArrowRight" === e4.key ? a3 + 1 : "ArrowLeft" === e4.key ? a3 - 1 : "Home" === e4.key ? 0 : "End" === e4.key ? v.length - 1 : -1) < 0) && !(r3 >= v.length) && (e4.preventDefault(), eu.current.seg[r3]?.focus(), eb(r3));
                    },
                    children: [
                      (0, t.jsx)("span", {
                        className: c().track,
                        children: (0, t.jsx)("span", {
                          ref: (e4) => {
                            eu.current.fill[a3] = e4;
                          },
                          className: c().fill
                        })
                      }),
                      (0, t.jsx)("span", {
                        className: c().segLabel,
                        children: e3.short
                      })
                    ]
                  },
                  e3.short
                )
              )
            })
          ]
        }),
        I && (0, t.jsxs)("figcaption", {
          ref: (e3) => {
            eu.current.caption = e3;
          },
          className: c().caption,
          "aria-hidden": "true",
          children: [
            (0, t.jsx)("span", {
              ref: (e3) => {
                eu.current.capTitle = e3;
              },
              className: c().capTitle,
              children: v[0].title
            }),
            (0, t.jsx)("span", {
              ref: (e3) => {
                eu.current.capText = e3;
              },
              className: c().capText,
              children: en.captions[0]
            })
          ]
        })
      ]
    });
  }
  var U = r(13729), W = r.n(U);
  function O() {
    return (0, t.jsx)("div", {
      className: W().demo,
      "data-canvas": "wide",
      children: (0, t.jsx)(z, {
        hostname: "api.acme.dev",
        requestsPerSecond: 12e3,
        nodes: {
          balancer: {
            label: "Load balancer",
            meta: "api.acme.dev",
            icon: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
            color: "#F38020"
          }
        }
      })
    });
  }
  let H = O;
}

__m(__module,__exports,__require);
});
A.regCss(78642, ".root{--mrf-accent:var(--accent);--mrf-top:var(--surface-raised);--mrf-left:color-mix(in oklab,var(--surface-muted) 80%,var(--surface-raised));--mrf-right:color-mix(in oklab,var(--surface-muted) 70%,var(--border));--mrf-edge:color-mix(in oklab,var(--border-strong) 88%,var(--surface-raised));--mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;display:grid;width:100%;max-width:1080px;min-width:0;margin:0 auto;gap:var(--space-4);container-type:inline-size;color:var(--foreground);-webkit-tap-highlight-color:transparent}\n[data-theme=dark] .root{--mrf-top:color-mix(in oklab,var(--surface-raised) 88%,var(--foreground));--mrf-left:var(--surface-raised);--mrf-right:color-mix(in oklab,var(--surface) 70%,var(--background));--mrf-edge:color-mix(in oklab,var(--border-strong) 80%,var(--foreground))}\n@container (width < 640px){.root:not([data-ready]) .stage{aspect-ratio:390/750}\n.root[data-ready] .stage>:is(.svg,.label){opacity:1}\n.root[data-layout=stack] .floor{display:none}\n.stage{position:relative;width:100%;min-width:0;aspect-ratio:1000/600}\n.stage>:is(.svg,.label){opacity:0;transition:opacity var(--duration-considered) var(--ease-standard)}\n.stage{margin-bottom:var(--space-6)}\n@media (prefers-reduced-motion:reduce){.cube :is(.faceLeft,.faceRight),.dot,.faceTop,.floor,.node,.route,.seg,.stage>:is(.svg,.label),.status,.tag,.toggle,.traffic{transition-duration:var(--duration-instant)}\n.svg{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:visible;pointer-events:none}\n.svg :is(path,polygon,line,circle,ellipse){vector-effect:non-scaling-stroke}\n.label{position:absolute;z-index:1;display:grid;justify-items:center;width:max-content;min-width:0;max-width:12rem;transform:translateX(-50%);text-align:center;cursor:default}\n.label[data-above]{transform:translate(-50%,-100%)}\n@container (width < 640px){.label{max-width:10.5rem}\n.label[data-kind=primary],.label[data-kind=secondary]{grid-template-columns:minmax(0,1fr);max-width:min(11rem,calc(48cqi - 8px))}\n.label[data-kind=primary] .status,.label[data-kind=secondary] .status{max-width:none}\n.label[data-kind=primary] .metric,.label[data-kind=secondary] .metric{min-height:calc(var(--text-xs) * 1.5 * 2);white-space:normal;text-wrap:balance}\n.node{transition:opacity var(--duration-standard) var(--ease-standard)}\n.node[data-dim]{opacity:.45}\n.node[data-on]>.faceTop{stroke:color-mix(in oklab,var(--mrf-accent) 60%,var(--mrf-edge))}\n.faceLeft,.faceRight,.faceTop{stroke:var(--mrf-edge);stroke-width:1;stroke-linejoin:round}\n.faceTop{fill:var(--mrf-top);transition:stroke var(--duration-standard) var(--ease-standard)}\n.cube .faceTop{fill:color-mix(in oklab,var(--mrf-accent) calc(var(--hit) * 55% + var(--load) * 16%),var(--mrf-top));stroke:color-mix(in oklab,var(--mrf-accent) calc(var(--hit) * 70%),var(--mrf-edge));transition:none}\n.cube[data-state=down] .faceTop{fill:color-mix(in oklab,var(--danger) 16%,var(--mrf-top));stroke:color-mix(in oklab,var(--danger) 70%,var(--mrf-edge))}\n.faceLeft{fill:var(--mrf-left)}\n.cube :is(.faceLeft,.faceRight){transition:fill var(--duration-standard) var(--ease-standard),stroke var(--duration-standard) var(--ease-standard)}\n.cube[data-state=down] :is(.faceLeft,.faceRight){stroke:color-mix(in oklab,var(--danger) 45%,var(--mrf-edge))}\n.cube[data-state=down] .faceLeft{fill:color-mix(in oklab,var(--danger) 8%,var(--mrf-left))}\n.faceRight{fill:var(--mrf-right)}\n.cube[data-state=down] .faceRight{fill:color-mix(in oklab,var(--danger) 10%,var(--mrf-right))}\n.hit{fill:transparent;stroke:none;pointer-events:all}\n.deviceBase{fill:var(--surface-muted);stroke:var(--mrf-edge);stroke-width:1}\n.device{fill:var(--mrf-accent)}\n.dialTrack{fill:none;stroke:var(--border);stroke-width:2.5}\n.dialA{fill:none;stroke:var(--mrf-accent);stroke-width:2.5}\n.dialB{fill:none;stroke:color-mix(in oklab,var(--mrf-accent) 42%,var(--mrf-top));stroke-width:2.5}\n.cube{--hit:0;--load:0}\n.floor{fill:none;stroke:var(--border);stroke-width:1;stroke-dasharray:2 4;transition:opacity var(--duration-standard) var(--ease-standard)}\n.floor[data-dim]{opacity:.4}\n.shadow{fill:var(--foreground);fill-opacity:.12}\n.route,.traffic{transition:opacity var(--duration-standard) var(--ease-standard)}\n.route[data-dim]{opacity:.3}\n.route[data-on] .edge{stroke-width:1.5}\n.traffic[data-dim]{opacity:.75}\n.edge{--lit:0;--err:0;fill:none;stroke:color-mix(in oklab,var(--danger) calc(var(--err) * 70%),color-mix(in oklab,var(--mrf-accent) calc(var(--lit) * 50%),var(--border-strong)));stroke-width:1}\n.packet{fill:var(--mrf-accent);stroke:var(--surface);stroke-width:1.5}\n.packet[data-kind=error]{fill:var(--danger)}\n.probe{fill:var(--surface);stroke:var(--text-secondary);stroke-width:1.5}\n.probe[data-result=pass]{stroke:var(--success)}\n.probe[data-result=fail]{stroke:var(--danger)}\n.name{display:inline-flex;align-items:center;gap:6px;max-width:100%;overflow:hidden;font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.mark{display:grid;flex:none;place-items:center;width:14px;height:14px;color:var(--text-secondary);object-fit:contain}\n.mark>svg{width:14px;height:14px;stroke-width:1.75}\n.meta{max-width:100%;overflow:hidden;color:var(--text-muted);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;line-height:1.5;text-overflow:ellipsis;white-space:nowrap}\n@container (640px <= width < 860px){.meta{display:none}\n.metric{overflow:hidden;text-overflow:ellipsis}\n.metric,.status{max-width:100%;margin-top:4px;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-body);line-height:1.5;white-space:nowrap}\n.status{display:inline-flex;align-items:center;gap:6px;padding:1px 8px 1px 7px;border:1px solid var(--border-subtle);border-radius:var(--radius-pill);background:var(--surface);transition:border-color var(--duration-standard) var(--ease-standard)}\n.status[data-state=busy] .dot{border-color:var(--mrf-accent);background:color-mix(in oklab,var(--mrf-accent) 35%,transparent)}\n.status[data-state=done]{color:var(--foreground)}\n.status[data-state=done] .dot{border-color:var(--success);background:var(--success)}\n.status[data-state=warn]{color:var(--foreground)}\n.status[data-state=warn] .dot{border-color:var(--warning);background:color-mix(in oklab,var(--warning) 35%,transparent)}\n.status[data-state=error]{border-color:color-mix(in oklab,var(--danger) 30%,var(--border-subtle));color:var(--foreground)}\n.status[data-state=error] .dot{border-color:var(--danger);background:var(--danger)}\n.dot{flex:none;width:6px;height:6px;border:1.25px solid var(--border-strong);border-radius:50%;box-sizing:border-box;transition:background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard)}\n.weights{display:grid;gap:4px;width:11.5rem;max-width:100%;margin-top:var(--space-2)}\n.bar{position:relative;display:block;height:4px;overflow:hidden;border-radius:2px;background:var(--border)}\n.barA,.barB{position:absolute;inset:0;border-radius:inherit;will-change:transform}\n.barA{background:var(--mrf-accent);transform-origin:0 50%;transform:scaleX(.5)}\n.barB{background:color-mix(in oklab,var(--mrf-accent) 42%,var(--surface));transform-origin:100% 50%;transform:scaleX(.5)}\n.split{display:flex;justify-content:space-between;gap:var(--space-2)}\n.splitSide{display:inline-flex;align-items:baseline;gap:4px;min-width:0;font-size:var(--text-xs);line-height:1.4}\n.splitSide[data-end] .splitPct{text-align:right}\n.splitName{overflow:hidden;color:var(--text-muted);letter-spacing:var(--tracking-body);text-overflow:ellipsis;white-space:nowrap}\n.splitPct{min-width:4ch;color:var(--foreground);font-variant-numeric:tabular-nums;font-weight:500;text-align:left}\n.msg{position:absolute;top:0;left:0;z-index:2;padding:1px 7px;border:1px solid var(--border);border-radius:var(--radius-pill);color:var(--text-secondary);background:var(--surface-raised);font-family:var(--mono);font-size:var(--text-xs);line-height:1.5;white-space:nowrap;pointer-events:none;will-change:transform,opacity}\n.msg[data-kind=fail]{border-color:color-mix(in oklab,var(--danger) 45%,var(--border));color:var(--danger)}\n.msg[data-kind=pass]{border-color:color-mix(in oklab,var(--success) 45%,var(--border));color:var(--foreground)}\n.tag{position:absolute;z-index:3;padding:3px var(--space-2);border-radius:var(--radius-pill);color:var(--background);background:var(--foreground);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap;opacity:0;pointer-events:none;--tx:-50%;--ty:-100%;transform:translate(var(--tx),var(--ty)) translateY(4px) scale(.96);transform-origin:50% 100%;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.tag[data-below]{--ty:0%;transform-origin:50% 0}\n.tag[data-align=end]{--tx:calc(-100% + 24px);transform-origin:100% 100%}\n.tag[data-align=start]{--tx:-24px;transform-origin:0 100%}\n.tag[data-show]{opacity:1;transform:translate(var(--tx),var(--ty));transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.controls{display:flex;align-items:flex-start;gap:var(--space-3);width:100%;max-width:640px;margin-inline:auto}\n.controls{align-items:center}\n.toggle{display:grid;flex:none;place-items:center;width:36px;height:36px;margin-top:2px;padding:0;border:1px solid var(--border);border-radius:50%;color:var(--text-secondary);background:var(--surface);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n@media (hover:hover) and (pointer:fine){.toggle:hover:not(:disabled){color:var(--foreground);background:var(--surface-muted)}\n.toggle:active{transform:scale(.97)}\n.toggle:disabled{cursor:default;opacity:.5}\n.toggle{margin-top:0}\n.segments{display:grid;flex:1;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px;min-width:0}\n.seg{display:grid;gap:8px;min-width:0;min-height:44px;align-content:start;padding:10px 0 0;border:0;color:var(--text-muted);background:none;font:inherit;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.seg[data-current=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.seg:hover{color:var(--foreground)}\n.seg{min-height:36px;padding-top:16px}\n.track{display:block;height:3px;overflow:hidden;border-radius:2px;background:var(--border)}\n.fill{display:block;height:100%;border-radius:inherit;background:var(--mrf-accent);transform:scaleX(0);transform-origin:0 50%}\n.segLabel{overflow:hidden;font-size:var(--text-xs);letter-spacing:var(--tracking-body);line-height:1.3;text-align:left;text-overflow:ellipsis;white-space:nowrap}\n.segLabel{display:none}\n.caption{display:grid;justify-items:center;gap:2px;min-height:calc(var(--text-sm) * 1.4 * 3);margin:0 auto;max-width:560px;padding-inline:var(--space-4);text-align:center}\n.caption{min-height:calc(var(--text-sm) * 1.4 * 4);padding-inline:0}\n.capTitle{font-weight:500}\n.capText,.capTitle{font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.capText{color:var(--text-secondary);text-wrap:balance}", {"root":"root","stage":"stage","svg":"svg","label":"label","floor":"floor","cube":"cube","faceLeft":"faceLeft","faceRight":"faceRight","dot":"dot","faceTop":"faceTop","node":"node","route":"route","seg":"seg","status":"status","tag":"tag","toggle":"toggle","traffic":"traffic","metric":"metric","hit":"hit","deviceBase":"deviceBase","device":"device","dialTrack":"dialTrack","dialA":"dialA","dialB":"dialB","shadow":"shadow","edge":"edge","packet":"packet","probe":"probe","name":"name","mark":"mark","meta":"meta","weights":"weights","bar":"bar","barA":"barA","barB":"barB","split":"split","splitSide":"splitSide","splitPct":"splitPct","splitName":"splitName","msg":"msg","controls":"controls","segments":"segments","track":"track","fill":"fill","segLabel":"segLabel","caption":"caption","capTitle":"capTitle","capText":"capText"});
A.cssFor("multi-region-failover", [13729,78642]);
A.item("multi-region-failover", {entry:74232, export:"MultiRegionFailoverDemo", kind:"component", tier:"pro", unresolved:[]});
})();