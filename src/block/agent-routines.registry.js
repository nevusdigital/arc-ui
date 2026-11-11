/* agent-routines (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(6923, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(25898, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={anchor:"popover_anchor__Mcc5T",content:"popover_content__FmDK_","popover-exit":"popover_popover-exit__j6_xO"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
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
A.reg(77618, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "calendar-clock",
    size: 24,
    node: [
      ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "path",
        {
          d: "M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",
          key: "7hb8p4"
        }
      ],
      ["path", { d: "M3 9h5.859", key: "numkqi" }],
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
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
A.regCss(80139, ".agent-routines_root__T_pCb{--mono:ui-monospace,\"SF Mono\",Menlo,monospace;--row-hover:color-mix(in oklab,var(--foreground) 2.5%,var(--surface));--row-open:color-mix(in oklab,var(--foreground) 3%,var(--surface));--inset:var(--space-2);--pad:var(--space-4);--tick-success:color-mix(in oklab,var(--success) 44%,var(--surface));--tick-failed:color-mix(in oklab,var(--danger) 56%,var(--surface));--tick-skipped:color-mix(in oklab,var(--foreground) 15%,var(--surface));--tick-empty:color-mix(in oklab,var(--foreground) 6%,var(--surface));--open-duration:340ms;--open-ease:cubic-bezier(.22,1,.36,1);position:relative;box-sizing:border-box;width:min(100%,680px);min-width:0;margin-inline:auto;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);container:routines/inline-size}.agent-routines_root__T_pCb *,.agent-routines_root__T_pCb :after,.agent-routines_root__T_pCb :before{box-sizing:border-box}.agent-routines_srOnly__ZanWl{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.agent-routines_nums__2QlXe{font-variant-numeric:tabular-nums}.agent-routines_header__q_yh1{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);padding:var(--space-5) calc(var(--inset) + var(--pad)) var(--space-3)}.agent-routines_headerText__4xyU1{min-width:0}.agent-routines_title___DMJ3{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}.agent-routines_subtitle__kfutN{margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-sm);font-variant-numeric:tabular-nums}.agent-routines_newButton__pzuJh{flex:none}.agent-routines_plusIcon__wWAQK{transition:transform var(--duration-standard) var(--ease-standard)}.agent-routines_newButton__pzuJh[aria-expanded=true] .agent-routines_plusIcon__wWAQK{transform:rotate(45deg)}.agent-routines_autoWidth__lfxBO{position:relative;display:inline-flex;flex:none;min-width:0}.agent-routines_autoWidthInner__wDpH1{display:inline-flex;flex:none;align-items:center;white-space:nowrap}.agent-routines_autoHeight__AX_vI,.agent-routines_collapse__v_ULU{overflow:clip}.agent-routines_list__gTaYJ{margin:0;padding:0 var(--inset) var(--inset);list-style:none}.agent-routines_item__h_pCO{position:relative;overflow:clip;list-style:none}.agent-routines_item__h_pCO+.agent-routines_item__h_pCO:before{content:\"\";position:absolute;top:0;left:var(--pad);right:var(--pad);height:1px;background:var(--border-subtle);transition:opacity var(--open-duration) var(--open-ease)}.agent-routines_item__h_pCO[data-open]+.agent-routines_item__h_pCO:before,.agent-routines_item__h_pCO[data-open]:before{opacity:0}.agent-routines_itemInner__5xK9E{position:relative;border-radius:var(--radius-panel);background:color-mix(in oklab,var(--row-open) 0%,transparent);transition:background-color var(--open-duration) var(--open-ease)}.agent-routines_itemInner__5xK9E[data-open]{background:var(--row-open)}.agent-routines_head__HQ4ow{position:relative;display:grid;gap:2px;padding:14px var(--pad);border-radius:var(--radius-panel);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-routines_itemInner__5xK9E:not([data-open]) .agent-routines_head__HQ4ow:hover{background:var(--row-hover)}}.agent-routines_line__Sjo_c{display:flex;min-width:0;align-items:center;justify-content:space-between;gap:var(--space-4)}.agent-routines_line__Sjo_c:last-of-type{margin-top:6px}.agent-routines_nameHeading__Ms127{display:flex;flex:1 1 auto;min-width:0;margin:0;font:inherit}.agent-routines_name__hH705{display:inline-flex;min-width:0;max-width:100%;align-items:center;gap:6px;margin:0;padding:0;border:0;background:none;color:var(--foreground);font:inherit;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);text-align:left;cursor:pointer}.agent-routines_nameText___59b3{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}.agent-routines_itemInner__5xK9E:not([data-enabled]) .agent-routines_nameText___59b3{color:var(--text-secondary)}.agent-routines_chevron___FJg2{flex:none;color:var(--text-muted);transition:transform var(--open-duration) var(--open-ease)}.agent-routines_itemInner__5xK9E[data-open] .agent-routines_chevron___FJg2{transform:rotate(180deg)}.agent-routines_controls__Vu9bf{display:flex;flex:none;align-items:center;gap:var(--space-2);cursor:default}.agent-routines_switch__5R7No.agent-routines_switch__5R7No{min-height:0}.agent-routines_runSlot__A6sKI{display:inline-flex;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}.agent-routines_itemInner__5xK9E:focus-within .agent-routines_runSlot__A6sKI,.agent-routines_itemInner__5xK9E:hover .agent-routines_runSlot__A6sKI,.agent-routines_itemInner__5xK9E[data-open] .agent-routines_runSlot__A6sKI,.agent-routines_itemInner__5xK9E[data-running] .agent-routines_runSlot__A6sKI{opacity:1}@media (hover:none){.agent-routines_runSlot__A6sKI{opacity:1}}.agent-routines_runButton__FAblz.agent-routines_runButton__FAblz{min-height:30px;padding-inline:10px;color:var(--text-secondary)}.agent-routines_runStack__5oIbb{display:grid}.agent-routines_runLayer__qP8fI{display:inline-flex;grid-area:1/1;align-items:center;justify-content:center;gap:6px}.agent-routines_runLayer__qP8fI[aria-hidden]{pointer-events:none}.agent-routines_playIcon__LY93y{color:var(--accent)}.agent-routines_when__g62sU{display:flex;flex:1 1 auto;min-width:0;align-items:center;gap:6px;margin:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-sm);white-space:nowrap}.agent-routines_scheduleText__Wk9lc{color:var(--text-secondary)}.agent-routines_dot__8EpRq{flex:none;color:var(--text-muted)}.agent-routines_statusSlot__z0maf{position:relative;display:flex;flex:1 1 auto;min-width:0}.agent-routines_statusPhase__DMXhV{display:inline-flex;min-width:0;align-items:center;gap:6px;white-space:nowrap}.agent-routines_countdown__rUdPK{display:inline-block;min-width:10ch;font-variant-numeric:tabular-nums}.agent-routines_runningWord__RPsrL{flex:none;color:var(--foreground)}.agent-routines_stepSlot__tz8C9{position:relative;display:flex;min-width:0;overflow:hidden}.agent-routines_stepText__Urpsc{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.agent-routines_lastRun__K2yFe{position:relative;display:flex;flex:none;justify-content:flex-end;margin:0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.agent-routines_lastRunPhase__WHqDV{display:inline-flex;align-items:center;gap:6px}.agent-routines_statusIcon__e5zLM{flex:none;color:var(--text-muted)}.agent-routines_statusIcon__e5zLM[data-status=success]{color:var(--success)}.agent-routines_statusIcon__e5zLM[data-status=failed]{color:var(--danger)}.agent-routines_meta__BIw_F{display:flex;flex:1 1 auto;min-width:0;height:20px;align-items:center;gap:var(--space-2);overflow:hidden;color:var(--text-secondary);white-space:nowrap}.agent-routines_sources__EuiPF{display:inline-flex;flex:none;align-items:center;gap:6px}.agent-routines_markHit__ZMyAr{display:grid;flex:none;place-items:center}.agent-routines_mark__eDDMq{display:block;flex:none;color:var(--text-secondary)}.agent-routines_mark__eDDMq[data-brand=linear]{color:#5e6ad2}.agent-routines_mark__eDDMq[data-brand=sentry]{color:#362d59}.agent-routines_mark__eDDMq[data-brand=google-calendar]{color:#4285f4}.agent-routines_mark__eDDMq[data-brand=anthropic]{color:#d97757}.agent-routines_mark__eDDMq[data-brand=github],.agent-routines_mark__eDDMq[data-brand=notion],.agent-routines_mark__eDDMq[data-brand=openai]{color:var(--foreground)}:root[data-theme=dark] .agent-routines_mark__eDDMq[data-brand=sentry]{color:#a597e6}:root[data-theme=dark] .agent-routines_mark__eDDMq[data-brand=linear]{color:#8b94f0}.agent-routines_more__h_cre{font-size:var(--text-xs);font-variant-numeric:tabular-nums}.agent-routines_metaArrow__sqHec,.agent-routines_more__h_cre{flex:none;color:var(--text-muted)}.agent-routines_destination__9Df7M{display:inline-flex;min-width:0;align-items:center;gap:4px;color:var(--text-secondary);font-size:var(--text-xs)}.agent-routines_destinationText__mmHcS{min-width:0;overflow:hidden;text-overflow:ellipsis}.agent-routines_metaDivider__PLLBo{flex:none;width:1px;height:12px;background:var(--border)}.agent-routines_ticksSlot__KhMS9{display:flex;flex:none;margin-left:auto;cursor:default}.agent-routines_ticks__VGdoU{position:relative;flex:none;height:14px;transition:opacity var(--duration-standard) var(--ease-standard)}.agent-routines_itemInner__5xK9E:not([data-enabled]) .agent-routines_ticks__VGdoU{opacity:.55}.agent-routines_tickSlot__4b2_7{position:absolute;top:0;left:0;width:4px;height:14px}.agent-routines_tick__KhzwJ{position:relative;display:block;width:4px;height:14px;border-radius:2px;background:var(--tick-success);cursor:default;transition:filter var(--duration-fast) var(--ease-standard)}.agent-routines_tick__KhzwJ:before{content:\"\";position:absolute;inset:-5px -1.5px}.agent-routines_tick__KhzwJ[data-status=failed]{background:var(--tick-failed)}.agent-routines_tick__KhzwJ[data-status=skipped]{background:var(--tick-skipped)}.agent-routines_tick__KhzwJ[data-status=empty]{background:var(--tick-empty)}@media (hover:hover) and (pointer:fine){.agent-routines_tick__KhzwJ:not([data-status=empty]):hover{filter:saturate(1.25) brightness(.94)}}:root[data-theme=dark] .agent-routines_tick__KhzwJ:not([data-status=empty]):hover{filter:brightness(1.12)}.agent-routines_runTip__gwqZZ{display:grid;max-width:240px;gap:2px;text-align:left}.agent-routines_runTipHead___UPMG{display:flex;align-items:center;gap:6px;font-weight:500}.agent-routines_runTipHead___UPMG>svg{flex:none}.agent-routines_runTipHead___UPMG[data-status=success]>svg{color:var(--success)}.agent-routines_runTipHead___UPMG[data-status=failed]>svg{color:var(--danger)}.agent-routines_runTipHead___UPMG[data-status=skipped]>svg{opacity:.7}.agent-routines_runTipMeta__j36wC{font-weight:400;opacity:.72;font-variant-numeric:tabular-nums}.agent-routines_runTipText__CMEqt{opacity:.86}.agent-routines_progress__WEfPQ{position:absolute;right:var(--pad);bottom:0;left:var(--pad);height:2px;overflow:hidden;border-radius:1px;background:color-mix(in oklab,var(--routine-accent,var(--accent)) 16%,transparent);pointer-events:none}.agent-routines_progressFill__2q_dT{position:absolute;inset:0;border-radius:inherit;background:var(--routine-accent,var(--accent));transform-origin:left center}.agent-routines_details__7LgRQ{display:grid;gap:var(--space-5);padding:var(--space-2) var(--pad) var(--space-5);cursor:auto}.agent-routines_section__Dl5Bu{display:grid;min-width:0;gap:var(--space-2)}.agent-routines_sectionHead__ftwuQ{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2px var(--space-3)}.agent-routines_sectionTitle__4MK51{margin:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}.agent-routines_metaSlot__pzczj{position:relative;display:flex;min-width:0;justify-content:flex-end}.agent-routines_runMeta__78V4r{display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap}.agent-routines_runMetaLabel__7X4fD{color:var(--foreground);font-weight:500}.agent-routines_latestBody__zGMus{position:relative;min-width:0}.agent-routines_latestPhase__1xOdi{display:grid;min-width:0;gap:var(--space-2)}.agent-routines_instruction__6rsVI{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:1.55}.agent-routines_emptyNote__4VQB4{margin:0;color:var(--text-muted);font-size:var(--text-sm)}.agent-routines_report__Ymjec{display:grid;gap:6px;color:var(--text-secondary);font-size:var(--text-sm);line-height:1.55;overflow-wrap:anywhere}.agent-routines_reportTitle__2NqvR{margin:0;color:var(--foreground)}.agent-routines_reportText__JyFLr{margin:0}.agent-routines_reportList__je8kt{display:grid;gap:4px;margin:0;padding-left:1.1rem;list-style:disc}.agent-routines_reportList__je8kt li{padding-left:2px}.agent-routines_reportList__je8kt li::marker{color:var(--text-muted)}.agent-routines_reportToken__liAFd{color:var(--foreground)}.agent-routines_chunk___mfZ6{animation:agent-routines_chunk-in__7wyfH .16s var(--ease-standard) both}@keyframes agent-routines_chunk-in__7wyfH{0%{opacity:0}}.agent-routines_postedTo__5Y80y{display:flex;align-items:center;gap:6px;margin:2px 0 0;color:var(--text-muted);font-size:var(--text-xs)}.agent-routines_steps__F61QH{display:grid;gap:6px;margin:0;padding:0;list-style:none}.agent-routines_step__UoSYk{display:flex;align-items:center;gap:10px;color:var(--text-secondary)}.agent-routines_step__UoSYk[data-state=pending]{color:var(--text-muted)}.agent-routines_step__UoSYk[data-state=active]{color:var(--foreground)}.agent-routines_stepIcon__gF_Go{display:grid;width:14px;height:14px;flex:none;place-items:center}.agent-routines_step__UoSYk[data-state=done] .agent-routines_stepIcon__gF_Go{color:var(--success)}.agent-routines_stepDot__IN3o3{width:6px;height:6px;border-radius:50%;background:var(--border-strong);transition:background-color var(--duration-fast) var(--ease-standard)}.agent-routines_step__UoSYk[data-state=active] .agent-routines_stepDot__IN3o3{background:var(--routine-accent,var(--accent))}.agent-routines_errorNote__SLi3U{display:flex;align-items:flex-start;gap:10px;padding:var(--space-3) 14px;border:1px solid color-mix(in oklab,var(--danger) 14%,var(--border));border-radius:var(--radius-control);background:color-mix(in oklab,var(--danger) 4%,var(--surface))}.agent-routines_errorNote__SLi3U>svg{margin-top:3px}.agent-routines_errorTitle__A2sUV{margin:0;color:var(--foreground);font-weight:500}.agent-routines_errorText___4GHU{margin:2px 0 0;color:var(--text-secondary)}.agent-routines_schedule__JlPOn{display:grid;min-width:0;gap:var(--space-2);margin:0;padding:0;border:0}.agent-routines_scheduleRow__098gc{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2)}.agent-routines_frequency__Xr8ZS{flex:none;max-width:100%}.agent-routines_scheduleFields__WKcpI{display:flex;flex:none;align-items:center;gap:var(--space-2)}.agent-routines_timeField__HQm5J{width:128px}.agent-routines_dayField__5rS_c{width:148px}.agent-routines_dayField__5rS_c label,.agent-routines_timeField__HQm5J label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.agent-routines_cronLine__5oxht{display:flex;flex-wrap:wrap;align-items:center;gap:2px 6px;margin:0;color:var(--text-muted);font-size:var(--text-xs)}.agent-routines_cron__fSf9M{padding:1px 6px;border-radius:6px;background:var(--surface-muted);color:var(--text-secondary);font-family:var(--mono);font-size:var(--text-xs)}.agent-routines_composerWrap__TcVpv{padding:0 var(--inset) var(--inset)}.agent-routines_composer__3jw16{display:grid;gap:var(--space-4);padding:var(--pad);border-radius:var(--radius-panel);background:var(--row-open)}.agent-routines_parsed__ET_n2{display:grid;gap:var(--space-2)}.agent-routines_parsedName__BJGH0{position:relative;min-height:24px;margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}.agent-routines_parsedNameText__i7EXw{display:block}.agent-routines_chips__Pa6kn{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2) 6px}.agent-routines_chipWord__QZGy4{color:var(--text-muted);font-size:var(--text-sm)}.agent-routines_chip__R2TmT{display:inline-flex;height:30px;align-items:center;gap:4px;padding:0 8px 0 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.agent-routines_chip__R2TmT[data-empty]{border-style:dashed;border-color:var(--border-strong);color:var(--text-muted)}@media (hover:hover) and (pointer:fine){.agent-routines_chip__R2TmT:hover{background:var(--surface-muted)}}.agent-routines_chip__R2TmT[data-state=open]{background:var(--surface-muted)}.agent-routines_chipValue__oddVj{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.agent-routines_chipValue__oddVj>svg{flex:none;color:var(--text-secondary)}.agent-routines_chipValue__oddVj>.agent-routines_mark__eDDMq{color:inherit}.agent-routines_chipChevron__hwS95{flex:none;color:var(--text-muted)}.agent-routines_chipPopover__uIb9x.agent-routines_chipPopover__uIb9x{min-width:15rem;padding:var(--space-2)}.agent-routines_chipPopover__uIb9x:has(.agent-routines_schedule__JlPOn){padding:var(--space-3)}.agent-routines_optionList__t109p{display:grid;gap:2px}.agent-routines_option___URiU{display:flex;width:100%;height:36px;align-items:center;gap:10px;padding:0 10px;border:0;border-radius:calc(var(--radius-panel) - var(--space-2));background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.agent-routines_option___URiU:hover{background:var(--surface-muted);color:var(--foreground)}}.agent-routines_option___URiU[aria-pressed=true]{color:var(--foreground)}.agent-routines_optionText__NVUGW{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.agent-routines_optionCheck__AHWnD{flex:none;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}.agent-routines_option___URiU[aria-pressed=true] .agent-routines_optionCheck__AHWnD{opacity:1}.agent-routines_composerFoot__uo_BX{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-2) var(--space-3)}.agent-routines_composerNote__utnhF{position:relative;display:flex;flex:1 1 240px;min-width:0;min-height:20px;align-items:center;margin:0;color:var(--text-muted);font-size:var(--text-xs)}.agent-routines_composerNoteText__i_xdU{display:inline}.agent-routines_linkButton__76lCm{margin:0;padding:0;border:0;background:none;color:var(--foreground);font:inherit;text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:3px;cursor:pointer}.agent-routines_composerActions__nZ14U{display:flex;flex:none;align-items:center;gap:var(--space-2);margin-left:auto}.agent-routines_accentButton__Py5qR.agent-routines_accentButton__Py5qR{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.agent-routines_empty__jvmCA{display:grid;justify-items:center;gap:var(--space-2);padding:var(--space-10) var(--space-6) var(--space-12);text-align:center}.agent-routines_emptyIcon___HIta{margin-bottom:var(--space-1);color:var(--text-muted)}.agent-routines_emptyTitle__7xi02{margin:0;font-size:var(--text-base);font-weight:500}.agent-routines_emptyText__Z4hlL{max-width:34ch;margin:0;color:var(--text-secondary)}@media (prefers-reduced-motion:reduce){.agent-routines_chunk___mfZ6{animation:none}}@media (prefers-reduced-motion:reduce){.agent-routines_chevron___FJg2,.agent-routines_chip__R2TmT,.agent-routines_head__HQ4ow,.agent-routines_itemInner__5xK9E,.agent-routines_item__h_pCO:before,.agent-routines_nameText___59b3,.agent-routines_optionCheck__AHWnD,.agent-routines_option___URiU,.agent-routines_plusIcon__wWAQK,.agent-routines_runSlot__A6sKI,.agent-routines_stepDot__IN3o3,.agent-routines_tick__KhzwJ,.agent-routines_ticks__VGdoU{transition:none}}", {"root":"agent-routines_root__T_pCb","srOnly":"agent-routines_srOnly__ZanWl","nums":"agent-routines_nums__2QlXe","header":"agent-routines_header__q_yh1","headerText":"agent-routines_headerText__4xyU1","title":"agent-routines_title___DMJ3","subtitle":"agent-routines_subtitle__kfutN","newButton":"agent-routines_newButton__pzuJh","plusIcon":"agent-routines_plusIcon__wWAQK","autoWidth":"agent-routines_autoWidth__lfxBO","autoWidthInner":"agent-routines_autoWidthInner__wDpH1","collapse":"agent-routines_collapse__v_ULU","autoHeight":"agent-routines_autoHeight__AX_vI","list":"agent-routines_list__gTaYJ","item":"agent-routines_item__h_pCO","itemInner":"agent-routines_itemInner__5xK9E","head":"agent-routines_head__HQ4ow","line":"agent-routines_line__Sjo_c","nameHeading":"agent-routines_nameHeading__Ms127","name":"agent-routines_name__hH705","nameText":"agent-routines_nameText___59b3","chevron":"agent-routines_chevron___FJg2","controls":"agent-routines_controls__Vu9bf","switch":"agent-routines_switch__5R7No","runSlot":"agent-routines_runSlot__A6sKI","runButton":"agent-routines_runButton__FAblz","runStack":"agent-routines_runStack__5oIbb","runLayer":"agent-routines_runLayer__qP8fI","playIcon":"agent-routines_playIcon__LY93y","when":"agent-routines_when__g62sU","scheduleText":"agent-routines_scheduleText__Wk9lc","dot":"agent-routines_dot__8EpRq","statusSlot":"agent-routines_statusSlot__z0maf","statusPhase":"agent-routines_statusPhase__DMXhV","countdown":"agent-routines_countdown__rUdPK","runningWord":"agent-routines_runningWord__RPsrL","stepSlot":"agent-routines_stepSlot__tz8C9","stepText":"agent-routines_stepText__Urpsc","lastRun":"agent-routines_lastRun__K2yFe","lastRunPhase":"agent-routines_lastRunPhase__WHqDV","statusIcon":"agent-routines_statusIcon__e5zLM","meta":"agent-routines_meta__BIw_F","sources":"agent-routines_sources__EuiPF","markHit":"agent-routines_markHit__ZMyAr","mark":"agent-routines_mark__eDDMq","more":"agent-routines_more__h_cre","metaArrow":"agent-routines_metaArrow__sqHec","destination":"agent-routines_destination__9Df7M","destinationText":"agent-routines_destinationText__mmHcS","metaDivider":"agent-routines_metaDivider__PLLBo","ticksSlot":"agent-routines_ticksSlot__KhMS9","ticks":"agent-routines_ticks__VGdoU","tickSlot":"agent-routines_tickSlot__4b2_7","tick":"agent-routines_tick__KhzwJ","runTip":"agent-routines_runTip__gwqZZ","runTipHead":"agent-routines_runTipHead___UPMG","runTipMeta":"agent-routines_runTipMeta__j36wC","runTipText":"agent-routines_runTipText__CMEqt","progress":"agent-routines_progress__WEfPQ","progressFill":"agent-routines_progressFill__2q_dT","details":"agent-routines_details__7LgRQ","section":"agent-routines_section__Dl5Bu","sectionHead":"agent-routines_sectionHead__ftwuQ","sectionTitle":"agent-routines_sectionTitle__4MK51","metaSlot":"agent-routines_metaSlot__pzczj","runMeta":"agent-routines_runMeta__78V4r","runMetaLabel":"agent-routines_runMetaLabel__7X4fD","latestBody":"agent-routines_latestBody__zGMus","latestPhase":"agent-routines_latestPhase__1xOdi","instruction":"agent-routines_instruction__6rsVI","emptyNote":"agent-routines_emptyNote__4VQB4","report":"agent-routines_report__Ymjec","reportTitle":"agent-routines_reportTitle__2NqvR","reportText":"agent-routines_reportText__JyFLr","reportList":"agent-routines_reportList__je8kt","reportToken":"agent-routines_reportToken__liAFd","chunk":"agent-routines_chunk___mfZ6","chunk-in":"agent-routines_chunk-in__7wyfH","postedTo":"agent-routines_postedTo__5Y80y","steps":"agent-routines_steps__F61QH","step":"agent-routines_step__UoSYk","stepIcon":"agent-routines_stepIcon__gF_Go","stepDot":"agent-routines_stepDot__IN3o3","errorNote":"agent-routines_errorNote__SLi3U","errorTitle":"agent-routines_errorTitle__A2sUV","errorText":"agent-routines_errorText___4GHU","schedule":"agent-routines_schedule__JlPOn","scheduleRow":"agent-routines_scheduleRow__098gc","frequency":"agent-routines_frequency__Xr8ZS","scheduleFields":"agent-routines_scheduleFields__WKcpI","timeField":"agent-routines_timeField__HQm5J","dayField":"agent-routines_dayField__5rS_c","cronLine":"agent-routines_cronLine__5oxht","cron":"agent-routines_cron__fSf9M","composerWrap":"agent-routines_composerWrap__TcVpv","composer":"agent-routines_composer__3jw16","parsed":"agent-routines_parsed__ET_n2","parsedName":"agent-routines_parsedName__BJGH0","parsedNameText":"agent-routines_parsedNameText__i7EXw","chips":"agent-routines_chips__Pa6kn","chipWord":"agent-routines_chipWord__QZGy4","chip":"agent-routines_chip__R2TmT","chipValue":"agent-routines_chipValue__oddVj","chipChevron":"agent-routines_chipChevron__hwS95","chipPopover":"agent-routines_chipPopover__uIb9x","optionList":"agent-routines_optionList__t109p","option":"agent-routines_option___URiU","optionText":"agent-routines_optionText__NVUGW","optionCheck":"agent-routines_optionCheck__AHWnD","composerFoot":"agent-routines_composerFoot__uo_BX","composerNote":"agent-routines_composerNote__utnhF","composerNoteText":"agent-routines_composerNoteText__i_xdU","linkButton":"agent-routines_linkButton__76lCm","composerActions":"agent-routines_composerActions__nZ14U","accentButton":"agent-routines_accentButton__Py5qR","empty":"agent-routines_empty__jvmCA","emptyIcon":"agent-routines_emptyIcon___HIta","emptyTitle":"agent-routines_emptyTitle__7xi02","emptyText":"agent-routines_emptyText__Z4hlL","runText":"agent-routines_runText__apRYt"});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
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
A.reg(90883, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { AgentRoutines: () => eR, default: () => eA });
  var s = n(95155), a = n(12115), i = n(18310), r = n(80642), o = n(25354), l = n(2125), d = n(77618), u = n(51288), c = n(36619), h = n(40852), p = n(12363), m = n(90467), g = n(50680), _ = n(36690), y = n(52898), f = n(64962), x = n(94890), b = n(79530);
  function j({ title: e2 = "Claude", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function v({ title: e2 = "OpenAI", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  function w({ title: e2 = "Gemini", ...t2 }) {
    let n2 = (0, a.useId)().replace(/:/g, "");
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: "#3186FF"
        }),
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${n2}-0)`
        }),
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${n2}-1)`
        }),
        (0, s.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${n2}-2)`
        }),
        (0, s.jsxs)("defs", {
          children: [
            (0, s.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `${n2}-0`,
              x1: "7",
              x2: "11",
              y1: "15.5",
              y2: "12",
              children: [
                (0, s.jsx)("stop", { stopColor: "#08B962" }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "#08B962",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, s.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `${n2}-1`,
              x1: "8",
              x2: "11.5",
              y1: "5.5",
              y2: "11",
              children: [
                (0, s.jsx)("stop", { stopColor: "#F94543" }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "#F94543",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, s.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `${n2}-2`,
              x1: "3.5",
              x2: "17.5",
              y1: "13.5",
              y2: "12",
              children: [
                (0, s.jsx)("stop", { stopColor: "#FABC12" }),
                (0, s.jsx)("stop", {
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
  }
  let N = {
    linear: { name: "Linear" },
    slack: { name: "Slack" },
    github: { name: "GitHub" },
    sentry: { name: "Sentry" },
    "google-calendar": { name: "Google Calendar" },
    notion: { name: "Notion" }
  }, k = {
    "claude-opus-5-5": {
      name: "Claude Opus 5.5",
      short: "Opus 5.5",
      provider: "anthropic"
    },
    "claude-sonnet-5-5": {
      name: "Claude Sonnet 5.5",
      short: "Sonnet 5.5",
      provider: "anthropic"
    },
    "claude-haiku-5-5": {
      name: "Claude Haiku 5.5",
      short: "Haiku 5.5",
      provider: "anthropic"
    },
    "gpt-6-luna": {
      name: "GPT-6 Luna",
      short: "GPT-6 Luna",
      provider: "openai"
    },
    "gemini-3-8-flash": {
      name: "Gemini 3.8 Flash",
      short: "Gemini 3.8 Flash",
      provider: "google"
    }
  }, T = [
    "#triage",
    "#eng",
    "#incidents",
    "#product",
    "#releases",
    "Direct message"
  ], $ = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], M = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], C = $.map((e2, t2) => ({ value: String(t2), label: e2 }));
  function D(e2) {
    let [t2 = "9", n2 = "0"] = e2.split(":");
    return {
      hours: Math.min(23, Math.max(0, Number.parseInt(t2, 10) || 0)),
      minutes: Math.min(59, Math.max(0, Number.parseInt(n2, 10) || 0))
    };
  }
  let L = (e2) => String(e2).padStart(2, "0"), P = (e2, t2) => `${e2}:${L(t2)}`, z = (e2, t2) => `${L(e2)}:${L(t2)}`;
  function R(e2) {
    let { hours: t2, minutes: n2 } = D(e2.time);
    switch (e2.frequency) {
      case "hourly":
        return `Every hour at :${L(n2)}`;
      case "daily":
        return `Daily at ${P(t2, n2)}`;
      case "weekdays":
        return `Weekdays at ${P(t2, n2)}`;
      case "weekly":
        return `${$[e2.day ?? 1]}s at ${P(t2, n2)}`;
    }
  }
  function A(e2, t2) {
    let n2 = t2.getDay();
    return "weekdays" === e2.frequency ? n2 >= 1 && n2 <= 5 : "weekly" !== e2.frequency || n2 === (e2.day ?? 1);
  }
  function B(e2, t2) {
    let { hours: n2, minutes: s2 } = D(e2.time), a2 = new Date(t2);
    if ("hourly" === e2.frequency) {
      let e3 = new Date(
        a2.getFullYear(),
        a2.getMonth(),
        a2.getDate(),
        a2.getHours(),
        s2,
        0,
        0
      );
      return e3.getTime() <= t2 && e3.setHours(e3.getHours() + 1), e3.getTime();
    }
    for (let i2 = 0; i2 < 9; i2 += 1) {
      let r2 = new Date(
        a2.getFullYear(),
        a2.getMonth(),
        a2.getDate() + i2,
        n2,
        s2,
        0,
        0
      );
      if (r2.getTime() > t2 && A(e2, r2)) return r2.getTime();
    }
    return t2 + 864e5;
  }
  function F(e2, t2) {
    let { hours: n2, minutes: s2 } = D(e2.time), a2 = new Date(t2);
    if ("hourly" === e2.frequency) {
      let e3 = new Date(
        a2.getFullYear(),
        a2.getMonth(),
        a2.getDate(),
        a2.getHours(),
        s2,
        0,
        0
      );
      return e3.getTime() > t2 && e3.setHours(e3.getHours() - 1), e3.getTime();
    }
    for (let i2 = 0; i2 < 9; i2 += 1) {
      let r2 = new Date(
        a2.getFullYear(),
        a2.getMonth(),
        a2.getDate() - i2,
        n2,
        s2,
        0,
        0
      );
      if (r2.getTime() <= t2 && A(e2, r2)) return r2.getTime();
    }
    return t2 - 864e5;
  }
  function I(e2, t2) {
    let n2 = new Date(
      e2 instanceof Date ? e2.getTime() : "number" == typeof e2 ? e2 : new Date(e2).getTime()
    ), s2 = new Date(t2), a2 = new Date(s2.getFullYear(), s2.getMonth(), s2.getDate()).getTime(), i2 = P(n2.getHours(), n2.getMinutes());
    return n2.getTime() >= a2 ? `Today ${i2}` : n2.getTime() >= a2 - 864e5 ? `Yesterday ${i2}` : `${S[n2.getDay()]} ${n2.getDate()} ${M[n2.getMonth()]}, ${i2}`;
  }
  function E(e2) {
    if (null == e2) return "";
    let t2 = Math.max(1, Math.round(e2 / 1e3));
    return t2 >= 60 ? `${Math.floor(t2 / 60)} min ${L(t2 % 60)} s` : `${t2} s`;
  }
  let q = { success: "Succeeded", failed: "Failed", skipped: "Skipped" }, W = [
    [
      "github",
      /\b(github|pull requests?|prs?|commits?|repos?|releases?|merged)\b/i
    ],
    ["linear", /\b(linear|issues?|tickets?|backlog|bugs?|sprint|cycle)\b/i],
    [
      "sentry",
      /\b(sentry|errors?|crash(?:es)?|exceptions?|incidents?|spikes?)\b/i
    ],
    [
      "google-calendar",
      /\b(calendar|meetings?|events?|agenda|schedule for the day)\b/i
    ],
    ["notion", /\b(notion|docs?|wiki|notes|specs?)\b/i]
  ], H = /\b(?:every|each|on)?\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)s?\b/i;
  function O(e2) {
    let t2 = e2.trim(), n2 = (function(e3) {
      let t3 = e3.match(/\b(?:at\s+)?(\d{1,2})[:.](\d{2})\s*(am|pm)?\b/i);
      if (t3) {
        let e4 = Number(t3[1]), n4 = t3[3]?.toLowerCase();
        if ("pm" === n4 && e4 < 12 && (e4 += 12), "am" === n4 && 12 === e4 && (e4 = 0), e4 <= 23)
          return {
            hours: e4,
            minutes: Math.min(59, Number(t3[2])),
            words: t3[0].trim()
          };
      }
      let n3 = e3.match(/\b(?:at\s+)?(\d{1,2})\s*(am|pm)\b/i);
      if (n3) {
        let e4 = Number(n3[1]) % 12;
        return "pm" === n3[2].toLowerCase() && (e4 += 12), { hours: e4, minutes: 0, words: n3[0].trim() };
      }
      let s3 = e3.match(
        /\b(noon|midnight|morning|evening|end of (?:the )?day)\b/i
      );
      if (s3) {
        let e4 = s3[1].toLowerCase();
        return {
          hours: "noon" === e4 ? 12 : "midnight" === e4 ? 0 : "morning" === e4 ? 9 : "evening" === e4 ? 18 : 17,
          minutes: 0,
          words: s3[0]
        };
      }
      return null;
    })(t2), s2 = t2.match(H), a2 = { frequency: "weekdays", time: "09:00" }, i2 = null;
    if (/\b(hourly|every hour|each hour)\b/i.test(t2)) {
      let e3 = t2.match(
        /\b(?:at\s+)?:(\d{2})\b|\b(\d{1,2}) (?:minutes )?past\b/i
      );
      a2 = {
        frequency: "hourly",
        time: z(0, e3 ? Math.min(59, Number(e3[1] ?? e3[2])) : 0)
      }, i2 = t2.match(/\b(hourly|every hour|each hour)\b/i)?.[0] ?? null;
    } else
      /\b(weekdays?|every workday|workdays|monday to friday|mon-fri)\b/i.test(t2) ? (a2 = {
        frequency: "weekdays",
        time: n2 ? z(n2.hours, n2.minutes) : "09:00"
      }, i2 = t2.match(
        /\b(every weekday|weekdays?|every workday|workdays|monday to friday|mon-fri)\b/i
      )?.[0] ?? null) : s2 ? (a2 = {
        frequency: "weekly",
        day: $.findIndex((e3) => e3.toLowerCase() === s2[1].toLowerCase()),
        time: n2 ? z(n2.hours, n2.minutes) : "09:00"
      }, i2 = s2[0].trim()) : /\b(daily|every day|each day|every morning|every evening|nightly|each morning)\b/i.test(
        t2
      ) ? (a2 = {
        frequency: "daily",
        time: n2 ? z(n2.hours, n2.minutes) : "09:00"
      }, i2 = t2.match(
        /\b(daily|every day|each day|every morning|every evening|nightly|each morning)\b/i
      )?.[0] ?? null) : /\b(every week|weekly)\b/i.test(t2) ? (a2 = {
        frequency: "weekly",
        day: 1,
        time: n2 ? z(n2.hours, n2.minutes) : "09:00"
      }, i2 = t2.match(/\b(every week|weekly)\b/i)?.[0] ?? null) : n2 && (a2 = { frequency: "daily", time: z(n2.hours, n2.minutes) });
    n2 && "hourly" !== a2.frequency && (i2 = [i2, n2.words].filter(Boolean).join(" "));
    let r2 = [], o2 = [];
    for (let [e3, n3] of W) {
      let s3 = t2.match(n3);
      s3 && (r2.push(e3), o2.push(s3[0]));
    }
    let l2 = t2.match(/#[\w-]+/), d2 = t2.match(/\b(dm me|direct message|message me|send me|to me)\b/i), u2 = l2 ? l2[0].toLowerCase() : d2 ? "Direct message" : "#eng", c2 = t2 ? (function(e3) {
      let t3 = e3.replace(
        /^[^,]*\b(every|each|daily|hourly|weekdays?|on \w+days?)\b[^,]*,\s*/i,
        ""
      ).replace(
        /\b(every|each)\s+(hour|day|morning|evening|weekday|workday|week|sunday|monday|tuesday|wednesday|thursday|friday|saturday)s?\b/gi,
        ""
      ).replace(/\b(hourly|daily|nightly|on weekdays)\b/gi, "").replace(
        /\bat\s+(\d{1,2}([:.]\d{2})?\s*(am|pm)?|noon|midnight)\b/gi,
        ""
      ).replace(
        /\b(to|in|into|on)\s+(#[\w-]+|slack|a dm|my dms?)\b.*$/i,
        ""
      ).replace(
        /\s*(and )?(post|send|share|drop)\s*(it|them|that)?\s*$/i,
        ""
      ).replace(/[,.]+/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).slice(0, 5);
      if (!t3.length) return null;
      let n3 = t3.join(" ");
      return n3.charAt(0).toUpperCase() + n3.slice(1);
    })(t2) : null;
    return {
      name: c2 ?? "New routine",
      schedule: a2,
      sources: r2,
      destination: u2,
      found: {
        name: c2,
        schedule: i2,
        sources: o2.length ? o2.join(", ") : null,
        destination: l2?.[0] ?? d2?.[0] ?? null
      }
    };
  }
  let Y = () => new Date(2026, 9, 20, 6, 45, 30).getTime();
  function G(e2, t2, n2, s2) {
    let a2 = [], i2 = F(t2, s2);
    for (let s3 = n2.length - 1; s3 >= 0; s3 -= 1) {
      let r2 = n2[s3];
      a2.unshift({
        id: `${e2}-${i2}`,
        status: r2.status,
        at: i2,
        durationMs: r2.durationMs,
        summary: r2.summary
      }), i2 = F(t2, i2 - 6e4);
    }
    return a2;
  }
  let V = (e2, t2) => ({ status: "success", summary: e2, durationMs: 1e3 * t2 }), U = (e2) => ({ status: "skipped", summary: e2, durationMs: 4e3 }), K = (e2, t2) => ({ status: "failed", summary: e2, durationMs: 1e3 * t2 });
  var Z = n(80139), J = n.n(Z);
  let X = [0.22, 1, 0.36, 1], Q = { type: "spring", visualDuration: 0.32, bounce: 0 }, ee = { duration: 0.24, ease: X }, et = { success: f.A, failed: x.A, skipped: b.A }, en = { status: "idle", step: 0, steps: [], attempts: 0, streamKey: 0 };
  function es({ swapKey: e2, reduced: t2, className: n2, children: a2 }) {
    return (0, s.jsx)(r.N, {
      mode: "popLayout",
      initial: false,
      children: (0, s.jsx)(
        o.PY1.span,
        {
          className: n2,
          initial: t2 ? { opacity: 0 } : { opacity: 0, y: 2 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, transition: { duration: 0.1 * !t2, ease: X } },
          transition: { duration: t2 ? 0.12 : 0.16, ease: X },
          children: a2
        },
        e2
      )
    });
  }
  function ea({ reduced: e2, className: t2, children: n2 }) {
    let i2 = (0, a.useRef)(null), [r2, l2] = (0, a.useState)(null);
    return (0, a.useEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => l2(e3.offsetWidth));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, s.jsx)(o.PY1.span, {
      className: [J().autoWidth, t2].filter(Boolean).join(" "),
      initial: false,
      animate: null === r2 ? void 0 : { width: r2 },
      transition: e2 ? { duration: 0 } : Q,
      children: (0, s.jsx)("span", {
        ref: i2,
        className: J().autoWidthInner,
        children: n2
      })
    });
  }
  let ei = { type: "spring", visualDuration: 0.34, bounce: 0 };
  function er({ reduced: e2, children: t2 }) {
    let n2 = (0, a.useRef)(null), [i2, r2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let e3 = n2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => r2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, s.jsx)(o.PY1.div, {
      className: J().autoHeight,
      initial: false,
      animate: { height: i2 },
      transition: e2 ? { duration: 0 } : Q,
      children: (0, s.jsx)("div", { ref: n2, children: t2 })
    });
  }
  function eo({ open: e2, reduced: t2, id: n2, className: a2, children: i2 }) {
    let l2 = { duration: 0 };
    return (0, s.jsx)(r.N, {
      initial: false,
      children: e2 ? (0, s.jsx)(
        o.PY1.div,
        {
          id: n2,
          className: [J().collapse, a2].filter(Boolean).join(" "),
          initial: { height: 0, opacity: 0 },
          animate: {
            height: "auto",
            opacity: 1,
            transition: t2 ? l2 : {
              height: ei,
              opacity: { duration: 0.24, delay: 0.06, ease: X }
            }
          },
          exit: {
            height: 0,
            opacity: 0,
            transition: t2 ? l2 : { height: ei, opacity: { duration: 0.18, ease: X } }
          },
          children: (0, s.jsx)(o.PY1.div, {
            initial: !t2 && { y: 6 },
            animate: { y: 0, transition: t2 ? l2 : ei },
            exit: t2 ? void 0 : { y: 6, transition: ei },
            children: (0, s.jsx)(er, { reduced: t2, children: i2 })
          })
        },
        "collapse"
      ) : null
    });
  }
  let el = {
    linear: function({ title: e2 = "Linear", ...t2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, s.jsx)("path", {
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        })
      });
    },
    slack: function({ title: e2 = "Slack", ...t2 }) {
      return (0, s.jsxs)("svg", {
        viewBox: "0 0 24 24",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: [
          (0, s.jsx)("path", {
            fill: "#E01E5A",
            d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
          }),
          (0, s.jsx)("path", {
            fill: "#36C5F0",
            d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
          }),
          (0, s.jsx)("path", {
            fill: "#2EB67D",
            d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
          }),
          (0, s.jsx)("path", {
            fill: "#ECB22E",
            d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
          })
        ]
      });
    },
    github: function({ title: e2 = "GitHub", ...t2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, s.jsx)("path", {
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
      });
    },
    sentry: function({ title: e2 = "Sentry", ...t2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, s.jsx)("path", {
          d: "M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z"
        })
      });
    },
    "google-calendar": function({ title: e2 = "Google Calendar", ...t2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, s.jsx)("path", {
          d: "M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"
        })
      });
    },
    notion: function({ title: e2 = "Notion", ...t2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, s.jsx)("path", {
          d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
        })
      });
    }
  };
  function ed({ id: e2, size: t2 = 14 }) {
    let n2 = el[e2];
    return (0, s.jsx)(n2, {
      width: t2,
      height: t2,
      title: N[e2].name,
      "aria-hidden": "true",
      className: J().mark,
      "data-brand": e2
    });
  }
  function eu({ id: e2, size: t2 = 14 }) {
    let n2 = k[e2].provider, a2 = {
      width: t2,
      height: t2,
      "aria-hidden": true,
      className: J().mark,
      "data-brand": n2
    };
    return "anthropic" === n2 ? (0, s.jsx)(j, { ...a2 }) : "google" === n2 ? (0, s.jsx)(w, { ...a2 }) : (0, s.jsx)(v, { ...a2 });
  }
  function ec({ runs: e2, now: t2, reduced: n2, routineName: i2 }) {
    let l2 = e2.slice(-14), d2 = 14 - l2.length, [u2, c2] = (0, a.useState)(null), h2 = l2.findIndex((e3) => e3.id === u2), p2 = -1 === h2 ? l2.length - 1 : h2, m2 = l2.reduce((e3, t3) => ({ ...e3, [t3.status]: e3[t3.status] + 1 }), {
      success: 0,
      failed: 0,
      skipped: 0
    }), g2 = l2.length ? `${i2}, last ${l2.length} runs: ${m2.success} succeeded, ${m2.failed} failed, ${m2.skipped} skipped` : `${i2} has no runs yet`, y2 = (e3) => {
      let t3 = l2.length - 1, n3 = "ArrowRight" === e3.key ? Math.min(t3, p2 + 1) : "ArrowLeft" === e3.key ? Math.max(0, p2 - 1) : "Home" === e3.key ? 0 : "End" === e3.key ? t3 : -1;
      !(n3 < 0) && l2[n3] && (e3.preventDefault(), c2(l2[n3].id), e3.currentTarget.closest(`.${J().ticks}`)?.querySelector(`[data-run="${CSS.escape(l2[n3].id)}"]`)?.focus());
    };
    return (0, s.jsxs)("div", {
      className: J().ticks,
      role: "group",
      "aria-label": g2,
      style: { width: 95 },
      children: [
        Array.from(
          { length: d2 },
          (e3, t3) => (0, s.jsx)(
            "span",
            {
              className: J().tickSlot,
              style: { transform: `translateX(${7 * t3}px)` },
              "aria-hidden": "true",
              children: (0, s.jsx)("span", {
                className: J().tick,
                "data-status": "empty"
              })
            },
            `empty-${t3}`
          )
        ),
        (0, s.jsx)(r.N, {
          initial: false,
          children: l2.map((e3, a2) => {
            let i3 = d2 + a2, r2 = et[e3.status], l3 = I(e3.at, t2), u3 = E(e3.durationMs);
            return (0, s.jsx)(
              o.PY1.span,
              {
                className: J().tickSlot,
                initial: n2 ? { x: 7 * i3, opacity: 0 } : { x: (i3 + 1) * 7, opacity: 0 },
                animate: { x: 7 * i3, opacity: 1 },
                exit: n2 ? { opacity: 0, transition: { duration: 0 } } : { x: (i3 - 1) * 7, opacity: 0, transition: ee },
                transition: n2 ? { duration: 0 } : ee,
                children: (0, s.jsx)(_.m, {
                  content: (0, s.jsxs)("span", {
                    className: J().runTip,
                    children: [
                      (0, s.jsxs)("span", {
                        className: J().runTipHead,
                        "data-status": e3.status,
                        children: [
                          (0, s.jsx)(r2, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          q[e3.status],
                          (0, s.jsxs)("span", {
                            className: J().runTipMeta,
                            children: [l3, u3 ? ` \xB7 ${u3}` : ""]
                          })
                        ]
                      }),
                      (0, s.jsx)("span", {
                        className: J().runTipText,
                        children: e3.summary
                      })
                    ]
                  }),
                  children: (0, s.jsx)("span", {
                    role: "img",
                    className: J().tick,
                    "data-status": e3.status,
                    "data-run": e3.id,
                    tabIndex: a2 === p2 ? 0 : -1,
                    "aria-label": `${q[e3.status]}, ${l3}${u3 ? `, ${u3}` : ""}: ${e3.summary}`,
                    onKeyDown: y2,
                    onFocus: () => c2(e3.id)
                  })
                })
              },
              e3.id
            );
          })
        })
      ]
    });
  }
  var eh = n(64577), ep = n(35484);
  let em = /(\b[A-Z]{2,5}-\d{2,5}\b|#\d{3,5}\b|#[a-z][\w-]*)/g;
  function eg(e2) {
    let t2 = e2.split(em);
    return 1 === t2.length ? e2 : t2.map(
      (e3, t3) => t3 % 2 == 1 ? (0, s.jsx)("span", { className: J().reportToken, children: e3 }, t3) : e3
    );
  }
  function e_({ report: e2, streaming: t2 = false, streamKey: n2 = 0, onDone: i2 }) {
    let r2 = (0, a.useMemo)(() => {
      let t3, n3;
      return t3 = 7, n3 = () => (t3 = (9301 * t3 + 49297) % 233280) / 233280, e2.split("\n").filter((e3) => e3.trim()).map((e3, t4) => {
        let s2 = 0 === t4 ? "title" : e3.startsWith("- ") ? "item" : "text", a2 = "item" === s2 ? e3.slice(2) : e3, i3 = [], r3 = 0;
        for (; r3 < a2.length; ) {
          let e4 = r3 + 15 + Math.floor(26 * n3());
          if (e4 >= a2.length) {
            i3.push(a2.slice(r3));
            break;
          }
          let t5 = a2.indexOf(" ", e4), s3 = -1 === t5 ? a2.length : t5 + 1;
          i3.push(a2.slice(r3, s3)), r3 = s3;
        }
        return { kind: s2, chunks: i3 };
      });
    }, [e2]), o2 = (0, a.useMemo)(() => r2.reduce((e3, t3) => e3 + t3.chunks.length, 0), [r2]), l2 = (function(e3, t3, n3) {
      let [s2, i3] = (0, a.useState)(t3 ? 0 : e3), [r3, o3] = (0, a.useState)(n3);
      return r3 !== n3 && (o3(n3), i3(t3 ? 0 : e3)), (0, a.useEffect)(() => {
        if (!t3) return;
        let n4 = 0, s3 = 0, a2 = 0, r4 = (t4) => {
          s3 || (s3 = t4);
          let o4 = Math.min(e3, Math.floor((t4 - s3) / 32) + 1);
          o4 !== a2 && (a2 = o4, i3(o4)), a2 < e3 && (n4 = requestAnimationFrame(r4));
        };
        return n4 = requestAnimationFrame(r4), () => cancelAnimationFrame(n4);
      }, [t3, n3, e3]), t3 ? s2 : e3;
    })(o2, t2, n2), d2 = (0, a.useRef)(i2);
    (0, a.useEffect)(() => {
      d2.current = i2;
    }), (0, a.useEffect)(() => {
      t2 && l2 >= o2 && d2.current?.();
    }, [t2, l2, o2]);
    let u2 = 0, c2 = [], h2 = [], p2 = -1, m2 = () => {
      h2.length && (c2.push(
        (0, s.jsx)(
          "ul",
          { className: J().reportList, children: h2 },
          `list-${p2}`
        )
      ), h2 = []);
    };
    return r2.forEach((e3, n3) => {
      let a2 = u2;
      if (u2 += e3.chunks.length, a2 >= l2) return;
      let i3 = e3.chunks.slice(0, l2 - a2), r3 = t2 ? i3.map(
        (e4, t3) => (0, s.jsx)(
          "span",
          { className: J().chunk, children: eg(e4) },
          a2 + t3
        )
      ) : eg(e3.chunks.join(""));
      if ("item" === e3.kind) {
        h2.length || (p2 = n3), h2.push((0, s.jsx)("li", { children: r3 }, n3));
        return;
      }
      m2(), c2.push(
        "title" === e3.kind ? (0, s.jsx)("p", { className: J().reportTitle, children: r3 }, n3) : (0, s.jsx)("p", { className: J().reportText, children: r3 }, n3)
      );
    }), m2(), (0, s.jsx)("div", {
      className: J().report,
      "aria-busy": !!t2 && l2 < o2 || void 0,
      children: c2
    });
  }
  var ey = n(66558), ef = n(96220), ex = n(35978);
  let eb = [
    { value: "hourly", label: "Hourly" },
    { value: "daily", label: "Daily" },
    { value: "weekdays", label: "Weekdays" },
    { value: "weekly", label: "Weekly" }
  ], ej = ["00", "15", "30", "45"], ev = [...C.slice(1), C[0]].map((e2) => ({ value: e2.value, label: e2.label }));
  function ew({ value: e2, onChange: t2, idPrefix: n2, label: a2 = "Schedule" }) {
    let { hours: i2, minutes: r2 } = D(e2.time), o2 = String(r2).padStart(2, "0"), l2 = ej.includes(o2) ? ej : [...ej, o2].sort();
    return (0, s.jsxs)("fieldset", {
      className: J().schedule,
      children: [
        (0, s.jsx)("legend", { className: J().srOnly, children: a2 }),
        (0, s.jsxs)("div", {
          className: J().scheduleRow,
          children: [
            (0, s.jsx)(ey.A, {
              label: "Frequency",
              options: eb,
              value: e2.frequency,
              className: J().frequency,
              onValueChange: (n3) => t2({
                ...e2,
                frequency: n3,
                day: "weekly" === n3 ? e2.day ?? 5 : e2.day
              })
            }),
            (0, s.jsxs)("div", {
              className: J().scheduleFields,
              children: [
                "weekly" === e2.frequency ? (0, s.jsx)("div", {
                  className: J().dayField,
                  children: (0, s.jsx)(ef.l, {
                    label: "Day",
                    value: String(e2.day ?? 5),
                    onValueChange: (n3) => t2({ ...e2, day: Number(n3) }),
                    options: ev
                  })
                }) : null,
                "hourly" === e2.frequency ? (0, s.jsx)("div", {
                  className: J().timeField,
                  children: (0, s.jsx)(ef.l, {
                    label: "Minute past the hour",
                    value: o2,
                    onValueChange: (n3) => t2({ ...e2, time: z(i2, Number(n3)) }),
                    options: l2.map((e3) => ({ value: e3, label: `:${e3}` }))
                  })
                }) : (0, s.jsx)("div", {
                  className: J().timeField,
                  children: (0, s.jsx)(ex.p, {
                    id: `${n2}-time`,
                    label: "Time",
                    type: "time",
                    value: z(i2, r2),
                    required: true,
                    onChange: (n3) => {
                      n3.target.value && t2({ ...e2, time: n3.target.value });
                    }
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("p", {
          className: J().cronLine,
          children: [
            (0, s.jsx)("span", { children: R(e2) }),
            (0, s.jsx)("span", { "aria-hidden": "true", children: "\xB7" }),
            (0, s.jsxs)("span", {
              children: [
                "Cron ",
                (0, s.jsx)("code", {
                  className: J().cron,
                  children: (function(e3) {
                    let { hours: t3, minutes: n3 } = D(e3.time);
                    switch (e3.frequency) {
                      case "hourly":
                        return `${n3} * * * *`;
                      case "daily":
                        return `${n3} ${t3} * * *`;
                      case "weekdays":
                        return `${n3} ${t3} * * 1-5`;
                      case "weekly":
                        return `${n3} ${t3} * * ${e3.day ?? 1}`;
                    }
                  })(e2)
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function eN({
    routine: e2,
    live: t2,
    now: n2,
    reduced: i2,
    streaming: l2,
    onStreamDone: d2,
    onScheduleChange: u2
  }) {
    let c2 = (0, a.useId)(), h2 = "running" === t2.status, p2 = e2.history.at(-1), m2 = !h2 && ("failed" === t2.status || p2?.status === "failed"), g2 = h2 ? "running" : m2 ? "failed" : e2.report ? "report" : "empty", _2 = Math.max(1, t2.steps.length), f2 = p2 ? et[p2.status] : null, x2 = "failed" === t2.status ? t2.steps[t2.step] : void 0;
    return (0, s.jsxs)("div", {
      className: J().details,
      children: [
        (0, s.jsxs)("section", {
          className: J().section,
          "aria-labelledby": `${c2}-latest`,
          children: [
            (0, s.jsxs)("div", {
              className: J().sectionHead,
              children: [
                (0, s.jsx)("h4", {
                  id: `${c2}-latest`,
                  className: J().sectionTitle,
                  children: "Latest run"
                }),
                (0, s.jsx)("span", {
                  className: J().metaSlot,
                  children: (0, s.jsx)(es, {
                    swapKey: h2 ? "running" : p2?.id ?? "none",
                    reduced: i2,
                    className: J().runMeta,
                    children: h2 ? (0, s.jsxs)("span", {
                      className: J().nums,
                      children: ["Step ", t2.step + 1, " of ", _2]
                    }) : p2 && f2 ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(f2, {
                          size: 14,
                          strokeWidth: 1.75,
                          className: J().statusIcon,
                          "data-status": p2.status,
                          "aria-hidden": "true"
                        }),
                        (0, s.jsx)("span", {
                          className: J().runMetaLabel,
                          children: q[p2.status]
                        }),
                        (0, s.jsx)("span", { children: I(p2.at, n2) }),
                        p2.durationMs ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("span", {
                              "aria-hidden": "true",
                              children: "\xB7"
                            }),
                            (0, s.jsx)("span", {
                              className: J().nums,
                              children: E(p2.durationMs)
                            })
                          ]
                        }) : null,
                        (0, s.jsx)("span", {
                          "aria-hidden": "true",
                          children: "\xB7"
                        }),
                        (0, s.jsx)("span", { children: k[e2.model].name })
                      ]
                    }) : (0, s.jsx)("span", { children: "No runs yet" })
                  })
                })
              ]
            }),
            (0, s.jsx)("div", {
              className: J().latestBody,
              children: (0, s.jsx)(r.N, {
                mode: "popLayout",
                initial: false,
                children: (0, s.jsx)(
                  o.PY1.div,
                  {
                    className: J().latestPhase,
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { duration: i2 ? 0.12 : 0.16, ease: X }
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.1 * !i2, ease: X }
                    },
                    children: "running" === g2 ? (0, s.jsx)("ol", {
                      className: J().steps,
                      "aria-label": "Run progress",
                      children: t2.steps.map((e3, n3) => {
                        let a2 = n3 < t2.step ? "done" : n3 === t2.step ? "active" : "pending";
                        return (0, s.jsxs)(
                          "li",
                          {
                            className: J().step,
                            "data-state": a2,
                            "aria-current": "active" === a2 ? "step" : void 0,
                            children: [
                              (0, s.jsx)("span", {
                                className: J().stepIcon,
                                "aria-hidden": "true",
                                children: "done" === a2 ? (0, s.jsx)(eh.A, {
                                  size: 14,
                                  strokeWidth: 2
                                }) : (0, s.jsx)("span", {
                                  className: J().stepDot
                                })
                              }),
                              (0, s.jsx)(y.n, {
                                active: "active" === a2,
                                children: e3
                              }),
                              (0, s.jsx)("span", {
                                className: J().srOnly,
                                children: "done" === a2 ? ", done" : "active" === a2 ? ", in progress" : ", waiting"
                              })
                            ]
                          },
                          e3
                        );
                      })
                    }) : "failed" === g2 ? (0, s.jsxs)("div", {
                      className: J().errorNote,
                      role: "alert",
                      children: [
                        (0, s.jsx)(ep.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          className: J().statusIcon,
                          "data-status": "failed",
                          "aria-hidden": "true"
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("p", {
                              className: J().errorTitle,
                              children: x2 ? `Failed while ${x2.charAt(0).toLowerCase()}${x2.slice(1)}` : "The last run failed"
                            }),
                            (0, s.jsxs)("p", {
                              className: J().errorText,
                              children: [
                                t2.error ?? `${p2?.summary ?? "The run stopped early"}.`,
                                " Run it again when the service is back."
                              ]
                            })
                          ]
                        })
                      ]
                    }) : "report" === g2 && e2.report ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(e_, {
                          report: e2.report,
                          streaming: l2,
                          streamKey: t2.streamKey,
                          onDone: d2
                        }),
                        (0, s.jsxs)("p", {
                          className: J().postedTo,
                          children: [
                            (0, s.jsx)(ed, { id: "slack", size: 12 }),
                            p2?.status === "skipped" ? "Nothing posted" : "Direct message" === e2.destination ? "Sent as a direct message" : (0, s.jsxs)(s.Fragment, {
                              children: [
                                "Posted to ",
                                (0, s.jsx)("span", {
                                  className: J().reportToken,
                                  children: e2.destination
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }) : (0, s.jsx)("p", {
                      className: J().emptyNote,
                      children: "No runs yet. Run it now to see the output here."
                    })
                  },
                  g2
                )
              })
            })
          ]
        }),
        (0, s.jsxs)("section", {
          className: J().section,
          "aria-labelledby": `${c2}-instructions`,
          children: [
            (0, s.jsx)("h4", {
              id: `${c2}-instructions`,
              className: J().sectionTitle,
              children: "Instructions"
            }),
            (0, s.jsx)("p", {
              className: J().instruction,
              children: e2.instruction
            })
          ]
        }),
        (0, s.jsxs)("section", {
          className: J().section,
          "aria-labelledby": `${c2}-schedule`,
          children: [
            (0, s.jsx)("h4", {
              id: `${c2}-schedule`,
              className: J().sectionTitle,
              children: "Schedule"
            }),
            (0, s.jsx)(ew, {
              idPrefix: c2,
              value: e2.schedule,
              onChange: u2,
              label: `${e2.name} schedule`
            })
          ]
        })
      ]
    });
  }
  function ek({ running: e2, reduced: t2 }) {
    let n2 = { duration: 0.16 * !t2, ease: X };
    return (0, s.jsxs)("span", {
      className: J().runStack,
      children: [
        (0, s.jsxs)(o.PY1.span, {
          className: J().runLayer,
          "aria-hidden": e2 || void 0,
          initial: false,
          animate: { opacity: +!e2 },
          transition: n2,
          children: [
            (0, s.jsx)(c.A, {
              size: 14,
              strokeWidth: 1.75,
              className: J().playIcon,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("span", { className: J().runText, children: "Run now" })
          ]
        }),
        (0, s.jsxs)(o.PY1.span, {
          className: J().runLayer,
          "aria-hidden": !e2 || void 0,
          initial: false,
          animate: { opacity: +!!e2 },
          transition: n2,
          children: [
            (0, s.jsx)(h.A, {
              size: 12,
              strokeWidth: 2,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("span", { className: J().runText, children: "Stop" })
          ]
        })
      ]
    });
  }
  let eT = (0, a.forwardRef)(function({
    routine: e2,
    live: t2,
    now: n2,
    reduced: i2,
    open: l2,
    streaming: d2,
    stepMs: c2,
    onOpenChange: h2,
    onRun: f2,
    onStop: x2,
    onToggle: b2,
    onScheduleChange: j2,
    onStreamDone: v2,
    onNavigate: w2
  }, T2) {
    let $2, S2, M2, C2, D2, P2 = (0, a.useId)(), z2 = "running" === t2.status, A2 = k[e2.model], F2 = e2.history.at(-1), E2 = F2 ? et[F2.status] : null, W2 = n2 ?? 0, H2 = z2 ? Math.min(1, (t2.step + 1) / Math.max(1, t2.steps.length)) : 0, O2 = e2.sources.length > 3 ? e2.sources.slice(0, 2) : e2.sources, Y2 = e2.sources.slice(O2.length), G2 = "Direct message" === e2.destination ? "Slack direct message" : `Slack ${e2.destination}`, V2 = e2.sources.map((e3) => N[e3].name), U2 = z2 ? "running" : e2.enabled ? "next" : "paused";
    return (0, s.jsxs)("div", {
      className: J().itemInner,
      "data-open": l2 || void 0,
      "data-enabled": e2.enabled || void 0,
      "data-running": z2 || void 0,
      style: {
        "--routine-accent": `var(--series-${(function(e3) {
          if (e3.accent) return e3.accent;
          let t3 = 0;
          for (let n3 of e3.id) t3 = 31 * t3 + n3.charCodeAt(0) >>> 0;
          return t3 % 4 + 1;
        })(e2)})`
      },
      children: [
        (0, s.jsxs)("div", {
          className: J().head,
          onClick: (e3) => {
            let t3 = e3.target;
            t3.closest("[data-row-control]") || t3.closest("button") || window.getSelection()?.toString() || h2(!l2);
          },
          children: [
            (0, s.jsxs)("div", {
              className: J().line,
              children: [
                (0, s.jsx)("h3", {
                  className: J().nameHeading,
                  children: (0, s.jsxs)("button", {
                    ref: T2,
                    type: "button",
                    className: J().name,
                    "aria-expanded": l2,
                    "aria-controls": l2 ? P2 : void 0,
                    onClick: () => h2(!l2),
                    onKeyDown: (e3) => {
                      let t3 = "ArrowDown" === e3.key ? 1 : "ArrowUp" === e3.key ? -1 : "Home" === e3.key ? "first" : "End" === e3.key ? "last" : null;
                      null !== t3 && (e3.preventDefault(), w2(t3));
                    },
                    children: [
                      (0, s.jsx)("span", {
                        className: J().nameText,
                        children: e2.name
                      }),
                      (0, s.jsx)(p.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        className: J().chevron,
                        "aria-hidden": "true"
                      })
                    ]
                  })
                }),
                (0, s.jsxs)("div", {
                  className: J().controls,
                  "data-row-control": true,
                  children: [
                    (0, s.jsx)("span", {
                      className: J().runSlot,
                      children: (0, s.jsx)(u.$, {
                        size: "sm",
                        variant: "ghost",
                        className: J().runButton,
                        onClick: z2 ? x2 : f2,
                        "aria-label": z2 ? `Stop ${e2.name}` : `Run ${e2.name} now`,
                        children: (0, s.jsx)(ek, { running: z2, reduced: i2 })
                      })
                    }),
                    (0, s.jsx)(g.d, {
                      className: J().switch,
                      checked: e2.enabled,
                      onCheckedChange: b2,
                      "aria-label": `Run ${e2.name} on schedule`
                    })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: J().line,
              children: [
                (0, s.jsxs)("p", {
                  className: J().when,
                  children: [
                    (0, s.jsx)(ea, {
                      reduced: i2,
                      className: J().scheduleText,
                      children: (0, s.jsx)(es, {
                        swapKey: R(e2.schedule),
                        reduced: i2,
                        children: R(e2.schedule)
                      })
                    }),
                    (0, s.jsx)("span", {
                      className: J().dot,
                      "aria-hidden": "true",
                      children: "\xB7"
                    }),
                    (0, s.jsx)("span", {
                      className: J().statusSlot,
                      children: (0, s.jsx)(es, {
                        swapKey: U2,
                        reduced: i2,
                        className: J().statusPhase,
                        children: "running" === U2 ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(y.n, {
                              className: J().runningWord,
                              children: "Running"
                            }),
                            (0, s.jsx)("span", {
                              className: J().dot,
                              "aria-hidden": "true",
                              children: "\xB7"
                            }),
                            (0, s.jsx)("span", {
                              className: J().stepSlot,
                              children: (0, s.jsx)(es, {
                                swapKey: `step-${t2.step}`,
                                reduced: i2,
                                className: J().stepText,
                                children: t2.steps[t2.step] ?? "Starting"
                              })
                            })
                          ]
                        }) : "paused" === U2 ? "Paused" : null === n2 ? "Next run soon" : (0, s.jsxs)("span", {
                          children: [
                            "Next run in ",
                            (0, s.jsx)("span", {
                              className: J().countdown,
                              children: (S2 = Math.floor(
                                ($2 = Math.max(
                                  0,
                                  Math.floor(
                                    (B(e2.schedule, n2) - n2) / 1e3
                                  )
                                )) / 86400
                              ), M2 = Math.floor($2 % 86400 / 3600), C2 = Math.floor($2 % 3600 / 60), D2 = $2 % 60, S2 > 0 ? `${S2} d ${M2} h` : M2 > 0 ? `${M2} h ${C2} min` : C2 > 0 ? `${C2} min ${L(D2)} s` : `${D2} s`)
                            })
                          ]
                        })
                      })
                    })
                  ]
                }),
                (0, s.jsx)("p", {
                  className: J().lastRun,
                  children: (0, s.jsx)(es, {
                    swapKey: F2?.id ?? "none",
                    reduced: i2,
                    className: J().lastRunPhase,
                    children: F2 && E2 ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(E2, {
                          size: 14,
                          strokeWidth: 1.75,
                          className: J().statusIcon,
                          "data-status": F2.status,
                          "aria-hidden": "true"
                        }),
                        (0, s.jsxs)("span", {
                          className: J().srOnly,
                          children: [q[F2.status], ", "]
                        }),
                        (0, s.jsxs)("span", {
                          children: [
                            "Last run ",
                            I(F2.at, W2).replace(
                              /^(Today|Yesterday)/,
                              (e3) => e3.toLowerCase()
                            )
                          ]
                        })
                      ]
                    }) : (0, s.jsx)("span", { children: "No runs yet" })
                  })
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: J().line,
              children: [
                (0, s.jsxs)("div", {
                  className: J().meta,
                  children: [
                    (0, s.jsxs)("span", {
                      className: J().srOnly,
                      children: [
                        "Reads ",
                        V2.join(", ") || "no sources",
                        ", posts to ",
                        G2,
                        ", runs on ",
                        A2.name,
                        "."
                      ]
                    }),
                    (0, s.jsxs)("span", {
                      className: J().sources,
                      "aria-hidden": "true",
                      children: [
                        O2.map(
                          (e3) => (0, s.jsx)(
                            _.m,
                            {
                              content: N[e3].name,
                              children: (0, s.jsx)("span", {
                                className: J().markHit,
                                children: (0, s.jsx)(ed, { id: e3 })
                              })
                            },
                            e3
                          )
                        ),
                        Y2.length ? (0, s.jsx)(_.m, {
                          content: Y2.map((e3) => N[e3].name).join(", "),
                          children: (0, s.jsxs)("span", {
                            className: J().more,
                            children: ["+", Y2.length]
                          })
                        }) : null
                      ]
                    }),
                    (0, s.jsx)(m.A, {
                      size: 12,
                      strokeWidth: 1.75,
                      className: J().metaArrow,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsx)(_.m, {
                      content: G2,
                      children: (0, s.jsxs)("span", {
                        className: J().destination,
                        "aria-hidden": "true",
                        children: [
                          (0, s.jsx)(ed, { id: "slack", size: 12 }),
                          (0, s.jsx)("span", {
                            className: J().destinationText,
                            children: "Direct message" === e2.destination ? "DM" : e2.destination
                          })
                        ]
                      })
                    }),
                    (0, s.jsx)("span", {
                      className: J().metaDivider,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsx)(_.m, {
                      content: A2.name,
                      children: (0, s.jsx)("span", {
                        className: J().markHit,
                        "aria-hidden": "true",
                        children: (0, s.jsx)(eu, { id: e2.model })
                      })
                    })
                  ]
                }),
                (0, s.jsx)("div", {
                  className: J().ticksSlot,
                  "data-row-control": true,
                  children: (0, s.jsx)(ec, {
                    runs: e2.history,
                    now: W2,
                    reduced: i2,
                    routineName: e2.name
                  })
                })
              ]
            }),
            (0, s.jsx)(r.N, {
              children: z2 ? (0, s.jsx)(
                o.PY1.span,
                {
                  className: J().progress,
                  "aria-hidden": "true",
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { duration: 0.16 } },
                  exit: {
                    opacity: 0,
                    transition: {
                      duration: 0.24 * !i2,
                      delay: 0.12 * !i2,
                      ease: X
                    }
                  },
                  children: (0, s.jsx)(o.PY1.span, {
                    className: J().progressFill,
                    initial: { scaleX: 0 },
                    animate: { scaleX: H2 },
                    transition: i2 ? { duration: 0 } : { duration: c2 / 1e3, ease: "linear" }
                  })
                },
                "progress"
              ) : null
            })
          ]
        }),
        (0, s.jsx)(eo, {
          open: l2,
          reduced: i2,
          id: P2,
          children: (0, s.jsx)(eN, {
            routine: e2,
            live: t2,
            now: W2,
            reduced: i2,
            streaming: d2,
            onStreamDone: v2,
            onScheduleChange: j2
          })
        })
      ]
    });
  });
  var e$ = n(6923), eS = n(83978);
  let eM = { frequency: "weekdays", time: "09:00" }, eC = [
    "linear",
    "github",
    "sentry",
    "google-calendar",
    "notion",
    "slack"
  ].filter((e2) => "slack" !== e2);
  function eD({
    label: e2,
    value: t2,
    empty: n2,
    popoverLabel: a2,
    reduced: i2,
    children: r2
  }) {
    return (0, s.jsxs)(eS.AM, {
      children: [
        (0, s.jsxs)(eS.Wv, {
          className: J().chip,
          "data-empty": n2 || void 0,
          "aria-label": `${a2}: ${t2}`,
          children: [
            (0, s.jsx)(ea, {
              reduced: i2,
              children: (0, s.jsx)(es, {
                swapKey: t2,
                reduced: i2,
                className: J().chipValue,
                children: e2
              })
            }),
            (0, s.jsx)(p.A, {
              size: 12,
              strokeWidth: 1.75,
              className: J().chipChevron,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, s.jsx)(eS.hl, {
          className: J().chipPopover,
          "aria-label": a2,
          children: r2
        })
      ]
    });
  }
  function eL({ reduced: e2, onCreate: t2, onCancel: n2 }) {
    let i2 = (0, a.useId)(), r2 = (0, a.useRef)(null), [o2, l2] = (0, a.useState)(""), [d2, c2] = (0, a.useState)(null), [h2, p2] = (0, a.useState)({});
    (0, a.useEffect)(() => {
      r2.current?.focus({ preventScroll: true });
    }, []), (0, a.useEffect)(() => {
      if (!o2.trim()) return;
      let e3 = window.setTimeout(() => c2({ sentence: o2, result: O(o2) }), 380);
      return () => window.clearTimeout(e3);
    }, [o2]);
    let m2 = o2.trim().length > 0, g2 = m2 && d2?.sentence !== o2, _2 = m2 ? d2?.result ?? null : null, f2 = h2.schedule ?? _2?.schedule ?? eM, x2 = h2.sources ?? _2?.sources ?? [], b2 = h2.destination ?? _2?.destination ?? "#eng", j2 = _2?.name ?? "New routine", v2 = T.includes(b2) ? T : [b2, ...T], w2 = !!(h2.schedule || _2), k2 = x2.length ? (0, s.jsxs)(s.Fragment, {
      children: [
        x2.map((e3) => (0, s.jsx)(ed, { id: e3, size: 12 }, e3)),
        (0, s.jsx)("span", {
          children: x2.length > 2 ? `${x2.length} sources` : x2.map((e3) => N[e3].name).join(", ")
        })
      ]
    }) : (0, s.jsx)("span", { children: "Choose sources" }), $2 = g2 ? "parsing" : !m2 || x2.length || g2 ? m2 ? "parsed" : "idle" : "no-sources";
    return (0, s.jsxs)("form", {
      className: J().composer,
      onSubmit: (e3) => {
        e3.preventDefault(), (() => {
          if (!m2) return r2.current?.focus();
          let e4 = d2?.sentence === o2 ? d2.result : O(o2), n3 = h2.sources ?? e4.sources;
          n3.length && t2({
            name: e4.name,
            instruction: o2.trim(),
            schedule: h2.schedule ?? e4.schedule,
            sources: n3,
            destination: h2.destination ?? e4.destination,
            model: "claude-sonnet-5-5"
          });
        })();
      },
      children: [
        (0, s.jsx)(ex.p, {
          ref: r2,
          id: `${i2}-sentence`,
          label: "Describe the routine in a sentence",
          value: o2,
          placeholder: "Every Friday at 16:00, summarize merged PRs to #eng",
          autoComplete: "off",
          onChange: (e3) => l2(e3.target.value),
          onKeyDown: (e3) => {
            "Escape" === e3.key && (e3.preventDefault(), n2());
          }
        }),
        (0, s.jsxs)("div", {
          className: J().parsed,
          children: [
            (0, s.jsx)("p", {
              className: J().parsedName,
              children: (0, s.jsx)(es, {
                swapKey: j2,
                reduced: e2,
                className: J().parsedNameText,
                children: j2
              })
            }),
            (0, s.jsxs)("div", {
              className: J().chips,
              children: [
                (0, s.jsx)("span", {
                  className: J().chipWord,
                  children: "Runs"
                }),
                (0, s.jsx)(eD, {
                  reduced: e2,
                  popoverLabel: "Schedule",
                  value: w2 ? R(f2) : "When",
                  empty: !w2,
                  label: (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(e$.A, {
                        size: 12,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, s.jsx)("span", { children: w2 ? R(f2) : "When" })
                    ]
                  }),
                  children: (0, s.jsx)(ew, {
                    idPrefix: `${i2}-schedule`,
                    value: f2,
                    onChange: (e3) => p2((t3) => ({ ...t3, schedule: e3 }))
                  })
                }),
                (0, s.jsx)("span", {
                  className: J().chipWord,
                  children: "reads"
                }),
                (0, s.jsx)(eD, {
                  reduced: e2,
                  popoverLabel: "Sources",
                  value: x2.map((e3) => N[e3].name).join(", ") || "Choose sources",
                  empty: !x2.length,
                  label: k2,
                  children: (0, s.jsx)("div", {
                    className: J().optionList,
                    role: "group",
                    "aria-label": "Sources",
                    children: eC.map((e3) => {
                      let t3 = x2.includes(e3);
                      return (0, s.jsxs)(
                        "button",
                        {
                          type: "button",
                          className: J().option,
                          "aria-pressed": t3,
                          onClick: () => p2((n3) => ({
                            ...n3,
                            sources: t3 ? x2.filter((t4) => t4 !== e3) : eC.filter((t4) => t4 === e3 || x2.includes(t4))
                          })),
                          children: [
                            (0, s.jsx)(ed, { id: e3 }),
                            (0, s.jsx)("span", {
                              className: J().optionText,
                              children: N[e3].name
                            }),
                            (0, s.jsx)(eh.A, {
                              size: 14,
                              strokeWidth: 2,
                              className: J().optionCheck,
                              "aria-hidden": "true"
                            })
                          ]
                        },
                        e3
                      );
                    })
                  })
                }),
                (0, s.jsx)("span", {
                  className: J().chipWord,
                  children: "posts to"
                }),
                (0, s.jsx)(eD, {
                  reduced: e2,
                  popoverLabel: "Destination",
                  value: b2,
                  label: (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(ed, { id: "slack", size: 12 }),
                      (0, s.jsx)("span", {
                        children: "Direct message" === b2 ? "Direct message" : b2
                      })
                    ]
                  }),
                  children: (0, s.jsx)("div", {
                    className: J().optionList,
                    role: "group",
                    "aria-label": "Destination",
                    children: v2.map(
                      (e3) => (0, s.jsx)(
                        eS.iN,
                        {
                          asChild: true,
                          children: (0, s.jsxs)("button", {
                            type: "button",
                            className: J().option,
                            "aria-pressed": e3 === b2,
                            onClick: () => p2((t3) => ({ ...t3, destination: e3 })),
                            children: [
                              (0, s.jsx)(ed, { id: "slack" }),
                              (0, s.jsx)("span", {
                                className: J().optionText,
                                children: e3
                              }),
                              (0, s.jsx)(eh.A, {
                                size: 14,
                                strokeWidth: 2,
                                className: J().optionCheck,
                                "aria-hidden": "true"
                              })
                            ]
                          })
                        },
                        e3
                      )
                    )
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: J().composerFoot,
          children: [
            (0, s.jsx)("p", {
              className: J().composerNote,
              "aria-live": "polite",
              children: (0, s.jsx)(es, {
                swapKey: $2,
                reduced: e2,
                className: J().composerNoteText,
                children: "parsing" === $2 ? (0, s.jsx)(y.n, { children: "Reading your sentence" }) : "no-sources" === $2 ? "Pick at least one source to read from." : "parsed" === $2 ? "Read on this device as a simulation. Click a chip to change it." : (0, s.jsxs)(s.Fragment, {
                  children: [
                    "Say when it runs, what it reads and where it posts. ",
                    (0, s.jsx)("button", {
                      type: "button",
                      className: J().linkButton,
                      onClick: () => {
                        l2(
                          "Every Friday at 16:00, summarize merged PRs to #eng"
                        ), r2.current?.focus();
                      },
                      children: "Use the example"
                    })
                  ]
                })
              })
            }),
            (0, s.jsxs)("div", {
              className: J().composerActions,
              children: [
                (0, s.jsx)(u.$, {
                  type: "button",
                  size: "sm",
                  variant: "ghost",
                  onClick: n2,
                  children: "Cancel"
                }),
                (0, s.jsx)(u.$, {
                  type: "submit",
                  size: "sm",
                  className: J().accentButton,
                  disabled: !m2 || !g2 && !x2.length,
                  children: "Add routine"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let eP = (e2, t2) => new Promise((n2, s2) => {
    let a2 = window.setTimeout(n2, e2);
    t2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(a2), s2(new DOMException("Stopped", "AbortError"));
      },
      { once: true }
    );
  }), ez = (e2) => [
    "Reading sources",
    "Following the instructions",
    "Writing the summary",
    "Direct message" === e2.destination ? "Sending a direct message" : `Posting to ${e2.destination}`
  ];
  function eR({
    routines: e2,
    onRun: t2,
    onToggle: n2,
    onSave: c2,
    now: h2,
    defaultOpenId: p2 = null,
    title: m2 = "Routines",
    className: g2
  }) {
    let _2 = (0, i.I)() ?? false, y2 = (0, a.useId)(), [f2, x2] = (0, a.useState)(
      () => e2 ?? (function(e3 = Y()) {
        let t3 = { frequency: "weekdays", time: "09:00" }, n3 = { frequency: "weekly", day: 5, time: "16:00" }, s2 = { frequency: "hourly", time: "00:00" }, a2 = { frequency: "weekdays", time: "08:30" };
        return [
          {
            id: "morning-triage",
            accent: 1,
            name: "Morning triage",
            instruction: "Read every Linear issue opened since the last run and match it to new Sentry errors. Rank them by customer impact, mark anything that blocks checkout as urgent, and post a short list with owners to #triage.",
            schedule: t3,
            sources: ["linear", "sentry"],
            destination: "#triage",
            model: "claude-sonnet-5-5",
            enabled: true,
            steps: [
              "Reading new Linear issues",
              "Matching Sentry errors",
              "Ranking by customer impact",
              "Posting to #triage"
            ],
            history: G(
              "triage",
              t3,
              [
                V("Triaged 7 issues, 1 urgent", 38),
                V("Triaged 11 issues, 2 urgent", 44),
                V("Triaged 5 issues, none urgent", 31),
                V("Triaged 8 issues, 1 urgent", 40),
                U("No new issues since the last run"),
                V("Triaged 14 issues, 3 urgent", 52),
                V("Triaged 6 issues, none urgent", 35),
                V("Triaged 9 issues, 1 urgent", 41),
                K("Linear API returned 429, nothing posted", 12),
                V("Triaged 12 issues, 2 urgent", 47),
                V("Triaged 4 issues, none urgent", 29),
                V("Triaged 10 issues, 1 urgent", 43),
                V("Triaged 7 issues, none urgent", 36),
                V("Triaged 9 issues, 2 urgent", 41)
              ],
              e3
            ),
            report: "Triage for Monday 19 October\n- ENG-2141 Checkout button stays disabled after a coupon is removed. Urgent, 38 users hit it in Sentry, assigned to Priya Nair.\n- ENG-2138 Invoice PDF renders blank for EU locales. 12 users, assigned to Tom\xE1s Ortega.\n- ENG-2135 Search is slow on workspaces with more than 5,000 docs. No errors, moved to the backlog.\n9 issues reviewed, 2 urgent, 4 routed to owners, 3 left for Thursday's review."
          },
          {
            id: "pr-digest",
            accent: 2,
            name: "Merged PR digest",
            instruction: "Every Friday, list the pull requests merged into arc-web and arc-api this week. Group them by area, call out anything that touched billing, and note reviews that waited more than two days. Post the digest to #eng.",
            schedule: n3,
            sources: ["github"],
            destination: "#eng",
            model: "claude-haiku-5-5",
            enabled: true,
            steps: [
              "Listing merged pull requests",
              "Grouping by area",
              "Writing the digest",
              "Posting to #eng"
            ],
            history: G(
              "digest",
              n3,
              [
                V("19 pull requests from 8 people", 22),
                V("26 pull requests from 10 people", 27),
                V("14 pull requests from 6 people", 19),
                V("21 pull requests from 9 people", 24),
                U("No pull requests merged, company offsite"),
                V("17 pull requests from 7 people", 21),
                V("24 pull requests from 9 people", 25),
                V("30 pull requests from 11 people", 31),
                V("18 pull requests from 8 people", 22),
                V("22 pull requests from 9 people", 24),
                V("15 pull requests from 7 people", 20),
                V("27 pull requests from 10 people", 28),
                V("20 pull requests from 8 people", 23),
                V("23 pull requests from 9 people", 26)
              ],
              e3
            ),
            report: "Merged this week in arc-web and arc-api\n- 23 pull requests from 9 people, median time to first review 3 h 40 min.\n- Billing: #1842 prorated seat changes and #1851 invoice retries with backoff. Both touch the billing service.\n- Editor: #1838 paste tables from spreadsheets and #1845 a faster undo history.\n- Infra: #1849 preview deploys moved to the new region.\nTwo pull requests waited more than two days for review: #1833 and #1836."
          },
          {
            id: "incident-watch",
            accent: 3,
            name: "Incident watch",
            instruction: "Check Sentry for error spikes above 50 events in 15 minutes. If you find one, link the most recent production deploy from GitHub, suggest a next step, and post it to #incidents. Stay quiet when nothing crosses the threshold.",
            schedule: s2,
            sources: ["sentry", "github"],
            destination: "#incidents",
            model: "gpt-6-luna",
            enabled: true,
            steps: [
              "Checking Sentry for new spikes",
              "Linking recent deploys from GitHub",
              "Deciding whether to alert",
              "Posting to #incidents"
            ],
            history: G(
              "watch",
              s2,
              [
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                V("Posted 1 spike in billing-worker", 18),
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                K("Sentry API timed out after 30 s", 31),
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                U("Nothing above the threshold"),
                V("Posted 1 spike in api-gateway", 21)
              ],
              e3
            ),
            report: "Error spike in api-gateway at 6:00\n- TypeError in billing/usage.ts: cannot read plan of undefined. 214 events in 15 minutes, 61 users.\n- Started 4 minutes after #1849 reached production.\nSuggested next step: roll back #1849 or check the new region's config. Posted to #incidents, nobody paged."
          },
          {
            id: "meeting-prep",
            accent: 4,
            name: "Meeting prep",
            instruction: "Before my first meeting, read today's Google Calendar. For each meeting, pull the related Linear issues and Notion docs and write a two line brief. Send it to me as a direct message.",
            schedule: a2,
            sources: ["google-calendar", "linear", "notion"],
            destination: "Direct message",
            model: "gemini-3-8-flash",
            enabled: false,
            steps: [
              "Reading today's calendar",
              "Pulling related issues and docs",
              "Writing the briefs",
              "Sending a direct message"
            ],
            history: G(
              "prep",
              a2,
              [
                V("Briefed 4 meetings", 26),
                V("Briefed 3 meetings", 22),
                V("Briefed 5 meetings", 29),
                V("Briefed 2 meetings", 17),
                U("No meetings on the calendar"),
                V("Briefed 4 meetings", 25),
                V("Briefed 6 meetings", 33),
                V("Briefed 3 meetings", 21),
                V("Briefed 4 meetings", 24),
                V("Briefed 5 meetings", 28),
                V("Briefed 3 meetings", 20),
                V("Briefed 4 meetings", 26),
                V("Briefed 2 meetings", 16),
                V("Briefed 4 meetings", 25)
              ],
              new Date(2026, 9, 15, 23, 0).getTime()
            ),
            report: "Your Thursday, 15 October\n- 10:00 Pricing review with Ana and Jonas. Open question in ENG-2102 on seat limits for trials. Notion: Pricing v4 draft.\n- 13:30 Design critique for editor tables. Three comments are still unresolved.\n- 16:00 One to one with Priya. She closed 7 issues this week; ask how the on-call rotation is going."
          }
        ];
      })()
    ), [b2, j2] = (0, a.useState)(e2);
    e2 !== b2 && (j2(e2), e2 && x2(e2));
    let v2 = (function(e3, t3) {
      let [n3, s2] = (0, a.useState)(() => t3 ?? ("demo" === e3 ? Y() : null));
      return (0, a.useEffect)(() => {
        if (void 0 !== t3) return;
        let n4 = "demo" === e3 ? Y() : 0, a2 = Date.now(), i2 = () => "demo" === e3 ? n4 + (Date.now() - a2) : Date.now(), r2 = window.setTimeout(() => s2(i2()), 0), o2 = window.setInterval(() => s2(i2()), 1e3);
        return () => {
          window.clearTimeout(r2), window.clearInterval(o2);
        };
      }, [e3, t3]), t3 ?? n3;
    })(
      e2 ? "live" : "demo",
      void 0 === h2 ? void 0 : h2 instanceof Date ? h2.getTime() : h2
    ), [w2, k2] = (0, a.useState)({}), [T2, S2] = (0, a.useState)({}), [C2, D2] = (0, a.useState)(p2), [L2, P2] = (0, a.useState)(false), [z2, A2] = (0, a.useState)(""), F2 = (0, a.useRef)(/* @__PURE__ */ new Map()), I2 = (0, a.useRef)(null), E2 = (0, a.useRef)(/* @__PURE__ */ new Map()), q2 = (0, a.useRef)(f2), W2 = (0, a.useRef)(w2), H2 = (0, a.useRef)(C2), O2 = (0, a.useRef)(v2);
    (0, a.useEffect)(() => {
      q2.current = f2, W2.current = w2, H2.current = C2, O2.current = v2;
    });
    let Z2 = f2.filter((e3) => e3.enabled).length, ee2 = (0, a.useCallback)((e3, t3) => {
      k2((n3) => ({ ...n3, [e3]: { ...n3[e3] ?? en, ...t3 } }));
    }, []), et2 = (0, a.useCallback)((e3, t3) => {
      x2(
        (n3) => n3.map(
          (n4) => n4.id === e3 ? { ...n4, ..."function" == typeof t3 ? t3(n4) : t3 } : n4
        )
      );
    }, []), es2 = (0, a.useCallback)(
      async (e3, n3) => {
        let s2 = q2.current.find((t3) => t3.id === e3);
        if (!s2 || E2.current.has(e3)) return;
        let a2 = W2.current[e3]?.attempts ?? 0, i2 = s2.steps?.length ? s2.steps : ez(s2), r2 = new AbortController();
        E2.current.set(e3, r2);
        let o2 = O2.current ?? Date.now(), l2 = Date.now();
        ee2(e3, {
          status: "running",
          step: 0,
          steps: i2,
          error: void 0,
          attempts: a2 + 1
        }), S2((t3) => ({ ...t3, [e3]: false }));
        let d2 = t2?.(s2), u2 = d2 && "object" == typeof d2 ? d2 : null, c3 = u2 ? null : (function(e4, t3, n4) {
          let s3 = new Date(n4), a3 = `${$[s3.getDay()]} ${s3.getDate()} ${"Oct" === M[s3.getMonth()] ? "October" : M[s3.getMonth()]}`;
          switch (e4.id) {
            case "morning-triage":
              return {
                status: "success",
                summary: "Triaged 6 issues, 1 urgent",
                report: `Triage for ${a3}
- ENG-2149 Team invites expire after 1 hour instead of 7 days. Urgent, 21 users in Sentry, assigned to Priya Nair.
- ENG-2147 Dark mode chart labels are hard to read in exports. 3 users, assigned to Lena Fischer.
- ENG-2144 Duplicate webhook deliveries for invoice.paid. No new errors since Friday, moved to the backlog.
6 issues reviewed, 1 urgent, 3 routed to owners, 2 left for Thursday's review.`
              };
            case "pr-digest":
              return {
                status: "success",
                summary: "11 pull requests from 6 people",
                report: "Merged so far this week in arc-web and arc-api\n- 11 pull requests from 6 people, median time to first review 2 h 55 min.\n- Billing: #1858 tax IDs on invoices. Touches the billing service.\n- Editor: #1855 comments on table cells and #1856 keyboard reordering for blocks.\nOne pull request is waiting more than two days for review: #1847."
              };
            case "incident-watch":
              return 0 === t3 ? {
                status: "failed",
                summary: "Sentry returned 502, nothing posted",
                failAt: 0,
                error: "Sentry returned 502 Bad Gateway while listing issues. Nothing was posted to #incidents."
              } : {
                status: "skipped",
                summary: "Nothing above the threshold",
                report: "No spikes since the last run\nThe busiest issue had 12 events in 15 minutes, below the threshold of 50. Nothing was posted."
              };
            case "meeting-prep":
              return {
                status: "success",
                summary: "Briefed 3 meetings",
                report: `Your ${a3}
- 10:30 Roadmap sync with Ana. ENG-2141 is the only open blocker for the checkout release.
- 14:00 Interview loop for the design engineer role. Notion: interview kit v2.
- 17:00 Weekly metrics. Trial to paid is up 0.8 points since last week.`
              };
            default: {
              let t4 = e4.sources.map((e5) => N[e5].name), n5 = t4.length > 1 ? `${t4.slice(0, -1).join(", ")} and ${t4.at(-1)}` : t4[0] ?? "your sources";
              return {
                status: "success",
                summary: `Posted a summary to ${e4.destination}`,
                report: `${e4.name}, ${a3}
- Read the latest activity in ${n5}.
- Followed the instructions and wrote a short summary.
Posted to ${e4.destination}.`
              };
            }
          }
        })(s2, a2, o2);
        A2(
          `${s2.name} ${"schedule" === n3 ? "started on schedule" : "started"}.${c3 ? " This run is simulated." : ""}`
        );
        let h3 = (t3, n4, a3) => {
          if (E2.current.delete(e3), et2(e3, (e4) => ({
            history: [...e4.history, t3],
            report: n4 ?? e4.report
          })), "failed" === t3.status) {
            ee2(e3, { status: "failed", error: a3 }), A2(`${s2.name} failed. ${a3 ?? t3.summary}`);
            return;
          }
          ee2(e3, {
            status: "idle",
            error: void 0,
            streamKey: (W2.current[e3]?.streamKey ?? 0) + 1
          }), n4 && H2.current === e3 && S2((t4) => ({ ...t4, [e3]: true })), A2(
            `${s2.name} ${"skipped" === t3.status ? "skipped" : "succeeded"}: ${t3.summary}.${c3 ? " Simulated, nothing was posted to Slack." : ""}`
          );
        };
        try {
          for (let t3 = 0; t3 < i2.length; t3 += 1) {
            if (ee2(e3, { step: t3 }), c3?.failAt === t3) {
              await eP(680, r2.signal), h3(
                {
                  id: `${e3}-${Date.now()}`,
                  status: "failed",
                  at: o2,
                  durationMs: Date.now() - l2,
                  summary: c3.summary
                },
                void 0,
                c3.error
              );
              return;
            }
            if (u2 && t3 === i2.length - 1) break;
            await eP(680, r2.signal);
          }
          if (u2) {
            let e4 = "function" == typeof u2?.then ? await u2 : u2;
            if (r2.signal.aborted) return;
            h3(
              e4.run,
              e4.report,
              "failed" === e4.run.status ? e4.run.summary : void 0
            );
            return;
          }
          if (!c3) return;
          h3(
            {
              id: `${e3}-${Date.now()}`,
              status: c3.status,
              at: o2,
              durationMs: Date.now() - l2,
              summary: c3.summary
            },
            c3.report
          );
        } catch (n4) {
          if (n4?.name === "AbortError") return;
          let t3 = n4 instanceof Error ? n4.message : "The run failed.";
          h3(
            {
              id: `${e3}-${Date.now()}`,
              status: "failed",
              at: o2,
              durationMs: Date.now() - l2,
              summary: t3
            },
            void 0,
            t3
          );
        }
      },
      [t2, ee2, et2]
    ), ea2 = (0, a.useCallback)(
      (e3) => {
        E2.current.get(e3)?.abort(), E2.current.delete(e3), ee2(e3, { status: "idle" });
        let t3 = q2.current.find((t4) => t4.id === e3);
        t3 && A2(`${t3.name} stopped. Nothing was posted.`);
      },
      [ee2]
    );
    (0, a.useEffect)(() => {
      let e3 = E2.current;
      return () => {
        e3.forEach((e4) => e4.abort());
      };
    }, []);
    let ei2 = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
      if (null === v2) return;
      let e3 = ei2.current;
      ei2.current = v2, null === e3 || v2 - e3 > 3e5 || v2 <= e3 || q2.current.forEach((t3) => {
        t3.enabled && B(t3.schedule, e3) <= v2 && es2(t3.id, "schedule");
      });
    }, [v2, es2]), (0, s.jsxs)("section", {
      className: [J().root, g2].filter(Boolean).join(" "),
      "aria-label": m2,
      children: [
        (0, s.jsxs)("header", {
          className: J().header,
          children: [
            (0, s.jsxs)("div", {
              className: J().headerText,
              children: [
                (0, s.jsx)("h2", { className: J().title, children: m2 }),
                (0, s.jsx)("p", {
                  className: J().subtitle,
                  children: f2.length ? `${Z2} of ${f2.length} on schedule` : "Agents that run on a schedule"
                })
              ]
            }),
            (0, s.jsxs)(u.$, {
              ref: I2,
              size: "sm",
              variant: "secondary",
              className: J().newButton,
              "aria-expanded": L2,
              "aria-controls": L2 ? y2 : void 0,
              onClick: () => P2((e3) => !e3),
              children: [
                (0, s.jsx)(l.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  className: J().plusIcon,
                  "aria-hidden": "true"
                }),
                "New routine"
              ]
            })
          ]
        }),
        (0, s.jsx)(eo, {
          open: L2,
          reduced: _2,
          id: y2,
          children: (0, s.jsx)("div", {
            className: J().composerWrap,
            children: (0, s.jsx)(eL, {
              reduced: _2,
              onCreate: (e3) => {
                let t3 = e3.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "routine", n3 = t3;
                for (let e4 = 2; f2.some((e5) => e5.id === n3); e4 += 1)
                  n3 = `${t3}-${e4}`;
                let s2 = {
                  id: n3,
                  ...e3,
                  enabled: true,
                  history: [],
                  steps: ez(e3),
                  accent: f2.length % 4 + 1
                };
                x2((e4) => [s2, ...e4]), P2(false), c2?.(s2, { created: true }), A2(
                  `Added ${s2.name}. ${R(s2.schedule)}, posts to ${s2.destination}.`
                ), window.setTimeout(
                  () => F2.current.get(s2.id)?.focus({ preventScroll: true }),
                  80
                );
              },
              onCancel: () => {
                P2(false), I2.current?.focus({ preventScroll: true });
              }
            })
          })
        }),
        f2.length ? (0, s.jsx)("ul", {
          className: J().list,
          "aria-label": m2,
          children: (0, s.jsx)(r.N, {
            initial: false,
            children: f2.map(
              (e3) => (0, s.jsx)(
                o.PY1.li,
                {
                  className: J().item,
                  "data-open": C2 === e3.id || void 0,
                  initial: _2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: _2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  transition: _2 ? { duration: 0.12 } : { height: Q, opacity: { duration: 0.2, ease: X } },
                  children: (0, s.jsx)(eT, {
                    ref: (t3) => {
                      t3 ? F2.current.set(e3.id, t3) : F2.current.delete(e3.id);
                    },
                    routine: e3,
                    live: w2[e3.id] ?? en,
                    now: v2,
                    reduced: _2,
                    stepMs: 680,
                    open: C2 === e3.id,
                    streaming: !!T2[e3.id],
                    onOpenChange: (t3) => D2(t3 ? e3.id : null),
                    onRun: () => void es2(e3.id, "manual"),
                    onStop: () => ea2(e3.id),
                    onToggle: (t3) => {
                      et2(e3.id, { enabled: t3 }), n2?.(e3.id, t3), A2(
                        t3 ? `${e3.name} is on. ${R(e3.schedule)}.` : `${e3.name} is paused.`
                      );
                    },
                    onScheduleChange: (t3) => {
                      et2(e3.id, { schedule: t3 }), c2?.({ ...e3, schedule: t3 }, { created: false }), A2(
                        `Saved. ${e3.name} runs ${R(t3).replace(/^(Every|Daily|Weekdays)/, (e4) => e4.toLowerCase())}.`
                      );
                    },
                    onStreamDone: () => S2((t3) => ({ ...t3, [e3.id]: false })),
                    onNavigate: (t3) => {
                      var n3;
                      let s2, a2, i2;
                      return n3 = e3.id, s2 = f2.findIndex((e4) => e4.id === n3), a2 = "first" === t3 ? 0 : "last" === t3 ? f2.length - 1 : Math.min(
                        f2.length - 1,
                        Math.max(0, s2 + t3)
                      ), void ((i2 = f2[a2]?.id) && F2.current.get(i2)?.focus());
                    }
                  })
                },
                e3.id
              )
            )
          })
        }) : (0, s.jsxs)("div", {
          className: J().empty,
          children: [
            (0, s.jsx)(d.A, {
              size: 20,
              strokeWidth: 1.75,
              className: J().emptyIcon,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("p", {
              className: J().emptyTitle,
              children: "No routines yet"
            }),
            (0, s.jsx)("p", {
              className: J().emptyText,
              children: "A routine runs an agent on a schedule and posts what it finds, like a morning triage or a weekly digest."
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: J().srOnly,
          role: "status",
          "aria-live": "polite",
          children: z2
        })
      ]
    });
  }
  let eA = eR;
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
A.reg(94890, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "circle-x",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }]
    ],
    aliases: ["x-circle"]
  };
  n.node;
  let s = (0, r.A)(n);
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
A.cssFor("agent-routines", [14290,80139]);
A.item("agent-routines", {entry:90883, export:"AgentRoutines", kind:"block", tier:"pro", unresolved:[]});
})();