/* live-visitors (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(16186, ".demo{display:flex;justify-content:center;width:100%}", {"demo":"demo"});
A.regCss(48938, ".live-visitors_root__LK_Oa{--lv-ease:cubic-bezier(0.22,1,0.36,1);--lv-move:280ms;container-type:inline-size;position:relative;width:100%;max-width:640px;color:var(--foreground);font-size:14px;line-height:20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-panel)}.live-visitors_srOnly__DLvOE{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.live-visitors_head__Ptk0f{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:20px 20px 0}.live-visitors_headText__ftd1R{min-width:0}.live-visitors_status___3Jvd{display:flex;align-items:center;gap:8px;height:20px;color:var(--text-secondary)}.live-visitors_dot__Lh_Ny{position:relative;flex:none;width:8px;height:8px;border-radius:50%;background:var(--success);transition:background-color .16s var(--lv-ease)}.live-visitors_dot__Lh_Ny:after{content:\"\";position:absolute;inset:0;border-radius:inherit;background:inherit;opacity:0}.live-visitors_root__LK_Oa[data-active] .live-visitors_dot__Lh_Ny:after{animation:live-visitors_lv-pulse__ypVpB 1.6s var(--lv-ease) infinite}.live-visitors_status___3Jvd[data-state=connecting] .live-visitors_dot__Lh_Ny,.live-visitors_status___3Jvd[data-state=paused] .live-visitors_dot__Lh_Ny{background:var(--text-muted)}.live-visitors_status___3Jvd[data-state=reconnecting] .live-visitors_dot__Lh_Ny{background:var(--warning)}@keyframes live-visitors_lv-pulse__ypVpB{0%{transform:scale(1);opacity:.5}70%,to{transform:scale(2.75);opacity:0}}.live-visitors_stateStack__HwMJG{display:grid}.live-visitors_stateLabel__qk0Ga{grid-area:1/1;opacity:0;transition:opacity .1s var(--lv-ease)}.live-visitors_stateLabel__qk0Ga[data-on]{opacity:1;transition:opacity .16s var(--lv-ease) 40ms}.live-visitors_countRow__qul0T{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:8px;margin:4px 0 0}.live-visitors_count__50jWK{position:relative;font-size:32px;line-height:40px;font-weight:500;letter-spacing:-.02em;font-variant-numeric:tabular-nums}.live-visitors_countSkeleton__13v1a,.live-visitors_count__50jWK .live-visitors_rolling___yM6q{transition:opacity .16s var(--lv-ease)}.live-visitors_countSkeleton__13v1a{position:absolute;top:9px;left:0;width:58px;height:24px;border-radius:8px;background:var(--surface-muted);opacity:0}.live-visitors_count__50jWK[data-pending] .live-visitors_rolling___yM6q{opacity:0}.live-visitors_count__50jWK[data-pending] .live-visitors_countSkeleton__13v1a{opacity:1;animation:live-visitors_lv-breathe___UDVR 1.2s ease-in-out infinite alternate}.live-visitors_countLabel__1QJ82{color:var(--text-secondary)}.live-visitors_headActions__HQsws{display:flex;flex:none;align-items:center;gap:8px;margin-top:-6px}.live-visitors_iconButton__0WDa_{width:var(--control-height-sm);padding-inline:0}.live-visitors_meta__f_U_L{min-width:0;overflow:hidden;color:var(--text-muted);font-size:12px;line-height:16px;white-space:nowrap;text-overflow:ellipsis}.live-visitors_rolling___yM6q{display:inline-flex;font-variant-numeric:tabular-nums;white-space:nowrap}.live-visitors_digit__i_sH8{position:relative;display:inline-block}.live-visitors_digit__i_sH8[data-enter]{overflow:hidden;animation:live-visitors_lv-grow__k58hv .24s var(--lv-ease) both}.live-visitors_digitSizer___ufAH{visibility:hidden}.live-visitors_digitWindow__BVVyY{position:absolute;inset:0;overflow:hidden}.live-visitors_digitStrip__QsgkV{display:flex;flex-direction:column;height:1000%;transition:transform var(--lv-move) var(--lv-ease)}.live-visitors_digitStrip__QsgkV>span{flex:1 0 10%;text-align:center}.live-visitors_rolling___yM6q[data-reduced] .live-visitors_digitStrip__QsgkV{transition:none}@keyframes live-visitors_lv-grow__k58hv{0%{max-width:0;opacity:0}to{max-width:1em;opacity:1}}.live-visitors_map__tcLHp{position:relative;margin:16px 20px 0;aspect-ratio:600/216}.live-visitors_mapSvg__yjaKp{display:block;width:100%;height:100%;overflow:visible}.live-visitors_land__rjfF_{fill:none;stroke:color-mix(in oklab,var(--text-muted) 46%,transparent);stroke-width:2.4;stroke-linecap:round}.live-visitors_pingStrong__PEw9A,.live-visitors_ping__3ne49{fill:var(--accent)}.live-visitors_pingStrong__PEw9A{stroke:var(--surface);stroke-width:1.5}.live-visitors_ringStrong__mzDEt,.live-visitors_ring__5crCe{fill:none;stroke:var(--accent);stroke-width:1.25;vector-effect:non-scaling-stroke;transform-box:fill-box;transform-origin:center;opacity:0;animation:live-visitors_lv-ring__rk__u .9s var(--lv-ease) both}.live-visitors_ringStrong__mzDEt{stroke-width:1.5;animation:live-visitors_lv-ring-strong__ciFCm 1.2s var(--lv-ease) both}@keyframes live-visitors_lv-ring__rk__u{0%{transform:scale(1);opacity:.7}to{transform:scale(4);opacity:0}}@keyframes live-visitors_lv-ring-strong__ciFCm{0%{transform:scale(1);opacity:.8}to{transform:scale(5.5);opacity:0}}.live-visitors_mapLabel__d4XzJ{position:absolute;width:0;height:0;pointer-events:none}.live-visitors_mapLabelInner__oDSAv{position:absolute;bottom:10px;left:0;display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 8px;color:var(--foreground);font-size:12px;line-height:16px;white-space:nowrap;background:var(--surface-raised);border:1px solid var(--border);border-radius:8px;box-shadow:var(--shadow-raised);transform:translateX(-50%)}.live-visitors_mapLabelInner__oDSAv[data-align=start]{transform:translateX(-12px)}.live-visitors_mapLabelInner__oDSAv[data-align=end]{transform:translateX(calc(-100% + 12px))}.live-visitors_lists__ei9KQ{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;margin-top:16px;padding:16px 10px;border-top:1px solid var(--border-subtle)}.live-visitors_panel__Gx_bv{min-width:0}.live-visitors_panelHead___BTfN{display:flex;align-items:baseline;justify-content:space-between;gap:12px;height:20px;margin-bottom:8px;padding-inline:10px}.live-visitors_panelTitle__qWKGE{flex:none;margin:0;font-size:14px;line-height:20px;font-weight:500}.live-visitors_rows__ZQ4GJ{position:relative;margin:0;padding:0;overflow:hidden;list-style:none}.live-visitors_eventRow__GVTb1,.live-visitors_pageRow__Rz2sB,.live-visitors_skeletonRow__HcBB9{position:absolute;top:0;right:0;left:0;display:flex;align-items:center;gap:10px;height:32px;padding-inline:10px;border-radius:8px;transition:transform var(--lv-move) var(--lv-ease),opacity .16s var(--lv-ease)}.live-visitors_eventRow__GVTb1[data-out],.live-visitors_pageRow__Rz2sB[data-out]{opacity:0;transition:transform var(--lv-move) var(--lv-ease),opacity .12s var(--lv-ease)}.live-visitors_eventRow__GVTb1[data-enter],.live-visitors_pageRow__Rz2sB[data-enter]{animation:live-visitors_lv-fade-in___cYBh .16s var(--lv-ease) both}@keyframes live-visitors_lv-fade-in___cYBh{0%{opacity:0}}.live-visitors_bar__H_QUw{position:absolute;top:0;bottom:0;left:0;border-radius:inherit;background:var(--accent-subtle);transition:width var(--lv-move) var(--lv-ease)}.live-visitors_path__7CVlk{position:relative;flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.live-visitors_value__cuB0S{position:relative;flex:none;color:var(--text-secondary);font-variant-numeric:tabular-nums}.live-visitors_flag__h3PCs{position:relative;display:block;flex:none;width:16px;height:12px;overflow:hidden;border-radius:2px}.live-visitors_flag__h3PCs>svg{display:block;width:100%;height:100%}.live-visitors_flag__h3PCs:after{content:\"\";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--foreground) 14%,transparent)}.live-visitors_flag__h3PCs[data-flag=none]{background:var(--surface-muted)}.live-visitors_eventText__lZmrX{display:flex;flex:1;gap:6px;min-width:0;white-space:nowrap}.live-visitors_eventLabel__OqjCG{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis}.live-visitors_eventPlace__IfM9e{flex:0 1000 auto;min-width:0;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis}.live-visitors_time__28IkI{flex:none;min-width:28px;color:var(--text-muted);font-size:12px;line-height:16px;font-variant-numeric:tabular-nums;text-align:right}.live-visitors_empty__VCN8r{display:flex;align-items:center;justify-content:center;margin:0;padding-inline:10px;color:var(--text-muted);text-align:center}.live-visitors_skeletonFlag__JeFrt{flex:none;width:16px;height:12px;border-radius:2px;background:var(--surface-muted)}.live-visitors_skeletonLine__lZPCx{height:10px;border-radius:5px;background:var(--surface-muted);animation:live-visitors_lv-breathe___UDVR 1.2s ease-in-out infinite alternate}@keyframes live-visitors_lv-breathe___UDVR{0%{opacity:1}to{opacity:.55}}@media (prefers-reduced-motion:reduce){.live-visitors_ringStrong__mzDEt,.live-visitors_ring__5crCe,.live-visitors_root__LK_Oa[data-active] .live-visitors_dot__Lh_Ny:after{animation:none;opacity:0}}@media (prefers-reduced-motion:reduce){.live-visitors_bar__H_QUw,.live-visitors_digitStrip__QsgkV,.live-visitors_eventRow__GVTb1,.live-visitors_pageRow__Rz2sB,.live-visitors_skeletonRow__HcBB9{transition:none}}@media (prefers-reduced-motion:reduce){.live-visitors_count__50jWK[data-pending] .live-visitors_countSkeleton__13v1a,.live-visitors_digit__i_sH8[data-enter],.live-visitors_eventRow__GVTb1[data-enter],.live-visitors_pageRow__Rz2sB[data-enter],.live-visitors_skeletonLine__lZPCx{animation:none}}", {"root":"live-visitors_root__LK_Oa","srOnly":"live-visitors_srOnly__DLvOE","head":"live-visitors_head__Ptk0f","headText":"live-visitors_headText__ftd1R","status":"live-visitors_status___3Jvd","dot":"live-visitors_dot__Lh_Ny","lv-pulse":"live-visitors_lv-pulse__ypVpB","stateStack":"live-visitors_stateStack__HwMJG","stateLabel":"live-visitors_stateLabel__qk0Ga","countRow":"live-visitors_countRow__qul0T","count":"live-visitors_count__50jWK","rolling":"live-visitors_rolling___yM6q","countSkeleton":"live-visitors_countSkeleton__13v1a","lv-breathe":"live-visitors_lv-breathe___UDVR","countLabel":"live-visitors_countLabel__1QJ82","headActions":"live-visitors_headActions__HQsws","iconButton":"live-visitors_iconButton__0WDa_","meta":"live-visitors_meta__f_U_L","digit":"live-visitors_digit__i_sH8","lv-grow":"live-visitors_lv-grow__k58hv","digitSizer":"live-visitors_digitSizer___ufAH","digitWindow":"live-visitors_digitWindow__BVVyY","digitStrip":"live-visitors_digitStrip__QsgkV","map":"live-visitors_map__tcLHp","mapSvg":"live-visitors_mapSvg__yjaKp","land":"live-visitors_land__rjfF_","ping":"live-visitors_ping__3ne49","pingStrong":"live-visitors_pingStrong__PEw9A","ring":"live-visitors_ring__5crCe","ringStrong":"live-visitors_ringStrong__mzDEt","lv-ring":"live-visitors_lv-ring__rk__u","lv-ring-strong":"live-visitors_lv-ring-strong__ciFCm","mapLabel":"live-visitors_mapLabel__d4XzJ","mapLabelInner":"live-visitors_mapLabelInner__oDSAv","lists":"live-visitors_lists__ei9KQ","panel":"live-visitors_panel__Gx_bv","panelHead":"live-visitors_panelHead___BTfN","panelTitle":"live-visitors_panelTitle__qWKGE","rows":"live-visitors_rows__ZQ4GJ","pageRow":"live-visitors_pageRow__Rz2sB","eventRow":"live-visitors_eventRow__GVTb1","skeletonRow":"live-visitors_skeletonRow__HcBB9","lv-fade-in":"live-visitors_lv-fade-in___cYBh","bar":"live-visitors_bar__H_QUw","path":"live-visitors_path__7CVlk","value":"live-visitors_value__cuB0S","flag":"live-visitors_flag__h3PCs","eventText":"live-visitors_eventText__lZmrX","eventLabel":"live-visitors_eventLabel__OqjCG","eventPlace":"live-visitors_eventPlace__IfM9e","time":"live-visitors_time__28IkI","empty":"live-visitors_empty__VCN8r","skeletonFlag":"live-visitors_skeletonFlag__JeFrt","skeletonLine":"live-visitors_skeletonLine__lZPCx"});
A.reg(82980, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { LiveVisitorsDemo: () => K, default: () => Q });
  var s = i(95155), a = i(12115), n = i(18310), l = i(80642), r = i(25354), o = i(36619), c = i(79267), d = i(7770), h = i(51288), u = i(36690);
  let v = [
    [
      -168,
      66,
      -162,
      70,
      -156,
      71.3,
      -141,
      69.6,
      -128,
      70,
      -117,
      69,
      -100,
      68,
      -94,
      72,
      -85,
      69.5,
      -82,
      66,
      -78,
      72,
      -68,
      70,
      -62,
      66,
      -64,
      60,
      -61,
      56,
      -56,
      52,
      -60,
      47.5,
      -66,
      45,
      -70,
      43.5,
      -70,
      41.7,
      -74,
      40.5,
      -76,
      38,
      -76,
      35,
      -81,
      31.5,
      -80,
      27,
      -80.5,
      25.2,
      -82.5,
      27.5,
      -84,
      30,
      -89,
      30.2,
      -94,
      29.5,
      -97.5,
      27,
      -97.5,
      22,
      -96,
      19,
      -94,
      18.5,
      -91,
      18.8,
      -90.5,
      21,
      -87,
      21.5,
      -88,
      16,
      -84,
      15.5,
      -83.5,
      11,
      -81.5,
      9,
      -79,
      9.3,
      -77.3,
      8.5,
      -78,
      7.5,
      -80,
      7.4,
      -83,
      8.3,
      -86,
      11,
      -88,
      13.3,
      -92,
      14.5,
      -95,
      16,
      -99,
      16.7,
      -104.5,
      19,
      -105.7,
      22.5,
      -109,
      26,
      -112.5,
      29.5,
      -114.7,
      31.5,
      -114,
      30,
      -112,
      27,
      -110,
      23.2,
      -112,
      25,
      -114.5,
      28,
      -116.5,
      31.5,
      -117.2,
      32.7,
      -120.6,
      34.5,
      -122.5,
      37.5,
      -124.2,
      40.5,
      -124,
      46,
      -124.7,
      48.4,
      -123,
      49,
      -127.5,
      50.8,
      -130.5,
      54.5,
      -133.5,
      57.5,
      -137.5,
      58.7,
      -141,
      60,
      -146,
      60.8,
      -152,
      59,
      -154,
      57.5,
      -158,
      56.5,
      -162,
      55,
      -164.5,
      54.6,
      -158,
      58.6,
      -162,
      59.8,
      -165,
      61,
      -166,
      63,
      -161,
      64.4,
      -165,
      64.8
    ],
    [
      -94.5,
      59,
      -92.5,
      57,
      -88,
      56,
      -82.5,
      55,
      -79.5,
      54.5,
      -78.5,
      58,
      -77,
      60.5,
      -78,
      62.3,
      -82,
      64.5,
      -86,
      64,
      -90,
      63.5,
      -94,
      61
    ],
    [
      -120,
      72,
      -120,
      76,
      -110,
      78,
      -95,
      80,
      -80,
      83,
      -65,
      82.5,
      -75,
      78,
      -88,
      76,
      -95,
      74,
      -105,
      73,
      -115,
      71
    ],
    [
      -73,
      78,
      -68,
      80.5,
      -60,
      82,
      -40,
      83.5,
      -22,
      82.5,
      -18,
      80,
      -19,
      76,
      -21,
      72,
      -22,
      70,
      -26,
      68.5,
      -32,
      68,
      -36,
      65.5,
      -40,
      64.5,
      -43,
      60,
      -46,
      60.8,
      -49,
      62,
      -51,
      64,
      -53,
      66.5,
      -54,
      69.5,
      -55,
      71,
      -58,
      75.5,
      -66,
      76.5
    ],
    [
      -24,
      65.5,
      -22,
      66.4,
      -18,
      66.2,
      -14.5,
      66,
      -13.5,
      65,
      -15,
      64.3,
      -18,
      63.4,
      -22,
      63.8,
      -24,
      64.8
    ],
    [
      -84.9,
      21.9,
      -82,
      23.2,
      -77.5,
      21.9,
      -74.2,
      20.2,
      -77.7,
      19.9,
      -80.5,
      21.6,
      -83.3,
      21.8
    ],
    [
      -74.4,
      19.8,
      -72.8,
      19.9,
      -70,
      19.7,
      -68.4,
      18.6,
      -71.3,
      17.7,
      -74.4,
      18.4
    ],
    [
      -77.3,
      8.5,
      -75.5,
      10.5,
      -72,
      12,
      -71.5,
      11,
      -68,
      10.5,
      -64,
      10.7,
      -61,
      10.5,
      -58,
      6.8,
      -54,
      5.8,
      -51.5,
      4.2,
      -50,
      1.8,
      -49,
      -0.5,
      -44.5,
      -2.5,
      -40,
      -2.8,
      -37,
      -4.8,
      -35,
      -6.5,
      -35,
      -9,
      -37,
      -12,
      -39,
      -15,
      -39.5,
      -18,
      -41,
      -22,
      -43,
      -23,
      -46,
      -24,
      -48.5,
      -27,
      -49.5,
      -29,
      -51.5,
      -31.5,
      -53.5,
      -34,
      -58,
      -34.5,
      -57,
      -36.5,
      -57.5,
      -38.2,
      -62,
      -39,
      -62.5,
      -41,
      -65,
      -42,
      -64.5,
      -45,
      -67.5,
      -46.5,
      -66,
      -48,
      -68.5,
      -50.5,
      -69,
      -52.3,
      -68.5,
      -54.5,
      -71,
      -54,
      -74,
      -52,
      -75.5,
      -48,
      -74,
      -44,
      -73.5,
      -40,
      -73.5,
      -37,
      -71.5,
      -33,
      -71.5,
      -28,
      -70.5,
      -23,
      -70.2,
      -18.5,
      -72,
      -17,
      -76,
      -14,
      -78,
      -11,
      -79.5,
      -8,
      -81,
      -6,
      -80.5,
      -3,
      -80,
      -1,
      -80.5,
      1,
      -78.8,
      1.8,
      -77.5,
      4,
      -77.4,
      7
    ],
    [
      -9,
      37,
      -9.5,
      39,
      -9,
      43,
      -8,
      43.7,
      -2,
      43.4,
      -1.3,
      44.5,
      -1.2,
      46,
      -2.3,
      47.2,
      -4.5,
      48,
      -4.7,
      48.6,
      -1.5,
      48.7,
      -1.3,
      49.7,
      1,
      50,
      1.6,
      50.9,
      3.5,
      51.4,
      4.5,
      52.5,
      5,
      53.3,
      7,
      53.6,
      8.5,
      53.8,
      8.6,
      55.5,
      8.2,
      56.9,
      10.5,
      57.6,
      10.5,
      56.5,
      10.9,
      55.7,
      9.8,
      54.9,
      11,
      54,
      13,
      54.4,
      14.5,
      53.9,
      18,
      54.8,
      19.8,
      54.4,
      21.2,
      55.2,
      21,
      56.8,
      21.8,
      57.5,
      23.7,
      57.2,
      24.3,
      58.3,
      23.5,
      59.2,
      28,
      59.5,
      30,
      60,
      26,
      60.4,
      22.8,
      59.9,
      21.4,
      60.8,
      21.2,
      62.5,
      22.3,
      63.8,
      25,
      65,
      25.3,
      65.5,
      22.5,
      65.8,
      21.3,
      64.8,
      19,
      63.5,
      17.5,
      62.3,
      17.2,
      61,
      18.8,
      60,
      18.5,
      59.3,
      16.7,
      57.7,
      16.4,
      56.6,
      14.3,
      55.5,
      12.9,
      55.4,
      12.6,
      56.2,
      11.7,
      57.7,
      11.2,
      59,
      10.5,
      59.2,
      8,
      58.1,
      5.6,
      58.9,
      5,
      61,
      5.3,
      62.5,
      8,
      63.5,
      10.5,
      64.6,
      12.5,
      66,
      14.5,
      67.8,
      16,
      68.8,
      18.5,
      69.8,
      22,
      70.3,
      26,
      71,
      29,
      70.8,
      31,
      70,
      33,
      69.3,
      36,
      69,
      41,
      67.5,
      44,
      68.5,
      46,
      68,
      53,
      68.6,
      58,
      68.8,
      60,
      69.6,
      66,
      69.5,
      72,
      72.8,
      76,
      72.2,
      80,
      72.5,
      84,
      73.8,
      87,
      75,
      95,
      76,
      100,
      76.5,
      104,
      77.7,
      107,
      76.9,
      112,
      76,
      114,
      75.5,
      112,
      73.7,
      120,
      73,
      128,
      73.2,
      130,
      71,
      136,
      71.5,
      140,
      72.4,
      146,
      72.3,
      150,
      71.5,
      155,
      71,
      160,
      70.8,
      165,
      69.7,
      170,
      70,
      176,
      69.8,
      180,
      68.9,
      180,
      65,
      178,
      64.5,
      174,
      61.8,
      170,
      60,
      166,
      60.3,
      163,
      59.8,
      162,
      58,
      163,
      56.5,
      162,
      54.5,
      160,
      53,
      158,
      51.5,
      156.7,
      51,
      156,
      55,
      156.5,
      57.5,
      160,
      60.5,
      159,
      61.5,
      155,
      59.3,
      150,
      59.5,
      145,
      59.3,
      142,
      59,
      138,
      56.5,
      137,
      54,
      140.5,
      53.3,
      141.3,
      52,
      140.5,
      48.5,
      138.5,
      47,
      135,
      43.5,
      132,
      43,
      130.7,
      42.3,
      129.5,
      40.8,
      128.5,
      38.5,
      129.4,
      36.5,
      129.2,
      35.2,
      127.5,
      34.6,
      126.3,
      34.6,
      126.5,
      36.5,
      126.7,
      37.7,
      125,
      38,
      124.7,
      39.6,
      122.2,
      40.4,
      121.2,
      40.9,
      119,
      39.2,
      118,
      39,
      117.7,
      38.5,
      118.8,
      37.5,
      120.8,
      37.8,
      122.5,
      37.4,
      120.5,
      36.1,
      119.2,
      34.8,
      120.8,
      32.5,
      121.8,
      31,
      121.7,
      30,
      122,
      29.2,
      120.5,
      27,
      119.5,
      25.4,
      117.8,
      24.3,
      116,
      22.9,
      114,
      22.3,
      112,
      21.6,
      110.3,
      21,
      110.2,
      20.3,
      109.7,
      21.5,
      108,
      21.5,
      106.6,
      20.2,
      105.8,
      19,
      106.5,
      17.5,
      108.8,
      15.4,
      109.3,
      13,
      109.2,
      11.6,
      107.5,
      10.5,
      106.7,
      10.3,
      104.8,
      8.6,
      105,
      9.9,
      104.5,
      10.4,
      103,
      11,
      102.3,
      12.2,
      100.9,
      12.7,
      100.2,
      13.4,
      99.2,
      10.4,
      99.9,
      9.2,
      100.4,
      7.4,
      101.3,
      6.9,
      102.1,
      6.2,
      103.4,
      4.5,
      103.5,
      2.5,
      104.2,
      1.4,
      103.5,
      1.3,
      101.3,
      2.8,
      100.4,
      4.5,
      100.3,
      6,
      98.3,
      8.2,
      98.5,
      10,
      98.6,
      13.6,
      97.7,
      15.8,
      97.4,
      16.8,
      94.6,
      16.2,
      94.3,
      18.5,
      93,
      19.8,
      92.2,
      21.3,
      91.8,
      22.3,
      90.5,
      22.2,
      89,
      21.8,
      87,
      21.5,
      86.9,
      20.7,
      85,
      19.5,
      82.3,
      17,
      80.3,
      15.7,
      80.3,
      13.3,
      79.9,
      10.3,
      78.2,
      8.8,
      77.5,
      8.1,
      76.6,
      8.9,
      75.7,
      11.3,
      74.7,
      13,
      73.5,
      16,
      72.8,
      19.3,
      72.8,
      21,
      70.5,
      20.9,
      69,
      22.4,
      70,
      22.9,
      68.3,
      23.6,
      66.6,
      25.4,
      64,
      25.3,
      61.6,
      25.2,
      57.3,
      25.8,
      56.5,
      27.1,
      54.7,
      26.5,
      52.5,
      27.6,
      51.3,
      28,
      50.2,
      30.2,
      48.9,
      30.3,
      48,
      29.5,
      48.5,
      28,
      50,
      26.5,
      50.8,
      25,
      51.5,
      25.3,
      51.6,
      24.2,
      53.5,
      24.1,
      55.5,
      25.5,
      56.3,
      26.3,
      56.4,
      24.9,
      57.7,
      23.8,
      59.8,
      22.5,
      58.5,
      20.4,
      57.7,
      19,
      55.4,
      17.6,
      52.2,
      15.8,
      49.6,
      14.6,
      45,
      12.8,
      43.5,
      12.7,
      42.8,
      15,
      42.6,
      16.8,
      41,
      19.5,
      39.1,
      21.8,
      38.4,
      23.8,
      37.2,
      25.1,
      35.2,
      28.1,
      34.6,
      28.1,
      34.9,
      29.5,
      34.5,
      31.5,
      35,
      33,
      35.9,
      35,
      36.2,
      36.6,
      34.5,
      36.8,
      32.5,
      36.1,
      30.5,
      36.4,
      29,
      36.7,
      27.3,
      37.5,
      26.3,
      38.3,
      26.2,
      39.5,
      26.6,
      40.3,
      29,
      41.1,
      31,
      41.1,
      33.5,
      42,
      35.2,
      42,
      38.3,
      40.9,
      41.5,
      41.5,
      41.7,
      42.6,
      39.8,
      43.4,
      38,
      44.5,
      36.6,
      45.3,
      35.3,
      44.8,
      33.5,
      44.5,
      32.8,
      45.4,
      33.7,
      46,
      31.7,
      46.6,
      30.7,
      46.5,
      29.7,
      45.4,
      28.7,
      44.3,
      27.9,
      42.7,
      28,
      41.5,
      26.2,
      40.9,
      25.9,
      40.8,
      24,
      40.8,
      23.7,
      40.2,
      22.6,
      40.4,
      22.9,
      39.4,
      23.3,
      38.1,
      24,
      38,
      22.8,
      37.5,
      22.4,
      36.5,
      21.7,
      36.9,
      21.1,
      38.3,
      20.2,
      39.6,
      19.4,
      40.4,
      19.5,
      41.8,
      18.5,
      42.5,
      16.5,
      43.4,
      15.2,
      44.3,
      13.7,
      45.1,
      13.1,
      45.7,
      12.3,
      45.3,
      12.4,
      44.2,
      13.6,
      43.5,
      14.8,
      42.1,
      16.1,
      41.4,
      17.9,
      40.6,
      18.5,
      40.1,
      17,
      39.5,
      16.6,
      38.4,
      15.7,
      38,
      15.6,
      40,
      14.5,
      40.6,
      12.5,
      41.5,
      11,
      42.5,
      10.2,
      43.9,
      8.8,
      44.4,
      7.5,
      43.8,
      6,
      43.1,
      4.3,
      43.5,
      3.2,
      43,
      3.1,
      41.9,
      2,
      41.2,
      0.8,
      41,
      -0.3,
      39.5,
      0.2,
      38.8,
      -0.7,
      37.6,
      -2.1,
      36.7,
      -4.4,
      36.7,
      -5.6,
      36,
      -6.3,
      36.8,
      -7.4,
      37.2,
      -8.9,
      37
    ],
    [
      47,
      45,
      49.2,
      46.4,
      51.2,
      47,
      53,
      46.5,
      53.2,
      45,
      51.3,
      44.5,
      50.6,
      43.8,
      52.7,
      41.8,
      54,
      40.7,
      53.9,
      38,
      53.2,
      37,
      50.2,
      37.3,
      49,
      38.4,
      49.5,
      40.2,
      48,
      42,
      47.5,
      43.2
    ],
    [
      -5.9,
      35.8,
      -2,
      35.1,
      1,
      36.5,
      3,
      36.8,
      7,
      37,
      10.2,
      37.2,
      11,
      36.8,
      10.2,
      35.5,
      11,
      34,
      10.5,
      33.3,
      12.2,
      32.8,
      15.2,
      32.3,
      15.7,
      31.3,
      18.5,
      30.3,
      20,
      30.9,
      20,
      32,
      22,
      32.9,
      25,
      31.8,
      29,
      30.9,
      32.3,
      31.2,
      34.2,
      31.3,
      34.9,
      29.5,
      34.3,
      27.8,
      33.6,
      28.3,
      32.6,
      29.9,
      33.9,
      27.2,
      35.5,
      24,
      37.2,
      21,
      37.4,
      18.8,
      38.6,
      17.9,
      39.7,
      15.3,
      41.3,
      13.8,
      43.3,
      12.5,
      43.1,
      11.6,
      44.5,
      10.4,
      47.5,
      11.2,
      51.2,
      11.8,
      51,
      10.4,
      50.8,
      9,
      49,
      6,
      47.5,
      4.2,
      45.5,
      2,
      43.2,
      -0.5,
      41.6,
      -1.7,
      40.2,
      -2.8,
      39.3,
      -4.7,
      39,
      -6.5,
      39.5,
      -8,
      40.4,
      -10.5,
      40.6,
      -14,
      39,
      -16.8,
      36.8,
      -18.6,
      35,
      -20.5,
      35.4,
      -22.2,
      35.5,
      -24,
      32.9,
      -25.9,
      32.7,
      -28,
      31,
      -29.9,
      28.8,
      -32.2,
      26.5,
      -33.8,
      25.6,
      -34,
      22.5,
      -34,
      20,
      -34.8,
      18.4,
      -34.2,
      18.2,
      -32,
      17.2,
      -29.5,
      16.4,
      -28.6,
      15.2,
      -26.5,
      14.4,
      -22.5,
      13.4,
      -20.8,
      11.8,
      -17.3,
      11.8,
      -15.8,
      12.6,
      -13.3,
      13.7,
      -10.8,
      13.2,
      -8.8,
      12.2,
      -6,
      12.3,
      -4.8,
      11,
      -3.9,
      9.6,
      -1,
      9.3,
      1,
      9.8,
      3,
      8.9,
      4.5,
      7,
      4.4,
      5.7,
      4.3,
      4.5,
      6.3,
      2.5,
      6.3,
      1,
      5.9,
      -1.9,
      4.8,
      -4,
      5.2,
      -7.5,
      4.4,
      -9.3,
      5.5,
      -11.4,
      6.9,
      -13.2,
      8.4,
      -13.7,
      9.5,
      -15,
      10.9,
      -16.7,
      12.4,
      -17.2,
      14.7,
      -16.5,
      16.3,
      -16,
      18.7,
      -16.9,
      21.3,
      -15.2,
      24,
      -14.8,
      25.5,
      -13.1,
      27.6,
      -11.4,
      28.3,
      -9.8,
      29.8,
      -9.6,
      31.5,
      -8.6,
      33.2,
      -6.8,
      34
    ],
    [
      49.3,
      -12,
      50.4,
      -15.2,
      49.8,
      -17,
      48.7,
      -20.5,
      47.6,
      -23.8,
      47.1,
      -24.9,
      45.2,
      -25.6,
      44,
      -24.8,
      43.3,
      -22.5,
      43.7,
      -20.5,
      44.4,
      -19,
      44,
      -17,
      45.2,
      -15.8,
      47.5,
      -14.5,
      48.8,
      -12.5
    ],
    [
      -5.7,
      50,
      -3,
      50.6,
      1.4,
      51.2,
      1.7,
      52.7,
      0.3,
      53.5,
      -0.3,
      54.5,
      -1.6,
      55.6,
      -2,
      56.9,
      -1.8,
      57.6,
      -3.3,
      58.6,
      -5,
      58.6,
      -6.2,
      57.5,
      -5.6,
      56.3,
      -5,
      55,
      -3,
      54.9,
      -3.4,
      54.3,
      -3,
      53.4,
      -4.6,
      53.3,
      -4.2,
      52.3,
      -4.7,
      51.7,
      -3,
      51.5
    ],
    [
      -6,
      52.2,
      -6.2,
      53.9,
      -5.6,
      54.6,
      -6.8,
      55.2,
      -8.3,
      55.2,
      -8.7,
      54.3,
      -10,
      54.2,
      -9.9,
      53.3,
      -9.3,
      52.6,
      -10.3,
      51.9,
      -9.5,
      51.5,
      -8.2,
      51.8,
      -6.4,
      52.2
    ],
    [11, 78.5, 16, 80, 27, 80.2, 22, 77.5, 15, 77],
    [52, 71.5, 56, 73.5, 60, 76.5, 68, 77, 63, 74.5, 57, 70.6],
    [142, 46, 143.5, 49, 144.5, 54, 142.5, 54.3, 142, 51.5, 141.8, 48],
    [
      130,
      31.3,
      131.3,
      31.4,
      132,
      33.2,
      134,
      33.4,
      135.3,
      33.7,
      136.8,
      34.3,
      138.8,
      34.6,
      140,
      35,
      140.8,
      35.7,
      140.6,
      36.8,
      141,
      38.3,
      141.9,
      39.8,
      141.4,
      41.4,
      140,
      40.8,
      139.8,
      39.8,
      139.5,
      38.2,
      137.3,
      36.8,
      136.6,
      37.2,
      135.5,
      35.6,
      133,
      35.5,
      131,
      34.3,
      129.8,
      33.2
    ],
    [
      140,
      42.4,
      141.2,
      41.8,
      143.2,
      42,
      145.5,
      43.2,
      145.3,
      44.3,
      142,
      45.4,
      141.6,
      44.3,
      140.3,
      43.3
    ],
    [120.1, 23, 120.7, 22, 121.5, 23, 121.9, 24.9, 121, 25.2, 120.2, 24],
    [79.8, 8.2, 80.2, 9.8, 81.9, 7.5, 81.2, 6.2, 80, 6],
    [
      120,
      18.4,
      122.3,
      18.5,
      122,
      16,
      124,
      13.2,
      122.9,
      13.6,
      121.4,
      13.9,
      120.5,
      14.6,
      119.8,
      16.4
    ],
    [122, 7, 123.5, 8.5, 125, 9.7, 126.6, 7.2, 125.4, 5.6, 124, 6.3],
    [
      95.3,
      5.6,
      97.5,
      5.2,
      100.4,
      2.2,
      103.8,
      -1,
      106,
      -3.1,
      105.8,
      -5.8,
      104.5,
      -5.9,
      102,
      -4,
      100.3,
      -1,
      98.7,
      1.8,
      96,
      4
    ],
    [
      105.2,
      -6.8,
      106.5,
      -6,
      108.3,
      -6.2,
      111,
      -6.4,
      112.7,
      -6.9,
      114.5,
      -7.7,
      114.4,
      -8.7,
      111,
      -8.2,
      108,
      -7.8,
      106.3,
      -7.4
    ],
    [
      109,
      1.5,
      109.6,
      -0.5,
      110.2,
      -2.9,
      112,
      -3.4,
      114.5,
      -4,
      116.5,
      -3.2,
      116.5,
      -1.5,
      117.5,
      0,
      117.9,
      1.3,
      118.9,
      5,
      117.3,
      6.9,
      116,
      6,
      115.4,
      4.9,
      113.6,
      3.2,
      111.4,
      2.5,
      110.3,
      1.7
    ],
    [
      119.3,
      -5.5,
      121,
      -5,
      121.4,
      -2,
      123.3,
      -1,
      124.8,
      1.4,
      121.5,
      1.2,
      119.8,
      0,
      119.5,
      -3.5
    ],
    [
      131,
      -1.3,
      134,
      -0.8,
      135.3,
      -3.3,
      138,
      -1.6,
      141,
      -2.6,
      144.5,
      -3.8,
      146,
      -5.5,
      147.5,
      -6,
      147.8,
      -8,
      150,
      -10.3,
      146.2,
      -8.8,
      144.2,
      -7.8,
      143,
      -9,
      141,
      -9.2,
      139,
      -8.1,
      138,
      -8.4,
      137.7,
      -5.2,
      135.2,
      -4.3,
      133,
      -4,
      132,
      -2.8
    ],
    [
      113.4,
      -22,
      114,
      -26.3,
      115,
      -29.5,
      115.3,
      -33.5,
      117.8,
      -35.1,
      121,
      -33.9,
      124,
      -33.3,
      126,
      -32.3,
      129,
      -31.7,
      131.2,
      -31.5,
      134.2,
      -32.8,
      135.8,
      -34.8,
      137.8,
      -33.4,
      137.7,
      -35.7,
      138.5,
      -35.5,
      139.7,
      -37,
      141.6,
      -38.4,
      144,
      -38.3,
      145.5,
      -38.6,
      147.8,
      -37.9,
      150,
      -37.5,
      150.8,
      -34.5,
      152.5,
      -32,
      153.6,
      -28.5,
      153.1,
      -25.5,
      151,
      -23.3,
      149.5,
      -22.3,
      147.4,
      -19.4,
      146,
      -17.5,
      145.4,
      -14.8,
      143.8,
      -14,
      142.6,
      -10.7,
      141.6,
      -12.6,
      141.5,
      -15.5,
      140.6,
      -17.5,
      139,
      -17.3,
      137,
      -15.9,
      135.5,
      -14.9,
      136.8,
      -12.2,
      135.8,
      -11.9,
      133.5,
      -11.3,
      130.8,
      -12.4,
      129.5,
      -14.9,
      127.8,
      -14.3,
      126,
      -14.2,
      124.3,
      -16.3,
      122.3,
      -17.5,
      121.4,
      -19.3,
      119,
      -20.2,
      116.7,
      -20.6,
      114.5,
      -21.8
    ],
    [144.6, -40.7, 148.3, -40.9, 148, -43.2, 146.5, -43.6, 145.2, -42.2],
    [
      172.7,
      -34.4,
      174.5,
      -36,
      176,
      -37.6,
      178.5,
      -37.7,
      177.5,
      -39.3,
      176.9,
      -40,
      175.2,
      -41.6,
      174.6,
      -41.3,
      175.2,
      -40,
      173.8,
      -39.2,
      174.6,
      -38,
      174.3,
      -36.7
    ],
    [
      172.8,
      -40.5,
      174.2,
      -41.7,
      172.8,
      -43.6,
      171.2,
      -44.6,
      169.3,
      -46.6,
      166.5,
      -46,
      166.7,
      -45.2,
      168.5,
      -44,
      170.8,
      -42.8,
      172.1,
      -41.1
    ],
    [
      -180,
      -90,
      -180,
      -78,
      -150,
      -77,
      -120,
      -73.5,
      -100,
      -73,
      -75,
      -72.5,
      -62,
      -64,
      -58,
      -63.5,
      -60,
      -68,
      -60,
      -74,
      -40,
      -78,
      -25,
      -76,
      -10,
      -71,
      10,
      -70,
      30,
      -69.5,
      50,
      -66.5,
      70,
      -68,
      90,
      -66,
      110,
      -66,
      130,
      -66.5,
      150,
      -68.5,
      165,
      -71,
      170,
      -77,
      180,
      -78,
      180,
      -90
    ]
  ], p = null, x = {
    US: "United States",
    GB: "United Kingdom",
    DE: "Germany",
    FR: "France",
    NL: "Netherlands",
    SE: "Sweden",
    CH: "Switzerland",
    JP: "Japan",
    IN: "India",
    BR: "Brazil"
  };
  function _() {
    let e2 = (0, a.useId)().replace(/:/g, "");
    return (0, s.jsxs)("svg", {
      viewBox: "10 0 40 30",
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("clipPath", {
          id: `${e2}t`,
          children: (0, s.jsx)("path", {
            d: "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"
          })
        }),
        (0, s.jsx)("path", { d: "M0 0v30h60V0z", fill: "#012169" }),
        (0, s.jsx)("path", {
          d: "M0 0l60 30m0-30L0 30",
          stroke: "#fff",
          strokeWidth: "6"
        }),
        (0, s.jsx)("path", {
          d: "M0 0l60 30m0-30L0 30",
          clipPath: `url(#${e2}t)`,
          stroke: "#C8102E",
          strokeWidth: "4"
        }),
        (0, s.jsx)("path", {
          d: "M30 0v30M0 15h60",
          stroke: "#fff",
          strokeWidth: "10"
        }),
        (0, s.jsx)("path", {
          d: "M30 0v30M0 15h60",
          stroke: "#C8102E",
          strokeWidth: "6"
        })
      ]
    });
  }
  let g = Array.from(
    { length: 6 },
    (e2, t2) => (0, s.jsx)(
      "rect",
      {
        y: (2 * t2 + 1) * 12 / 13,
        width: "16",
        height: 12 / 13,
        fill: "#fff"
      },
      t2
    )
  ), m = {
    US: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "12", fill: "#B22234" }),
        g,
        (0, s.jsx)("rect", {
          width: "6.4",
          height: 84 / 13,
          fill: "#3C3B6E"
        })
      ]
    }),
    GB: () => (0, s.jsx)(_, {}),
    DE: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "4", fill: "#000" }),
        (0, s.jsx)("rect", {
          y: "4",
          width: "16",
          height: "4",
          fill: "#DD0000"
        }),
        (0, s.jsx)("rect", {
          y: "8",
          width: "16",
          height: "4",
          fill: "#FFCE00"
        })
      ]
    }),
    FR: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", {
          width: "5.34",
          height: "12",
          fill: "#0055A4"
        }),
        (0, s.jsx)("rect", {
          x: "5.33",
          width: "5.34",
          height: "12",
          fill: "#fff"
        }),
        (0, s.jsx)("rect", {
          x: "10.66",
          width: "5.34",
          height: "12",
          fill: "#EF4135"
        })
      ]
    }),
    NL: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "4", fill: "#AE1C28" }),
        (0, s.jsx)("rect", {
          y: "4",
          width: "16",
          height: "4",
          fill: "#fff"
        }),
        (0, s.jsx)("rect", {
          y: "8",
          width: "16",
          height: "4",
          fill: "#21468B"
        })
      ]
    }),
    SE: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "12", fill: "#006AA7" }),
        (0, s.jsx)("rect", {
          x: "5",
          width: "2",
          height: "12",
          fill: "#FECC02"
        }),
        (0, s.jsx)("rect", {
          y: "5",
          width: "16",
          height: "2",
          fill: "#FECC02"
        })
      ]
    }),
    CH: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "12", fill: "#DA291C" }),
        (0, s.jsx)("rect", {
          x: "7",
          y: "2.5",
          width: "2",
          height: "7",
          fill: "#fff"
        }),
        (0, s.jsx)("rect", {
          x: "4.5",
          y: "5",
          width: "7",
          height: "2",
          fill: "#fff"
        })
      ]
    }),
    JP: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "12", fill: "#fff" }),
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "6",
          r: "3.6",
          fill: "#BC002D"
        })
      ]
    }),
    IN: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "4", fill: "#FF9933" }),
        (0, s.jsx)("rect", {
          y: "4",
          width: "16",
          height: "4",
          fill: "#fff"
        }),
        (0, s.jsx)("rect", {
          y: "8",
          width: "16",
          height: "4",
          fill: "#138808"
        }),
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "6",
          r: "1.5",
          fill: "none",
          stroke: "#000080",
          strokeWidth: ".45"
        }),
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "6",
          r: ".4",
          fill: "#000080"
        })
      ]
    }),
    BR: () => (0, s.jsxs)("svg", {
      viewBox: "0 0 16 12",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("rect", { width: "16", height: "12", fill: "#009C3B" }),
        (0, s.jsx)("path", {
          d: "M8 1.3 14.6 6 8 10.7 1.4 6z",
          fill: "#FFDF00"
        }),
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "6",
          r: "2.7",
          fill: "#002776"
        }),
        (0, s.jsx)("path", {
          d: "M5.4 5.4c1.8-.4 3.7 0 5.2 1",
          fill: "none",
          stroke: "#fff",
          strokeWidth: ".5"
        })
      ]
    })
  };
  function f({ code: e2, className: t2 }) {
    let i2 = e2.toUpperCase();
    return (0, s.jsx)("span", {
      className: t2,
      "data-flag": i2 in m ? i2 : "none",
      "aria-hidden": "true",
      children: i2 in m ? m[i2]() : null
    });
  }
  let j = [
    {
      city: "San Francisco",
      country: "US",
      lat: 37.77,
      lon: -122.42,
      weight: 9
    },
    { city: "New York", country: "US", lat: 40.71, lon: -74, weight: 9 },
    { city: "Austin", country: "US", lat: 30.27, lon: -97.74, weight: 4 },
    { city: "Seattle", country: "US", lat: 47.6, lon: -122.33, weight: 4 },
    { city: "Chicago", country: "US", lat: 41.88, lon: -87.63, weight: 3 },
    { city: "London", country: "GB", lat: 51.5, lon: -0.12, weight: 8 },
    { city: "Manchester", country: "GB", lat: 53.48, lon: -2.24, weight: 2 },
    { city: "Berlin", country: "DE", lat: 52.52, lon: 13.4, weight: 6 },
    { city: "Munich", country: "DE", lat: 48.14, lon: 11.58, weight: 3 },
    { city: "Paris", country: "FR", lat: 48.86, lon: 2.35, weight: 5 },
    { city: "Amsterdam", country: "NL", lat: 52.37, lon: 4.9, weight: 4 },
    { city: "Stockholm", country: "SE", lat: 59.33, lon: 18.07, weight: 3 },
    { city: "Zurich", country: "CH", lat: 47.37, lon: 8.54, weight: 3 },
    { city: "Tokyo", country: "JP", lat: 35.68, lon: 139.69, weight: 5 },
    { city: "Osaka", country: "JP", lat: 34.69, lon: 135.5, weight: 2 },
    { city: "Bengaluru", country: "IN", lat: 12.97, lon: 77.59, weight: 5 },
    { city: "Mumbai", country: "IN", lat: 19.08, lon: 72.88, weight: 3 },
    {
      city: "S\xE3o Paulo",
      country: "BR",
      lat: -23.55,
      lon: -46.63,
      weight: 4
    },
    {
      city: "Rio de Janeiro",
      country: "BR",
      lat: -22.9,
      lon: -43.2,
      weight: 2
    }
  ], y = j.reduce((e2, t2) => e2 + t2.weight, 0);
  function w(e2) {
    let t2 = e2() * y;
    for (let e3 of j) if ((t2 -= e3.weight) <= 0) return e3;
    return j[0];
  }
  let N = (e2) => (e2() - 0.5) * 2.4;
  function S(e2, t2, i2, s2 = w(e2), a2 = "visit") {
    return {
      id: `v${t2}`,
      lat: s2.lat + N(e2),
      lon: s2.lon + N(e2),
      kind: a2,
      born: i2
    };
  }
  function b() {
    let e2, t2 = (e2 = 128, () => {
      e2 |= 0;
      let t3 = Math.imul((e2 = e2 + 1831565813 | 0) ^ e2 >>> 15, 1 | e2);
      return (((t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3) ^ t3 >>> 14) >>> 0) / 4294967296;
    }), i2 = Date.now(), s2 = Array.from({ length: 14 }, (e3, s3) => S(t2, s3, i2 - 420 * s3)), a2 = (e3, t3, s3, a3) => {
      let n2 = j.find((e4) => e4.city === s3);
      return {
        id: e3,
        label: t3,
        city: n2.city,
        country: n2.country,
        lat: n2.lat,
        lon: n2.lon,
        at: i2 - a3
      };
    };
    return {
      count: 128,
      pages: [
        { path: "/pricing", visitors: 31 },
        { path: "/docs/quickstart", visitors: 24 },
        { path: "/", visitors: 19 },
        { path: "/changelog", visitors: 12 },
        { path: "/blog/realtime-analytics", visitors: 10 }
      ],
      visitors: s2,
      events: [
        a2("e4", "Signed up", "Berlin", 3e3),
        a2("e3", "Upgraded to Pro", "San Francisco", 16e3),
        a2("e2", "Signed up", "Tokyo", 38e3),
        a2("e1", "Signed up", "London", 71e3)
      ],
      tick: 0,
      seq: 100
    };
  }
  function k(e2) {
    let t2 = Math.random, i2 = Date.now(), s2 = e2.tick + 1, a2 = e2.seq, n2 = e2.visitors.filter((e3) => i2 - e3.born < 6400), l2 = 0.3 > t2() ? 2 : 1;
    for (let e3 = 0; e3 < l2; e3++) n2.push(S(t2, ++a2, i2));
    let r2 = e2.count;
    if (s2 % 2 == 0) {
      let e3 = r2 > 148 ? -2 : 2 * (r2 < 116);
      r2 = Math.max(0, r2 + Math.round(7 * t2() - 3) + e3);
    }
    let o2 = e2.pages;
    if (s2 % 2 == 1) {
      o2 = o2.map((e3) => ({ ...e3 }));
      for (let e3 = 0; e3 < 2; e3++) {
        let e4 = o2[Math.floor(t2() * o2.length)];
        e4.visitors = Math.max(
          3,
          Math.min(
            48,
            e4.visitors + (0.52 > t2() ? 1 : -1) * (1 + Math.floor(2 * t2()))
          )
        );
      }
    }
    let c2 = e2.events;
    if (s2 % 4 == 0) {
      let e3 = w(t2), s3 = t2();
      c2 = [
        {
          id: `e${++a2}`,
          label: s3 < 0.14 ? "Upgraded to Team" : s3 < 0.32 ? "Upgraded to Pro" : "Signed up",
          city: e3.city,
          country: e3.country,
          lat: e3.lat,
          lon: e3.lon,
          at: i2
        },
        ...c2
      ].slice(0, 6), n2.push({ ...S(t2, ++a2, i2, e3, "event"), lat: e3.lat, lon: e3.lon });
    }
    return { count: r2, pages: o2, visitors: n2, events: c2, tick: s2, seq: a2 };
  }
  var M = i(48938), L = i.n(M);
  let B = Math.round(216), C = (e2, t2) => ({ x: (t2 - -170) / 350 * 600, y: (76 - e2) / 126 * B }), T = null, $ = (e2) => `${1 === e2 ? "person" : "people"} on the site now`, R = (e2) => e2 instanceof Date ? e2.getTime() : e2, E = () => () => {
  }, P = () => (0, a.useSyncExternalStore)(
    E,
    () => true,
    () => false
  ), z = [...d.T.ease.standard];
  function A(e2) {
    return void 0 === e2.count ? (0, s.jsx)(D, { ...e2 }) : (0, s.jsx)(F, { ...e2, count: e2.count, simulated: false });
  }
  function D(e2) {
    let [t2, i2] = (0, a.useState)(e2.defaultPaused ?? false), [n2, l2] = (0, a.useState)(true), r2 = e2.paused ?? t2, o2 = (function(e3 = true) {
      let [t3, i3] = (0, a.useState)(b);
      return (0, a.useEffect)(() => {
        if (!e3) return;
        let t4 = window.setInterval(() => i3(k), 600);
        return () => window.clearInterval(t4);
      }, [e3]), t3;
    })(!r2 && n2), c2 = (0, a.useCallback)(
      (t3) => {
        i2(t3), e2.onPausedChange?.(t3);
      },
      [e2]
    );
    return (0, s.jsx)(F, {
      ...e2,
      ...o2,
      paused: r2,
      onPausedChange: c2,
      simulated: true,
      onVisibleChange: l2
    });
  }
  function F({
    count: e2,
    pages: t2 = [],
    visitors: i2 = [],
    events: l2 = [],
    connection: r2 = "live",
    paused: d2,
    defaultPaused: v2 = false,
    onPausedChange: p2,
    hidePause: x2 = false,
    label: _2 = $,
    maxPages: g2 = 4,
    maxEvents: m2 = 4,
    title: f2 = "Live visitors",
    className: j2,
    simulated: y2,
    onVisibleChange: w2
  }) {
    let N2 = (0, n.I)() ?? false, S2 = P(), b2 = (0, a.useId)(), k2 = (0, a.useRef)(null), [M2, B2] = (0, a.useState)(v2), C2 = d2 ?? M2, [T2, R2] = (0, a.useState)(""), E2 = { count: e2, pages: t2, visitors: i2, events: l2 }, [z2, A2] = (0, a.useState)(null);
    C2 && !z2 ? A2(E2) : !C2 && z2 && A2(null);
    let D2 = C2 && z2 ? z2 : E2, [U2, O2] = (0, a.useState)(true);
    (0, a.useEffect)(() => {
      let e3 = k2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => {
        O2(e4.isIntersecting), w2?.(e4.isIntersecting);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [w2]);
    let [J2, W2] = (0, a.useState)(0);
    (0, a.useEffect)(() => {
      if (!U2) return;
      let e3 = () => W2(Date.now());
      e3();
      let t3 = window.setInterval(e3, 1e3);
      return () => window.clearInterval(t3);
    }, [U2]);
    let V2 = "connecting" === r2, q2 = C2 ? "paused" : r2, K2 = {
      live: "Live",
      paused: "Paused",
      connecting: "Connecting",
      reconnecting: "Reconnecting"
    };
    return (0, s.jsxs)("section", {
      ref: k2,
      className: [L().root, j2].filter(Boolean).join(" "),
      "aria-labelledby": b2,
      "data-active": U2 && "live" === q2 ? "" : void 0,
      children: [
        (0, s.jsx)("h2", { id: b2, className: L().srOnly, children: f2 }),
        (0, s.jsxs)("header", {
          className: L().head,
          children: [
            (0, s.jsxs)("div", {
              className: L().headText,
              children: [
                (0, s.jsxs)("div", {
                  className: L().status,
                  "data-state": q2,
                  children: [
                    (0, s.jsx)("span", {
                      className: L().dot,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsx)("span", {
                      className: L().stateStack,
                      children: Object.keys(K2).map(
                        (e3) => (0, s.jsx)(
                          "span",
                          {
                            className: L().stateLabel,
                            "data-on": e3 === q2 ? "" : void 0,
                            "aria-hidden": e3 !== q2 || void 0,
                            children: K2[e3]
                          },
                          e3
                        )
                      )
                    })
                  ]
                }),
                (0, s.jsxs)("p", {
                  className: L().countRow,
                  children: [
                    (0, s.jsxs)("span", {
                      className: L().count,
                      "data-pending": V2 ? "" : void 0,
                      children: [
                        (0, s.jsx)(I, { value: D2.count, reduced: N2, grow: true }),
                        (0, s.jsx)("span", {
                          className: L().countSkeleton,
                          "aria-hidden": "true"
                        })
                      ]
                    }),
                    (0, s.jsx)("span", {
                      className: L().countLabel,
                      children: _2(D2.count)
                    }),
                    (0, s.jsx)("span", {
                      className: L().srOnly,
                      children: V2 ? "Connecting to the live stream" : `${D2.count} ${_2(D2.count)}`
                    })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: L().headActions,
              children: [
                y2 ? (0, s.jsx)("span", {
                  className: L().meta,
                  children: "Sample data"
                }) : null,
                x2 ? null : (0, s.jsx)(u.m, {
                  content: C2 ? "Resume updates" : "Pause updates",
                  children: (0, s.jsx)(h.$, {
                    variant: "ghost",
                    size: "sm",
                    className: L().iconButton,
                    "aria-label": C2 ? "Resume live updates" : "Pause live updates",
                    "aria-pressed": C2,
                    onClick: () => {
                      let e3 = !C2;
                      void 0 === d2 && B2(e3), p2?.(e3), R2(
                        e3 ? "Live updates paused." : y2 ? "Live updates resumed. Simulated stream, no visitors are tracked." : "Live updates resumed."
                      );
                    },
                    disabled: V2,
                    children: C2 ? (0, s.jsx)(o.A, { size: 16, "aria-hidden": "true" }) : (0, s.jsx)(c.A, {
                      size: 16,
                      "aria-hidden": "true"
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)(H, {
          visitors: D2.visitors,
          events: D2.events,
          reduced: N2,
          hydrated: S2
        }),
        (0, s.jsxs)("div", {
          className: L().lists,
          children: [
            (0, s.jsxs)("div", {
              className: L().panel,
              children: [
                (0, s.jsxs)("div", {
                  className: L().panelHead,
                  children: [
                    (0, s.jsx)("h3", {
                      className: L().panelTitle,
                      children: "Top pages"
                    }),
                    (0, s.jsx)("span", {
                      className: L().meta,
                      children: "Visitors"
                    })
                  ]
                }),
                (0, s.jsx)(Y, { pages: D2.pages, max: g2, connecting: V2 })
              ]
            }),
            (0, s.jsxs)("div", {
              className: L().panel,
              children: [
                (0, s.jsxs)("div", {
                  className: L().panelHead,
                  children: [
                    (0, s.jsx)("h3", {
                      className: L().panelTitle,
                      children: "Just now"
                    }),
                    (0, s.jsx)("span", {
                      className: L().meta,
                      children: "Signups and upgrades"
                    })
                  ]
                }),
                (0, s.jsx)(G, {
                  events: D2.events,
                  max: m2,
                  now: J2,
                  hydrated: S2,
                  connecting: V2
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: L().srOnly,
          "aria-live": "polite",
          children: T2
        })
      ]
    });
  }
  function I({ value: e2, reduced: t2, grow: i2 = false }) {
    let a2 = Math.max(0, Math.round(e2)).toLocaleString("en-US"), n2 = P() && i2, l2 = a2.split("");
    return (0, s.jsx)("span", {
      className: L().rolling,
      "aria-hidden": "true",
      "data-reduced": t2 ? "" : void 0,
      children: l2.map((e3, t3) => {
        let i3 = l2.length - t3;
        return /\d/.test(e3) ? (0, s.jsx)(U, { digit: Number(e3), enter: n2 }, i3) : (0, s.jsx)("span", { children: e3 }, `s${i3}`);
      })
    });
  }
  function U({ digit: e2, enter: t2 }) {
    let [i2] = (0, a.useState)(t2);
    return (0, s.jsxs)("span", {
      className: L().digit,
      "data-enter": i2 ? "" : void 0,
      children: [
        (0, s.jsx)("span", { className: L().digitSizer, children: "0" }),
        (0, s.jsx)("span", {
          className: L().digitWindow,
          children: (0, s.jsx)("span", {
            className: L().digitStrip,
            style: { transform: `translateY(${-(10 * e2)}%)` },
            children: "0123456789".split("").map((e3) => (0, s.jsx)("span", { children: e3 }, e3))
          })
        })
      ]
    });
  }
  function O(e2) {
    let [t2] = (0, a.useState)(() => new Set(e2));
    return t2;
  }
  function H({ visitors: e2, events: t2, reduced: i2, hydrated: n2 }) {
    let o2 = (0, a.useMemo)(
      () => (function() {
        if (T) return T;
        let e3 = "";
        for (let t3 = 3.125; t3 < B; t3 += 6.25) {
          let i3 = 76 - t3 / B * 126;
          for (let s2 = 3.125; s2 < 600; s2 += 6.25)
            (function(e4, t4) {
              let i4 = false;
              for (let s3 of p || (p = v.map((e5) => {
                let t5 = 180, i5 = -180, s4 = 90, a2 = -90;
                for (let n3 = 0; n3 < e5.length; n3 += 2)
                  t5 = Math.min(t5, e5[n3]), i5 = Math.max(i5, e5[n3]), s4 = Math.min(s4, e5[n3 + 1]), a2 = Math.max(a2, e5[n3 + 1]);
                return { ring: e5, minX: t5, maxX: i5, minY: s4, maxY: a2 };
              }))) {
                if (e4 < s3.minX || e4 > s3.maxX || t4 < s3.minY || t4 > s3.maxY)
                  continue;
                let a2 = s3.ring, n3 = a2.length / 2;
                for (let s4 = 0, l2 = n3 - 1; s4 < n3; l2 = s4++) {
                  let n4 = a2[2 * s4], r2 = a2[2 * s4 + 1], o3 = a2[2 * l2], c3 = a2[2 * l2 + 1];
                  r2 > t4 != c3 > t4 && e4 < (o3 - n4) * (t4 - r2) / (c3 - r2) + n4 && (i4 = !i4);
                }
              }
              return i4;
            })(-170 + s2 / 600 * 350, i3) && (e3 += `M${s2.toFixed(2)} ${t3.toFixed(2)}h0`);
        }
        return T = e3;
      })(),
      []
    ), c2 = O(e2.map((e3) => e3.id)), h2 = O(t2.map((e3) => e3.id)), u2 = t2[0], x2 = u2 && !h2.has(u2.id) && void 0 !== u2.lat && void 0 !== u2.lon ? u2 : null, [_2, g2] = (0, a.useState)(null), m2 = x2?.id;
    (0, a.useEffect)(() => {
      if (!m2) return;
      let e3 = window.setTimeout(() => g2(m2), 2e3);
      return () => window.clearTimeout(e3);
    }, [m2]);
    let j2 = x2 && _2 !== x2.id ? x2 : null, y2 = j2?.lat !== void 0 && void 0 !== j2.lon ? C(j2.lat, j2.lon) : null, w2 = y2 ? y2.x / 600 > 0.8 ? "end" : y2.x / 600 < 0.2 ? "start" : "center" : "center";
    return (0, s.jsxs)("div", {
      className: L().map,
      "aria-hidden": "true",
      children: [
        (0, s.jsxs)("svg", {
          viewBox: `0 0 600 ${B}`,
          className: L().mapSvg,
          children: [
            (0, s.jsx)("path", { d: o2, className: L().land }),
            (0, s.jsx)(l.N, {
              initial: false,
              children: e2.map((e3) => {
                let { x: t3, y: a2 } = C(e3.lat, e3.lon), l2 = "event" === e3.kind, o3 = n2 && !c2.has(e3.id) && !i2;
                return (0, s.jsxs)(
                  r.PY1.g,
                  {
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: {
                        duration: i2 ? 0 : d.T.duration.fast,
                        ease: z
                      }
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.4 * !i2, ease: z }
                    },
                    children: [
                      o3 ? (0, s.jsx)("circle", {
                        cx: t3,
                        cy: a2,
                        r: l2 ? 3.4 : 2.6,
                        className: l2 ? L().ringStrong : L().ring
                      }) : null,
                      (0, s.jsx)("circle", {
                        cx: t3,
                        cy: a2,
                        r: l2 ? 3.4 : 2.6,
                        className: l2 ? L().pingStrong : L().ping
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          ]
        }),
        (0, s.jsx)(l.N, {
          children: j2 && y2 ? (0, s.jsx)(
            r.PY1.span,
            {
              className: L().mapLabel,
              style: {
                left: `${y2.x / 600 * 100}%`,
                top: `${y2.y / B * 100}%`
              },
              initial: { opacity: 0, y: 2 * !i2 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: i2 ? 0 : d.T.duration.fast,
                  ease: z
                }
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.1 * !i2, ease: z }
              },
              children: (0, s.jsxs)("span", {
                className: L().mapLabelInner,
                "data-align": w2,
                children: [
                  j2.flag ?? (0, s.jsx)(f, {
                    code: j2.country,
                    className: L().flag
                  }),
                  (0, s.jsx)("span", { children: j2.city })
                ]
              })
            },
            j2.id
          ) : null
        })
      ]
    });
  }
  let J = [88, 72, 60, 44, 36, 28];
  function Y({ pages: e2, max: t2, connecting: i2 }) {
    let n2 = (0, a.useMemo)(
      () => e2.map((e3, t3) => ({ ...e3, i: t3 })).sort((e3, t3) => t3.visitors - e3.visitors || e3.i - t3.i),
      [e2]
    ), l2 = O(n2.slice(0, t2 + 1).map((e3) => e3.path)), r2 = n2[0]?.visitors || 1, o2 = 36 * t2 - 4;
    if (i2) return (0, s.jsx)(W, { rows: t2, height: o2, bars: true });
    if (!n2.length)
      return (0, s.jsx)("p", {
        className: L().empty,
        style: { height: o2 },
        children: "No one is browsing right now"
      });
    let c2 = n2.slice(0, t2 + 1), d2 = Math.min(t2, n2.length);
    return (0, s.jsx)("ol", {
      className: L().rows,
      style: { height: o2 },
      "aria-label": `Top ${d2} pages by visitors`,
      children: c2.map((e3, i3) => {
        let a2 = i3 >= t2;
        return (0, s.jsxs)(
          "li",
          {
            className: L().pageRow,
            "data-enter": l2.has(e3.path) ? void 0 : "",
            "data-out": a2 ? "" : void 0,
            "aria-hidden": !!a2 || void 0,
            style: { transform: `translateY(${36 * i3}px)` },
            children: [
              (0, s.jsx)("span", {
                className: L().bar,
                style: { width: `${Math.max(4, e3.visitors / r2 * 100)}%` },
                "aria-hidden": "true"
              }),
              (0, s.jsx)("span", {
                className: L().path,
                title: e3.path,
                children: e3.path
              }),
              (0, s.jsxs)("span", {
                className: L().value,
                children: [
                  (0, s.jsx)(I, { value: e3.visitors, reduced: false }),
                  (0, s.jsxs)("span", {
                    className: L().srOnly,
                    children: [e3.visitors, " visitors"]
                  })
                ]
              })
            ]
          },
          e3.path
        );
      })
    });
  }
  function G({ events: e2, max: t2, now: i2, hydrated: a2, connecting: n2 }) {
    let l2 = O(e2.map((e3) => e3.id)), r2 = 36 * t2 - 4;
    if (n2) return (0, s.jsx)(W, { rows: t2, height: r2 });
    if (!e2.length)
      return (0, s.jsx)("p", {
        className: L().empty,
        style: { height: r2 },
        children: "Signups and upgrades show up here"
      });
    let o2 = e2.slice(0, t2 + 1);
    return (0, s.jsx)("ol", {
      className: L().rows,
      style: { height: r2 },
      "aria-label": "Recent signups and upgrades",
      children: o2.map((e3, n3) => {
        let r3, o3, c2 = n3 >= t2, d2 = e3.country.toUpperCase() in m ? x[e3.country.toUpperCase()] : e3.country, h2 = a2 && i2 ? (r3 = Math.max(0, Math.round((i2 - R(e3.at)) / 1e3))) < 5 ? "now" : r3 < 60 ? `${r3}s` : r3 < 3600 ? `${Math.floor(r3 / 60)}m` : `${Math.floor(r3 / 3600)}h` : "";
        return (0, s.jsxs)(
          "li",
          {
            className: L().eventRow,
            "data-enter": l2.has(e3.id) ? void 0 : "",
            "data-out": c2 ? "" : void 0,
            "aria-hidden": !!c2 || void 0,
            style: { transform: `translateY(${36 * n3}px)` },
            children: [
              e3.flag ?? (0, s.jsx)(f, { code: e3.country, className: L().flag }),
              (0, s.jsxs)("span", {
                className: L().eventText,
                children: [
                  (0, s.jsx)("span", {
                    className: L().eventLabel,
                    children: e3.label
                  }),
                  (0, s.jsx)("span", {
                    className: L().eventPlace,
                    children: e3.city
                  })
                ]
              }),
              (0, s.jsx)("span", {
                className: L().time,
                "aria-hidden": "true",
                children: h2
              }),
              (0, s.jsx)("span", {
                className: L().srOnly,
                children: `${e3.label}, ${e3.city}, ${d2}${h2 ? `, ${(o3 = Math.max(0, Math.round((i2 - R(e3.at)) / 1e3))) < 5 ? "just now" : o3 < 60 ? `${o3} seconds ago` : o3 < 3600 ? `${Math.floor(o3 / 60)} minutes ago` : `${Math.floor(o3 / 3600)} hours ago`}` : ""}`
              })
            ]
          },
          e3.id
        );
      })
    });
  }
  function W({ rows: e2, height: t2, bars: i2 = false }) {
    return (0, s.jsx)("div", {
      className: L().rows,
      style: { height: t2 },
      "aria-hidden": "true",
      children: Array.from(
        { length: e2 },
        (e3, t3) => (0, s.jsxs)(
          "span",
          {
            className: L().skeletonRow,
            style: { transform: `translateY(${36 * t3}px)` },
            children: [
              i2 ? null : (0, s.jsx)("span", { className: L().skeletonFlag }),
              (0, s.jsx)("span", {
                className: L().skeletonLine,
                style: { width: `${J[t3 % J.length]}%` }
              })
            ]
          },
          t3
        )
      )
    });
  }
  var V = i(16186), q = i.n(V);
  function K() {
    return (0, s.jsx)("div", {
      className: q().demo,
      children: (0, s.jsx)(A, {})
    });
  }
  let Q = K;
}

__m(__module,__exports,__require);
});
A.cssFor("live-visitors", [16186,48938]);
A.item("live-visitors", {entry:82980, export:"LiveVisitorsDemo", kind:"component", tier:"pro", unresolved:[]});
})();