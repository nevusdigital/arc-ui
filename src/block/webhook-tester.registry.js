/* webhook-tester (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"kbd":"kbd","sm":"sm","md":"md","lg":"lg","key":"key","slot":"slot","glyph":"glyph","hidden":"hidden"});
A.reg(25182, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "eye",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          key: "1nclc0"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(30040, ".root{--wt-mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,\"Liberation Mono\",monospace;--wt-code-bg:color-mix(in oklab,var(--surface-muted) 55%,var(--surface));--wt-inner-radius:calc(var(--radius-control) - 4px);container-type:inline-size;width:100%;max-width:760px;min-width:0;color:var(--foreground);background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-panel);font-family:var(--font-body);font-size:13px;line-height:20px;letter-spacing:var(--tracking-body)}\n.header{display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--border-subtle)}\n@container (max-width: 420px){.header{padding:16px}\n.mark{display:inline-flex;flex:none;width:16px;height:16px}\n.mark svg{width:16px;height:16px}\n.headings{display:flex;flex-direction:column;min-width:0}\n.title{margin:0;font-size:14px;font-weight:500;line-height:20px}\n.subtitle{margin:0;overflow:hidden;color:var(--text-muted);font-size:12px;line-height:16px;white-space:nowrap;text-overflow:ellipsis}\n.modeChip{display:inline-flex;flex:none;align-items:center;gap:4px;height:24px;margin-left:auto;padding:0 8px 0 6px;color:var(--text-secondary);background:var(--surface-muted);border-radius:999px;font-size:12px;line-height:16px}\n.body{display:grid;grid-template-columns:minmax(0,1fr)}\n@container (min-width: 680px){.body{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}\n.request,.response{display:flex;flex-direction:column;gap:12px;min-width:0;padding:16px}\n.response{border-top:1px solid var(--border-subtle)}\n.response{border-top:0;border-left:1px solid var(--border-subtle)}\n.editor{flex:1}\n.editor{display:grid;grid-template-columns:36px minmax(0,1fr);min-height:208px}\n.fields{border:1px solid var(--border);border-radius:var(--wt-inner-radius)}\n.field{display:grid;grid-template-columns:72px minmax(0,1fr);align-items:center;height:40px;padding:0 4px 0 12px}\n.field+.field{border-top:1px solid var(--border-subtle)}\n.fieldLabel{color:var(--text-secondary);font-size:13px}\n.fieldValue{position:relative;display:flex;align-items:center;gap:4px;min-width:0;height:100%}\n.method{flex:none;padding:0 6px;color:var(--text-secondary);background:var(--surface-muted);border-radius:6px;font-family:var(--wt-mono);font-size:12px;line-height:20px}\n.input,.select{flex:1;min-width:0;height:32px;margin:0;padding:0 6px;color:var(--foreground);background:transparent;border:0;border-radius:8px;font-family:var(--wt-mono);font-size:12px;text-overflow:ellipsis}\n.input:focus,.select:focus{outline-offset:-2px}\n.select{appearance:none;padding-right:28px;cursor:pointer}\n.select option{color:var(--foreground);background:var(--surface)}\n.inputBad{color:var(--danger);text-decoration:underline wavy color-mix(in oklab,var(--danger) 55%,transparent);text-decoration-thickness:1px;text-underline-offset:3px}\n.chevron{position:absolute;right:8px;color:var(--text-muted);pointer-events:none}\n.secret{display:grid;flex:1;min-width:0;padding:0 6px;font-family:var(--wt-mono);font-size:12px}\n.secretText{grid-area:1/1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;transition:opacity .16s cubic-bezier(.22,1,.36,1)}\n.secretHidden{opacity:0;transition-duration:.1s}\n.iconButton{display:inline-grid;flex:none;place-items:center;width:32px;height:32px;padding:0;color:var(--text-secondary);background:transparent;border:0;border-radius:10px;cursor:pointer;transition:background-color .12s ease-out,color .12s ease-out,transform .12s ease-out}\n.iconButton:hover{color:var(--foreground);background:var(--surface-muted)}\n.iconButton:active{transform:scale(.94)}\n.iconSwap{width:16px;height:16px}\n.copy{flex:none}\n.editorWrap{display:flex;flex:1;flex-direction:column;min-height:0;background:var(--wt-code-bg);border:1px solid var(--border);border-radius:var(--wt-inner-radius)}\n.gutter{position:relative;overflow:hidden;border-top-left-radius:var(--wt-inner-radius)}\n.gutterInner{position:absolute;top:0;right:0;left:0;padding:12px 8px 12px 0;color:var(--text-muted);font-family:var(--wt-mono);font-size:12px;line-height:20px;text-align:right;user-select:none;font-variant-numeric:tabular-nums}\n.gutterInner span{display:block}\n.gutterBad{color:var(--danger)}\n.code{position:relative;min-width:0}\n.codeClip{position:absolute;inset:0;overflow:hidden;border-top-right-radius:var(--wt-inner-radius)}\n.codeInput,.codeLayer{margin:0;padding:12px 12px 12px 4px;font-family:var(--wt-mono);font-size:12px;line-height:20px;letter-spacing:0;white-space:pre;tab-size:2;font-variant-ligatures:none}\n.codeLayer{position:absolute;top:0;left:0;min-width:100%;color:var(--foreground);pointer-events:none;will-change:transform}\n.codeInput{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:auto;color:transparent;caret-color:var(--foreground);background:transparent;border:0;border-top-right-radius:var(--wt-inner-radius);resize:none;scrollbar-width:thin}\n.codeInput::selection{color:transparent;background:color-mix(in oklab,var(--accent) 22%,transparent)}\n.codeFade{animation:wtFade .16s cubic-bezier(.22,1,.36,1)}\n@media (prefers-reduced-motion:reduce){.codeFade{animation:none}\n.editorFooter{display:flex;align-items:center;justify-content:space-between;gap:8px;height:36px;padding:0 4px 0 12px;color:var(--text-secondary);border-top:1px solid var(--border-subtle);font-size:12px;line-height:16px}\n.editorStatus{min-width:0}\n.sep{color:var(--text-muted)}\n.num{font-variant-numeric:tabular-nums}\n.okIcon{flex:none;color:var(--success)}\n.dangerIcon{flex:none;color:var(--danger)}\n.warnIcon{flex:none;color:var(--warning)}\n.textButton{height:28px;padding:0 8px;color:var(--text-secondary);background:transparent;border:0;border-radius:8px;font:inherit;cursor:pointer;transition:background-color .12s ease-out,color .12s ease-out,opacity .12s ease-out}\n.textButton:hover:not(:disabled){color:var(--foreground);background:var(--surface-muted)}\n.textButton:disabled{cursor:default;opacity:.45}\n.tKey{color:var(--series-1)}\n.tString{color:color-mix(in oklab,var(--success) 82%,var(--foreground))}\n.tNumber{color:var(--series-3)}\n.tLiteral{color:var(--series-2)}\n.tPunct{color:var(--text-muted)}\n.tStatus{color:var(--foreground);font-weight:500}\n.tHeader{color:var(--text-secondary)}\n.sendRow{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:36px}\n.hint{min-width:0;color:var(--text-muted);font-size:12px;line-height:16px}\n.hintDanger{color:var(--danger)}\n.sendButton{flex:none}\n.swap{display:inline-grid;min-width:0}\n.swapItem{display:inline-flex;grid-area:1/1;align-items:center;gap:6px;min-width:0;white-space:nowrap}\n.nodeLabel .swapItem,.nodeMeta .swapItem{display:block;overflow:hidden;text-overflow:ellipsis}\n.timeline{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:0;padding:0 0 4px;list-style:none}\n.node{display:flex;flex-direction:column;min-width:0}\n.nodeTrack{display:flex;align-items:center;height:16px;margin-bottom:8px}\n.nodeIcon{position:relative;flex:none;width:16px;height:16px;transition:color .16s ease-out}\n.nodeGlyph{position:absolute;inset:0;display:grid;place-items:center}\n.node_idle{color:var(--text-muted)}\n.node_active{color:var(--accent)}\n.node_done{color:var(--success)}\n.node_error{color:var(--danger)}\n.node_warn{color:var(--warning)}\n.idleDot{width:8px;height:8px;border:1.5px solid;border-radius:50%}\n.connector{position:relative;flex:1;height:1px;margin:0 8px;background:var(--border)}\n.connectorFill{position:absolute;inset:0;background:var(--accent);transform-origin:left center}\n.dotTrack{position:absolute;inset:0}\n.dot{position:absolute;top:50%;left:0;width:6px;height:6px;margin:-3px 0 0 -3px;background:var(--accent);border-radius:50%}\n.nodeLabel,.nodeMeta{display:grid;padding-right:8px}\n.nodeLabel{font-size:13px;line-height:20px}\n.nodeMeta{color:var(--text-muted);font-size:12px;line-height:16px}\n.well{display:flex;flex-direction:column;border:1px solid var(--border);border-radius:var(--wt-inner-radius)}\n.tabsBar{display:flex;align-items:center;justify-content:space-between;height:40px;padding:0 4px;border-bottom:1px solid var(--border-subtle)}\n.tabs{display:flex;height:100%}\n.tab{position:relative;height:100%;padding:0 8px;color:var(--text-secondary);background:transparent;border:0;font:inherit;font-size:13px;cursor:pointer;transition:color .12s ease-out}\n.tabOn,.tab:hover{color:var(--foreground)}\n.tabLine{position:absolute;right:8px;bottom:-1px;left:8px;height:2px;background:var(--foreground);border-radius:2px}\n.wellBody{position:relative;height:156px;background:var(--wt-code-bg);border-radius:0 0 calc(var(--wt-inner-radius) - 1px) calc(var(--wt-inner-radius) - 1px)}\n.wellLayer{position:absolute;inset:0;overflow:auto;scrollbar-width:thin}\n.pre{margin:0;padding:12px;color:var(--foreground);font-family:var(--wt-mono);font-size:12px;line-height:20px;white-space:pre-wrap;overflow-wrap:anywhere}\n.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;height:100%;padding:16px;color:var(--text-muted);font-size:12px;line-height:16px;text-align:center}\n.emptyTitle{color:var(--foreground);font-size:13px;font-weight:500;line-height:20px}\n.waiting{display:grid;height:100%;place-items:center;color:var(--text-secondary);font-size:12px}\n.failure{display:flex;align-items:flex-start;gap:8px;padding:12px;font-size:12px;line-height:20px}\n.failure svg{margin-top:3px}\n.deliveries{display:flex;flex-direction:column;gap:8px}\n.deliveriesHead{display:flex;align-items:baseline;justify-content:space-between}\n.sectionTitle{margin:0;font-size:13px;font-weight:500;line-height:20px}\n.meta{color:var(--text-muted);font-size:12px;line-height:16px;font-variant-numeric:tabular-nums}\n.list{height:168px;margin:-4px -12px;padding:4px;overflow-y:auto;list-style:none;scrollbar-width:thin}\n.listEmpty{display:grid;height:160px;place-items:center;color:var(--text-muted);font-size:12px}\n.row{display:grid;grid-template-columns:minmax(0,1fr) 72px;align-items:center;height:40px;border-radius:10px;transition:background-color .12s ease-out}\n.row:hover{background:color-mix(in oklab,var(--surface-muted) 60%,transparent)}\n.rowOn,.rowOn:hover{background:var(--surface-muted)}\n.rowMain{display:grid;grid-column:1;grid-template-columns:76px minmax(0,1fr) auto;align-items:center;gap:12px;height:40px;padding:0 10px 0 8px;color:var(--foreground);background:transparent;border:0;border-radius:10px;font:inherit;text-align:left;cursor:pointer}\n.rowMain{grid-template-columns:76px minmax(0,1fr)}\n.rowWide{grid-column:1/-1;grid-template-columns:76px minmax(0,1fr) auto 60px}\n.rowWide{grid-template-columns:76px minmax(0,1fr) 60px}\n.chip{display:inline-flex;align-items:center;gap:4px;width:76px;height:24px;padding:0 8px 0 6px;border-radius:999px;font-size:12px;line-height:16px;font-variant-numeric:tabular-nums;transition:color .16s ease-out,background-color .16s ease-out}\n.chipIcon{width:14px;height:14px}\n.chipText{min-width:0}\n.chip_ok{color:var(--success);background:color-mix(in oklab,var(--success) 12%,transparent)}\n.chip_bad{color:var(--danger);background:color-mix(in oklab,var(--danger) 12%,transparent)}\n.chip_warn{color:var(--warning);background:color-mix(in oklab,var(--warning) 14%,transparent)}\n.chip_pending{color:var(--accent);background:color-mix(in oklab,var(--accent) 12%,transparent)}\n.rowEvent{overflow:hidden;font-family:var(--wt-mono);font-size:12px;white-space:nowrap;text-overflow:ellipsis}\n.rowDuration,.rowTime{color:var(--text-muted);font-size:12px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.rowTime{display:none}\n.rowDuration{text-align:right}\n.retry{display:inline-flex;grid-column:2;align-items:center;justify-self:end;gap:4px;height:28px;margin-right:4px;padding:0 6px;color:var(--accent);background:transparent;border:0;border-radius:8px;font:inherit;font-size:12px;cursor:pointer;transition:background-color .12s ease-out,opacity .12s ease-out,transform .12s ease-out}\n.retry:hover:not(:disabled){background:var(--accent-subtle)}\n.retry:active:not(:disabled){transform:scale(.96)}\n.retry:disabled{cursor:default;opacity:.45}\n.spin{animation:wtSpin .8s linear infinite}\n.spin{animation-duration:1.6s}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"root":"root","header":"header","mark":"mark","headings":"headings","title":"title","subtitle":"subtitle","modeChip":"modeChip","body":"body","request":"request","response":"response","editor":"editor","fields":"fields","field":"field","fieldLabel":"fieldLabel","fieldValue":"fieldValue","method":"method","input":"input","select":"select","inputBad":"inputBad","chevron":"chevron","secret":"secret","secretText":"secretText","secretHidden":"secretHidden","iconButton":"iconButton","iconSwap":"iconSwap","copy":"copy","editorWrap":"editorWrap","gutter":"gutter","gutterInner":"gutterInner","gutterBad":"gutterBad","code":"code","codeClip":"codeClip","codeInput":"codeInput","codeLayer":"codeLayer","codeFade":"codeFade","editorFooter":"editorFooter","editorStatus":"editorStatus","sep":"sep","num":"num","okIcon":"okIcon","dangerIcon":"dangerIcon","warnIcon":"warnIcon","textButton":"textButton","tKey":"tKey","tString":"tString","tNumber":"tNumber","tLiteral":"tLiteral","tPunct":"tPunct","tStatus":"tStatus","tHeader":"tHeader","sendRow":"sendRow","hint":"hint","hintDanger":"hintDanger","sendButton":"sendButton","swap":"swap","swapItem":"swapItem","nodeLabel":"nodeLabel","nodeMeta":"nodeMeta","timeline":"timeline","node":"node","nodeTrack":"nodeTrack","nodeIcon":"nodeIcon","nodeGlyph":"nodeGlyph","node_idle":"node_idle","node_active":"node_active","node_done":"node_done","node_error":"node_error","node_warn":"node_warn","idleDot":"idleDot","connector":"connector","connectorFill":"connectorFill","dotTrack":"dotTrack","dot":"dot","well":"well","tabsBar":"tabsBar","tabs":"tabs","tab":"tab","tabOn":"tabOn","tabLine":"tabLine","wellBody":"wellBody","wellLayer":"wellLayer","pre":"pre","empty":"empty","emptyTitle":"emptyTitle","waiting":"waiting","failure":"failure","deliveries":"deliveries","deliveriesHead":"deliveriesHead","sectionTitle":"sectionTitle","meta":"meta","list":"list","listEmpty":"listEmpty","row":"row","rowOn":"rowOn","rowMain":"rowMain","rowWide":"rowWide","chip":"chip","chipIcon":"chipIcon","chipText":"chipText","chip_ok":"chip_ok","chip_bad":"chip_bad","chip_warn":"chip_warn","chip_pending":"chip_pending","rowEvent":"rowEvent","rowDuration":"rowDuration","rowTime":"rowTime","retry":"retry","spin":"spin","srOnly":"srOnly"});
A.reg(57776, function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  let r;
  a.r(t), a.d(t, {
    WebhookTester: () => ed,
    default: () => ec,
    webhookTesterDeliveries: () => $,
    webhookTesterEvents: () => j
  });
  var n = a(95155), s = a(12115), i = a(18310), o = a(80642), l = a(25354), d = a(92571), c = a(64962), u = a(94890), h = a(59103), p = a(35484), m = a(84824), _ = a(12363), b = a(89034), y = a(25182), f = a(92298), w = a(51288), x = a(73474), k = a(76266), g = a(52898);
  let v = "https://api.northwind.dev/webhooks/stripe", j = [
    {
      type: "invoice.paid",
      payload: {
        id: "evt_1QhT8sKZ3v2Lw9Xc",
        type: "invoice.paid",
        created: 1793111528,
        livemode: false,
        data: {
          object: {
            id: "in_1QhT8rKZ3v2Lw9Xc",
            customer: "cus_RkN4b7TzqP1m",
            amount_paid: 4900,
            currency: "usd",
            status: "paid",
            hosted_invoice_url: null
          }
        }
      }
    },
    {
      type: "customer.created",
      payload: {
        id: "evt_1QhT2aKZ3v2Lw4Rn",
        type: "customer.created",
        created: 1793111528,
        livemode: false,
        data: {
          object: {
            id: "cus_RkN4b7TzqP1m",
            email: "maya.okafor@lumen.studio",
            name: "Maya Okafor",
            currency: "usd",
            delinquent: false
          }
        }
      }
    },
    {
      type: "customer.subscription.updated",
      payload: {
        id: "evt_1QhSz4KZ3v2Lw8Jd",
        type: "customer.subscription.updated",
        created: 1793111528,
        livemode: false,
        data: {
          object: {
            id: "sub_1QhSz3KZ3v2Lw8Jd",
            customer: "cus_RkN4b7TzqP1m",
            status: "active",
            plan: "team_annual",
            quantity: 12,
            cancel_at_period_end: false
          }
        }
      }
    },
    {
      type: "checkout.session.completed",
      payload: {
        id: "evt_1QhSq9KZ3v2Lw1Te",
        type: "checkout.session.completed",
        created: 1793111528,
        livemode: false,
        data: {
          object: {
            id: "cs_test_a1Kq8ZpR2vN7",
            customer: "cus_RkN4b7TzqP1m",
            amount_total: 58800,
            currency: "usd",
            payment_status: "paid",
            mode: "subscription"
          }
        }
      }
    },
    {
      type: "payment_intent.payment_failed",
      payload: {
        id: "evt_1QhSk2KZ3v2Lw6Wb",
        type: "payment_intent.payment_failed",
        created: 1793111528,
        livemode: false,
        data: {
          object: {
            id: "pi_3QhSk1KZ3v2Lw6Wb",
            amount: 4900,
            currency: "usd",
            last_payment_error: {
              code: "card_declined",
              decline_code: "insufficient_funds"
            }
          }
        }
      }
    }
  ], N = (e2) => "string" == typeof e2 ? e2 : JSON.stringify(e2, null, 2);
  function T(e2, t2, a2, r2) {
    return {
      "content-type": "application/json; charset=utf-8",
      "content-length": String(new TextEncoder().encode(t2).length),
      date: a2.toUTCString(),
      server: "Vercel",
      "x-request-id": r2,
      "x-vercel-id": `fra1::iad1::${r2.slice(4, 9).toLowerCase()}-${a2.getTime()}`,
      ...e2 >= 500 ? { "x-vercel-error": "FUNCTION_INVOCATION_FAILED" } : {}
    };
  }
  function S(e2, t2, a2) {
    return {
      "content-type": "application/json; charset=utf-8",
      "content-length": String(new TextEncoder().encode(a2).length),
      "user-agent": "Stripe/1.0 (+https://stripe.com/docs/webhooks)",
      "stripe-signature": `t=${e2},v1=${t2}`
    };
  }
  let E = (e2) => Array.from(
    { length: 64 },
    (t2, a2) => "0123456789abcdef"[e2.charCodeAt(a2 % e2.length) * (a2 + 7) % 16]
  ).join("");
  function C(e2, t2, a2, r2, n2) {
    let s2 = N(j.find((e3) => e3.type === t2)?.payload ?? {}), i2 = E(e2);
    return {
      id: e2,
      event: t2,
      time: a2,
      request: {
        url: v,
        event: t2,
        body: s2,
        headers: S(r2, i2, s2),
        timestamp: r2,
        signature: i2
      },
      response: n2
    };
  }
  let L = (e2, t2, a2) => {
    let r2 = '{\n  "received": true\n}';
    return {
      status: 200,
      durationMs: e2,
      body: r2,
      headers: T(200, r2, new Date(1e3 * t2), a2)
    };
  }, $ = [
    C(
      "msg_2Lq8RkT4mN",
      "invoice.paid",
      "14:28:06",
      1793111286,
      L(184, 1793111286, "req_8fK2nQ4tVw")
    ),
    C(
      "msg_2Lp1XcV9sB",
      "customer.subscription.updated",
      "14:11:42",
      1793110302,
      {
        status: 500,
        durationMs: 1204,
        body: r = `{
  "error": "Cannot read properties of undefined (reading 'plan')"
}`,
        headers: T(500, r, /* @__PURE__ */ new Date(1793110302e3), "req_3Hd7pLm2Qa")
      }
    ),
    C(
      "msg_2Ln7GhD3wE",
      "customer.created",
      "13:57:19",
      1793109439,
      L(96, 1793109439, "req_6Tz1cRb8Nk")
    ),
    C(
      "msg_2Lm4JkP8yR",
      "payment_intent.payment_failed",
      "13:40:03",
      1793108403,
      {
        status: 0,
        durationMs: 1e4,
        timedOut: true,
        error: "No response after 10 s. Return a 2xx before doing slow work."
      }
    ),
    C(
      "msg_2Lk9MnQ2zT",
      "checkout.session.completed",
      "13:22:51",
      1793107371,
      L(212, 1793107371, "req_2Wq5vYx7Je")
    )
  ], A = [184, 162, 207, 143, 231, 176, 198], O = 0, R = (e2, t2 = 10) => e2 + Array.from(
    { length: t2 },
    () => "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789"[Math.floor(56 * Math.random())]
  ).join(""), I = (e2, t2) => new Promise((a2, r2) => {
    let n2 = setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        clearTimeout(n2), r2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  });
  async function z(e2, t2) {
    let a2 = "";
    try {
      a2 = new URL(e2.url).hostname;
    } catch {
    }
    if ("localhost" === a2 || "127.0.0.1" === a2 || a2.endsWith(".local"))
      return await I(520, t2), {
        status: 0,
        durationMs: 31,
        error: `Connection refused by ${a2}. Expose it with a tunnel such as stripe listen.`
      };
    let r2 = A[O++ % A.length];
    return await I(560, t2), L(r2, Math.floor(Date.now() / 1e3), R("req_"));
  }
  async function M(e2, t2, a2) {
    let r2 = "u" > typeof crypto ? crypto.subtle : void 0;
    if (!r2) return E(`${t2}${a2.length}${e2}`);
    let n2 = new TextEncoder(), s2 = await r2.importKey(
      "raw",
      n2.encode(e2),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    return Array.from(
      new Uint8Array(await r2.sign("HMAC", s2, n2.encode(`${t2}.${a2}`))),
      (e3) => e3.toString(16).padStart(2, "0")
    ).join("");
  }
  let P = {
    200: "OK",
    201: "Created",
    202: "Accepted",
    204: "No content",
    400: "Bad request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    405: "Not allowed",
    408: "Timeout",
    410: "Gone",
    422: "Unprocessable",
    429: "Rate limited",
    500: "Server error",
    502: "Bad gateway",
    503: "Unavailable",
    504: "Gateway timeout"
  }, D = (e2) => P[e2] ?? (e2 >= 500 ? "Server error" : e2 >= 400 ? "Client error" : e2 >= 300 ? "Redirect" : "OK");
  function B(e2) {
    return e2 < 1e3 ? `${Math.round(e2)} ms` : `${(e2 / 1e3).toFixed(e2 < 1e4 ? 2 : 1).replace(/\.?0+$/, "")} s`;
  }
  var W = a(30040), F = a.n(W);
  let U = /("(?:\\.|[^"\\\n])*")(\s*:)?|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|\b(true|false|null)\b|([{}[\],:])/g;
  function H(e2) {
    let t2 = [], a2 = 0, r2 = 0;
    for (let s2 of e2.matchAll(U)) {
      let i2 = s2.index ?? 0;
      i2 > a2 && t2.push(e2.slice(a2, i2));
      let [o2, l2, d2, c2, u2, h2] = s2;
      void 0 !== l2 ? (t2.push(
        (0, n.jsx)(
          "span",
          { className: d2 ? F().tKey : F().tString, children: l2 },
          r2++
        )
      ), d2 && t2.push(
        (0, n.jsx)("span", { className: F().tPunct, children: d2 }, r2++)
      )) : void 0 !== c2 ? t2.push(
        (0, n.jsx)("span", { className: F().tNumber, children: c2 }, r2++)
      ) : void 0 !== u2 ? t2.push(
        (0, n.jsx)(
          "span",
          { className: F().tLiteral, children: u2 },
          r2++
        )
      ) : void 0 !== h2 ? t2.push(
        (0, n.jsx)(
          "span",
          { className: F().tPunct, children: h2 },
          r2++
        )
      ) : t2.push(o2), a2 = i2 + o2.length;
    }
    return a2 < e2.length && t2.push(e2.slice(a2)), t2;
  }
  function K({
    value: e2,
    onChange: t2,
    onSubmit: a2,
    invalidLine: r2,
    label: i2,
    id: o2,
    resetKey: l2
  }) {
    let d2 = (0, s.useRef)(null), c2 = (0, s.useRef)(null), u2 = (0, s.useRef)(null), h2 = (0, s.useRef)(true);
    (0, s.useEffect)(() => {
      if (h2.current) {
        h2.current = false;
        return;
      }
      let e3 = u2.current;
      e3 && (e3.scrollTop = 0, e3.scrollLeft = 0), d2.current && (d2.current.style.transform = "", d2.current.classList.remove(F().codeFade), d2.current.offsetWidth, d2.current.classList.add(F().codeFade)), c2.current && (c2.current.style.transform = "");
    }, [l2]);
    let p2 = e2.split("\n").length;
    return (0, n.jsxs)("div", {
      className: F().editor,
      children: [
        (0, n.jsx)("div", {
          className: F().gutter,
          "aria-hidden": "true",
          children: (0, n.jsx)("div", {
            ref: c2,
            className: F().gutterInner,
            children: Array.from(
              { length: p2 },
              (e3, t3) => (0, n.jsx)(
                "span",
                {
                  className: t3 + 1 === r2 ? F().gutterBad : void 0,
                  children: t3 + 1
                },
                t3
              )
            )
          })
        }),
        (0, n.jsxs)("div", {
          className: F().code,
          children: [
            (0, n.jsx)("div", {
              className: F().codeClip,
              "aria-hidden": "true",
              children: (0, n.jsxs)("div", {
                ref: d2,
                className: F().codeLayer,
                children: [H(e2), "\n "]
              })
            }),
            (0, n.jsx)("textarea", {
              ref: u2,
              id: o2,
              className: F().codeInput,
              value: e2,
              onChange: (e3) => t2(e3.target.value),
              onScroll: (e3) => {
                let { scrollTop: t3, scrollLeft: a3 } = e3.currentTarget;
                d2.current && (d2.current.style.transform = `translate(${-a3}px, ${-t3}px)`), c2.current && (c2.current.style.transform = `translateY(${-t3}px)`);
              },
              onKeyDown: (r3) => {
                if ("Enter" === r3.key && (r3.metaKey || r3.ctrlKey)) {
                  r3.preventDefault(), a2?.();
                  return;
                }
                if ("Enter" === r3.key && !r3.shiftKey && !r3.altKey) {
                  let a3 = r3.currentTarget, n2 = a3.selectionStart, s2 = e2.lastIndexOf("\n", n2 - 1) + 1, i3 = e2.slice(s2).match(/^ */)?.[0] ?? "", o3 = /[{[]\s*$/.test(e2.slice(s2, n2)) ? "  " : "";
                  if (!i3 && !o3) return;
                  r3.preventDefault();
                  let l3 = `
${i3}${o3}`;
                  document.execCommand?.("insertText", false, l3) || (a3.setRangeText(l3, n2, a3.selectionEnd, "end"), t2(a3.value));
                }
              },
              spellCheck: false,
              autoCapitalize: "off",
              autoComplete: "off",
              autoCorrect: "off",
              wrap: "off",
              "aria-label": i2,
              "aria-invalid": void 0 !== r2 || void 0
            })
          ]
        })
      ]
    });
  }
  function q(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: (0, n.jsx)("path", {
        fill: "#635BFF",
        d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
      })
    });
  }
  let Q = (...e2) => e2.filter(Boolean).join(" "), Y = [
    { id: "body", label: "Body" },
    { id: "headers", label: "Headers" },
    { id: "request", label: "Request" }
  ], G = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }, V = { duration: 0.1, ease: [0.22, 1, 0.36, 1] }, J = { type: "spring", visualDuration: 0.24, bounce: 0 }, Z = (e2, t2) => new Promise((a2, r2) => {
    let n2 = setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        clearTimeout(n2), r2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  }), X = (e2) => {
    try {
      return new URL(e2).host;
    } catch {
      return e2;
    }
  }, ee = (e2) => {
    try {
      let t2 = new URL(e2);
      return t2.pathname + t2.search;
    } catch {
      return "/";
    }
  }, et = (e2) => !!e2 && e2.status >= 200 && e2.status < 300, ea = (e2) => e2 ? e2.status ? String(e2.status) : e2.timedOut ? "Timeout" : "Failed" : "Sending";
  function er({ state: e2 }) {
    let t2 = !!(0, i.I)(), a2 = "active" === e2 ? (0, n.jsx)(d.A, {
      size: 16,
      strokeWidth: 1.75,
      className: F().spin
    }) : "done" === e2 ? (0, n.jsx)(c.A, { size: 16, strokeWidth: 1.75 }) : "error" === e2 ? (0, n.jsx)(u.A, { size: 16, strokeWidth: 1.75 }) : "warn" === e2 ? (0, n.jsx)(h.A, { size: 16, strokeWidth: 1.75 }) : (0, n.jsx)("span", { className: F().idleDot });
    return (0, n.jsx)("span", {
      className: Q(F().nodeIcon, F()[`node_${e2}`]),
      children: (0, n.jsx)(o.N, {
        initial: false,
        children: (0, n.jsx)(
          l.PY1.span,
          {
            className: F().nodeGlyph,
            initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, transition: t2 ? { duration: 0 } : V },
            transition: t2 ? { duration: 0 } : G,
            children: a2
          },
          e2
        )
      })
    });
  }
  function en({ children: e2, id: t2, className: a2 }) {
    let r2 = !!(0, i.I)();
    return (0, n.jsx)("span", {
      className: Q(F().swap, a2),
      children: (0, n.jsx)(o.N, {
        initial: false,
        children: (0, n.jsx)(
          l.PY1.span,
          {
            className: F().swapItem,
            initial: r2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: r2 ? { duration: 0 } : V },
            transition: r2 ? { duration: 0 } : G,
            children: e2
          },
          t2
        )
      })
    });
  }
  function es({ filled: e2, traveling: t2, loop: a2 }) {
    let r2 = !!(0, i.I)();
    return (0, n.jsxs)("span", {
      className: F().connector,
      "aria-hidden": "true",
      children: [
        (0, n.jsx)(l.PY1.span, {
          className: F().connectorFill,
          initial: false,
          animate: { scaleX: +!!e2 },
          transition: r2 || !e2 ? { duration: 0 } : { duration: a2 ? 0.5 : 0.28, ease: [0.65, 0, 0.35, 1] }
        }),
        t2 && !r2 && (0, n.jsx)(l.PY1.span, {
          className: F().dotTrack,
          initial: { x: "0%", opacity: 0 },
          animate: { x: "100%", opacity: [0, 1, 1, 0] },
          transition: {
            duration: a2 ? 0.7 : 0.28,
            ease: [0.65, 0, 0.35, 1],
            repeat: a2 ? 1 / 0 : 0,
            times: [0, 0.15, 0.85, 1]
          },
          children: (0, n.jsx)("span", { className: F().dot })
        })
      ]
    });
  }
  function ei({ delivery: e2, stage: t2 }) {
    let a2 = e2?.response, r2 = !!e2 && !a2, s2 = e2 ? r2 ? t2 ?? 0 : 3 : -1, i2 = s2 < 2 ? "idle" : 2 === s2 ? "active" : et(a2) ? "done" : a2?.timedOut ? "warn" : "error", o2 = s2 < 3 || !a2 ? "Response" : a2.status ? `${a2.status} ${D(a2.status)}` : a2.timedOut ? "Timed out" : "Unreachable", l2 = 2 === s2 ? "Waiting" : s2 < 3 || !a2 ? "Not sent yet" : B(a2.durationMs);
    return (0, n.jsx)("ol", {
      className: F().timeline,
      "aria-label": "Request timeline",
      children: [
        {
          label: s2 >= 1 ? "Signed" : "Sign",
          meta: "HMAC SHA-256",
          state: s2 < 0 ? "idle" : 0 === s2 ? "active" : "done"
        },
        {
          label: s2 >= 2 ? "Sent" : "Send",
          meta: "POST",
          state: s2 < 1 ? "idle" : 1 === s2 ? "active" : "done"
        },
        { label: o2, meta: l2, state: i2 }
      ].map(
        (e3, t3) => (0, n.jsxs)(
          "li",
          {
            className: F().node,
            children: [
              (0, n.jsxs)("span", {
                className: F().nodeTrack,
                children: [
                  (0, n.jsx)(er, { state: e3.state }),
                  t3 < 2 && (0, n.jsx)(es, {
                    filled: s2 > t3,
                    traveling: r2 && s2 === t3 + 1,
                    loop: 1 === t3
                  })
                ]
              }),
              (0, n.jsx)(en, {
                id: e3.label,
                className: F().nodeLabel,
                children: e3.label
              }),
              (0, n.jsx)(en, {
                id: e3.meta,
                className: F().nodeMeta,
                children: e3.meta
              })
            ]
          },
          t3
        )
      )
    });
  }
  function eo({ first: e2, headers: t2 }) {
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", { className: F().tStatus, children: e2 }),
        "\n",
        Object.entries(t2).map(
          ([e3, t3]) => (0, n.jsxs)(
            "span",
            {
              children: [
                (0, n.jsxs)("span", {
                  className: F().tHeader,
                  children: [e3, ":"]
                }),
                " ",
                t3,
                "\n"
              ]
            },
            e3
          )
        )
      ]
    });
  }
  function el({ delivery: e2, tab: t2 }) {
    if (!e2)
      return (0, n.jsxs)("div", {
        className: F().empty,
        children: [
          (0, n.jsx)("span", {
            className: F().emptyTitle,
            children: "No deliveries yet"
          }),
          (0, n.jsx)("span", {
            children: "Send a test event to see the response here."
          })
        ]
      });
    let { request: a2, response: r2 } = e2;
    return "request" === t2 ? (0, n.jsxs)("pre", {
      className: F().pre,
      children: [
        (0, n.jsx)(eo, {
          first: `POST ${ee(a2.url)} HTTP/1.1`,
          headers: { host: X(a2.url), ...a2.headers }
        }),
        "\n",
        H(a2.body)
      ]
    }) : r2 ? r2.status ? "headers" === t2 ? (0, n.jsx)("pre", {
      className: F().pre,
      children: (0, n.jsx)(eo, {
        first: `HTTP/1.1 ${r2.status} ${D(r2.status)}`,
        headers: r2.headers ?? {}
      })
    }) : (0, n.jsx)("pre", {
      className: F().pre,
      children: r2.body ? H(r2.body) : (0, n.jsx)("span", {
        className: F().tPunct,
        children: "Empty body"
      })
    }) : "headers" === t2 ? (0, n.jsx)("div", {
      className: F().empty,
      children: (0, n.jsx)("span", {
        children: "No response, so no headers."
      })
    }) : (0, n.jsxs)("div", {
      className: F().failure,
      children: [
        r2.timedOut ? (0, n.jsx)(h.A, {
          size: 14,
          strokeWidth: 1.75,
          className: F().warnIcon
        }) : (0, n.jsx)(p.A, {
          size: 14,
          strokeWidth: 1.75,
          className: F().dangerIcon
        }),
        (0, n.jsx)("span", { children: r2.error ?? "No response" })
      ]
    }) : (0, n.jsx)("div", {
      className: F().waiting,
      children: (0, n.jsx)(g.n, { children: "Waiting for response" })
    });
  }
  function ed({
    defaultEndpoint: e2 = v,
    onEndpointChange: t2,
    events: a2 = j,
    defaultEvent: r2,
    secret: T2 = "whsec_9vXc2Lq8RkT4mN7bP1sZ",
    defaultDeliveries: E2 = $,
    onSend: C2,
    onRetry: L2,
    source: A2 = { name: "Stripe", mark: (0, n.jsx)(q, {}) },
    signatureHeader: O2 = "stripe-signature",
    autoPlay: I2,
    className: P2
  }) {
    let W2 = (0, s.useId)(), U2 = !!(0, i.I)(), H2 = !C2, [er2, es2] = (0, s.useState)(e2), [eo2, ec2] = (0, s.useState)(r2 ?? a2[0]?.type ?? ""), [eu, eh] = (0, s.useState)(
      () => N(a2.find((e3) => e3.type === (r2 ?? a2[0]?.type))?.payload ?? {})
    ), [ep, em] = (0, s.useState)(false), [e_, eb] = (0, s.useState)(E2), [ey, ef] = (0, s.useState)(E2[0]?.id), [ew, ex] = (0, s.useState)("body"), [ek, eg] = (0, s.useState)(null), [ev, ej] = (0, s.useState)(null), [eN, eT] = (0, s.useState)(""), eS = (0, s.useRef)(null), eE = (0, s.useRef)(null), eC = (0, s.useRef)(false), eL = (0, s.useRef)(0);
    (0, s.useEffect)(() => {
      eL.current = Date.now();
    }, []);
    let e$ = E2 === $, eA = (0, s.useCallback)(() => {
      if (!e$)
        return ((e4 = /* @__PURE__ */ new Date()) => [e4.getHours(), e4.getMinutes(), e4.getSeconds()].map((e5) => String(e5).padStart(2, "0")).join(":"))();
      let e3 = new Date(1793111528e3 + (Date.now() - eL.current));
      return [e3.getUTCHours(), e3.getUTCMinutes(), e3.getUTCSeconds()].map((e4) => String(e4).padStart(2, "0")).join(":");
    }, [e$]), eO = (0, s.useRef)({ body: null, headers: null, request: null });
    (0, s.useEffect)(() => () => eE.current?.abort(), []);
    let eR = (0, s.useMemo)(
      () => (function(e3) {
        try {
          return JSON.parse(e3), { ok: true, bytes: new TextEncoder().encode(e3).length };
        } catch (n2) {
          let t3 = n2 instanceof Error ? n2.message : "", a3 = t3.match(/line (\d+)/);
          if (a3) return { ok: false, line: Number(a3[1]) };
          let r3 = t3.match(/position (\d+)/);
          if (r3)
            return {
              ok: false,
              line: e3.slice(0, Number(r3[1])).split("\n").length
            };
          return { ok: false, line: e3.trim() ? void 0 : 1 };
        }
      })(eu),
      [eu]
    ), eI = (function(e3) {
      try {
        let t3 = new URL(e3.trim()), a3 = "localhost" === t3.hostname || "127.0.0.1" === t3.hostname;
        return "https:" === t3.protocol || a3 && "http:" === t3.protocol;
      } catch {
        return false;
      }
    })(er2), ez = null !== ek, eM = e_.find((e3) => e3.id === ey), eP = eR.ok && (() => {
      try {
        return JSON.stringify(JSON.parse(eu), null, 2) === eu;
      } catch {
        return true;
      }
    })(), eD = (0, s.useCallback)(
      async (e3, t3, a3, r3) => {
        eE.current?.abort();
        let n2 = new AbortController();
        eE.current = n2;
        let { signal: s2 } = n2;
        eg(e3);
        try {
          let n3 = await t3(s2);
          if (s2.aborted) return;
          let i2 = { id: e3, event: n3.event, time: eA(), request: n3 };
          eb(
            (t4) => r3 ? [i2, ...t4].slice(0, 20) : t4.map((t5) => t5.id === e3 ? i2 : t5)
          ), ej(0), ef(e3), ex("body"), eT(
            `Sending ${n3.event} to ${X(n3.url)}.${H2 ? " Simulated, nothing was sent." : ""}`
          ), await Z(160 * !U2, s2), ej(1);
          let o2 = a3(n3, s2).catch((e4) => {
            if (s2.aborted) throw e4;
            return {
              status: 0,
              durationMs: 0,
              error: e4 instanceof Error ? e4.message : "The request failed"
            };
          });
          await Z(300 * !U2, s2), ej(2);
          let l2 = await o2;
          if (s2.aborted) return;
          eb((t4) => t4.map((t5) => t5.id === e3 ? { ...t5, response: l2 } : t5)), ej(3);
          let d2 = l2.status ? `${l2.status} ${D(l2.status)} in ${B(l2.durationMs)}` : l2.timedOut ? "Timed out" : `Failed: ${l2.error ?? "no response"}`;
          eT(`${n3.event}: ${d2}.${H2 ? " Simulated, nothing was sent." : ""}`);
        } catch {
        } finally {
          eE.current === n2 && (eg(null), ej(null), eE.current = null);
        }
      },
      [U2, H2, eA]
    ), eB = (0, s.useCallback)(
      async (e3, t3, a3) => {
        let r3 = Math.floor(Date.now() / 1e3), n2 = await M(T2, r3, t3), s2 = S(r3, n2, t3), i2 = {};
        for (let [e4, t4] of Object.entries(s2))
          i2["stripe-signature" === e4 ? O2 : e4] = t4;
        return {
          url: a3.trim(),
          event: e3,
          body: t3,
          headers: i2,
          timestamp: r3,
          signature: n2
        };
      },
      [T2, O2]
    ), eW = (0, s.useCallback)(() => {
      !ez && eI && eR.ok && eD(R("msg_"), () => eB(eo2, eu, er2), C2 ?? z, true);
    }, [ez, eI, eR.ok, eD, eB, eo2, eu, er2, C2]), eF = I2 ?? H2, eU = (0, s.useRef)(eW);
    (0, s.useEffect)(() => {
      eU.current = eW;
    }, [eW]), (0, s.useEffect)(() => {
      let e3, t3 = eS.current;
      if (!eF || !t3 || "u" < typeof IntersectionObserver) return;
      let a3 = new IntersectionObserver(
        ([t4]) => {
          t4?.isIntersecting ? e3 = setTimeout(() => {
            eC.current || (eC.current = true, eU.current()), a3.disconnect();
          }, 900) : clearTimeout(e3);
        },
        { threshold: 0.5 }
      );
      return a3.observe(t3), () => {
        a3.disconnect(), clearTimeout(e3);
      };
    }, [eF]);
    let eH = () => {
      eC.current = true;
    }, eK = (e3) => {
      let t3 = Y.findIndex((e4) => e4.id === ew), a3 = "ArrowRight" === e3.key ? (t3 + 1) % Y.length : "ArrowLeft" === e3.key ? (t3 + Y.length - 1) % Y.length : "Home" === e3.key ? 0 : "End" === e3.key ? Y.length - 1 : -1;
      a3 < 0 || (e3.preventDefault(), ex(Y[a3].id), eO.current[Y[a3].id]?.focus());
    }, eq = ez ? { key: "busy", tone: "busy", text: `Sending to ${X(er2)}` } : eI ? eR.ok ? { key: "ready", tone: "muted", text: "to send" } : {
      key: "json",
      tone: "danger",
      text: eR.line ? `Fix the payload on line ${eR.line}` : "Fix the payload to send"
    } : { key: "url", tone: "danger", text: "Enter a valid https URL" }, eQ = T2.slice(0, 6) + "\u2022".repeat(Math.max(0, T2.length - 6)), eY = eM ? (function(e3, t3) {
      let { request: a3, response: r3 } = e3;
      return "request" === t3 ? [
        `POST ${ee(a3.url)} HTTP/1.1`,
        `host: ${X(a3.url)}`,
        ...Object.entries(a3.headers).map(([e4, t4]) => `${e4}: ${t4}`),
        "",
        a3.body
      ].join("\n") : r3 ? "headers" === t3 ? r3.status ? [
        `HTTP/1.1 ${r3.status} ${D(r3.status)}`,
        ...Object.entries(r3.headers ?? {}).map(
          ([e4, t4]) => `${e4}: ${t4}`
        )
      ].join("\n") : "" : r3.body ?? r3.error ?? "" : "";
    })(eM, ew) : "", eG = `${W2}-panel`;
    return (0, n.jsxs)("section", {
      ref: eS,
      className: Q(F().root, P2),
      "aria-label": "Webhook tester",
      onPointerDownCapture: eH,
      onKeyDownCapture: eH,
      children: [
        (0, n.jsxs)("header", {
          className: F().header,
          children: [
            (0, n.jsx)("span", {
              className: F().mark,
              "aria-hidden": "true",
              children: A2.mark
            }),
            (0, n.jsxs)("div", {
              className: F().headings,
              children: [
                (0, n.jsx)("h2", {
                  className: F().title,
                  children: "Webhook tester"
                }),
                (0, n.jsxs)("p", {
                  className: F().subtitle,
                  children: ["Signed test events from ", A2.name]
                })
              ]
            }),
            (0, n.jsxs)("span", {
              className: F().modeChip,
              children: [
                (0, n.jsx)(m.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Test mode"
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: F().body,
          children: [
            (0, n.jsxs)("div", {
              className: F().request,
              children: [
                (0, n.jsxs)("div", {
                  className: F().fields,
                  children: [
                    (0, n.jsxs)("label", {
                      className: F().field,
                      children: [
                        (0, n.jsx)("span", {
                          className: F().fieldLabel,
                          children: "Endpoint"
                        }),
                        (0, n.jsxs)("span", {
                          className: F().fieldValue,
                          children: [
                            (0, n.jsx)("span", {
                              className: F().method,
                              children: "POST"
                            }),
                            (0, n.jsx)("input", {
                              className: Q(F().input, !eI && F().inputBad),
                              value: er2,
                              spellCheck: false,
                              inputMode: "url",
                              autoComplete: "off",
                              "aria-invalid": !eI || void 0,
                              onChange: (e3) => {
                                es2(e3.target.value), t2?.(e3.target.value);
                              },
                              onKeyDown: (e3) => {
                                "Enter" === e3.key && (e3.metaKey || e3.ctrlKey || "INPUT" === e3.currentTarget.tagName) && (e3.preventDefault(), eW());
                              }
                            })
                          ]
                        })
                      ]
                    }),
                    (0, n.jsxs)("label", {
                      className: F().field,
                      children: [
                        (0, n.jsx)("span", {
                          className: F().fieldLabel,
                          children: "Event"
                        }),
                        (0, n.jsxs)("span", {
                          className: F().fieldValue,
                          children: [
                            (0, n.jsx)("select", {
                              className: F().select,
                              value: eo2,
                              onChange: (e3) => {
                                var t3;
                                return t3 = e3.target.value, void (eH(), ec2(t3), eh(
                                  N(
                                    a2.find((e4) => e4.type === t3)?.payload ?? {}
                                  )
                                ));
                              },
                              children: a2.map(
                                (e3) => (0, n.jsx)(
                                  "option",
                                  { value: e3.type, children: e3.type },
                                  e3.type
                                )
                              )
                            }),
                            (0, n.jsx)(_.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              className: F().chevron,
                              "aria-hidden": "true"
                            })
                          ]
                        })
                      ]
                    }),
                    (0, n.jsxs)("div", {
                      className: F().field,
                      children: [
                        (0, n.jsx)("span", {
                          className: F().fieldLabel,
                          children: "Secret"
                        }),
                        (0, n.jsxs)("span", {
                          className: F().fieldValue,
                          children: [
                            (0, n.jsxs)("span", {
                              className: F().secret,
                              children: [
                                (0, n.jsx)("span", {
                                  className: Q(
                                    F().secretText,
                                    ep && F().secretHidden
                                  ),
                                  "aria-hidden": "true",
                                  children: eQ
                                }),
                                (0, n.jsx)("span", {
                                  className: Q(
                                    F().secretText,
                                    !ep && F().secretHidden
                                  ),
                                  "aria-hidden": !ep,
                                  children: T2
                                }),
                                !ep && (0, n.jsx)("span", {
                                  className: F().srOnly,
                                  children: "Hidden"
                                })
                              ]
                            }),
                            (0, n.jsx)("button", {
                              type: "button",
                              className: F().iconButton,
                              "aria-pressed": ep,
                              "aria-label": ep ? "Hide signing secret" : "Reveal signing secret",
                              onClick: () => em((e3) => !e3),
                              children: (0, n.jsx)(en, {
                                id: ep ? "off" : "on",
                                className: F().iconSwap,
                                children: ep ? (0, n.jsx)(b.A, {
                                  size: 16,
                                  strokeWidth: 1.75
                                }) : (0, n.jsx)(y.A, {
                                  size: 16,
                                  strokeWidth: 1.75
                                })
                              })
                            }),
                            (0, n.jsx)(x.CopyButton, {
                              value: T2,
                              label: "Copy signing secret",
                              iconOnly: true,
                              variant: "plain",
                              className: F().copy
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: F().editorWrap,
                  children: [
                    (0, n.jsx)(K, {
                      value: eu,
                      onChange: (e3) => {
                        eH(), eh(e3);
                      },
                      onSubmit: eW,
                      label: `Payload for ${eo2}`,
                      resetKey: eo2,
                      invalidLine: eR.ok ? void 0 : eR.line
                    }),
                    (0, n.jsxs)("div", {
                      className: F().editorFooter,
                      children: [
                        (0, n.jsx)(en, {
                          id: eR.ok ? "ok" : `bad-${eR.line ?? 0}`,
                          className: F().editorStatus,
                          children: eR.ok ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(c.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                className: F().okIcon,
                                "aria-hidden": "true"
                              }),
                              "Valid JSON",
                              (0, n.jsx)("span", {
                                className: F().sep,
                                children: "\xB7"
                              }),
                              (0, n.jsxs)("span", {
                                className: F().num,
                                children: [
                                  eR.bytes.toLocaleString("en-US"),
                                  " bytes"
                                ]
                              })
                            ]
                          }) : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(p.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                className: F().dangerIcon,
                                "aria-hidden": "true"
                              }),
                              eR.line ? `Invalid JSON on line ${eR.line}` : "Invalid JSON"
                            ]
                          })
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          className: F().textButton,
                          onClick: () => {
                            eH();
                            try {
                              eh(JSON.stringify(JSON.parse(eu), null, 2));
                            } catch {
                            }
                          },
                          disabled: !eR.ok || eP,
                          children: "Format"
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: F().sendRow,
                  children: [
                    (0, n.jsx)(en, {
                      id: eq.key,
                      className: Q(
                        F().hint,
                        "danger" === eq.tone && F().hintDanger
                      ),
                      children: "busy" === eq.tone ? (0, n.jsx)(g.n, { children: eq.text }) : "danger" === eq.tone ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(p.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          eq.text
                        ]
                      }) : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(k.ue, {
                            keys: ["mod", "enter"],
                            size: "sm"
                          }),
                          eq.text
                        ]
                      })
                    }),
                    (0, n.jsx)(w.$, {
                      size: "sm",
                      onClick: () => {
                        eH(), eW();
                      },
                      loading: ez,
                      disabled: !ez && (!eI || !eR.ok),
                      className: F().sendButton,
                      children: "Send test event"
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: F().response,
              children: [
                (0, n.jsx)(ei, {
                  delivery: eM,
                  stage: eM && eM.id === ek ? ev : null
                }),
                (0, n.jsxs)("div", {
                  className: F().well,
                  children: [
                    (0, n.jsxs)("div", {
                      className: F().tabsBar,
                      children: [
                        (0, n.jsx)("div", {
                          role: "tablist",
                          "aria-label": "Response",
                          className: F().tabs,
                          children: Y.map(
                            (e3) => (0, n.jsxs)(
                              "button",
                              {
                                ref: (t3) => {
                                  eO.current[e3.id] = t3;
                                },
                                type: "button",
                                role: "tab",
                                id: `${W2}-tab-${e3.id}`,
                                "aria-selected": ew === e3.id,
                                "aria-controls": eG,
                                tabIndex: ew === e3.id ? 0 : -1,
                                className: Q(F().tab, ew === e3.id && F().tabOn),
                                onClick: () => ex(e3.id),
                                onKeyDown: eK,
                                children: [
                                  e3.label,
                                  ew === e3.id && (0, n.jsx)(l.PY1.span, {
                                    layoutId: `${W2}-tab-line`,
                                    className: F().tabLine,
                                    transition: U2 ? { duration: 0 } : J
                                  })
                                ]
                              },
                              e3.id
                            )
                          )
                        }),
                        (0, n.jsx)(x.CopyButton, {
                          value: eY,
                          label: `Copy ${ew}`,
                          iconOnly: true,
                          variant: "plain",
                          disabled: !eY,
                          className: F().copy
                        })
                      ]
                    }),
                    (0, n.jsx)("div", {
                      className: F().wellBody,
                      role: "tabpanel",
                      id: eG,
                      "aria-labelledby": `${W2}-tab-${ew}`,
                      tabIndex: 0,
                      children: (0, n.jsx)(o.N, {
                        initial: false,
                        children: (0, n.jsx)(
                          l.PY1.div,
                          {
                            className: F().wellLayer,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: {
                              opacity: 0,
                              transition: U2 ? { duration: 0 } : V
                            },
                            transition: U2 ? { duration: 0 } : G,
                            children: (0, n.jsx)(el, { delivery: eM, tab: ew })
                          },
                          `${eM?.id ?? "none"}-${ew}-${eM?.response ? "r" : "p"}`
                        )
                      })
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: F().deliveries,
                  children: [
                    (0, n.jsxs)("div", {
                      className: F().deliveriesHead,
                      children: [
                        (0, n.jsx)("h3", {
                          className: F().sectionTitle,
                          children: "Recent deliveries"
                        }),
                        (0, n.jsxs)("span", {
                          className: F().meta,
                          children: [
                            e_.filter((e3) => e3.response && !et(e3.response)).length,
                            " failed"
                          ]
                        })
                      ]
                    }),
                    0 === e_.length ? (0, n.jsx)("div", {
                      className: F().listEmpty,
                      children: "Deliveries show up here after the first test event."
                    }) : (0, n.jsx)("ul", {
                      className: F().list,
                      children: (0, n.jsx)(o.N, {
                        initial: false,
                        children: e_.map((e3) => {
                          let t3 = e3.response, a3 = et(t3), r3 = !!t3 && !a3, s2 = t3 ? a3 ? "ok" : t3.timedOut ? "warn" : "bad" : "pending";
                          return (0, n.jsxs)(
                            l.PY1.li,
                            {
                              layout: !U2 && "position",
                              className: Q(
                                F().row,
                                e3.id === ey && F().rowOn
                              ),
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0, transition: V },
                              transition: U2 ? { duration: 0 } : { layout: J, opacity: G },
                              children: [
                                (0, n.jsxs)("button", {
                                  type: "button",
                                  className: Q(
                                    F().rowMain,
                                    !r3 && F().rowWide
                                  ),
                                  "aria-current": e3.id === ey || void 0,
                                  onClick: () => ef(e3.id),
                                  "aria-label": `${e3.event}, ${!t3 ? "sending" : t3.status ? `${t3.status} ${D(t3.status)}` : ea(t3)}, ${e3.time}`,
                                  children: [
                                    (0, n.jsxs)("span", {
                                      className: Q(
                                        F().chip,
                                        F()[`chip_${s2}`]
                                      ),
                                      children: [
                                        (0, n.jsx)(en, {
                                          id: s2,
                                          className: F().chipIcon,
                                          children: "pending" === s2 ? (0, n.jsx)(d.A, {
                                            size: 14,
                                            strokeWidth: 1.75,
                                            className: F().spin
                                          }) : "ok" === s2 ? (0, n.jsx)(c.A, {
                                            size: 14,
                                            strokeWidth: 1.75
                                          }) : "warn" === s2 ? (0, n.jsx)(h.A, {
                                            size: 14,
                                            strokeWidth: 1.75
                                          }) : (0, n.jsx)(u.A, {
                                            size: 14,
                                            strokeWidth: 1.75
                                          })
                                        }),
                                        (0, n.jsx)(en, {
                                          id: ea(t3),
                                          className: F().chipText,
                                          children: ea(t3)
                                        })
                                      ]
                                    }),
                                    (0, n.jsx)("span", {
                                      className: F().rowEvent,
                                      title: e3.event,
                                      children: e3.event
                                    }),
                                    (0, n.jsx)("span", {
                                      className: F().rowTime,
                                      children: e3.time
                                    }),
                                    !r3 && (0, n.jsx)("span", {
                                      className: F().rowDuration,
                                      children: t3 ? B(t3.durationMs) : ""
                                    })
                                  ]
                                }),
                                r3 && (0, n.jsxs)("button", {
                                  type: "button",
                                  className: F().retry,
                                  onClick: () => {
                                    !ez && (eC.current = true, eD(
                                      e3.id,
                                      () => eB(
                                        e3.event,
                                        e3.request.body,
                                        e3.request.url
                                      ),
                                      (t4, a4) => L2 ? L2({ ...e3, request: t4 }, a4) : (C2 ?? z)(t4, a4),
                                      false
                                    ));
                                  },
                                  disabled: ez,
                                  "aria-label": `Retry ${e3.event} delivery`,
                                  children: [
                                    (0, n.jsx)(f.A, {
                                      size: 14,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    "Retry"
                                  ]
                                })
                              ]
                            },
                            e3.id
                          );
                        })
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: F().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eN
        })
      ]
    });
  }
  let ec = ed;
};

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
A.reg(76266, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { YV: () => u, ue: () => h });
  var r = a(95155), n = a(12115), s = a(12053), i = a.n(s);
  let o = (...e2) => (t2) => e2.includes(t2.key), l = (e2, ...t2) => (a2) => a2.code === e2 || t2.includes(a2.key), d = () => () => {
  }, c = () => {
    let e2 = navigator;
    return /mac|iphone|ipad|ipod/i.test(
      e2.userAgentData?.platform || e2.platform || e2.userAgent
    ) ? "mac" : "pc";
  };
  function u(e2 = "auto") {
    let t2 = (0, n.useSyncExternalStore)(d, c, () => "mac");
    return "auto" === e2 ? t2 : e2;
  }
  function h({
    keys: e2,
    children: t2,
    size: a2 = "md",
    platform: s2 = "auto",
    listen: d2 = false,
    pressed: c2 = false,
    onTrigger: p,
    className: m,
    ..._
  }) {
    let b = u(s2), y = (void 0 !== e2 ? "string" != typeof e2 ? [...e2] : e2.replace(/\+\+$/, "+plus").split("+").filter(Boolean) : "string" == typeof t2 ? [t2] : []).map(
      (e3) => (function e4(t3, { platform: a3 }) {
        let r2 = t3.trim(), n2 = r2.toLowerCase(), s3 = "mac" === a3;
        switch (n2) {
          case "mod":
            return s3 ? e4("meta", { platform: a3 }) : e4("ctrl", { platform: a3 });
          case "meta":
          case "cmd":
          case "command":
          case "win":
          case "super":
            return {
              id: "meta",
              glyph: s3 ? "\u2318" : "Win",
              name: s3 ? "Command" : "Windows",
              modifier: "meta",
              match: o("Meta", "OS")
            };
          case "ctrl":
          case "control":
            return {
              id: "ctrl",
              glyph: s3 ? "\u2303" : "Ctrl",
              name: "Control",
              modifier: "ctrl",
              match: o("Control")
            };
          case "alt":
          case "option":
          case "opt":
            return {
              id: "alt",
              glyph: s3 ? "\u2325" : "Alt",
              name: s3 ? "Option" : "Alt",
              modifier: "alt",
              match: o("Alt")
            };
          case "shift":
            return {
              id: "shift",
              glyph: s3 ? "\u21E7" : "Shift",
              name: "Shift",
              modifier: "shift",
              match: o("Shift")
            };
          case "enter":
          case "return":
            return {
              id: n2,
              glyph: s3 ? "\u21B5" : "Enter",
              name: s3 ? "Return" : "Enter",
              match: o("Enter")
            };
          case "esc":
          case "escape":
            return {
              id: "esc",
              glyph: "Esc",
              name: "Escape",
              match: o("Escape", "Esc")
            };
          case "tab":
            return {
              id: n2,
              glyph: s3 ? "\u21E5" : "Tab",
              name: "Tab",
              match: o("Tab")
            };
          case "backspace":
            return {
              id: n2,
              glyph: s3 ? "\u232B" : "Backspace",
              name: s3 ? "Delete" : "Backspace",
              match: o("Backspace")
            };
          case "delete":
          case "del":
            return {
              id: "delete",
              glyph: s3 ? "\u2326" : "Del",
              name: s3 ? "Forward delete" : "Delete",
              match: o("Delete")
            };
          case "space":
            return {
              id: n2,
              glyph: "Space",
              name: "Space",
              match: l("Space", " ")
            };
          case "up":
          case "arrowup":
            return {
              id: "up",
              glyph: "\u2191",
              name: "Up arrow",
              match: o("ArrowUp")
            };
          case "down":
          case "arrowdown":
            return {
              id: "down",
              glyph: "\u2193",
              name: "Down arrow",
              match: o("ArrowDown")
            };
          case "left":
          case "arrowleft":
            return {
              id: "left",
              glyph: "\u2190",
              name: "Left arrow",
              match: o("ArrowLeft")
            };
          case "right":
          case "arrowright":
            return {
              id: "right",
              glyph: "\u2192",
              name: "Right arrow",
              match: o("ArrowRight")
            };
          case "pageup":
            return {
              id: n2,
              glyph: "PgUp",
              name: "Page up",
              match: o("PageUp")
            };
          case "pagedown":
            return {
              id: n2,
              glyph: "PgDn",
              name: "Page down",
              match: o("PageDown")
            };
          case "home":
            return { id: n2, glyph: "Home", name: "Home", match: o("Home") };
          case "end":
            return { id: n2, glyph: "End", name: "End", match: o("End") };
          case "plus":
            return { id: n2, glyph: "+", name: "Plus", match: o("+", "=") };
          case "capslock":
            return {
              id: n2,
              glyph: s3 ? "\u21EA" : "Caps",
              name: "Caps lock",
              match: o("CapsLock")
            };
        }
        return /^[a-z]$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: l(`Key${n2.toUpperCase()}`, n2, n2.toUpperCase())
        } : /^[0-9]$/.test(n2) ? { id: n2, glyph: n2, name: n2, match: l(`Digit${n2}`, n2) } : /^f([1-9]|1[0-9]|2[0-4])$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: o(n2.toUpperCase())
        } : {
          id: n2,
          glyph: 1 === r2.length ? r2 : r2.charAt(0).toUpperCase() + r2.slice(1),
          name: r2,
          match: (e5) => e5.key.toLowerCase() === n2
        };
      })(e3, { platform: b })
    ), f = y.map((e3) => e3.id).join("+") + b, [w, x] = (0, n.useState)(() => /* @__PURE__ */ new Set()), k = (0, n.useRef)({ parsed: y, onTrigger: p, mac: "mac" === b });
    (0, n.useEffect)(() => {
      k.current = { parsed: y, onTrigger: p, mac: "mac" === b };
    }), (0, n.useEffect)(() => {
      if (!d2) return;
      let e3 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Map(), a3 = () => x(new Set(e3)), r2 = (r3) => {
        window.clearTimeout(t3.get(r3)), t3.delete(r3), e3.delete(r3) && a3();
      }, n2 = () => {
        t3.forEach((e4) => window.clearTimeout(e4)), t3.clear(), e3.size && (e3.clear(), a3());
      }, s3 = (n3) => {
        var s4;
        let { parsed: i3, onTrigger: o2, mac: l2 } = k.current;
        if (!i3.some(
          (e4) => "meta" === e4.modifier || "ctrl" === e4.modifier || "alt" === e4.modifier
        ) && (s4 = n3.target) && s4.tagName && (s4.isContentEditable || "TEXTAREA" === s4.tagName || "SELECT" === s4.tagName || "INPUT" === s4.tagName && ![
          "checkbox",
          "radio",
          "button",
          "submit",
          "range",
          "color"
        ].includes(s4.type)))
          return;
        let d3 = false;
        if (i3.forEach((a4, s5) => {
          a4.match(n3) && (e3.has(s5) || (e3.add(s5), d3 = true), l2 && n3.metaKey && !a4.modifier && (window.clearTimeout(t3.get(s5)), t3.set(
            s5,
            window.setTimeout(() => r2(s5), 170)
          )));
        }), d3 && a3(), !o2 || n3.repeat || !i3.length)
          return;
        let c3 = { meta: false, ctrl: false, alt: false, shift: false };
        i3.forEach((e4) => {
          e4.modifier && (c3[e4.modifier] = true);
        });
        let u2 = i3.filter((e4) => !e4.modifier), h2 = c3.meta === n3.metaKey && c3.ctrl === n3.ctrlKey && c3.alt === n3.altKey && (c3.shift === n3.shiftKey || !c3.shift && 1 === u2.length && 1 === u2[0].glyph.length && !/[a-z0-9]/i.test(u2[0].glyph)), p2 = u2.length ? u2.every((e4) => e4.match(n3)) : i3.some((e4) => e4.match(n3));
        h2 && p2 && (n3.preventDefault(), o2(n3));
      }, i2 = (e4) => {
        let { parsed: t4 } = k.current;
        "Meta" === e4.key || "OS" === e4.key ? n2() : t4.forEach((t5, a4) => {
          t5.match(e4) && r2(a4);
        });
      };
      return window.addEventListener("keydown", s3), window.addEventListener("keyup", i2), window.addEventListener("blur", n2), document.addEventListener("visibilitychange", n2), () => {
        window.removeEventListener("keydown", s3), window.removeEventListener("keyup", i2), window.removeEventListener("blur", n2), document.removeEventListener("visibilitychange", n2), t3.forEach((e4) => window.clearTimeout(e4)), x(/* @__PURE__ */ new Set());
      };
    }, [d2, f]);
    let g = (e3, t3, a3) => (0, r.jsx)(
      "kbd",
      {
        className: i().key,
        "data-pressed": c2 || w.has(a3) ? "" : void 0,
        children: null === t3 ? e3 : (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("span", {
              className: i().glyph,
              "aria-hidden": "true",
              children: e3
            }),
            (0, r.jsx)("span", {
              className: i().hidden,
              children: t3
            })
          ]
        })
      },
      a3
    ), v = [i().kbd, i()[a2], m].filter(Boolean).join(" ");
    if (void 0 === e2) {
      let e3 = y[0], a3 = e3 && e3.glyph !== e3.name;
      return (0, r.jsx)("kbd", {
        ..._,
        className: v,
        children: g(a3 ? e3.glyph : t2, a3 ? e3.name : null, 0)
      });
    }
    return (0, r.jsx)("kbd", {
      ..._,
      className: v,
      children: y.map(
        (e3, t3) => (0, r.jsxs)(
          "span",
          {
            className: i().slot,
            children: [
              t3 > 0 && (0, r.jsx)("span", { className: i().hidden, children: " " }),
              g(e3.glyph, e3.glyph === e3.name ? null : e3.name, t3)
            ]
          },
          `${e3.id}-${t3}`
        )
      )
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(84824, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "flask-conical",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
          key: "18mbvz"
        }
      ],
      ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
      ["path", { d: "M8.5 2h7", key: "csnxdl" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(89034, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "eye-off",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
          key: "ct8e1f"
        }
      ],
      ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
      [
        "path",
        {
          d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
          key: "13bj9a"
        }
      ],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(94890, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "circle-x",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }]
    ],
    aliases: ["x-circle"]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("webhook-tester", [12053,30040]);
A.item("webhook-tester", {entry:57776, export:"WebhookTester", kind:"block", tier:"pro", unresolved:[]});
})();