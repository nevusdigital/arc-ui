/* activity-terrain (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(7008, ".root{--tone:var(--accent);--low:color-mix(in oklab,var(--surface-muted) 50%,var(--border-strong));box-sizing:border-box;width:min(100%,1180px);min-width:0;margin-inline:auto;container-type:inline-size;contain-intrinsic-inline-size:1180px;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root[data-metric=errors]{--tone:var(--danger)}\n.inner{display:grid;gap:16px;padding:16px 20px 20px}\n@container (max-width: 560px){.inner{gap:12px;padding:16px}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.rise{position:relative;display:inline-flex}\n.rise>span{display:inline-block;white-space:nowrap}\n.num{display:inline-flex;font-variant-numeric:tabular-nums}\n.num>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.header{display:grid;gap:2px;max-width:640px}\n.header h2{margin:0;font-size:var(--text-base);font-weight:500;line-height:1.4}\n.header p{margin:0;color:var(--text-secondary);font-size:13px}\n.toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}\n.reset{position:absolute;top:10px;right:10px;z-index:3;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text-secondary);font:inherit;font-weight:500;box-shadow:var(--shadow-resting);cursor:pointer;transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.reset:hover{background:var(--surface-muted);color:var(--foreground)}\n.reset:active{transform:scale(.97)}\n.reset[data-hidden]{opacity:0;visibility:hidden;transform:translateY(-4px);pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-standard),visibility 0s linear var(--duration-fast)}\n@media (prefers-reduced-motion:reduce){.peak,.ramp>span,.reset,.spark>span{transition-duration:0s}\n.viewport{position:relative;min-width:0}\n.body{display:grid;grid-template-columns:minmax(0,1fr) 224px;gap:20px}\n@container (max-width: 880px){.body{grid-template-columns:minmax(0,1fr);gap:16px}\n.stage{display:grid;gap:12px;min-width:0}\n.plot{position:relative;height:clamp(280px,44cqi,460px);border-radius:12px;overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;cursor:grab;outline:none}\n.plot[data-over]{cursor:pointer}\n.plot[data-dragging]{cursor:grabbing}\n.plot{height:280px}\n.canvas{position:absolute;inset:0;display:block;width:100%;height:100%}\n.legend{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 20px;color:var(--text-muted);font-size:var(--text-xs)}\n.scale{display:inline-flex;align-items:center;gap:8px}\n.ramp{display:inline-grid;grid-template-columns:repeat(6,18px);gap:2px}\n.ramp>span{height:8px;border-radius:2px;background:color-mix(in oklab,var(--tone) calc(var(--k) * 100%),var(--low));transition:background var(--duration-considered) var(--ease-standard)}\n.hint{margin:0}\n.hintTouch{display:none}\n.hintTouch{display:inline}\n.panel{position:absolute;top:0;left:0;z-index:2;box-sizing:border-box;width:208px;padding:10px 12px;border:1px solid var(--border);border-radius:12px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--text-secondary);font-size:var(--text-xs);pointer-events:none;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard);will-change:transform}\n.panel[data-show]{opacity:1;transition-duration:var(--duration-instant)}\n.panel{width:188px}\n.panelHead{display:flex;justify-content:space-between;gap:8px;margin:0;color:var(--foreground);font-weight:500;white-space:nowrap}\n.panelHead span+span{color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}\n.panelValue{margin:4px 0 8px;color:var(--foreground);font-size:var(--text-lg);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.02em;line-height:1.2;white-space:nowrap}\n.panelValue span{color:var(--text-muted);font-size:var(--text-xs);font-weight:400;letter-spacing:var(--tracking-body)}\n.panelRows{display:grid;gap:2px;margin:0}\n.panelRows div{display:flex;justify-content:space-between;gap:8px}\n.panelRows dd{margin:0;color:var(--foreground);font-variant-numeric:tabular-nums}\n.panelRows dd[data-tone=good]{color:var(--success)}\n.panelRows dd[data-tone=bad]{color:var(--danger)}\n.spark{display:grid;grid-template-columns:repeat(24,1fr);align-items:end;gap:1px;height:22px;margin-top:10px}\n.spark>span{height:calc(var(--v) * 100%);border-radius:1px;background:var(--border-strong);transition:height var(--duration-standard) var(--ease-standard),background var(--duration-fast) var(--ease-standard)}\n.spark>span[data-on]{background:var(--tone)}\n.stats{display:grid;align-content:start;min-width:0;margin:0;padding-left:20px;border-left:1px solid var(--border)}\n.stats{grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;padding:16px 0 0;border-top:1px solid var(--border);border-left:0}\n.stats{grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 16px}\n.stat{display:grid;align-content:start;gap:4px;min-width:0;padding:16px 0;border-top:1px solid var(--border)}\n.stat:first-child{padding-top:0;border-top:0}\n.stat:last-child .sub{min-height:2lh}\n.stat,.stat:first-child{padding:0;border-top:0}\n.stat:nth-child(2){order:3;grid-column:1/-1}\n.label{margin:0;color:var(--text-secondary)}\n.big{margin:2px 0 0;font-size:var(--text-2xl);font-weight:500;letter-spacing:-.02em;line-height:1.15}\n.big{font-size:var(--text-xl)}\n.mid{margin:0;font-size:var(--text-base);font-weight:500}\n.sub{margin:0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.delta{display:inline-flex;flex-wrap:wrap;align-items:center;gap:2px 4px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.delta[data-tone=good] .deltaIcon,.delta[data-tone=good] .deltaValue{color:var(--success)}\n.delta[data-tone=bad] .deltaIcon,.delta[data-tone=bad] .deltaValue{color:var(--danger)}\n.deltaIcon{display:inline-flex;transition:color var(--duration-standard) var(--ease-standard)}\n.deltaValue{font-weight:500;transition:color var(--duration-standard) var(--ease-standard)}\n.peaks{display:grid;gap:0;margin:2px -8px 0;padding:0;list-style:none}\n.peak{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:6px 12px;width:100%;padding:7px 8px;border:0;border-radius:8px;background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;transition:background var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.peak[aria-pressed=true]{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.peak:hover{background:var(--surface-muted)}\n.peak:active{transform:scale(.98)}\n.peakValue{color:var(--text-secondary)}\n@media (hover:none),(pointer:coarse){.hintFine{display:none}", {"root":"root","inner":"inner","srOnly":"srOnly","rise":"rise","num":"num","header":"header","toolbar":"toolbar","reset":"reset","peak":"peak","ramp":"ramp","spark":"spark","viewport":"viewport","body":"body","stage":"stage","plot":"plot","canvas":"canvas","legend":"legend","scale":"scale","hint":"hint","hintTouch":"hintTouch","panel":"panel","panelHead":"panelHead","panelValue":"panelValue","panelRows":"panelRows","stats":"stats","stat":"stat","sub":"sub","label":"label","big":"big","mid":"mid","delta":"delta","deltaIcon":"deltaIcon","deltaValue":"deltaValue","peaks":"peaks","peakValue":"peakValue","hintFine":"hintFine"});
A.reg(55858, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ActivityTerrain: () => e$, default: () => eA });
  var n = a(95155), r = a(12115), i = a(18310), s = a(80642), l = a(25354), o = a(9751), c = a(92298), d = a(66558), u = a(65024), h = a(7770);
  let m = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], p = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ], f = "Sep 14 to 20, 2026", y = (e2) => ({ d: Math.floor(e2 / 24), h: e2 % 24 }), x = (e2) => `${String(e2).padStart(2, "0")}:00`, v = (e2) => `${x(e2)} to ${x((e2 + 1) % 24)}`, b = (e2) => Math.round(e2).toLocaleString("en-US"), g = (e2) => `${e2 >= 0 ? "+" : "\u2212"}${Math.abs(100 * e2).toFixed(1)}%`, _ = (e2, t2, a2) => Math.exp(-((e2 - t2) ** 2) / (2 * a2 * a2)), M = (e2, t2, a2) => Math.min(1, Math.max(0, (e2 - t2) / (a2 - t2))), w = [0.93, 1, 1.03, 0.97, 0.85, 0.5, 0.44], j = [0.82, 1, 0.94, 0.9, 0.62, 0.05, 0.03], k = { 62: 560, 63: 214, 64: 46 };
  function N(e2, t2, a2) {
    let n2, r2 = (n2 = e2 >>> 0, () => {
      let e3 = n2 = n2 + 1831565813 >>> 0;
      return e3 = Math.imul(e3 ^ e3 >>> 15, 1 | e3), (((e3 ^= e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3)) ^ e3 >>> 14) >>> 0) / 4294967296;
    }), i2 = [], s2 = [], l2 = [];
    for (let e3 = 0; e3 < 168; e3++) {
      let { d: a3, h: n3 } = y(e3);
      i2.push(
        Math.round(
          (a3 >= 5 ? 0.08 + 0.46 * _(n3, 13, 3) + 0.3 * _(n3, 20.5, 1.8) : 0.05 + 0.2 * M(n3, 7.5, 9.5) * (1 - M(n3, 17, 19.5)) + 0.82 * _(n3, 10.3, 1.5) + 0.9 * _(n3, 14.6, 1.6) + 0.22 * _(n3, 20.6, 1.4)) * w[a3] * 4050 * t2.sessions * (0.94 + 0.12 * r2())
        )
      );
      let l3 = (0.02 + 0.85 * _(n3, 11, 1.3) + _(n3, 15.3, 1.5) + 0.15 * _(n3, 19, 1.2)) * j[a3] * (4 === a3 && n3 >= 14 ? 0.12 : 1);
      s2.push(
        Math.max(
          0,
          Math.round(36 * l3 * t2.deploys + (r2() - 0.5) * (l3 > 0.05 ? 4 : 0.9))
        )
      );
    }
    for (let e3 = 0; e3 < 168; e3++) {
      let n3 = e3 % 24, o2 = 85e-4 * i2[e3] * (0.8 + 0.4 * r2()) + (n3 > 0 ? 1.4 * s2[e3 - 1] : 0);
      l2.push(Math.round(o2 * t2.errors + (a2 ? k[e3] ?? 0 : 0)));
    }
    return { sessions: i2, deploys: s2, errors: l2 };
  }
  let $ = N(20260914, { sessions: 1, deploys: 1, errors: 1 }, true), A = N(20260907, { sessions: 0.928, deploys: 0.9, errors: 1.04 }, false), T = {
    sessions: {
      label: "Sessions",
      unit: "sessions",
      one: "session",
      tone: 0,
      upIsGood: true
    },
    deploys: {
      label: "Deploys",
      unit: "deploys",
      one: "deploy",
      tone: 0,
      upIsGood: true
    },
    errors: {
      label: "Errors",
      unit: "errors",
      one: "error",
      tone: 1,
      upIsGood: false
    }
  };
  function F(e2) {
    let t2 = $[e2], a2 = A[e2], n2 = Math.max(...t2), r2 = t2.reduce((e3, t3) => e3 + t3, 0), i2 = a2.reduce((e3, t3) => e3 + t3, 0), s2 = m.map(
      (e3, a3) => t2.slice(24 * a3, 24 * a3 + 24).reduce((e4, t3) => e4 + t3, 0)
    ), l2 = t2.reduce((e3, t3, a3) => {
      let { d: n3, h: r3 } = y(a3);
      return e3 + (n3 < 5 && r3 >= 9 && r3 < 18 ? t3 : 0);
    }, 0) / r2, o2 = t2.map((e3, t3) => ({ ...y(t3), i: t3, value: e3 })).sort((e3, t3) => t3.value - e3.value || e3.i - t3.i).slice(0, 3);
    return {
      key: e2,
      ...T[e2],
      values: t2,
      last: a2,
      norm: t2.map((e3) => e3 / n2),
      max: n2,
      total: r2,
      change: r2 / i2 - 1,
      days: s2,
      busiest: s2.indexOf(Math.max(...s2)),
      working: l2,
      top: o2
    };
  }
  let S = {
    sessions: F("sessions"),
    deploys: F("deploys"),
    errors: F("errors")
  }, E = Object.keys(S).map((e2) => ({ value: e2, label: S[e2].label })), z = Math.PI / 180, I = {
    yaw: -32 * z,
    narrowYaw: -50 * z,
    pitch: 30 * z,
    ty: 0.8640000000000001
  }, P = { yaw: -6 * z, pitch: 76 * z, zoom: 0.84 }, D = [10 * z, 84 * z], R = [90 * z, 90 * z], L = [0.7, 2.8], O = 1 / 240, V = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), C = (e2, t2, a2) => e2 + (t2 - e2) * a2, G = (e2, t2, a2) => {
    let n2 = V((a2 - e2) / (t2 - e2), 0, 1);
    return n2 * n2 * (3 - 2 * n2);
  }, q = (e2, t2) => (1 - 1 / (0.55 * e2 / t2 + 1)) * t2, W = (e2, [t2, a2], n2) => e2 < t2 ? t2 - q(t2 - e2, n2) : e2 > a2 ? a2 + q(e2 - a2, n2) : e2, U = (e2) => Math.atan2(Math.sin(e2), Math.cos(e2));
  function Y({ visualDuration: e2, bounce: t2 }) {
    let a2 = 2 * Math.PI / (1.2 * e2), n2 = a2 * a2;
    return { k: n2, c: 2 * V(1 - t2, 0.05, 1) * Math.sqrt(n2) };
  }
  let { spring: K } = h.T, H = {
    rise: Y({ visualDuration: 0.7, bounce: 0 }),
    morph: Y(K.morph),
    camera: Y({ ...K.smooth, visualDuration: 0.9 }),
    intro: Y({ ...K.smooth, visualDuration: 1.7 }),
    zoom: Y({ ...K.smooth, visualDuration: 0.36 }),
    back: Y({ ...K.smooth, visualDuration: 0.5 }),
    lift: Y(K.snappy),
    dim: Y({ ...K.smooth, visualDuration: 0.24 }),
    tone: Y({ ...K.smooth, visualDuration: 0.5 }),
    panel: Y({ visualDuration: 0.2, bounce: 0 }),
    frame: Y({ ...K.smooth, visualDuration: 0.6 })
  }, X = (e2, t2, a2) => ({ x: e2, v: 0, to: e2, cfg: t2, mode: "spring", eps: a2 });
  function Q(e2, t2, a2, n2) {
    e2.to = t2, e2.cfg = a2, e2.mode = "spring", n2 && (e2.x = t2, e2.v = 0);
  }
  let B = (e2) => (e2 /= 255) <= 0.04045 ? e2 / 12.92 : ((e2 + 0.055) / 1.055) ** 2.4, J = (e2) => 255 * V(e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * e2 ** (1 / 2.4) - 0.055, 0, 1);
  function Z([e2, t2, a2]) {
    let n2 = B(e2), r2 = B(t2), i2 = B(a2), s2 = Math.cbrt(0.4122214708 * n2 + 0.5363325363 * r2 + 0.0514459929 * i2), l2 = Math.cbrt(0.2119034982 * n2 + 0.6806995451 * r2 + 0.1073969566 * i2), o2 = Math.cbrt(0.0883024619 * n2 + 0.2817188376 * r2 + 0.6299787005 * i2);
    return [
      0.2104542553 * s2 + 0.793617785 * l2 - 0.0040720468 * o2,
      1.9779984951 * s2 - 2.428592205 * l2 + 0.4505937099 * o2,
      0.0259040371 * s2 + 0.7827717662 * l2 - 0.808675766 * o2
    ];
  }
  let ee = (e2, t2, a2) => {
    let n2 = Z(e2), r2 = Z(t2);
    return (function([e3, t3, a3]) {
      let n3 = (e3 + 0.3963377774 * t3 + 0.2158037573 * a3) ** 3, r3 = (e3 - 0.1055613458 * t3 - 0.0638541728 * a3) ** 3, i2 = (e3 - 0.0894841775 * t3 - 1.291485548 * a3) ** 3;
      return [
        J(4.0767416621 * n3 - 3.3077115913 * r3 + 0.2309699292 * i2),
        J(-1.2684380046 * n3 + 2.6097574011 * r3 - 0.3413193965 * i2),
        J(-0.0041960863 * n3 - 0.7034186147 * r3 + 1.707614701 * i2)
      ];
    })([C(n2[0], r2[0], a2), C(n2[1], r2[1], a2), C(n2[2], r2[2], a2)]);
  };
  function et(e2, t2, a2) {
    for (let n2 = 0; n2 <= 64; n2++) {
      let r2 = ee(t2, a2, (n2 / 64) ** 0.9);
      e2.set(r2, 3 * n2);
    }
  }
  let ea = (e2, t2, a2, n2 = 1) => n2 >= 1 ? `rgb(${0 | e2} ${0 | t2} ${0 | a2})` : `rgb(${0 | e2} ${0 | t2} ${0 | a2} / ${n2.toFixed(3)})`, en = Uint8Array.from({ length: 168 }, (e2, t2) => Math.floor(t2 / 24)), er = Uint8Array.from({ length: 168 }, (e2, t2) => t2 % 24), ei = Float64Array.from(
    { length: 168 },
    (e2, t2) => er[t2] / 23 * 0.78 + en[t2] / 6 * 0.22
  ), es = (e2) => e2 - 11.5, el = (e2) => e2 - 3, eo = (e2) => 24 * e2.d + e2.h, ec = (e2) => `${String(e2).padStart(2, "0")}:00`;
  var ed = a(7008), eu = a.n(ed);
  let { spring: eh, duration: em, ease: ep } = h.T, ef = [...ep.enter], ey = [
    { value: "perspective", label: "Perspective" },
    { value: "top", label: "Top view" }
  ], ex = Array.from({ length: 24 }, (e2, t2) => t2), ev = Array.from({ length: 7 }, (e2, t2) => t2), eb = Math.PI / 180, eg = (e2, t2) => !!e2 && !!t2 && e2.d === t2.d && e2.h === t2.h, e_ = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2));
  function eM(e2, t2) {
    let a2 = (({ d: e3, h: t3 }) => 24 * e3 + t3)(t2), n2 = e2.values[a2], r2 = e2.last[a2], i2 = r2 ? `, ${g(n2 / r2 - 1)} on last week` : "";
    return `${p[t2.d]} ${v(t2.h)}: ${b(n2)} ${1 === n2 ? e2.one : e2.unit}${i2}.`;
  }
  function ew({ text: e2, className: t2 }) {
    let a2 = (0, i.I)();
    return (0, n.jsx)("span", {
      className: [eu().rise, t2].filter(Boolean).join(" "),
      children: (0, n.jsx)(s.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          l.PY1.span,
          {
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.3em" },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: em.instant } },
            transition: { duration: a2 ? em.instant : em.standard, ease: ef },
            children: e2
          },
          e2
        )
      })
    });
  }
  function ej({ change: e2, upIsGood: t2 }) {
    let a2 = (0, i.I)(), r2 = e2 >= 0 === t2;
    return (0, n.jsxs)("span", {
      className: eu().delta,
      "data-tone": r2 ? "good" : "bad",
      children: [
        (0, n.jsx)(l.PY1.span, {
          className: eu().deltaIcon,
          initial: false,
          animate: { rotate: e2 >= 0 ? 0 : 90 },
          transition: a2 ? { duration: 0 } : eh.snappy,
          children: (0, n.jsx)(o.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, n.jsx)(ew, { text: g(e2), className: eu().deltaValue }),
        (0, n.jsx)("span", {
          className: eu().deltaContext,
          children: "vs last week"
        })
      ]
    });
  }
  function ek({ metric: e2, cell: t2 }) {
    let a2 = (({ d: e3, h: t3 }) => 24 * e3 + t3)(t2), r2 = e2.values[a2], i2 = e2.last[a2], s2 = e2.values.slice(24 * t2.d, 24 * t2.d + 24), l2 = Math.max(1, ...s2), o2 = i2 ? r2 / i2 - 1 : 0, c2 = o2 >= 0 === e2.upIsGood;
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsxs)("p", {
          className: eu().panelHead,
          children: [
            (0, n.jsx)("span", { children: p[t2.d] }),
            (0, n.jsx)("span", { children: v(t2.h) })
          ]
        }),
        (0, n.jsxs)("p", {
          className: eu().panelValue,
          children: [
            b(r2),
            " ",
            (0, n.jsx)("span", { children: 1 === r2 ? e2.one : e2.unit })
          ]
        }),
        (0, n.jsxs)("dl", {
          className: eu().panelRows,
          children: [
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("dt", { children: "Last week" }),
                (0, n.jsx)("dd", { children: b(i2) })
              ]
            }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("dt", { children: "Change" }),
                (0, n.jsx)("dd", {
                  "data-tone": !i2 || 5e-4 > Math.abs(o2) ? void 0 : c2 ? "good" : "bad",
                  children: i2 ? g(o2) : "New"
                })
              ]
            }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("dt", { children: ["Share of ", m[t2.d]] }),
                (0, n.jsxs)("dd", {
                  children: [
                    (e2.days[t2.d] ? r2 / e2.days[t2.d] * 100 : 0).toFixed(1),
                    "%"
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: eu().spark,
          "aria-hidden": "true",
          children: s2.map(
            (e3, a3) => (0, n.jsx)(
              "span",
              {
                "data-on": a3 === t2.h || void 0,
                style: { "--v": Math.max(0.06, e3 / l2) }
              },
              a3
            )
          )
        })
      ]
    });
  }
  let eN = (0, r.memo)(function({ metric: e2 }) {
    return (0, n.jsx)("div", {
      className: eu().srOnly,
      children: (0, n.jsxs)("table", {
        children: [
          (0, n.jsxs)("caption", {
            children: [e2.label, " per hour, ", f, ", workspace time"]
          }),
          (0, n.jsx)("thead", {
            children: (0, n.jsxs)("tr", {
              children: [
                (0, n.jsx)("th", { scope: "col", children: "Day" }),
                ex.map(
                  (e3) => (0, n.jsx)("th", { scope: "col", children: x(e3) }, e3)
                )
              ]
            })
          }),
          (0, n.jsx)("tbody", {
            children: ev.map(
              (t2) => (0, n.jsxs)(
                "tr",
                {
                  children: [
                    (0, n.jsx)("th", { scope: "row", children: p[t2] }),
                    ex.map(
                      (a2) => (0, n.jsx)(
                        "td",
                        { children: b(e2.values[24 * t2 + a2]) },
                        a2
                      )
                    )
                  ]
                },
                t2
              )
            )
          })
        ]
      })
    });
  });
  function e$() {
    let e2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), t2 = `${e2}-title`, a2 = `${e2}-hint`, [i2, s2] = (0, r.useState)("sessions"), [l2, o2] = (0, r.useState)("perspective"), [h2, v2] = (0, r.useState)(null), [_2, M2] = (0, r.useState)(null), [w2, j2] = (0, r.useState)(null), [k2, N2] = (0, r.useState)(false), [$2, A2] = (0, r.useState)(""), T2 = S[i2], F2 = (0, r.useRef)(null), z2 = (0, r.useRef)(null), q2 = (0, r.useRef)(null), Y2 = (0, r.useRef)(null), K2 = (0, r.useRef)(null);
    function B2(e3) {
      let t3 = e3 && eg(e3, _2) ? null : e3;
      M2(t3), K2.current?.setFocus(t3), t3 ? (j2(t3), A2(`Focused on ${eM(T2, t3)}`)) : _2 && A2("Returned to the whole week.");
    }
    let J2 = (0, r.useEffectEvent)((e3) => B2(e3));
    function Z2(e3) {
      v2(e3), e3 && j2(e3), K2.current?.setActive(e3);
    }
    (0, r.useEffect)(() => {
      let e3 = F2.current, t3 = z2.current, a3 = q2.current, n2 = Y2.current;
      if (!e3 || !t3 || !a3 || !n2) return;
      let r2 = S.sessions, i3 = (function({ root: e4, plot: t4, canvas: a4, panel: n3 }, r3, i4) {
        let s3 = a4.getContext("2d"), l3 = window.matchMedia("(prefers-reduced-motion: reduce)"), o3 = l3.matches, c2 = 0, d2 = 0, u2 = 1, h3 = false, p2 = false, f2 = false, x2 = false, v3 = false, b2 = null, g2 = null, _3 = -1, M3 = false, w3 = 208, j3 = 150, k3 = Float64Array.from(i4.norm), N3 = new Float64Array(168), $3 = new Float64Array(168), A3 = new Float64Array(168), T3 = new Float64Array(168), F3 = new Float64Array(168), S2 = new Float64Array(168), E2 = new Float64Array(168), z3 = new Float64Array(168), q3 = new Float64Array(168), Y3 = new Float64Array(168), K3 = H.rise, B3 = () => h3 ? I.narrowYaw : I.yaw, J3 = X(P.yaw, H.camera, 1e-4), Z3 = X(P.pitch, H.camera, 1e-4), ed3 = X(P.zoom, H.camera, 1e-4), eu2 = X(0, H.camera, 1e-3), eh3 = X(I.ty, H.camera, 1e-3), em3 = X(0, H.camera, 1e-3), ep2 = X(0, H.camera, 1e-4), ef2 = X(i4.tone, H.tone, 1e-3), ey2 = X(0, H.panel, 0.05), ex2 = X(0, H.panel, 0.05), ev2 = X(0, H.frame, 0.01), eb2 = X(0, H.frame, 0.05), eg2 = X(0, H.frame, 0.05), e_2 = [J3, Z3, ed3, eu2, eh3, em3, ep2, ef2, ey2, ex2, ev2, eb2, eg2], eM2 = Array.from({ length: 168 }, (e10, t5) => t5), ew2 = new Float64Array(168), ej2 = new Float64Array(4032), ek2 = new Uint8Array(168), eN2 = new Float64Array(336), e$2 = new Float64Array(16), eA2 = new Float64Array(8), eT = new Float32Array(195), eF = new Float32Array(195), eS = [255, 255, 255], eE = [20, 20, 20], ez = [120, 120, 120], eI = [245, 245, 245], eP = [230, 230, 230], eD = "sans-serif", eR = document.createElement("canvas");
        eR.width = eR.height = 1;
        let eL = eR.getContext("2d", { willReadFrequently: true });
        function eO() {
          let t5 = getComputedStyle(e4), a5 = (e10, a6) => (function(e11, t6) {
            if (!eL || !e11) return t6;
            eL.clearRect(0, 0, 1, 1), eL.fillStyle = "#000", eL.fillStyle = e11, eL.fillRect(0, 0, 1, 1);
            let a7 = eL.getImageData(0, 0, 1, 1).data;
            return [a7[0], a7[1], a7[2]];
          })(t5.getPropertyValue(e10).trim(), a6);
          eS = a5("--surface", eS), eE = a5("--foreground", eE), ez = a5("--text-muted", ez);
          let n4 = a5("--surface-muted", eI), r4 = a5("--border-strong", eP);
          eP = a5("--border", eP), eI = ee(eS, n4, 0.75);
          let i5 = ee(n4, r4, 0.5);
          et(eT, i5, a5("--accent", eE)), et(eF, i5, a5("--danger", [200, 60, 50])), eD = t5.fontFamily || eD;
        }
        let eV = {
          cx: 0,
          cy: 0,
          cz: 0,
          rx: 1,
          rz: 0,
          ux: 0,
          uy: 1,
          uz: 0,
          fx: 0,
          fy: 0,
          fz: -1,
          focal: 1,
          ox: 0,
          oy: 0,
          dist: 42
        }, eC = false;
        function eG(e10, t5, a5, n4, r4) {
          let i5 = e10 - eV.cx, s4 = t5 - eV.cy, l4 = a5 - eV.cz, o4 = i5 * eV.fx + s4 * eV.fy + l4 * eV.fz, c3 = eV.focal / Math.max(o4, 0.5);
          return n4[r4] = eV.ox + (i5 * eV.rx + l4 * eV.rz) * c3, n4[r4 + 1] = eV.oy - (i5 * eV.ux + s4 * eV.uy + l4 * eV.uz) * c3, o4;
        }
        let eq = new Float64Array(8);
        function eW(e10, t5, a5, n4) {
          s3 && (eG(...e10, eq, 0), eG(...t5, eq, 2), eG(...a5, eq, 4), eG(...n4, eq, 6), s3.beginPath(), s3.moveTo(eq[0], eq[1]), s3.lineTo(eq[2], eq[3]), s3.lineTo(eq[4], eq[5]), s3.lineTo(eq[6], eq[7]), s3.closePath());
        }
        function eU(e10, t5) {
          s3 && (eG(...e10, eq, 0), eG(...t5, eq, 2), s3.beginPath(), s3.moveTo(eq[0], eq[1]), s3.lineTo(eq[2], eq[3]));
        }
        function eY() {
          if (!s3 || !c2 || !d2) return;
          !(function() {
            let e11 = ep2.x, t6 = Math.sin(J3.x), a6 = Math.cos(J3.x), n4 = Math.sin(Z3.x), r5 = Math.cos(Z3.x), i6 = 42 * (1 + 2.8 * e11), s4 = I.ty * (1 - e11), l5 = 5.4 * (1 - 0.975 * e11), u3 = C(B3(), 0, e11), m2 = Math.sin(u3), p4 = Math.cos(u3), f4 = i6 * m2 * r5, y3 = s4 + i6 * n4, x3 = i6 * p4 * r5, v4 = 1 / 0, b3 = -1 / 0, g3 = 1 / 0, _4 = -1 / 0, M4 = (e12, t7, a7) => {
              let i7 = e12 - f4, s5 = t7 - y3, l6 = a7 - x3, o4 = Math.max(0.5, -i7 * m2 * r5 - s5 * n4 - l6 * p4 * r5), c3 = (i7 * p4 - l6 * m2) / o4, d3 = (-i7 * m2 * n4 + s5 * r5 - l6 * p4 * n4) / o4;
              v4 = Math.min(v4, c3), b3 = Math.max(b3, c3), g3 = Math.min(g3, d3), _4 = Math.max(_4, d3);
            };
            for (let e12 = 0; e12 < 4; e12++)
              M4((1 & e12 ? 1 : -1) * 13.3, 0, (2 & e12 ? 1 : -1) * 4.7);
            for (let e12 = 0; e12 < 168; e12++)
              M4(es(er[e12]), Math.max(A3[e12], 0) * l5, el(en[e12]));
            let w4 = Math.max(
              1,
              Math.min(
                (c2 - 2 * (h3 ? 18 : 26)) / (b3 - v4),
                (d2 - 36) / (_4 - g3)
              )
            ), j4 = c2 / 2 - w4 * (v4 + b3) / 2, k4 = d2 / 2 + w4 * (g3 + _4) / 2;
            !eC || o3 ? (Q(ev2, w4, H.frame, true), Q(eb2, j4, H.frame, true), Q(eg2, k4, H.frame, true), eC = true) : (Math.abs(ev2.to - w4) > 0.01 || Math.abs(eb2.to - j4) > 0.05 || Math.abs(eg2.to - k4) > 0.05) && (ev2.to = w4, eb2.to = j4, eg2.to = k4, e1()), Object.assign(eV, {
              cx: eu2.x + i6 * t6 * r5,
              cy: eh3.x * (1 - e11) + i6 * n4,
              cz: em3.x + i6 * a6 * r5,
              rx: a6,
              rz: -t6,
              ux: -t6 * n4,
              uy: r5,
              uz: -a6 * n4,
              fx: -t6 * r5,
              fy: -n4,
              fz: -a6 * r5,
              focal: ev2.x * ed3.x,
              ox: eb2.x,
              oy: eg2.x,
              dist: i6
            });
          })(), s3.setTransform(u2, 0, 0, u2, 0, 0), s3.clearRect(0, 0, c2, d2);
          let e10 = ep2.x, t5 = b2 ?? g2, a5 = Math.sin(J3.x), r4 = Math.cos(J3.x), i5 = G(0.15, 0.45, a5), l4 = G(-0.15, -0.45, r4), p3 = i5 > 0.5 ? 1 : -1, f3 = l4 > 0.5 ? -1 : 1;
          if (s3.fillStyle = ea(...eI), eW(
            [-12.3, 0, -3.8],
            [12.3, 0, -3.8],
            [12.3, 0, 3.8],
            [-12.3, 0, 3.8]
          ), s3.fill(), t5) {
            let e11 = es(t5.h), a6 = el(t5.d), n4 = 12.55 * p3, r5 = 4.05 * f3;
            s3.fillStyle = ea(...eE, 0.05), eW(
              [Math.min(e11, n4), 0, a6 - 0.5],
              [Math.max(e11, n4), 0, a6 - 0.5],
              [Math.max(e11, n4), 0, a6 + 0.5],
              [Math.min(e11, n4), 0, a6 + 0.5]
            ), s3.fill(), eW(
              [e11 - 0.5, 0, Math.min(a6, r5)],
              [e11 + 0.5, 0, Math.min(a6, r5)],
              [e11 + 0.5, 0, Math.max(a6, r5)],
              [e11 - 0.5, 0, Math.max(a6, r5)]
            ), s3.fill(), s3.strokeStyle = ea(...eE, 0.55), s3.lineWidth = 1, eU([e11, 0, a6], [n4, 0, a6]), s3.stroke(), eU([e11, 0, a6], [e11, 0, r5]), s3.stroke();
          }
          for (let e11 = 0; e11 < 168; e11++)
            ew2[e11] = (es(er[e11]) - eV.cx) ** 2 + (el(en[e11]) - eV.cz) ** 2;
          eM2.sort((e11, t6) => ew2[t6] - ew2[e11]);
          let y2 = V(ef2.x, 0, 1);
          for (let a6 of eM2)
            !(function(e11, t6, a7, n4) {
              if (!s3) return;
              let r5 = en[e11], i6 = er[e11], l5 = es(i6), o4 = el(r5), c3 = G(0, 1, (t6 - 0.3 * ei[e11]) / 0.7), d3 = V(N3[e11], 0, 1.25), u3 = Math.max(0.035, 5.4 * d3 * (1 - 0.975 * c3)), h4 = F3[e11], m2 = h4 + u3, p4 = l5 - 0.4, f4 = l5 + 0.4, y3 = o4 - 0.4, x3 = o4 + 0.4;
              for (let e12 = 0; e12 < 8; e12++)
                eA2[e12] = eG(
                  1 & e12 ? f4 : p4,
                  2 & e12 ? m2 : h4,
                  4 & e12 ? x3 : y3,
                  e$2,
                  2 * e12
                );
              h4 > 5e-3 && (s3.fillStyle = ea(...eE, 0.1 * V(h4 / 0.42, 0, 1)), eW([p4, 0, y3], [f4, 0, y3], [f4, 0, x3], [p4, 0, x3]), s3.fill());
              let v4 = 64 * V(d3, 0, 1), b3 = Math.floor(v4), g3 = Math.min(64, b3 + 1), _4 = v4 - b3, M4 = [0, 0, 0];
              for (let e12 = 0; e12 < 3; e12++) {
                let t7 = C(eT[3 * b3 + e12], eT[3 * g3 + e12], _4), n5 = C(eF[3 * b3 + e12], eF[3 * g3 + e12], _4);
                M4[e12] = C(t7, n5, a7);
              }
              let w4 = 0.2 * V(((eA2[0] + eA2[7]) / 2 - (eV.dist - 6)) / 34, 0, 1), j4 = 0.72 * V(z3[e11], 0, 1) + w4, k4 = 0, $4 = (t7, a8, n5, r6, i7) => {
                let l6, o5, c4, d4 = (l6 = M4[0] * (1 - i7), o5 = M4[1] * (1 - i7), c4 = M4[2] * (1 - i7), ea(C(l6, eS[0], j4), C(o5, eS[1], j4), C(c4, eS[2], j4)));
                s3.fillStyle = d4, s3.strokeStyle = d4, s3.beginPath(), s3.moveTo(e$2[2 * t7], e$2[2 * t7 + 1]), s3.lineTo(e$2[2 * a8], e$2[2 * a8 + 1]), s3.lineTo(e$2[2 * n5], e$2[2 * n5 + 1]), s3.lineTo(e$2[2 * r6], e$2[2 * r6 + 1]), s3.closePath(), s3.fill(), s3.stroke();
                let u4 = 24 * e11 + 8 * k4;
                ej2[u4] = e$2[2 * t7], ej2[u4 + 1] = e$2[2 * t7 + 1], ej2[u4 + 2] = e$2[2 * a8], ej2[u4 + 3] = e$2[2 * a8 + 1], ej2[u4 + 4] = e$2[2 * n5], ej2[u4 + 5] = e$2[2 * n5 + 1], ej2[u4 + 6] = e$2[2 * r6], ej2[u4 + 7] = e$2[2 * r6 + 1], k4++;
              };
              (s3.lineWidth = 0.6, s3.lineJoin = "round", eV.cx < p4) ? $4(0, 2, 6, 4, 0.24 - 0.2 * 0.52) : eV.cx > f4 && $4(1, 3, 7, 5, 0.344), eV.cz < y3 ? $4(0, 1, 3, 2, 0.324) : eV.cz > x3 && $4(4, 5, 7, 6, 0.24 - 0.084), eV.cy > m2 && $4(2, 3, 7, 6, 0), ek2[e11] = k4, eG(l5, m2, o4, eN2, 2 * e11), n4 && n4.d === r5 && n4.h === i6 && (eK.set([
                e$2[4],
                e$2[5],
                e$2[6],
                e$2[7],
                e$2[14],
                e$2[15],
                e$2[12],
                e$2[13]
              ]), eH(0.9, false));
            })(a6, e10, y2, t5);
          t5 && eH(0.5, true), (function(e11, t6, a6) {
            if (s3) {
              for (let [t7, n4] of (s3.textAlign = "center", s3.textBaseline = "middle", [
                [-1, 1 - e11],
                [1, e11]
              ])) {
                if (n4 < 0.02) continue;
                let e12 = 13.25 * t7;
                eG(e12, 0, el(0), eq, 0), eG(e12, 0, el(6), eq, 2);
                let r5 = eQ(6, 24, 13, [1, 2, 3]) || 6;
                for (let t8 = 0; t8 < 7; t8++) {
                  let i6 = a6?.d === t8;
                  !i6 && (t8 % r5 || a6 && r5 > 1 && Math.abs(t8 - a6.d) < r5) || eX(m[t8], e12, 0, el(t8), n4, i6);
                }
              }
              for (let [e12, n4] of [
                [-1, t6],
                [1, 1 - t6]
              ]) {
                if (n4 < 0.02) continue;
                let t7 = 4.55 * e12;
                eG(es(0), 0, t7, eq, 0), eG(es(23), 0, t7, eq, 2);
                let r5 = eQ(23, 34, 13, [3]) > 0, i6 = eQ(23, r5 ? 34 : 17, 13, [3, 6, 12]) || 12;
                for (let e13 = 0; e13 < 24; e13++) {
                  let s4 = a6?.h === e13;
                  !s4 && (e13 % i6 || a6 && Math.abs(e13 - a6.h) < 0.67 * i6) || eX(
                    r5 || s4 ? ec(e13) : String(e13).padStart(2, "0"),
                    es(e13),
                    0,
                    t7,
                    n4,
                    s4
                  );
                }
              }
            }
          })(i5, l4, t5), (function(e11) {
            if (!e11) {
              M3 = false;
              return;
            }
            let t6 = eo(e11), a6 = eN2[2 * t6], r5 = eN2[2 * t6 + 1], i6 = a6 + 22;
            i6 + w3 > c2 - 8 && (i6 = a6 - 22 - w3), i6 = V(i6, 8, Math.max(8, c2 - w3 - 8));
            let s4 = r5 - j3 - 16;
            s4 < 8 && (s4 = r5 - 0.45 * j3), s4 = V(s4, 8, Math.max(8, d2 - j3 - 8)), ey2.to = i6, ex2.to = s4, !M3 || o3 ? (ey2.x = i6, ex2.x = s4, ey2.v = ex2.v = 0, M3 = true) : (Math.abs(ey2.x - i6) > 0.05 || Math.abs(ex2.x - s4) > 0.05) && e1(), n3.style.transform = `translate3d(${ey2.x.toFixed(2)}px, ${ex2.x.toFixed(2)}px, 0)`;
          })(t5);
        }
        let eK = new Float64Array(8);
        function eH(e10, t5) {
          s3 && (s3.strokeStyle = ea(...eE, e10), s3.lineWidth = 1.25, s3.setLineDash(t5 ? [3, 3] : []), s3.beginPath(), s3.moveTo(eK[0], eK[1]), s3.lineTo(eK[2], eK[3]), s3.lineTo(eK[4], eK[5]), s3.lineTo(eK[6], eK[7]), s3.closePath(), s3.stroke(), s3.setLineDash([]));
        }
        function eX(e10, t5, a5, n4, r4, i5) {
          if (!s3 || r4 < 0.02) return;
          eG(t5, a5, n4, eq, 0);
          let l4 = eq[0], o4 = eq[1];
          if (i5) {
            s3.font = `500 11px ${eD}`;
            let t6 = s3.measureText(e10).width;
            s3.fillStyle = ea(...eE, r4), s3.beginPath(), s3.roundRect(l4 - t6 / 2 - 7, o4 - 10, t6 + 14, 20, 10), s3.fill(), s3.fillStyle = ea(...eS, r4);
          } else s3.font = `400 11px ${eD}`, s3.fillStyle = ea(...ez, r4);
          s3.fillText(e10, l4, o4 + 0.5);
        }
        function eQ(e10, t5, a5, n4) {
          let r4 = (eq[2] - eq[0]) / e10, i5 = (eq[3] - eq[1]) / e10, s4 = Math.hypot(r4, i5) || 1e-6, l4 = Math.abs(r4) / s4 * t5 + Math.abs(i5) / s4 * a5 + 6;
          return n4.find((e11) => s4 * e11 >= l4) ?? 0;
        }
        let eB = (e10) => e10 === Z3 ? p2 ? R : D : e10 === J3 ? p2 ? [0, 0] : null : e10 === ed3 ? L : null, eJ = 0, eZ = 0;
        function e0(e10) {
          eJ = 0;
          let t5 = Math.min(0.05, Math.max(0, (e10 - eZ) / 1e3));
          eZ = e10;
          let a5 = (function(e11) {
            let t6 = !!e6 || !!e32;
            for (let a7 = 0; a7 < 168; a7++) T3[a7] > 0 && (T3[a7] -= e11, t6 = true);
            let a6 = Math.max(1, Math.ceil(e11 / O)), n4 = e11 / a6;
            for (let e12 = 0; e12 < a6; e12++) {
              for (let e13 of e_2) {
                "spring" === e13.mode ? (e13.v += (-e13.cfg.k * (e13.x - e13.to) - e13.cfg.c * e13.v) * n4, e13.x += e13.v * n4) : "coast" === e13.mode && (e13.x += e13.v * n4, e13.v *= Math.exp(-3.2 * n4));
                let t7 = "coast" === e13.mode ? eB(e13) : null;
                t7 && (e13.x < t7[0] || e13.x > t7[1]) && (e13.mode = "spring", e13.to = V(e13.x, t7[0], t7[1]), e13.cfg = H.back);
              }
              for (let e13 = 0; e13 < 168; e13++)
                T3[e13] <= 0 && ($3[e13] += (-K3.k * (N3[e13] - A3[e13]) - K3.c * $3[e13]) * n4, N3[e13] += $3[e13] * n4), S2[e13] += (-H.lift.k * (F3[e13] - E2[e13]) - H.lift.c * S2[e13]) * n4, F3[e13] += S2[e13] * n4, q3[e13] += (-H.dim.k * (z3[e13] - Y3[e13]) - H.dim.c * q3[e13]) * n4, z3[e13] += q3[e13] * n4;
            }
            for (let e12 of e_2)
              if ("held" !== e12.mode) {
                if ("coast" === e12.mode) {
                  0.01 > Math.abs(e12.v) ? (e12.mode = "spring", e12.to = e12.x, e12.v = 0) : t6 = true;
                  continue;
                }
                Math.abs(e12.x - e12.to) < e12.eps && Math.abs(e12.v) < 10 * e12.eps ? (e12.x = e12.to, e12.v = 0) : t6 = true;
              }
            for (let e12 = 0; e12 < 168; e12++)
              1e-4 > Math.abs(N3[e12] - A3[e12]) && 1e-3 > Math.abs($3[e12]) ? (N3[e12] = A3[e12], $3[e12] = 0) : t6 = true, 1e-4 > Math.abs(F3[e12] - E2[e12]) && 1e-3 > Math.abs(S2[e12]) ? (F3[e12] = E2[e12], S2[e12] = 0) : t6 = true, 1e-4 > Math.abs(z3[e12] - Y3[e12]) && 1e-3 > Math.abs(q3[e12]) ? (z3[e12] = Y3[e12], q3[e12] = 0) : t6 = true;
            return t6;
          })(t5);
          eY(), a5 && !eJ && x2 && !document.hidden && (eJ = requestAnimationFrame(e0));
        }
        function e1() {
          eJ || !x2 || document.hidden || (eZ = performance.now(), eJ = requestAnimationFrame(e0));
        }
        function e22() {
          let e10 = b2 ?? g2;
          for (let t5 = 0; t5 < 168; t5++) {
            let a5 = en[t5], n4 = er[t5], r4 = !!e10 && a5 === e10.d && n4 === e10.h;
            Y3[t5] = e10 && a5 !== e10.d && n4 !== e10.h ? b2 ? 0.36 : 0.5 : 0, E2[t5] = 0.42 * !!r4, o3 && (z3[t5] = Y3[t5], F3[t5] = E2[t5], q3[t5] = S2[t5] = 0);
          }
          e1();
        }
        function e5() {
          v3 || (v3 = true, r3.onMoved(true));
        }
        function e42() {
          if (f2) return;
          f2 = true, K3 = H.rise;
          for (let e11 = 0; e11 < 168; e11++)
            A3[e11] = k3[e11], o3 ? (N3[e11] = k3[e11], T3[e11] = 0) : T3[e11] = 0.8 * ei[e11];
          let e10 = o3 ? H.camera : H.intro;
          p2 || (Q(J3, B3(), e10, o3), Q(Z3, I.pitch, e10, o3)), g2 || Q(ed3, 1, e10, o3), e1();
        }
        let e6 = null, e32 = null, e8 = /* @__PURE__ */ new Map(), e7 = (e10) => {
          let a5 = t4.getBoundingClientRect();
          return { x: e10.clientX - a5.left, y: e10.clientY - a5.top };
        }, e9 = () => 1.1 * Math.PI / Math.max(360, c2);
        function te(e10, t5) {
          for (let a5 = 167; a5 >= 0; a5--) {
            let n4 = eM2[a5];
            for (let a6 = 0; a6 < ek2[n4]; a6++) {
              let r4 = 24 * n4 + 8 * a6, i5 = 0, s4 = 0;
              for (let a7 = 0; a7 < 4; a7++) {
                let n5 = ej2[r4 + 2 * a7], l4 = ej2[r4 + 2 * a7 + 1], o4 = (ej2[r4 + (a7 + 1) % 4 * 2] - n5) * (t5 - l4) - (ej2[r4 + (a7 + 1) % 4 * 2 + 1] - l4) * (e10 - n5);
                o4 > 0 ? i5++ : o4 < 0 && s4++;
              }
              if (!i5 || !s4) return n4;
            }
          }
          return -1;
        }
        function tt(e10) {
          e10 !== _3 && (_3 = e10, b2 = e10 < 0 ? null : y(e10), t4.toggleAttribute("data-over", e10 >= 0), e22(), r3.onHover(b2));
        }
        function ta(e10, t5) {
          let a5 = eB(e10) ?? [-1 / 0, 1 / 0];
          t5 = o3 ? 0 : V(t5, -14, 14), e10.x < a5[0] || e10.x > a5[1] ? (e10.mode = "spring", e10.to = V(e10.x, a5[0], a5[1]), e10.cfg = H.back, e10.v = t5, o3 && (e10.x = e10.to, e10.v = 0)) : Math.abs(t5) > 0.05 ? (e10.mode = "coast", e10.v = t5) : (e10.mode = "spring", e10.to = e10.x, e10.v = 0);
        }
        function tn(e10) {
          if ("mouse" === e10.pointerType && 0 !== e10.button) return;
          let a5 = e7(e10);
          e8.set(e10.pointerId, a5);
          try {
            t4.setPointerCapture(e10.pointerId);
          } catch {
          }
          if (e42(), 2 === e8.size) {
            let [e11, a6] = [...e8.values()];
            e32 = { d0: Math.hypot(e11.x - a6.x, e11.y - a6.y) || 1, z0: ed3.x }, e6 = null, t4.removeAttribute("data-dragging");
            return;
          }
          if (e8.size > 2) return;
          let n4 = "coast" === J3.mode || "coast" === Z3.mode;
          n4 && (J3.mode = Z3.mode = "held", J3.v = Z3.v = 0, J3.to = J3.x, Z3.to = Z3.x), e6 = {
            id: e10.pointerId,
            x0: a5.x,
            y0: a5.y,
            yaw0: J3.x,
            pitch0: Z3.x,
            moved: false,
            touch: "touch" === e10.pointerType,
            caught: n4,
            samples: [{ t: e10.timeStamp, ...a5 }]
          };
        }
        function tr(e10) {
          let a5 = e7(e10);
          if (e8.has(e10.pointerId) && e8.set(e10.pointerId, a5), e32 && e8.size >= 2) {
            let [e11, t5] = [...e8.values()];
            ed3.mode = "held", ed3.v = 0, ed3.x = ed3.to = W(
              e32.z0 * Math.hypot(e11.x - t5.x, e11.y - t5.y) / e32.d0,
              L,
              0.5
            ), e5(), e1();
            return;
          }
          if (e6 && e6.id === e10.pointerId) {
            if (!e6.moved && Math.hypot(a5.x - e6.x0, a5.y - e6.y0) > (e6.touch ? 8 : 4) && (Object.assign(e6, {
              moved: true,
              x0: a5.x,
              y0: a5.y,
              yaw0: J3.x,
              pitch0: Z3.x
            }), tt(-1), t4.setAttribute("data-dragging", "")), !e6.moved)
              return;
            for (J3.mode = "held", J3.v = 0, J3.x = J3.to = W(
              e6.yaw0 - (a5.x - e6.x0) * e9(),
              eB(J3) ?? [-1 / 0, 1 / 0],
              0.5
            ), e6.touch || (Z3.mode = "held", Z3.v = 0, Z3.x = Z3.to = W(e6.pitch0 + (a5.y - e6.y0) * 55e-4, eB(Z3) ?? D, 0.4)), e6.samples.push({ t: e10.timeStamp, x: a5.x, y: a5.y }); e6.samples.length > 2 && e10.timeStamp - e6.samples[0].t > 100; )
              e6.samples.shift();
            p2 || e5(), e1();
            return;
          }
          "mouse" !== e10.pointerType || e8.size || tt(te(a5.x, a5.y));
        }
        function ti(e10) {
          let a5 = e7(e10), n4 = "pointercancel" === e10.type;
          if (e8.delete(e10.pointerId), e32) {
            e8.size < 2 && (e32 = null, Q(ed3, V(ed3.x, ...L), H.back, o3), e1()), e6 = null;
            return;
          }
          if (!e6 || e6.id !== e10.pointerId) return;
          let i5 = e6;
          if (e6 = null, t4.removeAttribute("data-dragging"), i5.moved) {
            let t5 = i5.samples, a6 = t5[0], n5 = t5[t5.length - 1], r4 = (n5.t - a6.t) / 1e3, s4 = r4 > 5e-3 && e10.timeStamp - n5.t < 60;
            ta(J3, s4 ? -(n5.x - a6.x) / r4 * e9() : 0), ta(Z3, s4 && !i5.touch ? (n5.y - a6.y) / r4 * 55e-4 : 0);
          } else if (i5.caught && (ta(J3, 0), ta(Z3, 0)), !n4) {
            let t5 = te(a5.x, a5.y);
            "mouse" === e10.pointerType && tt(t5), r3.onPick(t5 < 0 ? null : y(t5));
          }
          e1();
        }
        function ts(e10) {
          "mouse" !== e10.pointerType || e6 || tt(-1);
        }
        function tl(e10) {
          if (!e10.ctrlKey && document.activeElement !== t4) return;
          let a5 = e10.deltaY * (1 === e10.deltaMode ? 16 : 1), n4 = V(ed3.to * Math.exp(-a5 * (e10.ctrlKey ? 0.01 : 18e-4)), ...L);
          !e10.ctrlKey && 1e-4 > Math.abs(n4 - ed3.to) || (e10.preventDefault(), e42(), Q(ed3, n4, H.zoom, o3), e5(), e1());
        }
        let to = new ResizeObserver(() => {
          let e10 = t4.getBoundingClientRect(), n4 = h3;
          c2 = e10.width, d2 = e10.height, u2 = Math.min(2, window.devicePixelRatio || 1), (h3 = c2 < 560) === n4 || !f2 || v3 || p2 || Q(J3, B3(), H.camera, o3), a4.width = Math.round(c2 * u2), a4.height = Math.round(d2 * u2), eC = false, eY();
        }), tc = new ResizeObserver(() => {
          w3 = n3.offsetWidth || w3, j3 = n3.offsetHeight || j3;
        }), td = new IntersectionObserver(
          ([e10]) => {
            (x2 = e10.isIntersecting) && e10.intersectionRatio >= 0.3 && e42(), x2 && e1();
          },
          { threshold: [0, 0.3, 0.6] }
        ), tu = new MutationObserver(() => {
          eO(), eY();
        }), th = window.matchMedia("(prefers-color-scheme: dark)"), tm = () => {
          eO(), eY();
        }, tp = () => {
          (o3 = l3.matches) && (e42(), e22());
        }, tf = () => {
          document.hidden || e1();
        };
        return eO(), to.observe(t4), tc.observe(n3), td.observe(t4), tu.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["data-theme", "data-accent", "class", "style"]
        }), th.addEventListener("change", tm), l3.addEventListener("change", tp), document.addEventListener("visibilitychange", tf), document.fonts?.ready.then(() => eY()), t4.addEventListener("pointerdown", tn), t4.addEventListener("pointermove", tr), t4.addEventListener("pointerup", ti), t4.addEventListener("pointercancel", ti), t4.addEventListener("pointerleave", ts), t4.addEventListener("wheel", tl, { passive: false }), o3 && (J3.x = J3.to = B3(), Z3.x = Z3.to = I.pitch, ed3.x = ed3.to = 1, e42()), {
          setValues(e10, t5, a5) {
            if (k3.set(e10), Q(ef2, t5, H.tone, o3), g2 && Q(eh3, Math.max(I.ty, 5.4 * k3[eo(g2)] * 0.5), H.camera, o3), !f2)
              return void e42();
            K3 = H.morph;
            let n4 = Math.hypot(23, 6);
            for (let e11 = 0; e11 < 168; e11++) {
              let t6 = Math.abs($3[e11]) > 0.02;
              if (A3[e11] = k3[e11], o3) {
                N3[e11] = k3[e11], $3[e11] = 0, T3[e11] = 0;
                continue;
              }
              let r4 = en[e11], i5 = er[e11];
              T3[e11] = t6 ? 0 : a5 ? Math.hypot(i5 - a5.h, r4 - a5.d) / n4 * 0.36 : 0.32 * ei[e11];
            }
            e1();
          },
          setView(e10) {
            p2 = e10, e42(), J3.x = U(J3.x), J3.to = U(J3.to), Q(ep2, +!!p2, H.camera, o3), Q(J3, p2 ? 0 : B3(), H.camera, o3), Q(Z3, p2 ? R[0] : I.pitch, H.camera, o3), g2 || Q(ed3, 1, H.camera, o3), e1();
          },
          setFocus(e10) {
            if (g2 = e10, e42(), e10) {
              let t5 = eo(e10);
              Q(eu2, es(e10.h), H.camera, o3), Q(em3, el(e10.d), H.camera, o3), Q(eh3, Math.max(I.ty, 5.4 * k3[t5] * 0.5), H.camera, o3), Q(
                ed3,
                V(Math.max(ed3.to, h3 ? 1.8 : 1.5), ...L),
                H.camera,
                o3
              );
            } else
              Q(eu2, 0, H.camera, o3), Q(em3, 0, H.camera, o3), Q(eh3, I.ty, H.camera, o3), Q(ed3, 1, H.camera, o3);
            e22();
          },
          setActive(e10) {
            _3 = e10 ? eo(e10) : -1, b2 = e10, e22();
          },
          orbit(e10, t5) {
            p2 || (e42(), Q(J3, J3.to + e10, H.camera, o3), Q(Z3, V(Z3.to + t5, ...D), H.camera, o3), e5(), e1());
          },
          zoom(e10) {
            e42(), Q(ed3, V(ed3.to * e10, ...L), H.zoom, o3), e5(), e1();
          },
          reset() {
            J3.x = U(J3.x), Q(J3, p2 ? 0 : B3(), H.camera, o3), Q(Z3, p2 ? R[0] : I.pitch, H.camera, o3), Q(ed3, 1, H.camera, o3), v3 = false, r3.onMoved(false), e1();
          },
          destroy() {
            cancelAnimationFrame(eJ), to.disconnect(), tc.disconnect(), td.disconnect(), tu.disconnect(), th.removeEventListener("change", tm), l3.removeEventListener("change", tp), document.removeEventListener("visibilitychange", tf), t4.removeEventListener("pointerdown", tn), t4.removeEventListener("pointermove", tr), t4.removeEventListener("pointerup", ti), t4.removeEventListener("pointercancel", ti), t4.removeEventListener("pointerleave", ts), t4.removeEventListener("wheel", tl);
          }
        };
      })(
        { root: e3, plot: t3, canvas: a3, panel: n2 },
        {
          onHover(e4) {
            v2(e4), e4 && j2(e4);
          },
          onPick: (e4) => J2(e4),
          onMoved: N2
        },
        { norm: r2.norm, tone: r2.tone }
      );
      return K2.current = i3, () => {
        i3.destroy(), K2.current = null;
      };
    }, []);
    let ed2 = h2 ?? _2, eh2 = T2.top[0], em2 = `3D bar chart of ${T2.unit} by day and hour for ${f}. ${b(T2.total)} ${T2.unit} in total, ${g(T2.change)} on last week. Peak on ${p[eh2.d]} at ${x(eh2.h)} with ${b(eh2.value)}. ${p[T2.busiest]} is the busiest day. Every value is listed in the table that follows.`;
    return (0, n.jsx)("section", {
      ref: F2,
      className: eu().root,
      "aria-labelledby": t2,
      "data-metric": i2,
      children: (0, n.jsxs)("div", {
        className: eu().inner,
        children: [
          (0, n.jsxs)("header", {
            className: eu().header,
            children: [
              (0, n.jsx)("h2", { id: t2, children: "The shape of your week" }),
              (0, n.jsxs)("p", {
                children: [
                  "Hourly sessions, deploys and errors for ",
                  f,
                  ", in workspace time."
                ]
              })
            ]
          }),
          (0, n.jsxs)("div", {
            className: eu().toolbar,
            children: [
              (0, n.jsx)(d.A, {
                label: "Metric",
                options: E,
                value: i2,
                onValueChange: function(e3) {
                  if (e3 === i2) return;
                  let t3 = S[e3];
                  s2(e3), K2.current?.setValues(t3.norm, t3.tone, h2 ?? _2);
                  let a3 = t3.top[0];
                  A2(
                    `Showing ${t3.unit}. ${b(t3.total)} this week, ${g(t3.change)} on last week. Peak ${p[a3.d]} at ${x(a3.h)} with ${b(a3.value)}.`
                  );
                }
              }),
              (0, n.jsx)(d.A, {
                label: "Camera",
                options: ey,
                value: l2,
                onValueChange: function(e3) {
                  e3 !== l2 && (o2(e3), K2.current?.setView("top" === e3), A2(
                    "top" === e3 ? "Top view: a flat heatmap of the week." : "Perspective: bar heights show activity."
                  ));
                }
              })
            ]
          }),
          (0, n.jsxs)("div", {
            className: eu().body,
            children: [
              (0, n.jsxs)("div", {
                className: eu().stage,
                children: [
                  (0, n.jsxs)("div", {
                    className: eu().viewport,
                    children: [
                      (0, n.jsxs)("div", {
                        ref: z2,
                        className: eu().plot,
                        tabIndex: 0,
                        role: "group",
                        "aria-label": `${T2.label} terrain`,
                        "aria-describedby": a2,
                        onKeyDown: (e3) => {
                          let t3 = K2.current;
                          if (!t3) return;
                          let a3 = {
                            ArrowUp: [-1, 0],
                            ArrowDown: [1, 0],
                            ArrowLeft: [0, -1],
                            ArrowRight: [0, 1]
                          };
                          if ("Escape" === e3.key) {
                            if (_2) B2(null);
                            else {
                              if (!h2) return;
                              Z2(null), A2("");
                            }
                            e3.preventDefault();
                            return;
                          }
                          if ("+" === e3.key || "=" === e3.key || "-" === e3.key || "_" === e3.key) {
                            e3.preventDefault(), t3.zoom(
                              "+" === e3.key || "=" === e3.key ? 1.25 : 0.8
                            );
                            return;
                          }
                          if ("Enter" === e3.key || " " === e3.key) {
                            let t4 = h2 ?? _2;
                            if (!t4) return;
                            e3.preventDefault(), B2(t4);
                            return;
                          }
                          if (e3.shiftKey && e3.key in a3) {
                            e3.preventDefault();
                            let [n3, r3] = a3[e3.key];
                            t3.orbit(-(15 * r3) * eb, -(8 * n3) * eb);
                            return;
                          }
                          if (!(e3.key in a3) && "Home" !== e3.key && "End" !== e3.key)
                            return;
                          e3.preventDefault();
                          let n2 = h2 ?? _2, r2 = T2.top[0];
                          if (n2) {
                            let [t4, i3] = a3[e3.key] ?? [0, 0];
                            r2 = {
                              d: e_(n2.d + t4, 0, 6),
                              h: "Home" === e3.key ? 0 : "End" === e3.key ? 23 : e_(n2.h + i3, 0, 23)
                            };
                          } else r2 = { d: r2.d, h: r2.h };
                          Z2(r2), A2(eM(T2, r2));
                        },
                        onFocus: (e3) => {
                          if (h2 || _2 || !e3.currentTarget.matches(":focus-visible"))
                            return;
                          let t3 = { d: T2.top[0].d, h: T2.top[0].h };
                          Z2(t3), A2(eM(T2, t3));
                        },
                        onBlur: () => {
                          h2 && Z2(null);
                        },
                        children: [
                          (0, n.jsx)("canvas", {
                            ref: q2,
                            className: eu().canvas,
                            role: "img",
                            "aria-label": em2
                          }),
                          (0, n.jsx)("div", {
                            ref: Y2,
                            className: eu().panel,
                            "data-show": ed2 ? "" : void 0,
                            "aria-hidden": "true",
                            children: w2 && (0, n.jsx)(ek, { metric: T2, cell: w2 })
                          })
                        ]
                      }),
                      (0, n.jsxs)("button", {
                        type: "button",
                        className: eu().reset,
                        onClick: function() {
                          K2.current?.reset(), B2(null), N2(false);
                        },
                        "data-hidden": k2 || _2 ? void 0 : "",
                        "aria-hidden": !k2 && !_2 || void 0,
                        tabIndex: k2 || _2 ? void 0 : -1,
                        children: [
                          (0, n.jsx)(c.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Reset view"
                        ]
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: eu().legend,
                    children: [
                      (0, n.jsxs)("span", {
                        className: eu().scale,
                        "aria-hidden": "true",
                        children: [
                          "Fewer",
                          (0, n.jsx)("span", {
                            className: eu().ramp,
                            children: [0, 1, 2, 3, 4, 5].map(
                              (e3) => (0, n.jsx)(
                                "span",
                                { style: { "--k": e3 / 5 } },
                                e3
                              )
                            )
                          }),
                          "More"
                        ]
                      }),
                      (0, n.jsxs)("p", {
                        id: a2,
                        className: eu().hint,
                        children: [
                          (0, n.jsx)("span", {
                            className: eu().hintFine,
                            children: "Drag to orbit, pinch to zoom, click a bar to fly in."
                          }),
                          (0, n.jsx)("span", {
                            className: eu().hintTouch,
                            children: "Swipe sideways to orbit, tap a bar to fly in."
                          }),
                          (0, n.jsx)("span", {
                            className: eu().srOnly,
                            children: " Arrow keys move between hours and days, Enter focuses a bar, Shift with arrow keys orbits, plus and minus zoom, Escape clears."
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsxs)("aside", {
                className: eu().stats,
                "aria-label": "Week summary",
                children: [
                  (0, n.jsxs)("div", {
                    className: eu().stat,
                    children: [
                      (0, n.jsx)("p", {
                        className: eu().label,
                        children: (0, n.jsx)(ew, {
                          text: `${T2.label} this week`
                        })
                      }),
                      (0, n.jsx)("p", {
                        className: eu().big,
                        children: (0, n.jsx)("span", {
                          className: eu().num,
                          children: (0, n.jsx)(u.q, {
                            value: T2.total,
                            animateOnView: true
                          })
                        })
                      }),
                      (0, n.jsx)(ej, {
                        change: T2.change,
                        upIsGood: T2.upIsGood
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: eu().stat,
                    children: [
                      (0, n.jsx)("p", {
                        className: eu().label,
                        children: "Peak hours"
                      }),
                      (0, n.jsx)("ul", {
                        className: eu().peaks,
                        children: T2.top.map((e3, t3) => {
                          let a3 = eg(e3, _2);
                          return (0, n.jsx)(
                            "li",
                            {
                              children: (0, n.jsxs)("button", {
                                type: "button",
                                className: eu().peak,
                                "aria-pressed": a3,
                                onClick: () => B2({ d: e3.d, h: e3.h }),
                                "aria-label": `${p[e3.d]} ${x(e3.h)}, ${b(e3.value)} ${T2.unit}. ${a3 ? "Return to the whole week" : "Fly to this hour"}`,
                                children: [
                                  (0, n.jsx)(ew, {
                                    text: `${m[e3.d]} ${x(e3.h)}`,
                                    className: eu().peakWhen
                                  }),
                                  (0, n.jsx)("span", {
                                    className: `${eu().peakValue} ${eu().num}`,
                                    children: (0, n.jsx)(u.q, {
                                      value: e3.value
                                    })
                                  })
                                ]
                              })
                            },
                            t3
                          );
                        })
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: eu().stat,
                    children: [
                      (0, n.jsx)("p", {
                        className: eu().label,
                        children: "Busiest day"
                      }),
                      (0, n.jsx)("p", {
                        className: eu().mid,
                        children: (0, n.jsx)(ew, { text: p[T2.busiest] })
                      }),
                      (0, n.jsxs)("p", {
                        className: eu().sub,
                        children: [
                          (0, n.jsx)("span", {
                            className: eu().num,
                            children: (0, n.jsx)(u.q, {
                              value: T2.days[T2.busiest]
                            })
                          }),
                          " ",
                          T2.unit,
                          ", ",
                          (0, n.jsx)("span", {
                            className: eu().num,
                            children: (0, n.jsx)(u.q, {
                              value: Math.round(1e3 * T2.working) / 10,
                              decimals: 1,
                              suffix: "%"
                            })
                          }),
                          " in working hours"
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)("p", {
            className: eu().srOnly,
            "aria-live": "polite",
            children: $2
          }),
          (0, n.jsx)(eN, { metric: T2 })
        ]
      })
    });
  }
  let eA = e$;
}

__m(__module,__exports,__require);
});
A.cssFor("activity-terrain", [7008]);
A.item("activity-terrain", {entry:55858, export:"ActivityTerrain", kind:"block", tier:"pro", unresolved:[]});
})();