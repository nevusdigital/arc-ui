/* agent-plan (pro component) */
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
A.regCss(7947, ".demo{display:grid;width:100%;max-width:560px;margin-inline:auto}", {"demo":"demo"});
A.regCss(13658, ".agent-plan_root__Pttym{--ap-pad:20px;--ap-lead:20px;--ap-gap:12px;--ap-trail:48px;--ap-row-radius:14px;position:relative;container-type:inline-size;width:100%;min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:20px;letter-spacing:var(--tracking-body)}.agent-plan_header__yekzY{position:relative;display:grid;gap:2px;padding:16px var(--ap-pad) 15px;border-bottom:1px solid var(--border)}.agent-plan_headRow__IB66o{display:flex;min-width:0;align-items:center;gap:var(--ap-gap)}.agent-plan_mark__fnwm4{display:grid;flex:none;width:var(--ap-lead);height:20px;place-items:center}.agent-plan_mark__fnwm4 svg{width:16px;height:16px}.agent-plan_heading__jJ_wf{flex:1;min-width:0;margin:0;overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:20px;letter-spacing:var(--tracking-body);text-overflow:ellipsis;white-space:nowrap}.agent-plan_count__Pjzjh{color:var(--text-secondary);font-weight:400}.agent-plan_headMeta__kX9r6{display:inline-grid;flex:none;justify-items:end;color:var(--text-muted);font-size:var(--text-xs);line-height:20px;font-variant-numeric:tabular-nums;white-space:nowrap}.agent-plan_headMeta__kX9r6>*{grid-area:1/1}.agent-plan_goal__kcsJD{margin:0;padding-left:calc(var(--ap-lead) + var(--ap-gap));color:var(--text-secondary);text-wrap:pretty}.agent-plan_goalFlush__3QXjC{padding-left:0}.agent-plan_progress__bwc5I{position:absolute;right:0;bottom:-1px;left:0;height:2px;overflow:hidden;pointer-events:none}.agent-plan_fill___dmwX{display:block;height:100%;background:var(--accent);transform-origin:0 50%}.agent-plan_roll__kkX5L{display:inline-grid;justify-items:end;font-variant-numeric:tabular-nums;transition:width var(--duration-standard) var(--ease-standard)}.agent-plan_rollValue__K7EAh{grid-area:1/1}.agent-plan_listWrap__KQVHh{padding:6px 8px}.agent-plan_list__EDgEH{display:grid;margin:0;padding:0;list-style:none}.agent-plan_row__PK_SL{position:relative;overflow:hidden;border-radius:var(--ap-row-radius);transition:box-shadow var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.agent-plan_row__PK_SL[data-dragging]{z-index:1;background:var(--surface-raised);box-shadow:var(--shadow-floating)}.agent-plan_rowInner__ZGh8I{display:grid;grid-template-columns:var(--ap-lead) minmax(0,1fr) var(--ap-trail);column-gap:var(--ap-gap);align-items:start;padding:8px 12px}.agent-plan_row__PK_SL[data-fresh]{animation:agent-plan_ap-fresh___88EU 1.8s var(--ease-standard) both}@keyframes agent-plan_ap-fresh___88EU{0%,35%{background-color:color-mix(in oklab,var(--accent) 8%,transparent)}to{background-color:transparent}}.agent-plan_lead__eWW7b{display:grid;height:20px;place-items:center}.agent-plan_lead__eWW7b>*{grid-area:1/1}.agent-plan_glyph__34Wo9{display:grid;width:16px;height:16px;place-items:center}.agent-plan_glyph__34Wo9 svg{display:block;width:16px;height:16px;overflow:visible}.agent-plan_ring__fqQJC{fill:none;stroke:var(--border-strong);stroke-width:1.5}.agent-plan_track__yewjZ{fill:none;stroke:var(--border);stroke-width:1.5}.agent-plan_arc__hIp6i{fill:none;stroke:var(--accent);stroke-width:1.5;stroke-linecap:round}.agent-plan_spin__2HdMt{transform-origin:50% 50%;animation:agent-plan_ap-spin__bIUKR .8s linear infinite}@keyframes agent-plan_ap-spin__bIUKR{to{transform:rotate(1turn)}}.agent-plan_pausedRing__Z8osA{fill:none;stroke:var(--text-muted);stroke-width:1.5}.agent-plan_pausedBars__Oe26g{fill:none;stroke:var(--text-secondary);stroke-width:1.5;stroke-linecap:round}.agent-plan_doneDisc__A0GYD{fill:var(--success)}.agent-plan_failDisc__gFhI_{fill:var(--danger)}.agent-plan_ink__gSumT{fill:none;stroke:var(--surface);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}.agent-plan_inkDot__LeuLu{fill:var(--surface)}.agent-plan_skipRing__AeLov{fill:none;stroke:var(--text-muted);stroke-width:1.5;stroke-dasharray:2.45 2.45}.agent-plan_skipDash___cEEz{fill:none;stroke:var(--text-muted);stroke-width:1.5;stroke-linecap:round}.agent-plan_grip__dPo6g{--focus-outline-offset:-2px;display:grid;width:24px;height:28px;margin:-4px -2px;place-items:center;padding:0;border:0;border-radius:8px;background:none;color:var(--text-muted);cursor:grab;touch-action:none;user-select:none;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.agent-plan_grip__dPo6g:active,.agent-plan_row__PK_SL[data-dragging] .agent-plan_grip__dPo6g{color:var(--foreground);cursor:grabbing}.agent-plan_body__eXoB7{display:grid;min-width:0}.agent-plan_title___se40{position:relative;display:grid;min-width:0}.agent-plan_title___se40[data-value]:after{grid-area:1/1;margin:-4px -8px;padding:4px 8px;content:attr(data-value) \" \";overflow-wrap:anywhere;visibility:hidden;white-space:pre-wrap;pointer-events:none}.agent-plan_field__ecRsV{grid-area:1/1;min-width:0;margin:-4px -8px;padding:4px 8px;overflow:hidden;border:0;border-radius:8px;background:transparent;color:var(--foreground);font:inherit;letter-spacing:inherit;line-height:20px;overflow-wrap:anywhere;white-space:pre-wrap;resize:none;cursor:text;box-shadow:inset 0 0 0 1px transparent;transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}.agent-plan_field__ecRsV::placeholder{color:var(--text-muted);opacity:1}.agent-plan_field__ecRsV:focus{background:var(--surface);box-shadow:inset 0 0 0 1px var(--border-strong)}.agent-plan_titleText__2iUkw{display:block;min-width:0;color:var(--foreground);overflow-wrap:anywhere;transition:color var(--duration-standard) var(--ease-standard)}.agent-plan_row__PK_SL[data-state=done] .agent-plan_titleText__2iUkw{color:var(--text-secondary)}.agent-plan_row__PK_SL[data-state=skipped] .agent-plan_titleText__2iUkw{color:var(--text-muted)}.agent-plan_chunk__0_9X9{animation:agent-plan_ap-chunk__h1FlE .15s var(--ease-enter) both}@keyframes agent-plan_ap-chunk__h1FlE{0%{opacity:0}}.agent-plan_note__V2DCK{display:flex;align-items:center;gap:6px;margin:2px 0 0;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.agent-plan_noteMark__nOCZA{display:grid;flex:none;width:12px;height:12px}.agent-plan_noteMark__nOCZA svg{width:12px;height:12px}.agent-plan_collapse__SQqk5{overflow:hidden}.agent-plan_subs__P18O3{display:grid;margin:0;padding:0;list-style:none}.agent-plan_sub__Yt31d{overflow:hidden}.agent-plan_subInner__ogInj{display:flex;min-width:0;align-items:center;gap:6px;padding-top:4px;color:var(--text-secondary);font-size:var(--text-xs);line-height:16px}.agent-plan_subInner__ogInj svg{flex:none;color:var(--text-muted)}.agent-plan_subText___p763{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.agent-plan_fail__MPTCh{display:grid;justify-items:start;gap:8px;padding-top:6px;padding-bottom:2px}.agent-plan_failText__gbym0{margin:0;color:var(--text-secondary);font-size:var(--text-xs);line-height:16px}.agent-plan_failLabel__g8mma{color:var(--danger);font-weight:500}.agent-plan_failActions__wYCQN{display:flex;flex-wrap:wrap;gap:6px}.agent-plan_mini__TQ1OY{--focus-outline-offset:-2px;display:inline-flex;height:28px;align-items:center;gap:6px;padding:0 10px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-xs);font-weight:500;line-height:16px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}.agent-plan_mini__TQ1OY svg{flex:none}.agent-plan_mini__TQ1OY[data-tone=accent]{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.agent-plan_mini__TQ1OY:active{opacity:.84}.agent-plan_trail__yXvbB{display:grid;height:20px;align-items:center;justify-items:end;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.agent-plan_trailItem__qIZnR{display:grid;grid-area:1/1}.agent-plan_remove__Nb5ii{display:grid;width:24px;height:24px;margin-right:-4px;place-items:center;padding:0;border:0;border-radius:8px;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}.agent-plan_add__oJiu7,.agent-plan_remove__Nb5ii{--focus-outline-offset:-2px;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent}.agent-plan_add__oJiu7{display:grid;width:100%;grid-template-columns:var(--ap-lead) auto;column-gap:var(--ap-gap);align-items:center;justify-content:start;padding:8px 12px;border:0;border-radius:var(--ap-row-radius);color:var(--text-secondary);font:inherit;letter-spacing:inherit;line-height:20px;text-align:left;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.agent-plan_add__oJiu7:active{color:var(--foreground);background:var(--surface-muted)}.agent-plan_empty__JmaeY{margin:0;padding:8px 12px 8px calc(12px + var(--ap-lead) + var(--ap-gap));color:var(--text-muted)}.agent-plan_footWrap__hNMsC{overflow:hidden}.agent-plan_foot__Xp_1O{position:relative;padding:12px var(--ap-pad)}.agent-plan_foot__Xp_1O:before{position:absolute;top:0;right:0;left:0;height:1px;background:var(--border);content:\"\"}.agent-plan_footRow__mCSB6{display:flex;min-height:var(--control-height-sm);flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:8px}.agent-plan_footRow__mCSB6[data-phase=done]{flex-wrap:nowrap;align-items:flex-start;justify-content:space-between}.agent-plan_footRow__mCSB6 .agent-plan_approve__7PqIC{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.agent-plan_footStatus__DFXyx{position:relative;display:grid;flex:1;min-width:0;color:var(--text-secondary)}.agent-plan_footStatus__DFXyx>*{grid-area:1/1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.agent-plan_pauseSlot__6DwQd{display:inline-flex}.agent-plan_summary___uWnS{flex:1;min-width:0;margin:0;padding-block:8px;color:var(--text-secondary);text-wrap:pretty}.agent-plan_summary___uWnS strong{color:var(--foreground);font-weight:500}.agent-plan_srOnly__L05_P{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}@media (hover:hover) and (pointer:fine){.agent-plan_grip__dPo6g:hover{color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.agent-plan_field__ecRsV:hover:not(:focus),.agent-plan_grip__dPo6g:hover,.agent-plan_mini__TQ1OY:hover{background:var(--surface-muted)}}@media (hover:hover) and (pointer:fine){.agent-plan_mini__TQ1OY[data-tone=accent]:hover{background:var(--accent);opacity:.9}}@media (hover:hover) and (pointer:fine){.agent-plan_add__oJiu7:hover,.agent-plan_remove__Nb5ii:hover{color:var(--foreground);background:var(--surface-muted)}}@media (hover:hover) and (pointer:fine){.agent-plan_remove__Nb5ii{opacity:0}}@media (hover:hover) and (pointer:fine){.agent-plan_row__PK_SL:focus-within .agent-plan_remove__Nb5ii,.agent-plan_row__PK_SL:hover .agent-plan_remove__Nb5ii{opacity:1}}@media (prefers-reduced-motion:reduce){.agent-plan_chunk__0_9X9,.agent-plan_row__PK_SL[data-fresh],.agent-plan_spin__2HdMt{animation:none}}@media (prefers-reduced-motion:reduce){.agent-plan_add__oJiu7,.agent-plan_field__ecRsV,.agent-plan_grip__dPo6g,.agent-plan_mini__TQ1OY,.agent-plan_remove__Nb5ii,.agent-plan_roll__kkX5L,.agent-plan_row__PK_SL,.agent-plan_titleText__2iUkw{transition:none}}@media (forced-colors:active){.agent-plan_fill___dmwX{background:Highlight}}@media (forced-colors:active){.agent-plan_doneDisc__A0GYD,.agent-plan_failDisc__gFhI_{fill:CanvasText}}@media (forced-colors:active){.agent-plan_ink__gSumT{stroke:Canvas}}@media (forced-colors:active){.agent-plan_inkDot__LeuLu{fill:Canvas}}", {"root":"agent-plan_root__Pttym","header":"agent-plan_header__yekzY","headRow":"agent-plan_headRow__IB66o","mark":"agent-plan_mark__fnwm4","heading":"agent-plan_heading__jJ_wf","count":"agent-plan_count__Pjzjh","headMeta":"agent-plan_headMeta__kX9r6","goal":"agent-plan_goal__kcsJD","goalFlush":"agent-plan_goalFlush__3QXjC","progress":"agent-plan_progress__bwc5I","fill":"agent-plan_fill___dmwX","roll":"agent-plan_roll__kkX5L","rollValue":"agent-plan_rollValue__K7EAh","listWrap":"agent-plan_listWrap__KQVHh","list":"agent-plan_list__EDgEH","row":"agent-plan_row__PK_SL","rowInner":"agent-plan_rowInner__ZGh8I","ap-fresh":"agent-plan_ap-fresh___88EU","lead":"agent-plan_lead__eWW7b","glyph":"agent-plan_glyph__34Wo9","ring":"agent-plan_ring__fqQJC","track":"agent-plan_track__yewjZ","arc":"agent-plan_arc__hIp6i","spin":"agent-plan_spin__2HdMt","ap-spin":"agent-plan_ap-spin__bIUKR","pausedRing":"agent-plan_pausedRing__Z8osA","pausedBars":"agent-plan_pausedBars__Oe26g","doneDisc":"agent-plan_doneDisc__A0GYD","failDisc":"agent-plan_failDisc__gFhI_","ink":"agent-plan_ink__gSumT","inkDot":"agent-plan_inkDot__LeuLu","skipRing":"agent-plan_skipRing__AeLov","skipDash":"agent-plan_skipDash___cEEz","grip":"agent-plan_grip__dPo6g","body":"agent-plan_body__eXoB7","title":"agent-plan_title___se40","field":"agent-plan_field__ecRsV","titleText":"agent-plan_titleText__2iUkw","chunk":"agent-plan_chunk__0_9X9","ap-chunk":"agent-plan_ap-chunk__h1FlE","note":"agent-plan_note__V2DCK","noteMark":"agent-plan_noteMark__nOCZA","collapse":"agent-plan_collapse__SQqk5","subs":"agent-plan_subs__P18O3","sub":"agent-plan_sub__Yt31d","subInner":"agent-plan_subInner__ogInj","subText":"agent-plan_subText___p763","fail":"agent-plan_fail__MPTCh","failText":"agent-plan_failText__gbym0","failLabel":"agent-plan_failLabel__g8mma","failActions":"agent-plan_failActions__wYCQN","mini":"agent-plan_mini__TQ1OY","trail":"agent-plan_trail__yXvbB","trailItem":"agent-plan_trailItem__qIZnR","remove":"agent-plan_remove__Nb5ii","add":"agent-plan_add__oJiu7","empty":"agent-plan_empty__JmaeY","footWrap":"agent-plan_footWrap__hNMsC","foot":"agent-plan_foot__Xp_1O","footRow":"agent-plan_footRow__mCSB6","approve":"agent-plan_approve__7PqIC","footStatus":"agent-plan_footStatus__DFXyx","pauseSlot":"agent-plan_pauseSlot__6DwQd","summary":"agent-plan_summary___uWnS","srOnly":"agent-plan_srOnly__L05_P"});
A.reg(24860, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var n = i(51811);
  let a = {
    name: "skip-forward",
    size: 24,
    node: [
      ["path", { d: "M21 4v16", key: "7j8fe9" }],
      [
        "path",
        {
          d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
          key: "zs4d6"
        }
      ]
    ]
  };
  a.node;
  let r = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(29298, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { x: () => y });
  var r = n(95155), o = n(5556), l = n(12115), a = n(41369), i = n(24857), d = n(28819), u = n(56260), c = n(78170);
  function s(e2, t2) {
    return e2 < t2.min ? t2.min - e2 : e2 > t2.max ? e2 - t2.max : 0;
  }
  function f(e2, t2) {
    let n2 = Math.max(t2.x.min - e2.x, 0, e2.x - t2.x.max), r2 = Math.max(t2.y.min - e2.y, 0, e2.y - t2.y.max);
    return n2 * n2 + r2 * r2;
  }
  let p = (e2, t2) => e2.max <= t2.min || t2.max <= e2.min, y = (0, l.forwardRef)(function({ children: e2, as: t2 = "ul", axis: n2, onReorder: y2, values: h, ...m }, g) {
    let x = (0, d.M)(() => i.P[t2]), v = (0, l.useRef)(/* @__PURE__ */ new Map()), [k, M] = (0, l.useState)("y"), A = (0, l.useRef)(false), w = (0, l.useRef)(null), b = n2 || k;
    (0, o.V)(
      !!h,
      "Reorder.Group must be provided a values prop",
      "reorder-values"
    );
    let j = new Set(h);
    v.current.forEach((e3, t3) => {
      j.has(t3) || v.current.delete(t3);
    }), (0, l.useEffect)(() => {
      A.current = false;
    });
    let C = { overflowAnchor: "none", ...m.style };
    return (0, r.jsx)(x, {
      ...m,
      style: C,
      ref: (e3) => {
        w.current = e3, "function" == typeof g ? g(e3) : g && (g.current = e3);
      },
      ignoreStrict: true,
      children: (0, r.jsx)(a.T.Provider, {
        value: {
          axis: b,
          groupRef: w,
          registerItem: (e3, t3) => {
            if (v.current.set(e3, t3), !n2) {
              let e4 = (function(e5) {
                let t4 = false, n3 = false;
                for (let r2 = 0; r2 < e5.length; r2++)
                  for (let o2 = r2 + 1; o2 < e5.length; o2++)
                    if (t4 || (t4 = p(e5[r2].x, e5[o2].x)), n3 || (n3 = p(e5[r2].y, e5[o2].y)), t4 && n3)
                      return "xy";
                return t4 ? "x" : "y";
              })(
                h.flatMap((e5) => {
                  let t4 = v.current.get(e5);
                  return t4 ? [t4] : [];
                })
              );
              e4 !== k && M(e4);
            }
          },
          updateOrder: (e3, t3, n3) => {
            if (A.current) return;
            let r2 = h.flatMap((e4) => {
              let t4 = v.current.get(e4);
              return t4 ? [{ value: e4, layout: t4 }] : [];
            }), o2 = (function(e4, t4, n4, r3, o3, l2 = "ltr") {
              let a2 = e4.findIndex((e5) => e5.value === t4);
              if (-1 === a2) return e4;
              if ("xy" === o3) {
                let t5, { layout: r4 } = e4[a2], o4 = {
                  x: (0, u.k)(r4.x.min, r4.x.max, 0.5) + n4.x,
                  y: (0, u.k)(r4.y.min, r4.y.max, 0.5) + n4.y
                }, m3 = (t5 = [], e4.forEach((e5) => {
                  let { min: n5, max: r5 } = e5.layout.y, o5 = t5[t5.length - 1];
                  !o5 || n5 >= o5.max || r5 <= o5.min ? t5.push({ items: [e5], min: n5, max: r5 }) : (o5.items.push(e5), o5.min = Math.min(o5.min, n5), o5.max = Math.max(o5.max, r5));
                }), t5), g3 = m3.find((t6) => t6.items.includes(e4[a2])), x3 = m3.reduce((e5, t6) => s(o4.y, t6) < s(o4.y, e5) ? t6 : e5);
                if (x3 !== g3) {
                  var i2, d2, p2, y3, h2;
                  let t6, n5, r5, c2;
                  return i2 = e4, d2 = a2, p2 = o4.x, y3 = x3, h2 = l2, t6 = i2.filter((e5, t7) => t7 !== d2), r5 = (n5 = y3.items.find((e5) => {
                    let t7 = (0, u.k)(e5.layout.x.min, e5.layout.x.max, 0.5);
                    return "ltr" === h2 ? p2 < t7 : p2 > t7;
                  })) ? t6.indexOf(n5) : t6.indexOf(y3.items[y3.items.length - 1]) + 1, (c2 = [...t6]).splice(r5, 0, i2[d2]), c2.every((e5, t7) => e5 === i2[t7]) ? i2 : c2;
                }
                let v3 = f(o4, r4), k3 = -1, M2 = v3;
                return e4.forEach((e5, t6) => {
                  if (t6 === a2) return;
                  let n5 = f(o4, e5.layout);
                  n5 < M2 && (k3 = t6, M2 = n5);
                }), -1 === k3 ? e4 : (0, c.Pe)(e4, a2, a2 + Math.sign(k3 - a2));
              }
              if (!r3[o3]) return e4;
              let m2 = r3[o3] > 0 ? 1 : -1, g2 = e4[a2 + m2];
              if (!g2) return e4;
              let x2 = e4[a2].layout[o3], v2 = g2.layout[o3], k2 = (0, u.k)(v2.min, v2.max, 0.5);
              return 1 === m2 && x2.max + n4[o3] > k2 || -1 === m2 && x2.min + n4[o3] < k2 ? (0, c.Pe)(e4, a2, a2 + m2) : e4;
            })(
              r2,
              e3,
              t3,
              n3,
              b,
              w.current?.ownerDocument.defaultView?.getComputedStyle(
                w.current
              ).direction === "rtl" ? "rtl" : "ltr"
            );
            if (r2 !== o2) {
              A.current = true;
              let e4 = [...h], t4 = r2.map(({ value: e5 }) => h.indexOf(e5));
              o2.forEach(({ value: n4 }, r3) => {
                e4[t4[r3]] = n4;
              }), y2(e4);
            }
          }
        },
        children: e2
      })
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(37649, function(__module,__exports,__require){
"use strict";
var __m=((e,t,a)=>{"use strict";a.r(t),a.d(t,{AgentPlanDemo:()=>ed,default:()=>eo});var i=a(95155),n=a(12115),s=a(44952),r=a(56255),l=a(80642),d=a(25354),o=a(18310),c=a(29298),p=a(58274),u=a(92298),h=a(24860),m=a(9005),g=a(2125),f=a(36619),_=a(79267),x=a(51288),y=a(52898);function j({title:e="Claude",...t}){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",role:"img","aria-label":e,...t,children:(0,i.jsx)("path",{d:"m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"})})}var v=a(36483),b=a(797),w=a(44354),k=a(65377),N=a(94179),R=a(44236),$=a(45263),S=a(7770),A=a(13658),D=a.n(A);let{duration:P,ease:E}=S.T,T=[...E.enter],C=[...E.standard],M={type:"spring",visualDuration:.26,bounce:0},I={duration:P.fast,ease:T},Y={duration:.1,ease:C},L={duration:0};function W(e){return{initial:e?{opacity:0}:{opacity:0,y:3},animate:{opacity:1,y:0,transition:e?L:I},exit:{opacity:0,transition:e?L:Y}}}function z({kind:e,reduced:t}){switch(e){case"active":return(0,i.jsxs)("svg",{viewBox:"0 0 16 16",className:D().spin,"aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"8",cy:"8",r:"6.25",className:D().track}),(0,i.jsx)("path",{d:"M8 1.75a6.25 6.25 0 0 1 6.25 6.25",className:D().arc})]});case"paused":return(0,i.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"8",cy:"8",r:"6.25",className:D().pausedRing}),(0,i.jsx)("path",{d:"M6.6 5.9v4.2M9.4 5.9v4.2",className:D().pausedBars})]});case"done":return(0,i.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"8",cy:"8",r:"7",className:D().doneDisc}),(0,i.jsx)(d.PY1.path,{d:"M5 8.25 7.1 10.3 11 6",className:D().ink,initial:{pathLength:+!!t},animate:{pathLength:1},transition:t?L:{duration:.22,ease:T,delay:.04}})]});case"failed":return(0,i.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"8",cy:"8",r:"7",className:D().failDisc}),(0,i.jsx)("path",{d:"M8 4.9v3.6",className:D().ink}),(0,i.jsx)("circle",{cx:"8",cy:"11.1",r:".95",className:D().inkDot})]});case"skipped":return(0,i.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"8",cy:"8",r:"6.25",className:D().skipRing}),(0,i.jsx)("path",{d:"M5.6 8h4.8",className:D().skipDash})]});default:return(0,i.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0,i.jsx)("circle",{cx:"8",cy:"8",r:"6.25",className:D().ring})})}}let B={enter:e=>({opacity:0,y:`${.4*e}em`}),center:{opacity:1,y:"0em",transition:{duration:.2,ease:T}},exit:e=>({opacity:0,y:`${-.4*e}em`,transition:Y})};function F({value:e,reduced:t}){let[a,s]=(0,n.useState)(e),[r,o]=(0,n.useState)(1);a!==e&&(o(e>a?1:-1),s(e));let c=String(e);return(0,i.jsx)("span",{className:D().roll,style:{width:`${c.length}ch`},children:(0,i.jsx)(l.N,{initial:!1,custom:r,children:(0,i.jsx)(d.PY1.span,{className:D().rollValue,custom:r,variants:B,initial:!t&&"enter",animate:"center",exit:t?void 0:"exit",children:c},t?"static":c)})})}function O({text:e,onDone:t}){let a=(0,n.useMemo)(()=>(function(e){let t=e.match(/\S+\s*/g)??[],a=[4,3,5,4,6],i=[],n="",s=0;for(let e of t)n+=e,((s+=1)>=a[i.length%a.length]||n.length>=36)&&(i.push(n),n="",s=0);return n&&i.push(n),i})(e),[e]),[s,r]=(0,n.useState)(0),l=(0,n.useRef)(t);return(0,n.useEffect)(()=>{l.current=t}),(0,n.useEffect)(()=>{let e=0,t=0,i=performance.now()-34,n=s=>{let d=Math.floor((s-i)/34);d>0&&(t=Math.min(a.length,t+d),i+=34*d,r(t)),t<a.length?e=requestAnimationFrame(n):l.current?.()};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)},[a]),(0,i.jsx)(i.Fragment,{children:a.slice(0,s).map((e,t)=>(0,i.jsx)("span",{className:D().chunk,children:e},t))})}function K({children:e,className:t,reduced:a}){let s=(0,n.useRef)(null),[r,l]=(0,n.useState)("auto");return(0,n.useLayoutEffect)(()=>{let e=s.current;if(!e||"u"<typeof ResizeObserver)return;let t=new ResizeObserver(()=>l(e.offsetHeight));return t.observe(e),()=>t.disconnect()},[]),(0,i.jsx)(d.PY1.div,{className:t,initial:!1,animate:{height:r},transition:a?L:M,children:(0,i.jsx)("div",{ref:s,children:e})})}function X({label:e}){let t=e.split(" ",1)[0]?.toLowerCase()??"",a="read"===t?v.A:"edited"===t||"updated"===t?b.A:"created"===t||"wrote"===t||"added"===t?w.A:"searched"===t||"found"===t?k.A:"ran"===t?N.A:"measured"===t?R.A:$.A;return(0,i.jsx)(a,{size:12,strokeWidth:1.75,"aria-hidden":"true"})}function q({lines:e,reduced:t}){return(0,i.jsx)("ul",{className:D().subs,"aria-label":"Activity",children:(0,i.jsx)(l.N,{initial:!1,children:e.map((e,a)=>(0,i.jsx)(d.PY1.li,{className:D().sub,initial:t?{opacity:0}:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:t?{opacity:0}:{height:0,opacity:0},transition:t?L:{height:M,opacity:I},children:(0,i.jsxs)("span",{className:D().subInner,children:[(0,i.jsx)(X,{label:e}),(0,i.jsx)("span",{className:D().subText,children:e})]})},a))})})}let Q=[{id:"map",title:"Map the public routes under api/v1"},{id:"limiter",title:"Add a sliding window limiter to the API middleware"},{id:"store",title:"Keep request counters in Redis with a 60 second TTL"},{id:"headers",title:"Return 429 with Retry-After and RateLimit headers"},{id:"tests",title:"Write tests for limits, bursts and window resets"},{id:"docs",title:"Document the limits in the API reference"}],U={map:{substeps:["Read 4 files","Searched for router.get and router.post","Found 23 public routes"],duration:21},limiter:{substeps:["Read middleware/index.ts","Created middleware/rate-limit.ts","Edited 2 files"],duration:48},store:{substeps:["Read lib/redis.ts","Edited middleware/rate-limit.ts","Ran 6 tests"],duration:37,insert:{after:2,step:{id:"fallback",title:"Fall back to in-memory counters when Redis is down",note:"Added by agent"}}},fallback:{substeps:["Edited lib/redis.ts","Ran 8 tests"],duration:29},headers:{substeps:["Edited middleware/rate-limit.ts","Ran 4 tests"],duration:24},tests:{substeps:["Created rate-limit.test.ts","Ran 12 tests"],duration:63,fail:{error:"2 of 12 tests failed: the window resets one second late",retry:["Edited middleware/rate-limit.ts","Ran 12 tests, all passed"]}},docs:{substeps:["Read docs/api/overview.md","Edited docs/api/rate-limits.md"],duration:19},overrides:{substeps:["Read lib/plans.ts","Edited middleware/rate-limit.ts","Ran 5 tests"],duration:34},metrics:{substeps:["Read lib/metrics.ts","Edited middleware/rate-limit.ts"],duration:22},load:{substeps:["Ran k6 against staging for 60 seconds","Measured 41 ms p99 at 2,000 requests per second"],duration:71}},V={substeps:["Read 3 files","Edited 2 files","Ran 6 tests"],duration:32},Z=[{id:"overrides",title:"Allow higher limits for enterprise API keys"},{id:"metrics",title:"Emit a metric for every blocked request"},{id:"load",title:"Load test the limiter at 2,000 requests per second"}],H="Rate limiting is on for all 23 public routes, with an in-memory fallback and 12 passing tests.",J={name:"Claude Opus 5.5",mark:(0,i.jsx)(function(e){return(0,i.jsx)(j,{style:{color:"#D97757"},...e})},{})},G={pending:"Pending",active:"In progress",done:"Done",failed:"Failed",skipped:"Skipped"},ee=(...e)=>e.filter(Boolean).join(" "),et=e=>"done"===e.state||"skipped"===e.state,ea=(e,t,a)=>e.map(e=>e.id===t?{...e,...a}:e);function ei(e){let t=Math.round(e);return t<60?`${t}s`:`${Math.floor(t/60)}m ${String(t%60).padStart(2,"0")}s`}function en({step:e,index:t,draft:a,paused:o,reduced:c,streaming:g,note:f,fresh:_,mark:x,hintId:j,register:v,onRename:b,onCommit:w,onRemove:k,onMove:N,onAction:R,onDragEnd:$,onStreamDone:S}){let A=(0,s.m)(),[P,E]=(0,n.useState)(!1),T=(0,n.useRef)(e.title),C=e.state??"pending",B="active"===C&&o?"paused":C,F=e.title||"Empty step",K=W(c),X="active"===C||"failed"===C;return(0,i.jsx)(r.N,{as:"li",value:e.id,dragListener:!1,dragControls:A,layout:"position",dragMomentum:!1,dragTransition:{bounceStiffness:700,bounceDamping:60},className:D().row,"data-state":C,"data-dragging":P||void 0,"data-fresh":_||void 0,initial:c?{opacity:0}:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:c?{opacity:0,transition:L}:{height:0,opacity:0,transition:{...M,opacity:Y}},transition:c?L:{...M,opacity:I},onDragStart:()=>E(!0),onDragEnd:()=>{E(!1),$()},children:(0,i.jsxs)("div",{className:D().rowInner,children:[(0,i.jsx)("span",{className:D().lead,children:(0,i.jsx)(l.N,{initial:!1,children:a?(0,i.jsx)(d.PY1.button,{ref:v(`grip:${e.id}`),type:"button",className:D().grip,...K,"aria-label":`Move step ${t+1}: ${F}`,"aria-describedby":j,onPointerDown:e=>{0===e.button&&A.start(e)},onKeyDown:t=>{("ArrowUp"===t.key||"ArrowDown"===t.key)&&(t.preventDefault(),N(e.id,"ArrowUp"===t.key?-1:1,"grip"))},children:(0,i.jsx)(p.A,{size:16,strokeWidth:1.75,"aria-hidden":"true"})},"grip"):(0,i.jsx)(d.PY1.span,{className:D().glyph,...K,initial:{opacity:0},children:(0,i.jsx)(z,{kind:B,reduced:c})},B)})}),(0,i.jsxs)("div",{className:D().body,children:[!a&&(0,i.jsxs)("span",{className:D().srOnly,children:[G[C],": "]}),(0,i.jsx)("div",{className:D().title,"data-value":a&&!g?e.title:void 0,children:g?(0,i.jsx)("span",{className:D().titleText,children:(0,i.jsx)(O,{text:e.title,onDone:S})}):a?(0,i.jsx)("textarea",{ref:v(`field:${e.id}`),className:D().field,rows:1,value:e.title,placeholder:"Describe the step","aria-label":`Step ${t+1}`,"aria-describedby":j,spellCheck:!1,onFocus:()=>{T.current=e.title},onChange:t=>b(e.id,t.target.value.replace(/\s*\n\s*/g," ")),onBlur:()=>w(e.id,e.title!==T.current),onKeyDown:function(t){t.altKey&&("ArrowUp"===t.key||"ArrowDown"===t.key)?(t.preventDefault(),N(e.id,"ArrowUp"===t.key?-1:1,"field")):"Enter"===t.key?(t.preventDefault(),w(e.id,e.title!==T.current),T.current=e.title):"Escape"===t.key&&e.title!==T.current?(t.preventDefault(),b(e.id,T.current)):"Backspace"!==t.key||e.title||(t.preventDefault(),k(e.id,"previous"))}}):(0,i.jsx)(y.n,{className:D().titleText,active:"active"===C&&!o,children:e.title})}),f&&(0,i.jsxs)("p",{className:D().note,children:[(0,i.jsx)("span",{className:D().noteMark,"aria-hidden":"true",children:x}),f]}),(0,i.jsx)(l.N,{initial:!1,children:X&&(0,i.jsx)(d.PY1.div,{className:D().collapse,initial:!1,exit:c?{opacity:0,transition:L}:{height:0,opacity:0,transition:{...M,opacity:Y}},children:(0,i.jsx)(q,{lines:e.substeps??[],reduced:c})},"activity")}),(0,i.jsx)(l.N,{initial:!1,children:"failed"===C&&(0,i.jsx)(d.PY1.div,{className:D().collapse,initial:c?{opacity:0}:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:c?{opacity:0,transition:L}:{height:0,opacity:0,transition:{...M,opacity:Y}},transition:c?L:{height:M,opacity:I},children:(0,i.jsxs)("div",{className:D().fail,children:[(0,i.jsxs)("p",{className:D().failText,children:[(0,i.jsx)("span",{className:D().failLabel,children:"Failed"})," ",e.error??"The step did not finish."]}),(0,i.jsxs)("div",{className:D().failActions,children:[(0,i.jsxs)("button",{type:"button",className:D().mini,"data-tone":"accent",onClick:()=>R("retry",e),children:[(0,i.jsx)(u.A,{size:14,strokeWidth:1.75,"aria-hidden":"true"}),"Retry"]}),(0,i.jsxs)("button",{type:"button",className:D().mini,onClick:()=>R("skip",e),children:[(0,i.jsx)(h.A,{size:14,strokeWidth:1.75,"aria-hidden":"true"}),"Skip"]})]})]})},"failure")})]}),(0,i.jsx)("span",{className:D().trail,children:(0,i.jsx)(l.N,{initial:!1,children:a?(0,i.jsx)(d.PY1.span,{className:D().trailItem,...K,children:(0,i.jsx)("button",{ref:v(`remove:${e.id}`),type:"button",className:D().remove,"aria-label":`Remove step ${t+1}: ${F}`,onClick:()=>k(e.id,"next"),children:(0,i.jsx)(m.A,{size:14,strokeWidth:1.75,"aria-hidden":"true"})})},"remove"):"done"===C&&null!=e.duration?(0,i.jsx)(d.PY1.span,{className:D().trailItem,...K,children:ei(e.duration)},"time"):"skipped"===C?(0,i.jsx)(d.PY1.span,{className:D().trailItem,...K,"aria-hidden":"true",children:"Skipped"},"skipped"):null})})]})})}function es({steps:e,status:t,goal:a="Add rate limiting to the public API",model:s=J,summary:r,onApprove:p,onChange:h,onStepAction:m,onKeepPlanning:y,onPauseChange:j,className:v}){let b=(0,o.I)()??!1,w=void 0===t,k=(0,n.useId)(),[N,R]=(0,n.useState)(()=>e??Q),[$,S]=(0,n.useState)(e);e!==$&&(S(e),e&&R(e));let[A,P]=(0,n.useState)("draft"),E=t??A,T="draft"===E,C="paused"===E,[z,B]=(0,n.useState)(""),[X,q]=(0,n.useState)(!1),[G,er]=(0,n.useState)(0),[el,ed]=(0,n.useState)(null),[eo,ec]=(0,n.useState)(()=>new Set),[ep,eu]=(0,n.useState)(()=>new Set),eh=(0,n.useRef)(N);(0,n.useEffect)(()=>{eh.current=N});let em=(0,n.useRef)({attempts:new Map,inserted:new Set}),eg=(0,n.useRef)(0);(0,n.useEffect)(()=>()=>window.clearTimeout(eg.current),[]);let ef=(0,n.useRef)(0),e_=(0,n.useRef)(new Map),ex=(0,n.useRef)(null),ey=(0,n.useCallback)(e=>t=>{t?e_.current.set(e,t):e_.current.delete(e)},[]),ej=e=>{ex.current={key:e,at:Date.now()}};(0,n.useLayoutEffect)(()=>{let e=ex.current;if(!e)return;if(Date.now()-e.at>1500){ex.current=null;return}let t=e_.current.get(e.key);t&&(ex.current=null,document.activeElement!==t&&t.focus({preventScroll:!0}))});let ev=N.length,eb=N.filter(et).length,ew="done"===E?ev:Math.min(ev,eb+1),ek=N.findIndex(e=>"failed"===e.state),eN=N.reduce((e,t)=>e+("done"===t.state?t.duration??0:0),0),eR=r??(w?H:void 0),e$=!w||G<Z.length;function eS(e,t){R(e),h?.(e),t&&B(t)}let eA=(e,t)=>R(a=>ea(a,e,{title:t}));function eD(e,t){let a=eh.current.find(t=>t.id===e);if(a){if(!a.title.trim())return void eS(eh.current.filter(t=>t.id!==e),"Removed the empty step");t&&(h?.(eh.current),B(`Renamed step to ${a.title}`))}}function eP(e,t){let a=N.findIndex(t=>t.id===e),i=N[a];if(!i)return;let n=N.filter(t=>t.id!==e),s="previous"===t?n[a-1]??n[a]:n[a]??n[a-1];ej(s?`${"previous"===t?"field":"remove"}:${s.id}`:"add"),eS(n,`Removed ${i.title||"the empty step"}`)}function eE(e,t,a){let i=N.findIndex(t=>t.id===e),n=i+t;if(i<0||n<0||n>=N.length)return;let s=[...N];[s[i],s[n]]=[s[n],s[i]],ej(`${a}:${e}`),eS(s,`Moved to position ${n+1} of ${s.length}`)}let eT=(0,n.useCallback)(()=>{ed(null),h?.(eh.current),B("Suggested one more step. Edit, move or remove it before approving.")},[h]);function eC(e,t){m?.({type:e,step:t}),ej("pause"),w&&("retry"===e?(em.current.attempts.set(t.id,(em.current.attempts.get(t.id)??0)+1),R(e=>ea(e,t.id,{state:"active",error:void 0})),B(`Retrying ${t.title}`)):(R(e=>ea(e,t.id,{state:"skipped",error:void 0})),B(`Skipped ${t.title}`)))}(0,n.useEffect)(()=>{let e,t;if(!w||"running"!==E||N.some(e=>"failed"===e.state))return;let a=N.findIndex(e=>"active"===e.state);if(a<0){let a=N.find(e=>"pending"===(e.state??"pending"));a?(e=260,t=()=>R(e=>ea(e,a.id,{state:"active",substeps:[]}))):(e=420,t=()=>{P("done");let e=eh.current.reduce((e,t)=>e+("done"===t.state?t.duration??0:0),0);B(`Plan done in ${ei(e)}. ${H}`)})}else{let i=N[a],n=U[i.id]??V,s=em.current.attempts.get(i.id)??0,r=s>0&&n.fail?[...n.substeps,...n.fail.retry]:n.substeps,l=i.substeps?.length??0,d=n.insert;d&&l>=d.after&&!em.current.inserted.has(d.step.id)&&!N.some(e=>e.id===d.step.id)?(e=420,t=()=>{em.current.inserted.add(d.step.id),eu(e=>new Set(e).add(d.step.id)),R(e=>{let t=e.findIndex(e=>e.id===i.id),a=[...e];return a.splice(t+1,0,{...d.step,state:"pending"}),a}),B(`The agent added a step: ${d.step.title}`)}):l<r.length?(e=0===l?360:540,t=()=>R(e=>ea(e,i.id,{substeps:[...e.find(e=>e.id===i.id)?.substeps??[],r[l]]}))):n.fail&&0===s?(e=520,t=()=>{R(e=>ea(e,i.id,{state:"failed",error:n.fail.error})),B(`Step ${a+1} failed: ${n.fail.error}. Retry or skip it.`)}):(e=480,t=()=>{R(e=>ea(e,i.id,{state:"done",duration:n.duration})),B(`Done: ${i.title}`)})}let i=window.setTimeout(t,e);return()=>window.clearTimeout(i)},[w,E,N]);let eM=W(b),eI=ek>=0?`Step ${ek+1} failed`:C?`Paused on step ${ew}`:`Working on step ${ew}`;return(0,i.jsxs)("section",{className:ee(D().root,v),"aria-label":`${s.name} plan: ${a}`,"data-status":E,children:[(0,i.jsxs)("header",{className:D().header,children:[(0,i.jsxs)("div",{className:D().headRow,children:[s.mark&&(0,i.jsx)("span",{className:D().mark,"aria-hidden":"true",children:s.mark}),(0,i.jsxs)("h3",{className:D().heading,children:["Plan",(0,i.jsxs)("span",{className:D().count,children:[(0,i.jsx)("span",{"aria-hidden":"true",children:" \xb7 "}),(0,i.jsx)(F,{value:ev,reduced:b})," ",1===ev?"step":"steps"]})]}),(0,i.jsx)("span",{className:D().headMeta,children:(0,i.jsx)(l.N,{initial:!1,children:T?(0,i.jsx)(d.PY1.span,{...eM,children:s.name},"model"):(0,i.jsxs)(d.PY1.span,{...eM,children:[(0,i.jsx)(F,{value:ew,reduced:b})," of ",(0,i.jsx)(F,{value:ev,reduced:b})]},"count")})})]}),a&&(0,i.jsx)("p",{className:ee(D().goal,!s.mark&&D().goalFlush),children:a}),(0,i.jsx)("div",{className:D().progress,role:"progressbar","aria-label":"Plan progress","aria-hidden":T||void 0,"aria-valuemin":0,"aria-valuemax":ev,"aria-valuenow":eb,"aria-valuetext":`${eb} of ${ev} steps finished`,children:(0,i.jsx)(d.PY1.span,{className:D().fill,initial:!1,animate:{scaleX:T||!ev?0:eb/ev,opacity:+!T},transition:b?L:{scaleX:M,opacity:I}})})]}),(0,i.jsxs)("div",{className:D().listWrap,children:[(0,i.jsx)("span",{id:k,className:D().srOnly,children:"Alt plus Arrow up or down moves a step. Escape undoes a rename."}),(0,i.jsx)(c.x,{as:"ol",axis:"y",values:N.map(e=>e.id),onReorder:e=>R(t=>e.map(e=>t.find(t=>t.id===e)).filter(e=>!!e)),className:D().list,"aria-label":"Plan steps",children:(0,i.jsx)(l.N,{initial:!1,children:N.map((e,t)=>(0,i.jsx)(en,{step:e,index:t,draft:T,paused:C,reduced:b,streaming:el===e.id,note:e.note??(T&&eo.has(e.id)?"Suggested":void 0),fresh:ep.has(e.id),mark:s.mark,hintId:k,register:ey,onRename:eA,onCommit:eD,onRemove:eP,onMove:eE,onAction:eC,onDragEnd:()=>h?.(eh.current),onStreamDone:eT},e.id))})}),!N.length&&(0,i.jsx)("p",{className:D().empty,children:"No steps yet. Add one or keep planning."}),(0,i.jsx)(l.N,{initial:!1,children:T&&(0,i.jsx)(d.PY1.div,{className:D().collapse,initial:b?{opacity:0}:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:b?{opacity:0,transition:L}:{height:0,opacity:0,transition:{...M,opacity:Y}},transition:b?L:{height:M,opacity:I},children:(0,i.jsxs)("button",{ref:ey("add"),type:"button",className:D().add,onClick:function(){ef.current+=1;let e=`step-${ef.current}-${Date.now().toString(36)}`;ej(`field:${e}`),eS([...N,{id:e,title:""}],"Added an empty step")},children:[(0,i.jsx)("span",{className:D().lead,children:(0,i.jsx)(g.A,{size:16,strokeWidth:1.75,"aria-hidden":"true"})}),"Add step"]})},"add")})]}),(0,i.jsx)(K,{className:D().footWrap,reduced:b,children:(0,i.jsx)("div",{className:D().foot,children:(0,i.jsx)(l.N,{mode:"popLayout",initial:!1,children:T?(0,i.jsxs)(d.PY1.div,{className:D().footRow,"data-phase":"draft",...eM,children:[(0,i.jsx)(x.$,{variant:"secondary",size:"sm",loading:X,disabled:!e$&&!X,onClick:function(){if(y?.(),!w||X||el)return;let e=Z[G];e&&(q(!0),B("Planning one more step"),eg.current=window.setTimeout(()=>{q(!1),er(e=>e+1),ec(t=>new Set(t).add(e.id)),ed(e.id),R(t=>{if(t.some(t=>t.id===e.id))return t;let a=[...t];return a.splice(Math.max(0,t.length-1),0,{...e}),a})},720))},children:"Keep planning"}),(0,i.jsx)(x.$,{ref:ey("approve"),size:"sm",className:D().approve,disabled:!N.some(e=>e.title.trim()),onClick:function(){let e=N.filter(e=>e.title.trim()).map(e=>({...e,title:e.title.trim()}));!e.length||(p?.(e),window.clearTimeout(eg.current),q(!1),ed(null),ej("pause"),w&&(em.current={attempts:new Map,inserted:new Set},R(e.map(e=>({...e,state:"pending",substeps:[],error:void 0,duration:void 0}))),P("running"),B(`Plan approved. Running ${e.length} steps as a simulation.`)))},children:"Approve plan"})]},"draft"):"done"===E?(0,i.jsxs)(d.PY1.div,{className:D().footRow,"data-phase":"done",...eM,children:[(0,i.jsxs)("p",{className:D().summary,children:[(0,i.jsx)("strong",{children:eN?`Done in ${ei(eN)}.`:"Done."}),eR&&(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)(O,{text:eR})]})]}),w&&(0,i.jsxs)(x.$,{ref:ey("startOver"),variant:"ghost",size:"sm",onClick:function(){em.current={attempts:new Map,inserted:new Set},R(e??Q),P("draft"),er(0),ec(new Set),eu(new Set),ej("approve"),B("Back to the draft plan")},children:[(0,i.jsx)(u.A,{size:16,strokeWidth:1.75,"aria-hidden":"true"}),"Start over"]})]},"done"):(0,i.jsxs)(d.PY1.div,{className:D().footRow,"data-phase":"run",...eM,children:[(0,i.jsx)("span",{className:D().footStatus,children:(0,i.jsx)(l.N,{initial:!1,children:(0,i.jsx)(d.PY1.span,{...eM,children:eI},eI)})}),(0,i.jsx)(l.N,{initial:!1,children:ek<0&&(0,i.jsx)(d.PY1.span,{className:D().pauseSlot,...eM,children:(0,i.jsx)(x.$,{ref:ey("pause"),variant:"secondary",size:"sm",onClick:function(){let e="running"===E;j?.(e),w&&P(e?"paused":"running"),B(e?"Paused":"Resumed")},children:C?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.A,{size:16,strokeWidth:1.75,"aria-hidden":"true"}),"Resume"]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.A,{size:16,strokeWidth:1.75,"aria-hidden":"true"}),"Pause"]})})},"pause")})]},"run")})})}),(0,i.jsx)("p",{className:D().srOnly,role:"status","aria-live":"polite",children:z})]})}var er=a(7947),el=a.n(er);function ed(){return(0,i.jsx)("div",{className:el().demo,children:(0,i.jsx)(es,{})})}let eo=ed});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(41369, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { T: () => r });
  let r = (0, n(12115).createContext)(null);
}

