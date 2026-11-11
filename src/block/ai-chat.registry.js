/* ai-chat (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(15561, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "paperclip",
    size: 24,
    node: [
      [
        "path",
        {
          d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
          key: "1miecu"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(18986, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "pencil",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
    ]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(19805, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "arrow-down",
    size: 24,
    node: [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
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
A.reg(28342, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var i = t(51811);
  let r = {
    name: "timer",
    size: 24,
    node: [
      ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
      ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
      ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
    ]
  };
  r.node;
  let n = (0, i.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(34306, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "database",
    size: 24,
    node: [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
      ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(36338, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = n(51811);
  let o = {
    name: "activity",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
          key: "169zse"
        }
      ]
    ]
  };
  o.node;
  let a = (0, r.A)(o);
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
A.reg(45624, function(__module,__exports,__require){
"use strict";
const __m = (e, t, n) => {
  "use strict";
  n.r(t), n.d(t, {
    AiChat: () => e2,
    createSampleResponder: () => z,
    default: () => e5,
    sampleHistory: () => S,
    sampleModels: () => v,
    sampleSuggestions: () => R
  });
  var r = n(95155), a = n(12115), s = n(61792), i = n(80642), o = n(25354), l = n(57793), c = n(34306), d = n(28342), u = n(36338), h = n(65377), m = n(12363), p = n(69618), g = n(64577), f = n(19805), _ = n(36690);
  function x({ title: e3 = "Claude", ...t2 }) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e3,
      ...t2,
      children: (0, r.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let v = [
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      note: "Anthropic",
      mark: x,
      color: "#D97757"
    },
    {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      note: "Anthropic",
      mark: x,
      color: "#D97757"
    },
    {
      id: "gpt-6-1-sol",
      name: "GPT-6.1 Sol",
      note: "OpenAI",
      mark: function({ title: e3 = "OpenAI", ...t2 }) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e3,
          ...t2,
          children: (0, r.jsx)("path", {
            d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          })
        });
      }
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      note: "Google",
      mark: function({ title: e3 = "Gemini", ...t2 }) {
        let n2 = (0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e3,
          ...t2,
          children: [
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: "#3186FF"
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-0-${n2})`
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-1-${n2})`
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#lobe-icons-gemini-2-${n2})`
            }),
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-0-${n2}`,
                  x1: "7",
                  x2: "11",
                  y1: "15.5",
                  y2: "12",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#08B962" }),
                    (0, r.jsx)("stop", {
                      offset: "1",
                      stopColor: "#08B962",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-1-${n2}`,
                  x1: "8",
                  x2: "11.5",
                  y1: "5.5",
                  y2: "11",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#F94543" }),
                    (0, r.jsx)("stop", {
                      offset: "1",
                      stopColor: "#F94543",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `lobe-icons-gemini-2-${n2}`,
                  x1: "3.5",
                  x2: "17.5",
                  y1: "13.5",
                  y2: "12",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#FABC12" }),
                    (0, r.jsx)("stop", {
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
    },
    {
      id: "mistral-large-4",
      name: "Mistral Large 4",
      note: "Mistral AI",
      mark: function({ title: e3 = "Mistral AI", ...t2 }) {
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e3,
          ...t2,
          children: [
            (0, r.jsx)("path", {
              d: "M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z",
              fill: "gold"
            }),
            (0, r.jsx)("path", {
              d: "M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z",
              fill: "#FFAF00"
            }),
            (0, r.jsx)("path", {
              d: "M3.428 10.258h17.144v3.428H3.428v-3.428z",
              fill: "#FF8205"
            }),
            (0, r.jsx)("path", {
              d: "M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z",
              fill: "#FA500F"
            }),
            (0, r.jsx)("path", {
              d: "M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z",
              fill: "#E10500"
            })
          ]
        });
      }
    }
  ], y = {
    mark: function({ title: e3 = "PostgreSQL", ...t2 }) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e3,
        ...t2,
        children: (0, r.jsx)("path", {
          d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
        })
      });
    },
    color: "#4169E1"
  }, b = {
    ...y,
    title: "PostgreSQL 17: ALTER TABLE",
    url: "https://www.postgresql.org/docs/17/sql-altertable.html",
    snippet: "Validating a constraint takes only a SHARE UPDATE EXCLUSIVE lock, and SET NOT NULL skips the table scan when a valid CHECK constraint already proves no NULL can exist."
  }, w = {
    ...y,
    title: "PostgreSQL 17: Explicit locking",
    url: "https://www.postgresql.org/docs/17/explicit-locking.html",
    snippet: "SHARE UPDATE EXCLUSIVE protects a table against concurrent schema changes and VACUUM runs. It does not conflict with the ROW EXCLUSIVE lock that writes take."
  }, j = {
    ...y,
    title: "PostgreSQL 17: Client connection defaults",
    url: "https://www.postgresql.org/docs/17/runtime-config-client.html",
    snippet: "lock_timeout aborts any statement that waits longer than the given time while trying to acquire a lock."
  }, k = {
    ...y,
    title: "PostgreSQL 17: CREATE INDEX",
    url: "https://www.postgresql.org/docs/17/sql-createindex.html",
    snippet: "With CONCURRENTLY, PostgreSQL builds the index without taking any locks that prevent concurrent inserts, updates or deletes on the table."
  }, N = {
    id: "estimate",
    match: /how long|estimate|backfill take|per batch|duration/i,
    title: "Backfill estimate",
    reasoning: "Use the real row count rather than the planner estimate, then multiply the batch count by a realistic time per batch, including a pause for the replicas.",
    seconds: 2,
    tool: {
      id: "count",
      name: "Queried orders",
      activeName: "Querying orders",
      status: "done",
      summary: "40,213,880 rows",
      icon: "database",
      ...y,
      input: ["SELECT count(*) FROM orders;"],
      output: "40,213,880"
    },
    text: `About 23 minutes. The table has 40,213,880 rows, so 5,000 rows per batch makes 8,043 batches.

- **Per batch:** about 120 ms for the update and a 50 ms pause so replicas keep up
- **Total:** 8,043 \xD7 170 ms \u2248 1,367 s, or just under 23 minutes
- **Lag:** if replication lag passes 5 s, double the pause instead of shrinking the batch

Walk the primary key in ranges, so every batch uses the index and never rescans finished rows:

\`\`\`sql
UPDATE orders o
SET region = c.region
FROM customers c
WHERE c.id = o.customer_id
  AND o.id >= $1 AND o.id < $1 + 5000
  AND o.region IS NULL;
\`\`\``,
    retryLead: "Just under 23 minutes, at about 170 ms for each of the 8,043 batches."
  }, C = {
    id: "lag",
    match: /\blag\b|replica/i,
    title: "Replication lag",
    reasoning: "Read the replay delay on the replica itself, then compare it with the threshold the backfill should pause at.",
    seconds: 2,
    tool: {
      id: "lag",
      name: "Queried replica-eu-2",
      activeName: "Querying replica-eu-2",
      status: "done",
      summary: "0.4 s behind",
      icon: "database",
      ...y,
      input: ["SELECT now() - pg_last_xact_replay_timestamp() AS lag;"],
      output: "00:00:00.412"
    },
    failFirst: "Could not reach replica-eu-2. The connection timed out after 10 seconds.",
    text: `replica-eu-2 is **0.4 seconds** behind the primary, well inside a safe range for a batched backfill.

- **Replay lag:** 0.4 s
- **Received but not replayed:** 2.1 MB of WAL
- **Rule of thumb:** pause the backfill when lag passes 5 s, and resume once it drops under 1 s`
  }, T = {
    id: "verify",
    match: /$^/,
    title: "",
    reasoning: "This preview only knows the orders migration, so answer with the step that usually comes next: checking the backfill before release.",
    seconds: 1,
    text: "In this preview I only know the `orders` migration, so here is the step that usually comes next: check the backfill before you ship.\n\n```sql\nSELECT count(*) FROM orders WHERE region IS NULL;\n\nSELECT conname, convalidated FROM pg_constraint\nWHERE conrelid = 'orders'::regclass;\n```\n\nYou want zero rows without a region, and `convalidated` set to true for the check."
  }, A = [
    C,
    {
      id: "rollback",
      match: /roll ?back|undo|revert/i,
      title: "Rollback plan",
      reasoning: "Each step is reversible on its own, and the column can stay until the app stops reading it.",
      seconds: 2,
      text: "Each step can be undone on its own, and none of them loses data.\n\n1. **Before `SET NOT NULL`:** drop the check constraint. Writes never noticed it.\n2. **After `SET NOT NULL`:** run `ALTER COLUMN region DROP NOT NULL`, which is instant.\n3. **The column itself:** leave it in place until the app stops reading it, then drop it in a later release.\n\nKeep `region IS NULL` in the backfill's `WHERE` clause, so a rerun after a rollback only touches the rows it missed.",
      retryLead: "Every step is reversible, and you can undo them in reverse order without losing data."
    },
    {
      id: "index",
      match: /index/i,
      title: "Index on region",
      reasoning: "A plain CREATE INDEX blocks writes for the whole build. CONCURRENTLY avoids that at the cost of a slower build.",
      seconds: 3,
      tool: {
        id: "search-index",
        name: "Searched the web",
        activeName: "Searching the web",
        status: "done",
        summary: "1 source",
        icon: "search",
        input: ["postgres 17 create index concurrently"]
      },
      sources: [k],
      text: "Build it with `CREATE INDEX CONCURRENTLY`, so writes keep flowing while it builds. [1]\n\n```sql\nCREATE INDEX CONCURRENTLY orders_region_idx ON orders (region);\n```\n\nIt takes longer than a normal build and cannot run inside a transaction block. If it fails, it leaves an invalid index behind: drop it and run the build again."
    },
    N,
    {
      id: "add-column",
      match: /not null|non-null|nonnull|add (a |the )?(\w+ )?column|without (blocking|downtime|locking)/i,
      title: "Add region to orders",
      reasoning: "A NOT NULL column with no default fails on existing rows, and setting it on a filled column scans 40M rows under an exclusive lock. Safer path: nullable column, batched backfill, a NOT VALID check, validation under a weaker lock, then SET NOT NULL, which can skip the scan. Confirm the lock levels in the docs.",
      seconds: 4,
      tool: {
        id: "search",
        name: "Searched the web",
        activeName: "Searching the web",
        status: "done",
        summary: "4 sources",
        icon: "search",
        input: [
          "postgres 17 set not null without table scan",
          "validate constraint lock level"
        ]
      },
      sources: [
        b,
        w,
        {
          mark: function({ title: e3 = "GitHub", ...t2 }) {
            return (0, r.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              role: "img",
              "aria-label": e3,
              ...t2,
              children: (0, r.jsx)("path", {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              })
            });
          },
          title: "strong_migrations: Setting NOT NULL on an existing column",
          url: "https://github.com/ankane/strong_migrations",
          snippet: "Add a check constraint without validating existing rows, validate it in a separate step, then set NOT NULL."
        },
        j
      ],
      text: "Split it into four short steps, so no single statement holds a heavy lock for long.\n\n1. **Add the column as nullable.** With no default, this only touches the catalog and returns at once.\n2. **Backfill in batches** of about 5,000 rows, committing each batch so transactions stay short and autovacuum keeps up.\n3. **Add a `NOT VALID` check, then validate it.** Validation scans the table under a `SHARE UPDATE EXCLUSIVE` lock, so reads and writes keep flowing. [1][2]\n4. **Set `NOT NULL`.** Postgres sees the validated check and skips the full scan, so this lock lasts milliseconds. [1][3]\n\n```sql\nALTER TABLE orders ADD COLUMN region text;\n\nALTER TABLE orders ADD CONSTRAINT orders_region_not_null\n  CHECK (region IS NOT NULL) NOT VALID;\n\nALTER TABLE orders VALIDATE CONSTRAINT orders_region_not_null;\nALTER TABLE orders ALTER COLUMN region SET NOT NULL;\nALTER TABLE orders DROP CONSTRAINT orders_region_not_null;\n```\n\nRun each `ALTER` with a short `lock_timeout`, such as `2s`, so a statement stuck behind a long query gives up instead of queueing every write behind it. [4]",
      retryLead: "Do it in four steps, each holding a heavy lock for only a moment."
    }
  ], E = (e3) => A.find((t2) => t2.match.test(e3)) ?? T;
  function L(e3) {
    let t2 = E(e3).title;
    if (t2) return t2;
    let n2 = e3.replace(/[`*?.!]+/g, "").trim().split(/\s+/).slice(0, 6).join(" ");
    return n2.length > 40 ? `${n2.slice(0, 38)}\u2026` : n2 || "New chat";
  }
  let R = [
    {
      label: "Add a NOT NULL column without downtime",
      prompt: "How do I add a NOT NULL column to a 40M row table without blocking writes?",
      icon: "database"
    },
    {
      label: "Estimate a backfill for 40M rows",
      prompt: "How long will a backfill of 40M rows take at 5,000 rows per batch?",
      icon: "timer"
    },
    { label: "Check replication lag on replica-eu-2", icon: "activity" }
  ], S = [
    {
      id: "partition-events",
      title: "Partition the events table",
      group: "Today",
      messages: [
        {
          role: "user",
          content: "Should we partition `events` by month or by week? It grows by about 90M rows a month."
        },
        {
          role: "assistant",
          model: "claude-opus-5-5",
          thoughtFor: 3,
          reasoning: "At 90M rows a month the main costs are vacuum time and retention deletes. Monthly partitions keep both cheap without a large partition count.",
          content: "By month. At about 90M rows a month, each partition stays small enough for quick vacuums and index builds, and the partition count stays low.\n\n- **Retention:** dropping a month is one `DETACH PARTITION` and a `DROP TABLE`, with no bulk delete\n- **Queries:** filters on `created_at` prune to one or two partitions\n- **Weekly** partitions only pay off once a single month gets slow to vacuum"
        }
      ]
    },
    {
      id: "status-page",
      title: "Status page incident draft",
      group: "Previous 7 days",
      messages: [
        {
          role: "user",
          content: "Draft a status page update for the checkout slowdown on October 14. It was resolved at 15:40 UTC."
        },
        {
          role: "assistant",
          model: "claude-sonnet-5-5",
          thoughtFor: 2,
          reasoning: "Lead with the impact and the time window, say plainly that no payment was lost, then the cause and the fix.",
          content: `**Resolved: slower checkout**

Between 14:55 and 15:40 UTC on October 14, some customers saw checkout take longer than usual. No payment was lost or charged twice. A database migration held a lock for longer than expected; we stopped it, and checkout recovered at 15:40 UTC.

We are adding lock timeouts to every migration, so a schema change cannot hold up checkout again.`
        }
      ]
    },
    {
      id: "churn-themes",
      title: "Churn interview themes",
      group: "Previous 7 days",
      messages: [
        {
          role: "user",
          content: "Summarize the themes from the 12 churn interviews in three bullets."
        },
        {
          role: "assistant",
          model: "gpt-6-1-sol",
          thoughtFor: 5,
          reasoning: "Group the notes by the reason each customer gave first, then count how many interviews mention each.",
          content: `- **Setup took too long:** 7 of 12 never finished connecting their data in the first week
- **Pricing jumped at 10 seats:** 4 left at renewal when the team plan started
- **Exports were missing:** 3 needed CSV exports for finance and moved to a tool that had them`
        }
      ]
    }
  ], I = (e3, t2) => new Promise((n2) => {
    if (t2.aborted) return n2();
    let r2 = setTimeout(a2, e3);
    function a2() {
      clearTimeout(r2), t2.removeEventListener("abort", a2), n2();
    }
    t2.addEventListener("abort", a2, { once: true });
  });
  function M(e3, t2) {
    let n2 = [], r2 = 0;
    for (; r2 < e3.length; ) {
      let a2 = Math.min(e3.length, r2 + t2), s2 = e3.indexOf(" ", a2);
      a2 = -1 === s2 || s2 - a2 > 12 ? a2 : s2 + 1, n2.push(e3.slice(r2, a2)), r2 = a2;
    }
    return n2;
  }
  function z() {
    let e3 = /* @__PURE__ */ new Map();
    return async function* (t2, { signal: n2 }) {
      let r2 = E([...t2].reverse().find((e6) => "user" === e6.role)?.content ?? ""), a2 = e3.get(r2.id) ?? 0;
      for (let t3 of (e3.set(r2.id, a2 + 1), M(r2.reasoning, 34))) {
        if (await I(110, n2), n2.aborted) return;
        yield { type: "reasoning", delta: t3 };
      }
      if (yield { type: "reasoning-end", seconds: r2.seconds }, r2.tool) {
        if (yield {
          type: "tool",
          tool: {
            ...r2.tool,
            status: "running",
            summary: void 0,
            output: void 0
          }
        }, await I(r2.failFirst && 0 === a2 ? 1400 : 850, n2), n2.aborted)
          return;
        if (r2.failFirst && 0 === a2) {
          yield {
            type: "tool",
            tool: {
              ...r2.tool,
              status: "error",
              name: r2.tool.activeName ?? r2.tool.name,
              summary: "Timed out",
              output: void 0
            }
          }, yield { type: "error", message: r2.failFirst };
          return;
        }
        yield { type: "tool", tool: { ...r2.tool, sources: r2.sources } };
      }
      r2.sources && (yield { type: "sources", sources: r2.sources });
      let s2 = a2 > 0 && r2.retryLead ? r2.text.replace(/^[^\n]+/, r2.retryLead) : r2.text;
      for (let e6 of (await I(120, n2), M(s2, 42))) {
        if (n2.aborted) return;
        yield { type: "text", delta: e6 }, await I(18, n2);
      }
    };
  }
  var O = n(50626), D = n(73474), B = n(25130), $ = n(74211), P = n.n($);
  function F(e3, t2, n2) {
    let r2 = false, a2 = false, s2 = "", i2 = t2, o2 = (e6) => {
      s2 && n2.push({ text: s2, start: i2, strong: r2, code: a2 }), s2 = "", i2 = e6;
    };
    for (let l2 = 0; l2 < e3.length; ) {
      if (!a2 && e3.startsWith("**", l2)) {
        o2(t2 + l2 + 2), r2 = !r2, l2 += 2;
        continue;
      }
      if ("`" === e3[l2]) {
        o2(t2 + l2 + 1), a2 = !a2, l2 += 1;
        continue;
      }
      if (!a2 && "[" === e3[l2]) {
        let r3 = /^\[(\d{1,2})\]/.exec(e3.slice(l2, l2 + 5));
        if (r3) {
          o2(t2 + l2 + r3[0].length), n2.push({ cite: Number(r3[1]), start: t2 + l2 }), l2 += r3[0].length;
          continue;
        }
      }
      s2 || (i2 = t2 + l2), s2 += e3[l2], l2 += 1;
    }
    o2(t2 + e3.length);
  }
  let U = /^(\s*)(\d+\.|[-*])\s+/, W = /^#{1,4}\s+/, H = /^\s*```/, q = (e3) => " " === e3 || "\n" === e3 || "	" === e3;
  function V(e3, t2) {
    let n2 = t2;
    for (; n2 < e3.length && q(e3[n2]); ) n2 += 1;
    for (; n2 < e3.length && !q(e3[n2]); ) n2 += 1;
    return n2;
  }
  let K = (e3) => {
    try {
      return new URL(e3).hostname.replace(/^www\./, "");
    } catch {
      return e3;
    }
  };
  function Y(e3, t2, n2, a2 = (e6) => e6) {
    if (!n2) return a2(e3);
    let s2 = t2 + e3.length, i2 = [], o2 = t2;
    for (let l2 of n2)
      if (!(l2 <= o2)) {
        if (l2 >= s2) break;
        i2.push(
          (0, r.jsx)(
            "span",
            { className: P().chunk, children: a2(e3.slice(o2 - t2, l2 - t2)) },
            o2
          )
        ), o2 = l2;
      }
    return i2.push(
      (0, r.jsx)(
        "span",
        { className: P().chunk, children: a2(e3.slice(o2 - t2)) },
        o2
      )
    ), i2;
  }
  let G = /\b(SELECT|FROM|WHERE|AND|OR|NOT|NULL|IS|ALTER|TABLE|ADD|COLUMN|CONSTRAINT|CHECK|VALID|VALIDATE|SET|DROP|UPDATE|INSERT|INTO|VALUES|CREATE|INDEX|CONCURRENTLY|ON|AS|IN|BEGIN|COMMIT|text|bigint|integer|count|now)\b|('[^']*')|(\$\d+|\b\d[\d_]*\b)|(--.*$)/gm;
  function X(e3) {
    let t2 = [], n2 = 0;
    for (let a2 of e3.matchAll(G)) {
      let s2 = a2.index ?? 0;
      s2 > n2 && t2.push(e3.slice(n2, s2));
      let i2 = a2[1] ? P().tokKeyword : a2[2] ? P().tokString : a2[3] ? P().tokNumber : P().tokComment;
      t2.push((0, r.jsx)("span", { className: i2, children: a2[0] }, s2)), n2 = s2 + a2[0].length;
    }
    return n2 < e3.length && t2.push(e3.slice(n2)), 1 === t2.length ? t2[0] : t2;
  }
  function Q({ source: e3, n: t2 }) {
    let n2 = e3.mark;
    return (0, r.jsxs)("div", {
      className: P().sourcePreview,
      children: [
        (0, r.jsxs)("p", {
          className: P().sourceSite,
          children: [
            n2 ? (0, r.jsx)(n2, {
              className: P().sourceMark,
              style: { color: e3.color },
              "aria-hidden": "true"
            }) : (0, r.jsx)(O.A, {
              className: P().sourceMark,
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, r.jsx)("span", { children: K(e3.url) }),
            (0, r.jsx)("span", { className: P().sourceN, children: t2 })
          ]
        }),
        (0, r.jsx)("p", { className: P().sourceTitle, children: e3.title }),
        e3.snippet && (0, r.jsx)("p", {
          className: P().sourceSnippet,
          children: e3.snippet
        })
      ]
    });
  }
  function Z({ n: e3, source: t2, fresh: n2 }) {
    let a2 = [P().cite, n2 ? P().chunk : ""].filter(Boolean).join(" ");
    return t2 ? (0, r.jsx)(B.jc, {
      side: "top",
      align: "center",
      openDelay: 220,
      className: P().sourceCard,
      content: (0, r.jsx)(Q, { source: t2, n: e3 }),
      children: (0, r.jsx)("a", {
        className: a2,
        href: t2.url,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": `Source ${e3}: ${t2.title}, ${K(t2.url)}`,
        children: e3
      })
    }) : (0, r.jsx)("span", { className: a2, "data-missing": "", children: e3 });
  }
  function J({ segments: e3, marks: t2, sources: n2 }) {
    return e3.map((e6) => {
      if ("cite" in e6)
        return (0, r.jsx)(
          Z,
          { n: e6.cite, source: n2[e6.cite - 1], fresh: !!t2 },
          `c${e6.start}`
        );
      let a2 = Y(e6.text, e6.start, t2);
      return e6.code ? (0, r.jsx)(
        "code",
        { className: P().inlineCode, children: a2 },
        e6.start
      ) : e6.strong ? (0, r.jsx)(
        "strong",
        { className: P().strong, children: a2 },
        e6.start
      ) : (0, r.jsx)("span", { children: a2 }, e6.start);
    });
  }
  function ee({ block: e3, marks: t2 }) {
    return (0, r.jsxs)("div", {
      className: [P().codeBlock, t2 ? P().chunk : ""].filter(Boolean).join(" "),
      children: [
        (0, r.jsxs)("div", {
          className: P().codeHead,
          children: [
            (0, r.jsx)("span", {
              className: P().codeLang,
              children: e3.lang || "code"
            }),
            (0, r.jsx)(D.CopyButton, {
              value: e3.code,
              label: "Copy",
              variant: "plain",
              className: P().codeCopy,
              disabled: !e3.closed
            })
          ]
        }),
        (0, r.jsx)("pre", {
          className: P().codePre,
          children: (0, r.jsx)("code", {
            children: Y(e3.code, e3.codeStart, t2, X)
          })
        })
      ]
    });
  }
  let et = (0, a.memo)(function({
    source: e3,
    shown: t2,
    marks: n2,
    sources: a2 = []
  }) {
    let s2 = (function(e6) {
      let t3 = [], n3 = e6.split("\n"), r2 = [];
      n3.reduce((e7, t4) => (r2.push(e7), e7 + t4.length + 1), 0);
      let a3 = null, s3 = null, i2 = 0;
      for (; i2 < n3.length; ) {
        let o2 = n3[i2], l2 = r2[i2];
        if (H.test(o2)) {
          a3 = null, s3 = null;
          let c3 = o2.trim().slice(3).trim(), d3 = [], u3 = i2 + 1;
          for (; u3 < n3.length && "```" !== n3[u3].trim(); ) d3.push(n3[u3++]);
          t3.push({
            kind: "code",
            start: l2,
            lang: c3,
            code: d3.join("\n"),
            codeStart: r2[i2 + 1] ?? e6.length,
            closed: u3 < n3.length
          }), i2 = u3 + 1;
          continue;
        }
        if (!o2.trim()) {
          a3 = null, s3 = null, i2 += 1;
          continue;
        }
        let c2 = U.exec(o2);
        if (c2) {
          a3 = null;
          let e7 = c2[2].endsWith(".") ? "ol" : "ul";
          s3 && s3.kind === e7 || (s3 = {
            kind: e7,
            start: l2,
            first: "ol" === e7 ? parseInt(c2[2], 10) : 1,
            items: []
          }, t3.push(s3));
          let n4 = [];
          F(o2.slice(c2[0].length), l2 + c2[0].length, n4), s3.items.push({ start: l2, segments: n4 }), i2 += 1;
          continue;
        }
        let d2 = W.exec(o2);
        if (d2) {
          s3 = null, a3 = { kind: "h", start: l2, segments: [] }, F(o2.slice(d2[0].length), l2 + d2[0].length, a3.segments), t3.push(a3), a3 = null, i2 += 1;
          continue;
        }
        let u2 = s3 ? s3.items[s3.items.length - 1].segments : a3?.segments;
        u2 ? (u2.push({ text: " ", start: l2 - 1, strong: false, code: false }), F(o2.trim(), l2 + (o2.length - o2.trimStart().length), u2)) : (a3 = { kind: "p", start: l2, segments: [] }, F(o2, l2, a3.segments), t3.push(a3)), i2 += 1;
      }
      return t3;
    })(void 0 === t2 ? e3 : e3.slice(0, t2));
    return (0, r.jsx)("div", {
      className: P().markdown,
      children: s2.map((e6) => {
        if ("code" === e6.kind)
          return (0, r.jsx)(ee, { block: e6, marks: n2 }, `code${e6.start}`);
        if (!("items" in e6))
          return "h" === e6.kind ? (0, r.jsx)(
            "h3",
            {
              className: P().heading,
              children: (0, r.jsx)(J, {
                segments: e6.segments,
                marks: n2,
                sources: a2
              })
            },
            `h${e6.start}`
          ) : (0, r.jsx)(
            "p",
            {
              className: P().paragraph,
              children: (0, r.jsx)(J, {
                segments: e6.segments,
                marks: n2,
                sources: a2
              })
            },
            `p${e6.start}`
          );
        let t3 = e6.items.map(
          (e7) => (0, r.jsx)(
            "li",
            {
              className: n2 ? P().chunk : void 0,
              children: (0, r.jsx)(J, {
                segments: e7.segments,
                marks: n2,
                sources: a2
              })
            },
            e7.start
          )
        );
        return "ol" === e6.kind ? (0, r.jsx)(
          "ol",
          {
            className: P().list,
            start: 1 !== e6.first ? e6.first : void 0,
            children: t3
          },
          `ol${e6.start}`
        ) : (0, r.jsx)(
          "ul",
          { className: P().list, children: t3 },
          `ul${e6.start}`
        );
      })
    });
  });
  var en = n(18310), er = n(92171), ea = n(35484), es = n(99314), ei = n(76721), eo = n(94179), el = n(36483), ec = n(92571), ed = n(78780), eu = n(9005), eh = n(15561), em = n(40852), ep = n(38158), eg = n(52898), ef = n(55665);
  let e_ = [0.22, 1, 0.36, 1], ex = { type: "spring", visualDuration: 0.26, bounce: 0 }, ev = { type: "spring", visualDuration: 0.32, bounce: 0 }, ey = () => () => {
  }, eb = (...e3) => e3.filter(Boolean).join(" ");
  function ew({ swapKey: e3, children: t2, reduced: n2, className: s2 }) {
    let l2 = (0, a.useRef)(null), c2 = (0, a.useRef)(0), d2 = (0, a.useRef)(e3);
    return (0, a.useLayoutEffect)(() => {
      let t3 = l2.current;
      if (!t3 || d2.current === e3) return;
      d2.current = e3;
      let r2 = t3.style.width ? t3.getBoundingClientRect().width : c2.current;
      t3.style.width = "";
      let a2 = t3.getBoundingClientRect().width;
      if (n2 || !r2 || 1 > Math.abs(r2 - a2)) return;
      let s3 = (0, er.i)(
        t3,
        { width: [r2, a2] },
        {
          ...ex,
          onComplete: () => {
            t3.style.width = "";
          }
        }
      );
      return () => s3.stop();
    }, [e3, n2]), (0, a.useEffect)(() => {
      let e6 = l2.current;
      if (!e6 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        e6.style.width || (c2.current = e6.getBoundingClientRect().width);
      });
      return t3.observe(e6), () => t3.disconnect();
    }, []), (0, r.jsx)("span", {
      ref: l2,
      className: eb(P().swap, s2),
      children: (0, r.jsx)(i.N, {
        mode: "popLayout",
        initial: false,
        children: (0, r.jsx)(
          o.PY1.span,
          {
            className: P().swapItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: {
              opacity: 0,
              transition: { duration: 0.1 * !n2, ease: e_ }
            },
            transition: { duration: 0.16 * !n2, ease: e_ },
            children: t2
          },
          e3
        )
      })
    });
  }
  function ej({ swapKey: e3, children: t2, reduced: n2, className: a2 }) {
    return (0, r.jsx)("span", {
      className: eb(P().iconCell, a2),
      "aria-hidden": "true",
      children: (0, r.jsx)(i.N, {
        initial: false,
        children: (0, r.jsx)(
          o.PY1.span,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.1 * !n2 } },
            transition: { duration: 0.16 * !n2, ease: e_ },
            children: t2
          },
          e3
        )
      })
    });
  }
  function ek(e3, t2, n2) {
    let r2 = (0, a.useRef)(0), s2 = (0, a.useRef)(t2);
    (0, a.useEffect)(() => {
      let t3 = e3.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let n3 = new ResizeObserver(() => {
        t3.style.height || (r2.current = t3.getBoundingClientRect().height);
      });
      return n3.observe(t3), () => n3.disconnect();
    }, [e3]), (0, a.useLayoutEffect)(() => {
      let a2 = e3.current;
      if (!a2 || s2.current === t2) return;
      s2.current = t2;
      let i2 = a2.style.height ? a2.getBoundingClientRect().height : r2.current;
      a2.style.height = "";
      let o2 = a2.getBoundingClientRect().height;
      if (n2 || !i2 || 2 > Math.abs(i2 - o2)) return;
      a2.style.overflow = "clip";
      let l2 = (0, er.i)(
        a2,
        { height: [i2, o2] },
        {
          ...ex,
          onComplete: () => {
            a2.style.height = "", a2.style.overflow = "";
          }
        }
      );
      return () => l2.stop();
    }, [t2, n2, e3]);
  }
  function eN({ model: e3, className: t2 }) {
    let n2 = e3.mark;
    return (0, r.jsx)(n2, {
      className: eb(P().mark, t2),
      style: e3.color ? { color: e3.color } : void 0,
      "aria-hidden": "true",
      title: ""
    });
  }
  function eC({ source: e3 }) {
    let t2 = e3.mark;
    return t2 ? (0, r.jsx)(t2, {
      className: P().mark,
      style: e3.color ? { color: e3.color } : void 0,
      "aria-hidden": "true",
      title: ""
    }) : (0, r.jsx)(O.A, {
      className: P().mark,
      size: 14,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    });
  }
  function eT({ models: e3, value: t2, onChange: n2, reduced: a2 }) {
    return (0, r.jsxs)(l.bL, {
      modal: false,
      children: [
        (0, r.jsxs)(l.l9, {
          className: P().modelChip,
          "aria-label": `Model: ${t2.name}`,
          children: [
            (0, r.jsxs)(ew, {
              swapKey: t2.id,
              reduced: a2,
              children: [
                (0, r.jsx)(eN, { model: t2 }),
                (0, r.jsx)("span", {
                  className: P().modelName,
                  children: t2.name
                })
              ]
            }),
            (0, r.jsx)(m.A, {
              className: P().chipChevron,
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, r.jsx)(l.ZL, {
          children: (0, r.jsx)(l.UC, {
            className: P().menu,
            align: "end",
            sideOffset: 6,
            collisionPadding: 12,
            loop: true,
            children: (0, r.jsx)(l.z6, {
              value: t2.id,
              onValueChange: n2,
              children: e3.map(
                (e6) => (0, r.jsxs)(
                  l.hN,
                  {
                    value: e6.id,
                    className: P().menuItem,
                    children: [
                      (0, r.jsx)(eN, { model: e6 }),
                      (0, r.jsx)("span", {
                        className: P().menuName,
                        children: e6.name
                      }),
                      e6.note && (0, r.jsx)("span", {
                        className: P().menuNote,
                        children: e6.note
                      }),
                      (0, r.jsx)("span", {
                        className: P().menuCheck,
                        children: (0, r.jsx)(l.VF, {
                          children: (0, r.jsx)(g.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      })
                    ]
                  },
                  e6.id
                )
              )
            })
          })
        })
      ]
    });
  }
  function eA({
    label: e3,
    onClick: t2,
    children: n2,
    pressed: a2,
    disabled: s2,
    className: i2
  }) {
    return (0, r.jsx)(_.m, {
      content: e3,
      side: "bottom",
      children: (0, r.jsx)("button", {
        type: "button",
        className: eb(P().action, i2),
        "aria-label": e3,
        "aria-pressed": a2,
        disabled: s2,
        onClick: t2,
        children: n2
      })
    });
  }
  function eE({ text: e3, label: t2 = "Copy", reduced: n2, onCopied: s2 }) {
    let [i2, o2] = (0, a.useState)("idle"), l2 = (0, a.useRef)(0);
    async function c2() {
      let t3 = true;
      try {
        await (0, ef.a)(e3);
      } catch {
        t3 = false;
      }
      o2(t3 ? "copied" : "error"), s2(t3), window.clearTimeout(l2.current), l2.current = window.setTimeout(() => o2("idle"), 1600);
    }
    return (0, a.useEffect)(() => () => window.clearTimeout(l2.current), []), (0, r.jsx)(eA, {
      label: t2,
      onClick: () => void c2(),
      className: P().copyAction,
      children: (0, r.jsx)(ej, {
        swapKey: i2,
        reduced: n2,
        className: P().copyIcon,
        children: (0, r.jsx)("span", {
          "data-state": i2,
          children: "copied" === i2 ? (0, r.jsx)(g.A, { size: 16, strokeWidth: 1.75 }) : "error" === i2 ? (0, r.jsx)(ea.A, { size: 16, strokeWidth: 1.75 }) : (0, r.jsx)(es.A, { size: 16, strokeWidth: 1.75 })
        })
      })
    });
  }
  function eL({
    model: e3,
    reasoning: t2,
    thinking: n2,
    thoughtFor: s2,
    reduced: l2
  }) {
    let [c2, d2] = (0, a.useState)(false), u2 = (0, a.useId)(), h2 = n2 ? "Thinking" : s2 ? `Thought for ${s2}s` : t2 ? "Thought briefly" : e3.name, m2 = !!t2 && !n2 || n2 && !!t2;
    return (0, r.jsxs)("div", {
      className: P().reasoning,
      children: [
        (0, r.jsxs)("div", {
          className: P().replyHead,
          children: [
            (0, r.jsx)(_.m, {
              content: e3.name,
              children: (0, r.jsx)("span", {
                className: P().replyMark,
                children: (0, r.jsx)(eN, { model: e3 })
              })
            }),
            (0, r.jsxs)("button", {
              type: "button",
              className: P().thoughtButton,
              "aria-expanded": m2 ? c2 : void 0,
              "aria-controls": c2 ? u2 : void 0,
              disabled: !m2,
              onClick: () => d2(!c2),
              children: [
                (0, r.jsx)(ew, {
                  swapKey: n2 ? "thinking" : h2,
                  reduced: l2,
                  children: n2 ? (0, r.jsx)(eg.n, { children: "Thinking" }) : h2
                }),
                (0, r.jsx)(ei.A, {
                  className: P().thoughtChevron,
                  "data-open": c2 || void 0,
                  "data-hidden": !m2 || void 0,
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(i.N, {
          initial: false,
          children: c2 && t2 && (0, r.jsx)(
            o.PY1.div,
            {
              id: u2,
              className: P().clip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: l2 ? { duration: 0 } : { height: ev, opacity: { duration: 0.16, ease: e_ } },
              children: (0, r.jsx)("p", {
                className: P().thoughtText,
                children: t2
              })
            },
            "thoughts"
          )
        })
      ]
    });
  }
  let eR = { search: h.A, database: c.A, code: eo.A, file: el.A };
  function eS({ tool: e3, open: t2, onToggle: n2, detailId: a2, reduced: s2 }) {
    var i2;
    let o2, l2 = "running" === e3.status, c2 = eR[e3.icon ?? "search"], d2 = e3.mark, u2 = !l2 && !!(e3.input?.length || e3.sources?.length || e3.output);
    return (0, r.jsxs)("button", {
      type: "button",
      className: P().toolChip,
      "data-status": e3.status,
      "aria-expanded": u2 ? t2 : void 0,
      "aria-controls": t2 ? a2 : void 0,
      disabled: !u2,
      onClick: n2,
      children: [
        (0, r.jsx)(ej, {
          swapKey: e3.status,
          reduced: s2,
          className: P().toolIcon,
          children: l2 ? (0, r.jsx)(ec.A, {
            className: P().spin,
            size: 14,
            strokeWidth: 1.75
          }) : "error" === e3.status ? (0, r.jsx)(ea.A, { size: 14, strokeWidth: 1.75 }) : d2 ? (0, r.jsx)(d2, {
            className: P().mark,
            style: e3.color ? { color: e3.color } : void 0,
            title: ""
          }) : (0, r.jsx)(c2, { size: 14, strokeWidth: 1.75 })
        }),
        (0, r.jsx)(ew, {
          swapKey: l2 ? "running" : `${e3.status}-${e3.name}`,
          reduced: s2,
          children: l2 ? (0, r.jsx)(eg.n, { children: e3.activeName ?? e3.name }) : (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("span", {
                className: P().toolName,
                children: e3.name
              }),
              e3.sources && e3.sources.length > 0 && (0, r.jsx)("span", {
                className: P().toolMarks,
                children: (i2 = e3.sources, o2 = /* @__PURE__ */ new Set(), i2.filter((e6) => {
                  let t3 = K(e6.url);
                  return !o2.has(t3) && (o2.add(t3), true);
                }).slice(0, 3)).map(
                  (e6) => (0, r.jsx)(eC, { source: e6 }, e6.url)
                )
              }),
              e3.summary && (0, r.jsx)("span", {
                className: P().toolSummary,
                children: e3.summary
              })
            ]
          })
        })
      ]
    });
  }
  function eI({ tool: e3 }) {
    let t2 = "database" === e3.icon || "code" === e3.icon;
    return (0, r.jsx)("div", {
      className: P().toolDetail,
      children: t2 ? (0, r.jsxs)(r.Fragment, {
        children: [
          e3.input?.map(
            (e6) => (0, r.jsx)("pre", { className: P().toolCode, children: e6 }, e6)
          ),
          e3.output && (0, r.jsxs)("p", {
            className: P().toolOutput,
            children: [
              (0, r.jsx)("span", { children: "Result" }),
              (0, r.jsx)("span", {
                className: P().toolOutputValue,
                children: e3.output
              })
            ]
          })
        ]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [
          e3.input && e3.input.length > 0 && (0, r.jsx)("ul", {
            className: P().queries,
            "aria-label": "Searches",
            children: e3.input.map(
              (e6) => (0, r.jsxs)(
                "li",
                {
                  children: [
                    (0, r.jsx)(h.A, {
                      size: 13,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    e6
                  ]
                },
                e6
              )
            )
          }),
          e3.sources && e3.sources.length > 0 && (0, r.jsx)("ol", {
            className: P().sourceList,
            "aria-label": "Sources",
            children: e3.sources.map(
              (e6, t3) => (0, r.jsx)(
                "li",
                {
                  children: (0, r.jsxs)("a", {
                    href: e6.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: P().sourceRow,
                    children: [
                      (0, r.jsx)(eC, { source: e6 }),
                      (0, r.jsx)("span", {
                        className: P().sourceRowTitle,
                        children: e6.title
                      }),
                      (0, r.jsx)("span", {
                        className: P().sourceRowDomain,
                        children: K(e6.url)
                      })
                    ]
                  })
                },
                e6.url + t3
              )
            )
          })
        ]
      })
    });
  }
  function eM({ tools: e3, reduced: t2 }) {
    let [n2, s2] = (0, a.useState)(null), l2 = (0, a.useId)(), c2 = e3.find((e6) => e6.id === n2 && "running" !== e6.status);
    return (0, r.jsxs)("div", {
      className: P().tools,
      children: [
        (0, r.jsx)("div", {
          className: P().toolRow,
          children: e3.map(
            (e6) => (0, r.jsx)(
              eS,
              {
                tool: e6,
                open: n2 === e6.id,
                detailId: l2,
                reduced: t2,
                onToggle: () => s2(n2 === e6.id ? null : e6.id)
              },
              e6.id
            )
          )
        }),
        (0, r.jsx)(i.N, {
          initial: false,
          children: c2 && (0, r.jsx)(
            o.PY1.div,
            {
              id: l2,
              className: P().clip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: t2 ? { duration: 0 } : { height: ev, opacity: { duration: 0.16, ease: e_ } },
              children: (0, r.jsx)(eI, { tool: c2 })
            },
            "detail"
          )
        })
      ]
    });
  }
  function ez({ index: e3, total: t2, onChange: n2, disabled: a2 }) {
    return (0, r.jsxs)("div", {
      className: P().versions,
      role: "group",
      "aria-label": `Version ${e3 + 1} of ${t2}`,
      children: [
        (0, r.jsx)("button", {
          type: "button",
          className: P().versionButton,
          "aria-label": "Previous version",
          disabled: a2 || 0 === e3,
          onClick: () => n2(e3 - 1),
          children: (0, r.jsx)(ed.A, {
            size: 15,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, r.jsxs)("span", {
          className: P().versionCount,
          "aria-hidden": "true",
          children: [e3 + 1, " / ", t2]
        }),
        (0, r.jsx)("button", {
          type: "button",
          className: P().versionButton,
          "aria-label": "Next version",
          disabled: a2 || e3 === t2 - 1,
          onClick: () => n2(e3 + 1),
          children: (0, r.jsx)(ei.A, {
            size: 15,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        })
      ]
    });
  }
  function eO({
    value: e3,
    onChange: t2,
    onSubmit: n2,
    onStop: s2,
    busy: l2,
    placeholder: c2,
    attachments: d2,
    onAttach: u2,
    onRemove: h2,
    inputRef: m2,
    reduced: p2
  }) {
    let g2 = (0, a.useRef)(null), f2 = (0, a.useRef)(null), [x2, v2] = (0, a.useState)(36);
    (0, a.useLayoutEffect)(() => {
      let e6 = f2.current;
      e6 && v2(Math.min(e6.offsetHeight, 180));
    }, [e3]), (0, a.useEffect)(() => {
      let e6 = f2.current;
      if (!e6 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => v2(Math.min(e6.offsetHeight, 180)));
      return t3.observe(e6), () => t3.disconnect();
    }, []);
    let y2 = !!e3.trim() || d2.length > 0;
    function b2(e6) {
      e6?.preventDefault(), l2 ? s2() : y2 && n2();
    }
    return (0, r.jsxs)("form", {
      className: P().composer,
      onSubmit: b2,
      children: [
        (0, r.jsx)(i.N, {
          initial: false,
          children: d2.length > 0 && (0, r.jsx)(
            o.PY1.div,
            {
              className: P().clip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: p2 ? { duration: 0 } : { height: ex, opacity: { duration: 0.16, ease: e_ } },
              children: (0, r.jsx)("ul", {
                className: P().attachRow,
                "aria-label": "Attachments",
                children: d2.map((e6) => {
                  let t3;
                  return (0, r.jsxs)(
                    "li",
                    {
                      className: P().attachChip,
                      children: [
                        (0, r.jsx)(el.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        (0, r.jsx)("span", {
                          className: P().attachName,
                          children: e6.name
                        }),
                        (0, r.jsx)("span", {
                          className: P().attachSize,
                          children: (t3 = e6.size) < 1024 ? `${t3} B` : t3 < 1048576 ? `${Math.round(t3 / 1024)} KB` : `${(t3 / 1048576).toFixed(1)} MB`
                        }),
                        (0, r.jsx)("button", {
                          type: "button",
                          className: P().attachRemove,
                          "aria-label": `Remove ${e6.name}`,
                          onClick: () => h2(e6.id),
                          children: (0, r.jsx)(eu.A, {
                            size: 13,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    },
                    e6.id
                  );
                })
              })
            },
            "files"
          )
        }),
        (0, r.jsxs)("div", {
          className: P().composerRow,
          children: [
            (0, r.jsx)(_.m, {
              content: "Attach files",
              children: (0, r.jsx)("button", {
                type: "button",
                className: P().roundButton,
                "aria-label": "Attach files",
                onClick: () => g2.current?.click(),
                children: (0, r.jsx)(eh.A, {
                  size: 18,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            }),
            (0, r.jsx)("input", {
              ref: g2,
              type: "file",
              multiple: true,
              hidden: true,
              tabIndex: -1,
              onChange: (e6) => {
                let t3 = Array.from(e6.target.files ?? []);
                t3.length && u2(t3), e6.target.value = "";
              }
            }),
            (0, r.jsxs)("div", {
              className: P().field,
              style: { height: x2 },
              children: [
                (0, r.jsx)("div", {
                  ref: f2,
                  className: P().mirror,
                  "aria-hidden": "true",
                  children: e3 + "\u200B"
                }),
                (0, r.jsx)("textarea", {
                  ref: m2,
                  className: P().input,
                  value: e3,
                  rows: 1,
                  placeholder: c2,
                  "aria-label": "Message",
                  onChange: (e6) => t2(e6.target.value),
                  onKeyDown: function(e6) {
                    "Enter" !== e6.key || e6.shiftKey || e6.nativeEvent.isComposing || (e6.preventDefault(), l2 || b2()), "Escape" === e6.key && l2 && (e6.preventDefault(), s2());
                  }
                })
              ]
            }),
            (0, r.jsx)("button", {
              type: "submit",
              className: P().send,
              "data-busy": l2 || void 0,
              "aria-label": l2 ? "Stop reply" : "Send message",
              disabled: !l2 && !y2,
              children: (0, r.jsx)(ej, {
                swapKey: l2 ? "stop" : "send",
                reduced: p2,
                children: l2 ? (0, r.jsx)(em.A, {
                  size: 13,
                  strokeWidth: 0,
                  fill: "currentColor"
                }) : (0, r.jsx)(ep.A, { size: 18, strokeWidth: 2 })
              })
            })
          ]
        })
      ]
    });
  }
  var eD = n(18986), eB = n(92298), e$ = n(62818), eP = n(70105), eF = n(51288);
  function eU({ turnId: e3, version: t2, busy: n2, reduced: s2, actions: i2 }) {
    let [o2, l2] = (0, a.useState)(false), [c2, d2] = (0, a.useState)(t2.prompt), u2 = (0, a.useRef)(null);
    ek(u2, o2 ? "edit" : t2.id, s2);
    let h2 = () => {
      l2(false), d2(t2.prompt);
    };
    function m2(n3) {
      n3?.preventDefault();
      let r2 = c2.trim();
      r2 && (l2(false), r2 !== t2.prompt.trim() && i2.edit(e3, r2));
    }
    return (0, r.jsx)("div", {
      ref: u2,
      className: P().userRow,
      children: o2 ? (0, r.jsxs)("form", {
        className: eb(P().editor, P().fadeIn),
        onSubmit: m2,
        children: [
          (0, r.jsx)("textarea", {
            className: P().editorInput,
            value: c2,
            "aria-label": "Edit message",
            autoFocus: true,
            rows: Math.min(
              8,
              Math.max(2, c2.split("\n").length + Math.floor(c2.length / 70))
            ),
            onChange: (e6) => d2(e6.target.value),
            onKeyDown: function(e6) {
              "Enter" !== e6.key || e6.shiftKey || e6.nativeEvent.isComposing || (e6.preventDefault(), m2()), "Escape" === e6.key && (e6.preventDefault(), h2());
            },
            onFocus: (e6) => {
              let t3 = e6.currentTarget.value.length;
              e6.currentTarget.setSelectionRange(t3, t3);
            }
          }),
          (0, r.jsxs)("div", {
            className: P().editorBar,
            children: [
              (0, r.jsx)(eF.$, {
                type: "button",
                variant: "ghost",
                size: "sm",
                onClick: h2,
                children: "Cancel"
              }),
              (0, r.jsx)(eF.$, {
                type: "submit",
                variant: "primary",
                size: "sm",
                disabled: !c2.trim(),
                children: "Send"
              })
            ]
          })
        ]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsxs)("div", {
            className: eb(P().userActions, P().hoverable),
            children: [
              (0, r.jsx)(eE, {
                text: t2.prompt,
                reduced: s2,
                onCopied: i2.copied
              }),
              (0, r.jsx)(eA, {
                label: "Edit",
                disabled: n2,
                onClick: () => {
                  d2(t2.prompt), l2(true);
                },
                children: (0, r.jsx)(eD.A, {
                  size: 15,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            ]
          }),
          (0, r.jsxs)("div", {
            className: P().bubble,
            children: [
              t2.attachments && t2.attachments.length > 0 && (0, r.jsx)("ul", {
                className: P().bubbleFiles,
                "aria-label": "Attachments",
                children: t2.attachments.map(
                  (e6) => (0, r.jsxs)(
                    "li",
                    {
                      children: [
                        (0, r.jsx)(el.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        e6.name
                      ]
                    },
                    e6.id
                  )
                )
              }),
              t2.prompt && (0, r.jsx)("p", {
                className: P().bubbleText,
                children: t2.prompt.split(/(`[^`\n]+`)/g).map(
                  (e6, t3) => e6.startsWith("`") && e6.endsWith("`") && e6.length > 2 ? (0, r.jsx)(
                    "code",
                    {
                      className: P().inlineCode,
                      children: e6.slice(1, -1)
                    },
                    t3
                  ) : e6
                )
              })
            ]
          })
        ]
      })
    });
  }
  function eW({
    turn: e3,
    version: t2,
    model: n2,
    busy: a2,
    reduced: s2,
    actions: i2
  }) {
    let o2 = t2.reply, l2 = "thinking" === o2.status || "streaming" === o2.status, c2 = "thinking" === o2.status && void 0 === o2.thoughtFor && !o2.text, d2 = "done" === o2.status || "stopped" === o2.status, u2 = o2.text.slice(0, o2.shown);
    return (0, r.jsxs)("div", {
      className: P().reply,
      "aria-busy": l2 || void 0,
      "data-pending": l2 || void 0,
      children: [
        (0, r.jsx)(
          eL,
          {
            model: n2,
            reasoning: o2.reasoning,
            thinking: c2,
            thoughtFor: o2.thoughtFor,
            reduced: s2
          },
          o2.id
        ),
        o2.tools.length > 0 && (0, r.jsx)(eM, { tools: o2.tools, reduced: s2 }, `tools-${o2.id}`),
        o2.shown > 0 && (0, r.jsx)(et, {
          source: o2.text,
          shown: o2.shown,
          marks: o2.marks,
          sources: o2.sources
        }),
        "stopped" === o2.status && (0, r.jsxs)("p", {
          className: eb(P().statusLine, P().fadeIn),
          children: [
            (0, r.jsx)(em.A, {
              size: 11,
              strokeWidth: 0,
              fill: "currentColor",
              "aria-hidden": "true"
            }),
            o2.shown ? "Stopped" : "Stopped before answering"
          ]
        }),
        "error" === o2.status && (0, r.jsxs)("div", {
          className: eb(P().error, P().fadeIn),
          children: [
            (0, r.jsx)(ea.A, {
              className: P().errorIcon,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, r.jsxs)("p", {
              className: P().errorText,
              children: [
                (0, r.jsx)("span", {
                  className: P().errorTitle,
                  children: "Reply failed."
                }),
                " ",
                o2.error
              ]
            }),
            (0, r.jsx)(eF.$, {
              variant: "secondary",
              size: "sm",
              onClick: () => i2.retryInPlace(e3.id, t2.id),
              children: "Retry"
            })
          ]
        }),
        "error" !== o2.status && (0, r.jsxs)("div", {
          className: P().actions,
          "data-hidden": !d2 || void 0,
          children: [
            e3.versions.length > 1 && (0, r.jsx)(ez, {
              index: e3.active,
              total: e3.versions.length,
              disabled: a2,
              onChange: (t3) => i2.select(e3.id, t3)
            }),
            (0, r.jsxs)("div", {
              className: eb(P().actionGroup, P().hoverable),
              children: [
                (0, r.jsx)(eE, {
                  text: u2.replace(/ ?\[\d{1,2}\]/g, "").replace(/\*\*/g, "").replace(/`(?!``)/g, "").trim(),
                  reduced: s2,
                  onCopied: i2.copied
                }),
                (0, r.jsx)(eA, {
                  label: "Retry",
                  onClick: () => i2.retry(e3.id),
                  children: (0, r.jsx)(eB.A, {
                    size: 15,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, r.jsx)(eA, {
                  label: "Good response",
                  pressed: "up" === o2.feedback,
                  onClick: () => i2.feedback(e3.id, t2.id, "up"),
                  children: (0, r.jsx)(e$.A, {
                    size: 15,
                    strokeWidth: 1.75,
                    fill: "up" === o2.feedback ? "currentColor" : "none",
                    "aria-hidden": "true"
                  })
                }),
                (0, r.jsx)(eA, {
                  label: "Bad response",
                  pressed: "down" === o2.feedback,
                  onClick: () => i2.feedback(e3.id, t2.id, "down"),
                  children: (0, r.jsx)(eP.A, {
                    size: 15,
                    strokeWidth: 1.75,
                    fill: "down" === o2.feedback ? "currentColor" : "none",
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let eH = (0, a.memo)(function({
    turn: e3,
    version: t2,
    model: n2,
    last: s2,
    busy: i2,
    reduced: o2,
    actions: l2
  }) {
    let c2 = (0, a.useRef)(null);
    return ek(c2, t2.id, o2), (0, r.jsx)("article", {
      ref: c2,
      className: P().turn,
      "data-last": s2 || void 0,
      "aria-label": "Message",
      children: (0, r.jsxs)(
        "div",
        {
          className: eb(P().turnBody, P().fadeIn),
          children: [
            (0, r.jsx)(eU, {
              turnId: e3.id,
              version: t2,
              busy: i2,
              reduced: o2,
              actions: l2
            }),
            (0, r.jsx)(eW, {
              turn: e3,
              version: t2,
              model: n2,
              busy: i2,
              reduced: o2,
              actions: l2
            })
          ]
        },
        t2.id
      )
    });
  }), eq = { root: null, turns: {} };
  function eV(e3, t2) {
    return {
      id: e3,
      model: t2,
      status: "thinking",
      text: "",
      shown: 0,
      streamDone: false,
      reasoning: "",
      tools: [],
      sources: [],
      feedback: null
    };
  }
  function eK(e3) {
    let t2 = [], n2 = e3.root, r2 = /* @__PURE__ */ new Set();
    for (; n2 && e3.turns[n2] && !r2.has(n2); ) {
      r2.add(n2);
      let a2 = e3.turns[n2], s2 = a2.versions[a2.active];
      t2.push({ turn: a2, version: s2 }), n2 = s2.next;
    }
    return t2;
  }
  function eY(e3) {
    return {
      id: e3.id,
      role: "assistant",
      content: e3.text.slice(0, e3.shown),
      model: e3.model,
      reasoning: e3.reasoning || void 0,
      thoughtFor: e3.thoughtFor,
      tools: e3.tools,
      sources: e3.sources,
      status: "stopped" === e3.status ? "stopped" : "error" === e3.status ? "error" : "done",
      error: e3.error
    };
  }
  function eG(e3, t2, n2) {
    let r2 = {}, a2 = null, s2 = null, i2 = 0;
    for (let o2 of e3)
      if ("user" === o2.role) {
        let e6 = `${n2}-t${i2}`, l2 = {
          id: `${n2}-v${i2}`,
          prompt: o2.content,
          attachments: o2.attachments,
          reply: eV(`${n2}-r${i2}`, t2),
          next: null
        };
        r2[e6] = { id: e6, versions: [l2], active: 0 }, s2 ? s2.next = e6 : a2 = e6, s2 = l2, i2 += 1;
      } else
        s2 && (s2.reply = {
          ...s2.reply,
          id: o2.id ?? s2.reply.id,
          model: o2.model ?? t2,
          status: o2.status ?? "done",
          text: o2.content,
          shown: o2.content.length,
          streamDone: true,
          reasoning: o2.reasoning ?? "",
          thoughtFor: o2.thoughtFor,
          tools: o2.tools ?? [],
          sources: o2.sources ?? [],
          error: o2.error
        });
    return { root: a2, turns: r2 };
  }
  function eX(e3, t2, n2) {
    let r2 = e3.turns[t2];
    return r2 ? { ...e3, turns: { ...e3.turns, [t2]: n2(r2) } } : e3;
  }
  function eQ(e3, t2, n2, r2) {
    return eX(e3, t2, (e6) => ({
      ...e6,
      versions: e6.versions.map(
        (e7) => e7.id === n2 ? { ...e7, reply: r2(e7.reply) } : e7
      )
    }));
  }
  let eZ = "chat-demo", eJ = 0, e0 = (e3) => `${e3}-${Date.now().toString(36)}${(eJ++).toString(36)}`, e1 = { database: c.A, timer: d.A, activity: u.A, search: h.A };
  function e2(e3) {
    let t2, {
      models: n2 = v,
      respond: c2,
      suggestions: d2 = R,
      greeting: u2 = "What are we working on?",
      placeholder: h2 = "Ask anything",
      onFeedback: x2,
      onModelChange: y2,
      onNewChat: b2,
      className: w2
    } = e3, j2 = (t2 = (0, a.useSyncExternalStore)(
      ey,
      () => true,
      () => false
    ), !!(0, en.I)() && t2), k2 = e3.autoPlay ?? (!c2 && !e3.initialMessages?.length), N2 = !c2, C2 = (0, a.useMemo)(() => c2 ?? z(), [c2]), [T2, A2] = (0, a.useState)(() => e3.defaultModel ?? n2[0]?.id ?? ""), E2 = n2.find((e6) => e6.id === T2) ?? n2[0], I2 = (0, a.useCallback)(
      (e6) => n2.find((t3) => t3.id === e6) ?? v.find((t3) => t3.id === e6) ?? n2[0],
      [n2]
    ), [M2, O2] = (0, a.useState)(
      () => (function(e6, t3, n3) {
        let r2, a2 = (e6.history ?? (e6.respond || e6.initialMessages ? [] : S)).map(
          (e7) => ({
            id: e7.id,
            title: e7.title,
            group: e7.group ?? "Earlier",
            thread: eG(e7.messages, t3, e7.id)
          })
        );
        if (e6.initialMessages?.length) {
          let n4 = e6.initialMessages.find((e7) => "user" === e7.role)?.content ?? "";
          r2 = {
            id: "chat-current",
            title: e6.title ?? L(n4),
            group: "Today",
            thread: eG(e6.initialMessages, t3, "initial")
          };
        } else
          r2 = n3 ? {
            id: eZ,
            title: e6.title ?? L(
              "We need a non-null `region` column on our 40M row `orders` table in Postgres 17. How do we add it without blocking writes?"
            ),
            group: "Today",
            thread: eG(
              [
                {
                  role: "user",
                  content: "We need a non-null `region` column on our 40M row `orders` table in Postgres 17. How do we add it without blocking writes?"
                }
              ],
              t3,
              "demo"
            )
          } : {
            id: "chat-new",
            title: e6.title ?? "",
            group: "Today",
            thread: eq
          };
        return [r2, ...a2];
      })(e3, e3.defaultModel ?? n2[0]?.id ?? "", k2)
    ), [D2, B2] = (0, a.useState)(() => M2[0].id), $2 = (0, a.useRef)(M2), F2 = (0, a.useRef)(D2), [U2, W2] = (0, a.useState)(""), [K2, Y2] = (0, a.useState)([]), [G2, X2] = (0, a.useState)(null), [Q2, Z2] = (0, a.useState)({ text: "", n: 0 }), [J2, ee2] = (0, a.useState)(false), et2 = (0, a.useRef)(null), er2 = (0, a.useRef)(null), ea2 = (0, a.useRef)(null), es2 = (0, a.useRef)(null), ei2 = (0, a.useRef)(null), eo2 = (0, a.useRef)(true), el2 = (0, a.useRef)(() => {
    }), ec2 = (0, a.useRef)(/* @__PURE__ */ new Map()), ed2 = (0, a.useRef)(k2 ? 0 : -1), eu2 = (0, a.useRef)(0), eh2 = (0, a.useRef)(j2), em2 = (0, s.W)(et2, { once: true, amount: 0.2 }), ep2 = M2.find((e6) => e6.id === D2) ?? M2[0], eg2 = eK(ep2.thread), ef2 = G2?.chatId === ep2.id, e_2 = (0, a.useCallback)((e6) => {
      $2.current = e6($2.current), O2($2.current);
    }, []), ex2 = (0, a.useCallback)(
      (e6, t3) => e_2(
        (n3) => n3.map((n4) => n4.id === e6 ? { ...n4, thread: t3(n4.thread) } : n4)
      ),
      [e_2]
    ), ev2 = (e6) => $2.current.find((t3) => t3.id === e6.chatId)?.thread.turns[e6.turnId]?.versions.find((t3) => t3.id === e6.versionId)?.reply, ej2 = (0, a.useCallback)((e6) => Z2((t3) => ({ text: e6, n: t3.n + 1 })), []), ek2 = N2 ? " (simulated)" : "";
    function eN2() {
      ed2.current = -1, window.clearTimeout(eu2.current);
    }
    function eC2(e6, t3, n3) {
      ei2.current === e6 && (ei2.current = null, X2(null), ej2(
        "done" === t3 ? `Reply finished${ek2}` : "error" === t3 ? `Reply failed: ${n3}` : "Reply stopped"
      ), window.setTimeout(
        () => ex2(
          e6.chatId,
          (t4) => eQ(
            t4,
            e6.turnId,
            e6.versionId,
            (e7) => e7.marks ? { ...e7, marks: void 0 } : e7
          )
        ),
        240
      ), "done" === t3 && e6.chatId === eZ && (0 === ed2.current ? (ed2.current = 1, eu2.current = window.setTimeout(() => {
        1 !== ed2.current || F2.current !== eZ || ei2.current || es2.current?.value || (ed2.current = 2, eM2.current.send(
          "How long will the backfill take at 5,000 rows per batch?",
          [],
          true
        ));
      }, 1500)) : 2 === ed2.current && (ed2.current = -1)));
    }
    async function eA2(e6, t3, n3) {
      let r2 = {
        controller: new AbortController(),
        chatId: e6,
        turnId: t3,
        versionId: n3,
        started: performance.now()
      }, { signal: a2 } = r2.controller;
      ei2.current = r2, X2(r2);
      let s2 = ev2(r2), i2 = I2(s2?.model ?? T2);
      ej2(`${i2.name} is replying${ek2}`);
      let o2 = (r3) => ex2(e6, (e7) => eQ(e7, t3, n3, r3)), l2 = () => Math.max(1, Math.round((performance.now() - r2.started) / 1e3));
      try {
        let n4 = $2.current.find((t4) => t4.id === e6)?.thread ?? eq;
        for await (let e7 of C2(
          (function(e8, t4) {
            let n5 = [];
            for (let { turn: r3, version: a3 } of eK(e8)) {
              if (n5.push({
                id: a3.id,
                role: "user",
                content: a3.prompt,
                attachments: a3.attachments
              }), r3.id === t4)
                break;
              n5.push(eY(a3.reply));
            }
            return n5;
          })(n4, t3),
          { signal: a2, model: i2 }
        )) {
          if (a2.aborted) return;
          if ("reasoning" === e7.type)
            o2((t4) => ({ ...t4, reasoning: t4.reasoning + e7.delta }));
          else if ("reasoning-end" === e7.type)
            o2((t4) => ({ ...t4, thoughtFor: e7.seconds ?? l2() }));
          else if ("tool" === e7.type)
            o2((t4) => ({
              ...t4,
              tools: (function(e8, t5) {
                return e8.some((e9) => e9.id === t5.id) ? e8.map((e9) => e9.id === t5.id ? { ...e9, ...t5 } : e9) : [...e8, t5];
              })(t4.tools, e7.tool)
            }));
          else if ("sources" === e7.type)
            o2((t4) => ({ ...t4, sources: e7.sources }));
          else if ("text" === e7.type)
            o2((t4) => ({
              ...t4,
              text: t4.text + e7.delta,
              status: "streaming",
              thoughtFor: t4.thoughtFor ?? (t4.reasoning ? l2() : void 0)
            }));
          else if ("error" === e7.type) throw Error(e7.message);
        }
        if (a2.aborted) return;
        o2((e7) => ({
          ...e7,
          streamDone: true,
          status: e7.text ? "streaming" : "done",
          thoughtFor: e7.thoughtFor ?? (e7.reasoning ? l2() : void 0)
        })), ev2(r2)?.text || eC2(r2, "done");
      } catch (t4) {
        if (a2.aborted) return;
        let e7 = t4 instanceof Error ? t4.message : String(t4);
        o2((t5) => ({
          ...t5,
          status: "error",
          error: e7,
          text: t5.text.slice(0, t5.shown),
          marks: void 0,
          streamDone: true,
          tools: t5.tools.map(
            (e8) => "running" === e8.status ? { ...e8, status: "error" } : e8
          )
        })), eC2(r2, "error", e7);
      }
    }
    function eE2() {
      let e6 = ei2.current;
      if (!e6) return;
      e6.controller.abort();
      let t3 = Math.max(1, Math.round((performance.now() - e6.started) / 1e3));
      ex2(
        e6.chatId,
        (n3) => eQ(n3, e6.turnId, e6.versionId, (e7) => ({
          ...e7,
          status: "stopped",
          text: e7.text.slice(0, e7.shown),
          streamDone: true,
          thoughtFor: e7.thoughtFor ?? (e7.reasoning ? t3 : void 0),
          tools: e7.tools.map(
            (e8) => "running" === e8.status ? {
              ...e8,
              status: "error",
              name: e8.activeName ?? e8.name,
              summary: "Stopped"
            } : e8
          )
        }))
      ), eC2(e6, "stopped");
    }
    function eL2() {
      eo2.current = true, ee2(false), el2.current();
    }
    function eR2(e6, t3 = K2, n3 = false) {
      let r2 = e6.trim();
      if (!r2 && !t3.length) return;
      n3 || eN2(), ei2.current && eE2();
      let a2 = F2.current, s2 = e0("turn"), i2 = e0("version");
      ex2(
        a2,
        (e7) => (function(e8, t4) {
          let n4 = { ...e8.turns, [t4.id]: t4 }, r3 = eK(e8), a3 = r3[r3.length - 1];
          if (!a3) return { root: t4.id, turns: n4 };
          let s3 = n4[a3.turn.id];
          return n4[s3.id] = {
            ...s3,
            versions: s3.versions.map(
              (e9, n5) => n5 === s3.active ? { ...e9, next: t4.id } : e9
            )
          }, { root: e8.root, turns: n4 };
        })(e7, {
          id: s2,
          versions: [
            {
              id: i2,
              prompt: r2,
              attachments: t3.length ? t3 : void 0,
              reply: eV(e0("reply"), T2),
              next: null
            }
          ],
          active: 0
        })
      ), e_2(
        (e7) => e7.map(
          (e8) => e8.id !== a2 || e8.title ? e8 : { ...e8, title: L(r2 || t3[0].name) }
        )
      ), n3 || (W2(""), Y2([])), eL2(), eA2(a2, s2, i2);
    }
    function eS2(e6, t3) {
      eN2(), ei2.current && eE2();
      let n3 = F2.current, r2 = $2.current.find((e7) => e7.id === n3)?.thread.turns[e6];
      if (!r2) return;
      let a2 = r2.versions[r2.active], s2 = e0("version");
      ex2(
        n3,
        (n4) => eX(n4, e6, (e7) => ({
          ...e7,
          active: e7.versions.length,
          versions: [
            ...e7.versions,
            {
              id: s2,
              prompt: t3 ?? a2.prompt,
              attachments: a2.attachments,
              reply: eV(e0("reply"), T2),
              next: null
            }
          ]
        }))
      ), eL2(), eA2(n3, e6, s2);
    }
    let eI2 = {
      retry: (e6) => eS2(e6),
      edit: (e6, t3) => eS2(e6, t3),
      retryInPlace: (e6, t3) => {
        eN2(), ei2.current && eE2();
        let n3 = F2.current;
        ex2(n3, (n4) => eQ(n4, e6, t3, () => eV(e0("reply"), T2))), eL2(), eA2(n3, e6, t3);
      },
      select: (e6, t3) => {
        ex2(
          F2.current,
          (n4) => eX(n4, e6, (e7) => ({
            ...e7,
            active: Math.max(0, Math.min(e7.versions.length - 1, t3))
          }))
        );
        let n3 = $2.current.find((e7) => e7.id === F2.current)?.thread.turns[e6];
        n3 && ej2(`Version ${n3.active + 1} of ${n3.versions.length}`);
      },
      feedback: (e6, t3, n3) => {
        let r2 = ev2({ chatId: F2.current, turnId: e6, versionId: t3 });
        if (!r2) return;
        let a2 = r2.feedback === n3 ? null : n3;
        ex2(F2.current, (n4) => eQ(n4, e6, t3, (e7) => ({ ...e7, feedback: a2 }))), x2 && x2(eY(r2), a2), ej2(
          a2 ? `Feedback sent: ${"up" === a2 ? "good" : "bad"} response${x2 ? "" : " (simulated)"}` : "Feedback removed"
        );
      },
      copied: (e6) => ej2(e6 ? "Copied to clipboard" : "Could not copy")
    }, eM2 = (0, a.useRef)({ send: eR2, actions: eI2 });
    (0, a.useLayoutEffect)(() => {
      eM2.current = { send: eR2, actions: eI2 };
    });
    let ez2 = (0, a.useMemo)(
      () => ({
        retry: (...e6) => eM2.current.actions.retry(...e6),
        edit: (...e6) => eM2.current.actions.edit(...e6),
        retryInPlace: (...e6) => eM2.current.actions.retryInPlace(...e6),
        select: (...e6) => eM2.current.actions.select(...e6),
        feedback: (...e6) => eM2.current.actions.feedback(...e6),
        copied: (...e6) => eM2.current.actions.copied(...e6)
      }),
      []
    );
    function eD2() {
      let e6 = er2.current;
      e6 && ec2.current.set(F2.current, { top: e6.scrollTop, bottom: eo2.current });
    }
    function eB2(e6) {
      if (e6 === F2.current) return;
      eN2(), eD2(), F2.current = e6, B2(e6);
      let t3 = $2.current.find((t4) => t4.id === e6);
      ej2(`Opened ${t3?.title || "untitled chat"}`);
    }
    function e$2() {
      eN2();
      let e6 = $2.current.find((e7) => !e7.thread.root && !e7.title);
      if (e6) eB2(e6.id);
      else {
        let e7 = e0("chat");
        eD2(), e_2((t3) => [{ id: e7, title: "", group: "Today", thread: eq }, ...t3]), F2.current = e7, B2(e7), ej2("New chat");
      }
      b2?.(), requestAnimationFrame(() => es2.current?.focus({ preventScroll: true }));
    }
    (0, a.useEffect)(() => {
      eh2.current = j2;
    }, [j2]), (0, a.useEffect)(() => {
      if (!G2) return;
      let e6 = 0, t3 = 0, n3 = (r2) => {
        if (e6 = requestAnimationFrame(n3), r2 - t3 < 34) return;
        t3 = r2;
        let a2 = ev2(G2);
        if (!a2 || "streaming" !== a2.status) return;
        if (a2.shown >= a2.text.length) {
          a2.streamDone && (ex2(
            G2.chatId,
            (e7) => eQ(e7, G2.turnId, G2.versionId, (e8) => ({
              ...e8,
              status: "done"
            }))
          ), eC2(G2, "done"));
          return;
        }
        let s2 = (function(e7, t4, n4, r3) {
          let a3 = t4;
          for (let t5 = 0; t5 < n4 && a3 < e7.length; t5 += 1) a3 = V(e7, a3);
          if (a3 >= e7.length && !r3) {
            let n5 = e7.length;
            for (; n5 > t4 && !q(e7[n5 - 1]); ) n5 -= 1;
            a3 = n5;
          }
          if (a3 <= t4) return t4;
          for (let n5 = 0; n5 < 4; n5 += 1) {
            let n6 = e7.lastIndexOf("\n", a3 - 1) + 1, s3 = e7.indexOf("\n", n6), i2 = -1 === s3 ? e7.length : s3;
            if (H.test(e7.slice(n6, i2))) {
              if (-1 !== s3) return Math.max(a3, s3 + 1);
              return r3 ? e7.length : Math.max(t4, n6);
            }
            if (/^\s*(\d+\.|[-*]|#{1,4})\s*$/.test(e7.slice(n6, a3))) {
              let s4 = V(e7, a3);
              if (s4 >= e7.length && !r3) return Math.max(t4, n6);
              a3 = s4;
              continue;
            }
            break;
          }
          return a3;
        })(
          a2.text,
          a2.shown,
          a2.text.length - a2.shown > 600 ? 4 : 3,
          a2.streamDone
        );
        s2 > a2.shown && ex2(
          G2.chatId,
          (e7) => eQ(e7, G2.turnId, G2.versionId, (e8) => ({
            ...e8,
            shown: s2,
            marks: [...e8.marks ?? [], e8.shown]
          }))
        );
      };
      return e6 = requestAnimationFrame(n3), () => cancelAnimationFrame(e6);
    }, [G2]), (0, a.useEffect)(() => {
      let e6 = er2.current, t3 = ea2.current;
      if (!e6 || !t3 || "u" < typeof ResizeObserver) return;
      let n3 = 0, r2 = 0, a2 = () => {
        if (n3 = 0, !eo2.current) return;
        let t4 = e6.scrollHeight - e6.clientHeight - e6.scrollTop;
        t4 <= 0.5 || (e6.scrollTop += eh2.current ? t4 : Math.max(1, 0.22 * t4), n3 = requestAnimationFrame(a2));
      };
      el2.current = () => {
        n3 || (n3 = requestAnimationFrame(a2));
      };
      let s2 = new ResizeObserver(() => el2.current());
      s2.observe(t3), s2.observe(e6);
      let i2 = () => {
        eo2.current = false;
      }, o2 = (e7) => {
        e7.deltaY < 0 && i2();
      }, l2 = (e7) => {
        r2 = e7.touches[0]?.clientY ?? 0;
      }, c3 = (e7) => {
        (e7.touches[0]?.clientY ?? 0) > r2 + 4 && i2();
      }, d3 = (e7) => {
        ["ArrowUp", "PageUp", "Home"].includes(e7.key) && i2();
      }, u3 = (t4) => {
        t4.target === e6 && i2();
      }, h3 = () => {
        let t4 = e6.scrollHeight - e6.clientHeight - e6.scrollTop < 8;
        t4 && (eo2.current = true), ee2(!t4 && !eo2.current);
      };
      return e6.addEventListener("wheel", o2, { passive: true }), e6.addEventListener("touchstart", l2, { passive: true }), e6.addEventListener("touchmove", c3, { passive: true }), e6.addEventListener("keydown", d3), e6.addEventListener("pointerdown", u3), e6.addEventListener("scroll", h3, { passive: true }), () => {
        cancelAnimationFrame(n3), s2.disconnect(), e6.removeEventListener("wheel", o2), e6.removeEventListener("touchstart", l2), e6.removeEventListener("touchmove", c3), e6.removeEventListener("keydown", d3), e6.removeEventListener("pointerdown", u3), e6.removeEventListener("scroll", h3);
      };
    }, []), (0, a.useEffect)(() => {
      if (!em2 || ei2.current) return;
      let e6 = $2.current.find((e7) => e7.id === F2.current), t3 = e6 ? eK(e6.thread).at(-1) : void 0;
      if (!e6 || !t3 || "thinking" !== t3.version.reply.status) return;
      let n3 = window.setTimeout(
        () => {
          ei2.current || eA2(e6.id, t3.turn.id, t3.version.id);
        },
        450 * (0 === ed2.current)
      );
      return () => window.clearTimeout(n3);
    }, [em2]), (0, a.useEffect)(
      () => () => {
        window.clearTimeout(eu2.current), ei2.current?.controller.abort();
      },
      []
    );
    let eP2 = (0, a.useMemo)(() => {
      let e6 = [], t3 = /* @__PURE__ */ new Map();
      for (let n3 of M2)
        t3.has(n3.group) || (t3.set(n3.group, []), e6.push(n3.group)), t3.get(n3.group).push(n3);
      return e6.map((e7) => ({ name: e7, chats: t3.get(e7) }));
    }, [M2]), eF2 = ep2.title || "New chat";
    return (0, r.jsxs)("section", {
      ref: et2,
      className: eb(P().root, w2),
      "aria-label": "AI chat",
      children: [
        (0, r.jsxs)("header", {
          className: P().header,
          children: [
            (0, r.jsxs)(l.bL, {
              modal: false,
              children: [
                (0, r.jsxs)(l.l9, {
                  className: P().titleButton,
                  "aria-label": `Chats, current: ${eF2}`,
                  children: [
                    (0, r.jsx)(ew, {
                      swapKey: `${ep2.id}:${eF2}`,
                      reduced: j2,
                      className: P().titleSwap,
                      children: (0, r.jsx)("span", {
                        className: P().titleText,
                        children: eF2
                      })
                    }),
                    (0, r.jsx)(m.A, {
                      className: P().chipChevron,
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  ]
                }),
                (0, r.jsx)(l.ZL, {
                  children: (0, r.jsxs)(l.UC, {
                    className: eb(P().menu, P().chatMenu),
                    align: "start",
                    sideOffset: 6,
                    collisionPadding: 12,
                    loop: true,
                    children: [
                      (0, r.jsxs)(l.q7, {
                        className: P().menuItem,
                        onSelect: e$2,
                        children: [
                          (0, r.jsx)(p.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: P().menuName,
                            children: "New chat"
                          })
                        ]
                      }),
                      (0, r.jsx)(l.wv, { className: P().menuSeparator }),
                      eP2.map(
                        (e6) => (0, r.jsxs)(
                          l.z6,
                          {
                            value: ep2.id,
                            onValueChange: eB2,
                            children: [
                              (0, r.jsx)(l.JU, {
                                className: P().menuLabel,
                                children: e6.name
                              }),
                              e6.chats.map(
                                (e7) => (0, r.jsxs)(
                                  l.hN,
                                  {
                                    value: e7.id,
                                    className: P().menuItem,
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: P().menuName,
                                        children: e7.title || "Untitled chat"
                                      }),
                                      (0, r.jsx)("span", {
                                        className: P().menuCheck,
                                        children: (0, r.jsx)(l.VF, {
                                          children: (0, r.jsx)(g.A, {
                                            size: 15,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          })
                                        })
                                      })
                                    ]
                                  },
                                  e7.id
                                )
                              )
                            ]
                          },
                          e6.name
                        )
                      )
                    ]
                  })
                })
              ]
            }),
            (0, r.jsx)("span", { className: P().spacer }),
            E2 && (0, r.jsx)(eT, {
              models: n2,
              value: E2,
              onChange: function(e6) {
                let t3 = n2.find((t4) => t4.id === e6);
                t3 && t3.id !== T2 && (A2(t3.id), y2?.(t3), ej2(`${t3.name} selected. New replies use it.`));
              },
              reduced: j2
            }),
            (0, r.jsx)(_.m, {
              content: "New chat",
              side: "bottom",
              children: (0, r.jsx)("button", {
                type: "button",
                className: P().iconButton,
                "aria-label": "New chat",
                onClick: e$2,
                children: (0, r.jsx)(p.A, {
                  size: 18,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: P().body,
          children: [
            (0, r.jsx)("div", {
              ref: er2,
              className: P().scroller,
              children: (0, r.jsx)("div", {
                ref: ea2,
                className: P().content,
                children: (0, r.jsx)(i.N, {
                  mode: "wait",
                  initial: false,
                  children: (0, r.jsx)(
                    e4,
                    {
                      id: ep2.id,
                      reduced: j2,
                      onShow: function(e6) {
                        let t3 = er2.current;
                        if (!t3) return;
                        let n3 = ec2.current.get(e6);
                        !n3 || n3.bottom ? (t3.scrollTop = t3.scrollHeight, eo2.current = true, ee2(false)) : (t3.scrollTop = n3.top, eo2.current = false, ee2(t3.scrollHeight - t3.clientHeight - n3.top > 8));
                      },
                      children: eg2.length ? (0, r.jsx)("div", {
                        className: P().thread,
                        children: eg2.map(
                          ({ turn: e6, version: t3 }, n3) => (0, r.jsx)(
                            eH,
                            {
                              turn: e6,
                              version: t3,
                              model: I2(t3.reply.model),
                              last: n3 === eg2.length - 1,
                              busy: ef2,
                              reduced: j2,
                              actions: ez2
                            },
                            e6.id
                          )
                        )
                      }) : (0, r.jsxs)("div", {
                        className: P().empty,
                        children: [
                          (0, r.jsx)("h2", {
                            className: P().greeting,
                            children: u2
                          }),
                          (0, r.jsx)("ul", {
                            className: P().suggestions,
                            children: d2.map((e6) => {
                              let t3 = e1[e6.icon ?? "search"];
                              return (0, r.jsx)(
                                "li",
                                {
                                  children: (0, r.jsxs)("button", {
                                    type: "button",
                                    className: P().suggestion,
                                    onClick: () => eR2(e6.prompt ?? e6.label, []),
                                    children: [
                                      (0, r.jsx)(t3, {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      }),
                                      e6.label
                                    ]
                                  })
                                },
                                e6.label
                              );
                            })
                          })
                        ]
                      })
                    },
                    ep2.id
                  )
                })
              })
            }),
            (0, r.jsx)(i.N, {
              children: J2 && (0, r.jsx)(
                o.PY1.button,
                {
                  type: "button",
                  className: P().jump,
                  "aria-label": "Scroll to latest message",
                  initial: { opacity: 0, y: 4 * !j2 },
                  animate: { opacity: 1, y: 0 },
                  exit: {
                    opacity: 0,
                    y: 4 * !j2,
                    transition: { duration: 0.1 }
                  },
                  transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
                  onClick: () => {
                    eo2.current = true, ee2(false), er2.current?.scrollTo({
                      top: er2.current.scrollHeight,
                      behavior: j2 ? "auto" : "smooth"
                    });
                  },
                  children: (0, r.jsx)(f.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                },
                "jump"
              )
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: P().composerDock,
          children: (0, r.jsx)(eO, {
            value: U2,
            busy: ef2,
            placeholder: h2,
            attachments: K2,
            inputRef: es2,
            reduced: j2,
            onChange: (e6) => {
              eN2(), W2(e6);
            },
            onSubmit: () => eR2(U2),
            onStop: eE2,
            onAttach: (e6) => {
              eN2(), Y2(
                (t3) => [
                  ...t3,
                  ...e6.map((e7) => ({
                    id: e0("file"),
                    name: e7.name,
                    size: e7.size,
                    type: e7.type
                  }))
                ].slice(0, 4)
              ), ej2(
                `${1 === e6.length ? e6[0].name : `${e6.length} files`} attached`
              );
            },
            onRemove: (e6) => Y2((t3) => t3.filter((t4) => t4.id !== e6))
          })
        }),
        (0, r.jsxs)("p", {
          className: P().srOnly,
          role: "status",
          "aria-live": "polite",
          children: [Q2.text, Q2.n % 2 ? "\xA0" : ""]
        })
      ]
    });
  }
  function e4({ id: e3, reduced: t2, onShow: n2, children: s2 }) {
    let i2 = (0, a.useRef)(n2);
    return (0, a.useLayoutEffect)(() => {
      i2.current(e3);
    }, [e3]), (0, r.jsx)(o.PY1.div, {
      className: P().pane,
      initial: { opacity: 0, y: 4 * !t2 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, transition: { duration: 0.1 * !t2 } },
      transition: { duration: 0.16 * !t2, ease: [0.22, 1, 0.36, 1] },
      children: s2
    });
  }
  let e5 = e2;
};

__m(__module,__exports,__require);
});
A.reg(50626, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = n(51811);
  let o = {
    name: "globe",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "path",
        { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
      ],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]
  };
  o.node;
  let a = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(62818, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "thumbs-up",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
          key: "emmmcr"
        }
      ],
      ["path", { d: "M7 10v12", key: "1qc93n" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(69618, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "square-pen",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
          key: "1m0v6g"
        }
      ],
      [
        "path",
        {
          d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
          key: "ohrbg2"
        }
      ]
    ],
    aliases: ["pen-box", "edit", "pen-square"]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(70105, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "thumbs-down",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
          key: "m61m77"
        }
      ],
      ["path", { d: "M17 14V2", key: "8ymqnk" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(74211, ".root{--pad:clamp(16px,4.5cqi,28px);--mono:ui-monospace,\"SF Mono\",Menlo,Consolas,monospace;container-type:inline-size;position:relative;display:flex;flex-direction:column;width:100%;height:var(--chat-height,100dvh);overflow:hidden;background:var(--background);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-base);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.menu,.menu *,.root,.root *,.root :after,.root :before{box-sizing:border-box}\n.menu{z-index:70;min-width:240px;max-width:min(320px,calc(100vw - 24px));max-height:min(420px,var(--radix-dropdown-menu-content-available-height,420px));overflow-y:auto;padding:6px;border:1px solid var(--border);border-radius:18px;background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);transform-origin:var(--radix-dropdown-menu-content-transform-origin);outline:none}\n.menu[data-state=open]{animation:menuIn .16s var(--ease-enter)}\n.menu[data-state=closed]{animation:menuOut .11s var(--ease-standard) forwards}\n@media (prefers-reduced-motion:reduce){.chunk,.fadeIn,.menu[data-state=closed],.menu[data-state=open]{animation:none}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.mark{display:block;width:16px;height:16px;flex:none}\n.modelChip .mark{width:15px;height:15px}\n.toolIcon,.toolIcon .mark{width:14px;height:14px}\n.toolMarks .mark{width:13px;height:13px}\n.sourceRow .mark{width:14px;height:14px}\n.fadeIn{animation:fadeIn .16s var(--ease-standard) both}\n.chunk{animation:chunkIn .15s var(--ease-standard) both}\n.clip{overflow:clip;overflow-clip-margin:4px}\n.spin{animation:spin .9s linear infinite}\n.spin{animation-duration:2.4s}\n.swap{position:relative;white-space:nowrap}\n.swapItem,.swap{display:inline-flex;min-width:0;align-items:center}\n.swapItem{max-width:100%;gap:6px}\n.iconCell{position:relative;display:grid;width:16px;height:16px;flex:none}\n.iconCell>*{display:grid;grid-area:1/1;place-items:center}\n.header{display:flex;flex:none;height:52px;align-items:center;gap:2px;padding:0 10px 0 calc(var(--pad) - 10px);border-bottom:1px solid var(--border-subtle)}\n.modelChip,.titleButton{display:inline-flex;height:34px;min-width:0;align-items:center;gap:6px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.titleButton{flex:0 1 auto;padding:0 8px 0 10px;font-weight:500}\n.modelChip[data-state=open] .chipChevron,.titleButton[data-state=open] .chipChevron{transform:rotate(180deg)}\n@media (hover:hover) and (pointer:fine){.iconButton:hover,.modelChip:hover,.roundButton:hover,.titleButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.modelChip[data-state=open],.titleButton[data-state=open]{background:var(--surface-muted)}\n.modelChip{flex:none;padding:0 8px 0 10px;color:var(--foreground)}\n@container (max-width: 360px){.modelChip{padding-inline:8px 6px}\n.titleSwap{max-width:100%}\n.titleText{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis}\n.spacer{flex:1;min-width:8px}\n.modelName{white-space:nowrap}\n.chipChevron{flex:none;color:var(--text-muted);transition:transform var(--duration-fast) var(--ease-standard)}\n.action,.chipChevron,.field,.hoverable,.send,.thoughtChevron{transition:none}\n.iconButton,.roundButton{display:grid;width:34px;height:34px;flex:none;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.chatMenu{min-width:260px}\n.menuItem{display:flex;height:36px;align-items:center;gap:10px;padding:0 10px;border-radius:12px;color:var(--foreground);cursor:pointer;outline:none;user-select:none;transition:background-color .12s var(--ease-standard)}\n.menuItem[data-highlighted]{background:var(--surface-muted)}\n.menuItem>svg{flex:none;color:var(--text-secondary)}\n.menuName{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.menuNote{flex:none;color:var(--text-muted);font-size:var(--text-xs)}\n.menuCheck{display:grid;width:16px;flex:none;place-items:center;color:var(--foreground)}\n.menuLabel{padding:10px 10px 4px;color:var(--text-muted);font-size:var(--text-xs)}\n.menuSeparator{height:1px;margin:6px 4px;background:var(--border-subtle)}\n.body{position:relative;display:flex;flex:1;min-height:0;flex-direction:column}\n.scroller{position:relative;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}\n.content{display:flex;min-height:100%;flex-direction:column}\n.pane{display:flex;flex:1;flex-direction:column}\n.thread{display:flex;flex-direction:column;gap:28px;padding:24px var(--pad) 12px}\n.composerDock,.thread{width:100%;max-width:calc(var(--chat-column, 760px) + 2 * var(--pad));margin-inline:auto}\n.thread{gap:24px;padding-top:18px}\n.turn{min-width:0}\n.turn:focus-within .hoverable,.turn:hover .hoverable,.turn[data-last] .actionGroup{opacity:1}\n.turnBody{display:flex;flex-direction:column;gap:14px}\n.userRow{display:flex;min-width:0;align-items:flex-end;justify-content:flex-end;gap:4px}\n.userRow:not(:hover):not(:focus-within) .userActions{opacity:0}\n@media (hover:none){.hoverable,.userRow:not(:hover):not(:focus-within) .userActions.hoverable{opacity:1}\n.bubble{max-width:min(82%,34rem);padding:10px 16px;border-radius:20px;background:var(--surface-muted);color:var(--foreground);line-height:1.5;overflow-wrap:anywhere}\n.bubble .inlineCode{background:color-mix(in oklab,var(--foreground) 7%,transparent)}\n@container (max-width: 480px){.bubble{max-width:88%}\n.bubbleText{margin:0;white-space:pre-wrap}\n.bubbleFiles{display:flex;flex-wrap:wrap;gap:6px;margin:2px 0 8px;padding:0;list-style:none}\n.bubbleFiles li{display:inline-flex;max-width:100%;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-sm)}\n.userActions{display:flex;flex:none;gap:0;padding-bottom:4px}\n.editor{display:grid;width:min(100%,34rem);gap:8px;padding:10px;border:1px solid var(--border-strong);border-radius:20px;background:var(--surface)}\n.editorInput{display:block;width:100%;resize:none;padding:2px 6px;border:0;outline:none;background:transparent;color:var(--foreground);font:inherit;line-height:1.5;field-sizing:content;max-height:12rem}\n.editorBar{display:flex;justify-content:flex-end;gap:6px}\n.reply{display:flex;min-width:0;flex-direction:column;gap:10px}\n.reasoning{min-width:0}\n.replyHead{display:flex;min-height:28px;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-sm)}\n.replyMark{display:grid;width:22px;height:22px;flex:none;place-items:center}\n.thoughtButton{display:inline-flex;min-width:0;height:28px;align-items:center;gap:2px;padding:0 6px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.thoughtButton:disabled{cursor:default}\n@media (hover:hover) and (pointer:fine){.thoughtButton:not(:disabled):hover{color:var(--foreground)}\n.thoughtChevron{flex:none;color:var(--text-muted);transition:transform .2s var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.thoughtChevron[data-open]{transform:rotate(90deg)}\n.thoughtChevron[data-hidden]{opacity:0}\n.thoughtText{max-height:11rem;margin:6px 0 2px 10px;padding:2px 0 2px 16px;overflow-y:auto;border-left:1px solid var(--border);color:var(--text-secondary);font-size:var(--text-sm);line-height:1.6}\n.tools{min-width:0}\n.toolRow{display:flex;flex-wrap:wrap;gap:6px}\n.toolChip{display:inline-flex;max-width:100%;height:30px;align-items:center;gap:8px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.toolChip:disabled{cursor:default}\n@media (hover:hover) and (pointer:fine){.toolChip:not(:disabled):hover{border-color:var(--border-strong);color:var(--foreground)}\n.toolChip[aria-expanded=true]{background:var(--surface-muted);color:var(--foreground)}\n.toolChip[data-status=error] .toolIcon{color:var(--danger)}\n.toolIcon{color:var(--text-secondary)}\n.toolName{overflow:hidden;text-overflow:ellipsis}\n.toolMarks{display:inline-flex;align-items:center;gap:3px}\n.toolSummary{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.toolDetail{display:grid;gap:10px;margin-top:8px;padding:12px 14px;border:1px solid var(--border-subtle);border-radius:16px;font-size:var(--text-sm)}\n.queries,.sourceList{display:grid;gap:4px;margin:0;padding:0;list-style:none}\n.queries li{display:flex;align-items:center;gap:8px;color:var(--text-secondary)}\n.queries svg{flex:none;color:var(--text-muted)}\n.sourceList{gap:0;margin-inline:-8px}\n.sourceRow{display:flex;min-width:0;height:32px;align-items:center;gap:10px;padding:0 8px;border-radius:10px;color:var(--foreground);text-decoration:none;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.sourceRow:hover{background:var(--surface-muted)}\n.sourceRowTitle{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.sourceRowDomain{flex:none;margin-left:auto;color:var(--text-muted);font-size:var(--text-xs)}\n.sourceRowDomain{display:none}\n.toolCode{margin:0;overflow-x:auto;color:var(--foreground);font-family:var(--mono);font-size:var(--text-xs);line-height:1.6;white-space:pre}\n.toolOutput{display:flex;align-items:baseline;gap:10px;margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.toolOutputValue{color:var(--foreground);font-family:var(--mono);font-variant-numeric:tabular-nums}\n.markdown{display:flex;min-width:0;flex-direction:column;gap:12px;color:var(--foreground);font-size:var(--text-base);line-height:1.6;overflow-wrap:break-word}\n.paragraph{margin:0}\n.heading{margin:4px 0 0;font-size:var(--text-base);font-weight:500;line-height:1.4}\n.list{display:grid;gap:6px;margin:0;padding-left:1.5em;list-style:decimal}\nul.list{list-style:disc}\n.list li{padding-left:2px}\n.list li::marker{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.strong{font-weight:500}\n.inlineCode{padding:.08em .36em;border-radius:6px;background:var(--surface-muted);font-family:var(--mono);font-size:.86em;overflow-wrap:anywhere}\n.cite{display:inline-grid;min-width:18px;height:18px;place-items:center;margin-inline:1px;padding:0 5px;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:11px;font-variant-numeric:tabular-nums;line-height:1;text-decoration:none;vertical-align:2px;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);--focus-outline-offset:1px}\n.cite[data-hover-card=open]{background:var(--foreground);color:var(--background)}\n@media (hover:hover) and (pointer:fine){a.cite:hover{background:color-mix(in oklab,var(--foreground) 12%,var(--surface-muted));color:var(--foreground)}\na.cite[data-hover-card=open]:hover{background:var(--foreground);color:var(--background)}\n.sourceCard{width:18rem;padding:14px 16px}\n.sourcePreview{display:grid;gap:6px}\n.sourceSite{display:flex;align-items:center;gap:8px;margin:0;color:var(--text-secondary);font-size:var(--text-xs)}\n.sourceMark{width:14px;height:14px;flex:none}\n.sourceN{margin-left:auto;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.sourceTitle{margin:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:1.4}\n.sourceSnippet{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:1.5}\n.codeBlock{min-width:0;overflow:hidden;border:1px solid var(--border-subtle);border-radius:16px;background:color-mix(in oklab,var(--surface-muted) 70%,var(--surface))}\n.codeHead{display:flex;height:36px;align-items:center;justify-content:space-between;padding:0 4px 0 14px;border-bottom:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs)}\n.codeHead .codeCopy{min-height:28px;gap:6px;padding:0 8px;border-radius:10px;font-size:var(--text-xs);font-weight:400}\n.codeLang{font-family:var(--mono)}\n.codePre{margin:0;padding:12px 14px 14px;overflow-x:auto;color:var(--foreground);font-family:var(--mono);font-size:13px;line-height:1.65;tab-size:2;scrollbar-width:thin}\n.codePre{font-size:var(--text-xs)}\n.tokKeyword{color:color-mix(in oklab,var(--series-1) 82%,var(--foreground))}\n.tokString{color:color-mix(in oklab,var(--series-4) 82%,var(--foreground))}\n.tokNumber{color:color-mix(in oklab,var(--series-3) 82%,var(--foreground))}\n.tokComment{color:var(--text-muted)}\n.actions{display:flex;height:30px;align-items:center;gap:4px;margin:-2px 0 0 -6px;transition:opacity var(--duration-fast) var(--ease-standard)}\n.actions[data-hidden]{visibility:hidden;opacity:0;transition:none}\n.actionGroup{display:flex;align-items:center;gap:0}\n.hoverable{opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.action{display:grid;width:30px;height:30px;place-items:center;padding:0;border:0;border-radius:10px;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring);-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.action:not(:disabled):hover{background:var(--surface-muted);color:var(--foreground)}\n.action:active:not(:disabled){transform:scale(.92);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-instant)}\n.action:disabled{cursor:default;opacity:.4}\n.action[aria-pressed=true]{color:var(--foreground)}\n.action:active:not(:disabled),.send:active:not(:disabled){transform:none}\n.copyIcon [data-state=copied]{color:var(--success)}\n.copyIcon [data-state=error]{color:var(--danger)}\n.versions{display:inline-flex;align-items:center;margin-right:4px;color:var(--text-secondary);font-size:var(--text-sm)}\n.versionButton{display:grid;width:26px;height:28px;place-items:center;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}\n.versionButton:disabled{cursor:default;opacity:.35}\n@media (hover:hover) and (pointer:fine){.versionButton:not(:disabled):hover{color:var(--foreground);background:var(--surface-muted)}\n.versionCount{min-width:3.4em;font-variant-numeric:tabular-nums;text-align:center}\n.statusLine{gap:8px;margin:0;color:var(--text-muted)}\n.error,.statusLine{display:flex;align-items:center;font-size:var(--text-sm)}\n.error{gap:10px;padding:8px 8px 8px 14px;border:1px solid color-mix(in oklab,var(--danger) 26%,var(--border));border-radius:16px;background:color-mix(in oklab,var(--danger) 5%,var(--surface))}\n.errorIcon{flex:none;color:var(--danger)}\n.errorText{flex:1;min-width:0;margin:0;color:var(--text-secondary);line-height:1.45}\n.errorTitle{color:var(--foreground);font-weight:500}\n.empty{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:22px;padding:32px var(--pad)}\n.greeting{margin:0;font-size:var(--text-xl);font-weight:400;letter-spacing:-.02em;line-height:1.25;text-align:center;text-wrap:balance}\n.suggestions{display:grid;width:min(100%,23rem);gap:6px;margin:0;padding:0;list-style:none}\n.suggestion{display:flex;width:100%;min-height:44px;align-items:center;gap:12px;padding:0 16px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--text-secondary);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.suggestion svg{flex:none;color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.suggestion:hover{border-color:var(--border-strong);background:var(--surface-muted);color:var(--foreground)}\n.jump{position:absolute;z-index:2;right:0;bottom:10px;left:0;display:grid;width:34px;height:34px;place-items:center;margin-inline:auto;padding:0;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-raised);color:var(--text-secondary);box-shadow:var(--shadow-raised);cursor:pointer}\n@media (hover:hover) and (pointer:fine){.jump:hover{color:var(--foreground)}\n.composerDock{flex:none;padding:6px calc(var(--pad) - 8px) 12px}\n.composer{display:flex;flex-direction:column;gap:6px;padding:7px;border:1px solid var(--border);border-radius:24px;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n.composer:focus-within{border-color:var(--border-strong)}\n.composerRow{display:flex;align-items:flex-end;gap:4px}\n.field{position:relative;flex:1;min-width:0;transition:height var(--duration-fast) var(--ease-standard)}\n.input,.mirror{display:block;width:100%;padding:6px 4px;font:inherit;font-size:var(--text-base);line-height:24px;letter-spacing:var(--tracking-body);overflow-wrap:break-word;white-space:pre-wrap}\n.input{height:100%;resize:none;overflow-y:auto;border:0;outline:none;background:transparent;color:var(--foreground);scrollbar-width:thin}\n.input::placeholder{color:var(--text-muted)}\n.mirror{position:absolute;top:0;right:0;left:0;visibility:hidden;pointer-events:none}\n.send{display:grid;width:36px;height:36px;flex:none;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring);-webkit-tap-highlight-color:transparent}\n.send:disabled{background:var(--surface-muted);color:var(--text-muted);cursor:default}\n@media (hover:hover) and (pointer:fine){.send:not(:disabled):hover{background:var(--accent-strong)}\n.send:active:not(:disabled){transform:scale(.94);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-instant)}\n.attachRow{display:flex;flex-wrap:wrap;gap:6px;margin:0;padding:2px 2px 0;list-style:none}\n.attachChip{display:inline-flex;max-width:100%;height:32px;align-items:center;gap:6px;padding:0 4px 0 10px;border-radius:12px;background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-sm)}\n.attachChip>svg{flex:none}\n.attachName{min-width:0;max-width:12rem;overflow:hidden;color:var(--foreground);text-overflow:ellipsis;white-space:nowrap}\n.attachSize{flex:none;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.attachRemove{display:grid;width:24px;height:24px;flex:none;place-items:center;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-muted);cursor:pointer}\n@media (hover:hover) and (pointer:fine){.attachRemove:hover{background:color-mix(in oklab,var(--foreground) 8%,transparent);color:var(--foreground)}", {"root":"root","menu":"menu","chunk":"chunk","fadeIn":"fadeIn","srOnly":"srOnly","mark":"mark","modelChip":"modelChip","toolIcon":"toolIcon","toolMarks":"toolMarks","sourceRow":"sourceRow","clip":"clip","spin":"spin","swap":"swap","swapItem":"swapItem","iconCell":"iconCell","header":"header","titleButton":"titleButton","chipChevron":"chipChevron","iconButton":"iconButton","roundButton":"roundButton","titleSwap":"titleSwap","titleText":"titleText","spacer":"spacer","modelName":"modelName","action":"action","field":"field","hoverable":"hoverable","send":"send","thoughtChevron":"thoughtChevron","chatMenu":"chatMenu","menuItem":"menuItem","menuName":"menuName","menuNote":"menuNote","menuCheck":"menuCheck","menuLabel":"menuLabel","menuSeparator":"menuSeparator","body":"body","scroller":"scroller","content":"content","pane":"pane","thread":"thread","composerDock":"composerDock","turn":"turn","actionGroup":"actionGroup","turnBody":"turnBody","userRow":"userRow","userActions":"userActions","bubble":"bubble","inlineCode":"inlineCode","bubbleText":"bubbleText","bubbleFiles":"bubbleFiles","editor":"editor","editorInput":"editorInput","editorBar":"editorBar","reply":"reply","reasoning":"reasoning","replyHead":"replyHead","replyMark":"replyMark","thoughtButton":"thoughtButton","thoughtText":"thoughtText","tools":"tools","toolRow":"toolRow","toolChip":"toolChip","toolName":"toolName","toolSummary":"toolSummary","toolDetail":"toolDetail","queries":"queries","sourceList":"sourceList","sourceRowTitle":"sourceRowTitle","sourceRowDomain":"sourceRowDomain","toolCode":"toolCode","toolOutput":"toolOutput","toolOutputValue":"toolOutputValue","markdown":"markdown","paragraph":"paragraph","heading":"heading","list":"list","strong":"strong","cite":"cite","sourceCard":"sourceCard","sourcePreview":"sourcePreview","sourceSite":"sourceSite","sourceMark":"sourceMark","sourceN":"sourceN","sourceTitle":"sourceTitle","sourceSnippet":"sourceSnippet","codeBlock":"codeBlock","codeHead":"codeHead","codeCopy":"codeCopy","codeLang":"codeLang","codePre":"codePre","tokKeyword":"tokKeyword","tokString":"tokString","tokNumber":"tokNumber","tokComment":"tokComment","actions":"actions","copyIcon":"copyIcon","versions":"versions","versionButton":"versionButton","versionCount":"versionCount","statusLine":"statusLine","error":"error","errorIcon":"errorIcon","errorText":"errorText","errorTitle":"errorTitle","empty":"empty","greeting":"greeting","suggestions":"suggestions","suggestion":"suggestion","jump":"jump","composer":"composer","composerRow":"composerRow","input":"input","mirror":"mirror","attachRow":"attachRow","attachChip":"attachChip","attachName":"attachName","attachSize":"attachSize","attachRemove":"attachRemove"});
A.regCss(80362, ".card{z-index:60;box-sizing:border-box;width:18.5rem;max-width:min(18.5rem,var(--radix-popover-content-available-width,calc(100vw - 24px)));padding:var(--space-4);border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);font-family:var(--font-body);letter-spacing:var(--tracking-body);transform-origin:var(--radix-popover-content-transform-origin);outline:none}\n.profile{display:grid;gap:var(--space-3)}\n.head{display:flex;min-width:0;align-items:center;gap:var(--space-3)}\n.avatar{position:relative;display:grid;width:48px;height:48px;flex:none;place-items:center;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--foreground);font-size:var(--text-sm);font-weight:500}\n.avatar img{display:block;width:100%;height:100%;object-fit:cover;transition:opacity var(--duration-standard) var(--ease-enter),filter var(--duration-standard) var(--ease-enter)}\n.avatar img[data-loading]{opacity:0;filter:blur(4px);transition:none}\n@media (prefers-reduced-motion:reduce){.avatar img{transition:none}\n.avatar img[data-loading]{filter:none}\n.identity{display:grid;min-width:0}\n.name,.role{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.name{color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.bio,.role{color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.bio{margin:0}\n.stats{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-6);margin:0;padding-top:var(--space-3);border-top:1px solid var(--border-subtle)}\n.stat{display:flex;flex-direction:column-reverse}\n.stat dt{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.stat dd{margin:0;color:var(--foreground);font-size:var(--text-base);font-variant-numeric:tabular-nums;font-weight:500;line-height:var(--leading-body)}\n.meta{display:flex;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.meta svg{flex:none}", {});
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
A.cssFor("ai-chat", [74211,80362]);
A.item("ai-chat", {entry:45624, export:"AiChat", kind:"block", tier:"pro", unresolved:[]});
})();