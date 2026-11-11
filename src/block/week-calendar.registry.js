/* week-calendar (pro block) */
(function(){var A=globalThis.__ARC__;
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
A.reg(59103, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock-3",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6h4", key: "135r8i" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(67033, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "map-pin",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(70460, ".root{--hour:52px;--gutter:60px;--head:60px;--wc-blue:oklch(57% .16 256);--wc-violet:oklch(55% .17 292);--wc-green:oklch(58% .13 158);--wc-amber:oklch(68% .15 68);--wc-rose:oklch(60% .18 8);--wc-teal:oklch(60% .1 200);--wc-neutral:oklch(58% 0 0);--wc-fill:12%;--wc-fill-hover:18%;--wc-ink:45%;position:relative;box-sizing:border-box;display:grid;align-content:start;gap:14px;width:100%;min-width:0;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n:root[data-theme=dark] .root{--wc-blue:oklch(72% .13 256);--wc-violet:oklch(72% .14 292);--wc-green:oklch(76% .13 158);--wc-amber:oklch(80% .13 75);--wc-rose:oklch(74% .14 8);--wc-teal:oklch(76% .1 200);--wc-neutral:oklch(70% 0 0);--wc-fill:20%;--wc-fill-hover:27%;--wc-ink:38%}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.root[data-dragging] .scroller,.root[data-dragging] .surface{cursor:grabbing}\n.root:has(.column:focus-visible,.event:focus-visible) .headPane[data-current] .headDay[data-cursor]:not([data-today]) .date{background:var(--surface-muted)}\n.root[data-dragging] .hover{opacity:0!important}\n@container (max-width: 900px){.root{--gutter:52px}\n@container (max-width: 639px){.root{--gutter:44px;--head:56px;gap:12px}\n[data-layout=app] .root{padding:clamp(16px,3vw,32px)}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.muted{color:var(--text-secondary)}\n.toolbar{display:flex;align-items:center;gap:10px 12px;min-width:0}\n.toolbar{gap:8px}\n.toolbar .primary{width:var(--control-height-sm);padding:0}\n.toolbar{flex-wrap:wrap;gap:10px 8px}\n.toolbar:after{content:\"\";order:-1;flex-basis:100%}\n.toolbar .button,.toolbar .iconButton,.toolbar .primary{height:40px}\n.toolbar .iconButton,.toolbar .primary{width:40px}\n.title{flex:1 1 auto;min-width:0;margin:0;overflow:hidden;font-size:var(--text-lg);font-weight:500;line-height:1.3;white-space:nowrap;text-overflow:ellipsis;font-variant-numeric:tabular-nums}\n.title{font-size:var(--text-base)}\n.title{order:-3;flex-basis:0;margin-left:2px;font-size:var(--text-base)}\n.stepper{display:flex;margin-left:-4px}\n.stepper{order:-1;margin-left:-6px;margin-right:0}\n.views{display:flex;min-width:0}\n.views [role=group]>div{padding:2px}\n.views [role=group] button{min-height:calc(var(--control-height-sm) - 6px);border-radius:calc(var(--radius-control) - 3px)}\n.views{flex:1 1 0}\n.views [role=group] button{min-height:34px}\n.button,.chip,.danger,.ghostButton,.iconButton,.primary{display:inline-flex;flex:none;align-items:center;justify-content:center;gap:8px;height:var(--control-height-sm);padding:0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-weight:500;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.button:disabled{color:var(--text-muted);cursor:default}\n.button[data-open]{background:var(--surface-muted)}\n.button:not(:disabled):active,.chip:active,.danger:active,.ghostButton:active,.iconButton:active,.primary:active{transform:scale(.97)}\n.button[aria-haspopup]:active{transform:none}\n@media (hover:hover) and (pointer:fine){.button:not(:disabled):hover,.chip:hover,.ghostButton:hover,.iconButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.button:focus-visible,.chip:focus-visible,.ghostButton:focus-visible,.iconButton:focus-visible{background:var(--surface-muted);color:var(--foreground)}\n.button[aria-haspopup]{padding-inline:12px}\n.button[aria-haspopup]{padding-inline:11px}\n@media (prefers-reduced-motion:reduce){.allDayToggle svg,.button,.calendarItem,.chip,.danger,.date,.eventBody,.ghostButton,.headDay,.hover,.iconButton,.primary{transition-duration:0s}\n.button:not(:disabled):active,.chip:active,.danger:active,.ghostButton:active,.iconButton:active,.primary:active{transform:none}\n.primary{border-color:transparent;background:var(--foreground);color:var(--background)}\n.primary:hover{opacity:.88}\n.primary:focus-visible{opacity:.88}\n.iconButton{width:var(--control-height-sm);padding:0;border-color:transparent;background:transparent;color:var(--text-secondary)}\n.iconButton[data-small]{width:28px;height:28px;border-radius:10px}\n.toast .iconButton{color:color-mix(in oklab,var(--background) 70%,transparent)}\n@media (hover:hover) and (pointer:fine){.toast .iconButton:hover{background:color-mix(in oklab,var(--background) 16%,transparent);color:var(--background)}\n.ghostButton{border-color:transparent;background:transparent;color:var(--text-secondary);padding-inline:12px}\n.danger{padding-inline:10px;border-color:transparent;background:transparent;color:var(--danger)}\n.danger:hover{background:color-mix(in oklab,var(--danger) 10%,transparent)}\n.chip{height:30px;padding:0 11px 0 9px;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font-size:var(--text-xs)}\n.chip[aria-checked=true]{border-color:color-mix(in oklab,var(--cal) 70%,var(--border));background:color-mix(in oklab,var(--cal) var(--wc-fill),var(--surface));color:var(--foreground)}\n.swatches{display:inline-flex}\n.swatch{width:10px;height:10px;margin-left:-3px;border:2px solid var(--surface);border-radius:50%;background:var(--cal);box-sizing:content-box;transition:opacity var(--duration-fast) var(--ease-standard)}\n.swatch:first-child{margin-left:0}\n.swatch[data-off]{opacity:.25}\n.frame{position:relative;display:flex;min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n.frame{border-radius:20px}\n.main{position:relative;flex:1;min-width:0}\n.sidebar{display:grid;align-content:start;gap:20px;flex:none;width:248px;padding:16px 14px;border-right:1px solid var(--border)}\n.sideSection{display:grid;gap:6px}\n.sideTitle{margin:0;padding-inline:8px;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500}\n.scroller{position:relative;height:var(--calendar-height,clamp(480px,72vh,760px));overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}\n.surface{position:relative;min-width:0;overflow:clip;touch-action:pan-y;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}\n.head{position:sticky;top:0;z-index:20;background:var(--surface);box-shadow:0 1px 0 var(--border)}\n.headRow{display:grid;grid-template-columns:var(--gutter) minmax(0,1fr);height:var(--head)}\n.corner{display:flex;align-items:flex-end;justify-content:flex-end;padding:0 10px 8px 0;color:var(--text-muted);font-size:10.5px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.corner{font-size:0}\n.headViewport{position:relative;min-width:0;overflow:clip}\n.headPane{position:absolute;inset:0;display:grid;grid-template-columns:repeat(var(--columns),minmax(0,1fr))}\n.headDay{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-width:0;padding:0;border:0;border-radius:0;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.headDay[data-weekend]{color:var(--text-muted)}\n.headDay[data-weekend] .date{color:var(--text-secondary)}\n.headDay[data-today]{color:var(--foreground)}\n.headDay[data-today] .date{background:var(--accent);color:var(--accent-foreground)}\n@media (hover:hover) and (pointer:fine){.headDay:not([data-today]):hover .date{background:var(--surface-muted)}\n.weekday{font-size:var(--text-xs);line-height:1.2}\n.date{display:inline-grid;place-items:center;min-width:32px;height:32px;padding-inline:6px;border-radius:var(--radius-pill);color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:1;font-variant-numeric:tabular-nums;transition:background-color var(--duration-fast) var(--ease-standard)}\n.date{min-width:28px;height:28px;font-size:var(--text-base)}\n.column{position:absolute;top:0;bottom:0;border-left:1px solid var(--border-subtle)}\n.column[data-weekend]{background:color-mix(in oklab,var(--surface-muted) 55%,transparent)}\n.column:focus-visible{background:color-mix(in oklab,var(--surface-muted) 80%,transparent)}\n.event{position:absolute;z-index:5;display:block;padding:0 3px 0 2px;border:0;background:transparent;color:color-mix(in oklab,var(--cal) var(--wc-ink),var(--foreground));font:inherit;text-align:left;cursor:pointer;pointer-events:auto;touch-action:pan-y;-webkit-tap-highlight-color:transparent;container-type:size}\n.event[data-cut-start] .eventBody{border-top-left-radius:0;border-top-right-radius:0}\n.event[data-cut-end] .eventBody{border-bottom-left-radius:0;border-bottom-right-radius:0}\n@media (hover:hover) and (pointer:fine){.event:hover .eventBody{background:color-mix(in oklab,var(--cal) var(--wc-fill-hover),var(--surface))}\n.event:focus-visible .eventBody{background:color-mix(in oklab,var(--cal) var(--wc-fill-hover),var(--surface))}\n.event[data-past]{color:color-mix(in oklab,var(--cal) 35%,var(--text-secondary))}\n.event[data-past] .eventBody{background:color-mix(in oklab,var(--cal) calc(var(--wc-fill) * .7),var(--surface));box-shadow:inset 3px 0 0 color-mix(in oklab,var(--cal) 65%,var(--surface)),0 0 0 1px var(--surface)}\n.event[data-selected]{z-index:7;color:color-mix(in oklab,var(--cal) calc(var(--wc-ink) - 10%),var(--foreground))}\n.event[data-selected] .eventBody,.event[data-selected]:hover .eventBody{background:color-mix(in oklab,var(--cal) calc(var(--wc-fill) * 2.3),var(--surface));box-shadow:inset 3px 0 0 var(--cal),0 0 0 1px var(--surface),var(--shadow-raised)}\n.event[data-dragging]{z-index:12;cursor:grabbing}\n.event[data-dragging] .eventBody{box-shadow:inset 3px 0 0 var(--cal),0 0 0 1px var(--surface),var(--shadow-floating)}\n.event[data-size=m] .eventTitle{-webkit-line-clamp:1}\n.event[data-size=s] .eventBody{flex-direction:row;align-items:center;gap:6px;padding-block:0}\n.event[data-size=s] .eventTitle{flex:0 1 auto;min-width:0;-webkit-line-clamp:1;line-height:1.1}\n.event[data-size=s] .eventTime{flex:0 10 auto;min-width:0;line-height:1.1}\n.event[data-size=m] .eventTitle{-webkit-line-clamp:2}\n@container (max-width: 132px){.event[data-size=s] .eventTime{display:none}\n@media (hover:hover) and (pointer:fine){.event:hover .handle:after{opacity:.35}\n.event[data-dragging] .handle:after{opacity:.35}\n.allDayRow{display:grid;grid-template-columns:var(--gutter) minmax(0,1fr);border-top:1px solid var(--border-subtle)}\n.allDayGutter{display:flex;align-items:flex-start;justify-content:flex-end;padding:6px 8px 0 0}\n.allDayLabel,.allDayToggle{color:var(--text-muted);font-size:10.5px;line-height:16px;white-space:nowrap}\n.allDayToggle{display:inline-flex;align-items:center;gap:2px;height:18px;margin-right:-4px;padding:0 4px;border:0;border-radius:6px;background:transparent;font-family:inherit;cursor:pointer}\n.allDayToggle svg{transition:transform var(--duration-standard) var(--ease-standard)}\n.allDayToggle svg[data-open]{transform:rotate(180deg)}\n@media (hover:hover) and (pointer:fine){.allDayToggle:hover{background:var(--surface-muted);color:var(--foreground)}\n.allDayToggle:focus-visible{background:var(--surface-muted);color:var(--foreground)}\n.allDayPane{position:absolute;inset:0}\n.allDayColumn{position:absolute;top:0;bottom:0;border-left:1px solid var(--border-subtle);pointer-events:none}\n.allDayColumn[data-weekend]{background:var(--wc-weekend,color-mix(in oklab,var(--surface-muted) 55%,transparent))}\n.allDay{position:absolute;display:flex;align-items:center;height:21px;min-width:0;padding:0 2px 0 3px;border:0;background:transparent;color:color-mix(in oklab,var(--cal) var(--wc-ink),var(--foreground));font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.allDay:before{content:\"\";position:absolute;inset:0 2px 0 3px;border-radius:6px;background:color-mix(in oklab,var(--cal) var(--wc-fill),var(--surface));box-shadow:inset 3px 0 0 var(--cal);transition:background-color var(--duration-fast) var(--ease-standard)}\n.allDay[data-cut-start]:before{border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:none}\n.allDay[data-cut-end]:before{border-top-right-radius:0;border-bottom-right-radius:0}\n.allDay[data-selected]:before{background:color-mix(in oklab,var(--cal) 28%,var(--surface))}\n@media (hover:hover) and (pointer:fine){.allDay:hover:before{background:color-mix(in oklab,var(--cal) var(--wc-fill-hover),var(--surface))}\n.allDay:focus-visible:before{background:color-mix(in oklab,var(--cal) var(--wc-fill-hover),var(--surface))}\n.allDayTitle{position:relative;overflow:hidden;padding-left:10px;font-size:var(--text-xs);font-weight:500;line-height:1;white-space:nowrap;text-overflow:ellipsis}\n.more{position:absolute;height:21px;padding:0 0 0 13px;border:0;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);font-weight:500;text-align:left;cursor:pointer}\n@media (hover:hover) and (pointer:fine){.more:hover{color:var(--foreground)}\n.body{position:relative;display:grid;grid-template-columns:var(--gutter) minmax(0,1fr)}\n.gutter{position:sticky;left:0;z-index:3;background:var(--surface)}\n.hour{position:absolute;right:10px;color:var(--text-muted);font-size:10.5px;line-height:1;white-space:nowrap;font-variant-numeric:tabular-nums;transform:translateY(-50%);transition:opacity var(--duration-fast) var(--ease-standard)}\n.hour[data-hidden]{opacity:0}\n.hour{right:6px;font-size:10px}\n.nowLabel{position:absolute;right:5px;z-index:2;padding:3px 6px;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);font-size:10.5px;font-weight:500;line-height:1;white-space:nowrap;font-variant-numeric:tabular-nums;transform:translateY(-50%)}\n.nowLabel{right:2px;padding-inline:4px;font-size:10px}\n.lines{position:absolute;inset:0;pointer-events:none}\n.halfLine,.hourLine{position:absolute;left:0;right:0;height:1px}\n.hourLine{background:var(--border-subtle)}\n.hourLine:first-child{display:none}\n.halfLine{background:color-mix(in oklab,var(--border-subtle) 45%,transparent)}\n:root[data-theme=dark] .halfLine{background:color-mix(in oklab,var(--border-subtle) 60%,transparent)}\n.hover{position:absolute;top:0;left:0;z-index:1;height:calc(var(--hour) / 2);padding:3px 8px;border-radius:8px;background:color-mix(in oklab,var(--surface-muted) 80%,transparent);color:var(--text-muted);font-size:var(--text-xs);line-height:1.2;font-variant-numeric:tabular-nums;opacity:0;pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard)}\n.gridRow,.grid,.pane{position:absolute;inset:0}\n.events{position:absolute;inset:0;pointer-events:none}\n.nowRow{position:absolute;left:0;right:0;z-index:4;height:1px;background:color-mix(in oklab,var(--accent) 35%,transparent);pointer-events:none}\n.now{position:absolute;z-index:9;height:2px;margin-top:-.5px;background:var(--accent);pointer-events:none}\n.now:before{content:\"\";position:absolute;top:50%;left:-5px;width:10px;height:10px;margin-top:-5px;border:2px solid var(--surface);border-radius:50%;background:var(--accent);box-sizing:content-box;transform:translate(-2px)}\n.eventBody{position:absolute;inset:0 3px 0 2px;display:flex;flex-direction:column;gap:1px;overflow:hidden;padding:5px 7px 4px 10px;border-radius:7px;background:color-mix(in oklab,var(--cal) var(--wc-fill),var(--surface));box-shadow:inset 3px 0 0 var(--cal),0 0 0 1px var(--surface);transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.eventBody{padding-inline:8px 4px}\n.eventBody{padding-inline:8px 5px}\n.origin{position:absolute;z-index:4;border-radius:7px;margin-inline:2px 3px;outline:1.5px dashed color-mix(in oklab,var(--cal) 55%,transparent);outline-offset:-1.5px;background:color-mix(in oklab,var(--cal) 6%,transparent);pointer-events:none}\n.eventTitle{overflow:hidden;font-size:var(--text-xs);font-weight:500;line-height:1.3;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow-wrap:break-word}\n.eventTime{font-size:var(--text-xs);text-overflow:ellipsis;font-variant-numeric:tabular-nums}\n.eventMeta,.eventTime{overflow:hidden;color:color-mix(in oklab,currentColor 78%,transparent);line-height:1.3;white-space:nowrap}\n@container (max-width: 76px){.eventTime{display:none}\n.eventMeta{display:flex;align-items:center;gap:4px;min-width:0;margin-top:2px;font-size:var(--text-xs)}\n.eventMeta>span{overflow:hidden;text-overflow:ellipsis}\n.eventMeta svg{flex:none}\n.eventFaces,.eventMeta{display:none}\n@container (max-height: 88px){.eventMeta{display:none}\n.eventFaces{display:flex;margin-top:auto;padding-top:4px}\n.eventFaces .face{border-color:color-mix(in oklab,var(--cal) var(--wc-fill),var(--surface))}\n@container (max-height: 116px){.eventFaces{display:none}\n@container (max-width: 112px){.eventFaces{display:none}\n.face{flex:none;display:inline-grid;place-items:center;margin-right:-5px;border:2px solid var(--surface-raised);border-radius:50%;background:var(--surface-muted);color:var(--text-secondary);font-size:9px;font-weight:500;object-fit:cover;box-sizing:border-box}\n.handle{position:absolute;right:3px;bottom:-3px;left:2px;z-index:1;height:10px;cursor:ns-resize}\n.handle:after{content:\"\";position:absolute;bottom:5px;left:50%;width:20px;height:3px;margin-left:-10px;border-radius:2px;background:currentColor;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.dragLabel{position:absolute;z-index:13;display:flex;justify-content:center;margin-top:-26px;pointer-events:none}\n.dragLabel span{padding:3px 8px;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);font-size:var(--text-xs);font-weight:500;line-height:1.3;white-space:nowrap;font-variant-numeric:tabular-nums;box-shadow:var(--shadow-raised)}\n.ghost{--cal:var(--accent);position:absolute;z-index:11;padding:0 3px 0 2px;pointer-events:none}\n.ghostInner{position:absolute;inset:0 3px 0 2px;display:flex;flex-direction:column;gap:1px;overflow:hidden;padding:5px 8px 4px 10px;border-radius:7px;background:color-mix(in oklab,var(--cal) 18%,var(--surface));box-shadow:inset 3px 0 0 var(--cal),inset 0 0 0 1px color-mix(in oklab,var(--cal) 60%,transparent),var(--shadow-raised);color:color-mix(in oklab,var(--cal) var(--wc-ink),var(--foreground))}\n.ghostTitle{font-size:var(--text-xs);font-weight:500;line-height:1.3;white-space:nowrap}\n.ghostTime{font-size:var(--text-xs);line-height:1.3;white-space:nowrap;font-variant-numeric:tabular-nums;opacity:.8}\n.popover{position:absolute;top:0;left:0;z-index:40;overflow:hidden;border:1px solid var(--border);border-radius:20px;background:var(--surface-raised);box-shadow:var(--shadow-floating)}\n.popover{border-radius:18px}\n.popBody{display:grid;gap:14px;padding:14px 14px 14px 16px}\n.popHead{display:flex;align-items:center;gap:6px;margin-right:-4px}\n.popHead .titleInput{margin-left:-4px}\n.bar{flex:none;width:4px;height:22px;margin-right:4px;border-radius:2px;background:var(--cal)}\n.titleInput{flex:1;min-width:0;height:38px;margin-left:-8px;padding:0 8px;border:0;border-radius:12px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-base);font-weight:500}\n.titleInput::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.titleInput:hover{background:var(--surface-muted)}\n.titleInput:focus{background:var(--surface-muted)}\n.row{display:grid;grid-template-columns:16px minmax(0,1fr);align-items:start;gap:10px;margin:0;color:var(--foreground)}\n.row>svg{margin-top:2px;color:var(--text-secondary)}\n.row>span{min-width:0}\n.timeFields{display:grid;gap:6px;min-width:0;margin-top:-6px}\n.timeRange{display:flex;align-items:center;gap:6px;min-width:0}\n.timeRange>div{flex:1 1 0;gap:0}\n.timeRange label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.timeRange .timeSelect{height:32px;min-height:32px;gap:4px;padding:0 8px 0 9px;border-radius:10px;font-variant-numeric:tabular-nums}\n.field{min-width:0;height:32px;padding:0 8px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-variant-numeric:tabular-nums;color-scheme:light dark}\n@media (hover:hover) and (pointer:fine){.field:hover{border-color:var(--border-strong)}\n.field:focus{border-color:var(--border-strong);background:var(--surface-muted)}\n.duration{color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.people{display:grid;gap:6px;min-width:0}\n.faces{display:flex}\n.picker{display:flex;flex-wrap:wrap;gap:6px;padding-left:26px}\n.dot{width:8px;height:8px;border-radius:50%;background:var(--cal)}\n.popFoot{display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:2px}\n.footActions{display:flex;gap:4px;margin-left:auto}\n.hint{color:var(--text-muted);font-size:var(--text-xs)}\n.hint{display:none}\n.calendarList{display:grid;gap:2px;margin:0;padding:0;list-style:none}\n.calendarItem{display:flex;align-items:center;gap:10px;width:100%;height:34px;padding:0 8px;border:0;border-radius:10px;background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.calendarItem:hover{background:var(--surface-muted)}\n.calendarItem:focus-visible{background:var(--surface-muted)}\n.calendarItem[aria-checked=true] .check{background:var(--cal)}\n.calendarItem[aria-checked=false] .calendarName{color:var(--text-secondary)}\n.check{display:grid;place-items:center;flex:none;width:16px;height:16px;border:1.5px solid var(--cal);border-radius:5px;background:transparent;color:var(--surface);transition:background-color var(--duration-fast) var(--ease-standard)}\n.calendarName{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.mini{display:grid;gap:6px}\n.miniHead{display:flex;align-items:center;justify-content:space-between;padding-left:8px}\n.miniTitle{font-weight:500}\n.miniNav{display:flex}\n.miniGrid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));row-gap:2px}\n.miniWeekday{display:grid;place-items:center;height:24px;color:var(--text-muted);font-size:var(--text-xs)}\n.miniDay{position:relative;display:grid;place-items:center;height:30px;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-xs);font-variant-numeric:tabular-nums;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.miniDay>span{position:relative;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;transition:background-color var(--duration-fast) var(--ease-standard)}\n.miniDay[data-outside]{color:var(--text-muted)}\n.miniDay[data-range]:before{content:\"\";position:absolute;inset:1px 0;background:var(--surface-muted)}\n.miniDay[data-range-start]:before{left:2px;border-radius:14px 0 0 14px}\n.miniDay[data-range-end]:before{right:2px;border-radius:0 14px 14px 0}\n.miniDay[data-range-start][data-range-end]:before{border-radius:14px}\n.miniDay[data-today]>span{background:var(--accent);color:var(--accent-foreground);font-weight:500}\n@media (hover:hover) and (pointer:fine){.miniDay:not([data-today]):hover>span{background:color-mix(in oklab,var(--foreground) 8%,transparent)}\n.miniDay:not([data-today]):focus-visible>span{background:color-mix(in oklab,var(--foreground) 8%,transparent)}\n.agendaScroller{position:relative;height:var(--calendar-height,clamp(480px,72vh,760px));overflow:hidden;touch-action:pan-y}\n.agenda{position:absolute;inset:0;overflow-y:auto;overscroll-behavior:contain;padding:4px 0 24px}\n.agendaDay{padding:0 12px}\n.agendaHead{position:sticky;top:0;z-index:1;display:flex;align-items:center;gap:10px;margin:0;padding:12px 4px 8px;background:var(--surface);font-size:var(--text-sm);font-weight:500}\n.agendaHead[data-today] .agendaDate{background:var(--accent);color:var(--accent-foreground)}\n.agendaDate{display:inline-grid;place-items:center;min-width:30px;height:30px;border-radius:var(--radius-pill);font-size:var(--text-base);font-variant-numeric:tabular-nums}\n.agendaWeekday{display:flex;flex-wrap:wrap;gap:0 6px}\n.todayTag{margin-left:auto;color:var(--text-secondary);font-size:var(--text-xs);font-weight:400}\n.agendaEmpty{margin:0;padding:2px 4px 10px 44px;color:var(--text-muted);font-size:var(--text-xs)}\n.agendaList{display:grid;gap:2px;margin:0 0 8px;padding:0;list-style:none}\n.agendaItem{display:grid;grid-template-columns:64px 4px minmax(0,1fr) auto;align-items:center;gap:10px;width:100%;min-height:52px;padding:8px 10px 8px 4px;border:0;border-radius:14px;background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.agendaItem:hover{background:var(--surface-muted)}\n.agendaItem:focus-visible,.agendaItem[data-selected]{background:var(--surface-muted)}\n.agendaItem:active{background:var(--surface-muted)}\n.agendaTime{display:grid;justify-items:end;font-size:var(--text-xs);line-height:1.35;font-variant-numeric:tabular-nums;white-space:nowrap}\n.agendaBar{align-self:stretch;width:4px;border-radius:2px;background:var(--cal)}\n.agendaText{display:grid;min-width:0;font-size:var(--text-xs)}\n.agendaText>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.agendaTitle{font-size:var(--text-sm);font-weight:500}\n.toast{position:absolute;bottom:16px;left:50%;z-index:30;display:flex;align-items:center;gap:4px;max-width:calc(100% - 32px);margin-left:auto;padding:6px 6px 6px 16px;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-floating);translate:-50% 0}\n.toastText{overflow:hidden;padding-right:6px;font-size:var(--text-sm);white-space:nowrap;text-overflow:ellipsis}\n.toastAction{flex:none;height:30px;padding:0 12px;border:0;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--background) 16%,transparent);color:inherit;font:inherit;font-weight:500;cursor:pointer}\n@media (hover:hover) and (pointer:fine){.toastAction:hover{background:color-mix(in oklab,var(--background) 24%,transparent)}\n.toastAction:focus-visible{background:color-mix(in oklab,var(--background) 24%,transparent)}\n.primaryLabel{display:none}\n@container (max-width: 760px){.buttonLabel{display:none}\n.today{order:-2;padding-inline:12px}", {"root":"root","scroller":"scroller","surface":"surface","column":"column","event":"event","headPane":"headPane","headDay":"headDay","date":"date","hover":"hover","srOnly":"srOnly","muted":"muted","toolbar":"toolbar","primary":"primary","button":"button","iconButton":"iconButton","title":"title","stepper":"stepper","views":"views","chip":"chip","danger":"danger","ghostButton":"ghostButton","allDayToggle":"allDayToggle","calendarItem":"calendarItem","eventBody":"eventBody","toast":"toast","swatches":"swatches","swatch":"swatch","frame":"frame","main":"main","sidebar":"sidebar","sideSection":"sideSection","sideTitle":"sideTitle","head":"head","headRow":"headRow","corner":"corner","headViewport":"headViewport","weekday":"weekday","eventTitle":"eventTitle","eventTime":"eventTime","handle":"handle","allDayRow":"allDayRow","allDayGutter":"allDayGutter","allDayLabel":"allDayLabel","allDayPane":"allDayPane","allDayColumn":"allDayColumn","allDay":"allDay","allDayTitle":"allDayTitle","more":"more","body":"body","gutter":"gutter","hour":"hour","nowLabel":"nowLabel","lines":"lines","halfLine":"halfLine","hourLine":"hourLine","gridRow":"gridRow","grid":"grid","pane":"pane","events":"events","nowRow":"nowRow","now":"now","origin":"origin","eventMeta":"eventMeta","eventFaces":"eventFaces","face":"face","dragLabel":"dragLabel","ghost":"ghost","ghostInner":"ghostInner","ghostTitle":"ghostTitle","ghostTime":"ghostTime","popover":"popover","popBody":"popBody","popHead":"popHead","titleInput":"titleInput","bar":"bar","row":"row","timeFields":"timeFields","timeRange":"timeRange","timeSelect":"timeSelect","field":"field","duration":"duration","people":"people","faces":"faces","picker":"picker","dot":"dot","popFoot":"popFoot","footActions":"footActions","hint":"hint","calendarList":"calendarList","check":"check","calendarName":"calendarName","mini":"mini","miniHead":"miniHead","miniTitle":"miniTitle","miniNav":"miniNav","miniGrid":"miniGrid","miniWeekday":"miniWeekday","miniDay":"miniDay","agendaScroller":"agendaScroller","agenda":"agenda","agendaDay":"agendaDay","agendaHead":"agendaHead","agendaDate":"agendaDate","agendaWeekday":"agendaWeekday","todayTag":"todayTag","agendaEmpty":"agendaEmpty","agendaList":"agendaList","agendaItem":"agendaItem","agendaTime":"agendaTime","agendaBar":"agendaBar","agendaText":"agendaText","agendaTitle":"agendaTitle","toastText":"toastText","toastAction":"toastAction","primaryLabel":"primaryLabel","buttonLabel":"buttonLabel","today":"today"});
A.reg(73051, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => J,
    In: () => q,
    q7: () => ev,
    VF: () => ew,
    p4: () => eg,
    ZL: () => Y,
    bL: () => G,
    wn: () => eb,
    PP: () => eS,
    l9: () => W,
    WT: () => z,
    LM: () => eu
  });
  var r = n(12115), o = n(47650);
  function l(e2, [t2, n2]) {
    return Math.min(n2, Math.max(t2, e2));
  }
  (0, Object.defineProperty)(l, "name", { value: "clamp", configurable: true });
  var i = n(70379), a = n(76094), s = n(47527), u = n(68599), c = n(1933), d = n(19416), p = n(32007), f = n(69885), h = n(89971), v = n(80878), m = n(19040), g = n(83935), w = n(55897), x = n(42442), S = n(17347), y = n(59322), b = n(66294);
  function C(e2) {
    let t2 = r.useRef({ value: e2, previous: e2 });
    return r.useMemo(
      () => (t2.current.value !== e2 && (t2.current.previous = t2.current.value, t2.current.value = e2), t2.current.previous),
      [e2]
    );
  }
  (0, Object.defineProperty)(C, "name", {
    value: "usePrevious",
    configurable: true
  });
  var j = n(40562), P = n(22954), T = n(5174), k = n(95155), I = Object.defineProperty, E = (e2, t2) => I(e2, "name", { value: t2, configurable: true }), R = [" ", "Enter", "ArrowUp", "ArrowDown"], M = [" ", "Enter"], D = "Select", [L, K, B] = (0, a.N)(D), [_, H] = (0, u.A)(D, [B, v.Bk]), N = (0, v.Bk)(), [A, O] = _(D), [V, F] = _(D);
  function U(e2) {
    let {
      __scopeSelect: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: i2,
      value: a2,
      defaultValue: s2,
      onValueChange: u2,
      dir: d2,
      name: p2,
      autoComplete: f2,
      disabled: m2,
      required: g2,
      form: w2,
      internal_do_not_use_render: x2
    } = e2, S2 = N(t2), [b2, C2] = r.useState(null), [j2, P2] = r.useState(null), [T2, I2] = r.useState(false), R2 = (0, c.jH)(d2), [M2, K2] = (0, y.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: i2,
      caller: D
    }), [B2, _2] = (0, y.i)({ prop: a2, defaultProp: s2, onChange: u2, caller: D }), H2 = r.useRef(null), O2 = r.useRef(B2);
    r.useEffect(() => {
      let e3 = w2 ? b2?.ownerDocument.getElementById(w2) : b2?.form;
      if (e3 instanceof HTMLFormElement) {
        let t3 = E(() => _2(O2.current), "reset");
        return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
      }
    }, [w2, b2, _2]);
    let F2 = !b2 || !!w2 || !!b2.closest("form"), [U2, G2] = r.useState(/* @__PURE__ */ new Set()), W2 = (0, h.B)(), z2 = Array.from(U2).map((e3) => e3.props.value).join(";"), q2 = r.useCallback((e3) => {
      G2((t3) => new Set(t3).add(e3));
    }, []), Z2 = r.useCallback((e3) => {
      G2((t3) => {
        let n3 = new Set(t3);
        return n3.delete(e3), n3;
      });
    }, []), X2 = {
      required: g2,
      trigger: b2,
      onTriggerChange: C2,
      valueNode: j2,
      onValueNodeChange: P2,
      valueNodeHasChildren: T2,
      onValueNodeHasChildrenChange: I2,
      contentId: W2,
      value: B2,
      onValueChange: _2,
      open: M2,
      onOpenChange: K2,
      dir: R2,
      triggerPointerDownPosRef: H2,
      disabled: m2,
      name: p2,
      autoComplete: f2,
      form: w2,
      nativeOptions: U2,
      nativeSelectKey: z2,
      isFormControl: F2
    };
    return (0, k.jsx)(v.bL, {
      ...S2,
      children: (0, k.jsx)(A, {
        scope: t2,
        ...X2,
        children: (0, k.jsx)(L.Provider, {
          scope: t2,
          children: (0, k.jsx)(V, {
            scope: t2,
            onNativeOptionAdd: q2,
            onNativeOptionRemove: Z2,
            children: eP(x2) ? x2(X2) : n2
          })
        })
      })
    });
  }
  E(U, "SelectProvider");
  var G = E((e2) => {
    let { __scopeSelect: t2, children: n2, ...r2 } = e2;
    return (0, k.jsx)(U, {
      __scopeSelect: t2,
      ...r2,
      internal_do_not_use_render: ({ isFormControl: e3 }) => (0, k.jsxs)(k.Fragment, {
        children: [n2, e3 ? (0, k.jsx)(ej, { __scopeSelect: t2 }) : null]
      })
    });
  }, "Select"), W = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, disabled: o2 = false, ...l2 } = e2, a2 = N(n2), u2 = O("SelectTrigger", n2), c2 = u2.disabled || o2, d2 = (0, s.s)(t2, u2.onTriggerChange), p2 = K(n2), f2 = r.useRef("touch"), [h2, m2, g2] = ek((e3) => {
        let t3 = p2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.value === u2.value), r2 = eI(t3, e3, n3);
        void 0 !== r2 && u2.onValueChange(r2.value);
      }), x2 = E((e3) => {
        c2 || (u2.onOpenChange(true), g2()), e3 && (u2.triggerPointerDownPosRef.current = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        });
      }, "handleOpen");
      return (0, k.jsx)(v.Mz, {
        asChild: true,
        ...a2,
        children: (0, k.jsx)(w.sG.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u2.open ? u2.contentId : void 0,
          "aria-expanded": u2.open,
          "aria-required": u2.required,
          "aria-autocomplete": "none",
          dir: u2.dir,
          "data-state": u2.open ? "open" : "closed",
          disabled: c2,
          "data-disabled": c2 ? "" : void 0,
          "data-placeholder": eT(u2.value) ? "" : void 0,
          ...l2,
          ref: d2,
          onClick: (0, i.mK)(l2.onClick, (e3) => {
            e3.currentTarget.focus(), "mouse" !== f2.current && x2(e3);
          }),
          onPointerDown: (0, i.mK)(l2.onPointerDown, (e3) => {
            f2.current = e3.pointerType;
            let t3 = e3.target;
            t3.hasPointerCapture(e3.pointerId) && t3.releasePointerCapture(e3.pointerId), 0 === e3.button && false === e3.ctrlKey && "mouse" === e3.pointerType && (x2(e3), e3.preventDefault());
          }),
          onKeyDown: (0, i.mK)(l2.onKeyDown, (e3) => {
            let t3 = "" !== h2.current;
            e3.ctrlKey || e3.altKey || e3.metaKey || 1 !== e3.key.length || m2(e3.key), (!t3 || " " !== e3.key) && R.includes(e3.key) && (x2(), e3.preventDefault());
          })
        })
      });
    }, "SelectTrigger")
  ), z = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        className: o2,
        style: l2,
        children: i2,
        placeholder: a2 = "",
        ...u2
      } = e2, c2 = O("SelectValue", n2), { onValueNodeHasChildrenChange: d2 } = c2, p2 = void 0 !== i2, f2 = (0, s.s)(t2, c2.onValueNodeChange);
      (0, b.N)(() => {
        d2(p2);
      }, [d2, p2]);
      let h2 = eT(c2.value);
      return (0, k.jsx)(w.sG.span, {
        ...u2,
        asChild: !h2 && u2.asChild,
        ref: f2,
        style: { pointerEvents: "none" },
        children: (0, k.jsx)(
          r.Fragment,
          { children: h2 ? a2 : i2 },
          h2 ? "placeholder" : "value"
        )
      });
    }, "SelectValue")
  ), q = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, ...o2 } = e2;
      return (0, k.jsx)(w.sG.span, {
        "aria-hidden": true,
        ...o2,
        ref: t2,
        children: r2 || "\u25BC"
      });
    }, "SelectIcon")
  ), [Z, X] = _("SelectPortal", { forceMount: void 0 }), Y = E((e2) => {
    let { __scopeSelect: t2, forceMount: n2, ...r2 } = e2;
    return (0, k.jsx)(Z, {
      scope: e2.__scopeSelect,
      forceMount: n2,
      children: (0, k.jsx)(m.Z, { asChild: true, ...r2 })
    });
  }, "SelectPortal"), Q = "SelectContent", J = r.forwardRef(
    E(function(e2, t2) {
      let n2 = X(Q, e2.__scopeSelect), { forceMount: o2 = n2.forceMount, ...l2 } = e2, i2 = O(Q, e2.__scopeSelect), [a2, s2] = r.useState();
      return (0, b.N)(() => {
        s2(new DocumentFragment());
      }, []), (0, k.jsx)(g.C, {
        present: o2 || i2.open,
        children: ({ present: e3 }) => e3 ? (0, k.jsx)(er, { ...l2, ref: t2 }) : (0, k.jsx)($, { ...l2, fragment: a2 })
      });
    }, "SelectContent")
  ), $ = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, fragment: l2 } = e2;
      return l2 ? o.createPortal(
        (0, k.jsx)(ee, {
          scope: n2,
          children: (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)("div", { ref: t2, children: r2 })
          })
        }),
        l2
      ) : null;
    }, "SelectContentFragment")
  ), [ee, et] = _(Q), en = (0, x.TL)("SelectContent.RemoveScroll"), er = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2 } = e2, {
        position: o2 = "item-aligned",
        onCloseAutoFocus: l2,
        onEscapeKeyDown: a2,
        onPointerDownOutside: u2,
        side: c2,
        sideOffset: h2,
        align: v2,
        alignOffset: m2,
        arrowPadding: g2,
        collisionBoundary: w2,
        collisionPadding: x2,
        sticky: S2,
        hideWhenDetached: y2,
        avoidCollisions: b2,
        ...C2
      } = e2, j2 = O(Q, n2), [I2, R2] = r.useState(null), [M2, D2] = r.useState(null), L2 = (0, s.s)(t2, R2), [B2, _2] = r.useState(null), [H2, N2] = r.useState(null), A2 = K(n2), [V2, F2] = r.useState(false), U2 = r.useRef(false);
      r.useEffect(() => {
        if (I2) return (0, P.Eq)(I2);
      }, [I2]), (0, p.Oh)();
      let G2 = r.useCallback(
        (e3) => {
          let [t3, ...n3] = A2().map((e4) => e4.ref.current), [r2] = n3.slice(-1), o3 = document.activeElement;
          for (let n4 of e3)
            if (n4 === o3 || (n4?.scrollIntoView({ block: "nearest" }), n4 === t3 && M2 && (M2.scrollTop = 0), n4 === r2 && M2 && (M2.scrollTop = M2.scrollHeight), n4?.focus(), document.activeElement !== o3))
              return;
        },
        [A2, M2]
      ), W2 = r.useCallback(() => G2([B2, I2]), [G2, B2, I2]);
      r.useEffect(() => {
        V2 && W2();
      }, [V2, W2]);
      let { onOpenChange: z2, triggerPointerDownPosRef: q2 } = j2;
      r.useEffect(() => {
        if (I2) {
          let e3 = { x: 0, y: 0 }, t3 = E((t4) => {
            e3 = {
              x: Math.abs(Math.round(t4.pageX) - (q2.current?.x ?? 0)),
              y: Math.abs(Math.round(t4.pageY) - (q2.current?.y ?? 0))
            };
          }, "handlePointerMove"), n3 = E((n4) => {
            e3.x <= 10 && e3.y <= 10 ? n4.preventDefault() : n4.composedPath().includes(I2) || z2(false), document.removeEventListener("pointermove", t3), q2.current = null;
          }, "handlePointerUp");
          return null !== q2.current && (document.addEventListener("pointermove", t3), document.addEventListener("pointerup", n3, {
            capture: true,
            once: true
          })), () => {
            document.removeEventListener("pointermove", t3), document.removeEventListener("pointerup", n3, {
              capture: true
            });
          };
        }
      }, [I2, z2, q2]), r.useEffect(() => {
        let e3 = E(() => z2(false), "close");
        return window.addEventListener("blur", e3), window.addEventListener("resize", e3), () => {
          window.removeEventListener("blur", e3), window.removeEventListener("resize", e3);
        };
      }, [z2]);
      let [Z2, X2] = ek((e3) => {
        let t3 = A2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.ref.current === document.activeElement), r2 = eI(t3, e3, n3);
        r2 && setTimeout(() => r2.ref.current?.focus());
      }), Y2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && (_2(e3), r2 && (U2.current = true));
        },
        [j2.value]
      ), J2 = r.useCallback(() => I2?.focus(), [I2]), $2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && N2(e3);
        },
        [j2.value]
      ), et2 = "popper" === o2 ? el : eo;
      return (0, k.jsx)(ee, {
        scope: n2,
        content: I2,
        viewport: M2,
        onViewportChange: D2,
        itemRefCallback: Y2,
        selectedItem: B2,
        onItemLeave: J2,
        itemTextRefCallback: $2,
        focusSelectedItem: W2,
        selectedItemText: H2,
        position: o2,
        isPositioned: V2,
        searchRef: Z2,
        children: (0, k.jsx)(T.A, {
          as: en,
          allowPinchZoom: true,
          children: (0, k.jsx)(f.n, {
            asChild: true,
            trapped: j2.open,
            onMountAutoFocus: (e3) => {
              e3.preventDefault();
            },
            onUnmountAutoFocus: (0, i.mK)(l2, (e3) => {
              j2.trigger?.focus({ preventScroll: true }), e3.preventDefault();
            }),
            children: (0, k.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: a2,
              onPointerDownOutside: u2,
              onFocusOutside: (e3) => e3.preventDefault(),
              onDismiss: () => j2.onOpenChange(false),
              children: (0, k.jsx)(et2, {
                role: "listbox",
                id: j2.contentId,
                "data-state": j2.open ? "open" : "closed",
                dir: j2.dir,
                onContextMenu: (e3) => e3.preventDefault(),
                ...C2,
                ...et2 === el ? {
                  side: c2,
                  sideOffset: h2,
                  align: v2,
                  alignOffset: m2,
                  arrowPadding: g2,
                  collisionBoundary: w2,
                  collisionPadding: x2,
                  sticky: S2,
                  hideWhenDetached: y2,
                  avoidCollisions: b2
                } : {},
                onPlaced: () => F2(true),
                ref: L2,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...C2.style
                },
                onKeyDown: (0, i.mK)(C2.onKeyDown, (e3) => {
                  let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
                  if ("Tab" === e3.key && e3.preventDefault(), t3 || 1 !== e3.key.length || X2(e3.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e3.key)) {
                    let t4 = A2().filter((e4) => !e4.disabled).map((e4) => e4.ref.current);
                    if (["ArrowUp", "End"].includes(e3.key) && (t4 = t4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e3.key)) {
                      let n3 = e3.target, r2 = t4.indexOf(n3);
                      t4 = t4.slice(r2 + 1);
                    }
                    setTimeout(() => G2(t4)), e3.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    }, "SelectContentImpl")
  ), eo = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onPlaced: o2, ...i2 } = e2, a2 = O(Q, n2), u2 = et(Q, n2), [c2, d2] = r.useState(null), [p2, f2] = r.useState(null), h2 = (0, s.s)(t2, f2), v2 = K(n2), m2 = r.useRef(false), g2 = r.useRef(true), {
        viewport: x2,
        selectedItem: S2,
        selectedItemText: y2,
        focusSelectedItem: C2
      } = u2, j2 = r.useCallback(() => {
        if (a2.trigger && a2.valueNode && c2 && p2 && x2 && S2 && y2) {
          let e3 = a2.trigger.getBoundingClientRect(), t3 = p2.getBoundingClientRect(), n3 = a2.valueNode.getBoundingClientRect(), r2 = y2.getBoundingClientRect();
          if ("rtl" !== a2.dir) {
            let o3 = r2.left - t3.left, i4 = n3.left - o3, a3 = e3.left - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.left = d4 + "px";
          } else {
            let o3 = t3.right - r2.right, i4 = window.innerWidth - n3.right - o3, a3 = window.innerWidth - e3.right - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.right = d4 + "px";
          }
          let i3 = v2(), s2 = window.innerHeight - 20, u3 = x2.scrollHeight, d3 = window.getComputedStyle(p2), f3 = parseInt(d3.borderTopWidth, 10), h3 = parseInt(d3.paddingTop, 10), g3 = parseInt(d3.borderBottomWidth, 10), w2 = f3 + h3 + u3 + parseInt(d3.paddingBottom, 10) + g3, b2 = Math.min(5 * S2.offsetHeight, w2), C3 = window.getComputedStyle(x2), j3 = parseInt(C3.paddingTop, 10), P3 = parseInt(C3.paddingBottom, 10), T3 = e3.top + e3.height / 2 - 10, k2 = S2.offsetHeight / 2, I3 = f3 + h3 + (S2.offsetTop + k2);
          if (I3 <= T3) {
            let e4 = i3.length > 0 && S2 === i3[i3.length - 1].ref.current;
            c2.style.bottom = "0px";
            let t4 = Math.max(
              s2 - T3,
              k2 + (e4 ? P3 : 0) + (p2.clientHeight - x2.offsetTop - x2.offsetHeight) + g3
            );
            c2.style.height = I3 + t4 + "px";
          } else {
            let e4 = i3.length > 0 && S2 === i3[0].ref.current;
            c2.style.top = "0px";
            let t4 = Math.max(T3, f3 + x2.offsetTop + (e4 ? j3 : 0) + k2);
            c2.style.height = t4 + (w2 - I3) + "px", x2.scrollTop = I3 - T3 + x2.offsetTop;
          }
          c2.style.margin = "10px 0", c2.style.minHeight = b2 + "px", c2.style.maxHeight = s2 + "px", o2?.(), requestAnimationFrame(() => m2.current = true);
        }
      }, [v2, a2.trigger, a2.valueNode, c2, p2, x2, S2, y2, a2.dir, o2]);
      (0, b.N)(() => j2(), [j2]);
      let [P2, T2] = r.useState();
      (0, b.N)(() => {
        p2 && T2(window.getComputedStyle(p2).zIndex);
      }, [p2]);
      let I2 = r.useCallback(
        (e3) => {
          e3 && true === g2.current && (j2(), C2?.(), g2.current = false);
        },
        [j2, C2]
      );
      return (0, k.jsx)(ei, {
        scope: n2,
        contentWrapper: c2,
        shouldExpandOnScrollRef: m2,
        onScrollButtonChange: I2,
        children: (0, k.jsx)("div", {
          ref: d2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P2
          },
          children: (0, k.jsx)(w.sG.div, {
            ...i2,
            ref: h2,
            style: { boxSizing: "border-box", maxHeight: "100%", ...i2.style }
          })
        })
      });
    }, "SelectItemAlignedPosition")
  ), el = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        align: r2 = "start",
        collisionPadding: o2 = 10,
        ...l2
      } = e2, i2 = N(n2);
      return (0, k.jsx)(v.UC, {
        ...i2,
        ...l2,
        ref: t2,
        align: r2,
        collisionPadding: o2,
        style: {
          boxSizing: "border-box",
          ...l2.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "SelectPopperPosition")
  ), [ei, ea] = _(Q, {}), es = "SelectViewport", eu = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, nonce: o2, ...l2 } = e2, a2 = et(es, n2), u2 = ea(es, n2), c2 = (0, s.s)(t2, a2.onViewportChange), d2 = r.useRef(0);
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o2
          }),
          (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...l2,
              ref: c2,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...l2.style
              },
              onScroll: (0, i.mK)(l2.onScroll, (e3) => {
                let t3 = e3.currentTarget, { contentWrapper: n3, shouldExpandOnScrollRef: r2 } = u2;
                if (r2?.current && n3) {
                  let e4 = Math.abs(d2.current - t3.scrollTop);
                  if (e4 > 0) {
                    let r3 = window.innerHeight - 20, o3 = Math.max(
                      parseFloat(n3.style.minHeight),
                      parseFloat(n3.style.height)
                    );
                    if (o3 < r3) {
                      let l3 = o3 + e4, i2 = Math.min(r3, l3), a3 = l3 - i2;
                      n3.style.height = i2 + "px", "0px" === n3.style.bottom && (t3.scrollTop = a3 > 0 ? a3 : 0, n3.style.justifyContent = "flex-end");
                    }
                  }
                }
                d2.current = t3.scrollTop;
              })
            })
          })
        ]
      });
    }, "SelectViewport")
  ), [ec, ed] = _("SelectGroup"), ep = "SelectItem", [ef, eh] = _(ep), ev = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        value: o2,
        disabled: l2 = false,
        textValue: a2,
        ...u2
      } = e2, c2 = O(ep, n2), d2 = et(ep, n2), p2 = c2.value === o2, [f2, v2] = r.useState(a2 ?? ""), [m2, g2] = r.useState(false), x2 = (0, S.c)((e3) => d2.itemRefCallback?.(e3, o2, l2)), y2 = (0, s.s)(t2, x2), b2 = (0, h.B)(), C2 = r.useRef("touch"), j2 = E(() => {
        l2 || (c2.onValueChange(o2), c2.onOpenChange(false));
      }, "handleSelect");
      return (0, k.jsx)(ef, {
        scope: n2,
        value: o2,
        disabled: l2,
        textId: b2,
        isSelected: p2,
        onItemTextChange: r.useCallback((e3) => {
          v2((t3) => t3 || (e3?.textContent ?? "").trim());
        }, []),
        children: (0, k.jsx)(L.ItemSlot, {
          scope: n2,
          value: o2,
          disabled: l2,
          textValue: f2,
          children: (0, k.jsx)(w.sG.div, {
            role: "option",
            "aria-labelledby": b2,
            "data-highlighted": m2 ? "" : void 0,
            "aria-selected": p2 && m2,
            "data-state": p2 ? "checked" : "unchecked",
            "aria-disabled": l2 || void 0,
            "data-disabled": l2 ? "" : void 0,
            tabIndex: l2 ? void 0 : -1,
            ...u2,
            ref: y2,
            onFocus: (0, i.mK)(u2.onFocus, () => g2(true)),
            onBlur: (0, i.mK)(u2.onBlur, () => g2(false)),
            onClick: (0, i.mK)(u2.onClick, () => {
              "mouse" !== C2.current && j2();
            }),
            onPointerUp: (0, i.mK)(u2.onPointerUp, () => {
              "mouse" === C2.current && j2();
            }),
            onPointerDown: (0, i.mK)(u2.onPointerDown, (e3) => {
              C2.current = e3.pointerType;
            }),
            onPointerMove: (0, i.mK)(u2.onPointerMove, (e3) => {
              C2.current = e3.pointerType, l2 ? d2.onItemLeave?.() : "mouse" === C2.current && e3.currentTarget.focus({ preventScroll: true });
            }),
            onPointerLeave: (0, i.mK)(u2.onPointerLeave, (e3) => {
              e3.currentTarget === document.activeElement && d2.onItemLeave?.();
            }),
            onKeyDown: (0, i.mK)(u2.onKeyDown, (e3) => {
              l2 || e3.target !== e3.currentTarget || (d2.searchRef?.current === "" || " " !== e3.key) && (M.includes(e3.key) && j2(), " " === e3.key && e3.preventDefault());
            })
          })
        })
      });
    }, "SelectItem")
  ), em = "SelectItemText", eg = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, className: l2, style: i2, ...a2 } = e2, u2 = O(em, n2), c2 = et(em, n2), d2 = eh(em, n2), p2 = F(em, n2), [f2, h2] = r.useState(null), v2 = (0, S.c)((e3) => c2.itemTextRefCallback?.(e3, d2.value, d2.disabled)), m2 = (0, s.s)(t2, h2, d2.onItemTextChange, v2), g2 = f2?.textContent, x2 = r.useMemo(
        () => (0, k.jsx)(
          "option",
          { value: d2.value, disabled: d2.disabled, children: g2 },
          d2.value
        ),
        [d2.disabled, d2.value, g2]
      ), { onNativeOptionAdd: y2, onNativeOptionRemove: C2 } = p2;
      return (0, b.N)(() => (y2(x2), () => C2(x2)), [y2, C2, x2]), (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(w.sG.span, { id: d2.textId, ...a2, ref: m2 }),
          d2.isSelected && u2.valueNode && !u2.valueNodeHasChildren && !eT(u2.value) ? o.createPortal(a2.children, u2.valueNode) : null
        ]
      });
    }, "SelectItemText")
  ), ew = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, ...r2 } = e2;
      return eh("SelectItemIndicator", n2).isSelected ? (0, k.jsx)(w.sG.span, { "aria-hidden": true, ...r2, ref: t2 }) : null;
    }, "SelectItemIndicator")
  ), ex = "SelectScrollUpButton", eS = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ex, e2.__scopeSelect), o2 = ea(ex, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            i2(t3.scrollTop > 0);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop - t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollUpButton")
  ), ey = "SelectScrollDownButton", eb = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ey, e2.__scopeSelect), o2 = ea(ey, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            let e4 = t3.scrollHeight - t3.clientHeight;
            i2(Math.ceil(t3.scrollTop) < e4);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop + t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollDownButton")
  ), eC = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onAutoScroll: o2, ...l2 } = e2, a2 = et("SelectScrollButton", n2), s2 = r.useRef(null), u2 = K(n2), c2 = r.useCallback(() => {
        null !== s2.current && (window.clearInterval(s2.current), s2.current = null);
      }, []);
      return r.useEffect(() => () => c2(), [c2]), (0, b.N)(() => {
        let e3 = u2().find((e4) => e4.ref.current === document.activeElement);
        e3?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u2]), (0, k.jsx)(w.sG.div, {
        "aria-hidden": true,
        ...l2,
        ref: t2,
        style: { flexShrink: 0, ...l2.style },
        onPointerDown: (0, i.mK)(l2.onPointerDown, () => {
          null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerMove: (0, i.mK)(l2.onPointerMove, () => {
          a2.onItemLeave?.(), null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerLeave: (0, i.mK)(l2.onPointerLeave, () => {
          c2();
        })
      });
    }, "SelectScrollButtonImpl")
  ), ej = r.forwardRef(
    E(function({ __scopeSelect: e2, ...t2 }, n2) {
      let o2 = O("SelectBubbleInput", e2), {
        value: l2,
        onValueChange: i2,
        required: a2,
        disabled: u2,
        name: c2,
        autoComplete: d2,
        form: p2
      } = o2, { nativeOptions: f2, nativeSelectKey: h2 } = o2, v2 = r.useRef(null), m2 = (0, s.s)(n2, v2), g2 = l2 ?? "", x2 = C(g2), S2 = Array.from(f2).some((e3) => (e3.props.value ?? "") === "");
      return r.useEffect(() => {
        let e3 = v2.current;
        if (!e3) return;
        let t3 = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value"
        ).set;
        if (x2 !== g2 && t3) {
          let n3 = new Event("change", { bubbles: true });
          t3.call(e3, g2), e3.dispatchEvent(n3);
        }
      }, [x2, g2]), (0, k.jsxs)(
        w.sG.select,
        {
          "aria-hidden": true,
          required: a2,
          tabIndex: -1,
          name: c2,
          autoComplete: d2,
          disabled: u2,
          form: p2,
          onChange: (e3) => i2(e3.target.value),
          ...t2,
          style: { ...j.Qg, ...t2.style },
          ref: m2,
          defaultValue: g2,
          children: [
            eT(l2) && !S2 ? (0, k.jsx)("option", { value: "" }) : null,
            Array.from(f2)
          ]
        },
        h2
      );
    }, "SelectBubbleInput")
  );
  function eP(e2) {
    return "function" == typeof e2;
  }
  function eT(e2) {
    return "" === e2 || void 0 === e2;
  }
  function ek(e2) {
    let t2 = (0, S.c)(e2), n2 = r.useRef(""), o2 = r.useRef(0), l2 = r.useCallback(
      (e3) => {
        t2(n2.current + e3);
      },
      [t2]
    ), i2 = r.useCallback(() => {
      n2.current = "", window.clearTimeout(o2.current);
    }, []);
    return r.useEffect(() => () => window.clearTimeout(o2.current), []), [n2, l2, i2];
  }
  function eI(e2, t2, n2) {
    let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, o2 = n2 ? e2.indexOf(n2) : -1, l2 = eE(e2, Math.max(o2, 0));
    1 === r2.length && (l2 = l2.filter((e3) => e3 !== n2));
    let i2 = l2.find(
      (e3) => e3.textValue.toLowerCase().startsWith(r2.toLowerCase())
    );
    return i2 !== n2 ? i2 : void 0;
  }
  function eE(e2, t2) {
    return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
  }
  E(eP, "isFunction"), E(eT, "shouldShowPlaceholder"), E(ek, "useTypeaheadSearch"), E(eI, "findNextItem"), E(eE, "wrapArray");
}

