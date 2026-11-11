/* ai-inline-edit (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(15330, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => a });
  var n = r(51811);
  let i = {
    name: "undo-2",
    size: 24,
    node: [
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
      [
        "path",
        {
          d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
          key: "f3b9sd"
        }
      ]
    ]
  };
  i.node;
  let a = (0, n.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(21759, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "corner-down-left",
    size: 24,
    node: [
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
      ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(47145, ".stage{display:grid;min-width:0;min-height:1lh}\n.stage>*{grid-area:1/1;min-width:0}\n.placeholder{align-self:start;font-size:.875em;line-height:inherit}\n.shimmer{background:linear-gradient(90deg,var(--text-muted) 0,var(--text-muted) 38%,var(--foreground) 50%,var(--text-muted) 62%,var(--text-muted) 100%) 0 0 /250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer 2.2s linear infinite}\n@media (prefers-reduced-motion:reduce){.enter,.itemEnter::marker,.shimmer,.waiting>span{animation:none}\n.shimmer{background:none;color:var(--text-muted)}\n.statusStatic{color:var(--text-muted)}\n.enter{animation:develop .42s cubic-bezier(.2,.7,.3,1) backwards}\n.markdown{display:grid;gap:.85em;min-width:0;overflow-wrap:break-word}\n.markdown>*,.plain>*{min-width:0}\n.plain{display:grid;gap:.6em;min-width:0;overflow-wrap:break-word}\n.heading,.paragraph{margin:0}\n.heading{margin-top:.45em;font-size:1em;font-weight:500}\n.strong{font-weight:500}\n.list{display:grid;gap:.45em;margin:0;padding-left:1.25em;list-style:disc outside}\nol.list{list-style-type:decimal}\n.list li{padding-left:.2em}\n.list li::marker{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.itemEnter::marker{animation:marker .42s cubic-bezier(.2,.7,.3,1) backwards}\n.inlineCode{padding:.08em .36em;border:1px solid var(--border-subtle);border-radius:6px;background:var(--surface-muted);font-family:ui-monospace,SF Mono,Menlo,monospace;font-size:.84em;letter-spacing:0}\n.cite{white-space:nowrap}\n.codeBlock{min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface-muted)}\n.codeHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:4px 4px 4px 14px;border-bottom:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs)}\n.codeCopy{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);cursor:pointer}\n@media (hover:hover) and (pointer:fine){.codeCopy:hover{background:color-mix(in oklab,var(--foreground) 6%,transparent);color:var(--foreground)}\n.pre{margin:0;padding:12px 14px 14px;overflow-x:auto;font-family:ui-monospace,SF Mono,Menlo,monospace;font-size:.8125rem;line-height:1.6;letter-spacing:0}\n.codeLine{display:block;white-space:pre}\n.waiting{position:relative;display:inline-block;width:0;height:1em;vertical-align:baseline}\n.waiting>span{position:absolute;bottom:.18em;left:.36em;width:.4em;height:.4em;border-radius:50%;background:var(--text-muted);animation:breathe 1.3s ease-in-out infinite}\n.iconSlot{display:inline-grid;place-items:center;width:14px;height:14px}\n.iconSlot>span{display:grid;grid-area:1/1;place-items:center}\n.iconSlot svg{width:14px;height:14px;stroke-width:1.75}\n.iconSlot>[data-state=copied]{color:var(--success)}\n.iconSlot>[data-state=failed]{color:var(--danger)}\n.swap{position:relative;display:inline-grid;grid-template-columns:minmax(0,1fr);justify-items:center}\n.swapText{grid-area:1/1;white-space:nowrap}\n.swapMeasure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}", {"stage":"stage","placeholder":"placeholder","shimmer":"shimmer","enter":"enter","itemEnter":"itemEnter","waiting":"waiting","statusStatic":"statusStatic","markdown":"markdown","plain":"plain","heading":"heading","paragraph":"paragraph","strong":"strong","list":"list","inlineCode":"inlineCode","cite":"cite","codeBlock":"codeBlock","codeHeader":"codeHeader","codeCopy":"codeCopy","pre":"pre","codeLine":"codeLine","iconSlot":"iconSlot","swap":"swap","swapText":"swapText","swapMeasure":"swapMeasure"});
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
A.reg(60976, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => a });
  var n = r(51811);
  let i = {
    name: "redo-2",
    size: 24,
    node: [
      ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
      [
        "path",
        {
          d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
          key: "6uklza"
        }
      ]
    ]
  };
  i.node;
  let a = (0, n.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(61491, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => c });
  var n = r(51811);
  let a = {
    name: "wand-sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
          key: "ul74o6"
        }
      ],
      ["path", { d: "m14 7 3 3", key: "1r5n42" }],
      ["path", { d: "M5 6v4", key: "ilb8ba" }],
      ["path", { d: "M19 14v4", key: "blhpug" }],
      ["path", { d: "M10 2v2", key: "7u0qdc" }],
      ["path", { d: "M7 8H3", key: "zfb6yr" }],
      ["path", { d: "M21 16h-4", key: "1cnmox" }],
      ["path", { d: "M11 3H9", key: "1obp7u" }]
    ],
    aliases: ["wand-2"]
  };
  a.node;
  let c = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(65408, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => o });
  var s = t(51811);
  let n = {
    name: "minimize-2",
    size: 24,
    node: [
      ["path", { d: "m14 10 7-7", key: "oa77jy" }],
      ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
      ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
      ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
    ]
  };
  n.node;
  let o = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(76100, ".root{--hover:color-mix(in oklab,var(--foreground) 6%,transparent);--ins:color-mix(in oklab,var(--success) 16%,transparent);--ins-line:color-mix(in oklab,var(--success) 55%,transparent);--del:var(--danger);position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:1120px;height:680px;min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);container:editor/inline-size}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.tabular{font-variant-numeric:tabular-nums}\n.muted{color:var(--text-muted)}\n.spin{animation:spin .9s linear infinite}\n@media (prefers-reduced-motion:reduce){.delEnter,.ghostWord,.insEnter,.resolved,.shimmer,.spin{animation:none}\n.shimmer{background:linear-gradient(90deg,var(--text-secondary) 0,var(--text-secondary) 38%,var(--foreground) 50%,var(--text-secondary) 62%,var(--text-secondary) 100%) 0 0 /250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer 2.2s linear infinite}\n.shimmer{background:none;color:var(--text-secondary)}\n.swap{display:inline-grid}\n.swap>span{grid-area:1/1;opacity:0;transition:opacity var(--duration-standard) var(--ease-standard)}\n.swap>span[data-on]{opacity:1}\n.kbd{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 4px;border:1px solid var(--border);border-radius:5px;background:var(--surface);color:var(--text-muted);font-family:inherit;font-size:var(--text-xs);line-height:1;white-space:nowrap}\n.barButton .kbd{margin-left:2px}\n.primary .kbd{border-color:color-mix(in oklab,var(--accent-foreground) 25%,transparent);background:transparent;color:color-mix(in oklab,var(--accent-foreground) 70%,transparent)}\n.header{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;height:60px;padding:0 14px 0 18px;border-bottom:1px solid var(--border-subtle)}\n.header{padding:0 8px 0 14px}\n.docMeta{display:flex;align-items:center;gap:10px;min-width:0}\n.avatar{flex:none;width:28px;height:28px;border-radius:50%;object-fit:cover}\n.docText{display:grid;min-width:0;line-height:1.3}\n.docTitle{overflow:hidden;font-size:var(--text-sm);font-weight:400;text-overflow:ellipsis;white-space:nowrap}\n.docSub{display:inline-flex;align-items:center;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.dot{width:3px;height:3px;margin:0 7px;border-radius:50%;background:currentColor;opacity:.5}\n.headerActions{display:flex;flex:none;gap:2px}\n.iconButton{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:11px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.iconButton svg{width:17px;height:17px;stroke-width:1.75}\n.iconButton:active:not(:disabled){transform:scale(.94)}\n.iconButton:disabled{opacity:.35;cursor:default}\n@media (hover:hover) and (pointer:fine){.iconButton:hover:not(:disabled){background:var(--hover);color:var(--foreground)}\n.scroller{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable;scrollbar-width:thin}\n.page{position:relative;width:100%;max-width:700px;margin:0 auto;padding:44px 32px 160px}\n.page ::highlight(ai-accepted){background-color:var(--ins)}\n@container editor (max-width: 560px){.page{padding:28px 18px 160px}\n.title{margin:0 0 22px;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:400;line-height:var(--leading-display);letter-spacing:var(--tracking-display);text-wrap:balance}\n.title{font-size:var(--text-2xl)}\n.para{position:relative;margin:0 0 1em;padding:0;color:var(--foreground);font-size:var(--text-base);font-weight:400;line-height:1.72;white-space:pre-wrap;overflow-wrap:break-word;caret-color:var(--foreground);cursor:text}\n.para ::selection,.para::selection{background:var(--accent-subtle)}\n.para:empty:before{content:attr(data-placeholder);color:var(--text-muted);pointer-events:none}\n.sessionPara{cursor:default}\n.region{position:relative}\n.region[data-phase=error] .selected{background:color-mix(in oklab,var(--danger) 12%,transparent);box-shadow:none}\n.selected{font-weight:inherit;border-radius:3px;background:var(--accent-subtle);color:inherit;box-shadow:0 0 0 2px var(--accent-subtle);-webkit-box-decoration-break:clone;box-decoration-break:clone}\n.ins{border-radius:3px;background:var(--ins);color:inherit;text-decoration:none;-webkit-box-decoration-break:clone;box-decoration-break:clone}\n.insEnter{animation:develop .42s var(--ease-standard) backwards}\n.del{color:var(--text-muted);text-decoration:none;background:linear-gradient(var(--del),var(--del)) no-repeat 0 58% /100% 1px;-webkit-box-decoration-break:clone;box-decoration-break:clone}\n.delEnter{animation:strike .36s var(--ease-standard) backwards}\n.pending{color:var(--text-muted);transition:color var(--duration-standard) var(--ease-standard)}\n.hunk{position:relative;border-radius:4px;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard);-webkit-box-decoration-break:clone;box-decoration-break:clone}\n@media (hover:hover) and (pointer:fine){.hunk:hover{background:var(--hover)}\n.hunk:focus .hunkBar,.hunk:focus-within .hunkBar,.hunk:hover .hunkBar{opacity:1;transform:none;pointer-events:auto}\n.hunkBar{position:absolute;bottom:calc(100% + 4px);left:-2px;z-index:3;display:inline-flex;gap:2px;padding:3px;border:1px solid var(--border);border-radius:10px;background:var(--surface-raised);box-shadow:var(--shadow-raised);opacity:0;transform:translateY(3px);pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard);user-select:none}\n.hunkBar{transition:none}\n.hunkButton{display:grid;place-items:center;width:26px;height:24px;padding:0;border:0;border-radius:7px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.hunkButton svg{width:14px;height:14px;stroke-width:2}\n.hunkButton:active{transform:scale(.9)}\n.hunkButton:first-child:hover{background:var(--ins);color:var(--success)}\n.hunkButton:last-child:hover{background:var(--hover);color:var(--foreground)}\n.resolved{border-radius:3px;animation:settle .9s var(--ease-standard)}\n.resolved[data-choice=accepted]{animation-name:settleIn}\n.ghost{color:var(--text-muted);pointer-events:none;user-select:none}\n.ghostWord{animation:develop .36s var(--ease-standard) backwards}\n.bubble{position:absolute;z-index:4;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 6px 0 10px;border:1px solid var(--border);border-radius:11px;background:var(--surface-raised);box-shadow:var(--shadow-raised);color:var(--foreground);font:inherit;font-size:var(--text-xs);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.bubble>svg{width:14px;height:14px;stroke-width:1.75}\n@media (hover:hover) and (pointer:fine){.bubble:hover{background:var(--surface-muted)}\n.layer{position:absolute;z-index:5;overflow:hidden;border:1px solid var(--border);background:var(--surface-raised);box-shadow:var(--shadow-floating)}\n.layerSize{width:max-content;max-width:min(340px,var(--layer-room,100%))}\n.layerSize[data-mode=prompt]{width:min(320px,var(--layer-room,100%))}\n.layerBody{min-width:0}\n.prompt{display:grid}\n.promptRow{display:flex;align-items:center;gap:8px;height:46px;padding:0 10px 0 13px;border-bottom:1px solid var(--border-subtle)}\n.promptIcon{flex:none;width:16px;height:16px;stroke-width:1.75;color:var(--accent)}\n.promptInput{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm)}\n.promptInput::placeholder{color:var(--text-muted)}\n.menu{display:grid;margin:0;padding:5px;list-style:none}\n.menuItem{position:relative;display:flex;align-items:center;gap:10px;height:34px;padding:0 9px;border-radius:10px;color:var(--text-secondary);font-size:var(--text-sm);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.menuItem[data-active]{color:var(--foreground)}\n.menuHighlight{position:absolute;inset:0;z-index:0;border-radius:10px;background:var(--hover)}\n.menuEnter,.menuIcon{position:relative;flex:none;width:15px;height:15px;stroke-width:1.75}\n.menuEnter{margin-left:auto;color:var(--text-muted)}\n.menuLabel{position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.menuEmpty{padding:8px 10px;color:var(--text-muted);font-size:var(--text-sm)}\n.promptHint{display:flex;flex-wrap:wrap;align-items:center;gap:3px;margin:0;padding:8px 12px 10px;border-top:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs);line-height:1.5}\n.bar{display:flex;align-items:center;gap:4px;min-height:42px;padding:5px 5px 5px 12px;font-size:var(--text-sm);white-space:nowrap}\n.bar{flex-wrap:wrap;white-space:normal}\n.barIcon{flex:none;width:15px;height:15px;margin-right:4px;stroke-width:1.75;color:var(--text-muted)}\n.ok{color:var(--success)}\n.barLabel{margin-right:6px;color:var(--text-secondary)}\n.barButton{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 10px;border:0;border-radius:9px;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.barButton svg{width:14px;height:14px;stroke-width:1.75}\n.barButton:active{transform:scale(.96)}\n@media (hover:hover) and (pointer:fine){.barButton:hover{background:var(--hover);color:var(--foreground)}\n.primary{background:var(--accent);color:var(--accent-foreground)}\n@media (hover:hover) and (pointer:fine){.primary:hover{background:color-mix(in oklab,var(--accent) 88%,var(--accent-foreground));color:var(--accent-foreground)}\n.stopGlyph{width:12px!important;height:12px!important;fill:currentColor;stroke-width:0!important;transform:scale(.75)}\n.footer{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;height:40px;padding:0 18px;border-top:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs)}\n.footer{padding:0 14px}\n.hint{display:inline-flex;flex-wrap:nowrap;align-items:center;gap:4px;min-width:0;overflow:hidden;white-space:nowrap}\n.count{flex:none}", {"root":"root","tabular":"tabular","muted":"muted","spin":"spin","delEnter":"delEnter","ghostWord":"ghostWord","insEnter":"insEnter","resolved":"resolved","shimmer":"shimmer","swap":"swap","kbd":"kbd","barButton":"barButton","primary":"primary","header":"header","docMeta":"docMeta","avatar":"avatar","docText":"docText","docTitle":"docTitle","docSub":"docSub","dot":"dot","headerActions":"headerActions","iconButton":"iconButton","scroller":"scroller","page":"page","title":"title","para":"para","sessionPara":"sessionPara","region":"region","selected":"selected","ins":"ins","del":"del","pending":"pending","hunk":"hunk","hunkBar":"hunkBar","hunkButton":"hunkButton","ghost":"ghost","bubble":"bubble","layer":"layer","layerSize":"layerSize","layerBody":"layerBody","prompt":"prompt","promptRow":"promptRow","promptIcon":"promptIcon","promptInput":"promptInput","menu":"menu","menuItem":"menuItem","menuHighlight":"menuHighlight","menuEnter":"menuEnter","menuIcon":"menuIcon","menuLabel":"menuLabel","menuEmpty":"menuEmpty","promptHint":"promptHint","bar":"bar","barIcon":"barIcon","ok":"ok","barLabel":"barLabel","stopGlyph":"stopGlyph","footer":"footer","hint":"hint","count":"count"});
A.reg(86272, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr"
        }
      ],
      ["path", { d: "M20 2v4", key: "1rf3ol" }],
      ["path", { d: "M22 4h-4", key: "gwowj6" }],
      ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
    ],
    aliases: ["stars"]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(96915, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => i });
  var n = r(51811);
  let a = {
    name: "face-slightly-smiling",
    size: 24,
    node: [
      ["path", { d: "M15 10V9", key: "4dkmfx" }],
      ["path", { d: "M16.472 15a6 6 0 01-8.943 0", key: "7qomzy" }],
      ["path", { d: "M9 10V9", key: "1lazqi" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ],
    aliases: ["smile"]
  };
  a.node;
  let i = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(99440, function(__module,__exports,__require){
"use strict";
const __m = (e, t, n) => {
  "use strict";
  n.r(t), n.d(t, { AiInlineEdit: () => ea, default: () => er });
  var a = n(95155), r = n(12115), i = n(25354), l = n(28245), s = n(92171), o = n(80642), c = n(65408), d = n(61491), u = n(96915), h = n(52957), p = n(51811);
  let m = {
    name: "spell-check",
    size: 24,
    node: [
      ["path", { d: "m20 15-5.5 5.5L12 18", key: "6ytzne" }],
      ["path", { d: "m4 16 6-12 5.115 10.23", key: "fyukjg" }],
      ["path", { d: "M6 12h8", key: "1hdiqa" }]
    ]
  };
  m.node;
  let g = (0, p.A)(m);
  var f = n(64577), b = n(9005), y = n(21759), _ = n(86272), x = n(15330), w = n(60976), v = n(92571), k = n(40852), j = n(7770), C = n(18310);
  n(47145), n(55665);
  let N = () => () => {
  };
  [...j.T.ease.standard];
  let A = { name: "Chloe Nguyen", photo: "media/people/chloe-nguyen.svg" }, E = {
    title: "Offline mode launch plan",
    paragraphs: [
      "We are going to be launching offline mode for the Field app on October 14. This is a really big release for us, and it basically touches every single part of the sync engine, so we want to be very careful about how we actually roll it out to customers.",
      "Crews in rural areas has been asking for this for over a year. Right now, if a technician loses signal in the middle of an inspection, the form just stops saving and they have to start over when they get back into coverage, which is honestly a really frustrating experience.",
      "The rollout happens in three stages. Internal teams and 20 pilot customers get access on October 14. We expand to every Business plan on October 28 if the sync error rate stays under 0.5 percent, and offline mode becomes the default for everyone in November.",
      "Support should expect questions about conflicts, where two people edits the same record while offline. The app keeps both versions and asks the last person to sync which one to keep, so nothing is lost silently.",
      "Next week we will"
    ]
  }, S = [
    {
      id: "shorten",
      label: "Shorten",
      instruction: "Make this shorter without losing facts"
    },
    {
      id: "clearer",
      label: "Make clearer",
      instruction: "Rewrite this so it is easier to follow"
    },
    {
      id: "friendly",
      label: "Friendlier tone",
      instruction: "Make the tone warmer and more casual"
    },
    {
      id: "formal",
      label: "More formal",
      instruction: "Make the tone more formal"
    },
    {
      id: "grammar",
      label: "Fix grammar",
      instruction: "Fix spelling and grammar only"
    }
  ], M = {
    "We are going to be launching offline mode for the Field app on October 14.": {
      shorten: "Offline mode for the Field app launches October 14.",
      clearer: "We launch offline mode for the Field app on October 14.",
      friendly: "Offline mode lands in the Field app on October 14!",
      formal: "Offline mode for the Field app will launch on October 14."
    },
    "This is a really big release for us, and it basically touches every single part of the sync engine, so we want to be very careful about how we actually roll it out to customers.": {
      shorten: "It changes every part of the sync engine, so we will roll it out carefully.",
      clearer: "The release changes every part of the sync engine, so we will roll it out to customers in careful stages.",
      friendly: "It's a big one: it touches every part of the sync engine, so we're rolling it out carefully.",
      formal: "This is a significant release that affects every part of the sync engine, so we will roll it out to customers with care."
    },
    "Right now, if a technician loses signal in the middle of an inspection, the form just stops saving and they have to start over when they get back into coverage, which is honestly a really frustrating experience.": {
      shorten: "Today, a technician who loses signal mid inspection loses the form and has to start over.",
      clearer: "Today, when a technician loses signal during an inspection, the form stops saving. They have to start again once they are back in coverage.",
      friendly: "Right now, if a technician loses signal mid inspection, the form stops saving and they have to start over. That's no fun.",
      formal: "At present, if a technician loses signal during an inspection, the form stops saving and must be restarted once coverage returns."
    }
  }, T = {
    shorten: [
      [/\bgoing to be (\w+ing)\b/gi, "$1"],
      [/\bin the middle of\b/gi, "during"],
      [/\bevery single\b/gi, "every"],
      [/\bfor over a year\b/gi, "for a year"],
      [/,? which is honestly a really frustrating experience/gi, ""],
      [/\b(really|basically|actually|honestly|just|very) /gi, ""],
      [/\bin order to\b/gi, "to"],
      [/\bat this point in time\b/gi, "now"],
      [
        /\bif the sync error rate stays under\b/gi,
        "if sync errors stay under"
      ],
      [/\bshould expect questions about\b/gi, "will get questions about"],
      [/, so nothing is lost silently/gi, ""]
    ],
    clearer: [
      [/\bget back into coverage\b/gi, "regain signal"],
      [/\btouches every single part of\b/gi, "changes all of"],
      [/\bbasically /gi, ""],
      [/\bconflicts, where\b/gi, "sync conflicts, which happen when"],
      [/\bthe last person to sync\b/gi, "whoever syncs last"],
      [/\bthe default\b/gi, "on by default"],
      [/\bThe rollout happens\b/g, "We will roll it out"]
    ],
    friendly: [
      [/\bWe are\b/g, "We're"],
      [/\bwe are\b/g, "we're"],
      [/\bwe will\b/gi, "we'll"],
      [/\bIt is\b/g, "It's"],
      [/\bit is\b/g, "it's"],
      [/\bdo not\b/gi, "don't"],
      [/\bSupport should expect\b/g, "Support will probably hear"],
      [/\bso nothing is lost silently\b/gi, "so nobody loses their work"],
      [/\bThe app keeps\b/g, "The app hangs on to"]
    ],
    formal: [
      [/\bWe're\b/g, "We are"],
      [/\bwe'll\b/gi, "we will"],
      [/\bit's\b/gi, "it is"],
      [/\bdon't\b/gi, "do not"],
      [/\b(really|basically|honestly|just) /gi, ""],
      [/\bhas been asking for\b/gi, "have requested"],
      [/\bhave been asking for\b/gi, "have requested"],
      [/\bget access\b/gi, "receive access"],
      [/\bexpect questions about\b/gi, "anticipate questions regarding"]
    ],
    grammar: [
      [/\bCrews in rural areas has\b/g, "Crews in rural areas have"],
      [/\btwo people edits\b/g, "two people edit"],
      [/\s{2,}/g, " "]
    ]
  }, R = (e2, t2) => new Promise((n2, a2) => {
    if (t2.aborted) return a2(t2.reason);
    let r2 = window.setTimeout(() => {
      t2.removeEventListener("abort", i2), n2();
    }, e2), i2 = () => {
      window.clearTimeout(r2), a2(t2.reason);
    };
    t2.addEventListener("abort", i2, { once: true });
  });
  async function* I(e2, t2) {
    let n2, a2, r2 = (n2 = (function(e3, t3) {
      if (e3 && T[e3]) return e3;
      let n3 = t3.toLowerCase();
      return /short|concise|trim|tight/.test(n3) ? "shorten" : /formal|professional/.test(n3) ? "formal" : /friend|casual|warm/.test(n3) ? "friendly" : /grammar|spell|typo|fix/.test(n3) ? "grammar" : "clearer";
    })(e2.action, e2.instruction), a2 = (e2.text.match(/[^.!?]+[.!?]+["”)]?\s*|[^.!?]+$/g) ?? [e2.text]).map((e3) => {
      let t3 = e3.trim(), a3 = e3.slice(e3.trimEnd().length), r3 = M[t3]?.[n2];
      return r3 ? r3 + a3 : T[n2].reduce((e4, [t4, n3]) => e4.replace(t4, n3), e3);
    }).join(""), "grammar" !== n2 && (a2 = T.grammar.reduce((e3, [t3, n3]) => e3.replace(t3, n3), a2)), a2.replace(/\s+([,.])/g, "$1").replace(
      /^\s*(\w)/,
      (t3, n3) => /^[a-z]/.test(e2.text.trim()) ? n3 : n3.toUpperCase()
    ));
    await R(420 + 200 * Math.random(), t2);
    let i2 = 0, l2 = 0;
    for (; i2 < r2.length; ) {
      let e3 = 2 + Math.floor(9 * Math.random());
      yield r2.slice(i2, i2 + e3), i2 += e3, await R(l2++ % 13 == 7 ? 260 : 30 + 70 * Math.random(), t2);
    }
  }
  let D = [
    [
      /next week we will\s*$/i,
      "share the support macros and a short walkthrough video, so the team can answer conflict questions before the pilot starts."
    ],
    [
      /\bwe will\s*$/i,
      "check in with every pilot customer during the first week."
    ],
    [/\bsupport\s*$/i, "will get a preview build on October 7."],
    [/\bpilot\s*$/i, "customers will get a direct line to the Field team."],
    [/\bthe\s*$/i, "pilot group gets a feedback form inside the app."]
  ], L = [
    "Everything a technician captures offline syncs automatically once the device is back online.",
    "Pilot customers were picked from the crews who reported the most dropped forms.",
    "We will review the error rate every Monday and can pause the rollout at any stage.",
    "The help center article goes live on launch day."
  ];
  async function B(e2, t2) {
    await R(260, t2);
    let n2 = e2.before, a2 = D.find(([e3]) => e3.test(n2));
    if (a2) return (/\s$/.test(n2) ? "" : " ") + a2[1];
    if (/[.!?]\s*$/.test(n2) && n2.length > 40) {
      let t3 = e2.document.paragraphs.join(" "), a3 = L.find((e3) => !t3.includes(e3));
      return a3 ? (/\s$/.test(n2) ? "" : " ") + a3 : null;
    }
    return null;
  }
  var O = n(76100), q = n.n(O);
  let { spring: $, duration: z, ease: F } = j.T, W = [...F.standard], K = (...e2) => e2.filter(Boolean).join(" "), P = { shorten: c.A, clearer: d.A, friendly: u.A, formal: h.A, grammar: g }, H = {
    shorten: "Shortening",
    clearer: "Clarifying",
    friendly: "Warming up the tone",
    formal: "Making it formal",
    grammar: "Fixing grammar"
  }, U = (e2) => e2.match(/\S+\s*/g) ?? [], Q = (e2) => e2.trim(), V = () => () => {
  };
  function Y(e2) {
    let t2 = "";
    return e2.childNodes.forEach((e3) => {
      e3 instanceof HTMLElement && void 0 !== e3.dataset.ghost || (t2 += e3.textContent ?? "");
    }), t2;
  }
  function G(e2, t2, n2) {
    let a2 = document.createRange();
    return a2.setStart(e2, 0), a2.setEnd(t2, n2), a2.toString().length;
  }
  function Z(e2, t2, n2 = t2) {
    let a2 = e2.firstChild && e2.firstChild.nodeType === Node.TEXT_NODE ? e2.firstChild : null, r2 = window.getSelection();
    if (!r2) return;
    let i2 = document.createRange();
    if (a2) {
      let e3 = a2.textContent?.length ?? 0;
      i2.setStart(a2, Math.min(t2, e3)), i2.setEnd(a2, Math.min(n2, e3));
    } else i2.selectNodeContents(e2), i2.collapse(0 === t2);
    r2.removeAllRanges(), r2.addRange(i2);
  }
  function X(e2, t2, n2) {
    for (; t2 > 0 && /\S/.test(e2[t2 - 1]) && /\S/.test(e2[t2] ?? " "); ) t2--;
    for (; n2 < e2.length && /\S/.test(e2[n2]) && n2 > 0 && /\S/.test(e2[n2 - 1]); )
      n2++;
    for (; t2 < n2 && /\s/.test(e2[t2]); ) t2++;
    for (; n2 > t2 && /\s/.test(e2[n2 - 1]); ) n2--;
    return [t2, n2];
  }
  let J = (0, r.memo)(
    function({ para: e2, handlers: t2 }) {
      let [n2] = (0, r.useState)(e2.text);
      return (0, a.jsx)("p", {
        "data-para": e2.id,
        className: q().para,
        contentEditable: true,
        suppressContentEditableWarning: true,
        spellCheck: false,
        "data-placeholder": n2 ? void 0 : "Write, or press \u2318K to ask AI",
        onInput: (n3) => t2.current.input(e2.id, n3.currentTarget),
        onKeyDown: (n3) => t2.current.keyDown(e2.id, n3),
        onBeforeInput: (n3) => t2.current.beforeInput(e2.id, n3.nativeEvent),
        onPaste: (e3) => {
          e3.preventDefault(), document.execCommand(
            "insertText",
            false,
            e3.clipboardData.getData("text/plain").replace(/\s*\n\s*/g, " ")
          );
        },
        onKeyUp: () => t2.current.caret(e2.id),
        onPointerUp: () => t2.current.caret(e2.id),
        onBlur: () => t2.current.blur(e2.id),
        children: n2
      });
    },
    (e2, t2) => e2.para.id === t2.para.id && e2.para.v === t2.para.v
  );
  function ee({ ops: e2, phase: t2, decisions: n2, reduced: r2, onDecide: i2 }) {
    if ("review" !== t2)
      return (0, a.jsx)(a.Fragment, {
        children: e2.map((e3) => {
          let t3 = "insert" === e3.type ? `b${e3.b}` : `a${e3.a}`;
          return "insert" === e3.type ? (0, a.jsx)(
            "ins",
            { className: K(q().ins, !r2 && q().insEnter), children: e3.text },
            t3
          ) : "delete" === e3.type ? (0, a.jsx)(
            "del",
            {
              className: K(q().del, !r2 && q().delEnter),
              children: e3.text
            },
            t3
          ) : (0, a.jsx)(
            "span",
            {
              className: "pending" === e3.type ? q().pending : void 0,
              children: e3.text
            },
            t3
          );
        })
      });
    let l2 = [];
    for (let t3 = 0; t3 < e2.length; ) {
      let r3 = e2[t3];
      if (void 0 === r3.hunk) {
        l2.push((0, a.jsx)("span", { children: r3.text }, `a${r3.a}`)), t3++;
        continue;
      }
      let s2 = r3.hunk, o2 = [];
      for (; t3 < e2.length && e2[t3].hunk === s2; ) o2.push(e2[t3++]);
      let c2 = n2[s2], d2 = o2.filter((e3) => "delete" === e3.type).map((e3) => e3.text).join(""), u2 = o2.filter((e3) => "insert" === e3.type).map((e3) => e3.text).join("");
      if (c2) {
        l2.push(
          (0, a.jsx)(
            "span",
            {
              className: q().resolved,
              "data-choice": c2,
              children: "accepted" === c2 ? u2 : d2
            },
            `h${s2}`
          )
        );
        continue;
      }
      let h2 = d2 && u2 ? `Change "${d2.trim()}" to "${u2.trim()}"` : d2 ? `Remove "${d2.trim()}"` : `Add "${u2.trim()}"`;
      l2.push(
        (0, a.jsxs)(
          "span",
          {
            className: q().hunk,
            tabIndex: 0,
            role: "group",
            "aria-label": `${h2}. Enter accepts, Backspace rejects.`,
            "data-hunk": s2,
            onKeyDown: (e3) => {
              "Enter" !== e3.key || e3.metaKey || e3.ctrlKey || (e3.preventDefault(), i2(s2, "accepted")), ("Backspace" === e3.key || "Delete" === e3.key) && (e3.preventDefault(), i2(s2, "rejected"));
            },
            children: [
              d2 ? (0, a.jsx)("del", { className: q().del, children: d2 }) : null,
              u2 ? (0, a.jsx)("ins", { className: q().ins, children: u2 }) : null,
              (0, a.jsxs)("span", {
                className: q().hunkBar,
                contentEditable: false,
                children: [
                  (0, a.jsx)("button", {
                    type: "button",
                    tabIndex: -1,
                    className: q().hunkButton,
                    "aria-label": "Accept change",
                    onPointerDown: (e3) => e3.preventDefault(),
                    onClick: () => i2(s2, "accepted"),
                    children: (0, a.jsx)(f.A, {})
                  }),
                  (0, a.jsx)("button", {
                    type: "button",
                    tabIndex: -1,
                    className: q().hunkButton,
                    "aria-label": "Reject change",
                    onPointerDown: (e3) => e3.preventDefault(),
                    onClick: () => i2(s2, "rejected"),
                    children: (0, a.jsx)(b.A, {})
                  })
                ]
              })
            ]
          },
          `h${s2}`
        )
      );
    }
    return (0, a.jsx)(a.Fragment, { children: l2 });
  }
  function et({ children: e2 }) {
    return (0, a.jsx)("kbd", { className: q().kbd, children: e2 });
  }
  function en({ actions: e2, mac: t2, onRun: n2, onClose: l2 }) {
    let [s2, o2] = (0, r.useState)(""), [c2, d2] = (0, r.useState)(0), u2 = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      u2.current?.focus({ preventScroll: true });
    }, []);
    let h2 = s2.trim().toLowerCase(), p2 = h2 ? e2.filter((e3) => e3.label.toLowerCase().includes(h2) || e3.id.includes(h2)) : e2, m2 = [
      ...h2 ? [
        {
          key: "custom",
          label: (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("span", {
                className: q().muted,
                children: "Ask "
              }),
              s2.trim()
            ]
          }),
          icon: y.A,
          run: () => n2(s2.trim())
        }
      ] : [],
      ...p2.map((e3) => ({
        key: e3.id,
        label: e3.label,
        icon: P[e3.id] ?? _.A,
        run: () => n2(e3.instruction, e3)
      }))
    ], g2 = Math.min(c2, m2.length - 1);
    return (0, a.jsxs)("div", {
      className: q().prompt,
      children: [
        (0, a.jsxs)("div", {
          className: q().promptRow,
          children: [
            (0, a.jsx)(_.A, {
              className: q().promptIcon,
              "aria-hidden": "true"
            }),
            (0, a.jsx)("input", {
              ref: u2,
              className: q().promptInput,
              value: s2,
              placeholder: "Ask AI to edit the selection",
              "aria-label": "Edit instruction",
              role: "combobox",
              "aria-expanded": "true",
              "aria-controls": "ai-edit-actions",
              "aria-activedescendant": m2[g2] ? `ai-edit-${m2[g2].key}` : void 0,
              onChange: (e3) => {
                o2(e3.target.value), d2(0);
              },
              onKeyDown: (e3) => {
                "ArrowDown" === e3.key ? (e3.preventDefault(), d2((g2 + 1) % m2.length)) : "ArrowUp" === e3.key ? (e3.preventDefault(), d2((g2 - 1 + m2.length) % m2.length)) : "Enter" === e3.key ? (e3.preventDefault(), m2[g2]?.run()) : "Escape" === e3.key ? (e3.preventDefault(), e3.stopPropagation(), l2()) : "Tab" === e3.key && e3.preventDefault();
              }
            }),
            (0, a.jsx)(et, { children: "esc" })
          ]
        }),
        (0, a.jsxs)("ul", {
          className: q().menu,
          role: "listbox",
          id: "ai-edit-actions",
          "aria-label": "Quick edits",
          children: [
            m2.map((e3, t3) => {
              let n3 = e3.icon;
              return (0, a.jsxs)(
                "li",
                {
                  id: `ai-edit-${e3.key}`,
                  role: "option",
                  "aria-selected": t3 === g2,
                  className: q().menuItem,
                  "data-active": t3 === g2 || void 0,
                  onPointerMove: () => d2(t3),
                  onPointerDown: (e4) => e4.preventDefault(),
                  onClick: e3.run,
                  children: [
                    t3 === g2 ? (0, a.jsx)(i.PY1.span, {
                      layoutId: "ai-edit-highlight",
                      className: q().menuHighlight,
                      transition: $.snappy
                    }) : null,
                    (0, a.jsx)(n3, {
                      className: q().menuIcon,
                      "aria-hidden": "true"
                    }),
                    (0, a.jsx)("span", {
                      className: q().menuLabel,
                      children: e3.label
                    }),
                    t3 === g2 ? (0, a.jsx)(y.A, {
                      className: q().menuEnter,
                      "aria-hidden": "true"
                    }) : null
                  ]
                },
                e3.key
              );
            }),
            0 === m2.length ? (0, a.jsx)("li", {
              className: q().menuEmpty,
              children: "Type an instruction"
            }) : null
          ]
        }),
        (0, a.jsxs)("p", {
          className: q().promptHint,
          children: [
            (0, a.jsx)(et, { children: "\u2191" }),
            (0, a.jsx)(et, { children: "\u2193" }),
            " to choose, ",
            (0, a.jsx)(et, { children: "\u21B5" }),
            " to run. ",
            t2 ? "\u2318K" : "Ctrl K",
            " opens this on any selection."
          ]
        })
      ]
    });
  }
  function ea({
    defaultDocument: e2 = E,
    onRequestEdit: t2 = I,
    onSuggest: n2 = B,
    actions: c2 = S,
    onChange: d2,
    author: u2 = A,
    className: h2
  }) {
    let p2, m2 = (p2 = (0, C.I)(), !!((0, r.useSyncExternalStore)(
      N,
      () => true,
      () => false
    ) && p2)), g2 = (0, r.useSyncExternalStore)(
      V,
      () => /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent),
      () => true
    ), [b2] = (0, r.useState)(e2.title), [y2, j2] = (0, r.useState)(
      () => e2.paragraphs.map((e10, t3) => ({ id: t3 + 1, text: e10, v: 0 }))
    ), M2 = (0, r.useRef)(e2.paragraphs.length + 1), T2 = (0, r.useRef)(y2);
    (0, r.useLayoutEffect)(() => {
      T2.current = y2;
    });
    let [R2, D2] = (0, r.useState)([]), [L2, O2] = (0, r.useState)([]), [F2, P2] = (0, r.useState)(null), er2 = (0, r.useRef)(F2);
    (0, r.useLayoutEffect)(() => {
      er2.current = F2;
    });
    let [ei, el] = (0, r.useState)(null), [es, eo] = (0, r.useState)(null), [ec, ed] = (0, r.useState)(false), [eu, eh] = (0, r.useState)("saved"), [ep, em] = (0, r.useState)(null), eg = (0, r.useRef)(null), ef = (0, r.useRef)(null), eb = (0, r.useRef)(null), ey = (0, r.useRef)(null), e_ = (0, r.useRef)(null), ex = (0, r.useRef)(null), ew = (0, r.useRef)(0), ev = (0, r.useRef)(null), ek = (0, r.useRef)(0), ej = (0, r.useRef)(0), eC = (0, r.useRef)({ onRequestEdit: t2, onSuggest: n2, onChange: d2 });
    (0, r.useEffect)(() => {
      eC.current = { onRequestEdit: t2, onSuggest: n2, onChange: d2 };
    }), (0, r.useEffect)(
      () => () => {
        window.clearTimeout(ew.current), window.clearTimeout(ek.current), window.clearTimeout(ej.current), e_.current?.abort(), ev.current?.abort();
      },
      []
    );
    let eN = (e10) => ({ title: b2, paragraphs: e10.map((e11) => e11.text) }), eA = (e10) => {
      eh("saving"), window.clearTimeout(ek.current), ek.current = window.setTimeout(() => {
        eh("saved"), eC.current.onChange?.(eN(e10));
      }, 700);
    }, eE = F2?.phase === "streaming", eS = (function(e10, { streaming: t3, pace: n3 = 70, enabled: a2 = true }) {
      let [i2, l2] = (0, r.useState)(() => t3 ? 0 : e10.length), [s2, o2] = (0, r.useState)(e10), c3 = i2;
      s2 !== e10 && (o2(e10), e10.startsWith(s2) || (c3 = 0, l2(0)));
      let d3 = (0, r.useRef)(c3), u3 = (0, r.useRef)(e10), h3 = (0, r.useRef)([]), p3 = (0, r.useRef)(0);
      (0, r.useEffect)(() => {
        let r2 = performance.now();
        e10.startsWith(u3.current) || (d3.current = 0, h3.current = []), u3.current = e10;
        let i3 = h3.current;
        for (i3.push([r2, e10.length]); i3.length > 2 && r2 - i3[1][0] > 1500; )
          i3.shift();
        if (!a2) {
          d3.current = e10.length;
          return;
        }
        let s3 = 0, o3 = r2, c4 = -1, m4 = p3.current, g3 = (a3) => {
          let r3 = Math.min(0.05, Math.max(0, (a3 - o3) / 1e3));
          o3 = a3;
          let u4 = e10.length - d3.current;
          if (u4 > 0) {
            let a4, l3, s4, o4 = (a4 = i3[0], s4 = ((l3 = i3[i3.length - 1])[0] - a4[0]) / 1e3, i3.length > 1 && s4 > 0.2 ? Math.max(12, (l3[1] - a4[1]) / s4) : n3), c5 = t3 ? o4 * Math.min(2.5, Math.max(0.45, u4 / Math.max(1, 0.5 * o4))) : Math.max(1.5 * n3, u4 / 0.4);
            p3.current = m4 = m4 ? m4 + (c5 - m4) * Math.min(1, r3 * (t3 ? 5 : 12)) : c5, d3.current = Math.min(e10.length, d3.current + m4 * r3);
          }
          let h4 = (function(e11, t4, n4) {
            if (t4 >= e11.length && !n4) return e11.length;
            let a4 = Math.min(Math.floor(t4), e11.length);
            if (a4 < e11.length && /\s/.test(e11[a4])) return a4;
            for (; a4 > 0 && !/\s/.test(e11[a4 - 1]); ) a4--;
            return a4;
          })(e10, d3.current, t3);
          h4 !== c4 && (c4 = h4, l2(h4)), d3.current < e10.length && (s3 = requestAnimationFrame(g3));
        };
        return s3 = requestAnimationFrame(g3), () => cancelAnimationFrame(s3);
      }, [e10, t3, a2, n3]);
      let m3 = a2 ? e10.slice(0, Math.min(c3, e10.length)) : e10;
      return { text: m3, revealing: m3.length < e10.length };
    })(F2?.suggestion ?? "", {
      streaming: !!(eE && !F2?.received),
      enabled: !!(F2 && !F2.stopped)
    }), eM = eS.text, eT = (0, r.useRef)("");
    (0, r.useEffect)(() => {
      eT.current = eM;
    }, [eM]);
    let eR = (0, r.useMemo)(
      () => F2 && "prompt" !== F2.phase && "error" !== F2.phase ? (function(e10, t3, n3) {
        let a2 = U(e10), r2 = U(t3), i2 = a2.length, l2 = r2.length, s2 = Array.from(
          { length: i2 + 1 },
          () => new Uint16Array(l2 + 1)
        );
        for (let e11 = i2 - 1; e11 >= 0; e11--)
          for (let t4 = l2 - 1; t4 >= 0; t4--)
            s2[e11][t4] = Q(a2[e11]) === Q(r2[t4]) ? s2[e11 + 1][t4 + 1] + 1 : Math.max(s2[e11 + 1][t4], s2[e11][t4 + 1]);
        let o2 = [], c3 = 0, d3 = 0;
        for (; c3 < i2 || d3 < l2; ) {
          if (c3 < i2 && d3 < l2 && Q(a2[c3]) === Q(r2[d3])) {
            o2.push({ type: "equal", text: a2[c3], a: c3++, b: d3++ });
            continue;
          }
          c3 < i2 && (d3 >= l2 || s2[c3 + 1][d3] >= s2[c3][d3 + 1]) ? o2.push({ type: "delete", text: a2[c3], a: c3++ }) : o2.push({ type: "insert", text: r2[d3], b: d3++ });
        }
        if (n3) {
          for (let e12 = 0; e12 < 4; e12++) {
            let e13 = o2.findLastIndex((e14) => "equal" === e14.type);
            if (e13 < 0) break;
            let n5 = e13;
            for (; n5 > 0 && "equal" === o2[n5 - 1].type; ) n5--;
            let a4 = 0;
            for (let e14 = n5 - 1; e14 >= 0 && "equal" !== o2[e14].type; e14--)
              "delete" === o2[e14].type && a4++;
            let r3 = o2.slice(n5, e13 + 1);
            if (!(1 === r3.length && Q(r3[0].text).length <= 4 || r3.length <= 2 && a4 >= 6) || a4 < 3)
              break;
            o2 = [
              ...o2.slice(0, n5),
              ...r3.flatMap((e14) => [
                { type: "delete", text: e14.text, a: e14.a },
                { type: "insert", text: U(t3)[e14.b] ?? e14.text, b: e14.b }
              ]),
              ...o2.slice(e13 + 1)
            ];
          }
          let e11 = o2.findLastIndex((e12) => "equal" === e12.type), n4 = o2.slice(0, e11 + 1), a3 = o2.slice(e11 + 1);
          o2 = [
            ...n4,
            ...a3.filter((e12) => "insert" === e12.type),
            ...a3.filter((e12) => "delete" === e12.type).map((e12) => ({ ...e12, type: "pending" }))
          ];
        }
        let u3 = -1, h3 = false;
        for (let e11 of o2)
          "delete" === e11.type || "insert" === e11.type ? (h3 || (u3++, h3 = true), e11.hunk = u3) : h3 = false;
        return o2;
      })(F2.original, eM, "streaming" === F2.phase) : null,
      [F2, eM]
    ), eI = eR ? new Set(eR.filter((e10) => void 0 !== e10.hunk).map((e10) => e10.hunk)).size : 0, eD = F2?.phase === "streaming" && F2.received && !eS.revealing, eL = (0, r.useCallback)(() => {
      window.clearTimeout(ew.current), ev.current?.abort(), ex.current && (ex.current.el.remove(), ex.current = null), ed(false);
    }, []), eB = (0, r.useCallback)(
      (e10, t3, n3) => {
        e10.textContent = "", t3.split(/(\s+)/).forEach((t4, a2) => {
          if (!t4) return;
          let r2 = document.createElement("span");
          r2.textContent = t4, n3 && !m2 && (r2.className = q().ghostWord, r2.style.animationDelay = `${Math.min(18 * a2, 360)}ms`), e10.appendChild(r2);
        });
      },
      [m2]
    ), eO = (0, r.useCallback)(
      (e10, t3) => {
        let n3 = ef.current?.querySelector(
          `[data-para="${e10}"][contenteditable]`
        );
        if (!n3 || !t3) return;
        ex.current && ex.current.el.remove();
        let a2 = document.createElement("span");
        a2.dataset.ghost = "", a2.contentEditable = "false", a2.className = q().ghost, a2.setAttribute("aria-hidden", "true"), eB(a2, t3, true), n3.appendChild(a2), ex.current = { para: e10, el: a2, text: t3 }, ed(true);
      },
      [eB]
    ), eq = (e10) => {
      let t3 = ef.current?.querySelector(
        `[data-para="${e10}"][contenteditable]`
      ), n3 = window.getSelection();
      if (!t3 || !n3 || !n3.isCollapsed || !n3.rangeCount) return null;
      let a2 = n3.getRangeAt(0);
      if (!t3.contains(a2.startContainer)) return null;
      let r2 = Y(t3);
      return G(t3, a2.startContainer, a2.startOffset) >= r2.trimEnd().length && r2.trim().length > 8 ? { el: t3, text: r2 } : null;
    }, e$ = (e10, t3) => {
      window.clearTimeout(ew.current), ev.current?.abort(), er2.current || (ew.current = window.setTimeout(async () => {
        let t4 = eq(e10);
        if (!t4 || ex.current) return;
        let n3 = new AbortController();
        ev.current = n3;
        let a2 = T2.current.findIndex((t5) => t5.id === e10);
        try {
          let r2 = await eC.current.onSuggest(
            { before: t4.text, paragraph: a2, document: eN(T2.current) },
            n3.signal
          );
          if (n3.signal.aborted || !r2 || !eq(e10)) return;
          eO(e10, r2);
        } catch {
        }
      }, t3));
    }, ez = (0, r.useCallback)(() => {
      let e10 = window.getSelection();
      if (!e10 || !e10.rangeCount) return null;
      let t3 = e10.getRangeAt(0), n3 = t3.startContainer.nodeType === Node.ELEMENT_NODE ? t3.startContainer : t3.startContainer.parentElement, a2 = n3?.closest("[data-para][contenteditable]");
      if (!a2 || !ef.current?.contains(a2)) return null;
      let r2 = Number(a2.dataset.para), i2 = Y(a2), l2 = G(a2, t3.startContainer, t3.startOffset), s2 = a2.contains(t3.endContainer) ? G(a2, t3.endContainer, t3.endOffset) : i2.length;
      return (s2 = Math.min(s2, i2.length), t3.collapsed ? [l2, s2] = (function(e11, t4) {
        let n4, a3 = /[^.!?]+[.!?]*["”)]?\s*/g;
        for (; n4 = a3.exec(e11); )
          if (t4 <= n4.index + n4[0].length)
            return X(e11, n4.index, n4.index + n4[0].length);
        return X(e11, 0, e11.length);
      })(i2, l2) : [l2, s2] = X(i2, l2, s2), s2 <= l2) ? null : { id: r2, el: a2, start: l2, end: s2, text: i2, collapsed: t3.collapsed };
    }, []), eF = (0, r.useCallback)(() => {
      let e10 = window.getSelection();
      if (er2.current || !e10 || e10.isCollapsed || !e10.rangeCount || !ef.current)
        return void eo(null);
      let t3 = ez();
      if (!t3 || t3.collapsed) return void eo(null);
      let n3 = e10.getRangeAt(0).getClientRects()[0], a2 = ef.current.getBoundingClientRect();
      n3 ? eo({
        top: n3.top - a2.top - 40,
        left: Math.max(0, Math.min(n3.left - a2.left, a2.width - 132))
      }) : eo(null);
    }, [ez]);
    (0, r.useEffect)(() => {
      let e10 = () => {
        eW.current || eF();
      };
      return document.addEventListener("selectionchange", e10), () => document.removeEventListener("selectionchange", e10);
    }, [eF]);
    let eW = (0, r.useRef)(false), eK = (0, r.useCallback)(() => {
      let e10 = ez();
      if (!e10 || er2.current) return false;
      eL();
      let t3 = e10.text;
      return j2((n3) => n3.map((n4) => n4.id === e10.id ? { ...n4, text: t3 } : n4)), P2({
        para: e10.id,
        start: e10.start,
        end: e10.end,
        original: t3.slice(e10.start, e10.end),
        phase: "prompt",
        instruction: "",
        label: "",
        suggestion: "",
        received: false,
        stopped: false,
        decisions: {}
      }), eo(null), el(null), window.getSelection()?.removeAllRanges(), true;
    }, [ez, eL]), eP = (0, r.useCallback)((e10 = true) => {
      e_.current?.abort();
      let t3 = er2.current;
      P2(null), t3 && e10 && em({ id: t3.para, start: t3.start, end: t3.end });
    }, []), eH = async (e10, t3) => {
      let n3 = er2.current;
      if (!n3) return;
      let a2 = T2.current.find((e11) => e11.id === n3.para);
      if (!a2) return;
      e_.current?.abort();
      let r2 = new AbortController();
      e_.current = r2;
      let i2 = t3 ? H[t3.id] ?? t3.label : "Editing";
      P2(
        (n4) => n4 && {
          ...n4,
          phase: "streaming",
          instruction: e10,
          action: t3?.id,
          label: i2,
          suggestion: "",
          received: false,
          stopped: false,
          decisions: {},
          error: void 0
        }
      );
      let l2 = {
        text: n3.original,
        instruction: e10,
        action: t3?.id,
        before: a2.text.slice(0, n3.start),
        after: a2.text.slice(n3.end),
        paragraph: T2.current.indexOf(a2)
      };
      try {
        let e11 = eC.current.onRequestEdit(l2, r2.signal);
        if ("function" == typeof e11.then) {
          let t4 = await e11;
          r2.signal.aborted || P2((e12) => e12 && { ...e12, suggestion: t4, received: true });
        } else {
          for await (let t4 of e11) {
            if (r2.signal.aborted) return;
            P2((e12) => e12 && { ...e12, suggestion: e12.suggestion + t4 });
          }
          r2.signal.aborted || P2((e12) => e12 && { ...e12, received: true });
        }
      } catch (e11) {
        if (r2.signal.aborted) return;
        P2(
          (t4) => t4 && {
            ...t4,
            phase: "error",
            error: e11 instanceof Error ? e11.message : "The edit failed"
          }
        );
      }
    }, eU = () => {
      e_.current?.abort(), P2(
        (e10) => e10 && { ...e10, suggestion: eT.current, received: true, stopped: true }
      );
    };
    (0, r.useEffect)(() => {
      if (!eD) return;
      let e10 = window.setTimeout(() => {
        P2(
          (e11) => e11 && "streaming" === e11.phase ? { ...e11, phase: "review" } : e11
        );
      }, 0);
      return () => window.clearTimeout(e10);
    }, [eD]);
    let eQ = (0, r.useCallback)(
      (e10) => {
        let t3 = er2.current;
        if (!t3 || !eR) return;
        let n3 = eR.map((t4) => {
          if ("equal" === t4.type || "pending" === t4.type) return t4.text;
          let n4 = e10[t4.hunk] ?? "rejected";
          return "delete" === t4.type ? "rejected" === n4 ? t4.text : "" : "accepted" === n4 ? t4.text : "";
        }).join(""), a2 = Object.keys(e10).length, r2 = Object.values(e10).filter((e11) => "accepted" === e11).length, i2 = T2.current, l2 = i2.map(
          (e11) => e11.id === t3.para ? {
            ...e11,
            text: e11.text.slice(0, t3.start) + n3 + e11.text.slice(t3.end),
            v: e11.v + 1
          } : e11
        );
        r2 && (D2((e11) => [...e11, i2.map((e12) => e12.text)]), O2([]), j2(l2), eA(l2)), P2(null), el({ applied: r2, total: a2 }), window.clearTimeout(ej.current), ej.current = window.setTimeout(() => el(null), 4200), em({ id: t3.para, start: t3.start + n3.length });
      },
      [eR]
    ), eV = (e10, t3) => {
      let n3 = er2.current;
      if (!n3) return;
      let a2 = { ...n3.decisions, [e10]: t3 };
      P2({ ...n3, decisions: a2 }), Object.keys(a2).length >= eI ? window.setTimeout(() => eQ(a2), 320 * !m2) : requestAnimationFrame(() => {
        let t4 = ef.current?.querySelector(
          `[data-hunk]:not([data-hunk="${e10}"])`
        );
        document.activeElement?.closest("[data-hunk]") && t4?.focus({ preventScroll: false });
      });
    }, eY = (e10) => {
      if (!eR) return;
      let t3 = {};
      for (let n3 = 0; n3 < eI; n3++) t3[n3] = er2.current?.decisions[n3] ?? e10;
      eQ(t3);
    }, eG = (e10) => {
      j2((t3) => {
        let n3 = e10.map(
          (e11, n4) => t3[n4] ? { ...t3[n4], text: e11, v: t3[n4].text === e11 ? t3[n4].v : t3[n4].v + 1 } : { id: M2.current++, text: e11, v: 0 }
        );
        return eA(n3), n3;
      });
    }, eZ = () => {
      R2.length && !F2 && (eL(), O2((e10) => [...e10, T2.current.map((e11) => e11.text)]), eG(R2[R2.length - 1]), D2((e10) => e10.slice(0, -1)), el(null));
    }, eX = () => {
      L2.length && !F2 && (D2((e10) => [...e10, T2.current.map((e11) => e11.text)]), eG(L2[L2.length - 1]), O2((e10) => e10.slice(0, -1)));
    };
    (0, r.useLayoutEffect)(() => {
      if (!ep) return;
      let e10 = ef.current?.querySelector(
        `[data-para="${ep.id}"][contenteditable]`
      );
      if (!e10) return;
      e10.focus({ preventScroll: true }), Z(e10, ep.start, ep.end);
      let t3 = window.setTimeout(() => em(null), 0);
      return () => window.clearTimeout(t3);
    }, [ep, y2, F2]);
    let eJ = (0, r.useRef)(null);
    eJ.current = {
      input: (e10, t3) => {
        let n3 = Y(t3);
        j2((t4) => {
          let a2 = t4.map((t5) => t5.id === e10 ? { ...t5, text: n3 } : t5);
          return eA(a2), a2;
        }), ex.current && ex.current.para === e10 || e$(e10, 650), eo(null);
      },
      beforeInput: (e10, t3) => {
        let n3 = ex.current;
        n3 && n3.para === e10 && ("insertText" === t3.inputType && t3.data && n3.text.startsWith(t3.data) ? (n3.text = n3.text.slice(t3.data.length), n3.text.trim() ? eB(n3.el, n3.text, false) : eL()) : eL());
      },
      keyDown: (e10, t3) => {
        let n3 = t3.currentTarget;
        if ("Tab" === t3.key && ex.current?.para === e10) {
          t3.preventDefault(), ((e11) => {
            let t4 = ex.current;
            if (!t4) return;
            t4.el.remove(), ex.current = null, ed(false);
            let n4 = Y(e11).length;
            Z(e11, n4), document.execCommand("insertText", false, t4.text);
            let a2 = e11.firstChild;
            if (!m2 && a2 && "highlights" in CSS && "u" > typeof Highlight) {
              let e12 = document.createRange();
              e12.setStart(a2, Math.min(n4, a2.textContent?.length ?? 0)), e12.setEnd(a2, a2.textContent?.length ?? 0), CSS.highlights.set("ai-accepted", new Highlight(e12)), window.setTimeout(
                () => CSS.highlights.delete("ai-accepted"),
                900
              );
            }
          })(n3);
          return;
        }
        if ("Escape" === t3.key && ex.current) {
          t3.preventDefault(), eL();
          return;
        }
        if ("Enter" === t3.key && !t3.shiftKey && !t3.metaKey && !t3.ctrlKey) {
          t3.preventDefault(), eL();
          let a2 = window.getSelection();
          if (!a2?.rangeCount) return;
          let r2 = Y(n3), i2 = a2.getRangeAt(0), l2 = G(n3, i2.startContainer, i2.startOffset), s2 = G(n3, i2.endContainer, i2.endOffset), o2 = { id: M2.current++, text: r2.slice(s2).trimStart(), v: 0 };
          j2((t4) => {
            let n4 = t4.findIndex((t5) => t5.id === e10), a3 = [...t4];
            return a3.splice(
              n4,
              1,
              { ...t4[n4], text: r2.slice(0, l2).trimEnd(), v: t4[n4].v + 1 },
              o2
            ), eA(a3), a3;
          }), em({ id: o2.id, start: 0 });
          return;
        }
        if ("Backspace" === t3.key) {
          let a2 = window.getSelection();
          if (!a2?.isCollapsed || !a2.rangeCount) return;
          let r2 = a2.getRangeAt(0);
          if (0 !== G(n3, r2.startContainer, r2.startOffset)) return;
          let i2 = T2.current, l2 = i2.findIndex((t4) => t4.id === e10);
          if (l2 <= 0) return;
          t3.preventDefault(), eL();
          let s2 = i2[l2 - 1], o2 = Y(n3), c3 = s2.text && o2 && !/\s$/.test(s2.text) ? " " : "", d3 = i2.filter((t4) => t4.id !== e10).map(
            (e11) => e11.id === s2.id ? { ...e11, text: s2.text + c3 + o2, v: e11.v + 1 } : e11
          );
          j2(d3), eA(d3), em({ id: s2.id, start: s2.text.length + c3.length });
        }
      },
      caret: (e10) => {
        eW.current = false, eF(), ex.current || e$(e10, 380);
      },
      blur: () => {
        eL();
      }
    };
    let [e0, e1] = (0, r.useState)(null), e22 = (0, r.useRef)(null), e5 = F2 ? "review" === F2.phase && 0 === eI ? "empty" : F2.phase : ei ? "applied" : null;
    (0, r.useLayoutEffect)(() => {
      let e10 = ef.current;
      if (!e10) return;
      let t3 = () => {
        let t4 = e10.querySelector("[data-region]") ?? null;
        if (!t4) {
          er2.current || ei || e1(null);
          return;
        }
        let n4 = Array.from(t4.getClientRects()).filter((e11) => e11.width > 0);
        if (!n4.length) return;
        let a2 = e10.getBoundingClientRect(), r2 = n4[n4.length - 1], i2 = n4[0], l2 = e22.current ? e22.current.offsetWidth + 2 : 320, s2 = Math.max(
          0,
          Math.min(
            (n4.length > 1 ? Math.min(...n4.map((e11) => e11.left)) : i2.left) - a2.left,
            a2.width - l2
          )
        ), o2 = r2.bottom - a2.top + 10, c3 = a2.width;
        e1(
          (e11) => e11 && e11.top === o2 && e11.left === s2 && e11.room === c3 ? e11 : { top: o2, left: s2, room: c3 }
        );
      };
      t3();
      let n3 = new ResizeObserver(t3);
      return n3.observe(e10), () => n3.disconnect();
    }, [F2, eR, ei, ep]), (0, r.useEffect)(() => {
      if (!e5 || !ey.current || !eb.current) return;
      let e10 = window.setTimeout(() => {
        let e11 = ey.current?.getBoundingClientRect(), t3 = eb.current?.getBoundingClientRect();
        e11 && t3 && eb.current && e11.bottom > t3.bottom - 12 && eb.current.scrollBy({
          top: e11.bottom - t3.bottom + 24,
          behavior: m2 ? "auto" : "smooth"
        });
      }, 60);
      return () => window.clearTimeout(e10);
    }, [e5, e0?.top, m2]);
    let e4 = y2.reduce(
      (e10, t3) => e10 + (t3.text.trim() ? t3.text.trim().split(/\s+/).length : 0),
      0
    ), e6 = F2?.phase === "review" ? (0, a.jsxs)(a.Fragment, {
      children: [
        "Tab through changes, ",
        (0, a.jsx)(et, { children: "\u21B5" }),
        " accept, ",
        (0, a.jsx)(et, { children: "\u232B" }),
        " reject"
      ]
    }) : ec ? (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(et, { children: "Tab" }),
        " to accept, ",
        (0, a.jsx)(et, { children: "esc" }),
        " to dismiss"
      ]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [
        "Select text and press ",
        (0, a.jsx)(et, { children: g2 ? "\u2318K" : "Ctrl K" }),
        " to edit with AI"
      ]
    }), e7 = m2 ? { duration: 0 } : $.smooth, e8 = (0, l.d)("auto"), e9 = (0, l.d)("auto"), e3 = !!(e5 && e0);
    return (0, r.useLayoutEffect)(() => {
      let e10 = e22.current;
      if (!e3 || !e10) return;
      let t3 = true, n3 = [], a2 = () => {
        let a3 = e10.offsetWidth + 2, r3 = e10.offsetHeight + 2;
        n3.forEach((e11) => e11.stop()), t3 || m2 ? (e8.set(a3), e9.set(r3), n3 = []) : n3 = [(0, s.i)(e8, a3, $.smooth), (0, s.i)(e9, r3, $.smooth)], t3 = false;
      };
      a2();
      let r2 = new ResizeObserver(a2);
      return r2.observe(e10), () => {
        r2.disconnect(), n3.forEach((e11) => e11.stop());
      };
    }, [e3, m2, e8, e9]), (0, a.jsxs)("section", {
      ref: eg,
      className: K(q().root, h2),
      "aria-label": `${b2}, editor`,
      onKeyDown: (e10) => {
        let t3 = e10.metaKey || e10.ctrlKey;
        if (t3 && "k" === e10.key.toLowerCase()) {
          e10.preventDefault(), e10.stopPropagation(), F2?.phase === "prompt" ? eP() : eK();
          return;
        }
        if (F2?.phase === "review") {
          if (t3 && "Enter" === e10.key) {
            e10.preventDefault(), eY("accepted");
            return;
          }
          if ("Escape" === e10.key) {
            e10.preventDefault(), eY("rejected");
            return;
          }
        }
        if (F2?.phase === "streaming" && "Escape" === e10.key) {
          e10.preventDefault(), eU();
          return;
        }
        if (F2?.phase === "error" && "Escape" === e10.key) {
          e10.preventDefault(), eP();
          return;
        }
        let n3 = e10.target.isContentEditable;
        t3 && "z" === e10.key.toLowerCase() && !n3 && (e10.preventDefault(), e10.shiftKey ? eX() : eZ());
      },
      onPointerDown: (e10) => {
        eW.current = true, F2?.phase !== "prompt" || ey.current?.contains(e10.target) || eP(false);
      },
      onPointerUp: () => {
        eW.current = false, window.setTimeout(eF, 0);
      },
      children: [
        (0, a.jsxs)("header", {
          className: q().header,
          children: [
            (0, a.jsxs)("div", {
              className: q().docMeta,
              children: [
                (0, a.jsx)("img", {
                  className: q().avatar,
                  src: u2.photo,
                  alt: "",
                  width: 28,
                  height: 28
                }),
                (0, a.jsxs)("div", {
                  className: q().docText,
                  children: [
                    (0, a.jsx)("span", {
                      className: q().docTitle,
                      children: b2
                    }),
                    (0, a.jsxs)("span", {
                      className: q().docSub,
                      children: [
                        u2.name,
                        (0, a.jsx)("span", {
                          className: q().dot,
                          "aria-hidden": "true"
                        }),
                        (0, a.jsxs)("span", {
                          className: q().swap,
                          "aria-live": "polite",
                          children: [
                            (0, a.jsx)("span", {
                              "data-on": "saving" === eu || void 0,
                              "aria-hidden": "saving" !== eu || void 0,
                              children: "Saving"
                            }),
                            (0, a.jsx)("span", {
                              "data-on": "saved" === eu || void 0,
                              "aria-hidden": "saved" !== eu || void 0,
                              children: "Saved"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: q().headerActions,
              children: [
                (0, a.jsx)("button", {
                  type: "button",
                  className: q().iconButton,
                  onClick: eZ,
                  disabled: !R2.length || !!F2,
                  "aria-label": "Undo AI edit",
                  title: `Undo AI edit (${g2 ? "\u2318Z" : "Ctrl Z"})`,
                  children: (0, a.jsx)(x.A, {})
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  className: q().iconButton,
                  onClick: eX,
                  disabled: !L2.length || !!F2,
                  "aria-label": "Redo AI edit",
                  title: "Redo AI edit",
                  children: (0, a.jsx)(w.A, {})
                })
              ]
            })
          ]
        }),
        (0, a.jsx)("div", {
          ref: eb,
          className: q().scroller,
          children: (0, a.jsxs)("div", {
            ref: ef,
            className: q().page,
            children: [
              (0, a.jsx)("h1", { className: q().title, children: b2 }),
              y2.map((e10) => {
                if (F2?.para !== e10.id)
                  return (0, a.jsx)(
                    J,
                    { para: e10, handlers: eJ },
                    `${e10.id}-${e10.v}`
                  );
                let t3 = e10.text.slice(0, F2.start), n3 = e10.text.slice(F2.end);
                return (0, a.jsxs)(
                  "p",
                  {
                    "data-para": e10.id,
                    className: K(q().para, q().sessionPara),
                    children: [
                      t3,
                      (0, a.jsx)("span", {
                        "data-region": true,
                        className: q().region,
                        "data-phase": F2.phase,
                        children: "prompt" !== F2.phase && "error" !== F2.phase && eR ? (0, a.jsx)(ee, {
                          ops: eR,
                          phase: F2.phase,
                          decisions: F2.decisions,
                          reduced: m2,
                          onDecide: eV
                        }) : (0, a.jsx)("mark", {
                          className: q().selected,
                          children: F2.original
                        })
                      }),
                      n3
                    ]
                  },
                  `${e10.id}-session`
                );
              }),
              (0, a.jsx)(o.N, {
                children: es && !F2 ? (0, a.jsxs)(
                  i.PY1.button,
                  {
                    type: "button",
                    className: q().bubble,
                    style: { top: es.top, left: es.left },
                    initial: { opacity: 0, y: 4 * !m2 },
                    animate: { opacity: 1, y: 0 },
                    exit: {
                      opacity: 0,
                      transition: { duration: z.instant }
                    },
                    transition: m2 ? { duration: 0 } : $.snappy,
                    onPointerDown: (e10) => e10.preventDefault(),
                    onClick: () => eK(),
                    children: [
                      (0, a.jsx)(_.A, { "aria-hidden": "true" }),
                      (0, a.jsx)("span", { children: "Edit" }),
                      (0, a.jsx)(et, { children: g2 ? "\u2318K" : "Ctrl K" })
                    ]
                  },
                  "bubble"
                ) : null
              }),
              (0, a.jsx)(o.N, {
                children: e5 && e0 ? (0, a.jsx)(
                  i.PY1.div,
                  {
                    ref: ey,
                    className: q().layer,
                    "data-mode": e5,
                    role: "dialog",
                    "aria-label": "Edit with AI",
                    initial: {
                      opacity: 0,
                      y: m2 ? 0 : -4,
                      top: e0.top,
                      left: e0.left,
                      borderRadius: "prompt" === e5 ? 18 : 14
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      top: e0.top,
                      left: e0.left,
                      borderRadius: "prompt" === e5 ? 18 : 14
                    },
                    exit: {
                      opacity: 0,
                      y: m2 ? 0 : -4,
                      transition: { duration: z.exit, ease: W }
                    },
                    transition: e7,
                    style: { width: e8, height: e9 },
                    children: (0, a.jsx)("div", {
                      ref: e22,
                      className: q().layerSize,
                      "data-mode": e5,
                      style: { "--layer-room": `${e0.room}px` },
                      children: (0, a.jsx)(o.N, {
                        initial: false,
                        mode: "popLayout",
                        children: (0, a.jsxs)(
                          i.PY1.div,
                          {
                            className: q().layerBody,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: z.fast, ease: W },
                            children: [
                              "prompt" === e5 ? (0, a.jsx)(en, {
                                actions: c2,
                                mac: g2,
                                onRun: eH,
                                onClose: () => eP()
                              }) : null,
                              "streaming" === e5 ? (0, a.jsxs)("div", {
                                className: q().bar,
                                role: "status",
                                children: [
                                  (0, a.jsx)(v.A, {
                                    className: K(
                                      q().barIcon,
                                      q().spin
                                    ),
                                    "aria-hidden": "true"
                                  }),
                                  (0, a.jsx)("span", {
                                    className: q().shimmer,
                                    children: F2?.label
                                  }),
                                  (0, a.jsxs)("button", {
                                    type: "button",
                                    className: q().barButton,
                                    onClick: eU,
                                    children: [
                                      (0, a.jsx)(k.A, {
                                        className: q().stopGlyph,
                                        "aria-hidden": "true"
                                      }),
                                      "Stop",
                                      (0, a.jsx)(et, {
                                        children: "esc"
                                      })
                                    ]
                                  })
                                ]
                              }) : null,
                              "review" === e5 ? (0, a.jsxs)("div", {
                                className: q().bar,
                                children: [
                                  (0, a.jsxs)("span", {
                                    className: q().barLabel,
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: q().tabular,
                                        children: eI - Object.keys(
                                          F2?.decisions ?? {}
                                        ).length
                                      }),
                                      " of ",
                                      eI,
                                      " ",
                                      1 === eI ? "change" : "changes",
                                      F2?.stopped ? ", stopped" : ""
                                    ]
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: q().barButton,
                                    onClick: () => eY("rejected"),
                                    children: "Reject all"
                                  }),
                                  (0, a.jsxs)("button", {
                                    type: "button",
                                    className: K(
                                      q().barButton,
                                      q().primary
                                    ),
                                    onClick: () => eY("accepted"),
                                    children: [
                                      "Accept all",
                                      (0, a.jsx)(et, {
                                        children: g2 ? "\u2318\u21B5" : "Ctrl \u21B5"
                                      })
                                    ]
                                  })
                                ]
                              }) : null,
                              "empty" === e5 ? (0, a.jsxs)("div", {
                                className: q().bar,
                                role: "status",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: q().barLabel,
                                    children: "No changes suggested"
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: q().barButton,
                                    onClick: () => eP(),
                                    children: "Close"
                                  })
                                ]
                              }) : null,
                              "error" === e5 ? (0, a.jsxs)("div", {
                                className: q().bar,
                                role: "alert",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: q().barLabel,
                                    children: F2?.error ?? "The edit failed"
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: q().barButton,
                                    onClick: () => F2 && eH(F2.instruction),
                                    children: "Try again"
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: q().barButton,
                                    onClick: () => eP(),
                                    children: "Close"
                                  })
                                ]
                              }) : null,
                              "applied" === e5 && ei ? (0, a.jsxs)("div", {
                                className: q().bar,
                                role: "status",
                                children: [
                                  (0, a.jsx)(f.A, {
                                    className: K(
                                      q().barIcon,
                                      q().ok
                                    ),
                                    "aria-hidden": "true"
                                  }),
                                  (0, a.jsx)("span", {
                                    className: q().barLabel,
                                    children: ei.applied ? `Applied ${ei.applied} of ${ei.total}` : "Kept the original"
                                  }),
                                  ei.applied ? (0, a.jsxs)("button", {
                                    type: "button",
                                    className: q().barButton,
                                    onClick: eZ,
                                    children: [
                                      (0, a.jsx)(x.A, {
                                        "aria-hidden": "true"
                                      }),
                                      "Undo"
                                    ]
                                  }) : null
                                ]
                              }) : null
                            ]
                          },
                          e5
                        )
                      })
                    })
                  },
                  "layer"
                ) : null
              })
            ]
          })
        }),
        (0, a.jsxs)("footer", {
          className: q().footer,
          children: [
            (0, a.jsx)("span", { className: q().hint, children: e6 }),
            (0, a.jsxs)("span", {
              className: q().count,
              children: [
                (0, a.jsx)("span", { className: q().tabular, children: e4 }),
                " words"
              ]
            })
          ]
        })
      ]
    });
  }
  let er = ea;
};

__m(__module,__exports,__require);
});
A.cssFor("ai-inline-edit", [47145,76100]);
A.item("ai-inline-edit", {entry:99440, export:"AiInlineEdit", kind:"block", tier:"pro", unresolved:[]});
})();