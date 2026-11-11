function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { DnsResolutionDemo: () => B, default: () => S });
  var s = r(95155), a = r(12115), o = r(18310), l = r(36619), n = r(79267), i = r(89004), c = r.n(i);
  let d = ["browser", "resolver", "root", "tld", "authoritative"], u = ["ask", "root", "tld", "authoritative"], h = {
    ask: "browser",
    root: "root",
    tld: "tld",
    authoritative: "authoritative"
  }, x = {
    ask: 0.5,
    askTrip: 0.95,
    check: 1.45,
    root: 2.05,
    tld: 4.25,
    authoritative: 6.45,
    out: 0.9,
    think: 0.3,
    store: 8.55,
    fill: 0.5,
    answer: 8.8,
    answerTrip: 0.95,
    page: 9.9,
    again: 11.6,
    hop: 0.6,
    hit: 12.2,
    back: 12.3,
    expire: 15,
    fade: 15.35,
    cycle: 16
  }, p = (e2) => x[e2] + x.out, f = (e2) => p(e2) + x.think, y = x.answer + x.answerTrip, m = x.store + x.fill, g = x.back + x.hop, _ = [
    { edge: "ask", t0: x.ask, d: x.askTrip, back: false, kind: "query" },
    { edge: "root", t0: x.root, d: x.out, back: false, kind: "query" },
    { edge: "root", t0: f("root"), d: x.out, back: true, kind: "referral" },
    { edge: "tld", t0: x.tld, d: x.out, back: false, kind: "query" },
    { edge: "tld", t0: f("tld"), d: x.out, back: true, kind: "referral" },
    {
      edge: "authoritative",
      t0: x.authoritative,
      d: x.out,
      back: false,
      kind: "query"
    },
    {
      edge: "authoritative",
      t0: f("authoritative"),
      d: x.out,
      back: true,
      kind: "answer"
    },
    { edge: "ask", t0: x.answer, d: x.answerTrip, back: true, kind: "answer" },
    { edge: "ask", t0: x.again, d: x.hop, back: false, kind: "query" },
    { edge: "ask", t0: x.back, d: x.hop, back: true, kind: "answer" }
  ], v = [
    { start: 0, rep: x.root - 0.1, short: "Ask", title: "Ask the resolver" },
    {
      start: x.root - 0.05,
      rep: x.tld - 0.1,
      short: "Root",
      title: "Root server"
    },
    {
      start: x.tld - 0.05,
      rep: x.authoritative - 0.1,
      short: "TLD",
      title: "TLD server"
    },
    {
      start: x.authoritative - 0.05,
      rep: x.store - 0.02,
      short: "Nameserver",
      title: "Authoritative nameserver"
    },
    {
      start: x.store,
      rep: x.page + 1,
      short: "Answer",
      title: "Answer and connect"
    },
    {
      start: x.again - 0.5,
      rep: x.back + x.hop + 0.6,
      short: "Cache",
      title: "Answered from cache"
    }
  ], k = v[5].rep, b = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), w = (e2) => 0.5 - Math.cos(Math.PI * b(e2, 0, 1)) / 2, $ = (e2) => 1 - (1 - b(e2, 0, 1)) ** 3, N = (e2, t2, r2, s2, a2) => e2 < t2 || e2 > r2 + a2 ? 0 : e2 < t2 + s2 ? w((e2 - t2) / s2) : e2 <= r2 ? 1 : 1 - w((e2 - r2) / a2), j = (e2, t2 = 0.7) => e2 < 0 || e2 > t2 ? 0 : (1 - e2 / t2) ** 2, T = (e2) => e2.toFixed(2), F = () => () => {
  };
  function A(e2, t2, r2, s2) {
    let a2 = r2 / 2, o2 = (e3) => e3.map(([e4, t3]) => `${T(e4)},${T(t3)}`).join(" ");
    return {
      top: o2([
        [e2, t2 - a2],
        [e2 + r2, t2],
        [e2, t2 + a2],
        [e2 - r2, t2]
      ]),
      left: o2([
        [e2 - r2, t2],
        [e2, t2 + a2],
        [e2, t2 + a2 + s2],
        [e2 - r2, t2 + s2]
      ]),
      right: o2([
        [e2, t2 + a2],
        [e2 + r2, t2],
        [e2 + r2, t2 + s2],
        [e2, t2 + a2 + s2]
      ]),
      outline: o2([
        [e2, t2 - a2],
        [e2 + r2, t2],
        [e2 + r2, t2 + s2],
        [e2, t2 + a2 + s2],
        [e2 - r2, t2 + s2],
        [e2 - r2, t2]
      ])
    };
  }
  let L = (e2, t2, r2, s2, a2) => ({
    x: e2 + (s2 - a2) * r2,
    y: t2 - r2 / 2 + r2 / 2 * (s2 + a2)
  });
  function M(e2, t2, r2) {
    let s2 = r2 / 2;
    return `M${T(e2)} ${T(t2 - s2)} A${T(r2)} ${T(s2)} 0 0 1 ${T(e2)} ${T(t2 + s2)} A${T(r2)} ${T(s2)} 0 0 1 ${T(e2)} ${T(t2 - s2)}`;
  }
  function R({ node: e2, className: t2 }) {
    let { icon: r2, color: a2 } = e2;
    if (null == r2) return null;
    if ("string" == typeof r2)
      return /^(\/|\.|https?:|data:|blob:)/.test(r2) ? (0, s.jsx)("img", { className: t2, src: r2, alt: "", draggable: false }) : (0, s.jsx)("svg", {
        className: t2,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: (0, s.jsx)("path", { d: r2, fill: a2 ?? "currentColor" })
      });
    return (0, s.jsx)("span", {
      className: t2,
      "aria-hidden": "true",
      children: r2
    });
  }
  function E({
    domain: e2 = "app.acme.dev",
    address: t2 = "203.0.113.24",
    ttl: r2 = 300,
    lookupMs: i2 = 84,
    cachedMs: C2 = 1,
    nodes: D2,
    speed: B2 = 1,
    paused: S2 = false,
    accent: q,
    controls: V = true,
    caption: P = true,
    label: W,
    className: I,
    style: z
  }) {
    let O, K = (O = (0, a.useSyncExternalStore)(
      F,
      () => true,
      () => false
    ), !!(0, o.I)() && O), Y = (0, a.useRef)(null), [H, Q] = (0, a.useState)(0), [X, G] = (0, a.useState)(null), [U, J] = (0, a.useState)(false), Z = e2.split(".").filter(Boolean), ee = `.${Z[Z.length - 1] ?? "com"}`, et = Z.slice(-2).join(".") || e2, er = (0, a.useMemo)(() => {
      let t3 = D2 ?? {};
      return {
        browser: {
          label: "Browser",
          meta: e2,
          detail: "Needs an address before it can connect",
          ...t3.browser
        },
        resolver: {
          label: "Resolver",
          meta: "Recursive DNS",
          detail: "Walks the chain for you and caches the answer",
          ...t3.resolver
        },
        root: {
          label: "Root server",
          meta: "a.root-servers.net",
          detail: "Knows where every top level domain lives",
          ...t3.root
        },
        tld: {
          label: "TLD server",
          meta: `${ee} registry`,
          detail: `Knows the nameservers for every ${ee} name`,
          ...t3.tld
        },
        authoritative: {
          label: "Nameserver",
          meta: `ns1.${et}`,
          detail: `Holds the records for ${et}`,
          ...t3.authoritative
        }
      };
    }, [D2, e2, ee, et]), es = er.authoritative.meta ?? `ns1.${et}`, ea = (0, a.useMemo)(
      () => ({
        messages: {
          query: `A? ${e2}`,
          rootRef: `NS ${ee}`,
          tldRef: `NS ${es}`,
          answer: `A ${t2}`
        },
        replies: { root: `Try ${ee}`, tld: `Try ${es}`, authoritative: t2 },
        asking: {
          root: "Asking root",
          tld: `Asking ${ee}`,
          authoritative: `Asking ${es}`
        },
        captions: [
          `Your browser asks the resolver for ${e2}. It is not in the cache yet.`,
          `The root server does not know the address, but points to the ${ee} servers.`,
          `The ${ee} server points to ${es}, the nameserver for ${et}.`,
          `${es} answers with the address ${t2}.`,
          `The resolver caches the answer for ${r2} s and the browser connects in ${i2} ms.`,
          `The next lookup comes straight from the cache in ${C2} ms, until the TTL runs out.`
        ]
      }),
      [ee, es, t2, e2, et, r2, i2, C2]
    ), eo = H >= 640, el = H > 0, en = (0, a.useMemo)(
      () => el ? (function(e3) {
        let t3 = e3 ? {
          browser: ["browser", 160, 290, 74, 14],
          resolver: ["resolver", 480, 290, 84, 20],
          root: ["server", 850, 80, 58, 26],
          tld: ["server", 850, 272, 58, 26],
          authoritative: ["server", 850, 464, 58, 26]
        } : {
          browser: ["browser", 104, 122, 62, 12],
          resolver: ["resolver", 112, 452, 70, 18],
          root: ["server", 294, 104, 50, 22],
          tld: ["server", 294, 318, 50, 22],
          authoritative: ["server", 294, 532, 50, 22]
        }, r3 = {};
        for (let e4 of d) {
          let [s3, a3, o3, l3, n2] = t3[e4], i3 = 12 * ("resolver" === s3);
          r3[e4] = {
            key: e4,
            kind: s3,
            cx: a3,
            cy: o3,
            a: l3,
            h: n2,
            port: { x: a3, y: o3 - i3 },
            floor: o3 + n2
          };
        }
        let s2 = (e4) => ({ x: e4.cx, y: e4.floor + e4.a / 2 * 0.2 }), a2 = r3.resolver, o2 = (e4, t4, r4) => (function(e5, t5, r5, s3, a3) {
          let o3 = {
            x: (e5.x + t5.x) / 2 + a3.x,
            y: (e5.y + t5.y) / 2 + a3.y
          }, l3 = new Float32Array(57), n2 = new Float32Array(57), i3 = new Float32Array(57), c2 = new Float32Array(57), d2 = new Float32Array(57), u2 = 1;
          for (let a4 = 0; a4 < 57; a4++) {
            let h2 = a4 / 56, x2 = 1 - h2;
            l3[a4] = x2 * x2 * e5.x + 2 * x2 * h2 * o3.x + h2 * h2 * t5.x, n2[a4] = x2 * x2 * e5.y + 2 * x2 * h2 * o3.y + h2 * h2 * t5.y, i3[a4] = r5.x + (s3.x - r5.x) * h2, c2[a4] = r5.y + (s3.y - r5.y) * h2, u2 = Math.max(u2, c2[a4] - n2[a4]), d2[a4] = a4 ? d2[a4 - 1] + Math.hypot(l3[a4] - l3[a4 - 1], n2[a4] - n2[a4 - 1]) : 0;
          }
          return {
            d: `M${T(e5.x)} ${T(e5.y)} Q${T(o3.x)} ${T(o3.y)} ${T(t5.x)} ${T(t5.y)}`,
            floorD: `M${T(r5.x)} ${T(r5.y)} L${T(s3.x)} ${T(s3.y)}`,
            len: d2[56] || 1,
            lift: u2,
            xs: l3,
            ys: n2,
            fx: i3,
            fy: c2,
            acc: d2
          };
        })(e4.port, t4.port, s2(e4), s2(t4), r4), l2 = e3 ? {
          ask: o2(r3.browser, a2, { x: 0, y: -118 }),
          root: o2(a2, r3.root, { x: -40, y: -92 }),
          tld: o2(a2, r3.tld, { x: 0, y: -104 }),
          authoritative: o2(a2, r3.authoritative, { x: 24, y: -60 })
        } : {
          ask: o2(r3.browser, a2, { x: -64, y: -30 }),
          root: o2(a2, r3.root, { x: -40, y: -70 }),
          tld: o2(a2, r3.tld, { x: -10, y: -76 }),
          authoritative: o2(a2, r3.authoritative, { x: 20, y: -40 })
        };
        return {
          w: e3 ? 1e3 : 390,
          h: e3 ? 612 : 676,
          wide: e3,
          nodes: r3,
          edges: l2
        };
      })(eo) : null,
      [el, eo]
    ), ei = (0, a.useRef)({
      node: {},
      led: {},
      port: {},
      status: {},
      statusText: {},
      edge: {},
      floor: {},
      trail: {},
      packet: {},
      shadow: {},
      page: [],
      lock: null,
      ring: null,
      record: null,
      recordTtl: null,
      fill: [],
      seg: [],
      caption: null,
      capTitle: null,
      capText: null,
      msg: null,
      msgText: null
    }), ec = (0, a.useRef)({
      t: S2 || 0 === B2 ? k : 0,
      rate: NaN,
      rateV: 0,
      frame: 0,
      running: false,
      visible: true,
      cache: /* @__PURE__ */ new Map()
    }), ed = S2 || U ? 0 : B2 * (X ? 0.7 : 1), eu = en ? H / en.w : 1, eh = (0, a.useRef)({
      layout: en,
      text: ea,
      target: ed,
      reduced: K,
      lookupMs: i2,
      cachedMs: C2,
      ttl: r2,
      scale: eu
    });
    (0, a.useLayoutEffect)(() => {
      eh.current = {
        layout: en,
        text: ea,
        target: ed,
        reduced: K,
        lookupMs: i2,
        cachedMs: C2,
        ttl: r2,
        scale: eu
      };
    });
    let ex = (0, a.useCallback)((e3, t3, r3) => {
      if (!e3) return;
      let s2 = ec.current.cache, a2 = s2.get(e3);
      if (a2 || (a2 = {}, s2.set(e3, a2)), a2[t3] !== r3)
        if (a2[t3] = r3, "text" === t3) {
          let t4 = e3.firstChild;
          t4 && 3 === t4.nodeType && !t4.nextSibling ? t4.data = r3 : e3.textContent = r3;
        } else
          t3.startsWith("--") ? e3.style.setProperty(t3, r3) : t3.startsWith("s:") ? e3.style.setProperty(t3.slice(2), r3) : e3.setAttribute(t3, r3);
    }, []), ep = (0, a.useCallback)(
      (e3) => {
        let {
          layout: t3,
          text: r3,
          lookupMs: s2,
          cachedMs: a2,
          ttl: o2,
          scale: l2
        } = eh.current, n2 = ei.current, i3 = (e3 % x.cycle + x.cycle) % x.cycle, c2 = i3 < x.fade ? 1 : 1 - w((i3 - x.fade) / (x.cycle - x.fade)), k2 = i3 < 0.35 ? w(i3 / 0.35) : c2, F2 = 0;
        v.forEach((e4, t4) => {
          i3 >= e4.start && (F2 = t4);
        }), v.forEach((e4, t4) => {
          let r4 = v[t4 + 1]?.start ?? x.cycle, s3 = eh.current.reduced ? +(t4 <= F2) : b((i3 - e4.start) / (r4 - e4.start), 0, 1);
          ex(n2.fill[t4], "s:transform", `scaleX(${s3.toFixed(4)})`), ex(n2.fill[t4], "s:opacity", c2.toFixed(3)), ex(n2.seg[t4], "data-current", t4 === F2 ? "true" : "false"), ex(n2.seg[t4], "aria-current", t4 === F2 ? "step" : "false");
        }), ex(n2.capTitle, "text", v[F2].title), ex(n2.capText, "text", r3.captions[F2]);
        let A2 = v[F2].start, L2 = v[F2 + 1]?.start ?? x.cycle, M2 = eh.current.reduced ? 1 : Math.min(w((i3 - A2) / 0.3), w((L2 - i3) / 0.15));
        if (ex(n2.caption, "s:opacity", M2.toFixed(3)), !t3) return;
        let R2 = { ask: 0, root: 0, tld: 0, authoritative: 0 }, E2 = { browser: 0, resolver: 0, root: 0, tld: 0, authoritative: 0 }, C3 = {};
        for (let e4 of _) {
          let t4 = (i3 - e4.t0) / e4.d;
          t4 >= 0 && t4 <= 1 && (C3[e4.edge] = { u: t4, trip: e4 }), R2[e4.edge] = Math.max(R2[e4.edge], w(b(t4, 0, 1)));
          let r4 = e4.back ? "ask" === e4.edge ? "browser" : "resolver" : "ask" === e4.edge ? "resolver" : h[e4.edge];
          E2[r4] = Math.max(E2[r4], j(i3 - e4.t0 - e4.d, 0.8));
        }
        let D3 = 1 - 0.62 * w((i3 - (x.again - 0.4)) / 0.5), B3 = false;
        for (let e4 of u) {
          let s3 = t3.edges[e4];
          ex(
            n2.edge[e4],
            "--lit",
            (("ask" === e4 ? R2[e4] : R2[e4] * D3) * c2).toFixed(3)
          );
          let a3 = C3[e4], o3 = n2.packet[e4], i4 = n2.trail[e4], d2 = n2.shadow[e4];
          if (!a3) {
            ex(o3, "opacity", "0"), ex(i4, "opacity", "0"), ex(d2, "opacity", "0");
            continue;
          }
          let { u: u2, trip: h2 } = a3, x2 = w(u2) * s3.len, p2 = h2.back ? s3.len - x2 : x2, f2 = (function(e5, t4) {
            let { acc: r4 } = e5, s4 = b(t4, 0, e5.len), a4 = 0, o4 = r4.length - 1;
            for (; o4 - a4 > 1; ) {
              let e6 = a4 + o4 >> 1;
              r4[e6] < s4 ? a4 = e6 : o4 = e6;
            }
            let l3 = (s4 - r4[a4]) / (r4[o4] - r4[a4] || 1), n3 = (e6) => e6[a4] + (e6[o4] - e6[a4]) * l3;
            return { x: n3(e5.xs), y: n3(e5.ys), fx: n3(e5.fx), fy: n3(e5.fy) };
          })(s3, p2), y2 = w((u2 - 0.8) / 0.2), m2 = w(u2 / 0.16);
          ex(
            o3,
            "transform",
            `translate(${T(f2.x)} ${T(f2.y)}) scale(${(1 - 0.5 * y2).toFixed(3)})`
          ), ex(o3, "opacity", (m2 * (1 - y2)).toFixed(3)), ex(o3, "data-kind", h2.kind);
          let g2 = b((f2.fy - f2.y) / s3.lift, 0, 1);
          ex(
            d2,
            "transform",
            `translate(${T(f2.fx)} ${T(f2.fy)}) scale(${(1 - 0.45 * g2).toFixed(3)})`
          ), ex(d2, "opacity", ((0.9 - 0.5 * g2) * m2 * (1 - y2)).toFixed(3));
          let _2 = Math.min(46, x2), v2 = h2.back ? p2 : p2 - _2, k3 = 1e3 / s3.len;
          ex(i4, "stroke-dasharray", `${(_2 * k3).toFixed(2)} 3000`), ex(i4, "stroke-dashoffset", `${(-v2 * k3).toFixed(2)}`), ex(
            i4,
            "opacity",
            (b(u2 / 0.12, 0, 1) * (1 - b((u2 - 0.82) / 0.18, 0, 1))).toFixed(
              3
            )
          ), B3 = true, ex(
            n2.msg,
            "s:transform",
            `translate3d(${(f2.x * l2).toFixed(1)}px, ${(f2.y * l2 - 10).toFixed(1)}px, 0) translate(-50%, -100%)`
          ), ex(
            n2.msg,
            "s:opacity",
            (w(u2 / 0.2) * (1 - w((u2 - 0.78) / 0.2))).toFixed(3)
          ), ex(n2.msg, "data-kind", h2.kind), ex(
            n2.msgText,
            "text",
            r3.messages["query" === h2.kind ? "query" : "answer" === h2.kind ? "answer" : "root" === e4 ? "rootRef" : "tldRef"]
          );
        }
        for (let e4 of (B3 || ex(n2.msg, "s:opacity", "0"), d)) {
          ex(n2.node[e4], "--hit", E2[e4].toFixed(3));
          let t4 = 0;
          for (let r4 of _)
            (r4.back ? "ask" === r4.edge ? "resolver" : h[r4.edge] : "ask" === r4.edge ? "browser" : "resolver") === e4 && (t4 = Math.max(t4, j(i3 - r4.t0, 0.6)));
          ex(n2.port[e4], "fill-opacity", Math.max(t4, E2[e4]).toFixed(3));
        }
        for (let e4 of ["root", "tld", "authoritative"])
          ex(
            n2.led[e4],
            "fill-opacity",
            N(i3, p(e4), f(e4), 0.08, 0.35).toFixed(3)
          );
        n2.page.forEach((e4, t4) => {
          let r4 = w((i3 - x.page - 0.14 * t4) / 0.55) * c2;
          ex(e4, "stroke-dashoffset", (1 - r4).toFixed(4)), ex(e4, "opacity", r4 > 2e-3 ? "1" : "0");
        }), ex(
          n2.lock,
          "fill-opacity",
          ((i3 >= y ? $((i3 - y) / 0.3) : 0) * c2).toFixed(3)
        );
        let S3 = b((i3 - m) / (x.expire - m), 0, 1), q2 = i3 < x.store ? 0 : i3 < m ? $((i3 - x.store) / x.fill) : 1 - S3;
        ex(n2.ring, "stroke-dasharray", `${(1e3 * q2).toFixed(2)} 1000`), ex(
          n2.ring,
          "opacity",
          (q2 < 2e-3 ? 0 : i3 < x.expire ? 1 : 1 - w((i3 - x.expire) / 0.3)).toFixed(3)
        );
        let V2 = N(i3, x.store, x.expire + 0.2, 0.35, 0.35) * c2;
        ex(n2.record, "s:opacity", V2.toFixed(3)), ex(
          n2.record,
          "s:transform",
          `translateY(${(-6 * (1 - $((i3 - x.store) / 0.5))).toFixed(2)}px)`
        ), ex(
          n2.record,
          "data-state",
          i3 >= x.expire ? "expired" : i3 >= x.hit && i3 < x.hit + 0.9 ? "hit" : "live"
        ), ex(
          n2.recordTtl,
          "text",
          i3 >= x.expire ? "Expired" : `TTL ${Math.max(0, Math.ceil(o2 * (i3 < m ? 1 : 1 - S3)))} s`
        );
        let P2 = (e4, t4, r4, s3 = k2) => {
          ex(n2.status[e4], "data-state", t4), ex(n2.statusText[e4], "text", r4), ex(n2.status[e4], "s:opacity", s3.toFixed(3));
        }, W2 = Math.round(s2 * b((i3 - x.ask) / (y - x.ask), 0, 1));
        if (i3 < x.ask ? P2("browser", "idle", "Ready") : i3 < y ? P2("browser", "busy", `Resolving ${W2} ms`) : i3 < y + 0.7 ? P2("browser", "busy", "Connecting") : i3 < x.again ? P2("browser", "done", `Connected in ${s2} ms`) : i3 < g ? P2("browser", "busy", "Resolving") : P2("browser", "done", `Connected in ${a2} ms`), i3 < x.check)
          P2("resolver", "idle", "Waiting");
        else if (i3 < x.root)
          P2(
            "resolver",
            "busy",
            i3 < x.check + 0.35 ? "Checking cache" : "Not cached"
          );
        else if (i3 < p("authoritative") + x.out + x.think) {
          let e4 = i3 < x.tld ? "root" : i3 < x.authoritative ? "tld" : "authoritative";
          P2("resolver", "busy", r3.asking[e4]);
        } else
          i3 < x.hit ? P2("resolver", "done", "Answer cached") : i3 < x.expire ? P2("resolver", "done", "Cache hit") : P2("resolver", "idle", "Expired");
        for (let e4 of ["root", "tld", "authoritative"]) {
          let t4 = p(e4), s3 = f(e4), a3 = (i3 < t4 ? 0 : w((i3 - t4) / 0.25)) * c2;
          i3 < s3 ? P2(e4, "busy", "Looking up", a3) : P2(e4, "authoritative" === e4 ? "done" : "refer", r3.replies[e4], a3);
        }
      },
      [ex]
    ), ef = (0, a.useCallback)(() => {
      let e3 = ec.current;
      if (e3.running || !e3.visible || eh.current.reduced) return;
      e3.running = true;
      let t3 = performance.now(), r3 = (s2) => {
        if (!e3.visible || eh.current.reduced) {
          e3.running = false;
          return;
        }
        let a2 = b((s2 - t3) / 1e3, 0, 0.05);
        t3 = s2;
        let o2 = eh.current.target;
        if (Number.isNaN(e3.rate) && (e3.rate = o2), e3.rateV += (40 * (o2 - e3.rate) - 2 * Math.sqrt(40) * e3.rateV) * a2, e3.rate += e3.rateV * a2, 1e-4 > Math.abs(o2 - e3.rate) && 1e-4 > Math.abs(e3.rateV) && (e3.rate = o2, e3.rateV = 0), e3.t += a2 * e3.rate, ep(e3.t), 0 === e3.rate && 0 === o2 || !e3.visible || eh.current.reduced) {
          e3.running = false;
          return;
        }
        e3.frame = requestAnimationFrame(r3);
      };
      e3.frame = requestAnimationFrame(r3);
    }, [ep]);
    (0, a.useLayoutEffect)(() => {
      let e3 = Y.current;
      if (!e3) return;
      let t3 = () => Q(Math.floor(e3.clientWidth));
      t3();
      let r3 = new ResizeObserver(t3);
      return r3.observe(e3), () => r3.disconnect();
    }, []);
    let [ey, em] = (0, a.useState)(5);
    (0, a.useLayoutEffect)(() => {
      ec.current.cache = /* @__PURE__ */ new Map(), K ? ep(v[ey].rep) : (ep(ec.current.t), ef());
    }, [en, eu, ea, K, ed, ey, ep, ef]), (0, a.useEffect)(() => {
      let e3 = Y.current, t3 = ec.current;
      if (!e3) return;
      let r3 = new IntersectionObserver(([e4]) => {
        t3.visible = e4.isIntersecting && !document.hidden, t3.visible ? ef() : (cancelAnimationFrame(t3.frame), t3.running = false);
      }), s2 = () => {
        t3.visible = !document.hidden, t3.visible ? ef() : (cancelAnimationFrame(t3.frame), t3.running = false);
      };
      return r3.observe(e3), document.addEventListener("visibilitychange", s2), () => {
        r3.disconnect(), document.removeEventListener("visibilitychange", s2), cancelAnimationFrame(t3.frame), t3.running = false;
      };
    }, [ef]);
    let eg = (0, a.useCallback)(
      (e3) => {
        let t3 = ec.current;
        if (eh.current.reduced) return void em(e3);
        let r3 = (t3.t % x.cycle + x.cycle) % x.cycle;
        t3.t = t3.t - r3 + v[e3].start + 1e-3 * (0 !== e3), ep(t3.t), ef();
      },
      [ep, ef]
    ), e_ = (e3) => ({
      onPointerEnter: (t3) => {
        "mouse" === t3.pointerType && G(e3);
      },
      onPointerLeave: () => G((t3) => t3 === e3 ? null : t3)
    }), ev = (e3) => "resolver" === X || X === h[e3], ek = W ?? `DNS resolution for ${e2}. The browser asks a resolver, which asks a root server, the ${ee} TLD server and the nameserver ${es} in turn. Each points to the next until ${es} answers ${t2} and the browser connects in ${i2} ms. The resolver caches the answer for ${r2} seconds, so the next lookup is answered from the cache in one short hop.`, eb = { ...z, ...q ? { "--dns-accent": q } : null }, ew = U || S2 || 0 === B2, e$ = (e3, t3) => `${(e3 / t3 * 100).toFixed(3)}%`, eN = en ? [...d].sort((e3, t3) => en.nodes[e3].cy - en.nodes[t3].cy) : [];
    return (0, s.jsxs)("figure", {
      className: [c().root, I].filter(Boolean).join(" "),
      style: eb,
      "data-ready": !!en || void 0,
      "data-layout": en ? en.wide ? "wide" : "stack" : void 0,
      "data-focus": !!X || void 0,
      children: [
        (0, s.jsx)("div", {
          ref: Y,
          className: c().stage,
          role: "img",
          "aria-label": ek,
          style: en ? { aspectRatio: `${en.w} / ${en.h}` } : void 0,
          children: en && (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("svg", {
                className: c().svg,
                viewBox: `0 0 ${en.w} ${en.h}`,
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                children: [
                  (0, s.jsxs)("g", {
                    children: [
                      u.map(
                        (e3) => (0, s.jsx)(
                          "path",
                          {
                            ref: (t3) => {
                              ei.current.floor[e3] = t3;
                            },
                            className: c().floor,
                            d: en.edges[e3].floorD,
                            "data-dim": null !== X && !ev(e3) || void 0
                          },
                          e3
                        )
                      ),
                      u.map(
                        (e3) => (0, s.jsx)(
                          "ellipse",
                          {
                            ref: (t3) => {
                              ei.current.shadow[e3] = t3;
                            },
                            className: c().shadow,
                            cx: 0,
                            cy: 0,
                            rx: 5,
                            ry: 2.5,
                            opacity: 0
                          },
                          `s-${e3}`
                        )
                      )
                    ]
                  }),
                  eN.map((e3) => {
                    let t3, r3, a2, o2, l2, n2, i3;
                    if (!en) return null;
                    let d2 = en.nodes[e3], u2 = A(d2.cx, d2.cy, d2.a, d2.h), h2 = null !== X && X !== e3 && "resolver" !== X && "resolver" !== e3, x2 = d2.a / 2;
                    return (0, s.jsxs)(
                      "g",
                      {
                        ref: (t4) => {
                          ei.current.node[e3] = t4;
                        },
                        className: c().node,
                        "data-on": X === e3 || void 0,
                        "data-dim": h2 || void 0,
                        ...e_(e3),
                        children: [
                          (0, s.jsx)("polygon", {
                            className: c().faceLeft,
                            points: u2.left
                          }),
                          (0, s.jsx)("polygon", {
                            className: c().faceRight,
                            points: u2.right
                          }),
                          (0, s.jsx)("polygon", {
                            className: c().faceTop,
                            points: u2.top
                          }),
                          "server" === d2.kind && (0, s.jsxs)(s.Fragment, {
                            children: [
                              [1, 2].map((e4) => {
                                let t4 = d2.h * e4 / 3;
                                return (0, s.jsx)(
                                  "line",
                                  {
                                    className: c().rack,
                                    x1: d2.cx - d2.a,
                                    y1: d2.cy + t4,
                                    x2: d2.cx,
                                    y2: d2.cy + x2 + t4
                                  },
                                  e4
                                );
                              }),
                              [1, 2].map((e4) => {
                                let t4 = d2.h * e4 / 3;
                                return (0, s.jsx)(
                                  "line",
                                  {
                                    className: c().rack,
                                    x1: d2.cx,
                                    y1: d2.cy + x2 + t4,
                                    x2: d2.cx + 0.62 * d2.a,
                                    y2: d2.cy + 0.38 * x2 + t4
                                  },
                                  `r${e4}`
                                );
                              }),
                              (0, s.jsx)("circle", {
                                className: c().ledBase,
                                cx: d2.cx + 0.8 * d2.a,
                                cy: d2.cy + 0.2 * x2 + d2.h / 2,
                                r: 2.4
                              }),
                              (0, s.jsx)("circle", {
                                ref: (t4) => {
                                  ei.current.led[e3] = t4;
                                },
                                className: c().led,
                                cx: d2.cx + 0.8 * d2.a,
                                cy: d2.cy + 0.2 * x2 + d2.h / 2,
                                r: 2.4,
                                fillOpacity: 0
                              })
                            ]
                          }),
                          "browser" === d2.kind && (t3 = L(d2.cx, d2.cy, d2.a, 0.1, 0.16), r3 = L(d2.cx, d2.cy, d2.a, 0.9, 0.16), a2 = L(d2.cx, d2.cy, d2.a, 0.16, 0.16), (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("path", {
                                className: c().bar,
                                d: `M${T(t3.x)} ${T(t3.y)} L${T(r3.x)} ${T(r3.y)}`
                              }),
                              (0, s.jsx)("circle", {
                                className: c().lockBase,
                                cx: a2.x,
                                cy: a2.y,
                                r: 1.8
                              }),
                              (0, s.jsx)("circle", {
                                ref: (e4) => {
                                  ei.current.lock = e4;
                                },
                                className: c().lock,
                                cx: a2.x,
                                cy: a2.y,
                                r: 1.8,
                                fillOpacity: 0
                              }),
                              [
                                [0.36, 0.1, 0.84],
                                [0.5, 0.1, 0.66],
                                [0.64, 0.1, 0.76],
                                [0.78, 0.1, 0.5]
                              ].map(([e4, t4, r4], a3) => {
                                let o3 = L(d2.cx, d2.cy, d2.a, t4, e4), l3 = L(d2.cx, d2.cy, d2.a, r4, e4), n3 = `M${T(o3.x)} ${T(o3.y)} L${T(l3.x)} ${T(l3.y)}`;
                                return (0, s.jsxs)(
                                  "g",
                                  {
                                    children: [
                                      (0, s.jsx)("path", {
                                        className: c().ghost,
                                        d: n3
                                      }),
                                      (0, s.jsx)("path", {
                                        ref: (e5) => {
                                          ei.current.page[a3] = e5;
                                        },
                                        className: c().pageLine,
                                        d: n3,
                                        pathLength: 1,
                                        strokeDasharray: "1 1",
                                        strokeDashoffset: 1,
                                        opacity: 0
                                      })
                                    ]
                                  },
                                  a3
                                );
                              })
                            ]
                          })),
                          "resolver" === d2.kind && (o2 = 0.58 * d2.a, l2 = d2.cy - 12, n2 = A(d2.cx, l2, o2, 12), i3 = 0.64 * o2, (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("polygon", {
                                className: c().faceLeft,
                                points: n2.left
                              }),
                              (0, s.jsx)("polygon", {
                                className: c().faceRight,
                                points: n2.right
                              }),
                              (0, s.jsx)("polygon", {
                                className: c().faceTop,
                                points: n2.top
                              }),
                              (0, s.jsx)("path", {
                                className: c().ringTrack,
                                d: M(d2.cx, l2, i3)
                              }),
                              (0, s.jsx)("path", {
                                ref: (e4) => {
                                  ei.current.ring = e4;
                                },
                                className: c().ring,
                                d: M(d2.cx, l2, i3),
                                pathLength: 1e3,
                                strokeDasharray: "0 1000",
                                opacity: 0
                              })
                            ]
                          })),
                          (0, s.jsx)("ellipse", {
                            className: c().portBase,
                            cx: d2.port.x,
                            cy: d2.port.y,
                            rx: 4.5,
                            ry: 2.25
                          }),
                          (0, s.jsx)("ellipse", {
                            ref: (t4) => {
                              ei.current.port[e3] = t4;
                            },
                            className: c().port,
                            cx: d2.port.x,
                            cy: d2.port.y,
                            rx: 4.5,
                            ry: 2.25,
                            fillOpacity: 0
                          }),
                          (0, s.jsx)("polygon", {
                            className: c().hit,
                            points: "resolver" === d2.kind ? A(d2.cx, d2.cy, d2.a, d2.h).outline : u2.outline
                          })
                        ]
                      },
                      e3
                    );
                  }),
                  u.map(
                    (e3) => (0, s.jsxs)(
                      "g",
                      {
                        className: c().route,
                        "data-on": ev(e3) || void 0,
                        "data-dim": null !== X && !ev(e3) || void 0,
                        children: [
                          (0, s.jsx)("path", {
                            ref: (t3) => {
                              ei.current.edge[e3] = t3;
                            },
                            className: c().edge,
                            d: en.edges[e3].d
                          }),
                          (0, s.jsx)("path", {
                            ref: (t3) => {
                              ei.current.trail[e3] = t3;
                            },
                            className: c().trail,
                            d: en.edges[e3].d,
                            pathLength: 1e3,
                            opacity: 0
                          }),
                          (0, s.jsx)("circle", {
                            ref: (t3) => {
                              ei.current.packet[e3] = t3;
                            },
                            className: c().packet,
                            cx: 0,
                            cy: 0,
                            r: 4.5,
                            opacity: 0,
                            "data-kind": "query"
                          })
                        ]
                      },
                      `e-${e3}`
                    )
                  )
                ]
              }),
              d.map((a2) => {
                let o2 = en.nodes[a2], l2 = er[a2], n2 = !en.wide && "browser" === a2, i3 = n2 ? o2.cy - o2.a / 2 - 12 : o2.floor + o2.a / 2 + 12;
                return (0, s.jsxs)(
                  "div",
                  {
                    className: c().label,
                    "data-on": X === a2 || void 0,
                    "data-above": n2 || void 0,
                    style: { left: e$(o2.cx, en.w), top: e$(i3, en.h) },
                    ...e_(a2),
                    children: [
                      (0, s.jsxs)("span", {
                        className: c().name,
                        children: [
                          (0, s.jsx)(R, { node: l2, className: c().mark }),
                          l2.label
                        ]
                      }),
                      l2.meta && (0, s.jsx)("span", {
                        className: c().meta,
                        children: l2.meta
                      }),
                      (0, s.jsxs)("span", {
                        ref: (e3) => {
                          ei.current.status[a2] = e3;
                        },
                        className: c().status,
                        "data-state": "idle",
                        children: [
                          (0, s.jsx)("span", {
                            className: c().dot,
                            "aria-hidden": "true"
                          }),
                          (0, s.jsx)("span", {
                            ref: (e3) => {
                              ei.current.statusText[a2] = e3;
                            },
                            children: "browser" === a2 ? "Ready" : "resolver" === a2 ? "Waiting" : "Looking up"
                          })
                        ]
                      }),
                      "resolver" === a2 && (0, s.jsxs)("span", {
                        ref: (e3) => {
                          ei.current.record = e3;
                        },
                        className: c().record,
                        style: { opacity: 0 },
                        children: [
                          (0, s.jsx)("span", {
                            className: c().recordName,
                            children: e2
                          }),
                          (0, s.jsxs)("span", {
                            className: c().recordRow,
                            children: [
                              (0, s.jsxs)("span", {
                                className: c().recordValue,
                                children: ["A ", t2]
                              }),
                              (0, s.jsxs)("span", {
                                ref: (e3) => {
                                  ei.current.recordTtl = e3;
                                },
                                className: c().recordTtl,
                                children: ["TTL ", r2, " s"]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  a2
                );
              }),
              d.map((e3) => {
                let t3 = en.nodes[e3], r3 = er[e3].detail;
                if (!r3) return null;
                let a2 = t3.cy - ("resolver" === t3.kind ? 12 + 0.58 * t3.a / 2 : t3.a / 2) - 10, o2 = t3.cx / en.w;
                return (0, s.jsx)(
                  "span",
                  {
                    className: c().tag,
                    "data-show": X === e3 || void 0,
                    "data-align": o2 > 0.7 ? "end" : o2 < 0.3 ? "start" : "center",
                    style: { left: e$(t3.cx, en.w), top: e$(a2, en.h) },
                    "aria-hidden": "true",
                    children: r3
                  },
                  `tag-${e3}`
                );
              }),
              (0, s.jsx)("span", {
                ref: (e3) => {
                  ei.current.msg = e3;
                },
                className: c().msg,
                style: { opacity: 0 },
                "aria-hidden": "true",
                children: (0, s.jsx)("span", {
                  ref: (e3) => {
                    ei.current.msgText = e3;
                  },
                  children: `A? ${e2}`
                })
              })
            ]
          })
        }),
        V && (0, s.jsxs)("div", {
          className: c().controls,
          children: [
            !K && (0, s.jsx)("button", {
              type: "button",
              className: c().toggle,
              "aria-label": ew ? "Play" : "Pause",
              "aria-pressed": U,
              disabled: S2 || 0 === B2,
              onClick: () => J((e3) => !e3),
              children: ew ? (0, s.jsx)(l.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }) : (0, s.jsx)(n.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, s.jsx)("div", {
              className: c().segments,
              role: "group",
              "aria-label": "Lookup steps",
              children: v.map(
                (e3, t3) => (0, s.jsxs)(
                  "button",
                  {
                    ref: (e4) => {
                      ei.current.seg[t3] = e4;
                    },
                    type: "button",
                    className: c().seg,
                    "aria-label": `Step ${t3 + 1} of ${v.length}: ${e3.title}`,
                    onClick: () => eg(t3),
                    onKeyDown: (e4) => {
                      let r3;
                      !((r3 = "ArrowRight" === e4.key ? t3 + 1 : "ArrowLeft" === e4.key ? t3 - 1 : "Home" === e4.key ? 0 : "End" === e4.key ? v.length - 1 : -1) < 0) && !(r3 >= v.length) && (e4.preventDefault(), ei.current.seg[r3]?.focus(), eg(r3));
                    },
                    children: [
                      (0, s.jsx)("span", {
                        className: c().track,
                        children: (0, s.jsx)("span", {
                          ref: (e4) => {
                            ei.current.fill[t3] = e4;
                          },
                          className: c().fill
                        })
                      }),
                      (0, s.jsx)("span", {
                        className: c().segLabel,
                        children: 2 === t3 ? ee : e3.short
                      })
                    ]
                  },
                  e3.short
                )
              )
            })
          ]
        }),
        P && (0, s.jsxs)("figcaption", {
          ref: (e3) => {
            ei.current.caption = e3;
          },
          className: c().caption,
          "aria-hidden": "true",
          children: [
            (0, s.jsx)("span", {
              ref: (e3) => {
                ei.current.capTitle = e3;
              },
              className: c().capTitle,
              children: v[0].title
            }),
            (0, s.jsx)("span", {
              ref: (e3) => {
                ei.current.capText = e3;
              },
              className: c().capText,
              children: ea.captions[0]
            })
          ]
        })
      ]
    });
  }
  var C = r(56624), D = r.n(C);
  function B() {
    return (0, s.jsx)("div", {
      className: D().demo,
      "data-canvas": "wide",
      children: (0, s.jsx)(E, {
        domain: "app.acme.dev",
        address: "203.0.113.24",
        ttl: 300,
        nodes: {
          resolver: {
            label: "Resolver",
            meta: "1.1.1.1",
            icon: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
            color: "#F38020"
          }
        }
      })
    });
  }
  let S = B;
}

__m(__module,__exports,__require);
}