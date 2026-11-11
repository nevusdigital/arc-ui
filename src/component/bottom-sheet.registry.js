/* bottom-sheet (free component, cross-ref module 90934, closure 194) */
(function(){var A=globalThis.__ARC__;
A.regCss(34050, ".overlay{position:fixed;inset:0;z-index:50;background:oklch(16% 0 0/.34)}\n:root[data-theme=dark] .overlay{background:oklch(0 0 0/.52)}\n.overlay[data-state=closed],.sheet[data-state=closed]{pointer-events:none!important}\n.sheet{position:fixed;z-index:51;right:0;bottom:calc(var(--sheet-extension) * -1);left:0;display:flex;flex-direction:column;width:min(100%,36rem);height:calc(var(--sheet-max) * 100vh + var(--sheet-extension));height:calc(var(--sheet-max) * 100dvh + var(--sheet-extension));margin-inline:auto;overflow:hidden;padding-bottom:calc(var(--sheet-extension) + env(safe-area-inset-bottom, 0px));border:1px solid var(--border);border-bottom:0;border-radius:var(--radius-surface) var(--radius-surface) 0 0;background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);font-family:var(--font-body);letter-spacing:var(--tracking-body);outline:none;will-change:transform}\n.sheet[data-dragging] .header{cursor:grabbing}\n.sheet[data-scrolled] .header:after{opacity:1}\n.sheet[data-dragging] .grabberBar{background:var(--text-muted)}\n.sheet:not([data-expanded]) .body{overflow:hidden;touch-action:none}\n.header{position:relative;flex:none;padding:var(--space-2) var(--space-5) var(--space-4);cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}\n.header:after{position:absolute;right:0;bottom:0;left:0;height:1px;background:var(--border);content:\"\";opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n@media (max-width:40rem){.body,.header{padding-inline:var(--space-4)}\n@media (prefers-reduced-motion:reduce){.close,.grabberBar,.header:after{transition:none}\n.grabber{display:flex;width:3.5rem;height:1.25rem;align-items:center;justify-content:center;margin:0 auto var(--space-1);padding:0;border:0;border-radius:var(--radius-pill);background:transparent;cursor:inherit;-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.grabber:hover .grabberBar{background:var(--text-muted)}\n.grabberBar{width:2.25rem;height:5px;border-radius:var(--radius-pill);background:var(--border-strong);transition:background-color var(--duration-fast) var(--ease-standard)}\n.headRow{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4)}\n.headText{min-width:0}\n.title{margin:0;font-family:var(--font-body);font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.description{margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.close{display:grid;flex:none;width:2rem;height:2rem;place-items:center;margin-top:-2px;padding:0;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.close:hover{color:var(--foreground);border-color:var(--border-strong)}\n.close:active{color:var(--foreground)}\n.body{flex:1 1 auto;min-height:0;overflow-y:auto;padding:var(--space-1) var(--space-5) var(--space-6);overscroll-behavior:contain;scrollbar-width:thin;touch-action:pan-y;font-size:var(--text-sm);line-height:var(--leading-body)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"overlay":"overlay","sheet":"sheet","header":"header","grabberBar":"grabberBar","body":"body","close":"close","grabber":"grabber","headRow":"headRow","headText":"headText","title":"title","description":"description","srOnly":"srOnly"});
A.reg(43146, function(__module,__exports,__require){
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
});
A.reg(67026, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { Xn: () => x });
  var n = r(95155), o = r(43146), s = r(12115), a = r(80642), i = r(79196), l = r(18310), u = r(28245), c = r(55809), d = r(92171), h = r(25354), m = r(9005), p = r(7770), f = r(34050), v = r.n(f);
  let b = p.T.spring.smooth, g = { ...p.T.spring.smooth, visualDuration: 0.3 }, y = { duration: p.T.duration.fast, ease: [...p.T.ease.standard] }, _ = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2));
  function x({
    trigger: e2,
    open: t2,
    defaultOpen: r2 = false,
    onOpenChange: i2,
    ...l2
  }) {
    let [u2, c2] = (0, s.useState)(r2), d2 = t2 ?? u2, h2 = (0, s.useCallback)(
      (e3) => {
        void 0 === t2 && c2(e3), i2?.(e3);
      },
      [t2, i2]
    ), m2 = (0, s.useCallback)(() => h2(false), [h2]);
    return (0, n.jsxs)(o.bL, {
      open: d2,
      onOpenChange: h2,
      children: [
        e2 ? (0, n.jsx)(o.l9, { asChild: true, children: e2 }) : null,
        (0, n.jsx)(a.N, {
          children: d2 && (0, n.jsx)(
            o.ZL,
            {
              forceMount: true,
              children: (0, n.jsx)(w, { ...l2, onDismiss: m2 })
            },
            "sheet"
          )
        })
      ]
    });
  }
  function w({
    title: e2,
    description: t2,
    detents: r2 = [0.45, 0.92],
    initialDetent: a2 = 0,
    onDetentChange: p2,
    closeLabel: f2 = "Close",
    className: x2,
    children: j,
    onDismiss: C
  }) {
    let [E, k] = (0, i.xQ)(), M = (0, l.I)() ?? false, L = r2.join(","), T = (0, s.useMemo)(
      () => L.split(",").map(Number).filter((e3) => e3 > 0).sort((e3, t3) => e3 - t3),
      [L]
    ), N = T.length - 1, [S, P] = (0, s.useState)(() => _(Math.round(a2), 0, N)), [R, Y] = (0, s.useState)(""), D = (0, s.useRef)(null), A = (0, s.useRef)(null), H = (0, u.d)(4e3), I = (0, u.d)(0), O = (0, u.d)(1), B = (0, s.useRef)(S), K = (0, s.useRef)(S), z = (0, s.useRef)(null), U = (0, s.useRef)(void 0), F = (0, s.useRef)(false), W = (0, s.useRef)(false), X = (0, s.useRef)({ present: E, at: 0 });
    (0, s.useLayoutEffect)(() => {
      X.current = { present: E, at: performance.now() };
    }, [E]);
    let q = (0, s.useCallback)(
      (e3) => {
        let t3 = I.get();
        return "closed" === e3 ? t3 + 40 : t3 * (1 - T[e3] / T[N]);
      },
      [I, T, N]
    ), J = (0, c.G)([H, I, O], ([e3 = 0, t3 = 0, r3 = 0]) => {
      if (!t3) return 0;
      let n2 = t3 * (1 - T[0] / T[N]);
      return _(
        e3 <= n2 ? 1 - 0.21999999999999997 * (n2 ? e3 / n2 : 0) : 0.78 * (1 - (e3 - n2) / (t3 + 40 - n2)),
        0,
        1
      ) * r3;
    }), V = (0, s.useCallback)(
      (e3, t3, r3) => {
        K.current = e3, U.current = r3;
        let n2 = q(e3), o2 = () => {
          let e4 = U.current;
          U.current = void 0, e4?.();
        };
        if (M) {
          H.jump(n2), o2();
          return;
        }
        (0, d.i)(H, n2, {
          ..."closed" === e3 ? g : b,
          ...void 0 === t3 ? {} : { velocity: t3 },
          onComplete: o2
        });
      },
      [q, M, H]
    ), Z = (0, s.useCallback)(
      (e3, t3) => {
        e3 !== B.current && (B.current = e3, P(e3), p2?.(e3), Y(
          e3 === N ? "Sheet expanded" : 0 === e3 ? "Sheet collapsed" : `Sheet at ${Math.round(100 * T[e3])} percent height`
        ));
        let r3 = A.current;
        e3 !== N && r3 && r3.scrollTop > 0 && r3.scrollTo({ top: 0, behavior: M ? "auto" : "smooth" }), V(e3, t3);
      },
      [V, p2, M, T, N]
    );
    (0, s.useLayoutEffect)(() => {
      let e3 = D.current;
      if (e3) {
        if (!W.current && (W.current = true, I.set(e3.offsetHeight - 160), H.jump(q("closed")), M && (H.jump(q(B.current)), O.jump(0))), E) {
          if (M) {
            H.jump(q(B.current)), (0, d.i)(O, 1, y);
            return;
          }
          O.jump(1), V(B.current);
          return;
        }
        if (M) return void (0, d.i)(O, 0, { ...y, onComplete: k });
        "closed" === K.current && H.isAnimating() ? U.current = k : V("closed", void 0, k);
      }
    }, [V, I, E, q, O, M, k, H]), (0, s.useEffect)(() => {
      let e3 = D.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.offsetHeight - 160;
        if (t4 === I.get()) return;
        I.set(t4);
        let r3 = K.current;
        z.current || "closed" === r3 || (H.isAnimating() ? V(r3) : H.jump(q(r3)));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [V, I, q, H]);
    let G = (0, s.useCallback)(
      (e3, t3) => {
        H.stop();
        let r3 = H.get();
        z.current = {
          startY: e3,
          origin: r3 < 0 ? -((1 / (1 - Math.min(-r3, 119) / 120) - 1) * 120 / 0.55) : r3,
          from: B.current,
          moved: false,
          samples: [{ t: t3, y: e3 }]
        };
      },
      [H]
    ), Q = (0, s.useCallback)(
      (e3, t3) => {
        let r3 = z.current;
        if (!r3) return;
        let n2 = e3 - r3.startY;
        if (!r3.moved) {
          if (3 > Math.abs(n2)) return;
          r3.moved = true, D.current?.setAttribute("data-dragging", "");
        }
        let o2 = r3.origin + n2;
        H.set(o2 < 0 ? -((1 - 1 / (-(0.55 * o2) / 120 + 1)) * 120) : o2), r3.samples.push({ t: t3, y: e3 }), r3.samples.length > 12 && r3.samples.shift();
      },
      [H]
    ), $ = (0, s.useCallback)(
      (e3) => {
        var t3;
        let r3, n2, o2, s2 = z.current;
        if (z.current = null, D.current?.removeAttribute("data-dragging"), !s2)
          return;
        if (!s2.moved) {
          let e4 = K.current;
          "closed" !== e4 && V(e4);
          return;
        }
        F.current = true;
        let a3 = H.get(), i2 = a3 < 0 ? 0 : (t3 = s2.samples, n2 = (r3 = t3.filter((t4) => e3 - t4.t <= 80))[0], o2 = r3[r3.length - 1], n2 && o2 && o2 !== n2 && !(e3 - o2.t > 60) ? (o2.y - n2.y) / ((o2.t - n2.t) / 1e3) : 0), l2 = a3 + 0.2 * i2, u2 = [...T.map((e4, t4) => t4), "closed"].reduce(
          (e4, t4) => Math.abs(q(t4) - l2) < Math.abs(q(e4) - l2) ? t4 : e4
        );
        if (Math.abs(i2) > 320 && u2 === s2.from && (u2 = i2 < 0 ? Math.min(s2.from + 1, N) : 0 === s2.from ? "closed" : s2.from - 1), "closed" === u2) {
          M || V("closed", i2), C();
          return;
        }
        Z(u2, i2);
      },
      [V, q, C, M, Z, T, N, H]
    );
    function ee(e3) {
      e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.releasePointerCapture(e3.pointerId), $(e3.timeStamp);
    }
    (0, s.useEffect)(() => {
      let e3 = A.current;
      if (!e3) return;
      let t3 = null, r3 = (e4) => {
        let r4 = e4.touches[0];
        t3 = 1 === e4.touches.length && r4 ? { x: r4.clientX, y: r4.clientY, mode: "pending" } : null;
      }, n2 = (r4) => {
        let n3 = r4.touches[0];
        if (!t3 || !n3 || 1 !== r4.touches.length) return;
        let o3 = n3.clientX - t3.x, s2 = n3.clientY - t3.y;
        if ("pending" === t3.mode) {
          if (B.current === N) {
            let r5 = e3.scrollHeight > e3.clientHeight + 1;
            t3.mode = Math.abs(s2) >= Math.abs(o3) && (!r5 || e3.scrollTop <= 0 && s2 > 0) ? "sheet" : "native";
          } else {
            if (4 > Math.hypot(o3, s2)) return;
            t3.mode = Math.abs(s2) >= Math.abs(o3) ? "sheet" : "native";
          }
          "sheet" === t3.mode && G(n3.clientY, r4.timeStamp);
        }
        "sheet" === t3.mode && (r4.cancelable && r4.preventDefault(), Q(n3.clientY, r4.timeStamp));
      }, o2 = (e4) => {
        t3?.mode === "sheet" && $(e4.timeStamp), t3 = null;
      };
      return e3.addEventListener("touchstart", r3, { passive: true }), e3.addEventListener("touchmove", n2, { passive: false }), e3.addEventListener("touchend", o2), e3.addEventListener("touchcancel", o2), () => {
        e3.removeEventListener("touchstart", r3), e3.removeEventListener("touchmove", n2), e3.removeEventListener("touchend", o2), e3.removeEventListener("touchcancel", o2);
      };
    }, [G, $, Q, N]), (0, s.useEffect)(() => {
      let e3 = A.current, t3 = D.current;
      if (!e3 || !t3) return;
      let r3 = () => t3.toggleAttribute("data-scrolled", e3.scrollTop > 1);
      return e3.addEventListener("scroll", r3, { passive: true }), () => e3.removeEventListener("scroll", r3);
    }, []);
    let et = S === N, er = {
      y: H,
      opacity: O,
      "--sheet-max": T[N],
      "--sheet-extension": "160px"
    };
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(o.hJ, {
          asChild: true,
          forceMount: true,
          children: (0, n.jsx)(h.PY1.div, {
            className: v().overlay,
            style: { opacity: J }
          })
        }),
        (0, n.jsx)(o.UC, {
          asChild: true,
          forceMount: true,
          ...t2 ? {} : { "aria-describedby": void 0 },
          onOpenAutoFocus: (e3) => {
            e3.preventDefault(), D.current?.focus({ preventScroll: true });
          },
          onPointerDownOutside: (e3) => {
            let { present: t3, at: r3 } = X.current;
            (!t3 || e3.detail.originalEvent.timeStamp < r3) && e3.preventDefault();
          },
          children: (0, n.jsxs)(h.PY1.div, {
            ref: D,
            className: [v().sheet, x2].filter(Boolean).join(" "),
            style: er,
            "data-expanded": et ? "" : void 0,
            onKeyDown: function(e3) {
              let t3 = A.current;
              if (!t3 || e3.target !== e3.currentTarget && e3.target !== t3)
                return;
              let r3 = "ArrowDown" === e3.key || "PageDown" === e3.key || " " === e3.key && !e3.shiftKey, n2 = "ArrowUp" === e3.key || "PageUp" === e3.key || " " === e3.key && e3.shiftKey;
              if (!r3 && !n2) return;
              if (e3.preventDefault(), r3 && B.current !== N) return void Z(N);
              let o2 = e3.key.startsWith("Arrow") ? 48 : 0.85 * t3.clientHeight;
              t3.scrollBy({ top: r3 ? o2 : -o2, behavior: M ? "auto" : "smooth" });
            },
            children: [
              (0, n.jsxs)("div", {
                className: v().header,
                onPointerDown: function(e3) {
                  let t3 = e3.target instanceof Element ? e3.target : null;
                  if (0 !== e3.button || !e3.isPrimary || t3?.closest(
                    "button, a, input, select, textarea, [role='button']"
                  ) && !t3.closest("[data-grabber]"))
                    return;
                  G(e3.clientY, e3.timeStamp);
                  let r3 = e3.currentTarget, n2 = e3.pointerId, o2 = (e4) => e4.pointerId === n2 && !(e4.target instanceof Node && r3.contains(e4.target)), s2 = (e4) => {
                    if (o2(e4) && z.current && (Q(e4.clientY, e4.timeStamp), z.current?.moved && !r3.hasPointerCapture(n2)))
                      try {
                        r3.setPointerCapture(n2);
                      } catch {
                      }
                  }, a3 = (e4) => {
                    e4.pointerId === n2 && (window.removeEventListener("pointermove", s2), window.removeEventListener("pointerup", a3), window.removeEventListener("pointercancel", a3), o2(e4) && $(e4.timeStamp));
                  };
                  window.addEventListener("pointermove", s2), window.addEventListener("pointerup", a3), window.addEventListener("pointercancel", a3);
                },
                onPointerMove: function(e3) {
                  if (z.current) {
                    if ("mouse" === e3.pointerType && 0 === e3.buttons)
                      return void $(e3.timeStamp);
                    Q(e3.clientY, e3.timeStamp), z.current.moved && !e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.setPointerCapture(e3.pointerId);
                  }
                },
                onPointerUp: ee,
                onPointerCancel: ee,
                children: [
                  (0, n.jsx)("button", {
                    type: "button",
                    className: v().grabber,
                    "data-grabber": "",
                    "aria-label": et ? "Collapse sheet" : "Expand sheet",
                    "aria-expanded": et,
                    onClick: function() {
                      if (F.current) {
                        F.current = false;
                        return;
                      }
                      Z(B.current === N ? 0 : N);
                    },
                    onKeyDown: function(e3) {
                      let t3 = B.current, r3 = "ArrowUp" === e3.key ? Math.min(t3 + 1, N) : "ArrowDown" === e3.key ? Math.max(t3 - 1, 0) : "Home" === e3.key ? N : "End" === e3.key ? 0 : null;
                      null !== r3 && (e3.preventDefault(), Z(r3));
                    },
                    children: (0, n.jsx)("span", {
                      className: v().grabberBar,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, n.jsxs)("div", {
                    className: v().headRow,
                    children: [
                      (0, n.jsxs)("div", {
                        className: v().headText,
                        children: [
                          (0, n.jsx)(o.hE, {
                            className: v().title,
                            children: e2
                          }),
                          t2 ? (0, n.jsx)(o.VY, {
                            className: v().description,
                            children: t2
                          }) : null
                        ]
                      }),
                      (0, n.jsx)(o.bm, {
                        className: v().close,
                        "aria-label": f2,
                        children: (0, n.jsx)(m.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)("div", {
                ref: A,
                className: v().body,
                onWheel: function(e3) {
                  B.current !== N && e3.deltaY > 4 && !z.current && Z(N);
                },
                onFocus: function(e3) {
                  B.current !== N && e3.target instanceof Element && e3.target.getBoundingClientRect().bottom > window.innerHeight - 8 && Z(N);
                },
                children: j
              }),
              (0, n.jsx)("span", {
                className: v().srOnly,
                role: "status",
                "aria-live": "polite",
                children: R
              })
            ]
          })
        })
      ]
    });
  }
  o.bm;
}

__m(__module,__exports,__require);
});
A.cssFor("bottom-sheet", [34050]);
A.item("bottom-sheet", {entry:90934, export:"BottomSheetDemo", kind:"component", tier:"free", unresolved:[], xref:true});
})();