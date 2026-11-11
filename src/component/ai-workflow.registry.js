/* ai-workflow (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(25898, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={anchor:"popover_anchor__Mcc5T",content:"popover_content__FmDK_","popover-exit":"popover_popover-exit__j6_xO"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(40093, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, {
    Mz: () => Z,
    UC: () => H,
    ZL: () => q,
    bL: () => K,
    bm: () => Q,
    i3: () => U,
    l9: () => $
  });
  var r = n(12115), o = n(70379), a = n(47527), i = n(68599), s = n(19416), l = n(32007), u = n(69885), c = n(89971), d = n(80878), p = n(19040), f = n(83935), h = n(55897), b = n(42442), y = n(59322), v = n(22954), m = n(5174), _ = n(95155), g = Object.defineProperty, x = (e2, t2) => g(e2, "name", { value: t2, configurable: true }), j = "Popover", [C, P] = (0, i.A)(j, [d.Bk]), A = (0, d.Bk)(), [O, w] = C(j), k = x((e2) => {
    let {
      __scopePopover: t2,
      children: n2,
      open: o2,
      defaultOpen: a2,
      onOpenChange: i2,
      modal: s2 = false
    } = e2, l2 = A(t2), u2 = r.useRef(null), [p2, f2] = r.useState(false), [h2, b2] = (0, y.i)({
      prop: o2,
      defaultProp: a2 ?? false,
      onChange: i2,
      caller: j
    });
    return (0, _.jsx)(d.bL, {
      ...l2,
      children: (0, _.jsx)(O, {
        scope: t2,
        contentId: (0, c.B)(),
        triggerRef: u2,
        open: h2,
        onOpenChange: b2,
        onOpenToggle: r.useCallback(() => b2((e3) => !e3), [b2]),
        hasCustomAnchor: p2,
        onCustomAnchorAdd: r.useCallback(() => f2(true), []),
        onCustomAnchorRemove: r.useCallback(() => f2(false), []),
        modal: s2,
        children: n2
      })
    });
  }, "Popover"), R = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...o2 } = e2, a2 = w("PopoverAnchor", n2), i2 = A(n2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
      return r.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, _.jsx)(d.Mz, { ...i2, ...o2, ref: t2 });
    }, "PopoverAnchor")
  ), N = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, i2 = w("PopoverTrigger", n2), s2 = A(n2), l2 = (0, a.s)(t2, i2.triggerRef), u2 = (0, _.jsx)(h.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i2.open,
        "aria-controls": i2.open ? i2.contentId : void 0,
        "data-state": Y(i2.open),
        ...r2,
        ref: l2,
        onClick: (0, o.mK)(e2.onClick, i2.onOpenToggle)
      });
      return i2.hasCustomAnchor ? u2 : (0, _.jsx)(d.Mz, { asChild: true, ...s2, children: u2 });
    }, "PopoverTrigger")
  ), E = "PopoverPortal", [T, F] = C(E, { forceMount: void 0 }), M = x((e2) => {
    let { __scopePopover: t2, forceMount: n2, children: r2, container: o2 } = e2, a2 = w(E, t2);
    return (0, _.jsx)(T, {
      scope: t2,
      forceMount: n2,
      children: (0, _.jsx)(f.C, {
        present: n2 || a2.open,
        children: (0, _.jsx)(p.Z, { asChild: true, container: o2, children: r2 })
      })
    });
  }, "PopoverPortal"), L = "PopoverContent", D = r.forwardRef(
    x(function(e2, t2) {
      let n2 = F(L, e2.__scopePopover), { forceMount: r2 = n2.forceMount, ...o2 } = e2, a2 = w(L, e2.__scopePopover);
      return (0, _.jsx)(f.C, {
        present: r2 || a2.open,
        children: a2.modal ? (0, _.jsx)(I, { ...o2, ref: t2 }) : (0, _.jsx)(z, { ...o2, ref: t2 })
      });
    }, "PopoverContent")
  ), S = (0, b.TL)("PopoverContent.RemoveScroll"), I = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), i2 = r.useRef(null), s2 = (0, a.s)(t2, i2), l2 = r.useRef(false);
      return r.useEffect(() => {
        let e3 = i2.current;
        if (e3) return (0, v.Eq)(e3);
      }, []), (0, _.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        children: (0, _.jsx)(B, {
          ...e2,
          ref: s2,
          trapFocus: n2.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
            e3.preventDefault(), l2.current || n2.triggerRef.current?.focus();
          }),
          onPointerDownOutside: (0, o.mK)(
            e2.onPointerDownOutside,
            (e3) => {
              let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
              l2.current = 2 === t3.button || n3;
            },
            { checkForDefaultPrevented: false }
          ),
          onFocusOutside: (0, o.mK)(
            e2.onFocusOutside,
            (e3) => e3.preventDefault(),
            { checkForDefaultPrevented: false }
          )
        })
      });
    }, "PopoverContentModal")
  ), z = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), o2 = r.useRef(false), a2 = r.useRef(false);
      return (0, _.jsx)(B, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, a2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (a2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && a2.current && t3.preventDefault();
        }
      });
    }, "PopoverContentNonModal")
  ), B = r.forwardRef(
    x(function(e2, t2) {
      let {
        __scopePopover: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: a2,
        disableOutsidePointerEvents: i2,
        onEscapeKeyDown: c2,
        onPointerDownOutside: p2,
        onFocusOutside: f2,
        onInteractOutside: h2,
        ...b2
      } = e2, y2 = w(L, n2), v2 = A(n2);
      return (0, l.Oh)(), (0, _.jsx)(u.n, {
        asChild: true,
        loop: true,
        trapped: r2,
        onMountAutoFocus: o2,
        onUnmountAutoFocus: a2,
        children: (0, _.jsx)(s.qW, {
          asChild: true,
          disableOutsidePointerEvents: i2,
          onInteractOutside: h2,
          onEscapeKeyDown: c2,
          onPointerDownOutside: p2,
          onFocusOutside: f2,
          onDismiss: () => y2.onOpenChange(false),
          deferPointerDownOutside: true,
          children: (0, _.jsx)(d.UC, {
            "data-state": Y(y2.open),
            role: "dialog",
            id: y2.contentId,
            ...v2,
            ...b2,
            ref: t2,
            style: {
              ...b2.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        })
      });
    }, "PopoverContentImpl")
  ), W = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, a2 = w("PopoverClose", n2);
      return (0, _.jsx)(h.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => a2.onOpenChange(false))
      });
    }, "PopoverClose")
  ), G = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, o2 = A(n2);
      return (0, _.jsx)(d.i3, { ...o2, ...r2, ref: t2 });
    }, "PopoverArrow")
  );
  function Y(e2) {
    return e2 ? "open" : "closed";
  }
  x(Y, "getState");
  var K = k, Z = R, $ = N, q = M, H = D, Q = W, U = G;
}

__m(__module,__exports,__require);
});
A.regCss(47016, ".demo{display:flex;width:100%;min-width:0;flex-direction:column;align-items:center;gap:16px}", {"demo":"demo"});
A.regCss(49094, ".ai-workflow_root__fQwGC{--wf-row:32px;--wf-gap:16px;--wf-pad:8px;--wf-text:34px;--wf-rail:15.5px;--wf-line:var(--border);--wf-done:color-mix(in oklab,var(--accent) 60%,var(--border));--wf-hover:color-mix(in oklab,var(--surface-muted) 70%,transparent);--wf-mono:ui-monospace,\"SF Mono\",\"JetBrains Mono\",Menlo,monospace;--wf-ease:var(--ease-standard,cubic-bezier(.2,0,0,1));container-type:inline-size;position:relative;width:100%;max-width:640px;min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel,26px);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;line-height:20px;letter-spacing:-.003em}.ai-workflow_root__fQwGC p{margin:0}.ai-workflow_srOnly__IEUVb{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.ai-workflow_tabular__8XoGa{font-variant-numeric:tabular-nums}.ai-workflow_header__o4WD3{display:flex;align-items:center;gap:12px;padding:12px 12px 12px 16px;border-bottom:1px solid var(--border-subtle,var(--border))}.ai-workflow_headText__73y1D{display:grid;flex:1;min-width:0}.ai-workflow_title__HaMM3{margin:0;overflow:hidden;color:var(--foreground);font-size:13px;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}.ai-workflow_description__v5PWJ{overflow:hidden;color:var(--text-muted);font-size:12px;line-height:16px;text-overflow:ellipsis;white-space:nowrap}.ai-workflow_runButton__odgqz.ai-workflow_runButton__odgqz{flex:none;min-width:96px;min-height:28px;height:28px;gap:6px;padding-inline:10px;border-radius:10px;font-size:13px}.ai-workflow_canvas__Ce3pF{padding:12px 8px}.ai-workflow_list__FROV0{margin:0;padding:0;list-style:none}.ai-workflow_item___mS0n{position:relative;overflow:clip;overflow-clip-margin:4px}.ai-workflow_inner__A_q4W,.ai-workflow_pathItem__NMwTi{position:relative}.ai-workflow_inner__A_q4W[data-head]{padding-top:var(--wf-gap)}.ai-workflow_body__ZfVjT{position:relative}.ai-workflow_head__0b42D,.ai-workflow_tail__EOlzy{position:absolute;left:var(--wf-rail);width:1px;overflow:hidden;background:var(--wf-line)}.ai-workflow_head__0b42D{--wf-head:calc(var(--wf-gap) + (var(--wf-row) - 16px) / 2 - 4px);top:0;height:var(--wf-head)}.ai-workflow_tail__EOlzy{top:calc((var(--wf-row) + 16px) / 2 + 4px);bottom:0}.ai-workflow_fill__m_U_f{position:absolute;inset:0;background:var(--wf-done);transform-origin:50% 0;opacity:0;transform:scaleY(0);transition:opacity .16s var(--wf-ease),transform 0s linear .16s}.ai-workflow_fill__m_U_f[data-state=done]{opacity:1;transform:scaleY(1);transition:opacity .16s var(--wf-ease)}.ai-workflow_tail__EOlzy .ai-workflow_fill__m_U_f[data-state=done]{transition:opacity .2s var(--wf-ease)}.ai-workflow_fill__m_U_f[data-state=active]{opacity:1;transform:scaleY(1);transition:transform .24s var(--ease-in-out,cubic-bezier(.45,0,.2,1))}.ai-workflow_dot__bj3Zd{--wf-head:calc(var(--wf-gap) + (var(--wf-row) - 16px) / 2 - 4px);position:absolute;top:0;left:calc(var(--wf-rail) - 2px);width:5px;height:5px;border-radius:50%;background:var(--accent);pointer-events:none;animation:ai-workflow_wf-travel__luWOB .24s var(--ease-in-out,cubic-bezier(.45,0,.2,1)) both}@keyframes ai-workflow_wf-travel__luWOB{0%{opacity:0;transform:translateY(-3px)}25%{opacity:1}80%{opacity:1}to{opacity:0;transform:translateY(calc(var(--wf-head) - 3px))}}.ai-workflow_row__O4y3k{position:relative;display:grid;grid-template-columns:16px minmax(0,1fr) 72px 24px;align-items:center;column-gap:10px;height:var(--wf-row);padding:0 4px 0 var(--wf-pad);border-radius:10px;transition:background-color .15s var(--wf-ease)}.ai-workflow_mark__QS6B7{display:grid;width:16px;height:16px;place-items:center;color:var(--foreground)}.ai-workflow_mark__QS6B7 svg{display:block;width:16px;height:16px}.ai-workflow_text__mHv9O{display:flex;align-items:baseline;gap:8px;min-width:0}.ai-workflow_stepTitle__M6giI{flex:0 1 auto;min-width:0;overflow:hidden;color:var(--foreground);font-size:13px;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}.ai-workflow_stepDetail__Xj7H2{display:grid;flex:1 1 0;min-width:56px;color:var(--text-muted);font-size:12px;line-height:20px}.ai-workflow_activity__ZGn9d,.ai-workflow_detailText__LQHlH{grid-area:1/1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:opacity .16s var(--wf-ease) .06s}.ai-workflow_activity__ZGn9d{color:var(--text-secondary)}.ai-workflow_activity__ZGn9d[data-hidden],.ai-workflow_detailText__LQHlH[data-hidden]{opacity:0;transition:opacity .1s var(--wf-ease)}.ai-workflow_body__ZfVjT[data-status=skipped] .ai-workflow_row__O4y3k{opacity:.5}.ai-workflow_status__U_xxb{position:relative;height:20px}.ai-workflow_statusInner__VxSGM{position:absolute;inset:0;display:flex;align-items:center;justify-content:flex-end;gap:6px;color:var(--text-muted);font-size:12px;line-height:20px;white-space:nowrap}.ai-workflow_statusInner__VxSGM svg{flex:none}.ai-workflow_statusInner__VxSGM[data-status=done],.ai-workflow_statusInner__VxSGM[data-status=running]{color:var(--text-secondary)}.ai-workflow_statusInner__VxSGM[data-status=done] svg{color:var(--success)}.ai-workflow_statusInner__VxSGM[data-status=error]{color:var(--danger)}.ai-workflow_spinner__Nh7fP{color:var(--accent);animation:ai-workflow_wf-spin__4Wopl .8s linear infinite}@keyframes ai-workflow_wf-spin__4Wopl{to{transform:rotate(1turn)}}.ai-workflow_removeSlot__Z85vl,.ai-workflow_remove___0BQr{display:grid;width:24px;height:24px}.ai-workflow_remove___0BQr{place-items:center;margin:0;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-muted);cursor:pointer;transition:opacity .15s var(--wf-ease),background-color .15s var(--wf-ease),color .15s var(--wf-ease)}.ai-workflow_remove___0BQr:disabled{cursor:default;opacity:.4}.ai-workflow_remove___0BQr:not(:disabled):active{background:var(--surface-muted);color:var(--foreground)}@media (hover:hover) and (pointer:fine){.ai-workflow_row__O4y3k{grid-template-columns:16px minmax(0,1fr) 72px;padding-right:var(--wf-pad)}}@media (hover:hover) and (pointer:fine){.ai-workflow_row__O4y3k:hover{background:var(--wf-hover)}}@media (hover:hover) and (pointer:fine){.ai-workflow_removeSlot__Z85vl{position:absolute;top:50%;right:4px;transform:translateY(-50%)}}@media (hover:hover) and (pointer:fine){.ai-workflow_remove___0BQr{opacity:0;pointer-events:none}}@media (hover:hover) and (pointer:fine){.ai-workflow_remove___0BQr:disabled{visibility:hidden}}@media (hover:hover) and (pointer:fine){.ai-workflow_status__U_xxb{transition:opacity .1s var(--wf-ease)}}@media (hover:hover) and (pointer:fine){.ai-workflow_remove___0BQr:focus-visible,.ai-workflow_row__O4y3k:hover .ai-workflow_remove___0BQr:not(:disabled){opacity:1;pointer-events:auto;transition-duration:.15s}}@media (hover:hover) and (pointer:fine){.ai-workflow_row__O4y3k:hover .ai-workflow_status__U_xxb:has(+.ai-workflow_removeSlot__Z85vl .ai-workflow_remove___0BQr:not(:disabled)),.ai-workflow_status__U_xxb:has(+.ai-workflow_removeSlot__Z85vl .ai-workflow_remove___0BQr:focus-visible){opacity:0}}@media (hover:hover) and (pointer:fine){.ai-workflow_remove___0BQr:not(:disabled):hover{background:var(--surface-muted);color:var(--foreground)}}.ai-workflow_tabs__8gefF{display:flex;flex-wrap:wrap;gap:2px;padding:2px var(--wf-pad) 2px var(--wf-text)}.ai-workflow_tab__jCwz0{position:relative;display:inline-flex;align-items:center;height:24px;margin:0;padding:0 8px;border:0;border-radius:6px;background:transparent;color:var(--text-muted);font:inherit;font-size:12px;line-height:16px;cursor:pointer;transition:color .15s var(--wf-ease)}.ai-workflow_tab__jCwz0[data-selected]{color:var(--foreground)}.ai-workflow_tabHighlight__ORq59{position:absolute;inset:0;border-radius:6px;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border-subtle,var(--border))}.ai-workflow_tabLabel__86TTb{position:relative;white-space:nowrap}@media (hover:hover) and (pointer:fine){.ai-workflow_tab__jCwz0:not([data-selected]):hover{color:var(--text-secondary)}}.ai-workflow_fold__WTODF{overflow:hidden}.ai-workflow_output__F6VWV{display:grid;gap:2px;padding:2px var(--wf-pad) 6px var(--wf-text);color:var(--text-secondary);font-size:12px;line-height:18px}.ai-workflow_outLine__mwmyJ{display:flex;align-items:baseline;gap:8px;min-width:0;overflow:hidden;white-space:nowrap}.ai-workflow_outLine__mwmyJ>*{min-width:0;overflow:hidden;text-overflow:ellipsis}.ai-workflow_outLine__mwmyJ>:first-child{flex:none}.ai-workflow_name__YvJIq{color:var(--foreground);font-weight:500}.ai-workflow_outStrong__2181O{color:var(--foreground)}.ai-workflow_muted__naGAt{color:var(--text-muted)}.ai-workflow_mono__5CDqX{color:var(--text-muted);font-family:var(--wf-mono);font-size:12px;letter-spacing:0}.ai-workflow_clamp1__pMDjK{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ai-workflow_clamp2__98uWI{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.ai-workflow_label__wvk7O{display:inline-flex;align-items:center;gap:6px;height:20px;padding:0 8px 0 7px;border:1px solid var(--border);border-radius:999px;color:var(--foreground);font-size:12px;line-height:18px}.ai-workflow_labelDot___8lRC{width:6px;height:6px;border-radius:50%;background:var(--series-1,var(--accent))}.ai-workflow_labelDot___8lRC[data-tone=urgent]{background:var(--danger)}.ai-workflow_chunk__P396W{opacity:0;transition:opacity .14s var(--wf-ease)}.ai-workflow_chunk__P396W[data-shown]{opacity:1}.ai-workflow_errorOut__Zem1d{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.ai-workflow_errorText__qYZzW{min-width:0;padding-top:3px;color:var(--text-secondary)}.ai-workflow_retry__7zbht.ai-workflow_retry__7zbht{flex:none;min-height:24px;height:24px;gap:6px;padding-inline:8px;border-radius:8px;font-size:12px}.ai-workflow_pathEmpty__9AkuX{grid-template-columns:16px minmax(0,1fr)}.ai-workflow_emptyMark__RvQb4{width:14px;height:14px;margin:1px;border:1px dashed var(--border);border-radius:50%}.ai-workflow_empty__RaewT{padding:4px 0 0}.ai-workflow_emptyTitle__Hj5cV{padding:0 var(--wf-pad);color:var(--foreground);font-size:13px;font-weight:500;line-height:20px}.ai-workflow_emptyText__BMHKC{padding:0 var(--wf-pad);color:var(--text-muted);font-size:12px;line-height:18px}.ai-workflow_pathEmpty__9AkuX .ai-workflow_emptyText__BMHKC{padding:0}.ai-workflow_triggerList__Mhv36{display:grid;margin:8px 0 0;padding:0;list-style:none}.ai-workflow_triggerOption__5k0zh{display:grid;grid-template-columns:16px minmax(0,auto) minmax(0,1fr);align-items:center;gap:10px;width:100%;height:32px;margin:0;padding:0 var(--wf-pad);border:0;border-radius:10px;background:transparent;color:var(--foreground);font:inherit;font-size:13px;text-align:left;cursor:pointer;transition:background-color .15s var(--wf-ease)}.ai-workflow_triggerOption__5k0zh:active{background:var(--surface-muted)}@media (hover:hover) and (pointer:fine){.ai-workflow_triggerOption__5k0zh:hover{background:var(--wf-hover)}}.ai-workflow_triggerDetail__ma_7b{min-width:0;overflow:hidden;color:var(--text-muted);font-size:12px;text-overflow:ellipsis;white-space:nowrap}.ai-workflow_skeletonLine__aV7Wu,.ai-workflow_skeletonMark__hj7Is{border-radius:4px;background:var(--surface-muted)}.ai-workflow_skeletonLine__aV7Wu{display:block;grid-column:2/-1;width:var(--w);height:8px;animation:ai-workflow_wf-pulse__J4JkO 1.1s var(--ease-in-out,ease-in-out) infinite alternate}@keyframes ai-workflow_wf-pulse__J4JkO{to{opacity:.5}}.ai-workflow_footer__tKvx8{display:flex;align-items:center;gap:12px;min-height:44px;padding:8px 8px 8px 16px;border-top:1px solid var(--border-subtle,var(--border))}.ai-workflow_summary__xb7Ho{position:relative;flex:1;min-width:0;height:20px}.ai-workflow_summaryInner__TuWCX{position:absolute;inset:0;display:flex;align-items:center;gap:6px;color:var(--text-muted);font-size:12px;line-height:20px;white-space:nowrap}.ai-workflow_summaryIcon__kgLd1{display:grid;flex:none;place-items:center;width:14px;height:14px}.ai-workflow_summaryInner__TuWCX[data-state=passed]{color:var(--text-secondary)}.ai-workflow_summaryInner__TuWCX[data-state=passed] .ai-workflow_summaryIcon__kgLd1{color:var(--success)}.ai-workflow_summaryInner__TuWCX[data-state=failed]{color:var(--text-secondary)}.ai-workflow_summaryInner__TuWCX[data-state=failed] .ai-workflow_summaryIcon__kgLd1{color:var(--danger)}.ai-workflow_liveDot__dkADT{width:6px;height:6px;border-radius:50%;background:var(--accent)}.ai-workflow_summaryText__xwJFP{min-width:0;overflow:hidden;text-overflow:ellipsis}.ai-workflow_addButton__vokEs{display:inline-flex;flex:none;align-items:center;gap:6px;height:28px;margin:0;padding:0 10px 0 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;line-height:20px;white-space:nowrap;cursor:pointer;transition:background-color .15s var(--wf-ease),color .15s var(--wf-ease),opacity .15s var(--wf-ease)}.ai-workflow_addButton__vokEs:disabled{cursor:default;opacity:.45}.ai-workflow_addButton__vokEs:not(:disabled):active,.ai-workflow_addButton__vokEs[data-state=open]{background:var(--surface-muted);color:var(--foreground)}@media (hover:hover) and (pointer:fine){.ai-workflow_addButton__vokEs:not(:disabled):hover{background:var(--wf-hover);color:var(--foreground)}}.ai-workflow_addLabel__yPXtD{max-width:160px;overflow:hidden;text-overflow:ellipsis}.ai-workflow_menu__LwM19.ai-workflow_menu__LwM19{--wf-ease:var(--ease-standard,cubic-bezier(.2,0,0,1));width:300px;min-width:0;max-width:calc(100vw - 20px);padding:0;overflow:hidden;border-radius:14px;font-family:var(--font-body);font-size:13px;line-height:20px;transition:opacity .15s var(--wf-ease),transform .18s var(--wf-ease)}.ai-workflow_search__3B1qP{display:flex;align-items:center;gap:8px;height:40px;padding:0 12px;border-bottom:1px solid var(--border-subtle,var(--border));color:var(--text-muted)}.ai-workflow_search__3B1qP svg{flex:none}.ai-workflow_searchInput__UdxOL{flex:1;min-width:0;height:100%;margin:0;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:13px}.ai-workflow_searchInput__UdxOL::placeholder{color:var(--text-muted)}.ai-workflow_searchInput__UdxOL:focus,.ai-workflow_searchInput__UdxOL:focus-visible{outline:none;box-shadow:none}.ai-workflow_options__pxQIe{max-height:264px;margin:0;padding:4px;overflow-y:auto;list-style:none;overscroll-behavior:contain}.ai-workflow_option__3wSTA{display:grid;grid-template-columns:16px minmax(0,1fr) auto;align-items:center;gap:10px;height:32px;padding:0 8px;border-radius:10px;color:var(--foreground);cursor:pointer}.ai-workflow_option__3wSTA[data-active]{background:var(--wf-hover)}.ai-workflow_optionTitle__geocY{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ai-workflow_noMatch__10urP,.ai-workflow_optionMeta__9hdHa{display:flex;color:var(--text-muted);font-size:12px}.ai-workflow_noMatch__10urP{align-items:center;height:32px;padding:0 8px}.ai-workflow_row__O4y3k.ai-workflow_pathEmpty__9AkuX{grid-template-columns:16px minmax(0,1fr)}@media (prefers-reduced-motion:reduce){.ai-workflow_activity__ZGn9d,.ai-workflow_addButton__vokEs,.ai-workflow_chunk__P396W,.ai-workflow_detailText__LQHlH,.ai-workflow_fill__m_U_f,.ai-workflow_fill__m_U_f[data-state],.ai-workflow_remove___0BQr,.ai-workflow_row__O4y3k,.ai-workflow_status__U_xxb,.ai-workflow_tab__jCwz0{transition:none}}@media (prefers-reduced-motion:reduce){.ai-workflow_skeletonLine__aV7Wu{animation:none}}@media (prefers-reduced-motion:reduce){.ai-workflow_spinner__Nh7fP{animation-duration:1.6s}}", {"root":"ai-workflow_root__fQwGC","srOnly":"ai-workflow_srOnly__IEUVb","tabular":"ai-workflow_tabular__8XoGa","header":"ai-workflow_header__o4WD3","headText":"ai-workflow_headText__73y1D","title":"ai-workflow_title__HaMM3","description":"ai-workflow_description__v5PWJ","runButton":"ai-workflow_runButton__odgqz","canvas":"ai-workflow_canvas__Ce3pF","list":"ai-workflow_list__FROV0","item":"ai-workflow_item___mS0n","pathItem":"ai-workflow_pathItem__NMwTi","inner":"ai-workflow_inner__A_q4W","body":"ai-workflow_body__ZfVjT","head":"ai-workflow_head__0b42D","tail":"ai-workflow_tail__EOlzy","fill":"ai-workflow_fill__m_U_f","dot":"ai-workflow_dot__bj3Zd","wf-travel":"ai-workflow_wf-travel__luWOB","row":"ai-workflow_row__O4y3k","mark":"ai-workflow_mark__QS6B7","text":"ai-workflow_text__mHv9O","stepTitle":"ai-workflow_stepTitle__M6giI","stepDetail":"ai-workflow_stepDetail__Xj7H2","detailText":"ai-workflow_detailText__LQHlH","activity":"ai-workflow_activity__ZGn9d","status":"ai-workflow_status__U_xxb","statusInner":"ai-workflow_statusInner__VxSGM","spinner":"ai-workflow_spinner__Nh7fP","wf-spin":"ai-workflow_wf-spin__4Wopl","removeSlot":"ai-workflow_removeSlot__Z85vl","remove":"ai-workflow_remove___0BQr","tabs":"ai-workflow_tabs__8gefF","tab":"ai-workflow_tab__jCwz0","tabHighlight":"ai-workflow_tabHighlight__ORq59","tabLabel":"ai-workflow_tabLabel__86TTb","fold":"ai-workflow_fold__WTODF","output":"ai-workflow_output__F6VWV","outLine":"ai-workflow_outLine__mwmyJ","name":"ai-workflow_name__YvJIq","outStrong":"ai-workflow_outStrong__2181O","muted":"ai-workflow_muted__naGAt","mono":"ai-workflow_mono__5CDqX","clamp1":"ai-workflow_clamp1__pMDjK","clamp2":"ai-workflow_clamp2__98uWI","label":"ai-workflow_label__wvk7O","labelDot":"ai-workflow_labelDot___8lRC","chunk":"ai-workflow_chunk__P396W","errorOut":"ai-workflow_errorOut__Zem1d","errorText":"ai-workflow_errorText__qYZzW","retry":"ai-workflow_retry__7zbht","pathEmpty":"ai-workflow_pathEmpty__9AkuX","emptyMark":"ai-workflow_emptyMark__RvQb4","empty":"ai-workflow_empty__RaewT","emptyTitle":"ai-workflow_emptyTitle__Hj5cV","emptyText":"ai-workflow_emptyText__BMHKC","triggerList":"ai-workflow_triggerList__Mhv36","triggerOption":"ai-workflow_triggerOption__5k0zh","triggerDetail":"ai-workflow_triggerDetail__ma_7b","skeletonMark":"ai-workflow_skeletonMark__hj7Is","skeletonLine":"ai-workflow_skeletonLine__aV7Wu","wf-pulse":"ai-workflow_wf-pulse__J4JkO","footer":"ai-workflow_footer__tKvx8","summary":"ai-workflow_summary__xb7Ho","summaryInner":"ai-workflow_summaryInner__TuWCX","summaryIcon":"ai-workflow_summaryIcon__kgLd1","liveDot":"ai-workflow_liveDot__dkADT","summaryText":"ai-workflow_summaryText__xwJFP","addButton":"ai-workflow_addButton__vokEs","addLabel":"ai-workflow_addLabel__yPXtD","menu":"ai-workflow_menu__LwM19","search":"ai-workflow_search__3B1qP","searchInput":"ai-workflow_searchInput__UdxOL","options":"ai-workflow_options__pxQIe","option":"ai-workflow_option__3wSTA","optionTitle":"ai-workflow_optionTitle__geocY","optionMeta":"ai-workflow_optionMeta__9hdHa","noMatch":"ai-workflow_noMatch__10urP","summarySuffix":"ai-workflow_summarySuffix__O9XQh"});
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
A.reg(80463, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { AiWorkflowDemo: () => es, default: () => el });
  var i = a(95155), r = a(12115), n = a(66558), s = a(92171), l = a(80642), o = a(25354), d = a(18310), c = a(64577), u = a(35484), p = a(36565), h = a(9005), m = a(92298), f = a(65377), g = a(2125), w = a(40852), x = a(36619), _ = a(51288), k = a(76266), y = a(83978), v = a(52898), j = a(7770);
  let b = [
    {
      id: "new-email",
      kind: "trigger",
      app: "gmail",
      title: "New email in Gmail",
      detail: "support@northwind.dev",
      activity: "Fetching the latest email",
      durationMs: 420,
      output: {
        type: "email",
        from: "Maya Chen",
        address: "maya.chen@ledgerline.io",
        subject: "SSO sign-in broken for our whole team since this morning",
        preview: "Since the 2.14 update none of our 42 seats can sign in through Okta. We demo to our board on Thursday, can someone look today?"
      }
    },
    {
      id: "classify",
      kind: "ai",
      app: "claude",
      title: "Classify with Claude Sonnet 5.5",
      detail: "Urgent, billing, question or feedback",
      activity: "Reading the email",
      durationMs: 1050,
      output: {
        type: "label",
        label: "Urgent",
        confidence: 0.96,
        reason: "Full team lockout after the 2.14 release, 42 seats affected and a board demo on Thursday. Route to on-call now."
      }
    },
    {
      id: "route",
      kind: "branch",
      app: "branch",
      title: "Route by label",
      detail: "If label is Urgent",
      activity: "Checking the rule",
      durationMs: 260,
      output: {
        type: "route",
        pathId: "urgent",
        note: "Label is Urgent, so the email took the Urgent path."
      },
      paths: [
        {
          id: "urgent",
          label: "Urgent",
          steps: [
            {
              id: "slack",
              kind: "action",
              app: "slack",
              title: "Post to #support in Slack",
              detail: "As Triage bot, mentions @oncall",
              activity: "Posting the message",
              durationMs: 620,
              output: {
                type: "message",
                channel: "#support",
                author: "Triage bot",
                text: "Urgent from Ledgerline: SSO sign-in fails for all 42 seats since 2.14. Maya Chen is waiting on a reply. @oncall"
              }
            },
            {
              id: "linear",
              kind: "action",
              app: "linear",
              title: "Create Linear issue",
              detail: "Support team, priority Urgent",
              activity: "Creating the issue",
              durationMs: 700,
              output: {
                type: "record",
                id: "SUP-482",
                title: "SSO sign-in fails for Ledgerline after 2.14",
                meta: "Urgent \xB7 Assigned to Priya Raman"
              }
            }
          ]
        },
        {
          id: "other",
          label: "Everything else",
          steps: [
            {
              id: "notion",
              kind: "action",
              app: "notion",
              title: "Add to Support backlog in Notion",
              detail: "Database: Inbound, status Triage",
              activity: "Adding the page",
              durationMs: 560,
              output: {
                type: "record",
                id: "Inbound",
                title: "SSO sign-in broken for our whole team",
                meta: "Status Triage \xB7 Owner unassigned"
              }
            }
          ]
        }
      ]
    }
  ], N = b.map(
    (e2) => "branch" !== e2.kind ? e2 : {
      ...e2,
      paths: e2.paths?.map((e3) => ({
        ...e3,
        steps: e3.steps.map(
          (e4) => "linear" === e4.id ? {
            ...e4,
            error: "Linear rejected the request: the Support team needs a project for Urgent issues."
          } : e4
        )
      }))
    }
  ), S = [
    {
      kind: "trigger",
      app: "gmail",
      title: "New email in Gmail",
      detail: "support@northwind.dev",
      activity: "Fetching the latest email",
      durationMs: 420,
      output: b[0].output
    },
    {
      kind: "trigger",
      app: "zendesk",
      title: "New ticket in Zendesk",
      detail: "Group: Tier 1",
      activity: "Fetching the latest ticket",
      durationMs: 460,
      output: {
        type: "record",
        id: "#90412",
        title: "Export to CSV times out on large workspaces",
        meta: "Opened by Tom\xE1s Silva \xB7 Normal"
      }
    },
    {
      kind: "trigger",
      app: "stripe",
      title: "Failed payment in Stripe",
      detail: "Live mode, all products",
      activity: "Fetching the latest event",
      durationMs: 400,
      output: {
        type: "record",
        id: "in_1QZ8",
        title: "Ledgerline \xB7 $1,260.00 declined",
        meta: "Card expired \xB7 Retry scheduled Oct 29"
      }
    },
    {
      kind: "trigger",
      app: "github",
      title: "New issue in GitHub",
      detail: "northwind/app",
      activity: "Fetching the latest issue",
      durationMs: 440,
      output: {
        type: "record",
        id: "#2291",
        title: "Okta callback returns 500 after 2.14",
        meta: "Opened by jkowalski \xB7 bug"
      }
    },
    {
      kind: "ai",
      app: "claude",
      title: "Draft reply with Claude Sonnet 5.5",
      detail: "Tone: calm, specific, no promises",
      activity: "Writing the draft",
      durationMs: 980,
      output: {
        type: "text",
        text: "Hi Maya, thanks for the detail. We reproduced the Okta sign-in failure from 2.14 and a fix is rolling out now. I will confirm here the moment your team can sign in again."
      }
    },
    {
      kind: "action",
      app: "slack",
      title: "Message the account owner in Slack",
      detail: "Direct message to the owner",
      activity: "Sending the message",
      durationMs: 560,
      output: {
        type: "message",
        channel: "Direct message",
        author: "Triage bot",
        text: "Heads up: Ledgerline reported an SSO lockout. On-call is on it, issue SUP-482."
      }
    },
    {
      kind: "action",
      app: "linear",
      title: "Create Linear issue",
      detail: "Support team, priority High",
      activity: "Creating the issue",
      durationMs: 680,
      output: {
        type: "record",
        id: "SUP-483",
        title: "Follow up with Ledgerline after the SSO fix",
        meta: "High \xB7 Unassigned"
      }
    },
    {
      kind: "action",
      app: "hubspot",
      title: "Update company in HubSpot",
      detail: "Property: health score",
      activity: "Updating the record",
      durationMs: 600,
      output: {
        type: "record",
        id: "Ledgerline",
        title: "Health score set to At risk",
        meta: "Renewal Dec 14 \xB7 Owner Jonah Park"
      }
    },
    {
      kind: "action",
      app: "sheets",
      title: "Append row to Support log",
      detail: "Sheet: Q4 inbound",
      activity: "Appending the row",
      durationMs: 520,
      output: {
        type: "record",
        id: "Row 1,284",
        title: "Ledgerline \xB7 Urgent \xB7 SSO",
        meta: "Added to Q4 inbound"
      }
    },
    {
      kind: "action",
      app: "notion",
      title: "Add page to Incidents in Notion",
      detail: "Database: Incidents",
      activity: "Adding the page",
      durationMs: 560,
      output: {
        type: "record",
        id: "INC-61",
        title: "SSO sign-in failures after 2.14",
        meta: "Severity 2 \xB7 Investigating"
      }
    }
  ];
  function M({ title: e2, children: t2, ...a2 }) {
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      focusable: "false",
      ...a2,
      children: t2
    });
  }
  let T = {
    gmail: {
      name: "Gmail",
      Mark: function({ title: e2 = "Gmail", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            fill: "#EA4335",
            d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          })
        });
      }
    },
    slack: {
      name: "Slack",
      Mark: function({ title: e2 = "Slack", ...t2 }) {
        return (0, i.jsxs)(M, {
          title: e2,
          ...t2,
          children: [
            (0, i.jsx)("path", {
              fill: "#E01E5A",
              d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
            }),
            (0, i.jsx)("path", {
              fill: "#36C5F0",
              d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
            }),
            (0, i.jsx)("path", {
              fill: "#2EB67D",
              d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
            }),
            (0, i.jsx)("path", {
              fill: "#ECB22E",
              d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
            })
          ]
        });
      }
    },
    linear: {
      name: "Linear",
      Mark: function({ title: e2 = "Linear", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            fill: "#5E6AD2",
            d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
          })
        });
      }
    },
    claude: {
      name: "Claude",
      Mark: function({ title: e2 = "Claude", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            fill: "#D97757",
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      }
    },
    notion: {
      name: "Notion",
      Mark: function({ title: e2 = "Notion", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
          })
        });
      }
    },
    sheets: {
      name: "Google Sheets",
      Mark: function({ title: e2 = "Google Sheets", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            fill: "#34A853",
            d: "M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z"
          })
        });
      }
    },
    hubspot: {
      name: "HubSpot",
      Mark: function({ title: e2 = "HubSpot", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            fill: "#FF7A59",
            d: "M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
          })
        });
      }
    },
    zendesk: {
      name: "Zendesk",
      Mark: function({ title: e2 = "Zendesk", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            d: "M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
          })
        });
      }
    },
    github: {
      name: "GitHub",
      Mark: function({ title: e2 = "GitHub", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          })
        });
      }
    },
    stripe: {
      name: "Stripe",
      Mark: function({ title: e2 = "Stripe", ...t2 }) {
        return (0, i.jsx)(M, {
          title: e2,
          ...t2,
          children: (0, i.jsx)("path", {
            fill: "#635BFF",
            d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
          })
        });
      }
    },
    branch: {
      name: "Branch",
      Mark: function({ title: e2 = "Branch", ...t2 }) {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.9,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          role: "img",
          "aria-label": e2,
          focusable: "false",
          ...t2,
          children: [
            (0, i.jsx)("circle", { cx: "6", cy: "5", r: "2.25" }),
            (0, i.jsx)("circle", { cx: "6", cy: "19", r: "2.25" }),
            (0, i.jsx)("circle", { cx: "18", cy: "9", r: "2.25" }),
            (0, i.jsx)("path", {
              d: "M6 7.25v9.5M18 11.25c0 3.5-3 4.75-7 4.75H8.25"
            })
          ]
        });
      }
    }
  };
  var L = a(49094), C = a.n(L);
  let A = (...e2) => e2.filter(Boolean).join(" "), E = {
    trigger: "Trigger",
    ai: "AI step",
    action: "Action",
    branch: "Branch"
  }, $ = {
    trigger: "Waiting for the event",
    ai: "Thinking",
    action: "Working",
    branch: "Checking the rule"
  }, z = { trigger: 420, ai: 1e3, action: 620, branch: 260 }, D = [...j.T.ease.standard], R = { opacity: 1, y: 0, transition: { duration: 0.16, ease: D } }, O = { opacity: 0, transition: { duration: 0.1, ease: D } };
  function I(e2) {
    return void 0 !== e2 && Number.isFinite(e2) ? e2 < 1e3 ? `${Math.max(1, Math.round(e2))}ms` : `${(e2 / 1e3).toFixed(1)}s` : "";
  }
  function F(e2) {
    return "string" == typeof e2 ? T[e2].name : e2.name;
  }
  function P({ app: e2, size: t2 = 16 }) {
    if ("string" != typeof e2)
      return (0, i.jsx)(i.Fragment, { children: e2.mark });
    let { Mark: a2, name: r2 } = T[e2];
    return (0, i.jsx)(a2, {
      width: t2,
      height: t2,
      title: r2,
      "aria-hidden": "true"
    });
  }
  function W() {
    return new DOMException("The run was stopped.", "AbortError");
  }
  function U(e2, t2) {
    return new Promise((a2, i2) => {
      if (t2.aborted) return void i2(W());
      let r2 = window.setTimeout(() => {
        t2.removeEventListener("abort", n2), a2();
      }, e2);
      function n2() {
        window.clearTimeout(r2), i2(W());
      }
      t2.addEventListener("abort", n2, { once: true });
    });
  }
  function H(e2) {
    let t2 = (0, r.useRef)(null), a2 = (0, r.useRef)(null);
    return (0, r.useEffect)(() => {
      let i2, r2 = t2.current, n2 = a2.current;
      if (!r2 || !n2 || "u" < typeof ResizeObserver) return;
      let l2 = n2.offsetHeight, o2 = n2.offsetWidth, d2 = () => {
        r2.style.height = "", r2.style.overflow = "", i2 = void 0;
      }, c2 = new ResizeObserver(() => {
        let t3 = n2.offsetHeight, a3 = n2.offsetWidth, c3 = a3 !== o2;
        if (o2 = a3, t3 === l2) return;
        let u2 = i2 ? r2.getBoundingClientRect().height : l2;
        (l2 = t3, i2?.stop(), e2 || c3) ? d2() : (r2.style.overflow = "hidden", i2 = (0, s.i)(
          r2,
          { height: [u2, t3] },
          {
            type: "spring",
            visualDuration: 0.2,
            bounce: 0,
            onComplete: d2
          }
        ));
      });
      return c2.observe(n2), () => {
        c2.disconnect(), i2?.stop();
      };
    }, [e2]), { outer: t2, inner: a2 };
  }
  function B() {
    return (0, i.jsxs)("svg", {
      className: C().spinner,
      width: 14,
      height: 14,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".2",
          strokeWidth: "1.75"
        }),
        (0, i.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function V({ text: e2, reduced: t2, className: a2 }) {
    let n2 = (0, r.useMemo)(() => {
      let t3 = e2.split(/(?<=\s)/), a3 = [];
      for (let e3 = 0; e3 < t3.length; e3 += 5)
        a3.push(t3.slice(e3, e3 + 5).join(""));
      return a3;
    }, [e2]), s2 = n2.length, [l2, o2] = (0, r.useState)(t2 ? s2 : 0), [d2, c2] = (0, r.useState)({ text: e2, reduced: t2 });
    return (d2.text !== e2 || d2.reduced !== t2) && (c2({ text: e2, reduced: t2 }), o2(t2 ? s2 : 0)), (0, r.useEffect)(() => {
      if (t2) return;
      let e3 = 0, a3 = window.setInterval(() => {
        o2(e3 += 1), e3 >= s2 && window.clearInterval(a3);
      }, 34);
      return () => window.clearInterval(a3);
    }, [e2, s2, t2]), (0, i.jsx)("p", {
      className: a2,
      children: n2.map(
        (e3, t3) => (0, i.jsx)(
          "span",
          {
            className: C().chunk,
            "data-shown": t3 < l2 || void 0,
            children: e3
          },
          t3
        )
      )
    });
  }
  let K = /urgent|critical|outage|blocker/i;
  function G({ output: e2, reduced: t2 }) {
    switch (e2.type) {
      case "email":
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("p", {
              className: C().outLine,
              children: [
                (0, i.jsx)("span", { className: C().name, children: e2.from }),
                e2.address ? (0, i.jsx)("span", {
                  className: C().mono,
                  children: e2.address
                }) : null
              ]
            }),
            (0, i.jsx)("p", {
              className: A(C().outStrong, C().clamp1),
              children: e2.subject
            }),
            (0, i.jsx)("p", { className: C().clamp1, children: e2.preview })
          ]
        });
      case "label":
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("p", {
              className: C().outLine,
              children: [
                (0, i.jsxs)("span", {
                  className: C().label,
                  children: [
                    (0, i.jsx)("span", {
                      className: C().labelDot,
                      "data-tone": K.test(e2.label) ? "urgent" : void 0,
                      "aria-hidden": "true"
                    }),
                    e2.label
                  ]
                }),
                void 0 !== e2.confidence ? (0, i.jsxs)("span", {
                  className: C().mono,
                  children: [e2.confidence.toFixed(2), " confidence"]
                }) : null
              ]
            }),
            e2.reason ? (0, i.jsx)(V, { text: e2.reason, reduced: t2 }) : null
          ]
        });
      case "route":
        return (0, i.jsx)("p", {
          children: e2.note ?? `Took the ${e2.pathId} path.`
        });
      case "message":
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("p", {
              className: C().outLine,
              children: [
                (0, i.jsx)("span", { className: C().name, children: e2.author }),
                (0, i.jsx)("span", {
                  className: C().muted,
                  children: e2.channel
                }),
                (0, i.jsx)("span", { className: C().muted, children: "now" })
              ]
            }),
            (0, i.jsx)("p", { className: C().clamp2, children: e2.text })
          ]
        });
      case "record":
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("p", {
              className: C().outLine,
              children: [
                (0, i.jsx)("span", { className: C().mono, children: e2.id }),
                (0, i.jsx)("span", {
                  className: A(C().outStrong, C().clamp1),
                  children: e2.title
                })
              ]
            }),
            e2.meta ? (0, i.jsx)("p", {
              className: A(C().muted, C().clamp1),
              children: e2.meta
            }) : null
          ]
        });
      case "text":
        return (0, i.jsx)(V, { text: e2.text, reduced: t2 });
    }
  }
  function Z({ kind: e2, run: t2 }) {
    let { status: a2 } = t2, r2 = "running" === a2 ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(B, {}),
        (0, i.jsx)("span", { children: "Running" })
      ]
    }) : "done" === a2 ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(c.A, { size: 14, strokeWidth: 2 }),
        (0, i.jsx)("span", {
          className: C().tabular,
          children: I(t2.ms)
        })
      ]
    }) : "error" === a2 ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(u.A, { size: 14, strokeWidth: 2 }),
        (0, i.jsx)("span", { children: "Failed" })
      ]
    }) : "skipped" === a2 ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(p.A, { size: 14, strokeWidth: 2 }),
        (0, i.jsx)("span", { children: "Skipped" })
      ]
    }) : (0, i.jsx)("span", { children: E[e2] });
    return (0, i.jsx)("span", {
      className: C().status,
      "aria-hidden": "true",
      children: (0, i.jsx)(l.N, {
        initial: false,
        children: (0, i.jsx)(
          o.PY1.span,
          {
            className: C().statusInner,
            "data-status": a2,
            initial: { opacity: 0, y: 2 },
            animate: R,
            exit: O,
            children: r2
          },
          a2
        )
      })
    });
  }
  let Y = (e2) => ({
    initial: !e2 && { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: e2 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
    transition: e2 ? { duration: 0 } : {
      height: { type: "spring", visualDuration: 0.22, bounce: 0 },
      opacity: { duration: 0.16, ease: D }
    }
  });
  function q({ state: e2, reduced: t2 }) {
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", {
          className: C().head,
          "aria-hidden": "true",
          children: (0, i.jsx)("span", {
            className: C().fill,
            "data-state": e2
          })
        }),
        "active" !== e2 || t2 ? null : (0, i.jsx)("span", { className: C().dot, "aria-hidden": "true" })
      ]
    });
  }
  function Q({
    step: e2,
    run: t2,
    head: a2,
    tail: r2,
    reduced: n2,
    removable: s2,
    busy: d2,
    onRemove: c2,
    onRetry: u2,
    children: p2
  }) {
    let f2 = F(e2.app), g2 = e2.activity ?? $[e2.kind], w2 = "running" === t2.status, x2 = "done" === t2.status && void 0 !== t2.output && "route" !== t2.output.type, k2 = "idle" === t2.status ? E[e2.kind] : "done" === t2.status ? `Done in ${I(t2.ms)}` : "running" === t2.status ? "Running" : "error" === t2.status ? "Failed" : "Skipped";
    return (0, i.jsx)(o.PY1.li, {
      className: C().item,
      ...Y(n2),
      children: (0, i.jsxs)("div", {
        className: C().inner,
        "data-head": a2 ? "" : void 0,
        children: [
          a2 ? (0, i.jsx)(q, { state: a2, reduced: n2 }) : null,
          (0, i.jsxs)("div", {
            className: C().body,
            "data-status": t2.status,
            children: [
              r2 ? (0, i.jsx)("span", {
                className: C().tail,
                "aria-hidden": "true",
                children: (0, i.jsx)("span", {
                  className: C().fill,
                  "data-state": "done" === t2.status ? "done" : "idle"
                })
              }) : null,
              (0, i.jsxs)("div", {
                className: C().row,
                children: [
                  (0, i.jsx)("span", {
                    className: C().mark,
                    children: (0, i.jsx)(P, { app: e2.app })
                  }),
                  (0, i.jsxs)("div", {
                    className: C().text,
                    children: [
                      (0, i.jsxs)("p", {
                        className: C().stepTitle,
                        children: [
                          e2.title,
                          (0, i.jsxs)("span", {
                            className: C().srOnly,
                            children: [", ", f2, ", ", k2]
                          })
                        ]
                      }),
                      (0, i.jsxs)("p", {
                        className: C().stepDetail,
                        children: [
                          (0, i.jsx)("span", {
                            className: C().detailText,
                            "data-hidden": w2 || void 0,
                            children: e2.detail ?? E[e2.kind]
                          }),
                          (0, i.jsx)("span", {
                            className: C().activity,
                            "data-hidden": !w2 || void 0,
                            "aria-hidden": "true",
                            children: (0, i.jsx)(v.n, {
                              active: w2 && !n2,
                              children: g2
                            })
                          })
                        ]
                      })
                    ]
                  }),
                  (0, i.jsx)(Z, { kind: e2.kind, run: t2 }),
                  (0, i.jsx)("span", {
                    className: C().removeSlot,
                    children: s2 ? (0, i.jsx)("button", {
                      type: "button",
                      className: C().remove,
                      onClick: c2,
                      disabled: d2,
                      "aria-label": `Remove ${e2.title}`,
                      children: (0, i.jsx)(h.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    }) : null
                  })
                ]
              }),
              p2,
              (0, i.jsxs)(l.N, {
                initial: false,
                children: [
                  x2 && t2.output ? (0, i.jsx)(
                    o.PY1.div,
                    {
                      className: C().fold,
                      ...Y(n2),
                      children: (0, i.jsx)("div", {
                        className: C().output,
                        children: (0, i.jsx)(G, {
                          output: t2.output,
                          reduced: n2
                        })
                      })
                    },
                    "output"
                  ) : null,
                  "error" === t2.status ? (0, i.jsx)(
                    o.PY1.div,
                    {
                      className: C().fold,
                      ...Y(n2),
                      children: (0, i.jsxs)("div", {
                        className: A(C().output, C().errorOut),
                        children: [
                          (0, i.jsx)("p", {
                            className: C().errorText,
                            children: t2.error ?? "This step failed."
                          }),
                          (0, i.jsxs)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            className: C().retry,
                            onClick: u2,
                            "aria-label": `Retry ${e2.title}`,
                            children: [
                              (0, i.jsx)(m.A, {
                                size: 12,
                                strokeWidth: 2,
                                "aria-hidden": "true"
                              }),
                              "Retry"
                            ]
                          })
                        ]
                      })
                    },
                    "error"
                  ) : null
                ]
              })
            ]
          })
        ]
      })
    });
  }
  function X({ label: e2, paths: t2, value: a2, onChange: n2, reduced: s2 }) {
    let l2 = (0, r.useId)(), d2 = (0, r.useRef)([]);
    return (0, i.jsx)("div", {
      className: C().tabs,
      role: "radiogroup",
      "aria-label": e2,
      children: t2.map((e3, r2) => {
        let c2 = e3.id === a2;
        return (0, i.jsxs)(
          "button",
          {
            ref: (e4) => {
              d2.current[r2] = e4;
            },
            type: "button",
            role: "radio",
            "aria-checked": c2,
            tabIndex: c2 ? 0 : -1,
            className: C().tab,
            "data-selected": c2 || void 0,
            onClick: () => n2(e3.id),
            onKeyDown: (e4) => {
              let a3, i2;
              return a3 = t2.length - 1, void (!((i2 = "ArrowRight" === e4.key || "ArrowDown" === e4.key ? r2 === a3 ? 0 : r2 + 1 : "ArrowLeft" === e4.key || "ArrowUp" === e4.key ? 0 === r2 ? a3 : r2 - 1 : "Home" === e4.key ? 0 : "End" === e4.key ? a3 : -1) < 0) && (e4.preventDefault(), n2(t2[i2].id), d2.current[i2]?.focus()));
            },
            children: [
              c2 ? (0, i.jsx)(o.PY1.span, {
                layoutId: l2,
                className: C().tabHighlight,
                transition: s2 ? { duration: 0 } : { type: "spring", visualDuration: 0.2, bounce: 0 },
                "aria-hidden": "true"
              }) : null,
              (0, i.jsx)("span", {
                className: C().tabLabel,
                children: e3.label
              })
            ]
          },
          e3.id
        );
      })
    });
  }
  function J({ items: e2, reduced: t2, onPick: a2 }) {
    let [n2, s2] = (0, r.useState)(""), [l2, o2] = (0, r.useState)(0), d2 = (0, r.useId)(), c2 = (0, r.useRef)(null), u2 = (0, r.useRef)(null), { outer: p2, inner: h2 } = H(t2), m2 = n2.trim().toLowerCase(), g2 = m2 ? e2.filter(
      (e3) => `${e3.title} ${F(e3.app)} ${e3.detail ?? ""}`.toLowerCase().includes(m2)
    ) : e2, w2 = Math.min(l2, Math.max(0, g2.length - 1));
    return (0, r.useEffect)(() => {
      c2.current?.focus();
    }, []), (0, r.useEffect)(() => {
      u2.current?.querySelector(`[data-index="${w2}"]`)?.scrollIntoView({ block: "nearest" });
    }, [w2]), (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)("div", {
          className: C().search,
          children: [
            (0, i.jsx)(f.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, i.jsx)("input", {
              ref: c2,
              className: C().searchInput,
              value: n2,
              placeholder: "Search apps and actions",
              "aria-label": "Search steps",
              role: "combobox",
              "aria-expanded": "true",
              "aria-controls": d2,
              "aria-autocomplete": "list",
              "aria-activedescendant": g2[w2] ? `${d2}-${w2}` : void 0,
              onChange: (e3) => {
                s2(e3.target.value), o2(0);
              },
              onKeyDown: (e3) => {
                if ("ArrowDown" === e3.key || "ArrowUp" === e3.key)
                  e3.preventDefault(), g2.length && o2(
                    (w2 + ("ArrowDown" === e3.key ? 1 : -1) + g2.length) % g2.length
                  );
                else if ("Enter" === e3.key)
                  e3.preventDefault(), g2[w2] && a2(g2[w2]);
                else if (!m2 && /^[1-9]$/.test(e3.key) && !e3.metaKey && !e3.ctrlKey && !e3.altKey) {
                  let t3 = g2[Number(e3.key) - 1];
                  t3 && (e3.preventDefault(), a2(t3));
                }
              }
            })
          ]
        }),
        (0, i.jsx)("div", {
          ref: p2,
          children: (0, i.jsx)("div", {
            ref: h2,
            children: (0, i.jsxs)("ul", {
              ref: u2,
              id: d2,
              role: "listbox",
              "aria-label": "Steps",
              className: C().options,
              children: [
                g2.map(
                  (e3, t3) => (0, i.jsxs)(
                    "li",
                    {
                      id: `${d2}-${t3}`,
                      role: "option",
                      "aria-selected": t3 === w2,
                      "data-index": t3,
                      className: C().option,
                      "data-active": t3 === w2 || void 0,
                      onPointerMove: () => o2(t3),
                      onClick: () => a2(e3),
                      children: [
                        (0, i.jsx)("span", {
                          className: C().mark,
                          children: (0, i.jsx)(P, { app: e3.app })
                        }),
                        (0, i.jsx)("span", {
                          className: C().optionTitle,
                          children: e3.title
                        }),
                        (0, i.jsx)("span", {
                          className: C().optionMeta,
                          children: !m2 && t3 < 9 ? (0, i.jsx)(k.ue, {
                            keys: String(t3 + 1),
                            size: "sm"
                          }) : E[e3.kind]
                        })
                      ]
                    },
                    `${e3.title}-${t3}`
                  )
                ),
                0 === g2.length ? (0, i.jsxs)("li", {
                  className: C().noMatch,
                  role: "presentation",
                  children: ["No steps match \u201C", n2.trim(), "\u201D"]
                }) : null
              ]
            })
          })
        })
      ]
    });
  }
  function ee({ label: e2, items: t2, disabled: a2, reduced: n2, onPick: s2 }) {
    let [l2, o2] = (0, r.useState)(false);
    return a2 && l2 && o2(false), (0, i.jsxs)(y.AM, {
      open: l2,
      onOpenChange: o2,
      children: [
        (0, i.jsxs)(y.Wv, {
          className: C().addButton,
          disabled: a2,
          children: [
            (0, i.jsx)(g.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, i.jsx)("span", { className: C().addLabel, children: e2 })
          ]
        }),
        (0, i.jsx)(y.hl, {
          side: "bottom",
          align: "end",
          sideOffset: 6,
          className: C().menu,
          onOpenAutoFocus: (e3) => e3.preventDefault(),
          children: (0, i.jsx)(J, {
            items: t2,
            reduced: n2,
            onPick: (e3) => {
              s2(e3), o2(false);
            }
          })
        })
      ]
    });
  }
  function et() {
    return (0, i.jsx)("ol", {
      className: C().list,
      "aria-hidden": "true",
      children: [0, 1, 2].map(
        (e2) => (0, i.jsx)(
          "li",
          {
            className: C().item,
            children: (0, i.jsxs)("div", {
              className: C().inner,
              "data-head": e2 > 0 ? "" : void 0,
              children: [
                e2 > 0 ? (0, i.jsx)("span", { className: C().head }) : null,
                (0, i.jsxs)("div", {
                  className: C().body,
                  children: [
                    e2 < 2 ? (0, i.jsx)("span", { className: C().tail }) : null,
                    (0, i.jsxs)("div", {
                      className: C().row,
                      children: [
                        (0, i.jsx)("span", {
                          className: A(C().mark, C().skeletonMark)
                        }),
                        (0, i.jsx)("span", {
                          className: C().skeletonLine,
                          style: { "--w": `${[52, 64, 44][e2]}%` }
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          },
          e2
        )
      )
    });
  }
  function ea({
    title: e2 = "Escalate urgent support email",
    description: t2 = "Runs on every new email to support@northwind.dev",
    steps: a2,
    defaultSteps: n2,
    onStepsChange: s2,
    catalog: p2 = S,
    onRunStep: h2,
    onRunComplete: f2,
    loading: g2 = false,
    autoPlay: k2 = true,
    editable: y2 = true,
    className: j2
  }) {
    let N2 = (0, d.I)() ?? false, [M2, T2] = (0, r.useState)(() => n2 ?? a2 ?? b), L2 = a2 ?? M2, [E2, $2] = (0, r.useState)({}), [F2, W2] = (0, r.useState)(null), [B2, V2] = (0, r.useState)("idle"), [K2, G2] = (0, r.useState)(""), [Z2, Y2] = (0, r.useState)(0), [q2, J2] = (0, r.useState)({}), [ei2, er2] = (0, r.useState)(""), [en2, es2] = (0, r.useState)(false), [el2, eo] = (0, r.useState)(false), ed = (0, r.useRef)(null), ec = (0, r.useRef)({}), eu = (0, r.useRef)(L2), ep = (0, r.useRef)({}), eh = (0, r.useRef)(null), em = (0, r.useRef)(0), ef = (0, r.useRef)({ onRunStep: h2, onRunComplete: f2 });
    (0, r.useLayoutEffect)(() => {
      eu.current = L2, ef.current = { onRunStep: h2, onRunComplete: f2 };
    });
    let eg = !h2, ew = (function e3(t3) {
      return t3.reduce(
        (t4, a3) => t4 + 1 + (a3.paths ?? []).reduce((t5, a4) => t5 + e3(a4.steps), 0),
        0
      );
    })(L2), ex = "running" === B2, { outer: e_, inner: ek } = H(N2);
    (0, r.useEffect)(() => () => eh.current?.abort(), []), (0, r.useEffect)(() => {
      let e3 = ed.current;
      if (!e3 || "u" < typeof IntersectionObserver) return void es2(true);
      let t3 = new IntersectionObserver(([e4]) => es2(e4?.isIntersecting ?? false), {
        threshold: 0.35
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let ey = (e3, t3) => {
      ec.current = { ...ec.current, [e3]: t3 }, $2(ec.current);
    };
    async function ev(e3, t3) {
      let a3 = ef.current.onRunStep;
      if (a3) return a3(e3, t3);
      if (await U(e3.durationMs ?? z[e3.kind], t3.signal), e3.error && 0 === t3.attempt)
        throw Error(e3.error);
      return e3.output ? e3.output : "branch" === e3.kind && e3.paths?.[0] ? { type: "route", pathId: e3.paths[0].id } : void 0;
    }
    async function ej(e3 = false) {
      let t3;
      eh.current?.abort();
      let a3 = new AbortController();
      eh.current = a3;
      let { signal: i2 } = a3;
      e3 || (ec.current = {}, $2({}), ep.current = {}, Y2(0)), V2("running"), W2(null), er2(
        e3 ? "Retrying the failed step." : `Test run started.${eg ? " Simulated, nothing is sent." : ""}`
      );
      let r2 = {}, n3 = eu.current, s3 = 0, l2 = true, o2 = Object.values(ec.current).reduce(
        (e4, t4) => e4 + ("done" === t4.status ? t4.ms ?? 0 : 0),
        0
      );
      try {
        for (; s3 < n3.length; ) {
          let e4 = n3[s3];
          t3 = e4;
          let a4 = ec.current[e4.id];
          if (a4?.status === "done")
            a4.output && (r2 = { ...r2, [e4.id]: a4.output });
          else {
            let t4;
            l2 || (W2(e4.id), await U(240 * !N2, i2), W2(null)), ey(e4.id, { status: "running" });
            let a5 = ep.current[e4.id] ?? 0;
            ep.current[e4.id] = a5 + 1;
            let n4 = performance.now();
            try {
              t4 = await ev(e4, { signal: i2, previous: { ...r2 }, attempt: a5 });
            } catch (a6) {
              if (i2.aborted) throw a6;
              let t5 = a6 instanceof Error ? a6.message : "This step failed.";
              ey(e4.id, { status: "error", error: t5 }), G2(e4.title), V2("failed"), er2(`${e4.title} failed. ${t5}`), ef.current.onRunComplete?.({
                status: "failed",
                durationMs: o2,
                outputs: r2,
                failedStepId: e4.id
              });
              return;
            }
            i2.throwIfAborted();
            let s4 = Math.round(performance.now() - n4);
            o2 += s4, Y2(o2), ey(e4.id, { status: "done", output: t4 ?? void 0, ms: s4 }), t4 && (r2 = { ...r2, [e4.id]: t4 }), er2(
              `${e4.title}: ${(function(e5) {
                if (!e5) return "done";
                switch (e5.type) {
                  case "email":
                    return `${e5.from}, ${e5.subject}`;
                  case "label":
                    return void 0 !== e5.confidence ? `${e5.label}, ${Math.round(100 * e5.confidence)}% confidence` : e5.label;
                  case "route":
                    return e5.note ?? `took the ${e5.pathId} path`;
                  case "message":
                    return `posted to ${e5.channel}`;
                  case "record":
                    return `${e5.id}, ${e5.title}`;
                  case "text":
                    return e5.text;
                }
              })(t4)}.`
            ), await U(120 * !N2, i2);
          }
          if (l2 = false, "branch" === e4.kind && e4.paths?.length) {
            let t4 = ec.current[e4.id]?.output, a5 = e4.paths.find((e5) => t4?.type === "route" && e5.id === t4.pathId) ?? e4.paths[0];
            for (let t5 of (J2((t6) => ({ ...t6, [e4.id]: a5.id })), e4.paths))
              if (t5.id !== a5.id)
                for (let e5 of t5.steps) ey(e5.id, { status: "skipped" });
            n3 = a5.steps, s3 = 0;
            continue;
          }
          s3 += 1;
        }
        V2("passed"), er2(
          `Test run passed in ${I(o2)}.${eg ? " Simulated, nothing was sent." : ""}`
        ), ef.current.onRunComplete?.({
          status: "passed",
          durationMs: o2,
          outputs: r2
        });
      } catch {
        if (eh.current !== a3) return;
        W2(null), t3 && ec.current[t3.id]?.status === "running" && ey(t3.id, { status: "idle" }), V2("stopped"), er2(`Test run stopped.${eg ? " Nothing was sent." : ""}`);
      }
    }
    (0, r.useEffect)(() => {
      if (!k2 || !en2 || el2 || g2 || 0 === ew || "running" === B2 || "stopped" === B2)
        return;
      let e3 = window.setTimeout(
        () => {
          ej();
        },
        "idle" === B2 ? 600 : 4200
      );
      return () => window.clearTimeout(e3);
    }, [k2, en2, el2, g2, ew, B2]);
    let eb = (e3) => {
      void 0 === a2 && T2(e3), eu.current = e3, s2?.(e3), "idle" !== B2 && V2("idle");
    }, eN = L2[L2.length - 1], eS = eN?.kind === "branch" && eN.paths?.length ? eN : void 0, eM = eS ? q2[eS.id] ?? eS.paths[0].id : void 0, eT = eS?.paths.find((e3) => e3.id === eM)?.label, eL = (e3) => {
      em.current += 1;
      let t3 = {
        ...e3,
        id: `${"string" == typeof e3.app ? e3.app : "step"}-added-${em.current}`
      };
      eS && eM ? (eb(
        L2.map(
          (e4) => e4 !== eS ? e4 : {
            ...e4,
            paths: e4.paths.map(
              (e5) => e5.id === eM ? { ...e5, steps: [...e5.steps, t3] } : e5
            )
          }
        )
      ), er2(`Added ${t3.title} to the ${eT ?? ""} path.`)) : (eb([...L2, t3]), er2(`Added ${t3.title}.`));
    }, eC = (e3) => E2[e3] ?? { status: "idle" }, eA = 0 === L2.length, eE = p2.filter((e3) => "trigger" !== e3.kind), e$ = p2.filter((e3) => "trigger" === e3.kind), ez = (e3, t3, a3, r2) => {
      let n3;
      return (0, i.jsx)(
        Q,
        {
          step: e3,
          run: eC(e3.id),
          head: t3 ? null : F2 === (n3 = e3.id) ? "active" : "idle" === eC(n3).status || "skipped" === eC(n3).status ? "idle" : "done",
          tail: a3,
          reduced: N2,
          removable: y2 && "trigger" !== e3.kind,
          busy: ex,
          onRemove: () => {
            var t4;
            let a4;
            return a4 = (function e4(t5, a5) {
              for (let i2 of t5) {
                if (i2.id === a5) return i2;
                for (let t6 of i2.paths ?? []) {
                  let i3 = e4(t6.steps, a5);
                  if (i3) return i3;
                }
              }
            })(L2, t4 = e3.id), void (eb(
              (function e4(t5, a5) {
                return t5.filter((e5) => e5.id !== a5).map(
                  (t6) => t6.paths ? {
                    ...t6,
                    paths: t6.paths.map((t7) => ({
                      ...t7,
                      steps: e4(t7.steps, a5)
                    }))
                  } : t6
                );
              })(L2, t4)
            ), er2(a4 ? `Removed ${a4.title}.` : "Removed the step."));
          },
          onRetry: () => {
            ej(true);
          },
          children: r2
        },
        e3.id
      );
    }, eD = ex ? {
      key: "running",
      icon: (0, i.jsx)("span", { className: C().liveDot }),
      text: (0, i.jsx)(v.n, {
        active: !N2,
        children: "Test run in progress"
      })
    } : "passed" === B2 ? {
      key: "passed",
      icon: (0, i.jsx)(c.A, { size: 14, strokeWidth: 2 }),
      text: (0, i.jsxs)(i.Fragment, {
        children: [
          "Passed in ",
          (0, i.jsx)("span", {
            className: C().tabular,
            children: I(Z2)
          }),
          eg ? (0, i.jsx)("span", {
            className: C().summarySuffix,
            children: ", simulated, nothing was sent"
          }) : null
        ]
      })
    } : "failed" === B2 ? {
      key: "failed",
      icon: (0, i.jsx)(u.A, { size: 14, strokeWidth: 2 }),
      text: (0, i.jsxs)(i.Fragment, { children: ["Failed at ", K2] })
    } : "stopped" === B2 ? {
      key: "stopped",
      icon: (0, i.jsx)(w.A, { size: 11, strokeWidth: 2 }),
      text: (0, i.jsxs)(i.Fragment, {
        children: ["Stopped", eg ? ", nothing was sent" : ""]
      })
    } : {
      key: "idle",
      icon: null,
      text: g2 ? (0, i.jsx)(i.Fragment, { children: "Loading steps" }) : eA ? (0, i.jsx)(i.Fragment, { children: "No steps yet" }) : (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)("span", {
            className: C().tabular,
            children: ew
          }),
          " ",
          1 === ew ? "step" : "steps",
          eg ? (0, i.jsx)("span", {
            className: C().summarySuffix,
            children: ", test runs are simulated"
          }) : null
        ]
      })
    }, eR = ex ? (0, i.jsxs)(_.$, {
      variant: "secondary",
      size: "sm",
      className: C().runButton,
      onClick: () => eh.current?.abort(),
      children: [
        (0, i.jsx)(w.A, {
          size: 10,
          strokeWidth: 2.4,
          "aria-hidden": "true"
        }),
        "Stop"
      ]
    }) : (0, i.jsx)(_.$, {
      variant: "primary",
      size: "sm",
      className: C().runButton,
      onClick: () => {
        ej();
      },
      disabled: g2 || eA,
      children: "idle" === B2 || "stopped" === B2 ? (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(x.A, {
            size: 12,
            strokeWidth: 2.2,
            "aria-hidden": "true"
          }),
          "Test run"
        ]
      }) : (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(m.A, {
            size: 12,
            strokeWidth: 2.2,
            "aria-hidden": "true"
          }),
          "Run again"
        ]
      })
    });
    return (0, i.jsxs)("section", {
      ref: ed,
      className: A(C().root, j2),
      "aria-label": e2,
      "aria-busy": ex || g2 || void 0,
      onPointerDownCapture: () => eo(true),
      onKeyDownCapture: () => eo(true),
      children: [
        (0, i.jsxs)("header", {
          className: C().header,
          children: [
            (0, i.jsxs)("div", {
              className: C().headText,
              children: [
                (0, i.jsx)("h3", { className: C().title, children: e2 }),
                t2 ? (0, i.jsx)("p", { className: C().description, children: t2 }) : null
              ]
            }),
            eR
          ]
        }),
        (0, i.jsx)("div", {
          className: C().canvas,
          children: g2 ? (0, i.jsx)(et, {}) : eA ? (0, i.jsxs)("div", {
            className: C().empty,
            children: [
              (0, i.jsx)("p", {
                className: C().emptyTitle,
                children: "Start with a trigger"
              }),
              (0, i.jsx)("p", {
                className: C().emptyText,
                children: "Pick the event that starts this workflow."
              }),
              y2 && e$.length ? (0, i.jsx)("ul", {
                className: C().triggerList,
                children: e$.map(
                  (e3) => (0, i.jsx)(
                    "li",
                    {
                      children: (0, i.jsxs)("button", {
                        type: "button",
                        className: C().triggerOption,
                        onClick: () => eL(e3),
                        children: [
                          (0, i.jsx)("span", {
                            className: C().mark,
                            children: (0, i.jsx)(P, { app: e3.app })
                          }),
                          (0, i.jsx)("span", {
                            className: C().optionTitle,
                            children: e3.title
                          }),
                          e3.detail ? (0, i.jsx)("span", {
                            className: C().triggerDetail,
                            children: e3.detail
                          }) : null
                        ]
                      })
                    },
                    e3.title
                  )
                )
              }) : null
            ]
          }) : (0, i.jsx)("ol", {
            className: C().list,
            children: (0, i.jsx)(l.N, {
              initial: false,
              children: L2.map((e3, t3) => {
                let a3 = t3 === L2.length - 1;
                if ("branch" !== e3.kind || !e3.paths?.length)
                  return ez(e3, 0 === t3, !a3);
                let r2 = q2[e3.id] ?? e3.paths[0].id, n3 = e3.paths.find((e4) => e4.id === r2) ?? e3.paths[0], s3 = (0, i.jsx)(X, {
                  label: `Paths for ${e3.title}`,
                  paths: e3.paths,
                  value: n3.id,
                  reduced: N2,
                  onChange: (t4) => J2((a4) => ({ ...a4, [e3.id]: t4 }))
                });
                return [
                  ez(e3, 0 === t3, true, s3),
                  (0, i.jsx)(
                    o.PY1.li,
                    {
                      className: C().pathItem,
                      initial: false,
                      animate: { opacity: 1 },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.1 * !N2 }
                      },
                      children: (0, i.jsx)("div", {
                        ref: e_,
                        children: (0, i.jsx)("div", {
                          ref: ek,
                          children: (0, i.jsx)(l.N, {
                            initial: false,
                            mode: "popLayout",
                            children: (0, i.jsxs)(
                              o.PY1.ol,
                              {
                                className: C().list,
                                "aria-label": `${n3.label} path`,
                                initial: !N2 && { opacity: 0 },
                                animate: {
                                  opacity: 1,
                                  transition: {
                                    duration: 0.16,
                                    ease: D,
                                    delay: 0.04
                                  }
                                },
                                exit: {
                                  opacity: 0,
                                  transition: {
                                    duration: 0.1 * !N2,
                                    ease: D
                                  }
                                },
                                children: [
                                  (0, i.jsx)(l.N, {
                                    initial: false,
                                    children: n3.steps.map(
                                      (e4, t4) => ez(e4, false, t4 < n3.steps.length - 1)
                                    )
                                  }),
                                  0 === n3.steps.length ? (0, i.jsx)("li", {
                                    className: C().item,
                                    children: (0, i.jsxs)("div", {
                                      className: C().inner,
                                      "data-head": "",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: C().head,
                                          "aria-hidden": "true"
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: A(
                                            C().row,
                                            C().pathEmpty
                                          ),
                                          children: [
                                            (0, i.jsx)("span", {
                                              className: A(
                                                C().mark,
                                                C().emptyMark
                                              ),
                                              "aria-hidden": "true"
                                            }),
                                            (0, i.jsx)("span", {
                                              className: C().emptyText,
                                              children: "No steps on this path yet"
                                            })
                                          ]
                                        })
                                      ]
                                    })
                                  }) : null
                                ]
                              },
                              n3.id
                            )
                          })
                        })
                      })
                    },
                    `${e3.id}-paths`
                  )
                ];
              })
            })
          })
        }),
        (0, i.jsxs)("footer", {
          className: C().footer,
          children: [
            (0, i.jsx)("p", {
              className: C().summary,
              "aria-hidden": "true",
              children: (0, i.jsx)(l.N, {
                initial: false,
                children: (0, i.jsxs)(
                  o.PY1.span,
                  {
                    className: C().summaryInner,
                    "data-state": eD.key,
                    initial: { opacity: 0, y: 2 },
                    animate: R,
                    exit: O,
                    children: [
                      eD.icon ? (0, i.jsx)("span", {
                        className: C().summaryIcon,
                        children: eD.icon
                      }) : null,
                      (0, i.jsx)("span", {
                        className: C().summaryText,
                        children: eD.text
                      })
                    ]
                  },
                  eD.key
                )
              })
            }),
            y2 && !eA && eE.length > 0 && !g2 ? (0, i.jsx)(ee, {
              label: eS ? `Add to ${eT ?? "path"}` : "Add step",
              items: eE,
              disabled: ex,
              reduced: N2,
              onPick: eL
            }) : null
          ]
        }),
        (0, i.jsx)("p", {
          className: C().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ei2
        })
      ]
    });
  }
  var ei = a(47016), er = a.n(ei);
  let en = [
    { value: "passes", label: "Passes" },
    { value: "fails", label: "Fails" },
    { value: "loading", label: "Loading" },
    { value: "empty", label: "Empty" }
  ];
  function es() {
    let [e2, t2] = (0, r.useState)("passes");
    return (0, i.jsxs)("div", {
      className: er().demo,
      children: [
        (0, i.jsx)(n.A, {
          label: "Preview state",
          options: en,
          value: e2,
          onValueChange: (e3) => t2(e3)
        }),
        (0, i.jsx)(
          ea,
          {
            defaultSteps: "fails" === e2 ? N : "empty" === e2 ? [] : b,
            loading: "loading" === e2,
            autoPlay: "passes" === e2 || "fails" === e2
          },
          e2
        )
      ]
    });
  }
  let el = es;
}

__m(__module,__exports,__require);
});
A.reg(83978, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { AM: () => l, Wv: () => u, hl: () => c, iN: () => d });
  var a = r(95155), n = r(40093), i = r(12115), s = r(25898), o = r.n(s);
  let l = n.bL, d = n.bm, u = (0, i.forwardRef)(function({ className: e2, ...t2 }, r2) {
    return (0, a.jsx)(n.l9, {
      ...t2,
      ref: r2,
      className: [o().anchor, e2].filter(Boolean).join(" ")
    });
  });
  u.displayName = "PopoverTrigger";
  let c = (0, i.forwardRef)(function({
    className: e2,
    align: t2 = "start",
    sideOffset: r2 = 6,
    collisionPadding: i2 = 10,
    ...s2
  }, l2) {
    return (0, a.jsx)(n.ZL, {
      children: (0, a.jsx)(n.UC, {
        ...s2,
        ref: l2,
        align: t2,
        sideOffset: r2,
        collisionPadding: i2,
        className: [o().content, e2].filter(Boolean).join(" ")
      })
    });
  });
  c.displayName = "PopoverContent";
}

__m(__module,__exports,__require);
});
A.cssFor("ai-workflow", [12053,47016,49094]);
A.item("ai-workflow", {entry:80463, export:"AiWorkflowDemo", kind:"component", tier:"pro", unresolved:[]});
})();