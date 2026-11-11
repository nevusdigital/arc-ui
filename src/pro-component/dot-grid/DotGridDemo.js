function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { DotGridDemo: () => g });
  var n = r(95155), a = r(12115), o = r(18310), l = r(25354), i = r(7770), s = r(49932), d = r.n(s);
  let c = () => () => {
  };
  function u({
    gap: e2 = 22,
    dotSize: t2 = 1.4,
    radius: r2 = 150,
    strength: l2 = 16,
    ripple: s2 = true,
    fade: p2 = true,
    color: h2,
    activeColor: f2,
    children: m2,
    className: g2,
    style: y
  }) {
    let w, v = (w = (0, a.useSyncExternalStore)(
      c,
      () => true,
      () => false
    ), !!(0, o.I)() && w), b = (0, a.useRef)(null), x = (0, a.useRef)(null), _ = (0, a.useRef)({
      gap: e2,
      dotSize: t2,
      radius: r2,
      strength: l2,
      ripple: s2,
      reduced: v
    });
    (0, a.useEffect)(() => {
      _.current = {
        gap: e2,
        dotSize: t2,
        radius: r2,
        strength: l2,
        ripple: s2,
        reduced: v
      };
    });
    let M = (0, a.useRef)(false);
    (0, a.useEffect)(() => {
      let e3 = b.current, t3 = x.current;
      if (!e3 || !t3) return;
      let r3 = t3.getContext("2d");
      if (!r3) return;
      let n2 = 0, a2 = 0, o2 = 1, l3 = 0, s3 = new Float32Array(0), d2 = new Float32Array(0), c2 = new Float32Array(0), u2 = new Float32Array(0), p3 = new Float32Array(0), h3 = new Float32Array(0), f3 = new Float32Array(0), m3 = "", g3 = "", y2 = [], w2 = { x: 0, y: 0, inside: false }, v2 = { x: 0, y: 0, power: 0 }, A2 = 0, E = 0, F = true, L = () => {
        let t4 = getComputedStyle(e3);
        m3 = t4.getPropertyValue("--dot-grid-color").trim() || t4.color, g3 = t4.getPropertyValue("--dot-grid-active").trim() || t4.color;
      }, N = () => {
        let r4 = e3.getBoundingClientRect();
        n2 = r4.width, a2 = r4.height, o2 = Math.min(window.devicePixelRatio || 1, 2), t3.width = Math.round(n2 * o2), t3.height = Math.round(a2 * o2);
        let i2 = Math.max(6, _.current.gap), m4 = Math.floor(n2 / i2) + 1, g4 = Math.floor(a2 / i2) + 1, y3 = (n2 - (m4 - 1) * i2) / 2, w3 = (a2 - (g4 - 1) * i2) / 2;
        s3 = new Float32Array(l3 = m4 * g4), d2 = new Float32Array(l3), c2 = new Float32Array(l3), u2 = new Float32Array(l3), p3 = new Float32Array(l3), h3 = new Float32Array(l3), f3 = new Float32Array(l3);
        let v3 = 0;
        for (let e4 = 0; e4 < g4; e4++)
          for (let t4 = 0; t4 < m4; t4++)
            s3[v3] = y3 + t4 * i2, d2[v3] = w3 + e4 * i2, v3++;
        S();
      }, S = () => {
        let { dotSize: e4 } = _.current;
        r3.setTransform(o2, 0, 0, o2, 0, 0), r3.clearRect(0, 0, n2, a2), r3.fillStyle = m3, r3.beginPath();
        for (let t4 = 0; t4 < l3; t4++) {
          if (f3[t4] > 0.04) continue;
          let n3 = s3[t4] + c2[t4], a3 = d2[t4] + u2[t4];
          r3.moveTo(n3 + e4, a3), r3.arc(n3, a3, e4, 0, 2 * Math.PI);
        }
        r3.fill(), r3.fillStyle = g3;
        for (let t4 = 0; t4 < l3; t4++) {
          let n3 = f3[t4];
          if (n3 <= 0.04) continue;
          let a3 = s3[t4] + c2[t4], o3 = d2[t4] + u2[t4], l4 = e4 * (1 + 1.1 * n3);
          r3.globalAlpha = 0.35 + 0.65 * n3, r3.beginPath(), r3.arc(a3, o3, l4, 0, 2 * Math.PI), r3.fill(), r3.globalAlpha = 1, n3 < 0.5 && (r3.fillStyle = m3, r3.globalAlpha = 1 - 2 * n3, r3.beginPath(), r3.arc(a3, o3, e4, 0, 2 * Math.PI), r3.fill(), r3.globalAlpha = 1, r3.fillStyle = g3);
        }
      }, j = (e4) => {
        A2 = 0;
        let t4 = Math.min(2.5, E ? (e4 - E) / (1e3 / 60) : 1);
        E = e4;
        let { radius: r4, strength: n3, reduced: a3 } = _.current, o3 = 1 - Math.pow(0.72, t4);
        v2.x += (w2.x - v2.x) * o3, v2.y += (w2.y - v2.y) * o3;
        let i2 = +!!w2.inside;
        v2.power += (i2 - v2.power) * (1 - Math.pow(0.88, t4)), 2e-3 > Math.abs(i2 - v2.power) && (v2.power = i2);
        for (let t5 = y2.length - 1; t5 >= 0; t5--)
          e4 - y2[t5].start > 1500 && y2.splice(t5, 1);
        let m4 = v2.power > 0 && v2.power < 1, g4 = 0.16 * t4, b2 = Math.pow(0.74, t4);
        for (let o4 = 0; o4 < l3; o4++) {
          let l4 = s3[o4], i3 = d2[o4], w3 = 0, x2 = 0, _2 = 0;
          if (v2.power > 0) {
            let e5 = l4 - v2.x, t5 = i3 - v2.y, a4 = Math.hypot(e5, t5);
            if (a4 < r4 && a4 > 1e-3) {
              let o5 = a4 / r4, l5 = 6.75 * o5 * (1 - o5) * (1 - o5) * n3 * v2.power;
              w3 += e5 / a4 * l5, x2 += t5 / a4 * l5, _2 = Math.max(_2, (1 - o5) * (1 - o5) * v2.power);
            }
          }
          for (let t5 = 0; t5 < y2.length; t5++) {
            let r5 = y2[t5], n4 = e4 - r5.start, a4 = 0.62 * n4, o5 = l4 - r5.x, s4 = i3 - r5.y, d3 = Math.hypot(o5, s4), c3 = (d3 - a4) / 46;
            if (c3 < -2.2 || c3 > 2.2 || d3 < 1e-3) continue;
            let u3 = 1 - n4 / 1500, p4 = Math.exp(-c3 * c3) * u3 * u3;
            w3 += o5 / d3 * 11 * p4, x2 += s4 / d3 * 11 * p4, _2 = Math.max(_2, 0.9 * p4);
          }
          a3 ? (c2[o4] = 0, u2[o4] = 0, p3[o4] = 0, h3[o4] = 0) : (p3[o4] = (p3[o4] + (w3 - c2[o4]) * g4) * b2, h3[o4] = (h3[o4] + (x2 - u2[o4]) * g4) * b2, c2[o4] += p3[o4] * t4, u2[o4] += h3[o4] * t4, !m4 && (Math.abs(p3[o4]) > 0.01 || Math.abs(h3[o4]) > 0.01 || Math.abs(w3 - c2[o4]) > 0.05 || Math.abs(x2 - u2[o4]) > 0.05) && (m4 = true)), f3[o4] += (_2 - f3[o4]) * (1 - Math.pow(0.75, t4)), !m4 && Math.abs(_2 - f3[o4]) > 0.01 && (m4 = true);
        }
        S(), y2.length || m4 || w2.inside ? P() : E = 0;
      }, P = () => {
        !A2 && F && (A2 = requestAnimationFrame(j));
      }, R = (t4) => {
        let r4 = e3.getBoundingClientRect();
        return { x: t4.clientX - r4.left, y: t4.clientY - r4.top };
      }, C = (e4) => {
        let { x: t4, y: r4 } = R(e4);
        w2.inside || (v2.x = t4, v2.y = r4), w2.x = t4, w2.y = r4, w2.inside = true, P();
      }, I = () => {
        w2.inside = false, P();
      }, T = (e4) => {
        if (!_.current.ripple || _.current.reduced || e4.button > 0) return;
        let { x: t4, y: r4 } = R(e4);
        y2.push({ x: t4, y: r4, start: performance.now() }), y2.length > 6 && y2.shift(), "mouse" !== e4.pointerType && (w2.x = t4, w2.y = r4, v2.x = t4, v2.y = r4), P();
      }, k = (e4) => {
        "mouse" !== e4.pointerType && I();
      };
      L(), N(), M.current && !_.current.reduced && t3.animate?.([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3 * i.T.duration.standard,
        easing: `cubic-bezier(${i.T.ease.standard.join(",")})`
      }), M.current = true;
      let B = new ResizeObserver(() => N());
      B.observe(e3);
      let D = new MutationObserver(() => {
        L(), S();
      });
      D.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      });
      let z = new IntersectionObserver(([e4]) => {
        (F = e4.isIntersecting) && P();
      });
      return z.observe(e3), e3.addEventListener("pointermove", C), e3.addEventListener("pointerleave", I), e3.addEventListener("pointerdown", T), e3.addEventListener("pointerup", k), e3.addEventListener("pointercancel", I), () => {
        cancelAnimationFrame(A2), B.disconnect(), D.disconnect(), z.disconnect(), e3.removeEventListener("pointermove", C), e3.removeEventListener("pointerleave", I), e3.removeEventListener("pointerdown", T), e3.removeEventListener("pointerup", k), e3.removeEventListener("pointercancel", I);
      };
    }, [e2, t2, h2, f2]);
    let A = {
      ...h2 ? { "--dot-grid-color": h2 } : null,
      ...f2 ? { "--dot-grid-active": f2 } : null,
      ...y
    };
    return (0, n.jsxs)("div", {
      ref: b,
      className: [d().root, g2].filter(Boolean).join(" "),
      style: A,
      "data-fade": p2 || void 0,
      children: [
        (0, n.jsx)("canvas", {
          ref: x,
          className: d().canvas,
          "aria-hidden": "true"
        }),
        null != m2 && (0, n.jsx)("div", { className: d().content, children: m2 })
      ]
    });
  }
  var p = r(60437), h = r.n(p);
  let f = [
    { label: "Dense", gap: 14 },
    { label: "Default", gap: 22 },
    { label: "Loose", gap: 32 }
  ], m = () => () => {
  };
  function g() {
    let e2, t2 = (e2 = (0, a.useSyncExternalStore)(
      m,
      () => true,
      () => false
    ), !!(0, o.I)() && e2), [r2, s2] = (0, a.useState)(1);
    return (0, n.jsx)("div", {
      className: h().demo,
      children: (0, n.jsx)(u, {
        className: h().field,
        gap: f[r2].gap,
        children: (0, n.jsxs)("div", {
          className: h().segment,
          role: "group",
          "aria-label": "Density",
          children: [
            (0, n.jsx)(l.PY1.span, {
              className: h().thumb,
              "aria-hidden": "true",
              initial: false,
              animate: { x: `${100 * r2}%` },
              transition: t2 ? { duration: 0 } : i.T.spring.snappy
            }),
            f.map(
              (e3, t3) => (0, n.jsx)(
                "button",
                {
                  type: "button",
                  "aria-pressed": r2 === t3,
                  className: h().option,
                  onClick: () => s2(t3),
                  children: e3.label
                },
                e3.label
              )
            )
          ]
        })
      })
    });
  }
}

__m(__module,__exports,__require);
}