/* source-cards (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(26038, ".source-cards-simulation_panel__fvgwe{box-sizing:border-box;width:100%;max-width:720px;border:1px solid var(--border);border-radius:var(--radius-panel,26px);padding:24px 24px 16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body)}.source-cards-simulation_questionBox__g8Uws{margin-bottom:12px}.source-cards-simulation_question__LLg0O{display:grid}.source-cards-simulation_questionText__CSee3{grid-area:1/1;margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:24px;text-wrap:pretty}.source-cards-simulation_body__Gtws9{min-width:0}.source-cards-simulation_answer__2JPTX{margin:0;color:var(--foreground);font-size:var(--text-sm);line-height:23px;text-wrap:pretty}.source-cards-simulation_chunk__zQXUU{animation:source-cards-simulation_sc-chunk__XbuYX .14s var(--ease-standard) both}@keyframes source-cards-simulation_sc-chunk__XbuYX{0%{opacity:0}to{opacity:1}}.source-cards-simulation_code__Nqszp{border-radius:5px;padding:1px 5px;background:var(--surface-muted);color:var(--foreground);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.86em;letter-spacing:0}.source-cards-simulation_note__iuHVF{display:grid;min-height:18px;margin:12px 0 0;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}.source-cards-simulation_noteText__cQk3g{grid-area:1/1}@media (max-width:420px){.source-cards-simulation_panel__fvgwe{padding:16px 16px 12px}}@media (prefers-reduced-motion:reduce){.source-cards-simulation_chunk__zQXUU{animation:none}}", {"panel":"source-cards-simulation_panel__fvgwe","questionBox":"source-cards-simulation_questionBox__g8Uws","question":"source-cards-simulation_question__LLg0O","questionText":"source-cards-simulation_questionText__CSee3","body":"source-cards-simulation_body__Gtws9","answer":"source-cards-simulation_answer__2JPTX","chunk":"source-cards-simulation_chunk__zQXUU","sc-chunk":"source-cards-simulation_sc-chunk__XbuYX","code":"source-cards-simulation_code__Nqszp","note":"source-cards-simulation_note__iuHVF","noteText":"source-cards-simulation_noteText__cQk3g"});
A.regCss(32186, ".source-cards_root__RzIZ2{--sc-card-h:84px;--sc-radius:14px;--sc-mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;position:relative;container-type:inline-size;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.source-cards_srOnly__xfO59{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.source-cards_header__JLVWg{display:flex;min-height:28px;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.source-cards_statusLine__iTfS4{display:flex;min-width:0;flex:1;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-sm);line-height:20px}.source-cards_statusIcon__EWnOp{position:relative;display:grid;width:14px;height:14px;flex:none}.source-cards_statusGlyph__RUw7_{position:absolute;inset:0;display:grid;place-items:center}.source-cards_statusLine__iTfS4[data-status=searching] .source-cards_statusIcon__EWnOp{color:var(--text-muted)}.source-cards_statusLine__iTfS4[data-status=done] .source-cards_statusIcon__EWnOp{color:var(--text-secondary)}.source-cards_statusLine__iTfS4[data-status=empty] .source-cards_statusIcon__EWnOp{color:var(--text-muted)}.source-cards_statusLine__iTfS4[data-status=error] .source-cards_statusIcon__EWnOp{color:var(--danger)}.source-cards_statusText__cb0jY{display:flex;min-width:0;align-items:baseline;gap:4px;white-space:nowrap}.source-cards_statusLabel__Pm8l5{display:inline-flex;flex:none;align-items:baseline;gap:4px;color:var(--foreground)}.source-cards_statusLine__iTfS4[data-status=searching] .source-cards_statusLabel__Pm8l5{color:var(--text-secondary)}.source-cards_shimmer__WVKK9{color:var(--foreground)}.source-cards_statusCount__R_N_u{color:var(--text-secondary)}.source-cards_statusDetail__6Q1cd{min-width:0;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis}.source-cards_roll__vgX9X{position:relative;display:inline-flex;justify-content:flex-end;font-variant-numeric:tabular-nums}.source-cards_rollValue__3lPBJ{display:inline-block}.source-cards_spinner__oMz2S{animation:source-cards_sc-spin__PjL8V .8s linear infinite}@keyframes source-cards_sc-spin__PjL8V{to{transform:rotate(1turn)}}.source-cards_headerAction__NFhY7{display:inline-flex;flex:none}.source-cards_action__X7qqN.source-cards_action__X7qqN{min-height:28px;gap:6px;padding-inline:10px 12px;font-size:var(--text-xs)}.source-cards_toggle__Rd1HK{display:inline-flex;height:28px;align-items:center;gap:4px;margin:0 -8px 0 0;border:0;border-radius:8px;padding:0 8px;background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;font-size:var(--text-xs);-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.source-cards_toggleLabel__JrYf5{display:inline-grid;justify-items:end}.source-cards_toggleLabel__JrYf5>*{grid-area:1/1;white-space:nowrap}.source-cards_toggleIcon__yRXlC{color:var(--text-muted);transition:transform var(--duration-standard) var(--ease-standard)}.source-cards_toggle__Rd1HK[aria-expanded=true] .source-cards_toggleIcon__yRXlC{transform:rotate(180deg)}.source-cards_toggle__Rd1HK:active{background:var(--surface-muted)}@media (hover:hover) and (pointer:fine){.source-cards_toggle__Rd1HK:hover{background:color-mix(in oklab,var(--surface-muted) 80%,transparent);color:var(--foreground)}}.source-cards_answer__V5RRU:not(:empty){padding-bottom:16px}.source-cards_chip__DTjtr,.source-cards_cite__a1lCt{display:inline-grid;min-width:18px;height:18px;place-items:center;border-radius:6px;padding:0 5px;background:var(--surface-muted);color:var(--text-secondary);font-family:var(--font-body);font-size:11px;font-variant-numeric:tabular-nums;font-weight:500;letter-spacing:0;line-height:18px;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.source-cards_cite__a1lCt{position:relative;top:-1px;min-width:17px;height:17px;margin:0 1px;border:0;padding:0 4px;cursor:pointer;line-height:17px;vertical-align:baseline;-webkit-tap-highlight-color:transparent;--focus-outline-offset:1px}.source-cards_cite__a1lCt:after{position:absolute;inset:-6px -2px;content:\"\"}.source-cards_cite__a1lCt[data-active]{background:var(--accent-subtle);color:var(--accent)}@media (hover:hover) and (pointer:fine){.source-cards_cite__a1lCt:not([data-active]):hover{background:color-mix(in oklab,var(--foreground) 10%,var(--surface-muted));color:var(--foreground)}}.source-cards_grid__93Ilr{position:relative;display:grid;grid-template-columns:repeat(var(--sc-cols,4),minmax(0,1fr));gap:8px;margin:0;padding:0;list-style:none}.source-cards_slot__49FhI{position:relative;display:grid;min-width:0;min-height:var(--sc-card-h)}.source-cards_slot__49FhI[data-open]{z-index:3}.source-cards_card__W9dql{position:relative;display:flex;box-sizing:border-box;width:100%;height:var(--sc-card-h);min-width:0;flex-direction:column;gap:4px;margin:0;border:1px solid var(--border-subtle);border-radius:var(--sc-radius);padding:12px;--sc-card-bg:var(--surface);background:var(--sc-card-bg);color:inherit;cursor:pointer;font:inherit;text-align:left;text-decoration:none;-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.source-cards_card__W9dql:active{--sc-card-bg:var(--surface-muted)}@media (hover:hover) and (pointer:fine){.source-cards_card__W9dql:hover{border-color:var(--border);--sc-card-bg:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}}.source-cards_card__W9dql[data-highlighted]{border-color:color-mix(in oklab,var(--accent) 70%,var(--border));--sc-card-bg:color-mix(in oklab,var(--accent) 6%,var(--surface))}.source-cards_card__W9dql[data-highlighted] .source-cards_cardChip__vw_Ns{background:var(--accent-subtle);color:var(--accent)}.source-cards_cardTop__T1_8V{display:flex;height:18px;min-width:0;align-items:center;gap:8px;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}.source-cards_cardMark__DeNhP{display:grid;width:14px;height:14px;flex:none;place-items:center;color:var(--foreground)}.source-cards_domain__Iy2O3{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.source-cards_cardChip__vw_Ns{flex:none;margin-right:-4px}.source-cards_cardTitle__pIoNu{display:-webkit-box;overflow:hidden;color:var(--foreground);font-size:13px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow-wrap:anywhere}.source-cards_skeleton___3cEr{position:absolute;inset:0;display:flex;box-sizing:border-box;flex-direction:column;border:1px solid var(--border-subtle);border-radius:var(--sc-radius);padding:12px;pointer-events:none}.source-cards_skeletonTop__TMxRF{display:flex;height:18px;flex:none;align-items:center;gap:8px;margin-bottom:4px}.source-cards_bar__w99tA{display:block;height:8px;flex:none;border-radius:4px;background:var(--surface-muted);animation:source-cards_sc-pulse__VC4Dc 1.4s var(--ease-standard) infinite alternate}.source-cards_skeleton___3cEr>.source-cards_bar__w99tA{margin-block:5px}.source-cards_skeletonTop__TMxRF .source-cards_bar__w99tA:first-child{height:14px;border-radius:999px}.source-cards_skeletonTop__TMxRF .source-cards_barMarks__kK0bg.source-cards_barMarks__kK0bg{width:52px;height:20px}@keyframes source-cards_sc-pulse__VC4Dc{0%{opacity:1}to{opacity:.45}}.source-cards_stack__b_s9q{justify-content:space-between}.source-cards_stackMarks__KnaMz{display:flex;height:18px;align-items:center;padding-left:1px}.source-cards_stackMark__qTeh1{position:relative;display:grid;width:20px;height:20px;box-sizing:border-box;flex:none;place-items:center;margin-right:-5px;border-radius:50%;background:var(--surface-raised,var(--surface));box-shadow:0 0 0 2px var(--sc-card-bg,var(--surface)),inset 0 0 0 1px var(--border-subtle);color:var(--foreground);transition:box-shadow var(--duration-fast) var(--ease-standard)}.source-cards_stackText__qGWs3{display:flex;min-width:0;flex-direction:column}.source-cards_stackCount__fiLNJ{display:block;color:var(--foreground);font-size:13px;line-height:18px}.source-cards_stackSites__YwcRY{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);line-height:18px;text-overflow:ellipsis;white-space:nowrap}.source-cards_preview__5vfv2{position:absolute;z-index:4;display:flex;box-sizing:border-box;width:min(304px,calc(100cqw));flex-direction:column;gap:4px;border:1px solid var(--border-subtle);border-radius:16px;padding:12px 16px;background:var(--surface-raised,var(--surface));box-shadow:var(--shadow-floating);pointer-events:none;text-align:left}.source-cards_preview__5vfv2[data-side=top]{bottom:calc(100% + 8px)}.source-cards_preview__5vfv2[data-side=bottom]{top:calc(100% + 8px)}.source-cards_preview__5vfv2[data-align=start]{left:0}.source-cards_preview__5vfv2[data-align=end]{right:0}.source-cards_previewHead__ar5Rf{display:flex;min-width:0;align-items:center;gap:8px;color:var(--foreground);font-size:var(--text-xs);line-height:18px}.source-cards_previewSite__Fc73j{min-width:0;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.source-cards_previewDate___n26r{flex:none;margin-left:auto;color:var(--text-muted)}.source-cards_previewTitle__U87Bt{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:20px}.source-cards_previewSnippet__uRpHX{display:-webkit-box;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:4}.source-cards_previewUrl__Jt_LD{display:flex;min-width:0;align-items:center;gap:4px;margin-top:4px;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}.source-cards_previewPath__aI6r_{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (prefers-reduced-motion:reduce){.source-cards_bar__w99tA{animation:none}}@media (prefers-reduced-motion:reduce){.source-cards_spinner__oMz2S{animation-duration:1.6s}}", {"root":"source-cards_root__RzIZ2","srOnly":"source-cards_srOnly__xfO59","header":"source-cards_header__JLVWg","statusLine":"source-cards_statusLine__iTfS4","statusIcon":"source-cards_statusIcon__EWnOp","statusGlyph":"source-cards_statusGlyph__RUw7_","statusText":"source-cards_statusText__cb0jY","statusLabel":"source-cards_statusLabel__Pm8l5","shimmer":"source-cards_shimmer__WVKK9","statusCount":"source-cards_statusCount__R_N_u","statusDetail":"source-cards_statusDetail__6Q1cd","roll":"source-cards_roll__vgX9X","rollValue":"source-cards_rollValue__3lPBJ","spinner":"source-cards_spinner__oMz2S","sc-spin":"source-cards_sc-spin__PjL8V","headerAction":"source-cards_headerAction__NFhY7","action":"source-cards_action__X7qqN","toggle":"source-cards_toggle__Rd1HK","toggleLabel":"source-cards_toggleLabel__JrYf5","toggleIcon":"source-cards_toggleIcon__yRXlC","answer":"source-cards_answer__V5RRU","chip":"source-cards_chip__DTjtr","cite":"source-cards_cite__a1lCt","grid":"source-cards_grid__93Ilr","slot":"source-cards_slot__49FhI","card":"source-cards_card__W9dql","cardChip":"source-cards_cardChip__vw_Ns","cardTop":"source-cards_cardTop__T1_8V","cardMark":"source-cards_cardMark__DeNhP","domain":"source-cards_domain__Iy2O3","cardTitle":"source-cards_cardTitle__pIoNu","skeleton":"source-cards_skeleton___3cEr","skeletonTop":"source-cards_skeletonTop__TMxRF","bar":"source-cards_bar__w99tA","sc-pulse":"source-cards_sc-pulse__VC4Dc","barMarks":"source-cards_barMarks__kK0bg","stack":"source-cards_stack__b_s9q","stackMarks":"source-cards_stackMarks__KnaMz","stackMark":"source-cards_stackMark__qTeh1","stackText":"source-cards_stackText__qGWs3","stackCount":"source-cards_stackCount__fiLNJ","stackSites":"source-cards_stackSites__YwcRY","preview":"source-cards_preview__5vfv2","previewHead":"source-cards_previewHead__ar5Rf","previewSite":"source-cards_previewSite__Fc73j","previewDate":"source-cards_previewDate___n26r","previewTitle":"source-cards_previewTitle__U87Bt","previewSnippet":"source-cards_previewSnippet__uRpHX","previewUrl":"source-cards_previewUrl__Jt_LD","previewPath":"source-cards_previewPath__aI6r_"});
A.reg(37058, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "search-x",
    size: 24,
    node: [
      ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
      ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(50626, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = n(51811);
  let o = {
    name: "globe",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "path",
        { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
      ],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]
  };
  o.node;
  let a = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(66275, ".demo{display:flex;width:100%;flex-direction:column;align-items:center;gap:16px}", {"demo":"demo"});
A.reg(83134, function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { SourceCardsDemo: () => G, default: () => K });
  var s = r(95155), i = r(12115), a = r(66558), n = r(18310), o = r(80642), l = r(25354), c = r(7770);
  let u = [
    {
      title: "Check the webhook signatures",
      url: "https://docs.stripe.com/webhooks/signature",
      published: "Oct 9, 2026",
      snippet: "Stripe signs every webhook event it sends by including a signature in the Stripe-Signature header. Verify it with constructEvent, the raw request body and your endpoint's secret before you trust the payload."
    },
    {
      title: "Request: text() method",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Request/text",
      published: "Sep 18, 2026",
      snippet: "The text() method of the Request interface reads the request body and returns it as a promise that resolves with a string. The body is always decoded using UTF-8."
    },
    {
      title: 'constructEvent throws "No signatures found" in App Router',
      url: "https://github.com/stripe/stripe-node/issues/2241",
      site: "GitHub \xB7 stripe/stripe-node",
      published: "Oct 21, 2026",
      snippet: "The body had already been parsed with request.json(), so the string passed to constructEvent no longer matched the signed bytes. Switching to await request.text() fixed it on Next.js 16."
    },
    {
      title: "Stripe webhook signature verification failed in a Next.js route handler",
      url: "https://stackoverflow.com/questions/79184412/stripe-webhook-signature-verification-failed-nextjs",
      published: "Oct 3, 2026",
      snippet: "Accepted answer: do not parse the body. Read it as text, pass the string and the stripe-signature header to constructEvent, and use the whsec_ secret for this endpoint, not your API key."
    },
    {
      title: "Handling Stripe webhooks in Vercel Functions",
      url: "https://vercel.com/guides/stripe-webhooks-vercel-functions",
      published: "Aug 27, 2026",
      snippet: "Run the route on the Node.js runtime, read the raw body, verify the event and respond with a 2xx before doing slow work. Queue anything longer so the delivery never times out."
    },
    {
      title: "HMAC",
      url: "https://en.wikipedia.org/wiki/HMAC",
      published: "Oct 12, 2026",
      snippet: "In cryptography, an HMAC is a specific type of message authentication code involving a cryptographic hash function and a secret cryptographic key. It verifies both the data integrity and the authenticity of a message."
    },
    {
      title: "Receive Stripe events in your webhook endpoint",
      url: "https://docs.stripe.com/webhooks",
      published: "Oct 9, 2026",
      snippet: "In live mode, Stripe retries undelivered events with exponential backoff for up to three days. Return a successful status code quickly, before any complex logic that could cause a timeout."
    }
  ], d = [
    "Stripe signs the exact bytes it sends, so read the raw body with ",
    { code: "await request.text()" },
    " before anything parses it ",
    { cite: 1 },
    { cite: 2 },
    ". ",
    "Calling ",
    { code: "request.json()" },
    " first re-serializes the payload, the HMAC no longer matches and ",
    { code: "constructEvent" },
    " throws ",
    { cite: 3 },
    { cite: 4 },
    ". ",
    "Pass that string with the ",
    { code: "stripe-signature" },
    " header and the endpoint's ",
    { code: "whsec_" },
    " secret, keep the route on the Node.js runtime and return a 2xx quickly, since Stripe retries failed deliveries for up to three days ",
    { cite: 5 },
    { cite: 7 },
    ". ",
    "The signature itself is an HMAC-SHA256 of the timestamp and payload ",
    { cite: 6 },
    "."
  ], h = {
    github: {
      d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    },
    mdn: {
      d: "m21.538 1.1-6.745 21.8h-2.77L18.77 1.1ZM24 1.1v21.8h-2.462V1.1Zm-12 0v21.8H9.538V1.1Zm-2.462 0L2.77 22.9H0L6.746 1.1Z"
    },
    stripe: {
      fill: "#635BFF",
      d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
    },
    vercel: { d: "m12 1.608 12 20.784H0Z" },
    wikipedia: {
      d: "M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"
    },
    stackoverflow: {
      fill: "#F58025",
      d: "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"
    }
  }, p = {
    github: "GitHub",
    mdn: "MDN Web Docs",
    stripe: "Stripe Docs",
    vercel: "Vercel",
    wikipedia: "Wikipedia",
    stackoverflow: "Stack Overflow"
  }, m = [
    [/(^|\.)github\.com$/, "github"],
    [/(^|\.)developer\.mozilla\.org$/, "mdn"],
    [/(^|\.)stripe\.com$/, "stripe"],
    [/(^|\.)vercel\.com$/, "vercel"],
    [/(^|\.)wikipedia\.org$/, "wikipedia"],
    [/(^|\.)stackoverflow\.com$/, "stackoverflow"]
  ];
  function f(e2) {
    try {
      return new URL(e2).hostname.replace(/^www\./, "");
    } catch {
      return e2.replace(/^https?:\/\//, "").split("/")[0] ?? e2;
    }
  }
  function y({ mark: e2, icon: t2, host: r2, size: i2 = 14 }) {
    if (t2)
      return (0, s.jsx)("span", {
        "aria-hidden": "true",
        style: {
          display: "inline-grid",
          width: i2,
          height: i2,
          placeItems: "center",
          flex: "none"
        },
        children: t2
      });
    if (!e2)
      return (0, s.jsxs)("svg", {
        width: i2,
        height: i2,
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        style: { flex: "none", display: "block" },
        children: [
          (0, s.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: "currentColor",
            opacity: ".14"
          }),
          (0, s.jsx)("text", {
            x: "8",
            y: "11.4",
            textAnchor: "middle",
            fontSize: "9.5",
            fontWeight: "500",
            fill: "currentColor",
            fontFamily: "inherit",
            children: (r2[0] ?? "?").toUpperCase()
          })
        ]
      });
    let { d: a2, fill: n2 } = h[e2];
    return (0, s.jsx)("svg", {
      width: i2,
      height: i2,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      style: { flex: "none", display: "block" },
      children: (0, s.jsx)("path", { d: a2, fill: n2 ?? "currentColor" })
    });
  }
  var g = r(92171), x = r(35484), v = r(37058), _ = r(50626), w = r(92298), j = r(12363), b = r(9751), k = r(51288), N = r(52898), S = r(32186), T = r.n(S);
  let C = (...e2) => e2.filter(Boolean).join(" "), R = [...c.T.ease.enter], M = (0, i.createContext)(null);
  function $(e2, t2) {
    let r2, s2 = f(e2.url), i2 = e2.mark ?? (r2 = f(e2.url), m.find(([e3]) => e3.test(r2))?.[1]), a2 = "";
    try {
      let t3 = new URL(e2.url);
      a2 = "/" === t3.pathname ? "" : decodeURIComponent(t3.pathname);
    } catch {
    }
    let n2 = (function(e3) {
      let t3 = e3.split(".");
      if (t3.length <= 2 || /^\d+$/.test(t3[t3.length - 1])) return e3;
      let r3 = 2 === t3[t3.length - 1].length && t3[t3.length - 2].length <= 3;
      return t3.slice(r3 ? -3 : -2).join(".");
    })(s2);
    return {
      key: e2.id ?? `${e2.url}#${t2}`,
      n: t2 + 1,
      source: e2,
      host: s2,
      domain: n2,
      path: a2,
      site: e2.site ?? (i2 ? p[i2] : s2),
      mark: i2
    };
  }
  function A({ n: e2, onClick: t2, className: r2 }) {
    let a2 = (0, i.useContext)(M), n2 = a2?.sources[e2 - 1], o2 = a2?.highlighted === e2;
    return (0, s.jsx)("button", {
      type: "button",
      className: C(T().cite, r2),
      "data-active": o2 || void 0,
      "aria-label": n2 ? `Source ${e2}: ${n2.source.title}, ${n2.host}` : `Source ${e2}`,
      onClick: (r3) => {
        a2?.highlight(e2), t2?.(r3);
      },
      children: e2
    });
  }
  function L(e2) {
    let t2 = (0, i.useRef)(null), r2 = (0, i.useRef)(null);
    return (0, i.useEffect)(() => {
      let s2, i2 = t2.current, a2 = r2.current;
      if (!i2 || !a2 || "u" < typeof ResizeObserver) return;
      let n2 = a2.offsetHeight, o2 = a2.offsetWidth, l2 = () => {
        i2.style.height = "", i2.style.overflow = "", s2 = void 0;
      }, c2 = new ResizeObserver(() => {
        let t3 = a2.offsetHeight, r3 = a2.offsetWidth, c3 = r3 !== o2;
        if (o2 = r3, t3 === n2) return;
        let u2 = s2 ? i2.getBoundingClientRect().height : n2;
        (n2 = t3, s2?.stop(), e2 || c3) ? l2() : (i2.style.overflow = "clip", i2.style.overflowClipMargin = "8px", s2 = (0, g.i)(
          i2,
          { height: [u2, t3] },
          {
            type: "spring",
            visualDuration: 0.3,
            bounce: 0,
            onComplete: l2
          }
        ));
      });
      return c2.observe(a2), () => {
        c2.disconnect(), s2?.stop();
      };
    }, [e2]), { outerRef: t2, innerRef: r2 };
  }
  function z() {
    return (0, s.jsxs)("svg", {
      className: T().spinner,
      width: 14,
      height: 14,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".22",
          strokeWidth: "1.75"
        }),
        (0, s.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function E({ value: e2, reduced: t2 }) {
    let r2 = String(e2);
    return (0, s.jsx)("span", {
      className: T().roll,
      style: { minWidth: `${r2.length}ch` },
      children: (0, s.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: (0, s.jsx)(
          l.PY1.span,
          {
            className: T().rollValue,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 5 },
            animate: { opacity: 1, y: 0 },
            exit: t2 ? { opacity: 0 } : { opacity: 0, y: -5 },
            transition: { duration: t2 ? 0.1 : 0.16, ease: R },
            children: r2
          },
          r2
        )
      })
    });
  }
  function P({
    sources: e2 = [],
    status: t2 = "done",
    total: r2,
    query: a2,
    duration: c2,
    max: u2 = 3,
    expanded: d2,
    defaultExpanded: h2 = false,
    onExpandedChange: p2,
    highlighted: m2,
    onHighlightChange: f2,
    onSourceClick: g2,
    onRetry: b2,
    error: S2,
    hideStatus: A2 = false,
    children: I2,
    label: Y2 = "Sources",
    className: D2
  }) {
    let H2 = (0, n.I)() ?? false, O2 = (0, i.useId)(), F2 = (0, i.useRef)(null), B2 = (0, i.useMemo)(() => e2.map($), [e2]), V2 = B2.length, U2 = "searching" === t2, G2 = Math.max(1, u2), [K2, X] = (0, i.useState)(h2), Z = d2 ?? K2, J = (0, i.useCallback)(
      (e3) => {
        void 0 === d2 && X(e3), p2?.(e3);
      },
      [d2, p2]
    ), [Q, ee] = (0, i.useState)({ n: null, at: 0 }), et = void 0 !== m2 ? m2 : Q.n, er = (0, i.useCallback)(
      (e3) => {
        void 0 === m2 && ee((t3) => ({ n: e3, at: t3.at + 1 })), f2?.(e3), null !== e3 && e3 > G2 && e3 <= V2 && !Z && J(true);
      },
      [m2, f2, G2, V2, Z, J]
    );
    (0, i.useEffect)(() => {
      if (void 0 !== m2 || null === Q.n) return;
      let e3 = window.setTimeout(() => ee((e4) => ({ ...e4, n: null })), 2600);
      return () => window.clearTimeout(e3);
    }, [m2, Q]);
    let [es, ei] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      let e3 = requestAnimationFrame(() => ei(true));
      return () => cancelAnimationFrame(e3);
    }, []);
    let [ea, en] = (0, i.useState)(null), eo = (0, i.useRef)({ lastClosed: 0 }), el = () => {
      window.clearTimeout(eo.current.open), window.clearTimeout(eo.current.close);
    }, ec = (e3, t3) => {
      let r3 = F2.current, s2 = t3.getBoundingClientRect(), i2 = r3?.getBoundingClientRect() ?? s2;
      return {
        n: e3,
        align: s2.left - i2.left + 304 > i2.width + 1 ? "end" : "start",
        side: s2.top < 220 ? "bottom" : "top"
      };
    }, eu = (e3, t3, r3, s2 = false) => {
      el();
      let i2 = null !== ea || r3 - eo.current.lastClosed < 400;
      s2 || i2 ? en(ec(e3, t3)) : eo.current.open = window.setTimeout(() => en(ec(e3, t3)), 320);
    }, ed = (e3 = 80) => {
      el(), eo.current.close = window.setTimeout(() => {
        en(null), eo.current.lastClosed = performance.now();
      }, e3);
    };
    (0, i.useEffect)(() => () => el(), []);
    let eh = U2 ? Math.max(V2, r2 ?? G2) : V2, ep = Z ? B2 : B2.slice(0, G2), em = Z ? eh : Math.min(eh, G2), ef = Z ? [] : B2.slice(G2), ey = !Z && eh > G2, eg = V2 > G2 && (!U2 || Z), ex = !U2 && "error" !== t2 && 0 === V2, ev = em > 0 || ey, { outerRef: e_, innerRef: ew } = L(H2), { outerRef: ej, innerRef: eb } = L(H2), ek = U2 ? "searching" : "error" === t2 ? "error" : ex ? "empty" : "done", eN = "searching" === ek ? `Searching${a2 ? ` for ${a2}` : ""}` : "error" === ek ? `Search failed. ${S2 ?? ""}`.trim() : "empty" === ek ? "No sources found" : `${V2} ${1 === V2 ? "source" : "sources"} found`, eS = { opacity: 0, transition: { duration: 0.12, ease: R } }, eT = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.1 } },
      transition: { duration: 0.16, ease: R }
    }, eC = "searching" === ek ? (0, s.jsx)(z, {}) : "error" === ek ? (0, s.jsx)(x.A, { size: 14, strokeWidth: 1.75 }) : "empty" === ek ? (0, s.jsx)(v.A, { size: 14, strokeWidth: 1.75 }) : (0, s.jsx)(_.A, { size: 14, strokeWidth: 1.75 }), eR = "searching" === ek ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(N.n, {
          className: T().shimmer,
          children: "Searching"
        }),
        void 0 !== r2 || V2 > 0 ? (0, s.jsxs)("span", {
          className: T().statusCount,
          children: [
            (0, s.jsx)(E, { value: V2, reduced: H2 }),
            void 0 !== r2 ? (0, s.jsxs)(s.Fragment, {
              children: [" of ", Math.max(r2, V2)]
            }) : " found"
          ]
        }) : null
      ]
    }) : "error" === ek ? (0, s.jsx)("span", { children: "Search failed" }) : "empty" === ek ? (0, s.jsx)("span", { children: "No sources found" }) : (0, s.jsxs)("span", {
      children: [
        (0, s.jsx)(E, { value: V2, reduced: H2 }),
        " ",
        1 === V2 ? "source" : "sources"
      ]
    }), eM = "error" === ek ? S2 : "done" === ek ? void 0 !== c2 ? `${(c2 / 1e3).toFixed(1)}s` : void 0 : a2, e$ = "error" === ek && b2 ? (0, s.jsxs)(
      k.$,
      {
        variant: "secondary",
        size: "sm",
        className: T().action,
        onClick: b2,
        children: [
          (0, s.jsx)(w.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          "Retry"
        ]
      },
      "retry"
    ) : "empty" === ek && b2 ? (0, s.jsxs)(
      k.$,
      {
        variant: "secondary",
        size: "sm",
        className: T().action,
        onClick: b2,
        children: [
          (0, s.jsx)(w.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          "Search again"
        ]
      },
      "again"
    ) : eg ? (0, s.jsxs)(
      "button",
      {
        type: "button",
        className: T().toggle,
        "aria-expanded": Z,
        "aria-controls": `${O2}-list`,
        onClick: () => J(!Z),
        children: [
          (0, s.jsx)("span", {
            className: T().toggleLabel,
            children: (0, s.jsx)(o.N, {
              initial: false,
              mode: "popLayout",
              children: (0, s.jsx)(
                l.PY1.span,
                {
                  ...eT,
                  children: Z ? "Show fewer" : `Show all ${V2}`
                },
                Z ? "less" : "all"
              )
            })
          }),
          (0, s.jsx)(j.A, {
            size: 14,
            strokeWidth: 1.75,
            className: T().toggleIcon,
            "aria-hidden": "true"
          })
        ]
      },
      "toggle"
    ) : null, eA = (0, i.useMemo)(
      () => ({ sources: B2, highlighted: et, highlight: er }),
      [B2, et, er]
    );
    return (0, s.jsx)(M.Provider, {
      value: eA,
      children: (0, s.jsxs)("div", {
        ref: F2,
        className: C(T().root, D2),
        onKeyDown: (e3) => {
          "Escape" === e3.key && ea && (e3.stopPropagation(), en(null));
        },
        children: [
          (0, s.jsx)("span", {
            className: T().srOnly,
            "aria-live": "polite",
            children: eN
          }),
          A2 ? null : (0, s.jsxs)("div", {
            className: T().header,
            children: [
              (0, s.jsxs)("div", {
                className: T().statusLine,
                "data-status": ek,
                children: [
                  (0, s.jsx)("span", {
                    className: T().statusIcon,
                    "aria-hidden": "true",
                    children: (0, s.jsx)(o.N, {
                      initial: false,
                      mode: "popLayout",
                      children: (0, s.jsx)(
                        l.PY1.span,
                        { className: T().statusGlyph, ...eT, children: eC },
                        ek
                      )
                    })
                  }),
                  (0, s.jsx)(o.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, s.jsxs)(
                      l.PY1.span,
                      {
                        className: T().statusText,
                        ...eT,
                        children: [
                          (0, s.jsx)("span", {
                            className: T().statusLabel,
                            children: eR
                          }),
                          eM ? (0, s.jsxs)("span", {
                            className: T().statusDetail,
                            children: [
                              (0, s.jsx)("span", {
                                "aria-hidden": "true",
                                children: "\xB7"
                              }),
                              " ",
                              eM
                            ]
                          }) : null
                        ]
                      },
                      ek
                    )
                  })
                ]
              }),
              (0, s.jsx)(o.N, {
                initial: false,
                mode: "popLayout",
                children: e$ ? (0, s.jsx)(
                  l.PY1.span,
                  { className: T().headerAction, ...eT, children: e$ },
                  "error" === ek || "empty" === ek ? ek : "toggle"
                ) : null
              })
            ]
          }),
          void 0 !== I2 ? (0, s.jsx)("div", {
            ref: ej,
            children: (0, s.jsx)("div", {
              ref: eb,
              className: T().answer,
              children: I2
            })
          }) : null,
          (0, s.jsx)("div", {
            ref: e_,
            children: (0, s.jsx)("div", {
              ref: ew,
              children: (0, s.jsx)(o.N, {
                initial: false,
                children: ev ? (0, s.jsx)(
                  l.PY1.ul,
                  {
                    id: `${O2}-list`,
                    className: T().grid,
                    "aria-label": Y2,
                    "aria-busy": U2 || void 0,
                    style: { "--sc-cols": G2 + 1 },
                    exit: { opacity: 0, transition: { duration: 0.12 } },
                    children: (0, s.jsxs)(o.N, {
                      initial: false,
                      mode: "popLayout",
                      children: [
                        Array.from({ length: em }, (e3, t3) => {
                          let r3, i2 = ep[t3], a3 = i2 && ea?.n === i2.n ? ea : null;
                          return (0, s.jsxs)(
                            l.PY1.li,
                            {
                              className: T().slot,
                              "data-open": a3 ? "" : void 0,
                              exit: eS,
                              children: [
                                (0, s.jsx)(o.N, {
                                  initial: false,
                                  children: i2 ? null : (0, s.jsxs)(
                                    l.PY1.span,
                                    {
                                      className: T().skeleton,
                                      "aria-hidden": "true",
                                      initial: { opacity: 0 },
                                      animate: { opacity: 1 },
                                      exit: {
                                        opacity: 0,
                                        transition: { duration: 0.12 }
                                      },
                                      transition: { duration: 0.16 },
                                      children: [
                                        (0, s.jsxs)("span", {
                                          className: T().skeletonTop,
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: T().bar,
                                              style: { width: 14 }
                                            }),
                                            (0, s.jsx)("span", {
                                              className: T().bar,
                                              style: { width: "44%" }
                                            })
                                          ]
                                        }),
                                        (0, s.jsx)("span", {
                                          className: T().bar,
                                          style: { width: "88%" }
                                        }),
                                        (0, s.jsx)("span", {
                                          className: T().bar,
                                          style: { width: "62%" }
                                        })
                                      ]
                                    },
                                    "skeleton"
                                  )
                                }),
                                i2 ? (0, s.jsx)(
                                  q,
                                  {
                                    item: i2,
                                    highlighted: et === i2.n,
                                    enter: es,
                                    reduced: H2,
                                    describedBy: a3 ? `${O2}-preview-${i2.n}` : void 0,
                                    onSourceClick: g2,
                                    handlers: (r3 = i2.n, {
                                      onPointerEnter: (e4) => {
                                        "mouse" === e4.pointerType && eu(
                                          r3,
                                          e4.currentTarget,
                                          e4.timeStamp
                                        );
                                      },
                                      onPointerLeave: (e4) => {
                                        "mouse" === e4.pointerType && ed();
                                      },
                                      onFocus: (e4) => {
                                        e4.currentTarget.matches(
                                          ":focus-visible"
                                        ) && eu(
                                          r3,
                                          e4.currentTarget,
                                          e4.timeStamp,
                                          true
                                        );
                                      },
                                      onBlur: () => ed(0)
                                    })
                                  },
                                  i2.key
                                ) : null,
                                (0, s.jsx)(o.N, {
                                  children: a3 && i2 ? (0, s.jsx)(
                                    W,
                                    {
                                      id: `${O2}-preview-${i2.n}`,
                                      item: i2,
                                      placement: a3,
                                      reduced: H2
                                    },
                                    "preview"
                                  ) : null
                                })
                              ]
                            },
                            `slot-${t3}`
                          );
                        }),
                        ey ? (0, s.jsxs)(
                          l.PY1.li,
                          {
                            className: T().slot,
                            exit: eS,
                            children: [
                              (0, s.jsx)(o.N, {
                                initial: false,
                                children: ef.length ? null : (0, s.jsxs)(
                                  l.PY1.span,
                                  {
                                    className: T().skeleton,
                                    "aria-hidden": "true",
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: {
                                      opacity: 0,
                                      transition: {
                                        duration: 0.12
                                      }
                                    },
                                    transition: { duration: 0.16 },
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: T().skeletonTop,
                                        children: (0, s.jsx)(
                                          "span",
                                          {
                                            className: C(
                                              T().bar,
                                              T().barMarks
                                            )
                                          }
                                        )
                                      }),
                                      (0, s.jsx)("span", {
                                        className: T().bar,
                                        style: { width: "46%" }
                                      }),
                                      (0, s.jsx)("span", {
                                        className: T().bar,
                                        style: { width: "70%" }
                                      })
                                    ]
                                  },
                                  "skeleton"
                                )
                              }),
                              ef.length ? (0, s.jsxs)(l.PY1.button, {
                                type: "button",
                                className: C(T().card, T().stack),
                                "aria-expanded": false,
                                "aria-controls": `${O2}-list`,
                                "aria-label": `Show ${ef.length} more ${1 === ef.length ? "source" : "sources"}: ${ef.map((e3) => e3.site).join(", ")}`,
                                initial: !!es && { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: {
                                  duration: 0.18,
                                  ease: R
                                },
                                onClick: () => J(true),
                                children: [
                                  (0, s.jsx)("span", {
                                    className: T().stackMarks,
                                    "aria-hidden": "true",
                                    children: (0, s.jsx)(o.N, {
                                      initial: false,
                                      children: ef.slice(0, 3).map(
                                        (e3, t3) => (0, s.jsx)(
                                          l.PY1.span,
                                          {
                                            className: T().stackMark,
                                            style: {
                                              zIndex: 3 - t3
                                            },
                                            initial: H2 ? { opacity: 0 } : {
                                              opacity: 0,
                                              scale: 0.7
                                            },
                                            animate: {
                                              opacity: 1,
                                              scale: 1
                                            },
                                            transition: {
                                              type: "spring",
                                              visualDuration: 0.22,
                                              bounce: 0
                                            },
                                            children: (0, s.jsx)(
                                              y,
                                              {
                                                mark: e3.mark,
                                                icon: e3.source.icon,
                                                host: e3.host,
                                                size: 12
                                              }
                                            )
                                          },
                                          e3.key
                                        )
                                      )
                                    })
                                  }),
                                  (0, s.jsxs)("span", {
                                    className: T().stackText,
                                    children: [
                                      (0, s.jsxs)("span", {
                                        className: T().stackCount,
                                        children: [
                                          "+",
                                          (0, s.jsx)(E, {
                                            value: ef.length,
                                            reduced: H2
                                          }),
                                          " more"
                                        ]
                                      }),
                                      (0, s.jsx)("span", {
                                        className: T().stackSites,
                                        children: [
                                          ...new Set(
                                            ef.map(
                                              (e3) => e3.site.split(
                                                " \xB7 "
                                              )[0]
                                            )
                                          )
                                        ].join(", ")
                                      })
                                    ]
                                  })
                                ]
                              }) : null
                            ]
                          },
                          "stack"
                        ) : null
                      ]
                    })
                  },
                  "grid"
                ) : null
              })
            })
          })
        ]
      })
    });
  }
  function q({
    item: e2,
    highlighted: t2,
    enter: r2,
    reduced: i2,
    describedBy: a2,
    onSourceClick: n2,
    handlers: o2
  }) {
    let { source: c2, n: u2, host: d2 } = e2, h2 = (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsxs)("span", {
          className: T().cardTop,
          children: [
            (0, s.jsx)("span", {
              className: T().cardMark,
              children: (0, s.jsx)(y, {
                mark: e2.mark,
                icon: c2.icon,
                host: d2
              })
            }),
            (0, s.jsx)("span", { className: T().domain, children: e2.domain }),
            (0, s.jsx)("span", {
              className: C(T().chip, T().cardChip),
              "aria-hidden": "true",
              children: u2
            })
          ]
        }),
        (0, s.jsx)("span", { className: T().cardTitle, children: c2.title })
      ]
    }), p2 = {
      className: T().card,
      "data-highlighted": t2 || void 0,
      "aria-describedby": a2,
      initial: !!r2 && (i2 ? { opacity: 0 } : { opacity: 0, y: 4 }),
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.18, ease: R },
      ...o2
    };
    return n2 ? (0, s.jsx)(l.PY1.button, {
      type: "button",
      ...p2,
      "aria-label": `${u2}. ${c2.title}, ${d2}`,
      onClick: () => n2(c2, u2),
      children: h2
    }) : (0, s.jsx)(l.PY1.a, {
      ...p2,
      href: c2.url,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `${u2}. ${c2.title}, ${d2}, opens in a new tab`,
      children: h2
    });
  }
  function W({ id: e2, item: t2, placement: r2, reduced: i2 }) {
    let a2 = "top" === r2.side ? 4 : -4;
    return (0, s.jsxs)(l.PY1.div, {
      id: e2,
      role: "tooltip",
      className: T().preview,
      "data-side": r2.side,
      "data-align": r2.align,
      style: {
        transformOrigin: `${"start" === r2.align ? "left" : "right"} ${"top" === r2.side ? "bottom" : "top"}`
      },
      initial: i2 ? { opacity: 0 } : { opacity: 0, y: a2, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, transition: { duration: 0.1 } },
      transition: { duration: 0.16, ease: R },
      children: [
        (0, s.jsxs)("span", {
          className: T().previewHead,
          children: [
            (0, s.jsx)(y, {
              mark: t2.mark,
              icon: t2.source.icon,
              host: t2.host,
              size: 16
            }),
            (0, s.jsx)("span", {
              className: T().previewSite,
              children: t2.site
            }),
            t2.source.published ? (0, s.jsx)("span", {
              className: T().previewDate,
              children: t2.source.published
            }) : null
          ]
        }),
        (0, s.jsx)("span", {
          className: T().previewTitle,
          children: t2.source.title
        }),
        t2.source.snippet ? (0, s.jsx)("span", {
          className: T().previewSnippet,
          children: t2.source.snippet
        }) : null,
        (0, s.jsxs)("span", {
          className: T().previewUrl,
          children: [
            (0, s.jsxs)("span", {
              className: T().previewPath,
              children: [t2.host, t2.path]
            }),
            (0, s.jsx)(b.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          ]
        })
      ]
    });
  }
  var I = r(26038), Y = r.n(I);
  let D = [...c.T.ease.enter], H = "Sample sources. Simulated search, nothing was fetched.";
  function O({ units: e2, chunks: t2 }) {
    return (0, s.jsx)("p", {
      className: Y().answer,
      children: t2.map((r2, a2) => {
        let n2 = 0 === a2 ? 0 : t2[a2 - 1];
        return (0, s.jsx)(
          "span",
          {
            className: Y().chunk,
            children: e2.slice(n2, r2).map((e3, t3) => {
              let r3 = n2 + t3;
              return "string" == typeof e3 ? (0, s.jsx)(i.Fragment, { children: e3 }, r3) : "code" in e3 ? (0, s.jsx)(
                "code",
                { className: Y().code, children: e3.code },
                r3
              ) : (0, s.jsx)(A, { n: e3.cite }, r3);
            })
          },
          a2
        );
      })
    });
  }
  function F({ scenario: e2 = "live", className: t2 }) {
    let r2 = (0, n.I)() ?? false, a2 = (0, i.useRef)(null), c2 = (0, i.useMemo)(
      () => d.flatMap(
        (e3) => "string" == typeof e3 ? [...e3.match(/\S+\s*|\s+/g) ?? []] : [e3]
      ),
      []
    ), [h2, p2] = (0, i.useState)(e2), [m2, y2] = (0, i.useState)(0), [g2, x2] = (0, i.useState)(false), [v2, _2] = (0, i.useState)(0), [w2, j2] = (0, i.useState)("searching"), [b2, k2] = (0, i.useState)(null), [N2, S2] = (0, i.useState)(null), [T2, C2] = (0, i.useState)(false), [R2, M2] = (0, i.useState)(H), [$2, A2] = (0, i.useState)(), [z2, E2] = (0, i.useState)(false), q2 = (0, i.useRef)(false), W2 = (0, i.useRef)(void 0), { outerRef: I2, innerRef: B2 } = L(r2), [V2, U2] = (0, i.useState)(e2);
    e2 !== V2 && (U2(e2), p2(e2), y2((e3) => e3 + 1)), (0, i.useEffect)(() => {
      let e3 = a2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return void x2(true);
      let t3 = new IntersectionObserver(([e4]) => x2(e4.isIntersecting), {
        rootMargin: "80px"
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.useEffect)(() => {
      if (!g2) return;
      let e3 = false, t3 = [], s2 = (e4) => new Promise((s3) => {
        t3.push(window.setTimeout(s3, r2 ? Math.min(e4, 400) : e4));
      }), i2 = () => {
        _2(0), j2("searching"), k2(null), S2(null), C2(false), A2(void 0), M2(H);
      };
      return q2.current = false, (async () => {
        let t4 = false;
        do {
          if (i2(), t4 && (await s2(380), e3)) return;
          E2(false), t4 = true;
          let r3 = performance.now();
          if (await s2(420), e3) return;
          if ("empty" === h2) {
            if (await s2(1500), e3) return;
            j2("done");
            return;
          }
          let a3 = "error" === h2 ? 2 : u.length;
          for (let t5 = 1; t5 <= a3; t5++)
            if (_2(t5), await s2(t5 <= 3 ? 300 : 220), e3) return;
          if ("error" === h2) {
            if (await s2(520), e3) return;
            j2("error");
            return;
          }
          if (A2(performance.now() - r3), j2("done"), await s2(320), e3)
            return;
          let n2 = [];
          for (let t5 = 0; t5 < c2.length && !e3; )
            t5 = Math.min(
              c2.length,
              t5 + 3 + Math.floor(5 * Math.random())
            ), n2.push(t5), k2([...n2]), await s2(34);
          if (e3 || (await s2(1100), e3 || q2.current) || (S2(2), await s2(1500), e3 || q2.current) || (S2(6), C2(true), await s2(1800), e3 || q2.current) || (S2(null), await s2(240), C2(false), await s2(3600), e3 || q2.current))
            return;
          E2(true), await s2(200);
        } while (!e3 && !q2.current);
      })(), () => {
        e3 = true, t3.forEach(window.clearTimeout);
      };
    }, [g2, m2, h2, c2, r2]), (0, i.useEffect)(() => () => window.clearTimeout(W2.current), []);
    let G2 = u.slice(0, v2), K2 = "empty" === h2 ? "Where is the changelog for our internal billing-sync service?" : "Why does my Stripe webhook fail signature verification in a Next.js route handler?";
    return (0, s.jsxs)("div", {
      ref: a2,
      className: [Y().panel, t2].filter(Boolean).join(" "),
      onPointerDown: () => {
        q2.current = true;
      },
      onKeyDown: () => {
        q2.current = true;
      },
      children: [
        (0, s.jsx)("div", {
          ref: I2,
          className: Y().questionBox,
          children: (0, s.jsx)("div", {
            ref: B2,
            className: Y().question,
            children: (0, s.jsx)(o.N, {
              initial: false,
              mode: "popLayout",
              children: (0, s.jsx)(
                l.PY1.p,
                {
                  className: Y().questionText,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0, transition: { duration: 0.1 } },
                  transition: { duration: 0.16, ease: D },
                  children: K2
                },
                K2
              )
            })
          })
        }),
        (0, s.jsx)(l.PY1.div, {
          className: Y().body,
          initial: false,
          animate: { opacity: +!z2 },
          transition: { duration: z2 ? 0.18 : 0.2, ease: D },
          children: (0, s.jsx)(P, {
            sources: G2,
            status: w2,
            total: "live" === h2 ? u.length : "error" === h2 ? 7 : void 0,
            query: "empty" === h2 ? "billing-sync service changelog" : "stripe webhook signature verification next.js route handler",
            duration: $2,
            error: "The search provider timed out after 8s.",
            expanded: T2,
            onExpandedChange: C2,
            highlighted: N2,
            onHighlightChange: (e3) => {
              S2(e3), window.clearTimeout(W2.current), null !== e3 && (W2.current = window.setTimeout(() => S2(null), 2600));
            },
            onSourceClick: (e3, t3) => {
              S2(t3), window.clearTimeout(W2.current), W2.current = window.setTimeout(() => S2(null), 2600), M2(`Would open ${f(e3.url)}. Simulated, nothing was opened.`);
            },
            onRetry: () => {
              q2.current = false, p2("live"), y2((e3) => e3 + 1);
            },
            children: b2 ? (0, s.jsx)(O, { units: c2, chunks: b2 }) : null
          })
        }),
        (0, s.jsx)("p", {
          className: Y().note,
          "aria-live": "polite",
          children: (0, s.jsx)(o.N, {
            initial: false,
            mode: "popLayout",
            children: (0, s.jsx)(
              l.PY1.span,
              {
                className: Y().noteText,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0, transition: { duration: 0.1 } },
                transition: { duration: 0.16, ease: D },
                children: R2
              },
              R2
            )
          })
        })
      ]
    });
  }
  var B = r(66275), V = r.n(B);
  let U = [
    { value: "live", label: "Live" },
    { value: "error", label: "Failed" },
    { value: "empty", label: "No results" }
  ];
  function G() {
    let [e2, t2] = (0, i.useState)("live");
    return (0, s.jsxs)("div", {
      className: V().demo,
      children: [
        (0, s.jsx)(a.A, {
          options: U,
          value: e2,
          onValueChange: (e3) => t2(e3),
          label: "Search scenario"
        }),
        (0, s.jsx)(F, { scenario: e2 })
      ]
    });
  }
  let K = G;
};

__m(__module,__exports,__require);
});
A.cssFor("source-cards", [26038,32186,66275]);
A.item("source-cards", {entry:83134, export:"SourceCardsDemo", kind:"component", tier:"pro", unresolved:[]});
})();