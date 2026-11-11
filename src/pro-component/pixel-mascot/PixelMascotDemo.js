function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { PixelMascotDemo: () => V, default: () => H });
  var r = a(95155), s = a(12115), i = a(18310), n = a(80642), l = a(25354);
  let o = (e2) => e2.map(([e3, t2, a2, r2]) => `M${e3} ${t2}h${a2}v${r2}h${-a2}z`).join(""), d = (e2) => e2.map(([e3, t2]) => [e3, t2, 1, 1]), c = {
    tip: [[6, 0, 2, 1]],
    ink: [
      [6, 1, 2, 1],
      [1, 2, 12, 1],
      [1, 11, 12, 1],
      [0, 3, 1, 8],
      [13, 3, 1, 8]
    ],
    body: [[1, 3, 12, 8]],
    shade: [
      [1, 10, 12, 1],
      [12, 3, 1, 7]
    ],
    screen: [
      [3, 4, 8, 1],
      [2, 5, 10, 3],
      [3, 8, 8, 1]
    ],
    cheeks: d([
      [2, 9],
      [11, 9]
    ]),
    happy: d([
      [3, 6],
      [4, 5],
      [5, 6],
      [8, 6],
      [9, 5],
      [10, 6]
    ]),
    cross: d([
      [3, 5],
      [5, 5],
      [4, 6],
      [3, 7],
      [5, 7],
      [8, 5],
      [10, 5],
      [9, 6],
      [8, 7],
      [10, 7]
    ]),
    keyboardInk: [
      [-1, 11, 16, 1],
      [-1, 12, 1, 1],
      [14, 12, 1, 1],
      [0, 13, 14, 1]
    ],
    keyboardGaps: [
      [0, 12, 1, 1],
      [2, 12, 1, 1],
      [4, 12, 1, 1],
      [6, 12, 2, 1],
      [9, 12, 1, 1],
      [11, 12, 1, 1],
      [13, 12, 1, 1]
    ],
    keyboardKeys: d([
      [1, 12],
      [3, 12],
      [5, 12],
      [8, 12],
      [10, 12],
      [12, 12]
    ]),
    cloudInk: [
      [15, 0, 7, 1],
      [15, 4, 7, 1],
      [14, 1, 1, 3],
      [22, 1, 1, 3]
    ],
    cloudFill: [[15, 1, 7, 3]],
    tailNear: [[15, 8, 1, 1]],
    tailFar: [[16, 6, 1, 1]]
  }, u = [1, 3, 5, 8, 10, 12], h = [16, 18, 20], p = [
    [
      [-1, 5],
      [-2, 4],
      [-2, 3]
    ],
    [
      [-1, 5],
      [-1, 6]
    ],
    [
      [-1, 6],
      [-1, 7]
    ],
    [
      [-1, 7],
      [-1, 8]
    ],
    [
      [-1, 8],
      [-1, 9]
    ],
    [
      [-1, 9],
      [-1, 10]
    ]
  ], y = [
    { x: 2, y: 5, reach: 2 },
    { x: 21, y: 4, reach: 2 },
    { x: 7, y: 2, reach: 1 }
  ], m = { kind: "pair", dx: 0, y: 5, h: 3 }, x = { kind: "pair", dx: 1, y: 5, h: 2 }, k = { kind: "pair", dx: 0, y: 6, h: 2 }, b = { kind: "happy", dx: 0, y: 5, h: 2 }, f = { kind: "cross", dx: 0, y: 5, h: 3 }, g = (e2) => ({ ...e2, y: e2.y + e2.h - 1, h: 1 }), v = (e2, t2, a2) => e2 >= t2 && e2 < a2, _ = (e2, t2) => e2 % t2 < t2 / 2 ? 0 : -1, j = (e2, t2, a2) => e2.find(([e3]) => t2 < e3)?.[1] ?? a2, N = [
    [0, 1],
    [160, 4],
    [320, 0],
    [480, 2],
    [640, 5],
    [880, 3],
    [1040, 1],
    [1200, 4]
  ], w = [
    [80, 1],
    [120, 0],
    [160, -1],
    [200, -2],
    [320, -3],
    [360, -2],
    [400, -1]
  ], $ = [
    [80, 2],
    [120, 1],
    [400, 0],
    [440, 1]
  ], R = [200, 280, 360], L = [1, 0, -1, 0, 1, 0];
  function S(e2, t2, a2) {
    let r2 = {
      dx: 0,
      dy: 0,
      eyes: m,
      armL: 2,
      armR: 2,
      bubble: 0,
      keyboard: 0,
      antenna: true,
      dot: -1,
      sparks: [0, 0, 0],
      key: -1
    };
    switch (e2) {
      case "idle": {
        if (a2) return r2;
        r2.dy = _(t2, 2e3);
        let e3 = t2 % 8e3, s2 = v(e3, 3600, 4400) ? { ...m, dx: 1 } : m;
        return r2.eyes = v(e3, 2400, 2480) || v(e3, 5600, 5680) || v(e3, 5880, 5960) ? g(s2) : s2, r2;
      }
      case "thinking": {
        if (r2.bubble = 3, r2.eyes = x, a2) return r2.dot = -2, r2;
        r2.dy = _(t2, 2400);
        let e3 = Math.floor(t2 / 280) % 4;
        return r2.dot = e3 < 3 ? e3 : -1, r2.antenna = 3 !== e3, v(t2 % 2800, 2e3, 2080) && (r2.eyes = g(x)), r2;
      }
      case "writing": {
        r2.keyboard = 3, r2.armL = r2.armR = 4, r2.eyes = k;
        let e3 = t2 - 200;
        if (a2 || e3 < 0) return r2;
        let s2 = e3 % 1600;
        r2.eyes = { ...k, dx: s2 < 500 ? -1 : s2 < 1e3 ? 0 : 1 };
        let i2 = N.find(([e4]) => v(s2, e4, e4 + 80));
        return i2 && (r2.key = i2[1], i2[1] < 3 ? r2.armL = 5 : r2.armR = 5), r2;
      }
      case "done":
        if (r2.eyes = b, a2) return r2;
        return r2.dy = t2 < 900 ? j(w, t2, 0) : _(t2 - 900, 2e3), r2.armL = r2.armR = j($, t2, 2), r2.sparks = R.map(
          (e3) => v(t2 - e3, 0, 320) ? Math.floor((t2 - e3) / 80) + 1 : 0
        ), r2;
      case "error":
        return r2.eyes = f, r2.dy = 1, r2.armL = r2.armR = 3, r2.antenna = false, !a2 && t2 < 240 && (r2.dx = L[Math.floor(t2 / 40)] ?? 0, r2.dy = 0), r2;
    }
  }
  let E = (e2, t2) => e2 + Math.sign(t2 - e2), M = { 1: 12, 0: 10, [-1]: 10, [-2]: 8, [-3]: 6 }, A = { 1: 1, 0: 1, [-1]: 0.7, [-2]: 0.6, [-3]: 0.45 }, I = (e2) => e2 ? "visible" : "hidden";
  function F(e2) {
    let { eyes: t2 } = e2, a2 = {
      root: {
        "data-screen": "cross" === t2.kind ? "error" : "normal",
        "data-antenna": e2.antenna && "cross" !== t2.kind ? "on" : "off"
      },
      body: { transform: `translate(${5 + e2.dx} ${9 + e2.dy})` },
      eyeL: {
        x: String(4 + t2.dx),
        y: String(t2.y),
        height: String(t2.h),
        visibility: I("pair" === t2.kind)
      },
      eyeR: {
        x: String(8 + t2.dx),
        y: String(t2.y),
        height: String(t2.h),
        visibility: I("pair" === t2.kind)
      },
      happy: { visibility: I("happy" === t2.kind) },
      cross: { visibility: I("cross" === t2.kind) },
      cheeks: { visibility: I("happy" === t2.kind) },
      keyboard: {
        transform: `translate(0 ${[0, 2, 1, 0][e2.keyboard]})`,
        visibility: I(e2.keyboard > 0)
      },
      key: { x: String(u[Math.max(0, e2.key)]), visibility: I(e2.key >= 0) },
      tailNear: { visibility: I(e2.bubble >= 1) },
      tailFar: { visibility: I(e2.bubble >= 2) },
      cloud: { visibility: I(e2.bubble >= 3) }
    }, r2 = Math.max(-3, Math.min(1, e2.dy)), s2 = M[r2];
    return a2.shadow = {
      x: String(12 - s2 / 2),
      width: String(s2),
      opacity: String(A[r2])
    }, ["L", "R"].forEach((t3) => {
      let r3 = p["L" === t3 ? e2.armL : e2.armR];
      for (let e3 = 0; e3 < 3; e3++) {
        let [s3, i2] = r3[Math.min(e3, r3.length - 1)];
        a2[`arm${t3}${e3}`] = {
          x: String("L" === t3 ? s3 : 13 - s3),
          y: String(i2),
          visibility: I(e3 < r3.length)
        };
      }
    }), h.forEach((t3, r3) => {
      a2[`dot${r3}`] = { opacity: e2.dot === r3 || -2 === e2.dot ? "1" : "0.3" };
    }), e2.sparks.forEach((e3, t3) => {
      a2[`spark${t3}core`] = { visibility: I(1 === e3 || 2 === e3) }, a2[`spark${t3}near`] = { visibility: I(2 === e3 || 3 === e3) }, a2[`spark${t3}far`] = { visibility: I(3 === e3 || 4 === e3) };
    }), a2;
  }
  var z = a(12956), C = a.n(z);
  let W = {
    idle: "is ready",
    thinking: "is thinking",
    writing: "is writing",
    done: "is done",
    error: "ran into an error"
  }, D = [
    ["idle", 1800],
    ["thinking", 2400],
    ["writing", 3200],
    ["done", 2e3],
    ["idle", 1400],
    ["thinking", 2e3],
    ["error", 2200]
  ];
  function T(e2 = true) {
    let [t2, a2] = (0, s.useState)(0);
    return (0, s.useEffect)(() => {
      if (!e2) return;
      let r2 = window.setTimeout(() => a2((e3) => (e3 + 1) % D.length), D[t2][1]);
      return () => window.clearTimeout(r2);
    }, [e2, t2]), D[t2][0];
  }
  function q({
    status: e2,
    size: t2 = 4,
    name: a2 = "Assistant",
    label: n2,
    announce: l2,
    paused: u2 = false,
    className: p2,
    style: m2
  }) {
    let x2 = void 0 === e2, k2 = T(x2 && !u2), b2 = e2 ?? k2, f2 = (0, i.I)() ?? false, v2 = Math.min(8, Math.max(1, Math.round(Number.isFinite(t2) ? t2 : 4))), _2 = n2 ?? `${a2} ${W[b2]}`, j2 = (0, s.useRef)(null), N2 = (0, s.useRef)(null), w2 = (0, s.useRef)(true), $2 = (0, s.useRef)(u2), [R2] = (0, s.useState)(() => ({ status: b2, attrs: F(S(b2, 0, true)) }));
    (0, s.useEffect)(() => {
      var e3, t3;
      let a3, r2, s2, i2, n3, l3, o2, d2, c2, u3, h2, p3, y2 = j2.current;
      if (!y2) return;
      let m3 = (e3 = y2, t3 = R2.status, a3 = /* @__PURE__ */ new Map([["root", e3]]), e3.querySelectorAll("[data-part]").forEach((e4) => a3.set(e4.getAttribute("data-part") ?? "", e4)), r2 = t3, s2 = performance.now() - 1e4, i2 = S(t3, 0, true), n3 = {}, l3 = false, o2 = false, d2 = 0, c2 = 0, (u3 = () => {
        let e4 = F(i2);
        for (let t4 in e4) {
          let r3 = a3.get(t4);
          if (!r3) continue;
          let s3 = n3[t4], i3 = e4[t4];
          for (let e5 in i3) s3?.[e5] !== i3[e5] && r3.setAttribute(e5, i3[e5]);
        }
        n3 = e4;
      })(), h2 = (e4) => {
        if (d2 = requestAnimationFrame(h2), e4 - c2 > 200 && (c2 = e4 - 40), !(e4 - c2 < 40)) {
          for (; e4 - c2 >= 40; )
            c2 += 40, i2 = (function(e5, t4) {
              var a4, r3;
              let s3 = E(e5.keyboard, t4.keyboard);
              return {
                dx: t4.dx,
                dy: E(e5.dy, t4.dy),
                eyes: (a4 = e5.eyes, r3 = t4.eyes, a4.kind !== r3.kind ? "pair" === a4.kind ? a4.h > 1 ? { ...a4, y: a4.y + 1, h: a4.h - 1 } : r3 : "pair" === r3.kind ? g(r3) : { kind: "pair", dx: 0, y: 6, h: 1 } : "pair" !== a4.kind ? a4 : a4.h > r3.h ? r3.y > a4.y ? { ...a4, y: a4.y + 1, h: a4.h - 1 } : { ...a4, h: a4.h - 1 } : a4.h < r3.h ? r3.y < a4.y ? { ...a4, y: a4.y - 1, h: a4.h + 1 } : { ...a4, h: a4.h + 1 } : a4.y !== r3.y ? { ...a4, y: E(a4.y, r3.y) } : a4.dx !== r3.dx ? { ...a4, dx: E(a4.dx, r3.dx) } : a4),
                armL: E(e5.armL, t4.armL),
                armR: E(e5.armR, t4.armR),
                bubble: E(e5.bubble, t4.bubble),
                keyboard: s3,
                antenna: t4.antenna,
                dot: t4.dot,
                sparks: t4.sparks,
                key: 3 === s3 ? t4.key : -1
              };
            })(i2, S(r2, Math.max(0, c2 - s2), false));
          u3();
        }
      }, p3 = () => {
        let e4 = l3 && !o2;
        e4 && !d2 && (c2 = performance.now() - 40, d2 = requestAnimationFrame(h2)), !e4 && d2 && (cancelAnimationFrame(d2), d2 = 0);
      }, {
        setStatus(e4) {
          e4 !== r2 && ((r2 = e4, d2) ? s2 = c2 + 40 : (s2 = performance.now(), i2 = S(e4, 0, true), u3()));
        },
        setRunning(e4) {
          l3 = e4, p3();
        },
        setStill(e4) {
          (o2 = e4) && (i2 = S(r2, 0, true), u3()), p3();
        },
        destroy() {
          d2 && cancelAnimationFrame(d2), d2 = 0;
        }
      });
      N2.current = m3;
      let x3 = "u" < typeof IntersectionObserver ? null : new IntersectionObserver(([e4]) => {
        w2.current = e4?.isIntersecting ?? true, m3.setRunning(w2.current && !$2.current);
      });
      return x3?.observe(y2), () => {
        x3?.disconnect(), m3.destroy(), N2.current = null;
      };
    }, [R2]), (0, s.useEffect)(() => {
      N2.current?.setStatus(b2);
    }, [b2]), (0, s.useEffect)(() => {
      N2.current?.setStill(f2);
    }, [f2]), (0, s.useEffect)(() => {
      $2.current = u2, N2.current?.setRunning(w2.current && !u2);
    }, [u2]);
    let L2 = R2.attrs;
    return (0, r.jsxs)("span", {
      className: `${C().root} ${p2 ?? ""}`,
      style: m2,
      children: [
        (0, r.jsxs)("svg", {
          ref: j2,
          className: C().svg,
          viewBox: "0 0 24 24",
          width: 24 * v2,
          height: 24 * v2,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": _2,
          ...L2.root,
          children: [
            (0, r.jsx)("rect", {
              "data-part": "shadow",
              className: C().shadow,
              y: 22,
              height: 1,
              ...L2.shadow
            }),
            (0, r.jsx)("path", {
              "data-part": "tailNear",
              className: C().ink,
              d: o(c.tailNear),
              ...L2.tailNear
            }),
            (0, r.jsx)("path", {
              "data-part": "tailFar",
              className: C().ink,
              d: o(c.tailFar),
              ...L2.tailFar
            }),
            (0, r.jsxs)("g", {
              "data-part": "cloud",
              ...L2.cloud,
              children: [
                (0, r.jsx)("path", { className: C().body, d: o(c.cloudFill) }),
                (0, r.jsx)("path", { className: C().ink, d: o(c.cloudInk) }),
                h.map(
                  (e3, t3) => (0, r.jsx)(
                    "rect",
                    {
                      "data-part": `dot${t3}`,
                      className: C().ink,
                      x: e3,
                      y: 2,
                      width: 1,
                      height: 1,
                      ...L2[`dot${t3}`]
                    },
                    e3
                  )
                )
              ]
            }),
            (0, r.jsxs)("g", {
              "data-part": "body",
              ...L2.body,
              children: [
                ["L", "R"].map(
                  (e3) => [0, 1, 2].map(
                    (t3) => (0, r.jsx)(
                      "rect",
                      {
                        "data-part": `arm${e3}${t3}`,
                        className: C().ink,
                        width: 1,
                        height: 1,
                        ...L2[`arm${e3}${t3}`]
                      },
                      `${e3}${t3}`
                    )
                  )
                ),
                (0, r.jsx)("path", { className: C().tip, d: o(c.tip) }),
                (0, r.jsx)("path", { className: C().body, d: o(c.body) }),
                (0, r.jsx)("path", { className: C().shade, d: o(c.shade) }),
                (0, r.jsx)("path", { className: C().ink, d: o(c.ink) }),
                (0, r.jsx)("path", { className: C().screen, d: o(c.screen) }),
                (0, r.jsx)("rect", {
                  "data-part": "eyeL",
                  className: C().eye,
                  width: 2,
                  ...L2.eyeL
                }),
                (0, r.jsx)("rect", {
                  "data-part": "eyeR",
                  className: C().eye,
                  width: 2,
                  ...L2.eyeR
                }),
                (0, r.jsx)("path", {
                  "data-part": "happy",
                  className: C().eye,
                  d: o(c.happy),
                  ...L2.happy
                }),
                (0, r.jsx)("path", {
                  "data-part": "cross",
                  className: C().cross,
                  d: o(c.cross),
                  ...L2.cross
                }),
                (0, r.jsx)("path", {
                  "data-part": "cheeks",
                  className: C().cheek,
                  d: o(c.cheeks),
                  ...L2.cheeks
                }),
                (0, r.jsxs)("g", {
                  "data-part": "keyboard",
                  ...L2.keyboard,
                  children: [
                    (0, r.jsx)("path", {
                      className: C().body,
                      d: o(c.keyboardKeys)
                    }),
                    (0, r.jsx)("path", {
                      className: C().shade,
                      d: o(c.keyboardGaps)
                    }),
                    (0, r.jsx)("path", {
                      className: C().ink,
                      d: o(c.keyboardInk)
                    }),
                    (0, r.jsx)("rect", {
                      "data-part": "key",
                      className: C().accent,
                      y: 12,
                      width: 1,
                      height: 1,
                      ...L2.key
                    })
                  ]
                })
              ]
            }),
            y.map(({ x: e3, y: t3, reach: a3 }, s2) => {
              let i2 = {
                core: d([[e3, t3]]),
                near: d([
                  [e3 - 1, t3],
                  [e3 + 1, t3],
                  [e3, t3 - 1],
                  [e3, t3 + 1]
                ]),
                far: d([
                  [e3 - 2, t3],
                  [e3 + 2, t3],
                  [e3, t3 - 2],
                  [e3, t3 + 2]
                ])
              };
              return (0, r.jsxs)(
                "g",
                {
                  className: C().accent,
                  children: [
                    (0, r.jsx)("path", {
                      "data-part": `spark${s2}core`,
                      d: o(i2.core),
                      ...L2[`spark${s2}core`]
                    }),
                    (0, r.jsx)("path", {
                      "data-part": `spark${s2}near`,
                      d: o(i2.near),
                      ...L2[`spark${s2}near`]
                    }),
                    2 === a3 && (0, r.jsx)("path", {
                      "data-part": `spark${s2}far`,
                      d: o(i2.far),
                      ...L2[`spark${s2}far`]
                    })
                  ]
                },
                s2
              );
            })
          ]
        }),
        (l2 ?? !x2) && (0, r.jsx)("span", {
          className: C().live,
          "aria-live": "polite",
          children: _2
        })
      ]
    });
  }
  var K = a(66558), U = a(51116), P = a.n(U);
  let G = [
    { value: "auto", label: "Auto" },
    { value: "idle", label: "Idle" },
    { value: "thinking", label: "Thinking" },
    { value: "writing", label: "Writing" },
    { value: "done", label: "Done" },
    { value: "error", label: "Error" }
  ], O = {
    idle: "Ready when you are",
    thinking: "Thinking it through",
    writing: "Writing the reply",
    done: "Reply ready",
    error: "Could not finish, try again"
  }, Y = [1, 2, 3, 4];
  function V() {
    let [e2, t2] = (0, s.useState)("auto"), a2 = T("auto" === e2), o2 = "auto" === e2 ? a2 : e2, d2 = (0, i.I)();
    return (0, r.jsxs)("div", {
      className: P().demo,
      children: [
        (0, r.jsxs)("div", {
          className: P().stage,
          children: [
            (0, r.jsx)(q, {
              status: o2,
              size: 6,
              name: "Arc",
              announce: "auto" !== e2
            }),
            (0, r.jsx)("p", {
              className: P().caption,
              children: (0, r.jsx)(n.N, {
                initial: false,
                children: (0, r.jsx)(
                  l.PY1.span,
                  {
                    className: P().captionText,
                    initial: { opacity: 0, y: 2 * !d2 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.1, ease: "easeOut" }
                    },
                    children: O[o2]
                  },
                  o2
                )
              })
            })
          ]
        }),
        (0, r.jsx)(K.A, {
          label: "Mascot state",
          options: G,
          value: e2,
          onValueChange: (e3) => t2(e3)
        }),
        (0, r.jsx)("div", {
          className: P().sizes,
          "aria-label": "Sizes",
          children: Y.map(
            (e3) => (0, r.jsxs)(
              "figure",
              {
                className: P().size,
                children: [
                  (0, r.jsx)(q, {
                    status: o2,
                    size: e3,
                    name: "Arc",
                    announce: false
                  }),
                  (0, r.jsxs)("figcaption", { children: [e3, "x"] })
                ]
              },
              e3
            )
          )
        })
      ]
    });
  }
  let H = V;
}

__m(__module,__exports,__require);
}