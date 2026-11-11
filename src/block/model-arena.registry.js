/* model-arena (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(2173, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var n = r(51811);
  let o = {
    name: "equal",
    size: 24,
    node: [
      ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
      ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
    ]
  };
  o.node;
  let a = (0, n.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(5024, ".root{--pad:20px;--hover:color-mix(in oklab,var(--foreground) 5%,transparent);position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:800px;min-width:0;margin-inline:auto;overflow:clip;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);container:arena/inline-size}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.root .accent,.root .accent:hover{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.root .accent svg{width:14px;height:14px;stroke-width:2}\n@container arena (width < 480px){.root{--pad:16px}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.num>span:not(.srOnly){color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;vertical-align:baseline}\n.spin{animation:spin .9s linear infinite}\n@media (prefers-reduced-motion:reduce){.appear,.spin,.stage[data-tabs] .pane{animation:none}\n.appear{animation:appear var(--duration-fast) var(--ease-standard) backwards}\n.num{display:inline-block}\n.head{display:flex;align-items:center;gap:6px;min-height:52px;padding:8px 10px 0 var(--pad)}\n.head{padding-right:6px}\n.title{margin:0;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.round{display:inline-flex;align-items:baseline;gap:6px;color:var(--text-muted);font-variant-numeric:tabular-nums;white-space:nowrap}\n.round:before{content:\"·\"}\n.tools{display:flex;align-items:center;gap:6px;margin-left:auto}\n.blind{flex-direction:row-reverse;gap:10px;min-height:var(--control-height-sm);padding-inline:8px 6px;color:var(--text-secondary)}\n.boardButton{gap:6px;padding-inline:10px}\n.boardButton{width:var(--control-height-sm);padding:0}\n.boardIcon{position:relative;display:inline-grid;place-items:center;width:16px;height:16px}\n.boardIcon svg{width:16px;height:16px;stroke-width:1.75}\n.boardDot{position:absolute;top:-3px;right:-4px;width:9px;height:9px;border:2px solid var(--surface);border-radius:50%;background:var(--accent);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.boardDot[data-on]{opacity:1}\n.boardDot,.chip,.field,.runLabel>span,.tab,.value{transition:none}\n.prompt{padding:6px var(--pad) 14px}\n.field{display:flex;align-items:center;gap:8px;height:48px;padding:0 5px 0 16px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n.field:focus-within{border-color:var(--border-strong)}\n.input{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:inherit;text-overflow:ellipsis;outline:none}\n.input::placeholder{color:var(--text-muted)}\n.runButton{flex:none}\n.runLabel{display:inline-grid}\n.runLabel>span{display:inline-flex;grid-area:1/1;align-items:center;justify-content:center;gap:6px;opacity:0;transition:opacity .1s var(--ease-standard)}\n.runLabel>span[data-on]{opacity:1;transition-duration:var(--duration-fast)}\n.runLabel svg{width:14px;height:14px;stroke-width:2}\n.stopIcon{width:11px!important;height:11px!important;fill:currentColor}\n.hint{margin-left:2px;font-size:var(--text-xs);font-weight:400;opacity:.62}\n.hint{display:none}\n.chips{display:flex;gap:6px;margin:10px calc(var(--pad) * -1) 0;padding:0 var(--pad);overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none}\n.chips::-webkit-scrollbar{display:none}\n.chip{flex:none;height:28px;padding:0 11px;border:1px solid var(--border);border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.chip[aria-pressed=true]{border-color:var(--border-strong);background:var(--surface-muted);color:var(--foreground)}\n.chip:active{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.chip:hover{background:var(--hover);color:var(--foreground)}\n.stage{border-top:1px solid var(--border)}\n.stage[data-tabs] .panes{grid-template-columns:minmax(0,1fr)}\n.stage[data-tabs] .pane{animation:appear var(--duration-fast) var(--ease-standard) backwards}\n.stage[data-tabs] .pane+.pane{border-left:0}\n.panes{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr)}\n.pane{display:flex;flex-direction:column;min-width:0}\n.pane[hidden]{display:none}\n.pane+.pane{border-left:1px solid var(--border-subtle)}\n.paneHead{display:flex;align-items:center;justify-content:space-between;gap:8px;height:48px;padding:4px 12px 0 var(--pad)}\n.swap{position:relative;flex:0 1 auto;overflow:hidden}\n.swapInner,.swap{display:inline-flex;align-items:center;min-width:0;white-space:nowrap}\n.swapInner{flex:none;gap:8px;max-width:100%}\n.swapMeasure{position:absolute;top:0;left:0;max-width:none;visibility:hidden;pointer-events:none}\n.identity{font-weight:500}\n.tab .identity{max-width:100%}\n.identityMark{display:inline-flex;flex:none;width:16px;height:16px}\n.mark{display:block;flex:none;width:16px;height:16px}\n.resultName .mark{width:16px;height:16px}\n.markLetter{display:inline-grid;flex:none;place-items:center;width:16px;height:16px;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500}\n.identityName{min-width:0;overflow:hidden;text-overflow:ellipsis}\n.statusSlot{flex:none}\n.tab .statusSlot{max-width:calc(100% + 7px);margin-left:-7px}\n.status{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 8px;border-radius:var(--radius-pill);color:var(--text-secondary);font-size:var(--text-xs);font-weight:400;white-space:nowrap}\n.status[data-status=first]{background:var(--accent-subtle);color:var(--accent-strong)}\n.status[data-status=idle]{color:var(--text-muted)}\n.status[data-status=done] .statusIcon{color:var(--success)}\n.status[data-status=error] .statusIcon{color:var(--danger)}\n.statusCompact .status{height:20px;padding:0 7px}\n.statusIcon{display:inline-grid;flex:none;place-items:center;width:14px;height:14px}\n.statusIcon svg{width:14px;height:14px;stroke-width:1.75}\n.statusCompact .statusIcon,.statusCompact .statusIcon svg{width:12px;height:12px}\n.stopGlyph{width:10px!important;height:10px!important;fill:currentColor}\n.scroller{--focus-outline-offset:-2px;height:272px;overflow-y:auto;overscroll-behavior:contain;padding:8px var(--pad) 18px;-webkit-mask-image:linear-gradient(180deg,transparent,#000 8px,#000 calc(100% - 18px),transparent);mask-image:linear-gradient(180deg,transparent,#000 8px,#000 calc(100% - 18px),transparent);scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}\n.scroller{height:300px}\n.content{display:flex;flex-direction:column;min-height:100%}\n.answer{color:var(--foreground);font-size:var(--text-sm);line-height:1.6}\n.empty{margin:auto;color:var(--text-muted);text-align:center}\n.error{flex:none;overflow:hidden}\n.errorInner{display:grid;justify-items:start;gap:4px;margin-top:14px;padding:12px 14px 14px;border:1px solid var(--border);border-radius:14px}\n.errorInner svg{width:14px;height:14px}\n.errorTitle{display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:500}\n.errorTitle svg{width:16px;height:16px;stroke-width:1.75;color:var(--danger)}\n.errorText{margin:0 0 8px;color:var(--text-secondary)}\n.metrics{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 8px;margin:0;padding:8px var(--pad) 14px;color:var(--text-muted);font-size:var(--text-xs)}\n.metric{display:inline-flex;align-items:baseline;gap:5px;white-space:nowrap}\n.metric+.metric:before{content:\"·\";margin-right:3px;color:var(--text-muted)}\n.metric dt{color:var(--text-muted)}\n.metric dd{margin:0;color:var(--text-secondary)}\n.value{display:inline-block;color:var(--foreground);font-variant-numeric:tabular-nums;transition:color var(--duration-standard) var(--ease-standard)}\n.value[data-live]{color:var(--text-secondary)}\n.unit{color:var(--text-muted)}\n.tabs{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);margin:12px var(--pad) 0;padding:3px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-muted);isolation:isolate}\n.tabHighlight{position:absolute;top:3px;bottom:3px;left:3px;z-index:-1;width:calc(50% - 3px);border:1px solid var(--border);border-radius:calc(var(--radius-control) - 3px);background:var(--surface)}\n.tab{display:grid;align-content:center;justify-items:start;gap:1px;min-width:0;height:52px;padding:0 12px;border:0;border-radius:calc(var(--radius-control) - 3px);background:transparent;color:var(--text-secondary);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.tab[data-active]{color:var(--foreground)}\n.voteClip{flex:none;overflow:hidden;border-top:1px solid var(--border)}\n.voteBar{position:relative;padding:12px 12px 12px var(--pad)}\n.voteRow{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;min-height:36px}\n.voteRow{flex-direction:column;align-items:stretch}\n.voteRow[data-kind=vote] .voteLabel{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.voteRow>button{align-self:flex-start}\n.voteLabel{margin:0;color:var(--text-secondary)}\n.voteCount{margin-left:8px;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.voteGroup{display:flex;flex-wrap:wrap;gap:6px}\n.voteGroup{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}\n.voteButton svg{width:14px;height:14px;stroke-width:1.75}\n.result{display:inline-flex;align-items:center;gap:8px;min-width:0;margin:0}\n.resultIcon{flex:none;width:16px;height:16px;color:var(--success);stroke-width:2}\n.resultName{display:inline-flex;align-items:center;gap:6px;min-width:0;font-weight:500}\n.resultText{display:inline-flex;align-items:center;gap:6px;min-width:0;white-space:nowrap}\n.nextButton svg{width:14px;height:14px;stroke-width:2}\n[data-radix-popper-content-wrapper] .board{width:min(320px,calc(100vw - 20px));padding:14px 16px 8px;font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.board *,.board :after,.board :before{box-sizing:border-box}\n.boardHead{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:6px}\n.boardTitle{margin:0;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.boardMeta{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.boardClip{overflow:hidden}\n.boardBody{display:grid;grid-template-columns:14px minmax(0,1fr);column-gap:8px}\n.ranks,.rows{margin:0;padding:0;list-style:none}\n.ranks li{display:flex;align-items:center;height:36px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.rows{position:relative;min-width:0}\n.row{display:grid;grid-template-columns:16px minmax(0,1fr) 56px 4.5ch;align-items:center;gap:10px;height:36px;background:var(--surface-raised)}\n.rowName{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.rateTrack{display:block;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 9%,transparent)}\n.rateFill{display:block;width:100%;height:100%;border-radius:inherit;transform-origin:left center}\n.rateValue{text-align:right;font-variant-numeric:tabular-nums}\n.boardEmpty{margin:2px 0 10px;color:var(--text-secondary)}\n.boardFoot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;padding-top:4px;border-top:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs)}\n.resetButton{margin-right:-10px}\n.resetButton svg{width:14px;height:14px;stroke-width:1.75}\n.boardLabel{display:none}", {"root":"root","accent":"accent","srOnly":"srOnly","num":"num","spin":"spin","appear":"appear","stage":"stage","pane":"pane","head":"head","title":"title","round":"round","tools":"tools","blind":"blind","boardButton":"boardButton","boardIcon":"boardIcon","boardDot":"boardDot","chip":"chip","field":"field","runLabel":"runLabel","tab":"tab","value":"value","prompt":"prompt","input":"input","runButton":"runButton","stopIcon":"stopIcon","hint":"hint","chips":"chips","panes":"panes","paneHead":"paneHead","swap":"swap","swapInner":"swapInner","swapMeasure":"swapMeasure","identity":"identity","identityMark":"identityMark","mark":"mark","resultName":"resultName","markLetter":"markLetter","identityName":"identityName","statusSlot":"statusSlot","status":"status","statusIcon":"statusIcon","statusCompact":"statusCompact","stopGlyph":"stopGlyph","scroller":"scroller","content":"content","answer":"answer","empty":"empty","error":"error","errorInner":"errorInner","errorTitle":"errorTitle","errorText":"errorText","metrics":"metrics","metric":"metric","unit":"unit","tabs":"tabs","tabHighlight":"tabHighlight","voteClip":"voteClip","voteBar":"voteBar","voteRow":"voteRow","voteLabel":"voteLabel","voteCount":"voteCount","voteGroup":"voteGroup","voteButton":"voteButton","result":"result","resultIcon":"resultIcon","resultText":"resultText","nextButton":"nextButton","board":"board","boardHead":"boardHead","boardTitle":"boardTitle","boardMeta":"boardMeta","boardClip":"boardClip","boardBody":"boardBody","ranks":"ranks","rows":"rows","row":"row","rowName":"rowName","rateTrack":"rateTrack","rateFill":"rateFill","rateValue":"rateValue","boardEmpty":"boardEmpty","boardFoot":"boardFoot","resetButton":"resetButton","boardLabel":"boardLabel"});
A.reg(9083, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var n = r(51811);
  let o = {
    name: "flag",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
          key: "1jaruq"
        }
      ]
    ]
  };
  o.node;
  let a = (0, n.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(23723, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "circle-dashed",
    size: 24,
    node: [
      ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
      ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
      ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
      ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
      ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
      ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
      ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
      ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(25898, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={anchor:"popover_anchor__Mcc5T",content:"popover_content__FmDK_","popover-exit":"popover_popover-exit__j6_xO"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(36083, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var n = r(51811);
  let o = {
    name: "trophy",
    size: 24,
    node: [
      [
        "path",
        { d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2", key: "pwuv1l" }
      ],
      [
        "path",
        { d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2", key: "1y54w1" }
      ],
      [
        "path",
        {
          d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
          key: "e30mpu"
        }
      ],
      ["path", { d: "M4 22h16", key: "57wxv0" }],
      [
        "path",
        {
          d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
          key: "1mhfuq"
        }
      ],
      [
        "path",
        {
          d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
          key: "i0yafy"
        }
      ]
    ]
  };
  o.node;
  let a = (0, n.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(40093, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, {
    Mz: () => Z,
    UC: () => H,
    ZL: () => q,
    bL: () => K,
    bm: () => Q,
    i3: () => U,
    l9: () => $
  });
  var r = n(12115), o = n(70379), a = n(47527), i = n(68599), s = n(19416), l = n(32007), u = n(69885), c = n(89971), d = n(80878), p = n(19040), f = n(83935), h = n(55897), b = n(42442), y = n(59322), v = n(22954), m = n(5174), _ = n(95155), g = Object.defineProperty, x = (e2, t2) => g(e2, "name", { value: t2, configurable: true }), j = "Popover", [C, P] = (0, i.A)(j, [d.Bk]), A = (0, d.Bk)(), [O, w] = C(j), k = x((e2) => {
    let {
      __scopePopover: t2,
      children: n2,
      open: o2,
      defaultOpen: a2,
      onOpenChange: i2,
      modal: s2 = false
    } = e2, l2 = A(t2), u2 = r.useRef(null), [p2, f2] = r.useState(false), [h2, b2] = (0, y.i)({
      prop: o2,
      defaultProp: a2 ?? false,
      onChange: i2,
      caller: j
    });
    return (0, _.jsx)(d.bL, {
      ...l2,
      children: (0, _.jsx)(O, {
        scope: t2,
        contentId: (0, c.B)(),
        triggerRef: u2,
        open: h2,
        onOpenChange: b2,
        onOpenToggle: r.useCallback(() => b2((e3) => !e3), [b2]),
        hasCustomAnchor: p2,
        onCustomAnchorAdd: r.useCallback(() => f2(true), []),
        onCustomAnchorRemove: r.useCallback(() => f2(false), []),
        modal: s2,
        children: n2
      })
    });
  }, "Popover"), R = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...o2 } = e2, a2 = w("PopoverAnchor", n2), i2 = A(n2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
      return r.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, _.jsx)(d.Mz, { ...i2, ...o2, ref: t2 });
    }, "PopoverAnchor")
  ), N = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, i2 = w("PopoverTrigger", n2), s2 = A(n2), l2 = (0, a.s)(t2, i2.triggerRef), u2 = (0, _.jsx)(h.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i2.open,
        "aria-controls": i2.open ? i2.contentId : void 0,
        "data-state": Y(i2.open),
        ...r2,
        ref: l2,
        onClick: (0, o.mK)(e2.onClick, i2.onOpenToggle)
      });
      return i2.hasCustomAnchor ? u2 : (0, _.jsx)(d.Mz, { asChild: true, ...s2, children: u2 });
    }, "PopoverTrigger")
  ), E = "PopoverPortal", [T, F] = C(E, { forceMount: void 0 }), M = x((e2) => {
    let { __scopePopover: t2, forceMount: n2, children: r2, container: o2 } = e2, a2 = w(E, t2);
    return (0, _.jsx)(T, {
      scope: t2,
      forceMount: n2,
      children: (0, _.jsx)(f.C, {
        present: n2 || a2.open,
        children: (0, _.jsx)(p.Z, { asChild: true, container: o2, children: r2 })
      })
    });
  }, "PopoverPortal"), L = "PopoverContent", D = r.forwardRef(
    x(function(e2, t2) {
      let n2 = F(L, e2.__scopePopover), { forceMount: r2 = n2.forceMount, ...o2 } = e2, a2 = w(L, e2.__scopePopover);
      return (0, _.jsx)(f.C, {
        present: r2 || a2.open,
        children: a2.modal ? (0, _.jsx)(I, { ...o2, ref: t2 }) : (0, _.jsx)(z, { ...o2, ref: t2 })
      });
    }, "PopoverContent")
  ), S = (0, b.TL)("PopoverContent.RemoveScroll"), I = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), i2 = r.useRef(null), s2 = (0, a.s)(t2, i2), l2 = r.useRef(false);
      return r.useEffect(() => {
        let e3 = i2.current;
        if (e3) return (0, v.Eq)(e3);
      }, []), (0, _.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        children: (0, _.jsx)(B, {
          ...e2,
          ref: s2,
          trapFocus: n2.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
            e3.preventDefault(), l2.current || n2.triggerRef.current?.focus();
          }),
          onPointerDownOutside: (0, o.mK)(
            e2.onPointerDownOutside,
            (e3) => {
              let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
              l2.current = 2 === t3.button || n3;
            },
            { checkForDefaultPrevented: false }
          ),
          onFocusOutside: (0, o.mK)(
            e2.onFocusOutside,
            (e3) => e3.preventDefault(),
            { checkForDefaultPrevented: false }
          )
        })
      });
    }, "PopoverContentModal")
  ), z = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), o2 = r.useRef(false), a2 = r.useRef(false);
      return (0, _.jsx)(B, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, a2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (a2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && a2.current && t3.preventDefault();
        }
      });
    }, "PopoverContentNonModal")
  ), B = r.forwardRef(
    x(function(e2, t2) {
      let {
        __scopePopover: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: a2,
        disableOutsidePointerEvents: i2,
        onEscapeKeyDown: c2,
        onPointerDownOutside: p2,
        onFocusOutside: f2,
        onInteractOutside: h2,
        ...b2
      } = e2, y2 = w(L, n2), v2 = A(n2);
      return (0, l.Oh)(), (0, _.jsx)(u.n, {
        asChild: true,
        loop: true,
        trapped: r2,
        onMountAutoFocus: o2,
        onUnmountAutoFocus: a2,
        children: (0, _.jsx)(s.qW, {
          asChild: true,
          disableOutsidePointerEvents: i2,
          onInteractOutside: h2,
          onEscapeKeyDown: c2,
          onPointerDownOutside: p2,
          onFocusOutside: f2,
          onDismiss: () => y2.onOpenChange(false),
          deferPointerDownOutside: true,
          children: (0, _.jsx)(d.UC, {
            "data-state": Y(y2.open),
            role: "dialog",
            id: y2.contentId,
            ...v2,
            ...b2,
            ref: t2,
            style: {
              ...b2.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        })
      });
    }, "PopoverContentImpl")
  ), W = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, a2 = w("PopoverClose", n2);
      return (0, _.jsx)(h.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => a2.onOpenChange(false))
      });
    }, "PopoverClose")
  ), G = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, o2 = A(n2);
      return (0, _.jsx)(d.i3, { ...o2, ...r2, ref: t2 });
    }, "PopoverArrow")
  );
  function Y(e2) {
    return e2 ? "open" : "closed";
  }
  x(Y, "getState");
  var K = k, Z = R, $ = N, q = M, H = D, Q = W, U = G;
}

__m(__module,__exports,__require);
});
A.regCss(69687, ".stage{display:grid;min-width:0;min-height:1lh}\n.stage>*{grid-area:1/1;min-width:0}\n.placeholder{align-self:start;font-size:.875em;line-height:inherit}\n.shimmer{background:linear-gradient(90deg,var(--text-muted) 0,var(--text-muted) 38%,var(--foreground) 50%,var(--text-muted) 62%,var(--text-muted) 100%) 0 0 /250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer 2.2s linear infinite}\n@media (prefers-reduced-motion:reduce){.enter,.itemEnter::marker,.shimmer,.waiting>span{animation:none}\n.shimmer{background:none;color:var(--text-muted)}\n.statusStatic{color:var(--text-muted)}\n.enter{animation:develop .16s cubic-bezier(0,0,.2,1) backwards}\n.markdown{display:grid;gap:.85em;min-width:0;overflow-wrap:break-word}\n.markdown>*,.plain>*{min-width:0}\n.plain{display:grid;gap:.6em;min-width:0;overflow-wrap:break-word}\n.heading,.paragraph{margin:0}\n.heading{margin-top:.45em;font-size:1em;font-weight:500}\n.strong{font-weight:500}\n.list{display:grid;gap:.45em;margin:0;padding-left:1.25em;list-style:disc outside}\nol.list{list-style-type:decimal}\n.list li{padding-left:.2em}\n.list li::marker{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.itemEnter::marker{animation:marker .42s cubic-bezier(.2,.7,.3,1) backwards}\n.inlineCode{padding:.08em .36em;border:1px solid var(--border-subtle);border-radius:6px;background:var(--surface-muted);font-family:ui-monospace,SF Mono,Menlo,monospace;font-size:.84em;letter-spacing:0}\n.cite{white-space:nowrap}\n.codeBlock{min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface-muted)}\n.codeHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:4px 4px 4px 14px;border-bottom:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs)}\n.codeCopy{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);cursor:pointer}\n@media (hover:hover) and (pointer:fine){.codeCopy:hover{background:color-mix(in oklab,var(--foreground) 6%,transparent);color:var(--foreground)}\n.pre{margin:0;padding:12px 14px 14px;overflow-x:auto;font-family:ui-monospace,SF Mono,Menlo,monospace;font-size:.8125rem;line-height:1.6;letter-spacing:0}\n.codeLine{display:block;white-space:pre}\n.waiting{position:relative;display:inline-block;width:0;height:1em;vertical-align:baseline}\n.waiting>span{position:absolute;bottom:.18em;left:.36em;width:.4em;height:.4em;border-radius:50%;background:var(--text-muted);animation:breathe 1.3s ease-in-out infinite}\n.iconSlot{display:inline-grid;place-items:center;width:14px;height:14px}\n.iconSlot>span{display:grid;grid-area:1/1;place-items:center}\n.iconSlot svg{width:14px;height:14px;stroke-width:1.75}\n.iconSlot>[data-state=copied]{color:var(--success)}\n.iconSlot>[data-state=failed]{color:var(--danger)}\n.swap{position:relative;display:inline-grid;grid-template-columns:minmax(0,1fr);justify-items:center}\n.swapText{grid-area:1/1;white-space:nowrap}\n.swapMeasure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}", {"stage":"stage","placeholder":"placeholder","shimmer":"shimmer","enter":"enter","itemEnter":"itemEnter","waiting":"waiting","statusStatic":"statusStatic","markdown":"markdown","plain":"plain","heading":"heading","paragraph":"paragraph","strong":"strong","list":"list","inlineCode":"inlineCode","cite":"cite","codeBlock":"codeBlock","codeHeader":"codeHeader","codeCopy":"codeCopy","pre":"pre","codeLine":"codeLine","iconSlot":"iconSlot","swap":"swap","swapText":"swapText","swapMeasure":"swapMeasure"});
A.reg(70105, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "thumbs-down",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
          key: "m61m77"
        }
      ],
      ["path", { d: "M17 14V2", key: "8ymqnk" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(74367, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    ArenaRunError: () => Y,
    ModelArena: () => eD,
    arenaModels: () => U,
    arenaPrompts: () => V,
    default: () => eW
  });
  var n = a(95155), r = a(12115), s = a(25354), i = a(80642), o = a(36619), l = a(40852), d = a(31966), c = a(2173), u = a(90467), m = a(70105), p = a(64577), h = a(92298), f = a(7770), _ = a(65024), x = a(51288), y = a(50680), g = a(28245), v = a(92171), b = a(18310), w = a(35484), j = a(99314), k = a(69687), N = a.n(k), T = a(55665);
  let S = () => () => {
  };
  function A() {
    let e2 = (0, b.I)();
    return !!((0, r.useSyncExternalStore)(
      S,
      () => true,
      () => false
    ) && e2);
  }
  function M(e2, t2) {
    let a2 = [], n2 = false, r2 = "", s2 = false, i2 = 0, o2 = t2.n, l2 = false, d2 = (e3) => {
      l2 && "cite" !== e3.kind && (o2 = t2.n, l2 = false), a2.push({ ...e3, space: s2 && a2.length > 0, index: t2.n++, sentence: o2 }), s2 = false, "text" === e3.kind && /[.!?]["”)]?$/.test(e3.text) && (l2 = true);
    }, c2 = () => {
      for (let e3 of r2.split(/(\s+)/))
        e3 && (/^\s+$/.test(e3) ? s2 = true : d2({ kind: "text", text: e3, bold: n2 }));
      r2 = "";
    };
    for (; i2 < e2.length; ) {
      if (e2.startsWith("**", i2)) {
        c2(), n2 = !n2, i2 += 2;
        continue;
      }
      if ("`" === e2[i2]) {
        c2();
        let t3 = e2.indexOf("`", i2 + 1);
        if (-1 === t3) break;
        t3 > i2 + 1 && d2({ kind: "code", text: e2.slice(i2 + 1, t3) }), i2 = t3 + 1;
        continue;
      }
      if ("[" === e2[i2]) {
        let t3 = /^\[(\d{1,2})\]/.exec(e2.slice(i2, i2 + 4));
        if (t3) {
          c2(), d2({ kind: "cite", n: Number(t3[1]) }), i2 += t3[0].length;
          continue;
        }
        if (/^\[\d{0,2}$/.test(e2.slice(i2))) break;
      }
      r2 += e2[i2++];
    }
    return c2(), a2;
  }
  let C = /^\s*(#{1,6}|[-*+]|\d+[.)]?|`{1,3}\w*)\s*$/, E = (0, r.memo)(
    function({ units: e2, enter: t2, cite: a2 }) {
      let r2 = e2[0]?.space && "cite" === e2[0].kind ? " " : null;
      return (0, n.jsxs)("span", {
        className: t2 ? N().enter : void 0,
        children: [
          r2,
          e2.map(
            (e3) => (function(e4, t3) {
              if ("cite" === e4.kind)
                return (0, n.jsx)(
                  "span",
                  {
                    className: N().cite,
                    children: t3 ? t3(e4.n, e4.sentence) : (0, n.jsx)("sup", { children: e4.n })
                  },
                  e4.index
                );
              if ("line" === e4.kind)
                return (0, n.jsx)(
                  "span",
                  { className: N().codeLine, children: e4.text || " " },
                  e4.index
                );
              let a3 = "code" === e4.kind ? (0, n.jsx)("code", {
                className: N().inlineCode,
                children: e4.text
              }) : e4.bold ? (0, n.jsx)("strong", {
                className: N().strong,
                children: e4.text
              }) : e4.text;
              return (0, n.jsxs)(
                "span",
                { "data-s": e4.sentence, children: [e4.space ? " " : null, a3] },
                e4.index
              );
            })(e3, a2.current)
          )
        ]
      });
    },
    (e2, t2) => e2.enter === t2.enter && e2.units.length === t2.units.length && e2.units[0]?.index === t2.units[0]?.index
  );
  function R() {
    return (0, n.jsx)(s.PY1.span, {
      className: N().waiting,
      "aria-hidden": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: f.T.duration.standard },
      children: (0, n.jsx)("span", {})
    });
  }
  let L = [...f.T.ease.standard], $ = { duration: 0.16, ease: L }, I = { duration: 0.1, ease: L }, B = ["idle", "copied", "failed"];
  function z({ reduced: e2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: (0, n.jsx)(s.PY1.path, {
        d: "M4 12l5 5L20 6",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.22, ease: L, delay: 0.04 }
      })
    });
  }
  function P({ state: e2, idle: t2 = "Copy", done: a2 = "Copied" }) {
    var o2;
    let l2, d2, c2 = (0, b.I)() ?? false, u2 = { idle: t2, copied: a2, failed: "Try again" }, m2 = (0, r.useRef)({}), [p2, h2] = (0, r.useState)({});
    (0, r.useLayoutEffect)(() => {
      let e3 = () => h2(
        Object.fromEntries(B.map((e4) => [e4, m2.current[e4]?.offsetWidth ?? 0]))
      );
      if (e3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(e3);
      return B.forEach((e4) => {
        let a3 = m2.current[e4];
        a3 && t3.observe(a3);
      }), () => t3.disconnect();
    }, [t2, a2]);
    let f2 = (o2 = p2[e2], l2 = (0, g.d)("auto"), d2 = (0, r.useRef)(false), (0, r.useLayoutEffect)(() => {
      if (!o2) return;
      if (!d2.current || c2) {
        d2.current = true, l2.jump(o2);
        return;
      }
      let e3 = (0, v.i)(l2, o2, {
        type: "spring",
        visualDuration: 0.22,
        bounce: 0
      });
      return () => e3.stop();
    }, [o2, c2, l2]), l2);
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", {
          className: N().iconSlot,
          "aria-hidden": "true",
          children: (0, n.jsx)(i.N, {
            initial: false,
            children: (0, n.jsx)(
              s.PY1.span,
              {
                "data-state": e2,
                initial: c2 ? { opacity: 0 } : { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, transition: c2 ? { duration: 0 } : I },
                transition: c2 ? { duration: 0 } : $,
                children: "copied" === e2 ? (0, n.jsx)(z, { reduced: c2 }) : "failed" === e2 ? (0, n.jsx)(w.A, {}) : (0, n.jsx)(j.A, {})
              },
              e2
            )
          })
        }),
        (0, n.jsxs)(s.PY1.span, {
          className: N().swap,
          "aria-hidden": "true",
          style: { width: f2 },
          children: [
            B.map(
              (e3) => (0, n.jsx)(
                "span",
                {
                  ref: (t3) => {
                    m2.current[e3] = t3;
                  },
                  className: N().swapMeasure,
                  children: u2[e3]
                },
                e3
              )
            ),
            (0, n.jsx)(i.N, {
              initial: false,
              children: (0, n.jsx)(
                s.PY1.span,
                {
                  className: N().swapText,
                  initial: c2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, transition: c2 ? { duration: 0 } : I },
                  transition: c2 ? { duration: 0 } : $,
                  children: u2[e2]
                },
                e2
              )
            })
          ]
        })
      ]
    });
  }
  function F({ lang: e2, source: t2, children: a2 }) {
    let { state: s2, copy: i2 } = (function() {
      let [e3, t3] = (0, r.useState)("idle"), a3 = (0, r.useRef)(0);
      return (0, r.useEffect)(() => () => window.clearTimeout(a3.current), []), {
        state: e3,
        copy: (0, r.useCallback)(async (e4) => {
          window.clearTimeout(a3.current);
          try {
            await (0, T.a)(e4), t3("copied");
          } catch {
            t3("failed");
          }
          a3.current = window.setTimeout(() => t3("idle"), 1800);
        }, [])
      };
    })();
    return (0, n.jsxs)("div", {
      className: N().codeBlock,
      children: [
        (0, n.jsxs)("div", {
          className: N().codeHeader,
          children: [
            (0, n.jsx)("span", { children: e2 || "Code" }),
            (0, n.jsx)("button", {
              type: "button",
              className: N().codeCopy,
              onClick: () => i2(t2),
              "aria-label": "copied" === s2 ? "Code copied" : "Copy code",
              children: (0, n.jsx)(P, { state: s2 })
            })
          ]
        }),
        (0, n.jsx)("pre", {
          className: N().pre,
          children: (0, n.jsx)("code", { children: a2 })
        })
      ]
    });
  }
  function O({
    text: e2,
    streaming: t2,
    markdown: a2 = true,
    smooth: o2 = true,
    pace: l2,
    placeholder: d2,
    renderCite: c2,
    onShown: u2,
    onRevealed: m2,
    className: p2
  }) {
    let h2, _2 = A(), { text: x2, revealing: y2 } = (function(e3, { streaming: t3, pace: a3 = 70, enabled: n2 = true }) {
      let [s2, i2] = (0, r.useState)(() => t3 ? 0 : e3.length), [o3, l3] = (0, r.useState)(e3), d3 = s2;
      o3 !== e3 && (l3(e3), e3.startsWith(o3) || (d3 = 0, i2(0)));
      let c3 = (0, r.useRef)(d3), u3 = (0, r.useRef)(e3), m3 = (0, r.useRef)([]), p3 = (0, r.useRef)(0);
      (0, r.useEffect)(() => {
        let r2 = performance.now();
        e3.startsWith(u3.current) || (c3.current = 0, m3.current = []), u3.current = e3;
        let s3 = m3.current;
        for (s3.push([r2, e3.length]); s3.length > 2 && r2 - s3[1][0] > 1500; )
          s3.shift();
        if (!n2) {
          c3.current = e3.length;
          return;
        }
        let o4 = 0, l4 = r2, d4 = -1, h4 = p3.current, f2 = (n3) => {
          let r3 = Math.min(0.05, Math.max(0, (n3 - l4) / 1e3));
          l4 = n3;
          let u4 = e3.length - c3.current;
          if (u4 > 0) {
            let n4, i3, o5, l5 = (n4 = s3[0], o5 = ((i3 = s3[s3.length - 1])[0] - n4[0]) / 1e3, s3.length > 1 && o5 > 0.2 ? Math.max(12, (i3[1] - n4[1]) / o5) : a3), d5 = t3 ? l5 * Math.min(2.5, Math.max(0.45, u4 / Math.max(1, 0.5 * l5))) : Math.max(1.5 * a3, u4 / 0.4);
            p3.current = h4 = h4 ? h4 + (d5 - h4) * Math.min(1, r3 * (t3 ? 5 : 12)) : d5, c3.current = Math.min(e3.length, c3.current + h4 * r3);
          }
          let m4 = (function(e4, t4, a4) {
            if (t4 >= e4.length && !a4) return e4.length;
            let n4 = Math.min(Math.floor(t4), e4.length);
            if (n4 < e4.length && /\s/.test(e4[n4])) return n4;
            for (; n4 > 0 && !/\s/.test(e4[n4 - 1]); ) n4--;
            return n4;
          })(e3, c3.current, t3);
          m4 !== d4 && (d4 = m4, i2(m4)), c3.current < e3.length && (o4 = requestAnimationFrame(f2));
        };
        return o4 = requestAnimationFrame(f2), () => cancelAnimationFrame(o4);
      }, [e3, t3, n2, a3]);
      let h3 = n2 ? e3.slice(0, Math.min(d3, e3.length)) : e3;
      return { text: h3, revealing: h3.length < e3.length };
    })(e2, { streaming: t2, pace: l2, enabled: o2 }), g2 = t2 || y2, { blocks: v2, count: b2 } = a2 ? (function(e3, t3) {
      let a3 = e3;
      if (t3) {
        let e4 = a3.lastIndexOf("\n");
        C.test(a3.slice(e4 + 1)) && (a3 = a3.slice(0, e4 + 1));
      }
      let n2 = { n: 0 }, r2 = [], s2 = a3.split("\n"), i2 = null, o3 = [], l3 = () => {
        o3.length && r2.push({ kind: "p", units: M(o3.join(" "), n2) }), o3 = [];
      };
      for (let e4 = 0; e4 < s2.length; e4++) {
        let a4 = s2[e4].trim(), d3 = /^```(\w*)/.exec(a4);
        if (d3) {
          l3(), i2 = null;
          let a5 = [];
          for (e4++; e4 < s2.length && !/^\s*```/.test(s2[e4]); )
            a5.push(s2[e4++]);
          let o4 = e4 < s2.length || !t3 ? a5 : a5.slice(0, -1);
          r2.push({
            kind: "code",
            lang: d3[1],
            source: a5.join("\n"),
            units: o4.map((e5) => ({
              kind: "line",
              text: e5,
              index: n2.n++,
              space: false,
              sentence: -1
            }))
          });
          continue;
        }
        if (!a4) {
          l3(), i2 = null;
          continue;
        }
        let c3 = /^[-*+]\s+(.*)$/.exec(a4), u3 = /^\d+[.)]\s+(.*)$/.exec(a4), m3 = /^#{1,6}\s+(.*)$/.exec(a4);
        if (c3 || u3) {
          l3();
          let e5 = c3 ? "ul" : "ol";
          i2 && i2.kind === e5 || (i2 = { kind: e5, items: [] }, r2.push(i2)), i2.items.push(M((c3 ?? u3)[1], n2));
          continue;
        }
        if (i2 = null, m3) {
          l3(), r2.push({ kind: "h", units: M(m3[1], n2) });
          continue;
        }
        o3.push(a4);
      }
      return l3(), { blocks: r2, count: n2.n };
    })(x2, g2) : (h2 = { n: 0 }, {
      blocks: x2.split(/\n{2,}/).filter((e3) => e3.trim()).map((e3) => ({
        kind: "p",
        units: e3.trim().split(/\s+/).map((e4, t3) => ({
          kind: "text",
          text: e4,
          bold: false,
          index: h2.n++,
          space: t3 > 0,
          sentence: -1
        }))
      })),
      count: h2.n
    }), w2 = (0, r.useRef)(c2);
    (0, r.useEffect)(() => {
      w2.current = c2;
    });
    let [j2, k2] = (0, r.useState)(() => ({
      count: b2,
      starts: [0],
      enterFrom: t2 ? 0 : b2
    })), T2 = j2;
    b2 !== j2.count && k2(
      T2 = b2 > j2.count ? {
        ...j2,
        count: b2,
        starts: j2.starts[j2.starts.length - 1] === j2.count ? j2.starts : [...j2.starts, j2.count]
      } : {
        count: b2,
        starts: j2.starts.filter((e3) => e3 < b2),
        enterFrom: Math.min(j2.enterFrom, b2)
      }
    );
    let S2 = (e3) => {
      let t3 = 0, a3 = T2.starts.length - 1;
      for (; t3 < a3; ) {
        let n2 = t3 + a3 + 1 >> 1;
        T2.starts[n2] <= e3 ? t3 = n2 : a3 = n2 - 1;
      }
      return T2.starts[t3];
    }, L2 = (e3) => {
      let t3 = [];
      for (let a3 of e3) {
        let e4 = S2(a3.index), n2 = t3[t3.length - 1];
        n2 && n2.start === e4 ? n2.units.push(a3) : t3.push({ start: e4, units: [a3] });
      }
      return t3.map(
        (e4) => (0, n.jsx)(
          E,
          { units: e4.units, enter: !_2 && e4.start >= T2.enterFrom, cite: w2 },
          e4.units[0].index
        )
      );
    }, [$2, I2] = (0, r.useState)(-1);
    (0, r.useEffect)(() => {
      if (!t2 || y2) return;
      let e3 = window.setTimeout(() => I2(b2), 450);
      return () => window.clearTimeout(e3);
    }, [t2, y2, b2]);
    let B2 = t2 && !y2 && $2 === b2 && b2 > 0, z2 = (0, n.jsx)(i.N, {
      initial: false,
      children: B2 ? (0, n.jsx)(R, {}, "wait") : null
    }), P2 = (0, r.useRef)(u2), H2 = (0, r.useRef)(m2);
    (0, r.useEffect)(() => {
      P2.current = u2, H2.current = m2;
    }), (0, r.useEffect)(() => {
      P2.current?.(x2);
    }, [x2]);
    let Y2 = !g2 && x2.length > 0;
    (0, r.useEffect)(() => {
      Y2 && H2.current?.();
    }, [Y2]);
    let D2 = v2.length - 1, W2 = { duration: _2 ? 0 : f.T.duration.fast, ease: [...f.T.ease.standard] };
    return (0, n.jsxs)("div", {
      className: [N().stage, p2].filter(Boolean).join(" "),
      "aria-busy": g2 || void 0,
      children: [
        (0, n.jsx)(i.N, {
          initial: false,
          children: d2 && t2 && !x2.trim() ? (0, n.jsx)(
            s.PY1.div,
            {
              className: N().placeholder,
              role: "status",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: W2 },
              transition: W2,
              children: d2
            },
            "placeholder"
          ) : null
        }),
        v2.length ? (0, n.jsx)("div", {
          className: a2 ? N().markdown : N().plain,
          children: v2.map((e3, t3) => {
            let a3 = t3 === D2 ? z2 : null;
            if ("code" === e3.kind)
              return (0, n.jsxs)(
                F,
                {
                  lang: e3.lang,
                  source: e3.source,
                  children: [L2(e3.units), a3]
                },
                `c${t3}`
              );
            if ("items" in e3) {
              let r2 = e3.kind;
              return (0, n.jsx)(
                r2,
                {
                  className: N().list,
                  children: e3.items.map(
                    (t4, r3) => (0, n.jsxs)(
                      q,
                      {
                        enter: !_2 && (t4[0]?.index ?? 0) >= T2.enterFrom,
                        children: [
                          L2(t4),
                          r3 === e3.items.length - 1 ? a3 : null
                        ]
                      },
                      r3
                    )
                  )
                },
                `${e3.kind}${t3}`
              );
            }
            return "h" === e3.kind ? (0, n.jsxs)(
              "h4",
              { className: N().heading, children: [L2(e3.units), a3] },
              `h${t3}`
            ) : (0, n.jsxs)(
              "p",
              { className: N().paragraph, children: [L2(e3.units), a3] },
              `p${t3}`
            );
          })
        }) : null
      ]
    });
  }
  function q({ enter: e2, children: t2 }) {
    let [a2] = (0, r.useState)(e2);
    return (0, n.jsx)("li", {
      className: a2 ? N().itemEnter : void 0,
      children: t2
    });
  }
  function H({ title: e2 = "Claude", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  class Y extends Error {
    constructor(e2, { retryable: t2 = true } = {}) {
      super(e2), this.name = "ArenaRunError", this.retryable = t2;
    }
  }
  let D = "#D97757", W = "var(--series-3)", G = "var(--series-1)", U = [
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      shortName: "Opus 5.5",
      provider: "Anthropic",
      mark: H,
      markColor: D,
      price: { input: 4, output: 20 },
      color: W
    },
    {
      id: "gpt-6-1-sol",
      name: "GPT-6.1 Sol",
      provider: "OpenAI",
      mark: function({ title: e2 = "OpenAI", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          })
        });
      },
      price: { input: 5, output: 30 },
      color: "var(--series-4)"
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      provider: "Google",
      mark: function({ title: e2 = "Gemini", ...t2 }) {
        let a2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, n.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: [
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: "#3186FF"
            }),
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#arena-gemini-0-${a2})`
            }),
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#arena-gemini-1-${a2})`
            }),
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#arena-gemini-2-${a2})`
            }),
            (0, n.jsxs)("defs", {
              children: [
                (0, n.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `arena-gemini-0-${a2}`,
                  x1: "7",
                  x2: "11",
                  y1: "15.5",
                  y2: "12",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#08B962" }),
                    (0, n.jsx)("stop", {
                      offset: "1",
                      stopColor: "#08B962",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, n.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `arena-gemini-1-${a2}`,
                  x1: "8",
                  x2: "11.5",
                  y1: "5.5",
                  y2: "11",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#F94543" }),
                    (0, n.jsx)("stop", {
                      offset: "1",
                      stopColor: "#F94543",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, n.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `arena-gemini-2-${a2}`,
                  x1: "3.5",
                  x2: "17.5",
                  y1: "13.5",
                  y2: "12",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#FABC12" }),
                    (0, n.jsx)("stop", {
                      offset: ".46",
                      stopColor: "#FABC12",
                      stopOpacity: "0"
                    })
                  ]
                })
              ]
            })
          ]
        });
      },
      price: { input: 3.5, output: 21 },
      color: G
    },
    {
      id: "grok-4-7",
      name: "Grok 4.7",
      provider: "xAI",
      mark: function({ title: e2 = "Grok", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          fillRule: "evenodd",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815"
          })
        });
      },
      price: { input: 3, output: 15 },
      color: "var(--series-2)"
    },
    {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      shortName: "Sonnet 5.5",
      provider: "Anthropic",
      mark: H,
      markColor: D,
      price: { input: 2, output: 10 },
      color: W
    },
    {
      id: "deepseek-v4-1-flash",
      name: "DeepSeek V4.1 Flash",
      shortName: "V4.1 Flash",
      provider: "DeepSeek",
      mark: function({ title: e2 = "DeepSeek", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z",
            fill: "#4D6BFE"
          })
        });
      },
      price: { input: 0.14, output: 0.56 },
      color: G
    },
    {
      id: "mistral-large-4",
      name: "Mistral Large 4",
      provider: "Mistral AI",
      mark: function({ title: e2 = "Mistral AI", ...t2 }) {
        return (0, n.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: [
            (0, n.jsx)("path", {
              d: "M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z",
              fill: "gold"
            }),
            (0, n.jsx)("path", {
              d: "M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z",
              fill: "#FFAF00"
            }),
            (0, n.jsx)("path", {
              d: "M3.428 10.258h17.144v3.428H3.428v-3.428z",
              fill: "#FF8205"
            }),
            (0, n.jsx)("path", {
              d: "M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z",
              fill: "#FA500F"
            }),
            (0, n.jsx)("path", {
              d: "M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z",
              fill: "#E10500"
            })
          ]
        });
      },
      price: { input: 1.5, output: 6 },
      color: W
    }
  ], V = [
    {
      id: "sql",
      label: "Top customers in SQL",
      text: "Write a Postgres query for the top 5 customers by revenue in Q3 2026, with their order count."
    },
    {
      id: "mutex",
      label: "Mutex or semaphore",
      text: "Explain the difference between a mutex and a semaphore to a junior engineer, with one example each."
    },
    {
      id: "decline",
      label: "Decline a meeting",
      text: "Write a short, warm reply to Priya declining Thursday's 3pm roadmap sync, and offer async notes instead."
    }
  ], K = {
    "claude-opus-5-5": { ttft: 760, cps: 600 },
    "gpt-6-1-sol": { ttft: 560, cps: 620 },
    "gemini-4-argon": { ttft: 980, cps: 640 },
    "grok-4-7": { ttft: 480, cps: 610 },
    "claude-sonnet-5-5": { ttft: 520, cps: 650 },
    "deepseek-v4-1-flash": { ttft: 420, cps: 660 },
    "mistral-large-4": { ttft: 640, cps: 580 }
  }, Q = [
    { prompt: "sql", models: ["claude-opus-5-5", "gpt-6-1-sol"] },
    { prompt: "mutex", models: ["gemini-4-argon", "grok-4-7"] },
    { prompt: "decline", models: ["mistral-large-4", "claude-sonnet-5-5"] }
  ], Z = {
    sql: {
      "claude-opus-5-5": `Here's a query that ranks customers by paid revenue for Q3 2026 (July 1 to September 30):

\`\`\`sql
select
  c.id,
  c.name,
  count(o.id)                as orders,
  sum(o.total_cents) / 100.0 as revenue
from orders o
join customers c on c.id = o.customer_id
where o.status = 'paid'
  and o.created_at >= '2026-07-01'
  and o.created_at <  '2026-10-01'
group by c.id, c.name
order by revenue desc
limit 5;
\`\`\`

A few choices worth checking against your schema:

- **Half-open range.** \`< '2026-10-01'\` keeps every order placed on September 30, which \`between\` would cut off at midnight.
- **Paid orders only.** Refunds and drafts are left out. Drop the status filter if you report gross bookings.
- **Ties.** If two customers share fifth place, swap \`limit 5\` for \`fetch first 5 rows with ties\`.`,
      "gpt-6-1-sol": `\`\`\`sql
with q3 as (
  select customer_id, count(*) as order_count, sum(total_cents) as revenue_cents
  from orders
  where status = 'paid'
    and created_at >= date '2026-07-01'
    and created_at <  date '2026-10-01'
  group by customer_id
)
select c.name, q3.order_count, round(q3.revenue_cents / 100.0, 2) as revenue_usd
from q3
join customers c on c.id = q3.customer_id
order by q3.revenue_cents desc
limit 5;
\`\`\`

**Why a CTE:** orders are aggregated first, so the join touches one row per customer instead of one per order.

**Speed tip:** an index on \`orders (status, created_at) include (customer_id, total_cents)\` turns this into an index-only scan.`,
      "gemini-4-argon": `Sure. Below is a query that returns the five highest-revenue customers for Q3 2026, along with how many orders each placed and their share of the quarter's revenue.

\`\`\`sql
select
  c.name,
  count(*)                                    as orders,
  sum(o.total_cents) / 100.0                  as revenue,
  round(100.0 * sum(o.total_cents)
        / sum(sum(o.total_cents)) over (), 1) as share_pct
from orders o
join customers c on c.id = o.customer_id
where o.status = 'paid'
  and o.created_at >= timestamptz '2026-07-01 00:00 UTC'
  and o.created_at <  timestamptz '2026-10-01 00:00 UTC'
group by c.id, c.name
order by revenue desc
limit 5;
\`\`\`

How it works:

1. **Filter** to paid orders inside the quarter, with explicit UTC boundaries so the result does not shift with the session time zone.
2. **Group** by customer to count orders and sum revenue.
3. **Window** over the grouped rows to get each customer's share of the quarter's total.
4. **Sort and limit** to the top five.

Note that the window is evaluated before \`limit\`, so \`share_pct\` is measured against every customer, not only the top five.`,
      "grok-4-7": `Here you go, no fluff:

\`\`\`sql
select c.name, count(*) as orders, sum(o.total_cents) / 100.0 as revenue
from orders o join customers c on c.id = o.customer_id
where o.created_at >= '2026-07-01' and o.created_at < '2026-10-01'
  and o.status = 'paid'
group by c.name
order by revenue desc
limit 5;
\`\`\`

Heads up: grouping by \`name\` merges two customers who share one. Group by \`c.id\` too if your data has duplicates.`,
      "claude-sonnet-5-5": `\`\`\`sql
select c.id, c.name,
       count(o.id) as orders,
       sum(o.total_cents) / 100.0 as revenue
from customers c
join orders o on o.customer_id = c.id
where o.status = 'paid'
  and o.created_at >= '2026-07-01'
  and o.created_at <  '2026-10-01'
group by c.id, c.name
order by revenue desc
limit 5;
\`\`\`

This assumes amounts are stored in cents and only \`paid\` orders count as revenue. To sanity check it, compare the top five's total with a plain \`sum(total_cents)\` over the same date range.`,
      "deepseek-v4-1-flash": `\`\`\`sql
select c.name, count(o.id) orders, sum(o.total_cents) / 100.0 revenue
from orders o
join customers c on c.id = o.customer_id
where o.status = 'paid'
  and o.created_at >= '2026-07-01' and o.created_at < '2026-10-01'
group by c.id, c.name
order by revenue desc
limit 5;
\`\`\`

Assumes \`total_cents\` and a \`paid\` status.`,
      "mistral-large-4": `The following query uses \`date_trunc\` to select the third quarter of 2026:

\`\`\`sql
select
  c.name,
  count(o.id) as order_count,
  sum(o.total_cents) / 100.0 as revenue
from orders o
join customers c on c.id = o.customer_id
where date_trunc('quarter', o.created_at) = date '2026-07-01'
  and o.status = 'paid'
group by c.id, c.name
order by revenue desc
limit 5;
\`\`\`

It reads well, but wrapping \`created_at\` in a function stops a plain index on that column from being used. On large tables, prefer an explicit range: \`created_at >= '2026-07-01' and created_at < '2026-10-01'\`.`
    },
    mutex: {
      "claude-opus-5-5": `Both control access to something shared, but they answer different questions.

### Mutex: who holds it
A mutex is a lock with an owner. One thread takes it, does its work, and the same thread releases it. Everyone else waits.

**Example:** two requests updating the same cart. Each takes the cart's mutex, reads, writes, then releases, so neither overwrites the other's change.

### Semaphore: how many may enter
A semaphore is a counter of permits. Any thread can take a permit while one is left, and any thread can return one. It has no owner.

**Example:** your database allows 10 connections. A semaphore of 10 lets ten workers query at once; the eleventh waits until a permit comes back.

A useful rule of thumb: reach for a mutex to protect data, and a semaphore to limit capacity.`,
      "gpt-6-1-sol": `**Mutex:** one at a time, and whoever locks it unlocks it.
**Semaphore:** up to N at a time, and anyone can signal.

- **Ownership:** a mutex belongs to the thread that locked it. A semaphore is just a count.
- **Capacity:** a mutex is effectively 1. A semaphore can be any N.
- **Typical bug:** forgetting to unlock a mutex stalls everyone; releasing a semaphore twice quietly raises the limit.

**Mutex example:** guarding a shared \`Map\` in an in-memory cache so two writers never interleave.

**Semaphore example:** a crawler that allows at most 4 concurrent requests to one site, to stay polite.`,
      "gemini-4-argon": `Great question, and a common source of confusion. A helpful analogy is a coffee shop.

1. **A mutex is the single restroom key.** Whoever has the key goes in; everyone else waits. Only the person holding the key can hand it back.
2. **A semaphore is the count of free tables.** The host tracks a number. While tables are free, people sit down. At zero, new arrivals wait until someone leaves.

### Key differences
- **Count:** a mutex allows exactly one holder. A semaphore allows up to N.
- **Ownership:** a mutex must be released by the thread that acquired it. A semaphore can be released by any thread, which also makes it useful for signaling between threads.
- **Use case:** mutexes protect a critical section. Semaphores manage a pool of identical resources.

### Examples
- **Mutex:** incrementing a shared \`requestCount\` from many threads. Without the lock, two threads can both read 41 and both write 42, and one increment disappears.
- **Semaphore:** a print server with 3 printers. A semaphore initialized to 3 lets three jobs print at once and queues the rest.

One last tip: a semaphore with a count of 1 behaves like a mutex, but without ownership, so it will not catch a thread releasing a lock it never took.`,
      "grok-4-7": `Short version: a mutex is a bathroom lock, a semaphore is a bouncer with a clicker.

**Mutex.** One person in, door locked, and only they can unlock it. Use it when two threads must never touch the same thing at once, like appending to one log file.

**Semaphore.** The bouncer lets in up to N people and counts them out. Use it to cap concurrency, like allowing only 5 image resizes at a time so the server doesn't melt.

If you remember one thing: a mutex says **mine**, a semaphore says **how many**.`,
      "claude-sonnet-5-5": `A **mutex** gives one thread exclusive access and must be released by that same thread. A **semaphore** holds a number of permits that any thread can take or return.

Mutex, protecting a shared balance:

\`\`\`python
lock = threading.Lock()

def deposit(amount):
    with lock:
        account.balance += amount
\`\`\`

Semaphore, capping parallel downloads at 3:

\`\`\`python
slots = threading.Semaphore(3)

def download(url):
    with slots:
        fetch(url)
\`\`\`

Same shape in code, different intent: the lock keeps one writer at a time, the semaphore keeps three workers at a time.`,
      "deepseek-v4-1-flash": `- **Mutex:** a lock with an owner. One thread at a time. Example: protecting a shared counter.
- **Semaphore:** a counter of permits, no owner. Up to N threads at a time. Example: limiting a pool to 10 database connections.

A binary semaphore is close to a mutex, minus the ownership check.`,
      "mistral-large-4": `A mutex provides mutual exclusion: exactly one thread may hold it, and only that thread may release it. A semaphore maintains a count of available permits and has no notion of ownership.

**Example of a mutex.** A logging service writes entries to one file. Each write acquires the mutex, so lines from different threads never interleave.

**Example of a semaphore.** An API client may send at most 8 requests in parallel. A semaphore initialised to 8 is decremented before each request and incremented after it.

In short, use a mutex for the correctness of shared state and a semaphore to control concurrency.`
    },
    decline: {
      "claude-opus-5-5": `Hi Priya,

Thanks for pulling the roadmap sync together. I'm going to sit out Thursday at 3pm so I can stay heads down on the billing migration, but I don't want to slow anything down.

I'll leave notes on the three open items in the doc by Wednesday evening, and I'm happy to pick up follow-ups async. If something really needs a live conversation, grab 15 minutes on my calendar Friday morning.

Thanks for understanding,

Sam`,
      "gpt-6-1-sol": `**Option 1, warm**

Hi Priya, thanks for the invite! I can't make Thursday's 3pm sync, but I'll leave my comments on the roadmap doc by Wednesday night so you have them going in. Happy to answer anything async.

**Option 2, shorter**

Hi Priya, I'll skip Thursday's sync to protect some focus time. My notes will be in the doc by Wednesday. Ping me if anything needs me live.`,
      "gemini-4-argon": `Here's a reply that declines clearly while keeping things warm:

**Subject:** Re: Roadmap sync, Thursday 3pm

Hi Priya,

Thank you for including me. Unfortunately I won't be able to join on Thursday at 3pm, as I've blocked that afternoon for the billing migration cutover.

So that my input still makes it into the discussion, I'll add written notes to the roadmap doc by end of day Wednesday, covering the pricing page timeline, the onboarding experiment and the API deprecation dates. Feel free to tag me with questions and I'll reply the same day.

Looking forward to seeing where the group lands.

Best,

Sam

Why this works:
- It gives a specific reason without over-explaining.
- It commits to a concrete deliverable and a deadline.
- It keeps the door open for follow-up.`,
      "grok-4-7": "Hey Priya! Going to pass on Thursday's 3pm, my calendar is already a crime scene. I'll drop async notes in the doc before then, so you get my hot takes without me eating 30 minutes of everyone's afternoon. Ping me if anything's on fire.",
      "claude-sonnet-5-5": `Hi Priya,

Thanks for the invite. I won't make Thursday's 3pm sync, but I'll add my notes to the roadmap doc by Wednesday evening so they're ready for the discussion. Feel free to tag me on anything you want my take on.

Thanks,

Sam`,
      "deepseek-v4-1-flash": "Hi Priya, thanks for the invite. I can't join Thursday at 3pm, but I'll share my notes in the doc beforehand. Happy to follow up async.",
      "mistral-large-4": `Hi Priya,

Thank you for the invitation to Thursday's roadmap sync. Regrettably, I will not be able to attend at 3pm. I will share my written notes in the roadmap document on Wednesday, so that my points can be discussed in my absence.

Kind regards,

Sam`
    }
  };
  function X(e2, t2) {
    return new Promise((a2, n2) => {
      if (t2.aborted) return void n2(t2.reason);
      let r2 = performance.now() + e2, s2 = 0, i2 = () => {
        cancelAnimationFrame(s2), n2(t2.reason);
      }, o2 = (e3) => {
        if (e3 >= r2) {
          t2.removeEventListener("abort", i2), a2();
          return;
        }
        s2 = requestAnimationFrame(o2);
      };
      t2.addEventListener("abort", i2, { once: true }), s2 = requestAnimationFrame(o2);
    });
  }
  let J = (e2) => 1 + (2 * Math.random() - 1) * e2;
  function ee() {
    let e2 = false;
    return async function* (t2, a2, n2) {
      let r2, s2 = (r2 = V.find((e3) => e3.text.trim() === a2.trim())) ? Z[r2.id]?.[t2.id] : void 0, i2 = K[t2.id] ?? { ttft: 600, cps: 520 };
      if (await X(i2.ttft * J(0.18), n2), !s2)
        throw new Y(
          "This preview has scripted answers for the sample prompts only. Pass a run function to stream real models.",
          { retryable: false }
        );
      let o2 = e2 || "mistral-large-4" !== t2.id ? -1 : Math.floor(0.46 * s2.length), l2 = i2.cps * J(0.04), d2 = performance.now(), c2 = 0;
      for (; c2 < s2.length; ) {
        await X(30 + 10 * Math.random(), n2);
        let t3 = Math.floor((performance.now() - d2) / 1e3 * l2);
        if (t3 <= c2) continue;
        let a3 = Math.min(s2.length, t3);
        for (; a3 < s2.length && !/\s/.test(s2[a3]); ) a3++;
        if (o2 > 0 && a3 >= o2)
          throw e2 = true, new Y("The connection closed before the answer finished.");
        yield s2.slice(c2, a3), c2 = a3;
      }
    };
  }
  var et = a(36083), ea = a(83978), en = a(92571), er = a(9083), es = a(23723), ei = a(52898), eo = a(5024), el = a.n(eo);
  let { spring: ed, duration: ec, ease: eu } = f.T, em = { type: "spring", visualDuration: 0.24, bounce: 0 }, ep = [...eu.standard], eh = (...e2) => e2.filter(Boolean).join(" "), ef = (e2) => "waiting" === e2 || "streaming" === e2, e_ = (e2) => String.fromCharCode(65 + e2);
  function ex(e2, t2) {
    let { startedAt: a2, firstAt: n2, status: r2, model: s2 } = e2, i2 = e2.endedAt ?? t2, o2 = void 0 === n2 ? 0 : i2 - n2, l2 = e2.outTokens > 0 && o2 > ("streaming" === r2 ? 400 : 120) ? e2.outTokens / (o2 / 1e3) : void 0;
    return {
      ttft: void 0 === a2 ? void 0 : void 0 !== n2 ? n2 - a2 : "waiting" === r2 ? t2 - a2 : void 0,
      total: void 0 === a2 ? void 0 : i2 - a2,
      tps: l2,
      cost: (e2.inTokens * s2.price.input + e2.outTokens * s2.price.output) / 1e6,
      outTokens: e2.outTokens
    };
  }
  function ey({
    swapKey: e2,
    children: t2,
    measure: a2,
    reduced: o2,
    className: l2
  }) {
    let d2 = (0, r.useRef)(null), c2 = (0, r.useRef)(null), [u2, m2] = (0, r.useState)({ width: "auto", animate: false });
    return (0, r.useLayoutEffect)(() => {
      let e3 = d2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        if (!t4) return;
        let a3 = e3.dataset.key ?? "", n2 = null !== c2.current && c2.current !== a3;
        c2.current = a3, m2({
          width: Math.ceil(
            t4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth
          ),
          animate: n2
        });
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.jsxs)(s.PY1.span, {
      className: eh(el().swap, l2),
      initial: false,
      animate: { width: u2.width },
      transition: u2.animate && !o2 ? em : { duration: 0 },
      children: [
        (0, n.jsx)("span", {
          ref: d2,
          "data-key": e2,
          className: eh(el().swapInner, el().swapMeasure),
          "aria-hidden": "true",
          children: a2 ?? t2
        }),
        (0, n.jsx)(i.N, {
          initial: false,
          mode: "popLayout",
          children: (0, n.jsx)(
            s.PY1.span,
            {
              className: el().swapInner,
              initial: o2 ? { opacity: 0 } : { opacity: 0, y: 2 },
              animate: { opacity: 1, y: 0 },
              exit: {
                opacity: 0,
                transition: { duration: 0.1 * !o2, ease: ep }
              },
              transition: { duration: o2 ? 0 : ec.fast, ease: ep },
              children: t2
            },
            e2
          )
        })
      ]
    });
  }
  function eg({ model: e2, className: t2 }) {
    let a2 = e2.mark;
    return a2 ? (0, n.jsx)(a2, {
      className: eh(el().mark, t2),
      style: e2.markColor ? { color: e2.markColor } : void 0,
      "aria-hidden": "true",
      title: e2.name
    }) : (0, n.jsx)("span", {
      className: eh(el().markLetter, t2),
      "aria-hidden": "true",
      children: e2.name[0]
    });
  }
  function ev({ model: e2, slot: t2, revealed: a2, reduced: r2, short: s2 = false }) {
    let i2 = a2 ? s2 ? e2.shortName ?? e2.name : e2.name : `Model ${e_(t2)}`;
    return (0, n.jsxs)(ey, {
      swapKey: a2 ? `model-${e2.id}` : `blind-${t2}`,
      reduced: r2,
      className: el().identity,
      children: [
        a2 && (0, n.jsx)("span", {
          className: el().identityMark,
          children: (0, n.jsx)(eg, { model: e2 })
        }),
        (0, n.jsx)("span", { className: el().identityName, children: i2 })
      ]
    });
  }
  function eb({ pane: e2, reduced: t2, compact: a2 = false }) {
    let {
      key: r2,
      label: s2,
      icon: i2,
      busy: o2
    } = (function(e3, t3) {
      switch (e3.status) {
        case "waiting":
          return {
            key: "thinking",
            label: "Thinking",
            icon: (0, n.jsx)(en.A, { className: el().spin }),
            busy: true
          };
        case "streaming":
          return {
            key: "writing",
            label: "Writing",
            icon: (0, n.jsx)(en.A, { className: el().spin }),
            busy: true
          };
        case "done":
          return 1 === e3.finish ? {
            key: "first",
            label: t3 ? "First" : "Finished first",
            icon: (0, n.jsx)(er.A, {})
          } : { key: "done", label: "Done", icon: (0, n.jsx)(p.A, {}) };
        case "stopped":
          return {
            key: "stopped",
            label: "Stopped",
            icon: (0, n.jsx)(l.A, { className: el().stopGlyph })
          };
        case "error":
          return { key: "error", label: "Failed", icon: (0, n.jsx)(w.A, {}) };
        default:
          return { key: "idle", label: "Ready", icon: (0, n.jsx)(es.A, {}) };
      }
    })(e2, a2), d2 = (e3) => (0, n.jsxs)("span", {
      className: el().status,
      "data-status": r2,
      children: [
        (0, n.jsx)("span", {
          className: el().statusIcon,
          "aria-hidden": "true",
          children: i2
        }),
        e3
      ]
    });
    return (0, n.jsx)(ey, {
      swapKey: r2,
      reduced: t2,
      className: eh(el().statusSlot, a2 && el().statusCompact),
      measure: d2((0, n.jsx)("span", { children: s2 })),
      children: d2(
        o2 ? (0, n.jsx)(ei.n, { className: el().statusLabel, children: s2 }) : (0, n.jsx)("span", { className: el().statusLabel, children: s2 })
      )
    });
  }
  function ew({ value: e2, decimals: t2 = 0, prefix: a2 }) {
    return (0, n.jsx)("span", {
      className: eh(el().num, el().appear),
      children: (0, n.jsx)(_.q, { value: e2, decimals: t2, prefix: a2 })
    });
  }
  function ej({ pane: e2 }) {
    let t2, a2 = (function(e3, t3 = 90) {
      let [a3, n2] = (0, r.useState)(
        () => "u" < typeof performance ? 0 : performance.now()
      );
      return (0, r.useEffect)(() => {
        if (!e3) return;
        let a4 = 0, r2 = 0, s3 = (e4) => {
          e4 - r2 >= t3 && (r2 = e4, n2(e4)), a4 = requestAnimationFrame(s3);
        };
        return a4 = requestAnimationFrame(s3), () => cancelAnimationFrame(a4);
      }, [e3, t3]), a3;
    })("waiting" === e2.status), s2 = (function(e3, t3, a3 = 500) {
      let n2 = (0, r.useRef)(e3);
      (0, r.useEffect)(() => {
        n2.current = e3;
      });
      let [s3, i3] = (0, r.useState)(null);
      return (0, r.useEffect)(() => {
        if (!t3) return;
        let e4 = 0, r2 = -1 / 0, s4 = (t4) => {
          t4 - r2 >= a3 && (r2 = t4, i3({ run: n2.current.startedAt, value: ex(n2.current, t4) })), e4 = requestAnimationFrame(s4);
        };
        return e4 = requestAnimationFrame(s4), () => cancelAnimationFrame(e4);
      }, [t3, a3]), t3 && s3 && s3.run === e3.startedAt ? s3.value : null;
    })(e2, "streaming" === e2.status) ?? ex(e2, Math.max(a2, e2.startedAt ?? 0)), i2 = void 0 !== e2.startedAt, o2 = Math.round(1e4 * s2.cost) / 1e4;
    return (0, n.jsxs)("dl", {
      className: el().metrics,
      "aria-label": `Model ${e_(e2.slot)} metrics`,
      children: [
        (0, n.jsxs)("div", {
          className: el().metric,
          children: [
            (0, n.jsx)("dt", { children: "First token" }),
            (0, n.jsx)("dd", {
              children: (0, n.jsx)("span", {
                className: el().value,
                "data-live": "waiting" === e2.status || void 0,
                children: void 0 === (t2 = s2.ttft) ? "\u2013" : `${(t2 / 1e3).toFixed(2)}s`
              })
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: el().metric,
          children: [
            (0, n.jsx)("dt", { className: el().srOnly, children: "Speed" }),
            (0, n.jsxs)("dd", {
              children: [
                (0, n.jsx)("span", {
                  className: el().value,
                  style: { minWidth: "3ch" },
                  children: void 0 === s2.tps ? "\u2013" : (0, n.jsx)(ew, { value: Math.round(s2.tps) })
                }),
                " ",
                (0, n.jsx)("span", { className: el().unit, children: "tok/s" })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: el().metric,
          children: [
            (0, n.jsx)("dt", { className: el().srOnly, children: "Cost" }),
            (0, n.jsx)("dd", {
              children: (0, n.jsx)("span", {
                className: el().value,
                children: i2 ? (0, n.jsx)(ew, {
                  value: o2,
                  decimals: o2 >= 1 ? 2 : 4,
                  prefix: "$"
                }) : "\u2013"
              })
            })
          ]
        })
      ]
    });
  }
  function ek({
    pane: e2,
    revealed: t2,
    reduced: a2,
    smooth: o2,
    panel: l2,
    onRetry: d2,
    onPromptHelp: c2
  }) {
    let { scroller: u2, content: m2 } = (function(e3) {
      let t3 = (0, r.useRef)(null), a3 = (0, r.useRef)(null), n2 = (0, r.useRef)(true), s2 = (0, r.useRef)(0), [i2, o3] = (0, r.useState)(false), [l3, d3] = (0, r.useState)(false), c3 = (0, r.useCallback)(
        (a4 = false) => {
          let r2 = t3.current;
          if (!r2) return;
          cancelAnimationFrame(s2.current);
          let i3 = () => {
            let t4 = r2.scrollHeight - r2.clientHeight, o4 = t4 - r2.scrollTop;
            !(o4 <= 0.5) && n2.current && (r2.scrollTop = a4 || e3 ? t4 : r2.scrollTop + Math.max(1, 0.16 * o4), s2.current = requestAnimationFrame(i3));
          };
          i3();
        },
        [e3]
      );
      return (0, r.useEffect)(() => {
        let e4 = t3.current, r2 = a3.current;
        if (!e4 || !r2) return;
        let i3 = false, l4 = e4.scrollTop, u3 = 0, m3 = () => {
          n2.current && (n2.current = false, cancelAnimationFrame(s2.current));
        }, p3 = () => {
          let t4 = e4.scrollHeight - e4.clientHeight - e4.scrollTop;
          i3 && e4.scrollTop < l4 - 1 && m3(), t4 < 6 && (n2.current = true), l4 = e4.scrollTop, o3(!n2.current && t4 > 60), d3(e4.scrollTop > 56);
        }, h2 = (e5) => {
          e5.deltaY < 0 && m3();
        }, f3 = (e5) => {
          u3 = e5.touches[0]?.clientY ?? 0;
        }, _2 = (e5) => {
          (e5.touches[0]?.clientY ?? 0) > u3 + 2 && m3();
        }, x2 = (e5) => {
          (["ArrowUp", "PageUp", "Home"].includes(e5.key) || " " === e5.key && e5.shiftKey) && m3();
        }, y2 = (t4) => {
          t4.target === e4 && (i3 = true);
        }, g2 = () => {
          i3 = false;
        }, v2 = new ResizeObserver(() => {
          n2.current ? c3() : p3();
        });
        return v2.observe(r2), e4.addEventListener("scroll", p3, { passive: true }), e4.addEventListener("wheel", h2, { passive: true }), e4.addEventListener("touchstart", f3, { passive: true }), e4.addEventListener("touchmove", _2, { passive: true }), e4.addEventListener("keydown", x2), e4.addEventListener("pointerdown", y2), window.addEventListener("pointerup", g2), () => {
          v2.disconnect(), e4.removeEventListener("scroll", p3), e4.removeEventListener("wheel", h2), e4.removeEventListener("touchstart", f3), e4.removeEventListener("touchmove", _2), e4.removeEventListener("keydown", x2), e4.removeEventListener("pointerdown", y2), window.removeEventListener("pointerup", g2), cancelAnimationFrame(s2.current);
        };
      }, [c3]), {
        scroller: t3,
        content: a3,
        away: i2,
        scrolled: l3,
        jump: (0, r.useCallback)(() => {
          n2.current = true, o3(false), c3();
        }, [c3])
      };
    })(a2), p2 = ef(e2.status), f2 = `Model ${e_(e2.slot)}`;
    return (0, n.jsxs)("section", {
      className: el().pane,
      "data-slot": e2.slot,
      id: l2?.id,
      role: l2 ? "tabpanel" : void 0,
      "aria-labelledby": l2?.labelledBy,
      "aria-label": l2 ? void 0 : t2 ? `${f2}, ${e2.model.name}` : f2,
      hidden: l2 && !l2.active || void 0,
      children: [
        l2 ? null : (0, n.jsxs)("header", {
          className: el().paneHead,
          children: [
            (0, n.jsx)(ev, {
              model: e2.model,
              slot: e2.slot,
              revealed: t2,
              reduced: a2
            }),
            (0, n.jsx)(eb, { pane: e2, reduced: a2 })
          ]
        }),
        (0, n.jsx)("div", {
          ref: u2,
          className: el().scroller,
          tabIndex: 0,
          "aria-label": `${f2} answer`,
          "aria-busy": p2 || void 0,
          children: (0, n.jsxs)("div", {
            ref: m2,
            className: el().content,
            children: [
              "idle" !== e2.status || e2.text ? null : (0, n.jsx)("p", {
                className: el().empty,
                children: "The answer streams here"
              }),
              e2.text ? (0, n.jsx)(O, {
                text: e2.text,
                streaming: p2,
                smooth: o2,
                className: el().answer
              }) : null,
              (0, n.jsx)(i.N, {
                initial: false,
                children: "error" === e2.status && e2.error ? (0, n.jsx)(
                  s.PY1.div,
                  {
                    className: el().error,
                    role: "alert",
                    initial: a2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: a2 ? { duration: 0 } : {
                      ...ed.smooth,
                      opacity: { duration: ec.fast, ease: ep }
                    },
                    children: (0, n.jsxs)("div", {
                      className: el().errorInner,
                      children: [
                        (0, n.jsxs)("p", {
                          className: el().errorTitle,
                          children: [
                            (0, n.jsx)(w.A, { "aria-hidden": "true" }),
                            e2.text ? "Stream interrupted" : "No answer"
                          ]
                        }),
                        (0, n.jsx)("p", {
                          className: el().errorText,
                          children: e2.error.message
                        }),
                        e2.error.retryable ? (0, n.jsxs)(x.$, {
                          variant: "secondary",
                          size: "sm",
                          onClick: () => d2(e2.slot),
                          children: [
                            (0, n.jsx)(h.A, {
                              "aria-hidden": "true"
                            }),
                            "Retry model ",
                            e_(e2.slot)
                          ]
                        }) : c2 ? (0, n.jsx)(x.$, {
                          variant: "secondary",
                          size: "sm",
                          onClick: c2,
                          children: "Use a sample prompt"
                        }) : null
                      ]
                    })
                  },
                  `error-${e2.attempt}`
                ) : null
              })
            ]
          })
        }),
        (0, n.jsx)(ej, { pane: e2 })
      ]
    });
  }
  function eN({
    id: e2,
    panes: t2,
    active: a2,
    revealed: r2,
    reduced: i2,
    onSelect: o2
  }) {
    let l2 = (e3) => {
      let n2 = t2.length - 1, r3 = "ArrowRight" === e3.key ? a2 === n2 ? 0 : a2 + 1 : "ArrowLeft" === e3.key ? 0 === a2 ? n2 : a2 - 1 : "Home" === e3.key ? 0 : "End" === e3.key ? n2 : -1;
      r3 < 0 || (e3.preventDefault(), o2(r3, true));
    };
    return (0, n.jsxs)("div", {
      className: el().tabs,
      role: "tablist",
      "aria-label": "Answers",
      children: [
        (0, n.jsx)(s.PY1.span, {
          className: el().tabHighlight,
          "aria-hidden": "true",
          initial: false,
          animate: { x: `${100 * a2}%` },
          transition: i2 ? { duration: 0 } : { duration: 0.22, ease: ep }
        }),
        t2.map(
          (t3, s2) => (0, n.jsxs)(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${e2}-tab-${t3.slot}`,
              "aria-controls": `${e2}-panel-${t3.slot}`,
              "aria-selected": s2 === a2,
              tabIndex: s2 === a2 ? 0 : -1,
              className: el().tab,
              "data-active": s2 === a2 || void 0,
              onClick: () => o2(s2),
              onKeyDown: l2,
              children: [
                (0, n.jsx)(ev, {
                  model: t3.model,
                  slot: t3.slot,
                  revealed: r2[s2],
                  reduced: i2,
                  short: true
                }),
                (0, n.jsx)(eb, { pane: t3, reduced: i2, compact: true })
              ]
            },
            t3.slot
          )
        )
      ]
    });
  }
  let { spring: eT, duration: eS } = f.T, eA = [
    "var(--series-1)",
    "var(--series-2)",
    "var(--series-3)",
    "var(--series-4)"
  ], eM = { ...eT.smooth, visualDuration: 0.34 }, eC = { wins: 0, ties: 0, losses: 0 }, eE = (e2) => e2.map(
    (e3) => `${e3.model.id}:${e3.record.wins}/${e3.record.ties}/${e3.record.losses}`
  ).join();
  function eR({ shown: e2, grow: t2, reduced: a2 }) {
    let { ref: o2, height: l2 } = (function() {
      let e3 = (0, r.useRef)(null), [t3, a3] = (0, r.useState)("auto");
      return (0, r.useLayoutEffect)(() => {
        let t4 = e3.current;
        if (!t4 || "u" < typeof ResizeObserver) return;
        let n2 = new ResizeObserver(
          ([e4]) => a3(e4.borderBoxSize?.[0]?.blockSize ?? t4.offsetHeight)
        );
        return n2.observe(t4), () => n2.disconnect();
      }, []), { ref: e3, height: t3 };
    })(), d2 = a2 ? { duration: 0 } : eM;
    return (0, n.jsx)(s.PY1.div, {
      className: el().boardClip,
      initial: false,
      animate: { height: l2 },
      transition: a2 ? { duration: 0 } : eT.smooth,
      children: (0, n.jsx)("div", {
        ref: o2,
        children: e2.length ? (0, n.jsxs)("div", {
          className: el().boardBody,
          children: [
            (0, n.jsx)("ol", {
              className: el().ranks,
              "aria-hidden": "true",
              children: e2.map(
                (e3, t3) => (0, n.jsx)("li", { children: t3 + 1 }, t3)
              )
            }),
            (0, n.jsx)("ol", {
              className: el().rows,
              children: (0, n.jsx)(i.N, {
                initial: false,
                mode: "popLayout",
                children: e2.map(
                  (e3, r2) => (0, n.jsxs)(
                    s.PY1.li,
                    {
                      layout: "position",
                      className: el().row,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.1 * !a2 }
                      },
                      transition: {
                        layout: d2,
                        opacity: { duration: a2 ? 0 : eS.fast, ease: ep }
                      },
                      children: [
                        (0, n.jsxs)("span", {
                          className: el().srOnly,
                          children: ["Rank ", r2 + 1, ", "]
                        }),
                        (0, n.jsx)(eg, { model: e3.model }),
                        (0, n.jsx)("span", {
                          className: el().rowName,
                          children: e3.model.name
                        }),
                        (0, n.jsx)("span", {
                          className: el().rateTrack,
                          "aria-hidden": "true",
                          children: (0, n.jsx)(s.PY1.span, {
                            className: el().rateFill,
                            style: { background: e3.color },
                            initial: !!t2 && { scaleX: 0 },
                            animate: { scaleX: e3.rate / 100 },
                            transition: t2 ? { ...d2, delay: 0.12 } : d2
                          })
                        }),
                        (0, n.jsxs)("span", {
                          className: eh(el().rateValue, el().num),
                          children: [
                            (0, n.jsx)("span", {
                              className: el().srOnly,
                              children: ", win rate "
                            }),
                            (0, n.jsx)(_.q, {
                              value: Math.round(e3.rate),
                              suffix: "%"
                            })
                          ]
                        })
                      ]
                    },
                    e3.model.id
                  )
                )
              })
            })
          ]
        }) : (0, n.jsx)("p", {
          className: el().boardEmpty,
          children: "Vote on a round and the models you judged land here, ranked by win rate."
        })
      })
    });
  }
  function eL({
    rows: e2,
    votes: t2,
    fresh: a2,
    before: s2,
    reduced: i2,
    onOpen: o2,
    onReset: l2
  }) {
    let d2 = (0, r.useId)(), [c2, u2] = (0, r.useState)(false), [m2, p2] = (0, r.useState)(null), [f2, _2] = (0, r.useState)(false), y2 = (0, r.useRef)(0);
    (0, r.useEffect)(() => () => window.clearTimeout(y2.current), []);
    let g2 = (m2 ?? e2).filter((e3) => e3.battles > 0).slice(0, 5);
    return (0, n.jsxs)(ea.AM, {
      open: c2,
      onOpenChange: (t3) => {
        u2(t3), window.clearTimeout(y2.current), p2(null), _2(false), !t3 || (o2(), !i2 && a2 && s2 && (s2.some((e3) => e3.battles > 0) ? eE(s2) !== eE(e2) && (p2(s2), y2.current = window.setTimeout(() => p2(null), 320)) : _2(true)));
      },
      children: [
        (0, n.jsx)(ea.Wv, {
          asChild: true,
          children: (0, n.jsxs)(x.$, {
            variant: "ghost",
            size: "sm",
            className: el().boardButton,
            "aria-label": a2 ? "Leaderboard, updated" : "Leaderboard",
            children: [
              (0, n.jsxs)("span", {
                className: el().boardIcon,
                "aria-hidden": "true",
                children: [
                  (0, n.jsx)(et.A, {}),
                  (0, n.jsx)("span", {
                    className: el().boardDot,
                    "data-on": a2 || void 0
                  })
                ]
              }),
              (0, n.jsx)("span", {
                className: el().boardLabel,
                children: "Leaderboard"
              })
            ]
          })
        }),
        (0, n.jsxs)(ea.hl, {
          align: "end",
          sideOffset: 8,
          className: el().board,
          "aria-labelledby": d2,
          children: [
            (0, n.jsxs)("div", {
              className: el().boardHead,
              children: [
                (0, n.jsx)("h3", {
                  id: d2,
                  className: el().boardTitle,
                  children: "Leaderboard"
                }),
                (0, n.jsx)("span", {
                  className: el().boardMeta,
                  children: 0 === t2 ? "No votes yet" : `${t2} ${1 === t2 ? "vote" : "votes"}`
                })
              ]
            }),
            (0, n.jsx)(eR, { shown: g2, grow: f2, reduced: i2 }),
            (0, n.jsxs)("div", {
              className: el().boardFoot,
              children: [
                (0, n.jsx)("span", { children: "A tie counts as half a win" }),
                (0, n.jsxs)(x.$, {
                  variant: "ghost",
                  size: "sm",
                  className: el().resetButton,
                  onClick: l2,
                  disabled: 0 === t2,
                  children: [
                    (0, n.jsx)(h.A, { "aria-hidden": "true" }),
                    "Reset"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let { spring: e$, duration: eI } = f.T, eB = (e2, t2) => ({
    slot: e2,
    model: t2,
    status: "idle",
    text: "",
    attempt: 0,
    inTokens: 0,
    outTokens: 0,
    usage: false
  }), ez = { wins: 0, ties: 0, losses: 0 }, eP = (e2) => [e2[0].model, e2[1].model], eF = (e2) => U.find((t2) => t2.id === e2);
  function eO(e2, t2) {
    let a2 = t2.map((e3) => e3.id).sort().join();
    for (let t3 = 0; t3 < 12; t3++) {
      let t4 = Math.floor(Math.random() * e2.length), n2 = Math.floor(Math.random() * (e2.length - 1));
      n2 >= t4 && n2++;
      let r2 = [e2[t4], e2[n2]];
      if (e2.length <= 2 || r2.map((e3) => e3.id).sort().join() !== a2)
        return r2;
    }
    return [e2[0], e2[1]];
  }
  function eq(e2, t2) {
    return "winner" === e2.type ? `You picked ${t2[e2.slot].name}` : "tie" === e2.type ? "You called it a tie" : "You marked both as bad";
  }
  let eH = () => () => {
  };
  function eY({ busy: e2, hint: t2 }) {
    return (0, n.jsxs)("span", {
      className: el().runLabel,
      children: [
        (0, n.jsxs)("span", {
          "data-on": !e2 || void 0,
          "aria-hidden": e2 || void 0,
          children: [
            (0, n.jsx)(o.A, { "aria-hidden": "true" }),
            "Run",
            (0, n.jsx)("span", {
              className: el().hint,
              "aria-hidden": "true",
              children: t2
            })
          ]
        }),
        (0, n.jsxs)("span", {
          "data-on": e2 || void 0,
          "aria-hidden": !e2 || void 0,
          children: [
            (0, n.jsx)(l.A, {
              className: el().stopIcon,
              "aria-hidden": "true"
            }),
            "Stop"
          ]
        })
      ]
    });
  }
  function eD({
    contestants: e2 = U,
    prompts: t2 = V,
    run: a2,
    onVote: o2,
    defaultBlind: l2 = true,
    autoStart: f2,
    initialStandings: g2,
    className: v2
  }) {
    let b2, w2 = A(), j2 = (0, r.useSyncExternalStore)(
      eH,
      () => /Mac|iPhone|iPad/.test(navigator.platform) ? "\u2318\u21B5" : "Ctrl \u21B5",
      () => "\u2318\u21B5"
    ), k2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), N2 = !a2, T2 = e2 === U && t2 === V, [S2] = (0, r.useState)(ee), M2 = a2 ?? S2, C2 = (0, r.useRef)(M2);
    (0, r.useEffect)(() => {
      C2.current = M2;
    });
    let [E2, R2] = (0, r.useState)(
      () => (T2 ? V.find((e3) => e3.id === Q[0].prompt)?.text : t2[0]?.text) ?? ""
    ), [L2, $2] = (0, r.useState)(l2), [I2, B2] = (0, r.useState)(() => {
      let t3 = T2 ? Q[0].models.map(eF) : [];
      return {
        id: 0,
        prompt: "",
        started: false,
        panes: (t3[0] && t3[1] ? [t3[0], t3[1]] : [e2[0], e2[1] ?? e2[0]]).map(
          (e3, t4) => eB(t4, e3)
        )
      };
    }), [z2, P2] = (0, r.useState)(() => ({ ...g2 })), [F2, O2] = (0, r.useState)(0), [q2, H2] = (0, r.useState)(false), [D2, W2] = (0, r.useState)(null), [G2, K2] = (0, r.useState)(""), [Z2, X2] = (0, r.useState)(0), [J2, et2] = (0, r.useState)(0), ea2 = (0, r.useRef)({ id: 0, sequence: 0 }), en2 = (0, r.useRef)(/* @__PURE__ */ new Map()), er2 = (0, r.useRef)(null), es2 = (0, r.useRef)(null), ei2 = (0, r.useRef)(null), eo2 = (0, r.useRef)(null), ed2 = (0, r.useRef)(false), ec2 = I2.panes.some((e3) => ef(e3.status)), eu2 = (0, r.useMemo)(() => {
      let t3 = I2.panes.map((e3) => e3.model).filter((t4) => !e2.some((e3) => e3.id === t4.id));
      return [...e2, ...t3];
    }, [e2, I2.panes]), em2 = (0, r.useMemo)(() => {
      let e3;
      return (e3 = eu2.map((e4, t3) => {
        let a3 = z2[e4.id] ?? eC, n2 = a3.wins + a3.ties + a3.losses;
        return {
          index: t3,
          row: {
            model: e4,
            record: a3,
            battles: n2,
            rate: n2 ? (a3.wins + a3.ties / 2) / n2 * 100 : 0,
            color: e4.color ?? eA[t3 % eA.length]
          }
        };
      })).sort(
        ({ row: e4, index: t3 }, { row: a3, index: n2 }) => Number(a3.battles > 0) - Number(e4.battles > 0) || a3.rate - e4.rate || a3.record.wins - e4.record.wins || a3.battles - e4.battles || t3 - n2
      ), e3.map((e4) => e4.row);
    }, [eu2, z2]), ey2 = Z2 > 0 && Z2 < 560, ev2 = (0, r.useCallback)((e3, t3, a3, n2, r2) => {
      en2.current.get(t3)?.abort();
      let s2 = new AbortController();
      en2.current.set(t3, s2);
      let i2 = (n3) => B2(
        (r3) => r3.id !== e3 ? r3 : {
          ...r3,
          panes: r3.panes.map(
            (e4) => e4.slot === t3 && e4.attempt === a3 ? n3(e4, r3.panes) : e4
          )
        }
      ), o3 = performance.now(), l3 = Math.ceil(r2.length / 4) + 12;
      i2((e4) => ({ ...e4, status: "waiting", startedAt: o3, inTokens: l3 })), (async () => {
        try {
          for await (let e5 of C2.current(n2, r2, s2.signal)) {
            if (s2.signal.aborted) return;
            let t4 = "string" == typeof e5 ? e5 : e5.text ?? "", a4 = "string" == typeof e5 ? void 0 : e5, n3 = performance.now();
            i2((e6) => {
              let r3 = e6.text + t4, s3 = a4?.outputTokens !== void 0;
              return {
                ...e6,
                text: r3,
                status: r3 ? "streaming" : e6.status,
                firstAt: e6.firstAt ?? (t4 ? n3 : void 0),
                inTokens: a4?.inputTokens ?? e6.inTokens,
                outTokens: s3 ? a4.outputTokens : e6.usage ? e6.outTokens : Math.ceil(r3.trim().length / 4),
                usage: e6.usage || s3
              };
            });
          }
          if (s2.signal.aborted) return;
          let e4 = performance.now();
          i2(
            (t4, a4) => t4.text ? {
              ...t4,
              status: "done",
              endedAt: e4,
              finish: 1 + a4.filter((e5) => e5.finish).length
            } : {
              ...t4,
              status: "error",
              endedAt: e4,
              error: {
                message: "The stream ended without an answer.",
                retryable: true
              }
            }
          );
        } catch (a4) {
          if (s2.signal.aborted) return;
          let e4 = performance.now(), t4 = a4 instanceof Error && a4.message ? a4.message : "The model did not respond.";
          i2((n3) => ({
            ...n3,
            status: "error",
            endedAt: e4,
            error: {
              message: t4,
              retryable: !(a4 instanceof Y) || a4.retryable
            }
          }));
        } finally {
          en2.current.get(t3) === s2 && en2.current.delete(t3);
        }
      })();
    }, []), eb2 = (0, r.useCallback)(() => {
      en2.current.forEach((e3) => e3.abort()), en2.current.clear();
    }, []);
    (0, r.useEffect)(() => eb2, [eb2]);
    let ew2 = (e3, t3) => {
      eb2();
      let a3 = ++ea2.current.id, n2 = t3.map((e4, t4) => eB(t4, e4));
      B2({ id: a3, prompt: e3, started: true, panes: n2 }), K2(""), n2.forEach((t4) => ev2(a3, t4.slot, 0, t4.model, e3));
    }, ej2 = () => {
      eb2();
      let e3 = performance.now();
      B2((t3) => ({
        ...t3,
        panes: t3.panes.map(
          (t4) => ef(t4.status) ? { ...t4, status: "stopped", endedAt: e3 } : t4
        )
      }));
    }, eT2 = (e3) => ew2(e3, I2.vote ? eO(eu2, I2.vote.models) : eP(I2.panes)), eS2 = (e3) => {
      if (e3?.preventDefault(), ec2) return void ej2();
      let t3 = E2.trim();
      t3 ? eT2(t3) : es2.current?.focus();
    }, eM2 = (e3) => {
      R2(e3), eT2(e3);
    }, eE2 = (e3) => {
      let t3 = I2.panes.find((t4) => t4.slot === e3);
      if (!t3) return;
      let a3 = t3.attempt + 1;
      B2((t4) => ({
        ...t4,
        panes: t4.panes.map(
          (t5) => t5.slot === e3 ? { ...eB(e3, t5.model), attempt: a3 } : t5
        )
      })), ev2(I2.id, e3, a3, t3.model, I2.prompt);
    }, eR2 = () => {
      let e3, a3, n2 = ++ea2.current.sequence, r2 = T2 ? Q[n2] : void 0, s2 = r2?.models.map(eF);
      if (r2 && s2?.[0] && s2[1])
        e3 = [s2[0], s2[1]], a3 = V.find((e4) => e4.id === r2.prompt)?.text ?? E2;
      else {
        e3 = eO(eu2, eP(I2.panes));
        let n3 = t2.findIndex((e4) => e4.text === E2.trim());
        a3 = t2.length ? t2[(n3 + 1) % t2.length].text : E2;
      }
      R2(a3), ew2(a3, e3), ei2.current?.focus({ preventScroll: true });
    };
    (0, r.useEffect)(() => {
      I2.vote && ed2.current && (ed2.current = false, eo2.current?.focus({ preventScroll: true }));
    }, [I2.vote]), (0, r.useLayoutEffect)(() => {
      let e3 = er2.current;
      if (!e3 || (X2(e3.getBoundingClientRect().width), "u" < typeof ResizeObserver))
        return;
      let t3 = new ResizeObserver(([e4]) => X2(e4.contentRect.width));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let eW2 = (0, r.useRef)(() => {
    });
    (0, r.useEffect)(() => {
      eW2.current = () => {
        0 === ea2.current.id && eS2();
      };
    });
    let eG = f2 ?? N2;
    (0, r.useEffect)(() => {
      let e3 = er2.current;
      if (!eG || !e3 || "u" < typeof IntersectionObserver) return;
      let t3 = 0, a3 = new IntersectionObserver(
        ([e4]) => {
          e4?.isIntersecting && (a3.disconnect(), t3 = window.setTimeout(() => eW2.current(), 420));
        },
        { threshold: 0.2 }
      );
      return a3.observe(e3), () => {
        a3.disconnect(), window.clearTimeout(t3);
      };
    }, [eG]);
    let eU = () => {
      let e3 = t2[0];
      e3 && eM2(e3.text);
    }, eV = !L2 || !!I2.vote, eK = I2.panes.filter((e3) => "done" === e3.status).length, eQ = I2.started ? I2.vote ? "voted" : ec2 ? "pending" : I2.panes.some((e3) => "error" === e3.status) ? "failed" : I2.panes.some((e3) => "stopped" === e3.status) ? "stopped" : I2.panes.every((e3) => "done" === e3.status) ? "vote" : "pending" : "idle", eZ = (function() {
      let e3 = (0, r.useRef)(null), [t3, a3] = (0, r.useState)("auto");
      return (0, r.useLayoutEffect)(() => {
        let t4 = e3.current;
        if (!t4 || "u" < typeof ResizeObserver) return;
        let n2 = new ResizeObserver(
          ([e4]) => a3(e4.borderBoxSize?.[0]?.blockSize ?? t4.offsetHeight)
        );
        return n2.observe(t4), () => n2.disconnect();
      }, []), { ref: e3, height: t3 };
    })(), eX = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.1 * !w2, ease: ep } },
      transition: { duration: w2 ? 0 : eI.fast, ease: ep }
    }, eJ = [
      {
        choice: { type: "winner", slot: 0 },
        label: "A is better",
        before: (0, n.jsx)(d.A, { "aria-hidden": "true" })
      },
      {
        choice: { type: "tie" },
        label: "Tie",
        before: (0, n.jsx)(c.A, { "aria-hidden": "true" })
      },
      {
        choice: { type: "winner", slot: 1 },
        label: "B is better",
        after: (0, n.jsx)(u.A, { "aria-hidden": "true" })
      },
      {
        choice: { type: "bad" },
        label: "Both bad",
        before: (0, n.jsx)(m.A, { "aria-hidden": "true" })
      }
    ];
    if ("vote" === eQ)
      b2 = (0, n.jsxs)(
        s.PY1.div,
        {
          className: el().voteRow,
          "data-kind": "vote",
          ...eX,
          children: [
            (0, n.jsx)("p", {
              className: el().voteLabel,
              id: `${k2}-vote`,
              children: "Which answer is better?"
            }),
            (0, n.jsx)("div", {
              className: el().voteGroup,
              role: "group",
              "aria-labelledby": `${k2}-vote`,
              "data-vote-group": "",
              children: eJ.map(
                (e3) => (0, n.jsxs)(
                  x.$,
                  {
                    variant: "secondary",
                    size: "sm",
                    className: el().voteButton,
                    onClick: () => ((e4) => {
                      if (I2.vote || ec2) return;
                      let t3 = eP(I2.panes), a3 = { ...z2 };
                      t3.forEach((t4, n3) => {
                        let r2 = { ...a3[t4.id] ?? ez };
                        "winner" === e4.type ? n3 === e4.slot ? r2.wins++ : r2.losses++ : "tie" === e4.type ? r2.ties++ : r2.losses++, a3[t4.id] = r2;
                      }), W2(em2), P2(a3), O2((e5) => e5 + 1), H2(true), B2((a4) => ({ ...a4, vote: { choice: e4, models: t3 } })), ed2.current = !!er2.current?.querySelector("[data-vote-group]")?.contains(document.activeElement);
                      let n2 = performance.now();
                      o2?.({
                        round: I2.id,
                        prompt: I2.prompt,
                        models: t3,
                        choice: "winner" === e4.type ? 0 === e4.slot ? "a" : "b" : e4.type,
                        winner: "winner" === e4.type ? t3[e4.slot] : void 0,
                        metrics: I2.panes.map((e5) => {
                          let t4 = ex(e5, n2);
                          return {
                            model: e5.model,
                            ttftMs: t4.ttft,
                            tokensPerSecond: t4.tps,
                            totalMs: t4.total,
                            outputTokens: t4.outTokens,
                            costUsd: t4.cost
                          };
                        })
                      });
                    })(e3.choice),
                    children: [e3.before, e3.label, e3.after]
                  },
                  e3.label
                )
              )
            })
          ]
        },
        "vote"
      );
    else if ("voted" === eQ && I2.vote) {
      let { choice: e3, models: t3 } = I2.vote, a3 = "winner" === e3.type ? t3[e3.slot] : void 0;
      b2 = (0, n.jsxs)(
        s.PY1.div,
        {
          className: el().voteRow,
          "data-kind": "voted",
          ...eX,
          children: [
            (0, n.jsxs)("p", {
              className: el().result,
              children: [
                (0, n.jsx)(p.A, {
                  className: el().resultIcon,
                  "aria-hidden": "true"
                }),
                (0, n.jsx)("span", {
                  className: el().resultText,
                  children: a3 ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "You picked",
                      (0, n.jsxs)("span", {
                        className: el().resultName,
                        children: [(0, n.jsx)(eg, { model: a3 }), a3.name]
                      })
                    ]
                  }) : eq(e3, t3)
                })
              ]
            }),
            (0, n.jsxs)(x.$, {
              ref: eo2,
              size: "sm",
              className: eh(el().accent, el().nextButton),
              onClick: eR2,
              children: [
                "Next round",
                (0, n.jsx)(u.A, { "aria-hidden": "true" })
              ]
            })
          ]
        },
        "voted"
      );
    } else if ("failed" === eQ) {
      let e3 = I2.panes.filter((e4) => "error" === e4.status), t3 = e3.some((e4) => e4.error?.retryable);
      b2 = (0, n.jsxs)(
        s.PY1.div,
        {
          className: el().voteRow,
          "data-kind": "failed",
          ...eX,
          children: [
            (0, n.jsxs)("p", {
              className: el().voteLabel,
              children: [
                "Model ",
                e3.map((e4) => e_(e4.slot)).join(" and "),
                " failed.",
                t3 ? " Retry to vote, or move on." : ""
              ]
            }),
            (0, n.jsxs)(x.$, {
              variant: "secondary",
              size: "sm",
              className: el().nextButton,
              onClick: eR2,
              children: [
                "Next round",
                (0, n.jsx)(u.A, { "aria-hidden": "true" })
              ]
            })
          ]
        },
        "failed"
      );
    } else
      b2 = "stopped" === eQ ? (0, n.jsxs)(
        s.PY1.div,
        {
          className: el().voteRow,
          "data-kind": "stopped",
          ...eX,
          children: [
            (0, n.jsx)("p", {
              className: el().voteLabel,
              children: "Stopped before both answers finished"
            }),
            (0, n.jsxs)(x.$, {
              variant: "secondary",
              size: "sm",
              onClick: () => eS2(),
              children: [
                (0, n.jsx)(h.A, { "aria-hidden": "true" }),
                "Run again"
              ]
            })
          ]
        },
        "stopped"
      ) : "pending" === eQ ? (0, n.jsx)(
        s.PY1.div,
        {
          className: el().voteRow,
          "data-kind": "pending",
          ...eX,
          children: (0, n.jsxs)("p", {
            className: el().voteLabel,
            children: [
              "Voting opens when both answers finish",
              (0, n.jsxs)("span", {
                className: el().voteCount,
                children: [eK, " of 2 done"]
              })
            ]
          })
        },
        "pending"
      ) : (0, n.jsx)(
        s.PY1.div,
        {
          className: el().voteRow,
          "data-kind": "idle",
          ...eX,
          children: (0, n.jsx)("p", {
            className: el().voteLabel,
            children: "Run a prompt, then vote for the better answer"
          })
        },
        "idle"
      );
    let e0 = Math.min(J2, 1);
    return (0, n.jsxs)("div", {
      ref: er2,
      className: eh(el().root, v2),
      children: [
        (0, n.jsxs)("header", {
          className: el().head,
          children: [
            (0, n.jsx)("h2", { className: el().title, children: "Arena" }),
            (0, n.jsx)("span", {
              className: el().round,
              children: (0, n.jsxs)("span", {
                children: [
                  "Round ",
                  (0, n.jsx)("span", {
                    className: el().num,
                    children: (0, n.jsx)(_.q, { value: Math.max(1, I2.id) })
                  })
                ]
              })
            }),
            (0, n.jsxs)("div", {
              className: el().tools,
              children: [
                (0, n.jsx)(eL, {
                  rows: em2,
                  votes: F2,
                  fresh: q2,
                  before: D2,
                  reduced: w2,
                  onOpen: () => H2(false),
                  onReset: () => {
                    P2({}), O2(0), H2(false), W2(null), K2("Leaderboard reset.");
                  }
                }),
                (0, n.jsx)(y.d, {
                  className: el().blind,
                  label: "Blind",
                  checked: L2,
                  onCheckedChange: $2
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("form", {
          className: el().prompt,
          onSubmit: eS2,
          onKeyDown: (e3) => {
            "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && !e3.nativeEvent.isComposing ? (e3.preventDefault(), eS2()) : "Escape" === e3.key && ec2 && (e3.preventDefault(), ej2());
          },
          children: [
            (0, n.jsxs)("div", {
              className: el().field,
              children: [
                (0, n.jsx)("label", {
                  className: el().srOnly,
                  htmlFor: `${k2}-prompt`,
                  children: "Prompt for both models"
                }),
                (0, n.jsx)("input", {
                  ref: es2,
                  id: `${k2}-prompt`,
                  className: el().input,
                  type: "text",
                  value: E2,
                  placeholder: "Ask both models the same thing",
                  autoComplete: "off",
                  enterKeyHint: "go",
                  onChange: (e3) => R2(e3.target.value)
                }),
                (0, n.jsx)(x.$, {
                  ref: ei2,
                  type: "submit",
                  size: "sm",
                  variant: ec2 ? "secondary" : "primary",
                  className: eh(!ec2 && el().accent, el().runButton),
                  disabled: !ec2 && !E2.trim(),
                  "aria-label": ec2 ? "Stop" : "Run",
                  "aria-keyshortcuts": ec2 ? "Escape" : "Meta+Enter Control+Enter",
                  children: (0, n.jsx)(eY, { busy: ec2, hint: j2 })
                })
              ]
            }),
            (0, n.jsx)("div", {
              className: el().chips,
              role: "group",
              "aria-label": "Sample prompts",
              children: t2.map(
                (e3) => (0, n.jsx)(
                  "button",
                  {
                    type: "button",
                    className: el().chip,
                    "aria-pressed": e3.text === E2.trim(),
                    onClick: () => eM2(e3.text),
                    children: e3.label
                  },
                  e3.id
                )
              )
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: el().stage,
          "data-tabs": ey2 || void 0,
          children: [
            ey2 ? (0, n.jsx)(eN, {
              id: k2,
              panes: I2.panes,
              active: e0,
              revealed: I2.panes.map(() => eV),
              reduced: w2,
              onSelect: (e3, t3 = false) => {
                et2(e3), t3 && document.getElementById(`${k2}-tab-${e3}`)?.focus();
              }
            }) : null,
            (0, n.jsx)("div", {
              className: el().panes,
              children: I2.panes.map(
                (e3) => (0, n.jsx)(
                  ek,
                  {
                    pane: e3,
                    revealed: eV,
                    reduced: w2,
                    smooth: !N2,
                    panel: ey2 ? {
                      id: `${k2}-panel-${e3.slot}`,
                      labelledBy: `${k2}-tab-${e3.slot}`,
                      active: e3.slot === e0
                    } : void 0,
                    onRetry: eE2,
                    onPromptHelp: N2 ? eU : void 0
                  },
                  e3.slot
                )
              )
            })
          ]
        }),
        (0, n.jsx)(s.PY1.div, {
          className: el().voteClip,
          initial: false,
          animate: { height: eZ.height },
          transition: w2 ? { duration: 0 } : e$.smooth,
          children: (0, n.jsx)("div", {
            ref: eZ.ref,
            className: el().voteBar,
            children: (0, n.jsx)(i.N, {
              initial: false,
              mode: "popLayout",
              children: b2
            })
          })
        }),
        (0, n.jsx)("p", {
          className: el().srOnly,
          role: "status",
          "aria-live": "polite",
          children: G2 || (function(e3, t3) {
            if (!e3.started) return "";
            let { panes: a3 } = e3;
            if (e3.vote)
              return `${eq(e3.vote.choice, e3.vote.models)}. Model A was ${e3.vote.models[0].name} and model B was ${e3.vote.models[1].name}. Leaderboard updated.`;
            let n2 = a3.filter((e4) => ef(e4.status)), r2 = a3.filter((e4) => "error" === e4.status);
            if (n2.length === a3.length)
              return `${t3 ? "Simulated run with scripted sample answers. " : ""}Two anonymous models are answering.`;
            if (r2.length)
              return `Model ${r2.map((e4) => e_(e4.slot)).join(" and ")} failed.${n2.length ? "" : " Retry to vote, or start the next round."}`;
            let s2 = a3.find((e4) => 1 === e4.finish);
            return n2.length ? s2 ? `Model ${e_(s2.slot)} finished first.` : "" : a3.some((e4) => "stopped" === e4.status) ? "Run stopped." : "Both answers are ready. Vote to reveal the models.";
          })(I2, N2)
        })
      ]
    });
  }
  let eW = eD;
}

__m(__module,__exports,__require);
});
A.reg(83978, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { AM: () => l, Wv: () => u, hl: () => c, iN: () => d });
  var a = r(95155), n = r(40093), i = r(12115), s = r(25898), o = r.n(s);
  let l = n.bL, d = n.bm, u = (0, i.forwardRef)(function({ className: e2, ...t2 }, r2) {
    return (0, a.jsx)(n.l9, {
      ...t2,
      ref: r2,
      className: [o().anchor, e2].filter(Boolean).join(" ")
    });
  });
  u.displayName = "PopoverTrigger";
  let c = (0, i.forwardRef)(function({
    className: e2,
    align: t2 = "start",
    sideOffset: r2 = 6,
    collisionPadding: i2 = 10,
    ...s2
  }, l2) {
    return (0, a.jsx)(n.ZL, {
      children: (0, a.jsx)(n.UC, {
        ...s2,
        ref: l2,
        align: t2,
        sideOffset: r2,
        collisionPadding: i2,
        className: [o().content, e2].filter(Boolean).join(" ")
      })
    });
  });
  c.displayName = "PopoverContent";
}

__m(__module,__exports,__require);
});
A.cssFor("model-arena", [5024,69687]);
A.item("model-arena", {entry:74367, export:"ModelArena", kind:"block", tier:"pro", unresolved:[]});
})();