__m(__module,__exports,__require);
});
A.reg(44236, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "gauge",
    size: 24,
    node: [
      ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
      ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
    ]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(44354, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var s = a(51811);
  let n = {
    name: "file-plus",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M9 15h6", key: "cctwl0" }],
      ["path", { d: "M12 18v-6", key: "17g6i2" }]
    ]
  };
  n.node;
  let i = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(44952, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { m: () => a });
  var r = n(28819);
  class o {
    constructor() {
      this.componentControls = /* @__PURE__ */ new Set();
    }
    subscribe(e2) {
      return this.componentControls.add(e2), () => this.componentControls.delete(e2);
    }
    start(e2, t2) {
      this.componentControls.forEach((n2) => {
        n2.start(e2.nativeEvent || e2, t2);
      });
    }
    cancel() {
      this.componentControls.forEach((e2) => {
        e2.cancel();
      });
    }
    stop() {
      this.componentControls.forEach((e2) => {
        e2.stop();
      });
    }
  }
  let l = () => new o();
  function a() {
    return (0, r.M)(l);
  }
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
A.reg(56255, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { N: () => x });
  var r = n(95155), o = n(51469), l = n(5556), a = n(12115), i = n(41369), d = n(24857), u = n(28819), c = n(28245), s = n(55809);
  let f = /* @__PURE__ */ new Set(["auto", "scroll"]), p = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), h = null;
  function m(e2, t2) {
    let n2 = e2?.parentElement;
    for (; n2; ) {
      if ((function(e3, t3) {
        let n3 = getComputedStyle(e3), r2 = "x" === t3 ? n3.overflowX : n3.overflowY, o2 = e3 === document.body || e3 === document.documentElement;
        return f.has(r2) || o2;
      })(n2, t2))
        return n2;
      n2 = n2.parentElement;
    }
    return null;
  }
  function g(e2, t2 = 0) {
    return (0, o.S)(e2) ? e2 : (0, c.d)(t2);
  }
  let x = (0, a.forwardRef)(function({
    children: e2,
    style: t2 = {},
    value: n2,
    as: o2 = "li",
    onDrag: c2,
    onDragEnd: f2,
    layout: x2 = true,
    ...v
  }, k) {
    let M = (0, u.M)(() => d.P[o2]), A = (0, a.useContext)(i.T), w = { x: g(t2.x), y: g(t2.y) }, b = (0, s.G)([w.x, w.y], ([e3, t3]) => e3 || t3 ? 1 : "unset");
    (0, l.V)(
      !!A,
      "Reorder.Item must be a child of Reorder.Group",
      "reorder-item-child"
    );
    let { axis: j, registerItem: C, updateOrder: D, groupRef: z } = A, R = "xy" === j || j;
    return (0, r.jsx)(M, {
      drag: R,
      ...v,
      dragSnapToOrigin: true,
      style: { ...t2, x: w.x, y: w.y, zIndex: b },
      layout: x2,
      onDrag: (e3, t3) => {
        let { velocity: r2, point: o3 } = t3;
        D(n2, { x: w.x.get(), y: w.y.get() }, r2);
        let l2 = "xy" === j ? Math.abs(r2.x) > Math.abs(r2.y) ? "x" : "y" : j;
        !(function(e4, t4, n3, r3) {
          if (!e4) return;
          h = e4;
          let o4 = m(e4, n3);
          if (!o4) return;
          let { amount: l3, edge: a2 } = (function(e5, t5, n4) {
            let r4 = t5.getBoundingClientRect(), o5 = "x" === n4 ? Math.max(0, r4.left) : Math.max(0, r4.top), l4 = "x" === n4 ? Math.min(window.innerWidth, r4.right) : Math.min(window.innerHeight, r4.bottom), a3 = e5 - o5, i3 = l4 - e5;
            if (a3 < 50) {
              let e6 = 1 - a3 / 50;
              return { amount: -25 * e6 * e6, edge: "start" };
            }
            if (i3 < 50) {
              let e6 = 1 - i3 / 50;
              return { amount: 25 * e6 * e6, edge: "end" };
            }
            return { amount: 0, edge: null };
          })(t4 - ("x" === n3 ? window.scrollX : window.scrollY), o4, n3);
          if (null === a2) {
            y.delete(o4), p.delete(o4);
            return;
          }
          let i2 = y.get(o4), d2 = o4 === document.body || o4 === document.documentElement;
          if (i2 !== a2) {
            if (!("start" === a2 && r3 < 0 || "end" === a2 && r3 > 0)) return;
            y.set(o4, a2);
            let e5 = "x" === n3 ? o4.scrollWidth - (d2 ? window.innerWidth : o4.clientWidth) : o4.scrollHeight - (d2 ? window.innerHeight : o4.clientHeight);
            p.set(o4, e5);
          }
          if (l3 > 0) {
            let e5 = p.get(o4);
            if (("x" === n3 ? d2 ? window.scrollX : o4.scrollLeft : d2 ? window.scrollY : o4.scrollTop) >= e5)
              return;
          }
          "x" === n3 ? d2 ? window.scrollBy({ left: l3 }) : o4.scrollLeft += l3 : d2 ? window.scrollBy({ top: l3 }) : o4.scrollTop += l3;
        })(z.current, o3[l2], l2, r2[l2]), c2 && c2(e3, t3);
      },
      onDragEnd: (e3, t3) => {
        if (h) {
          let e4 = m(h, "y");
          e4 && (y.delete(e4), p.delete(e4));
          let t4 = m(h, "x");
          t4 && t4 !== e4 && (y.delete(t4), p.delete(t4)), h = null;
        }
        f2 && f2(e3, t3);
      },
      onLayoutMeasure: (e3) => {
        C(n2, e3);
      },
      ref: k,
      ignoreStrict: true,
      children: e2
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(58274, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "grip-vertical",
    size: 24,
    node: [
      ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
      ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
      ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
      ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
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
A.cssFor("agent-plan", [7947,13658]);
A.item("agent-plan", {entry:37649, export:"AgentPlanDemo", kind:"component", tier:"pro", unresolved:[]});
})();