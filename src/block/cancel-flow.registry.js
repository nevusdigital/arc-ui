/* cancel-flow (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(5736, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "lock",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1"
        }
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(22346, ".badge{--badge-tone:var(--text-secondary);--badge-tint:10%;--badge-ink:84%;--badge-background:color-mix(in oklab,var(--badge-tone) var(--badge-tint),var(--surface));--badge-foreground:color-mix(in oklab,var(--badge-tone) var(--badge-ink),var(--foreground));--badge-color:color-mix(in oklab,var(--badge-tone) 88%,var(--foreground));--badge-border:transparent;--badge-radius:6px;--badge-height:24px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px;box-sizing:border-box;display:inline-flex;min-height:var(--badge-height);flex:none;align-items:center;justify-content:center;vertical-align:middle;border:1px solid var(--badge-border);border-radius:var(--badge-radius);padding:0 var(--badge-pad);color:var(--badge-foreground);background:var(--badge-background);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.005em;line-height:1;white-space:nowrap;overflow:clip;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n:root[data-theme=dark] .badge{--badge-tint:12%;--badge-ink:94%}\n@media (prefers-reduced-motion:reduce){.badge{transition-duration:var(--duration-instant)}\n.outline{--badge-border:color-mix(in oklab,var(--badge-tone) 14%,var(--border))}\n:root[data-theme=dark] .outline{--badge-border:color-mix(in oklab,var(--badge-tone) 22%,var(--border))}\n.sm{--badge-height:20px;--badge-radius:5px;--badge-pad:8px;--badge-gap:4px;--badge-icon:12px;--badge-dot:5px;font-size:11px}\n.md{--badge-height:24px;--badge-radius:6px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px}\n.lg{--badge-height:28px;--badge-radius:7px;--badge-pad:12px;--badge-gap:6px;--badge-icon:16px;--badge-dot:7px;font-size:var(--text-sm)}\n.pill{--badge-radius:var(--radius-pill)}\n.withIcon{padding-inline-start:calc(var(--badge-pad) - 2px)}\n.withDot{padding-inline-start:calc(var(--badge-pad) - 1px)}\n.body,.content{display:flex;align-items:center}\n.content{position:relative;width:max-content;gap:var(--badge-gap)}\n.glyph,.label{position:relative;display:inline-flex;align-items:center}\n.glyph>svg{display:block;width:var(--badge-icon);height:var(--badge-icon)}\n.text{display:block;text-box:trim-both cap alphabetic}\n.icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center;color:var(--badge-color);line-height:0}\n.dot{display:block;width:var(--badge-dot);height:var(--badge-dot);flex:none;border-radius:50%;background:var(--badge-color)}\n.neutral{--badge-tone:var(--text-secondary)}\n.info{--badge-tone:var(--info,var(--tone-sky))}\n.success{--badge-tone:var(--success)}\n.warning{--badge-tone:var(--warning)}\n.amber,.warning{--badge-ink:76%}\n.danger{--badge-tone:var(--danger)}\n.teal{--badge-tone:var(--tone-teal)}\n.sky{--badge-tone:var(--tone-sky)}\n.orchid{--badge-tone:var(--tone-orchid)}\n.violet{--badge-tone:var(--tone-violet)}\n.rose{--badge-tone:var(--tone-rose)}\n.amber{--badge-tone:var(--tone-amber)}", {});
A.reg(51752, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var n = a(51811);
  let r = {
    name: "calendar-check",
    size: 24,
    node: [
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }
      ],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
    ]
  };
  r.node;
  let i = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.regCss(68272, ".field{display:grid;min-width:0}\n.field label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.control{width:100%;min-height:110px;resize:vertical;border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:var(--space-3);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);outline:none;box-shadow:0 0 0 6px transparent;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.control::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.control:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.control:focus-visible{border-color:var(--foreground);box-shadow:0 0 0 3px var(--focus-ring);outline:2px solid transparent;outline-offset:2px}\n.control[aria-invalid=true]{border-color:var(--danger)}\n.control:disabled{cursor:not-allowed;background:var(--surface-muted);opacity:.6}\n@media (prefers-reduced-motion:reduce){.control{transition:none}\n.messageSlot{display:block;overflow:hidden}\n.error,.hint{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.hint{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(70614, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { j: () => C });
  var a = i(95155), r = i(12115), n = i(25354), s = i(80642), o = i(28245), l = i(92171), c = i(18310), d = i(55809), u = i(25879), p = i(7770), h = i(88542), A = i.n(h);
  let m = [...p.T.ease.enter], f = [...p.T.ease.standard], y = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, _ = { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` }, x = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${p.T.blur.subtle}px)`,
    transition: { duration: p.T.duration.fast, ease: f }
  }, g = { opacity: 0, scale: 0.6, filter: `blur(${p.T.blur.subtle}px)` }, b = { ...g, transition: { duration: p.T.duration.fast, ease: f } }, j = { opacity: 0 }, v = { opacity: 0, transition: { duration: p.T.duration.instant } }, k = {
    ...p.T.spring.snappy,
    opacity: { duration: p.T.duration.fast, ease: m },
    filter: { duration: p.T.duration.fast, ease: m }
  };
  function w({ reduced: e2 }) {
    return (0, a.jsx)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(n.PY1.path, {
        d: "M4 12.5l5 5L20 6.5",
        initial: !e2 && { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: { duration: 0.32, ease: m, delay: 0.08 },
          opacity: { duration: 0.05, delay: 0.08 }
        }
      })
    });
  }
  function N({ icon: e2, text: t2, done: i2, width: r2, reduced: o2, measure: l2 }) {
    return (0, a.jsxs)("span", {
      className: A().face,
      children: [
        (0, a.jsx)("span", {
          className: A().iconSlot,
          children: (0, a.jsx)(s.N, {
            initial: false,
            children: (0, a.jsx)(
              n.PY1.span,
              {
                className: A().iconPhase,
                initial: o2 ? j : g,
                animate: y,
                exit: o2 ? v : b,
                transition: o2 ? { duration: p.T.duration.fast } : k,
                children: i2 ? (0, a.jsx)(w, { reduced: o2 }) : e2
              },
              i2 ? "done" : "idle"
            )
          })
        }),
        (0, a.jsxs)(n.PY1.span, {
          className: A().labelFrame,
          style: { width: r2 },
          children: [
            l2 && (0, a.jsx)("span", {
              ref: l2,
              className: A().measure,
              children: t2
            }),
            (0, a.jsx)(s.N, {
              mode: "popLayout",
              initial: false,
              children: (0, a.jsx)(
                n.PY1.span,
                {
                  className: A().label,
                  initial: o2 ? j : _,
                  animate: y,
                  exit: o2 ? v : x,
                  transition: {
                    duration: o2 ? p.T.duration.fast : p.T.duration.standard,
                    ease: m
                  },
                  children: t2
                },
                t2
              )
            })
          ]
        })
      ]
    });
  }
  function C({
    label: e2,
    confirmedLabel: t2 = "Done",
    onConfirm: i2,
    duration: s2 = 1200,
    icon: h2 = (0, a.jsx)(u.A, { strokeWidth: 1.75 }),
    tone: m2 = "accent",
    confirmed: f2,
    onHoldChange: y2,
    className: _2,
    disabled: x2,
    ...g2
  }) {
    let b2 = (0, c.I)() ?? false, j2 = (0, r.useId)(), [v2, k2] = (0, r.useState)(false), [w2, T] = (0, r.useState)(0), P = f2 ?? v2, [I, E] = (0, r.useState)(false), M = (0, o.d)(0), B = (0, o.d)(1), R = (0, d.G)(
      M,
      (e3) => `inset(0 ${((1 - Math.min(1, Math.max(0, e3))) * 100).toFixed(3)}% 0 0)`
    ), [F, S] = (function(e3) {
      let t3 = (0, o.d)("auto"), [i3, a2] = (0, r.useState)(null);
      return (0, r.useEffect)(() => {
        if (!i3 || "u" < typeof ResizeObserver) return;
        let a3 = null, r2 = null, n2 = new ResizeObserver(([n3]) => {
          let s3 = n3?.borderBoxSize?.[0]?.inlineSize ?? i3.offsetWidth, o2 = i3.textContent, c2 = null !== a3 && a3 !== o2 && !e3 && "number" == typeof t3.get();
          a3 = o2, r2?.stop(), c2 ? r2 = (0, l.i)(t3, s3, p.T.spring.morph) : t3.jump(s3);
        });
        return n2.observe(i3), () => {
          n2.disconnect(), r2?.stop();
        };
      }, [i3, e3, t3]), [t3, a2];
    })(b2), D = (0, r.useRef)(null), Y = (0, r.useRef)("mouse"), Q = (0, r.useRef)(null), L = (0, r.useRef)(null), $ = (0, r.useRef)(null), O = P ? t2 : e2, z = (s2 / 1e3).toLocaleString("en-US", { maximumFractionDigits: 1 });
    function H(e3) {
      if (L.current?.stop(), b2) return void B.jump(1);
      let t3 = ($.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97;
      L.current = (0, l.i)(B, e3 ? t3 : 1, p.T.spring.snappy);
    }
    function U() {
      Q.current?.stop(), b2 ? M.jump(0) : Q.current = (0, l.i)(M, 0, {
        ...p.T.spring.smooth,
        velocity: 0
      });
    }
    function W() {
      D.current = null, E(false), y2?.(false), H(false);
    }
    function G() {
      D.current && (W(), "touch" === Y.current && navigator.vibrate?.(12), k2(true), T((e3) => e3 + 1), i2());
    }
    function V(e3) {
      P || x2 || D.current || (D.current = e3, E(true), y2?.(true), H(true), Q.current?.stop(), Q.current = (0, l.i)(M, 1, {
        duration: (1 - M.get()) * s2 / 1e3,
        ease: "linear",
        onComplete: G
      }));
    }
    function q() {
      D.current && (W(), U());
    }
    let X = (0, r.useEffectEvent)(() => {
      P && 1 > M.get() && !D.current && (Q.current?.stop(), b2 ? M.jump(1) : Q.current = (0, l.i)(M, 1, p.T.spring.smooth)), !P && M.get() > 0 && !D.current && U();
    });
    return (0, r.useEffect)(() => {
      X();
    }, [P, w2]), (0, r.useEffect)(
      () => () => {
        Q.current?.stop(), L.current?.stop();
      },
      []
    ), (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsxs)(n.PY1.button, {
          ...g2,
          ref: $,
          type: "button",
          className: [A().button, _2].filter(Boolean).join(" "),
          "data-tone": m2,
          "data-state": P ? "done" : I ? "holding" : "idle",
          disabled: x2,
          "aria-disabled": P || void 0,
          "aria-label": O,
          "aria-describedby": P ? void 0 : j2,
          style: { scale: B },
          onPointerDown: function(e3) {
            e3.isPrimary && 0 === e3.button && (Y.current = e3.pointerType, e3.currentTarget.setPointerCapture(e3.pointerId), V("pointer"));
          },
          onPointerMove: function(e3) {
            if ("pointer" !== D.current) return;
            let t3 = e3.currentTarget.getBoundingClientRect();
            (e3.clientX < t3.left - 24 || e3.clientX > t3.right + 24 || e3.clientY < t3.top - 24 || e3.clientY > t3.bottom + 24) && q();
          },
          onPointerUp: q,
          onPointerCancel: q,
          onLostPointerCapture: q,
          onKeyDown: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), e3.repeat || V("key"));
          },
          onKeyUp: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), "key" === D.current && q());
          },
          onBlur: q,
          onContextMenu: (e3) => e3.preventDefault(),
          children: [
            (0, a.jsx)(N, {
              icon: h2,
              text: O,
              done: P,
              width: F,
              reduced: b2,
              measure: S
            }),
            (0, a.jsx)(n.PY1.span, {
              className: A().fill,
              style: { clipPath: R },
              "aria-hidden": "true",
              children: (0, a.jsx)(N, {
                icon: h2,
                text: O,
                done: P,
                width: F,
                reduced: b2
              })
            })
          ]
        }),
        (0, a.jsx)("span", {
          id: j2,
          className: A().srOnly,
          children: `Press and hold for ${z} seconds to confirm. With a keyboard, hold Space or Enter.`
        }),
        (0, a.jsx)("span", {
          className: A().srOnly,
          role: "status",
          children: P ? t2 : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(73928, ".root{container-type:inline-size;width:min(100%,680px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root p{margin:0}\n.card{--control-height-md:var(--control-height-sm);border:1px solid var(--border);border-radius:16px;padding:var(--space-6);background:var(--surface)}\n@container (max-width: 520px){.card{padding:var(--space-5) var(--space-4)}\n.top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-2) var(--space-4)}\n.plan{display:grid;min-width:0;gap:2px}\n.planName{font-weight:500}\n.planMeta{color:var(--text-muted);font-size:var(--text-xs)}\n.progress{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-2);margin:var(--space-5) 0 0;padding:0;list-style:none}\n.step{display:grid;min-width:0;gap:var(--space-2)}\n.step[data-status=complete] .stepLabel{color:var(--text-secondary)}\n.step[data-status=current] .stepLabel{color:var(--foreground)}\n.bar{position:relative;height:2px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border)}\n.barFill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left center}\n.stepLabel{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.radio,.radio:after,.reason,.stepLabel{transition:none}\n.region{box-sizing:content-box;overflow:hidden;margin:var(--space-6) calc(var(--space-2) * -1) calc(var(--space-2) * -1);padding:var(--space-2)}\n.regionInner{position:relative}\n.view{display:grid;min-width:0}\n.morph{overflow:hidden}\n.morphInner{position:relative}\n.head{display:grid;gap:var(--space-1)}\n.title{margin:0;font-family:var(--font-body);font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.25;text-wrap:balance}\n.lead{max-width:56ch;color:var(--text-secondary);font-size:var(--text-sm);text-wrap:pretty}\n.swap{position:relative;display:block;min-width:0}\n.swapText{display:block}\n.reasons{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-2);margin-top:var(--space-5)}\n.reasons{grid-template-columns:minmax(0,1fr)}\n.reason{position:relative;isolation:isolate;display:grid;min-width:0;align-content:start;gap:2px;border:1px solid var(--border);border-radius:12px;padding:var(--space-3) var(--space-4);background:var(--surface);color:var(--foreground);font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-fast) var(--ease-standard)}\n.reason[aria-checked=true] .radio{border-color:var(--control-on)}\n.reason[aria-checked=true] .radio:after{transform:scale(1)}\n@media (hover:hover) and (pointer:fine){.reason:hover{border-color:var(--border-strong)}\n.highlight{position:absolute;z-index:-1;inset:-1px;border:1px solid var(--accent);border-radius:13px;background:color-mix(in oklab,var(--accent) 5%,transparent);pointer-events:none}\n.reasonHead{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3)}\n.reasonLabel{font-weight:500}\n.reasonDetail{color:var(--text-muted);font-size:var(--text-xs)}\n.radio{position:relative;width:16px;height:16px;flex:none;border:1.5px solid var(--border-strong);border-radius:50%;transition:border-color var(--duration-fast) var(--ease-standard)}\n.radio:after{position:absolute;inset:2.5px;border-radius:50%;background:var(--control-on);content:\"\";transform:scale(0);transition:transform var(--duration-spring) var(--ease-spring)}\n.noteSlot{overflow:hidden}\n.note{padding-top:var(--space-5)}\n.actions{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3);margin-top:var(--space-5);border-top:1px solid var(--border-subtle);padding-top:var(--space-4)}\n.actionsEnd{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:var(--space-2);margin-left:auto}\n.actionsEnd{width:100%}\n.actionsEnd>*{flex:1 1 auto}\n.inert[aria-disabled=true]{cursor:not-allowed;opacity:.52}\n.hint{padding-top:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);text-align:right}\n.panel{margin-top:var(--space-5);border:1px solid var(--border);border-radius:12px;background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}\n.offerBody{display:grid;padding:var(--space-5)}\n.offerBody,.receipt{padding:var(--space-4)}\n.figureRow{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--space-3) var(--space-4)}\n.figure{display:inline-flex;min-width:0;align-items:baseline;gap:var(--space-2);font-family:var(--font-display);font-size:var(--text-3xl);font-weight:400;letter-spacing:var(--tracking-display);line-height:1;font-variant-numeric:tabular-nums}\n.figure[role=spinbutton]{cursor:default}\n.figure{font-size:var(--text-2xl)}\n.figureNum{display:inline-flex}\n.figureNum>span{color:inherit;font:inherit;letter-spacing:inherit;line-height:inherit}\n.figureUnit{color:var(--text-secondary);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.was{color:var(--text-muted);font-size:var(--text-sm);font-variant-numeric:tabular-nums}\n.was s{text-decoration-thickness:1px}\n.monthControls{display:flex;gap:var(--space-2)}\n.monthControls .iconButton{width:var(--control-height-sm);padding:0}\n.monthControls .iconButton[aria-disabled=true]{cursor:not-allowed;opacity:.45}\n.person{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:start;gap:var(--space-3);margin-top:var(--space-4);border-top:1px solid var(--border);padding-top:var(--space-4)}\n.personName{font-weight:500}\n.personName span{margin-left:var(--space-1);color:var(--text-muted);font-weight:400}\n.quote{padding-top:2px;color:var(--text-secondary);overflow-wrap:anywhere}\n.facts{display:grid;gap:var(--space-2);margin:var(--space-4) 0 0;border-top:1px solid var(--border);padding:var(--space-4) 0 0;list-style:none}\n.facts li{display:grid;grid-template-columns:16px minmax(0,1fr);align-items:start;gap:var(--space-3)}\n.facts svg{margin-top:2px;color:var(--success)}\n.receipt{display:grid;justify-items:start;gap:var(--space-3);padding:var(--space-5)}\n.mark{display:grid;place-items:center;color:var(--success)}\n.rows{display:grid;width:100%;margin:0}\n.row{display:flex;justify-content:space-between;gap:var(--space-4);border-top:1px solid var(--border-subtle);padding:10px 0}\n.row:last-child{padding-bottom:0}\n.row dt{min-width:0;color:var(--text-secondary)}\n.row dd{margin:0;font-weight:500;font-variant-numeric:tabular-nums;text-align:right}\n.footnote{color:var(--text-muted);font-size:var(--text-xs)}\n.impacts{display:grid;margin:var(--space-5) 0 0;padding:0;list-style:none}\n.impact{display:grid;grid-template-columns:16px minmax(0,1fr);gap:var(--space-3);border-top:1px solid var(--border-subtle);padding:var(--space-3) 0}\n.impact:first-child{border-top:0;padding-top:0}\n.impact:last-child{padding-bottom:0}\n.impact svg{margin-top:2px;color:var(--text-secondary)}\n.impact[data-danger] svg{color:var(--danger)}\n.impactTitle{font-weight:500}\n.impactDetail{padding-top:2px;color:var(--text-muted);font-size:var(--text-xs)}\n.subhead{margin:var(--space-6) 0 0;font-size:var(--text-sm);font-weight:500}\n.timeline{display:grid;margin:var(--space-3) 0 0;padding:0;list-style:none}\n.event{position:relative;display:grid;grid-template-columns:56px 16px minmax(0,1fr);column-gap:var(--space-3);padding-bottom:var(--space-5)}\n.event:last-child{padding-bottom:0}\n.event:not(:last-child):after{position:absolute;top:22px;bottom:2px;left:calc(56px + var(--space-3) + 7.5px);width:1px;background:var(--border);content:\"\"}\n.event[data-done] .eventDot{width:16px;height:16px;margin-top:2px;border:0;background:var(--success);color:var(--surface)}\n.eventDate{padding-top:1px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.eventDot{display:grid;width:10px;height:10px;justify-self:center;place-items:center;margin-top:5px;border:1.5px solid var(--border-strong);border-radius:50%;background:var(--surface)}\n.eventTitle{font-weight:500}\n.eventDetail{padding-top:2px;color:var(--text-muted);font-size:var(--text-xs)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","card":"card","top":"top","plan":"plan","planName":"planName","planMeta":"planMeta","progress":"progress","step":"step","stepLabel":"stepLabel","bar":"bar","barFill":"barFill","radio":"radio","reason":"reason","region":"region","regionInner":"regionInner","view":"view","morph":"morph","morphInner":"morphInner","head":"head","title":"title","lead":"lead","swap":"swap","swapText":"swapText","reasons":"reasons","highlight":"highlight","reasonHead":"reasonHead","reasonLabel":"reasonLabel","reasonDetail":"reasonDetail","noteSlot":"noteSlot","note":"note","actions":"actions","actionsEnd":"actionsEnd","inert":"inert","hint":"hint","panel":"panel","offerBody":"offerBody","receipt":"receipt","figureRow":"figureRow","figure":"figure","figureNum":"figureNum","figureUnit":"figureUnit","was":"was","monthControls":"monthControls","iconButton":"iconButton","person":"person","personName":"personName","quote":"quote","facts":"facts","mark":"mark","rows":"rows","row":"row","footnote":"footnote","impacts":"impacts","impact":"impact","impactTitle":"impactTitle","impactDetail":"impactDetail","subhead":"subhead","timeline":"timeline","event":"event","eventDot":"eventDot","eventDate":"eventDate","eventTitle":"eventTitle","eventDetail":"eventDetail","srOnly":"srOnly"});
A.reg(75976, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { CancelFlow: () => G, default: () => ea });
  var n = t(95155), i = t(12115), r = t(79196), s = t(25354), o = t(18310), l = t(80642), c = t(28245), d = t(92171), u = t(57700), p = t(51752), h = t(5736), m = t(25879), f = t(36565), x = t(2125), _ = t(64577), y = t(31966), j = t(92298), w = t(50825), g = t(65024), v = t(92218), b = t(90034), N = t(51288), $ = t(70614), k = t(87796), T = t(7770), S = t(73928), O = t.n(S);
  let { spring: P, duration: C, ease: Y, blur: E, stagger: D } = T.T, A = [...Y.enter], L = [...Y.standard], R = "sofia@halcyon.studio", I = ["Nov 14, 2026", "Dec 14, 2026", "Jan 14, 2027"], B = ["Reason", "Offer", "Confirm"], W = { reason: 0, offer: 1, confirm: 2, cancelled: 3, kept: 3 }, F = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), z = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, M = [
    {
      id: "price",
      label: "Too expensive",
      detail: "The cost is hard to justify right now",
      prompt: "What would feel like a fair price for your team?",
      placeholder: "For example, $60 a month would work for us"
    },
    {
      id: "usage",
      label: "Not using it enough",
      detail: "Our work is seasonal or has slowed down",
      prompt: "When do you expect to need it again?",
      placeholder: "For example, after our January launch"
    },
    {
      id: "feature",
      label: "Missing a feature",
      detail: "Something we need isn't there yet",
      prompt: "Which feature would keep you here? Emma from product reads these.",
      placeholder: "For example, client approvals on shared boards"
    },
    {
      id: "switching",
      label: "Moving to another tool",
      detail: "We're consolidating on one product",
      prompt: "Which tool are you moving to?",
      placeholder: "For example, the suite our agency partner uses"
    }
  ], H = [
    {
      Icon: p.A,
      title: "Full access until Oct 14, 2026",
      detail: "The $96 renewal won't be charged.",
      danger: false
    },
    {
      Icon: h.A,
      title: "Read-only from Oct 14",
      detail: "All 8 members can still open and export the 42 projects.",
      danger: false
    },
    {
      Icon: m.A,
      title: "Deleted on Nov 13, 2026",
      detail: "Projects, files and history are removed 30 days after the plan ends.",
      danger: true
    }
  ], V = [
    {
      date: "Today",
      title: "Cancellation confirmed",
      detail: "No more charges. Your team keeps full access for now.",
      done: true
    },
    {
      date: "Oct 14",
      title: "Workspace turns read-only",
      detail: "Everyone can still open and export projects.",
      done: false
    },
    {
      date: "Nov 13",
      title: "Data is deleted",
      detail: "Reactivate before then to keep all 42 projects.",
      done: false
    }
  ];
  function U({ children: e2, className: a2, reduce: t2, ref: i2 }) {
    let o2 = (0, r.tF)();
    return (0, n.jsx)(s.PY1.span, {
      ref: i2,
      className: a2,
      "aria-hidden": !o2 || void 0,
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${E.soft}px)` },
      animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
      exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.3em",
        filter: `blur(${E.subtle}px)`,
        transition: { duration: C.fast, ease: L }
      },
      transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A },
      children: e2
    });
  }
  function q({ children: e2, className: a2 }) {
    let t2 = !!(0, o.I)();
    return (0, n.jsx)("span", {
      className: [O().swap, a2].filter(Boolean).join(" "),
      children: (0, n.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          U,
          { className: O().swapText, reduce: t2, children: e2 },
          e2
        )
      })
    });
  }
  function J({ children: e2, className: a2 }) {
    let t2 = (0, o.I)(), r2 = (0, i.useRef)(null), [l2, c2] = (0, i.useState)("auto");
    return (0, i.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => c2(e3.offsetHeight));
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, n.jsx)(s.PY1.div, {
      className: [O().morph, a2].filter(Boolean).join(" "),
      initial: false,
      animate: { height: l2 },
      transition: t2 ? { duration: 0 } : P.smooth,
      children: (0, n.jsx)("div", {
        ref: r2,
        className: O().morphInner,
        children: e2
      })
    });
  }
  function K({ step: e2, children: a2 }) {
    let t2 = (0, o.I)(), r2 = (0, i.useRef)(null), l2 = (0, i.useRef)(0), u2 = (0, c.d)("auto");
    return (0, i.useLayoutEffect)(() => {
      l2.current = performance.now() + 700;
    }, [e2]), (0, i.useEffect)(() => {
      let e3, a3 = r2.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let n2 = false, i2 = new ResizeObserver(() => {
        let i3 = a3.offsetHeight;
        if (e3?.stop(), !n2 || t2 || performance.now() > l2.current) {
          n2 = true, u2.jump(i3);
          return;
        }
        e3 = (0, d.i)(u2, i3, P.smooth);
      });
      return i2.observe(a3), () => {
        i2.disconnect(), e3?.stop();
      };
    }, [u2, t2]), (0, n.jsx)(s.PY1.div, {
      className: O().region,
      style: { height: u2 },
      children: (0, n.jsx)("div", {
        ref: r2,
        className: O().regionInner,
        children: a2
      })
    });
  }
  function X({ at: e2, reduce: a2 }) {
    let [t2, r2] = (0, i.useState)({ to: e2, from: e2 });
    t2.to !== e2 && r2({ to: e2, from: t2.to });
    let { from: o2 } = t2;
    return (0, n.jsx)("ol", {
      className: O().progress,
      "aria-label": "Cancellation steps",
      children: B.map((t3, i2) => {
        let r3 = i2 < e2 ? "complete" : i2 === e2 ? "current" : "upcoming";
        return (0, n.jsxs)(
          "li",
          {
            className: O().step,
            "data-status": r3,
            "aria-current": i2 === e2 ? "step" : void 0,
            children: [
              (0, n.jsx)("span", {
                className: O().bar,
                "aria-hidden": "true",
                children: (0, n.jsx)(s.PY1.span, {
                  className: O().barFill,
                  initial: false,
                  animate: { scaleX: +(i2 <= e2) },
                  transition: a2 ? { duration: 0 } : {
                    ...P.smooth,
                    delay: a2 ? 0 : e2 > o2 ? Math.max(0, i2 - o2 - 1) * D.line : Math.max(0, o2 - i2 - 1) * D.line
                  }
                })
              }),
              (0, n.jsxs)("span", {
                className: O().stepLabel,
                children: [
                  t3,
                  "complete" === r3 && (0, n.jsx)("span", {
                    className: O().srOnly,
                    children: ", done"
                  })
                ]
              })
            ]
          },
          t3
        );
      })
    });
  }
  function Z() {
    let e2 = (0, o.I)();
    return (0, n.jsx)("svg", {
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, n.jsx)(s.PY1.path, {
        d: "M4.5 12.5l5 5L19.5 7",
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: e2 ? { duration: 0 } : {
          pathLength: { duration: 0.34, ease: A, delay: 0.14 },
          opacity: { duration: 0.05, delay: 0.14 }
        }
      })
    });
  }
  function Q({ rows: e2, note: a2 }) {
    let t2 = (0, o.I)();
    return (0, n.jsxs)("div", {
      className: O().receipt,
      children: [
        (0, n.jsx)(s.PY1.span, {
          className: O().mark,
          "aria-hidden": "true",
          initial: { scale: 0.6, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: t2 ? { duration: 0 } : { scale: P.snappy, opacity: { duration: C.fast } },
          children: (0, n.jsx)(Z, {})
        }),
        (0, n.jsx)("dl", {
          className: O().rows,
          children: e2.map(
            ([e3, a3], i2) => (0, n.jsxs)(
              s.PY1.div,
              {
                className: O().row,
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A, delay: 0.12 + i2 * D.item },
                children: [
                  (0, n.jsx)("dt", { children: e3 }),
                  (0, n.jsx)("dd", { children: a3 })
                ]
              },
              e3
            )
          )
        }),
        a2 ? (0, n.jsx)("p", { className: O().footnote, children: a2 }) : null
      ]
    });
  }
  function G() {
    let e2 = (0, i.useId)(), a2 = (0, i.useId)(), t2 = !!(0, o.I)(), [r2, c2] = (0, i.useState)("reason"), [d2, p2] = (0, i.useState)(1), [h2, m2] = (0, i.useState)(null), [T2, S2] = (0, i.useState)(""), [Y2, B2] = (0, i.useState)(2), [U2, Z2] = (0, i.useState)("idle"), [G2, ea2] = (0, i.useState)(false), [et, en] = (0, i.useState)(false), [ei, er] = (0, i.useState)("stayed"), [es, eo] = (0, i.useState)("idle"), [el, ec] = (0, i.useState)(""), [ed, eu] = (0, i.useState)(0), ep = (0, i.useRef)(/* @__PURE__ */ new Map()), eh = (0, i.useRef)(null), em = (0, i.useRef)(/* @__PURE__ */ new Set());
    (0, i.useEffect)(() => {
      let e3 = eh.current;
      e3 && (eh.current = null, document.getElementById(e3)?.focus({ preventScroll: true }));
    }), (0, i.useEffect)(() => {
      let e3 = em.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let ef = (e3, a3) => {
      let t3 = window.setTimeout(() => {
        em.current.delete(t3), e3();
      }, a3);
      em.current.add(t3);
    }, ex = T2.trim(), e_ = h2 ? (function(e3, a3, t3) {
      if ("usage" === e3) {
        let e4 = 1 === a3 ? "month" : "months";
        return {
          title: "Pause instead of cancelling",
          lead: "Stop billing while things are quiet. Projects, members and integrations stay exactly where they are.",
          figure: { value: a3, unit: e4 },
          facts: [
            `Skips ${1 === a3 ? "the Oct 14 invoice" : `${a3} invoices`}, saving ${F.format(96 * a3)}`,
            `Billing resumes on ${I[a3 - 1]}`,
            "Resume early any time from Billing"
          ],
          accept: `Pause for ${a3} ${e4}`,
          done: {
            title: `Paused until ${I[a3 - 1].replace(/, \d+$/, "")}`,
            lead: `No charges until ${I[a3 - 1]}. We'll remind ${R} a week before billing resumes.`,
            rows: [
              ["Paused from", "Oct 14, 2026"],
              ["Billing resumes", I[a3 - 1]],
              ["Saved while paused", F.format(96 * a3)]
            ],
            badge: `Paused until ${I[a3 - 1].replace(/, \d+$/, "")}`,
            tone: "info",
            announce: `Plan paused for ${a3} ${e4}. Billing resumes on ${I[a3 - 1]}.`
          }
        };
      }
      return "feature" === e3 ? {
        title: "Tell our product lead what's missing",
        lead: "Emma reads every note and replies within one business day. October is on us while you wait.",
        figure: {
          prefix: "$",
          value: 0,
          unit: "for October",
          was: "$96"
        },
        facts: [
          "Your Oct 14 invoice is waived",
          "Emma replies by Wednesday, Sep 23",
          "Early access if it's already on the roadmap"
        ],
        accept: "Claim free month",
        done: {
          title: "October is on us",
          lead: t3 ? "Emma has your note and will reply by Wednesday. Your Oct 14 invoice is waived." : "Emma will email you by Wednesday to hear what's missing. Your Oct 14 invoice is waived.",
          rows: [
            ["Oct 14 invoice", "$0.00"],
            ["Note sent to", "Emma Collins"],
            ["Reply by", "Sep 23"]
          ],
          badge: "October waived",
          tone: "success",
          announce: "October invoice waived and your note sent to Emma Collins."
        }
      } : "switching" === e3 ? {
        title: "Keep your history on Starter",
        lead: "Moving tools takes a while. Starter keeps every project searchable for less than a third of the price.",
        figure: {
          prefix: "$",
          value: 29,
          unit: "a month",
          was: "$96"
        },
        facts: [
          "All 42 projects and their history stay",
          "3 editor seats, everyone else becomes a viewer",
          "Saves $67 a month from Oct 14"
        ],
        accept: "Switch to Starter",
        done: {
          title: "Starter starts on Oct 14",
          lead: "Your team keeps working on Team until then. From Oct 14 the invoice is $29.",
          rows: [
            ["Plan from Oct 14", "Starter"],
            ["New price", "$29 a month"],
            ["Projects kept", "42"]
          ],
          badge: "Starter from Oct 14",
          tone: "info",
          announce: "Moving to Starter on Oct 14 at $29 a month."
        }
      } : {
        title: "Stay for 30% less",
        lead: "Keep every project, seat and integration for $67.20 a month through the end of the year.",
        figure: {
          prefix: "$",
          value: 67.2,
          decimals: 2,
          unit: "a month",
          was: "$96"
        },
        facts: [
          "Applies to your Oct, Nov and Dec invoices",
          "Saves $86.40 across the three months",
          "Returns to $96 a month on Jan 14, 2027"
        ],
        accept: "Apply 30% off",
        done: {
          title: "30% off is applied",
          lead: "Your next three invoices drop to $67.20. Nothing else about your workspace changes.",
          rows: [
            ["Next invoice, Oct 14", "$67.20"],
            ["Discount ends", "Jan 13, 2027"],
            ["Saved in total", "$86.40"]
          ],
          badge: "30% off until Jan 14",
          tone: "success",
          announce: "30% off applied to the next three invoices."
        }
      };
    })(h2, Y2, ex) : null, ey = "offer" === r2 && "applied" === U2, ej = "applying" === U2 || et && "confirm" === r2, ew = ey ? 3 : W[r2], eg = et ? { text: "Ends Oct 14", tone: "warning" } : ey && e_ ? { text: e_.done.badge, tone: e_.done.tone } : { text: "Renews Oct 14", tone: "neutral" }, ev = M.find((e3) => e3.id === h2);
    function eb(a3, t3, n2) {
      p2(t3), "reason" === a3 && eu((e3) => e3 + 1), c2(a3), ec(n2), eh.current = `${e2}-${a3}`;
    }
    function eN(e3) {
      let a3 = M.map((e4) => e4.id), t3 = a3.indexOf(e3.target.dataset.reason), n2 = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e3.key], i2 = "Home" === e3.key ? a3[0] : "End" === e3.key ? a3[a3.length - 1] : n2 ? a3[(Math.max(t3, 0) + n2 + a3.length) % a3.length] : void 0;
      i2 && (e3.preventDefault(), m2(i2), ep.current.get(i2)?.focus());
    }
    function e$(e3) {
      let a3 = Math.min(3, Math.max(1, Y2 + e3));
      a3 !== Y2 && "idle" === U2 && (B2(a3), ec(
        `Pause for ${a3} ${1 === a3 ? "month" : "months"}. Billing resumes on ${I[a3 - 1]}.`
      ));
    }
    function ek(e3) {
      let a3 = {
        ArrowUp: 1,
        ArrowRight: 1,
        ArrowDown: -1,
        ArrowLeft: -1,
        Home: -2,
        End: 2
      }[e3.key];
      a3 && (e3.preventDefault(), e$(a3));
    }
    function eT() {
      if (!e_ || "idle" !== U2) return;
      let a3 = e_.done.announce;
      Z2("applying"), ef(() => {
        Z2("applied"), ec(a3), eh.current = `${e2}-undo`;
      }, 900);
    }
    function eS() {
      Z2("idle"), ec("Offer removed. Your plan is back to $96 a month."), eh.current = `${e2}-accept`;
    }
    function eO() {
      en(true), ea2(false), ec("Team plan cancelled."), ef(
        () => eb(
          "cancelled",
          1,
          "Your plan ends on Oct 14. Here is what happens next."
        ),
        900
      );
    }
    function eP() {
      "idle" === es && (eo("working"), ef(() => {
        eo("done"), ec(`Export requested. A download link is on its way to ${R}.`);
      }, 1100));
    }
    function eC() {
      er("reactivated"), en(false), eo("idle"), eb("kept", 1, "Plan reactivated. It renews on Oct 14.");
    }
    function eY() {
      m2(null), S2(""), B2(2), Z2("idle"), en(false), eo("idle"), eb("reason", -1, "Step 1 of 3: why are you cancelling?");
    }
    let eE = (a3) => (0, n.jsx)("h2", {
      id: `${e2}-${r2}`,
      tabIndex: -1,
      className: O().title,
      children: a3
    }), eD = (e3) => ({
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A, delay: 0.1 + e3 * D.line }
    }), eA = {
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: `blur(${E.soft}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: -4,
        filter: `blur(${E.subtle}px)`,
        transition: { duration: C.exit, ease: L }
      },
      transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A, delay: 0.06 }
    }, eL = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: t2 ? 0 : C.instant } },
      transition: { duration: t2 ? 0 : C.fast }
    }, eR = { dir: d2, reduce: t2 };
    return (0, n.jsx)("section", {
      className: O().root,
      "aria-label": "Cancel subscription",
      children: (0, n.jsxs)("div", {
        className: O().card,
        children: [
          (0, n.jsxs)("div", {
            className: O().top,
            children: [
              (0, n.jsxs)("div", {
                className: O().plan,
                children: [
                  (0, n.jsx)("p", {
                    className: O().planName,
                    children: "Team plan"
                  }),
                  (0, n.jsx)("p", {
                    className: O().planMeta,
                    children: "Halcyon Studio \xB7 8 seats \xB7 $96 a month"
                  })
                ]
              }),
              (0, n.jsx)(b.E, { size: "sm", tone: eg.tone, children: eg.text })
            ]
          }),
          (0, n.jsx)(X, { at: ew, reduce: t2 }),
          (0, n.jsx)(K, {
            step: r2,
            children: (0, n.jsx)(l.N, {
              mode: "popLayout",
              initial: false,
              custom: eR,
              children: (0, n.jsx)(
                s.PY1.div,
                {
                  className: O().view,
                  custom: eR,
                  variants: ee,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  children: (function() {
                    if ("reason" === r2)
                      return (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)("header", {
                            className: O().head,
                            children: [
                              eE("Why are you cancelling?"),
                              (0, n.jsx)("p", {
                                className: O().lead,
                                children: "Your answer shapes what we suggest next. Nothing changes until you confirm on the last step."
                              })
                            ]
                          }),
                          (0, n.jsx)(u.o, {
                            id: a2,
                            children: (0, n.jsx)("div", {
                              className: O().reasons,
                              role: "radiogroup",
                              "aria-labelledby": `${e2}-reason`,
                              onKeyDown: eN,
                              children: M.map((e3, a3) => {
                                let i2 = h2 === e3.id;
                                return (0, n.jsxs)(
                                  "button",
                                  {
                                    ref: (a4) => {
                                      a4 ? ep.current.set(e3.id, a4) : ep.current.delete(e3.id);
                                    },
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": i2,
                                    tabIndex: i2 || !h2 && 0 === a3 ? 0 : -1,
                                    "data-reason": e3.id,
                                    className: O().reason,
                                    onClick: () => m2(e3.id),
                                    children: [
                                      i2 && (0, n.jsx)(s.PY1.span, {
                                        layoutId: `reason-highlight-${ed}`,
                                        className: O().highlight,
                                        style: { borderRadius: 13 },
                                        transition: t2 ? { duration: 0 } : P.morph
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: O().reasonHead,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: O().reasonLabel,
                                            children: e3.label
                                          }),
                                          (0, n.jsx)("span", {
                                            className: O().radio,
                                            "aria-hidden": "true"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("span", {
                                        className: O().reasonDetail,
                                        children: e3.detail
                                      })
                                    ]
                                  },
                                  e3.id
                                );
                              })
                            })
                          }),
                          (0, n.jsx)(l.N, {
                            initial: false,
                            children: ev && (0, n.jsx)(
                              s.PY1.div,
                              {
                                className: O().noteSlot,
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: t2 ? { duration: 0 } : {
                                  height: P.smooth,
                                  opacity: {
                                    duration: C.standard,
                                    ease: A
                                  }
                                },
                                children: (0, n.jsx)("div", {
                                  className: O().note,
                                  children: (0, n.jsx)(k.T, {
                                    id: `${e2}-note`,
                                    label: "Add a note (optional)",
                                    description: ev.prompt,
                                    placeholder: ev.placeholder,
                                    rows: 3,
                                    maxLength: 280,
                                    value: T2,
                                    onChange: (e3) => S2(e3.target.value)
                                  })
                                })
                              },
                              "note"
                            )
                          }),
                          (0, n.jsx)("div", {
                            className: O().actions,
                            children: (0, n.jsx)("div", {
                              className: O().actionsEnd,
                              children: (0, n.jsx)(N.$, {
                                disabled: !h2,
                                onClick: () => {
                                  h2 && (Z2("idle"), eb(
                                    "offer",
                                    1,
                                    "Step 2 of 3: an offer based on your reason."
                                  ));
                                },
                                children: "Continue"
                              })
                            })
                          })
                        ]
                      });
                    if ("offer" === r2 && e_ && h2) {
                      let a3 = "usage" === h2;
                      return (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)("header", {
                            className: O().head,
                            children: [
                              (0, n.jsx)(J, {
                                children: eE(
                                  (0, n.jsx)(q, {
                                    children: ey ? e_.done.title : e_.title
                                  })
                                )
                              }),
                              (0, n.jsx)(J, {
                                children: (0, n.jsx)("p", {
                                  className: O().lead,
                                  children: (0, n.jsx)(q, {
                                    children: ey ? e_.done.lead : e_.lead
                                  })
                                })
                              })
                            ]
                          }),
                          (0, n.jsx)(J, {
                            className: O().panel,
                            children: (0, n.jsx)(l.N, {
                              mode: "popLayout",
                              initial: false,
                              children: ey ? (0, n.jsx)(
                                s.PY1.div,
                                {
                                  ...eA,
                                  children: (0, n.jsx)(Q, {
                                    rows: e_.done.rows
                                  })
                                },
                                "done"
                              ) : (0, n.jsxs)(
                                s.PY1.div,
                                {
                                  className: O().offerBody,
                                  ...eA,
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className: O().figureRow,
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className: O().figure,
                                          role: a3 ? "spinbutton" : void 0,
                                          tabIndex: a3 ? 0 : void 0,
                                          "aria-label": a3 ? "Pause length" : void 0,
                                          "aria-valuemin": a3 ? 1 : void 0,
                                          "aria-valuemax": a3 ? 3 : void 0,
                                          "aria-valuenow": a3 ? Y2 : void 0,
                                          "aria-valuetext": a3 ? `${Y2} ${e_.figure.unit}, resumes ${I[Y2 - 1]}` : void 0,
                                          onKeyDown: a3 ? ek : void 0,
                                          children: [
                                            (0, n.jsx)("span", {
                                              className: O().figureNum,
                                              children: (0, n.jsx)(g.q, {
                                                value: e_.figure.value,
                                                prefix: e_.figure.prefix,
                                                decimals: e_.figure.decimals,
                                                animateOnView: true
                                              })
                                            }),
                                            (0, n.jsx)(q, {
                                              className: O().figureUnit,
                                              children: e_.figure.unit
                                            })
                                          ]
                                        }),
                                        a3 ? (0, n.jsxs)("div", {
                                          className: O().monthControls,
                                          children: [
                                            (0, n.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              className: O().iconButton,
                                              "aria-label": "Pause one month less",
                                              "aria-disabled": 1 === Y2 || ej || void 0,
                                              onClick: () => e$(-1),
                                              children: (0, n.jsx)(
                                                f.A,
                                                { ...z }
                                              )
                                            }),
                                            (0, n.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              className: O().iconButton,
                                              "aria-label": "Pause one month more",
                                              "aria-disabled": 3 === Y2 || ej || void 0,
                                              onClick: () => e$(1),
                                              children: (0, n.jsx)(
                                                x.A,
                                                { ...z }
                                              )
                                            })
                                          ]
                                        }) : e_.figure.was ? (0, n.jsxs)("p", {
                                          className: O().was,
                                          children: [
                                            (0, n.jsx)("span", {
                                              className: O().srOnly,
                                              children: "Instead of "
                                            }),
                                            (0, n.jsx)("s", {
                                              children: e_.figure.was
                                            })
                                          ]
                                        }) : null
                                      ]
                                    }),
                                    "feature" === h2 && (0, n.jsxs)("div", {
                                      className: O().person,
                                      children: [
                                        (0, n.jsx)(v.e, {
                                          name: "Emma Collins",
                                          src: "media/people/emma-collins.svg"
                                        }),
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsxs)("p", {
                                              className: O().personName,
                                              children: [
                                                "Emma Collins ",
                                                (0, n.jsx)("span", {
                                                  children: "Product lead"
                                                })
                                              ]
                                            }),
                                            (0, n.jsx)("p", {
                                              className: O().quote,
                                              children: ex ? `Your note: \u201C${ex}\u201D` : "No note yet. Go back to add one, or Emma will ask when she replies."
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, n.jsx)("ul", {
                                      className: O().facts,
                                      children: e_.facts.map(
                                        (e3, a4) => (0, n.jsxs)(
                                          "li",
                                          {
                                            children: [
                                              (0, n.jsx)(_.A, {
                                                size: 16,
                                                strokeWidth: 2,
                                                "aria-hidden": "true"
                                              }),
                                              (0, n.jsx)(q, {
                                                children: e3
                                              })
                                            ]
                                          },
                                          a4
                                        )
                                      )
                                    })
                                  ]
                                },
                                "offer"
                              )
                            })
                          }),
                          (0, n.jsxs)("div", {
                            className: O().actions,
                            children: [
                              (0, n.jsx)(l.N, {
                                mode: "popLayout",
                                initial: false,
                                children: !ey && (0, n.jsx)(
                                  s.PY1.div,
                                  {
                                    ...eL,
                                    children: (0, n.jsxs)(N.$, {
                                      variant: "ghost",
                                      className: O().inert,
                                      "aria-disabled": ej || void 0,
                                      onClick: () => {
                                        ej || eb(
                                          "reason",
                                          -1,
                                          "Step 1 of 3: why are you cancelling?"
                                        );
                                      },
                                      children: [
                                        (0, n.jsx)(y.A, { ...z }),
                                        "Back"
                                      ]
                                    })
                                  },
                                  "back"
                                )
                              }),
                              (0, n.jsx)(l.N, {
                                mode: "popLayout",
                                initial: false,
                                children: ey ? (0, n.jsx)(
                                  s.PY1.div,
                                  {
                                    className: O().actionsEnd,
                                    ...eL,
                                    children: (0, n.jsxs)(N.$, {
                                      id: `${e2}-undo`,
                                      variant: "secondary",
                                      onClick: eS,
                                      children: [
                                        (0, n.jsx)(j.A, { ...z }),
                                        "Undo"
                                      ]
                                    })
                                  },
                                  "undo"
                                ) : (0, n.jsxs)(
                                  s.PY1.div,
                                  {
                                    className: O().actionsEnd,
                                    ...eL,
                                    children: [
                                      (0, n.jsx)(N.$, {
                                        variant: "ghost",
                                        className: O().inert,
                                        "aria-disabled": ej || void 0,
                                        onClick: () => {
                                          ej || eb(
                                            "confirm",
                                            1,
                                            "Step 3 of 3: confirm cancellation."
                                          );
                                        },
                                        children: "Continue to cancel"
                                      }),
                                      (0, n.jsx)(N.$, {
                                        id: `${e2}-accept`,
                                        loading: "applying" === U2,
                                        onClick: eT,
                                        children: e_.accept
                                      })
                                    ]
                                  },
                                  "choose"
                                )
                              })
                            ]
                          })
                        ]
                      });
                    }
                    return "confirm" === r2 ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("header", {
                          className: O().head,
                          children: [
                            eE("Before you cancel"),
                            (0, n.jsx)("p", {
                              className: O().lead,
                              children: "Your team keeps full access until the end of this billing period. Here is what changes after that."
                            })
                          ]
                        }),
                        (0, n.jsx)("ul", {
                          className: O().impacts,
                          children: H.map(
                            ({ Icon: e3, title: a3, detail: t3, danger: i2 }, r3) => (0, n.jsxs)(
                              s.PY1.li,
                              {
                                className: O().impact,
                                "data-danger": i2 || void 0,
                                ...eD(r3),
                                children: [
                                  (0, n.jsx)(e3, {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("p", {
                                        className: O().impactTitle,
                                        children: a3
                                      }),
                                      (0, n.jsx)("p", {
                                        className: O().impactDetail,
                                        children: t3
                                      })
                                    ]
                                  })
                                ]
                              },
                              a3
                            )
                          )
                        }),
                        (0, n.jsxs)("div", {
                          className: O().actions,
                          children: [
                            (0, n.jsxs)(N.$, {
                              variant: "ghost",
                              className: O().inert,
                              "aria-disabled": ej || void 0,
                              onClick: () => {
                                ej || eb(
                                  "offer",
                                  -1,
                                  "Step 2 of 3: an offer based on your reason."
                                );
                              },
                              children: [(0, n.jsx)(y.A, { ...z }), "Back"]
                            }),
                            (0, n.jsxs)("div", {
                              className: O().actionsEnd,
                              children: [
                                (0, n.jsx)(N.$, {
                                  variant: "secondary",
                                  className: O().inert,
                                  "aria-disabled": ej || void 0,
                                  onClick: () => {
                                    ej || (er("stayed"), eb(
                                      "kept",
                                      1,
                                      "Nothing changed. Your Team plan stays active."
                                    ));
                                  },
                                  children: "Keep my plan"
                                }),
                                (0, n.jsx)($.j, {
                                  label: "Hold to cancel plan",
                                  confirmedLabel: "Plan cancelled",
                                  confirmed: et,
                                  onConfirm: eO,
                                  onHoldChange: ea2
                                })
                              ]
                            })
                          ]
                        }),
                        (0, n.jsx)("p", {
                          className: O().hint,
                          "aria-hidden": "true",
                          children: (0, n.jsx)(q, {
                            children: et ? "Cancelled. Wrapping up" : G2 ? "Keep holding" : "Hold for 1.2 seconds"
                          })
                        })
                      ]
                    }) : "cancelled" === r2 ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("header", {
                          className: O().head,
                          children: [
                            eE("Your plan ends on Oct 14"),
                            (0, n.jsxs)("p", {
                              className: O().lead,
                              children: [
                                "Thanks for building with us. A confirmation is on its way to ",
                                R,
                                "."
                              ]
                            })
                          ]
                        }),
                        (0, n.jsx)("h3", {
                          className: O().subhead,
                          children: "What happens next"
                        }),
                        (0, n.jsx)("ol", {
                          className: O().timeline,
                          children: V.map(
                            (e3, a3) => (0, n.jsxs)(
                              s.PY1.li,
                              {
                                className: O().event,
                                "data-done": e3.done || void 0,
                                ...eD(a3),
                                children: [
                                  (0, n.jsx)("span", {
                                    className: O().eventDate,
                                    children: e3.date
                                  }),
                                  (0, n.jsx)("span", {
                                    className: O().eventDot,
                                    "aria-hidden": "true",
                                    children: e3.done && (0, n.jsx)(_.A, {
                                      size: 10,
                                      strokeWidth: 3
                                    })
                                  }),
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsxs)("p", {
                                        className: O().eventTitle,
                                        children: [
                                          e3.title,
                                          e3.done && (0, n.jsx)("span", {
                                            className: O().srOnly,
                                            children: ", done"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("p", {
                                        className: O().eventDetail,
                                        children: e3.detail
                                      })
                                    ]
                                  })
                                ]
                              },
                              e3.title
                            )
                          )
                        }),
                        (0, n.jsxs)("div", {
                          className: O().actions,
                          children: [
                            (0, n.jsx)(N.$, {
                              variant: "secondary",
                              loading: "working" === es,
                              onClick: eP,
                              children: "done" === es ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(_.A, { ...z }),
                                  "Export requested"
                                ]
                              }) : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(w.A, { ...z }),
                                  "Export data"
                                ]
                              })
                            }),
                            (0, n.jsx)("div", {
                              className: O().actionsEnd,
                              children: (0, n.jsxs)(N.$, {
                                variant: "secondary",
                                onClick: eC,
                                children: [
                                  (0, n.jsx)(j.A, { ...z }),
                                  "Reactivate plan"
                                ]
                              })
                            })
                          ]
                        })
                      ]
                    }) : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("header", {
                          className: O().head,
                          children: [
                            eE(
                              "stayed" === ei ? "Your Team plan stays active" : "Your plan is active again"
                            ),
                            (0, n.jsx)("p", {
                              className: O().lead,
                              children: "stayed" === ei ? "Nothing changed. Your projects, members and integrations carry on as before." : "The cancellation is undone and nothing will be deleted."
                            })
                          ]
                        }),
                        (0, n.jsx)("div", {
                          className: O().panel,
                          children: (0, n.jsx)(Q, {
                            rows: [
                              ["Plan", "Team, 8 seats"],
                              ["Next invoice", "Oct 14, 2026"],
                              ["Amount", "$96.00"]
                            ],
                            note: "stayed" === ei ? "No changes were made." : void 0
                          })
                        }),
                        (0, n.jsx)("div", {
                          className: O().actions,
                          children: (0, n.jsx)("div", {
                            className: O().actionsEnd,
                            children: (0, n.jsxs)(N.$, {
                              variant: "ghost",
                              onClick: eY,
                              children: [
                                (0, n.jsx)(j.A, { ...z }),
                                "Start over"
                              ]
                            })
                          })
                        })
                      ]
                    });
                  })()
                },
                r2
              )
            })
          }),
          (0, n.jsx)("p", {
            className: O().srOnly,
            role: "status",
            "aria-live": "polite",
            children: el
          })
        ]
      })
    });
  }
  let ee = {
    enter: ({ dir: e2, reduce: a2 }) => a2 ? { opacity: 0 } : { opacity: 0, x: 28 * e2, filter: `blur(${E.soft}px)` },
    center: ({ reduce: e2 }) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: e2 ? { duration: 0 } : {
        x: P.smooth,
        opacity: { duration: C.standard, ease: A },
        filter: { duration: C.standard, ease: A }
      }
    }),
    exit: ({ dir: e2, reduce: a2 }) => a2 ? { opacity: 0, transition: { duration: 0 } } : {
      opacity: 0,
      x: -20 * e2,
      filter: `blur(${E.subtle}px)`,
      transition: { duration: C.exit, ease: L }
    }
  }, ea = G;
}

__m(__module,__exports,__require);
});
A.reg(87796, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { T: () => g });
  var i = a(95155), n = a(12115), s = a(18310), r = a(80642), o = a(25354), l = a(7770), c = a(68272), d = a.n(c);
  let u = {
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
  function h({ word: e2 }) {
    let t2 = (0, s.I)(), [a2, c2] = (0, n.useState)({ word: e2, direction: 1 });
    a2.word !== e2 && c2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(a2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), p2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, i.jsx)(r.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, i.jsx)(
          o.PY1.span,
          {
            className: d().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: p2,
            children: (0, i.jsx)(r.N, {
              initial: false,
              mode: "popLayout",
              custom: a2.direction,
              children: (0, i.jsx)(
                o.PY1.span,
                {
                  custom: a2.direction,
                  variants: u,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: p2,
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
    let t2 = (0, s.I)(), a2 = e2.split(" ");
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: d().srOnly, children: e2 }),
        (0, i.jsx)("span", {
          className: d().words,
          "aria-hidden": "true",
          children: (0, i.jsx)(r.N, {
            initial: false,
            mode: "popLayout",
            children: a2.map(
              (e3, n2) => (0, i.jsxs)(
                o.PY1.span,
                {
                  className: d().word,
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
                      duration: l.T.duration.fast,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, i.jsx)(h, { word: e3 }) : e3,
                    n2 < a2.length - 1 ? " " : null
                  ]
                },
                `${n2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function p({ id: e2, text: t2, className: a2, alert: n2 }) {
    return (0, i.jsx)(r.N, {
      initial: false,
      children: t2 ? (0, i.jsx)(f, { id: e2, text: t2, className: a2, alert: n2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: a2, alert: r2 }) {
    let c2 = (0, s.I)(), u2 = (0, n.useRef)(null), [h2, p2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let e3 = u2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && p2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.jsx)(o.PY1.span, {
      className: d().messageSlot,
      initial: !c2 && { height: 0, opacity: 0 },
      animate: { height: h2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: c2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: c2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, i.jsx)(o.PY1.span, {
        ref: u2,
        id: e2,
        className: a2,
        role: r2 ? "alert" : void 0,
        initial: !c2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: c2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, i.jsx)(m, { text: t2 })
      })
    });
  }
  let g = (0, n.forwardRef)(function({ label: e2, description: t2, error: a2, id: s2, className: r2, ...o2 }, l2) {
    let c2 = (0, n.useId)(), u2 = s2 ?? c2, h2 = t2 ? `${u2}-description` : void 0, m2 = a2 ? `${u2}-error` : void 0;
    return (0, i.jsxs)("div", {
      className: d().field,
      children: [
        (0, i.jsx)("label", { htmlFor: u2, children: e2 }),
        (0, i.jsx)("textarea", {
          ...o2,
          id: u2,
          ref: l2,
          className: [d().control, r2].filter(Boolean).join(" "),
          "aria-invalid": !!a2 || o2["aria-invalid"],
          "aria-describedby": [o2["aria-describedby"], h2, m2].filter(Boolean).join(" ") || void 0
        }),
        (0, i.jsx)(p, { id: h2, text: t2, className: d().hint }),
        (0, i.jsx)(p, { id: m2, text: a2, className: d().error, alert: true })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.regCss(88542, ".button{--hold-ink:var(--foreground);--hold-fill:var(--accent);--hold-on-fill:var(--accent-foreground);--hold-border:var(--border-strong);position:relative;display:inline-flex;min-height:var(--control-height-md);align-items:center;justify-content:center;padding:0 var(--space-5);border:1px solid var(--hold-border);border-radius:var(--radius-control);background:var(--surface);color:var(--hold-ink);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.button[data-tone=danger]{--hold-ink:var(--danger);--hold-fill:var(--danger);--hold-on-fill:var(--background);--hold-border:color-mix(in oklab,var(--danger) 32%,var(--border))}\n.button[data-tone=neutral]{--hold-ink:var(--foreground);--hold-fill:var(--foreground);--hold-on-fill:var(--background);--hold-border:var(--border-strong)}\n@media (hover:hover) and (pointer:fine){.button:not(:disabled):not([aria-disabled=true]):hover{background:color-mix(in oklab,var(--hold-fill) 6%,var(--surface))}\n.button[aria-disabled=true]{cursor:default}\n.button:disabled{cursor:not-allowed;opacity:.5}\n@media (prefers-reduced-motion:reduce){.button{transition:none}\n.face{display:inline-flex;align-items:center;gap:var(--space-2);white-space:nowrap}\n.fill{position:absolute;inset:-1px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-control);background:var(--hold-fill);color:var(--hold-on-fill);pointer-events:none}\n.iconSlot{display:grid;width:18px;height:18px;flex:none;place-items:center}\n.iconPhase{display:grid;grid-area:1/1;place-items:center}\n.iconPhase svg{width:18px;height:18px}\n.labelFrame{position:relative;display:inline-flex;min-width:0;clip-path:inset(-.6em -3px)}\n.label{display:block;white-space:nowrap}\n.measure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"button":"button","face":"face","fill":"fill","iconSlot":"iconSlot","iconPhase":"iconPhase","labelFrame":"labelFrame","label":"label","measure":"measure","srOnly":"srOnly"});
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
A.cssFor("cancel-flow", [22346,68272,73928,88542]);
A.item("cancel-flow", {entry:75976, export:"CancelFlow", kind:"block", tier:"pro", unresolved:[]});
})();