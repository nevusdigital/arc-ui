/* ink-fluid (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(7677, ".demo{width:100%;max-width:760px;margin-inline:auto;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.hero{display:grid;place-items:center;min-height:440px;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface)}\n@media (max-width:480px){.hero{min-height:380px}\n.copy{display:grid;justify-items:center;gap:12px;max-width:460px;padding:48px 24px;text-align:center;pointer-events:none}\n.title{margin:0;color:var(--foreground);font-family:var(--font-display);font-size:clamp(var(--text-3xl),6vw,var(--text-4xl));font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.lede{margin:0;color:var(--text-secondary);font-size:var(--text-base);line-height:var(--leading-body);text-wrap:balance}\n.actions{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:12px;pointer-events:auto}", {"demo":"demo","hero":"hero","copy":"copy","title":"title","lede":"lede","actions":"actions"});
A.reg(36198, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { InkFluidDemo: () => g, default: () => w });
  var u = r(95155), i = r(51288), a = r(12115), n = r(18310), o = r(69718), l = r.n(o);
  let c = `#version 300 es
in vec2 aPos; uniform vec2 uTexel;
out vec2 vUv; out vec2 vL; out vec2 vR; out vec2 vT; out vec2 vB;
void main() {
  vUv = aPos * 0.5 + 0.5;
  vL = vUv - vec2(uTexel.x, 0.0); vR = vUv + vec2(uTexel.x, 0.0);
  vT = vUv + vec2(0.0, uTexel.y); vB = vUv - vec2(0.0, uTexel.y);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`, s = `#version 300 es
precision highp float; precision highp sampler2D;
in vec2 vUv; in vec2 vL; in vec2 vR; in vec2 vT; in vec2 vB; out vec4 o;
`, v = {
    splat: `${s}uniform sampler2D uTarget; uniform float uAspect; uniform vec3 uColor; uniform vec2 uPoint; uniform float uRadius;
void main() { vec2 p = vUv - uPoint; p.x *= uAspect; vec3 s = exp(-dot(p, p) / uRadius) * uColor; o = vec4(texture(uTarget, vUv).xyz + s, 1.0); }`,
    advect: `${s}uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 uVelTexel; uniform float uDt; uniform float uDissipation; uniform float uTintFade;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelTexel;
  vec4 c = texture(uSource, coord) / (1.0 + uDissipation * uDt);
  // The accent share hands its ink to the neutral share as it spreads, so fresh strokes carry colour and old wisps go grey.
  float moved = c.g * uTintFade * uDt;
  o = vec4(c.r + moved * 0.85, c.g - moved, c.b, c.a);
}`,
    divergence: `${s}uniform sampler2D uVelocity;
void main() {
  float L = texture(uVelocity, vL).x, R = texture(uVelocity, vR).x, T = texture(uVelocity, vT).y, B = texture(uVelocity, vB).y;
  vec2 C = texture(uVelocity, vUv).xy;
  if (vL.x < 0.0) L = -C.x; if (vR.x > 1.0) R = -C.x; if (vT.y > 1.0) T = -C.y; if (vB.y < 0.0) B = -C.y;
  o = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
}`,
    curl: `${s}uniform sampler2D uVelocity;
void main() { o = vec4(0.5 * (texture(uVelocity, vR).y - texture(uVelocity, vL).y - texture(uVelocity, vT).x + texture(uVelocity, vB).x), 0.0, 0.0, 1.0); }`,
    vorticity: `${s}uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float uCurlStrength; uniform float uDt;
void main() {
  float L = texture(uCurl, vL).x, R = texture(uCurl, vR).x, T = texture(uCurl, vT).x, B = texture(uCurl, vB).x, C = texture(uCurl, vUv).x;
  vec2 f = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  f /= length(f) + 0.0001; f *= uCurlStrength * C; f.y *= -1.0;
  vec2 v = texture(uVelocity, vUv).xy + f * uDt;
  o = vec4(clamp(v, -1000.0, 1000.0), 0.0, 1.0);
}`,
    pressure: `${s}uniform sampler2D uPressure; uniform sampler2D uDivergence;
void main() {
  float L = texture(uPressure, vL).x, R = texture(uPressure, vR).x, T = texture(uPressure, vT).x, B = texture(uPressure, vB).x;
  o = vec4((L + R + B + T - texture(uDivergence, vUv).x) * 0.25, 0.0, 0.0, 1.0);
}`,
    gradient: `${s}uniform sampler2D uPressure; uniform sampler2D uVelocity;
void main() {
  float L = texture(uPressure, vL).x, R = texture(uPressure, vR).x, T = texture(uPressure, vT).x, B = texture(uPressure, vB).x;
  o = vec4(texture(uVelocity, vUv).xy - vec2(R - L, T - B), 0.0, 1.0);
}`,
    scale: `${s}uniform sampler2D uTexture; uniform float uValue; void main() { o = uValue * texture(uTexture, vUv); }`,
    display: `${s}uniform sampler2D uDye; uniform vec3 uInk; uniform vec3 uAccent; uniform float uStrength; uniform float uShade; uniform vec2 uRes;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 d = texture(uDye, vUv).rgb;
  float L = dot(texture(uDye, vL).rg, vec2(1.0)), R = dot(texture(uDye, vR).rg, vec2(1.0));
  float T = dot(texture(uDye, vT).rg, vec2(1.0)), B = dot(texture(uDye, vB).rg, vec2(1.0));
  vec3 n = normalize(vec3(R - L, T - B, 0.35));
  float light = clamp(dot(n, normalize(vec3(-0.4, 0.5, 0.75))), 0.0, 1.0);
  float an = (1.0 - exp(-max(d.r, 0.0) * 1.3)) * uStrength;
  // Accent ink reads a touch stronger than neutral ink, so fresh strokes carry real colour before they settle.
  float aa = min(1.0, (1.0 - exp(-max(d.g, 0.0) * 1.3)) * uStrength * 1.8);
  float a = clamp(an + aa * (1.0 - an), 0.0, 1.0);
  vec3 col = (uInk * an + uAccent * aa) / max(an + aa, 0.0001);
  col = mix(col, col * (0.82 + 0.3 * light), uShade);
  a += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  a = clamp(a, 0.0, 1.0);
  o = vec4(col * a, a);
}`
  };
  function d(e2, t2, r2, u2, i2) {
    let a2 = e2.createTexture();
    e2.bindTexture(e2.TEXTURE_2D, a2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.texImage2D(e2.TEXTURE_2D, 0, u2, t2, r2, 0, i2, e2.HALF_FLOAT, null);
    let n2 = e2.createFramebuffer();
    return e2.bindFramebuffer(e2.FRAMEBUFFER, n2), e2.framebufferTexture2D(
      e2.FRAMEBUFFER,
      e2.COLOR_ATTACHMENT0,
      e2.TEXTURE_2D,
      a2,
      0
    ), e2.viewport(0, 0, t2, r2), e2.clearColor(0, 0, 0, 1), e2.clear(e2.COLOR_BUFFER_BIT), { tex: a2, fbo: n2, w: t2, h: r2 };
  }
  function f(e2, t2, r2, u2, i2) {
    let a2 = {
      read: d(e2, t2, r2, u2, i2),
      write: d(e2, t2, r2, u2, i2),
      w: t2,
      h: r2,
      swap: () => {
      }
    };
    return a2.swap = () => {
      let e3 = a2.read;
      a2.read = a2.write, a2.write = e3;
    }, a2;
  }
  function m(e2, ...t2) {
    for (let r2 of t2) e2.deleteTexture(r2.tex), e2.deleteFramebuffer(r2.fbo);
  }
  function x(e2, t2) {
    let r2 = document.createElement("canvas");
    r2.width = r2.height = 1;
    let u2 = r2.getContext("2d", { willReadFrequently: true });
    if (!u2 || !e2) return t2;
    u2.fillStyle = "#000", u2.fillStyle = e2, u2.fillRect(0, 0, 1, 1);
    let [i2, a2, n2] = u2.getImageData(0, 0, 1, 1).data;
    return [i2 / 255, a2 / 255, n2 / 255];
  }
  let h = { low: 96, medium: 128, high: 192 }, p = { low: 256, medium: 512, high: 768 };
  function T({
    children: e2,
    intensity: t2 = 0.5,
    tint: r2 = 0.8,
    force: i2 = 0.5,
    ambient: o2 = true,
    interactive: s2 = true,
    quality: R2 = "medium",
    className: y2,
    style: g2
  }) {
    let w2 = !!(0, n.I)(), E = (0, a.useRef)(null), _ = (0, a.useRef)(null), D = (0, a.useRef)({
      intensity: t2,
      tint: r2,
      force: i2,
      ambient: o2,
      interactive: s2
    });
    return (0, a.useEffect)(() => {
      D.current = {
        intensity: t2,
        tint: r2,
        force: i2,
        ambient: o2,
        interactive: s2
      };
    }), (0, a.useEffect)(() => {
      let e3, t3, r3, u2, i3, a2, n2 = E.current, o3 = _.current;
      if (!n2 || !o3) return;
      let l2 = o3.getContext("webgl2", {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false
      });
      if (!l2 || !l2.getExtension("EXT_color_buffer_float")) {
        n2.dataset.fallback = "";
        return;
      }
      try {
        e3 = Object.fromEntries(
          Object.entries(v).map(([e4, t4]) => [
            e4,
            (function(e5, t5) {
              let r4 = (t6, r5) => {
                let u4 = e5.createShader(t6);
                return e5.shaderSource(u4, r5), e5.compileShader(u4), u4;
              }, u3 = e5.createProgram();
              if (e5.attachShader(u3, r4(e5.VERTEX_SHADER, c)), e5.attachShader(u3, r4(e5.FRAGMENT_SHADER, t5)), e5.bindAttribLocation(u3, 0, "aPos"), e5.linkProgram(u3), !e5.getProgramParameter(u3, e5.LINK_STATUS))
                throw Error(e5.getProgramInfoLog(u3) ?? "link");
              let i4 = /* @__PURE__ */ new Map();
              return {
                p: u3,
                u: (t6) => (i4.has(t6) || i4.set(t6, e5.getUniformLocation(u3, t6)), i4.get(t6))
              };
            })(l2, t4)
          ])
        );
      } catch {
        n2.dataset.fallback = "";
        return;
      }
      let s3 = l2.createBuffer();
      l2.bindBuffer(l2.ARRAY_BUFFER, s3), l2.bufferData(
        l2.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        l2.STATIC_DRAW
      ), l2.enableVertexAttribArray(0), l2.vertexAttribPointer(0, 2, l2.FLOAT, false, 0, 0);
      let T2 = 0, y3 = 0, g3 = false, A = () => {
        let e4 = n2.getBoundingClientRect(), c2 = Math.min(window.devicePixelRatio || 1, 1.5);
        T2 = Math.max(1, Math.round(e4.width * c2)), y3 = Math.max(1, Math.round(e4.height * c2)), o3.width = T2, o3.height = y3;
        let s4 = T2 / y3, v2 = (e5) => s4 >= 1 ? [Math.round(e5 * s4), e5] : [e5, Math.round(e5 / s4)], [x2, w3] = v2(h[R2]), [E2, _2] = v2(p[R2]);
        g3 && m(l2, t3.read, t3.write, r3.read, r3.write, u2.read, u2.write, i3, a2), t3 = f(l2, x2, w3, l2.RG16F, l2.RG), r3 = f(l2, E2, _2, l2.RGBA16F, l2.RGBA), u2 = f(l2, x2, w3, l2.R16F, l2.RED), i3 = d(l2, x2, w3, l2.R16F, l2.RED), a2 = d(l2, x2, w3, l2.R16F, l2.RED), g3 = true;
      };
      A();
      let b = (e4) => {
        e4 ? (l2.viewport(0, 0, e4.w, e4.h), l2.bindFramebuffer(l2.FRAMEBUFFER, e4.fbo)) : (l2.viewport(0, 0, T2, y3), l2.bindFramebuffer(l2.FRAMEBUFFER, null)), l2.drawArrays(l2.TRIANGLES, 0, 3);
      }, F = (e4, t4) => (l2.useProgram(e4.p), l2.uniform2f(e4.u("uTexel"), t4[0], t4[1]), e4), L = (e4, t4, r4, u3) => {
        l2.activeTexture(l2.TEXTURE0 + r4), l2.bindTexture(l2.TEXTURE_2D, u3.tex), l2.uniform1i(e4.u(t4), r4);
      }, P = (u3, i4, a3, n3, o4, c2, s4) => {
        let v2 = F(e3.splat, [1 / t3.w, 1 / t3.h]);
        l2.uniform1f(v2.u("uAspect"), T2 / y3), l2.uniform2f(v2.u("uPoint"), u3, i4), l2.uniform1f(v2.u("uRadius"), s4 / 100), L(v2, "uTarget", 0, t3.read), l2.uniform3f(v2.u("uColor"), a3, n3, 0), b(t3.write), t3.swap(), L(v2, "uTarget", 0, r3.read), l2.uniform3f(v2.u("uColor"), o4, c2, 0), b(r3.write), r3.swap();
      }, U = (n3) => {
        let o4 = [1 / t3.w, 1 / t3.h], c2 = F(e3.curl, o4);
        L(c2, "uVelocity", 0, t3.read), b(a2), L(c2 = F(e3.vorticity, o4), "uVelocity", 0, t3.read), L(c2, "uCurl", 1, a2), l2.uniform1f(c2.u("uCurlStrength"), 14), l2.uniform1f(c2.u("uDt"), n3), b(t3.write), t3.swap(), L(c2 = F(e3.divergence, o4), "uVelocity", 0, t3.read), b(i3), L(c2 = F(e3.scale, o4), "uTexture", 0, u2.read), l2.uniform1f(c2.u("uValue"), 0.8), b(u2.write), u2.swap(), L(c2 = F(e3.pressure, o4), "uDivergence", 1, i3);
        for (let e4 = 0; e4 < 20; e4++)
          L(c2, "uPressure", 0, u2.read), b(u2.write), u2.swap();
        L(c2 = F(e3.gradient, o4), "uPressure", 0, u2.read), L(c2, "uVelocity", 1, t3.read), b(t3.write), t3.swap(), c2 = F(e3.advect, o4), l2.uniform2f(c2.u("uVelTexel"), o4[0], o4[1]), l2.uniform1f(c2.u("uDt"), n3), L(c2, "uVelocity", 0, t3.read), L(c2, "uSource", 1, t3.read), l2.uniform1f(c2.u("uDissipation"), 0.3), l2.uniform1f(c2.u("uTintFade"), 0), b(t3.write), t3.swap(), c2 = F(e3.advect, [1 / r3.w, 1 / r3.h]), l2.uniform2f(c2.u("uVelTexel"), o4[0], o4[1]), l2.uniform1f(c2.u("uDt"), n3), L(c2, "uVelocity", 0, t3.read), L(c2, "uSource", 1, r3.read), l2.uniform1f(c2.u("uDissipation"), 1.1), l2.uniform1f(c2.u("uTintFade"), 0.22), b(r3.write), r3.swap();
      }, B = [0, 0, 0], C = [0, 0, 0], M = false, V = () => {
        let e4 = getComputedStyle(n2);
        B = x(e4.getPropertyValue("--ink-color").trim(), [0.1, 0.1, 0.1]), C = x(
          e4.getPropertyValue("--ink-accent").trim(),
          [0.2, 0.2, 0.2]
        ), M = "1" === e4.getPropertyValue("--ink-dark").trim();
      };
      V();
      let S = () => {
        let t4 = F(e3.display, [1 / r3.w, 1 / r3.h]);
        L(t4, "uDye", 0, r3.read), l2.uniform3f(t4.u("uInk"), ...B), l2.uniform3f(t4.u("uAccent"), ...C), l2.uniform1f(
          t4.u("uStrength"),
          Math.min(1, D.current.intensity * (M ? 0.44 : 0.34))
        ), l2.uniform1f(t4.u("uShade"), 0.8), b(null);
      }, k = { x: 0, y: 0, dx: 0, dy: 0, moved: false, last: 0, has: false }, I = (e4) => {
        if (!D.current.interactive || w2) return;
        let t4 = n2.getBoundingClientRect(), r4 = (e4.clientX - t4.left) / t4.width, u3 = 1 - (e4.clientY - t4.top) / t4.height;
        k.has && (k.dx += (r4 - k.x) * (t4.width / t4.height), k.dy += u3 - k.y), k.x = r4, k.y = u3, k.has = true, k.moved = true, k.last = performance.now();
      }, N = () => {
        k.has = false;
      };
      n2.addEventListener("pointermove", I), n2.addEventListener("pointerleave", N), n2.addEventListener("pointerdown", I);
      let j = 100 * Math.random(), X = (e4, t4) => {
        let r4 = e4 / 1e3 * 0.16 + j;
        P(
          0.5 + 0.34 * Math.sin(1.3 * r4) * Math.cos(0.7 * r4),
          0.5 + 0.28 * Math.sin(0.9 * r4 + 1.7),
          60 * Math.cos(1.1 * r4) * t4 * 9,
          60 * Math.sin(1.7 * r4) * t4 * 9,
          2 * t4 * (1 - 0.85 * D.current.tint),
          2 * t4 * D.current.tint * 0.85,
          0.45
        );
      }, O = 0, G = false, $ = true, z = performance.now(), H = 0, Y = (e4) => {
        O = 0;
        let t4 = Math.min(0.033, (e4 - z) / 1e3);
        if (z = e4, k.moved) {
          let e5 = Math.hypot(k.dx, k.dy), t5 = 5200 * (0.4 + 1.2 * D.current.force), r4 = Math.min(0.32, 5 * e5);
          H = (H + 3 * e5) % 1;
          let u3 = D.current.tint;
          P(
            k.x,
            k.y,
            k.dx * t5,
            k.dy * t5,
            r4 * (1 - u3),
            r4 * u3 * (0.75 + 0.25 * Math.sin(H * Math.PI * 2)),
            0.22
          ), k.dx = k.dy = 0, k.moved = false;
        }
        D.current.ambient && e4 - k.last > 1200 && X(e4, t4), U(t4), S(), G && (O = requestAnimationFrame(Y));
      }, q = () => {
        let e4 = $ && !document.hidden && !w2;
        e4 && !G && (G = true, z = performance.now(), O = requestAnimationFrame(Y)), !e4 && G && (G = false, cancelAnimationFrame(O), O = 0);
      }, K = () => {
        j = 3.2;
        for (let e4 = 0; e4 < 140; e4++)
          X(16.7 * e4 * 2.4, 1 / 60), U(1 / 60);
        S();
      };
      w2 && K();
      let W = new IntersectionObserver((e4) => {
        $ = e4[0]?.isIntersecting ?? true, q();
      });
      W.observe(n2);
      let Q = () => q();
      document.addEventListener("visibilitychange", Q);
      let Z = 0, J = new ResizeObserver(() => {
        window.clearTimeout(Z), Z = window.setTimeout(() => {
          let e4 = n2.getBoundingClientRect(), t4 = Math.min(window.devicePixelRatio || 1, 1.5);
          (Math.max(1, Math.round(e4.width * t4)) !== T2 || Math.max(1, Math.round(e4.height * t4)) !== y3) && (A(), w2 ? K() : S());
        }, 120);
      });
      J.observe(n2);
      let ee = new MutationObserver(() => {
        V(), G || S();
      });
      return ee.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class"]
      }), q(), () => {
        G = false, cancelAnimationFrame(O), W.disconnect(), J.disconnect(), ee.disconnect(), window.clearTimeout(Z), document.removeEventListener("visibilitychange", Q), n2.removeEventListener("pointermove", I), n2.removeEventListener("pointerleave", N), n2.removeEventListener("pointerdown", I), m(l2, t3.read, t3.write, r3.read, r3.write, u2.read, u2.write, i3, a2), Object.values(e3).forEach((e4) => l2.deleteProgram(e4.p)), l2.deleteBuffer(s3);
      };
    }, [R2, w2]), (0, u.jsxs)("div", {
      ref: E,
      className: [l().root, y2].filter(Boolean).join(" "),
      style: g2,
      children: [
        (0, u.jsx)("canvas", {
          ref: _,
          className: l().canvas,
          "aria-hidden": true
        }),
        null != e2 && (0, u.jsx)("div", { className: l().content, children: e2 })
      ]
    });
  }
  var R = r(7677), y = r.n(R);
  function g() {
    return (0, u.jsx)("div", {
      className: y().demo,
      children: (0, u.jsx)(T, {
        className: y().hero,
        children: (0, u.jsxs)("div", {
          className: y().copy,
          children: [
            (0, u.jsx)("h2", {
              className: y().title,
              children: "Ship interfaces that feel alive"
            }),
            (0, u.jsx)("p", {
              className: y().lede,
              children: "Components with motion that explains every change."
            }),
            (0, u.jsxs)("div", {
              className: y().actions,
              children: [
                (0, u.jsx)(i.A, { size: "md", children: "Get started" }),
                (0, u.jsx)(i.A, {
                  size: "md",
                  variant: "ghost",
                  children: "Browse components"
                })
              ]
            })
          ]
        })
      })
    });
  }
  let w = g;
}

__m(__module,__exports,__require);
});
A.regCss(69718, ".root{--ink-color:var(--foreground);--ink-accent:var(--accent);--ink-dark:0;position:relative;isolation:isolate;overflow:hidden;touch-action:pan-y}\n:root[data-theme=dark] .root{--ink-dark:1}\n.canvas{position:absolute;inset:0;z-index:0;width:100%;height:100%;pointer-events:none}\n.content{position:relative;z-index:1}", {"root":"root","canvas":"canvas","content":"content"});
A.cssFor("ink-fluid", [7677,69718]);
A.item("ink-fluid", {entry:36198, export:"InkFluidDemo", kind:"component", tier:"pro", unresolved:[]});
})();