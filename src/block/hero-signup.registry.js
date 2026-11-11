/* hero-signup (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(9937, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { x: () => o });
  var n = i(95155), a = i(12115), r = i(30123), l = i(24866), s = i(28819);
  function o({ children: e2, ...t2 }) {
    let i2 = (0, a.useContext)(l.Q);
    (t2 = { ...i2, ...t2 }).transition = (0, r.K)(t2.transition, i2.transition), t2.isStatic = (0, s.M)(() => t2.isStatic);
    let u = (0, a.useMemo)(
      () => t2,
      [
        JSON.stringify(t2.transition),
        t2.transformPagePoint,
        t2.reducedMotion,
        t2.skipAnimations,
        t2.isValidProp
      ]
    );
    return (0, n.jsx)(l.Q.Provider, { value: u, children: e2 });
  }
}

__m(__module,__exports,__require);
});
A.reg(30464, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { l: () => l });
  var r = n(12115), o = n(28819), i = n(24866), s = n(18310), a = n(92171);
  function l() {
    var e2;
    let t2 = (0, o.M)(() => ({ current: null, animations: [] })), n2 = (function() {
      let e3 = (0, s.I)(), { reducedMotion: t3 } = (0, r.useContext)(i.Q);
      return "never" !== t3 && ("always" === t3 || e3);
    })() ?? void 0, { skipAnimations: l2 } = (0, r.useContext)(i.Q), u = (0, r.useMemo)(
      () => (0, a.W)({ scope: t2, reduceMotion: n2, skipAnimations: l2 }),
      [t2, n2, l2]
    );
    return e2 = () => {
      t2.animations.forEach((e3) => e3.stop()), t2.animations.length = 0;
    }, (0, r.useEffect)(() => () => e2(), []), [t2, u];
  }
}

__m(__module,__exports,__require);
});
A.regCss(39726, ".root{--mesh-accent:var(--accent);--mesh-glass:color-mix(in oklab,var(--surface) 70%,transparent);--mesh-glass-edge:color-mix(in oklab,var(--foreground) 10%,transparent);--mesh-glass-shine:oklch(100% 0 0/.55);--mesh-glass-shadow:0 1px 2px oklch(0% 0 0/.06),0 12px 30px -10px oklch(0% 0 0/.22),0 30px 60px -24px oklch(0% 0 0/.24);--mesh-handle-edge:oklch(100% 0 0);--mesh-swatch-edge:oklch(0% 0 0/.12);container-type:inline-size;display:grid;gap:var(--space-2);width:100%;min-width:0;padding:var(--space-2);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);-webkit-tap-highlight-color:transparent}\n:root[data-theme=dark] .root{--mesh-glass:color-mix(in oklab,var(--surface) 62%,transparent);--mesh-glass-edge:oklch(100% 0 0/.1);--mesh-glass-shine:oklch(100% 0 0/.1);--mesh-glass-shadow:0 1px 2px oklch(0% 0 0/.3),0 12px 32px -8px oklch(0% 0 0/.5),0 28px 64px -20px oklch(0% 0 0/.5);--mesh-swatch-edge:oklch(100% 0 0/.16)}\n.root.background{position:relative;display:block;width:100%;height:100%;padding:0;border:0;border-radius:0;background:none;pointer-events:none;container-type:normal}\n.canvasWrap{position:relative;display:grid;gap:var(--space-2);min-width:0}\n.stage{position:relative;aspect-ratio:16/9;min-width:0;overflow:hidden;border-radius:calc(var(--radius-surface) - var(--space-2));isolation:isolate;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:crosshair}\n.stage:after{content:\"\";position:absolute;inset:0;z-index:3;border-radius:inherit;box-shadow:inset 0 0 0 1px oklch(0 0 0/.08);pointer-events:none}\n@container (max-width: 640px){.stage{aspect-ratio:1/1}\n.background .stage{position:absolute;inset:0;aspect-ratio:auto;border-radius:0;cursor:auto;touch-action:auto}\n.background .stage:after{content:none}\n.canvas,.fallback{position:absolute;inset:0;display:block;width:100%;height:100%}\n.canvas[data-hidden]{visibility:hidden}\n.plane{position:absolute;inset:0;z-index:2;container-type:size}\n.overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}\n.reach{fill:none;stroke:oklch(100% 0 0/.7);stroke-width:1;stroke-dasharray:3 5;vector-effect:non-scaling-stroke;filter:drop-shadow(0 0 1px oklch(0 0 0/.28));opacity:0;transition:opacity var(--duration-standard) var(--ease-standard)}\n.reach[data-show]{opacity:.85}\n@media (prefers-reduced-motion:reduce){.baseButton,.baseDot,.dot,.hint,.iconButton,.reach,.swatchFill{transition:none}\n.handle{position:absolute;top:0;left:0;display:grid;place-items:center;width:44px;height:44px;margin:-22px 0 0 -22px;padding:0;border:0;border-radius:50%;background:transparent;cursor:grab;touch-action:none;will-change:transform;-webkit-tap-highlight-color:transparent}\n.handle[data-dragging]{z-index:2;cursor:grabbing}\n.handle:hover .dot{transform:scale(1.1)}\n.handle[data-selected] .dot{transform:scale(1.14);box-shadow:0 0 0 2.5px var(--mesh-handle-edge),0 0 0 5px var(--mesh-accent),0 2px 6px oklch(0 0 0/.22),0 10px 22px -6px oklch(0 0 0/.34)}\n.handle[data-dragging] .dot{transform:scale(1.32);box-shadow:0 0 0 2.5px var(--mesh-handle-edge),0 0 0 5px var(--mesh-accent),0 6px 12px oklch(0 0 0/.2),0 18px 34px -8px oklch(0 0 0/.38)}\n.dot{width:20px;height:20px;border-radius:50%;background:var(--c);box-shadow:0 0 0 2.5px var(--mesh-handle-edge),0 0 0 3.5px oklch(0 0 0/.08),0 2px 6px oklch(0 0 0/.22),0 8px 18px -6px oklch(0 0 0/.3);transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-fast) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard)}\n.hint{position:absolute;top:var(--space-3);left:var(--space-3);z-index:1;max-width:calc(100% - 2 * var(--space-3));margin:0;padding:6px var(--space-3);border:1px solid var(--mesh-glass-edge);border-radius:var(--radius-pill);background:var(--mesh-glass);box-shadow:inset 0 1px 0 var(--mesh-glass-shine);-webkit-backdrop-filter:blur(18px) saturate(1.6);backdrop-filter:blur(18px) saturate(1.6);color:var(--text-secondary);font-size:var(--text-xs);pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-standard) var(--ease-standard)}\n.hint[data-hidden]{opacity:0;transform:translateY(-4px)}\n.hint{border-radius:calc(var(--radius-surface) - var(--space-2) - var(--space-3))}\n.bar{position:absolute;bottom:var(--space-3);left:50%;z-index:4;display:flex;align-items:center;gap:var(--space-1);padding:5px;border:1px solid var(--mesh-glass-edge);border-radius:var(--radius-pill);background:var(--mesh-glass);box-shadow:inset 0 1px 0 var(--mesh-glass-shine),var(--mesh-glass-shadow);-webkit-backdrop-filter:blur(24px) saturate(1.7);backdrop-filter:blur(24px) saturate(1.7);transform:translateX(-50%)}\n.bar{position:static;flex-wrap:wrap;justify-content:space-between;padding:var(--space-1);border-color:transparent;border-radius:calc(var(--radius-surface) - var(--space-2));background:var(--surface-muted);box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;transform:none}\n.baseButton{display:inline-flex;align-items:center;gap:var(--space-2);height:34px;padding:0 var(--space-3) 0 var(--space-2);border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.baseButton:hover{color:var(--foreground)}\n.baseButton[aria-pressed=true]{background:color-mix(in oklab,var(--foreground) 8%,transparent);color:var(--foreground)}\n.baseButton{margin-right:auto}\n.baseDot{width:18px;height:18px;border-radius:6px;background:var(--c);box-shadow:inset 0 0 0 1px var(--mesh-swatch-edge);transition:background-color var(--duration-standard) var(--ease-standard)}\n.divider{flex:none;width:1px;height:20px;margin:0 2px;background:var(--mesh-glass-edge)}\n.divider{display:none}\n.swatches{display:flex;align-items:center;gap:2px}\n.swatches{order:3;flex:1 1 100%;justify-content:space-between}\n.swatch{position:relative;display:grid;place-items:center;width:32px;height:34px;padding:0;border:0;background:transparent;cursor:pointer}\n.swatch:hover .swatchFill{transform:scale(1.12)}\n.swatch:active .swatchFill{transform:scale(.92)}\n.swatch{width:auto;flex:1 1 0;height:40px}\n.swatchFill{grid-area:1/1;width:20px;height:20px;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px var(--mesh-swatch-edge);transition:transform var(--duration-spring) var(--ease-spring)}\n.swatchRing{grid-area:1/1;width:28px;height:28px;border:2px solid var(--mesh-accent);border-radius:50%}\n.iconButton{position:relative;display:grid;flex:none;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.iconButton:hover:not(:disabled){background:color-mix(in oklab,var(--foreground) 7%,transparent);color:var(--foreground)}\n.iconButton[data-on]{color:var(--mesh-accent)}\n.iconButton:disabled{opacity:.4;cursor:not-allowed}\n.iconButton{width:40px;height:40px}\n.colorInput{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;opacity:0;cursor:pointer}\n.footer{justify-content:space-between;padding:var(--space-2) var(--space-3) var(--space-2) var(--space-4)}\n.footer,.settings{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-3) var(--space-6)}\n.footer{padding-inline:var(--space-2)}\n.settings{min-width:0}\n.grain,.settings{width:100%}\n.grain{width:220px;min-width:0}\n.actions{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2)}\n.actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}\n.actions>*{min-width:0}\n.copyButton{min-width:7.75rem}\n.saveButton{min-width:7.5rem}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}", {"root":"root","background":"background","canvasWrap":"canvasWrap","stage":"stage","canvas":"canvas","fallback":"fallback","plane":"plane","overlay":"overlay","reach":"reach","baseButton":"baseButton","baseDot":"baseDot","dot":"dot","hint":"hint","iconButton":"iconButton","swatchFill":"swatchFill","handle":"handle","bar":"bar","divider":"divider","swatches":"swatches","swatch":"swatch","swatchRing":"swatchRing","colorInput":"colorInput","footer":"footer","settings":"settings","grain":"grain","actions":"actions","copyButton":"copyButton","saveButton":"saveButton","srOnly":"srOnly"});
A.reg(64324, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => i });
  var n = r(51811);
  let l = {
    name: "pipette",
    size: 24,
    node: [
      [
        "path",
        {
          d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",
          key: "1y3wsu"
        }
      ],
      [
        "path",
        {
          d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",
          key: "110lr1"
        }
      ],
      ["path", { d: "m2 22 .414-.414", key: "jhxm08" }]
    ]
  };
  l.node;
  let i = (0, n.A)(l);
}

__m(__module,__exports,__require);
});
A.regCss(66754, ".root{--slider-thumb:22px;--slider-track:6px;display:grid;width:100%;min-width:0;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);user-select:none;-webkit-user-select:none}\n.root[data-dragging],.root[data-dragging] .control,.root[data-dragging] .thumb{cursor:grabbing}\n.root[data-disabled]{opacity:.5}\n.root[data-disabled] .control,.root[data-disabled] .markLabel,.root[data-disabled] .thumb{cursor:not-allowed}\n.header{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-4)}\n.label{min-width:0;font-weight:500}\n.readout{display:inline-flex;flex:none;align-items:center;gap:.3em;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dash{color:var(--text-muted)}\n.body{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}\n.start{display:flex;grid-area:1/1;margin-right:var(--space-3)}\n.end{display:flex;grid-area:1/3;margin-left:var(--space-3)}\n.control{position:relative;grid-area:1/2;height:var(--control-height-md);cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.track{position:absolute;top:50%;right:calc(var(--slider-thumb) / 2);left:calc(var(--slider-thumb) / 2);height:var(--slider-track);margin-top:calc(var(--slider-track) / -2);border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--control-fill)}\n.fill .tick{background:color-mix(in oklab,var(--control-glyph) 60%,transparent)}\n.tick{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 30%,transparent)}\n.thumbs{position:absolute;inset:0 calc(var(--slider-thumb) / 2);container-type:inline-size;pointer-events:none}\n.thumbLayer{position:absolute;inset:0}\n.thumb{position:absolute;top:50%;right:0;box-sizing:border-box;width:var(--slider-thumb);height:var(--slider-thumb);translate:50% -50%;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);pointer-events:auto;cursor:grab;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:-11px;border-radius:inherit}\n@media (prefers-reduced-motion:reduce){.markLabel,.thumb{transition:none}\n.bubbleAnchor{--edge:calc(var(--slider-thumb) / 2);--x:calc(var(--at, 0) * 1cqw);position:absolute;right:0;bottom:calc(50% + var(--slider-thumb) / 2 + 8px);display:flex;translate:clamp(calc(100% - var(--edge) - var(--x)),50%,calc(100cqw + var(--edge) - var(--x))) 0;pointer-events:none}\n@media (pointer:coarse){.bubbleAnchor{bottom:calc(50% + var(--slider-thumb) / 2 + 18px)}\n.bubble{display:inline-flex;min-height:1.75rem;align-items:center;padding:0 var(--space-3);border:1px solid color-mix(in oklab,var(--background) 14%,var(--foreground));border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-size:var(--text-sm);font-weight:500;white-space:nowrap;transform-origin:50% 100%}\n.marks{position:relative;grid-area:2/2;height:1.25rem;margin:calc(var(--space-1) * -1) calc(var(--slider-thumb) / 2) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.markLabel{position:absolute;top:0;translate:-50% 0;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.markLabel[data-edge=start]{translate:max(-50%,calc(var(--slider-thumb) / -2)) 0}\n.markLabel[data-edge=end]{translate:min(-50%,calc(-100% + var(--slider-thumb) / 2)) 0}\n.markLabel[data-on]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.markLabel:hover{color:var(--foreground)}\n.number{display:inline-flex;align-items:center;white-space:nowrap;font-variant-numeric:tabular-nums}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}", {});
A.reg(73246, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let i = {
    name: "shuffle",
    size: 24,
    node: [
      ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
      ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
      [
        "path",
        {
          d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
          key: "1ailkh"
        }
      ],
      ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
      [
        "path",
        { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }
      ]
    ]
  };
  i.node;
  let n = (0, r.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(75543, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { HeroSignup: () => R, default: () => B });
  var i = t(95155), n = t(12115), o = t(18310), r = t(30464), s = t(9937), l = t(25354), d = t(80642), c = t(64577), u = t(7770), h = t(67752);
  let p = {
    title: "Close the month in an afternoon",
    description: "Tally matches every card payment to its receipt as it lands, so month end is a short review instead of a week of spreadsheets.",
    placeholder: "you@company.com",
    buttonLabel: "Join waitlist",
    shortButtonLabel: "Join",
    footnote: "One email when your invite is ready. Nothing else.",
    count: 1283,
    people: [
      { name: "Andre Williams", src: (0, h.my)("andre-williams") },
      { name: "Chloe Nguyen", src: (0, h.my)("chloe-nguyen") },
      { name: "Diane Foster", src: (0, h.my)("diane-foster") },
      { name: "Daniel Kim", src: (0, h.my)("daniel-kim") },
      { name: "Sofia Ramirez", src: (0, h.my)("sofia-ramirez") }
    ]
  }, m = {
    "gmial.com": "gmail.com",
    "gmal.com": "gmail.com",
    "gamil.com": "gmail.com",
    "gnail.com": "gmail.com",
    "gmail.co": "gmail.com",
    "gmail.con": "gmail.com",
    "gmaill.com": "gmail.com",
    "hotmial.com": "hotmail.com",
    "hotmal.com": "hotmail.com",
    "hotmail.co": "hotmail.com",
    "yahooo.com": "yahoo.com",
    "yaho.com": "yahoo.com",
    "yahoo.co": "yahoo.com",
    "outlok.com": "outlook.com",
    "outloo.com": "outlook.com",
    "outlook.co": "outlook.com",
    "iclod.com": "icloud.com",
    "icloud.co": "icloud.com",
    "icoud.com": "icloud.com"
  };
  var g = t(86454);
  let f = (e2, a2 = 0, t2 = 1) => Math.min(t2, Math.max(a2, e2)), y = (e2) => e2 <= 0.04045 ? e2 / 12.92 : ((e2 + 0.055) / 1.055) ** 2.4;
  function b(e2, a2, t2) {
    let i2 = t2 * Math.PI / 180, n2 = a2 * Math.cos(i2), o2 = a2 * Math.sin(i2), r2 = (e2 + 0.3963377774 * n2 + 0.2158037573 * o2) ** 3, s2 = (e2 - 0.1055613458 * n2 - 0.0638541728 * o2) ** 3, l2 = (e2 - 0.0894841775 * n2 - 1.291485548 * o2) ** 3;
    return `#${[
      4.0767416621 * r2 - 3.3077115913 * s2 + 0.2309699292 * l2,
      -1.2684380046 * r2 + 2.6097574011 * s2 - 0.3413193965 * l2,
      -0.0041960863 * r2 - 0.7034186147 * s2 + 1.707614701 * l2
    ].map((e3) => {
      let a3;
      return Math.round(
        255 * f(
          (a3 = f(e3)) <= 31308e-7 ? 12.92 * a3 : 1.055 * a3 ** (1 / 2.4) - 0.055
        )
      ).toString(16).padStart(2, "0");
    }).join("")}`;
  }
  function _([e2, a2, t2]) {
    let [i2, n2, o2] = [y(e2), y(a2), y(t2)], r2 = Math.cbrt(0.4122214708 * i2 + 0.5363325363 * n2 + 0.0514459929 * o2), s2 = Math.cbrt(0.2119034982 * i2 + 0.6806995451 * n2 + 0.1073969566 * o2), l2 = Math.cbrt(0.0883024619 * i2 + 0.2817188376 * n2 + 0.6299787005 * o2), d2 = 1.9779984951 * r2 - 2.428592205 * s2 + 0.4505937099 * l2, c2 = 0.0259040371 * r2 + 0.7827717662 * s2 - 0.808675766 * l2;
    return [
      0.2104542553 * r2 + 0.793617785 * s2 - 0.0040720468 * l2,
      Math.hypot(d2, c2),
      (180 * Math.atan2(c2, d2) / Math.PI + 360) % 360
    ];
  }
  let w = null;
  function x(e2) {
    if (!e2.trim() || !(w ?? (w = document.createElement("canvas").getContext("2d", { willReadFrequently: true }))))
      return null;
    w.canvas.width = w.canvas.height = 1, w.fillStyle = "#000", w.fillStyle = e2.trim(), w.clearRect(0, 0, 1, 1), w.fillRect(0, 0, 1, 1);
    let [a2, t2, i2] = w.getImageData(0, 0, 1, 1).data;
    return [a2 / 255, t2 / 255, i2 / 255];
  }
  let v = [
    { id: "a", x: 0.06, y: 0.04, spread: 1.05 },
    { id: "b", x: 0.96, y: 0.1, spread: 0.95 },
    { id: "c", x: 0.94, y: 0.96, spread: 1 },
    { id: "d", x: 0.04, y: 0.94, spread: 0.9 },
    { id: "pool", x: 0.5, y: 0.48, spread: 0.62 }
  ], j = [
    [0.935, 0.042, 0],
    [0.95, 0.032, 38],
    [0.93, 0.04, -34],
    [0.955, 0.026, 150],
    [0.99, 4e-3, 0]
  ], k = [
    [0.29, 0.045, 0],
    [0.26, 0.036, 38],
    [0.27, 0.042, -34],
    [0.23, 0.024, 150],
    [0.18, 0.01, 0]
  ];
  var N = t(92736), S = t.n(N);
  let { spring: T, duration: A, ease: C, stagger: P } = u.T, $ = [...C.enter], L = () => () => {
  };
  function E(e2) {
    let a2 = e2.trim();
    if (!a2) return { ok: false, message: "Enter your email to join the list" };
    if (/\s/.test(a2)) return { ok: false, message: "Emails can't contain spaces" };
    let t2 = a2.indexOf("@");
    if (t2 < 0)
      return {
        ok: false,
        message: "Add an @ and your domain, like you@company.com"
      };
    if (0 === t2) return { ok: false, message: "Add your name before the @" };
    let i2 = a2.slice(t2 + 1);
    if (!i2) return { ok: false, message: "Add your domain after the @" };
    if (i2.includes("@")) return { ok: false, message: "Use a single @" };
    if (!/^[^\s.@]+(\.[^\s.@]+)*\.[a-z]{2,}$/i.test(i2))
      return { ok: false, message: "Finish the domain, like company.com" };
    let n2 = m[i2.toLowerCase()];
    return n2 ? { ok: true, fix: `${a2.slice(0, t2)}@${n2}` } : { ok: true };
  }
  let M = (e2) => new Intl.NumberFormat("en-US").format(e2);
  function R({
    title: e2 = p.title,
    description: a2 = p.description,
    placeholder: t2 = p.placeholder,
    buttonLabel: u2 = p.buttonLabel,
    shortButtonLabel: h2 = p.shortButtonLabel,
    footnote: m2 = p.footnote,
    count: g2 = p.count,
    people: f2 = p.people,
    proof: y2 = (e3) => (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: S().proofStrong, children: e3 }),
        " finance teams are on the list"
      ]
    }),
    hue: b2,
    onSubscribe: _2,
    onStateChange: w2,
    className: x2
  }) {
    let v2, j2 = (v2 = (0, o.I)(), (0, n.useSyncExternalStore)(
      L,
      () => true,
      () => false
    ) && !!v2), k2 = (0, n.useId)(), [N2, C2] = (0, n.useState)(""), [B2, D] = (0, n.useState)(false), [O, W] = (0, n.useState)("idle"), [J, Y] = (0, n.useState)(null), [H, I] = (0, n.useState)(g2 + 1), [V, q] = (0, n.useState)(false), [K, U] = (0, n.useState)(""), [Z, Q] = (0, n.useState)(null), [G, X] = (0, r.l)(), ee = (0, n.useRef)(null), ea = (0, n.useRef)(null), et = (0, n.useRef)(null), ei = (0, n.useRef)(/* @__PURE__ */ new Set()), en = (0, n.useRef)(true);
    (0, n.useEffect)(
      () => (en.current = true, () => {
        en.current = false;
      }),
      []
    );
    let eo = (0, n.useRef)(w2);
    (0, n.useEffect)(() => {
      eo.current = w2;
    });
    let er = (0, n.useRef)(true);
    (0, n.useEffect)(() => {
      if (er.current) {
        er.current = false;
        return;
      }
      eo.current?.(O);
    }, [O]);
    let es = E(N2), el = "submitting" === O, ed = "success" === O, ec = B2 && !es.ok && !ed, eu = `${k2}-note`, eh = () => {
      let e3 = G.current, a3 = ea.current;
      if (!e3 || !a3) return null;
      let t3 = a3.offsetTop, i2 = a3.offsetLeft;
      return {
        top: t3,
        left: i2,
        right: e3.clientWidth - i2 - a3.offsetWidth,
        bottom: e3.clientHeight - t3 - a3.offsetHeight,
        radius: a3.offsetHeight / 2
      };
    }, ep = async (e3) => {
      if (e3?.preventDefault(), el || ed) return;
      let a3 = N2.trim(), t3 = E(a3);
      if (!t3.ok) {
        D(true), U(t3.message), ee.current?.focus({ preventScroll: true }), !j2 && G.current && X(
          G.current,
          { x: [0, -8, 7, -4, 2, 0] },
          { duration: 0.4, ease: "easeOut" }
        );
        return;
      }
      Y(null), W("submitting"), U("Joining the waitlist");
      try {
        let e4;
        if (_2) e4 = await _2(a3);
        else if (await new Promise((e5) => setTimeout(e5, 1400)), /fail/i.test(a3) && !ei.current.has(a3.toLowerCase()))
          throw ei.current.add(a3.toLowerCase()), Error("We couldn't save your spot");
        if (!en.current) return;
        let t4 = "number" == typeof e4 ? e4 : g2 + 1;
        Q(eh()), I(t4), q(true), W("success"), U(
          `You're number ${M(t4)} on the list. ${_2 ? `We'll email ${a3} when your invite is ready.` : "This preview is simulated, nothing was sent."}`
        ), requestAnimationFrame(
          () => et.current?.focus({ preventScroll: true })
        );
      } catch (a4) {
        if (!en.current) return;
        let e4 = a4 instanceof Error && a4.message ? a4.message : "We couldn't save your spot. Try again";
        W("error"), Y(e4), U(e4);
      }
    }, em = "footnote", eg = m2;
    if (ed)
      em = "done", eg = (0, i.jsxs)(i.Fragment, {
        children: [
          _2 ? (0, i.jsxs)(i.Fragment, {
            children: [
              "We'll email ",
              N2.trim(),
              " when your invite is ready."
            ]
          }) : (0, i.jsx)(i.Fragment, {
            children: "Preview only, no email was sent."
          }),
          " ",
          (0, i.jsx)("button", {
            type: "button",
            className: S().link,
            onClick: () => {
              Q(eh()), W("idle"), q(false), U(""), requestAnimationFrame(
                () => ee.current?.focus({ preventScroll: true })
              );
            },
            children: "Change email"
          })
        ]
      });
    else if (ec && !es.ok)
      em = `invalid-${es.message}`, eg = (0, i.jsx)("span", {
        className: S().error,
        children: es.message
      });
    else if ("error" === O && J)
      em = "failure", eg = (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsxs)("span", { className: S().error, children: [J, "."] }),
          " ",
          (0, i.jsx)("button", {
            type: "button",
            className: S().link,
            onClick: () => void ep(),
            children: "Try again"
          })
        ]
      });
    else if (es.ok && es.fix) {
      let e3 = es.fix;
      em = `fix-${e3}`, eg = (0, i.jsxs)(i.Fragment, {
        children: [
          "Did you mean ",
          (0, i.jsx)("button", {
            type: "button",
            className: S().link,
            onClick: () => {
              C2(e3), ee.current?.focus({ preventScroll: true });
            },
            children: e3
          }),
          "?"
        ]
      });
    }
    let ef = "string" == typeof e2 ? e2.split(" ") : null, ey = (e3) => ({
      initial: !j2 && { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: j2 ? { duration: 0 } : { duration: 0.7, ease: $, delay: e3 }
    }), eb = Z ? `inset(${Z.top}px ${Z.right}px ${Z.bottom}px ${Z.left}px round ${Z.radius}px)` : "inset(6px 6px 6px calc(100% - 50px) round 22px)", e_ = `inset(0px 0px 0px 0px round ${Z ? Z.top + Z.radius : 28}px)`;
    return (0, i.jsx)(s.x, {
      reducedMotion: "user",
      children: (0, i.jsxs)("section", {
        className: [S().root, x2].filter(Boolean).join(" "),
        "aria-labelledby": `${k2}-title`,
        children: [
          (0, i.jsx)(F, { hue: b2 }),
          (0, i.jsxs)("div", {
            className: S().inner,
            children: [
              (0, i.jsx)("h1", {
                id: `${k2}-title`,
                className: S().title,
                children: ef ? ef.map(
                  (e3, a3) => (0, i.jsxs)(
                    "span",
                    {
                      children: [
                        (0, i.jsx)(l.PY1.span, {
                          className: S().word,
                          initial: !j2 && {
                            opacity: 0,
                            y: "0.4em",
                            filter: "blur(6px)"
                          },
                          animate: {
                            opacity: 1,
                            y: "0em",
                            filter: "blur(0px)"
                          },
                          transition: {
                            duration: 0.8,
                            ease: $,
                            delay: 0.06 + a3 * P.word * 1.5
                          },
                          children: e3
                        }),
                        a3 < ef.length - 1 ? " " : null
                      ]
                    },
                    a3
                  )
                ) : e2
              }),
              a2 ? (0, i.jsx)(l.PY1.p, {
                className: S().description,
                ...ey(0.3),
                children: a2
              }) : null,
              (0, i.jsxs)(l.PY1.div, {
                className: S().formWrap,
                ...ey(0.42),
                children: [
                  (0, i.jsxs)("form", {
                    ref: G,
                    className: S().pill,
                    onSubmit: ep,
                    noValidate: true,
                    "data-state": O,
                    "data-invalid": ec || void 0,
                    "aria-busy": el,
                    children: [
                      (0, i.jsx)("label", {
                        className: S().srOnly,
                        htmlFor: `${k2}-email`,
                        children: "Email address"
                      }),
                      (0, i.jsxs)("div", {
                        className: S().field,
                        inert: ed,
                        "data-valid": es.ok && !el || void 0,
                        children: [
                          (0, i.jsx)("input", {
                            ref: ee,
                            id: `${k2}-email`,
                            name: "email",
                            className: S().input,
                            type: "email",
                            inputMode: "email",
                            autoComplete: "email",
                            autoCapitalize: "none",
                            autoCorrect: "off",
                            spellCheck: false,
                            enterKeyHint: "send",
                            placeholder: t2,
                            value: N2,
                            readOnly: el,
                            "aria-invalid": ec || void 0,
                            "aria-describedby": eu,
                            onChange: (e3) => {
                              C2(e3.target.value), "error" === O && (W("idle"), Y(null));
                            },
                            onBlur: () => {
                              N2.trim() && D(true);
                            }
                          }),
                          (0, i.jsx)(d.N, {
                            initial: false,
                            children: es.ok && !el && (0, i.jsx)(
                              l.PY1.span,
                              {
                                className: S().valid,
                                initial: { opacity: 0, scale: 0.6 },
                                animate: { opacity: 1, scale: 1 },
                                exit: {
                                  opacity: 0,
                                  scale: 0.6,
                                  transition: { duration: A.fast }
                                },
                                transition: T.snappy,
                                "aria-hidden": "true",
                                children: (0, i.jsx)(c.A, {
                                  size: 16,
                                  strokeWidth: 2
                                })
                              },
                              "valid"
                            )
                          }),
                          (0, i.jsxs)("button", {
                            ref: ea,
                            type: "submit",
                            className: S().go,
                            "aria-disabled": el || void 0,
                            "data-busy": el || void 0,
                            children: [
                              (0, i.jsxs)("span", {
                                className: S().goLabel,
                                "data-hidden": el || void 0,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: S().labelLong,
                                    children: u2
                                  }),
                                  (0, i.jsx)("span", {
                                    className: S().labelShort,
                                    "aria-hidden": "true",
                                    children: h2
                                  })
                                ]
                              }),
                              (0, i.jsx)("span", {
                                className: S().spinner,
                                "data-shown": el || void 0,
                                "aria-hidden": "true"
                              }),
                              el && (0, i.jsx)("span", {
                                className: S().srOnly,
                                children: "Joining"
                              })
                            ]
                          })
                        ]
                      }),
                      (0, i.jsx)(l.PY1.div, {
                        ref: et,
                        className: S().done,
                        tabIndex: -1,
                        "aria-hidden": !ed,
                        initial: false,
                        animate: ed ? { clipPath: e_, opacity: 1 } : { clipPath: eb, transitionEnd: { opacity: 0 } },
                        transition: j2 ? { duration: 0 } : { clipPath: T.smooth, opacity: { duration: 0 } },
                        children: (0, i.jsxs)(l.PY1.span, {
                          className: S().doneBody,
                          initial: false,
                          animate: ed ? { opacity: 1, y: 0, filter: "blur(0px)" } : {
                            opacity: 0,
                            y: 6 * !j2,
                            filter: j2 ? "blur(0px)" : "blur(4px)"
                          },
                          transition: ed ? {
                            duration: A.considered,
                            ease: $,
                            delay: 0.12 * !j2
                          } : { duration: A.instant },
                          children: [
                            (0, i.jsx)("span", {
                              className: S().doneMark,
                              "aria-hidden": "true",
                              children: (0, i.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                width: "14",
                                height: "14",
                                children: (0, i.jsx)(l.PY1.path, {
                                  d: "M5 12.5l4.5 4.5L19 7.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2.6",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  initial: false,
                                  animate: { pathLength: ed || j2 ? 1 : 0 },
                                  transition: {
                                    duration: 0.45 * !!ed,
                                    ease: $,
                                    delay: 0.22 * !!ed
                                  }
                                })
                              })
                            }),
                            (0, i.jsxs)("span", {
                              children: [
                                "You're #",
                                ed ? (0, i.jsx)(z, {
                                  value: H,
                                  from: 0,
                                  reduced: j2,
                                  delay: 0.2
                                }) : M(H),
                                " on the list"
                              ]
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)("div", {
                    id: eu,
                    className: S().note,
                    children: (0, i.jsx)(d.N, {
                      initial: false,
                      children: (0, i.jsx)(
                        l.PY1.p,
                        {
                          className: S().noteText,
                          initial: { opacity: 0, y: j2 ? 0 : -4 },
                          animate: { opacity: 1, y: 0 },
                          exit: {
                            opacity: 0,
                            transition: { duration: A.instant }
                          },
                          transition: { duration: A.standard, ease: $ },
                          children: eg
                        },
                        em
                      )
                    })
                  })
                ]
              }),
              (0, i.jsxs)(l.PY1.div, {
                className: S().proof,
                ...ey(0.54),
                children: [
                  f2.length > 0 && (0, i.jsx)("span", {
                    className: S().faces,
                    children: f2.slice(0, 5).map(
                      (e3) => (0, i.jsx)(
                        "img",
                        {
                          className: S().face,
                          src: e3.src,
                          alt: "",
                          width: 28,
                          height: 28,
                          loading: "lazy",
                          decoding: "async"
                        },
                        e3.src
                      )
                    )
                  }),
                  (0, i.jsxs)("p", {
                    className: S().proofText,
                    children: [
                      (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        children: y2(
                          (0, i.jsx)(z, { value: g2 + +!!V, reduced: j2 })
                        )
                      }),
                      (0, i.jsx)("span", {
                        className: S().srOnly,
                        children: `${M(g2 + +!!V)} people are on the list`
                      })
                    ]
                  })
                ]
              }),
              (0, i.jsx)("p", {
                className: S().srOnly,
                role: "status",
                "aria-live": "polite",
                children: K
              })
            ]
          })
        ]
      })
    });
  }
  function F({ hue: e2 }) {
    let a2 = (0, n.useRef)(null), [t2, o2] = (0, n.useState)(null);
    return (0, n.useEffect)(() => {
      let t3 = a2.current;
      if (!t3) return;
      let i2 = () => o2((a3) => {
        let i3 = (function(e3, a4) {
          var t4;
          let i4, n3 = getComputedStyle(e3), o3 = _(x(n3.getPropertyValue("--background")) ?? [1, 1, 1])[0] < 0.5, r2 = a4;
          if (void 0 === r2) {
            let e4 = x(n3.getPropertyValue("--accent")), a5 = e4 ? _(e4) : null;
            r2 = a5 && a5[1] > 0.04 ? a5[2] : 268;
          }
          return t4 = r2, i4 = o3 ? k : j, {
            base: o3 ? b(0.175, 0.012, t4) : b(0.982, 8e-3, t4),
            points: v.map((e4, a5) => ({
              ...e4,
              color: b(i4[a5][0], i4[a5][1], t4 + i4[a5][2])
            }))
          };
        })(t3, e2);
        return a3 && JSON.stringify(a3) === JSON.stringify(i3) ? a3 : i3;
      });
      i2();
      let n2 = new MutationObserver(i2);
      return n2.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      }), () => n2.disconnect();
    }, [e2]), (0, i.jsx)("div", {
      ref: a2,
      className: S().mesh,
      "data-ready": t2 ? "" : void 0,
      "aria-hidden": "true",
      children: t2 && (0, i.jsx)(g.o, {
        mode: "background",
        base: t2.base,
        points: t2.points,
        grain: 0.06,
        speed: 0.55,
        maxPoints: 8
      })
    });
  }
  function z({ value: e2, from: a2, reduced: t2, delay: n2 = 0 }) {
    let o2 = M(e2).split(""), r2 = void 0 === a2 ? null : M(a2).padStart(o2.length, "0");
    return (0, i.jsx)("span", {
      className: S().roll,
      "aria-hidden": "true",
      children: o2.map((e3, a3) => {
        let s2 = o2.length - 1 - a3;
        if (!/\d/.test(e3))
          return (0, i.jsx)("span", { children: e3 }, `sep-${s2}`);
        let d2 = Number(e3), c2 = r2 ? Number(/\d/.test(r2[a3]) ? r2[a3] : 0) : null;
        return (0, i.jsx)(
          "span",
          {
            className: S().digit,
            children: (0, i.jsx)(l.PY1.span, {
              className: S().reel,
              initial: !t2 && null !== c2 && { y: `${-(10 * c2)}%` },
              animate: { y: `${-(10 * d2)}%` },
              transition: t2 ? { duration: 0 } : {
                type: "spring",
                visualDuration: 0.9,
                bounce: 0,
                delay: n2 + 0.06 * a3
              },
              children: Array.from(
                { length: 10 },
                (e4, a4) => (0, i.jsx)("span", { children: a4 }, a4)
              )
            })
          },
          `digit-${s2}`
        );
      })
    });
  }
  let B = R;
}

__m(__module,__exports,__require);
});
A.reg(86454, function(__module,__exports,__require){
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
});
A.regCss(92736, ".root{--gutter:var(--space-6);--pill-height:56px;--hairline:color-mix(in oklab,var(--foreground) 7%,transparent);position:relative;box-sizing:border-box;isolation:isolate;display:grid;width:100%;min-height:100vh;min-height:100svh;align-content:center;overflow:hidden;container-type:inline-size;background:color-mix(in oklab,var(--accent) 3%,var(--background));color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-align:center}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.mesh{position:absolute;z-index:-1;inset:0;opacity:0;transition:opacity 1.2s var(--ease-standard)}\n.mesh[data-ready]{opacity:1}\n@media (prefers-reduced-motion:reduce){.mesh{transition:none}\n.inner{position:relative;display:grid;grid-template-columns:minmax(0,1fr);justify-items:center;padding:clamp(72px,12svh,128px) var(--gutter)}\n@container (max-width: 560px){.inner{--gutter:var(--space-4)}\n.title{max-width:14ch;margin:0;font-family:var(--font-display);font-size:clamp(2.125rem,1.2rem + 5cqi,var(--text-5xl));font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.word{display:inline-block;will-change:transform,opacity,filter}\n.description{max-width:34rem;margin:var(--space-5) 0 0;color:var(--text-secondary);font-size:var(--text-lg);line-height:var(--leading-body);text-wrap:pretty}\n.description{font-size:var(--text-base)}\n.formWrap{width:min(460px,100%);margin-top:var(--space-10)}\n.pill{position:relative;height:var(--pill-height);border-radius:calc(var(--pill-height) / 2);background:var(--surface-raised);box-shadow:0 0 0 1px var(--hairline),var(--shadow-raised);text-align:left;transition:box-shadow var(--duration-standard) var(--ease-standard)}\n.pill[data-invalid]{box-shadow:0 0 0 1px color-mix(in oklab,var(--danger) 70%,transparent),var(--shadow-raised)}\n.pill[data-state=success] .done{pointer-events:auto}\n.pill:focus-within{box-shadow:0 0 0 1px color-mix(in oklab,var(--foreground) 28%,transparent),var(--shadow-raised)}\n.goLabel,.go,.pill,.spinner{transition:none}\n.field{position:relative;display:flex;height:100%;align-items:center;padding:6px 6px 6px 22px}\n.field[data-valid] .input{padding-right:30px}\n@container (max-width: 420px){.field{padding-left:18px}\n.input{width:0;min-width:0;height:100%;flex:1;border:0;padding:0;background:none;color:var(--foreground);font:inherit;font-size:max(16px,var(--text-base));letter-spacing:var(--tracking-body);outline:none;appearance:none}\n.input::placeholder{color:var(--text-muted);opacity:1}\n.input[readonly]{color:var(--text-secondary)}\n.valid{display:grid;flex:none;place-items:center;margin:0 10px 0 -26px;color:var(--success);pointer-events:none}\n.go{position:relative;display:grid;height:44px;min-width:44px;flex:none;place-items:center;border:0;border-radius:22px;padding:0 20px;background:var(--foreground);color:var(--background);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.go>*{grid-area:1/1}\n.go:active:not([data-busy]){transform:scale(.97)}\n.go[data-busy]{cursor:progress}\n@media (hover:hover) and (pointer:fine){.go:hover:not([data-busy]){opacity:.88}\n.go{padding:0 16px}\n.goLabel{transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard)}\n.goLabel[data-hidden]{opacity:0;filter:blur(2px)}\n.labelShort{display:none}\n.labelShort{display:inline}\n.spinner{width:18px;height:18px;border:2px solid;border-right:2px solid transparent;border-radius:50%;opacity:0;transform:scale(.6);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-standard);animation:spin .7s linear infinite}\n.spinner[data-shown]{opacity:1;transform:scale(1)}\n.spinner{animation-duration:1.6s}\n.done{position:absolute;inset:0;display:grid;place-items:center;border-radius:inherit;padding:0 20px;background:var(--foreground);color:var(--background);font-size:var(--text-base);font-weight:500;outline:none;opacity:0;pointer-events:none;clip-path:inset(6px 6px 6px calc(100% - 50px) round 22px)}\n.done{font-size:var(--text-sm)}\n.doneBody{display:inline-flex;line-height:1.25;min-width:0;align-items:center;gap:10px;white-space:nowrap}\n.doneMark{display:grid;width:22px;height:22px;flex:none;place-items:center;border-radius:50%;background:var(--success);color:var(--background)}\n.roll{display:inline-flex;height:1.25em;line-height:1.25;vertical-align:top;font-variant-numeric:tabular-nums}\n.digit{display:inline-block;height:1.25em;overflow:hidden;line-height:1.25;mask-image:linear-gradient(transparent,#000 22%,#000 78%,transparent)}\n.reel{display:flex;flex-direction:column}\n.reel>span{height:1.25em}\n.note{display:grid;min-height:1.5em;margin-top:14px;justify-items:center;font-size:var(--text-sm)}\n.note>*{grid-area:1/1}\n.note{min-height:3em}\n.noteText{max-width:100%;margin:0;color:var(--text-muted);line-height:1.5;text-wrap:balance}\n.error{color:var(--danger)}\n.link{position:relative;display:inline;border:0;padding:0;background:none;color:var(--foreground);font:inherit;font-weight:500;text-decoration:underline;text-decoration-color:color-mix(in oklab,var(--foreground) 30%,transparent);text-underline-offset:3px;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent;transition:text-decoration-color var(--duration-fast) var(--ease-standard)}\n.link:after{content:\"\";position:absolute;inset:-12px -6px}\n.link:hover{text-decoration-color:currentColor}\n.proof{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:clamp(36px,6cqi,56px)}\n.proof{flex-direction:column;gap:10px}\n.faces{display:flex;flex:none}\n.face{display:block;width:28px;height:28px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 2px var(--surface-raised);background:var(--surface-muted)}\n.face+.face{margin-left:-8px}\n.proofText{margin:0;line-height:1.25;color:var(--text-secondary);font-size:var(--text-sm)}\n.proofStrong{color:var(--foreground);font-weight:500}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n@container (max-width: 340px){.labelLong{display:none}", {"root":"root","mesh":"mesh","inner":"inner","title":"title","word":"word","description":"description","formWrap":"formWrap","pill":"pill","done":"done","goLabel":"goLabel","go":"go","spinner":"spinner","field":"field","input":"input","valid":"valid","labelShort":"labelShort","doneBody":"doneBody","doneMark":"doneMark","roll":"roll","digit":"digit","reel":"reel","note":"note","noteText":"noteText","error":"error","link":"link","proof":"proof","faces":"faces","face":"face","proofText":"proofText","proofStrong":"proofStrong","srOnly":"srOnly","labelLong":"labelLong"});
A.reg(94274, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => D });
  var i = a(95155), r = a(12115), n = a(55809), l = a(25354), s = a(18310), u = a(28245), o = a(92171), d = a(80642), c = a(7770), p = a(66754), m = a.n(p);
  let { spring: h, duration: f, blur: b } = c.T, x = [...c.T.ease.enter], g = [...c.T.ease.standard], y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], _ = ({ visualDuration: e2, bounce: t2 }) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      restDelta: 2e-3,
      restSpeed: 0.02
    };
  }, v = _(h.snappy), j = _(h.morph), w = 9, N = (e2) => (String(e2).split(".")[1] ?? "").length, k = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), $ = (e2) => e2 >= "0" && e2 <= "9", M = {
    enter: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${b.soft}px)`
    }),
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: {
        width: h.morph,
        scale: h.morph,
        opacity: h.morph,
        y: h.snappy,
        filter: { duration: f.standard, ease: x }
      }
    },
    exit: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${b.subtle}px)`,
      transition: {
        width: h.smooth,
        scale: h.smooth,
        y: { duration: f.fast, ease: g },
        opacity: { duration: f.instant },
        filter: { duration: f.instant }
      }
    })
  }, P = {
    enter: { width: "auto", scale: 1, opacity: 0, y: 0, filter: "none" },
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "none",
      transition: { duration: f.instant }
    },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  };
  function F({ position: e2, digit: t2 }) {
    let a2 = (e3) => ((t2 - e3) % 10 + 15) % 10 - 5, r2 = (0, n.G)(e2, (e3) => `${1.05 * a2(e3)}em`), s2 = (0, n.G)(e2, (e3) => Math.max(0, 1 - Math.abs(a2(e3)) ** 1.5 * 1.1)), u2 = (0, n.G)(e2, (e3) => Math.abs(a2(e3)) >= 1 ? "hidden" : "visible"), o2 = (0, n.G)(e2, (e3) => {
      let t3 = Math.abs(a2(e3));
      return t3 < 0.02 || t3 >= 1 ? "none" : `blur(${(t3 * b.soft * 0.75).toFixed(2)}px)`;
    });
    return (0, i.jsx)(l.PY1.span, {
      className: m().glyph,
      style: { y: r2, opacity: s2, filter: o2, visibility: u2 },
      children: t2
    });
  }
  function S({ digit: e2, direction: t2 }) {
    let a2 = (0, s.I)(), n2 = (0, u.d)(e2), l2 = (0, r.useRef)({ digit: e2, target: e2 });
    return (0, r.useLayoutEffect)(() => {
      let i2 = l2.current;
      i2.digit !== e2 && (i2.target += t2 > 0 ? (e2 - i2.digit + 10) % 10 : -((i2.digit - e2 + 10) % 10), i2.digit = e2, a2 ? n2.jump(i2.target) : (0, o.i)(n2, i2.target, v));
    }, [e2, t2, n2, a2]), (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: m().sizer, children: "0" }),
        y.map((e3) => (0, i.jsx)(F, { position: n2, digit: e3 }, e3))
      ]
    });
  }
  function I({ value: e2, text: t2 }) {
    let a2, n2, u2, o2, c2 = (0, s.I)(), [p2, h2] = (0, r.useState)({ value: e2, direction: 1 });
    p2.value !== e2 && h2({ value: e2, direction: e2 > p2.value ? 1 : -1 });
    let f2 = p2.value === e2 ? p2.direction : e2 > p2.value ? 1 : -1;
    return (0, i.jsx)("span", {
      className: m().number,
      children: (0, i.jsx)(d.N, {
        initial: false,
        custom: f2,
        children: (n2 = (a2 = [...t2]).findIndex($), u2 = a2.length - 1 - [...a2].reverse().findIndex($), o2 = a2.filter($).length, a2.map(
          (e3, t3) => n2 < 0 || t3 < n2 ? { key: `p${t3}${e3}`, text: e3 } : t3 > u2 ? { key: `s${a2.length - t3}${e3}`, text: e3 } : $(e3) ? { key: `d${--o2}`, digit: Number(e3) } : { key: `g${o2}${e3}`, text: e3 }
        )).map(
          (e3) => (0, i.jsx)(
            l.PY1.span,
            {
              className: "digit" in e3 ? m().column : m().symbol,
              custom: f2,
              variants: c2 ? P : M,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: "digit" in e3 ? (0, i.jsx)(S, { digit: e3.digit, direction: f2 }) : e3.text
            },
            e3.key
          )
        )
      })
    });
  }
  let A = { opacity: 0, scale: 0.6, y: 6, filter: `blur(${b.subtle}px)` }, L = {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transitionEnd: { filter: "none" }
  }, G = {
    opacity: 0,
    scale: 0.8,
    y: 4,
    filter: `blur(${b.subtle}px)`,
    transition: { duration: f.instant, ease: g }
  }, R = {
    ...h.snappy,
    opacity: { duration: f.fast, ease: x },
    filter: { duration: f.fast, ease: x }
  };
  function C({
    quiet: e2,
    index: t2,
    shown: a2,
    value: r2,
    text: u2,
    low: o2,
    high: c2,
    ariaLabel: p2,
    labelledBy: b2,
    active: x2,
    lifted: g2,
    bubble: y2,
    disabled: _2,
    onKeyDown: v2,
    onFocus: j2,
    onBlur: w2
  }) {
    let N2 = (0, s.I)(), k2 = (0, n.G)(a2, (e3) => `${e3 - 100}%`);
    return (0, i.jsxs)(l.PY1.div, {
      className: m().thumbLayer,
      style: { x: k2, zIndex: x2 ? 2 : 1 },
      children: [
        (0, i.jsx)(l.PY1.div, {
          role: "slider",
          "data-thumb": "",
          "data-index": t2,
          "data-active": g2 || void 0,
          "data-quiet": e2 || void 0,
          className: m().thumb,
          tabIndex: _2 ? -1 : 0,
          "aria-label": p2,
          "aria-labelledby": p2 ? void 0 : b2,
          "aria-valuemin": o2,
          "aria-valuemax": c2,
          "aria-valuenow": r2,
          "aria-valuetext": u2,
          "aria-orientation": "horizontal",
          "aria-disabled": _2 || void 0,
          initial: false,
          animate: { scale: g2 ? 1.16 : 1 },
          transition: N2 ? { duration: 0 } : h.snappy,
          onKeyDown: v2,
          onFocus: j2,
          onBlur: w2
        }),
        (0, i.jsx)(l.PY1.span, {
          className: m().bubbleAnchor,
          style: { "--at": a2 },
          children: (0, i.jsx)(d.N, {
            children: y2 && (0, i.jsx)(
              l.PY1.span,
              {
                className: m().bubble,
                "aria-hidden": "true",
                initial: N2 ? { opacity: 0 } : A,
                animate: L,
                exit: N2 ? { opacity: 0, transition: { duration: f.instant } } : G,
                transition: N2 ? { duration: f.instant } : R,
                children: (0, i.jsx)(I, { value: r2, text: u2 })
              },
              "bubble"
            )
          })
        })
      ]
    });
  }
  function D({
    label: e2,
    value: t2,
    defaultValue: a2,
    onValueChange: d2,
    onValueCommit: c2,
    min: p2 = 0,
    max: h2 = 100,
    step: f2 = 1,
    largeStep: b2,
    marks: x2,
    minStepsBetweenThumbs: g2 = 0,
    format: y2,
    showValue: _2 = true,
    thumbLabels: $2,
    start: M2,
    end: P2,
    name: F2,
    disabled: S2,
    className: A2
  }) {
    let L2 = (0, s.I)(), G2 = (0, r.useId)(), R2 = f2 > 0 ? f2 : 1, E = h2 - p2 || 1, T = Array.isArray(t2 ?? a2), z = (e3) => void 0 === e3 ? [p2, h2].slice(0, T ? 2 : 1) : Array.isArray(e3) ? [e3[0], e3[1]] : [e3], [B, Y] = (0, r.useState)(() => z(a2)), Z = void 0 === t2 ? B : z(t2), q = Math.max(N(R2), N(p2)), U = y2 ?? ((e3) => e3.toLocaleString("en-US", {
      minimumFractionDigits: q,
      maximumFractionDigits: q
    })), V = T ? g2 * R2 : 0, K = (e3) => (e3 - p2) / E * 100, X = (e3) => p2 + e3 / 100 * E, H = (e3) => Number((p2 + Math.round((e3 - p2) / R2) * R2).toFixed(q)), Q = (e3, t3) => 1 === e3 ? t3[0] + V : p2, W = (e3, t3) => 0 === e3 && T ? t3[1] - V : h2, O = (e3, t3, a3) => k(H(k(t3, p2, h2)), Q(e3, a3), W(e3, a3)), J = (0, r.useRef)(null), ee = (0, r.useRef)(null), et = (0, r.useRef)(Z), ea = (0, r.useRef)(Z.map(K)), ei = (0, r.useRef)(null), er = (0, r.useRef)(false), en = (0, r.useRef)(void 0), [el, es] = (0, r.useState)(null), [eu, eo] = (0, r.useState)(null), [ed, ec] = (0, r.useState)(null), [ep, em] = (0, r.useState)(+!!T), [eh, ef] = (0, r.useState)(null), eb = (0, u.d)(K(Z[0])), ex = (0, u.d)(K(Z[1] ?? Z[0])), eg = (0, u.d)(0), ey = (0, u.d)(0), e_ = (0, n.G)(() => eb.get() + eg.get()), ev = (0, n.G)(() => ex.get() + ey.get()), ej = (0, n.G)(() => {
      let e3 = T ? k(e_.get(), 0, 100) : 0, t3 = k((T ? ev : e_).get(), 0, 100);
      return `inset(0 ${(100 - t3).toFixed(3)}% 0 ${e3.toFixed(3)}% round 999px)`;
    }), ew = [
      { pos: eb, lag: eg, shown: e_ },
      { pos: ex, lag: ey, shown: ev }
    ], eN = (e3) => T ? [e3[0], e3[1]] : e3[0];
    function ek(e3, a3) {
      let i2 = et.current;
      if (i2[e3] === a3) return;
      let r2 = i2.map((t3, i3) => i3 === e3 ? a3 : t3);
      et.current = r2, void 0 === t2 && Y(r2), d2?.(eN(r2));
    }
    function e$(e3) {
      let t3 = ee.current?.querySelector(`[data-index="${e3}"]`);
      t3 && document.activeElement !== t3 && (ef(e3), er.current = true, t3.focus({ preventScroll: true }), er.current = false);
    }
    (0, r.useLayoutEffect)(() => {
      et.current = Z, Z.forEach((e3, t3) => {
        let a3 = K(e3), i2 = ew[t3];
        if (ei.current?.index === t3 || ea.current[t3] === a3) return;
        ea.current[t3] = a3;
        let r2 = i2.pos.get() + i2.lag.get();
        i2.lag.jump(0), i2.pos.jump(r2), L2 ? i2.pos.jump(a3) : (0, o.i)(i2.pos, a3, v);
      });
    }), (0, r.useEffect)(() => () => window.clearTimeout(en.current), []);
    let eM = () => J.current?.getBoundingClientRect().width || 1;
    function eP(e3, t3) {
      if (!T) return 0;
      let a3 = Math.abs(e3 - K(t3[0])), i2 = Math.abs(e3 - K(t3[1]));
      return a3 === i2 ? e3 < K(t3[0]) ? 0 : 1 : a3 < i2 ? 0 : 1;
    }
    function eF(e3, t3, a3, i2) {
      let r2 = ew[t3], n2 = r2.pos.get() + r2.lag.get();
      e3.index = t3, e3.grab = i2 ? 0 : a3 - n2, r2.lag.jump(0), r2.pos.jump(n2), es(t3), em(t3), window.clearTimeout(en.current), ec(null), e$(t3), i2 && eS(e3, a3, 0, true);
    }
    function eS(e3, t3, a3, i2 = false) {
      let r2 = e3.index;
      if (null === r2) return;
      let n2 = ew[r2], l2 = et.current, s2 = eM(), u2 = t3 - e3.grab, d3 = k(u2, K(Q(r2, l2)), K(W(r2, l2))), c3 = L2 ? d3 : d3 + ((e4, t4 = w) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)(
        (u2 - d3) / 100 * s2
      ) / s2 * 100;
      if (i2 && !L2) {
        let e4 = n2.pos.get();
        n2.pos.jump(c3), n2.lag.jump(e4 - c3), (0, o.i)(n2.lag, 0, v);
      } else n2.pos.set(c3);
      e3.raw = u2, e3.samples.push({ t: a3, p: c3 }), e3.samples.length > 6 && e3.samples.shift(), ek(r2, O(r2, X(u2), l2));
    }
    function eI(e3) {
      let t3 = ei.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      ei.current = null;
      let a3 = t3.index;
      if (null === a3) return;
      let i2 = ew[a3], r2 = et.current, n2 = eM(), l2 = t3.samples, s2 = l2[0], u2 = l2[l2.length - 1], d3 = u2 && s2 ? (u2.t - s2.t) / 1e3 : 0, p3 = (u2 && s2 && d3 > 8e-3 && e3.timeStamp - u2.t < 60 ? (u2.p - s2.p) / d3 : 0) + i2.lag.getVelocity(), m2 = R2 / E * 100, h3 = "pointerup" === e3.type && m2 / 100 * n2 >= 12 ? k(0.099 * p3, -m2, m2) : 0, f3 = O(a3, X(t3.raw + h3), r2), b3 = i2.pos.get() + i2.lag.get(), x3 = K(f3);
      i2.lag.jump(0), i2.pos.jump(b3), ea.current[a3] = x3, L2 ? i2.pos.jump(x3) : (0, o.i)(i2.pos, x3, { ...v, velocity: p3 }), ek(a3, f3), es(null), window.clearTimeout(en.current), ec(a3), en.current = window.setTimeout(() => ec(null), 700), c2?.(eN(et.current));
    }
    let eA = (x2 ?? []).map((e3) => "number" == typeof e3 ? { value: e3 } : e3).filter((e3) => e3.value >= p2 && e3.value <= h2), eL = eA.filter((e3) => e3.value > p2 && e3.value < h2), eG = eA.filter((e3) => e3.label), eR = $2 ?? [`${e2}, minimum`, `${e2}, maximum`];
    return (0, i.jsxs)("div", {
      className: [m().root, A2].filter(Boolean).join(" "),
      "data-disabled": S2 || void 0,
      "data-dragging": null !== el || void 0,
      "data-marks": eG.length > 0 || void 0,
      children: [
        (0, i.jsxs)("div", {
          className: m().header,
          children: [
            (0, i.jsx)("span", { id: G2, className: m().label, children: e2 }),
            _2 && (0, i.jsxs)("span", {
              className: m().readout,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)(I, { value: Z[0], text: U(Z[0]) }),
                T && (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: m().dash,
                      children: "\u2013"
                    }),
                    (0, i.jsx)(I, { value: Z[1], text: U(Z[1]) })
                  ]
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: m().body,
          children: [
            M2 && (0, i.jsx)("div", { className: m().start, children: M2 }),
            (0, i.jsxs)("div", {
              className: m().control,
              onPointerDown: function(e3) {
                if (S2 || 0 !== e3.button || !e3.isPrimary) return;
                let t3 = J.current?.getBoundingClientRect();
                if (!t3) return;
                let a3 = (e3.clientX - t3.left) / (t3.width || 1) * 100, i2 = e3.target.closest("[data-thumb]"), r2 = et.current;
                e3.currentTarget.setPointerCapture(e3.pointerId);
                let n2 = {
                  pointer: e3.pointerId,
                  index: null,
                  grab: 0,
                  x: e3.clientX,
                  raw: a3,
                  samples: []
                };
                (ei.current = n2, i2 && T && r2[0] === r2[1]) ? e$(Number(i2.dataset.index)) : (eF(n2, i2 ? Number(i2.dataset.index) : eP(a3, r2), a3, !i2), n2.samples = [
                  { t: e3.timeStamp, p: ew[n2.index ?? 0].pos.get() }
                ]);
              },
              onPointerMove: function(e3) {
                let t3 = ei.current;
                if (!t3 || t3.pointer !== e3.pointerId) return;
                let a3 = J.current?.getBoundingClientRect();
                if (!a3) return;
                let i2 = (e3.clientX - a3.left) / (a3.width || 1) * 100;
                if (null === t3.index) {
                  let r2 = e3.clientX - t3.x;
                  if (2 > Math.abs(r2)) return;
                  eF(t3, r2 < 0 ? 0 : 1, i2 - r2 / (a3.width || 1) * 100, false);
                }
                eS(t3, i2, e3.timeStamp);
              },
              onPointerUp: eI,
              onPointerCancel: eI,
              onLostPointerCapture: eI,
              onMouseDown: (e3) => e3.preventDefault(),
              children: [
                (0, i.jsxs)("div", {
                  ref: J,
                  className: m().track,
                  children: [
                    eL.map(
                      (e3) => (0, i.jsx)(
                        "span",
                        {
                          className: m().tick,
                          style: { left: `${K(e3.value)}%` }
                        },
                        e3.value
                      )
                    ),
                    (0, i.jsx)(l.PY1.div, {
                      className: m().fill,
                      style: { clipPath: ej },
                      children: eL.map(
                        (e3) => (0, i.jsx)(
                          "span",
                          {
                            className: m().tick,
                            style: { left: `${K(e3.value)}%` }
                          },
                          e3.value
                        )
                      )
                    })
                  ]
                }),
                (0, i.jsx)("div", {
                  ref: ee,
                  className: m().thumbs,
                  children: Z.map(
                    (e3, t3) => (0, i.jsx)(
                      C,
                      {
                        quiet: eh === t3,
                        index: t3,
                        shown: ew[t3].shown,
                        value: e3,
                        text: U(e3),
                        low: Q(t3, Z),
                        high: W(t3, Z),
                        ariaLabel: T ? eR[t3] : void 0,
                        labelledBy: G2,
                        active: ep === t3,
                        lifted: el === t3,
                        bubble: el === t3 || eu === t3 || ed === t3,
                        disabled: S2,
                        onKeyDown: (e4) => (function(e5, t4) {
                          let a3;
                          if (S2) return;
                          let i2 = et.current, r2 = i2[e5], n2 = b2 ?? Math.max(R2, H(p2 + E / 10) - p2), l2 = {
                            ArrowRight: R2,
                            ArrowUp: R2,
                            ArrowLeft: -R2,
                            ArrowDown: -R2,
                            PageUp: n2,
                            PageDown: -n2
                          };
                          if ("Home" === t4.key) a3 = Q(e5, i2);
                          else if ("End" === t4.key) a3 = W(e5, i2);
                          else {
                            if (!(t4.key in l2)) return;
                            a3 = r2 + (t4.shiftKey && /^Arrow/.test(t4.key) ? Math.sign(l2[t4.key]) * n2 : l2[t4.key]);
                          }
                          t4.preventDefault(), eo(e5), ef(null), em(e5);
                          let s2 = O(e5, a3, i2);
                          if (s2 === r2) {
                            let t5 = Math.sign(a3 - r2);
                            t5 && !L2 && (0, o.i)(ew[e5].pos, ea.current[e5], {
                              ...j,
                              velocity: 150 * t5 / eM() * 100
                            });
                            return;
                          }
                          ek(e5, s2), c2?.(eN(et.current));
                        })(t3, e4),
                        onFocus: (e4) => {
                          !er.current && e4.currentTarget.matches(":focus-visible") && eo(t3);
                        },
                        onBlur: () => {
                          eo((e4) => e4 === t3 ? null : e4), ef((e4) => e4 === t3 ? null : e4);
                        }
                      },
                      t3
                    )
                  )
                })
              ]
            }),
            P2 && (0, i.jsx)("div", { className: m().end, children: P2 }),
            eG.length > 0 && (0, i.jsx)("div", {
              className: m().marks,
              "aria-hidden": "true",
              children: eG.map((e3) => {
                let t3;
                return (0, i.jsx)(
                  "span",
                  {
                    className: m().markLabel,
                    "data-on": (t3 = e3.value, (T ? t3 >= Z[0] && t3 <= Z[1] : t3 <= Z[0]) || void 0),
                    "data-edge": e3.value === p2 ? "start" : e3.value === h2 ? "end" : void 0,
                    style: { left: `${K(e3.value)}%` },
                    onClick: () => (function(e4) {
                      if (S2) return;
                      let t4 = et.current, a3 = eP(K(e4), t4), i2 = O(a3, e4, t4);
                      em(a3), e$(a3), i2 !== t4[a3] && (ek(a3, i2), c2?.(eN(et.current)));
                    })(e3.value),
                    children: e3.label
                  },
                  e3.value
                );
              })
            })
          ]
        }),
        F2 && Z.map(
          (e3, t3) => (0, i.jsx)(
            "input",
            { type: "hidden", name: F2, value: e3, disabled: S2 },
            t3
          )
        )
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("hero-signup", [39726,66754,92736]);
A.item("hero-signup", {entry:75543, export:"HeroSignup", kind:"block", tier:"pro", unresolved:[]});
})();