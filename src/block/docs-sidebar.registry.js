/* docs-sidebar (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(9146, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={trigger:"dropdown-menu_trigger__tHHfW",item:"dropdown-menu_item__2mM29",triggerIcon:"dropdown-menu_triggerIcon__ePoI_",label:"dropdown-menu_label__E6np5",labelMeasure:"dropdown-menu_labelMeasure__xGL22",labelText:"dropdown-menu_labelText__77jcs",chevron:"dropdown-menu_chevron__4EgVP",menu:"dropdown-menu_menu__N7a5H","menu-exit":"dropdown-menu_menu-exit__njtoa",highlight:"dropdown-menu_highlight___o21W",icon:"dropdown-menu_icon__HqlVs",separator:"dropdown-menu_separator__hTmo3",destructive:"dropdown-menu_destructive__sBler"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(14577, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "info",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(17082, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => n });
  var d = t(51811);
  let h = {
    name: "boxes",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
          key: "lc1i9w"
        }
      ],
      ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
      ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
      ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
      [
        "path",
        {
          d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
          key: "8zsnat"
        }
      ],
      ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
      ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
      ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
      [
        "path",
        {
          d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
          key: "1xygjf"
        }
      ],
      ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
      ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
      ["path", { d: "M12 13.5V8", key: "1io7kd" }]
    ]
  };
  h.node;
  let n = (0, d.A)(h);
}

__m(__module,__exports,__require);
});
A.regCss(19594, ".block{width:100%;min-width:0;max-width:100%;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n.header{display:flex;min-height:52px;align-items:center;justify-content:space-between;gap:var(--space-3);border-bottom:1px solid var(--border-subtle);padding:var(--space-2) var(--space-3) var(--space-2) var(--space-4);background:var(--surface-raised)}\n@media (max-width:420px){.header{padding-left:var(--space-3)}\n.header button{width:var(--control-height-sm);padding-inline:0}\n.header button>span:last-of-type{display:none}\n.file{display:flex;min-width:0;align-items:baseline;gap:var(--space-2);color:var(--text-secondary);font-family:var(--font-body);font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.file>svg{flex:none;align-self:center;color:var(--text-muted)}\n.filename{position:relative;min-width:0;overflow:hidden;color:var(--foreground)}\n.swap{display:inline-grid;min-width:0;white-space:nowrap}\n.swapStack>span,.swap>span{grid-area:1/1;min-width:0}\n.swapStack{display:grid;min-width:0}\n.swapText{display:block;overflow:hidden;text-overflow:ellipsis}\n.reserve{visibility:hidden}\n.sizer{position:absolute;top:0;left:0;white-space:nowrap;visibility:hidden;pointer-events:none}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.language{flex:none;color:var(--text-muted);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:var(--text-xs);font-weight:400}\n.language:before{content:\"·\";margin-right:var(--space-2);color:var(--border-strong)}\n.viewport{--code-collapsed:calc(var(--code-lines, 0) * var(--text-sm) * 1.7 + var(--space-5) * 2);overflow:hidden}\n.viewport{--code-collapsed:calc(var(--code-lines, 0) * var(--text-xs) * 1.7 + var(--space-4) * 2)}\n.pre{position:relative;overflow:auto;margin:0;padding:var(--space-5);color:var(--foreground);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,Liberation Mono,monospace;font-size:var(--text-sm);font-variant-ligatures:none;line-height:1.7;tab-size:2;white-space:pre}\n.pre{padding:var(--space-4);font-size:var(--text-xs)}\n.code{display:block}\n.expand{display:flex;width:100%;min-height:44px;align-items:center;justify-content:center;gap:var(--space-2);border:0;border-top:1px solid var(--border-subtle);padding:0 var(--space-4);background:var(--surface-raised);color:var(--text-secondary);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.expand:hover{background:var(--surface-muted);color:var(--foreground)}\n.expand:hover .chevron{color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.expand{transition:none}\n.chevron{display:grid;flex:none;place-items:center;color:var(--text-muted)}\n.comment{color:var(--text-muted);font-style:italic}\n.string{color:oklch(46% .13 150)}\n:root[data-theme=dark] .string{color:oklch(77% .15 150)}\n.number{color:oklch(50% .14 55)}\n:root[data-theme=dark] .number{color:oklch(80% .14 75)}\n.keyword{color:oklch(48% .15 285)}\n:root[data-theme=dark] .keyword{color:oklch(78% .16 285)}\n.type{color:oklch(46% .13 230)}\n:root[data-theme=dark] .type{color:oklch(79% .13 230)}\n.function{color:oklch(43% .12 25)}\n:root[data-theme=dark] .function{color:oklch(80% .13 25)}\n.property{color:oklch(44% .12 85)}\n:root[data-theme=dark] .property{color:oklch(79% .12 85)}\n.tag{color:oklch(46% .13 230)}\n:root[data-theme=dark] .tag{color:oklch(79% .13 230)}\n.punctuation{color:var(--text-secondary)}", {"block":"block","header":"header","file":"file","filename":"filename","swap":"swap","swapStack":"swapStack","swapText":"swapText","reserve":"reserve","sizer":"sizer","srOnly":"srOnly","language":"language","viewport":"viewport","pre":"pre","code":"code","expand":"expand","chevron":"chevron","comment":"comment","string":"string","number":"number","keyword":"keyword","type":"type","function":"function","property":"property","tag":"tag","punctuation":"punctuation"});
A.regCss(22346, ".badge{--badge-tone:var(--text-secondary);--badge-tint:10%;--badge-ink:84%;--badge-background:color-mix(in oklab,var(--badge-tone) var(--badge-tint),var(--surface));--badge-foreground:color-mix(in oklab,var(--badge-tone) var(--badge-ink),var(--foreground));--badge-color:color-mix(in oklab,var(--badge-tone) 88%,var(--foreground));--badge-border:transparent;--badge-radius:6px;--badge-height:24px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px;box-sizing:border-box;display:inline-flex;min-height:var(--badge-height);flex:none;align-items:center;justify-content:center;vertical-align:middle;border:1px solid var(--badge-border);border-radius:var(--badge-radius);padding:0 var(--badge-pad);color:var(--badge-foreground);background:var(--badge-background);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.005em;line-height:1;white-space:nowrap;overflow:clip;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n:root[data-theme=dark] .badge{--badge-tint:12%;--badge-ink:94%}\n@media (prefers-reduced-motion:reduce){.badge{transition-duration:var(--duration-instant)}\n.outline{--badge-border:color-mix(in oklab,var(--badge-tone) 14%,var(--border))}\n:root[data-theme=dark] .outline{--badge-border:color-mix(in oklab,var(--badge-tone) 22%,var(--border))}\n.sm{--badge-height:20px;--badge-radius:5px;--badge-pad:8px;--badge-gap:4px;--badge-icon:12px;--badge-dot:5px;font-size:11px}\n.md{--badge-height:24px;--badge-radius:6px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px}\n.lg{--badge-height:28px;--badge-radius:7px;--badge-pad:12px;--badge-gap:6px;--badge-icon:16px;--badge-dot:7px;font-size:var(--text-sm)}\n.pill{--badge-radius:var(--radius-pill)}\n.withIcon{padding-inline-start:calc(var(--badge-pad) - 2px)}\n.withDot{padding-inline-start:calc(var(--badge-pad) - 1px)}\n.body,.content{display:flex;align-items:center}\n.content{position:relative;width:max-content;gap:var(--badge-gap)}\n.glyph,.label{position:relative;display:inline-flex;align-items:center}\n.glyph>svg{display:block;width:var(--badge-icon);height:var(--badge-icon)}\n.text{display:block;text-box:trim-both cap alphabetic}\n.icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center;color:var(--badge-color);line-height:0}\n.dot{display:block;width:var(--badge-dot);height:var(--badge-dot);flex:none;border-radius:50%;background:var(--badge-color)}\n.neutral{--badge-tone:var(--text-secondary)}\n.info{--badge-tone:var(--info,var(--tone-sky))}\n.success{--badge-tone:var(--success)}\n.warning{--badge-tone:var(--warning)}\n.amber,.warning{--badge-ink:76%}\n.danger{--badge-tone:var(--danger)}\n.teal{--badge-tone:var(--tone-teal)}\n.sky{--badge-tone:var(--tone-sky)}\n.orchid{--badge-tone:var(--tone-orchid)}\n.violet{--badge-tone:var(--tone-violet)}\n.rose{--badge-tone:var(--tone-rose)}\n.amber{--badge-tone:var(--tone-amber)}", {});
A.reg(25583, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "file-code-corner",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
          key: "1wthlu"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
      ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
    ],
    aliases: ["file-code-2"]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(26874, ".docs-sidebar_docs__yRid6{--row-hover:color-mix(in oklab,var(--foreground) 4.5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 7%,transparent);container:docs/inline-size;position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:min(100%,1160px);min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);text-align:left}.docs-sidebar_docs__yRid6 *,.docs-sidebar_docs__yRid6 :after,.docs-sidebar_docs__yRid6 :before{box-sizing:border-box}.docs-sidebar_srOnly__aAXUD{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.docs-sidebar_frame__XOW2n{position:relative;display:grid;flex:1 0 auto;grid-template-columns:auto minmax(0,1fr);height:680px;min-height:0}.docs-sidebar_sidebar__qavu0{--full:240px;position:relative;display:flex;width:var(--full);min-width:0;min-height:0;flex-direction:column;overflow:hidden;background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}:root[data-theme=dark] .docs-sidebar_docs__yRid6{--row-hover:color-mix(in oklab,var(--foreground) 5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 8%,transparent)}:root[data-theme=dark] .docs-sidebar_sidebar__qavu0{background:color-mix(in oklab,var(--background) 60%,var(--surface))}.docs-sidebar_sidebar__qavu0:after{position:absolute;top:0;right:0;bottom:0;width:1px;background:var(--border);content:\"\";pointer-events:none}.docs-sidebar_brand__srbke{display:flex;height:52px;flex:none;align-items:center;justify-content:space-between;gap:8px;overflow:hidden;padding:0 12px 0 24px}.docs-sidebar_wordmark__Qhufl{overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:1.2;text-overflow:ellipsis;white-space:nowrap}.docs-sidebar_wordmark__Qhufl span{color:var(--text-muted);font-weight:400}.docs-sidebar_brandActions__mnIkM{display:flex;flex:none;align-items:center;gap:6px}.docs-sidebar_menuSpacer__F9ETp{display:block;width:15px;height:15px}.docs-sidebar_menuButton__qigv6{display:none;-webkit-tap-highlight-color:transparent;width:32px;height:32px;flex:none;place-items:center;border:1px solid var(--border);border-radius:8px;padding:0;background:var(--surface);color:var(--foreground);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.docs-sidebar_menuButton__qigv6:active{transform:scale(.96)}.docs-sidebar_menuIcon__FrOj8{display:grid;place-items:center}.docs-sidebar_scrim__CZg_g{display:none}.docs-sidebar_navPanel__20Pcn{display:grid;flex:1;min-height:0;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}.docs-sidebar_navInner__4l60U{display:flex;min-height:0;flex-direction:column}.docs-sidebar_searchRow__YhknF{position:relative;min-width:0;padding:0 48px 8px 12px}.docs-sidebar_searchClip__1gTRK{min-width:0;overflow:hidden}.docs-sidebar_search__h3eM6{width:calc(var(--full) - 60px)}.docs-sidebar_search__h3eM6 label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.docs-sidebar_search__h3eM6 div:has(>input){min-height:32px;gap:6px;border-radius:8px;padding:0 8px 0 10px;background:var(--surface)}.docs-sidebar_railToggle__EMVFX{position:absolute;top:0;right:16px;display:grid;width:32px;height:32px;place-items:center;border:0;border-radius:8px;padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.docs-sidebar_railToggle__EMVFX:active{background:var(--row-active);color:var(--foreground)}.docs-sidebar_nav__WsSZ4{flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:4px 12px 20px;scrollbar-color:var(--border-strong) transparent;scrollbar-width:thin}.docs-sidebar_groupInner__Cxp5G{padding-bottom:2px}.docs-sidebar_groupButton__BEaUj{position:relative;-webkit-tap-highlight-color:transparent;display:flex;width:100%;height:32px;align-items:center;gap:10px;border:0;border-radius:8px;padding:0 10px 0 12px;background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;line-height:20px;text-align:left;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}.docs-sidebar_groupButton__BEaUj[data-holds]{color:var(--foreground)}.docs-sidebar_chevron__4P3JP{flex:none;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard)}.docs-sidebar_groupButton__BEaUj[aria-expanded=true] .docs-sidebar_chevron__4P3JP{transform:rotate(90deg)}.docs-sidebar_groupLabel__8OZF6{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.docs-sidebar_activeDot__DY_Op{width:6px;height:6px;flex:none;border-radius:50%;background:var(--accent)}.docs-sidebar_pages__8FHBC{position:relative;margin:0;padding:1px 0 4px;list-style:none}.docs-sidebar_pages__8FHBC:before{position:absolute;top:3px;bottom:7px;left:19.5px;width:1px;background:var(--border);content:\"\"}.docs-sidebar_page__4IKAG{position:relative;-webkit-tap-highlight-color:transparent;display:flex;width:100%;min-height:30px;align-items:center;gap:8px;border:0;border-radius:8px;padding:5px 8px 5px 38px;background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;line-height:20px;text-align:left;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}.docs-sidebar_groupButton__BEaUj:before,.docs-sidebar_page__4IKAG:before{position:absolute;inset:0;border-radius:8px;background:var(--row-hover);content:\"\";opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}.docs-sidebar_page__4IKAG:before{left:28px}.docs-sidebar_page__4IKAG[aria-current=page]{color:var(--foreground)}.docs-sidebar_pageHighlight__rGsYp{position:absolute;inset:0 0 0 28px;z-index:0;background:var(--row-active)}.docs-sidebar_pageText__6zB7F{position:relative;z-index:1;display:grid;min-width:0;flex:1}.docs-sidebar_pageHeading__yyi8U,.docs-sidebar_pageTitle__Gl4O3{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.docs-sidebar_pageHeading__yyi8U{color:var(--text-muted);font-size:var(--text-xs);font-weight:400;line-height:18px}.docs-sidebar_pageTag__rJW4E{position:relative;z-index:1;display:inline-flex;flex:none;font-weight:400}.docs-sidebar_activeDot__DY_Op,.docs-sidebar_chevron__4P3JP,.docs-sidebar_groupLabel__8OZF6{position:relative;z-index:1}.docs-sidebar_groupIcon__69V1p{position:relative;z-index:1;flex:none;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.docs-sidebar_groupButton__BEaUj[data-holds] .docs-sidebar_groupIcon__69V1p,.docs-sidebar_groupButton__BEaUj[data-lit] .docs-sidebar_groupIcon__69V1p{color:var(--accent)}.docs-sidebar_groupHighlight__KX4qp{position:absolute;inset:0;z-index:0;background:var(--row-active)}.docs-sidebar_groupButton__BEaUj mark,.docs-sidebar_page__4IKAG mark{background:none;color:var(--foreground);font-weight:500;text-decoration:underline;text-decoration-color:var(--text-muted);text-decoration-thickness:1px;text-underline-offset:3px}.docs-sidebar_empty__hFaIh{padding:18px 12px 8px}.docs-sidebar_emptyBody__AeaQv{display:grid;justify-items:start;gap:6px}.docs-sidebar_empty__hFaIh p{margin:0;overflow-wrap:anywhere;font-size:13px;font-weight:500}.docs-sidebar_empty__hFaIh span{color:var(--text-muted);font-size:var(--text-xs);line-height:1.5}.docs-sidebar_empty__hFaIh button{margin-top:8px}.docs-sidebar_main__4Lzvh{display:grid;min-width:0;min-height:0;grid-template-areas:\"banner banner\" \"article outline\";grid-template-columns:minmax(0,1fr) 148px;grid-template-rows:auto minmax(0,1fr)}.docs-sidebar_scroller__b9JUV{position:relative;min-width:0;min-height:0;grid-area:article;overflow-y:auto;padding:36px 28px 44px;container:article/inline-size;scrollbar-color:var(--border-strong) transparent;scrollbar-width:thin}.docs-sidebar_article__lzpqc{max-width:660px}.docs-sidebar_article__lzpqc h2{margin:0;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);outline:none}.docs-sidebar_lede__jqP_L{max-width:58ch;margin:12px 0 0;color:var(--text-secondary);font-size:var(--text-base);line-height:1.55}.docs-sidebar_byline__oRw2p{display:flex;min-width:0;align-items:center;gap:10px;margin-top:20px;border-bottom:1px solid var(--border);padding-bottom:20px}.docs-sidebar_bylineText__rbkfH{display:grid;min-width:0;flex:1;gap:1px;font-size:var(--text-xs);line-height:1.35}.docs-sidebar_bylineText__rbkfH strong{font-size:13px;font-weight:500}.docs-sidebar_bylineText__rbkfH span{color:var(--text-muted)}.docs-sidebar_section__pVuxe{padding-top:32px}.docs-sidebar_section__pVuxe h3{margin:0;font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.35;border-radius:6px}.docs-sidebar_section__pVuxe p{max-width:62ch;margin:10px 0 0;color:var(--text-secondary);font-size:15px;line-height:1.65}.docs-sidebar_inlineCode__xXeHD{border-radius:6px;padding:1px 5px;background:var(--surface-muted);color:var(--foreground);font-family:var(--font-mono,ui-monospace,\"SF Mono\",Menlo,monospace);font-size:.86em;overflow-wrap:anywhere}.docs-sidebar_steps__8HbKU{display:grid;gap:8px;max-width:62ch;margin:14px 0 0;padding:0;color:var(--text-secondary);counter-reset:step;font-size:15px;line-height:1.55;list-style:none}.docs-sidebar_steps__8HbKU li{display:grid;grid-template-columns:22px minmax(0,1fr);counter-increment:step}.docs-sidebar_steps__8HbKU li:before{color:var(--text-muted);content:counter(step);font-size:13px;font-variant-numeric:tabular-nums;line-height:23px}.docs-sidebar_code__o1Ae_{margin-top:16px}.docs-sidebar_note__o7_pI{display:flex;max-width:62ch;gap:10px;margin-top:16px;border:1px solid var(--border);border-radius:12px;padding:12px 14px;background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}.docs-sidebar_note__o7_pI>svg{flex:none;margin-top:3px;color:var(--accent)}.docs-sidebar_section__pVuxe .docs-sidebar_note__o7_pI p{margin:0;font-size:var(--text-sm);line-height:1.55}.docs-sidebar_pager__dCiNX{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:48px;border-top:1px solid var(--border);padding-top:24px}.docs-sidebar_pagerLink__tFwwO{display:grid;-webkit-tap-highlight-color:transparent;min-width:0;gap:3px;border:1px solid var(--border);border-radius:12px;padding:12px 16px;background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.docs-sidebar_pagerLink__tFwwO span{display:inline-flex;align-items:center;gap:4px;color:var(--text-muted);font-size:var(--text-xs)}.docs-sidebar_pagerLink__tFwwO strong{overflow:hidden;font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:nowrap}.docs-sidebar_pagerNext___tBC6{grid-column:2;justify-items:end;text-align:right}.docs-sidebar_pagerLink__tFwwO:active{transform:scale(.985)}.docs-sidebar_bannerWrap__DSekv{display:flow-root;min-width:0;grid-area:banner}.docs-sidebar_banner__VgTWu{--tone:var(--accent);display:flex;align-items:center;gap:10px;min-height:52px;border-bottom:1px solid color-mix(in oklab,var(--tone) 22%,var(--border));padding:8px 12px 8px 28px;background:color-mix(in oklab,var(--tone) 6%,var(--surface));transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard)}.docs-sidebar_banner__VgTWu[data-tone=warning]{--tone:var(--warning)}.docs-sidebar_bannerIcon__xVTWk{display:grid;width:16px;height:16px;flex:none;place-items:center;color:var(--tone);transition:color var(--duration-standard) var(--ease-standard)}.docs-sidebar_bannerIcon__xVTWk>span{display:grid}.docs-sidebar_bannerText__dU16J{min-width:0;flex:1}.docs-sidebar_fitInner__cVrEA{position:relative}.docs-sidebar_bannerText__dU16J p{margin:0;padding:4px 0;color:var(--foreground);font-size:13px;line-height:1.45}.docs-sidebar_banner__VgTWu>button{flex:none}.docs-sidebar_outline__ALeUv{min-height:0;grid-area:outline;overflow-y:auto;padding:36px 12px 24px 0;scrollbar-width:none}.docs-sidebar_outlineToggle__ioU6L{display:none}.docs-sidebar_outlinePanel__TLkWN{display:grid;grid-template-rows:minmax(0,1fr)}.docs-sidebar_outlineNav__wWhiT{min-height:0}.docs-sidebar_outlineTitle__1pVPY{margin:0 0 10px;font-size:var(--text-xs);font-weight:500;line-height:1.4}.docs-sidebar_outlineBody__rFd8K{position:relative}.docs-sidebar_outlineBody__rFd8K:before{position:absolute;top:0;bottom:0;left:.5px;width:1px;background:var(--border);content:\"\"}.docs-sidebar_indicator__Iiuem{position:absolute;top:0;left:0;z-index:1;width:2px;border-radius:2px;background:var(--accent)}.docs-sidebar_outlineList__tcbCh{margin:0;padding:0;list-style:none}.docs-sidebar_outlineList__tcbCh a{display:block;border-radius:6px;padding:5px 0 5px 14px;color:var(--text-muted);font-size:13px;line-height:1.4;text-decoration:none;transition:color var(--duration-fast) var(--ease-standard)}.docs-sidebar_outlineList__tcbCh a[aria-current=location]{color:var(--foreground)}.docs-sidebar_activeDot__DY_Op,.docs-sidebar_brandActions__mnIkM,.docs-sidebar_emptyBody__AeaQv,.docs-sidebar_groupLabel__8OZF6,.docs-sidebar_searchClip__1gTRK,.docs-sidebar_wordmark__Qhufl{transition:opacity var(--duration-standard) var(--ease-enter) .1s,translate var(--duration-standard) var(--ease-enter) .1s}.docs-sidebar_chevron__4P3JP{transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-enter) .1s,translate var(--duration-standard) var(--ease-enter) .1s}.docs-sidebar_sidebar__qavu0[data-rail] :is(.docs-sidebar_wordmark__Qhufl,.docs-sidebar_brandActions__mnIkM,.docs-sidebar_searchClip__1gTRK,.docs-sidebar_groupLabel__8OZF6,.docs-sidebar_activeDot__DY_Op,.docs-sidebar_chevron__4P3JP,.docs-sidebar_emptyBody__AeaQv){opacity:0;translate:-6px 0;pointer-events:none;transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard),opacity .14s var(--ease-standard),translate .14s var(--ease-standard)}.docs-sidebar_tip__BWuVb{z-index:60;display:flex;align-items:center;gap:8px;border-radius:var(--radius-control);padding:7px 12px;background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-family:var(--font-body);font-size:13px;font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-fast) var(--ease-enter)}.docs-sidebar_tipNote__iuzYL{color:color-mix(in oklab,var(--background) 62%,var(--foreground));font-weight:400}.docs-sidebar_tip__BWuVb kbd{display:inline-grid;min-width:20px;height:20px;place-items:center;border:1px solid color-mix(in oklab,var(--background) 30%,var(--foreground));border-radius:6px;padding:0 5px;font-family:var(--font-body);font-size:var(--text-xs);font-weight:400;line-height:1}.docs-sidebar_tip__BWuVb[data-state=closed]{opacity:0;transform:translateX(-2px);transition-duration:.11s;animation:docs-sidebar_tip-exit__jcUiK .11s linear both}.docs-sidebar_tip__BWuVb[data-side=bottom][data-state=closed]{transform:translateY(-2px)}@keyframes docs-sidebar_tip-exit__jcUiK{to{--tip-exit:1}}@media (hover:hover) and (pointer:fine){.docs-sidebar_groupButton__BEaUj:hover,.docs-sidebar_page__4IKAG:hover{color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.docs-sidebar_railToggle__EMVFX:hover{background:var(--row-hover);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.docs-sidebar_groupButton__BEaUj:hover .docs-sidebar_groupIcon__69V1p{color:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.docs-sidebar_groupButton__BEaUj:is([data-lit],[data-holds]):hover .docs-sidebar_groupIcon__69V1p{color:var(--accent)}}@media (hover:hover) and (pointer:fine){.docs-sidebar_groupButton__BEaUj:hover:before,.docs-sidebar_page__4IKAG:hover:before{opacity:1}}@media (hover:hover) and (pointer:fine){.docs-sidebar_groupButton__BEaUj[data-lit]:hover:before,.docs-sidebar_page__4IKAG[aria-current=page]:hover:before{opacity:0}}@media (hover:hover) and (pointer:fine){.docs-sidebar_menuButton__qigv6:hover{border-color:var(--border-strong);background:var(--surface-muted)}}@media (hover:hover) and (pointer:fine){.docs-sidebar_pagerLink__tFwwO:hover{border-color:var(--border-strong);background:color-mix(in oklab,var(--surface-muted) 50%,var(--surface))}}@media (hover:hover) and (pointer:fine){.docs-sidebar_outlineList__tcbCh a:hover{color:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.docs-sidebar_outlineList__tcbCh a[aria-current=location]:hover{color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.docs-sidebar_outlineToggle__ioU6L:hover{background:color-mix(in oklab,var(--surface-muted) 50%,var(--surface))}}:root[data-theme=dark] .docs-sidebar_scrim__CZg_g{background:rgb(0 0 0/.52)}@media (pointer:coarse){.docs-sidebar_groupButton__BEaUj{height:40px;font-size:var(--text-sm)}}@media (pointer:coarse){.docs-sidebar_page__4IKAG{min-height:40px;font-size:var(--text-sm)}}@media (pointer:coarse){.docs-sidebar_menuButton__qigv6{width:40px;height:40px;border-radius:10px}}@media (pointer:coarse){.docs-sidebar_railToggle__EMVFX{right:12px;width:40px;height:40px}}@media (pointer:coarse){.docs-sidebar_searchRow__YhknF{padding-right:56px}}@media (pointer:coarse){.docs-sidebar_search__h3eM6{width:calc(var(--full) - 68px)}}@media (pointer:coarse){.docs-sidebar_search__h3eM6 div:has(>input){min-height:40px}}@media (pointer:coarse){.docs-sidebar_brandActions__mnIkM [aria-haspopup]{min-height:40px}}@media (pointer:coarse){.docs-sidebar_outlineList__tcbCh a{padding-top:10px;padding-bottom:10px}}@media (prefers-reduced-motion:reduce){.docs-sidebar_bannerIcon__xVTWk,.docs-sidebar_banner__VgTWu,.docs-sidebar_chevron__4P3JP,.docs-sidebar_groupButton__BEaUj,.docs-sidebar_groupButton__BEaUj:before,.docs-sidebar_groupIcon__69V1p,.docs-sidebar_menuButton__qigv6,.docs-sidebar_outlineList__tcbCh a,.docs-sidebar_outlineToggle__ioU6L,.docs-sidebar_page__4IKAG,.docs-sidebar_page__4IKAG:before,.docs-sidebar_pagerLink__tFwwO,.docs-sidebar_railToggle__EMVFX,.docs-sidebar_toggleChevron__mCP6X{transition:none}}@media (prefers-reduced-motion:reduce){.docs-sidebar_activeDot__DY_Op,.docs-sidebar_brandActions__mnIkM,.docs-sidebar_chevron__4P3JP,.docs-sidebar_emptyBody__AeaQv,.docs-sidebar_groupLabel__8OZF6,.docs-sidebar_searchClip__1gTRK,.docs-sidebar_sidebar__qavu0[data-rail] :is(.docs-sidebar_wordmark__Qhufl,.docs-sidebar_brandActions__mnIkM,.docs-sidebar_searchClip__1gTRK,.docs-sidebar_groupLabel__8OZF6,.docs-sidebar_activeDot__DY_Op,.docs-sidebar_chevron__4P3JP,.docs-sidebar_emptyBody__AeaQv),.docs-sidebar_wordmark__Qhufl{translate:none;scale:none;transition:opacity .12s linear}}@media (prefers-reduced-motion:reduce){.docs-sidebar_tip__BWuVb,.docs-sidebar_tip__BWuVb[data-side=bottom][data-state=closed],.docs-sidebar_tip__BWuVb[data-state=closed]{transform:none;transition:opacity 90ms linear}}@media (prefers-reduced-motion:reduce){.docs-sidebar_outlinePanel__TLkWN,.docs-sidebar_outlinePanel__TLkWN[data-open=true]{transition:none}}@media (prefers-reduced-motion:reduce){.docs-sidebar_menuButton__qigv6:active,.docs-sidebar_pagerLink__tFwwO:active{transform:none}}", {"docs":"docs-sidebar_docs__yRid6","srOnly":"docs-sidebar_srOnly__aAXUD","frame":"docs-sidebar_frame__XOW2n","sidebar":"docs-sidebar_sidebar__qavu0","brand":"docs-sidebar_brand__srbke","wordmark":"docs-sidebar_wordmark__Qhufl","brandActions":"docs-sidebar_brandActions__mnIkM","menuSpacer":"docs-sidebar_menuSpacer__F9ETp","menuButton":"docs-sidebar_menuButton__qigv6","menuIcon":"docs-sidebar_menuIcon__FrOj8","scrim":"docs-sidebar_scrim__CZg_g","navPanel":"docs-sidebar_navPanel__20Pcn","navInner":"docs-sidebar_navInner__4l60U","searchRow":"docs-sidebar_searchRow__YhknF","searchClip":"docs-sidebar_searchClip__1gTRK","search":"docs-sidebar_search__h3eM6","railToggle":"docs-sidebar_railToggle__EMVFX","nav":"docs-sidebar_nav__WsSZ4","groupInner":"docs-sidebar_groupInner__Cxp5G","groupButton":"docs-sidebar_groupButton__BEaUj","chevron":"docs-sidebar_chevron__4P3JP","groupLabel":"docs-sidebar_groupLabel__8OZF6","activeDot":"docs-sidebar_activeDot__DY_Op","pages":"docs-sidebar_pages__8FHBC","page":"docs-sidebar_page__4IKAG","pageHighlight":"docs-sidebar_pageHighlight__rGsYp","pageText":"docs-sidebar_pageText__6zB7F","pageTitle":"docs-sidebar_pageTitle__Gl4O3","pageHeading":"docs-sidebar_pageHeading__yyi8U","pageTag":"docs-sidebar_pageTag__rJW4E","groupIcon":"docs-sidebar_groupIcon__69V1p","groupHighlight":"docs-sidebar_groupHighlight__KX4qp","empty":"docs-sidebar_empty__hFaIh","emptyBody":"docs-sidebar_emptyBody__AeaQv","main":"docs-sidebar_main__4Lzvh","scroller":"docs-sidebar_scroller__b9JUV","article":"docs-sidebar_article__lzpqc","lede":"docs-sidebar_lede__jqP_L","byline":"docs-sidebar_byline__oRw2p","bylineText":"docs-sidebar_bylineText__rbkfH","section":"docs-sidebar_section__pVuxe","inlineCode":"docs-sidebar_inlineCode__xXeHD","steps":"docs-sidebar_steps__8HbKU","code":"docs-sidebar_code__o1Ae_","note":"docs-sidebar_note__o7_pI","pager":"docs-sidebar_pager__dCiNX","pagerLink":"docs-sidebar_pagerLink__tFwwO","pagerNext":"docs-sidebar_pagerNext___tBC6","bannerWrap":"docs-sidebar_bannerWrap__DSekv","banner":"docs-sidebar_banner__VgTWu","bannerIcon":"docs-sidebar_bannerIcon__xVTWk","bannerText":"docs-sidebar_bannerText__dU16J","fitInner":"docs-sidebar_fitInner__cVrEA","outline":"docs-sidebar_outline__ALeUv","outlineToggle":"docs-sidebar_outlineToggle__ioU6L","outlinePanel":"docs-sidebar_outlinePanel__TLkWN","outlineNav":"docs-sidebar_outlineNav__wWhiT","outlineTitle":"docs-sidebar_outlineTitle__1pVPY","outlineBody":"docs-sidebar_outlineBody__rFd8K","indicator":"docs-sidebar_indicator__Iiuem","outlineList":"docs-sidebar_outlineList__tcbCh","tip":"docs-sidebar_tip__BWuVb","tipNote":"docs-sidebar_tipNote__iuzYL","tip-exit":"docs-sidebar_tip-exit__jcUiK","togglePrefix":"docs-sidebar_togglePrefix__tHZc_","currentSection":"docs-sidebar_currentSection__Jq8t_","toggleChevron":"docs-sidebar_toggleChevron__mCP6X"});
A.reg(28786, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var i = a(51811);
  let n = {
    name: "code",
    size: 24,
    node: [
      ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
      ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
    ]
  };
  n.node;
  let r = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(36058, function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.d(t, { N: () => N });
  var n = a(95155), r = a(12115), i = a(25583), s = a(12363), o = a(80642), l = a(25354), c = a(28245), u = a(92171), d = a(18310), p = a(7770), _ = a(73474), f = a(19594), h = a.n(f);
  let m = /^(?:abstract|as|async|await|break|case|catch|class|const|continue|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|of|private|protected|public|readonly|return|set|static|switch|throw|try|type|typeof|var|void|while|with|yield|SELECT|FROM|WHERE|INSERT|UPDATE|DELETE)$/, y = /^(?:true|false|null|undefined|NaN|Infinity)$/, b = /^(?:Array|Boolean|Date|Error|Map|Number|Promise|Record|Set|String|ReactNode|HTMLElement|HTMLButtonElement|Event|unknown|never|void|any|boolean|number|string|object)$/, x = /\/\*[\s\S]*?\*\/|\/\/[^\n]*|<!--[\s\S]*?-->|`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$-]*\b|[{}[\]();,.<>:=+*/!?|&-]/g, j = { duration: p.T.duration.standard, ease: [...p.T.ease.enter] }, v = { duration: p.T.duration.instant, ease: [...p.T.ease.standard] };
  function k({ value: e2, reduced: t2 }) {
    return (0, n.jsx)(o.N, {
      initial: false,
      children: (0, n.jsx)(
        l.PY1.span,
        {
          className: h().swapText,
          initial: !t2 && {
            opacity: 0,
            y: "0.3em",
            filter: `blur(${p.T.blur.soft}px)`
          },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
            opacity: 0,
            y: "-0.3em",
            filter: `blur(${p.T.blur.subtle}px)`,
            transition: v
          },
          transition: t2 ? { duration: 0 } : j,
          children: e2
        },
        e2
      )
    });
  }
  function g({ name: e2, reduced: t2 }) {
    let a2 = (0, r.useRef)(null), i2 = (0, r.useRef)(0), s2 = (0, c.d)("auto");
    return (0, r.useEffect)(() => {
      let e3 = a2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => {
        i2.current = e3.offsetWidth;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useLayoutEffect)(() => {
      let e3 = s2.get(), n2 = a2.current?.offsetWidth ?? 0, r2 = "number" == typeof e3 ? e3 : i2.current;
      if (i2.current = n2, t2 || !r2 || !n2 || 1 > Math.abs(r2 - n2))
        return void s2.jump("auto");
      s2.jump(r2);
      let o2 = (0, u.i)(s2, n2, {
        ...p.T.spring.morph,
        onComplete: () => s2.jump("auto")
      });
      return () => o2.stop();
    }, [e2, t2, s2]), (0, n.jsxs)(l.PY1.span, {
      className: `${h().swap} ${h().filename}`,
      style: { width: s2 },
      children: [
        (0, n.jsx)("span", {
          ref: a2,
          className: h().sizer,
          "aria-hidden": "true",
          children: e2
        }),
        (0, n.jsx)("span", {
          className: h().swapStack,
          "aria-hidden": "true",
          children: (0, n.jsx)(k, { value: e2, reduced: t2 })
        }),
        (0, n.jsx)("span", { className: h().srOnly, children: e2 })
      ]
    });
  }
  function N({ code: e2, filename: t2, language: a2 = "tsx", maxLines: f2 }) {
    let w = a2.toLowerCase().replace(/^\./, ""), T = (0, d.I)() ?? false, E = (0, r.useId)(), C = e2.split("\n").length, $ = null != f2 && f2 > 0 && C > f2, [R, S] = (0, r.useState)(false), L = !$ || R, O = (0, r.useRef)(null), W = (0, r.useRef)(null), P = (0, c.d)(L ? "auto" : "var(--code-collapsed)"), z = (0, r.useRef)({ open: L, reduced: T }), Y = (0, r.useRef)(() => {
    });
    (0, r.useLayoutEffect)(() => {
      let e3 = O.current;
      if (!e3) return;
      let t3 = (e4) => {
        let t4 = W.current;
        if (!t4) return;
        let a4 = z.current.open ? t4.full : t4.collapsed;
        e4 || z.current.reduced || "number" != typeof P.get() ? P.jump(a4) : (0, u.i)(P, a4, p.T.spring.smooth);
      }, a3 = new ResizeObserver(() => {
        let a4 = getComputedStyle(e3), n2 = e3.offsetHeight, r2 = f2 ? Math.min(
          n2,
          Math.round(
            f2 * parseFloat(a4.lineHeight) + parseFloat(a4.paddingTop) + parseFloat(a4.paddingBottom)
          )
        ) : n2, i2 = !W.current;
        W.current = { full: n2, collapsed: r2 }, t3(i2);
      });
      return a3.observe(e3), Y.current = t3, () => a3.disconnect();
    }, [P, f2]), (0, r.useLayoutEffect)(() => {
      z.current = { open: L, reduced: T }, Y.current(false);
    }, [L, T]);
    let A = [`Show all ${C} lines`, "Show fewer lines"];
    return (0, n.jsxs)("section", {
      className: h().block,
      "aria-label": t2 ? `${t2} source code` : `${w} source code`,
      style: f2 ? { "--code-lines": f2 } : void 0,
      children: [
        (0, n.jsxs)("header", {
          className: h().header,
          children: [
            (0, n.jsxs)("div", {
              className: h().file,
              children: [
                (0, n.jsx)(i.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, n.jsx)(g, { name: t2 ?? "Source code", reduced: T }),
                (0, n.jsx)("span", { className: h().language, children: w })
              ]
            }),
            (0, n.jsx)(_.CopyButton, { value: e2, label: "Copy code" })
          ]
        }),
        (0, n.jsx)(l.PY1.div, {
          className: h().viewport,
          style: { height: P },
          children: (0, n.jsx)("pre", {
            ref: O,
            id: E,
            className: h().pre,
            tabIndex: 0,
            "aria-label": "Selectable source code",
            children: (0, n.jsx)(o.N, {
              initial: false,
              mode: "popLayout",
              children: (0, n.jsx)(
                l.PY1.code,
                {
                  className: h().code,
                  initial: !T && { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  exit: T ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: v },
                  transition: T ? { duration: 0 } : j,
                  children: (function(e3, t3) {
                    let a3 = [], i2 = 0;
                    for (let s2 of e3.matchAll(x)) {
                      let o2 = s2[0], l2 = s2.index ?? 0;
                      i2 < l2 && a3.push(e3.slice(i2, l2));
                      let c2 = (function(e4, t4, a4, n2) {
                        if (e4.startsWith("//") || e4.startsWith("/*") || e4.startsWith("<!--"))
                          return "comment";
                        if (e4.startsWith('"') || e4.startsWith("'") || e4.startsWith("`"))
                          return "json" === n2 && /^\s*:/.test(t4.slice(a4 + e4.length)) ? "property" : "string";
                        if (/^\d/.test(e4)) return "number";
                        if (m.test(e4) || y.test(e4)) return "keyword";
                        if (b.test(e4)) return "type";
                        if (/^[{}[\]();,.<>:=+*/!?|&-]$/.test(e4))
                          return "punctuation";
                        let r2 = t4.slice(0, a4), i3 = t4.slice(a4 + e4.length);
                        return ("tsx" === n2 || "jsx" === n2 || "html" === n2 || "vue" === n2) && /<\/?$/.test(r2) ? "tag" : /^\s*\(/.test(i3) && "json" !== n2 ? "function" : ("css" === n2 || "tsx" === n2 || "jsx" === n2) && /^\s*[:=]/.test(i3) ? "property" : void 0;
                      })(o2, e3, l2, t3);
                      a3.push(
                        c2 ? (0, n.jsx)(
                          "span",
                          { className: h()[c2], children: o2 },
                          `${l2}-${o2}`
                        ) : (0, n.jsx)(
                          r.Fragment,
                          { children: o2 },
                          `${l2}-${o2}`
                        )
                      ), i2 = l2 + o2.length;
                    }
                    return i2 < e3.length && a3.push(e3.slice(i2)), a3;
                  })(e2, w)
                },
                e2
              )
            })
          })
        }),
        $ && (0, n.jsxs)("button", {
          type: "button",
          className: h().expand,
          "aria-expanded": R,
          "aria-controls": E,
          onClick: () => S((e3) => !e3),
          children: [
            (0, n.jsxs)("span", {
              className: h().swap,
              "aria-hidden": "true",
              children: [
                A.map(
                  (e3) => (0, n.jsx)(
                    "span",
                    { className: h().reserve, children: e3 },
                    e3
                  )
                ),
                (0, n.jsx)("span", {
                  className: h().swapStack,
                  children: (0, n.jsx)(k, { value: A[+!!R], reduced: T })
                })
              ]
            }),
            (0, n.jsx)("span", { className: h().srOnly, children: A[+!!R] }),
            (0, n.jsx)(l.PY1.span, {
              className: h().chevron,
              "aria-hidden": "true",
              initial: false,
              animate: { rotate: 180 * !!R },
              transition: T ? { duration: 0 } : p.T.spring.snappy,
              children: (0, n.jsx)(s.A, { size: 16, strokeWidth: 1.75 })
            })
          ]
        })
      ]
    });
  }
};

__m(__module,__exports,__require);
});
A.reg(43298, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
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
A.reg(50041, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { DocsSidebar: () => eh, default: () => em });
  var i = a(95155), n = a(12115), r = a(40623), s = a(28245), o = a(55809), d = a(92171), l = a(25354), c = a(18310), u = a(57700), p = a(80642), h = a(44825), m = a(17082), f = a(71019), g = a(72974), y = a(28786), b = a(76721), _ = a(51811);
  let x = {
    name: "table-of-contents",
    size: 24,
    node: [
      ["path", { d: "M16 5H3", key: "m91uny" }],
      ["path", { d: "M16 12H3", key: "1a2rj7" }],
      ["path", { d: "M16 19H3", key: "zzsher" }],
      ["path", { d: "M21 5h.01", key: "wa75ra" }],
      ["path", { d: "M21 12h.01", key: "msek7k" }],
      ["path", { d: "M21 19h.01", key: "qvbq2j" }]
    ]
  };
  x.node;
  let v = (0, _.A)(x);
  var w = a(12363), j = a(11012), k = a(14577), T = a(78780), N = a(64577), A = a(9005), S = a(96304), R = a(92218), C = a(90034), E = a(51288), P = a(36058), $ = a(73474), I = a(60466), H = a(43298), L = a(7770), M = a(26874), D = a.n(M);
  let z = {
    ava: { name: "Ava Mitchell", photo: "media/people/ava-mitchell.svg" },
    emma: { name: "Emma Collins", photo: "media/people/emma-collins.svg" },
    marcus: {
      name: "Marcus Johnson",
      photo: "media/people/marcus-johnson.svg"
    },
    jasmine: {
      name: "Jasmine Brooks",
      photo: "media/people/jasmine-brooks.svg"
    },
    sofia: {
      name: "Sofia Ramirez",
      photo: "media/people/sofia-ramirez.svg"
    }
  }, q = "4.12", W = [
    { id: "4.12", label: "v4.12 (latest)" },
    { id: "4.11", label: "v4.11" },
    { id: "3.9", label: "v3.9 (legacy)" }
  ], B = { "3.9": 1, "4.11": 2, "4.12": 3 }, O = [
    {
      id: "start",
      title: "Getting started",
      icon: h.A,
      pages: [
        {
          id: "introduction",
          title: "Introduction",
          author: "emma",
          updated: "Aug 4, 2026",
          lede: "Halden is a commerce API for catalogs, orders, and payments. Every object is a REST resource with a predictable URL and a JSON response.",
          sections: [
            {
              id: "base-url",
              title: "Base URL",
              text: [
                "All requests go to `https://api.halden.example/v4` over HTTPS. Calls over plain HTTP are refused rather than redirected, so a leaked key never travels unencrypted."
              ]
            },
            {
              id: "modes",
              title: "Test and live mode",
              text: [
                "Every account has a sandbox. Keys that start with `sk_test_` only touch test data, so you can build and demo a full checkout without moving money."
              ]
            }
          ]
        },
        {
          id: "quickstart",
          title: "Quickstart",
          author: "marcus",
          updated: "Sep 9, 2026",
          lede: "Make your first request in about five minutes: create a key, install the SDK, and list your products.",
          sections: [
            {
              id: "create-key",
              title: "Create an API key",
              text: [
                "Open Developers \u2192 API keys and choose Create secret key. Copy it right away, because Halden shows a secret key only once."
              ]
            },
            {
              id: "install",
              title: "Install the SDK",
              text: [
                "The Node SDK supports Node 18 and later. The Python and Go clients use the same method names."
              ],
              code: { code: "npm install @halden/node", language: "bash" }
            },
            {
              id: "first-request",
              title: "Make your first request",
              text: [
                "Lists come back newest first, with a cursor you pass as `starting_after` to fetch the next page."
              ],
              code: {
                file: "list-products.ts",
                language: "ts",
                code: `import { Halden } from "@halden/node";

const halden = new Halden(process.env.HALDEN_SECRET_KEY!);
const products = await halden.products.list({ limit: 3 });

console.log(products.data.map((product) => product.name));`
              }
            },
            {
              id: "go-live",
              title: "Go live",
              text: [
                "Swap your `sk_test_` key for an `sk_live_` key and register a production webhook endpoint. Nothing else in your code changes."
              ]
            }
          ]
        },
        {
          id: "authentication",
          title: "Authentication",
          author: "jasmine",
          updated: "Aug 26, 2026",
          lede: "Authenticate every request with a secret key in the Authorization header.",
          sections: [
            {
              id: "key-types",
              title: "Secret and publishable keys",
              text: [
                "Secret keys can read and write everything in your account and must stay on your server. Publishable keys start with `pk_` and can only create checkout sessions from the browser."
              ]
            },
            {
              id: "send",
              title: "Send the key",
              text: [
                "Pass the key as a bearer token. Requests without a valid key return 401 with the code `invalid_api_key`."
              ],
              code: {
                language: "bash",
                code: `curl https://api.halden.example/v4/orders \\
  -H "Authorization: Bearer sk_test_51Hq2Lx8vYc"`
              }
            },
            {
              id: "restricted",
              title: "Restricted keys",
              text: [
                "Give each service only what it needs. A restricted key for your warehouse can read orders and update inventory, and nothing else."
              ]
            },
            {
              id: "rotate",
              title: "Rotate a key",
              text: [
                "Rolling a key issues a new one and keeps the old key valid for up to 7 days, so you can deploy the change without downtime."
              ]
            }
          ]
        },
        {
          id: "rate-limits",
          title: "Rate limits",
          author: "jasmine",
          updated: "Jul 30, 2026",
          lede: "Each live key can make 100 read and 50 write requests per second.",
          sections: [
            {
              id: "429",
              title: "Handle 429 responses",
              text: [
                "Over the limit, the API answers with 429 and a `Retry-After` header in seconds. Wait that long, then retry with the same idempotency key."
              ]
            },
            {
              id: "headroom",
              title: "Watch your headroom",
              text: [
                "Every response carries `RateLimit-Remaining` and `RateLimit-Reset`, so a busy import can slow down before it reaches the limit."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "resources",
      title: "Resources",
      icon: m.A,
      pages: [
        {
          id: "products",
          title: "Products",
          author: "sofia",
          updated: "Sep 2, 2026",
          lede: "A product is something you sell, with a variant for each size, color, or material.",
          sections: [
            {
              id: "variants",
              title: "Variants and prices",
              text: [
                "Each variant has its own SKU, stock count, and a price in every currency you sell in."
              ]
            },
            {
              id: "archive",
              title: "Archive instead of delete",
              text: [
                "Products that appear on past orders can't be deleted. Archive them to hide them from your storefront and keep order history intact."
              ]
            }
          ]
        },
        {
          id: "orders",
          title: "Orders",
          author: "marcus",
          updated: "Aug 21, 2026",
          lede: "An order records what a customer bought, what they paid, and where it ships.",
          sections: [
            {
              id: "lifecycle",
              title: "Order lifecycle",
              text: [
                "Orders move from `pending` to `paid`, `fulfilled`, and `delivered`. A refund can happen at any point after payment."
              ]
            },
            {
              id: "expand",
              title: "Expand related objects",
              text: [
                "Pass `expand[]=customer` to receive the full customer in the same response instead of an ID."
              ]
            }
          ]
        },
        {
          id: "customers",
          title: "Customers",
          author: "sofia",
          updated: "Jul 14, 2026",
          lede: "Customers keep contact details, saved addresses, and payment methods for returning buyers.",
          sections: [
            {
              id: "find",
              title: "Find a customer",
              text: [
                "Search by email with `GET /v4/customers?email=`. Matching is exact and ignores case."
              ]
            },
            {
              id: "erase",
              title: "Erase personal data",
              text: [
                "Erasing a customer removes their personal data within 30 days. Their past orders keep only the country and totals."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "payments",
      title: "Payments",
      icon: f.A,
      pages: [
        {
          id: "payment-intents",
          title: "Payment intents",
          author: "emma",
          updated: "Sep 11, 2026",
          since: "4.11",
          lede: "A payment intent tracks one attempt to collect money, from authorization to capture.",
          sections: [
            {
              id: "confirm",
              title: "Confirm on the client",
              text: [
                "Create the intent on your server, then confirm it in the browser with its client secret. If the bank asks for authentication, it happens in between."
              ]
            },
            {
              id: "capture",
              title: "Capture later",
              text: [
                "Set `capture_method` to `manual` to hold funds and capture when the order ships. Uncaptured authorizations expire after 7 days."
              ]
            }
          ]
        },
        {
          id: "charges",
          title: "Charges",
          author: "emma",
          updated: "Mar 3, 2026",
          until: "3.9",
          lede: "In v3, a charge moves money in one step and can't pause for bank authentication.",
          sections: [
            {
              id: "move",
              title: "Move to payment intents",
              text: [
                "Charges keep working in v3.9. New integrations should use payment intents, which handle bank authentication without extra code."
              ]
            },
            {
              id: "refund-charge",
              title: "Refund a charge",
              text: [
                "Refunds use the same `/refunds` endpoint. Pass `charge` instead of `payment_intent`."
              ]
            }
          ]
        },
        {
          id: "refunds",
          title: "Refunds",
          author: "ava",
          updated: "Aug 18, 2026",
          lede: "Refund all or part of a payment. Money returns to the original payment method in 5 to 10 business days.",
          sections: [
            {
              id: "partial",
              title: "Partial refunds",
              text: [
                "Pass an `amount` in the smallest currency unit. You can issue several partial refunds until the payment is fully refunded."
              ]
            },
            {
              id: "reasons",
              title: "Refund reasons",
              text: [
                "Set `reason` to `duplicate`, `fraudulent`, or `requested_by_customer`. Fraudulent refunds also block the card for future payments."
              ]
            }
          ]
        },
        {
          id: "disputes",
          title: "Disputes",
          author: "ava",
          updated: "Sep 18, 2026",
          since: "4.12",
          lede: "When a customer disputes a payment with their bank, Halden opens a dispute and holds the amount.",
          sections: [
            {
              id: "evidence",
              title: "Submit evidence",
              text: [
                "Upload receipts, shipping confirmation, and customer messages before the due date. You can submit once, so send everything together."
              ]
            },
            {
              id: "outcomes",
              title: "Dispute outcomes",
              text: [
                "Banks usually decide within 60 to 75 days. A won dispute returns the held amount and the dispute fee."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "webhooks",
      title: "Webhooks",
      icon: g.A,
      pages: [
        {
          id: "webhooks-overview",
          title: "Overview",
          author: "marcus",
          updated: "Sep 2, 2026",
          lede: "Webhooks tell your server when something happens in your account, such as a paid order or a new refund.",
          sections: [
            {
              id: "register",
              title: "Register an endpoint",
              text: [
                "Add an HTTPS URL under Developers \u2192 Webhooks and choose the events it should receive. Each endpoint gets its own signing secret."
              ]
            },
            {
              id: "respond",
              title: "Respond quickly",
              text: [
                "Return a 2xx status within 10 seconds, then do slow work in a background job. Slow responses count as failures and are retried."
              ]
            }
          ]
        },
        {
          id: "verify-signatures",
          title: "Verify signatures",
          author: "ava",
          updated: "Sep 18, 2026",
          lede: "Every webhook request is signed, so you can confirm it came from Halden and wasn't changed on the way.",
          sections: [
            {
              id: "how",
              title: "How signing works",
              text: [
                "Each request carries a `Halden-Signature` header with a timestamp and an HMAC-SHA256 signature. The signature covers the timestamp and the raw request body, computed with your endpoint's signing secret."
              ],
              code: {
                file: "Request header",
                language: "http",
                code: "Halden-Signature: t=1758451200,v1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd"
              }
            },
            {
              id: "secret",
              title: "Find your signing secret",
              text: [
                "Each endpoint has its own secret that starts with `whsec_`. You'll find it under Developers \u2192 Webhooks, in the endpoint's details.",
                "Rolling a secret keeps the previous one valid for 24 hours, so events sent during a deploy still verify."
              ]
            },
            {
              id: "sdk",
              title: "Verify with the SDK",
              text: [
                "Pass the raw body, not parsed JSON. Parsing and serializing again changes the whitespace, and the signature no longer matches."
              ],
              code: {
                file: "app/webhooks/route.ts",
                language: "ts",
                code: `import { verifyWebhook } from "@halden/node";

const secret = process.env.HALDEN_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text();
  const event = verifyWebhook(body, request.headers, secret);

  if (event.type === "order.paid") await fulfil(event.data.order);
  return new Response(null, { status: 204 });
}`
              },
              note: "Test locally with `halden listen --forward-to localhost:3000/webhooks`. The CLI signs each event with a temporary secret it prints on start."
            },
            {
              id: "manual",
              title: "Verify without the SDK",
              text: [
                "If there's no SDK for your language, verification takes four steps."
              ],
              steps: [
                "Split the header on commas and read `t` and `v1`.",
                "Join `t`, a period, and the raw body into one string.",
                "Compute an HMAC-SHA256 of that string with your signing secret.",
                "Compare the result with `v1`."
              ]
            },
            {
              id: "constant-time",
              title: "Compare signatures in constant time",
              text: [
                "Use `timingSafeEqual` or your language's equivalent. A plain string comparison stops at the first byte that differs, which can reveal how much of a forged signature was right."
              ],
              code: {
                file: "verify.ts",
                language: "ts",
                code: `import { createHmac, timingSafeEqual } from "node:crypto";

const expected = createHmac("sha256", secret).update(\`\${t}.\${body}\`).digest();
const valid = timingSafeEqual(expected, Buffer.from(v1, "hex"));`
              }
            },
            {
              id: "replay",
              title: "Reject old events",
              text: [
                "Refuse requests whose timestamp is more than 5 minutes old, so a captured request can't be replayed later. The SDKs use a 300 second tolerance; pass `tolerance` to change it."
              ]
            }
          ]
        },
        {
          id: "retries",
          title: "Retries and backoff",
          author: "marcus",
          updated: "Sep 4, 2026",
          lede: "If your endpoint doesn't answer with a 2xx status, Halden retries with growing delays for up to 72 hours.",
          sections: [
            {
              id: "schedule",
              title: "Retry schedule",
              text: [
                "Each attempt carries the same event ID and a fresh signature timestamp."
              ],
              steps: [
                "After 1 minute",
                "After 5 minutes",
                "After 30 minutes",
                "After 2 hours",
                "Then every 8 hours until 72 hours have passed"
              ]
            },
            {
              id: "idempotent",
              title: "Make handlers idempotent",
              text: [
                "Store each event ID once you've handled it and skip duplicates. Retries and network timeouts can deliver the same event twice."
              ],
              code: {
                file: "handle-event.ts",
                language: "ts",
                code: `if (await db.events.has(event.id)) return new Response(null, { status: 200 });

await handle(event);
await db.events.add(event.id);`
              }
            },
            {
              id: "disabled",
              title: "Disabled endpoints",
              text: [
                "An endpoint that fails every attempt for 3 days is turned off, and the account owner gets an email. Fix the endpoint, then turn it back on."
              ]
            },
            {
              id: "replay-missed",
              title: "Replay missed events",
              text: [
                "Open the endpoint in the dashboard, filter by failed, and choose Resend. Replays are signed with the current secret."
              ]
            }
          ]
        },
        {
          id: "event-types",
          title: "Event types",
          author: "sofia",
          updated: "Aug 12, 2026",
          since: "4.11",
          lede: "Every event has a type in the form resource.action, like `order.paid` or `refund.created`.",
          sections: [
            {
              id: "order-events",
              title: "Order events",
              text: [
                "`order.created`, `order.paid`, `order.fulfilled`, and `order.cancelled` cover the full order lifecycle."
              ]
            },
            {
              id: "wildcards",
              title: "Subscribe with wildcards",
              text: [
                "Use `order.*` to receive every order event, including ones added in later versions."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "sdks",
      title: "SDKs",
      icon: y.A,
      pages: [
        {
          id: "node",
          title: "Node.js",
          author: "jasmine",
          updated: "Sep 16, 2026",
          lede: "The official Node client is written in TypeScript, with full types for every resource.",
          sections: [
            {
              id: "node-install",
              title: "Install",
              text: ["Supports Node 18 and later, Bun, and Deno."],
              code: { code: "npm install @halden/node", language: "bash" }
            },
            {
              id: "node-retries",
              title: "Network retries",
              text: [
                "The client retries failed network calls twice with backoff. Set `maxNetworkRetries` to change it."
              ]
            }
          ]
        },
        {
          id: "python",
          title: "Python",
          author: "emma",
          updated: "Aug 29, 2026",
          lede: "A typed client for Python 3.9 and later, with sync and async interfaces.",
          sections: [
            {
              id: "python-install",
              title: "Install",
              text: [
                "Wheels are published for every supported Python version."
              ],
              code: { code: "pip install halden", language: "bash" }
            },
            {
              id: "python-async",
              title: "Async client",
              text: [
                "Import `AsyncHalden` to call the same methods with `await` inside asyncio applications."
              ]
            }
          ]
        },
        {
          id: "go",
          title: "Go",
          author: "marcus",
          updated: "Sep 18, 2026",
          since: "4.12",
          lede: "A Go module with context support on every call and typed errors you can match with `errors.As`.",
          sections: [
            {
              id: "go-install",
              title: "Install",
              text: ["Requires Go 1.22 or later."],
              code: {
                code: "go get github.com/halden/halden-go/v4",
                language: "bash"
              }
            },
            {
              id: "go-errors",
              title: "Handle errors",
              text: [
                "API errors return `*halden.Error` with the HTTP status, a code like `card_declined`, and the request ID for support."
              ]
            }
          ]
        }
      ]
    }
  ], Y = O.flatMap((e2) => e2.pages), F = new Map(Y.map((e2) => [e2.id, e2])), U = new Map(O.flatMap((e2) => e2.pages.map((t2) => [t2.id, e2]))), K = (e2, t2) => (!e2.since || B[t2] >= B[e2.since]) && (!e2.until || B[t2] <= B[e2.until]), V = { duration: 0 }, G = (e2) => `blur(${e2}px)`, J = { duration: L.T.duration.standard, ease: [...L.T.ease.enter] }, Z = { height: 0, opacity: 0, overflow: "hidden" }, X = {
    height: "auto",
    opacity: 1,
    transitionEnd: { overflow: "visible" },
    transition: {
      height: L.T.spring.smooth,
      opacity: { duration: 0.22, delay: 0.04, ease: [...L.T.ease.standard] }
    }
  }, Q = {
    ...Z,
    transition: {
      height: L.T.spring.smooth,
      opacity: { duration: 0.14, ease: [...L.T.ease.standard] }
    }
  }, ee = {
    height: "auto",
    opacity: 1,
    transitionEnd: { overflow: "visible" },
    transition: V
  }, et = { ...Z, transition: V }, ea = (e2) => ({ initial: Z, animate: e2 ? ee : X, exit: e2 ? et : Q }), ei = { opacity: 0, y: "0.35em", filter: G(L.T.blur.soft) }, en = {
    opacity: 0,
    y: "-0.35em",
    filter: G(L.T.blur.subtle),
    transition: { duration: 0.14, ease: [...L.T.ease.standard] }
  }, er = { opacity: 1, y: "0em", filter: G(0) };
  function es({
    enabled: e2 = true,
    label: t2,
    note: a2,
    shortcut: s2,
    side: o2 = "right",
    children: d2
  }) {
    let [l2, c2] = (0, n.useState)(false);
    return !e2 && l2 && c2(false), (0, i.jsxs)(r.bL, {
      open: e2 && l2,
      onOpenChange: (t3) => c2(t3 && e2),
      children: [
        (0, i.jsx)(r.l9, { asChild: true, children: d2 }),
        (0, i.jsx)(r.ZL, {
          children: (0, i.jsxs)(r.UC, {
            className: D().tip,
            side: o2,
            sideOffset: "right" === o2 ? 14 : 8,
            collisionPadding: 8,
            children: [
              t2,
              a2 && (0, i.jsx)("span", { className: D().tipNote, children: a2 }),
              s2 && (0, i.jsx)("kbd", { children: s2 })
            ]
          })
        })
      ]
    });
  }
  function eo({ collapsed: e2, reduce: t2 }) {
    return (0, i.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("rect", {
          x: "2.75",
          y: "3.75",
          width: "14.5",
          height: "12.5",
          rx: "3.5"
        }),
        (0, i.jsx)(l.PY1.path, {
          d: "M8.25 4.25v11.5",
          initial: false,
          animate: { x: e2 ? -2.5 : 0 },
          transition: t2 ? V : L.T.spring.smooth
        })
      ]
    });
  }
  function ed({ text: e2 }) {
    return (0, i.jsx)(i.Fragment, {
      children: e2.split("`").map(
        (e3, t2) => t2 % 2 ? (0, i.jsx)("code", { className: D().inlineCode, children: e3 }, t2) : (0, i.jsx)(n.Fragment, { children: e3 }, t2)
      )
    });
  }
  function el({ text: e2, query: t2 }) {
    if (!t2) return (0, i.jsx)(i.Fragment, { children: e2 });
    let a2 = e2.toLowerCase(), n2 = [], r2 = 0;
    for (let s2 = a2.indexOf(t2); -1 !== s2; s2 = a2.indexOf(t2, r2))
      s2 > r2 && n2.push(e2.slice(r2, s2)), n2.push((0, i.jsx)("mark", { children: e2.slice(s2, s2 + t2.length) }, s2)), r2 = s2 + t2.length;
    return r2 < e2.length && n2.push(e2.slice(r2)), (0, i.jsx)(i.Fragment, { children: n2 });
  }
  function ec({ children: e2, className: t2 }) {
    let a2 = (0, c.I)(), r2 = (0, n.useRef)(null), o2 = (0, n.useRef)(null), u2 = (0, s.d)("auto");
    return (0, n.useLayoutEffect)(() => {
      let e3 = r2.current, t3 = o2.current;
      if (!e3 || !t3) return;
      let i2 = t3.offsetHeight, n2 = t3.offsetWidth, s2 = new ResizeObserver(() => {
        let r3 = t3.offsetHeight, s3 = t3.offsetWidth !== n2;
        if (n2 = t3.offsetWidth, r3 === i2) return;
        let o3 = u2.get(), l2 = "number" == typeof o3 ? o3 : i2;
        (i2 = r3, a2 || s3) ? u2.jump("auto") : (e3.style.height = `${l2}px`, (0, d.i)(u2, [l2, r3], {
          ...L.T.spring.smooth,
          onComplete: () => u2.jump("auto")
        }));
      });
      return s2.observe(t3), () => s2.disconnect();
    }, [u2, a2]), (0, i.jsx)(l.PY1.div, {
      ref: r2,
      className: t2,
      style: { height: u2, overflow: "clip" },
      children: (0, i.jsx)("div", {
        ref: o2,
        className: D().fitInner,
        children: e2
      })
    });
  }
  function eu({
    id: e2,
    version: t2,
    activeId: a2,
    expanded: r2,
    rail: s2,
    toggle: o2,
    onExpand: d2,
    onToggle: h2,
    onOpen: m2
  }) {
    let f2 = (0, c.I)(), g2 = (0, n.useId)(), [y2, _2] = (0, n.useState)(""), [x2, v2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), w2 = (0, n.useRef)(null), j2 = (0, n.useRef)(null), k2 = y2.trim().toLowerCase(), T2 = (0, n.useMemo)(
      () => O.flatMap((e3) => {
        let a3 = e3.pages.filter((e4) => K(e4, t2));
        if (!k2) return [{ group: e3, results: a3.map((e4) => ({ page: e4 })) }];
        let i2 = e3.title.toLowerCase().includes(k2), n2 = a3.flatMap((e4) => {
          if (i2 || e4.title.toLowerCase().includes(k2))
            return [{ page: e4 }];
          let t3 = e4.sections.find(
            (e5) => e5.title.toLowerCase().includes(k2)
          );
          return t3 ? [{ page: e4, heading: t3 }] : [];
        });
        return n2.length ? [{ group: e3, results: n2 }] : [];
      }),
      [t2, k2]
    ), N2 = T2.reduce((e3, t3) => e3 + t3.results.length, 0);
    function A2(e3) {
      _2(e3), v2(/* @__PURE__ */ new Set());
    }
    function S2(e3, t3) {
      if (s2) {
        if (!t3) return;
        d2();
      }
      if (!k2) return h2(e3, t3);
      v2((a3) => {
        let i2 = new Set(a3);
        return t3 ? i2.delete(e3) : i2.add(e3), i2;
      });
    }
    (0, n.useEffect)(() => {
      let e3 = w2.current, t3 = e3?.querySelector(`[data-page="${a2}"]`);
      if (!e3 || !t3) return;
      let i2 = t3.getBoundingClientRect().top - e3.getBoundingClientRect().top;
      (i2 < 8 || i2 + 40 > e3.clientHeight) && e3.scrollTo({
        top: e3.scrollTop + i2 - e3.clientHeight / 3,
        behavior: f2 ? "auto" : "smooth"
      });
    }, [a2, f2]);
    let R2 = () => Array.from(w2.current?.querySelectorAll("[data-nav-item]") ?? []);
    return (0, i.jsxs)("div", {
      className: D().navInner,
      children: [
        (0, i.jsxs)("div", {
          className: D().searchRow,
          children: [
            (0, i.jsx)("div", {
              className: D().searchClip,
              "data-rail-hidden": "",
              inert: s2,
              children: (0, i.jsx)("div", {
                className: D().search,
                children: (0, i.jsx)(H.L, {
                  ref: j2,
                  label: "Search docs",
                  placeholder: "Search docs",
                  value: y2,
                  onValueChange: A2,
                  onKeyDown: function(e3) {
                    if ("Escape" === e3.key && y2) e3.preventDefault(), A2("");
                    else if ("Enter" === e3.key && k2) {
                      let t3 = T2[0]?.results[0];
                      if (!t3) return;
                      e3.preventDefault(), m2(t3.page.id, t3.heading?.id);
                    } else if ("ArrowDown" === e3.key) {
                      let t3 = R2()[0];
                      if (!t3) return;
                      e3.preventDefault(), t3.focus();
                    }
                  },
                  "aria-controls": `${e2}-tree`,
                  autoComplete: "off",
                  spellCheck: false
                })
              })
            }),
            o2
          ]
        }),
        (0, i.jsxs)(l.PY1.nav, {
          ref: w2,
          id: `${e2}-tree`,
          className: D().nav,
          "aria-label": "Documentation",
          layoutScroll: true,
          onKeyDown: function(e3) {
            let t3 = R2(), a3 = t3.indexOf(document.activeElement);
            if (-1 === a3) return;
            let i2 = t3[a3].dataset.group;
            if (i2 && ("ArrowRight" === e3.key || "ArrowLeft" === e3.key)) {
              e3.preventDefault(), S2(i2, "ArrowRight" === e3.key);
              return;
            }
            let n2 = "ArrowDown" === e3.key ? t3[a3 + 1] : "ArrowUp" === e3.key ? t3[a3 - 1] ?? j2.current : "Home" === e3.key ? t3[0] : "End" === e3.key ? t3[t3.length - 1] : void 0;
            n2 && (e3.preventDefault(), n2.focus());
          },
          children: [
            (0, i.jsx)(u.o, {
              id: g2,
              children: (0, i.jsx)(p.N, {
                initial: false,
                children: T2.map(({ group: n2, results: o3 }) => {
                  let d3 = !s2 && (k2 ? !x2.has(n2.id) : r2.has(n2.id)), c2 = o3.find((e3) => e3.page.id === a2)?.page, u2 = !d3 && !!c2, h3 = s2 && !!c2, g3 = n2.icon;
                  return (0, i.jsx)(
                    l.PY1.div,
                    {
                      className: D().group,
                      ...ea(f2),
                      children: (0, i.jsxs)("div", {
                        className: D().groupInner,
                        children: [
                          (0, i.jsx)(es, {
                            enabled: s2,
                            label: n2.title,
                            note: c2?.title,
                            children: (0, i.jsxs)("button", {
                              type: "button",
                              className: D().groupButton,
                              "data-nav-item": true,
                              "data-group": n2.id,
                              "data-lit": h3 || void 0,
                              "data-holds": u2 || void 0,
                              "aria-expanded": d3,
                              "aria-controls": d3 ? `${e2}-${n2.id}` : void 0,
                              onClick: () => S2(n2.id, !d3),
                              children: [
                                h3 && (0, i.jsx)(l.PY1.span, {
                                  layoutId: "docs-active-page",
                                  className: D().groupHighlight,
                                  style: { borderRadius: 8 },
                                  transition: f2 ? V : L.T.spring.morph,
                                  "aria-hidden": "true"
                                }),
                                (0, i.jsx)(g3, {
                                  className: D().groupIcon,
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, i.jsx)("span", {
                                  className: D().groupLabel,
                                  children: (0, i.jsx)(el, {
                                    text: n2.title,
                                    query: k2
                                  })
                                }),
                                u2 && (0, i.jsx)("span", {
                                  className: D().activeDot,
                                  children: (0, i.jsx)("span", {
                                    className: D().srOnly,
                                    children: "Contains the current page"
                                  })
                                }),
                                (0, i.jsx)(b.A, {
                                  className: D().chevron,
                                  size: 14,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              ]
                            })
                          }),
                          (0, i.jsx)(p.N, {
                            initial: false,
                            children: d3 && (0, i.jsx)(
                              l.PY1.div,
                              {
                                ...ea(f2),
                                children: (0, i.jsx)("ul", {
                                  id: `${e2}-${n2.id}`,
                                  className: D().pages,
                                  children: (0, i.jsx)(p.N, {
                                    initial: false,
                                    children: o3.map(
                                      ({ page: e3, heading: n3 }) => {
                                        let r3 = e3.id === a2;
                                        return (0, i.jsx)(
                                          l.PY1.li,
                                          {
                                            ...ea(f2),
                                            children: (0, i.jsxs)("button", {
                                              type: "button",
                                              className: D().page,
                                              "data-nav-item": true,
                                              "data-page": e3.id,
                                              "aria-current": r3 ? "page" : void 0,
                                              onClick: () => m2(e3.id, n3?.id),
                                              children: [
                                                r3 && !s2 && (0, i.jsx)(l.PY1.span, {
                                                  layoutId: "docs-active-page",
                                                  className: D().pageHighlight,
                                                  style: {
                                                    borderRadius: 8
                                                  },
                                                  transition: f2 ? V : L.T.spring.morph,
                                                  "aria-hidden": "true"
                                                }),
                                                (0, i.jsxs)("span", {
                                                  className: D().pageText,
                                                  children: [
                                                    (0, i.jsx)("span", {
                                                      className: D().pageTitle,
                                                      children: (0, i.jsx)(
                                                        el,
                                                        {
                                                          text: e3.title,
                                                          query: k2
                                                        }
                                                      )
                                                    }),
                                                    n3 && (0, i.jsx)("span", {
                                                      className: D().pageHeading,
                                                      children: (0, i.jsx)(
                                                        el,
                                                        {
                                                          text: n3.title,
                                                          query: k2
                                                        }
                                                      )
                                                    })
                                                  ]
                                                }),
                                                e3.since === q && t2 === q && (0, i.jsx)("span", {
                                                  className: D().pageTag,
                                                  children: (0, i.jsx)(
                                                    C.E,
                                                    {
                                                      size: "sm",
                                                      tone: "info",
                                                      children: "New"
                                                    }
                                                  )
                                                })
                                              ]
                                            })
                                          },
                                          e3.id
                                        );
                                      }
                                    )
                                  })
                                })
                              },
                              "pages"
                            )
                          })
                        ]
                      })
                    },
                    n2.id
                  );
                })
              })
            }),
            (0, i.jsx)(p.N, {
              initial: false,
              children: k2 && 0 === N2 && (0, i.jsx)(
                l.PY1.div,
                {
                  className: D().empty,
                  "data-rail-hidden": "",
                  inert: s2,
                  initial: { opacity: 0, y: 6, filter: G(L.T.blur.subtle) },
                  animate: { opacity: 1, y: 0, filter: G(0) },
                  exit: {
                    opacity: 0,
                    transition: { duration: f2 ? 0 : L.T.duration.instant }
                  },
                  transition: f2 ? V : { ...J, delay: 0.08 },
                  children: (0, i.jsxs)("div", {
                    className: D().emptyBody,
                    children: [
                      (0, i.jsxs)("p", {
                        children: ["No pages match \u201C", y2.trim(), "\u201D"]
                      }),
                      (0, i.jsx)("span", {
                        children: "Check the spelling, or try a broader word like orders or refunds."
                      }),
                      (0, i.jsx)(E.$, {
                        type: "button",
                        variant: "secondary",
                        size: "sm",
                        onClick: () => {
                          A2(""), j2.current?.focus();
                        },
                        children: "Clear search"
                      })
                    ]
                  })
                },
                "empty"
              )
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: D().srOnly,
          role: "status",
          "aria-live": "polite",
          children: k2 ? N2 ? `${N2} ${1 === N2 ? "page matches" : "pages match"} ${y2.trim()}` : `No pages match ${y2.trim()}` : ""
        })
      ]
    });
  }
  function ep({
    id: e2,
    page: t2,
    group: a2,
    version: r2,
    fallback: o2,
    prev: u2,
    next: h2,
    jump: m2,
    covered: f2,
    onOpen: g2,
    onVersion: y2
  }) {
    let _2 = (0, c.I)(), [x2, N2] = (0, n.useState)({ page: t2.id, section: t2.sections[0].id }), [A2, S2] = (0, n.useState)(false), C2 = (0, n.useRef)(null), I2 = (0, n.useRef)(null), H2 = (0, n.useRef)(/* @__PURE__ */ new Map()), M2 = (0, n.useRef)(false), W2 = (0, n.useRef)(0), B2 = (0, n.useRef)(0), O2 = (0, n.useRef)(false), Y2 = (0, s.d)(0), F2 = (0, s.d)(0), U2 = x2.page === t2.id ? x2.section : t2.sections[0].id, K2 = t2.sections.find((e3) => e3.id === U2) ?? t2.sections[0], Z2 = z[t2.author], X2 = "3.9" === r2, Q2 = r2 === q ? o2 : [
      o2,
      X2 ? "v3.9 is a legacy version and gets security fixes until March 31, 2027." : "You're reading v4.11. Version 4.12 adds disputes and the Go SDK."
    ].filter(Boolean).join(" ");
    (0, n.useEffect)(
      () => () => {
        window.clearTimeout(W2.current), cancelAnimationFrame(B2.current);
      },
      []
    ), (0, n.useLayoutEffect)(() => {
      C2.current && (C2.current.scrollTop = 0), M2.current = false;
    }, [t2.id]);
    let ee2 = (0, n.useCallback)(() => {
      let e3 = C2.current;
      if (!e3 || M2.current) return;
      let a3 = e3.getBoundingClientRect().top, i2 = Math.min(120, 0.3 * e3.clientHeight), n2 = t2.sections[0].id;
      for (let e4 of t2.sections) {
        let r3 = H2.current.get(`${t2.id}:${e4.id}`);
        r3 && r3.getBoundingClientRect().top - a3 <= i2 && (n2 = e4.id);
      }
      e3.scrollHeight - e3.clientHeight > 8 && e3.scrollTop + e3.clientHeight >= e3.scrollHeight - 8 && (n2 = t2.sections[t2.sections.length - 1].id), N2(
        (e4) => e4.page === t2.id && e4.section === n2 ? e4 : { page: t2.id, section: n2 }
      );
    }, [t2]), et2 = (0, n.useCallback)(
      (e3, a3, i2) => {
        let n2 = C2.current;
        if (!n2) return;
        let r3 = e3 ? H2.current.get(`${t2.id}:${e3}`) : void 0, s2 = r3 ? r3.getBoundingClientRect().top - n2.getBoundingClientRect().top + n2.scrollTop : 0;
        N2({ page: t2.id, section: e3 ?? t2.sections[0].id }), M2.current = true, window.clearTimeout(W2.current), W2.current = window.setTimeout(() => {
          M2.current = false;
        }, 180), n2.scrollTo({
          top: Math.max(0, s2),
          behavior: a3 && !_2 ? "smooth" : "auto"
        }), i2 && r3?.querySelector("h3")?.focus({ preventScroll: true });
      },
      [t2, _2]
    );
    (0, n.useEffect)(() => {
      if (!m2 || m2.page !== t2.id) return;
      let e3 = requestAnimationFrame(() => et2(m2.section, !m2.section, false));
      return () => cancelAnimationFrame(e3);
    }, [m2, t2.id, et2]), (0, n.useLayoutEffect)(() => {
      let e3 = I2.current;
      if (!e3) return;
      let a3 = e3.offsetWidth, i2 = (a4) => {
        let i3 = e3.querySelector(`[data-section="${t2.id}:${U2}"]`);
        if (i3) {
          if (!a4 || !O2.current || _2) {
            Y2.jump(i3.offsetTop), F2.jump(i3.offsetHeight), O2.current = true;
            return;
          }
          (0, d.i)(Y2, i3.offsetTop, L.T.spring.morph), (0, d.i)(F2, i3.offsetHeight, L.T.spring.morph);
        }
      };
      i2(true);
      let n2 = new ResizeObserver(() => {
        e3.offsetWidth !== a3 && (a3 = e3.offsetWidth, i2(false));
      });
      return n2.observe(e3), () => n2.disconnect();
    }, [t2.id, U2, _2, Y2, F2]);
    let es2 = () => {
      M2.current = false;
    };
    return (0, i.jsxs)("div", {
      className: D().main,
      inert: f2,
      children: [
        (0, i.jsxs)("div", {
          className: D().outline,
          children: [
            (0, i.jsxs)("button", {
              type: "button",
              className: D().outlineToggle,
              "aria-expanded": A2,
              "aria-controls": `${e2}-outline`,
              "aria-label": `On this page, ${K2.title}`,
              onClick: () => S2((e3) => !e3),
              children: [
                (0, i.jsx)(v, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: D().togglePrefix,
                  "aria-hidden": "true",
                  children: "On this page"
                }),
                (0, i.jsx)("span", {
                  className: D().currentSection,
                  "aria-hidden": "true",
                  children: (0, i.jsx)(p.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, i.jsx)(
                      l.PY1.span,
                      {
                        initial: ei,
                        animate: er,
                        exit: _2 ? { opacity: 0, transition: V } : en,
                        transition: _2 ? V : J,
                        children: K2.title
                      },
                      `${t2.id}:${K2.id}`
                    )
                  })
                }),
                (0, i.jsx)(w.A, {
                  className: D().toggleChevron,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, i.jsx)("div", {
              id: `${e2}-outline`,
              className: D().outlinePanel,
              "data-open": A2,
              children: (0, i.jsxs)("nav", {
                className: D().outlineNav,
                "aria-label": "On this page",
                children: [
                  (0, i.jsx)("p", {
                    className: D().outlineTitle,
                    "aria-hidden": "true",
                    children: "On this page"
                  }),
                  (0, i.jsxs)("div", {
                    ref: I2,
                    className: D().outlineBody,
                    children: [
                      (0, i.jsx)(l.PY1.span, {
                        className: D().indicator,
                        style: { y: Y2, height: F2 },
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)(p.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, i.jsx)(
                          l.PY1.ol,
                          {
                            className: D().outlineList,
                            initial: { opacity: 0, filter: G(L.T.blur.subtle) },
                            animate: { opacity: 1, filter: G(0) },
                            exit: {
                              opacity: 0,
                              transition: { duration: 0.1 * !_2 }
                            },
                            transition: _2 ? V : J,
                            children: t2.sections.map(
                              (a3) => (0, i.jsx)(
                                "li",
                                {
                                  children: (0, i.jsx)("a", {
                                    href: `#${e2}-${t2.id}-${a3.id}`,
                                    "data-section": `${t2.id}:${a3.id}`,
                                    "aria-current": a3.id === U2 ? "location" : void 0,
                                    onClick: (e3) => {
                                      e3.preventDefault(), S2(false), et2(a3.id, true, true);
                                    },
                                    children: a3.title
                                  })
                                },
                                a3.id
                              )
                            )
                          },
                          t2.id
                        )
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        (0, i.jsx)(p.N, {
          initial: false,
          children: Q2 && (0, i.jsx)(
            l.PY1.div,
            {
              className: D().bannerWrap,
              ...ea(_2),
              children: (0, i.jsxs)("div", {
                className: D().banner,
                "data-tone": X2 ? "warning" : "info",
                children: [
                  (0, i.jsx)("span", {
                    className: D().bannerIcon,
                    "aria-hidden": "true",
                    children: (0, i.jsx)(p.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsx)(
                        l.PY1.span,
                        {
                          initial: {
                            opacity: 0,
                            scale: 0.6,
                            filter: G(L.T.blur.subtle)
                          },
                          animate: { opacity: 1, scale: 1, filter: G(0) },
                          exit: {
                            opacity: 0,
                            scale: 0.6,
                            transition: {
                              duration: _2 ? 0 : L.T.duration.instant
                            }
                          },
                          transition: _2 ? V : L.T.spring.snappy,
                          children: X2 ? (0, i.jsx)(j.A, { size: 16, strokeWidth: 1.75 }) : (0, i.jsx)(k.A, {
                            size: 16,
                            strokeWidth: 1.75
                          })
                        },
                        X2 ? "warning" : "info"
                      )
                    })
                  }),
                  (0, i.jsx)(ec, {
                    className: D().bannerText,
                    children: (0, i.jsx)(p.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsx)(
                        l.PY1.p,
                        {
                          initial: ei,
                          animate: er,
                          exit: _2 ? { opacity: 0, transition: V } : en,
                          transition: _2 ? V : J,
                          children: Q2
                        },
                        Q2
                      )
                    })
                  }),
                  r2 !== q && (0, i.jsxs)(E.$, {
                    type: "button",
                    variant: "secondary",
                    size: "sm",
                    onClick: () => y2(q),
                    children: ["Use v", q]
                  })
                ]
              })
            },
            "banner"
          )
        }),
        (0, i.jsx)("div", {
          ref: C2,
          className: D().scroller,
          onScroll: function() {
            if (M2.current) {
              window.clearTimeout(W2.current), W2.current = window.setTimeout(() => {
                M2.current = false;
              }, 140);
              return;
            }
            cancelAnimationFrame(B2.current), B2.current = requestAnimationFrame(ee2);
          },
          onWheel: es2,
          onTouchStart: es2,
          children: (0, i.jsx)(p.N, {
            mode: "popLayout",
            initial: false,
            children: (0, i.jsxs)(
              l.PY1.article,
              {
                className: D().article,
                "aria-labelledby": `${e2}-${t2.id}-title`,
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, transition: { duration: 0.1 * !_2 } },
                transition: _2 ? V : { duration: 0.36, ease: [...L.T.ease.enter] },
                children: [
                  (0, i.jsx)(l.PY1.h2, {
                    id: `${e2}-${t2.id}-title`,
                    tabIndex: -1,
                    initial: { filter: G(L.T.blur.soft) },
                    animate: { filter: G(0) },
                    transition: _2 ? V : J,
                    children: t2.title
                  }),
                  (0, i.jsx)("p", {
                    className: D().lede,
                    children: (0, i.jsx)(ed, { text: t2.lede })
                  }),
                  (0, i.jsxs)("div", {
                    className: D().byline,
                    children: [
                      (0, i.jsx)(R.e, {
                        name: Z2.name,
                        src: Z2.photo,
                        size: "sm"
                      }),
                      (0, i.jsxs)("span", {
                        className: D().bylineText,
                        children: [
                          (0, i.jsx)("strong", { children: Z2.name }),
                          (0, i.jsxs)("span", {
                            children: ["Updated ", t2.updated]
                          })
                        ]
                      }),
                      (0, i.jsx)($.CopyButton, {
                        value: `https://docs.halden.example/v${r2}/${a2.id}/${t2.id}`,
                        label: "Copy link",
                        variant: "plain"
                      })
                    ]
                  }),
                  t2.sections.map(
                    (a3) => (0, i.jsxs)(
                      "section",
                      {
                        className: D().section,
                        "aria-labelledby": `${e2}-${t2.id}-${a3.id}`,
                        ref: (e3) => {
                          let i2 = `${t2.id}:${a3.id}`;
                          e3 ? H2.current.set(i2, e3) : H2.current.delete(i2);
                        },
                        children: [
                          (0, i.jsx)("h3", {
                            id: `${e2}-${t2.id}-${a3.id}`,
                            tabIndex: -1,
                            children: a3.title
                          }),
                          a3.text.map(
                            (e3) => (0, i.jsx)(
                              "p",
                              { children: (0, i.jsx)(ed, { text: e3 }) },
                              e3
                            )
                          ),
                          a3.steps && (0, i.jsx)("ol", {
                            className: D().steps,
                            children: a3.steps.map(
                              (e3) => (0, i.jsx)(
                                "li",
                                { children: (0, i.jsx)(ed, { text: e3 }) },
                                e3
                              )
                            )
                          }),
                          a3.code && (0, i.jsx)("div", {
                            className: D().code,
                            children: (0, i.jsx)(P.N, {
                              code: a3.code.code,
                              filename: a3.code.file,
                              language: a3.code.language
                            })
                          }),
                          a3.note && (0, i.jsxs)("aside", {
                            className: D().note,
                            children: [
                              (0, i.jsx)(k.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, i.jsx)("p", {
                                children: (0, i.jsx)(ed, { text: a3.note })
                              })
                            ]
                          })
                        ]
                      },
                      a3.id
                    )
                  ),
                  (0, i.jsxs)("nav", {
                    className: D().pager,
                    "aria-label": "Previous and next page",
                    children: [
                      u2 ? (0, i.jsxs)("button", {
                        type: "button",
                        className: D().pagerLink,
                        onClick: () => g2(u2.id),
                        children: [
                          (0, i.jsxs)("span", {
                            children: [
                              (0, i.jsx)(T.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Previous"
                            ]
                          }),
                          (0, i.jsx)("strong", { children: u2.title })
                        ]
                      }) : (0, i.jsx)("span", {}),
                      h2 && (0, i.jsxs)("button", {
                        type: "button",
                        className: `${D().pagerLink} ${D().pagerNext}`,
                        onClick: () => g2(h2.id),
                        children: [
                          (0, i.jsxs)("span", {
                            children: [
                              "Next",
                              (0, i.jsx)(b.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            ]
                          }),
                          (0, i.jsx)("strong", { children: h2.title })
                        ]
                      })
                    ]
                  })
                ]
              },
              t2.id
            )
          })
        })
      ]
    });
  }
  function eh({ defaultCollapsed: e2 = false, onCollapsedChange: t2 }) {
    var a2, u2;
    let h2, m2, f2, g2, y2, b2, _2 = (0, n.useId)(), x2 = (0, c.I)(), [v2, w2] = (0, n.useState)(true), j2 = x2 || v2, [k2, T2] = (0, n.useState)(e2), [R2, C2] = (0, n.useState)(false), E2 = k2 && !R2, P2 = (a2 = !!j2, h2 = (0, s.d)(+!E2), m2 = (0, o.G)(h2, (e3) => `calc(64px + (var(--full) - 64px) * ${e3})`), (0, n.useEffect)(() => {
      let e3 = +!E2;
      if (a2) return void h2.jump(e3);
      let t3 = (0, d.i)(h2, e3, L.T.spring.smooth);
      return () => t3.stop();
    }, [E2, a2, h2]), m2), $2 = (0, n.useRef)(null), H2 = (0, n.useRef)(null), M2 = (0, n.useRef)(null), [z2, B2] = (0, n.useState)(q), [J2, Z2] = (0, n.useState)("verify-signatures"), [X2, Q2] = (0, n.useState)(() => /* @__PURE__ */ new Set(["start", "webhooks"])), [ee2, et2] = (0, n.useState)(false), ea2 = R2 && ee2, ei2 = (u2 = !!j2, f2 = (0, s.d)(+!R2), g2 = (0, o.G)(
      f2,
      (e3) => e3 >= 1 ? "0px" : `calc(${(e3 - 1) * 100}% - ${(1 - e3) * 64}px)`
    ), y2 = (0, n.useRef)(R2), (0, n.useEffect)(() => {
      let e3 = R2 && !ea2 ? 0 : 1, t3 = y2.current !== R2;
      if (y2.current = R2, u2 || t3 || !R2) return void f2.jump(e3);
      let a3 = (0, d.i)(f2, e3, L.T.spring.smooth);
      return () => a3.stop();
    }, [R2, ea2, u2, f2]), { progress: f2, x: g2 }), en2 = (0, n.useRef)(null), er2 = (0, n.useRef)(null), [ed2, el2] = (0, n.useState)(null), [ec2, em2] = (0, n.useState)(null), [ef, eg] = (0, n.useState)(""), ey = (0, n.useRef)(0), eb = F.get(J2) ?? Y[0], e_ = U.get(eb.id) ?? O[0], ex = (0, n.useMemo)(() => Y.filter((e3) => K(e3, z2)), [z2]), ev = ex.findIndex((e3) => e3.id === eb.id);
    function ew(e3, t3) {
      var a3;
      let i2 = F.get(e3);
      i2 && (ey.current += 1, Z2(e3), el2({ page: e3, section: t3, key: ey.current }), em2(null), a3 = U.get(e3)?.id ?? "", Q2((e4) => e4.has(a3) ? e4 : new Set(e4).add(a3)), et2(false), eg(
        `${i2.title}${t3 ? `, ${i2.sections.find((e4) => e4.id === t3)?.title ?? ""}` : ""}`
      ), ee2 && requestAnimationFrame(
        () => document.getElementById(`${_2}-${e3}-title`)?.focus({ preventScroll: true })
      ));
    }
    let ej = (0, n.useRef)(null);
    function ek(e3) {
      if (e3 === k2) return;
      let a3 = document.activeElement;
      if (e3 && a3 instanceof HTMLElement && H2.current?.contains(a3)) {
        let e4 = a3.dataset.page ? U.get(a3.dataset.page)?.id : void 0;
        e4 ? H2.current.querySelector(`[data-group="${e4}"]`)?.focus() : a3.closest("[data-rail-hidden]") && M2.current?.focus();
      }
      T2(e3), eg(e3 ? "Sidebar collapsed" : "Sidebar expanded"), t2?.(e3);
    }
    function eT(e3) {
      et2(false), e3 && er2.current?.focus({ preventScroll: true });
    }
    (0, n.useLayoutEffect)(() => {
      let e3 = $2.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = e3.clientWidth;
        C2(t4 <= 479), t4 > 479 && et2(false);
        let a4 = t4 >= 900;
        if (ej.current === a4) return;
        let i3 = null === ej.current;
        ej.current = a4, i3 && a4 || T2(!a4);
      };
      t3();
      let a3 = requestAnimationFrame(() => w2(false)), i2 = new ResizeObserver(t3);
      return i2.observe(e3), () => {
        i2.disconnect(), cancelAnimationFrame(a3);
      };
    }, []), b2 = (0, n.useEffectEvent)((e3) => {
      if ("[" !== e3.key || e3.repeat || e3.metaKey || e3.ctrlKey || e3.altKey || e3.defaultPrevented)
        return;
      let t3 = $2.current, a3 = e3.target instanceof HTMLElement ? e3.target : null;
      if (!t3 || a3 && (a3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a3.tagName) || a3.closest('[role="menu"], [role="dialog"]')))
        return;
      let i2 = t3.getBoundingClientRect();
      !i2.width || i2.bottom < 0 || i2.top > window.innerHeight || (e3.preventDefault(), (() => {
        R2 || ek(!k2);
      })());
    }), (0, n.useEffect)(() => {
      let e3 = (e4) => b2(e4);
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, []), (0, n.useEffect)(() => {
      if (!ea2) return;
      let e3 = requestAnimationFrame(() => {
        let e4 = en2.current;
        (e4?.querySelector('[aria-current="page"]') ?? e4?.querySelector("[data-nav-item]"))?.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(e3);
    }, [ea2]);
    let eN = (0, n.useEffectEvent)((e3) => {
      if ("Escape" !== e3.key || e3.defaultPrevented) return;
      let t3 = e3.target instanceof HTMLElement ? e3.target : null, a3 = t3?.closest('[role="menu"], [role="dialog"]');
      a3 && a3 !== en2.current || (e3.preventDefault(), eT(true));
    });
    function eA(e3) {
      if (e3 === z2) return;
      if (B2(e3), K(eb, e3)) {
        em2(null), eg(`Showing v${e3}`);
        return;
      }
      let t3 = e_.pages.find((t4) => K(t4, e3)) ?? Y.find((t4) => K(t4, e3)) ?? Y[0], a3 = `${eb.title} isn't part of v${e3}, so you're on ${t3.title}.`;
      Z2(t3.id), el2(null), em2(a3), eg(`Showing v${e3}. ${a3}`);
    }
    (0, n.useEffect)(() => {
      if (!ea2) return;
      let e3 = (e4) => eN(e4);
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, [ea2]);
    let eS = (0, i.jsx)(es, {
      label: k2 ? "Expand sidebar" : "Collapse sidebar",
      shortcut: "[",
      side: E2 ? "right" : "bottom",
      children: (0, i.jsx)("button", {
        ref: M2,
        type: "button",
        className: D().railToggle,
        "aria-label": k2 ? "Expand sidebar" : "Collapse sidebar",
        "aria-expanded": !k2,
        "aria-keyshortcuts": "[",
        onClick: () => ek(!k2),
        children: (0, i.jsx)(eo, { collapsed: E2, reduce: !!j2 })
      })
    });
    return (0, i.jsx)(r.Kq, {
      delayDuration: 250,
      skipDelayDuration: 300,
      children: (0, i.jsxs)("section", {
        ref: $2,
        className: D().docs,
        "aria-label": "Halden API documentation",
        children: [
          (0, i.jsxs)("div", {
            className: D().frame,
            children: [
              (0, i.jsxs)(l.PY1.div, {
                ref: H2,
                className: D().sidebar,
                style: { width: P2 },
                "data-rail": E2 || void 0,
                children: [
                  (0, i.jsxs)(l.PY1.div, {
                    className: D().brand,
                    "data-rail-hidden": "",
                    inert: E2,
                    initial: false,
                    animate: { height: E2 ? 8 : 52 },
                    transition: j2 ? V : L.T.spring.smooth,
                    children: [
                      (0, i.jsxs)("span", {
                        className: D().wordmark,
                        children: [
                          "Halden ",
                          (0, i.jsx)("span", { children: "docs" })
                        ]
                      }),
                      (0, i.jsxs)("div", {
                        className: D().brandActions,
                        children: [
                          (0, i.jsx)("div", {
                            role: "group",
                            "aria-label": "Documentation version",
                            children: (0, i.jsx)(I.r, {
                              label: `v${z2}`,
                              items: W.map((e3) => ({
                                label: e3.label,
                                icon: e3.id === z2 ? (0, i.jsx)(N.A, {
                                  size: 15,
                                  strokeWidth: 1.75
                                }) : (0, i.jsx)("span", {
                                  className: D().menuSpacer
                                }),
                                onSelect: () => eA(e3.id)
                              }))
                            })
                          }),
                          (0, i.jsx)("button", {
                            ref: er2,
                            type: "button",
                            className: D().menuButton,
                            "aria-label": ee2 ? "Close documentation menu" : "Documentation menu",
                            "aria-expanded": ee2,
                            "aria-controls": `${_2}-panel`,
                            onClick: () => et2((e3) => !e3),
                            children: (0, i.jsx)(p.N, {
                              mode: "popLayout",
                              initial: false,
                              children: (0, i.jsx)(
                                l.PY1.span,
                                {
                                  className: D().menuIcon,
                                  initial: {
                                    opacity: 0,
                                    scale: 0.6,
                                    filter: G(L.T.blur.subtle)
                                  },
                                  animate: {
                                    opacity: 1,
                                    scale: 1,
                                    filter: G(0)
                                  },
                                  exit: {
                                    opacity: 0,
                                    scale: 0.6,
                                    filter: G(L.T.blur.subtle),
                                    transition: {
                                      duration: j2 ? 0 : L.T.duration.instant
                                    }
                                  },
                                  transition: j2 ? V : L.T.spring.snappy,
                                  children: ee2 ? (0, i.jsx)(A.A, {
                                    size: 18,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : (0, i.jsx)(S.A, {
                                    size: 18,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                },
                                ee2 ? "close" : "open"
                              )
                            })
                          })
                        ]
                      })
                    ]
                  }),
                  (0, i.jsx)(l.PY1.div, {
                    ref: en2,
                    id: `${_2}-panel`,
                    className: D().navPanel,
                    style: { x: ei2.x },
                    "data-open": ea2 || void 0,
                    inert: R2 && !ee2,
                    role: R2 ? "dialog" : void 0,
                    "aria-modal": ea2 || void 0,
                    "aria-label": R2 ? "Documentation menu" : void 0,
                    children: (0, i.jsx)(eu, {
                      id: _2,
                      version: z2,
                      activeId: eb.id,
                      expanded: X2,
                      rail: E2,
                      toggle: eS,
                      onExpand: () => ek(false),
                      onToggle: function(e3, t3) {
                        Q2((a3) => {
                          let i2 = new Set(a3);
                          return t3 ? i2.add(e3) : i2.delete(e3), i2;
                        });
                      },
                      onOpen: ew
                    })
                  })
                ]
              }),
              (0, i.jsx)(l.PY1.div, {
                className: D().scrim,
                style: { opacity: ei2.progress },
                "data-open": ea2 || void 0,
                "aria-hidden": "true",
                onClick: () => eT(true)
              }),
              (0, i.jsx)(ep, {
                id: _2,
                page: eb,
                group: e_,
                version: z2,
                fallback: ec2,
                prev: ex[ev - 1],
                next: -1 === ev ? void 0 : ex[ev + 1],
                jump: ed2,
                covered: ea2,
                onOpen: ew,
                onVersion: eA
              })
            ]
          }),
          (0, i.jsx)("p", {
            className: D().srOnly,
            role: "status",
            "aria-live": "polite",
            children: ef
          })
        ]
      })
    });
  }
  let em = eh;
}

__m(__module,__exports,__require);
});
A.reg(60466, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { r: () => f });
  var r = n(95155), a = n(12115), i = n(57793), o = n(18310), s = n(25354), l = n(80642), u = n(12363), d = n(7770), c = n(9146), m = n.n(c);
  function p({ text: e2 }) {
    let t2 = (0, o.I)(), n2 = (0, a.useRef)(null), i2 = (0, a.useRef)(null), [u2, c2] = (0, a.useState)({ width: "auto", animate: false });
    return (0, a.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([t4]) => {
        if (!t4) return;
        let n3 = e3.textContent, r2 = null !== i2.current && i2.current !== n3;
        i2.current = n3, c2({
          width: Math.ceil(
            t4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth
          ),
          animate: r2
        });
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsxs)(s.PY1.span, {
      className: m().label,
      initial: false,
      animate: { width: u2.width },
      transition: u2.animate && !t2 ? d.T.spring.morph : { duration: 0 },
      children: [
        (0, r.jsx)("span", {
          ref: n2,
          className: m().labelMeasure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, r.jsx)(l.N, {
          mode: "popLayout",
          initial: false,
          children: (0, r.jsx)(
            s.PY1.span,
            {
              className: m().labelText,
              initial: !t2 && {
                opacity: 0,
                y: "0.3em",
                filter: `blur(${d.T.blur.soft}px)`
              },
              animate: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                opacity: 0,
                y: "-0.3em",
                filter: `blur(${d.T.blur.subtle}px)`,
                transition: {
                  duration: d.T.duration.fast,
                  ease: [...d.T.ease.standard]
                }
              },
              transition: {
                duration: d.T.duration.standard,
                ease: [...d.T.ease.enter]
              },
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function f({ label: e2, items: t2, icon: n2 }) {
    let l2 = (0, o.I)(), [c2, h] = (0, a.useState)(null), _ = (0, a.useRef)(false), x = (0, a.useRef)(0);
    return (0, a.useEffect)(() => () => window.clearTimeout(x.current), []), (0, r.jsxs)(i.bL, {
      onOpenChange: (e3) => {
        e3 && (window.clearTimeout(x.current), h(null));
      },
      children: [
        (0, r.jsxs)(i.l9, {
          className: m().trigger,
          type: "button",
          children: [
            n2 && (0, r.jsx)("span", {
              className: m().triggerIcon,
              "aria-hidden": "true",
              children: n2
            }),
            (0, r.jsx)(p, { text: e2 }),
            (0, r.jsx)(u.A, {
              className: m().chevron,
              size: 15,
              strokeWidth: 1.8,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, r.jsx)(i.ZL, {
          children: (0, r.jsxs)(i.UC, {
            className: m().menu,
            sideOffset: 6,
            align: "end",
            collisionPadding: 12,
            loop: true,
            onFocus: function(e3) {
              let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitem"]') : null;
              if (window.clearTimeout(x.current), !t3) {
                x.current = window.setTimeout(
                  () => h(null),
                  70 * !!_.current
                );
                return;
              }
              let n3 = {
                top: t3.offsetTop,
                height: t3.offsetHeight,
                danger: "danger" === t3.dataset.tone
              }, r2 = _.current;
              h((e4) => ({ ...n3, glide: r2 && null !== e4 }));
            },
            onPointerMoveCapture: () => {
              _.current = true;
            },
            onKeyDownCapture: () => {
              _.current = false;
            },
            children: [
              (0, r.jsx)(s.PY1.span, {
                className: m().highlight,
                "data-tone": c2?.danger ? "danger" : void 0,
                "aria-hidden": "true",
                initial: false,
                animate: c2 ? { y: c2.top, height: c2.height, opacity: 1 } : { opacity: 0 },
                transition: {
                  default: c2?.glide && !l2 ? d.T.spring.snappy : { duration: 0 },
                  opacity: { duration: 0.08 * !l2 }
                }
              }),
              t2.map(
                (e3, t3) => (0, r.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      e3.separatorBefore && (0, r.jsx)(i.wv, { className: m().separator }),
                      (0, r.jsxs)(i.q7, {
                        className: [
                          m().item,
                          e3.destructive ? m().destructive : ""
                        ].filter(Boolean).join(" "),
                        "data-tone": e3.destructive ? "danger" : void 0,
                        style: { "--i": t3 },
                        disabled: e3.disabled,
                        onSelect: e3.onSelect,
                        children: [
                          e3.icon && (0, r.jsx)("span", {
                            className: m().icon,
                            "aria-hidden": "true",
                            children: e3.icon
                          }),
                          e3.label
                        ]
                      })
                    ]
                  },
                  e3.label
                )
              )
            ]
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
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
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {});
A.reg(90034, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { E: () => v });
  var n = a(95155), r = a(12115), i = a(79196), s = a(25354), l = a(18310), o = a(28245), d = a(92171), u = a(80642), c = a(7770), p = a(22346), _ = a.n(p);
  let m = { duration: c.T.duration.fast, ease: [...c.T.ease.standard] }, f = { opacity: 0, y: "0.3em", filter: `blur(${c.T.blur.soft}px)` }, y = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${c.T.blur.subtle}px)`,
    transition: m
  }, b = { opacity: 0, scale: 0.6, filter: `blur(${c.T.blur.subtle}px)` }, h = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, g = { opacity: 0, transition: { duration: c.T.duration.instant } };
  function x(e2) {
    let t2 = (0, i.tF)();
    return (0, n.jsx)(s.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function v({
    tone: e2 = "neutral",
    size: t2 = "md",
    icon: a2,
    dot: i2 = false,
    color: p2,
    outline: j = false,
    pill: k = false,
    className: T,
    children: N,
    ...w
  }) {
    let M = (0, l.I)(), A = "string" == typeof N || "number" == typeof N ? String(N) : null, E = a2 ? (function(e3) {
      if (!(0, r.isValidElement)(e3)) return "icon";
      let t3 = e3.type;
      return "string" == typeof t3 ? t3 : t3.displayName ?? t3.name ?? "icon";
    })(a2) : "", z = (0, r.useRef)(null), S = (0, r.useRef)(null), $ = (0, o.d)("auto"), R = (0, r.useRef)(0);
    (0, r.useLayoutEffect)(() => {
      R.current = performance.now();
    }, [A, E]), (0, r.useEffect)(() => {
      let e3, t3, a3 = S.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let n2 = () => {
        $.jump("auto"), z.current && (z.current.style.width = "auto");
      }, r2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let i3 = r3.borderBoxSize?.[0]?.inlineSize ?? a3.offsetWidth, s2 = $.get(), l2 = "number" == typeof s2 ? s2 : e3;
        if (e3 = i3, t3?.stop(), M || void 0 === l2 || l2 === i3 || performance.now() - R.current > 120)
          return n2();
        z.current && (z.current.style.width = `${l2}px`), t3 = (0, d.i)($, [l2, i3], {
          ...c.T.spring.morph,
          onComplete: n2
        });
      });
      return r2.observe(a3), () => {
        r2.disconnect(), t3?.stop();
      };
    }, [$, M]);
    let I = M ? { duration: c.T.duration.instant } : { duration: c.T.duration.standard, ease: [...c.T.ease.enter] }, P = a2 ? _().withIcon : i2 ? _().withDot : void 0, C = [
      _().badge,
      _()[e2],
      p2 ? _()[p2] : void 0,
      _()[t2],
      P,
      j ? _().outline : void 0,
      k ? _().pill : void 0,
      T
    ].filter(Boolean).join(" ");
    return (0, n.jsx)("span", {
      ...w,
      className: C,
      children: (0, n.jsx)(s.PY1.span, {
        ref: z,
        className: _().body,
        style: { width: $ },
        children: (0, n.jsxs)("span", {
          ref: S,
          className: _().content,
          children: [
            !a2 && i2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)("span", { className: _().dot })
            }) : null,
            a2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().glyph,
                    initial: M ? { opacity: 0 } : b,
                    animate: h,
                    exit: M ? g : { ...b, transition: m },
                    transition: M ? I : c.T.spring.snappy,
                    children: a2
                  },
                  E
                )
              })
            }) : null,
            null === A ? N : (0, n.jsx)("span", {
              className: _().label,
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().text,
                    initial: M ? { opacity: 0 } : f,
                    animate: h,
                    exit: M ? g : y,
                    transition: I,
                    children: A
                  },
                  A
                )
              })
            })
          ]
        })
      })
    });
  }
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
A.cssFor("docs-sidebar", [19594,22346,26874,79698]);
A.item("docs-sidebar", {entry:50041, export:"DocsSidebar", kind:"block", tier:"pro", unresolved:[]});
})();