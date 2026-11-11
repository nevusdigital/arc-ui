/* data-flow (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(11975, ".demo{display:grid;width:100%;max-width:920px;margin-inline:auto}", {"demo":"demo"});
A.reg(30116, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { DataFlowDemo: () => S, default: () => R });
  var r = a(95155), s = a(12115), o = a(18310), i = a(89383), l = a(34306), n = a(72974), c = a(51811);
  let d = {
    name: "warehouse",
    size: 24,
    node: [
      [
        "path",
        { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11", key: "pb2vm6" }
      ],
      [
        "path",
        {
          d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",
          key: "doq5xv"
        }
      ],
      ["path", { d: "M6 13h12", key: "yf64js" }],
      ["path", { d: "M6 17h12", key: "1jwigz" }]
    ]
  };
  d.node;
  let h = (0, c.A)(d);
  var u = a(49960), x = a(46395), p = a(89154), y = a.n(p);
  let m = [
    {
      id: "app",
      label: "App",
      meta: "Web and iOS",
      detail: "Clicks and sessions as they happen",
      icon: (0, r.jsx)(i.A, {})
    },
    {
      id: "database",
      label: "Database",
      meta: "Postgres",
      detail: "Row changes through change data capture",
      icon: (0, r.jsx)(l.A, {})
    },
    {
      id: "events",
      label: "Events",
      meta: "Webhooks",
      detail: "Billing and auth events from partners",
      icon: (0, r.jsx)(n.A, {})
    }
  ], f = [
    {
      id: "warehouse",
      label: "Warehouse",
      meta: "Every record",
      detail: "Stored in full for analysis",
      icon: (0, r.jsx)(h, {})
    },
    {
      id: "dashboard",
      label: "Dashboard",
      meta: "Live metrics",
      detail: "Rolled up into metrics each minute",
      icon: (0, r.jsx)(u.A, {})
    },
    {
      id: "alerts",
      label: "Alerts",
      meta: "Anomalies only",
      detail: "Only unusual records page the on-call",
      icon: (0, r.jsx)(x.A, {}),
      share: 0.34
    }
  ], w = [0, 2, 1, 0, 1, 2], g = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), v = (e2) => 0.5 - Math.cos(Math.PI * g(e2, 0, 1)) / 2, _ = (e2) => e2.id ?? e2.label, b = (e2) => Math.round(e2).toLocaleString("en-US"), M = () => () => {
  };
  function j(e2, t2, a2, r2, s2) {
    let o2 = [];
    s2 && o2.push(s2);
    let i2 = "x" === a2 ? (t2.x - e2.x) * 0.5 : (t2.y - e2.y) * 0.5, l2 = "x" === a2 ? { x: e2.x + i2, y: e2.y } : { x: e2.x, y: e2.y + i2 }, n2 = "x" === a2 ? { x: t2.x - i2, y: t2.y } : { x: t2.x, y: t2.y - i2 };
    for (let a3 = 0; a3 <= 72; a3++) {
      let r3 = a3 / 72, s3 = 1 - r3;
      o2.push({
        x: s3 * s3 * s3 * e2.x + 3 * s3 * s3 * r3 * l2.x + 3 * s3 * r3 * r3 * n2.x + r3 * r3 * r3 * t2.x,
        y: s3 * s3 * s3 * e2.y + 3 * s3 * s3 * r3 * l2.y + 3 * s3 * r3 * r3 * n2.y + r3 * r3 * r3 * t2.y
      });
    }
    r2 && o2.push(r2);
    let c2 = o2.length, d2 = new Float32Array(c2), h2 = new Float32Array(c2), u2 = new Float32Array(c2);
    for (let e3 = 0; e3 < c2; e3++)
      d2[e3] = o2[e3].x, h2[e3] = o2[e3].y, u2[e3] = e3 ? u2[e3 - 1] + Math.hypot(d2[e3] - d2[e3 - 1], h2[e3] - h2[e3 - 1]) : 0;
    let x2 = `${s2 ? `M${s2.x.toFixed(2)} ${s2.y.toFixed(2)} L` : "M"}${e2.x.toFixed(2)} ${e2.y.toFixed(2)} C${l2.x.toFixed(2)} ${l2.y.toFixed(2)} ${n2.x.toFixed(2)} ${n2.y.toFixed(2)} ${t2.x.toFixed(2)} ${t2.y.toFixed(2)}${r2 ? ` L${r2.x.toFixed(2)} ${r2.y.toFixed(2)}` : ""}`, p2 = u2[c2 - 1] || 1;
    return {
      d: x2,
      xs: d2,
      ys: h2,
      acc: u2,
      len: p2,
      edge: r2 ? u2[c2 - 2] : s2 ? u2[1] : 0
    };
  }
  function $(e2, t2) {
    let { acc: a2, xs: r2, ys: s2 } = e2, o2 = g(t2, 0, e2.len), i2 = 0, l2 = a2.length - 1;
    for (; l2 - i2 > 1; ) {
      let e3 = i2 + l2 >> 1;
      a2[e3] < o2 ? i2 = e3 : l2 = e3;
    }
    let n2 = a2[l2] - a2[i2] || 1, c2 = (o2 - a2[i2]) / n2;
    return { x: r2[i2] + (r2[l2] - r2[i2]) * c2, y: s2[i2] + (s2[l2] - s2[i2]) * c2 };
  }
  function k({ node: e2 }) {
    let { icon: t2, color: a2 } = e2;
    if (null == t2) return null;
    if ("string" == typeof t2)
      return /^(\/|\.|https?:|data:|blob:)/.test(t2) ? (0, r.jsx)("img", {
        className: y().mark,
        src: t2,
        alt: "",
        draggable: false
      }) : (0, r.jsx)("svg", {
        className: y().mark,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: (0, r.jsx)("path", { d: t2, fill: a2 ?? "currentColor" })
      });
    return (0, r.jsx)("span", {
      className: y().mark,
      "aria-hidden": "true",
      children: t2
    });
  }
  let F = (e2, t2) => t2 >= 1 || Math.floor((e2 + 1) * t2) > Math.floor(e2 * t2);
  function A({
    sources: e2 = m,
    destinations: t2 = f,
    core: a2,
    speed: i2 = 1,
    paused: l2 = false,
    accent: n2,
    label: c2,
    caption: d2,
    className: h2,
    style: u2
  }) {
    let x2, p2 = (x2 = (0, s.useSyncExternalStore)(
      M,
      () => true,
      () => false
    ), !!(0, o.I)() && x2), N2 = (0, s.useRef)(null), [C2, E2] = (0, s.useState)(0), [D2, L2] = (0, s.useState)(null), S2 = a2?.label ?? "Transform", R2 = a2?.detail ?? "Validates, dedupes and enriches each record", V = a2?.countLabel ?? "processed", P = a2?.countStart ?? 12480, z = Math.max(1, e2.length), H = Math.max(1, t2.length), O = (0, s.useMemo)(
      () => C2 > 0 ? (function(e3, t3, a3) {
        let r2 = e3 < 600;
        if (!r2) {
          let s3 = Math.round(g(0.4 * e3, 300, 400)), o3 = Math.round(g(0.18 * e3, 132, 184)), i4 = Math.round(g(0.1 * e3, 84, 104)), l4 = { x: Math.round(e3 / 2), y: Math.round(s3 / 2 - 10) }, n4 = (e4) => {
            let t4 = Math.min(0.29 * s3, 112);
            return Array.from(
              { length: e4 },
              (a4, r3) => Math.round(
                l4.y + (1 === e4 ? 0 : (r3 / (e4 - 1) - 0.5) * 2 * t4)
              )
            );
          }, c4 = (e4, t4) => 1 === t4 ? 0 : (e4 / (t4 - 1) - 0.5) * 2 * Math.min(14, 0.16 * i4), d4 = n4(t3).map((e4) => ({ x: 1, y: e4 - 26, w: o3, h: 52 })), h4 = n4(a3).map((t4) => ({
            x: e3 - 1 - o3,
            y: t4 - 26,
            w: o3,
            h: 52
          })), u3 = d4.map(
            (e4, a4) => j(
              { x: e4.x + e4.w, y: e4.y + e4.h / 2 },
              { x: l4.x - i4 / 2, y: l4.y + c4(a4, t3) },
              "x",
              l4
            )
          ), x3 = h4.map(
            (e4, t4) => j(
              { x: l4.x + i4 / 2, y: l4.y + c4(t4, a3) },
              { x: e4.x, y: e4.y + e4.h / 2 },
              "x",
              void 0,
              l4
            )
          );
          return {
            w: e3,
            h: s3,
            stacked: r2,
            core: i4,
            c: l4,
            sources: d4,
            dests: h4,
            inCurves: u3,
            outCurves: x3
          };
        }
        let s2 = Math.round(g(1.24 * e3, 440, 560)), o2 = { x: Math.round(e3 / 2), y: Math.round(s2 / 2) }, i3 = (t4) => {
          let a4 = (e3 - 2 - 8 * (t4 - 1)) / t4;
          return Array.from({ length: t4 }, (e4, t5) => {
            let r3 = Math.round(1 + t5 * (a4 + 8));
            return { x: r3, w: Math.round(1 + t5 * (a4 + 8) + a4) - r3 };
          });
        }, l3 = (e4, t4) => 1 === t4 ? 0 : (e4 / (t4 - 1) - 0.5) * 28, n3 = i3(t3).map((e4) => ({ x: e4.x, y: 1, w: e4.w, h: 64 })), c3 = i3(a3).map((e4) => ({
          x: e4.x,
          y: s2 - 1 - 64,
          w: e4.w,
          h: 64
        })), d3 = n3.map(
          (e4, a4) => j(
            { x: e4.x + e4.w / 2, y: e4.y + e4.h },
            { x: o2.x + l3(a4, t3), y: o2.y - 42 },
            "y",
            o2
          )
        ), h3 = c3.map(
          (e4, t4) => j(
            { x: o2.x + l3(t4, a3), y: o2.y + 42 },
            { x: e4.x + e4.w / 2, y: e4.y },
            "y",
            void 0,
            o2
          )
        );
        return {
          w: e3,
          h: s2,
          stacked: r2,
          core: 84,
          c: o2,
          sources: n3,
          dests: c3,
          inCurves: d3,
          outCurves: h3
        };
      })(C2, z, H) : null,
      [C2, z, H]
    ), T = (0, s.useMemo)(() => {
      let e3 = 3 === z ? w : Array.from({ length: Math.max(6, 2 * z) }, (e4, t3) => t3 % z);
      return e3.map((t3, a3) => ({
        src: t3,
        at: 6.6 * a3 / e3.length,
        pace: 1 + (5 * a3 % 7 - 3) * 0.025
      }));
    }, [z]), W = (0, s.useMemo)(() => t2.map((e3) => g(e3.share ?? 1, 0, 1)), [t2]), q = (0, s.useRef)({
      raw: [],
      rawDot: [],
      rawDone: [],
      rawTrail: [],
      out: [],
      outTrail: [],
      srcPort: [],
      dstPort: [],
      srcChip: [],
      dstChip: [],
      ring: null,
      pulse: null,
      core: null,
      count: null
    }), B = (0, s.useRef)({
      t: 13.2,
      rate: NaN,
      rateV: 0,
      spin: 0,
      coreHit: 0,
      frame: 0,
      running: false,
      visible: true,
      lastCount: -1,
      cache: /* @__PURE__ */ new Map()
    }), I = (0, s.useRef)({
      geometry: O,
      slots: T,
      shares: W,
      target: 1,
      reduced: p2,
      countStart: P
    }), J = l2 ? 0 : i2 * (D2 ? 0.7 : 1);
    (0, s.useLayoutEffect)(() => {
      I.current = {
        geometry: O,
        slots: T,
        shares: W,
        target: J,
        reduced: p2,
        countStart: P
      };
    });
    let K = (0, s.useCallback)((e3, t3, a3) => {
      if (!e3) return;
      let r2 = B.current.cache, s2 = r2.get(e3);
      s2 || (s2 = {}, r2.set(e3, s2)), s2[t3] !== a3 && (s2[t3] = a3, t3.startsWith("--") ? e3.style.setProperty(t3, a3) : e3.setAttribute(t3, a3));
    }, []), U = (0, s.useCallback)(
      (e3, t3) => {
        let { geometry: a3, slots: r2, shares: s2, countStart: o2 } = I.current;
        if (!a3) return;
        let i3 = q.current, l3 = Array(a3.inCurves.length).fill(0), n3 = Array(a3.outCurves.length).fill(0), c3 = -1, d3 = 0, h3 = (e4, t4, a4) => Math.max(0, Math.floor((a4 - e4 - 1.75 * t4 - 0.55) / 6.6) + 1);
        r2.forEach((o3, u4) => {
          let x4 = 1.75 * o3.pace, p3 = 1.85 * o3.pace, y2 = a3.inCurves[o3.src], m2 = i3.raw[u4], f2 = i3.rawTrail[u4];
          if (d3 += h3(o3.at, o3.pace, e3) - h3(o3.at, o3.pace, 13.2), t3) {
            let e4 = r2.findIndex((e5) => e5.src === o3.src) === u4;
            if (e4 && y2) {
              let e5 = $(y2, 0.56 * y2.edge);
              K(
                m2,
                "transform",
                `translate(${e5.x.toFixed(2)} ${e5.y.toFixed(2)})`
              ), K(i3.rawDot[u4], "opacity", "1"), K(i3.rawDone[u4], "opacity", "0");
            }
            K(m2, "opacity", e4 ? "1" : "0"), K(f2, "opacity", "0"), a3.outCurves.forEach((e5, t4) => {
              let a4 = u4 === t4 % r2.length, s3 = i3.out[u4]?.[t4];
              if (a4) {
                let t5 = $(e5, e5.edge + (e5.len - e5.edge) * 0.5);
                K(
                  s3,
                  "transform",
                  `translate(${t5.x.toFixed(2)} ${t5.y.toFixed(2)})`
                );
              }
              K(s3, "opacity", a4 ? "1" : "0"), K(i3.outTrail[u4]?.[t4], "opacity", "0");
            });
            return;
          }
          let w2 = e3 - o3.at, _2 = Math.floor(w2 / 6.6), b2 = w2 - 6.6 * _2, M2 = _2 * r2.length + u4;
          l3[o3.src] = Math.max(
            l3[o3.src],
            b2 < 0.12 ? v(b2 / 0.12) : (1 - g((b2 - 0.12) / 0.6, 0, 1)) ** 2
          );
          let j2 = x4 + 0.55 + 0.93 * p3;
          a3.outCurves.forEach((e4, t4) => {
            if (!F(M2, s2[t4] ?? 1)) return;
            let a4 = b2 - j2, r3 = a4 < -0.12 ? 0 : a4 < 0 ? 1 + a4 / 0.12 : (1 - g(a4 / 0.6, 0, 1)) ** 2;
            n3[t4] = Math.max(n3[t4], r3);
          }), b2 >= x4 && (c3 = c3 < 0 ? b2 - x4 : Math.min(c3, b2 - x4));
          let k2 = () => a3.outCurves.forEach((e4, t4) => {
            K(i3.out[u4]?.[t4], "opacity", "0"), K(i3.outTrail[u4]?.[t4], "opacity", "0");
          });
          if (!y2 || b2 >= x4 + 0.55 + p3) {
            K(m2, "opacity", "0"), K(f2, "opacity", "0"), k2();
            return;
          }
          if (b2 < x4 + 0.55) {
            let e4, t4, r3, s3, o4;
            if (k2(), b2 < x4) {
              let a4 = v(b2 / x4) * y2.len;
              ({ x: e4, y: t4 } = $(y2, a4)), o4 = g(b2 / 0.18, 0, 1), r3 = 0.55 + 0.45 * v(b2 / 0.3), s3 = 0;
              let i4 = Math.min(a4, y2.edge), l4 = Math.min(42, i4);
              K(
                f2,
                "stroke-dasharray",
                `${(l4 / y2.len * 1e3).toFixed(2)} 2000`
              ), K(
                f2,
                "stroke-dashoffset",
                `${(-(1e3 * ((i4 - l4) / y2.len))).toFixed(2)}`
              ), K(
                f2,
                "opacity",
                g(
                  Math.min(b2 / 0.3, (y2.edge - (a4 - 42)) / 42),
                  0,
                  1
                ).toFixed(3)
              );
            } else {
              let i4 = v((b2 - x4) / 0.55);
              e4 = a3.c.x, t4 = a3.c.y, o4 = 1, r3 = 1 + 0.3 * Math.sin(Math.PI * i4), s3 = i4, K(f2, "opacity", "0");
            }
            K(
              m2,
              "transform",
              `translate(${e4.toFixed(2)} ${t4.toFixed(2)}) scale(${r3.toFixed(3)})`
            ), K(m2, "opacity", o4.toFixed(3)), K(i3.rawDot[u4], "opacity", (1 - s3).toFixed(3)), K(i3.rawDone[u4], "opacity", s3.toFixed(3));
            return;
          }
          K(m2, "opacity", "0"), K(f2, "opacity", "0");
          let A2 = (b2 - x4 - 0.55) / p3, N3 = Math.floor(a3.outCurves.length / 2), C3 = F(M2, s2[N3] ?? 1) ? N3 : a3.outCurves.findIndex((e4, t4) => F(M2, s2[t4] ?? 1));
          a3.outCurves.forEach((e4, t4) => {
            let a4 = i3.out[u4]?.[t4], r3 = i3.outTrail[u4]?.[t4];
            if (!F(M2, s2[t4] ?? 1)) {
              K(a4, "opacity", "0"), K(r3, "opacity", "0");
              return;
            }
            let o4 = v(A2) * e4.len, { x: l4, y: n4 } = $(e4, o4), c4 = g((A2 - 0.9) / 0.1, 0, 1);
            K(
              a4,
              "transform",
              `translate(${l4.toFixed(2)} ${n4.toFixed(2)}) scale(${(1 - 0.6 * c4).toFixed(3)})`
            ), K(
              a4,
              "opacity",
              ((1 - c4) * (t4 === C3 ? 1 : v(g(o4 / (1.15 * e4.edge), 0, 1)))).toFixed(3)
            );
            let d4 = Math.min(42, Math.max(0, o4 - e4.edge));
            K(
              r3,
              "stroke-dasharray",
              `${(d4 / e4.len * 1e3).toFixed(2)} 2000`
            ), K(
              r3,
              "stroke-dashoffset",
              `${(-(1e3 * ((o4 - d4) / e4.len))).toFixed(2)}`
            ), K(r3, "opacity", g((1 - A2) / 0.18, 0, 1).toFixed(3));
          });
        });
        let u3 = c3 >= 0 && c3 < 0.8 ? c3 / 0.8 : -1;
        u3 >= 0 ? (K(
          i3.pulse,
          "transform",
          `translate(${a3.c.x} ${a3.c.y}) scale(${(1 + 0.16 * v(Math.min(1, 1.3 * u3))).toFixed(4)})`
        ), K(i3.pulse, "opacity", (0.5 * (1 - u3) ** 2).toFixed(3))) : K(i3.pulse, "opacity", "0"), B.current.coreHit = u3 >= 0 ? (1 - u3) ** 2 : 0, K(i3.core, "--hit", B.current.coreHit.toFixed(3)), i3.srcChip.forEach((e4, t4) => K(e4, "--hit", (l3[t4] ?? 0).toFixed(3))), i3.dstChip.forEach((e4, t4) => K(e4, "--hit", (n3[t4] ?? 0).toFixed(3))), i3.srcPort.forEach(
          (e4, t4) => K(e4, "fill-opacity", (l3[t4] ?? 0).toFixed(3))
        ), i3.dstPort.forEach(
          (e4, t4) => K(e4, "fill-opacity", (n3[t4] ?? 0).toFixed(3))
        ), K(
          i3.ring,
          "transform",
          `translate(${a3.c.x} ${a3.c.y}) rotate(${(t3 ? 0 : B.current.spin % 360).toFixed(2)})`
        );
        let x3 = o2 + (t3 ? 0 : d3);
        i3.count && x3 !== B.current.lastCount && (B.current.lastCount = x3, i3.count.textContent = b(x3));
      },
      [K]
    ), G = (0, s.useCallback)(() => {
      let e3 = B.current;
      if (e3.running || !e3.visible || I.current.reduced) return;
      e3.running = true;
      let t3 = performance.now(), a3 = (r2) => {
        if (!e3.visible || I.current.reduced) {
          e3.running = false;
          return;
        }
        let s2 = g((r2 - t3) / 1e3, 0, 0.05);
        t3 = r2;
        let { target: o2 } = I.current;
        if (Number.isNaN(e3.rate) && (e3.rate = o2), e3.rateV += (40 * (o2 - e3.rate) - 2 * Math.sqrt(40) * e3.rateV) * s2, e3.rate += e3.rateV * s2, 1e-4 > Math.abs(o2 - e3.rate) && 1e-4 > Math.abs(e3.rateV) && (e3.rate = o2, e3.rateV = 0), e3.t += s2 * e3.rate, e3.spin += s2 * e3.rate * (14 + 60 * e3.coreHit), U(e3.t, false), 0 === e3.rate && 0 === o2 || !e3.visible || I.current.reduced) {
          e3.running = false;
          return;
        }
        e3.frame = requestAnimationFrame(a3);
      };
      e3.frame = requestAnimationFrame(a3);
    }, [U]);
    (0, s.useLayoutEffect)(() => {
      let e3 = N2.current;
      if (!e3) return;
      let t3 = () => E2(Math.floor(e3.clientWidth));
      t3();
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, s.useLayoutEffect)(() => {
      B.current.cache = /* @__PURE__ */ new Map(), B.current.lastCount = -1, U(B.current.t, p2), p2 || G();
    }, [O, T, W, p2, J, U, G]), (0, s.useEffect)(() => {
      let e3 = N2.current, t3 = B.current;
      if (!e3) return;
      let a3 = new IntersectionObserver(([e4]) => {
        t3.visible = e4.isIntersecting && !document.hidden, t3.visible ? G() : (cancelAnimationFrame(t3.frame), t3.running = false);
      }), r2 = () => {
        t3.visible = !document.hidden, t3.visible ? G() : (cancelAnimationFrame(t3.frame), t3.running = false);
      };
      return a3.observe(e3), document.addEventListener("visibilitychange", r2), () => {
        a3.disconnect(), document.removeEventListener("visibilitychange", r2), cancelAnimationFrame(t3.frame), t3.running = false;
      };
    }, [G]);
    let X = e2.map(_), Y = t2.map(_), Z = D2?.startsWith("s:") ? X.indexOf(D2.slice(2)) : -1, Q = D2?.startsWith("d:") ? Y.indexOf(D2.slice(2)) : -1, ee = "core" === D2, et = (e3) => {
      let t3 = e3.map((e4) => e4.label.toLowerCase());
      return t3.length > 1 ? `${t3.slice(0, -1).join(", ")} and ${t3[t3.length - 1]}` : t3[0] ?? "";
    }, ea = c2 ?? `Data flow. Records from ${et(e2)} stream into ${S2.toLowerCase()}, which turns each raw record into a clean one and fans it out to ${et(t2)}.`, er = (e3) => ({
      onPointerEnter: (t3) => {
        "mouse" === t3.pointerType && L2(e3);
      },
      onPointerLeave: () => L2((t3) => t3 === e3 ? null : t3)
    }), es = (e3, t3, a3, s2) => {
      let o2 = `${"src" === a3 ? "s" : "d"}:${_(e3)}`, i3 = D2 === o2;
      return (0, r.jsxs)(
        "div",
        {
          ref: (e4) => {
            ("src" === a3 ? q.current.srcChip : q.current.dstChip)[s2] = e4;
          },
          className: y().chip,
          "data-side": a3,
          "data-on": i3 || void 0,
          "data-dim": "src" === a3 && Z >= 0 && !i3 || "dst" === a3 && Q >= 0 && !i3 || void 0,
          style: { left: t3.x, top: t3.y, width: t3.w, height: t3.h },
          ...er(o2),
          children: [
            (0, r.jsx)(k, { node: e3 }),
            (0, r.jsxs)("span", {
              className: y().text,
              children: [
                (0, r.jsx)("span", {
                  className: y().label,
                  children: e3.label
                }),
                e3.meta && (0, r.jsx)("span", {
                  className: y().meta,
                  children: e3.meta
                })
              ]
            }),
            e3.detail && (0, r.jsx)("span", {
              className: y().tag,
              "aria-hidden": "true",
              children: e3.detail
            })
          ]
        },
        o2
      );
    }, eo = { ...u2, ...n2 ? { "--flow-accent": n2 } : null };
    return (0, r.jsxs)("figure", {
      className: [y().root, h2].filter(Boolean).join(" "),
      style: eo,
      "data-ready": !!O || void 0,
      "data-layout": O?.stacked ? "stack" : "row",
      children: [
        (0, r.jsx)("div", {
          ref: N2,
          className: y().stage,
          role: "img",
          "aria-label": ea,
          "data-focus": !!D2 || void 0,
          style: O ? { height: O.h } : void 0,
          children: O && (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("svg", {
                className: y().layer,
                viewBox: `0 0 ${O.w} ${O.h}`,
                width: O.w,
                height: O.h,
                "aria-hidden": "true",
                children: [
                  O.inCurves.map(
                    (e3, t3) => (0, r.jsx)(
                      "path",
                      {
                        className: y().path,
                        d: e3.d,
                        "data-on": t3 === Z || ee || void 0
                      },
                      `in-${t3}`
                    )
                  ),
                  O.outCurves.map(
                    (e3, t3) => (0, r.jsx)(
                      "path",
                      {
                        className: y().path,
                        d: e3.d,
                        "data-on": t3 === Q || ee || void 0
                      },
                      `out-${t3}`
                    )
                  )
                ]
              }),
              e2.map((e3, t3) => O.sources[t3] && es(e3, O.sources[t3], "src", t3)),
              t2.map((e3, t3) => O.dests[t3] && es(e3, O.dests[t3], "dst", t3)),
              (0, r.jsx)("div", {
                ref: (e3) => {
                  q.current.core = e3;
                },
                className: y().core,
                "data-on": ee || void 0,
                style: {
                  left: O.c.x - O.core / 2,
                  top: O.c.y - O.core / 2,
                  width: O.core,
                  height: O.core
                },
                ...er("core"),
                children: (0, r.jsx)("span", {
                  className: y().tag,
                  "data-place": "above",
                  "aria-hidden": "true",
                  children: R2
                })
              }),
              (0, r.jsxs)("div", {
                className: y().caption,
                "data-place": O.stacked ? "side" : "below",
                style: O.stacked ? {
                  left: O.c.x + O.core / 2 + 14,
                  top: O.c.y,
                  maxWidth: O.w - (O.c.x + O.core / 2 + 14) - 4
                } : { left: O.c.x, top: O.c.y + O.core / 2 + 12 },
                children: [
                  (0, r.jsx)("span", { className: y().label, children: S2 }),
                  (0, r.jsxs)("span", {
                    className: y().meta,
                    children: [
                      (0, r.jsx)("span", {
                        ref: (e3) => {
                          q.current.count = e3;
                        },
                        className: y().num,
                        children: b(P)
                      }),
                      " ",
                      V
                    ]
                  })
                ]
              }),
              (0, r.jsxs)("svg", {
                className: y().layer,
                viewBox: `0 0 ${O.w} ${O.h}`,
                width: O.w,
                height: O.h,
                "aria-hidden": "true",
                children: [
                  (0, r.jsx)("g", {
                    ref: (e3) => {
                      q.current.ring = e3;
                    },
                    transform: `translate(${O.c.x} ${O.c.y})`,
                    children: (0, r.jsx)("circle", {
                      className: y().ring,
                      r: 0.24 * O.core
                    })
                  }),
                  (0, r.jsx)("rect", {
                    ref: (e3) => {
                      q.current.pulse = e3;
                    },
                    className: y().pulse,
                    x: -O.core / 2,
                    y: -O.core / 2,
                    width: O.core,
                    height: O.core,
                    rx: 0.28 * O.core,
                    transform: `translate(${O.c.x} ${O.c.y})`,
                    opacity: 0
                  }),
                  O.sources.map((e3, t3) => {
                    let a3 = O.stacked ? { x: e3.x + e3.w / 2, y: e3.y + e3.h } : { x: e3.x + e3.w, y: e3.y + e3.h / 2 };
                    return (0, r.jsxs)(
                      "g",
                      {
                        className: y().slot,
                        "data-dim": Z >= 0 && Z !== t3 || void 0,
                        children: [
                          (0, r.jsx)("circle", {
                            className: y().port,
                            cx: a3.x,
                            cy: a3.y,
                            r: 3.5
                          }),
                          (0, r.jsx)("circle", {
                            ref: (e4) => {
                              q.current.srcPort[t3] = e4;
                            },
                            className: y().portHit,
                            cx: a3.x,
                            cy: a3.y,
                            r: 2.25,
                            fillOpacity: 0
                          })
                        ]
                      },
                      `sp-${t3}`
                    );
                  }),
                  O.dests.map((e3, t3) => {
                    let a3 = O.stacked ? { x: e3.x + e3.w / 2, y: e3.y } : { x: e3.x, y: e3.y + e3.h / 2 };
                    return (0, r.jsxs)(
                      "g",
                      {
                        className: y().slot,
                        "data-dim": Q >= 0 && Q !== t3 || void 0,
                        children: [
                          (0, r.jsx)("circle", {
                            className: y().port,
                            cx: a3.x,
                            cy: a3.y,
                            r: 3.5
                          }),
                          (0, r.jsx)("circle", {
                            ref: (e4) => {
                              q.current.dstPort[t3] = e4;
                            },
                            className: y().portHit,
                            cx: a3.x,
                            cy: a3.y,
                            r: 2.25,
                            fillOpacity: 0
                          })
                        ]
                      },
                      `dp-${t3}`
                    );
                  }),
                  T.map(
                    (e3, t3) => (0, r.jsxs)(
                      "g",
                      {
                        className: y().slot,
                        "data-dim": Z >= 0 && e3.src !== Z || void 0,
                        children: [
                          O.inCurves[e3.src] && (0, r.jsx)("path", {
                            ref: (e4) => {
                              q.current.rawTrail[t3] = e4;
                            },
                            className: y().trailRaw,
                            d: O.inCurves[e3.src].d,
                            pathLength: 1e3,
                            opacity: 0
                          }),
                          O.outCurves.map(
                            (e4, a3) => (0, r.jsxs)(
                              "g",
                              {
                                "data-dim": Q >= 0 && a3 !== Q || void 0,
                                className: y().slot,
                                children: [
                                  (0, r.jsx)("path", {
                                    ref: (e5) => {
                                      var _a;
                                      ((_a = q.current.outTrail)[t3] ?? (_a[t3] = []))[a3] = e5;
                                    },
                                    className: y().trailDone,
                                    d: e4.d,
                                    pathLength: 1e3,
                                    opacity: 0
                                  }),
                                  (0, r.jsx)("g", {
                                    ref: (e5) => {
                                      var _a;
                                      ((_a = q.current.out)[t3] ?? (_a[t3] = []))[a3] = e5;
                                    },
                                    opacity: 0,
                                    children: (0, r.jsx)("rect", {
                                      className: y().done,
                                      x: -4.5,
                                      y: -4.5,
                                      width: 9,
                                      height: 9,
                                      rx: 2.5
                                    })
                                  })
                                ]
                              },
                              `o-${a3}`
                            )
                          ),
                          (0, r.jsxs)("g", {
                            ref: (e4) => {
                              q.current.raw[t3] = e4;
                            },
                            opacity: 0,
                            children: [
                              (0, r.jsx)("rect", {
                                ref: (e4) => {
                                  q.current.rawDot[t3] = e4;
                                },
                                className: y().raw,
                                x: -4,
                                y: -4,
                                width: 8,
                                height: 8,
                                rx: 4
                              }),
                              (0, r.jsx)("rect", {
                                ref: (e4) => {
                                  q.current.rawDone[t3] = e4;
                                },
                                className: y().done,
                                x: -4.5,
                                y: -4.5,
                                width: 9,
                                height: 9,
                                rx: 2.5,
                                opacity: 0
                              })
                            ]
                          })
                        ]
                      },
                      `slot-${t3}`
                    )
                  )
                ]
              })
            ]
          })
        }),
        d2 && (0, r.jsx)("figcaption", { className: y().figcaption, children: d2 })
      ]
    });
  }
  var N = a(11975), C = a.n(N);
  let E = (e2) => `block-logos/${e2}-color.svg`, D = [
    {
      id: "app",
      label: "App",
      meta: "Web and iOS",
      detail: "Clicks and sessions as they happen",
      icon: (0, r.jsx)(i.A, {})
    },
    {
      id: "database",
      label: "Database",
      meta: "Supabase",
      detail: "Row changes through change data capture",
      icon: E("supabase")
    },
    {
      id: "events",
      label: "Events",
      meta: "Stripe webhooks",
      detail: "Payments, refunds and disputes",
      icon: E("stripe")
    }
  ], L = [
    {
      id: "warehouse",
      label: "Warehouse",
      meta: "Every record",
      detail: "Stored in full for analysis",
      icon: (0, r.jsx)(h, {})
    },
    {
      id: "dashboard",
      label: "Dashboard",
      meta: "Live metrics",
      detail: "Rolled up into metrics each minute",
      icon: (0, r.jsx)(u.A, {})
    },
    {
      id: "alerts",
      label: "Alerts",
      meta: "Slack",
      detail: "Only unusual records reach #data-alerts",
      icon: E("slack"),
      share: 0.34
    }
  ];
  function S() {
    return (0, r.jsx)("div", {
      className: C().demo,
      "data-canvas": "wide",
      children: (0, r.jsx)(A, { sources: D, destinations: L })
    });
  }
  let R = S;
}

