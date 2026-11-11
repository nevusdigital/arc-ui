/* settings-page (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(15298, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => s });
  var n = r(51811);
  let a = {
    name: "bell",
    size: 24,
    node: [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi"
        }
      ]
    ]
  };
  a.node;
  let s = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(33533, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "tablet",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "16",
          height: "20",
          x: "4",
          y: "2",
          rx: "2",
          ry: "2",
          key: "76otgf"
        }
      ],
      ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
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
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.regCss(66576, ".settings-page_root__EszY_{container-type:inline-size;width:min(100%,980px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body)}.settings-page_settings__LlXuq{--control-height-md:var(--control-height-sm);position:relative;display:grid;grid-template-columns:216px minmax(0,1fr);height:640px;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.settings-page_sidebar__MxQRm{display:flex;min-width:0;min-height:0;flex-direction:column;gap:16px;border-right:1px solid var(--border);padding:16px 8px 8px;background:color-mix(in oklab,var(--surface-muted) 50%,var(--surface))}.settings-page_sidebarHead__E3bcW{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-inline:12px}.settings-page_sidebarHead__E3bcW h2{margin:0;font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.settings-page_headAvatar__wCDeN{display:none}.settings-page_navList__jNKs_{display:flex;flex-direction:column;gap:1px;margin:0;padding:0;list-style:none}.settings-page_navItem__Y273o{position:relative;isolation:isolate;display:flex;width:100%;min-height:32px;align-items:center;gap:10px;border:0;border-radius:8px;padding:0 12px;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.settings-page_navItem__Y273o>svg{flex:none;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.settings-page_navItem__Y273o[aria-current=page],.settings-page_navItem__Y273o[aria-current=page]>svg{color:var(--foreground)}@media (hover:hover) and (pointer:fine){.settings-page_navItem__Y273o:hover,.settings-page_navItem__Y273o:hover>svg{color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.settings-page_navItem__Y273o:not([aria-current]):hover{background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}}.settings-page_navItem__Y273o:not([aria-current]):focus-visible{background:color-mix(in oklab,var(--surface-muted) 70%,transparent);color:var(--foreground)}.settings-page_highlight__PD5bQ{position:absolute;z-index:-1;inset:0;border:1px solid var(--border);border-radius:inherit;background:var(--surface);box-shadow:var(--shadow-resting)}.settings-page_navLabel__mJh8F{flex:1;min-width:0;white-space:nowrap}.settings-page_navDot__oiHmP{flex:none;width:6px;height:6px;border-radius:var(--radius-pill);background:var(--accent)}.settings-page_account__1C2UM{display:flex;min-width:0;align-items:center;gap:10px;margin-top:auto;border-top:1px solid var(--border);padding:12px 12px 4px}.settings-page_account__1C2UM>span:last-child{display:grid;min-width:0;gap:1px}.settings-page_account__1C2UM strong{overflow:hidden;font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:nowrap}.settings-page_account__1C2UM small{color:var(--text-muted);font-size:var(--text-xs)}.settings-page_main__R3A7Y{position:relative;min-width:0;min-height:0}.settings-page_scroller__6Ax7Q{height:100%;overflow-y:auto;overscroll-behavior:contain;padding:24px 32px 112px;scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.settings-page_pane__pSvHX{max-width:600px}.settings-page_paneHead__ZPVIF{margin-bottom:24px}.settings-page_paneHead__ZPVIF h3{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body);outline:none}.settings-page_paneHead__ZPVIF p{margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}.settings-page_identity__tV5e8{display:flex;align-items:center;gap:16px;margin-bottom:24px;border-bottom:1px solid var(--border-subtle);padding-bottom:24px}.settings-page_photo___54zS{position:relative;display:grid;flex:none;width:64px;height:64px}.settings-page_photo___54zS .settings-page_photoFrame__Yz_bR>*{width:64px;height:64px;font-size:18px}.settings-page_photoFrame__Yz_bR{display:grid;grid-area:1/1}.settings-page_identityText___y9Pf{display:grid;min-width:0;gap:2px}.settings-page_identityText___y9Pf>strong{font-weight:500}.settings-page_identityText___y9Pf>span,.settings-page_identityText___y9Pf>strong{overflow:hidden;font-size:var(--text-sm);text-overflow:ellipsis;white-space:nowrap}.settings-page_identityText___y9Pf>span{color:var(--text-muted)}.settings-page_photoActions__MKcaQ{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}.settings-page_photoError__0ZPCZ{padding-top:8px;color:var(--danger);font-size:var(--text-xs)}.settings-page_fields__SMXfS{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;gap:16px}.settings-page_group__Mjsb5+.settings-page_group__Mjsb5,.settings-page_inlineField__5eQ1P+.settings-page_group__Mjsb5{margin-top:24px}.settings-page_group__Mjsb5 h4{margin:0 0 2px;color:var(--text-secondary);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);outline:none}.settings-page_rows__PNEsZ>*+*{border-top:1px solid var(--border-subtle)}.settings-page_row__ZMPBx{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:24px;padding:14px 0}.settings-page_row__ZMPBx>button{margin-block:-6px}.settings-page_rowText__P3eCU{min-width:0}.settings-page_rowText__P3eCU label{font-size:var(--text-sm);font-weight:500;line-height:20px;cursor:pointer}.settings-page_rowText__P3eCU p{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}.settings-page_reveal__Dxdfx{overflow:hidden}.settings-page_revealField__BZYPN{max-width:300px;padding:2px 0 8px}.settings-page_warning__UT0II{display:flex;align-items:center;gap:7px;padding-top:10px;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}.settings-page_warning__UT0II svg{flex:none;color:var(--warning)}.settings-page_inlineField__5eQ1P{max-width:300px;margin-top:16px}.settings-page_sessions__5ino5{margin:6px 0 0;padding:0;list-style:none}.settings-page_session__n9zes{overflow:hidden}.settings-page_sessionInner__iAufF{display:grid;min-height:52px;grid-template-columns:16px minmax(0,1fr) auto;align-items:center;gap:12px;border-top:1px solid var(--border-subtle);padding:8px 0}.settings-page_sessionInner__iAufF>svg{color:var(--text-secondary)}.settings-page_sessionText__5XGFa{display:grid;min-width:0;gap:2px}.settings-page_sessionText__5XGFa span,.settings-page_sessionText__5XGFa strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.settings-page_sessionText__5XGFa strong{font-size:var(--text-sm);font-weight:500}.settings-page_sessionText__5XGFa span{color:var(--text-muted);font-size:var(--text-xs)}.settings-page_thisDevice__vU5HZ{padding-inline:12px;color:var(--text-muted);font-size:var(--text-sm);white-space:nowrap}.settings-page_plan__pLcyF{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 24px;padding-bottom:16px}.settings-page_planText__E__ev{display:grid;gap:4px}.settings-page_planText__E__ev strong{font-size:var(--text-base);font-weight:500}.settings-page_planText__E__ev>span{display:inline-flex;align-items:baseline;color:var(--text-muted);font-size:var(--text-sm)}.settings-page_price__4GgSn{display:grid;justify-items:end;gap:8px}.settings-page_priceValue__QnWuw>span{font-family:var(--font-body);font-size:var(--text-xl);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-body)}.settings-page_priceUnit__J_f__{color:var(--text-muted);font-size:var(--text-sm)}.settings-page_cycle__D3AjG{display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px;border-top:1px solid var(--border-subtle);padding:16px 0}.settings-page_cycleNote__ww5cb{position:relative;display:block;color:var(--text-secondary);font-size:var(--text-sm)}.settings-page_cycleNote__ww5cb>span{display:block}.settings-page_payment__rhFWV{display:flex;align-items:center;gap:12px;margin-bottom:24px;border-block:1px solid var(--border-subtle);padding:12px 0}.settings-page_payment__rhFWV>svg{flex:none;color:var(--text-secondary)}.settings-page_payment__rhFWV>span{display:grid;min-width:0;gap:2px}.settings-page_payment__rhFWV strong{font-size:var(--text-sm);font-weight:500}.settings-page_payment__rhFWV>span>span{color:var(--text-muted);font-size:var(--text-xs)}.settings-page_inherit__zPyJ8>span{color:inherit;font:inherit;letter-spacing:inherit}.settings-page_revertA__R9ERq{animation:settings-page_settings-revert-a__mUrLV var(--duration-considered) var(--ease-enter)}.settings-page_revertB__UJtgf{animation:settings-page_settings-revert-b__2SWnQ var(--duration-considered) var(--ease-enter)}@keyframes settings-page_settings-revert-a__mUrLV{0%{color:transparent;text-shadow:0 0 6px var(--foreground)}to{color:var(--foreground);text-shadow:0 0 0 transparent}}@keyframes settings-page_settings-revert-b__2SWnQ{0%{color:transparent;text-shadow:0 0 6px var(--foreground)}to{color:var(--foreground);text-shadow:0 0 0 transparent}}.settings-page_dock__uYgQY{position:absolute;z-index:5;right:0;bottom:20px;left:0;display:flex;justify-content:center;padding-inline:16px;pointer-events:none}.settings-page_bar__4cGjS{display:flex;max-width:100%;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:auto}.settings-page_barContent___gpqZ{position:relative;display:flex;flex:none;align-items:center}.settings-page_barEdit__qSrpC{display:flex;align-items:center;gap:2px;padding:4px 4px 4px 16px;white-space:nowrap}.settings-page_barCount__oYUUj{display:inline-flex;align-items:baseline;margin-right:12px;font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums}.settings-page_barSaved__idGcF{display:flex;height:40px;align-items:center;gap:8px;padding:0 16px 0 14px;font-size:var(--text-sm);font-weight:500;white-space:nowrap}.settings-page_barSaved__idGcF svg{flex:none;color:var(--success)}.settings-page_barSaved__idGcF small{color:var(--text-muted);font-size:var(--text-xs);font-weight:400}.settings-page_srOnly__28KuM{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.settings-page_navItem__Y273o,.settings-page_navItem__Y273o>svg{transition:none}}@media (prefers-reduced-motion:reduce){.settings-page_revertA__R9ERq,.settings-page_revertB__UJtgf{animation:none}}", {"root":"settings-page_root__EszY_","settings":"settings-page_settings__LlXuq","sidebar":"settings-page_sidebar__MxQRm","sidebarHead":"settings-page_sidebarHead__E3bcW","headAvatar":"settings-page_headAvatar__wCDeN","navList":"settings-page_navList__jNKs_","navItem":"settings-page_navItem__Y273o","highlight":"settings-page_highlight__PD5bQ","navLabel":"settings-page_navLabel__mJh8F","navDot":"settings-page_navDot__oiHmP","account":"settings-page_account__1C2UM","main":"settings-page_main__R3A7Y","scroller":"settings-page_scroller__6Ax7Q","pane":"settings-page_pane__pSvHX","paneHead":"settings-page_paneHead__ZPVIF","identity":"settings-page_identity__tV5e8","photo":"settings-page_photo___54zS","photoFrame":"settings-page_photoFrame__Yz_bR","identityText":"settings-page_identityText___y9Pf","photoActions":"settings-page_photoActions__MKcaQ","photoError":"settings-page_photoError__0ZPCZ","fields":"settings-page_fields__SMXfS","group":"settings-page_group__Mjsb5","inlineField":"settings-page_inlineField__5eQ1P","rows":"settings-page_rows__PNEsZ","row":"settings-page_row__ZMPBx","rowText":"settings-page_rowText__P3eCU","reveal":"settings-page_reveal__Dxdfx","revealField":"settings-page_revealField__BZYPN","warning":"settings-page_warning__UT0II","sessions":"settings-page_sessions__5ino5","session":"settings-page_session__n9zes","sessionInner":"settings-page_sessionInner__iAufF","sessionText":"settings-page_sessionText__5XGFa","thisDevice":"settings-page_thisDevice__vU5HZ","plan":"settings-page_plan__pLcyF","planText":"settings-page_planText__E__ev","price":"settings-page_price__4GgSn","priceValue":"settings-page_priceValue__QnWuw","priceUnit":"settings-page_priceUnit__J_f__","cycle":"settings-page_cycle__D3AjG","cycleNote":"settings-page_cycleNote__ww5cb","payment":"settings-page_payment__rhFWV","inherit":"settings-page_inherit__zPyJ8","revertA":"settings-page_revertA__R9ERq","settings-revert-a":"settings-page_settings-revert-a__mUrLV","revertB":"settings-page_revertB__UJtgf","settings-revert-b":"settings-page_settings-revert-b__2SWnQ","dock":"settings-page_dock__uYgQY","bar":"settings-page_bar__4cGjS","barContent":"settings-page_barContent___gpqZ","barEdit":"settings-page_barEdit__qSrpC","barCount":"settings-page_barCount__oYUUj","barSaved":"settings-page_barSaved__idGcF","srOnly":"settings-page_srOnly__28KuM","unsaved":"settings-page_unsaved__7Khad","long":"settings-page_long__AcCPO"});
A.reg(70299, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "monitor",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
      ],
      ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(71019, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "credit-card",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ["path", { d: "M6 14h2", key: "mk7k0u" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(73051, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => J,
    In: () => q,
    q7: () => ev,
    VF: () => ew,
    p4: () => eg,
    ZL: () => Y,
    bL: () => G,
    wn: () => eb,
    PP: () => eS,
    l9: () => W,
    WT: () => z,
    LM: () => eu
  });
  var r = n(12115), o = n(47650);
  function l(e2, [t2, n2]) {
    return Math.min(n2, Math.max(t2, e2));
  }
  (0, Object.defineProperty)(l, "name", { value: "clamp", configurable: true });
  var i = n(70379), a = n(76094), s = n(47527), u = n(68599), c = n(1933), d = n(19416), p = n(32007), f = n(69885), h = n(89971), v = n(80878), m = n(19040), g = n(83935), w = n(55897), x = n(42442), S = n(17347), y = n(59322), b = n(66294);
  function C(e2) {
    let t2 = r.useRef({ value: e2, previous: e2 });
    return r.useMemo(
      () => (t2.current.value !== e2 && (t2.current.previous = t2.current.value, t2.current.value = e2), t2.current.previous),
      [e2]
    );
  }
  (0, Object.defineProperty)(C, "name", {
    value: "usePrevious",
    configurable: true
  });
  var j = n(40562), P = n(22954), T = n(5174), k = n(95155), I = Object.defineProperty, E = (e2, t2) => I(e2, "name", { value: t2, configurable: true }), R = [" ", "Enter", "ArrowUp", "ArrowDown"], M = [" ", "Enter"], D = "Select", [L, K, B] = (0, a.N)(D), [_, H] = (0, u.A)(D, [B, v.Bk]), N = (0, v.Bk)(), [A, O] = _(D), [V, F] = _(D);
  function U(e2) {
    let {
      __scopeSelect: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: i2,
      value: a2,
      defaultValue: s2,
      onValueChange: u2,
      dir: d2,
      name: p2,
      autoComplete: f2,
      disabled: m2,
      required: g2,
      form: w2,
      internal_do_not_use_render: x2
    } = e2, S2 = N(t2), [b2, C2] = r.useState(null), [j2, P2] = r.useState(null), [T2, I2] = r.useState(false), R2 = (0, c.jH)(d2), [M2, K2] = (0, y.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: i2,
      caller: D
    }), [B2, _2] = (0, y.i)({ prop: a2, defaultProp: s2, onChange: u2, caller: D }), H2 = r.useRef(null), O2 = r.useRef(B2);
    r.useEffect(() => {
      let e3 = w2 ? b2?.ownerDocument.getElementById(w2) : b2?.form;
      if (e3 instanceof HTMLFormElement) {
        let t3 = E(() => _2(O2.current), "reset");
        return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
      }
    }, [w2, b2, _2]);
    let F2 = !b2 || !!w2 || !!b2.closest("form"), [U2, G2] = r.useState(/* @__PURE__ */ new Set()), W2 = (0, h.B)(), z2 = Array.from(U2).map((e3) => e3.props.value).join(";"), q2 = r.useCallback((e3) => {
      G2((t3) => new Set(t3).add(e3));
    }, []), Z2 = r.useCallback((e3) => {
      G2((t3) => {
        let n3 = new Set(t3);
        return n3.delete(e3), n3;
      });
    }, []), X2 = {
      required: g2,
      trigger: b2,
      onTriggerChange: C2,
      valueNode: j2,
      onValueNodeChange: P2,
      valueNodeHasChildren: T2,
      onValueNodeHasChildrenChange: I2,
      contentId: W2,
      value: B2,
      onValueChange: _2,
      open: M2,
      onOpenChange: K2,
      dir: R2,
      triggerPointerDownPosRef: H2,
      disabled: m2,
      name: p2,
      autoComplete: f2,
      form: w2,
      nativeOptions: U2,
      nativeSelectKey: z2,
      isFormControl: F2
    };
    return (0, k.jsx)(v.bL, {
      ...S2,
      children: (0, k.jsx)(A, {
        scope: t2,
        ...X2,
        children: (0, k.jsx)(L.Provider, {
          scope: t2,
          children: (0, k.jsx)(V, {
            scope: t2,
            onNativeOptionAdd: q2,
            onNativeOptionRemove: Z2,
            children: eP(x2) ? x2(X2) : n2
          })
        })
      })
    });
  }
  E(U, "SelectProvider");
  var G = E((e2) => {
    let { __scopeSelect: t2, children: n2, ...r2 } = e2;
    return (0, k.jsx)(U, {
      __scopeSelect: t2,
      ...r2,
      internal_do_not_use_render: ({ isFormControl: e3 }) => (0, k.jsxs)(k.Fragment, {
        children: [n2, e3 ? (0, k.jsx)(ej, { __scopeSelect: t2 }) : null]
      })
    });
  }, "Select"), W = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, disabled: o2 = false, ...l2 } = e2, a2 = N(n2), u2 = O("SelectTrigger", n2), c2 = u2.disabled || o2, d2 = (0, s.s)(t2, u2.onTriggerChange), p2 = K(n2), f2 = r.useRef("touch"), [h2, m2, g2] = ek((e3) => {
        let t3 = p2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.value === u2.value), r2 = eI(t3, e3, n3);
        void 0 !== r2 && u2.onValueChange(r2.value);
      }), x2 = E((e3) => {
        c2 || (u2.onOpenChange(true), g2()), e3 && (u2.triggerPointerDownPosRef.current = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        });
      }, "handleOpen");
      return (0, k.jsx)(v.Mz, {
        asChild: true,
        ...a2,
        children: (0, k.jsx)(w.sG.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u2.open ? u2.contentId : void 0,
          "aria-expanded": u2.open,
          "aria-required": u2.required,
          "aria-autocomplete": "none",
          dir: u2.dir,
          "data-state": u2.open ? "open" : "closed",
          disabled: c2,
          "data-disabled": c2 ? "" : void 0,
          "data-placeholder": eT(u2.value) ? "" : void 0,
          ...l2,
          ref: d2,
          onClick: (0, i.mK)(l2.onClick, (e3) => {
            e3.currentTarget.focus(), "mouse" !== f2.current && x2(e3);
          }),
          onPointerDown: (0, i.mK)(l2.onPointerDown, (e3) => {
            f2.current = e3.pointerType;
            let t3 = e3.target;
            t3.hasPointerCapture(e3.pointerId) && t3.releasePointerCapture(e3.pointerId), 0 === e3.button && false === e3.ctrlKey && "mouse" === e3.pointerType && (x2(e3), e3.preventDefault());
          }),
          onKeyDown: (0, i.mK)(l2.onKeyDown, (e3) => {
            let t3 = "" !== h2.current;
            e3.ctrlKey || e3.altKey || e3.metaKey || 1 !== e3.key.length || m2(e3.key), (!t3 || " " !== e3.key) && R.includes(e3.key) && (x2(), e3.preventDefault());
          })
        })
      });
    }, "SelectTrigger")
  ), z = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        className: o2,
        style: l2,
        children: i2,
        placeholder: a2 = "",
        ...u2
      } = e2, c2 = O("SelectValue", n2), { onValueNodeHasChildrenChange: d2 } = c2, p2 = void 0 !== i2, f2 = (0, s.s)(t2, c2.onValueNodeChange);
      (0, b.N)(() => {
        d2(p2);
      }, [d2, p2]);
      let h2 = eT(c2.value);
      return (0, k.jsx)(w.sG.span, {
        ...u2,
        asChild: !h2 && u2.asChild,
        ref: f2,
        style: { pointerEvents: "none" },
        children: (0, k.jsx)(
          r.Fragment,
          { children: h2 ? a2 : i2 },
          h2 ? "placeholder" : "value"
        )
      });
    }, "SelectValue")
  ), q = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, ...o2 } = e2;
      return (0, k.jsx)(w.sG.span, {
        "aria-hidden": true,
        ...o2,
        ref: t2,
        children: r2 || "\u25BC"
      });
    }, "SelectIcon")
  ), [Z, X] = _("SelectPortal", { forceMount: void 0 }), Y = E((e2) => {
    let { __scopeSelect: t2, forceMount: n2, ...r2 } = e2;
    return (0, k.jsx)(Z, {
      scope: e2.__scopeSelect,
      forceMount: n2,
      children: (0, k.jsx)(m.Z, { asChild: true, ...r2 })
    });
  }, "SelectPortal"), Q = "SelectContent", J = r.forwardRef(
    E(function(e2, t2) {
      let n2 = X(Q, e2.__scopeSelect), { forceMount: o2 = n2.forceMount, ...l2 } = e2, i2 = O(Q, e2.__scopeSelect), [a2, s2] = r.useState();
      return (0, b.N)(() => {
        s2(new DocumentFragment());
      }, []), (0, k.jsx)(g.C, {
        present: o2 || i2.open,
        children: ({ present: e3 }) => e3 ? (0, k.jsx)(er, { ...l2, ref: t2 }) : (0, k.jsx)($, { ...l2, fragment: a2 })
      });
    }, "SelectContent")
  ), $ = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, fragment: l2 } = e2;
      return l2 ? o.createPortal(
        (0, k.jsx)(ee, {
          scope: n2,
          children: (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)("div", { ref: t2, children: r2 })
          })
        }),
        l2
      ) : null;
    }, "SelectContentFragment")
  ), [ee, et] = _(Q), en = (0, x.TL)("SelectContent.RemoveScroll"), er = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2 } = e2, {
        position: o2 = "item-aligned",
        onCloseAutoFocus: l2,
        onEscapeKeyDown: a2,
        onPointerDownOutside: u2,
        side: c2,
        sideOffset: h2,
        align: v2,
        alignOffset: m2,
        arrowPadding: g2,
        collisionBoundary: w2,
        collisionPadding: x2,
        sticky: S2,
        hideWhenDetached: y2,
        avoidCollisions: b2,
        ...C2
      } = e2, j2 = O(Q, n2), [I2, R2] = r.useState(null), [M2, D2] = r.useState(null), L2 = (0, s.s)(t2, R2), [B2, _2] = r.useState(null), [H2, N2] = r.useState(null), A2 = K(n2), [V2, F2] = r.useState(false), U2 = r.useRef(false);
      r.useEffect(() => {
        if (I2) return (0, P.Eq)(I2);
      }, [I2]), (0, p.Oh)();
      let G2 = r.useCallback(
        (e3) => {
          let [t3, ...n3] = A2().map((e4) => e4.ref.current), [r2] = n3.slice(-1), o3 = document.activeElement;
          for (let n4 of e3)
            if (n4 === o3 || (n4?.scrollIntoView({ block: "nearest" }), n4 === t3 && M2 && (M2.scrollTop = 0), n4 === r2 && M2 && (M2.scrollTop = M2.scrollHeight), n4?.focus(), document.activeElement !== o3))
              return;
        },
        [A2, M2]
      ), W2 = r.useCallback(() => G2([B2, I2]), [G2, B2, I2]);
      r.useEffect(() => {
        V2 && W2();
      }, [V2, W2]);
      let { onOpenChange: z2, triggerPointerDownPosRef: q2 } = j2;
      r.useEffect(() => {
        if (I2) {
          let e3 = { x: 0, y: 0 }, t3 = E((t4) => {
            e3 = {
              x: Math.abs(Math.round(t4.pageX) - (q2.current?.x ?? 0)),
              y: Math.abs(Math.round(t4.pageY) - (q2.current?.y ?? 0))
            };
          }, "handlePointerMove"), n3 = E((n4) => {
            e3.x <= 10 && e3.y <= 10 ? n4.preventDefault() : n4.composedPath().includes(I2) || z2(false), document.removeEventListener("pointermove", t3), q2.current = null;
          }, "handlePointerUp");
          return null !== q2.current && (document.addEventListener("pointermove", t3), document.addEventListener("pointerup", n3, {
            capture: true,
            once: true
          })), () => {
            document.removeEventListener("pointermove", t3), document.removeEventListener("pointerup", n3, {
              capture: true
            });
          };
        }
      }, [I2, z2, q2]), r.useEffect(() => {
        let e3 = E(() => z2(false), "close");
        return window.addEventListener("blur", e3), window.addEventListener("resize", e3), () => {
          window.removeEventListener("blur", e3), window.removeEventListener("resize", e3);
        };
      }, [z2]);
      let [Z2, X2] = ek((e3) => {
        let t3 = A2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.ref.current === document.activeElement), r2 = eI(t3, e3, n3);
        r2 && setTimeout(() => r2.ref.current?.focus());
      }), Y2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && (_2(e3), r2 && (U2.current = true));
        },
        [j2.value]
      ), J2 = r.useCallback(() => I2?.focus(), [I2]), $2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && N2(e3);
        },
        [j2.value]
      ), et2 = "popper" === o2 ? el : eo;
      return (0, k.jsx)(ee, {
        scope: n2,
        content: I2,
        viewport: M2,
        onViewportChange: D2,
        itemRefCallback: Y2,
        selectedItem: B2,
        onItemLeave: J2,
        itemTextRefCallback: $2,
        focusSelectedItem: W2,
        selectedItemText: H2,
        position: o2,
        isPositioned: V2,
        searchRef: Z2,
        children: (0, k.jsx)(T.A, {
          as: en,
          allowPinchZoom: true,
          children: (0, k.jsx)(f.n, {
            asChild: true,
            trapped: j2.open,
            onMountAutoFocus: (e3) => {
              e3.preventDefault();
            },
            onUnmountAutoFocus: (0, i.mK)(l2, (e3) => {
              j2.trigger?.focus({ preventScroll: true }), e3.preventDefault();
            }),
            children: (0, k.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: a2,
              onPointerDownOutside: u2,
              onFocusOutside: (e3) => e3.preventDefault(),
              onDismiss: () => j2.onOpenChange(false),
              children: (0, k.jsx)(et2, {
                role: "listbox",
                id: j2.contentId,
                "data-state": j2.open ? "open" : "closed",
                dir: j2.dir,
                onContextMenu: (e3) => e3.preventDefault(),
                ...C2,
                ...et2 === el ? {
                  side: c2,
                  sideOffset: h2,
                  align: v2,
                  alignOffset: m2,
                  arrowPadding: g2,
                  collisionBoundary: w2,
                  collisionPadding: x2,
                  sticky: S2,
                  hideWhenDetached: y2,
                  avoidCollisions: b2
                } : {},
                onPlaced: () => F2(true),
                ref: L2,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...C2.style
                },
                onKeyDown: (0, i.mK)(C2.onKeyDown, (e3) => {
                  let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
                  if ("Tab" === e3.key && e3.preventDefault(), t3 || 1 !== e3.key.length || X2(e3.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e3.key)) {
                    let t4 = A2().filter((e4) => !e4.disabled).map((e4) => e4.ref.current);
                    if (["ArrowUp", "End"].includes(e3.key) && (t4 = t4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e3.key)) {
                      let n3 = e3.target, r2 = t4.indexOf(n3);
                      t4 = t4.slice(r2 + 1);
                    }
                    setTimeout(() => G2(t4)), e3.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    }, "SelectContentImpl")
  ), eo = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onPlaced: o2, ...i2 } = e2, a2 = O(Q, n2), u2 = et(Q, n2), [c2, d2] = r.useState(null), [p2, f2] = r.useState(null), h2 = (0, s.s)(t2, f2), v2 = K(n2), m2 = r.useRef(false), g2 = r.useRef(true), {
        viewport: x2,
        selectedItem: S2,
        selectedItemText: y2,
        focusSelectedItem: C2
      } = u2, j2 = r.useCallback(() => {
        if (a2.trigger && a2.valueNode && c2 && p2 && x2 && S2 && y2) {
          let e3 = a2.trigger.getBoundingClientRect(), t3 = p2.getBoundingClientRect(), n3 = a2.valueNode.getBoundingClientRect(), r2 = y2.getBoundingClientRect();
          if ("rtl" !== a2.dir) {
            let o3 = r2.left - t3.left, i4 = n3.left - o3, a3 = e3.left - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.left = d4 + "px";
          } else {
            let o3 = t3.right - r2.right, i4 = window.innerWidth - n3.right - o3, a3 = window.innerWidth - e3.right - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.right = d4 + "px";
          }
          let i3 = v2(), s2 = window.innerHeight - 20, u3 = x2.scrollHeight, d3 = window.getComputedStyle(p2), f3 = parseInt(d3.borderTopWidth, 10), h3 = parseInt(d3.paddingTop, 10), g3 = parseInt(d3.borderBottomWidth, 10), w2 = f3 + h3 + u3 + parseInt(d3.paddingBottom, 10) + g3, b2 = Math.min(5 * S2.offsetHeight, w2), C3 = window.getComputedStyle(x2), j3 = parseInt(C3.paddingTop, 10), P3 = parseInt(C3.paddingBottom, 10), T3 = e3.top + e3.height / 2 - 10, k2 = S2.offsetHeight / 2, I3 = f3 + h3 + (S2.offsetTop + k2);
          if (I3 <= T3) {
            let e4 = i3.length > 0 && S2 === i3[i3.length - 1].ref.current;
            c2.style.bottom = "0px";
            let t4 = Math.max(
              s2 - T3,
              k2 + (e4 ? P3 : 0) + (p2.clientHeight - x2.offsetTop - x2.offsetHeight) + g3
            );
            c2.style.height = I3 + t4 + "px";
          } else {
            let e4 = i3.length > 0 && S2 === i3[0].ref.current;
            c2.style.top = "0px";
            let t4 = Math.max(T3, f3 + x2.offsetTop + (e4 ? j3 : 0) + k2);
            c2.style.height = t4 + (w2 - I3) + "px", x2.scrollTop = I3 - T3 + x2.offsetTop;
          }
          c2.style.margin = "10px 0", c2.style.minHeight = b2 + "px", c2.style.maxHeight = s2 + "px", o2?.(), requestAnimationFrame(() => m2.current = true);
        }
      }, [v2, a2.trigger, a2.valueNode, c2, p2, x2, S2, y2, a2.dir, o2]);
      (0, b.N)(() => j2(), [j2]);
      let [P2, T2] = r.useState();
      (0, b.N)(() => {
        p2 && T2(window.getComputedStyle(p2).zIndex);
      }, [p2]);
      let I2 = r.useCallback(
        (e3) => {
          e3 && true === g2.current && (j2(), C2?.(), g2.current = false);
        },
        [j2, C2]
      );
      return (0, k.jsx)(ei, {
        scope: n2,
        contentWrapper: c2,
        shouldExpandOnScrollRef: m2,
        onScrollButtonChange: I2,
        children: (0, k.jsx)("div", {
          ref: d2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P2
          },
          children: (0, k.jsx)(w.sG.div, {
            ...i2,
            ref: h2,
            style: { boxSizing: "border-box", maxHeight: "100%", ...i2.style }
          })
        })
      });
    }, "SelectItemAlignedPosition")
  ), el = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        align: r2 = "start",
        collisionPadding: o2 = 10,
        ...l2
      } = e2, i2 = N(n2);
      return (0, k.jsx)(v.UC, {
        ...i2,
        ...l2,
        ref: t2,
        align: r2,
        collisionPadding: o2,
        style: {
          boxSizing: "border-box",
          ...l2.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "SelectPopperPosition")
  ), [ei, ea] = _(Q, {}), es = "SelectViewport", eu = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, nonce: o2, ...l2 } = e2, a2 = et(es, n2), u2 = ea(es, n2), c2 = (0, s.s)(t2, a2.onViewportChange), d2 = r.useRef(0);
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o2
          }),
          (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...l2,
              ref: c2,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...l2.style
              },
              onScroll: (0, i.mK)(l2.onScroll, (e3) => {
                let t3 = e3.currentTarget, { contentWrapper: n3, shouldExpandOnScrollRef: r2 } = u2;
                if (r2?.current && n3) {
                  let e4 = Math.abs(d2.current - t3.scrollTop);
                  if (e4 > 0) {
                    let r3 = window.innerHeight - 20, o3 = Math.max(
                      parseFloat(n3.style.minHeight),
                      parseFloat(n3.style.height)
                    );
                    if (o3 < r3) {
                      let l3 = o3 + e4, i2 = Math.min(r3, l3), a3 = l3 - i2;
                      n3.style.height = i2 + "px", "0px" === n3.style.bottom && (t3.scrollTop = a3 > 0 ? a3 : 0, n3.style.justifyContent = "flex-end");
                    }
                  }
                }
                d2.current = t3.scrollTop;
              })
            })
          })
        ]
      });
    }, "SelectViewport")
  ), [ec, ed] = _("SelectGroup"), ep = "SelectItem", [ef, eh] = _(ep), ev = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        value: o2,
        disabled: l2 = false,
        textValue: a2,
        ...u2
      } = e2, c2 = O(ep, n2), d2 = et(ep, n2), p2 = c2.value === o2, [f2, v2] = r.useState(a2 ?? ""), [m2, g2] = r.useState(false), x2 = (0, S.c)((e3) => d2.itemRefCallback?.(e3, o2, l2)), y2 = (0, s.s)(t2, x2), b2 = (0, h.B)(), C2 = r.useRef("touch"), j2 = E(() => {
        l2 || (c2.onValueChange(o2), c2.onOpenChange(false));
      }, "handleSelect");
      return (0, k.jsx)(ef, {
        scope: n2,
        value: o2,
        disabled: l2,
        textId: b2,
        isSelected: p2,
        onItemTextChange: r.useCallback((e3) => {
          v2((t3) => t3 || (e3?.textContent ?? "").trim());
        }, []),
        children: (0, k.jsx)(L.ItemSlot, {
          scope: n2,
          value: o2,
          disabled: l2,
          textValue: f2,
          children: (0, k.jsx)(w.sG.div, {
            role: "option",
            "aria-labelledby": b2,
            "data-highlighted": m2 ? "" : void 0,
            "aria-selected": p2 && m2,
            "data-state": p2 ? "checked" : "unchecked",
            "aria-disabled": l2 || void 0,
            "data-disabled": l2 ? "" : void 0,
            tabIndex: l2 ? void 0 : -1,
            ...u2,
            ref: y2,
            onFocus: (0, i.mK)(u2.onFocus, () => g2(true)),
            onBlur: (0, i.mK)(u2.onBlur, () => g2(false)),
            onClick: (0, i.mK)(u2.onClick, () => {
              "mouse" !== C2.current && j2();
            }),
            onPointerUp: (0, i.mK)(u2.onPointerUp, () => {
              "mouse" === C2.current && j2();
            }),
            onPointerDown: (0, i.mK)(u2.onPointerDown, (e3) => {
              C2.current = e3.pointerType;
            }),
            onPointerMove: (0, i.mK)(u2.onPointerMove, (e3) => {
              C2.current = e3.pointerType, l2 ? d2.onItemLeave?.() : "mouse" === C2.current && e3.currentTarget.focus({ preventScroll: true });
            }),
            onPointerLeave: (0, i.mK)(u2.onPointerLeave, (e3) => {
              e3.currentTarget === document.activeElement && d2.onItemLeave?.();
            }),
            onKeyDown: (0, i.mK)(u2.onKeyDown, (e3) => {
              l2 || e3.target !== e3.currentTarget || (d2.searchRef?.current === "" || " " !== e3.key) && (M.includes(e3.key) && j2(), " " === e3.key && e3.preventDefault());
            })
          })
        })
      });
    }, "SelectItem")
  ), em = "SelectItemText", eg = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, className: l2, style: i2, ...a2 } = e2, u2 = O(em, n2), c2 = et(em, n2), d2 = eh(em, n2), p2 = F(em, n2), [f2, h2] = r.useState(null), v2 = (0, S.c)((e3) => c2.itemTextRefCallback?.(e3, d2.value, d2.disabled)), m2 = (0, s.s)(t2, h2, d2.onItemTextChange, v2), g2 = f2?.textContent, x2 = r.useMemo(
        () => (0, k.jsx)(
          "option",
          { value: d2.value, disabled: d2.disabled, children: g2 },
          d2.value
        ),
        [d2.disabled, d2.value, g2]
      ), { onNativeOptionAdd: y2, onNativeOptionRemove: C2 } = p2;
      return (0, b.N)(() => (y2(x2), () => C2(x2)), [y2, C2, x2]), (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(w.sG.span, { id: d2.textId, ...a2, ref: m2 }),
          d2.isSelected && u2.valueNode && !u2.valueNodeHasChildren && !eT(u2.value) ? o.createPortal(a2.children, u2.valueNode) : null
        ]
      });
    }, "SelectItemText")
  ), ew = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, ...r2 } = e2;
      return eh("SelectItemIndicator", n2).isSelected ? (0, k.jsx)(w.sG.span, { "aria-hidden": true, ...r2, ref: t2 }) : null;
    }, "SelectItemIndicator")
  ), ex = "SelectScrollUpButton", eS = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ex, e2.__scopeSelect), o2 = ea(ex, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            i2(t3.scrollTop > 0);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop - t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollUpButton")
  ), ey = "SelectScrollDownButton", eb = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ey, e2.__scopeSelect), o2 = ea(ey, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            let e4 = t3.scrollHeight - t3.clientHeight;
            i2(Math.ceil(t3.scrollTop) < e4);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop + t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollDownButton")
  ), eC = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onAutoScroll: o2, ...l2 } = e2, a2 = et("SelectScrollButton", n2), s2 = r.useRef(null), u2 = K(n2), c2 = r.useCallback(() => {
        null !== s2.current && (window.clearInterval(s2.current), s2.current = null);
      }, []);
      return r.useEffect(() => () => c2(), [c2]), (0, b.N)(() => {
        let e3 = u2().find((e4) => e4.ref.current === document.activeElement);
        e3?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u2]), (0, k.jsx)(w.sG.div, {
        "aria-hidden": true,
        ...l2,
        ref: t2,
        style: { flexShrink: 0, ...l2.style },
        onPointerDown: (0, i.mK)(l2.onPointerDown, () => {
          null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerMove: (0, i.mK)(l2.onPointerMove, () => {
          a2.onItemLeave?.(), null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerLeave: (0, i.mK)(l2.onPointerLeave, () => {
          c2();
        })
      });
    }, "SelectScrollButtonImpl")
  ), ej = r.forwardRef(
    E(function({ __scopeSelect: e2, ...t2 }, n2) {
      let o2 = O("SelectBubbleInput", e2), {
        value: l2,
        onValueChange: i2,
        required: a2,
        disabled: u2,
        name: c2,
        autoComplete: d2,
        form: p2
      } = o2, { nativeOptions: f2, nativeSelectKey: h2 } = o2, v2 = r.useRef(null), m2 = (0, s.s)(n2, v2), g2 = l2 ?? "", x2 = C(g2), S2 = Array.from(f2).some((e3) => (e3.props.value ?? "") === "");
      return r.useEffect(() => {
        let e3 = v2.current;
        if (!e3) return;
        let t3 = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value"
        ).set;
        if (x2 !== g2 && t3) {
          let n3 = new Event("change", { bubbles: true });
          t3.call(e3, g2), e3.dispatchEvent(n3);
        }
      }, [x2, g2]), (0, k.jsxs)(
        w.sG.select,
        {
          "aria-hidden": true,
          required: a2,
          tabIndex: -1,
          name: c2,
          autoComplete: d2,
          disabled: u2,
          form: p2,
          onChange: (e3) => i2(e3.target.value),
          ...t2,
          style: { ...j.Qg, ...t2.style },
          ref: m2,
          defaultValue: g2,
          children: [
            eT(l2) && !S2 ? (0, k.jsx)("option", { value: "" }) : null,
            Array.from(f2)
          ]
        },
        h2
      );
    }, "SelectBubbleInput")
  );
  function eP(e2) {
    return "function" == typeof e2;
  }
  function eT(e2) {
    return "" === e2 || void 0 === e2;
  }
  function ek(e2) {
    let t2 = (0, S.c)(e2), n2 = r.useRef(""), o2 = r.useRef(0), l2 = r.useCallback(
      (e3) => {
        t2(n2.current + e3);
      },
      [t2]
    ), i2 = r.useCallback(() => {
      n2.current = "", window.clearTimeout(o2.current);
    }, []);
    return r.useEffect(() => () => window.clearTimeout(o2.current), []), [n2, l2, i2];
  }
  function eI(e2, t2, n2) {
    let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, o2 = n2 ? e2.indexOf(n2) : -1, l2 = eE(e2, Math.max(o2, 0));
    1 === r2.length && (l2 = l2.filter((e3) => e3 !== n2));
    let i2 = l2.find(
      (e3) => e3.textValue.toLowerCase().startsWith(r2.toLowerCase())
    );
    return i2 !== n2 ? i2 : void 0;
  }
  function eE(e2, t2) {
    return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
  }
  E(eP, "isFunction"), E(eT, "shouldShowPlaceholder"), E(ek, "useTypeaheadSearch"), E(eI, "findNextItem"), E(eE, "wrapArray");
}

