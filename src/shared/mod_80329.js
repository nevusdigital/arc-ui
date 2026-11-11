function(__module,__exports,__require){
"use strict";
function __m(e, a, n) {
  "use strict";
  n.r(a), n.d(a, { HeroCadence: () => e$, HeroContent: () => E, HeroLumen: () => eo, HeroMesh: () => q, HeroRelay: () => eN, HeroSection: () => eL, HeroSectionBlock: () => eM, default: () => eF });
  var s = n(95155), t = n(12115), r = n(66558), i = n(18310), o = n(9937), l = n(25354), c = n(44236), d = n(33142), h = n(57465), m = n(94774), u = n(86272), _ = n(40557), p = n(65342), x = n(65377), g = n(88074), v = n(73178), y = n(4338), j = n(92218), b = n(67752), f = n(7770), w = n(9751), N = n(90467), k = n(64577), S = n(51288), R = n(73474);
  let A = { enter: [...f.T.ease.enter], standard: [...f.T.ease.standard], inOut: [...f.T.ease.inOut] }, C = { hidden: {}, shown: { transition: { staggerChildren: f.T.stagger.line, delayChildren: 0.04 } } }, $ = { hidden: { opacity: 0, y: 12, filter: `blur(${f.T.blur.subtle}px)` }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.64, ease: A.enter } } };
  f.T.duration.standard;
  let L = () => () => {
  };
  var P = n(72302), M = n.n(P), F = n(16108), T = n.n(F);
  function I({ action: e2, kind: a2, className: n2 }) {
    let [r2, i2] = (0, t.useState)(false);
    (0, t.useEffect)(() => {
      if (!r2) return;
      let e3 = window.setTimeout(() => i2(false), 2400);
      return () => window.clearTimeout(e3);
    }, [r2]);
    let o2 = [T().action, T()[a2], n2].filter(Boolean).join(" "), l2 = e2.external ? (0, s.jsx)(w.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) : "primary" === a2 ? (0, s.jsx)(N.A, { className: T().arrow, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) : null;
    return e2.href ? (0, s.jsxs)("a", { className: o2, href: e2.href, onClick: e2.onClick, ...e2.external ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: [e2.label, l2] }) : (0, s.jsx)(S.$, { variant: a2, size: "lg", className: [T().button, n2].filter(Boolean).join(" "), onClick: () => {
      e2.onClick?.(), e2.doneLabel && i2(true);
    }, children: r2 ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(k.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), e2.doneLabel] }) : (0, s.jsxs)(s.Fragment, { children: [e2.label, l2] }) });
  }
  function E({ layout: e2, announcement: a2, title: n2, description: t2, primaryAction: r2, secondaryAction: i2, install: c2, media: d2, meta: h2, animateIn: m2 = true, className: u2 }) {
    let _2 = c2?.[0];
    return (0, s.jsx)(o.x, { reducedMotion: "user", children: (0, s.jsx)("section", { className: [M().hero, T().hero, T()[e2], u2].filter(Boolean).join(" "), children: (0, s.jsxs)("div", { className: T().inner, children: [(0, s.jsxs)(l.PY1.div, { className: T().copy, variants: C, initial: !!m2 && "hidden", animate: "shown", children: [a2 && (0, s.jsx)(l.PY1.div, { variants: $, children: a2.href ? (0, s.jsxs)("a", { className: T().announcement, href: a2.href, onClick: a2.onClick, children: [a2.label, (0, s.jsx)(N.A, { className: T().arrow, size: 14, strokeWidth: 1.75, "aria-hidden": "true" })] }) : (0, s.jsxs)("button", { type: "button", className: T().announcement, onClick: a2.onClick, children: [a2.label, (0, s.jsx)(N.A, { className: T().arrow, size: 14, strokeWidth: 1.75, "aria-hidden": "true" })] }) }), (0, s.jsx)(l.PY1.h1, { variants: $, className: [M().title, T().title].join(" "), children: n2 }), t2 && (0, s.jsx)(l.PY1.p, { variants: $, className: [M().description, T().description].join(" "), children: t2 }), (r2 || i2) && (0, s.jsxs)(l.PY1.div, { variants: $, className: T().actions, children: [r2 && (0, s.jsx)(I, { action: r2, kind: "primary" }), i2 && (0, s.jsx)(I, { action: i2, kind: "secondary" })] }), _2 && (0, s.jsxs)(l.PY1.div, { variants: $, className: T().install, children: [(0, s.jsx)("span", { className: T().prompt, "aria-hidden": "true", children: "$" }), (0, s.jsx)("code", { className: T().command, children: _2.command }), (0, s.jsx)(R.CopyButton, { value: _2.command, label: "Copy install command", iconOnly: true, variant: "plain" })] }), h2 && h2.length > 0 && (0, s.jsx)(l.PY1.ul, { variants: $, className: T().meta, children: h2.map((e3) => (0, s.jsx)("li", { children: e3 }, e3)) })] }), d2 && (0, s.jsx)(l.PY1.div, { className: T().media, variants: $, initial: !!m2 && "hidden", animate: "shown", children: d2 })] }) }) });
  }
  var Y = n(36894), B = n.n(Y);
  let O = 1e3 / 30, W = `
precision mediump float;
uniform vec2 uRes;
uniform vec3 uBase;
uniform vec4 uP[8];
uniform vec3 uC[8];
uniform int uN;
uniform float uGrain;
float hash(vec2 p) { vec3 q = fract(vec3(p.xyx) * .1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
void main() {
  vec2 uv = vec2(gl_FragCoord.x / uRes.x, 1.0 - gl_FragCoord.y / uRes.y);
  vec3 col = uBase;
  for (int i = 0; i < 8; i++) {
    if (i >= uN) break;
    vec4 p = uP[i];
    float d = length((uv - p.xy) / max(p.z, 1e-4));
    col = mix(col, uC[i], 1.0 - smoothstep(0.0, 1.0, d));
  }
  float n = hash(floor(gl_FragCoord.xy)) + hash(floor(gl_FragCoord.xy) + 19.19) - 1.0;
  float lum = dot(col, vec3(.2126, .7152, .0722));
  col += n * (uGrain * .1 * (.55 + 1.8 * lum * (1.0 - lum)) + .6 / 255.0);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
  function z(e2) {
    let a2 = 2166136261;
    for (let n2 = 0; n2 < e2.length; n2++) a2 ^= e2.charCodeAt(n2), a2 = Math.imul(a2, 16777619);
    return a2 >>> 0;
  }
  let D = ["uRes", "uBase", "uP", "uC", "uN", "uGrain"];
  function H(e2, a2) {
    a2.clearRect(0, 0, 1, 1), a2.fillStyle = "#000", a2.fillStyle = e2, a2.fillRect(0, 0, 1, 1);
    let [n2 = 0, s2 = 0, t2 = 0] = a2.getImageData(0, 0, 1, 1).data;
    return [n2 / 255, s2 / 255, t2 / 255];
  }
  function q({ points: e2, grain: a2 = 0.35, speed: n2 = 1, className: r2, style: o2 }) {
    let l2, c2 = (0, t.useRef)(null), d2 = (0, t.useRef)(null), h2 = !!(0, i.I)(), m2 = JSON.stringify(e2);
    return (0, t.useEffect)(() => {
      let e3 = c2.current, s2 = d2.current;
      if (!e3 || !s2) return;
      let t2 = s2.getContext("webgl", { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: "low-power" }), r3 = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
      if (!t2 || !r3) return;
      let i2 = (e4, a3) => {
        let n3 = t2.createShader(e4);
        return t2.shaderSource(n3, a3), t2.compileShader(n3), n3;
      }, o3 = t2.createProgram();
      if (t2.attachShader(o3, i2(t2.VERTEX_SHADER, "attribute vec2 a; void main() { gl_Position = vec4(a, 0.0, 1.0); }")), t2.attachShader(o3, i2(t2.FRAGMENT_SHADER, W)), t2.linkProgram(o3), !t2.getProgramParameter(o3, t2.LINK_STATUS)) return;
      t2.useProgram(o3), t2.bindBuffer(t2.ARRAY_BUFFER, t2.createBuffer()), t2.bufferData(t2.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), t2.STATIC_DRAW);
      let l3 = t2.getAttribLocation(o3, "a");
      t2.enableVertexAttribArray(l3), t2.vertexAttribPointer(l3, 2, t2.FLOAT, false, 0, 0);
      let u2 = Object.fromEntries(D.map((e4) => [e4, t2.getUniformLocation(o3, e4)])), _2 = JSON.parse(m2).slice(0, 8), p2 = _2.map((e4, a3) => {
        let n3 = z(`mesh-${a3}`);
        return { ph1: n3 % 628 / 100, ph2: (n3 >>> 10) % 628 / 100, k1: 1 + (n3 >>> 20) % 2, k2: 1 + (n3 >>> 22) % 2 };
      }), x2 = new Float32Array(32), g2 = new Float32Array(24), v2 = [1, 1, 1], y2 = () => {
        let a3 = getComputedStyle(e3);
        v2 = H(a3.getPropertyValue("--mesh-base").trim() || "#fff", r3), _2.forEach((e4, n3) => {
          let s3 = H(a3.getPropertyValue(`--mesh-${n3 + 1}`).trim() || "#fff", r3);
          g2.set(s3, 3 * n3);
        });
      }, j2 = 0, b2 = 0, f2 = () => {
        j2 = Math.max(1, Math.round(e3.clientWidth)), b2 = Math.max(1, Math.round(e3.clientHeight)), s2.width = j2, s2.height = b2;
      }, w2 = z(m2) % 20, N2 = () => {
        let n3 = 2 * Math.PI * w2 / 20;
        _2.forEach((e4, a3) => {
          let s3 = p2[a3];
          x2[4 * a3] = e4.x + 0.075 * Math.sin(n3 * s3.k1 + s3.ph1), x2[4 * a3 + 1] = e4.y + 0.075 * Math.cos(n3 * s3.k2 + s3.ph2), x2[4 * a3 + 2] = e4.spread * (1 + 0.08 * Math.sin(n3 + 0.7 * s3.ph1));
        }), t2.viewport(0, 0, j2, b2), t2.uniform2f(u2.uRes, j2, b2), t2.uniform3f(u2.uBase, v2[0], v2[1], v2[2]), t2.uniform4fv(u2.uP, x2), t2.uniform3fv(u2.uC, g2), t2.uniform1i(u2.uN, _2.length), t2.uniform1f(u2.uGrain, a2), t2.drawArrays(t2.TRIANGLES, 0, 3), e3.dataset.painted = "";
      };
      y2(), f2(), N2();
      let k2 = !h2 && n2 > 0, S2 = false, R2 = 0, A2 = 0, C2 = (e4) => {
        if (R2 = requestAnimationFrame(C2), e4 - A2 < O) return;
        let a3 = A2 ? Math.min(0.1, (e4 - A2) / 1e3) : 0;
        A2 = e4, w2 = (w2 + a3 * n2) % 20, N2();
      }, $2 = () => {
        let e4 = k2 && S2 && "visible" === document.visibilityState;
        e4 && !R2 && (A2 = 0, R2 = requestAnimationFrame(C2)), !e4 && R2 && (cancelAnimationFrame(R2), R2 = 0);
      }, L2 = new IntersectionObserver(([e4]) => {
        e4 && (S2 = e4.isIntersecting, $2());
      });
      L2.observe(e3);
      let P2 = new ResizeObserver(() => {
        f2(), N2();
      });
      P2.observe(e3);
      let M2 = () => {
        y2(), N2();
      }, F2 = new MutationObserver(M2);
      F2.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-accent", "class"] });
      let T2 = matchMedia("(prefers-color-scheme: dark)");
      return T2.addEventListener("change", M2), document.addEventListener("visibilitychange", $2), () => {
        cancelAnimationFrame(R2), L2.disconnect(), P2.disconnect(), F2.disconnect(), T2.removeEventListener("change", M2), document.removeEventListener("visibilitychange", $2), delete e3.dataset.painted;
      };
    }, [m2, a2, n2, h2]), (0, s.jsx)("div", { ref: c2, className: [B().mesh, r2].filter(Boolean).join(" "), style: { ...(l2 = [0, 0.2, 0.4, 0.6, 0.8, 1].map((e3) => [e3, Math.round((1 - e3 * e3 * (3 - 2 * e3)) * 100)]), { backgroundColor: "var(--mesh-base)", backgroundImage: e2.map((e3, a3) => `radial-gradient(ellipse ${100 * e3.spread}% ${100 * e3.spread}% at ${100 * e3.x}% ${100 * e3.y}%, ${l2.map(([e4, n3]) => `color-mix(in srgb, var(--mesh-${a3 + 1}) ${n3}%, transparent) ${100 * e4}%`).join(", ")})`).reverse().join(", ") }), ...o2 }, "aria-hidden": "true", children: (0, s.jsx)("canvas", { ref: d2, className: B().canvas }) });
  }
  let K = [{ value: "30d", label: "30D" }, { value: "90d", label: "90D" }, { value: "12m", label: "12M" }];
  function V(e2, a2, n2, s2, t2) {
    let r2 = t2;
    return Array.from({ length: e2 }, (t3, i2) => {
      let o2 = i2 / (e2 - 1);
      return Math.round(a2 + (n2 - a2) * (o2 * o2 * 0.35 + 0.65 * o2) + Math.sin(o2 * Math.PI * 2.3) * s2 + ((r2 = 16807 * r2 % 2147483647) / 2147483647 - 0.5) * s2 * 0.6);
    });
  }
  let U = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
  function J(e2) {
    if ("12m" === e2) {
      let e3 = V(12, 9800, 36400, 2600, 7), a3 = V(12, 6200, 21900, 2200, 19);
      return U.map((n3, s3) => ({ key: `m${s3}`, label: `${n3} ${s3 < 3 ? 2025 : 2026}`, axisLabel: s3 % 2 == 0 ? n3 : void 0, values: { mrr: e3[s3], last: a3[s3] } }));
    }
    let a2 = "30d" === e2 ? 30 : 13, n2 = "30d" === e2 ? 1 : 7, s2 = V(a2, "30d" === e2 ? 640 : 4300, "30d" === e2 ? 1960 : 9800, "30d" === e2 ? 260 : 900, "30d" === e2 ? 3 : 11), t2 = V(a2, "30d" === e2 ? 520 : 3600, "30d" === e2 ? 1180 : 6100, "30d" === e2 ? 220 : 700, 29), r2 = new Date(Date.UTC(2026, 8, 24));
    return s2.map((s3, i2) => {
      let o2 = new Date(r2.getTime() - (a2 - 1 - i2) * n2 * 864e5), l2 = o2.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
      return { key: o2.toISOString().slice(0, 10), label: l2, axisLabel: (a2 - 1 - i2) % ("30d" === e2 ? 7 : 3) == 0 ? l2 : void 0, values: { mrr: s3, last: t2[i2] } };
    });
  }
  let G = { "30d": J("30d"), "90d": J("90d"), "12m": J("12m") }, X = [{ id: "mrr", label: "MRR", tone: "accent", byRange: { "30d": { value: "$482.9K", change: "+8.2%", data: V(12, 446, 483, 4, 5) }, "90d": { value: "$482.9K", change: "+19.9%", data: V(12, 402, 483, 6, 9) }, "12m": { value: "$482.9K", change: "+51.7%", data: V(12, 318, 483, 8, 13) } } }, { id: "nrr", label: "Net retention", tone: "success", byRange: { "30d": { value: "118%", change: "+3 pts", data: V(12, 112, 118, 1.5, 17) }, "90d": { value: "116%", change: "+5 pts", data: V(12, 109, 116, 1.8, 21) }, "12m": { value: "114%", change: "+9 pts", data: V(12, 103, 114, 2.4, 23) } } }, { id: "new", label: "New customers", tone: "success", byRange: { "30d": { value: "214", change: "+12%", data: V(12, 5, 9, 2, 31) }, "90d": { value: "602", change: "+18%", data: V(12, 38, 56, 6, 37) }, "12m": { value: "2,140", change: "+34%", data: V(12, 120, 214, 16, 41) } } }, { id: "churn", label: "Churned MRR", tone: "success", byRange: { "30d": { value: "$6.1K", change: "\u221214%", data: V(12, 9, 6, 1.2, 43) }, "90d": { value: "$21.4K", change: "\u22129%", data: V(12, 26, 21, 2, 47) }, "12m": { value: "$96.8K", change: "\u221222%", data: V(12, 12, 7, 1.4, 53) } } }], Z = [{ name: "Linear", logo: "block-logos/linear-color.svg", change: "Moved to Enterprise", amount: 4200 }, { name: "Raycast", logo: "block-logos/raycast-color.svg", change: "Added 120 seats", amount: 2850 }, { name: "Vercel", logo: "block-logos/vercel.svg", mono: true, change: "Annual prepay", amount: 1900 }, { name: "Loom", logo: "block-logos/loom-color.svg", change: "Removed 40 seats", amount: -1240 }, { name: "Supabase", logo: "block-logos/supabase-color.svg", change: "Added forecasting", amount: 980 }, { name: "Framer", logo: "block-logos/framer.svg", mono: true, change: "Upgraded to Scale", amount: 760 }], Q = { "30d": { lead: "MRR grew $36.4K this month.", rest: "62% came from 14 expansions on the Scale plan, led by Linear." }, "90d": { lead: "MRR grew $80.6K this quarter.", rest: "Expansion outpaced new business for the first time since March." }, "12m": { lead: "MRR grew $164.5K in twelve months.", rest: "Net retention above 110% did more than new logos did." } };
  var ee = n(54888), ea = n.n(ee);
  let en = [{ x: 0.1, y: 0.92, spread: 0.7 }, { x: 0.92, y: 0.86, spread: 0.66 }, { x: 0.14, y: 0.08, spread: 0.64 }, { x: 0.86, y: 0.04, spread: 0.6 }, { x: 0.5, y: 0.38, spread: 0.46 }], es = [{ label: "Overview", icon: c.A, active: true }, { label: "Revenue", icon: d.A }, { label: "Customers", icon: h.A }, { label: "Cohorts", icon: m.A }, { label: "Forecasts", icon: u.A }, { label: "Reports", icon: _.A }], et = [{ label: "Enterprise expansion", tone: "accent" }, { label: "Churn risk", tone: "danger" }, { label: "EU customers", tone: "neutral" }], er = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }), ei = (e2) => e2 >= 1e3 ? `$${+(e2 / 1e3).toFixed(1)}K` : `$${e2}`;
  function eo({ primaryAction: e2 = { label: "Start free trial", doneLabel: "Trial started" }, secondaryAction: a2 = { label: "Book a demo", doneLabel: "Demo requested" }, animateIn: n2 = true, className: r2 }) {
    let c2 = !!(0, i.I)(), d2 = (0, t.useRef)(null), [h2, m2] = (0, t.useState)({ width: 1200, scale: 1 });
    (0, t.useLayoutEffect)(() => {
      let e3 = d2.current;
      if (!e3) return;
      let a3 = () => {
        let a4 = getComputedStyle(e3), n4 = e3.clientWidth - parseFloat(a4.paddingLeft) - parseFloat(a4.paddingRight), s2 = n4 < 720 ? 600 : 1200;
        m2({ width: s2, scale: 600 === s2 ? Math.max(0.6, Math.min(1, n4 / s2)) : Math.min(1, n4 / s2) });
      };
      a3();
      let n3 = new ResizeObserver(a3);
      return n3.observe(e3), () => n3.disconnect();
    }, []);
    let u2 = 600 === h2.width, _2 = u2 ? 700 : 760;
    return (0, s.jsx)(o.x, { reducedMotion: "user", children: (0, s.jsxs)("section", { className: [M().hero, M().screen, ea().hero, r2].filter(Boolean).join(" "), children: [(0, s.jsx)(q, { className: ea().mesh, points: en, grain: 0.18, speed: 0.55 }), (0, s.jsxs)(l.PY1.div, { className: ea().copy, variants: C, initial: !!n2 && "hidden", animate: "shown", children: [(0, s.jsx)(l.PY1.h1, { variants: $, className: [M().title, ea().title].join(" "), children: "See every dollar of revenue move" }), (0, s.jsx)(l.PY1.p, { variants: $, className: [M().description, ea().description].join(" "), children: "Lumen connects Stripe, HubSpot and your warehouse, then explains each change in MRR the moment it happens. No SQL, no stale spreadsheets." }), (0, s.jsxs)(l.PY1.div, { variants: $, className: ea().actions, children: [(0, s.jsx)(I, { action: e2, kind: "primary" }), (0, s.jsx)(I, { action: a2, kind: "secondary" })] }), (0, s.jsx)(l.PY1.p, { variants: $, className: ea().fine, children: "Free for 14 days. Connects in about four minutes." })] }), (0, s.jsxs)(l.PY1.div, { ref: d2, className: ea().stage, initial: !!n2 && { opacity: 0, y: 56 }, animate: { opacity: 1, y: 0 }, transition: c2 ? { duration: f.T.duration.standard } : { duration: 1.1, ease: [...f.T.ease.enter], delay: 0.32 }, children: [(0, s.jsx)("div", { className: ea().glow, "aria-hidden": "true" }), (0, s.jsx)("div", { className: ea().perspective, children: (0, s.jsx)(l.PY1.div, { className: ea().tilt, style: { width: h2.width * h2.scale, height: _2 * h2.scale }, initial: !!n2 && { rotateX: 22, scale: 0.94 }, animate: { rotateX: 0, scale: 1 }, transition: { duration: 1.5, ease: [...f.T.ease.enter], delay: 0.36 }, children: (0, s.jsx)(l.PY1.div, { className: ea().scaler, style: { width: h2.width, height: _2, scale: h2.scale, originX: 0, originY: 0 }, children: (0, s.jsx)(el, { narrow: u2 }) }) }) })] })] }) });
  }
  function el({ narrow: e2 }) {
    let [a2, n2] = (0, t.useState)("30d"), i2 = Q[a2];
    return (0, s.jsxs)("div", { className: ea().window, "data-narrow": e2 || void 0, role: "group", "aria-label": "Lumen revenue dashboard, sample data", children: [(0, s.jsxs)("div", { className: ea().chrome, "aria-hidden": "true", children: [(0, s.jsxs)("span", { className: ea().lights, children: [(0, s.jsx)("i", {}), (0, s.jsx)("i", {}), (0, s.jsx)("i", {})] }), (0, s.jsx)("span", { className: ea().url, children: "app.lumen.so/acme/overview" })] }), (0, s.jsxs)("div", { className: ea().app, children: [!e2 && (0, s.jsxs)("aside", { className: ea().sidebar, children: [(0, s.jsxs)("div", { className: ea().workspace, children: [(0, s.jsx)("span", { className: ea().wsMark, children: "A" }), (0, s.jsx)("span", { className: ea().wsName, children: "Acme Cloud" }), (0, s.jsx)(p.A, { size: 14, strokeWidth: 1.75, className: ea().dim })] }), (0, s.jsxs)("div", { className: ea().search, children: [(0, s.jsx)(x.A, { size: 14, strokeWidth: 1.75 }), "Search", (0, s.jsx)("kbd", { children: "\u2318K" })] }), (0, s.jsx)("div", { className: ea().nav, children: es.map(({ label: e3, icon: a3, active: n3 }) => (0, s.jsxs)("div", { className: ea().navItem, "data-active": n3 || void 0, children: [(0, s.jsx)(a3, { size: 15, strokeWidth: 1.75 }), e3] }, e3)) }), (0, s.jsx)("div", { className: ea().groupLabel, children: "Saved views" }), (0, s.jsx)("div", { className: ea().nav, children: et.map((e3) => (0, s.jsxs)("div", { className: ea().navItem, children: [(0, s.jsx)("i", { className: ea().dot, "data-tone": e3.tone }), e3.label] }, e3.label)) }), (0, s.jsxs)("div", { className: ea().me, children: [(0, s.jsx)(j.e, { name: "Chloe Nguyen", src: (0, b.my)("chloe-nguyen"), size: "sm" }), (0, s.jsxs)("span", { children: [(0, s.jsx)("strong", { children: "Chloe Nguyen" }), (0, s.jsx)("small", { children: "Data analyst" })] }), (0, s.jsx)(g.A, { size: 15, strokeWidth: 1.75, className: ea().dim })] })] }), (0, s.jsxs)("div", { className: ea().main, children: [(0, s.jsxs)("header", { className: ea().head, children: [(0, s.jsxs)("div", { children: [(0, s.jsx)("h2", { className: ea().h2, children: "Revenue overview" }), (0, s.jsx)("p", { className: ea().sub, children: "Synced with Stripe 2 minutes ago" })] }), (0, s.jsx)(r.A, { label: "Date range", options: K, value: a2, onValueChange: (e3) => n2(e3), className: ea().range })] }), (0, s.jsx)("div", { className: ea().kpis, children: X.map((e3) => {
      let n3 = e3.byRange[a2];
      return (0, s.jsx)("div", { className: ea().kpi, children: (0, s.jsx)(y.O, { label: e3.label, value: n3.value, change: n3.change, data: n3.data, tone: e3.tone, width: 220, height: 34, interactive: false }) }, e3.id);
    }) }), (0, s.jsxs)("div", { className: ea().grid, children: [(0, s.jsxs)("div", { className: ea().card, children: [(0, s.jsxs)("div", { className: ea().cardHead, children: [(0, s.jsxs)("p", { className: ea().insight, children: [(0, s.jsx)(u.A, { size: 15, strokeWidth: 1.75, className: ea().insightIcon }), (0, s.jsxs)("span", { children: [(0, s.jsx)("strong", { children: i2.lead }), " ", i2.rest] })] }), (0, s.jsxs)("div", { className: ea().legend, "aria-hidden": "true", children: [(0, s.jsxs)("span", { children: [(0, s.jsx)("i", { className: ea().swatch }), "This period"] }), (0, s.jsxs)("span", { children: [(0, s.jsx)("i", { className: ea().swatch, "data-last": "" }), "Last period"] })] })] }), (0, s.jsx)(v.b, { label: "Net new MRR", data: G[a2], series: [{ key: "mrr", label: "This period", area: true }, { key: "last", label: "Last period", dashed: true }], height: e2 ? 210 : 232, legend: false, formatValue: (e3) => er.format(e3), formatTick: ei })] }), !e2 && (0, s.jsxs)("div", { className: ea().card, children: [(0, s.jsxs)("div", { className: ea().cardTitle, children: ["Biggest movers", (0, s.jsx)("span", { children: "MRR change" })] }), (0, s.jsx)("ul", { className: ea().movers, children: Z.map((e3) => (0, s.jsxs)("li", { children: [(0, s.jsx)("span", { className: ea().logo, "data-mono": e3.mono || void 0, style: e3.mono ? { maskImage: `url(${e3.logo})`, WebkitMaskImage: `url(${e3.logo})` } : { backgroundImage: `url(${e3.logo})` } }), (0, s.jsxs)("span", { className: ea().who, children: [(0, s.jsx)("strong", { children: e3.name }), (0, s.jsx)("small", { children: e3.change })] }), (0, s.jsxs)("span", { className: ea().amount, "data-down": e3.amount < 0 || void 0, children: [e3.amount < 0 ? "\u2212" : "+", er.format(Math.abs(e3.amount))] })] }, e3.name)) })] })] })] })] })] });
  }
  var ec = n(80642), ed = n(84361), eh = n(34306), em = n(36565), eu = n(67680), e_ = n.n(eu);
  let ep = [{ customer: "Northwind Labs", amount: "$4,800", plan: "Enterprise, 212 seats", routed: true, issue: "ONB-482", total: 412, ms: { lookup: 118, branch: 2, slack: 164, linear: 231, warehouse: 58 } }, { customer: "Tidepool", amount: "$240", plan: "Team, 9 seats", routed: false, issue: "", total: 171, ms: { lookup: 96, branch: 1, slack: 0, linear: 0, warehouse: 61 } }, { customer: "Halcyon Health", amount: "$12,600", plan: "Enterprise, 540 seats", routed: true, issue: "ONB-483", total: 436, ms: { lookup: 131, branch: 2, slack: 149, linear: 244, warehouse: 66 } }], ex = [900, 420, 380, 640, 380, 360, 440, 760, 2800], eg = ex.length - 1, ev = { trigger: [1, 2], lookup: [3, 4], branch: [5, 6], slack: [7, 8], linear: [7, 8], warehouse: [7, 8] }, ey = ["slack", "linear", "warehouse"], ej = { wide: { width: 640, height: 524, summary: 480, nodes: { trigger: { x: 170, y: 0, w: 300, h: 60 }, lookup: { x: 170, y: 112, w: 300, h: 60 }, branch: { x: 170, y: 224, w: 300, h: 60 }, slack: { x: 0, y: 356, w: 200, h: 84 }, linear: { x: 220, y: 356, w: 200, h: 84 }, warehouse: { x: 440, y: 356, w: 200, h: 84 } } }, narrow: { width: 344, height: 316, summary: 0, nodes: { trigger: { x: 0, y: 0, w: 344, h: 52 }, lookup: { x: 0, y: 78, w: 344, h: 52 }, branch: { x: 0, y: 156, w: 344, h: 52 }, slack: { x: 0, y: 244, w: 108, h: 72 }, linear: { x: 118, y: 244, w: 108, h: 72 }, warehouse: { x: 236, y: 244, w: 108, h: 72 } } } }, eb = [{ from: "trigger", to: "lookup", phase: 2 }, { from: "lookup", to: "branch", phase: 4 }, { from: "branch", to: "slack", phase: 6 }, { from: "branch", to: "linear", phase: 6 }, { from: "branch", to: "warehouse", phase: 6 }], ef = { slack: (e2) => `Sent in ${e2.ms.slack} ms`, linear: (e2) => `${e2.issue} in ${e2.ms.linear} ms`, warehouse: (e2) => `Saved in ${e2.ms.warehouse} ms` }, ew = (e2) => (0, s.jsx)("span", { className: e_().logo, style: { backgroundImage: `url(/block-logos/${e2}.svg)` }, "aria-hidden": "true" });
  function eN({ primaryAction: e2 = { label: "Start building", doneLabel: "Workspace created" }, secondaryAction: a2 = { label: "Read the docs", doneLabel: "Opening docs" }, animateIn: n2 = true, className: r2 }) {
    let c2, d2 = (c2 = (0, t.useSyncExternalStore)(L, () => true, () => false), !!(0, i.I)() && c2), h2 = (0, t.useRef)(null), m2 = (0, t.useRef)(null), [u2, _2] = (0, t.useState)("wide"), [p2, x2] = (0, t.useState)(1), [g2, v2] = (0, t.useState)({ index: 0, count: 2418, phase: 0 }), [y2, j2] = (0, t.useState)(false);
    (0, t.useLayoutEffect)(() => {
      let e3 = m2.current;
      if (!e3) return;
      let a3 = () => {
        let a4 = e3.clientWidth, n4 = a4 < 520 ? "narrow" : "wide";
        _2(n4), x2(Math.min(1, a4 / ej[n4].width));
      };
      a3();
      let n3 = new ResizeObserver(a3);
      return n3.observe(e3), () => n3.disconnect();
    }, []), (0, t.useEffect)(() => {
      let e3 = h2.current;
      if (!e3) return;
      let a3 = false, n3 = () => j2(a3 && "visible" === document.visibilityState), s2 = new IntersectionObserver(([e4]) => {
        e4 && (a3 = e4.isIntersecting, n3());
      });
      return s2.observe(e3), document.addEventListener("visibilitychange", n3), () => {
        s2.disconnect(), document.removeEventListener("visibilitychange", n3);
      };
    }, []), (0, t.useEffect)(() => {
      if (d2 || !y2) return;
      let e3 = window.setTimeout(() => v2((e4) => e4.phase < eg ? { ...e4, phase: e4.phase + 1 } : { index: (e4.index + 1) % ep.length, count: e4.count + 1, phase: 0 }), ex[g2.phase]);
      return () => window.clearTimeout(e3);
    }, [g2.phase, g2.index, d2, y2]);
    let b2 = ej[u2], w2 = ep[g2.index], N2 = d2 ? eg : g2.phase, R2 = (e3) => (function(e4, a3, n3) {
      let [s2, t2] = ev[e4];
      return ("slack" === e4 || "linear" === e4) && !n3.routed && a3 >= 6 ? "skipped" : a3 < s2 ? "idle" : a3 < t2 ? "running" : "done";
    })(e3, N2, w2), P2 = "narrow" === u2;
    return (0, s.jsx)(o.x, { reducedMotion: "user", children: (0, s.jsx)("section", { ref: h2, className: [M().hero, M().screen, e_().hero, r2].filter(Boolean).join(" "), children: (0, s.jsxs)("div", { className: e_().inner, children: [(0, s.jsxs)(l.PY1.div, { className: e_().copy, variants: C, initial: !!n2 && "hidden", animate: "shown", children: [(0, s.jsx)(l.PY1.h1, { variants: $, className: [M().title, e_().title].join(" "), children: "Every event, handled in milliseconds" }), (0, s.jsx)(l.PY1.p, { variants: $, className: [M().description, e_().description].join(" "), children: "Relay turns webhooks from Stripe, GitHub and Postgres into typed workflows with retries, branches and a trace of every run. Write steps in TypeScript, or wire them on the canvas." }), (0, s.jsxs)(l.PY1.div, { variants: $, className: e_().actions, children: [(0, s.jsx)(I, { action: e2, kind: "primary" }), (0, s.jsx)(I, { action: a2, kind: "secondary" })] }), (0, s.jsx)(l.PY1.p, { variants: $, className: e_().fine, children: "Free for 10,000 runs a month. No card needed." })] }), (0, s.jsxs)(l.PY1.div, { className: e_().canvas, initial: !!n2 && { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: A.enter, delay: 0.28 }, children: [(0, s.jsxs)("div", { className: e_().toolbar, children: [(0, s.jsxs)("span", { className: e_().file, children: [(0, s.jsx)("i", { className: e_().live, "data-on": y2 || d2 || void 0, "aria-hidden": "true" }), "on-invoice-paid.ts"] }), (0, s.jsx)(S.$, { variant: "secondary", size: "sm", onClick: () => v2((e3) => ({ index: (e3.index + 1) % ep.length, count: e3.count + 1, phase: 1 })), children: "Send test event" })] }), (0, s.jsx)("div", { ref: m2, className: e_().stage, style: { height: b2.height * p2 }, children: (0, s.jsxs)("div", { className: e_().graph, role: "group", "aria-label": `Relay workflow, sample run for ${w2.customer}`, style: { width: b2.width, height: b2.height, transform: `scale(${p2})` }, children: [(0, s.jsx)("svg", { className: e_().edges, width: b2.width, height: b2.height, viewBox: `0 0 ${b2.width} ${b2.height}`, "aria-hidden": "true", children: eb.map((e3) => {
      var a3, n3;
      let t2, r3, i2, o2, c3, h3, m3, u3 = (a3 = e3.from, n3 = e3.to, t2 = b2.nodes[a3], r3 = b2.nodes[n3], i2 = t2.x + t2.w / 2, o2 = t2.y + t2.h, c3 = r3.x + r3.w / 2, m3 = ((h3 = r3.y) - o2) / 2, `M ${i2} ${o2} C ${i2} ${o2 + m3} ${c3} ${h3 - m3} ${c3} ${h3}`), _3 = "skipped" === R2(e3.to), p3 = N2 >= e3.phase && !_3;
      return (0, s.jsxs)("g", { children: [(0, s.jsx)("path", { d: u3, className: e_().wire, "data-skipped": _3 || void 0 }), (0, s.jsx)(l.PY1.path, { d: u3, className: e_().flow, initial: false, animate: { pathLength: +!!p3, opacity: +!!p3 }, transition: p3 && !d2 ? { pathLength: { duration: ex[e3.phase] / 1e3, ease: A.inOut }, opacity: { duration: 0.08 } } : { duration: 0 } })] }, `${e3.from}-${e3.to}`);
    }) }), (0, s.jsx)(ek, { box: b2.nodes.trigger, status: R2("trigger"), icon: ew("stripe-color"), title: "Invoice paid", sub: `${w2.customer}, ${w2.amount}` }), (0, s.jsx)(ek, { box: b2.nodes.lookup, status: R2("lookup"), icon: ew("hubspot-color"), title: "Find account in HubSpot", sub: "done" === R2("lookup") ? w2.plan : "Plan, seats and owner", meta: `${w2.ms.lookup} ms` }), (0, s.jsx)(ek, { box: b2.nodes.branch, status: R2("branch"), icon: (0, s.jsx)(ed.A, { size: 17, strokeWidth: 1.75, className: e_().glyph, "aria-hidden": "true" }), title: "Amount over $1,000", sub: "done" === R2("branch") ? w2.routed ? "Yes, alert the team" : "No, record only" : "Condition", meta: `${w2.ms.branch} ms` }), ey.map((e3) => {
      let a3 = R2(e3), n3 = { slack: { icon: ew("slack-color"), title: P2 ? "Slack" : "Post to #revenue", waiting: "Slack" }, linear: { icon: ew("linear-color"), title: P2 ? "Linear" : "Create Linear issue", waiting: "Onboarding team" }, warehouse: { icon: (0, s.jsx)(eh.A, { size: 16, strokeWidth: 1.75, className: e_().glyph, "aria-hidden": "true" }), title: P2 ? "Warehouse" : "Save to warehouse", waiting: "Postgres" } }[e3], t2 = "skipped" === a3 ? "Skipped" : "done" === a3 ? P2 ? `${w2.ms[e3]} ms` : ef[e3](w2) : "running" === a3 ? "Running" : P2 ? "Waiting" : n3.waiting;
      return (0, s.jsx)(ek, { box: b2.nodes[e3], compact: true, status: a3, icon: n3.icon, title: n3.title, sub: t2 }, e3);
    }), !P2 && (0, s.jsxs)("div", { className: e_().summary, style: { top: b2.summary, width: b2.width }, children: [(0, s.jsxs)("span", { className: e_().event, children: [(0, s.jsx)("code", { children: "invoice.paid" }), (0, s.jsxs)("span", { children: ["Run ", (0, s.jsx)("span", { className: e_().num, children: g2.count.toLocaleString("en-US") })] })] }), (0, s.jsx)(ec.N, { mode: "popLayout", initial: false, children: (0, s.jsx)(l.PY1.span, { className: e_().result, "data-done": N2 === eg || void 0, initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: f.T.duration.fast, ease: A.standard }, children: N2 === eg ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(k.A, { size: 14, strokeWidth: 2, "aria-hidden": "true" }), (0, s.jsxs)("span", { children: ["Completed in ", (0, s.jsxs)("span", { className: e_().num, children: [w2.total, " ms"] })] })] }) : 0 === N2 ? "Waiting for the next event" : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("i", { className: e_().spinner, "aria-hidden": "true" }), "Running"] }) }, N2 === eg ? `done-${g2.count}` : 0 === N2 ? "waiting" : "running") })] })] }) })] })] }) }) });
  }
  function ek({ box: e2, status: a2, icon: n2, title: t2, sub: r2, meta: i2, compact: o2 = false }) {
    return (0, s.jsxs)("div", { className: e_().node, "data-status": a2, "data-compact": o2 || void 0, style: { left: e2.x, top: e2.y, width: e2.w, height: e2.h }, children: [(0, s.jsx)("span", { className: e_().icon, children: n2 }), (0, s.jsxs)("span", { className: e_().text, children: [(0, s.jsx)("strong", { children: t2 }), (0, s.jsx)("small", { children: r2 })] }), (0, s.jsx)("span", { className: e_().state, children: (0, s.jsx)(ec.N, { mode: "popLayout", initial: false, children: (0, s.jsx)(l.PY1.span, { className: e_().stateInner, initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.6 }, transition: f.T.spring.snappy, children: "running" === a2 ? (0, s.jsx)("i", { className: e_().spinner, role: "img", "aria-label": "Running" }) : "done" === a2 ? (0, s.jsxs)(s.Fragment, { children: [i2 && (0, s.jsx)("span", { className: e_().meta, children: i2 }), (0, s.jsx)(k.A, { size: 14, strokeWidth: 2, className: e_().check, role: "img", "aria-label": "Done" })] }) : "skipped" === a2 ? (0, s.jsx)(em.A, { size: 14, strokeWidth: 2, className: e_().skip, role: "img", "aria-label": "Skipped" }) : (0, s.jsx)("i", { className: e_().pending, role: "img", "aria-label": "Waiting" }) }, a2) }) })] });
  }
  var eS = n(11362), eR = n.n(eS);
  let eA = [{ x: 0.1, y: 0.88, spread: 0.72 }, { x: 0.86, y: 0.12, spread: 0.66 }, { x: 0.16, y: 0.14, spread: 0.56 }, { x: 0.62, y: 0.62, spread: 0.5 }, { x: 0.94, y: 0.92, spread: 0.48 }, { x: 0.44, y: 0.3, spread: 0.34 }], eC = [{ name: "Linear", logo: "block-logos/linear.svg" }, { name: "Vercel", logo: "block-logos/vercel.svg" }, { name: "Raycast", logo: "block-logos/raycast.svg" }, { name: "Notion", logo: "block-logos/notion.svg" }, { name: "Figma", logo: "block-logos/figma.svg" }, { name: "Stripe", logo: "block-logos/stripe.svg" }, { name: "Loom", logo: "block-logos/loom.svg" }];
  function e$({ primaryAction: e2 = { label: "Download for Mac", doneLabel: "Download started" }, secondaryAction: a2 = { label: "Try it on the web", doneLabel: "Opening Cadence" }, animateIn: n2 = true, className: t2 }) {
    return (0, s.jsx)(o.x, { reducedMotion: "user", children: (0, s.jsxs)("section", { className: [M().hero, M().screen, eR().hero, t2].filter(Boolean).join(" "), children: [(0, s.jsx)(q, { className: eR().mesh, points: eA, grain: 0.55, speed: 0.45 }), (0, s.jsxs)(l.PY1.div, { className: eR().inner, variants: C, initial: !!n2 && "hidden", animate: "shown", children: [(0, s.jsx)(l.PY1.h1, { variants: $, className: [M().title, eR().title].join(" "), children: "Your week, planned before Monday" }), (0, s.jsxs)("div", { className: eR().row, children: [(0, s.jsx)(l.PY1.p, { variants: $, className: [M().description, eR().description].join(" "), children: "Cadence reads your tasks, meetings and focus goals, then books time for the work that matters. When plans change, it moves everything for you." }), (0, s.jsxs)(l.PY1.div, { variants: $, className: eR().cta, children: [(0, s.jsxs)("div", { className: eR().actions, children: [(0, s.jsx)(I, { action: e2, kind: "primary" }), (0, s.jsx)(I, { action: a2, kind: "secondary" })] }), (0, s.jsx)("p", { className: eR().fine, children: "Free for personal use. Teams from $8 a seat." })] })] }), (0, s.jsxs)(l.PY1.div, { variants: $, className: eR().brands, children: [(0, s.jsx)("p", { children: "Teams at these companies plan with Cadence" }), (0, s.jsx)("ul", { "aria-label": "Sample customers", children: eC.map((e3) => (0, s.jsxs)("li", { children: [(0, s.jsx)("i", { style: { maskImage: `url(${e3.logo})`, WebkitMaskImage: `url(${e3.logo})` }, "aria-hidden": "true" }), e3.name] }, e3.name)) })] })] })] }) });
  }
  function eL({ variant: e2 = "centered", animateIn: a2 = true, primaryAction: n2, secondaryAction: t2, title: r2, description: i2, announcement: o2, install: l2, media: c2, meta: d2, className: h2 }) {
    if (r2) return (0, s.jsx)(E, { layout: e2, title: r2, description: i2, announcement: o2, primaryAction: n2, secondaryAction: t2, install: l2, media: c2, meta: d2, animateIn: a2, className: h2 });
    let m2 = { primaryAction: n2 ?? void 0, secondaryAction: t2 ?? void 0 };
    return "split" === e2 ? (0, s.jsx)(eN, { animateIn: a2, className: h2, ...m2 }) : "minimal" === e2 ? (0, s.jsx)(e$, { animateIn: a2, className: h2, ...m2 }) : (0, s.jsx)(eo, { animateIn: a2, className: h2, ...m2 });
  }
  let eP = [{ value: "centered", label: "Screenshot" }, { value: "split", label: "Workflow" }, { value: "minimal", label: "Mesh" }];
  function eM({ variant: e2 = "centered" }) {
    let [a2, n2] = (0, t.useState)(e2);
    return (0, s.jsxs)("div", { className: M().preview, children: [(0, s.jsx)(eL, { variant: a2 }, a2), (0, s.jsx)("div", { className: M().switcher, children: (0, s.jsx)(r.A, { label: "Hero design", options: eP, value: a2, onValueChange: (e3) => n2(e3), className: M().switch }) })] });
  }
  let eF = eM;
}

__m(__module,__exports,__require);
}