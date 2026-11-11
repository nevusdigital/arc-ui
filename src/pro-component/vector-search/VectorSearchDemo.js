function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { VectorSearchDemo: () => L, default: () => q });
  var r = a(95155), s = a(12115), i = a(18310), l = a(36483), o = a(79267), c = a(36619), n = a(42162), d = a.n(n);
  let h = [{ name: "Billing" }, { name: "Access" }, { name: "Deploys" }], p = [
    { title: "Refund a charge", topic: 0 },
    { title: "Update a card on file", topic: 0 },
    { title: "Download invoices", topic: 0 },
    { title: "Change your plan", topic: 0 },
    { title: "How proration works", topic: 0 },
    { title: "Retry a failed payment", topic: 0 },
    { title: "Rotate an API key", topic: 1 },
    { title: "Scope API tokens", topic: 1 },
    { title: "Set up SSO with Okta", topic: 1 },
    { title: "Revoke a session", topic: 1 },
    { title: "Require two-factor", topic: 1 },
    { title: "Export audit logs", topic: 1 },
    { title: "Roll back a deploy", topic: 2 },
    { title: "Preview environments", topic: 2 },
    { title: "Environment variables", topic: 2 },
    { title: "Add a custom domain", topic: 2 },
    { title: "Clear the build cache", topic: 2 },
    { title: "Deploy hooks", topic: 2 }
  ], u = [
    "var(--series-2)",
    "var(--series-3)",
    "var(--series-4)",
    "color-mix(in oklab, var(--series-2) 50%, var(--series-4))"
  ], y = {
    2: [
      { x: -0.45, y: 0.45 },
      { x: 0.45, y: -0.45 }
    ],
    3: [
      { x: -0.3, y: 0.5 },
      { x: 0.5, y: -0.3 },
      { x: -0.5, y: -0.5 }
    ],
    4: [
      { x: -0.48, y: 0.48 },
      { x: 0.48, y: -0.48 },
      { x: -0.48, y: -0.48 },
      { x: 0.48, y: 0.48 }
    ]
  }, x = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), m = (e2) => 0.5 - Math.cos(Math.PI * x(e2)) / 2, _ = (e2) => 1 - (1 - x(e2)) ** 3, f = (e2) => x(e2) ** 2, g = (e2) => e2.toFixed(2), v = () => () => {
  };
  function b(e2, t2, a2 = 0.72) {
    return Array.from(
      { length: 16 },
      (r2, s2) => x(
        a2 * Math.sin((t2 + 1) * 1.73 * (s2 + 1) + 0.9 * t2) + (1 - a2) * (((function(e3) {
          let t3 = 2166136261;
          for (let a3 = 0; a3 < e3.length; a3++)
            t3 ^= e3.charCodeAt(a3), t3 = Math.imul(t3, 16777619);
          return t3 >>> 0;
        })(`${e2}:${s2}`) % 1e3 / 1e3 - 0.5) * 2),
        -1,
        1
      )
    );
  }
  let k = (e2, t2) => Math.hypot(e2.x - t2.x, e2.y - t2.y);
  function N({ source: e2, className: t2 }) {
    let a2 = e2?.icon;
    if ("string" == typeof a2)
      return /^(\/|\.|https?:|data:|blob:)/.test(a2) ? (0, r.jsx)("img", { className: t2, src: a2, alt: "", draggable: false }) : (0, r.jsx)("svg", {
        className: t2,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: (0, r.jsx)("path", {
          d: a2,
          fill: e2?.color ?? "currentColor"
        })
      });
    return a2 ? (0, r.jsx)("span", {
      className: t2,
      style: e2?.color ? { color: e2.color } : void 0,
      "aria-hidden": "true",
      children: a2
    }) : (0, r.jsx)(l.A, {
      className: t2,
      size: 14,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    });
  }
  function j({
    documents: e2 = p,
    topics: t2 = h,
    query: a2 = "How do I rotate a leaked API key?",
    queryAt: l2,
    k: n2 = 3,
    dimensions: $2 = 1536,
    labels: M2,
    speed: w2 = 1,
    paused: A2 = false,
    controls: E2 = true,
    accent: L2,
    label: q2,
    caption: S,
    className: F,
    style: R
  }) {
    let C, H = (C = (0, s.useSyncExternalStore)(
      v,
      () => true,
      () => false
    ), !!(0, i.I)() && C), T = (0, s.useRef)(null), [D, I] = (0, s.useState)(0), [P, V] = (0, s.useState)(null), [z, B] = (0, s.useState)(true), Q = (0, s.useMemo)(() => t2.length >= 2 ? t2.slice(0, 4) : h, [t2]), G = (0, s.useMemo)(() => {
      let t3 = e2.filter((e3) => e3.topic >= 0 && e3.topic < Q.length).slice(0, 24);
      return t3.length >= 6 ? t3 : p;
    }, [e2, Q.length]), J = {
      embed: M2?.embed ?? "Embed",
      index: M2?.index ?? "Index",
      query: M2?.query ?? "Query",
      rank: M2?.rank ?? "Rank",
      embedded: M2?.embedded ?? "Embedded",
      links: M2?.links ?? "Links",
      hops: M2?.hops ?? "Hops",
      embedding: M2?.embedding ?? "Embedding",
      queryHeading: M2?.queryHeading ?? "Query",
      results: M2?.results ?? "Nearest documents",
      queryChip: M2?.queryChip ?? "Query"
    }, K = (0, s.useMemo)(() => Q.map((e3) => e3.name), [Q]), Y = l2?.x, O = l2?.y, W = (0, s.useMemo)(
      () => (function(e3, t3, a3, r2, s2) {
        let i2, l3 = e3.length, o2 = Array(t3).fill(0), c2 = Array(t3).fill(0);
        e3.forEach((e4) => {
          c2[e4.topic]++;
        });
        let n3 = y[t3] ?? y[3], d2 = t3 >= 4 ? 0.9 : 1.1, h2 = e3.map((e4) => {
          let t4 = o2[e4.topic]++;
          if (void 0 !== e4.x && void 0 !== e4.y)
            return { x: x(e4.x, -0.92, 0.92), y: x(e4.y, -0.92, 0.92) };
          let a4 = n3[e4.topic] ?? n3[0], r3 = 2.39996 * t4 + 1.1 * e4.topic + 0.6, s3 = d2 * (0 === t4 ? 0.08 : 0.13 + 0.21 * Math.sqrt(t4 / Math.max(1, c2[e4.topic] - 1)));
          return {
            x: x(a4.x + s3 * Math.cos(r3), -0.9, 0.9),
            y: x(a4.y + s3 * Math.sin(r3), -0.9, 0.9)
          };
        }), p2 = +(t3 > 1), u2 = e3.findIndex((e4) => e4.topic === p2), m2 = u2 >= 0 ? h2[u2] : { x: 0, y: 0 }, _2 = (i2 = h2.filter((t4, a4) => e3[a4].topic === p2)).length ? {
          x: i2.reduce((e4, t4) => e4 + t4.x, 0) / i2.length,
          y: i2.reduce((e4, t4) => e4 + t4.y, 0) / i2.length
        } : n3[p2] ?? { x: 0, y: 0 }, f2 = r2 ? { x: x(r2.x, -0.92, 0.92), y: x(r2.y, -0.92, 0.92) } : {
          x: m2.x + (_2.x - m2.x) * 0.25 - 0.05,
          y: m2.y + (_2.y - m2.y) * 0.25 - 0.06
        };
        if (!r2)
          for (let e4 = 0; e4 < 6; e4++) {
            let e5 = -1, t4 = 1 / 0;
            if (h2.forEach((a5, r4) => {
              let s3 = k(a5, f2);
              s3 < t4 && (t4 = s3, e5 = r4);
            }), e5 < 0 || t4 >= 0.15)
              break;
            let a4 = t4 < 1e-3 ? 0.7 : (f2.x - h2[e5].x) / t4, r3 = t4 < 1e-3 ? -0.7 : (f2.y - h2[e5].y) / t4;
            f2.x = x(h2[e5].x + 0.15 * a4, -0.92, 0.92), f2.y = x(h2[e5].y + 0.15 * r3, -0.92, 0.92);
          }
        let g2 = h2.map((e4) => k(e4, f2)), v2 = Math.round(x(s2, 1, Math.min(5, l3))), N2 = g2.map((e4, t4) => ({ v: e4, i: t4 })).sort((e4, t4) => e4.v - t4.v), j2 = N2.slice(0, v2).map((e4) => e4.i), $3 = g2.map((e4) => x(0.99 - 0.6 * e4, 0.05, 0.99)), M3 = /* @__PURE__ */ new Set(), w3 = [], A3 = (e4, t4) => {
          let a4 = e4 < t4 ? `${e4}-${t4}` : `${t4}-${e4}`;
          e4 === t4 || M3.has(a4) || (M3.add(a4), w3.push(e4 < t4 ? [e4, t4] : [t4, e4]));
        };
        h2.forEach((t4, a4) => {
          h2.map((e4, a5) => ({ j: a5, v: k(t4, e4) })).filter((t5) => t5.j !== a4 && e3[t5.j].topic === e3[a4].topic).sort((e4, t5) => e4.v - t5.v).slice(0, 2).forEach((e4) => A3(a4, e4.j));
        });
        let E3 = w3.length;
        for (let a4 = 0; a4 < t3; a4++)
          for (let r3 = a4 + 1; r3 < t3; r3++) {
            let t4 = null, s3 = 1 / 0;
            h2.forEach((i3, l4) => {
              e3[l4].topic === a4 && h2.forEach((a5, o3) => {
                if (e3[o3].topic !== r3) return;
                let c3 = k(i3, a5);
                c3 < s3 && (s3 = c3, t4 = [l4, o3]);
              });
            }), t4 && A3(t4[0], t4[1]);
          }
        let L3 = h2.map(() => []);
        w3.forEach(([e4, t4], a4) => {
          L3[e4].push({ to: t4, edge: a4 }), L3[t4].push({ to: e4, edge: a4 });
        });
        let q3 = N2[N2.length - 1].i, S2 = j2[0], F2 = h2.map(() => 1 / 0), R2 = h2.map(() => -1), C2 = h2.map(() => -1), H2 = h2.map(() => false);
        for (F2[q3] = 0; ; ) {
          let e4 = -1;
          if (F2.forEach((t4, a4) => {
            !H2[a4] && t4 < 1 / 0 && (e4 < 0 || t4 < F2[e4]) && (e4 = a4);
          }), e4 < 0 || e4 === S2)
            break;
          H2[e4] = true, L3[e4].forEach(({ to: t4, edge: a4 }) => {
            let r3 = F2[e4] + k(h2[e4], h2[t4]);
            r3 < F2[t4] && (F2[t4] = r3, R2[t4] = e4, C2[t4] = a4);
          });
        }
        let T2 = [];
        for (let e4 = S2; e4 >= 0 && (T2.unshift(e4), e4 !== q3); e4 = R2[e4]) ;
        T2[0] !== q3 && T2.splice(0, T2.length, S2);
        let D2 = T2.length - 1, I2 = h2.map((e4, t4) => ({ i: t4, s: e4.x + 0.6 * e4.y })).sort((e4, t4) => e4.s - t4.s).map((e4) => e4.i), P2 = Math.min(0.17, 2.9 / l3), V2 = Array(l3);
        I2.forEach((e4, t4) => {
          V2[e4] = 0.3 + t4 * P2;
        });
        let z2 = 0.3 + (l3 - 1) * P2 + 0.75 + 0.45, B2 = w3.map((t4, a4) => ({
          i: a4,
          intra: a4 < E3,
          t: e3[t4[0]].topic,
          v: k(h2[t4[0]], h2[t4[1]])
        })).sort(
          (e4, t4) => Number(t4.intra) - Number(e4.intra) || e4.t - t4.t || e4.v - t4.v
        ).map((e4) => e4.i), Q2 = Math.min(0.06, 1.5 / w3.length), G2 = Array(w3.length);
        B2.forEach((e4, t4) => {
          G2[e4] = z2 + 0.35 + t4 * Q2;
        });
        let J2 = z2 + 0.35 + (w3.length - 1) * Q2 + 0.45 + 0.6, K2 = J2 + 0.25, Y2 = K2 + 0.03 * a3.length, O2 = Y2 + 0.15, W2 = O2 + 0.25, U2 = W2 + 0.9, Z2 = U2 + 0.5, X2 = Z2 + 0.3, ee2 = T2.slice(1).map(
          (e4, t4) => x(0.294 + 0.55 * k(h2[T2[t4]], h2[e4]), 0.336, 0.924)
        ), et2 = ee2.map(
          (e4, t4) => X2 + ee2.slice(0, t4).reduce((e5, t5) => e5 + t5, 0)
        ), ea2 = X2 + ee2.reduce((e4, t4) => e4 + t4, 0), er2 = ea2 + 0.15, es2 = g2[j2[v2 - 1]] + 0.07, ei2 = h2.map(
          (e4, t4) => j2.includes(t4) ? er2 + 1.1 * (Math.acos(1 - 2 * x(g2[t4] / es2)) / Math.PI) : 1 / 0
        ), el2 = er2 + 1.1 + 0.35 + 3.2, eo2 = el2 + 0.9 + 0.3, ec2 = T2.slice(1).map((e4) => C2[e4]);
        return {
          n: l3,
          pos: h2,
          q: f2,
          d: g2,
          k: v2,
          nearest: j2,
          score: $3,
          edges: w3,
          path: T2,
          pathEdges: ec2,
          hops: D2,
          hopDur: ee2,
          hopStart: et2,
          entry: q3,
          drop: V2,
          S1: z2,
          hullAt: z2 + 0.1,
          edgeAt: G2,
          S2: J2,
          typeAt: K2,
          typeEnd: Y2,
          barsAt: O2,
          pinAt: W2,
          pinLand: U2,
          S3: Z2,
          hopAt: X2,
          hopEnd: ea2,
          ringAt: er2,
          rMax: es2,
          lit: ei2,
          R0: el2,
          T: eo2,
          vectors: e3.map((e4) => b(e4.title, e4.topic)),
          queryVector: b(a3, p2, 0.62),
          stages: [
            { start: 0, end: z2, still: z2 - 0.3 },
            { start: z2, end: J2, still: J2 - 0.3 },
            { start: J2, end: Z2, still: Z2 - 0.2 },
            { start: Z2, end: eo2, still: er2 + 1.1 + 0.35 + 1.2 }
          ]
        };
      })(
        G,
        Q.length,
        a2,
        void 0 !== Y && void 0 !== O ? { x: Y, y: O } : void 0,
        n2
      ),
      [G, Q.length, a2, Y, O, n2]
    ), U = (0, s.useMemo)(
      () => D > 0 ? (function(e3, t3, a3, r2, s2) {
        let i2 = e3 < 560, l3 = i2 ? 0.6 : 0.5, o2 = Math.round(x((e3 - 20) / 4, 68, 140)), c2 = Math.round(x(0.46 * o2, 40, 64)), n3 = Math.round(x(0.3 * o2, 26, 40)), d2 = e3 / 2, h2 = n3 + 2 * o2 * l3, p2 = Math.round(h2 + 2 * o2 * l3 + 10 + 14), u2 = (e4) => ({
          x: d2 + (e4.x - e4.y) * o2,
          y: h2 + (e4.x + e4.y) * o2 * l3
        }), y2 = [
          u2({ x: -1, y: -1 }),
          u2({ x: 1, y: -1 }),
          u2({ x: 1, y: 1 }),
          u2({ x: -1, y: 1 })
        ], m2 = `M${y2.map((e4) => `${g(e4.x)} ${g(e4.y)}`).join(" L")} Z`, [_2, f2, v2, b2] = y2, N2 = `M${g(b2.x)} ${g(b2.y)} L${g(v2.x)} ${g(v2.y)} L${g(v2.x)} ${g(v2.y + 10)} L${g(b2.x)} ${g(b2.y + 10)} Z`, j2 = `M${g(v2.x)} ${g(v2.y)} L${g(f2.x)} ${g(f2.y)} L${g(f2.x)} ${g(f2.y + 10)} L${g(v2.x)} ${g(v2.y + 10)} Z`, $3 = "";
        for (let e4 = 1; e4 < 8; e4++) {
          let t4 = -1 + 0.25 * e4, a4 = u2({ x: t4, y: -1 }), r3 = u2({ x: t4, y: 1 }), s3 = u2({ x: -1, y: t4 }), i3 = u2({ x: 1, y: t4 });
          $3 += `M${g(a4.x)} ${g(a4.y)} L${g(r3.x)} ${g(r3.y)} M${g(s3.x)} ${g(s3.y)} L${g(i3.x)} ${g(i3.y)} `;
        }
        let M3 = (e4) => e4 * o2 * Math.SQRT2, w3 = t3.pos.map(u2), A3 = u2(t3.q), E3 = Array.from({ length: a3 }, (e4, a4) => {
          let s3 = t3.pos.filter((e5, t4) => r2[t4].topic === a4);
          if (!s3.length) return null;
          let i3 = {
            x: s3.reduce((e5, t4) => e5 + t4.x, 0) / s3.length,
            y: s3.reduce((e5, t4) => e5 + t4.y, 0) / s3.length
          }, c3 = Math.max(...s3.map((e5) => k(e5, i3))) + 0.09, n4 = u2(i3);
          return {
            x: n4.x,
            y: n4.y,
            rx: M3(c3),
            ry: M3(c3) * l3,
            below: n4.y > h2 - o2 * l3 * 0.5
          };
        }), L3 = i2 ? 3.4 : 4.2, q3 = (e4, t4, a4) => Math.hypot(
          Math.max(Math.abs(t4.x - e4.x) - 19, 0),
          Math.max(Math.abs(t4.y - e4.y) - 10, 0)
        ) < a4, S2 = (e4, t4, a4, r3) => {
          let s3 = Math.max(
            2,
            Math.ceil(Math.hypot(a4.x - t4.x, a4.y - t4.y) / 4)
          );
          for (let i3 = 0; i3 <= s3; i3++) {
            let l4 = t4.x + (a4.x - t4.x) * i3 / s3, o3 = t4.y + (a4.y - t4.y) * i3 / s3;
            if (Math.abs(l4 - e4.x) < 19 + r3 && Math.abs(o3 - e4.y) < 10 + r3)
              return true;
          }
          return false;
        }, F2 = t3.path.slice(1).map((e4, a4) => [w3[t3.path[a4]], w3[e4]]), R2 = t3.nearest.map((e4) => [A3, w3[e4]]), C2 = t3.edges.map(([e4, t4]) => [w3[e4], w3[t4]]), H2 = Array.from({ length: a3 }, (e4, a4) => {
          let i3 = t3.pos.filter((e5, t4) => r2[t4].topic === a4);
          if (!i3.length) return null;
          let c3 = {
            x: i3.reduce((e5, t4) => e5 + t4.x, 0) / i3.length,
            y: i3.reduce((e5, t4) => e5 + t4.y, 0) / i3.length
          }, n4 = Math.max(...i3.map((e5) => k(e5, c3))) + 0.09, d3 = u2(c3), p3 = d3.y > h2 - o2 * l3 * 0.5, y3 = M3(n4) * l3, x2 = (s2[a4]?.length ?? 6) * 3.4 + 16;
          return {
            x: d3.x,
            y: p3 ? d3.y + y3 + 14 : d3.y - y3 - 14,
            half: x2
          };
        }), T2 = [], D2 = t3.nearest.map((a4) => {
          let r3 = w3[a4], s3 = r3.x - A3.x, i3 = r3.y - A3.y, l4 = Math.hypot(s3, i3);
          l4 < 1 ? (s3 = 0, i3 = -1) : (s3 /= l4, i3 /= l4);
          let o3 = { x: r3.x, y: r3.y - L3 - 6 - 10, dx: 0, dy: -1 }, c3 = 1 / 0;
          for (let l5 = 0; l5 < 36; l5++) {
            let n4 = l5 % 12 / 12 * Math.PI * 2, d3 = Math.floor(l5 / 12), h3 = Math.cos(n4), u3 = Math.sin(n4), y3 = L3 + 5 + 8 * d3 + 19 * Math.abs(h3) + 10 * Math.abs(u3), x2 = { x: r3.x + h3 * y3, y: r3.y + u3 * y3 }, m3 = -1.5 * (h3 * s3 + u3 * i3) + 0.4 * u3 + 6 * d3;
            (x2.x - 19 < 2 || x2.x + 19 > e3 - 2 || x2.y - 10 < 2 || x2.y + 10 > p2 - 2) && (m3 += 60), q3(x2, A3, L3 + 6) && (m3 += 40), w3.forEach((e4, t4) => {
              t4 !== a4 && q3(x2, e4, L3 + 1) && (m3 += 40);
            });
            let _3 = k(x2, r3);
            w3.forEach((e4, r4) => {
              r4 !== a4 && k(x2, e4) < _3 && (m3 += t3.nearest.includes(r4) ? 30 : 14);
            }), T2.forEach((e4) => {
              41 > Math.abs(e4.x - x2.x) && 23 > Math.abs(e4.y - x2.y) && (m3 += 50);
            }), H2.forEach((e4) => {
              e4 && Math.abs(e4.x - x2.x) < 19 + e4.half + 3 && 24 > Math.abs(e4.y - x2.y) && (m3 += 90);
            }), F2.forEach(([e4, t4]) => {
              S2(x2, e4, t4, 2) && (m3 += 8);
            }), R2.forEach(([e4, t4]) => {
              S2(x2, e4, t4, 2) && (m3 += 8);
            }), C2.forEach(([e4, t4]) => {
              S2(x2, e4, t4, 0) && (m3 += 1.5);
            }), m3 < c3 && (c3 = m3, o3 = { x: x2.x, y: x2.y, dx: h3, dy: u3 });
          }
          return T2.push(o3), o3;
        });
        return {
          w: e3,
          h: p2,
          narrow: i2,
          k: l3,
          A: o2,
          scores: D2,
          lift: c2,
          cx: d2,
          cy: h2,
          face: m2,
          sideL: N2,
          sideR: j2,
          grid: $3.trim(),
          top: _2,
          points: w3,
          q: A3,
          hulls: E3,
          rx: M3,
          dot: i2 ? 3.4 : 4.2,
          dropH: Math.round(x(0.26 * o2, 22, 36)),
          glyph: i2 ? 0.85 : 1
        };
      })(D, W, Q.length, G, K) : null,
      [D, W, Q.length, G, K]
    ), Z = (e3) => Q[e3]?.name ?? "", X = G[W.nearest[0]], ee = [
      "Each document becomes a vector, a point placed by meaning",
      "Close points share a topic, and the index links them",
      "The query is embedded into the same space",
      `The ${W.k} closest points are the best matches`
    ], et = (0, s.useRef)({
      root: null,
      segs: [],
      glyphs: [],
      dots: [],
      shadows: [],
      ripples: [],
      hulls: [],
      topicChips: [],
      edges: [],
      edgeBox: null,
      pathLines: [],
      signal: null,
      entry: null,
      pin: null,
      stem: null,
      pinShadow: null,
      pinRipple: null,
      queryChip: null,
      ring: null,
      links: [],
      scores: [],
      hits: [],
      status: null,
      statEmbedded: null,
      statLinks: null,
      statHops: null,
      readout: null,
      readoutKind: null,
      readoutText: null,
      caret: null,
      bars: [],
      rows: []
    }), ea = (0, s.useRef)({
      t: NaN,
      rate: NaN,
      rateV: 0,
      frame: 0,
      running: false,
      visible: true,
      still: false,
      cache: /* @__PURE__ */ new Map(),
      text: /* @__PURE__ */ new Map()
    }), er = A2 || !z ? 0 : w2 * (null !== P ? 0.65 : 1), es = (0, s.useRef)({
      geometry: U,
      timeline: W,
      target: er,
      reduced: H,
      names: J,
      status: ee,
      docs: G,
      query: a2
    });
    (0, s.useLayoutEffect)(() => {
      es.current = {
        geometry: U,
        timeline: W,
        target: er,
        reduced: H,
        names: J,
        status: ee,
        docs: G,
        query: a2
      };
    });
    let ei = (0, s.useCallback)((e3, t3, a3) => {
      if (!e3) return;
      let r2 = ea.current.cache, s2 = r2.get(e3);
      s2 || (s2 = {}, r2.set(e3, s2)), s2[t3] !== a3 && (s2[t3] = a3, t3.startsWith("--") ? e3.style.setProperty(t3, a3) : t3.startsWith("style:") ? e3.style.setProperty(t3.slice(6), a3) : e3.setAttribute(t3, a3));
    }, []), el = (0, s.useCallback)((e3, t3) => {
      e3 && ea.current.text.get(e3) !== t3 && (ea.current.text.set(e3, t3), e3.textContent = t3);
    }, []), eo = (0, s.useCallback)(
      (e3) => {
        let t3, {
          geometry: a3,
          timeline: r2,
          names: s2,
          status: i2,
          docs: l3,
          query: o2
        } = es.current, c2 = et.current, n3 = (e3 % (t3 = r2.T) + t3) % t3, d2 = m((n3 - r2.R0) / 0.9), h2 = 1 - d2, p2 = (e4, t4) => {
          ei(e4, "stroke-dasharray", `${t4.toFixed(4)} 1`), ei(e4, "visibility", t4 > 0 ? "visible" : "hidden");
        }, u2 = 0;
        r2.stages.forEach((e4, t4) => {
          n3 >= e4.start && n3 < e4.end && (u2 = t4), ei(
            c2.segs[t4],
            "--p",
            (n3 >= e4.end ? 1 : n3 < e4.start ? 0 : (n3 - e4.start) / (e4.end - e4.start)).toFixed(4)
          );
        }), r2.stages.forEach((e4, t4) => {
          ei(c2.segs[t4], "data-current", t4 === u2 ? "true" : "false"), ei(c2.segs[t4], "aria-current", t4 === u2 ? "step" : "false");
        }), el(c2.status, i2[u2]), ei(c2.root, "data-stage", String(u2));
        let y2 = 0, v2 = -1, b2 = -1 / 0;
        for (let e4 = 0; e4 < r2.n; e4++)
          n3 >= r2.drop[e4] + 0.6375 && y2++, n3 >= r2.drop[e4] + 0.41250000000000003 && r2.drop[e4] > b2 && (b2 = r2.drop[e4], v2 = e4);
        let k2 = 0;
        r2.edgeAt.forEach((e4) => {
          n3 >= e4 + 0.27 && k2++;
        });
        let N2 = 0;
        r2.hopStart.forEach((e4, t4) => {
          n3 >= e4 + 0.5 * r2.hopDur[t4] && N2++;
        });
        let j2 = n3 < r2.R0 + 0.45;
        if (el(c2.statEmbedded, `${j2 ? y2 : 0}/${r2.n}`), el(c2.statLinks, String(j2 ? k2 : 0)), el(c2.statHops, String(j2 && n3 >= r2.hopAt ? N2 : 0)), n3 >= r2.typeAt && n3 < r2.R0 + 0.45) {
          let e4 = x(Math.floor((n3 - r2.typeAt) / 0.03), 0, o2.length);
          el(c2.readoutKind, s2.queryHeading), el(c2.readoutText, o2.slice(0, e4)), ei(c2.caret, "data-on", e4 < o2.length ? "true" : "false"), ei(c2.readout, "data-kind", "query"), ei(c2.readout, "--c", "var(--vs-accent)"), r2.queryVector.forEach(
            (e5, t4) => ei(
              c2.bars[t4],
              "--v",
              (n3 >= r2.barsAt + 0.02 * t4 ? e5 : 0).toFixed(3)
            )
          );
        } else {
          let e4 = n3 < r2.R0 ? v2 : -1;
          el(c2.readoutKind, s2.embedding), el(c2.readoutText, e4 >= 0 ? l3[e4].title : ""), ei(c2.caret, "data-on", "false"), ei(c2.readout, "data-kind", "doc"), ei(
            c2.readout,
            "--c",
            e4 >= 0 ? `var(--vs-t${l3[e4].topic})` : "var(--text-muted)"
          );
          let t4 = e4 >= 0 ? r2.vectors[e4] : null;
          for (let e5 = 0; e5 < 16; e5++)
            ei(
              c2.bars[e5],
              "--v",
              (t4 ? t4[e5] * (n3 < r2.S1 ? 1 : 0.9) : 0).toFixed(3)
            );
        }
        if (r2.nearest.forEach((e4, t4) => {
          let a4 = n3 >= r2.lit[e4] && j2;
          ei(c2.rows[t4], "data-on", a4 ? "true" : "false");
        }), !a3)
          return;
        for (let e4 = 0; e4 < r2.n; e4++) {
          let t4 = a3.points[e4], s3 = (n3 - r2.drop[e4]) / 0.75, i3 = f(x(s3 / 0.8)), l4 = x(5 * s3) * (1 - x((s3 - 0.72) / 0.22)), o3 = a3.glyph * (1 - 0.5 * x((s3 - 0.7) / 0.3));
          ei(
            c2.glyphs[e4],
            "transform",
            `translate(${g(t4.x)} ${g(t4.y - 7 - a3.dropH * (1 - i3))}) scale(${o3.toFixed(3)})`
          ), ei(c2.glyphs[e4], "opacity", (s3 > 0 && s3 < 1 ? l4 : 0).toFixed(3));
          let p3 = _((s3 - 0.74) / 0.26), u3 = 5 * d2;
          ei(
            c2.dots[e4],
            "transform",
            `translate(${g(t4.x)} ${g(t4.y - u3)}) scale(${(0.2 + 0.8 * p3).toFixed(3)})`
          ), ei(
            c2.dots[e4],
            "opacity",
            (s3 > 0.74 ? x(2 * p3) * h2 : 0).toFixed(3)
          ), ei(c2.shadows[e4], "opacity", (x(s3) * h2).toFixed(3));
          let y3 = (n3 - r2.drop[e4] - 0.75) / 0.55;
          if (y3 >= 0 && y3 < 1) {
            let t5 = _(y3);
            ei(c2.ripples[e4], "rx", g(a3.dot + 10 * t5)), ei(c2.ripples[e4], "ry", g((a3.dot + 10 * t5) * a3.k)), ei(c2.ripples[e4], "opacity", ((1 - t5) * 0.7).toFixed(3));
          } else ei(c2.ripples[e4], "opacity", "0");
          ei(
            c2.hits[e4],
            "data-present",
            s3 > 0.9 && h2 > 0.5 ? "true" : "false"
          );
          let m2 = n3 >= r2.lit[e4];
          ei(c2.dots[e4], "data-lit", m2 && j2 ? "true" : "false");
          let v3 = n3 >= r2.hopAt && r2.path.some(
            (t5, a4) => t5 === e4 && n3 >= (0 === a4 ? r2.hopAt : r2.hopStart[a4 - 1] + r2.hopDur[a4 - 1]) - 0.02
          );
          ei(c2.dots[e4], "data-visited", v3 && j2 ? "true" : "false");
        }
        a3.hulls.forEach((e4, t4) => {
          if (!e4) return;
          let a4 = _((n3 - r2.hullAt - 0.12 * t4) / 0.8), s3 = (n3 >= r2.hullAt ? a4 : 0) * h2;
          ei(
            c2.hulls[t4],
            "transform",
            `translate(${g(e4.x)} ${g(e4.y)}) scale(${(0.86 + 0.14 * a4).toFixed(3)})`
          ), ei(c2.hulls[t4], "opacity", s3.toFixed(3)), ei(c2.topicChips[t4], "style:opacity", s3.toFixed(3)), ei(
            c2.topicChips[t4],
            "style:transform",
            e4.below ? `translate3d(-50%, ${g(-4 * (1 - a4))}px, 0)` : `translate3d(-50%, calc(-100% + ${g(4 * (1 - a4))}px), 0)`
          ), ei(c2.topicChips[t4], "data-present", s3 > 0.3 ? "true" : "false");
        }), r2.edges.forEach((e4, t4) => {
          let a4 = _((n3 - r2.edgeAt[t4]) / 0.45);
          p2(c2.edges[t4], n3 >= r2.edgeAt[t4] ? a4 : 0);
        }), ei(c2.edgeBox, "opacity", h2.toFixed(3));
        let $3 = a3.points[r2.entry], M3 = n3 >= r2.hopAt - 0.25 ? x((n3 - r2.hopAt + 0.25) / 0.25) * h2 : 0;
        if (ei(c2.entry, "opacity", M3.toFixed(3)), ei(c2.entry, "transform", `translate(${g($3.x)} ${g($3.y)})`), r2.pathEdges.forEach((e4, t4) => {
          let a4 = m((n3 - r2.hopStart[t4]) / r2.hopDur[t4]);
          p2(c2.pathLines[t4], n3 >= r2.hopStart[t4] ? a4 : 0), ei(c2.pathLines[t4], "opacity", h2.toFixed(3));
        }), n3 >= r2.hopAt - 0.25 && n3 < r2.ringAt + 0.35 && r2.hops > 0) {
          let e4 = 0;
          for (; e4 < r2.hops - 1 && n3 >= r2.hopStart[e4 + 1]; ) e4++;
          let t4 = n3 < r2.hopAt ? 0 : m((n3 - r2.hopStart[e4]) / r2.hopDur[e4]), s3 = a3.points[r2.path[e4]], i3 = a3.points[r2.path[e4 + 1]], l4 = 6 * Math.sin(Math.PI * t4), o3 = x((n3 - r2.hopEnd) / 0.3);
          ei(
            c2.signal,
            "transform",
            `translate(${g(s3.x + (i3.x - s3.x) * t4)} ${g(s3.y + (i3.y - s3.y) * t4 - l4)}) scale(${(1 - 0.5 * o3).toFixed(3)})`
          ), ei(
            c2.signal,
            "opacity",
            (x((n3 - r2.hopAt + 0.25) / 0.25) * (1 - o3)).toFixed(3)
          );
        } else ei(c2.signal, "opacity", "0");
        let w3 = x((n3 - r2.pinAt + 0.3) / 0.3), A3 = m((n3 - r2.pinAt) / 0.9), E3 = a3.lift * (1 - A3), L3 = (n3 >= r2.pinAt - 0.3 ? w3 : 0) * h2;
        ei(
          c2.pin,
          "transform",
          `translate(${g(a3.q.x)} ${g(a3.q.y - E3 - 5 * d2)})`
        ), ei(c2.pin, "opacity", L3.toFixed(3)), ei(c2.stem, "y1", g(a3.q.y - E3)), ei(c2.stem, "opacity", ((E3 > 1) * L3).toFixed(3)), ei(c2.pinShadow, "opacity", (L3 * (0.35 + 0.65 * A3)).toFixed(3)), ei(c2.pinShadow, "rx", g(4 + 3 * A3)), ei(c2.pinShadow, "ry", g((4 + 3 * A3) * a3.k)), ei(
          c2.queryChip,
          "style:opacity",
          (L3 * (1 - x((n3 - r2.pinLand - 0.2) / 0.35))).toFixed(3)
        ), ei(
          c2.queryChip,
          "style:transform",
          `translate3d(-50%, ${g(-E3 - 14 - 5 * d2)}px, 0) translateY(-100%)`
        );
        let q3 = (n3 - r2.pinLand) / 0.6;
        if (q3 >= 0 && q3 < 1) {
          let e4 = _(q3);
          ei(c2.pinRipple, "rx", g(6 + 16 * e4)), ei(c2.pinRipple, "ry", g((6 + 16 * e4) * a3.k)), ei(c2.pinRipple, "opacity", ((1 - e4) * 0.8).toFixed(3));
        } else ei(c2.pinRipple, "opacity", "0");
        let S2 = m((n3 - r2.ringAt) / 1.1), F2 = a3.rx(r2.rMax * S2), R2 = n3 >= r2.ringAt ? x((n3 - r2.ringAt) / 0.15) * (1 - 0.45 * x((n3 - r2.ringAt - 1.1) / 0.4)) * h2 : 0;
        ei(c2.ring, "rx", g(Math.max(0.5, F2))), ei(c2.ring, "ry", g(Math.max(0.5, F2 * a3.k))), ei(c2.ring, "opacity", R2.toFixed(3)), r2.nearest.forEach((e4, t4) => {
          let s3 = _((n3 - r2.lit[e4]) / 0.35), i3 = n3 >= r2.lit[e4];
          p2(c2.links[t4], i3 ? s3 : 0), ei(c2.links[t4], "opacity", h2.toFixed(3)), ei(c2.scores[t4], "style:opacity", ((i3 ? s3 : 0) * h2).toFixed(3));
          let l4 = a3.scores[t4];
          ei(
            c2.scores[t4],
            "style:transform",
            `translate3d(calc(-50% + ${g(-4 * l4.dx * (1 - s3))}px), calc(-50% + ${g(-4 * l4.dy * (1 - s3))}px), 0)`
          );
        });
      },
      [ei, el]
    ), ec = (0, s.useCallback)(() => {
      let e3 = ea.current;
      if (e3.running || !e3.visible || es.current.reduced) return;
      e3.running = true;
      let t3 = performance.now(), a3 = (r2) => {
        if (!e3.visible || es.current.reduced) {
          e3.running = false;
          return;
        }
        let s2 = x((r2 - t3) / 1e3, 0, 0.05);
        t3 = r2;
        let i2 = es.current.target;
        if (Number.isNaN(e3.rate) && (e3.rate = i2), e3.rateV += (40 * (i2 - e3.rate) - 2 * Math.sqrt(40) * e3.rateV) * s2, e3.rate += e3.rateV * s2, 1e-4 > Math.abs(i2 - e3.rate) && 1e-4 > Math.abs(e3.rateV) && (e3.rate = i2, e3.rateV = 0), e3.t += s2 * e3.rate, eo(e3.t), 0 === e3.rate && 0 === i2 || !e3.visible || es.current.reduced) {
          e3.running = false;
          return;
        }
        e3.frame = requestAnimationFrame(a3);
      };
      e3.frame = requestAnimationFrame(a3);
    }, [eo]);
    (0, s.useLayoutEffect)(() => {
      let e3 = T.current;
      if (!e3) return;
      let t3 = () => I(Math.floor(e3.clientWidth));
      t3();
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, s.useLayoutEffect)(() => {
      let e3 = ea.current;
      Number.isNaN(e3.t) && (e3.t = 0), H && !e3.still && (e3.t = Math.floor(e3.t / W.T) * W.T + W.stages[3].still), e3.still = H, e3.cache = /* @__PURE__ */ new Map(), e3.text = /* @__PURE__ */ new Map(), eo(e3.t), H || ec();
    }, [U, W, H, er, P, eo, ec]), (0, s.useEffect)(() => {
      let e3 = T.current, t3 = ea.current;
      if (!e3) return;
      let a3 = new IntersectionObserver(([e4]) => {
        t3.visible = e4.isIntersecting && !document.hidden, t3.visible ? ec() : (cancelAnimationFrame(t3.frame), t3.running = false);
      }), r2 = () => {
        t3.visible = !document.hidden, t3.visible ? ec() : (cancelAnimationFrame(t3.frame), t3.running = false);
      };
      return a3.observe(e3), document.addEventListener("visibilitychange", r2), () => {
        a3.disconnect(), document.removeEventListener("visibilitychange", r2), cancelAnimationFrame(t3.frame), t3.running = false;
      };
    }, [ec]);
    let en = (e3) => ({
      onPointerEnter: (t3) => {
        "mouse" === t3.pointerType && V(e3);
      },
      onPointerLeave: () => V((t3) => t3 && t3.kind === e3.kind && t3.index === e3.index ? null : t3)
    }), ed = [J.embed, J.index, J.query, J.rank], eh = [
      "Embed the documents",
      "Build the index",
      "Embed the query",
      "Rank the nearest documents"
    ], ep = W.nearest.map((e3) => `${G[e3].title} (${W.score[e3].toFixed(2)})`).join(", "), eu = Q.map((e3) => e3.name).join(", "), ey = q2 ?? `Vector search. ${G.length} documents are embedded as points on a plane, where similar documents land close together in ${Q.length} clusters: ${eu}. The index links each point to its nearest neighbours. The query "${a2}" is embedded into the same space and lands near ${Z(X?.topic ?? 0)}. The search hops ${W.hops} times along the links to reach it, and the ${W.k} nearest documents are returned with their similarity: ${ep}.`, ex = { "--vs-accent": L2 ?? "var(--accent)" };
    Q.forEach((e3, t3) => {
      ex[`--vs-t${t3}`] = e3.color ?? u[t3];
    });
    let em = { ...R, ...ex }, e_ = P ? "topic" === P.kind ? P.index : G[P.index]?.topic ?? -1 : -1, ef = P?.kind === "doc" ? P.index : -1, eg = U ? U.points.map((e3, t3) => ({ i: t3, y: e3.y })).sort((e3, t3) => e3.y - t3.y).map((e3) => e3.i) : [], ev = ef >= 0 && U ? { p: U.points[ef], doc: G[ef] } : null;
    return (0, r.jsxs)("figure", {
      ref: (e3) => {
        et.current.root = e3;
      },
      className: [d().root, F].filter(Boolean).join(" "),
      style: em,
      "data-ready": !!U || void 0,
      "data-focus": !!P || void 0,
      children: [
        E2 && (0, r.jsxs)("div", {
          className: d().controls,
          role: "group",
          "aria-label": "Search stages",
          children: [
            !H && (0, r.jsx)("button", {
              type: "button",
              className: d().play,
              "aria-label": z ? "Pause animation" : "Play animation",
              onClick: () => B((e3) => !e3),
              children: z ? (0, r.jsx)(o.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }) : (0, r.jsx)(c.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, r.jsx)("div", {
              className: d().segments,
              children: ed.map(
                (e3, t3) => (0, r.jsxs)(
                  "button",
                  {
                    ref: (e4) => {
                      et.current.segs[t3] = e4;
                    },
                    type: "button",
                    className: d().segment,
                    "aria-label": eh[t3],
                    "aria-current": 0 === t3 ? "step" : "false",
                    "data-current": 0 === t3 ? "true" : "false",
                    onClick: () => ((e4) => {
                      let t4 = W.stages[e4];
                      if (!t4) return;
                      let a3 = ea.current, r2 = H || A2 || !z, s2 = Math.floor(Math.max(0, a3.t) / W.T) * W.T;
                      a3.t = s2 + (r2 ? t4.still : t4.start + 1e-3), eo(a3.t), r2 || ec();
                    })(t3),
                    children: [
                      (0, r.jsx)("span", {
                        className: d().segmentLabel,
                        children: e3
                      }),
                      (0, r.jsx)("span", {
                        className: d().track,
                        children: (0, r.jsx)("span", { className: d().fill })
                      })
                    ]
                  },
                  `${e3}-${t3}`
                )
              )
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: d().body,
          role: "img",
          "aria-label": ey,
          children: [
            (0, r.jsx)("div", {
              ref: T,
              className: d().stage,
              style: U ? { height: U.h } : void 0,
              children: U && (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("svg", {
                    className: d().layer,
                    viewBox: `0 0 ${U.w} ${U.h}`,
                    width: U.w,
                    height: U.h,
                    "aria-hidden": "true",
                    children: [
                      (0, r.jsx)("path", {
                        className: d().sideL,
                        d: U.sideL
                      }),
                      (0, r.jsx)("path", {
                        className: d().sideR,
                        d: U.sideR
                      }),
                      (0, r.jsx)("path", { className: d().face, d: U.face }),
                      (0, r.jsx)("path", { className: d().grid, d: U.grid }),
                      U.hulls.map(
                        (e3, t3) => e3 && (0, r.jsx)(
                          "ellipse",
                          {
                            ref: (e4) => {
                              et.current.hulls[t3] = e4;
                            },
                            className: d().hull,
                            "data-dim": e_ >= 0 && e_ !== t3 || void 0,
                            style: { "--c": `var(--vs-t${t3})` },
                            cx: 0,
                            cy: 0,
                            rx: e3.rx,
                            ry: e3.ry,
                            opacity: 0
                          },
                          `hull-${t3}`
                        )
                      ),
                      (0, r.jsx)("g", {
                        ref: (e3) => {
                          et.current.edgeBox = e3;
                        },
                        children: W.edges.map(([e3, t3], a3) => {
                          let s2 = ef >= 0 && (e3 === ef || t3 === ef);
                          return (0, r.jsx)(
                            "line",
                            {
                              ref: (e4) => {
                                et.current.edges[a3] = e4;
                              },
                              className: d().edge,
                              "data-on": s2 || void 0,
                              "data-dim": P && !s2 && (ef >= 0 || G[e3].topic !== e_) || void 0,
                              x1: U.points[e3].x,
                              y1: U.points[e3].y,
                              x2: U.points[t3].x,
                              y2: U.points[t3].y,
                              pathLength: 1,
                              strokeDasharray: "0 1",
                              visibility: "hidden"
                            },
                            `e-${e3}-${t3}`
                          );
                        })
                      }),
                      W.pathEdges.map((e3, t3) => {
                        let a3 = U.points[W.path[t3]], s2 = U.points[W.path[t3 + 1]];
                        return (0, r.jsx)(
                          "line",
                          {
                            ref: (e4) => {
                              et.current.pathLines[t3] = e4;
                            },
                            className: d().pathLine,
                            x1: a3.x,
                            y1: a3.y,
                            x2: s2.x,
                            y2: s2.y,
                            pathLength: 1,
                            strokeDasharray: "0 1",
                            visibility: "hidden"
                          },
                          `p-${t3}`
                        );
                      }),
                      (0, r.jsx)("ellipse", {
                        ref: (e3) => {
                          et.current.ring = e3;
                        },
                        className: d().ring,
                        cx: U.q.x,
                        cy: U.q.y,
                        rx: 1,
                        ry: 0.5,
                        opacity: 0
                      }),
                      W.nearest.map(
                        (e3, t3) => (0, r.jsx)(
                          "line",
                          {
                            ref: (e4) => {
                              et.current.links[t3] = e4;
                            },
                            className: d().link,
                            "data-on": ef === e3 || void 0,
                            x1: U.q.x,
                            y1: U.q.y,
                            x2: U.points[e3].x,
                            y2: U.points[e3].y,
                            pathLength: 1,
                            strokeDasharray: "0 1",
                            visibility: "hidden"
                          },
                          `l-${e3}`
                        )
                      ),
                      U.points.map(
                        (e3, t3) => (0, r.jsx)(
                          "ellipse",
                          {
                            ref: (e4) => {
                              et.current.shadows[t3] = e4;
                            },
                            className: d().shadow,
                            cx: e3.x,
                            cy: e3.y + 1.5,
                            rx: U.dot + 1.5,
                            ry: (U.dot + 1.5) * U.k,
                            opacity: 0
                          },
                          `s-${t3}`
                        )
                      ),
                      U.points.map(
                        (e3, t3) => (0, r.jsx)(
                          "ellipse",
                          {
                            ref: (e4) => {
                              et.current.ripples[t3] = e4;
                            },
                            className: d().ripple,
                            style: { "--c": `var(--vs-t${G[t3].topic})` },
                            cx: e3.x,
                            cy: e3.y,
                            rx: U.dot,
                            ry: U.dot * U.k,
                            opacity: 0
                          },
                          `r-${t3}`
                        )
                      ),
                      (0, r.jsx)("ellipse", {
                        ref: (e3) => {
                          et.current.entry = e3;
                        },
                        className: d().entry,
                        cx: 0,
                        cy: 0,
                        rx: U.dot + 5,
                        ry: (U.dot + 5) * U.k,
                        opacity: 0
                      }),
                      eg.map(
                        (e3) => (0, r.jsxs)(
                          "g",
                          {
                            ref: (t3) => {
                              et.current.dots[e3] = t3;
                            },
                            className: d().dot,
                            "data-dim": e_ >= 0 && G[e3].topic !== e_ && e3 !== ef || void 0,
                            "data-on": ef === e3 || void 0,
                            style: { "--c": `var(--vs-t${G[e3].topic})` },
                            opacity: 0,
                            children: [
                              (0, r.jsx)("circle", {
                                className: d().halo,
                                r: U.dot + 4
                              }),
                              (0, r.jsx)("circle", {
                                className: d().dotFill,
                                r: U.dot
                              })
                            ]
                          },
                          `d-${e3}`
                        )
                      ),
                      eg.map(
                        (e3) => (0, r.jsxs)(
                          "g",
                          {
                            ref: (t3) => {
                              et.current.glyphs[e3] = t3;
                            },
                            className: d().glyph,
                            style: { "--c": `var(--vs-t${G[e3].topic})` },
                            opacity: 0,
                            children: [
                              (0, r.jsx)("path", {
                                className: d().glyphPage,
                                d: "M-4.5 -6 H1.5 L4.5 -3 V6 H-4.5 Z"
                              }),
                              (0, r.jsx)("path", {
                                className: d().glyphLines,
                                d: "M-2.4 -1.2 H2.4 M-2.4 1.2 H2.4 M-2.4 3.6 H0.8 M1.5 -6 V-3 H4.5"
                              })
                            ]
                          },
                          `g-${e3}`
                        )
                      ),
                      (0, r.jsx)("circle", {
                        ref: (e3) => {
                          et.current.signal = e3;
                        },
                        className: d().signal,
                        r: 3.5,
                        opacity: 0
                      }),
                      (0, r.jsx)("ellipse", {
                        ref: (e3) => {
                          et.current.pinShadow = e3;
                        },
                        className: d().pinShadow,
                        cx: U.q.x,
                        cy: U.q.y + 1,
                        rx: 4,
                        ry: 2,
                        opacity: 0
                      }),
                      (0, r.jsx)("ellipse", {
                        ref: (e3) => {
                          et.current.pinRipple = e3;
                        },
                        className: d().pinRipple,
                        cx: U.q.x,
                        cy: U.q.y,
                        rx: 6,
                        ry: 3,
                        opacity: 0
                      }),
                      (0, r.jsx)("line", {
                        ref: (e3) => {
                          et.current.stem = e3;
                        },
                        className: d().stem,
                        x1: U.q.x,
                        y1: U.q.y,
                        x2: U.q.x,
                        y2: U.q.y,
                        opacity: 0
                      }),
                      (0, r.jsxs)("g", {
                        ref: (e3) => {
                          et.current.pin = e3;
                        },
                        className: d().pin,
                        opacity: 0,
                        children: [
                          (0, r.jsx)("circle", {
                            className: d().pinRing,
                            r: U.dot + 3.5
                          }),
                          (0, r.jsx)("circle", {
                            className: d().pinDot,
                            r: U.dot + 0.8
                          })
                        ]
                      })
                    ]
                  }),
                  U.hulls.map(
                    (e3, t3) => e3 && (0, r.jsxs)(
                      "div",
                      {
                        ref: (e4) => {
                          et.current.topicChips[t3] = e4;
                        },
                        className: d().topicChip,
                        "data-on": e_ === t3 || void 0,
                        "data-dim": e_ >= 0 && e_ !== t3 || void 0,
                        style: {
                          left: e3.x,
                          top: e3.below ? e3.y + e3.ry + 3 : e3.y - e3.ry - 3,
                          "--c": `var(--vs-t${t3})`,
                          opacity: 0
                        },
                        ...en({ kind: "topic", index: t3 }),
                        children: [
                          (0, r.jsx)("span", { className: d().swatch }),
                          (0, r.jsx)("span", { children: Q[t3].name })
                        ]
                      },
                      `tc-${t3}`
                    )
                  ),
                  W.nearest.map(
                    (e3, t3) => (0, r.jsx)(
                      "div",
                      {
                        ref: (e4) => {
                          et.current.scores[t3] = e4;
                        },
                        className: d().score,
                        "data-on": ef === e3 || void 0,
                        style: {
                          left: U.scores[t3].x,
                          top: U.scores[t3].y,
                          opacity: 0
                        },
                        children: W.score[e3].toFixed(2)
                      },
                      `sc-${e3}`
                    )
                  ),
                  (0, r.jsx)("div", {
                    ref: (e3) => {
                      et.current.queryChip = e3;
                    },
                    className: d().queryChip,
                    style: { left: U.q.x, top: U.q.y, opacity: 0 },
                    children: J.queryChip
                  }),
                  U.points.map(
                    (e3, t3) => (0, r.jsx)(
                      "div",
                      {
                        ref: (e4) => {
                          et.current.hits[t3] = e4;
                        },
                        className: d().hit,
                        "data-present": "false",
                        style: { left: e3.x - 11, top: e3.y - 11 },
                        ...en({ kind: "doc", index: t3 })
                      },
                      `hit-${t3}`
                    )
                  ),
                  ev && (0, r.jsxs)(
                    "div",
                    {
                      className: d().tag,
                      style: { left: ev.p.x, top: ev.p.y - 12 },
                      "aria-hidden": "true",
                      children: [
                        (0, r.jsx)("span", {
                          className: d().tagTitle,
                          children: ev.doc.title
                        }),
                        (0, r.jsxs)("span", {
                          className: d().tagMeta,
                          children: [
                            Z(ev.doc.topic),
                            ev.doc.source ? `, ${ev.doc.source.name}` : ""
                          ]
                        })
                      ]
                    },
                    `tag-${ef}`
                  )
                ]
              })
            }),
            (0, r.jsxs)("div", {
              className: d().panel,
              children: [
                (0, r.jsx)("span", {
                  ref: (e3) => {
                    et.current.status = e3;
                  },
                  className: d().status,
                  children: ee[0]
                }),
                (0, r.jsxs)("div", {
                  className: d().stats,
                  children: [
                    (0, r.jsxs)("div", {
                      className: d().stat,
                      children: [
                        (0, r.jsx)("span", {
                          className: d().statLabel,
                          children: J.embedded
                        }),
                        (0, r.jsxs)("span", {
                          ref: (e3) => {
                            et.current.statEmbedded = e3;
                          },
                          className: d().statValue,
                          children: ["0/", G.length]
                        })
                      ]
                    }),
                    (0, r.jsxs)("div", {
                      className: d().stat,
                      children: [
                        (0, r.jsx)("span", {
                          className: d().statLabel,
                          children: J.links
                        }),
                        (0, r.jsx)("span", {
                          ref: (e3) => {
                            et.current.statLinks = e3;
                          },
                          className: d().statValue,
                          children: "0"
                        })
                      ]
                    }),
                    (0, r.jsxs)("div", {
                      className: d().stat,
                      children: [
                        (0, r.jsx)("span", {
                          className: d().statLabel,
                          children: J.hops
                        }),
                        (0, r.jsx)("span", {
                          ref: (e3) => {
                            et.current.statHops = e3;
                          },
                          className: d().statValue,
                          children: "0"
                        })
                      ]
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  ref: (e3) => {
                    et.current.readout = e3;
                  },
                  className: d().readout,
                  "data-kind": "doc",
                  children: [
                    (0, r.jsxs)("span", {
                      className: d().readoutHead,
                      children: [
                        (0, r.jsx)("span", {
                          ref: (e3) => {
                            et.current.readoutKind = e3;
                          },
                          className: d().readoutKind,
                          children: J.embedding
                        }),
                        (0, r.jsxs)("span", {
                          className: d().readoutDims,
                          children: [$2.toLocaleString("en-US"), " dims"]
                        })
                      ]
                    }),
                    (0, r.jsxs)("span", {
                      className: d().readoutLine,
                      children: [
                        (0, r.jsx)("span", {
                          ref: (e3) => {
                            et.current.readoutText = e3;
                          },
                          className: d().readoutText
                        }),
                        (0, r.jsx)("span", {
                          ref: (e3) => {
                            et.current.caret = e3;
                          },
                          className: d().caret,
                          "data-on": "false"
                        })
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: d().bars,
                      children: Array.from(
                        { length: 16 },
                        (e3, t3) => (0, r.jsx)(
                          "span",
                          {
                            ref: (e4) => {
                              et.current.bars[t3] = e4;
                            },
                            className: d().bar
                          },
                          t3
                        )
                      )
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: d().results,
                  children: [
                    (0, r.jsx)("span", {
                      className: d().resultsHead,
                      children: J.results
                    }),
                    W.nearest.map((e3, t3) => {
                      let a3 = G[e3];
                      return (0, r.jsxs)(
                        "div",
                        {
                          ref: (e4) => {
                            et.current.rows[t3] = e4;
                          },
                          className: d().row,
                          "data-on": "false",
                          "data-focus": ef === e3 || void 0,
                          style: {
                            "--c": `var(--vs-t${a3.topic})`,
                            "--s": W.score[e3].toFixed(3)
                          },
                          ...en({ kind: "doc", index: e3 }),
                          children: [
                            (0, r.jsxs)("span", {
                              className: d().rowHead,
                              children: [
                                (0, r.jsx)("span", {
                                  className: d().rank,
                                  children: t3 + 1
                                }),
                                (0, r.jsx)(N, {
                                  source: a3.source,
                                  className: d().mark
                                }),
                                (0, r.jsx)("span", {
                                  className: d().rowTitle,
                                  children: a3.title
                                }),
                                (0, r.jsx)("span", {
                                  className: d().rowScore,
                                  children: W.score[e3].toFixed(2)
                                })
                              ]
                            }),
                            (0, r.jsx)("span", {
                              className: d().rowBar,
                              children: (0, r.jsx)("span", {
                                className: d().rowFill
                              })
                            })
                          ]
                        },
                        `row-${e3}`
                      );
                    })
                  ]
                })
              ]
            })
          ]
        }),
        S && (0, r.jsx)("figcaption", { className: d().figcaption, children: S })
      ]
    });
  }
  var $ = a(97018), M = a.n($);
  let w = {
    name: "Notion",
    icon: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
  }, A = {
    name: "GitHub",
    icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  }, E = { name: "Slack", icon: "block-logos/slack-color.svg" };
  function L() {
    return (0, r.jsx)("div", {
      className: M().demo,
      "data-canvas": "wide",
      children: (0, r.jsx)(j, {
        topics: [{ name: "Billing" }, { name: "Access" }, { name: "Deploys" }],
        documents: [
          { title: "Refund a charge", topic: 0, source: w },
          { title: "Update a card on file", topic: 0, source: w },
          { title: "Download invoices", topic: 0, source: w },
          { title: "Change your plan", topic: 0, source: w },
          { title: "How proration works", topic: 0, source: E },
          { title: "Retry a failed payment", topic: 0, source: A },
          { title: "Rotate an API key", topic: 1, source: A },
          { title: "Scope API tokens", topic: 1, source: A },
          { title: "Set up SSO with Okta", topic: 1, source: w },
          { title: "Revoke a session", topic: 1, source: E },
          { title: "Require two-factor", topic: 1, source: E },
          { title: "Export audit logs", topic: 1, source: A },
          { title: "Roll back a deploy", topic: 2, source: A },
          { title: "Preview environments", topic: 2, source: w },
          { title: "Environment variables", topic: 2, source: A },
          { title: "Add a custom domain", topic: 2, source: w },
          { title: "Clear the build cache", topic: 2, source: E },
          { title: "Deploy hooks", topic: 2, source: A }
        ],
        query: "How do I rotate a leaked API key?",
        k: 3
      })
    });
  }
  let q = L;
}

__m(__module,__exports,__require);
}