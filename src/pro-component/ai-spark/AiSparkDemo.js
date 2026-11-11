function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { AiSparkDemo: () => U, default: () => K });
  var n = r(95155), a = r(12115), i = r(18310), l = r(92171), s = r(80642), o = r(25354), u = r(52898), c = r(50756), d = r.n(c);
  let f = {
    idle: "Ready",
    thinking: "Thinking",
    generating: "Writing",
    done: "Done",
    error: "Couldn't finish"
  }, p = {
    idle: "AI ready",
    thinking: "AI is thinking",
    generating: "AI is writing",
    done: "AI finished",
    error: "AI couldn't finish"
  }, h = {
    accent: "var(--accent)",
    foreground: "var(--foreground)",
    muted: "var(--text-muted)",
    inherit: "currentColor"
  }, m = [
    ["idle", 1600],
    ["thinking", 2800],
    ["generating", 3600],
    ["done", 2e3]
  ], g = 2 * Math.PI, v = [0, 0.021, -0.014, 0.017, -0.019, 0.012, 8e-3, -0.016], y = (e2) => e2 - Math.floor(e2), x = (e2, t2, r2) => e2 + (t2 - e2) * r2, b = (e2) => Math.min(1, Math.max(0, e2)), k = (e2) => 0.5 - 0.5 * Math.cos(g * e2), _ = (e2, t2, r2) => e2 <= t2 || e2 >= t2 + r2 ? 0 : Math.sin(Math.PI * (e2 - t2) / r2) ** 2, w = (e2) => e2 < 0.5 ? 4 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 3) / 2, j = (e2) => String(Math.round(100 * e2) / 100);
  function A(e2, t2, r2, n2) {
    let a2 = t2 - e2;
    if (a2 <= r2 - n2 + 1e-3) {
      let t3 = j(-e2), n3 = j(r2);
      return `M${n3} ${t3}A${n3} ${n3} 0 1 0 -${n3} ${t3}A${n3} ${n3} 0 1 0 ${n3} ${t3}Z`;
    }
    let i2 = (r2 - n2) / a2, l2 = Math.sqrt(1 - i2 * i2), s2 = j(r2 * l2), o2 = j(-e2 - r2 * i2), u2 = j(n2 * l2), c2 = j(-t2 - n2 * i2);
    return `M${s2} ${o2}L${u2} ${c2}A${j(n2)} ${j(n2)} 0 0 0 -${u2} ${c2}L-${s2} ${o2}A${j(r2)} ${j(r2)} 0 1 0 ${s2} ${o2}Z`;
  }
  function M(e2, t2, r2) {
    let n2 = 4 * t2, a2 = Math.max(0, r2[n2]), i2 = r2[n2 + 1], l2 = r2[n2 + 2];
    if (t2 % 2 == 0) {
      let t3 = e2.p, r3 = t3.r0 + l2;
      return A(r3, r3 + (t3.r1 - t3.r0) * a2, t3.a * i2, t3.b * i2);
    }
    let s2 = e2.s, o2 = s2.r0 + l2;
    if (s2.dot) {
      let e3 = s2.a * i2 * (0.72 + 0.28 * Math.min(1.3, a2));
      return A(o2, o2, e3, e3);
    }
    return A(o2, o2 + (s2.r1 - s2.r0) * a2, s2.a * i2, Math.min(s2.a, s2.b) * i2);
  }
  function $(e2, t2, r2, n2, a2, i2) {
    let l2 = 4 * t2;
    e2[l2] = r2, e2[l2 + 1] = n2, e2[l2 + 2] = a2, e2[l2 + 3] = i2;
  }
  function E(e2) {
    return {
      fill: (t2, r2) => {
        for (let n2 = 0; n2 < 8; n2++) {
          if (n2 % 2 == 0) {
            $(r2, n2, 1, 1, 0, 1);
            continue;
          }
          let a2 = e2 ? _(y(t2 / 6.4 - (n2 - 1) / 8 + v[n2]), 0, 0.32) : 0;
          $(r2, n2, 1 + 0.3 * a2, 1 + 0.08 * a2, +a2, 1);
        }
        r2[32] = e2 ? 1 + 0.018 * k(t2 / 6.4) : 1, r2[33] = e2 ? 1 + 0.1 * k(t2 / 3.2) : 1, r2[34] = 0;
      },
      spin: 0,
      rest: true,
      loops: e2
    };
  }
  let R = {
    fill: (e2, t2) => {
      for (let r2 = 0; r2 < 8; r2++) {
        let n2 = k(e2 / 1.9 - r2 / 8 + v[r2]) ** 1.35;
        r2 % 2 == 0 ? $(t2, r2, 0.7 + 0.3 * n2, 0.94 + 0.08 * n2, -1 + 2 * n2, 1) : $(
          t2,
          r2,
          0.42 + 0.78 * n2,
          0.88 + 0.16 * n2,
          -1 + 3 * n2,
          0.5 + 0.5 * n2
        );
      }
      t2[32] = 0.965 + 0.03 * k(e2 / 4), t2[33] = 0.7 + 0.22 * k(e2), t2[34] = 0;
    },
    spin: 26,
    rest: false,
    loops: true
  }, L = (e2) => _(e2, 0, 0.2) + 0.62 * _(e2, 0.2, 0.22), z = {
    fill: (e2, t2) => {
      for (let r3 = 0; r3 < 8; r3++) {
        let n2 = r3 >> 1;
        if (r3 % 2 == 0) {
          let a2 = L(y(e2 / 1.04 - 0.045 * n2 + 0.3 * v[r3]));
          $(t2, r3, 0.7 + 0.32 * a2, 0.96 + 0.08 * a2, 0.8 * a2, 1);
        } else {
          let a2 = L(y(e2 / 1.04 - 0.17 - 0.045 * n2 + 0.3 * v[r3]));
          $(t2, r3, 0.55 + 0.65 * a2, 0.92 + 0.12 * a2, 2.5 * a2, 0.6 + 0.4 * a2);
        }
      }
      let r2 = L(y(e2 / 1.04));
      t2[32] = 0.975 + 0.035 * r2, t2[33] = 0.9 + 0.5 * L(y(e2 / 1.04 - 0.03)), t2[34] = 1;
    },
    spin: 46,
    rest: false,
    loops: true
  }, N = {
    fill: (e2, t2) => {
      for (let e3 = 0; e3 < 8; e3++) $(t2, e3, 1, 1, 0, 1);
      t2[32] = 1, t2[33] = 1, t2[34] = 0;
    },
    spin: 0,
    rest: true,
    loops: false
  }, S = {
    fill: (e2, t2) => {
      for (let e3 = 0; e3 < 8; e3++)
        e3 % 2 == 0 ? $(t2, e3, 0.56, 0.96, -1, 1) : $(t2, e3, 0.34, 0.9, -2, 0.45);
      t2[32] = 0.96, t2[33] = 0.8, t2[34] = 0;
    },
    spin: 0,
    rest: true,
    loops: false
  }, C = E(true), T = E(false);
  function I(e2, t2) {
    switch (e2) {
      case "idle":
        return t2 ? C : T;
      case "thinking":
        return R;
      case "generating":
        return z;
      case "done":
        return N;
      default:
        return S;
    }
  }
  let F = () => () => {
  };
  function W({
    status: e2,
    size: t2,
    tone: r2 = "accent",
    color: l2,
    variant: s2 = "mark",
    label: o2,
    speed: u2 = 1,
    twinkle: c2 = true,
    paused: v2 = false,
    announce: y2 = true,
    "aria-label": _2,
    className: j2,
    style: A2
  }) {
    let $2 = (function(e3) {
      let [t3, r3] = (0, a.useState)(0);
      return (0, a.useEffect)(() => {
        if (!e3) return;
        let n2 = window.setTimeout(
          () => r3((e4) => (e4 + 1) % m.length),
          m[t3][1]
        );
        return () => window.clearTimeout(n2);
      }, [e3, t3]), m[t3][0];
    })(void 0 === e2 && !v2), E2 = e2 ?? $2, R2 = "pill" === s2, L2 = "avatar" === s2, z2 = t2 ?? (R2 ? 16 : L2 ? 32 : 24), N2 = "number" == typeof z2 ? `${z2}px` : z2, S2 = L2 ? "number" == typeof z2 ? `${Math.round(0.56 * z2)}px` : `calc(${z2} * .56)` : N2, C2 = (0, i.I)(), T2 = !!((0, a.useSyncExternalStore)(
      F,
      () => true,
      () => false
    ) && C2), O2 = (0, a.useRef)(null), D2 = (0, a.useRef)(null), P2 = (0, a.useRef)(null), G2 = (0, a.useRef)(null), V2 = (0, a.useRef)(null), q2 = (0, a.useRef)([]), Y2 = (0, a.useRef)([]), U2 = (0, a.useRef)(null), [K2, Z] = (0, a.useState)(null), H = "number" == typeof z2 ? L2 ? Math.round(0.56 * z2) : z2 : null;
    (0, a.useLayoutEffect)(() => {
      if (null !== H) return;
      let e3 = D2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.getBoundingClientRect().width;
        t4 > 0 && Z(Math.round(t4));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [H]);
    let X = H ?? K2 ?? 16, J = (0, a.useMemo)(() => {
      let e3, t3;
      return e3 = b(Math.log(Math.max(1, X) / 12) / Math.log(8)), t3 = X < 18, {
        p: {
          r0: x(11, 13.5, e3),
          r1: x(41.5, 44, e3),
          a: x(8.4, 5.6, e3),
          b: x(3.9, 1.8, e3)
        },
        s: t3 ? { r0: 27, r1: 27, a: x(5.6, 5, b((X - 12) / 6)), b: 0, dot: t3 } : {
          r0: x(23.5, 22, e3),
          r1: x(32, 36, e3),
          a: x(4.9, 3.7, e3),
          b: x(2.3, 1.4, e3),
          dot: t3
        },
        core: X >= 28 ? x(2.6, 3.4, e3) : 0,
        particles: X >= 40,
        toneB: x(0.66, 0.5, e3)
      };
    }, [X]), Q = (0, a.useRef)({
      geo: J,
      speed: u2,
      reduced: T2,
      paused: v2,
      twinkle: c2
    });
    (0, a.useLayoutEffect)(() => {
      Q.current = { geo: J, speed: u2, reduced: T2, paused: v2, twinkle: c2 };
    });
    let [ee] = (0, a.useState)(E2), et = (0, a.useMemo)(() => {
      let e3;
      return e3 = new Float32Array(35), I(ee, false).fill(0, e3), e3;
    }, [ee]);
    (0, a.useEffect)(() => {
      let e3 = I(ee, Q.current.twinkle), t3 = U2.current ?? {
        status: ee,
        twinkle: Q.current.twinkle,
        from: e3,
        to: e3,
        mixStart: 0,
        mixDur: 0,
        t: 0,
        clock: 0,
        angle: 0,
        vel: 0,
        target: null,
        glide: { start: 0, from: 0, v0: 0, distance: 0, duration: 0 },
        impulses: [],
        A: new Float32Array(35),
        B: new Float32Array(35),
        out: new Float32Array(35),
        raf: 0,
        last: 0,
        inView: true,
        kick: () => {
        }
      };
      U2.current = t3;
      let r3 = () => t3.mixDur <= 0 ? 1 : Math.min(1, (t3.clock - t3.mixStart) / t3.mixDur), n2 = () => {
        let { geo: e4, reduced: n3 } = Q.current, a3 = t3.out;
        !(function(e5, t4, r4, n4, a4, i4, l5) {
          if (r4 >= 1) return t4.fill(n4, l5);
          e5.fill(n4, a4), t4.fill(n4, i4);
          for (let e6 = 0; e6 < 35; e6++) l5[e6] = a4[e6] + (i4[e6] - a4[e6]) * r4;
        })(t3.from, t3.to, w(r3()), n3 ? 0 : t3.t, t3.A, t3.B, a3);
        let i3 = 0, l4 = a3[32], s4 = a3[33];
        if (!n3)
          for (let e5 of t3.impulses) {
            var o4;
            let r4 = t3.clock - e5.start;
            if ("shake" === e5.kind) {
              i3 += r4 < 0 || r4 >= 0.46 ? 0 : 3.2 * Math.sin(g * r4 / 0.15) * (1 - r4 / 0.46) ** 2;
              continue;
            }
            let n4 = (o4 = r4) < 0 || o4 >= 0.68 ? 0 : o4 < 0.17 ? 1 - Math.pow(1 - o4 / 0.17, 3) : 1 - w((o4 - 0.17) / 0.51);
            if (!(n4 <= 0)) {
              for (let e6 = 0; e6 < 8; e6++) {
                let t4 = 4 * e6, r5 = e6 % 2 == 0;
                a3[t4] *= 1 - (r5 ? 0.12 : 0.2) * n4, a3[t4 + 2] -= (r5 ? 2.4 : 3) * n4;
              }
              l4 *= 1 - 0.045 * n4, s4 *= 1 + 0.35 * n4;
            }
          }
        for (let t4 = 0; t4 < 8; t4++) {
          let r4 = q2.current[t4];
          r4 && (r4.setAttribute("d", M(e4, t4, a3)), r4.setAttribute("opacity", a3[4 * t4 + 3].toFixed(3)));
        }
        V2.current?.setAttribute("r", (e4.core * Math.max(0, s4)).toFixed(2)), P2.current?.setAttribute(
          "transform",
          `translate(${i3.toFixed(2)} 0) scale(${l4.toFixed(4)})`
        ), G2.current?.setAttribute(
          "transform",
          `rotate(${t3.angle.toFixed(3)})`
        );
        let u3 = e4.particles && !n3 ? a3[34] : 0;
        for (let e5 = 0; e5 < 2; e5++) {
          let r4 = Y2.current[e5];
          if (!r4) continue;
          if (u3 < 0.01) {
            r4.setAttribute("opacity", "0");
            continue;
          }
          let n4 = 0 === e5 ? 30 + 360 * t3.t / 2.6 : 210 + 360 * t3.t / 3.9, a4 = 0.55 + 0.45 * k(t3.t / 1.3 + 0.5 * e5);
          r4.setAttribute(
            "transform",
            `rotate(${(n4 % 360).toFixed(2)}) translate(0 -47.5) scale(${(0.5 + 0.5 * u3).toFixed(3)})`
          ), r4.setAttribute("opacity", (u3 * a4).toFixed(3));
        }
      }, a2 = (e4) => {
        let { speed: i3, reduced: l4 } = Q.current, s4 = t3.last ? Math.min(1 / 30, (e4 - t3.last) / 1e3) : 1 / 60;
        if (t3.last = e4, t3.clock += s4, l4 || (t3.t += s4 * i3), r3() >= 1 && (t3.from = t3.to), t3.impulses = t3.impulses.filter((e5) => t3.clock - e5.start < 0.7), l4)
          t3.vel = 0, t3.angle = 90 * Math.round(t3.angle / 90);
        else if (t3.to.rest) {
          if (null === t3.target) {
            let e6 = Math.max(0, t3.vel);
            t3.target = 90 * Math.ceil((t3.angle + 0.2 * e6) / 90 - 1e-6);
            let r5 = t3.target - t3.angle;
            t3.glide = {
              start: t3.clock,
              from: t3.angle,
              v0: e6,
              distance: r5,
              duration: Math.min(
                1.8,
                Math.max(0.6, e6 > 0.5 ? 3 * r5 / e6 : 1.2)
              )
            };
          }
          let e5 = t3.glide, r4 = t3.clock - e5.start;
          if (e5.distance < 0.01 || r4 >= e5.duration)
            t3.angle = t3.target, t3.vel = 0;
          else {
            let n3 = e5.duration, a3 = e5.distance, i4 = (3 * a3 - 2 * e5.v0 * n3) / (n3 * n3), l5 = (e5.v0 * n3 - 2 * a3) / (n3 * n3 * n3);
            t3.angle = e5.from + e5.v0 * r4 + i4 * r4 * r4 + l5 * r4 * r4 * r4, t3.vel = e5.v0 + 2 * i4 * r4 + 3 * l5 * r4 * r4;
          }
        } else
          t3.target = null, t3.vel += (t3.to.spin * i3 - t3.vel) * (1 - Math.exp(-(3 * s4))), t3.angle += t3.vel * s4, t3.angle >= 360 && (t3.angle -= 360);
        n2();
        let o4 = l4 || t3.to.rest && null !== t3.target && t3.angle === t3.target;
        if (r3() >= 1 && 0 === t3.impulses.length && o4 && (l4 || !t3.to.loops)) {
          l4 || null === t3.target || (t3.angle = t3.target % 360, t3.target = t3.angle, t3.vel = 0, n2()), t3.raf = 0, t3.last = 0;
          return;
        }
        t3.raf = requestAnimationFrame(a2);
      }, i2 = () => {
        t3.raf && cancelAnimationFrame(t3.raf), t3.raf = 0, t3.last = 0;
      };
      t3.kick = () => {
        !t3.inView || document.hidden || Q.current.paused ? i2() : t3.raf || (t3.last = 0, t3.raf = requestAnimationFrame(a2));
      };
      let l3 = O2.current, s3 = "u" > typeof IntersectionObserver && l3 ? new IntersectionObserver(
        ([e4]) => {
          t3.inView = e4.isIntersecting, t3.kick();
        },
        { rootMargin: "48px" }
      ) : null;
      s3 && l3 && s3.observe(l3);
      let o3 = () => t3.kick();
      return document.addEventListener("visibilitychange", o3), t3.kick(), () => {
        s3?.disconnect(), document.removeEventListener("visibilitychange", o3), i2();
      };
    }, [ee]), (0, a.useEffect)(() => {
      let e3 = U2.current;
      if (e3) {
        if (e3.status !== E2 || e3.twinkle !== c2) {
          var t3, r3, n2;
          let a2, i2, l3 = e3.mixDur <= 0 ? 1 : Math.min(1, (e3.clock - e3.mixStart) / e3.mixDur);
          e3.from = l3 < 1 ? (t3 = e3.from, r3 = e3.to, n2 = w(l3), a2 = new Float32Array(35), i2 = new Float32Array(35), {
            fill: (e4, l4) => {
              t3.fill(e4, a2), r3.fill(e4, i2);
              for (let e5 = 0; e5 < 35; e5++)
                l4[e5] = a2[e5] + (i2[e5] - a2[e5]) * n2;
            },
            spin: r3.spin,
            rest: r3.rest,
            loops: t3.loops || r3.loops
          }) : e3.to, e3.to = I(E2, c2), e3.mixStart = e3.clock, e3.mixDur = T2 ? 0.2 : "generating" === E2 ? 0.42 : "done" === E2 ? 0.5 : 0.56, e3.status !== E2 && (e3.target = null, T2 || "done" !== E2 || e3.impulses.push({ kind: "gather", start: e3.clock }), T2 || "error" !== E2 || e3.impulses.push({ kind: "shake", start: e3.clock })), e3.status = E2, e3.twinkle = c2;
        }
        e3.kick();
      }
    }, [E2, c2, T2, v2, J]);
    let er = "thinking" === E2 || "generating" === E2, en = o2 ?? f[E2], ea = _2 ?? (R2 ? void 0 : p[E2]), ei = {
      "--spark-color": l2 ?? h[r2],
      ...L2 ? { width: N2, height: N2 } : null,
      ...A2
    };
    return (0, n.jsxs)("span", {
      ref: O2,
      className: [d().root, R2 ? d().pill : "", L2 ? d().avatar : "", j2].filter(Boolean).join(" "),
      "data-status": E2,
      style: ei,
      role: y2 ? "status" : "img",
      "aria-live": y2 ? "polite" : void 0,
      "aria-busy": er || void 0,
      "aria-label": y2 ? void 0 : ea ?? en,
      children: [
        (0, n.jsx)("svg", {
          ref: D2,
          className: d().mark,
          viewBox: "-50 -50 100 100",
          width: S2,
          height: S2,
          "aria-hidden": "true",
          focusable: "false",
          shapeRendering: "geometricPrecision",
          children: (0, n.jsxs)("g", {
            ref: P2,
            children: [
              (0, n.jsxs)("g", {
                ref: G2,
                children: [
                  Array.from(
                    { length: 8 },
                    (e3, t3) => (0, n.jsx)(
                      "path",
                      {
                        ref: (e4) => {
                          q2.current[t3] = e4;
                        },
                        d: M(J, t3, et),
                        opacity: et[4 * t3 + 3],
                        transform: `rotate(${45 * t3})`,
                        fill: "currentColor",
                        fillOpacity: t3 % 2 == 0 ? 1 : J.toneB
                      },
                      t3
                    )
                  ),
                  (0, n.jsx)("circle", {
                    ref: V2,
                    r: J.core * et[33],
                    fill: "currentColor",
                    fillOpacity: J.toneB
                  })
                ]
              }),
              [1.9, 1.3].map(
                (e3, t3) => (0, n.jsx)(
                  "circle",
                  {
                    ref: (e4) => {
                      Y2.current[t3] = e4;
                    },
                    r: e3,
                    opacity: 0,
                    fill: "currentColor",
                    fillOpacity: 0 === t3 ? 0.8 : J.toneB
                  },
                  t3
                )
              )
            ]
          })
        }),
        R2 ? (0, n.jsx)(B, { text: en, busy: er, reduced: T2 }) : y2 ? (0, n.jsx)("span", { className: d().srOnly, children: ea }) : null
      ]
    });
  }
  function B({ text: e2, busy: t2, reduced: r2 }) {
    let i2 = (0, a.useRef)(null), c2 = (0, a.useRef)(0);
    return (0, a.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3) return;
      let t3 = e3.style.width ? e3.getBoundingClientRect().width : c2.current;
      e3.style.width = "";
      let n2 = e3.getBoundingClientRect().width;
      if (c2.current = n2, r2 || !t3 || 0.5 > Math.abs(t3 - n2)) return;
      let a2 = (0, l.i)(
        e3,
        { width: [t3, n2] },
        {
          type: "spring",
          visualDuration: 0.24,
          bounce: 0,
          onComplete: () => {
            e3.style.width = "";
          }
        }
      );
      return () => a2.stop();
    }, [e2, r2]), (0, n.jsxs)("span", {
      ref: i2,
      className: d().labelBox,
      children: [
        (0, n.jsx)("span", {
          className: d().sizer,
          "aria-hidden": "true",
          children: e2
        }),
        (0, n.jsx)(s.N, {
          initial: false,
          children: (0, n.jsx)(
            o.PY1.span,
            {
              className: d().labelLayer,
              initial: { opacity: 0, y: 2 * !r2 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: r2 ? 0.1 : 0.16,
                  ease: [0.22, 1, 0.36, 1]
                }
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.1, ease: "easeOut" }
              },
              children: (0, n.jsx)(u.n, { active: t2, children: e2 })
            },
            e2
          )
        })
      ]
    });
  }
  var O = r(66558), D = r(51288), P = r(57930), G = r.n(P);
  let V = [
    ["idle", 1800],
    ["thinking", 2800],
    ["generating", 3600],
    ["done", 2200]
  ], q = [
    { value: "idle", label: "Idle" },
    { value: "thinking", label: "Thinking" },
    { value: "generating", label: "Writing" },
    { value: "done", label: "Done" },
    { value: "error", label: "Error" }
  ], Y = [12, 16, 20, 24, 32, 48];
  function U() {
    let [e2, t2] = (0, a.useState)("idle"), [r2, i2] = (0, a.useState)(true);
    return (0, a.useEffect)(() => {
      if (!r2) return;
      let n2 = V.findIndex(([t3]) => t3 === e2), a2 = n2 < 0 ? 600 : V[n2][1], i3 = V[(n2 + 1) % V.length][0], l2 = window.setTimeout(() => t2(i3), a2);
      return () => window.clearTimeout(l2);
    }, [r2, e2]), (0, n.jsx)("div", {
      className: G().demo,
      children: (0, n.jsxs)("div", {
        className: G().card,
        children: [
          (0, n.jsx)("div", {
            className: G().stage,
            children: (0, n.jsx)(W, { size: 120, status: e2 })
          }),
          (0, n.jsxs)("div", {
            className: G().controls,
            children: [
              (0, n.jsx)(O.A, {
                label: "Spark state",
                options: q,
                value: e2,
                onValueChange: (e3) => {
                  i2(false), t2(e3);
                }
              }),
              (0, n.jsx)(D.$, {
                variant: "ghost",
                size: "sm",
                onClick: () => i2((e3) => !e3),
                "aria-pressed": r2,
                children: r2 ? "Pause" : "Play through"
              })
            ]
          }),
          (0, n.jsxs)("div", {
            className: G().row,
            children: [
              (0, n.jsxs)("div", {
                className: G().reply,
                children: [
                  (0, n.jsx)(W, {
                    variant: "avatar",
                    size: 32,
                    status: e2,
                    announce: false
                  }),
                  (0, n.jsx)(W, { variant: "pill", status: e2, announce: false })
                ]
              }),
              (0, n.jsx)(W, {
                variant: "pill",
                tone: "foreground",
                status: e2,
                announce: false
              })
            ]
          }),
          (0, n.jsx)("div", {
            className: G().sizes,
            role: "group",
            "aria-label": "Sizes from 12 to 48 px",
            children: Y.map(
              (t3) => (0, n.jsxs)(
                "div",
                {
                  className: G().size,
                  children: [
                    (0, n.jsx)("span", {
                      className: G().sizeCell,
                      children: (0, n.jsx)(W, {
                        size: t3,
                        status: e2,
                        announce: false
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: G().sizeLabel,
                      children: t3
                    })
                  ]
                },
                t3
              )
            )
          })
        ]
      })
    });
  }
  let K = U;
}

__m(__module,__exports,__require);
}