__m(__module,__exports,__require);
});
A.reg(34306, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "database",
    size: 24,
    node: [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
      ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(46395, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "bell-ring",
    size: 24,
    node: [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
      ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi"
        }
      ],
      ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]
    ]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(49960, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "layout-dashboard",
    size: 24,
    node: [
      [
        "rect",
        { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }
      ],
      [
        "rect",
        { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }
      ],
      [
        "rect",
        { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }
      ],
      [
        "rect",
        { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }
      ]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(72974, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "webhook",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
          key: "q3hayz"
        }
      ],
      [
        "path",
        {
          d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
          key: "1go1hn"
        }
      ],
      [
        "path",
        {
          d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
          key: "qlwsc0"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(89154, ".root{--flow-accent:var(--accent);display:grid;width:100%;min-width:0;margin:0;container-type:inline-size;overflow-x:clip;color:var(--foreground);-webkit-tap-highlight-color:transparent}\n.root:not([data-ready]) .stage{aspect-ratio:5/2}\n@container (width < 600px){.root:not([data-ready]) .stage{aspect-ratio:390/484}\n.root[data-ready] .stage>*{opacity:1}\n.root[data-layout=stack] .chip{flex-direction:column;justify-content:center;gap:6px;padding:0 var(--space-2);border-radius:14px}\n.root[data-layout=stack] .text{justify-items:center}\n.root[data-layout=stack] .chip .meta{display:none}\n.root[data-layout=stack] .label{max-width:100%;font-size:var(--text-xs)}\n.stage{position:relative;width:100%;min-width:0}\n.stage>*{opacity:0;transition:opacity var(--duration-considered) var(--ease-standard)}\n.stage[data-focus] .path:not([data-on]){opacity:.4}\n@media (prefers-reduced-motion:reduce){.chip,.path,.slot,.stage>*,.tag{transition-duration:var(--duration-instant)}\n.layer{position:absolute;inset:0;overflow:visible;pointer-events:none}\n.layer+.layer,.layer:last-child{z-index:2}\n.layer:first-child{z-index:0}\n.path{fill:none;stroke:var(--border-strong);stroke-width:1.25;transition:stroke var(--duration-standard) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard)}\n[data-theme=dark] .path{stroke:color-mix(in oklab,var(--text-muted) 40%,var(--border-strong))}\n.path[data-on]{stroke:color-mix(in oklab,var(--flow-accent) 62%,var(--border-strong))}\n.slot{transition:opacity var(--duration-standard) var(--ease-standard)}\n.slot[data-dim]{opacity:.22}\n.raw{fill:var(--surface-raised);stroke:var(--text-secondary);stroke-width:1.5}\n.done{fill:var(--flow-accent)}\n.trailDone,.trailRaw{fill:none;stroke-width:2;stroke-linecap:round}\n.trailRaw{stroke:var(--text-muted);stroke-opacity:.45}\n.trailDone{stroke:var(--flow-accent);stroke-opacity:.5}\n.port{fill:var(--surface-raised);stroke:var(--border-strong);stroke-width:1.25}\n.portHit{fill:var(--flow-accent)}\n.ring{fill:none;stroke:var(--border-strong);stroke-width:1.25;stroke-dasharray:1.5 5;stroke-linecap:round}\n.pulse{fill:none;stroke:var(--flow-accent);stroke-width:1.25;vector-effect:non-scaling-stroke}\n.chip{position:absolute;z-index:1;display:flex;min-width:0;align-items:center;gap:var(--space-3);padding:0 var(--space-4);border:1px solid color-mix(in oklab,var(--flow-accent) calc(var(--hit, 0) * 40%),var(--border));border-radius:16px;background:var(--surface-raised);box-sizing:border-box;cursor:default;transition:opacity var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard)}\n.chip[data-on]{border-color:color-mix(in oklab,var(--flow-accent) 55%,var(--border-strong))}\n.chip[data-dim]{opacity:.5}\n.chip[data-side=src] .tag{left:0;--tx:0%;transform-origin:0 0}\n.chip[data-side=dst] .tag{left:auto;right:0;--tx:0%;transform-origin:100% 0}\n.chip[data-on] .tag,.core[data-on] .tag{opacity:1;transform:translate(var(--tx),8px);transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.chip[data-on],.core[data-on]{z-index:3}\n.mark{display:grid;flex:none;place-items:center;width:16px;height:16px;color:var(--text-secondary);object-fit:contain}\n.mark>svg{width:16px;height:16px;stroke-width:1.75}\n.text{display:grid;min-width:0}\n.label{font-size:var(--text-sm);font-weight:500}\n.label,.meta{overflow:hidden;letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.meta{color:var(--text-muted);font-size:var(--text-xs)}\n.caption[data-place=side] .meta{white-space:normal;text-overflow:clip}\n.core{position:absolute;z-index:1;border:1px solid color-mix(in oklab,var(--flow-accent) calc(var(--hit, 0) * 45%),var(--border));border-radius:28%;background:var(--surface-raised);box-sizing:border-box;cursor:default}\n.core[data-on]{border-color:color-mix(in oklab,var(--flow-accent) 55%,var(--border-strong))}\n.core[data-on] .tag[data-place=above]{transform:translate(var(--tx),-10px)}\n.caption{position:absolute;z-index:1;display:grid;min-width:0;pointer-events:none}\n.caption[data-place=below]{justify-items:center;text-align:center;transform:translateX(-50%)}\n.caption[data-place=side]{transform:translateY(-50%)}\n.num{color:var(--text-secondary);font-variant-numeric:tabular-nums}\n.tag{position:absolute;top:100%;left:50%;z-index:3;max-width:16rem;padding:3px var(--space-2);border-radius:var(--radius-pill);color:var(--background);background:var(--foreground);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap;opacity:0;pointer-events:none;--tx:-50%;transform:translate(var(--tx),4px) scale(.96);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.tag[data-place=above]{top:auto;bottom:100%;transform:translate(var(--tx),-4px) scale(.96)}\n.figcaption{margin-top:var(--space-4);color:var(--text-secondary);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-align:center;text-wrap:balance}", {"root":"root","stage":"stage","chip":"chip","text":"text","meta":"meta","label":"label","path":"path","slot":"slot","tag":"tag","layer":"layer","raw":"raw","done":"done","trailDone":"trailDone","trailRaw":"trailRaw","port":"port","portHit":"portHit","ring":"ring","pulse":"pulse","core":"core","mark":"mark","caption":"caption","num":"num","figcaption":"figcaption"});
A.reg(89383, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "app-window",
    size: 24,
    node: [
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }
      ],
      ["path", { d: "M10 4v4", key: "pp8u80" }],
      ["path", { d: "M2 8h20", key: "d11cs7" }],
      ["path", { d: "M6 4v4", key: "1svtjw" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("data-flow", [11975,89154]);
A.item("data-flow", {entry:30116, export:"DataFlowDemo", kind:"component", tier:"pro", unresolved:[]});
})();