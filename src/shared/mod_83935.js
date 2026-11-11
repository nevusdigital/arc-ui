function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { C: () => a });
  var r = n(12115), u = n(66294), i = Object.defineProperty, s = (e2, t2) => i(e2, "name", { value: t2, configurable: true });
  function o(e2, t2) {
    return r.useReducer((e3, n2) => t2[e3][n2] ?? e3, e2);
  }
  s(o, "useStateMachine");
  var a = s((e2) => {
    let { present: t2, children: n2 } = e2, u2 = c(t2), i2 = "function" == typeof n2 ? n2({ present: u2.isPresent }) : r.Children.only(n2), s2 = d(u2.ref, m(i2));
    return "function" == typeof n2 || u2.isPresent ? r.cloneElement(i2, { ref: s2 }) : null;
  }, "Presence");
  function c(e2) {
    let [t2, n2] = r.useState(), i2 = r.useRef(null), a2 = r.useRef(e2), c2 = r.useRef("none"), l2 = r.useRef(void 0), [d2, m2] = o(e2 ? "mounted" : "unmounted", {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" }
    });
    return r.useEffect(() => {
      "mounted" === d2 ? (c2.current = l2.current ?? f(i2.current), l2.current = void 0) : c2.current = "none";
    }, [d2]), (0, u.N)(() => {
      let t3 = i2.current, n3 = a2.current;
      if (n3 !== e2) {
        let r2 = c2.current, u2 = f(t3);
        e2 ? (l2.current = u2, m2("MOUNT")) : "none" === u2 || t3?.display === "none" ? m2("UNMOUNT") : n3 && r2 !== u2 ? m2("ANIMATION_OUT") : m2("UNMOUNT"), a2.current = e2;
      }
    }, [e2, m2]), (0, u.N)(() => {
      if (t2) {
        let e3, n3 = t2.ownerDocument.defaultView ?? window, r2 = s((r3) => {
          let u3 = f(i2.current).includes(CSS.escape(r3.animationName));
          if (r3.target === t2 && u3 && (m2("ANIMATION_END"), !a2.current)) {
            let r4 = t2.style.animationFillMode;
            t2.style.animationFillMode = "forwards", e3 = n3.setTimeout(() => {
              "forwards" === t2.style.animationFillMode && (t2.style.animationFillMode = r4);
            });
          }
        }, "handleAnimationEnd"), u2 = s((e4) => {
          e4.target === t2 && (c2.current = f(i2.current));
        }, "handleAnimationStart");
        return t2.addEventListener("animationstart", u2), t2.addEventListener("animationcancel", r2), t2.addEventListener("animationend", r2), () => {
          n3.clearTimeout(e3), t2.removeEventListener("animationstart", u2), t2.removeEventListener("animationcancel", r2), t2.removeEventListener("animationend", r2);
        };
      }
      m2("ANIMATION_END");
    }, [t2, m2]), {
      isPresent: ["mounted", "unmountSuspended"].includes(d2),
      ref: r.useCallback((e3) => {
        if (e3) {
          let t3 = getComputedStyle(e3);
          i2.current = t3, l2.current = f(t3);
        } else i2.current = null;
        n2(e3);
      }, [])
    };
  }
  function l(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  function d(...e2) {
    let t2 = r.useRef(e2);
    return t2.current = e2, r.useCallback((e3) => {
      let n2 = t2.current, r2 = false, u2 = n2.map((t3) => {
        let n3 = l(t3, e3);
        return r2 || "function" != typeof n3 || (r2 = true), n3;
      });
      if (r2)
        return () => {
          for (let e4 = 0; e4 < u2.length; e4++) {
            let t3 = u2[e4];
            "function" == typeof t3 ? t3() : l(n2[e4], null);
          }
        };
    }, []);
  }
  function f(e2) {
    return e2?.animationName || "none";
  }
  function m(e2) {
    let t2 = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, n2 = t2 && "isReactWarning" in t2 && t2.isReactWarning;
    return n2 ? e2.ref : (n2 = (t2 = Object.getOwnPropertyDescriptor(e2, "ref")?.get) && "isReactWarning" in t2 && t2.isReactWarning) ? e2.props.ref : e2.props.ref || e2.ref;
  }
  s(c, "usePresence"), s(l, "setRef"), s(d, "useStableComposedRefs"), s(f, "getAnimationName"), s(m, "getElementRef");
}

__m(__module,__exports,__require);
}