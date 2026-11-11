/* agent-run (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(797, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "file-pen",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",
          key: "o6klzx"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      [
        "path",
        {
          d: "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",
          key: "zhnas1"
        }
      ]
    ],
    aliases: ["file-edit"]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(8143, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "list-checks",
    size: 24,
    node: [
      ["path", { d: "M13 5h8", key: "a7qcls" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 19h8", key: "c3s6r1" }],
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
    ]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(25583, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "file-code-corner",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
          key: "1wthlu"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
      ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
    ],
    aliases: ["file-code-2"]
  };
  o.node;
  let l = (0, r.A)(o);
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
A.reg(36455, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var s = a(51811);
  let n = {
    name: "file-diff",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }
      ],
      ["path", { d: "M9 10h6", key: "9gxzsh" }],
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      ["path", { d: "M9 17h6", key: "r8uit2" }]
    ]
  };
  n.node;
  let i = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(55848, ".agent-run_root__JjiAs{--mono:ui-monospace,\"SF Mono\",SFMono-Regular,Menlo,Consolas,monospace;--hover:color-mix(in oklab,var(--foreground) 5%,transparent);--add-tint:color-mix(in oklab,var(--success) 11%,transparent);--del-tint:color-mix(in oklab,var(--danger) 10%,transparent);--brand-claude:#d97757;--brand-npm:#cb3837;--brand-ts:#3178c6;--gutter:24px;position:relative;box-sizing:border-box;width:100%;max-width:720px;min-width:0;margin-inline:auto;overflow:clip;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);container:agent-run/inline-size}.agent-run_root__JjiAs *,.agent-run_root__JjiAs :after,.agent-run_root__JjiAs :before{box-sizing:border-box}.agent-run_srOnly__AqXAP{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.agent-run_header__gYCgV{display:grid;gap:4px;padding:16px 16px 14px var(--gutter);border-bottom:1px solid var(--border)}.agent-run_titleRow__IyQro{display:flex;align-items:center;gap:12px;min-width:0}.agent-run_task__rcJkh{flex:1;min-width:0;margin:0;font-size:var(--text-base);font-weight:500;line-height:1.35;text-wrap:balance}.agent-run_root__JjiAs .agent-run_iconButton__PXZPu{width:var(--control-height-sm);padding:0;color:var(--text-secondary);flex:none}.agent-run_metaRow__pzM_j{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0;padding-right:8px;color:var(--text-secondary)}.agent-run_model__iT0hw{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.agent-run_modelMark__rgw_8{display:inline-flex;flex:none;color:var(--brand-claude)}.agent-run_modelMark__rgw_8 svg{width:14px;height:14px}.agent-run_statusLine__oXTW_{display:inline-flex;flex:none;align-items:center;gap:10px}.agent-run_status__VUTQ1{color:var(--text-secondary)}.agent-run_statusIcon__XLpKq{flex:none}.agent-run_status__VUTQ1[data-status=waiting]{color:var(--foreground)}.agent-run_status__VUTQ1[data-status=waiting] .agent-run_statusIcon__XLpKq{color:var(--warning)}.agent-run_status__VUTQ1[data-status=done] .agent-run_statusIcon__XLpKq{color:var(--success)}.agent-run_status__VUTQ1[data-status=idle] .agent-run_statusIcon__XLpKq,.agent-run_status__VUTQ1[data-status=stopped] .agent-run_statusIcon__XLpKq{color:var(--text-muted)}.agent-run_timer__dBRsk{min-width:4ch;color:var(--text-muted);font-variant-numeric:tabular-nums;text-align:right}.agent-run_swap__zjjHU{position:relative;display:inline-flex;white-space:nowrap}.agent-run_swap__zjjHU[data-sizing]{clip-path:inset(-6px 0 -6px 0)}.agent-run_swapItem__YakLx{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.agent-run_stepsArea__EXE7c{padding:6px 8px}.agent-run_stepsArea__EXE7c:has(.agent-run_steps__TVfHM:empty):not(:has(.agent-run_fold__cxEek)){padding:0}.agent-run_steps__TVfHM{display:grid;margin:0;padding:0;list-style:none}.agent-run_listWrap___vpze,.agent-run_step__3UbO5{overflow:clip}.agent-run_stepHead__YLS0_{--focus-outline-offset:-2px;display:flex;align-items:center;gap:10px;width:100%;min-height:36px;padding:0 12px 0 16px;border:0;border-radius:12px;background:transparent;color:var(--foreground);font:inherit;letter-spacing:inherit;text-align:left;transition:background-color var(--duration-fast) var(--ease-standard)}button.agent-run_stepHead__YLS0_{cursor:pointer}@media (hover:hover) and (pointer:fine){button.agent-run_stepHead__YLS0_:hover{background:var(--hover)}}.agent-run_stepIcon__Kh7mW{display:inline-flex;flex:none;align-items:center;justify-content:center;width:16px;height:16px;color:var(--text-muted);transition:color var(--duration-standard) var(--ease-standard)}.agent-run_step__3UbO5[data-status=running] .agent-run_stepIcon__Kh7mW{color:var(--text-secondary)}.agent-run_step__3UbO5[data-status=waiting] .agent-run_stepIcon__Kh7mW{color:var(--warning)}.agent-run_brandMark__iFVQG{width:14px;height:14px}.agent-run_brandMark__iFVQG[data-brand=npm]{color:var(--brand-npm)}.agent-run_brandMark__iFVQG[data-brand=typescript]{color:var(--brand-ts)}.agent-run_stepLabel__wsraO{flex:1;min-width:0;overflow:hidden;color:var(--foreground);white-space:nowrap;text-overflow:ellipsis;transition:color var(--duration-standard) var(--ease-standard)}.agent-run_step__3UbO5[data-status=done] .agent-run_stepLabel__wsraO,.agent-run_step__3UbO5[data-status=rejected] .agent-run_stepLabel__wsraO{color:var(--text-secondary)}.agent-run_verb__vUFg4{margin-right:.28em;vertical-align:top}.agent-run_verb__vUFg4:last-child{margin-right:0}.agent-run_count__hlyCH{margin-left:.4em;color:var(--text-secondary);font-variant-numeric:tabular-nums}.agent-run_countValue__8Drxe{display:inline-block;text-align:right}.agent-run_stepTime__dli5g{flex:none;min-width:3.5ch;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}.agent-run_stepState___GxZ7{display:inline-flex;flex:none;width:14px;height:14px;color:var(--success)}.agent-run_step__3UbO5[data-status=rejected] .agent-run_stepState___GxZ7{color:var(--text-muted)}.agent-run_chevronSlot__B8kfG{display:inline-flex;flex:none;width:16px;color:var(--text-muted)}.agent-run_chevron__bCXn_{transition:transform var(--duration-standard) var(--ease-standard)}.agent-run_stepHead__YLS0_[aria-expanded=true] .agent-run_chevron__bCXn_{transform:rotate(180deg)}.agent-run_collapse___3Q3z{overflow:clip}.agent-run_stepBody__FsVZ0{padding:2px 12px 12px 42px}.agent-run_details__NR5Wg{display:grid;gap:8px}.agent-run_thought___QsPi{margin:0;color:var(--text-secondary);text-wrap:pretty}.agent-run_io__CTj1w{display:grid;overflow:hidden;border:1px solid var(--border);border-radius:12px;font-family:var(--mono);font-size:12px;line-height:20px;letter-spacing:0}.agent-run_ioInput__IKAl0{display:block;overflow-x:auto;padding:6px 12px;border-bottom:1px solid var(--border);background:var(--surface-muted);color:var(--foreground);white-space:pre}.agent-run_ioOutput__fek2o{display:grid;overflow-x:auto;padding:6px 12px;color:var(--text-secondary)}.agent-run_ioOutput__fek2o code{white-space:pre}.agent-run_fold__cxEek{--focus-outline-offset:-2px;display:flex;align-items:center;gap:10px;width:100%;min-height:40px;padding:0 12px 0 16px;border:0;border-radius:12px;background:transparent;color:var(--text-secondary);font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-run_fold__cxEek:hover{background:var(--hover)}}.agent-run_fold__cxEek>span:first-of-type{flex:1;font-variant-numeric:tabular-nums}.agent-run_fold__cxEek[aria-expanded=true] .agent-run_chevron__bCXn_{transform:rotate(180deg)}.agent-run_changeBody__qXEUd{display:grid;gap:10px}.agent-run_changeSummary__nRV8z{margin:0;color:var(--text-secondary);text-wrap:pretty}.agent-run_diffCard__ADpXz{overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.agent-run_fileTabs__yPGvt{display:flex;gap:2px;overflow-x:auto;padding:6px;border-bottom:1px solid var(--border);scrollbar-width:none}.agent-run_fileTabs__yPGvt::-webkit-scrollbar{display:none}.agent-run_fileTab__ztCXJ{--focus-outline-offset:-2px;display:inline-flex;flex:none;align-items:center;gap:8px;min-height:30px;padding:0 10px;border:0;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;letter-spacing:inherit;white-space:nowrap;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-run_fileTab__ztCXJ:hover{color:var(--foreground)}}.agent-run_fileTab__ztCXJ[aria-selected=true]{background:var(--surface-muted);color:var(--foreground)}.agent-run_fileName__PSf8l{font-family:var(--mono);font-size:12px;letter-spacing:0}.agent-run_diffCount__Ywh0V{display:inline-flex;gap:6px;font-size:var(--text-xs);font-variant-numeric:tabular-nums}.agent-run_add__92va7{color:var(--success)}.agent-run_del__3J2my{color:var(--danger)}.agent-run_panels__SB_GG{display:grid}.agent-run_panel__EK0Mv{--focus-outline-offset:-2px;grid-area:1/1;min-width:0;overflow-x:auto;opacity:0;visibility:hidden;transition:opacity .1s var(--ease-standard),visibility 0s linear .1s}.agent-run_panel__EK0Mv[data-active]{opacity:1;visibility:visible;transition:opacity var(--duration-fast) var(--ease-enter),visibility 0s}.agent-run_code__NrGvo{display:grid;align-content:start;width:max-content;min-width:100%;padding:6px 0;font-family:var(--mono);font-size:12px;line-height:20px;letter-spacing:0}.agent-run_line__VJems{display:grid;grid-template-columns:3.4em 1.6em auto;padding-right:16px}.agent-run_line__VJems[data-type=add]{background:var(--add-tint)}.agent-run_line__VJems[data-type=del]{background:var(--del-tint)}.agent-run_num__1ALBS{padding-right:8px;color:var(--text-muted);font-variant-numeric:tabular-nums;text-align:right;user-select:none}.agent-run_marker__7HyrP{color:var(--text-muted);text-align:center;user-select:none}.agent-run_line__VJems[data-type=add] .agent-run_marker__7HyrP{color:var(--success)}.agent-run_line__VJems[data-type=del] .agent-run_marker__7HyrP{color:var(--danger)}.agent-run_src__tRXsd{color:var(--foreground);white-space:pre}.agent-run_line__VJems[data-type=ctx] .agent-run_src__tRXsd{color:var(--text-secondary)}.agent-run_autoHeight__vsH5P{overflow:clip}.agent-run_decideStage__ge1Yf{position:relative;border-top:1px solid var(--border)}.agent-run_decide__Hk55P{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;padding:10px 10px 10px 14px}.agent-run_decideNote___NOKh{margin:0;color:var(--text-muted)}.agent-run_decideActions__yREOu{display:flex;gap:8px;margin-left:auto}.agent-run_reasonForm__Brkmd{display:grid;gap:10px;padding:12px 10px 10px 14px}.agent-run_root__JjiAs .agent-run_accentButton__sP1iV{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.agent-run_verdict__KmabZ{display:inline-flex;align-items:center;gap:6px;margin:0;color:var(--text-secondary)}.agent-run_verdict__KmabZ svg{flex:none}.agent-run_verdict__KmabZ[data-tone=approved] svg{color:var(--success)}.agent-run_target__K_bct q,.agent-run_verdict__KmabZ q{quotes:\"“\" \"”\"}.agent-run_result__eYDn9{display:grid;gap:16px;padding:16px var(--gutter) 20px;border-top:1px solid var(--border)}.agent-run_summary__yaXn4{margin:0;color:var(--foreground);text-wrap:pretty}.agent-run_chunk__SX9uU{opacity:0}.agent-run_chunk__SX9uU[data-shown]{opacity:1;transition:opacity .15s var(--ease-enter)}.agent-run_files__CnmCE{display:grid;gap:8px}.agent-run_filesHead___F4vx{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0;color:var(--text-secondary)}.agent-run_fileList__kpwOz{display:grid;margin:0;padding:0;border:1px solid var(--border);border-radius:14px;list-style:none}.agent-run_fileRow__xvHBk{display:flex;align-items:center;gap:10px;min-height:40px;padding:0 14px}.agent-run_fileRow__xvHBk+.agent-run_fileRow__xvHBk{border-top:1px solid var(--border)}.agent-run_fileIcon__4jRZt{flex:none;color:var(--text-muted)}.agent-run_filePath__nIb8B{flex:1;min-width:0;overflow:hidden;font-family:var(--mono);font-size:12px;letter-spacing:0;white-space:nowrap;text-overflow:ellipsis}.agent-run_diffBar__ht02a{display:inline-flex;flex:none;gap:2px}.agent-run_diffBar__ht02a>span{width:8px;height:8px;border-radius:2px;background:var(--border)}.agent-run_diffBar__ht02a>span[data-kind=add]{background:var(--success)}.agent-run_diffBar__ht02a>span[data-kind=del]{background:var(--danger)}.agent-run_checks__GNFtf{display:flex;flex-wrap:wrap;gap:6px 20px;margin:0;padding:0;color:var(--text-secondary);list-style:none}.agent-run_checks__GNFtf li{display:inline-flex;align-items:center;gap:6px}.agent-run_checks__GNFtf svg{flex:none;color:var(--success)}.agent-run_resultActions__u6l1N{display:flex;flex-wrap:wrap;gap:8px}.agent-run_root__JjiAs .agent-run_prButton__BDzb6{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.agent-run_root__JjiAs .agent-run_prButton__BDzb6[data-pr=opened]{border-color:var(--border);background:var(--surface);color:var(--foreground);box-shadow:none;opacity:1;cursor:default}.agent-run_labelStack__PT9Io{display:inline-grid}.agent-run_labelStack__PT9Io>span{display:inline-flex;grid-area:1/1;align-items:center;justify-content:center;gap:8px;opacity:0;transition:opacity .1s var(--ease-standard)}.agent-run_labelStack__PT9Io>span[data-on]{opacity:1;transition:opacity var(--duration-fast) var(--ease-enter)}.agent-run_ghMark__ljDBA{width:16px;height:16px;flex:none}.agent-run_spin__wPL_C{animation:agent-run_agent-run-spin__t_8zV 1s linear infinite}@keyframes agent-run_agent-run-spin__t_8zV{to{transform:rotate(1turn)}}@media (prefers-reduced-motion:reduce){.agent-run_chevron__bCXn_,.agent-run_chunk__SX9uU[data-shown],.agent-run_labelStack__PT9Io>span,.agent-run_panel__EK0Mv,.agent-run_panel__EK0Mv[data-active],.agent-run_stepIcon__Kh7mW,.agent-run_stepLabel__wsraO{transition:none}}@media (prefers-reduced-motion:reduce){.agent-run_spin__wPL_C{animation-duration:3s}}.agent-run_ready__52j42{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;padding:6px 8px 6px 16px;color:var(--text-secondary)}.agent-run_ready__52j42 p{margin:0}", {"root":"agent-run_root__JjiAs","srOnly":"agent-run_srOnly__AqXAP","header":"agent-run_header__gYCgV","titleRow":"agent-run_titleRow__IyQro","task":"agent-run_task__rcJkh","iconButton":"agent-run_iconButton__PXZPu","metaRow":"agent-run_metaRow__pzM_j","model":"agent-run_model__iT0hw","modelMark":"agent-run_modelMark__rgw_8","statusLine":"agent-run_statusLine__oXTW_","status":"agent-run_status__VUTQ1","statusIcon":"agent-run_statusIcon__XLpKq","timer":"agent-run_timer__dBRsk","swap":"agent-run_swap__zjjHU","swapItem":"agent-run_swapItem__YakLx","stepsArea":"agent-run_stepsArea__EXE7c","steps":"agent-run_steps__TVfHM","fold":"agent-run_fold__cxEek","listWrap":"agent-run_listWrap___vpze","step":"agent-run_step__3UbO5","stepHead":"agent-run_stepHead__YLS0_","stepIcon":"agent-run_stepIcon__Kh7mW","brandMark":"agent-run_brandMark__iFVQG","stepLabel":"agent-run_stepLabel__wsraO","verb":"agent-run_verb__vUFg4","count":"agent-run_count__hlyCH","countValue":"agent-run_countValue__8Drxe","stepTime":"agent-run_stepTime__dli5g","stepState":"agent-run_stepState___GxZ7","chevronSlot":"agent-run_chevronSlot__B8kfG","chevron":"agent-run_chevron__bCXn_","collapse":"agent-run_collapse___3Q3z","stepBody":"agent-run_stepBody__FsVZ0","details":"agent-run_details__NR5Wg","thought":"agent-run_thought___QsPi","io":"agent-run_io__CTj1w","ioInput":"agent-run_ioInput__IKAl0","ioOutput":"agent-run_ioOutput__fek2o","changeBody":"agent-run_changeBody__qXEUd","changeSummary":"agent-run_changeSummary__nRV8z","diffCard":"agent-run_diffCard__ADpXz","fileTabs":"agent-run_fileTabs__yPGvt","fileTab":"agent-run_fileTab__ztCXJ","fileName":"agent-run_fileName__PSf8l","diffCount":"agent-run_diffCount__Ywh0V","add":"agent-run_add__92va7","del":"agent-run_del__3J2my","panels":"agent-run_panels__SB_GG","panel":"agent-run_panel__EK0Mv","code":"agent-run_code__NrGvo","line":"agent-run_line__VJems","num":"agent-run_num__1ALBS","marker":"agent-run_marker__7HyrP","src":"agent-run_src__tRXsd","autoHeight":"agent-run_autoHeight__vsH5P","decideStage":"agent-run_decideStage__ge1Yf","decide":"agent-run_decide__Hk55P","decideNote":"agent-run_decideNote___NOKh","decideActions":"agent-run_decideActions__yREOu","reasonForm":"agent-run_reasonForm__Brkmd","accentButton":"agent-run_accentButton__sP1iV","verdict":"agent-run_verdict__KmabZ","target":"agent-run_target__K_bct","result":"agent-run_result__eYDn9","summary":"agent-run_summary__yaXn4","chunk":"agent-run_chunk__SX9uU","files":"agent-run_files__CnmCE","filesHead":"agent-run_filesHead___F4vx","fileList":"agent-run_fileList__kpwOz","fileRow":"agent-run_fileRow__xvHBk","fileIcon":"agent-run_fileIcon__4jRZt","filePath":"agent-run_filePath__nIb8B","diffBar":"agent-run_diffBar__ht02a","checks":"agent-run_checks__GNFtf","resultActions":"agent-run_resultActions__u6l1N","prButton":"agent-run_prButton__BDzb6","labelStack":"agent-run_labelStack__PT9Io","ghMark":"agent-run_ghMark__ljDBA","spin":"agent-run_spin__wPL_C","agent-run-spin":"agent-run_agent-run-spin__t_8zV","ready":"agent-run_ready__52j42"});
A.reg(66958, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var s = a(51811);
  let i = {
    name: "corner-up-left",
    size: 24,
    node: [
      ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(67401, function(__module,__exports,__require){
"use strict";
function __m(e, s, n) {
  "use strict";
  n.d(s, { A: () => i });
  var t = n(51811);
  let a = {
    name: "circle",
    size: 24,
    node: [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]
  };
  a.node;
  let i = (0, t.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(79530, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var n = r(51811);
  let o = {
    name: "circle-minus",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }]
    ],
    aliases: ["minus-circle"]
  };
  o.node;
  let a = (0, n.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(91906, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "hand",
    size: 24,
    node: [
      ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
      ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
      [
        "path",
        { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }
      ],
      [
        "path",
        {
          d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
          key: "1s1gnw"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(94179, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "square-terminal",
    size: 24,
    node: [
      ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
      ["path", { d: "M11 13h4", key: "1p7l4v" }],
      [
        "rect",
        {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
          key: "1m3agn"
        }
      ]
    ],
    aliases: ["terminal-square"]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(95345, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  let s, i;
  a.r(t), a.d(t, {
    AgentRun: () => eA,
    default: () => eR,
    sampleScript: () => T,
    useSimulatedRun: () => ej
  });
  var n = a(95155), r = a(12115), l = a(61792), d = a(25354), o = a(80642), c = a(92571), u = a(91906), p = a(64962), h = a(79530), m = a(67401), g = a(92298), f = a(8143), x = a(12363), _ = a(36619), y = a(51288), j = a(52898), v = a(36690);
  function b({ title: e2 = "GitHub", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      })
    });
  }
  function k({ title: e2 = "npm", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
      })
    });
  }
  function w({ title: e2 = "TypeScript", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
      })
    });
  }
  let N = (e2, t2) => ({
    path: "src/middleware/rate-limit.ts",
    status: "added",
    lines: [
      'import type { RequestHandler } from "express";',
      'import { redis } from "../lib/redis";',
      "",
      "const WINDOW = 60; // seconds",
      `const LIMIT = ${e2};`,
      "",
      "export const rateLimit: RequestHandler = async (req, res, next) => {",
      ...t2 ? ['  if (req.path === "/health") return next();'] : [],
      "  const key = `rate:${req.apiKey ?? req.ip}`;",
      "  const count = await redis.incr(key);",
      "  if (count === 1) await redis.expire(key, WINDOW);",
      '  res.set("RateLimit-Remaining", String(Math.max(0, LIMIT - count)));',
      "  if (count <= LIMIT) return next();",
      '  res.set("Retry-After", String(WINDOW));',
      '  res.status(429).json({ error: "Too many requests" });',
      "};"
    ].map((e3, t3) => ({ type: "add", new: t3 + 1, text: e3 }))
  }), A = (s = 1, i = 1, {
    path: "src/api/routes.ts",
    status: "modified",
    lines: [
      '  import { Router } from "express";',
      '  import { requireApiKey } from "../middleware/auth";',
      '+ import { rateLimit } from "../middleware/rate-limit";',
      '  import { orders } from "./orders";',
      '  import { products } from "./products";',
      "  ",
      "  export const api = Router();",
      "  ",
      "- api.use(requireApiKey);",
      "+ api.use(requireApiKey, rateLimit);",
      '  api.use("/orders", orders);',
      '  api.use("/products", products);'
    ].map((e2) => {
      let t2 = e2.slice(2);
      return e2.startsWith("+") ? { type: "add", new: i++, text: t2 } : e2.startsWith("-") ? { type: "del", old: s++, text: t2 } : { type: "ctx", old: s++, new: i++, text: t2 };
    })
  }), R = {
    id: "rate-limit",
    summary: "Add a Redis rate limiter, 60 requests a minute per API key, and put it in front of every API route.",
    files: [N("60", false), A],
    outcome: "Every /api route now goes through a Redis rate limiter: 60 requests a minute per API key, falling back to the IP. Responses carry RateLimit-Remaining, and a client over the limit gets a 429 with Retry-After. Types check and all 12 API tests pass."
  }, T = {
    steps: [
      {
        id: "plan",
        mark: "think",
        verb: "Planning the change",
        doneVerb: "Planned the change",
        ms: 1200,
        text: "The public API has no rate limiting yet. I'll check how the routes are mounted, look for existing middleware, and see whether Redis is available so a limit holds across every instance."
      },
      {
        id: "routes",
        mark: "read",
        verb: "Reading",
        doneVerb: "Read",
        target: "src/api/routes.ts",
        ms: 900,
        io: {
          input: "read_file src/api/routes.ts",
          output: [
            'import { Router } from "express";',
            "\u2026",
            "export const api = Router();",
            "api.use(requireApiKey);",
            'api.use("/orders", orders);'
          ]
        }
      },
      {
        id: "search",
        mark: "search",
        verb: "Searching for",
        doneVerb: "Searched for",
        target: "rate limit middleware",
        ms: 1e3,
        io: {
          input: 'grep -rni "rate.\\?limit" src',
          output: ["No matches"]
        }
      },
      {
        id: "package",
        mark: "read",
        verb: "Reading",
        doneVerb: "Read",
        target: "package.json",
        ms: 700,
        io: {
          input: "read_file package.json",
          output: [
            '"express": "^5.1.0",',
            '"ioredis": "^5.4.1",',
            '"zod": "^4.1.5"'
          ]
        }
      },
      {
        id: "redis",
        mark: "read",
        verb: "Reading",
        doneVerb: "Read",
        target: "src/lib/redis.ts",
        ms: 700,
        io: {
          input: "read_file src/lib/redis.ts",
          output: [
            'import Redis from "ioredis";',
            "export const redis = new Redis(process.env.REDIS_URL!);"
          ]
        }
      },
      {
        id: "auth",
        mark: "search",
        verb: "Searching for",
        doneVerb: "Searched for",
        target: "the API key on requests",
        ms: 900,
        io: {
          input: 'grep -rn "req.apiKey" src',
          output: [
            "src/middleware/auth.ts:14:  req.apiKey = key.id;",
            "src/types/express.d.ts:6:    apiKey?: string;"
          ]
        }
      },
      {
        id: "review",
        mark: "review",
        verb: "Preparing",
        target: "changes",
        doneVerb: "Approved",
        doneTarget: "changes to 2 files",
        ms: 800,
        change: R,
        revise: {
          steps: [
            {
              id: "revise",
              mark: "think",
              verb: "Revising the change",
              doneVerb: "Revised the change",
              ms: 1300,
              text: "Taking the note on board: the limit should be easy to change per environment, and load balancer health checks should never be limited."
            }
          ],
          approval: {
            id: "review-2",
            mark: "review",
            verb: "Preparing",
            target: "revised changes",
            doneVerb: "Approved",
            doneTarget: "revised changes to 2 files",
            ms: 700,
            change: {
              id: "rate-limit-revised",
              summary: "Read the limit from RATE_LIMIT with a default of 120 a minute, and let health checks through.",
              files: [N("Number(process.env.RATE_LIMIT ?? 120)", true), A],
              outcome: "Every /api route except /health now goes through a Redis rate limiter: 120 requests a minute per API key by default, set with RATE_LIMIT. Responses carry RateLimit-Remaining, and a client over the limit gets a 429 with Retry-After. Types check and all 12 API tests pass."
            }
          }
        }
      },
      {
        id: "write",
        mark: "edit",
        verb: "Writing",
        doneVerb: "Wrote",
        target: "src/middleware/rate-limit.ts",
        ms: 900,
        io: {
          input: "write_file src/middleware/rate-limit.ts",
          output: ["Created the file"]
        }
      },
      {
        id: "wire",
        mark: "edit",
        verb: "Editing",
        doneVerb: "Edited",
        target: "src/api/routes.ts",
        ms: 700,
        io: {
          input: "edit_file src/api/routes.ts",
          output: ["Applied 1 hunk, +2 \u22121"]
        }
      },
      {
        id: "types",
        mark: "typescript",
        verb: "Checking types",
        doneVerb: "Checked types",
        doneTarget: "no errors",
        ms: 1100,
        io: { input: "$ npx tsc --noEmit", output: ["Found 0 errors."] }
      },
      {
        id: "tests",
        mark: "npm",
        verb: "Running tests",
        doneVerb: "Ran tests",
        doneTarget: "12 passed",
        ms: 2600,
        total: 12,
        io: {
          input: "$ npm test -- src/api",
          output: [
            "\u2713 orders \u203A lists orders for the key's account",
            "\u2713 products \u203A paginates with a cursor",
            "\u2713 rate-limit \u203A allows requests under the limit",
            "\u2713 rate-limit \u203A returns 429 with Retry-After",
            "Tests  12 passed (12)"
          ]
        }
      },
      {
        id: "summary",
        mark: "think",
        verb: "Writing the summary",
        doneVerb: "Wrote the summary",
        ms: 700,
        text: "The limiter is in, types check and the API suite passes, including two new rate limit tests."
      }
    ],
    result: {
      summary: R.outcome ?? "",
      tests: { passed: 12, total: 12 },
      checks: ["No type errors"]
    },
    pullRequest: { number: 482 }
  };
  var z = a(18310), S = a(92171), M = a(7770), $ = a(55848), C = a.n($);
  let { spring: I, duration: L } = M.T, P = [...M.T.ease.enter], B = { type: "spring", visualDuration: 0.22, bounce: 0 };
  function E() {
    let e2 = !!(0, z.I)();
    return { reduce: e2, height: e2 ? { duration: 0 } : I.smooth };
  }
  function W({ swapKey: e2, children: t2, className: a2 }) {
    let { reduce: s2 } = E(), i2 = (0, r.useRef)(null), l2 = (0, r.useRef)(0);
    return (0, r.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3) return;
      let t3 = !!e3.style.width, a3 = e3.getBoundingClientRect().width;
      e3.style.width = "";
      let n2 = e3.getBoundingClientRect().width, r2 = t3 ? a3 : l2.current;
      if (l2.current = n2, s2 || !r2 || 0.5 > Math.abs(r2 - n2))
        return void delete e3.dataset.sizing;
      e3.dataset.sizing = "";
      let d2 = (0, S.i)(
        e3,
        { width: [r2, n2] },
        {
          ...B,
          onComplete: () => {
            e3.style.width = "", delete e3.dataset.sizing;
          }
        }
      );
      return () => d2.stop();
    }, [e2, s2]), (0, r.useEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        e3.style.width || (l2.current = e3.getBoundingClientRect().width);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.jsx)("span", {
      ref: i2,
      className: [C().swap, a2].filter(Boolean).join(" "),
      children: (0, n.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          d.PY1.span,
          {
            className: C().swapItem,
            initial: s2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: 0.1 * !s2 } },
            transition: { duration: s2 ? 0 : L.fast, ease: P },
            children: t2
          },
          e2
        )
      })
    });
  }
  function q({ open: e2, children: t2, id: a2, className: s2, label: i2 }) {
    let { reduce: r2, height: l2 } = E();
    return (0, n.jsx)(o.N, {
      initial: false,
      children: e2 && (0, n.jsx)(
        d.PY1.div,
        {
          id: a2,
          role: i2 ? "region" : void 0,
          "aria-label": i2,
          className: [C().collapse, s2].filter(Boolean).join(" "),
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: {
            height: 0,
            opacity: 0,
            transition: { height: l2, opacity: { duration: 0.1 * !r2 } }
          },
          transition: {
            height: l2,
            opacity: { duration: r2 ? 0 : L.fast, ease: P }
          },
          children: t2
        },
        "open"
      )
    });
  }
  function V({ children: e2, className: t2 }) {
    let { height: a2 } = E(), s2 = (0, r.useRef)(null), [i2, l2] = (0, r.useState)("auto");
    return (0, r.useLayoutEffect)(() => {
      let e3 = s2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => l2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.jsx)(d.PY1.div, {
      className: C().autoHeight,
      initial: false,
      animate: { height: i2 },
      transition: a2,
      children: (0, n.jsx)("div", { ref: s2, className: t2, children: e2 })
    });
  }
  function O({ size: e2 = 14, className: t2 }) {
    let { reduce: a2 } = E();
    return (0, n.jsx)("svg", {
      className: t2,
      width: e2,
      height: e2,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.25,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, n.jsx)(d.PY1.path, {
        d: "M4.5 12.5l5 5L19.5 7",
        initial: !a2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.2, ease: P }
      })
    });
  }
  var H = a(25583), F = a(9005), K = a(64577), D = a(35978);
  function Y({ additions: e2, deletions: t2 }) {
    return (0, n.jsxs)("span", {
      className: C().diffCount,
      children: [
        (0, n.jsxs)("span", {
          className: C().add,
          children: [
            (0, n.jsxs)("span", {
              className: C().srOnly,
              children: [e2, " added"]
            }),
            (0, n.jsxs)("span", { "aria-hidden": "true", children: ["+", e2] })
          ]
        }),
        t2 > 0 && (0, n.jsxs)("span", {
          className: C().del,
          children: [
            (0, n.jsxs)("span", {
              className: C().srOnly,
              children: [", ", t2, " removed"]
            }),
            (0, n.jsxs)("span", {
              "aria-hidden": "true",
              children: ["\u2212", t2]
            })
          ]
        })
      ]
    });
  }
  function X({ change: e2 }) {
    let t2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), [a2, s2] = (0, r.useState)(0), i2 = (0, r.useRef)([]), l2 = e2.files, d2 = (e3) => {
      let t3 = l2.length - 1, n2 = "ArrowRight" === e3.key ? a2 === t3 ? 0 : a2 + 1 : "ArrowLeft" === e3.key ? 0 === a2 ? t3 : a2 - 1 : "Home" === e3.key ? 0 : "End" === e3.key ? t3 : -1;
      n2 < 0 || (e3.preventDefault(), s2(n2), i2.current[n2]?.focus());
    };
    return (0, n.jsxs)("div", {
      className: C().diff,
      children: [
        (0, n.jsx)("div", {
          className: C().fileTabs,
          role: "tablist",
          "aria-label": "Changed files",
          children: l2.map((e3, r2) => {
            let l3;
            return (0, n.jsxs)(
              "button",
              {
                ref: (e4) => {
                  i2.current[r2] = e4;
                },
                type: "button",
                role: "tab",
                id: `${t2}-tab-${r2}`,
                className: C().fileTab,
                "aria-selected": r2 === a2,
                "aria-controls": `${t2}-panel-${r2}`,
                tabIndex: r2 === a2 ? 0 : -1,
                title: e3.path,
                onClick: () => s2(r2),
                onKeyDown: d2,
                children: [
                  (0, n.jsx)("span", {
                    className: C().fileName,
                    children: (l3 = e3.path).split("/").pop() ?? l3
                  }),
                  (0, n.jsx)(Y, {
                    ...{
                      additions: e3.lines.filter((e4) => "add" === e4.type).length,
                      deletions: e3.lines.filter((e4) => "del" === e4.type).length
                    }
                  })
                ]
              },
              e3.path
            );
          })
        }),
        (0, n.jsx)("div", {
          className: C().panels,
          children: l2.map(
            (e3, s3) => (0, n.jsx)(
              "div",
              {
                role: "tabpanel",
                id: `${t2}-panel-${s3}`,
                "aria-labelledby": `${t2}-tab-${s3}`,
                "aria-label": e3.path,
                className: C().panel,
                "data-active": s3 === a2 || void 0,
                inert: s3 !== a2,
                tabIndex: s3 === a2 ? 0 : -1,
                children: (0, n.jsx)("div", {
                  className: C().code,
                  children: e3.lines.map(
                    (e4, t3) => (0, n.jsxs)(
                      "div",
                      {
                        className: C().line,
                        "data-type": e4.type,
                        children: [
                          (0, n.jsx)("span", {
                            className: C().num,
                            "aria-hidden": "true",
                            children: "del" === e4.type ? e4.old : e4.new
                          }),
                          (0, n.jsx)("span", {
                            className: C().marker,
                            "aria-hidden": "true",
                            children: "add" === e4.type ? "+" : "del" === e4.type ? "\u2212" : ""
                          }),
                          (0, n.jsxs)("code", {
                            className: C().src,
                            children: [
                              "ctx" !== e4.type && (0, n.jsx)("span", {
                                className: C().srOnly,
                                children: "add" === e4.type ? "Added: " : "Removed: "
                              }),
                              e4.text || " "
                            ]
                          })
                        ]
                      },
                      t3
                    )
                  )
                })
              },
              e3.path
            )
          )
        })
      ]
    });
  }
  function G({ change: e2, rejected: t2, reason: a2 }) {
    return (0, n.jsxs)("div", {
      className: C().changeBody,
      children: [
        (0, n.jsx)("p", { className: C().changeSummary, children: e2.summary }),
        (0, n.jsx)("div", {
          className: C().diffCard,
          children: (0, n.jsx)(X, { change: e2 })
        }),
        (0, n.jsxs)("p", {
          className: C().verdict,
          "data-tone": t2 ? "rejected" : "approved",
          children: [
            t2 ? (0, n.jsx)(F.A, {
              size: 14,
              strokeWidth: 2,
              "aria-hidden": "true"
            }) : (0, n.jsx)(K.A, {
              size: 14,
              strokeWidth: 2,
              "aria-hidden": "true"
            }),
            t2 ? (0, n.jsxs)(n.Fragment, {
              children: [
                "Sent back",
                a2 ? (0, n.jsxs)(n.Fragment, {
                  children: [": ", (0, n.jsx)("q", { children: a2 })]
                }) : null
              ]
            }) : "Approved by you"
          ]
        })
      ]
    });
  }
  function Z({ change: e2, onApprove: t2, onReject: a2 }) {
    let { reduce: s2 } = E(), [i2, l2] = (0, r.useState)("ask"), [c2, u2] = (0, r.useState)(""), p2 = (0, r.useRef)(null), h2 = (0, r.useRef)(null), m2 = (0, r.useRef)(false);
    (0, r.useEffect)(() => {
      "reason" === i2 ? p2.current?.focus({ preventScroll: true }) : m2.current && (m2.current = false, h2.current?.focus({ preventScroll: true }));
    }, [i2]);
    let g2 = () => {
      m2.current = true, l2("ask");
    }, f2 = {
      initial: s2 ? { opacity: 0 } : { opacity: 0, y: 2 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, transition: { duration: 0.1 * !s2 } },
      transition: { duration: 0.16 * !s2, ease: P }
    };
    return (0, n.jsxs)("div", {
      className: C().changeBody,
      children: [
        (0, n.jsx)("p", { className: C().changeSummary, children: e2.summary }),
        (0, n.jsxs)("div", {
          className: C().diffCard,
          children: [
            (0, n.jsx)(X, { change: e2 }),
            (0, n.jsx)(V, {
              className: C().decideStage,
              children: (0, n.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: "ask" === i2 ? (0, n.jsxs)(
                  d.PY1.div,
                  {
                    className: C().decide,
                    ...f2,
                    children: [
                      (0, n.jsx)("p", {
                        className: C().decideNote,
                        children: "Nothing is written until you approve."
                      }),
                      (0, n.jsxs)("div", {
                        className: C().decideActions,
                        children: [
                          (0, n.jsx)(y.$, {
                            ref: h2,
                            variant: "secondary",
                            size: "sm",
                            onClick: () => l2("reason"),
                            children: "Reject"
                          }),
                          (0, n.jsx)(y.$, {
                            size: "sm",
                            className: C().accentButton,
                            onClick: t2,
                            children: "Approve"
                          })
                        ]
                      })
                    ]
                  },
                  "ask"
                ) : (0, n.jsxs)(
                  d.PY1.form,
                  {
                    className: C().reasonForm,
                    onSubmit: (e3) => {
                      e3.preventDefault();
                      let t3 = c2.trim();
                      t3 && a2(t3);
                    },
                    ...f2,
                    onKeyDown: (e3) => {
                      "Escape" === e3.key && (e3.preventDefault(), g2());
                    },
                    children: [
                      (0, n.jsx)(D.p, {
                        ref: p2,
                        label: "What should change?",
                        placeholder: "For example, make the limit configurable",
                        value: c2,
                        onChange: (e3) => u2(e3.target.value),
                        autoComplete: "off"
                      }),
                      (0, n.jsxs)("div", {
                        className: C().decideActions,
                        children: [
                          (0, n.jsx)(y.$, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: g2,
                            children: "Cancel"
                          }),
                          (0, n.jsx)(y.$, {
                            type: "submit",
                            size: "sm",
                            className: C().accentButton,
                            disabled: !c2.trim(),
                            children: "Send back"
                          })
                        ]
                      })
                    ]
                  },
                  "reason"
                )
              })
            })
          ]
        })
      ]
    });
  }
  let U = [4, 6, 3, 5, 7, 4, 5];
  function J({ text: e2, className: t2 }) {
    let { reduce: a2 } = E(), s2 = (0, r.useMemo)(
      () => (function(e3) {
        let t3 = e3.split(" "), a3 = [];
        for (let e4 = 0, s3 = 0; e4 < t3.length; s3++) {
          let i3 = U[s3 % U.length];
          a3.push(
            t3.slice(e4, e4 + i3).join(" ") + (e4 + i3 < t3.length ? " " : "")
          ), e4 += i3;
        }
        return a3;
      })(e2),
      [e2]
    ), [i2, l2] = (0, r.useState)(a2 ? s2.length : 0);
    return (0, r.useEffect)(() => {
      if (a2) return;
      let e3 = 0, t3 = 0, i3 = (a3) => {
        t3 || (t3 = a3);
        let n2 = Math.min(s2.length, 1 + Math.floor((a3 - t3) / 34));
        l2(n2), n2 < s2.length && (e3 = requestAnimationFrame(i3));
      };
      return e3 = requestAnimationFrame(i3), () => cancelAnimationFrame(e3);
    }, [s2, a2]), (0, n.jsx)("p", {
      className: t2,
      children: s2.map(
        (e3, t3) => (0, n.jsx)(
          "span",
          {
            className: C().chunk,
            "data-shown": a2 || t3 < i2 || void 0,
            children: e3
          },
          t3
        )
      )
    });
  }
  function Q({ additions: e2, deletions: t2 }) {
    let a2 = e2 + t2 || 1, s2 = Math.round(5 * e2 / a2), i2 = Math.min(5 - s2, Math.round(5 * t2 / a2));
    return (0, n.jsx)("span", {
      className: C().diffBar,
      "aria-hidden": "true",
      children: Array.from(
        { length: 5 },
        (e3, t3) => (0, n.jsx)(
          "span",
          { "data-kind": t3 < s2 ? "add" : t3 < s2 + i2 ? "del" : void 0 },
          t3
        )
      )
    });
  }
  function ee({ state: e2, number: t2 }) {
    return (0, n.jsxs)("span", {
      className: C().labelStack,
      children: [
        (0, n.jsxs)("span", {
          "data-on": "idle" === e2 || void 0,
          "aria-hidden": "idle" !== e2 || void 0,
          children: [
            (0, n.jsx)(b, { className: C().ghMark, "aria-hidden": "true" }),
            "Open pull request"
          ]
        }),
        (0, n.jsxs)("span", {
          "data-on": "opening" === e2 || void 0,
          "aria-hidden": "opening" !== e2 || void 0,
          children: [
            (0, n.jsx)(c.A, {
              className: C().spin,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            "Opening"
          ]
        }),
        (0, n.jsxs)("span", {
          "data-on": "opened" === e2 || void 0,
          "aria-hidden": "opened" !== e2 || void 0,
          children: [
            (0, n.jsx)(b, { className: C().ghMark, "aria-hidden": "true" }),
            "PR #",
            t2 ?? "",
            " opened"
          ]
        })
      ]
    });
  }
  function et({ result: e2, pr: t2, prNumber: a2, onOpenPr: s2 }) {
    let i2 = e2.files.reduce((e3, t3) => e3 + t3.additions, 0), r2 = e2.files.reduce((e3, t3) => e3 + t3.deletions, 0), l2 = e2.files.length;
    return (0, n.jsxs)("div", {
      className: C().result,
      children: [
        (0, n.jsx)(J, { className: C().summary, text: e2.summary }),
        l2 > 0 && (0, n.jsxs)("div", {
          className: C().files,
          children: [
            (0, n.jsxs)("p", {
              className: C().filesHead,
              children: [
                (0, n.jsxs)("span", {
                  children: [l2, " ", 1 === l2 ? "file" : "files", " changed"]
                }),
                (0, n.jsx)(Y, { additions: i2, deletions: r2 })
              ]
            }),
            (0, n.jsx)("ul", {
              className: C().fileList,
              "aria-label": "Files changed",
              children: e2.files.map(
                (e3) => (0, n.jsxs)(
                  "li",
                  {
                    className: C().fileRow,
                    children: [
                      (0, n.jsx)(H.A, {
                        className: C().fileIcon,
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, n.jsx)("span", {
                        className: C().filePath,
                        title: e3.path,
                        children: e3.path
                      }),
                      (0, n.jsx)(Y, {
                        additions: e3.additions,
                        deletions: e3.deletions
                      }),
                      (0, n.jsx)(Q, {
                        additions: e3.additions,
                        deletions: e3.deletions
                      })
                    ]
                  },
                  e3.path
                )
              )
            })
          ]
        }),
        (e2.tests || e2.checks?.length) && (0, n.jsxs)("ul", {
          className: C().checks,
          "aria-label": "Checks",
          children: [
            e2.tests && (0, n.jsxs)("li", {
              children: [
                (0, n.jsx)(p.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                e2.tests.passed,
                " of ",
                e2.tests.total,
                " tests passed"
              ]
            }),
            e2.checks?.map(
              (e3) => (0, n.jsxs)(
                "li",
                {
                  children: [
                    (0, n.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    e3
                  ]
                },
                e3
              )
            )
          ]
        }),
        (0, n.jsx)("div", {
          className: C().resultActions,
          children: (0, n.jsx)(y.$, {
            size: "sm",
            className: C().prButton,
            "data-pr": t2,
            "aria-disabled": "idle" !== t2 || void 0,
            onClick: s2,
            children: (0, n.jsx)(ee, { state: t2, number: a2 })
          })
        })
      ]
    });
  }
  function ea({ onRestart: e2 }) {
    return (0, n.jsxs)("div", {
      className: C().result,
      children: [
        (0, n.jsx)("p", {
          className: C().summary,
          children: "The change was sent back twice, so the agent stopped. No files were written."
        }),
        (0, n.jsx)("div", {
          className: C().resultActions,
          children: (0, n.jsxs)(y.$, {
            size: "sm",
            variant: "secondary",
            onClick: e2,
            children: [
              (0, n.jsx)(g.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              "Run again"
            ]
          })
        })
      ]
    });
  }
  var es = a(51811);
  let ei = {
    name: "sparkle",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr"
        }
      ]
    ]
  };
  ei.node;
  let en = (0, es.A)(ei);
  var er = a(36483), el = a(65377), ed = a(797), eo = a(94179), ec = a(36455), eu = a(66958);
  let ep = {
    think: en,
    read: er.A,
    search: el.A,
    edit: ed.A,
    terminal: eo.A,
    review: ec.A
  };
  function eh({ mark: e2 }) {
    if ("npm" === e2)
      return (0, n.jsx)(k, {
        className: C().brandMark,
        "data-brand": "npm",
        "aria-hidden": "true"
      });
    if ("typescript" === e2)
      return (0, n.jsx)(w, {
        className: C().brandMark,
        "data-brand": "typescript",
        "aria-hidden": "true"
      });
    if ("github" === e2)
      return (0, n.jsx)(b, { className: C().brandMark, "aria-hidden": "true" });
    let t2 = ep[e2];
    return (0, n.jsx)(t2, {
      size: 16,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    });
  }
  function em(e2) {
    return "running" === e2.status ? { verb: e2.verb, target: e2.target } : "waiting" === e2.status ? { verb: "Review", target: e2.doneTarget ?? e2.target } : "rejected" === e2.status ? { verb: "Sent back", target: e2.doneTarget ?? e2.target } : { verb: e2.doneVerb, target: e2.doneTarget ?? e2.target };
  }
  function eg({ step: e2 }) {
    return e2.change ? (0, n.jsx)(G, {
      change: e2.change,
      rejected: "rejected" === e2.status,
      reason: e2.reason
    }) : (0, n.jsxs)("div", {
      className: C().details,
      children: [
        e2.text && (0, n.jsx)("p", { className: C().thought, children: e2.text }),
        e2.io && (0, n.jsxs)("div", {
          className: C().io,
          children: [
            (0, n.jsx)("code", {
              className: C().ioInput,
              children: e2.io.input
            }),
            (0, n.jsx)("div", {
              className: C().ioOutput,
              children: e2.io.output.map(
                (e3, t2) => (0, n.jsx)("code", { children: e3 }, t2)
              )
            })
          ]
        })
      ]
    });
  }
  let ef = (0, r.memo)(function({
    step: e2,
    open: t2,
    headId: a2,
    onToggle: s2,
    gate: i2
  }) {
    let r2, { reduce: l2, height: o2 } = E(), { verb: c2, target: u2 } = em(e2), p2 = "waiting" === e2.status && i2 && e2.change, h2 = !p2 && !!(e2.text || e2.io || e2.change), m2 = `${a2}-details`, g2 = (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", {
          className: C().stepIcon,
          children: e2.icon ?? (0, n.jsx)(eh, { mark: e2.mark })
        }),
        (0, n.jsxs)("span", {
          className: C().stepLabel,
          children: [
            (0, n.jsx)(W, {
              swapKey: `${e2.status}:${c2}`,
              className: C().verb,
              children: "running" === e2.status ? (0, n.jsx)(j.n, { children: c2 }) : c2
            }),
            u2 && (0, n.jsx)("span", {
              className: C().target,
              children: "rejected" === e2.status ? (0, n.jsx)("q", { children: e2.reason ?? u2 }) : u2
            }),
            "running" === e2.status && e2.progress && (0, n.jsxs)("span", {
              className: C().count,
              children: [
                (0, n.jsx)("span", {
                  className: C().countValue,
                  style: {
                    minWidth: `${String(e2.progress.total).length}ch`
                  },
                  children: e2.progress.value
                }),
                " of ",
                e2.progress.total
              ]
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: C().stepTime,
          children: "done" === e2.status && e2.ms ? (r2 = e2.ms) < 1e4 ? `${(r2 / 1e3).toFixed(1)}s` : `${Math.round(r2 / 1e3)}s` : ""
        }),
        (0, n.jsxs)("span", {
          className: C().stepState,
          "aria-hidden": "true",
          children: [
            "done" === e2.status && (0, n.jsx)(O, {}),
            "rejected" === e2.status && (0, n.jsx)(eu.A, { size: 14, strokeWidth: 2 })
          ]
        }),
        (0, n.jsx)("span", {
          className: C().chevronSlot,
          "aria-hidden": "true",
          children: h2 && (0, n.jsx)(x.A, {
            className: C().chevron,
            size: 16,
            strokeWidth: 1.75
          })
        })
      ]
    });
    return (0, n.jsxs)(d.PY1.li, {
      className: C().step,
      "data-status": e2.status,
      initial: l2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: l2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        height: 0,
        transition: { height: o2, opacity: { duration: 0.1 } }
      },
      transition: { height: o2, opacity: { duration: 0.16 * !l2, ease: P } },
      children: [
        h2 ? (0, n.jsx)("button", {
          type: "button",
          id: a2,
          className: C().stepHead,
          "aria-expanded": t2,
          "aria-controls": t2 ? m2 : void 0,
          onClick: () => s2(e2.id),
          children: g2
        }) : (0, n.jsx)("div", {
          id: a2,
          className: C().stepHead,
          tabIndex: -1,
          children: g2
        }),
        (0, n.jsx)(q, {
          open: !!p2 || h2 && t2,
          id: m2,
          children: (0, n.jsx)("div", {
            className: C().stepBody,
            children: p2 && i2 && e2.change ? (0, n.jsx)(
              Z,
              {
                change: e2.change,
                onApprove: i2.onApprove,
                onReject: i2.onReject
              },
              e2.id
            ) : (0, n.jsx)(eg, { step: e2 })
          })
        })
      ]
    });
  }), ex = (e2) => "change" in e2, e_ = (e2, t2 = "idle") => ({
    phase: t2,
    plan: e2.steps,
    index: 0,
    clock: 0,
    elapsed: 0,
    finished: [],
    revised: false,
    result: e2.result
  });
  function ey(e2) {
    let {
      id: t2,
      mark: a2,
      verb: s2,
      doneVerb: i2,
      target: n2,
      doneTarget: r2,
      io: l2,
      text: d2,
      icon: o2
    } = e2;
    return {
      id: t2,
      mark: a2,
      verb: s2,
      doneVerb: i2,
      target: n2,
      doneTarget: r2,
      io: l2,
      text: d2,
      icon: o2,
      status: "running",
      change: ex(e2) ? e2.change : void 0
    };
  }
  function ej(e2, { running: t2 }) {
    let a2 = (0, r.useRef)(e2);
    (0, r.useEffect)(() => {
      a2.current = e2;
    });
    let [s2, i2] = (0, r.useState)(() => e_(e2)), n2 = t2 && "working" === s2.phase;
    (0, r.useEffect)(() => {
      if (!n2) return;
      let e3 = 0, t3 = performance.now(), a3 = 0, s3 = (n3) => {
        if (a3 += Math.min(n3 - t3, 100), t3 = n3, a3 >= 40) {
          let e4 = a3;
          a3 = 0, i2(
            (t4) => (function(e5, t5) {
              if ("working" !== e5.phase) return e5;
              let { index: a4, clock: s4, finished: i3 } = e5;
              s4 += t5;
              let n4 = e5.elapsed + t5;
              for (; a4 < e5.plan.length; ) {
                let t6 = e5.plan[a4];
                if (s4 < t6.ms) break;
                if (ex(t6))
                  return {
                    ...e5,
                    finished: i3,
                    index: a4,
                    clock: t6.ms,
                    elapsed: n4 - (s4 - t6.ms),
                    phase: "waiting"
                  };
                i3 = [...i3, { ...ey(t6), status: "done", ms: t6.ms }], s4 -= t6.ms, a4 += 1;
              }
              return a4 >= e5.plan.length ? {
                ...e5,
                finished: i3,
                index: a4,
                clock: 0,
                elapsed: n4 - s4,
                phase: "done"
              } : { ...e5, finished: i3, index: a4, clock: s4, elapsed: n4 };
            })(t4, e4)
          );
        }
        e3 = requestAnimationFrame(s3);
      };
      return e3 = requestAnimationFrame(s3), () => cancelAnimationFrame(e3);
    }, [n2]);
    let l2 = (0, r.useCallback)(
      () => i2((e3) => "idle" === e3.phase ? { ...e3, phase: "working" } : e3),
      []
    ), d2 = (0, r.useCallback)(() => i2(e_(a2.current, "working")), []), o2 = (0, r.useCallback)(
      () => i2((e3) => {
        let t3 = e3.plan[e3.index];
        return "waiting" === e3.phase && t3 && ex(t3) ? {
          ...e3,
          phase: "working",
          index: e3.index + 1,
          clock: 0,
          approved: t3.change,
          finished: [
            ...e3.finished,
            { ...ey(t3), status: "done", ms: t3.ms }
          ]
        } : e3;
      }),
      []
    ), c2 = (0, r.useCallback)(
      (e3) => i2((t3) => {
        let a3 = t3.plan[t3.index];
        if ("waiting" !== t3.phase || !a3 || !ex(a3)) return t3;
        let s3 = [
          ...t3.finished,
          { ...ey(a3), status: "rejected", ms: a3.ms, reason: e3 }
        ];
        if (!a3.revise || t3.revised)
          return {
            ...t3,
            phase: "stopped",
            finished: s3,
            index: t3.index + 1,
            clock: 0
          };
        let i3 = a3.revise.steps.map(
          (t4, a4) => 0 === a4 && t4.text ? { ...t4, text: `\u201C${e3}\u201D ${t4.text}` } : t4
        ), n3 = [
          ...t3.plan.slice(0, t3.index + 1),
          ...i3,
          a3.revise.approval,
          ...t3.plan.slice(t3.index + 1)
        ];
        return {
          ...t3,
          phase: "working",
          plan: n3,
          finished: s3,
          index: t3.index + 1,
          clock: 0,
          revised: true
        };
      }),
      []
    );
    return {
      state: (0, r.useMemo)(() => {
        let e3 = s2.plan[s2.index], t3 = [...s2.finished];
        if (e3 && ("working" === s2.phase || "waiting" === s2.phase)) {
          let a4 = ey(e3);
          "waiting" === s2.phase ? a4.status = "waiting" : e3.total && (a4.progress = {
            value: Math.min(
              e3.total,
              1 + Math.floor(s2.clock / e3.ms * e3.total)
            ),
            total: e3.total
          }), t3.push(a4);
        }
        let { result: a3 } = s2;
        return {
          status: s2.phase,
          elapsedMs: s2.elapsed,
          steps: t3,
          result: "done" === s2.phase ? {
            ...a3,
            summary: s2.approved?.outcome ?? a3.summary,
            files: s2.approved ? s2.approved.files.map((e4) => ({
              path: e4.path,
              additions: e4.lines.filter((e5) => "add" === e5.type).length,
              deletions: e4.lines.filter((e5) => "del" === e5.type).length
            })) : []
          } : void 0
        };
      }, [s2]),
      start: l2,
      restart: d2,
      approve: o2,
      reject: c2
    };
  }
  let ev = {
    idle: "Ready",
    working: "Working",
    waiting: "Waiting for you",
    done: "Done",
    stopped: "Stopped"
  }, eb = {
    name: "Claude Sonnet 5.5",
    mark: (0, n.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      { "aria-hidden": "true" }
    )
  }, ek = (e2) => {
    let t2 = Math.floor(e2 / 1e3);
    return `${Math.floor(t2 / 60)}:${String(t2 % 60).padStart(2, "0")}`;
  }, ew = (e2) => {
    let t2 = Math.max(1, Math.round(e2 / 1e3));
    return t2 < 60 ? `${t2}s` : `${Math.floor(t2 / 60)}m ${String(t2 % 60).padStart(2, "0")}s`;
  };
  function eN({ status: e2 }) {
    let t2 = {
      className: C().statusIcon,
      size: 14,
      strokeWidth: 2,
      "aria-hidden": true
    };
    return "working" === e2 ? (0, n.jsx)(c.A, { ...t2, className: `${C().statusIcon} ${C().spin}` }) : "waiting" === e2 ? (0, n.jsx)(u.A, { ...t2 }) : "done" === e2 ? (0, n.jsx)(p.A, { ...t2 }) : "stopped" === e2 ? (0, n.jsx)(h.A, { ...t2 }) : (0, n.jsx)(m.A, { ...t2 });
  }
  function eA({
    task: e2 = "Add rate limiting to the public API",
    model: t2 = eb,
    script: a2 = T,
    run: s2,
    autoPlay: i2 = true,
    onApprove: c2,
    onReject: u2,
    onOpenPullRequest: p2,
    onRestart: h2,
    className: m2
  }) {
    let b2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), k2 = (0, r.useRef)(null), w2 = (0, l.W)(k2, { amount: 0.2 }), { reduce: N2, height: A2 } = E(), R2 = ej(a2, { running: !s2 && w2 }), { start: z2 } = R2, S2 = s2 ?? R2.state, { status: M2, steps: $2, result: I2 } = S2, L2 = "done" === M2 || "stopped" === M2, [P2, B2] = (0, r.useState)({}), [V2, O2] = (0, r.useState)(false), [H2, F2] = (0, r.useState)({ state: "idle" }), [K2, D2] = (0, r.useState)(""), Y2 = (0, r.useRef)(void 0);
    (0, r.useEffect)(() => {
      !s2 && i2 && w2 && z2();
    }, [s2, i2, w2, z2]), (0, r.useEffect)(() => () => window.clearTimeout(Y2.current), []);
    let X2 = (0, r.useCallback)((e3) => `${b2}-step-${e3}`, [b2]), G2 = (0, r.useCallback)(
      (e3) => requestAnimationFrame(
        () => document.getElementById(X2(e3))?.focus({ preventScroll: true })
      ),
      [X2]
    ), Z2 = (0, r.useCallback)((e3) => B2((t3) => ({ ...t3, [e3]: !t3[e3] })), []), U2 = $2.find((e3) => "waiting" === e3.status && e3.change), J2 = (0, r.useRef)(U2);
    (0, r.useEffect)(() => {
      J2.current = U2;
    });
    let { approve: Q2, reject: ee2, restart: es2 } = R2, ei2 = !!s2, en2 = (0, r.useCallback)(() => {
      let e3 = J2.current;
      e3?.change && (c2?.(e3.change), ei2 || Q2(), G2(e3.id));
    }, [c2, ei2, Q2, G2]), er2 = (0, r.useCallback)(
      (e3) => {
        let t3 = J2.current;
        t3?.change && (u2?.(t3.change, e3), ei2 || ee2(e3), G2(t3.id));
      },
      [u2, ei2, ee2, G2]
    ), el2 = (0, r.useMemo)(() => ({ onApprove: en2, onReject: er2 }), [en2, er2]), ed2 = () => {
      window.clearTimeout(Y2.current), B2({}), O2(false), F2({ state: "idle" }), D2(""), h2?.(), ei2 || es2();
    }, eo2 = async () => {
      if ("opened" === H2.state && H2.url)
        return void window.open(H2.url, "_blank", "noopener,noreferrer");
      if ("idle" === H2.state) {
        if (F2({ state: "opening" }), D2(""), !p2) {
          Y2.current = window.setTimeout(() => {
            let e3 = a2.pullRequest?.number ?? 482;
            F2({ state: "opened", number: e3 }), D2(
              `Simulated: pull request #${e3} opened. Nothing was sent to GitHub.`
            );
          }, 900);
          return;
        }
        try {
          let e3 = await p2(), t3 = e3?.number ?? a2.pullRequest?.number;
          F2({ state: "opened", number: t3, url: e3?.url }), D2(`Pull request${t3 ? ` #${t3}` : ""} opened.`);
        } catch {
          F2({ state: "idle" }), D2("The pull request could not be opened. Try again.");
        }
      }
    }, ec2 = $2[$2.length - 1], eu2 = "working" === M2 && ec2?.status === "running" ? (() => {
      let { verb: e3, target: t3 } = em(ec2);
      return [e3, t3].filter(Boolean).join(" ");
    })() : "waiting" === M2 && U2?.change ? `Waiting for you. Review the changes to ${U2.change.files.length} files, then approve or reject.` : "done" === M2 ? `Done in ${ew(S2.elapsedMs)}.${I2?.tests ? ` ${I2.tests.passed} of ${I2.tests.total} tests passed.` : ""}` : "stopped" === M2 ? "Stopped. No files were written." : "", ep2 = !L2 || V2, eh2 = `${b2}-steps`;
    return (0, n.jsxs)("section", {
      ref: k2,
      className: [C().root, m2].filter(Boolean).join(" "),
      "aria-labelledby": `${b2}-task`,
      children: [
        (0, n.jsxs)("header", {
          className: C().header,
          children: [
            (0, n.jsxs)("div", {
              className: C().titleRow,
              children: [
                (0, n.jsx)("h3", {
                  id: `${b2}-task`,
                  className: C().task,
                  children: e2
                }),
                (0, n.jsx)(v.m, {
                  content: "Restart run",
                  children: (0, n.jsx)(y.$, {
                    variant: "ghost",
                    size: "sm",
                    className: C().iconButton,
                    "aria-label": "Restart run",
                    onClick: ed2,
                    children: (0, n.jsx)(g.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: C().metaRow,
              children: [
                (0, n.jsxs)("span", {
                  className: C().model,
                  children: [
                    t2.mark && (0, n.jsx)("span", {
                      className: C().modelMark,
                      children: t2.mark
                    }),
                    t2.name
                  ]
                }),
                (0, n.jsxs)("span", {
                  className: C().statusLine,
                  children: [
                    (0, n.jsx)("span", {
                      className: C().status,
                      "data-status": M2,
                      children: (0, n.jsxs)(W, {
                        swapKey: M2,
                        children: [
                          (0, n.jsx)(eN, { status: M2 }),
                          "working" === M2 ? (0, n.jsx)(j.n, { children: ev.working }) : ev[M2]
                        ]
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: C().timer,
                      role: "timer",
                      "aria-label": `Worked for ${ek(S2.elapsedMs)}`,
                      children: ek(S2.elapsedMs)
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: C().stepsArea,
          children: [
            (0, n.jsx)(q, {
              open: L2,
              children: (0, n.jsxs)("button", {
                type: "button",
                className: C().fold,
                "aria-expanded": V2,
                "aria-controls": eh2,
                onClick: () => O2((e3) => !e3),
                children: [
                  (0, n.jsx)(f.A, {
                    className: C().stepIcon,
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, n.jsxs)("span", {
                    children: [$2.length, " steps \xB7 ", ew(S2.elapsedMs)]
                  }),
                  (0, n.jsx)(x.A, {
                    className: C().chevron,
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                ]
              })
            }),
            (0, n.jsx)(d.PY1.div, {
              id: eh2,
              className: C().listWrap,
              initial: false,
              inert: !ep2,
              animate: { height: ep2 ? "auto" : 0, opacity: +!!ep2 },
              transition: {
                height: A2,
                opacity: { duration: N2 ? 0 : ep2 ? 0.16 : 0.1 }
              },
              children: (0, n.jsx)("ol", {
                className: C().steps,
                "aria-label": "Steps",
                children: (0, n.jsx)(o.N, {
                  initial: false,
                  children: $2.map(
                    (e3) => (0, n.jsx)(
                      ef,
                      {
                        step: e3,
                        open: !!P2[e3.id],
                        headId: X2(e3.id),
                        onToggle: Z2,
                        gate: "waiting" === e3.status ? el2 : void 0
                      },
                      e3.id
                    )
                  )
                })
              })
            }),
            "idle" === M2 && !i2 && !s2 && (0, n.jsxs)("div", {
              className: C().ready,
              children: [
                (0, n.jsx)("p", { children: "The agent is ready to start." }),
                (0, n.jsxs)(y.$, {
                  size: "sm",
                  className: C().accentButton,
                  onClick: z2,
                  children: [
                    (0, n.jsx)(_.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Start run"
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(q, {
          open: "done" === M2 && !!I2,
          label: "Result",
          children: I2 && (0, n.jsx)(et, {
            result: I2,
            pr: H2.state,
            prNumber: H2.number,
            onOpenPr: eo2
          })
        }),
        (0, n.jsx)(q, {
          open: "stopped" === M2,
          label: "Run stopped",
          children: (0, n.jsx)(ea, { onRestart: ed2 })
        }),
        (0, n.jsx)("p", {
          className: C().srOnly,
          "aria-live": "polite",
          children: eu2
        }),
        (0, n.jsx)("p", {
          className: C().srOnly,
          "aria-live": "polite",
          children: K2
        })
      ]
    });
  }
  let eR = eA;
}

__m(__module,__exports,__require);
});
A.cssFor("agent-run", [14290,55848]);
A.item("agent-run", {entry:95345, export:"AgentRun", kind:"block", tier:"pro", unresolved:[]});
})();