__m(__module,__exports,__require);
});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(85633, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var r = a(51811);
  let s = {
    name: "laptop",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
          key: "1pdavp"
        }
      ],
      ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
    ]
  };
  s.node;
  let i = (0, r.A)(s);
}

__m(__module,__exports,__require);
});
A.reg(88359, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-round",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
      ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
    ],
    aliases: ["user-2"]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(94088, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(95438, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => i });
  var n = r(51811);
  let a = {
    name: "image-up",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
          key: "9csbqa"
        }
      ],
      ["path", { d: "m14 19.5 3-3 3 3", key: "9vmjn0" }],
      ["path", { d: "M17 22v-5.5", key: "1aa6fl" }],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
    ]
  };
  a.node;
  let i = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(96220, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { l: () => f });
  var s = t(95155), r = t(12115), i = t(73051), n = t(18310), l = t(80642), o = t(25354), d = t(12363), p = t(94088), c = t(64577), m = t(7770), u = t(82016), h = t.n(u);
  let _ = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${m.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: m.T.duration.standard,
        ease: [...m.T.ease.enter]
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${m.T.blur.subtle}px)`,
      transition: {
        duration: m.T.duration.fast,
        ease: [...m.T.ease.standard]
      }
    })
  }, x = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: m.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: m.T.duration.instant } }
  }, f = (0, r.forwardRef)(function({
    label: e2,
    description: a2,
    placeholder: t2 = "Select an option",
    options: m2,
    id: u2,
    className: f2,
    disabled: y,
    onValueChange: j,
    ...b
  }, g) {
    let v = (0, r.useId)(), N = u2 ?? v, w = a2 ? `${N}-description` : void 0, k = (0, n.I)(), [S, T] = (0, r.useState)(b.defaultValue ?? ""), R = b.value ?? S, A = m2.findIndex((e3) => e3.value === R), z = R ? m2[A]?.label ?? "" : t2, [P, I] = (0, r.useState)(A), [M, C] = (0, r.useState)(1);
    return P !== A && (I(A), C(A > P ? 1 : -1)), (0, s.jsxs)("div", {
      className: h().field,
      children: [
        (0, s.jsx)("label", { htmlFor: N, children: e2 }),
        (0, s.jsxs)(i.bL, {
          ...b,
          disabled: y,
          onValueChange: (e3) => {
            T(e3), j?.(e3);
          },
          children: [
            (0, s.jsxs)(i.l9, {
              ref: g,
              id: N,
              "aria-describedby": w,
              className: [h().trigger, f2].filter(Boolean).join(" "),
              children: [
                (0, s.jsx)("span", {
                  className: h().srOnly,
                  children: (0, s.jsx)(i.WT, { placeholder: t2 })
                }),
                (0, s.jsx)("span", {
                  className: h().valueText,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(l.N, {
                    initial: false,
                    custom: M,
                    children: (0, s.jsx)(
                      o.PY1.span,
                      {
                        "data-placeholder": R ? void 0 : "",
                        custom: M,
                        variants: k ? x : _,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: z
                      },
                      R ? `value-${R}` : "placeholder"
                    )
                  })
                }),
                (0, s.jsx)(i.In, {
                  className: h().chevron,
                  children: (0, s.jsx)(d.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsx)(i.ZL, {
              children: (0, s.jsxs)(i.UC, {
                className: h().content,
                position: "popper",
                sideOffset: 4,
                collisionPadding: 12,
                children: [
                  (0, s.jsx)(i.PP, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, s.jsx)(i.LM, {
                    className: h().viewport,
                    children: m2.map(
                      (e3) => (0, s.jsxs)(
                        i.q7,
                        {
                          value: e3.value,
                          disabled: e3.disabled,
                          className: h().item,
                          children: [
                            (0, s.jsx)(i.p4, { children: e3.label }),
                            (0, s.jsx)(i.VF, {
                              className: h().indicator,
                              children: (0, s.jsx)(c.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        },
                        e3.value
                      )
                    )
                  }),
                  (0, s.jsx)(i.wn, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("span", { id: w, className: h().hint, children: a2 })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(98640, function(__module,__exports,__require){
"use strict";
function __m(e, i, t) {
  "use strict";
  t.r(i), t.d(i, { SettingsPage: () => Q, default: () => X });
  var a = t(95155), s = t(12115), n = t(18310), l = t(80642), r = t(25354), o = t(28245), c = t(92171), d = t(57700), u = t(88359), h = t(15298), p = t(50981), g = t(71019), m = t(85633), _ = t(95e3), x = t(33533), v = t(70299), y = t(95438), b = t(11012), f = t(65024), j = t(92218), w = t(51288), N = t(35978), T = t(66558), k = t(96220), C = t(50680), S = t(98344), $ = t(7770), P = t(66576), A = t.n(P);
  let E = [
    {
      id: "profile",
      label: "Profile",
      description: "How you appear to teammates across Northwind.",
      icon: u.A
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "Choose what reaches you, and when.",
      icon: h.A
    },
    {
      id: "security",
      label: "Security",
      description: "Protect your account and review where you are signed in.",
      icon: p.A
    },
    {
      id: "billing",
      label: "Billing",
      description: "Your plan, payment method, and invoice details.",
      icon: g.A
    }
  ], L = {
    photo: "media/people/emma-collins.svg",
    name: "Emma Collins",
    title: "Product designer",
    email: "emma@northwind.studio",
    timezone: "lisbon",
    mentions: true,
    summary: true,
    news: false,
    messages: true,
    reminders: false,
    quiet: false,
    quietHours: "22-7",
    twoStep: true,
    alerts: true,
    timeout: "8h",
    signedOut: [],
    cycle: "monthly",
    billingEmail: "billing@northwind.studio",
    company: "Northwind Studio Lda.",
    country: "pt",
    vat: "PT 516 283 947"
  }, R = {
    photo: "profile",
    name: "profile",
    title: "profile",
    email: "profile",
    timezone: "profile",
    mentions: "notifications",
    summary: "notifications",
    news: "notifications",
    messages: "notifications",
    reminders: "notifications",
    quiet: "notifications",
    quietHours: "notifications",
    twoStep: "security",
    alerts: "security",
    timeout: "security",
    signedOut: "security",
    cycle: "billing",
    billingEmail: "billing",
    company: "billing",
    country: "billing",
    vat: "billing"
  }, z = [
    { value: "lisbon", label: "Lisbon (GMT+1)" },
    { value: "london", label: "London (GMT+1)" },
    { value: "berlin", label: "Berlin (GMT+2)" },
    { value: "new-york", label: "New York (GMT\u22124)" },
    { value: "san-francisco", label: "San Francisco (GMT\u22127)" },
    { value: "tokyo", label: "Tokyo (GMT+9)" }
  ], I = [
    { value: "21-8", label: "9 PM to 8 AM" },
    { value: "22-7", label: "10 PM to 7 AM" },
    { value: "23-6", label: "11 PM to 6 AM" },
    { value: "0-8", label: "Midnight to 8 AM" }
  ], O = [
    { value: "1h", label: "After 1 hour" },
    { value: "8h", label: "After 8 hours" },
    { value: "24h", label: "After 24 hours" },
    { value: "7d", label: "After 7 days" }
  ], F = [
    { value: "pt", label: "Portugal" },
    { value: "de", label: "Germany" },
    { value: "nl", label: "Netherlands" },
    { value: "gb", label: "United Kingdom" },
    { value: "us", label: "United States" }
  ], Y = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" }
  ], M = [
    {
      id: "mac",
      device: "MacBook Pro",
      app: "Safari",
      place: "Lisbon, Portugal",
      seen: "Active now",
      icon: m.A,
      current: true
    },
    {
      id: "iphone",
      device: "iPhone 16",
      app: "Northwind for iOS",
      place: "Lisbon, Portugal",
      seen: "2 hours ago",
      icon: _.A
    },
    {
      id: "ipad",
      device: "iPad Air",
      app: "Safari",
      place: "Porto, Portugal",
      seen: "Yesterday",
      icon: x.A
    },
    {
      id: "windows",
      device: "Windows PC",
      app: "Chrome",
      place: "Berlin, Germany",
      seen: "12 days ago",
      icon: v.A
    }
  ], B = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, U = (e2) => `blur(${e2}px)`, D = [...$.T.ease.enter], W = [...$.T.ease.standard], q = {
    enter: ({ direction: e2, axis: i2, reduce: t2 }) => t2 ? { opacity: 0 } : {
      opacity: 0,
      ..."x" === i2 ? { x: 16 * e2 } : { y: 14 * e2 },
      filter: U($.T.blur.subtle)
    },
    center: ({ reduce: e2 }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      filter: U(0),
      transition: e2 ? { duration: $.T.duration.instant } : {
        x: $.T.spring.smooth,
        y: $.T.spring.smooth,
        opacity: { duration: $.T.duration.standard, ease: D },
        filter: { duration: $.T.duration.standard, ease: D }
      }
    }),
    exit: ({ direction: e2, axis: i2, reduce: t2 }) => t2 ? { opacity: 0, transition: { duration: $.T.duration.instant } } : {
      opacity: 0,
      ..."x" === i2 ? { x: -10 * e2 } : { y: -8 * e2 },
      filter: U($.T.blur.subtle),
      transition: { duration: $.T.duration.fast, ease: W }
    }
  }, H = {
    initial: { opacity: 0, y: 6, filter: U($.T.blur.soft) },
    animate: { opacity: 1, y: 0, filter: U(0) },
    exit: { opacity: 0, y: -4, filter: U($.T.blur.subtle) }
  };
  function G({ show: e2, className: i2, children: t2 }) {
    let s2 = (0, n.I)();
    return (0, a.jsx)(l.N, {
      initial: false,
      children: e2 && (0, a.jsx)(r.PY1.div, {
        className: A().reveal,
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: s2 ? { duration: 0 } : {
          height: $.T.spring.smooth,
          opacity: { duration: $.T.duration.standard }
        },
        children: (0, a.jsx)("div", { className: i2, children: t2 })
      })
    });
  }
  function V({ id: e2, title: i2, children: t2, footer: s2 }) {
    return (0, a.jsxs)("section", {
      className: A().group,
      "aria-labelledby": e2,
      children: [
        (0, a.jsx)("h4", { id: e2, children: i2 }),
        (0, a.jsx)("div", { className: A().rows, children: t2 }),
        s2
      ]
    });
  }
  function K({
    id: e2,
    label: i2,
    description: t2,
    checked: s2,
    onChange: n2,
    children: l2
  }) {
    return (0, a.jsxs)("div", {
      className: A().row,
      children: [
        (0, a.jsxs)("div", {
          className: A().rowText,
          children: [
            (0, a.jsx)("label", { htmlFor: e2, children: i2 }),
            (0, a.jsx)("p", { id: `${e2}-hint`, children: t2 }),
            l2
          ]
        }),
        (0, a.jsx)(C.d, {
          id: e2,
          checked: s2,
          onCheckedChange: n2,
          "aria-describedby": `${e2}-hint`
        })
      ]
    });
  }
  function Z({
    state: e2,
    count: i2,
    onDiscard: t2,
    onSave: d2,
    shake: u2,
    barRef: h2
  }) {
    let p2 = (0, n.I)(), g2 = (0, s.useRef)(null), m2 = (0, o.d)(52), _2 = (0, o.d)(52);
    (0, s.useLayoutEffect)(() => {
      let e3 = g2.current;
      if (!e3) return;
      let i3 = () => {
        let i4 = { width: e3.offsetWidth + 2, height: e3.offsetHeight + 2 };
        if (p2) {
          m2.jump(i4.width), _2.jump(i4.height);
          return;
        }
        (0, c.i)(m2, i4.width, $.T.spring.morph), (0, c.i)(_2, i4.height, $.T.spring.morph);
      };
      if (i3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(i3);
      return t3.observe(e3), () => t3.disconnect();
    }, [_2, p2, m2]);
    let x2 = p2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    } : {
      initial: { opacity: 0, scale: 0.96, filter: U($.T.blur.soft) },
      animate: { opacity: 1, scale: 1, filter: U(0) },
      exit: { opacity: 0, scale: 0.96, filter: U($.T.blur.soft) }
    }, v2 = {
      duration: p2 ? $.T.duration.instant : $.T.duration.standard,
      ease: D
    };
    return (0, a.jsx)(r.PY1.div, {
      ref: h2,
      className: A().bar,
      role: "group",
      "aria-label": "saved" === e2 ? "Save status" : "Unsaved changes",
      style: { width: m2, height: _2, x: u2 },
      initial: p2 ? { opacity: 0 } : { opacity: 0, y: 28, filter: U($.T.blur.soft) },
      animate: { opacity: 1, y: 0, filter: U(0) },
      exit: p2 ? { opacity: 0, transition: { duration: $.T.duration.instant } } : {
        opacity: 0,
        y: 20,
        width: 52,
        height: 52,
        filter: U($.T.blur.soft),
        transition: {
          width: $.T.spring.smooth,
          height: $.T.spring.smooth,
          y: { ...$.T.spring.smooth, delay: 0.06 },
          opacity: { duration: $.T.duration.exit, delay: 0.1 },
          filter: { duration: $.T.duration.exit, delay: 0.1 }
        }
      },
      transition: p2 ? { duration: $.T.duration.instant } : {
        y: $.T.spring.smooth,
        opacity: { duration: $.T.duration.fast },
        filter: { duration: $.T.duration.standard }
      },
      children: (0, a.jsx)("div", {
        ref: g2,
        className: A().barContent,
        children: (0, a.jsx)(l.N, {
          mode: "popLayout",
          initial: false,
          children: "saved" === e2 ? (0, a.jsxs)(
            r.PY1.div,
            {
              className: A().barSaved,
              ...x2,
              transition: v2,
              children: [
                (0, a.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  width: "18",
                  height: "18",
                  "aria-hidden": "true",
                  children: (0, a.jsx)(r.PY1.path, {
                    d: "M5 12.5 9.5 17 19 7.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    initial: { pathLength: +!!p2 },
                    animate: { pathLength: 1 },
                    transition: {
                      duration: 0.34 * !p2,
                      delay: 0.08 * !p2,
                      ease: D
                    }
                  })
                }),
                (0, a.jsx)("span", { children: "Changes saved" })
              ]
            },
            "saved"
          ) : (0, a.jsxs)(
            r.PY1.div,
            {
              className: A().barEdit,
              ...x2,
              transition: v2,
              children: [
                (0, a.jsxs)("span", {
                  className: A().barCount,
                  children: [
                    (0, a.jsx)("span", {
                      className: A().inherit,
                      children: (0, a.jsx)(f.q, { value: i2 })
                    }),
                    (0, a.jsx)("span", {
                      className: A().unsaved,
                      children: "\xA0unsaved"
                    }),
                    "\xA0",
                    (0, a.jsx)(S.g, {
                      children: 1 === i2 ? "change" : "changes"
                    })
                  ]
                }),
                (0, a.jsx)(w.$, {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  disabled: "saving" === e2,
                  onClick: t2,
                  children: "Discard"
                }),
                (0, a.jsx)(w.$, {
                  type: "button",
                  size: "sm",
                  loading: "saving" === e2,
                  onClick: d2,
                  children: "saving" === e2 ? "Saving" : (0, a.jsxs)("span", {
                    children: [
                      "Save",
                      (0, a.jsx)("span", {
                        className: A().long,
                        children: "\xA0changes"
                      })
                    ]
                  })
                })
              ]
            },
            "edit"
          )
        })
      })
    });
  }
  function Q() {
    let e2, i2 = (0, s.useId)(), t2 = (0, s.useId)(), u2 = (0, n.I)(), [h2, p2] = (0, s.useState)("profile"), [m2, _2] = (0, s.useState)({ direction: 1, axis: "y" }), [x2, v2] = (0, s.useState)(L), [C2, P2] = (0, s.useState)(L), [W2, Q2] = (0, s.useState)("idle"), [X2, J] = (0, s.useState)([]), [ee, ei] = (0, s.useState)({ tick: 0, keys: [] }), [et, ea] = (0, s.useState)(""), [es, en] = (0, s.useState)(""), el = (0, s.useRef)(null), er = (0, s.useRef)([]), eo = (0, s.useRef)(null), ec = (0, s.useRef)(null), ed = (0, s.useRef)(null), eu = (0, s.useRef)(null), eh = (0, s.useRef)(null), ep = (0, s.useRef)(/* @__PURE__ */ new Set()), eg = (0, s.useRef)(/* @__PURE__ */ new Set()), em = (0, o.d)(0), e_ = Object.keys(x2).filter((e3) => "signedOut" !== e3 && x2[e3] !== C2[e3]), ex = C2.signedOut.filter((e3) => !x2.signedOut.includes(e3)).length + x2.signedOut.filter((e3) => !C2.signedOut.includes(e3)).length, ev = e_.length + ex, ey = (e2 = {}, C2.name.trim() || (e2.name = "Enter your full name"), B.test(C2.email.trim()) || (e2.email = "Enter a valid email address"), B.test(C2.billingEmail.trim()) || (e2.billingEmail = "Enter a valid billing email"), e2), eb = "saving" === W2 ? "saving" : ev ? "edit" : "saved" === W2 ? "saved" : null, ef = E.find((e3) => e3.id === h2) ?? E[0], ej = M.filter((e3) => !C2.signedOut.includes(e3.id)), ew = "yearly" === C2.cycle ? 1440 : 144, eN = { ...m2, reduce: !!u2 };
    function eT(e3, i3) {
      let t3 = window.setTimeout(() => {
        ep.current.delete(t3), e3();
      }, i3);
      ep.current.add(t3);
    }
    function ek(e3, i3) {
      P2((t3) => ({ ...t3, [e3]: i3 }));
    }
    (0, s.useEffect)(() => {
      let e3 = ep.current, i3 = eg.current;
      return () => {
        e3.forEach((e4) => window.clearTimeout(e4)), i3.forEach((e4) => URL.revokeObjectURL(e4));
      };
    }, []), (0, s.useEffect)(() => {
      "edit" !== eb && "saving" !== eb && ed.current?.contains(document.activeElement) && ec.current?.focus({ preventScroll: true });
    }, [eb]);
    let eC = (e3) => J((i3) => i3.includes(e3) ? i3 : [...i3, e3]), eS = (e3) => X2.includes(e3) ? ey[e3] : void 0, e$ = (e3) => ee.keys.includes(e3) ? ee.tick % 2 ? A().revertA : A().revertB : void 0, eP = (e3) => requestAnimationFrame(
      () => requestAnimationFrame(() => document.getElementById(e3)?.focus())
    );
    function eA(e3, i3) {
      if (e3 === h2) {
        i3 && eP(i3);
        return;
      }
      let t3 = E.findIndex((e4) => e4.id === h2), a2 = E.findIndex((i4) => i4.id === e3), s2 = el.current, n2 = !!s2 && "row" === getComputedStyle(s2).flexDirection;
      _2({ direction: a2 > t3 ? 1 : -1, axis: n2 ? "x" : "y" }), p2(e3), ei((e4) => e4.keys.length ? { ...e4, keys: [] } : e4), eh.current = i3 ?? null, n2 && er.current[a2]?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: u2 ? "auto" : "smooth"
      });
    }
    function eE() {
      if (!ev || "saving" === W2) return;
      let e3 = Object.keys(ey);
      if (e3.length) {
        J((i3) => [.../* @__PURE__ */ new Set([...i3, ...e3])]), en(`${ey[e3[0]]} before saving`), u2 || (0, c.i)(em, [0, -7, 6, -4, 2, 0], {
          duration: 0.42,
          ease: "easeOut"
        }), eA(R[e3[0]], `${i2}-${e3[0]}`);
        return;
      }
      Q2("saving"), en("Saving changes"), eT(() => {
        v2(C2), Q2("saved"), J([]), en(`${ev} ${1 === ev ? "change" : "changes"} saved.`), eT(() => Q2((e4) => "saved" === e4 ? "idle" : e4), 1800);
      }, 900);
    }
    return (0, a.jsx)("section", {
      className: A().root,
      "aria-labelledby": `${i2}-title`,
      onKeyDown: (e3) => {
        (e3.metaKey || e3.ctrlKey) && "s" === e3.key.toLowerCase() && (e3.preventDefault(), eE());
      },
      children: (0, a.jsxs)("div", {
        className: A().settings,
        children: [
          (0, a.jsxs)("aside", {
            className: A().sidebar,
            children: [
              (0, a.jsxs)("div", {
                className: A().sidebarHead,
                children: [
                  (0, a.jsx)("h2", { id: `${i2}-title`, children: "Settings" }),
                  (0, a.jsx)("span", {
                    className: A().headAvatar,
                    children: (0, a.jsx)(j.e, {
                      name: x2.name,
                      src: x2.photo ?? void 0,
                      size: "sm"
                    })
                  })
                ]
              }),
              (0, a.jsx)(d.o, {
                id: t2,
                children: (0, a.jsx)("nav", {
                  "aria-label": "Settings sections",
                  children: (0, a.jsx)(r.PY1.ul, {
                    ref: el,
                    className: A().navList,
                    layoutScroll: true,
                    children: E.map((e3, i3) => {
                      let t3, s2 = e3.icon, n2 = (t3 = e3.id, e_.filter((e4) => R[e4] === t3).length + ("security" === t3 ? ex : 0));
                      return (0, a.jsx)(
                        "li",
                        {
                          children: (0, a.jsxs)("button", {
                            ref: (e4) => {
                              er.current[i3] = e4;
                            },
                            type: "button",
                            className: A().navItem,
                            "aria-current": h2 === e3.id ? "page" : void 0,
                            onClick: () => eA(e3.id),
                            onKeyDown: (e4) => {
                              let t4, a2;
                              return t4 = {
                                ArrowDown: 1,
                                ArrowRight: 1,
                                ArrowUp: -1,
                                ArrowLeft: -1
                              }, void (!((a2 = e4.key in t4 ? (i3 + t4[e4.key] + E.length) % E.length : "Home" === e4.key ? 0 : "End" === e4.key ? E.length - 1 : -1) < 0) && (e4.preventDefault(), er.current[a2]?.focus(), eA(E[a2].id)));
                            },
                            children: [
                              h2 === e3.id && (0, a.jsx)(r.PY1.span, {
                                layoutId: "settings-section",
                                layoutDependency: h2,
                                className: A().highlight,
                                transition: u2 ? { duration: 0 } : $.T.spring.morph,
                                "aria-hidden": "true"
                              }),
                              (0, a.jsx)(s2, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, a.jsx)("span", {
                                className: A().navLabel,
                                children: e3.label
                              }),
                              (0, a.jsx)(l.N, {
                                initial: false,
                                children: n2 > 0 && (0, a.jsx)(
                                  r.PY1.span,
                                  {
                                    className: A().navDot,
                                    "aria-hidden": "true",
                                    initial: { opacity: 0, scale: 0.2 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.2 },
                                    transition: u2 ? { duration: 0 } : $.T.spring.snappy
                                  },
                                  "dot"
                                )
                              }),
                              n2 > 0 && (0, a.jsxs)("span", {
                                className: A().srOnly,
                                children: [", ", n2, " unsaved"]
                              })
                            ]
                          })
                        },
                        e3.id
                      );
                    })
                  })
                })
              }),
              (0, a.jsxs)("div", {
                className: A().account,
                children: [
                  (0, a.jsx)(j.e, {
                    name: x2.name,
                    src: x2.photo ?? void 0,
                    size: "md"
                  }),
                  (0, a.jsxs)("span", {
                    children: [
                      (0, a.jsx)("strong", { children: x2.name }),
                      (0, a.jsx)("small", { children: "Team plan \xB7 Admin" })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsxs)("div", {
            className: A().main,
            children: [
              (0, a.jsx)("div", {
                ref: eo,
                className: A().scroller,
                role: "region",
                "aria-labelledby": `${i2}-heading`,
                children: (0, a.jsx)(l.N, {
                  mode: "wait",
                  initial: false,
                  custom: eN,
                  onExitComplete: function() {
                    eo.current?.scrollTo({ top: 0 }), eh.current && (eP(eh.current), eh.current = null);
                  },
                  children: (0, a.jsxs)(
                    r.PY1.div,
                    {
                      className: A().pane,
                      custom: eN,
                      variants: q,
                      initial: "enter",
                      animate: "center",
                      exit: "exit",
                      children: [
                        (0, a.jsxs)("header", {
                          className: A().paneHead,
                          children: [
                            (0, a.jsx)("h3", {
                              id: `${i2}-heading`,
                              ref: ec,
                              tabIndex: -1,
                              children: ef.label
                            }),
                            (0, a.jsx)("p", { children: ef.description })
                          ]
                        }),
                        "profile" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: A().identity,
                              children: [
                                (0, a.jsx)("div", {
                                  className: A().photo,
                                  children: (0, a.jsx)(l.N, {
                                    initial: false,
                                    mode: "popLayout",
                                    children: (0, a.jsx)(
                                      r.PY1.span,
                                      {
                                        className: A().photoFrame,
                                        initial: {
                                          opacity: 0,
                                          scale: 0.9,
                                          filter: U($.T.blur.soft)
                                        },
                                        animate: {
                                          opacity: 1,
                                          scale: 1,
                                          filter: U(0)
                                        },
                                        exit: {
                                          opacity: 0,
                                          scale: 1.04,
                                          filter: U($.T.blur.soft)
                                        },
                                        transition: u2 ? { duration: 0 } : {
                                          scale: $.T.spring.smooth,
                                          opacity: {
                                            duration: $.T.duration.standard
                                          },
                                          filter: {
                                            duration: $.T.duration.standard
                                          }
                                        },
                                        children: (0, a.jsx)(j.e, {
                                          name: C2.name.trim() || x2.name,
                                          src: C2.photo ?? void 0,
                                          size: "xl"
                                        })
                                      },
                                      C2.photo ?? "initials"
                                    )
                                  })
                                }),
                                (0, a.jsxs)("div", {
                                  className: A().identityText,
                                  children: [
                                    (0, a.jsx)("strong", {
                                      children: C2.name.trim() || "Your name"
                                    }),
                                    (0, a.jsxs)("span", {
                                      children: [
                                        C2.title.trim() || "No job title",
                                        " \xB7 Northwind Studio"
                                      ]
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: A().photoActions,
                                      children: [
                                        (0, a.jsxs)(w.$, {
                                          id: `${i2}-change-photo`,
                                          type: "button",
                                          variant: "secondary",
                                          size: "sm",
                                          onClick: () => eu.current?.click(),
                                          children: [
                                            (0, a.jsx)(y.A, {
                                              size: 15,
                                              strokeWidth: 1.8,
                                              "aria-hidden": "true"
                                            }),
                                            "Change photo"
                                          ]
                                        }),
                                        C2.photo && (0, a.jsx)(w.$, {
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          onClick: function() {
                                            ek("photo", null), ea(""), en(
                                              "Photo removed. Your initials will show instead."
                                            ), eP(`${i2}-change-photo`);
                                          },
                                          children: "Remove"
                                        })
                                      ]
                                    }),
                                    (0, a.jsx)("input", {
                                      ref: eu,
                                      type: "file",
                                      accept: "image/png,image/jpeg,image/webp",
                                      hidden: true,
                                      onChange: function(e3) {
                                        let i3 = e3.target.files?.[0];
                                        if (e3.target.value = "", !i3)
                                          return;
                                        if (!/^image\/(png|jpeg|webp)$/.test(
                                          i3.type
                                        ))
                                          return void ea(
                                            "Choose a JPG, PNG, or WebP image"
                                          );
                                        if (i3.size > 5242880)
                                          return void ea(
                                            "Choose an image under 5 MB"
                                          );
                                        let t3 = URL.createObjectURL(i3);
                                        eg.current.add(t3), ea(""), ek("photo", t3), en("New photo ready to save");
                                      }
                                    }),
                                    (0, a.jsx)(G, {
                                      show: !!et,
                                      className: A().photoError,
                                      children: (0, a.jsx)("span", {
                                        role: "alert",
                                        children: et
                                      })
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().fields,
                              children: [
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-name`,
                                  label: "Full name",
                                  value: C2.name,
                                  autoComplete: "name",
                                  className: e$("name"),
                                  error: eS("name"),
                                  onBlur: () => eC("name"),
                                  onChange: (e3) => ek("name", e3.target.value)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-title-field`,
                                  label: "Job title",
                                  value: C2.title,
                                  autoComplete: "organization-title",
                                  className: e$("title"),
                                  onChange: (e3) => ek("title", e3.target.value)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-email`,
                                  label: "Email",
                                  type: "email",
                                  value: C2.email,
                                  autoComplete: "email",
                                  spellCheck: false,
                                  description: "Used for sign-in and notifications.",
                                  className: e$("email"),
                                  error: eS("email"),
                                  onBlur: () => eC("email"),
                                  onChange: (e3) => ek("email", e3.target.value)
                                }),
                                (0, a.jsx)(k.l, {
                                  label: "Time zone",
                                  value: C2.timezone,
                                  options: z,
                                  onValueChange: (e3) => ek("timezone", e3)
                                })
                              ]
                            })
                          ]
                        }),
                        "notifications" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)(V, {
                              id: `${i2}-email-group`,
                              title: "Email",
                              children: [
                                (0, a.jsx)(K, {
                                  id: `${i2}-mentions`,
                                  label: "Comments and mentions",
                                  description: "Replies to your comments and anyone who mentions you.",
                                  checked: C2.mentions,
                                  onChange: (e3) => ek("mentions", e3)
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-summary`,
                                  label: "Weekly summary",
                                  description: "A Monday recap of what moved in your projects.",
                                  checked: C2.summary,
                                  onChange: (e3) => ek("summary", e3)
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-news`,
                                  label: "Product news",
                                  description: "New features and changes, about once a month.",
                                  checked: C2.news,
                                  onChange: (e3) => ek("news", e3)
                                })
                              ]
                            }),
                            (0, a.jsxs)(V, {
                              id: `${i2}-device-group`,
                              title: "On your devices",
                              children: [
                                (0, a.jsx)(K, {
                                  id: `${i2}-messages`,
                                  label: "Direct messages",
                                  description: "Messages sent to you or to a group you are in.",
                                  checked: C2.messages,
                                  onChange: (e3) => ek("messages", e3)
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-reminders`,
                                  label: "Reminders",
                                  description: "Due dates and meetings, 15 minutes ahead.",
                                  checked: C2.reminders,
                                  onChange: (e3) => ek("reminders", e3)
                                })
                              ]
                            }),
                            (0, a.jsx)(V, {
                              id: `${i2}-quiet-group`,
                              title: "Quiet hours",
                              footer: (0, a.jsx)(G, {
                                show: C2.quiet,
                                className: A().revealField,
                                children: (0, a.jsx)(k.l, {
                                  label: "Pause between",
                                  value: C2.quietHours,
                                  options: I,
                                  onValueChange: (e3) => ek("quietHours", e3)
                                })
                              }),
                              children: (0, a.jsx)(K, {
                                id: `${i2}-quiet`,
                                label: "Pause overnight",
                                description: "Hold notifications and deliver them together in the morning.",
                                checked: C2.quiet,
                                onChange: (e3) => ek("quiet", e3)
                              })
                            })
                          ]
                        }),
                        "security" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)(V, {
                              id: `${i2}-signin-group`,
                              title: "Sign-in",
                              children: [
                                (0, a.jsx)(K, {
                                  id: `${i2}-two-step`,
                                  label: "Two-step verification",
                                  description: "Ask for a code from your authenticator app on new devices.",
                                  checked: C2.twoStep,
                                  onChange: (e3) => ek("twoStep", e3),
                                  children: (0, a.jsxs)(G, {
                                    show: !C2.twoStep,
                                    className: A().warning,
                                    children: [
                                      (0, a.jsx)(b.A, {
                                        size: 14,
                                        strokeWidth: 1.9,
                                        "aria-hidden": "true"
                                      }),
                                      "Anyone with your password could sign in."
                                    ]
                                  })
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-alerts`,
                                  label: "Sign-in alerts",
                                  description: "Email you when a new device signs in.",
                                  checked: C2.alerts,
                                  onChange: (e3) => ek("alerts", e3)
                                })
                              ]
                            }),
                            (0, a.jsx)("div", {
                              className: A().inlineField,
                              children: (0, a.jsx)(k.l, {
                                label: "Sign out idle sessions",
                                value: C2.timeout,
                                options: O,
                                description: "Applies to every device except this one.",
                                onValueChange: (e3) => ek("timeout", e3)
                              })
                            }),
                            (0, a.jsxs)("section", {
                              className: A().group,
                              "aria-labelledby": `${i2}-devices`,
                              children: [
                                (0, a.jsx)("h4", {
                                  id: `${i2}-devices`,
                                  tabIndex: -1,
                                  children: "Where you are signed in"
                                }),
                                (0, a.jsx)("ul", {
                                  className: A().sessions,
                                  children: (0, a.jsx)(l.N, {
                                    initial: false,
                                    children: ej.map((e3) => {
                                      let t3 = e3.icon;
                                      return (0, a.jsx)(
                                        r.PY1.li,
                                        {
                                          className: A().session,
                                          initial: { height: 0, opacity: 0 },
                                          animate: {
                                            height: "auto",
                                            opacity: 1
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: u2 ? { duration: 0 } : {
                                            height: $.T.spring.smooth,
                                            opacity: {
                                              duration: $.T.duration.fast
                                            }
                                          },
                                          children: (0, a.jsxs)("div", {
                                            className: A().sessionInner,
                                            children: [
                                              (0, a.jsx)(t3, {
                                                size: 16,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              }),
                                              (0, a.jsxs)("span", {
                                                className: A().sessionText,
                                                children: [
                                                  (0, a.jsxs)("strong", {
                                                    children: [
                                                      e3.device,
                                                      " \xB7 ",
                                                      e3.app
                                                    ]
                                                  }),
                                                  (0, a.jsxs)("span", {
                                                    children: [
                                                      e3.place,
                                                      " \xB7 ",
                                                      e3.seen
                                                    ]
                                                  })
                                                ]
                                              }),
                                              e3.current ? (0, a.jsx)("span", {
                                                className: A().thisDevice,
                                                children: "This device"
                                              }) : (0, a.jsx)(w.$, {
                                                id: `${i2}-signout-${e3.id}`,
                                                type: "button",
                                                variant: "ghost",
                                                size: "sm",
                                                "aria-label": `Sign out ${e3.device}`,
                                                onClick: () => {
                                                  let t4, a2, s2;
                                                  return a2 = (t4 = ej.filter(
                                                    (e4) => !e4.current
                                                  )).findIndex(
                                                    (i3) => i3.id === e3.id
                                                  ), s2 = t4[a2 + 1] ?? t4[a2 - 1], void (ek(
                                                    "signedOut",
                                                    [
                                                      ...C2.signedOut,
                                                      e3.id
                                                    ]
                                                  ), en(
                                                    `${e3.device} will be signed out when you save`
                                                  ), eP(
                                                    s2 ? `${i2}-signout-${s2.id}` : `${i2}-devices`
                                                  ));
                                                },
                                                children: "Sign out"
                                              })
                                            ]
                                          })
                                        },
                                        e3.id
                                      );
                                    })
                                  })
                                })
                              ]
                            })
                          ]
                        }),
                        "billing" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: A().plan,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: A().planText,
                                  children: [
                                    (0, a.jsx)("strong", {
                                      children: "Team plan"
                                    }),
                                    (0, a.jsxs)("span", {
                                      children: [
                                        "8 seats at\xA0",
                                        (0, a.jsx)("span", {
                                          className: A().inherit,
                                          children: (0, a.jsx)(f.q, {
                                            value: "yearly" === C2.cycle ? 15 : 18,
                                            prefix: "$"
                                          })
                                        }),
                                        "\xA0each"
                                      ]
                                    })
                                  ]
                                }),
                                (0, a.jsxs)("div", {
                                  className: A().price,
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: A().priceValue,
                                      children: (0, a.jsx)(f.q, {
                                        value: ew,
                                        prefix: "$"
                                      })
                                    }),
                                    (0, a.jsx)(S.g, {
                                      className: A().priceUnit,
                                      children: "yearly" === C2.cycle ? "per year" : "per month"
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().cycle,
                              children: [
                                (0, a.jsx)(T.A, {
                                  label: "Billing cycle",
                                  value: C2.cycle,
                                  options: Y,
                                  onValueChange: (e3) => ek("cycle", e3)
                                }),
                                (0, a.jsx)("span", {
                                  className: A().cycleNote,
                                  children: (0, a.jsx)(l.N, {
                                    mode: "popLayout",
                                    initial: false,
                                    children: (0, a.jsx)(
                                      r.PY1.span,
                                      {
                                        ...H,
                                        transition: {
                                          duration: u2 ? 0 : $.T.duration.standard,
                                          ease: D
                                        },
                                        children: "yearly" === C2.cycle ? "You save $288 a year" : "Save $288 a year with yearly billing"
                                      },
                                      C2.cycle
                                    )
                                  })
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().payment,
                              children: [
                                (0, a.jsx)(g.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, a.jsxs)("span", {
                                  children: [
                                    (0, a.jsx)("strong", {
                                      children: "Visa ending in 4242"
                                    }),
                                    (0, a.jsx)("span", {
                                      children: "Expires 08/2028 \xB7 next invoice on October 1"
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().fields,
                              children: [
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-billingEmail`,
                                  label: "Billing email",
                                  type: "email",
                                  value: C2.billingEmail,
                                  autoComplete: "email",
                                  spellCheck: false,
                                  description: "Invoices and receipts are sent here.",
                                  className: e$("billingEmail"),
                                  error: eS("billingEmail"),
                                  onBlur: () => eC("billingEmail"),
                                  onChange: (e3) => ek("billingEmail", e3.target.value)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-company`,
                                  label: "Company name",
                                  value: C2.company,
                                  autoComplete: "organization",
                                  className: e$("company"),
                                  onChange: (e3) => ek("company", e3.target.value)
                                }),
                                (0, a.jsx)(k.l, {
                                  label: "Country",
                                  value: C2.country,
                                  options: F,
                                  onValueChange: (e3) => ek("country", e3)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-vat`,
                                  label: "VAT number",
                                  value: C2.vat,
                                  spellCheck: false,
                                  className: e$("vat"),
                                  onChange: (e3) => ek("vat", e3.target.value)
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    },
                    h2
                  )
                })
              }),
              (0, a.jsx)("div", {
                className: A().dock,
                children: (0, a.jsx)(l.N, {
                  children: eb && (0, a.jsx)(
                    Z,
                    {
                      barRef: ed,
                      state: eb,
                      count: ev,
                      shake: em,
                      onDiscard: function() {
                        "saving" !== W2 && (ei((e3) => ({ tick: e3.tick + 1, keys: e_ })), P2(x2), J([]), ea(""), en(
                          `${ev} ${1 === ev ? "change" : "changes"} discarded`
                        ));
                      },
                      onSave: eE
                    },
                    "bar"
                  )
                })
              }),
              (0, a.jsx)("p", {
                className: A().srOnly,
                role: "status",
                "aria-live": "polite",
                children: es
              })
            ]
          })
        ]
      })
    });
  }
  let X = Q;
}

__m(__module,__exports,__require);
});
A.cssFor("settings-page", [14290,64444,66576]);
A.item("settings-page", {entry:98640, export:"SettingsPage", kind:"block", tier:"pro", unresolved:[]});
})();