function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { CubeMascotDemo: () => J, default: () => ee });
  var r = a(95155), n = a(12115), s = a(18310), i = a(80642), l = a(25354), o = a(79267), c = a(36619);
  let u = 2 * Math.PI, d = (e2) => e2 < 0 ? 0 : e2 > 1 ? 1 : e2, h = (e2, t2, a2) => {
    let r2 = d((a2 - e2) / (t2 - e2));
    return r2 * r2 * (3 - 2 * r2);
  }, f = (e2) => {
    let t2 = d(e2);
    return t2 < 0.5 ? 4 * t2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 3) / 2;
  }, p = Math.sin;
  function m(e2, t2, a2) {
    let r2 = {
      spin: 0,
      yaw: 0,
      roll: 0,
      pitch: 0,
      lift: 0,
      shift: 0,
      gx: 0,
      gy: 0,
      open: 1,
      blink: 1,
      happy: 0,
      worry: 0,
      mouth: 0.35,
      mouthW: 0.7,
      face: [1, 0, 0, 0],
      faceOpen: [1, 1, 1, 1],
      sparkle: 0,
      ink: 0
    };
    if ("idle" === e2)
      return r2.yaw = 4.5 * p(u * a2 / 7.3), r2.roll = 2.6 * p(u * a2 / 5.3 + 0.6), r2.pitch = 1.8 * p(u * a2 / 6.1 + 1.9), r2.lift = 0.045 * p(u * a2 / 3.6), r2.gx = 0.16 * p(u * a2 / 8.9 + 0.3) + 0.06 * p(u * a2 / 3.7), r2.gy = 0.07 * p(u * a2 / 6.3 + 1), r2;
    if ("thinking" === e2) {
      let e3 = t2 % 1.3, a3 = e3 < 0.5 ? 0 : f((e3 - 0.5) / 0.8), n3 = p(Math.PI * a3);
      return r2.spin = a3, r2.roll = -2.5 * n3, r2.pitch = -2.5, r2.lift = 0.02 + 0.06 * n3, r2.gx = 0.22 - 0.44 * n3, r2.gy = -0.32 + 0.12 * n3, r2.open = 0.95, r2.blink = 0, r2.mouth = 0.05, r2.mouthW = 0.4, r2.face = [1, h(0.5, 0.85, a3), 0, 0], r2.faceOpen = [1, 0.12 + 0.88 * h(0.68, 1, a3), 1, 1], r2;
    }
    if ("writing" === e2) {
      let e3 = u * t2 / 1.44;
      return r2.yaw = 2 * p(u * a2 / 6.7), r2.roll = 1.2 * p(u * a2 / 4.9), r2.pitch = 5 + p(e3), r2.lift = 0.03 * p(u * a2 / 3.6), r2.gx = 0.2 * p(e3), r2.gy = 0.42, r2.open = 0.8, r2.mouth = 0.1, r2.mouthW = 0.45, r2.ink = 1, r2;
    }
    if ("done" === e2) {
      let e3 = p(Math.PI * d(t2 / 0.6)) ** 2;
      return r2.lift = -0.05 * e3 + 0.015 * p(u * a2 / 4.2), r2.pitch = 3 * e3, r2.roll = -1.5, r2.gy = -0.05, r2.blink = 0, r2.happy = 1, r2.mouth = 1, r2.mouthW = 1, r2.sparkle = 1 - Math.pow(1 - d((t2 - 0.08) / 0.45), 3), r2;
    }
    let n2 = d(t2 / 0.56), s2 = (1 - n2) * (1 - n2), i2 = p(3.5 * u * n2);
    return r2.shift = 0.1 * s2 * i2, r2.yaw = 7 * s2 * i2, r2.roll = -2.5, r2.pitch = 2, r2.gy = 0.15, r2.open = 0.72, r2.worry = 1, r2.mouth = -0.8, r2.mouthW = 0.55, r2;
  }
  let y = (e2, t2, a2) => e2 + (t2 - e2) * a2, g = (e2, t2, a2) => [
    y(e2[0], t2[0], a2),
    y(e2[1], t2[1], a2),
    y(e2[2], t2[2], a2),
    y(e2[3], t2[3], a2)
  ], x = [3.1, 4.4, 0.34, 3.7, 2.6, 4.9], v = x.reduce((e2, t2) => e2 + t2, 0);
  function b(e2) {
    let t2 = 43758.5453 * p(127.1 * e2 + 311.7);
    return t2 - Math.floor(t2);
  }
  var _ = a(41426), k = a.n(_);
  let w = {
    idle: "ready",
    thinking: "thinking",
    writing: "writing",
    done: "done",
    error: "something went wrong"
  }, $ = ["idle", "thinking", "writing", "done", "error"], j = { idle: 2.4, thinking: 2.75, writing: 3.2, done: 2.3, error: 1.7 }, M = Math.PI / 180, N = 32 * M, A = Math.cos(N), E = Math.sin(N), z = -30 * M, L = 0.225 + -0.866 * E * 0.75 + 0.866 * A * 0.48;
  function W(e2, t2) {
    if (e2)
      return {
        S: 28,
        cx: 50,
        cy: 51,
        radius: 8.4,
        eyeX: 16,
        eyeY: -4,
        eyeW: 14,
        eyeH: 24,
        gazeX: 6,
        gazeY: 6,
        stroke: 6,
        mouthY: 14,
        mouth: false,
        ground: false,
        spark: [83.6, 51 - 38.080000000000005, 10.64],
        spark2: null
      };
    let a2 = t2 ? 47.6 : 50;
    return {
      S: 24,
      cx: 50,
      cy: a2,
      radius: 6.24,
      eyeX: 14,
      eyeY: -8,
      eyeW: 10,
      eyeH: 17,
      gazeX: 8,
      gazeY: 7,
      stroke: 3.4,
      mouthY: 12,
      mouth: true,
      ground: t2,
      spark: [82.4, a2 - 36, 10.08],
      spark2: [95.12, a2 - 23.52, 4.5600000000000005]
    };
  }
  let S = (e2, t2, a2) => ({
    cy: Math.cos(e2),
    sy: Math.sin(e2),
    cr: Math.cos(t2),
    sr: Math.sin(t2),
    cp: Math.cos(a2),
    sp: Math.sin(a2)
  });
  function T(e2, t2, a2, r2, n2) {
    let s2 = t2 * e2.cy + r2 * e2.sy, i2 = -t2 * e2.sy + r2 * e2.cy, l2 = s2 * e2.cr - a2 * e2.sr, o2 = s2 * e2.sr + a2 * e2.cr, c2 = o2 * e2.cp - i2 * e2.sp, u2 = o2 * e2.sp + i2 * e2.cp;
    n2[0] = l2, n2[1] = c2 * A - u2 * E, n2[2] = c2 * E + u2 * A;
  }
  let R = (e2) => (Math.round(100 * e2) / 100).toString(), C = (e2, t2, a2) => {
    e2 && e2.getAttribute(t2) !== a2 && e2.setAttribute(t2, a2);
  }, O = (e2, t2) => C(e2, "display", t2 ? "inline" : "none"), P = [0, 1, 2, 3, 4].map(function(e2) {
    if (4 === e2) return { n: [0, 1, 0], u: [1, 0, 0], v: [0, 0, -1] };
    let t2 = e2 * Math.PI / 2, a2 = Math.round(Math.sin(t2)), r2 = Math.round(Math.cos(t2));
    return { n: [a2, 0, r2], u: [r2, 0, -a2], v: [0, 1, 0] };
  }), I = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1]
  ], Y = (e2, t2, a2) => (t2[0] - e2[0]) * (a2[1] - e2[1]) - (t2[1] - e2[1]) * (a2[0] - e2[0]);
  function F(e2, t2) {
    let a2 = e2.length, r2 = "";
    for (let n2 = 0; n2 < a2; n2++) {
      let s2 = e2[(n2 + a2 - 1) % a2], i2 = e2[n2], l2 = e2[(n2 + 1) % a2], o2 = s2[0] - i2[0], c2 = s2[1] - i2[1], u2 = l2[0] - i2[0], d2 = l2[1] - i2[1], h2 = Math.hypot(o2, c2) || 1, f2 = Math.hypot(u2, d2) || 1, p2 = Math.min(
        t2 / Math.tan(
          Math.acos(Math.max(-1, Math.min(1, (o2 * u2 + c2 * d2) / (h2 * f2)))) / 2 || 1e-6
        ),
        h2 / 2,
        f2 / 2
      );
      r2 += `${n2 ? "L" : "M"}${R(i2[0] + o2 / h2 * p2)} ${R(i2[1] + c2 / h2 * p2)}Q${R(i2[0])} ${R(i2[1])} ${R(i2[0] + u2 / f2 * p2)} ${R(i2[1] + d2 / f2 * p2)}`;
    }
    return r2 + "Z";
  }
  function q(e2, t2, a2, r2, n2) {
    let s2 = z + a2.yaw * M - a2.spin * Math.PI / 2, i2 = S(s2, a2.roll * M, a2.pitch * M), l2 = t2.S, o2 = t2.cx + l2 * a2.shift, c2 = t2.cy - l2 * a2.lift, d2 = [0, 0, 0], f2 = [], m2 = (e3) => o2 + l2 * e3, y2 = (e3) => c2 - l2 * e3, g2 = [];
    for (let e3 = 0; e3 < 8; e3++)
      T(i2, 1 & e3 ? 1 : -1, 2 & e3 ? 1 : -1, 4 & e3 ? 1 : -1, d2), g2.push([m2(d2[0]), y2(d2[1])]);
    let _2 = F(
      (function(e3) {
        let t3 = [...e3].sort((e4, t4) => e4[0] - t4[0] || e4[1] - t4[1]), a3 = [];
        for (let e4 of t3) {
          for (; a3.length >= 2 && 1e-6 >= Y(a3[a3.length - 2], a3[a3.length - 1], e4); )
            a3.pop();
          a3.push(e4);
        }
        let r3 = [];
        for (let e4 = t3.length - 1; e4 >= 0; e4--) {
          let a4 = t3[e4];
          for (; r3.length >= 2 && 1e-6 >= Y(r3[r3.length - 2], r3[r3.length - 1], a4); )
            r3.pop();
          r3.push(a4);
        }
        return a3.slice(0, -1).concat(r3.slice(0, -1));
      })(g2),
      t2.radius
    );
    C(e2.clip, "d", _2), C(e2.under, "d", _2);
    for (let t3 = 0; t3 < 5; t3++) {
      let { n: a3, u: r3, v: n3 } = P[t3];
      T(i2, a3[0], a3[1], a3[2], d2), f2[t3] = d2[2];
      let s3 = e2.fills[t3];
      if (d2[2] <= 0) {
        O(s3, false);
        continue;
      }
      let l3 = -0.45 * d2[0] + 0.75 * d2[1] + 0.48 * d2[2] - L, o3 = "";
      I.forEach(([e3, t4], s4) => {
        T(
          i2,
          a3[0] + e3 * r3[0] + t4 * n3[0],
          a3[1] + e3 * r3[1] + t4 * n3[1],
          a3[2] + e3 * r3[2] + t4 * n3[2],
          d2
        ), o3 += `${s4 ? "L" : "M"}${R(m2(d2[0]))} ${R(y2(d2[1]))}`;
      }), C(s3, "d", o3 + "Z"), O(s3, true);
      let c3 = (function(e3) {
        let t4 = Math.round(Math.min(100, Math.abs(e3) / 0.63 * 100));
        return 0 === t4 ? "var(--cube-front)" : `color-mix(in oklab, var(--cube-front), var(${e3 > 0 ? "--cube-top" : "--cube-side"}) ${t4}%)`;
      })(l3);
      s3.dataset.tone !== c3 && (s3.dataset.tone = c3, s3.style.fill = c3);
    }
    let k2 = a2.blink > 0 ? a2.blink * (function(e3) {
      let t3 = ((e3 - 1.2) % v + v) % v;
      for (let e4 of x) {
        if (t3 < 0.17) return p(Math.PI * t3 / 0.17) ** 2;
        if ((t3 -= e4) < 0) break;
      }
      return 0;
    })(r2) : 0;
    for (let r3 = 0; r3 < 4; r3++) {
      let n3 = e2.feats[r3], s3 = a2.face[r3] * h(0.08, 0.4, f2[r3]);
      if (s3 < 5e-3) {
        O(n3.g, false);
        continue;
      }
      let { n: o3, u: c3, v: u2 } = P[r3], d3 = [0, 0, 0], p2 = [0, 0, 0], g3 = [0, 0, 0];
      T(i2, c3[0], c3[1], c3[2], d3), T(i2, u2[0], u2[1], u2[2], p2), T(i2, o3[0], o3[1], o3[2], g3);
      let x2 = l2 / 50;
      O(n3.g, true), C(n3.g, "opacity", R(s3)), C(
        n3.g,
        "transform",
        `matrix(${[x2 * d3[0], -x2 * d3[1], -x2 * p2[0], x2 * p2[1], m2(g3[0]), y2(g3[1])].map((e3) => e3.toFixed(4)).join(" ")})`
      );
      let v2 = a2.gx * t2.gazeX, b2 = a2.gy * t2.gazeY, _3 = a2.open * (1 - k2) * a2.faceOpen[r3] * (1 - a2.happy), w3 = Math.max(0.3 * t2.eyeW, t2.eyeH * _3), $3 = R(1 - h(0.55, 0.95, a2.happy)), j3 = R(h(0.35, 0.85, a2.happy)), M2 = (0.3 + 0.7 * a2.happy) * t2.eyeW * 0.8, N3 = 0.66 * t2.eyeW;
      if ([-1, 1].forEach((e3, r4) => {
        let s4 = e3 * t2.eyeX + v2, i3 = t2.eyeY + b2, l3 = n3.eyes[r4];
        C(l3, "x", R(s4 - t2.eyeW / 2)), C(l3, "y", R(i3 - w3 / 2)), C(l3, "width", R(t2.eyeW)), C(l3, "height", R(w3)), C(l3, "rx", R(t2.eyeW / 2)), C(l3, "opacity", $3), C(
          n3.arcs[r4],
          "d",
          `M${R(s4 - N3)} ${R(i3 + 0.45 * M2)}Q${R(s4)} ${R(i3 - 1.1 * M2)} ${R(s4 + N3)} ${R(i3 + 0.45 * M2)}`
        ), C(n3.arcs[r4], "opacity", j3), C(n3.arcs[r4], "stroke-width", R(1.15 * t2.stroke));
        let o4 = t2.eyeY - t2.eyeH / 2 - 0.5 * t2.eyeW + 0.6 * b2, c4 = e3 * (t2.eyeX - 0.7 * t2.eyeW) + v2, u3 = e3 * (t2.eyeX + 0.7 * t2.eyeW) + v2;
        C(
          n3.brows[r4],
          "d",
          `M${R(u3)} ${R(o4 + 2 * a2.worry)}L${R(c4)} ${R(o4 - 3.5 * a2.worry)}`
        ), C(n3.brows[r4], "opacity", R(a2.worry)), C(n3.brows[r4], "stroke-width", R(t2.stroke));
      }), O(n3.mouth, t2.mouth), t2.mouth) {
        let e3 = 1.5 + 5.5 * a2.mouthW, r4 = t2.mouthY + 0.5 * b2, s4 = 5.5 * a2.mouth, i3 = 0.5 * v2;
        C(
          n3.mouth,
          "d",
          `M${R(i3 - e3)} ${R(r4 - 0.3 * s4)}Q${R(i3)} ${R(r4 + s4)} ${R(i3 + e3)} ${R(r4 - 0.3 * s4)}`
        ), C(n3.mouth, "stroke-width", R(t2.stroke));
      }
    }
    let w2 = S(s2, 0, 0), $2 = (e3) => t2.cy - l2 * e3;
    if (O(e2.shadow, t2.ground), t2.ground) {
      let r3 = I.map(([e3, r4]) => {
        let n3;
        return T(w2, 1.08 * e3, -1.06, 1.08 * r4, d2), [(n3 = d2[0], t2.cx + l2 * a2.shift + l2 * n3), $2(d2[1])];
      });
      C(e2.shadow, "d", F(r3, t2.radius)), C(e2.shadow, "opacity", R(Math.max(0.4, 1 - 6 * Math.max(0, a2.lift))));
    }
    let { n: j2, u: N2 } = P[0];
    for (let r3 = 0; r3 < 4; r3++) {
      let s3 = e2.lines[r3], i3 = null === n2 ? -1 : Math.floor(n2 / 0.36) - r3;
      if (!t2.ground || null === n2 || a2.ink < 5e-3 || i3 < 0) {
        O(s3, false);
        continue;
      }
      let o3 = (n2 - 0.36 * i3) / 1.44, c3 = a2.ink * h(0, 0.18, o3) * (1 - h(0.62, 1, o3)), u2 = 1.34 + 0.92 * o3, f3 = i3 % 5 == 4 ? 0.45 + 0.35 * b(i3) : 1.05 + 0.4 * b(i3), p2 = "";
      [-0.74, -0.74 + f3].forEach((e3, a3) => {
        T(w2, j2[0] * u2 + N2[0] * e3, -1.06, j2[2] * u2 + N2[2] * e3, d2), p2 += `${a3 ? "L" : "M"}${R(t2.cx + l2 * d2[0])} ${R($2(d2[1]))}`;
      }), C(s3, "d", p2), C(s3, "opacity", R(c3)), O(s3, c3 > 5e-3);
    }
    [
      [e2.spark, t2.spark, a2.sparkle],
      [e2.spark2, t2.spark2, Math.max(0, (a2.sparkle - 0.3) / 0.7)]
    ].forEach(([e3, t3, a3], n3) => {
      var s3;
      let i3;
      if (!t3 || a3 < 5e-3) return void O(e3, false);
      let l3 = 1 + 0.07 * a3 * Math.sin(u * r2 / 2.4 + 1.7 * n3);
      O(e3, true), C(e3, "opacity", R(Math.min(1, 1.6 * a3))), C(
        e3,
        "transform",
        `translate(${R(t3[0])} ${R(t3[1])}) rotate(${R(-60 * (1 - a3))}) scale(${(a3 * l3).toFixed(3)})`
      ), C(
        e3.firstElementChild,
        "d",
        (i3 = 0.16 * (s3 = t3[2]), `M0 ${R(-s3)}Q${R(i3)} ${R(-i3)} ${R(s3)} 0Q${R(i3)} ${R(i3)} 0 ${R(s3)}Q${R(-i3)} ${R(i3)} ${R(-s3)} 0Q${R(-i3)} ${R(-i3)} 0 ${R(-s3)}Z`)
      );
    });
  }
  function D({
    status: e2,
    size: t2 = 96,
    color: a2,
    faceColor: s2,
    ground: i2 = true,
    paused: l2 = false,
    name: o2 = "Assistant",
    label: c2,
    announce: u2 = false,
    onStatusChange: d2,
    className: h2,
    style: p2
  }) {
    let x2 = (0, n.useRef)(null), v2 = `cube-${(0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, b2 = (0, n.useRef)(null), [_2, M2] = (0, n.useState)("idle"), N2 = (0, n.useRef)(d2);
    (0, n.useEffect)(() => {
      N2.current = d2;
    }, [d2]);
    let [A2, E2] = (0, n.useState)(e2);
    e2 !== A2 && (E2(e2), void 0 === e2 && void 0 !== A2 && M2(A2));
    let z2 = void 0 === e2, L2 = e2 ?? _2, S2 = t2 < 56, T2 = (0, n.useRef)(L2);
    (0, n.useLayoutEffect)(() => {
      var e3, t3, a3;
      let r2, n2, s3, i3, l3, o3, c3, u3, d3, h3, p3, v3, _3, k2, w2, A3, E3, z3, L3, S3, R3, C3, O2, P2, I2, Y2, F2, D2, B2, X2 = x2.current;
      if (!X2) return;
      let G2 = (e3 = T2.current, t3 = (e4) => {
        M2(e4), N2.current?.(e4);
      }, a3 = X2, r2 = (e4, t4 = a3) => Array.from(t4.querySelectorAll(e4)), n2 = {
        clip: a3.querySelector("[data-clip]"),
        under: a3.querySelector("[data-under]"),
        fills: r2("[data-fill]"),
        shadow: a3.querySelector("[data-shadow]"),
        feats: r2("[data-feat]").map((e4) => ({
          g: e4,
          eyes: r2("[data-eye]", e4),
          arcs: r2("[data-arc]", e4),
          brows: r2("[data-brow]", e4),
          mouth: e4.querySelector("[data-mouth]")
        })),
        lines: r2("[data-line]"),
        spark: a3.querySelector("[data-spark]"),
        spark2: a3.querySelector("[data-spark2]")
      }, s3 = W(false, true), i3 = e3, l3 = 0, o3 = 0, c3 = -1 / 0, u3 = 0.42, d3 = "writing" === e3 ? 0 : null, p3 = h3 = m(e3, 0, 0), v3 = false, _3 = false, k2 = true, w2 = "u" < typeof document || !document.hidden, A3 = false, E3 = 0, z3 = 0, L3 = false, S3 = () => !v3 && k2 && w2 && !A3, R3 = () => {
        if (A3) {
          var e4;
          p3 = m(
            e4 = i3,
            "thinking" === e4 ? 0.2 : 2 * ("done" === e4 || "error" === e4),
            0
          ), q(n2, s3, p3, 0, "writing" === i3 ? 0.8999999999999999 : null);
          return;
        }
        let t4 = m(i3, l3 - o3, l3), a4 = (l3 - c3) / u3;
        p3 = a4 < 1 ? (function(e5, t5, a5) {
          let r3 = { ...t5 };
          for (let n3 of Object.keys(t5))
            "face" !== n3 && "faceOpen" !== n3 && (r3[n3] = y(e5[n3], t5[n3], a5));
          return r3.face = g(e5.face, t5.face, a5), r3.faceOpen = g(e5.faceOpen, t5.faceOpen, a5), r3;
        })(h3, t4, f(a4)) : t4, q(n2, s3, p3, l3, null === d3 ? null : l3 - d3);
      }, C3 = (e4) => {
        let a4 = z3 ? Math.min(0.05, (e4 - z3) / 1e3) : 0;
        z3 = e4, l3 += a4, _3 && !L3 && l3 - o3 > j[i3] && (L3 = true, t3($[($.indexOf(i3) + 1) % $.length])), R3(), E3 = requestAnimationFrame(C3);
      }, O2 = () => {
        let e4 = S3();
        e4 && !E3 && (z3 = 0, E3 = requestAnimationFrame(C3)), !e4 && E3 && (cancelAnimationFrame(E3), E3 = 0), e4 || R3();
      }, P2 = 0, I2 = () => {
        window.clearTimeout(P2), A3 && _3 && !v3 && k2 && w2 && (P2 = window.setTimeout(
          () => t3($[($.indexOf(i3) + 1) % $.length]),
          1e3 * j[i3]
        ));
      }, A3 = (Y2 = window.matchMedia("(prefers-reduced-motion: reduce)")).matches, F2 = () => {
        A3 = Y2.matches, O2(), I2();
      }, Y2.addEventListener("change", F2), (D2 = new IntersectionObserver(
        ([e4]) => {
          k2 = e4.isIntersecting, O2(), I2();
        },
        { rootMargin: "48px" }
      )).observe(X2), B2 = () => {
        w2 = !document.hidden, O2(), I2();
      }, document.addEventListener("visibilitychange", B2), R3(), {
        setStatus(e4) {
          e4 !== i3 && (h3 = (function(e5) {
            if (e5.spin <= 0.35)
              return { ...e5, face: [...e5.face], faceOpen: [...e5.faceOpen] };
            let t4 = (e6) => [e6[1], e6[2], e6[3], e6[0]];
            return {
              ...e5,
              spin: e5.spin - 1,
              face: t4(e5.face),
              faceOpen: t4(e5.faceOpen)
            };
          })(p3), "writing" === e4 && (null === d3 || p3.ink < 0.05) && (d3 = l3), i3 = e4, o3 = l3, L3 = false, u3 = "error" === e4 ? 0.24 : 0.42, c3 = S3() ? l3 : -1 / 0, S3() || R3(), I2());
        },
        setOptions(e4) {
          s3 = W(e4.compact, e4.ground), v3 = e4.paused, _3 = e4.auto, O2(), I2();
        },
        destroy() {
          cancelAnimationFrame(E3), window.clearTimeout(P2), Y2.removeEventListener("change", F2), D2.disconnect(), document.removeEventListener("visibilitychange", B2);
        }
      });
      return b2.current = G2, () => {
        G2.destroy(), b2.current = null;
      };
    }, []), (0, n.useLayoutEffect)(() => {
      b2.current?.setOptions({ compact: S2, ground: i2, paused: l2, auto: z2 });
    }, [S2, i2, l2, z2]), (0, n.useLayoutEffect)(() => {
      b2.current?.setStatus(L2);
    }, [L2]);
    let R2 = c2 ?? `${o2}, ${w[L2]}`, C2 = {
      width: t2,
      height: t2,
      ...a2 ? { "--cube-body": a2 } : null,
      ...s2 ? { "--cube-ink": s2 } : null,
      ...p2
    };
    return (0, r.jsxs)("span", {
      className: [k().root, h2].filter(Boolean).join(" "),
      style: C2,
      "data-status": L2,
      children: [
        (0, r.jsxs)("svg", {
          ref: x2,
          className: k().svg,
          viewBox: "0 0 100 100",
          width: t2,
          height: t2,
          role: "img",
          "aria-label": R2,
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("clipPath", {
                id: v2,
                children: (0, r.jsx)("path", { "data-clip": true })
              })
            }),
            (0, r.jsx)("path", {
              "data-shadow": true,
              className: k().shadow,
              display: "none"
            }),
            (0, r.jsxs)("g", {
              clipPath: `url(#${v2})`,
              children: [
                (0, r.jsx)("path", { "data-under": true, className: k().under }),
                [0, 1, 2, 3, 4].map(
                  (e3) => (0, r.jsx)(
                    "path",
                    { "data-fill": e3, className: k().fill, display: "none" },
                    e3
                  )
                ),
                [0, 1, 2, 3].map(
                  (e3) => (0, r.jsxs)(
                    "g",
                    {
                      "data-feat": e3,
                      display: "none",
                      children: [
                        (0, r.jsx)("rect", {
                          "data-eye": true,
                          className: k().eye
                        }),
                        (0, r.jsx)("rect", {
                          "data-eye": true,
                          className: k().eye
                        }),
                        (0, r.jsx)("path", {
                          "data-arc": true,
                          className: k().stroke
                        }),
                        (0, r.jsx)("path", {
                          "data-arc": true,
                          className: k().stroke
                        }),
                        (0, r.jsx)("path", {
                          "data-brow": true,
                          className: k().stroke
                        }),
                        (0, r.jsx)("path", {
                          "data-brow": true,
                          className: k().stroke
                        }),
                        (0, r.jsx)("path", {
                          "data-mouth": true,
                          className: k().stroke
                        })
                      ]
                    },
                    e3
                  )
                )
              ]
            }),
            [0, 1, 2, 3].map(
              (e3) => (0, r.jsx)(
                "path",
                { "data-line": true, className: k().line, display: "none" },
                e3
              )
            ),
            (0, r.jsx)("g", {
              "data-spark": true,
              display: "none",
              children: (0, r.jsx)("path", { className: k().spark })
            }),
            (0, r.jsx)("g", {
              "data-spark2": true,
              display: "none",
              children: (0, r.jsx)("path", { className: k().spark })
            })
          ]
        }),
        u2 ? (0, r.jsx)("span", {
          className: k().live,
          role: "status",
          "aria-live": "polite",
          children: R2
        }) : null
      ]
    });
  }
  var B = a(66558), X = a(51288), G = a(52898), Q = a(51591), H = a.n(Q);
  let K = {
    idle: "Idle",
    thinking: "Thinking",
    writing: "Writing",
    done: "Done",
    error: "Error"
  }, U = {
    idle: "Ask Atlas anything",
    thinking: "Thinking",
    writing: "Writing the release notes",
    done: "Release notes ready, 312 words",
    error: "Could not reach the repository"
  }, Z = ["idle", "thinking", "writing", "done", "error"].map((e2) => ({
    value: e2,
    label: K[e2]
  })), V = [24, 32, 40, 64];
  function J() {
    let e2 = (0, s.I)(), [t2, a2] = (0, n.useState)(true), [u2, d2] = (0, n.useState)("idle"), h2 = "thinking" === u2 || "writing" === u2;
    return (0, r.jsx)("div", {
      className: H().demo,
      children: (0, r.jsxs)("div", {
        className: H().card,
        children: [
          (0, r.jsx)("div", {
            className: H().stage,
            children: (0, r.jsx)(D, {
              status: t2 ? void 0 : u2,
              onStatusChange: d2,
              size: 160,
              name: "Atlas",
              announce: true
            })
          }),
          (0, r.jsxs)("div", {
            className: H().inline,
            children: [
              (0, r.jsx)(D, { status: u2, size: 24, name: "Atlas" }),
              (0, r.jsx)("span", {
                className: H().line,
                children: (0, r.jsx)(i.N, {
                  mode: "wait",
                  initial: false,
                  children: (0, r.jsx)(
                    l.PY1.span,
                    {
                      className: H().lineText,
                      initial: e2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.16,
                          ease: [0.23, 1, 0.32, 1]
                        }
                      },
                      exit: { opacity: 0, transition: { duration: 0.1 } },
                      children: h2 ? (0, r.jsx)(G.n, { children: U[u2] }) : U[u2]
                    },
                    u2
                  )
                })
              })
            ]
          }),
          (0, r.jsx)("div", {
            className: H().sizes,
            "aria-label": "Sizes",
            children: V.map(
              (e3) => (0, r.jsxs)(
                "div",
                {
                  className: H().size,
                  children: [
                    (0, r.jsx)("div", {
                      className: H().sizeBox,
                      children: (0, r.jsx)(D, {
                        status: u2,
                        size: e3,
                        name: "Atlas"
                      })
                    }),
                    (0, r.jsx)("span", {
                      className: H().sizeLabel,
                      children: e3
                    })
                  ]
                },
                e3
              )
            )
          }),
          (0, r.jsxs)("div", {
            className: H().controls,
            children: [
              (0, r.jsx)(B.A, {
                options: Z,
                value: u2,
                onValueChange: (e3) => {
                  a2(false), d2(e3);
                },
                label: "Cube state"
              }),
              (0, r.jsxs)(X.$, {
                variant: "ghost",
                size: "sm",
                onClick: () => a2((e3) => !e3),
                "aria-label": t2 ? "Pause" : "Play",
                children: [
                  t2 ? (0, r.jsx)(o.A, { size: 14, "aria-hidden": true }) : (0, r.jsx)(c.A, { size: 14, "aria-hidden": true }),
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
  let ee = J;
}

__m(__module,__exports,__require);
}