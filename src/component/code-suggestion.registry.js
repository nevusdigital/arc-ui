/* code-suggestion (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.regCss(35016, ".demo{display:flex;box-sizing:border-box;width:100%;min-height:776px;flex-direction:column;align-items:center;justify-content:flex-start;gap:16px}\n.control{flex:none;max-width:100%}", {"demo":"demo","control":"control"});
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
A.regCss(58194, ".code-suggestion_root__xNzN7{--cs-mono:ui-monospace,\"SFMono-Regular\",\"SF Mono\",Menlo,Consolas,\"Liberation Mono\",monospace;--cs-inset:6px;--cs-gutter:58px;--cs-add:color-mix(in oklab,var(--success) 10%,var(--background));--cs-add-strong:color-mix(in oklab,var(--success) 16%,var(--background));--cs-del:color-mix(in oklab,var(--danger) 9%,var(--background));--cs-del-strong:color-mix(in oklab,var(--danger) 15%,var(--background));container-type:inline-size;position:relative;box-sizing:border-box;width:100%;max-width:720px;min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel);padding:var(--cs-inset);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.code-suggestion_srOnly__S9MmU{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.code-suggestion_header__ugRkg{display:grid;grid-template-columns:16px minmax(0,1fr);column-gap:10px;padding:10px 12px 12px}.code-suggestion_modelMark__phhkt{display:grid;width:16px;height:20px;place-items:center;color:var(--foreground)}.code-suggestion_modelMark__phhkt svg{display:block;width:16px;height:16px}.code-suggestion_instruction__JYHCH{overflow:hidden;margin:0;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}.code-suggestion_model__GiFlU{grid-column:2;margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}.code-suggestion_editor__pxUys{overflow:hidden;border:1px solid var(--border);border-radius:calc(var(--radius-panel) - var(--cs-inset));background:var(--background)}.code-suggestion_tabs__ETjc6{display:flex;height:38px;align-items:center;justify-content:space-between;gap:12px;padding:0 12px;border-bottom:1px solid var(--border-subtle)}.code-suggestion_tab__0jGfE{display:inline-flex;min-width:0;align-items:center;gap:8px;font-size:var(--text-xs);line-height:18px}.code-suggestion_fileMark__L_c6P{display:grid;flex:none;place-items:center}.code-suggestion_fileMark__L_c6P svg{display:block;width:14px;height:14px;border-radius:2px}.code-suggestion_fileName__TQK7q{overflow:hidden;color:var(--foreground);text-overflow:ellipsis;white-space:nowrap}.code-suggestion_filePath__wcyEu{overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}.code-suggestion_stats__nHI8H{display:inline-flex;flex:none;gap:8px;font-family:var(--cs-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;letter-spacing:0}.code-suggestion_statAdd__A63a9,.code-suggestion_statDel__mcrr3{min-width:3ch;text-align:right;transition:color var(--duration-fast,.16s) var(--ease-standard)}.code-suggestion_statAdd__A63a9{color:var(--success)}.code-suggestion_statDel__mcrr3{color:var(--danger)}.code-suggestion_statAdd__A63a9[data-zero],.code-suggestion_statDel__mcrr3[data-zero]{color:var(--text-muted)}.code-suggestion_code__HKm1U{overflow-x:auto;overscroll-behavior-x:contain;padding:6px 0;scrollbar-width:thin;--focus-outline-offset:-2px;border-radius:0 0 calc(var(--radius-panel) - var(--cs-inset) - 1px) calc(var(--radius-panel) - var(--cs-inset) - 1px)}.code-suggestion_lines__MXSxW{width:max-content;min-width:100%;font-family:var(--cs-mono);font-size:12.5px;letter-spacing:0;line-height:20px}.code-suggestion_row__Vddx_{--row-bg:var(--background);--sign-bg:var(--background);display:flex;overflow:hidden;background:var(--row-bg);white-space:pre;transition:background-color var(--duration-standard,.24s) var(--ease-standard)}.code-suggestion_row__Vddx_[data-kind=del][data-decision=pending]{--row-bg:var(--cs-del);--sign-bg:var(--cs-del-strong)}.code-suggestion_row__Vddx_[data-kind=add][data-decision=pending]{--row-bg:var(--cs-add);--sign-bg:var(--cs-add-strong)}.code-suggestion_gutter__jv0wN{position:sticky;left:0;z-index:1;display:grid;flex:none;width:var(--cs-gutter);height:20px;grid-template-columns:40px 18px;background:var(--sign-bg);transition:background-color var(--duration-standard,.24s) var(--ease-standard)}.code-suggestion_num__ORfiU{padding-right:10px;color:var(--text-muted);font-variant-numeric:tabular-nums;text-align:right;opacity:.8}.code-suggestion_sign__1RIE1{color:var(--text-muted);text-align:center;transition:opacity var(--duration-fast,.16s) var(--ease-standard)}.code-suggestion_row__Vddx_[data-kind=add] .code-suggestion_sign__1RIE1{color:var(--success)}.code-suggestion_row__Vddx_[data-kind=del] .code-suggestion_sign__1RIE1{color:var(--danger)}.code-suggestion_row__Vddx_[data-decision=accepted] .code-suggestion_sign__1RIE1,.code-suggestion_row__Vddx_[data-decision=rejected] .code-suggestion_sign__1RIE1{opacity:0}.code-suggestion_text__uCOX1{display:block;flex:none;height:20px;padding-right:20px;color:var(--foreground)}.code-suggestion_row__Vddx_[data-kind=del][data-decision=pending] .code-suggestion_text__uCOX1{color:var(--text-secondary)}.code-suggestion_tKeyword__QM55J{color:color-mix(in oklab,var(--series-2) 78%,var(--foreground))}.code-suggestion_tString__KP3Vi{color:color-mix(in oklab,var(--series-3) 70%,var(--foreground))}.code-suggestion_tNumber__PXcVf{color:color-mix(in oklab,var(--series-1) 70%,var(--foreground))}.code-suggestion_tFunction__e44jF{color:color-mix(in oklab,var(--series-1) 82%,var(--foreground))}.code-suggestion_tType__ZHfDb{color:color-mix(in oklab,var(--series-1) 45%,var(--foreground))}.code-suggestion_tPunct__ExEaZ{color:var(--text-secondary)}.code-suggestion_tComment__1vwMQ{color:var(--text-muted)}.code-suggestion_row__Vddx_[data-kind=del][data-decision=pending] .code-suggestion_text__uCOX1 span{color:inherit}.code-suggestion_barRow__1_hsV{overflow:hidden}.code-suggestion_bar__inwmy{position:sticky;left:0;display:flex;box-sizing:border-box;width:var(--cs-viewport,100%);height:40px;align-items:center;justify-content:space-between;gap:12px;padding:0 8px 0 var(--cs-gutter);font-family:var(--font-body);letter-spacing:var(--tracking-body);white-space:nowrap}.code-suggestion_barSummary__Oprde{min-width:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);line-height:18px;text-overflow:ellipsis}.code-suggestion_barActions__Cj7Hy{display:inline-flex;flex:none;align-items:center;gap:4px}.code-suggestion_hunkButton__KXUwT.code-suggestion_hunkButton__KXUwT{min-height:28px;height:28px;padding-inline:11px;border-radius:10px;font-size:var(--text-xs)}.code-suggestion_reject__SI22d.code-suggestion_reject__SI22d{color:var(--text-secondary)}.code-suggestion_accept__V98dP.code-suggestion_accept__V98dP{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.code-suggestion_accept__V98dP.code-suggestion_accept__V98dP[data-pressing]{opacity:.84}.code-suggestion_reject__SI22d.code-suggestion_reject__SI22d[data-pressing]{background:var(--surface-muted);color:var(--foreground)}.code-suggestion_footer__xNNYq{display:grid;min-height:48px;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;padding:6px 0 0 12px}.code-suggestion_status__oJUWC{display:flex;min-width:0;align-items:center;gap:8px;color:var(--text-secondary);line-height:20px}.code-suggestion_actionsSlot__5daYe,.code-suggestion_statusIcon__ew5_l,.code-suggestion_statusLabel__nlOwb{display:grid}.code-suggestion_actionsSlot__5daYe>*,.code-suggestion_statusIcon__ew5_l>*,.code-suggestion_statusLabel__nlOwb>*{grid-area:1/1}.code-suggestion_statusIcon__ew5_l{flex:none;width:16px;height:16px}.code-suggestion_statusIcon__ew5_l>*{display:grid;place-items:center}.code-suggestion_statusLabel__nlOwb{flex:1;min-width:0}.code-suggestion_statusLabel__nlOwb>*{min-width:0}.code-suggestion_statusIcon__ew5_l>[data-tone=busy],.code-suggestion_statusIcon__ew5_l>[data-tone=muted]{color:var(--text-muted)}.code-suggestion_statusIcon__ew5_l>[data-tone=review]{color:var(--accent)}.code-suggestion_statusIcon__ew5_l>[data-tone=done]{color:var(--success)}.code-suggestion_statusIcon__ew5_l>[data-tone=error]{color:var(--danger)}.code-suggestion_statusLabel__nlOwb>[data-tone=error]{color:var(--foreground)}.code-suggestion_statusText__fqLAQ{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.code-suggestion_actionsSlot__5daYe{min-height:36px;align-items:center;justify-items:end}.code-suggestion_actions__nygkh{display:inline-flex;align-items:center;gap:6px}.code-suggestion_footButton__UaXb_.code-suggestion_footButton__UaXb_{min-height:36px;height:36px;gap:6px;padding-inline:14px;border-radius:14px;font-size:var(--text-sm)}.code-suggestion_shortcut__32umo{margin-left:2px;font-size:var(--text-xs);letter-spacing:0;opacity:.7}.code-suggestion_spinner__vo6i7{animation:code-suggestion_cs-spin__N1oM7 .8s linear infinite}@keyframes code-suggestion_cs-spin__N1oM7{to{transform:rotate(1turn)}}@media (prefers-reduced-motion:reduce){.code-suggestion_spinner__vo6i7{animation-duration:2.4s}}@media (prefers-reduced-motion:reduce){.code-suggestion_gutter__jv0wN,.code-suggestion_row__Vddx_,.code-suggestion_sign__1RIE1{transition:none}}", {"root":"code-suggestion_root__xNzN7","srOnly":"code-suggestion_srOnly__S9MmU","header":"code-suggestion_header__ugRkg","modelMark":"code-suggestion_modelMark__phhkt","instruction":"code-suggestion_instruction__JYHCH","model":"code-suggestion_model__GiFlU","editor":"code-suggestion_editor__pxUys","tabs":"code-suggestion_tabs__ETjc6","tab":"code-suggestion_tab__0jGfE","fileMark":"code-suggestion_fileMark__L_c6P","fileName":"code-suggestion_fileName__TQK7q","filePath":"code-suggestion_filePath__wcyEu","stats":"code-suggestion_stats__nHI8H","statAdd":"code-suggestion_statAdd__A63a9","statDel":"code-suggestion_statDel__mcrr3","code":"code-suggestion_code__HKm1U","lines":"code-suggestion_lines__MXSxW","row":"code-suggestion_row__Vddx_","gutter":"code-suggestion_gutter__jv0wN","num":"code-suggestion_num__ORfiU","sign":"code-suggestion_sign__1RIE1","text":"code-suggestion_text__uCOX1","tKeyword":"code-suggestion_tKeyword__QM55J","tString":"code-suggestion_tString__KP3Vi","tNumber":"code-suggestion_tNumber__PXcVf","tFunction":"code-suggestion_tFunction__e44jF","tType":"code-suggestion_tType__ZHfDb","tPunct":"code-suggestion_tPunct__ExEaZ","tComment":"code-suggestion_tComment__1vwMQ","barRow":"code-suggestion_barRow__1_hsV","bar":"code-suggestion_bar__inwmy","barSummary":"code-suggestion_barSummary__Oprde","barActions":"code-suggestion_barActions__Cj7Hy","hunkButton":"code-suggestion_hunkButton__KXUwT","reject":"code-suggestion_reject__SI22d","accept":"code-suggestion_accept__V98dP","footer":"code-suggestion_footer__xNNYq","status":"code-suggestion_status__oJUWC","statusIcon":"code-suggestion_statusIcon__ew5_l","statusLabel":"code-suggestion_statusLabel__nlOwb","actionsSlot":"code-suggestion_actionsSlot__5daYe","statusText":"code-suggestion_statusText__fqLAQ","actions":"code-suggestion_actions__nygkh","footButton":"code-suggestion_footButton__UaXb_","shortcut":"code-suggestion_shortcut__32umo","spinner":"code-suggestion_spinner__vo6i7","cs-spin":"code-suggestion_cs-spin__N1oM7"});
A.reg(75925, function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { CodeSuggestionDemo: () => z, default: () => D });
  var s = r(95155), n = r(12115), a = r(18310), i = r(25354), o = r(80642), l = r(45263), c = r(64577), d = r(35484), u = r(9005), h = r(40852), p = r(92298), m = r(51288), g = r(52898), f = r(76266), y = r(7770);
  let _ = 'import type { Invoice } from "./types";\n\nexport async function fetchInvoice(id: string): Promise<Invoice> {\n  const res = await fetch(`/api/invoices/${id}`);\n  if (!res.ok) throw new Error(`Invoice ${id} failed: ${res.status}`);\n  return res.json();\n}', v = [
    {
      id: "limits",
      start: 1,
      remove: 0,
      summary: "Add retry limits",
      insert: [
        'import { sleep } from "./sleep";',
        "",
        "const MAX_ATTEMPTS = 4;",
        "const BASE_DELAY_MS = 250;"
      ]
    },
    {
      id: "loop",
      start: 3,
      remove: 1,
      summary: "Retry 429 and 5xx with backoff",
      insert: [
        "  let res = await fetch(`/api/invoices/${id}`);",
        "  for (let attempt = 1; attempt < MAX_ATTEMPTS; attempt++) {",
        "    if (res.status !== 429 && res.status < 500) break;",
        "    await sleep(BASE_DELAY_MS * 2 ** (attempt - 1));",
        "    res = await fetch(`/api/invoices/${id}`);",
        "  }"
      ]
    },
    {
      id: "error",
      start: 4,
      remove: 1,
      summary: "Mention retries in the error",
      insert: [
        "  if (!res.ok) {",
        "    throw new Error(`Invoice ${id} failed after retries: ${res.status}`);",
        "  }"
      ]
    }
  ];
  var x = r(58194), k = r.n(x);
  let w = /* @__PURE__ */ new Set([
    "as",
    "async",
    "await",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "finally",
    "for",
    "from",
    "function",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "interface",
    "let",
    "new",
    "of",
    "private",
    "public",
    "readonly",
    "return",
    "static",
    "switch",
    "throw",
    "try",
    "type",
    "typeof",
    "var",
    "void",
    "while",
    "yield"
  ]), b = /* @__PURE__ */ new Set(["true", "false", "null", "undefined", "this"]), j = /(\/\/.*$)|(`(?:[^`\\]|\\.)*`?|"(?:[^"\\]|\\.)*"?|'(?:[^'\\]|\\.)*'?)|(\d[\w.]*)|([A-Za-z_$][\w$]*)|([^\w\s`"'/]+|\/|\s+)/g;
  function N({ title: e2 = "TypeScript", ...t2 }) {
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, s.jsx)("rect", {
          x: "1",
          y: "1",
          width: "22",
          height: "22",
          fill: "#fff"
        }),
        (0, s.jsx)("path", {
          fill: "#3178C6",
          d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
        })
      ]
    });
  }
  let E = (...e2) => e2.filter(Boolean).join(" "), $ = (e2, t2) => `${e2} ${t2}${1 === e2 ? "" : "s"}`, A = {
    name: "Claude Sonnet 5.5",
    mark: (0, s.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, s.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      { "aria-hidden": "true", style: { color: "#D97757" } }
    )
  };
  function S() {
    return (0, s.jsxs)("svg", {
      className: k().spinner,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".2",
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
  let C = (0, n.memo)(function({ text: e2 }) {
    let t2 = (0, n.useMemo)(
      () => (function(e3) {
        let t3, r2 = [];
        for (j.lastIndex = 0; t3 = j.exec(e3); ) {
          let [n2, a2, i2, o2, l2] = t3, c2 = t3.index;
          if (a2)
            r2.push(
              (0, s.jsx)("span", { className: k().tComment, children: n2 }, c2)
            );
          else if (i2)
            r2.push(
              ...i2.startsWith("`") ? (function(e4, t4) {
                return e4.split(/(\$\{[^}]*\})/).filter(Boolean).map(
                  (e5, r3) => e5.startsWith("${") ? (0, s.jsx)(
                    "span",
                    { className: k().tPunct, children: e5 },
                    `${t4}-${r3}`
                  ) : (0, s.jsx)(
                    "span",
                    { className: k().tString, children: e5 },
                    `${t4}-${r3}`
                  )
                );
              })(i2, c2) : [
                (0, s.jsx)(
                  "span",
                  { className: k().tString, children: n2 },
                  c2
                )
              ]
            );
          else if (o2)
            r2.push(
              (0, s.jsx)("span", { className: k().tNumber, children: n2 }, c2)
            );
          else if (l2) {
            let t4 = e3.slice(c2 + n2.length).match(/^\s*(.)/)?.[1], a3 = w.has(l2) ? k().tKeyword : b.has(l2) ? k().tNumber : "(" === t4 ? k().tFunction : /^[A-Z]/.test(l2) ? k().tType : void 0;
            r2.push(
              a3 ? (0, s.jsx)("span", { className: a3, children: n2 }, c2) : n2
            );
          } else r2.push(n2);
          0 === n2.length && j.lastIndex++;
        }
        return r2;
      })(e2),
      [e2]
    );
    return (0, s.jsx)("span", { className: k().text, children: e2 ? t2 : "\u200B" });
  });
  function T({
    code: e2,
    hunks: t2,
    status: r2,
    instruction: x2 = "Add retry with backoff",
    model: w2 = A,
    fileName: b2 = "fetch-invoice.ts",
    filePath: j2 = void 0 === t2 ? "src/billing" : void 0,
    fileMark: M2,
    error: R2,
    autoPlay: L2 = true,
    shortcuts: P2 = true,
    maxCodeHeight: z2,
    onDecision: D2,
    onResolve: W,
    onStop: I,
    onRegenerate: B,
    className: U,
    style: O
  }) {
    let K, F = (0, a.I)() ?? false, H = (0, f.YV)(), Y = void 0 === t2, q = e2 ?? (Y ? _ : ""), V = (0, n.useMemo)(() => q.split("\n"), [q]), X = (0, n.useMemo)(
      () => (function(e3, t3) {
        let r3 = [...e3].sort((e4, t4) => e4.start - t4.start), s2 = [], n2 = 0;
        for (let e4 of r3) {
          let r4 = Math.min(Math.max(0, Math.floor(e4.start)), t3);
          if (r4 < n2) continue;
          let a2 = Math.min(Math.max(0, e4.remove ?? 0), t3 - r4);
          s2.push({
            id: e4.id,
            start: r4,
            remove: a2,
            insert: e4.insert ?? [],
            summary: e4.summary,
            source: e4
          }), n2 = r4 + a2;
        }
        return s2;
      })(t2 ?? v, V.length),
      [t2, V.length]
    ), G = (0, n.useMemo)(() => {
      let e3;
      return e3 = [], X.forEach((t3, r3) => {
        e3.push({ hunk: r3, lines: 0 }), t3.insert.forEach((t4, s2) => e3.push({ hunk: r3, lines: s2 + 1 }));
      }), e3;
    }, [X]), Q = (0, n.useRef)(null), Z = (0, n.useRef)(null), [J, ee] = (0, n.useState)({
      phase: "idle",
      step: 0,
      stopped: false,
      run: 0
    }), [et, er] = (0, n.useState)(false), [es, en] = (0, n.useState)(null), ea = (0, n.useRef)(false), ei = (0, n.useRef)(false), eo = (0, n.useCallback)(
      (e3) => {
        ei.current = false, e3 && er(true), ee((e4) => ({
          phase: F ? "ready" : "thinking",
          step: 0,
          stopped: false,
          run: e4.run + 1
        }));
      },
      [F]
    );
    (0, n.useEffect)(() => {
      if (!Y) return;
      let e3 = (e4) => ee((t4) => "idle" === t4.phase ? { ...t4, phase: e4 } : t4), t3 = Q.current;
      if (F || !t3 || "u" < typeof IntersectionObserver) {
        ea.current = true;
        let t4 = requestAnimationFrame(() => e3(F ? "ready" : "thinking"));
        return () => cancelAnimationFrame(t4);
      }
      let r3 = new IntersectionObserver(
        ([t4]) => {
          ea.current = t4.isIntersecting, t4.isIntersecting && (e3("thinking"), ei.current && eo(false));
        },
        { threshold: 0.35 }
      );
      return r3.observe(t3), () => r3.disconnect();
    }, [Y, F, eo]), (0, n.useEffect)(() => {
      let e3;
      if (Y) {
        if ("thinking" === J.phase)
          e3 = window.setTimeout(
            () => ee((e4) => ({ ...e4, phase: "streaming", step: 0 })),
            820
          );
        else if ("streaming" === J.phase)
          if (J.step >= G.length)
            e3 = window.setTimeout(
              () => ee((e4) => ({ ...e4, phase: "ready" })),
              140
            );
          else {
            let t3 = G[J.step], r3 = 0 === t3.lines ? 150 * (0 !== J.step) : 1 === t3.lines ? X[t3.hunk].remove ? 190 : 75 : 38;
            e3 = window.setTimeout(
              () => ee((e4) => ({ ...e4, step: e4.step + 1 })),
              r3
            );
          }
        return () => window.clearTimeout(e3);
      }
    }, [Y, J.phase, J.step, G, X]);
    let el = Y ? "idle" === J.phase ? "thinking" : J.phase : r2 ?? "ready", ec = (0, n.useMemo)(() => {
      if (!Y) return X;
      if ("idle" === J.phase || "thinking" === J.phase) return [];
      if ("ready" === J.phase && !J.stopped) return X;
      let e3 = G[J.step - 1];
      return e3 ? "ready" === J.phase ? X.slice(
        0,
        e3.lines === X[e3.hunk].insert.length ? e3.hunk + 1 : e3.hunk
      ) : X.slice(0, e3.hunk + 1).map(
        (t3, r3) => r3 === e3.hunk ? { ...t3, insert: t3.insert.slice(0, e3.lines) } : t3
      ) : [];
    }, [Y, X, G, J.phase, J.step, J.stopped]), [ed, eu] = (0, n.useState)({}), eh = (0, n.useRef)(ed), [ep, em] = (0, n.useState)(""), [eg, ef] = (0, n.useState)(J.run);
    (eg !== J.run || !Y && "thinking" === el && Object.keys(ed).length) && (ef(J.run), eu({}), em("")), (0, n.useEffect)(() => {
      eh.current = ed;
    }, [ed]);
    let ey = (0, n.useRef)({ onDecision: D2, onResolve: W });
    (0, n.useEffect)(() => {
      ey.current = { onDecision: D2, onResolve: W };
    });
    let e_ = (e3) => ed[e3] ?? "pending", ev = "ready" === el ? ec.filter((e3) => "pending" === e_(e3.id)).map((e3) => e3.id) : [], ex = ec.filter((e3) => "accepted" === e_(e3.id)).length, ek = ec.filter((e3) => "rejected" === e_(e3.id)).length, ew = "ready" === el && ec.length > 0 && 0 === ev.length, eb = (0, n.useCallback)(
      (e3, t3, r3 = false) => {
        let s2 = { ...eh.current }, n2 = e3.filter((e4) => (s2[e4] ?? "pending") === "pending");
        if (!n2.length) return;
        n2.forEach((e4) => {
          s2[e4] = t3;
        }), eh.current = s2, eu(s2);
        let a2 = "accepted" === t3 ? "Accepted" : "Rejected", i2 = ec.find((e4) => e4.id === n2[0]);
        em(
          n2.length > 1 ? `${a2} ${n2.length} changes` : `${a2}: ${i2?.summary ?? `change ${ec.indexOf(i2) + 1}`}`
        );
        let o2 = (function(e4, t4, r4) {
          let s3 = [], n3 = 0;
          for (let a3 of t4)
            s3.push(...e4.slice(n3, a3.start)), s3.push(
              ..."accepted" === r4[a3.id] ? a3.insert : e4.slice(a3.start, a3.start + a3.remove)
            ), n3 = a3.start + a3.remove;
          return s3.push(...e4.slice(n3)), s3.join("\n");
        })(V, ec, s2);
        n2.forEach((e4) => {
          let r4 = ec.find((t4) => t4.id === e4);
          r4 && ey.current.onDecision?.(r4.source, t3, o2);
        }), ec.every((e4) => s2[e4.id] && "pending" !== s2[e4.id]) && ey.current.onResolve?.({
          code: o2,
          accepted: ec.filter((e4) => "accepted" === s2[e4.id]).map((e4) => e4.id),
          rejected: ec.filter((e4) => "rejected" === s2[e4.id]).map((e4) => e4.id)
        }), r3 && requestAnimationFrame(() => {
          let e4 = Q.current;
          if (!e4 || !e4.contains(document.activeElement) && document.activeElement !== document.body)
            return;
          let t4 = ec.find(
            (e5) => (s2[e5.id] ?? "pending") === "pending"
          )?.id, r4 = t4 ? e4.querySelector(`[data-accept="${CSS.escape(t4)}"]`) : null;
          (r4 ?? Z.current)?.focus({ preventScroll: true });
        });
      },
      [ec, V]
    ), ej = (0, n.useCallback)(
      (e3 = false) => eb(
        ec.map((e4) => e4.id),
        "accepted",
        e3
      ),
      [eb, ec]
    ), eN = (0, n.useCallback)(
      (e3 = false) => eb(
        ec.map((e4) => e4.id),
        "rejected",
        e3
      ),
      [eb, ec]
    ), eE = Y && L2 && !F && !et;
    (0, n.useEffect)(() => {
      if (!eE || "ready" !== J.phase || J.stopped) return;
      let e3 = [], t3 = (t4, r4) => e3.push(window.setTimeout(r4, t4)), r3 = (e4, r4, s2) => {
        t3(e4, () => en(r4)), t3(e4 + 170, () => {
          en(null), s2();
        });
      };
      if (J.run % 2 == 0) {
        let [e4, t4, s2] = X;
        e4 && r3(1300, `accept:${e4.id}`, () => eb([e4.id], "accepted")), t4 && r3(2150, `accept:${t4.id}`, () => eb([t4.id], "accepted")), s2 && r3(3e3, `reject:${s2.id}`, () => eb([s2.id], "rejected")), X.slice(3).forEach(
          (e5, t5) => r3(3850 + 850 * t5, `accept:${e5.id}`, () => eb([e5.id], "accepted"))
        );
      } else
        r3(
          1500,
          "accept-all",
          () => eb(
            X.map((e4) => e4.id),
            "accepted"
          )
        );
      return () => {
        e3.forEach((e4) => window.clearTimeout(e4)), en(null);
      };
    }, [eE, J.phase, J.stopped, J.run, X, eb]), (0, n.useEffect)(() => {
      if (!eE || !ew) return;
      let e3 = window.setTimeout(() => {
        ea.current ? eo(false) : ei.current = true;
      }, 2600);
      return () => window.clearTimeout(e3);
    }, [eE, ew, eo]);
    let e$ = () => {
      eE && er(true);
    }, eA = (0, n.useMemo)(() => {
      let e3 = [], t3 = 0, r3 = (r4) => {
        for (; t3 < r4; t3++)
          e3.push({ key: `c${t3}`, kind: "ctx", text: V[t3] });
      };
      ec.forEach((s3, n2) => {
        r3(s3.start);
        let a2 = ed[s3.id] ?? "pending";
        if ("accepted" !== a2)
          for (let t4 = 0; t4 < s3.remove; t4++)
            e3.push({
              key: `c${s3.start + t4}`,
              kind: "del",
              text: V[s3.start + t4],
              hunk: s3,
              decision: a2
            });
        "rejected" !== a2 && s3.insert.forEach(
          (t4, r4) => e3.push({
            key: `${s3.id}+${r4}`,
            kind: "add",
            text: t4,
            hunk: s3,
            decision: a2
          })
        ), "ready" === el && "pending" === a2 && e3.push({ key: `${s3.id}-bar`, kind: "bar", hunk: s3, index: n2 }), t3 = s3.start + s3.remove;
      }), r3(V.length);
      let s2 = 0;
      for (let t4 of e3)
        ("ctx" === t4.kind || "add" === t4.kind && "rejected" !== t4.decision || "del" === t4.kind && "rejected" === t4.decision) && (t4.num = ++s2);
      return e3;
    }, [ec, V, ed, el]), eS = ec.reduce(
      (e3, t3) => e3 + ("rejected" === e_(t3.id) ? 0 : t3.insert.length),
      0
    ), eC = ec.reduce((e3, t3) => e3 + ("rejected" === e_(t3.id) ? 0 : t3.remove), 0), eT = Y && J.stopped, eM = "busy";
    "thinking" === el ? K = `Reading ${b2}` : "streaming" === el ? K = "Writing changes" : "error" === el ? (eM = "error", K = R2 ?? "The model stopped responding. Nothing was changed.") : ec.length ? ev.length ? (eM = "review", K = `${$(ev.length, "change")} to review`) : ex === ec.length ? (eM = "done", K = 1 === ec.length ? "Change applied" : "All changes applied") : ek === ec.length ? (eM = "muted", K = "Suggestion rejected") : (eM = "done", K = `${ex} applied, ${ek} rejected`) : (eM = "muted", K = eT ? "Stopped before any changes" : "No changes needed"), eT && ev.length && (K = `Stopped early, ${$(ev.length, "change")} to review`);
    let eR = "ready" === el && ec.length > 0 && ek === ec.length, eL = "muted" === eM && eR ? "rejected" : eM, eP = "busy" === eL ? (0, s.jsx)(S, {}) : "review" === eL ? (0, s.jsx)(l.A, { size: 16, strokeWidth: 1.75 }) : "done" === eL ? (0, s.jsx)(c.A, { size: 16, strokeWidth: 2 }) : "error" === eL ? (0, s.jsx)(d.A, { size: 16, strokeWidth: 1.75 }) : "rejected" === eL ? (0, s.jsx)(u.A, { size: 16, strokeWidth: 1.75 }) : (0, s.jsx)(c.A, { size: 16, strokeWidth: 1.75 }), ez = "streaming" === el ? "Writing changes" : [ep, K, ew && Y ? "Simulated, nothing was written to disk" : ""].filter(Boolean).join(". "), eD = ("thinking" === el || "streaming" === el) && (Y || !!I), eW = Y || !!B, eI = eD ? "busy" : "error" === el ? eW ? "error" : "none" : ev.length ? "review" : "ready" === el && eW ? "done" : "none", eB = () => requestAnimationFrame(() => Z.current?.focus({ preventScroll: true }));
    (0, n.useEffect)(() => {
      let e3 = Z.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        () => e3.style.setProperty("--cs-viewport", `${e3.clientWidth}px`)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let eU = F ? { duration: 0 } : {
      height: { duration: 0.12, ease: [...y.T.ease.enter] },
      opacity: { duration: 0.15, ease: "easeOut" }
    }, eO = F ? { duration: 0 } : {
      height: { type: "spring", visualDuration: 0.26, bounce: 0 },
      opacity: { duration: 0.12, ease: "easeOut" }
    }, eK = F ? { duration: 0 } : { duration: y.T.duration.fast, ease: [...y.T.ease.standard] }, eF = F ? { duration: 0 } : { duration: 0.1, ease: "easeOut" }, eH = void 0 === M2 ? (0, s.jsx)(N, { "aria-hidden": "true" }) : M2;
    return (0, s.jsxs)("div", {
      ref: Q,
      role: "group",
      "aria-label": `Code suggestion: ${x2}`,
      className: E(k().root, U),
      style: O,
      "data-status": el,
      onKeyDown: (e3) => {
        e$(), P2 && (e3.metaKey || e3.ctrlKey) && "ready" === el && ev.length && ("Enter" === e3.key ? (e3.preventDefault(), ej(true)) : "Backspace" === e3.key && (e3.preventDefault(), eN(true)));
      },
      onPointerMove: e$,
      onPointerDown: e$,
      children: [
        (0, s.jsxs)("header", {
          className: k().header,
          children: [
            w2?.mark ? (0, s.jsx)("span", {
              className: k().modelMark,
              "aria-hidden": "true",
              children: w2.mark
            }) : (0, s.jsx)("span", {
              className: k().modelMark,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("p", { className: k().instruction, children: x2 }),
            w2 ? (0, s.jsx)("p", { className: k().model, children: w2.name }) : null
          ]
        }),
        (0, s.jsxs)("div", {
          className: k().editor,
          children: [
            (0, s.jsxs)("div", {
              className: k().tabs,
              children: [
                (0, s.jsxs)("span", {
                  className: k().tab,
                  children: [
                    eH ? (0, s.jsx)("span", {
                      className: k().fileMark,
                      "aria-hidden": "true",
                      children: eH
                    }) : null,
                    (0, s.jsx)("span", {
                      className: k().fileName,
                      children: b2
                    }),
                    j2 ? (0, s.jsx)("span", {
                      className: k().filePath,
                      children: j2
                    }) : null
                  ]
                }),
                (0, s.jsxs)("span", {
                  className: k().stats,
                  children: [
                    (0, s.jsx)("span", {
                      className: k().srOnly,
                      children: `${eS} lines added, ${eC} removed`
                    }),
                    (0, s.jsxs)("span", {
                      className: k().statAdd,
                      "data-zero": 0 === eS || void 0,
                      "aria-hidden": "true",
                      children: ["+", eS]
                    }),
                    (0, s.jsxs)("span", {
                      className: k().statDel,
                      "data-zero": 0 === eC || void 0,
                      "aria-hidden": "true",
                      children: ["\u2212", eC]
                    })
                  ]
                })
              ]
            }),
            (0, s.jsx)("div", {
              ref: Z,
              className: k().code,
              tabIndex: 0,
              role: "region",
              "aria-label": `Suggested changes to ${b2}`,
              style: z2 ? { maxHeight: z2, overflowY: "auto" } : void 0,
              children: (0, s.jsx)("div", {
                className: k().lines,
                children: (0, s.jsx)(o.N, {
                  initial: false,
                  children: eA.map(
                    (e3) => ((e4) => {
                      if ("bar" === e4.kind) {
                        let { hunk: t4, index: r3 } = e4, n2 = t4.summary ?? `change ${r3 + 1}`;
                        return (0, s.jsx)(
                          i.PY1.div,
                          {
                            className: k().barRow,
                            "data-hunk-bar": "",
                            initial: { height: 0, opacity: 0 },
                            animate: { height: 40, opacity: 1 },
                            exit: { height: 0, opacity: 0, transition: eO },
                            transition: F ? { duration: 0 } : {
                              height: {
                                type: "spring",
                                visualDuration: 0.24,
                                bounce: 0
                              },
                              opacity: { duration: 0.16, ease: "easeOut" }
                            },
                            children: (0, s.jsxs)("div", {
                              className: k().bar,
                              children: [
                                (0, s.jsx)("span", {
                                  className: k().barSummary,
                                  children: t4.summary ?? `Change ${r3 + 1} of ${ec.length}`
                                }),
                                (0, s.jsxs)("div", {
                                  className: k().barActions,
                                  children: [
                                    (0, s.jsx)(m.$, {
                                      size: "sm",
                                      variant: "ghost",
                                      className: E(k().hunkButton, k().reject),
                                      "data-pressing": es === `reject:${t4.id}` || void 0,
                                      "aria-label": `Reject ${n2}`,
                                      onClick: () => eb([t4.id], "rejected", true),
                                      children: "Reject"
                                    }),
                                    (0, s.jsx)(m.$, {
                                      size: "sm",
                                      variant: "primary",
                                      className: E(k().hunkButton, k().accept),
                                      "data-pressing": es === `accept:${t4.id}` || void 0,
                                      "data-accept": t4.id,
                                      "aria-label": `Accept ${n2}`,
                                      onClick: () => eb([t4.id], "accepted", true),
                                      children: "Accept"
                                    })
                                  ]
                                })
                              ]
                            })
                          },
                          e4.key
                        );
                      }
                      let t3 = "ctx" === e4.kind ? void 0 : e4.decision;
                      return (0, s.jsxs)(
                        i.PY1.div,
                        {
                          className: k().row,
                          "data-kind": e4.kind,
                          "data-decision": t3,
                          initial: { height: 0, opacity: 0 },
                          animate: { height: 20, opacity: 1 },
                          exit: { height: 0, opacity: 0, transition: eO },
                          transition: eU,
                          children: [
                            (0, s.jsxs)("span", {
                              className: k().gutter,
                              "aria-hidden": "true",
                              children: [
                                (0, s.jsx)("span", {
                                  className: k().num,
                                  children: e4.num ?? ""
                                }),
                                (0, s.jsx)("span", {
                                  className: k().sign,
                                  children: "add" === e4.kind ? "+" : "del" === e4.kind ? "\u2212" : ""
                                })
                              ]
                            }),
                            "ctx" !== e4.kind && "pending" === t3 ? (0, s.jsx)("span", {
                              className: k().srOnly,
                              children: "add" === e4.kind ? "Added: " : "Removed: "
                            }) : null,
                            (0, s.jsx)(C, { text: e4.text })
                          ]
                        },
                        e4.key
                      );
                    })(e3)
                  )
                })
              })
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: k().footer,
          children: [
            (0, s.jsxs)("div", {
              className: k().status,
              "aria-hidden": "true",
              children: [
                (0, s.jsx)("span", {
                  className: k().statusIcon,
                  children: (0, s.jsx)(o.N, {
                    initial: false,
                    children: (0, s.jsx)(
                      i.PY1.span,
                      {
                        "data-tone": eM,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0, transition: eF },
                        transition: eK,
                        children: eP
                      },
                      eL
                    )
                  })
                }),
                (0, s.jsx)("span", {
                  className: k().statusLabel,
                  children: (0, s.jsx)(o.N, {
                    initial: false,
                    children: (0, s.jsx)(
                      i.PY1.span,
                      {
                        "data-tone": eM,
                        initial: { opacity: 0, y: 2 * !F },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, transition: eF },
                        transition: eK,
                        children: "busy" === eM ? (0, s.jsx)(g.n, {
                          className: k().statusText,
                          children: K
                        }) : (0, s.jsx)("span", {
                          className: k().statusText,
                          children: K
                        })
                      },
                      K
                    )
                  })
                })
              ]
            }),
            (0, s.jsx)("div", {
              className: k().actionsSlot,
              children: (0, s.jsx)(o.N, {
                initial: false,
                children: "none" === eI ? null : (0, s.jsxs)(
                  i.PY1.div,
                  {
                    className: k().actions,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: eF },
                    transition: eK,
                    children: [
                      "busy" === eI ? (0, s.jsxs)(m.$, {
                        size: "sm",
                        variant: "secondary",
                        className: k().footButton,
                        onClick: () => {
                          Y && ee((e3) => ({
                            ...e3,
                            phase: "ready",
                            stopped: true
                          })), I?.(), eB();
                        },
                        children: [
                          (0, s.jsx)(h.A, {
                            size: 11,
                            strokeWidth: 0,
                            fill: "currentColor",
                            "aria-hidden": "true"
                          }),
                          "Stop"
                        ]
                      }) : null,
                      "review" === eI ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(m.$, {
                            size: "sm",
                            variant: "secondary",
                            className: k().footButton,
                            onClick: () => eN(true),
                            "aria-keyshortcuts": P2 ? "Meta+Backspace Control+Backspace" : void 0,
                            children: "Reject all"
                          }),
                          (0, s.jsxs)(m.$, {
                            size: "sm",
                            variant: "primary",
                            className: E(k().footButton, k().accept),
                            "data-pressing": "accept-all" === es || void 0,
                            onClick: () => ej(true),
                            "aria-keyshortcuts": P2 ? "Meta+Enter Control+Enter" : void 0,
                            children: [
                              "Accept all",
                              P2 ? (0, s.jsxs)("span", {
                                className: k().shortcut,
                                "aria-hidden": "true",
                                children: [
                                  "mac" === H ? "\u2318" : "Ctrl",
                                  "\u21B5"
                                ]
                              }) : null
                            ]
                          })
                        ]
                      }) : null,
                      "done" === eI || "error" === eI ? (0, s.jsxs)(m.$, {
                        size: "sm",
                        variant: "secondary",
                        className: k().footButton,
                        onClick: () => {
                          Y && eo(true), B?.(), eB();
                        },
                        children: [
                          (0, s.jsx)(p.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "error" === eI ? "Retry" : "Regenerate"
                        ]
                      }) : null
                    ]
                  },
                  eI
                )
              })
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: k().srOnly,
          "aria-live": "polite",
          role: "status",
          children: ez
        })
      ]
    });
  }
  var M = r(66558), R = r(35016), L = r.n(R);
  let P = [
    { value: "live", label: "Suggestion" },
    { value: "empty", label: "No changes" },
    { value: "error", label: "Error" }
  ];
  function z() {
    let [e2, t2] = (0, n.useState)("live"), [r2, a2] = (0, n.useState)(0), i2 = () => {
      t2("live"), a2((e3) => e3 + 1);
    };
    return (0, s.jsxs)("div", {
      className: L().demo,
      children: [
        (0, s.jsx)(M.A, {
          options: P,
          value: e2,
          onValueChange: t2,
          label: "Suggestion state",
          className: L().control
        }),
        "live" === e2 ? (0, s.jsx)(T, {}, r2) : "empty" === e2 ? (0, s.jsx)(T, {
          code: _,
          hunks: [],
          filePath: "src/billing",
          instruction: "Use the shared fetch client",
          onRegenerate: i2
        }) : (0, s.jsx)(T, {
          code: _,
          hunks: [],
          status: "error",
          filePath: "src/billing",
          error: "The model stopped responding. Nothing was changed.",
          onRegenerate: i2
        })
      ]
    });
  }
  let D = z;
};

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
A.cssFor("code-suggestion", [12053,35016,58194]);
A.item("code-suggestion", {entry:75925, export:"CodeSuggestionDemo", kind:"component", tier:"pro", unresolved:[]});
})();