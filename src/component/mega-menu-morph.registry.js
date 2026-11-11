/* mega-menu-morph (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(5834, ".root{--mm-bar-h:60px;--mm-control-h:36px;--mm-max:calc(100cqw - 16px);position:relative;z-index:10;width:100%;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.bar{display:flex;height:var(--mm-bar-h);align-items:center;gap:12px;padding:0 12px 0 16px;border-bottom:1px solid var(--border);background:var(--surface)}\n.brand{display:inline-flex;flex:none;align-items:center;gap:8px;margin-right:8px;padding:6px 4px;border-radius:12px;color:var(--foreground);font-size:var(--text-base);font-weight:500;text-decoration:none;-webkit-tap-highlight-color:transparent}\n.brandMark{display:grid;width:22px;height:22px;place-items:center}\n.brandMark>svg{width:22px;height:22px}\n.brandName{white-space:nowrap}\n.track{position:relative;display:flex;min-width:0;flex:1;align-items:center}\n.highlight{position:absolute;top:50%;left:0;height:var(--mm-control-h);margin-top:calc(var(--mm-control-h) / -2);border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 5%,transparent);pointer-events:none}\n.items{position:relative;display:flex;align-items:center;gap:2px;margin:0;padding:0;list-style:none}\n.items>li{display:flex}\n.item{position:relative;display:inline-flex;height:var(--mm-control-h);align-items:center;gap:4px;padding:0 12px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;text-decoration:none;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.item:has(.chevron){padding-right:9px}\n.item[data-hot]{color:var(--foreground)}\n.item[data-current]:after{content:\"\";position:absolute;bottom:3px;left:50%;width:12px;height:2px;margin-left:-6px;border-radius:1px;background:var(--accent)}\n.item:has(.chevron)[data-current]:after{margin-left:-13px}\n.item[aria-expanded=true] .chevron{color:var(--text-secondary);transform:rotate(180deg)}\n@media (prefers-reduced-motion:reduce){.chevron,.featureCta>svg,.feature,.item,.linkIcon,.link,.primary,.quiet{transition:none}\n.chevron{width:14px;height:14px;flex:none;color:var(--text-muted);stroke-width:1.75;transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard)}\n.sheetRow:has(.chevron)[data-current]:after{display:none}\n.sheetRow .chevron{width:16px;height:16px}\n.sheetRow[aria-expanded=true] .chevron{color:var(--text-secondary);transform:rotate(180deg)}\n.actions{display:flex;flex:none;align-items:center;gap:4px;margin-left:auto}\n.measure .actions{margin-left:12px}\n.primary,.quiet{display:inline-flex;height:var(--mm-control-h);align-items:center;padding:0 14px;border-radius:var(--radius-pill);font-weight:500;text-decoration:none;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.quiet{color:var(--text-secondary)}\n.primary:active,.quiet:active{transform:scale(.97)}\n@media (hover:hover) and (pointer:fine){.quiet:hover{background:color-mix(in oklab,var(--foreground) 5%,transparent);color:var(--foreground)}\n.sheetActions .quiet{justify-content:center;height:44px;border:1px solid var(--border)}\n.primary{background:var(--foreground);color:var(--background)}\n.primary:hover{background:color-mix(in oklab,var(--foreground) 86%,var(--background))}\n.toggle{display:grid;width:var(--mm-control-h);height:var(--mm-control-h);flex:none;place-items:center;margin-right:-4px;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--foreground);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.toggle[aria-expanded=true]{background:color-mix(in oklab,var(--foreground) 5%,transparent)}\n.toggleIcon{display:grid;grid-area:1/1;place-items:center}\n.toggleIcon>svg{width:20px;height:20px;stroke-width:1.75}\n.measure{position:absolute;top:0;left:0;display:flex;width:max-content;height:0;align-items:center;gap:12px;padding:0 12px 0 16px;overflow:hidden;visibility:hidden;pointer-events:none}\n.panel{position:absolute;left:0;z-index:1}\n.panel:before{content:\"\";position:absolute;right:0;bottom:100%;left:0;height:14px}\n.surface{position:absolute;inset:0;overflow:hidden;border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:0 1px 2px oklch(0 0 0/.04),0 18px 44px oklch(0 0 0/.1),0 4px 12px oklch(0 0 0/.04)}\n.surface:after{content:\"\";position:absolute;inset:0;border:1px solid var(--border);border-radius:inherit;pointer-events:none}\n:root[data-theme=dark] .surface{box-shadow:0 1px 2px oklch(0 0 0/.3),0 22px 55px oklch(0 0 0/.42)}\n:root[data-theme=dark] .surface:after{border-color:color-mix(in oklab,var(--border-strong) 55%,var(--border))}\n.band{position:absolute;right:0;bottom:0;left:0;background:var(--surface-muted);box-shadow:inset 0 1px 0 var(--border-subtle)}\n:root[data-theme=dark] .band{background:color-mix(in oklab,var(--surface-muted) 70%,var(--surface-raised));box-shadow:inset 0 1px 0 var(--border)}\n.caret{position:absolute;top:-6px;left:-6px;z-index:1;width:12px;height:12px;pointer-events:none}\n.caret:before{content:\"\";position:absolute;inset:0;border-left:1px solid var(--border);border-top:1px solid var(--border);border-right:1px solid transparent;border-bottom:1px solid transparent;border-top-left-radius:3px;background:var(--surface-raised);transform:rotate(45deg)}\n:root[data-theme=dark] .caret:before{border-top-color:color-mix(in oklab,var(--border-strong) 55%,var(--border));border-left-color:color-mix(in oklab,var(--border-strong) 55%,var(--border))}\n.clip{position:absolute;inset:0;z-index:2;overflow:hidden;border-radius:var(--radius-panel)}\n.face{position:absolute;top:0;bottom:0;left:0;display:flex;width:max-content;max-width:var(--mm-max);flex-direction:column}\n.face[inert]{pointer-events:none}\n.faceBody{display:flex;flex-wrap:wrap;align-items:stretch;gap:4px 8px;padding:12px}\n.faceFooter{display:flex;margin-top:auto;min-height:44px;align-items:center;padding:10px 24px;color:var(--text-secondary);font-size:var(--text-xs)}\n.group{display:grid;width:max-content;min-width:12.5rem;max-width:17rem;flex:0 1 auto;align-content:start}\n.groupTitle{margin:0;padding:6px 12px 4px;color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.sheetGroup .groupTitle{padding:4px 8px}\n.links{display:grid;gap:1px;margin:0;padding:0;list-style:none}\n.links[data-dense] .link{align-items:center;padding:8px 12px}\n.link{display:flex;align-items:flex-start;gap:12px;padding:9px 12px;border-radius:16px;color:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.link:focus-visible{background:color-mix(in oklab,var(--foreground) 5%,transparent)}\n.link:focus-visible .linkIcon{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.link:hover{background:color-mix(in oklab,var(--foreground) 4.5%,transparent)}\n.link:hover .linkIcon{color:var(--foreground)}\n.linkIcon{display:grid;width:20px;height:20px;flex:none;place-items:center;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.linkIcon>svg{width:17px;height:17px;stroke-width:1.75}\n.linkText{display:grid;min-width:0;gap:1px}\n.linkLabel{display:flex;min-width:0;align-items:center;gap:8px;color:var(--foreground);font-weight:500;white-space:nowrap}\n.sheetLink .linkLabel{font-weight:400}\n.linkDescription{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);text-wrap:pretty}\n.badge{display:inline-flex;height:18px;align-items:center;padding:0 7px;border:1px solid var(--border);border-radius:var(--radius-pill);color:var(--text-secondary);font-size:var(--text-xs);font-weight:400;line-height:1;white-space:nowrap}\n.feature{display:flex;width:13.5rem;flex:0 1 13.5rem;flex-direction:column;gap:4px;padding:14px;border-radius:18px;background:var(--surface-muted);color:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.feature:hover{background:color-mix(in oklab,var(--surface-muted) 70%,var(--border))}\n.feature:hover .featureCta>svg{transform:translateX(3px)}\n.featureMedia{display:block;overflow:hidden;margin-bottom:8px;border-radius:12px}\n.featureArt{display:grid;gap:5px;margin-bottom:10px;padding:10px;border:1px solid var(--border-subtle);border-radius:12px;background:var(--surface-raised)}\n.featureArt>span{position:relative;display:block;height:18px;border-radius:6px;background:var(--surface-muted)}\n.featureArt>span:before{content:\"\";position:absolute;top:6px;left:8px;width:34%;height:6px;border-radius:3px;background:color-mix(in oklab,var(--foreground) 14%,transparent)}\n.featureArt>span:after{content:\"\";position:absolute;top:6px;right:8px;width:18%;height:6px;border-radius:3px;background:var(--accent);opacity:.75}\n.featureArt>span:nth-child(2):before{width:44%}\n.featureArt>span:nth-child(3):before{width:28%}\n.featureTitle{color:var(--foreground);font-weight:500;text-wrap:balance}\n.featureDescription{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);text-wrap:pretty}\n.featureCta{display:inline-flex;align-items:center;gap:4px;margin-top:auto;padding-top:8px;color:var(--foreground);font-size:var(--text-xs);font-weight:500}\n.featureCta>svg{width:13px;height:13px;stroke-width:2;transition:transform var(--duration-spring) var(--ease-spring)}\n.sheetFeature .featureCta{padding-top:4px}\n.status{display:inline-flex;min-width:0;align-items:center;gap:8px;color:var(--foreground)}\n.statusDot{width:7px;height:7px;flex:none;border-radius:50%;background:var(--success);box-shadow:0 0 0 3px color-mix(in oklab,var(--success) 18%,transparent)}\n.statusMeta{overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}\n.statusMeta:before{content:\"\";display:inline-block;width:3px;height:3px;margin:0 8px 2px 0;border-radius:50%;background:var(--border-strong);vertical-align:middle}\n.footerNote{color:var(--text-muted)}\n.safeArea{position:absolute;inset:0;z-index:3;width:100%;height:100%;overflow:visible;pointer-events:none}\n.safeArea polygon{fill:color-mix(in oklab,var(--text-muted) 12%,transparent);stroke:color-mix(in oklab,var(--text-muted) 45%,transparent);stroke-dasharray:3 3;stroke-width:1;transition:fill var(--duration-fast) var(--ease-standard)}\n.safeArea polygon[data-aiming=true]{fill:color-mix(in oklab,var(--accent) 16%,transparent);stroke:var(--accent)}\n.sheet{position:absolute;top:var(--mm-bar-h);right:0;left:0;z-index:1;max-height:var(--mm-sheet-max,calc(100dvh - var(--mm-bar-h)));overflow:hidden auto;overscroll-behavior:contain;scrollbar-width:thin;border-bottom:1px solid var(--border);background:var(--surface);box-shadow:0 18px 32px oklch(0 0 0/.08)}\n:root[data-theme=dark] .sheet{box-shadow:0 22px 40px oklch(0 0 0/.4)}\n.sheetList{display:grid;margin:0;padding:6px 8px 12px;list-style:none}\n.sheetItem{display:grid;border-bottom:1px solid var(--border-subtle)}\n.sheetItem:last-of-type{border-bottom:0}\n.sheetRow{display:flex;min-height:48px;align-items:center;justify-content:space-between;gap:8px;padding:0 8px;border:0;background:transparent;color:var(--foreground);cursor:pointer;font:inherit;font-size:var(--text-base);text-align:left;text-decoration:none;-webkit-tap-highlight-color:transparent}\n.sheetRow[data-current]{color:var(--foreground)}\n.sheetRow[data-current]:after{content:\"\";width:6px;height:6px;margin-left:8px;border-radius:50%;background:var(--accent)}\n.sheetBody{overflow:hidden}\n.sheetGroups{display:grid;gap:8px;padding:0 0 12px}\n.sheetGroup{display:grid}\n.sheetLinks{display:grid;margin:0;padding:0;list-style:none}\n.sheetLink{display:flex;min-height:40px;align-items:center;gap:12px;padding:0 8px;border-radius:12px;color:var(--foreground);text-decoration:none;-webkit-tap-highlight-color:transparent}\n.sheetLink:active{background:color-mix(in oklab,var(--foreground) 5%,transparent)}\n.sheetFeature{display:grid;gap:2px;margin:4px 0 0;padding:12px 14px;border-radius:16px;background:var(--surface-muted);color:inherit;text-decoration:none}\n.sheetActions{display:grid;gap:8px;padding-top:12px}", {"root":"root","bar":"bar","brand":"brand","brandMark":"brandMark","brandName":"brandName","track":"track","highlight":"highlight","items":"items","item":"item","chevron":"chevron","featureCta":"featureCta","feature":"feature","linkIcon":"linkIcon","link":"link","primary":"primary","quiet":"quiet","sheetRow":"sheetRow","actions":"actions","measure":"measure","sheetActions":"sheetActions","toggle":"toggle","toggleIcon":"toggleIcon","panel":"panel","surface":"surface","band":"band","caret":"caret","clip":"clip","face":"face","faceBody":"faceBody","faceFooter":"faceFooter","group":"group","groupTitle":"groupTitle","sheetGroup":"sheetGroup","links":"links","linkText":"linkText","linkLabel":"linkLabel","sheetLink":"sheetLink","linkDescription":"linkDescription","badge":"badge","featureMedia":"featureMedia","featureArt":"featureArt","featureTitle":"featureTitle","featureDescription":"featureDescription","sheetFeature":"sheetFeature","status":"status","statusDot":"statusDot","statusMeta":"statusMeta","footerNote":"footerNote","safeArea":"safeArea","sheet":"sheet","sheetList":"sheetList","sheetItem":"sheetItem","sheetBody":"sheetBody","sheetGroups":"sheetGroups","sheetLinks":"sheetLinks"});
A.reg(9383, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.d(t, { A: () => l });
  var a = s(51811);
  let r = {
    name: "send",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3"
        }
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
    ]
  };
  r.node;
  let l = (0, a.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(12572, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "newspaper",
    size: 24,
    node: [
      ["path", { d: "M15 18h-5", key: "95g1m2" }],
      ["path", { d: "M18 14h-8", key: "sponae" }],
      [
        "path",
        {
          d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
          key: "39pd36"
        }
      ],
      [
        "rect",
        { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }
      ]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(16720, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "shopping-bag",
    size: 24,
    node: [
      ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
      ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
      [
        "path",
        {
          d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
          key: "o988cm"
        }
      ]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(19707, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var r = t(51811);
  let l = {
    name: "layers",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
          key: "zw3jo"
        }
      ],
      [
        "path",
        {
          d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
          key: "1wduqc"
        }
      ],
      [
        "path",
        {
          d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
          key: "kqbvx6"
        }
      ]
    ],
    aliases: ["layers-3"]
  };
  l.node;
  let s = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(20122, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { E: () => d });
  var n = a(51469), r = a(71013);
  function d(e2, ...t2) {
    let a2 = e2.length;
    return (0, r.j)(t2.filter(n.S), function() {
      let r2 = "";
      for (let d2 = 0; d2 < a2; d2++) {
        r2 += e2[d2];
        let a3 = t2[d2];
        a3 && (r2 += (0, n.S)(a3) ? a3.get() : a3);
      }
      return r2;
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(22350, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "building-complex",
    size: 24,
    node: [
      ["path", { d: "M10 12h4", key: "a56b0p" }],
      ["path", { d: "M10 8h4", key: "1sr2af" }],
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
      [
        "path",
        {
          d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
          key: "secmi2"
        }
      ],
      [
        "path",
        { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }
      ]
    ],
    aliases: ["building-2"]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(35363, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { MegaMenuMorphDemo: () => el, default: () => eo });
  var r = a(95155), n = a(12115), i = a(18310), s = a(80642), l = a(25354), o = a(79196), u = a(28245), c = a(20122), m = a(92171), d = a(71019), h = a(78912), p = a(85974), f = a(9383), g = a(50981), _ = a(36483), v = a(44825), x = a(22350), y = a(19707), b = a(93089), k = a(57465), j = a(16720), N = a(49804), w = a(40557), A = a(94179), T = a(72974), C = a(54757), R = a(52957), P = a(12572), E = a(90467), L = a(12363), D = a(9005), S = a(96304), I = a(7770), M = a(5834), B = a.n(M);
  let F = (e2) => (0, r.jsx)(e2, { "aria-hidden": "true" }), $ = [
    {
      value: "products",
      label: "Products",
      groups: [
        {
          title: "Payments",
          links: [
            {
              label: "Checkout",
              description: "Hosted pages in 46 currencies",
              icon: F(d.A),
              href: "#checkout"
            },
            {
              label: "Billing",
              description: "Subscriptions, usage and invoices",
              icon: F(h.A),
              href: "#billing"
            },
            {
              label: "Terminal",
              description: "In person payments on any reader",
              icon: F(p.A),
              href: "#terminal"
            }
          ]
        },
        {
          title: "Operations",
          links: [
            {
              label: "Payouts",
              description: "Pay sellers and contractors daily",
              icon: F(f.A),
              href: "#payouts",
              badge: "New"
            },
            {
              label: "Risk",
              description: "Fraud scoring trained on your traffic",
              icon: F(g.A),
              href: "#risk"
            },
            {
              label: "Reports",
              description: "Reconcile every payout to the cent",
              icon: F(_.A),
              href: "#reports"
            }
          ]
        }
      ],
      feature: {
        title: "Instant payouts in the EU",
        description: "Sellers in 27 countries now get paid in seconds, weekends included.",
        cta: "Read the announcement",
        href: "#instant-payouts"
      }
    },
    {
      value: "solutions",
      label: "Solutions",
      groups: [
        {
          title: "By stage",
          links: [
            { label: "Startups", icon: F(v.A), href: "#startups" },
            { label: "Enterprises", icon: F(x.A), href: "#enterprises" },
            { label: "Platforms", icon: F(y.A), href: "#platforms" }
          ]
        },
        {
          title: "By industry",
          links: [
            { label: "Software", icon: F(b.A), href: "#software" },
            { label: "Marketplaces", icon: F(k.A), href: "#marketplaces" },
            { label: "Retail", icon: F(j.A), href: "#retail" }
          ]
        }
      ]
    },
    {
      value: "developers",
      label: "Developers",
      groups: [
        {
          title: "Documentation",
          links: [
            {
              label: "Quickstart",
              description: "Take a first payment in 10 minutes",
              icon: F(N.A),
              href: "#quickstart"
            },
            {
              label: "API reference",
              description: "Every endpoint, with live examples",
              icon: F(w.A),
              href: "#api"
            }
          ]
        },
        {
          title: "Tools",
          links: [
            {
              label: "CLI",
              description: "Replay webhooks from your terminal",
              icon: F(A.A),
              href: "#cli"
            },
            {
              label: "Webhooks",
              description: "Signed events with automatic retries",
              icon: F(T.A),
              href: "#webhooks"
            }
          ]
        }
      ],
      footer: (0, r.jsxs)("span", {
        className: B().status,
        children: [
          (0, r.jsx)("span", {
            className: B().statusDot,
            "aria-hidden": "true"
          }),
          "All systems normal",
          (0, r.jsx)("span", {
            className: B().statusMeta,
            children: "API uptime 99.998% over 90 days"
          })
        ]
      })
    },
    {
      value: "company",
      label: "Company",
      groups: [
        {
          links: [
            { label: "About", icon: F(C.A), href: "#about" },
            { label: "Customers", icon: F(k.A), href: "#customers" },
            {
              label: "Careers",
              icon: F(R.A),
              href: "#careers",
              badge: "12 open roles"
            },
            { label: "Press", icon: F(P.A), href: "#press" }
          ]
        }
      ],
      footer: (0, r.jsx)("span", {
        className: B().footerNote,
        children: "Offices in Zurich, Lisbon and New York"
      })
    },
    { value: "pricing", label: "Pricing", href: "#pricing" }
  ], O = [
    { label: "Sign in", href: "#sign-in" },
    { label: "Start now", href: "#start", variant: "primary" }
  ], Y = {
    name: "Tally",
    href: "#home",
    mark: (0, r.jsxs)("svg", {
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("rect", {
          x: "2",
          y: "2",
          width: "16",
          height: "16",
          rx: "5",
          fill: "currentColor"
        }),
        (0, r.jsx)("path", {
          d: "M6.5 7.5h7M10 7.5v6",
          stroke: "var(--background)",
          strokeWidth: "1.9",
          strokeLinecap: "round"
        })
      ]
    })
  }, q = [...I.T.ease.standard], W = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, G = W(0.42, 0), K = W(0.36, 0), H = W(0.4, 0), z = W(0.32, 0), U = W(0.42, 0), V = {
    hidden: (e2) => ({
      opacity: 0,
      x: 36 * e2,
      filter: `blur(${I.T.blur.subtle}px)`
    }),
    shown: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        x: U,
        opacity: { duration: I.T.duration.standard, ease: q, delay: 0.05 },
        filter: { duration: I.T.duration.standard, ease: q, delay: 0.05 }
      }
    },
    gone: (e2) => ({
      opacity: 0,
      x: -(36 * e2 * 0.6),
      filter: `blur(${I.T.blur.subtle}px)`,
      transition: {
        x: U,
        opacity: { duration: I.T.duration.fast, ease: q },
        filter: { duration: I.T.duration.fast, ease: q }
      }
    })
  }, Q = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.14 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  }, X = () => () => {
  }, Z = (e2, t2, a2) => Math.min(Math.max(e2, t2), Math.max(t2, a2)), J = (e2) => !!(e2.groups?.length || e2.feature);
  function ee({
    id: e2,
    direction: t2,
    reduced: a2,
    onSize: i2,
    active: s2,
    children: u2
  }) {
    let c2 = (0, n.useRef)(null), m2 = (0, o.tF)();
    return (0, n.useLayoutEffect)(() => {
      let t3 = c2.current;
      if (!t3 || !m2) return;
      let a3 = () => {
        let a4 = t3.querySelector("[data-mm-body]"), r3 = t3.querySelector("[data-mm-footer]"), n2 = r3?.offsetHeight ?? 0;
        i2(e2, { w: t3.offsetWidth, h: (a4?.offsetHeight ?? 0) + n2, footer: n2 });
      };
      if (a3(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(a3);
      for (let e3 of Array.from(t3.children)) r2.observe(e3);
      return () => r2.disconnect();
    }, [e2, i2, m2]), (0, r.jsx)(l.PY1.div, {
      ref: c2,
      className: B().face,
      custom: t2,
      variants: a2 ? Q : V,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      inert: !m2 || void 0,
      "data-mm-active": s2 && m2 ? "" : void 0,
      children: u2
    });
  }
  function et({ item: e2, onPick: t2 }) {
    let { feature: a2 } = e2;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsxs)("div", {
          className: B().faceBody,
          "data-mm-body": "",
          children: [
            e2.groups?.map(
              (a3, n2) => (0, r.jsxs)(
                "div",
                {
                  className: B().group,
                  children: [
                    a3.title ? (0, r.jsx)("p", {
                      className: B().groupTitle,
                      children: a3.title
                    }) : null,
                    (0, r.jsx)("ul", {
                      className: B().links,
                      "data-dense": a3.links.every((e3) => !e3.description) || void 0,
                      children: a3.links.map(
                        (a4) => (0, r.jsx)(
                          "li",
                          {
                            children: (0, r.jsxs)("a", {
                              className: B().link,
                              href: a4.href ?? "#",
                              "data-mm-link": "",
                              onClick: (r2) => t2(r2, {
                                label: a4.label,
                                href: a4.href,
                                section: e2.value
                              }),
                              children: [
                                a4.icon ? (0, r.jsx)("span", {
                                  className: B().linkIcon,
                                  children: a4.icon
                                }) : null,
                                (0, r.jsxs)("span", {
                                  className: B().linkText,
                                  children: [
                                    (0, r.jsxs)("span", {
                                      className: B().linkLabel,
                                      children: [
                                        a4.label,
                                        a4.badge ? (0, r.jsx)("span", {
                                          className: B().badge,
                                          children: a4.badge
                                        }) : null
                                      ]
                                    }),
                                    a4.description ? (0, r.jsx)("span", {
                                      className: B().linkDescription,
                                      children: a4.description
                                    }) : null
                                  ]
                                })
                              ]
                            })
                          },
                          a4.label
                        )
                      )
                    })
                  ]
                },
                a3.title ?? n2
              )
            ),
            a2 ? (0, r.jsxs)("a", {
              className: B().feature,
              href: a2.href ?? "#",
              "data-mm-link": "",
              onClick: (r2) => t2(r2, { label: a2.title, href: a2.href, section: e2.value }),
              children: [
                a2.media ? (0, r.jsx)("span", {
                  className: B().featureMedia,
                  children: a2.media
                }) : (0, r.jsxs)("span", {
                  className: B().featureArt,
                  "aria-hidden": "true",
                  children: [
                    (0, r.jsx)("span", {}),
                    (0, r.jsx)("span", {}),
                    (0, r.jsx)("span", {})
                  ]
                }),
                (0, r.jsx)("span", {
                  className: B().featureTitle,
                  children: a2.title
                }),
                a2.description ? (0, r.jsx)("span", {
                  className: B().featureDescription,
                  children: a2.description
                }) : null,
                a2.cta ? (0, r.jsxs)("span", {
                  className: B().featureCta,
                  children: [
                    a2.cta,
                    (0, r.jsx)(E.A, { "aria-hidden": "true" })
                  ]
                }) : null
              ]
            }) : null
          ]
        }),
        e2.footer ? (0, r.jsx)("div", {
          className: B().faceFooter,
          "data-mm-footer": "",
          children: e2.footer
        }) : null
      ]
    });
  }
  function ea({
    items: e2 = $,
    brand: t2 = Y,
    actions: a2 = O,
    value: o2,
    defaultValue: d2 = null,
    onValueChange: h2,
    current: p2,
    openDelay: f2 = 90,
    closeDelay: g2 = 240,
    collapseBelow: _2 = "auto",
    showSafeArea: v2 = false,
    onNavigate: x2,
    label: y2 = "Main",
    className: b2,
    style: k2
  }) {
    let j2, N2 = (j2 = (0, n.useSyncExternalStore)(
      X,
      () => true,
      () => false
    ), !!(0, i.I)() && j2), w2 = (0, n.useId)(), [A2, T2] = (function(e3, t3, a3) {
      let [r2, i2] = (0, n.useState)(t3), s2 = void 0 !== e3;
      return [
        s2 ? e3 : r2,
        (0, n.useCallback)(
          (e4) => {
            s2 || i2(e4), a3?.(e4);
          },
          [s2, a3]
        )
      ];
    })(o2, d2, h2), [C2, R2] = (0, n.useState)(null), [P2, M2] = (0, n.useState)(0), [F2, W2] = (0, n.useState)(false), [V2, Q2] = (0, n.useState)(false), [er2, en2] = (0, n.useState)(null), ei2 = (0, n.useRef)(null), es2 = (0, n.useRef)(null), el2 = (0, n.useRef)(null), eo2 = (0, n.useRef)(null), eu = (0, n.useRef)(null), ec = (0, n.useRef)(/* @__PURE__ */ new Map()), em = (0, n.useRef)(/* @__PURE__ */ new Map()), ed = (0, n.useRef)(A2), eh = (0, n.useRef)(false), ep = (0, n.useRef)({}), ef = (0, n.useRef)([]), eg = (0, n.useRef)(0), e_ = (0, n.useRef)(false), ev = (0, n.useRef)(-1 / 0), ex = (0, n.useRef)(false), ey = (0, n.useRef)(null), eb = (e3) => {
      ey.current = e3, R2(e3);
    }, ek = (0, u.d)(0), ej = (0, u.d)(0), eN = (0, u.d)(0), ew = (0, u.d)(0), eA = (0, u.d)(0), eT = (0, u.d)(0), eC = (0, u.d)(0), eR = (0, u.d)(0), eP = (0, c.E)`${eA}px 0px`, eE = e2.filter(J), eL = (t3) => e2.findIndex((e3) => e3.value === t3), eD = (e3) => {
      window.clearTimeout(ep.current[e3]), ep.current[e3] = void 0;
    };
    (0, n.useEffect)(
      () => () => {
        let e3 = ep.current;
        window.clearTimeout(e3.open), window.clearTimeout(e3.close), window.clearTimeout(e3.aim);
      },
      []
    );
    let eS = (0, n.useCallback)(
      (e3, t3) => {
        let a3 = ei2.current, r2 = ec.current.get(e3), n2 = em.current.get(e3);
        if (!a3 || !r2 || !n2) return;
        let i2 = a3.clientWidth, s2 = Math.min(n2.w, i2 - 16), l2 = r2.offsetLeft + (es2.current?.offsetLeft ?? 0) + r2.offsetWidth / 2, o3 = Z(l2 - s2 / 2, 8, i2 - 8 - s2), u2 = Z(l2 - o3, 26, s2 - 26);
        t3 && (ev.current = performance.now());
        let c2 = performance.now() - ev.current < 200;
        if (t3 || c2 || N2) {
          let a4 = [
            [ek, o3],
            [ej, s2],
            [eN, n2.h],
            [ew, n2.footer],
            [eA, u2]
          ], r3 = () => {
            for (let [e4, t4] of a4) e4.stop(), e4.set(t4);
          };
          r3(), t3 && requestAnimationFrame(() => {
            ed.current === e3 && ej.get() !== s2 && r3();
          });
          return;
        }
        (0, m.i)(ej, s2, s2 >= ej.get() ? G : K);
        let d3 = n2.h >= eN.get() ? G : K;
        (0, m.i)(eN, n2.h, d3), (0, m.i)(ew, n2.footer, d3), (0, m.i)(ek, o3, H), (0, m.i)(eA, u2, H);
      },
      [ew, eA, eN, ej, ek, N2]
    ), eI = (0, n.useCallback)(
      (e3, t3) => {
        em.current.set(e3, t3), ed.current === e3 && (eS(e3, !eh.current), eh.current = true);
      },
      [eS]
    ), eM = (0, n.useCallback)(
      (e3) => {
        let t3 = ed.current;
        e3 !== t3 && (e3 && t3 ? M2(Math.sign(eL(e3) - eL(t3))) : M2(0), ed.current = e3, T2(e3), e3 && em.current.has(e3) && (eS(e3, !eh.current), eh.current = true));
      },
      [eS, T2, e2]
    ), eB = (0, n.useRef)(eM);
    (0, n.useLayoutEffect)(() => {
      eB.current = eM;
    }), (0, n.useLayoutEffect)(() => {
      if (ed.current === A2) return;
      let e3 = ed.current;
      ed.current = A2, A2 && e3 && M2(Math.sign(eL(A2) - eL(e3))), A2 && em.current.has(A2) && (eS(A2, !eh.current), eh.current = true);
    }, [A2]);
    let eF = C2 ?? (F2 ? null : A2);
    (0, n.useLayoutEffect)(() => {
      let e3 = eF ? ec.current.get(eF) : void 0;
      if (!e3) return void (0, m.i)(eR, 0, { duration: 0.18, ease: q });
      if (!(eR.get() > 0.35) || N2) {
        eT.stop(), eC.stop(), eT.set(e3.offsetLeft), eC.set(e3.offsetWidth), (0, m.i)(eR, 1, { duration: 0.16 * !N2, ease: q });
        return;
      }
      (0, m.i)(eR, 1, { duration: 0.12, ease: q }), (0, m.i)(eT, e3.offsetLeft, z), (0, m.i)(eC, e3.offsetWidth, z);
    }, [eF, F2, N2, eR, eC, eT]), (0, n.useLayoutEffect)(() => {
      let e3 = ei2.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = e3.clientWidth, a4 = el2.current?.offsetWidth ?? 0, r2 = "auto" === _2 ? a4 > t4 : t4 < _2;
        r2 !== ex.current ? (ex.current = r2, W2(r2), R2(null), r2 ? eB.current(null) : Q2(false)) : ed.current && eS(ed.current, true);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), el2.current && a3.observe(el2.current), () => a3.disconnect();
    }, [_2, eS]);
    let e$ = (e3 = g2) => {
      eD("open"), eD("aim"), ed.current && !ep.current.close && (ep.current.close = window.setTimeout(() => {
        ep.current.close = void 0, eM(null);
      }, e3));
    }, eO = () => eD("close"), eY = () => {
      var e3, t3;
      let a3, r2, n2, i2, s2 = eo2.current, l2 = ei2.current, o3 = ef.current;
      if (!s2 || !l2 || o3.length < 2) return false;
      let u2 = o3[o3.length - 1], c2 = o3.find((e4) => u2.t - e4.t < 120) ?? o3[0];
      if (3 > Math.hypot(u2.x - c2.x, u2.y - c2.y)) return false;
      let m2 = s2.getBoundingClientRect(), d3 = [
        { x: m2.left - 4, y: m2.top },
        { x: m2.right + 4, y: m2.top }
      ];
      return u2.y >= c2.y - 1 && (e3 = d3[0], t3 = d3[1], r2 = (a3 = (e4, t4, a4) => (e4.x - a4.x) * (t4.y - a4.y) - (t4.x - a4.x) * (e4.y - a4.y))(u2, c2, e3), n2 = a3(u2, e3, t3), i2 = a3(u2, t3, c2), !((r2 < -1 || n2 < -1 || i2 < -1) && (r2 > 1 || n2 > 1 || i2 > 1)));
    }, eq = (e3, t3) => {
      x2 && (e3.preventDefault(), x2(t3)), eD("open"), eD("close"), eD("aim"), eM(null), Q2(false);
    }, eW = () => e2.map((e3) => ec.current.get(e3.value)).filter((e3) => !!e3), eG = () => Array.from(
      eo2.current?.querySelectorAll("[data-mm-active] [data-mm-link]") ?? []
    ), eK = (e3) => {
      let t3 = eG();
      return !!t3.length && (("first" === e3 ? t3[0] : t3[t3.length - 1]).focus(), true);
    };
    (0, n.useEffect)(() => {
      if (!A2 || !e_.current) return;
      let e3 = requestAnimationFrame(() => {
        e_.current && eK("first") && (e_.current = false);
      });
      return () => cancelAnimationFrame(e3);
    }), (0, n.useEffect)(() => {
      if (!A2 && !V2) return;
      let e3 = (e4) => {
        ei2.current?.contains(e4.target) || (eM(null), Q2(false));
      }, t3 = (e4) => {
        "Escape" === e4.key && V2 && (Q2(false), ei2.current?.querySelector("[data-mm-toggle]")?.focus());
      };
      return document.addEventListener("pointerdown", e3), document.addEventListener("keydown", t3), () => {
        document.removeEventListener("pointerdown", e3), document.removeEventListener("keydown", t3);
      };
    }, [A2, V2, eM]);
    let eH = e2.find((e3) => e3.value === A2 && J(e3)), ez = `${w2}-menu`, eU = (e3) => (0, r.jsxs)("a", {
      className: B().brand,
      href: t2.href ?? "#",
      tabIndex: e3 ? -1 : void 0,
      onClick: (a3) => {
        e3 || eq(a3, { label: t2.name, href: t2.href });
      },
      children: [
        t2.mark ? (0, r.jsx)("span", {
          className: B().brandMark,
          children: t2.mark
        }) : null,
        (0, r.jsx)("span", { className: B().brandName, children: t2.name })
      ]
    }), eV = (e3, t3 = a2) => t3.map(
      (t4) => (0, r.jsx)(
        "a",
        {
          className: "primary" === t4.variant ? B().primary : B().quiet,
          href: t4.href ?? "#",
          tabIndex: e3 ? -1 : void 0,
          onPointerEnter: e3 ? void 0 : () => e$(),
          onClick: (a3) => {
            e3 || (t4.onClick?.(), eq(a3, { label: t4.label, href: t4.href }));
          },
          children: t4.label
        },
        t4.label
      )
    ), eQ = a2.filter((e3) => "primary" === e3.variant);
    return (0, r.jsxs)("div", {
      ref: ei2,
      className: [B().root, b2].filter(Boolean).join(" "),
      style: k2,
      "data-collapsed": F2 || void 0,
      "data-open": eH && !F2 || V2 || void 0,
      onPointerMove: (e3) => {
        if ("mouse" !== e3.pointerType && "pen" !== e3.pointerType) return;
        let t3 = ef.current;
        for (t3.push({ x: e3.clientX, y: e3.clientY, t: e3.timeStamp }); t3.length > 12 || t3.length > 2 && e3.timeStamp - t3[0].t > 240; )
          t3.shift();
        v2 && (() => {
          let e4 = eu.current, t4 = eo2.current, a3 = ei2.current, r2 = ef.current;
          if (!e4 || !a3) return;
          if (!t4 || !ed.current || !r2.length)
            return e4.setAttribute("points", "");
          let n2 = a3.getBoundingClientRect(), i2 = t4.getBoundingClientRect(), s2 = r2[r2.length - 1], l2 = r2.find((e5) => s2.t - e5.t < 120) ?? s2;
          e4.setAttribute(
            "points",
            `${l2.x - n2.left},${l2.y - n2.top} ${i2.left - 4 - n2.left},${i2.top - n2.top} ${i2.right + 4 - n2.left},${i2.top - n2.top}`
          ), e4.dataset.aiming = eY() ? "true" : "false";
        })();
      },
      onPointerLeave: (e3) => {
        "touch" !== e3.pointerType && (eb(null), e$());
      },
      onPointerEnter: eO,
      onBlur: (e3) => {
        let t3 = e3.relatedTarget;
        !(t3 && ei2.current?.contains(t3)) && ed.current && t3 && eM(null);
      },
      children: [
        (0, r.jsxs)("nav", {
          className: B().bar,
          "aria-label": y2,
          children: [
            eU(false),
            F2 ? (0, r.jsxs)("div", {
              className: B().actions,
              children: [
                eV(false, eQ),
                (0, r.jsx)("button", {
                  type: "button",
                  className: B().toggle,
                  "data-mm-toggle": "",
                  "aria-expanded": V2,
                  "aria-controls": `${w2}-sheet`,
                  "aria-label": V2 ? "Close menu" : "Open menu",
                  onClick: () => Q2(!V2),
                  children: (0, r.jsx)(s.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      l.PY1.span,
                      {
                        className: B().toggleIcon,
                        initial: N2 ? { opacity: 0 } : {
                          opacity: 0,
                          rotate: V2 ? -45 : 45,
                          scale: 0.7
                        },
                        animate: { opacity: 1, rotate: 0, scale: 1 },
                        exit: N2 ? { opacity: 0 } : {
                          opacity: 0,
                          rotate: V2 ? 45 : -45,
                          scale: 0.7
                        },
                        transition: N2 ? { duration: 0.1 } : I.T.spring.snappy,
                        children: V2 ? (0, r.jsx)(D.A, { "aria-hidden": "true" }) : (0, r.jsx)(S.A, { "aria-hidden": "true" })
                      },
                      V2 ? "close" : "open"
                    )
                  })
                })
              ]
            }) : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  ref: es2,
                  className: B().track,
                  onPointerLeave: () => eb(null),
                  children: [
                    (0, r.jsx)(l.PY1.span, {
                      className: B().highlight,
                      "aria-hidden": "true",
                      style: { x: eT, width: eC, opacity: eR }
                    }),
                    (0, r.jsx)("ul", {
                      className: B().items,
                      children: e2.map((t3) => {
                        let a3, n2 = J(t3), i2 = A2 === t3.value && n2, s2 = {
                          ref: (a3 = t3.value, (e3) => {
                            e3 ? ec.current.set(a3, e3) : ec.current.delete(a3);
                          }),
                          className: B().item,
                          "data-hot": C2 === t3.value || i2 || void 0,
                          "data-current": p2 === t3.value || void 0,
                          onPointerEnter: (e3) => ((e4, t4) => {
                            if ("touch" !== t4.pointerType) {
                              if (eb(e4.value), eO(), !J(e4)) {
                                ed.current && e$(150);
                                return;
                              }
                              if (ed.current) {
                                var a4;
                                let t5;
                                return void (a4 = e4.value, eD("aim"), (t5 = (e5) => {
                                  if (ed.current === a4 || ey.current !== a4)
                                    return;
                                  let r2 = performance.now() - e5;
                                  if (eY() && r2 < 320) {
                                    ep.current.aim = window.setTimeout(
                                      () => t5(e5),
                                      60
                                    );
                                    return;
                                  }
                                  eM(a4);
                                })(performance.now()));
                              }
                              eD("open"), ep.current.open = window.setTimeout(
                                () => {
                                  ep.current.open = void 0, eg.current = performance.now(), eM(e4.value);
                                },
                                f2
                              );
                            }
                          })(t3, e3),
                          onPointerLeave: () => {
                            ey.current === t3.value && eb(null), !ed.current && eD("open");
                          },
                          onFocus: () => eb(t3.value),
                          onBlur: () => {
                            ey.current === t3.value && eb(null);
                          },
                          onKeyDown: (a4) => ((t4, a5) => {
                            let r2 = eW(), n3 = r2.indexOf(t4.currentTarget), i3 = (t5) => {
                              let a6 = r2[(t5 + r2.length) % r2.length];
                              a6?.focus();
                              let n4 = e2.find(
                                (e3) => ec.current.get(e3.value) === a6
                              );
                              ed.current && n4 && eM(J(n4) ? n4.value : null);
                            };
                            switch (t4.key) {
                              case "ArrowRight":
                                t4.preventDefault(), i3(n3 + 1);
                                break;
                              case "ArrowLeft":
                                t4.preventDefault(), i3(n3 - 1);
                                break;
                              case "Home":
                                t4.preventDefault(), i3(0);
                                break;
                              case "End":
                                t4.preventDefault(), i3(r2.length - 1);
                                break;
                              case "ArrowDown":
                                if (!J(a5)) break;
                                t4.preventDefault(), e_.current = true, ed.current !== a5.value ? eM(a5.value) : eK("first");
                                break;
                              case "Tab":
                                !t4.shiftKey && ed.current === a5.value && J(a5) && (t4.preventDefault(), eK("first"));
                                break;
                              case "Escape":
                                ed.current && (t4.preventDefault(), eM(null));
                            }
                          })(a4, t3)
                        };
                        return (0, r.jsx)(
                          "li",
                          {
                            children: n2 ? (0, r.jsxs)("button", {
                              type: "button",
                              ...s2,
                              "aria-expanded": i2,
                              "aria-controls": i2 ? ez : void 0,
                              onClick: (e3) => {
                                let a4;
                                return eD("open"), eO(), a4 = e3.detail > 0 && ey.current === t3.value, void (!(ed.current === t3.value && a4 && performance.now() - eg.current < 450) && eM(
                                  ed.current === t3.value ? null : t3.value
                                ));
                              },
                              children: [
                                t3.label,
                                (0, r.jsx)(L.A, {
                                  className: B().chevron,
                                  "aria-hidden": "true"
                                })
                              ]
                            }) : (0, r.jsx)("a", {
                              ...s2,
                              href: t3.href ?? "#",
                              "aria-current": p2 === t3.value ? "page" : void 0,
                              onClick: (e3) => eq(e3, {
                                label: t3.label,
                                href: t3.href,
                                section: t3.value
                              }),
                              children: t3.label
                            })
                          },
                          t3.value
                        );
                      })
                    })
                  ]
                }),
                (0, r.jsx)("div", {
                  className: B().actions,
                  onPointerEnter: () => e$(),
                  children: eV(false)
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: el2,
          className: B().measure,
          "aria-hidden": "true",
          inert: true,
          children: [
            eU(true),
            (0, r.jsx)("ul", {
              className: B().items,
              children: e2.map(
                (e3) => (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("span", {
                      className: B().item,
                      children: [
                        e3.label,
                        J(e3) ? (0, r.jsx)(L.A, { className: B().chevron }) : null
                      ]
                    })
                  },
                  e3.value
                )
              )
            }),
            (0, r.jsx)("div", { className: B().actions, children: eV(true) })
          ]
        }),
        (0, r.jsx)(s.N, {
          onExitComplete: () => {
            eh.current = false;
          },
          children: eH && !F2 ? (0, r.jsxs)(
            l.PY1.div,
            {
              ref: eo2,
              id: ez,
              className: B().panel,
              style: {
                x: ek,
                width: ej,
                height: eN,
                transformOrigin: eP,
                top: "calc(var(--mm-bar-h) + 10px)"
              },
              initial: N2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: N2 ? { duration: 0.12 } : {
                  opacity: { duration: I.T.duration.fast, ease: q },
                  default: U
                }
              },
              exit: N2 ? { opacity: 0, transition: { duration: 0.1 } } : {
                opacity: 0,
                y: -4,
                scale: 0.985,
                transition: { duration: I.T.duration.exit, ease: q }
              },
              onPointerEnter: eO,
              onKeyDown: (e3) => {
                let t3 = eG(), a3 = t3.indexOf(document.activeElement), r2 = ed.current ? ec.current.get(ed.current) : void 0, n2 = (a4) => {
                  e3.preventDefault(), t3[Z(a4, 0, t3.length - 1)]?.focus();
                };
                switch (e3.key) {
                  case "ArrowDown":
                    n2(a3 + 1);
                    break;
                  case "ArrowUp":
                    a3 <= 0 ? (e3.preventDefault(), r2?.focus()) : n2(a3 - 1);
                    break;
                  case "Home":
                    n2(0);
                    break;
                  case "End":
                    n2(t3.length - 1);
                    break;
                  case "ArrowRight":
                  case "ArrowLeft": {
                    e3.preventDefault();
                    let t4 = "ArrowRight" === e3.key ? 1 : -1, a4 = eE.findIndex((e4) => e4.value === ed.current), r3 = eE[(a4 + t4 + eE.length) % eE.length];
                    if (!r3) break;
                    e_.current = true, eM(r3.value);
                    break;
                  }
                  case "Escape":
                    e3.preventDefault(), eM(null), r2?.focus();
                    break;
                  case "Tab":
                    if (e3.shiftKey && 0 === a3) {
                      e3.preventDefault(), r2?.focus();
                      break;
                    }
                    if (!e3.shiftKey && a3 === t3.length - 1) {
                      e3.preventDefault();
                      let t4 = eW(), a4 = r2 ? t4[t4.indexOf(r2) + 1] : void 0;
                      eM(null), (a4 ?? r2)?.focus();
                    }
                }
              },
              children: [
                (0, r.jsx)("div", {
                  className: B().surface,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(l.PY1.div, {
                    className: B().band,
                    style: { height: ew }
                  })
                }),
                (0, r.jsx)(l.PY1.span, {
                  className: B().caret,
                  "aria-hidden": "true",
                  style: { x: eA }
                }),
                (0, r.jsx)("div", {
                  className: B().clip,
                  children: (0, r.jsx)(s.N, {
                    initial: false,
                    custom: P2,
                    children: (0, r.jsx)(
                      ee,
                      {
                        id: eH.value,
                        direction: P2,
                        reduced: N2,
                        onSize: eI,
                        active: true,
                        children: (0, r.jsx)(et, {
                          item: eH,
                          onPick: eq
                        })
                      },
                      eH.value
                    )
                  })
                })
              ]
            },
            "panel"
          ) : null
        }),
        v2 && !F2 ? (0, r.jsx)("svg", {
          className: B().safeArea,
          "aria-hidden": "true",
          children: (0, r.jsx)("polygon", { ref: eu, points: "" })
        }) : null,
        (0, r.jsx)(s.N, {
          children: F2 && V2 ? (0, r.jsx)(
            l.PY1.div,
            {
              id: `${w2}-sheet`,
              className: B().sheet,
              initial: N2 ? { opacity: 0 } : { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: N2 ? { opacity: 0 } : { opacity: 0, height: 0 },
              transition: N2 ? { duration: 0.12 } : {
                height: I.T.spring.smooth,
                opacity: { duration: 0.18, ease: q }
              },
              children: (0, r.jsxs)(l.PY1.ul, {
                className: B().sheetList,
                initial: "hidden",
                animate: "shown",
                variants: {
                  hidden: {},
                  shown: {
                    transition: {
                      staggerChildren: N2 ? 0 : I.T.stagger.item,
                      delayChildren: 0.04 * !N2
                    }
                  }
                },
                children: [
                  e2.map((e3) => {
                    let t3 = J(e3), a3 = er2 === e3.value;
                    return (0, r.jsx)(
                      l.PY1.li,
                      {
                        className: B().sheetItem,
                        variants: {
                          hidden: N2 ? { opacity: 0 } : { opacity: 0, y: -6 },
                          shown: {
                            opacity: 1,
                            y: 0,
                            transition: N2 ? { duration: 0.1 } : U
                          }
                        },
                        children: t3 ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)("button", {
                              type: "button",
                              className: B().sheetRow,
                              "aria-expanded": a3,
                              "aria-controls": `${w2}-${e3.value}`,
                              "data-current": p2 === e3.value || void 0,
                              onClick: () => en2(a3 ? null : e3.value),
                              children: [
                                e3.label,
                                (0, r.jsx)(L.A, {
                                  className: B().chevron,
                                  "aria-hidden": "true"
                                })
                              ]
                            }),
                            (0, r.jsx)(s.N, {
                              initial: false,
                              children: a3 ? (0, r.jsx)(
                                l.PY1.div,
                                {
                                  id: `${w2}-${e3.value}`,
                                  role: "region",
                                  "aria-label": e3.label,
                                  className: B().sheetBody,
                                  initial: {
                                    height: 0,
                                    opacity: 0
                                  },
                                  animate: {
                                    height: "auto",
                                    opacity: 1
                                  },
                                  exit: { height: 0, opacity: 0 },
                                  transition: N2 ? { duration: 0 } : {
                                    height: I.T.spring.smooth,
                                    opacity: {
                                      duration: 0.2,
                                      ease: q
                                    }
                                  },
                                  children: (0, r.jsxs)("div", {
                                    className: B().sheetGroups,
                                    children: [
                                      e3.groups?.map(
                                        (t4, a4) => (0, r.jsxs)(
                                          "div",
                                          {
                                            className: B().sheetGroup,
                                            children: [
                                              t4.title ? (0, r.jsx)(
                                                "p",
                                                {
                                                  className: B().groupTitle,
                                                  children: t4.title
                                                }
                                              ) : null,
                                              (0, r.jsx)("ul", {
                                                className: B().sheetLinks,
                                                children: t4.links.map(
                                                  (t5) => (0, r.jsx)(
                                                    "li",
                                                    {
                                                      children: (0, r.jsxs)(
                                                        "a",
                                                        {
                                                          className: B().sheetLink,
                                                          href: t5.href ?? "#",
                                                          onClick: (a5) => eq(
                                                            a5,
                                                            {
                                                              label: t5.label,
                                                              href: t5.href,
                                                              section: e3.value
                                                            }
                                                          ),
                                                          children: [
                                                            t5.icon ? (0, r.jsx)(
                                                              "span",
                                                              {
                                                                className: B().linkIcon,
                                                                children: t5.icon
                                                              }
                                                            ) : null,
                                                            (0, r.jsx)(
                                                              "span",
                                                              {
                                                                className: B().linkLabel,
                                                                children: t5.label
                                                              }
                                                            ),
                                                            t5.badge ? (0, r.jsx)(
                                                              "span",
                                                              {
                                                                className: B().badge,
                                                                children: t5.badge
                                                              }
                                                            ) : null
                                                          ]
                                                        }
                                                      )
                                                    },
                                                    t5.label
                                                  )
                                                )
                                              })
                                            ]
                                          },
                                          t4.title ?? a4
                                        )
                                      ),
                                      e3.feature ? (0, r.jsxs)("a", {
                                        className: B().sheetFeature,
                                        href: e3.feature.href ?? "#",
                                        onClick: (t4) => eq(t4, {
                                          label: e3.feature.title,
                                          href: e3.feature.href,
                                          section: e3.value
                                        }),
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: B().featureTitle,
                                            children: e3.feature.title
                                          }),
                                          e3.feature.cta ? (0, r.jsxs)(
                                            "span",
                                            {
                                              className: B().featureCta,
                                              children: [
                                                e3.feature.cta,
                                                (0, r.jsx)(
                                                  E.A,
                                                  {
                                                    "aria-hidden": "true"
                                                  }
                                                )
                                              ]
                                            }
                                          ) : null
                                        ]
                                      }) : null
                                    ]
                                  })
                                },
                                "body"
                              ) : null
                            })
                          ]
                        }) : (0, r.jsx)("a", {
                          className: B().sheetRow,
                          href: e3.href ?? "#",
                          "data-current": p2 === e3.value || void 0,
                          "aria-current": p2 === e3.value ? "page" : void 0,
                          onClick: (t4) => eq(t4, {
                            label: e3.label,
                            href: e3.href,
                            section: e3.value
                          }),
                          children: e3.label
                        })
                      },
                      e3.value
                    );
                  }),
                  a2.some((e3) => "primary" !== e3.variant) ? (0, r.jsx)(l.PY1.li, {
                    className: B().sheetActions,
                    variants: {
                      hidden: { opacity: 0 },
                      shown: {
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }
                    },
                    children: eV(
                      false,
                      a2.filter((e3) => "primary" !== e3.variant)
                    )
                  }) : null
                ]
              })
            },
            "sheet"
          ) : null
        })
      ]
    });
  }
  var er = a(50680), en = a(70597), ei = a.n(en);
  let es = {
    products: "Products",
    solutions: "Solutions",
    developers: "Developers",
    company: "Company",
    pricing: "Pricing"
  };
  function el() {
    let e2 = (0, i.I)(), [t2, a2] = (0, n.useState)("products"), [o2, u2] = (0, n.useState)(null), [c2, m2] = (0, n.useState)(false), d2 = o2 ? o2.section ? `${o2.label} in ${es[o2.section] ?? o2.section}` : o2.label : null;
    return (0, r.jsxs)("div", {
      className: ei().demo,
      "data-canvas": "wide",
      children: [
        (0, r.jsxs)("div", {
          className: ei().window,
          children: [
            (0, r.jsx)(ea, {
              current: t2,
              onNavigate: (e3) => {
                u2(e3), e3.section && a2(e3.section);
              },
              showSafeArea: c2
            }),
            (0, r.jsxs)("div", {
              className: ei().page,
              children: [
                (0, r.jsx)("h2", {
                  className: ei().title,
                  children: "Get paid in 46 currencies, settle in yours"
                }),
                (0, r.jsx)("p", {
                  className: ei().lead,
                  children: "One integration for checkout, subscriptions and payouts, with fraud scoring and reconciliation built in."
                }),
                (0, r.jsx)("p", {
                  className: ei().visit,
                  "aria-live": "polite",
                  children: (0, r.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, r.jsx)(
                      l.PY1.span,
                      {
                        className: ei().visitText,
                        initial: e2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: 6,
                          filter: `blur(${I.T.blur.subtle}px)`
                        },
                        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                        exit: e2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: -6,
                          filter: `blur(${I.T.blur.subtle}px)`
                        },
                        transition: e2 ? { duration: 0.1 } : I.T.spring.smooth,
                        children: d2 ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            "Opened ",
                            (0, r.jsx)("strong", { children: d2 })
                          ]
                        }) : "Choose any destination in the header"
                      },
                      d2 ?? "none"
                    )
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: ei().controls,
          children: [
            (0, r.jsx)(er.d, {
              label: "Show safe area",
              checked: c2,
              onCheckedChange: m2
            }),
            (0, r.jsx)("span", {
              className: ei().hint,
              children: "Move diagonally from a menu into its links, or tab in and use the arrow keys"
            })
          ]
        })
      ]
    });
  }
  let eo = el;
}

