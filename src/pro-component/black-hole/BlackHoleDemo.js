function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { BlackHoleDemo: () => M, default: () => F });
  var i = a(95155), r = a(12115), o = a(18310), n = a(80642), l = a(25354), s = a(25879), d = a(64577), c = a(51288), u = a(7770), h = a(15672), m = a.n(h);
  let f = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), p = (e2, t2, a2) => f((e2 - t2) / (a2 - t2)), g = () => new Promise((e2) => requestAnimationFrame(e2));
  function v(e2) {
    return !!e2 && "transparent" !== e2 && !/rgba?\(.*,\s*0\)$/.test(e2) && !/\/\s*0\)$/.test(e2);
  }
  async function w(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return await Promise.all(
      [...e2.querySelectorAll("svg")].map(async (e3) => {
        let a2 = e3.getBoundingClientRect();
        if (!a2.width || !a2.height) return;
        let i2 = e3.cloneNode(true);
        i2.setAttribute("width", String(a2.width)), i2.setAttribute("height", String(a2.height)), i2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        let r2 = new XMLSerializer().serializeToString(i2).replace(/currentColor/g, getComputedStyle(e3).color), o2 = new Image();
        o2.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r2)}`;
        try {
          await o2.decode(), t2.set(e3, o2);
        } catch {
        }
      })
    ), t2;
  }
  let b = `#version 300 es
in vec2 aPos; void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`, y = `#version 300 es
precision highp float;
uniform sampler2D uTex; uniform vec2 uRes; uniform vec2 uO; uniform float uLens;
out vec4 color;
void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 d = p - uO; float r = length(d);
  vec2 q = p;
  if (uLens > 0.0) { float beta = r - uLens * uLens / max(r, 0.5); q = uO + d / max(r, 0.001) * beta; }
  vec2 uv = q / uRes;
  color = (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) ? vec4(0.0) : texture(uTex, uv);
}`, x = `#version 300 es
in vec2 aPos;
uniform vec2 uRes; uniform vec2 uO; uniform float uT; uniform float uMaxR; uniform float uSpin;
out vec2 vUv; out float vFade;
void main() {
  vec2 v = aPos - uO; float r0 = length(v); float a0 = atan(v.y, v.x);
  float dn = clamp(r0 / uMaxR, 0.0, 1.0);
  float start = 0.08 + 0.36 * dn;
  float u = clamp((uT - start) / 0.46, 0.0, 1.0);
  float f = u * u * (1.5 - 0.5 * u);
  float r = r0 * (1.0 - f);
  float a = a0 + uSpin * -log(max(1.0 - f, 0.015)) * 0.55;
  vec2 p = uO + vec2(cos(a), sin(a)) * r;
  vUv = aPos / uRes;
  vFade = 1.0 - smoothstep(0.72, 0.98, f);
  gl_Position = vec4(p.x / uRes.x * 2.0 - 1.0, 1.0 - p.y / uRes.y * 2.0, 0.0, 1.0);
}`, R = `#version 300 es
precision highp float;
uniform sampler2D uTex; in vec2 vUv; in float vFade; out vec4 color;
void main() { color = texture(uTex, vUv) * vFade; }`, _ = `#version 300 es
precision highp float;
uniform vec2 uRes; uniform vec2 uO; uniform float uCore; uniform float uWave; uniform float uWaveAlpha; uniform float uDark; uniform float uPx; uniform vec3 uAccent;
out vec4 color;
void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  float r = length(p - uO);
  float halo = uCore > 0.0 ? exp(-max(r - uCore, 0.0) / (uCore * 1.6)) * 0.22 * (1.0 - uDark * 0.4) : 0.0;
  float ring = uCore > 0.0 ? exp(-pow((r - uCore * 1.18) / (0.8 * uPx), 2.0)) * mix(0.5, 0.65, uDark) : 0.0;
  float core = uCore > 0.0 ? 1.0 - smoothstep(uCore - 1.2 * uPx, uCore + 0.4 * uPx, r) : 0.0;
  float wave = uWaveAlpha * exp(-pow((r - uWave) / (2.5 * uPx), 2.0));
  vec4 c = vec4(0.0);
  c = vec4(0.0, 0.0, 0.0, halo);
  // The photon ring and the closing shockwave wear the accent; the core and its halo stay ink.
  c = vec4(uAccent * ring, ring) + c * (1.0 - ring);
  c = vec4(uAccent * wave * 0.6, wave * 0.6) + c * (1.0 - wave * 0.6);
  c = vec4(vec3(0.0), core) + c * (1.0 - core);
  color = c;
}`;
  function A(e2, t2, a2) {
    let i2 = (t3, a3) => {
      let i3 = e2.createShader(t3);
      return e2.shaderSource(i3, a3), e2.compileShader(i3), i3;
    }, r2 = e2.createProgram();
    if (e2.attachShader(r2, i2(e2.VERTEX_SHADER, t2)), e2.attachShader(r2, i2(e2.FRAGMENT_SHADER, a2)), e2.bindAttribLocation(r2, 0, "aPos"), e2.linkProgram(r2), !e2.getProgramParameter(r2, e2.LINK_STATUS))
      throw Error(e2.getProgramInfoLog(r2) ?? "link failed");
    let o2 = /* @__PURE__ */ new Map();
    return {
      p: r2,
      u: (t3) => (o2.has(t3) || o2.set(t3, e2.getUniformLocation(r2, t3)), o2.get(t3))
    };
  }
  function k(e2, t2) {
    let a2 = e2.createTexture();
    return e2.bindTexture(e2.TEXTURE_2D, a2), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), e2.texImage2D(e2.TEXTURE_2D, 0, e2.RGBA, e2.RGBA, e2.UNSIGNED_BYTE, t2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), a2;
  }
  let T = (0, r.forwardRef)(function({ children: e2, className: t2, style: a2 }, n2) {
    let l2 = !!(0, o.I)(), s2 = (0, r.useRef)(null), d2 = (0, r.useRef)(null), c2 = (0, r.useRef)(null), h2 = (0, r.useRef)(Promise.resolve()), T2 = (0, r.useRef)(l2);
    (0, r.useEffect)(() => {
      T2.current = l2;
    });
    let E2 = (0, r.useRef)(void 0), j2 = (0, r.useCallback)(() => {
      if (void 0 !== E2.current) return E2.current;
      let e3 = c2.current;
      try {
        let t3 = e3?.getContext("webgl2", {
          premultipliedAlpha: true,
          antialias: true
        }) ?? null;
        if (!t3) return E2.current = null, null;
        let a3 = t3.createBuffer();
        t3.bindBuffer(t3.ARRAY_BUFFER, a3), t3.bufferData(
          t3.ARRAY_BUFFER,
          new Float32Array([-1, -1, 3, -1, -1, 3]),
          t3.STATIC_DRAW
        ), E2.current = {
          gl: t3,
          lens: A(t3, b, y),
          mesh: A(t3, x, R),
          core: A(t3, b, _),
          quad: a3
        };
      } catch {
        E2.current = null;
      }
      return E2.current;
    }, []);
    (0, r.useEffect)(() => {
      if (l2) return;
      let e3 = window.requestIdleCallback ?? ((e4) => window.setTimeout(e4, 200)), t3 = window.cancelIdleCallback ?? window.clearTimeout, a3 = e3(() => j2());
      return () => t3(a3);
    }, [j2, l2]);
    let C2 = (0, r.useCallback)(
      async (e3, t3, a3 = {}) => {
        let i2 = s2.current, r2 = d2.current, o2 = c2.current, n3 = e3.filter((e4) => e4.isConnected);
        if (!i2 || !r2 || !o2 || !n3.length) return;
        if (t3 < 0) {
          n3.forEach((e5) => {
            e5.style.visibility = "hidden";
          });
          let e4 = "", t4 = 0, a4 = performance.now(), r3 = a4 + 1200;
          for (; (t4 < 6 || performance.now() - a4 < 160) && performance.now() < r3; ) {
            await g();
            let a5 = [i2, ...n3].map((e5) => {
              let t5 = e5.getBoundingClientRect();
              return `${t5.left.toFixed(1)},${t5.top.toFixed(1)},${t5.width.toFixed(1)},${t5.height.toFixed(1)}`;
            }).join("|");
            t4 = a5 === e4 ? t4 + 1 : 0, e4 = a5;
          }
        }
        let l3 = (e4, t4, a4) => {
          let i3 = t4 > a4 ? u.T.ease.exit : u.T.ease.enter, r3 = T2.current ? 0 : (t4 > a4 ? u.T.duration.exit : u.T.duration.standard) * 1e3;
          return e4.animate([{ opacity: t4 }, { opacity: a4 }], {
            duration: r3,
            easing: `cubic-bezier(${i3.join(",")})`
          }).finished;
        }, h3 = T2.current ? null : j2(), m2 = h3?.gl ?? null;
        if (!m2)
          return void (t3 > 0 ? (await Promise.all(n3.map((e4) => l3(e4, 1, 0))), n3.forEach((e4) => {
            e4.style.visibility = "hidden";
          })) : (n3.forEach((e4) => {
            e4.style.visibility = "";
          }), await Promise.all(n3.map((e4) => l3(e4, 0, 1)))));
        let b2 = i2.getBoundingClientRect(), y2 = Math.min(2, window.devicePixelRatio || 1), x2 = Math.max(1, Math.round(b2.width * y2)), R2 = Math.max(1, Math.round(b2.height * y2));
        o2.width = x2, o2.height = R2;
        let _2 = new Set(n3), A2 = await w(r2), E3 = (e4, t4) => {
          let a4 = document.createElement("canvas");
          return a4.width = x2, a4.height = R2, !(function e5(t5, a5, i3, r3, o3, n4, l4, s3) {
            if (o3.skip?.has(a5)) return;
            o3.only?.has(a5) && (l4 = true, s3 = true);
            let d3 = getComputedStyle(a5);
            if ("none" === d3.display) return;
            let c3 = parseFloat(d3.opacity);
            if (!s3 && 0 === c3) return;
            let u2 = s3 || "hidden" !== d3.visibility, h4 = a5.getBoundingClientRect(), m3 = (h4.left - i3.left) * r3, f2 = (h4.top - i3.top) * r3, p2 = h4.width * r3, g2 = h4.height * r3;
            if (t5.save(), l4 && !s3 && (t5.globalAlpha *= c3), l4 && u2 && p2 > 0 && g2 > 0) {
              let e6 = [
                d3.borderTopLeftRadius,
                d3.borderTopRightRadius,
                d3.borderBottomRightRadius,
                d3.borderBottomLeftRadius
              ].map((e7) => (parseFloat(e7) || 0) * r3);
              v(d3.backgroundColor) && (t5.fillStyle = d3.backgroundColor, t5.beginPath(), t5.roundRect(m3, f2, p2, g2, e6), t5.fill());
              let i4 = [
                d3.borderTopWidth,
                d3.borderRightWidth,
                d3.borderBottomWidth,
                d3.borderLeftWidth
              ].map((e7) => (parseFloat(e7) || 0) * r3), o4 = [
                d3.borderTopColor,
                d3.borderRightColor,
                d3.borderBottomColor,
                d3.borderLeftColor
              ];
              if (i4.every((e7) => e7 > 0 && e7 === i4[0]) && o4.every((e7) => e7 === o4[0]) && v(o4[0]) ? (t5.strokeStyle = o4[0], t5.lineWidth = i4[0], t5.beginPath(), t5.roundRect(
                m3 + i4[0] / 2,
                f2 + i4[0] / 2,
                p2 - i4[0],
                g2 - i4[0],
                e6.map((e7) => Math.max(0, e7 - i4[0] / 2))
              ), t5.stroke()) : i4.forEach((e7, a6) => {
                e7 && v(o4[a6]) && (t5.fillStyle = o4[a6], 0 === a6 && t5.fillRect(m3, f2, p2, e7), 1 === a6 && t5.fillRect(m3 + p2 - e7, f2, e7, g2), 2 === a6 && t5.fillRect(m3, f2 + g2 - e7, p2, e7), 3 === a6 && t5.fillRect(m3, f2, e7, g2));
              }), a5 instanceof HTMLImageElement && a5.complete && a5.naturalWidth) {
                t5.save(), t5.beginPath(), t5.roundRect(m3, f2, p2, g2, e6), t5.clip();
                let i5 = a5.naturalWidth / a5.naturalHeight, r4 = p2 / g2, o5 = "cover" === d3.objectFit, n5 = p2, l6 = g2;
                o5 && (i5 > r4 ? n5 = g2 * i5 : l6 = p2 / i5);
                try {
                  t5.drawImage(a5, m3 + (p2 - n5) / 2, f2 + (g2 - l6) / 2, n5, l6);
                } catch {
                }
                t5.restore();
              }
              let l5 = n4.get(a5);
              l5 && t5.drawImage(l5, m3, f2, p2, g2), "visible" !== d3.overflow && "visible" !== d3.overflowX && (t5.beginPath(), t5.roundRect(m3, f2, p2, g2, e6), t5.clip());
            }
            if (a5 instanceof SVGElement || a5 instanceof HTMLImageElement || a5 instanceof HTMLCanvasElement)
              return void t5.restore();
            for (let c4 of a5.childNodes)
              if (c4.nodeType === Node.TEXT_NODE) {
                if (!l4 || !u2) continue;
                let e6 = c4.textContent ?? "";
                if (!e6.trim()) continue;
                t5.font = `${d3.fontStyle} ${d3.fontWeight} ${parseFloat(d3.fontSize) * r3}px ${d3.fontFamily}`, t5.fillStyle = d3.color, "letterSpacing" in t5 && (t5.letterSpacing = "normal" === d3.letterSpacing ? "0px" : `${parseFloat(d3.letterSpacing) * r3}px`), t5.textBaseline = "alphabetic";
                let a6 = t5.measureText("Hg"), o4 = a6.fontBoundingBoxAscent ?? parseFloat(d3.fontSize) * r3 * 0.8, n5 = a6.fontBoundingBoxDescent ?? parseFloat(d3.fontSize) * r3 * 0.2, s4 = document.createRange();
                for (let a7 of e6.matchAll(/\S+/g)) {
                  s4.setStart(c4, a7.index ?? 0), s4.setEnd(c4, (a7.index ?? 0) + a7[0].length);
                  let e7 = s4.getBoundingClientRect();
                  if (!e7.width) continue;
                  let l5 = (e7.left - i3.left) * r3, d4 = (e7.top - i3.top) * r3, u3 = e7.height * r3;
                  t5.fillText(a7[0], l5, d4 + (u3 - o4 - n5) / 2 + o4);
                }
              } else c4 instanceof Element && e5(t5, c4, i3, r3, o3, n4, l4, s3);
            t5.restore();
          })(a4.getContext("2d"), r2, b2, y2, e4, A2, t4, false), a4;
        }, C3 = E3({ skip: _2 }, true), S3 = E3({ only: _2 }, false), M2 = n3.map((e4) => e4.getBoundingClientRect()), F2 = Math.min(...M2.map((e4) => e4.left)), P = Math.max(...M2.map((e4) => e4.right)), B = Math.min(...M2.map((e4) => e4.top)), N = Math.max(...M2.map((e4) => e4.bottom)), L = ((a3.origin?.x ?? (F2 + P) / 2) - b2.left) * y2, D = ((a3.origin?.y ?? (B + N) / 2) - b2.top) * y2, U = Math.max(
          ...M2.flatMap(
            (e4) => [
              [e4.left, e4.top],
              [e4.right, e4.top],
              [e4.left, e4.bottom],
              [e4.right, e4.bottom]
            ].map(
              ([e5, t4]) => Math.hypot((e5 - b2.left) * y2 - L, (t4 - b2.top) * y2 - D)
            )
          )
        ) || 1, I = "dark" === document.documentElement.dataset.theme || !document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches, W = (function(e4, t4) {
          let a4 = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
          if (!a4 || !e4) return t4;
          a4.fillStyle = "#000", a4.fillStyle = e4, a4.fillRect(0, 0, 1, 1);
          let [i3, r3, o3] = a4.getImageData(0, 0, 1, 1).data;
          return [i3 / 255, r3 / 255, o3 / 255];
        })(
          getComputedStyle(i2).getPropertyValue("--accent").trim(),
          I ? [1, 1, 1] : [0, 0, 0]
        ), O = (function(e4, t4, a4, i3) {
          let r3 = Math.max(1, Math.ceil(t4 / i3)), o3 = Math.max(1, Math.ceil(a4 / i3)), n4 = new Float32Array(r3 * o3 * 12), l4 = 0;
          for (let e5 = 0; e5 < o3; e5++)
            for (let i4 = 0; i4 < r3; i4++) {
              let s4 = i4 * t4 / r3, d3 = (i4 + 1) * t4 / r3, c3 = e5 * a4 / o3, u2 = (e5 + 1) * a4 / o3;
              n4.set([s4, c3, d3, c3, s4, u2, d3, c3, d3, u2, s4, u2], l4), l4 += 12;
            }
          let s3 = e4.createBuffer();
          return e4.bindBuffer(e4.ARRAY_BUFFER, s3), e4.bufferData(e4.ARRAY_BUFFER, n4, e4.STATIC_DRAW), { buffer: s3, count: r3 * o3 * 6 };
        })(m2, x2, R2, 5 * y2), Y = {
          ...h3,
          grid: O.buffer,
          gridCount: O.count,
          rest: k(m2, C3),
          sel: k(m2, S3)
        }, z = (e4) => {
          var t4;
          let a4, i3 = Y.gl;
          i3.viewport(0, 0, x2, R2), i3.clearColor(0, 0, 0, 0), i3.clear(i3.COLOR_BUFFER_BIT), i3.enable(i3.BLEND), i3.blendFunc(i3.ONE, i3.ONE_MINUS_SRC_ALPHA);
          let r3 = 1 + 2.6 * Math.pow((t4 = p(e4, 0, 0.16)) - 1, 3) + 1.6 * Math.pow(t4 - 1, 2), o3 = (a4 = p(e4, 0.84, 0.92)) * a4 * a4, n4 = 6.5 * y2 * (r3 + 0.35 * p(e4, 0.2, 0.8)) * (1 - o3), l4 = p(e4, 0.88, 1);
          i3.useProgram(Y.lens.p), i3.bindBuffer(i3.ARRAY_BUFFER, Y.quad), i3.enableVertexAttribArray(0), i3.vertexAttribPointer(0, 2, i3.FLOAT, false, 0, 0), i3.activeTexture(i3.TEXTURE0), i3.bindTexture(i3.TEXTURE_2D, Y.rest), i3.uniform1i(Y.lens.u("uTex"), 0), i3.uniform2f(Y.lens.u("uRes"), x2, R2), i3.uniform2f(Y.lens.u("uO"), L, D), i3.uniform1f(Y.lens.u("uLens"), 3.4 * n4), i3.drawArrays(i3.TRIANGLES, 0, 3), i3.useProgram(Y.mesh.p), i3.bindBuffer(i3.ARRAY_BUFFER, Y.grid), i3.vertexAttribPointer(0, 2, i3.FLOAT, false, 0, 0), i3.bindTexture(i3.TEXTURE_2D, Y.sel), i3.uniform1i(Y.mesh.u("uTex"), 0), i3.uniform2f(Y.mesh.u("uRes"), x2, R2), i3.uniform2f(Y.mesh.u("uO"), L, D), i3.uniform1f(Y.mesh.u("uT"), e4), i3.uniform1f(Y.mesh.u("uMaxR"), U), i3.uniform1f(Y.mesh.u("uSpin"), 1.6), i3.drawArrays(i3.TRIANGLES, 0, Y.gridCount), i3.useProgram(Y.core.p), i3.bindBuffer(i3.ARRAY_BUFFER, Y.quad), i3.vertexAttribPointer(0, 2, i3.FLOAT, false, 0, 0), i3.uniform2f(Y.core.u("uRes"), x2, R2), i3.uniform2f(Y.core.u("uO"), L, D), i3.uniform1f(Y.core.u("uCore"), n4), i3.uniform1f(
            Y.core.u("uWave"),
            90 * (1 - Math.pow(1 - l4, 3)) * y2
          ), i3.uniform1f(
            Y.core.u("uWaveAlpha"),
            l4 > 0 ? (1 - l4) * (1 - l4) : 0
          ), i3.uniform1f(Y.core.u("uDark"), +!!I), i3.uniform1f(Y.core.u("uPx"), y2), i3.uniform3f(Y.core.u("uAccent"), ...W), i3.drawArrays(i3.TRIANGLES, 0, 3);
        }, X = (a3.duration ?? 1.3) * (t3 < 0 ? 0.92 : 1) * 1e3, H = t3 > 0 ? 0 : 1;
        z(H), o2.style.visibility = "visible", r2.style.visibility = "hidden";
        let $ = await g();
        for (; t3 > 0 ? H < 1 : H > 0; ) {
          let e4 = f((await g() - $) / X);
          z(H = t3 > 0 ? e4 : 1 - e4);
        }
        n3.forEach((e4) => {
          e4.style.visibility = t3 > 0 ? "hidden" : "";
        }), r2.style.visibility = "", o2.style.visibility = "hidden";
        let G = Y.gl;
        G.deleteTexture(Y.rest), G.deleteTexture(Y.sel), G.deleteBuffer(Y.grid), G.clearColor(0, 0, 0, 0), G.clear(G.COLOR_BUFFER_BIT);
      },
      [j2]
    ), S2 = (0, r.useCallback)(
      (e3, t3, a3) => {
        t3 < 0 && e3.forEach((e4) => {
          e4.style.visibility = "hidden";
        });
        let i2 = h2.current.then(() => C2(e3, t3, a3)).catch(() => {
          e3.forEach((e4) => {
            e4.style.visibility = t3 > 0 ? "hidden" : "";
          }), d2.current && (d2.current.style.visibility = "");
        });
        return h2.current = i2, i2;
      },
      [C2]
    );
    return (0, r.useImperativeHandle)(
      n2,
      () => ({
        swallow: (e3, t3) => S2(e3, 1, t3),
        release: (e3, t3) => S2(e3, -1, t3)
      }),
      [S2]
    ), (0, i.jsxs)("div", {
      ref: s2,
      className: [m().root, t2].filter(Boolean).join(" "),
      style: a2,
      children: [
        (0, i.jsx)("div", { ref: d2, className: m().content, children: e2 }),
        (0, i.jsx)("canvas", {
          ref: c2,
          className: m().canvas,
          "aria-hidden": true
        })
      ]
    });
  });
  var E = a(67752), j = a(4596), C = a.n(j);
  let S = [
    {
      id: "a",
      from: E.c0[0],
      subject: "Onboarding copy, second pass",
      time: "9:41"
    },
    {
      id: "b",
      from: E.c0[1],
      subject: "Your weekly usage report",
      time: "9:12"
    },
    {
      id: "c",
      from: E.c0[2],
      subject: "Design review moved to Thursday",
      time: "8:30"
    },
    {
      id: "d",
      from: E.c0[3],
      subject: "Invoice 2381 is ready",
      time: "Yesterday"
    },
    {
      id: "e",
      from: E.c0[4],
      subject: "Quarterly planning notes",
      time: "Yesterday"
    }
  ];
  function M() {
    let e2 = !!(0, o.I)(), t2 = (0, r.useRef)(null), a2 = (0, r.useRef)(/* @__PURE__ */ new Map()), [h2, m2] = (0, r.useState)(S), [f2, p2] = (0, r.useState)(["b", "d"]), [g2, v2] = (0, r.useState)([]), [w2, b2] = (0, r.useState)([]), [y2, x2] = (0, r.useState)(false), R2 = async () => {
      !f2.length || y2 || (x2(true), await t2.current?.swallow(
        f2.map((e3) => a2.current.get(e3)).filter(Boolean)
      ), v2(S.filter((e3) => f2.includes(e3.id))), m2((e3) => e3.filter((e4) => !f2.includes(e4.id))), p2([]), x2(false));
    };
    (0, r.useLayoutEffect)(() => {
      if (!w2.length) return;
      let e3 = w2.map((e4) => a2.current.get(e4)).filter(Boolean);
      t2.current?.release(e3).then(() => {
        b2([]), x2(false);
      });
    }, [w2]), (0, r.useEffect)(() => {
      let e3 = (e4) => {
        ("Backspace" === e4.key || "Delete" === e4.key) && f2.length && e4.target?.closest?.("[data-inbox]") && (e4.preventDefault(), R2());
      };
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    });
    let _2 = e2 ? { duration: 0 } : u.T.spring.smooth;
    return (0, i.jsxs)("div", {
      className: C().demo,
      "data-inbox": true,
      children: [
        (0, i.jsxs)("div", {
          className: C().panel,
          children: [
            (0, i.jsxs)("div", {
              className: C().head,
              children: [
                (0, i.jsx)("span", { className: C().title, children: "Inbox" }),
                (0, i.jsx)(n.N, {
                  initial: false,
                  mode: "popLayout",
                  children: f2.length > 0 && (0, i.jsx)(
                    l.PY1.div,
                    {
                      initial: {
                        opacity: 0,
                        scale: 0.96,
                        filter: "blur(4px)"
                      },
                      animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                      exit: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
                      transition: { duration: u.T.duration.fast },
                      children: (0, i.jsxs)(c.A, {
                        variant: "secondary",
                        size: "sm",
                        onClick: R2,
                        disabled: y2,
                        children: [
                          (0, i.jsx)(s.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": true
                          }),
                          "Delete ",
                          f2.length
                        ]
                      })
                    },
                    "delete"
                  )
                })
              ]
            }),
            (0, i.jsx)(T, {
              ref: t2,
              children: (0, i.jsx)("ul", {
                className: C().list,
                children: (0, i.jsx)(n.N, {
                  initial: false,
                  children: h2.map((e3) => {
                    let t3 = f2.includes(e3.id);
                    return (0, i.jsx)(
                      l.PY1.li,
                      {
                        ref: (t4) => {
                          t4 ? a2.current.set(e3.id, t4) : a2.current.delete(e3.id);
                        },
                        className: C().item,
                        layout: "position",
                        initial: { height: 0 },
                        animate: { height: "auto" },
                        exit: { height: 0 },
                        transition: { height: _2, layout: _2 },
                        children: (0, i.jsxs)("button", {
                          type: "button",
                          role: "checkbox",
                          "aria-checked": t3,
                          className: C().row,
                          "data-on": t3 || void 0,
                          onClick: () => {
                            let t4;
                            return t4 = e3.id, p2(
                              (e4) => e4.includes(t4) ? e4.filter((e5) => e5 !== t4) : [...e4, t4]
                            );
                          },
                          disabled: y2,
                          children: [
                            (0, i.jsx)("span", {
                              className: C().check,
                              "aria-hidden": true,
                              children: t3 && (0, i.jsx)(d.A, { size: 12, strokeWidth: 2.5 })
                            }),
                            (0, i.jsx)("img", {
                              className: C().avatar,
                              src: e3.from.src,
                              alt: "",
                              width: 32,
                              height: 32,
                              draggable: false
                            }),
                            (0, i.jsxs)("span", {
                              className: C().text,
                              children: [
                                (0, i.jsx)("span", {
                                  className: C().name,
                                  children: e3.from.name
                                }),
                                (0, i.jsx)("span", {
                                  className: C().subject,
                                  children: e3.subject
                                })
                              ]
                            }),
                            (0, i.jsx)("span", {
                              className: C().time,
                              children: e3.time
                            })
                          ]
                        })
                      },
                      e3.id
                    );
                  })
                })
              })
            })
          ]
        }),
        (0, i.jsx)("div", {
          className: C().status,
          children: (0, i.jsx)(n.N, {
            initial: false,
            children: g2.length > 0 && (0, i.jsxs)(
              l.PY1.div,
              {
                className: C().toast,
                initial: { opacity: 0, y: 6, filter: "blur(4px)" },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: { opacity: 0, y: 4, filter: "blur(4px)" },
                transition: u.T.spring.smooth,
                children: [
                  (0, i.jsx)("span", {
                    role: "status",
                    children: 1 === g2.length ? "1 conversation deleted" : `${g2.length} conversations deleted`
                  }),
                  (0, i.jsx)(c.A, {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => {
                      if (!g2.length || y2) return;
                      let e3 = g2.map((e4) => e4.id);
                      x2(true), m2(
                        (t3) => S.filter(
                          (a3) => e3.includes(a3.id) || t3.some((e4) => e4.id === a3.id)
                        )
                      ), b2(e3), v2([]);
                    },
                    children: "Undo"
                  })
                ]
              },
              "toast"
            )
          })
        })
      ]
    });
  }
  let F = M;
}

__m(__module,__exports,__require);
}