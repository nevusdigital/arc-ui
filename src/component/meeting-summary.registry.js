/* meeting-summary (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(46178, ".meeting-summary_root__7BVPJ{--ms-row-pad:8px;container-type:inline-size;position:relative;width:100%;max-width:640px;min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:14px;font-weight:400;line-height:22px;letter-spacing:var(--tracking-body)}.meeting-summary_srOnly__p7SPi{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.meeting-summary_dot__bk6kN{display:inline-block;flex:none;width:3px;height:3px;border-radius:50%;background:currentColor;opacity:.55}.meeting-summary_header__mMmca{display:grid;grid-template-columns:20px minmax(0,1fr) auto;grid-template-areas:\"mark heading stack\";column-gap:12px;align-items:start;padding:18px 20px 16px;border-bottom:1px solid var(--border-subtle)}.meeting-summary_platform__bssU9{display:grid;grid-area:mark;height:22px;place-items:center}.meeting-summary_platform__bssU9 svg{display:block}.meeting-summary_heading__yt3LS{grid-area:heading;min-width:0}.meeting-summary_title__u2ZiO{margin:0;color:var(--foreground);font-size:15px;font-weight:500;line-height:22px;letter-spacing:-.01em;text-wrap:balance}.meeting-summary_when__TVizG{display:flex;flex-wrap:wrap;align-items:center;column-gap:8px;margin:2px 0 0;color:var(--text-secondary);font-size:13px;line-height:20px}.meeting-summary_stack__cfTkG{display:inline-flex;grid-area:stack;align-items:center;align-self:center;border-radius:var(--radius-control);padding:2px;margin:-2px}.meeting-summary_stackFaces__w2Mu_{display:inline-flex}.meeting-summary_face__NXERi.meeting-summary_face__NXERi{width:26px;height:26px;box-shadow:0 0 0 2px var(--surface)}.meeting-summary_face__NXERi+.meeting-summary_face__NXERi{margin-left:-6px}.meeting-summary_more__KsQ0x{margin-left:8px;color:var(--text-muted);font-size:12px;line-height:18px;font-variant-numeric:tabular-nums}.meeting-summary_bodyOuter__QhwUz{min-width:0}.meeting-summary_body__Kl4ck{position:relative}.meeting-summary_loading__FuGqI{display:flex;min-height:58px;align-items:center;gap:10px;padding:18px 20px;color:var(--text-muted)}.meeting-summary_loadingLabel__hUKyH{color:var(--text-secondary);font-size:14px;line-height:22px}.meeting-summary_notes__DkleD{display:grid;gap:18px;padding:16px 20px 12px}.meeting-summary_section__e_yUT{display:grid;gap:4px;min-width:0}.meeting-summary_sectionHead__l0lF5{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.meeting-summary_sectionTitle__LfcEe{margin:0;color:var(--foreground);font-size:13px;font-weight:500;line-height:20px}.meeting-summary_progress___za9f{display:inline-flex;align-items:baseline;gap:.3em;color:var(--text-muted);font-size:12px;line-height:20px;white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-standard),visibility 0s}.meeting-summary_count__J55EG{position:relative;display:inline-flex;min-width:1ch;justify-content:flex-end;font-variant-numeric:tabular-nums}.meeting-summary_list__U1um0{display:grid;margin:0 calc(var(--ms-row-pad) * -1);padding:0;list-style:none}.meeting-summary_point__IDhKf{--ms-quote-left:34px;position:relative;display:grid;grid-template-columns:16px minmax(0,1fr) auto;column-gap:10px;padding:5px var(--ms-row-pad);border-radius:12px;transition:background-color var(--duration-fast) var(--ease-standard)}.meeting-summary_point__IDhKf[data-active]{background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}@media (hover:hover) and (pointer:fine){.meeting-summary_point__IDhKf:hover{background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}}@media (hover:hover) and (pointer:fine){.meeting-summary_point__IDhKf:hover .meeting-summary_timestamp__qfUqu{color:var(--text-secondary)}}.meeting-summary_marker__qwnNM{display:grid;height:22px;place-items:center;color:var(--text-muted)}.meeting-summary_bullet__JfscN{width:5px;height:5px;border-radius:50%;background:currentColor}.meeting-summary_pointText__8R3Th{min-width:0;color:var(--foreground);text-wrap:pretty}.meeting-summary_pointAside__qdobV{display:flex;height:22px;align-items:center;transition:opacity var(--duration-fast) var(--ease-standard),visibility 0s}.meeting-summary_timestamp__qfUqu{flex:none;height:22px;margin:0 -4px 0 0;border:0;border-radius:7px;padding:0 6px;background:transparent;color:var(--text-muted);font:inherit;font-size:12px;line-height:22px;font-variant-numeric:tabular-nums;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.meeting-summary_timestamp__qfUqu[aria-expanded=true]{background:var(--surface-muted);color:var(--foreground)}@media (hover:hover) and (pointer:fine){.meeting-summary_timestamp__qfUqu:hover{background:var(--surface-muted);color:var(--foreground)}}.meeting-summary_quote__gdrS1{position:absolute;z-index:20;top:calc(100% + 4px);left:var(--ms-quote-left);right:var(--ms-row-pad);max-width:440px;border:1px solid var(--border);border-radius:14px;padding:10px 12px 11px;background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:none}.meeting-summary_quote__gdrS1[data-above]{top:auto;bottom:calc(100% + 4px)}.meeting-summary_quoteHead__fBMRS{display:flex;align-items:center;gap:8px;min-width:0}.meeting-summary_quoteAvatar__nMRFq.meeting-summary_quoteAvatar__nMRFq{width:20px;height:20px;font-size:9px}.meeting-summary_quoteName__LQDLC{min-width:0;overflow:hidden;color:var(--foreground);font-size:13px;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}.meeting-summary_quoteTime__jeuqn{margin-left:auto;color:var(--text-muted);font-size:12px;line-height:20px;font-variant-numeric:tabular-nums}.meeting-summary_quoteText__jYAmE{margin:6px 0 0;color:var(--text-secondary);font-size:13px;line-height:20px;text-wrap:pretty}.meeting-summary_item__M8Ux0{--ms-quote-left:34px;position:relative;display:grid;grid-template-columns:16px minmax(0,1fr);column-gap:10px;padding:6px var(--ms-row-pad);border-radius:12px}.meeting-summary_checkCell__hnHS9{display:flex;height:22px;align-items:center;justify-content:center}.meeting-summary_checkbox__nsjLn{position:relative;display:block;flex:none;width:16px;height:16px;box-sizing:border-box;margin:0;border:1px solid var(--border-strong);border-radius:5px;padding:0;background:var(--surface);color:var(--control-glyph);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-fast) var(--ease-standard),transform .16s cubic-bezier(.22,1,.36,1)}.meeting-summary_checkbox__nsjLn:before{position:absolute;inset:-9px;border-radius:10px;content:\"\"}.meeting-summary_checkbox__nsjLn[data-checked]{border-color:var(--control-on)}.meeting-summary_checkFill__OBIzt{position:absolute;inset:-1px;border-radius:inherit;background:var(--control-on)}.meeting-summary_checkMark__fXH15{position:absolute;inset:-1px;display:block;width:16px;height:16px;overflow:visible}@media (hover:hover) and (pointer:fine){.meeting-summary_checkbox__nsjLn:not([data-checked]):hover{border-color:var(--text-muted)}}.meeting-summary_checkbox__nsjLn:active{transform:scale(.9);transition:border-color var(--duration-fast) var(--ease-standard),transform .08s ease-out}.meeting-summary_itemBody__tLWp_{min-width:0}.meeting-summary_itemText__gXxUH{display:block;color:var(--foreground);text-wrap:pretty;transition:color .2s var(--ease-standard)}.meeting-summary_strike__XPe4M{background:linear-gradient(currentColor,currentColor) no-repeat 0 58% /0 1px;transition:background-size .16s cubic-bezier(.22,1,.36,1)}.meeting-summary_item__M8Ux0[data-done] .meeting-summary_due__cEm6s,.meeting-summary_item__M8Ux0[data-done] .meeting-summary_itemText__gXxUH,.meeting-summary_item__M8Ux0[data-done] .meeting-summary_owner__Mj5T9{color:var(--text-muted)}.meeting-summary_due__cEm6s,.meeting-summary_owner__Mj5T9{transition:color .2s var(--ease-standard)}.meeting-summary_item__M8Ux0[data-done] .meeting-summary_strike__XPe4M{background-size:100% 1px;transition-duration:.28s}.meeting-summary_meta__YA2G1{display:flex;min-height:28px;flex-wrap:wrap;align-items:center;column-gap:12px;row-gap:2px;margin-top:2px;color:var(--text-secondary);font-size:12px;line-height:18px;transition:opacity var(--duration-fast) var(--ease-standard),visibility 0s}.meeting-summary_owner__Mj5T9{display:inline-flex;min-width:0;align-items:center;gap:6px;white-space:nowrap}.meeting-summary_ownerAvatar__J3zBG.meeting-summary_ownerAvatar__J3zBG{width:18px;height:18px;font-size:8px}.meeting-summary_ownerShort__G_OiP{display:none}.meeting-summary_due__cEm6s{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}.meeting-summary_due__cEm6s svg{color:var(--text-muted)}.meeting-summary_metaQuote__5ziA0{display:inline-flex;margin-left:-6px}.meeting-summary_metaQuote__5ziA0 .meeting-summary_timestamp__qfUqu{margin:0}.meeting-summary_sendGroup__8GzOY{display:inline-flex;align-items:center;gap:2px;margin:0 -4px 0 auto}.meeting-summary_sizer__3qtMJ{display:inline-flex}.meeting-summary_sizerInner__sMKi6{position:relative;display:inline-flex;width:max-content}.meeting-summary_sentWrap__GT2yu{display:inline-flex}.meeting-summary_iconButton__MSscH.meeting-summary_iconButton__MSscH{width:28px;height:28px;min-height:28px;gap:0;padding:0}.meeting-summary_iconSwap__xzdU3{position:relative;display:grid;width:14px;height:14px;place-items:center}.meeting-summary_iconSlot__2C0N5{display:grid;place-items:center;color:var(--foreground)}.meeting-summary_iconSlot__2C0N5 svg{display:block}.meeting-summary_iconSlot__2C0N5[data-view=sending]{color:var(--text-muted)}.meeting-summary_iconSlot__2C0N5[data-view=failed]{color:var(--danger)}.meeting-summary_sent__COgej{display:inline-flex;height:28px;align-items:center;gap:6px;border:1px solid var(--border);border-radius:var(--radius-control);padding:0 10px 0 8px;background:var(--surface);color:var(--foreground);font-size:12px;line-height:18px;text-decoration:none;white-space:nowrap;transition:background-color var(--duration-fast) var(--ease-standard)}.meeting-summary_sent__COgej svg{display:block;flex:none}.meeting-summary_sentCheck__Sdz2_{color:var(--success)}@media (hover:hover) and (pointer:fine){a.meeting-summary_sent__COgej:hover{background:var(--surface-muted)}}.meeting-summary_state__gHcox{display:grid;grid-template-columns:16px minmax(0,1fr);column-gap:12px;padding:18px 20px 20px}.meeting-summary_stateIcon__6QX5E{display:grid;height:22px;place-items:center;color:var(--text-muted)}.meeting-summary_stateDanger__4ULWF{color:var(--danger)}.meeting-summary_stateCopy__Q1PoH{min-width:0}.meeting-summary_stateTitle__s1GXk{margin:0;color:var(--foreground);font-size:14px;font-weight:500;line-height:22px}.meeting-summary_stateText__sYreu{margin:2px 0 0;color:var(--text-secondary);font-size:13px;line-height:20px;text-wrap:pretty}.meeting-summary_retry__VDiSW.meeting-summary_retry__VDiSW{margin-top:12px}.meeting-summary_footer__Waa2J{display:flex;min-height:48px;align-items:center;justify-content:space-between;gap:12px;padding:8px 12px 8px 20px;border-top:1px solid var(--border-subtle)}.meeting-summary_credit__X3jnw{display:flex;min-width:0;align-items:center;gap:8px;margin:0;color:var(--text-muted);font-size:12px;line-height:18px;white-space:nowrap}.meeting-summary_modelIcon__0m84j{display:grid;place-items:center}.meeting-summary_modelIcon__0m84j svg{display:block}.meeting-summary_modelName__HZdJ_{overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis}.meeting-summary_tools__HyEzm{display:flex;flex:none;align-items:center;gap:2px}.meeting-summary_hidden__QrCES{visibility:hidden;opacity:0;transition:none}.meeting-summary_enter__G77sP{animation:meeting-summary_ms-in__yY57Z .16s cubic-bezier(.22,1,.36,1) both}.meeting-summary_chunk__SI6Wq{animation:meeting-summary_ms-in__yY57Z .14s ease-out both}.meeting-summary_spinner__Dp4rQ{flex:none;animation:meeting-summary_ms-spin__WTNZG .8s linear infinite}@keyframes meeting-summary_ms-in__yY57Z{0%{opacity:0}}@keyframes meeting-summary_ms-spin__WTNZG{to{transform:rotate(1turn)}}@media (prefers-reduced-motion:reduce){.meeting-summary_chunk__SI6Wq,.meeting-summary_enter__G77sP{animation:none}}@media (prefers-reduced-motion:reduce){.meeting-summary_checkbox__nsjLn,.meeting-summary_checkbox__nsjLn:active,.meeting-summary_itemText__gXxUH,.meeting-summary_strike__XPe4M{transition:none}}@media (prefers-reduced-motion:reduce){.meeting-summary_checkbox__nsjLn:active{transform:none}}@media (prefers-reduced-motion:reduce){.meeting-summary_spinner__Dp4rQ{animation-duration:1.6s}}", {"root":"meeting-summary_root__7BVPJ","srOnly":"meeting-summary_srOnly__p7SPi","dot":"meeting-summary_dot__bk6kN","header":"meeting-summary_header__mMmca","platform":"meeting-summary_platform__bssU9","heading":"meeting-summary_heading__yt3LS","title":"meeting-summary_title__u2ZiO","when":"meeting-summary_when__TVizG","stack":"meeting-summary_stack__cfTkG","stackFaces":"meeting-summary_stackFaces__w2Mu_","face":"meeting-summary_face__NXERi","more":"meeting-summary_more__KsQ0x","bodyOuter":"meeting-summary_bodyOuter__QhwUz","body":"meeting-summary_body__Kl4ck","loading":"meeting-summary_loading__FuGqI","loadingLabel":"meeting-summary_loadingLabel__hUKyH","notes":"meeting-summary_notes__DkleD","section":"meeting-summary_section__e_yUT","sectionHead":"meeting-summary_sectionHead__l0lF5","sectionTitle":"meeting-summary_sectionTitle__LfcEe","progress":"meeting-summary_progress___za9f","count":"meeting-summary_count__J55EG","list":"meeting-summary_list__U1um0","point":"meeting-summary_point__IDhKf","timestamp":"meeting-summary_timestamp__qfUqu","marker":"meeting-summary_marker__qwnNM","bullet":"meeting-summary_bullet__JfscN","pointText":"meeting-summary_pointText__8R3Th","pointAside":"meeting-summary_pointAside__qdobV","quote":"meeting-summary_quote__gdrS1","quoteHead":"meeting-summary_quoteHead__fBMRS","quoteAvatar":"meeting-summary_quoteAvatar__nMRFq","quoteName":"meeting-summary_quoteName__LQDLC","quoteTime":"meeting-summary_quoteTime__jeuqn","quoteText":"meeting-summary_quoteText__jYAmE","item":"meeting-summary_item__M8Ux0","checkCell":"meeting-summary_checkCell__hnHS9","checkbox":"meeting-summary_checkbox__nsjLn","checkFill":"meeting-summary_checkFill__OBIzt","checkMark":"meeting-summary_checkMark__fXH15","itemBody":"meeting-summary_itemBody__tLWp_","itemText":"meeting-summary_itemText__gXxUH","strike":"meeting-summary_strike__XPe4M","owner":"meeting-summary_owner__Mj5T9","due":"meeting-summary_due__cEm6s","meta":"meeting-summary_meta__YA2G1","ownerAvatar":"meeting-summary_ownerAvatar__J3zBG","ownerShort":"meeting-summary_ownerShort__G_OiP","ownerFull":"meeting-summary_ownerFull__4y9vM","metaQuote":"meeting-summary_metaQuote__5ziA0","sendGroup":"meeting-summary_sendGroup__8GzOY","sizer":"meeting-summary_sizer__3qtMJ","sizerInner":"meeting-summary_sizerInner__sMKi6","sentWrap":"meeting-summary_sentWrap__GT2yu","iconButton":"meeting-summary_iconButton__MSscH","iconSwap":"meeting-summary_iconSwap__xzdU3","iconSlot":"meeting-summary_iconSlot__2C0N5","sent":"meeting-summary_sent__COgej","sentCheck":"meeting-summary_sentCheck__Sdz2_","sentRef":"meeting-summary_sentRef__LXjP8","state":"meeting-summary_state__gHcox","stateIcon":"meeting-summary_stateIcon__6QX5E","stateDanger":"meeting-summary_stateDanger__4ULWF","stateCopy":"meeting-summary_stateCopy__Q1PoH","stateTitle":"meeting-summary_stateTitle__s1GXk","stateText":"meeting-summary_stateText__sYreu","retry":"meeting-summary_retry__VDiSW","footer":"meeting-summary_footer__Waa2J","credit":"meeting-summary_credit__X3jnw","modelIcon":"meeting-summary_modelIcon__0m84j","modelName":"meeting-summary_modelName__HZdJ_","tools":"meeting-summary_tools__HyEzm","hidden":"meeting-summary_hidden__QrCES","enter":"meeting-summary_enter__G77sP","ms-in":"meeting-summary_ms-in__yY57Z","chunk":"meeting-summary_chunk__SI6Wq","spinner":"meeting-summary_spinner__Dp4rQ","ms-spin":"meeting-summary_ms-spin__WTNZG"});
A.reg(48272, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var a = i(51811);
  let n = {
    name: "mic-off",
    size: 24,
    node: [
      ["path", { d: "M12 19v3", key: "npa21l" }],
      ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
      ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
      ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
    ]
  };
  n.node;
  let r = (0, a.A)(n);
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
A.regCss(73536, ".demo{display:flex;width:100%;flex-direction:column;align-items:center;gap:20px}\n.stage{display:flex;width:100%;justify-content:center}", {"demo":"demo","stage":"stage"});
A.reg(91032, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { MeetingSummaryDemo: () => es, default: () => eo });
  var n = a(95155), i = a(12115), r = a(92171), s = a(25354), o = a(80642), l = a(18310), d = a(64577), c = a(35484), u = a(92298), m = a(48272), h = a(52427), p = a(92218), g = a(51288), f = a(73474), y = a(52898), x = a(36690), _ = a(67752);
  let v = {
    title: "Annual billing launch review",
    platform: "google-meet",
    startsAt: "2026-10-27T10:00",
    durationMinutes: 42,
    transcriptWords: 6214,
    attendees: [
      {
        id: "diane",
        name: "Diane Foster",
        avatar: (0, _.my)("diane-foster")
      },
      { id: "nathan", name: "Nathan Cole", avatar: (0, _.my)("nathan-cole") },
      {
        id: "jasmine",
        name: "Jasmine Brooks",
        avatar: (0, _.my)("jasmine-brooks")
      },
      {
        id: "marcus",
        name: "Marcus Johnson",
        avatar: (0, _.my)("marcus-johnson")
      },
      {
        id: "andre",
        name: "Andre Williams",
        avatar: (0, _.my)("andre-williams")
      },
      {
        id: "chloe",
        name: "Chloe Nguyen",
        avatar: (0, _.my)("chloe-nguyen")
      },
      { id: "ava", name: "Ava Mitchell", avatar: (0, _.my)("ava-mitchell") }
    ],
    summary: [
      {
        id: "s1",
        text: "Annual plans converted at 31% in the pricing test, against 22% for monthly, with trial starts flat.",
        quote: {
          speakerId: "chloe",
          at: 252,
          text: "Across 11,400 visitors the annual arm converts at 31 percent. Trial starts are flat, so we're not scaring anyone off."
        }
      },
      {
        id: "s2",
        text: "Annual churn can't be read until next year, so 60-day refunds will stand in as the signal.",
        quote: {
          speakerId: "andre",
          at: 698,
          text: "We won't see real annual churn until next October. Refunds in the first 60 days are the best proxy we have."
        }
      },
      {
        id: "s3",
        text: "The new billing toggle tested well, but the savings label read like a coupon on mobile.",
        quote: {
          speakerId: "jasmine",
          at: 1085,
          text: "Four of the six people on mobile read 'save 20%' as a coupon code, not as the annual discount."
        }
      },
      {
        id: "s4",
        text: "Engineering can ship behind the pricing-v3 flag by November 4 if price IDs land this week.",
        quote: {
          speakerId: "nathan",
          at: 1607,
          text: "If finance gets us the new price IDs by Friday, Marcus can have it behind the flag by the fourth."
        }
      }
    ],
    decisions: [
      {
        id: "d1",
        text: "Launch annual billing at 20% off, worded as two months free.",
        quote: {
          speakerId: "diane",
          at: 1880,
          text: "Let's go with two months free. Same discount, and nobody reads it as a coupon."
        }
      },
      {
        id: "d2",
        text: "Roll out to half of new visitors first, then everyone after two clean weeks.",
        quote: {
          speakerId: "diane",
          at: 2042,
          text: "Fifty percent of new traffic first. If refunds look normal for two weeks, we open it up."
        }
      },
      {
        id: "d3",
        text: "Existing monthly customers get an in-app offer instead of an email blast.",
        quote: {
          speakerId: "ava",
          at: 2235,
          text: "An in-app banner on the billing page will convert better than another email, and it's easier to target."
        }
      }
    ],
    actionItems: [
      {
        id: "a1",
        text: "Create annual price IDs in Stripe for all three tiers",
        ownerId: "andre",
        due: "2026-10-30",
        quote: {
          speakerId: "andre",
          at: 1652,
          text: "I'll set up the three annual prices in Stripe and send the IDs over by Friday."
        }
      },
      {
        id: "a2",
        text: "Ship the billing toggle behind the pricing-v3 flag",
        ownerId: "marcus",
        due: "2026-11-04",
        quote: {
          speakerId: "marcus",
          at: 1694,
          text: "Once I have the IDs it's a day of work. I'll keep it behind pricing-v3 until we flip it."
        }
      },
      {
        id: "a3",
        text: "Rewrite the savings label as two months free on mobile",
        ownerId: "jasmine",
        due: "2026-10-29",
        quote: {
          speakerId: "jasmine",
          at: 1931,
          text: "I'll update the label in the toggle and the mobile sheet today or tomorrow."
        }
      },
      {
        id: "a4",
        text: "Build a 60-day refund dashboard for annual plans",
        ownerId: "chloe",
        due: "2026-11-06",
        quote: {
          speakerId: "chloe",
          at: 2310,
          text: "I can have a refund view for annual cohorts in Metabase by next Friday."
        }
      }
    ]
  }, w = {
    ...v,
    transcriptWords: 0,
    summary: [],
    decisions: [],
    actionItems: []
  };
  function j({ title: e2 = "Google Meet", ...t2 }) {
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("path", { fill: "#EA4335", d: "M5.53 2.13 0 7.75h5.53z" }),
        (0, n.jsx)("path", {
          fill: "#FFBA00",
          d: "M5.928 2.13v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36z"
        }),
        (0, n.jsx)("path", {
          fill: "#00832D",
          d: "M23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825z"
        }),
        (0, n.jsx)("path", { fill: "#2684FC", d: "M.038 8.15v7.7h5.53v-7.7z" }),
        (0, n.jsx)("path", {
          fill: "#00AC47",
          d: "M13.615 16.25H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65z"
        }),
        (0, n.jsx)("path", {
          fill: "#0066DA",
          d: "M.038 16.25c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"
        })
      ]
    });
  }
  function b({ title: e2 = "Zoom", ...t2 }) {
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("rect", {
          width: "24",
          height: "24",
          rx: "6.5",
          fill: "#0B5CFF"
        }),
        (0, n.jsx)("rect", {
          x: "4.6",
          y: "7.6",
          width: "10.4",
          height: "8.8",
          rx: "2.2",
          fill: "#fff"
        }),
        (0, n.jsx)("path", {
          fill: "#fff",
          d: "m16.1 10.7 2.55-1.86c.42-.3.85-.08.85.44v5.44c0 .52-.43.74-.85.44l-2.55-1.86z"
        })
      ]
    });
  }
  function k({ title: e2 = "Linear", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        fill: "#5E6AD2",
        d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
      })
    });
  }
  function N({ title: e2 = "Notion", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
      })
    });
  }
  var T = a(46178), A = a.n(T);
  let M = (...e2) => e2.filter(Boolean).join(" "), $ = {
    name: "Claude Sonnet 5.5",
    icon: (0, n.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#D97757",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      { width: 14, height: 14, "aria-hidden": "true" }
    )
  }, S = ["linear", "notion"], z = { linear: "Linear", notion: "Notion" }, C = { "google-meet": "Google Meet", zoom: "Zoom", other: "Meeting" }, I = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], L = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], E = [4, 6, 3, 5, 7, 4, 5, 8, 3, 6], q = { type: "spring", visualDuration: 0.24, bounce: 0 }, R = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }, W = { duration: 0.1, ease: [0.22, 1, 0.36, 1] }, D = [0.22, 1, 0.36, 1], O = (e2) => String(e2).padStart(2, "0");
  function P(e2) {
    let t2 = Math.max(0, Math.round(e2)), a2 = Math.floor(t2 / 3600), n2 = Math.floor(t2 % 3600 / 60);
    return a2 ? `${a2}:${O(n2)}:${O(t2 % 60)}` : `${O(n2)}:${O(t2 % 60)}`;
  }
  function F(e2) {
    let [, t2, a2] = e2.split("-").map(Number);
    return t2 && a2 ? `${I[t2 - 1]} ${a2}` : e2;
  }
  function B(e2, t2) {
    let [a2, n2 = "00:00"] = e2.split("T"), [i2, r2, s2] = a2.split("-").map(Number), [o2, l2] = n2.split(":").map(Number), d2 = L[new Date(Date.UTC(i2, r2 - 1, s2)).getUTCDay()], c2 = (60 * o2 + l2 + t2) % 1440;
    return {
      day: `${d2}, ${I[r2 - 1]} ${s2}`,
      range: `${O(o2)}:${O(l2)} to ${O(Math.floor(c2 / 60))}:${O(c2 % 60)}`
    };
  }
  function Y(e2, t2) {
    let a2 = (0, i.useRef)(null), n2 = (0, i.useRef)(null);
    return (0, i.useEffect)(() => {
      let i2, s2 = a2.current, o2 = n2.current;
      if (!s2 || !o2 || "u" < typeof ResizeObserver) return;
      let l2 = () => "height" === e2 ? o2.offsetHeight : o2.offsetWidth, d2 = () => "height" === e2 ? o2.offsetWidth : o2.offsetHeight, c2 = l2(), u2 = d2(), m2 = () => {
        s2.style[e2] = "", s2.style.overflow = "", i2 = void 0;
      }, h2 = new ResizeObserver(() => {
        let a3 = l2(), n3 = d2(), o3 = "height" === e2 && n3 !== u2;
        if (u2 = n3, a3 === c2) return;
        let h3 = i2 ? s2.getBoundingClientRect()[e2] : c2;
        (c2 = a3, i2?.stop(), t2 || o3) ? m2() : (s2.style.overflow = "hidden", i2 = (0, r.i)(s2, { [e2]: [h3, a3] }, { ...q, onComplete: m2 }));
      });
      return h2.observe(o2), () => {
        h2.disconnect(), i2?.stop();
      };
    }, [e2, t2]), { outer: a2, inner: n2 };
  }
  function G({ size: e2 = 14 }) {
    return (0, n.jsxs)("svg", {
      className: A().spinner,
      width: e2,
      height: e2,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, n.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".2",
          strokeWidth: "1.75"
        }),
        (0, n.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function H({ checked: e2, onCheckedChange: t2, label: a2, reduced: i2 }) {
    let r2 = { duration: 0 };
    return (0, n.jsxs)("button", {
      type: "button",
      role: "checkbox",
      "aria-checked": e2,
      "aria-label": a2,
      className: A().checkbox,
      "data-checked": e2 || void 0,
      onClick: () => t2(!e2),
      children: [
        (0, n.jsx)(s.PY1.span, {
          className: A().checkFill,
          "aria-hidden": "true",
          initial: false,
          animate: { opacity: +!!e2, scale: e2 ? 1 : 0.6 },
          transition: i2 ? r2 : { duration: e2 ? 0.16 : 0.12, ease: D }
        }),
        (0, n.jsx)("svg", {
          className: A().checkMark,
          viewBox: "0 0 16 16",
          fill: "none",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, n.jsx)(s.PY1.path, {
            d: "M4.25 8.25 L6.75 10.75 L11.75 5.5",
            stroke: "currentColor",
            strokeWidth: 1.75,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: false,
            animate: { pathLength: +!!e2, opacity: +!!e2 },
            transition: i2 ? r2 : {
              pathLength: {
                duration: e2 ? 0.2 : 0.1,
                delay: 0.04 * !!e2,
                ease: D
              },
              opacity: { duration: e2 ? 0.04 : 0.1, delay: 0.04 * !!e2 }
            }
          })
        })
      ]
    });
  }
  function J({ platform: e2 }) {
    return "google-meet" === e2 ? (0, n.jsx)(j, { width: 20, height: 20 }) : "zoom" === e2 ? (0, n.jsx)(b, { width: 20, height: 20 }) : null;
  }
  function U({ target: e2, size: t2 = 14 }) {
    return "linear" === e2 ? (0, n.jsx)(k, { width: t2, height: t2, "aria-hidden": "true" }) : (0, n.jsx)(N, { width: t2, height: t2, "aria-hidden": "true" });
  }
  function V({ value: e2, reduced: t2 }) {
    return (0, n.jsx)("span", {
      className: A().count,
      children: (0, n.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: (0, n.jsx)(
          s.PY1.span,
          {
            initial: !t2 && { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0, transition: R },
            exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -2, transition: W },
            children: e2
          },
          e2
        )
      })
    });
  }
  function Z({ text: e2, chunks: t2, tick: a2 }) {
    return null !== a2 && t2 ? (0, n.jsx)(n.Fragment, {
      children: t2.filter((e3) => e3.tick <= a2).map(
        (e3, t3) => (0, n.jsx)("span", { className: A().chunk, children: e3.text }, t3)
      )
    }) : (0, n.jsx)(n.Fragment, { children: e2 });
  }
  function K({ id: e2, quote: t2, speaker: a2 }) {
    let r2 = (0, i.useRef)(null), [o2, l2] = (0, i.useState)(false);
    return (0, i.useLayoutEffect)(() => {
      let e3 = r2.current;
      e3 && e3.getBoundingClientRect().bottom > window.innerHeight - 12 && l2(true);
    }, []), (0, n.jsxs)(s.PY1.div, {
      ref: r2,
      id: e2,
      role: "tooltip",
      className: A().quote,
      "data-above": o2 || void 0,
      initial: { opacity: 0, y: o2 ? 3 : -3 },
      animate: { opacity: 1, y: 0, transition: R },
      exit: { opacity: 0, transition: W },
      children: [
        (0, n.jsxs)("div", {
          className: A().quoteHead,
          children: [
            a2 ? (0, n.jsx)(p.e, {
              name: a2.name,
              src: a2.avatar,
              size: "sm",
              className: A().quoteAvatar
            }) : null,
            (0, n.jsx)("span", {
              className: A().quoteName,
              children: a2?.name ?? "Speaker"
            }),
            (0, n.jsx)("span", {
              className: A().quoteTime,
              children: P(t2.at)
            })
          ]
        }),
        (0, n.jsxs)("p", {
          className: A().quoteText,
          children: ["\u201C", t2.text, "\u201D"]
        })
      ]
    });
  }
  function X({ id: e2, quote: t2, control: a2, quoteId: i2 }) {
    let r2 = a2.active === e2;
    return (0, n.jsx)("button", {
      type: "button",
      className: A().timestamp,
      "aria-label": `Transcript quote at ${P(t2.at)}`,
      "aria-expanded": r2,
      "aria-describedby": r2 ? i2 : void 0,
      onFocus: (t3) => {
        t3.currentTarget.matches(":focus-visible") && a2.focus(e2);
      },
      onBlur: a2.leave,
      onClick: () => a2.toggle(e2),
      children: P(t2.at)
    });
  }
  function Q({ item: e2, target: t2, state: a2, onSend: i2, reduced: r2 }) {
    let l2, { outer: u2, inner: m2 } = Y("width", r2), h2 = z[t2], p2 = a2?.status ?? "idle", f2 = {
      initial: !r2 && { opacity: 0 },
      animate: { opacity: 1, transition: R },
      exit: { opacity: 0, transition: r2 ? { duration: 0 } : W }
    };
    if ("sent" === p2) {
      let e3 = a2?.result?.reference ?? ("linear" === t2 ? "Created" : "Added"), i3 = `Sent to ${h2}${a2?.result?.reference ? ` as ${a2.result.reference}` : ""}`, r3 = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(U, { target: t2 }),
          (0, n.jsx)("span", { className: A().sentRef, children: e3 }),
          (0, n.jsx)(d.A, {
            className: A().sentCheck,
            size: 12,
            strokeWidth: 2.25,
            "aria-hidden": "true"
          })
        ]
      });
      l2 = (0, n.jsx)(
        s.PY1.span,
        {
          className: A().sentWrap,
          ...f2,
          children: a2?.result?.url ? (0, n.jsx)("a", {
            className: A().sent,
            href: a2.result.url,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": `${i3}, open in ${h2}`,
            children: r3
          }) : (0, n.jsx)("span", {
            className: A().sent,
            role: "status",
            "aria-label": i3,
            children: r3
          })
        },
        "sent"
      );
    } else {
      let a3 = "failed" === p2 ? `Couldn't send to ${h2}. Retry` : "sending" === p2 ? `Sending to ${h2}` : `Send to ${h2}`;
      l2 = (0, n.jsx)(
        s.PY1.span,
        {
          className: A().sentWrap,
          ...f2,
          children: (0, n.jsx)(x.m, {
            content: a3,
            children: (0, n.jsx)(g.$, {
              variant: "ghost",
              size: "sm",
              className: A().iconButton,
              "aria-label": `${a3}: ${e2.text}`,
              "aria-busy": "sending" === p2 || void 0,
              "data-view": p2,
              onClick: () => {
                "sending" !== p2 && i2();
              },
              children: (0, n.jsx)("span", {
                className: A().iconSwap,
                children: (0, n.jsx)(o.N, {
                  initial: false,
                  mode: "popLayout",
                  children: (0, n.jsx)(
                    s.PY1.span,
                    {
                      className: A().iconSlot,
                      "data-view": p2,
                      ...f2,
                      children: "sending" === p2 ? (0, n.jsx)(G, { size: 14 }) : "failed" === p2 ? (0, n.jsx)(c.A, {
                        size: 14,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      }) : (0, n.jsx)(U, { target: t2 })
                    },
                    p2
                  )
                })
              })
            })
          })
        },
        "button"
      );
    }
    return (0, n.jsx)("div", {
      ref: u2,
      className: A().sizer,
      children: (0, n.jsx)("div", {
        ref: m2,
        className: A().sizerInner,
        children: (0, n.jsx)(o.N, {
          initial: false,
          mode: "popLayout",
          children: l2
        })
      })
    });
  }
  function ee({
    meeting: e2,
    status: t2,
    error: a2,
    autoPlay: r2 = true,
    streamIn: _2 = true,
    model: w2 = $,
    sendTargets: j2 = S,
    onSend: b2,
    onActionItemChange: k2,
    onRegenerate: N2,
    className: T2
  }) {
    let I2, L2, q2 = e2 ?? v, D2 = void 0 === e2 && void 0 === t2 && void 0 === b2, O2 = (0, l.I)() ?? false, P2 = (0, i.useId)(), U2 = `${P2}-quote`, et2 = (0, i.useRef)(null), [ea2, en2] = (0, i.useState)(r2 ? "summarizing" : "ready"), ei2 = t2 ?? ea2, [er2, es2] = (0, i.useState)(0), [eo2, el] = (0, i.useState)(false), [ed, ec] = (0, i.useState)(null), [eu, em] = (0, i.useState)({}), [eh, ep] = (0, i.useState)({}), [eg, ef] = (0, i.useState)(
      "summarizing" === ei2 ? "Summarizing transcript" : ""
    ), [ey, ex] = (0, i.useState)(null), e_ = (0, i.useRef)(eh);
    (0, i.useLayoutEffect)(() => {
      e_.current = eh;
    });
    let ev = (0, i.useRef)(/* @__PURE__ */ new Set()), ew = (0, i.useRef)(false), ej = (0, i.useRef)(false), eb = (0, i.useRef)(false), ek = (0, i.useRef)(141), eN = (0, i.useRef)(void 0), eT = (0, i.useRef)(void 0), eA = (0, i.useRef)(false), eM = (0, i.useMemo)(
      () => new Map(q2.attendees.map((e3) => [e3.id, e3])),
      [q2.attendees]
    ), e$ = (0, i.useMemo)(
      () => (function(e3) {
        let t3 = /* @__PURE__ */ new Map(), a3 = {}, n2 = 0, i2 = 0;
        for (let [r3, s2] of [
          ["summary", e3.summary],
          ["decisions", e3.decisions],
          ["actions", e3.actionItems]
        ])
          if (s2.length)
            for (let e4 of (n2 > 0 && (n2 += 3), a3[r3] = n2++, s2)) {
              let a4 = e4.text.split(/\s+/).filter(Boolean), r4 = [];
              for (let e5 = 0; e5 < a4.length; ) {
                let t4 = E[i2++ % E.length];
                r4.push({
                  text: a4.slice(e5, e5 + t4).join(" ") + (e5 + t4 < a4.length ? " " : ""),
                  tick: n2++
                }), e5 += t4;
              }
              t3.set(e4.id, r4);
            }
        return { chunks: t3, sectionTick: a3, total: n2 };
      })(q2),
      [q2]
    ), eS = B(q2.startsAt, q2.durationMinutes), { outer: ez, inner: eC } = Y("height", O2), eI = (0, i.useMemo)(
      () => Object.fromEntries(
        q2.actionItems.map((e3) => [e3.id, eu[e3.id] ?? !!e3.done])
      ),
      [q2.actionItems, eu]
    );
    (0, i.useEffect)(() => {
      let e3 = et2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return void el(true);
      let t3 = new IntersectionObserver(([e4]) => el(e4.isIntersecting), {
        threshold: 0.25
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.useEffect)(() => {
      if (void 0 !== t2 || "summarizing" !== ea2 || !eo2) return;
      let e3 = window.setTimeout(() => en2("ready"), O2 ? 500 : 1e3);
      return () => window.clearTimeout(e3);
    }, [t2, ea2, eo2, O2, er2]);
    let [eL, eE] = (0, i.useState)(ei2);
    if (eL !== ei2) {
      if (eE(ei2), "summarizing" === ei2)
        ec(null), ef("Summarizing transcript");
      else if ("error" === ei2)
        ec(null), ef(`Couldn't summarize this meeting. ${a2 ?? ""}`.trim());
      else if ("summarizing" === eL) {
        let e3 = `${q2.summary.length} points, ${q2.decisions.length} decisions, ${q2.actionItems.length} action items`;
        ef(e$.total ? `Summary ready: ${e3}` : "No transcript to summarize"), ec(_2 && !O2 && e$.total ? 0 : null);
      }
    }
    let eq = null !== ed;
    (0, i.useEffect)(() => {
      if (!eq) return;
      let e3 = window.setInterval(
        () => ec((e4) => null === e4 || e4 >= e$.total + 5 ? null : e4 + 1),
        34
      );
      return () => window.clearInterval(e3);
    }, [eq, e$.total]), (0, i.useEffect)(
      () => () => {
        ev.current.forEach((e3) => e3.abort()), window.clearTimeout(eN.current), window.clearTimeout(eT.current);
      },
      []
    );
    let eR = (0, i.useCallback)(
      async (e3, t3) => {
        let a3 = `${e3.id}:${t3}`, n2 = e_.current[a3]?.status;
        if ("sending" === n2 || "sent" === n2) return;
        let i2 = z[t3];
        ep((e4) => ({ ...e4, [a3]: { status: "sending" } })), ef(`Sending to ${i2}`);
        let r3 = new AbortController();
        ev.current.add(r3);
        try {
          let n3;
          if (b2 ? n3 = await b2(e3, t3, r3.signal) ?? {} : (await new Promise((e4, t4) => {
            let a4 = window.setTimeout(e4, 820);
            r3.signal.addEventListener(
              "abort",
              () => {
                window.clearTimeout(a4), t4(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          }), n3 = "linear" === t3 ? { reference: `PRC-${ek.current++}` } : { reference: "Added" }), r3.signal.aborted)
            return;
          ep((e4) => ({ ...e4, [a3]: { status: "sent", result: n3 } }));
          let s2 = n3.reference && "linear" === t3 ? ` as ${n3.reference}` : "";
          ef(
            `Sent "${e3.text}" to ${i2}${s2}.${b2 ? "" : " Simulated, nothing was sent."}`
          );
        } catch {
          if (r3.signal.aborted) return;
          ep((e4) => ({ ...e4, [a3]: { status: "failed" } })), ef(`Couldn't send to ${i2}. Try again.`);
        } finally {
          ev.current.delete(r3);
        }
      },
      [b2]
    );
    (0, i.useEffect)(() => {
      if (!D2 || eq || "ready" !== ei2 || ej.current || !eo2 || !j2.includes("linear"))
        return;
      let e3 = q2.actionItems[1] ?? q2.actionItems[0];
      if (!e3) return;
      let t3 = window.setTimeout(() => {
        ew.current || ej.current || (ej.current = true, eR(e3, "linear"));
      }, 1100);
      return () => window.clearTimeout(t3);
    }, [D2, eq, ei2, eo2, q2.actionItems, j2, eR]);
    let eW = q2.actionItems[1] ?? q2.actionItems[0], eD = !!eW && eh[`${eW.id}:linear`]?.status === "sent";
    (0, i.useEffect)(() => {
      let e3 = q2.actionItems[0];
      if (!D2 || !eD || eb.current || !e3 || !eo2) return;
      let t3 = window.setTimeout(() => {
        ew.current || eb.current || (eb.current = true, em((t4) => ({ ...t4, [e3.id]: true })), ef(`Done: ${e3.text}`));
      }, 650);
      return () => window.clearTimeout(t3);
    }, [D2, eD, eo2, q2.actionItems]);
    let eO = () => {
      N2?.(), ev.current.forEach((e3) => e3.abort()), ep({}), ex(null), void 0 === t2 && (en2("summarizing"), es2((e3) => e3 + 1));
    }, eP = {
      active: ey,
      enter: (e3) => {
        window.clearTimeout(eT.current), window.clearTimeout(eN.current), eA.current && ey !== e3 && (eA.current = false), ey ? ex(e3) : eN.current = window.setTimeout(() => ex(e3), 260);
      },
      leave: () => {
        window.clearTimeout(eN.current), eA.current || (eT.current = window.setTimeout(() => ex(null), 90));
      },
      focus: (e3) => {
        window.clearTimeout(eT.current), window.clearTimeout(eN.current), ex(e3);
      },
      toggle: (e3) => {
        window.clearTimeout(eN.current), window.clearTimeout(eT.current);
        let t3 = ey === e3 && eA.current;
        eA.current = !t3, ex(t3 ? null : e3);
      }
    };
    (0, i.useEffect)(() => {
      if (!ey || !eA.current) return;
      let e3 = (e4) => {
        e4.target?.closest?.(`[data-quote-row="${ey}"]`) || (eA.current = false, ex(null));
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [ey]);
    let eF = (e3) => null === ed || (e$.chunks.get(e3)?.[0]?.tick ?? 0) <= ed, eB = (e3) => {
      let t3 = e$.chunks.get(e3);
      return null === ed || (t3?.[t3.length - 1]?.tick ?? 0) < ed;
    }, eY = (e3) => null === ed || (e$.sectionTick[e3] ?? 1 / 0) <= ed, eG = "ready" === ei2 && 0 === e$.total, eH = "summarizing" === ei2 ? "loading" : "error" === ei2 ? "error" : eG ? "empty" : "notes", eJ = q2.actionItems.filter((e3) => eI[e3.id]).length, eU = (I2 = B(q2.startsAt, q2.durationMinutes), L2 = [
      `# ${q2.title}`,
      `${I2.day}, ${I2.range} (${q2.durationMinutes} min)`
    ], q2.summary.length && L2.push("", "## Summary", ...q2.summary.map((e3) => `- ${e3.text}`)), q2.decisions.length && L2.push("", "## Decisions", ...q2.decisions.map((e3) => `- ${e3.text}`)), q2.actionItems.length && L2.push(
      "",
      "## Action items",
      ...q2.actionItems.map((e3) => {
        let t3 = [
          e3.ownerId ? eM.get(e3.ownerId)?.name : void 0,
          e3.due ? `due ${F(e3.due)}` : void 0
        ].filter(Boolean).join(", ");
        return `- [${eI[e3.id] ? "x" : " "}] ${e3.text}${t3 ? ` (${t3})` : ""}`;
      })
    ), L2.join("\n")), eV = q2.attendees.slice(0, 4), eZ = q2.attendees.length - eV.length, eK = {
      initial: !O2 && { opacity: 0 },
      animate: { opacity: 1, transition: R },
      exit: { opacity: 0, transition: O2 ? { duration: 0 } : W }
    }, eX = (e3, t3, a3) => {
      let i2 = `${P2}-${e3.id}`, r3 = ey === i2 && !!e3.quote;
      return (0, n.jsxs)(
        "li",
        {
          className: M(A().point, a3 && A().enter),
          "data-quote-row": i2,
          "data-active": r3 || void 0,
          onPointerEnter: (t4) => {
            "mouse" === t4.pointerType && e3.quote && !eq && eP.enter(i2);
          },
          onPointerLeave: (e4) => {
            "mouse" === e4.pointerType && eP.leave();
          },
          children: [
            (0, n.jsx)("span", {
              className: A().marker,
              "aria-hidden": "true",
              children: t3
            }),
            (0, n.jsx)("span", {
              className: A().pointText,
              children: (0, n.jsx)(Z, {
                text: e3.text,
                chunks: e$.chunks.get(e3.id),
                tick: ed
              })
            }),
            e3.quote ? (0, n.jsx)("span", {
              className: M(A().pointAside, !eB(e3.id) && A().hidden),
              children: (0, n.jsx)(X, {
                id: i2,
                quote: e3.quote,
                control: eP,
                quoteId: U2
              })
            }) : null,
            (0, n.jsx)(o.N, {
              children: r3 && e3.quote ? (0, n.jsx)(
                K,
                {
                  id: U2,
                  quote: e3.quote,
                  speaker: eM.get(e3.quote.speakerId)
                },
                "quote"
              ) : null
            })
          ]
        },
        e3.id
      );
    };
    return (0, n.jsxs)("article", {
      ref: et2,
      className: M(A().root, T2),
      "aria-label": `Meeting notes: ${q2.title}`,
      "aria-busy": "summarizing" === ei2 || eq,
      onPointerDown: () => {
        ew.current = true;
      },
      onKeyDown: (e3) => {
        ew.current = true, "Escape" === e3.key && ey && (eA.current = false, ex(null));
      },
      children: [
        (0, n.jsxs)("header", {
          className: A().header,
          children: [
            (0, n.jsx)("span", {
              className: A().platform,
              "aria-hidden": "other" === q2.platform || void 0,
              children: (0, n.jsx)(J, { platform: q2.platform })
            }),
            (0, n.jsxs)("div", {
              className: A().heading,
              children: [
                (0, n.jsx)("h2", { className: A().title, children: q2.title }),
                (0, n.jsxs)("p", {
                  className: A().when,
                  children: [
                    (0, n.jsxs)("span", {
                      className: A().srOnly,
                      children: [C[q2.platform], ", "]
                    }),
                    (0, n.jsx)("span", { children: eS.day }),
                    (0, n.jsx)("span", {
                      className: A().dot,
                      "aria-hidden": "true"
                    }),
                    (0, n.jsx)("span", { children: eS.range }),
                    (0, n.jsx)("span", {
                      className: A().dot,
                      "aria-hidden": "true"
                    }),
                    (0, n.jsxs)("span", {
                      children: [q2.durationMinutes, " min"]
                    })
                  ]
                })
              ]
            }),
            q2.attendees.length ? (0, n.jsx)(x.m, {
              content: q2.attendees.map((e3) => e3.name).join(", "),
              children: (0, n.jsxs)("span", {
                className: A().stack,
                tabIndex: 0,
                role: "group",
                "aria-label": `${q2.attendees.length} attendees: ${q2.attendees.map((e3) => e3.name).join(", ")}`,
                children: [
                  (0, n.jsx)("span", {
                    className: A().stackFaces,
                    "aria-hidden": "true",
                    children: eV.map(
                      (e3) => (0, n.jsx)(
                        p.e,
                        {
                          name: e3.name,
                          src: e3.avatar,
                          size: "sm",
                          className: A().face
                        },
                        e3.id
                      )
                    )
                  }),
                  eZ > 0 ? (0, n.jsxs)("span", {
                    className: A().more,
                    "aria-hidden": "true",
                    children: ["+", eZ]
                  }) : null
                ]
              })
            }) : null
          ]
        }),
        (0, n.jsx)("div", {
          ref: ez,
          className: A().bodyOuter,
          children: (0, n.jsx)("div", {
            ref: eC,
            className: A().body,
            children: (0, n.jsxs)(o.N, {
              initial: false,
              mode: "popLayout",
              children: [
                "loading" === eH ? (0, n.jsxs)(
                  s.PY1.div,
                  {
                    className: A().loading,
                    ...eK,
                    children: [
                      (0, n.jsx)(G, {}),
                      (0, n.jsx)(y.n, {
                        className: A().loadingLabel,
                        children: "Summarizing transcript"
                      })
                    ]
                  },
                  `loading-${er2}`
                ) : null,
                "error" === eH ? (0, n.jsxs)(
                  s.PY1.div,
                  {
                    className: A().state,
                    role: "alert",
                    ...eK,
                    children: [
                      (0, n.jsx)("span", {
                        className: M(A().stateIcon, A().stateDanger),
                        "aria-hidden": "true",
                        children: (0, n.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75
                        })
                      }),
                      (0, n.jsxs)("div", {
                        className: A().stateCopy,
                        children: [
                          (0, n.jsx)("p", {
                            className: A().stateTitle,
                            children: "Couldn't summarize this meeting"
                          }),
                          (0, n.jsx)("p", {
                            className: A().stateText,
                            children: a2 ?? "The transcript didn't finish processing. Try again in a minute."
                          }),
                          (0, n.jsxs)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            className: A().retry,
                            onClick: eO,
                            children: [
                              (0, n.jsx)(u.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Try again"
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  "error"
                ) : null,
                "empty" === eH ? (0, n.jsxs)(
                  s.PY1.div,
                  {
                    className: A().state,
                    ...eK,
                    children: [
                      (0, n.jsx)("span", {
                        className: A().stateIcon,
                        "aria-hidden": "true",
                        children: (0, n.jsx)(m.A, {
                          size: 16,
                          strokeWidth: 1.75
                        })
                      }),
                      (0, n.jsxs)("div", {
                        className: A().stateCopy,
                        children: [
                          (0, n.jsx)("p", {
                            className: A().stateTitle,
                            children: "No transcript to summarize"
                          }),
                          (0, n.jsxs)("p", {
                            className: A().stateText,
                            children: [
                              "Transcription was off for this call. Turn it on in ",
                              "other" === q2.platform ? "your meeting app" : C[q2.platform],
                              " to get notes next time."
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  "empty"
                ) : null,
                "notes" === eH ? (0, n.jsxs)(
                  s.PY1.div,
                  {
                    className: A().notes,
                    ...eK,
                    children: [
                      q2.summary.length && eY("summary") ? (0, n.jsxs)("section", {
                        className: M(A().section, eq && A().enter),
                        "aria-labelledby": `${P2}-summary`,
                        children: [
                          (0, n.jsx)("h3", {
                            id: `${P2}-summary`,
                            className: A().sectionTitle,
                            children: "Summary"
                          }),
                          (0, n.jsx)("ul", {
                            className: A().list,
                            children: q2.summary.filter((e3) => eF(e3.id)).map(
                              (e3) => eX(
                                e3,
                                (0, n.jsx)("span", {
                                  className: A().bullet
                                }),
                                eq
                              )
                            )
                          })
                        ]
                      }) : null,
                      q2.decisions.length && eY("decisions") ? (0, n.jsxs)("section", {
                        className: M(A().section, eq && A().enter),
                        "aria-labelledby": `${P2}-decisions`,
                        children: [
                          (0, n.jsx)("h3", {
                            id: `${P2}-decisions`,
                            className: A().sectionTitle,
                            children: "Decisions"
                          }),
                          (0, n.jsx)("ul", {
                            className: A().list,
                            children: q2.decisions.filter((e3) => eF(e3.id)).map(
                              (e3) => eX(
                                e3,
                                (0, n.jsx)(d.A, {
                                  size: 14,
                                  strokeWidth: 1.75
                                }),
                                eq
                              )
                            )
                          })
                        ]
                      }) : null,
                      q2.actionItems.length && eY("actions") ? (0, n.jsxs)("section", {
                        className: M(A().section, eq && A().enter),
                        "aria-labelledby": `${P2}-actions`,
                        children: [
                          (0, n.jsxs)("div", {
                            className: A().sectionHead,
                            children: [
                              (0, n.jsx)("h3", {
                                id: `${P2}-actions`,
                                className: A().sectionTitle,
                                children: "Action items"
                              }),
                              (0, n.jsxs)("span", {
                                className: M(
                                  A().progress,
                                  eq && A().hidden
                                ),
                                children: [
                                  (0, n.jsx)(V, {
                                    value: eJ,
                                    reduced: O2
                                  }),
                                  " of ",
                                  q2.actionItems.length,
                                  " done"
                                ]
                              })
                            ]
                          }),
                          (0, n.jsx)("ul", {
                            className: A().list,
                            children: q2.actionItems.filter((e3) => eF(e3.id)).map((e3) => {
                              let t3 = e3.ownerId ? eM.get(e3.ownerId) : void 0, a3 = `${P2}-${e3.id}`, i2 = ey === a3 && !!e3.quote, r3 = !!eI[e3.id];
                              return (0, n.jsxs)(
                                "li",
                                {
                                  className: M(
                                    A().item,
                                    eq && A().enter
                                  ),
                                  "data-quote-row": a3,
                                  "data-done": r3 || void 0,
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: A().checkCell,
                                      children: (0, n.jsx)(H, {
                                        checked: r3,
                                        onCheckedChange: (t4) => {
                                          em((a4) => ({
                                            ...a4,
                                            [e3.id]: t4
                                          })), k2?.(e3, t4), ef(
                                            `${t4 ? "Done" : "Not done"}: ${e3.text}`
                                          );
                                        },
                                        label: e3.text,
                                        reduced: O2
                                      })
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: A().itemBody,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: A().itemText,
                                          children: (0, n.jsx)(
                                            "span",
                                            {
                                              className: A().strike,
                                              children: (0, n.jsx)(
                                                Z,
                                                {
                                                  text: e3.text,
                                                  chunks: e$.chunks.get(
                                                    e3.id
                                                  ),
                                                  tick: ed
                                                }
                                              )
                                            }
                                          )
                                        }),
                                        (0, n.jsxs)("div", {
                                          className: M(
                                            A().meta,
                                            !eB(e3.id) && A().hidden
                                          ),
                                          children: [
                                            t3 ? (0, n.jsxs)("span", {
                                              className: A().owner,
                                              children: [
                                                (0, n.jsx)(p.e, {
                                                  name: t3.name,
                                                  src: t3.avatar,
                                                  size: "sm",
                                                  className: A().ownerAvatar,
                                                  "aria-hidden": "true"
                                                }),
                                                (0, n.jsx)(
                                                  "span",
                                                  {
                                                    className: A().ownerFull,
                                                    children: t3.name
                                                  }
                                                ),
                                                (0, n.jsx)(
                                                  "span",
                                                  {
                                                    className: A().ownerShort,
                                                    "aria-hidden": "true",
                                                    children: t3.name.split(
                                                      " "
                                                    )[0]
                                                  }
                                                )
                                              ]
                                            }) : null,
                                            e3.due ? (0, n.jsxs)("span", {
                                              className: A().due,
                                              children: [
                                                (0, n.jsx)(h.A, {
                                                  size: 14,
                                                  strokeWidth: 1.75,
                                                  "aria-hidden": "true"
                                                }),
                                                (0, n.jsxs)(
                                                  "span",
                                                  {
                                                    children: [
                                                      (0, n.jsx)(
                                                        "span",
                                                        {
                                                          className: A().srOnly,
                                                          children: "Due "
                                                        }
                                                      ),
                                                      F(e3.due)
                                                    ]
                                                  }
                                                )
                                              ]
                                            }) : null,
                                            e3.quote ? (0, n.jsx)("span", {
                                              className: A().metaQuote,
                                              onPointerEnter: (e4) => {
                                                "mouse" === e4.pointerType && eP.enter(a3);
                                              },
                                              onPointerLeave: (e4) => {
                                                "mouse" === e4.pointerType && eP.leave();
                                              },
                                              children: (0, n.jsx)(X, {
                                                id: a3,
                                                quote: e3.quote,
                                                control: eP,
                                                quoteId: U2
                                              })
                                            }) : null,
                                            j2.length ? (0, n.jsx)("span", {
                                              className: A().sendGroup,
                                              children: j2.map(
                                                (t4) => (0, n.jsx)(
                                                  Q,
                                                  {
                                                    item: e3,
                                                    target: t4,
                                                    state: eh[`${e3.id}:${t4}`],
                                                    onSend: () => void eR(
                                                      e3,
                                                      t4
                                                    ),
                                                    reduced: O2
                                                  },
                                                  t4
                                                )
                                              )
                                            }) : null
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, n.jsx)(o.N, {
                                      children: i2 && e3.quote ? (0, n.jsx)(
                                        K,
                                        {
                                          id: U2,
                                          quote: e3.quote,
                                          speaker: eM.get(
                                            e3.quote.speakerId
                                          )
                                        },
                                        "quote"
                                      ) : null
                                    })
                                  ]
                                },
                                e3.id
                              );
                            })
                          })
                        ]
                      }) : null
                    ]
                  },
                  `notes-${er2}`
                ) : null
              ]
            })
          })
        }),
        (0, n.jsxs)("footer", {
          className: A().footer,
          children: [
            (0, n.jsxs)("p", {
              className: A().credit,
              children: [
                w2 ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    w2.icon ? (0, n.jsx)("span", {
                      className: A().modelIcon,
                      children: w2.icon
                    }) : null,
                    (0, n.jsx)("span", {
                      className: A().modelName,
                      children: w2.name
                    })
                  ]
                }) : null,
                q2.transcriptWords ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    w2 ? (0, n.jsx)("span", {
                      className: A().dot,
                      "aria-hidden": "true"
                    }) : null,
                    (0, n.jsxs)("span", {
                      children: [
                        q2.transcriptWords.toLocaleString("en-US"),
                        " words"
                      ]
                    })
                  ]
                }) : null
              ]
            }),
            (0, n.jsxs)("div", {
              className: A().tools,
              children: [
                (0, n.jsx)(f.CopyButton, {
                  value: eU,
                  label: "Copy notes as Markdown",
                  iconOnly: true,
                  variant: "plain",
                  disabled: "notes" !== eH || eq,
                  className: A().tool
                }),
                (0, n.jsx)(x.m, {
                  content: "Regenerate",
                  children: (0, n.jsx)(g.$, {
                    variant: "ghost",
                    size: "sm",
                    className: A().iconButton,
                    "aria-label": "Regenerate notes",
                    disabled: "summarizing" === ei2 || eq,
                    onClick: eO,
                    children: (0, n.jsx)(u.A, {
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
        (0, n.jsx)("p", {
          className: A().srOnly,
          "aria-live": "polite",
          children: eg
        })
      ]
    });
  }
  var et = a(66558), ea = a(73536), en = a.n(ea);
  let ei = [
    { value: "live", label: "Live" },
    { value: "error", label: "Error" },
    { value: "empty", label: "No transcript" }
  ], er = {
    ...w,
    title: "Weekly design critique",
    platform: "zoom",
    startsAt: "2026-10-26T15:30",
    durationMinutes: 28
  };
  function es() {
    let [e2, t2] = (0, i.useState)("live"), [a2, r2] = (0, i.useState)(0), s2 = () => {
      t2("live"), r2((e3) => e3 + 1);
    };
    return (0, n.jsxs)("div", {
      className: en().demo,
      children: [
        (0, n.jsx)(et.A, {
          label: "Scenario",
          options: ei,
          value: e2,
          onValueChange: (e3) => {
            t2(e3), "live" === e3 && r2((e4) => e4 + 1);
          }
        }),
        (0, n.jsx)("div", {
          className: en().stage,
          children: "live" === e2 ? (0, n.jsx)(ee, {}, a2) : "error" === e2 ? (0, n.jsx)(ee, {
            status: "error",
            error: "The recording is still uploading from Google Meet. Try again in a minute.",
            onRegenerate: s2
          }) : (0, n.jsx)(ee, {
            meeting: er,
            status: "ready",
            onRegenerate: s2
          })
        })
      ]
    });
  }
  let eo = es;
}

__m(__module,__exports,__require);
});
A.cssFor("meeting-summary", [46178,73536]);
A.item("meeting-summary", {entry:91032, export:"MeetingSummaryDemo", kind:"component", tier:"pro", unresolved:[]});
})();