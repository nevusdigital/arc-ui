function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { e0: () => p, qW: () => v });
  var r, u = n(12115), i = n(70379), s = n(55897), o = n(47527), a = n(17347), c = n(95155), l = Object.defineProperty, d = (e2, t2) => l(e2, "name", { value: t2, configurable: true }), f = "dismissableLayer.update", m = u.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set(),
    dismissableSurfaces: /* @__PURE__ */ new Set()
  }), v = u.forwardRef(
    d(function(e2, t2) {
      let {
        disableOutsidePointerEvents: n2 = false,
        deferPointerDownOutside: l2 = false,
        onEscapeKeyDown: v2,
        onPointerDownOutside: p2,
        onFocusOutside: E2,
        onInteractOutside: w2,
        onDismiss: O,
        ...g
      } = e2, P = u.useContext(m), [C, N] = u.useState(null), D = C?.ownerDocument ?? globalThis?.document, [, L] = u.useState({}), S = (0, o.s)(t2, N), R = Array.from(P.layers), [T] = [...P.layersWithOutsidePointerEventsDisabled].slice(-1), k = T ? R.indexOf(T) : -1, I = C ? R.indexOf(C) : -1, M = P.layersWithOutsidePointerEventsDisabled.size > 0, A = I >= k, U = u.useRef(false), W = b(
        (e3) => {
          p2?.(e3), w2?.(e3), e3.defaultPrevented || O?.();
        },
        {
          ownerDocument: D,
          deferPointerDownOutside: l2,
          isDeferredPointerDownOutsideRef: U,
          dismissableSurfaces: P.dismissableSurfaces,
          shouldHandlePointerDownOutside: u.useCallback(
            (e3) => {
              if (!(e3 instanceof Node)) return false;
              let t3 = [...P.branches].some((t4) => t4.contains(e3));
              return A && !t3;
            },
            [P.branches, A]
          )
        }
      ), F = y((e3) => {
        if (l2 && U.current) return;
        let t3 = e3.target;
        ![...P.branches].some((e4) => e4.contains(t3)) && (E2?.(e3), w2?.(e3), e3.defaultPrevented || O?.());
      }, D), _ = !!C && I === R.length - 1, j = (0, a.c)((e3) => {
        "Escape" === e3.key && (v2?.(e3), !e3.defaultPrevented && O && (e3.preventDefault(), O()));
      });
      return u.useEffect(() => {
        if (_)
          return D.addEventListener("keydown", j, { capture: true }), () => D.removeEventListener("keydown", j, { capture: true });
      }, [D, _, j]), u.useEffect(() => {
        if (C)
          return n2 && (0 === P.layersWithOutsidePointerEventsDisabled.size && (r = D.body.style.pointerEvents, D.body.style.pointerEvents = "none"), P.layersWithOutsidePointerEventsDisabled.add(C)), P.layers.add(C), h(), () => {
            n2 && (P.layersWithOutsidePointerEventsDisabled.delete(C), 0 === P.layersWithOutsidePointerEventsDisabled.size && (D.body.style.pointerEvents = r));
          };
      }, [C, D, n2, P]), u.useEffect(
        () => () => {
          C && (P.layers.delete(C), P.layersWithOutsidePointerEventsDisabled.delete(C), h());
        },
        [C, P]
      ), u.useEffect(() => {
        let e3 = d(() => L({}), "handleUpdate");
        return document.addEventListener(f, e3), () => document.removeEventListener(f, e3);
      }, []), (0, c.jsx)(s.sG.div, {
        ...g,
        ref: S,
        style: {
          pointerEvents: M ? A ? "auto" : "none" : void 0,
          ...e2.style
        },
        onFocusCapture: (0, i.mK)(e2.onFocusCapture, F.onFocusCapture),
        onBlurCapture: (0, i.mK)(e2.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: (0, i.mK)(
          e2.onPointerDownCapture,
          W.onPointerDownCapture
        )
      });
    }, "DismissableLayer")
  );
  function p() {
    let e2 = u.useContext(m), [t2, n2] = u.useState(null);
    return u.useEffect(() => {
      if (t2)
        return e2.dismissableSurfaces.add(t2), () => {
          e2.dismissableSurfaces.delete(t2);
        };
    }, [t2, e2.dismissableSurfaces]), n2;
  }
  d(p, "useDismissableLayerSurface");
  var E = d(() => true, "IS_TRUE");
  function b(e2, t2) {
    let {
      ownerDocument: n2 = globalThis?.document,
      deferPointerDownOutside: r2 = false,
      isDeferredPointerDownOutsideRef: i2,
      dismissableSurfaces: s2,
      shouldHandlePointerDownOutside: o2 = E
    } = t2, c2 = (0, a.c)(e2), l2 = u.useRef(false), f2 = u.useRef(false), m2 = u.useRef(/* @__PURE__ */ new Map()), v2 = u.useRef(() => {
    });
    return u.useEffect(() => {
      function e3() {
        f2.current = false, i2.current = false, m2.current.clear();
      }
      function t3() {
        return Array.from(m2.current.values()).some(Boolean);
      }
      function u2(e4) {
        if (!f2.current) return;
        let t4 = e4.target;
        t4 instanceof Node && [...s2].some((e5) => e5.contains(t4)) || m2.current.set(e4.type, true), "click" === e4.type && window.setTimeout(() => {
          f2.current && v2.current();
        }, 0);
      }
      function a2(e4) {
        f2.current && m2.current.set(e4.type, false);
      }
      d(e3, "resetOutsideInteraction"), d(t3, "isOutsideInteractionIntercepted"), d(u2, "handleInteractionCapture"), d(a2, "handleInteractionBubble");
      let p2 = d((u3) => {
        if (u3.target && !l2.current) {
          let s3 = function() {
            n2.removeEventListener("click", v2.current);
            let r3 = t3();
            e3(), r3 || w("dismissableLayer.pointerDownOutside", c2, a3, {
              discrete: true
            });
          };
          if (d(s3, "handleAndDispatchPointerDownOutsideEvent"), !o2(u3.target)) {
            n2.removeEventListener("click", v2.current), e3(), l2.current = false;
            return;
          }
          let a3 = { originalEvent: u3 };
          f2.current = true, i2.current = r2 && 0 === u3.button, m2.current.clear(), r2 && 0 === u3.button ? (n2.removeEventListener("click", v2.current), v2.current = s3, n2.addEventListener("click", v2.current, { once: true })) : s3();
        } else n2.removeEventListener("click", v2.current), e3();
        l2.current = false;
      }, "handlePointerDown"), E2 = [
        "pointerup",
        "mousedown",
        "mouseup",
        "touchstart",
        "touchend",
        "click"
      ];
      for (let e4 of E2)
        n2.addEventListener(e4, u2, true), n2.addEventListener(e4, a2);
      let b2 = window.setTimeout(() => {
        n2.addEventListener("pointerdown", p2);
      }, 0);
      return () => {
        for (let e4 of (window.clearTimeout(b2), n2.removeEventListener("pointerdown", p2), n2.removeEventListener("click", v2.current), E2))
          n2.removeEventListener(e4, u2, true), n2.removeEventListener(e4, a2);
      };
    }, [n2, c2, r2, i2, s2, o2]), {
      onPointerDownCapture: d(() => l2.current = true, "onPointerDownCapture")
    };
  }
  function y(e2, t2 = globalThis?.document) {
    let n2 = (0, a.c)(e2), r2 = u.useRef(false);
    return u.useEffect(() => {
      let e3 = d((e4) => {
        e4.target && !r2.current && w(
          "dismissableLayer.focusOutside",
          n2,
          { originalEvent: e4 },
          { discrete: false }
        );
      }, "handleFocus");
      return t2.addEventListener("focusin", e3), () => t2.removeEventListener("focusin", e3);
    }, [t2, n2]), {
      onFocusCapture: d(() => r2.current = true, "onFocusCapture"),
      onBlurCapture: d(() => r2.current = false, "onBlurCapture")
    };
  }
  function h() {
    let e2 = new CustomEvent(f);
    document.dispatchEvent(e2);
  }
  function w(e2, t2, n2, { discrete: r2 }) {
    let u2 = n2.originalEvent.target, i2 = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: n2 });
    t2 && u2.addEventListener(e2, t2, { once: true }), r2 ? (0, s.hO)(u2, i2) : u2.dispatchEvent(i2);
  }
  d(b, "usePointerDownOutside"), d(y, "useFocusOutside"), d(h, "dispatchUpdate"), d(w, "handleAndDispatchCustomEvent");
}

__m(__module,__exports,__require);
}