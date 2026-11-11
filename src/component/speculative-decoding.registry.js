/* speculative-decoding (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(66754, ".root{--slider-thumb:22px;--slider-track:6px;display:grid;width:100%;min-width:0;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);user-select:none;-webkit-user-select:none}\n.root[data-dragging],.root[data-dragging] .control,.root[data-dragging] .thumb{cursor:grabbing}\n.root[data-disabled]{opacity:.5}\n.root[data-disabled] .control,.root[data-disabled] .markLabel,.root[data-disabled] .thumb{cursor:not-allowed}\n.header{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-4)}\n.label{min-width:0;font-weight:500}\n.readout{display:inline-flex;flex:none;align-items:center;gap:.3em;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dash{color:var(--text-muted)}\n.body{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}\n.start{display:flex;grid-area:1/1;margin-right:var(--space-3)}\n.end{display:flex;grid-area:1/3;margin-left:var(--space-3)}\n.control{position:relative;grid-area:1/2;height:var(--control-height-md);cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.track{position:absolute;top:50%;right:calc(var(--slider-thumb) / 2);left:calc(var(--slider-thumb) / 2);height:var(--slider-track);margin-top:calc(var(--slider-track) / -2);border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--control-fill)}\n.fill .tick{background:color-mix(in oklab,var(--control-glyph) 60%,transparent)}\n.tick{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 30%,transparent)}\n.thumbs{position:absolute;inset:0 calc(var(--slider-thumb) / 2);container-type:inline-size;pointer-events:none}\n.thumbLayer{position:absolute;inset:0}\n.thumb{position:absolute;top:50%;right:0;box-sizing:border-box;width:var(--slider-thumb);height:var(--slider-thumb);translate:50% -50%;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);pointer-events:auto;cursor:grab;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:-11px;border-radius:inherit}\n@media (prefers-reduced-motion:reduce){.markLabel,.thumb{transition:none}\n.bubbleAnchor{--edge:calc(var(--slider-thumb) / 2);--x:calc(var(--at, 0) * 1cqw);position:absolute;right:0;bottom:calc(50% + var(--slider-thumb) / 2 + 8px);display:flex;translate:clamp(calc(100% - var(--edge) - var(--x)),50%,calc(100cqw + var(--edge) - var(--x))) 0;pointer-events:none}\n@media (pointer:coarse){.bubbleAnchor{bottom:calc(50% + var(--slider-thumb) / 2 + 18px)}\n.bubble{display:inline-flex;min-height:1.75rem;align-items:center;padding:0 var(--space-3);border:1px solid color-mix(in oklab,var(--background) 14%,var(--foreground));border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-size:var(--text-sm);font-weight:500;white-space:nowrap;transform-origin:50% 100%}\n.marks{position:relative;grid-area:2/2;height:1.25rem;margin:calc(var(--space-1) * -1) calc(var(--slider-thumb) / 2) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.markLabel{position:absolute;top:0;translate:-50% 0;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.markLabel[data-edge=start]{translate:max(-50%,calc(var(--slider-thumb) / -2)) 0}\n.markLabel[data-edge=end]{translate:min(-50%,calc(-100% + var(--slider-thumb) / 2)) 0}\n.markLabel[data-on]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.markLabel:hover{color:var(--foreground)}\n.number{display:inline-flex;align-items:center;white-space:nowrap;font-variant-numeric:tabular-nums}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}", {});
A.regCss(75539, ".demo{display:grid;width:100%;max-width:720px;margin-inline:auto}", {"demo":"demo"});
A.regCss(81834, ".speculative-decoding_root__X3gPx{container-type:inline-size;width:100%;min-width:0}.speculative-decoding_card__iEVY2{--sd-draft:var(--series-2);--sd-target:var(--series-1);--sd-label:120px;--sd-row:32px;position:relative;display:grid;min-width:0;gap:var(--space-5);padding:var(--space-6);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);-webkit-tap-highlight-color:transparent}[data-theme=dark] .speculative-decoding_card__iEVY2{--sd-draft:color-mix(in oklab,var(--series-2) 72%,var(--foreground))}.speculative-decoding_header__eba3Y{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);min-width:0}.speculative-decoding_heading__EYToX{display:grid;gap:2px;min-width:0}.speculative-decoding_title__WIGMV{margin:0;font-size:var(--text-base);font-weight:500;line-height:1.35}.speculative-decoding_status__jVYxP{display:grid;min-width:0;min-height:calc(1em * var(--leading-body));margin:0;color:var(--text-secondary)}.speculative-decoding_swap__48Khv{display:grid;min-width:0}.speculative-decoding_swap__48Khv>span{grid-area:1/1;display:inline-flex;align-items:center;gap:6px;min-width:0}.speculative-decoding_statusCheck__GHLCb{flex:none;color:var(--success)}.speculative-decoding_actions__WhYUc{display:flex;flex:none;gap:var(--space-2)}.speculative-decoding_iconButton__bk87Z{display:grid;width:32px;height:32px;place-items:center;padding:0;border:1px solid var(--border);border-radius:50%;background:var(--surface);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.speculative-decoding_iconButton__bk87Z:hover:not(:disabled){color:var(--foreground);background:var(--surface-muted)}}.speculative-decoding_iconButton__bk87Z:disabled{cursor:not-allowed;opacity:.45}.speculative-decoding_iconStack__12Rva{display:grid}.speculative-decoding_iconStack__12Rva>svg{grid-area:1/1;opacity:0;transition:opacity .1s var(--ease-standard)}.speculative-decoding_iconStack__12Rva>svg[data-on]{opacity:1;transition:opacity var(--duration-fast) var(--ease-enter)}.speculative-decoding_lanes__G7yGK{display:grid;grid-template-columns:var(--sd-label) minmax(0,1fr);gap:0 var(--space-4);align-items:start;min-width:0}.speculative-decoding_laneLabels__o94Qe{display:grid;grid-template-rows:var(--sd-row) var(--sd-row);row-gap:var(--space-2);min-width:0}.speculative-decoding_laneLabel__fEZ2p{display:flex;align-items:center;gap:10px;min-width:0}.speculative-decoding_laneDot__XmqCE{display:grid;width:10px;height:10px;flex:none;place-items:center}.speculative-decoding_laneDot__XmqCE:before{content:\"\";width:6px;height:6px;border-radius:50%;background:var(--sd-draft)}.speculative-decoding_laneLabel__fEZ2p[data-lane=target] .speculative-decoding_laneDot__XmqCE:before{width:10px;height:10px;background:var(--sd-target)}.speculative-decoding_laneText__4oQAB{display:grid;min-width:0;line-height:1.2}.speculative-decoding_laneName__Vm_p6{overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.speculative-decoding_laneDetail__MnJ30{color:var(--text-muted);font-size:var(--text-xs)}.speculative-decoding_track__j5vlj{min-width:0;overflow:hidden}.speculative-decoding_columns__9nFKR{display:flex;flex-wrap:wrap;align-items:flex-start;gap:var(--space-2) 6px;min-height:calc(var(--sd-row) * 2 + var(--space-2))}.speculative-decoding_column__kZBto{display:grid;grid-template-rows:var(--sd-row) var(--sd-row);row-gap:var(--space-2);min-width:40px;animation:speculative-decoding_sd-in__30piv .14s var(--ease-enter) backwards;transition:opacity .12s var(--ease-standard)}.speculative-decoding_column__kZBto[data-leaving]{opacity:0}@keyframes speculative-decoding_sd-in__30piv{0%{opacity:0;transform:translateX(-4px)}}.speculative-decoding_chip__7tffM{position:relative;display:flex;min-width:0;align-items:center;justify-content:center;padding:0 10px;border-radius:10px;white-space:nowrap}.speculative-decoding_chip__7tffM:after,.speculative-decoding_chip__7tffM:before{content:\"\";position:absolute;inset:0;border-radius:inherit;transition:opacity var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.speculative-decoding_chip__7tffM:before{border:1px dashed color-mix(in oklab,var(--sd-draft) 60%,transparent);background:color-mix(in oklab,var(--sd-draft) 6%,transparent)}.speculative-decoding_chip__7tffM:after{border:1px solid color-mix(in oklab,var(--sd-draft) 42%,transparent);background:color-mix(in oklab,var(--sd-draft) 11%,var(--surface));opacity:0}.speculative-decoding_column__kZBto[data-state=accepted] .speculative-decoding_chip__7tffM:before{opacity:0}.speculative-decoding_column__kZBto[data-state=accepted] .speculative-decoding_chip__7tffM:after{opacity:1}.speculative-decoding_column__kZBto[data-state=rejected] .speculative-decoding_chip__7tffM:before{border-color:color-mix(in oklab,var(--danger) 55%,transparent);background:color-mix(in oklab,var(--danger) 6%,transparent)}.speculative-decoding_column__kZBto[data-state=discarded] .speculative-decoding_chip__7tffM{opacity:.3;transition:opacity var(--duration-fast) var(--ease-standard)}.speculative-decoding_chip__7tffM[data-empty]:after,.speculative-decoding_chip__7tffM[data-empty]:before{content:none}.speculative-decoding_chipText__0Vno3{position:relative;z-index:1;color:var(--foreground);transition:color var(--duration-fast) var(--ease-standard)}.speculative-decoding_column__kZBto[data-state=rejected] .speculative-decoding_chipText__0Vno3{color:var(--text-muted)}.speculative-decoding_strike__OR2_i{position:absolute;z-index:2;top:50%;right:-2px;left:-2px;height:1.5px;margin-top:-.75px;border-radius:1px;background:var(--danger);transform:scaleX(0);transform-origin:left center;transition:transform .18s var(--ease-enter)}.speculative-decoding_column__kZBto[data-state=rejected] .speculative-decoding_strike__OR2_i{transform:scaleX(1)}.speculative-decoding_cell__u_MX_{position:relative;display:flex;min-width:0;align-items:center;justify-content:center;padding:0 10px;overflow:hidden;border-radius:10px;background:var(--surface-muted);white-space:nowrap}.speculative-decoding_fill__yNZbO{position:absolute;inset:0;background:color-mix(in oklab,var(--sd-target) 16%,transparent);transform:scaleX(clamp(0,calc(var(--sweep, 0) - var(--j, 0)),1));transform-origin:left center}.speculative-decoding_column__kZBto[data-state=bonus] .speculative-decoding_cell__u_MX_{background:color-mix(in oklab,var(--sd-target) 16%,var(--surface))}.speculative-decoding_column__kZBto[data-state=discarded] .speculative-decoding_fill__yNZbO{background:color-mix(in oklab,var(--text-muted) 10%,transparent)}.speculative-decoding_cellContent__NIjC7{position:relative;display:inline-flex;align-items:center;gap:4px;opacity:0;transform:translateY(2px);transition:opacity .1s var(--ease-standard),transform 0s linear .1s}.speculative-decoding_cellContent__NIjC7[data-on]{opacity:1;transform:none;transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-fast) var(--ease-enter)}.speculative-decoding_hitIcon__N4zE_{color:var(--success)}.speculative-decoding_missIcon__cV4oq{color:var(--danger)}.speculative-decoding_bonusIcon__VnQav{color:var(--sd-target)}.speculative-decoding_targetText__QleJk{color:var(--foreground)}.speculative-decoding_column__kZBto[data-state=slot] .speculative-decoding_chip__7tffM{width:44px}.speculative-decoding_column__kZBto[data-state=slot] .speculative-decoding_chip__7tffM:before{border-color:var(--border-strong);background:transparent}.speculative-decoding_column__kZBto[data-state=slot] .speculative-decoding_cell__u_MX_{width:44px}.speculative-decoding_summary__9Nbud{display:grid;grid-template-rows:var(--sd-row) var(--sd-row);row-gap:var(--space-2);min-width:0;color:var(--text-secondary);animation:speculative-decoding_sd-fade__9_hVy var(--duration-standard) var(--ease-enter) .12s backwards}.speculative-decoding_summaryRow__cNHTe{display:flex;align-items:center;min-width:0;font-variant-numeric:tabular-nums}@keyframes speculative-decoding_sd-fade__9_hVy{0%{opacity:0}}.speculative-decoding_alert__Kciqx{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;min-width:0;padding:10px 12px;border:1px solid color-mix(in oklab,var(--danger) 24%,var(--border));border-radius:var(--radius-control);background:color-mix(in oklab,var(--danger) 5%,var(--surface))}.speculative-decoding_alertIcon__Ge8UG{flex:none;color:var(--danger)}.speculative-decoding_alertText__6AT5C{flex:1;min-width:14ch}.speculative-decoding_outputs__sBCPm{display:grid;min-width:0;padding-top:var(--space-5);border-top:1px solid var(--border)}.speculative-decoding_line__tWivJ{display:grid;grid-template-columns:var(--sd-label) minmax(0,1fr);gap:4px var(--space-4);align-items:start;min-width:0}.speculative-decoding_baselineWrap__MrzEy{overflow:hidden}.speculative-decoding_baselineWrap__MrzEy>.speculative-decoding_line__tWivJ{padding-top:var(--space-4)}.speculative-decoding_lineLabel__pkE_d{display:grid;gap:1px;min-width:0;padding-top:3px;line-height:1.3}.speculative-decoding_lineName__hMfuf{font-weight:500}.speculative-decoding_lineMeta__wSHyF{display:inline-flex;align-items:center;gap:4px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.speculative-decoding_metaCheck__DD_C_{flex:none;color:var(--success)}.speculative-decoding_lineText__k8GT_{min-width:0;margin:0;color:var(--foreground);line-height:1.8}.speculative-decoding_word__UZQCv{white-space:nowrap}.speculative-decoding_tok__8ymdn{position:relative;z-index:1;display:inline-block;opacity:0;text-decoration:underline 1.5px;text-decoration-color:transparent;text-underline-offset:5px;transition:opacity .14s var(--ease-enter),text-decoration-color var(--duration-standard) var(--ease-standard) .3s}.speculative-decoding_tok__8ymdn[data-on]{opacity:1}.speculative-decoding_tok__8ymdn[data-on][data-origin=draft]{text-decoration-color:color-mix(in oklab,var(--sd-draft) 60%,transparent)}.speculative-decoding_tok__8ymdn[data-on][data-origin=target]{text-decoration-color:color-mix(in oklab,var(--sd-target) 70%,transparent)}.speculative-decoding_line__tWivJ[data-line=base] .speculative-decoding_tok__8ymdn[data-on]{text-decoration-color:color-mix(in oklab,var(--sd-target) 45%,transparent);transition-delay:0s,.12s}.speculative-decoding_footer__Mx16R{display:grid;gap:var(--space-4);min-width:0;padding-top:var(--space-5);border-top:1px solid var(--border)}.speculative-decoding_stats__PxRGE{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-4);margin:0}.speculative-decoding_stat__jfeE1{display:flex;flex-direction:column-reverse;justify-content:flex-end;gap:2px;min-width:0}.speculative-decoding_statLabel__ItFuG{color:var(--text-muted);font-size:var(--text-xs)}.speculative-decoding_statValue__n3g2_{margin:0;font-size:var(--text-xl);font-weight:500;letter-spacing:-.02em;line-height:1.2;font-variant-numeric:tabular-nums}.speculative-decoding_controls__MCAzD{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--space-3) var(--space-6);min-width:0}.speculative-decoding_sliderSlot__AHDpq{flex:1 1 220px;min-width:0;max-width:320px}.speculative-decoding_switch__H3Adi{flex:none}.speculative-decoding_number__kEuxB{display:inline-grid;min-width:0}.speculative-decoding_number__kEuxB>*{grid-area:1/1}.speculative-decoding_numberDash__sWbPt{color:var(--text-muted);opacity:0;transition:opacity .1s var(--ease-standard)}.speculative-decoding_number__kEuxB[data-empty] .speculative-decoding_numberDash__sWbPt{opacity:1;transition:opacity var(--duration-fast) var(--ease-enter)}.speculative-decoding_numberValue__tZi1r{display:inline-flex;align-items:flex-start;white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-enter)}.speculative-decoding_number__kEuxB[data-empty] .speculative-decoding_numberValue__tZi1r{opacity:0;transition:opacity .1s var(--ease-standard)}.speculative-decoding_wheelSlot__AYXDH{display:inline-grid;grid-template-columns:1fr;transition:grid-template-columns .32s var(--ease-standard)}.speculative-decoding_wheelSlot__AYXDH[data-off]{grid-template-columns:0fr}.speculative-decoding_wheel__Jlmsn{display:block;height:1.2em;min-width:0;overflow:hidden;mask-image:linear-gradient(180deg,transparent,#000 14%,#000 86%,transparent)}.speculative-decoding_strip__9f75Z{display:flex;flex-direction:column;transition:transform .46s var(--ease-standard)}.speculative-decoding_strip__9f75Z>span{display:block;height:1.2em;line-height:1.2em;text-align:center}.speculative-decoding_numberSuffix__4uvxj{color:var(--text-secondary)}.speculative-decoding_card__iEVY2[data-status=error] .speculative-decoding_lanes__G7yGK,.speculative-decoding_card__iEVY2[data-status=error] .speculative-decoding_outputs__sBCPm,.speculative-decoding_card__iEVY2[data-status=loading] .speculative-decoding_lanes__G7yGK,.speculative-decoding_card__iEVY2[data-status=loading] .speculative-decoding_outputs__sBCPm{opacity:.5}.speculative-decoding_empty__FpeUH{display:grid;min-height:200px;place-content:center;gap:4px;text-align:center}.speculative-decoding_emptyTitle__4tSKp{margin:0;font-weight:500}.speculative-decoding_emptyText__81zmo{max-width:36ch;margin:0;color:var(--text-secondary);text-wrap:pretty}.speculative-decoding_srOnly__2Y12r{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.speculative-decoding_column__kZBto,.speculative-decoding_summary__9Nbud{animation:none}}@media (prefers-reduced-motion:reduce){.speculative-decoding_cellContent__NIjC7,.speculative-decoding_cellContent__NIjC7[data-on],.speculative-decoding_chip__7tffM:after,.speculative-decoding_chip__7tffM:before,.speculative-decoding_iconStack__12Rva>svg,.speculative-decoding_iconStack__12Rva>svg[data-on],.speculative-decoding_strike__OR2_i,.speculative-decoding_strip__9f75Z,.speculative-decoding_wheelSlot__AYXDH{transition:none}}@media (prefers-reduced-motion:reduce){.speculative-decoding_tok__8ymdn{transition:opacity .12s linear}}.speculative-decoding_card__iEVY2[data-reduced] .speculative-decoding_column__kZBto,.speculative-decoding_card__iEVY2[data-reduced] .speculative-decoding_summary__9Nbud{animation:none}.speculative-decoding_card__iEVY2[data-reduced] .speculative-decoding_cellContent__NIjC7,.speculative-decoding_card__iEVY2[data-reduced] .speculative-decoding_strike__OR2_i,.speculative-decoding_card__iEVY2[data-reduced] .speculative-decoding_strip__9f75Z,.speculative-decoding_card__iEVY2[data-reduced] .speculative-decoding_wheelSlot__AYXDH{transition:none}", {"root":"speculative-decoding_root__X3gPx","card":"speculative-decoding_card__iEVY2","header":"speculative-decoding_header__eba3Y","heading":"speculative-decoding_heading__EYToX","title":"speculative-decoding_title__WIGMV","status":"speculative-decoding_status__jVYxP","swap":"speculative-decoding_swap__48Khv","statusCheck":"speculative-decoding_statusCheck__GHLCb","actions":"speculative-decoding_actions__WhYUc","iconButton":"speculative-decoding_iconButton__bk87Z","iconStack":"speculative-decoding_iconStack__12Rva","lanes":"speculative-decoding_lanes__G7yGK","laneLabels":"speculative-decoding_laneLabels__o94Qe","laneLabel":"speculative-decoding_laneLabel__fEZ2p","laneDot":"speculative-decoding_laneDot__XmqCE","laneText":"speculative-decoding_laneText__4oQAB","laneName":"speculative-decoding_laneName__Vm_p6","laneDetail":"speculative-decoding_laneDetail__MnJ30","track":"speculative-decoding_track__j5vlj","columns":"speculative-decoding_columns__9nFKR","column":"speculative-decoding_column__kZBto","sd-in":"speculative-decoding_sd-in__30piv","chip":"speculative-decoding_chip__7tffM","chipText":"speculative-decoding_chipText__0Vno3","strike":"speculative-decoding_strike__OR2_i","cell":"speculative-decoding_cell__u_MX_","fill":"speculative-decoding_fill__yNZbO","cellContent":"speculative-decoding_cellContent__NIjC7","hitIcon":"speculative-decoding_hitIcon__N4zE_","missIcon":"speculative-decoding_missIcon__cV4oq","bonusIcon":"speculative-decoding_bonusIcon__VnQav","targetText":"speculative-decoding_targetText__QleJk","summary":"speculative-decoding_summary__9Nbud","sd-fade":"speculative-decoding_sd-fade__9_hVy","summaryRow":"speculative-decoding_summaryRow__cNHTe","alert":"speculative-decoding_alert__Kciqx","alertIcon":"speculative-decoding_alertIcon__Ge8UG","alertText":"speculative-decoding_alertText__6AT5C","outputs":"speculative-decoding_outputs__sBCPm","line":"speculative-decoding_line__tWivJ","baselineWrap":"speculative-decoding_baselineWrap__MrzEy","lineLabel":"speculative-decoding_lineLabel__pkE_d","lineName":"speculative-decoding_lineName__hMfuf","lineMeta":"speculative-decoding_lineMeta__wSHyF","metaCheck":"speculative-decoding_metaCheck__DD_C_","lineText":"speculative-decoding_lineText__k8GT_","word":"speculative-decoding_word__UZQCv","tok":"speculative-decoding_tok__8ymdn","footer":"speculative-decoding_footer__Mx16R","stats":"speculative-decoding_stats__PxRGE","stat":"speculative-decoding_stat__jfeE1","statLabel":"speculative-decoding_statLabel__ItFuG","statValue":"speculative-decoding_statValue__n3g2_","controls":"speculative-decoding_controls__MCAzD","sliderSlot":"speculative-decoding_sliderSlot__AHDpq","switch":"speculative-decoding_switch__H3Adi","number":"speculative-decoding_number__kEuxB","numberDash":"speculative-decoding_numberDash__sWbPt","numberValue":"speculative-decoding_numberValue__tZi1r","wheelSlot":"speculative-decoding_wheelSlot__AYXDH","wheel":"speculative-decoding_wheel__Jlmsn","strip":"speculative-decoding_strip__9f75Z","numberSuffix":"speculative-decoding_numberSuffix__4uvxj","empty":"speculative-decoding_empty__FpeUH","emptyTitle":"speculative-decoding_emptyTitle__4tSKp","emptyText":"speculative-decoding_emptyText__81zmo","srOnly":"speculative-decoding_srOnly__2Y12r"});
A.reg(92614, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.r(t), s.d(t, { SpeculativeDecodingDemo: () => V, default: () => Y });
  var a = s(95155), n = s(12115), i = s(25354), r = s(80642), l = s(18310), c = s(92171), d = s(64577), o = s(9005), u = s(2125), p = s(79267), h = s(36619), m = s(92298), x = s(35484), g = s(7770), _ = s(51288), f = s(94274), v = s(50680), j = s(52898), b = s(36690);
  let N = [
    { text: "Your", ease: 0.92, miss: "The" },
    { text: " preview", ease: 0.55, miss: " latest" },
    { text: " deploy", ease: 0.9, miss: " build" },
    { text: " finished", ease: 0.8, miss: " completed" },
    { text: " in", ease: 0.97, miss: " after" },
    { text: " 42", ease: 0.3, miss: " 38" },
    { text: " seconds", ease: 0.95, miss: " minutes" },
    { text: ",", ease: 0.85, miss: " and" },
    { text: " and", ease: 0.9, miss: " so" },
    { text: " all", ease: 0.7, miss: " the" },
    { text: " 318", ease: 0.25, miss: " 300" },
    { text: " checks", ease: 0.85, miss: " tests" },
    { text: " passed", ease: 0.9, miss: " ran" },
    { text: ",", ease: 0.8, miss: "." },
    { text: " so", ease: 0.65, miss: " and" },
    { text: " the", ease: 0.92, miss: " your" },
    { text: " branch", ease: 0.6, miss: " pull" },
    { text: " is", ease: 0.95, miss: " can" },
    { text: " ready", ease: 0.9, miss: " safe" },
    { text: " to", ease: 0.97, miss: " for" },
    { text: " merge", ease: 0.85, miss: " ship" },
    { text: ".", ease: 0.95, miss: " now" }
  ], y = [" the", " a", " and", ",", " to", " of"], w = (e2, t2) => e2.miss ?? y[t2 % y.length];
  function k(e2, t2, s2 = 12) {
    let a2 = [], n2 = Math.max(0, Math.round(t2)), i2 = 0;
    for (; i2 < e2.length; ) {
      let t3 = Math.min(n2, e2.length - i2 - 1), r2 = 0;
      for (; r2 < t3 && (function(e3, t4, s3) {
        let a3 = (Math.imul(e3 + 1, 2654435761) ^ Math.imul(t4 + 1, 374761393) ^ Math.imul(s3 + 7, 668265263)) >>> 0;
        return a3 = Math.imul(
          (a3 = Math.imul(a3 ^ a3 >>> 15, 2246822519)) ^ a3 >>> 13,
          3266489917
        ), ((a3 ^= a3 >>> 16) >>> 0) / 4294967296;
      })(s2, i2 + r2, r2) < (e2[i2 + r2].ease ?? 0.8) * Math.pow(0.95, r2); )
        r2 += 1;
      let l2 = Array.from({ length: t3 }, (t4, s3) => {
        let a3 = i2 + s3;
        return s3 === r2 ? w(e2[a3], a3) : e2[a3].text;
      });
      a2.push({ draft: l2, accepted: r2, target: e2[i2 + r2].text }), i2 += r2 + 1;
    }
    return a2;
  }
  function $(e2, t2 = 0.1) {
    let s2 = [], a2 = [], n2 = 0, i2 = 0, r2 = 0;
    e2.forEach((e3, l3) => {
      let c2 = e3.draft.slice(), d2 = Math.max(0, Math.min(c2.length, Math.round(e3.accepted))), o2 = n2 + c2.length * t2;
      s2.push({
        draft: c2,
        accepted: d2,
        target: e3.target,
        index: l3,
        start: n2,
        verify: o2,
        settle: o2 + 0.72,
        end: o2 + 1,
        outStart: a2.length
      }), c2.slice(0, d2).forEach((e4) => a2.push({ text: e4, origin: "draft", round: l3 })), a2.push({ text: e3.target, origin: "target", round: l3 }), i2 += c2.length, r2 += d2, n2 = o2 + 1;
    });
    let l2 = a2.length;
    return {
      rounds: s2,
      output: a2,
      end: n2,
      stats: {
        passes: s2.length,
        drafted: i2,
        accepted: r2,
        tokens: l2,
        acceptance: i2 ? r2 / i2 : 0,
        tokensPerPass: s2.length ? l2 / s2.length : 0,
        speedup: n2 ? l2 / n2 : 1
      }
    };
  }
  function T(e2, t2) {
    let s2 = e2.output.length, a2 = -1;
    for (let s3 = 0; s3 < e2.rounds.length; s3 += 1)
      e2.rounds[s3].start <= t2 && (a2 = s3);
    let n2 = 0, i2 = 0;
    for (let s3 of e2.rounds) s3.settle <= t2 && (n2 += s3.accepted + 1, i2 += 1);
    let r2 = {
      emitted: n2,
      settled: i2,
      baseline: Math.max(0, Math.min(s2, Math.floor(t2 - 0.72) + 1)),
      specDone: t2 >= e2.end,
      baseDone: t2 >= s2,
      basePass: t2 > 0 ? Math.min(s2, Math.floor(t2) + 1) : 0
    };
    if (a2 < 0 || t2 <= 0)
      return {
        phase: "idle",
        round: -1,
        shown: 0,
        sweep: 0,
        verdicts: 0,
        targetShown: false,
        ...r2
      };
    let l2 = e2.rounds[a2], c2 = l2.draft.length;
    if (t2 >= e2.end)
      return {
        phase: "done",
        round: a2,
        shown: c2,
        sweep: c2,
        verdicts: c2,
        targetShown: true,
        ...r2
      };
    let d2 = c2 ? (l2.verify - l2.start) / c2 : 0, o2 = d2 ? Math.min(c2, Math.floor((t2 - l2.start) / d2) + 1) : 0, u2 = Math.max(0, Math.min(1, (t2 - l2.verify) / 0.4)), p2 = t2 < l2.verify ? 0 : u2 * c2, h2 = Math.min(c2, Math.floor(p2 + 0.45)), m2 = l2.accepted < c2 ? h2 > l2.accepted : u2 >= 1;
    return {
      phase: t2 < l2.verify ? "draft" : t2 < l2.settle ? "verify" : "settle",
      round: a2,
      shown: o2,
      sweep: p2,
      verdicts: h2,
      targetShown: m2,
      ...r2
    };
  }
  var M = s(81834), C = s.n(M);
  let D = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function S({ value: e2, decimals: t2 = 0, suffix: s2, places: n2 = 1 }) {
    let [i2 = "", r2 = ""] = (null === e2 ? "" : e2.toFixed(t2)).split("."), l2 = Math.max(n2, i2.length), c2 = Array.from({ length: l2 }, (e3, t3) => {
      let s3 = l2 - 1 - t3, a2 = i2[i2.length - 1 - s3];
      return {
        key: `i${s3}`,
        digit: void 0 === a2 ? null : Number(a2),
        place: s3
      };
    });
    return (0, a.jsxs)("span", {
      className: C().number,
      "data-empty": null === e2 || void 0,
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("span", { className: C().numberDash, children: "\u2013" }),
        (0, a.jsxs)("span", {
          className: C().numberValue,
          children: [
            c2.map(
              (e3) => (0, a.jsx)(
                "span",
                {
                  className: C().wheelSlot,
                  "data-off": null === e3.digit && e3.place > 0 || void 0,
                  children: (0, a.jsx)("span", {
                    className: C().wheel,
                    children: (0, a.jsx)("span", {
                      className: C().strip,
                      style: {
                        transform: `translateY(${-(10 * (e3.digit ?? 0))}%)`
                      },
                      children: D.map(
                        (e4) => (0, a.jsx)("span", { children: e4 }, e4)
                      )
                    })
                  })
                },
                e3.key
              )
            ),
            t2 > 0 && (0, a.jsx)("span", { children: "." }),
            [...r2.padEnd(t2, "0")].map(
              (e3, t3) => (0, a.jsx)(
                "span",
                {
                  className: C().wheelSlot,
                  children: (0, a.jsx)("span", {
                    className: C().wheel,
                    children: (0, a.jsx)("span", {
                      className: C().strip,
                      style: { transform: `translateY(${-(10 * Number(e3))}%)` },
                      children: D.map(
                        (e4) => (0, a.jsx)("span", { children: e4 }, e4)
                      )
                    })
                  })
                },
                `f${t3}`
              )
            ),
            s2 && (0, a.jsx)("span", { className: C().numberSuffix, children: s2 })
          ]
        })
      ]
    });
  }
  let R = [...g.T.ease.enter], P = { type: "spring", visualDuration: 0.32, bounce: 0 }, E = (e2, t2, s2) => Math.min(s2, Math.max(t2, e2)), L = (e2, t2, s2 = `${t2}s`) => `${e2} ${1 === e2 ? t2 : s2}`, z = (e2) => e2.trim() || "\u2423";
  function A(e2, t2, s2) {
    let [a2, i2] = (0, n.useState)(t2), r2 = void 0 !== e2;
    return [
      r2 ? e2 : a2,
      (0, n.useCallback)(
        (e3) => {
          r2 || i2(e3), s2?.(e3);
        },
        [r2, s2]
      )
    ];
  }
  function I({ children: e2, reduced: t2, className: s2 }) {
    let r2 = (0, n.useRef)(null), [l2, c2] = (0, n.useState)("auto");
    return (0, n.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => c2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(i.PY1.div, {
      className: s2,
      initial: false,
      animate: { height: l2 },
      transition: t2 ? { duration: 0 } : g.T.spring.smooth,
      children: (0, a.jsx)("div", { ref: r2, children: e2 })
    });
  }
  function O({ id: e2, children: t2, reduced: s2, className: n2 }) {
    return (0, a.jsx)("span", {
      className: [C().swap, n2].filter(Boolean).join(" "),
      children: (0, a.jsx)(r.N, {
        initial: false,
        children: (0, a.jsx)(
          i.PY1.span,
          {
            initial: s2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: s2 ? 0 : g.T.duration.fast, ease: R }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !s2 } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function F({
    tokens: e2 = N,
    rounds: t2,
    draftLength: s2,
    defaultDraftLength: y2 = 4,
    onDraftLengthChange: w2,
    compare: M2,
    defaultCompare: D2 = false,
    onCompareChange: B2,
    autoplay: W2 = true,
    seed: V2 = 12,
    draftCost: Y2 = 0.1,
    passDuration: G = 640,
    title: H = "Speculative decoding",
    draftLabel: K = "Draft model",
    draftDetail: Z = "Small, fast",
    targetLabel: J = "Target model",
    targetDetail: U = "Large",
    status: q = "ready",
    error: X,
    onRetry: Q,
    onComplete: ee,
    className: et,
    style: es
  }) {
    let ea, en, ei = (0, l.I)() ?? false, [er, el] = A(s2, y2, w2), [ec, ed] = A(M2, D2, B2), eo = E(Math.round(er), 2, 8), eu = JSON.stringify([t2 ?? e2, t2 ? 0 : eo, V2, Y2]), ep = (0, n.useMemo)(() => {
      let [e3, s3, a2, n2] = JSON.parse(eu);
      return $(t2 ? e3 : k(e3, s3, a2), n2);
    }, [eu]), eh = ep.output.length, em = ec ? Math.max(ep.end, eh) : ep.end, ex = "ready" === q && eh > 0, eg = (0, n.useMemo)(() => {
      var e3;
      let t3;
      return e3 = ep.output, t3 = [], e3.forEach((e4, s3) => {
        let a2 = /^\s/.test(e4.text);
        (!t3.length || a2) && t3.push({ space: a2, items: [] }), t3[t3.length - 1].items.push({
          index: s3,
          text: e4.text.replace(/^\s+/, "")
        });
      }), t3;
    }, [ep]), e_ = (0, n.useRef)({ signature: "", time: 0 }), ef = (0, n.useRef)({
      plan: ep,
      signature: eu,
      end: em,
      reduced: ei,
      passDuration: G,
      onComplete: ee
    });
    (0, n.useLayoutEffect)(() => {
      ef.current = {
        plan: ep,
        signature: eu,
        end: em,
        reduced: ei,
        passDuration: G,
        onComplete: ee
      };
    });
    let [ev, ej] = (0, n.useState)(() => ({ signature: eu, view: T(ep, 0) })), eb = ev.signature === eu ? ev.view : T(ep, 0), [eN, ey] = (0, n.useState)(false), [ew, ek] = (0, n.useState)(""), e$ = (0, n.useRef)(null), eT = (0, n.useCallback)(() => {
      let { plan: e3, signature: t3, reduced: s3 } = ef.current;
      e_.current.signature !== t3 && (e_.current = { signature: t3, time: 0 });
      let a2 = T(e3, e_.current.time);
      return e$.current?.style.setProperty(
        "--sweep",
        String(s3 ? a2.verdicts : Math.round(1e3 * a2.sweep) / 1e3)
      ), ej((e4) => {
        let s4;
        return e4.signature === t3 && (s4 = e4.view, s4.phase === a2.phase && s4.round === a2.round && s4.shown === a2.shown && s4.verdicts === a2.verdicts && s4.targetShown === a2.targetShown && s4.emitted === a2.emitted && s4.baseline === a2.baseline && s4.settled === a2.settled && s4.specDone === a2.specDone && s4.baseDone === a2.baseDone && s4.basePass === a2.basePass) ? e4 : { signature: t3, view: a2 };
      }), a2;
    }, []);
    (0, n.useEffect)(() => {
      if (!eN) return;
      let e3 = 0, t3 = performance.now(), s3 = (a2) => {
        let { end: n2, passDuration: i2, plan: r2 } = ef.current, l2 = Math.min(64, a2 - t3) / Math.max(120, i2);
        t3 = a2;
        let c2 = e_.current.time;
        e_.current.signature === ef.current.signature && (e_.current.time = Math.min(n2, c2 + l2));
        let d2 = eT();
        if (c2 < r2.end && e_.current.time >= r2.end && e_.current.signature === ef.current.signature) {
          ef.current.onComplete?.(r2.stats);
          let { passes: e4, tokens: t4, speedup: s4 } = r2.stats;
          ek(
            `Done. ${L(t4, "token")} in ${L(e4, "target pass", "target passes")}, ${s4.toFixed(1)} times faster than the target alone.`
          );
        }
        if (e_.current.time >= n2 && e_.current.signature === ef.current.signature) {
          d2.baseDone && n2 > r2.end && ek(
            `Target alone finished after ${L(r2.output.length, "pass", "passes")}.`
          ), ey(false);
          return;
        }
        e3 = requestAnimationFrame(s3);
      };
      return e3 = requestAnimationFrame(s3), () => cancelAnimationFrame(e3);
    }, [eN, eT]);
    let eM = (0, n.useRef)(null), eC = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      let e3 = eM.current;
      if (!e3 || !W2 || ei || !ex || eC.current || "u" < typeof IntersectionObserver)
        return;
      let t3 = new IntersectionObserver(
        ([e4]) => {
          e4?.isIntersecting && !eC.current && (eC.current = true, ey(true), t3.disconnect());
        },
        { threshold: 0.35 }
      );
      return t3.observe(e3), () => t3.disconnect();
    }, [W2, ei, ex]);
    let eD = (0, n.useRef)([]), eS = (0, n.useRef)(/* @__PURE__ */ new Map()), eR = (0, n.useRef)([]), eP = (0, n.useRef)(0), eE = (0, n.useCallback)(() => {
      eR.current.forEach((e3) => e3.stop()), eR.current = [], eD.current.forEach((e3) => {
        e3 && (e3.style.transform = "");
      });
    }, []);
    (0, n.useLayoutEffect)(() => {
      let e3 = eP.current, t3 = eb.emitted;
      if (eP.current = t3, t3 <= e3) {
        t3 < e3 && eE();
        return;
      }
      if (!ei)
        for (let s3 = e3; s3 < t3; s3 += 1) {
          let t4 = ep.output[s3], a2 = ep.rounds[t4?.round ?? -1], n2 = eD.current[s3];
          if (!t4 || !a2 || !n2) continue;
          let i2 = s3 - a2.outStart, r2 = eS.current.get(
            i2 < a2.accepted ? `${a2.index}:${i2}` : `${a2.index}:t`
          );
          if (!r2) continue;
          let l2 = r2.getBoundingClientRect(), d2 = n2.getBoundingClientRect(), o2 = Math.round(l2.left - d2.left), u2 = Math.round(l2.top + l2.height / 2 - (d2.top + d2.height / 2));
          Math.abs(o2) + Math.abs(u2) < 1 || (n2.style.transform = `translate(${o2}px, ${u2}px)`, eR.current.push(
            (0, c.i)(
              n2,
              { x: [o2, 0], y: [u2, 0] },
              { ...P, delay: Math.min(0.12, (s3 - e3) * 0.02) }
            )
          ));
        }
    }, [eb.emitted, ep, ei, eE]), (0, n.useEffect)(() => () => eR.current.forEach((e3) => e3.stop()), []);
    let eL = (0, n.useCallback)(
      (e3) => {
        eE(), e_.current = { signature: ef.current.signature, time: 0 }, eT(), ey(e3);
      },
      [eT, eE]
    ), ez = eb.specDone ? ep.stats : (function(e3, t3) {
      if (t3 <= 0) return null;
      let s3 = e3.rounds.slice(0, t3), a2 = s3.reduce((e4, t4) => e4 + t4.draft.length, 0), n2 = s3.reduce((e4, t4) => e4 + t4.accepted, 0), i2 = n2 + s3.length, r2 = s3[s3.length - 1].end;
      return {
        passes: s3.length,
        drafted: a2,
        accepted: n2,
        tokens: i2,
        acceptance: a2 ? n2 / a2 : 0,
        tokensPerPass: i2 / s3.length,
        speedup: i2 / r2
      };
    })(ep, eb.settled), eA = eb.round >= 0 && !eb.specDone ? ep.rounds[eb.round] : null, eI = eA?.draft.length ?? 0, eO = !!eA && eA.accepted === eI, eF = "settle" === eb.phase, eB = null;
    if ("loading" === q) ea = "Loading the decoding run", en = "loading";
    else if ("error" === q) ea = "The run could not load", en = "error";
    else if (eh)
      if (eb.specDone)
        eB = (0, a.jsx)(d.A, {
          className: C().statusCheck,
          size: 15,
          strokeWidth: 2,
          "aria-hidden": "true"
        }), ec && !eb.baseDone ? (ea = `Speculation done in ${L(ep.stats.passes, "pass", "passes")}, target alone still writing`, en = "done-racing") : ec ? (ea = `${L(ep.stats.passes, "pass", "passes")} with speculation, ${eh} without`, en = "done-both") : (ea = `Done in ${L(ep.stats.passes, "target pass", "target passes")}`, en = "done");
      else if (eA)
        if ("draft" === eb.phase)
          ea = eI ? `Draft model proposes ${L(eI, "token")}` : "Target writes the last token", en = `${eb.round}-draft`;
        else if ("verify" === eb.phase)
          ea = eI ? `Target checks ${1 === eI ? "it" : `all ${eI}`} in one pass` : "Target writes the last token", en = `${eb.round}-verify`;
        else if (eI)
          if (eO)
            ea = `All ${eI} accepted, plus a bonus token`, en = `${eb.round}-settle`;
          else if (0 === eA.accepted)
            ea = "First guess rejected, target writes its own", en = `${eb.round}-settle`;
          else {
            let e3;
            ea = `${eA.accepted} of ${eI} accepted, target fixes the ${["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"][(e3 = eA.accepted + 1) - 1] ?? `${e3}th`}`, en = `${eb.round}-settle`;
          }
        else
          ea = "Target wrote the last token", en = `${eb.round}-settle`;
      else
        ea = `Draft guesses ${eo} tokens ahead, target checks them in one pass`, en = `idle-${eo}`;
    else ea = "Nothing to decode yet", en = "empty";
    let eW = eA && eb.verdicts >= eI && "draft" !== eb.phase ? `Round ${eA.index + 1}. Draft proposed ${eA.draft.map(z).join(", ") || "nothing"}. Target accepted ${eA.accepted}${eO ? ` and added ${z(eA.target)}` : ` and wrote ${z(eA.target)} instead of ${z(eA.draft[eA.accepted])}`}.` : "", eV = eA ? Array.from({ length: Math.min(eb.shown, eI) }, (e3, t3) => {
      let s3 = t3 < eb.verdicts ? t3 < eA.accepted ? "accepted" : t3 === eA.accepted ? "rejected" : "discarded" : "ghost", n2 = t3 === eA.accepted;
      return (0, a.jsxs)(
        "div",
        {
          className: C().column,
          "data-state": s3,
          "data-leaving": eF || void 0,
          style: { "--j": t3 },
          children: [
            (0, a.jsx)("span", {
              className: C().chip,
              children: (0, a.jsxs)("span", {
                ref: (e4) => {
                  let s4 = `${eA.index}:${t3}`;
                  e4 ? eS.current.set(s4, e4) : eS.current.delete(s4);
                },
                className: C().chipText,
                children: [
                  (0, a.jsx)(j.n, {
                    active: "ghost" === s3 && !ei,
                    duration: 0.9,
                    children: z(eA.draft[t3])
                  }),
                  (0, a.jsx)("span", {
                    className: C().strike,
                    "aria-hidden": "true"
                  })
                ]
              })
            }),
            (0, a.jsxs)("span", {
              className: C().cell,
              children: [
                (0, a.jsx)("span", { className: C().fill }),
                n2 ? (0, a.jsxs)("span", {
                  className: C().cellContent,
                  "data-on": "rejected" === s3 && eb.targetShown || void 0,
                  children: [
                    (0, a.jsx)(o.A, {
                      className: C().missIcon,
                      size: 13,
                      strokeWidth: 2,
                      "aria-hidden": "true"
                    }),
                    (0, a.jsx)("span", {
                      ref: (e4) => {
                        let t4 = `${eA.index}:t`;
                        e4 ? eS.current.set(t4, e4) : eS.current.delete(t4);
                      },
                      className: C().targetText,
                      children: z(eA.target)
                    })
                  ]
                }) : (0, a.jsx)("span", {
                  className: C().cellContent,
                  "data-on": "accepted" === s3 || void 0,
                  children: (0, a.jsx)(d.A, {
                    className: C().hitIcon,
                    size: 14,
                    strokeWidth: 2,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        },
        `${eA.index}:${t3}`
      );
    }) : [];
    eA && eO && eb.targetShown && eV.push(
      (0, a.jsxs)(
        "div",
        {
          className: C().column,
          "data-state": "bonus",
          "data-leaving": eF || void 0,
          children: [
            (0, a.jsx)("span", { className: C().chip, "data-empty": "" }),
            (0, a.jsx)("span", {
              className: C().cell,
              children: (0, a.jsxs)("span", {
                className: C().cellContent,
                "data-on": "",
                children: [
                  eI > 0 && (0, a.jsx)(u.A, {
                    className: C().bonusIcon,
                    size: 13,
                    strokeWidth: 2,
                    "aria-hidden": "true"
                  }),
                  (0, a.jsx)("span", {
                    ref: (e3) => {
                      let t3 = `${eA.index}:t`;
                      e3 ? eS.current.set(t3, e3) : eS.current.delete(t3);
                    },
                    className: C().targetText,
                    children: z(eA.target)
                  })
                ]
              })
            })
          ]
        },
        `${eA.index}:bonus`
      )
    );
    let eY = eb.specDone ? L(ep.stats.passes, "pass", "passes") : L(eb.settled, "pass", "passes"), eG = L(eb.baseline, "pass", "passes"), eH = !ex;
    return (0, a.jsx)("div", {
      className: [C().root, et].filter(Boolean).join(" "),
      style: es,
      children: (0, a.jsxs)("div", {
        ref: eM,
        className: C().card,
        role: "group",
        "aria-label": H,
        "data-status": ex ? "ready" : eh ? q : "empty",
        "data-reduced": ei || void 0,
        children: [
          (0, a.jsxs)("div", {
            className: C().header,
            children: [
              (0, a.jsxs)("div", {
                className: C().heading,
                children: [
                  (0, a.jsx)("p", { className: C().title, children: H }),
                  (0, a.jsx)("p", {
                    className: C().status,
                    children: "loading" === q ? (0, a.jsx)(j.n, { children: ea }) : (0, a.jsxs)(O, {
                      id: en,
                      reduced: ei,
                      className: C().statusLine,
                      children: [eB, ea]
                    })
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: C().actions,
                children: [
                  (0, a.jsx)(b.m, {
                    content: eN ? "Pause" : eb.specDone && (!ec || eb.baseDone) ? "Play again" : "Play",
                    children: (0, a.jsx)("button", {
                      type: "button",
                      className: C().iconButton,
                      onClick: () => {
                        if (ex) {
                          if (eN) {
                            ey(false), ek("Paused");
                            return;
                          }
                          if (e_.current.signature === eu && e_.current.time >= em) {
                            eL(true), ek("Playing from the start");
                            return;
                          }
                          ey(true), ek("Playing");
                        }
                      },
                      disabled: eH,
                      "aria-label": eN ? "Pause" : "Play",
                      children: (0, a.jsxs)("span", {
                        className: C().iconStack,
                        "aria-hidden": "true",
                        children: [
                          (0, a.jsx)(p.A, {
                            "data-on": eN || void 0,
                            size: 15,
                            strokeWidth: 1.75
                          }),
                          (0, a.jsx)(h.A, {
                            "data-on": !eN || void 0,
                            size: 15,
                            strokeWidth: 1.75
                          })
                        ]
                      })
                    })
                  }),
                  (0, a.jsx)(b.m, {
                    content: "Restart",
                    children: (0, a.jsx)("button", {
                      type: "button",
                      className: C().iconButton,
                      onClick: () => {
                        eL(true), ek("Restarted");
                      },
                      disabled: eH,
                      "aria-label": "Restart",
                      children: (0, a.jsx)(m.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  })
                ]
              })
            ]
          }),
          0 === eh ? (0, a.jsxs)("div", {
            className: C().empty,
            children: [
              (0, a.jsx)("p", {
                className: C().emptyTitle,
                children: "No tokens to decode"
              }),
              (0, a.jsx)("p", {
                className: C().emptyText,
                children: "Pass the target model's answer as tokens, or a recorded run as rounds."
              })
            ]
          }) : (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: C().lanes,
                children: [
                  (0, a.jsxs)("div", {
                    className: C().laneLabels,
                    "aria-hidden": "true",
                    children: [
                      (0, a.jsxs)("div", {
                        className: C().laneLabel,
                        "data-lane": "draft",
                        children: [
                          (0, a.jsx)("span", { className: C().laneDot }),
                          (0, a.jsxs)("span", {
                            className: C().laneText,
                            children: [
                              (0, a.jsx)("span", {
                                className: C().laneName,
                                children: K
                              }),
                              (0, a.jsx)("span", {
                                className: C().laneDetail,
                                children: Z
                              })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)("div", {
                        className: C().laneLabel,
                        "data-lane": "target",
                        children: [
                          (0, a.jsx)("span", { className: C().laneDot }),
                          (0, a.jsxs)("span", {
                            className: C().laneText,
                            children: [
                              (0, a.jsx)("span", {
                                className: C().laneName,
                                children: J
                              }),
                              (0, a.jsx)("span", {
                                className: C().laneDetail,
                                children: U
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, a.jsx)(I, {
                    reduced: ei,
                    className: C().track,
                    children: (0, a.jsx)("div", {
                      ref: e$,
                      className: C().columns,
                      "data-phase": eb.phase,
                      "aria-hidden": "true",
                      children: eb.specDone ? (0, a.jsxs)("div", {
                        className: C().summary,
                        children: [
                          (0, a.jsx)("span", {
                            className: C().summaryRow,
                            children: `${L(ep.stats.drafted, "token")} drafted, ${ep.stats.accepted} accepted`
                          }),
                          (0, a.jsx)("span", {
                            className: C().summaryRow,
                            children: `${L(ep.stats.passes, "pass", "passes")} for ${L(eh, "token")}`
                          })
                        ]
                      }) : eA ? eV : Array.from(
                        { length: t2 ? 0 : eo },
                        (e3, t3) => (0, a.jsxs)(
                          "div",
                          {
                            className: C().column,
                            "data-state": "slot",
                            children: [
                              (0, a.jsx)("span", {
                                className: C().chip
                              }),
                              (0, a.jsx)("span", {
                                className: C().cell
                              })
                            ]
                          },
                          `slot${t3}`
                        )
                      )
                    })
                  }),
                  (0, a.jsx)("p", { className: C().srOnly, children: eW })
                ]
              }),
              "error" === q && (0, a.jsxs)("div", {
                className: C().alert,
                role: "alert",
                children: [
                  (0, a.jsx)(x.A, {
                    className: C().alertIcon,
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, a.jsx)("span", {
                    className: C().alertText,
                    children: X ?? "Could not load the decoding run."
                  }),
                  Q && (0, a.jsx)(_.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: Q,
                    children: "Retry"
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: C().outputs,
                children: [
                  (0, a.jsxs)("div", {
                    className: C().line,
                    "data-line": "spec",
                    children: [
                      (0, a.jsxs)("div", {
                        className: C().lineLabel,
                        children: [
                          (0, a.jsx)(O, {
                            id: ec ? "spec" : "out",
                            reduced: ei,
                            className: C().lineName,
                            children: ec ? "Speculative" : "Output"
                          }),
                          (0, a.jsxs)("span", {
                            className: C().lineMeta,
                            children: [
                              eb.specDone && (0, a.jsx)(d.A, {
                                className: C().metaCheck,
                                size: 13,
                                strokeWidth: 2,
                                "aria-hidden": "true"
                              }),
                              eY
                            ]
                          })
                        ]
                      }),
                      (0, a.jsx)("p", {
                        className: C().lineText,
                        "aria-label": `Output: ${ep.output.slice(0, eb.emitted).map((e3) => e3.text).join("").trim() || "empty"}`,
                        children: eg.map(
                          (e3, t3) => (0, a.jsxs)(
                            n.Fragment,
                            {
                              children: [
                                t3 > 0 && e3.space ? " " : null,
                                (0, a.jsx)("span", {
                                  className: C().word,
                                  children: e3.items.map(
                                    (e4) => (0, a.jsx)(
                                      "span",
                                      {
                                        ref: (t4) => {
                                          eD.current[e4.index] = t4;
                                        },
                                        className: C().tok,
                                        "data-on": e4.index < eb.emitted || void 0,
                                        "data-origin": ep.output[e4.index].origin,
                                        "aria-hidden": "true",
                                        children: e4.text
                                      },
                                      e4.index
                                    )
                                  )
                                })
                              ]
                            },
                            t3
                          )
                        )
                      })
                    ]
                  }),
                  (0, a.jsx)(r.N, {
                    initial: false,
                    children: ec && (0, a.jsx)(
                      i.PY1.div,
                      {
                        className: C().baselineWrap,
                        initial: ei ? { opacity: 0 } : { height: 0, opacity: 0 },
                        animate: ei ? { opacity: 1 } : { height: "auto", opacity: 1 },
                        exit: ei ? { opacity: 0, transition: { duration: 0.1 } } : {
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: g.T.spring.smooth,
                            opacity: { duration: 0.12 }
                          }
                        },
                        transition: {
                          height: g.T.spring.smooth,
                          opacity: {
                            duration: g.T.duration.fast,
                            ease: R
                          }
                        },
                        children: (0, a.jsxs)("div", {
                          className: C().line,
                          "data-line": "base",
                          children: [
                            (0, a.jsxs)("div", {
                              className: C().lineLabel,
                              children: [
                                (0, a.jsx)("span", {
                                  className: C().lineName,
                                  children: "Target only"
                                }),
                                (0, a.jsxs)("span", {
                                  className: C().lineMeta,
                                  children: [
                                    eb.baseDone && (0, a.jsx)(d.A, {
                                      className: C().metaCheck,
                                      size: 13,
                                      strokeWidth: 2,
                                      "aria-hidden": "true"
                                    }),
                                    eG
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsx)("p", {
                              className: C().lineText,
                              "aria-label": `Target only: ${ep.output.slice(0, eb.baseline).map((e3) => e3.text).join("").trim() || "empty"}`,
                              children: eg.map(
                                (e3, t3) => (0, a.jsxs)(
                                  n.Fragment,
                                  {
                                    children: [
                                      t3 > 0 && e3.space ? " " : null,
                                      (0, a.jsx)("span", {
                                        className: C().word,
                                        children: e3.items.map(
                                          (e4) => (0, a.jsx)(
                                            "span",
                                            {
                                              className: C().tok,
                                              "data-on": e4.index < eb.baseline || void 0,
                                              "data-origin": "target",
                                              "aria-hidden": "true",
                                              children: e4.text
                                            },
                                            e4.index
                                          )
                                        )
                                      })
                                    ]
                                  },
                                  t3
                                )
                              )
                            })
                          ]
                        })
                      },
                      "baseline"
                    )
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: C().footer,
                children: [
                  (0, a.jsxs)("dl", {
                    className: C().stats,
                    children: [
                      (0, a.jsxs)("div", {
                        className: C().stat,
                        children: [
                          (0, a.jsx)("dt", {
                            className: C().statLabel,
                            children: "Faster"
                          }),
                          (0, a.jsxs)("dd", {
                            className: C().statValue,
                            children: [
                              (0, a.jsx)(S, {
                                value: ez ? ez.speedup : null,
                                decimals: 1,
                                suffix: "\xD7"
                              }),
                              (0, a.jsx)("span", {
                                className: C().srOnly,
                                children: ez ? `${ez.speedup.toFixed(1)} times` : "not yet"
                              })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)("div", {
                        className: C().stat,
                        children: [
                          (0, a.jsx)("dt", {
                            className: C().statLabel,
                            children: "Drafts accepted"
                          }),
                          (0, a.jsxs)("dd", {
                            className: C().statValue,
                            children: [
                              (0, a.jsx)(S, {
                                value: ez ? Math.round(100 * ez.acceptance) : null,
                                places: 3,
                                suffix: "%"
                              }),
                              (0, a.jsx)("span", {
                                className: C().srOnly,
                                children: ez ? `${Math.round(100 * ez.acceptance)} percent` : "not yet"
                              })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)("div", {
                        className: C().stat,
                        children: [
                          (0, a.jsx)("dt", {
                            className: C().statLabel,
                            children: "Tokens per pass"
                          }),
                          (0, a.jsxs)("dd", {
                            className: C().statValue,
                            children: [
                              (0, a.jsx)(S, {
                                value: ez ? ez.tokensPerPass : null,
                                decimals: 1
                              }),
                              (0, a.jsx)("span", {
                                className: C().srOnly,
                                children: ez ? ez.tokensPerPass.toFixed(1) : "not yet"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, a.jsxs)("div", {
                    className: C().controls,
                    children: [
                      !t2 && (0, a.jsx)("div", {
                        className: C().sliderSlot,
                        children: (0, a.jsx)(f.A, {
                          label: "Draft length",
                          min: 2,
                          max: 8,
                          step: 1,
                          value: eo,
                          onValueChange: (e3) => {
                            let t3 = E(Math.round(e3), 2, 8);
                            t3 !== eo && (el(t3), eE(), e_.current = { signature: "", time: 0 }, ey(ex));
                          },
                          onValueCommit: (t3) => {
                            let s3 = $(
                              k(e2, E(Math.round(t3), 2, 8), V2),
                              Y2
                            ).stats;
                            ek(
                              `Draft length ${t3}. ${Math.round(100 * s3.acceptance)} percent of drafts accepted, ${s3.speedup.toFixed(1)} times faster.`
                            );
                          },
                          format: (e3) => L(e3, "token"),
                          disabled: eH
                        })
                      }),
                      (0, a.jsx)(v.d, {
                        label: "Compare without speculation",
                        checked: ec,
                        onCheckedChange: (e3) => {
                          ed(e3);
                          let t3 = e_.current.signature === eu ? e_.current.time : 0, s3 = e3 ? Math.max(ep.end, eh) : ep.end;
                          e3 && t3 >= ep.end && t3 < s3 && ey(true), !e3 && t3 >= ep.end && ey(false), ek(
                            e3 ? "Comparing against the target alone, one token per pass." : "Comparison hidden."
                          );
                        },
                        disabled: eH,
                        className: C().switch
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)("p", {
            className: C().srOnly,
            "aria-live": "polite",
            children: ew
          })
        ]
      })
    });
  }
  var B = s(75539), W = s.n(B);
  function V() {
    return (0, a.jsx)("div", {
      className: W().demo,
      children: (0, a.jsx)(F, {})
    });
  }
  let Y = V;
}

__m(__module,__exports,__require);
});
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
A.cssFor("speculative-decoding", [66754,75539,81834]);
A.item("speculative-decoding", {entry:92614, export:"SpeculativeDecodingDemo", kind:"component", tier:"pro", unresolved:[]});
})();