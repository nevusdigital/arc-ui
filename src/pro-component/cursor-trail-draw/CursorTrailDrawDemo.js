function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { CursorTrailDrawDemo: () => E, default: () => q });
  var a = r(95155), l = r(12115), n = r(18310), s = r(80642), i = r(25354), o = r(64577), u = r(58081), h = r(51811);
  let c = {
    name: "wand",
    size: 24,
    node: [
      ["path", { d: "M15 4V2", key: "z1p9b7" }],
      ["path", { d: "M15 16v-2", key: "px0unx" }],
      ["path", { d: "M8 9h2", key: "1g203m" }],
      ["path", { d: "M20 9h2", key: "19tzq7" }],
      ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
      ["path", { d: "M15 9h.01", key: "x1ddxp" }],
      ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
      ["path", { d: "m3 21 9-9", key: "1jfql5" }],
      ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]
    ]
  };
  c.node;
  let d = (0, h.A)(c);
  var p = r(61827), f = r(15330), m = r(25879), g = r(7770), k = r(52906), y = r.n(k);
  let w = [
    { id: "ink", label: "Ink", value: "var(--foreground)" },
    { id: "accent", label: "Accent", value: "var(--ctd-accent)" },
    { id: "red", label: "Red", value: "var(--danger)" }
  ], b = {
    freehand: "stroke",
    line: "line",
    circle: "circle",
    ellipse: "ellipse",
    rectangle: "rectangle",
    square: "square",
    triangle: "triangle",
    polygon: "shape"
  }, M = (e2) => (Math.round(10 * e2) / 10).toString(), v = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), x = (e2, t2) => Math.hypot(e2.x - t2.x, e2.y - t2.y);
  function _(e2) {
    let t2 = 0;
    for (let r2 = 1; r2 < e2.length; r2++) t2 += x(e2[r2 - 1], e2[r2]);
    return t2;
  }
  function A(e2, t2) {
    if (e2.length < 2)
      return Array.from({ length: t2 }, () => ({
        ...e2[0] ?? { x: 0, y: 0, w: 1 }
      }));
    let r2 = _(e2);
    if (r2 < 1e-6) return Array.from({ length: t2 }, () => ({ ...e2[0] }));
    let a2 = [{ ...e2[0] }], l2 = r2 / (t2 - 1), n2 = 0, s2 = 1, i2 = e2[0];
    for (; a2.length < t2 - 1 && s2 < e2.length; ) {
      let t3 = e2[s2], r3 = x(i2, t3);
      if (n2 + r3 >= l2 && r3 > 0) {
        let e3 = (l2 - n2) / r3, s3 = {
          x: i2.x + (t3.x - i2.x) * e3,
          y: i2.y + (t3.y - i2.y) * e3,
          w: i2.w + (t3.w - i2.w) * e3
        };
        a2.push(s3), i2 = s3, n2 = 0;
      } else n2 += r3, i2 = t3, s2++;
    }
    for (; a2.length < t2; ) a2.push({ ...e2[e2.length - 1] });
    return a2;
  }
  function $(e2) {
    let t2 = e2.length;
    if (!t2) return "";
    if (1 === t2 || _(e2) < 0.25 * e2[0].w) {
      let { x: t3, y: r3 } = e2[0], a3 = Math.max(0.5, 0.55 * e2[0].w);
      return `M${M(t3 - a3)} ${M(r3)}a${M(a3)} ${M(a3)} 0 1 0 ${M(2 * a3)} 0a${M(a3)} ${M(a3)} 0 1 0 ${M(-(2 * a3))} 0Z`;
    }
    let r2 = [], a2 = [], l2 = 0, n2 = 1;
    for (let s3 = 0; s3 < t2; s3++) {
      let i3 = e2[Math.max(0, s3 - 1)], o3 = e2[Math.min(t2 - 1, s3 + 1)], u2 = o3.x - i3.x, h2 = o3.y - i3.y, c2 = Math.hypot(u2, h2);
      c2 > 1e-6 && (l2 = -h2 / c2, n2 = u2 / c2);
      let d2 = e2[s3].w / 2;
      r2.push([e2[s3].x + l2 * d2, e2[s3].y + n2 * d2]), a2.push([e2[s3].x - l2 * d2, e2[s3].y - n2 * d2]);
    }
    let s2 = (e3) => {
      let t3 = "";
      for (let r4 = 1; r4 < e3.length - 1; r4++) {
        let a3 = [(e3[r4][0] + e3[r4 + 1][0]) / 2, (e3[r4][1] + e3[r4 + 1][1]) / 2];
        t3 += `Q${M(e3[r4][0])} ${M(e3[r4][1])} ${M(a3[0])} ${M(a3[1])}`;
      }
      let r3 = e3[e3.length - 1];
      return t3 + `L${M(r3[0])} ${M(r3[1])}`;
    }, i2 = M(Math.max(0.1, e2[t2 - 1].w / 2)), o2 = M(Math.max(0.1, e2[0].w / 2));
    return a2.reverse(), `M${M(r2[0][0])} ${M(r2[0][1])}${s2(r2)}A${i2} ${i2} 0 0 0 ${M(a2[0][0])} ${M(a2[0][1])}${s2(a2)}A${o2} ${o2} 0 0 0 ${M(r2[0][0])} ${M(r2[0][1])}Z`;
  }
  function j(e2, t2, r2) {
    let a2 = r2[0] - t2[0], l2 = r2[1] - t2[1], n2 = a2 * a2 + l2 * l2, s2 = n2 ? v(((e2[0] - t2[0]) * a2 + (e2[1] - t2[1]) * l2) / n2, 0, 1) : 0;
    return Math.hypot(e2[0] - t2[0] - a2 * s2, e2[1] - t2[1] - l2 * s2);
  }
  function C(e2, t2) {
    if (e2.length < 3) return e2;
    let r2 = 0, a2 = 0;
    for (let t3 = 1; t3 < e2.length - 1; t3++) {
      let l3 = j(e2[t3], e2[0], e2[e2.length - 1]);
      l3 > r2 && (r2 = l3, a2 = t3);
    }
    if (r2 <= t2) return [e2[0], e2[e2.length - 1]];
    let l2 = C(e2.slice(0, a2 + 1), t2), n2 = C(e2.slice(a2), t2);
    return [...l2.slice(0, -1), ...n2];
  }
  let S = (e2, t2) => [
    e2[0] * Math.cos(t2) - e2[1] * Math.sin(t2),
    e2[0] * Math.sin(t2) + e2[1] * Math.cos(t2)
  ], N = (e2) => {
    let t2 = 0;
    for (let r2 = 0; r2 < e2.length; r2++) {
      let a2 = e2[r2], l2 = e2[(r2 + 1) % e2.length];
      t2 += a2[0] * l2[1] - l2[0] * a2[1];
    }
    return t2 / 2;
  };
  function D(e2, t2) {
    let r2 = e2.map((t3, r3) => {
      let a3 = e2[(r3 + 1) % e2.length];
      return Math.hypot(a3[0] - t3[0], a3[1] - t3[1]);
    }), a2 = r2.reduce((e3, t3) => e3 + t3, 0) || 1, l2 = [], n2 = t2;
    return e2.forEach((s2, i2) => {
      let o2 = e2[(i2 + 1) % e2.length], u2 = i2 === e2.length - 1 ? n2 : Math.max(1, Math.round(t2 * r2[i2] / a2));
      n2 -= u2;
      for (let e3 = 0; e3 < u2; e3++)
        l2.push([
          s2[0] + (o2[0] - s2[0]) * e3 / u2,
          s2[1] + (o2[1] - s2[1]) * e3 / u2
        ]);
    }), l2.slice(0, t2);
  }
  function P(e2) {
    let t2 = e2 > 900, r2 = t2 ? 1e3 : Math.min(1e3, 1.6 * e2), a2 = r2 * (t2 ? 0.13 : 0.12), l2 = t2 ? [500, 0.3 * e2] : [500 - 0.27 * r2, 0.46 * e2], n2 = t2 ? 420 : 0.3 * r2, s2 = t2 ? 230 : 0.19 * r2, i2 = t2 ? [500, 0.68 * e2] : [500 + 0.24 * r2, 0.46 * e2], o2 = [];
    for (let e3 = 0; e3 <= 90; e3++) {
      let t3 = -1.9 + e3 / 90 * (2 * Math.PI + 0.45), r3 = 1 + 0.045 * Math.sin(3 * t3 + 1.2) + 0.025 * Math.sin(5 * t3 + 0.4) + e3 / 90 * 0.03;
      o2.push([
        l2[0] + Math.cos(t3) * a2 * 1.06 * r3,
        l2[1] + Math.sin(t3) * a2 * 0.96 * r3
      ]);
    }
    let u2 = [], h2 = n2 + 16, c2 = s2 + 8, d2 = i2[0] - h2 / 2, p2 = i2[1] + (t2 ? 10 : 4) - c2 / 2, f2 = [
      [d2 + 6, p2 + 2],
      [d2 + h2 - 4, p2 - 6],
      [d2 + h2 + 5, p2 + c2 + 3],
      [d2 - 5, p2 + c2 - 2],
      [d2 + 10, p2 + 5]
    ];
    for (let e3 = 0; e3 < f2.length - 1; e3++) {
      let t3 = f2[e3], r3 = f2[e3 + 1];
      for (let a3 = 0; a3 < 24; a3++) {
        let l3 = a3 / 24, n3 = Math.sin(l3 * Math.PI) * (e3 % 2 ? 5 : -4), s3 = -(r3[1] - t3[1]), i3 = r3[0] - t3[0], o3 = Math.hypot(s3, i3) || 1;
        u2.push([
          t3[0] + (r3[0] - t3[0]) * l3 + s3 / o3 * n3,
          t3[1] + (r3[1] - t3[1]) * l3 + i3 / o3 * n3
        ]);
      }
    }
    u2.push(f2[f2.length - 1]);
    let m2 = t2 ? [l2[0], l2[1] + a2 + 22] : [l2[0] + 1.06 * a2 + 22, l2[1]], g2 = t2 ? [i2[0], i2[1] - s2 / 2 - 22] : [i2[0] - n2 / 2 - 22, i2[1]], k2 = [];
    for (let e3 = 0; e3 <= 30; e3++) {
      let r3 = e3 / 30, a3 = 4 * Math.sin(r3 * Math.PI);
      k2.push(
        t2 ? [m2[0] + a3, m2[1] + (g2[1] - m2[1]) * r3] : [m2[0] + (g2[0] - m2[0]) * r3, m2[1] - a3]
      );
    }
    let y2 = [], w2 = [i2[0], i2[1] + s2 / 2 + (t2 ? 48 : 60)];
    for (let e3 = 0; e3 <= 40; e3++) {
      let t3 = e3 / 40;
      y2.push([
        w2[0] - 0.42 * n2 + 0.84 * n2 * t3,
        w2[1] + 6 * Math.sin(t3 * Math.PI * 2) - 4 * t3
      ]);
    }
    let b2 = (e3) => {
      let t3 = e3.map(([e4, t4]) => ({ x: e4, y: t4, w: 0 }));
      return A(t3, Math.max(8, Math.ceil(_(t3) / 4))).map((e4) => [e4.x, e4.y]);
    };
    return [
      { tool: "pen", color: 0, path: b2(o2), ms: 1100, pause: 560 },
      { tool: "pen", color: 0, path: b2(u2), ms: 1300, pause: 560 },
      { tool: "pen", color: 1, path: b2(k2), ms: 560, pause: 620 },
      { tool: "laser", color: 0, path: b2(y2), ms: 820, pause: 0 }
    ];
  }
  function I(e2, t2) {
    let r2 = v(t2 < 0.5 ? 2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 2) / 2, 0, 1) * (e2.length - 1), a2 = Math.floor(r2), l2 = r2 - a2, n2 = e2[a2], s2 = e2[Math.min(e2.length - 1, a2 + 1)];
    return [n2[0] + (s2[0] - n2[0]) * l2, n2[1] + (s2[1] - n2[1]) * l2];
  }
  function L(e2, t2) {
    return {
      pts: [],
      tip: [e2, t2],
      raw: [e2, t2],
      rawPrev: [e2, t2],
      pr: 0.6,
      travel: 0,
      idle: 0,
      pressure: null
    };
  }
  function R({
    label: e2 = "Whiteboard",
    colors: t2 = w,
    defaultTool: r2 = "pen",
    defaultSnap: h2 = true,
    size: c2 = 4,
    smoothing: k2 = 0.5,
    laserFade: z2 = 700,
    intro: T2 = true,
    speed: E2 = 1,
    paused: q2 = false,
    accent: H,
    hint: Z = "Draw a rough circle, box or line. It snaps clean.",
    onChange: K,
    className: O,
    style: W
  }) {
    let V = (0, l.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), B = !!(0, n.I)() || q2, [F, U] = (0, l.useState)(r2), [Y, J] = (0, l.useState)(t2[0]?.id ?? "ink"), [Q, X] = (0, l.useState)(h2), [G, ee] = (0, l.useState)([]), [et, er] = (0, l.useState)(null), [ea, el] = (0, l.useState)(""), [en, es] = (0, l.useState)(false), [ei, eo] = (0, l.useState)(false), eu = (0, l.useRef)(null), eh = (0, l.useRef)(null), ec = (0, l.useRef)(null), ed = (0, l.useRef)(null), ep = (0, l.useRef)(null), ef = (0, l.useRef)(null), em = (0, l.useRef)(null), eg = (0, l.useRef)(null), ek = (0, l.useRef)(null), ey = (0, l.useRef)(null), ew = (0, l.useRef)({
      w: 0,
      h: 0,
      u: 1,
      H: 625,
      items: /* @__PURE__ */ new Map(),
      order: [],
      stroke: null,
      strokeColor: "ink",
      laser: [],
      laserStroke: null,
      frame: 0,
      last: 0,
      inView: false,
      visible: true,
      pointer: null,
      hover: false,
      nibAt: [500, 300],
      kbd: false,
      keys: /* @__PURE__ */ new Set(),
      kDown: false,
      intro: null,
      introDone: false,
      seq: 0
    }), eb = (0, l.useRef)({
      tool: F,
      colorId: Y,
      snap: Q,
      size: c2,
      smoothing: k2,
      laserFade: z2,
      speed: E2,
      still: B,
      colors: t2,
      onChange: K
    });
    (0, l.useLayoutEffect)(() => {
      eb.current = {
        tool: F,
        colorId: Y,
        snap: Q,
        size: c2,
        smoothing: k2,
        laserFade: z2,
        speed: E2,
        still: B,
        colors: t2,
        onChange: K
      };
    });
    let eM = (0, l.useCallback)(
      (e3) => el((t3) => t3 === e3 ? e3 + "\xA0" : e3),
      []
    ), ev = (0, l.useCallback)(
      (e3) => eb.current.colors.find((t3) => t3.id === e3)?.value ?? "var(--foreground)",
      []
    ), ex = (0, l.useCallback)(
      (e3) => {
        let t3 = e3.el;
        if (!t3) return;
        t3.style.color = ev(e3.color);
        let r3 = 2e-3 > Math.abs(e3.p - e3.target) && 0.01 > Math.abs(e3.v);
        if (e3.to && e3.from && e3.clean && r3 && 1 === e3.target) {
          t3.setAttribute("d", e3.clean), t3.setAttribute("stroke-width", M(e3.mean)), t3.dataset.mode = "clean";
          return;
        }
        if (t3.dataset.mode = "ink", t3.removeAttribute("stroke-width"), !e3.to || !e3.from || r3 && 0 === e3.target)
          return void t3.setAttribute("d", $(e3.raw));
        let a2 = e3.p, l2 = v(a2, 0, 1), n2 = e3.from.map((t4, r4) => ({
          x: t4.x + (e3.to[r4][0] - t4.x) * a2,
          y: t4.y + (e3.to[r4][1] - t4.y) * a2,
          w: t4.w + (e3.mean - t4.w) * l2
        }));
        t3.setAttribute("d", $(n2));
      },
      [ev]
    ), e_ = (0, l.useCallback)(() => {
      let e3 = ew.current, t3 = ef.current, r3 = em.current;
      if (!t3 || !r3) return;
      let a2 = eb.current, l2 = e3.intro ? e3.intro.script[e3.intro.idx] : null, n2 = l2 ? "laser" === l2.tool : "laser" === a2.tool, s2 = e3.hover || e3.kbd || !!l2, i2 = n2 ? 4.5 * e3.u : Math.max(1.5, a2.size * e3.u * 0.6), [o2, u2] = e3.nibAt;
      for (let e4 of [t3, r3])
        e4.setAttribute("cx", M(o2)), e4.setAttribute("cy", M(u2)), e4.dataset.tool = n2 ? "laser" : "pen";
      t3.setAttribute("r", M(i2)), r3.setAttribute("r", M(n2 ? 11 * e3.u : i2 + 6 * e3.u)), r3.setAttribute("stroke-width", M(1.25 * e3.u)), t3.toggleAttribute("data-show", s2), r3.toggleAttribute("data-show", s2 && (n2 || e3.kbd || !!l2)), r3.toggleAttribute("data-down", e3.kDown || null != e3.pointer);
      let h3 = n2 ? "var(--ctd-accent)" : ev(l2 ? a2.colors[l2.color]?.id ?? "ink" : a2.colorId);
      t3.style.color = h3, r3.style.color = h3;
    }, [ev]), eA = (0, l.useCallback)(() => {
      let e3 = ew.current, t3 = ed.current;
      if (t3) {
        if (!e3.stroke || !e3.stroke.pts.length)
          return void t3.setAttribute("d", "");
        t3.setAttribute("d", $(e3.stroke.pts));
      }
    }, []), e$ = (0, l.useCallback)((e3) => {
      let t3 = ew.current, r3 = ep.current;
      if (!r3) return;
      let a2 = Math.max(
        1,
        eb.current.laserFade / Math.max(0.1, eb.current.speed)
      );
      if (eb.current.still) return void r3.setAttribute("d", "");
      let l2 = [];
      for (let r4 of t3.laser) {
        let n2 = 1 - (e3 - r4.t) / a2;
        n2 > 0 && l2.push({ x: r4.x, y: r4.y, w: 7 * t3.u * Math.pow(n2, 0.9) });
      }
      r3.setAttribute("d", l2.length > 1 ? $(l2) : "");
    }, []), ej = (0, l.useCallback)(() => {
      let e3 = ew.current;
      return e3.order.map((t3) => e3.items.get(t3)).filter(Boolean).map((e4) => ({
        id: e4.id,
        shape: e4.shape,
        color: e4.color,
        width: e4.mean,
        points: e4.to && 1 === e4.target ? e4.to.map((e6) => [e6[0], e6[1]]) : e4.raw.map((e6) => [e6.x, e6.y])
      }));
    }, []), eC = (0, l.useCallback)(() => {
      eb.current.onChange?.(ej());
    }, [ej]), eS = (0, l.useCallback)((e3, t3) => {
      ey.current && clearTimeout(ey.current), er({ id: e3, shape: t3 }), ey.current = setTimeout(() => er(null), 4200);
    }, []), eN = (0, l.useCallback)(
      (e3, t3, r3) => {
        let a2 = ew.current;
        if (!e3.length) return;
        let l2 = 0;
        for (let t4 = e3.length - 1; t4 > 0 && l2 < 18 * a2.u; t4--)
          e3[t4].w *= 0.45 + 0.55 * (l2 / (18 * a2.u)), l2 += x(e3[t4], e3[t4 - 1]);
        let n2 = e3.reduce((e4, t4) => e4 + t4.w, 0) / e3.length, s2 = r3.snap ? (function(e4, t4) {
          let r4 = _(e4);
          if (r4 / t4 < 28) return null;
          let a3 = A(e4, 72).map((e6) => [e6.x, e6.y]), l3 = 1 / 0, n3 = 1 / 0, s3 = -1 / 0, i3 = -1 / 0;
          for (let [e6, t5] of a3)
            l3 = Math.min(l3, e6), n3 = Math.min(n3, t5), s3 = Math.max(s3, e6), i3 = Math.max(i3, t5);
          let o3 = Math.hypot(s3 - l3, i3 - n3) || 1, u2 = a3[0], h3 = a3[a3.length - 1], c3 = Math.hypot(h3[0] - u2[0], h3[1] - u2[1]);
          if (c3 / r4 > 0.94) {
            let e6 = Math.atan2(h3[1] - u2[1], h3[0] - u2[0]), t5 = Math.PI / 4 * Math.round(e6 / (Math.PI / 4));
            Math.abs(e6 - t5) < 7 * Math.PI / 180 && (e6 = t5);
            let r5 = [u2[0] + Math.cos(e6) * c3, u2[1] + Math.sin(e6) * c3];
            return {
              shape: "line",
              target: Array.from({ length: 97 }, (e7, t6) => [
                u2[0] + (r5[0] - u2[0]) * t6 / 96,
                u2[1] + (r5[1] - u2[1]) * t6 / 96
              ]),
              d: `M${M(u2[0])} ${M(u2[1])}L${M(r5[0])} ${M(r5[1])}`
            };
          }
          if (c3 > 0.3 * o3 || r4 < 1.6 * o3) return null;
          let d2 = a3.length - 1, p2 = 1 / 0;
          for (let e6 = Math.floor(0.6 * a3.length); e6 < a3.length; e6++) {
            let t5 = Math.hypot(a3[e6][0] - u2[0], a3[e6][1] - u2[1]);
            t5 < p2 && (p2 = t5, d2 = e6);
          }
          let f2 = a3.slice(0, d2 + 1), m2 = f2.slice(0, -1).length > 8 ? f2 : a3, g2 = 0, k3 = 0;
          for (let e6 of m2) g2 += e6[0], k3 += e6[1];
          g2 /= m2.length, k3 /= m2.length;
          let y2 = 0, w2 = 0, b2 = 0;
          for (let e6 of m2) {
            let t5 = e6[0] - g2, r5 = e6[1] - k3;
            y2 += t5 * t5, w2 += r5 * r5, b2 += t5 * r5;
          }
          let x2 = 0.5 * Math.atan2(2 * b2, y2 - w2), $2 = m2.map((e6) => S([e6[0] - g2, e6[1] - k3], -x2)), P2 = 1 / 0, I2 = -1 / 0, L2 = 1 / 0, R2 = -1 / 0;
          for (let [e6, t5] of $2)
            P2 = Math.min(P2, e6), I2 = Math.max(I2, e6), L2 = Math.min(L2, t5), R2 = Math.max(R2, t5);
          let z3 = (I2 - P2) / 2, T3 = (R2 - L2) / 2, E3 = S([(P2 + I2) / 2, (L2 + R2) / 2], x2), q3 = g2 + E3[0], H2 = k3 + E3[1], Z2 = 0;
          for (let e6 of m2) {
            let t5 = S([e6[0] - q3, e6[1] - H2], -x2);
            Z2 += Math.abs(
              Math.hypot(t5[0] / (z3 || 1), t5[1] / (T3 || 1)) - 1
            );
          }
          Z2 = Z2 / m2.length * ((z3 + T3) / 2) / o3;
          let K2 = 0, O2 = -1;
          for (let e6 = 0; e6 < m2.length; e6++) {
            let t5 = Math.hypot(m2[e6][0] - g2, m2[e6][1] - k3);
            t5 > O2 && (O2 = t5, K2 = e6);
          }
          let W2 = [...m2.slice(K2), ...m2.slice(0, K2)], V2 = 0;
          O2 = -1;
          for (let e6 = 0; e6 < W2.length; e6++) {
            let t5 = Math.hypot(W2[e6][0] - W2[0][0], W2[e6][1] - W2[0][1]);
            t5 > O2 && (O2 = t5, V2 = e6);
          }
          let B2 = 0.055 * o3, F2 = C(W2.slice(0, V2 + 1), B2), U2 = C([...W2.slice(V2), W2[0]], B2), Y2 = [...F2.slice(0, -1), ...U2.slice(0, -1)];
          Y2 = Y2.filter((e6, t5) => {
            let r5 = Y2[(t5 + Y2.length - 1) % Y2.length];
            return Math.hypot(e6[0] - r5[0], e6[1] - r5[1]) > 0.12 * o3 || Y2.length <= 3;
          });
          let J2 = true;
          for (; J2 && Y2.length > 3; ) {
            J2 = false;
            for (let e6 = 0; e6 < Y2.length; e6++) {
              let t5 = Y2[(e6 + Y2.length - 1) % Y2.length], r5 = Y2[e6], a4 = Y2[(e6 + 1) % Y2.length], l4 = Math.atan2(r5[1] - t5[1], r5[0] - t5[0]), n4 = Math.abs(Math.atan2(a4[1] - r5[1], a4[0] - r5[0]) - l4);
              if (n4 > Math.PI && (n4 = 2 * Math.PI - n4), n4 < 28 * Math.PI / 180) {
                Y2.splice(e6, 1), J2 = true;
                break;
              }
            }
          }
          let Q2 = 1 / 0;
          if (3 === Y2.length || 4 === Y2.length) {
            for (let e6 of (Q2 = 0, m2)) {
              let t5 = 1 / 0;
              for (let r5 = 0; r5 < Y2.length; r5++)
                t5 = Math.min(t5, j(e6, Y2[r5], Y2[(r5 + 1) % Y2.length]));
              Q2 += t5;
            }
            Q2 = Q2 / m2.length / o3;
          }
          let X2 = N(f2) >= 0 ? 1 : -1, G2 = (e6) => {
            let t5 = N(e6) * X2 < 0 ? [...e6].reverse() : e6, r5 = 0, a4 = 1 / 0;
            t5.forEach((e7, t6) => {
              let l5 = Math.hypot(e7[0] - u2[0], e7[1] - u2[1]);
              l5 < a4 && (a4 = l5, r5 = t6);
            });
            let l4 = [...t5.slice(r5), ...t5.slice(0, r5)];
            return [...l4, l4[0]];
          };
          if (Q2 < 0.034 && Q2 < 1.15 * Z2) {
            if (4 === Y2.length) {
              if (Y2.map((e7, t5) => {
                let r5 = Y2[(t5 + Y2.length - 1) % Y2.length], a4 = Y2[(t5 + 1) % Y2.length], l4 = [r5[0] - e7[0], r5[1] - e7[1]], n4 = [a4[0] - e7[0], a4[1] - e7[1]];
                return Math.acos(
                  v(
                    (l4[0] * n4[0] + l4[1] * n4[1]) / (Math.hypot(...l4) * Math.hypot(...n4) || 1),
                    -1,
                    1
                  )
                );
              }).every(
                (e7) => Math.abs(e7 - Math.PI / 2) < 24 * Math.PI / 180
              )) {
                let e7 = 0, t5 = 0;
                Y2.forEach((r6, a5) => {
                  let l5 = Y2[(a5 + 1) % 4], n5 = Math.atan2(l5[1] - r6[1], l5[0] - r6[0]), s5 = Math.hypot(l5[0] - r6[0], l5[1] - r6[1]);
                  e7 += Math.cos(4 * n5) * s5, t5 += Math.sin(4 * n5) * s5;
                });
                let r5 = Math.atan2(t5, e7) / 4;
                Math.abs(r5) < 9 * Math.PI / 180 && (r5 = 0);
                let a4 = Y2.map((e8) => S([e8[0] - g2, e8[1] - k3], -r5)), l4 = 0, n4 = 0, s4 = 0, i4 = 0, o4 = a4.map((e8) => e8[0]).sort((e8, t6) => e8 - t6), u3 = a4.map((e8) => e8[1]).sort((e8, t6) => e8 - t6);
                l4 = (o4[0] + o4[1]) / 2, n4 = (o4[2] + o4[3]) / 2, s4 = (u3[0] + u3[1]) / 2, i4 = (u3[2] + u3[3]) / 2;
                let h4 = n4 - l4, c4 = i4 - s4, d3 = Math.abs(h4 - c4) / Math.max(h4, c4) < 0.1;
                if (d3) {
                  let e8 = (h4 + c4) / 2, t6 = (l4 + n4) / 2, r6 = (s4 + i4) / 2;
                  l4 = t6 - e8 / 2, n4 = t6 + e8 / 2, s4 = r6 - e8 / 2, i4 = r6 + e8 / 2, h4 = c4 = e8;
                }
                let p3 = [
                  [l4, s4],
                  [n4, s4],
                  [n4, i4],
                  [l4, i4]
                ].map((e8) => {
                  let t6 = S(e8, r5);
                  return [t6[0] + g2, t6[1] + k3];
                });
                return {
                  shape: d3 ? "square" : "rectangle",
                  target: G2(D(p3, 96)),
                  d: `M${p3.map((e8) => `${M(e8[0])} ${M(e8[1])}`).join("L")}Z`
                };
              }
              return {
                shape: "polygon",
                target: G2(D(Y2, 96)),
                d: `M${Y2.map((e7) => `${M(e7[0])} ${M(e7[1])}`).join("L")}Z`
              };
            }
            let e6 = Y2.map((e7) => [...e7]);
            for (let t5 = 0; t5 < 3; t5++) {
              let r5 = e6[t5], a4 = e6[(t5 + 1) % 3];
              if (Math.abs(
                Math.sin(
                  Math.atan2(a4[1] - r5[1], a4[0] - r5[0]) % Math.PI
                )
              ) < Math.sin(8 * Math.PI / 180)) {
                let e7 = (r5[1] + a4[1]) / 2;
                r5[1] = e7, a4[1] = e7;
                break;
              }
            }
            return {
              shape: "triangle",
              target: G2(D(e6, 96)),
              d: `M${e6.map((e7) => `${M(e7[0])} ${M(e7[1])}`).join("L")}Z`
            };
          }
          if (Z2 < 0.05) {
            let e6 = z3 / (T3 || 1), t5 = "ellipse";
            if (e6 > 0.82 && e6 < 1.22)
              z3 = T3 = (z3 + T3) / 2, x2 = 0, t5 = "circle";
            else {
              let e7 = (180 * x2 / Math.PI % 180 + 180) % 180;
              e7 < 10 || e7 > 170 ? x2 = 0 : 10 > Math.abs(e7 - 90) && (x2 = 0, [z3, T3] = [T3, z3]);
            }
            let r5 = Array.from({ length: 96 }, (e7, t6) => {
              let r6 = t6 / 96 * Math.PI * 2, a5 = S([Math.cos(r6) * z3, Math.sin(r6) * T3], x2);
              return [a5[0] + q3, a5[1] + H2];
            }), a4 = S([z3, 0], x2), l4 = M(180 * x2 / Math.PI), n4 = `M${M(q3 + a4[0])} ${M(H2 + a4[1])}A${M(z3)} ${M(T3)} ${l4} 1 1 ${M(q3 - a4[0])} ${M(H2 - a4[1])}A${M(z3)} ${M(T3)} ${l4} 1 1 ${M(q3 + a4[0])} ${M(H2 + a4[1])}Z`;
            return { shape: t5, target: G2(r5), d: n4 };
          }
          return null;
        })(e3, a2.u) : null, i2 = `s${++a2.seq}`, o2 = {
          id: i2,
          shape: s2?.shape ?? "freehand",
          color: t3,
          raw: e3,
          mean: s2 ? eb.current.size * a2.u * 0.85 : n2,
          from: s2 ? A(e3, 97) : null,
          to: s2?.target ?? null,
          clean: s2?.d ?? null,
          p: s2 && r3.instant ? 1 : 0,
          v: 0,
          target: +!!s2,
          el: null,
          recognized: s2
        };
        return a2.items.set(i2, o2), a2.order.push(i2), ee((e4) => [...e4, { id: i2, shape: o2.shape }]), s2 && !r3.quiet ? (eS(i2, s2.shape), eM(`Snapped to ${b[s2.shape]}`)) : r3.quiet || eM("Stroke added"), eC(), o2;
      },
      [eM, eC, eS]
    ), eD = (0, l.useCallback)((e3, t3, r3, a2) => {
      let l2, n2 = ew.current, s2 = eb.current, i2 = e3.pts[e3.pts.length - 1], o2 = i2 ? Math.hypot(t3 - i2.x, r3 - i2.y) / n2.u : 0;
      if (i2 && o2 < 0.8) {
        e3.idle += a2;
        return;
      }
      let u2 = i2 ? o2 / Math.max(1, a2 + e3.idle) : 0;
      e3.idle = 0;
      let h3 = null != e3.pressure ? v(e3.pressure, 0.05, 1) : 1 - 0.66 * ((l2 = v((u2 - 0.12) / 2.28, 0, 1)) * l2 * (3 - 2 * l2));
      e3.pr += (h3 - e3.pr) * (i2 ? 0.2 : 1), e3.travel += o2;
      let c3 = Math.min(1, 0.38 + e3.travel / 20);
      e3.pts.push({ x: t3, y: r3, w: s2.size * n2.u * (0.5 + 0.72 * e3.pr) * c3 });
    }, []), eP = (0, l.useCallback)((e3, t3, r3) => {
      let a2 = ew.current, l2 = 78 - 60 * v(eb.current.smoothing, 0, 1), n2 = v(
        Math.ceil(
          (Math.hypot(e3.raw[0] - e3.rawPrev[0], e3.raw[1] - e3.rawPrev[1]) + Math.hypot(e3.raw[0] - e3.tip[0], e3.raw[1] - e3.tip[1])) / (2.5 * a2.u)
        ),
        1,
        16
      ), s2 = 1 - Math.exp(-l2 * t3 / 1e3 / n2);
      for (let a3 = 1; a3 <= n2; a3++) {
        let l3 = e3.rawPrev[0] + (e3.raw[0] - e3.rawPrev[0]) * a3 / n2, i2 = e3.rawPrev[1] + (e3.raw[1] - e3.rawPrev[1]) * a3 / n2;
        e3.tip[0] += (l3 - e3.tip[0]) * s2, e3.tip[1] += (i2 - e3.tip[1]) * s2, r3(e3.tip[0], e3.tip[1], t3 / n2);
      }
      e3.rawPrev = [e3.raw[0], e3.raw[1]];
    }, []), eI = (0, l.useCallback)(
      (e3, t3) => {
        for (let r3 = 0; r3 < 60 && Math.hypot(e3.raw[0] - e3.tip[0], e3.raw[1] - e3.tip[1]) > 0.5 * ew.current.u; r3++)
          eP(e3, 8, t3);
        t3(e3.raw[0], e3.raw[1], 8);
      },
      [eP]
    ), eL = (0, l.useRef)(() => {
    }), eR = (0, l.useCallback)(() => {
      let e3 = ew.current;
      !e3.frame && e3.inView && e3.visible && (e3.frame = requestAnimationFrame((e4) => eL.current(e4)));
    }, []), ez = (0, l.useCallback)(
      (e3, t3, r3, a2) => {
        let l2 = ew.current;
        l2.stroke = L(e3, t3), l2.strokeColor = a2, ed.current && (ed.current.style.color = ev(a2)), l2.stroke.pressure = r3, eD(l2.stroke, e3, t3, 16), eA();
      },
      [ev, eA, eD]
    ), eT = (0, l.useCallback)(
      (e3 = {}) => {
        let t3 = ew.current, r3 = t3.stroke;
        if (!r3) return;
        eI(r3, (e4, t4, a3) => eD(r3, e4, t4, a3)), t3.stroke = null;
        let a2 = eN(r3.pts, t3.strokeColor, {
          snap: eb.current.snap,
          instant: eb.current.still,
          quiet: e3.quiet
        });
        eA(), a2 && ex(a2);
      },
      [eN, eI, ex, eA, eD]
    ), eE = (0, l.useCallback)((e3, t3) => {
      let r3 = ew.current;
      r3.laserStroke = L(e3, t3), r3.laser.push({ x: e3, y: t3, t: performance.now() });
    }, []), eq = (0, l.useCallback)(() => {
      ew.current.laserStroke = null;
    }, []), eH = (0, l.useCallback)(
      (e3) => {
        let t3 = ew.current;
        if (!t3.intro) return;
        let r3 = t3.intro.script[t3.intro.idx];
        r3 && "draw" === t3.intro.phase && ("pen" === r3.tool ? e3 ? eT({ quiet: true }) : (t3.stroke = null, eA()) : eq()), t3.intro = null, t3.introDone = true, eo(false), e_();
      },
      [eq, eT, eA, e_]
    );
    (0, l.useEffect)(() => {
      eL.current = (e3) => {
        let t3 = ew.current, r3 = eb.current;
        t3.frame = 0;
        let a2 = Math.min(50, t3.last ? e3 - t3.last : 16.7);
        t3.last = e3;
        let l2 = false, n2 = false, s2 = t3.intro;
        if (s2)
          if (l2 = true, s2.startDelay > 0) s2.startDelay -= a2;
          else {
            let l3 = s2.script[s2.idx];
            if ("draw" === s2.phase) {
              let i3 = Math.max(1, Math.ceil(a2 / 8)), o3 = a2 / i3, u3 = l3.ms / Math.max(0.1, r3.speed), h3 = 0;
              for (let n3 = 0; n3 < i3 && h3 < 1; n3++) {
                s2.t += o3, h3 = v(s2.t / u3, 0, 1);
                let [i4, c3] = I(l3.path, h3);
                if (t3.nibAt = [i4, c3], "pen" === l3.tool) {
                  t3.stroke || ez(i4, c3, null, r3.colors[l3.color]?.id ?? "ink");
                  let e4 = t3.stroke;
                  e4.raw = [i4, c3], eP(e4, o3, (t4, r4, a3) => eD(e4, t4, r4, a3));
                } else {
                  t3.laserStroke || eE(i4, c3);
                  let r4 = t3.laserStroke;
                  r4.raw = [i4, c3], eP(r4, o3, (r5, l4) => {
                    let s3 = t3.laser[t3.laser.length - 1];
                    (!s3 || Math.hypot(r5 - s3.x, l4 - s3.y) > 0.8 * t3.u) && t3.laser.push({ x: r5, y: l4, t: e3 - a2 + o3 * (n3 + 1) });
                  });
                }
              }
              n2 = true, h3 >= 1 && ("pen" === l3.tool ? eT({ quiet: s2.idx > 0 }) : eq(), s2.phase = "pause", s2.t = 0);
            } else {
              s2.t += a2;
              let e4 = l3.pause / Math.max(0.1, r3.speed), n3 = s2.script[s2.idx + 1];
              if (n3) {
                let r4 = l3.path[l3.path.length - 1], a3 = n3.path[0], i3 = v(s2.t / (0.82 * e4), 0, 1), o3 = i3 * i3 * i3 * (i3 * (6 * i3 - 15) + 10);
                t3.nibAt = [r4[0] + (a3[0] - r4[0]) * o3, r4[1] + (a3[1] - r4[1]) * o3];
              }
              s2.t >= e4 && (s2.idx++, s2.phase = "draw", s2.t = 0, s2.idx >= s2.script.length && (t3.intro = null, t3.introDone = true, eo(false)));
            }
            e_();
          }
        if (t3.kbd && t3.keys.size) {
          l2 = true;
          let e4 = (t3.keys.has("Shift") ? 110 : 340) * t3.u * a2 / 1e3, r4 = 0, n3 = 0;
          t3.keys.has("ArrowLeft") && (r4 -= 1), t3.keys.has("ArrowRight") && (r4 += 1), t3.keys.has("ArrowUp") && (n3 -= 1), t3.keys.has("ArrowDown") && (n3 += 1);
          let s3 = Math.hypot(r4, n3) || 1;
          t3.nibAt = [
            v(t3.nibAt[0] + r4 / s3 * e4, 0, 1e3),
            v(t3.nibAt[1] + n3 / s3 * e4, 0, t3.H)
          ], t3.stroke && (t3.stroke.raw = [...t3.nibAt]), t3.laserStroke && (t3.laserStroke.raw = [...t3.nibAt]), e_();
        }
        if (t3.stroke) {
          let e4 = t3.stroke;
          n2 || eP(e4, a2, (t4, r4, a3) => eD(e4, t4, r4, a3)), eA(), l2 = true;
        }
        if (t3.laserStroke && !n2 && (eP(t3.laserStroke, a2, (r4, a3) => {
          let l3 = t3.laser[t3.laser.length - 1];
          (!l3 || Math.hypot(r4 - l3.x, a3 - l3.y) > 0.8 * t3.u) && t3.laser.push({ x: r4, y: a3, t: e3 });
        }), l2 = true), t3.laser.length) {
          let a3 = r3.laserFade / Math.max(0.1, r3.speed);
          for (; t3.laser.length && e3 - t3.laser[0].t > a3; ) t3.laser.shift();
          e$(e3), t3.laser.length && (l2 = true);
        }
        let i2 = 260 * r3.speed * r3.speed, o2 = 1.12 * Math.sqrt(i2), u2 = a2 / 1e3;
        for (let e4 of t3.order) {
          let a3 = t3.items.get(e4);
          if (a3 && a3.to) {
            if (2e-3 > Math.abs(a3.p - a3.target) && 0.01 > Math.abs(a3.v)) {
              a3.p !== a3.target && (a3.p = a3.target, a3.v = 0, ex(a3));
              continue;
            }
            if (r3.still) {
              a3.p = a3.target, a3.v = 0, ex(a3);
              continue;
            }
            for (let e6 = 0; e6 < 2; e6++) {
              let e7 = u2 / 2;
              a3.v += (-i2 * (a3.p - a3.target) - o2 * a3.v) * e7, a3.p += a3.v * e7;
            }
            ex(a3), l2 = true;
          }
        }
        l2 && t3.inView && t3.visible ? t3.frame = requestAnimationFrame((e4) => eL.current(e4)) : t3.last = 0;
      };
    }, [eP, eE, ez, eq, eT, ex, e$, eA, e_, eD]), (0, l.useLayoutEffect)(() => {
      let e3 = eh.current;
      if (!e3) return;
      let t3 = ew.current, r3 = () => {
        let r4 = e3.clientWidth, a3 = e3.clientHeight;
        if (!r4 || !a3 || 0.5 > Math.abs(r4 - t3.w) && 0.5 > Math.abs(a3 - t3.h))
          return;
        t3.w = r4, t3.h = a3, t3.u = 1e3 / r4, t3.H = a3 * t3.u, ec.current?.setAttribute("viewBox", `0 0 1000 ${M(t3.H)}`);
        let l2 = 22 * t3.u;
        eg.current?.setAttribute("width", M(l2)), eg.current?.setAttribute("height", M(l2)), ek.current?.setAttribute("cx", M(l2 / 2)), ek.current?.setAttribute("cy", M(l2 / 2)), ek.current?.setAttribute("r", M(0.9 * t3.u)), t3.kbd || t3.intro || (t3.nibAt = [500, t3.H / 2]), e_();
      };
      r3();
      let a2 = new ResizeObserver(r3);
      return a2.observe(e3), () => a2.disconnect();
    }, [e_]);
    let eZ = (0, l.useCallback)(() => {
      let e3 = ew.current;
      if (!e3.order.length && !e3.introDone)
        for (let t3 of (e3.introDone = true, P(e3.H))) {
          if ("pen" !== t3.tool) continue;
          let e4 = L(t3.path[0][0], t3.path[0][1]), r3 = Math.round(t3.ms / 8);
          for (let a3 = 0; a3 <= r3; a3++) {
            let [l2, n2] = I(t3.path, a3 / r3);
            e4.raw = [l2, n2], eP(e4, 8, (t4, r4, a4) => eD(e4, t4, r4, a4));
          }
          eI(e4, (t4, r4, a3) => eD(e4, t4, r4, a3));
          let a2 = eN(e4.pts, eb.current.colors[t3.color]?.id ?? "ink", {
            snap: true,
            instant: true,
            quiet: true
          });
          a2 && ex(a2);
        }
    }, [eP, eN, eI, ex, eD]);
    (0, l.useEffect)(() => {
      let e3 = eu.current, t3 = ew.current;
      if (!e3) return;
      let r3 = new IntersectionObserver(
        ([e4]) => {
          if (t3.inView = e4.isIntersecting, t3.inView) {
            if (T2 && !t3.introDone && !t3.intro && !t3.order.length && t3.H)
              if (eb.current.still) eZ();
              else {
                let e6 = P(t3.H);
                t3.intro = {
                  script: e6,
                  idx: 0,
                  t: 0,
                  phase: "draw",
                  startDelay: 450
                }, t3.nibAt = [...e6[0].path[0]], eo(true);
              }
            eR();
          } else
            t3.frame && (cancelAnimationFrame(t3.frame), t3.frame = 0, t3.last = 0);
        },
        { threshold: 0.35 }
      );
      r3.observe(e3);
      let a2 = () => {
        t3.visible = "visible" === document.visibilityState, t3.visible ? eR() : t3.frame && (cancelAnimationFrame(t3.frame), t3.frame = 0, t3.last = 0);
      };
      return document.addEventListener("visibilitychange", a2), () => {
        r3.disconnect(), document.removeEventListener("visibilitychange", a2), cancelAnimationFrame(t3.frame), t3.frame = 0;
      };
    }, [T2, eR, eZ]), (0, l.useEffect)(() => {
      let e3 = ew.current;
      if (B)
        for (let t3 of (eH(false), e3.laser = [], e$(performance.now()), e3.order)) {
          let r3 = e3.items.get(t3);
          r3 && (r3.p = r3.target, r3.v = 0, ex(r3));
        }
    }, [B, eH, ex, e$]), (0, l.useEffect)(() => {
      let e3 = ew.current;
      for (let t3 of e3.order) {
        let r3 = e3.items.get(t3);
        r3 && ex(r3);
      }
      e_();
    }, [t2, Y, F, ex, e_]), (0, l.useEffect)(
      () => () => {
        ey.current && clearTimeout(ey.current);
      },
      []
    );
    let eK = (e3) => {
      let t3 = eh.current.getBoundingClientRect(), r3 = ew.current;
      return [(e3.clientX - t3.left) * r3.u, (e3.clientY - t3.top) * r3.u];
    }, eO = (e3) => {
      let t3 = ew.current;
      t3.pointer === e3.pointerId && (t3.pointer = null, t3.stroke && eT(), t3.laserStroke && eq(), "touch" === e3.pointerType && (t3.hover = false), es(false), e_(), eR());
    }, eW = (0, l.useCallback)(
      (e3, t3) => {
        if (!e3.length) return;
        let r3 = ew.current;
        r3.order = r3.order.filter((t4) => !e3.includes(t4)), ee(
          (t4) => t4.map((t5) => e3.includes(t5.id) ? { ...t5, leaving: true } : t5)
        ), er((t4) => t4 && e3.includes(t4.id) ? null : t4);
        let a2 = () => {
          for (let t4 of e3) r3.items.delete(t4);
          ee((t4) => t4.filter((t5) => !e3.includes(t5.id)));
        };
        eb.current.still ? a2() : setTimeout(a2, 200), eM(t3), eC();
      },
      [eM, eC]
    ), eV = (0, l.useCallback)(() => {
      let e3 = ew.current;
      e3.intro && eH(true);
      let t3 = e3.order[e3.order.length - 1];
      if (!t3) return void eM("Nothing to undo");
      let r3 = e3.items.get(t3);
      eW([t3], `Removed ${b[r3?.shape ?? "freehand"]}`);
    }, [eM, eH, eW]), eB = (0, l.useCallback)(() => {
      let e3 = ew.current;
      e3.intro && eH(false), eW([...e3.order], "Board cleared");
    }, [eH, eW]), eF = (0, l.useCallback)(
      (e3) => {
        let t3 = ew.current.items.get(e3);
        t3 && t3.to && (t3.target = 0, t3.shape = "freehand", eb.current.still && (t3.p = 0, t3.v = 0), ex(t3), ee(
          (t4) => t4.map((t5) => t5.id === e3 ? { ...t5, shape: "freehand" } : t5)
        ), er(null), eM("Kept as drawn"), eC(), eR());
      },
      [eM, eC, eR, ex]
    ), eU = (0, l.useCallback)(
      (e3) => {
        U(e3), eM(
          "pen" === e3 ? "Pen" : "Laser pointer. Trails fade on their own"
        );
      },
      [eM]
    ), eY = (0, l.useCallback)(() => {
      X((e3) => (eM(e3 ? "Shape snapping off" : "Shape snapping on"), !e3));
    }, [eM]), eJ = G.filter((e3) => !e3.leaving), eQ = eJ.length, eX = (0, l.useMemo)(() => {
      if (!eJ.length) return "The board is empty.";
      let e3 = /* @__PURE__ */ new Map();
      for (let t3 of eJ) e3.set(b[t3.shape], (e3.get(b[t3.shape]) ?? 0) + 1);
      return `On the board: ${[...e3].map(([e4, t3]) => `${t3} ${e4}${t3 > 1 ? "s" : ""}`).join(", ")}.`;
    }, [eJ]), eG = { ...H ? { "--ctd-accent": H } : null, ...W }, e0 = B ? { duration: 0 } : g.T.spring.snappy, e1 = `${V}-title`, e22 = `${V}-help`, e5 = `${V}-sum`;
    return (0, a.jsxs)("section", {
      ref: eu,
      className: [y().root, O].filter(Boolean).join(" "),
      style: eG,
      "aria-labelledby": e1,
      children: [
        (0, a.jsxs)("header", {
          className: y().header,
          children: [
            (0, a.jsx)("h3", { id: e1, className: y().title, children: e2 }),
            (0, a.jsx)("p", {
              className: y().count,
              "aria-hidden": "true",
              children: 1 === eQ ? "1 item" : `${eQ} items`
            })
          ]
        }),
        (0, a.jsxs)("div", {
          ref: eh,
          className: y().stage,
          "data-tool": F,
          "data-drawing": en ? "" : void 0,
          children: [
            (0, a.jsx)("div", {
              className: y().canvas,
              role: "application",
              "aria-roledescription": "whiteboard",
              "aria-label": `${e2} canvas`,
              "aria-describedby": `${e22} ${e5}`,
              tabIndex: 0,
              onPointerDown: (e3) => {
                if (0 !== e3.button || null != ew.current.pointer) return;
                let t3 = ew.current;
                t3.intro && eH(false), t3.kbd = false, t3.kDown = false, t3.keys.clear(), t3.pointer = e3.pointerId, e3.currentTarget.setPointerCapture(e3.pointerId);
                let [r3, a2] = eK(e3);
                t3.nibAt = [r3, a2], t3.hover = "touch" !== e3.pointerType, er(null), "pen" === eb.current.tool ? ez(
                  r3,
                  a2,
                  "pen" === e3.pointerType && e3.pressure > 0 ? e3.pressure : null,
                  eb.current.colorId
                ) : eE(r3, a2), es(true), e_(), eR();
              },
              onPointerMove: (e3) => {
                let t3 = ew.current;
                if (t3.intro) return;
                let [r3, a2] = eK(e3);
                t3.nibAt = [r3, a2], "touch" !== e3.pointerType && (t3.hover = true), t3.pointer === e3.pointerId && (t3.stroke && (t3.stroke.raw = [r3, a2], "pen" === e3.pointerType && e3.pressure > 0 && (t3.stroke.pressure = e3.pressure)), t3.laserStroke && (t3.laserStroke.raw = [r3, a2]), eR()), e_();
              },
              onPointerUp: eO,
              onPointerCancel: eO,
              onPointerLeave: (e3) => {
                ew.current.pointer !== e3.pointerId && (ew.current.hover = false, e_());
              },
              onKeyDown: (e3) => {
                let t3 = ew.current, r3 = eb.current, a2 = e3.metaKey || e3.ctrlKey;
                if (a2 && "z" === e3.key.toLowerCase()) {
                  e3.preventDefault(), eV();
                  return;
                }
                if (a2 || e3.altKey) return;
                if (e3.key.startsWith("Arrow")) {
                  e3.preventDefault(), t3.intro && eH(true), t3.kbd = true, t3.keys.add(e3.key), e3.shiftKey ? t3.keys.add("Shift") : t3.keys.delete("Shift"), e_(), eR();
                  return;
                }
                if (" " === e3.key || "Enter" === e3.key) {
                  if (e3.preventDefault(), e3.repeat) return;
                  if (t3.intro && eH(true), t3.kbd = true, t3.kDown) {
                    t3.kDown = false;
                    let e4 = null != t3.stroke;
                    t3.stroke ? eT() : eq(), es(false), e4 || eM("Laser off");
                  } else {
                    t3.kDown = true;
                    let [e4, a3] = t3.nibAt;
                    "pen" === r3.tool ? ez(e4, a3, null, r3.colorId) : eE(e4, a3), er(null), es(true), eM(
                      "pen" === r3.tool ? "Pen down. Move with the arrow keys, press Space to lift" : "Laser on. Move with the arrow keys"
                    );
                  }
                  e_(), eR();
                  return;
                }
                if ("Escape" === e3.key && t3.kDown) {
                  e3.preventDefault(), t3.kDown = false, t3.stroke = null, eA(), eq(), es(false), eM("Stroke cancelled");
                  return;
                }
                let l2 = e3.key.toLowerCase();
                "p" === l2 ? eU("pen") : "l" === l2 ? eU("laser") : "s" === l2 && eY();
              },
              onKeyUp: (e3) => {
                let t3 = ew.current;
                t3.keys.delete(e3.key), "Shift" === e3.key && t3.keys.delete("Shift");
              },
              onFocus: (e3) => {
                ew.current.kbd = e3.currentTarget.matches(":focus-visible") && null == ew.current.pointer, e_();
              },
              onBlur: () => {
                let e3 = ew.current;
                e3.keys.clear(), e3.kDown && (e3.kDown = false, e3.stroke ? eT() : eq(), es(false)), e3.kbd = false, e_();
              },
              children: (0, a.jsxs)("svg", {
                ref: ec,
                className: y().svg,
                viewBox: "0 0 1000 625",
                preserveAspectRatio: "xMinYMin slice",
                "aria-hidden": "true",
                children: [
                  (0, a.jsx)("defs", {
                    children: (0, a.jsx)("pattern", {
                      ref: eg,
                      id: `${V}-grid`,
                      patternUnits: "userSpaceOnUse",
                      width: "22",
                      height: "22",
                      children: (0, a.jsx)("circle", {
                        ref: ek,
                        className: y().gridDot,
                        cx: "11",
                        cy: "11",
                        r: "1"
                      })
                    })
                  }),
                  (0, a.jsx)("rect", {
                    width: "100%",
                    height: "100%",
                    fill: `url(#${V}-grid)`
                  }),
                  (0, a.jsx)("g", {
                    children: G.map(
                      (e3) => (0, a.jsx)(
                        "path",
                        {
                          className: y().ink,
                          "data-leaving": e3.leaving ? "" : void 0,
                          ref: (t3) => {
                            let r3 = ew.current.items.get(e3.id);
                            r3 && r3.el !== t3 && (r3.el = t3, t3 && ex(r3));
                          }
                        },
                        e3.id
                      )
                    )
                  }),
                  (0, a.jsx)("path", { ref: ed, className: y().ink }),
                  (0, a.jsx)("path", { ref: ep, className: y().laser }),
                  (0, a.jsx)("circle", {
                    ref: em,
                    className: y().nibRing,
                    cx: "500",
                    cy: "300",
                    r: "8"
                  }),
                  (0, a.jsx)("circle", {
                    ref: ef,
                    className: y().nib,
                    cx: "500",
                    cy: "300",
                    r: "3"
                  })
                ]
              })
            }),
            Z ? (0, a.jsx)("p", {
              className: y().hint,
              "data-hidden": eQ || en || ei ? "" : void 0,
              "aria-hidden": "true",
              children: Z
            }) : null,
            (0, a.jsx)(s.N, {
              children: et ? (0, a.jsxs)(
                i.PY1.div,
                {
                  className: y().chip,
                  initial: !B && { opacity: 0, y: -8, scale: 0.96 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: B ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: -6,
                    transition: {
                      duration: g.T.duration.exit,
                      ease: [...g.T.ease.exit]
                    }
                  },
                  transition: e0,
                  children: [
                    (0, a.jsx)(o.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true",
                      className: y().chipIcon
                    }),
                    (0, a.jsxs)("span", {
                      className: y().chipText,
                      children: ["Snapped to ", b[et.shape]]
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      className: y().chipButton,
                      onClick: () => eF(et.id),
                      children: "Keep as drawn"
                    })
                  ]
                },
                et.id
              ) : null
            }),
            (0, a.jsxs)("div", {
              className: y().toolbar,
              role: "toolbar",
              "aria-label": "Drawing tools",
              onKeyDown: (e3) => {
                if ("ArrowRight" !== e3.key && "ArrowLeft" !== e3.key && "Home" !== e3.key && "End" !== e3.key)
                  return;
                let t3 = Array.from(
                  e3.currentTarget.querySelectorAll("button:not(:disabled)")
                ), r3 = t3.indexOf(document.activeElement);
                if (r3 < 0) return;
                e3.preventDefault();
                let a2 = "Home" === e3.key ? 0 : "End" === e3.key ? t3.length - 1 : (r3 + ("ArrowRight" === e3.key ? 1 : -1) + t3.length) % t3.length;
                t3[a2]?.focus();
              },
              children: [
                (0, a.jsx)("div", {
                  className: y().group,
                  children: ["pen", "laser"].map(
                    (e3) => (0, a.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: y().tool,
                        "aria-pressed": F === e3,
                        "aria-label": "pen" === e3 ? "Pen" : "Laser pointer",
                        title: "pen" === e3 ? "Pen (P)" : "Laser pointer (L)",
                        onClick: () => eU(e3),
                        children: [
                          F === e3 ? (0, a.jsx)(i.PY1.span, {
                            layoutId: `${V}-tool`,
                            className: y().toolHighlight,
                            transition: B ? { duration: 0 } : g.T.spring.morph,
                            "aria-hidden": "true"
                          }) : null,
                          "pen" === e3 ? (0, a.jsx)(u.A, {
                            size: 18,
                            strokeWidth: 1.75,
                            "aria-hidden": "true",
                            className: y().icon
                          }) : (0, a.jsx)(d, {
                            size: 18,
                            strokeWidth: 1.75,
                            "aria-hidden": "true",
                            className: y().icon
                          })
                        ]
                      },
                      e3
                    )
                  )
                }),
                (0, a.jsx)("span", {
                  className: y().divider,
                  "aria-hidden": "true"
                }),
                (0, a.jsx)("div", {
                  className: y().group,
                  "data-dim": "laser" === F ? "" : void 0,
                  children: t2.map(
                    (e3) => (0, a.jsx)(
                      "button",
                      {
                        type: "button",
                        className: y().swatch,
                        "aria-pressed": Y === e3.id,
                        "aria-label": `${e3.label} ink`,
                        title: `${e3.label} ink`,
                        onClick: () => {
                          J(e3.id), "pen" !== F && U("pen"), eM(`${e3.label} ink`);
                        },
                        style: { "--swatch": e3.value },
                        children: (0, a.jsx)("span", {
                          className: y().swatchDot,
                          "aria-hidden": "true"
                        })
                      },
                      e3.id
                    )
                  )
                }),
                (0, a.jsx)("span", {
                  className: y().divider,
                  "aria-hidden": "true"
                }),
                (0, a.jsxs)("div", {
                  className: y().group,
                  children: [
                    (0, a.jsx)("button", {
                      type: "button",
                      className: y().tool,
                      "data-toggle": "",
                      "aria-pressed": Q,
                      "aria-label": "Snap shapes",
                      title: "Snap shapes (S)",
                      onClick: eY,
                      children: (0, a.jsx)(p.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true",
                        className: y().icon
                      })
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      className: y().tool,
                      "aria-label": "Undo last stroke",
                      title: "Undo (Ctrl or Cmd Z)",
                      onClick: eV,
                      disabled: !eQ && !ei,
                      children: (0, a.jsx)(f.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true",
                        className: y().icon
                      })
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      className: y().tool,
                      "aria-label": "Clear board",
                      title: "Clear board",
                      onClick: eB,
                      disabled: !eQ && !ei,
                      children: (0, a.jsx)(m.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true",
                        className: y().icon
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, a.jsx)("p", {
          id: e22,
          className: y().srOnly,
          children: "Draw with a pointer, or with the keyboard: arrow keys move the cursor, Shift moves slowly, Space or Enter puts the pen down and lifts it, Escape cancels a stroke. P picks the pen, L the laser pointer, S turns shape snapping on or off, and Control or Command Z undoes."
        }),
        (0, a.jsx)("p", { id: e5, className: y().srOnly, children: eX }),
        (0, a.jsx)("span", {
          className: y().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ea
        })
      ]
    });
  }
  var z = r(36544), T = r.n(z);
  function E() {
    return (0, a.jsx)("div", {
      className: T().demo,
      "data-canvas": "wide",
      children: (0, a.jsx)(R, { label: "Onboarding flow sketch" })
    });
  }
  let q = E;
}

__m(__module,__exports,__require);
}