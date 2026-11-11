/* goal-tracker (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(90314, ".root{container-type:inline-size;position:relative;box-sizing:border-box;width:100%;max-width:640px;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-size:14px;line-height:20px}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 16px 16px 20px;border-bottom:1px solid var(--border-subtle)}\n@container (max-width: 380px){.foot,.head{padding-left:16px}\n.headText{display:grid;gap:2px;min-width:0}\n.title{margin:0;font-size:15px;line-height:20px;font-weight:500;letter-spacing:-.005em}\n.meta{display:flex;min-width:0;margin:0;color:var(--text-muted);font-size:13px;line-height:18px;white-space:nowrap}\n.meta .dot{margin-inline:6px}\n.stepper{display:inline-flex;flex:none;align-items:center;gap:2px}\n.quarterLabel{display:inline-flex;justify-content:center;min-width:64px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.iconButton{display:inline-grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:999px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color .12s ease-out,color .12s ease-out,opacity .12s ease-out;-webkit-tap-highlight-color:transparent}\n.iconButton:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.iconButton:active:not(:disabled){background:color-mix(in oklab,var(--surface-muted),var(--foreground) 6%)}\n.iconButton:disabled{opacity:.4;cursor:default}\n.panels{position:relative}\n.panel{width:100%}\n.objectives{display:grid;margin:0;padding:8px;list-style:none}\n.objectives{padding:6px}\n.objective+.objective:before{content:\"\";display:block;height:1px;margin:4px 12px;background:var(--border-subtle)}\n.krRow,.objectiveRow{display:flex;width:100%;align-items:flex-start;gap:8px;margin:0;border:0;border-radius:var(--radius-control);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:background-color .12s ease-out;-webkit-tap-highlight-color:transparent}\n.objectiveRow{padding:12px}\n.krRow:not([data-static]):hover,.objectiveRow:hover{background:var(--surface-muted)}\n.krRow:not([data-static]):active,.objectiveRow:active{background:color-mix(in oklab,var(--surface-muted),var(--foreground) 5%)}\n.objectiveRow{padding:10px}\n.krRow{padding:8px 12px 8px 36px}\n.krRow[data-static]{cursor:default}\n.keyResults .krRow{align-items:center}\n.checkIn,.krRow{padding-left:34px;padding-right:10px}\n.chevron{flex:none;margin-top:2px;color:var(--text-muted);transition:transform .2s cubic-bezier(.22,1,.36,1)}\n.chevron[data-open]{transform:rotate(90deg)}\n@media (prefers-reduced-motion:reduce){.chevron,.confidenceIcon,.meterFill{transition:none}\n.lines{display:grid;flex:1;min-width:0;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:16px;row-gap:4px}\n.krTitle,.objectiveTitle{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.objectiveTitle{font-weight:500}\n.checkInHead .krTitle{font-weight:500}\n.percentCell{position:relative;justify-self:end;display:inline-flex}\n.number,.percent{font-variant-numeric:tabular-nums}\n.percent{justify-self:end;min-width:4ch;text-align:right}\n.projection .number:last-child{color:var(--foreground)}\n.delta{position:absolute;right:100%;margin-right:6px;color:var(--success);font-size:13px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.delta[data-negative]{color:var(--text-muted)}\n.rowMeta{display:flex;min-width:0;align-items:center;gap:6px;color:var(--text-muted);font-size:13px;line-height:20px;white-space:nowrap}\n.dot{flex:none;color:var(--text-muted)}\n.owner{display:inline-flex;min-width:0;align-items:center;gap:6px}\n.owner .ownerAvatar{flex:none;width:18px;height:18px;font-size:8px}\n.owner .ownerName{display:none}\n.ownerName{min-width:0;overflow:hidden;text-overflow:ellipsis}\n.value{display:inline-flex;min-width:0;overflow:hidden;color:var(--text-secondary);font-variant-numeric:tabular-nums}\n.value .swapItem{overflow:hidden;text-overflow:ellipsis}\n.projection .swapItem{display:inline-flex;align-items:center;gap:6px}\n.footText .swapItem{display:inline-flex;align-items:center;gap:6px;overflow:hidden;text-overflow:ellipsis}\n.swapItem{grid-area:1/1;min-width:0;white-space:nowrap}\n.source{display:inline-flex;flex:none;color:var(--text-muted)}\n.source svg{width:13px;height:13px}\n.confidence{display:inline-grid;flex:none;color:var(--text-secondary)}\n.confidence>*{grid-area:1/1}\n.confidence[data-confidence=on-track] .confidenceIcon{color:var(--success)}\n.confidence[data-confidence=at-risk] .confidenceIcon{color:var(--warning)}\n.confidence[data-confidence=off-track] .confidenceIcon{color:var(--danger)}\n.confidenceShown,.sizer{display:inline-flex;align-items:center;gap:5px}\n.sizer{visibility:hidden}\n.confidenceIcon{flex:none;transition:color .16s ease-out}\n.meter{position:relative;justify-self:end;display:block;width:112px;height:6px;overflow:hidden;border-radius:999px;background:var(--surface-muted)}\n.meter[data-confidence=at-risk] .meterFill{background:var(--warning)}\n.meter[data-confidence=off-track] .meterFill{background:var(--danger)}\n@container (max-width: 480px){.meter{width:72px}\n.meterFill{position:absolute;inset:0;border-radius:inherit;background:var(--success);transition:background-color .24s ease-out}\n.body{overflow:hidden}\n.bodyInner{display:grid;padding-bottom:4px}\n.bodyInner>*{grid-area:1/1;min-width:0}\n.keyResults{display:grid;grid-auto-rows:1fr;margin:0;padding:0;list-style:none}\n.keyResults>li{display:grid}\n.checkIn{display:grid;align-content:start;gap:8px;padding:8px 12px 8px 36px}\n.checkIn:not([data-visible]){visibility:hidden}\n.checkInHead{display:flex;min-width:0;align-items:center;justify-content:space-between;gap:16px;padding-bottom:4px}\n.checkInMeta{flex:none;color:var(--text-muted);font-size:13px}\n.controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px}\n.noteField,.valueField{display:flex;min-width:0;height:44px;align-items:center;gap:4px;padding:0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--background);transition:border-color .12s ease-out}\n.valueField{flex:1 1 120px;max-width:160px}\n.noteField:hover,.valueField:hover{border-color:color-mix(in oklab,var(--border),var(--foreground) 18%)}\n.noteField:focus-within,.valueField:focus-within{border-color:var(--accent)}\n.valueField[data-invalid]{border-color:var(--danger)}\n.valueField{max-width:none}\n.noteInput,.valueInput{width:100%;min-width:0;height:100%;padding:0;border:0;outline:none;background:transparent;color:var(--foreground);font:inherit;font-size:14px}\n.valueInput{font-variant-numeric:tabular-nums}\n.noteInput:disabled,.valueInput:disabled{color:var(--text-secondary)}\n.noteInput::placeholder{color:var(--text-muted)}\n.affix{flex:none;color:var(--text-muted)}\n.confidencePicker{flex:none}\n.actions{display:flex;align-items:center;gap:4px;padding-top:4px}\n.projection{display:flex;flex:1;min-width:0;color:var(--text-muted);font-size:13px;white-space:nowrap}\n.projection[data-error]{color:var(--danger)}\n.arrow{flex:none;color:var(--text-muted)}\n.empty{display:grid;place-content:center;justify-items:center;gap:4px;min-height:240px;padding:32px 24px;text-align:center}\n.emptyTitle{margin:0;font-weight:500}\n.emptyText{max-width:34ch;margin:0;color:var(--text-muted);font-size:13px;line-height:18px;text-wrap:balance}\n.foot{display:flex;min-height:57px;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px 12px 20px;border-top:1px solid var(--border-subtle)}\n.footText{display:flex;min-width:0;color:var(--text-muted);font-size:13px;white-space:nowrap}\n.footIcon{flex:none;color:var(--success)}\n.swap{display:inline-grid;min-width:0}", {"root":"root","srOnly":"srOnly","head":"head","foot":"foot","headText":"headText","title":"title","meta":"meta","dot":"dot","stepper":"stepper","quarterLabel":"quarterLabel","iconButton":"iconButton","panels":"panels","panel":"panel","objectives":"objectives","objective":"objective","krRow":"krRow","objectiveRow":"objectiveRow","keyResults":"keyResults","checkIn":"checkIn","chevron":"chevron","confidenceIcon":"confidenceIcon","meterFill":"meterFill","lines":"lines","krTitle":"krTitle","objectiveTitle":"objectiveTitle","checkInHead":"checkInHead","percentCell":"percentCell","number":"number","percent":"percent","projection":"projection","delta":"delta","rowMeta":"rowMeta","owner":"owner","ownerAvatar":"ownerAvatar","ownerName":"ownerName","value":"value","swapItem":"swapItem","footText":"footText","source":"source","confidence":"confidence","confidenceShown":"confidenceShown","sizer":"sizer","meter":"meter","body":"body","bodyInner":"bodyInner","checkInMeta":"checkInMeta","controls":"controls","noteField":"noteField","valueField":"valueField","noteInput":"noteInput","valueInput":"valueInput","affix":"affix","confidencePicker":"confidencePicker","actions":"actions","arrow":"arrow","empty":"empty","emptyTitle":"emptyTitle","emptyText":"emptyText","footIcon":"footIcon","swap":"swap"});
A.reg(91923, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    GoalTracker: () => Q,
    default: () => eo,
    formatGoalValue: () => A,
    keyResultProgress: () => x,
    objectiveConfidence: () => R,
    objectiveProgress: () => w,
    quarterProgress: () => C,
    sampleGoalQuarters: () => L
  });
  var r = a(95155), n = a(12115), i = a(18310), s = a(80642), o = a(25354), l = a(28245), c = a(92171), d = a(55809), u = a(64962), h = a(35484), m = a(94890), p = a(78780), g = a(76721), f = a(90467), v = a(7770), k = a(92218), b = a(51288), _ = a(66558), j = a(67752);
  let y = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    focusable: false
  };
  function x(e2) {
    let t2 = e2.target - e2.start;
    return 0 === t2 ? 100 * (e2.current === e2.target) : Math.min(100, Math.max(0, (e2.current - e2.start) / t2 * 100));
  }
  function w(e2) {
    return e2.keyResults.length ? e2.keyResults.reduce((e3, t2) => e3 + x(t2), 0) / e2.keyResults.length : 0;
  }
  let N = { "on-track": 0, "at-risk": 1, "off-track": 2 }, I = ["on-track", "at-risk", "off-track"];
  function R(e2) {
    return e2.keyResults.length ? I[Math.round(
      e2.keyResults.reduce((e3, t2) => e3 + N[t2.confidence], 0) / e2.keyResults.length
    )] ?? "on-track" : "on-track";
  }
  function C(e2) {
    return e2.objectives.length ? e2.objectives.reduce((e3, t2) => e3 + w(t2), 0) / e2.objectives.length : 0;
  }
  function A(e2, t2) {
    let a2 = e2.decimals ?? 0, r2 = t2.toLocaleString("en-US", {
      minimumFractionDigits: a2,
      maximumFractionDigits: a2
    });
    return `${e2.prefix ?? ""}${r2}${e2.unit ?? ""}`;
  }
  let T = {
    name: "Stripe",
    icon: (0, r.jsx)(function(e2) {
      return (0, r.jsx)("svg", {
        ...y,
        ...e2,
        children: (0, r.jsx)("path", {
          d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
        })
      });
    }, {})
  }, M = {
    name: "Linear",
    icon: (0, r.jsx)(function(e2) {
      return (0, r.jsx)("svg", {
        ...y,
        ...e2,
        children: (0, r.jsx)("path", {
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.020 12.020 0 0 1-9.824-9.824Z"
        })
      });
    }, {})
  }, S = {
    name: "Vercel",
    icon: (0, r.jsx)(function(e2) {
      return (0, r.jsx)("svg", {
        ...y,
        ...e2,
        children: (0, r.jsx)("path", { d: "m12 1.608 12 20.784H0Z" })
      });
    }, {})
  }, $ = {
    name: "Intercom",
    icon: (0, r.jsx)(function(e2) {
      return (0, r.jsx)("svg", {
        ...y,
        ...e2,
        children: (0, r.jsx)("path", {
          d: "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.520 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z"
        })
      });
    }, {})
  }, z = {
    name: "HubSpot",
    icon: (0, r.jsx)(function(e2) {
      return (0, r.jsx)("svg", {
        ...y,
        ...e2,
        children: (0, r.jsx)("path", {
          d: "M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
        })
      });
    }, {})
  }, P = { name: "Olivia Bennett", avatar: (0, j.my)("olivia-bennett") }, E = { name: "Ava Mitchell", avatar: (0, j.my)("ava-mitchell") }, O = { name: "Hannah Walsh", avatar: (0, j.my)("hannah-walsh") }, L = [
    {
      id: "2026-q3",
      label: "Q3 2026",
      status: "closed",
      meta: "Closed Sep 30",
      footnote: "Final scores, read only",
      objectives: [
        {
          id: "usage-billing",
          title: "Launch usage based billing",
          owner: { name: "Daniel Kim", avatar: (0, j.my)("daniel-kim") },
          keyResults: [
            {
              id: "metered",
              title: "Metered billing live on every plan",
              start: 0,
              target: 100,
              current: 100,
              unit: "%",
              confidence: "on-track",
              source: M
            },
            {
              id: "billing-tickets",
              title: "Billing tickets under 40 a week",
              start: 95,
              target: 40,
              current: 52,
              confidence: "at-risk",
              source: $
            },
            {
              id: "invoice-accuracy",
              title: "Invoice accuracy at 99.9%",
              start: 99.2,
              target: 99.9,
              current: 99.8,
              unit: "%",
              decimals: 1,
              confidence: "on-track",
              source: T
            }
          ]
        },
        {
          id: "infra-cost",
          title: "Cut infrastructure cost per workspace",
          owner: P,
          keyResults: [
            {
              id: "compute-cost",
              title: "Compute cost per workspace at $3.10",
              start: 4.2,
              target: 3.1,
              current: 3.35,
              prefix: "$",
              decimals: 2,
              confidence: "on-track",
              source: S
            },
            {
              id: "idle-previews",
              title: "Idle preview environments under 5%",
              start: 22,
              target: 5,
              current: 9,
              unit: "%",
              confidence: "on-track",
              source: S
            },
            {
              id: "cold-logs",
              title: "Logs move to cold storage after 14 days",
              start: 0,
              target: 100,
              current: 100,
              unit: "%",
              confidence: "on-track",
              source: M
            }
          ]
        },
        {
          id: "self-serve-onboarding",
          title: "Make onboarding fully self serve",
          owner: { name: "Emma Collins", avatar: (0, j.my)("emma-collins") },
          keyResults: [
            {
              id: "activation",
              title: "Activation within 24 hours at 45%",
              start: 31,
              target: 45,
              current: 38,
              unit: "%",
              confidence: "at-risk",
              source: z
            },
            {
              id: "setup-guide",
              title: "Setup guide completion at 70%",
              start: 42,
              target: 70,
              current: 51,
              unit: "%",
              confidence: "off-track",
              source: z
            },
            {
              id: "onboarding-calls",
              title: "Onboarding calls down 50%",
              start: 0,
              target: 50,
              current: 41,
              unit: "%",
              confidence: "on-track",
              source: $
            }
          ]
        }
      ]
    },
    {
      id: "2026-q4",
      label: "Q4 2026",
      status: "active",
      meta: "Week 4 of 13",
      footnote: "Next check-in due Fri, Oct 30",
      objectives: [
        {
          id: "fast-checkout",
          title: "Make checkout the fastest in the category",
          owner: P,
          keyResults: [
            {
              id: "checkout-p95",
              title: "Checkout p95 latency under 400 ms",
              start: 780,
              target: 400,
              current: 520,
              unit: " ms",
              confidence: "on-track",
              source: S
            },
            {
              id: "payment-success",
              title: "Payment success rate at 98.5%",
              start: 96.2,
              target: 98.5,
              current: 97.4,
              unit: "%",
              decimals: 1,
              confidence: "at-risk",
              source: T
            },
            {
              id: "one-click-upgrade",
              title: "One click upgrade live for all workspaces",
              start: 0,
              target: 100,
              current: 40,
              unit: "%",
              confidence: "on-track",
              source: M
            }
          ]
        },
        {
          id: "self-serve-revenue",
          title: "Grow self serve revenue",
          owner: E,
          keyResults: [
            {
              id: "new-mrr",
              title: "New self serve MRR to $180k",
              start: 0,
              target: 180,
              current: 112,
              prefix: "$",
              unit: "k",
              confidence: "on-track",
              source: T
            },
            {
              id: "trial-conversion",
              title: "Trial to paid conversion at 14%",
              start: 9.8,
              target: 14,
              current: 10.6,
              unit: "%",
              decimals: 1,
              confidence: "off-track",
              source: z
            },
            {
              id: "annual-mix",
              title: "Annual plan mix at 40%",
              start: 28,
              target: 40,
              current: 33,
              unit: "%",
              confidence: "at-risk",
              source: T
            }
          ]
        },
        {
          id: "two-hour-answers",
          title: "Answer every customer within two hours",
          owner: O,
          keyResults: [
            {
              id: "first-response",
              title: "Median first response under 2 h",
              start: 5.4,
              target: 2,
              current: 2.6,
              unit: " h",
              decimals: 1,
              confidence: "on-track",
              source: $
            },
            {
              id: "csat",
              title: "Support CSAT at 95%",
              start: 89,
              target: 95,
              current: 92,
              unit: "%",
              confidence: "at-risk",
              source: $
            },
            {
              id: "aged-tickets",
              title: "Close the 160 aged tickets",
              start: 0,
              target: 160,
              current: 96,
              confidence: "on-track",
              source: M
            }
          ]
        }
      ]
    },
    {
      id: "2027-q1",
      label: "Q1 2027",
      status: "planning",
      meta: "Planning",
      footnote: "Drafting opens Tue, Dec 1",
      objectives: []
    }
  ];
  var B = a(90314), D = a.n(B);
  let F = [...v.T.ease.standard], q = { type: "spring", visualDuration: 0.24, bounce: 0 }, V = { duration: 0.56, ease: F }, H = {
    "on-track": { label: "On track", Icon: u.A },
    "at-risk": { label: "At risk", Icon: h.A },
    "off-track": { label: "Off track", Icon: m.A }
  }, Y = Object.keys(H).map((e2) => ({ value: e2, label: H[e2].label })), G = (e2, t2) => new Promise((a2, r2) => {
    if (t2.aborted) return r2(t2.reason);
    let n2 = window.setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(n2), r2(t2.reason);
      },
      { once: true }
    );
  }), K = (e2) => {
    let t2 = e2.replace(/[,\s$%]/g, "");
    if (!/^-?\d*\.?\d+$|^-?\d+\.$/.test(t2)) return null;
    let a2 = Number(t2);
    return Number.isFinite(a2) ? a2 : null;
  }, W = (e2, t2) => {
    if (!t2) return null;
    let a2 = e2.find((e3) => e3.id === t2.quarterId)?.objectives.find((e3) => e3.id === t2.objectiveId), r2 = a2?.keyResults.find((e3) => e3.id === t2.keyResultId);
    return a2 && r2 ? { objective: a2, kr: r2 } : null;
  };
  function Q({
    quarters: e2,
    title: t2 = "Company goals",
    quarterId: a2,
    defaultQuarterId: l2,
    onQuarterChange: c2,
    onCheckIn: d2,
    autoPlay: h2,
    className: m2
  }) {
    let f2 = (0, n.useId)(), v2 = !!(0, i.I)(), k2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), [j2, y2] = (0, n.useState)(() => e2 ?? L), N2 = l2 ?? (j2.find((e3) => "active" === e3.status) ?? j2[j2.length - 1])?.id ?? "", [I2, R2] = (0, n.useState)(N2), T2 = a2 ?? I2, M2 = Math.max(
      0,
      j2.findIndex((e3) => e3.id === T2)
    ), S2 = j2[M2], [$2, z2] = (0, n.useState)(1), [P2, E2] = (0, n.useState)(
      () => Object.fromEntries(j2.map((e3) => [e3.id, e3.objectives[0]?.id ?? null]))
    ), [O2, B2] = (0, n.useState)(null), [V2, Y2] = (0, n.useState)({ value: "", confidence: "on-track", note: "" }), [U2, J2] = (0, n.useState)("editing"), [X2, ee2] = (0, n.useState)(null), [et2, er2] = (0, n.useState)(null), [en2, eo2] = (0, n.useState)(""), [el, ec] = (0, n.useState)(false), [ed, eu] = (0, n.useState)(), eh = (0, n.useRef)(null), em = (0, n.useRef)(null), ep = (0, n.useRef)(null), eg = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      let e3 = k2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return void ec(true);
      let t3 = new IntersectionObserver(
        (e4) => {
          e4.some((e5) => e5.isIntersecting) && (ec(true), t3.disconnect());
        },
        { threshold: 0.25 }
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useLayoutEffect)(() => {
      let e3 = eg.current;
      if (!e3 || "u" < typeof ResizeObserver || !S2?.objectives.length) return;
      let t3 = new ResizeObserver(() => eu(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, [S2?.id, S2?.objectives.length]), (0, n.useEffect)(() => {
      if (!ep.current) return;
      let e3 = ep.current;
      ep.current = null, "input" === e3 ? _2.current?.focus({ preventScroll: true }) : document.getElementById(e3)?.focus({ preventScroll: true });
    }, [O2]), (0, n.useEffect)(() => {
      if (!X2) return;
      let e3 = window.setTimeout(() => ee2(null), 2600);
      return () => window.clearTimeout(e3);
    }, [X2]), (0, n.useEffect)(() => {
      if (!et2) return;
      let e3 = window.setTimeout(() => er2(null), 4e3);
      return () => window.clearTimeout(e3);
    }, [et2]), (0, n.useEffect)(
      () => () => {
        eh.current?.abort(), em.current?.abort();
      },
      []
    );
    let ef = (e3) => `${f2}-kr-${e3.quarterId}-${e3.objectiveId}-${e3.keyResultId}`, ev = (0, n.useCallback)(
      (e3) => {
        eh.current?.abort(), eh.current = null, B2((t3) => (t3 && e3 && (ep.current = ef(t3)), null)), J2("editing");
      },
      [f2]
    ), ek = (0, n.useCallback)(
      (e3, t3) => {
        let a3 = W(j2, e3);
        a3 && (eh.current?.abort(), E2((t4) => ({ ...t4, [e3.quarterId]: e3.objectiveId })), Y2({
          value: A({ decimals: a3.kr.decimals }, a3.kr.current).replace(
            /,/g,
            ""
          ),
          confidence: a3.kr.confidence,
          note: ""
        }), J2("editing"), t3 && (ep.current = "input"), B2(e3));
      },
      [j2]
    ), eb = (0, n.useCallback)(
      async (e3, t3) => {
        let a3 = W(j2, e3), r2 = K(t3.value);
        if (!a3 || null === r2) return;
        eh.current?.abort();
        let n2 = new AbortController();
        eh.current = n2, J2("saving");
        let i2 = {
          ...e3,
          value: r2,
          previousValue: a3.kr.current,
          confidence: t3.confidence,
          note: t3.note.trim()
        };
        try {
          d2 ? await d2(i2, { signal: n2.signal }) : await G(620, n2.signal);
        } catch {
          if (n2.signal.aborted) return;
          J2("error"), eo2("Check-in was not saved. Try again.");
          return;
        }
        if (n2.signal.aborted) return;
        eh.current = null;
        let s2 = x(a3.kr), o2 = { ...a3.kr, current: r2, confidence: t3.confidence }, l3 = x(o2), c3 = {
          ...a3.objective,
          keyResults: a3.objective.keyResults.map(
            (t4) => t4.id === e3.keyResultId ? o2 : t4
          )
        };
        y2(
          (t4) => t4.map(
            (t5) => t5.id !== e3.quarterId ? t5 : {
              ...t5,
              objectives: t5.objectives.map(
                (t6) => t6.id === e3.objectiveId ? c3 : t6
              )
            }
          )
        ), ee2({
          keyResultId: e3.keyResultId,
          delta: Math.round(l3) - Math.round(s2),
          key: Date.now()
        }), er2(d2 ? "Check-in saved" : "Check-in saved \xB7 simulated"), eo2(
          `Check-in saved. ${a3.kr.title}: ${A(a3.kr, r2)}, ${H[t3.confidence].label.toLowerCase()}. Objective at ${Math.round(w(c3))}%.${d2 ? "" : " Simulated, nothing was sent."}`
        ), J2("editing"), B2(
          (e4) => (e4 && document.activeElement && k2.current?.contains(document.activeElement) && (ep.current = ef(e4)), null)
        );
      },
      [j2, d2, f2]
    ), e_ = (e3) => {
      let t3 = j2[M2 + e3];
      t3 && (ej(), ev(false), z2(e3), R2(t3.id), c2?.(t3.id));
    }, ej = () => {
      em.current?.abort(), em.current = null;
    }, ey = (h2 ?? !e2) && !v2, ex = (0, n.useRef)(false);
    if ((0, n.useEffect)(() => {
      if (!el || !ey || ex.current) return;
      let e3 = j2.find((e4) => "active" === e4.status), t3 = e3?.objectives[0], a3 = t3?.keyResults.find((e4) => "at-risk" === e4.confidence) ?? t3?.keyResults[0];
      if (!e3 || !t3 || !a3 || T2 !== e3.id) return;
      ex.current = true;
      let r2 = new AbortController();
      em.current = r2;
      let n2 = { quarterId: e3.id, objectiveId: t3.id, keyResultId: a3.id }, i2 = a3.decimals ? (a3.current + (a3.target - a3.current) * 0.64).toFixed(a3.decimals) : String(Math.round(a3.current + (a3.target - a3.current) * 0.64)), s2 = "3DS retry shipped Oct 24. Soft declines are down 31% week over week, so we are back on pace.";
      (async () => {
        let e4 = r2.signal;
        await G(1100, e4), ek(n2, false), await G(520, e4), Y2((e5) => ({ ...e5, value: "" }));
        for (let t5 = 1; t5 <= i2.length; t5 += 1)
          await G(80, e4), Y2((e5) => ({ ...e5, value: i2.slice(0, t5) }));
        await G(320, e4), Y2((e5) => ({ ...e5, confidence: "on-track" })), await G(360, e4);
        let t4 = s2.split(" ");
        for (let a4 = 0; a4 < t4.length; a4 += 4)
          await G(36, e4), Y2((e5) => ({ ...e5, note: t4.slice(0, a4 + 4).join(" ") }));
        await G(560, e4), em.current = null, await eb(n2, { value: i2, confidence: "on-track", note: s2 });
      })().catch(() => void 0);
    }, [el, ey, j2, T2, ek, eb]), (0, n.useEffect)(() => {
      let e3 = k2.current;
      if (!e3) return;
      let t3 = () => ej();
      return e3.addEventListener("pointerdown", t3), e3.addEventListener("keydown", t3), () => {
        e3.removeEventListener("pointerdown", t3), e3.removeEventListener("keydown", t3);
      };
    }, []), !S2)
      return null;
    let ew = Math.round(C(S2)), eN = el || v2, eI = et2 ?? S2.footnote ?? "";
    return (0, r.jsxs)("div", {
      ref: k2,
      className: [D().root, m2].filter(Boolean).join(" "),
      children: [
        (0, r.jsxs)("header", {
          className: D().head,
          children: [
            (0, r.jsxs)("div", {
              className: D().headText,
              children: [
                (0, r.jsx)("h3", { className: D().title, children: t2 }),
                (0, r.jsx)("p", {
                  className: D().meta,
                  children: (0, r.jsxs)(ei, {
                    id: S2.id,
                    reduced: v2,
                    children: [
                      S2.meta ?? S2.label,
                      S2.objectives.length > 0 && (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(es, {}),
                          (0, r.jsx)(ea, {
                            value: ew,
                            active: eN,
                            reduced: v2
                          }),
                          " overall"
                        ]
                      })
                    ]
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: D().stepper,
              role: "group",
              "aria-label": "Quarter",
              children: [
                (0, r.jsx)("button", {
                  type: "button",
                  className: D().iconButton,
                  onClick: () => e_(-1),
                  disabled: 0 === M2,
                  "aria-label": j2[M2 - 1] ? `Previous quarter, ${j2[M2 - 1].label}` : "Previous quarter",
                  children: (0, r.jsx)(p.A, { size: 16, "aria-hidden": true })
                }),
                (0, r.jsx)("span", {
                  className: D().quarterLabel,
                  "aria-live": "polite",
                  children: (0, r.jsx)(ei, {
                    id: S2.id,
                    reduced: v2,
                    children: S2.label
                  })
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: D().iconButton,
                  onClick: () => e_(1),
                  disabled: M2 === j2.length - 1,
                  "aria-label": j2[M2 + 1] ? `Next quarter, ${j2[M2 + 1].label}` : "Next quarter",
                  children: (0, r.jsx)(g.A, { size: 16, "aria-hidden": true })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: D().panels,
          children: (0, r.jsx)(s.N, {
            mode: "popLayout",
            initial: false,
            custom: $2,
            children: (0, r.jsx)(
              o.PY1.div,
              {
                ref: eg,
                className: D().panel,
                custom: $2,
                variants: {
                  enter: (e3) => ({ opacity: 0, x: v2 ? 0 : 8 * e3 }),
                  center: { opacity: 1, x: 0 },
                  exit: (e3) => ({ opacity: 0, x: v2 ? 0 : -8 * e3 })
                },
                initial: "enter",
                animate: "center",
                exit: "exit",
                transition: { opacity: { duration: 0.16, ease: F }, x: q },
                children: 0 === S2.objectives.length ? (0, r.jsxs)("div", {
                  className: D().empty,
                  style: { minHeight: ed },
                  children: [
                    (0, r.jsxs)("p", {
                      className: D().emptyTitle,
                      children: ["No goals for ", S2.label, " yet"]
                    }),
                    (0, r.jsxs)("p", {
                      className: D().emptyText,
                      children: [
                        S2.footnote ? `${S2.footnote}.` : "Drafting has not opened.",
                        " Unfinished key results can carry over."
                      ]
                    })
                  ]
                }) : (0, r.jsx)("ul", {
                  className: D().objectives,
                  children: S2.objectives.map(
                    (e3) => (0, r.jsx)(
                      Z,
                      {
                        uid: f2,
                        quarter: S2,
                        objective: e3,
                        open: P2[S2.id] === e3.id,
                        target: O2?.quarterId === S2.id && O2.objectiveId === e3.id ? O2 : null,
                        draft: V2,
                        phase: U2,
                        recent: X2,
                        active: eN,
                        reduced: v2,
                        inputRef: _2,
                        onToggle: () => {
                          let t3;
                          return ej(), t3 = P2[S2.id] === e3.id, void (O2 && O2.objectiveId === e3.id && ev(false), E2((a3) => ({ ...a3, [S2.id]: t3 ? null : e3.id })));
                        },
                        onOpenKr: (t3) => {
                          ej(), ek(
                            {
                              quarterId: S2.id,
                              objectiveId: e3.id,
                              keyResultId: t3.id
                            },
                            true
                          );
                        },
                        onDraft: (e4) => {
                          ej(), Y2((t3) => ({ ...t3, ...e4 })), "error" === U2 && J2("editing");
                        },
                        onCancel: () => {
                          ej(), ev(true);
                        },
                        onSubmit: () => {
                          ej(), O2 && eb(O2, V2);
                        },
                        rowId: ef
                      },
                      e3.id
                    )
                  )
                })
              },
              S2.id
            )
          })
        }),
        (0, r.jsxs)("footer", {
          className: D().foot,
          children: [
            (0, r.jsx)("span", {
              className: D().footText,
              children: (0, r.jsxs)(ei, {
                id: eI,
                reduced: v2,
                children: [
                  et2 && (0, r.jsx)(u.A, {
                    size: 14,
                    className: D().footIcon,
                    "aria-hidden": true
                  }),
                  eI
                ]
              })
            }),
            "active" === S2.status && S2.objectives.length > 0 && (0, r.jsx)(b.$, {
              size: "sm",
              variant: "secondary",
              onClick: () => {
                ej();
                let e3 = S2.objectives.find((e4) => e4.id === P2[S2.id]) ?? S2.objectives[0], t3 = e3?.keyResults[0];
                e3 && t3 && ek(
                  { quarterId: S2.id, objectiveId: e3.id, keyResultId: t3.id },
                  true
                );
              },
              disabled: !!O2,
              children: "Check in"
            })
          ]
        }),
        (0, r.jsx)("p", {
          className: D().srOnly,
          "aria-live": "polite",
          children: en2
        })
      ]
    });
  }
  function Z({
    uid: e2,
    quarter: t2,
    objective: a2,
    open: n2,
    target: i2,
    draft: s2,
    phase: l2,
    recent: c2,
    active: d2,
    reduced: u2,
    inputRef: h2,
    onToggle: m2,
    onOpenKr: p2,
    onDraft: f2,
    onCancel: v2,
    onSubmit: b2,
    rowId: _2
  }) {
    let j2 = w(a2), y2 = R(a2), x2 = X(j2, d2, u2, 0.12), N2 = `${e2}-body-${t2.id}-${a2.id}`, I2 = !!i2, C2 = a2.keyResults.find((e3) => e3.id === i2?.keyResultId) ?? a2.keyResults[0], A2 = "active" === t2.status;
    return (0, r.jsxs)("li", {
      className: D().objective,
      children: [
        (0, r.jsxs)("button", {
          type: "button",
          className: D().objectiveRow,
          "aria-expanded": n2,
          "aria-controls": N2,
          onClick: m2,
          children: [
            (0, r.jsx)(g.A, {
              size: 16,
              className: D().chevron,
              "data-open": n2 || void 0,
              "aria-hidden": true
            }),
            (0, r.jsxs)("span", {
              className: D().lines,
              children: [
                (0, r.jsx)("span", {
                  className: D().objectiveTitle,
                  children: a2.title
                }),
                (0, r.jsx)(ee, { mv: x2 }),
                (0, r.jsxs)("span", {
                  className: D().rowMeta,
                  children: [
                    (0, r.jsxs)("span", {
                      className: D().owner,
                      children: [
                        (0, r.jsx)(k.e, {
                          name: a2.owner.name,
                          src: a2.owner.avatar,
                          size: "sm",
                          className: D().ownerAvatar
                        }),
                        (0, r.jsx)("span", {
                          className: D().ownerName,
                          children: a2.owner.name
                        })
                      ]
                    }),
                    (0, r.jsx)(es, {}),
                    (0, r.jsx)(en, { value: y2, reduced: u2 })
                  ]
                }),
                (0, r.jsx)(et, { mv: x2, confidence: y2 })
              ]
            })
          ]
        }),
        (0, r.jsx)(o.PY1.div, {
          id: N2,
          className: D().body,
          initial: false,
          animate: { height: n2 ? "auto" : 0 },
          transition: u2 ? { duration: 0 } : q,
          inert: !n2 || void 0,
          children: (0, r.jsxs)("div", {
            className: D().bodyInner,
            children: [
              (0, r.jsx)(o.PY1.ul, {
                className: D().keyResults,
                initial: false,
                animate: { opacity: +!I2 },
                transition: { duration: I2 ? 0.1 : 0.16, ease: F },
                inert: I2 || void 0,
                "aria-hidden": I2 || void 0,
                children: a2.keyResults.map((e3) => {
                  let n3 = {
                    quarterId: t2.id,
                    objectiveId: a2.id,
                    keyResultId: e3.id
                  };
                  return (0, r.jsx)(
                    U,
                    {
                      id: _2(n3),
                      kr: e3,
                      editable: A2,
                      recent: c2?.keyResultId === e3.id ? c2 : null,
                      active: d2,
                      reduced: u2,
                      onOpen: () => p2(e3)
                    },
                    e3.id
                  );
                })
              }),
              C2 && (0, r.jsx)(J, {
                kr: C2,
                visible: I2,
                draft: s2,
                phase: l2,
                reduced: u2,
                inputRef: I2 ? h2 : void 0,
                onDraft: f2,
                onCancel: v2,
                onSubmit: b2
              })
            ]
          })
        })
      ]
    });
  }
  function U({
    id: e2,
    kr: t2,
    editable: a2,
    recent: n2,
    active: i2,
    reduced: l2,
    onOpen: c2
  }) {
    let d2 = x(t2), u2 = X(d2, i2, l2), h2 = `${A(t2, t2.current)} / ${A(t2, t2.target)}`, m2 = (0, r.jsxs)("span", {
      className: D().lines,
      children: [
        (0, r.jsx)("span", { className: D().krTitle, children: t2.title }),
        (0, r.jsxs)("span", {
          className: D().percentCell,
          children: [
            (0, r.jsx)(s.N, {
              children: n2 && 0 !== n2.delta && (0, r.jsxs)(
                o.PY1.span,
                {
                  className: D().delta,
                  "data-negative": n2.delta < 0 || void 0,
                  initial: { opacity: 0, y: 2 * !l2 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.16,
                      ease: F,
                      delay: 0.2 * !l2
                    }
                  },
                  exit: { opacity: 0, transition: { duration: 0.18 } },
                  children: [n2.delta > 0 ? "+" : "\u2212", Math.abs(n2.delta)]
                },
                n2.key
              )
            }),
            (0, r.jsx)(ee, { mv: u2 })
          ]
        }),
        (0, r.jsxs)("span", {
          className: D().rowMeta,
          children: [
            (0, r.jsx)(en, { value: t2.confidence, reduced: l2 }),
            (0, r.jsx)(es, {}),
            (0, r.jsx)("span", {
              className: D().value,
              children: (0, r.jsx)(ei, { id: h2, reduced: l2, children: h2 })
            }),
            t2.source && (0, r.jsxs)("span", {
              className: D().source,
              title: `Synced from ${t2.source.name}`,
              children: [
                t2.source.icon,
                (0, r.jsxs)("span", {
                  className: D().srOnly,
                  children: ["Synced from ", t2.source.name]
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(et, { mv: u2, confidence: t2.confidence })
      ]
    });
    return (0, r.jsx)("li", {
      children: a2 ? (0, r.jsx)("button", {
        type: "button",
        id: e2,
        className: D().krRow,
        onClick: c2,
        "aria-label": `Check in on ${t2.title}. ${A(t2, t2.current)} of ${A(t2, t2.target)}, ${Math.round(d2)}%, ${H[t2.confidence].label}.`,
        children: m2
      }) : (0, r.jsx)("div", {
        id: e2,
        className: D().krRow,
        "data-static": "",
        children: m2
      })
    });
  }
  function J({
    kr: e2,
    visible: t2,
    draft: a2,
    phase: i2,
    reduced: s2,
    inputRef: l2,
    onDraft: c2,
    onCancel: d2,
    onSubmit: u2
  }) {
    let m2 = (0, n.useId)(), p2 = K(a2.value), g2 = x(e2), v2 = null === p2 ? g2 : x({ ...e2, current: p2 }), k2 = "saving" === i2;
    return (0, r.jsxs)(o.PY1.form, {
      className: D().checkIn,
      onSubmit: (e3) => {
        e3.preventDefault(), null === p2 || k2 || u2();
      },
      onKeyDown: (e3) => {
        "Escape" === e3.key && (e3.preventDefault(), d2());
      },
      "aria-label": `Check in on ${e2.title}`,
      initial: false,
      animate: { opacity: +!!t2, y: t2 || s2 ? 0 : 2 },
      transition: { duration: t2 ? 0.16 : 0.1, ease: F, delay: 0.04 * !!t2 },
      inert: !t2 || void 0,
      "aria-hidden": !t2 || void 0,
      "data-visible": t2 || void 0,
      children: [
        (0, r.jsxs)("div", {
          className: D().checkInHead,
          children: [
            (0, r.jsx)("span", { className: D().krTitle, children: e2.title }),
            (0, r.jsxs)("span", {
              className: D().checkInMeta,
              children: ["Target ", A(e2, e2.target)]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: D().controls,
          children: [
            (0, r.jsxs)("label", {
              className: D().valueField,
              "data-invalid": "" !== a2.value && null === p2 || void 0,
              children: [
                (0, r.jsx)("span", {
                  className: D().srOnly,
                  children: "New value"
                }),
                e2.prefix && (0, r.jsx)("span", {
                  className: D().affix,
                  "aria-hidden": true,
                  children: e2.prefix
                }),
                (0, r.jsx)("input", {
                  ref: l2,
                  id: `${m2}-value`,
                  className: D().valueInput,
                  inputMode: "decimal",
                  autoComplete: "off",
                  value: a2.value,
                  disabled: k2,
                  onChange: (e3) => c2({ value: e3.target.value }),
                  onFocus: (e3) => e3.currentTarget.select()
                }),
                e2.unit && (0, r.jsx)("span", {
                  className: D().affix,
                  "aria-hidden": true,
                  children: e2.unit.trim()
                })
              ]
            }),
            (0, r.jsx)(_.A, {
              label: "Confidence",
              options: Y,
              value: a2.confidence,
              onValueChange: (e3) => c2({ confidence: e3 }),
              className: D().confidencePicker
            })
          ]
        }),
        (0, r.jsxs)("label", {
          className: D().noteField,
          children: [
            (0, r.jsx)("span", { className: D().srOnly, children: "Note" }),
            (0, r.jsx)("input", {
              className: D().noteInput,
              placeholder: "What changed this week?",
              autoComplete: "off",
              value: a2.note,
              disabled: k2,
              maxLength: 240,
              onChange: (e3) => c2({ note: e3.target.value })
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: D().actions,
          children: [
            (0, r.jsx)("span", {
              className: D().projection,
              "data-error": "error" === i2 || void 0,
              children: (0, r.jsx)(ei, {
                id: "error" === i2 ? "error" : null === p2 ? "invalid" : "ok",
                reduced: s2,
                children: "error" === i2 ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(h.A, { size: 14, "aria-hidden": true }),
                    "Not saved. Try again."
                  ]
                }) : null === p2 ? "Enter a number" : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsxs)("span", {
                      className: D().number,
                      children: [Math.round(g2), "%"]
                    }),
                    (0, r.jsx)(f.A, {
                      size: 14,
                      className: D().arrow,
                      "aria-hidden": true
                    }),
                    (0, r.jsx)(er, {
                      value: Math.round(v2),
                      reduced: s2
                    })
                  ]
                })
              })
            }),
            (0, r.jsx)(b.$, {
              type: "button",
              size: "sm",
              variant: "ghost",
              onClick: d2,
              children: "Cancel"
            }),
            (0, r.jsx)(b.$, {
              type: "submit",
              size: "sm",
              variant: "primary",
              loading: k2,
              disabled: null === p2,
              children: "error" === i2 ? "Retry" : "Save check-in"
            })
          ]
        })
      ]
    });
  }
  function X(e2, t2, a2, r2 = 0) {
    let i2 = (0, l.d)(t2 ? e2 : 0);
    return (0, n.useEffect)(() => {
      if (!t2) return;
      if (a2) return void i2.set(e2);
      let n2 = (0, c.i)(i2, e2, { ...V, delay: r2 });
      return () => n2.stop();
    }, [e2, t2, a2, r2, i2]), i2;
  }
  function ee({ mv: e2 }) {
    let t2 = (0, d.G)(e2, (e3) => `${Math.round(e3)}%`);
    return (0, r.jsx)(o.PY1.span, { className: D().percent, children: t2 });
  }
  function et({ mv: e2, confidence: t2 }) {
    let a2 = (0, d.G)(
      e2,
      (e3) => `inset(0 ${100 - Math.min(100, Math.max(0, e3))}% 0 0 round 999px)`
    );
    return (0, r.jsx)("span", {
      className: D().meter,
      "data-confidence": t2,
      "aria-hidden": true,
      children: (0, r.jsx)(o.PY1.span, {
        className: D().meterFill,
        style: { clipPath: a2 }
      })
    });
  }
  function ea({ value: e2, active: t2, reduced: a2 }) {
    let n2 = X(e2, t2, a2, 0.12), i2 = (0, d.G)(n2, (e3) => `${Math.round(e3)}%`);
    return (0, r.jsx)(o.PY1.span, { className: D().number, children: i2 });
  }
  function er({ value: e2, reduced: t2 }) {
    let a2 = (0, l.d)(e2);
    (0, n.useEffect)(() => {
      if (t2) return void a2.set(e2);
      let r2 = (0, c.i)(a2, e2, { duration: 0.18, ease: F });
      return () => r2.stop();
    }, [e2, t2, a2]);
    let i2 = (0, d.G)(a2, (e3) => `${Math.round(e3)}%`);
    return (0, r.jsx)(o.PY1.span, { className: D().number, children: i2 });
  }
  function en({ value: e2, reduced: t2 }) {
    let { label: a2, Icon: n2 } = H[e2];
    return (0, r.jsxs)("span", {
      className: D().confidence,
      "data-confidence": e2,
      children: [
        Object.keys(H).map(
          (e3) => (0, r.jsxs)(
            "span",
            {
              className: D().sizer,
              "aria-hidden": true,
              children: [(0, r.jsx)(u.A, { size: 14 }), H[e3].label]
            },
            e3
          )
        ),
        (0, r.jsx)(s.N, {
          initial: false,
          children: (0, r.jsxs)(
            o.PY1.span,
            {
              className: D().confidenceShown,
              initial: { opacity: 0, y: 2 * !t2 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.16, ease: F }
              },
              exit: { opacity: 0, transition: { duration: 0.1 } },
              children: [
                (0, r.jsx)(n2, {
                  size: 14,
                  className: D().confidenceIcon,
                  "aria-hidden": true
                }),
                a2
              ]
            },
            e2
          )
        })
      ]
    });
  }
  function ei({ id: e2, reduced: t2, children: a2 }) {
    return (0, r.jsx)("span", {
      className: D().swap,
      children: (0, r.jsx)(s.N, {
        initial: false,
        children: (0, r.jsx)(
          o.PY1.span,
          {
            className: D().swapItem,
            initial: { opacity: 0, y: 2 * !t2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16, ease: F }
            },
            exit: { opacity: 0, transition: { duration: 0.1 } },
            children: a2
          },
          e2
        )
      })
    });
  }
  function es() {
    return (0, r.jsx)("span", {
      className: D().dot,
      "aria-hidden": true,
      children: "\xB7"
    });
  }
  let eo = Q;
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
A.cssFor("goal-tracker", [90314]);
A.item("goal-tracker", {entry:91923, export:"GoalTracker", kind:"block", tier:"pro", unresolved:[]});
})();