__m(__module,__exports,__require);
});
A.reg(79330, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, {
    SAMPLE_CALENDARS: () => M,
    WeekCalendar: () => eM,
    default: () => eE,
    sampleEvents: () => R
  });
  var n = t(95155), r = t(12115), l = t(18310), i = t(6900), s = t(92171), o = t(80642), d = t(25354), c = t(78780), u = t(76721), h = t(2125), m = t(12363), p = t(67033), g = t(66558), y = t(7770);
  let f = /* @__PURE__ */ new Map();
  function w(e2, a2) {
    let t2 = 1970, n2 = 1, r2 = 1, l2 = 0, i2 = 0;
    for (let s2 of (function(e3) {
      let a3 = e3 ?? "", t3 = f.get(a3);
      if (!t3) {
        try {
          t3 = new Intl.DateTimeFormat("en-US", {
            timeZone: e3,
            hourCycle: "h23",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          });
        } catch {
          t3 = new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          });
        }
        f.set(a3, t3);
      }
      return t3;
    })(a2).formatToParts(e2))
      "year" === s2.type ? t2 = +s2.value : "month" === s2.type ? n2 = +s2.value : "day" === s2.type ? r2 = +s2.value : "hour" === s2.type ? l2 = s2.value % 24 : "minute" === s2.type && (i2 = +s2.value);
    return Math.round(Date.UTC(t2, n2 - 1, r2, l2, i2) / 6e4);
  }
  function v(e2, a2) {
    let t2 = 6e4 * e2;
    for (let n2 = 0; n2 < 2; n2++) {
      let n3 = w(new Date(t2), a2) - e2;
      if (!n3) break;
      t2 -= 6e4 * n3;
    }
    return new Date(t2);
  }
  let _ = (e2) => Math.floor(e2 / 1440), k = (e2) => (e2 % 1440 + 1440) % 1440, x = (e2) => ((e2 + 4) % 7 + 7) % 7, b = (e2, a2) => e2 - (x(e2) - a2 + 7) % 7, j = (e2) => {
    let a2 = x(e2);
    return 0 === a2 || 6 === a2;
  }, N = (e2, a2, t2) => Math.round(Date.UTC(e2, a2 - 1, t2) / 864e5);
  var D = t(67752);
  let M = [
    { id: "work", name: "Work", color: "blue" },
    { id: "meetings", name: "Team", color: "violet" },
    { id: "personal", name: "Personal", color: "green" },
    { id: "travel", name: "Travel", color: "amber" }
  ], T = N(2026, 9, 21), C = new Date(Date.UTC(2026, 8, 24, 12)), $ = (...e2) => e2.map((e3) => {
    let a2 = D.c0.find((a3) => a3.id === e3);
    return { name: a2.name, avatar: a2.src };
  }), A = $(
    "marcus-johnson",
    "sofia-ramirez",
    "chloe-nguyen",
    "daniel-kim",
    "emma-collins"
  ), S = (e2) => {
    let [a2, t2] = e2.split(":").map(Number);
    return 60 * a2 + t2;
  }, I = [
    [0, "9:00", "9:15", "Team standup", "meetings", "Video call", A],
    [0, "9:30", "11:30", "Focus: Q4 planning doc", "work"],
    [
      0,
      "12:00",
      "13:00",
      "Lunch with Sofia",
      "personal",
      "Tartine Manufactory",
      $("sofia-ramirez")
    ],
    [
      0,
      "13:30",
      "14:00",
      "1:1 with Marcus",
      "meetings",
      "Marcus's desk",
      $("marcus-johnson")
    ],
    [
      0,
      "14:00",
      "15:00",
      "Pricing sync",
      "work",
      "Juniper room",
      $("ava-mitchell", "tyler-hayes", "andre-williams")
    ],
    [
      0,
      "14:00",
      "14:30",
      "Quick sync with Daniel",
      "meetings",
      "Video call",
      $("daniel-kim")
    ],
    [
      0,
      "14:30",
      "15:15",
      "Hiring debrief",
      "meetings",
      "Atlas room",
      $("nathan-cole", "olivia-bennett")
    ],
    [0, "18:00", "19:00", "Climbing gym", "personal", "Mission Cliffs"],
    [1, "9:00", "9:15", "Team standup", "meetings", "Video call", A],
    [
      1,
      "10:00",
      "11:30",
      "Design review: onboarding",
      "work",
      "Atlas room, 4th floor",
      $("jasmine-brooks", "emma-collins", "chloe-nguyen", "marcus-johnson")
    ],
    [
      1,
      "11:00",
      "11:30",
      "Portfolio chat with Mateo",
      "meetings",
      "Video call",
      $("mateo-alvarez")
    ],
    [1, "13:00", "15:00", "Focus: prototype the new editor", "work"],
    [
      1,
      "15:00",
      "15:45",
      "Customer call: Northwind",
      "work",
      "Video call",
      $("hannah-walsh", "ryan-sullivan")
    ],
    [1, "17:00", "17:45", "Dentist", "personal", "Valencia Dental"],
    [2, "8:00", "8:30", "Pack for New York", "personal"],
    [2, "9:00", "9:15", "Team standup", "meetings", "Video call", A],
    [
      2,
      "9:30",
      "10:30",
      "Sprint planning",
      "meetings",
      "Juniper room",
      $("daniel-kim", "olivia-bennett", "marcus-johnson")
    ],
    [
      2,
      "10:30",
      "11:30",
      "Roadmap review",
      "work",
      "Atlas room",
      $("diane-foster", "nathan-cole")
    ],
    [
      2,
      "11:00",
      "12:00",
      "Interview: staff engineer",
      "meetings",
      "Juniper room",
      $("olivia-bennett")
    ],
    [
      2,
      "12:30",
      "18:05",
      "Flight UA 1542 to New York",
      "travel",
      "SFO Terminal 3, gate F12"
    ],
    [3, "9:00", "9:15", "Team standup", "meetings", "Video call", A],
    [
      3,
      "9:30",
      "12:00",
      "Offsite: strategy session",
      "work",
      "Brooklyn Navy Yard",
      $("diane-foster", "nathan-cole", "jasmine-brooks", "tyler-hayes")
    ],
    [
      3,
      "12:00",
      "13:00",
      "Lunch with the leadership team",
      "personal",
      "Olmsted"
    ],
    [
      3,
      "13:00",
      "16:30",
      "Offsite: team workshops",
      "work",
      "Brooklyn Navy Yard",
      $("diane-foster", "sofia-ramirez", "andre-williams")
    ],
    [
      3,
      "16:30",
      "17:00",
      "1:1 with Nathan",
      "meetings",
      "Walk along the pier",
      $("nathan-cole")
    ],
    [
      3,
      "19:00",
      "21:00",
      "Dinner at Lilia",
      "personal",
      "567 Union Ave",
      $("jasmine-brooks", "tyler-hayes")
    ],
    [4, "9:00", "9:15", "Team standup", "meetings", "Video call", A],
    [
      4,
      "10:00",
      "12:00",
      "Offsite: wrap up and next steps",
      "work",
      "Brooklyn Navy Yard",
      $("diane-foster", "nathan-cole")
    ],
    [
      4,
      "13:00",
      "13:30",
      "Metrics review",
      "work",
      "Video call",
      $("chloe-nguyen")
    ],
    [
      4,
      "15:00",
      "21:30",
      "Flight UA 2210 to San Francisco",
      "travel",
      "JFK Terminal 7"
    ],
    [5, "8:00", "9:00", "Long run, Golden Gate Park", "personal"],
    [5, "9:30", "11:00", "Farmers market", "personal", "Ferry Building"],
    [
      6,
      "11:00",
      "12:30",
      "Brunch with Emma",
      "personal",
      "Zazie, Cole Valley",
      $("emma-collins")
    ],
    [6, "17:00", "17:30", "Plan the week", "work"]
  ], L = [
    [2, 4, "Hotel: The Wythe", "travel", "80 Wythe Ave, Brooklyn"],
    [3, 4, "Leadership offsite", "work", "Brooklyn Navy Yard"],
    [3, 3, "Mom's birthday", "personal"]
  ], P = [
    [
      "10:00",
      "11:00",
      "Product review",
      "work",
      "Atlas room",
      $("sofia-ramirez", "daniel-kim")
    ],
    [
      "11:30",
      "12:00",
      "1:1 with Chloe",
      "meetings",
      "Video call",
      $("chloe-nguyen")
    ],
    ["13:00", "15:00", "Focus: deep work", "work"],
    [
      "14:00",
      "14:45",
      "Partner sync",
      "meetings",
      "Video call",
      $("jordan-reyes")
    ],
    [
      "15:30",
      "16:30",
      "Research readout",
      "work",
      "Juniper room",
      $("emma-collins", "olivia-bennett")
    ],
    [
      "12:00",
      "13:00",
      "Lunch with Daniel",
      "personal",
      "Souvla, Hayes Valley",
      $("daniel-kim")
    ],
    [
      "9:30",
      "10:30",
      "Roadmap grooming",
      "meetings",
      "Juniper room",
      $("marcus-johnson", "sofia-ramirez")
    ],
    ["18:00", "19:00", "Pilates", "personal", "Mission studio"],
    ["10:30", "12:00", "Spec writing", "work"],
    [
      "14:30",
      "15:30",
      "Interview: product designer",
      "meetings",
      "Juniper room",
      $("olivia-bennett")
    ]
  ];
  function R(e2, a2 = 4) {
    let t2 = [];
    for (let n2 = -a2; n2 <= a2; n2++) {
      let a3 = T + 7 * n2, { timed: r2, allDay: l2 } = (function(e3) {
        let a4;
        if (e3 === T) return { timed: I, allDay: L };
        let t3 = (a4 = e3 + 1831565813, () => (a4 = Math.imul(a4 ^ a4 >>> 15, 1 | a4), (((a4 ^= a4 + Math.imul(a4 ^ a4 >>> 7, 61 | a4)) ^ a4 >>> 14) >>> 0) / 4294967296)), n3 = [0, 1, 2, 3, 4].map((e4) => [
          e4,
          "9:00",
          "9:15",
          "Team standup",
          "meetings",
          "Video call",
          A
        ]);
        for (let e4 = 0; e4 < 5; e4++) {
          let a5 = /* @__PURE__ */ new Set();
          for (let r3 = 1 + Math.floor(3 * t3()); r3 > 0; r3--) {
            let r4 = Math.floor(t3() * P.length);
            a5.has(r4) || (a5.add(r4), n3.push([e4, ...P[r4]]));
          }
        }
        return t3() > 0.4 && n3.push([
          5,
          "9:30",
          "11:00",
          "Farmers market",
          "personal",
          "Ferry Building"
        ]), t3() > 0.5 && n3.push([
          6,
          "9:00",
          "10:30",
          "Long run",
          "personal",
          "Golden Gate Park"
        ]), {
          timed: n3,
          allDay: t3() > 0.6 ? [[Math.floor(5 * t3()), 0, "Company holiday", "work"]] : []
        };
      })(a3);
      r2.forEach(
        ([n3, r3, l3, i2, s2, o2, d2], c2) => t2.push({
          id: `w${a3}-${c2}`,
          title: i2,
          calendarId: s2,
          location: o2,
          attendees: d2,
          start: v((a3 + n3) * 1440 + S(r3), e2),
          end: v((a3 + n3) * 1440 + S(l3), e2)
        })
      ), l2.forEach(
        ([n3, r3, l3, i2, s2], o2) => t2.push({
          id: `w${a3}-a${o2}`,
          title: l3,
          calendarId: i2,
          location: s2,
          allDay: true,
          start: v((a3 + n3) * 1440, e2),
          end: v((a3 + Math.max(n3, r3) + 1) * 1440, e2)
        })
      );
    }
    return t2;
  }
  var E = t(5772), z = t(59103), F = t(9005), W = t(57465), B = t(25879), O = t(64577), U = t(96220), V = t(70460), H = t.n(V);
  let { duration: Y, ease: q } = y.T, G = [...q.standard], K = (e2, a2, t2) => Math.min(t2, Math.max(a2, e2)), J = /* @__PURE__ */ new Set(["blue", "green", "violet", "amber", "rose", "teal"]), Q = (e2) => e2 ? J.has(e2.color) ? `var(--wc-${e2.color})` : e2.color : "var(--wc-neutral)", X = (e2) => ({ "--cal": e2 });
  function Z({ people: e2, size: a2 = 20, max: t2 = 4 }) {
    let r2 = e2.slice(0, t2), l2 = e2.length - r2.length;
    return (0, n.jsxs)("span", {
      className: H().faces,
      "aria-hidden": "true",
      children: [
        r2.map(
          (e3) => e3.avatar ? (0, n.jsx)(
            E.default,
            {
              src: e3.avatar,
              alt: "",
              width: a2,
              height: a2,
              className: H().face,
              style: { width: a2, height: a2 }
            },
            e3.name
          ) : (0, n.jsx)(
            "span",
            {
              className: H().face,
              "data-initials": "",
              style: { width: a2, height: a2 },
              children: e3.name.split(/\s+/).map((e4) => e4[0]).filter(Boolean).slice(0, 2).join("").toUpperCase()
            },
            e3.name
          )
        ),
        l2 > 0 && (0, n.jsxs)("span", {
          className: H().face,
          "data-initials": "",
          style: { width: a2, height: a2 },
          children: ["+", l2]
        })
      ]
    });
  }
  function ee({
    anchor: e2,
    rootRef: a2,
    scrollerRef: t2,
    placement: l2 = "side",
    width: i2 = 340,
    reduced: s2,
    label: o2,
    onClose: c2,
    ignore: u2,
    children: h2
  }) {
    let m2 = (0, r.useRef)(null);
    return (0, r.useLayoutEffect)(() => {
      let n2 = () => {
        let n3, r3, s4, o3 = a2.current, d2 = m2.current;
        if (!o3 || !d2) return;
        let c3 = o3.getBoundingClientRect(), u3 = Math.min(i2, c3.width - 16);
        d2.style.width = `${u3}px`;
        let h3 = d2.offsetHeight, p2 = e2()?.getBoundingClientRect(), g2 = p2 ? {
          left: p2.left - c3.left,
          right: p2.right - c3.left,
          top: p2.top - c3.top,
          bottom: p2.bottom - c3.top
        } : { left: c3.width / 2, right: c3.width / 2, top: 96, bottom: 96 }, y2 = t2?.current?.getBoundingClientRect(), f2 = Math.max(y2 ? y2.top - c3.top : 0, -c3.top) + 8, w2 = Math.min(
          y2 ? y2.bottom - c3.top : c3.height,
          window.innerHeight - c3.top
        ) - 8, v2 = Math.max(f2, w2 - h3);
        if ("side" === l2 && c3.width >= 640 && g2.right + 10 + u3 <= c3.width - 8)
          n3 = g2.right + 10, r3 = K(g2.top - 6, f2, v2), s4 = "left top";
        else if ("side" === l2 && c3.width >= 640 && g2.left - 10 - u3 >= 8)
          n3 = g2.left - 10 - u3, r3 = K(g2.top - 6, f2, v2), s4 = "right top";
        else {
          n3 = K(
            "below" === l2 ? g2.right - u3 : (g2.left + g2.right) / 2 - u3 / 2,
            8,
            c3.width - u3 - 8
          );
          let e3 = g2.bottom + 8, a3 = g2.top - 8 - h3;
          "below" === l2 || e3 + h3 <= w2 ? (r3 = e3, s4 = "center top") : (r3 = a3 >= f2 ? a3 : v2, s4 = "center bottom");
        }
        d2.style.left = `${Math.round(n3)}px`, d2.style.top = `${Math.round(r3)}px`, d2.style.transformOrigin = s4;
      };
      n2();
      let r2 = t2?.current;
      r2?.addEventListener("scroll", n2, { passive: true }), window.addEventListener("resize", n2);
      let s3 = "u" < typeof ResizeObserver ? null : new ResizeObserver(n2);
      return m2.current && s3?.observe(m2.current), () => {
        r2?.removeEventListener("scroll", n2), window.removeEventListener("resize", n2), s3?.disconnect();
      };
    }, [e2, l2, a2, t2, i2]), (0, r.useEffect)(() => {
      m2.current?.querySelector("[data-autofocus]")?.focus({ preventScroll: true });
    }, []), (0, r.useEffect)(() => {
      let e3 = (e4) => {
        let a3 = e4.target;
        m2.current?.contains(a3) || u2?.()?.contains(a3) || c2();
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [u2, c2]), (0, n.jsx)(d.PY1.div, {
      ref: m2,
      className: H().popover,
      role: "dialog",
      "aria-label": o2,
      initial: s2 ? { opacity: 0 } : { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      exit: s2 ? { opacity: 0, transition: { duration: Y.instant } } : {
        opacity: 0,
        scale: 0.98,
        transition: { duration: Y.instant, ease: G }
      },
      transition: s2 ? { duration: Y.fast } : { opacity: { duration: Y.fast }, scale: y.T.spring.smooth },
      onKeyDown: (e3) => {
        "Escape" !== e3.key || e3.defaultPrevented || (e3.preventDefault(), e3.stopPropagation(), c2());
      },
      onPointerDown: (e3) => e3.stopPropagation(),
      children: h2
    });
  }
  function ea({ calendars: e2, value: a2, onChange: t2 }) {
    return (0, n.jsx)("div", {
      className: H().picker,
      role: "radiogroup",
      "aria-label": "Calendar",
      children: e2.map(
        (e3) => (0, n.jsxs)(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": a2 === e3.id,
            className: H().chip,
            style: X(Q(e3)),
            onClick: () => t2(e3.id),
            children: [
              (0, n.jsx)("span", { className: H().dot, "aria-hidden": "true" }),
              e3.name
            ]
          },
          e3.id
        )
      )
    });
  }
  function et({
    fmt: e2,
    start: a2,
    end: t2,
    calendars: l2,
    calendarId: i2,
    onCalendar: s2,
    onSave: o2,
    onCancel: d2
  }) {
    let [c2, u2] = (0, r.useState)(""), h2 = (0, r.useId)();
    return (0, n.jsxs)("form", {
      className: H().popBody,
      onSubmit: (e3) => {
        e3.preventDefault(), o2(c2);
      },
      children: [
        (0, n.jsx)("label", {
          htmlFor: h2,
          className: H().srOnly,
          children: "Event title"
        }),
        (0, n.jsx)("input", {
          id: h2,
          "data-autofocus": true,
          className: H().titleInput,
          value: c2,
          onChange: (e3) => u2(e3.target.value),
          placeholder: "Add title",
          autoComplete: "off",
          enterKeyHint: "done"
        }),
        (0, n.jsxs)("p", {
          className: H().row,
          children: [
            (0, n.jsx)(z.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, n.jsxs)("span", {
              children: [
                (0, n.jsx)("span", { children: e2.shortDate(_(a2)) }),
                " ",
                (0, n.jsxs)("span", {
                  className: H().muted,
                  children: [e2.range(a2, t2), ", ", e2.length(t2 - a2)]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(ea, { calendars: l2, value: i2, onChange: s2 }),
        (0, n.jsxs)("div", {
          className: H().popFoot,
          children: [
            (0, n.jsx)("span", {
              className: H().hint,
              "aria-hidden": "true",
              children: "Press Enter to save"
            }),
            (0, n.jsxs)("div", {
              className: H().footActions,
              children: [
                (0, n.jsx)("button", {
                  type: "button",
                  className: H().ghostButton,
                  onClick: d2,
                  children: "Cancel"
                }),
                (0, n.jsx)("button", {
                  type: "submit",
                  className: H().primary,
                  children: "Save"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let en = Array.from({ length: 96 }, (e2, a2) => 15 * a2);
  function er({
    fmt: e2,
    event: a2,
    start: t2,
    end: l2,
    calendars: i2,
    onTitle: s2,
    onTime: o2,
    onCalendar: d2,
    onDelete: c2,
    onClose: u2
  }) {
    let [h2, m2] = (0, r.useState)(a2.title), g2 = (0, r.useId)(), y2 = _(t2), f2 = k(t2), w2 = l2 - t2, v2 = () => {
      let e3 = h2.trim() || "Untitled event";
      e3 !== a2.title && s2(e3);
    }, x2 = en.includes(f2) ? en : [...en, f2].sort((e3, a3) => e3 - a3), b2 = Array.from(
      { length: Math.max(1, Math.floor((1440 - f2) / 15)) },
      (e3, a3) => t2 + (a3 + 1) * 15
    );
    b2.includes(l2) || (b2.push(l2), b2.sort((e3, a3) => e3 - a3));
    let j2 = a2.allDay ? _(l2 - 1) : y2;
    return (0, n.jsxs)("div", {
      className: H().popBody,
      children: [
        (0, n.jsxs)("div", {
          className: H().popHead,
          children: [
            (0, n.jsx)("span", {
              className: H().bar,
              style: X(Q(i2.find((e3) => e3.id === a2.calendarId))),
              "aria-hidden": "true"
            }),
            (0, n.jsx)("label", {
              htmlFor: `${g2}-title`,
              className: H().srOnly,
              children: "Event title"
            }),
            (0, n.jsx)("input", {
              id: `${g2}-title`,
              "data-autofocus": true,
              className: H().titleInput,
              value: h2,
              onChange: (e3) => m2(e3.target.value),
              onBlur: v2,
              onKeyDown: (e3) => {
                "Enter" === e3.key && (e3.preventDefault(), v2(), u2());
              },
              placeholder: "Untitled event",
              autoComplete: "off"
            }),
            (0, n.jsx)("button", {
              type: "button",
              className: H().iconButton,
              onClick: () => {
                v2(), u2();
              },
              "aria-label": "Close details",
              children: (0, n.jsx)(F.A, {
                size: 18,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        a2.allDay ? (0, n.jsxs)("p", {
          className: H().row,
          children: [
            (0, n.jsx)(z.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, n.jsxs)("span", {
              children: [
                j2 === y2 ? e2.longDate(y2) : `${e2.shortDate(y2)} to ${e2.shortDate(j2)}`,
                " ",
                (0, n.jsx)("span", {
                  className: H().muted,
                  children: "All day"
                })
              ]
            })
          ]
        }) : (0, n.jsxs)("div", {
          className: H().row,
          children: [
            (0, n.jsx)(z.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, n.jsxs)("div", {
              className: H().timeFields,
              children: [
                (0, n.jsx)("label", {
                  className: H().srOnly,
                  htmlFor: `${g2}-day`,
                  children: "Day"
                }),
                (0, n.jsx)("input", {
                  id: `${g2}-day`,
                  type: "date",
                  className: H().field,
                  value: e2.iso(y2),
                  required: true,
                  onChange: (a3) => {
                    let t3 = e2.fromIso(a3.target.value);
                    null !== t3 && o2(1440 * t3 + f2, 1440 * t3 + f2 + w2);
                  }
                }),
                (0, n.jsxs)("div", {
                  className: H().timeRange,
                  children: [
                    (0, n.jsx)(U.l, {
                      id: `${g2}-start`,
                      label: "Starts",
                      className: H().timeSelect,
                      value: String(f2),
                      options: x2.map((a3) => ({
                        value: String(a3),
                        label: e2.time(a3)
                      })),
                      onValueChange: (e3) => {
                        let a3 = 1440 * y2 + Number(e3);
                        o2(a3, a3 + w2);
                      }
                    }),
                    (0, n.jsx)("span", {
                      className: H().muted,
                      "aria-hidden": "true",
                      children: "to"
                    }),
                    (0, n.jsx)(U.l, {
                      id: `${g2}-end`,
                      label: "Ends",
                      className: H().timeSelect,
                      value: String(l2),
                      options: b2.map((a3) => ({
                        value: String(a3),
                        label: e2.time(a3)
                      })),
                      onValueChange: (e3) => o2(t2, Number(e3))
                    })
                  ]
                }),
                (0, n.jsx)("span", {
                  className: H().duration,
                  children: e2.length(w2)
                })
              ]
            })
          ]
        }),
        a2.location && (0, n.jsxs)("p", {
          className: H().row,
          children: [
            (0, n.jsx)(p.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, n.jsx)("span", { children: a2.location })
          ]
        }),
        a2.attendees && a2.attendees.length > 0 && (0, n.jsxs)("div", {
          className: H().row,
          children: [
            (0, n.jsx)(W.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, n.jsxs)("div", {
              className: H().people,
              children: [
                (0, n.jsx)(Z, { people: a2.attendees, size: 24, max: 6 }),
                (0, n.jsx)("span", {
                  className: H().muted,
                  children: 1 === a2.attendees.length ? a2.attendees[0].name : `${a2.attendees[0].name} and ${a2.attendees.length - 1} more`
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(ea, { calendars: i2, value: a2.calendarId, onChange: d2 }),
        (0, n.jsxs)("div", {
          className: H().popFoot,
          children: [
            (0, n.jsxs)("button", {
              type: "button",
              className: H().danger,
              onClick: c2,
              children: [
                (0, n.jsx)(B.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Delete"
              ]
            }),
            (0, n.jsx)("button", {
              type: "button",
              className: H().primary,
              onClick: () => {
                v2(), u2();
              },
              children: "Done"
            })
          ]
        })
      ]
    });
  }
  let el = (0, r.memo)(function({ calendars: e2, hidden: a2, onToggle: t2 }) {
    return (0, n.jsx)("ul", {
      className: H().calendarList,
      "aria-label": "Calendars",
      children: e2.map((e3) => {
        let r2 = !a2.has(e3.id);
        return (0, n.jsx)(
          "li",
          {
            children: (0, n.jsxs)("button", {
              type: "button",
              role: "checkbox",
              "aria-checked": r2,
              className: H().calendarItem,
              style: X(Q(e3)),
              onClick: () => t2(e3.id),
              children: [
                (0, n.jsx)("span", {
                  className: H().check,
                  "aria-hidden": "true",
                  children: r2 && (0, n.jsx)(O.A, { size: 12, strokeWidth: 2.5 })
                }),
                (0, n.jsx)("span", {
                  className: H().calendarName,
                  children: e3.name
                })
              ]
            })
          },
          e3.id
        );
      })
    });
  }), ei = (e2) => {
    let a2 = new Date(864e5 * e2);
    return { year: a2.getUTCFullYear(), month: a2.getUTCMonth() + 1 };
  }, es = (e2, a2) => {
    let { year: t2, month: n2 } = ei(e2);
    return N(t2, n2 + a2, 1);
  }, eo = (0, r.memo)(function({
    fmt: e2,
    month: a2,
    weekStartsOn: t2,
    today: r2,
    range: l2,
    onMonth: i2,
    onPick: s2
  }) {
    let o2 = b(a2, t2), d2 = es(a2, 1), h2 = Math.ceil((d2 - o2) / 7), m2 = new Set(l2);
    return (0, n.jsxs)("div", {
      className: H().mini,
      children: [
        (0, n.jsxs)("div", {
          className: H().miniHead,
          children: [
            (0, n.jsx)("span", {
              className: H().miniTitle,
              children: e2.monthYear(a2)
            }),
            (0, n.jsxs)("span", {
              className: H().miniNav,
              children: [
                (0, n.jsx)("button", {
                  type: "button",
                  className: H().iconButton,
                  "data-small": "",
                  onClick: () => i2(es(a2, -1)),
                  "aria-label": "Previous month",
                  children: (0, n.jsx)(c.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: H().iconButton,
                  "data-small": "",
                  onClick: () => i2(d2),
                  "aria-label": "Next month",
                  children: (0, n.jsx)(u.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: H().miniGrid,
          children: [
            Array.from(
              { length: 7 },
              (a3, t3) => (0, n.jsx)(
                "span",
                {
                  className: H().miniWeekday,
                  "aria-hidden": "true",
                  children: e2.weekdayNarrow(o2 + t3)
                },
                `h${t3}`
              )
            ),
            Array.from({ length: 7 * h2 }, (t3, l3) => {
              let i3 = o2 + l3, c2 = i3 < a2 || i3 >= d2;
              return (0, n.jsx)(
                "button",
                {
                  type: "button",
                  className: H().miniDay,
                  "data-outside": c2 || void 0,
                  "data-range": m2.has(i3) || void 0,
                  "data-range-start": m2.has(i3) && !m2.has(i3 - 1) || void 0,
                  "data-range-end": m2.has(i3) && !m2.has(i3 + 1) || void 0,
                  "data-today": i3 === r2 || void 0,
                  "aria-current": i3 === r2 ? "date" : void 0,
                  "aria-label": e2.longDate(i3),
                  onClick: () => s2(i3),
                  children: (0, n.jsx)("span", { children: e2.date(i3) })
                },
                i3
              );
            })
          ]
        })
      ]
    });
  });
  function ed({ message: e2, onUndo: a2, onDismiss: t2, reduced: l2 }) {
    return (0, r.useEffect)(() => {
      let e3 = setTimeout(t2, 6e3);
      return () => clearTimeout(e3);
    }, [t2]), (0, n.jsxs)(d.PY1.div, {
      className: H().toast,
      role: "status",
      initial: l2 ? { opacity: 0 } : { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: l2 ? { opacity: 0 } : { opacity: 0, y: 8, transition: { duration: Y.fast, ease: G } },
      transition: l2 ? { duration: Y.fast } : y.T.spring.smooth,
      children: [
        (0, n.jsx)("span", { className: H().toastText, children: e2 }),
        a2 && (0, n.jsx)("button", {
          type: "button",
          className: H().toastAction,
          onClick: a2,
          children: "Undo"
        }),
        (0, n.jsx)("button", {
          type: "button",
          className: H().iconButton,
          "data-small": "",
          onClick: t2,
          "aria-label": "Dismiss",
          children: (0, n.jsx)(F.A, {
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        })
      ]
    });
  }
  let { duration: ec, ease: eu } = y.T, eh = [...eu.enter], em = (e2, a2 = 0) => {
    let t2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: t2 * t2,
      damping: 2 * (1 - a2) * t2,
      mass: 1
    };
  }, ep = em(0.46), eg = em(0.38), ey = em(0.16), ef = 52 / 60, ew = (e2, a2, t2) => Math.min(t2, Math.max(a2, e2)), ev = (e2) => {
    let a2, t2 = setTimeout(
      () => {
        e2(), a2 = setInterval(e2, 6e4);
      },
      6e4 - Date.now() % 6e4 + 30
    );
    return () => {
      clearTimeout(t2), clearInterval(a2);
    };
  }, e_ = () => Math.floor(Date.now() / 6e4), ek = () => null, ex = (e2, a2) => "compact" === a2 ? "week" === e2 || "workweek" === e2 ? "3day" : e2 : "3day" === e2 || "agenda" === e2 ? "week" : e2, eb = (e2) => "day" === e2 ? 1 : "3day" === e2 ? 3 : 7;
  function ej(e2, a2, t2) {
    if ("day" === e2) return [a2];
    if ("3day" === e2) return [a2, a2 + 1, a2 + 2];
    let n2 = b(a2, t2), r2 = Array.from({ length: 7 }, (e3, a3) => n2 + a3);
    return "workweek" === e2 ? r2.filter((e3) => !j(e3)) : r2;
  }
  let eN = [
    { value: "week", label: "Week" },
    { value: "workweek", label: "Work week" },
    { value: "day", label: "Day" }
  ], eD = [
    { value: "3day", label: "3 days" },
    { value: "day", label: "Day" },
    { value: "agenda", label: "Agenda" }
  ];
  function eM({
    events: e2,
    defaultEvents: a2,
    onEventsChange: t2,
    onCreate: d2,
    onUpdate: p2,
    onDelete: g2,
    calendars: y2,
    defaultDate: f2,
    defaultView: x2 = "week",
    onViewChange: b2,
    weekStartsOn: D2 = 1,
    startHour: T2 = 0,
    endHour: $2 = 24,
    timeZone: A2,
    locale: S2 = "en-US",
    className: I2
  }) {
    let L2 = void 0 === e2 && void 0 === a2, P2 = !!(0, l.I)(), E2 = (0, r.useMemo)(
      () => (function(e10 = "en-US") {
        let a10 = (a11) => {
          try {
            return new Intl.DateTimeFormat(e10, { ...a11, timeZone: "UTC" });
          } catch {
            return new Intl.DateTimeFormat("en-US", {
              ...a11,
              timeZone: "UTC"
            });
          }
        }, t3 = a10({ hour: "numeric", minute: "2-digit" }), n2 = a10({ hour: "numeric" }), r2 = a10({ weekday: "short" }), l2 = a10({ weekday: "narrow" }), i2 = a10({ weekday: "long" }), s2 = a10({ day: "numeric" }), o2 = a10({ month: "short", day: "numeric" }), d3 = a10({ weekday: "long", month: "long", day: "numeric" }), c2 = a10({ weekday: "short", month: "short", day: "numeric" }), u2 = a10({
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric"
        }), h2 = a10({ month: "short", day: "numeric", year: "numeric" }), m2 = a10({ month: "long", year: "numeric" }), p3 = e10.toLowerCase().startsWith("en"), g3 = (e11) => new Date(6e4 * e11), y3 = (e11) => new Date(864e5 * e11), f3 = (e11, a11) => {
          let n3 = t3.formatToParts(g3(e11)), r3 = n3.some((e12) => "dayPeriod" === e12.type), l3 = k(e11) % 60 == 0, i3 = "";
          for (let e12 = 0; e12 < n3.length; e12++) {
            let t4 = n3[e12], s3 = n3[e12 + 1];
            r3 && l3 && ("minute" === t4.type || "literal" === t4.type && s3?.type === "minute") || (a11 || "dayPeriod" !== t4.type && ("literal" !== t4.type || s3?.type !== "dayPeriod")) && (i3 += t4.value);
          }
          return {
            text: i3.replace(/\u202f/g, " ").trim(),
            twelve: r3,
            period: n3.find((e12) => "dayPeriod" === e12.type)?.value
          };
        };
        return {
          time: (e11) => f3(e11, true).text,
          short: (e11) => f3(e11, false).text,
          range: (e11, a11) => {
            let t4 = f3(e11, true), n3 = f3(a11, true), r3 = t4.twelve && t4.period === n3.period && _(e11) === _(a11);
            return `${r3 ? f3(e11, false).text : t4.text} \u2013 ${n3.text}`;
          },
          spoken: (e11, a11) => `${t3.format(g3(e11))} to ${t3.format(g3(a11))}`.replace(
            /\u202f/g,
            " "
          ),
          hour: (e11) => n2.format(g3(e11)).replace(/\u202f/g, " "),
          length: (e11) => {
            let a11 = Math.floor(e11 / 60), t4 = e11 % 60;
            return a11 && t4 ? `${a11} hr ${t4} min` : a11 ? `${a11} hr` : `${t4} min`;
          },
          dayRange: (e11, a11) => e11 === a11 ? u2.format(y3(e11)) : h2.formatRangeToParts ? h2.formatRangeToParts(y3(e11), y3(a11)).map(
            (e12) => p3 && "shared" === e12.source && "literal" === e12.type && /[\u2013\u2014-]/.test(e12.value) ? " to " : e12.value
          ).join("").replace(/\s+/g, " ").trim() : `${h2.format(y3(e11))} to ${h2.format(y3(a11))}`,
          weekdayShort: (e11) => r2.format(y3(e11)),
          weekdayNarrow: (e11) => l2.format(y3(e11)),
          weekdayLong: (e11) => i2.format(y3(e11)),
          date: (e11) => s2.format(y3(e11)),
          monthDay: (e11) => o2.format(y3(e11)),
          longDate: (e11) => d3.format(y3(e11)),
          shortDate: (e11) => c2.format(y3(e11)),
          monthYear: (e11) => m2.format(y3(e11)),
          iso: (e11) => y3(e11).toISOString().slice(0, 10),
          fromIso: (e11) => {
            let [a11, t4, n3] = e11.split("-").map(Number);
            return a11 && t4 && n3 ? N(a11, t4, n3) : null;
          }
        };
      })(S2),
      [S2]
    ), z2 = y2 ?? M, F2 = ew(Math.floor(T2), 0, 23), W2 = ew(Math.ceil($2), F2 + 1, 24), B2 = 60 * F2, O2 = 60 * W2, U2 = (O2 - B2) * ef, V2 = (0, r.useId)(), [Y2, q2] = (0, r.useState)(() => a2 ?? R(A2)), G2 = e2 ?? Y2, [K2, J2] = (0, r.useState)(
      () => new Set(z2.filter((e10) => e10.hidden).map((e10) => e10.id))
    ), Z2 = (0, r.useSyncExternalStore)(ev, e_, ek), ea2 = null === Z2 ? null : w(new Date(6e4 * Z2), A2), en2 = null === ea2 ? null : _(ea2), [es2, eu2] = (0, r.useState)(""), [em2, eg2] = (0, r.useState)(
      () => f2 ? _(w(f2, A2)) : L2 ? _(w(C, A2)) : null
    ), ey2 = em2 ?? en2 ?? _(w(C, A2)), [e$2, eI2] = (0, r.useState)(x2), [eP2, eE2] = (0, r.useState)("regular"), ez = ex(e$2, eP2), eF = (0, r.useMemo)(() => ej(ez, ey2, D2), [ez, ey2, D2]), eW = `${ez}:${eF[0]}:${eF.length}`, [eB, eO] = (0, r.useState)(null), eU = null !== eB && eF.includes(eB) ? eB : null !== en2 && eF.includes(en2) ? en2 : eF[0], [eV, eH] = (0, r.useState)(null), [eY, eq] = (0, r.useState)([]), [eG, eK] = (0, r.useState)([]), eJ = (0, r.useMemo)(() => {
      let e10 = eV?.key === eW ? eV : null;
      return {
        key: eW,
        view: ez,
        days: eF,
        x: (0, i.OQ)(e10?.x ?? 0),
        opacity: (0, i.OQ)(e10?.opacity ?? 1)
      };
    }, [eW, ez, eF, eV]), [eQ, eX] = (0, r.useState)(null), [eZ, e0] = (0, r.useState)(null), [e1, e4] = (0, r.useState)(null), [e22, e6] = (0, r.useState)(null), [e5, e3] = (0, r.useState)(null), [e7, e8] = (0, r.useState)(""), [e9, ae] = (0, r.useState)(false), [aa, at] = (0, r.useState)(null), an = aa ?? ((e10) => {
      let { year: a10, month: t3 } = ei(e10);
      return N(a10, t3, 1);
    })(eU), ar = (0, r.useRef)(null), al = (0, r.useRef)(null), ai = (0, r.useRef)(null), as = (0, r.useRef)(null), ao = (0, r.useRef)(null), ad = (0, r.useRef)(null), ac = (0, r.useRef)(null), au = (0, r.useRef)(null), ah = (0, r.useRef)(null), am = (0, r.useRef)(/* @__PURE__ */ new Map()), ap = (0, r.useRef)(null), ag = (0, r.useRef)(G2), ay = (0, r.useRef)(0), af = (0, r.useRef)(null), aw = (0, r.useRef)(null), av = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      ag.current = G2;
    }), (0, r.useLayoutEffect)(() => {
      let e10 = ar.current;
      if (!e10 || "u" < typeof ResizeObserver) return;
      let a10 = new ResizeObserver(() => {
        let a11;
        eE2(
          (a11 = e10.clientWidth) < 640 ? "compact" : a11 >= 1100 ? "wide" : "regular"
        ), eu2(
          (function(e11, a12 = "en-US") {
            try {
              let t3 = new Intl.DateTimeFormat(a12, {
                timeZone: e11,
                timeZoneName: "short"
              }).formatToParts(/* @__PURE__ */ new Date());
              return t3.find((e12) => "timeZoneName" === e12.type)?.value ?? "";
            } catch {
              return "";
            }
          })(A2, S2)
        );
      });
      return a10.observe(e10), () => a10.disconnect();
    }, [S2, A2]), (0, r.useEffect)(() => {
      let e10 = [];
      return 0 !== eJ.x.get() && e10.push((0, s.i)(eJ.x, 0, ep)), 1 !== eJ.opacity.get() && e10.push(
        (0, s.i)(eJ.opacity, 1, { duration: ec.standard, ease: eh })
      ), () => e10.forEach((e11) => e11.stop());
    }, [eJ]);
    let a_ = (0, r.useMemo)(() => new Map(z2.map((e10) => [e10.id, e10])), [z2]), ak = (0, r.useMemo)(
      () => G2.flatMap((e10) => {
        if (K2.has(e10.calendarId)) return [];
        let a10 = a_.get(e10.calendarId), t3 = w(e10.start, A2), n2 = w(e10.end, A2);
        return n2 = e10.allDay ? Math.max((t3 = 1440 * _(t3)) + 1440, 1440 * Math.ceil(n2 / 1440)) : Math.max(n2, t3 + 15), [
          {
            id: e10.id,
            event: e10,
            start: t3,
            end: n2,
            allDay: !!e10.allDay,
            color: Q(a10),
            calendarName: a10?.name ?? "Calendar"
          }
        ];
      }),
      [G2, K2, a_, A2]
    ), ax = (0, r.useMemo)(() => new Map(ak.map((e10) => [e10.id, e10])), [ak]), ab = z2.find((e10) => !K2.has(e10.id))?.id ?? z2[0]?.id ?? "default", aj = E2.dayRange(eF[0], eF[eF.length - 1]), aN = "agenda" === ez;
    (0, r.useLayoutEffect)(() => {
      let e10 = al.current;
      if (!e10 || aN) return;
      let a10 = av.current !== e10;
      (a10 || !e10.dataset.now) && (av.current = e10, null !== ea2 && eF.includes(_(ea2)) ? (e10.dataset.now = "1", e10.scrollTop = Math.max(
        0,
        (k(ea2) - B2) * ef - 0.3 * e10.clientHeight
      )) : a10 && (e10.scrollTop = Math.max(0, (480 - B2) * ef - 8)));
    }, [ea2, eF, B2, aN]), (0, r.useEffect)(() => {
      let e10 = af.current;
      null !== e10 && (af.current = null, as.current?.querySelector(`[data-current] [data-day-cell="${e10}"]`)?.focus({ preventScroll: true }));
    }, [eU, eJ]);
    let aD = (0, r.useCallback)(
      () => (as.current ?? ao.current)?.clientWidth ?? 600,
      []
    ), aM = (0, r.useCallback)(
      (e10, a10) => (am.current.set(e10, a10), () => {
        am.current.get(e10) === a10 && am.current.delete(e10);
      }),
      []
    ), aT = (e10) => {
      let a10, t3 = ex(e10.view ?? e$2, eP2), n2 = e10.anchor ?? ey2, r2 = ej(t3, n2, D2), l2 = `${t3}:${r2[0]}:${r2.length}`;
      eg2(n2), at(null), void 0 !== e10.cursor && eO(e10.cursor), e10.view && e10.view !== e$2 && (eI2(e10.view), b2?.(t3));
      let i2 = e10.offset ?? 0;
      if (l2 === eJ.key) {
        i2 && (0, s.i)(eJ.x, 0, ep);
        return;
      }
      e4(null), e0(null), eX(null), eK([]);
      let o2 = e10.dir ?? 0, d3 = aD(), c2 = "agenda" === t3 == ("agenda" === eJ.view);
      c2 ? P2 || !o2 ? (eH({ key: l2, x: 0, opacity: 0 }), a10 = (0, s.i)(eJ.opacity, 0, { duration: ec.fast })) : (eH({ key: l2, x: o2 * d3 + i2, opacity: 1 }), a10 = (0, s.i)(eJ.x, -o2 * d3, ep)) : (eH({ key: l2, x: 0, opacity: 0 }), a10 = Promise.resolve()), c2 ? (eq((e11) => [...e11.filter((e12) => e12.key !== l2), eJ]), a10.then(() => eq((e11) => e11.filter((e12) => e12 !== eJ)))) : eq([]);
      let u2 = "day" === t3 ? E2.longDate(r2[0]) : E2.dayRange(r2[0], r2[r2.length - 1]);
      e8(
        t3 === ez ? u2 : `${"agenda" === t3 ? "Agenda" : "day" === t3 ? "Day view" : "3day" === t3 ? "Three days" : "workweek" === t3 ? "Work week" : "Week"}, ${u2}`
      );
    }, aC = (e10, a10 = 0) => {
      let t3 = eb(ez);
      aT({
        anchor: ey2 + e10 * t3,
        cursor: null === eB ? null : eU + e10 * t3,
        dir: e10,
        offset: a10
      });
    }, a$ = () => {
      null !== en2 && aT({ anchor: en2, cursor: en2, dir: Math.sign(en2 - eF[0]) });
    }, aA = (e10) => aT({
      anchor: e10,
      cursor: e10,
      dir: Math.sign(e10 - eF[0]) || +(e10 > eF[eF.length - 1])
    }), aS = (a10) => {
      ag.current = a10, void 0 === e2 && q2(a10), t2?.(a10);
    }, aI = (e10, a10) => e3({ id: ++ay.current, message: e10, undo: a10 }), aL = (e10, a10, t3) => {
      let n2 = ag.current, r2 = n2.find((a11) => a11.id === e10);
      if (!r2) return null;
      let l2 = { ...r2, ...a10 };
      return aS(n2.map((a11) => a11.id === e10 ? l2 : a11)), p2?.(l2, r2), e8(t3), { previous: r2, next: l2 };
    }, aP = (e10, a10, t3) => {
      let n2 = aL(e10, a10, t3);
      n2 && aI(t3, () => {
        aS(ag.current.map((a11) => a11.id === e10 ? n2.previous : a11)), p2?.(n2.previous, n2.next), e8(`Undone: ${t3}`), e3(null);
      });
    }, aR = (e10) => {
      let a10 = ag.current, t3 = a10.findIndex((a11) => a11.id === e10);
      if (t3 < 0) return;
      let n2 = a10[t3];
      aS(a10.filter((a11) => a11.id !== e10)), g2?.(n2), e6(null), e4(null), requestAnimationFrame(
        () => as.current?.querySelector(
          `[data-current] [data-day-cell="${_(w(n2.start, A2))}"]`
        )?.focus({ preventScroll: true })
      );
      let r2 = `Deleted ${n2.title}`;
      e8(r2), aI(r2, () => {
        let e11 = [...ag.current];
        e11.splice(Math.min(t3, e11.length), 0, n2), aS(e11), d2?.(n2), e6(n2.id), e8(`Restored ${n2.title}`), e3(null);
      });
    }, aE = (e10, a10) => ({ start: v(e10, A2), end: v(a10, A2) }), az = (e10, a10) => {
      eX(null), e6(null), e0({ start: e10, end: a10, calendarId: ab }), e4({ kind: "create" });
      let t3 = al.current;
      if (t3 && !aN) {
        let n2 = (k(e10) - B2) * ef, r2 = n2 + (a10 - e10) * ef, l2 = ai.current?.offsetHeight ?? 0;
        n2 < t3.scrollTop + 8 ? t3.scrollTop = n2 - 24 : r2 > t3.scrollTop + t3.clientHeight - l2 - 8 && (t3.scrollTop = r2 - t3.clientHeight + l2 + 48);
      }
    }, aF = () => {
      aN && aT({ view: "day", anchor: eU, cursor: eU, dir: 0 });
      let e10 = ((e11) => {
        let a10 = ew(
          en2 === e11 && null !== ea2 ? 30 * Math.ceil(k(ea2) / 30) : 540,
          B2,
          O2 - 60
        ), t3 = ak.filter(
          (a11) => !a11.allDay && a11.start < (e11 + 1) * 1440 && a11.end > 1440 * e11
        );
        for (; a10 + 60 <= O2 && t3.some((t4) => t4.start < 1440 * e11 + a10 + 60 && t4.end > 1440 * e11 + a10); )
          a10 += 30;
        return a10 + 60 > O2 && (a10 = ew(540, B2, O2 - 60)), 1440 * e11 + a10;
      })(eU);
      az(e10, e10 + 60);
    }, aW = (e10, a10) => {
      aw.current = a10 ?? null, e0(null), e6(e10), e4({ kind: "details", id: e10 });
    }, aB = () => {
      e4(null), e1?.kind === "create" ? (e0(null), as.current?.querySelector(`[data-current] [data-day-cell="${eU}"]`)?.focus({ preventScroll: true })) : e1?.kind === "details" ? am.current.get(e1.id)?.focus({ preventScroll: true }) : e1?.kind === "calendars" && au.current?.focus({ preventScroll: true });
    }, aO = (e10, a10) => {
      let t3 = as.current.getBoundingClientRect(), n2 = ew(
        Math.floor((e10 - t3.left) / (t3.width / eF.length)),
        0,
        eF.length - 1
      );
      return { index: n2, day: eF[n2], minute: B2 + (a10 - t3.top) / ef };
    }, aU = (e10) => {
      let a10;
      if (!as.current) return;
      let { day: t3, minute: n2 } = aO(e10.x, e10.y), r2 = ew(15 * Math.round(n2 / 15), B2, O2);
      if ("create" === e10.intent) {
        let t4 = 1440 * e10.anchorDay;
        a10 = r2 > e10.anchorMinute ? {
          kind: "create",
          id: null,
          start: t4 + e10.anchorMinute,
          end: t4 + Math.max(r2, e10.anchorMinute + 15)
        } : {
          kind: "create",
          id: null,
          start: t4 + r2,
          end: t4 + e10.anchorMinute + 15
        };
      } else if ("move" === e10.intent) {
        let r3, l2 = e10.origin.end - e10.origin.start;
        r3 = l2 <= O2 - B2 ? 1440 * t3 + ew(15 * Math.round((n2 - e10.grab) / 15), B2, O2 - l2) : 15 * Math.round((1440 * t3 + n2 - e10.grab) / 15), a10 = { kind: "move", id: e10.id, start: r3, end: r3 + l2 };
      } else {
        let t4 = _(e10.origin.end - 1);
        a10 = {
          kind: "resize",
          id: e10.id,
          start: e10.origin.start,
          end: ew(1440 * t4 + r2, e10.origin.start + 15, 1440 * t4 + O2)
        };
      }
      eX(
        (e11) => e11 && e11.kind === a10.kind && e11.id === a10.id && e11.start === a10.start && e11.end === a10.end ? e11 : a10
      );
    }, aV = (0, r.useRef)(aU);
    (0, r.useLayoutEffect)(() => {
      aV.current = aU;
    });
    let aH = (e10) => {
      e10.state = "active", e10.timer && (clearTimeout(e10.timer), e10.timer = null), e10.touch && "u" > typeof navigator && "vibrate" in navigator && navigator.vibrate?.(10), ad.current && (ad.current.style.opacity = "0"), "create" === e10.intent ? eX({
        kind: "create",
        id: null,
        start: 1440 * e10.anchorDay + e10.anchorMinute,
        end: 1440 * e10.anchorDay + e10.anchorMinute + 15
      }) : (e6(e10.id), eX({
        kind: "resize" === e10.intent ? "resize" : "move",
        id: e10.id,
        ...e10.origin
      })), aU(e10);
    }, aY = (e10) => {
      let a10 = ap.current;
      if (!a10) {
        aN || ((e11) => {
          let a11 = ad.current;
          if (!a11 || !as.current) return;
          if ("mouse" !== e11.pointerType || e1 || e11.target.closest("[data-event-id]")) {
            a11.style.opacity = "0";
            return;
          }
          let { index: t4, day: n3, minute: r3 } = aO(e11.clientX, e11.clientY), l2 = ew(30 * Math.floor(r3 / 30), B2, O2 - 30);
          a11.style.opacity = "1", a11.style.width = `${100 / eF.length}%`, a11.style.transform = `translate(${100 * t4}%, ${(l2 - B2) * ef}px)`;
          let i2 = a11.firstElementChild;
          i2 && (i2.textContent = E2.time(1440 * n3 + l2));
        })(e10);
        return;
      }
      if (e10.pointerId !== a10.pointerId) return;
      let t3 = e10.timeStamp - a10.t;
      t3 > 0 && (a10.vx = 0.4 * a10.vx + (e10.clientX - a10.x) / t3 * 0.6), a10.x = e10.clientX, a10.y = e10.clientY, a10.t = e10.timeStamp;
      let n2 = a10.x - a10.x0, r2 = a10.y - a10.y0;
      if ("pending" === a10.state)
        if (a10.touch || "swipe" === a10.intent) {
          if (8 > Math.hypot(n2, r2)) return;
          if (a10.timer && (clearTimeout(a10.timer), a10.timer = null), Math.abs(n2) > 1.2 * Math.abs(r2)) {
            a10.state = "swipe", e10.currentTarget.hasPointerCapture(e10.pointerId) || e10.currentTarget.setPointerCapture(e10.pointerId), eJ.x.stop(), a10.base = eJ.x.get(), a10.width = aD();
            let t4 = eb(ez);
            a10.peeks = [-1, 1].map((e11) => {
              let n3 = ej(ez, ey2 + e11 * t4, D2);
              return {
                key: `${ez}:${n3[0]}:${n3.length}`,
                view: ez,
                days: n3,
                x: (0, i.OQ)(a10.base + e11 * a10.width),
                opacity: (0, i.OQ)(1)
              };
            }), eK(a10.peeks);
          } else {
            ap.current = null;
            return;
          }
        } else {
          if (4 > Math.hypot(n2, r2)) return;
          aH(a10);
          return;
        }
      if ("swipe" === a10.state) {
        let e11 = (a10.base ?? 0) + n2;
        eJ.x.set(e11), a10.peeks?.forEach(
          (t4, n3) => t4.x.set(e11 + (n3 ? 1 : -1) * (a10.width ?? 0))
        );
        return;
      }
      aU(a10);
    }, aq = (e10, a10) => {
      let t3 = ap.current;
      if (!t3 || e10.pointerId !== t3.pointerId) return;
      if (t3.timer && clearTimeout(t3.timer), ap.current = null, "swipe" === t3.state) {
        let e11 = t3.x - t3.x0, n3 = t3.width ?? aD(), r3 = (t3.base ?? 0) + e11;
        if (!a10 && (Math.abs(r3) > 0.2 * n3 || Math.abs(t3.vx) > 0.4) && Math.sign(t3.vx || e11) === Math.sign(e11))
          aC(e11 < 0 ? 1 : -1, r3);
        else {
          (0, s.i)(eJ.x, 0, ep);
          let e12 = t3.peeks ?? [];
          e12.forEach((e13, a11) => (0, s.i)(e13.x, (a11 ? 1 : -1) * n3, ep)), setTimeout(() => eK((a11) => a11 === e12 ? [] : a11), 600);
        }
        return;
      }
      if ("swipe" === t3.intent) return;
      if (a10) return void eX(null);
      if ("pending" === t3.state) {
        if (t3.id) aW(t3.id);
        else {
          let e11 = ew(30 * Math.floor(t3.anchorMinute / 30), B2, O2 - 60);
          az(1440 * t3.anchorDay + e11, 1440 * t3.anchorDay + e11 + 60);
        }
        return;
      }
      if (eX(null), !eQ) return;
      if ("create" === eQ.kind) return void az(eQ.start, eQ.end);
      let n2 = eQ.id ? ax.get(eQ.id) : void 0;
      if (!n2 || n2.start === eQ.start && n2.end === eQ.end) return;
      let r2 = "move" === eQ.kind ? `Moved ${n2.event.title} to ${E2.shortDate(_(eQ.start))}, ${E2.time(eQ.start)}` : `${n2.event.title} now ${E2.range(eQ.start, eQ.end)}`;
      aP(n2.id, aE(eQ.start, eQ.end), r2);
    };
    (0, r.useEffect)(() => {
      let e10 = al.current ?? ao.current;
      if (!e10) return;
      let a10 = (e11) => {
        ap.current && "pending" !== ap.current.state && e11.preventDefault();
      };
      return e10.addEventListener("touchmove", a10, { passive: false }), () => e10.removeEventListener("touchmove", a10);
    }, [aN]);
    let aG = (0, r.useRef)(aC);
    (0, r.useLayoutEffect)(() => {
      aG.current = aC;
    }), (0, r.useEffect)(() => {
      let e10 = al.current ?? ao.current;
      if (!e10) return;
      let a10 = 0, t3 = false, n2, r2 = (e11) => {
        Math.abs(e11.deltaX) <= Math.abs(e11.deltaY) || ap.current || (e11.preventDefault(), clearTimeout(n2), n2 = setTimeout(() => {
          a10 = 0, t3 = false;
        }, 240), !t3 && Math.abs(a10 += e11.deltaX) > 80 && (t3 = true, aG.current(a10 > 0 ? 1 : -1), a10 = 0));
      };
      return e10.addEventListener("wheel", r2, { passive: false }), () => {
        e10.removeEventListener("wheel", r2), clearTimeout(n2);
      };
    }, [aN]);
    let aK = null !== eQ;
    (0, r.useEffect)(() => {
      if (!aK) return;
      let e10 = al.current;
      if (!e10) return;
      let a10 = 0, t3 = () => {
        let n3 = ap.current;
        if (n3?.state === "active") {
          let a11 = e10.getBoundingClientRect(), t4 = a11.top + (ai.current?.offsetHeight ?? 0) + 44, r2 = a11.bottom - 44, l2 = n3.y < t4 ? -Math.min(18, (t4 - n3.y) / 2.5 + 2) : n3.y > r2 ? Math.min(18, (n3.y - r2) / 2.5 + 2) : 0;
          if (l2) {
            let a12 = e10.scrollTop;
            e10.scrollTop += l2, e10.scrollTop !== a12 && aV.current(n3);
          }
        }
        a10 = requestAnimationFrame(t3);
      };
      a10 = requestAnimationFrame(t3);
      let n2 = (e11) => {
        "Escape" === e11.key && ap.current?.state === "active" && (e11.preventDefault(), e11.stopPropagation(), ap.current = null, eX(null), e8("Drag cancelled"));
      };
      return window.addEventListener("keydown", n2, true), () => {
        cancelAnimationFrame(a10), window.removeEventListener("keydown", n2, true);
      };
    }, [aK]);
    let aJ = (e10, a10) => {
      let t3 = ax.get(e10);
      if (!t3 || !a10.key.startsWith("Arrow")) return;
      if (!a10.altKey) {
        if ("ArrowUp" !== a10.key && "ArrowDown" !== a10.key) return;
        a10.preventDefault(), a10.stopPropagation();
        let e11 = Array.from(
          a10.currentTarget.closest("[data-pane]")?.querySelectorAll("[data-event-id]") ?? []
        );
        e11[e11.indexOf(a10.currentTarget) + ("ArrowDown" === a10.key ? 1 : -1)]?.focus();
        return;
      }
      if (a10.preventDefault(), a10.stopPropagation(), t3.allDay) return;
      let n2 = t3.end - t3.start, { start: r2, end: l2 } = t3;
      if ("ArrowLeft" === a10.key || "ArrowRight" === a10.key) {
        let e11 = "ArrowLeft" === a10.key ? -1 : 1, t4 = _(r2) + e11;
        if ("workweek" === ez) for (; j(t4); ) t4 += e11;
        if (!eF.includes(t4)) return;
        l2 = (r2 = 1440 * t4 + k(r2)) + n2;
      } else {
        let e11 = "ArrowUp" === a10.key ? -15 : 15, t4 = 1440 * _(r2);
        l2 = a10.shiftKey ? ew(l2 + e11, r2 + 15, 1440 * _(l2 - 1) + O2) : (r2 = ew(r2 + e11, t4 + B2, t4 + O2 - n2)) + n2;
      }
      (r2 !== t3.start || l2 !== t3.end) && (aL(
        e10,
        aE(r2, l2),
        `${t3.event.title}, ${E2.shortDate(_(r2))}, ${E2.spoken(r2, l2)}`
      ), e6(e10));
    }, aQ = (e10, a10) => {
      0 === a10.detail && aW(e10);
    }, aX = () => ae(true), aZ = (0, r.useCallback)(() => e3(null), []), a0 = (e10) => {
      let a10 = a_.get(e10);
      J2((a11) => {
        let t3 = new Set(a11);
        return t3.has(e10) ? t3.delete(e10) : t3.add(e10), t3;
      }), a10 && e8(`${a10.name} ${K2.has(e10) ? "shown" : "hidden"}`);
    }, a1 = (e10) => aT({
      view: e10,
      cursor: eU,
      anchor: "day" === e10 || "3day" === e10 ? eU : ey2,
      dir: 0
    }), a4 = (0, r.useRef)({
      onEventKey: aJ,
      onEventClick: aQ,
      goDay: aA,
      openDetails: aW,
      onMore: aX,
      changeView: a1,
      toggleCalendar: a0
    });
    (0, r.useLayoutEffect)(() => {
      a4.current = {
        onEventKey: aJ,
        onEventClick: aQ,
        goDay: aA,
        openDetails: aW,
        onMore: aX,
        changeView: a1,
        toggleCalendar: a0
      };
    });
    let a22 = (0, r.useCallback)((e10, a10) => a4.current.onEventKey(e10, a10), []), a6 = (0, r.useCallback)((e10, a10) => a4.current.onEventClick(e10, a10), []), a5 = (0, r.useCallback)((e10) => a4.current.goDay(e10), []), a3 = (0, r.useCallback)((e10, a10) => a4.current.openDetails(e10, a10), []), a7 = (0, r.useCallback)(() => a4.current.onMore(), []), a8 = (0, r.useCallback)((e10) => a4.current.changeView(e10), []), a9 = (0, r.useCallback)((e10) => a4.current.toggleCalendar(e10), []), te = (0, r.useRef)(aB);
    (0, r.useLayoutEffect)(() => {
      te.current = aB;
    });
    let ta = (0, r.useCallback)(() => te.current(), []), tt = (0, r.useMemo)(() => eC(ak, eF).count, [ak, eF]), tn = tt > 3, tr = 0 === tt ? 1 : tn && !e9 ? 3 : tt, tl = e1?.kind === "details" ? ax.get(e1.id) ?? null : null, ti = Q(a_.get(eZ?.calendarId ?? ab)), ts = (0, r.useCallback)(
      () => e1?.kind !== "details" ? null : aw.current?.isConnected ? aw.current : am.current.get(e1.id) ?? null,
      [e1]
    ), to = (0, r.useCallback)(() => ac.current, []), td = (0, r.useCallback)(() => au.current, []), tc = [
      ...eY.filter(
        (e10) => "agenda" === e10.view === aN && !eG.some((a10) => a10.key === e10.key)
      ),
      ...eG.filter((e10) => e10.key !== eJ.key),
      eJ
    ], tu = null === ea2 ? -1 : eF.indexOf(_(ea2)), th = (0, r.useMemo)(
      () => Array.from({ length: W2 - F2 }, (e10, a10) => (F2 + a10) * 60),
      [F2, W2]
    ), tm = "compact" === eP2 ? eD : eN;
    return (0, n.jsxs)("div", {
      ref: ar,
      className: [H().root, I2].filter(Boolean).join(" "),
      "data-size": eP2,
      "data-dragging": aK || void 0,
      onKeyDown: (e10) => {
        let a10 = e10.target;
        if (a10.closest(
          "input, textarea, [contenteditable='true'], [role='dialog'], [role='listbox']"
        ))
          return;
        if (e10.metaKey || e10.ctrlKey) {
          "z" === e10.key.toLowerCase() && e5?.undo && (e10.preventDefault(), e5.undo());
          return;
        }
        if (e10.altKey) return;
        let t3 = 1 === e10.key.length ? e10.key.toLowerCase() : e10.key;
        if ("Escape" === t3)
          if (e1) aB();
          else {
            if (!e22) return;
            e6(null), e8("Selection cleared");
          }
        else if ("t" === t3) a$();
        else if ("n" === t3) aF();
        else if ("d" === t3) aT({ view: "day", anchor: eU, cursor: eU, dir: 0 });
        else if ("w" === t3) aT({ view: "week", cursor: eU, dir: 0 });
        else if ("Delete" === t3 || "Backspace" === t3) {
          let e11 = a10.closest("[data-event-id]")?.dataset.eventId ?? e22;
          if (!e11) return;
          aR(e11);
        } else if ("ArrowLeft" !== t3 && "ArrowRight" !== t3 || aN || a10.closest("[data-toolbar]"))
          if ("Enter" !== t3 || !a10.dataset.dayCell) return;
          else aF();
        else {
          var n2 = "ArrowLeft" === t3 ? -1 : 1;
          let e11 = eU + n2;
          if ("workweek" === ez) for (; j(e11); ) e11 += n2;
          (af.current = e11, eF.includes(e11)) ? eO(e11) : aT({
            anchor: "3day" === ez && n2 < 0 ? e11 - 2 : e11,
            cursor: e11,
            dir: Math.sign(n2)
          });
        }
        e10.preventDefault();
      },
      children: [
        (0, n.jsxs)("header", {
          className: H().toolbar,
          "data-toolbar": "",
          children: [
            (0, n.jsx)("button", {
              type: "button",
              className: `${H().button} ${H().today}`,
              onClick: a$,
              disabled: null === en2 || eF.includes(en2),
              "aria-keyshortcuts": "T",
              children: "Today"
            }),
            (0, n.jsxs)("div", {
              className: H().stepper,
              children: [
                (0, n.jsx)("button", {
                  type: "button",
                  className: H().iconButton,
                  onClick: () => aC(-1),
                  "aria-label": "day" === ez ? "Previous day" : "3day" === ez ? "Previous three days" : "Previous week",
                  children: (0, n.jsx)(c.A, {
                    size: 18,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: H().iconButton,
                  onClick: () => aC(1),
                  "aria-label": "day" === ez ? "Next day" : "3day" === ez ? "Next three days" : "Next week",
                  children: (0, n.jsx)(u.A, {
                    size: 18,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, n.jsx)("h2", {
              className: H().title,
              children: "day" === ez ? E2.longDate(eF[0]) : aj
            }),
            (0, n.jsx)("div", {
              className: H().views,
              children: (0, n.jsx)(eT, { views: tm, value: ez, onChange: a8 })
            }),
            "wide" !== eP2 && (0, n.jsxs)("button", {
              ref: au,
              type: "button",
              className: H().button,
              "data-open": e1?.kind === "calendars" || void 0,
              "aria-haspopup": "dialog",
              "aria-expanded": e1?.kind === "calendars",
              onClick: () => e4(
                (e10) => e10?.kind === "calendars" ? null : { kind: "calendars" }
              ),
              children: [
                (0, n.jsx)("span", {
                  className: H().swatches,
                  "aria-hidden": "true",
                  children: z2.map(
                    (e10) => (0, n.jsx)(
                      "span",
                      {
                        className: H().swatch,
                        "data-off": K2.has(e10.id) || void 0,
                        style: X(Q(e10))
                      },
                      e10.id
                    )
                  )
                }),
                (0, n.jsx)("span", {
                  className: H().buttonLabel,
                  children: "Calendars"
                })
              ]
            }),
            (0, n.jsxs)("button", {
              ref: ah,
              type: "button",
              className: H().primary,
              onClick: aF,
              "aria-keyshortcuts": "N",
              "aria-label": "New event",
              children: [
                (0, n.jsx)(h.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, n.jsx)("span", {
                  className: H().primaryLabel,
                  children: "New event"
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: H().frame,
          children: [
            "wide" === eP2 && (0, n.jsxs)("aside", {
              className: H().sidebar,
              "aria-label": "Calendar navigation",
              children: [
                (0, n.jsx)(eo, {
                  fmt: E2,
                  month: an,
                  weekStartsOn: D2,
                  today: en2,
                  range: eF,
                  onMonth: at,
                  onPick: a5
                }),
                (0, n.jsxs)("div", {
                  className: H().sideSection,
                  children: [
                    (0, n.jsx)("p", {
                      className: H().sideTitle,
                      children: "Calendars"
                    }),
                    (0, n.jsx)(el, { calendars: z2, hidden: K2, onToggle: a9 })
                  ]
                })
              ]
            }),
            (0, n.jsx)("div", {
              className: H().main,
              children: aN ? (0, n.jsx)("div", {
                ref: ao,
                className: H().agendaScroller,
                onPointerDown: (e10) => {
                  "mouse" === e10.pointerType || ap.current || (ap.current = {
                    intent: "swipe",
                    id: null,
                    pointerId: e10.pointerId,
                    touch: true,
                    x0: e10.clientX,
                    y0: e10.clientY,
                    x: e10.clientX,
                    y: e10.clientY,
                    t: e10.timeStamp,
                    vx: 0,
                    state: "pending",
                    timer: null,
                    anchorDay: 0,
                    anchorMinute: 0,
                    grab: 0,
                    origin: { start: 0, end: 0 }
                  });
                },
                onPointerMove: aY,
                onPointerUp: (e10) => aq(e10, false),
                onPointerCancel: (e10) => aq(e10, true),
                children: tc.map(
                  (e10) => (0, n.jsx)(
                    eR,
                    {
                      pane: e10,
                      current: e10 === eJ,
                      items: ak,
                      fmt: E2,
                      today: en2,
                      selectedId: e22,
                      register: aM,
                      onOpen: a3
                    },
                    e10.key
                  )
                )
              }) : (0, n.jsxs)("div", {
                ref: al,
                className: H().scroller,
                style: { "--hour": "52px" },
                children: [
                  (0, n.jsxs)("div", {
                    ref: ai,
                    className: H().head,
                    children: [
                      (0, n.jsxs)("div", {
                        className: H().headRow,
                        children: [
                          (0, n.jsx)("div", {
                            className: H().corner,
                            "aria-hidden": "true",
                            children: es2
                          }),
                          (0, n.jsx)("div", {
                            className: H().headViewport,
                            children: tc.map(
                              (e10) => (0, n.jsx)(
                                eA,
                                {
                                  pane: e10,
                                  current: e10 === eJ,
                                  today: en2,
                                  cursor: eU,
                                  fmt: E2,
                                  onDay: a5
                                },
                                e10.key
                              )
                            )
                          })
                        ]
                      }),
                      (0, n.jsxs)("div", {
                        className: H().allDayRow,
                        style: { height: 24 * tr + 8 },
                        children: [
                          (0, n.jsx)("div", {
                            className: H().allDayGutter,
                            children: tn ? (0, n.jsxs)("button", {
                              type: "button",
                              className: H().allDayToggle,
                              "aria-expanded": e9,
                              onClick: () => ae((e10) => !e10),
                              "aria-label": e9 ? "Collapse all day events" : "Show all all day events",
                              children: [
                                (0, n.jsx)("span", {
                                  children: "All day"
                                }),
                                (0, n.jsx)(m.A, {
                                  size: 14,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true",
                                  "data-open": e9 || void 0
                                })
                              ]
                            }) : (0, n.jsx)("span", {
                              className: H().allDayLabel,
                              children: "All day"
                            })
                          }),
                          (0, n.jsx)("div", {
                            className: H().headViewport,
                            children: tc.map(
                              (e10) => (0, n.jsx)(
                                eS,
                                {
                                  pane: e10,
                                  current: e10 === eJ,
                                  items: ak,
                                  fmt: E2,
                                  expanded: e9,
                                  selectedId: e22,
                                  register: aM,
                                  onOpen: a3,
                                  onMore: a7
                                },
                                e10.key
                              )
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: H().body,
                    style: { height: U2 },
                    children: [
                      (0, n.jsxs)("div", {
                        className: H().gutter,
                        "aria-hidden": "true",
                        children: [
                          th.slice(1).map(
                            (e10) => (0, n.jsx)(
                              "span",
                              {
                                className: H().hour,
                                style: { top: (e10 - B2) * ef },
                                "data-hidden": tu >= 0 && null !== ea2 && 14 > Math.abs((e10 - k(ea2)) * ef) || void 0,
                                children: E2.hour(e10)
                              },
                              e10
                            )
                          ),
                          tu >= 0 && null !== ea2 && k(ea2) >= B2 && k(ea2) <= O2 && (0, n.jsx)("span", {
                            className: H().nowLabel,
                            style: { top: (k(ea2) - B2) * ef },
                            children: "compact" === eP2 ? E2.short(ea2) : E2.time(ea2)
                          })
                        ]
                      }),
                      (0, n.jsxs)("div", {
                        ref: as,
                        className: H().surface,
                        onFocus: (e10) => {
                          let a10 = e10.target, t3 = a10.dataset.dayCell ? Number(a10.dataset.dayCell) : null, n2 = null === t3 ? a10.closest("[data-event-id]")?.dataset.eventId : void 0, r2 = t3 ?? (n2 ? _(ax.get(n2)?.start ?? NaN) : NaN);
                          Number.isFinite(r2) && eF.includes(r2) && r2 !== eB && eO(r2);
                        },
                        onPointerDown: (e10) => {
                          if ("mouse" === e10.pointerType && 0 !== e10.button || ap.current || !as.current || e1)
                            return;
                          let a10 = e10.target, t3 = a10.closest("[data-event-id]")?.dataset.eventId ?? null, n2 = t3 ? ax.get(t3) : void 0, r2 = !!a10.closest("[data-handle]"), { day: l2, minute: i2 } = aO(
                            e10.clientX,
                            e10.clientY
                          ), s2 = ew(15 * Math.floor(i2 / 15), B2, O2 - 15), o2 = {
                            intent: n2 ? r2 ? "resize" : "move" : "create",
                            id: n2?.id ?? null,
                            pointerId: e10.pointerId,
                            touch: "mouse" !== e10.pointerType,
                            x0: e10.clientX,
                            y0: e10.clientY,
                            x: e10.clientX,
                            y: e10.clientY,
                            t: e10.timeStamp,
                            vx: 0,
                            state: "pending",
                            timer: null,
                            anchorDay: l2,
                            anchorMinute: s2,
                            grab: n2 ? 1440 * l2 + i2 - n2.start : 0,
                            origin: n2 ? { start: n2.start, end: n2.end } : {
                              start: 1440 * l2 + s2,
                              end: 1440 * l2 + s2 + 15
                            }
                          };
                          ap.current = o2, o2.touch || (e10.preventDefault(), n2 ? am.current.get(n2.id)?.focus({ preventScroll: true }) : (eO(l2), e10.currentTarget.querySelector(
                            `[data-current] [data-day-cell="${l2}"]`
                          )?.focus({ preventScroll: true }))), e10.currentTarget.setPointerCapture(e10.pointerId), o2.touch && (o2.timer = setTimeout(() => {
                            ap.current === o2 && "pending" === o2.state && aH(o2);
                          }, 380));
                        },
                        onPointerMove: aY,
                        onPointerUp: (e10) => aq(e10, false),
                        onPointerCancel: (e10) => aq(e10, true),
                        onPointerLeave: () => {
                          ad.current && (ad.current.style.opacity = "0");
                        },
                        children: [
                          (0, n.jsxs)("div", {
                            className: H().lines,
                            "aria-hidden": "true",
                            children: [
                              th.map(
                                (e10) => (0, n.jsx)(
                                  "span",
                                  {
                                    className: H().hourLine,
                                    style: { top: (e10 - B2) * ef }
                                  },
                                  e10
                                )
                              ),
                              th.map(
                                (e10) => (0, n.jsx)(
                                  "span",
                                  {
                                    className: H().halfLine,
                                    style: { top: (e10 + 30 - B2) * ef }
                                  },
                                  `h${e10}`
                                )
                              )
                            ]
                          }),
                          (0, n.jsx)("div", {
                            ref: ad,
                            className: H().hover,
                            "aria-hidden": "true",
                            children: (0, n.jsx)("span", {})
                          }),
                          tc.map(
                            (e10) => (0, n.jsx)(
                              eL,
                              {
                                pane: e10,
                                current: e10 === eJ,
                                items: ak,
                                drag: e10 === eJ ? eQ : null,
                                draft: e10 === eJ ? eZ : null,
                                draftColor: ti,
                                selectedId: e22,
                                nowWall: ea2,
                                today: en2,
                                cursor: eU,
                                dayStart: B2,
                                dayEnd: O2,
                                fmt: E2,
                                reduced: P2,
                                label: aj,
                                describedBy: V2,
                                register: aM,
                                paneWidth: aD,
                                onEventKey: a22,
                                onEventClick: a6,
                                ghostRef: ac
                              },
                              e10.key
                            )
                          )
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, n.jsx)(o.N, {
              children: e5 && (0, n.jsx)(
                ed,
                {
                  message: e5.message,
                  onUndo: e5.undo,
                  onDismiss: aZ,
                  reduced: P2
                },
                e5.id
              )
            })
          ]
        }),
        (0, n.jsx)("p", {
          id: V2,
          className: H().srOnly,
          children: "Drag on empty time to add an event, then name it and press Enter. Drag an event to move it, or drag its bottom edge to change its length. Arrow keys move between days, T goes to today, N adds an event, Delete removes the selected event, and Escape closes. With an event focused, Alt and an arrow key move it by a day or 15 minutes, and Alt Shift Up or Down changes its length."
        }),
        (0, n.jsx)("p", {
          className: H().srOnly,
          "aria-live": "polite",
          children: e7
        }),
        (0, n.jsxs)(o.N, {
          children: [
            e1?.kind === "details" && tl && (0, n.jsx)(
              ee,
              {
                anchor: ts,
                rootRef: ar,
                scrollerRef: al,
                reduced: P2,
                label: "Event details",
                onClose: ta,
                children: (0, n.jsx)(
                  er,
                  {
                    fmt: E2,
                    event: tl.event,
                    start: tl.start,
                    end: tl.end,
                    calendars: z2,
                    onTitle: (e10) => aL(tl.id, { title: e10 }, `Renamed to ${e10}`),
                    onTime: (e10, a10) => aP(
                      tl.id,
                      aE(e10, a10),
                      `${tl.event.title} now ${E2.shortDate(_(e10))}, ${E2.range(e10, a10)}`
                    ),
                    onCalendar: (e10) => aL(
                      tl.id,
                      { calendarId: e10 },
                      `Moved to ${a_.get(e10)?.name ?? "calendar"}`
                    ),
                    onDelete: () => aR(tl.id),
                    onClose: aB
                  },
                  e1.id
                )
              },
              `details-${e1.id}`
            ),
            e1?.kind === "create" && eZ && (0, n.jsx)(
              ee,
              {
                anchor: to,
                rootRef: ar,
                scrollerRef: al,
                reduced: P2,
                width: 320,
                label: "New event",
                onClose: ta,
                children: (0, n.jsx)(et, {
                  fmt: E2,
                  start: eZ.start,
                  end: eZ.end,
                  calendars: z2.filter((e10) => !K2.has(e10.id)),
                  calendarId: eZ.calendarId,
                  onCalendar: (e10) => e0((a10) => a10 && { ...a10, calendarId: e10 }),
                  onSave: (e10) => {
                    if (!eZ) return;
                    let a10 = {
                      id: `event-${Date.now().toString(36)}-${++ay.current}`,
                      title: e10.trim() || "Untitled event",
                      start: v(eZ.start, A2),
                      end: v(eZ.end, A2),
                      calendarId: eZ.calendarId
                    };
                    aS([...ag.current, a10]), d2?.(a10), e0(null), e4(null), e6(a10.id), e8(
                      `Created ${a10.title}, ${E2.longDate(_(eZ.start))}, ${E2.spoken(eZ.start, eZ.end)}`
                    ), requestAnimationFrame(
                      () => am.current.get(a10.id)?.focus({ preventScroll: true })
                    );
                  },
                  onCancel: aB
                })
              },
              "create"
            ),
            e1?.kind === "calendars" && (0, n.jsx)(
              ee,
              {
                anchor: td,
                ignore: td,
                rootRef: ar,
                placement: "below",
                width: 240,
                reduced: P2,
                label: "Calendars",
                onClose: ta,
                children: (0, n.jsx)("div", {
                  className: H().popBody,
                  children: (0, n.jsx)(el, {
                    calendars: z2,
                    hidden: K2,
                    onToggle: a9
                  })
                })
              },
              "calendars"
            )
          ]
        })
      ]
    });
  }
  let eT = (0, r.memo)(function({ views: e2, value: a2, onChange: t2 }) {
    return (0, n.jsx)(g.A, {
      options: e2,
      value: a2,
      onValueChange: t2,
      label: "View"
    });
  });
  function eC(e2, a2) {
    let t2 = new Map(a2.map((e3, a3) => [e3, a3])), n2 = [];
    for (let a3 of e2) {
      if (!a3.allDay) continue;
      let e3 = -1, r3 = -1;
      for (let n3 = _(a3.start); n3 < _(a3.end - 1) + 1; n3++) {
        let a4 = t2.get(n3);
        void 0 !== a4 && (e3 < 0 && (e3 = a4), r3 = a4);
      }
      e3 >= 0 && n2.push({ item: a3, from: e3, to: r3, id: a3.id });
    }
    let { lanes: r2, count: l2 } = (function(e3) {
      let a3 = [...e3].sort(
        (e4, a4) => e4.from - a4.from || a4.to - a4.from - (e4.to - e4.from) || e4.id.localeCompare(a4.id)
      ), t3 = [], n3 = /* @__PURE__ */ new Map();
      for (let e4 of a3) {
        let a4 = t3.findIndex((a5) => a5 < e4.from);
        -1 === a4 ? (a4 = t3.length, t3.push(e4.to)) : t3[a4] = e4.to, n3.set(e4.id, a4);
      }
      return { lanes: n3, count: t3.length };
    })(n2);
    return { bars: n2.map((e3) => ({ ...e3, lane: r2.get(e3.id) })), count: l2 };
  }
  let e$ = (e2, a2) => ({ x: e2.x, opacity: e2.opacity, "--columns": a2 }), eA = (0, r.memo)(function({
    pane: e2,
    current: a2,
    today: t2,
    cursor: r2,
    fmt: l2,
    onDay: i2
  }) {
    return (0, n.jsx)(d.PY1.div, {
      className: H().headPane,
      style: e$(e2, e2.days.length),
      "aria-hidden": !a2 || void 0,
      "data-current": a2 || void 0,
      children: e2.days.map(
        (e3) => (0, n.jsxs)(
          "button",
          {
            type: "button",
            tabIndex: -1,
            className: H().headDay,
            "data-today": e3 === t2 || void 0,
            "data-weekend": j(e3) || void 0,
            "data-cursor": e3 === r2 || void 0,
            onClick: () => i2(e3),
            "aria-label": `Show ${l2.longDate(e3)}`,
            children: [
              (0, n.jsx)("span", {
                className: H().weekday,
                children: l2.weekdayShort(e3)
              }),
              (0, n.jsx)("span", {
                className: H().date,
                children: l2.date(e3)
              })
            ]
          },
          e3
        )
      )
    });
  }), eS = (0, r.memo)(function({
    pane: e2,
    current: a2,
    items: t2,
    fmt: l2,
    expanded: i2,
    selectedId: s2,
    register: o2,
    onOpen: c2,
    onMore: u2
  }) {
    let { days: h2 } = e2, m2 = h2.length, { bars: p2, count: g2 } = (0, r.useMemo)(() => eC(t2, h2), [t2, h2]), y2 = g2 > 3 && !i2 ? 2 : g2, f2 = h2.map(
      (e3, a3) => p2.filter((e4) => e4.lane >= y2 && e4.from <= a3 && e4.to >= a3).length
    );
    return (0, n.jsxs)(d.PY1.div, {
      className: H().allDayPane,
      style: e$(e2, m2),
      "aria-hidden": !a2 || void 0,
      "data-pane": "",
      children: [
        h2.map(
          (e3, a3) => (0, n.jsx)(
            "span",
            {
              className: H().allDayColumn,
              "data-weekend": j(e3) || void 0,
              style: { left: `${a3 / m2 * 100}%`, width: `${100 / m2}%` }
            },
            e3
          )
        ),
        p2.filter((e3) => e3.lane < y2).map(({ item: e3, from: t3, to: r2, lane: i3 }) => {
          let d2 = _(e3.start), u3 = _(e3.end - 1);
          return (0, n.jsx)(
            "button",
            {
              ref: a2 ? (a3) => a3 ? o2(e3.id, a3) : void 0 : void 0,
              type: "button",
              tabIndex: a2 ? 0 : -1,
              className: H().allDay,
              "data-event-id": e3.id,
              "data-selected": e3.id === s2 || void 0,
              "data-cut-start": d2 < h2[t3] || void 0,
              "data-cut-end": u3 > h2[r2] || void 0,
              style: {
                left: `${t3 / m2 * 100}%`,
                width: `${(r2 - t3 + 1) / m2 * 100}%`,
                top: 24 * i3 + 4,
                ...X(e3.color)
              },
              "aria-label": `${e3.event.title}, all day, ${d2 === u3 ? l2.longDate(d2) : `${l2.longDate(d2)} to ${l2.longDate(u3)}`}, ${e3.calendarName}`,
              "aria-haspopup": "dialog",
              onClick: (a3) => c2(e3.id, a3.currentTarget),
              children: (0, n.jsx)("span", {
                className: H().allDayTitle,
                children: e3.event.title
              })
            },
            e3.id
          );
        }),
        f2.map(
          (e3, t3) => e3 > 0 && (0, n.jsxs)(
            "button",
            {
              type: "button",
              tabIndex: a2 ? 0 : -1,
              className: H().more,
              style: {
                left: `${t3 / m2 * 100}%`,
                width: `${100 / m2}%`,
                top: 24 * y2 + 4
              },
              onClick: u2,
              "aria-label": `${e3} more all day events on ${l2.longDate(h2[t3])}`,
              children: [e3, " more"]
            },
            `more-${h2[t3]}`
          )
        )
      ]
    });
  });
  function eI(e2, a2, t2, n2, r2, l2) {
    let i2 = [];
    return n2.forEach((n3, s2) => {
      let o2 = Math.max(a2, 1440 * n3 + r2), d2 = Math.min(t2, 1440 * n3 + l2);
      d2 <= o2 || i2.push({
        key: i2.length ? `${e2.id}:${n3}` : e2.id,
        item: e2,
        index: s2,
        start: o2,
        end: d2,
        head: a2 >= 1440 * n3 + r2,
        tail: t2 <= 1440 * n3 + l2
      });
    }), i2;
  }
  function eL({
    pane: e2,
    current: a2,
    items: t2,
    drag: l2,
    draft: i2,
    draftColor: s2,
    selectedId: o2,
    nowWall: c2,
    today: u2,
    cursor: h2,
    dayStart: m2,
    dayEnd: p2,
    fmt: g2,
    reduced: y2,
    label: f2,
    describedBy: w2,
    register: v2,
    paneWidth: x2,
    onEventKey: b2,
    onEventClick: N2,
    ghostRef: D2
  }) {
    let M2, { days: T2 } = e2, C2 = T2.length, $2 = T2[0], A2 = T2[C2 - 1], S2 = (0, r.useMemo)(() => {
      let e3 = T2.map(() => []);
      for (let a3 of t2)
        if (!a3.allDay && !(a3.end <= 1440 * $2 + m2) && !(a3.start >= 1440 * A2 + p2))
          for (let t3 of eI(a3, a3.start, a3.end, T2, m2, p2)) e3[t3.index].push(t3);
      return e3.flatMap((e4) => {
        let a3 = (function(e5, a4 = 20) {
          let t3 = [...e5].sort(
            (e6, a5) => e6.start - a5.start || a5.end - e6.end || e6.id.localeCompare(a5.id)
          ), n2 = /* @__PURE__ */ new Map(), r2 = (e6) => Math.max(e6.end, e6.start + a4), l3 = [], i3 = [], s3 = -1 / 0, o3 = () => {
            let e6 = i3.length;
            for (let a5 of l3) {
              let t4 = n2.get(a5.id), l4 = 1;
              for (let n3 = t4.column + 1; n3 < e6 && !i3[n3].some((e7) => e7.start < r2(a5) && r2(e7) > a5.start); n3++)
                l4++;
              t4.span = l4, t4.columns = e6;
            }
            l3 = [], i3 = [];
          };
          for (let e6 of t3) {
            e6.start >= s3 && (o3(), s3 = -1 / 0);
            let a5 = i3.findIndex((a6) => r2(a6[a6.length - 1]) <= e6.start);
            -1 === a5 ? (a5 = i3.length, i3.push([e6])) : i3[a5].push(e6), n2.set(e6.id, { column: a5, span: 1, columns: 1 }), l3.push(e6), s3 = Math.max(s3, r2(e6));
          }
          return o3(), n2;
        })(
          e4.map((e5) => ({ id: e5.key, start: e5.start, end: e5.end })),
          22
        );
        return e4.map((e5) => ({ segment: e5, place: a3.get(e5.key) }));
      }).sort(
        (e4, a3) => e4.segment.index - a3.segment.index || e4.segment.start - a3.segment.start || e4.place.column - a3.place.column
      );
    }, [t2, T2, $2, A2, m2, p2]), I2 = (0, r.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      for (let {
        segment: { item: a3 }
      } of S2) {
        if (e3.has(a3.id)) continue;
        let { title: t3, location: n2 } = a3.event;
        e3.set(a3.id, {
          label: `${t3}, ${g2.longDate(_(a3.start))}, ${g2.spoken(a3.start, a3.end)}, ${a3.calendarName}${n2 ? `, ${n2}` : ""}`,
          range: g2.range(a3.start, a3.end),
          time: g2.time(a3.start)
        });
      }
      return e3;
    }, [S2, g2]), L2 = (0, r.useMemo)(
      () => T2.map((e3) => {
        let a3 = t2.filter(
          (a4) => a4.start < (e3 + 1) * 1440 && a4.end > 1440 * e3
        ).length;
        return `${g2.longDate(e3)}${e3 === u2 ? ", today" : ""}, ${0 === a3 ? "no events" : 1 === a3 ? "1 event" : `${a3} events`}`;
      }),
      [t2, T2, u2, g2]
    ), P2 = l2 && l2.id ? l2 : null, R2 = P2 ? S2.find((e3) => e3.segment.item.id === P2.id)?.segment.item ?? t2.find((e3) => e3.id === P2.id) : void 0, E2 = P2 && R2 ? eI(R2, P2.start, P2.end, T2, m2, p2) : [], z2 = l2?.kind === "create" ? l2 : i2, F2 = null === c2 ? -1 : T2.indexOf(_(c2)), W2 = null === c2 ? 0 : (k(c2) - m2) * ef, B2 = F2 >= 0 && null !== c2 && k(c2) >= m2 && k(c2) <= p2, O2 = (e3) => (k(e3) - m2) * ef, U2 = (e3, t3, r2, l3) => {
      let i3, { item: s3 } = e3, d2 = l3.dragging && P2 ? P2.start : s3.start, u3 = l3.dragging && P2 ? P2.end : s3.end, h3 = O2(e3.start), m3 = (i3 = e3.start, (e3.end - i3) * ef), p3 = I2.get(s3.id);
      return (0, n.jsx)(
        eP,
        {
          id: s3.id,
          register: a2 && !l3.placeholder && e3.key === s3.id ? v2 : void 0,
          title: s3.event.title,
          color: s3.color,
          location: s3.event.location,
          attendees: s3.event.attendees,
          top: h3,
          height: m3,
          left: t3,
          width: r2,
          time: l3.dragging ? g2.range(d2, u3) : m3 < 30 ? p3.time : p3.range,
          label: p3.label,
          past: null !== c2 && s3.end <= c2,
          selected: s3.id === o2,
          dragging: !!l3.dragging,
          placeholder: !!l3.placeholder,
          head: e3.head,
          tail: e3.tail,
          interactive: a2,
          reduced: y2,
          paneWidth: x2,
          onEventKey: b2,
          onEventClick: N2
        },
        l3.placeholder ? `origin:${e3.key}` : e3.key
      );
    }, V2 = [];
    for (let { segment: e3, place: a3 } of S2) {
      if (P2 && e3.item.id === P2.id) {
        e3.key === e3.item.id && E2.forEach((e4) => V2.push(U2(e4, e4.index / C2, 1 / C2, { dragging: true })));
        continue;
      }
      V2.push(
        U2(e3, (e3.index + a3.column / a3.columns) / C2, a3.span / a3.columns / C2, {})
      );
    }
    return (0, n.jsxs)(d.PY1.div, {
      className: H().pane,
      style: e$(e2, C2),
      "data-current": a2 || void 0,
      "data-pane": "",
      "aria-hidden": !a2 || void 0,
      children: [
        (0, n.jsx)("div", {
          className: H().grid,
          role: "grid",
          "aria-label": f2,
          "aria-describedby": w2,
          "aria-readonly": "true",
          children: (0, n.jsx)("div", {
            role: "row",
            className: H().gridRow,
            children: T2.map(
              (e3, t3) => (0, n.jsx)(
                "div",
                {
                  role: "gridcell",
                  "data-day-cell": e3,
                  tabIndex: a2 && e3 === h2 ? 0 : -1,
                  className: H().column,
                  "data-weekend": j(e3) || void 0,
                  "data-today": e3 === u2 || void 0,
                  "aria-label": L2[t3],
                  style: { left: `${t3 / C2 * 100}%`, width: `${100 / C2}%` }
                },
                e3
              )
            )
          })
        }),
        B2 && (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: H().nowRow,
              style: { top: W2 },
              "aria-hidden": "true"
            }),
            (0, n.jsx)("div", {
              className: H().now,
              style: {
                top: W2,
                left: `${F2 / C2 * 100}%`,
                width: `${100 / C2}%`
              },
              "aria-hidden": "true"
            })
          ]
        }),
        P2 && (0, n.jsx)("div", {
          className: H().events,
          "aria-hidden": "true",
          children: S2.filter(({ segment: e3 }) => e3.item.id === P2.id).map(
            ({ segment: e3, place: a3 }) => U2(
              e3,
              (e3.index + a3.column / a3.columns) / C2,
              a3.span / a3.columns / C2,
              { placeholder: true }
            )
          )
        }),
        (0, n.jsxs)("div", {
          className: H().events,
          children: [
            V2,
            E2.length > 0 && P2 && (0, n.jsx)("div", {
              className: H().dragLabel,
              style: {
                top: O2(E2[0].start),
                left: `${E2[0].index / C2 * 100}%`,
                width: `${100 / C2}%`
              },
              "aria-hidden": "true",
              children: (0, n.jsx)("span", {
                children: g2.range(P2.start, P2.end)
              })
            })
          ]
        }),
        z2 && _(z2.start) >= $2 && _(z2.start) <= A2 && (0, n.jsx)("div", {
          ref: a2 ? D2 : void 0,
          className: H().ghost,
          "data-drawing": l2?.kind === "create" || void 0,
          style: {
            top: O2(z2.start),
            height: Math.max(18, (M2 = z2.start, (z2.end - M2) * ef - 2)),
            left: `${T2.indexOf(_(z2.start)) / C2 * 100}%`,
            width: `${100 / C2}%`,
            ...X(s2)
          },
          "aria-hidden": "true",
          children: (0, n.jsxs)("span", {
            className: H().ghostInner,
            children: [
              (0, n.jsx)("span", {
                className: H().ghostTitle,
                children: "New event"
              }),
              (0, n.jsx)("span", {
                className: H().ghostTime,
                children: g2.range(z2.start, z2.end)
              })
            ]
          })
        })
      ]
    });
  }
  let eP = (0, r.memo)(function({
    id: e2,
    title: a2,
    color: t2,
    location: l2,
    attendees: i2,
    top: o2,
    height: d2,
    left: c2,
    width: u2,
    time: h2,
    label: m2,
    past: g2,
    selected: y2,
    dragging: f2,
    placeholder: w2,
    head: v2,
    tail: _2,
    interactive: k2,
    reduced: x2,
    register: b2,
    paneWidth: j2,
    onEventKey: N2,
    onEventClick: D2
  }) {
    let M2 = (0, r.useRef)(null), T2 = (0, r.useRef)(null), C2 = (0, r.useRef)({ x: 0, y: 0 }), $2 = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      let e3 = T2.current;
      T2.current = { left: c2, top: o2 };
      let a3 = M2.current;
      if (!e3 || !a3) return;
      let t3 = (e3.left - c2) * j2() + C2.current.x, n2 = e3.top - o2 + C2.current.y;
      $2.current?.stop();
      let r2 = (e4) => {
        C2.current = { x: t3 * e4, y: n2 * e4 }, a3.style.transform = e4 ? `translate3d(${t3 * e4}px, ${n2 * e4}px, 0)` : "";
      };
      x2 || 0.5 > Math.abs(t3) && 0.5 > Math.abs(n2) ? r2(0) : (r2(1), $2.current = (0, s.i)(1, 0, { ...f2 ? ey : eg, onUpdate: r2 }));
    }, [c2, o2, x2, f2, j2]), (0, r.useEffect)(() => () => $2.current?.stop(), []);
    let A2 = (0, r.useCallback)(
      (a3) => (M2.current = a3, a3 && b2 ? b2(e2, a3) : void 0),
      [b2, e2]
    ), S2 = d2 < 30 ? "s" : d2 < 62 ? "m" : "l", I2 = {
      top: o2 + 1,
      height: Math.max(18, d2 - 2),
      left: `${100 * c2}%`,
      width: `${100 * u2}%`,
      ...X(t2)
    };
    return w2 ? (0, n.jsx)("div", {
      ref: A2,
      className: H().origin,
      style: I2,
      "aria-hidden": "true"
    }) : (0, n.jsxs)("button", {
      ref: A2,
      type: "button",
      "data-event-id": e2,
      className: H().event,
      "data-size": S2,
      "data-past": g2 || void 0,
      "data-selected": y2 || void 0,
      "data-dragging": f2 || void 0,
      "data-cut-start": !v2 || void 0,
      "data-cut-end": !_2 || void 0,
      style: I2,
      tabIndex: k2 && !f2 ? 0 : -1,
      "aria-label": m2,
      "aria-haspopup": "dialog",
      onKeyDown: (a3) => N2(e2, a3),
      onClick: (a3) => D2(e2, a3),
      children: [
        (0, n.jsxs)("span", {
          className: H().eventBody,
          children: [
            (0, n.jsx)("span", {
              className: H().eventTitle,
              children: a2
            }),
            (0, n.jsx)("span", { className: H().eventTime, children: h2 }),
            "l" === S2 && l2 && (0, n.jsxs)("span", {
              className: H().eventMeta,
              children: [
                (0, n.jsx)(p.A, {
                  size: 11,
                  strokeWidth: 2,
                  "aria-hidden": "true"
                }),
                (0, n.jsx)("span", { children: l2 })
              ]
            }),
            "l" === S2 && i2 && i2.length > 1 && (0, n.jsx)("span", {
              className: H().eventFaces,
              children: (0, n.jsx)(Z, { people: i2, size: 18, max: 4 })
            })
          ]
        }),
        _2 && (0, n.jsx)("span", {
          className: H().handle,
          "data-handle": "end",
          "aria-hidden": "true"
        })
      ]
    });
  }), eR = (0, r.memo)(function({
    pane: e2,
    current: a2,
    items: t2,
    fmt: l2,
    today: i2,
    selectedId: s2,
    register: o2,
    onOpen: c2
  }) {
    let { days: u2 } = e2, h2 = (0, r.useMemo)(
      () => u2.map(
        (e3) => t2.filter((a3) => a3.start < (e3 + 1) * 1440 && a3.end > 1440 * e3).sort(
          (e4, a3) => Number(a3.allDay) - Number(e4.allDay) || e4.start - a3.start || e4.end - a3.end
        )
      ),
      [t2, u2]
    );
    return (0, n.jsx)(d.PY1.div, {
      className: H().agenda,
      style: e$(e2, u2.length),
      "aria-hidden": !a2 || void 0,
      "data-pane": "",
      children: u2.map(
        (e3, t3) => (0, n.jsxs)(
          "section",
          {
            className: H().agendaDay,
            "aria-label": l2.longDate(e3),
            children: [
              (0, n.jsxs)("h3", {
                className: H().agendaHead,
                "data-today": e3 === i2 || void 0,
                children: [
                  (0, n.jsx)("span", {
                    className: H().agendaDate,
                    children: l2.date(e3)
                  }),
                  (0, n.jsxs)("span", {
                    className: H().agendaWeekday,
                    children: [
                      l2.weekdayLong(e3),
                      (0, n.jsx)("span", {
                        className: H().muted,
                        children: l2.monthDay(e3)
                      })
                    ]
                  }),
                  e3 === i2 && (0, n.jsx)("span", {
                    className: H().todayTag,
                    children: "Today"
                  })
                ]
              }),
              0 === h2[t3].length ? (0, n.jsx)("p", {
                className: H().agendaEmpty,
                children: "Nothing planned"
              }) : (0, n.jsx)("ul", {
                className: H().agendaList,
                children: h2[t3].map(
                  (t4) => (0, n.jsx)(
                    "li",
                    {
                      children: (0, n.jsxs)("button", {
                        ref: a2 && Math.max(_(t4.start), u2[0]) === e3 ? (e4) => e4 ? o2(t4.id, e4) : void 0 : void 0,
                        type: "button",
                        tabIndex: a2 ? 0 : -1,
                        className: H().agendaItem,
                        "data-event-id": t4.id,
                        "data-selected": t4.id === s2 || void 0,
                        style: X(t4.color),
                        "aria-haspopup": "dialog",
                        onClick: (e4) => c2(t4.id, e4.currentTarget),
                        "aria-label": `${t4.event.title}, ${t4.allDay ? "all day" : l2.spoken(t4.start, t4.end)}, ${t4.calendarName}${t4.event.location ? `, ${t4.event.location}` : ""}`,
                        children: [
                          (0, n.jsx)("span", {
                            className: H().agendaTime,
                            children: t4.allDay ? "All day" : (0, n.jsxs)(n.Fragment, {
                              children: [
                                l2.time(t4.start),
                                (0, n.jsx)("span", {
                                  className: H().muted,
                                  children: l2.time(t4.end)
                                })
                              ]
                            })
                          }),
                          (0, n.jsx)("span", {
                            className: H().agendaBar,
                            "aria-hidden": "true"
                          }),
                          (0, n.jsxs)("span", {
                            className: H().agendaText,
                            children: [
                              (0, n.jsx)("span", {
                                className: H().agendaTitle,
                                children: t4.event.title
                              }),
                              t4.event.location && (0, n.jsx)("span", {
                                className: H().muted,
                                children: t4.event.location
                              })
                            ]
                          }),
                          t4.event.attendees && t4.event.attendees.length > 1 && (0, n.jsx)(Z, {
                            people: t4.event.attendees,
                            size: 22,
                            max: 3
                          })
                        ]
                      })
                    },
                    t4.id
                  )
                )
              })
            ]
          },
          e3
        )
      )
    });
  }), eE = eM;
}

__m(__module,__exports,__require);
});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(94088, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(96220, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { l: () => f });
  var s = t(95155), r = t(12115), i = t(73051), n = t(18310), l = t(80642), o = t(25354), d = t(12363), p = t(94088), c = t(64577), m = t(7770), u = t(82016), h = t.n(u);
  let _ = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${m.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: m.T.duration.standard,
        ease: [...m.T.ease.enter]
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${m.T.blur.subtle}px)`,
      transition: {
        duration: m.T.duration.fast,
        ease: [...m.T.ease.standard]
      }
    })
  }, x = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: m.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: m.T.duration.instant } }
  }, f = (0, r.forwardRef)(function({
    label: e2,
    description: a2,
    placeholder: t2 = "Select an option",
    options: m2,
    id: u2,
    className: f2,
    disabled: y,
    onValueChange: j,
    ...b
  }, g) {
    let v = (0, r.useId)(), N = u2 ?? v, w = a2 ? `${N}-description` : void 0, k = (0, n.I)(), [S, T] = (0, r.useState)(b.defaultValue ?? ""), R = b.value ?? S, A = m2.findIndex((e3) => e3.value === R), z = R ? m2[A]?.label ?? "" : t2, [P, I] = (0, r.useState)(A), [M, C] = (0, r.useState)(1);
    return P !== A && (I(A), C(A > P ? 1 : -1)), (0, s.jsxs)("div", {
      className: h().field,
      children: [
        (0, s.jsx)("label", { htmlFor: N, children: e2 }),
        (0, s.jsxs)(i.bL, {
          ...b,
          disabled: y,
          onValueChange: (e3) => {
            T(e3), j?.(e3);
          },
          children: [
            (0, s.jsxs)(i.l9, {
              ref: g,
              id: N,
              "aria-describedby": w,
              className: [h().trigger, f2].filter(Boolean).join(" "),
              children: [
                (0, s.jsx)("span", {
                  className: h().srOnly,
                  children: (0, s.jsx)(i.WT, { placeholder: t2 })
                }),
                (0, s.jsx)("span", {
                  className: h().valueText,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(l.N, {
                    initial: false,
                    custom: M,
                    children: (0, s.jsx)(
                      o.PY1.span,
                      {
                        "data-placeholder": R ? void 0 : "",
                        custom: M,
                        variants: k ? x : _,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: z
                      },
                      R ? `value-${R}` : "placeholder"
                    )
                  })
                }),
                (0, s.jsx)(i.In, {
                  className: h().chevron,
                  children: (0, s.jsx)(d.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsx)(i.ZL, {
              children: (0, s.jsxs)(i.UC, {
                className: h().content,
                position: "popper",
                sideOffset: 4,
                collisionPadding: 12,
                children: [
                  (0, s.jsx)(i.PP, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, s.jsx)(i.LM, {
                    className: h().viewport,
                    children: m2.map(
                      (e3) => (0, s.jsxs)(
                        i.q7,
                        {
                          value: e3.value,
                          disabled: e3.disabled,
                          className: h().item,
                          children: [
                            (0, s.jsx)(i.p4, { children: e3.label }),
                            (0, s.jsx)(i.VF, {
                              className: h().indicator,
                              children: (0, s.jsx)(c.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        },
                        e3.value
                      )
                    )
                  }),
                  (0, s.jsx)(i.wn, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("span", { id: w, className: h().hint, children: a2 })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.cssFor("week-calendar", [70460]);
A.item("week-calendar", {entry:79330, export:"WeekCalendar", kind:"block", tier:"pro", unresolved:[]});
})();