/* wallet-stack (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(7780, ".demo{display:grid;width:100%;place-items:center}", {"demo":"demo"});
A.reg(9803, function(__module,__exports,__require){
"use strict";
function __m(e, o, t) {
  t.d(o, { A: () => a });
  var r = t(51811);
  let n = {
    name: "plane",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
          key: "1v9wt8"
        }
      ]
    ]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
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
A.reg(24893, function(__module,__exports,__require){
"use strict";
function __m(t, s, e) {
  "use strict";
  e.d(s, { A: () => r });
  var i = e(51811);
  let a = {
    name: "coffee",
    size: 24,
    node: [
      ["path", { d: "M10 2v2", key: "7u0qdc" }],
      ["path", { d: "M14 2v2", key: "6buw04" }],
      [
        "path",
        {
          d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
          key: "pwadti"
        }
      ],
      ["path", { d: "M6 2v2", key: "colzsn" }]
    ]
  };
  a.node;
  let r = (0, i.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(73080, ".wallet{--wallet-ambient:oklch(22% .02 260/.26);--wallet-contact:oklch(0% 0 0/.16);--wallet-glass:linear-gradient(135deg,oklch(97% .02 215/.8),oklch(91% .035 225/.64) 55%,oklch(94% .03 250/.74));--wallet-glass-ink:oklch(27% .03 240);--wallet-glass-edge:oklch(100% 0 0/.8);display:grid;width:min(100%,18.5rem);gap:10px;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);-webkit-tap-highlight-color:transparent}\n:root[data-theme=dark] .wallet{--wallet-ambient:oklch(0% 0 0/.7);--wallet-contact:oklch(0% 0 0/.45);--wallet-glass:linear-gradient(135deg,oklch(72% .03 220/.42),oklch(52% .04 235/.34) 55%,oklch(64% .04 260/.4));--wallet-glass-ink:oklch(96% .01 230);--wallet-glass-edge:oklch(100% 0 0/.32)}\n@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .wallet{--wallet-ambient:oklch(0% 0 0/.7);--wallet-contact:oklch(0% 0 0/.45);--wallet-glass:linear-gradient(135deg,oklch(72% .03 220/.42),oklch(52% .04 235/.34) 55%,oklch(64% .04 260/.4));--wallet-glass-ink:oklch(96% .01 230);--wallet-glass-edge:oklch(100% 0 0/.32)}\n.header{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:12px}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.count{display:inline-flex;color:var(--text-muted);font-size:var(--text-sm);font-variant-numeric:tabular-nums;white-space:pre}\n.countValue{display:inline-block;min-width:1ch;text-align:right}\n.headerButton{display:inline-flex;height:32px;align-items:center;gap:6px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);cursor:pointer;font:inherit;font-size:var(--text-sm);font-weight:500;letter-spacing:inherit;transition:background-color var(--duration-fast) var(--ease-standard),scale var(--duration-fast) var(--ease-standard)}\n.headerButton:active{scale:.97}\n@media (hover:hover) and (pointer:fine){.headerButton:hover{background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.card,.headerButton{transition:none}\n.stage{position:relative;height:calc(100cqi * 53.98 / 85.6 + 13rem);margin:-12px -12px 0;padding:12px 12px 0;box-sizing:content-box;touch-action:pan-x;user-select:none;overflow-x:visible;overflow-y:clip}\n.stage[data-open] .cardSlot{touch-action:none}\n.cardSlot{position:absolute;top:12px;right:12px;left:12px;transform-origin:50% 0;will-change:transform}\n.shadow{position:absolute;inset:8% 5% 0;border-radius:12%;box-shadow:0 18px 34px -8px var(--wallet-ambient),0 30px 60px -20px var(--wallet-ambient);pointer-events:none;will-change:opacity}\n.card{--ink:oklch(30% .01 260);--ink-soft:oklch(30% .01 260/.72);--emboss-hi:oklch(100% 0 0/.75);--emboss-lo:oklch(0% 0 0/.22);--bevel-hi:oklch(100% 0 0/.85);--bevel-lo:oklch(0% 0 0/.18);--edge:oklch(0% 0 0/.1);position:relative;display:block;width:100%;box-sizing:border-box;overflow:hidden;aspect-ratio:85.6/53.98;padding:0;border:0;border-radius:3.715cqi;container-type:inline-size;background:none;color:var(--ink);cursor:pointer;font:inherit;letter-spacing:inherit;text-align:left;box-shadow:0 1px 1px var(--wallet-contact),0 3px 8px -3px var(--wallet-contact);isolation:isolate;will-change:transform}\n.card>*{position:absolute}\n.card[data-variant=metal] .material{background:radial-gradient(120% 90% at 22% 12%,oklch(100% 0 0/.8) 0,oklch(100% 0 0/0) 50%),conic-gradient(from 215deg at 58% 46%,oklch(86% .004 260),oklch(96% .002 260),oklch(79% .006 260),oklch(93% .003 260),oklch(83% .005 260),oklch(97% .002 260),oklch(86% .004 260))}\n.card[data-variant=metal] .texture{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='b'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.0025 .95' numOctaves='2' seed='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23b)'/%3E%3C/svg%3E\");mix-blend-mode:overlay;opacity:.5}\n.card[data-variant=metal] .sweep{background:linear-gradient(104deg,transparent 38%,oklch(100% 0 0/.34) 47%,oklch(100% 0 0/0) 58%)}\n.card[data-variant=metal] .sheen{mix-blend-mode:overlay}\n.card[data-variant=black]{--ink:oklch(90% .006 260);--ink-soft:oklch(90% .006 260/.62);--emboss-hi:oklch(100% 0 0/.14);--emboss-lo:oklch(0% 0 0/.7);--bevel-hi:oklch(100% 0 0/.2);--bevel-lo:oklch(0% 0 0/.5);--edge:oklch(100% 0 0/.08)}\n.card[data-variant=black] .material{background:radial-gradient(110% 130% at 8% 0,oklch(29% .03 265),oklch(17% .022 265) 55%,oklch(12% .016 265))}\n.card[data-variant=black] .art{opacity:.35;filter:grayscale(1) contrast(1.15);mix-blend-mode:luminosity}\n.card[data-variant=black] .texture{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E\")}\n.card[data-variant=black] .texture path{fill:none;stroke:oklch(80% .03 250/.13);stroke-width:.7;vector-effect:non-scaling-stroke}\n.card[data-variant=black] .sweep{background:linear-gradient(118deg,transparent 30%,oklch(100% 0 0/.07) 44%,transparent 58%)}\n.card[data-variant=black] .sheen{mix-blend-mode:screen;opacity:.5;background:radial-gradient(circle at 50% 50%,oklch(100% 0 0/.16),oklch(100% 0 0/.04) 20%,transparent 36%)}\n.card[data-variant=black] .number{color:oklch(86% .008 260)}\n.card[data-variant=glass]{--ink:var(--wallet-glass-ink);--ink-soft:color-mix(in oklab,var(--wallet-glass-ink) 70%,transparent);--emboss-hi:oklch(100% 0 0/.45);--emboss-lo:oklch(0% 0 0/.12);--bevel-hi:var(--wallet-glass-edge);--bevel-lo:oklch(0% 0 0/.08);--edge:var(--wallet-glass-edge);-webkit-backdrop-filter:blur(24px) saturate(1.4);backdrop-filter:blur(24px) saturate(1.4)}\n.card[data-variant=glass] .material{background:var(--wallet-glass)}\n.card[data-variant=glass] .texture{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\");mix-blend-mode:overlay;opacity:.14}\n.card[data-variant=glass] .sweep{background:radial-gradient(90% 70% at 100% 100%,oklch(80% .08 200/.28),transparent 70%),linear-gradient(160deg,oklch(100% 0 0/.35),transparent 38%)}\n.card[data-variant=color]{--card-tint:oklch(42% .15 262);--ink:oklch(98% .01 260);--ink-soft:oklch(98% .01 260/.72);--emboss-hi:oklch(100% 0 0/.2);--emboss-lo:oklch(0% 0 0/.4);--bevel-hi:oklch(100% 0 0/.35);--bevel-lo:oklch(0% 0 0/.35);--edge:oklch(100% 0 0/.12)}\n.card[data-variant=color] .material{background:radial-gradient(130% 120% at 12% 0,oklch(from var(--card-tint) calc(l + .12) c h),var(--card-tint) 48%,oklch(from var(--card-tint) calc(l - .14) calc(c * .85) h))}\n.card[data-variant=color] .art{opacity:.55;mix-blend-mode:soft-light}\n.card[data-variant=color] .texture{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\");mix-blend-mode:overlay;opacity:.16}\n.card[data-variant=color] .sweep{background:linear-gradient(112deg,transparent 22%,oklch(100% 0 0/.16) 38%,oklch(100% 0 0/.03) 52%,transparent 64%),radial-gradient(70% 60% at 100% 110%,oklch(from var(--card-tint) calc(l + .16) c calc(h + 24)/.3),transparent 70%)}\n.card{transition:scale var(--duration-fast) var(--ease-standard)}\n.card:active{scale:.985}\n.card:active{scale:none}\n.art,.edge,.material,.sweep,.texture{inset:0;border-radius:inherit;pointer-events:none}\n.texture svg{width:100%;height:100%}\n.art{width:100%;height:100%;object-fit:cover}\n.edge{z-index:3;box-shadow:inset 0 0 0 .5px var(--edge),inset 0 1px 0 var(--bevel-hi),inset 0 -1px 1px var(--bevel-lo),inset 1px 0 0 oklch(100% 0 0/.12),inset -1px 0 0 oklch(0 0 0/.06)}\n.sheen{z-index:2;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at 50% 50%,oklch(100% 0 0/.42),oklch(100% 0 0/.12) 18%,transparent 36%);mix-blend-mode:soft-light;pointer-events:none;will-change:transform,opacity}\n.issuer{top:6.8cqi;left:7cqi;max-width:58cqi;font-family:var(--font-display);font-size:5.4cqi;font-weight:500;letter-spacing:-.02em}\n.issuer,.product{z-index:1;overflow:hidden;line-height:1;text-overflow:ellipsis;white-space:nowrap}\n.product{top:7.6cqi;right:7cqi;max-width:34cqi;color:var(--ink-soft);font-size:3.3cqi}\n.chip{z-index:1;top:21.5cqi;left:8.5cqi;width:13.6cqi;height:auto;filter:drop-shadow(0 .25cqi .3cqi oklch(0 0 0/.28))}\n.contactless{z-index:1;top:23.4cqi;left:25.5cqi;width:6.6cqi;height:6.6cqi;color:var(--ink-soft)}\n.number{z-index:1;top:37.6cqi;left:7cqi;display:flex;align-items:center;gap:2.2cqi;font-family:var(--font-display);font-size:5.6cqi;font-variant-numeric:tabular-nums;letter-spacing:.09em;line-height:1;text-shadow:0 .18cqi 0 var(--emboss-hi),0 -.18cqi 0 var(--emboss-lo);white-space:nowrap}\n.mask{font-size:4.4cqi;letter-spacing:.02em;opacity:.82;word-spacing:1.2cqi}\n.holder{left:7cqi;max-width:42cqi;overflow:hidden;letter-spacing:.02em;text-overflow:ellipsis;white-space:nowrap}\n.expiry,.holder{z-index:1;bottom:6.6cqi;font-size:3.5cqi;line-height:1;text-shadow:0 .14cqi 0 var(--emboss-hi),0 -.14cqi 0 var(--emboss-lo)}\n.expiry{left:52cqi;display:grid;gap:.8cqi;font-variant-numeric:tabular-nums;letter-spacing:.04em}\n.expiryLabel{color:var(--ink-soft);font-size:2.2cqi;letter-spacing:0;text-shadow:none}\n.network{z-index:1;right:6.4cqi;bottom:5.6cqi;display:flex;align-items:center;gap:1cqi;color:var(--ink);font-family:var(--font-display);font-size:4.2cqi;font-weight:500;letter-spacing:-.03em;line-height:1}\n.network svg{width:6.2cqi;height:6.2cqi}\n.detail{position:absolute;z-index:0;top:calc(12px + 100cqi * 53.98 / 85.6 * .88 + 14px);right:12px;bottom:calc(30px + 6px);left:12px;overflow-y:auto;scrollbar-width:none;will-change:opacity,transform}\n.detail[inert]{pointer-events:none}\n.detailBody{display:grid;gap:4px}\n.balance{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:0 2px 8px;border-bottom:1px solid var(--border)}\n.balanceLabel{color:var(--text-secondary);font-size:var(--text-sm)}\n.money{font-family:var(--font-display);font-size:var(--text-xl);font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.activity{display:grid;margin:0;padding:0;list-style:none}\n.transaction{display:grid;align-items:center;gap:10px;padding:4px 2px;grid-template-columns:32px minmax(0,1fr) auto}\n.txIcon{display:grid;width:32px;height:32px;place-items:center;overflow:hidden;border-radius:50%;background:var(--surface-muted);color:var(--text-secondary)}\n.txIcon img{width:100%;height:100%;object-fit:cover}\n.txText{display:grid;min-width:0}\n.txDetail,.txMerchant{overflow:hidden;line-height:1.3;text-overflow:ellipsis;white-space:nowrap}\n.txMerchant{font-size:var(--text-sm)}\n.txDetail{color:var(--text-muted);font-size:var(--text-xs)}\n.txAmount{font-size:var(--text-sm);font-variant-numeric:tabular-nums}\n.txAmount[data-positive]{color:var(--success)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"wallet":"wallet","header":"header","title":"title","count":"count","countValue":"countValue","headerButton":"headerButton","card":"card","stage":"stage","cardSlot":"cardSlot","shadow":"shadow","material":"material","texture":"texture","sweep":"sweep","sheen":"sheen","art":"art","number":"number","edge":"edge","issuer":"issuer","product":"product","chip":"chip","contactless":"contactless","mask":"mask","holder":"holder","expiry":"expiry","expiryLabel":"expiryLabel","network":"network","detail":"detail","detailBody":"detailBody","balance":"balance","balanceLabel":"balanceLabel","money":"money","activity":"activity","transaction":"transaction","txIcon":"txIcon","txText":"txText","txDetail":"txDetail","txMerchant":"txMerchant","txAmount":"txAmount","srOnly":"srOnly"});
A.reg(86364, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { WalletStackDemo: () => ee });
  var n = a(95155), r = a(51811);
  let i = {
    name: "shopping-basket",
    size: 24,
    node: [
      ["path", { d: "m15 11-1 9", key: "5wnq3a" }],
      ["path", { d: "m19 11-4-7", key: "cnml18" }],
      ["path", { d: "M2 11h20", key: "3eubbj" }],
      [
        "path",
        {
          d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
          key: "yiazzp"
        }
      ],
      ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
      ["path", { d: "m5 11 4-7", key: "116ra9" }],
      ["path", { d: "m9 11 1 9", key: "1ojof7" }]
    ]
  };
  i.node;
  let s = (0, r.A)(i);
  var l = a(86659);
  let c = {
    name: "utensils",
    size: 24,
    node: [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
      ["path", { d: "M7 2v20", key: "1473qp" }],
      [
        "path",
        { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }
      ]
    ],
    aliases: ["fork-knife"]
  };
  c.node;
  let o = (0, r.A)(c);
  var d = a(9803);
  let u = {
    name: "train-front",
    size: 24,
    node: [
      ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }],
      ["path", { d: "m9 15-1-1", key: "1yrq24" }],
      ["path", { d: "m15 15 1-1", key: "1t0d6s" }],
      [
        "path",
        {
          d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",
          key: "1p0hjs"
        }
      ],
      ["path", { d: "m8 19-2 3", key: "13i0xs" }],
      ["path", { d: "m16 19 2 3", key: "xo31yx" }]
    ]
  };
  u.node;
  let h = (0, r.A)(u), p = {
    name: "bike",
    size: 24,
    node: [
      ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
      ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
    ]
  };
  p.node;
  let m = (0, r.A)(p);
  var x = a(24893);
  let y = {
    name: "croissant",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487",
          key: "14kkz9"
        }
      ],
      [
        "path",
        {
          d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132",
          key: "1g7v07"
        }
      ],
      [
        "path",
        {
          d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42",
          key: "ratg6b"
        }
      ],
      [
        "path",
        {
          d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14",
          key: "4454f0"
        }
      ],
      [
        "path",
        {
          d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676",
          key: "qmemie"
        }
      ]
    ]
  };
  y.node;
  let k = (0, r.A)(y);
  var f = a(12115), g = a(92171), _ = a(28245), v = a(55809), w = a(25354), j = a(22535), M = a(18310), b = a(6900), N = a(9937), A = a(80642), P = a(78780), L = a(7770), S = a(73080), T = a.n(S);
  let C = 53.98 / 85.6, G = 2 * Math.PI / 0.48, z = { type: "spring", stiffness: G ** 2, damping: 2 * G, mass: 1 };
  function F(e2, t2, a2, n2 = e2.getVelocity()) {
    if (a2) return (0, g.i)(e2, t2, { duration: 0 });
    let r2 = t2 - e2.get(), i2 = Math.sign(n2) === Math.sign(r2) ? Math.sign(n2) * Math.min(Math.abs(n2), G * Math.abs(r2)) : n2;
    return (0, g.i)(e2, t2, { ...z, velocity: i2 });
  }
  let Y = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), $ = (e2, t2, a2) => e2 + (t2 - e2) * a2;
  function I(e2, t2, a2 = 0.55) {
    let n2 = Math.abs(e2);
    return n2 * t2 * a2 * Math.sign(e2) / (t2 + a2 * n2);
  }
  let R = (e2, t2 = 0.995) => e2 / 1e3 * t2 / (1 - t2), E = (e2) => e2.variant ?? ("graphite" === e2.finish ? "black" : "clay" === e2.finish || "photo" === e2.finish ? "color" : "metal");
  function D(e2, t2, a2, n2) {
    let r2 = e2 * C, i2 = t2 - 30 - 12, s2 = Math.min(a2 - 1, 3), l2 = Math.max(4, (i2 - r2 - 12) / Math.max(1, s2)), c2 = Math.min($(0.06 * r2, 0.22 * r2, n2), l2), o2 = (i2 - r2 + s2 * c2) / 2;
    return {
      cardHeight: r2,
      peek: c2,
      front: o2,
      travel: Math.max(80, t2 - 30 - o2)
    };
  }
  function B({ value: e2, currency: t2, locale: a2, reduced: r2 }) {
    let i2 = (0, _.d)(e2), s2 = new Intl.NumberFormat(a2, { style: "currency", currency: t2 }), l2 = (0, v.G)(i2, (e3) => s2.format(e3));
    return (0, f.useEffect)(() => {
      if (r2) return void i2.set(e2);
      let t3 = (0, g.i)(i2, e2, {
        duration: 1.4 * L.T.duration.considered,
        ease: [...L.T.ease.enter]
      });
      return () => t3.stop();
    }, [i2, e2, r2]), (0, n.jsx)(w.PY1.span, { className: T().money, children: l2 });
  }
  let H = Array.from({ length: 16 }, (e2, t2) => {
    let a2 = 70 + 19 * t2, n2 = [];
    for (let e3 = 0; e3 <= 240; e3++) {
      let r2 = e3 / 240 * Math.PI * 2, i2 = a2 + 9 * Math.sin(11 * r2 + 0.42 * t2) + 4 * Math.sin(3 * r2 - 0.2 * t2);
      n2.push(
        `${(640 + i2 * Math.cos(r2)).toFixed(1)} ${(250 + i2 * Math.sin(r2) * 0.82).toFixed(1)}`
      );
    }
    return `M${n2.join("L")}Z`;
  });
  function V({ id: e2, tone: t2 }) {
    let a2 = "gold" === t2 ? [
      "oklch(90% .08 90)",
      "oklch(76% .11 78)",
      "oklch(93% .06 95)",
      "oklch(70% .1 70)",
      "oklch(84% .09 85)"
    ] : [
      "oklch(95% .004 260)",
      "oklch(74% .006 260)",
      "oklch(97% .003 260)",
      "oklch(68% .006 260)",
      "oklch(86% .005 260)"
    ];
    return (0, n.jsxs)("svg", {
      className: T().chip,
      viewBox: "0 0 50 38",
      "aria-hidden": "true",
      children: [
        (0, n.jsxs)("defs", {
          children: [
            (0, n.jsx)("linearGradient", {
              id: `${e2}-a`,
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              children: a2.map(
                (e3, t3) => (0, n.jsx)(
                  "stop",
                  { offset: t3 / (a2.length - 1), stopColor: e3 },
                  t3
                )
              )
            }),
            (0, n.jsx)("linearGradient", {
              id: `${e2}-b`,
              x1: "1",
              y1: "0",
              x2: "0",
              y2: "1",
              children: a2.map(
                (e3, t3) => (0, n.jsx)(
                  "stop",
                  { offset: t3 / (a2.length - 1), stopColor: e3 },
                  t3
                )
              )
            }),
            (0, n.jsxs)("linearGradient", {
              id: `${e2}-c`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                (0, n.jsx)("stop", {
                  offset: "0",
                  stopColor: "oklch(100% 0 0)",
                  stopOpacity: ".55"
                }),
                (0, n.jsx)("stop", {
                  offset: ".45",
                  stopColor: "oklch(100% 0 0)",
                  stopOpacity: "0"
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("rect", {
          x: ".5",
          y: ".5",
          width: "49",
          height: "37",
          rx: "7",
          fill: `url(#${e2}-a)`
        }),
        (0, n.jsx)("rect", {
          x: "16",
          y: "8",
          width: "18",
          height: "22",
          rx: "3.5",
          fill: `url(#${e2}-b)`
        }),
        (0, n.jsx)("path", {
          d: "M0 12.5h16M0 25.5h16M34 12.5h16M34 25.5h16M16 8v22M34 8v22M25 0v8M25 30v8M16 19h-3M34 19h3",
          fill: "none",
          stroke: "oklch(0% 0 0 / .32)",
          strokeWidth: ".7"
        }),
        (0, n.jsx)("rect", {
          x: "16",
          y: "8",
          width: "18",
          height: "22",
          rx: "3.5",
          fill: "none",
          stroke: "oklch(0% 0 0 / .32)",
          strokeWidth: ".7"
        }),
        (0, n.jsx)("rect", {
          x: ".5",
          y: ".5",
          width: "49",
          height: "37",
          rx: "7",
          fill: `url(#${e2}-c)`,
          stroke: "oklch(0% 0 0 / .28)",
          strokeWidth: ".7"
        })
      ]
    });
  }
  function O() {
    return (0, n.jsxs)("svg", {
      className: T().contactless,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, n.jsx)("path", { d: "M5.5 9a4.5 4.5 0 0 1 0 6" }),
        (0, n.jsx)("path", { d: "M9 6.5a8 8 0 0 1 0 11" }),
        (0, n.jsx)("path", { d: "M12.5 4a11.5 11.5 0 0 1 0 16" }),
        (0, n.jsx)("path", { d: "M16 1.5a15 15 0 0 1 0 21" })
      ]
    });
  }
  function q() {
    return (0, n.jsxs)("span", {
      className: T().network,
      "aria-hidden": "true",
      children: [
        (0, n.jsxs)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          children: [
            (0, n.jsx)("path", {
              d: "M17.6 7.4A7.5 7.5 0 1 1 12 4.5",
              stroke: "currentColor",
              strokeWidth: "2.6",
              strokeLinecap: "round"
            }),
            (0, n.jsx)("circle", {
              cx: "17.4",
              cy: "4.9",
              r: "2.1",
              fill: "currentColor"
            })
          ]
        }),
        (0, n.jsx)("span", { children: "halo" })
      ]
    });
  }
  let W = (0, f.memo)(function({ card: e2, chipId: t2 }) {
    let a2 = E(e2);
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", { className: T().material, "aria-hidden": "true" }),
        e2.image && (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("img", {
            className: T().art,
            src: e2.image,
            alt: "",
            draggable: false,
            decoding: "async"
          })
        }),
        (0, n.jsx)("span", {
          className: T().texture,
          "aria-hidden": "true",
          children: "black" === a2 && (0, n.jsx)("svg", {
            viewBox: "0 0 856 540",
            preserveAspectRatio: "xMidYMid slice",
            children: H.map((e3, t3) => (0, n.jsx)("path", { d: e3 }, t3))
          })
        }),
        (0, n.jsx)("span", { className: T().sweep, "aria-hidden": "true" }),
        (0, n.jsx)("span", { className: T().issuer, children: e2.issuer }),
        (0, n.jsx)("span", { className: T().product, children: e2.product }),
        (0, n.jsx)(V, {
          id: t2,
          tone: "black" === a2 || "glass" === a2 ? "silver" : "gold"
        }),
        (0, n.jsx)(O, {}),
        (0, n.jsxs)("span", {
          className: T().number,
          children: [
            (0, n.jsx)("span", {
              className: T().mask,
              "aria-hidden": "true",
              children: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"
            }),
            " ",
            e2.lastFour
          ]
        }),
        (0, n.jsx)("span", { className: T().holder, children: e2.holder }),
        e2.expires && (0, n.jsxs)("span", {
          className: T().expiry,
          children: [
            (0, n.jsx)("span", {
              className: T().expiryLabel,
              children: "Valid thru"
            }),
            e2.expires
          ]
        }),
        void 0 === e2.network ? (0, n.jsx)(q, {}) : null !== e2.network && (0, n.jsx)("span", { className: T().network, children: e2.network })
      ]
    });
  });
  function J({
    card: e2,
    index: t2,
    count: a2,
    motionValues: r2,
    selected: i2,
    selectedAbove: s2,
    front: l2,
    tabbable: c2,
    expanded: o2,
    tilt: d2,
    label: u2,
    onSelect: h2,
    slotRef: p2,
    buttonRef: m2
  }) {
    let {
      position: x2,
      open: y2,
      spread: k2,
      width: g2,
      height: M2,
      tick: b2,
      gyro: N2
    } = r2, A2 = (0, f.useId)().replace(/:/g, ""), P2 = (0, _.d)(0), L2 = () => {
      let e3 = [
        x2.get(),
        y2.get(),
        i2.get(),
        k2.get(),
        g2.get(),
        M2.get(),
        P2.get(),
        b2.get()
      ], n2 = (function(e4, t3, a3, n3, r4, i3, s3, l3, c3) {
        let o3, d3, { peek: u3, front: h3 } = D(l3, c3, t3, s3), p3 = c3 - 30, m3 = e4 - a3;
        if (m3 >= 0) {
          let e5 = Math.min(m3, 3.5);
          o3 = h3 - e5 * u3, d3 = 1 - 0.05 * e5;
        } else {
          let e5 = -m3;
          e5 < 1 ? (o3 = $(h3, p3, e5), d3 = $(1, 0.9, e5)) : (o3 = p3 + 7 * Math.min(e5 - 1, 2), d3 = 0.9 + 0.02 * Math.min(e5 - 1, 3));
        }
        let x3 = $(p3 + 6 * Math.min(i3, 2), 0, r4), y3 = $(0.9 + 0.02 * Math.min(i3, 3), 0.88, r4), k3 = Y(1 - Math.abs(m3), 0, 1);
        return {
          y: $(o3, x3, n3),
          scale: $(d3, y3, n3),
          lift: $(0.45 * k3 + 0.15 * (m3 > 0), r4, n3)
        };
      })(
        t2,
        a2,
        e3[0],
        e3[1],
        e3[2],
        s2.reduce((e4, t3) => e4 + 1 - t3.get(), 0),
        e3[3],
        e3[4],
        e3[5]
      ), r3 = Y(t2 - e3[0], 0, 1);
      return {
        ...n2,
        y: n2.y - e3[6] * (1 - e3[1]) * r3 * 8,
        lift: n2.lift + 0.35 * e3[6]
      };
    }, S2 = (0, v.G)(() => L2().y), C2 = (0, v.G)(() => L2().scale), G2 = (0, v.G)(() => Y(L2().lift, 0, 1)), z2 = (0, _.d)(0.5), I2 = (0, _.d)(0.5), R2 = (0, _.d)(0), B2 = (0, v.G)(() => {
      let e3 = R2.get(), t3 = N2.on.get(), a3 = N2.x.get(), n2 = z2.get();
      return e3 ? n2 : l2 && t3 ? a3 : 0.5;
    }), H2 = (0, v.G)(() => {
      let e3 = R2.get(), t3 = N2.on.get(), a3 = N2.y.get(), n2 = I2.get();
      return e3 ? n2 : l2 && t3 ? a3 : 0.5;
    }), V2 = { stiffness: 180, damping: 27 }, O2 = (0, j.z)(
      (0, v.G)(B2, (e3) => (e3 - 0.5) * 10),
      V2
    ), q2 = (0, j.z)(
      (0, v.G)(H2, (e3) => (0.5 - e3) * 10),
      V2
    ), U2 = (0, j.z)(
      (0, v.G)(B2, (e3) => (e3 - 0.5) * 50),
      V2
    ), Z2 = (0, j.z)(
      (0, v.G)(H2, (e3) => (e3 - 0.5) * 50),
      V2
    ), X2 = (0, j.z)(
      (0, v.G)(() => Math.max(R2.get(), l2 ? N2.on.get() : 0)),
      V2
    ), K2 = (0, v.G)(X2, (e3) => 0.25 + 0.75 * e3), Q2 = (0, v.G)(U2, (e3) => `${e3}%`), ee2 = (0, v.G)(Z2, (e3) => `${e3}%`);
    return (0, n.jsxs)(w.PY1.div, {
      ref: p2,
      className: T().cardSlot,
      style: { y: S2, scale: C2, zIndex: a2 - t2 + 1 },
      children: [
        (0, n.jsx)(w.PY1.span, {
          className: T().shadow,
          style: { opacity: G2 },
          "aria-hidden": "true"
        }),
        (0, n.jsxs)(w.PY1.button, {
          ref: m2,
          type: "button",
          className: T().card,
          "data-variant": E(e2),
          "data-front": l2 || void 0,
          style: {
            rotateX: d2 ? q2 : 0,
            rotateY: d2 ? O2 : 0,
            transformPerspective: 900,
            "--card-tint": e2.tint ?? ("clay" === e2.finish ? "oklch(50% .1 45)" : "photo" === e2.finish ? "oklch(34% .06 230)" : void 0)
          },
          "aria-label": u2,
          "aria-expanded": o2,
          tabIndex: c2 ? 0 : -1,
          onClick: h2,
          onPointerMove: function(e3) {
            if (!d2 || "mouse" !== e3.pointerType) return;
            let t3 = e3.currentTarget.getBoundingClientRect();
            z2.set(Y((e3.clientX - t3.left) / t3.width, 0, 1)), I2.set(Y((e3.clientY - t3.top) / t3.height, 0, 1)), R2.set(1);
          },
          onPointerEnter: function(e3) {
            "mouse" === e3.pointerType && F(P2, 1, !d2);
          },
          onPointerLeave: function() {
            R2.set(0), z2.set(0.5), I2.set(0.5), F(P2, 0, !d2);
          },
          children: [
            (0, n.jsx)(W, { card: e2, chipId: A2 }),
            d2 && (0, n.jsx)(w.PY1.span, {
              className: T().sheen,
              style: { x: Q2, y: ee2, opacity: K2 },
              "aria-hidden": "true"
            }),
            (0, n.jsx)("span", { className: T().edge, "aria-hidden": "true" })
          ]
        })
      ]
    });
  }
  function U({
    cards: e2,
    label: t2 = "Wallet",
    currency: a2 = "USD",
    locale: r2 = "en-US",
    onSelectedChange: i2,
    className: s2
  }) {
    let l2 = (0, M.I)() ?? false, c2 = (0, f.useId)(), o2 = (0, f.useId)(), d2 = e2.length, u2 = (0, f.useRef)(null), [h2, p2] = (0, f.useState)(0), [m2, x2] = (0, f.useState)(false), y2 = (0, f.useRef)(0), k2 = (0, f.useRef)(false), j2 = (0, _.d)(0), S2 = (0, _.d)(0), C2 = (0, _.d)(0), G2 = (0, _.d)(296), z2 = (0, _.d)(383), $2 = (0, _.d)(0), E2 = { x: (0, _.d)(0.5), y: (0, _.d)(0.5), on: (0, _.d)(0) }, H2 = {
      position: j2,
      open: S2,
      spread: C2,
      width: G2,
      height: z2,
      tick: $2,
      gyro: E2
    }, [V2] = (0, f.useState)(() => /* @__PURE__ */ new Map()), O2 = (e3, t3) => {
      let a3 = V2.get(e3.id);
      return a3 || (a3 = (0, b.OQ)(+(t3 === h2)), V2.set(e3.id, a3)), a3;
    }, q2 = (0, f.useRef)([]), W2 = (0, f.useRef)([]), Z2 = (0, f.useRef)(null), X2 = (0, f.useRef)(false), K2 = (0, f.useRef)(false), Q2 = (0, v.G)(S2, (e3) => Y((e3 - 0.4) / 0.6, 0, 1)), ee2 = (0, v.G)(S2, (e3) => (1 - e3) * 16);
    function et(t3, a3, n2, r3) {
      let s3 = Y(t3, 0, Math.max(0, d2 - 1)), c3 = k2.current, o3 = y2.current;
      y2.current = s3, k2.current = a3, p2(s3), x2(a3), F(j2, s3, l2, n2), (a3 !== c3 || void 0 !== r3) && F(S2, +!!a3, l2, r3), e2.forEach((e3, t4) => {
        let a4 = O2(e3, t4), n3 = +(t4 === s3);
        a4.get() !== n3 && F(a4, n3, l2);
      }), a3 !== c3 && F(C2, !a3 && K2.current ? 1 : 0, l2), a3 && (!c3 || o3 !== s3) ? i2?.(e2[s3]) : !a3 && c3 && i2?.(null);
    }
    (0, f.useLayoutEffect)(() => {
      let e3 = u2.current;
      if (!e3) return;
      let t3 = 0, a3 = () => {
        G2.set(e3.clientWidth - 24), z2.set(e3.clientHeight - 12), cancelAnimationFrame(t3), t3 = requestAnimationFrame(() => $2.set($2.get() + 1));
      };
      a3();
      let n2 = new ResizeObserver(a3);
      return n2.observe(e3), () => {
        n2.disconnect(), cancelAnimationFrame(t3);
      };
    }, [G2, z2, $2]), (0, f.useEffect)(() => {
      if (l2 || !window.matchMedia("(hover: none) and (pointer: coarse)").matches)
        return;
      let e3 = (e4) => {
        null !== e4.beta && null !== e4.gamma && (E2.x.set(Y(0.5 + e4.gamma / 40, 0, 1)), E2.y.set(Y(0.5 + (e4.beta - 50) / 40, 0, 1)), E2.on.set(1));
      };
      return window.addEventListener("deviceorientation", e3), () => window.removeEventListener("deviceorientation", e3);
    }, [l2, E2.x, E2.y, E2.on]), (0, f.useEffect)(() => {
      if (y2.current <= d2 - 1) return;
      let e3 = Math.max(0, d2 - 1);
      y2.current = e3, j2.set(e3), queueMicrotask(() => p2(e3));
    }, [d2, j2]);
    let ea = (e3) => requestAnimationFrame(() => W2.current[e3]?.focus({ preventScroll: true }));
    function en(e3) {
      let t3 = Z2.current;
      if (!t3 || t3.pointer !== e3.pointerId || (Z2.current = null, !t3.dragging))
        return;
      e3.currentTarget.hasPointerCapture?.(e3.pointerId) && e3.currentTarget.releasePointerCapture(e3.pointerId), X2.current = true, requestAnimationFrame(() => {
        X2.current = false;
      });
      let a3 = "pointerup" === e3.type ? (function(e4, t4) {
        let a4 = e4[e4.length - 1];
        if (!a4 || t4 - a4.t > 80) return 0;
        let n3 = e4.find((e5) => a4.t - e5.t <= 100) ?? a4, r4 = Math.max(16, a4.t - n3.t);
        return Y((a4.y - n3.y) / r4 * 1e3, -2400, 2400);
      })(t3.samples, e3.timeStamp) : 0;
      if (t3.dismiss) {
        let e4 = er();
        S2.get() - R(a3) / e4 < 0.5 ? (et(y2.current, false, void 0, -a3 / e4), ea(y2.current)) : F(S2, 1, l2, -a3 / e4);
        return;
      }
      let { travel: n2 } = D(G2.get(), z2.get(), d2, C2.get()), r3 = j2.get() + R(a3) / n2, i3 = Math.round(t3.start);
      et(Y(Math.round(r3), i3 - 1, i3 + 1), false, a3 / n2);
    }
    let er = () => Math.max(120, 0.55 * z2.get()), ei = new Intl.NumberFormat(r2, { style: "currency", currency: a2 }), es = e2[Math.min(h2, d2 - 1)] ?? null;
    return (0, n.jsx)(N.x, {
      reducedMotion: "user",
      children: (0, n.jsxs)("div", {
        className: [T().wallet, s2].filter(Boolean).join(" "),
        children: [
          (0, n.jsxs)("div", {
            className: T().header,
            children: [
              (0, n.jsx)("h3", { id: c2, className: T().title, children: t2 }),
              (0, n.jsx)(A.N, {
                mode: "popLayout",
                initial: false,
                children: m2 ? (0, n.jsxs)(
                  w.PY1.button,
                  {
                    type: "button",
                    className: T().headerButton,
                    onClick: () => {
                      et(y2.current, false), ea(y2.current);
                    },
                    initial: { opacity: 0, scale: 0.96 },
                    animate: { opacity: 1, scale: 1 },
                    exit: {
                      opacity: 0,
                      scale: 0.96,
                      transition: { duration: 0.6 * L.T.duration.instant }
                    },
                    transition: {
                      duration: L.T.duration.fast,
                      delay: 0.04
                    },
                    children: [
                      (0, n.jsx)(P.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "All cards"
                    ]
                  },
                  "back"
                ) : d2 > 1 && (0, n.jsxs)(
                  w.PY1.span,
                  {
                    className: T().count,
                    "aria-hidden": "true",
                    initial: { opacity: 0, scale: 0.96 },
                    animate: { opacity: 1, scale: 1 },
                    exit: {
                      opacity: 0,
                      scale: 0.96,
                      transition: { duration: 0.6 * L.T.duration.instant }
                    },
                    transition: {
                      duration: L.T.duration.fast,
                      delay: 0.04
                    },
                    children: [
                      (0, n.jsx)(A.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, n.jsx)(
                          w.PY1.span,
                          {
                            className: T().countValue,
                            initial: { opacity: 0, y: 6 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -6 },
                            transition: L.T.spring.smooth,
                            children: h2 + 1
                          },
                          h2
                        )
                      }),
                      (0, n.jsxs)("span", { children: [" of ", d2] })
                    ]
                  },
                  "count"
                )
              })
            ]
          }),
          (0, n.jsxs)("div", {
            ref: u2,
            className: T().stage,
            role: "group",
            "aria-labelledby": c2,
            "aria-describedby": o2,
            "data-open": m2 || void 0,
            onPointerDown: function(e3) {
              if (0 === e3.button && 0 !== d2 && !Z2.current?.dragging) {
                if (k2.current) {
                  if (l2 || !q2.current[y2.current]?.contains(e3.target)) return;
                  Z2.current = {
                    pointer: e3.pointerId,
                    x: e3.clientX,
                    y: e3.clientY,
                    start: 0,
                    dragging: false,
                    dismiss: true,
                    samples: []
                  };
                  return;
                }
                Z2.current = {
                  pointer: e3.pointerId,
                  x: e3.clientX,
                  y: e3.clientY,
                  start: 0,
                  dragging: false,
                  dismiss: false,
                  samples: []
                };
              }
            },
            onPointerMove: function(e3) {
              let t3 = Z2.current;
              if (!t3 || t3.pointer !== e3.pointerId) return;
              if (!t3.dragging) {
                let a4 = e3.clientX - t3.x, n3 = e3.clientY - t3.y;
                if (Math.abs(a4) > 10 && Math.abs(a4) > Math.abs(n3)) {
                  Z2.current = null;
                  return;
                }
                if (8 > Math.abs(n3)) return;
                t3.dragging = true, t3.y = e3.clientY;
                let r4 = t3.dismiss ? S2 : j2;
                r4.stop(), t3.start = r4.get(), t3.samples = [{ t: e3.timeStamp, y: e3.clientY }];
                try {
                  e3.currentTarget.setPointerCapture(e3.pointerId);
                } catch {
                }
                return;
              }
              t3.samples.push({ t: e3.timeStamp, y: e3.clientY }), t3.samples.length > 12 && t3.samples.shift();
              let a3 = e3.clientY - t3.y;
              if (t3.dismiss) {
                let e4 = er(), n3 = t3.start - a3 / e4;
                S2.set(n3 > 1 ? 1 + I((n3 - 1) * e4, e4, 0.3) / e4 : Math.max(0, n3));
                return;
              }
              let { travel: n2 } = D(G2.get(), z2.get(), d2, C2.get()), r3 = t3.start + a3 / n2, i3 = d2 - 1;
              j2.set(
                r3 < 0 ? I(r3 * n2, n2) / n2 : r3 > i3 ? i3 + I((r3 - i3) * n2, n2) / n2 : r3
              );
            },
            onPointerUp: en,
            onPointerCancel: en,
            onLostPointerCapture: (e3) => {
              e3.target === e3.currentTarget && en(e3);
            },
            onPointerEnter: function(e3) {
              "mouse" === e3.pointerType && (K2.current = true, k2.current || F(C2, 1, l2));
            },
            onPointerLeave: function(e3) {
              "mouse" === e3.pointerType && (K2.current = false, F(C2, 0, l2));
            },
            onKeyDown: function(e3) {
              let t3 = y2.current, a3 = "ArrowDown" === e3.key || "ArrowRight" === e3.key ? 1 : "ArrowUp" === e3.key || "ArrowLeft" === e3.key ? -1 : 0, n2 = a3 ? t3 + a3 : "Home" === e3.key ? 0 : "End" === e3.key ? d2 - 1 : null;
              if (null !== n2) {
                e3.preventDefault(), (n2 = Y(n2, 0, d2 - 1)) !== t3 ? (et(n2, k2.current), ea(n2)) : l2 || (0, g.i)(
                  j2,
                  [j2.get(), t3 + 0.06 * (a3 || (0 === n2 ? -1 : 1)), t3],
                  { duration: 0.32, ease: [...L.T.ease.standard] }
                );
                return;
              }
              "Escape" === e3.key && k2.current && (e3.preventDefault(), et(t3, false), ea(t3));
            },
            children: [
              e2.map(
                (t3, a3) => (0, n.jsx)(
                  J,
                  {
                    card: t3,
                    index: a3,
                    count: d2,
                    motionValues: H2,
                    selected: O2(t3, a3),
                    selectedAbove: e2.slice(a3 + 1).map((e3, t4) => O2(e3, a3 + 1 + t4)),
                    front: a3 === h2,
                    tabbable: a3 === h2,
                    expanded: m2 && a3 === h2,
                    tilt: !l2,
                    label: `${t3.issuer} ${t3.product} ending in ${t3.lastFour}, ${a3 + 1} of ${d2}, ${t3.balanceLabel.toLowerCase()} ${ei.format(t3.balance)}`,
                    slotRef: (e3) => {
                      q2.current[a3] = e3;
                    },
                    buttonRef: (e3) => {
                      W2.current[a3] = e3;
                    },
                    onSelect: () => {
                      X2.current || (k2.current && a3 === y2.current ? (et(a3, false), ea(a3)) : et(a3, true));
                    }
                  },
                  t3.id
                )
              ),
              (0, n.jsx)(w.PY1.section, {
                className: T().detail,
                style: { opacity: Q2, y: ee2 },
                "aria-label": es ? `${es.issuer} activity` : void 0,
                inert: !m2 || void 0,
                children: (0, n.jsx)(A.N, {
                  mode: "popLayout",
                  initial: false,
                  children: es && m2 && (0, n.jsxs)(
                    w.PY1.div,
                    {
                      className: T().detailBody,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: {
                        opacity: 0,
                        transition: { duration: L.T.duration.exit }
                      },
                      children: [
                        (0, n.jsxs)("div", {
                          className: T().balance,
                          children: [
                            (0, n.jsx)("span", {
                              className: T().balanceLabel,
                              children: es.balanceLabel
                            }),
                            (0, n.jsx)(B, {
                              value: es.balance,
                              currency: a2,
                              locale: r2,
                              reduced: l2
                            })
                          ]
                        }),
                        (0, n.jsx)("ul", {
                          className: T().activity,
                          "aria-label": `Recent activity on ${es.issuer}`,
                          children: es.transactions.map(
                            (e3, t3) => (0, n.jsxs)(
                              w.PY1.li,
                              {
                                className: T().transaction,
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 },
                                transition: {
                                  ...L.T.spring.smooth,
                                  delay: 0.08 + t3 * L.T.stagger.item * 1.6
                                },
                                children: [
                                  (0, n.jsx)("span", {
                                    className: T().txIcon,
                                    "aria-hidden": "true",
                                    children: e3.avatar ? (0, n.jsx)("img", {
                                      src: e3.avatar,
                                      alt: "",
                                      width: 32,
                                      height: 32,
                                      draggable: false
                                    }) : e3.icon
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: T().txText,
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: T().txMerchant,
                                        children: e3.merchant
                                      }),
                                      (0, n.jsx)("span", {
                                        className: T().txDetail,
                                        children: e3.detail
                                      })
                                    ]
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: T().txAmount,
                                    "data-positive": e3.amount > 0 || void 0,
                                    children: [
                                      e3.amount > 0 ? "+" : "\u2212",
                                      ei.format(Math.abs(e3.amount))
                                    ]
                                  })
                                ]
                              },
                              e3.id
                            )
                          )
                        })
                      ]
                    },
                    es.id
                  )
                })
              })
            ]
          }),
          (0, n.jsx)("p", {
            id: o2,
            className: T().srOnly,
            children: "Arrow keys switch cards. Enter opens a card and Escape puts it back."
          }),
          (0, n.jsx)("p", {
            className: T().srOnly,
            "aria-live": "polite",
            children: es ? m2 ? `${es.issuer} ${es.product} open` : `${es.issuer} ${es.product} in front, ${h2 + 1} of ${d2}` : ""
          })
        ]
      })
    });
  }
  var Z = a(7780), X = a.n(Z);
  let K = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, Q = [
    {
      id: "fieldnote",
      issuer: "Fieldnote",
      product: "Everyday debit",
      lastFour: "4821",
      holder: "Jordan Hayes",
      expires: "09/29",
      variant: "metal",
      balance: 3248.6,
      balanceLabel: "Available",
      transactions: [
        {
          id: "fn-1",
          merchant: "Ryan Mitchell",
          detail: "Dinner split \xB7 Today",
          amount: 36.5,
          avatar: "media/specials/wallet-stack-ryan.svg"
        },
        {
          id: "fn-2",
          merchant: "Greenleaf Market",
          detail: "Groceries \xB7 Yesterday",
          amount: -84.12,
          icon: (0, n.jsx)(s, { ...K })
        },
        {
          id: "fn-3",
          merchant: "Brightline Studio",
          detail: "Payroll \xB7 Sep 18",
          amount: 2860,
          icon: (0, n.jsx)(l.A, { ...K })
        }
      ]
    },
    {
      id: "meridian",
      issuer: "Meridian",
      product: "Reserve credit",
      lastFour: "0917",
      holder: "Jordan Hayes",
      expires: "03/28",
      variant: "black",
      balance: 1286.44,
      balanceLabel: "Spent in September",
      transactions: [
        {
          id: "md-1",
          merchant: "Alder & Pine",
          detail: "Dining \xB7 Sep 20",
          amount: -142.8,
          icon: (0, n.jsx)(o, { ...K })
        },
        {
          id: "md-2",
          merchant: "Cascade Air",
          detail: "Travel \xB7 Sep 17",
          amount: -389,
          icon: (0, n.jsx)(d.A, { ...K })
        },
        {
          id: "md-3",
          merchant: "Emily Parker",
          detail: "Concert tickets \xB7 Sep 16",
          amount: 64,
          avatar: "media/specials/wallet-stack-emily.svg"
        }
      ]
    },
    {
      id: "tidewater",
      issuer: "Tidewater",
      product: "Transit pass",
      lastFour: "3306",
      holder: "Jordan Hayes",
      expires: "11/27",
      variant: "glass",
      balance: 42.25,
      balanceLabel: "Pass balance",
      transactions: [
        {
          id: "tw-1",
          merchant: "Harbor line",
          detail: "Ferry \xB7 Today, 7:52 AM",
          amount: -3.25,
          icon: (0, n.jsx)(h, { ...K })
        },
        {
          id: "tw-2",
          merchant: "Bike share",
          detail: "22 min ride \xB7 Yesterday",
          amount: -2.5,
          icon: (0, n.jsx)(m, { ...K })
        },
        {
          id: "tw-3",
          merchant: "Auto top up",
          detail: "From Fieldnote \xB7 Sep 15",
          amount: 40,
          icon: (0, n.jsx)(l.A, { ...K })
        }
      ]
    },
    {
      id: "common-ground",
      issuer: "Common Ground",
      product: "Coffee club",
      lastFour: "7730",
      holder: "Jordan Hayes",
      expires: "06/28",
      variant: "color",
      tint: "oklch(40% .1 162)",
      balance: 18.4,
      balanceLabel: "Prepaid",
      transactions: [
        {
          id: "cg-1",
          merchant: "Oat cortado",
          detail: "Pearl Street \xB7 Today, 8:10 AM",
          amount: -4.6,
          icon: (0, n.jsx)(x.A, { ...K })
        },
        {
          id: "cg-2",
          merchant: "Morning bun",
          detail: "Pearl Street \xB7 Yesterday",
          amount: -3.9,
          icon: (0, n.jsx)(k, { ...K })
        },
        {
          id: "cg-3",
          merchant: "Reload",
          detail: "From Fieldnote \xB7 Sep 14",
          amount: 25,
          icon: (0, n.jsx)(l.A, { ...K })
        }
      ]
    }
  ];
  function ee() {
    return (0, n.jsx)("div", {
      className: X().demo,
      children: (0, n.jsx)(U, { cards: Q, label: "Jordan\u2019s cards" })
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(86659, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => o });
  var r = a(51811);
  let n = {
    name: "arrow-down-left",
    size: 24,
    node: [
      ["path", { d: "M17 7 7 17", key: "15tmo1" }],
      ["path", { d: "M17 17H7V7", key: "1org7z" }]
    ]
  };
  n.node;
  let o = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("wallet-stack", [7780,73080]);
A.item("wallet-stack", {entry:86364, export:"WalletStackDemo", kind:"component", tier:"pro", unresolved:[]});
})();