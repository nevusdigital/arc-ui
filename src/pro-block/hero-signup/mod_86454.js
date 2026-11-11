function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { o: () => H });
  var r = a(95155), n = a(12115), i = a(25354), s = a(64324), o = a(25879), l = a(73246), d = a(2125), c = a(64577), u = a(9005), h = a(99314), f = a(50825), m = a(51288), p = a(94274), g = a(50680), x = a(7770), v = a(39726), b = a.n(v), y = a(55665);
  let w = [
    { name: "Vermillion", color: "#ff5f3a" },
    { name: "Apricot", color: "#ffb259" },
    { name: "Butter", color: "#ffe7a3" },
    { name: "Rose", color: "#f59ac0" },
    { name: "Lilac", color: "#a98bff" },
    { name: "Iris", color: "#5b6cff" },
    { name: "Lagoon", color: "#3fb6c8" },
    { name: "Ink", color: "#1b2150" },
    { name: "Cream", color: "#f8efe4" }
  ], _ = [
    { color: "#1b2150", x: 0.1, y: 0.92, spread: 0.78 },
    { color: "#5b6cff", x: 0.86, y: 0.16, spread: 0.72 },
    { color: "#ff5f3a", x: 0.2, y: 0.2, spread: 0.62 },
    { color: "#ffb259", x: 0.6, y: 0.64, spread: 0.5 },
    { color: "#f59ac0", x: 0.94, y: 0.9, spread: 0.46 }
  ], k = [0, 0.2, 0.4, 0.6, 0.8, 1], $ = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), j = (e2) => `${+(100 * e2).toFixed(1)}%`;
  function M(e2) {
    let t2 = e2.trim().toLowerCase();
    return /^#[0-9a-f]{3}$/.test(t2) ? `#${t2[1]}${t2[1]}${t2[2]}${t2[2]}${t2[3]}${t2[3]}` : /^#[0-9a-f]{6}([0-9a-f]{2})?$/.test(t2) ? t2.slice(0, 7) : "#888888";
  }
  function A(e2) {
    let t2 = M(e2);
    return [
      parseInt(t2.slice(1, 3), 16) / 255,
      parseInt(t2.slice(3, 5), 16) / 255,
      parseInt(t2.slice(5, 7), 16) / 255
    ];
  }
  function N(e2) {
    let t2 = (function(e3) {
      let t3 = 2166136261;
      for (let a2 = 0; a2 < e3.length; a2++)
        t3 ^= e3.charCodeAt(a2), t3 = Math.imul(t3, 16777619);
      return t3 >>> 0;
    })(e2);
    return {
      ph1: t2 % 628 / 100,
      ph2: (t2 >>> 10) % 628 / 100,
      k1: 1 + (t2 >>> 20) % 2,
      k2: 1 + (t2 >>> 22) % 2
    };
  }
  function R(e2, t2) {
    let a2 = 2 * Math.PI * t2 / 20;
    return {
      dx: 0.075 * Math.sin(a2 * e2.k1 + e2.ph1),
      dy: 0.075 * Math.cos(a2 * e2.k2 + e2.ph2),
      s: 1 + 0.08 * Math.sin(a2 + 0.7 * e2.ph1)
    };
  }
  function S(e2, t2) {
    let a2 = M(e2);
    return t2.find((e3) => M(e3.color) === a2)?.name ?? a2.toUpperCase();
  }
  function C(e2, t2, a2, r2) {
    let n2 = k.map((t3) => {
      let a3;
      return `${a3 = 1 - t3 * t3 * (3 - 2 * t3), `${M(e2)}${Math.round(255 * $(a3, 0, 1)).toString(16).padStart(2, "0")}`} ${Math.round(100 * t3)}%`;
    }).join(", ");
    return `radial-gradient(ellipse ${r2} ${r2} at ${t2} ${a2}, ${n2})`;
  }
  function F(e2) {
    let t2 = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(#g)' opacity='${+(0.8 * e2).toFixed(2)}'/></svg>`;
    return `url("data:image/svg+xml,${t2.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/#/g, "%23")}")`;
  }
  function B(e2, t2, a2) {
    let r2 = [...t2].reverse().map((e3) => C(e3.color, j(e3.x), j(e3.y), j(e3.r))), n2 = a2 > 5e-3 ? [F(a2), ...r2] : r2;
    return {
      backgroundColor: M(e2),
      backgroundImage: n2.join(", "),
      backgroundBlendMode: a2 > 5e-3 ? ["overlay", ...r2.map(() => "normal")].join(", ") : void 0
    };
  }
  let E = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform vec3 uBase;
uniform vec4 uP[12];
uniform vec3 uC[12];
uniform int uN;
uniform float uGrain;
uniform float uScale;
float hash(vec2 p) { vec3 q = fract(vec3(p.xyx) * .1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
void main() {
  vec2 uv = vec2(gl_FragCoord.x / uRes.x, 1.0 - gl_FragCoord.y / uRes.y);
  vec3 col = uBase;
  for (int i = 0; i < 12; i++) {
    if (i >= uN) break;
    vec4 p = uP[i];
    float d = length((uv - p.xy) / max(p.z, 1e-4));
    col = mix(col, uC[i], 1.0 - smoothstep(0.0, 1.0, d));
  }
  vec2 g = floor(gl_FragCoord.xy / uScale);
  float n = hash(g) + hash(g + 19.19) - 1.0;
  float lum = dot(col, vec3(.2126, .7152, .0722));
  col += n * (uGrain * .1 * (.55 + .9 * lum * (1.0 - lum) * 2.0) + .6 / 255.0);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
  function P(e2, t2, a2, r2, n2, i2, s2) {
    let { gl: o2, u: l2 } = e2, d2 = Math.min(12, n2.length);
    e2.p.fill(0), e2.c.fill(0);
    for (let t3 = 0; t3 < d2; t3++) {
      let a3 = n2[t3];
      e2.p[4 * t3] = a3.x, e2.p[4 * t3 + 1] = a3.y, e2.p[4 * t3 + 2] = a3.r, e2.c[3 * t3] = a3.col[0], e2.c[3 * t3 + 1] = a3.col[1], e2.c[3 * t3 + 2] = a3.col[2];
    }
    o2.viewport(0, 0, t2, a2), o2.uniform2f(l2.uRes, t2, a2), o2.uniform3f(l2.uBase, r2[0], r2[1], r2[2]), o2.uniform4fv(l2.uP, e2.p), o2.uniform3fv(l2.uC, e2.c), o2.uniform1i(l2.uN, d2), o2.uniform1f(l2.uGrain, i2), o2.uniform1f(l2.uScale, Math.max(1, s2)), o2.drawArrays(o2.TRIANGLES, 0, 3);
  }
  function I(e2, t2, a2, r2, n2) {
    let i2 = Math.max(1, Math.ceil(240 * n2)), s2 = n2 / i2;
    for (let n3 = 0; n3 < i2; n3++)
      t2 += (r2 * r2 * (a2 - e2) - 2 * r2 * t2) * s2, e2 += t2 * s2;
    return 1e-4 > Math.abs(a2 - e2) && 1e-3 > Math.abs(t2) ? [a2, 0] : [e2, t2];
  }
  function L(e2, t2, a2) {
    let r2 = false;
    for (let n2 = 0; n2 < 3; n2++) {
      let i2 = t2[n2] - e2[n2];
      1e-3 > Math.abs(i2) ? e2[n2] = t2[n2] : (e2[n2] += i2 * a2, r2 = true);
    }
    return r2;
  }
  let T = /* @__PURE__ */ new WeakMap();
  function D(e2, t2, a2, r2 = false) {
    if (!e2) return;
    let n2 = T.get(e2);
    n2 || (n2 = {}, T.set(e2, n2)), n2[t2] !== a2 && (n2[t2] = a2, r2 ? e2.setAttribute(t2, a2) : e2.style.setProperty(t2, a2));
  }
  function z(e2, t2) {
    let a2 = R(t2, e2.t), r2 = e2.drift * t2.w;
    return {
      x: t2.x + a2.dx * r2,
      y: t2.y + a2.dy * r2,
      r: t2.r * (1 + (a2.s - 1) * r2)
    };
  }
  function W(e2) {
    let t2 = e2.pts.map((t3) => ({ ...z(e2, t3), col: t3.col }));
    if (e2.gl && e2.canvas && e2.canvas.width > 0)
      P(e2.gl, e2.canvas.width, e2.canvas.height, e2.base, t2, e2.grain, e2.dpr);
    else if (e2.fallback) {
      let a2 = (e3) => `#${e3.map(
        (e4) => Math.round(255 * e4).toString(16).padStart(2, "0")
      ).join("")}`, r2 = B(
        a2(e2.base),
        t2.map((e3) => ({ color: a2(e3.col), x: e3.x, y: e3.y, r: e3.r })),
        e2.grain
      );
      D(e2.fallback, "background-color", String(r2.backgroundColor)), D(e2.fallback, "background-image", String(r2.backgroundImage)), D(
        e2.fallback,
        "background-blend-mode",
        r2.backgroundBlendMode ?? "normal"
      );
    }
    t2.forEach((t3, a2) => {
      let r2, n2, i2, s2, o2 = e2.pts[a2];
      e2.W > 0 && D(
        e2.handles.get(o2.id),
        "transform",
        (r2 = t3.x, n2 = t3.y, i2 = e2.W, s2 = e2.H, `translate3d(${$(r2 * i2, 14, Math.max(14, i2 - 14)).toFixed(2)}px, ${$(n2 * s2, 14, Math.max(14, s2 - 14)).toFixed(2)}px, 0)`)
      ), o2.id === e2.selected && e2.ellipse && (D(e2.ellipse, "cx", (100 * t3.x).toFixed(3), true), D(e2.ellipse, "cy", (100 * t3.y).toFixed(3), true), D(e2.ellipse, "rx", (50 * t3.r).toFixed(3), true), D(e2.ellipse, "ry", (50 * t3.r).toFixed(3), true));
    });
  }
  function O(e2) {
    return e2.map((e3, t2) => {
      let a2 = $(e3.x, 0, 1), r2 = $(e3.y, 0, 1);
      return {
        id: e3.id ?? `p${t2}`,
        color: M(e3.color),
        x: a2,
        y: r2,
        spread: $(e3.spread ?? 0.55, 0.15, 1.2),
        home: [a2, r2]
      };
    });
  }
  function q(e2, t2, a2) {
    let r2 = (t3) => (t3 + e2 / 30) % 12, n2 = t2 * Math.min(a2, 1 - a2), i2 = (e3) => a2 - n2 * Math.max(-1, Math.min(r2(e3) - 3, 9 - r2(e3), 1));
    return `#${[i2(0), i2(8), i2(4)].map(
      (e3) => Math.round(255 * $(e3, 0, 1)).toString(16).padStart(2, "0")
    ).join("")}`;
  }
  let U = "(prefers-reduced-motion: reduce)", G = (e2) => {
    let t2 = window.matchMedia(U);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function H({
    points: e2 = _,
    base: t2 = "#f8efe4",
    palette: a2 = w,
    grain: v2 = 0.3,
    animate: k2 = true,
    speed: T2 = 1,
    paused: D2 = false,
    maxPoints: K = 8,
    accent: X,
    hint: Y = "Drag a point to move it. Double click to add one.",
    label: V = "Gradient mesh",
    onChange: Z,
    onExport: J,
    mode: Q = "editor",
    className: ee,
    style: et
  }) {
    let ea = "background" === Q, er = (0, n.useId)(), en = (0, n.useSyncExternalStore)(
      G,
      () => window.matchMedia(U).matches,
      () => false
    ), ei = $(Math.round(K), 2, 8), [es, eo] = (0, n.useState)(() => O(e2).slice(0, ei)), [el, ed] = (0, n.useState)(() => M(t2)), [ec, eu] = (0, n.useState)(() => $(v2, 0, 1)), [eh, ef] = (0, n.useState)(k2), [em, ep] = (0, n.useState)(() => es[2]?.id ?? es[0]?.id ?? "base"), [eg, ex] = (0, n.useState)(""), [ev, eb] = (0, n.useState)("idle"), [ey, ew] = (0, n.useState)("idle"), [e_, ek] = (0, n.useState)(false), [e$, ej] = (0, n.useState)(false), eM = (0, n.useMemo)(() => O(e2).slice(0, ei), [e2, ei]), eA = ea ? eM : es, eN = ea ? M(t2) : el, eR = ea ? $(v2, 0, 1) : ec, eS = ea ? k2 : eh, [eC] = (0, n.useState)(
      () => B(
        el,
        es.map((e3) => ({ color: e3.color, x: e3.x, y: e3.y, r: e3.spread })),
        ec
      )
    ), eF = (0, n.useRef)(null), eB = (0, n.useCallback)(
      () => eF.current ?? (eF.current = {
        pts: [],
        base: [1, 1, 1],
        tbase: [1, 1, 1],
        grain: 0,
        tgrain: 0,
        t: 0,
        drift: 0,
        vdrift: 0,
        driftOn: false,
        paused: false,
        speed: 1,
        reduced: false,
        visible: true,
        running: false,
        frame: 0,
        last: 0,
        drag: null,
        selected: "base",
        W: 0,
        H: 0,
        dpr: 1,
        gl: null,
        canvas: null,
        fallback: null,
        handles: /* @__PURE__ */ new Map(),
        ellipse: null
      }),
      []
    ), eE = (0, n.useRef)(null), eP = (0, n.useRef)(null), eI = (0, n.useRef)(0), eL = (0, n.useRef)(null), eT = (0, n.useRef)(0), eD = (0, n.useRef)([]), ez = (0, n.useRef)(false), eW = (0, n.useRef)(Z);
    (0, n.useEffect)(() => {
      eW.current = Z;
    });
    let eO = (0, n.useCallback)(() => {
      let e3 = eB();
      if (e3.running || !e3.visible) return;
      e3.running = true, e3.last = performance.now();
      let t3 = (a3) => {
        let r2 = Math.min(0.05, Math.max(0, (a3 - e3.last) / 1e3));
        e3.last = a3;
        let n2 = (function(e4, t4) {
          let a4 = false, r3 = e4.driftOn && !e4.reduced ? 1 : 0;
          e4.reduced ? (e4.drift = r3, e4.vdrift = 0) : [e4.drift, e4.vdrift] = I(e4.drift, e4.vdrift, r3, 3.2, t4), e4.drift !== r3 && (a4 = true), !(e4.drift > 1e-4) || e4.paused || e4.reduced || (e4.t = (e4.t + t4 * e4.speed) % 20);
          let n3 = e4.reduced ? 1 : 1 - Math.exp(-(11 * t4));
          for (let r4 of e4.pts) {
            if (e4.reduced)
              r4.x = r4.ax, r4.y = r4.ay, r4.r = r4.ar, r4.w = +!r4.removing, r4.vx = r4.vy = r4.vr = r4.vw = 0;
            else {
              let n4 = e4.drag?.id === r4.id ? 38 : 17;
              [r4.x, r4.vx] = I(r4.x, r4.vx, r4.ax, n4, t4), [r4.y, r4.vy] = I(r4.y, r4.vy, r4.ay, n4, t4), [r4.r, r4.vr] = I(r4.r, r4.vr, r4.ar, 13, t4);
              let i4 = +(e4.drag?.id !== r4.id);
              e4.drag?.id !== r4.id && ([r4.w, r4.vw] = I(r4.w, r4.vw, i4, 3.2, t4)), (r4.x !== r4.ax || r4.y !== r4.ay || r4.r !== r4.ar || r4.w !== i4) && (a4 = true);
            }
            L(r4.col, r4.tcol, n3) && (a4 = true);
          }
          e4.pts = e4.pts.filter((e6) => !(e6.removing && e6.r < 4e-3)), L(e4.base, e4.tbase, n3) && (a4 = true);
          let i3 = e4.tgrain - e4.grain;
          return 1e-3 > Math.abs(i3) ? e4.grain = e4.tgrain : (e4.grain += i3 * n3, a4 = true), a4;
        })(e3, r2);
        W(e3);
        let i2 = e3.drift > 1e-3 && !e3.paused && !e3.reduced && e3.speed > 0;
        e3.visible && (n2 || i2 || e3.drag) ? e3.frame = requestAnimationFrame(t3) : e3.running = false;
      };
      e3.frame = requestAnimationFrame(t3);
    }, [eB]);
    (0, n.useLayoutEffect)(() => {
      let e3 = eB(), t3 = !ez.current, a3 = new Set(eA.map((e4) => e4.id));
      for (let t4 of e3.pts) a3.has(t4.id) || (t4.removing = true, t4.ar = 0);
      for (let a4 of eA) {
        let r2 = e3.pts.find((e4) => e4.id === a4.id);
        if (!r2) {
          e3.pts.push(
            (function(e4, t4) {
              let a5 = A(e4.color);
              return {
                id: e4.id,
                ax: e4.x,
                ay: e4.y,
                ar: e4.spread,
                x: e4.x,
                y: e4.y,
                vx: 0,
                vy: 0,
                r: t4 ? 0 : e4.spread,
                vr: 0,
                w: +!t4,
                vw: 0,
                col: [...a5],
                tcol: a5,
                removing: false,
                ...N(e4.id)
              };
            })(a4, !t3)
          );
          continue;
        }
        e3.drag?.id !== a4.id && (r2.ax = a4.x, r2.ay = a4.y), r2.ar = a4.spread, r2.tcol = A(a4.color), r2.removing = false;
      }
      eO();
    }, [eA, eB, eO]), (0, n.useLayoutEffect)(() => {
      let e3 = eB();
      e3.tbase = A(eN), ez.current || (e3.base = [...e3.tbase]), eO();
    }, [eN, eB, eO]), (0, n.useLayoutEffect)(() => {
      let e3 = eB();
      e3.tgrain = eR, ez.current || (e3.grain = eR), eO();
    }, [eR, eB, eO]), (0, n.useLayoutEffect)(() => {
      let e3 = eB();
      e3.driftOn = eS, e3.paused = D2, e3.speed = Math.max(0, T2), e3.reduced = en, eO();
    }, [eS, D2, T2, en, eB, eO]), (0, n.useLayoutEffect)(() => {
      let e3 = eB();
      e3.selected = em, eO(), eL.current && (e3.handles.get(eL.current)?.focus(), eL.current = null);
    }, [em, eB, eO]), (0, n.useEffect)(() => {
      ez.current = true;
    }, []);
    let eq = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      if (!eq.current) {
        eq.current = true;
        return;
      }
      eW.current?.({
        base: el,
        grain: ec,
        animate: eh,
        points: es.map((e3) => ({
          id: e3.id,
          name: S(e3.color, a2),
          color: e3.color,
          x: e3.x,
          y: e3.y,
          spread: e3.spread
        }))
      });
    }, [es, el, ec, eh, a2]), (0, n.useEffect)(() => {
      let e3 = eB(), t3 = eE.current, a3 = eP.current;
      if (!t3 || !e3.canvas) return;
      let r2 = e3.canvas;
      e3.gl = (function(e4) {
        let t4 = e4.getContext("webgl", {
          alpha: false,
          antialias: false,
          depth: false,
          stencil: false,
          premultipliedAlpha: false,
          preserveDrawingBuffer: false,
          powerPreference: "low-power"
        });
        if (!t4) return null;
        let a4 = (e6, a5) => {
          let r4 = t4.createShader(e6);
          return r4 ? (t4.shaderSource(r4, a5), t4.compileShader(r4), t4.getShaderParameter(r4, t4.COMPILE_STATUS) ? r4 : null) : null;
        }, r3 = a4(
          t4.VERTEX_SHADER,
          "attribute vec2 a; void main() { gl_Position = vec4(a, 0.0, 1.0); }"
        ), n3 = a4(t4.FRAGMENT_SHADER, E), i3 = t4.createProgram();
        if (!r3 || !n3 || !i3 || (t4.attachShader(i3, r3), t4.attachShader(i3, n3), t4.linkProgram(i3), !t4.getProgramParameter(i3, t4.LINK_STATUS)))
          return null;
        t4.useProgram(i3);
        let s3 = t4.createBuffer();
        t4.bindBuffer(t4.ARRAY_BUFFER, s3), t4.bufferData(
          t4.ARRAY_BUFFER,
          new Float32Array([-1, -1, 3, -1, -1, 3]),
          t4.STATIC_DRAW
        );
        let o3 = t4.getAttribLocation(i3, "a");
        t4.enableVertexAttribArray(o3), t4.vertexAttribPointer(o3, 2, t4.FLOAT, false, 0, 0);
        let l3 = {};
        for (let e6 of ["uRes", "uBase", "uP", "uC", "uN", "uGrain", "uScale"])
          l3[e6] = t4.getUniformLocation(i3, e6);
        return {
          gl: t4,
          prog: i3,
          u: l3,
          p: new Float32Array(48),
          c: new Float32Array(36)
        };
      })(r2), e3.gl || queueMicrotask(() => ek(true));
      let n2 = (t4) => {
        t4.preventDefault(), e3.gl = null, ek(true);
      };
      r2.addEventListener("webglcontextlost", n2);
      let i2 = new ResizeObserver((t4) => {
        let a4 = t4[0].contentRect;
        e3.W = a4.width, e3.H = a4.height, e3.dpr = Math.min(2, window.devicePixelRatio || 1), r2.width = Math.max(1, Math.round(a4.width * e3.dpr)), r2.height = Math.max(1, Math.round(a4.height * e3.dpr)), W(e3), eO();
      });
      i2.observe(t3);
      let s2 = true, o2 = () => {
        let t4 = s2 && "visible" === document.visibilityState;
        t4 !== e3.visible && (e3.visible = t4, t4 ? eO() : (cancelAnimationFrame(e3.frame), e3.running = false));
      }, l2 = new IntersectionObserver(([e4]) => {
        s2 = e4.isIntersecting, o2();
      });
      l2.observe(t3), document.addEventListener("visibilitychange", o2);
      let d2 = (t4) => {
        let a4 = t4.target.closest("[data-point]"), r3 = a4?.dataset.point, n3 = r3 ? e3.pts.find((e4) => e4.id === r3) : void 0;
        r3 && n3 && (t4.preventDefault(), n3.ar = $(n3.ar * Math.exp(-(15e-4 * t4.deltaY)), 0.15, 1.2), eO(), window.clearTimeout(eT.current), eT.current = window.setTimeout(() => {
          eo(
            (e4) => e4.map(
              (e6) => e6.id === r3 ? { ...e6, spread: +n3.ar.toFixed(3) } : e6
            )
          ), ex(`Size ${Math.round(100 * n3.ar)}%`);
        }, 220));
      };
      a3?.addEventListener("wheel", d2, { passive: false });
      let c2 = eD.current;
      return () => {
        r2.removeEventListener("webglcontextlost", n2), a3?.removeEventListener("wheel", d2), i2.disconnect(), l2.disconnect(), document.removeEventListener("visibilitychange", o2), cancelAnimationFrame(e3.frame), e3.running = false, window.clearTimeout(eT.current), c2.forEach((e4) => window.clearTimeout(e4));
      };
    }, [eB, eO]);
    let eU = (e3) => {
      let t3 = es.findIndex((t4) => t4.id === e3);
      return t3 < 0 ? "Base" : `Point ${t3 + 1}, ${S(es[t3].color, a2)}`;
    }, eG = (e3) => {
      if (es.length >= ei) return void ex(`Up to ${ei} points`);
      let [t3, r2] = e3 ?? (function(e4) {
        let t4 = [0.5, 0.5], a3 = -1;
        for (let r3 = 0; r3 <= 10; r3++)
          for (let n3 = 0; n3 <= 10; n3++) {
            let i3 = 0.1 + 0.08 * r3, s3 = 0.12 + 0.058 * n3, o2 = e4.reduce(
              (e6, t5) => Math.min(e6, Math.hypot((t5.x - i3) * 1.6, t5.y - s3)),
              1 / 0
            );
            o2 > a3 && (a3 = o2, t4 = [i3, s3]);
          }
        return t4;
      })(es), n2 = new Set(es.map((e4) => M(e4.color))), i2 = M(
        (a2.find((e4) => !n2.has(M(e4.color))) ?? a2[es.length % a2.length] ?? { color: "#888888" }).color
      ), s2 = `n${eI.current++}`;
      for (; es.some((e4) => e4.id === s2); ) s2 = `n${eI.current++}`;
      eo([
        ...es,
        {
          id: s2,
          color: i2,
          x: $(t3, 0, 1),
          y: $(r2, 0, 1),
          spread: 0.5,
          home: [$(t3, 0, 1), $(r2, 0, 1)]
        }
      ]), ep(s2), ej(true), ex(`Point ${es.length + 1}, ${S(i2, a2)} added`);
    }, eH = (e3, t3) => {
      let a3 = es.findIndex((t4) => t4.id === e3);
      if (a3 < 0) return;
      if (es.length <= 2) return void ex("A mesh needs at least two points");
      let r2 = es.filter((t4) => t4.id !== e3), n2 = r2[Math.max(0, a3 - 1)]?.id ?? "base";
      eo(r2), t3 && (eL.current = n2), ep(n2), ej(true), ex(`${eU(e3)} removed`);
    }, eK = (e3) => {
      let t3 = M(e3);
      "base" === em ? ed(t3) : eo((e4) => e4.map((e6) => e6.id === em ? { ...e6, color: t3 } : e6)), ej(true);
    }, eX = (e3, t3) => {
      let a3 = eB(), r2 = a3.drag;
      if (!r2 || r2.id !== t3 || r2.pointer !== e3.pointerId) return;
      a3.drag = null, delete e3.currentTarget.dataset.dragging;
      let n2 = a3.pts.find((e4) => e4.id === t3);
      if (n2) {
        var i2, s2;
        i2 = +n2.ax.toFixed(4), s2 = +n2.ay.toFixed(4), eo((e4) => e4.map((e6) => e6.id === t3 ? { ...e6, x: i2, y: s2 } : e6)), ex(
          `${eU(t3)} at ${Math.round(100 * n2.ax)}% across, ${Math.round(100 * n2.ay)}% down`
        );
      }
      eO();
    }, eY = (e3, t3) => {
      e3(t3), eD.current.push(window.setTimeout(() => e3("idle"), 1800));
    }, eV = async () => {
      let e3 = (function(e4, t3, a3, r2, n2) {
        let i2 = [...t3].map((e6, t4) => ({ p: e6, n: t4 + 1 })).reverse().map(
          ({ p: e6, n: t4 }) => r2 ? C(
            e6.color,
            `var(--mesh-${t4}-x)`,
            `var(--mesh-${t4}-y)`,
            `var(--mesh-${t4}-r)`
          ) : C(e6.color, j(e6.x), j(e6.y), j(e6.spread))
        ), s2 = a3 > 5e-3 ? [F(a3), ...i2] : i2, o2 = [];
        if (r2 && (t3.forEach((e6, t4) => {
          for (let [a4, r3] of [
            ["x", e6.x],
            ["y", e6.y],
            ["r", e6.spread]
          ])
            o2.push(
              `@property --mesh-${t4 + 1}-${a4} { syntax: "<percentage>"; inherits: false; initial-value: ${j(r3)}; }`
            );
        }), o2.push("")), o2.push(
          ".mesh {",
          `  background-color: ${M(e4)};`,
          `  background-image:
    ${s2.join(",\n    ")};`
        ), a3 > 5e-3 && o2.push(
          `  background-blend-mode: ${["overlay", ...i2.map(() => "normal")].join(", ")};`
        ), r2 && n2 > 0 && o2.push(
          `  animation: mesh-drift ${+(20 / n2).toFixed(2)}s linear infinite;`
        ), o2.push("}"), r2 && n2 > 0) {
          o2.push("", "@keyframes mesh-drift {");
          for (let e6 = 0; e6 <= 16; e6++) {
            let a4 = t3.map((t4, a5) => {
              let r3 = R(N(t4.id), e6 / 16 * 20);
              return `--mesh-${a5 + 1}-x: ${j(t4.x + r3.dx)}; --mesh-${a5 + 1}-y: ${j(t4.y + r3.dy)}; --mesh-${a5 + 1}-r: ${j(t4.spread * r3.s)};`;
            }).join(" ");
            o2.push(`  ${+(e6 / 16 * 100).toFixed(2)}% { ${a4} }`);
          }
          o2.push(
            "}",
            "",
            "@media (prefers-reduced-motion: reduce) {",
            "  .mesh { animation: none; }",
            "}"
          );
        }
        return o2.join("\n");
      })(el, es, ec, eh, T2);
      try {
        await (0, y.a)(e3), eY(eb, "done"), ex("CSS copied"), J?.("css", e3);
      } catch {
        eY(eb, "error"), ex("Could not copy. Allow clipboard access and try again.");
      }
    }, eZ = "base" === em ? el : es.find((e3) => e3.id === em)?.color ?? el, eJ = a2.findIndex((e3) => M(e3.color) === M(eZ)), eQ = eJ >= 0 ? eJ : 0, e0 = (0, n.useRef)([]), e1 = es.find((e3) => e3.id === em), e22 = en ? { duration: 0 } : x.T.spring.morph, e5 = `Mesh gradient of ${es.map((e3) => S(e3.color, a2)).join(", ")} on ${S(el, a2)}${ec > 5e-3 ? `, ${Math.round(100 * ec)}% grain` : ""}`;
    return ea ? (0, r.jsx)("div", {
      "aria-hidden": "true",
      className: [b().root, b().background, ee].filter(Boolean).join(" "),
      style: et,
      children: (0, r.jsxs)("div", {
        ref: eE,
        className: b().stage,
        children: [
          (0, r.jsx)("div", {
            ref: (e3) => {
              eB().fallback = e3;
            },
            className: b().fallback,
            style: eC
          }),
          (0, r.jsx)("canvas", {
            ref: (e3) => {
              eB().canvas = e3;
            },
            className: b().canvas,
            "data-hidden": e_ || void 0
          })
        ]
      })
    }) : (0, r.jsxs)("div", {
      role: "group",
      "aria-label": V,
      className: [b().root, ee].filter(Boolean).join(" "),
      style: { ...X ? { "--mesh-accent": X } : null, ...et },
      children: [
        (0, r.jsxs)("div", {
          className: b().canvasWrap,
          children: [
            (0, r.jsxs)("div", {
              ref: eE,
              className: b().stage,
              onClick: (e3) => {
                e3.target.closest("[data-point]") || "base" !== em && (ep("base"), ex("Base selected"));
              },
              onDoubleClick: (e3) => {
                if (e3.target.closest("[data-point]")) return;
                let t3 = e3.currentTarget.getBoundingClientRect();
                eG([
                  (e3.clientX - t3.left) / t3.width,
                  (e3.clientY - t3.top) / t3.height
                ]);
              },
              children: [
                (0, r.jsx)("div", {
                  ref: (e3) => {
                    eB().fallback = e3;
                  },
                  className: b().fallback,
                  style: eC,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)("canvas", {
                  ref: (e3) => {
                    eB().canvas = e3;
                  },
                  className: b().canvas,
                  "data-hidden": e_ || void 0,
                  role: "img",
                  "aria-label": e5
                }),
                (0, r.jsxs)("div", {
                  ref: eP,
                  className: b().plane,
                  children: [
                    (0, r.jsx)("svg", {
                      className: b().overlay,
                      viewBox: "0 0 100 100",
                      preserveAspectRatio: "none",
                      "aria-hidden": "true",
                      children: (0, r.jsx)("ellipse", {
                        ref: (e3) => {
                          eB().ellipse = e3;
                        },
                        className: b().reach,
                        "data-show": "base" !== em || void 0,
                        cx: "50",
                        cy: "50",
                        rx: "0",
                        ry: "0"
                      })
                    }),
                    es.map((e3, t3) => {
                      let n2, i2;
                      return (0, r.jsx)(
                        "button",
                        {
                          ref: (t4) => {
                            let a3 = eB();
                            t4 ? a3.handles.set(e3.id, t4) : a3.handles.delete(e3.id);
                          },
                          type: "button",
                          "data-point": e3.id,
                          "data-selected": em === e3.id || void 0,
                          className: b().handle,
                          style: {
                            "--c": e3.color,
                            transform: (n2 = e3.home[0], i2 = e3.home[1], `translate(clamp(14px, ${(100 * n2).toFixed(3)}cqw, calc(100cqw - 14px)), clamp(14px, ${(100 * i2).toFixed(3)}cqh, calc(100cqh - 14px)))`)
                          },
                          "aria-label": `Point ${t3 + 1}, ${S(e3.color, a2)}, ${Math.round(100 * e3.x)}% across, ${Math.round(100 * e3.y)}% down, size ${Math.round(100 * e3.spread)}%`,
                          "aria-pressed": em === e3.id,
                          "aria-roledescription": "draggable point",
                          "aria-describedby": `${er}-keys`,
                          onPointerDown: (t4) => ((e4, t5) => {
                            if (0 !== e4.button) return;
                            let a3 = eB(), r2 = a3.pts.find((e6) => e6.id === t5), n3 = eE.current;
                            if (!r2 || !n3) return;
                            e4.currentTarget.setPointerCapture(
                              e4.pointerId
                            );
                            let i3 = n3.getBoundingClientRect(), s2 = z(a3, r2);
                            r2.ax = r2.x = $(s2.x, 0, 1), r2.ay = r2.y = $(s2.y, 0, 1), r2.vx = r2.vy = 0, r2.w = 0, r2.vw = 0, a3.drag = {
                              id: t5,
                              pointer: e4.pointerId,
                              gx: (e4.clientX - i3.left) / i3.width - r2.x,
                              gy: (e4.clientY - i3.top) / i3.height - r2.y,
                              rect: i3
                            }, e4.currentTarget.dataset.dragging = "true", ep(t5), ej(true), eO();
                          })(t4, e3.id),
                          onPointerMove: (t4) => ((e4, t5) => {
                            let a3 = eB(), r2 = a3.drag;
                            if (!r2 || r2.id !== t5 || r2.pointer !== e4.pointerId)
                              return;
                            let n3 = a3.pts.find((e6) => e6.id === t5);
                            n3 && (n3.ax = $(
                              (e4.clientX - r2.rect.left) / r2.rect.width - r2.gx,
                              0,
                              1
                            ), n3.ay = $(
                              (e4.clientY - r2.rect.top) / r2.rect.height - r2.gy,
                              0,
                              1
                            ), eO());
                          })(t4, e3.id),
                          onPointerUp: (t4) => eX(t4, e3.id),
                          onPointerCancel: (t4) => eX(t4, e3.id),
                          onKeyDown: (t4) => ((e4, t5) => {
                            let a3 = es.find((e6) => e6.id === t5);
                            if (!a3) return;
                            let r2 = e4.shiftKey ? 0.1 : e4.altKey ? 25e-4 : 0.01, n3 = a3.x, i3 = a3.y, s2 = a3.spread;
                            switch (e4.key) {
                              case "ArrowLeft":
                                n3 -= r2;
                                break;
                              case "ArrowRight":
                                n3 += r2;
                                break;
                              case "ArrowUp":
                                i3 -= r2;
                                break;
                              case "ArrowDown":
                                i3 += r2;
                                break;
                              case "+":
                              case "=":
                              case "]":
                                s2 += e4.shiftKey && "+" !== e4.key ? 0.15 : 0.05;
                                break;
                              case "-":
                              case "_":
                              case "[":
                                s2 -= 0.05;
                                break;
                              case "Delete":
                              case "Backspace":
                                e4.preventDefault(), eH(t5, true);
                                return;
                              case "Escape":
                                e4.preventDefault(), ep("base"), ex("Base selected");
                                return;
                              default:
                                return;
                            }
                            e4.preventDefault(), n3 = +$(n3, 0, 1).toFixed(4), i3 = +$(i3, 0, 1).toFixed(4), s2 = +$(s2, 0.15, 1.2).toFixed(3), eo(
                              (e6) => e6.map(
                                (e7) => e7.id === t5 ? { ...e7, x: n3, y: i3, spread: s2 } : e7
                              )
                            ), ep(t5), ej(true), ex(
                              s2 !== a3.spread ? `Size ${Math.round(100 * s2)}%` : `${Math.round(100 * n3)}% across, ${Math.round(100 * i3)}% down`
                            );
                          })(t4, e3.id),
                          onClick: () => ep(e3.id),
                          onFocus: () => ep(e3.id),
                          children: (0, r.jsx)("span", {
                            className: b().dot,
                            "aria-hidden": "true"
                          })
                        },
                        e3.id
                      );
                    })
                  ]
                }),
                Y ? (0, r.jsx)("p", {
                  className: b().hint,
                  "data-hidden": e$ || void 0,
                  "aria-hidden": "true",
                  children: Y
                }) : null
              ]
            }),
            (0, r.jsxs)("div", {
              className: b().bar,
              children: [
                (0, r.jsxs)("button", {
                  type: "button",
                  className: b().baseButton,
                  "aria-pressed": "base" === em,
                  onClick: () => {
                    ep("base"), ex("Base selected");
                  },
                  children: [
                    (0, r.jsx)("span", {
                      className: b().baseDot,
                      style: { "--c": el },
                      "aria-hidden": "true"
                    }),
                    "Base"
                  ]
                }),
                (0, r.jsx)("span", {
                  className: b().divider,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)("div", {
                  role: "radiogroup",
                  "aria-label": `Color for ${"base" === em ? "the base" : eU(em).replace(/, [^,]+$/, "")}`,
                  className: b().swatches,
                  children: a2.map((e3, t3) => {
                    let n2 = t3 === eJ;
                    return (0, r.jsxs)(
                      "button",
                      {
                        ref: (e4) => {
                          e0.current[t3] = e4;
                        },
                        type: "button",
                        role: "radio",
                        "aria-checked": n2,
                        "aria-label": e3.name,
                        tabIndex: t3 === eQ ? 0 : -1,
                        className: b().swatch,
                        style: { "--c": M(e3.color) },
                        onClick: () => eK(e3.color),
                        onKeyDown: (e4) => {
                          let r2, n3;
                          return r2 = a2.length, n3 = -1, void ("ArrowRight" === e4.key || "ArrowDown" === e4.key ? n3 = (t3 + 1) % r2 : "ArrowLeft" === e4.key || "ArrowUp" === e4.key ? n3 = (t3 - 1 + r2) % r2 : "Home" === e4.key ? n3 = 0 : "End" === e4.key && (n3 = r2 - 1), !(n3 < 0) && (e4.preventDefault(), eK(a2[n3].color), e0.current[n3]?.focus()));
                        },
                        children: [
                          n2 ? (0, r.jsx)(i.PY1.span, {
                            layoutId: `${er}-ring`,
                            className: b().swatchRing,
                            transition: e22,
                            "aria-hidden": "true"
                          }) : null,
                          (0, r.jsx)("span", {
                            className: b().swatchFill,
                            "aria-hidden": "true"
                          })
                        ]
                      },
                      e3.name + e3.color
                    );
                  })
                }),
                (0, r.jsxs)("label", {
                  className: b().iconButton,
                  "data-on": eJ < 0 || void 0,
                  children: [
                    (0, r.jsx)(s.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, r.jsx)("input", {
                      className: b().colorInput,
                      type: "color",
                      value: M(eZ),
                      onChange: (e3) => eK(e3.target.value),
                      "aria-label": `Custom color for ${"base" === em ? "the base" : "the point"}`
                    })
                  ]
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: b().iconButton,
                  disabled: !e1 || es.length <= 2,
                  "aria-label": e1 ? `Remove ${eU(e1.id)}` : "Remove point",
                  onClick: () => e1 && eH(e1.id, false),
                  children: (0, r.jsx)(o.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: b().footer,
          children: [
            (0, r.jsxs)("div", {
              className: b().settings,
              children: [
                (0, r.jsx)("div", {
                  className: b().grain,
                  children: (0, r.jsx)(p.A, {
                    label: "Grain",
                    value: Math.round(100 * ec),
                    onValueChange: (e3) => {
                      eu(e3 / 100), ej(true);
                    },
                    min: 0,
                    max: 100,
                    step: 1,
                    format: (e3) => `${e3}%`,
                    showValue: true
                  })
                }),
                (0, r.jsx)(g.d, {
                  label: "Animate",
                  checked: eh && !en,
                  disabled: en,
                  onCheckedChange: (e3) => {
                    ef(e3), ex(e3 ? "Drift on" : "Drift off");
                  }
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: b().actions,
              children: [
                (0, r.jsxs)(m.$, {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                    let e3 = (function(e4, t4 = Math.random) {
                      let a3 = 360 * t4(), r2 = [
                        [0, 28, -28, 52],
                        [0, 180, 24, 204],
                        [0, 120, 240, 20],
                        [0, 150, 210, 30]
                      ], n2 = r2[Math.floor(t4() * r2.length)], i2 = 0.45 > t4(), s2 = Math.min(e4, 3 + Math.floor(4 * t4())), o2 = i2 ? q(
                        a3 + 200 + 40 * t4(),
                        0.35 + 0.3 * t4(),
                        0.08 + 0.07 * t4()
                      ) : q(
                        a3 + 30 * t4(),
                        0.3 + 0.4 * t4(),
                        0.9 + 0.06 * t4()
                      ), l2 = [];
                      for (let e6 = 0; e6 < s2; e6++) {
                        let r3 = a3 + n2[e6 % n2.length] + (t4() - 0.5) * 24, o3 = i2 ? 0.45 + 0.3 * t4() : 0.5 + 0.3 * t4(), d2 = q(
                          (r3 % 360 + 360) % 360,
                          0.62 + 0.33 * t4(),
                          o3
                        ), c2 = e6 / s2 * Math.PI * 2 + 0.9 * t4(), u2 = 0.28 + 0.22 * t4(), h2 = $(
                          0.5 + Math.cos(c2) * u2 * 1.1 + (t4() - 0.5) * 0.2,
                          0.04,
                          0.96
                        ), f2 = $(
                          0.5 + Math.sin(c2) * u2 + (t4() - 0.5) * 0.2,
                          0.04,
                          0.96
                        );
                        l2.push({
                          color: d2,
                          x: h2,
                          y: f2,
                          spread: $(0.38 + 0.45 * t4(), 0.15, 1.2),
                          home: [h2, f2]
                        });
                      }
                      return {
                        base: o2,
                        grain: Math.round(45 * t4()) / 100,
                        points: l2
                      };
                    })(ei), t3 = e3.points.map((e4, t4) => {
                      let a3 = es[t4]?.id;
                      if (!a3)
                        for (a3 = `n${eI.current++}`; es.some((e6) => e6.id === a3); )
                          a3 = `n${eI.current++}`;
                      return { ...e4, id: a3 };
                    });
                    eo(t3), ed(e3.base), eu(e3.grain), ep(t3[0].id), ej(true), ex(`New random mesh with ${t3.length} points`);
                  },
                  children: [
                    (0, r.jsx)(l.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Randomize"
                  ]
                }),
                (0, r.jsxs)(m.$, {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => eG(),
                  disabled: es.length >= ei,
                  children: [
                    (0, r.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Add point"
                  ]
                }),
                (0, r.jsx)(m.$, {
                  variant: "secondary",
                  size: "sm",
                  className: b().copyButton,
                  onClick: eV,
                  children: "done" === ev ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(c.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Copied"
                    ]
                  }) : "error" === ev ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Not copied"
                    ]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(h.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Copy CSS"
                    ]
                  })
                }),
                (0, r.jsx)(m.$, {
                  variant: "primary",
                  size: "sm",
                  className: b().saveButton,
                  onClick: () => {
                    let e3 = eB(), t3 = e3.canvas;
                    if (!e3.gl || !t3 || !e3.W) return void eY(ew, "error");
                    let a3 = Math.round(2400 * e3.H / e3.W), r2 = [t3.width, t3.height];
                    t3.width = 2400, t3.height = a3;
                    let n2 = es.map((e4) => ({
                      x: e4.x,
                      y: e4.y,
                      r: e4.spread,
                      col: A(e4.color)
                    }));
                    P(e3.gl, 2400, a3, A(el), n2, ec, 2400 / e3.W), t3.toBlob((e4) => {
                      if (!e4) {
                        eY(ew, "error"), ex("Could not create the image");
                        return;
                      }
                      let t4 = URL.createObjectURL(e4), r3 = document.createElement("a");
                      r3.href = t4, r3.download = "gradient-mesh.png", r3.click(), window.setTimeout(
                        () => URL.revokeObjectURL(t4),
                        4e3
                      ), eY(ew, "done"), ex(`Image saved, 2400 by ${a3} pixels`), J?.("png", e4);
                    }, "image/png"), t3.width = r2[0], t3.height = r2[1], W(e3);
                  },
                  disabled: e_,
                  children: "done" === ey ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(c.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Saved"
                    ]
                  }) : "error" === ey ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Not saved"
                    ]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(f.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Save PNG"
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("p", {
          id: `${er}-keys`,
          className: b().srOnly,
          children: "Arrow keys move the point, Shift moves further. Plus and minus change its size. Delete removes it. Escape selects the base. Scroll on a point to resize it."
        }),
        (0, r.jsx)("p", {
          className: b().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eg
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}