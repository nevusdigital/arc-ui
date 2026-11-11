/* spend-alert (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(1952, ".spend-alert_root__O9vZ6{--pad:20px;--hover:color-mix(in oklab,var(--foreground) 4.5%,transparent);--fill-spend:var(--control-fill);--fill-forecast:color-mix(in oklab,var(--control-fill) 32%,var(--control-track));position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:580px;min-width:0;margin-inline:auto;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-weight:400;container:spend/inline-size}.spend-alert_root__O9vZ6 *,.spend-alert_root__O9vZ6 :after,.spend-alert_root__O9vZ6 :before{box-sizing:border-box}.spend-alert_root__O9vZ6 p{margin:0}.spend-alert_ellipsis__KqQa_{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.spend-alert_meta__FqgTN,.spend-alert_muted__S0Zw6{color:var(--text-muted)}.spend-alert_fade__fR1vg{display:grid;min-width:0}.spend-alert_fadeItem__F18WR{grid-area:1/1}.spend-alert_fadeItem__F18WR,.spend-alert_metaLine__PTYFy{display:flex;align-items:center;gap:6px;min-width:0}.spend-alert_toneIcon__jsm1Y{flex:none}.spend-alert_toneIcon__jsm1Y[data-tone=success]{color:var(--success)}.spend-alert_toneIcon__jsm1Y[data-tone=warning]{color:var(--warning)}.spend-alert_toneIcon__jsm1Y[data-tone=danger]{color:var(--danger)}.spend-alert_toneIcon__jsm1Y[data-tone=muted]{color:var(--text-muted)}.spend-alert_header__QLmyZ{display:flex;align-items:center;gap:16px;padding:18px var(--pad) 16px}.spend-alert_heading__61yzY{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}.spend-alert_title__oM_bs{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}.spend-alert_status__8b1EC{flex:none;color:var(--text-secondary)}.spend-alert_status__8b1EC .spend-alert_fadeItem__F18WR{justify-self:end}.spend-alert_section__OdlTp{display:flex;flex-direction:column;gap:12px;padding:16px var(--pad);border-top:1px solid var(--border)}.spend-alert_label__piYyO{font-weight:500;color:var(--foreground)}.spend-alert_rowText__E_9Y4{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}.spend-alert_rowHead__YcDyc{display:flex;align-items:baseline;justify-content:space-between;gap:12px;min-width:0}.spend-alert_value__JzscU{display:inline-flex;align-items:baseline;gap:6px;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}.spend-alert_percent__SFoao{min-width:4ch;color:var(--foreground);font-weight:500;text-align:right}.spend-alert_dot__BoToi{color:var(--text-muted)}.spend-alert_budgetRow__z1vk_,.spend-alert_stopRow__ssK2H{flex-direction:row;align-items:center;gap:16px}.spend-alert_field__bh2qI{display:inline-flex;flex:none;align-items:center;gap:6px;width:168px;height:var(--control-height-sm);padding:0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--background);transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.spend-alert_field__bh2qI:hover{border-color:var(--border-strong)}}.spend-alert_field__bh2qI:focus-within{border-color:var(--border-strong);box-shadow:0 0 0 3px color-mix(in oklab,var(--foreground) 8%,transparent)}.spend-alert_field__bh2qI[data-invalid]{border-color:color-mix(in oklab,var(--danger) 70%,var(--border))}.spend-alert_field__bh2qI[data-invalid]:focus-within{box-shadow:0 0 0 3px color-mix(in oklab,var(--danger) 16%,transparent)}.spend-alert_affix__XgtzN{flex:none;color:var(--text-muted);font-variant-numeric:tabular-nums}.spend-alert_input__vWWy9{flex:1;min-width:0;height:100%;padding:0;border:0;outline:none;background:transparent;color:var(--foreground);font:inherit;font-variant-numeric:tabular-nums}.spend-alert_input__vWWy9:focus-visible{outline:none}.spend-alert_bar__A96Se{--thumb:20px;display:flex;flex-direction:column;gap:6px;padding-top:2px}.spend-alert_rail__5wjk3{position:relative;height:28px;cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.spend-alert_bar__A96Se[data-dragging] .spend-alert_rail__5wjk3{cursor:grabbing}.spend-alert_bar__A96Se[data-disabled] .spend-alert_rail__5wjk3{cursor:not-allowed}.spend-alert_track__sROJG{position:absolute;inset:11px 0 auto;height:6px;overflow:hidden;border-radius:var(--radius-pill);background:var(--control-track)}.spend-alert_forecastFill__y3eqD,.spend-alert_overFill__um9as,.spend-alert_spendFill__4X4az{position:absolute;inset:0;border-radius:inherit;transition:clip-path var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.spend-alert_forecastFill__y3eqD{background:var(--fill-forecast);clip-path:inset(0 calc(100% - var(--forecast)) 0 0 round 999px)}.spend-alert_spendFill__4X4az{background:var(--fill-spend);clip-path:inset(0 calc(100% - var(--spend)) 0 0 round 999px)}.spend-alert_overFill__um9as{background:var(--warning);clip-path:inset(0 calc(100% - var(--spend)) 0 var(--t) round 999px)}.spend-alert_bar__A96Se[data-over] .spend-alert_spendFill__4X4az{background:var(--danger)}.spend-alert_notch__q9Ors{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--surface)}.spend-alert_bar__A96Se[data-intro] .spend-alert_forecastFill__y3eqD,.spend-alert_bar__A96Se[data-intro] .spend-alert_overFill__um9as,.spend-alert_bar__A96Se[data-intro] .spend-alert_spendFill__4X4az{transition-duration:.72s;transition-timing-function:cubic-bezier(.16,1,.3,1)}.spend-alert_bar__A96Se[data-dragging] .spend-alert_overFill__um9as{transition:none}.spend-alert_thumb__mVxwQ{position:absolute;top:4px;left:var(--t);width:var(--thumb);height:var(--thumb);margin-left:calc(var(--thumb) / -2);border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);cursor:grab;transition:left var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard);will-change:left}.spend-alert_thumb__mVxwQ[data-pressed]{transform:scale(1.1);cursor:grabbing}.spend-alert_bar__A96Se[data-dragging] .spend-alert_thumb__mVxwQ{transition:transform var(--duration-instant) var(--ease-standard)}.spend-alert_thumb__mVxwQ:focus-visible{outline-offset:2px}.spend-alert_bar__A96Se[data-disabled] .spend-alert_thumb__mVxwQ{background:var(--surface-muted);box-shadow:0 0 0 1px var(--border);cursor:not-allowed}.spend-alert_markers__Nr3mE{position:relative;height:18px}.spend-alert_marker__Ws_iA{position:absolute;top:0;padding:0 2px;border:0;background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-xs);line-height:18px;font-variant-numeric:tabular-nums;cursor:pointer;transform:translateX(-50%);transition:color var(--duration-fast) var(--ease-standard)}.spend-alert_marker__Ws_iA[data-edge]{padding-right:0;transform:translateX(-100%)}.spend-alert_marker__Ws_iA[data-active]{color:var(--foreground)}@media (hover:hover) and (pointer:fine){.spend-alert_marker__Ws_iA:hover:not(:disabled){color:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.spend-alert_marker__Ws_iA[data-active]:hover{color:var(--foreground)}}.spend-alert_marker__Ws_iA:disabled{cursor:not-allowed}.spend-alert_legend__pksFG{display:flex;align-items:center;gap:16px;min-width:0;color:var(--text-muted);font-size:var(--text-xs)}.spend-alert_legendItem__xj5Bq{display:inline-flex;align-items:center;gap:6px;min-width:0}.spend-alert_legendPct__c3_9V{margin-left:auto;flex:none;font-variant-numeric:tabular-nums;white-space:nowrap}.spend-alert_swatch__a2ZWQ{flex:none;width:8px;height:8px;border-radius:2px}.spend-alert_swatch__a2ZWQ[data-kind=spend]{background:var(--fill-spend)}.spend-alert_swatch__a2ZWQ[data-kind=forecast]{background:var(--fill-forecast)}.spend-alert_channels__B7L_E{display:flex;flex-direction:column;margin:-4px 0;padding:0;list-style:none}.spend-alert_channel__L_iqp{display:flex;align-items:center;gap:12px;min-height:44px}.spend-alert_mark__3Bx_1{flex:none;display:block}.spend-alert_mailIcon__Nr6pH{flex:none;color:var(--text-secondary)}.spend-alert_channelText__Z7gYv{display:flex;flex:1;align-items:baseline;gap:8px;min-width:0}.spend-alert_channelName__HqZYq{flex:none;color:var(--foreground)}.spend-alert_previewWhere__b1MqA{display:inline-flex;align-items:center;gap:6px;min-width:0;font-size:var(--text-xs)}.spend-alert_preview__NkkFo{position:relative;overflow:hidden;border:1px solid var(--border-subtle);border-radius:16px;background:var(--background)}.spend-alert_message__bKzLU{display:flex;gap:12px;padding:14px 16px;transition:opacity var(--duration-fast) var(--ease-standard)}.spend-alert_preview__NkkFo[data-off] .spend-alert_message__bKzLU{opacity:0}.spend-alert_previewOff__6zixs{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;padding:16px;color:var(--text-muted);opacity:0;pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard)}.spend-alert_preview__NkkFo[data-off] .spend-alert_previewOff__6zixs{opacity:1}.spend-alert_flash__7mNZd{position:absolute;inset:0;background:var(--accent-subtle);pointer-events:none;animation:spend-alert_spend-flash__S8qoF .9s var(--ease-standard) both}@keyframes spend-alert_spend-flash__S8qoF{0%{opacity:1}to{opacity:0}}.spend-alert_avatar__W5tDE{display:grid;flex:none;width:32px;height:32px;place-items:center;border-radius:8px;background:var(--foreground);color:var(--background);font-weight:500}.spend-alert_messageBody__yj8OI{display:flex;flex:1;flex-direction:column;gap:4px;min-width:0}.spend-alert_sender__kDbRw{display:flex;align-items:baseline;gap:6px;min-width:0}.spend-alert_senderName__Jckph{font-weight:500}.spend-alert_badge__iMyz2{flex:none;padding:0 4px;border-radius:4px;background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);line-height:16px}.spend-alert_time__Sy0ut{flex:none;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.spend-alert_headline__uSpUc{display:flex;align-items:center;gap:6px;min-width:0}.spend-alert_attachment__URQ4S{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:4px;padding:2px 0 2px 12px;border-left:3px solid var(--warning);transition:border-color var(--duration-fast) var(--ease-standard)}.spend-alert_attachment__URQ4S[data-tone=danger]{border-left-color:var(--danger)}.spend-alert_field2__oSk3u{display:flex;flex-direction:column;min-width:0}.spend-alert_num__Y_M7L{font-variant-numeric:tabular-nums}.spend-alert_context__lSE0C,.spend-alert_fieldLabel___AbAv{color:var(--text-muted);font-size:var(--text-xs)}.spend-alert_context__lSE0C{margin-top:4px}.spend-alert_footer__J141g{display:flex;align-items:center;gap:16px;padding:14px var(--pad);border-top:1px solid var(--border)}.spend-alert_footerStatus__jSX_s{display:flex;flex:1;min-width:0}.spend-alert_footerStatus__jSX_s .spend-alert_fade__fR1vg{flex:1}.spend-alert_actions__jo_9w{display:flex;flex:none;gap:8px}@media (prefers-reduced-motion:reduce){.spend-alert_attachment__URQ4S,.spend-alert_forecastFill__y3eqD,.spend-alert_marker__Ws_iA,.spend-alert_message__bKzLU,.spend-alert_overFill__um9as,.spend-alert_previewOff__6zixs,.spend-alert_spendFill__4X4az,.spend-alert_thumb__mVxwQ{transition:none}}@media (prefers-reduced-motion:reduce){.spend-alert_flash__7mNZd{animation-duration:.4s}}", {"root":"spend-alert_root__O9vZ6","ellipsis":"spend-alert_ellipsis__KqQa_","muted":"spend-alert_muted__S0Zw6","meta":"spend-alert_meta__FqgTN","fade":"spend-alert_fade__fR1vg","fadeItem":"spend-alert_fadeItem__F18WR","metaLine":"spend-alert_metaLine__PTYFy","toneIcon":"spend-alert_toneIcon__jsm1Y","header":"spend-alert_header__QLmyZ","heading":"spend-alert_heading__61yzY","title":"spend-alert_title__oM_bs","status":"spend-alert_status__8b1EC","section":"spend-alert_section__OdlTp","label":"spend-alert_label__piYyO","rowText":"spend-alert_rowText__E_9Y4","rowHead":"spend-alert_rowHead__YcDyc","value":"spend-alert_value__JzscU","percent":"spend-alert_percent__SFoao","dot":"spend-alert_dot__BoToi","budgetRow":"spend-alert_budgetRow__z1vk_","stopRow":"spend-alert_stopRow__ssK2H","field":"spend-alert_field__bh2qI","affix":"spend-alert_affix__XgtzN","input":"spend-alert_input__vWWy9","bar":"spend-alert_bar__A96Se","rail":"spend-alert_rail__5wjk3","track":"spend-alert_track__sROJG","forecastFill":"spend-alert_forecastFill__y3eqD","spendFill":"spend-alert_spendFill__4X4az","overFill":"spend-alert_overFill__um9as","notch":"spend-alert_notch__q9Ors","thumb":"spend-alert_thumb__mVxwQ","markers":"spend-alert_markers__Nr3mE","marker":"spend-alert_marker__Ws_iA","legend":"spend-alert_legend__pksFG","legendItem":"spend-alert_legendItem__xj5Bq","legendPct":"spend-alert_legendPct__c3_9V","swatch":"spend-alert_swatch__a2ZWQ","channels":"spend-alert_channels__B7L_E","channel":"spend-alert_channel__L_iqp","mark":"spend-alert_mark__3Bx_1","mailIcon":"spend-alert_mailIcon__Nr6pH","channelText":"spend-alert_channelText__Z7gYv","channelName":"spend-alert_channelName__HqZYq","previewWhere":"spend-alert_previewWhere__b1MqA","preview":"spend-alert_preview__NkkFo","message":"spend-alert_message__bKzLU","previewOff":"spend-alert_previewOff__6zixs","flash":"spend-alert_flash__7mNZd","spend-flash":"spend-alert_spend-flash__S8qoF","avatar":"spend-alert_avatar__W5tDE","messageBody":"spend-alert_messageBody__yj8OI","sender":"spend-alert_sender__kDbRw","senderName":"spend-alert_senderName__Jckph","badge":"spend-alert_badge__iMyz2","time":"spend-alert_time__Sy0ut","headline":"spend-alert_headline__uSpUc","attachment":"spend-alert_attachment__URQ4S","field2":"spend-alert_field2__oSk3u","num":"spend-alert_num__Y_M7L","fieldLabel":"spend-alert_fieldLabel___AbAv","context":"spend-alert_context__lSE0C","footer":"spend-alert_footer__J141g","footerStatus":"spend-alert_footerStatus__jSX_s","actions":"spend-alert_actions__jo_9w"});
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
A.reg(63671, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { SpendAlert: () => E, default: () => P });
  var s = t(95155), n = t(12115), r = t(18310), l = t(80642), i = t(25354), d = t(64962), c = t(11012), o = t(23723), u = t(93954), p = t(75796), h = t(51288), m = t(50680);
  function _({ size: e2 = 16, ...a2 }) {
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: e2,
      height: e2,
      "aria-hidden": "true",
      focusable: "false",
      ...a2,
      children: [
        (0, s.jsx)("path", {
          fill: "#E01E5A",
          d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
        }),
        (0, s.jsx)("path", {
          fill: "#36C5F0",
          d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
        }),
        (0, s.jsx)("path", {
          fill: "#2EB67D",
          d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
        }),
        (0, s.jsx)("path", {
          fill: "#ECB22E",
          d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        })
      ]
    });
  }
  function f({ size: e2 = 16, ...a2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      width: e2,
      height: e2,
      "aria-hidden": "true",
      focusable: "false",
      ...a2,
      children: (0, s.jsx)("path", {
        fill: "#06AC38",
        d: "M16.965 1.18C15.085.164 13.769 0 10.683 0H3.73v14.55h6.926c2.743 0 4.8-.164 6.61-1.37 1.975-1.303 3.004-3.484 3.004-6.007 0-2.716-1.262-4.896-3.305-5.994zm-5.5 10.326h-3.86V3.135l3.65-.014c3.325-.041 4.99 1.13 4.99 4.12 0 3.21-2.059 4.265-4.78 4.265zM3.73 17.43h3.867V24H3.73Z"
      })
    });
  }
  var b = t(1952), x = t.n(b);
  let g = {
    label: "October",
    short: "Oct",
    day: 27,
    days: 31,
    resetsOn: "Nov 1"
  }, y = {
    email: "finance@acme.com",
    slack: "#eng-spend",
    pagerduty: "Platform on-call"
  }, v = {
    budget: 5e3,
    threshold: 80,
    channels: { email: true, slack: true, pagerduty: false },
    hardStop: false
  }, j = [0.16, 1, 0.3, 1], N = (...e2) => e2.filter(Boolean).join(" "), k = (e2, a2, t2) => Math.min(t2, Math.max(a2, e2)), w = (e2) => e2.toLocaleString("en-US", { maximumFractionDigits: 2 });
  function S({ id: e2, children: a2, className: t2 }) {
    let n2 = (0, r.I)();
    return (0, s.jsx)("span", {
      className: N(x().fade, t2),
      children: (0, s.jsx)(l.N, {
        initial: false,
        children: (0, s.jsx)(
          i.PY1.span,
          {
            className: x().fadeItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: n2 ? 0.12 : 0.16, ease: j }
            },
            exit: { opacity: 0, transition: { duration: 0.1 } },
            children: a2
          },
          e2
        )
      })
    });
  }
  let A = { success: d.A, warning: c.A, danger: c.A, muted: o.A };
  function M({ tone: e2, icon: a2, children: t2 }) {
    let n2 = a2 ?? A[e2];
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(n2, {
          size: 14,
          strokeWidth: 2,
          className: x().toneIcon,
          "data-tone": e2,
          "aria-hidden": "true"
        }),
        (0, s.jsx)("span", { className: x().ellipsis, children: t2 })
      ]
    });
  }
  function C({
    value: e2,
    onChange: a2,
    spendPct: t2,
    forecastPct: l2,
    markers: i2,
    labelId: d2,
    valueText: c2,
    disabled: o2,
    over: u2
  }) {
    let p2 = (0, r.I)(), h2 = (0, n.useRef)(null), m2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), [f2, b2] = (0, n.useState)(false), [g2, y2] = (0, n.useState)(false), [v2, j2] = (0, n.useState)(false), [N2, w2] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      let e3 = h2.current;
      if (!e3 || p2) return;
      if ("u" < typeof IntersectionObserver) {
        let e4 = requestAnimationFrame(() => j2(true));
        return () => cancelAnimationFrame(e4);
      }
      let a3 = new IntersectionObserver(
        ([e4]) => {
          e4?.isIntersecting && (a3.disconnect(), w2(true), requestAnimationFrame(() => j2(true)));
        },
        { threshold: 0.4 }
      );
      return a3.observe(e3), () => a3.disconnect();
    }, [p2]), (0, n.useEffect)(() => {
      if (!N2) return;
      let e3 = setTimeout(() => w2(false), 760);
      return () => clearTimeout(e3);
    }, [N2]);
    let S2 = (0, n.useMemo)(() => [...i2].sort((e3, a3) => e3 - a3), [i2]), A2 = (a3) => {
      let t3 = h2.current?.getBoundingClientRect();
      if (!t3 || 0 === t3.width) return e2;
      let s2 = k(Math.round((a3 - t3.left) / t3.width * 100), 10, 100);
      return S2.find((e3) => 2 >= Math.abs(e3 - s2)) ?? s2;
    }, M2 = () => {
      _2.current = null, b2(false), y2(false);
    }, E2 = v2 || !!p2, P2 = {
      "--t": `${e2}%`,
      "--spend": `${E2 ? t2 : 0}%`,
      "--forecast": `${E2 ? l2 : 0}%`
    };
    return (0, s.jsxs)("div", {
      className: x().bar,
      style: P2,
      "data-dragging": f2 || void 0,
      "data-intro": N2 || void 0,
      "data-disabled": o2 || void 0,
      "data-over": E2 && u2 || void 0,
      children: [
        (0, s.jsxs)("div", {
          ref: h2,
          className: x().rail,
          onPointerDown: (e3) => {
            o2 || 0 !== e3.button || (e3.preventDefault(), e3.currentTarget.setPointerCapture(e3.pointerId), _2.current = { id: e3.pointerId, moved: false }, y2(true), m2.current?.focus({ preventScroll: true }), a2(A2(e3.clientX)));
          },
          onPointerMove: (e3) => {
            let t3 = _2.current;
            t3 && t3.id === e3.pointerId && (t3.moved || (t3.moved = true, b2(true)), a2(A2(e3.clientX)));
          },
          onPointerUp: M2,
          onPointerCancel: M2,
          onLostPointerCapture: M2,
          children: [
            (0, s.jsxs)("div", {
              className: x().track,
              "aria-hidden": "true",
              children: [
                (0, s.jsx)("span", { className: x().forecastFill }),
                (0, s.jsx)("span", { className: x().spendFill }),
                (0, s.jsx)("span", { className: x().overFill }),
                S2.filter((e3) => e3 < 100).map(
                  (e3) => (0, s.jsx)(
                    "span",
                    { className: x().notch, style: { left: `${e3}%` } },
                    e3
                  )
                )
              ]
            }),
            (0, s.jsx)("div", {
              ref: m2,
              className: x().thumb,
              "data-pressed": g2 || void 0,
              role: "slider",
              tabIndex: o2 ? -1 : 0,
              "aria-labelledby": d2,
              "aria-valuemin": 10,
              "aria-valuemax": 100,
              "aria-valuenow": e2,
              "aria-valuetext": c2,
              "aria-disabled": o2 || void 0,
              onKeyDown: o2 ? void 0 : (t3) => {
                let s2, n2 = t3.shiftKey ? 10 : 1;
                "ArrowRight" === t3.key || "ArrowUp" === t3.key ? s2 = e2 + n2 : "ArrowLeft" === t3.key || "ArrowDown" === t3.key ? s2 = e2 - n2 : "PageUp" === t3.key ? s2 = S2.find((a3) => a3 > e2) ?? 100 : "PageDown" === t3.key ? s2 = [...S2].reverse().find((a3) => a3 < e2) ?? 10 : "Home" === t3.key ? s2 = 10 : "End" === t3.key && (s2 = 100), void 0 !== s2 && (t3.preventDefault(), a2(k(s2, 10, 100)));
              }
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: x().markers,
          children: S2.map(
            (t3) => (0, s.jsxs)(
              "button",
              {
                type: "button",
                tabIndex: -1,
                className: x().marker,
                "data-edge": 100 === t3 || void 0,
                "data-active": t3 === e2 || void 0,
                style: { left: `${t3}%` },
                disabled: o2,
                onClick: () => a2(t3),
                "aria-label": `Alert at ${t3}%`,
                children: [t3, "%"]
              },
              t3
            )
          )
        })
      ]
    });
  }
  function E({
    title: e2 = "Spend alerts",
    project: a2 = "Production",
    scope: t2 = "Model API usage",
    spend: r2 = 3412.8,
    forecast: l2,
    period: i2 = g,
    currency: d2 = "USD",
    defaultValue: o2,
    markers: b2 = [50, 80, 100],
    destinations: j2,
    appName: A2 = "Acme Billing",
    lastSaved: P2 = "Last edited Oct 24 by Maya Chen",
    onChange: T,
    onSave: R,
    onSendTest: I,
    className: $
  }) {
    let F, z = (0, n.useId)(), D = {
      title: `${z}-title`,
      budget: `${z}-budget`,
      budgetMeta: `${z}-budget-meta`,
      threshold: `${z}-threshold`,
      hardStop: `${z}-hardstop`
    }, L = { ...y, ...j2 }, O = (0, n.useMemo)(
      () => ({ ...v, ...o2, channels: { ...v.channels, ...o2?.channels } }),
      []
    ), [B, q] = (0, n.useState)(() => w(O.budget)), [H, U] = (0, n.useState)(() => k(Math.round(O.threshold), 10, 100)), [Y, W] = (0, n.useState)(O.channels), [K, Q] = (0, n.useState)(O.hardStop), [X, Z] = (0, n.useState)(O), [V, G] = (0, n.useState)("idle"), [J, ee] = (0, n.useState)(""), [ea, et] = (0, n.useState)(0), es = (0, n.useRef)(null), en = Number.isFinite(F = parseFloat(B.replace(/[^0-9.]/g, ""))) ? Math.min(F, 1e7) : 0, er = (0, n.useMemo)(
      () => ({ budget: en, threshold: H, channels: Y, hardStop: K }),
      [en, H, Y, K]
    ), el = en > 0, ei = er.budget !== X.budget || er.threshold !== X.threshold || er.hardStop !== X.hardStop || er.channels.email !== X.channels.email || er.channels.slack !== X.channels.slack || er.channels.pagerduty !== X.channels.pagerduty, ed = "saving" === V || "testing" === V, ec = (0, n.useMemo)(() => {
      let e3 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: d2,
        maximumFractionDigits: 0
      }), a3 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: d2,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return (t3, s2 = false) => (s2 ? a3 : e3).format(t3);
    }, [d2]), eo = r2 / Math.max(1, i2.day), eu = l2 ?? eo * i2.days, ep = en * H / 100, eh = el ? k(r2 / en * 100, 0, 100) : 0, em = el ? k(eu / en * 100, 0, 100) : 0, e_ = i2.days - i2.day + 1, ef = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      if (!ef.current) {
        ef.current = true;
        return;
      }
      T?.(er), G(
        (e3) => "saved" === e3 || "tested" === e3 || "error" === e3 ? "idle" : e3
      );
    }, [er]), (0, n.useEffect)(() => () => es.current?.abort(), []);
    let eb = (() => {
      if (!el) return { key: "none", tone: "muted", label: "No budget set" };
      if (r2 >= en)
        return { key: "over", tone: "danger", label: "Over budget" };
      if (r2 >= ep)
        return { key: "past", tone: "warning", label: `Past ${H}%` };
      if (eu >= ep) {
        let e3 = k(Math.ceil(ep / eo), i2.day, i2.days);
        return {
          key: "cross",
          tone: "warning",
          icon: u.A,
          label: `Hits ${H}% ${i2.short} ${e3}`
        };
      }
      return { key: "ok", tone: "success", label: "On track" };
    })(), ex = el ? r2 > en ? {
      key: "over",
      tone: "warning",
      label: `Already ${ec(r2 - en)} over this month`
    } : {
      key: "ok",
      label: `Resets ${i2.resetsOn}, in ${e_} ${1 === e_ ? "day" : "days"}`
    } : {
      key: "invalid",
      tone: "danger",
      label: `Enter a budget above ${ec(0)}`
    }, eg = Object.keys(Y).filter((e3) => Y[e3]), ey = { email: "email", slack: "Slack", pagerduty: "PagerDuty" }, ev = async (e3) => {
      es.current?.abort();
      let a3 = new AbortController();
      es.current = a3, G("save" === e3 ? "saving" : "testing");
      try {
        let n2 = "save" === e3 ? R : I;
        if (n2) await n2(er, a3.signal);
        else {
          var t3, s2;
          await (t3 = "save" === e3 ? 700 : 900, s2 = a3.signal, new Promise((e4, a4) => {
            let n3 = setTimeout(e4, t3);
            s2.addEventListener(
              "abort",
              () => {
                clearTimeout(n3), a4(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          }));
        }
        if (a3.signal.aborted) return;
        if ("save" === e3) Z(er), G("saved");
        else {
          let e4;
          ee(
            (e4 = eg.map((e5) => ey[e5])).length <= 1 ? e4.join("") : `${e4.slice(0, -1).join(", ")} and ${e4[e4.length - 1]}`
          ), et((e5) => e5 + 1), G("tested");
        }
      } catch (e4) {
        if (e4?.name === "AbortError") return;
        G("error");
      }
    }, ej = "saving" === V ? { key: "saving", label: "Saving" } : "testing" === V ? { key: "testing", label: "Sending test alert" } : "error" === V ? {
      key: "error",
      tone: "danger",
      label: "Could not save. Try again."
    } : "saved" === V ? {
      key: "saved",
      tone: "success",
      label: R ? "Saved" : "Saved. Simulated, nothing was stored."
    } : "tested" === V ? {
      key: "tested",
      tone: "success",
      label: `Test sent to ${J}.${I ? "" : " Simulated, nothing was sent."}`
    } : el ? ei ? { key: "dirty", label: "Unsaved changes" } : { key: "clean", label: P2 } : { key: "invalid", label: "Enter a budget to save" }, eN = 100 === H, ek = eN ? "danger" : "warning", ew = eN ? K ? `${a2} used its budget. Requests paused` : `${a2} used its full budget` : `${a2} passed ${H}% of budget`, eS = [
      Y.email ? `Also emailed ${L.email}` : null,
      eN && Y.pagerduty ? `Paged ${L.pagerduty}` : null,
      eN && K ? `Blocked until ${i2.resetsOn}` : null
    ].filter(Boolean).join(" \xB7 ") || `Posted to ${L.slack} only`;
    return (0, s.jsxs)("section", {
      className: N(x().root, $),
      "aria-labelledby": D.title,
      children: [
        (0, s.jsxs)("header", {
          className: x().header,
          children: [
            (0, s.jsxs)("div", {
              className: x().heading,
              children: [
                (0, s.jsx)("h2", {
                  id: D.title,
                  className: x().title,
                  children: e2
                }),
                (0, s.jsxs)("p", {
                  className: x().meta,
                  children: [a2, " \xB7 ", t2, " in ", i2.label]
                })
              ]
            }),
            (0, s.jsx)(S, {
              id: eb.key,
              className: x().status,
              children: (0, s.jsx)(M, {
                tone: eb.tone,
                icon: eb.icon,
                children: eb.label
              })
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: N(x().section, x().budgetRow),
          children: [
            (0, s.jsxs)("div", {
              className: x().rowText,
              children: [
                (0, s.jsx)("label", {
                  htmlFor: D.budget,
                  className: x().label,
                  children: "Monthly budget"
                }),
                (0, s.jsx)(S, {
                  id: ex.key,
                  className: x().meta,
                  children: (0, s.jsx)("span", {
                    id: D.budgetMeta,
                    className: x().metaLine,
                    children: ex.tone ? (0, s.jsx)(M, { tone: ex.tone, children: ex.label }) : (0, s.jsx)("span", {
                      className: x().ellipsis,
                      children: ex.label
                    })
                  })
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: x().field,
              "data-invalid": !el || void 0,
              children: [
                (0, s.jsx)("span", {
                  className: x().affix,
                  "aria-hidden": "true",
                  children: "$"
                }),
                (0, s.jsx)("input", {
                  id: D.budget,
                  className: x().input,
                  inputMode: "decimal",
                  autoComplete: "off",
                  spellCheck: false,
                  value: B,
                  "aria-invalid": !el || void 0,
                  "aria-describedby": D.budgetMeta,
                  onChange: (e3) => q(e3.target.value.replace(/[^0-9.,]/g, "")),
                  onBlur: () => {
                    el && q(w(en));
                  },
                  onKeyDown: (e3) => {
                    if ("ArrowUp" !== e3.key && "ArrowDown" !== e3.key) return;
                    e3.preventDefault();
                    let a3 = e3.shiftKey ? 1e3 : 100;
                    q(
                      w(
                        Math.max(
                          0,
                          Math.round(
                            (en + ("ArrowUp" === e3.key ? a3 : -a3)) / a3
                          ) * a3
                        )
                      )
                    );
                  }
                }),
                (0, s.jsx)("span", {
                  className: x().affix,
                  "aria-hidden": "true",
                  children: d2
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: x().section,
          children: [
            (0, s.jsxs)("div", {
              className: x().rowHead,
              children: [
                (0, s.jsx)("span", {
                  id: D.threshold,
                  className: x().label,
                  children: "Alert at"
                }),
                (0, s.jsxs)("span", {
                  className: x().value,
                  "aria-hidden": "true",
                  children: [
                    (0, s.jsxs)("span", {
                      className: x().percent,
                      children: [H, "%"]
                    }),
                    (0, s.jsx)("span", {
                      className: x().dot,
                      children: "\xB7"
                    }),
                    (0, s.jsx)("span", { children: ec(el ? ep : 0) })
                  ]
                })
              ]
            }),
            (0, s.jsx)(C, {
              value: H,
              onChange: U,
              spendPct: eh,
              forecastPct: em,
              markers: b2,
              labelId: D.threshold,
              valueText: `${H}%, ${ec(ep)}`,
              disabled: !el,
              over: el && r2 >= en
            }),
            (0, s.jsxs)("div", {
              className: x().legend,
              children: [
                (0, s.jsxs)("span", {
                  className: x().legendItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: x().swatch,
                      "data-kind": "spend",
                      "aria-hidden": "true"
                    }),
                    (0, s.jsxs)("span", {
                      className: x().ellipsis,
                      children: ["Spent ", ec(r2, true)]
                    })
                  ]
                }),
                (0, s.jsxs)("span", {
                  className: x().legendItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: x().swatch,
                      "data-kind": "forecast",
                      "aria-hidden": "true"
                    }),
                    (0, s.jsxs)("span", {
                      className: x().ellipsis,
                      children: [
                        "Forecast ",
                        ec(eu),
                        " by ",
                        i2.short,
                        " ",
                        i2.days
                      ]
                    })
                  ]
                }),
                (0, s.jsx)("span", {
                  className: x().legendPct,
                  children: el ? `${Math.round(r2 / en * 100)}% used` : "No budget"
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: x().section,
          children: [
            (0, s.jsx)("span", { className: x().label, children: "Notify" }),
            (0, s.jsxs)("ul", {
              className: x().channels,
              children: [
                (0, s.jsxs)("li", {
                  className: x().channel,
                  children: [
                    (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      className: x().mailIcon,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsxs)("span", {
                      className: x().channelText,
                      children: [
                        (0, s.jsx)("span", {
                          className: x().channelName,
                          children: "Email"
                        }),
                        (0, s.jsx)("span", {
                          className: N(x().muted, x().ellipsis),
                          children: L.email
                        })
                      ]
                    }),
                    (0, s.jsx)(m.d, {
                      checked: Y.email,
                      onCheckedChange: (e3) => W((a3) => ({ ...a3, email: e3 })),
                      "aria-label": "Email alerts"
                    })
                  ]
                }),
                (0, s.jsxs)("li", {
                  className: x().channel,
                  children: [
                    (0, s.jsx)(_, { className: x().mark }),
                    (0, s.jsxs)("span", {
                      className: x().channelText,
                      children: [
                        (0, s.jsx)("span", {
                          className: x().channelName,
                          children: "Slack"
                        }),
                        (0, s.jsx)("span", {
                          className: N(x().muted, x().ellipsis),
                          children: L.slack
                        })
                      ]
                    }),
                    (0, s.jsx)(m.d, {
                      checked: Y.slack,
                      onCheckedChange: (e3) => W((a3) => ({ ...a3, slack: e3 })),
                      "aria-label": "Slack alerts"
                    })
                  ]
                }),
                (0, s.jsxs)("li", {
                  className: x().channel,
                  children: [
                    (0, s.jsx)(f, { className: x().mark }),
                    (0, s.jsxs)("span", {
                      className: x().channelText,
                      children: [
                        (0, s.jsx)("span", {
                          className: x().channelName,
                          children: "PagerDuty"
                        }),
                        (0, s.jsxs)("span", {
                          className: N(x().muted, x().ellipsis),
                          children: [L.pagerduty, " at 100%"]
                        })
                      ]
                    }),
                    (0, s.jsx)(m.d, {
                      checked: Y.pagerduty,
                      onCheckedChange: (e3) => W((a3) => ({ ...a3, pagerduty: e3 })),
                      "aria-label": "PagerDuty alerts"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: N(x().section, x().stopRow),
          children: [
            (0, s.jsxs)("div", {
              className: x().rowText,
              children: [
                (0, s.jsx)("span", {
                  id: D.hardStop,
                  className: x().label,
                  children: "Hard stop at 100%"
                }),
                (0, s.jsx)(S, {
                  id: K ? "on" : "off",
                  className: x().meta,
                  children: K ? (0, s.jsxs)(M, {
                    tone: "warning",
                    children: ["Requests return 429 until ", i2.resetsOn]
                  }) : (0, s.jsx)("span", {
                    className: x().ellipsis,
                    children: "Keep serving past the budget"
                  })
                })
              ]
            }),
            (0, s.jsx)(m.d, {
              checked: K,
              onCheckedChange: Q,
              "aria-labelledby": D.hardStop
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: x().section,
          children: [
            (0, s.jsxs)("div", {
              className: x().rowHead,
              children: [
                (0, s.jsx)("span", {
                  className: x().label,
                  children: "Slack preview"
                }),
                (0, s.jsxs)("span", {
                  className: N(x().muted, x().previewWhere),
                  children: [(0, s.jsx)(_, { size: 14 }), L.slack]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: x().preview,
              "data-off": !Y.slack || void 0,
              children: [
                ea > 0 ? (0, s.jsx)(
                  "span",
                  { className: x().flash, "aria-hidden": "true" },
                  ea
                ) : null,
                (0, s.jsxs)("div", {
                  className: x().message,
                  "aria-hidden": !Y.slack || void 0,
                  children: [
                    (0, s.jsx)("span", {
                      className: x().avatar,
                      "aria-hidden": "true",
                      children: A2.charAt(0)
                    }),
                    (0, s.jsxs)("div", {
                      className: x().messageBody,
                      children: [
                        (0, s.jsxs)("div", {
                          className: x().sender,
                          children: [
                            (0, s.jsx)("span", {
                              className: N(x().senderName, x().ellipsis),
                              children: A2
                            }),
                            (0, s.jsx)("span", {
                              className: x().badge,
                              children: "App"
                            }),
                            (0, s.jsx)("span", {
                              className: x().time,
                              children: ea > 0 ? "Just now" : "9:41 AM"
                            })
                          ]
                        }),
                        (0, s.jsxs)("p", {
                          className: x().headline,
                          children: [
                            (0, s.jsx)(c.A, {
                              size: 14,
                              strokeWidth: 2,
                              className: x().toneIcon,
                              "data-tone": ek,
                              "aria-hidden": "true"
                            }),
                            (0, s.jsx)("span", {
                              className: x().ellipsis,
                              children: ew
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: x().attachment,
                          "data-tone": ek,
                          children: [
                            (0, s.jsxs)("span", {
                              className: x().field2,
                              children: [
                                (0, s.jsx)("span", {
                                  className: x().fieldLabel,
                                  children: "Used"
                                }),
                                (0, s.jsxs)("span", {
                                  className: x().ellipsis,
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: x().num,
                                      children: ec(ep)
                                    }),
                                    " of ",
                                    ec(en)
                                  ]
                                })
                              ]
                            }),
                            (0, s.jsxs)("span", {
                              className: x().field2,
                              children: [
                                (0, s.jsx)("span", {
                                  className: x().fieldLabel,
                                  children: "Forecast"
                                }),
                                (0, s.jsxs)("span", {
                                  className: x().ellipsis,
                                  children: [
                                    ec(eu),
                                    " by ",
                                    i2.short,
                                    " ",
                                    i2.days
                                  ]
                                })
                              ]
                            })
                          ]
                        }),
                        (0, s.jsx)("p", {
                          className: N(x().context, x().ellipsis),
                          children: eS
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: x().previewOff,
                  "aria-hidden": Y.slack || void 0,
                  children: [
                    (0, s.jsx)(_, { size: 16 }),
                    (0, s.jsx)("span", {
                      children: "Turn on Slack to preview this alert"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("footer", {
          className: x().footer,
          children: [
            (0, s.jsx)("div", {
              className: x().footerStatus,
              role: "status",
              "aria-live": "polite",
              children: (0, s.jsx)(S, {
                id: ej.key,
                className: x().meta,
                children: ej.tone ? (0, s.jsx)(M, { tone: ej.tone, children: ej.label }) : (0, s.jsx)("span", {
                  className: x().ellipsis,
                  children: ej.label
                })
              })
            }),
            (0, s.jsxs)("div", {
              className: x().actions,
              children: [
                (0, s.jsx)(h.$, {
                  variant: "secondary",
                  size: "sm",
                  loading: "testing" === V,
                  disabled: !el || 0 === eg.length || ed,
                  onClick: () => ev("test"),
                  children: "Send test"
                }),
                (0, s.jsx)(h.$, {
                  variant: "primary",
                  size: "sm",
                  loading: "saving" === V,
                  disabled: !el || !ei || ed,
                  onClick: () => ev("save"),
                  children: "Save"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let P = E;
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
A.reg(93954, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "trending-up",
    size: 24,
    node: [
      ["path", { d: "M16 7h6v6", key: "box55l" }],
      ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("spend-alert", [1952]);
A.item("spend-alert", {entry:63671, export:"SpendAlert", kind:"block", tier:"pro", unresolved:[]});
})();