__m(__module,__exports,__require);
});
A.reg(40557, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "book-open",
    size: 24,
    node: [
      ["path", { d: "M12 5v16", key: "1f6ucr" }],
      [
        "path",
        {
          d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
          key: "1fyvmf"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(44825, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "rocket",
    size: 24,
    node: [
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
          key: "u4xsad"
        }
      ],
      [
        "path",
        {
          d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
          key: "676m9"
        }
      ],
      [
        "path",
        { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }
      ]
    ]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
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
A.reg(50981, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "shield-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(52957, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => n });
  var d = t(51811);
  let h = {
    name: "briefcase",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }
      ],
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }
      ]
    ]
  };
  h.node;
  let n = (0, d.A)(h);
}

__m(__module,__exports,__require);
});
A.reg(54757, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var i = t(51811);
  let n = {
    name: "heart",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
          key: "mvr1a0"
        }
      ]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(57465, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "users",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(70597, ".demo{display:grid;width:100%;max-width:880px;gap:14px;margin-inline:auto}\n.window{position:relative;display:grid;min-height:480px;overflow:clip;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--background);grid-template-rows:auto 1fr}\n.window{--mm-sheet-max:420px;container-type:inline-size}\n@media (max-width:480px){.window{--mm-sheet-max:480px;min-height:540px;border-radius:var(--radius-panel)}\n.page{display:grid;align-content:start;gap:12px;padding:clamp(40px,9cqw,96px) clamp(20px,6cqw,56px) 32px;container-type:inline-size}\n.title{max-width:16em;margin:0;color:var(--foreground);font-family:var(--font-display);font-size:clamp(var(--text-2xl),5.4cqw,var(--text-4xl));font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.lead{max-width:34em;margin:0;color:var(--text-secondary);font-size:var(--text-base);line-height:var(--leading-body);text-wrap:pretty}\n.visit{display:grid;min-height:22px;margin:12px 0 0;color:var(--text-muted);font-size:var(--text-sm)}\n.visitText{grid-area:1/1}\n.visitText strong{color:var(--foreground);font-weight:500}\n.controls{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;padding:0 8px}\n.hint{color:var(--text-muted);font-size:var(--text-xs)}", {"demo":"demo","window":"window","page":"page","title":"title","lead":"lead","visit":"visit","visitText":"visitText","controls":"controls","hint":"hint"});
A.reg(71019, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "credit-card",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ["path", { d: "M6 14h2", key: "mk7k0u" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(72974, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "webhook",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
          key: "q3hayz"
        }
      ],
      [
        "path",
        {
          d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
          key: "1go1hn"
        }
      ],
      [
        "path",
        {
          d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
          key: "qlwsc0"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(78912, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "repeat",
    size: 24,
    node: [
      ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
      ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
    ]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(85974, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var o = a(51811);
  let l = {
    name: "store",
    size: 24,
    node: [
      [
        "path",
        { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }
      ],
      [
        "path",
        {
          d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
          key: "o0xfot"
        }
      ],
      [
        "path",
        {
          d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
          key: "wn3emo"
        }
      ]
    ]
  };
  l.node;
  let r = (0, o.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(93089, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "package",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
          key: "1a0edw"
        }
      ],
      ["path", { d: "M12 22V12", key: "d0xqtd" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(94179, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "square-terminal",
    size: 24,
    node: [
      ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
      ["path", { d: "M11 13h4", key: "1p7l4v" }],
      [
        "rect",
        {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
          key: "1m3agn"
        }
      ]
    ],
    aliases: ["terminal-square"]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(96304, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "menu",
    size: 24,
    node: [
      ["path", { d: "M4 5h16", key: "1tepv9" }],
      ["path", { d: "M4 12h16", key: "1lakjw" }],
      ["path", { d: "M4 19h16", key: "1djgab" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.cssFor("mega-menu-morph", [5834,70597]);
A.item("mega-menu-morph", {entry:35363, export:"MegaMenuMorphDemo", kind:"component", tier:"pro", unresolved:[]});
})();