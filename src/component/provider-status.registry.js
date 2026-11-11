/* provider-status (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(20414, ".root{--cols:16px minmax(0,1fr) 104px 64px minmax(120px,176px) 52px 16px;--ok:color-mix(in oklab,var(--success) 82%,var(--surface));container-type:inline-size;position:relative;box-sizing:border-box;width:100%;max-width:760px;padding:8px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:20px;letter-spacing:var(--tracking-body)}\n.latency,.num,.pct,.tipPct{font-variant-numeric:tabular-nums}\n.num{display:inline-grid;justify-items:end}\n.num>*{grid-area:1/1}\n.latency{grid-area:p50}\n.latency,.pct{justify-self:end;font-size:.8125rem;color:var(--text-secondary)}\n.latency .bone,.pct .bone,.status .bone{justify-self:inherit}\n.chev,.latency,.pct{justify-self:end}\n.pct{grid-area:pct}\n.bar,.pct{margin-top:8px}\n.tipPct{color:var(--text-secondary)}\n.numGhost{visibility:hidden}\n.header{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"title refresh\" \"summary refresh\";column-gap:12px;row-gap:2px;align-items:center;padding:12px}\n@container (max-width: 560px){.header{grid-template-areas:\"title refresh\" \"summary summary\"}\n.heading{display:contents}\n.title{grid-area:title;min-width:0;margin:0;overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:20px;letter-spacing:inherit;text-overflow:ellipsis;white-space:nowrap}\n.summary{grid-area:summary;display:grid;min-width:0;height:20px}\n.summaryItem{grid-area:1/1;display:inline-flex;align-items:center;gap:6px;min-width:0;font-size:.8125rem;line-height:20px;color:var(--text-secondary)}\n.summaryItem[data-tone=operational] .summaryIcon{color:var(--success)}\n.summaryItem[data-tone=degraded] .summaryIcon{color:var(--warning)}\n.summaryItem:is([data-tone=outage],[data-tone=error]) .summaryIcon{color:var(--danger)}\n.summaryIcon{flex:none;width:14px;height:14px}\n.summaryText{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.refresh{grid-area:refresh;display:flex;align-items:center;gap:4px;margin:-6px -6px -6px 0}\n.countdown{display:inline-flex;align-items:center;gap:8px;height:32px;font-size:var(--text-xs);line-height:16px;color:var(--text-muted);white-space:nowrap}\n.countdownText{display:inline-flex;justify-content:flex-end}\n.countdownLabel{white-space:nowrap}\n.ring{order:2;flex:none;width:14px;height:14px;overflow:visible;transform:rotate(-90deg)}\n.ring circle{fill:none;stroke-width:1.75}\n.ring[data-phase=error] .ringFill{stroke:var(--danger)}\n.ringTrack{stroke:var(--border)}\n.ringFill{stroke:var(--text-secondary);stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:0;animation-name:drain;animation-timing-function:linear;animation-fill-mode:forwards;transition:stroke var(--duration-fast) var(--ease-standard)}\n.ringSpin{stroke:var(--text-secondary);stroke-linecap:round;stroke-dasharray:26 74;transform-origin:8px 8px;transform-box:view-box;animation:spin .8s linear infinite}\n@media (prefers-reduced-motion:reduce){.barBone,.bone,.ringSpin{animation:none}\n.refreshButton{display:grid;place-items:center;width:32px;height:32px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.refreshButton svg{width:16px;height:16px}\n@media (hover:hover) and (pointer:fine){.refreshButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.refreshButton:active{transform:scale(.94);background:var(--surface-muted)}\n.refreshButton:disabled{cursor:default;opacity:.45;transform:none;background:transparent}\n.columns{display:grid;grid-template-columns:var(--cols);grid-template-areas:\"mark name status p50 bar pct chev\";column-gap:12px;align-items:end;height:20px;padding:0 12px 4px;font-size:var(--text-xs);line-height:16px;color:var(--text-muted)}\n.columns,.meta{display:none}\n.colName{grid-column:mark-start/name-end}\n.colStatus{grid-area:status}\n.colLatency{grid-area:p50;justify-self:end}\n.colBar{grid-column:bar-start/pct-end}\n.list{display:grid;grid-template-columns:minmax(0,1fr);margin:0;padding:0;list-style:none}\n.item{position:relative;min-width:0;border-radius:var(--radius-control);transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.item[data-interactive]:hover{background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}\n.item[data-open]{background:color-mix(in oklab,var(--surface-muted) 70%,var(--surface))}\n.item[data-open] .chev>svg{transform:rotate(180deg)}\n.item[data-skeleton] .name{gap:6px}\n.chev>svg,.item,.tick{transition:none}\n.line{position:relative;display:grid;grid-template-columns:var(--cols);grid-template-areas:\"mark name status p50 bar pct chev\";align-items:center;column-gap:12px;min-height:56px;padding:0 12px;box-sizing:border-box}\n.line{grid-template-columns:16px minmax(0,1fr) auto;grid-template-areas:\"mark name chev\" \". status p50\" \". bar pct\";row-gap:2px;min-height:0;padding:12px}\n.hit{--focus-outline-offset:-2px;position:absolute;inset:0;z-index:1;padding:0;border:0;border-radius:var(--radius-control);background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.mark{grid-area:mark;display:grid;width:16px;height:16px;place-items:center;color:var(--foreground)}\n.mark>svg{display:block;width:16px;height:16px}\n.mark.bone{width:16px;height:16px;border-radius:50%}\n.name{grid-area:name;display:grid;min-width:0}\n.nameText{overflow:hidden;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}\n.meta{display:flex;min-width:0;font-size:var(--text-xs);line-height:16px;color:var(--text-muted)}\n.detail{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.status{grid-area:status;display:grid;min-width:0}\n.status .swap{justify-items:start}\n.health{display:inline-flex;align-items:center;gap:6px;font-size:.8125rem;line-height:20px;white-space:nowrap;color:var(--foreground)}\n.health[data-health=operational]{color:var(--text-secondary)}\n.health[data-health=operational] .healthIcon{color:var(--success)}\n.health[data-health=degraded] .healthIcon{color:var(--warning)}\n.health[data-health=outage] .healthIcon{color:var(--danger)}\n.swapItem,.swap>.health{grid-area:1/1;white-space:nowrap}\n.tip .health{font-size:var(--text-xs);line-height:16px}\n.healthIcon{flex:none;width:14px;height:14px}\n.swap{display:inline-grid;justify-items:end}\n.chev{grid-area:chev;display:grid;width:16px;height:16px;place-items:center;color:var(--text-muted)}\n.chev>svg{width:16px;height:16px;transition:transform var(--duration-standard) var(--ease-standard)}\n.bar{--focus-outline-offset:3px;grid-area:bar;position:relative;z-index:2;display:flex;gap:2px;height:24px;border-radius:4px;touch-action:pan-y;cursor:default}\n.bar[data-scrub] .tick:not([data-active]){opacity:.42}\n.bar{height:20px}\n.tick{flex:1 1 0;min-width:2px;border-radius:2px;background:var(--border);transition:background-color var(--duration-standard) var(--ease-standard),opacity var(--duration-instant) var(--ease-standard)}\n.tick[data-health=operational]{background:var(--ok)}\n.tick[data-health=degraded]{background:var(--warning)}\n.tick[data-health=outage]{background:var(--danger)}\n.barBone .tick{background:var(--surface-muted)}\n.panel{overflow:hidden}\n.panelInner{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"head link\" \"updates updates\";column-gap:12px;padding:0 12px 16px 40px}\n.panelInner{grid-template-columns:minmax(0,1fr);grid-template-areas:\"head\" \"updates\" \"link\"}\n.panelHead{grid-area:head;display:flex;min-width:0;padding-top:2px;margin-bottom:12px}\n.panelTitleWrap{display:grid;min-width:0}\n.panelTitle{font-weight:500;line-height:20px}\n.panelMeta{justify-items:start;font-size:var(--text-xs);line-height:16px;color:var(--text-muted)}\n.panelLink{grid-area:link;align-self:start;margin:-4px -4px 0 0}\n.panelLink svg{width:14px;height:14px}\n.panelLink{justify-self:start;margin:8px 0 -6px -12px}\n.updates{grid-area:updates;display:grid;margin:0;padding:0;list-style:none}\n.update{position:relative;display:grid;gap:2px;padding:0 0 12px 20px}\n.update:last-child{padding-bottom:0}\n.update:not(:last-child):before{content:\"\";position:absolute;top:15px;bottom:1px;left:3px;width:1px;background:var(--border)}\n.update[data-latest] .updateDot{background:var(--foreground)}\n.update[data-latest][data-stage=resolved] .updateDot{background:var(--success)}\n.updateDot{position:absolute;top:7px;left:0;width:7px;height:7px;border-radius:50%;background:var(--border);transition:background-color var(--duration-standard) var(--ease-standard)}\n.updateHead{display:flex;align-items:baseline;gap:8px;line-height:20px}\n.updateStage{font-size:.8125rem;font-weight:500}\n.updateTime{font-size:var(--text-xs);color:var(--text-muted)}\n.updateText{font-size:.8125rem;line-height:20px;color:var(--text-secondary);text-wrap:pretty}\n.tip{position:absolute;top:0;left:0;z-index:40;display:grid;gap:4px;box-sizing:border-box;min-width:184px;max-width:248px;padding:8px 12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:var(--shadow-floating);font-size:var(--text-xs);line-height:16px;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .1s var(--ease-standard),visibility 0s linear .1s}\n.tip[data-open]{opacity:1;visibility:visible;transition:opacity var(--duration-instant) var(--ease-standard),visibility 0s}\n.tipHead{display:flex;align-items:baseline;justify-content:space-between;gap:12px}\n.tipDate{font-weight:500}\n.tipBody{display:grid;gap:2px}\n.footnote,.tipNote{color:var(--text-muted);text-wrap:pretty}\n.footnote{margin:0;padding:8px 12px;font-size:var(--text-xs);line-height:16px}\n.empty{display:grid;justify-items:center;gap:4px;padding:40px 16px 44px;text-align:center}\n.emptyTitle{font-weight:500}\n.emptyText{max-width:32ch;font-size:.8125rem;color:var(--text-secondary)}\n.bone{display:block;height:10px;border-radius:5px;background:var(--surface-muted);animation:pulse 1.4s var(--ease-in-out) infinite}\n.barBone{animation:pulse 1.4s var(--ease-in-out) infinite}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}", {"root":"root","latency":"latency","num":"num","pct":"pct","tipPct":"tipPct","bone":"bone","status":"status","chev":"chev","bar":"bar","numGhost":"numGhost","header":"header","heading":"heading","title":"title","summary":"summary","summaryItem":"summaryItem","summaryIcon":"summaryIcon","summaryText":"summaryText","refresh":"refresh","countdown":"countdown","countdownText":"countdownText","countdownLabel":"countdownLabel","ring":"ring","ringFill":"ringFill","ringTrack":"ringTrack","ringSpin":"ringSpin","barBone":"barBone","refreshButton":"refreshButton","columns":"columns","meta":"meta","colName":"colName","colStatus":"colStatus","colLatency":"colLatency","colBar":"colBar","list":"list","item":"item","name":"name","tick":"tick","line":"line","hit":"hit","mark":"mark","nameText":"nameText","detail":"detail","swap":"swap","health":"health","healthIcon":"healthIcon","swapItem":"swapItem","tip":"tip","panel":"panel","panelInner":"panelInner","panelHead":"panelHead","panelTitleWrap":"panelTitleWrap","panelTitle":"panelTitle","panelMeta":"panelMeta","panelLink":"panelLink","updates":"updates","update":"update","updateDot":"updateDot","updateHead":"updateHead","updateStage":"updateStage","updateTime":"updateTime","updateText":"updateText","tipHead":"tipHead","tipDate":"tipDate","tipBody":"tipBody","footnote":"footnote","tipNote":"tipNote","empty":"empty","emptyTitle":"emptyTitle","emptyText":"emptyText","srOnly":"srOnly"});
A.reg(41189, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let l = {
    name: "rotate-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
          key: "1p45f6"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
    ]
  };
  l.node;
  let n = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.regCss(50950, ".demo{display:flex;justify-content:center;width:100%}", {"demo":"demo"});
A.reg(72280, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ProviderStatusDemo: () => X, default: () => ee });
  var r = a(95155), s = a(12115), n = a(18310), i = a(80642), l = a(25354), o = a(35484), d = a(41189), c = a(12363), u = a(52898);
  let p = "2026-10-27", m = [
    {
      stage: "investigating",
      at: "14:02 UTC",
      message: "We are seeing elevated 5xx errors on the Responses API for GPT-6.1 Sol. GPT-6 Luna is not affected."
    },
    {
      stage: "identified",
      at: "14:19 UTC",
      message: "A capacity issue in one inference cluster is causing the errors. We are moving traffic to healthy regions."
    },
    {
      stage: "monitoring",
      at: "14:41 UTC",
      message: "Error rates are back near normal. Some requests may still see higher latency while traffic rebalances."
    },
    {
      stage: "resolved",
      at: "14:58 UTC",
      message: "Error rates and latency have been normal for 15 minutes. This incident is resolved."
    }
  ], h = [
    {
      stage: "investigating",
      at: "13:37 UTC",
      message: "Some requests to Gemini 4 Argon in us-central1 see a longer time to first token."
    },
    {
      stage: "identified",
      at: "13:55 UTC",
      message: "A configuration change increased queue times on one serving pool. A rollback is in progress."
    },
    {
      stage: "monitoring",
      at: "14:24 UTC",
      message: "The rollback is complete and latency is recovering across us-central1."
    },
    {
      stage: "resolved",
      at: "14:50 UTC",
      message: "Latency is back to normal in every region. This incident is resolved."
    }
  ], g = [
    {
      stage: "investigating",
      at: "15:06 UTC",
      message: "Some chat completion requests to Mistral Large 4 return 503 errors in the EU region."
    },
    {
      stage: "identified",
      at: "15:18 UTC",
      message: "A failed node pool upgrade reduced capacity. We are adding capacity back."
    },
    {
      stage: "monitoring",
      at: "15:31 UTC",
      message: "Capacity is restored and errors have stopped. We are watching the EU region closely."
    },
    {
      stage: "resolved",
      at: "15:47 UTC",
      message: "Mistral Large 4 has been stable for 15 minutes. This incident is resolved."
    }
  ];
  function v(e2, t2, a2, r2, s2) {
    return {
      id: e2,
      title: t2,
      url: s2,
      updates: a2.slice(0, r2).map(({ stage: e3, at: t3, message: a3 }) => ({
        stage: e3,
        at: t3,
        message: a3
      }))
    };
  }
  let x = [
    {
      id: "anthropic",
      name: "Anthropic",
      detail: "Claude Opus 5.5, Sonnet 5.5",
      mark: (0, r.jsx)(function({ title: e2 = "Anthropic", ...t2 }) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, r.jsx)("path", {
            d: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
          })
        });
      }, {}),
      latency: 412,
      days: {
        "2026-10-09": [
          99.15,
          "degraded",
          "Elevated errors on Claude Opus 5.5 for 41 min"
        ],
        "2026-10-21": [
          99.65,
          "degraded",
          "Slow responses on the Messages API for 17 min"
        ]
      }
    },
    {
      id: "openai",
      name: "OpenAI",
      detail: "GPT-6.1 Sol, GPT-6 Luna",
      mark: (0, r.jsx)(function({ title: e2 = "OpenAI", ...t2 }) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, r.jsx)("path", {
            d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          })
        });
      }, {}),
      latency: 538,
      days: {
        "2026-10-03": [92.08, "outage", "API outage for 1 h 54 min"],
        "2026-10-17": [
          99.38,
          "degraded",
          "Elevated latency on GPT-6 Luna for 30 min"
        ]
      }
    },
    {
      id: "gemini",
      name: "Google Gemini",
      detail: "Gemini 4 Argon, 3.8 Flash",
      mark: (0, r.jsx)(function({ title: e2 = "Google Gemini", ...t2 }) {
        let a2 = (0, s.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), n2 = "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z";
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: [
            (0, r.jsx)("path", { d: n2, fill: "#3186FF" }),
            (0, r.jsx)("path", { d: n2, fill: `url(#ps-gemini-0-${a2})` }),
            (0, r.jsx)("path", { d: n2, fill: `url(#ps-gemini-1-${a2})` }),
            (0, r.jsx)("path", { d: n2, fill: `url(#ps-gemini-2-${a2})` }),
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `ps-gemini-0-${a2}`,
                  x1: "7",
                  x2: "11",
                  y1: "15.5",
                  y2: "12",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#08B962" }),
                    (0, r.jsx)("stop", {
                      offset: "1",
                      stopColor: "#08B962",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `ps-gemini-1-${a2}`,
                  x1: "8",
                  x2: "11.5",
                  y1: "5.5",
                  y2: "11",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#F94543" }),
                    (0, r.jsx)("stop", {
                      offset: "1",
                      stopColor: "#F94543",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `ps-gemini-2-${a2}`,
                  x1: "3.5",
                  x2: "17.5",
                  y1: "13.5",
                  y2: "12",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#FABC12" }),
                    (0, r.jsx)("stop", {
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
      }, {}),
      latency: 604,
      days: {
        "2026-10-12": [
          99.5,
          "degraded",
          "Increased errors in europe-west4 for 24 min"
        ]
      }
    },
    {
      id: "mistral",
      name: "Mistral AI",
      detail: "Mistral Large 4",
      mark: (0, r.jsx)(function({ title: e2 = "Mistral AI", ...t2 }) {
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: [
            (0, r.jsx)("path", {
              d: "M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z",
              fill: "gold"
            }),
            (0, r.jsx)("path", {
              d: "M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z",
              fill: "#FFAF00"
            }),
            (0, r.jsx)("path", {
              d: "M3.428 10.258h17.144v3.428H3.428v-3.428z",
              fill: "#FF8205"
            }),
            (0, r.jsx)("path", {
              d: "M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z",
              fill: "#FA500F"
            }),
            (0, r.jsx)("path", {
              d: "M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z",
              fill: "#E10500"
            })
          ]
        });
      }, {}),
      latency: 356,
      days: {
        "2026-10-06": [
          94.24,
          "outage",
          "La Plateforme API unavailable for 1 h 23 min"
        ]
      }
    },
    {
      id: "xai",
      name: "xAI",
      detail: "Grok 4.7",
      mark: (0, r.jsx)(function({ title: e2 = "xAI", ...t2 }) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          fillRule: "evenodd",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, r.jsx)("path", {
            d: "M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9l2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"
          })
        });
      }, {}),
      latency: 448,
      days: {
        "2026-10-01": [
          99.54,
          "degraded",
          "Elevated errors on Grok 4.7 for 22 min"
        ],
        "2026-10-24": [99.75, "degraded", "Slow image generation for 12 min"]
      }
    },
    {
      id: "bedrock",
      name: "Amazon Bedrock",
      detail: "Claude Sonnet 5.5 in us-east-1",
      mark: (0, r.jsx)(function({ title: e2 = "Amazon Web Services", ...t2 }) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, r.jsx)("path", {
            d: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"
          })
        });
      }, {}),
      latency: 521,
      days: {
        "2026-10-15": [
          99,
          "degraded",
          "Throttling errors in us-east-1 for 48 min"
        ]
      }
    }
  ], f = [0, 14, -9, 22, -17, 6, -12, 19, -4, 11, -7, 3];
  var y = a(64962), _ = a(11012), j = a(94890), N = a(9751), b = a(7770), w = a(51288), k = a(20414), T = a.n(k);
  let A = [...b.T.ease.standard], M = { type: "spring", visualDuration: 0.24, bounce: 0 }, $ = { operational: "Operational", degraded: "Degraded", outage: "Outage" }, S = { operational: y.A, degraded: _.A, outage: j.A }, C = {
    investigating: "Investigating",
    identified: "Identified",
    monitoring: "Monitoring",
    resolved: "Resolved"
  }, I = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), L = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC"
  });
  function z(e2) {
    return e2.status ? e2.status : null == e2.uptime ? null : e2.uptime < 99 ? "outage" : e2.uptime < 99.9 ? "degraded" : "operational";
  }
  function E(e2) {
    return null != e2 && Number.isFinite(e2) ? e2 < 1e3 ? `${Math.round(e2)} ms` : `${(e2 / 1e3).toFixed(2)} s` : "\u2013";
  }
  function B(e2) {
    let t2 = e2.filter((e3) => null != e3.uptime);
    return t2.length ? t2.reduce((e3, t3) => e3 + (t3.uptime ?? 0), 0) / t2.length : null;
  }
  let R = (e2) => null == e2 ? "\u2013" : `${e2 >= 99.995 ? "100" : e2.toFixed(2)}%`;
  function U(e2, t2) {
    if (t2) return "Today";
    if (!e2.date) return "No data";
    let a2 = /* @__PURE__ */ new Date(`${e2.date}T12:00:00Z`);
    return Number.isNaN(a2.getTime()) ? e2.date : I.format(a2);
  }
  function F(e2) {
    if ("string" == typeof e2) return e2;
    let t2 = e2 instanceof Date ? e2 : new Date(e2);
    return Number.isNaN(t2.getTime()) ? "" : `${L.format(t2)} UTC`;
  }
  function D({ text: e2, reduced: t2, className: a2 }) {
    return (0, r.jsx)("span", {
      className: [T().swap, a2].filter(Boolean).join(" "),
      children: (0, r.jsx)(i.N, {
        initial: false,
        children: (0, r.jsx)(
          l.PY1.span,
          {
            className: T().swapItem,
            initial: { opacity: 0, y: 2 * !t2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16 * !t2, ease: A }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !t2, ease: A } },
            children: e2
          },
          e2
        )
      })
    });
  }
  function G({ health: e2, reduced: t2 }) {
    let a2 = S[e2];
    return (0, r.jsx)("span", {
      className: T().swap,
      children: (0, r.jsx)(i.N, {
        initial: false,
        children: (0, r.jsxs)(
          l.PY1.span,
          {
            className: T().health,
            "data-health": e2,
            initial: { opacity: 0, y: 2 * !t2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16 * !t2, ease: A }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !t2, ease: A } },
            children: [
              (0, r.jsx)(a2, {
                className: T().healthIcon,
                "aria-hidden": "true"
              }),
              (0, r.jsx)("span", { className: T().healthText, children: $[e2] })
            ]
          },
          e2
        )
      })
    });
  }
  function O({ name: e2, days: t2, active: a2, onInspect: s2 }) {
    let n2 = t2.length, i2 = R(B(t2)), l2 = t2.filter((e3) => "outage" === z(e3)).length, o2 = t2.filter((e3) => "degraded" === z(e3)).length, d2 = [
      l2 ? `${l2} ${1 === l2 ? "day" : "days"} with an outage` : "",
      o2 ? `${o2} degraded` : ""
    ].filter(Boolean).join(", ") || "no incidents", c2 = (e3) => {
      let t3 = e3.currentTarget.getBoundingClientRect();
      return Math.min(
        n2 - 1,
        Math.floor(
          Math.min(Math.max(e3.clientX - t3.left, 0), t3.width - 1) / t3.width * n2
        )
      );
    };
    return (0, r.jsx)("div", {
      className: T().bar,
      tabIndex: 0,
      role: "group",
      "data-scrub": null != a2 || void 0,
      "aria-label": `${e2} uptime over the last 30 days: ${i2}, ${d2}. Use the arrow keys to inspect each day.`,
      onPointerMove: (e3) => {
        ("mouse" === e3.pointerType || e3.buttons) && s2(c2(e3), e3.currentTarget, "pointer");
      },
      onPointerDown: (e3) => s2(c2(e3), e3.currentTarget, "pointer"),
      onPointerLeave: (e3) => {
        "mouse" === e3.pointerType && s2(null, e3.currentTarget, "pointer");
      },
      onFocus: (e3) => {
        e3.currentTarget.matches(":focus-visible") && s2(n2 - 1, e3.currentTarget, "keyboard");
      },
      onBlur: (e3) => s2(null, e3.currentTarget, "keyboard"),
      onKeyDown: (e3) => {
        let t3 = a2 ?? n2 - 1, r2 = t3;
        if ("ArrowLeft" === e3.key || "ArrowDown" === e3.key)
          r2 = Math.max(0, t3 - 1);
        else if ("ArrowRight" === e3.key || "ArrowUp" === e3.key)
          r2 = Math.min(n2 - 1, t3 + 1);
        else if ("Home" === e3.key) r2 = 0;
        else if ("End" === e3.key) r2 = n2 - 1;
        else {
          if ("Escape" !== e3.key || null == a2) return;
          r2 = null;
        }
        e3.preventDefault(), s2(r2, e3.currentTarget, "keyboard");
      },
      children: t2.map(
        (e3, t3) => (0, r.jsx)(
          "span",
          {
            className: T().tick,
            "data-health": z(e3) ?? "none",
            "data-active": t3 === a2 || void 0
          },
          e3.date || `pad-${t3}`
        )
      )
    });
  }
  function P({ day: e2, isLast: t2, open: a2, x: n2, y: i2, boundary: l2 }) {
    let o2 = (0, s.useRef)(null);
    (0, s.useLayoutEffect)(() => {
      let e3 = o2.current;
      if (!e3) return;
      let t3 = e3.offsetWidth, a3 = Math.min(Math.max(n2 - t3 / 2, 8), Math.max(8, l2 - t3 - 8));
      e3.style.transform = `translate(${Math.round(a3)}px, ${Math.round(i2)}px) translateY(-100%)`;
    }, [n2, i2, l2, e2, t2]);
    let d2 = e2 ? z(e2) : null, c2 = d2 ? S[d2] : null;
    return (0, r.jsx)("div", {
      ref: o2,
      className: T().tip,
      "data-open": a2 || void 0,
      "aria-hidden": "true",
      children: e2 ? (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsxs)("span", {
            className: T().tipHead,
            children: [
              (0, r.jsx)("span", {
                className: T().tipDate,
                children: U(e2, t2)
              }),
              (0, r.jsx)("span", {
                className: T().tipPct,
                children: null == e2.uptime ? "No data" : R(e2.uptime)
              })
            ]
          }),
          (0, r.jsxs)("span", {
            className: T().tipBody,
            children: [
              c2 && d2 ? (0, r.jsxs)("span", {
                className: T().health,
                "data-health": d2,
                children: [
                  (0, r.jsx)(c2, {
                    className: T().healthIcon,
                    "aria-hidden": "true"
                  }),
                  (0, r.jsx)("span", {
                    className: T().healthText,
                    children: "operational" === d2 ? "No incidents" : $[d2]
                  })
                ]
              }) : (0, r.jsx)("span", {
                className: T().tipNote,
                children: "No checks recorded"
              }),
              e2.note ? (0, r.jsx)("span", {
                className: T().tipNote,
                children: e2.note
              }) : null
            ]
          })
        ]
      }) : null
    });
  }
  function H({ id: e2, incident: t2, reduced: a2, onOpen: n2 }) {
    let o2 = (0, s.useRef)(null), [d2, c2] = (0, s.useState)(0);
    (0, s.useLayoutEffect)(() => {
      let e3 = o2.current;
      if (!e3 || (c2(e3.offsetHeight), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(() => c2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let u2 = [...t2.updates].map((e3, t3) => ({ ...e3, order: t3 }));
    u2.sort((e3, t3) => {
      let a3 = "string" == typeof e3.at ? NaN : +new Date(e3.at), r2 = "string" == typeof t3.at ? NaN : +new Date(t3.at);
      return Number.isFinite(a3) && Number.isFinite(r2) ? r2 - a3 : t3.order - e3.order;
    });
    let p2 = t2.updates[0], m2 = u2[0], h2 = m2?.stage === "resolved", g2 = a2 ? { duration: 0 } : M;
    return (0, r.jsx)(l.PY1.div, {
      id: e2,
      className: T().panel,
      role: "region",
      "aria-label": t2.title,
      initial: { height: 0, opacity: 0 },
      animate: {
        height: d2,
        opacity: 1,
        transition: { height: g2, opacity: { duration: 0.16 * !a2, ease: A } }
      },
      exit: {
        height: 0,
        opacity: 0,
        transition: { height: g2, opacity: { duration: 0.1 * !a2, ease: A } }
      },
      children: (0, r.jsxs)("div", {
        ref: o2,
        className: T().panelInner,
        children: [
          (0, r.jsx)("div", {
            className: T().panelHead,
            children: (0, r.jsxs)("div", {
              className: T().panelTitleWrap,
              children: [
                (0, r.jsx)("span", {
                  className: T().panelTitle,
                  children: t2.title
                }),
                (0, r.jsx)(D, {
                  reduced: a2,
                  className: T().panelMeta,
                  text: [
                    p2 ? `Started ${F(p2.at)}` : "",
                    m2 && m2 !== u2[u2.length - 1] ? `${h2 ? "Resolved" : "Updated"} ${F(m2.at)}` : ""
                  ].filter(Boolean).join(" \xB7 ")
                })
              ]
            })
          }),
          n2 ? (0, r.jsxs)(w.$, {
            variant: "ghost",
            size: "sm",
            className: T().panelLink,
            onClick: n2,
            children: [
              "Status page",
              (0, r.jsx)(N.A, { "aria-hidden": "true" })
            ]
          }) : null,
          (0, r.jsx)("ol", {
            className: T().updates,
            children: (0, r.jsx)(i.N, {
              initial: false,
              children: u2.map(
                (e3, t3) => (0, r.jsxs)(
                  l.PY1.li,
                  {
                    className: T().update,
                    "data-latest": 0 === t3 || void 0,
                    "data-stage": e3.stage,
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: {
                        duration: 0.16 * !a2,
                        ease: A,
                        delay: 0.06 * !a2
                      }
                    },
                    exit: { opacity: 0, transition: { duration: 0.1 * !a2 } },
                    children: [
                      (0, r.jsx)("span", {
                        className: T().updateDot,
                        "aria-hidden": "true"
                      }),
                      (0, r.jsxs)("span", {
                        className: T().updateHead,
                        children: [
                          (0, r.jsx)("span", {
                            className: T().updateStage,
                            children: C[e3.stage]
                          }),
                          (0, r.jsx)("span", {
                            className: T().updateTime,
                            children: F(e3.at)
                          })
                        ]
                      }),
                      (0, r.jsx)("span", {
                        className: T().updateText,
                        children: e3.message
                      })
                    ]
                  },
                  `${e3.stage}-${e3.order}`
                )
              )
            })
          })
        ]
      })
    });
  }
  function W(e2) {
    return void 0 === e2.providers ? (0, r.jsx)(Y, { ...e2 }) : (0, r.jsx)(K, { ...e2, providers: e2.providers });
  }
  function V(e2, t2) {
    return new Promise((a2, r2) => {
      if (t2.aborted) return void r2(new DOMException("Aborted", "AbortError"));
      let s2 = window.setTimeout(a2, e2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(s2), r2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  let q = { operational: 0, degraded: 1, outage: 2 };
  function Z(e2) {
    let t2 = e2.filter((e3) => {
      let t3;
      return !!(t3 = e3.incident) && t3.updates.length > 0 && !t3.updates.some((e4) => "resolved" === e4.stage);
    }).sort((e3, t3) => q[t3.status] - q[e3.status]);
    return t2[0]?.id ?? e2.find((e3) => e3.incident)?.id ?? null;
  }
  function Y(e2) {
    let [t2, a2] = (0, s.useState)(0), n2 = (0, s.useRef)(0), i2 = (0, s.useRef)(-1), l2 = (0, s.useMemo)(() => {
      let e3, a3, r2, s2, n3, i3;
      return r2 = (a3 = 6 == (e3 = t2 % 11) ? e3 - 1 : e3) <= 3 ? a3 + 1 : 0, s2 = a3 <= 1 ? 2 : a3 <= 3 ? 3 : 4 * (4 === a3), n3 = a3 >= 5 && a3 <= 9 ? Math.min(4, 5 === a3 ? 1 : a3 - 5) : 0, i3 = t2 >= 11 || a3 >= 5, x.map((e4, a4) => {
        var l3, o3;
        let d3, c3, u3 = "operational", x2 = e4.latency + f[(t2 + 3 * a4) % f.length];
        return "openai" === e4.id && (c3 = [96.94, "outage", "Elevated error rates on GPT-6.1 Sol"], r2 && (d3 = v(
          "oai-2026-10-27",
          "Elevated error rates on GPT-6.1 Sol",
          m,
          r2,
          "https://status.openai.com"
        ), "outage" == (u3 = r2 <= 2 ? "outage" : 3 === r2 ? "degraded" : "operational") && (x2 = 2140 + 6 * f[t2 % f.length]), "degraded" === u3 && (x2 = 860 + 2 * f[t2 % f.length]))), "gemini" === e4.id && (c3 = [
          98.48,
          "degraded",
          "Increased latency for Gemini 4 Argon"
        ], s2 && (d3 = v(
          "gem-2026-10-27",
          "Increased latency for Gemini 4 Argon",
          h,
          s2,
          "https://status.cloud.google.com"
        ), "degraded" == (u3 = s2 < 4 ? "degraded" : "operational") && (x2 = (3 === s2 ? 940 : 1380) + 3 * f[t2 % f.length]))), "mistral" === e4.id && (i3 && (c3 = [
          99.15,
          "degraded",
          "Elevated errors on Mistral Large 4"
        ]), n3 && (d3 = v(
          "mis-2026-10-27",
          "Elevated errors on Mistral Large 4",
          g,
          n3,
          "https://status.mistral.ai"
        ), "degraded" == (u3 = n3 < 4 ? "degraded" : "operational") && (x2 = 812 + 2 * f[t2 % f.length]))), {
          id: e4.id,
          name: e4.name,
          detail: e4.detail,
          mark: e4.mark,
          status: u3,
          latencyMs: x2,
          days: (l3 = e4.days, o3 = c3, Array.from({ length: 30 }, (e5, t3) => {
            var a5;
            let r3, s3 = (a5 = t3 - 29, (r3 = /* @__PURE__ */ new Date(`${p}T12:00:00Z`)).setUTCDate(
              r3.getUTCDate() + a5
            ), r3.toISOString().slice(0, 10)), n4 = s3 === p ? o3 : l3[s3];
            return n4 ? { date: s3, uptime: n4[0], status: n4[1], note: n4[2] } : { date: s3, uptime: 100, status: "operational" };
          })),
          incident: d3
        };
      });
    }, [t2]), [o2, d2] = (0, s.useState)(""), [c2, u2] = (0, s.useState)(false), [y2, _2] = (0, s.useState)(null), [j2, N2] = (0, s.useState)(() => Z(l2));
    if (!l2.find((e3) => e3.id === j2)?.incident) {
      let e3 = Z(l2);
      e3 !== j2 && N2(e3);
    }
    let b2 = (0, s.useCallback)(async (e3) => {
      await V(650, e3);
      let t3 = n2.current + 1;
      if (t3 % 11 == 6 && i2.current !== t3)
        throw i2.current = t3, Error("Couldn\u2019t reach the status feeds. Showing the last results.");
      n2.current = t3, a2(t3);
    }, []), { onExpandedChange: w2 } = e2, k2 = (0, s.useCallback)(
      (e3) => {
        u2(true), _2(e3), w2?.(e3);
      },
      [w2]
    ), T2 = (0, s.useCallback)(
      (e3) => d2(
        `Sample incident for ${e3.name}. Simulated, no status page was opened.`
      ),
      []
    );
    return (0, r.jsx)(K, {
      refreshInterval: 8e3,
      footnote: "Sample data. Latency is the median over the last 5 minutes; uptime counts degraded time at 30%.",
      onOpenIncident: T2,
      notice: o2,
      ...e2,
      providers: l2,
      onRefresh: e2.onRefresh ?? b2,
      simulated: !e2.onRefresh,
      expandedId: void 0 !== e2.expandedId ? e2.expandedId : c2 ? y2 : j2,
      onExpandedChange: k2
    });
  }
  function K({
    providers: e2,
    onRefresh: t2,
    refreshInterval: a2 = 3e4,
    loading: p2 = false,
    error: m2 = null,
    title: h2 = "AI providers",
    expandedId: g2,
    defaultExpandedId: v2 = null,
    onExpandedChange: x2,
    onOpenIncident: f2,
    footnote: y2,
    notice: _2,
    className: j2,
    simulated: N2 = false
  }) {
    let b2, w2, k2, M2 = (0, n.I)() ?? false, C2 = (0, s.useId)(), I2 = (0, s.useRef)(null), [L2, F2] = (0, s.useState)(null), W2 = L2 && L2.from === e2 ? L2.list : e2, [q2, Z2] = (0, s.useState)(v2), Y2 = void 0 !== g2 ? g2 : q2, [Q2, J2] = (0, s.useState)(true), [X2, ee2] = (0, s.useState)(true);
    (0, s.useEffect)(() => {
      let e3 = I2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => J2(e4?.isIntersecting ?? true));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, s.useEffect)(() => {
      let e3 = () => ee2("hidden" !== document.visibilityState);
      return e3(), document.addEventListener("visibilitychange", e3), () => document.removeEventListener("visibilitychange", e3);
    }, []);
    let [et, ea] = (0, s.useState)("idle"), [er, es] = (0, s.useState)(null), [en, ei] = (0, s.useState)(""), [el, eo] = (0, s.useState)(0), ed = (0, s.useRef)(null), ec = (0, s.useRef)(e2);
    (0, s.useEffect)(() => {
      ec.current = e2;
    }, [e2]);
    let eu = !!t2, ep = "error" === et && null != a2 ? Math.min(a2, 1e4) : a2, em = (0, s.useCallback)(
      async (e3 = false) => {
        if (!t2) return;
        ed.current?.abort();
        let a3 = new AbortController();
        ed.current = a3, ea("checking");
        let r2 = performance.now();
        try {
          let s2 = await t2(a3.signal), n2 = 450 - (performance.now() - r2);
          if (n2 > 0 && await V(n2, a3.signal), a3.signal.aborted) return;
          Array.isArray(s2) && F2({ from: ec.current, list: s2 }), es(null), ea("idle"), e3 && ei(
            N2 ? "Checked every provider. Simulated, no requests were sent." : "Checked every provider."
          );
        } catch (t3) {
          if (a3.signal.aborted) return;
          let e4 = t3 instanceof Error && t3.message ? t3.message : "Couldn\u2019t refresh provider status.";
          es(e4), ea("error"), ei(e4);
        } finally {
          ed.current === a3 && (ed.current = null, eo((e4) => e4 + 1));
        }
      },
      [t2, N2]
    );
    (0, s.useEffect)(() => () => ed.current?.abort(), []);
    let eh = eu && null != ep && Q2 && X2 && "checking" !== et && !p2, eg = `${el}:${ep}`, [ev, ex] = (0, s.useState)({ key: eg, ms: 0 }), ef = ev.key === eg ? ev.ms : 0, ey = (0, s.useRef)(em);
    (0, s.useEffect)(() => {
      ey.current = em;
    }, [em]), (0, s.useEffect)(() => {
      if (!eh || null == ep) return;
      let e3 = performance.now(), t3 = ef, a3 = Math.ceil((ep - t3) / 1e3), r2 = window.setInterval(() => {
        let s2 = performance.now();
        t3 += s2 - e3, e3 = s2;
        let n2 = Math.ceil((ep - t3) / 1e3);
        n2 !== a3 && (a3 = n2, ex({ key: eg, ms: t3 })), t3 >= ep && (window.clearInterval(r2), ey.current());
      }, 100);
      return () => {
        window.clearInterval(r2), ex((e4) => e4.key === eg ? { key: eg, ms: t3 } : e4);
      };
    }, [eh, eg, ep]);
    let e_ = null == ep ? 0 : Math.max(0, ep - ef), [ej, eN] = (0, s.useState)(null), [eb, ew] = (0, s.useState)(""), ek = (0, s.useMemo)(
      () => W2.map((e3) => ({
        provider: e3,
        days: (function(e4, t3 = 30) {
          let a3 = (e4 ?? []).slice(-t3);
          return [
            ...Array.from({ length: t3 - a3.length }, () => ({
              date: "",
              uptime: null
            })),
            ...a3
          ];
        })(e3.days)
      })),
      [W2]
    ), eT = ej ? ek.find((e3) => e3.provider.id === ej.id) : void 0, eA = ej && eT ? eT.days[ej.index] ?? null : null, eM = !!ej?.open && !!eA, e$ = (b2 = W2.filter((e3) => "outage" === e3.status).length, w2 = W2.filter((e3) => "degraded" === e3.status).length, "operational" == (k2 = b2 ? "outage" : w2 ? "degraded" : "operational") ? { worst: k2, text: "All systems operational" } : {
      worst: k2,
      text: [
        b2 ? `${b2} ${1 === b2 ? "outage" : "outages"}` : "",
        w2 ? `${w2} degraded` : "",
        `${W2.length - b2 - w2} operational`
      ].filter(Boolean).join(" \xB7 ")
    }), [eS, eC] = (0, s.useState)(e$.text);
    eS !== e$.text && (eC(e$.text), ei(`${e$.text}.${N2 ? " Simulated, no requests were sent." : ""}`));
    let eI = er ?? m2, eL = eI ? o.A : S[e$.worst], ez = p2 ? "loading" : eI ? `error:${eI}` : `ok:${e$.text}`, eE = Math.max(1, Math.ceil(e_ / 1e3)), eB = !p2 && 0 === W2.length;
    return (0, r.jsxs)("section", {
      ref: I2,
      className: [T().root, j2].filter(Boolean).join(" "),
      "aria-labelledby": `${C2}-title`,
      "aria-busy": p2 || "checking" === et || void 0,
      children: [
        (0, r.jsxs)("header", {
          className: T().header,
          children: [
            (0, r.jsxs)("div", {
              className: T().heading,
              children: [
                (0, r.jsx)("h3", {
                  id: `${C2}-title`,
                  className: T().title,
                  children: h2
                }),
                (0, r.jsx)("div", {
                  className: T().summary,
                  children: (0, r.jsx)(i.N, {
                    initial: false,
                    children: (0, r.jsx)(
                      l.PY1.span,
                      {
                        className: T().summaryItem,
                        "data-tone": eI ? "error" : p2 ? "loading" : e$.worst,
                        initial: { opacity: 0, y: 2 * !M2 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.16 * !M2, ease: A }
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: 0.1 * !M2, ease: A }
                        },
                        children: p2 ? (0, r.jsx)(u.n, {
                          className: T().summaryText,
                          children: "Loading provider status"
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(eL, {
                              className: T().summaryIcon,
                              "aria-hidden": "true"
                            }),
                            (0, r.jsx)("span", {
                              className: T().summaryText,
                              children: eI ?? e$.text
                            })
                          ]
                        })
                      },
                      ez
                    )
                  })
                })
              ]
            }),
            eu ? (0, r.jsxs)("div", {
              className: T().refresh,
              children: [
                (0, r.jsxs)("span", {
                  className: T().countdown,
                  "data-phase": et,
                  children: [
                    (0, r.jsxs)("svg", {
                      className: T().ring,
                      viewBox: "0 0 16 16",
                      "aria-hidden": "true",
                      "data-phase": et,
                      children: [
                        (0, r.jsx)("circle", {
                          className: T().ringTrack,
                          cx: "8",
                          cy: "8",
                          r: "6.25"
                        }),
                        null != ep && "checking" !== et ? (0, r.jsx)(
                          "circle",
                          {
                            className: T().ringFill,
                            cx: "8",
                            cy: "8",
                            r: "6.25",
                            pathLength: 100,
                            style: {
                              animationDuration: `${ep}ms`,
                              animationPlayState: eh ? "running" : "paused"
                            }
                          },
                          `${el}-${ep}`
                        ) : null,
                        "checking" === et ? (0, r.jsx)("circle", {
                          className: T().ringSpin,
                          cx: "8",
                          cy: "8",
                          r: "6.25",
                          pathLength: 100
                        }) : null
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: T().countdownText,
                      children: "checking" === et ? (0, r.jsx)(u.n, {
                        className: T().countdownLabel,
                        children: "Checking"
                      }) : p2 ? (0, r.jsx)("span", {
                        className: T().countdownLabel,
                        children: "Waiting"
                      }) : null == ep ? (0, r.jsx)("span", {
                        className: T().countdownLabel,
                        children: "error" === et ? "Not updated" : "Up to date"
                      }) : (0, r.jsxs)("span", {
                        className: T().countdownLabel,
                        children: [
                          "error" === et ? "Retry" : "Refresh",
                          " in ",
                          (0, r.jsxs)("span", {
                            className: T().num,
                            children: [
                              (0, r.jsxs)("span", {
                                className: T().numGhost,
                                "aria-hidden": "true",
                                children: [
                                  Math.max(
                                    1,
                                    Math.ceil(ep / 1e3)
                                  ),
                                  "s"
                                ]
                              }),
                              (0, r.jsxs)("span", {
                                children: [eE, "s"]
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: T().refreshButton,
                  onClick: () => void em(true),
                  disabled: p2,
                  "aria-label": "error" === et ? "Retry now" : "Refresh now",
                  "data-phase": et,
                  children: (0, r.jsx)(d.A, { "aria-hidden": "true" })
                })
              ]
            }) : null
          ]
        }),
        eB ? (0, r.jsxs)("div", {
          className: T().empty,
          children: [
            (0, r.jsx)("span", {
              className: T().emptyTitle,
              children: "No providers yet"
            }),
            (0, r.jsx)("span", {
              className: T().emptyText,
              children: "Add a provider to track its health, latency and uptime here."
            })
          ]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: T().columns,
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("span", {
                  className: T().colName,
                  children: "Provider"
                }),
                (0, r.jsx)("span", {
                  className: T().colStatus,
                  children: "Status"
                }),
                (0, r.jsx)("span", {
                  className: T().colLatency,
                  children: "p50"
                }),
                (0, r.jsx)("span", {
                  className: T().colBar,
                  children: "Last 30 days"
                })
              ]
            }),
            (0, r.jsx)("ul", {
              className: T().list,
              role: "list",
              children: p2 ? Array.from(
                { length: Math.max(W2.length, 6) },
                (e3, t3) => (0, r.jsx)(
                  "li",
                  {
                    className: T().item,
                    "data-skeleton": "",
                    children: (0, r.jsxs)("div", {
                      className: T().line,
                      children: [
                        (0, r.jsx)("span", {
                          className: `${T().mark} ${T().bone}`
                        }),
                        (0, r.jsxs)("span", {
                          className: T().name,
                          children: [
                            (0, r.jsx)("span", {
                              className: T().bone,
                              style: { width: 88 + t3 % 3 * 18 }
                            }),
                            (0, r.jsx)("span", {
                              className: T().bone,
                              style: { width: 120 + t3 % 2 * 24 }
                            })
                          ]
                        }),
                        (0, r.jsx)("span", {
                          className: T().status,
                          children: (0, r.jsx)("span", {
                            className: T().bone,
                            style: { width: 84 }
                          })
                        }),
                        (0, r.jsx)("span", {
                          className: T().latency,
                          children: (0, r.jsx)("span", {
                            className: T().bone,
                            style: { width: 44 }
                          })
                        }),
                        (0, r.jsx)("span", {
                          className: `${T().bar} ${T().barBone}`,
                          children: Array.from(
                            { length: 30 },
                            (e4, t4) => (0, r.jsx)(
                              "span",
                              {
                                className: T().tick,
                                "data-health": "none"
                              },
                              t4
                            )
                          )
                        }),
                        (0, r.jsx)("span", {
                          className: T().pct,
                          children: (0, r.jsx)("span", {
                            className: T().bone,
                            style: { width: 40 }
                          })
                        }),
                        (0, r.jsx)("span", { className: T().chev })
                      ]
                    })
                  },
                  `skeleton-${t3}`
                )
              ) : ek.map(({ provider: e3, days: t3 }) => {
                let a3, s2 = e3.incident, n2 = !!s2 && Y2 === e3.id, l2 = `${C2}-${e3.id}-incident`, o2 = R(B(t3));
                return (0, r.jsxs)(
                  "li",
                  {
                    className: T().item,
                    "data-open": n2 || void 0,
                    "data-interactive": s2 ? "" : void 0,
                    "data-health": e3.status,
                    children: [
                      (0, r.jsxs)("div", {
                        className: T().line,
                        children: [
                          s2 ? (0, r.jsx)("button", {
                            type: "button",
                            className: T().hit,
                            "aria-expanded": n2,
                            "aria-controls": n2 ? l2 : void 0,
                            onClick: () => {
                              var t4;
                              let a4;
                              return a4 = Y2 === (t4 = e3.id) ? null : t4, void (void 0 === g2 && Z2(a4), x2?.(a4));
                            },
                            "aria-label": `${e3.name}, ${$[e3.status]}. ${n2 ? "Hide" : "Show"} incident: ${s2.title}`
                          }) : null,
                          (0, r.jsx)("span", {
                            className: T().mark,
                            "aria-hidden": "true",
                            children: e3.mark
                          }),
                          (0, r.jsxs)("span", {
                            className: T().name,
                            children: [
                              (0, r.jsx)("span", {
                                className: T().nameText,
                                children: e3.name
                              }),
                              (0, r.jsx)("span", {
                                className: T().meta,
                                children: e3.detail ? (0, r.jsx)("span", {
                                  className: T().detail,
                                  children: e3.detail
                                }) : null
                              })
                            ]
                          }),
                          (0, r.jsx)("span", {
                            className: T().status,
                            children: (0, r.jsx)(G, {
                              health: e3.status,
                              reduced: M2
                            })
                          }),
                          (0, r.jsx)("span", {
                            className: T().latency,
                            "aria-label": `Median latency ${E(e3.latencyMs)}`,
                            children: (0, r.jsx)(D, {
                              reduced: M2,
                              text: E(e3.latencyMs)
                            })
                          }),
                          (0, r.jsx)(O, {
                            id: e3.id,
                            name: e3.name,
                            days: t3,
                            active: eM && ej?.id === e3.id ? ej.index : null,
                            onInspect: (a3 = e3.id, (e4, r2, s3) => {
                              var n3, i2;
                              let l3, o3, d2 = I2.current;
                              if (null == e4 || !d2)
                                return void eN(
                                  (e5) => e5 && e5.id === a3 && e5.open ? { ...e5, open: false } : e5
                                );
                              let c2 = d2.getBoundingClientRect(), u2 = r2.getBoundingClientRect(), p3 = t3.length, m3 = (u2.width - 2 * (p3 - 1)) / p3;
                              eN({
                                id: a3,
                                index: e4,
                                via: s3,
                                open: true,
                                width: c2.width,
                                x: u2.left - c2.left + e4 * (m3 + 2) + m3 / 2,
                                y: u2.top - c2.top - 8
                              }), "keyboard" === s3 && ew(
                                (n3 = t3[e4], i2 = e4 === p3 - 1, l3 = z(n3), o3 = [
                                  U(n3, i2),
                                  null == n3.uptime ? "no data" : `${R(n3.uptime)} uptime`
                                ], l3 && "operational" !== l3 && o3.push($[l3]), n3.note && o3.push(n3.note), o3.join(", "))
                              );
                            })
                          }),
                          (0, r.jsx)("span", {
                            className: T().pct,
                            children: (0, r.jsx)(D, {
                              reduced: M2,
                              text: o2
                            })
                          }),
                          (0, r.jsx)("span", {
                            className: T().chev,
                            "aria-hidden": "true",
                            children: s2 ? (0, r.jsx)(c.A, {}) : null
                          })
                        ]
                      }),
                      (0, r.jsx)(i.N, {
                        initial: false,
                        children: n2 && s2 ? (0, r.jsx)(
                          H,
                          {
                            id: l2,
                            incident: s2,
                            reduced: M2,
                            onOpen: f2 || s2.url ? () => {
                              f2 ? f2(e3, s2) : s2.url && window.open(
                                s2.url,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            } : void 0
                          },
                          s2.id
                        ) : null
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          ]
        }),
        y2 ? (0, r.jsx)("p", { className: T().footnote, children: y2 }) : null,
        (0, r.jsx)(P, {
          day: eA,
          isLast: !!eT && ej?.index === eT.days.length - 1,
          open: eM,
          x: ej?.x ?? 0,
          y: ej?.y ?? 0,
          boundary: ej?.width ?? 0
        }),
        (0, r.jsx)("span", {
          className: T().srOnly,
          "aria-live": "polite",
          children: eM && ej?.via === "keyboard" ? eb : ""
        }),
        (0, r.jsx)("span", {
          className: T().srOnly,
          "aria-live": "polite",
          children: _2 || en
        })
      ]
    });
  }
  var Q = a(50950), J = a.n(Q);
  function X() {
    return (0, r.jsx)("div", {
      className: J().demo,
      children: (0, r.jsx)(W, {})
    });
  }
  let ee = X;
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
A.cssFor("provider-status", [20414,50950]);
A.item("provider-status", {entry:72280, export:"ProviderStatusDemo", kind:"component", tier:"pro", unresolved:[]});
})();