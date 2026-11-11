/* mixture-of-experts (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(1766, ".demo{display:grid;width:100%;max-width:760px;margin-inline:auto}", {"demo":"demo"});
A.reg(31396, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => d });
  var a = r(51811);
  let n = {
    name: "sigma",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
          key: "wuwx1p"
        }
      ]
    ]
  };
  n.node;
  let d = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(38511, ".root{container-type:inline-size;width:100%;min-width:0}\n.card{--moe-first:var(--series-1);--moe-second:var(--series-2);--moe-line:var(--border);--moe-flow:var(--border-strong);--moe-ink:var(--foreground);display:grid;min-width:0;gap:var(--space-5);padding:var(--space-6);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);-webkit-tap-highlight-color:transparent}\n[data-theme=dark] .card{--moe-line:color-mix(in oklab,var(--border-strong) 70%,var(--border));--moe-flow:color-mix(in oklab,var(--text-muted) 55%,var(--border-strong))}\n@container (width < 480px){.card{gap:var(--space-4);padding:var(--space-4);border-radius:var(--radius-panel)}\n.card [data-rank=\"0\"]{--rank:var(--moe-first)}\n.card [data-rank=\"1\"]{--rank:var(--moe-second)}\n.card[data-inspect] .packets{opacity:0}\n.header{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-3) var(--space-4);min-width:0}\n.params{display:inline-flex;min-width:0;align-items:baseline;gap:6px;margin:0;white-space:nowrap}\n.params{order:2;flex-basis:100%}\n.paramsLabel{color:var(--text-secondary)}\n.paramsValue{display:inline-flex;align-items:baseline;color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums}\n.play{position:relative;display:grid;flex:none;place-items:center;width:32px;height:32px;margin-left:auto;padding:0;border:1px solid var(--border);border-radius:50%;background:var(--surface);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.play:hover:not(:disabled){border-color:var(--border-strong);color:var(--foreground)}\n.play:active:not(:disabled){background:var(--surface-muted)}\n.play:disabled{opacity:.5;cursor:default}\n@container (width < 480px){.play{order:1}\n.chip,.curve,.fill,.flow,.gate,.gauge,.packets,.play,.router,.score,.seg,.tileIcon,.tile,.token{transition-duration:0s}\n.playIcon{display:grid;place-items:center;grid-area:1/1}\n.roll{display:inline-flex;font-variant-numeric:tabular-nums}\n.digit{position:relative;display:inline-block;height:1.4em;overflow:hidden;line-height:1.4em;-webkit-mask-image:linear-gradient(180deg,transparent,#000 .2em,#000 calc(100% - .2em),transparent);mask-image:linear-gradient(180deg,transparent,#000 .2em,#000 calc(100% - .2em),transparent)}\n.sizer{visibility:hidden}\n.strip{position:absolute;inset:0 0 auto;display:flex;flex-direction:column;text-align:center}\n.strip>span{display:block;height:1.4em}\n.stage{position:relative;width:100%;min-width:0;height:var(--moe-narrow-h)}\n@container (width >= 568px){.stage:not([data-ready]){height:var(--moe-wide-h)}\n@container (width < 568px) and (width >= 480px){.stage:not([data-ready]){height:var(--moe-narrow-h)}\n.stage>*{animation:stageIn var(--duration-considered) var(--ease-standard) both}\n.stage[data-layout=narrow] .fill{transform:scaleY(var(--s,0));transform-origin:50% 100%}\n.stage[data-layout=narrow] .score{text-align:center}\n.stage[data-layout=narrow] .tile{flex-direction:column;justify-content:center;gap:6px;padding:0;border-radius:9px}\n.stage[data-layout=narrow] .tileName{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}\n.stage[data-layout=wide] .slot[data-side=in]{justify-items:end}\n.stage[data-layout=wide] .slot[data-side=out]{justify-items:start}\n@media (prefers-reduced-motion:reduce){.stage>*{animation:none}\n.lines,.packets{position:absolute;inset:0;overflow:visible;pointer-events:none}\n.packets{z-index:3;transition:opacity var(--duration-fast) var(--ease-standard)}\n.stageLabel{position:absolute;z-index:1;color:var(--text-muted);font-size:var(--text-xs);line-height:1;white-space:nowrap;transform:translateY(-50%);pointer-events:none}\n.stageLabel[data-align=center]{transform:translate(-50%,-50%)}\n.stageLabel[data-align=end]{transform:translate(-100%,-50%)}\n.curve,.flow,.gate{fill:none;stroke-width:1;stroke-linecap:round;transition:stroke var(--duration-standard) var(--ease-standard),stroke-width var(--duration-standard) var(--ease-standard)}\n.flow{stroke:var(--moe-flow)}\n.flow[data-on]{stroke:color-mix(in oklab,var(--moe-ink) 45%,var(--moe-flow))}\n.curve,.gate{stroke:var(--moe-line)}\n.curve[data-rank],.gate[data-rank]{stroke:color-mix(in oklab,var(--rank) 70%,transparent);stroke-width:1.5}\n.gate[data-dropped]{stroke:color-mix(in oklab,var(--warning) 70%,transparent);stroke-dasharray:3 3}\n.joint{fill:var(--surface);stroke:var(--moe-flow);stroke-width:1}\n.packet{--c:var(--rank)}\n.packet[data-slot=flow]{--c:var(--moe-ink)}\n.packet[data-slot=\"0\"]{--c:var(--moe-first)}\n.packet[data-slot=\"1\"]{--c:var(--moe-second)}\n.trailLong,.trailShort{fill:none;stroke:var(--c);stroke-linecap:round}\n.trailLong{stroke-width:2;stroke-opacity:.16}\n.trailShort{stroke-width:2;stroke-opacity:.38}\n.dot{fill:var(--c);stroke:var(--surface);stroke-width:1.5}\n.router{position:absolute;z-index:1;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface-muted);transition:border-color var(--duration-standard) var(--ease-standard)}\n.router[data-live]{border-color:color-mix(in oklab,var(--border-strong) 60%,var(--border))}\n[data-theme=dark] .router{background:color-mix(in oklab,var(--surface-muted) 70%,var(--surface))}\n.track{position:absolute;z-index:1;overflow:hidden;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 7%,transparent)}\n.track:not([data-live]) .fill{background:color-mix(in oklab,var(--text-muted) 30%,transparent)}\n.track[data-rank] .fill{background:var(--rank)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:color-mix(in oklab,var(--text-muted) 55%,transparent);transform:scaleX(var(--s,0));transform-origin:0 50%;transition:transform var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard)}\n.score{position:absolute;z-index:1;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:16px;text-align:right;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.score:not([data-live]){color:color-mix(in oklab,var(--text-muted) 60%,transparent)}\n.score[data-rank]{color:var(--foreground);font-weight:500}\n.tiles{display:contents}\n.tile{position:absolute;z-index:1;display:flex;box-sizing:border-box;align-items:center;gap:8px;overflow:hidden;padding:0 10px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:border-color var(--duration-considered) var(--ease-standard),background-color var(--duration-considered) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n.tile[data-full] .gauge{background:color-mix(in oklab,var(--text-secondary) 55%,transparent)}\n.tile[data-rank] .gauge{background:color-mix(in oklab,var(--rank) 70%,transparent)}\n@media (hover:hover) and (pointer:fine){.tile:hover{border-color:var(--border-strong)}\n.tile[data-inspect],.tile[data-pinned]{border-color:var(--border-strong);background:var(--surface-muted)}\n.tile[data-rank]{border-color:color-mix(in oklab,var(--rank) 55%,var(--border));background:color-mix(in oklab,var(--rank) 9%,var(--surface));transition-duration:var(--duration-fast)}\n.tile[data-rank] .tileIcon{color:var(--rank)}\n.tile[data-rank] .tileCount{color:var(--foreground)}\n.tile[data-dropped]{border-color:color-mix(in oklab,var(--warning) 55%,var(--border));border-style:dashed;transition-duration:var(--duration-fast)}\n.tile[data-dropped] .tileIcon{color:var(--warning)}\n.gauge{position:absolute;inset:auto 0 0;height:2px;background:color-mix(in oklab,var(--text-muted) 28%,transparent);transform:scaleX(var(--g,0));transform-origin:0 50%;transition:transform var(--duration-considered) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard);pointer-events:none}\n.tileIcon{position:relative;display:grid;flex:none;place-items:center;width:14px;height:14px;color:var(--text-muted);transition:color var(--duration-standard) var(--ease-standard)}\n.tileName{position:relative;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.tileCount{position:relative;flex:none;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.initial{font-size:var(--text-xs);font-weight:500;line-height:1}\n.slot{position:absolute;z-index:2;display:grid;align-items:center;justify-items:center;pointer-events:none}\n.chip{display:inline-flex;box-sizing:border-box;max-width:100%;height:28px;grid-area:1/1;align-items:center;gap:6px;overflow:hidden;padding:0 10px;border:1px solid var(--border-strong);border-radius:9px;background:var(--surface);color:var(--foreground);font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:pre;transition:color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard)}\n.chip[data-spent]{border-color:var(--border);color:var(--text-secondary)}\n.chip[data-empty]{border-style:dashed;border-color:var(--border-strong);color:var(--text-muted);font-weight:400}\n.chip[data-pass]{border-style:dashed}\n.chipDots{display:inline-flex;flex:none;gap:2px}\n.chipDots:empty{display:none}\n.chipDots i{width:6px;height:6px;border-radius:50%;background:var(--rank)}\n.sequence{display:flex;flex-wrap:wrap;align-items:center;gap:4px;min-width:0;padding-top:var(--space-4);border-top:1px solid var(--border)}\n.token{position:relative;display:inline-flex;box-sizing:border-box;height:28px;align-items:center;padding:0 8px;border:1px solid transparent;border-radius:8px;background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-sm);white-space:pre;cursor:pointer;transition:color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard)}\n.token[data-state=done]{background:var(--surface-muted);color:var(--foreground)}\n.token[data-state=current]{border-color:color-mix(in oklab,var(--foreground) 40%,var(--border-strong));background:var(--surface);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.token:hover{border-color:var(--border-strong);color:var(--foreground)}\n.token[aria-pressed=true],.token[data-inspect]{border-color:var(--moe-ink);background:var(--surface);color:var(--foreground)}\n.token[data-rank]{border-color:color-mix(in oklab,var(--rank) 55%,transparent);background:color-mix(in oklab,var(--rank) 12%,var(--surface));color:var(--foreground)}\n.token[data-dropped]{border-color:color-mix(in oklab,var(--warning) 60%,transparent);border-style:dashed;color:var(--foreground)}\n.token[data-fade]{opacity:.45}\n.sequenceEmpty{color:var(--text-muted)}\n.footer{display:grid;grid-template-columns:minmax(0,1fr) minmax(180px,220px);align-items:start;gap:var(--space-4) var(--space-8);min-width:0}\n@container (width < 640px){.footer{grid-template-columns:minmax(0,1fr)}\n.inspector{display:grid;min-width:0;gap:4px}\n.line{position:relative;display:grid;min-width:0;min-height:28px;align-items:center}\n.lineInner{display:flex;min-width:0;grid-area:1/1;align-items:center;gap:8px;overflow:hidden;white-space:nowrap}\n.lineChip{display:inline-flex;flex:none;height:24px;align-items:center;padding:0 8px;border:1px solid var(--border-strong);border-radius:7px;font-weight:500;white-space:pre}\n@container (width < 480px){.lineArrow,.lineChip{display:none}\n.lineArrow{flex:none;color:var(--text-muted)}\n.lineName{font-weight:500}\n.lineMeta,.lineMuted{color:var(--text-muted)}\n.loadValue .lineMuted{font-weight:400}\n.lineIcon{display:grid;flex:none;place-items:center;width:14px;height:14px;color:var(--text-secondary)}\n.lineShimmer{color:var(--text-secondary)}\n.pick{display:inline-flex;min-width:0;align-items:center;gap:6px}\n.pick+.pick{margin-left:4px}\n.pick[data-dropped] .pickName{color:var(--text-secondary)}\n.pick[data-dropped] .pickValue{color:var(--text-muted)}\n.swatch{flex:none;width:8px;height:8px;border-radius:50%;background:var(--rank)}\n.pickName{overflow:hidden;text-overflow:ellipsis}\n.pickValue{color:var(--text-secondary);font-variant-numeric:tabular-nums}\n.warnIcon{flex:none;color:var(--warning)}\n.okIcon{flex:none;color:var(--success)}\n.note{position:relative;display:grid;min-width:0;min-height:calc(2 * 1.4em)}\n.noteInner{display:flex;grid-area:1/1;align-items:flex-start;gap:6px;margin:0;color:var(--text-secondary);text-wrap:pretty}\n.noteInner>svg{margin-top:.2em}\n.tokenRef{padding:0 4px;border-radius:4px;background:var(--surface-muted);color:var(--foreground);white-space:pre}\n.load{display:grid;min-width:0;gap:10px;padding-top:4px}\n.loadHead{display:flex;align-items:baseline;justify-content:space-between;gap:var(--space-3);color:var(--text-secondary)}\n.loadValue{display:inline-flex;align-items:baseline;color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums}\n.loadBar{display:flex;height:8px;overflow:hidden;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 6%,transparent)}\n.seg{flex:0 1 0;min-width:0;background:color-mix(in oklab,var(--text-muted) 45%,transparent);background-clip:padding-box;border-left:2px solid var(--surface);transition:flex-grow var(--duration-considered) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),border-left-width var(--duration-considered) var(--ease-standard)}\n.seg:first-child,.seg[data-zero]{border-left-width:0}\n.seg[data-rank]{background:var(--rank)}\n.seg[data-inspect]{background:var(--text-secondary)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","card":"card","packets":"packets","header":"header","params":"params","paramsLabel":"paramsLabel","paramsValue":"paramsValue","play":"play","chip":"chip","curve":"curve","fill":"fill","flow":"flow","gate":"gate","gauge":"gauge","router":"router","score":"score","seg":"seg","tileIcon":"tileIcon","tile":"tile","token":"token","playIcon":"playIcon","roll":"roll","digit":"digit","sizer":"sizer","strip":"strip","stage":"stage","tileName":"tileName","slot":"slot","lines":"lines","stageLabel":"stageLabel","joint":"joint","packet":"packet","trailLong":"trailLong","trailShort":"trailShort","dot":"dot","track":"track","tiles":"tiles","tileCount":"tileCount","initial":"initial","chipDots":"chipDots","sequence":"sequence","sequenceEmpty":"sequenceEmpty","footer":"footer","inspector":"inspector","line":"line","lineInner":"lineInner","lineChip":"lineChip","lineArrow":"lineArrow","lineName":"lineName","lineMeta":"lineMeta","lineMuted":"lineMuted","loadValue":"loadValue","lineIcon":"lineIcon","lineShimmer":"lineShimmer","pick":"pick","pickName":"pickName","pickValue":"pickValue","swatch":"swatch","warnIcon":"warnIcon","okIcon":"okIcon","note":"note","noteInner":"noteInner","tokenRef":"tokenRef","load":"load","loadHead":"loadHead","loadBar":"loadBar","srOnly":"srOnly"});
A.reg(45739, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => d });
  var a = r(51811);
  let n = {
    name: "whole-word",
    size: 24,
    node: [
      ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
      ["path", { d: "M10 9v6", key: "17i7lo" }],
      ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
      ["path", { d: "M14 7v8", key: "dl84cr" }],
      [
        "path",
        { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }
      ]
    ]
  };
  n.node;
  let d = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(47421, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "hash",
    size: 24,
    node: [
      ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
      ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
      ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
      ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
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
A.reg(52427, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "calendar-days",
    size: 24,
    node: [
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }
      ],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "M8 13h.01", key: "1sbv64" }],
      ["path", { d: "M12 13h.01", key: "y0uutt" }],
      ["path", { d: "M16 13h.01", key: "wip0gl" }],
      ["path", { d: "M8 17h.01", key: "p3bg7i" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
      ["path", { d: "M16 17h.01", key: "ql8jdd" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(71485, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "quote",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
          key: "rib7q0"
        }
      ],
      [
        "path",
        {
          d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
          key: "1ymkrd"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(87427, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { MixtureOfExpertsDemo: () => Z, default: () => ee });
  var r = a(95155), s = a(12115), n = a(25354), i = a(18310), l = a(80642), o = a(11012), d = a(64962), u = a(90467), c = a(92298), p = a(36619), x = a(79267), m = a(66558), h = a(52898), f = a(36690), _ = a(7770), y = a(92782), g = a(47421), v = a(71485), k = a(88359), j = a(45739), b = a(49804), N = a(52427), w = a(31396);
  let $ = (e2) => (0, r.jsx)(e2, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), M = [
    {
      name: "Code",
      handles: "Commands, identifiers and keywords",
      icon: $(y.A)
    },
    { name: "Numbers", handles: "Digits, amounts and counts", icon: $(g.A) },
    {
      name: "Punctuation",
      handles: "Commas, periods and brackets",
      icon: $(v.A)
    },
    { name: "Names", handles: "People, products and places", icon: $(k.A) },
    {
      name: "Grammar",
      handles: "Short words such as on, then and the",
      icon: $(j.A)
    },
    { name: "Verbs", handles: "Actions and tense", icon: $(b.A) },
    { name: "Dates", handles: "Months, days and times", icon: $(N.A) },
    {
      name: "Symbols",
      handles: "Currency, units and math signs",
      icon: $(w.A)
    }
  ], A = { total: 671, shared: 5, perExpert: 16 };
  function S(e2) {
    let t2 = 2166136261;
    for (let a2 = 0; a2 < e2.length; a2++)
      t2 ^= e2.charCodeAt(a2), t2 = Math.imul(t2, 16777619);
    return t2 >>> 0;
  }
  function T(e2) {
    let t2 = e2.map((e3) => Number.isFinite(e3) && e3 > 0 ? e3 : 0), a2 = t2.reduce((e3, t3) => e3 + t3, 0);
    return a2 > 0 ? t2.map((e3) => e3 / a2) : t2.map(() => 1 / Math.max(1, t2.length));
  }
  function E(e2, t2, a2, r2, s2, n2) {
    let i2 = Math.max(0, 1 - s2 - n2), l2 = Array.from({ length: t2 }, (e3, t3) => t3).filter(
      (e3) => e3 !== a2 && e3 !== r2
    ), o2 = l2.map((t3) => 0.45 + S(`${e2}:${t3}`) % 1e3 / 1e3), d2 = o2.reduce((e3, t3) => e3 + t3, 0) || 1, u2 = Array(t2).fill(0);
    return u2[a2] = s2, r2 !== a2 && (u2[r2] = n2), l2.forEach((e3, t3) => {
      u2[e3] = Math.min(0.8 * n2, o2[t3] / d2 * i2);
    }), T(u2);
  }
  let L = [
    ["Maya", 3, 5, 0.46, 0.21],
    [" paid", 5, 7, 0.42, 0.2],
    [" $", 7, 1, 0.51, 0.24],
    ["1", 1, 7, 0.48, 0.19],
    [",", 2, 1, 0.44, 0.22],
    ["240", 1, 2, 0.53, 0.17],
    [" on", 4, 6, 0.39, 0.23],
    [" Oct", 6, 3, 0.47, 0.2],
    [" 21", 6, 1, 0.41, 0.29],
    [",", 2, 4, 0.5, 0.18],
    [" then", 4, 5, 0.43, 0.21],
    [" ran", 5, 0, 0.4, 0.24],
    [" npm", 0, 3, 0.55, 0.18],
    [" test", 0, 5, 0.45, 0.26],
    [".", 2, 4, 0.49, 0.2]
  ].map(([e2, t2, a2, r2, s2]) => ({
    text: e2,
    scores: E(e2, M.length, t2, a2, r2, s2)
  })), I = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2));
  function R(e2, t2) {
    let a2 = Math.hypot(t2.x - e2.x, t2.y - e2.y);
    return {
      d: `M${e2.x.toFixed(1)} ${e2.y.toFixed(1)}L${t2.x.toFixed(1)} ${t2.y.toFixed(1)}`,
      len: a2,
      at: (r2) => {
        let s2 = a2 ? I(r2 / a2, 0, 1) : 1;
        return { x: e2.x + (t2.x - e2.x) * s2, y: e2.y + (t2.y - e2.y) * s2 };
      }
    };
  }
  function F(e2, t2, a2, r2) {
    let s2 = (s3) => {
      let n3 = 1 - s3, i3 = n3 * n3 * n3, l3 = 3 * n3 * n3 * s3, o2 = 3 * n3 * s3 * s3, d2 = s3 * s3 * s3;
      return {
        x: i3 * e2.x + l3 * t2.x + o2 * a2.x + d2 * r2.x,
        y: i3 * e2.y + l3 * t2.y + o2 * a2.y + d2 * r2.y
      };
    }, n2 = [0], i2 = e2;
    for (let e3 = 1; e3 <= 40; e3++) {
      let t3 = s2(e3 / 40);
      n2.push(n2[e3 - 1] + Math.hypot(t3.x - i2.x, t3.y - i2.y)), i2 = t3;
    }
    let l2 = n2[40];
    return {
      d: `M${e2.x.toFixed(1)} ${e2.y.toFixed(1)}C${t2.x.toFixed(1)} ${t2.y.toFixed(1)} ${a2.x.toFixed(1)} ${a2.y.toFixed(1)} ${r2.x.toFixed(1)} ${r2.y.toFixed(1)}`,
      len: l2,
      at: (e3) => {
        let t3 = I(e3, 0, l2), a3 = 1;
        for (; a3 < 40 && n2[a3] < t3; ) a3++;
        let r3 = n2[a3] - n2[a3 - 1] || 1;
        return s2((a3 - 1 + (t3 - n2[a3 - 1]) / r3) / 40);
      }
    };
  }
  var C = a(38511), z = a.n(C);
  let P = {
    enter: 0,
    in: 1,
    gate: 2,
    dispatch: 3,
    expert: 4,
    merge: 5,
    out: 6,
    done: 7
  }, W = {
    in: 0.18,
    gate: 0.5,
    dispatch: 0.78,
    expert: 1.16,
    merge: 1.4,
    join: 1.68,
    out: 1.86,
    next: 2.2
  }, O = {
    in: 0,
    gate: 0,
    dispatch: 0.6,
    expert: 0.6,
    merge: 1.1,
    join: 1.1,
    out: 1.1,
    next: 1.8
  }, B = (e2) => `${Math.round(100 * e2)}%`, D = ["first", "second"], q = {
    initial: { opacity: 0, y: 2 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: _.T.duration.fast,
        ease: [..._.T.ease.standard]
      }
    },
    exit: { opacity: 0, transition: { duration: 0.1 } }
  }, V = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function Y({ digit: e2, reduced: t2 }) {
    return (0, r.jsxs)("span", {
      className: z().digit,
      children: [
        (0, r.jsx)("span", { className: z().sizer, children: "0" }),
        (0, r.jsx)(n.PY1.span, {
          className: z().strip,
          initial: false,
          animate: { y: `${-(10 * e2)}%` },
          transition: t2 ? { duration: 0 } : _.T.spring.smooth,
          children: "0123456789".split("").map((e3) => (0, r.jsx)("span", { children: e3 }, e3))
        })
      ]
    });
  }
  function U({ value: e2, reduced: t2 }) {
    let a2 = String(Math.max(0, Math.round(e2)));
    return (0, r.jsx)("span", {
      className: z().roll,
      "aria-hidden": "true",
      children: a2.split("").map((e3, s2) => (0, r.jsx)(Y, { digit: +e3, reduced: t2 }, a2.length - s2))
    });
  }
  let H = () => () => {
  }, K = (e2) => ({ left: e2.x, top: e2.y, width: e2.w, height: e2.h }), J = (e2) => (0, r.jsx)("span", {
    className: z().initial,
    children: e2.trim().charAt(0) || "?"
  });
  function G({
    tokens: e2 = L,
    experts: t2 = M,
    topK: a2,
    defaultTopK: y2 = 2,
    onTopKChange: g2,
    parameters: v2 = A,
    capacityFactor: k2 = 1,
    speed: j2 = 1,
    paused: b2,
    defaultPaused: N2 = false,
    onPausedChange: w2,
    loop: $2 = true,
    onRoute: C2,
    label: Y2 = "Mixture of experts routing",
    className: Q2,
    style: X2
  }) {
    let Z2, ee2, et, ea = (0, i.I)(), er = (0, s.useSyncExternalStore)(
      H,
      () => true,
      () => false
    ) && !!ea, es = (0, s.useMemo)(() => t2.slice(0, 12), [t2]), en = Math.max(1, es.length), ei = e2.length, [el, eo] = (0, s.useState)(y2), ed = a2 ?? el, [eu, ec] = (0, s.useState)(N2), ep = b2 ?? eu, ex = (0, s.useCallback)(
      (e10) => {
        void 0 === b2 && ec(e10), w2?.(e10);
      },
      [b2, w2]
    ), em = !Number.isFinite(k2) || k2 <= 0 || en < 1 ? 1 / 0 : Math.max(1, Math.ceil(k2 * ei * ed / en)), eh = (0, s.useMemo)(() => {
      let t3;
      return t3 = Array(en).fill(0), e2.map((e10, a3) => {
        var r2;
        let s2 = e10.scores && e10.scores.length ? Array.from({ length: en }, (t4, a4) => e10.scores?.[a4] ?? 0) : null, n2 = s2 ? T(s2) : (function(e11, t4) {
          if (t4 <= 1) return [1];
          let a4 = S(e11.trim() || e11), r3 = a4 % t4;
          return E(
            e11,
            t4,
            r3,
            (r3 + 1 + (a4 >>> 8) % (t4 - 1)) % t4,
            0.38 + (a4 >>> 4) % 100 / 100 * 0.17,
            0.16 + (a4 >>> 12) % 100 / 100 * 0.1
          );
        })(e10.text, en), i2 = (r2 = Math.min(ed, en), n2.map((e11, t4) => ({ v: e11, i: t4 })).sort((e11, t4) => t4.v - e11.v || e11.i - t4.i).slice(0, Math.max(1, r2)).map((e11) => e11.i)), l2 = i2.map((e11) => n2[e11]), o2 = l2.reduce((e11, t4) => e11 + t4, 0) || 1, d2 = [];
        return i2.forEach((e11) => {
          t3[e11] >= em ? d2.push(e11) : t3[e11] += 1;
        }), {
          index: a3,
          token: e10.text.trim() || e10.text,
          scores: n2,
          experts: i2,
          weights: l2.map((e11) => e11 / o2),
          dropped: d2,
          loads: t3.slice()
        };
      });
    }, [e2, en, ed, em]), ef = (0, s.useMemo)(() => Array(en).fill(0), [en]), e_ = (0, s.useRef)(null), [ey, eg] = (0, s.useState)(0);
    (0, s.useLayoutEffect)(() => {
      let e10 = e_.current;
      if (!e10 || (eg(e10.clientWidth), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(([e11]) => eg(Math.round(e11.contentRect.width)));
      return t3.observe(e10), () => t3.disconnect();
    }, []);
    let ev = (0, s.useMemo)(() => {
      var e10, t3, a3, r2;
      let s2, n2, i2, l2, o2, d2, u2, c2, p2, x2, m2, h2, f2, _2, y3, g3, v3, k3, j3, b3, N3, w3, $3, M2, A2, S2, T2, E2;
      return ey > 0 ? (s2 = Math.max(240, ey)) >= 520 ? (e10 = s2, i2 = 32 + (n2 = 28 * (t3 = en) + (t3 - 1) * 4) / 2, l2 = Math.round(I(0.12 * e10, 64, 92)), o2 = Math.round(I(0.22 * e10, 124, 168)), d2 = Math.round(I(0.26 * e10, 148, 196)), u2 = e10 - 2 * l2 - o2 - d2, x2 = (p2 = (c2 = l2 + Math.round(0.27 * u2)) + o2 + Math.round(0.33 * u2)) + d2, h2 = Math.round(x2 + ((m2 = e10 - l2) - x2) * 0.62), f2 = (e11) => 32 + 32 * e11 + 14, _2 = Array.from({ length: t3 }, (e11, t4) => t4), y3 = (h2 - x2) * 0.6, {
        w: e10,
        h: 32 + n2 + 10,
        wide: true,
        intake: { x: 0, y: i2 - 14, w: l2, h: 28 },
        output: { x: m2, y: i2 - 14, w: l2, h: 28 },
        router: { x: c2, y: 22, w: o2, h: n2 + 20 },
        tracks: _2.map((e11) => ({
          x: c2 + 12,
          y: f2(e11) - 2,
          w: o2 - 24 - 30 - 6,
          h: 4
        })),
        scores: _2.map((e11) => ({
          x: c2 + o2 - 12 - 30,
          y: f2(e11) - 8,
          w: 30,
          h: 16
        })),
        tiles: _2.map((e11) => ({ x: p2, y: 32 + 32 * e11, w: d2, h: 28 })),
        inSeg: R({ x: l2, y: i2 }, { x: c2, y: i2 }),
        gates: _2.map(
          (e11) => R({ x: c2 + o2, y: f2(e11) }, { x: p2, y: f2(e11) })
        ),
        curves: _2.map(
          (e11) => F(
            { x: x2, y: f2(e11) },
            { x: x2 + y3, y: f2(e11) },
            { x: h2 - 0.55 * y3, y: i2 },
            { x: h2, y: i2 }
          )
        ),
        outSeg: R({ x: h2, y: i2 }, { x: m2, y: i2 }),
        merge: { x: h2, y: i2 },
        labels: [
          { text: "Input", x: l2, y: 11, align: "end" },
          { text: "Router", x: c2 + o2 / 2, y: 11, align: "center" },
          { text: "Experts", x: p2 + d2 / 2, y: 11, align: "center" },
          { text: "Output", x: m2, y: 11, align: "start" }
        ]
      }) : (a3 = s2, g3 = (r2 = en) > 6 ? 4 : 6, v3 = (a3 - (r2 - 1) * g3) / r2, k3 = (e11) => e11 * (v3 + g3) + v3 / 2, j3 = Array.from({ length: r2 }, (e11, t4) => t4), b3 = a3 / 2, N3 = Math.min(180, 0.5 * a3), w3 = 50, $3 = 80, M2 = 50, A2 = 164, S2 = 242, T2 = 258, E2 = 18.2, {
        w: a3,
        h: 286,
        wide: false,
        intake: { x: b3 - N3 / 2, y: 0, w: N3, h: 28 },
        output: { x: b3 - N3 / 2, y: 258, w: N3, h: 28 },
        router: { x: 0, y: 50, w: a3, h: 92 },
        tracks: j3.map((e11) => ({ x: k3(e11) - 2, y: $3, w: 4, h: M2 })),
        scores: j3.map((e11) => ({
          x: k3(e11) - v3 / 2,
          y: w3 + 8,
          w: v3,
          h: 16
        })),
        tiles: j3.map((e11) => ({ x: e11 * (v3 + g3), y: A2, w: v3, h: 52 })),
        inSeg: R({ x: b3, y: 28 }, { x: b3, y: w3 }),
        gates: j3.map(
          (e11) => R({ x: k3(e11), y: w3 + 92 }, { x: k3(e11), y: A2 })
        ),
        curves: j3.map(
          (e11) => F(
            { x: k3(e11), y: A2 + 52 },
            { x: k3(e11), y: A2 + 52 + E2 },
            { x: b3, y: S2 - 0.5 * E2 },
            { x: b3, y: S2 }
          )
        ),
        outSeg: R({ x: b3, y: S2 }, { x: b3, y: T2 }),
        merge: { x: b3, y: S2 },
        labels: [
          { text: "Input", x: 0, y: 14, align: "start" },
          { text: "Output", x: 0, y: T2 + 14, align: "start" }
        ]
      }) : null;
    }, [ey, en]), ek = (0, s.useRef)(null), [ej, eb] = (0, s.useState)(true);
    (0, s.useEffect)(() => {
      let e10 = ek.current;
      if (!e10 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e11]) => eb(e11.isIntersecting), {
        rootMargin: "80px"
      });
      return t3.observe(e10), () => t3.disconnect();
    }, []);
    let [eN, ew] = (0, s.useState)(null), [e$, eM] = (0, s.useState)(null), [eA, eS] = (0, s.useState)(null), eT = eN ?? e$ ?? eA, [eE, eL] = (0, s.useState)(0), [eI, eR] = (0, s.useState)(0), [eF, eC] = (0, s.useState)(""), [ez, eP] = (0, s.useState)({ index: 0, phase: "enter", cycle: 0 }), eW = (0, s.useRef)({ t: 0, index: 0, phase: "enter", cycle: 0 }), eO = er ? O : W, eB = "done" === ez.phase && (!$2 || er), eD = !ep && !eT && ej && !!ev && ei > 0 && j2 > 0 && !eB, eq = (0, s.useRef)([]), eV = (0, s.useRef)({ geo: ev, plan: eh, T: eO, reduced: er });
    (0, s.useEffect)(() => {
      eV.current = { geo: ev, plan: eh, T: eO, reduced: er };
    });
    let eY = (0, s.useCallback)(() => {
      let { geo: e10, plan: t3, T: a3, reduced: r2 } = eV.current, { t: s2, index: n2, phase: i2 } = eW.current, l2 = t3[n2], o2 = [null, null, null, null, null, null];
      if (e10 && l2 && !r2 && "done" !== i2) {
        let t4 = (e11, t5) => {
          let a4;
          return s2 >= e11 && s2 < t5 ? (a4 = (s2 - e11) / (t5 - e11)) < 0.5 ? 4 * a4 * a4 * a4 : 1 - Math.pow(-2 * a4 + 2, 3) / 2 : -1;
        }, r3 = t4(a3.in, a3.gate);
        r3 >= 0 && (o2[0] = { seg: e10.inSeg, at: r3 });
        let n3 = t4(a3.dispatch, a3.expert), i3 = t4(a3.merge, a3.join), d2 = t4(a3.join, a3.out);
        l2.experts.forEach((t5, a4) => {
          n3 >= 0 && (o2[1 + a4] = {
            seg: e10.gates[t5],
            at: l2.dropped.includes(t5) ? 0.92 * n3 : n3
          }), i3 >= 0 && !l2.dropped.includes(t5) && (o2[3 + a4] = { seg: e10.curves[t5], at: i3 });
        }), d2 >= 0 && l2.dropped.length < l2.experts.length && (o2[5] = { seg: e10.outSeg, at: d2 });
      }
      o2.forEach((e11, t4) => {
        let a4 = eq.current[t4];
        if (!a4) return;
        if (!e11) {
          a4.style.opacity = "0";
          return;
        }
        let [r3, s3, n3] = a4.children, { seg: i3, at: l3 } = e11, o3 = l3 * i3.len, d2 = Math.min(34, 0.7 * i3.len);
        r3.getAttribute("d") !== i3.d && (r3.setAttribute("d", i3.d), s3.setAttribute("d", i3.d)), r3.setAttribute("stroke-dasharray", `${d2} ${i3.len + d2}`), r3.setAttribute("stroke-dashoffset", `${d2 - o3}`), s3.setAttribute("stroke-dasharray", `${0.45 * d2} ${i3.len + d2}`), s3.setAttribute("stroke-dashoffset", `${0.45 * d2 - o3}`);
        let u2 = i3.at(o3);
        n3.setAttribute("cx", u2.x.toFixed(2)), n3.setAttribute("cy", u2.y.toFixed(2)), a4.style.opacity = "1";
      });
    }, []);
    (0, s.useEffect)(() => {
      if (!eD) return;
      let e10 = 0, t3 = performance.now(), a3 = (r2) => {
        let s2, n2 = eW.current, { T: i2, plan: l2, reduced: o2 } = eV.current;
        n2.t += Math.min(0.05, (r2 - t3) / 1e3) * j2, t3 = r2, "done" === n2.phase ? n2.t >= 3.6 && $2 && !o2 && (n2.t = 0, n2.index = 0, n2.cycle += 1, n2.phase = "enter") : n2.t >= i2.next && (n2.index + 1 < l2.length ? (n2.index += 1, n2.t -= i2.next) : (n2.phase = "done", n2.t = 0)), "done" !== n2.phase && (s2 = n2.t, n2.phase = s2 < i2.in ? "enter" : s2 < i2.gate ? "in" : s2 < i2.dispatch ? "gate" : s2 < i2.expert ? "dispatch" : s2 < i2.merge ? "expert" : s2 < i2.out ? "merge" : "out"), eP(
          (e11) => e11.index === n2.index && e11.phase === n2.phase && e11.cycle === n2.cycle ? e11 : { index: n2.index, phase: n2.phase, cycle: n2.cycle }
        ), eY(), ("done" !== n2.phase || $2 && !o2) && (e10 = requestAnimationFrame(a3));
      };
      return e10 = requestAnimationFrame(a3), () => cancelAnimationFrame(e10);
    }, [eD, j2, $2, eY]), (0, s.useEffect)(() => {
      eY();
    }, [ev, eh, eY]), (0, s.useEffect)(() => {
      eW.current.index < ei || (eW.current = {
        t: 0,
        index: 0,
        phase: "enter",
        cycle: eW.current.cycle + 1
      }, eP({ index: 0, phase: "enter", cycle: eW.current.cycle }));
    }, [ei]);
    let eU = (0, s.useRef)(C2);
    (0, s.useEffect)(() => {
      eU.current = C2;
    });
    let eH = (0, s.useRef)("");
    (0, s.useEffect)(() => {
      let e10 = eh[ez.index];
      if (!e10 || P[ez.phase] < P.dispatch || "done" === ez.phase) return;
      let t3 = `${ez.cycle}:${ez.index}`;
      eH.current !== t3 && (eH.current = t3, eU.current?.({
        index: e10.index,
        token: e10.token,
        scores: e10.scores,
        experts: e10.experts,
        weights: e10.weights,
        dropped: e10.dropped
      }));
    }, [ez, eh]);
    let eK = P[ez.phase], eJ = "done" === ez.phase, eG = eh[ez.index], eQ = ez.index > 0 ? eh[ez.index - 1] : void 0, eX = eT?.kind === "token" ? eh[eT.index] : void 0, eZ = eT?.kind === "expert" ? eT.index : null, e0 = eJ ? eh[ei - 1]?.loads ?? ef : eK >= P.expert ? eG?.loads ?? ef : eQ?.loads ?? ef, e1 = eX ? eX.loads : e0, e22 = eX ? {
      bars: eX,
      barsLive: true,
      gates: eX,
      curves: eX,
      lit: eX,
      input: eX.index,
      inputSpent: false,
      output: eX.index
    } : {
      bars: eJ ? eh[ei - 1] : eK >= P.gate ? eG : eQ,
      barsLive: !eJ && eK >= P.gate,
      gates: !eJ && null === eZ && eK >= P.dispatch && eK <= P.expert ? eG : void 0,
      curves: eJ || null !== eZ || eK !== P.merge ? void 0 : eG,
      lit: !eJ && null === eZ && eK >= P.expert ? eG : void 0,
      input: eJ || !eG ? null : ez.index,
      inputSpent: eK >= P.gate,
      output: eJ ? ei - 1 : eK >= P.out ? ez.index : ez.index - 1
    }, e5 = (e10, t3) => e10 ? e10.experts.indexOf(t3) : -1, e4 = v2.shared + ed * v2.perExpert, e8 = (function(e10) {
      let t3 = e10.reduce((e11, t4) => e11 + t4, 0);
      if (!t3 || e10.length < 2) return null;
      let a3 = t3 / e10.length;
      return Math.max(0, 1 - (Math.max(...e10) / a3 - 1) / (e10.length - 1));
    })(e1), e6 = e1.reduce((e10, t3) => e10 + t3, 0), e3 = (e10) => {
      try {
        return e10.currentTarget.matches(":focus-visible");
      } catch {
        return true;
      }
    }, e7 = (e10) => {
      let t3 = eA && eA.kind === e10.kind && eA.index === e10.index;
      eS(t3 ? null : e10);
      let a3 = "token" === e10.kind ? eh[e10.index]?.token : es[e10.index]?.name;
      eC(
        t3 ? "Unpinned, routing resumes" : `Pinned ${a3}. Press Escape to resume.`
      );
    }, e9 = (0, s.useRef)([]), te = (0, s.useRef)([]), tt = (e10, t3, a3, r2, s2) => {
      let n2 = a3 - 1, i2 = "ArrowRight" === e10.key || "ArrowDown" === e10.key ? Math.min(n2, t3 + 1) : "ArrowLeft" === e10.key || "ArrowUp" === e10.key ? Math.max(0, t3 - 1) : "Home" === e10.key ? 0 : "End" === e10.key ? n2 : -1;
      i2 < 0 || (e10.preventDefault(), s2(i2), r2[i2]?.focus());
    }, ta = eB ? "Route again" : ep || eA ? "Play" : "Pause", tr = {
      "--moe-wide-h": `${42 + 28 * en + (en - 1) * 4}px`,
      "--moe-narrow-h": `${286}px`,
      ...ev ? { height: ev.h } : null
    }, ts = er ? V : q, tn = (e10) => es[e10]?.name ?? `Expert ${e10 + 1}`, ti = (e10) => (0, r.jsx)("span", { className: z().tokenRef, children: e10 }), tl = (e10) => e10.map(tn).join(" and "), to = eX ?? (!eJ && eK >= P.gate ? eG : void 0);
    if (0 === ei)
      Z2 = "empty", ee2 = (0, r.jsx)("span", {
        className: z().lineMuted,
        children: "No tokens yet"
      }), et = { text: "Pass tokens to see how the gate routes them." };
    else if (null !== eZ) {
      let e10 = es[eZ], t3 = e1[eZ] ?? 0;
      Z2 = `expert-${eZ}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)("span", {
            className: z().lineIcon,
            children: e10?.icon ?? J(e10?.name ?? "")
          }),
          (0, r.jsx)("span", { className: z().lineName, children: tn(eZ) }),
          (0, r.jsx)("span", {
            className: z().lineMeta,
            children: Number.isFinite(em) ? `${t3} of ${em} tokens` : `${t3} ${1 === t3 ? "token" : "tokens"}`
          })
        ]
      });
      let a3 = Number.isFinite(em) && t3 >= em;
      et = {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            e10?.handles ? `Tends to handle ${e10.handles.charAt(0).toLowerCase()}${e10.handles.slice(1)}.` : "Takes whatever the gate sends it.",
            a3 ? " It is full, so later tokens skip it." : ""
          ]
        })
      };
    } else if (eJ && !eX)
      Z2 = `done-${ed}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(d.A, {
            size: 14,
            strokeWidth: 1.75,
            className: z().okIcon,
            "aria-hidden": "true"
          }),
          (0, r.jsxs)("span", {
            className: z().lineName,
            children: ["Routed ", ei, " ", 1 === ei ? "token" : "tokens"]
          })
        ]
      }), et = {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            "Each token used ",
            ed,
            " of ",
            en,
            " experts, so only ",
            e4,
            "B of ",
            v2.total,
            "B parameters ran."
          ]
        })
      };
    else if (to) {
      let e10;
      Z2 = `route-${to.index}-${ed}-${eX ? "still" : ez.cycle}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)("span", { className: z().lineChip, children: to.token }),
          (0, r.jsx)(u.A, {
            size: 14,
            strokeWidth: 1.75,
            className: z().lineArrow,
            "aria-hidden": "true"
          }),
          to.experts.map((e11, t3) => {
            let a3 = to.dropped.includes(e11);
            return (0, r.jsxs)(
              "span",
              {
                className: z().pick,
                "data-rank": t3,
                "data-dropped": a3 || void 0,
                children: [
                  a3 ? (0, r.jsx)(o.A, {
                    size: 12,
                    strokeWidth: 1.75,
                    className: z().warnIcon,
                    "aria-hidden": "true"
                  }) : (0, r.jsx)("span", {
                    className: z().swatch,
                    "aria-hidden": "true"
                  }),
                  (0, r.jsx)("span", {
                    className: z().pickName,
                    children: tn(e11)
                  }),
                  (0, r.jsx)("span", {
                    className: z().pickValue,
                    children: a3 ? "full" : B(to.weights[t3])
                  })
                ]
              },
              e11
            );
          })
        ]
      }), e10 = to.experts.filter((e11) => !to.dropped.includes(e11)), et = to.dropped.length && e10.length ? {
        icon: (0, r.jsx)(o.A, {
          size: 14,
          strokeWidth: 1.75,
          className: z().warnIcon,
          "aria-hidden": "true"
        }),
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tl(to.dropped),
            " is at capacity, so only ",
            tn(e10[0]),
            " processes ",
            ti(to.token),
            "."
          ]
        })
      } : to.dropped.length ? {
        icon: (0, r.jsx)(o.A, {
          size: 14,
          strokeWidth: 1.75,
          className: z().warnIcon,
          "aria-hidden": "true"
        }),
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tl(to.dropped),
            " is at capacity, so ",
            ti(to.token),
            " passes through unchanged."
          ]
        })
      } : 1 === to.experts.length ? {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tn(to.experts[0]),
            " processes ",
            ti(to.token),
            " alone. The other ",
            en - 1,
            " experts stay idle."
          ]
        })
      } : {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tl(to.experts),
            " process ",
            ti(to.token),
            ". Their outputs blend ",
            to.weights.map((e11) => Math.round(100 * e11)).join(" to "),
            "."
          ]
        })
      };
    } else
      Z2 = `scoring-${ez.index}-${ez.cycle}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          eG && (0, r.jsx)("span", {
            className: z().lineChip,
            children: eG.token
          }),
          (0, r.jsx)(u.A, {
            size: 14,
            strokeWidth: 1.75,
            className: z().lineArrow,
            "aria-hidden": "true"
          }),
          (0, r.jsx)(h.n, {
            className: z().lineShimmer,
            active: !ep,
            children: `Scoring ${en} experts`
          })
        ]
      }), et = {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            "The gate scores every expert. The top ",
            ed,
            " ",
            1 === ed ? "takes" : "take",
            " the token."
          ]
        })
      };
    return (0, r.jsx)("div", {
      ref: ek,
      className: `${z().root} ${Q2 ?? ""}`,
      style: X2,
      children: (0, r.jsxs)("div", {
        className: z().card,
        role: "group",
        "aria-label": Y2,
        onKeyDown: (e10) => {
          "Escape" === e10.key && eA && (eS(null), eC("Unpinned, routing resumes"));
        },
        "data-inspect": eT ? eT.kind : void 0,
        "data-reduced": er || void 0,
        children: [
          (0, r.jsxs)("div", {
            className: z().header,
            children: [
              (0, r.jsx)(m.A, {
                label: "Experts per token",
                options: [
                  { value: "1", label: "Top 1" },
                  { value: "2", label: "Top 2" }
                ],
                value: String(ed),
                onValueChange: (e10) => {
                  let t3 = "1" === e10 ? 1 : 2;
                  t3 !== ed && (void 0 === a2 && eo(t3), g2?.(t3), eC(
                    `Top ${t3}: ${v2.shared + t3 * v2.perExpert}B of ${v2.total}B parameters active per token`
                  ));
                }
              }),
              (0, r.jsxs)("p", {
                className: z().params,
                children: [
                  (0, r.jsx)("span", {
                    className: z().paramsLabel,
                    children: "Active parameters"
                  }),
                  (0, r.jsxs)("span", {
                    className: z().paramsValue,
                    children: [(0, r.jsx)(U, { value: e4, reduced: er }), "B"]
                  }),
                  (0, r.jsxs)("span", {
                    className: z().paramsLabel,
                    children: ["of ", v2.total, "B"]
                  }),
                  (0, r.jsxs)("span", {
                    className: z().srOnly,
                    children: [
                      e4,
                      "B of ",
                      v2.total,
                      "B parameters active per token"
                    ]
                  })
                ]
              }),
              (0, r.jsx)(f.m, {
                content: ta,
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: z().play,
                  "aria-label": ta,
                  onClick: () => {
                    if (eB) {
                      eW.current = {
                        t: 0,
                        index: 0,
                        phase: "enter",
                        cycle: eW.current.cycle + 1
                      }, eP({
                        index: 0,
                        phase: "enter",
                        cycle: eW.current.cycle
                      }), ex(false), eS(null), eC("Routing again from the first token");
                      return;
                    }
                    if (eA) {
                      eS(null), ex(false), eC("Routing resumes");
                      return;
                    }
                    ex(!ep), eC(ep ? "Routing resumes" : "Paused");
                  },
                  disabled: 0 === ei,
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      n.PY1.span,
                      {
                        className: z().playIcon,
                        ...ts,
                        children: eB ? (0, r.jsx)(c.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : "Play" === ta ? (0, r.jsx)(p.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : (0, r.jsx)(x.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      },
                      ta
                    )
                  })
                })
              })
            ]
          }),
          (0, r.jsx)("div", {
            ref: e_,
            className: z().stage,
            style: tr,
            "data-ready": ev ? "" : void 0,
            "data-layout": ev ? ev.wide ? "wide" : "narrow" : void 0,
            children: ev && (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("svg", {
                  className: z().lines,
                  width: ev.w,
                  height: ev.h,
                  viewBox: `0 0 ${ev.w} ${ev.h}`,
                  "aria-hidden": "true",
                  children: [
                    (0, r.jsx)("path", {
                      className: z().flow,
                      d: ev.inSeg.d,
                      "data-on": null === e22.input || e22.inputSpent ? void 0 : ""
                    }),
                    ev.gates.map((e10, t3) => {
                      let a3 = e5(e22.gates, t3);
                      return (0, r.jsx)(
                        "path",
                        {
                          className: z().gate,
                          d: e10.d,
                          "data-rank": a3 >= 0 ? a3 : void 0,
                          "data-dropped": a3 >= 0 && e22.gates?.dropped.includes(t3) ? "" : void 0
                        },
                        t3
                      );
                    }),
                    ev.curves.map((e10, t3) => {
                      let a3 = e5(e22.curves, t3), s2 = !!e22.curves?.dropped.includes(t3);
                      return (0, r.jsx)(
                        "path",
                        {
                          className: z().curve,
                          d: e10.d,
                          "data-rank": a3 >= 0 && !s2 ? a3 : void 0
                        },
                        t3
                      );
                    }),
                    (0, r.jsx)("path", {
                      className: z().flow,
                      d: ev.outSeg.d
                    }),
                    (0, r.jsx)("circle", {
                      className: z().joint,
                      cx: ev.merge.x,
                      cy: ev.merge.y,
                      r: 2.5
                    })
                  ]
                }),
                ev.labels.map(
                  (e10) => (0, r.jsx)(
                    "span",
                    {
                      className: z().stageLabel,
                      "data-align": e10.align,
                      style: { left: e10.x, top: e10.y },
                      children: e10.text
                    },
                    e10.text
                  )
                ),
                (0, r.jsx)("div", {
                  className: z().router,
                  style: K(ev.router),
                  "data-live": e22.barsLive ? "" : void 0,
                  "aria-hidden": "true"
                }),
                ev.tracks.map((e10, t3) => {
                  let a3 = e22.bars?.scores[t3] ?? 0, s2 = e22.barsLive ? e5(e22.bars, t3) : -1;
                  return (0, r.jsx)(
                    "span",
                    {
                      className: z().track,
                      style: K(e10),
                      "data-rank": s2 >= 0 ? s2 : void 0,
                      "data-live": e22.barsLive ? "" : void 0,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("span", {
                        className: z().fill,
                        style: { "--s": e22.bars ? a3 : 0 }
                      })
                    },
                    t3
                  );
                }),
                ev.scores.map((e10, t3) => {
                  let a3 = e22.barsLive ? e5(e22.bars, t3) : -1;
                  return (0, r.jsx)(
                    "span",
                    {
                      className: z().score,
                      style: K(e10),
                      "data-rank": a3 >= 0 ? a3 : void 0,
                      "data-live": e22.barsLive ? "" : void 0,
                      "aria-hidden": "true",
                      children: e22.bars ? B(e22.bars.scores[t3] ?? 0) : "0%"
                    },
                    t3
                  );
                }),
                (0, r.jsx)("div", {
                  className: z().tiles,
                  role: "group",
                  "aria-label": "Experts",
                  children: ev.tiles.map((e10, t3) => {
                    let a3 = es[t3], s2 = e5(e22.lit, t3), n2 = s2 >= 0 && !!e22.lit?.dropped.includes(t3), i2 = e1[t3] ?? 0, l2 = Number.isFinite(em) && i2 >= em;
                    return (0, r.jsxs)(
                      "button",
                      {
                        ref: (e11) => {
                          te.current[t3] = e11;
                        },
                        type: "button",
                        className: z().tile,
                        style: {
                          ...K(e10),
                          "--g": Number.isFinite(em) ? Math.min(1, i2 / em) : 0
                        },
                        "data-rank": s2 >= 0 && !n2 ? s2 : void 0,
                        "data-dropped": n2 || void 0,
                        "data-full": l2 || void 0,
                        "data-inspect": eZ === t3 || void 0,
                        "data-pinned": eA?.kind === "expert" && eA.index === t3 ? "" : void 0,
                        tabIndex: t3 === eI ? 0 : -1,
                        "aria-pressed": eA?.kind === "expert" && eA.index === t3,
                        "aria-label": `${tn(t3)} expert, ${i2} ${1 === i2 ? "token" : "tokens"}${l2 ? ", at capacity" : ""}${s2 >= 0 ? `, ${n2 ? "skipped" : `${D[s2]} choice`} for ${e22.lit?.token}` : ""}`,
                        onPointerEnter: (e11) => {
                          "mouse" === e11.pointerType && ew({ kind: "expert", index: t3 });
                        },
                        onPointerLeave: () => ew(null),
                        onFocus: (e11) => {
                          eR(t3), e3(e11) && eM({ kind: "expert", index: t3 });
                        },
                        onBlur: () => eM(null),
                        onKeyDown: (e11) => tt(e11, t3, en, te.current, eR),
                        onClick: () => e7({ kind: "expert", index: t3 }),
                        children: [
                          (0, r.jsx)("span", {
                            className: z().gauge,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: z().tileIcon,
                            "aria-hidden": "true",
                            children: n2 ? (0, r.jsx)(o.A, {
                              size: 14,
                              strokeWidth: 1.75
                            }) : a3?.icon ?? J(a3?.name ?? "")
                          }),
                          (0, r.jsx)("span", {
                            className: z().tileName,
                            children: tn(t3)
                          }),
                          (0, r.jsx)("span", {
                            className: z().tileCount,
                            children: (0, r.jsx)(U, {
                              value: i2,
                              reduced: er
                            })
                          })
                        ]
                      },
                      t3
                    );
                  })
                }),
                (0, r.jsxs)("div", {
                  className: z().slot,
                  "data-side": "in",
                  style: K(ev.intake),
                  children: [
                    (0, r.jsx)(l.N, {
                      initial: false,
                      children: null !== e22.input && eh[e22.input] && (0, r.jsx)(
                        n.PY1.span,
                        {
                          className: z().chip,
                          "data-spent": e22.inputSpent || void 0,
                          initial: er ? { opacity: 0 } : ev.wide ? { opacity: 0, x: -14 } : { opacity: 0, y: -8 },
                          animate: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            transition: er ? { duration: 0 } : {
                              duration: _.T.duration.standard,
                              ease: [..._.T.ease.standard]
                            }
                          },
                          exit: {
                            opacity: 0,
                            transition: { duration: 0.1 * !er }
                          },
                          children: eh[e22.input].token
                        },
                        `in-${e22.input}-${eX ? "still" : ez.cycle}`
                      )
                    }),
                    0 === ei && (0, r.jsx)("span", {
                      className: z().chip,
                      "data-empty": "",
                      children: "Empty"
                    })
                  ]
                }),
                (0, r.jsx)("div", {
                  className: z().slot,
                  "data-side": "out",
                  style: K(ev.output),
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    children: e22.output >= 0 && eh[e22.output] && (0, r.jsxs)(
                      n.PY1.span,
                      {
                        className: z().chip,
                        "data-out": "",
                        "data-pass": eh[e22.output].dropped.length === eh[e22.output].experts.length || void 0,
                        initial: er ? { opacity: 0 } : ev.wide ? { opacity: 0, x: -10 } : { opacity: 0, y: -6 },
                        animate: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: er ? { duration: 0 } : {
                            duration: _.T.duration.standard,
                            ease: [..._.T.ease.standard]
                          }
                        },
                        exit: er ? { opacity: 0, transition: { duration: 0 } } : ev.wide ? {
                          opacity: 0,
                          x: 10,
                          transition: {
                            duration: _.T.duration.fast,
                            ease: [..._.T.ease.standard]
                          }
                        } : {
                          opacity: 0,
                          y: 6,
                          transition: { duration: _.T.duration.fast }
                        },
                        children: [
                          (0, r.jsx)("span", {
                            className: z().chipDots,
                            "aria-hidden": "true",
                            children: eh[e22.output].experts.map(
                              (e10, t3) => eh[e22.output].dropped.includes(e10) ? null : (0, r.jsx)("i", { "data-rank": t3 }, e10)
                            )
                          }),
                          eh[e22.output].token
                        ]
                      },
                      `out-${e22.output}-${eX ? "still" : ez.cycle}`
                    )
                  })
                }),
                (0, r.jsx)("svg", {
                  className: z().packets,
                  width: ev.w,
                  height: ev.h,
                  viewBox: `0 0 ${ev.w} ${ev.h}`,
                  "aria-hidden": "true",
                  children: [0, 1, 2, 3, 4, 5].map(
                    (e10) => (0, r.jsxs)(
                      "g",
                      {
                        ref: (t3) => {
                          eq.current[e10] = t3;
                        },
                        className: z().packet,
                        "data-slot": 0 === e10 || 5 === e10 ? "flow" : (e10 - 1) % 2,
                        style: { opacity: 0 },
                        children: [
                          (0, r.jsx)("path", { className: z().trailLong }),
                          (0, r.jsx)("path", { className: z().trailShort }),
                          (0, r.jsx)("circle", {
                            className: z().dot,
                            r: 3.5
                          })
                        ]
                      },
                      e10
                    )
                  )
                })
              ]
            })
          }),
          (0, r.jsxs)("div", {
            className: z().sequence,
            role: "group",
            "aria-label": "Tokens. Hover, focus or select one to see its route.",
            children: [
              eh.map((e10, t3) => {
                let a3 = eJ || t3 < ez.index || t3 === ez.index && eK >= P.out ? "done" : t3 === ez.index ? "current" : "next", s2 = null !== eZ ? e10.experts.indexOf(eZ) : -1, n2 = eA?.kind === "token" && eA.index === t3;
                return (0, r.jsx)(
                  "button",
                  {
                    ref: (e11) => {
                      e9.current[t3] = e11;
                    },
                    type: "button",
                    className: z().token,
                    "data-state": a3,
                    "data-inspect": eX?.index === t3 || void 0,
                    "data-rank": s2 >= 0 && !e10.dropped.includes(eZ ?? -1) ? s2 : void 0,
                    "data-dropped": s2 >= 0 && e10.dropped.includes(eZ ?? -1) ? "" : void 0,
                    "data-fade": null !== eZ && s2 < 0 ? "" : void 0,
                    tabIndex: t3 === eE ? 0 : -1,
                    "aria-pressed": n2,
                    "aria-label": `${e10.token}: ${e10.experts.map((t4, a4) => `${tn(t4)} ${e10.dropped.includes(t4) ? "skipped, at capacity" : B(e10.weights[a4])}`).join(", ")}`,
                    onPointerEnter: (e11) => {
                      "mouse" === e11.pointerType && ew({ kind: "token", index: t3 });
                    },
                    onPointerLeave: () => ew(null),
                    onFocus: (e11) => {
                      eL(t3), e3(e11) && eM({ kind: "token", index: t3 });
                    },
                    onBlur: () => eM(null),
                    onKeyDown: (e11) => tt(e11, t3, ei, e9.current, eL),
                    onClick: () => e7({ kind: "token", index: t3 }),
                    children: e10.token
                  },
                  t3
                );
              }),
              0 === ei && (0, r.jsx)("span", {
                className: z().sequenceEmpty,
                children: "No tokens to route"
              })
            ]
          }),
          (0, r.jsxs)("div", {
            className: z().footer,
            children: [
              (0, r.jsxs)("div", {
                className: z().inspector,
                children: [
                  (0, r.jsx)("div", {
                    className: z().line,
                    children: (0, r.jsx)(l.N, {
                      initial: false,
                      mode: "popLayout",
                      children: (0, r.jsx)(
                        n.PY1.div,
                        { className: z().lineInner, ...ts, children: ee2 },
                        Z2
                      )
                    })
                  }),
                  (0, r.jsx)("div", {
                    className: z().note,
                    children: (0, r.jsx)(l.N, {
                      initial: false,
                      mode: "popLayout",
                      children: (0, r.jsxs)(
                        n.PY1.p,
                        {
                          className: z().noteInner,
                          ...ts,
                          children: [
                            et.icon,
                            (0, r.jsx)("span", { children: et.text })
                          ]
                        },
                        `${Z2}-note`
                      )
                    })
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: z().load,
                children: [
                  (0, r.jsxs)("div", {
                    className: z().loadHead,
                    children: [
                      (0, r.jsx)("span", { children: "Load balance" }),
                      (0, r.jsx)("span", {
                        className: z().loadValue,
                        children: null === e8 ? (0, r.jsx)("span", {
                          className: z().lineMuted,
                          children: "No routes yet"
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(U, {
                              value: 100 * e8,
                              reduced: er
                            }),
                            "%"
                          ]
                        })
                      })
                    ]
                  }),
                  (0, r.jsx)("div", {
                    className: z().loadBar,
                    "aria-hidden": "true",
                    "data-empty": 0 === e6 || void 0,
                    children: e1.map((e10, t3) => {
                      let a3 = e5(e22.lit, t3);
                      return (0, r.jsx)(
                        "span",
                        {
                          className: z().seg,
                          style: { flexGrow: e10 },
                          "data-zero": 0 === e10 || void 0,
                          "data-rank": a3 >= 0 && !e22.lit?.dropped.includes(t3) ? a3 : void 0,
                          "data-inspect": eZ === t3 || void 0,
                          onPointerEnter: (e11) => {
                            "mouse" === e11.pointerType && ew({ kind: "expert", index: t3 });
                          },
                          onPointerLeave: () => ew(null)
                        },
                        t3
                      );
                    })
                  }),
                  (0, r.jsx)("span", {
                    className: z().srOnly,
                    children: null === e8 ? "No routes yet" : `Load balance ${Math.round(100 * e8)} percent across ${en} experts, ${e6} routes`
                  })
                ]
              })
            ]
          }),
          (0, r.jsx)("span", {
            className: z().srOnly,
            role: "status",
            "aria-live": "polite",
            children: eF
          })
        ]
      })
    });
  }
  var Q = a(1766), X = a.n(Q);
  function Z() {
    return (0, r.jsx)("div", {
      className: X().demo,
      children: (0, r.jsx)(G, {})
    });
  }
  let ee = Z;
}

__m(__module,__exports,__require);
});
A.reg(88359, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-round",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
      ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
    ],
    aliases: ["user-2"]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(92782, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "code-xml",
    size: 24,
    node: [
      ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
      ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
      ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
    ],
    aliases: ["code-2"]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("mixture-of-experts", [1766,38511]);
A.item("mixture-of-experts", {entry:87427, export:"MixtureOfExpertsDemo", kind:"component", tier:"pro", unresolved:[]});
})();