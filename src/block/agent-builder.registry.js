/* agent-builder (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(904, ".root{display:flex;width:100%;justify-content:center}\n.card{--pad:24px;container-type:inline-size;position:relative;box-sizing:border-box;display:flex;width:100%;max-width:640px;flex-direction:column;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;line-height:20px;text-align:left}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;margin:-1px;padding:0;border:0}\n.truncate{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.nums{font-variant-numeric:tabular-nums}\n.claude{color:#d97757}\n.head{display:flex;align-items:center;gap:12px 16px;padding:16px var(--pad);border-bottom:1px solid var(--border-subtle)}\n.head>.modeSwitch{flex:none}\n@container (max-width: 480px){.configure,.foot,.head,.testView{--pad:16px}\n@container (max-width: 300px){.head{flex-wrap:wrap}\n.avatar{width:20px;height:20px;font-size:12px;line-height:16px;--tint:var(--series-1);display:grid;flex:none;place-items:center;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--tint) 16%,var(--surface));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--tint) 22%,transparent);color:color-mix(in oklab,var(--tint) 78%,var(--foreground));font-weight:500;user-select:none;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n.avatar[data-tint=\"2\"]{--tint:var(--series-2)}\n.avatar[data-tint=\"3\"]{--tint:var(--series-3)}\n.avatar[data-tint=\"4\"]{--tint:var(--series-4)}\n.identity{display:flex;min-width:0;flex:1;flex-direction:column;align-items:flex-start}\n.nameField{--name-pad-x:8px;position:relative;display:grid;min-width:0;max-width:calc(100% + var(--name-pad-x) + 1px);margin:-2px 0 0 calc(-1 * (var(--name-pad-x) + 1px))}\n.nameInput,.nameSizer{grid-area:1/1;box-sizing:border-box;min-width:0;margin:0;padding:2px var(--name-pad-x);border:1px solid transparent;border-radius:10px;font:inherit;font-size:15px;font-weight:500;line-height:22px;letter-spacing:inherit;white-space:pre}\n.nameSizer{overflow:hidden;padding-inline-end:calc(var(--name-pad-x) + 4px);visibility:hidden}\n.nameInput{position:absolute;inset:0;width:100%;background:transparent;color:var(--foreground);text-overflow:ellipsis;cursor:text;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.nameInput::placeholder{color:var(--text-muted);opacity:1}\n@media (hover:hover) and (pointer:fine){.nameInput:hover:not(:focus){background:var(--surface-muted)}\n.nameInput:focus{border-color:var(--foreground);background:var(--surface)}\n@media (prefers-reduced-motion:reduce){.callResult,.chevron,.iconButton,.nameInput,.progressFill,.rowMark,.send,.suggestion{transition:none}\n.identityMeta{display:flex;max-width:100%;min-width:0;align-items:center;gap:6px;color:var(--text-muted);font-size:12px;line-height:16px;white-space:nowrap}\n.versionSlot{position:relative;display:inline-grid;min-width:4ch}\n.modeSwitch{order:3;width:100%}\n.modeSwitch>div{width:100%}\n.modeSwitch button{flex:1 1 0}\n.body{position:relative}\n.configure{display:flex;flex-direction:column;gap:24px;padding:20px var(--pad) 24px}\n.configure{padding-top:16px}\n.testView{position:absolute;inset:0;display:flex;flex-direction:column;padding:16px var(--pad)}\n.section{display:flex;flex-direction:column;gap:4px}\n.sectionHead{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:12px}\n.sectionTitle{color:var(--foreground);font-size:13px;font-weight:500;line-height:20px}\n.meta{display:flex;align-items:center;gap:6px}\n.metaText,.meta{min-width:0;overflow:hidden;color:var(--text-muted);font-size:12px;line-height:16px;text-overflow:ellipsis;white-space:nowrap}\n.metaText{display:block}\n.metaError{color:var(--danger)}\n.addFile{margin-inline-end:-10px}\n.addFile svg,.testHead>button svg{width:14px;height:14px}\n.testHead{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:12px}\n.testHead>button{margin-inline-end:-10px}\n.modelRow{display:flex;align-items:center;justify-content:space-between;gap:16px}\n.modelTrigger{box-sizing:border-box;display:inline-flex;flex:none;width:216px;height:36px;align-items:center;gap:8px;padding:0 10px 0 12px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--foreground);font:inherit;font-size:13px;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.modelTrigger:hover{background:var(--surface-muted)}\n.modelTrigger[data-state=open]{background:var(--surface-muted)}\n.modelTrigger[data-state=open] .chevron{transform:rotate(180deg)}\n.modelTrigger{width:184px}\n.modelMark{display:grid;flex:none;width:16px;height:16px;place-items:center}\n.modelMark svg{width:16px;height:16px}\n.modelValue{position:relative;display:grid;min-width:0;flex:1;text-align:left}\n.chevron{flex:none;width:14px;height:14px;color:var(--text-muted);transition:transform var(--duration-fast) var(--ease-standard)}\n.menu{z-index:60;box-sizing:border-box;min-width:272px;padding:4px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);font-size:13px;line-height:20px;transform-origin:var(--radix-dropdown-menu-content-transform-origin);animation:menuIn .14s var(--ease-enter)}\n.menu[data-state=closed]{animation:menuOut .1s var(--ease-standard) forwards}\n.menu,.menu[data-state=closed]{animation:none}\n.menuItem{display:flex;height:36px;align-items:center;gap:8px;padding:0 10px;border-radius:14px;cursor:pointer;outline:none;user-select:none}\n.menuItem[data-highlighted]{background:var(--surface-muted)}\n.menuName{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.menuNote{color:var(--text-muted);font-size:12px;line-height:16px;white-space:nowrap}\n.menuCheck{display:grid;width:14px;height:14px;flex:none;place-items:center;color:var(--accent)}\n.menuCheck svg{width:14px;height:14px}\n.count{color:var(--text-muted);font-size:12px;line-height:16px;font-variant-numeric:tabular-nums;white-space:nowrap;transition:color var(--duration-fast) var(--ease-standard)}\n.count[data-near]{color:var(--warning)}\n.instructions{box-sizing:border-box;display:block;width:100%;height:102px;margin:0;padding:10px 14px;border:1px solid var(--border);border-radius:14px;background:var(--background);color:var(--foreground);font:inherit;font-size:13px;line-height:20px;resize:none;scrollbar-width:thin;transition:border-color var(--duration-fast) var(--ease-standard)}\n.instructions::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.instructions:hover{border-color:var(--border-strong)}\n.list{margin:0;padding:0;list-style:none}\n.list>li+li{border-top:1px solid var(--border-subtle)}\n.list>.row{padding:0}\n.fileItem{overflow:hidden}\n.row{box-sizing:border-box;display:flex;min-height:52px;align-items:center;gap:12px}\n.row[data-off] .rowMark{opacity:.45;filter:grayscale(1)}\n.row[data-off] .rowName{color:var(--text-secondary)}\n.rowLabel{display:flex;min-width:0;flex:1;align-items:center;gap:12px;align-self:stretch;cursor:pointer}\n.rowMark{display:grid;flex:none;width:16px;height:16px;place-items:center;color:var(--text-secondary);transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard)}\n.rowMark svg{width:16px;height:16px}\n.rowText{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}\n.rowName{color:var(--foreground);font-size:13px;font-weight:500;line-height:18px}\n.fileError{color:var(--danger)}\n.empty{display:flex;min-height:52px;align-items:center;margin:0;color:var(--text-muted);font-size:12px;line-height:16px}\n.iconButton{display:grid;flex:none;width:28px;height:28px;place-items:center;padding:0;border:0;border-radius:10px;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.iconButton svg{width:14px;height:14px}\n@media (hover:hover) and (pointer:fine){.iconButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.iconButton:active{transform:scale(.94)}\n.progress{position:relative;display:inline-block;width:72px;height:4px;flex:none;overflow:hidden;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 10%,transparent)}\n.progressFill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left center;transition:transform .16s var(--ease-standard)}\n.percent{display:inline-block;min-width:4ch}\n.foot{display:flex;min-height:60px;box-sizing:border-box;align-items:center;justify-content:space-between;gap:12px;padding:12px var(--pad);border-top:1px solid var(--border-subtle)}\n.status{position:relative;display:flex;min-width:0;flex:1;align-items:center;color:var(--text-secondary);font-size:13px}\n.status[data-tone=success] svg{color:var(--success)}\n.status[data-tone=warning] svg{color:var(--warning)}\n.status[data-tone=danger] svg{color:var(--danger)}\n.status[data-tone=muted] svg{color:var(--text-muted)}\n.statusInner{display:inline-flex;min-width:0;align-items:center;gap:6px}\n.statusInner svg{width:14px;height:14px;flex:none}\n.test{display:flex;min-height:0;flex:1;flex-direction:column;gap:12px}\n.testMeta{display:flex;min-width:0;align-items:center;gap:6px;overflow:hidden;color:var(--text-muted);font-size:12px;line-height:16px;white-space:nowrap}\n.testModel{display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary)}\n.testModel svg{width:14px;height:14px;flex:none}\n.thread{min-height:0;flex:1;margin-inline:-8px;padding-inline:8px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}\n.testEmpty{display:flex;min-height:100%;box-sizing:border-box;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:16px 0;text-align:center}\n.testEmptyTitle{margin:0;color:var(--foreground);font-size:13px;font-weight:500;line-height:20px}\n.testEmptyText{margin:0;color:var(--text-muted);font-size:12px;line-height:16px;text-wrap:balance}\n.suggestions{display:flex;width:100%;max-width:380px;flex-direction:column;gap:8px;margin-top:16px}\n.suggestion{box-sizing:border-box;width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--foreground);font:inherit;font-size:13px;line-height:20px;text-align:left;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.suggestion:hover{background:var(--surface-muted)}\n.suggestion:active{transform:scale(.99)}\n.turns{display:flex;flex-direction:column;gap:16px;margin:0;padding:4px 0 8px;list-style:none}\n.userTurn{display:flex;justify-content:flex-end}\n.bubble{max-width:80%;padding:8px 12px;border-radius:14px;background:var(--surface-muted);color:var(--foreground);overflow-wrap:anywhere}\n.agentTurn{display:flex;flex-direction:column;gap:8px}\n.agentHead{display:flex;min-height:20px;align-items:center;gap:8px}\n.agentName{min-width:0;overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.agentMeta{position:relative;display:inline-grid;justify-items:end;margin-inline-start:auto;color:var(--text-muted);font-size:12px;line-height:16px;white-space:nowrap}\n.calls{display:flex;flex-wrap:wrap;gap:6px;margin:0;padding:0 0 0 28px;list-style:none}\n.call{box-sizing:border-box;display:inline-flex;max-width:100%;height:28px;align-items:center;gap:6px;padding:0 10px;border:1px solid var(--border-subtle);border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);font-size:12px;line-height:16px;white-space:nowrap}\n.call[data-done] .callResult{opacity:1}\n.callMark{display:grid;flex:none;width:14px;height:14px;place-items:center;color:var(--text-secondary)}\n.callMark svg{width:14px;height:14px}\n.callLabel{min-width:0;overflow:hidden;text-overflow:ellipsis}\n.callResult{overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;opacity:0;transition:opacity .16s var(--ease-standard)}\n.callResult:before{content:\"·\";margin-inline-end:6px}\n.reply{margin:0;padding-inline-start:28px;color:var(--foreground);text-wrap:pretty}\n.replyError{margin:0;padding-inline-start:28px;color:var(--text-secondary)}\n.composer{position:relative;display:flex;flex:none}\n.composerInput{box-sizing:border-box;width:100%;height:44px;padding:0 48px 0 16px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--background);color:var(--foreground);font:inherit;font-size:13px;transition:border-color var(--duration-fast) var(--ease-standard)}\n.composerInput::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.composerInput:hover{border-color:var(--border-strong)}\n.send{position:absolute;top:6px;right:6px;display:grid;width:32px;height:32px;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.send:hover:not(:disabled){background:var(--accent-strong)}\n.send:active:not(:disabled){transform:scale(.94)}\n.send:disabled{background:var(--surface-muted);color:var(--text-muted);cursor:default}\n.send[data-running] .sendIcon svg{width:12px;height:12px;fill:currentColor}\n.sendIcon{display:grid;grid-area:1/1;place-items:center}\n.sendIcon svg{width:16px;height:16px}\n@container (min-width: 560px){.toolGrid{display:grid;grid-template-columns:1fr 1fr;column-gap:24px}\n.toolGrid>li:nth-child(2){border-top:0}", {"root":"root","card":"card","srOnly":"srOnly","truncate":"truncate","nums":"nums","claude":"claude","head":"head","modeSwitch":"modeSwitch","configure":"configure","foot":"foot","testView":"testView","avatar":"avatar","identity":"identity","nameField":"nameField","nameInput":"nameInput","nameSizer":"nameSizer","callResult":"callResult","chevron":"chevron","iconButton":"iconButton","progressFill":"progressFill","rowMark":"rowMark","send":"send","suggestion":"suggestion","identityMeta":"identityMeta","versionSlot":"versionSlot","body":"body","section":"section","sectionHead":"sectionHead","sectionTitle":"sectionTitle","meta":"meta","metaText":"metaText","metaError":"metaError","addFile":"addFile","testHead":"testHead","modelRow":"modelRow","modelTrigger":"modelTrigger","modelMark":"modelMark","modelValue":"modelValue","menu":"menu","menuItem":"menuItem","menuName":"menuName","menuNote":"menuNote","menuCheck":"menuCheck","count":"count","instructions":"instructions","list":"list","row":"row","fileItem":"fileItem","rowName":"rowName","rowLabel":"rowLabel","rowText":"rowText","fileError":"fileError","empty":"empty","progress":"progress","percent":"percent","status":"status","statusInner":"statusInner","test":"test","testMeta":"testMeta","testModel":"testModel","thread":"thread","testEmpty":"testEmpty","testEmptyTitle":"testEmptyTitle","testEmptyText":"testEmptyText","suggestions":"suggestions","turns":"turns","userTurn":"userTurn","bubble":"bubble","agentTurn":"agentTurn","agentHead":"agentHead","agentName":"agentName","agentMeta":"agentMeta","calls":"calls","call":"call","callMark":"callMark","callLabel":"callLabel","reply":"reply","replyError":"replyError","composer":"composer","composerInput":"composerInput","sendIcon":"sendIcon","toolGrid":"toolGrid"});
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
A.reg(45263, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "circle-dot",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(68758, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, {
    AgentBuilder: () => Y,
    default: () => D,
    defaultModels: () => I,
    defaultTools: () => R,
    sampleAgentConfig: () => P,
    simulateReply: () => C
  });
  var n = t(95155), s = t(12115), i = t(57793), r = t(18310), l = t(61792), o = t(80642), d = t(25354), c = t(45263), u = t(35484), m = t(64577), p = t(12363), h = t(2125), g = t(36483), f = t(41189), b = t(9005), _ = t(51288), x = t(66558), y = t(50680), j = t(92298), v = t(40852), N = t(38158), w = t(52898);
  let k = [
    "A customer says they were charged twice in October",
    "CSV export is broken for team workspaces",
    "Can we book a call about the Enterprise plan?"
  ];
  function C(e2, a2) {
    let t2 = e2.toLowerCase();
    if (/charge|refund|invoice|billed|payment/.test(t2))
      return (function(e3) {
        let a3;
        if (!e3.tools.includes("stripe"))
          return {
            text: "I can't check charges because Stripe is turned off for this agent. Turn it on in Configure and I'll look up the account before answering."
          };
        let t3 = [
          {
            tool: "stripe",
            label: "Searched customers",
            result: "2 charges on Oct 14"
          }
        ], n3 = (a3 = /refund/i, e3.files.find((e4) => "ready" === e4.status && a3.test(e4.name)));
        n3 && t3.push({
          tool: "knowledge",
          label: `Read ${n3.name}`,
          result: "Section 2.1"
        });
        let s2 = e3.tools.includes("gmail");
        s2 && t3.push({
          tool: "gmail",
          label: "Drafted reply",
          result: "maya@northwind.studio"
        });
        let i2 = n3 ? " The refund policy allows a full refund for duplicates within 30 days." : "";
        return {
          calls: t3,
          text: `Maya Chen at Northwind was charged $49.00 twice on Oct 14. The second charge is a duplicate from a retried payment.${i2}${s2 ? " I drafted a reply to Maya and can refund $49.00 once you approve." : " Want me to refund the duplicate $49.00?"}`
        };
      })(a2);
    if (/bug|broken|error|fail|export|crash/.test(t2))
      return (function(e3) {
        let a3 = [];
        if (e3.tools.includes("linear") && a3.push({
          tool: "linear",
          label: "Created issue",
          result: "ENG-2481"
        }), e3.tools.includes("slack") && a3.push({
          tool: "slack",
          label: "Posted message",
          result: "#support-escalations"
        }), !a3.length)
          return {
            text: "This looks like a product bug, but Linear and Slack are turned off, so I can't file or escalate it. Turn one on in Configure and I'll take it from there."
          };
        let t3 = e3.tools.includes("linear") ? `I filed ENG-2481, "CSV export fails for team workspaces", with the customer's steps` : "Linear is off, so I couldn't file an issue", n3 = e3.tools.includes("slack") ? " and flagged it in #support-escalations." : ".";
        return {
          calls: a3,
          text: `${t3}${n3} I told the customer the team is on it, without promising a date. I'll follow up when the issue moves to In progress.`
        };
      })(a2);
    if (/call|meeting|demo|book|schedule|enterprise/.test(t2))
      return (function(e3) {
        if (!e3.tools.includes("calendar"))
          return {
            calls: e3.tools.includes("notion") ? [
              {
                tool: "notion",
                label: "Searched help center",
                result: "Enterprise plan"
              }
            ] : [],
            text: "Google Calendar is turned off, so I can't book time directly. Turn it on in Configure, or I can share the sales team's booking link from the Enterprise plan page."
          };
        let a3 = [
          {
            tool: "calendar",
            label: "Booked call",
            result: "Thu, Oct 29, 10:00"
          }
        ];
        return e3.tools.includes("gmail") && a3.push({
          tool: "gmail",
          label: "Sent invite",
          result: "ryan@lumen.so"
        }), {
          calls: a3,
          text: "I booked a 30 minute call with Ryan Sullivan, our account executive, for Thursday, Oct 29 at 10:00 CET. The invite includes the Enterprise plan overview so they can review it first."
        };
      })(a2);
    let n2 = a2.tools.includes("notion") ? [
      {
        tool: "notion",
        label: "Searched help center",
        result: "3 articles"
      }
    ] : [];
    return {
      calls: n2,
      text: n2.length ? 'I found three help center articles that cover this. The closest match is "Changing your plan mid cycle", which explains prorated credits. Want me to draft a reply that links it?' : "I can help with billing questions, refunds and plan changes. Turn on Notion in Configure so I can search the help center for an exact answer."
    };
  }
  var T = t(904), $ = t.n(T);
  let M = { duration: 0.14, ease: [0.22, 1, 0.36, 1] }, S = { opacity: 0, y: 2 }, E = { opacity: 0, transition: { duration: 0.1 } };
  function A(e2, a2) {
    return new Promise((t2, n2) => {
      if (a2.aborted) return n2(a2.reason);
      let s2 = window.setTimeout(t2, e2);
      a2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(s2), n2(a2.reason);
        },
        { once: true }
      );
    });
  }
  function L({
    config: e2,
    model: a2,
    tools: t2,
    active: i2,
    reduced: r2,
    avatar: l2,
    onSend: c2,
    announce: u2
  }) {
    let [m2, p2] = (0, s.useState)([]), [h2, f2] = (0, s.useState)(""), [b2, x2] = (0, s.useState)(false), y2 = (0, s.useRef)(null), T2 = (0, s.useRef)(1), z2 = (0, s.useRef)(null), I2 = (0, s.useRef)(null), R2 = (0, s.useRef)(e2);
    (0, s.useLayoutEffect)(() => {
      R2.current = e2;
    }, [e2]);
    let B2 = (0, s.useCallback)((e3) => {
      p2((a3) => {
        let t3 = a3[a3.length - 1];
        return t3 && "agent" === t3.role ? [...a3.slice(0, -1), e3(t3)] : a3;
      });
    }, []), P2 = (0, s.useCallback)(() => {
      y2.current && (y2.current.abort(), y2.current = null, x2(false), B2(
        (e3) => "done" === e3.phase ? e3 : { ...e3, phase: "stopped", meta: "Stopped" }
      ));
    }, [B2]);
    (0, s.useEffect)(() => {
      i2 || P2();
    }, [i2, P2]), (0, s.useEffect)(() => () => y2.current?.abort(), []);
    let F2 = (0, s.useCallback)(
      async (e3) => {
        let t3 = e3.trim();
        if (!t3) return;
        y2.current?.abort();
        let n2 = new AbortController();
        y2.current = n2;
        let { signal: s2 } = n2, i3 = performance.now();
        f2(""), x2(true), p2((e4) => [
          ...e4,
          { id: T2.current++, role: "user", text: t3 },
          {
            id: T2.current++,
            role: "agent",
            phase: "thinking",
            calls: [],
            chunks: []
          }
        ]);
        try {
          let e4 = R2.current, [n3] = await Promise.all([
            c2 ? c2(t3, e4, s2) : Promise.resolve(C(t3, e4)),
            A(r2 ? 200 : 700, s2)
          ]);
          for (let e5 of n3.calls ?? [])
            B2((a3) => ({
              ...a3,
              phase: "tools",
              calls: [...a3.calls, { ...e5, done: false }]
            })), await A(r2 ? 120 : 460, s2), B2((e6) => ({
              ...e6,
              calls: e6.calls.map(
                (a3, t4) => t4 === e6.calls.length - 1 ? { ...a3, done: true } : a3
              )
            })), await A(80, s2);
          let l3 = (function(e5) {
            let a3 = e5.split(/(?<=\s)/), t4 = [], n4 = 0, s3 = 4;
            for (; n4 < a3.length; )
              t4.push(a3.slice(n4, n4 + s3).join("")), n4 += s3, s3 = 3 + (7 * s3 + n4) % 4;
            return t4;
          })(n3.text);
          if (r2) B2((e5) => ({ ...e5, phase: "streaming", chunks: [n3.text] }));
          else
            for (let e5 of l3)
              B2((a3) => ({
                ...a3,
                phase: "streaming",
                chunks: [...a3.chunks, e5]
              })), await A(34, s2);
          let o2 = ((performance.now() - i3) / 1e3).toFixed(1);
          B2((e5) => ({
            ...e5,
            phase: "done",
            meta: `${a2?.name ?? "Model"} \xB7 ${o2}s`
          }));
          let d2 = n3.calls?.length ?? 0;
          u2(
            c2 ? `Reply ready, ${d2} tool ${1 === d2 ? "call" : "calls"}.` : `Simulated reply, ${d2} tool ${1 === d2 ? "call" : "calls"}. Nothing was sent.`
          );
        } catch (e4) {
          if (s2.aborted) return;
          B2((e5) => ({ ...e5, phase: "error", meta: "No reply" })), u2(
            e4 instanceof Error && e4.message ? e4.message : "The test reply failed."
          );
        } finally {
          y2.current === n2 && (y2.current = null, x2(false));
        }
      },
      [u2, a2?.name, c2, B2, r2]
    ), O2 = (0, s.useRef)(true);
    (0, s.useLayoutEffect)(() => {
      let e3 = z2.current;
      e3 && O2.current && (e3.scrollTop = e3.scrollHeight);
    }, [m2]);
    let V2 = e2.tools.length, H2 = e2.files.filter((e3) => "ready" === e3.status).length;
    return (0, n.jsxs)("div", {
      className: $().test,
      children: [
        (0, n.jsxs)("div", {
          className: $().testHead,
          children: [
            (0, n.jsxs)("span", {
              className: $().testMeta,
              children: [
                (0, n.jsxs)("span", {
                  className: $().testModel,
                  children: [a2?.mark, a2?.name ?? "No model"]
                }),
                (0, n.jsx)("span", { "aria-hidden": "true", children: "\xB7" }),
                (0, n.jsxs)("span", {
                  className: $().nums,
                  children: [V2, " ", 1 === V2 ? "tool" : "tools"]
                }),
                (0, n.jsx)("span", { "aria-hidden": "true", children: "\xB7" }),
                (0, n.jsxs)("span", {
                  className: $().nums,
                  children: [H2, " ", 1 === H2 ? "file" : "files"]
                })
              ]
            }),
            (0, n.jsxs)(_.$, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: () => {
                y2.current?.abort(), y2.current = null, x2(false), p2([]), u2("Conversation cleared."), I2.current?.focus();
              },
              disabled: !m2.length,
              "aria-label": "Clear conversation",
              children: [(0, n.jsx)(j.A, { "aria-hidden": "true" }), "Reset"]
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: z2,
          className: $().thread,
          onScroll: (e3) => {
            let a3 = e3.currentTarget;
            O2.current = a3.scrollHeight - a3.scrollTop - a3.clientHeight < 24;
          },
          children: 0 === m2.length ? (0, n.jsxs)("div", {
            className: $().testEmpty,
            children: [
              (0, n.jsxs)("p", {
                className: $().testEmptyTitle,
                children: ["Try ", e2.name.trim() || "your agent"]
              }),
              (0, n.jsx)("p", {
                className: $().testEmptyText,
                children: "Replies use the model and tools you configured. Nothing is sent."
              }),
              (0, n.jsx)("div", {
                className: $().suggestions,
                children: k.map(
                  (e3) => (0, n.jsx)(
                    "button",
                    {
                      type: "button",
                      className: $().suggestion,
                      onClick: () => void F2(e3),
                      tabIndex: i2 ? 0 : -1,
                      children: e3
                    },
                    e3
                  )
                )
              })
            ]
          }) : (0, n.jsx)("ol", {
            className: $().turns,
            "aria-label": "Test conversation",
            children: m2.map(
              (a3) => "user" === a3.role ? (0, n.jsx)(
                d.PY1.li,
                {
                  className: $().userTurn,
                  initial: !r2 && { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: M,
                  children: (0, n.jsx)("span", {
                    className: $().bubble,
                    children: a3.text
                  })
                },
                a3.id
              ) : (0, n.jsxs)(
                d.PY1.li,
                {
                  className: $().agentTurn,
                  initial: !r2 && { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: M,
                  "aria-busy": "thinking" === a3.phase || "tools" === a3.phase || "streaming" === a3.phase,
                  children: [
                    (0, n.jsxs)("div", {
                      className: $().agentHead,
                      children: [
                        l2,
                        (0, n.jsx)("span", {
                          className: $().agentName,
                          children: e2.name.trim() || "Agent"
                        }),
                        (0, n.jsx)("span", {
                          className: $().agentMeta,
                          children: (0, n.jsx)(o.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, n.jsx)(
                              d.PY1.span,
                              {
                                initial: !r2 && S,
                                animate: { opacity: 1, y: 0 },
                                exit: E,
                                transition: {
                                  duration: 0.16,
                                  ease: [0.22, 1, 0.36, 1]
                                },
                                className: "error" === a3.phase ? $().metaError : void 0,
                                children: a3.meta ?? (0, n.jsx)(w.n, {
                                  children: "thinking" === a3.phase ? "Thinking" : "tools" === a3.phase ? "Using tools" : "Writing"
                                })
                              },
                              a3.meta ?? a3.phase
                            )
                          })
                        })
                      ]
                    }),
                    a3.calls.length > 0 && (0, n.jsx)("ul", {
                      className: $().calls,
                      "aria-label": "Tool calls",
                      children: a3.calls.map((e3, a4) => {
                        let s2;
                        return (0, n.jsxs)(
                          d.PY1.li,
                          {
                            className: $().call,
                            "data-done": e3.done || void 0,
                            initial: !r2 && { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: M,
                            children: [
                              (0, n.jsx)("span", {
                                className: $().callMark,
                                children: "knowledge" === (s2 = e3.tool) ? (0, n.jsx)(g.A, {
                                  "aria-hidden": "true"
                                }) : t2.find((e4) => e4.id === s2)?.mark
                              }),
                              (0, n.jsx)("span", {
                                className: $().callLabel,
                                children: (0, n.jsx)(w.n, {
                                  active: !e3.done,
                                  duration: 1.2,
                                  children: e3.label
                                })
                              }),
                              e3.result ? (0, n.jsx)("span", {
                                className: $().callResult,
                                "aria-hidden": !e3.done,
                                children: e3.result
                              }) : null
                            ]
                          },
                          a4
                        );
                      })
                    }),
                    a3.chunks.length > 0 && (0, n.jsx)("p", {
                      className: $().reply,
                      children: a3.chunks.map(
                        (e3, a4) => (0, n.jsx)(
                          d.PY1.span,
                          {
                            initial: !r2 && { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: M,
                            children: e3
                          },
                          a4
                        )
                      )
                    }),
                    "error" === a3.phase && (0, n.jsx)("p", {
                      className: $().replyError,
                      children: "Couldn't get a reply. Check the model settings and try again."
                    })
                  ]
                },
                a3.id
              )
            )
          })
        }),
        (0, n.jsxs)("form", {
          className: $().composer,
          onSubmit: (e3) => {
            e3.preventDefault(), b2 ? P2() : F2(h2);
          },
          children: [
            (0, n.jsx)("input", {
              ref: I2,
              className: $().composerInput,
              value: h2,
              onChange: (e3) => f2(e3.target.value),
              placeholder: `Message ${e2.name.trim() || "your agent"}`,
              "aria-label": "Test message",
              maxLength: 500
            }),
            (0, n.jsx)("button", {
              type: "submit",
              className: $().send,
              "data-running": b2 || void 0,
              disabled: !b2 && !h2.trim(),
              "aria-label": b2 ? "Stop reply" : "Send message",
              tabIndex: i2 ? 0 : -1,
              children: (0, n.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  d.PY1.span,
                  {
                    className: $().sendIcon,
                    initial: !r2 && { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: {
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 0.1 }
                    },
                    transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
                    children: b2 ? (0, n.jsx)(v.A, { "aria-hidden": "true" }) : (0, n.jsx)(N.A, { "aria-hidden": "true" })
                  },
                  b2 ? "stop" : "send"
                )
              })
            })
          ]
        })
      ]
    });
  }
  function z({ title: e2 = "Claude", ...a2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let I = [
    {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      note: "Balanced",
      mark: (0, n.jsx)(z, { className: $().claude })
    },
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      note: "Most capable",
      mark: (0, n.jsx)(z, { className: $().claude })
    },
    {
      id: "claude-haiku-5-5",
      name: "Claude Haiku 5.5",
      note: "Fastest",
      mark: (0, n.jsx)(z, { className: $().claude })
    },
    {
      id: "gpt-6-1-sol",
      name: "GPT-6.1 Sol",
      note: "OpenAI",
      mark: (0, n.jsx)(function({ title: e2 = "OpenAI", ...a2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, n.jsx)("path", {
            d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          })
        });
      }, {})
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      note: "Google",
      mark: (0, n.jsx)(function({ title: e2 = "Gemini", ...a2 }) {
        let t2 = (0, s.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, n.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: [
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: "#3186FF"
            }),
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-0-${t2})`
            }),
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-1-${t2})`
            }),
            (0, n.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-2-${t2})`
            }),
            (0, n.jsxs)("defs", {
              children: [
                (0, n.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-0-${t2}`,
                  x1: "7",
                  x2: "11",
                  y1: "15.5",
                  y2: "12",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#08B962" }),
                    (0, n.jsx)("stop", {
                      offset: "1",
                      stopColor: "#08B962",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, n.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-1-${t2}`,
                  x1: "8",
                  x2: "11.5",
                  y1: "5.5",
                  y2: "11",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#F94543" }),
                    (0, n.jsx)("stop", {
                      offset: "1",
                      stopColor: "#F94543",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, n.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-2-${t2}`,
                  x1: "3.5",
                  x2: "17.5",
                  y1: "13.5",
                  y2: "12",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#FABC12" }),
                    (0, n.jsx)("stop", {
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
      }, {})
    }
  ], R = [
    {
      id: "gmail",
      name: "Gmail",
      description: "Read threads and draft replies",
      mark: (0, n.jsx)(function({ title: e2 = "Gmail", ...a2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, n.jsx)("path", {
            fill: "#EA4335",
            d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          })
        });
      }, {})
    },
    {
      id: "slack",
      name: "Slack",
      description: "Post in #support-escalations",
      mark: (0, n.jsx)(function({ title: e2 = "Slack", ...a2 }) {
        return (0, n.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: [
            (0, n.jsx)("path", {
              fill: "#E01E5A",
              d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
            }),
            (0, n.jsx)("path", {
              fill: "#36C5F0",
              d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
            }),
            (0, n.jsx)("path", {
              fill: "#2EB67D",
              d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
            }),
            (0, n.jsx)("path", {
              fill: "#ECB22E",
              d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
            })
          ]
        });
      }, {})
    },
    {
      id: "linear",
      name: "Linear",
      description: "Create and update issues",
      mark: (0, n.jsx)(function({ title: e2 = "Linear", ...a2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, n.jsx)("path", {
            fill: "#5E6AD2",
            d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
          })
        });
      }, {})
    },
    {
      id: "notion",
      name: "Notion",
      description: "Search the help center",
      mark: (0, n.jsx)(function({ title: e2 = "Notion", ...a2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, n.jsx)("path", {
            d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
          })
        });
      }, {})
    },
    {
      id: "calendar",
      name: "Google Calendar",
      description: "Book calls with the sales team",
      mark: (0, n.jsx)(function({ title: e2 = "Google Calendar", ...a2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, n.jsx)("path", {
            fill: "#4285F4",
            d: "M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"
          })
        });
      }, {})
    },
    {
      id: "stripe",
      name: "Stripe",
      description: "Look up customers and charges",
      mark: (0, n.jsx)(function({ title: e2 = "Stripe", ...a2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...a2,
          children: (0, n.jsx)("path", {
            fill: "#635BFF",
            d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
          })
        });
      }, {})
    }
  ], B = [
    {
      id: "refund-policy",
      name: "Refund policy 2026.pdf",
      size: 253952,
      status: "ready"
    },
    {
      id: "pricing",
      name: "Plans and pricing, October 2026.md",
      size: 36864,
      status: "ready"
    },
    {
      id: "macros",
      name: "Support macros.csv",
      size: 14680064e-1,
      status: "uploading",
      progress: 0
    }
  ], P = {
    name: "Billing assistant",
    tint: 1,
    modelId: "claude-sonnet-5-5",
    instructions: "You are the billing assistant for Lumen's support team. Answer questions about invoices, refunds and plan changes in a friendly, concise tone. Always look up the customer in Stripe before quoting amounts. Refunds over $200 need a human: draft the reply and flag it in #support-escalations. Never promise dates for product fixes; file a Linear issue instead.",
    tools: ["gmail", "slack", "linear", "notion", "stripe"],
    files: B
  };
  function F(e2) {
    return JSON.stringify([
      e2.name.trim(),
      e2.tint,
      e2.modelId,
      e2.instructions.trim(),
      [...e2.tools].sort(),
      e2.files.filter((e3) => "ready" === e3.status).map((e3) => e3.id)
    ]);
  }
  function O(e2, a2) {
    return new Promise((t2, n2) => {
      if (a2.aborted) return n2(a2.reason);
      let s2 = window.setTimeout(t2, e2);
      a2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(s2), n2(a2.reason);
        },
        { once: true }
      );
    });
  }
  async function V(e2, a2, t2) {
    if (e2 > 20971520) throw await O(500, t2), Error("Over the 20 MB limit");
    for (let e3 = 1; e3 <= 14; e3 += 1)
      await O(70 + 37 * e3 % 90, t2), a2(Math.min(1, e3 / 14 + 13 * e3 % 5 / 100));
    a2(1);
  }
  let H = {
    initial: { opacity: 0, y: 2 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { opacity: 0, transition: { duration: 0.1 } }
  };
  function U({ name: e2, tint: a2 }) {
    return (0, n.jsx)("span", {
      className: $().avatar,
      "data-tint": a2,
      "aria-hidden": "true",
      children: (e2.trim()[0] ?? "A").toUpperCase()
    });
  }
  function Y({
    config: e2,
    defaultConfig: a2,
    onConfigChange: t2,
    publishedConfig: j2,
    models: v2 = I,
    tools: N2 = R,
    onPublish: w2,
    onUpload: k2,
    onSend: C2,
    version: T2 = 12,
    workspace: M2 = "Lumen support",
    maxInstructions: S2 = 2e3,
    accept: E2 = ".pdf,.md,.txt,.csv,.docx,.html",
    mode: A2,
    defaultMode: z2 = "configure",
    onModeChange: D2,
    className: Z
  }) {
    let W = !!(0, r.I)(), q = (0, s.useId)(), K = (0, s.useRef)(null), X = (0, l.W)(K, { margin: "0px 0px -10% 0px" }), J = !e2 && !a2 && !k2, [Q, ee] = (0, s.useState)(() => a2 ?? P), ea = e2 ?? Q, et = (0, s.useRef)(ea);
    (0, s.useLayoutEffect)(() => {
      et.current = ea;
    }, [ea]);
    let en = (0, s.useCallback)(
      (a3) => {
        let n2 = "function" == typeof a3 ? a3(et.current) : a3;
        et.current = n2, e2 || ee(n2), t2?.(n2);
      },
      [e2, t2]
    ), [es, ei] = (0, s.useState)(() => ({
      source: j2,
      sig: F(
        j2 ?? a2 ?? { ...P, files: B.filter((e3) => "ready" === e3.status) }
      )
    }));
    j2 && j2 !== es.source && ei({ source: j2, sig: F(j2) });
    let er = es.sig, [el, eo] = (0, s.useState)({ prop: T2, value: T2 });
    T2 !== el.prop && eo({ prop: T2, value: T2 });
    let ed = el.value, [ec, eu] = (0, s.useState)("idle"), [em, ep] = (0, s.useState)(null), [eh, eg] = (0, s.useState)(A2 ?? z2), ef = A2 ?? eh, eb = (0, s.useRef)(""), [e_, ex] = (0, s.useState)(""), ey = (0, s.useCallback)((e3) => ex(e3), []), ej = F(ea) !== er, ev = ea.name.trim() ? ea.instructions.trim() ? ea.modelId ? null : "Choose a model to publish" : "Add instructions to publish" : "Add a name to publish", eN = v2.find((e3) => e3.id === ea.modelId), ew = (0, s.useRef)(/* @__PURE__ */ new Map()), ek = (0, s.useRef)(/* @__PURE__ */ new Map());
    (0, s.useEffect)(() => {
      let e3 = ew.current;
      return () => e3.forEach((e4) => e4.abort());
    }, []);
    let eC = (0, s.useCallback)(
      (e3, a3) => {
        en((t3) => ({
          ...t3,
          files: t3.files.map((t4) => t4.id === e3 ? { ...t4, ...a3 } : t4)
        }));
      },
      [en]
    ), eT = (0, s.useCallback)(
      async (e3, a3, t3) => {
        ew.current.get(e3)?.abort();
        let n2 = new AbortController();
        ew.current.set(e3, n2), eC(e3, { status: "uploading", progress: 0, error: void 0 });
        let s2 = 0, i2 = (a4) => {
          let t4 = Math.max(s2, Math.min(1, a4));
          t4 - s2 < 0.01 && t4 < 1 || (s2 = t4, eC(e3, { progress: t4 }));
        };
        try {
          if (k2 && t3 ? await k2(t3, i2, n2.signal) : await V(a3, i2, n2.signal), n2.signal.aborted)
            return;
          eC(e3, { status: "ready", progress: 1 });
          let s3 = et.current.files.find((a4) => a4.id === e3)?.name ?? "File";
          ey(
            k2 ? `${s3} uploaded.` : `${s3} added. Simulated, nothing was uploaded.`
          );
        } catch (t4) {
          if (n2.signal.aborted) return;
          let a4 = t4 instanceof Error && t4.message ? t4.message : "Upload failed";
          eC(e3, { status: "error", error: a4 }), ey(`Upload failed. ${a4}.`);
        } finally {
          ew.current.get(e3) === n2 && ew.current.delete(e3);
        }
      },
      [ey, k2, eC]
    ), e$ = (0, s.useRef)(false);
    (0, s.useEffect)(() => {
      if (!J || !X || e$.current) return;
      let e3 = et.current.files.find(
        (e4) => "macros" === e4.id && "uploading" === e4.status
      );
      if (!e3) return;
      e$.current = true;
      let a3 = window.setTimeout(() => void eT(e3.id, e3.size), 500);
      return () => window.clearTimeout(a3);
    }, [J, X, eT]);
    let eM = (0, s.useRef)(null), eS = (0, s.useRef)(null);
    (0, s.useEffect)(() => () => eS.current?.abort(), []);
    let eE = async () => {
      if (!ej || ev || "publishing" === ec) return;
      eS.current?.abort();
      let e3 = new AbortController();
      eS.current = e3;
      let a3 = et.current;
      eu("publishing");
      try {
        if (w2 ? await w2(a3, e3.signal) : await O(900, e3.signal), e3.signal.aborted)
          return;
        ei((e4) => ({ ...e4, sig: F(a3) })), eo((e4) => ({ ...e4, value: e4.value + 1 })), eu("idle"), ey(
          w2 ? `Published version ${ed + 1}.` : `Published version ${ed + 1}. Simulated, nothing was deployed.`
        );
      } catch (t3) {
        if (e3.signal.aborted) return;
        eu("error"), ep(F(a3)), ey(
          t3 instanceof Error && t3.message ? `Couldn't publish. ${t3.message}` : "Couldn't publish. Try again."
        );
      }
    }, eA = "error" === ec && em === F(ea), eL = (0, s.useMemo)(
      () => "publishing" === ec ? {
        key: "publishing",
        icon: (0, n.jsx)(c.A, { "aria-hidden": "true" }),
        label: "Publishing",
        tone: "muted"
      } : eA ? {
        key: "error",
        icon: (0, n.jsx)(u.A, { "aria-hidden": "true" }),
        label: "Couldn't publish. Try again",
        tone: "danger"
      } : ej && ev ? {
        key: `missing-${ev}`,
        icon: (0, n.jsx)(u.A, { "aria-hidden": "true" }),
        label: ev,
        tone: "warning"
      } : ej ? {
        key: "dirty",
        icon: (0, n.jsx)(c.A, { "aria-hidden": "true" }),
        label: "Unsaved changes",
        tone: "warning"
      } : {
        key: `saved-${ed}`,
        icon: (0, n.jsx)(m.A, { "aria-hidden": "true" }),
        label: "All changes published",
        tone: "success"
      },
      [ej, eA, ev, ec, ed]
    ), ez = ea.instructions.length, eI = ez > 0.9 * S2, eR = ea.tools.filter((e3) => N2.some((a3) => a3.id === e3)).length, eB = (0, n.jsx)(U, { name: ea.name, tint: ea.tint });
    return (0, n.jsx)("div", {
      className: $().root,
      children: (0, n.jsxs)("section", {
        ref: K,
        className: [$().card, Z].filter(Boolean).join(" "),
        "aria-labelledby": `${q}-name-label`,
        children: [
          (0, n.jsxs)("header", {
            className: $().head,
            children: [
              (0, n.jsxs)("div", {
                className: $().identity,
                children: [
                  (0, n.jsx)("label", {
                    id: `${q}-name-label`,
                    htmlFor: `${q}-title`,
                    className: $().srOnly,
                    children: "Agent name"
                  }),
                  (0, n.jsxs)("span", {
                    className: $().nameField,
                    children: [
                      (0, n.jsx)("span", {
                        className: $().nameSizer,
                        "aria-hidden": "true",
                        children: ea.name || "Untitled agent"
                      }),
                      (0, n.jsx)("input", {
                        id: `${q}-title`,
                        className: $().nameInput,
                        value: ea.name,
                        onChange: (e3) => en((a3) => ({ ...a3, name: e3.target.value })),
                        onFocus: (e3) => {
                          eb.current = e3.currentTarget.value;
                        },
                        onKeyDown: (e3) => {
                          "Enter" === e3.key && e3.currentTarget.blur(), "Escape" === e3.key && (en((e4) => ({ ...e4, name: eb.current })), e3.currentTarget.blur());
                        },
                        placeholder: "Untitled agent",
                        maxLength: 40,
                        spellCheck: false,
                        autoComplete: "off",
                        "data-1p-ignore": "",
                        "data-lpignore": "true",
                        "data-bwignore": "",
                        "data-form-type": "other"
                      })
                    ]
                  }),
                  (0, n.jsxs)("span", {
                    className: $().identityMeta,
                    children: [
                      (0, n.jsx)("span", {
                        className: $().truncate,
                        children: M2
                      }),
                      (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        children: "\xB7"
                      }),
                      (0, n.jsx)("span", {
                        className: $().versionSlot,
                        children: (0, n.jsx)(o.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, n.jsxs)(
                            d.PY1.span,
                            {
                              className: $().nums,
                              ...W ? {} : H,
                              children: ["v", ed]
                            },
                            ed
                          )
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)(x.A, {
                className: $().modeSwitch,
                label: "Agent builder view",
                value: ef,
                onValueChange: (e3) => {
                  A2 || eg(e3), D2?.(e3);
                },
                options: [
                  { value: "configure", label: "Configure" },
                  { value: "test", label: "Test" }
                ]
              })
            ]
          }),
          (0, n.jsxs)("div", {
            className: $().body,
            children: [
              (0, n.jsxs)(d.PY1.div, {
                className: $().configure,
                initial: false,
                animate: { opacity: +("configure" === ef) },
                transition: W ? { duration: 0 } : { duration: "configure" === ef ? 0.16 : 0.1 },
                inert: "configure" !== ef,
                "aria-hidden": "configure" !== ef,
                children: [
                  (0, n.jsxs)("div", {
                    className: $().modelRow,
                    children: [
                      (0, n.jsxs)("div", {
                        className: $().rowText,
                        children: [
                          (0, n.jsx)("span", {
                            className: $().sectionTitle,
                            id: `${q}-model`,
                            children: "Model"
                          }),
                          (0, n.jsx)("span", {
                            className: $().metaText,
                            children: "Answers every conversation"
                          })
                        ]
                      }),
                      (0, n.jsxs)(i.bL, {
                        modal: false,
                        children: [
                          (0, n.jsxs)(i.l9, {
                            className: $().modelTrigger,
                            "aria-labelledby": `${q}-model ${q}-model-value`,
                            children: [
                              (0, n.jsx)("span", {
                                className: $().modelMark,
                                children: eN?.mark
                              }),
                              (0, n.jsx)("span", {
                                className: $().modelValue,
                                id: `${q}-model-value`,
                                children: (0, n.jsx)(o.N, {
                                  mode: "popLayout",
                                  initial: false,
                                  children: (0, n.jsx)(
                                    d.PY1.span,
                                    {
                                      className: $().truncate,
                                      ...W ? {} : H,
                                      children: eN?.name ?? "Choose a model"
                                    },
                                    eN?.id ?? "none"
                                  )
                                })
                              }),
                              (0, n.jsx)(p.A, {
                                className: $().chevron,
                                "aria-hidden": "true"
                              })
                            ]
                          }),
                          (0, n.jsx)(i.ZL, {
                            children: (0, n.jsx)(i.UC, {
                              className: $().menu,
                              align: "end",
                              sideOffset: 6,
                              collisionPadding: 16,
                              children: (0, n.jsx)(i.z6, {
                                value: ea.modelId,
                                onValueChange: (e3) => en((a3) => ({ ...a3, modelId: e3 })),
                                children: v2.map(
                                  (e3) => (0, n.jsxs)(
                                    i.hN,
                                    {
                                      value: e3.id,
                                      className: $().menuItem,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: $().modelMark,
                                          children: e3.mark
                                        }),
                                        (0, n.jsx)("span", {
                                          className: $().menuName,
                                          children: e3.name
                                        }),
                                        e3.note ? (0, n.jsx)("span", {
                                          className: $().menuNote,
                                          children: e3.note
                                        }) : null,
                                        (0, n.jsx)("span", {
                                          className: $().menuCheck,
                                          children: (0, n.jsx)(i.VF, {
                                            children: (0, n.jsx)(m.A, {
                                              "aria-hidden": "true"
                                            })
                                          })
                                        })
                                      ]
                                    },
                                    e3.id
                                  )
                                )
                              })
                            })
                          })
                        ]
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: $().section,
                    children: [
                      (0, n.jsxs)("div", {
                        className: $().sectionHead,
                        children: [
                          (0, n.jsx)("label", {
                            className: $().sectionTitle,
                            htmlFor: `${q}-instructions`,
                            children: "Instructions"
                          }),
                          (0, n.jsxs)("span", {
                            className: $().count,
                            "data-near": eI || void 0,
                            id: `${q}-count`,
                            children: [
                              ez.toLocaleString("en-US"),
                              " / ",
                              S2.toLocaleString("en-US")
                            ]
                          })
                        ]
                      }),
                      (0, n.jsx)("textarea", {
                        id: `${q}-instructions`,
                        className: $().instructions,
                        value: ea.instructions,
                        onChange: (e3) => en((a3) => ({
                          ...a3,
                          instructions: e3.target.value.slice(0, S2)
                        })),
                        maxLength: S2,
                        placeholder: "Describe the agent's job, tone and the rules it must follow.",
                        "aria-describedby": `${q}-count`,
                        rows: 5
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: $().section,
                    children: [
                      (0, n.jsxs)("div", {
                        className: $().sectionHead,
                        children: [
                          (0, n.jsx)("span", {
                            className: $().sectionTitle,
                            id: `${q}-tools`,
                            children: "Tools"
                          }),
                          (0, n.jsxs)("span", {
                            className: `${$().meta} ${$().nums}`,
                            children: [eR, " of ", N2.length, " on"]
                          })
                        ]
                      }),
                      (0, n.jsx)("ul", {
                        className: `${$().list} ${$().toolGrid}`,
                        "aria-labelledby": `${q}-tools`,
                        children: N2.map((e3) => {
                          let a3 = ea.tools.includes(e3.id);
                          return (0, n.jsxs)(
                            "li",
                            {
                              className: $().row,
                              "data-off": !a3 || void 0,
                              children: [
                                (0, n.jsxs)("label", {
                                  className: $().rowLabel,
                                  htmlFor: `${q}-tool-${e3.id}`,
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: $().rowMark,
                                      children: e3.mark
                                    }),
                                    (0, n.jsxs)("span", {
                                      className: $().rowText,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: $().rowName,
                                          children: e3.name
                                        }),
                                        (0, n.jsx)("span", {
                                          className: $().metaText,
                                          children: e3.description
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                (0, n.jsx)(y.d, {
                                  id: `${q}-tool-${e3.id}`,
                                  checked: a3,
                                  onCheckedChange: (a4) => {
                                    var t3;
                                    return t3 = e3.id, void en((e4) => ({
                                      ...e4,
                                      tools: a4 ? [
                                        ...e4.tools.filter((e5) => e5 !== t3),
                                        t3
                                      ] : e4.tools.filter((e5) => e5 !== t3)
                                    }));
                                  },
                                  "aria-label": e3.name
                                })
                              ]
                            },
                            e3.id
                          );
                        })
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: $().section,
                    children: [
                      (0, n.jsxs)("div", {
                        className: $().sectionHead,
                        children: [
                          (0, n.jsx)("span", {
                            className: $().sectionTitle,
                            id: `${q}-files`,
                            children: "Knowledge"
                          }),
                          (0, n.jsxs)(_.$, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            className: $().addFile,
                            onClick: () => eM.current?.click(),
                            children: [
                              (0, n.jsx)(h.A, { "aria-hidden": "true" }),
                              "Add file"
                            ]
                          }),
                          (0, n.jsx)("input", {
                            ref: eM,
                            type: "file",
                            multiple: true,
                            accept: E2,
                            className: $().srOnly,
                            tabIndex: -1,
                            "aria-hidden": "true",
                            onChange: (e3) => {
                              ((e4) => {
                                if (!e4?.length) return;
                                let a3 = Array.from(e4).map((e5) => ({
                                  file: e5,
                                  entry: {
                                    id: `${e5.name}-${e5.size}-${Math.random().toString(36).slice(2, 7)}`,
                                    name: e5.name,
                                    size: e5.size,
                                    status: "uploading",
                                    progress: 0
                                  }
                                }));
                                en((e5) => ({
                                  ...e5,
                                  files: [...e5.files, ...a3.map((e6) => e6.entry)]
                                })), a3.forEach(({ file: e5, entry: a4 }) => {
                                  ek.current.set(a4.id, e5), eT(a4.id, a4.size, e5);
                                });
                              })(e3.target.files), e3.target.value = "";
                            }
                          })
                        ]
                      }),
                      0 === ea.files.length ? (0, n.jsx)("p", {
                        className: $().empty,
                        children: "No files yet. Add policies, docs or CSVs the agent can cite."
                      }) : (0, n.jsx)("ul", {
                        className: $().list,
                        "aria-labelledby": `${q}-files`,
                        children: (0, n.jsx)(o.N, {
                          initial: false,
                          children: ea.files.map(
                            (e3) => (0, n.jsx)(
                              d.PY1.li,
                              {
                                className: $().fileItem,
                                initial: !W && { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: W ? {
                                  opacity: 0,
                                  transition: { duration: 0 }
                                } : { height: 0, opacity: 0 },
                                transition: {
                                  height: {
                                    type: "spring",
                                    visualDuration: 0.24,
                                    bounce: 0
                                  },
                                  opacity: { duration: 0.16 }
                                },
                                children: (0, n.jsxs)("div", {
                                  className: $().row,
                                  "data-status": e3.status,
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: $().rowMark,
                                      children: "error" === e3.status ? (0, n.jsx)(u.A, {
                                        className: $().fileError,
                                        "aria-hidden": "true"
                                      }) : (0, n.jsx)(g.A, {
                                        "aria-hidden": "true"
                                      })
                                    }),
                                    (0, n.jsxs)("span", {
                                      className: $().rowText,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: `${$().rowName} ${$().truncate}`,
                                          children: e3.name
                                        }),
                                        (0, n.jsx)(G, { file: e3 })
                                      ]
                                    }),
                                    "error" === e3.status ? (0, n.jsx)("button", {
                                      type: "button",
                                      className: $().iconButton,
                                      onClick: () => void eT(
                                        e3.id,
                                        e3.size,
                                        ek.current.get(e3.id)
                                      ),
                                      "aria-label": `Retry ${e3.name}`,
                                      children: (0, n.jsx)(f.A, {
                                        "aria-hidden": "true"
                                      })
                                    }) : null,
                                    (0, n.jsx)("button", {
                                      type: "button",
                                      className: $().iconButton,
                                      onClick: () => {
                                        ew.current.get(e3.id)?.abort(), ew.current.delete(e3.id), ek.current.delete(e3.id), en((a3) => ({
                                          ...a3,
                                          files: a3.files.filter(
                                            (a4) => a4.id !== e3.id
                                          )
                                        })), ey(
                                          "uploading" === e3.status ? `Upload of ${e3.name} canceled.` : `${e3.name} removed.`
                                        );
                                      },
                                      "aria-label": "uploading" === e3.status ? `Cancel upload of ${e3.name}` : `Remove ${e3.name}`,
                                      children: (0, n.jsx)(b.A, {
                                        "aria-hidden": "true"
                                      })
                                    })
                                  ]
                                })
                              },
                              e3.id
                            )
                          )
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)(d.PY1.div, {
                className: $().testView,
                initial: false,
                animate: { opacity: +("test" === ef) },
                transition: W ? { duration: 0 } : { duration: "test" === ef ? 0.16 : 0.1 },
                inert: "test" !== ef,
                "aria-hidden": "test" !== ef,
                children: (0, n.jsx)(L, {
                  config: ea,
                  model: eN,
                  tools: N2,
                  active: "test" === ef,
                  reduced: W,
                  avatar: eB,
                  onSend: C2,
                  announce: ey
                })
              })
            ]
          }),
          (0, n.jsxs)("footer", {
            className: $().foot,
            children: [
              (0, n.jsx)("span", {
                className: $().status,
                "data-tone": eL.tone,
                children: (0, n.jsx)(o.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, n.jsxs)(
                    d.PY1.span,
                    {
                      className: $().statusInner,
                      ...W ? {} : H,
                      children: [
                        eL.icon,
                        (0, n.jsx)("span", {
                          className: $().truncate,
                          children: eL.label
                        })
                      ]
                    },
                    eL.key
                  )
                })
              }),
              (0, n.jsx)(_.$, {
                type: "button",
                variant: "primary",
                size: "sm",
                onClick: () => void eE(),
                disabled: !ej || !!ev,
                loading: "publishing" === ec,
                children: "Publish"
              })
            ]
          }),
          (0, n.jsx)("p", {
            className: $().srOnly,
            "aria-live": "polite",
            children: e_
          })
        ]
      })
    });
  }
  function G({ file: e2 }) {
    var a2, t2;
    let s2;
    if ("error" === e2.status)
      return (0, n.jsx)("span", {
        className: `${$().meta} ${$().metaError}`,
        children: e2.error ?? "Upload failed"
      });
    if ("uploading" === e2.status) {
      let a3 = Math.round((e2.progress ?? 0) * 100);
      return (0, n.jsxs)("span", {
        className: $().meta,
        children: [
          (0, n.jsx)("span", {
            className: $().progress,
            role: "progressbar",
            "aria-label": `Uploading ${e2.name}`,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": a3,
            children: (0, n.jsx)("span", {
              className: $().progressFill,
              style: { transform: `scaleX(${(e2.progress ?? 0).toFixed(3)})` }
            })
          }),
          (0, n.jsxs)("span", {
            className: `${$().nums} ${$().percent}`,
            children: [a3, "%"]
          })
        ]
      });
    }
    return (0, n.jsxs)("span", {
      className: $().meta,
      children: [
        (0, n.jsx)("span", {
          className: $().nums,
          children: (a2 = e2.size) < 1048576 ? `${Math.max(1, Math.round(a2 / 1024))} KB` : `${(a2 / 1048576).toFixed(1)} MB`
        }),
        (0, n.jsx)("span", { "aria-hidden": "true", children: "\xB7" }),
        (t2 = e2.name, (s2 = t2.split(".").pop()?.toUpperCase() ?? "").length > 0 && s2.length <= 4 ? s2 : "File")
      ]
    });
  }
  let D = Y;
}

__m(__module,__exports,__require);
});
A.cssFor("agent-builder", [904]);
A.item("agent-builder", {entry:68758, export:"AgentBuilder", kind:"block", tier:"pro", unresolved:[]});
})();