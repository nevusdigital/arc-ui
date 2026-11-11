/* team-switcher (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(0, function(){return void 0;});
A.regCss(1643, ".demo{display:flex;align-items:flex-start;justify-content:center;width:100%;min-height:540px;padding:24px 16px 0;box-sizing:border-box}", {"demo":"demo"});
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.regCss(30314, ".root{--row-radius:calc(var(--radius-panel) - 5px);--panel-h:calc(48px + 296px + 88px + 2px);position:relative;width:min(100%,360px);font-family:var(--font-body);color:var(--foreground)}\n.trigger{display:grid;grid-template-columns:32px minmax(0,1fr) 16px;align-items:center;gap:12px;width:100%;height:56px;margin:0;padding:0 16px 0 12px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .12s ease-out,border-color .12s ease-out}\n.trigger:hover,.trigger[data-open]{background:color-mix(in oklab,var(--surface-muted) 70%,var(--surface))}\n.trigger:active{background:var(--surface-muted)}\n.trigger:disabled{cursor:not-allowed;opacity:.5;background:var(--surface)}\n.action,.highlight,.trigger{transition:none}\n.swap{display:grid;min-width:0}\n.preview>.swap{width:40px;height:40px}\n.swapItem{grid-area:1/1;display:flex;align-items:center;min-width:0}\n.triggerTile{width:32px;height:32px}\n.triggerText{display:flex;flex-direction:column;min-width:0}\n.triggerName{font-size:var(--text-sm);font-weight:500;line-height:20px}\n.triggerMeta{font-size:var(--text-xs);line-height:16px;color:var(--text-muted)}\n.triggerEnd{width:16px;height:16px;color:var(--text-muted)}\n.errorLine{display:flex;align-items:center;gap:4px;min-width:0;color:var(--text-secondary)}\n.errorLine svg{flex:none;color:var(--danger)}\n.spin{animation:spin .8s linear infinite}\n@media (prefers-reduced-motion:reduce){.spin{animation-duration:1.6s}\n.truncate{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.tile{--tile:28px;display:grid;flex:none;place-items:center;width:var(--tile);height:var(--tile);overflow:hidden;border-radius:calc(var(--tile) * .28);font-size:var(--tile);line-height:1;box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--foreground) 10%,transparent)}\n.tile svg{display:block}\n.tileLetter{background:var(--foreground);color:var(--background)}\n.initial{font-size:.44em;font-weight:500;letter-spacing:0}\n.tileEmpty{width:40px;height:40px;border:1px dashed var(--border);border-radius:11px}\n.panel{position:absolute;z-index:30;top:calc(100% + 8px);right:0;left:0;height:var(--panel-h);overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:top center}\n.view{position:absolute;inset:0;display:flex;flex-direction:column}\n.searchRow{display:flex;flex:none;align-items:center;gap:12px;height:48px;padding:0 16px 0 12px;border-bottom:1px solid var(--border-subtle)}\n.searchIcon{width:28px;flex:none;color:var(--text-muted)}\n.search{flex:1;min-width:0;height:100%;margin:0;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm)}\n.search::placeholder{color:var(--text-muted)}\n.search::-webkit-search-cancel-button{display:none}\n.listbox{position:relative;display:flex;flex:1;flex-direction:column;min-height:0}\n.highlight{position:absolute;top:0;right:4px;left:4px;border-radius:var(--row-radius);background:var(--surface-muted);pointer-events:none;transition:background-color .12s ease-out}\n.highlight[data-pressed]{background:color-mix(in oklab,var(--foreground) 10%,var(--surface-raised))}\n.body{position:relative;flex:none;height:calc(var(--rows) * var(--row) + 8px);padding:4px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}\n.body::-webkit-scrollbar{display:none}\n.row{position:relative;display:grid;grid-template-columns:28px minmax(0,1fr) auto minmax(40px,auto);align-items:center;gap:12px;height:48px;padding:0 8px;border-radius:var(--row-radius);cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent}\n.rowText{display:flex;flex-direction:column;min-width:0}\n.rowName{font-size:var(--text-sm);font-weight:500;line-height:20px}\n.rowMeta{font-size:var(--text-xs);line-height:16px;color:var(--text-muted)}\n.placeholderName{color:var(--text-muted);font-weight:400}\n.role{font-size:var(--text-xs);line-height:16px;color:var(--text-secondary);white-space:nowrap}\n.slot{display:flex;align-items:center;justify-content:flex-end;height:20px;color:var(--text-muted)}\n.check{color:var(--foreground)}\n.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;height:100%;padding:0 24px;text-align:center}\n.emptyTitle{max-width:100%;overflow:hidden;font-size:var(--text-sm);line-height:20px;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}\n.emptyHint{font-size:var(--text-xs);line-height:16px;color:var(--text-muted)}\n.footer{position:relative;flex:none;padding:4px;border-top:1px solid var(--border-subtle)}\n.action{position:relative;display:grid;grid-template-columns:28px minmax(0,1fr);align-items:center;gap:12px;height:40px;padding:0 8px;border-radius:var(--row-radius);color:var(--text-secondary);font-size:var(--text-sm);line-height:20px;cursor:pointer;user-select:none;transition:color .12s ease-out;-webkit-tap-highlight-color:transparent}\n.action[data-active]{color:var(--foreground)}\n.actionIcon{display:flex;justify-content:center}\n.formHead{display:flex;flex:none;align-items:center;gap:8px;height:48px;padding:0 16px 0 8px;border-bottom:1px solid var(--border-subtle)}\n.back{flex:none;width:32px;padding-inline:0}\n.formTitle{font-size:var(--text-sm);font-weight:500;line-height:20px}\n.formBody{display:flex;flex:1;flex-direction:column;gap:16px;min-height:0;padding:16px}\n.preview{display:grid;grid-template-columns:40px minmax(0,1fr);align-items:center;gap:12px}\n.sample{align-self:flex-start;margin:-4px 0 0;padding:0;border:0;background:none;color:var(--accent);font:inherit;font-size:var(--text-xs);line-height:16px;cursor:pointer}\n.sample:hover{text-decoration:underline;text-underline-offset:2px}\n.sample:disabled{color:var(--text-muted);text-decoration:none;cursor:default}\n.formFoot{display:flex;flex:none;align-items:center;justify-content:flex-end;gap:8px;height:56px;padding:0 12px;border-top:1px solid var(--border-subtle)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","trigger":"trigger","action":"action","highlight":"highlight","swap":"swap","preview":"preview","swapItem":"swapItem","triggerTile":"triggerTile","triggerText":"triggerText","triggerName":"triggerName","triggerMeta":"triggerMeta","triggerEnd":"triggerEnd","errorLine":"errorLine","spin":"spin","truncate":"truncate","tile":"tile","tileLetter":"tileLetter","initial":"initial","tileEmpty":"tileEmpty","panel":"panel","view":"view","searchRow":"searchRow","searchIcon":"searchIcon","search":"search","listbox":"listbox","body":"body","row":"row","rowText":"rowText","rowName":"rowName","rowMeta":"rowMeta","placeholderName":"placeholderName","role":"role","slot":"slot","check":"check","empty":"empty","emptyTitle":"emptyTitle","emptyHint":"emptyHint","footer":"footer","actionIcon":"actionIcon","formHead":"formHead","back":"back","formTitle":"formTitle","formBody":"formBody","sample":"sample","formFoot":"formFoot","srOnly":"srOnly"});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.reg(61418, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { TeamSwitcherDemo: () => G, default: () => Q });
  var a = r(95155), i = r(12115), n = r(80642), s = r(25354), l = r(18310), o = r(28245), c = r(92171), d = r(35484), u = r(92571), m = r(65342), p = r(65377), h = r(64577), f = r(2125), w = r(91161), g = r(31966), y = r(7770), x = r(51288), _ = r(35978), v = r(76266), b = r(52898);
  let j = (e2, t2) => {
    function r2(t3) {
      return (0, a.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        focusable: "false",
        ...t3,
        children: (0, a.jsx)("path", { d: e2 })
      });
    }
    return r2.displayName = `${t2}Mark`, r2;
  }, k = j(
    "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z",
    "Linear"
  ), N = j("m12 1.608 12 20.784H0Z", "Vercel"), E = j(
    "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z",
    "Stripe"
  ), C = j(
    "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
    "Supabase"
  ), T = j(
    "M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252-1.252-3.312-3.32V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251-1.253Zm10.655 10.655-1.247 1.251 1.342 1.343 1.253-1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25-1.252z",
    "Raycast"
  ), $ = j(
    "M14.679 0c4.648 0 7.413 2.765 7.413 6.434s-2.765 6.434-7.413 6.434H12.33L24 24h-8.245l-8.88-8.44c-.636-.588-.93-1.273-.93-1.86 0-.831.587-1.565 1.713-1.883l4.574-1.224c1.737-.465 2.936-1.81 2.936-3.572 0-2.153-1.761-3.4-3.939-3.4H0V0z",
    "Resend"
  ), A = j(
    "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z",
    "Notion"
  ), S = (e2, t2) => ({
    width: `${e2}em`,
    height: `${e2}em`,
    transform: t2?.y ? `translateY(${t2.y}em)` : void 0
  }), L = [
    {
      id: "linear",
      name: "Linear",
      plan: "Enterprise",
      members: 214,
      role: "Admin",
      tile: { background: "#5E6AD2", color: "#fff" },
      logo: (0, a.jsx)(k, { style: S(0.52) })
    },
    {
      id: "vercel",
      name: "Vercel",
      plan: "Pro",
      members: 38,
      role: "Owner",
      tile: { background: "#000", color: "#fff" },
      logo: (0, a.jsx)(N, { style: S(0.5, { y: -0.02 }) })
    },
    {
      id: "stripe",
      name: "Stripe",
      plan: "Enterprise",
      members: 1240,
      role: "Member",
      tile: { background: "#635BFF", color: "#fff" },
      logo: (0, a.jsx)(E, { style: S(0.48) })
    },
    {
      id: "figma",
      name: "Figma",
      plan: "Organization",
      members: 96,
      role: "Member",
      tile: { background: "#1E1E1E" },
      logo: (0, a.jsx)(
        function(e2) {
          return (0, a.jsxs)("svg", {
            viewBox: "0 0 38 57",
            "aria-hidden": "true",
            focusable: "false",
            ...e2,
            children: [
              (0, a.jsx)("path", {
                fill: "#1ABCFE",
                d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
              }),
              (0, a.jsx)("path", {
                fill: "#0ACF83",
                d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
              }),
              (0, a.jsx)("path", {
                fill: "#FF7262",
                d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
              }),
              (0, a.jsx)("path", {
                fill: "#F24E1E",
                d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
              }),
              (0, a.jsx)("path", {
                fill: "#A259FF",
                d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
              })
            ]
          });
        },
        { style: { height: ".56em", width: ".373em" } }
      )
    },
    {
      id: "supabase",
      name: "Supabase",
      plan: "Team",
      members: 52,
      role: "Billing",
      tile: { background: "#1C1C1C", color: "#3ECF8E" },
      logo: (0, a.jsx)(C, { style: S(0.5) })
    },
    {
      id: "raycast",
      name: "Raycast",
      plan: "Pro",
      members: 24,
      role: "Guest",
      tile: { background: "#FF6363", color: "#fff" },
      logo: (0, a.jsx)(T, { style: S(0.5) })
    }
  ], M = [
    {
      link: "https://resend.com/invite/7HK2-QPLM",
      workspace: {
        id: "resend",
        name: "Resend",
        plan: "Pro",
        members: 18,
        role: "Member",
        tile: { background: "#000", color: "#fff" },
        logo: (0, a.jsx)($, { style: S(0.44) })
      }
    },
    {
      link: "https://notion.so/invite/a91f-22cd",
      workspace: {
        id: "notion",
        name: "Notion",
        plan: "Business",
        members: 410,
        role: "Member",
        tile: { background: "#fff", color: "#000" },
        logo: (0, a.jsx)(A, { style: S(0.54) })
      }
    }
  ];
  var z = r(30314), P = r.n(z);
  let F = [...y.T.ease.enter], R = { type: "spring", visualDuration: 0.24, bounce: 0 }, D = new Intl.NumberFormat("en-US"), O = (e2) => `${D.format(e2)} ${1 === e2 ? "member" : "members"}`, U = (e2) => [e2.plan, null != e2.members ? O(e2.members) : null].filter(Boolean).join(" \xB7 "), I = (e2) => e2.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), H = (...e2) => e2.filter(Boolean).join(" ");
  function B(e2, t2) {
    return new Promise((r2, a2) => {
      let i2 = window.setTimeout(r2, e2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(i2), a2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  function K({ workspace: e2, size: t2 = 28 }) {
    let r2 = {
      "--tile": `${t2}px`,
      background: e2.tile?.background,
      color: e2.tile?.color
    };
    return (0, a.jsx)("span", {
      className: H(P().tile, !e2.tile && P().tileLetter),
      style: r2,
      "aria-hidden": "true",
      children: e2.logo ?? (0, a.jsx)("span", {
        className: P().initial,
        children: e2.name.trim().charAt(0).toUpperCase() || "W"
      })
    });
  }
  function Y({ k: e2, children: t2, className: r2, reduced: i2 }) {
    return (0, a.jsx)("span", {
      className: H(P().swap, r2),
      children: (0, a.jsx)(n.N, {
        initial: false,
        children: (0, a.jsx)(
          s.PY1.span,
          {
            className: P().swapItem,
            initial: { opacity: 0, y: 2 * !i2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: i2 ? 0.1 : 0.16,
                delay: 0.04 * !i2,
                ease: F
              }
            },
            exit: {
              opacity: 0,
              y: i2 ? 0 : -2,
              transition: { duration: 0.1, ease: "easeOut" }
            },
            children: t2
          },
          e2
        )
      })
    });
  }
  function W({
    workspaces: e2,
    value: t2,
    defaultValue: r2,
    onValueChange: y2,
    onSwitch: j2,
    onCreateWorkspace: k2,
    onJoinWorkspace: N2,
    open: E2,
    defaultOpen: C2 = false,
    onOpenChange: T2,
    globalShortcuts: $2 = false,
    simulatedDelay: A2 = 650,
    disabled: S2 = false,
    className: z2
  }) {
    let D2 = (0, l.I)() ?? false, Z2 = (0, i.useId)(), J2 = `${Z2}-panel`, G2 = `${Z2}-listbox`, Q2 = (0, i.useRef)(null), q = (0, i.useRef)(null), X = (0, i.useRef)(null), ee = (0, i.useRef)(null), et = (0, i.useRef)(null), er = (0, i.useRef)(/* @__PURE__ */ new Map()), ea = (0, i.useRef)(null), ei = (0, i.useRef)(null), [en, es] = (0, i.useState)([]), el = (0, i.useMemo)(() => {
      let t3 = e2 ?? L;
      return [...t3, ...en.filter((e10) => !t3.some((t4) => t4.id === e10.id))];
    }, [e2, en]), eo = (0, i.useCallback)((e10) => el.find((t3) => t3.id === e10), [el]), [ec, ed] = (0, i.useState)(r2 ?? (e2 ?? L)[0]?.id), eu = t2 ?? ec, [em, ep] = (0, i.useState)(null), [eh, ef] = (0, i.useState)("idle"), [ew, eg] = (0, i.useState)(""), ey = eo(em ?? eu) ?? el[0], [ex, e_] = (0, i.useState)(C2), ev = E2 ?? ex, [eb, ej] = (0, i.useState)("list"), [ek, eN] = (0, i.useState)(""), [eE, eC] = (0, i.useState)(ev ? `ws:${eu}` : null), [eT, e$] = (0, i.useState)(null), [eA, eS] = (0, i.useState)(""), [eL, eM] = (0, i.useState)(""), [ez, eP] = (0, i.useState)(""), [eF, eR] = (0, i.useState)(false), [eD, eO] = (0, i.useState)(), eU = (0, i.useCallback)(
      (e10, t3 = false, r3 = false) => {
        void 0 === E2 && e_(e10), T2?.(e10), !e10 && t3 && q.current?.focus({ preventScroll: true, focusVisible: !r3 });
      },
      [E2, T2]
    ), [eI, eH] = (0, i.useState)(ev);
    ev !== eI && (eH(ev), ev && (ej("list"), eN(""), eC(`ws:${eu}`), eO(void 0), eR(false))), (0, i.useEffect)(() => {
      ev || ei.current?.abort();
    }, [ev]);
    let eB = (0, i.useRef)(ev);
    (0, i.useEffect)(() => {
      ev && !eB.current && X.current?.focus({ preventScroll: true }), eB.current = ev;
    }, [ev]), (0, i.useEffect)(
      () => () => {
        ea.current?.abort(), ei.current?.abort();
      },
      []
    );
    let eK = ek.trim().toLowerCase(), eY = (0, i.useMemo)(
      () => eK ? el.filter(
        (e10) => [e10.name, e10.plan, e10.role].some(
          (e11) => e11?.toLowerCase().includes(eK)
        )
      ) : el,
      [el, eK]
    ), eW = (0, i.useMemo)(
      () => [...eY.map((e10) => `ws:${e10.id}`), "create", "join"],
      [eY]
    );
    (0, i.useEffect)(() => {
      if ("error" !== eh) return;
      let e10 = window.setTimeout(() => ef("idle"), 3200);
      return () => window.clearTimeout(e10);
    }, [eh]);
    let eV = (0, i.useCallback)(
      async (e10, r3 = "") => {
        if (e10.id === eu && "switching" !== eh) return;
        if (ea.current?.abort(), e10.id === eu) {
          ep(null), ef("idle");
          return;
        }
        let a2 = new AbortController();
        ea.current = a2, ep(e10.id), ef("switching"), eS(`${r3}Switching to ${e10.name}`);
        try {
          if (j2 ? await j2(e10, a2.signal) : await B(A2, a2.signal), a2.signal.aborted)
            return;
          void 0 === t2 && ed(e10.id), y2?.(e10.id, e10), ep(null), ef("idle"), eS(
            `${r3}Switched to ${e10.name}.${j2 ? "" : " Simulated, nothing was loaded."}`
          );
        } catch (t3) {
          if (a2.signal.aborted) return;
          ep(null), ef("error"), eg(
            t3 instanceof Error && t3.message ? t3.message : "Couldn't switch, try again"
          ), eS(`Couldn't switch to ${e10.name}.`);
        }
      },
      [eu, eh, j2, A2, t2, y2]
    ), eZ = (0, i.useCallback)(
      (e10, t3 = false) => {
        eU(false, true, t3);
        let r3 = eo(e10);
        r3 && eV(r3);
      },
      [eU, eo, eV]
    ), eJ = (0, i.useCallback)(
      (e10) => {
        ei.current?.abort(), eR(false), eO(void 0), "create" === e10 && eM(ek.trim() && !eY.length ? ek.trim() : ""), "join" === e10 && eP(""), ej(e10), "list" === e10 && window.requestAnimationFrame(
          () => X.current?.focus({ preventScroll: true })
        );
      },
      [ek, eY.length]
    ), eG = (0, i.useCallback)(
      (e10) => {
        "create" === e10 || "join" === e10 ? eJ(e10) : eZ(e10.slice(3));
      },
      [eJ, eZ]
    ), eQ = (0, i.useCallback)(
      (e10) => {
        if (!(e10.metaKey || e10.ctrlKey) || e10.altKey || e10.shiftKey) return false;
        let t3 = /^Digit([1-9])$/.exec(e10.code) ?? /^([1-9])$/.exec(e10.key);
        if (!t3) return false;
        let r3 = el[Number(t3[1]) - 1];
        return !!r3 && !S2 && (e10.preventDefault(), ev && "list" === eb ? (eC(`ws:${r3.id}`), e$(`ws:${r3.id}`), window.setTimeout(() => {
          e$(null), eZ(r3.id);
        }, 140 * !D2)) : eV(r3), true);
      },
      [el, S2, ev, eb, D2, eZ, eV]
    );
    (0, i.useEffect)(() => {
      if (!$2) return;
      let e10 = (e11) => {
        Q2.current?.contains(e11.target) || eQ(e11);
      };
      return window.addEventListener("keydown", e10), () => window.removeEventListener("keydown", e10);
    }, [$2, eQ]), (0, i.useEffect)(() => {
      if (!ev) return;
      let e10 = (e11) => {
        Q2.current?.contains(e11.target) || eU(false);
      };
      return document.addEventListener("pointerdown", e10, true), () => document.removeEventListener("pointerdown", e10, true);
    }, [ev, eU]);
    let eq = (0, i.useRef)(false), eX = (0, o.d)(0), e0 = (0, o.d)(48), [e1, e22] = (0, i.useState)("none"), e5 = (0, i.useRef)(false), e4 = (0, i.useCallback)(
      (e10) => {
        let t3 = ee.current, r3 = eE ? er.current.get(eE) : void 0;
        if (!t3 || !r3) return e5.current = false, false;
        let a2 = (function(e11, t4) {
          let r4 = 0, a3 = e11;
          for (; a3 && a3 !== t4; ) {
            r4 += a3.offsetTop;
            let e12 = a3.offsetParent;
            e12 && e12 !== t4 && (r4 -= e12.scrollTop), a3 = e12;
          }
          return r4;
        })(r3, t3), i2 = r3.offsetHeight, n2 = et.current;
        if (n2 && n2.contains(r3)) {
          let e11 = n2.offsetTop, t4 = e11 + n2.clientHeight;
          e22(
            a2 < e11 || a2 + i2 > t4 ? `inset(${Math.max(0, e11 - a2)}px 0 ${Math.max(0, a2 + i2 - t4)}px 0 round var(--row-radius))` : "none"
          );
        } else e22("none");
        return e10 || !e5.current || D2 ? (eX.jump(a2), e0.jump(i2)) : ((0, c.i)(eX, a2, R), (0, c.i)(e0, i2, R)), e5.current = true, true;
      },
      [eE, D2, eX, e0]
    ), [e3, e6] = (0, i.useState)(false), e9 = ev && "list" === eb;
    !e9 && e3 && e6(false), (0, i.useLayoutEffect)(() => {
      if (!e9) {
        e5.current = false;
        return;
      }
      e4(false);
      let e10 = e5.current;
      e6(e10), e10 && eq.current && eE && er.current.get(eE)?.scrollIntoView({ block: "nearest" }), eq.current = false;
    }, [e9, eE, eY, e4]);
    let e7 = async (e10, t3) => {
      if (t3.preventDefault(), eF) return;
      let r3 = ("create" === e10 ? eL : ez).trim();
      if (!r3)
        return void eO(
          "create" === e10 ? "Give the workspace a name" : "Paste an invite link or code"
        );
      ei.current?.abort();
      let a2 = new AbortController();
      ei.current = a2, eR(true), eO(void 0);
      try {
        let t4;
        if ("create" === e10 ? t4 = k2 ? await k2(r3, a2.signal) : (await B(600, a2.signal), {
          id: `ws-${I(r3) || "new"}-${Date.now().toString(36)}`,
          name: r3,
          plan: "Free",
          members: 1,
          role: "Owner"
        }) : N2 ? t4 = await N2(r3, a2.signal) : (await B(600, a2.signal), t4 = V(r3, el)), a2.signal.aborted)
          return;
        if (eR(false), !t4) return void eU(false, true);
        let i2 = t4;
        es((e11) => e11.some((e12) => e12.id === i2.id) ? e11 : [...e11, i2]), eU(false, true), eV(
          i2,
          `${"create" === e10 ? "Created" : "Joined"} ${i2.name}${("create" === e10 ? k2 : N2) ? "" : " (simulated, nothing was sent)"}. `
        );
      } catch (e11) {
        if (a2.signal.aborted) return;
        eR(false), eO(
          e11 instanceof Error && e11.message ? e11.message : "Something went wrong, try again"
        );
      }
    }, e8 = M.find((e10) => !el.some((t3) => t3.id === e10.workspace.id)), te = (0, i.useMemo)(() => {
      let e10 = ez.trim();
      if (!e10) return null;
      try {
        return V(e10, []);
      } catch {
        return null;
      }
    }, [ez]), tt = "switching" === eh ? "switching" : "error" === eh ? "error" : "idle", tr = {
      id: "draft",
      name: eL.trim() || "Untitled workspace",
      plan: "Free",
      members: 1
    }, ta = D2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.12 } },
      exit: { opacity: 0, transition: { duration: 0.1 } }
    } : {
      initial: { opacity: 0, y: -4, scale: 0.98 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.18, ease: F }
      },
      exit: {
        opacity: 0,
        y: -4,
        scale: 0.98,
        transition: { duration: 0.12, ease: "easeIn" }
      }
    }, ti = (e10) => ({
      initial: { opacity: 0, x: D2 ? 0 : 6 * e10 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.16, delay: 0.04, ease: F }
      },
      exit: {
        opacity: 0,
        x: D2 ? 0 : -6 * e10,
        transition: { duration: 0.1, ease: "easeOut" }
      }
    }), tn = eE && e3 ? `${Z2}-${eE}` : void 0;
    return (0, a.jsxs)("div", {
      ref: Q2,
      className: H(P().root, z2),
      onKeyDown: (e10) => {
        !eQ(e10) && "Escape" === e10.key && ev && (e10.preventDefault(), "list" !== eb ? eJ("list") : ek ? eN("") : eU(false, true));
      },
      onBlur: (e10) => {
        let t3 = e10.relatedTarget;
        ev && t3 && !Q2.current?.contains(t3) && eU(false);
      },
      children: [
        (0, a.jsxs)("button", {
          ref: q,
          type: "button",
          className: P().trigger,
          "aria-haspopup": "dialog",
          "aria-expanded": ev,
          "aria-controls": ev ? J2 : void 0,
          "aria-busy": "switching" === eh || void 0,
          "aria-label": `Workspace: ${ey?.name ?? "none"}. ${"switching" === eh ? "Switching." : U(ey ?? { id: "", name: "" })}`,
          disabled: S2,
          "data-open": ev || void 0,
          onClick: () => eU(!ev),
          onKeyDown: (e10) => {
            "ArrowDown" !== e10.key || ev || (e10.preventDefault(), eU(true));
          },
          children: [
            ey && (0, a.jsx)(Y, {
              k: ey.id,
              reduced: D2,
              className: P().triggerTile,
              children: (0, a.jsx)(K, { workspace: ey, size: 32 })
            }),
            (0, a.jsxs)("span", {
              className: P().triggerText,
              children: [
                (0, a.jsx)(Y, {
                  k: ey?.id ?? "none",
                  reduced: D2,
                  className: P().triggerName,
                  children: (0, a.jsx)("span", {
                    className: P().truncate,
                    children: ey?.name
                  })
                }),
                (0, a.jsx)(Y, {
                  k: `${tt}:${ey?.id}`,
                  reduced: D2,
                  className: P().triggerMeta,
                  children: "switching" === tt ? (0, a.jsx)(b.n, {
                    className: P().truncate,
                    children: "Switching workspace"
                  }) : "error" === tt ? (0, a.jsxs)("span", {
                    className: P().errorLine,
                    children: [
                      (0, a.jsx)(d.A, {
                        size: 14,
                        "aria-hidden": "true"
                      }),
                      (0, a.jsx)("span", {
                        className: P().truncate,
                        children: ew
                      })
                    ]
                  }) : (0, a.jsx)("span", {
                    className: P().truncate,
                    children: ey ? U(ey) : ""
                  })
                })
              ]
            }),
            (0, a.jsx)(Y, {
              k: "switching" === tt ? "spin" : "chevron",
              reduced: D2,
              className: P().triggerEnd,
              children: "switching" === tt ? (0, a.jsx)(u.A, {
                size: 16,
                className: P().spin,
                "aria-hidden": "true"
              }) : (0, a.jsx)(m.A, { size: 16, "aria-hidden": "true" })
            })
          ]
        }),
        (0, a.jsx)(n.N, {
          children: ev && (0, a.jsx)(
            s.PY1.div,
            {
              id: J2,
              role: "dialog",
              "aria-label": "Switch workspace",
              className: P().panel,
              "data-frame-keep": "",
              ...ta,
              children: (0, a.jsx)(n.N, {
                initial: false,
                children: "list" === eb ? (0, a.jsxs)(
                  s.PY1.div,
                  {
                    className: P().view,
                    ...ti(-1),
                    children: [
                      (0, a.jsxs)("div", {
                        className: P().searchRow,
                        children: [
                          (0, a.jsx)(p.A, {
                            size: 16,
                            className: P().searchIcon,
                            "aria-hidden": "true"
                          }),
                          (0, a.jsx)("input", {
                            ref: X,
                            className: P().search,
                            value: ek,
                            onChange: (e10) => {
                              var t3;
                              let r3, a2;
                              return eN(t3 = e10.target.value), r3 = t3.trim().toLowerCase(), void eC(
                                (a2 = el.find(
                                  (e11) => !r3 || [e11.name, e11.plan, e11.role].some(
                                    (e12) => e12?.toLowerCase().includes(r3)
                                  )
                                )) ? `ws:${a2.id}` : "create"
                              );
                            },
                            onKeyDown: (e10) => {
                              let t3 = eE ? eW.indexOf(eE) : -1, r3 = (t4) => {
                                e10.preventDefault(), eq.current = true, eC(
                                  eW[(t4 + eW.length) % eW.length]
                                );
                              };
                              "ArrowDown" === e10.key ? r3(t3 + 1) : "ArrowUp" === e10.key ? r3(t3 < 0 ? eW.length - 1 : t3 - 1) : "Home" !== e10.key || ek ? "End" !== e10.key || ek ? "Enter" === e10.key && eE && (e10.preventDefault(), eG(eE)) : r3(eW.length - 1) : r3(0);
                            },
                            placeholder: "Find a workspace",
                            "aria-label": "Find a workspace",
                            role: "combobox",
                            "aria-expanded": "true",
                            "aria-controls": G2,
                            "aria-autocomplete": "list",
                            "aria-activedescendant": tn,
                            spellCheck: false,
                            autoComplete: "off"
                          })
                        ]
                      }),
                      (0, a.jsxs)("div", {
                        ref: ee,
                        id: G2,
                        role: "listbox",
                        "aria-label": "Workspaces and actions",
                        className: P().listbox,
                        children: [
                          (0, a.jsx)(s.PY1.div, {
                            className: P().highlight,
                            "aria-hidden": "true",
                            "data-pressed": !!eT || void 0,
                            style: { y: eX, height: e0, clipPath: e1 },
                            initial: false,
                            animate: { opacity: +!!e3 },
                            transition: { duration: 0.12 }
                          }),
                          (0, a.jsxs)("div", {
                            ref: et,
                            role: "group",
                            "aria-label": "Workspaces",
                            className: P().body,
                            style: { "--rows": 6, "--row": "48px" },
                            onScroll: () => e4(true),
                            children: [
                              eY.map((e10) => {
                                let t3 = `ws:${e10.id}`, r3 = el.indexOf(e10), i2 = e10.id === eu;
                                return (0, a.jsxs)(
                                  "div",
                                  {
                                    id: `${Z2}-${t3}`,
                                    ref: (e11) => {
                                      e11 ? er.current.set(t3, e11) : er.current.delete(t3);
                                    },
                                    role: "option",
                                    "aria-selected": i2,
                                    "data-active": eE === t3 || void 0,
                                    className: P().row,
                                    onPointerMove: () => {
                                      eE !== t3 && eC(t3);
                                    },
                                    onPointerDown: (e11) => {
                                      e11.preventDefault(), e$(t3);
                                    },
                                    onPointerUp: () => e$(null),
                                    onPointerLeave: () => e$((e11) => e11 === t3 ? null : e11),
                                    onClick: () => eZ(e10.id, true),
                                    children: [
                                      (0, a.jsx)(K, {
                                        workspace: e10,
                                        size: 28
                                      }),
                                      (0, a.jsxs)("span", {
                                        className: P().rowText,
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: H(
                                              P().rowName,
                                              P().truncate
                                            ),
                                            children: e10.name
                                          }),
                                          (0, a.jsx)("span", {
                                            className: H(
                                              P().rowMeta,
                                              P().truncate
                                            ),
                                            children: U(e10)
                                          })
                                        ]
                                      }),
                                      e10.role && (0, a.jsx)("span", {
                                        className: P().role,
                                        children: e10.role
                                      }),
                                      (0, a.jsx)("span", {
                                        className: P().slot,
                                        children: i2 ? (0, a.jsx)(h.A, {
                                          size: 16,
                                          className: P().check,
                                          "aria-label": "Current workspace"
                                        }) : r3 < 9 ? (0, a.jsx)(v.ue, {
                                          keys: `mod+${r3 + 1}`,
                                          size: "sm",
                                          pressed: eT === t3,
                                          "aria-hidden": "true"
                                        }) : null
                                      })
                                    ]
                                  },
                                  e10.id
                                );
                              }),
                              !eY.length && (0, a.jsxs)("div", {
                                className: P().empty,
                                role: "presentation",
                                children: [
                                  (0, a.jsxs)("span", {
                                    className: P().emptyTitle,
                                    children: [
                                      "No workspaces match \u201C",
                                      ek.trim(),
                                      "\u201D"
                                    ]
                                  }),
                                  (0, a.jsx)("span", {
                                    className: P().emptyHint,
                                    children: "Press Enter to create it"
                                  })
                                ]
                              })
                            ]
                          }),
                          (0, a.jsx)("div", {
                            role: "group",
                            "aria-label": "Actions",
                            className: P().footer,
                            children: [
                              ["create", "Create workspace", f.A],
                              ["join", "Join with invite", w.A]
                            ].map(
                              ([e10, t3, r3]) => (0, a.jsxs)(
                                "div",
                                {
                                  id: `${Z2}-${e10}`,
                                  ref: (t4) => {
                                    t4 ? er.current.set(e10, t4) : er.current.delete(e10);
                                  },
                                  role: "option",
                                  "aria-selected": false,
                                  "data-active": eE === e10 || void 0,
                                  className: P().action,
                                  onPointerMove: () => {
                                    eE !== e10 && eC(e10);
                                  },
                                  onPointerDown: (t4) => {
                                    t4.preventDefault(), e$(e10);
                                  },
                                  onPointerUp: () => e$(null),
                                  onPointerLeave: () => e$((t4) => t4 === e10 ? null : t4),
                                  onClick: () => eJ(e10),
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: P().actionIcon,
                                      children: (0, a.jsx)(r3, {
                                        size: 16,
                                        "aria-hidden": "true"
                                      })
                                    }),
                                    (0, a.jsx)("span", {
                                      className: P().truncate,
                                      children: t3
                                    })
                                  ]
                                },
                                e10
                              )
                            )
                          })
                        ]
                      })
                    ]
                  },
                  "list"
                ) : (0, a.jsxs)(
                  s.PY1.form,
                  {
                    className: P().view,
                    onSubmit: (e10) => e7(eb, e10),
                    noValidate: true,
                    ...ti(1),
                    children: [
                      (0, a.jsxs)("div", {
                        className: P().formHead,
                        children: [
                          (0, a.jsx)(x.$, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            className: P().back,
                            onClick: () => eJ("list"),
                            "aria-label": "Back to workspaces",
                            children: (0, a.jsx)(g.A, {
                              size: 16,
                              "aria-hidden": "true"
                            })
                          }),
                          (0, a.jsx)("span", {
                            className: P().formTitle,
                            children: "create" === eb ? "Create workspace" : "Join with invite"
                          })
                        ]
                      }),
                      (0, a.jsx)("div", {
                        className: P().formBody,
                        children: "create" === eb ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: P().preview,
                              children: [
                                (0, a.jsx)(Y, {
                                  k: tr.name.charAt(0).toUpperCase(),
                                  reduced: D2,
                                  children: (0, a.jsx)(K, {
                                    workspace: tr,
                                    size: 40
                                  })
                                }),
                                (0, a.jsxs)("span", {
                                  className: P().rowText,
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: H(
                                        P().rowName,
                                        P().truncate,
                                        !eL.trim() && P().placeholderName
                                      ),
                                      children: tr.name
                                    }),
                                    (0, a.jsxs)("span", {
                                      className: H(
                                        P().rowMeta,
                                        P().truncate
                                      ),
                                      children: [
                                        eL.trim() ? `/${I(eL) || "workspace"}` : "Free plan",
                                        " \xB7 You are the owner"
                                      ]
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsx)(_.p, {
                              label: "Workspace name",
                              autoFocus: true,
                              value: eL,
                              maxLength: 48,
                              placeholder: "Northwind Labs",
                              autoComplete: "off",
                              error: eD,
                              onChange: (e10) => {
                                eM(e10.target.value), eD && eO(void 0);
                              }
                            })
                          ]
                        }) : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: P().preview,
                              children: [
                                te ? (0, a.jsx)(Y, {
                                  k: te.id,
                                  reduced: D2,
                                  children: (0, a.jsx)(K, {
                                    workspace: te,
                                    size: 40
                                  })
                                }) : (0, a.jsx)("span", {
                                  className: P().tileEmpty,
                                  "aria-hidden": "true"
                                }),
                                (0, a.jsxs)("span", {
                                  className: P().rowText,
                                  children: [
                                    (0, a.jsx)(Y, {
                                      k: te?.id ?? "none",
                                      reduced: D2,
                                      children: (0, a.jsx)(
                                        "span",
                                        {
                                          className: H(
                                            P().rowName,
                                            P().truncate,
                                            !te && P().placeholderName
                                          ),
                                          children: te?.name ?? "No invite yet"
                                        }
                                      )
                                    }),
                                    (0, a.jsx)(Y, {
                                      k: `m:${te?.id ?? "none"}`,
                                      reduced: D2,
                                      children: (0, a.jsx)(
                                        "span",
                                        {
                                          className: H(
                                            P().rowMeta,
                                            P().truncate
                                          ),
                                          children: te ? `Invited as ${te.role ?? "Member"} \xB7 ${null != te.members ? O(te.members) : "Pending"}` : "Paste a link to preview the workspace"
                                        }
                                      )
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsx)(_.p, {
                              label: "Invite link or code",
                              autoFocus: true,
                              value: ez,
                              placeholder: "https://resend.com/invite/\u2026",
                              autoComplete: "off",
                              spellCheck: false,
                              error: eD,
                              onChange: (e10) => {
                                eP(e10.target.value), eD && eO(void 0);
                              }
                            }),
                            !N2 && (0, a.jsx)("button", {
                              type: "button",
                              className: P().sample,
                              disabled: !e8,
                              onClick: () => {
                                e8 && (eP(e8.link), eO(void 0));
                              },
                              children: e8 ? "Use a sample invite" : "Sample invites used"
                            })
                          ]
                        })
                      }),
                      (0, a.jsxs)("div", {
                        className: P().formFoot,
                        children: [
                          (0, a.jsx)(x.$, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: () => eJ("list"),
                            children: "Cancel"
                          }),
                          (0, a.jsx)(x.$, {
                            type: "submit",
                            variant: "primary",
                            size: "sm",
                            loading: eF,
                            children: "create" === eb ? eF ? "Creating" : "Create workspace" : eF ? "Joining" : "Join workspace"
                          })
                        ]
                      })
                    ]
                  },
                  eb
                )
              })
            },
            "panel"
          )
        }),
        (0, a.jsx)("span", {
          className: P().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eA
        })
      ]
    });
  }
  function V(e2, t2) {
    let r2 = M.find((t3) => t3.link.toLowerCase() === e2.toLowerCase()), a2 = r2?.workspace;
    if (!a2) {
      let t3 = null;
      try {
        t3 = new URL(e2.includes("://") ? e2 : `https://${e2}`);
      } catch {
        t3 = null;
      }
      if (!t3 || !/invite|join/i.test(t3.pathname) || !t3.hostname.includes("."))
        throw Error("That doesn't look like an invite link");
      let r3 = t3.hostname.replace(/^www\./, "").split(".")[0] ?? "", i2 = r3.charAt(0).toUpperCase() + r3.slice(1);
      a2 = { id: `ws-${I(i2)}`, name: i2, plan: "Team", role: "Member" };
    }
    if (t2.some((e3) => e3.id === a2.id))
      throw Error(`You're already in ${a2.name}`);
    return a2;
  }
  var Z = r(1643), J = r.n(Z);
  function G() {
    return (0, a.jsx)("div", {
      className: J().demo,
      children: (0, a.jsx)(W, { defaultOpen: true })
    });
  }
  let Q = G;
}

__m(__module,__exports,__require);
});
A.reg(65342, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "chevrons-up-down",
    size: 24,
    node: [
      ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
      ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
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
A.reg(91161, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "link",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
          key: "1cjeqo"
        }
      ],
      [
        "path",
        {
          d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
          key: "19qd67"
        }
      ]
    ]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.cssFor("team-switcher", [1643,12053,14290,30314]);
A.item("team-switcher", {entry:61418, export:"TeamSwitcherDemo", kind:"component", tier:"pro", unresolved:["0"]});
})();