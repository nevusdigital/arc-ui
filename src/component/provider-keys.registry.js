/* provider-keys (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(7512, ".demo{display:flex;justify-content:center;width:100%}", {"demo":"demo"});
A.regCss(17522, ".root{--pk-mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,\"Liberation Mono\",monospace;--pk-pad:20px;container-type:inline-size;box-sizing:border-box;width:100%;max-width:680px;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n@container (max-width: 559px){.root{--pk-pad:16px}\n.header{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:18px var(--pk-pad) 16px}\n.header{padding-top:16px}\n.heading{min-width:0;padding-top:1px}\n.title{margin:0;font-size:15px;font-weight:500;line-height:20px;letter-spacing:-.012em}\n.description{margin:2px 0 0;color:var(--text-muted);font-size:13px;line-height:18px;text-wrap:pretty}\n.headerButton{flex:none}\n.headerButton svg{width:16px;height:16px;margin-left:-2px}\n.list{margin:0;padding:0;border-top:1px solid var(--border-subtle);list-style:none}\n.row{display:grid;grid-template-columns:20px minmax(0,1fr) 136px 136px;column-gap:12px;align-items:center;padding:14px var(--pk-pad)}\n.row+.row{border-top:1px solid var(--border-subtle)}\n.row{grid-template-columns:20px minmax(0,1fr) auto}\n.mark{grid-row:1/span 2;grid-column:1;display:block;width:20px;height:20px;color:var(--foreground)}\n.mark{grid-row:1;align-self:start}\n.name{grid-row:1;height:20px;overflow:hidden;font-weight:500;white-space:nowrap;text-overflow:ellipsis}\n.key,.name{grid-column:2;display:flex;align-items:center;min-width:0}\n.skeletonRow .key,.skeletonRow .meta,.skeletonRow .name,.skeletonRow .status{overflow:visible}\n.key{grid-row:2;height:18px;margin-top:2px;font-size:13px;line-height:18px}\n.key .bar,.meta .bar{height:8px}\n.key{grid-row:2;grid-column:2/-1}\n.status{grid-row:1;height:20px}\n.meta,.status{grid-column:3;display:flex;align-items:center;min-width:0}\n.status{grid-row:1;grid-column:3;justify-content:flex-end}\n.meta{grid-row:2;height:18px;margin-top:2px;color:var(--text-muted);font-size:13px;line-height:18px}\n.meta{grid-row:3;grid-column:2;height:32px;margin-top:6px}\n.actions{grid-row:1/span 2;grid-column:4;display:flex;justify-content:flex-end;min-width:0}\n.skeletonRow .actions{height:32px}\n.actions{grid-row:3;grid-column:3;margin-top:6px}\n.formWrap{grid-row:3;grid-column:2/-1;min-width:0;margin-inline:-4px;overflow:hidden}\n.formWrap{grid-row:4;grid-column:1/-1}\n.swap{display:grid;min-width:0;max-width:100%}\n.swapItem{grid-area:1/1;display:flex;align-items:center;min-width:0;overflow:hidden}\n.actionSwap>.swapItem{justify-content:flex-end;overflow:visible}\n.actionSwap{justify-items:end}\n.mono{display:block;min-width:0;overflow:hidden;color:var(--text-secondary);font-family:var(--pk-mono);font-size:12.5px;letter-spacing:0;white-space:nowrap;text-overflow:ellipsis}\n.helpText .mono{display:inline;font-size:12.5px;color:var(--text-secondary)}\n.dots,.prefix{color:var(--text-muted)}\n.dots{letter-spacing:.06em}\n.revealed{color:var(--foreground)}\n.hint,.metaText{display:block;min-width:0;overflow:hidden;color:var(--text-muted);white-space:nowrap;text-overflow:ellipsis}\n.statusChip{display:inline-flex;align-items:center;height:24px;margin:-2px 0 -2px -6px;padding:0 6px;box-sizing:border-box;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;line-height:18px;-webkit-tap-highlight-color:transparent}\n.statusChip{margin:-2px -6px -2px 0}\n.statusButton{cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.statusButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.statusButton:active{background:var(--surface-muted)}\n.statusButton[aria-busy=true]{cursor:progress}\n.statusInner{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}\n.statusInner svg{flex:none;width:14px;height:14px;stroke-width:2}\n.ok{color:var(--success)}\n.bad{color:var(--danger)}\n.idle{color:var(--text-muted)}\n.iconRow{display:flex;align-items:center;gap:2px;margin-right:-8px}\n.icon{position:relative;display:grid;flex:none;place-items:center;width:32px;height:32px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),scale var(--duration-instant) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.icon:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.icon:active:not(:disabled){background:var(--surface-muted);scale:.94}\n.icon:disabled{cursor:not-allowed;opacity:.4}\n.icon[aria-expanded=true],.icon[aria-pressed=true]{background:var(--surface-muted);color:var(--foreground)}\n.icon:active:not(:disabled),.pill:active{scale:1}\n.danger:hover:not(:disabled){color:var(--danger)}\n.copied,.copied:hover:not(:disabled){color:var(--success)}\n.iconSlot{grid-area:1/1;display:grid;place-items:center}\n.iconSlot svg{width:16px;height:16px;stroke-width:1.75}\n.countdown{position:absolute;inset:0;width:100%;height:100%;rotate:-90deg;pointer-events:none;animation:ringIn var(--duration-instant) var(--ease-standard)}\n.countdown circle{fill:none;stroke:var(--accent);stroke-width:1.5;stroke-linecap:round;stroke-dasharray:100;animation:deplete var(--reveal-ms,5s) linear forwards}\n.pill{display:inline-flex;flex:none;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 12px;box-sizing:border-box;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:13px;font-weight:500;line-height:18px;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-instant) var(--ease-standard),scale var(--duration-instant) var(--ease-standard)}\n.pill svg{width:14px;height:14px;margin-left:-2px;stroke-width:2}\n@media (hover:hover) and (pointer:fine){.pill:hover{background:var(--surface-muted)}\n.pill:active{background:var(--surface-muted);scale:.97}\n.pill[aria-expanded=true]{background:var(--surface-muted)}\n.form{display:grid;grid-template-columns:minmax(0,1fr) auto auto;grid-template-areas:\"input cancel save\" \"help help sample\";column-gap:8px;row-gap:8px;align-items:center;padding:14px 4px 4px}\n.form .save{grid-area:save;min-width:112px;border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.form .save[aria-disabled=true]{cursor:progress}\n.form{grid-template-areas:\"input input input\" \"help help help\" \"sample cancel save\"}\n.input{grid-area:input;box-sizing:border-box;width:100%;min-width:0;height:var(--control-height-sm);padding:0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font-family:var(--pk-mono);font-size:13px;letter-spacing:0;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted);opacity:1}\n.input:read-only{background:var(--surface-muted);color:var(--text-secondary)}\n.input[data-tone=bad]{border-color:color-mix(in oklab,var(--danger) 65%,var(--border))}\n.input[data-tone=ok]{border-color:color-mix(in oklab,var(--success) 55%,var(--border))}\n.cancel{grid-area:cancel}\n.save svg{width:14px;height:14px;stroke-width:2.25}\n.save .spinner{color:currentColor}\n.help{grid-area:help;display:flex;align-items:center;min-width:0;height:18px;margin:0;color:var(--text-muted);font-size:13px;line-height:18px}\n.help[data-tone=bad]{color:var(--danger)}\n.help[data-tone=ok]{color:var(--text-secondary)}\n.help[data-tone=ok] svg{color:var(--success)}\n.helpInner{display:inline-flex;align-items:center;gap:6px;min-width:0}\n.helpInner>svg{flex:none;width:14px;height:14px;stroke-width:2}\n.helpText{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.sample{grid-area:sample;justify-self:end;height:18px;padding:0;border:0;background:none;color:var(--text-secondary);font:inherit;font-size:13px;line-height:18px;white-space:nowrap;cursor:pointer;text-decoration:underline;text-decoration-color:var(--border);text-underline-offset:3px;transition:color var(--duration-instant) var(--ease-standard),text-decoration-color var(--duration-instant) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.sample:hover:not(:disabled){color:var(--foreground);text-decoration-color:currentColor}\n.sample:disabled{cursor:default;opacity:.5}\n.sample{justify-self:start}\n.spinner{display:block;flex:none;width:12px;height:12px;margin:1px;box-sizing:border-box;border:1.5px solid;border-right:1.5px solid transparent;border-radius:50%;color:var(--text-muted);animation:spin .7s linear infinite}\n@media (prefers-reduced-motion:reduce){.spinner{animation-duration:1.6s}\n.footer{display:flex;align-items:center;gap:8px;margin:0;padding:12px var(--pk-pad) 14px;border-top:1px solid var(--border-subtle);color:var(--text-muted);font-size:13px;line-height:18px}\n.footer svg{flex:none;width:14px;height:14px;stroke-width:2}\n.skeletonMark{border-radius:50%;background:var(--surface-muted)}\n.bar{display:block;height:10px;border-radius:5px;background:var(--surface-muted);animation:pulse 1.2s var(--ease-in-out) infinite alternate}\n.bar{animation:none}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}", {"root":"root","header":"header","heading":"heading","title":"title","description":"description","headerButton":"headerButton","list":"list","row":"row","mark":"mark","name":"name","key":"key","skeletonRow":"skeletonRow","meta":"meta","status":"status","bar":"bar","actions":"actions","formWrap":"formWrap","swap":"swap","swapItem":"swapItem","actionSwap":"actionSwap","mono":"mono","helpText":"helpText","dots":"dots","prefix":"prefix","revealed":"revealed","hint":"hint","metaText":"metaText","statusChip":"statusChip","statusButton":"statusButton","statusInner":"statusInner","ok":"ok","bad":"bad","idle":"idle","iconRow":"iconRow","icon":"icon","pill":"pill","danger":"danger","copied":"copied","iconSlot":"iconSlot","countdown":"countdown","form":"form","save":"save","input":"input","cancel":"cancel","spinner":"spinner","help":"help","helpInner":"helpInner","sample":"sample","footer":"footer","skeletonMark":"skeletonMark","srOnly":"srOnly"});
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
A.reg(50981, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "shield-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(58094, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ProviderKeysDemo: () => W, default: () => Y });
  var r = a(95155), n = a(12115), s = a(80642), i = a(25354), o = a(18310), l = a(50981), d = a(2125), c = a(64962), u = a(35484), p = a(23723), h = a(89034), m = a(25182), y = a(64577), v = a(99314), x = a(82749), f = a(25879), k = a(7770), _ = a(51288), g = a(52898), j = a(36690);
  let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", w = `${b}-_`;
  function A(e2, t2) {
    let a2 = new Uint8Array(e2);
    globalThis.crypto?.getRandomValues?.(a2);
    let r2 = "";
    for (let n2 = 0; n2 < e2; n2++)
      r2 += t2[(a2[n2] || Math.floor(256 * Math.random())) % t2.length];
    return r2;
  }
  let $ = {
    anthropic: {
      id: "anthropic",
      name: "Anthropic",
      maskPrefix: "sk-ant-",
      startsWith: "sk-ant-",
      pattern: /^sk-ant-[a-z0-9]+-[A-Za-z0-9_-]{40,}$/,
      placeholder: "sk-ant-api03-\u2026",
      console: "console.anthropic.com",
      formatHint: "Anthropic keys start with sk-ant-",
      testModel: "Claude Opus 5.5",
      Mark: function({ title: e2 = "Anthropic", ...t2 }) {
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
      },
      sample: () => `sk-ant-api03-${A(95, w)}`
    },
    openai: {
      id: "openai",
      name: "OpenAI",
      maskPrefix: "sk-proj-",
      startsWith: "sk-",
      pattern: /^sk-(proj-|svcacct-|admin-)?[A-Za-z0-9_-]{40,}$/,
      placeholder: "sk-proj-\u2026",
      console: "platform.openai.com",
      formatHint: "OpenAI keys start with sk-",
      testModel: "GPT-6.1 Sol",
      Mark: function({ title: e2 = "OpenAI", ...t2 }) {
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
      },
      sample: () => `sk-proj-${A(128, w)}`
    },
    google: {
      id: "google",
      name: "Google AI",
      maskPrefix: "AIza",
      startsWith: "AIza",
      pattern: /^AIza[0-9A-Za-z_-]{35}$/,
      placeholder: "AIza\u2026",
      console: "aistudio.google.com",
      formatHint: "Google AI keys start with AIza",
      testModel: "Gemini 4 Argon",
      Mark: function({ title: e2 = "Gemini", ...t2 }) {
        let a2 = (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: [
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: "#3186FF"
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-0-${a2})`
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-1-${a2})`
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-2-${a2})`
            }),
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-0-${a2}`,
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
                  id: `lobe-icons-gemini-1-${a2}`,
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
                  id: `lobe-icons-gemini-2-${a2}`,
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
      },
      sample: () => `AIzaSy${A(33, w)}`
    },
    mistral: {
      id: "mistral",
      name: "Mistral",
      maskPrefix: "",
      startsWith: "",
      pattern: /^[A-Za-z0-9]{32}$/,
      placeholder: "32 letters and numbers",
      console: "console.mistral.ai",
      formatHint: "Mistral keys are 32 letters and numbers",
      testModel: "Mistral Large 4",
      Mark: function({ title: e2 = "Mistral AI", ...t2 }) {
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
      },
      sample: () => A(32, b)
    },
    xai: {
      id: "xai",
      name: "xAI",
      maskPrefix: "xai-",
      startsWith: "xai-",
      pattern: /^xai-[A-Za-z0-9]{40,}$/,
      placeholder: "xai-\u2026",
      console: "console.x.ai",
      formatHint: "xAI keys start with xai-",
      testModel: "Grok 4.7",
      Mark: function({ title: e2 = "xAI", ...t2 }) {
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
      },
      sample: () => `xai-${A(80, b)}`
    }
  }, N = ["anthropic", "openai", "google", "mistral", "xai"], M = "TmC9U9AIkxZnWP4R75wJ0Prr58qBh7Qd";
  function C(e2, t2) {
    let a2 = t2.last4 ?? t2.value?.slice(-4) ?? "";
    return { prefix: e2.maskPrefix, last4: a2 };
  }
  function z(e2, t2) {
    let a2 = Math.max(0, t2 - e2);
    if (a2 < 45e3) return "just now";
    let r2 = Math.round(a2 / 6e4);
    if (r2 < 60) return `${r2} min ago`;
    let n2 = Math.round(r2 / 60);
    if (n2 < 24) return `${n2} h ago`;
    let s2 = Math.round(n2 / 24);
    return 1 === s2 ? "yesterday" : s2 < 7 ? `${s2} days ago` : new Date(e2).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }
  let T = (e2) => e2 instanceof Date ? e2.getTime() : e2 ?? void 0;
  var S = a(17522), R = a.n(S), E = a(55665);
  let I = [...k.T.ease.standard], F = { type: "spring", visualDuration: 0.24, bounce: 0 }, U = (...e2) => e2.filter(Boolean).join(" "), L = (e2) => /^[aeiou]/i.test(e2) || "xAI" === e2 ? "an" : "a";
  function B({ id: e2, children: t2, className: a2, reduced: n2 }) {
    return (0, r.jsx)("span", {
      className: U(R().swap, a2),
      children: (0, r.jsx)(s.N, {
        initial: false,
        children: (0, r.jsx)(
          i.PY1.span,
          {
            className: R().swapItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: n2 ? 0.12 : 0.16, ease: I }
            },
            exit: { opacity: 0, transition: { duration: 0.1, ease: I } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function O({ id: e2, children: t2, reduced: a2 }) {
    return (0, r.jsx)(s.N, {
      initial: false,
      children: (0, r.jsx)(
        i.PY1.span,
        {
          className: R().iconSlot,
          "aria-hidden": "true",
          initial: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.7 },
          animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.16, ease: I }
          },
          exit: {
            opacity: 0,
            scale: a2 ? 1 : 0.7,
            transition: { duration: 0.1, ease: I }
          },
          children: t2
        },
        e2
      )
    });
  }
  let P = () => (0, r.jsx)("span", { className: R().spinner, "aria-hidden": "true" });
  function D({
    keys: e2,
    defaultKeys: t2,
    onKeysChange: a2,
    providers: s2 = N,
    testKey: i2,
    onSave: c2,
    onRemove: u2,
    onCopy: p2,
    revealDuration: h2 = 5e3,
    undoDuration: m2 = 5e3,
    loading: y2 = false,
    title: v2 = "Provider keys",
    description: x2 = "Your own keys, encrypted at rest and only used by this workspace.",
    footer: f2,
    className: k2
  }) {
    let g2 = (0, o.I)() ?? false, j2 = (0, n.useRef)(null), b2 = (0, n.useId)(), [w2, A2] = (0, n.useState)(
      () => t2 ?? (e2 ? [] : (function(e3 = Date.now()) {
        return [
          {
            provider: "anthropic",
            status: "connected",
            lastUsedAt: e3 - 12e4,
            value: "sk-ant-api03-eYgMU06SvpOdf6nN9lURze6EYWS6PaYPnhFlcwVc5QIzNVxM6F9ZRnone-6Mm6ELCeX1pVkPetNvRupr9rZhGrdkYoD4f2a"
          },
          {
            provider: "openai",
            status: "connected",
            lastUsedAt: e3 - 84e4,
            value: "sk-proj-joW0m5EsjYx3k1QDHt7DZMbnIcwi5p6te-gASRh5Q1gD-FqXdGUVQhJd2ddCcvdbE4fP1UnTjKMAOYECVqgvlnlvNASLBLkbo5QZUnvsKur3rwkKn0s2fxYlJ2Uj9c1e"
          },
          {
            provider: "google",
            status: "connected",
            lastUsedAt: e3 - 936e5,
            value: "AIzaSy9_ExVruZRmEvYh4_38g9EgwA-QxnLQk7w"
          },
          {
            provider: "mistral",
            status: "invalid",
            lastUsedAt: e3 - 2592e5,
            checkedAt: e3 - 2592e5,
            error: "401 Unauthorized, the key was revoked",
            value: M
          }
        ];
      })())
    ), C2 = e2 ?? w2, z2 = (0, n.useRef)(C2);
    (0, n.useEffect)(() => {
      z2.current = C2;
    }, [C2]);
    let T2 = !i2, [S2, I2] = (0, n.useState)(() => Date.now());
    (0, n.useEffect)(() => {
      let e3 = window.setInterval(() => I2(Date.now()), 3e4);
      return () => window.clearInterval(e3);
    }, []);
    let [F2, L2] = (0, n.useState)(null), [B2, O2] = (0, n.useState)(null), [P2, Z2] = (0, n.useState)({}), [G2, W2] = (0, n.useState)({}), [Y2, q] = (0, n.useState)(null), [K, Q] = (0, n.useState)(""), J = (0, n.useRef)(/* @__PURE__ */ new Map()), X = (0, n.useRef)(/* @__PURE__ */ new Map()), ee = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      let e3 = J.current, t3 = X.current;
      return () => {
        e3.forEach((e4) => window.clearTimeout(e4)), t3.forEach((e4) => e4.abort());
      };
    }, []);
    let et = (0, n.useCallback)((e3, t3, a3) => {
      let r2 = J.current;
      window.clearTimeout(r2.get(e3)), r2.set(
        e3,
        window.setTimeout(() => {
          r2.delete(e3), a3();
        }, t3)
      );
    }, []), ea = (0, n.useCallback)((e3) => {
      window.clearTimeout(J.current.get(e3)), J.current.delete(e3);
    }, []), er = (0, n.useCallback)(
      (e3) => Q(T2 ? `${e3}. Simulated, nothing was sent.` : e3),
      [T2]
    ), en = (0, n.useCallback)(
      (...e3) => requestAnimationFrame(() => {
        for (let t3 of e3) {
          let e4 = j2.current?.querySelector(t3);
          if (e4 && !e4.disabled) return void e4.focus({ preventScroll: true });
        }
      }),
      []
    ), es = (0, n.useCallback)(
      (t3, r2) => {
        let n2 = z2.current, s3 = n2.findIndex((e3) => e3.provider === t3), i3 = r2 ? s3 < 0 ? [...n2, r2] : n2.map((e3, t4) => t4 === s3 ? r2 : e3) : n2.filter((e3) => e3.provider !== t3);
        z2.current = i3, void 0 === e2 && A2(i3), a2?.(i3);
      },
      [e2, a2]
    ), ei = (0, n.useCallback)(
      (e3) => {
        var t3;
        return (i2 ?? (t3 = z2.current, async ({ provider: e4, key: a3, signal: r2 }) => {
          let n2, s3 = $[e4];
          await (n2 = a3 ? 950 : 750, new Promise((e5, t4) => {
            let a4 = window.setTimeout(e5, n2);
            r2.addEventListener(
              "abort",
              () => {
                window.clearTimeout(a4), t4(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          }));
          let i3 = t3.find((t4) => t4.provider === e4);
          if (a3 === M || !a3 && i3?.status === "invalid")
            return {
              ok: false,
              error: "401 Unauthorized, the key was revoked"
            };
          let o2 = 340 + (a3 ?? i3?.value ?? e4).charCodeAt(5) % 9 * 13;
          return { ok: true, detail: `${s3.testModel} answered in ${o2} ms` };
        }))(e3);
      },
      [i2]
    ), eo = (e3) => C2.find((t3) => t3.provider === e3), el = async (e3) => {
      let t3 = $[e3].name;
      X.current.get(e3)?.abort();
      let a3 = new AbortController();
      X.current.set(e3, a3), Z2((t4) => ({ ...t4, [e3]: true })), er(`Testing the ${t3} key`);
      try {
        let r2 = await ei({ provider: e3, signal: a3.signal }), n2 = z2.current.find((t4) => t4.provider === e3);
        if (a3.signal.aborted || !n2) return;
        r2.ok ? (es(e3, {
          ...n2,
          status: "connected",
          error: void 0,
          checkedAt: Date.now(),
          lastUsedAt: Date.now()
        }), er(`${t3} connected${r2.detail ? `. ${r2.detail}` : ""}`)) : (es(e3, {
          ...n2,
          status: "invalid",
          error: r2.error,
          checkedAt: Date.now()
        }), er(`${t3} rejected the key: ${r2.error}`));
      } catch {
        a3.signal.aborted || er(`Could not reach ${t3}. Try again`);
      } finally {
        X.current.get(e3) === a3 && (X.current.delete(e3), Z2((t4) => ({ ...t4, [e3]: false })));
      }
    }, ed = (e3, t3, a3) => {
      Y2?.provider === e3 && Y2.mode === t3 ? ec() : (ee.current = a3, "add" === t3 && G2[e3] && (ea(`undo:${e3}`), W2((t4) => {
        let a4 = { ...t4 };
        return delete a4[e3], a4;
      }), u2?.(e3)), q({ provider: e3, mode: t3 }));
    }, ec = () => {
      q(null);
      let e3 = ee.current;
      requestAnimationFrame(() => {
        e3?.isConnected && e3.focus({ preventScroll: true });
      });
    }, eu = s2.find((e3) => !eo(e3) && !G2[e3]) ?? s2.find((e3) => !eo(e3)), ep = void 0 === f2 ? (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(l.A, { "aria-hidden": "true" }),
        (0, r.jsx)("span", {
          children: "Keys are encrypted with AES-256 and never written to logs."
        })
      ]
    }) : f2;
    return (0, r.jsxs)("section", {
      ref: j2,
      className: U(R().root, k2),
      "aria-labelledby": b2,
      "aria-busy": y2 || void 0,
      children: [
        (0, r.jsxs)("header", {
          className: R().header,
          children: [
            (0, r.jsxs)("div", {
              className: R().heading,
              children: [
                (0, r.jsx)("h3", { id: b2, className: R().title, children: v2 }),
                x2 ? (0, r.jsx)("p", { className: R().description, children: x2 }) : null
              ]
            }),
            (0, r.jsxs)(_.$, {
              variant: "secondary",
              size: "sm",
              className: R().headerButton,
              disabled: y2 || !eu,
              "aria-expanded": Y2?.mode === "add" && Y2.provider === eu || void 0,
              onClick: (e3) => eu && ed(eu, "add", e3.currentTarget),
              children: [(0, r.jsx)(d.A, { "aria-hidden": "true" }), "Add key"]
            })
          ]
        }),
        (0, r.jsx)("ul", {
          className: R().list,
          "aria-label": "API keys by provider",
          children: y2 ? s2.map(
            (e3) => (0, r.jsxs)(
              "li",
              {
                className: U(R().row, R().skeletonRow),
                "aria-hidden": "true",
                children: [
                  (0, r.jsx)("span", {
                    className: U(R().mark, R().skeletonMark)
                  }),
                  (0, r.jsx)("span", {
                    className: R().name,
                    children: (0, r.jsx)("span", {
                      className: R().bar,
                      style: { width: 84 }
                    })
                  }),
                  (0, r.jsx)("span", {
                    className: R().key,
                    children: (0, r.jsx)("span", {
                      className: R().bar,
                      style: { width: 132 }
                    })
                  }),
                  (0, r.jsx)("span", {
                    className: R().status,
                    children: (0, r.jsx)("span", {
                      className: R().bar,
                      style: { width: 76 }
                    })
                  }),
                  (0, r.jsx)("span", {
                    className: R().meta,
                    children: (0, r.jsx)("span", {
                      className: R().bar,
                      style: { width: 92 }
                    })
                  }),
                  (0, r.jsx)("span", { className: R().actions })
                ]
              },
              e3
            )
          ) : s2.map((e3) => {
            let t3 = $[e3], a3 = eo(e3);
            return (0, r.jsx)(
              H,
              {
                spec: t3,
                data: a3,
                now: S2,
                reduced: g2,
                revealed: F2?.provider === e3 ? F2.token : null,
                revealDuration: h2,
                copied: B2 === e3,
                testing: !!P2[e3],
                undoable: !!G2[e3],
                editing: Y2?.provider === e3 ? Y2.mode : null,
                onReveal: () => ((e4) => {
                  let t4 = $[e4].name;
                  if (F2?.provider === e4) {
                    ea("reveal"), L2(null), er(`${t4} key hidden`);
                    return;
                  }
                  L2({ provider: e4, token: Date.now() }), er(
                    `${t4} key shown for ${Math.round(h2 / 1e3)} seconds`
                  ), et("reveal", h2, () => L2(null));
                })(e3),
                onCopy: () => {
                  let t4, a4;
                  return t4 = eo(e3)?.value, a4 = $[e3].name, void (!t4 || (0, E.a)(t4).then(
                    () => {
                      O2(e3), et("copied", 1400, () => O2(null)), Q(`${a4} key copied to the clipboard`), p2?.(e3);
                    },
                    () => Q(`Could not copy the ${a4} key`)
                  ));
                },
                onTest: () => el(e3),
                onRemove: () => ((e4) => {
                  let t4 = eo(e4);
                  if (!t4) return;
                  let a4 = $[e4].name;
                  X.current.get(e4)?.abort(), Z2((t5) => ({ ...t5, [e4]: false })), F2?.provider === e4 && (ea("reveal"), L2(null)), Y2?.provider === e4 && q(null), es(e4, null), W2((a5) => ({ ...a5, [e4]: t4 })), er(
                    `${a4} key removed. Undo is available for ${Math.round(m2 / 1e3)} seconds`
                  ), en(`[data-undo="${e4}"]`), et(`undo:${e4}`, m2, () => {
                    let t5 = document.activeElement?.getAttribute(
                      "data-undo"
                    ) === e4;
                    W2((t6) => {
                      let a5 = { ...t6 };
                      return delete a5[e4], a5;
                    }), u2?.(e4), t5 && en(`[data-add="${e4}"]`);
                  });
                })(e3),
                onUndo: () => {
                  let t4;
                  (t4 = G2[e3]) && (ea(`undo:${e3}`), W2((t5) => {
                    let a4 = { ...t5 };
                    return delete a4[e3], a4;
                  }), es(e3, t4), er(`${$[e3].name} key restored`), en(`[data-remove="${e3}"]`));
                },
                onOpen: (t4, a4) => ed(e3, t4, a4),
                form: Y2?.provider === e3 ? (0, r.jsx)(
                  V,
                  {
                    spec: t3,
                    mode: Y2.mode,
                    data: a3,
                    reduced: g2,
                    test: ei,
                    onCancel: ec,
                    onSaved: (t4) => {
                      var a4;
                      let r2, n2;
                      return a4 = Y2.mode, r2 = $[e3].name, n2 = z2.current.find((t5) => t5.provider === e3), void (es(e3, {
                        provider: e3,
                        status: "connected",
                        value: t4,
                        last4: t4.slice(-4),
                        lastUsedAt: null,
                        checkedAt: Date.now()
                      }), n2 && F2?.provider === e3 && (ea("reveal"), L2(null)), c2?.(e3, t4, a4), q(null), er(
                        `${r2} key ${"rotate" === a4 ? "rotated" : "added"} and connected`
                      ), en(
                        `[data-rotate="${e3}"]`,
                        `[data-status="${e3}"]`
                      ));
                    }
                  },
                  Y2.mode
                ) : null
              },
              e3
            );
          })
        }),
        null !== ep ? (0, r.jsx)("p", { className: R().footer, children: ep }) : null,
        (0, r.jsx)("span", {
          className: R().srOnly,
          role: "status",
          "aria-live": "polite",
          children: K
        })
      ]
    });
  }
  function H({
    spec: e2,
    data: t2,
    now: a2,
    reduced: n2,
    revealed: o2,
    revealDuration: l2,
    copied: k2,
    testing: _2,
    undoable: b2,
    editing: w2,
    form: A2,
    onReveal: $2,
    onCopy: N2,
    onTest: M2,
    onRemove: S2,
    onUndo: E2,
    onOpen: D2
  }) {
    let V2 = t2?.status ?? "unset", Z2 = e2.id, { prefix: G2, last4: W2 } = t2 ? C(e2, t2) : { prefix: "", last4: "" }, Y2 = T(t2?.lastUsedAt), q = T(t2?.checkedAt), K = null !== o2 && !!t2?.value, Q = _2 ? "testing" : V2, J = {
      testing: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(P, {}),
          (0, r.jsx)(g.n, { children: "Testing" })
        ]
      }),
      connected: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(c.A, { className: R().ok, "aria-hidden": "true" }),
          (0, r.jsx)("span", { children: "Connected" })
        ]
      }),
      invalid: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(u.A, { className: R().bad, "aria-hidden": "true" }),
          (0, r.jsx)("span", { children: "Invalid" })
        ]
      }),
      unset: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(p.A, { className: R().idle, "aria-hidden": "true" }),
          (0, r.jsx)("span", { children: "Not set" })
        ]
      })
    }[Q], X = {
      testing: "Testing",
      connected: "Connected",
      invalid: "Invalid",
      unset: "Not set"
    }[Q], ee = "connected" === V2 ? Y2 ? `Used ${z(Y2, a2)}` : "Not used yet" : "invalid" === V2 ? q ? `Rejected ${z(q, a2)}` : "Rejected" : b2 ? "Removed just now" : "", et = "unset" === V2 ? (0, r.jsxs)("span", {
      className: R().hint,
      children: ["Get one at ", e2.console]
    }) : K ? (0, r.jsx)("span", {
      className: U(R().mono, R().revealed),
      children: t2.value
    }) : (0, r.jsxs)("span", {
      className: R().mono,
      children: [
        (0, r.jsx)("span", { className: R().prefix, children: G2 }),
        (0, r.jsx)("span", { className: R().dots, children: "\u2022\u2022\u2022\u2022" }),
        (0, r.jsx)("span", { children: W2 })
      ]
    }), ea = "unset" === V2 ? "unset" : K ? "shown" : `mask:${G2}${W2}`, er = "invalid" === V2 && t2?.error ? `${t2.error}. Test again` : "Test connection";
    return (0, r.jsxs)("li", {
      className: R().row,
      "data-state": Q,
      "data-editing": w2 ? "" : void 0,
      children: [
        (0, r.jsx)(e2.Mark, { className: R().mark, "aria-hidden": "true" }),
        (0, r.jsx)("span", { className: R().name, children: e2.name }),
        (0, r.jsx)("span", {
          className: R().key,
          children: (0, r.jsx)(B, { id: ea, reduced: n2, children: et })
        }),
        (0, r.jsx)("span", {
          className: R().status,
          children: "unset" === V2 ? (0, r.jsx)("span", {
            className: R().statusChip,
            children: (0, r.jsx)(B, {
              id: Q,
              reduced: n2,
              children: (0, r.jsx)("span", {
                className: R().statusInner,
                children: J
              })
            })
          }) : (0, r.jsx)(j.m, {
            content: er,
            children: (0, r.jsx)("button", {
              type: "button",
              className: U(R().statusChip, R().statusButton),
              "data-status": Z2,
              "aria-label": `${e2.name}: ${X}. ${er}`,
              "aria-busy": _2 || void 0,
              onClick: () => {
                _2 || M2();
              },
              children: (0, r.jsx)(B, {
                id: Q,
                reduced: n2,
                children: (0, r.jsx)("span", {
                  className: R().statusInner,
                  children: J
                })
              })
            })
          })
        }),
        (0, r.jsx)("span", {
          className: R().meta,
          children: (0, r.jsx)(B, {
            id: ee || "none",
            reduced: n2,
            children: (0, r.jsx)("span", {
              className: R().metaText,
              children: ee
            })
          })
        }),
        (0, r.jsx)("span", {
          className: R().actions,
          children: (0, r.jsx)(B, {
            id: "unset" === V2 ? b2 ? "undo" : "add" : "keyed",
            reduced: n2,
            className: R().actionSwap,
            children: "unset" === V2 ? b2 ? (0, r.jsx)("button", {
              type: "button",
              className: R().pill,
              "data-undo": Z2,
              onClick: E2,
              "aria-label": `Undo removing the ${e2.name} key`,
              children: "Undo"
            }) : (0, r.jsxs)("button", {
              type: "button",
              className: R().pill,
              "data-add": Z2,
              "aria-expanded": "add" === w2,
              "aria-label": `Add ${L(e2.name)} ${e2.name} key`,
              onClick: (e3) => D2("add", e3.currentTarget),
              children: [
                (0, r.jsx)(d.A, { "aria-hidden": "true" }),
                "Add key"
              ]
            }) : (0, r.jsxs)("span", {
              className: R().iconRow,
              children: [
                (0, r.jsx)(j.m, {
                  content: K ? "Hide key" : `Reveal for ${Math.round(l2 / 1e3)} seconds`,
                  children: (0, r.jsxs)("button", {
                    type: "button",
                    className: R().icon,
                    "data-reveal": Z2,
                    disabled: !t2?.value,
                    "aria-pressed": K,
                    "aria-label": K ? `Hide the ${e2.name} key` : `Reveal the ${e2.name} key for ${Math.round(l2 / 1e3)} seconds`,
                    onClick: $2,
                    children: [
                      (0, r.jsx)(O, {
                        id: K ? "hide" : "show",
                        reduced: n2,
                        children: K ? (0, r.jsx)(h.A, {}) : (0, r.jsx)(m.A, {})
                      }),
                      K && !n2 ? (0, r.jsx)(
                        "svg",
                        {
                          className: R().countdown,
                          viewBox: "0 0 32 32",
                          "aria-hidden": "true",
                          style: { "--reveal-ms": `${l2}ms` },
                          children: (0, r.jsx)("circle", {
                            cx: "16",
                            cy: "16",
                            r: "15",
                            pathLength: 100
                          })
                        },
                        o2
                      ) : null
                    ]
                  })
                }),
                (0, r.jsx)(j.m, {
                  content: k2 ? "Copied" : "Copy key",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: U(R().icon, k2 && R().copied),
                    disabled: !t2?.value,
                    "aria-label": `Copy the ${e2.name} key`,
                    onClick: N2,
                    children: (0, r.jsx)(O, {
                      id: k2 ? "done" : "copy",
                      reduced: n2,
                      children: k2 ? (0, r.jsx)(y.A, {}) : (0, r.jsx)(v.A, {})
                    })
                  })
                }),
                (0, r.jsx)(j.m, {
                  content: "invalid" === V2 ? "Replace key" : "Rotate key",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: R().icon,
                    "data-rotate": Z2,
                    "aria-expanded": "rotate" === w2,
                    "aria-label": `${"invalid" === V2 ? "Replace" : "Rotate"} the ${e2.name} key`,
                    onClick: (e3) => D2("rotate", e3.currentTarget),
                    children: (0, r.jsx)("span", {
                      className: R().iconSlot,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(x.A, {})
                    })
                  })
                }),
                (0, r.jsx)(j.m, {
                  content: "Remove key",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: U(R().icon, R().danger),
                    "data-remove": Z2,
                    "aria-label": `Remove the ${e2.name} key`,
                    onClick: S2,
                    children: (0, r.jsx)("span", {
                      className: R().iconSlot,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(f.A, {})
                    })
                  })
                })
              ]
            })
          })
        }),
        (0, r.jsx)(s.N, {
          initial: false,
          children: A2 ? (0, r.jsx)(
            i.PY1.div,
            {
              className: R().formWrap,
              initial: { height: 0, opacity: 0 },
              animate: {
                height: "auto",
                opacity: 1,
                transition: n2 ? { duration: 0 } : {
                  height: F,
                  opacity: { duration: 0.16, delay: 0.04, ease: I }
                }
              },
              exit: {
                height: 0,
                opacity: 0,
                transition: n2 ? { duration: 0 } : { height: F, opacity: { duration: 0.1, ease: I } }
              },
              children: A2
            },
            "form"
          ) : null
        })
      ]
    });
  }
  function V({
    spec: e2,
    mode: t2,
    data: a2,
    reduced: s2,
    test: i2,
    onCancel: o2,
    onSaved: l2
  }) {
    let d2 = (0, n.useId)(), p2 = (0, n.useId)(), h2 = (0, n.useRef)(null), m2 = (0, n.useRef)(null), [v2, x2] = (0, n.useState)(""), [f2, k2] = (0, n.useState)(false), [j2, b2] = (0, n.useState)("edit"), [w2, A2] = (0, n.useState)("");
    (0, n.useEffect)(() => {
      let e3 = requestAnimationFrame(
        () => h2.current?.focus({ preventScroll: true })
      );
      return () => {
        cancelAnimationFrame(e3), m2.current?.abort();
      };
    }, []);
    let $2 = (function(e3, t3) {
      let a3 = t3.trim();
      if (!a3) return "empty";
      if (e3.pattern.test(a3)) return "valid";
      let r2 = e3.startsWith;
      return r2 && !(a3.startsWith(r2) || r2.startsWith(a3)) || /\s/.test(a3) || "mistral" === e3.id && (/[^A-Za-z0-9]/.test(a3) || a3.length > 32) || "google" === e3.id && a3.length > 39 ? "error" : "partial";
    })(e2, v2), N2 = "testing" === j2 || "connected" === j2, M2 = "edit" === j2 && ("error" === $2 || f2 && "partial" === $2 || f2 && "empty" === $2), z2 = async (t3) => {
      if (t3?.preventDefault(), N2) return;
      if ("valid" !== $2) {
        k2(true), h2.current?.focus();
        return;
      }
      let a3 = v2.trim();
      m2.current?.abort();
      let r2 = new AbortController();
      m2.current = r2, b2("testing");
      try {
        let t4 = await i2({ provider: e2.id, key: a3, signal: r2.signal });
        if (r2.signal.aborted) return;
        t4.ok ? (A2(t4.detail ?? `${e2.name} answered`), b2("connected"), window.setTimeout(() => {
          r2.signal.aborted || l2(a3);
        }, 720)) : (A2(t4.error), b2("rejected"), requestAnimationFrame(() => h2.current?.select()));
      } catch (t4) {
        if (r2.signal.aborted) return;
        A2(
          t4 instanceof Error && t4.message ? t4.message : `Could not reach ${e2.name}`
        ), b2("rejected");
      }
    }, T2 = a2 ? `${C(e2, a2).prefix}\u2022\u2022\u2022\u2022${C(e2, a2).last4}` : "", S2 = "testing" === j2 ? {
      id: "testing",
      tone: "muted",
      icon: (0, r.jsx)(P, {}),
      text: (0, r.jsx)(g.n, { children: "Testing connection" })
    } : "connected" === j2 ? {
      id: "connected",
      tone: "ok",
      icon: (0, r.jsx)(c.A, { "aria-hidden": "true" }),
      text: `Connected \xB7 ${w2}`
    } : "rejected" === j2 ? {
      id: `rejected:${w2}`,
      tone: "bad",
      icon: (0, r.jsx)(u.A, { "aria-hidden": "true" }),
      text: `Rejected: ${w2}`
    } : M2 ? {
      id: "error" === $2 ? "format" : "short",
      tone: "bad",
      icon: (0, r.jsx)(u.A, { "aria-hidden": "true" }),
      text: "empty" === $2 ? `Paste ${L(e2.name)} ${e2.name} key first` : "error" === $2 ? e2.formatHint : `That ${e2.name} key looks incomplete`
    } : "valid" === $2 ? {
      id: "valid",
      tone: "ok",
      icon: (0, r.jsx)(y.A, { "aria-hidden": "true" }),
      text: "Format looks right"
    } : {
      id: "idle",
      tone: "muted",
      icon: null,
      text: "rotate" === t2 && T2 ? (0, r.jsxs)(r.Fragment, {
        children: [
          "Replaces ",
          (0, r.jsx)("span", {
            className: R().mono,
            children: T2
          }),
          " once the new key connects"
        ]
      }) : `Create one at ${e2.console}`
    }, E2 = "testing" === j2 ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P, {}), "Testing"]
    }) : "connected" === j2 ? (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(y.A, { "aria-hidden": "true" }),
        "rotate" === t2 ? "Rotated" : "Saved"
      ]
    }) : "rotate" === t2 ? "Rotate" : "Save key";
    return (0, r.jsxs)("form", {
      className: R().form,
      onSubmit: z2,
      noValidate: true,
      "data-phase": j2,
      children: [
        (0, r.jsx)("label", {
          htmlFor: d2,
          className: R().srOnly,
          children: "rotate" === t2 ? `New ${e2.name} key` : `${e2.name} API key`
        }),
        (0, r.jsx)("input", {
          ref: h2,
          id: d2,
          className: R().input,
          value: v2,
          readOnly: N2,
          placeholder: e2.placeholder,
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          spellCheck: false,
          "aria-invalid": M2 || "rejected" === j2 || void 0,
          "aria-describedby": p2,
          "data-tone": M2 || "rejected" === j2 ? "bad" : "connected" === j2 ? "ok" : void 0,
          onChange: (e3) => {
            x2(e3.target.value), "rejected" === j2 && b2("edit");
          },
          onBlur: () => {
            v2.trim() && k2(true);
          },
          onKeyDown: (e3) => {
            "Escape" === e3.key && (e3.preventDefault(), e3.stopPropagation(), m2.current?.abort(), o2());
          }
        }),
        (0, r.jsx)(_.$, {
          type: "button",
          variant: "ghost",
          size: "sm",
          className: R().cancel,
          onClick: () => {
            m2.current?.abort(), o2();
          },
          children: "Cancel"
        }),
        (0, r.jsx)(_.$, {
          type: "submit",
          variant: "primary",
          size: "sm",
          className: R().save,
          "aria-disabled": N2 || void 0,
          children: E2
        }),
        (0, r.jsx)("p", {
          id: p2,
          className: R().help,
          "data-tone": S2.tone,
          "aria-live": "polite",
          children: (0, r.jsx)(B, {
            id: S2.id,
            reduced: s2,
            children: (0, r.jsxs)("span", {
              className: R().helpInner,
              children: [
                S2.icon,
                (0, r.jsx)("span", {
                  className: R().helpText,
                  children: S2.text
                })
              ]
            })
          })
        }),
        (0, r.jsx)("button", {
          type: "button",
          className: R().sample,
          disabled: N2,
          onClick: () => {
            x2(e2.sample()), k2(false), b2("edit"), h2.current?.focus();
          },
          children: "Use sample key"
        })
      ]
    });
  }
  var Z = a(7512), G = a.n(Z);
  function W() {
    return (0, r.jsx)("div", {
      className: G().demo,
      children: (0, r.jsx)(D, {})
    });
  }
  let Y = W;
}

__m(__module,__exports,__require);
});
A.reg(82749, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "refresh-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
          key: "v9h5vc"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      [
        "path",
        {
          d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
          key: "3uifl3"
        }
      ],
      ["path", { d: "M8 16H3v5", key: "1cv678" }]
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
A.cssFor("provider-keys", [7512,17522]);
A.item("provider-keys", {entry:58094, export:"ProviderKeysDemo", kind:"component", tier:"pro", unresolved:[]});
})();