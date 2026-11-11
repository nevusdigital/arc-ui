function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { Kq: () => Y, UC: () => J, ZL: () => V, bL: () => Z, l9: () => Q });
  var r = n(12115), o = n(70379), i = n(47527), l = n(68599), a = n(19416), s = n(89971), u = n(80878), c = n(19040), d = n(83935), p = n(55897), f = n(42442), g = n(59322), h = n(66294), x = n(40562), v = n(95155), b = Object.defineProperty, y = (e2, t2) => b(e2, "name", { value: t2, configurable: true }), [m, w] = (0, l.A)("Tooltip", [u.Bk]), C = (0, u.Bk)(), T = "tooltip.open", [E, k] = m("TooltipProvider"), L = y((e2) => {
    let {
      __scopeTooltip: t2,
      delayDuration: n2 = 700,
      skipDelayDuration: o2 = 300,
      disableHoverableContent: i2 = false,
      children: l2
    } = e2, a2 = r.useRef(true), s2 = r.useRef(false), u2 = r.useRef(0);
    return r.useEffect(() => {
      let e3 = u2.current;
      return () => window.clearTimeout(e3);
    }, []), (0, v.jsx)(E, {
      scope: t2,
      isOpenDelayedRef: a2,
      delayDuration: n2,
      onOpen: r.useCallback(() => {
        o2 <= 0 || (window.clearTimeout(u2.current), a2.current = false);
      }, [o2]),
      onClose: r.useCallback(() => {
        o2 <= 0 || (window.clearTimeout(u2.current), u2.current = window.setTimeout(() => a2.current = true, o2));
      }, [o2]),
      isPointerInTransitRef: s2,
      onPointerInTransitChange: r.useCallback((e3) => {
        s2.current = e3;
      }, []),
      disableHoverableContent: i2,
      children: l2
    });
  }, "TooltipProvider"), P = "Tooltip", [R, j] = m(P), _ = y((e2) => {
    let {
      __scopeTooltip: t2,
      children: n2,
      open: o2,
      defaultOpen: i2,
      onOpenChange: l2,
      disableHoverableContent: a2,
      delayDuration: c2
    } = e2, d2 = k(P, e2.__scopeTooltip), p2 = C(t2), [f2, h2] = r.useState(null), [x2, b2] = r.useState(void 0), m2 = (0, s.B)(), w2 = r.useRef(0), E2 = a2 ?? d2.disableHoverableContent, L2 = c2 ?? d2.delayDuration, j2 = r.useRef(false), [_2, M2] = (0, g.i)({
      prop: o2,
      defaultProp: i2 ?? false,
      onChange: y((e3) => {
        e3 ? (d2.onOpen(), document.dispatchEvent(new CustomEvent(T))) : d2.onClose(), l2?.(e3);
      }, "onChange"),
      caller: P
    }), O2 = r.useMemo(
      () => _2 ? j2.current ? "delayed-open" : "instant-open" : "closed",
      [_2]
    ), D2 = r.useCallback(() => {
      window.clearTimeout(w2.current), w2.current = 0, j2.current = false, M2(true);
    }, [M2]), I2 = r.useCallback(() => {
      window.clearTimeout(w2.current), w2.current = 0, M2(false);
    }, [M2]), B2 = r.useCallback(() => {
      window.clearTimeout(w2.current), w2.current = window.setTimeout(() => {
        j2.current = true, M2(true), w2.current = 0;
      }, L2);
    }, [L2, M2]);
    return r.useEffect(
      () => () => {
        w2.current && (window.clearTimeout(w2.current), w2.current = 0);
      },
      []
    ), (0, v.jsx)(u.bL, {
      ...p2,
      children: (0, v.jsx)(R, {
        scope: t2,
        contentId: x2 ?? m2,
        setContentId: b2,
        open: _2,
        stateAttribute: O2,
        trigger: f2,
        onTriggerChange: h2,
        onTriggerEnter: r.useCallback(() => {
          d2.isOpenDelayedRef.current ? B2() : D2();
        }, [d2.isOpenDelayedRef, B2, D2]),
        onTriggerLeave: r.useCallback(() => {
          E2 ? I2() : (window.clearTimeout(w2.current), w2.current = 0);
        }, [I2, E2]),
        onOpen: D2,
        onClose: I2,
        disableHoverableContent: E2,
        children: n2
      })
    });
  }, "Tooltip"), M = "TooltipTrigger", O = r.forwardRef(
    y(function(e2, t2) {
      let { __scopeTooltip: n2, ...l2 } = e2, a2 = j(M, n2), s2 = k(M, n2), c2 = C(n2), d2 = r.useRef(null), f2 = (0, i.s)(t2, d2, a2.onTriggerChange), g2 = r.useRef(false), h2 = r.useRef(false), x2 = r.useCallback(() => g2.current = false, []);
      return r.useEffect(
        () => () => document.removeEventListener("pointerup", x2),
        [x2]
      ), (0, v.jsx)(u.Mz, {
        asChild: true,
        ...c2,
        children: (0, v.jsx)(p.sG.button, {
          "aria-describedby": a2.open ? a2.contentId : void 0,
          "data-state": a2.stateAttribute,
          ...l2,
          ref: f2,
          onPointerMove: (0, o.mK)(e2.onPointerMove, (e3) => {
            "touch" !== e3.pointerType && (h2.current || s2.isPointerInTransitRef.current || (a2.onTriggerEnter(), h2.current = true));
          }),
          onPointerLeave: (0, o.mK)(e2.onPointerLeave, () => {
            a2.onTriggerLeave(), h2.current = false;
          }),
          onPointerDown: (0, o.mK)(e2.onPointerDown, () => {
            a2.open && a2.onClose(), g2.current = true, document.addEventListener("pointerup", x2, { once: true });
          }),
          onFocus: (0, o.mK)(e2.onFocus, () => {
            g2.current || a2.onOpen();
          }),
          onBlur: (0, o.mK)(e2.onBlur, a2.onClose),
          onClick: (0, o.mK)(e2.onClick, a2.onClose)
        })
      });
    }, "TooltipTrigger")
  ), D = "TooltipPortal", [I, B] = m(D, { forceMount: void 0 }), H = y((e2) => {
    let { __scopeTooltip: t2, forceMount: n2, children: r2, container: o2 } = e2, i2 = j(D, t2);
    return (0, v.jsx)(I, {
      scope: t2,
      forceMount: n2,
      children: (0, v.jsx)(d.C, {
        present: n2 || i2.open,
        children: (0, v.jsx)(c.Z, { asChild: true, container: o2, children: r2 })
      })
    });
  }, "TooltipPortal"), K = "TooltipContent", S = r.forwardRef(
    y(function(e2, t2) {
      let n2 = B(K, e2.__scopeTooltip), { forceMount: r2 = n2.forceMount, side: o2 = "top", ...i2 } = e2, l2 = j(K, e2.__scopeTooltip);
      return (0, v.jsx)(d.C, {
        present: r2 || l2.open,
        children: l2.disableHoverableContent ? (0, v.jsx)(A, { side: o2, ...i2, ref: t2 }) : (0, v.jsx)(F, { side: o2, ...i2, ref: t2 })
      });
    }, "TooltipContent")
  ), F = r.forwardRef(
    y(function(e2, t2) {
      let n2 = j(K, e2.__scopeTooltip), o2 = k(K, e2.__scopeTooltip), l2 = r.useRef(null), a2 = (0, i.s)(t2, l2), [s2, u2] = r.useState(null), { trigger: c2, onClose: d2 } = n2, p2 = l2.current, { onPointerInTransitChange: f2 } = o2, g2 = r.useCallback(() => {
        u2(null), f2(false);
      }, [f2]), h2 = r.useCallback(
        (e3, t3) => {
          let n3 = e3.currentTarget, r2 = { x: e3.clientX, y: e3.clientY }, o3 = G(r2, n3.getBoundingClientRect());
          u2(W([...q(r2, o3), ...z(t3.getBoundingClientRect())])), f2(true);
        },
        [f2]
      );
      return r.useEffect(() => () => g2(), [g2]), r.useEffect(() => {
        if (c2 && p2) {
          let e3 = y((e4) => h2(e4, p2), "handleTriggerLeave"), t3 = y((e4) => h2(e4, c2), "handleContentLeave");
          return c2.addEventListener("pointerleave", e3), p2.addEventListener("pointerleave", t3), () => {
            c2.removeEventListener("pointerleave", e3), p2.removeEventListener("pointerleave", t3);
          };
        }
      }, [c2, p2, h2, g2]), r.useEffect(() => {
        if (s2) {
          let e3 = y((e4) => {
            let t3 = e4.target, n3 = { x: e4.clientX, y: e4.clientY }, r2 = c2?.contains(t3) || p2?.contains(t3), o3 = !U(n3, s2);
            r2 ? g2() : o3 && (g2(), d2());
          }, "handleTrackPointerGrace");
          return document.addEventListener("pointermove", e3), () => document.removeEventListener("pointermove", e3);
        }
      }, [c2, p2, s2, d2, g2]), (0, v.jsx)(A, { ...e2, ref: a2 });
    }, "TooltipContentHoverable")
  ), N = (0, f.Dc)("TooltipContent"), A = r.forwardRef(
    y(function(e2, t2) {
      let {
        __scopeTooltip: n2,
        children: o2,
        "aria-label": i2,
        id: l2,
        onEscapeKeyDown: s2,
        onPointerDownOutside: c2,
        ...d2
      } = e2, p2 = j(K, n2), f2 = C(n2), { onClose: g2 } = p2;
      r.useEffect(
        () => (document.addEventListener(T, g2), () => document.removeEventListener(T, g2)),
        [g2]
      ), r.useEffect(() => {
        if (p2.trigger) {
          let e3 = y((e4) => {
            e4.target instanceof Node && e4.target.contains(p2.trigger) && g2();
          }, "handleScroll");
          return window.addEventListener("scroll", e3, { capture: true }), () => window.removeEventListener("scroll", e3, { capture: true });
        }
      }, [p2.trigger, g2]);
      let { setContentId: b2 } = p2;
      return (0, h.N)(
        () => (b2(l2), () => {
          b2(void 0);
        }),
        [l2, b2]
      ), (0, v.jsx)(a.qW, {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown: s2,
        onPointerDownOutside: c2,
        onFocusOutside: (e3) => e3.preventDefault(),
        onDismiss: g2,
        children: (0, v.jsxs)(u.UC, {
          "data-state": p2.stateAttribute,
          role: i2 ? void 0 : "tooltip",
          id: i2 ? void 0 : p2.contentId,
          ...f2,
          ...d2,
          ref: t2,
          style: {
            ...d2.style,
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
          },
          children: [
            (0, v.jsx)(N, { children: o2 }),
            i2 ? (0, v.jsx)(x.bL, {
              id: p2.contentId,
              role: "tooltip",
              children: i2
            }) : null
          ]
        })
      });
    }, "TooltipContentImpl")
  );
  function G(e2, t2) {
    let n2 = Math.abs(t2.top - e2.y), r2 = Math.abs(t2.bottom - e2.y), o2 = Math.abs(t2.right - e2.x), i2 = Math.abs(t2.left - e2.x);
    switch (Math.min(n2, r2, o2, i2)) {
      case i2:
        return "left";
      case o2:
        return "right";
      case n2:
        return "top";
      case r2:
        return "bottom";
      default:
        throw Error("unreachable");
    }
  }
  function q(e2, t2, n2 = 5) {
    let r2 = [];
    switch (t2) {
      case "top":
        r2.push({ x: e2.x - n2, y: e2.y + n2 }, { x: e2.x + n2, y: e2.y + n2 });
        break;
      case "bottom":
        r2.push({ x: e2.x - n2, y: e2.y - n2 }, { x: e2.x + n2, y: e2.y - n2 });
        break;
      case "left":
        r2.push({ x: e2.x + n2, y: e2.y - n2 }, { x: e2.x + n2, y: e2.y + n2 });
        break;
      case "right":
        r2.push({ x: e2.x - n2, y: e2.y - n2 }, { x: e2.x - n2, y: e2.y + n2 });
    }
    return r2;
  }
  function z(e2) {
    let { top: t2, right: n2, bottom: r2, left: o2 } = e2;
    return [
      { x: o2, y: t2 },
      { x: n2, y: t2 },
      { x: n2, y: r2 },
      { x: o2, y: r2 }
    ];
  }
  function U(e2, t2) {
    let { x: n2, y: r2 } = e2, o2 = false;
    for (let e3 = 0, i2 = t2.length - 1; e3 < t2.length; i2 = e3++) {
      let l2 = t2[e3], a2 = t2[i2], s2 = l2.x, u2 = l2.y, c2 = a2.x, d2 = a2.y;
      u2 > r2 != d2 > r2 && n2 < (c2 - s2) * (r2 - u2) / (d2 - u2) + s2 && (o2 = !o2);
    }
    return o2;
  }
  function W(e2) {
    let t2 = e2.slice();
    return t2.sort(
      (e3, t3) => e3.x < t3.x ? -1 : e3.x > t3.x ? 1 : e3.y < t3.y ? -1 : 1 * !!(e3.y > t3.y)
    ), X(t2);
  }
  function X(e2) {
    if (e2.length <= 1) return e2.slice();
    let t2 = [];
    for (let n3 = 0; n3 < e2.length; n3++) {
      let r2 = e2[n3];
      for (; t2.length >= 2; ) {
        let e3 = t2[t2.length - 1], n4 = t2[t2.length - 2];
        if ((e3.x - n4.x) * (r2.y - n4.y) >= (e3.y - n4.y) * (r2.x - n4.x)) t2.pop();
        else break;
      }
      t2.push(r2);
    }
    t2.pop();
    let n2 = [];
    for (let t3 = e2.length - 1; t3 >= 0; t3--) {
      let r2 = e2[t3];
      for (; n2.length >= 2; ) {
        let e3 = n2[n2.length - 1], t4 = n2[n2.length - 2];
        if ((e3.x - t4.x) * (r2.y - t4.y) >= (e3.y - t4.y) * (r2.x - t4.x)) n2.pop();
        else break;
      }
      n2.push(r2);
    }
    return (n2.pop(), 1 === t2.length && 1 === n2.length && t2[0].x === n2[0].x && t2[0].y === n2[0].y) ? t2 : t2.concat(n2);
  }
  y(G, "getExitSideFromRect"), y(q, "getPaddedExitPoints"), y(z, "getPointsFromRect"), y(U, "isPointInPolygon"), y(W, "getHull"), y(X, "getHullPresorted");
  var Y = L, Z = _, Q = O, V = H, J = S;
}

__m(__module,__exports,__require);
}