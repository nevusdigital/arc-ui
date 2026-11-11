/* hover-card (free component, cross-ref module 4176, closure 185) */
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
A.reg(25130, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { jc: () => y, sz: () => C });
  var s = n(95155), r = n(12115), i = n(40093), a = n(79196), o = n(28245), c = n(92171), l = n(25354), d = n(18310), u = n(80642), h = n(7770), p = n(80362), m = n.n(p);
  let j = [...h.T.ease.enter], x = [...h.T.ease.standard], f = { id: null, instant: false }, v = f, g = -1 / 0, _ = /* @__PURE__ */ new Set(), w = {
    subscribe: (e2) => (_.add(e2), () => {
      _.delete(e2);
    }),
    get: () => v,
    server: () => f,
    warm: () => null !== v.id || performance.now() - g < 300,
    open(e2) {
      v.id !== e2 && (v = { id: e2, instant: w.warm() }, _.forEach((e3) => e3()));
    },
    close(e2) {
      v.id === e2 && (v = f, g = performance.now(), _.forEach((e3) => e3()));
    }
  }, b = (0, r.forwardRef)(function({ instant: e2, reduced: t2, className: n2, style: i2, children: d2, ...u2 }, p2) {
    let [f2, v2] = (0, a.xQ)(), g2 = (0, r.useRef)(null), _2 = (0, o.d)(0), w2 = (0, o.d)(0), b2 = (0, o.d)(0), y2 = (0, o.d)(1), k2 = (0, o.d)(0), [C2] = (0, r.useState)(() => e2 || t2), T = (0, r.useCallback)(
      (e3) => {
        g2.current = e3, "function" == typeof p2 ? p2(e3) : p2 && (p2.current = e3);
      },
      [p2]
    );
    return (0, r.useEffect)(() => {
      let e3 = false, n3 = (e4) => {
        let t3 = g2.current?.dataset.side, n4 = C2 ? 0 : (1 - e4) * 4;
        w2.set("left" === t3 ? n4 : "right" === t3 ? -n4 : 0), b2.set("top" === t3 ? n4 : "bottom" === t3 ? -n4 : 0), y2.set(C2 ? 1 : 0.96 + 0.04 * e4);
      }, s2 = _2.on("change", n3);
      n3(_2.get());
      let r2 = f2 ? (0, c.i)(
        _2,
        1,
        C2 ? { duration: 0.14, ease: j } : h.T.spring.smooth
      ) : (0, c.i)(_2, 0, { duration: 0.12, ease: x }), i3 = f2 ? (0, c.i)(k2, 1, {
        duration: t2 ? 0.15 : C2 ? 0.09 : 0.16,
        ease: j
      }) : (0, c.i)(k2, 0, { duration: t2 ? 0.1 : 0.12, ease: x });
      return f2 || i3.then(() => {
        e3 || v2?.();
      }), () => {
        e3 = true, s2(), r2.stop(), i3.stop();
      };
    }, [f2, C2, t2, _2, w2, b2, y2, k2, v2]), (0, s.jsx)(l.PY1.div, {
      ...u2,
      ref: T,
      className: [m().card, n2].filter(Boolean).join(" "),
      style: { ...i2, x: w2, y: b2, scale: y2, opacity: k2 },
      children: d2
    });
  });
  function y({
    children: e2,
    content: t2,
    side: n2 = "bottom",
    align: a2 = "start",
    openDelay: o2 = 500,
    closeDelay: c2 = 140,
    className: l2
  }) {
    let h2 = (0, r.useId)(), p2 = `${h2}-card`, m2 = (0, r.useSyncExternalStore)(w.subscribe, w.get, w.server), j2 = m2.id === h2, x2 = (0, d.I)() ?? false, f2 = (0, r.useRef)(null), v2 = (0, r.useRef)({ open: 0, close: 0 }), g2 = (0, r.useRef)({ trigger: false, card: false, focus: false }), _2 = (0, r.useRef)(false), k2 = (0, r.useRef)("");
    (0, r.useEffect)(() => {
      let e3 = v2.current;
      return () => {
        window.clearTimeout(e3.open), window.clearTimeout(e3.close), w.close(h2);
      };
    }, [h2]);
    let C2 = () => {
      window.clearTimeout(v2.current.open), window.clearTimeout(v2.current.close);
    }, T = () => {
      C2(), _2.current = false, w.open(h2);
    }, N = () => {
      C2(), w.close(h2);
    }, E = () => {
      window.clearTimeout(v2.current.open);
      let { trigger: e3, card: t3, focus: n3 } = g2.current;
      e3 || t3 || n3 || (window.clearTimeout(v2.current.close), v2.current.close = window.setTimeout(() => w.close(h2), c2));
    };
    return (0, s.jsxs)(i.bL, {
      open: j2,
      onOpenChange: (e3) => {
        e3 || N();
      },
      children: [
        (0, s.jsx)(i.Mz, {
          asChild: true,
          ref: f2,
          "aria-describedby": j2 ? p2 : void 0,
          "data-hover-card": j2 ? "open" : "closed",
          onPointerEnter: (e3) => {
            "touch" !== e3.pointerType && (g2.current.trigger = true, window.clearTimeout(v2.current.close), _2.current || w.get().id === h2 || (window.clearTimeout(v2.current.open), v2.current.open = window.setTimeout(
              () => w.open(h2),
              w.warm() ? 80 : o2
            )));
          },
          onPointerLeave: (e3) => {
            "touch" !== e3.pointerType && (g2.current.trigger = false, _2.current = false, E());
          },
          onPointerDown: (e3) => {
            k2.current = e3.pointerType;
          },
          onClick: () => {
            let e3 = w.get().id === h2;
            "touch" === k2.current ? e3 ? N() : T() : e3 || T(), k2.current = "";
          },
          onFocus: (e3) => {
            e3.currentTarget.matches(":focus-visible") && (g2.current.focus = true, T());
          },
          onBlur: () => {
            g2.current.focus = false, _2.current = false, E();
          },
          children: e2
        }),
        (0, s.jsx)(u.N, {
          children: j2 && (0, s.jsx)(
            i.ZL,
            {
              forceMount: true,
              children: (0, s.jsx)(i.UC, {
                forceMount: true,
                asChild: true,
                id: p2,
                role: "tooltip",
                side: n2,
                align: a2,
                sideOffset: 8,
                collisionPadding: 12,
                onOpenAutoFocus: (e3) => e3.preventDefault(),
                onCloseAutoFocus: (e3) => e3.preventDefault(),
                onEscapeKeyDown: () => {
                  _2.current = true;
                },
                onInteractOutside: (e3) => {
                  f2.current?.contains(e3.target) && e3.preventDefault();
                },
                onPointerEnter: (e3) => {
                  "touch" !== e3.pointerType && (g2.current.card = true, window.clearTimeout(v2.current.close));
                },
                onPointerLeave: (e3) => {
                  "touch" !== e3.pointerType && (g2.current.card = false, E());
                },
                children: (0, s.jsx)(b, {
                  instant: m2.instant,
                  reduced: x2,
                  className: l2,
                  children: t2
                })
              })
            },
            "card"
          )
        })
      ]
    });
  }
  function k({ src: e2 }) {
    let t2 = (0, r.useRef)(null);
    return (0, r.useLayoutEffect)(() => {
      let e3 = t2.current;
      e3 && !e3.complete && (e3.dataset.loading = "");
    }, [e2]), (0, s.jsx)("img", {
      ref: t2,
      src: e2,
      alt: "",
      width: 48,
      height: 48,
      decoding: "async",
      onLoad: (e3) => {
        delete e3.currentTarget.dataset.loading;
      }
    });
  }
  function C({ name: e2, role: t2, avatar: n2, bio: r2, stats: i2 = [], meta: a2 }) {
    let o2 = (0, d.I)() ?? false, c2 = e2.trim().split(/\s+/).slice(0, 2).map((e3) => e3[0]?.toUpperCase()).join(""), u2 = (e3) => o2 ? {} : {
      initial: { opacity: 0, y: 4 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: h.T.duration.standard,
        ease: j,
        delay: 0.04 + e3 * h.T.stagger.item
      }
    };
    return (0, s.jsxs)("div", {
      className: m().profile,
      children: [
        (0, s.jsxs)(l.PY1.div, {
          className: m().head,
          ...u2(0),
          children: [
            (0, s.jsx)("span", {
              className: m().avatar,
              "aria-hidden": "true",
              children: "string" == typeof n2 ? (0, s.jsx)(k, { src: n2 }) : n2 ?? (0, s.jsx)("span", {
                className: m().initials,
                children: c2
              })
            }),
            (0, s.jsxs)("span", {
              className: m().identity,
              children: [
                (0, s.jsx)("span", { className: m().name, children: e2 }),
                t2 && (0, s.jsx)("span", { className: m().role, children: t2 })
              ]
            })
          ]
        }),
        r2 && (0, s.jsx)(l.PY1.p, { className: m().bio, ...u2(1), children: r2 }),
        i2.length > 0 && (0, s.jsx)(l.PY1.dl, {
          className: m().stats,
          ...u2(2),
          children: i2.map(
            (e3) => (0, s.jsxs)(
              "div",
              {
                className: m().stat,
                children: [
                  (0, s.jsx)("dt", { children: e3.label }),
                  (0, s.jsx)("dd", { children: e3.value })
                ]
              },
              e3.label
            )
          )
        }),
        a2 && (0, s.jsx)(l.PY1.div, { className: m().meta, ...u2(3), children: a2 })
      ]
    });
  }
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
A.regCss(80362, ".card{z-index:60;box-sizing:border-box;width:18.5rem;max-width:min(18.5rem,var(--radix-popover-content-available-width,calc(100vw - 24px)));padding:var(--space-4);border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);font-family:var(--font-body);letter-spacing:var(--tracking-body);transform-origin:var(--radix-popover-content-transform-origin);outline:none}\n.profile{display:grid;gap:var(--space-3)}\n.head{display:flex;min-width:0;align-items:center;gap:var(--space-3)}\n.avatar{position:relative;display:grid;width:48px;height:48px;flex:none;place-items:center;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--foreground);font-size:var(--text-sm);font-weight:500}\n.avatar img{display:block;width:100%;height:100%;object-fit:cover;transition:opacity var(--duration-standard) var(--ease-enter),filter var(--duration-standard) var(--ease-enter)}\n.avatar img[data-loading]{opacity:0;filter:blur(4px);transition:none}\n@media (prefers-reduced-motion:reduce){.avatar img{transition:none}\n.avatar img[data-loading]{filter:none}\n.identity{display:grid;min-width:0}\n.name,.role{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.name{color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.bio,.role{color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.bio{margin:0}\n.stats{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-6);margin:0;padding-top:var(--space-3);border-top:1px solid var(--border-subtle)}\n.stat{display:flex;flex-direction:column-reverse}\n.stat dt{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.stat dd{margin:0;color:var(--foreground);font-size:var(--text-base);font-variant-numeric:tabular-nums;font-weight:500;line-height:var(--leading-body)}\n.meta{display:flex;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.meta svg{flex:none}", {"card":"card","profile":"profile","head":"head","avatar":"avatar","identity":"identity","name":"name","role":"role","bio":"bio","stats":"stats","stat":"stat","meta":"meta"});
A.cssFor("hover-card", [80362]);
A.item("hover-card", {entry:4176, export:"HoverCardDemo", kind:"component", tier:"free", unresolved:[], xref:true});
})();