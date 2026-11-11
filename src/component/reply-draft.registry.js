/* reply-draft (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(30894, ".reply-draft_root__e2SwR{container-type:inline-size;width:100%;max-width:600px;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.reply-draft_srOnly__hpjqx{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.reply-draft_card__s2Z_h{display:grid;gap:16px;border:1px solid var(--border);border-radius:var(--radius-panel);padding:16px;background:var(--surface)}.reply-draft_mailHead__j83Ys{display:flex;align-items:flex-start;gap:12px}.reply-draft_subject__5q_zH{flex:1;min-width:0;margin:0;font-size:var(--text-base);font-weight:500;line-height:24px;letter-spacing:-.01em;text-wrap:pretty}.reply-draft_source__Y3sA8{flex:none;display:block;margin-top:4px}.reply-draft_sender__wMloR{display:grid;grid-template-columns:36px minmax(0,1fr) auto;align-items:center;column-gap:12px}.reply-draft_avatar__tjDGU{flex:none}.reply-draft_senderText__bBMzn{display:grid;min-width:0}.reply-draft_senderLine___lwsF{display:flex;min-width:0;align-items:baseline;gap:8px;line-height:20px}.reply-draft_senderName__Jl2ed{flex:none;font-weight:500}.reply-draft_senderEmail__BXI0e{min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}.reply-draft_meta__X8N5j{color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.reply-draft_time__kbYof{align-self:start;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:20px;white-space:nowrap}.reply-draft_mailBody__I_FD6{display:grid;gap:8px;color:var(--text-secondary);line-height:22px}.reply-draft_mailBody__I_FD6 p{margin:0;white-space:pre-line;text-wrap:pretty}.reply-draft_reply__rW2Yr{display:grid;gap:12px;min-width:0;border-top:1px solid var(--border-subtle);padding-top:16px}.reply-draft_suggestions__yn13M{display:flex;flex-wrap:wrap;gap:8px}.reply-draft_suggestion__5hmL5{display:inline-flex;height:32px;align-items:center;border:1px solid var(--border);border-radius:999px;padding:0 12px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:20px;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform .12s var(--ease-standard)}.reply-draft_suggestion__5hmL5:active{transform:scale(.97)}.reply-draft_suggestion__5hmL5[aria-pressed=true]{border-color:color-mix(in oklab,var(--accent) 55%,var(--border));background:color-mix(in oklab,var(--accent) 9%,var(--surface))}@media (hover:hover) and (pointer:fine){.reply-draft_suggestion__5hmL5:hover{background:var(--surface-muted)}}@media (hover:hover) and (pointer:fine){.reply-draft_suggestion__5hmL5[aria-pressed=true]:hover{background:color-mix(in oklab,var(--accent) 13%,var(--surface))}}.reply-draft_draft__Ra6Gx{min-width:0;border:1px solid var(--border);border-radius:var(--radius-control);background:color-mix(in oklab,var(--surface-muted) 45%,var(--surface));transition:border-color var(--duration-standard) var(--ease-standard)}.reply-draft_draft__Ra6Gx[data-phase=error]{border-color:color-mix(in oklab,var(--danger) 40%,var(--border))}.reply-draft_draftHead__aGxG6{display:flex;min-height:20px;align-items:center;gap:12px;padding:12px 16px 0}.reply-draft_model__CTwpU{display:inline-flex;min-width:0;align-items:center;gap:8px}.reply-draft_modelMark__KRBCD{display:grid;flex:none;width:16px;height:16px;place-items:center;color:#d97757}.reply-draft_modelMark__KRBCD svg{display:block;width:16px;height:16px}.reply-draft_modelName__uJkaw{min-width:0;overflow:hidden;text-overflow:ellipsis}.reply-draft_modelName__uJkaw,.reply-draft_status__48wze{color:var(--text-secondary);font-size:var(--text-xs);line-height:20px;white-space:nowrap}.reply-draft_status__48wze{display:grid;margin-left:auto;justify-items:end}.reply-draft_statusItem__Rbrqc{display:inline-flex;grid-area:1/1;align-items:center;gap:4px}.reply-draft_statusItem__Rbrqc svg{flex:none}.reply-draft_statusItem__Rbrqc[data-phase=inserted] svg{color:var(--success)}.reply-draft_statusItem__Rbrqc[data-phase=error]{color:var(--danger)}.reply-draft_bodyClip__cxnhC{min-width:0}.reply-draft_body__HPJFF{display:grid;min-height:66px;padding:8px 16px 16px;box-sizing:content-box}.reply-draft_body__HPJFF>*{grid-area:1/1;min-width:0}.reply-draft_textLayer__GgaOr{min-width:0}.reply-draft_text__dfcIc{margin:-2px -6px;border-radius:8px;padding:2px 6px;color:var(--foreground);line-height:22px;white-space:pre-wrap;overflow-wrap:anywhere;outline:none}.reply-draft_text__dfcIc[data-editable]{cursor:text}.reply-draft_text__dfcIc[data-editable]:focus-visible{background:color-mix(in oklab,var(--surface) 70%,transparent)}.reply-draft_chunk__mjOQ2{animation:reply-draft_rd-chunk-in__xX_Gj .14s var(--ease-standard) both}@keyframes reply-draft_rd-chunk-in__xX_Gj{0%{opacity:0}to{opacity:1}}.reply-draft_placeholder__M983Y{margin:0;color:var(--text-muted);line-height:22px}.reply-draft_skeleton__roXY2{display:grid;grid-auto-rows:22px;align-items:center}.reply-draft_skeleton__roXY2 span{display:block;height:8px;border-radius:4px;background:color-mix(in oklab,var(--foreground) 7%,transparent)}.reply-draft_errorBlock__vsw08{display:flex;align-items:flex-start;gap:8px;color:var(--danger);line-height:22px}.reply-draft_errorBlock__vsw08 svg{flex:none;margin-top:3px}.reply-draft_errorTitle__yyJ0E{color:var(--foreground);font-weight:500}.reply-draft_errorCopy__fAVp8{color:var(--text-secondary)}.reply-draft_controls__73J72{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;border-top:1px solid var(--border-subtle);padding:8px}.reply-draft_divider__Ih0U8{width:1px;height:16px;background:var(--border)}.reply-draft_chipGroup__rxJeu{display:inline-flex;gap:2px}.reply-draft_option__OLxn1{position:relative;display:inline-flex;height:28px;align-items:center;border:0;border-radius:999px;padding:0 12px;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);line-height:16px;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.reply-draft_option__OLxn1[data-selected]{color:var(--foreground);cursor:default}@media (hover:hover) and (pointer:fine){.reply-draft_option__OLxn1:not([data-selected]):hover{color:var(--foreground);background:color-mix(in oklab,var(--foreground) 5%,transparent)}}.reply-draft_optionHighlight__dFit_{position:absolute;inset:0;border-radius:inherit;background:var(--surface);box-shadow:inset 0 0 0 1px var(--border)}.reply-draft_optionLabel__HWLZn{position:relative}.reply-draft_footer__Ib4vv{display:flex;align-items:center;justify-content:space-between;gap:8px}.reply-draft_footerButton__AHc8H.reply-draft_footerButton__AHc8H{gap:8px;margin-left:-8px;padding-inline:8px}.reply-draft_draftButton__DcbZR.reply-draft_draftButton__DcbZR{gap:8px}.reply-draft_insert__mn5i6.reply-draft_insert__mn5i6{min-width:88px}.reply-draft_swap__WdV9C{display:inline-grid;justify-items:center}.reply-draft_swap__WdV9C>span{display:inline-flex;grid-area:1/1;align-items:center;gap:6px;opacity:0;transition:opacity .1s var(--ease-standard)}.reply-draft_swap__WdV9C>span[data-on]{opacity:1;transition-duration:.16s}.reply-draft_swap__WdV9C>span:not([data-on]){visibility:hidden;transition:opacity .1s var(--ease-standard),visibility 0s linear .1s}@media (pointer:coarse){.reply-draft_option__OLxn1{height:32px}}@media (pointer:coarse){.reply-draft_suggestion__5hmL5{height:36px}}@media (prefers-reduced-motion:reduce){.reply-draft_chunk__mjOQ2{animation:none}}@media (prefers-reduced-motion:reduce){.reply-draft_suggestion__5hmL5:active{transform:none}}", {"root":"reply-draft_root__e2SwR","srOnly":"reply-draft_srOnly__hpjqx","card":"reply-draft_card__s2Z_h","mailHead":"reply-draft_mailHead__j83Ys","subject":"reply-draft_subject__5q_zH","source":"reply-draft_source__Y3sA8","sender":"reply-draft_sender__wMloR","avatar":"reply-draft_avatar__tjDGU","senderText":"reply-draft_senderText__bBMzn","senderLine":"reply-draft_senderLine___lwsF","senderName":"reply-draft_senderName__Jl2ed","senderEmail":"reply-draft_senderEmail__BXI0e","meta":"reply-draft_meta__X8N5j","time":"reply-draft_time__kbYof","mailBody":"reply-draft_mailBody__I_FD6","reply":"reply-draft_reply__rW2Yr","suggestions":"reply-draft_suggestions__yn13M","suggestion":"reply-draft_suggestion__5hmL5","draft":"reply-draft_draft__Ra6Gx","draftHead":"reply-draft_draftHead__aGxG6","model":"reply-draft_model__CTwpU","modelMark":"reply-draft_modelMark__KRBCD","modelName":"reply-draft_modelName__uJkaw","status":"reply-draft_status__48wze","statusItem":"reply-draft_statusItem__Rbrqc","bodyClip":"reply-draft_bodyClip__cxnhC","body":"reply-draft_body__HPJFF","textLayer":"reply-draft_textLayer__GgaOr","text":"reply-draft_text__dfcIc","chunk":"reply-draft_chunk__mjOQ2","rd-chunk-in":"reply-draft_rd-chunk-in__xX_Gj","placeholder":"reply-draft_placeholder__M983Y","skeleton":"reply-draft_skeleton__roXY2","errorBlock":"reply-draft_errorBlock__vsw08","errorTitle":"reply-draft_errorTitle__yyJ0E","errorCopy":"reply-draft_errorCopy__fAVp8","controls":"reply-draft_controls__73J72","divider":"reply-draft_divider__Ih0U8","chipGroup":"reply-draft_chipGroup__rxJeu","option":"reply-draft_option__OLxn1","optionHighlight":"reply-draft_optionHighlight__dFit_","optionLabel":"reply-draft_optionLabel__HWLZn","footer":"reply-draft_footer__Ib4vv","footerButton":"reply-draft_footerButton__AHc8H","draftButton":"reply-draft_draftButton__DcbZR","insert":"reply-draft_insert__mn5i6","swap":"reply-draft_swap__WdV9C"});
A.reg(86272, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr"
        }
      ],
      ["path", { d: "M20 2v4", key: "1rf3ol" }],
      ["path", { d: "M22 4h-4", key: "gwowj6" }],
      ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
    ],
    aliases: ["stars"]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(92970, ".demo{display:grid;width:100%;justify-items:center;gap:12px;padding:24px 16px}\n.toolbar{display:flex;width:100%;max-width:600px;justify-content:flex-end}\n.toggle{border:0;border-radius:999px;padding:4px 8px;background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-xs);line-height:16px;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.toggle:hover,.toggle[aria-pressed=true]{color:var(--foreground)}", {"demo":"demo","toolbar":"toolbar","toggle":"toggle"});
A.reg(97604, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ReplyDraftDemo: () => F, default: () => P });
  var r = a(95155), i = a(12115), n = a(92171), s = a(25354), l = a(80642), o = a(18310), d = a(64577), c = a(35484), u = a(86272), h = a(92298), m = a(92218), p = a(51288), f = a(52898), g = a(7770), y = a(67752);
  let v = [
    { value: "friendly", label: "Friendly" },
    { value: "concise", label: "Concise" },
    { value: "formal", label: "Formal" }
  ], w = [
    { value: "short", label: "Short" },
    { value: "medium", label: "Medium" },
    { value: "long", label: "Long" }
  ], _ = {
    from: {
      name: "Diane Foster",
      email: "diane.foster@haldenlogistics.com",
      avatar: (0, y.my)("diane-foster")
    },
    to: "me",
    subject: "Renewal call next week and an SSO question",
    body: "Hi Ryan,\n\nThanks for the updated quote. Before we sign the renewal for 180 seats, could we move Wednesday's call to Thursday afternoon? Our IT lead also wants to confirm that SAML SSO with Okta is included on the Business plan.\n\nBest,\nDiane",
    receivedAt: "9:14 AM"
  }, b = [
    { id: "thursday", label: "Thursday works" },
    { id: "friday", label: "Suggest Friday" },
    { id: "loop-in", label: "Loop in Daniel" }
  ], x = { name: "Claude Sonnet 5.5" }, k = {
    thursday: {
      friendly: [
        "Thursday afternoon works great, I've moved our call to 2:00 PM and sent you an updated invite.",
        "Good news for your IT lead too: SAML SSO with Okta is included on the Business plan at no extra cost.",
        "Happy to send our Okta setup guide beforehand so they can take a look.",
        "Looking forward to getting all 180 seats renewed with you!"
      ],
      concise: [
        "Thursday at 2:00 PM works, updated invite sent.",
        "SAML SSO with Okta is included on the Business plan.",
        "I can share the Okta setup guide if useful.",
        "The renewal for 180 seats is ready to sign."
      ],
      formal: [
        "Thank you for your note. I have moved our call to Thursday at 2:00 PM and sent an updated invitation.",
        "I can also confirm that SAML single sign-on with Okta is included in the Business plan.",
        "Should your IT lead wish to review the configuration in advance, I would be glad to share our Okta setup guide.",
        "We look forward to continuing our partnership with the renewal of your 180 seats."
      ]
    },
    friday: {
      friendly: [
        "Thursday's packed on my end, unfortunately. Would Friday at 10:00 AM work instead?",
        "On SSO: yes, SAML with Okta is included on the Business plan, so your IT lead is all set.",
        "If Friday doesn't suit, send me a couple of times and I'll make one work.",
        "Thanks again for the quick turnaround on the quote!"
      ],
      concise: [
        "Thursday is full for me. Does Friday at 10:00 AM work?",
        "SAML SSO with Okta is included on Business.",
        "Otherwise, send two times that suit you.",
        "The quote stays valid through November 14."
      ],
      formal: [
        "Unfortunately, I am unavailable on Thursday afternoon. Might Friday at 10:00 AM suit you instead?",
        "Regarding your IT lead's question, SAML single sign-on with Okta is included in the Business plan.",
        "If Friday is not convenient, please let me know a few times that work for your team.",
        "The quote remains valid through November 14."
      ]
    },
    "loop-in": {
      friendly: [
        "Thursday afternoon works, I'll send an invite for 2:00 PM.",
        "I'm looping in Daniel Kim from our solutions team, who set up Okta SSO for three customers this month.",
        "He can join the call and answer anything your IT lead throws at him.",
        "Thanks for keeping things moving, Diane!"
      ],
      concise: [
        "Thursday at 2:00 PM works, invite to follow.",
        "Adding Daniel Kim from solutions for the SSO questions.",
        "He'll join the call to cover the Okta setup.",
        "Renewal paperwork is ready when you are."
      ],
      formal: [
        "Thursday at 2:00 PM suits us well, and I will send an invitation shortly.",
        "I have copied my colleague Daniel Kim, a solutions engineer, who can address your IT lead's questions about Okta SSO.",
        "He will join the call to walk through the configuration in detail.",
        "Thank you for your continued partnership."
      ]
    }
  }, j = {
    friendly: (e2) => `Hi ${e2},`,
    concise: (e2) => `Hi ${e2},`,
    formal: (e2) => `Dear ${e2},`
  }, A = {
    friendly: "Talk soon,\nRyan",
    concise: "Best,\nRyan",
    formal: "Kind regards,\nRyan Sullivan"
  }, N = (e2, t2) => new Promise((a2, r2) => {
    if (t2.aborted) return void r2(t2.reason);
    let i2 = setTimeout(() => {
      t2.removeEventListener("abort", n2), a2();
    }, e2), n2 = () => {
      clearTimeout(i2), r2(t2.reason);
    };
    t2.addEventListener("abort", n2, { once: true });
  });
  async function* T(e2, t2, a2 = 34) {
    for (let r2 of (function(e3) {
      let t3 = e3.match(/\S+\s*/g) ?? [], a3 = [], r3 = 0, i2 = 0;
      for (; r3 < t3.length; ) {
        let e4 = 3 + (7 * i2 + 3) % 6;
        a3.push(t3.slice(r3, r3 + e4).join("")), r3 += e4, i2 += 1;
      }
      let n2 = e3.match(/^\s*/)?.[0] ?? "";
      return n2 && a3.length && (a3[0] = n2 + a3[0]), a3;
    })(e2))
      await N(a2, t2), yield r2;
  }
  let C = (e2) => {
    let t2, a2, r2, i2 = (t2 = (k[e2.suggestion?.id ?? "thursday"] ?? k.thursday)[e2.tone], a2 = e2.message.from.name.split(" ")[0] ?? e2.message.from.name, r2 = "short" === e2.length ? t2.slice(0, 2).join(" ") : "medium" === e2.length ? t2.slice(0, 3).join(" ") : `${t2.slice(0, 2).join(" ")}

${t2.slice(2).join(" ")}`, `${j[e2.tone](a2)}

${r2}

${A[e2.tone]}`);
    return "rewrite" === e2.mode ? N(420, e2.signal).then(() => i2) : (async function* () {
      await N(620, e2.signal), yield* T(i2, e2.signal);
    })();
  };
  function S({ title: e2 = "Claude", ...t2 }) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, r.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function E({ title: e2 = "Gmail", ...t2 }) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, r.jsx)("path", {
        fill: "#EA4335",
        d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
      })
    });
  }
  var I = a(30894), L = a.n(I);
  let M = (e2) => v.find((t2) => t2.value === e2)?.label ?? e2, R = (e2) => w.find((t2) => t2.value === e2)?.label ?? e2, O = (e2) => "object" == typeof e2 && null !== e2 && Symbol.asyncIterator in e2;
  async function B(e2, t2) {
    if (!O(e2)) return e2;
    let a2 = "";
    for await (let r2 of e2) {
      if (t2.aborted) break;
      a2 += r2;
    }
    return a2;
  }
  function $({ label: e2, options: t2, value: a2, onChange: n2, reduced: l2 }) {
    let o2 = (0, i.useId)(), d2 = (0, i.useRef)([]);
    return (0, r.jsx)("div", {
      className: L().chipGroup,
      role: "radiogroup",
      "aria-label": e2,
      children: t2.map((e3, i2) => {
        let c2 = e3.value === a2;
        return (0, r.jsxs)(
          "button",
          {
            ref: (e4) => {
              d2.current[i2] = e4;
            },
            type: "button",
            role: "radio",
            "aria-checked": c2,
            tabIndex: c2 ? 0 : -1,
            className: L().option,
            "data-selected": c2 || void 0,
            onClick: () => {
              c2 || n2(e3.value);
            },
            onKeyDown: (e4) => ((e5, a3) => {
              let r2 = t2.length - 1, i3 = "ArrowRight" === e5.key || "ArrowDown" === e5.key ? a3 === r2 ? 0 : a3 + 1 : "ArrowLeft" === e5.key || "ArrowUp" === e5.key ? 0 === a3 ? r2 : a3 - 1 : "Home" === e5.key ? 0 : "End" === e5.key ? r2 : -1;
              if (i3 < 0) return;
              e5.preventDefault();
              let s2 = t2[i3];
              s2 && (n2(s2.value), d2.current[i3]?.focus());
            })(e4, i2),
            children: [
              c2 ? (0, r.jsx)(s.PY1.span, {
                layoutId: o2,
                className: L().optionHighlight,
                "aria-hidden": "true",
                transition: l2 ? { duration: 0 } : { type: "spring", visualDuration: 0.24, bounce: 0 }
              }) : null,
              (0, r.jsx)("span", {
                className: L().optionLabel,
                children: e3.label
              })
            ]
          },
          e3.value
        );
      })
    });
  }
  function z({ phase: e2, reduced: t2, hadDraft: a2 }) {
    let i2 = e2, n2 = null;
    return "thinking" === e2 ? (i2 = a2 ? "drafting" : "reading", n2 = (0, r.jsx)(f.n, { children: a2 ? "Drafting" : "Reading email" })) : "streaming" === e2 ? n2 = (0, r.jsx)(f.n, { children: "Writing" }) : "rewriting" === e2 ? n2 = (0, r.jsx)(f.n, { children: "Rewriting" }) : "ready" === e2 || "inserting" === e2 ? (i2 = "ready", n2 = (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(d.A, {
          size: 14,
          strokeWidth: 2,
          "aria-hidden": "true"
        }),
        "Draft ready"
      ]
    })) : "inserted" === e2 ? n2 = (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(d.A, {
          size: 14,
          strokeWidth: 2,
          "aria-hidden": "true"
        }),
        "Inserted"
      ]
    }) : "error" === e2 && (n2 = (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(c.A, {
          size: 14,
          strokeWidth: 2,
          "aria-hidden": "true"
        }),
        "Failed"
      ]
    })), (0, r.jsx)("span", {
      className: L().status,
      "aria-hidden": "true",
      children: (0, r.jsx)(l.N, {
        initial: false,
        children: n2 ? (0, r.jsx)(
          s.PY1.span,
          {
            className: L().statusItem,
            "data-phase": e2,
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.16 * !t2,
                ease: [...g.T.ease.standard]
              }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !t2 } },
            children: n2
          },
          i2
        ) : null
      })
    });
  }
  function D({
    message: e2 = _,
    suggestions: t2 = b,
    defaultSuggestion: a2,
    onSuggestionSelect: f2,
    model: y2 = x,
    tone: k2,
    defaultTone: j2 = "friendly",
    onToneChange: A2,
    length: N2,
    defaultLength: I2 = "medium",
    onLengthChange: H2,
    generate: W2,
    onInsert: F2,
    onDraft: P2,
    autoStart: q = true,
    autoPlay: G,
    className: K
  }) {
    let Y, J, U = (0, o.I)() ?? false, [V, X] = (function() {
      let e3 = (0, i.useRef)(null), [t3, a3] = (0, i.useState)(false);
      return (0, i.useEffect)(() => {
        let t4 = e3.current;
        if (!t4) return;
        if ("u" < typeof IntersectionObserver) {
          let e4 = requestAnimationFrame(() => a3(true));
          return () => cancelAnimationFrame(e4);
        }
        let r2 = new IntersectionObserver(
          ([e4]) => a3(e4?.isIntersecting ?? false),
          { threshold: 0.2 }
        );
        return r2.observe(t4), () => r2.disconnect();
      }, []), [e3, t3];
    })(), { outer: Z, inner: Q } = (Y = (0, i.useRef)(null), J = (0, i.useRef)(null), (0, i.useEffect)(() => {
      let e3, t3 = Y.current, a3 = J.current;
      if (!t3 || !a3 || "u" < typeof ResizeObserver) return;
      let r2 = a3.offsetHeight, i2 = a3.offsetWidth, s2 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, l2 = new ResizeObserver(() => {
        let l3 = a3.offsetHeight, o2 = a3.offsetWidth, d2 = o2 !== i2;
        if (i2 = o2, l3 === r2) return;
        let c2 = e3 ? t3.getBoundingClientRect().height : r2;
        (r2 = l3, e3?.stop(), U || d2) ? s2() : (t3.style.overflow = "hidden", e3 = (0, n.i)(
          t3,
          { height: [c2, l3] },
          {
            type: "spring",
            visualDuration: 0.24,
            bounce: 0,
            onComplete: s2
          }
        ));
      });
      return l2.observe(a3), () => {
        l2.disconnect(), e3?.stop();
      };
    }, [U]), { outer: Y, inner: J }), [ee, et] = (0, i.useState)(j2), [ea, er] = (0, i.useState)(I2), ei = k2 ?? ee, en = N2 ?? ea, [es, el] = (0, i.useState)(a2 ?? t2[0]?.id), [eo, ed] = (0, i.useState)("empty"), [ec, eu] = (0, i.useState)(0), [eh, em] = (0, i.useState)([]), [ep, ef] = (0, i.useState)(""), [eg, ey] = (0, i.useState)(), [ev, ew] = (0, i.useState)(""), [e_, eb] = (0, i.useState)(""), [ex, ek] = (0, i.useState)(false), ej = (0, i.useRef)(null), eA = (0, i.useRef)(""), eN = (0, i.useRef)({
      message: e2,
      suggestions: t2,
      generate: W2,
      onDraft: P2,
      model: y2
    });
    (0, i.useEffect)(() => {
      eN.current = {
        message: e2,
        suggestions: t2,
        generate: W2,
        onDraft: P2,
        model: y2
      };
    }), (0, i.useEffect)(() => () => ej.current?.abort(), []);
    let eT = ep.length > 0 || eh.length > 0, eC = "thinking" === eo || "streaming" === eo || "rewriting" === eo, eS = !W2, eE = (G ?? eS) && !ex, eI = (0, i.useCallback)(
      async (e3, t3) => {
        ej.current?.abort();
        let a3 = new AbortController();
        ej.current = a3;
        let { signal: r2 } = a3, {
          message: i2,
          suggestions: n2,
          generate: s2,
          onDraft: l2,
          model: o2
        } = eN.current, d2 = n2.find((e4) => e4.id === t3.suggestionId), c2 = eA.current, u2 = { tone: t3.tone, length: t3.length, suggestion: d2 }, h2 = (e4) => {
          eA.current = e4, ef(e4), em([]), ed("ready"), ey(void 0), eb(
            `Draft ready: ${M(t3.tone).toLowerCase()}, ${R(t3.length).toLowerCase()}.`
          ), l2?.(e4, u2);
        };
        "draft" === e3 && c2 && ey(Q.current?.offsetHeight), ew(""), ed("draft" === e3 ? "thinking" : "rewriting"), eb(
          "draft" === e3 ? `Drafting a reply with ${o2.name}${eS ? ", simulated" : ""}.` : `Rewriting as ${M(t3.tone).toLowerCase()}, ${R(t3.length).toLowerCase()}.`
        );
        let m2 = "";
        try {
          let a4 = (s2 ?? C)({
            message: i2,
            tone: t3.tone,
            length: t3.length,
            suggestion: d2,
            mode: e3,
            previous: c2 || void 0,
            signal: r2
          });
          if ("rewrite" === e3 || U) {
            let e4 = (await B(a4, r2)).trim();
            if (r2.aborted) return;
            if (!e4) throw Error("The model returned an empty draft.");
            eu((e5) => e5 + 1), h2(e4);
            return;
          }
          for await (let e4 of O(a4) ? a4 : T(await a4, r2)) {
            if (r2.aborted) return;
            if (m2) m2 += e4, em((t4) => [...t4, e4]);
            else {
              let t4 = e4.trimStart();
              if (!t4) continue;
              m2 = t4, eu((e5) => e5 + 1), ef(""), em([t4]), ed("streaming");
            }
          }
          if (r2.aborted) return;
          if (!m2.trim()) throw Error("The model returned an empty draft.");
          if (await new Promise((e4) => {
            let t4 = setTimeout(e4, 150);
            r2.addEventListener(
              "abort",
              () => {
                clearTimeout(t4), e4();
              },
              { once: true }
            );
          }), r2.aborted)
            return;
          h2(m2.trimEnd());
        } catch (t4) {
          if (r2.aborted) return;
          let e4 = t4 instanceof Error && t4.message ? t4.message : "Something went wrong.";
          ew(e4), m2 && (eA.current = m2.trimEnd(), ef(m2.trimEnd())), em([]), ed("error"), ey(void 0), eb(`Couldn't draft a reply. ${e4}`);
        }
      },
      [Q, U, eS]
    ), eL = `${ei}|${en}`, eM = (0, i.useRef)(eL), eR = (0, i.useRef)(eo);
    (0, i.useEffect)(() => {
      eR.current = eo;
    }, [eo]), (0, i.useEffect)(() => {
      if (eM.current === eL) return;
      eM.current = eL;
      let e3 = eR.current;
      "empty" === e3 || eI(
        "thinking" !== e3 && "streaming" !== e3 && ("error" !== e3 || eA.current) ? "rewrite" : "draft",
        { tone: ei, length: en, suggestionId: es }
      );
    }, [eL, ei, en, es, eI]);
    let eO = (0, i.useCallback)(
      (e3) => {
        void 0 === k2 && et(e3), A2?.(e3);
      },
      [k2, A2]
    ), eB = (0, i.useCallback)(
      (e3) => {
        void 0 === N2 && er(e3), H2?.(e3);
      },
      [N2, H2]
    ), e$ = (0, i.useCallback)(
      (e3) => {
        el(e3.id), f2?.(e3), eI("draft", { tone: ei, length: en, suggestionId: e3.id });
      },
      [f2, eI, ei, en]
    ), ez = (0, i.useCallback)(() => {
      eI("draft", { tone: ei, length: en, suggestionId: es });
    }, [eI, ei, en, es]), eD = (0, i.useCallback)(async () => {
      if ("ready" !== eo) return;
      let e3 = eA.current.trim();
      if (!e3) return;
      let a3 = t2.find((e4) => e4.id === es);
      ed("inserting");
      try {
        F2 ? await F2(e3, { tone: ei, length: en, suggestion: a3 }) : await new Promise((e4) => setTimeout(e4, 420)), ed("inserted"), eb(
          F2 ? "Draft inserted into your reply." : "Draft inserted into your reply. Simulated, nothing was sent."
        );
      } catch (e4) {
        ed("ready"), eb(
          `Couldn't insert the draft. ${e4 instanceof Error ? e4.message : ""}`.trim()
        );
      }
    }, [eo, t2, es, F2, ei, en]), eH = (0, i.useRef)(false);
    (0, i.useEffect)(() => {
      q && X && !eH.current && (eH.current = true, eI("draft", { tone: ei, length: en, suggestionId: es }));
    }, [q, X, eI, ei, en, es]);
    let [eW, eF] = (0, i.useState)(0);
    (0, i.useEffect)(() => {
      if (!eE || !X || "ready" !== eo && "inserted" !== eo) return;
      let e3 = setTimeout(
        () => {
          let e4 = t2[1] ?? t2[0], a3 = t2[0], r2 = [
            () => eO("concise"),
            () => eO("formal"),
            () => eB("long"),
            () => {
              e4 ? e$(e4) : ez();
            },
            () => {
              eO("friendly"), eB("short");
            },
            () => {
              eD();
            },
            () => eB("medium"),
            () => {
              a3 ? e$(a3) : ez();
            }
          ];
          r2[eW % r2.length]?.(), eF((e5) => e5 + 1);
        },
        "inserted" === eo ? 1300 : 1900
      );
      return () => clearTimeout(e3);
    }, [eE, X, eo, eW, t2, eO, eB, e$, ez, eD]);
    let eP = () => {
      ex || ek(true);
    }, eq = "ready" === eo || "inserted" === eo || "error" === eo && ep.length > 0, eG = "thinking" === eo && !eT, eK = "empty" === eo, eY = "error" === eo && !eT, eJ = ("thinking" === eo || "rewriting" === eo) && eT, eU = { duration: 0.16 * !U, ease: [...g.T.ease.standard] }, eV = { opacity: 0, transition: { duration: 0.1 * !U } }, eX = e2.body.split(/\n{2,}/);
    return (0, r.jsx)("div", {
      ref: V,
      className: ((...e3) => e3.filter(Boolean).join(" "))(L().root, K),
      onPointerDownCapture: eP,
      onKeyDownCapture: (e3) => {
        eP(), (e3.metaKey || e3.ctrlKey) && "Enter" === e3.key && "ready" === eo && (e3.preventDefault(), eD());
      },
      children: (0, r.jsxs)("article", {
        className: L().card,
        "aria-label": `Reply to ${e2.from.name}`,
        children: [
          (0, r.jsxs)("header", {
            className: L().mailHead,
            children: [
              (0, r.jsx)("h3", { className: L().subject, children: e2.subject }),
              (0, r.jsx)(E, {
                className: L().source,
                width: 16,
                height: 16,
                title: "Gmail"
              })
            ]
          }),
          (0, r.jsxs)("div", {
            className: L().sender,
            children: [
              (0, r.jsx)(m.e, {
                name: e2.from.name,
                src: e2.from.avatar,
                size: "md",
                className: L().avatar
              }),
              (0, r.jsxs)("div", {
                className: L().senderText,
                children: [
                  (0, r.jsxs)("div", {
                    className: L().senderLine,
                    children: [
                      (0, r.jsx)("span", {
                        className: L().senderName,
                        children: e2.from.name
                      }),
                      (0, r.jsx)("span", {
                        className: L().senderEmail,
                        children: e2.from.email
                      })
                    ]
                  }),
                  e2.to ? (0, r.jsxs)("span", {
                    className: L().meta,
                    children: ["to ", e2.to]
                  }) : null
                ]
              }),
              (0, r.jsx)("span", {
                className: L().time,
                children: e2.receivedAt
              })
            ]
          }),
          (0, r.jsx)("div", {
            className: L().mailBody,
            children: eX.map((e3, t3) => (0, r.jsx)("p", { children: e3 }, t3))
          }),
          (0, r.jsxs)("section", {
            className: L().reply,
            "aria-label": "AI reply",
            children: [
              t2.length ? (0, r.jsx)("div", {
                className: L().suggestions,
                role: "group",
                "aria-label": "Quick replies",
                children: t2.map(
                  (e3) => (0, r.jsx)(
                    "button",
                    {
                      type: "button",
                      className: L().suggestion,
                      "aria-pressed": e3.id === es,
                      onClick: () => e$(e3),
                      children: e3.label
                    },
                    e3.id
                  )
                )
              }) : null,
              (0, r.jsxs)("div", {
                className: L().draft,
                "data-phase": eo,
                children: [
                  (0, r.jsxs)("div", {
                    className: L().draftHead,
                    children: [
                      (0, r.jsxs)("span", {
                        className: L().model,
                        children: [
                          (0, r.jsx)("span", {
                            className: L().modelMark,
                            children: y2.mark ?? (0, r.jsx)(S, {
                              width: 16,
                              height: 16,
                              title: "",
                              "aria-hidden": "true"
                            })
                          }),
                          (0, r.jsx)("span", {
                            className: L().modelName,
                            children: y2.name
                          })
                        ]
                      }),
                      (0, r.jsx)(z, { phase: eo, reduced: U, hadDraft: eT })
                    ]
                  }),
                  (0, r.jsx)("div", {
                    ref: Z,
                    className: L().bodyClip,
                    children: (0, r.jsx)("div", {
                      ref: Q,
                      className: L().body,
                      style: eg ? { minHeight: eg } : void 0,
                      "aria-busy": eC || void 0,
                      children: (0, r.jsxs)(l.N, {
                        initial: false,
                        children: [
                          eK ? (0, r.jsxs)(
                            s.PY1.p,
                            {
                              className: L().placeholder,
                              initial: { opacity: 0 },
                              animate: { opacity: 1, transition: eU },
                              exit: eV,
                              children: [
                                "Pick a quick reply, or let ",
                                y2.name.split(" ")[0],
                                " draft one from the email."
                              ]
                            },
                            "empty"
                          ) : null,
                          eG ? (0, r.jsxs)(
                            s.PY1.div,
                            {
                              className: L().skeleton,
                              "aria-hidden": "true",
                              initial: { opacity: 0 },
                              animate: { opacity: 1, transition: eU },
                              exit: eV,
                              children: [
                                (0, r.jsx)("span", {
                                  style: { width: "34%" }
                                }),
                                (0, r.jsx)("span", {
                                  style: { width: "92%" }
                                }),
                                (0, r.jsx)("span", {
                                  style: { width: "78%" }
                                })
                              ]
                            },
                            "skeleton"
                          ) : null,
                          eY ? (0, r.jsxs)(
                            s.PY1.div,
                            {
                              className: L().errorBlock,
                              role: "alert",
                              initial: { opacity: 0 },
                              animate: { opacity: 1, transition: eU },
                              exit: eV,
                              children: [
                                (0, r.jsx)(c.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, r.jsxs)("span", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: L().errorTitle,
                                      children: "Couldn't draft a reply."
                                    }),
                                    " ",
                                    (0, r.jsx)("span", {
                                      className: L().errorCopy,
                                      children: ev
                                    })
                                  ]
                                })
                              ]
                            },
                            "error"
                          ) : null,
                          eT ? (0, r.jsx)(
                            s.PY1.div,
                            {
                              className: L().textLayer,
                              initial: { opacity: 0, y: 2 * !U },
                              animate: {
                                opacity: eJ ? 0.4 : 1,
                                y: 0,
                                transition: {
                                  ...eU,
                                  delay: U || eJ ? 0 : 0.04
                                }
                              },
                              exit: eV,
                              children: eh.length ? (0, r.jsx)("div", {
                                className: L().text,
                                children: eh.map(
                                  (e3, t3) => (0, r.jsx)(
                                    "span",
                                    {
                                      className: L().chunk,
                                      children: e3
                                    },
                                    t3
                                  )
                                )
                              }) : (0, r.jsx)("div", {
                                className: L().text,
                                "data-editable": eq || void 0,
                                contentEditable: !!eq && "plaintext-only",
                                suppressContentEditableWarning: true,
                                role: eq ? "textbox" : void 0,
                                "aria-multiline": eq || void 0,
                                "aria-label": eq ? "Reply draft, editable" : void 0,
                                onInput: (e3) => {
                                  eA.current = e3.currentTarget.innerText, "inserted" === eo && ed("ready");
                                },
                                children: ep
                              })
                            },
                            `v${ec}`
                          ) : null
                        ]
                      })
                    })
                  }),
                  (0, r.jsxs)("div", {
                    className: L().controls,
                    children: [
                      (0, r.jsx)($, {
                        label: "Tone",
                        options: v,
                        value: ei,
                        onChange: eO,
                        reduced: U
                      }),
                      (0, r.jsx)("span", {
                        className: L().divider,
                        "aria-hidden": "true"
                      }),
                      (0, r.jsx)($, {
                        label: "Length",
                        options: w,
                        value: en,
                        onChange: eB,
                        reduced: U
                      })
                    ]
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: L().footer,
                children: [
                  "empty" === eo ? (0, r.jsxs)(p.$, {
                    variant: "secondary",
                    size: "sm",
                    className: L().draftButton,
                    onClick: ez,
                    children: [
                      (0, r.jsx)(u.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Draft reply"
                    ]
                  }) : (0, r.jsxs)(p.$, {
                    variant: "ghost",
                    size: "sm",
                    className: L().footerButton,
                    onClick: ez,
                    children: [
                      (0, r.jsx)(h.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "error" === eo ? "Try again" : "Regenerate"
                    ]
                  }),
                  (0, r.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    className: L().insert,
                    onClick: () => void eD(),
                    loading: "inserting" === eo,
                    disabled: "ready" !== eo && "inserting" !== eo && "inserted" !== eo,
                    "aria-disabled": "inserted" === eo || void 0,
                    children: (0, r.jsxs)("span", {
                      className: L().swap,
                      children: [
                        (0, r.jsx)("span", {
                          "data-on": "inserted" !== eo || void 0,
                          children: "Insert"
                        }),
                        (0, r.jsxs)("span", {
                          "data-on": "inserted" === eo || void 0,
                          children: [
                            (0, r.jsx)(d.A, {
                              size: 16,
                              strokeWidth: 2,
                              "aria-hidden": "true"
                            }),
                            "Inserted"
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          }),
          (0, r.jsx)("p", {
            className: L().srOnly,
            role: "status",
            "aria-live": "polite",
            children: e_
          })
        ]
      })
    });
  }
  var H = a(92970), W = a.n(H);
  function F() {
    let [e2, t2] = (0, i.useState)(false), a2 = (0, i.useRef)(false), n2 = (0, i.useCallback)(
      (e3) => a2.current ? (a2.current = false, t2(false), new Promise((t3, a3) => {
        let r2 = setTimeout(
          () => a3(Error("The model timed out. Nothing was sent.")),
          700
        );
        e3.signal.addEventListener("abort", () => clearTimeout(r2), {
          once: true
        });
      })) : C(e3),
      []
    );
    return (0, r.jsxs)("div", {
      className: W().demo,
      children: [
        (0, r.jsx)("div", {
          className: W().toolbar,
          children: (0, r.jsx)("button", {
            type: "button",
            className: W().toggle,
            "aria-pressed": e2,
            onClick: () => {
              a2.current = !e2, t2(!e2);
            },
            children: e2 ? "Next draft will fail" : "Fail the next draft"
          })
        }),
        (0, r.jsx)(D, { generate: n2, autoPlay: true })
      ]
    });
  }
  let P = F;
}

__m(__module,__exports,__require);
});
A.cssFor("reply-draft", [30894,92970]);
A.item("reply-draft", {entry:97604, export:"ReplyDraftDemo", kind:"component", tier:"pro", unresolved:[]});
})();