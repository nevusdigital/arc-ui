/* smart-form-fill (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.regCss(12230, ".smart-form-fill_root__eFXDB{--sff-gap:16px;--sff-input-h:40px;--sff-radius-input:12px;container-type:inline-size;display:flex;width:100%;max-width:860px;min-width:0;flex-direction:column;gap:var(--sff-gap);padding:20px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:20px}.smart-form-fill_srOnly__x9gv2{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.smart-form-fill_head__WZaUs{display:flex;min-width:0;flex-direction:column;gap:4px}.smart-form-fill_title__7BO40{margin:0;font-size:var(--text-base);font-weight:500;line-height:24px}.smart-form-fill_description__E6IQd{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:20px;text-wrap:pretty}.smart-form-fill_body__LAZin{display:grid;min-width:0;gap:var(--sff-gap);grid-template-columns:minmax(0,1fr)}.smart-form-fill_well__i5rhu{display:flex;min-width:0;height:232px;flex-direction:column;border:1px solid var(--border);border-radius:var(--radius-control);background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface));transition:border-color var(--duration-fast,.16s) ease-out,background-color var(--duration-fast,.16s) ease-out}.smart-form-fill_well__i5rhu:focus-within{border-color:var(--border-strong,var(--border))}.smart-form-fill_editor__UKbQh{position:relative;min-height:0;flex:1}.smart-form-fill_layer__MEeFK{position:absolute;inset:0}.smart-form-fill_source__MjKJz,.smart-form-fill_textarea__K94yi{display:block;width:100%;height:100%;margin:0;padding:12px 16px;border:0;border-radius:var(--radius-control) var(--radius-control) 0 0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:22px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;white-space:pre-wrap;overflow-wrap:anywhere;--focus-outline-offset:-2px}.smart-form-fill_textarea__K94yi{resize:none;outline:none}.smart-form-fill_textarea__K94yi::placeholder{color:var(--text-muted);opacity:1}.smart-form-fill_source__MjKJz{color:var(--text-secondary)}.smart-form-fill_span__VylkT{margin:0 -2px;padding:1px 2px;border-radius:4px;background:color-mix(in oklab,var(--accent) 9%,transparent);color:var(--foreground);box-decoration-break:clone;-webkit-box-decoration-break:clone;transition:background-color .16s ease-out,color .16s ease-out}.smart-form-fill_span__VylkT[data-review]{background:color-mix(in oklab,var(--warning) 14%,transparent)}.smart-form-fill_span__VylkT[data-active]{background:color-mix(in oklab,var(--accent) 24%,transparent)}.smart-form-fill_span__VylkT[data-review][data-active]{background:color-mix(in oklab,var(--warning) 30%,transparent)}.smart-form-fill_bar___kt0D{display:flex;min-height:48px;align-items:center;justify-content:space-between;gap:12px;padding:6px 6px 6px 16px;border-top:1px solid var(--border-subtle,var(--border))}.smart-form-fill_model__om_fb{display:flex;min-width:0;flex:1;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-xs);line-height:18px}.smart-form-fill_modelMark__JBWM_{display:grid;width:14px;height:14px;flex:none;place-items:center}.smart-form-fill_modelMark__JBWM_ svg{display:block}.smart-form-fill_barText__6y_9m{min-width:0;flex:1}.smart-form-fill_barNum__p05qb{display:inline-grid;justify-items:end;font-variant-numeric:tabular-nums}.smart-form-fill_barNum__p05qb>*{grid-area:1/1}.smart-form-fill_barGhost__pc7_W{visibility:hidden}.smart-form-fill_barActions__LC4Qo{display:flex;flex:none;align-items:center;gap:4px}.smart-form-fill_barButton__OEq6O.smart-form-fill_barButton__OEq6O{min-height:32px;gap:6px;padding-inline:12px;font-size:var(--text-xs)}.smart-form-fill_stopIcon__9srEl{fill:currentColor}.smart-form-fill_hintKey__sHiEd{margin-inline-end:6px}.smart-form-fill_form__rpVTv{display:grid;min-width:0;align-content:start;gap:12px;grid-template-columns:repeat(2,minmax(0,1fr))}.smart-form-fill_field__ODdvH{display:flex;min-width:0;flex-direction:column;gap:6px;grid-column:span 1}.smart-form-fill_field__ODdvH[data-span=\"2\"]{grid-column:1/-1}.smart-form-fill_labelRow__4hCyh{display:flex;height:18px;min-width:0;align-items:center;justify-content:space-between;gap:8px;padding-inline:2px}.smart-form-fill_label__MKjSn{overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);line-height:18px;text-overflow:ellipsis;white-space:nowrap}.smart-form-fill_badgeSlot__zrQ90{position:relative;display:block;height:18px;min-width:0;flex:1}.smart-form-fill_badge__bE6AY{position:absolute;top:0;right:0;display:inline-flex;height:18px;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:18px;white-space:nowrap}.smart-form-fill_dot__J_l9y{width:6px;height:6px;flex:none;border-radius:50%;background:var(--text-muted)}.smart-form-fill_badge__bE6AY[data-tone=success] .smart-form-fill_dot__J_l9y{background:var(--success)}.smart-form-fill_badge__bE6AY[data-tone=warning]{color:var(--text-secondary)}.smart-form-fill_badge__bE6AY[data-tone=warning] .smart-form-fill_dot__J_l9y{background:var(--warning)}.smart-form-fill_control__0alMd{position:relative;display:flex;min-width:0;align-items:center}.smart-form-fill_input__EZRyq{width:100%;min-width:0;height:var(--sff-input-h);padding:0 40px 0 12px;border:1px solid var(--border);border-radius:var(--sff-radius-input);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:20px;text-overflow:ellipsis;outline:none;transition:border-color .16s ease-out,background-color .16s ease-out}.smart-form-fill_input__EZRyq::placeholder{color:var(--text-muted);opacity:1}.smart-form-fill_control__0alMd[data-company] .smart-form-fill_input__EZRyq{padding-left:40px}@media (hover:hover) and (pointer:fine){.smart-form-fill_input__EZRyq:hover{border-color:var(--border-strong,var(--border))}}.smart-form-fill_field__ODdvH[data-state=review] .smart-form-fill_input__EZRyq{border-color:color-mix(in oklab,var(--warning) 55%,var(--border))}.smart-form-fill_input__EZRyq[data-flash=a]{animation:smart-form-fill_sff-flash-a__j4HK0 .9s cubic-bezier(.22,1,.36,1),smart-form-fill_sff-text-a__dpKMy .2s ease-out}.smart-form-fill_input__EZRyq[data-flash=b]{animation:smart-form-fill_sff-flash-b__ri2AF .9s cubic-bezier(.22,1,.36,1),smart-form-fill_sff-text-b__s1UTs .2s ease-out}@keyframes smart-form-fill_sff-flash-a__j4HK0{0%{border-color:color-mix(in oklab,var(--accent) 60%,var(--border));background-color:color-mix(in oklab,var(--accent) 12%,var(--surface))}}@keyframes smart-form-fill_sff-flash-b__ri2AF{0%{border-color:color-mix(in oklab,var(--accent) 60%,var(--border));background-color:color-mix(in oklab,var(--accent) 12%,var(--surface))}}@keyframes smart-form-fill_sff-text-a__dpKMy{0%{color:transparent}}@keyframes smart-form-fill_sff-text-b__s1UTs{0%{color:transparent}}.smart-form-fill_logo__c_3U_{position:absolute;top:50%;left:12px;z-index:1;display:grid;width:16px;height:16px;place-items:center;pointer-events:none;transform:translateY(-50%)}.smart-form-fill_logoItem__Mw4ds{position:absolute;inset:0;display:grid;place-items:center;color:var(--foreground)}.smart-form-fill_logoItem__Mw4ds[data-empty]{color:var(--text-muted)}.smart-form-fill_logoItem__Mw4ds svg{display:block;max-width:16px;max-height:16px}.smart-form-fill_confirm__N_viV{position:absolute;top:50%;right:6px;display:grid;width:28px;height:28px;margin:-14px 0 0;padding:0;place-items:center;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .12s ease-out,color .12s ease-out}.smart-form-fill_confirm__N_viV:active{background:var(--accent-subtle,var(--surface-muted));color:var(--accent)}@media (hover:hover) and (pointer:fine){.smart-form-fill_confirm__N_viV:hover{background:var(--accent-subtle,var(--surface-muted));color:var(--accent)}}.smart-form-fill_foot__0ptrE{display:flex;min-width:0;align-items:center;justify-content:space-between;gap:12px;padding-top:16px;border-top:1px solid var(--border-subtle,var(--border))}.smart-form-fill_status__SnCaP{display:flex;min-width:0;min-height:36px;flex:1;align-items:center;margin:0;color:var(--text-secondary);font-size:var(--text-xs);line-height:18px}.smart-form-fill_statusSwap__SNmlM{width:100%}.smart-form-fill_statusSwap__SNmlM>span{display:flex;align-items:flex-start;gap:8px}.smart-form-fill_statusIcon__Xp_c_{flex:none;margin-top:2px}.smart-form-fill_status__SnCaP[data-tone=success] .smart-form-fill_statusIcon__Xp_c_{color:var(--success)}.smart-form-fill_status__SnCaP[data-tone=warning] .smart-form-fill_statusIcon__Xp_c_{color:var(--warning)}.smart-form-fill_status__SnCaP[data-tone=danger] .smart-form-fill_statusIcon__Xp_c_{color:var(--danger)}.smart-form-fill_statusText__64f2O{display:-webkit-box;min-width:0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-wrap:pretty}.smart-form-fill_actions__LIYi1{display:flex;flex:none;align-items:center;gap:8px}.smart-form-fill_footButton__xJNGg.smart-form-fill_footButton__xJNGg{min-height:36px;gap:6px}.smart-form-fill_swap__PCf_6{position:relative;display:grid;min-width:0}.smart-form-fill_swapItem__fbJLE{display:block;min-width:0;overflow:hidden;grid-area:1/1;text-overflow:ellipsis;white-space:nowrap}.smart-form-fill_statusSwap__SNmlM .smart-form-fill_swapItem__fbJLE{white-space:normal}@media (pointer:coarse){.smart-form-fill_barButton__OEq6O.smart-form-fill_barButton__OEq6O{min-height:36px}}@media (prefers-reduced-motion:reduce){.smart-form-fill_input__EZRyq[data-flash]{animation:none}}@media (prefers-reduced-motion:reduce){.smart-form-fill_confirm__N_viV,.smart-form-fill_input__EZRyq,.smart-form-fill_span__VylkT,.smart-form-fill_well__i5rhu{transition:none}}", {"root":"smart-form-fill_root__eFXDB","srOnly":"smart-form-fill_srOnly__x9gv2","head":"smart-form-fill_head__WZaUs","title":"smart-form-fill_title__7BO40","description":"smart-form-fill_description__E6IQd","body":"smart-form-fill_body__LAZin","well":"smart-form-fill_well__i5rhu","editor":"smart-form-fill_editor__UKbQh","layer":"smart-form-fill_layer__MEeFK","textarea":"smart-form-fill_textarea__K94yi","source":"smart-form-fill_source__MjKJz","span":"smart-form-fill_span__VylkT","bar":"smart-form-fill_bar___kt0D","model":"smart-form-fill_model__om_fb","modelMark":"smart-form-fill_modelMark__JBWM_","barText":"smart-form-fill_barText__6y_9m","barNum":"smart-form-fill_barNum__p05qb","barGhost":"smart-form-fill_barGhost__pc7_W","barActions":"smart-form-fill_barActions__LC4Qo","barButton":"smart-form-fill_barButton__OEq6O","stopIcon":"smart-form-fill_stopIcon__9srEl","hintKey":"smart-form-fill_hintKey__sHiEd","form":"smart-form-fill_form__rpVTv","field":"smart-form-fill_field__ODdvH","labelRow":"smart-form-fill_labelRow__4hCyh","label":"smart-form-fill_label__MKjSn","badgeSlot":"smart-form-fill_badgeSlot__zrQ90","badge":"smart-form-fill_badge__bE6AY","dot":"smart-form-fill_dot__J_l9y","control":"smart-form-fill_control__0alMd","input":"smart-form-fill_input__EZRyq","sff-flash-a":"smart-form-fill_sff-flash-a__j4HK0","sff-text-a":"smart-form-fill_sff-text-a__dpKMy","sff-flash-b":"smart-form-fill_sff-flash-b__ri2AF","sff-text-b":"smart-form-fill_sff-text-b__s1UTs","logo":"smart-form-fill_logo__c_3U_","logoItem":"smart-form-fill_logoItem__Mw4ds","confirm":"smart-form-fill_confirm__N_viV","foot":"smart-form-fill_foot__0ptrE","status":"smart-form-fill_status__SnCaP","statusSwap":"smart-form-fill_statusSwap__SNmlM","statusIcon":"smart-form-fill_statusIcon__Xp_c_","statusText":"smart-form-fill_statusText__64f2O","actions":"smart-form-fill_actions__LIYi1","footButton":"smart-form-fill_footButton__xJNGg","swap":"smart-form-fill_swap__PCf_6","swapItem":"smart-form-fill_swapItem__fbJLE"});
A.reg(22350, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "building-complex",
    size: 24,
    node: [
      ["path", { d: "M10 12h4", key: "a56b0p" }],
      ["path", { d: "M10 8h4", key: "1sr2af" }],
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
      [
        "path",
        {
          d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
          key: "secmi2"
        }
      ],
      [
        "path",
        { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }
      ]
    ],
    aliases: ["building-2"]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(58081, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "pen-line",
    size: 24,
    node: [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ]
    ],
    aliases: ["edit-3"]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(64718, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SmartFormFillDemo: () => G, default: () => Y });
  var r = a(95155), n = a(12115), i = a(18310), l = a(80642), s = a(25354), o = a(64962), c = a(35484), d = a(94890), m = a(40852), u = a(58081), f = a(22350), h = a(64577), p = a(92298), g = a(51288), y = a(76266), v = a(52898);
  let x = [
    {
      id: "name",
      label: "Full name",
      placeholder: "Ada Lovelace",
      autoComplete: "name"
    },
    {
      id: "title",
      label: "Job title",
      placeholder: "Head of partnerships",
      autoComplete: "organization-title"
    },
    {
      id: "company",
      label: "Company",
      kind: "company",
      placeholder: "Company name",
      span: 2,
      autoComplete: "organization"
    },
    {
      id: "email",
      label: "Email",
      kind: "email",
      placeholder: "name@company.com",
      autoComplete: "email"
    },
    {
      id: "phone",
      label: "Phone",
      kind: "tel",
      placeholder: "+1 (555) 000-0000",
      autoComplete: "tel"
    },
    {
      id: "address",
      label: "Address",
      kind: "address",
      placeholder: "Street, city, region, postcode",
      span: 2,
      autoComplete: "street-address"
    }
  ], b = `Thanks again for the walkthrough on Tuesday. Redlines coming by Friday.

Maya Okafor
Head of Partnerships, Stripe
m +1 (415) 555-0142 \xB7 o +1 (415) 555-0100
maya.okafor@stripe.com
354 Oyster Pt Blvd, S. San Francisco 94080`, _ = `fwd from Jonas: met Priya Raman at Config last week,
she runs design eng at linear. priya@linear.app
cell is 628 555 0199, wants a follow up call
office near 1 Letterman Dr SF? not 100% sure`, w = [
    { label: "Email signature", text: b },
    { label: "Messy note", text: _ }
  ], k = {
    [b]: {
      name: { value: "Maya Okafor", confidence: 0.99, source: "Maya Okafor" },
      title: {
        value: "Head of Partnerships",
        confidence: 0.97,
        source: "Head of Partnerships"
      },
      company: { value: "Stripe", confidence: 0.98, source: "Stripe" },
      email: {
        value: "maya.okafor@stripe.com",
        confidence: 0.99,
        source: "maya.okafor@stripe.com"
      },
      phone: {
        value: "+1 (415) 555-0142",
        confidence: 0.72,
        source: "+1 (415) 555-0142",
        note: "Two numbers found, picked the mobile one"
      },
      address: {
        value: "354 Oyster Point Blvd, South San Francisco, CA 94080",
        confidence: 0.68,
        source: "354 Oyster Pt Blvd, S. San Francisco 94080",
        note: "Expanded abbreviations and added the state"
      }
    },
    [_]: {
      name: { value: "Priya Raman", confidence: 0.96, source: "Priya Raman" },
      title: {
        value: "Design Engineering Lead",
        confidence: 0.66,
        source: "runs design eng",
        note: "Paraphrased from \u201Cruns design eng\u201D"
      },
      company: { value: "Linear", confidence: 0.94, source: "linear" },
      email: {
        value: "priya@linear.app",
        confidence: 0.99,
        source: "priya@linear.app"
      },
      phone: {
        value: "+1 (628) 555-0199",
        confidence: 0.9,
        source: "628 555 0199"
      },
      address: {
        value: "1 Letterman Drive, San Francisco, CA 94129",
        confidence: 0.48,
        source: "1 Letterman Dr SF",
        note: "The note itself says it is not sure"
      }
    }
  }, j = /^(gmail|googlemail|outlook|hotmail|yahoo|icloud|me|proton|protonmail|aol|gmx|hey)$/i, E = /\b(head|director|manager|engineer|designer|founder|co-?founder|ceo|cto|coo|cfo|vp|vice president|lead|partner|analyst|consultant|recruiter|developer|architect|officer|president|specialist|scientist|marketing|sales|product|operations)\b/i, C = /\b(st|street|ave|avenue|blvd|boulevard|rd|road|dr|drive|way|lane|ln|ct|court|pl|place|sq|square|pkwy|parkway|hwy|ctr|center|strasse|straße|gasse|weg|platz)\b\.?/i;
  function N(e2) {
    return e2.replace(/\D/g, "");
  }
  async function A(e2, t2) {
    return await new Promise((e3, a2) => {
      if (t2.aborted) return a2(t2.reason);
      let r2 = setTimeout(e3, 720);
      t2.addEventListener(
        "abort",
        () => {
          clearTimeout(r2), a2(t2.reason);
        },
        { once: true }
      );
    }), k[e2.trim()] ?? k[e2] ?? (function(e3) {
      let t3 = {}, a2 = e3.split(/\r?\n/).map((e4) => e4.trim()).filter(Boolean), r2 = e3.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/);
      r2 && (t3.email = {
        value: r2[0].toLowerCase(),
        confidence: 0.98,
        source: r2[0]
      });
      let n2 = [
        ...e3.matchAll(
          /(?:\+?\d{1,3}[\s.-]?)?\(?\d{2,4}\)?[\s.-]?\d{3}[\s.-]?\d{3,4}/g
        )
      ].filter((e4) => N(e4[0]).length >= 9);
      if (n2.length) {
        var i2;
        let a3, r3 = n2.find(
          (t4) => /\b(m|mob|mobile|cell|c)\b[\s.:]*$/i.test(
            e3.slice(Math.max(0, (t4.index ?? 0) - 10), t4.index)
          )
        ), l3 = r3 ?? n2[0], s3 = n2.length > 1;
        t3.phone = {
          value: 10 === (a3 = N(i2 = l3[0])).length ? `+1 (${a3.slice(0, 3)}) ${a3.slice(3, 6)}-${a3.slice(6)}` : 11 === a3.length && a3.startsWith("1") ? `+1 (${a3.slice(1, 4)}) ${a3.slice(4, 7)}-${a3.slice(7)}` : i2.trim(),
          confidence: s3 ? 0.72 : 0.92,
          source: l3[0].trim(),
          note: s3 ? `${n2.length} numbers found, picked ${r3 ? "the mobile one" : "the first"}` : void 0
        };
      }
      let l2 = a2.find(
        (e4) => /^[A-Z][a-z'-]+(?: [A-Z][a-z'-]+){1,2}$/.test(e4) && !E.test(e4)
      );
      l2 && (t3.name = { value: l2, confidence: 0.9, source: l2 });
      let s2 = a2.find(
        (e4) => E.test(e4) && e4 !== l2 && !e4.includes("@") && e4.length < 80
      );
      if (s2) {
        let [e4, a3] = s2.split(/\s*(?:,|\||\bat\b|@|·|–|-)\s+/);
        e4 && (t3.title = {
          value: e4.trim(),
          confidence: 0.86,
          source: e4.trim()
        }), a3 && /^[A-Z]/.test(a3) && (t3.company = {
          value: a3.trim(),
          confidence: 0.9,
          source: a3.trim()
        });
      }
      if (!t3.company && r2) {
        let e4 = r2[0].split("@")[1].split(".")[0];
        j.test(e4) || (t3.company = {
          value: e4.charAt(0).toUpperCase() + e4.slice(1),
          confidence: 0.74,
          source: e4,
          note: "Guessed from the email domain"
        });
      }
      let o2 = a2.find((e4) => /^\d+\s/.test(e4) && C.test(e4)) ?? a2.find(
        (e4) => /\b\d{5}(?:-\d{4})?\b/.test(e4) && !/@/.test(e4) && N(e4).length < 9
      );
      if (o2) {
        let e4 = /\b\d{4,5}\b/.test(o2.replace(/^\d+/, ""));
        t3.address = {
          value: o2,
          confidence: e4 ? 0.84 : 0.7,
          source: o2,
          note: e4 ? void 0 : "No postcode in the text"
        };
      }
      return t3;
    })(e2);
  }
  let $ = (e2, t2) => function({ size: a2 = 16, ...n2 }) {
    return (0, r.jsx)("svg", {
      viewBox: e2,
      width: a2,
      height: a2,
      "aria-hidden": "true",
      focusable: "false",
      ...n2,
      children: t2
    });
  }, S = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "#D97757",
      d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
    })
  ), T = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "#635BFF",
      d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
    })
  ), L = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "#5E6AD2",
      d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
    })
  ), z = $(
    "0 0 24 24",
    (0, r.jsx)("path", { fill: "currentColor", d: "m12 1.608 12 20.784H0Z" })
  ), M = $(
    "0 0 38 57",
    (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("path", {
          fill: "#1ABCFE",
          d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
        }),
        (0, r.jsx)("path", {
          fill: "#0ACF83",
          d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
        }),
        (0, r.jsx)("path", {
          fill: "#FF7262",
          d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
        }),
        (0, r.jsx)("path", {
          fill: "#F24E1E",
          d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
        }),
        (0, r.jsx)("path", {
          fill: "#A259FF",
          d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
        })
      ]
    })
  ), P = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "currentColor",
      d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
    })
  ), F = {
    stripe: (e2) => (0, r.jsx)(T, { size: e2 }),
    linear: (e2) => (0, r.jsx)(L, { size: e2 }),
    vercel: (e2) => (0, r.jsx)(z, { size: e2 }),
    figma: (e2) => (0, r.jsx)(M, { size: e2 }),
    notion: (e2) => (0, r.jsx)(P, { size: e2 })
  };
  var R = a(12230), B = a.n(R);
  let D = (...e2) => e2.filter(Boolean).join(" "), I = { name: "Claude Haiku 5.5", mark: (0, r.jsx)(S, { size: 14 }) }, O = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }, H = { duration: 0.1, ease: [0.22, 1, 0.36, 1] }, K = (e2) => e2.length <= 1 ? e2.join("") : `${e2.slice(0, -1).join(", ")} and ${e2[e2.length - 1]}`, U = (e2) => e2.split(/\r?\n/).filter((e3) => e3.trim()).length;
  function W({ id: e2, children: t2, className: a2 }) {
    let n2 = (0, i.I)();
    return (0, r.jsx)("span", {
      className: D(B().swap, a2),
      children: (0, r.jsx)(l.N, {
        initial: false,
        children: (0, r.jsx)(
          s.PY1.span,
          {
            className: B().swapItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0, transition: O },
            exit: { opacity: 0, transition: H },
            children: t2
          },
          e2
        )
      })
    });
  }
  function V({
    fields: e2 = x,
    defaultValues: t2,
    onValuesChange: a2,
    extract: b2,
    reviewThreshold: _2 = 0.8,
    samples: k2 = w,
    autoPlay: j2,
    onFill: E2,
    onUndo: C2,
    onSubmit: N2,
    resolveLogo: $2,
    model: T2 = I,
    title: L2 = "New contact",
    description: z2 = "Paste a signature, an email or rough notes. AI fills the fields and flags anything to check.",
    submitLabel: M2 = "Save contact",
    className: P2
  }) {
    let R2 = (0, n.useId)(), Z2 = (0, i.I)() ?? false, q2 = !b2, G2 = b2 ?? A, Y2 = (0, n.useMemo)(() => e2.map((e3) => e3.id), [e2]), J = (0, n.useCallback)((t3) => e2.find((e3) => e3.id === t3)?.label ?? t3, [e2]), [Q, X] = (0, n.useState)(""), [ee, et] = (0, n.useState)("edit"), [ea, er] = (0, n.useState)("idle"), [en, ei] = (0, n.useState)(
      () => Object.fromEntries(e2.map((e3) => [e3.id, t2?.[e3.id] ?? ""]))
    ), [el, es] = (0, n.useState)({}), [eo, ec] = (0, n.useState)({}), [ed, em] = (0, n.useState)({ id: null, done: 0, total: 0 }), [eu, ef] = (0, n.useState)(null), [eh, ep] = (0, n.useState)(null), [eg, ey] = (0, n.useState)({
      text: "Paste text to fill the form",
      tone: "neutral"
    }), [ev, ex] = (0, n.useState)(false), [eb, e_] = (0, n.useState)(0), ew = (0, n.useRef)(null), ek = (0, n.useRef)(null), ej = (0, n.useRef)(null), eE = (0, n.useRef)({}), eC = (0, n.useRef)(null), eN = (0, n.useRef)([]), eA = (0, n.useRef)(en), e$ = (0, n.useRef)(el), eS = (0, n.useRef)(0), eT = (0, n.useRef)(null);
    (0, n.useLayoutEffect)(() => {
      eA.current = en, e$.current = el;
    });
    let eL = (0, n.useCallback)(
      (e3) => {
        eA.current = e3, ei(e3), a2?.(e3);
      },
      [a2]
    ), ez = () => {
      eN.current.forEach((e3) => window.clearTimeout(e3)), eN.current = [];
    };
    (0, n.useEffect)(
      () => () => {
        ez(), eC.current?.abort();
      },
      []
    );
    let eM = Y2.filter((e3) => el[e3]?.state === "review"), eP = (0, n.useCallback)(
      async (e3) => {
        let t3, a3 = e3.trim();
        if (!a3) return;
        eC.current?.abort(), ez();
        let r2 = new AbortController();
        eC.current = r2, eS.current = performance.now(), et("source"), er("reading"), es({}), ep(null), em({ id: null, done: 0, total: 0 }), ey({ text: `Reading ${U(a3)} lines`, tone: "neutral" });
        try {
          t3 = await G2(e3, r2.signal);
        } catch (e4) {
          if (r2.signal.aborted || e4 instanceof DOMException && "AbortError" === e4.name || e4?.name === "AbortError")
            return;
          er("error"), ey({
            text: "Couldn't read that text. Try again.",
            tone: "danger"
          }), eT.current?.();
          return;
        }
        if (r2.signal.aborted) return;
        let n2 = Y2.filter((e4) => t3[e4]?.value);
        if (!n2.length) {
          er("error"), ey({
            text: "No contact details found in that text.",
            tone: "danger"
          }), eT.current?.();
          return;
        }
        ef({ ...eA.current }), er("filling"), em({ id: null, done: 0, total: n2.length });
        let i2 = (e4, a4) => {
          let r3 = t3[e4];
          eL({ ...eA.current, [e4]: r3.value }), es((t4) => ({
            ...t4,
            [e4]: { ...r3, state: r3.confidence < _2 ? "review" : "ok" }
          })), ec((t4) => ({ ...t4, [e4]: (t4[e4] ?? 0) + 1 })), em({ id: e4, done: a4 + 1, total: n2.length });
        }, l2 = () => {
          let e4 = n2.filter((e5) => t3[e5].confidence < _2).map((e5) => J(e5).toLowerCase()), a4 = ((performance.now() - eS.current) / 1e3).toFixed(1);
          er("done"), em({ id: null, done: n2.length, total: n2.length }), ey(
            e4.length ? {
              text: `Filled ${n2.length} fields. Check the ${K(e4)}.`,
              tone: "warning",
              sr: q2 ? "Simulated, nothing was sent." : void 0
            } : {
              text: `Filled ${n2.length} fields in ${a4}s.`,
              tone: "success",
              sr: q2 ? "Simulated, nothing was sent." : void 0
            }
          ), E2?.(t3), eT.current?.();
        };
        if (Z2) {
          n2.forEach(i2), l2();
          return;
        }
        n2.forEach((e4, t4) => {
          eN.current.push(window.setTimeout(() => i2(e4, t4), 140 * t4));
        }), eN.current.push(window.setTimeout(l2, 140 * n2.length + 120));
      },
      [eL, J, E2, Y2, G2, Z2, _2, q2]
    ), eF = (0, n.useCallback)(() => {
      "reading" === ea && (eC.current?.abort(), er("idle"), et("edit"), ey({ text: "Stopped. Nothing changed.", tone: "neutral" }));
    }, [ea]), eR = (0, n.useCallback)(() => {
      eu && (eC.current?.abort(), ez(), eL(eu), C2?.(eu), ef(null), es({}), ep(null), er("idle"), et("edit"), em({ id: null, done: 0, total: 0 }), ey({ text: "Restored the previous values.", tone: "neutral" }));
    }, [eL, C2, eu]), eB = (0, n.useCallback)(
      (e3) => {
        es((t4) => t4[e3] ? { ...t4, [e3]: { ...t4[e3], state: "checked" } } : t4);
        let t3 = Y2.filter((t4) => t4 !== e3 && e$.current[t4]?.state === "review");
        ey(
          t3.length ? {
            text: `${J(e3)} checked. ${t3.length} left to review.`,
            tone: "warning"
          } : { text: "All fields checked.", tone: "success" }
        );
      },
      [J, Y2]
    ), eD = async () => {
      if (eM.length) {
        eE.current[eM[0]]?.focus(), ey({
          text: `Check the ${K(eM.map((e4) => J(e4).toLowerCase()))} before saving.`,
          tone: "warning"
        });
        return;
      }
      let e3 = eA.current;
      if (!Object.values(e3).some((e4) => e4.trim()))
        return void ey({
          text: "Nothing to save yet. Paste some text first.",
          tone: "neutral"
        });
      ex(true);
      try {
        N2 ? await N2(e3) : await new Promise((e4) => window.setTimeout(e4, 650));
        let t3 = e3[Y2[0]]?.trim();
        ey({
          text: `Saved${t3 ? ` ${t3}` : ""}.${N2 ? "" : " Simulated, nothing was sent."}`,
          tone: "success"
        });
      } catch {
        ey({ text: "Couldn't save. Try again.", tone: "danger" });
      } finally {
        ex(false);
      }
    }, eI = () => k2[eb % k2.length], eO = "filling" === ea ? ed.id : eh, eH = (0, n.useMemo)(
      () => (function(e3, t3, a3) {
        let r2 = [];
        for (let n3 of a3) {
          let a4 = t3[n3]?.source;
          if (!a4) continue;
          let i3 = 0, l2 = e3.indexOf(a4, i3);
          for (; -1 !== l2 && r2.some((e4) => l2 < e4.end && l2 + a4.length > e4.start); )
            i3 = l2 + 1, l2 = e3.indexOf(a4, i3);
          -1 !== l2 && r2.push({ id: n3, start: l2, end: l2 + a4.length });
        }
        r2.sort((e4, t4) => e4.start - t4.start);
        let n2 = [], i2 = 0;
        for (let t4 of r2)
          t4.start > i2 && n2.push({ text: e3.slice(i2, t4.start) }), n2.push({ text: e3.slice(t4.start, t4.end), id: t4.id }), i2 = t4.end;
        return i2 < e3.length && n2.push({ text: e3.slice(i2) }), n2;
      })(Q, el, Y2),
      [Q, el, Y2]
    );
    (0, n.useEffect)(() => {
      let e3 = ej.current;
      if (!e3 || !eO) return;
      let t3 = e3.querySelector(`[data-field="${CSS.escape(eO)}"]`);
      if (!t3) return;
      let a3 = t3.offsetTop - e3.offsetTop, r2 = a3 + t3.offsetHeight;
      a3 < e3.scrollTop + 8 ? e3.scrollTo({
        top: Math.max(0, a3 - 12),
        behavior: Z2 ? "auto" : "smooth"
      }) : r2 > e3.scrollTop + e3.clientHeight - 8 && e3.scrollTo({
        top: r2 - e3.clientHeight + 12,
        behavior: Z2 ? "auto" : "smooth"
      });
    }, [eO, Z2]);
    let eK = j2 ?? !b2, eU = (0, n.useRef)(false), eW = (0, n.useRef)(true), eV = (0, n.useRef)({
      run: eP,
      confirm: eB,
      undo: eR,
      samples: k2,
      order: Y2
    });
    (0, n.useLayoutEffect)(() => {
      eV.current = { run: eP, confirm: eB, undo: eR, samples: k2, order: Y2 };
    }), (0, n.useEffect)(() => {
      let e3, t3 = ew.current;
      if (!eK || !t3 || !eV.current.samples.length) return;
      let a3 = [];
      eU.current = false;
      let r2 = () => {
        eU.current = true;
      };
      t3.addEventListener("pointerdown", r2), t3.addEventListener("keydown", r2);
      let n2 = null;
      "u" > typeof IntersectionObserver && (e3 = new IntersectionObserver(
        ([e4]) => {
          eW.current = e4.isIntersecting, e4.isIntersecting && n2?.();
        },
        { threshold: 0.35 }
      )).observe(t3);
      let i2 = false, l2 = () => i2 || eU.current, s2 = (e4) => new Promise((t4) => {
        let r3 = () => {
          if (l2()) return t4();
          if (!eW.current) {
            n2 = () => {
              n2 = null, r3();
            };
            return;
          }
          a3.push(window.setTimeout(t4, e4));
        };
        r3();
      }), o2 = () => new Promise((e4) => {
        eT.current = () => {
          eT.current = null, e4();
        };
      });
      return (async () => {
        for (let e4 = 0; !l2() && (await s2(0 === e4 ? 700 : 600), !l2()); e4++) {
          let { samples: t4 } = eV.current, a4 = t4[e4 % t4.length];
          e_(e4 + 1), X(a4.text);
          let r3 = o2();
          if (eV.current.run(a4.text), await r3, l2() || Z2 || (await s2(1500), l2()))
            break;
          let n3 = eV.current.order.find(
            (e5) => e$.current[e5]?.state === "review"
          );
          if (n3) {
            if (ep(n3), await s2(900), l2()) break;
            eV.current.confirm(n3), ep(null);
          }
          if (await s2(1800), l2()) break;
          eV.current.undo();
        }
      })(), () => {
        i2 = true, n2?.(), a3.forEach((e4) => window.clearTimeout(e4)), eT.current = null, e3?.disconnect(), t3.removeEventListener("pointerdown", r2), t3.removeEventListener("keydown", r2);
      };
    }, [eK, Z2]);
    let eZ = U(Q), eq = "edit" === ee ? Q.trim() ? "ready" : "empty" : ea, eG = "edit" === ee ? Q.trim() ? `to read ${eZ} ${1 === eZ ? "line" : "lines"}` : "Paste anything to fill the form" : "reading" === ea ? `Reading with ${T2.name}` : "filling" === ea ? `Filling ${ed.done} of ${ed.total}` : `Read by ${T2.name}`, eY = "success" === eg.tone ? o.A : "warning" === eg.tone ? c.A : "danger" === eg.tone ? d.A : null, eJ = eh && el[eh]?.state === "review" ? el[eh]?.note : void 0, eQ = eJ && eh ? { text: `${J(eh)}: ${eJ}.`, tone: "warning" } : eg, eX = eJ ? c.A : eY, e0 = "reading" === ea || "filling" === ea;
    return (0, r.jsxs)("div", {
      ref: ew,
      className: D(B().root, P2),
      "data-phase": ea,
      onKeyDown: (e3) => {
        "Escape" === e3.key && "reading" === ea && (e3.preventDefault(), eF());
      },
      children: [
        (0, r.jsxs)("header", {
          className: B().head,
          children: [
            (0, r.jsx)("h3", {
              className: B().title,
              id: `${R2}-title`,
              children: L2
            }),
            z2 ? (0, r.jsx)("p", { className: B().description, children: z2 }) : null
          ]
        }),
        (0, r.jsxs)("div", {
          className: B().body,
          children: [
            (0, r.jsxs)("div", {
              className: B().well,
              "data-view": ee,
              children: [
                (0, r.jsx)("div", {
                  className: B().editor,
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    children: "edit" === ee ? (0, r.jsx)(
                      s.PY1.div,
                      {
                        className: B().layer,
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: O },
                        exit: { opacity: 0, transition: H },
                        children: (0, r.jsx)("textarea", {
                          ref: ek,
                          className: B().textarea,
                          value: Q,
                          onChange: (e3) => X(e3.target.value),
                          onPaste: (e3) => {
                            let t3 = e3.clipboardData.getData("text/plain");
                            if (!t3.trim()) return;
                            e3.preventDefault();
                            let a3 = e3.currentTarget, r2 = Q.slice(0, a3.selectionStart) + t3 + Q.slice(a3.selectionEnd);
                            X(r2), eP(r2);
                          },
                          onKeyDown: (e3) => {
                            "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && (e3.preventDefault(), eP(Q));
                          },
                          placeholder: "Paste an email signature, a business card or any messy text.\n\nMaya Okafor\nHead of Partnerships, Stripe\nmaya.okafor@stripe.com",
                          "aria-label": "Paste anything",
                          "aria-describedby": `${R2}-bar`,
                          spellCheck: false
                        })
                      },
                      "edit"
                    ) : (0, r.jsx)(
                      s.PY1.div,
                      {
                        ref: ej,
                        className: D(B().layer, B().source),
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: O },
                        exit: { opacity: 0, transition: H },
                        tabIndex: 0,
                        role: "region",
                        "aria-label": "Pasted text",
                        children: eH.map(
                          (e3, t3) => e3.id ? (0, r.jsx)(
                            "mark",
                            {
                              "data-field": e3.id,
                              "data-review": el[e3.id]?.state === "review" || void 0,
                              "data-active": eO === e3.id || void 0,
                              className: B().span,
                              children: e3.text
                            },
                            `${e3.id}-${t3}`
                          ) : (0, r.jsx)("span", { children: e3.text }, t3)
                        )
                      },
                      "source"
                    )
                  })
                }),
                (0, r.jsxs)("div", {
                  className: B().bar,
                  id: `${R2}-bar`,
                  children: [
                    (0, r.jsxs)("span", {
                      className: B().model,
                      children: [
                        (0, r.jsx)("span", {
                          className: B().modelMark,
                          "aria-hidden": "true",
                          children: T2.mark ?? (0, r.jsx)(S, { size: 14 })
                        }),
                        (0, r.jsx)(W, {
                          id: eq,
                          className: B().barText,
                          children: "reading" === ea && "source" === ee ? (0, r.jsx)(v.n, { children: eG }) : "ready" === eq ? (0, r.jsxs)("span", {
                            children: [
                              (0, r.jsx)(y.ue, {
                                keys: ["mod", "enter"],
                                size: "sm",
                                className: B().hintKey
                              }),
                              eG
                            ]
                          }) : "filling" === eq ? (0, r.jsxs)("span", {
                            children: [
                              "Filling ",
                              (0, r.jsxs)("span", {
                                className: B().barNum,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: B().barGhost,
                                    "aria-hidden": "true",
                                    children: ed.total
                                  }),
                                  (0, r.jsx)("span", {
                                    children: ed.done
                                  })
                                ]
                              }),
                              " of ",
                              ed.total
                            ]
                          }) : (0, r.jsx)("span", { children: eG })
                        })
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: B().barActions,
                      children: "edit" === ee ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          k2.length ? (0, r.jsx)(g.$, {
                            variant: "ghost",
                            size: "sm",
                            className: B().barButton,
                            onClick: () => {
                              if (!k2.length) return;
                              let e3 = eI();
                              e_((e4) => e4 + 1), X(e3.text), eP(e3.text);
                            },
                            title: `Paste the ${eI().label.toLowerCase()} sample`,
                            children: "Try sample"
                          }) : null,
                          (0, r.jsx)(g.$, {
                            variant: "primary",
                            size: "sm",
                            className: B().barButton,
                            onClick: () => void eP(Q),
                            disabled: !Q.trim(),
                            "aria-keyshortcuts": "Meta+Enter Control+Enter",
                            children: "Fill"
                          })
                        ]
                      }) : "reading" === ea ? (0, r.jsxs)(g.$, {
                        variant: "ghost",
                        size: "sm",
                        className: B().barButton,
                        onClick: eF,
                        "aria-keyshortcuts": "Escape",
                        children: [
                          (0, r.jsx)(m.A, {
                            size: 12,
                            "aria-hidden": "true",
                            className: B().stopIcon
                          }),
                          "Stop"
                        ]
                      }) : (0, r.jsxs)(g.$, {
                        variant: "ghost",
                        size: "sm",
                        className: B().barButton,
                        onClick: () => {
                          et("edit"), "error" === ea && er("idle"), window.requestAnimationFrame(
                            () => ek.current?.focus()
                          );
                        },
                        disabled: "filling" === ea,
                        children: [
                          (0, r.jsx)(u.A, {
                            size: 14,
                            "aria-hidden": "true"
                          }),
                          "Edit text"
                        ]
                      })
                    })
                  ]
                })
              ]
            }),
            (0, r.jsx)("div", {
              className: B().form,
              role: "group",
              "aria-labelledby": `${R2}-title`,
              children: e2.map((e3) => {
                let t3, a3 = el[e3.id], n2 = en[e3.id] ?? "", i2 = eo[e3.id] ?? 0, o2 = `${R2}-${e3.id}`, c2 = a3 ? Math.round(100 * a3.confidence) : 0, d2 = a3 ? "review" === a3.state ? {
                  key: "review",
                  label: `${c2}% \xB7 Review`,
                  tone: "warning"
                } : "checked" === a3.state ? { key: "checked", label: "Checked", tone: "success" } : "edited" === a3.state ? { key: "edited", label: "Edited", tone: "neutral" } : { key: "ok", label: `${c2}%`, tone: "success" } : null, m2 = "company" === e3.kind && n2.trim() ? $2?.(n2) ?? (function(e4, t4 = 16) {
                  let a4 = e4.trim().toLowerCase().replace(/,?\s+(inc|llc|ltd|gmbh)\.?$/, "");
                  return F[a4]?.(t4);
                })(n2) : void 0;
                return (0, r.jsxs)(
                  "div",
                  {
                    className: B().field,
                    "data-span": e3.span ?? 1,
                    "data-state": a3?.state,
                    onPointerEnter: () => a3 && ep(e3.id),
                    onPointerLeave: () => ep(
                      (t4) => t4 === e3.id && document.activeElement !== eE.current[e3.id] ? null : t4
                    ),
                    children: [
                      (0, r.jsxs)("div", {
                        className: B().labelRow,
                        children: [
                          (0, r.jsx)("label", {
                            className: B().label,
                            htmlFor: o2,
                            children: e3.label
                          }),
                          (0, r.jsx)("span", {
                            className: B().badgeSlot,
                            "aria-hidden": "true",
                            children: (0, r.jsx)(l.N, {
                              initial: false,
                              children: d2 ? (0, r.jsxs)(
                                s.PY1.span,
                                {
                                  className: B().badge,
                                  "data-tone": d2.tone,
                                  title: a3 ? `Confidence ${c2}%` : void 0,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1, transition: O },
                                  exit: { opacity: 0, transition: H },
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: B().dot
                                    }),
                                    d2.label
                                  ]
                                },
                                d2.key
                              ) : null
                            })
                          })
                        ]
                      }),
                      (0, r.jsxs)("div", {
                        className: B().control,
                        "data-company": "company" === e3.kind || void 0,
                        children: [
                          "company" === e3.kind ? (0, r.jsx)("span", {
                            className: B().logo,
                            "aria-hidden": "true",
                            children: (0, r.jsx)(l.N, {
                              initial: false,
                              children: (0, r.jsx)(
                                s.PY1.span,
                                {
                                  className: B().logoItem,
                                  "data-empty": !m2 || void 0,
                                  initial: {
                                    opacity: 0,
                                    scale: Z2 ? 1 : 0.9
                                  },
                                  animate: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: O
                                  },
                                  exit: { opacity: 0, transition: H },
                                  children: m2 ?? (0, r.jsx)(f.A, {
                                    size: 16,
                                    strokeWidth: 1.75
                                  })
                                },
                                m2 ? n2.trim().toLowerCase() : "none"
                              )
                            })
                          }) : null,
                          (0, r.jsx)("input", {
                            ref: (t4) => {
                              eE.current[e3.id] = t4;
                            },
                            id: o2,
                            className: B().input,
                            type: "email" === (t3 = e3.kind) ? "email" : "tel" === t3 ? "tel" : "url" === t3 ? "url" : "text",
                            inputMode: "tel" === e3.kind ? "tel" : "email" === e3.kind ? "email" : void 0,
                            autoComplete: e3.autoComplete,
                            placeholder: e3.placeholder,
                            value: n2,
                            "data-flash": i2 ? i2 % 2 ? "a" : "b" : void 0,
                            "aria-invalid": a3?.state === "review" || void 0,
                            "aria-description": a3 ? "review" === a3.state ? `Filled by AI with ${c2}% confidence, needs review${a3.note ? `: ${a3.note}` : ""}` : "edited" === a3.state ? "Edited after filling" : `Filled by AI with ${c2}% confidence` : void 0,
                            onChange: (t4) => {
                              var a4, r2;
                              return a4 = e3.id, r2 = t4.target.value, void (eL({ ...eA.current, [a4]: r2 }), e$.current[a4] && "edited" !== e$.current[a4].state && es((e4) => ({
                                ...e4,
                                [a4]: { ...e4[a4], state: "edited" }
                              })));
                            },
                            onFocus: () => a3 && ep(e3.id),
                            onBlur: () => ep((t4) => t4 === e3.id ? null : t4)
                          }),
                          (0, r.jsx)(l.N, {
                            initial: false,
                            children: a3?.state === "review" ? (0, r.jsx)(
                              s.PY1.button,
                              {
                                type: "button",
                                className: B().confirm,
                                onClick: () => eB(e3.id),
                                "aria-label": `Mark ${e3.label.toLowerCase()} as correct`,
                                title: "Looks right",
                                initial: {
                                  opacity: 0,
                                  scale: Z2 ? 1 : 0.9
                                },
                                animate: {
                                  opacity: 1,
                                  scale: 1,
                                  transition: O
                                },
                                exit: {
                                  opacity: 0,
                                  scale: Z2 ? 1 : 0.9,
                                  transition: H
                                },
                                whileTap: Z2 ? void 0 : { scale: 0.92 },
                                children: (0, r.jsx)(h.A, {
                                  size: 14,
                                  strokeWidth: 2,
                                  "aria-hidden": "true"
                                })
                              },
                              "confirm"
                            ) : null
                          })
                        ]
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          ]
        }),
        (0, r.jsxs)("footer", {
          className: B().foot,
          children: [
            (0, r.jsx)("p", {
              className: B().status,
              "data-tone": eQ.tone,
              children: (0, r.jsxs)(W, {
                id: eQ.text,
                className: B().statusSwap,
                children: [
                  eX ? (0, r.jsx)(eX, {
                    size: 14,
                    className: B().statusIcon,
                    "aria-hidden": "true"
                  }) : null,
                  (0, r.jsx)("span", {
                    className: B().statusText,
                    children: eQ.text
                  })
                ]
              })
            }),
            (0, r.jsx)("span", {
              className: B().srOnly,
              role: "status",
              "aria-live": "polite",
              children: [eg.text, eg.sr].filter(Boolean).join(" ")
            }),
            (0, r.jsxs)("div", {
              className: B().actions,
              children: [
                (0, r.jsxs)(g.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: eR,
                  disabled: !eu || e0,
                  className: B().footButton,
                  children: [
                    (0, r.jsx)(p.A, { size: 14, "aria-hidden": "true" }),
                    "Undo"
                  ]
                }),
                (0, r.jsx)(g.$, {
                  variant: "primary",
                  size: "sm",
                  onClick: () => void eD(),
                  loading: ev,
                  disabled: e0,
                  className: B().footButton,
                  children: M2
                })
              ]
            })
          ]
        })
      ]
    });
  }
  var Z = a(65252), q = a.n(Z);
  function G() {
    return (0, r.jsx)("div", {
      className: q().demo,
      children: (0, r.jsx)(V, {})
    });
  }
  let Y = G;
}

__m(__module,__exports,__require);
});
A.regCss(65252, ".demo{display:flex;width:100%;min-width:0;justify-content:center}", {"demo":"demo"});
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
A.cssFor("smart-form-fill", [12053,12230,65252]);
A.item("smart-form-fill", {entry:64718, export:"SmartFormFillDemo", kind:"component", tier:"pro", unresolved:[]});
})();