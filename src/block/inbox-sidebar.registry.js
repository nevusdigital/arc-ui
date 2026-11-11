/* inbox-sidebar (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(1568, ".inbox-sidebar_root__WNvrf{--row-hover:color-mix(in oklab,var(--foreground) 4.5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 7%,transparent);container-type:inline-size;width:min(100%,1040px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body)}.inbox-sidebar_tones__B_q7M{--tone-design:oklch(58% .17 292);--tone-launch:oklch(60% .14 158);--tone-research:oklch(60% .14 245);--tone-hiring:oklch(72% .15 68)}:root[data-theme=dark] .inbox-sidebar_root__WNvrf{--row-hover:color-mix(in oklab,var(--foreground) 5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 8%,transparent)}:root[data-theme=dark] .inbox-sidebar_sidebar__2CG9J{background:color-mix(in oklab,var(--background) 60%,var(--surface))}:root[data-theme=dark] .inbox-sidebar_tones__B_q7M{--tone-design:oklch(73% .14 292);--tone-launch:oklch(74% .14 158);--tone-research:oklch(73% .12 245);--tone-hiring:oklch(81% .13 75)}.inbox-sidebar_srOnly__IsvWn{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.inbox-sidebar_shell__LQ9kz{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr);height:660px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.inbox-sidebar_shell__LQ9kz[data-dragging],.inbox-sidebar_shell__LQ9kz[data-dragging] *{cursor:grabbing}.inbox-sidebar_sidebar__2CG9J{--full:240px;position:relative;display:flex;width:var(--full);min-width:0;min-height:0;flex-direction:column;gap:12px;overflow:hidden;padding:12px;border-radius:15px 0 0 15px;background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}.inbox-sidebar_sidebar__2CG9J:after{content:\"\";position:absolute;top:0;right:0;bottom:0;width:1px;background:var(--border);pointer-events:none}.inbox-sidebar_composeSlot__Px2ic{flex:none;height:36px}.inbox-sidebar_compose__qJqGD{display:flex;width:100%;height:36px;align-items:center;padding:0 11px;border:1px solid var(--border);background:var(--surface-raised);color:var(--foreground);font:inherit;font-size:13px;font-weight:500;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.inbox-sidebar_compose__qJqGD:active{border-color:var(--border-strong);background:var(--surface-muted)}.inbox-sidebar_composeInner__MQsN8{display:flex;align-items:center;gap:10px;white-space:nowrap}.inbox-sidebar_nav__1FDC_{flex:1;min-height:0;margin:0 -4px;padding:0 4px 4px;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.inbox-sidebar_navList__LDbn3{display:grid;grid-template-columns:minmax(0,1fr);gap:1px;margin:0;padding:0;list-style:none}.inbox-sidebar_navItem__18gfI{position:relative;isolation:isolate;display:grid;width:100%;height:32px;grid-template-columns:16px minmax(0,1fr) auto;align-items:center;gap:10px;padding:0 10px 0 12px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;text-align:left;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard)}.inbox-sidebar_navItem__18gfI[aria-current=page]{color:var(--foreground)}.inbox-sidebar_navItem__18gfI[aria-current=page] .inbox-sidebar_navIcon__LyFkV{color:var(--accent)}.inbox-sidebar_navItem__18gfI[data-drop=off]{opacity:.38}.inbox-sidebar_navItem__18gfI[data-drop=over],.inbox-sidebar_sectionToggle__f6cbl[data-drop=over]{background:var(--accent-subtle);box-shadow:inset 0 0 0 1px var(--accent);color:var(--foreground)}.inbox-sidebar_navActive__0JiMB{position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--row-active)}.inbox-sidebar_navIcon__LyFkV{display:grid;width:16px;height:16px;place-items:center;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.inbox-sidebar_navLabel__MaUZo{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.inbox-sidebar_navTrail__7BRBE{display:grid}.inbox-sidebar_navDot__6wZTO{position:absolute;top:calc(50% - 10px);left:25px;display:grid;width:6px;height:6px;pointer-events:none}.inbox-sidebar_navDotFace__GVb0O{display:block;border-radius:var(--radius-pill);background:var(--accent)}.inbox-sidebar_navCount__7z5fT{display:inline-flex;color:var(--text-muted);font-size:var(--text-xs);font-weight:400;font-variant-numeric:tabular-nums}.inbox-sidebar_navCount__7z5fT[data-strong]{color:var(--foreground);font-weight:500}.inbox-sidebar_navCount__7z5fT>span,.inbox-sidebar_num__dKh60>span{color:inherit;font:inherit;letter-spacing:inherit}.inbox-sidebar_swatch__r1Snw{display:inline-block;width:8px;height:8px;flex:none;border-radius:3px;background:var(--tone-design)}.inbox-sidebar_swatch__r1Snw[data-tone=launch]{background:var(--tone-launch)}.inbox-sidebar_swatch__r1Snw[data-tone=research]{background:var(--tone-research)}.inbox-sidebar_swatch__r1Snw[data-tone=hiring]{background:var(--tone-hiring)}.inbox-sidebar_section__AsFjA{position:relative;margin-top:14px}.inbox-sidebar_sectionRule__CFap_{position:absolute;top:-8px;right:8px;left:8px;height:1px;background:var(--border)}.inbox-sidebar_sectionToggle__f6cbl{position:relative;display:flex;width:100%;height:28px;align-items:center;gap:6px;padding:0 10px 0 12px;border:0;border-radius:8px;background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-xs);font-weight:500;text-align:left;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.inbox-sidebar_sectionToggle__f6cbl[data-active]{color:var(--foreground)}.inbox-sidebar_sectionIcon__0TvBs{position:absolute;top:calc(50% - 8px);left:12px}.inbox-sidebar_chevron__W1RM9{transition:transform var(--duration-spring) var(--ease-spring),opacity .24s var(--ease-enter) .1s,translate .24s var(--ease-enter) .1s}.inbox-sidebar_sectionToggle__f6cbl[aria-expanded=true] .inbox-sidebar_chevron__W1RM9{transform:rotate(90deg)}.inbox-sidebar_sectionBody__F6a3Z{overflow:hidden}.inbox-sidebar_account__kvlJ0{display:flex;min-width:0;align-items:center;gap:10px;padding:12px 4px 0 6px;border-top:1px solid var(--border)}.inbox-sidebar_accountText__q5_Qs{display:grid;min-width:0;line-height:1.35}.inbox-sidebar_accountText__q5_Qs span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.inbox-sidebar_accountText__q5_Qs span:first-child{font-size:13px;font-weight:500}.inbox-sidebar_accountText__q5_Qs span:last-child{color:var(--text-muted);font-size:var(--text-xs)}.inbox-sidebar_pane__pQVj4{position:relative;display:flex;min-width:0;min-height:0;flex-direction:column}.inbox-sidebar_paneHeader__2bNDI{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 20px 12px 12px;border-bottom:1px solid var(--border)}.inbox-sidebar_paneTitle__qE54B{display:flex;min-width:0;align-items:center;gap:6px}.inbox-sidebar_paneToggle__4iWt1{display:grid;width:32px;height:32px;flex:none;place-items:center;border:0;border-radius:8px;padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.inbox-sidebar_paneToggle__4iWt1:active{background:var(--row-active);color:var(--foreground)}.inbox-sidebar_title__8dfux{position:relative;min-width:0;height:25px;margin:0;font-family:var(--font-body);font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:25px}.inbox-sidebar_titleText__ESFr3{display:block;white-space:nowrap}.inbox-sidebar_summary__7yBdt{margin:0;color:var(--text-muted);font-size:13px;white-space:nowrap;font-variant-numeric:tabular-nums}.inbox-sidebar_num__dKh60{display:inline-flex}.inbox-sidebar_unreadClause__Q2mUC{display:inline-flex;overflow:hidden;vertical-align:bottom}.inbox-sidebar_unreadClause__Q2mUC>span{white-space:nowrap}.inbox-sidebar_viewport__EtmsW{position:relative;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.inbox-sidebar_page__Tamth{width:100%}.inbox-sidebar_list__OuxVL{margin:0;padding:0;list-style:none}.inbox-sidebar_row__2uC9L{position:relative;overflow:hidden;border-bottom:1px solid var(--border-subtle);background:var(--surface);transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard)}.inbox-sidebar_row__2uC9L[data-selected]{background:color-mix(in oklab,var(--surface-muted) 85%,var(--surface))}.inbox-sidebar_row__2uC9L[data-dragging]{opacity:.42}.inbox-sidebar_rowMain__hlS6J{position:relative;display:grid;width:100%;grid-template-columns:36px minmax(0,1fr);align-items:center;gap:12px;padding:10px 20px;border:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.inbox-sidebar_rowMain__hlS6J img{-webkit-user-drag:none}.inbox-sidebar_dot__VwmnM{position:absolute;top:50%;left:9px;width:6px;height:6px;margin-top:-3px;border-radius:50%;background:var(--accent)}.inbox-sidebar_rowText__z3uEA{display:grid;min-width:0;gap:2px}.inbox-sidebar_rowTop__o7HRz{display:flex;min-width:0;align-items:center;gap:8px;font-size:13px;line-height:20px}.inbox-sidebar_sender__GdoOm{min-width:0;overflow:hidden;color:var(--foreground);text-overflow:ellipsis;white-space:nowrap}.inbox-sidebar_rowLabels__5i9cK{display:flex;flex:none;gap:4px}.inbox-sidebar_rowLabels__5i9cK .inbox-sidebar_swatch__r1Snw{width:7px;height:7px;border-radius:2px}.inbox-sidebar_meta__3QpbG{display:flex;flex:none;align-items:center;gap:6px;margin-left:auto;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;transition:opacity var(--duration-fast) var(--ease-standard)}.inbox-sidebar_starMark__aOWxd{display:inline-flex;color:var(--warning)}.inbox-sidebar_starMark__aOWxd svg{fill:currentColor}.inbox-sidebar_line__yQsHV{overflow:hidden;font-size:13px;line-height:18px;text-overflow:ellipsis;white-space:nowrap}.inbox-sidebar_subject__NvIGb{color:var(--foreground)}.inbox-sidebar_preview___BmUb{margin-left:6px;color:var(--text-muted)}.inbox-sidebar_row__2uC9L[data-unread] .inbox-sidebar_sender__GdoOm,.inbox-sidebar_row__2uC9L[data-unread] .inbox-sidebar_subject__NvIGb{font-weight:500}.inbox-sidebar_actions__GT7lf{position:absolute;top:50%;right:12px;display:flex;gap:2px;padding-left:8px;background:inherit;opacity:0;pointer-events:none;transform:translate(4px,-50%);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-enter)}.inbox-sidebar_row__2uC9L:focus-within .inbox-sidebar_actions__GT7lf,.inbox-sidebar_row__2uC9L[data-selected] .inbox-sidebar_actions__GT7lf{opacity:1;pointer-events:auto;transform:translateY(-50%)}.inbox-sidebar_row__2uC9L:focus-within .inbox-sidebar_meta__3QpbG,.inbox-sidebar_row__2uC9L[data-selected] .inbox-sidebar_meta__3QpbG{opacity:0}.inbox-sidebar_action__0PTzf{display:grid;width:28px;height:28px;flex:none;place-items:center;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.inbox-sidebar_action__0PTzf:active,.inbox-sidebar_action__0PTzf[data-state=open]{background:color-mix(in oklab,var(--foreground) 8%,transparent);color:var(--foreground)}.inbox-sidebar_action__0PTzf[aria-pressed=true]{color:var(--warning)}.inbox-sidebar_action__0PTzf[aria-pressed=true] svg{fill:currentColor}.inbox-sidebar_empty__1F0op{display:grid;justify-items:center;gap:4px;padding:64px 24px;color:var(--text-muted);text-align:center}.inbox-sidebar_empty__1F0op svg{margin-bottom:8px}.inbox-sidebar_empty__1F0op p{margin:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500}.inbox-sidebar_empty__1F0op span{max-width:280px;font-size:13px;line-height:var(--leading-body)}.inbox-sidebar_statusBar__VhJ0i{display:flex;min-height:44px;align-items:center;justify-content:space-between;gap:12px;padding:6px 12px 6px 20px;border-top:1px solid var(--border)}.inbox-sidebar_statusText__27D29{position:relative;flex:1;min-width:0;margin:0;color:var(--text-secondary);font-size:var(--text-xs)}.inbox-sidebar_statusText__27D29>span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.inbox-sidebar_composer__IkKGN{position:absolute;z-index:20;top:12px;left:12px;width:min(420px,calc(100% - 24px));overflow:hidden;border:1px solid var(--border);background:var(--surface-raised);box-shadow:var(--shadow-floating)}.inbox-sidebar_composerForm__G4RRM{display:grid}.inbox-sidebar_composerHeader__iQudn{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 8px 4px 18px}.inbox-sidebar_composerHeader__iQudn h3{margin:0;font-size:var(--text-sm);font-weight:500}.inbox-sidebar_field__yDfNO{display:grid;min-height:44px;grid-template-columns:56px minmax(0,1fr) auto;align-items:center;gap:8px;margin:0 18px;border-bottom:1px solid var(--border);transition:box-shadow var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}.inbox-sidebar_field__yDfNO:focus-within{border-bottom-color:var(--foreground);box-shadow:0 1px 0 var(--foreground)}.inbox-sidebar_field__yDfNO[data-invalid]{border-bottom-color:var(--danger);box-shadow:0 1px 0 var(--danger)}.inbox-sidebar_field__yDfNO label{color:var(--text-muted);font-size:13px}.inbox-sidebar_field__yDfNO input{min-width:0;height:42px;padding:0;border:0;outline:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm)}.inbox-sidebar_body__9pOnv::placeholder,.inbox-sidebar_field__yDfNO input::placeholder{color:var(--text-muted)}.inbox-sidebar_recipient__bIaUI{display:inline-flex}.inbox-sidebar_error__aXvPd{overflow:hidden;margin:0;padding:6px 18px 0;color:var(--danger);font-size:var(--text-xs)}.inbox-sidebar_body__9pOnv{display:block;width:100%;min-height:148px;padding:14px 18px;border:0;outline:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:1.55;resize:none}.inbox-sidebar_composerFooter__xKHyP{display:flex;align-items:center;gap:6px;padding:10px 12px 12px;border-top:1px solid var(--border-subtle)}.inbox-sidebar_composerNote__vI4Jz{margin-left:auto;padding-right:6px;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}.inbox-sidebar_ghost__Xd2fb{position:absolute;z-index:30;top:0;left:0;display:flex;max-width:260px;height:40px;align-items:center;gap:8px;padding:0 14px 0 5px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-size:13px;font-weight:500;white-space:nowrap;pointer-events:none}.inbox-sidebar_ghost__Xd2fb>span:last-child{min-width:0;overflow:hidden;text-overflow:ellipsis}.inbox-sidebar_menu__LUWm7{z-index:60;min-width:208px;padding:4px;border:1px solid var(--border);border-radius:12px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);transform-origin:var(--radix-dropdown-menu-content-transform-origin);animation:inbox-sidebar_menu-in__eXcdz var(--duration-standard) var(--ease-enter)}.inbox-sidebar_menu__LUWm7[data-state=closed]{animation:inbox-sidebar_menu-out__wyM_6 var(--duration-instant) var(--ease-standard) forwards}.inbox-sidebar_menuLabel__mrtca{padding:6px 10px 4px;color:var(--text-muted);font-size:var(--text-xs)}.inbox-sidebar_menuItem__n4ffd{display:flex;height:32px;align-items:center;gap:10px;padding:0 10px;border-radius:8px;color:var(--foreground);font-size:13px;outline:none;cursor:pointer;user-select:none}.inbox-sidebar_menuItem__n4ffd svg{color:var(--text-secondary)}.inbox-sidebar_menuItem__n4ffd .inbox-sidebar_swatch__r1Snw{margin-inline:4px}.inbox-sidebar_menuItem__n4ffd[data-highlighted]{background:var(--surface-muted)}.inbox-sidebar_menuItem__n4ffd[data-disabled]{color:var(--text-muted);cursor:default}.inbox-sidebar_menuItem__n4ffd .inbox-sidebar_menuCheck__sZPbe{margin-left:auto;color:var(--text-muted)}.inbox-sidebar_menuSeparator__69Ktt{height:1px;margin:6px 4px;background:var(--border)}@keyframes inbox-sidebar_menu-in__eXcdz{0%{opacity:0;transform:scale(.96) translateY(-2px)}}@keyframes inbox-sidebar_menu-out__wyM_6{to{opacity:0;transform:scale(.98)}}.inbox-sidebar_accountText__q5_Qs,.inbox-sidebar_composeText__3eluO,.inbox-sidebar_navLabel__MaUZo,.inbox-sidebar_navTrail__7BRBE,.inbox-sidebar_sectionTitle__oVtWi{transition:opacity .24s var(--ease-enter) .1s,translate .24s var(--ease-enter) .1s}.inbox-sidebar_sidebar__2CG9J[data-rail] :is(.inbox-sidebar_composeText__3eluO,.inbox-sidebar_navLabel__MaUZo,.inbox-sidebar_navTrail__7BRBE,.inbox-sidebar_sectionTitle__oVtWi,.inbox-sidebar_chevron__W1RM9,.inbox-sidebar_accountText__q5_Qs){opacity:0;translate:-6px 0;pointer-events:none;transition:transform var(--duration-spring) var(--ease-spring),opacity .14s var(--ease-standard),translate .14s var(--ease-standard)}.inbox-sidebar_navDot__6wZTO,.inbox-sidebar_sectionIcon__0TvBs,.inbox-sidebar_sectionRule__CFap_{opacity:0;transition:opacity .1s var(--ease-standard),scale .1s var(--ease-standard)}.inbox-sidebar_sectionRule__CFap_{scale:.3 1}.inbox-sidebar_navDot__6wZTO{scale:.3}.inbox-sidebar_sidebar__2CG9J[data-rail] :is(.inbox-sidebar_sectionRule__CFap_,.inbox-sidebar_sectionIcon__0TvBs,.inbox-sidebar_navDot__6wZTO){opacity:1;scale:1;transition:opacity .2s var(--ease-enter) .16s,scale .36s var(--ease-spring) .16s}.inbox-sidebar_sidebar__2CG9J[data-rail] .inbox-sidebar_sectionToggle__f6cbl{color:var(--text-secondary)}.inbox-sidebar_sidebar__2CG9J[data-rail] .inbox-sidebar_sectionToggle__f6cbl:is([aria-expanded=true],[data-active]){color:var(--foreground)}.inbox-sidebar_tip__YCzMx{z-index:60;display:flex;align-items:center;gap:8px;border-radius:var(--radius-control);padding:7px 12px;background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-family:var(--font-body);font-size:13px;font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-fast) var(--ease-enter)}.inbox-sidebar_tipNote__Sz4_u{color:color-mix(in oklab,var(--background) 62%,var(--foreground));font-weight:400}.inbox-sidebar_tip__YCzMx kbd{display:inline-grid;min-width:20px;height:20px;place-items:center;border:1px solid color-mix(in oklab,var(--background) 30%,var(--foreground));border-radius:6px;padding:0 5px;font-family:var(--font-body);font-size:var(--text-xs);font-weight:400;line-height:1}.inbox-sidebar_tip__YCzMx[data-state=closed]{opacity:0;transform:translateX(-2px);transition-duration:.11s;animation:inbox-sidebar_tip-exit__Dyk5o .11s linear both}.inbox-sidebar_tip__YCzMx[data-side=bottom][data-state=closed]{transform:translateY(-2px)}@keyframes inbox-sidebar_tip-exit__Dyk5o{to{--tip-exit:1}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_compose__qJqGD:hover{border-color:var(--border-strong)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_navItem__18gfI:hover:not([aria-current=page]){background:var(--row-hover);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_navItem__18gfI:hover .inbox-sidebar_navIcon__LyFkV{color:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_navItem__18gfI[aria-current=page]:hover .inbox-sidebar_navIcon__LyFkV{color:var(--accent)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_sectionToggle__f6cbl:hover{color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_row__2uC9L:hover{background:color-mix(in oklab,var(--surface-muted) 60%,var(--surface))}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_row__2uC9L:hover .inbox-sidebar_actions__GT7lf{opacity:1;pointer-events:auto;transform:translateY(-50%)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_row__2uC9L:hover .inbox-sidebar_meta__3QpbG{opacity:0}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_action__0PTzf:hover{background:color-mix(in oklab,var(--foreground) 7%,transparent);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_action__0PTzf[aria-pressed=true]:hover{color:var(--warning)}}@media (hover:hover) and (pointer:fine){.inbox-sidebar_paneToggle__4iWt1:hover{background:var(--row-hover);color:var(--foreground)}}.inbox-sidebar_backdrop__kUU62{display:none}:root[data-theme=dark] .inbox-sidebar_backdrop__kUU62{background:color-mix(in oklab,black 50%,transparent)}@media (pointer:coarse){.inbox-sidebar_composeSlot__Px2ic,.inbox-sidebar_compose__qJqGD,.inbox-sidebar_menuItem__n4ffd,.inbox-sidebar_navItem__18gfI,.inbox-sidebar_sectionToggle__f6cbl{height:40px}}@media (pointer:coarse){.inbox-sidebar_action__0PTzf,.inbox-sidebar_paneToggle__4iWt1{width:40px;height:40px;border-radius:10px}}@media (pointer:coarse){.inbox-sidebar_actions__GT7lf{right:8px}}@media (prefers-reduced-motion:reduce){.inbox-sidebar_action__0PTzf,.inbox-sidebar_actions__GT7lf,.inbox-sidebar_chevron__W1RM9,.inbox-sidebar_compose__qJqGD,.inbox-sidebar_field__yDfNO,.inbox-sidebar_meta__3QpbG,.inbox-sidebar_navItem__18gfI,.inbox-sidebar_paneToggle__4iWt1,.inbox-sidebar_row__2uC9L,.inbox-sidebar_sectionToggle__f6cbl{transition:none}}@media (prefers-reduced-motion:reduce){.inbox-sidebar_menu__LUWm7,.inbox-sidebar_menu__LUWm7[data-state=closed]{animation:none}}@media (prefers-reduced-motion:reduce){.inbox-sidebar_accountText__q5_Qs,.inbox-sidebar_chevron__W1RM9,.inbox-sidebar_composeText__3eluO,.inbox-sidebar_navDot__6wZTO,.inbox-sidebar_navLabel__MaUZo,.inbox-sidebar_navTrail__7BRBE,.inbox-sidebar_sectionIcon__0TvBs,.inbox-sidebar_sectionRule__CFap_,.inbox-sidebar_sectionTitle__oVtWi,.inbox-sidebar_sidebar__2CG9J[data-rail] :is(.inbox-sidebar_composeText__3eluO,.inbox-sidebar_navLabel__MaUZo,.inbox-sidebar_navTrail__7BRBE,.inbox-sidebar_sectionTitle__oVtWi,.inbox-sidebar_chevron__W1RM9,.inbox-sidebar_accountText__q5_Qs,.inbox-sidebar_sectionRule__CFap_,.inbox-sidebar_sectionIcon__0TvBs,.inbox-sidebar_navDot__6wZTO){translate:none;scale:none;transition:opacity .12s linear}}@media (prefers-reduced-motion:reduce){.inbox-sidebar_tip__YCzMx,.inbox-sidebar_tip__YCzMx[data-side=bottom][data-state=closed],.inbox-sidebar_tip__YCzMx[data-state=closed]{transform:none;transition:opacity 90ms linear}}.inbox-sidebar_shell__LQ9kz[data-dragging] .inbox-sidebar_row__2uC9L .inbox-sidebar_actions__GT7lf{opacity:0;pointer-events:none}", {"root":"inbox-sidebar_root__WNvrf","tones":"inbox-sidebar_tones__B_q7M","sidebar":"inbox-sidebar_sidebar__2CG9J","srOnly":"inbox-sidebar_srOnly__IsvWn","shell":"inbox-sidebar_shell__LQ9kz","composeSlot":"inbox-sidebar_composeSlot__Px2ic","compose":"inbox-sidebar_compose__qJqGD","composeInner":"inbox-sidebar_composeInner__MQsN8","nav":"inbox-sidebar_nav__1FDC_","navList":"inbox-sidebar_navList__LDbn3","navItem":"inbox-sidebar_navItem__18gfI","navIcon":"inbox-sidebar_navIcon__LyFkV","sectionToggle":"inbox-sidebar_sectionToggle__f6cbl","navActive":"inbox-sidebar_navActive__0JiMB","navLabel":"inbox-sidebar_navLabel__MaUZo","navTrail":"inbox-sidebar_navTrail__7BRBE","navDot":"inbox-sidebar_navDot__6wZTO","navDotFace":"inbox-sidebar_navDotFace__GVb0O","navCount":"inbox-sidebar_navCount__7z5fT","num":"inbox-sidebar_num__dKh60","swatch":"inbox-sidebar_swatch__r1Snw","section":"inbox-sidebar_section__AsFjA","sectionRule":"inbox-sidebar_sectionRule__CFap_","sectionIcon":"inbox-sidebar_sectionIcon__0TvBs","chevron":"inbox-sidebar_chevron__W1RM9","sectionBody":"inbox-sidebar_sectionBody__F6a3Z","account":"inbox-sidebar_account__kvlJ0","accountText":"inbox-sidebar_accountText__q5_Qs","pane":"inbox-sidebar_pane__pQVj4","paneHeader":"inbox-sidebar_paneHeader__2bNDI","paneTitle":"inbox-sidebar_paneTitle__qE54B","paneToggle":"inbox-sidebar_paneToggle__4iWt1","title":"inbox-sidebar_title__8dfux","titleText":"inbox-sidebar_titleText__ESFr3","summary":"inbox-sidebar_summary__7yBdt","unreadClause":"inbox-sidebar_unreadClause__Q2mUC","viewport":"inbox-sidebar_viewport__EtmsW","page":"inbox-sidebar_page__Tamth","list":"inbox-sidebar_list__OuxVL","row":"inbox-sidebar_row__2uC9L","rowMain":"inbox-sidebar_rowMain__hlS6J","dot":"inbox-sidebar_dot__VwmnM","rowText":"inbox-sidebar_rowText__z3uEA","rowTop":"inbox-sidebar_rowTop__o7HRz","sender":"inbox-sidebar_sender__GdoOm","rowLabels":"inbox-sidebar_rowLabels__5i9cK","meta":"inbox-sidebar_meta__3QpbG","starMark":"inbox-sidebar_starMark__aOWxd","line":"inbox-sidebar_line__yQsHV","subject":"inbox-sidebar_subject__NvIGb","preview":"inbox-sidebar_preview___BmUb","actions":"inbox-sidebar_actions__GT7lf","action":"inbox-sidebar_action__0PTzf","empty":"inbox-sidebar_empty__1F0op","statusBar":"inbox-sidebar_statusBar__VhJ0i","statusText":"inbox-sidebar_statusText__27D29","composer":"inbox-sidebar_composer__IkKGN","composerForm":"inbox-sidebar_composerForm__G4RRM","composerHeader":"inbox-sidebar_composerHeader__iQudn","field":"inbox-sidebar_field__yDfNO","body":"inbox-sidebar_body__9pOnv","recipient":"inbox-sidebar_recipient__bIaUI","error":"inbox-sidebar_error__aXvPd","composerFooter":"inbox-sidebar_composerFooter__xKHyP","composerNote":"inbox-sidebar_composerNote__vI4Jz","ghost":"inbox-sidebar_ghost__Xd2fb","menu":"inbox-sidebar_menu__LUWm7","menu-in":"inbox-sidebar_menu-in__eXcdz","menu-out":"inbox-sidebar_menu-out__wyM_6","menuLabel":"inbox-sidebar_menuLabel__mrtca","menuItem":"inbox-sidebar_menuItem__n4ffd","menuCheck":"inbox-sidebar_menuCheck__sZPbe","menuSeparator":"inbox-sidebar_menuSeparator__69Ktt","composeText":"inbox-sidebar_composeText__3eluO","sectionTitle":"inbox-sidebar_sectionTitle__oVtWi","tip":"inbox-sidebar_tip__YCzMx","tipNote":"inbox-sidebar_tipNote__Sz4_u","tip-exit":"inbox-sidebar_tip-exit__Dyk5o","backdrop":"inbox-sidebar_backdrop__kUU62","headerCompose":"inbox-sidebar_headerCompose__VX6ep"});
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
A.reg(11414, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var i = t(51811);
  let n = {
    name: "folder-input",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
          key: "fm4g5t"
        }
      ],
      ["path", { d: "M2 13h10", key: "pgb2dq" }],
      ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
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
A.reg(32159, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var s = a(51811);
  let n = {
    name: "archive",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }
      ],
      [
        "path",
        { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }
      ],
      ["path", { d: "M10 12h4", key: "a56b0p" }]
    ]
  };
  n.node;
  let i = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(36145, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "tag",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
          key: "vktsd0"
        }
      ],
      [
        "circle",
        { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }
      ]
    ]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(56512, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { InboxSidebar: () => em, default: () => eb });
  var i = a(95155), n = a(12115), r = a(28245), s = a(55809), o = a(92171), l = a(25354), d = a(18310), c = a(80642), u = a(57700), p = a(57793), m = a(40623), b = a(61665), h = a(95697), x = a(59103), f = a(9383), _ = a(36483), y = a(32159), g = a(75796), v = a(69203), j = a(25879), N = a(76721), w = a(11414), T = a(64577), k = a(36145), S = a(69618), C = a(59680), P = a(15330), $ = a(9005), M = a(65024), R = a(92218), L = a(51288), z = a(36690), A = a(7770), E = a(1568), D = a.n(E);
  let I = { name: "Emma Collins", photo: "media/people/emma-collins.svg" }, Y = { name: "Marcus Johnson", photo: "media/people/marcus-johnson.svg" }, O = { name: "Ava Mitchell", photo: "media/people/ava-mitchell.svg" }, W = { name: "Jasmine Brooks", photo: "media/people/jasmine-brooks.svg" }, B = [I, Y, O, W], F = (e2, t2, a2, i2, n2, r2, s2 = {}) => ({
    id: e2,
    ...t2,
    subject: a2,
    preview: i2,
    time: n2,
    box: r2,
    unread: false,
    starred: false,
    labels: [],
    ...s2
  }), q = [
    F(
      "m1",
      I,
      "Onboarding prototype, round two",
      "I tightened the handoff between steps two and three and left notes on the empty states.",
      "9:42 AM",
      "inbox",
      { unread: true, labels: ["design"] }
    ),
    F(
      "m2",
      O,
      "Launch checklist: four items left",
      "Pricing copy and the status page are the last blockers before Tuesday.",
      "9:10 AM",
      "inbox",
      { unread: true, starred: true, labels: ["launch"] }
    ),
    F(
      "m3",
      Y,
      "Menu and table states for Thursday",
      "Two interaction questions before the review, plus what already feels right.",
      "8:18 AM",
      "inbox",
      { unread: true, labels: ["design"] }
    ),
    F(
      "m4",
      W,
      "Preview build 412 is live",
      "Keyboard fixes and the reduced motion pass are in. The link is in the thread.",
      "Yesterday",
      "inbox",
      { labels: ["launch"] }
    ),
    F(
      "m5",
      I,
      "Interview notes from the Lisbon sessions",
      "Six sessions, three strong patterns. The export flow came up in every one.",
      "Yesterday",
      "inbox",
      { labels: ["research"] }
    ),
    F(
      "m6",
      Y,
      "Portfolio review for the senior role",
      "Two candidates stood out. Could you take the second review on Friday?",
      "Sun",
      "inbox",
      { unread: true, labels: ["hiring"] }
    ),
    F(
      "m7",
      O,
      "Status page copy, final pass",
      "I shortened the incident states and matched the tone of the docs.",
      "Sat",
      "inbox",
      { labels: ["launch"] }
    ),
    F(
      "m8",
      W,
      "Quarterly research readout",
      "Back on Thursday, once the survey numbers are in.",
      "Until Thu",
      "snoozed",
      { labels: ["research"] }
    ),
    F(
      "m9",
      I,
      "Icon set licensing",
      "The vendor replied. We can pick this up when legal has the terms.",
      "Until Fri",
      "snoozed"
    ),
    F(
      "m10",
      Y,
      "Re: Menu and table states",
      "Thursday at two works. I will bring the focus order notes.",
      "8:31 AM",
      "sent",
      { labels: ["design"] }
    ),
    F(
      "m11",
      O,
      "Pricing page review",
      "Left comments on the plan table and the order of the questions.",
      "Yesterday",
      "sent",
      { labels: ["launch"] }
    ),
    F(
      "m12",
      W,
      "Re: Preview build 412",
      "Two small things on the settings page before we share it wider.",
      "Yesterday",
      "drafts"
    ),
    F(
      "m13",
      W,
      "Radius scale merged",
      "The new radius tokens are live on main. Nothing to migrate.",
      "Sep 15",
      "archive",
      { starred: true, labels: ["design"] }
    ),
    F(
      "m14",
      O,
      "Offsite agenda",
      "The room is booked for the 30th. The draft agenda is attached.",
      "Sep 14",
      "archive"
    ),
    F(
      "m15",
      { name: "Design Awards Guild" },
      "Your studio has been shortlisted",
      "Confirm your entry fee today to secure a jury review.",
      "Sun",
      "spam",
      { unread: true }
    )
  ], U = [
    { id: "inbox", label: "Inbox", icon: b.A },
    { id: "starred", label: "Starred", icon: h.A },
    { id: "snoozed", label: "Snoozed", icon: x.A },
    { id: "sent", label: "Sent", icon: f.A },
    { id: "drafts", label: "Drafts", icon: _.A },
    { id: "archive", label: "Archive", icon: y.A }
  ], K = [
    { id: "label-design", label: "Design review", tone: "design" },
    { id: "label-launch", label: "Launch", tone: "launch" },
    { id: "label-research", label: "Research", tone: "research" },
    { id: "label-hiring", label: "Hiring", tone: "hiring" }
  ], G = [
    { id: "all", label: "All mail", icon: g.A },
    { id: "spam", label: "Spam", icon: v.A },
    { id: "trash", label: "Trash", icon: j.A }
  ], X = [...U, ...K, ...G], J = X.map((e2) => e2.id), V = ["inbox", "starred", "snoozed", "archive", "spam", "trash"], H = {
    inbox: ["Inbox zero", "Everything is filed. New mail will land here."],
    starred: [
      "No starred messages",
      "Star a message or drag it here to keep it close."
    ],
    snoozed: [
      "Nothing snoozed",
      "Snoozed messages return to your inbox on time."
    ],
    sent: ["Nothing sent yet", "Messages you send will appear here."],
    drafts: ["No drafts", "Close a message while writing and it waits here."],
    archive: [
      "Archive is empty",
      "Archived messages stay out of the way here."
    ],
    all: ["No mail", "Messages from every folder appear here."],
    spam: ["No spam", "Messages marked as spam are kept for 30 days."],
    trash: ["Trash is empty", "Deleted messages are kept here for 30 days."],
    label: [
      "Nothing with this label",
      "Drag a message onto the label to add it."
    ]
  }, Q = { to: "", subject: "", body: "" }, Z = (e2) => X.find((t2) => t2.id === e2)?.label ?? "", ee = (e2) => e2.startsWith("label-") ? e2.slice(6) : null, et = (e2) => "inbox" === e2 || "spam" === e2;
  function ea(e2, t2) {
    let a2 = ee(t2), i2 = "spam" !== e2.box && "trash" !== e2.box;
    return a2 ? i2 && e2.labels.includes(a2) : "starred" === t2 ? i2 && e2.starred : "all" === t2 ? i2 && "drafts" !== e2.box : e2.box === t2;
  }
  function ei(e2, t2) {
    let a2 = ee(t2);
    return a2 ? "drafts" !== e2.box && !e2.labels.includes(a2) : "starred" === t2 ? "drafts" !== e2.box && !e2.starred : "sent" !== t2 && "drafts" !== t2 && "all" !== t2 && ("drafts" === e2.box ? "trash" === t2 : e2.box !== t2);
  }
  function en(e2) {
    return "drafts" === e2.box ? { to: "trash", label: "Delete draft", icon: j.A } : "archive" === e2.box || "spam" === e2.box || "trash" === e2.box ? { to: "inbox", label: "Move to Inbox", icon: b.A } : { to: "archive", label: "Archive", icon: y.A };
  }
  function er(e2, t2) {
    let a2 = t2?.querySelector("[data-avatar]");
    if (!e2 || !a2) return null;
    let i2 = e2.getBoundingClientRect(), n2 = a2.getBoundingClientRect();
    return {
      x: n2.left - i2.left - e2.clientLeft - 6,
      y: n2.top - i2.top - e2.clientTop + n2.height / 2 - 20
    };
  }
  let es = {
    enter: (e2) => ({
      opacity: 0,
      y: 14 * e2,
      filter: `blur(${A.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        y: A.T.spring.smooth,
        default: {
          duration: A.T.duration.standard,
          ease: [...A.T.ease.enter]
        }
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: -10 * e2,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: {
        duration: A.T.duration.exit,
        ease: [...A.T.ease.standard]
      }
    })
  }, eo = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: A.T.duration.instant } },
    exit: { opacity: 0, transition: { duration: A.T.duration.instant } }
  }, el = {
    initial: { opacity: 0, y: "0.3em", filter: `blur(${A.T.blur.soft}px)` },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: A.T.duration.standard,
        ease: [...A.T.ease.enter]
      }
    },
    exit: {
      opacity: 0,
      y: "-0.3em",
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: {
        duration: A.T.duration.fast,
        ease: [...A.T.ease.standard]
      }
    }
  }, ed = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }, ec = { duration: 0 };
  function eu({
    enabled: e2 = true,
    label: t2,
    note: a2,
    shortcut: r2,
    side: s2 = "right",
    children: o2
  }) {
    let [l2, d2] = (0, n.useState)(false);
    return !e2 && l2 && d2(false), (0, i.jsxs)(m.bL, {
      open: e2 && l2,
      onOpenChange: (t3) => d2(t3 && e2),
      children: [
        (0, i.jsx)(m.l9, { asChild: true, children: o2 }),
        (0, i.jsx)(m.ZL, {
          children: (0, i.jsxs)(m.UC, {
            className: D().tip,
            side: s2,
            sideOffset: "right" === s2 ? 14 : 8,
            collisionPadding: 8,
            children: [
              t2,
              a2 && (0, i.jsx)("span", { className: D().tipNote, children: a2 }),
              r2 && (0, i.jsx)("kbd", { children: r2 })
            ]
          })
        })
      ]
    });
  }
  function ep({ collapsed: e2, reduce: t2 }) {
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
          transition: t2 ? ec : A.T.spring.smooth
        })
      ]
    });
  }
  function em({ defaultCollapsed: e2 = false, onCollapsedChange: t2 }) {
    var a2;
    let b2, x2, _2, y2 = (0, n.useId)(), v2 = (0, d.I)(), [j2, E2] = (0, n.useState)(!!e2 || null), [I2, Y2] = (0, n.useState)({ compact: false, narrow: false, ready: false }), { compact: O2, narrow: W2 } = I2, F2 = j2 ?? W2, ec2 = !O2 && F2, [eb2, eh] = (0, n.useState)(false), ex = O2 && eb2, ef = (0, n.useRef)(false), e_ = (a2 = !!v2, b2 = (0, r.d)(+!ec2), x2 = (0, s.G)(b2, (e10) => `calc(64px + (var(--full) - 64px) * ${e10})`), (0, n.useEffect)(() => {
      let e10 = +!ec2;
      if (a2 || !ef.current) return void b2.jump(e10);
      let t3 = (0, o.i)(b2, e10, A.T.spring.smooth);
      return () => t3.stop();
    }, [ec2, a2, b2, ef]), x2), ey = (0, r.d)(0), [eg, ev] = (0, n.useState)(q), [ej, eN] = (0, n.useState)("inbox"), [ew, eT] = (0, n.useState)(1), [ek, eS] = (0, n.useState)(null), [eC, eP] = (0, n.useState)(true), [e$, eM] = (0, n.useState)(false), [eR, eL] = (0, n.useState)(false), [ez, eA] = (0, n.useState)(Q), [eE, eD] = (0, n.useState)(false), [eI, eY] = (0, n.useState)({
      key: 0,
      text: "Drag a message onto a folder, or use Move to"
    }), [eO, eW] = (0, n.useState)(null), [eB, eF] = (0, n.useState)(null), [eq, eU] = (0, n.useState)(null), [eK, eG] = (0, n.useState)(null), [eX, eJ] = (0, n.useState)(null), [eV, eH] = (0, n.useState)(null), eQ = (0, n.useRef)(null), eZ = (0, n.useRef)(null), e0 = (0, n.useRef)(null), e1 = (0, n.useRef)(null), e5 = (0, n.useRef)(null), e22 = (0, n.useRef)(null), e6 = (0, n.useRef)(null), e7 = (0, n.useRef)(null), e8 = (0, n.useRef)(null), e4 = (0, n.useRef)(/* @__PURE__ */ new Map()), e3 = (0, n.useRef)(/* @__PURE__ */ new Map()), e9 = (0, n.useRef)(null), te = (0, n.useRef)(false), tt = (0, n.useRef)(null), ta = (0, n.useRef)(false), ti = (0, n.useRef)(0), tn = (0, n.useRef)(0), tr = (0, n.useRef)(0), ts = (0, n.useRef)(0), to = (0, n.useRef)(false), tl = (0, r.d)(0), td = (0, r.d)(0), tc = (0, r.d)(1), tu = (0, r.d)(0), tp = eg.filter((e10) => ea(e10, ej)), tm = tp.filter((e10) => e10.unread).length, tb = eX ? eg.find((e10) => e10.id === eX) : void 0, th = (function(e10) {
      let t3 = e10.trim().toLowerCase();
      if (!(t3.length < 3))
        return B.find(
          (e11) => e11.name.toLowerCase().startsWith(t3) || t3.startsWith(e11.name.split(" ")[0].toLowerCase())
        );
    })(ez.to), tx = { duration: 0 }, tf = v2 ? tx : A.T.spring.snappy, t_ = v2 ? tx : A.T.spring.smooth, ty = v2 ? tx : A.T.spring.morph, tg = H[ee(ej) ? "label" : ej], tv = (e10, t3) => (a3) => {
      a3 ? e10.current.set(t3, a3) : e10.current.delete(t3);
    };
    (0, n.useLayoutEffect)(() => {
      let e10 = eQ.current;
      if (!e10) return;
      let t3 = (e11) => Y2((t4) => {
        let a4 = { compact: e11 < 600, narrow: e11 >= 600 && e11 <= 720, ready: true };
        return t4.compact === a4.compact && t4.narrow === a4.narrow && t4.ready ? t4 : a4;
      });
      t3(e10.getBoundingClientRect().width);
      let a3 = requestAnimationFrame(() => {
        ef.current = true;
      }), i2 = new ResizeObserver(([e11]) => t3(e11.contentRect.width));
      return i2.observe(e10), () => {
        i2.disconnect(), cancelAnimationFrame(a3);
      };
    }, []), !O2 && eb2 && eh(false), (0, n.useEffect)(() => {
      let e10 = +!!ex;
      if (v2 || !ef.current) return void ey.jump(e10);
      let t3 = (0, o.i)(ey, e10, A.T.spring.smooth);
      return () => t3.stop();
    }, [ex, v2, ey]);
    let tj = (0, n.useRef)(false);
    function tN(e10) {
      e10 !== F2 && (E2(e10), tP(e10 ? "Sidebar collapsed" : "Sidebar expanded"), t2?.(e10));
    }
    (0, n.useEffect)(() => {
      if (ex) {
        tj.current = true;
        let e10 = e7.current?.querySelector('[aria-current="page"]') ?? e7.current?.querySelector("button");
        e10?.focus({ preventScroll: true });
      } else
        tj.current && (tj.current = false, e6.current?.focus({ preventScroll: true }));
    }, [ex]), _2 = (0, n.useEffectEvent)((e10) => {
      if ("[" !== e10.key || e10.repeat || e10.metaKey || e10.ctrlKey || e10.altKey || e10.defaultPrevented)
        return;
      let t3 = eQ.current, a3 = e10.target instanceof HTMLElement ? e10.target : null;
      if (!t3 || a3 && (a3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a3.tagName) || a3.closest('[role="menu"], [role="dialog"]')))
        return;
      let i2 = t3.getBoundingClientRect();
      !i2.width || i2.bottom < 0 || i2.top > window.innerHeight || (e10.preventDefault(), (() => {
        eR || eX || (O2 ? eh(!eb2) : tN(!F2));
      })());
    }), (0, n.useEffect)(() => {
      let e10 = (e11) => _2(e11);
      return window.addEventListener("keydown", e10), () => window.removeEventListener("keydown", e10);
    }, []), (0, n.useEffect)(() => {
      eR ? e8.current?.focus({ preventScroll: true }) : ta.current && (ta.current = false, e5.current?.focus({ preventScroll: true }));
    }, [eR]);
    let tw = (0, n.useEffectEvent)((e10) => {
      let t3 = e9.current;
      "Escape" === e10.key && t3?.dragging && !t3.cancelled && (t3.cancelled = true, tI(), tY(t3.id), tP("Move cancelled"));
    });
    (0, n.useEffect)(() => {
      if (!eX) return;
      let e10 = (e11) => tw(e11);
      return window.addEventListener("keydown", e10), () => window.removeEventListener("keydown", e10);
    }, [eX]);
    let tT = (0, n.useRef)(null), [tk, tS] = (0, n.useState)(false);
    function tC(e10) {
      let t3 = tT.current;
      if (t3 && t3.id === e10.pointerId && (tT.current = null, t3.active)) {
        if (tS(false), "pointercancel" !== e10.type && (0.55 > ey.get() || t3.velocity < -0.4))
          return void eh(false);
        v2 ? ey.jump(1) : (0, o.i)(ey, 1, A.T.spring.smooth);
      }
    }
    function tP(e10) {
      eY((t3) => ({ key: t3.key + 1, text: e10 }));
    }
    function t$(e10) {
      let t3 = eZ.current, a3 = t3?.getBoundingClientRect(), i2 = e10.getBoundingClientRect();
      return {
        x: i2.left - (a3?.left ?? 0) - (t3?.clientLeft ?? 0),
        y: i2.top - (a3?.top ?? 0) - (t3?.clientTop ?? 0),
        height: i2.height
      };
    }
    function tM(e10) {
      let t3 = ee(e10) ? "toggle-labels" : "spam" === e10 || "trash" === e10 || "all" === e10 ? "toggle-more" : "";
      return O2 && !eb2 ? e6.current ?? void 0 : e4.current.get(e10) ?? e4.current.get(t3);
    }
    function tR(e10, t3) {
      tn.current === t3 && (eF(null), eU(null), eG({ view: e10, key: ++tr.current }));
    }
    function tL(e10, t3) {
      let a3 = tM(e10);
      if (!a3 || v2) return void tR(e10, t3);
      let i2 = t$(a3), n2 = A.T.duration.considered + 0.06;
      (0, o.i)(tl, i2.x + 6, { duration: n2, ease: [...A.T.ease.inOut] }), (0, o.i)(td, i2.y + i2.height / 2 - 20, {
        duration: n2,
        ease: [...A.T.ease.standard]
      }), (0, o.i)(tc, 0.34, { duration: n2, ease: [...A.T.ease.inOut] }), (0, o.i)(tu, [1, 1, 0], { duration: n2, times: [0, 0.7, 1] }).then(
        () => tR(e10, t3)
      );
    }
    function tz(e10, t3, a3, i2) {
      let n2 = ++tn.current;
      (eU({ id: a3, to: t3 }), e10 && !v2 && tM(t3)) ? (eF({ key: n2, name: i2.name, photo: i2.photo, subject: i2.subject }), tl.jump(e10.x), td.jump(e10.y), tc.jump(1), tu.jump(1), tL(t3, n2)) : tR(t3, n2);
    }
    function tA(e10, t3, a3, i2, n2) {
      if (ea(e10, ej) && !ea(t3, ej)) {
        let t4 = tp.map((e11) => e11.id), a4 = t4.indexOf(e10.id), i3 = t4[a4 + 1] ?? t4[a4 - 1], r3 = (i3 ? e3.current.get(i3) : void 0) ?? e1.current;
        "menu" === n2 ? tt.current = r3 : e3.current.get(e10.id)?.parentElement?.contains(document.activeElement) && requestAnimationFrame(() => r3?.focus({ preventScroll: true })), ek === e10.id && eS(null);
      }
      let r2 = i2 && "drag" !== n2 ? er(eZ.current, e3.current.get(e10.id)) : null;
      ev((a4) => a4.map((a5) => a5.id === e10.id ? t3 : a5)), tP(a3), i2 && (eW(e10), "drag" === n2 ? (eU({ id: e10.id, to: i2 }), tL(i2, tn.current)) : tz(r2, i2, e10.id, e10));
    }
    function tE(e10, t3, a3) {
      let i2, n2;
      ei(e10, t3) && tA(
        e10,
        (i2 = ee(t3)) ? { ...e10, labels: [...e10.labels, i2] } : "starred" === t3 ? { ...e10, starred: true } : { ...e10, box: t3, unread: !!et(t3) && e10.unread },
        (n2 = `\u201C${e10.subject}\u201D`, ee(t3) ? `Labeled ${n2} ${Z(t3)}` : "starred" === t3 ? `Starred ${n2}` : "archive" === t3 ? `Archived ${n2}` : `Moved ${n2} to ${Z(t3)}`),
        t3,
        a3
      );
    }
    function tD(e10) {
      tA(
        e10,
        { ...e10, starred: !e10.starred },
        e10.starred ? `Removed the star from \u201C${e10.subject}\u201D` : `Starred \u201C${e10.subject}\u201D`,
        null,
        "row"
      ), e10.starred || eG({ view: "starred", key: ++tr.current });
    }
    function tI() {
      window.clearTimeout(ti.current), eJ(null), eH(null);
    }
    function tY(e10) {
      let t3 = er(eZ.current, e3.current.get(e10)), a3 = tn.current;
      v2 || !t3 ? eF(null) : ((0, o.i)(tl, t3.x, A.T.spring.smooth), (0, o.i)(td, t3.y, A.T.spring.smooth), (0, o.i)(tu, 0, { duration: A.T.duration.exit, delay: 0.14 }).then(
        () => {
          tn.current === a3 && eF(null);
        }
      ));
    }
    function tO() {
      let e10 = e9.current;
      e9.current = null, e10?.dragging && !e10.cancelled && (tI(), tY(e10.id));
    }
    function tW(e10) {
      return {
        id: `new-${++ts.current}`,
        name: th?.name ?? (ez.to.trim() || "No recipient"),
        photo: th?.photo,
        subject: ez.subject.trim() || "No subject",
        preview: ez.body.trim() || "No message",
        time: "Now",
        box: e10,
        unread: false,
        starred: false,
        labels: []
      };
    }
    function tB() {
      let e10 = e22.current;
      if (!e10) return null;
      let t3 = t$(e10);
      return { x: t3.x + 12, y: t3.y + 8 };
    }
    function tF(e10) {
      let t3 = !!(ez.to.trim() || ez.subject.trim() || ez.body.trim()), a3 = tB();
      if (ta.current = true, eL(false), eD(false), eA(Q), !t3) return;
      if ("discard" === e10) return void tP("Draft discarded");
      let i2 = tW("drafts");
      ev((e11) => [i2, ...e11]), tP(`Saved \u201C${i2.subject}\u201D to Drafts.`), tz(a3, "drafts", i2.id, i2);
    }
    function tq(e10) {
      if (e10?.preventDefault(), !ez.to.trim()) {
        eD(true), e8.current?.focus();
        return;
      }
      let t3 = tB(), a3 = tW("sent");
      ta.current = true, eL(false), eA(Q), ev((e11) => [a3, ...e11]), tP(`Sent \u201C${a3.subject}\u201D to ${a3.name}.`), tz(t3, "sent", a3.id, a3);
    }
    function tU(e10) {
      var t3, a3;
      let n2 = e10.icon, r2 = (t3 = e10.id, a3 = eq?.to === t3 ? eg.filter((e11) => e11.id !== eq.id) : eg, et(t3) ? a3.filter((e11) => e11.box === t3 && e11.unread).length : "sent" === t3 || "archive" === t3 || "all" === t3 || "trash" === t3 ? 0 : a3.filter((e11) => ea(e11, t3)).length), s2 = et(e10.id), o2 = eK && eK.view === e10.id ? eK.key : 0, d2 = tb ? ei(tb, e10.id) ? eV === e10.id ? "over" : "ready" : "off" : void 0, u2 = `${r2} ${s2 ? "unread" : 1 === r2 ? "message" : "messages"}`;
      return (0, i.jsx)(
        "li",
        {
          children: (0, i.jsx)(eu, {
            enabled: ec2 && !tb,
            label: e10.label,
            note: r2 > 0 ? u2 : void 0,
            children: (0, i.jsxs)("button", {
              ref: tv(e4, e10.id),
              type: "button",
              className: D().navItem,
              "aria-current": ej === e10.id ? "page" : void 0,
              "data-drop": d2,
              onClick: () => {
                var t4;
                (t4 = e10.id) !== ej && (eT(J.indexOf(t4) > J.indexOf(ej) ? 1 : -1), eN(t4), eS(null), e0.current?.scrollTo({ top: 0 })), ex && eh(false);
              },
              children: [
                ej === e10.id && (0, i.jsx)(l.PY1.span, {
                  layoutId: "nav-active",
                  className: D().navActive,
                  transition: ty
                }),
                (0, i.jsx)(
                  l.PY1.span,
                  {
                    className: D().navIcon,
                    initial: !!o2 && !v2 && { scale: 1.35 },
                    animate: { scale: 1 },
                    transition: A.T.spring.snappy,
                    "aria-hidden": "true",
                    children: n2 ? (0, i.jsx)(n2, { size: 16, strokeWidth: 1.75 }) : (0, i.jsx)("i", {
                      className: D().swatch,
                      "data-tone": e10.tone
                    })
                  },
                  o2
                ),
                (0, i.jsx)("span", {
                  className: D().navLabel,
                  children: e10.label
                }),
                (0, i.jsx)("span", {
                  className: D().navTrail,
                  children: (0, i.jsx)(c.N, {
                    initial: false,
                    children: r2 > 0 && (0, i.jsx)(
                      l.PY1.span,
                      {
                        className: D().navCount,
                        "data-strong": s2 || void 0,
                        "aria-hidden": "true",
                        initial: { opacity: 0, scale: 0.6 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.6 },
                        transition: tf,
                        children: (0, i.jsx)(M.q, { value: r2 })
                      },
                      "count"
                    )
                  })
                }),
                s2 && (0, i.jsx)("span", {
                  className: D().navDot,
                  "aria-hidden": "true",
                  children: (0, i.jsx)(c.N, {
                    initial: false,
                    children: r2 > 0 && (0, i.jsx)(
                      l.PY1.span,
                      {
                        className: D().navDotFace,
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        exit: { scale: 0 },
                        transition: tf
                      },
                      "dot"
                    )
                  })
                }),
                r2 > 0 && (0, i.jsxs)("span", {
                  className: D().srOnly,
                  children: [", ", u2]
                })
              ]
            })
          })
        },
        e10.id
      );
    }
    function tK(e10, t3, a3, n2, r2, s2) {
      let o2 = `${y2}-${e10}`, d2 = `toggle-${e10}`;
      return (0, i.jsxs)("div", {
        className: D().section,
        children: [
          (0, i.jsx)("span", {
            className: D().sectionRule,
            "aria-hidden": "true"
          }),
          (0, i.jsx)(eu, {
            enabled: ec2 && !tb,
            label: t3,
            children: (0, i.jsxs)("button", {
              ref: tv(e4, d2),
              type: "button",
              className: D().sectionToggle,
              "aria-expanded": n2,
              "aria-controls": n2 ? o2 : void 0,
              "data-active": !n2 && s2.some((e11) => e11.id === ej) || void 0,
              "data-drop": tb && !n2 && eV === d2 ? "over" : void 0,
              onClick: () => r2(!n2),
              children: [
                (0, i.jsx)(a3, {
                  className: D().sectionIcon,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: D().sectionTitle,
                  children: t3
                }),
                (0, i.jsx)(N.A, {
                  className: D().chevron,
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            })
          }),
          (0, i.jsx)(c.N, {
            initial: false,
            children: n2 && (0, i.jsx)(
              l.PY1.div,
              {
                id: o2,
                className: D().sectionBody,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: t_,
                children: (0, i.jsx)("ul", {
                  className: D().navList,
                  children: s2.map(tU)
                })
              },
              "body"
            )
          })
        ]
      });
    }
    let tG = X.find((e10) => e10.id === ej)?.icon ?? k.A, tX = (0, i.jsx)(c.N, {
      initial: false,
      children: !eR && (0, i.jsx)(
        eu,
        {
          enabled: ec2 || O2,
          label: "Compose",
          children: (0, i.jsx)(l.PY1.button, {
            ref: e5,
            layoutId: "compose",
            type: "button",
            className: D().compose,
            style: { borderRadius: 10 },
            transition: ty,
            "aria-haspopup": "dialog",
            "aria-label": O2 ? "Compose" : void 0,
            onClick: () => {
              to.current = true, eL(true), eD(false);
            },
            children: (0, i.jsxs)(l.PY1.span, {
              layout: "position",
              className: D().composeInner,
              initial: !!to.current && { opacity: 0 },
              animate: eR ? { opacity: 0, transition: { duration: 0.06 } } : {
                opacity: 1,
                transition: {
                  duration: A.T.duration.fast,
                  delay: 0.14 * !v2
                }
              },
              children: [
                (0, i.jsx)(S.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: D().composeText,
                  children: "Compose"
                })
              ]
            })
          })
        },
        "compose"
      )
    }), tJ = O2 ? ex ? "Close mailboxes" : "Open mailboxes" : F2 ? "Expand sidebar" : "Collapse sidebar";
    return (0, i.jsx)("div", {
      ref: eQ,
      className: `${D().root} ${D().tones}`,
      onKeyDown: function(e10) {
        if (!ex || e10.defaultPrevented) return;
        if ("Escape" === e10.key) {
          e10.preventDefault(), eh(false);
          return;
        }
        if ("Tab" !== e10.key) return;
        let t3 = [
          ...e7.current?.querySelectorAll("button:not([disabled])") ?? []
        ], a3 = t3[0], i2 = t3[t3.length - 1];
        a3 && i2 && (e10.shiftKey && document.activeElement === a3 ? (e10.preventDefault(), i2.focus()) : (e10.shiftKey || document.activeElement !== i2) && e7.current?.contains(document.activeElement) || (e10.preventDefault(), a3.focus()));
      },
      children: (0, i.jsx)(m.Kq, {
        delayDuration: 250,
        skipDelayDuration: 300,
        children: (0, i.jsx)(u.o, {
          id: y2,
          children: (0, i.jsxs)(l.PY1.section, {
            ref: eZ,
            className: D().shell,
            "aria-label": "Mail",
            style: { "--drawer": ey },
            "data-dragging": eX ? "" : void 0,
            "data-ready": I2.ready || void 0,
            "data-drawer": ex || void 0,
            children: [
              (0, i.jsxs)(l.PY1.div, {
                ref: e7,
                id: `${y2}-sidebar`,
                className: D().sidebar,
                style: { width: e_ },
                "data-rail": ec2 || void 0,
                "data-swiping": tk || void 0,
                inert: O2 && !eb2,
                onPointerDown: function(e10) {
                  ex && "mouse" !== e10.pointerType && e10.isPrimary && (tT.current = {
                    id: e10.pointerId,
                    x: e10.clientX,
                    y: e10.clientY,
                    width: e10.currentTarget.offsetWidth + 64,
                    active: false,
                    last: e10.clientX,
                    time: e10.timeStamp,
                    velocity: 0
                  });
                },
                onPointerMove: function(e10) {
                  let t3 = tT.current;
                  if (!t3 || t3.id !== e10.pointerId) return;
                  let a3 = e10.clientX - t3.x, i2 = e10.clientY - t3.y;
                  if (!t3.active) {
                    if (8 > Math.hypot(a3, i2)) return;
                    if (a3 > 0 || Math.abs(i2) > Math.abs(a3)) {
                      tT.current = null;
                      return;
                    }
                    t3.active = true, e10.currentTarget.setPointerCapture(e10.pointerId), ey.stop(), tS(true);
                  }
                  let n2 = e10.timeStamp - t3.time;
                  n2 > 0 && (t3.velocity = (e10.clientX - t3.last) / n2), t3.last = e10.clientX, t3.time = e10.timeStamp, ey.set(Math.min(1, Math.max(0, 1 + a3 / t3.width)));
                },
                onPointerUp: tC,
                onPointerCancel: tC,
                "aria-label": O2 ? "Mailboxes" : void 0,
                role: O2 ? "dialog" : void 0,
                "aria-modal": ex || void 0,
                children: [
                  !O2 && (0, i.jsx)("div", {
                    className: D().composeSlot,
                    children: tX
                  }),
                  (0, i.jsxs)(l.PY1.nav, {
                    layoutScroll: true,
                    className: D().nav,
                    "aria-label": "Mailboxes",
                    children: [
                      (0, i.jsx)("ul", {
                        className: D().navList,
                        children: U.map(tU)
                      }),
                      tK("labels", "Labels", k.A, eC, eP, K),
                      tK("more", "More", C.A, e$, eM, G)
                    ]
                  }),
                  (0, i.jsx)(eu, {
                    enabled: ec2,
                    label: "Sofia Ramirez",
                    note: "sofia@fieldnote.studio",
                    children: (0, i.jsxs)("div", {
                      className: D().account,
                      children: [
                        (0, i.jsx)(R.e, {
                          name: "Sofia Ramirez",
                          src: "media/people/sofia-ramirez.svg",
                          size: "sm",
                          status: "online"
                        }),
                        (0, i.jsxs)("span", {
                          className: D().accountText,
                          children: [
                            (0, i.jsx)("span", { children: "Sofia Ramirez" }),
                            (0, i.jsx)("span", {
                              children: "sofia@fieldnote.studio"
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, i.jsx)("div", {
                className: D().backdrop,
                "aria-hidden": "true",
                onClick: () => {
                  eh(false);
                }
              }),
              (0, i.jsxs)("div", {
                className: D().pane,
                inert: ex,
                children: [
                  (0, i.jsxs)("header", {
                    className: D().paneHeader,
                    children: [
                      (0, i.jsxs)("div", {
                        className: D().paneTitle,
                        children: [
                          (0, i.jsx)(eu, {
                            label: tJ,
                            shortcut: "[",
                            side: "bottom",
                            children: (0, i.jsx)("button", {
                              ref: e6,
                              type: "button",
                              className: D().paneToggle,
                              "aria-label": tJ,
                              "aria-expanded": O2 ? ex : !F2,
                              "aria-controls": `${y2}-sidebar`,
                              "aria-keyshortcuts": "[",
                              onClick: () => O2 ? void eh(!eb2) : tN(!F2),
                              children: (0, i.jsx)(ep, {
                                collapsed: O2 ? !ex : F2,
                                reduce: !!v2
                              })
                            })
                          }),
                          (0, i.jsx)("h2", {
                            ref: e1,
                            id: `${y2}-title`,
                            className: D().title,
                            tabIndex: -1,
                            children: (0, i.jsx)(c.N, {
                              mode: "popLayout",
                              initial: false,
                              children: (0, i.jsx)(
                                l.PY1.span,
                                {
                                  className: D().titleText,
                                  ...v2 ? ed : el,
                                  children: Z(ej)
                                },
                                ej
                              )
                            })
                          })
                        ]
                      }),
                      (0, i.jsxs)("p", {
                        className: D().summary,
                        children: [
                          (0, i.jsx)("span", {
                            className: D().num,
                            children: (0, i.jsx)(M.q, { value: tp.length })
                          }),
                          1 === tp.length ? " message" : " messages",
                          (0, i.jsx)(c.N, {
                            initial: false,
                            children: tm > 0 && (0, i.jsx)(
                              l.PY1.span,
                              {
                                className: D().unreadClause,
                                initial: { opacity: 0, width: 0 },
                                animate: { opacity: 1, width: "auto" },
                                exit: { opacity: 0, width: 0 },
                                transition: ty,
                                children: (0, i.jsxs)("span", {
                                  children: [
                                    ", ",
                                    (0, i.jsx)("span", {
                                      className: D().num,
                                      children: (0, i.jsx)(M.q, {
                                        value: tm
                                      })
                                    }),
                                    " unread"
                                  ]
                                })
                              },
                              "unread"
                            )
                          })
                        ]
                      }),
                      O2 && (0, i.jsx)("div", {
                        className: D().headerCompose,
                        children: tX
                      })
                    ]
                  }),
                  (0, i.jsx)("div", {
                    ref: e0,
                    className: D().viewport,
                    children: (0, i.jsx)(c.N, {
                      mode: "popLayout",
                      initial: false,
                      custom: ew,
                      children: (0, i.jsxs)(
                        l.PY1.div,
                        {
                          className: D().page,
                          custom: ew,
                          variants: v2 ? eo : es,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          children: [
                            (0, i.jsx)("ul", {
                              className: D().list,
                              "aria-labelledby": `${y2}-title`,
                              children: (0, i.jsx)(c.N, {
                                initial: false,
                                children: tp.map((e10) => {
                                  let t3, a3, n2, r2;
                                  return a3 = (t3 = en(e10)).icon, n2 = "sent" === e10.box ? "To " : "drafts" === e10.box ? "Draft to " : "", r2 = [
                                    e10.unread && "unread",
                                    e10.starred && "starred",
                                    ...e10.labels.map(
                                      (e11) => `labeled ${Z(`label-${e11}`)}`
                                    )
                                  ].filter(Boolean).join(", "), (0, i.jsxs)(
                                    l.PY1.li,
                                    {
                                      className: D().row,
                                      "data-unread": e10.unread || void 0,
                                      "data-selected": ek === e10.id || void 0,
                                      "data-dragging": eX === e10.id || void 0,
                                      initial: { height: 0, opacity: 0 },
                                      animate: { height: "auto", opacity: 1 },
                                      exit: { height: 0, opacity: 0 },
                                      transition: t_,
                                      children: [
                                        (0, i.jsxs)("button", {
                                          ref: tv(e3, e10.id),
                                          type: "button",
                                          className: D().rowMain,
                                          "aria-keyshortcuts": "E S",
                                          onClick: () => {
                                            te.current || (eS(e10.id), e10.unread && (ev(
                                              (t4) => t4.map(
                                                (t5) => t5.id === e10.id ? { ...t5, unread: false } : t5
                                              )
                                            ), tP(
                                              `Marked \u201C${e10.subject}\u201D as read`
                                            )));
                                          },
                                          onKeyDown: (t4) => (function(e11, t5) {
                                            if (e11.metaKey || e11.ctrlKey || e11.altKey)
                                              return;
                                            let a4 = e11.key.toLowerCase();
                                            "e" === a4 && (e11.preventDefault(), tE(t5, en(t5).to, "row")), "s" === a4 && (e11.preventDefault(), tD(t5));
                                          })(t4, e10),
                                          onPointerDown: (t4) => {
                                            "touch" !== t4.pointerType && 0 === t4.button && !eR && (e9.current = {
                                              id: e10.id,
                                              x: t4.clientX,
                                              y: t4.clientY,
                                              dragging: false,
                                              cancelled: false,
                                              over: null
                                            }, t4.currentTarget.setPointerCapture(
                                              t4.pointerId
                                            ));
                                          },
                                          onPointerMove: (t4) => (function(e11, t5) {
                                            let a4 = e9.current, i2 = eZ.current;
                                            if (!a4 || a4.id !== t5.id || a4.cancelled || !i2)
                                              return;
                                            if (!a4.dragging) {
                                              if (6 > Math.hypot(
                                                e11.clientX - a4.x,
                                                e11.clientY - a4.y
                                              ))
                                                return;
                                              let n4 = er(
                                                i2,
                                                e3.current.get(t5.id)
                                              );
                                              if (!n4) return;
                                              a4.dragging = true, eF({
                                                key: ++tn.current,
                                                name: t5.name,
                                                photo: t5.photo,
                                                subject: t5.subject
                                              }), eJ(t5.id), tl.jump(n4.x), td.jump(n4.y), tc.jump(1), tu.jump(0), (0, o.i)(tu, 1, {
                                                duration: A.T.duration.instant
                                              });
                                            }
                                            let n3 = i2.getBoundingClientRect(), r3 = e11.clientX - n3.left - i2.clientLeft - 20, s2 = e11.clientY - n3.top - i2.clientTop - 20;
                                            v2 ? (tl.jump(r3), td.jump(s2)) : ((0, o.i)(
                                              tl,
                                              r3,
                                              A.T.spring.responsive
                                            ), (0, o.i)(
                                              td,
                                              s2,
                                              A.T.spring.responsive
                                            ));
                                            let l2 = null;
                                            for (let [t6, a5] of e4.current) {
                                              let i3 = a5.getBoundingClientRect();
                                              if (e11.clientX >= i3.left && e11.clientX <= i3.right && e11.clientY >= i3.top && e11.clientY <= i3.bottom) {
                                                l2 = t6;
                                                break;
                                              }
                                            }
                                            l2 !== a4.over && (a4.over = l2, eH(l2), window.clearTimeout(
                                              ti.current
                                            ), ("toggle-labels" === l2 || "toggle-more" === l2) && (ti.current = window.setTimeout(
                                              () => ("toggle-labels" === l2 ? eP : eM)(true),
                                              600
                                            )));
                                          })(t4, e10),
                                          onPointerUp: () => (function(e11) {
                                            let t4 = e9.current;
                                            if ((e9.current = null, t4?.dragging) && (te.current = true, window.setTimeout(() => {
                                              te.current = false;
                                            }, 0), !t4.cancelled)) {
                                              let a4;
                                              tI(), null !== (a4 = t4.over) && J.includes(a4) && ei(e11, t4.over) ? tE(e11, t4.over, "drag") : tY(e11.id);
                                            }
                                          })(e10),
                                          onPointerCancel: tO,
                                          onDragStart: (e11) => e11.preventDefault(),
                                          children: [
                                            (0, i.jsx)(c.N, {
                                              initial: false,
                                              children: e10.unread && (0, i.jsx)(
                                                l.PY1.span,
                                                {
                                                  className: D().dot,
                                                  initial: { scale: 0 },
                                                  animate: { scale: 1 },
                                                  exit: { scale: 0 },
                                                  transition: tf
                                                },
                                                "dot"
                                              )
                                            }),
                                            (0, i.jsx)(R.e, {
                                              name: e10.name,
                                              src: e10.photo,
                                              size: "md",
                                              "data-avatar": ""
                                            }),
                                            (0, i.jsxs)("span", {
                                              className: D().rowText,
                                              children: [
                                                (0, i.jsxs)("span", {
                                                  className: D().rowTop,
                                                  children: [
                                                    (0, i.jsxs)("span", {
                                                      className: D().sender,
                                                      children: [n2, e10.name]
                                                    }),
                                                    (0, i.jsx)("span", {
                                                      className: D().rowLabels,
                                                      "aria-hidden": "true",
                                                      children: (0, i.jsx)(
                                                        c.N,
                                                        {
                                                          initial: false,
                                                          children: e10.labels.map(
                                                            (e11) => (0, i.jsx)(
                                                              l.PY1.i,
                                                              {
                                                                className: D().swatch,
                                                                "data-tone": e11,
                                                                initial: {
                                                                  scale: 0
                                                                },
                                                                animate: {
                                                                  scale: 1
                                                                },
                                                                exit: {
                                                                  scale: 0
                                                                },
                                                                transition: tf
                                                              },
                                                              e11
                                                            )
                                                          )
                                                        }
                                                      )
                                                    }),
                                                    (0, i.jsxs)("span", {
                                                      className: D().meta,
                                                      children: [
                                                        (0, i.jsx)(c.N, {
                                                          initial: false,
                                                          children: e10.starred && (0, i.jsx)(
                                                            l.PY1.span,
                                                            {
                                                              className: D().starMark,
                                                              "aria-hidden": "true",
                                                              initial: {
                                                                scale: 0
                                                              },
                                                              animate: {
                                                                scale: 1
                                                              },
                                                              exit: {
                                                                scale: 0
                                                              },
                                                              transition: tf,
                                                              children: (0, i.jsx)(h.A, {
                                                                size: 12,
                                                                strokeWidth: 1.75
                                                              })
                                                            },
                                                            "star"
                                                          )
                                                        }),
                                                        (0, i.jsx)("time", {
                                                          children: e10.time
                                                        })
                                                      ]
                                                    })
                                                  ]
                                                }),
                                                (0, i.jsxs)("span", {
                                                  className: D().line,
                                                  children: [
                                                    (0, i.jsx)("span", {
                                                      className: D().subject,
                                                      children: e10.subject
                                                    }),
                                                    (0, i.jsx)("span", {
                                                      className: D().preview,
                                                      children: e10.preview
                                                    })
                                                  ]
                                                })
                                              ]
                                            }),
                                            r2 && (0, i.jsxs)("span", {
                                              className: D().srOnly,
                                              children: [", ", r2]
                                            })
                                          ]
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: D().actions,
                                          children: [
                                            (0, i.jsx)(z.m, {
                                              content: e10.starred ? "Unstar" : "Star",
                                              children: (0, i.jsx)("button", {
                                                type: "button",
                                                className: D().action,
                                                "aria-label": `Star \u201C${e10.subject}\u201D`,
                                                "aria-pressed": e10.starred,
                                                onClick: () => tD(e10),
                                                children: (0, i.jsx)(h.A, {
                                                  size: 16,
                                                  strokeWidth: 1.75,
                                                  "aria-hidden": "true"
                                                })
                                              })
                                            }),
                                            (0, i.jsx)(z.m, {
                                              content: t3.label,
                                              children: (0, i.jsx)("button", {
                                                type: "button",
                                                className: D().action,
                                                "aria-label": `${t3.label}: \u201C${e10.subject}\u201D`,
                                                onClick: () => tE(e10, t3.to, "row"),
                                                children: (0, i.jsx)(a3, {
                                                  size: 16,
                                                  strokeWidth: 1.75,
                                                  "aria-hidden": "true"
                                                })
                                              })
                                            }),
                                            (0, i.jsxs)(p.bL, {
                                              children: [
                                                (0, i.jsx)(z.m, {
                                                  content: "Move to",
                                                  children: (0, i.jsx)(p.l9, {
                                                    asChild: true,
                                                    children: (0, i.jsx)(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        className: D().action,
                                                        "aria-label": `Move \u201C${e10.subject}\u201D`,
                                                        children: (0, i.jsx)(
                                                          w.A,
                                                          {
                                                            size: 16,
                                                            strokeWidth: 1.75,
                                                            "aria-hidden": "true"
                                                          }
                                                        )
                                                      }
                                                    )
                                                  })
                                                }),
                                                (0, i.jsx)(p.ZL, {
                                                  children: (0, i.jsxs)(
                                                    p.UC,
                                                    {
                                                      className: `${D().menu} ${D().tones}`,
                                                      align: "end",
                                                      sideOffset: 6,
                                                      collisionPadding: 12,
                                                      loop: true,
                                                      onCloseAutoFocus: (e11) => {
                                                        let t4 = tt.current;
                                                        t4 && (e11.preventDefault(), tt.current = null, t4.focus({
                                                          preventScroll: true
                                                        }));
                                                      },
                                                      children: [
                                                        (0, i.jsx)(p.JU, {
                                                          className: D().menuLabel,
                                                          children: "Move to"
                                                        }),
                                                        V.filter(
                                                          (t4) => t4 !== e10.box
                                                        ).map((t4) => {
                                                          let a4 = X.find(
                                                            (e11) => e11.id === t4
                                                          )?.icon ?? g.A;
                                                          return (0, i.jsxs)(
                                                            p.q7,
                                                            {
                                                              className: D().menuItem,
                                                              disabled: !ei(
                                                                e10,
                                                                t4
                                                              ),
                                                              onSelect: () => tE(
                                                                e10,
                                                                t4,
                                                                "menu"
                                                              ),
                                                              children: [
                                                                (0, i.jsx)(
                                                                  a4,
                                                                  {
                                                                    size: 16,
                                                                    strokeWidth: 1.75,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                ),
                                                                (0, i.jsx)(
                                                                  "span",
                                                                  {
                                                                    children: Z(t4)
                                                                  }
                                                                ),
                                                                "starred" === t4 && e10.starred && (0, i.jsx)(
                                                                  T.A,
                                                                  {
                                                                    className: D().menuCheck,
                                                                    size: 15,
                                                                    strokeWidth: 1.75,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                )
                                                              ]
                                                            },
                                                            t4
                                                          );
                                                        }),
                                                        (0, i.jsx)(p.wv, {
                                                          className: D().menuSeparator
                                                        }),
                                                        (0, i.jsx)(p.JU, {
                                                          className: D().menuLabel,
                                                          children: "Label as"
                                                        }),
                                                        K.map(
                                                          (t4) => (0, i.jsxs)(
                                                            p.q7,
                                                            {
                                                              className: D().menuItem,
                                                              disabled: !ei(
                                                                e10,
                                                                t4.id
                                                              ),
                                                              onSelect: () => tE(
                                                                e10,
                                                                t4.id,
                                                                "menu"
                                                              ),
                                                              children: [
                                                                (0, i.jsx)(
                                                                  "i",
                                                                  {
                                                                    className: D().swatch,
                                                                    "data-tone": t4.tone,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                ),
                                                                (0, i.jsx)(
                                                                  "span",
                                                                  {
                                                                    children: t4.label
                                                                  }
                                                                ),
                                                                t4.tone && e10.labels.includes(
                                                                  t4.tone
                                                                ) && (0, i.jsx)(
                                                                  T.A,
                                                                  {
                                                                    className: D().menuCheck,
                                                                    size: 15,
                                                                    strokeWidth: 1.75,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                )
                                                              ]
                                                            },
                                                            t4.id
                                                          )
                                                        )
                                                      ]
                                                    }
                                                  )
                                                })
                                              ]
                                            })
                                          ]
                                        })
                                      ]
                                    },
                                    e10.id
                                  );
                                })
                              })
                            }),
                            (0, i.jsx)(c.N, {
                              initial: false,
                              children: 0 === tp.length && (0, i.jsxs)(
                                l.PY1.div,
                                {
                                  className: D().empty,
                                  initial: { opacity: 0, y: 8 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0 },
                                  transition: v2 ? tx : { ...A.T.spring.smooth, delay: 0.12 },
                                  children: [
                                    (0, i.jsx)(tG, {
                                      size: 24,
                                      strokeWidth: 1.5,
                                      "aria-hidden": "true"
                                    }),
                                    (0, i.jsx)("p", { children: tg[0] }),
                                    (0, i.jsx)("span", { children: tg[1] })
                                  ]
                                },
                                "empty"
                              )
                            })
                          ]
                        },
                        ej
                      )
                    })
                  }),
                  (0, i.jsxs)("div", {
                    className: D().statusBar,
                    children: [
                      (0, i.jsx)("p", {
                        className: D().srOnly,
                        role: "status",
                        "aria-live": "polite",
                        children: eI.text
                      }),
                      (0, i.jsx)("p", {
                        className: D().statusText,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(c.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, i.jsx)(
                            l.PY1.span,
                            { ...v2 ? ed : el, children: eI.text },
                            eI.key
                          )
                        })
                      }),
                      (0, i.jsx)(c.N, {
                        initial: false,
                        children: eO && (0, i.jsx)(
                          l.PY1.div,
                          {
                            ...ed,
                            transition: { duration: A.T.duration.fast },
                            children: (0, i.jsxs)(L.$, {
                              type: "button",
                              variant: "ghost",
                              size: "sm",
                              onClick: function() {
                                eO && (ev(
                                  (e10) => e10.map((e11) => e11.id === eO.id ? eO : e11)
                                ), eW(null), tP(`Restored \u201C${eO.subject}\u201D`), requestAnimationFrame(
                                  () => (e3.current.get(eO.id) ?? e1.current)?.focus({ preventScroll: true })
                                ));
                              },
                              children: [
                                (0, i.jsx)(P.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                "Undo"
                              ]
                            })
                          },
                          "undo"
                        )
                      })
                    ]
                  })
                ]
              }),
              (0, i.jsx)(c.N, {
                children: eR && (0, i.jsx)(
                  l.PY1.div,
                  {
                    ref: e22,
                    layoutId: "compose",
                    className: D().composer,
                    style: { borderRadius: 16 },
                    transition: ty,
                    role: "dialog",
                    "aria-labelledby": `${y2}-compose-title`,
                    onKeyDown: function(e10) {
                      "Escape" === e10.key ? (e10.preventDefault(), tF("save")) : "Enter" === e10.key && (e10.metaKey || e10.ctrlKey) && (e10.preventDefault(), tq());
                    },
                    children: (0, i.jsxs)(l.PY1.form, {
                      layout: "position",
                      className: D().composerForm,
                      noValidate: true,
                      onSubmit: tq,
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.1 * !v2 }
                      },
                      exit: { opacity: 0, transition: { duration: 0.08 } },
                      children: [
                        (0, i.jsxs)("header", {
                          className: D().composerHeader,
                          children: [
                            (0, i.jsx)("h3", {
                              id: `${y2}-compose-title`,
                              children: "New message"
                            }),
                            (0, i.jsx)(z.m, {
                              content: "Save draft and close",
                              children: (0, i.jsx)("button", {
                                type: "button",
                                className: D().action,
                                "aria-label": "Save draft and close",
                                onClick: () => tF("save"),
                                children: (0, i.jsx)($.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            })
                          ]
                        }),
                        (0, i.jsxs)("div", {
                          className: D().field,
                          "data-invalid": eE || void 0,
                          children: [
                            (0, i.jsx)("label", {
                              htmlFor: `${y2}-to`,
                              children: "To"
                            }),
                            (0, i.jsx)("input", {
                              ref: e8,
                              id: `${y2}-to`,
                              value: ez.to,
                              autoComplete: "off",
                              placeholder: "Name or email",
                              "aria-invalid": eE || void 0,
                              "aria-describedby": eE ? `${y2}-to-error` : void 0,
                              onChange: (e10) => {
                                let t3 = e10.target.value;
                                eA((e11) => ({ ...e11, to: t3 })), eD(false);
                              }
                            }),
                            (0, i.jsx)(c.N, {
                              initial: false,
                              children: th && (0, i.jsx)(
                                l.PY1.span,
                                {
                                  className: D().recipient,
                                  initial: { opacity: 0, scale: 0.6 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: { opacity: 0, scale: 0.6 },
                                  transition: tf,
                                  children: (0, i.jsx)(R.e, {
                                    name: th.name,
                                    src: th.photo,
                                    size: "sm"
                                  })
                                },
                                th.name
                              )
                            })
                          ]
                        }),
                        (0, i.jsx)(c.N, {
                          initial: false,
                          children: eE && (0, i.jsx)(
                            l.PY1.p,
                            {
                              id: `${y2}-to-error`,
                              className: D().error,
                              initial: { height: 0, opacity: 0 },
                              animate: { height: "auto", opacity: 1 },
                              exit: { height: 0, opacity: 0 },
                              transition: t_,
                              children: "Add a recipient before sending"
                            },
                            "error"
                          )
                        }),
                        (0, i.jsxs)("div", {
                          className: D().field,
                          children: [
                            (0, i.jsx)("label", {
                              htmlFor: `${y2}-subject`,
                              children: "Subject"
                            }),
                            (0, i.jsx)("input", {
                              id: `${y2}-subject`,
                              value: ez.subject,
                              autoComplete: "off",
                              onChange: (e10) => {
                                let t3 = e10.target.value;
                                eA((e11) => ({ ...e11, subject: t3 }));
                              }
                            })
                          ]
                        }),
                        (0, i.jsx)("textarea", {
                          className: D().body,
                          "aria-label": "Message",
                          placeholder: "Write a message",
                          rows: 6,
                          value: ez.body,
                          onChange: (e10) => {
                            let t3 = e10.target.value;
                            eA((e11) => ({ ...e11, body: t3 }));
                          }
                        }),
                        (0, i.jsxs)("footer", {
                          className: D().composerFooter,
                          children: [
                            (0, i.jsxs)(L.$, {
                              type: "submit",
                              size: "sm",
                              children: [
                                (0, i.jsx)(f.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                "Send"
                              ]
                            }),
                            (0, i.jsx)(L.$, {
                              type: "button",
                              variant: "ghost",
                              size: "sm",
                              onClick: () => tF("discard"),
                              children: "Discard"
                            })
                          ]
                        })
                      ]
                    })
                  },
                  "composer"
                )
              }),
              eB && (0, i.jsxs)(
                l.PY1.div,
                {
                  className: D().ghost,
                  style: {
                    x: tl,
                    y: td,
                    scale: tc,
                    opacity: tu,
                    originX: 0,
                    originY: 0.5
                  },
                  "aria-hidden": "true",
                  children: [
                    (0, i.jsx)(R.e, {
                      name: eB.name,
                      src: eB.photo,
                      size: "sm"
                    }),
                    (0, i.jsx)("span", { children: eB.subject })
                  ]
                },
                eB.key
              )
            ]
          })
        })
      })
    });
  }
  let eb = em;
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
A.reg(59680, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "ellipsis",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
      ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
    ],
    aliases: ["more-horizontal"]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(61665, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "inbox",
    size: 24,
    node: [
      [
        "polyline",
        { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }
      ],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          key: "oot6mr"
        }
      ]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(69203, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var s = a(51811);
  let n = {
    name: "shield-alert",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "M12 8v4", key: "1got3b" }],
      ["path", { d: "M12 16h.01", key: "1drbdi" }]
    ]
  };
  n.node;
  let i = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(69618, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "square-pen",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
          key: "1m0v6g"
        }
      ],
      [
        "path",
        {
          d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
          key: "ohrbg2"
        }
      ]
    ],
    aliases: ["pen-box", "edit", "pen-square"]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(75796, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "mail",
    size: 24,
    node: [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(95697, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var n = a(51811);
  let r = {
    name: "star",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
          key: "r04s7s"
        }
      ]
    ]
  };
  r.node;
  let i = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.cssFor("inbox-sidebar", [1568]);
A.item("inbox-sidebar", {entry:56512, export:"InboxSidebar", kind:"block", tier:"pro", unresolved:[]});
})();