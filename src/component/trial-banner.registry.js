/* trial-banner (pro component) */
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
A.regCss(18305, ".demo{display:flex;width:100%;max-width:760px;flex-direction:column;align-items:center;gap:24px;margin:0 auto}\n.controls{display:flex;max-width:100%;flex-wrap:wrap;justify-content:center;gap:8px}\n.stage{display:flex;width:100%;min-height:412px;align-items:flex-start;justify-content:center}", {"demo":"demo","controls":"controls","stage":"stage"});
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
A.reg(57465, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "users",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(76599, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var o = r(51811);
  let n = {
    name: "alarm-clock",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
      ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
      ["path", { d: "M5 3 2 6", key: "18tl5t" }],
      ["path", { d: "m22 6-3-3", key: "1opdir" }],
      ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
      ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
    ]
  };
  n.node;
  let a = (0, o.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(90570, ".trial-banner_root__lk_4W{--tb-tint:var(--accent);position:relative;width:100%;min-width:0;container-type:inline-size;color:var(--foreground);font-size:13px;line-height:18px}.trial-banner_isBanner__tgU9k{max-width:760px}.trial-banner_isCard__Oyu_L{max-width:340px}.trial-banner_isPill__Yn_Ml{width:auto;container-type:normal}.trial-banner_view__l6fjO{min-width:0}.trial-banner_swap__lnwF6{display:grid;min-width:0}.trial-banner_swapItem__bCtTJ{grid-area:1/1;display:flex;min-width:0;align-items:center}.trial-banner_truncate__vLrQb{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.trial-banner_srOnly__1zbHl{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.trial-banner_ring__j3zk2{position:relative;display:inline-grid;flex:none;place-items:center;color:var(--foreground)}.trial-banner_ringSvg__Ux_5X{position:absolute;inset:0;transform:rotate(-90deg)}.trial-banner_ringTrack__ZDuD1{stroke:color-mix(in oklab,var(--foreground) 14%,transparent)}.trial-banner_ringValue__8x3AH{stroke:var(--accent);transition:stroke var(--duration-fast,.16s) var(--ease-standard,ease-out)}.trial-banner_ring__j3zk2[data-tone=warning] .trial-banner_ringValue__8x3AH{stroke:var(--warning)}.trial-banner_ring__j3zk2[data-tone=upgraded] .trial-banner_ringValue__8x3AH{stroke:var(--success)}.trial-banner_ringCenter__qgsgD{position:relative;place-items:center}.trial-banner_ringCenter__qgsgD .trial-banner_swapItem__bCtTJ{justify-content:center}.trial-banner_ring__j3zk2[data-tone=expired] .trial-banner_ringCenter__qgsgD{color:var(--text-secondary)}.trial-banner_ring__j3zk2[data-tone=upgraded] .trial-banner_ringCenter__qgsgD{color:var(--success)}.trial-banner_ringDays__1cozm{font-size:12px;font-weight:500;line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.01em}.trial-banner_icons__UJNb8{display:inline-flex;flex:none;align-items:center}.trial-banner_iconButton__HTIvk{display:inline-grid;width:var(--control-height-sm,32px);height:var(--control-height-sm,32px);place-items:center;padding:0;border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color .12s var(--ease-standard,ease-out),background-color .12s var(--ease-standard,ease-out),transform .12s var(--ease-standard,ease-out)}@media (hover:hover) and (pointer:fine){.trial-banner_iconButton__HTIvk:hover{background:var(--surface-muted);color:var(--foreground)}}.trial-banner_iconButton__HTIvk[data-state=open]{background:var(--surface-muted);color:var(--foreground)}.trial-banner_iconButton__HTIvk:active{transform:scale(.94)}.trial-banner_banner__pGwFH{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;grid-template-areas:\"ring text actions icons\";align-items:center;column-gap:12px;min-height:56px;padding:8px 8px 8px 14px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);transition:background-color .2s var(--ease-standard,ease-out),border-color .2s var(--ease-standard,ease-out)}.trial-banner_banner__pGwFH[data-tone=warning]{border-color:color-mix(in oklab,var(--warning) 32%,var(--border));background:color-mix(in oklab,var(--warning) 6%,var(--surface))}.trial-banner_bannerRing__SFGKJ{grid-area:ring;display:inline-flex}.trial-banner_bannerText__x3YyH{grid-area:text;display:grid;min-width:0;row-gap:1px}.trial-banner_bannerTitle__Jwf_1{font-size:14px;font-weight:500;line-height:20px}.trial-banner_bannerSub__APwzQ{color:var(--text-muted)}.trial-banner_bannerActions__ahZTt{grid-area:actions;display:inline-flex;align-items:center;gap:4px}.trial-banner_banner__pGwFH>.trial-banner_icons__UJNb8{grid-area:icons;padding-left:4px;border-left:1px solid var(--border-subtle);margin-left:0}.trial-banner_banner__pGwFH[data-tone=warning]>.trial-banner_icons__UJNb8{border-left-color:color-mix(in oklab,var(--warning) 22%,var(--border-subtle))}.trial-banner_subInner__cLEha{display:flex;min-width:0;align-items:center;gap:6px}.trial-banner_subText__njW56{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.trial-banner_errorIcon__p6kng{flex:none;color:var(--danger)}.trial-banner_card__5AStp{display:flex;flex-direction:column;padding:16px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);transition:border-color .2s var(--ease-standard,ease-out)}.trial-banner_card__5AStp[data-tone=warning]{border-color:color-mix(in oklab,var(--warning) 32%,var(--border))}.trial-banner_cardFloating__9gwuQ{border:0;background:transparent}.trial-banner_cardHead__ZP5n1{display:flex;align-items:flex-start;justify-content:space-between}.trial-banner_cardHead__ZP5n1>.trial-banner_icons__UJNb8{margin:-6px -6px 0 0}.trial-banner_cardTitle__ccCvS{margin-top:12px;font-size:14px;font-weight:500;line-height:20px}.trial-banner_cardMeta__Bn9Sr{margin-top:2px;color:var(--text-muted)}.trial-banner_list__f_Qz2{margin-top:16px;padding-top:12px;border-top:1px solid var(--border-subtle)}.trial-banner_listLabel__fbESv{margin-bottom:4px;color:var(--text-muted);font-size:12px;line-height:16px}.trial-banner_rows__Nbc8E{margin:0;padding:0;list-style:none}.trial-banner_row__X8_Ti{display:flex;height:32px;align-items:center;gap:8px}.trial-banner_rowIcon__16Kgo{display:inline-grid;width:16px;height:16px;flex:none;place-items:center;color:var(--text-secondary);transition:opacity .2s var(--ease-standard,ease-out)}.trial-banner_rowIcon__16Kgo svg{display:block;width:14px;height:14px}.trial-banner_rowLabel__6IMDJ{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:color .2s var(--ease-standard,ease-out)}.trial-banner_rowDetail__Qev3o{flex:none;color:var(--text-muted);font-size:12px;text-align:right}.trial-banner_rowState__64c0D{width:14px;flex:none;color:var(--text-muted)}.trial-banner_rowState__64c0D .trial-banner_swapItem__bCtTJ{justify-content:center}.trial-banner_card__5AStp[data-tone=expired] .trial-banner_rowLabel__6IMDJ{color:var(--text-secondary)}.trial-banner_card__5AStp[data-tone=expired] .trial-banner_rowIcon__16Kgo{opacity:.55}.trial-banner_card__5AStp[data-tone=upgraded] .trial-banner_rowState__64c0D{color:var(--success)}.trial-banner_cardActions__y3o3K{display:flex;flex-direction:column;gap:4px;margin-top:16px}.trial-banner_cardActions__y3o3K>*{width:100%}.trial-banner_pill__hIr_X{display:inline-flex;height:var(--control-height-sm,32px);max-width:100%;align-items:center;gap:8px;padding:0 12px 0 8px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:13px;font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .12s var(--ease-standard,ease-out),border-color .2s var(--ease-standard,ease-out),transform .12s var(--ease-standard,ease-out)}@media (hover:hover) and (pointer:fine){.trial-banner_pill__hIr_X:hover{background:var(--surface-muted)}}.trial-banner_pill__hIr_X[data-state=open]{background:var(--surface-muted)}.trial-banner_pill__hIr_X:active{transform:scale(.97)}.trial-banner_pill__hIr_X[data-tone=warning]{border-color:color-mix(in oklab,var(--warning) 36%,var(--border));background:color-mix(in oklab,var(--warning) 7%,var(--surface))}.trial-banner_pill__hIr_X[data-tone=expired] .trial-banner_pillLead__Z8run{color:var(--text-secondary)}.trial-banner_pill__hIr_X[data-tone=upgraded] .trial-banner_pillLead__Z8run{color:var(--success)}.trial-banner_pillLead__Z8run{width:16px;height:16px;flex:none}.trial-banner_pillLead__Z8run .trial-banner_swapItem__bCtTJ{justify-content:center}.trial-banner_pillLabel__YuYTT{position:relative;display:inline-flex;min-width:0;overflow-x:clip}.trial-banner_pillLabel__YuYTT>.trial-banner_swap__lnwF6{width:100%}.trial-banner_pillMeasure__DCDuJ{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}.trial-banner_menu__J0eNb,.trial-banner_popover__gMOEh{z-index:60;border:1px solid var(--border);background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:var(--radix-popper-transform-origin);transition:opacity .16s var(--ease-enter,ease-out),transform .2s var(--ease-standard,ease-out)}.trial-banner_popover__gMOEh{width:min(340px,var(--radix-popover-content-available-width));border-radius:var(--radius-panel);color:var(--foreground);font-size:13px;line-height:18px}.trial-banner_menu__J0eNb{min-width:13rem;padding:4px;border-radius:var(--radius-panel)}.trial-banner_menu__J0eNb[data-state=closed],.trial-banner_popover__gMOEh[data-state=closed]{opacity:0;transform:translateY(-2px) scale(.99);transition-duration:.12s;animation:trial-banner_tb-exit__c0trj .12s linear both;pointer-events:none}@keyframes trial-banner_tb-exit__c0trj{to{opacity:0}}.trial-banner_menuItem__EjV3k{display:flex;min-height:36px;align-items:center;padding:0 12px;border-radius:calc(var(--radius-panel) - 6px);color:var(--foreground);font-size:13px;cursor:pointer;outline:none;transition:background-color .1s var(--ease-standard,ease-out)}.trial-banner_menuItem__EjV3k[data-highlighted]{background:var(--surface-muted)}@media (prefers-reduced-motion:reduce){.trial-banner_banner__pGwFH,.trial-banner_card__5AStp,.trial-banner_iconButton__HTIvk,.trial-banner_menu__J0eNb,.trial-banner_pill__hIr_X,.trial-banner_popover__gMOEh,.trial-banner_ringValue__8x3AH{transition-duration:0s}}@media (prefers-reduced-motion:reduce){.trial-banner_iconButton__HTIvk:active,.trial-banner_pill__hIr_X:active{transform:none}}", {"root":"trial-banner_root__lk_4W","isBanner":"trial-banner_isBanner__tgU9k","isCard":"trial-banner_isCard__Oyu_L","isPill":"trial-banner_isPill__Yn_Ml","view":"trial-banner_view__l6fjO","swap":"trial-banner_swap__lnwF6","swapItem":"trial-banner_swapItem__bCtTJ","truncate":"trial-banner_truncate__vLrQb","srOnly":"trial-banner_srOnly__1zbHl","ring":"trial-banner_ring__j3zk2","ringSvg":"trial-banner_ringSvg__Ux_5X","ringTrack":"trial-banner_ringTrack__ZDuD1","ringValue":"trial-banner_ringValue__8x3AH","ringCenter":"trial-banner_ringCenter__qgsgD","ringDays":"trial-banner_ringDays__1cozm","icons":"trial-banner_icons__UJNb8","iconButton":"trial-banner_iconButton__HTIvk","banner":"trial-banner_banner__pGwFH","bannerRing":"trial-banner_bannerRing__SFGKJ","bannerText":"trial-banner_bannerText__x3YyH","bannerTitle":"trial-banner_bannerTitle__Jwf_1","bannerSub":"trial-banner_bannerSub__APwzQ","bannerActions":"trial-banner_bannerActions__ahZTt","subInner":"trial-banner_subInner__cLEha","subText":"trial-banner_subText__njW56","errorIcon":"trial-banner_errorIcon__p6kng","card":"trial-banner_card__5AStp","cardFloating":"trial-banner_cardFloating__9gwuQ","cardHead":"trial-banner_cardHead__ZP5n1","cardTitle":"trial-banner_cardTitle__ccCvS","cardMeta":"trial-banner_cardMeta__Bn9Sr","list":"trial-banner_list__f_Qz2","listLabel":"trial-banner_listLabel__fbESv","rows":"trial-banner_rows__Nbc8E","row":"trial-banner_row__X8_Ti","rowIcon":"trial-banner_rowIcon__16Kgo","rowLabel":"trial-banner_rowLabel__6IMDJ","rowDetail":"trial-banner_rowDetail__Qev3o","rowState":"trial-banner_rowState__64c0D","cardActions":"trial-banner_cardActions__y3o3K","pill":"trial-banner_pill__hIr_X","pillLead":"trial-banner_pillLead__Z8run","pillLabel":"trial-banner_pillLabel__YuYTT","pillMeasure":"trial-banner_pillMeasure__DCDuJ","popover":"trial-banner_popover__gMOEh","menu":"trial-banner_menu__J0eNb","tb-exit":"trial-banner_tb-exit__c0trj","menuItem":"trial-banner_menuItem__EjV3k"});
A.reg(93603, function(__module,__exports,__require){
"use strict";
function __m(e, a, n) {
  "use strict";
  n.r(a), n.d(a, { TrialBannerDemo: () => R, default: () => W });
  var r = n(95155), t = n(12115), i = n(66558), l = n(57793), s = n(40093), d = n(18310), o = n(80642), c = n(25354), u = n(57465), h = n(64577), _ = n(5736), b = n(9005), m = n(35484), p = n(76599), x = n(7770), g = n(51288), f = n(90570), j = n.n(f);
  let v = Date.UTC(2026, 9, 27), w = [...x.T.ease.standard], y = { type: "spring", visualDuration: 0.24, bounce: 0 }, N = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), k = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), S = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "UTC" }), $ = (e2, a2) => `${e2} ${a2}${1 === e2 ? "" : "s"}`, T = (...e2) => e2.filter(Boolean).join(" "), A = [
    {
      id: "sso",
      label: "Single sign-on with Okta",
      icon: (0, r.jsx)(function({ size: e2 = 14, ...a2 }) {
        return (0, r.jsx)("svg", {
          width: e2,
          height: e2,
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          ...a2,
          children: (0, r.jsx)("path", {
            fill: "#007DC1",
            d: "M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z"
          })
        });
      }, {})
    },
    {
      id: "slack",
      label: "Slack alerts",
      detail: "4 channels",
      icon: (0, r.jsx)(function({ size: e2 = 14, ...a2 }) {
        return (0, r.jsxs)("svg", {
          width: e2,
          height: e2,
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          ...a2,
          children: [
            (0, r.jsx)("path", {
              fill: "#E01E5A",
              d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
            }),
            (0, r.jsx)("path", {
              fill: "#36C5F0",
              d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
            }),
            (0, r.jsx)("path", {
              fill: "#2EB67D",
              d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
            }),
            (0, r.jsx)("path", {
              fill: "#ECB22E",
              d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
            })
          ]
        });
      }, {})
    },
    {
      id: "linear",
      label: "Linear issue sync",
      detail: "148 issues",
      icon: (0, r.jsx)(function({ size: e2 = 14, ...a2 }) {
        return (0, r.jsx)("svg", {
          width: e2,
          height: e2,
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          ...a2,
          children: (0, r.jsx)("path", {
            fill: "#5E6AD2",
            d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
          })
        });
      }, {})
    },
    {
      id: "seats",
      label: "Team seats",
      detail: "12 in use",
      icon: (0, r.jsx)(u.A, { size: 14, strokeWidth: 1.8 })
    }
  ];
  function L({
    variant: e2 = "banner",
    plan: a2 = "Pro",
    daysLeft: n2 = 9,
    trialDays: i2 = 14,
    endsAt: l2,
    warnAt: u2 = 3,
    workspace: p2 = "Northwind",
    features: x2 = A,
    lossSummary: f2 = "Okta SSO and 12 seats",
    onAddPayment: y2,
    onComparePlans: E2,
    onManageBilling: I2,
    onDismiss: B2,
    onSnooze: P2,
    collapseTo: R2 = "pill",
    dismissible: W2 = true,
    snoozable: O = true,
    className: Y
  }) {
    let U, F = !!(0, d.I)(), [Z, H] = (0, t.useState)("idle"), [V, J] = (0, t.useState)(false), [K, Q] = (0, t.useState)(false), [q, X] = (0, t.useState)(null), [G, ee] = (0, t.useState)(""), ea = (0, t.useRef)(null), en = (0, t.useRef)(0), er = (0, t.useRef)(null), et = (0, t.useRef)(null), ei = (0, t.useRef)(null);
    (0, t.useEffect)(
      () => () => {
        ea.current?.abort(), window.clearTimeout(en.current);
      },
      []
    );
    let el = Math.max(0, Math.ceil(n2)), es = new Date(void 0 !== l2 ? l2 : v + 864e5 * el), ed = "added" === Z ? "upgraded" : el <= 0 ? "expired" : el <= u2 ? "warning" : "active", eo = "upgraded" === ed ? 1 : "expired" === ed ? 0 : Math.min(1, el / Math.max(1, i2)), ec = N.format(es), eu = k.format(es), eh = S.format(es), e_ = {
      active: {
        title: `${$(el, "day")} left in your ${a2} trial`,
        sub: `Keep ${f2} after ${eu}.`,
        meta: `Trial ends ${ec}`,
        list: "Add a card to keep",
        pill: `${$(el, "day")} left`
      },
      warning: {
        title: 1 === el ? `Your ${a2} trial ends tomorrow` : `Your ${a2} trial ends in ${$(el, "day")}`,
        sub: `On ${eh} you lose ${f2}.`,
        meta: `Ends ${ec}`,
        list: `You lose these on ${eh}`,
        pill: `${$(el, "day")} left`
      },
      expired: {
        title: `Your ${a2} trial has ended`,
        sub: `${f2[0]?.toUpperCase() ?? ""}${f2.slice(1)} are paused on Free.`,
        meta: `Ended ${ec}`,
        list: `Paused while ${p2} is on Free`,
        pill: "Trial ended"
      },
      upgraded: {
        title: `You're all set on ${a2}`,
        sub: `Payment method added. Billing starts ${eu}.`,
        meta: `Billing starts ${ec}`,
        list: `Staying on ${a2}`,
        pill: `${a2} active`
      }
    }[ed], eb = "error" === Z ? "Billing didn't open. Check your connection and try again." : null, em = q ?? eb ?? e_.sub, ep = "upgraded" === ed ? "Done" : "error" === Z ? "Try again" : "expired" === ed ? `Upgrade to ${a2}` : "Add payment method", ex = "upgraded" === ed ? "Manage billing" : "Compare plans", eg = [{ id: "tomorrow", label: "Remind me tomorrow", days: 1 }];
    "active" === ed && el > 3 && eg.push({ id: "3-days", label: "Remind me in 3 days", days: 3 }), "active" === ed && el > u2 + 1 && eg.push({
      id: "warning",
      label: `Remind me when ${$(u2, "day")} are left`,
      days: el - u2
    }), (0, t.useLayoutEffect)(() => {
      let e3 = ei.current;
      e3 && (ei.current = null, ("pill" === e3 ? er : et).current?.focus());
    });
    let ef = (0, t.useCallback)((e3) => {
      window.clearTimeout(en.current), X(e3), en.current = window.setTimeout(() => X(null), 2200);
    }, []), ej = (a3) => {
      Q(false), X(null), ee(a3), "pill" !== e2 && (J(true), ei.current = "pill" === R2 ? "pill" : null);
    }, ev = () => {
      B2?.(), ej(
        B2 ? "Trial banner hidden." : "Trial banner hidden. Simulated, nothing was saved."
      );
    }, ew = (e3) => {
      let a3 = new Date(v + 864e5 * e3.days);
      P2?.({ ...e3, until: a3 }), ej(
        `Snoozed until ${N.format(a3)}.${P2 ? "" : " Simulated, nothing was saved."}`
      );
    }, ey = async () => {
      if ("adding" === Z) return;
      if ("upgraded" === ed) return void ev();
      ea.current?.abort();
      let e3 = new AbortController();
      ea.current = e3, X(null), H("adding"), ee(
        y2 ? "Opening billing." : "Opening billing. Simulated, no card is charged."
      );
      try {
        if (y2) await y2(e3.signal);
        else {
          var n3;
          await (n3 = e3.signal, new Promise((e4, a3) => {
            let r2 = window.setTimeout(e4, 900);
            n3.addEventListener(
              "abort",
              () => {
                window.clearTimeout(r2), a3(n3.reason);
              },
              { once: true }
            );
          }));
        }
        if (e3.signal.aborted) return;
        H("added"), ee(
          y2 ? `Payment method added. You stay on ${a2}.` : `Payment method added. You stay on ${a2}. Simulated, no card was charged.`
        );
      } catch {
        if (e3.signal.aborted) return;
        H("error"), ee("Billing didn't open. Try again.");
      }
    }, eN = () => {
      "upgraded" === ed ? I2 ? I2() : ef("Simulated: this opens your billing settings.") : E2 ? E2() : ef("Simulated: this opens your plans page.");
    }, ek = (e3, a3, n3) => (0, r.jsx)(C, {
      size: e3,
      stroke: a3,
      progress: eo,
      tone: ed,
      reduced: F,
      children: n3 && (0, r.jsx)(z, {
        id: "upgraded" === ed ? "check" : "expired" === ed ? "lock" : String(el),
        reduced: F,
        className: j().ringCenter,
        children: "upgraded" === ed ? (0, r.jsx)(h.A, { size: 14, strokeWidth: 2 }) : "expired" === ed ? (0, r.jsx)(_.A, { size: 14, strokeWidth: 1.8 }) : (0, r.jsx)("span", {
          className: j().ringDays,
          children: el
        })
      })
    }), eS = (0, r.jsxs)("span", {
      className: j().icons,
      children: [
        O && (0, r.jsx)(M, { options: eg, onSelect: ew }),
        W2 && (0, r.jsx)("button", {
          type: "button",
          className: j().iconButton,
          "aria-label": "Dismiss",
          onClick: ev,
          children: (0, r.jsx)(b.A, {
            size: 16,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          })
        })
      ]
    }), e$ = (e3) => (0, r.jsx)(z, {
      id: em,
      reduced: F,
      className: e3,
      children: (0, r.jsxs)("span", {
        className: j().subInner,
        children: [
          eb && !q && (0, r.jsx)(m.A, {
            className: j().errorIcon,
            size: 14,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          }),
          (0, r.jsx)("span", { className: j().subText, children: em })
        ]
      })
    }), eT = (e3) => (0, r.jsx)(g.$, {
      variant: "ghost",
      size: e3,
      onClick: eN,
      children: ex
    }), eA = (e3) => (0, r.jsx)(g.$, {
      ref: et,
      variant: "primary",
      size: e3,
      loading: "adding" === Z,
      onClick: ey,
      children: ep
    }), eL = (e3) => (0, r.jsxs)("div", {
      className: T(j().card, e3 && j().cardFloating),
      "data-tone": ed,
      children: [
        (0, r.jsxs)("div", {
          className: j().cardHead,
          children: [
            ek(40, 3, true),
            !e3 && eS,
            e3 && (0, r.jsxs)("span", {
              className: j().icons,
              children: [
                O && (0, r.jsx)(M, { options: eg, onSelect: ew }),
                (0, r.jsx)(s.bm, {
                  className: j().iconButton,
                  "aria-label": "Close",
                  children: (0, r.jsx)(b.A, {
                    size: 16,
                    strokeWidth: 1.8,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(z, {
          id: e_.title,
          reduced: F,
          className: j().cardTitle,
          children: (0, r.jsx)("span", {
            className: j().truncate,
            children: e_.title
          })
        }),
        q || eb ? e$(j().cardMeta) : (0, r.jsx)(z, {
          id: e_.meta,
          reduced: F,
          className: j().cardMeta,
          children: (0, r.jsx)("span", {
            className: j().truncate,
            children: e_.meta
          })
        }),
        (0, r.jsxs)("div", {
          className: j().list,
          children: [
            (0, r.jsx)(z, {
              id: e_.list,
              reduced: F,
              className: j().listLabel,
              children: (0, r.jsx)("span", {
                className: j().truncate,
                children: e_.list
              })
            }),
            (0, r.jsx)("ul", {
              className: j().rows,
              children: x2.map(
                (e4) => (0, r.jsxs)(
                  "li",
                  {
                    className: j().row,
                    children: [
                      (0, r.jsx)("span", {
                        className: j().rowIcon,
                        "aria-hidden": "true",
                        children: e4.icon
                      }),
                      (0, r.jsx)("span", {
                        className: j().rowLabel,
                        children: e4.label
                      }),
                      e4.detail && (0, r.jsx)("span", {
                        className: j().rowDetail,
                        children: e4.detail
                      }),
                      (0, r.jsx)(z, {
                        id: ed,
                        reduced: F,
                        className: j().rowState,
                        children: "expired" === ed ? (0, r.jsx)(_.A, {
                          size: 14,
                          strokeWidth: 1.8,
                          "aria-label": "Paused"
                        }) : "upgraded" === ed ? (0, r.jsx)(h.A, {
                          size: 14,
                          strokeWidth: 2,
                          "aria-label": "Kept"
                        }) : (0, r.jsx)("span", {})
                      })
                    ]
                  },
                  e4.id
                )
              )
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: j().cardActions,
          children: [eA("md"), eT("md")]
        })
      ]
    }), eC = (e3 = {}) => (0, r.jsxs)("button", {
      ref: er,
      type: "button",
      className: j().pill,
      "data-tone": ed,
      ...e3,
      "aria-label": `${a2} trial: ${e_.pill}${V ? ". Show details" : ""}`,
      children: [
        (0, r.jsx)(z, {
          id: "expired" === ed ? "lock" : "upgraded" === ed ? "check" : "ring",
          reduced: F,
          className: j().pillLead,
          children: "expired" === ed ? (0, r.jsx)(_.A, { size: 14, strokeWidth: 1.8 }) : "upgraded" === ed ? (0, r.jsx)(h.A, { size: 14, strokeWidth: 2 }) : (0, r.jsx)(C, {
            size: 16,
            stroke: 2,
            progress: eo,
            tone: ed,
            reduced: F
          })
        }),
        (0, r.jsx)(D, { text: e_.pill, reduced: F })
      ]
    }), ez = e2;
    return "pill" === e2 ? U = (0, r.jsxs)(s.bL, {
      open: K,
      onOpenChange: Q,
      children: [
        (0, r.jsx)(s.l9, { asChild: true, children: eC() }),
        (0, r.jsx)(s.ZL, {
          children: (0, r.jsx)(s.UC, {
            className: j().popover,
            side: "bottom",
            align: "start",
            sideOffset: 8,
            collisionPadding: 12,
            "aria-label": `${a2} trial`,
            children: eL(true)
          })
        })
      ]
    }) : V ? (ez = "collapsed", U = "pill" === R2 ? eC({
      onClick: () => {
        J(false), ee(""), ei.current = "primary";
      }
    }) : null) : U = "card" === e2 ? (0, r.jsx)("section", {
      "aria-label": `${a2} trial`,
      children: eL(false)
    }) : (0, r.jsxs)("section", {
      className: j().banner,
      "data-tone": ed,
      "aria-label": `${a2} trial`,
      children: [
        (0, r.jsx)("span", {
          className: j().bannerRing,
          children: ek(28, 2.5, true)
        }),
        (0, r.jsxs)("div", {
          className: j().bannerText,
          children: [
            (0, r.jsx)(z, {
              id: e_.title,
              reduced: F,
              className: j().bannerTitle,
              children: (0, r.jsx)("span", {
                className: j().truncate,
                children: e_.title
              })
            }),
            e$(j().bannerSub)
          ]
        }),
        (0, r.jsxs)("div", {
          className: j().bannerActions,
          children: [eT("sm"), eA("sm")]
        }),
        eS
      ]
    }), (0, r.jsxs)("div", {
      className: T(
        j().root,
        "pill" === e2 ? j().isPill : "card" === e2 ? j().isCard : j().isBanner,
        Y
      ),
      children: [
        (0, r.jsx)(o.N, {
          mode: "wait",
          initial: false,
          children: (0, r.jsx)(
            c.PY1.div,
            {
              className: j().view,
              initial: !F && { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { duration: 0.16 * !F, ease: w }
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.1 * !F, ease: w }
              },
              children: U
            },
            ez
          )
        }),
        (0, r.jsx)("span", {
          className: j().srOnly,
          role: "status",
          "aria-live": "polite",
          children: G
        })
      ]
    });
  }
  function C({
    size: e2,
    stroke: a2,
    progress: n2,
    tone: t2,
    reduced: i2,
    children: l2
  }) {
    let s2 = (e2 - a2) / 2, d2 = e2 / 2;
    return (0, r.jsxs)("span", {
      className: j().ring,
      "data-tone": t2,
      style: { width: e2, height: e2 },
      "aria-hidden": "true",
      children: [
        (0, r.jsxs)("svg", {
          width: e2,
          height: e2,
          viewBox: `0 0 ${e2} ${e2}`,
          className: j().ringSvg,
          children: [
            (0, r.jsx)("circle", {
              className: j().ringTrack,
              cx: d2,
              cy: d2,
              r: s2,
              strokeWidth: a2,
              fill: "none"
            }),
            (0, r.jsx)(c.PY1.circle, {
              className: j().ringValue,
              cx: d2,
              cy: d2,
              r: s2,
              strokeWidth: a2,
              fill: "none",
              pathLength: 1,
              strokeDasharray: "1 1",
              strokeLinecap: "round",
              initial: false,
              animate: { strokeDashoffset: 1 - n2, opacity: +(n2 > 0) },
              transition: i2 ? { duration: 0 } : { strokeDashoffset: y, opacity: { duration: 0.16, ease: w } }
            })
          ]
        }),
        l2
      ]
    });
  }
  function z({ id: e2, children: a2, className: n2, reduced: t2 }) {
    return (0, r.jsx)("span", {
      className: T(j().swap, n2),
      children: (0, r.jsx)(o.N, {
        initial: false,
        children: (0, r.jsx)(
          c.PY1.span,
          {
            className: j().swapItem,
            initial: !t2 && { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16 * !t2, ease: w }
            },
            exit: {
              opacity: 0,
              y: 0,
              transition: { duration: 0.1 * !t2, ease: w }
            },
            children: a2
          },
          e2
        )
      })
    });
  }
  function D({ text: e2, reduced: a2 }) {
    let n2 = (0, t.useRef)(null), i2 = (0, t.useRef)(null), [l2, s2] = (0, t.useState)({ width: "auto", animate: false });
    return (0, t.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = e3.textContent, n3 = null !== i2.current && i2.current !== a4;
        i2.current = a4, s2({
          width: Math.ceil(e3.getBoundingClientRect().width),
          animate: n3
        });
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, r.jsxs)(c.PY1.span, {
      className: j().pillLabel,
      initial: false,
      animate: { width: l2.width },
      transition: l2.animate && !a2 ? y : { duration: 0 },
      children: [
        (0, r.jsx)("span", {
          ref: n2,
          className: j().pillMeasure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, r.jsx)(z, {
          id: e2,
          reduced: a2,
          children: (0, r.jsx)("span", {
            className: j().truncate,
            children: e2
          })
        })
      ]
    });
  }
  function M({ options: e2, onSelect: a2 }) {
    return (0, r.jsxs)(l.bL, {
      modal: false,
      children: [
        (0, r.jsx)(l.l9, {
          className: j().iconButton,
          "aria-label": "Snooze",
          children: (0, r.jsx)(p.A, {
            size: 16,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          })
        }),
        (0, r.jsx)(l.ZL, {
          children: (0, r.jsx)(l.UC, {
            className: j().menu,
            align: "end",
            sideOffset: 6,
            collisionPadding: 12,
            loop: true,
            children: e2.map(
              (e3) => (0, r.jsx)(
                l.q7,
                {
                  className: j().menuItem,
                  onSelect: () => a2(e3),
                  children: e3.label
                },
                e3.id
              )
            )
          })
        })
      ]
    });
  }
  var E = n(18305), I = n.n(E);
  let B = [
    { value: "banner", label: "Banner" },
    { value: "card", label: "Sidebar card" },
    { value: "pill", label: "Pill" }
  ], P = [
    { value: "9", label: "9 days left" },
    { value: "2", label: "2 days left" },
    { value: "0", label: "Expired" }
  ];
  function R() {
    let [e2, a2] = (0, t.useState)("banner"), [n2, l2] = (0, t.useState)("9");
    return (0, r.jsxs)("div", {
      className: I().demo,
      children: [
        (0, r.jsxs)("div", {
          className: I().controls,
          children: [
            (0, r.jsx)(i.A, {
              label: "Variant",
              options: B,
              value: e2,
              onValueChange: (e3) => a2(e3)
            }),
            (0, r.jsx)(i.A, {
              label: "Trial",
              options: P,
              value: n2,
              onValueChange: l2
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: I().stage,
          "data-variant": e2,
          children: (0, r.jsx)(L, { variant: e2, daysLeft: Number(n2) }, e2)
        })
      ]
    });
  }
  let W = R;
}

__m(__module,__exports,__require);
});
A.cssFor("trial-banner", [18305,90570]);
A.item("trial-banner", {entry:93603, export:"TrialBannerDemo", kind:"component", tier:"pro", unresolved:[]});
})();