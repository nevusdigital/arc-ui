/* presence-stack (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(17143, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-plus",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(17476, ".presence-stack_root__QEGF5{--presence-ring:var(--background);--dot:10px;position:relative;display:inline-flex;vertical-align:middle;font-family:var(--font-body);letter-spacing:var(--tracking-body)}.presence-stack_root__QEGF5.presence-stack_sm__l6aXG{--dot:8px}.presence-stack_root__QEGF5.presence-stack_lg__TfRq_{--dot:12px}.presence-stack_trigger__5VaGI{position:relative;display:block;flex:none;margin:0;padding:0;border:0;background:none;color:inherit;font:inherit;cursor:pointer;pointer-events:none;-webkit-tap-highlight-color:transparent}.presence-stack_trigger__5VaGI>*{pointer-events:auto}.presence-stack_trigger__5VaGI .presence-stack_measure__9Z7Xc{pointer-events:none}.presence-stack_avatar__9RHV1,.presence-stack_overflow___yqwl{position:absolute;top:0;left:0;width:var(--size);height:var(--size);border-radius:50%;transform-origin:50% 60%;will-change:transform}.presence-stack_face__e_OEB{position:absolute;inset:0;display:grid;place-items:center;overflow:hidden;border-radius:50%;background:var(--surface-muted);box-shadow:0 0 0 2px var(--presence-ring)}.presence-stack_face__e_OEB:after{content:\"\";position:absolute;inset:0;border-radius:inherit;background:var(--presence-ring);opacity:0;transition:opacity var(--duration-standard) var(--ease-standard);pointer-events:none}.presence-stack_idle__d1m1r .presence-stack_face__e_OEB:after{opacity:.5}.presence-stack_photo__B2S4_{object-fit:cover;user-select:none}.presence-stack_initials__Sdnz0{color:var(--text-secondary);font-size:calc(var(--size) * .36);font-weight:500;line-height:1}.presence-stack_overflow___yqwl{display:grid;place-items:center;overflow:hidden;background:var(--surface-muted);box-shadow:0 0 0 2px var(--presence-ring),inset 0 0 0 1px var(--border);color:var(--text-secondary);font-size:calc(var(--size) * .34);font-weight:500;font-variant-numeric:tabular-nums}.presence-stack_count__7079n{display:block;line-height:1}.presence-stack_mark__4Fhzj{position:absolute;right:-1px;bottom:-1px;display:grid;justify-items:end;align-items:end;pointer-events:none}.presence-stack_mark__4Fhzj>*{grid-area:1/1;transform-origin:85% 50%}.presence-stack_dot__eiKf9{width:var(--dot);height:var(--dot);border-radius:50%;background:var(--success);box-shadow:0 0 0 2px var(--presence-ring);transition:background-color var(--duration-standard) var(--ease-standard)}.presence-stack_dotIdle__jnG_K{background:var(--border-strong)}.presence-stack_typingMark__pikcg{display:grid;place-items:center;width:calc(var(--dot) * 2.1);height:calc(var(--dot) + 2px);margin-right:-4px;border-radius:var(--radius-pill);background:var(--foreground);box-shadow:0 0 0 2px var(--presence-ring);color:var(--background)}.presence-stack_dots__rdxNW{display:inline-flex;align-items:center;gap:2px}.presence-stack_dots__rdxNW i{display:block;width:3px;height:3px;border-radius:50%;background:currentColor;animation:presence-stack_presence-dot__MoIeK 1.1s var(--ease-in-out) infinite}.presence-stack_dots__rdxNW i:nth-child(2){animation-delay:.14s}.presence-stack_dots__rdxNW i:nth-child(3){animation-delay:.28s}.presence-stack_root__QEGF5.presence-stack_sm__l6aXG .presence-stack_dots__rdxNW i{width:2px;height:2px}@keyframes presence-stack_presence-dot__MoIeK{0%,60%,to{transform:translateY(0);opacity:.5}30%{transform:translateY(-2px);opacity:1}}.presence-stack_labelTrack__zig4C{position:absolute;top:calc(var(--size) + 8px);left:0;z-index:50;pointer-events:none}.presence-stack_label__t8_20{position:relative;display:block;height:26px;overflow:hidden;translate:-50% 0;border-radius:var(--radius-pill);background:var(--foreground);box-shadow:var(--shadow-raised);color:var(--background);font-size:var(--text-xs);line-height:26px;white-space:nowrap}.presence-stack_label__t8_20.presence-stack_measure__9Z7Xc{position:absolute;top:0;left:0;display:inline-flex;gap:6px;padding-inline:10px;width:auto;visibility:hidden;translate:none}.presence-stack_labelInner__dhUok{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:6px;padding-inline:10px}.presence-stack_labelName__6y6ak{font-weight:500}.presence-stack_labelSub__h776A{display:inline-flex;align-items:center;gap:4px;opacity:.62}.presence-stack_labelDots__bs_gD i{width:2.5px;height:2.5px}.presence-stack_panel__a5U_0{z-index:60;width:288px;max-width:calc(100vw - 24px);padding:6px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);transform-origin:var(--radix-popover-content-transform-origin)}.presence-stack_panelHead__hYR5W{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:8px 12px 6px}.presence-stack_panelTitle__Js5NH{font-size:var(--text-sm);font-weight:500}.presence-stack_panelCount__iNfgp{position:relative;display:inline-flex;overflow:hidden;color:var(--text-muted);font-size:var(--text-sm);font-variant-numeric:tabular-nums}.presence-stack_list__A0rBi{max-height:320px;margin:0;padding:0;overflow-y:auto;list-style:none;overscroll-behavior:contain}.presence-stack_rowWrap__5ErmJ{overflow:hidden}.presence-stack_row__WEyxI{display:flex;align-items:center;gap:10px;width:100%;min-height:48px;padding:8px 10px;border:0;border-radius:calc(var(--radius-panel) - 6px);background:transparent;color:inherit;font:inherit;text-align:start}.presence-stack_rowButton__sedWI{cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}.presence-stack_rowButton__sedWI:focus-visible,.presence-stack_rowButton__sedWI:hover{background:var(--surface-muted)}.presence-stack_rowAvatar__Vy58v{--size:32px;--dot:9px;--presence-ring:var(--surface-raised);position:relative;flex:none;width:32px;height:32px}.presence-stack_rowButton__sedWI:focus-visible .presence-stack_rowAvatar__Vy58v,.presence-stack_rowButton__sedWI:hover .presence-stack_rowAvatar__Vy58v{--presence-ring:var(--surface-muted)}.presence-stack_rowAvatar__Vy58v .presence-stack_face__e_OEB{box-shadow:none}.presence-stack_rowText__vbQic{display:grid;min-width:0}.presence-stack_rowName__Nj5wr{overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}.presence-stack_you__OEma1{color:var(--text-muted);font-weight:400}.presence-stack_rowDetail__eorWL{position:relative;display:flex;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}.presence-stack_rowDetailText__sJxp2{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.presence-stack_rowDots__p_MSx{color:var(--text-secondary)}.presence-stack_empty__YO96W{margin:0;padding:12px;color:var(--text-muted);font-size:var(--text-sm)}.presence-stack_srOnly__LYgd3{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.presence-stack_dots__rdxNW i{animation:none;opacity:.8}}@media (prefers-reduced-motion:reduce){.presence-stack_dot__eiKf9,.presence-stack_face__e_OEB:after{transition:none}}.presence-stack_countShift__JWoJw{position:relative;display:grid;place-items:center}", {"root":"presence-stack_root__QEGF5","sm":"presence-stack_sm__l6aXG","lg":"presence-stack_lg__TfRq_","trigger":"presence-stack_trigger__5VaGI","measure":"presence-stack_measure__9Z7Xc","avatar":"presence-stack_avatar__9RHV1","overflow":"presence-stack_overflow___yqwl","face":"presence-stack_face__e_OEB","idle":"presence-stack_idle__d1m1r","photo":"presence-stack_photo__B2S4_","initials":"presence-stack_initials__Sdnz0","count":"presence-stack_count__7079n","mark":"presence-stack_mark__4Fhzj","dot":"presence-stack_dot__eiKf9","dotIdle":"presence-stack_dotIdle__jnG_K","typingMark":"presence-stack_typingMark__pikcg","dots":"presence-stack_dots__rdxNW","presence-dot":"presence-stack_presence-dot__MoIeK","labelTrack":"presence-stack_labelTrack__zig4C","label":"presence-stack_label__t8_20","labelInner":"presence-stack_labelInner__dhUok","labelName":"presence-stack_labelName__6y6ak","labelSub":"presence-stack_labelSub__h776A","labelDots":"presence-stack_labelDots__bs_gD","panel":"presence-stack_panel__a5U_0","panelHead":"presence-stack_panelHead__hYR5W","panelTitle":"presence-stack_panelTitle__Js5NH","panelCount":"presence-stack_panelCount__iNfgp","list":"presence-stack_list__A0rBi","rowWrap":"presence-stack_rowWrap__5ErmJ","row":"presence-stack_row__WEyxI","rowButton":"presence-stack_rowButton__sedWI","rowAvatar":"presence-stack_rowAvatar__Vy58v","rowText":"presence-stack_rowText__vbQic","rowName":"presence-stack_rowName__Nj5wr","you":"presence-stack_you__OEma1","rowDetail":"presence-stack_rowDetail__eorWL","rowDetailText":"presence-stack_rowDetailText__sJxp2","rowDots":"presence-stack_rowDots__p_MSx","empty":"presence-stack_empty__YO96W","srOnly":"presence-stack_srOnly__LYgd3","countShift":"presence-stack_countShift__JWoJw"});
A.reg(20508, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-minus",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
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
A.regCss(64724, ".demo{display:grid;gap:16px;width:100%;max-width:640px;margin-inline:auto;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.header{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:76px;padding:16px 16px 16px 24px;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface)}\n.header>:last-child{--presence-ring:var(--surface)}\n@media (max-width:420px){.header{padding:12px 12px 12px 18px;border-radius:var(--radius-panel)}\n.doc{display:grid;gap:2px;min-width:0}\n.title{overflow:hidden;color:var(--foreground);font-size:var(--text-base);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.meta{display:inline-flex;align-items:center;gap:4px;min-width:0;color:var(--text-muted);font-size:var(--text-sm);white-space:nowrap}\n.stop{display:inline-grid;place-items:center;width:22px;height:22px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}\n.stop:hover{background:var(--surface-muted);color:var(--foreground)}\n.controls{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}\n.control{display:inline-flex;align-items:center;gap:6px;height:var(--control-height-sm);padding-inline:14px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.control:hover:not(:disabled){background:var(--surface-muted)}\n.control:active:not(:disabled){transform:scale(.97)}\n.control:disabled{color:var(--text-muted);cursor:default}", {"demo":"demo","header":"header","doc":"doc","title":"title","meta":"meta","stop":"stop","controls":"controls","control":"control"});
A.reg(90755, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { PresenceStackDemo: () => $, default: () => I });
  var n = a(95155), i = a(12115), s = a(9005), r = a(17143), o = a(20508), l = a(79267), c = a(36619), d = a(67752), p = a(2520), h = a(40093), u = a(80642), m = a(25354), g = a(18310), f = a(28245), y = a(92171), w = a(7770), v = a(17476), x = a.n(v);
  let _ = { sm: 28, md: 36, lg: 44 }, j = { active: "Active now", idle: "Idle", typing: "Typing" };
  function k({ person: e2, size: t2 }) {
    let [a2, s2] = (0, i.useState)(), r2 = e2.src && a2 !== e2.src;
    return (0, n.jsxs)("span", {
      className: x().face,
      children: [
        (0, n.jsx)("span", {
          className: x().initials,
          "aria-hidden": "true",
          children: e2.name.trim().split(/\s+/).slice(0, 2).map((e3) => e3[0]?.toUpperCase() ?? "").join("")
        }),
        r2 ? (0, n.jsx)(p.W, {
          src: e2.src,
          alt: "",
          fill: true,
          sizes: `${t2}px`,
          className: x().photo,
          onError: () => s2(e2.src),
          draggable: false
        }) : null
      ]
    });
  }
  function b({ className: e2 }) {
    return (0, n.jsxs)("span", {
      className: [x().dots, e2].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: [(0, n.jsx)("i", {}), (0, n.jsx)("i", {}), (0, n.jsx)("i", {})]
    });
  }
  function N({ status: e2, reduceMotion: t2 }) {
    let a2 = t2 ? { duration: 0 } : w.T.spring.snappy;
    return (0, n.jsx)("span", {
      className: x().mark,
      "aria-hidden": "true",
      children: (0, n.jsx)(u.N, {
        initial: false,
        mode: "popLayout",
        children: "typing" === e2 ? (0, n.jsx)(
          m.PY1.span,
          {
            className: x().typingMark,
            initial: { opacity: 0, scale: 0.4 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.4 },
            transition: a2,
            children: (0, n.jsx)(b, {})
          },
          "typing"
        ) : (0, n.jsx)(
          m.PY1.span,
          {
            className: [x().dot, "idle" === e2 ? x().dotIdle : ""].join(
              " "
            ),
            initial: { opacity: 0, scale: 0.4 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.4 },
            transition: a2
          },
          "dot"
        )
      })
    });
  }
  function A({
    people: e2,
    max: t2 = 4,
    size: a2 = "md",
    align: s2 = "start",
    selfId: r2,
    label: o2 = "People here now",
    heading: l2 = "Here now",
    open: c2,
    defaultOpen: d2 = false,
    onOpenChange: p2,
    onPersonSelect: v2,
    announce: P2 = true,
    className: T2,
    style: M2
  }) {
    let S2 = !!(0, g.I)(), R2 = _[a2], z2 = Math.round(0.68 * R2), D2 = Math.max(1, Math.floor(t2)), E2 = e2.length > D2 ? e2.slice(0, D2) : e2, O2 = e2.length - E2.length, $2 = E2.length + +(O2 > 0), I2 = (D2 + 1 - 1) * z2 + R2, [L, W] = (0, i.useState)(d2), F = c2 ?? L, B = (e3) => {
      void 0 === c2 && W(e3), p2?.(e3);
    }, [Y, K] = (0, i.useState)(false), [H, J] = (0, i.useState)(false), [G, U] = (0, i.useState)(null), q = (0, i.useRef)(void 0), V = (Y || H) && !F, Z = $2 > 0 ? ($2 - 1) * z2 + R2 : 0, Q = "end" === s2 ? I2 - Z : 0, X = (e3) => {
      window.clearTimeout(q.current), K(true), U(e3);
    }, ee = () => {
      window.clearTimeout(q.current), q.current = window.setTimeout(() => {
        K(false), U(null);
      }, 90);
    };
    (0, i.useEffect)(() => () => window.clearTimeout(q.current), []);
    let et = null !== G && G < $2 ? G : null, ea = null === et ? null : et < E2.length ? E2[et] : null, en = ea ? `${ea.name}${ea.id === r2 ? " (you)" : ""}` : null !== et ? `${O2} more` : "", ei = ea ? j[ea.status ?? "active"] : null !== et ? "Show everyone" : "", es = (0, i.useRef)(null), er = (0, f.d)(0), eo = V && null !== et, el = (0, i.useRef)(false);
    (0, i.useLayoutEffect)(() => {
      if (!es.current) return;
      let e3 = es.current.offsetWidth + 1;
      eo && el.current && !S2 ? (0, y.i)(er, e3, w.T.spring.morph) : er.set(e3), el.current = eo;
    }, [en, ei, eo, S2, er]);
    let [ec, ed] = (0, i.useState)({ value: O2, direction: 1 });
    ec.value !== O2 && ed({ value: O2, direction: O2 < ec.value ? -1 : 1 });
    let [ep, eh] = (0, i.useState)(""), eu = (0, i.useRef)(e2);
    (0, i.useEffect)(() => {
      if (!P2) return;
      let t3 = new Map(eu.current.map((e3) => [e3.id, e3])), a3 = new Set(e2.map((e3) => e3.id)), n2 = e2.filter((e3) => !t3.has(e3.id)).map((e3) => `${e3.name} joined`), i2 = eu.current.filter((e3) => !a3.has(e3.id)).map((e3) => `${e3.name} left`);
      eu.current = e2;
      let s3 = [...n2, ...i2].join(". ");
      s3 && eh(s3);
    }, [e2, P2]);
    let em = S2 ? { duration: 0 } : w.T.spring.smooth, eg = S2 ? { duration: 0 } : w.T.spring.morph, ef = {
      duration: S2 ? 0 : w.T.duration.fast,
      ease: [...w.T.ease.standard]
    }, ey = `${o2}, ${e2.length} ${1 === e2.length ? "person" : "people"}`;
    return (0, n.jsxs)("div", {
      className: [x().root, x()[a2], T2].filter(Boolean).join(" "),
      style: { ...M2, "--size": `${R2}px` },
      "data-align": s2,
      children: [
        (0, n.jsxs)(h.bL, {
          open: F,
          onOpenChange: B,
          children: [
            (0, n.jsx)(h.l9, {
              asChild: true,
              children: (0, n.jsxs)("button", {
                type: "button",
                className: x().trigger,
                style: { width: I2, height: R2 },
                "aria-label": ey,
                onFocus: (e3) => {
                  e3.currentTarget.matches(":focus-visible") && J(true);
                },
                onBlur: () => {
                  J(false), U(null);
                },
                onKeyDown: (e3) => {
                  if ("ArrowLeft" !== e3.key && "ArrowRight" !== e3.key) return;
                  e3.preventDefault();
                  let t3 = "ArrowRight" === e3.key ? 1 : -1;
                  U(
                    (e4) => null === e4 ? t3 > 0 ? 0 : $2 - 1 : Math.min($2 - 1, Math.max(0, e4 + t3))
                  );
                },
                children: [
                  (0, n.jsxs)(u.N, {
                    initial: false,
                    children: [
                      E2.map((e3, t3) => {
                        let a3 = e3.status ?? "active";
                        return (0, n.jsxs)(
                          m.PY1.span,
                          {
                            className: [
                              x().avatar,
                              "idle" === a3 ? x().idle : ""
                            ].join(" "),
                            style: { zIndex: $2 - t3 },
                            initial: { x: Q + t3 * z2, opacity: 0, scale: 0.4 },
                            animate: {
                              x: Q + t3 * z2,
                              y: V && et === t3 ? -2 : 0,
                              opacity: 1,
                              scale: 1
                            },
                            exit: { opacity: 0, scale: 0.4, transition: ef },
                            transition: {
                              x: em,
                              y: em,
                              scale: eg,
                              opacity: { duration: S2 ? 0 : w.T.duration.fast }
                            },
                            onPointerEnter: () => X(t3),
                            onPointerLeave: ee,
                            children: [
                              (0, n.jsx)(k, { person: e3, size: R2 }),
                              (0, n.jsx)(N, { status: a3, reduceMotion: S2 })
                            ]
                          },
                          e3.id
                        );
                      }),
                      O2 > 0 ? (0, n.jsx)(
                        m.PY1.span,
                        {
                          className: x().overflow,
                          style: { zIndex: 0 },
                          initial: {
                            x: Q + E2.length * z2,
                            opacity: 0,
                            scale: 0.4
                          },
                          animate: {
                            x: Q + E2.length * z2,
                            y: V && et === E2.length ? -2 : 0,
                            opacity: 1,
                            scale: 1
                          },
                          exit: { opacity: 0, scale: 0.4, transition: ef },
                          transition: { x: em, y: em, scale: eg },
                          onPointerEnter: () => X(E2.length),
                          onPointerLeave: ee,
                          children: (0, n.jsx)(m.PY1.span, {
                            className: x().countShift,
                            initial: false,
                            animate: { x: (R2 - z2) / 2 },
                            transition: em,
                            children: (0, n.jsx)(u.N, {
                              mode: "popLayout",
                              initial: false,
                              custom: ec.direction,
                              children: (0, n.jsxs)(
                                m.PY1.span,
                                {
                                  className: x().count,
                                  custom: ec.direction,
                                  initial: S2 ? { opacity: 0 } : {
                                    opacity: 0,
                                    y: `${0.55 * ec.direction}em`
                                  },
                                  animate: { opacity: 1, y: 0 },
                                  exit: S2 ? { opacity: 0 } : {
                                    opacity: 0,
                                    y: `${-0.55 * ec.direction}em`
                                  },
                                  transition: S2 ? { duration: 0 } : w.T.spring.snappy,
                                  children: ["+", O2]
                                },
                                O2
                              )
                            })
                          })
                        },
                        "overflow"
                      ) : null
                    ]
                  }),
                  (0, n.jsxs)("span", {
                    ref: es,
                    className: [x().label, x().measure].join(" "),
                    "aria-hidden": "true",
                    children: [
                      (0, n.jsx)("span", {
                        className: x().labelName,
                        children: en
                      }),
                      (0, n.jsx)("span", {
                        className: x().labelSub,
                        children: ei
                      })
                    ]
                  }),
                  (0, n.jsx)(u.N, {
                    children: V && null !== et ? (0, n.jsx)(
                      m.PY1.span,
                      {
                        className: x().labelTrack,
                        "aria-hidden": "true",
                        initial: {
                          x: Q + et * z2 + R2 / 2,
                          opacity: 0,
                          y: -4,
                          scale: 0.96
                        },
                        animate: {
                          x: Q + et * z2 + R2 / 2,
                          opacity: 1,
                          y: 0,
                          scale: 1
                        },
                        exit: {
                          opacity: 0,
                          y: -4,
                          scale: 0.96,
                          transition: ef
                        },
                        transition: {
                          x: S2 ? { duration: 0 } : w.T.spring.morph,
                          default: S2 ? { duration: 0 } : w.T.spring.snappy
                        },
                        children: (0, n.jsx)(m.PY1.span, {
                          className: x().label,
                          style: { width: er },
                          children: (0, n.jsx)(u.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, n.jsxs)(
                              m.PY1.span,
                              {
                                className: x().labelInner,
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: {
                                  duration: S2 ? 0 : w.T.duration.fast
                                },
                                children: [
                                  (0, n.jsx)("span", {
                                    className: x().labelName,
                                    children: en
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: x().labelSub,
                                    children: [
                                      ea?.status === "typing" ? (0, n.jsx)(b, {
                                        className: x().labelDots
                                      }) : null,
                                      ei
                                    ]
                                  })
                                ]
                              },
                              en
                            )
                          })
                        })
                      },
                      "label"
                    ) : null
                  })
                ]
              })
            }),
            (0, n.jsx)(u.N, {
              children: F ? (0, n.jsx)(h.ZL, {
                forceMount: true,
                children: (0, n.jsx)(h.UC, {
                  forceMount: true,
                  asChild: true,
                  align: s2,
                  sideOffset: 10,
                  collisionPadding: 12,
                  "aria-label": l2,
                  children: (0, n.jsxs)(m.PY1.div, {
                    className: x().panel,
                    initial: S2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: S2 ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      y: -4,
                      scale: 0.98,
                      transition: {
                        duration: w.T.duration.fast,
                        ease: [...w.T.ease.standard]
                      }
                    },
                    transition: S2 ? { duration: 0 } : w.T.spring.snappy,
                    children: [
                      (0, n.jsxs)("div", {
                        className: x().panelHead,
                        children: [
                          (0, n.jsx)("span", {
                            className: x().panelTitle,
                            children: l2
                          }),
                          (0, n.jsx)(C, {
                            value: e2.length,
                            reduceMotion: S2
                          })
                        ]
                      }),
                      (0, n.jsx)("ul", {
                        className: x().list,
                        children: (0, n.jsx)(u.N, {
                          initial: false,
                          children: e2.map((e3) => {
                            let t3 = e3.status ?? "active", a3 = e3.id === r2, i2 = (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsxs)("span", {
                                  className: [
                                    x().rowAvatar,
                                    "idle" === t3 ? x().idle : ""
                                  ].join(" "),
                                  children: [
                                    (0, n.jsx)(k, {
                                      person: e3,
                                      size: 28
                                    }),
                                    (0, n.jsx)(N, {
                                      status: t3,
                                      reduceMotion: S2
                                    })
                                  ]
                                }),
                                (0, n.jsxs)("span", {
                                  className: x().rowText,
                                  children: [
                                    (0, n.jsxs)("span", {
                                      className: x().rowName,
                                      children: [
                                        e3.name,
                                        a3 ? (0, n.jsx)("span", {
                                          className: x().you,
                                          children: " (you)"
                                        }) : null
                                      ]
                                    }),
                                    (0, n.jsx)("span", {
                                      className: x().rowDetail,
                                      children: (0, n.jsx)(u.N, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: (0, n.jsxs)(
                                          m.PY1.span,
                                          {
                                            className: x().rowDetailText,
                                            initial: {
                                              opacity: 0,
                                              y: 4 * !S2
                                            },
                                            animate: { opacity: 1, y: 0 },
                                            exit: {
                                              opacity: 0,
                                              y: S2 ? 0 : -4
                                            },
                                            transition: S2 ? { duration: 0 } : w.T.spring.snappy,
                                            children: [
                                              "typing" === t3 ? (0, n.jsx)(b, {
                                                className: x().rowDots
                                              }) : null,
                                              e3.detail ?? j[t3]
                                            ]
                                          },
                                          `${t3}-${e3.detail ?? ""}`
                                        )
                                      })
                                    })
                                  ]
                                })
                              ]
                            });
                            return (0, n.jsx)(
                              m.PY1.li,
                              {
                                className: x().rowWrap,
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: S2 ? { duration: 0 } : w.T.spring.smooth,
                                children: v2 ? (0, n.jsx)("button", {
                                  type: "button",
                                  className: [
                                    x().row,
                                    x().rowButton
                                  ].join(" "),
                                  onClick: () => {
                                    v2(e3), B(false);
                                  },
                                  "aria-label": `${e3.name}${a3 ? " (you)" : ""}, ${e3.detail ?? j[t3]}`,
                                  children: i2
                                }) : (0, n.jsx)("div", {
                                  className: x().row,
                                  children: i2
                                })
                              },
                              e3.id
                            );
                          })
                        })
                      }),
                      0 === e2.length ? (0, n.jsx)("p", {
                        className: x().empty,
                        children: "No one else is here right now"
                      }) : null
                    ]
                  })
                })
              }) : null
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: x().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ep
        })
      ]
    });
  }
  function C({ value: e2, reduceMotion: t2 }) {
    let [a2, s2] = (0, i.useState)({ value: e2, direction: 1 });
    a2.value !== e2 && s2({ value: e2, direction: e2 < a2.value ? -1 : 1 });
    let r2 = (0, i.useId)();
    return (0, n.jsx)("span", {
      className: x().panelCount,
      "aria-label": `${e2} ${1 === e2 ? "person" : "people"}`,
      id: r2,
      children: (0, n.jsx)(u.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          m.PY1.span,
          {
            "aria-hidden": "true",
            initial: { opacity: 0, y: t2 ? 0 : `${0.6 * a2.direction}em` },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: t2 ? 0 : `${-0.6 * a2.direction}em` },
            transition: t2 ? { duration: 0 } : w.T.spring.snappy,
            children: e2
          },
          e2
        )
      })
    });
  }
  var P = a(64724), T = a.n(P);
  let M = "jasmine-brooks", S = [
    "Pricing",
    "Launch checklist",
    "Timeline",
    "Press kit",
    "Budget",
    "Risks"
  ], R = {
    active: (e2) => `Editing ${e2}`,
    idle: () => "Away for a few minutes",
    typing: (e2) => `Commenting on ${e2}`
  };
  function z(e2, t2, a2) {
    let n2 = d.c0.find((t3) => t3.id === e2);
    return {
      id: n2.id,
      name: n2.name,
      src: n2.src,
      status: t2,
      detail: e2 === M ? "Viewing Overview" : R[t2](a2)
    };
  }
  let D = [
    z(M, "active", "Overview"),
    z("emma-collins", "typing", "Pricing"),
    z("marcus-johnson", "active", "Launch checklist"),
    z("sofia-ramirez", "idle", "Budget"),
    z("daniel-kim", "active", "Timeline"),
    z("chloe-nguyen", "active", "Risks")
  ], E = "(prefers-reduced-motion: reduce)", O = (e2) => e2[Math.floor(Math.random() * e2.length)];
  function $() {
    let e2 = (0, i.useSyncExternalStore)(
      (e3) => {
        let t3 = window.matchMedia(E);
        return t3.addEventListener("change", e3), () => t3.removeEventListener("change", e3);
      },
      () => window.matchMedia(E).matches,
      () => false
    ), [t2, a2] = (0, i.useState)(D), [p2, h2] = (0, i.useState)(null), [u2, m2] = (0, i.useState)(null), g2 = t2.find((e3) => e3.id === u2) ?? null, f2 = p2 ?? !e2, y2 = (0, i.useRef)(t2);
    (0, i.useEffect)(() => {
      y2.current = t2;
    }, [t2]);
    let w2 = () => a2((e3) => {
      let t3 = d.c0.filter((t4) => !e3.some((e4) => e4.id === t4.id));
      if (!t3.length) return e3;
      let a3 = O(t3), [n2, ...i2] = e3;
      return [n2, z(a3.id, O(["active", "active", "typing"]), O(S)), ...i2];
    }), v2 = () => a2((e3) => {
      let t3 = e3.filter((e4) => e4.id !== M);
      if (!t3.length) return e3;
      let a3 = O(t3);
      return e3.filter((e4) => e4.id !== a3.id);
    }), x2 = () => a2((e3) => {
      let t3 = e3.filter((e4) => e4.id !== M);
      if (!t3.length) return e3;
      let a3 = O(t3), n2 = O(
        ["active", "idle", "typing"].filter(
          (e4) => e4 !== (a3.status ?? "active")
        )
      );
      return e3.map((e4) => e4.id === a3.id ? z(e4.id, n2, O(S)) : e4);
    });
    (0, i.useEffect)(() => {
      if (!f2) return;
      let e3 = window.setInterval(() => {
        let e4 = y2.current.length, t3 = Math.random();
        e4 < 4 || t3 < 0.34 && e4 < 10 ? w2() : t3 < 0.6 && e4 > 3 ? v2() : x2();
      }, 2200);
      return () => window.clearInterval(e3);
    }, [f2]);
    let _2 = t2.length - 1;
    return (0, n.jsxs)("div", {
      className: T().demo,
      "data-canvas": "wide",
      children: [
        (0, n.jsxs)("div", {
          className: T().header,
          children: [
            (0, n.jsxs)("div", {
              className: T().doc,
              children: [
                (0, n.jsx)("span", {
                  className: T().title,
                  children: "Q3 launch plan"
                }),
                (0, n.jsx)("span", {
                  className: T().meta,
                  children: g2 ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "Following ",
                      g2.name,
                      (0, n.jsx)("button", {
                        type: "button",
                        className: T().stop,
                        onClick: () => m2(null),
                        "aria-label": `Stop following ${g2.name}`,
                        children: (0, n.jsx)(s.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  }) : 0 === _2 ? "Only you" : `You and ${_2} ${1 === _2 ? "other" : "others"}`
                })
              ]
            }),
            (0, n.jsx)(A, {
              people: t2,
              selfId: M,
              max: 4,
              align: "end",
              onPersonSelect: (e3) => {
                e3.id !== M && m2(e3.id);
              }
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: T().controls,
          role: "group",
          "aria-label": "Simulate people",
          children: [
            (0, n.jsxs)("button", {
              type: "button",
              className: T().control,
              onClick: w2,
              disabled: t2.length >= d.c0.length,
              children: [
                (0, n.jsx)(r.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Someone joins"
              ]
            }),
            (0, n.jsxs)("button", {
              type: "button",
              className: T().control,
              onClick: v2,
              disabled: t2.length <= 1,
              children: [
                (0, n.jsx)(o.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Someone leaves"
              ]
            }),
            (0, n.jsx)("button", {
              type: "button",
              className: T().control,
              onClick: x2,
              disabled: t2.length <= 1,
              children: "Change a status"
            }),
            (0, n.jsxs)("button", {
              type: "button",
              className: T().control,
              onClick: () => h2(!f2),
              "aria-pressed": f2,
              children: [
                f2 ? (0, n.jsx)(l.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }) : (0, n.jsx)(c.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                f2 ? "Pause" : "Simulate"
              ]
            })
          ]
        })
      ]
    });
  }
  let I = $;
}

__m(__module,__exports,__require);
});
A.cssFor("presence-stack", [17476,64724]);
A.item("presence-stack", {entry:90755, export:"PresenceStackDemo", kind:"component", tier:"pro", unresolved:[]});
})();