function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { GhostMascotDemo: () => Z, default: () => J });
  var r = a(95155), s = a(12115), n = a(18310), l = a(80642), o = a(25354), i = a(79267), c = a(36619);
  let u = {
    idle: "Idle",
    listening: "Listening",
    thinking: "Thinking",
    writing: "Writing",
    done: "Done",
    error: "Error"
  }, d = {
    y: 0,
    floatAmp: 3,
    floatRate: 0.3,
    lx: 0,
    rot: 0,
    sway: 1,
    scale: 1,
    opacity: 1,
    hemAmp: 3,
    hemRate: 0.5,
    flare: 2.8,
    gx: 0,
    gy: 0,
    gk: 140,
    eyeScale: 1,
    spread: 1,
    happy: 0,
    droop: 0,
    blinkable: 1,
    glance: 1,
    followPen: 0,
    swirl: 0,
    pen: 0,
    star: 0
  }, h = {
    idle: d,
    listening: {
      ...d,
      y: 1.5,
      floatAmp: 1.8,
      floatRate: 0.36,
      rot: -4,
      sway: 0.4,
      scale: 1.05,
      hemAmp: 2.1,
      hemRate: 0.7,
      flare: 3,
      gy: 0.12,
      gk: 220,
      eyeScale: 1.2,
      spread: 1.06,
      glance: 0,
      blinkable: 0.7
    },
    thinking: {
      ...d,
      y: -2,
      floatAmp: 3.4,
      floatRate: 0.22,
      rot: 3,
      sway: 1.2,
      opacity: 0.56,
      hemAmp: 3.1,
      hemRate: 0.36,
      flare: 2.2,
      gx: 0.55,
      gy: -1,
      gk: 46,
      eyeScale: 0.96,
      glance: 0,
      blinkable: 0.35,
      swirl: 1
    },
    writing: {
      ...d,
      y: 1,
      floatAmp: 1.5,
      floatRate: 0.38,
      lx: -7,
      rot: 4,
      sway: 0.35,
      hemAmp: 2.3,
      hemRate: 0.85,
      gk: 260,
      glance: 0,
      followPen: 1,
      blinkable: 0.5,
      pen: 1
    },
    done: {
      ...d,
      y: -2.5,
      floatAmp: 2.6,
      floatRate: 0.36,
      rot: -2,
      sway: 0.6,
      hemAmp: 3,
      hemRate: 0.7,
      flare: 3,
      gk: 160,
      spread: 1.04,
      happy: 1,
      glance: 0,
      blinkable: 0,
      star: 1
    },
    error: {
      ...d,
      y: 3.5,
      floatAmp: 1.1,
      floatRate: 0.24,
      sway: 0.3,
      hemAmp: 1.3,
      hemRate: 0.26,
      flare: 1.4,
      gy: 0.55,
      gk: 90,
      eyeScale: 0.96,
      droop: 1,
      glance: 0,
      blinkable: 0.5
    }
  }, f = {
    compact: false,
    view: "0 0 120 120",
    eyeRx: 3.7,
    eyeRy: 5.3,
    spread: 10,
    markStroke: 2.3,
    lineStroke: 2.3,
    penStroke: 3.3,
    markScale: 1
  }, m = {
    compact: true,
    view: "8 7 104 104",
    eyeRx: 5,
    eyeRy: 6.9,
    spread: 11.6,
    markStroke: 3.8,
    lineStroke: 3.6,
    penStroke: 4.6,
    markScale: 1.2
  }, p = 2 * Math.PI, y = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), g = (e2, t2, a2) => e2 + (t2 - e2) * a2, x = (e2) => (Math.round(100 * e2) / 100).toString(), b = (e2) => e2 < 0.5 ? 4 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 3) / 2, v = (e2) => 0.5 - 0.5 * Math.cos(Math.PI * y(e2)), _ = (e2) => 1 - Math.pow(1 - y(e2), 3), k = p / 21, w = p / 37, $ = (e2, t2) => {
    let a2 = t2 - 60 - e2.shift;
    return e2.base + e2.amp * (0.8 * Math.sin(k * a2 - p * e2.phase) + 0.2 * Math.sin(w * a2 + p * e2.phase2));
  }, A = (e2, t2) => {
    let a2 = t2 - 60 - e2.shift;
    return e2.amp * (0.8 * k * Math.cos(k * a2 - p * e2.phase) + 0.2 * w * Math.cos(w * a2 + p * e2.phase2));
  };
  function M(e2, t2, a2, r2, s2, n2, l2, o2) {
    let i2 = 0.12 + 0.88 * s2, c2 = g(4 / 3 * r2, 1.62 * r2, n2) * i2, u2 = g(4 / 3 * r2, -0.6 * r2, n2) * i2, d2 = a2 * (1 + 0.12 * n2), h2 = t2 + n2 * r2 * 0.4 + l2 * r2 * 0.1, f2 = c2 * (1 - 0.88 * l2), m2 = c2 * (1 - 0.62 * l2), p2 = l2 * r2 * 0.34, y2 = -l2 * r2 * 0.22, b2 = h2 + (o2 < 0 ? p2 : y2), v2 = h2 + (o2 < 0 ? y2 : p2), _2 = e2 - d2, k2 = e2 + d2;
    return `M${x(_2)} ${x(b2)}C${x(_2)} ${x(b2 - (o2 < 0 ? f2 : m2))} ${x(k2)} ${x(v2 - (o2 < 0 ? m2 : f2))} ${x(k2)} ${x(v2)}C${x(k2)} ${x(v2 + u2)} ${x(_2)} ${x(b2 + u2)} ${x(_2)} ${x(b2)}Z`;
  }
  let j = (() => {
    let e2 = [];
    for (let t2 = 0; t2 <= 56; t2++) {
      let a2 = t2 / 56, r2 = -Math.PI / 2 + 1.35 * a2 * p, s2 = 6.2 - 4.6 * a2;
      e2.push(`${x(Math.cos(r2) * s2)} ${x(Math.sin(r2) * s2)}`);
    }
    return `M${e2.join("L")}`;
  })(), S = "M0 -1C.1 -.28 .28 -.1 1 0C.28 .1 .1 .28 0 1C-.1 .28 -.28 .1 -1 0C-.28 -.1 -.1 -.28 0 -1Z", R = [
    { x: 91, y: 22, r: 6.6, delay: 0 },
    { x: 100.5, y: 35.5, r: 3.3, delay: 0.1 }
  ], E = [
    [0, 0.3],
    [0.38, 0.66],
    [0.74, 1]
  ], z = (e2) => {
    let t2 = 29 * e2;
    return 107 - (1.5 * Math.sin(1.1 * t2) + 0.45 * Math.sin(2.2 * t2 + 1.1));
  };
  function N(e2) {
    let t2 = y(e2 / 0.62);
    return { head: 0.62 * t2 + 0.38 * v(t2), tail: v((e2 - 0.7) / 0.25) };
  }
  function L(e2) {
    if (e2 < 0.7) {
      let { head: t3 } = N(e2), a2 = 0;
      for (let e3 = 0; e3 < E.length - 1; e3++) {
        let r2 = E[e3][1], s2 = E[e3 + 1][0];
        t3 > r2 && t3 < s2 && (a2 = 1.8 * Math.sin(Math.PI * (t3 - r2) / (s2 - r2)));
      }
      return { x: 77 + 29 * t3, y: z(t3) - a2, progress: t3 };
    }
    let t2 = b(y((e2 - 0.7) / 0.30000000000000004));
    return {
      x: g(106, 77, t2),
      y: g(z(1), z(0), t2) - 3.4 * Math.sin(Math.PI * t2),
      progress: 1 - t2
    };
  }
  function C(e2) {
    let t2 = L(e2);
    return [0.2 + 0.75 * t2.progress, 0.88 - (107 - t2.y) * 0.05];
  }
  function I(e2, t2, a2) {
    var r2;
    let s2, n2 = e2.floatAmp / 3, l2 = Math.sin(p * t2.float), o2 = Math.cos(p * t2.float), i2 = (r2 = t2.sinceError) < 0 || r2 > 1.6 ? 0 : (1 - Math.exp(-28 * r2)) * Math.exp(-4.2 * r2) * Math.sin(2.1 * p * r2), c2 = L(t2.pen), u2 = e2.y + e2.floatAmp * l2, d2 = e2.lx + 1.6 * i2 + (c2.progress - 0.5) * 3 * e2.followPen, h2 = e2.rot + 1.3 * Math.sin(p * t2.float * 0.5) * e2.sway + 9 * i2, f2 = e2.scale * (1 + 8e-3 * o2 * n2), m2 = e2.scale * (1 - 0.014 * o2 * n2), g2 = {
      amp: e2.hemAmp,
      phase: t2.hem,
      phase2: t2.hem2,
      base: 90 - 1.5 * o2 * n2,
      shift: -(2.6 * i2) + 0.8 * Math.sin(p * t2.hem2)
    }, b2 = e2.flare + 1.1 * o2 * n2, k2 = `translate(${x(d2)} ${x(u2)}) rotate(${x(h2)} 60 58) translate(60 46) scale(${x(f2)} ${x(m2)}) translate(-60 -46)`, w2 = a2.eyeRx * e2.eyeScale, j2 = a2.eyeRy * e2.eyeScale * (1 + 0.06 * (e2.eyeScale - 1) / 0.2), S2 = a2.spread * e2.spread, C2 = 3.1 * t2.gaze[0], I2 = 2.7 * t2.gaze[1], T2 = [
      M(60 - S2 + C2, 50 + I2, w2, j2, t2.open, e2.happy, e2.droop, -1),
      M(60 + S2 + C2, 50 + I2, w2, j2, t2.open, e2.happy, e2.droop, 1)
    ], P2 = v(t2.swirl / 0.6), W2 = v((t2.swirl - 0.32) / 0.6), D2 = Math.max(0, P2 - W2), O2 = {
      transform: `translate(90 21) rotate(${x(40 * t2.t % 360)}) scale(${a2.markScale})`,
      dash: `${x(D2 + 1e-4)} 3`,
      offset: x(-W2),
      opacity: x(e2.swirl * ((s2 = y(D2 / 0.06)) * s2 * (3 - 2 * s2)))
    }, q2 = _(t2.sinceDone / 0.34), F2 = R.map((r3, s3) => {
      let n3 = _((t2.sinceDone - r3.delay) / 0.32), l3 = 1 - 0.1 * (0.5 - 0.5 * Math.cos(p * (0.7 * t2.t + 0.4 * s3))), o3 = r3.r * a2.markScale * n3 * l3 * (0.55 + 0.45 * e2.star), i3 = 12 * Math.sin(p * t2.t * 0.2 + s3) + -((1 - q2) * 30);
      return {
        transform: `translate(${r3.x} ${r3.y}) rotate(${x(i3)}) scale(${x(Math.max(o3, 1e-3))})`,
        opacity: x(e2.star)
      };
    }), G2 = { transform: `translate(${x(c2.x)} ${x(c2.y)})`, opacity: x(e2.pen) }, B2 = {
      d: (function(e3) {
        let { head: t3, tail: a3 } = N(e3), r3 = "";
        for (let [e4, s3] of E) {
          let n3 = Math.max(e4, a3), l3 = Math.min(s3, t3);
          if (l3 - n3 < 4e-3) continue;
          let o3 = Math.max(1, Math.ceil((l3 - n3) / 0.018));
          for (let e5 = 0; e5 <= o3; e5++) {
            let t4 = n3 + e5 / o3 * (l3 - n3);
            r3 += `${e5 ? "L" : "M"}${x(77 + 29 * t4)} ${x(z(t4))}`;
          }
        }
        return r3 || "M0 0";
      })(t2.pen),
      opacity: x(e2.pen)
    }, U2 = (u2 - e2.y) / 3.4, Y2 = {
      transform: `translate(${x(60 + 0.8 * d2)} 112) scale(${x(1 + 0.05 * U2)} 1)`,
      opacity: x((0.86 + 0.14 * U2) * (0.45 + 0.55 * e2.opacity))
    };
    return {
      body: k2,
      d: (function(e3, t3) {
        let a3 = 88 + t3 + 0.6 * e3.shift, r3 = 32 - t3 + 0.6 * e3.shift, s3 = $(e3, a3), n3 = $(e3, r3), l3 = a3 - 2.8, o3 = r3 + 2.8, i3 = `M${x(32)} 46C${x(32)} ${x(30.5356)} ${x(44.5356)} 18 60 18C${x(75.4644)} 18 ${x(88)} ${x(30.5356)} ${x(88)} 46C${x(88)} 61 ${x(a3)} ${x(s3 - 17)} ${x(a3)} ${x(s3 - 2.8)}Q${x(a3)} ${x(s3)} ${x(l3)} ${x($(e3, l3))}`, c3 = (o3 - l3) / 8;
        for (let t4 = 0; t4 < 8; t4++) {
          let a4 = l3 + c3 * t4, r4 = a4 + c3, s4 = $(e3, a4), n4 = $(e3, r4), o4 = c3 / 3;
          i3 += `C${x(a4 + o4)} ${x(s4 + A(e3, a4) * o4)} ${x(r4 - o4)} ${x(n4 - A(e3, r4) * o4)} ${x(r4)} ${x(n4)}`;
        }
        return i3 + `Q${x(r3)} ${x(n3)} ${x(r3)} ${x(n3 - 2.8)}C${x(r3)} ${x(n3 - 17)} ${x(32)} 61 ${x(32)} 46Z`;
      })(g2, b2),
      opacity: x(e2.opacity),
      eyes: T2,
      swirl: O2,
      stars: F2,
      pen: G2,
      line: B2,
      ground: Y2
    };
  }
  let T = { float: 0, hem: 0.15, hem2: 0.4, swirl: 0.5, pen: 0.45 };
  var P = a(54018), W = a.n(P);
  let D = [
    ["idle", 2.6],
    ["listening", 2.2],
    ["thinking", 2.6],
    ["writing", 3.6],
    ["done", 2.3],
    ["idle", 1.6],
    ["thinking", 1.7],
    ["error", 2.1],
    ["idle", 1.3]
  ], O = (e2, t2) => e2 + Math.random() * (t2 - e2), q = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2));
  function F(e2) {
    let t2 = h[e2], a2 = C(T.pen), r2 = [
      t2.gx + (a2[0] - t2.gx) * t2.followPen,
      t2.gy + (a2[1] - t2.gy) * t2.followPen
    ];
    return { t: 0, ...T, sinceError: 10, sinceDone: 10, gaze: r2, open: 1 };
  }
  function G({
    status: e2,
    size: t2 = 96,
    tone: a2 = "accent",
    color: n2,
    eyeColor: l2,
    ground: o2 = true,
    paused: i2 = false,
    name: c2 = "Assistant",
    label: d2,
    announce: p2 = false,
    onStatusChange: y2,
    className: g2,
    style: x2
  }) {
    let v2 = (0, s.useId)().replace(/:/g, ""), _2 = `ghost-clip-${v2}`, k2 = t2 < 56 ? m : f, w2 = o2 && !k2.compact, [$2, A2] = (0, s.useState)(D[0][0]), M2 = e2 ?? $2, R2 = (0, s.useRef)(null), E2 = (0, s.useRef)(null), z2 = (0, s.useRef)(null), N2 = (0, s.useRef)(null), L2 = (0, s.useRef)({ shapes: [], eyes: [], stars: [] });
    (0, s.useLayoutEffect)(() => {
      let e3 = N2.current;
      e3 && (L2.current = {
        shapes: [...e3.querySelectorAll("[data-shape]")],
        eyes: [...e3.querySelectorAll("[data-eye]")],
        stars: [...e3.querySelectorAll("[data-star]")]
      });
    });
    let P2 = (0, s.useRef)(null), B2 = (0, s.useRef)(null), U2 = (0, s.useRef)(null), Y2 = (0, s.useRef)(null), K2 = (0, s.useRef)({ status: e2, geo: k2, paused: i2, onStatusChange: y2 });
    (0, s.useLayoutEffect)(() => {
      K2.current = { status: e2, geo: k2, paused: i2, onStatusChange: y2 };
    });
    let H2 = (0, s.useRef)(() => {
    }), Q2 = (0, s.useRef)({
      clock: 0,
      current: M2,
      from: null,
      transStart: 0,
      pose: h[M2],
      float: T.float,
      hem: T.hem,
      hem2: T.hem2,
      swirl: T.swirl,
      writeAt: -(2.3 * T.pen),
      errorAt: -10,
      doneAt: -10,
      gaze: [...F(M2).gaze],
      velocity: [0, 0],
      blinkAt: 2.4,
      blinkStart: -1,
      glance: [0, 0],
      glanceAt: 1.6,
      autoIndex: 0,
      autoAt: D[0][1],
      dirty: true
    }), V2 = I(h[M2], F(M2), k2), X2 = (e3) => {
      E2.current?.setAttribute("transform", e3.body), z2.current?.setAttribute("opacity", e3.opacity);
      let { shapes: t3, eyes: a3, stars: r2 } = L2.current;
      t3.forEach((t4) => t4.setAttribute("d", e3.d)), a3.forEach((t4, a4) => t4.setAttribute("d", e3.eyes[a4]));
      let s2 = P2.current;
      s2 && (s2.setAttribute("transform", e3.swirl.transform), s2.setAttribute("stroke-dasharray", e3.swirl.dash), s2.setAttribute("stroke-dashoffset", e3.swirl.offset), s2.setAttribute("opacity", e3.swirl.opacity)), r2.forEach((t4, a4) => {
        t4.setAttribute("transform", e3.stars[a4].transform), t4.setAttribute("opacity", e3.stars[a4].opacity);
      }), B2.current?.setAttribute("transform", e3.pen.transform), B2.current?.setAttribute("opacity", e3.pen.opacity), U2.current?.setAttribute("d", e3.line.d), U2.current?.setAttribute("opacity", e3.line.opacity), Y2.current?.setAttribute("transform", e3.ground.transform), Y2.current?.setAttribute("opacity", e3.ground.opacity);
    }, Z2 = (0, s.useRef)(X2);
    (0, s.useLayoutEffect)(() => {
      Z2.current = X2;
    });
    let [J2, ee] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      let e3 = window.matchMedia("(prefers-reduced-motion: reduce)"), t3 = () => ee(e3.matches);
      return t3(), e3.addEventListener("change", t3), () => e3.removeEventListener("change", t3);
    }, []), (0, s.useLayoutEffect)(() => {
      Q2.current.dirty = true;
    }, [k2]), (0, s.useEffect)(() => {
      let e3 = R2.current;
      if (!e3) return;
      let t3 = Q2.current, a3 = 0, r2 = 0, s2 = true, n3 = (e4) => {
        a3 = requestAnimationFrame(n3);
        let s3 = r2 ? Math.min(e4 - r2, 50) / 1e3 : 0;
        r2 = e4, t3.clock += s3;
        let l4 = t3.clock, { geo: o4, status: i3 } = K2.current;
        if (void 0 === i3 && l4 >= t3.autoAt) {
          t3.autoIndex = (t3.autoIndex + 1) % D.length;
          let [e5, a4] = D[t3.autoIndex];
          t3.autoAt = l4 + a4, A2(e5), K2.current.onStatusChange?.(e5);
        }
        let c3 = i3 ?? D[t3.autoIndex][0];
        if (c3 !== t3.current && (t3.from = J2 ? null : t3.pose, t3.transStart = l4, t3.current = c3, "writing" === c3 && t3.pose.pen < 0.05 && (t3.writeAt = l4), "done" === c3 && t3.pose.star < 0.05 && (t3.doneAt = l4), "error" === c3 && (t3.errorAt = l4), t3.dirty = true), J2) {
          if (!t3.dirty) return;
          t3.dirty = false, t3.pose = h[t3.current], Z2.current(I(t3.pose, F(t3.current), o4));
          return;
        }
        let u2 = h[t3.current];
        if (t3.from) {
          let e5 = b(q((l4 - t3.transStart) / 0.4));
          e5 >= 1 ? t3.from = null : u2 = (function(e6, t4, a4) {
            let r3 = { ...e6 };
            for (let s4 of Object.keys(e6))
              r3[s4] = e6[s4] + (t4[s4] - e6[s4]) * a4;
            return r3;
          })(t3.from, u2, e5);
        }
        t3.pose = u2, t3.float += s3 * u2.floatRate, t3.hem += s3 * u2.hemRate, t3.hem2 += s3 * u2.hemRate * 0.43, t3.swirl += s3 / 1.7;
        let d3 = ((l4 - t3.writeAt) / 2.3 % 1 + 1) % 1;
        l4 >= t3.glanceAt && (t3.glance = 0.35 > Math.random() ? [0, 0] : [O(-0.85, 0.85), O(-0.6, 0.45)], t3.glanceAt = l4 + O(1.2, 3.2)), l4 >= t3.blinkAt && (t3.blinkStart = l4, t3.blinkAt = l4 + (0.2 > Math.random() ? 0.32 : O(2.4, 5.2)));
        let [f2, m2] = C(d3), p3 = u2.gx + t3.glance[0] * u2.glance, y3 = u2.gy + t3.glance[1] * u2.glance, g3 = p3 + (f2 - p3) * q(u2.followPen), x3 = y3 + (m2 - y3) * q(u2.followPen), v3 = u2.gk, _3 = 2 * Math.sqrt(v3), k3 = Math.max(1, Math.ceil(s3 / (1 / 240))), w3 = s3 / k3;
        for (let e5 = 0; e5 < k3; e5++)
          t3.velocity[0] += (v3 * (g3 - t3.gaze[0]) - _3 * t3.velocity[0]) * w3, t3.velocity[1] += (v3 * (x3 - t3.gaze[1]) - _3 * t3.velocity[1]) * w3, t3.gaze[0] += t3.velocity[0] * w3, t3.gaze[1] += t3.velocity[1] * w3;
        let $3 = l4 - t3.blinkStart, M3 = 0;
        $3 >= 0 && $3 < 0.16 && (M3 = $3 < 0.06 ? Math.sin($3 / 0.06 * Math.PI / 2) : Math.cos(($3 - 0.06) / 0.1 * Math.PI / 2));
        let j2 = 1 - M3 * q(u2.blinkable);
        Z2.current(
          I(
            u2,
            {
              t: l4,
              float: t3.float,
              hem: t3.hem,
              hem2: t3.hem2,
              swirl: t3.swirl % 1,
              pen: d3,
              sinceError: l4 - t3.errorAt,
              sinceDone: l4 - t3.doneAt,
              gaze: t3.gaze,
              open: j2
            },
            o4
          )
        );
      }, l3 = () => {
        let e4 = s2 && !K2.current.paused && "visible" === document.visibilityState;
        e4 && !a3 && (r2 = 0, a3 = requestAnimationFrame(n3)), !e4 && a3 && (cancelAnimationFrame(a3), a3 = 0);
      }, o3 = new IntersectionObserver(
        ([e4]) => {
          s2 = e4.isIntersecting, l3();
        },
        { rootMargin: "48px" }
      );
      return o3.observe(e3), document.addEventListener("visibilitychange", l3), H2.current = l3, l3(), () => {
        o3.disconnect(), document.removeEventListener("visibilitychange", l3), cancelAnimationFrame(a3), a3 = 0, H2.current = () => {
        };
      };
    }, [J2]), (0, s.useEffect)(() => {
      H2.current();
    }, [i2]);
    let [et, ea] = (0, s.useState)(e2);
    e2 !== et && (ea(e2), void 0 !== e2 && A2(e2)), (0, s.useEffect)(() => {
      if (void 0 === e2) return;
      let t3 = Q2.current, a3 = D.findIndex(([t4]) => t4 === e2);
      a3 >= 0 && (t3.autoIndex = a3, t3.autoAt = t3.clock + D[a3][1]);
    }, [e2]);
    let er = d2 ?? `${c2}, ${u[M2].toLowerCase()}`, es = {
      width: t2,
      height: t2,
      ...n2 ? { "--ghost-body": n2 } : null,
      ...l2 ? { "--ghost-eye": l2 } : null,
      ...x2
    }, en = 0.5 * k2.penStroke;
    return (0, r.jsxs)("span", {
      ref: R2,
      className: [W().root, g2].filter(Boolean).join(" "),
      "data-tone": n2 ? "custom" : a2,
      "data-status": M2,
      style: es,
      children: [
        (0, r.jsxs)("svg", {
          ref: N2,
          className: W().svg,
          viewBox: k2.view,
          width: t2,
          height: t2,
          role: "img",
          "aria-label": er,
          focusable: "false",
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("clipPath", {
                id: _2,
                children: (0, r.jsx)("path", { "data-shape": true, d: V2.d })
              })
            }),
            w2 && (0, r.jsx)("ellipse", {
              ref: Y2,
              className: W().ground,
              cx: 0,
              cy: 0,
              rx: 23,
              ry: 3.1,
              transform: V2.ground.transform,
              opacity: V2.ground.opacity
            }),
            (0, r.jsx)("path", {
              ref: U2,
              className: W().line,
              d: V2.line.d,
              opacity: V2.line.opacity,
              strokeWidth: k2.lineStroke
            }),
            (0, r.jsxs)("g", {
              ref: E2,
              transform: V2.body,
              children: [
                (0, r.jsxs)("g", {
                  ref: z2,
                  opacity: V2.opacity,
                  children: [
                    (0, r.jsxs)("g", {
                      clipPath: `url(#${_2})`,
                      children: [
                        (0, r.jsx)("path", {
                          "data-shape": true,
                          className: W().shade,
                          d: V2.d
                        }),
                        (0, r.jsx)("path", {
                          "data-shape": true,
                          className: W().body,
                          d: V2.d,
                          transform: "translate(-1.8 -3)"
                        })
                      ]
                    }),
                    "sheet" === a2 && !n2 && (0, r.jsx)("path", {
                      "data-shape": true,
                      className: W().outline,
                      d: V2.d
                    })
                  ]
                }),
                (0, r.jsx)("path", {
                  "data-eye": true,
                  className: W().eye,
                  d: V2.eyes[0]
                }),
                (0, r.jsx)("path", {
                  "data-eye": true,
                  className: W().eye,
                  d: V2.eyes[1]
                }),
                (0, r.jsx)("path", {
                  ref: P2,
                  className: W().swirl,
                  d: j,
                  pathLength: 1,
                  strokeWidth: k2.markStroke / k2.markScale,
                  transform: V2.swirl.transform,
                  strokeDasharray: V2.swirl.dash,
                  strokeDashoffset: V2.swirl.offset,
                  opacity: V2.swirl.opacity
                }),
                (0, r.jsx)("path", {
                  "data-star": true,
                  className: W().mark,
                  d: S,
                  transform: V2.stars[0].transform,
                  opacity: V2.stars[0].opacity
                }),
                (0, r.jsx)("path", {
                  "data-star": true,
                  className: W().mark,
                  d: S,
                  transform: V2.stars[1].transform,
                  opacity: V2.stars[1].opacity
                })
              ]
            }),
            (0, r.jsx)("g", {
              ref: B2,
              className: W().pen,
              transform: V2.pen.transform,
              opacity: V2.pen.opacity,
              children: k2.compact ? (0, r.jsx)("line", {
                x1: 0.6,
                y1: -1.1,
                x2: 4.9,
                y2: -9,
                strokeWidth: k2.penStroke
              }) : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("line", {
                    x1: 0,
                    y1: 0,
                    x2: 1.3,
                    y2: -2.4,
                    strokeWidth: en
                  }),
                  (0, r.jsx)("line", {
                    x1: 2.3,
                    y1: -4.1,
                    x2: 6.6,
                    y2: -11.9,
                    strokeWidth: k2.penStroke
                  })
                ]
              })
            })
          ]
        }),
        p2 && (0, r.jsx)("span", {
          className: W().srOnly,
          "aria-live": "polite",
          children: er
        })
      ]
    });
  }
  var B = a(66558), U = a(51288), Y = a(52898), K = a(60441), H = a.n(K);
  let Q = {
    idle: "Ready when you are",
    listening: "Listening",
    thinking: "Thinking",
    writing: "Writing a reply",
    done: "Reply ready, 186 words",
    error: "Could not finish the reply"
  }, V = ["idle", "listening", "thinking", "writing", "done", "error"].map(
    (e2) => ({ value: e2, label: u[e2] })
  ), X = [
    { size: 24, tone: "accent", label: "24" },
    { size: 40, tone: "accent", label: "40" },
    { size: 64, tone: "accent", label: "64" },
    { size: 64, tone: "sheet", label: "Sheet" },
    { size: 64, tone: "ink", label: "Ink", className: H().wideOnly }
  ];
  function Z() {
    let e2 = (0, n.I)(), [t2, a2] = (0, s.useState)(true), [u2, d2] = (0, s.useState)("idle"), h2 = "thinking" === u2 || "writing" === u2 || "listening" === u2;
    return (0, r.jsx)("div", {
      className: H().demo,
      children: (0, r.jsxs)("div", {
        className: H().card,
        children: [
          (0, r.jsx)("div", {
            className: H().stage,
            children: (0, r.jsx)(G, {
              status: t2 ? void 0 : u2,
              onStatusChange: d2,
              size: 152,
              name: "Atlas",
              announce: true
            })
          }),
          (0, r.jsx)("div", {
            className: H().caption,
            children: (0, r.jsx)(l.N, {
              mode: "wait",
              initial: false,
              children: (0, r.jsx)(
                o.PY1.span,
                {
                  className: H().captionText,
                  initial: e2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] }
                  },
                  exit: { opacity: 0, transition: { duration: 0.1 } },
                  children: h2 ? (0, r.jsx)(Y.n, { children: Q[u2] }) : Q[u2]
                },
                u2
              )
            })
          }),
          (0, r.jsx)("ul", {
            className: H().sizes,
            "aria-label": "Sizes and tones",
            children: X.map(
              (e3) => (0, r.jsxs)(
                "li",
                {
                  className: [H().size, e3.className].filter(Boolean).join(" "),
                  children: [
                    (0, r.jsx)("span", {
                      className: H().slot,
                      children: (0, r.jsx)(G, {
                        status: u2,
                        size: e3.size,
                        tone: e3.tone,
                        name: "Atlas"
                      })
                    }),
                    (0, r.jsx)("span", {
                      className: H().sizeLabel,
                      children: e3.label
                    })
                  ]
                },
                e3.label
              )
            )
          }),
          (0, r.jsxs)("div", {
            className: H().controls,
            children: [
              (0, r.jsx)(B.A, {
                options: V,
                value: u2,
                onValueChange: (e3) => {
                  a2(false), d2(e3);
                },
                label: "Ghost state"
              }),
              (0, r.jsxs)(U.$, {
                variant: "ghost",
                size: "sm",
                onClick: () => a2((e3) => !e3),
                "aria-label": t2 ? "Pause" : "Play",
                children: [
                  t2 ? (0, r.jsx)(i.A, { size: 14, "aria-hidden": true }) : (0, r.jsx)(c.A, { size: 14, "aria-hidden": true }),
                  (0, r.jsx)("span", {
                    className: H().playText,
                    children: t2 ? "Pause" : "Play"
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  let J = Z;
}

__m(__module,__exports,__require);
}