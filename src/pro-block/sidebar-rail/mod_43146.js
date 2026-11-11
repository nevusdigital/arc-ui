function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => G,
    VY: () => W,
    ZL: () => P,
    bL: () => D,
    bm: () => K,
    hE: () => F,
    hJ: () => _,
    l9: () => z
  });
  var r = n(12115), o = n(70379), l = n(47527), a = n(68599), i = n(89971), d = n(59322), u = n(19416), c = n(69885), s = n(19040), f = n(83935), p = n(55897), y = n(32007), h = n(66294), m = n(5174), g = n(22954), x = n(42442), v = n(95155), k = Object.defineProperty, M = (e2, t2) => k(e2, "name", { value: t2, configurable: true }), A = "Dialog", [w, b] = (0, a.A)(A), [j, C] = w(A), D = M((e2) => {
    let {
      __scopeDialog: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: a2,
      modal: u2 = true
    } = e2, c2 = r.useRef(null), s2 = r.useRef(null), [f2, p2] = (0, d.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: a2,
      caller: A
    }), [y2, h2] = r.useState(0), [m2, g2] = r.useState(0);
    return (0, v.jsx)(j, {
      scope: t2,
      triggerRef: c2,
      contentRef: s2,
      contentId: (0, i.B)(),
      titleId: (0, i.B)(),
      descriptionId: (0, i.B)(),
      titlePresent: y2 > 0,
      descriptionPresent: m2 > 0,
      setTitleCount: h2,
      setDescriptionCount: g2,
      open: f2,
      onOpenChange: p2,
      onOpenToggle: r.useCallback(() => p2((e3) => !e3), [p2]),
      modal: u2,
      children: n2
    });
  }, "Dialog"), z = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, a2 = C("DialogTrigger", n2), i2 = (0, l.s)(t2, a2.triggerRef);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a2.open,
        "aria-controls": a2.open ? a2.contentId : void 0,
        "data-state": B(a2.open),
        ...r2,
        ref: i2,
        onClick: (0, o.mK)(e2.onClick, a2.onOpenToggle)
      });
    }, "DialogTrigger")
  ), R = "DialogPortal", [E, O] = w(R, { forceMount: void 0 }), P = M((e2) => {
    let { __scopeDialog: t2, forceMount: n2, children: o2, container: l2 } = e2, a2 = C(R, t2);
    return (0, v.jsx)(E, {
      scope: t2,
      forceMount: n2,
      children: r.Children.map(
        o2,
        (e3) => (0, v.jsx)(f.C, {
          present: n2 || a2.open,
          children: (0, v.jsx)(s.Z, {
            asChild: true,
            container: l2,
            children: e3
          })
        })
      )
    });
  }, "DialogPortal"), I = "DialogOverlay", _ = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(I, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(I, e2.__scopeDialog);
      return l2.modal ? (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: (0, v.jsx)(T, { ...o2, ref: t2 })
      }) : null;
    }, "DialogOverlay")
  ), S = (0, x.TL)("DialogOverlay.RemoveScroll"), T = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C(I, n2), a2 = (0, u.e0)(), i2 = (0, l.s)(t2, a2);
      return (0, v.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        shards: [o2.contentRef],
        children: (0, v.jsx)(p.sG.div, {
          "data-state": B(o2.open),
          ...r2,
          ref: i2,
          style: { pointerEvents: "auto", ...r2.style }
        })
      });
    }, "DialogOverlayImpl")
  ), q = "DialogContent", G = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(q, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(q, e2.__scopeDialog);
      return (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: l2.modal ? (0, v.jsx)(L, { ...o2, ref: t2 }) : (0, v.jsx)(H, { ...o2, ref: t2 })
      });
    }, "DialogContent")
  ), L = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), a2 = r.useRef(null), i2 = (0, l.s)(t2, n2.contentRef, a2);
      return r.useEffect(() => {
        let e3 = a2.current;
        if (e3) return (0, g.Eq)(e3);
      }, []), (0, v.jsx)(V, {
        ...e2,
        ref: i2,
        trapFocus: n2.open,
        disableOutsidePointerEvents: n2.open,
        onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
          e3.preventDefault(), n2.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, o.mK)(e2.onPointerDownOutside, (e3) => {
          let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
          (2 === t3.button || n3) && e3.preventDefault();
        }),
        onFocusOutside: (0, o.mK)(
          e2.onFocusOutside,
          (e3) => e3.preventDefault()
        )
      });
    }, "DialogContentModal")
  ), H = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), o2 = r.useRef(false), l2 = r.useRef(false);
      return (0, v.jsx)(V, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, l2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (l2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && l2.current && t3.preventDefault();
        }
      });
    }, "DialogContentNonModal")
  ), V = r.forwardRef(
    M(function(e2, t2) {
      let {
        __scopeDialog: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: l2,
        ...a2
      } = e2, i2 = C(q, n2);
      return (0, y.Oh)(), (0, v.jsx)(v.Fragment, {
        children: (0, v.jsx)(c.n, {
          asChild: true,
          loop: true,
          trapped: r2,
          onMountAutoFocus: o2,
          onUnmountAutoFocus: l2,
          children: (0, v.jsx)(u.qW, {
            role: "dialog",
            id: i2.contentId,
            "aria-describedby": i2.descriptionPresent ? i2.descriptionId : void 0,
            "aria-labelledby": i2.titlePresent ? i2.titleId : void 0,
            "data-state": B(i2.open),
            ...a2,
            ref: t2,
            deferPointerDownOutside: true,
            onDismiss: () => i2.onOpenChange(false)
          })
        })
      });
    }, "DialogContentImpl")
  ), F = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogTitle", n2), { setTitleCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.h2, { id: o2.titleId, ...r2, ref: t2 });
    }, "DialogTitle")
  ), W = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogDescription", n2), { setDescriptionCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.p, { id: o2.descriptionId, ...r2, ref: t2 });
    }, "DialogDescription")
  ), K = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, l2 = C("DialogClose", n2);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => l2.onOpenChange(false))
      });
    }, "DialogClose")
  );
  function B(e2) {
    return e2 ? "open" : "closed";
  }
  M(B, "getState");
}

__m(__module,__exports,__require);
}