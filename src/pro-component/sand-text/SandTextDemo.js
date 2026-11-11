function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SandTextDemo: () => m, default: () => g });
  var n = a(95155), r = a(12115), l = a(25354), o = a(18310), i = a(77166), s = a.n(i);
  let h = () => () => {
  };
  function d({
    text: e2,
    grain: t2 = 2,
    radius: a2 = 14,
    palette: l2,
    as: i2 = "h2",
    className: f2,
    style: u2
  }) {
    let c2, x2 = (c2 = (0, r.useSyncExternalStore)(
      h,
      () => true,
      () => false
    ), !!(0, o.I)() && c2), m2 = (0, r.useRef)(null), g2 = (0, r.useRef)(null), y = (0, r.useRef)(null), p = (0, r.useRef)({ radius: a2 });
    (0, r.useEffect)(() => {
      p.current = { radius: a2 };
    });
    let M = l2?.join("|") ?? "";
    return (0, r.useEffect)(() => {
      let e3 = m2.current, a3 = g2.current;
      if (!e3 || !a3) return;
      let n2 = a3.getContext("2d"), r2 = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
      if (!n2 || !r2) return;
      let l3 = [], o2 = () => {
        for (let t3 of (l3 = [], M ? M.split("|") : [getComputedStyle(e3).color])) {
          r2.clearRect(0, 0, 1, 1), r2.fillStyle = "#777", r2.fillStyle = t3, r2.fillRect(0, 0, 1, 1);
          let [e4, a4, n3] = r2.getImageData(0, 0, 1, 1).data;
          for (let t4 of [-36, -18, 0, 18, 36])
            l3.push(
              [e4 + t4, a4 + t4, n3 + t4].map(
                (e5) => Math.max(0, Math.min(255, e5))
              )
            );
        }
      };
      o2();
      let i3 = 0, s2 = 0, h2 = 1, d2 = t2, f3 = new Uint8Array(0), u3 = new Uint8Array(0), c3 = new Uint8Array(0), v = new Uint8Array(0), w = new Uint8Array(0), _ = [], b = [], E = null, A = document.createElement("canvas"), S = 0, C = false, R = -1 / 0, j = 0, k = "", N = { x: 0, y: 0, px: 0, py: 0, inside: false }, B = () => Math.random() * l3.length | 0, T = (t3) => {
        if (u3.fill(0), _ = [], !i3 || !t3) return;
        let a4 = document.createElement("canvas");
        a4.width = i3, a4.height = s2;
        let n3 = a4.getContext("2d", { willReadFrequently: true }), r3 = getComputedStyle(e3), l4 = parseFloat(r3.fontSize) / d2, o3 = r3.fontFamily;
        n3.font = `500 ${l4}px ${o3}`;
        let h3 = n3.measureText(t3).width;
        h3 > 0.94 * i3 && (l4 *= 0.94 * i3 / h3), n3.font = `500 ${l4}px ${o3}`, "letterSpacing" in n3 && (n3.letterSpacing = `${-(0.03 * l4)}px`), n3.textAlign = "center", n3.textBaseline = "alphabetic", n3.fillStyle = "#000";
        let f4 = n3.measureText(t3), c4 = f4.actualBoundingBoxAscent, x3 = f4.actualBoundingBoxDescent, m3 = Math.round((s2 - 3 - (c4 + x3)) * 0.42 + c4);
        n3.fillText(t3, i3 / 2, m3);
        let g3 = n3.getImageData(0, 0, i3, s2).data;
        for (let e4 = 0; e4 < i3 * s2; e4++)
          g3[4 * e4 + 3] > 120 && (u3[e4] = 1, _.push(e4));
        for (let e4 of b)
          e4.target >= 0 && !u3[e4.target] && (w[e4.target] = 0, e4.target = -1);
      }, U = (e4) => {
        if (k = e4, i3) {
          T(e4), w.fill(0);
          for (let e5 = 0; e5 < f3.length; e5++)
            1 !== f3[e5] || u3[e5] || (f3[e5] = 2, v[e5] = 0);
          if (x2) {
            for (let e5 of (f3.fill(0), _)) f3[e5] = 1, c3[e5] = B();
            b = [];
          } else R = -1 / 0;
          O();
        }
      }, I = () => {
        let n3 = e3.getBoundingClientRect();
        if (!n3.width || !n3.height) return;
        h2 = Math.min(window.devicePixelRatio || 1, 2), d2 = Math.max(2, t2);
        let r3 = Math.max(20, Math.floor(n3.width / d2)), l4 = Math.max(12, Math.floor(n3.height / d2));
        if (r3 === i3 && l4 === s2) return;
        let o3 = !i3, m3 = (i3 = r3) * (s2 = l4);
        if (f3 = new Uint8Array(m3), u3 = new Uint8Array(m3), c3 = new Uint8Array(m3), v = new Uint8Array(m3), w = new Uint8Array(m3), b = [], A.width = i3, A.height = s2, E = new ImageData(i3, s2), a3.width = Math.round(i3 * d2 * h2), a3.height = Math.round(s2 * d2 * h2), a3.style.width = `${i3 * d2}px`, a3.style.height = `${s2 * d2}px`, T(k), !o3 || x2)
          for (let e4 of _) f3[e4] = 1, c3[e4] = B();
        O();
      }, D = (e4, t3, a4) => {
        let n3 = a4;
        for (; n3 >= 0 && 0 !== f3[n3 * i3 + t3]; ) n3--;
        if (n3 < 0) return;
        let r3 = n3 * i3 + t3;
        f3[r3] = e4.target === r3 || u3[r3] && !L(t3, n3) ? 1 : 2, c3[r3] = e4.tone, v[r3] = 0, e4.target >= 0 && (w[e4.target] = 0);
      }, L = (e4, t3) => {
        if (!N.inside) return false;
        let a4 = p.current.radius / d2 * 1.25, n3 = e4 + 0.5 - N.x, r3 = t3 + 0.5 - N.y;
        return n3 * n3 + r3 * r3 < a4 * a4;
      }, $ = (e4) => {
        let t3 = false, a4 = false, n3 = [];
        j ^= 1;
        for (let e5 = s2 - 1; e5 >= 0; e5--)
          for (let r4 = 0; r4 < i3; r4++) {
            let l4 = j ? r4 : i3 - 1 - r4, o3 = e5 * i3 + l4;
            if (2 === f3[o3]) {
              if (e5 < s2 - 1) {
                let e6 = o3 + i3;
                if (0 === f3[e6]) {
                  f3[e6] = 2, c3[e6] = c3[o3], v[e6] = 0, f3[o3] = 0, t3 = true;
                  continue;
                }
                let a5 = 0.5 > Math.random() ? -1 : 1, n4 = false;
                for (let t4 of [a5, -a5]) {
                  let a6 = l4 + t4;
                  if (a6 < 0 || a6 >= i3) continue;
                  let r5 = e6 + t4;
                  if (0 === f3[r5] && 0 === f3[o3 + t4]) {
                    f3[r5] = 2, c3[r5] = c3[o3], v[r5] = 0, f3[o3] = 0, n4 = true;
                    break;
                  }
                }
                if (n4) {
                  t3 = true;
                  continue;
                }
              }
              v[o3] < 255 && v[o3]++, u3[o3] && v[o3] > 4 && !L(l4, e5) ? f3[o3] = 1 : !u3[o3] && v[o3] > 20 ? n3.push(o3) : a4 = true;
            }
          }
        let r3 = n3.length > 0;
        if (e4 && n3.length) {
          let e5 = Math.max(3, Math.round(0.03 * n3.length));
          for (let t4 = 0; t4 < e5 && n3.length; t4++) {
            let e6 = Math.random() * n3.length | 0;
            f3[n3[e6]] = 0, n3[e6] = n3[n3.length - 1], n3.pop();
          }
          r3 = true;
        }
        return t3 || r3 || a4;
      }, F = (e4) => {
        if (S = 0, !i3) return;
        let t3 = false;
        if (!x2) {
          N.inside && (() => {
            let e5 = p.current.radius / d2, t4 = N.x - N.px, a5 = N.y - N.py, n3 = Math.hypot(t4, a5);
            if (N.px = N.x, N.py = N.y, n3 < 0.15) return false;
            let r3 = Math.max(0, Math.floor(N.x - e5)), l4 = Math.min(i3 - 1, Math.ceil(N.x + e5)), o3 = Math.max(0, Math.floor(N.y - e5)), h3 = Math.min(s2 - 1, Math.ceil(N.y + e5)), u4 = false;
            for (let n4 = o3; n4 <= h3; n4++)
              for (let o4 = r3; o4 <= l4; o4++) {
                let r4 = n4 * i3 + o4;
                if (0 === f3[r4]) continue;
                let l5 = o4 + 0.5 - N.x, s3 = n4 + 0.5 - N.y, h4 = Math.hypot(l5, s3);
                if (h4 > e5) continue;
                f3[r4] = 0;
                let d3 = (1 - h4 / e5) * 0.9 + 0.25;
                b.push({
                  x: o4 + 0.5,
                  y: n4 + 0.5,
                  tone: c3[r4],
                  target: -1,
                  vx: l5 / (h4 || 1) * d3 + t4 * (0.25 + 0.25 * Math.random()) + (Math.random() - 0.5) * 0.5,
                  vy: s3 / (h4 || 1) * d3 + a5 * (0.2 + 0.2 * Math.random()) - 1.1 * Math.random()
                }), u4 = true;
              }
            return u4;
          })() && (R = e4);
          let a4 = e4 - R > 650;
          a4 && (() => {
            let e5 = Math.max(24, Math.round(_.length / 55)), t4 = [];
            for (let e6 of _) 0 !== f3[e6] || w[e6] || t4.push(e6);
            if (!t4.length) return false;
            for (let a5 of (t4.sort(
              (e6, t5) => (t5 / i3 | 0) - (e6 / i3 | 0) + (Math.random() - 0.5) * 6
            ), t4)) {
              if (e5-- <= 0) break;
              let t5 = a5 % i3;
              w[a5] = 1, b.push({
                x: t5 + 0.5,
                y: -1 - 10 * Math.random(),
                vx: 0,
                vy: 1.4 + 0.8 * Math.random(),
                tone: B(),
                target: a5
              });
            }
            return true;
          })() && (t3 = true), (() => {
            let e5 = [];
            for (let t4 of b) {
              t4.vy = Math.min(t4.target >= 0 ? 5 : 4, t4.vy + 0.22), t4.vx *= 0.96;
              let a5 = Math.max(
                1,
                Math.ceil(Math.max(Math.abs(t4.vx), Math.abs(t4.vy)))
              ), n3 = true;
              for (let e6 = 0; e6 < a5; e6++) {
                let e7 = t4.x + t4.vx / a5, r3 = t4.y + t4.vy / a5, l4 = Math.floor(e7), o3 = Math.floor(r3);
                if (l4 < 0 || l4 >= i3) {
                  n3 = false, t4.target >= 0 && (w[t4.target] = 0);
                  break;
                }
                if (t4.target >= 0) {
                  let a6 = t4.target % i3, l5 = t4.target / i3 | 0;
                  if (o3 >= l5) {
                    0 === f3[t4.target] ? (f3[t4.target] = 1, c3[t4.target] = t4.tone) : D(t4, a6, l5), w[t4.target] = 0, n3 = false;
                    break;
                  }
                  t4.x = e7, t4.y = r3;
                  continue;
                }
                if (o3 >= s2) {
                  D(t4, Math.floor(t4.x), s2 - 1), n3 = false;
                  break;
                }
                if (o3 >= 0 && 0 !== f3[o3 * i3 + l4]) {
                  D(t4, Math.floor(t4.x), Math.max(0, Math.floor(t4.y))), n3 = false;
                  break;
                }
                t4.x = e7, t4.y = r3;
              }
              n3 && e5.push(t4);
            }
            b = e5;
          })();
          for (let e5 = 0; e5 < 2; e5++) $(a4) && (t3 = true);
          b.length && (t3 = true);
        }
        (() => {
          if (!E) return;
          let e5 = E.data;
          e5.fill(0);
          let t4 = (t5, a4) => {
            let n3 = l3[a4 % l3.length], r3 = 4 * t5;
            e5[r3] = n3[0], e5[r3 + 1] = n3[1], e5[r3 + 2] = n3[2], e5[r3 + 3] = 255;
          };
          for (let e6 = 0; e6 < f3.length; e6++) 0 !== f3[e6] && t4(e6, c3[e6]);
          for (let e6 of b) {
            let a4 = Math.floor(e6.x), n3 = Math.floor(e6.y);
            a4 >= 0 && a4 < i3 && n3 >= 0 && n3 < s2 && t4(n3 * i3 + a4, e6.tone);
          }
          A.getContext("2d").putImageData(E, 0, 0), n2.setTransform(1, 0, 0, 1, 0, 0), n2.clearRect(0, 0, a3.width, a3.height), n2.imageSmoothingEnabled = false, n2.drawImage(A, 0, 0, a3.width, a3.height);
        })(), (t3 || N.inside) && O();
      }, O = () => {
        S || C || (S = requestAnimationFrame(F));
      }, q = (e4) => {
        let t3, n3 = (t3 = a3.getBoundingClientRect(), { x: (e4.clientX - t3.left) / d2, y: (e4.clientY - t3.top) / d2 });
        N.inside || (N.px = n3.x, N.py = n3.y), N.x = n3.x, N.y = n3.y, N.inside = true, O();
      }, P = () => {
        N.inside = false, O();
      }, z = (e4) => {
        "mouse" !== e4.pointerType && P();
      };
      y.current = { setText: U };
      let J = false;
      I(), U(k), document.fonts?.ready.then(() => {
        if (!C && !J) {
          J = true, T(k);
          for (let e4 = 0; e4 < f3.length; e4++)
            1 !== f3[e4] || u3[e4] || (f3[e4] = 2, v[e4] = 0);
          O();
        }
      });
      let Q = new ResizeObserver(I);
      Q.observe(e3);
      let Y = new MutationObserver(() => {
        o2(), O();
      });
      return Y.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      }), e3.addEventListener("pointermove", q), e3.addEventListener("pointerleave", P), e3.addEventListener("pointerup", z), e3.addEventListener("pointercancel", P), () => {
        C = true, cancelAnimationFrame(S), y.current = null, Q.disconnect(), Y.disconnect(), e3.removeEventListener("pointermove", q), e3.removeEventListener("pointerleave", P), e3.removeEventListener("pointerup", z), e3.removeEventListener("pointercancel", P);
      };
    }, [t2, M, x2]), (0, r.useEffect)(() => {
      y.current?.setText(e2);
    }, [e2, t2, M, x2]), (0, n.jsxs)("div", {
      ref: m2,
      className: [s().root, f2].filter(Boolean).join(" "),
      style: u2,
      children: [
        (0, n.jsx)(i2, { className: s().srOnly, children: e2 }),
        (0, n.jsx)("canvas", {
          ref: g2,
          className: s().canvas,
          "aria-hidden": "true"
        })
      ]
    });
  }
  var f = a(7770), u = a(78858), c = a.n(u);
  let x = ["Dunes", "Hourglass", "Shore"];
  function m() {
    let [e2, t2] = (0, r.useState)(x[0]), a2 = (0, r.useId)();
    return (0, n.jsxs)("div", {
      className: c().demo,
      children: [
        (0, n.jsx)("div", {
          className: c().stage,
          children: (0, n.jsx)(d, { className: c().text, text: e2 })
        }),
        (0, n.jsx)("div", {
          className: c().words,
          role: "radiogroup",
          "aria-label": "Word",
          children: x.map(
            (r2) => (0, n.jsxs)(
              "button",
              {
                type: "button",
                role: "radio",
                "aria-checked": e2 === r2,
                className: c().word,
                onClick: () => t2(r2),
                children: [
                  e2 === r2 && (0, n.jsx)(l.PY1.span, {
                    layoutId: `sand-text-word-${a2}`,
                    className: c().thumb,
                    transition: f.T.spring.snappy
                  }),
                  (0, n.jsx)("span", { className: c().label, children: r2 })
                ]
              },
              r2
            )
          )
        })
      ]
    });
  }
  let g = m;
}

__m(__module,__exports,__require);
}