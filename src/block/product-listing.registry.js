/* product-listing (pro block) */
(function(){var A=globalThis.__ARC__;
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
A.regCss(21960, ".root{container-type:inline-size;container-name:listing;grid-template-rows:minmax(0,1fr);height:780px;border:1px solid var(--border);border-radius:var(--radius-surface)}\n.frame,.root{position:relative;display:grid;width:100%;overflow:hidden;background:var(--surface);isolation:isolate}\n.frame{grid-template-rows:auto minmax(0,1fr);height:100%;min-height:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.frame :where(h2,h3,p,ul,fieldset){margin:0}\n.frame :where(ul){padding:0;list-style:none}\n.frame :where(fieldset){min-width:0;padding:0;border:0}\n.frame :where(legend){padding:0}\n.frame :where(button,input){font:inherit;letter-spacing:inherit;color:inherit;-webkit-tap-highlight-color:transparent}\n.frame :focus{outline:none}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.roll{display:inline-flex;font-variant-numeric:tabular-nums}\n.rollChars{display:inline-flex}\n.rollDigit{position:relative;display:inline-block;height:1.4em;overflow:hidden;line-height:1.4em}\n.rollStrip{display:flex;flex-direction:column}\n.rollStrip span{display:block;height:1.4em}\n.top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3);padding:var(--space-5) var(--space-6);border-bottom:1px solid var(--border-subtle)}\n.top{padding:var(--space-4)}\n.heading{display:flex;align-items:baseline;gap:var(--space-3);min-width:0}\n.heading h2{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n@container listing (max-width: 420px){.heading h2{font-size:var(--text-xl)}\n.count{display:inline-flex;gap:4px;color:var(--text-muted)}\n.tools{display:flex;align-items:center;gap:var(--space-2)}\n.tools{width:100%}\n.sort{position:relative}\n.sort{flex:1;min-width:0}\n.filterButton,.sortButton{display:inline-flex;align-items:center;gap:var(--space-2);height:var(--control-height-sm);padding:0 var(--space-3) 0 var(--space-4);border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);font-weight:500;white-space:nowrap;cursor:pointer;transition:border-color var(--duration-fast) ease,background-color var(--duration-fast) ease}\n.sortButton[aria-expanded=true]{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.filterButton:hover,.sortButton:hover{border-color:var(--border-strong)}\n.sortButton{width:100%;justify-content:space-between;padding:0 var(--space-3)}\n.filterButton{display:none;padding:0 var(--space-4) 0 var(--space-3)}\n@container listing (max-width: 639px){.filterButton{display:inline-flex}\n.sortLabel{color:var(--text-muted);font-weight:400}\n.sortLabel{display:none}\n.chevron{color:var(--text-muted);transition:transform var(--duration-standard) var(--ease-standard)}\n.chevron[data-open]{transform:rotate(180deg)}\n.chevron,.swatchCheck,.swatch:after,.thumb{transition-property:opacity,background-color}\n.badge{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:var(--radius-pill);background:var(--control-on);color:var(--control-glyph);font-size:var(--text-xs);line-height:1;font-variant-numeric:tabular-nums}\n.sortMenu{position:absolute;top:calc(100% + 6px);right:0;z-index:20;display:grid;min-width:220px;padding:4px;border:1px solid var(--border);border-radius:calc(var(--radius-panel) - 8px);background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:top right}\n.sortMenu{right:auto;left:0;min-width:100%;transform-origin:top left}\n.sortOption{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);height:36px;padding:0 var(--space-3);border-radius:12px;cursor:pointer}\n.sortOption[data-active]{background:var(--surface-muted)}\n.sortOption[aria-selected=true]{font-weight:500}\n.bag{position:relative;display:inline-flex;align-items:center;gap:6px;height:var(--control-height-sm);padding:0 var(--space-3);border-radius:var(--radius-pill);background:var(--surface-muted);font-weight:500}\n.bagIcon{display:grid}\n.bagCount{min-width:1ch}\n.body{display:grid;grid-template-columns:232px minmax(0,1fr);min-height:0}\n@container listing (min-width: 640px) and (max-width: 900px){.body{grid-template-columns:208px minmax(0,1fr)}\n.body{grid-template-columns:minmax(0,1fr)}\n.sidebar{min-height:0;overflow-y:auto;padding:var(--space-5) var(--space-5) var(--space-6) var(--space-6);border-right:1px solid var(--border-subtle);scrollbar-width:thin}\n.sidebar{padding:var(--space-5) var(--space-4) var(--space-6) var(--space-5)}\n.sidebar{display:none}\n.filterBody{display:grid;align-content:start;gap:var(--space-6)}\n.group{display:grid;gap:var(--space-3)}\n.groupTitle{display:flex;justify-content:space-between;margin-bottom:var(--space-3);font-weight:500}\n.price{display:grid;gap:var(--space-2)}\n.range{position:relative;height:24px}\n.range input{position:absolute;inset:0;width:100%;height:100%;margin:0;background:none;pointer-events:none;touch-action:none;appearance:none;-webkit-appearance:none}\n.range input::-webkit-slider-runnable-track{height:100%;background:none}\n.range input::-moz-range-track{background:none}\n.range input::-webkit-slider-thumb{width:20px;height:20px;margin-top:2px;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);cursor:grab;pointer-events:auto;appearance:none;-webkit-appearance:none;transition:transform var(--duration-fast) var(--ease-standard)}\n.range input::-moz-range-thumb{width:20px;height:20px;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);cursor:grab;pointer-events:auto;transition:transform var(--duration-fast) var(--ease-standard)}\n.range input:active::-webkit-slider-thumb{transform:scale(1.12);cursor:grabbing}\n.range input:active::-moz-range-thumb{transform:scale(1.12);cursor:grabbing}\n.rangeTrack{position:absolute;top:50%;right:0;left:0;height:4px;margin-top:-2px;border-radius:var(--radius-pill);background:var(--control-track)}\n.rangeFill{position:absolute;top:0;bottom:0;border-radius:inherit;background:var(--control-fill)}\n.priceValues{display:flex;justify-content:space-between;color:var(--text-secondary)}\n.swatches{display:flex;flex-wrap:wrap;gap:var(--space-1)}\n.swatch{position:relative;display:grid;place-items:center;width:32px;height:32px;padding:0;border:0;border-radius:var(--radius-pill);background:none;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard)}\n.swatch:active{transform:scale(.92)}\n.swatch:after{position:absolute;inset:0;border-radius:inherit;box-shadow:0 0 0 1.5px var(--foreground);opacity:0;transform:scale(.9);content:\"\";transition:opacity var(--duration-fast) ease,transform var(--duration-standard) var(--ease-spring)}\n.swatch[aria-pressed=true]:after{opacity:1;transform:none}\n.swatchFill{position:absolute;inset:3px;border-radius:inherit;box-shadow:inset 0 0 0 1px oklch(0 0 0/.12)}\n.swatchCheck{position:relative;display:grid;color:#fff;opacity:0;transform:scale(.5);transition:opacity var(--duration-fast) ease,transform var(--duration-spring) var(--ease-spring)}\n.swatchCheck[data-light]{color:#1c1b19}\n.swatchCheck[data-on]{opacity:1;transform:none}\n.sizes{display:flex;gap:var(--space-2)}\n.sizeChip{min-width:44px;height:36px;padding:0 var(--space-3);border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) ease,color var(--duration-fast) ease,border-color var(--duration-fast) ease}\n.sizeChip:active{transform:scale(.95)}\n.sizeChip[aria-pressed=true]{border-color:var(--control-on);background:var(--control-on);color:var(--control-glyph)}\n@media (hover:hover) and (pointer:fine){.sizeChip:not([aria-pressed=true]):hover{border-color:var(--border-strong)}\n.switchRow{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);font-weight:500;cursor:pointer}\n.switch{position:relative;flex:none;width:40px;height:24px;padding:0;border:0;border-radius:var(--radius-pill);background:var(--control-track);cursor:pointer;transition:background-color var(--duration-fast) ease}\n.switch[aria-checked=true]{background:var(--control-on)}\n.switch[aria-checked=true] .thumb{background:var(--control-thumb-on);transform:translateX(16px)}\n.thumb{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);transition:transform var(--duration-spring) var(--ease-spring),background-color var(--duration-fast) ease}\n.clearAll{justify-self:start;height:32px;padding:0 var(--space-3);border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:opacity var(--duration-fast) ease,transform var(--duration-fast) var(--ease-standard)}\n.clearAll:active{transform:scale(.97)}\n.clearAll:disabled{opacity:.4;cursor:default;transform:none}\n.results{container:results/inline-size;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:var(--space-5) var(--space-6) var(--space-8);scrollbar-width:thin}\n.results{padding:var(--space-5) var(--space-5) var(--space-8)}\n.results{padding:var(--space-4) var(--space-4) var(--space-6)}\n.grid{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;gap:var(--space-6) var(--space-4)}\n@container results (max-width: 299px){.grid{grid-template-columns:minmax(0,1fr)}\n@container results (min-width: 640px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}\n@container results (min-width: 860px){.grid{grid-template-columns:repeat(4,minmax(0,1fr))}\n@container results (min-width: 1080px){.grid{grid-template-columns:repeat(5,minmax(0,1fr))}\n.grid{gap:var(--space-5) var(--space-3)}\n.card{display:grid;grid-template-rows:auto auto;gap:var(--space-3);align-content:start;min-width:0}\n@media (hover:hover) and (pointer:fine){.card:hover .hoverImage{opacity:1}\n@media (hover:hover) and (pointer:fine){.card:not([data-active]) .quick{opacity:0;transform:translateY(8px)}\n.card:focus-within .quick,.card:hover .quick{opacity:1;transform:none}\n.media{position:relative;width:100%;aspect-ratio:4/5;overflow:hidden;border-radius:calc(var(--radius-panel) - 6px);background:var(--surface-muted)}\n.hoverImage,.image{width:100%;height:100%;object-fit:cover;object-position:center}\n.hoverImage{opacity:0;transition:opacity var(--duration-standard) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.hoverImage,.quick{transition:opacity var(--duration-fast) ease}\n.quick{position:absolute;right:10px;bottom:10px;left:10px;display:grid;height:40px;border-radius:var(--radius-pill);background:oklch(100% 0 0/.82);color:#1c1b19;box-shadow:0 6px 18px oklch(0 0 0/.12);-webkit-backdrop-filter:blur(16px) saturate(160%);backdrop-filter:blur(16px) saturate(160%);transition:opacity var(--duration-fast) ease,transform var(--duration-standard) var(--ease-enter)}\n.quick>*{grid-area:1/1}\n.quick{transform:none!important}\n.quickAdd,.quickDone{display:inline-flex;align-items:center;justify-content:center;gap:6px;width:100%;height:100%;padding:0;border:0;border-radius:inherit;background:none;color:inherit!important;font-weight:500;cursor:pointer}\n.quickAdd:active:not(:disabled){transform:scale(.97)}\n.quickAdd:disabled{color:oklch(40% 0 0)!important;cursor:default}\n.quickAdd{font-size:var(--text-xs)}\n.quickDone{color:oklch(45% .15 150)!important;cursor:default}\n.quickSizes{display:flex;align-items:center;gap:2px;padding:4px}\n.quickSize{flex:1;height:32px;padding:0;border:0;border-radius:var(--radius-pill);background:none;color:inherit!important;font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) ease,transform var(--duration-fast) var(--ease-standard)}\n.quickSize:focus-visible,.quickSize:hover{background:oklch(0 0 0/.07)}\n.quickSize:active{transform:scale(.94)}\n.quickClose{display:grid;flex:none;place-items:center;width:32px;height:32px;padding:0;border:0;border-radius:var(--radius-pill);background:none;color:oklch(40% 0 0)!important;cursor:pointer}\n.quickClose:hover{background:oklch(0 0 0/.07)}\n.info{display:grid;grid-template-rows:auto auto minmax(0,1fr) auto;row-gap:2px;min-width:0;height:calc(5.6em + 10px);padding:0 2px;font-size:var(--text-sm);line-height:1.4}\n.name{display:-webkit-box;min-width:0;overflow:hidden;font-size:inherit;font-weight:500;line-height:inherit;overflow-wrap:anywhere;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}\n.detail{min-width:0;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}\n.meta{grid-row:4;display:flex;align-items:center;justify-content:space-between;gap:var(--space-2);height:1.4em;min-width:0}\n.priceTag{display:inline-flex;flex:none;gap:6px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.priceTag [data-sale]{color:var(--danger)}\n.compare{color:var(--text-muted)}\n.aside{display:flex;align-items:center;gap:var(--space-2);min-width:0;overflow:hidden}\n.dots{display:flex;flex:none;gap:4px}\n.dot{flex:none;width:10px;height:10px;border-radius:var(--radius-pill);box-shadow:inset 0 0 0 1px oklch(0 0 0/.14)}\n.status{min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.empty{display:grid;place-content:center;justify-items:center;gap:var(--space-3);min-height:320px;color:var(--text-muted);text-align:center}\n.sheetLayer{position:absolute;inset:0;z-index:30}\n@container listing (min-width: 640px){.sheetLayer{display:none}\n.scrim{position:absolute;inset:0;width:100%;border:0;background:oklch(0 0 0/.32);cursor:default}\n.sheet{position:absolute;top:0;bottom:0;left:0;display:grid;grid-template-rows:auto 1fr auto;gap:var(--space-5);width:min(320px,88%);padding:var(--space-5);overflow-y:auto;border-right:1px solid var(--border);border-radius:0 var(--radius-panel) var(--radius-panel) 0;background:var(--surface-raised);box-shadow:var(--shadow-floating)}\n.sheetHead{display:flex;align-items:center;justify-content:space-between}\n.sheetHead h3{font-size:var(--text-lg);font-weight:500}\n.sheetClose{display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:var(--radius-pill);background:var(--surface-muted);cursor:pointer}\n.showResults{height:var(--control-height-md);border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground)!important;font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard)}\n.showResults:active{transform:scale(.97)}", {"root":"root","frame":"frame","srOnly":"srOnly","roll":"roll","rollChars":"rollChars","rollDigit":"rollDigit","rollStrip":"rollStrip","top":"top","heading":"heading","count":"count","tools":"tools","sort":"sort","filterButton":"filterButton","sortButton":"sortButton","sortLabel":"sortLabel","chevron":"chevron","swatchCheck":"swatchCheck","swatch":"swatch","thumb":"thumb","badge":"badge","sortMenu":"sortMenu","sortOption":"sortOption","bag":"bag","bagIcon":"bagIcon","bagCount":"bagCount","body":"body","sidebar":"sidebar","filterBody":"filterBody","group":"group","groupTitle":"groupTitle","price":"price","range":"range","rangeTrack":"rangeTrack","rangeFill":"rangeFill","priceValues":"priceValues","swatches":"swatches","swatchFill":"swatchFill","sizes":"sizes","sizeChip":"sizeChip","switchRow":"switchRow","switch":"switch","clearAll":"clearAll","results":"results","grid":"grid","card":"card","hoverImage":"hoverImage","quick":"quick","media":"media","image":"image","quickAdd":"quickAdd","quickDone":"quickDone","quickSizes":"quickSizes","quickSize":"quickSize","quickClose":"quickClose","info":"info","name":"name","detail":"detail","meta":"meta","priceTag":"priceTag","compare":"compare","aside":"aside","dots":"dots","dot":"dot","status":"status","empty":"empty","sheetLayer":"sheetLayer","scrim":"scrim","sheet":"sheet","sheetHead":"sheetHead","sheetClose":"sheetClose","showResults":"showResults"});
A.reg(72926, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { ProductListing: () => M, default: () => T });
  var t = i(95155), s = i(12115), l = i(5772), r = i(18310), n = i(25354), o = i(80642), d = i(57700), c = i(12363), h = i(64577), p = i(80846), u = i(16720), m = i(9005), g = i(2125), _ = i(7770), b = i(67752);
  let w = [
    { id: "oat", name: "Oat", swatch: "#d8cbb3" },
    { id: "clay", name: "Clay", swatch: "#b56a4c" },
    { id: "sage", name: "Sage", swatch: "#98a58a" },
    { id: "charcoal", name: "Charcoal", swatch: "#3b3a38" },
    { id: "chalk", name: "Chalk", swatch: "#f1eee7" }
  ], x = ["S", "M", "L"], f = (e2) => (0, b.jW)(e2).src, j = [
    {
      id: "p-lounge",
      name: "Woven lounge chair",
      detail: "Oak and paper cord",
      price: 340,
      image: f("lounge-chair"),
      hoverImage: f("living-room"),
      alt: (0, b.jW)("lounge-chair").alt,
      colors: ["oat", "charcoal"],
      sizes: ["M"],
      inStock: true,
      added: 9,
      rank: 1
    },
    {
      id: "p-lamp",
      name: "Dome table lamp",
      detail: "Opal glass",
      price: 128,
      image: f("table-lamp"),
      hoverImage: f("home-office"),
      alt: (0, b.jW)("table-lamp").alt,
      colors: ["chalk", "oat"],
      sizes: ["S", "M"],
      inStock: true,
      added: 6,
      rank: 2
    },
    {
      id: "p-throw",
      name: "Fringed linen throw",
      detail: "Stonewashed linen",
      price: 89,
      compareAt: 110,
      image: f("linen-throw"),
      hoverImage: f("bedroom"),
      alt: (0, b.jW)("linen-throw").alt,
      colors: ["oat", "sage", "clay"],
      sizes: ["S", "M", "L"],
      inStock: true,
      added: 4,
      rank: 3
    },
    {
      id: "p-carafe",
      name: "Ribbed carafe set",
      detail: "Mouth blown glass",
      price: 64,
      image: f("glass-carafe"),
      hoverImage: f("sunroom"),
      alt: (0, b.jW)("glass-carafe").alt,
      colors: ["chalk"],
      sizes: ["M"],
      inStock: true,
      added: 8,
      rank: 4
    },
    {
      id: "p-cups",
      name: "Speckled cups, pair",
      detail: "Glazed stoneware",
      price: 42,
      image: f("stoneware-cups"),
      hoverImage: f("stacked-bowls"),
      alt: (0, b.jW)("stoneware-cups").alt,
      colors: ["chalk", "clay"],
      sizes: ["S", "M"],
      inStock: false,
      added: 7,
      rank: 5
    },
    {
      id: "p-bowls",
      name: "Stacking bowls",
      detail: "Glazed stoneware",
      price: 56,
      image: f("stacked-bowls"),
      hoverImage: f("stoneware-cups"),
      alt: (0, b.jW)("stacked-bowls").alt,
      colors: ["charcoal", "chalk"],
      sizes: ["S", "M", "L"],
      inStock: true,
      added: 3,
      rank: 6
    },
    {
      id: "p-ceramic",
      name: "Arch ceramic lamp",
      detail: "Linen shade",
      price: 210,
      image: f("ceramic-lamp"),
      hoverImage: f("living-room"),
      alt: (0, b.jW)("ceramic-lamp").alt,
      colors: ["clay", "oat"],
      sizes: ["M", "L"],
      inStock: true,
      added: 10,
      rank: 7
    },
    {
      id: "p-reader",
      name: "Reading armchair",
      detail: "Boucle and ash",
      price: 390,
      compareAt: 460,
      image: f("reading-chair"),
      hoverImage: f("home-office"),
      alt: (0, b.jW)("reading-chair").alt,
      colors: ["charcoal", "sage"],
      sizes: ["M", "L"],
      inStock: true,
      added: 2,
      rank: 8
    }
  ];
  var k = i(21960), v = i.n(k);
  let y = [
    { id: "featured", label: "Featured" },
    { id: "newest", label: "Newest" },
    { id: "price-asc", label: "Price, low to high" },
    { id: "price-desc", label: "Price, high to low" }
  ], N = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function S({ text: e2 }) {
    let a2 = (0, r.I)(), i2 = Array.from(e2);
    return (0, t.jsxs)("span", {
      className: v().roll,
      children: [
        (0, t.jsx)("span", {
          "aria-hidden": "true",
          className: v().rollChars,
          children: i2.map((e3, s2) => {
            let l2 = i2.length - s2;
            return /\d/.test(e3) ? (0, t.jsx)(
              "span",
              {
                className: v().rollDigit,
                children: (0, t.jsx)(n.PY1.span, {
                  className: v().rollStrip,
                  initial: false,
                  animate: { y: `${-10 * Number(e3)}%` },
                  transition: a2 ? { duration: 0 } : _.T.spring.snappy,
                  children: N.map(
                    (e4) => (0, t.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              l2
            ) : (0, t.jsx)("span", { children: e3 }, `s${l2}`);
          })
        }),
        (0, t.jsx)("span", { className: v().srOnly, children: e2 })
      ]
    });
  }
  function C({ value: e2, onChange: a2 }) {
    let i2 = (0, s.useId)(), l2 = (0, r.I)(), [d2, p2] = (0, s.useState)(false), [u2, m2] = (0, s.useState)(0), g2 = (0, s.useRef)(null), b2 = (0, s.useRef)(null), w2 = (0, s.useRef)(null), x2 = y.find((a3) => a3.id === e2) ?? y[0];
    (0, s.useEffect)(() => {
      if (!d2) return;
      b2.current?.focus({ preventScroll: true });
      let e3 = (e4) => {
        w2.current?.contains(e4.target) || p2(false);
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [d2]);
    let f2 = () => {
      m2(
        Math.max(
          0,
          y.findIndex((a3) => a3.id === e2)
        )
      ), p2(true);
    }, j2 = (e3) => {
      a2(e3), p2(false), g2.current?.focus({ preventScroll: true });
    };
    return (0, t.jsxs)("div", {
      ref: w2,
      className: v().sort,
      children: [
        (0, t.jsxs)("button", {
          ref: g2,
          type: "button",
          className: v().sortButton,
          "aria-haspopup": "listbox",
          "aria-expanded": d2,
          "aria-controls": `${i2}-list`,
          onClick: () => d2 ? p2(false) : f2(),
          onKeyDown: (e3) => {
            ("ArrowDown" === e3.key || "ArrowUp" === e3.key) && (e3.preventDefault(), f2());
          },
          children: [
            (0, t.jsx)("span", { className: v().sortLabel, children: "Sort" }),
            (0, t.jsx)("span", { children: x2.label }),
            (0, t.jsx)(c.A, {
              size: 15,
              strokeWidth: 1.75,
              "aria-hidden": "true",
              className: v().chevron,
              "data-open": d2 || void 0
            })
          ]
        }),
        (0, t.jsx)(o.N, {
          children: d2 ? (0, t.jsx)(n.PY1.ul, {
            ref: b2,
            id: `${i2}-list`,
            role: "listbox",
            "aria-label": "Sort products",
            tabIndex: -1,
            className: v().sortMenu,
            "aria-activedescendant": `${i2}-${y[u2].id}`,
            onKeyDown: (e3) => {
              "ArrowDown" === e3.key ? (e3.preventDefault(), m2((e4) => Math.min(y.length - 1, e4 + 1))) : "ArrowUp" === e3.key ? (e3.preventDefault(), m2((e4) => Math.max(0, e4 - 1))) : "Home" === e3.key ? (e3.preventDefault(), m2(0)) : "End" === e3.key ? (e3.preventDefault(), m2(y.length - 1)) : "Enter" === e3.key || " " === e3.key ? (e3.preventDefault(), j2(y[u2].id)) : "Escape" === e3.key ? (e3.preventDefault(), p2(false), g2.current?.focus({ preventScroll: true })) : "Tab" === e3.key && p2(false);
            },
            initial: { opacity: 0, scale: l2 ? 1 : 0.96, y: l2 ? 0 : -4 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: {
              opacity: 0,
              scale: l2 ? 1 : 0.98,
              transition: { duration: _.T.duration.exit }
            },
            transition: {
              duration: _.T.duration.fast,
              ease: _.T.ease.enter
            },
            children: y.map(
              (a3, s2) => (0, t.jsxs)(
                "li",
                {
                  id: `${i2}-${a3.id}`,
                  role: "option",
                  "aria-selected": a3.id === e2,
                  "data-active": s2 === u2 || void 0,
                  className: v().sortOption,
                  onPointerMove: () => m2(s2),
                  onClick: () => j2(a3.id),
                  children: [
                    (0, t.jsx)("span", { children: a3.label }),
                    a3.id === e2 ? (0, t.jsx)(h.A, {
                      size: 15,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }) : null
                  ]
                },
                a3.id
              )
            )
          }) : null
        })
      ]
    });
  }
  function A({ min: e2, max: a2, value: i2, onChange: s2, format: l2 }) {
    let [r2, n2] = i2, o2 = Math.max(1, a2 - e2), d2 = (a3) => (a3 - e2) / o2 * 100;
    return (0, t.jsxs)("div", {
      className: v().price,
      children: [
        (0, t.jsxs)("div", {
          className: v().range,
          children: [
            (0, t.jsx)("div", {
              className: v().rangeTrack,
              children: (0, t.jsx)("span", {
                className: v().rangeFill,
                style: { left: `${d2(r2)}%`, right: `${100 - d2(n2)}%` }
              })
            }),
            (0, t.jsx)("input", {
              type: "range",
              min: e2,
              max: a2,
              step: 10,
              value: r2,
              "aria-label": "Minimum price",
              "aria-valuetext": l2(r2),
              onChange: (e3) => s2([Math.min(Number(e3.target.value), n2 - 10), n2])
            }),
            (0, t.jsx)("input", {
              type: "range",
              min: e2,
              max: a2,
              step: 10,
              value: n2,
              "aria-label": "Maximum price",
              "aria-valuetext": l2(n2),
              onChange: (e3) => s2([r2, Math.max(Number(e3.target.value), r2 + 10)])
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: v().priceValues,
          children: [
            (0, t.jsx)(S, { text: l2(r2) }),
            (0, t.jsx)(S, { text: l2(n2) })
          ]
        })
      ]
    });
  }
  function z({ title: e2, children: a2, action: i2 }) {
    return (0, t.jsxs)("fieldset", {
      className: v().group,
      children: [
        (0, t.jsxs)("legend", { className: v().groupTitle, children: [e2, i2] }),
        a2
      ]
    });
  }
  function M({
    products: e2 = j,
    colors: a2 = w,
    sizes: i2 = x,
    defaultSort: c2 = "featured",
    onAddToCart: b2,
    defaultCartCount: f2 = 0,
    currency: k2 = "USD",
    locale: y2 = "en-US",
    title: N2 = "Home goods",
    className: T2
  }) {
    let I = (0, s.useId)(), P = (0, r.I)() ?? false, D = (0, s.useMemo)(
      () => new Intl.NumberFormat(y2, {
        style: "currency",
        currency: k2,
        maximumFractionDigits: 0
      }),
      [y2, k2]
    ), q = (0, s.useMemo)(() => {
      let a3 = e2.map((e3) => e3.price);
      return a3.length ? [
        10 * Math.floor(Math.min(...a3) / 10),
        10 * Math.ceil(Math.max(...a3) / 10)
      ] : [0, 100];
    }, [e2]), [W, F] = (0, s.useState)(c2), [R, L] = (0, s.useState)(q), [B, O] = (0, s.useState)([]), [$, E] = (0, s.useState)([]), [H, K] = (0, s.useState)(false), [Y, V] = (0, s.useState)(f2), [G, J] = (0, s.useState)(null), [U, Z] = (0, s.useState)(null), [Q, X] = (0, s.useState)(""), [ee, ea] = (0, s.useState)(false), ei = (0, s.useRef)(null), et = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      if (!U) return;
      let e3 = window.setTimeout(() => Z(null), 1400);
      return () => window.clearTimeout(e3);
    }, [U]), (0, s.useEffect)(() => {
      ee && et.current?.focus({ preventScroll: true });
    }, [ee]);
    let es = (0, s.useMemo)(
      () => [
        ...e2.filter(
          (e3) => e3.price >= R[0] && e3.price <= R[1] && (!B.length || e3.colors.some((e4) => B.includes(e4))) && (!$.length || e3.sizes.some((e4) => $.includes(e4))) && (!H || e3.inStock)
        )
      ].sort(
        {
          featured: (e3, a3) => e3.rank - a3.rank,
          newest: (e3, a3) => a3.added - e3.added,
          "price-asc": (e3, a3) => e3.price - a3.price,
          "price-desc": (e3, a3) => a3.price - e3.price
        }[W]
      ),
      [e2, R, B, $, H, W]
    ), el = B.length + $.length + +!!H + +(R[0] !== q[0] || R[1] !== q[1]), er = () => {
      L(q), O([]), E([]), K(false);
    }, en = (e3, a3, i3) => a3(e3.includes(i3) ? e3.filter((e4) => e4 !== i3) : [...e3, i3]), eo = (0, s.useCallback)(() => {
      ea(false), ei.current?.focus({ preventScroll: true });
    }, []), ed = (e3, a3) => {
      V((e4) => e4 + 1), J(null), Z(e3.id), X(
        `${e3.name}${e3.sizes.length > 1 ? `, size ${a3},` : ""} added to bag`
      ), b2?.(e3, a3);
    }, ec = (0, t.jsxs)("div", {
      className: v().filterBody,
      children: [
        (0, t.jsx)(z, {
          title: "Price",
          children: (0, t.jsx)(A, {
            min: q[0],
            max: q[1],
            value: R,
            onChange: L,
            format: (e3) => D.format(e3)
          })
        }),
        (0, t.jsx)(z, {
          title: "Color",
          children: (0, t.jsx)("div", {
            className: v().swatches,
            children: a2.map((e3) => {
              let a3 = B.includes(e3.id);
              return (0, t.jsxs)(
                "button",
                {
                  type: "button",
                  className: v().swatch,
                  "aria-pressed": a3,
                  "aria-label": e3.name,
                  title: e3.name,
                  onClick: () => en(B, O, e3.id),
                  children: [
                    (0, t.jsx)("span", {
                      className: v().swatchFill,
                      style: { background: e3.swatch }
                    }),
                    (0, t.jsx)("span", {
                      className: v().swatchCheck,
                      "data-on": a3 || void 0,
                      "data-light": (function(e4) {
                        let a4 = e4.replace("#", ""), [i3, t2, s2] = [0, 2, 4].map(
                          (e5) => parseInt(a4.slice(e5, e5 + 2), 16)
                        );
                        return (299 * i3 + 587 * t2 + 114 * s2) / 1e3 > 150;
                      })(e3.swatch) || void 0,
                      children: (0, t.jsx)(h.A, {
                        size: 14,
                        strokeWidth: 2.25,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                },
                e3.id
              );
            })
          })
        }),
        (0, t.jsx)(z, {
          title: "Size",
          children: (0, t.jsx)("div", {
            className: v().sizes,
            children: i2.map(
              (e3) => (0, t.jsx)(
                "button",
                {
                  type: "button",
                  className: v().sizeChip,
                  "aria-pressed": $.includes(e3),
                  onClick: () => en($, E, e3),
                  children: e3
                },
                e3
              )
            )
          })
        }),
        (0, t.jsxs)("label", {
          className: v().switchRow,
          children: [
            (0, t.jsx)("span", { children: "In stock only" }),
            (0, t.jsx)("button", {
              type: "button",
              role: "switch",
              "aria-checked": H,
              className: v().switch,
              onClick: () => K((e3) => !e3),
              children: (0, t.jsx)("span", { className: v().thumb })
            })
          ]
        }),
        (0, t.jsx)("button", {
          type: "button",
          className: v().clearAll,
          onClick: er,
          disabled: !el,
          children: "Clear filters"
        })
      ]
    });
    return (0, t.jsxs)("div", {
      className: ((...e3) => e3.filter(Boolean).join(" "))(v().root, T2),
      children: [
        (0, t.jsxs)("div", {
          className: v().frame,
          children: [
            (0, t.jsxs)("header", {
              className: v().top,
              children: [
                (0, t.jsxs)("div", {
                  className: v().heading,
                  children: [
                    (0, t.jsx)("h2", { children: N2 }),
                    (0, t.jsxs)("span", {
                      className: v().count,
                      children: [
                        (0, t.jsx)(S, { text: String(es.length) }),
                        " items"
                      ]
                    })
                  ]
                }),
                (0, t.jsxs)("div", {
                  className: v().tools,
                  children: [
                    (0, t.jsxs)("button", {
                      ref: ei,
                      type: "button",
                      className: v().filterButton,
                      onClick: () => ea(true),
                      "aria-expanded": ee,
                      children: [
                        (0, t.jsx)(p.A, {
                          size: 15,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Filters",
                        el ? (0, t.jsx)("span", {
                          className: v().badge,
                          children: el
                        }) : null
                      ]
                    }),
                    (0, t.jsx)(C, { value: W, onChange: F }),
                    (0, t.jsxs)("span", {
                      className: v().bag,
                      "aria-label": `${Y} items in bag`,
                      role: "img",
                      children: [
                        (0, t.jsx)(
                          n.PY1.span,
                          {
                            className: v().bagIcon,
                            initial: !P && Y !== f2 && { scale: 1.18, rotate: -8 },
                            animate: { scale: 1, rotate: 0 },
                            transition: _.T.spring.snappy,
                            children: (0, t.jsx)(u.A, {
                              size: 18,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          },
                          Y
                        ),
                        (0, t.jsx)("span", {
                          className: v().bagCount,
                          "aria-hidden": "true",
                          children: (0, t.jsx)(S, { text: String(Y) })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: v().body,
              children: [
                (0, t.jsx)("aside", {
                  className: v().sidebar,
                  "aria-label": "Filters",
                  children: ec
                }),
                (0, t.jsx)("div", {
                  className: v().results,
                  children: es.length ? (0, t.jsx)(d.o, {
                    id: `${I}-grid`,
                    children: (0, t.jsx)("ul", {
                      className: v().grid,
                      children: (0, t.jsx)(o.N, {
                        mode: "popLayout",
                        initial: false,
                        children: es.map((e3) => {
                          let i3 = G === e3.id, s2 = U === e3.id;
                          return (0, t.jsxs)(
                            n.PY1.li,
                            {
                              className: v().card,
                              layout: !P && "position",
                              "data-active": i3 || s2 || void 0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: {
                                opacity: 0,
                                transition: { duration: _.T.duration.exit }
                              },
                              transition: P ? { duration: 0.12 } : _.T.spring.smooth,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: v().media,
                                  children: [
                                    (0, t.jsx)(l.default, {
                                      className: v().image,
                                      src: e3.image,
                                      alt: e3.alt,
                                      fill: true,
                                      sizes: "(max-width: 640px) 50vw, 260px"
                                    }),
                                    e3.hoverImage ? (0, t.jsx)(l.default, {
                                      className: v().hoverImage,
                                      src: e3.hoverImage,
                                      alt: "",
                                      fill: true,
                                      sizes: "(max-width: 640px) 50vw, 260px"
                                    }) : null,
                                    (0, t.jsx)("div", {
                                      className: v().quick,
                                      children: (0, t.jsx)(o.N, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: s2 ? (0, t.jsxs)(
                                          n.PY1.span,
                                          {
                                            className: v().quickDone,
                                            initial: {
                                              opacity: 0,
                                              filter: "blur(2px)",
                                              y: 4 * !P
                                            },
                                            animate: {
                                              opacity: 1,
                                              filter: "blur(0px)",
                                              y: 0
                                            },
                                            exit: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            transition: {
                                              duration: _.T.duration.standard,
                                              ease: _.T.ease.enter
                                            },
                                            children: [
                                              (0, t.jsx)(h.A, {
                                                size: 15,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              }),
                                              "Added"
                                            ]
                                          },
                                          "done"
                                        ) : i3 ? (0, t.jsxs)(
                                          n.PY1.div,
                                          {
                                            className: v().quickSizes,
                                            role: "group",
                                            "aria-label": `Choose a size for ${e3.name}`,
                                            initial: {
                                              opacity: 0,
                                              filter: "blur(2px)",
                                              y: 4 * !P
                                            },
                                            animate: {
                                              opacity: 1,
                                              filter: "blur(0px)",
                                              y: 0
                                            },
                                            exit: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            transition: {
                                              duration: _.T.duration.standard,
                                              ease: _.T.ease.enter
                                            },
                                            onKeyDown: (e4) => {
                                              "Escape" === e4.key && (e4.stopPropagation(), J(null));
                                            },
                                            children: [
                                              e3.sizes.map(
                                                (a3, i4) => (0, t.jsx)(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    className: v().quickSize,
                                                    onClick: () => ed(e3, a3),
                                                    ref: 0 === i4 ? (e4) => e4?.focus({
                                                      preventScroll: true
                                                    }) : void 0,
                                                    children: a3
                                                  },
                                                  a3
                                                )
                                              ),
                                              (0, t.jsx)("button", {
                                                type: "button",
                                                className: v().quickClose,
                                                onClick: () => J(null),
                                                "aria-label": "Close sizes",
                                                children: (0, t.jsx)(
                                                  m.A,
                                                  {
                                                    size: 14,
                                                    strokeWidth: 1.75
                                                  }
                                                )
                                              })
                                            ]
                                          },
                                          "sizes"
                                        ) : (0, t.jsx)(
                                          n.PY1.button,
                                          {
                                            type: "button",
                                            className: v().quickAdd,
                                            disabled: !e3.inStock,
                                            onClick: () => {
                                              1 === e3.sizes.length ? ed(e3, e3.sizes[0]) : J(
                                                (a3) => a3 === e3.id ? null : e3.id
                                              );
                                            },
                                            "aria-label": e3.inStock ? `Quick add ${e3.name}` : `${e3.name} is sold out`,
                                            initial: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            animate: {
                                              opacity: 1,
                                              filter: "blur(0px)"
                                            },
                                            exit: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            transition: {
                                              duration: _.T.duration.fast
                                            },
                                            children: e3.inStock ? (0, t.jsxs)(
                                              t.Fragment,
                                              {
                                                children: [
                                                  (0, t.jsx)(
                                                    g.A,
                                                    {
                                                      size: 15,
                                                      strokeWidth: 1.75,
                                                      "aria-hidden": "true"
                                                    }
                                                  ),
                                                  "Quick add"
                                                ]
                                              }
                                            ) : "Sold out"
                                          },
                                          "add"
                                        )
                                      })
                                    })
                                  ]
                                }),
                                (0, t.jsxs)("div", {
                                  className: v().info,
                                  children: [
                                    (0, t.jsx)("h3", {
                                      className: v().name,
                                      title: e3.name,
                                      children: e3.name
                                    }),
                                    (0, t.jsx)("p", {
                                      className: v().detail,
                                      children: e3.detail
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: v().meta,
                                      children: [
                                        (0, t.jsxs)("span", {
                                          className: v().priceTag,
                                          children: [
                                            e3.compareAt ? (0, t.jsx)("s", {
                                              className: v().compare,
                                              children: D.format(
                                                e3.compareAt
                                              )
                                            }) : null,
                                            (0, t.jsx)("span", {
                                              "data-sale": !!e3.compareAt || void 0,
                                              children: D.format(e3.price)
                                            })
                                          ]
                                        }),
                                        (0, t.jsxs)("span", {
                                          className: v().aside,
                                          children: [
                                            !e3.inStock || e3.badge ? (0, t.jsx)("span", {
                                              className: v().status,
                                              children: e3.inStock ? e3.badge : "Sold out"
                                            }) : null,
                                            (0, t.jsx)("span", {
                                              className: v().dots,
                                              role: "img",
                                              "aria-label": `Colors: ${e3.colors.map((e4) => a2.find((a3) => a3.id === e4)?.name ?? e4).join(", ")}`,
                                              children: e3.colors.map(
                                                (e4) => (0, t.jsx)(
                                                  "span",
                                                  {
                                                    className: v().dot,
                                                    style: {
                                                      background: a2.find(
                                                        (a3) => a3.id === e4
                                                      )?.swatch
                                                    }
                                                  },
                                                  e4
                                                )
                                              )
                                            })
                                          ]
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            },
                            e3.id
                          );
                        })
                      })
                    })
                  }) : (0, t.jsxs)("div", {
                    className: v().empty,
                    children: [
                      (0, t.jsx)("p", {
                        children: "No products match these filters"
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className: v().clearAll,
                        onClick: er,
                        children: "Clear filters"
                      })
                    ]
                  })
                })
              ]
            }),
            (0, t.jsx)(o.N, {
              children: ee ? (0, t.jsxs)(
                n.PY1.div,
                {
                  className: v().sheetLayer,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: _.T.duration.exit }
                  },
                  transition: { duration: _.T.duration.fast },
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      className: v().scrim,
                      "aria-label": "Close filters",
                      tabIndex: -1,
                      onClick: eo
                    }),
                    (0, t.jsxs)(n.PY1.div, {
                      ref: et,
                      className: v().sheet,
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": "Filters",
                      tabIndex: -1,
                      onKeyDown: (e3) => {
                        "Escape" === e3.key && eo();
                      },
                      initial: { x: P ? 0 : "-100%" },
                      animate: { x: 0 },
                      exit: {
                        x: P ? 0 : "-100%",
                        transition: {
                          duration: _.T.duration.exit,
                          ease: _.T.ease.exit
                        }
                      },
                      transition: P ? { duration: 0 } : _.T.spring.smooth,
                      children: [
                        (0, t.jsxs)("div", {
                          className: v().sheetHead,
                          children: [
                            (0, t.jsx)("h3", { children: "Filters" }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: v().sheetClose,
                              onClick: eo,
                              "aria-label": "Close filters",
                              children: (0, t.jsx)(m.A, {
                                size: 16,
                                strokeWidth: 1.75
                              })
                            })
                          ]
                        }),
                        ec,
                        (0, t.jsxs)("button", {
                          type: "button",
                          className: v().showResults,
                          onClick: eo,
                          children: [
                            "Show ",
                            es.length,
                            " ",
                            1 === es.length ? "item" : "items"
                          ]
                        })
                      ]
                    })
                  ]
                },
                "sheet"
              ) : null
            })
          ]
        }),
        (0, t.jsx)("p", {
          className: v().srOnly,
          role: "status",
          "aria-live": "polite",
          children: Q
        })
      ]
    });
  }
  let T = M;
}

__m(__module,__exports,__require);
});
A.reg(80846, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "sliders-horizontal",
    size: 24,
    node: [
      ["path", { d: "M10 5H3", key: "1qgfaw" }],
      ["path", { d: "M12 19H3", key: "yhmn1j" }],
      ["path", { d: "M14 3v4", key: "1sua03" }],
      ["path", { d: "M16 17v4", key: "1q0r14" }],
      ["path", { d: "M21 12h-9", key: "1o4lsq" }],
      ["path", { d: "M21 19h-5", key: "1rlt1p" }],
      ["path", { d: "M21 5h-7", key: "1oszz2" }],
      ["path", { d: "M8 10v4", key: "tgpxqk" }],
      ["path", { d: "M8 12H3", key: "a7s4jb" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.cssFor("product-listing", [21960]);
A.item("product-listing", {entry:72926, export:"ProductListing", kind:"block", tier:"pro", unresolved:[]});
})();