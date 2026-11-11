/* charge-session (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(45442, ".root{--cs-accent:var(--accent);--cs-on-accent:var(--accent-foreground);--cs-well:color-mix(in oklab,var(--foreground) 5%,var(--surface-muted));--cs-shell:var(--surface);--cs-shell-edge:color-mix(in oklab,var(--foreground) 22%,transparent);--cs-sheen:transparent;--cs-cable:color-mix(in oklab,var(--foreground) 15%,var(--surface));--cs-cell:color-mix(in oklab,var(--foreground) 7%,transparent);--cs-m1:color-mix(in oklab,var(--foreground) 10%,var(--surface));--cs-m2:color-mix(in oklab,var(--foreground) 3%,var(--surface));--cs-m3:color-mix(in oklab,var(--foreground) 12%,var(--surface));--cs-m4:color-mix(in oklab,var(--foreground) 5%,var(--surface));--cs-m5:color-mix(in oklab,var(--foreground) 14%,var(--surface));--cs-post-edge:color-mix(in oklab,var(--foreground) 16%,transparent);--cs-screen:color-mix(in oklab,var(--foreground) 88%,var(--surface));container-type:inline-size;position:relative;width:100%;min-width:0;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body);-webkit-tap-highlight-color:transparent}\n:root[data-theme=dark] .root{--cs-well:color-mix(in oklab,var(--foreground) 4%,var(--surface-muted));--cs-shell:var(--surface-raised);--cs-shell-edge:color-mix(in oklab,var(--foreground) 20%,transparent);--cs-sheen:color-mix(in oklab,var(--foreground) 12%,transparent);--cs-cable:color-mix(in oklab,var(--foreground) 20%,var(--surface));--cs-cell:color-mix(in oklab,var(--foreground) 6%,transparent);--cs-m1:color-mix(in oklab,var(--foreground) 14%,var(--surface));--cs-m2:color-mix(in oklab,var(--foreground) 22%,var(--surface));--cs-m3:color-mix(in oklab,var(--foreground) 12%,var(--surface));--cs-m4:color-mix(in oklab,var(--foreground) 19%,var(--surface));--cs-m5:color-mix(in oklab,var(--foreground) 13%,var(--surface));--cs-post-edge:color-mix(in oklab,var(--foreground) 12%,transparent);--cs-screen:var(--background)}\n@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .root{--cs-well:color-mix(in oklab,var(--foreground) 4%,var(--surface-muted));--cs-shell:var(--surface-raised);--cs-shell-edge:color-mix(in oklab,var(--foreground) 20%,transparent);--cs-sheen:color-mix(in oklab,var(--foreground) 12%,transparent);--cs-cable:color-mix(in oklab,var(--foreground) 20%,var(--surface));--cs-cell:color-mix(in oklab,var(--foreground) 6%,transparent);--cs-m1:color-mix(in oklab,var(--foreground) 14%,var(--surface));--cs-m2:color-mix(in oklab,var(--foreground) 22%,var(--surface));--cs-m3:color-mix(in oklab,var(--foreground) 12%,var(--surface));--cs-m4:color-mix(in oklab,var(--foreground) 19%,var(--surface));--cs-m5:color-mix(in oklab,var(--foreground) 13%,var(--surface));--cs-post-edge:color-mix(in oklab,var(--foreground) 12%,transparent);--cs-screen:var(--background)}\n.root[data-dragging] .limitLine{stroke-opacity:.9}\n.root[data-dragging] .handle:after{opacity:.9}\n.root[data-dragging] .pill{transform:scale(1.08);background:var(--foreground);border-color:var(--foreground);color:var(--background)}\n.card{display:grid;gap:var(--space-4);min-width:0;padding:var(--space-6);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface)}\n@container (min-width: 640px){.card{padding:var(--space-8);gap:var(--space-6)}\n@container (max-width: 420px){.card{padding:var(--space-4)}\n.header{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);min-width:0}\n.titles{display:grid;gap:2px;min-width:0}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);overflow-wrap:anywhere}\n.location{margin:0;font-size:var(--text-sm);color:var(--text-secondary);overflow-wrap:anywhere}\n.charge{display:grid;justify-items:end;gap:2px;flex:none}\n.soc{display:inline-block;min-width:3.2ch;text-align:right;font-family:var(--font-display);font-size:var(--text-4xl);font-weight:400;letter-spacing:var(--tracking-display);line-height:1;font-variant-numeric:tabular-nums}\n.soc{font-size:var(--text-5xl)}\n.soc{font-size:var(--text-3xl)}\n.status{display:inline-flex;align-items:center;gap:6px;font-size:var(--text-sm);color:var(--text-secondary);white-space:nowrap}\n.status svg{flex:none;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.status[data-mode=charging] svg{color:var(--cs-accent)}\n@media (prefers-reduced-motion:reduce){.actionLabel,.action,.handle:after,.limitLine,.pill,.status svg{transition:none}\n.hero{position:relative;container-type:inline-size;padding-top:36px;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:ew-resize}\n.hero{padding-top:32px;--hero-pad:32px}\n.heroSvg{display:block;width:100%;height:auto;aspect-ratio:1000/240;overflow:visible}\n.heroSvg :is(.post,.nub,.shell,.cell,.front,.sheen,.limitLine){vector-effect:non-scaling-stroke}\n.m1{stop-color:var(--cs-m1)}\n.m2{stop-color:var(--cs-m2)}\n.m3{stop-color:var(--cs-m3)}\n.m4{stop-color:var(--cs-m4)}\n.m5{stop-color:var(--cs-m5)}\n.post{stroke:var(--cs-post-edge);stroke-width:1}\n.nub,.shell{fill:var(--cs-shell);stroke:var(--cs-shell-edge);stroke-width:1.5}\n.cell{stroke:var(--cs-cell);stroke-width:1}\n.front{stroke:var(--cs-on-accent);stroke-width:2}\n.sheen{fill:none;stroke:var(--cs-sheen);stroke-width:1;stroke-linecap:round}\n.limitLine{stroke:var(--foreground);stroke-width:1.5;stroke-dasharray:4 4;stroke-opacity:.55;transition:stroke-opacity var(--duration-fast) var(--ease-standard)}\n.screen{fill:var(--cs-screen)}\n.led{fill:var(--cs-accent)}\n.holster{fill:var(--cs-screen);opacity:.85}\n.cable{fill:none;stroke:var(--cs-cable);stroke-width:14;stroke-linecap:round}\n.core{fill:none;stroke:var(--cs-accent);stroke-width:3;stroke-linecap:round}\n.well{fill:var(--cs-well)}\n.fill{fill:var(--cs-accent)}\n.beyond{fill:var(--cs-cell)}\n.packets{pointer-events:none}\n.packet{fill:var(--cs-accent)}\n.packet[data-in=in]{fill:var(--cs-on-accent)}\n.handle{position:absolute;top:0;left:0;display:grid;justify-items:center;width:64px;height:44px;transform:translateX(calc(var(--x, 80) * 1cqw - 50%));cursor:ew-resize;touch-action:none}\n.handle:after{content:\"\";position:absolute;top:26px;left:calc(50% - .75px);width:1.5px;height:calc(var(--hero-pad, 36px) - 26px + 2cqw);background:var(--foreground);opacity:.55;pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.handle:hover .pill{background:var(--surface-muted);border-color:var(--foreground)}\n.handle:focus-visible:not([data-pointer]) .pill{background:var(--surface-muted);border-color:var(--foreground)}\n.handle[data-pointer]:focus-visible{outline:none!important}\n.pill{display:inline-grid;place-items:center;min-width:48px;height:26px;padding:0 var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-pill);background:var(--surface-raised);color:var(--foreground);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;translate:clamp(calc(24px - var(--x, 80) * 1cqw),0px,calc(100cqw - 24px - var(--x, 80) * 1cqw)) 0;transition:transform var(--duration-spring) var(--ease-spring),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n.lower{display:grid;gap:var(--space-4);min-width:0}\n.lower{grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:var(--space-6);align-items:stretch}\n.curve{display:grid;gap:var(--space-2);min-width:0}\n.curveHead{display:flex;align-items:baseline;justify-content:space-between;gap:var(--space-3)}\n.curveTitle{font-size:var(--text-sm);font-weight:500}\n.curveAt{font-size:var(--text-sm);color:var(--text-muted);font-variant-numeric:tabular-nums;white-space:nowrap}\n.plot{position:relative;aspect-ratio:2/1;min-width:0;margin-bottom:22px;container-type:size;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:ew-resize}\n.plot{aspect-ratio:5/2}\n.plotSvg{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:visible}\n.plotSvg :is(path,line){vector-effect:non-scaling-stroke}\n.grid{stroke:var(--border-subtle);stroke-width:1}\n.axis{stroke:var(--border);stroke-width:1}\n.areaTop{stop-color:var(--cs-accent);stop-opacity:.2}\n.areaBottom{stop-color:var(--cs-accent);stop-opacity:.02}\n.curveLine{fill:none;stroke:var(--border-strong);stroke-width:1.5;stroke-linejoin:round}\n.curveDone{fill:none;stroke:var(--cs-accent);stroke-width:2;stroke-linejoin:round}\n.curveBeyond{fill:color-mix(in oklab,var(--foreground) 3%,transparent)}\n.curveLimit{stroke:var(--foreground);stroke-width:1;stroke-dasharray:4 4;stroke-opacity:.5}\n.xLabel,.yLabel{position:absolute;font-size:var(--text-xs);color:var(--text-muted);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}\n.yLabel{left:0;transform:translateY(calc(-100% - 4px))}\n.xLabel{top:calc(96% + 6px);transform:translateX(-50%)}\n.xLabel[data-edge=start]{left:0;transform:none}\n.xLabel[data-edge=end]{right:0;transform:none}\n.dot{position:absolute;top:0;left:0;width:12px;height:12px;border:2px solid var(--surface);border-radius:var(--radius-pill);background:var(--cs-accent);transform:translate(calc(var(--x, 0) * 1cqw - 50%),calc(var(--y, 0) * 1cqh - 50%));pointer-events:none}\n.stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin:0;border:1px solid var(--border);border-radius:calc(var(--radius-surface) - var(--space-3));overflow:hidden}\n.stats{grid-template-rows:1fr 1fr}\n.stat{display:grid;gap:2px;align-content:center;min-width:0;padding:var(--space-3) var(--space-4)}\n.stat:nth-child(odd){border-right:1px solid var(--border-subtle)}\n.stat:nth-child(-n+2){border-bottom:1px solid var(--border-subtle)}\n.stat dt{font-size:var(--text-xs);color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.stat dd{margin:0;font-size:var(--text-lg);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}\n.stat{padding:var(--space-4)}\n.stat dd{font-size:var(--text-xl)}\n.stat{padding:var(--space-3)}\n.stat dd{font-size:var(--text-base)}\n.footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3) var(--space-4);padding-top:var(--space-4);border-top:1px solid var(--border-subtle)}\n.hint{margin:0;flex:1 1 220px;font-size:var(--text-sm);color:var(--text-muted)}\n.action{display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);height:var(--control-height-md);padding:0 20px;border:1px solid transparent;border-radius:var(--radius-control);background:var(--foreground);color:var(--background);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;transition:transform var(--duration-spring) var(--ease-spring),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n.action[data-mode=charging]{background:var(--surface);color:var(--foreground);border-color:var(--border-strong)}\n@media (hover:hover) and (pointer:fine){.action[data-mode=charging]:hover{background:var(--surface-muted)}\n.action:not([data-mode=charging]):hover{background:color-mix(in oklab,var(--foreground) 88%,var(--background))}\n.action:active{transform:scale(.97)}\n.action{width:100%}\n.actionIcon{display:inline-grid;place-items:center;width:16px;height:16px}\n.actionLabels{display:inline-grid}\n.actionLabel{grid-area:1/1;visibility:hidden;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard);white-space:nowrap}\n.actionLabel[data-active]{visibility:visible;opacity:1}\n.sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}", {"root":"root","limitLine":"limitLine","handle":"handle","pill":"pill","card":"card","header":"header","titles":"titles","title":"title","location":"location","charge":"charge","soc":"soc","status":"status","actionLabel":"actionLabel","action":"action","hero":"hero","heroSvg":"heroSvg","post":"post","nub":"nub","shell":"shell","cell":"cell","front":"front","sheen":"sheen","m1":"m1","m2":"m2","m3":"m3","m4":"m4","m5":"m5","screen":"screen","led":"led","holster":"holster","cable":"cable","core":"core","well":"well","fill":"fill","beyond":"beyond","packets":"packets","packet":"packet","lower":"lower","curve":"curve","curveHead":"curveHead","curveTitle":"curveTitle","curveAt":"curveAt","plot":"plot","plotSvg":"plotSvg","grid":"grid","axis":"axis","areaTop":"areaTop","areaBottom":"areaBottom","curveLine":"curveLine","curveDone":"curveDone","curveBeyond":"curveBeyond","curveLimit":"curveLimit","xLabel":"xLabel","yLabel":"yLabel","dot":"dot","stats":"stats","stat":"stat","footer":"footer","hint":"hint","actionIcon":"actionIcon","actionLabels":"actionLabels","sr":"sr"});
A.reg(49804, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "zap",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
          key: "1v7up4"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(86701, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { ChargeSessionDemo: () => R, default: () => C });
  var s = r(95155), a = r(12115), i = r(49804), n = r(40852), l = r(51811);
  let c = {
    name: "battery-full",
    size: 24,
    node: [
      ["path", { d: "M10 10v4", key: "1mb2ec" }],
      ["path", { d: "M14 10v4", key: "1nt88p" }],
      ["path", { d: "M22 14v-4", key: "14q9d5" }],
      ["path", { d: "M6 10v4", key: "1n77qd" }],
      [
        "rect",
        { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }
      ]
    ]
  };
  c.node;
  let o = (0, l.A)(c);
  var d = r(92298), h = r(45442), u = r.n(h);
  let m = "M 84 176 C 140 238 168 120 212 120", x = 32, g = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), _ = (e2) => {
    let t2 = g(e2, 0, 1);
    return t2 * t2 * (3 - 2 * t2);
  };
  function p(e2, t2) {
    return e2 < 0.1 ? 0.62 + 0.38 * _(e2 / 0.1) : e2 <= t2 ? 1 : 0.06 + 0.94 * Math.exp(-3.2 * Math.pow((e2 - t2) / Math.max(0.01, 1 - t2), 1.4));
  }
  function f(e2, t2, r2, s2, a2) {
    if (t2 <= e2) return 0;
    let i2 = (t2 - e2) / 48, n2 = 0;
    for (let t3 = 0; t3 < 48; t3++) n2 += i2 / p(e2 + i2 * (t3 + 0.5), a2);
    return n2 * r2 * 3600 / s2;
  }
  function v(e2) {
    let t2 = e2 / 60;
    if (t2 < 1) return "Under 1 min";
    if (t2 < 59.5) return `${Math.round(t2)} min`;
    let r2 = Math.round(t2), s2 = Math.floor(r2 / 60);
    return `${s2} h ${String(r2 % 60).padStart(2, "0")} min`;
  }
  function y(e2) {
    let t2 = Math.round(e2 / 60);
    if (t2 < 1) return "under a minute";
    if (t2 < 60) return `about ${t2} minute${1 === t2 ? "" : "s"}`;
    let r2 = Math.floor(t2 / 60), s2 = t2 % 60;
    return `about ${r2} hour${1 === r2 ? "" : "s"}${s2 ? ` ${s2} minute${1 === s2 ? "" : "s"}` : ""}`;
  }
  let j = (e2) => {
    let t2 = 1 - e2, r2 = t2 * t2 * t2, s2 = 3 * t2 * t2 * e2, a2 = 3 * t2 * e2 * e2, i2 = e2 * e2 * e2;
    return [
      84 * r2 + 140 * s2 + 168 * a2 + 212 * i2,
      176 * r2 + 238 * s2 + 120 * a2 + 120 * i2
    ];
  }, b = (() => {
    let e2 = [0], [t2, r2] = j(0), s2 = 0;
    for (let a2 = 1; a2 <= 64; a2++) {
      let [i2, n2] = j(a2 / 64);
      s2 += Math.hypot(i2 - t2, n2 - r2), e2.push(s2), t2 = i2, r2 = n2;
    }
    return { n: 64, lengths: e2, total: s2 };
  })(), N = "(prefers-reduced-motion: reduce)", w = (e2) => {
    let t2 = window.matchMedia(N);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  }, M = /* @__PURE__ */ new WeakMap();
  function $(e2, t2, r2) {
    if (!e2) return;
    let s2 = M.get(e2);
    s2 || (s2 = {}, M.set(e2, s2)), s2[t2] !== r2 && (s2[t2] = r2, "text" === t2 ? e2.textContent = r2 : t2.startsWith("--") || "transform" === t2 || "opacity" === t2 ? e2.style.setProperty(t2, r2) : e2.setAttribute(t2, r2));
  }
  let k = {
    charging: "Charging",
    stopped: "Stopped",
    complete: "Charged to limit"
  };
  function F({
    title: e2 = "Fast charger 4",
    location: t2 = "Harbor Street hub, 150 kW",
    capacity: r2 = 77,
    maxPower: l2 = 150,
    startCharge: c2 = 34,
    defaultLimit: h2 = 80,
    minLimit: M2 = 50,
    taperAt: L2 = 50,
    rate: A2 = 0.42,
    currency: R2 = "USD",
    locale: C2 = "en-US",
    speed: S = 1,
    paused: P = false,
    accent: T,
    onStateChange: D,
    onLimitChange: W,
    label: I,
    className: B,
    style: E
  }) {
    let z = (0, a.useId)().replace(/:/g, ""), U = (0, a.useSyncExternalStore)(
      w,
      () => window.matchMedia(N).matches,
      () => false
    ), H = g(c2, 0, 99) / 100, X = g(L2, 10, 95) / 100, K = g(Math.round(M2), 1, 100), V = g(Math.round(h2), K, 100), [Z, q] = (0, a.useState)(() => 100 * H >= V ? "complete" : "charging"), [G, O] = (0, a.useState)(""), J = (0, a.useMemo)(() => {
      try {
        return new Intl.NumberFormat(C2, {
          style: "currency",
          currency: R2,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      } catch {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        });
      }
    }, [C2, R2]), Y = (0, a.useRef)({
      capacity: r2,
      maxPower: l2,
      taper: X,
      rate: A2,
      speed: S,
      paused: P,
      reduced: U,
      money: J,
      start: H,
      lowLimit: K,
      onStateChange: D,
      onLimitChange: W
    });
    (0, a.useEffect)(() => {
      Y.current = {
        capacity: r2,
        maxPower: l2,
        taper: X,
        rate: A2,
        speed: S,
        paused: P,
        reduced: U,
        money: J,
        start: H,
        lowLimit: K,
        onStateChange: D,
        onLimitChange: W
      };
    });
    let Q = (0, a.useRef)({
      soc: H,
      limit: V,
      level: +("charging" === Z),
      mode: Z,
      pos: new Float32Array(18),
      alive: new Uint8Array(18),
      emit: 0,
      pulse: 0,
      seeded: false,
      visible: true,
      running: false,
      frame: 0,
      announceTimer: 0
    }), ee = (0, a.useRef)(null), et = (0, a.useRef)(null), er = (0, a.useRef)(null), es = (0, a.useRef)(null), ea = (0, a.useRef)(null), ei = (0, a.useRef)(null), en = (0, a.useRef)(null), el = (0, a.useRef)([]), ec = (0, a.useRef)(null), eo = (0, a.useRef)(null), ed = (0, a.useRef)(null), eh = (0, a.useRef)(null), eu = (0, a.useRef)(null), em = (0, a.useRef)(null), ex = (0, a.useRef)(null), eg = (0, a.useRef)(null), e_ = (0, a.useRef)(null), ep = (0, a.useRef)(null), ef = (0, a.useRef)(null), ev = (0, a.useRef)(null), ey = (0, a.useRef)(null), ej = (0, a.useRef)(null), eb = (0, a.useRef)(null), eN = (0, a.useMemo)(() => {
      let e3 = "";
      for (let t3 = 0; t3 <= 200; t3++) {
        let r3 = t3 / 200, s2 = 288 - 244 * p(r3, X);
        e3 += `${t3 ? "L" : "M"} ${(1e3 * r3).toFixed(1)} ${s2.toFixed(1)} `;
      }
      return { line: e3.trim(), area: `${e3}L 1000 288 L 0 288 Z` };
    }, [X]), ew = (0, a.useCallback)(() => {
      let e3 = Q.current, t3 = Y.current, r3 = Math.max(0, (e3.soc - t3.start) * t3.capacity);
      return {
        charge: Math.round(1e3 * e3.soc) / 10,
        energy: Math.round(100 * r3) / 100,
        cost: Math.round(r3 * t3.rate * 100) / 100,
        limit: e3.limit
      };
    }, []), eM = (0, a.useCallback)(() => {
      let e3 = Q.current, t3 = Y.current, r3 = e3.soc, s2 = e3.limit / 100, a2 = t3.maxPower * p(r3, t3.taper) * e3.level, i2 = Math.max(0, (r3 - t3.start) * t3.capacity), n2 = 244 + 728 * r3, l3 = 244 + 728 * s2;
      $(et.current, "width", (728 * r3).toFixed(2)), $(er.current, "x1", n2.toFixed(2)), $(er.current, "x2", n2.toFixed(2)), $(
        er.current,
        "opacity",
        r3 > 5e-3 ? (0.5 + 0.4 * e3.pulse).toFixed(3) : "0"
      ), $(es.current, "x", l3.toFixed(2)), $(es.current, "width", Math.max(0, 972 - l3).toFixed(2)), $(ea.current, "x1", l3.toFixed(2)), $(ea.current, "x2", l3.toFixed(2)), $(ei.current, "opacity", (0.18 + 0.82 * e3.level).toFixed(3)), $(en.current, "opacity", (0.55 * e3.level).toFixed(3)), $(ec.current, "--x", `${(l3 / 1e3 * 100).toFixed(3)}`), $(eo.current, "text", `${e3.limit}%`), $(ed.current, "text", `${Math.floor(100 * r3 + 1e-6)}%`), $(eh.current, "text", `${Math.round(a2)} kW`), $(eu.current, "text", `${i2.toFixed(1)} kWh`), $(eg.current, "text", t3.money.format(i2 * t3.rate)), $(em.current, "text", `Time to ${e3.limit}%`);
      let c3 = f(r3, s2, t3.capacity, t3.maxPower, t3.taper);
      $(
        ex.current,
        "text",
        "complete" === e3.mode ? "Done" : "stopped" === e3.mode ? "Paused" : v(c3)
      );
      let o2 = 1e3 * r3;
      $(e_.current, "x", (1e3 * t3.start).toFixed(2)), $(e_.current, "width", Math.max(0, o2 - 1e3 * t3.start).toFixed(2)), $(ep.current, "x", (1e3 * s2).toFixed(2)), $(ep.current, "width", ((1 - s2) * 1e3).toFixed(2)), $(ef.current, "x1", (1e3 * s2).toFixed(2)), $(ef.current, "x2", (1e3 * s2).toFixed(2));
      let d2 = 288 - p(r3, t3.taper) * e3.level * 244;
      $(ev.current, "--x", (100 * r3).toFixed(3)), $(ev.current, "--y", (d2 / 300 * 100).toFixed(3)), $(
        ey.current,
        "text",
        `${Math.round(a2)} kW at ${Math.floor(100 * r3 + 1e-6)}%`
      );
      let h3 = b.total + x, u2 = h3 + 728 * r3 - 6;
      for (let t4 = 0; t4 < 18; t4++) {
        let r4 = el.current[t4];
        if (!r4) continue;
        if (!e3.alive[t4]) {
          $(r4, "opacity", "0");
          continue;
        }
        let s3 = e3.pos[t4], [a3, i3] = (function(e4) {
          let { n: t5, lengths: r5, total: s4 } = b;
          if (e4 <= 0) return j(0);
          if (e4 < s4) {
            let s5 = 0, a4 = t5;
            for (; a4 - s5 > 1; ) {
              let t6 = s5 + a4 >> 1;
              r5[t6] < e4 ? s5 = t6 : a4 = t6;
            }
            return j((s5 + (e4 - r5[s5]) / (r5[a4] - r5[s5])) / t5);
          }
          return [212 + (e4 - s4), 120];
        })(s3);
        $(r4, "cx", a3.toFixed(2)), $(r4, "cy", i3.toFixed(2)), $(r4, "data-in", s3 > h3 - 6 ? "in" : "out"), $(r4, "opacity", (_(s3 / 28) * _((u2 - s3) / 26)).toFixed(3)), $(r4, "r", (5.5 - _((s3 - b.total) / x)).toFixed(2));
      }
    }, []), e$ = (0, a.useCallback)(() => {
      let e3 = Q.current, t3 = b.total + x + 728 * e3.soc - 10;
      for (let r3 = 0; r3 < 18; r3++) {
        let s2 = t3 - 20 - 64 * r3;
        e3.alive[r3] = +(s2 > 0), e3.pos[r3] = Math.max(0, s2);
      }
      e3.emit = 0, e3.seeded = true;
    }, []), ek = (0, a.useCallback)(
      (e3, t3) => {
        let r3 = Q.current;
        r3.mode !== e3 && (r3.mode = e3, q(e3), t3 && O(t3), Y.current.onStateChange?.(e3, ew()));
      },
      [ew]
    ), eF = (0, a.useCallback)(
      (e3) => {
        let t3 = Q.current, r3 = Y.current, s2 = +("charging" === t3.mode), a2 = s2 > t3.level ? 2.6 : 4.2;
        if (t3.level += (s2 - t3.level) * (1 - Math.exp(-e3 * a2)), 2e-3 > Math.abs(s2 - t3.level) && (t3.level = s2), t3.level > 0 && r3.speed > 0) {
          let s3 = r3.maxPower * p(t3.soc, r3.taper) * t3.level, a3 = t3.limit / 100;
          if (t3.soc = Math.min(
            Math.max(a3, t3.soc),
            t3.soc + s3 * e3 * r3.speed * 40 / (3600 * r3.capacity)
          ), "charging" === t3.mode && t3.soc >= a3 - 1e-6) {
            t3.soc = a3;
            let e4 = ew();
            ek(
              "complete",
              `Charged to ${t3.limit}%. ${e4.energy.toFixed(1)} kWh added for ${r3.money.format(e4.cost)}.`
            );
          }
        }
        t3.pulse *= Math.exp(-(5 * e3)), t3.pulse < 2e-3 && (t3.pulse = 0);
        let i2 = b.total + x + 728 * t3.soc - 6, n2 = 300 * (0.4 + 0.6 * t3.level) * Math.max(0.35, Math.min(1.4, r3.speed));
        t3.emit += e3 * t3.level * n2 / 64;
        let l3 = false;
        for (let r4 = 0; r4 < 18; r4++) {
          if (!t3.alive[r4]) continue;
          if (t3.pos[r4] >= i2 - 1.5) {
            t3.alive[r4] = 0, t3.pulse = Math.min(1, t3.pulse + 0.4);
            continue;
          }
          let s3 = 0.72 + 0.28 * _((i2 - t3.pos[r4]) / 90), a3 = 0.45 + 0.55 * _(t3.pos[r4] / 60);
          t3.pos[r4] = Math.min(i2, t3.pos[r4] + n2 * s3 * a3 * e3), l3 = true;
        }
        for (; t3.emit >= 1; ) {
          if (t3.emit -= 1, t3.level < 0.08) continue;
          let e4 = t3.alive.indexOf(0);
          if (e4 < 0) break;
          t3.alive[e4] = 1, t3.pos[e4] = 0, l3 = true;
        }
        return l3 || t3.level > 0 || t3.pulse > 0 || "charging" === t3.mode;
      },
      [ew, ek]
    ), eL = (0, a.useCallback)(() => {
      let e3 = Q.current, t3 = Y.current;
      if (t3.reduced || t3.paused) {
        cancelAnimationFrame(e3.frame), e3.running = false, t3.reduced && (e3.level = +("charging" === e3.mode), "charging" === e3.mode ? e$() : e3.alive.fill(0)), eM();
        return;
      }
      if (e3.seeded || "charging" !== e3.mode || e$(), e3.running || !e3.visible)
        return void eM();
      e3.running = true;
      let r3 = 0, s2 = (t4) => {
        let a2 = r3 ? Math.min(0.05, (t4 - r3) / 1e3) : 1 / 60;
        r3 = t4;
        let i2 = eF(a2);
        eM(), e3.visible && i2 && !Y.current.paused && !Y.current.reduced ? e3.frame = requestAnimationFrame(s2) : e3.running = false;
      };
      e3.frame = requestAnimationFrame(s2);
    }, [eM, e$, eF]);
    (0, a.useEffect)(() => {
      eL();
    }, [eL, U, P, S, Z, r2, l2, X, A2, J]), (0, a.useEffect)(() => {
      let e3 = Q.current, t3 = ee.current;
      if (!t3) return;
      let r3 = true, s2 = () => {
        let t4 = r3 && "visible" === document.visibilityState;
        t4 !== e3.visible && (e3.visible = t4, t4 ? eL() : (cancelAnimationFrame(e3.frame), e3.running = false));
      }, a2 = new IntersectionObserver(([e4]) => {
        r3 = e4.isIntersecting, s2();
      });
      return a2.observe(t3), document.addEventListener("visibilitychange", s2), () => {
        a2.disconnect(), document.removeEventListener("visibilitychange", s2), cancelAnimationFrame(e3.frame), e3.running = false, e3.announceTimer && clearTimeout(e3.announceTimer);
      };
    }, [eL]);
    let eA = (0, a.useCallback)(
      (e3, t3) => {
        let r3 = Q.current, s2 = Y.current, a2 = g(Math.round(e3), s2.lowLimit, 100), i2 = a2 !== r3.limit;
        r3.limit = a2;
        let n2 = a2 / 100;
        if (i2) {
          if ("complete" === r3.mode && n2 > r3.soc + 4e-3)
            ek("charging", `Charging resumed to ${a2}%.`);
          else if ("charging" === r3.mode && n2 <= r3.soc) {
            let e5 = ew();
            ek(
              "complete",
              `Charged to ${Math.floor(100 * r3.soc)}%. ${e5.energy.toFixed(1)} kWh added for ${s2.money.format(e5.cost)}.`
            );
          }
          let e4 = f(r3.soc, n2, s2.capacity, s2.maxPower, s2.taper), t4 = `Charge limit ${a2}%${n2 > r3.soc ? `, ${y(e4)} to go` : ""}`;
          $(ec.current, "aria-valuenow", String(a2)), $(ec.current, "aria-valuetext", t4), eM(), eL();
        }
        t3 && (r3.announceTimer && clearTimeout(r3.announceTimer), r3.announceTimer = setTimeout(() => {
          let e4 = f(r3.soc, r3.limit / 100, s2.capacity, s2.maxPower, s2.taper);
          O(
            `Charge limit ${r3.limit}%.${r3.limit / 100 > r3.soc ? ` ${y(e4)} to go at full power.` : ""}`
          ), Y.current.onLimitChange?.(r3.limit);
        }, 350));
      },
      [ew, eL, eM, ek]
    ), eR = (0, a.useRef)(null), eC = (e3) => {
      let t3 = eR.current;
      if (!t3) return Q.current.limit;
      let r3 = (e3 - t3.left) / t3.width;
      return "hero" === t3.kind ? (1e3 * r3 - 244) / 728 * 100 : 100 * r3;
    }, eS = (e3) => {
      if (0 !== e3.button) return;
      let t3 = "plot" === e3.currentTarget.dataset.surface ? "plot" : "hero", r3 = e3.currentTarget.getBoundingClientRect();
      eR.current = {
        id: e3.pointerId,
        left: r3.left,
        width: r3.width,
        kind: t3
      }, e3.currentTarget.setPointerCapture(e3.pointerId), ee.current?.setAttribute("data-dragging", ""), ec.current?.setAttribute("data-pointer", ""), ec.current?.focus({ preventScroll: true, focusVisible: false }), eA(eC(e3.clientX), false);
    }, eP = (e3) => {
      eR.current?.id === e3.pointerId && eA(eC(e3.clientX), false);
    }, eT = (e3) => {
      eR.current?.id === e3.pointerId && (eR.current = null, ee.current?.removeAttribute("data-dragging"), eA(Q.current.limit, true));
    }, eD = 100 * H < V, eW = l2 * p(H, X) * !!eD, eI = f(H, V / 100, r2, l2, X), eB = V / 100, eE = 244 + 728 * eB, ez = Array.from({ length: 9 }, (e3, t3) => 244 + (t3 + 1) / 10 * 728), eU = { ...T ? { "--cs-accent": T } : null, ...E }, eH = "charging" === Z ? "Stop charging" : "stopped" === Z ? "Resume charging" : "Start new session";
    return (0, s.jsxs)("div", {
      ref: ee,
      role: "group",
      "aria-label": I ?? e2,
      className: [u().root, B].filter(Boolean).join(" "),
      style: eU,
      "data-mode": Z,
      children: [
        (0, s.jsxs)("div", {
          className: u().card,
          children: [
            (0, s.jsxs)("header", {
              className: u().header,
              children: [
                (0, s.jsxs)("div", {
                  className: u().titles,
                  children: [
                    (0, s.jsx)("h3", { className: u().title, children: e2 }),
                    t2 ? (0, s.jsx)("p", {
                      className: u().location,
                      children: t2
                    }) : null
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: u().charge,
                  children: [
                    (0, s.jsx)("span", {
                      ref: ed,
                      className: u().soc,
                      children: `${Math.floor(100 * H + 1e-6)}%`
                    }),
                    (0, s.jsxs)("span", {
                      className: u().status,
                      "data-mode": Z,
                      children: [
                        "charging" === Z ? (0, s.jsx)(i.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : "stopped" === Z ? (0, s.jsx)(n.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : (0, s.jsx)(o, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        k[Z]
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              ref: ej,
              className: u().hero,
              "data-surface": "hero",
              onPointerDown: eS,
              onPointerMove: eP,
              onPointerUp: eT,
              onPointerCancel: eT,
              children: [
                (0, s.jsxs)("svg", {
                  className: u().heroSvg,
                  viewBox: "0 0 1000 240",
                  "aria-hidden": "true",
                  focusable: "false",
                  children: [
                    (0, s.jsxs)("defs", {
                      children: [
                        (0, s.jsxs)("linearGradient", {
                          id: `${z}-metal`,
                          x1: "0",
                          y1: "0",
                          x2: "1",
                          y2: "1",
                          children: [
                            (0, s.jsx)("stop", {
                              offset: "0",
                              className: u().m1
                            }),
                            (0, s.jsx)("stop", {
                              offset: ".3",
                              className: u().m2
                            }),
                            (0, s.jsx)("stop", {
                              offset: ".55",
                              className: u().m3
                            }),
                            (0, s.jsx)("stop", {
                              offset: ".8",
                              className: u().m4
                            }),
                            (0, s.jsx)("stop", {
                              offset: "1",
                              className: u().m5
                            })
                          ]
                        }),
                        (0, s.jsx)("clipPath", {
                          id: `${z}-pack`,
                          children: (0, s.jsx)("rect", {
                            x: 244,
                            y: 32,
                            width: 728,
                            height: 176,
                            rx: 32
                          })
                        })
                      ]
                    }),
                    (0, s.jsx)("rect", {
                      x: 12,
                      y: 28,
                      width: 72,
                      height: 184,
                      rx: 18,
                      fill: `url(#${z}-metal)`,
                      className: u().post
                    }),
                    (0, s.jsx)("rect", {
                      x: 28,
                      y: 46,
                      width: 40,
                      height: 24,
                      rx: 6,
                      className: u().screen
                    }),
                    (0, s.jsx)("rect", {
                      ref: ei,
                      x: 44,
                      y: 96,
                      width: 8,
                      height: 56,
                      rx: 4,
                      className: u().led,
                      opacity: eD ? 1 : 0.18
                    }),
                    (0, s.jsx)("path", { d: m, className: u().cable }),
                    (0, s.jsx)("path", {
                      ref: en,
                      d: m,
                      className: u().core,
                      opacity: 0.55 * !!eD
                    }),
                    (0, s.jsx)("rect", {
                      x: 72,
                      y: 166,
                      width: 18,
                      height: 20,
                      rx: 5,
                      className: u().holster
                    }),
                    (0, s.jsx)("rect", {
                      x: 210,
                      y: 96,
                      width: x + 10,
                      height: 48,
                      rx: 10,
                      className: u().nub
                    }),
                    (0, s.jsx)("rect", {
                      x: 232,
                      y: 20,
                      width: 752,
                      height: 200,
                      rx: 44,
                      className: u().shell
                    }),
                    (0, s.jsxs)("g", {
                      clipPath: `url(#${z}-pack)`,
                      children: [
                        (0, s.jsx)("rect", {
                          x: 244,
                          y: 32,
                          width: 728,
                          height: 176,
                          className: u().well
                        }),
                        (0, s.jsx)("rect", {
                          ref: et,
                          x: 244,
                          y: 32,
                          width: 728 * H,
                          height: 176,
                          className: u().fill
                        }),
                        (0, s.jsx)("rect", {
                          ref: es,
                          x: eE,
                          y: 32,
                          width: Math.max(0, 972 - eE),
                          height: 176,
                          className: u().beyond
                        }),
                        ez.map(
                          (e3) => (0, s.jsx)(
                            "line",
                            {
                              x1: e3,
                              x2: e3,
                              y1: 46,
                              y2: 194,
                              className: u().cell
                            },
                            e3
                          )
                        ),
                        (0, s.jsx)("line", {
                          ref: er,
                          x1: 244 + 728 * H,
                          x2: 244 + 728 * H,
                          y1: 32,
                          y2: 208,
                          className: u().front
                        })
                      ]
                    }),
                    (0, s.jsx)("path", {
                      d: "M 276 25 H 940",
                      className: u().sheen
                    }),
                    (0, s.jsx)("line", {
                      ref: ea,
                      x1: eE,
                      x2: eE,
                      y1: 20,
                      y2: 220,
                      className: u().limitLine
                    }),
                    (0, s.jsx)("g", {
                      className: u().packets,
                      children: Array.from(
                        { length: 18 },
                        (e3, t3) => (0, s.jsx)(
                          "circle",
                          {
                            ref: (e4) => {
                              el.current[t3] = e4;
                            },
                            cx: 84,
                            cy: 176,
                            r: 5.5,
                            opacity: 0,
                            "data-in": "out",
                            className: u().packet
                          },
                          t3
                        )
                      )
                    })
                  ]
                }),
                (0, s.jsx)("div", {
                  ref: ec,
                  className: u().handle,
                  role: "slider",
                  tabIndex: 0,
                  "aria-label": "Charge limit",
                  "aria-valuemin": K,
                  "aria-valuemax": 100,
                  "aria-valuenow": V,
                  "aria-valuetext": `Charge limit ${V}%${eB > H ? `, ${y(eI)} to go` : ""}`,
                  "aria-describedby": `${z}-hint`,
                  onKeyDown: (e3) => {
                    e3.currentTarget.removeAttribute("data-pointer");
                    let t3 = Q.current, r3 = e3.shiftKey ? 10 : 1, s2 = null;
                    "ArrowRight" === e3.key || "ArrowUp" === e3.key ? s2 = t3.limit + r3 : "ArrowLeft" === e3.key || "ArrowDown" === e3.key ? s2 = t3.limit - r3 : "PageUp" === e3.key ? s2 = t3.limit + 10 : "PageDown" === e3.key ? s2 = t3.limit - 10 : "Home" === e3.key ? s2 = Y.current.lowLimit : "End" === e3.key && (s2 = 100), null !== s2 && (e3.preventDefault(), eA(s2, true));
                  },
                  style: { "--x": (eE / 1e3 * 100).toFixed(3) },
                  children: (0, s.jsx)("span", {
                    ref: eo,
                    className: u().pill,
                    children: `${V}%`
                  })
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: u().lower,
              children: [
                (0, s.jsxs)("section", {
                  className: u().curve,
                  "aria-label": "Charge curve",
                  children: [
                    (0, s.jsxs)("div", {
                      className: u().curveHead,
                      children: [
                        (0, s.jsx)("span", {
                          className: u().curveTitle,
                          children: "Charge curve"
                        }),
                        (0, s.jsx)("span", {
                          ref: ey,
                          className: u().curveAt,
                          "aria-hidden": "true",
                          children: `${Math.round(eW)} kW at ${Math.floor(100 * H + 1e-6)}%`
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      ref: eb,
                      className: u().plot,
                      "data-surface": "plot",
                      onPointerDown: eS,
                      onPointerMove: eP,
                      onPointerUp: eT,
                      onPointerCancel: eT,
                      "aria-hidden": "true",
                      children: [
                        (0, s.jsxs)("svg", {
                          className: u().plotSvg,
                          viewBox: "0 0 1000 300",
                          preserveAspectRatio: "none",
                          focusable: "false",
                          children: [
                            (0, s.jsxs)("defs", {
                              children: [
                                (0, s.jsxs)("linearGradient", {
                                  id: `${z}-area`,
                                  x1: "0",
                                  y1: "0",
                                  x2: "0",
                                  y2: "1",
                                  children: [
                                    (0, s.jsx)("stop", {
                                      offset: "0",
                                      className: u().areaTop
                                    }),
                                    (0, s.jsx)("stop", {
                                      offset: "1",
                                      className: u().areaBottom
                                    })
                                  ]
                                }),
                                (0, s.jsx)("clipPath", {
                                  id: `${z}-done`,
                                  children: (0, s.jsx)("rect", {
                                    ref: e_,
                                    x: 1e3 * H,
                                    y: 0,
                                    width: 0,
                                    height: 300
                                  })
                                })
                              ]
                            }),
                            (0, s.jsx)("line", {
                              x1: 0,
                              x2: 1e3,
                              y1: 44,
                              y2: 44,
                              className: u().grid
                            }),
                            (0, s.jsx)("line", {
                              x1: 0,
                              x2: 1e3,
                              y1: 166,
                              y2: 166,
                              className: u().grid
                            }),
                            (0, s.jsx)("line", {
                              x1: 0,
                              x2: 1e3,
                              y1: 288,
                              y2: 288,
                              className: u().axis
                            }),
                            (0, s.jsx)("rect", {
                              ref: ep,
                              x: 1e3 * eB,
                              y: 0,
                              width: (1 - eB) * 1e3,
                              height: 288,
                              className: u().curveBeyond
                            }),
                            (0, s.jsx)("path", {
                              d: eN.area,
                              fill: `url(#${z}-area)`,
                              clipPath: `url(#${z}-done)`
                            }),
                            (0, s.jsx)("path", {
                              d: eN.line,
                              className: u().curveLine
                            }),
                            (0, s.jsx)("path", {
                              d: eN.line,
                              className: u().curveDone,
                              clipPath: `url(#${z}-done)`
                            }),
                            (0, s.jsx)("line", {
                              ref: ef,
                              x1: 1e3 * eB,
                              x2: 1e3 * eB,
                              y1: 14,
                              y2: 288,
                              className: u().curveLimit
                            })
                          ]
                        }),
                        (0, s.jsx)("span", {
                          className: u().yLabel,
                          style: { top: "14.666666666666666%" },
                          children: `${l2} kW`
                        }),
                        (0, s.jsx)("span", {
                          className: u().xLabel,
                          "data-edge": "start",
                          children: "0%"
                        }),
                        (0, s.jsx)("span", {
                          className: u().xLabel,
                          style: { left: `${100 * X}%` },
                          children: `${Math.round(100 * X)}%`
                        }),
                        (0, s.jsx)("span", {
                          className: u().xLabel,
                          "data-edge": "end",
                          children: "100%"
                        }),
                        (0, s.jsx)("span", {
                          ref: ev,
                          className: u().dot,
                          style: {
                            "--x": (100 * H).toFixed(3),
                            "--y": ((288 - p(H, X) * !!eD * 244) / 300 * 100).toFixed(3)
                          }
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsxs)("dl", {
                  className: u().stats,
                  children: [
                    (0, s.jsxs)("div", {
                      className: u().stat,
                      children: [
                        (0, s.jsx)("dt", { children: "Power" }),
                        (0, s.jsx)("dd", {
                          ref: eh,
                          children: `${Math.round(eW)} kW`
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: u().stat,
                      children: [
                        (0, s.jsx)("dt", { children: "Energy added" }),
                        (0, s.jsx)("dd", { ref: eu, children: "0.0 kWh" })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: u().stat,
                      children: [
                        (0, s.jsx)("dt", {
                          ref: em,
                          children: `Time to ${V}%`
                        }),
                        (0, s.jsx)("dd", {
                          ref: ex,
                          children: eD ? v(eI) : "Done"
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: u().stat,
                      children: [
                        (0, s.jsx)("dt", { children: "Cost" }),
                        (0, s.jsx)("dd", { ref: eg, children: J.format(0) })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("footer", {
              className: u().footer,
              children: [
                (0, s.jsx)("p", {
                  id: `${z}-hint`,
                  className: u().hint,
                  children: "Drag across the pack or the curve to set the charge limit."
                }),
                (0, s.jsxs)("button", {
                  type: "button",
                  className: u().action,
                  onClick: () => {
                    let e3 = Q.current, t3 = Y.current;
                    if ("charging" === e3.mode) {
                      let r3 = ew();
                      ek(
                        "stopped",
                        `Charging stopped at ${Math.floor(100 * e3.soc)}%. ${r3.energy.toFixed(1)} kWh added for ${t3.money.format(r3.cost)}.`
                      );
                    } else
                      "stopped" === e3.mode ? e3.limit / 100 <= e3.soc + 4e-3 ? ek(
                        "complete",
                        `Already at the ${e3.limit}% limit. Raise the limit to keep charging.`
                      ) : ek("charging", `Charging resumed to ${e3.limit}%.`) : (e3.soc = t3.start, e3.alive.fill(0), e3.seeded = false, e3.limit / 100 <= e3.soc + 4e-3 && (e3.limit = Math.max(
                        e3.limit,
                        Math.min(100, Math.ceil(100 * e3.soc) + 20)
                      )), $(ec.current, "aria-valuenow", String(e3.limit)), ek(
                        "charging",
                        `New session started at ${Math.floor(100 * e3.soc)}%, charging to ${e3.limit}%.`
                      ));
                  },
                  "data-mode": Z,
                  children: [
                    (0, s.jsx)("span", {
                      className: u().actionIcon,
                      "aria-hidden": "true",
                      children: "charging" === Z ? (0, s.jsx)(n.A, { size: 14, strokeWidth: 1.75 }) : "stopped" === Z ? (0, s.jsx)(i.A, { size: 16, strokeWidth: 1.75 }) : (0, s.jsx)(d.A, { size: 16, strokeWidth: 1.75 })
                    }),
                    (0, s.jsx)("span", {
                      className: u().actionLabels,
                      children: [
                        "Stop charging",
                        "Resume charging",
                        "Start new session"
                      ].map(
                        (e3) => (0, s.jsx)(
                          "span",
                          {
                            className: u().actionLabel,
                            "data-active": e3 === eH ? "" : void 0,
                            "aria-hidden": e3 !== eH || void 0,
                            children: e3
                          },
                          e3
                        )
                      )
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: u().sr,
          role: "status",
          "aria-live": "polite",
          children: G
        })
      ]
    });
  }
  var L = r(97769), A = r.n(L);
  function R() {
    return (0, s.jsx)("div", {
      className: A().demo,
      "data-canvas": "wide",
      children: (0, s.jsx)(F, {})
    });
  }
  let C = R;
}

__m(__module,__exports,__require);
});
A.regCss(97769, ".demo{display:grid;width:100%;max-width:880px;margin-inline:auto}", {"demo":"demo"});
A.cssFor("charge-session", [45442,97769]);
A.item("charge-session", {entry:86701, export:"ChargeSessionDemo", kind:"component", tier:"pro", unresolved:[]});
})();