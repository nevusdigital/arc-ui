function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { TwoFactorSetup: () => z, default: () => U });
  var r = a(95155), n = a(12115), s = a(80642), o = a(25354), i = a(18310), l = a(64577), c = a(35484), d = a(50825), u = a(95e3), p = a(81499), h = a(51288), f = a(20530), m = a(73474);
  function _({ size: e2 = 16, ...t2 }) {
    return (0, r.jsxs)("svg", {
      width: e2,
      height: e2,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      ...t2,
      children: [
        [
          [-90, "#EA4335"],
          [-30, "#4285F4"],
          [30, "#4285F4"],
          [90, "#34A853"],
          [150, "#FBBC04"],
          [210, "#EA4335"]
        ].map(
          ([e3, t3]) => (0, r.jsx)(
            "line",
            {
              x1: "12",
              y1: "12",
              x2: 12 + 8.6 * Math.cos(e3 * Math.PI / 180),
              y2: 12 + 8.6 * Math.sin(e3 * Math.PI / 180),
              stroke: t3,
              strokeWidth: "4.4",
              strokeLinecap: "round"
            },
            e3
          )
        ),
        (0, r.jsx)("circle", { cx: "12", cy: "12", r: "2.6", fill: "#4285F4" })
      ]
    });
  }
  function x({ size: e2 = 16, ...t2 }) {
    return (0, r.jsx)("svg", {
      width: e2,
      height: e2,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      ...t2,
      children: (0, r.jsx)("path", {
        fill: "#145FE4",
        d: "M12 0c6.627 0 12 5.373 12 12 0 6.628-5.373 12-12 12S0 18.628 0 12C0 5.373 5.373 0 12 0m-.893 4.86c-.485 0-.727.001-.913.095a.87.87 0 0 0-.378.379c-.094.185-.095.428-.095.912v2.747c0 .12 0 .182.016.238q.02.075.065.138a1 1 0 0 0 .175.162l.695.564c.113.092.17.139.19.194a.22.22 0 0 1 0 .15c-.02.056-.077.102-.19.194l-.695.564a1 1 0 0 0-.175.162.4.4 0 0 0-.065.138 1 1 0 0 0-.016.238v6.019c0 .485 0 .728.095.913a.87.87 0 0 0 .378.378c.186.094.428.094.913.094h1.786c.485 0 .727 0 .913-.094a.87.87 0 0 0 .378-.378c.095-.185.095-.428.095-.913v-2.747c0-.12 0-.182-.016-.238a.4.4 0 0 0-.065-.138 1 1 0 0 0-.175-.162l-.695-.564c-.113-.092-.17-.138-.191-.193a.22.22 0 0 1 0-.152c.02-.055.078-.1.19-.193l.696-.564a1 1 0 0 0 .175-.162.4.4 0 0 0 .065-.138 1 1 0 0 0 .016-.238V6.246c0-.484 0-.727-.095-.912a.87.87 0 0 0-.378-.379c-.186-.094-.428-.094-.913-.094Z"
      })
    });
  }
  function y({ title: e2 = "Northwind", ...t2 }) {
    let a2 = (0, n.useId)().replace(/:/g, "");
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, r.jsxs)("defs", {
          children: [
            (0, r.jsxs)("linearGradient", {
              id: `${a2}-light`,
              x1: "8",
              y1: "3",
              x2: "8",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, r.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".42"
                }),
                (0, r.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: ".72"
                })
              ]
            }),
            (0, r.jsxs)("linearGradient", {
              id: `${a2}-dark`,
              x1: "16",
              y1: "3",
              x2: "16",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, r.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".88"
                }),
                (0, r.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: "1"
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("path", {
          d: "M12 2.5 4.75 20.75 12 16.9Z",
          fill: `url(#${a2}-light)`
        }),
        (0, r.jsx)("path", {
          d: "M12 2.5 19.25 20.75 12 16.9Z",
          fill: `url(#${a2}-dark)`
        })
      ]
    });
  }
  let b = { L: 0, M: 1, Q: 2, H: 3 }, j = [1, 0, 3, 2], g = [
    [
      -1,
      7,
      10,
      15,
      20,
      26,
      18,
      20,
      24,
      30,
      18,
      20,
      24,
      26,
      30,
      22,
      24,
      28,
      30,
      28,
      28,
      28,
      28,
      30,
      30,
      26,
      28,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30
    ],
    [
      -1,
      10,
      16,
      26,
      18,
      24,
      16,
      18,
      22,
      22,
      26,
      30,
      22,
      22,
      24,
      24,
      28,
      28,
      26,
      26,
      26,
      26,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28
    ],
    [
      -1,
      13,
      22,
      18,
      26,
      18,
      24,
      18,
      22,
      20,
      24,
      28,
      26,
      24,
      20,
      30,
      24,
      28,
      28,
      26,
      30,
      28,
      30,
      30,
      30,
      30,
      28,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30
    ],
    [
      -1,
      17,
      28,
      22,
      16,
      22,
      28,
      26,
      26,
      24,
      28,
      24,
      28,
      22,
      24,
      24,
      30,
      28,
      28,
      26,
      28,
      30,
      24,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30
    ]
  ], w = [
    [
      -1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      4,
      4,
      4,
      4,
      4,
      6,
      6,
      6,
      6,
      7,
      8,
      8,
      9,
      9,
      10,
      12,
      12,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      19,
      20,
      21,
      22,
      24,
      25
    ],
    [
      -1,
      1,
      1,
      1,
      2,
      2,
      4,
      4,
      4,
      5,
      5,
      5,
      8,
      9,
      9,
      10,
      10,
      11,
      13,
      14,
      16,
      17,
      17,
      18,
      20,
      21,
      23,
      25,
      26,
      28,
      29,
      31,
      33,
      35,
      37,
      38,
      40,
      43,
      45,
      47,
      49
    ],
    [
      -1,
      1,
      1,
      2,
      2,
      4,
      4,
      6,
      6,
      8,
      8,
      8,
      10,
      12,
      16,
      12,
      17,
      16,
      18,
      21,
      20,
      23,
      23,
      25,
      27,
      29,
      34,
      34,
      35,
      38,
      40,
      43,
      45,
      48,
      51,
      53,
      56,
      59,
      62,
      65,
      68
    ],
    [
      -1,
      1,
      1,
      2,
      4,
      4,
      4,
      5,
      6,
      8,
      8,
      11,
      11,
      16,
      16,
      18,
      16,
      19,
      21,
      25,
      25,
      25,
      34,
      30,
      32,
      35,
      37,
      40,
      42,
      45,
      48,
      51,
      54,
      57,
      60,
      63,
      66,
      70,
      74,
      77,
      81
    ]
  ], k = (e2) => {
    let t2 = (16 * e2 + 128) * e2 + 64;
    if (e2 >= 2) {
      let a2 = Math.floor(e2 / 7) + 2;
      t2 -= (25 * a2 - 10) * a2 - 55, e2 >= 7 && (t2 -= 36);
    }
    return t2;
  }, v = (e2, t2) => Math.floor(k(e2) / 8) - g[t2][e2] * w[t2][e2];
  function N(e2, t2) {
    let a2 = 0;
    for (let r2 = 7; r2 >= 0; r2--)
      a2 = a2 << 1 ^ (a2 >>> 7) * 285 ^ (t2 >>> r2 & 1) * e2;
    return a2;
  }
  async function C(e2, t2 = 0, a2 = Date.now()) {
    let r2 = "u" > typeof crypto ? crypto.subtle : void 0;
    if (!r2) return null;
    let n2 = await r2.importKey(
      "raw",
      (function(e3) {
        let t3 = e3.toUpperCase().replace(/[^A-Z2-7]/g, ""), a3 = [], r3 = 0, n3 = 0;
        for (let e4 of t3)
          n3 = n3 << 5 | "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".indexOf(e4), (r3 += 5) >= 8 && (a3.push(n3 >>> r3 - 8 & 255), r3 -= 8);
        return new Uint8Array(a3);
      })(e2),
      { name: "HMAC", hash: "SHA-1" },
      false,
      ["sign"]
    ), s2 = Math.floor(a2 / 1e3 / 30) + t2, o2 = new ArrayBuffer(8), i2 = new DataView(o2);
    i2.setUint32(0, Math.floor(s2 / 4294967296)), i2.setUint32(4, s2 >>> 0);
    let l2 = new Uint8Array(await r2.sign("HMAC", n2, o2)), c2 = 15 & l2[l2.length - 1];
    return String(
      ((127 & l2[c2]) << 24 | l2[c2 + 1] << 16 | l2[c2 + 2] << 8 | l2[c2 + 3]) % 1e6
    ).padStart(6, "0");
  }
  async function T(e2, t2) {
    let a2 = await Promise.all([-1, 0, 1].map((t3) => C(e2, t3)));
    return null === a2[0] ? /^\d{6}$/.test(t2) && "000000" !== t2 : a2.includes(t2);
  }
  var M = a(77454), S = a.n(M);
  let E = ["scan", "verify", "backup", "enabled"], A = [
    "h4k7-2pmx",
    "9wqe-7r3d",
    "t2vn-8kfa",
    "m6xc-4jhb",
    "3rpz-q9we",
    "ky8d-5tmn",
    "a7fs-2xvq",
    "e5nh-6wc8"
  ], L = [0.22, 1, 0.36, 1], R = { duration: 0.16, ease: L }, I = { duration: 0.1, ease: L }, P = { duration: 0 }, D = (e2, t2) => new Promise((a2, r2) => {
    let n2 = setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        clearTimeout(n2), r2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  }), O = (e2) => e2 instanceof DOMException && "AbortError" === e2.name;
  function B({ id: e2, children: t2, reduced: a2, className: n2 }) {
    return (0, r.jsx)("span", {
      className: [S().swap, n2].filter(Boolean).join(" "),
      children: (0, r.jsx)(s.N, {
        initial: false,
        mode: "popLayout",
        children: (0, r.jsx)(
          o.PY1.span,
          {
            className: S().swapItem,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: a2 ? P : I },
            transition: a2 ? P : R,
            children: t2
          },
          e2
        )
      })
    });
  }
  function $({ value: e2, label: t2 }) {
    let {
      size: a2,
      path: s2,
      eyes: o2
    } = (0, n.useMemo)(() => {
      let t3 = (function(e3, t4 = "M") {
        let a4 = b[t4] ?? 1, r2 = Array.from(new TextEncoder().encode(e3)), n2 = 1;
        for (; n2 <= 40 && !(4 + (n2 < 10 ? 8 : 16) + 8 * r2.length <= 8 * v(n2, a4)); n2++) ;
        if (n2 > 40) throw RangeError("QR value is too long");
        let s3 = [], o3 = (e4, t5) => {
          for (let a5 = t5 - 1; a5 >= 0; a5--) s3.push(e4 >>> a5 & 1);
        }, i2 = 8 * v(n2, a4);
        o3(4, 4), o3(r2.length, n2 < 10 ? 8 : 16), r2.forEach((e4) => o3(e4, 8)), o3(0, Math.min(4, i2 - s3.length)), o3(0, (8 - s3.length % 8) % 8);
        for (let e4 = 236; s3.length < i2; e4 ^= 253) o3(e4, 8);
        let l2 = [];
        for (let e4 = 0; e4 < s3.length; e4 += 8)
          l2.push(s3.slice(e4, e4 + 8).reduce((e5, t5) => e5 << 1 | t5, 0));
        let c2 = w[a4][n2], d2 = g[a4][n2], u2 = Math.floor(k(n2) / 8), p2 = c2 - u2 % c2, h2 = Math.floor(u2 / c2), f2 = (function(e4) {
          let t5 = Array(e4).fill(0);
          t5[e4 - 1] = 1;
          let a5 = 1;
          for (let r3 = 0; r3 < e4; r3++) {
            for (let r4 = 0; r4 < e4; r4++)
              t5[r4] = N(t5[r4], a5), r4 + 1 < e4 && (t5[r4] ^= t5[r4 + 1]);
            a5 = N(a5, 2);
          }
          return t5;
        })(d2), m2 = [];
        for (let e4 = 0, t5 = 0; e4 < c2; e4++) {
          let a5 = l2.slice(t5, t5 + h2 - d2 + (e4 < p2 ? 0 : 1));
          t5 += a5.length;
          let r3 = (function(e5, t6) {
            let a6 = t6.map(() => 0);
            for (let r4 of e5) {
              let e6 = r4 ^ a6.shift();
              a6.push(0), t6.forEach((t7, r5) => {
                a6[r5] ^= N(t7, e6);
              });
            }
            return a6;
          })(a5, f2);
          e4 < p2 && a5.push(0), m2.push(a5.concat(r3));
        }
        let _2 = [];
        for (let e4 = 0; e4 < m2[0].length; e4++)
          m2.forEach((t5, a5) => {
            (e4 !== h2 - d2 || a5 >= p2) && _2.push(t5[e4]);
          });
        let x2 = 4 * n2 + 17, y2 = new Uint8Array(x2 * x2), C2 = new Uint8Array(x2 * x2), T2 = new Uint8Array(x2 * x2), M2 = (e4, t5, a5) => {
          y2[t5 * x2 + e4] = +!!a5, C2[t5 * x2 + e4] = 1;
        };
        for (let e4 = 0; e4 < x2; e4++)
          M2(6, e4, e4 % 2 == 0), M2(e4, 6, e4 % 2 == 0);
        for (let [e4, t5] of [
          [3, 3],
          [x2 - 4, 3],
          [3, x2 - 4]
        ])
          for (let a5 = -4; a5 <= 4; a5++)
            for (let r3 = -4; r3 <= 4; r3++) {
              let n3 = e4 + r3, s4 = t5 + a5;
              if (n3 < 0 || s4 < 0 || n3 >= x2 || s4 >= x2) continue;
              let o4 = Math.max(Math.abs(r3), Math.abs(a5));
              M2(n3, s4, 2 !== o4 && 4 !== o4), o4 <= 3 && (T2[s4 * x2 + n3] = 1);
            }
        if (n2 > 1) {
          let e4 = Math.floor(n2 / 7) + 2, t5 = 2 * Math.floor((8 * n2 + 3 * e4 + 5) / (4 * e4 - 4)), a5 = [6];
          for (let r3 = x2 - 7; a5.length < e4; r3 -= t5) a5.splice(1, 0, r3);
          a5.forEach(
            (t6, r3) => a5.forEach((a6, n3) => {
              if ((0 !== r3 || 0 !== n3) && (0 !== r3 || n3 !== e4 - 1) && (r3 !== e4 - 1 || 0 !== n3))
                for (let e5 = -2; e5 <= 2; e5++)
                  for (let r4 = -2; r4 <= 2; r4++)
                    M2(a6 + r4, t6 + e5, 1 !== Math.max(Math.abs(r4), Math.abs(e5)));
            })
          );
        }
        let S2 = (e4) => {
          let t5 = j[a4] << 3 | e4, r3 = t5;
          for (let e5 = 0; e5 < 10; e5++) r3 = r3 << 1 ^ (r3 >>> 9) * 1335;
          let n3 = (t5 << 10 | r3) ^ 21522, s4 = (e5) => (n3 >>> e5 & 1) == 1;
          for (let e5 = 0; e5 <= 5; e5++) M2(8, e5, s4(e5));
          M2(8, 7, s4(6)), M2(8, 8, s4(7)), M2(7, 8, s4(8));
          for (let e5 = 9; e5 < 15; e5++) M2(14 - e5, 8, s4(e5));
          for (let e5 = 0; e5 < 8; e5++) M2(x2 - 1 - e5, 8, s4(e5));
          for (let e5 = 8; e5 < 15; e5++) M2(8, x2 - 15 + e5, s4(e5));
          M2(8, x2 - 8, true);
        };
        if (S2(0), n2 >= 7) {
          let e4 = n2;
          for (let t6 = 0; t6 < 12; t6++) e4 = e4 << 1 ^ (e4 >>> 11) * 7973;
          let t5 = n2 << 12 | e4;
          for (let e5 = 0; e5 < 18; e5++) {
            let a5 = (t5 >>> e5 & 1) == 1, r3 = x2 - 11 + e5 % 3, n3 = Math.floor(e5 / 3);
            M2(r3, n3, a5), M2(n3, r3, a5);
          }
        }
        for (let e4 = x2 - 1, t5 = 0; e4 >= 1; e4 -= 2) {
          6 === e4 && (e4 = 5);
          for (let a5 = 0; a5 < x2; a5++)
            for (let r3 = 0; r3 < 2; r3++) {
              let n3 = e4 - r3, s4 = (e4 + 1 & 2) == 0 ? x2 - 1 - a5 : a5;
              !C2[s4 * x2 + n3] && !(t5 >= 8 * _2.length) && (y2[s4 * x2 + n3] = _2[t5 >>> 3] >>> 7 - (7 & t5) & 1, t5++);
            }
        }
        let E2 = (e4, t5, a5) => {
          switch (e4) {
            case 0:
              return (t5 + a5) % 2 == 0;
            case 1:
              return a5 % 2 == 0;
            case 2:
              return t5 % 3 == 0;
            case 3:
              return (t5 + a5) % 3 == 0;
            case 4:
              return (Math.floor(t5 / 3) + Math.floor(a5 / 2)) % 2 == 0;
            case 5:
              return t5 * a5 % 2 + t5 * a5 % 3 == 0;
            case 6:
              return (t5 * a5 % 2 + t5 * a5 % 3) % 2 == 0;
            default:
              return ((t5 + a5) % 2 + t5 * a5 % 3) % 2 == 0;
          }
        }, A2 = (e4) => {
          for (let t5 = 0; t5 < x2; t5++)
            for (let a5 = 0; a5 < x2; a5++)
              !C2[t5 * x2 + a5] && E2(e4, a5, t5) && (y2[t5 * x2 + a5] ^= 1);
        }, L2 = () => {
          let e4 = 0, t5 = 0, a5 = (e5, t6) => y2[t6 * x2 + e5];
          for (let t6 = 0; t6 < 2; t6++)
            for (let r3 = 0; r3 < x2; r3++) {
              let n3 = 1;
              for (let s4 = 1; s4 <= x2; s4++) {
                if (s4 < x2 && (t6 ? a5(r3, s4) === a5(r3, s4 - 1) : a5(s4, r3) === a5(s4 - 1, r3))) {
                  n3++;
                  continue;
                }
                n3 >= 5 && (e4 += n3 - 2), n3 = 1;
              }
              for (let n4 = 0; n4 + 11 <= x2; n4++) {
                let s4 = 0;
                for (let e5 = 0; e5 < 11; e5++)
                  s4 = s4 << 1 | (t6 ? a5(r3, n4 + e5) : a5(n4 + e5, r3));
                (1488 === s4 || 93 === s4) && (e4 += 40);
              }
            }
          for (let t6 = 0; t6 + 1 < x2; t6++)
            for (let r3 = 0; r3 + 1 < x2; r3++) {
              let n3 = a5(r3, t6);
              n3 === a5(r3 + 1, t6) && n3 === a5(r3, t6 + 1) && n3 === a5(r3 + 1, t6 + 1) && (e4 += 3);
            }
          for (let e5 = 0; e5 < y2.length; e5++) t5 += y2[e5];
          return e4 + 10 * Math.max(
            0,
            Math.ceil(Math.abs(20 * t5 - 10 * y2.length) / y2.length) - 1
          );
        }, R2 = 0, I2 = 1 / 0;
        for (let e4 = 0; e4 < 8; e4++) {
          A2(e4), S2(e4);
          let t5 = L2();
          t5 < I2 && (R2 = e4, I2 = t5), A2(e4);
        }
        return A2(R2), S2(R2), { size: x2, dark: y2, finder: T2 };
      })(e2, "M"), a3 = "";
      for (let e3 = 0; e3 < t3.size; e3++)
        for (let r2 = 0; r2 < t3.size; r2++) {
          let n2 = e3 * t3.size + r2;
          if (!t3.dark[n2] || t3.finder[n2]) continue;
          let s3 = 1;
          for (; r2 + s3 < t3.size && t3.dark[n2 + s3] && !t3.finder[n2 + s3]; ) s3++;
          a3 += `M${r2} ${e3}h${s3}v1h${-s3}z`, r2 += s3 - 1;
        }
      return {
        size: t3.size,
        path: a3,
        eyes: [
          [0, 0],
          [t3.size - 7, 0],
          [0, t3.size - 7]
        ]
      };
    }, [e2]);
    return (0, r.jsxs)("svg", {
      className: S().qrSvg,
      viewBox: `0 0 ${a2} ${a2}`,
      role: "img",
      "aria-label": t2,
      shapeRendering: "crispEdges",
      children: [
        (0, r.jsx)("path", { d: s2, fill: "currentColor" }),
        o2.map(
          ([e3, t3]) => (0, r.jsxs)(
            "g",
            {
              shapeRendering: "geometricPrecision",
              children: [
                (0, r.jsx)("rect", {
                  x: e3 + 0.5,
                  y: t3 + 0.5,
                  width: 6,
                  height: 6,
                  rx: 1.7,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 1
                }),
                (0, r.jsx)("rect", {
                  x: e3 + 2,
                  y: t3 + 2,
                  width: 3,
                  height: 3,
                  rx: 0.9,
                  fill: "currentColor"
                })
              ]
            },
            `${e3}-${t3}`
          )
        )
      ]
    });
  }
  function F({ seconds: e2, delay: t2, reduced: a2 }) {
    return (0, r.jsxs)("svg", {
      className: S().ring,
      "data-low": null !== e2 && e2 <= 5 || void 0,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6.25",
          className: S().ringTrack
        }),
        (0, r.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6.25",
          pathLength: 1,
          className: S().ringFill,
          style: a2 || !t2 ? { strokeDashoffset: null === e2 ? 0 : 1 - e2 / 30 } : { animationDelay: t2 },
          "data-running": !a2 && t2 ? "" : void 0
        })
      ]
    });
  }
  function z({
    issuer: e2 = "Northwind",
    issuerLogo: t2 = "Northwind" === e2 ? (0, r.jsx)(y, {}) : null,
    account: a2 = "maya@northwind.io",
    secret: b2 = "QK7MR2XD5LVNA3WE",
    backupCodes: j2 = A,
    verifyCode: g2,
    onEnable: w2,
    onCancel: k2,
    onDone: v2,
    onStepChange: N2,
    addedLabel: M2 = "Added Oct 27, 2026",
    className: U2
  }) {
    let W, Y = (0, i.I)() ?? false, H = (0, n.useId)(), Q = !g2, V = (0, n.useRef)(null), q = (0, n.useRef)([]), G = (0, n.useRef)(null), K = (0, n.useRef)(false), [Z, J] = (0, n.useState)("scan"), [X, ee] = (0, n.useState)(() => Array(6).fill("")), [et, ea] = (0, n.useState)(-1), [er, en] = (0, n.useState)(null), [es, eo] = (0, n.useState)(false), [ei, el] = (0, n.useState)(false), [ec, ed] = (0, n.useState)(false), [eu, ep] = (0, n.useState)(false), [eh, ef] = (0, n.useState)(null), [em, e_] = (0, n.useState)(false), [ex, ey] = (0, n.useState)(""), [eb, ej] = (0, n.useState)(null), [eg, ew] = (0, n.useState)(null), [ek, ev] = (0, n.useState)(void 0), [eN, eC] = (0, n.useState)(true), eT = b2.replace(/\s/g, "").toUpperCase(), eM = `otpauth://totp/${encodeURIComponent(e2)}:${encodeURIComponent(a2)}?secret=${eT}&issuer=${encodeURIComponent(e2)}&algorithm=SHA1&digits=6&period=30`, eS = E.indexOf(Z), eE = X.join(""), eA = 6 === eE.length, eL = (0, n.useCallback)(
      (e3) => {
        K.current = true, J(e3), N2?.(e3);
      },
      [N2]
    );
    (0, n.useEffect)(() => () => G.current?.abort(), []), (0, n.useEffect)(() => {
      let e3 = V.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => eC(e4?.isIntersecting ?? true));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useEffect)(() => {
      let e3;
      if ("verify" !== Z || !eN) return;
      let t3 = false, a3 = -1, r2 = false, n2 = () => {
        let e4 = Date.now();
        r2 || (r2 = true, ev(`-${(e4 / 1e3 % 30).toFixed(3)}s`)), ej(((e5 = Date.now()) => 30 - Math.floor(e5 / 1e3) % 30)(e4));
        let n3 = Math.floor(e4 / 1e3 / 30);
        Q && n3 !== a3 && (a3 = n3, C(eT, 0, e4).then((e5) => {
          t3 || ew(e5 ?? "284019");
        }));
      };
      n2();
      let s2 = setTimeout(
        () => {
          n2(), e3 = setInterval(n2, 1e3);
        },
        1e3 - Date.now() % 1e3 + 10
      );
      return () => {
        t3 = true, clearTimeout(s2), e3 && clearInterval(e3);
      };
    }, [Z, eN, Q, eT]), (0, n.useEffect)(() => {
      if ("verify" !== Z || !K.current) return;
      let e3 = setTimeout(
        () => q.current[Math.max(
          0,
          X.findIndex((e4) => !e4)
        )]?.focus({ preventScroll: true }),
        60 * !Y
      );
      return () => clearTimeout(e3);
    }, [Z]);
    let eR = (e3) => q.current[Math.max(0, Math.min(5, e3))]?.focus({ preventScroll: true }), eI = (0, n.useCallback)(
      async (e3) => {
        if (es || 6 !== e3.length) return;
        G.current?.abort();
        let t3 = new AbortController();
        G.current = t3, eo(true), en(null), ey("Checking the code");
        try {
          let a3 = g2 ? await g2(e3, t3.signal) : (await Promise.all([T(eT, e3), D(520, t3.signal)]))[0];
          if (t3.signal.aborted) return;
          if (!a3) {
            en("That code did not match. Try the newest one."), ey("That code did not match"), eR(5);
            return;
          }
          el(true), ey(
            Q ? "Code verified. Simulated, nothing was sent." : "Code verified"
          ), await D(260 * !Y, t3.signal), eL("backup");
        } catch (e4) {
          if (O(e4)) return;
          en("We could not check the code. Try again."), ey("We could not check the code");
        } finally {
          G.current === t3 && eo(false);
        }
      },
      [es, g2, eT, Q, Y, eL]
    ), eP = (e3, t3) => {
      if (es || ei) return;
      let a3 = [...X], r2 = e3;
      for (let e4 of t3) {
        if (r2 >= 6) break;
        a3[r2++] = e4;
      }
      ee(a3), en(null);
      let n2 = a3.join("");
      if (6 === n2.length) q.current[5]?.focus({ preventScroll: true }), eI(n2);
      else {
        let e4 = Math.min(r2, 5), t4 = a3.findIndex((t5, a4) => a4 >= e4 && !t5);
        eR(-1 === t4 ? e4 : t4);
      }
    }, eD = (e3) => {
      let t3 = [...X];
      t3[e3] = "", ee(t3), en(null);
    }, eO = async () => {
      if (!ec || eu) return;
      G.current?.abort();
      let e3 = new AbortController();
      G.current = e3, ep(true), ef(null);
      try {
        if (w2 ? await w2(e3.signal) : await D(560, e3.signal), e3.signal.aborted)
          return;
        ey(
          w2 ? "Two-factor authentication is on" : "Two-factor authentication is on. Simulated, nothing was saved."
        ), eL("enabled");
      } catch (e4) {
        if (O(e4)) return;
        ef("Could not turn on two-factor. Try again."), ey("Could not turn on two-factor");
      } finally {
        G.current === e3 && ep(false);
      }
    }, eB = `${e2} backup codes
${a2}

${j2.join("\n")}

Each code works once. Keep them somewhere safe.
`;
    (0, n.useEffect)(() => {
      if (!em) return;
      let e3 = setTimeout(() => e_(false), 1800);
      return () => clearTimeout(e3);
    }, [em]);
    let e$ = "scan" === Z ? { label: "Continue", disabled: false, loading: false } : "verify" === Z ? { label: "Verify", disabled: !eA || ei, loading: es || ei } : "backup" === Z ? { label: "Turn on", disabled: !ec, loading: eu } : { label: "Done", disabled: false, loading: false }, eF = "verify" === Z ? { key: "back", label: "Back" } : "scan" === Z && k2 ? { key: "cancel", label: "Cancel" } : null, ez = (e3) => {
      let t3 = e3 === eS;
      return {
        initial: false,
        animate: t3 ? { opacity: 1, x: 0, visibility: "visible" } : {
          opacity: 0,
          x: Y ? 0 : e3 > eS ? 12 : -12,
          transitionEnd: { visibility: "hidden" }
        },
        transition: Y ? { duration: 0.12 } : t3 ? {
          opacity: { duration: 0.2, ease: L, delay: 0.06 },
          x: {
            type: "spring",
            visualDuration: 0.24,
            bounce: 0,
            delay: 0.06
          }
        } : { duration: 0.1, ease: L },
        inert: !t3,
        "aria-hidden": !t3 || void 0
      };
    }, eU = `${H}-title`, eW = `${H}-verify`, eY = `${H}-message`, eH = Math.min(eS + 1, 3), eQ = "enabled" === Z ? "on" : `${eS + 1}`;
    return (0, r.jsxs)("section", {
      ref: V,
      className: [S().root, U2].filter(Boolean).join(" "),
      "aria-labelledby": eU,
      "data-step": Z,
      children: [
        (0, r.jsxs)("header", {
          className: S().header,
          children: [
            (0, r.jsxs)("div", {
              className: S().headerRow,
              children: [
                (0, r.jsx)("h2", {
                  id: eU,
                  className: S().title,
                  children: "Two-factor authentication"
                }),
                (0, r.jsx)(B, {
                  id: eQ,
                  reduced: Y,
                  className: S().stepLabel,
                  children: "enabled" === Z ? (0, r.jsxs)("span", {
                    className: S().onLabel,
                    children: [
                      (0, r.jsx)(l.A, {
                        size: 16,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      }),
                      "On"
                    ]
                  }) : (0, r.jsxs)("span", {
                    children: [
                      "Step ",
                      (0, r.jsx)("span", {
                        className: S().num,
                        children: eS + 1
                      }),
                      " of ",
                      (0, r.jsx)("span", {
                        className: S().num,
                        children: "3"
                      })
                    ]
                  })
                })
              ]
            }),
            (0, r.jsx)("div", {
              className: S().progress,
              "aria-hidden": "true",
              children: [0, 1, 2].map(
                (e3) => (0, r.jsx)(
                  "span",
                  {
                    className: S().segment,
                    children: (0, r.jsx)("span", {
                      className: S().segmentFill,
                      "data-on": e3 < eH || void 0,
                      "data-done": "enabled" === Z || void 0
                    })
                  },
                  e3
                )
              )
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: S().stage,
          children: [
            (0, r.jsx)(o.PY1.div, {
              className: S().panel,
              ...ez(0),
              children: (0, r.jsxs)("div", {
                className: S().scan,
                children: [
                  (0, r.jsx)("div", {
                    className: S().qr,
                    children: (0, r.jsx)($, {
                      value: eM,
                      label: `QR code that adds ${e2} for ${a2} to an authenticator app`
                    })
                  }),
                  (0, r.jsxs)("div", {
                    className: S().scanText,
                    children: [
                      (0, r.jsx)("h3", {
                        className: S().stepTitle,
                        children: "Scan the QR code"
                      }),
                      (0, r.jsxs)("p", {
                        className: S().muted,
                        children: [
                          "Open your authenticator app and scan this code to add ",
                          e2,
                          "."
                        ]
                      })
                    ]
                  }),
                  (0, r.jsxs)("div", {
                    className: S().works,
                    children: [
                      (0, r.jsxs)("span", {
                        className: S().worksItem,
                        children: [
                          (0, r.jsx)(_, { size: 16 }),
                          "Google Authenticator"
                        ]
                      }),
                      (0, r.jsxs)("span", {
                        className: S().worksItem,
                        children: [(0, r.jsx)(x, { size: 16 }), "1Password"]
                      })
                    ]
                  }),
                  (0, r.jsxs)("div", {
                    className: S().keyBlock,
                    children: [
                      (0, r.jsx)("span", {
                        className: S().meta,
                        id: `${H}-key`,
                        children: "Can't scan it? Enter this key"
                      }),
                      (0, r.jsxs)("div", {
                        className: S().keyField,
                        children: [
                          (0, r.jsx)("code", {
                            className: S().key,
                            "aria-labelledby": `${H}-key`,
                            children: eT.replace(/\s/g, "").toUpperCase().match(/.{1,4}/g)?.join(" ") ?? eT
                          }),
                          (0, r.jsx)(m.CopyButton, {
                            value: eT,
                            label: "Copy setup key",
                            iconOnly: true,
                            variant: "plain"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, r.jsx)(o.PY1.div, {
              className: S().panel,
              ...ez(1),
              children: (0, r.jsxs)("div", {
                className: S().stack,
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h3", {
                        id: eW,
                        className: S().stepTitle,
                        children: "Enter the 6-digit code"
                      }),
                      (0, r.jsxs)("p", {
                        className: S().muted,
                        children: [
                          "Type the code your app shows for ",
                          e2,
                          ". It changes every 30 seconds."
                        ]
                      })
                    ]
                  }),
                  (W = (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)("span", {
                        className: S().entryWho,
                        children: [
                          t2 ? (0, r.jsx)("span", {
                            className: S().entryLogo,
                            "aria-hidden": "true",
                            children: t2
                          }) : null,
                          (0, r.jsxs)("span", {
                            className: S().entryText,
                            children: [
                              (0, r.jsx)("span", {
                                className: S().entryName,
                                children: e2
                              }),
                              (0, r.jsx)("span", {
                                className: S().meta,
                                children: a2
                              })
                            ]
                          })
                        ]
                      }),
                      Q ? (0, r.jsx)("span", {
                        className: S().entryCode,
                        children: eg ? `${eg.slice(0, 3)} ${eg.slice(3)}` : "--- ---"
                      }) : null,
                      (0, r.jsxs)("span", {
                        className: S().entryTimer,
                        children: [
                          (0, r.jsx)(F, { seconds: eb, delay: ek, reduced: Y }),
                          (0, r.jsxs)("span", {
                            className: S().seconds,
                            children: [eb ?? 30, "s"]
                          })
                        ]
                      })
                    ]
                  }), Q ? (0, r.jsx)("button", {
                    type: "button",
                    className: [S().entry, S().entryButton].join(" "),
                    onClick: () => {
                      !eg || es || ei || (ey("Filled from the simulated authenticator"), eP(0, eg));
                    },
                    disabled: !eg || es || ei,
                    "aria-label": `Simulated authenticator: fill in the current code for ${e2}`,
                    children: W
                  }) : (0, r.jsx)("div", { className: S().entry, children: W })),
                  (0, r.jsx)("div", {
                    className: S().otp,
                    role: "group",
                    "aria-labelledby": eW,
                    "aria-describedby": eY,
                    "data-error": er ? "" : void 0,
                    "data-verified": ei || void 0,
                    children: X.map(
                      (e3, t3) => (0, r.jsxs)(
                        n.Fragment,
                        {
                          children: [
                            3 === t3 ? (0, r.jsx)("span", {
                              className: S().dash,
                              "aria-hidden": "true"
                            }) : null,
                            (0, r.jsxs)("div", {
                              className: S().slot,
                              "data-active": et === t3 || void 0,
                              "data-filled": e3 ? "" : void 0,
                              children: [
                                (0, r.jsx)("input", {
                                  ref: (e4) => {
                                    q.current[t3] = e4;
                                  },
                                  className: S().slotInput,
                                  value: e3,
                                  inputMode: "numeric",
                                  pattern: "[0-9]*",
                                  autoComplete: 0 === t3 ? "one-time-code" : "off",
                                  "aria-label": `Digit ${t3 + 1} of 6`,
                                  "aria-invalid": !!er || void 0,
                                  readOnly: es || ei,
                                  onChange: (e4) => ((e5, t4) => {
                                    let a3 = t4.target.value.replace(/\D/g, "");
                                    if (!a3) return void eD(e5);
                                    let r2 = X[e5], n2 = 2 === a3.length && r2 ? a3[0] === r2 ? a3[1] : a3[0] : a3;
                                    eP(a3.length >= 6 ? 0 : e5, n2);
                                  })(t3, e4),
                                  onKeyDown: (e4) => {
                                    "Backspace" === e4.key ? (e4.preventDefault(), !es && !ei && (X[t3] ? eD(t3) : t3 > 0 && (eD(t3 - 1), eR(t3 - 1)))) : "Delete" === e4.key ? (e4.preventDefault(), !es && !ei && eD(t3)) : "ArrowLeft" === e4.key ? (e4.preventDefault(), eR(t3 - 1)) : "ArrowRight" === e4.key ? (e4.preventDefault(), eR(t3 + 1)) : "Home" === e4.key ? (e4.preventDefault(), eR(0)) : "End" === e4.key ? (e4.preventDefault(), eR(5)) : "Enter" === e4.key && (e4.preventDefault(), eA && eI(eE));
                                  },
                                  onPaste: (e4) => {
                                    let a3;
                                    return e4.preventDefault(), void ((a3 = e4.clipboardData.getData("text").replace(/\D/g, "")) && (eP(
                                      a3.length >= 6 ? 0 : t3,
                                      a3.slice(0, 6)
                                    ), ey(a3.length >= 6 ? "Code pasted" : "")));
                                  },
                                  onFocus: (e4) => {
                                    ea(t3), e4.currentTarget.select();
                                  },
                                  onBlur: () => ea((e4) => e4 === t3 ? -1 : e4)
                                }),
                                (0, r.jsxs)("span", {
                                  className: S().glyph,
                                  "aria-hidden": "true",
                                  children: [
                                    (0, r.jsx)(s.N, {
                                      initial: false,
                                      children: e3 ? (0, r.jsx)(
                                        o.PY1.span,
                                        {
                                          className: S().glyphInner,
                                          initial: Y ? { opacity: 0 } : { opacity: 0, y: 2 },
                                          animate: { opacity: 1, y: 0 },
                                          exit: {
                                            opacity: 0,
                                            transition: Y ? P : I
                                          },
                                          transition: Y ? P : R,
                                          children: e3
                                        },
                                        e3
                                      ) : null
                                    }),
                                    e3 || et !== t3 || es ? null : (0, r.jsx)("span", {
                                      className: S().caret
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        },
                        t3
                      )
                    )
                  }),
                  (0, r.jsx)("div", {
                    className: S().message,
                    id: eY,
                    children: (0, r.jsx)(B, {
                      id: er ? `e:${er}` : ei ? "ok" : "hint",
                      reduced: Y,
                      className: S().messageSwap,
                      children: er ? (0, r.jsxs)("span", {
                        className: S().errorText,
                        role: "alert",
                        children: [
                          (0, r.jsx)(c.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: S().truncate,
                            children: er
                          })
                        ]
                      }) : ei ? (0, r.jsxs)("span", {
                        className: S().okText,
                        children: [
                          (0, r.jsx)(l.A, {
                            size: 16,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: S().truncate,
                            children: "Code verified"
                          })
                        ]
                      }) : (0, r.jsx)("span", {
                        className: S().hintText,
                        children: (0, r.jsx)("span", {
                          className: S().truncate,
                          children: Q ? "Simulated app. Click the code above to fill it in." : "Paste or type the code."
                        })
                      })
                    })
                  })
                ]
              })
            }),
            (0, r.jsx)(o.PY1.div, {
              className: S().panel,
              ...ez(2),
              children: (0, r.jsxs)("div", {
                className: S().stack,
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h3", {
                        className: S().stepTitle,
                        children: "Save your backup codes"
                      }),
                      (0, r.jsx)("p", {
                        className: S().muted,
                        children: "Each code works once. Use one to sign in if you lose your phone."
                      })
                    ]
                  }),
                  (0, r.jsx)("ol", {
                    className: S().codes,
                    "aria-label": "Backup codes",
                    children: j2.map(
                      (e3) => (0, r.jsx)("li", { className: S().code, children: e3 }, e3)
                    )
                  }),
                  (0, r.jsxs)("div", {
                    className: S().backupFoot,
                    children: [
                      (0, r.jsx)("div", {
                        className: S().check,
                        children: (0, r.jsx)(f.S, {
                          label: "I saved my backup codes",
                          checked: ec,
                          onCheckedChange: (e3) => {
                            ed(true === e3), ef(null);
                          }
                        })
                      }),
                      (0, r.jsxs)("div", {
                        className: S().actions,
                        children: [
                          (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            onClick: () => {
                              let t3 = URL.createObjectURL(
                                new Blob([eB], { type: "text/plain" })
                              ), a3 = document.createElement("a");
                              a3.href = t3, a3.download = `${e2.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-backup-codes.txt`, document.body.appendChild(a3), a3.click(), a3.remove(), setTimeout(() => URL.revokeObjectURL(t3), 1e3), e_(true), ey("Backup codes downloaded");
                            },
                            children: em ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(l.A, {
                                  size: 16,
                                  strokeWidth: 2,
                                  "aria-hidden": "true"
                                }),
                                "Saved"
                              ]
                            }) : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(d.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                "Download"
                              ]
                            })
                          }),
                          (0, r.jsx)(m.CopyButton, {
                            value: eB,
                            label: "Copy"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, r.jsx)(o.PY1.div, {
              className: S().panel,
              ...ez(3),
              children: (0, r.jsxs)("div", {
                className: S().stack,
                children: [
                  (0, r.jsxs)("div", {
                    className: S().doneHead,
                    children: [
                      (0, r.jsxs)("svg", {
                        className: S().doneMark,
                        width: 40,
                        height: 40,
                        viewBox: "0 0 40 40",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                          (0, r.jsx)("circle", {
                            cx: "20",
                            cy: "20",
                            r: "18.5",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            opacity: ".28"
                          }),
                          (0, r.jsx)(o.PY1.path, {
                            d: "M13 20.5l4.8 4.8L27.5 15",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            initial: false,
                            animate: { pathLength: +("enabled" === Z) },
                            transition: Y ? P : {
                              duration: 0.26,
                              ease: L,
                              delay: 0.14 * ("enabled" === Z)
                            }
                          })
                        ]
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("h3", {
                            className: S().stepTitle,
                            children: "Two-factor authentication is on"
                          }),
                          (0, r.jsxs)("p", {
                            className: S().muted,
                            children: [
                              e2,
                              " will ask for a code when you sign in on a new device."
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, r.jsxs)("ul", {
                    className: S().summary,
                    children: [
                      (0, r.jsxs)("li", {
                        className: S().summaryRow,
                        children: [
                          (0, r.jsx)(u.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: S().summaryName,
                            children: "Authenticator app"
                          }),
                          (0, r.jsx)("span", {
                            className: S().meta,
                            children: M2
                          })
                        ]
                      }),
                      (0, r.jsxs)("li", {
                        className: S().summaryRow,
                        children: [
                          (0, r.jsx)(p.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: S().summaryName,
                            children: "Backup codes"
                          }),
                          (0, r.jsxs)("span", {
                            className: S().meta,
                            children: [
                              (0, r.jsx)("span", {
                                className: S().num,
                                children: j2.length
                              }),
                              " of ",
                              (0, r.jsx)("span", {
                                className: S().num,
                                children: j2.length
                              }),
                              " unused"
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        (0, r.jsxs)("footer", {
          className: S().footer,
          children: [
            (0, r.jsx)("div", {
              className: S().footLeft,
              children: (0, r.jsx)(s.N, {
                initial: false,
                mode: "popLayout",
                children: eF ? (0, r.jsx)(
                  o.PY1.span,
                  {
                    className: S().footItem,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: Y ? P : I },
                    transition: Y ? P : R,
                    children: (0, r.jsx)(h.$, {
                      variant: "ghost",
                      size: "sm",
                      onClick: function() {
                        "scan" === Z ? k2?.() : (G.current?.abort(), eo(false), ee(Array(6).fill("")), en(null), eL("scan"));
                      },
                      children: eF.label
                    })
                  },
                  eF.key
                ) : eh && "backup" === Z ? (0, r.jsxs)(
                  o.PY1.span,
                  {
                    className: [S().footItem, S().errorText].join(" "),
                    role: "alert",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: Y ? P : I },
                    transition: Y ? P : R,
                    children: [
                      (0, r.jsx)(c.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, r.jsx)("span", {
                        className: S().truncate,
                        children: eh
                      })
                    ]
                  },
                  "enable-error"
                ) : null
              })
            }),
            (0, r.jsx)(h.$, {
              size: "sm",
              onClick: function() {
                "scan" === Z ? (en(null), eL("verify")) : "verify" === Z ? eI(eE) : "backup" === Z ? eO() : v2 ? v2() : (G.current?.abort(), ee(Array(6).fill("")), en(null), el(false), eo(false), ed(false), ep(false), ef(null), e_(false), K.current = false, J("scan"), N2?.("scan"), ey("Demo restarted"));
              },
              disabled: e$.disabled && !e$.loading,
              loading: e$.loading,
              children: e$.label
            })
          ]
        }),
        (0, r.jsx)("span", {
          className: S().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ex
        })
      ]
    });
  }
  let U = z;
}

__m(__module,__exports,__require);
}