/* uptime-status (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(15352, ".root{--control-height-sm:2rem;container-type:inline-size;display:grid;box-sizing:border-box;width:min(100%,1040px);min-width:0;gap:0;border:1px solid var(--border);border-radius:16px;background:var(--surface);margin-inline:auto;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root [data-status=operational]{--state-color:color-mix(in oklab,var(--success) 62%,var(--surface))}\n.root [data-status=degraded]{--state-color:var(--warning)}\n.root [data-status=outage]{--state-color:var(--danger)}\n.num{display:inline-flex;font-variant-numeric:tabular-nums}\n.num>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.swap{position:relative;display:block;min-width:0}\n.swapText{display:block}\n.mark{flex:none}\n.mark rect{fill:var(--state-color)}\n.status{--status:var(--success);display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:var(--space-3) var(--space-4);border-radius:15px 15px 0 0;padding:16px 20px;background:transparent;transition:background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard)}\n.status[data-state=degraded]{--status:var(--warning);background:color-mix(in oklab,var(--warning) 6%,var(--surface))}\n@container (max-width: 560px){.status{grid-template-columns:auto minmax(0,1fr);padding:14px 16px}\n.status>button{grid-column:1/-1;justify-self:start}\n@media (prefers-reduced-motion:reduce){.bar,.chevron,.glyph,.glyph circle,.status{transition-duration:var(--duration-instant)}\n.glyph{display:block;width:28px;height:28px;flex:none;overflow:visible;color:var(--status);transition:color var(--duration-standard) var(--ease-standard)}\n.glyph circle{fill:color-mix(in oklab,var(--status) 14%,var(--surface));transition:fill var(--duration-standard) var(--ease-standard)}\n.glyph line{fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.3}\n.statusText{display:grid;min-width:0;gap:2px}\n.title{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.statusDetail{display:flex;flex-wrap:wrap;gap:0 var(--space-2);margin:0;color:var(--text-secondary);font-size:var(--text-sm)}\n.statusDetail>span:first-child{color:var(--foreground)}\n.statusDetail>span:nth-child(2){color:var(--text-muted)}\n.statusDetail>span:nth-child(2){display:none}\n.panel{position:relative;min-width:0;border-top:1px solid var(--border);padding:16px 20px 20px}\n.lower>.panel+.panel{border-left:1px solid var(--border)}\n.lower>.panel+.panel{border-left:0}\n.panel{padding:14px 16px 16px}\n.panelHead{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--space-2) var(--space-6);margin-bottom:var(--space-3)}\n.chartHead h3,.panelHead h3{margin:0;font-size:var(--text-sm);font-weight:500}\n.panelHead p{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-sm)}\n.chartHead{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-3)}\n.countLine{display:flex;align-items:baseline;gap:4px}\n.legend{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-4);margin:0;padding:0;color:var(--text-secondary);font-size:var(--text-xs);list-style:none}\n.legend li{display:inline-flex;align-items:center;gap:6px}\n.rows{display:grid;gap:1px;margin-inline:-10px}\n.row{position:relative;isolation:isolate;display:grid;gap:6px;border-radius:10px;padding:8px 10px 10px}\n@media (hover:hover) and (pointer:fine){.row:not([data-selected]):has(.rowHead:hover){background:color-mix(in oklab,var(--surface-muted) 55%,transparent)}\n.rowHighlight{position:absolute;z-index:-1;inset:0;border:1px solid var(--border);border-radius:inherit;background:var(--surface-muted)}\n.rowHead{display:grid;width:100%;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:var(--space-3);border:0;padding:0;background:none;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.rowName{display:flex;min-width:0;align-items:baseline;gap:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.rowDetail{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);font-weight:400;text-overflow:ellipsis;white-space:nowrap}\n.rowDetail,.rowUptimeLabel{display:none}\n.rowUptime{grid-column:3;display:inline-flex;min-width:88px;align-items:baseline;justify-content:flex-end;gap:4px;font-size:var(--text-sm);font-weight:500}\n.rowUptime{min-width:0}\n.rowUptimeLabel{color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.strip{position:relative;cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.strip svg{display:block;width:100%;overflow:visible}\n.strip[data-active] .bars .bar{opacity:.38}\n.bar{fill:var(--state-color);transition:fill var(--duration-standard) var(--ease-standard),opacity var(--duration-instant) var(--ease-standard)}\n.axis{display:flex;justify-content:space-between;padding-top:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.incidentHead:hover .chevron{color:var(--foreground)}\n.incidentHead:hover .incidentTitle{text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:3px}\n.incidentHead{display:grid;width:100%;grid-template-columns:auto minmax(0,1fr) auto auto;align-items:center;gap:var(--space-3);border:0;padding:10px 0;background:none;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.incidentHead{grid-template-columns:auto minmax(0,1fr) auto}\n.incidentHead>span:nth-child(3){grid-column:2;grid-row:2;justify-self:start}\n.chevron{display:inline-flex;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.incidentTitle{font-size:var(--text-sm);font-weight:500}\n.tip{position:absolute;z-index:5;top:0;left:0;display:grid;gap:6px;border:1px solid var(--border);border-radius:12px;padding:10px 12px;background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:none;transform-origin:50% 100%;translate:0 -100%}\n.tipHead{display:flex;justify-content:space-between;gap:var(--space-3);color:var(--text-secondary);font-size:var(--text-xs)}\n.tipStatus{display:flex;align-items:center;gap:var(--space-2);font-weight:500}\n.tipList{display:grid;gap:var(--space-1);margin:0;border-top:1px solid var(--border-subtle);padding:var(--space-2) 0 0;color:var(--text-secondary);font-size:var(--text-xs);list-style:none}\n.tipList li{display:flex;justify-content:space-between;gap:var(--space-3)}\n.tipList li>span:last-child{flex:none;color:var(--text-muted)}\n.tipEmpty{margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.lower{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);align-items:stretch}\n@container (max-width: 860px){.lower{grid-template-columns:minmax(0,1fr)}\n.chartSub{margin-top:2px;color:var(--text-muted);font-size:var(--text-sm)}\n.stamp{padding-top:3px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.readout{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-6);margin:var(--space-3) 0 var(--space-2)}\n.readout>div{display:grid;gap:2px}\n.readout dt{display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-xs)}\n.readout dd{display:inline-flex;align-items:baseline;gap:3px;margin:0;font-size:var(--text-lg);font-weight:500;line-height:1.3}\n.readout{gap:var(--space-2) var(--space-5)}\n.readout dd{font-size:var(--text-base)}\n.unit{color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.swatch{display:inline-block;width:14px;height:2px;border-radius:1px;background:var(--accent)}\n.swatch[data-series=p50]{background:var(--text-muted)}\n.swatch[data-series=target]{height:0;border-top:1px dashed var(--text-muted);border-radius:0;background:none}\n.chart{position:relative;cursor:crosshair;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.chart svg{display:block;width:100%;overflow:visible}\n.gridline{stroke:var(--border);stroke-width:1;shape-rendering:crispEdges}\n.baseline{stroke:var(--border-strong);stroke-width:1;shape-rendering:crispEdges}\n.axisLabel,.endLabel{fill:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.endLabel{fill:var(--text-secondary)}\n.band{fill:var(--accent);opacity:.07}\n.target{stroke:var(--text-muted);stroke-dasharray:4 4;stroke-width:1;shape-rendering:crispEdges}\n.p50,.p95{fill:none;stroke-linecap:round;stroke-linejoin:round}\n.p50{stroke:var(--text-muted);stroke-width:1.5}\n.p95{stroke:var(--accent);stroke-width:2}\n.cross{stroke:var(--border-strong);stroke-width:1;shape-rendering:crispEdges}\n.dot{stroke:var(--surface);stroke-width:2}\n.dot[data-series=p50]{fill:var(--text-muted)}\n.dot[data-series=p95]{fill:var(--accent)}\n.incidents{margin:0;padding:0;list-style:none}\n.incidentItem{overflow:hidden}\n.incidentItem+.incidentItem .incident{border-top:1px solid var(--border-subtle)}\n.incidentText{display:grid;min-width:0;gap:2px}\n.incidentMeta,.resolved{color:var(--text-muted);font-size:var(--text-xs)}\n.resolved{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.incidentBody{overflow:hidden}\n.updates{margin:0;padding:0;list-style:none}\n.updateItem{overflow:hidden}\n.update{position:relative;padding:0 0 var(--space-3) 20px;font-size:var(--text-sm)}\n.update:before{position:absolute;top:6px;left:0;width:8px;height:8px;box-sizing:border-box;border:1.5px solid var(--border-strong);border-radius:50%;background:var(--surface);content:\"\"}\n.update:after{position:absolute;top:18px;bottom:2px;left:3.5px;width:1px;background:var(--border);content:\"\"}\n.update[data-tone=success]:before{border-color:var(--success);background:var(--success)}\n.update[data-tone=warning]:before{border-color:var(--warning);background:var(--warning)}\n.updateHead{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 var(--space-2);margin:0;font-weight:500}\n.updateHead time{color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.updateBody{margin:2px 0 0;color:var(--text-secondary)}\n.lead{display:flex;align-items:center;gap:var(--space-2);margin:0;padding:0 0 var(--space-4) 20px;color:var(--text-secondary);font-size:var(--text-xs)}", {"root":"root","num":"num","srOnly":"srOnly","swap":"swap","swapText":"swapText","mark":"mark","status":"status","bar":"bar","chevron":"chevron","glyph":"glyph","statusText":"statusText","title":"title","statusDetail":"statusDetail","panel":"panel","lower":"lower","panelHead":"panelHead","chartHead":"chartHead","countLine":"countLine","legend":"legend","rows":"rows","row":"row","rowHead":"rowHead","rowHighlight":"rowHighlight","rowName":"rowName","rowDetail":"rowDetail","rowUptimeLabel":"rowUptimeLabel","rowUptime":"rowUptime","strip":"strip","bars":"bars","axis":"axis","incidentHead":"incidentHead","incidentTitle":"incidentTitle","tip":"tip","tipHead":"tipHead","tipStatus":"tipStatus","tipList":"tipList","tipEmpty":"tipEmpty","chartSub":"chartSub","stamp":"stamp","readout":"readout","unit":"unit","swatch":"swatch","chart":"chart","gridline":"gridline","baseline":"baseline","axisLabel":"axisLabel","endLabel":"endLabel","band":"band","target":"target","p50":"p50","p95":"p95","cross":"cross","dot":"dot","incidents":"incidents","incidentItem":"incidentItem","incident":"incident","incidentText":"incidentText","incidentMeta":"incidentMeta","resolved":"resolved","incidentBody":"incidentBody","updates":"updates","updateItem":"updateItem","update":"update","updateHead":"updateHead","updateBody":"updateBody","lead":"lead"});
A.regCss(22346, ".badge{--badge-tone:var(--text-secondary);--badge-tint:10%;--badge-ink:84%;--badge-background:color-mix(in oklab,var(--badge-tone) var(--badge-tint),var(--surface));--badge-foreground:color-mix(in oklab,var(--badge-tone) var(--badge-ink),var(--foreground));--badge-color:color-mix(in oklab,var(--badge-tone) 88%,var(--foreground));--badge-border:transparent;--badge-radius:6px;--badge-height:24px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px;box-sizing:border-box;display:inline-flex;min-height:var(--badge-height);flex:none;align-items:center;justify-content:center;vertical-align:middle;border:1px solid var(--badge-border);border-radius:var(--badge-radius);padding:0 var(--badge-pad);color:var(--badge-foreground);background:var(--badge-background);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.005em;line-height:1;white-space:nowrap;overflow:clip;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n:root[data-theme=dark] .badge{--badge-tint:12%;--badge-ink:94%}\n@media (prefers-reduced-motion:reduce){.badge{transition-duration:var(--duration-instant)}\n.outline{--badge-border:color-mix(in oklab,var(--badge-tone) 14%,var(--border))}\n:root[data-theme=dark] .outline{--badge-border:color-mix(in oklab,var(--badge-tone) 22%,var(--border))}\n.sm{--badge-height:20px;--badge-radius:5px;--badge-pad:8px;--badge-gap:4px;--badge-icon:12px;--badge-dot:5px;font-size:11px}\n.md{--badge-height:24px;--badge-radius:6px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px}\n.lg{--badge-height:28px;--badge-radius:7px;--badge-pad:12px;--badge-gap:6px;--badge-icon:16px;--badge-dot:7px;font-size:var(--text-sm)}\n.pill{--badge-radius:var(--radius-pill)}\n.withIcon{padding-inline-start:calc(var(--badge-pad) - 2px)}\n.withDot{padding-inline-start:calc(var(--badge-pad) - 1px)}\n.body,.content{display:flex;align-items:center}\n.content{position:relative;width:max-content;gap:var(--badge-gap)}\n.glyph,.label{position:relative;display:inline-flex;align-items:center}\n.glyph>svg{display:block;width:var(--badge-icon);height:var(--badge-icon)}\n.text{display:block;text-box:trim-both cap alphabetic}\n.icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center;color:var(--badge-color);line-height:0}\n.dot{display:block;width:var(--badge-dot);height:var(--badge-dot);flex:none;border-radius:50%;background:var(--badge-color)}\n.neutral{--badge-tone:var(--text-secondary)}\n.info{--badge-tone:var(--info,var(--tone-sky))}\n.success{--badge-tone:var(--success)}\n.warning{--badge-tone:var(--warning)}\n.amber,.warning{--badge-ink:76%}\n.danger{--badge-tone:var(--danger)}\n.teal{--badge-tone:var(--tone-teal)}\n.sky{--badge-tone:var(--tone-sky)}\n.orchid{--badge-tone:var(--tone-orchid)}\n.violet{--badge-tone:var(--tone-violet)}\n.rose{--badge-tone:var(--tone-rose)}\n.amber{--badge-tone:var(--tone-amber)}", {});
A.reg(36338, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = n(51811);
  let o = {
    name: "activity",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
          key: "169zse"
        }
      ]
    ]
  };
  o.node;
  let a = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(54268, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.r(t), s.d(t, { UptimeStatus: () => eh, default: () => ef });
  var a = s(95155), i = s(12115), n = s(92171), r = s(79196), d = s(25354), l = s(18310), o = s(80642), u = s(28245), c = s(22535), h = s(57700), p = s(55809), m = s(11012), x = s(36338), g = s(12363), _ = s(65024), y = s(92218), v = s(90034), j = s(51288), f = s(7770);
  let b = {
    operational: "Operational",
    degraded: "Degraded",
    outage: "Major outage"
  }, w = { operational: 1, degraded: 0.64, outage: 0.34 }, N = [
    {
      id: "api",
      name: "API",
      detail: "REST and GraphQL",
      base: 86,
      spread: 2.3,
      target: 400
    },
    {
      id: "dashboard",
      name: "Dashboard",
      detail: "app.halden.example",
      base: 214,
      spread: 2,
      target: 1e3
    },
    {
      id: "webhooks",
      name: "Webhooks",
      detail: "Event delivery",
      base: 128,
      spread: 2.5,
      target: 750
    },
    {
      id: "auth",
      name: "Auth",
      detail: "Sign-in, SSO and tokens",
      base: 58,
      spread: 2.1,
      target: 300
    }
  ], M = { name: "Emma Collins", src: "media/people/emma-collins.svg" }, k = [
    {
      id: "api-errors",
      title: "Elevated error rates on the API",
      services: ["api"],
      severity: "outage",
      day: 84,
      start: "09:12",
      minutes: 23,
      lead: { name: "Ava Mitchell", src: "media/people/ava-mitchell.svg" },
      updates: [
        {
          id: "r",
          status: "Resolved",
          time: "09:58",
          body: "Error rates have been normal for 20 minutes. Pool limits are raised on every cluster and saturation now pages on call."
        },
        {
          id: "m",
          status: "Monitoring",
          time: "09:35",
          body: "A fix is deployed and errors are falling. We are watching the us-east-1 cluster."
        },
        {
          id: "d",
          status: "Identified",
          time: "09:21",
          body: "A connection pool limit on the primary database rejected new requests during a traffic peak."
        },
        {
          id: "i",
          status: "Investigating",
          time: "09:12",
          body: "Some API requests in us-east-1 return 503 errors."
        }
      ]
    },
    {
      id: "dashboard-slow",
      title: "Dashboard charts loading slowly",
      services: ["dashboard"],
      severity: "degraded",
      day: 70,
      start: "14:05",
      minutes: 72,
      lead: {
        name: "Marcus Johnson",
        src: "media/people/marcus-johnson.svg"
      },
      updates: [
        {
          id: "r",
          status: "Resolved",
          time: "15:17",
          body: "Chart queries are back to their usual speed after the reporting index finished rebuilding."
        },
        {
          id: "d",
          status: "Identified",
          time: "14:40",
          body: "A reporting index was rebuilt during business hours, which slowed chart queries."
        },
        {
          id: "i",
          status: "Investigating",
          time: "14:05",
          body: "Analytics charts take up to 20 seconds to load."
        }
      ]
    },
    {
      id: "webhook-retries",
      title: "Webhook retries paused",
      services: ["webhooks"],
      severity: "degraded",
      day: 57,
      start: "03:40",
      minutes: 38,
      lead: { name: "Sofia Ramirez", src: "media/people/sofia-ramirez.svg" },
      updates: [
        {
          id: "r",
          status: "Resolved",
          time: "04:18",
          body: "Every queued retry has been delivered. No events were lost."
        },
        {
          id: "d",
          status: "Identified",
          time: "03:52",
          body: "A stuck worker stopped the retry queue. Retries resume after a restart."
        },
        {
          id: "i",
          status: "Investigating",
          time: "03:40",
          body: "Failed deliveries are not being retried."
        }
      ]
    },
    {
      id: "saml-failures",
      title: "SAML sign-in failures",
      services: ["auth"],
      severity: "outage",
      day: 42,
      start: "11:26",
      minutes: 17,
      lead: {
        name: "Jasmine Brooks",
        src: "media/people/jasmine-brooks.svg"
      },
      updates: [
        {
          id: "r",
          status: "Resolved",
          time: "11:43",
          body: "Sign-in works again for every identity provider after we rolled back a certificate change."
        },
        {
          id: "i",
          status: "Investigating",
          time: "11:26",
          body: "People who sign in with SAML see an invalid signature error."
        }
      ]
    },
    {
      id: "api-latency",
      title: "Increased API and webhook latency",
      services: ["api", "webhooks"],
      severity: "degraded",
      day: 14,
      start: "18:02",
      minutes: 46,
      lead: M,
      updates: [
        {
          id: "r",
          status: "Resolved",
          time: "18:48",
          body: "Latency is back within target. The tenant now has its own cache partition."
        },
        {
          id: "d",
          status: "Identified",
          time: "18:15",
          body: "One tenant saturated the shared cache in eu-west-1."
        },
        {
          id: "i",
          status: "Investigating",
          time: "18:02",
          body: "API responses and webhook deliveries are slower than usual."
        }
      ]
    }
  ], T = [
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
  ], S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], I = Date.UTC(2026, 5, 25), $ = (e2) => new Date(I + 864e5 * e2), A = (e2) => {
    let t2 = $(e2);
    return `${T[t2.getUTCMonth()]} ${t2.getUTCDate()}`;
  }, P = (e2) => `${S[$(e2).getUTCDay()]}, ${A(e2)}`, L = { operational: 0, degraded: 1, outage: 2 }, C = (e2) => Math.round((1 - e2.minutes / 1440) * 1e4) / 100, R = (e2) => {
    let t2 = (900 + 30 * e2) % 1440;
    return `${String(Math.floor(t2 / 60)).padStart(2, "0")}:${String(t2 % 60).padStart(2, "0")}`;
  }, D = (e2) => `${e2 < 18 ? "Sep 21" : "Sep 22"}, ${R(e2)} UTC`, E = [6, 18, 30, 42], Y = Object.fromEntries(
    N.map((e2, t2) => [
      e2.id,
      (function(e3, t3) {
        let s2, a2 = (s2 = t3 >>> 0, () => {
          let e4 = s2 = s2 + 1831565813 >>> 0;
          return e4 = Math.imul(e4 ^ e4 >>> 15, 1 | e4), (((e4 ^= e4 + Math.imul(e4 ^ e4 >>> 7, 61 | e4)) ^ e4 >>> 14) >>> 0) / 4294967296;
        }), i2 = [], n2 = [], r2 = 0;
        for (let t4 = 0; t4 < 48; t4++) {
          let s3 = Math.sin(((15 + t4 / 2) % 24 - 9) / 24 * Math.PI * 2);
          r2 = 0.6 * r2 + (a2() - 0.5) * 0.1;
          let d2 = e3.base * (1 + 0.14 * s3 + r2), l2 = d2 * (e3.spread + 0.3 * Math.max(0, s3) + (a2() - 0.5) * 0.4 + 0.6 * (a2() > 0.92));
          i2.push(Math.round(d2)), n2.push(Math.round(l2));
        }
        return { p50: i2, p95: n2 };
      })(e2, 20260922 + 7919 * t2)
    ])
  ), H = (() => {
    let e2 = [...Y.webhooks.p50], t2 = [...Y.webhooks.p95];
    for (let [s2, a2, i2] of [
      [46, 2.7, 4],
      [47, 3.4, 5.1]
    ])
      e2[s2] = Math.round(e2[s2] * a2), t2[s2] = Math.round(t2[s2] * i2);
    return { p50: e2, p95: t2 };
  })(), U = 174, O = (e2, t2) => 12 + (1 - e2 / Math.max(1, t2)) * U, G = (e2, t2, s2) => t2.map((t3, a2) => e2[a2] + (t3 - e2[a2]) * s2), z = (e2) => Math.round(100 * e2) / 100;
  function B(e2, t2) {
    let s2 = e2.length, a2 = e2.slice(1).map((s3, a3) => (s3 - e2[a3]) / t2), i2 = Array(s2).fill(0);
    for (let e3 = 1; e3 < s2 - 1; e3++) {
      let t3 = a2[e3 - 1], s3 = a2[e3];
      i2[e3] = (Math.sign(t3) + Math.sign(s3)) * Math.min(Math.abs(t3), Math.abs(s3), 0.25 * Math.abs(t3 + s3));
    }
    return i2[0] = (3 * a2[0] - i2[1]) / 2, i2[s2 - 1] = (3 * a2[s2 - 2] - i2[s2 - 2]) / 2, i2;
  }
  function q(e2, t2, s2, a2, i2) {
    let n2 = e2.length, r2 = s2 / 3, d2 = a2 ? -1 : 1, l2 = (e3) => 44 + e3 * s2, o2 = (e3) => a2 ? n2 - 1 - e3 : e3, u2 = `${i2}${z(l2(o2(0)))} ${z(e2[o2(0)])}`;
    for (let s3 = 1; s3 < n2; s3++) {
      let a3 = o2(s3 - 1), i3 = o2(s3);
      u2 += `C${z(l2(a3) + d2 * r2)} ${z(e2[a3] + d2 * t2[a3] * r2)} ${z(l2(i3) - d2 * r2)} ${z(e2[i3] - d2 * t2[i3] * r2)} ${z(l2(i3))} ${z(e2[i3])}`;
    }
    return u2;
  }
  var F = s(15352), W = s.n(F);
  let { spring: J, duration: V, ease: Q } = f.T, X = [...Q.enter], K = [...Q.standard], Z = { visualDuration: 0.16, bounce: 0 }, ee = new Intl.NumberFormat("en-US"), et = (e2, t2, s2) => Math.min(s2, Math.max(t2, e2)), es = (e2) => N.find((t2) => t2.id === e2)?.name ?? e2, ea = (e2) => `${e2} minute${1 === e2 ? "" : "s"}`;
  function ei(e2, t2, s2, a2) {
    a2 ? e2.jump(t2) : (e2.get() !== t2 || e2.isAnimating()) && (0, n.i)(e2, t2, s2);
  }
  function en(e2) {
    let t2 = (0, i.useRef)(null), [s2, a2] = (0, i.useState)(e2);
    return (0, i.useEffect)(() => {
      let e3 = t2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let s3 = new ResizeObserver(([e4]) => {
        let t3 = Math.round(e4.contentRect.width);
        t3 && a2(t3);
      });
      return s3.observe(e3), () => s3.disconnect();
    }, []), [t2, s2];
  }
  function er({ children: e2, reduce: t2, ref: s2 }) {
    let i2 = (0, r.tF)();
    return (0, a.jsx)(d.PY1.span, {
      ref: s2,
      className: W().swapText,
      "aria-hidden": !i2 || void 0,
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.3em" },
      animate: { opacity: 1, y: "0em" },
      exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.25em",
        transition: { duration: V.fast, ease: K }
      },
      transition: t2 ? { duration: 0 } : { duration: V.standard, ease: X },
      children: e2
    });
  }
  function ed({ text: e2, className: t2 }) {
    let s2 = !!(0, l.I)();
    return (0, a.jsx)("span", {
      className: ((...e3) => e3.filter(Boolean).join(" "))(W().swap, t2),
      children: (0, a.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: (0, a.jsx)(er, { reduce: s2, children: e2 }, e2)
      })
    });
  }
  function el({ status: e2 }) {
    let t2 = Math.round(14 * w[e2]);
    return (0, a.jsx)("svg", {
      className: W().mark,
      "data-status": e2,
      width: "8",
      height: "14",
      viewBox: "0 0 8 14",
      "aria-hidden": "true",
      children: (0, a.jsx)("rect", {
        x: "0",
        y: 14 - t2,
        width: "8",
        height: t2,
        rx: "1.5"
      })
    });
  }
  let eo = [
    [6.1, 10.3, 8.8, 13],
    [8.8, 13, 14, 7.4]
  ], eu = [
    [10, 14.1, 10, 14.1],
    [10, 5.8, 10, 10.9]
  ];
  function ec({ degraded: e2 }) {
    let t2 = (0, l.I)();
    return (0, a.jsxs)("svg", {
      className: W().glyph,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("circle", { cx: "10", cy: "10", r: "10" }),
        (e2 ? eu : eo).map(
          ([e3, s2, i2, n2], r2) => (0, a.jsx)(
            d.PY1.line,
            {
              initial: false,
              animate: { x1: e3, y1: s2, x2: i2, y2: n2 },
              transition: t2 ? { duration: 0 } : { ...J.morph, delay: 0.04 * r2 }
            },
            r2
          )
        )
      ]
    });
  }
  function eh() {
    let e2 = (0, i.useId)(), [t2, s2] = (0, i.useState)("operational"), [n2, r2] = (0, i.useState)("api"), [d2, l2] = (0, i.useState)(["api-errors"]), [o2, u2] = (0, i.useState)(""), c2 = (0, i.useMemo)(() => {
      let e3 = (function(e4) {
        if ("operational" === e4) return null;
        let t3 = [
          {
            id: "i",
            status: "Investigating",
            time: "14:32",
            body: "Deliveries to endpoints in eu-west-1 arrive up to 6 minutes late. No events have been dropped."
          }
        ];
        return "recovered" === e4 && t3.unshift({
          id: "r",
          status: "Resolved",
          time: "14:51",
          body: "The delivery queue was scaled out and the backlog has drained. Late events arrived in order."
        }), {
          id: "sim-webhooks",
          title: "Delayed webhook deliveries",
          services: ["webhooks"],
          severity: "degraded",
          day: 89,
          start: "13:58",
          minutes: "recovered" === e4 ? 53 : 34,
          lead: M,
          updates: t3,
          ongoing: "degraded" === e4
        };
      })(t2);
      return e3 ? [e3, ...k] : k;
    }, [t2]), h2 = N.find((e3) => e3.id === n2) ?? N[0], p2 = "degraded" === t2, m2 = "degraded" === t2 ? "Webhook deliveries slowed at 13:58 UTC" : "recovered" === t2 ? "Webhooks recovered at 14:51 UTC" : "Updated Sep 22 at 14:32 UTC";
    return (0, a.jsxs)("section", {
      className: W().root,
      "aria-labelledby": e2,
      children: [
        (0, a.jsxs)("header", {
          className: W().status,
          "data-state": p2 ? "degraded" : "operational",
          children: [
            (0, a.jsx)(ec, { degraded: p2 }),
            (0, a.jsxs)("div", {
              className: W().statusText,
              children: [
                (0, a.jsx)("h2", {
                  id: e2,
                  className: W().title,
                  children: (0, a.jsx)(ed, {
                    text: p2 ? "Degraded performance" : "All systems operational"
                  })
                }),
                (0, a.jsxs)("p", {
                  className: W().statusDetail,
                  children: [
                    (0, a.jsx)("span", { children: "Halden status" }),
                    (0, a.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\xB7"
                    }),
                    (0, a.jsx)(ed, { text: m2 })
                  ]
                })
              ]
            }),
            (0, a.jsx)(j.$, {
              variant: "secondary",
              size: "sm",
              onClick: function() {
                "operational" === t2 ? (s2("degraded"), r2("webhooks"), l2((e3) => [
                  "sim-webhooks",
                  ...e3.filter((e4) => "sim-webhooks" !== e4)
                ]), u2("Incident started. Webhooks is degraded.")) : "degraded" === t2 ? (s2("recovered"), u2("Incident resolved. All systems operational.")) : (s2("operational"), l2((e3) => e3.filter((e4) => "sim-webhooks" !== e4)), u2("Reset. The incident was removed."));
              },
              children: "operational" === t2 ? "Simulate incident" : "degraded" === t2 ? "Simulate resolution" : "Reset demo"
            })
          ]
        }),
        (0, a.jsx)(ep, { incidents: c2, selected: n2, onSelect: r2 }),
        (0, a.jsxs)("div", {
          className: W().lower,
          children: [
            (0, a.jsx)(ey, { service: h2, phase: t2 }),
            (0, a.jsx)(ev, {
              incidents: c2,
              open: d2,
              onToggle: (e3) => l2(
                (t3) => t3.includes(e3) ? t3.filter((t4) => t4 !== e3) : [...t3, e3]
              )
            })
          ]
        }),
        (0, a.jsx)("p", {
          className: W().srOnly,
          role: "status",
          "aria-live": "polite",
          children: o2
        })
      ]
    });
  }
  function ep({ incidents: e2, selected: t2, onSelect: s2 }) {
    let n2 = !!(0, l.I)(), r2 = (0, i.useId)(), p2 = (0, i.useId)(), m2 = (0, i.useRef)(null), [x2, g2] = (0, i.useState)(null), [_2, y2] = (0, i.useState)(""), v2 = (0, u.d)(0), j2 = (0, u.d)(0), f2 = (0, c.z)(v2, Z), w2 = (0, c.z)(j2, Z), M2 = (0, i.useMemo)(
      () => N.map((t3) => {
        let s3 = (function(e3, t4) {
          let s4 = Array.from({ length: 90 }, () => ({
            status: "operational",
            minutes: 0,
            incidents: []
          }));
          for (let a2 of t4) {
            if (!a2.services.includes(e3)) continue;
            let t5 = s4[a2.day];
            t5.minutes += a2.minutes, t5.incidents.push(a2), L[a2.severity] > L[t5.status] && (t5.status = a2.severity);
          }
          return s4;
        })(t3.id, e2);
        return {
          service: t3,
          days: s3,
          uptime: Math.round(
            (1 - s3.reduce((e3, t4) => e3 + t4.minutes, 0) / 129600) * 1e4
          ) / 100,
          ongoing: e2.some((e3) => e3.ongoing && e3.services.includes(t3.id))
        };
      }),
      [e2]
    ), k2 = x2 ? M2.find((e3) => e3.service.id === x2.service) : void 0, T2 = k2 && x2 ? k2.days[x2.day] : void 0;
    return (0, a.jsxs)("section", {
      ref: m2,
      className: W().panel,
      "aria-labelledby": p2,
      children: [
        (0, a.jsxs)("div", {
          className: W().panelHead,
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("h3", { id: p2, children: "Uptime" }),
                (0, a.jsx)("p", {
                  children: "Last 90 days \xB7 select a service to chart it"
                })
              ]
            }),
            (0, a.jsx)("ul", {
              className: W().legend,
              "aria-label": "Legend",
              children: ["operational", "degraded", "outage"].map(
                (e3) => (0, a.jsxs)(
                  "li",
                  { children: [(0, a.jsx)(el, { status: e3 }), b[e3]] },
                  e3
                )
              )
            })
          ]
        }),
        (0, a.jsx)(h.o, {
          id: r2,
          children: (0, a.jsx)("div", {
            className: W().rows,
            children: M2.map(
              (e3) => (0, a.jsx)(
                ex,
                {
                  ...e3,
                  selected: e3.service.id === t2,
                  hover: x2?.service === e3.service.id ? x2.day : null,
                  reduce: n2,
                  onSelect: () => s2(e3.service.id),
                  onInspect: (t3, s3, a2, i2) => (function(e4, t4, s4, a3, i3) {
                    var n3, r3;
                    let d2, l2 = m2.current;
                    if (!l2) return;
                    let o2 = l2.getBoundingClientRect(), u2 = s4.getBoundingClientRect(), c2 = Math.min(256, o2.width - 16), h2 = Math.round(
                      et(u2.left - o2.left + a3 - c2 / 2, 8, o2.width - c2 - 8)
                    ), p3 = Math.round(u2.top - o2.top - 8);
                    v2.set(h2), j2.set(p3), x2 || (f2.jump(h2), w2.jump(p3)), g2({ service: e4.service.id, day: t4, width: c2 }), i3 && y2(
                      (n3 = e4.days[t4], r3 = t4, d2 = n3.incidents.map((e5) => `${e5.title}, ${ea(e5.minutes)}`).join(". "), `${P(r3)}: ${b[n3.status]}, ${C(n3).toFixed(2)}% uptime. ${d2 || "No incidents recorded."}`)
                    );
                  })(e3, t3, s3, a2, i2),
                  onLeave: () => g2(null)
                },
                e3.service.id
              )
            )
          })
        }),
        (0, a.jsxs)("div", {
          className: W().axis,
          "aria-hidden": "true",
          children: [
            (0, a.jsx)("span", { children: A(0) }),
            (0, a.jsx)("span", { children: "Today" })
          ]
        }),
        (0, a.jsx)(o.N, {
          children: x2 && k2 && T2 && (0, a.jsxs)(
            d.PY1.div,
            {
              className: W().tip,
              "aria-hidden": "true",
              style: { x: n2 ? v2 : f2, y: n2 ? j2 : w2, width: x2.width },
              initial: { opacity: 0, scale: 0.97 },
              animate: { opacity: 1, scale: 1 },
              exit: {
                opacity: 0,
                scale: 0.98,
                transition: { duration: V.instant, ease: K }
              },
              transition: n2 ? { duration: 0 } : { duration: V.fast, ease: X },
              children: [
                (0, a.jsxs)("div", {
                  className: W().tipHead,
                  children: [
                    (0, a.jsxs)("span", {
                      children: [k2.service.name, " \xB7 ", P(x2.day)]
                    }),
                    (0, a.jsxs)("span", {
                      className: W().num,
                      children: [C(T2).toFixed(2), "%"]
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  className: W().tipStatus,
                  children: [
                    (0, a.jsx)(el, { status: T2.status }),
                    b[T2.status]
                  ]
                }),
                T2.incidents.length ? (0, a.jsx)("ul", {
                  className: W().tipList,
                  children: T2.incidents.map(
                    (e3) => (0, a.jsxs)(
                      "li",
                      {
                        children: [
                          (0, a.jsx)("span", { children: e3.title }),
                          (0, a.jsxs)("span", {
                            className: W().num,
                            children: [e3.minutes, " min"]
                          })
                        ]
                      },
                      e3.id
                    )
                  )
                }) : (0, a.jsx)("p", {
                  className: W().tipEmpty,
                  children: "No incidents recorded"
                })
              ]
            },
            "tip"
          )
        }),
        (0, a.jsx)("p", {
          className: W().srOnly,
          "aria-live": "polite",
          children: _2
        })
      ]
    });
  }
  let em = (0, i.memo)(function({ days: e2, bars: t2, radius: s2, reduce: i2 }) {
    return (0, a.jsx)("g", {
      className: W().bars,
      children: e2.map(
        (e3, n2) => (0, a.jsx)(
          d.PY1.rect,
          {
            className: W().bar,
            "data-status": e3.status,
            x: t2[n2].x,
            y: 0,
            width: t2[n2].w,
            rx: s2,
            initial: false,
            animate: { height: Math.round(34 * w[e3.status]) },
            transition: i2 ? { duration: 0 } : J.morph
          },
          n2
        )
      )
    });
  });
  function ex({
    service: e2,
    days: t2,
    uptime: s2,
    ongoing: n2,
    selected: r2,
    hover: l2,
    reduce: o2,
    onSelect: u2,
    onInspect: c2,
    onLeave: h2
  }) {
    let p2 = (0, i.useId)(), [x2, g2] = en(640), y2 = (0, i.useMemo)(() => {
      let e3, t3;
      return e3 = g2 < 420 ? 1 : 2, t3 = (g2 + e3) / 90, Array.from({ length: 90 }, (s3, a2) => {
        let i2 = Math.round(a2 * t3);
        return { x: i2, w: Math.max(1, Math.round((a2 + 1) * t3 - e3) - i2) };
      });
    }, [g2]), j2 = g2 / 90 > 4 ? 1.5 : 0.75, f2 = t2.flatMap(
      (e3, t3) => e3.incidents.length ? [`${A(t3)} ${b[e3.status].toLowerCase()}, ${ea(e3.minutes)}`] : []
    ), N2 = `${s2.toFixed(2)}% uptime. ${f2.length ? `Incidents: ${f2.join("; ")}.` : "No incidents."} Use the arrow keys to inspect each day.`;
    function M2(e3, t3) {
      let s3 = x2.current;
      if (!s3) return;
      let a2 = s3.getBoundingClientRect().width / g2;
      c2(e3, s3, (y2[e3].x + y2[e3].w / 2) * a2, t3);
    }
    let k2 = (e3, t3) => {
      let s3 = t3.getBoundingClientRect();
      return et(Math.floor((e3 - s3.left) / s3.width * 90), 0, 89);
    }, T2 = null === l2 ? null : t2[l2];
    return (0, a.jsxs)("div", {
      className: W().row,
      "data-selected": r2 || void 0,
      children: [
        r2 && (0, a.jsx)(d.PY1.span, {
          layoutId: "service-highlight",
          className: W().rowHighlight,
          transition: o2 ? { duration: 0 } : J.morph,
          "aria-hidden": "true"
        }),
        (0, a.jsxs)("button", {
          type: "button",
          className: W().rowHead,
          "aria-pressed": r2,
          onClick: u2,
          children: [
            (0, a.jsxs)("span", {
              className: W().rowName,
              children: [
                e2.name,
                (0, a.jsx)("span", {
                  className: W().rowDetail,
                  children: e2.detail
                })
              ]
            }),
            n2 ? (0, a.jsx)(v.E, {
              size: "sm",
              tone: "warning",
              icon: (0, a.jsx)(m.A, { size: 12, strokeWidth: 2 }),
              children: "Degraded"
            }) : (0, a.jsx)("span", {
              className: W().srOnly,
              children: "Operational"
            }),
            (0, a.jsxs)("span", {
              className: W().rowUptime,
              children: [
                (0, a.jsx)("span", {
                  className: W().num,
                  children: (0, a.jsx)(_.q, {
                    value: s2,
                    decimals: 2,
                    suffix: "%"
                  })
                }),
                (0, a.jsx)("span", {
                  className: W().rowUptimeLabel,
                  children: "uptime"
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          ref: x2,
          className: W().strip,
          tabIndex: 0,
          role: "group",
          "aria-label": `${e2.name}, daily status for the last 90 days`,
          "aria-describedby": p2,
          "data-active": T2 ? "" : void 0,
          onPointerMove: (e3) => M2(k2(e3.clientX, e3.currentTarget), false),
          onPointerDown: (e3) => M2(k2(e3.clientX, e3.currentTarget), false),
          onPointerLeave: h2,
          onBlur: h2,
          onClick: u2,
          onKeyDown: function(e3) {
            let t3 = l2 ?? 89, s3 = {
              ArrowLeft: t3 - 1,
              ArrowRight: t3 + 1,
              PageUp: t3 - 7,
              PageDown: t3 + 7,
              Home: 0,
              End: 89
            };
            return "Escape" === e3.key ? h2() : "Enter" === e3.key || " " === e3.key ? (e3.preventDefault(), u2()) : void (e3.key in s3 && (e3.preventDefault(), M2(et(s3[e3.key], 0, 89), true)));
          },
          onFocus: (e3) => {
            e3.currentTarget.matches(":focus-visible") && M2(l2 ?? 89, true);
          },
          children: [
            (0, a.jsx)("svg", {
              width: "100%",
              height: 34,
              viewBox: `0 0 ${g2} 34`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              children: (0, a.jsxs)("g", {
                transform: "matrix(1 0 0 -1 0 34)",
                children: [
                  (0, a.jsx)(em, { days: t2, bars: y2, radius: j2, reduce: o2 }),
                  T2 && null !== l2 && (0, a.jsx)("rect", {
                    className: W().bar,
                    "data-status": T2.status,
                    "data-lit": "",
                    x: y2[l2].x,
                    y: 0,
                    width: y2[l2].w,
                    height: Math.round(34 * w[T2.status]),
                    rx: j2
                  })
                ]
              })
            }),
            (0, a.jsx)("span", { id: p2, className: W().srOnly, children: N2 })
          ]
        })
      ]
    });
  }
  function eg({ value: e2, top: t2, width: s2, reduce: i2 }) {
    let n2 = (0, p.G)(
      t2,
      (t3) => Math.round(12 + (1 - e2 / Math.max(1, t3)) * U) + 0.5
    ), r2 = (0, p.G)(
      n2,
      (e3) => et(1 - Math.max(6 - e3, e3 - (12 + U) - 1, 0) / 12, 0, 1)
    );
    return (0, a.jsx)(d.PY1.g, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: V.fast } },
      transition: { duration: i2 ? 0 : V.standard, ease: X },
      children: (0, a.jsxs)(d.PY1.g, {
        style: { y: n2, opacity: r2 },
        children: [
          (0, a.jsx)("line", {
            className: 0 === e2 ? W().baseline : W().gridline,
            x1: 44,
            x2: s2 - 36,
            y1: 0,
            y2: 0
          }),
          (0, a.jsx)("text", {
            className: W().axisLabel,
            x: 34,
            y: 0,
            dy: ".32em",
            textAnchor: "end",
            children: ee.format(e2)
          })
        ]
      })
    });
  }
  function e_({ value: e2, rolling: t2 }) {
    return (0, a.jsxs)("dd", {
      children: [
        (0, a.jsx)("span", {
          className: W().num,
          children: t2 ? (0, a.jsx)(_.q, { value: e2 }) : ee.format(e2)
        }),
        (0, a.jsx)("span", { className: W().unit, children: "ms" })
      ]
    });
  }
  function ey({ service: e2, phase: t2 }) {
    let s2, r2 = !!(0, l.I)(), c2 = (0, i.useId)(), h2 = (s2 = e2.id, "webhooks" === s2 && "operational" !== t2 ? H : Y[s2]), m2 = (0, i.useMemo)(() => [...h2.p50, ...h2.p95], [h2]), x2 = (0, i.useMemo)(() => {
      var t3;
      let s3, a2;
      return t3 = 1.08 * Math.max(...h2.p95, e2.target), s3 = [50, 100, 200, 250, 500, 1e3, 2e3].find((e3) => t3 / e3 <= 5) ?? 2e3, {
        top: a2 = Math.ceil(t3 / s3) * s3,
        ticks: Array.from({ length: a2 / s3 + 1 }, (e3, t4) => t4 * s3)
      };
    }, [h2, e2.target]), [g2, _2] = en(560), [y2, v2] = (0, i.useState)(null), [j2, f2] = (0, i.useState)(""), b2 = (0, u.d)(1), w2 = (0, u.d)(m2), N2 = (0, u.d)(m2), M2 = (0, u.d)(x2.top), k2 = (0, u.d)(e2.target), T2 = (0, u.d)(560), S2 = (0, u.d)(-1);
    (0, i.useEffect)(() => {
      T2.set(_2);
    }, [_2, T2]), (0, i.useEffect)(() => {
      ei(M2, x2.top, J.smooth, r2), ei(k2, e2.target, J.smooth, r2), N2.get() !== m2 && (w2.set(r2 ? m2 : G(w2.get(), N2.get(), b2.get())), N2.set(m2), b2.jump(0), r2 ? b2.jump(1) : (0, n.i)(b2, 1, J.smooth));
    }, [m2, x2.top, e2.target, r2, w2, N2, b2, M2, k2]);
    let I2 = (0, p.G)(
      () => (function(e3, t3, s3, a2, i2) {
        let n2 = Math.max(40, s3 - 44 - 36) / 47, r3 = e3.slice(0, 48).map((e4) => O(e4, t3)), d2 = e3.slice(48).map((e4) => O(e4, t3)), l2 = B(r3, n2), o2 = B(d2, n2), u2 = q(d2, o2, n2, false, "M"), c3 = Math.max(0, Math.min(47, Math.round(a2))), h3 = d2[47], p2 = r3[47];
        if (p2 - h3 < 14) {
          let e4 = (p2 + h3) / 2;
          h3 = e4 - 7, p2 = e4 + 7;
        }
        let m3 = 12 + U;
        return p2 > m3 - 2 && (h3 -= p2 - m3 + 2, p2 = m3 - 2), {
          p50: q(r3, l2, n2, false, "M"),
          p95: u2,
          band: `${u2}${q(r3, l2, n2, true, "L")}Z`,
          hoverX: Math.round(44 + c3 * n2) + 0.5,
          dot50: r3[c3],
          dot95: d2[c3],
          label50: p2,
          label95: h3,
          targetY: Math.round(O(i2, t3)) + 0.5
        };
      })(G(w2.get(), N2.get(), b2.get()), M2.get(), T2.get(), S2.get(), k2.get())
    ), $2 = (0, p.G)(() => I2.get().p50), A2 = (0, p.G)(() => I2.get().p95), P2 = (0, p.G)(() => I2.get().band), L2 = (0, p.G)(() => I2.get().hoverX), C2 = (0, p.G)(() => I2.get().dot50), z2 = (0, p.G)(() => I2.get().dot95), F2 = (0, p.G)(() => I2.get().label50), V2 = (0, p.G)(() => I2.get().label95), Q2 = (0, p.G)(() => I2.get().targetY);
    function X2(e3, t3 = false) {
      S2.set(e3 ?? -1), v2(e3), t3 && null !== e3 && f2(`${D(e3)}: p50 ${h2.p50[e3]} ms, p95 ${h2.p95[e3]} ms.`);
    }
    let K2 = (e3, t3) => {
      let s3 = t3.getBoundingClientRect();
      return et(
        Math.round(
          ((e3 - s3.left) * _2 / Math.max(1, s3.width) - 44) / (Math.max(40, _2 - 44 - 36) / 47)
        ),
        0,
        47
      );
    }, Z2 = y2 ?? 47, es2 = h2.p95.indexOf(Math.max(...h2.p95)), ea2 = `${e2.name} response time over the last 24 hours. Latest p50 ${h2.p50[47]} ms and p95 ${h2.p95[47]} ms. Highest p95 ${ee.format(h2.p95[es2])} ms at ${R(es2)} UTC. Target p95 ${ee.format(e2.target)} ms.`;
    return (0, a.jsxs)("section", {
      className: W().panel,
      "aria-labelledby": c2,
      children: [
        (0, a.jsxs)("div", {
          className: W().chartHead,
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("h3", { id: c2, children: "Response time" }),
                (0, a.jsx)(ed, {
                  className: W().chartSub,
                  text: `${e2.name} \xB7 last 24 hours`
                })
              ]
            }),
            (0, a.jsx)("span", {
              className: W().stamp,
              children: null === y2 ? "Latest, 14:30 UTC" : D(y2)
            })
          ]
        }),
        (0, a.jsxs)("dl", {
          className: W().readout,
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("dt", {
                  children: [
                    (0, a.jsx)("i", {
                      className: W().swatch,
                      "data-series": "p95"
                    }),
                    "p95"
                  ]
                }),
                (0, a.jsx)(e_, { value: h2.p95[Z2], rolling: null === y2 })
              ]
            }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("dt", {
                  children: [
                    (0, a.jsx)("i", {
                      className: W().swatch,
                      "data-series": "p50"
                    }),
                    "p50"
                  ]
                }),
                (0, a.jsx)(e_, { value: h2.p50[Z2], rolling: null === y2 })
              ]
            }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("dt", {
                  children: [
                    (0, a.jsx)("i", {
                      className: W().swatch,
                      "data-series": "target"
                    }),
                    "p95 target"
                  ]
                }),
                (0, a.jsx)(e_, { value: e2.target, rolling: true })
              ]
            })
          ]
        }),
        (0, a.jsx)("div", {
          ref: g2,
          className: W().chart,
          tabIndex: 0,
          role: "group",
          "aria-label": `${e2.name} response time chart. Use the arrow keys to inspect each half hour.`,
          onPointerMove: (e3) => X2(K2(e3.clientX, e3.currentTarget)),
          onPointerDown: (e3) => X2(K2(e3.clientX, e3.currentTarget)),
          onPointerLeave: () => X2(null),
          onBlur: () => X2(null),
          onKeyDown: function(e3) {
            let t3 = y2 ?? 47, s3 = { ArrowLeft: t3 - 1, ArrowRight: t3 + 1, Home: 0, End: 47 };
            if ("Escape" === e3.key) return X2(null);
            e3.key in s3 && (e3.preventDefault(), X2(et(s3[e3.key], 0, 47), true));
          },
          children: (0, a.jsxs)("svg", {
            width: "100%",
            height: 216,
            viewBox: `0 0 ${_2} 216`,
            role: "img",
            "aria-label": ea2,
            children: [
              (0, a.jsx)(o.N, {
                initial: false,
                children: x2.ticks.map(
                  (e3) => (0, a.jsx)(eg, { value: e3, top: M2, width: _2, reduce: r2 }, e3)
                )
              }),
              E.map(
                (e3) => (0, a.jsx)(
                  "text",
                  {
                    className: W().axisLabel,
                    x: 44 + e3 * Math.max(40, _2 - 44 - 36) / 47,
                    y: 208,
                    textAnchor: "middle",
                    children: R(e3)
                  },
                  e3
                )
              ),
              (0, a.jsx)(d.PY1.path, { className: W().band, d: P2 }),
              (0, a.jsx)(d.PY1.line, {
                className: W().target,
                x1: 44,
                x2: _2 - 36,
                y1: Q2,
                y2: Q2
              }),
              (0, a.jsx)(d.PY1.path, { className: W().p50, d: $2 }),
              (0, a.jsx)(d.PY1.path, { className: W().p95, d: A2 }),
              (0, a.jsx)(d.PY1.text, {
                className: W().endLabel,
                x: _2 - 36 + 8,
                y: V2,
                dy: ".32em",
                children: "p95"
              }),
              (0, a.jsx)(d.PY1.text, {
                className: W().endLabel,
                x: _2 - 36 + 8,
                y: F2,
                dy: ".32em",
                children: "p50"
              }),
              null !== y2 && (0, a.jsxs)("g", {
                children: [
                  (0, a.jsx)(d.PY1.line, {
                    className: W().cross,
                    x1: L2,
                    x2: L2,
                    y1: 12,
                    y2: 12 + U
                  }),
                  (0, a.jsx)(d.PY1.circle, {
                    className: W().dot,
                    "data-series": "p50",
                    cx: L2,
                    cy: C2,
                    r: 3.5
                  }),
                  (0, a.jsx)(d.PY1.circle, {
                    className: W().dot,
                    "data-series": "p95",
                    cx: L2,
                    cy: z2,
                    r: 4
                  })
                ]
              })
            ]
          })
        }),
        (0, a.jsx)("div", {
          className: W().srOnly,
          children: (0, a.jsxs)("table", {
            children: [
              (0, a.jsxs)("caption", {
                children: [
                  e2.name,
                  " response time in milliseconds, last 24 hours"
                ]
              }),
              (0, a.jsx)("thead", {
                children: (0, a.jsxs)("tr", {
                  children: [
                    (0, a.jsx)("th", { scope: "col", children: "Time" }),
                    (0, a.jsx)("th", { scope: "col", children: "p50" }),
                    (0, a.jsx)("th", { scope: "col", children: "p95" })
                  ]
                })
              }),
              (0, a.jsx)("tbody", {
                children: h2.p50.map(
                  (e3, t3) => (0, a.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, a.jsx)("th", { scope: "row", children: D(t3) }),
                        (0, a.jsx)("td", { children: e3 }),
                        (0, a.jsx)("td", { children: h2.p95[t3] })
                      ]
                    },
                    t3
                  )
                )
              })
            ]
          })
        }),
        (0, a.jsx)("p", {
          className: W().srOnly,
          "aria-live": "polite",
          children: j2
        })
      ]
    });
  }
  function ev({ incidents: e2, open: t2, onToggle: s2 }) {
    let n2 = !!(0, l.I)(), r2 = (0, i.useId)(), u2 = n2 ? { duration: 0 } : { ...J.smooth, opacity: { duration: V.standard, ease: X } };
    return (0, a.jsxs)("section", {
      className: W().panel,
      "aria-labelledby": r2,
      children: [
        (0, a.jsx)("div", {
          className: W().panelHead,
          children: (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("h3", { id: r2, children: "Incidents" }),
              (0, a.jsxs)("p", {
                className: W().countLine,
                children: [
                  (0, a.jsx)("span", {
                    className: W().num,
                    children: (0, a.jsx)(_.q, { value: e2.length })
                  }),
                  " in the last 90 days"
                ]
              })
            ]
          })
        }),
        (0, a.jsx)("ol", {
          className: W().incidents,
          children: (0, a.jsx)(o.N, {
            initial: false,
            children: e2.map(
              (e3) => (0, a.jsx)(
                d.PY1.li,
                {
                  className: W().incidentItem,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: u2,
                  children: (0, a.jsx)(ej, {
                    incident: e3,
                    open: t2.includes(e3.id),
                    onToggle: () => s2(e3.id),
                    collapse: u2,
                    reduce: n2
                  })
                },
                e3.id
              )
            )
          })
        })
      ]
    });
  }
  function ej({ incident: e2, open: t2, onToggle: s2, collapse: n2, reduce: r2 }) {
    let l2 = (0, i.useId)(), u2 = 89 === e2.day ? "Today" : A(e2.day), c2 = e2.ongoing ? `${e2.minutes} min so far` : `${e2.minutes} min`;
    return (0, a.jsxs)("div", {
      className: W().incident,
      children: [
        (0, a.jsxs)("button", {
          type: "button",
          className: W().incidentHead,
          "aria-expanded": t2,
          "aria-controls": t2 ? l2 : void 0,
          onClick: s2,
          children: [
            (0, a.jsx)(el, { status: e2.severity }),
            (0, a.jsxs)("span", {
              className: W().incidentText,
              children: [
                (0, a.jsx)("span", {
                  className: W().incidentTitle,
                  children: e2.title
                }),
                (0, a.jsx)(ed, {
                  className: W().incidentMeta,
                  text: `${b[e2.severity]} \xB7 ${u2} at ${e2.start} UTC \xB7 ${c2} \xB7 ${e2.services.map(es).join(", ")}`
                })
              ]
            }),
            e2.ongoing ? (0, a.jsx)(v.E, {
              size: "sm",
              tone: "warning",
              icon: (0, a.jsx)(x.A, { size: 12, strokeWidth: 2 }),
              children: "Investigating"
            }) : (0, a.jsx)("span", {
              className: W().resolved,
              children: "Resolved"
            }),
            (0, a.jsx)(d.PY1.span, {
              className: W().chevron,
              initial: false,
              animate: { rotate: 180 * !!t2 },
              transition: r2 ? { duration: 0 } : J.snappy,
              children: (0, a.jsx)(g.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, a.jsx)(o.N, {
          initial: false,
          children: t2 && (0, a.jsxs)(
            d.PY1.div,
            {
              id: l2,
              className: W().incidentBody,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: n2,
              children: [
                (0, a.jsx)("ol", {
                  className: W().updates,
                  "aria-label": "Updates, newest first",
                  children: (0, a.jsx)(o.N, {
                    initial: false,
                    children: e2.updates.map(
                      (t3, s3) => (0, a.jsx)(
                        d.PY1.li,
                        {
                          className: W().updateItem,
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: n2,
                          children: (0, a.jsxs)("div", {
                            className: W().update,
                            "data-tone": "Resolved" === t3.status ? "success" : e2.ongoing && 0 === s3 ? "warning" : void 0,
                            children: [
                              (0, a.jsxs)("p", {
                                className: W().updateHead,
                                children: [
                                  (0, a.jsx)("span", { children: t3.status }),
                                  (0, a.jsxs)("time", {
                                    className: W().num,
                                    children: [t3.time, " UTC"]
                                  })
                                ]
                              }),
                              (0, a.jsx)("p", {
                                className: W().updateBody,
                                children: t3.body
                              })
                            ]
                          })
                        },
                        t3.id
                      )
                    )
                  })
                }),
                (0, a.jsxs)("p", {
                  className: W().lead,
                  children: [
                    (0, a.jsx)(y.e, {
                      name: e2.lead.name,
                      src: e2.lead.src,
                      size: "sm"
                    }),
                    (0, a.jsxs)("span", {
                      children: [
                        e2.lead.name,
                        " ",
                        e2.ongoing ? "is leading" : "led",
                        " the response"
                      ]
                    })
                  ]
                })
              ]
            },
            "body"
          )
        })
      ]
    });
  }
  let ef = eh;
}

__m(__module,__exports,__require);
});
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
A.cssFor("uptime-status", [15352,22346]);
A.item("uptime-status", {entry:54268, export:"UptimeStatus", kind:"block", tier:"pro", unresolved:[]});
})();