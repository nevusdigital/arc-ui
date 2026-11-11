function(__module,__exports,__require){
"use strict";
function __m(e, n, r) {
  r.d(n, { q7: () => q, bL: () => H, RG: () => E });
  var t = r(12115), o = r.t(t, 2), u = r(70379), a = r(76094), i = r(47527), c = r(68599), l = r(89971), s = r(55897), d = r(17347), f = r(59322), p = r(1933), g = r(66294), h = Object.defineProperty, m = (e2, n2) => h(e2, "name", { value: n2, configurable: true }), w = false;
  function v() {
    let [e2, n2] = t.useState(w);
    return t.useEffect(() => {
      w || (w = true, n2(true));
    }, []), e2;
  }
  m(v, "useIsHydrated");
  var x = o[" useSyncExternalStore ".trim().toString()];
  function b() {
    return () => {
    };
  }
  function M() {
    return x(
      b,
      () => true,
      () => false
    );
  }
  m(b, "subscribe"), m(M, "useIsHydratedModern");
  var C = "function" == typeof x ? M : v, y = r(95155), R = Object.defineProperty, j = (e2, n2) => R(e2, "name", { value: n2, configurable: true }), D = "rovingFocusGroup.onEntryFocus", I = { bubbles: false, cancelable: true }, K = "RovingFocusGroup", [_, k, P] = (0, a.N)(K), [S, E] = (0, c.A)(K, [P]), [T, F] = S(K), O = t.forwardRef(
    j(function(e2, n2) {
      return (0, y.jsx)(_.Provider, {
        scope: e2.__scopeRovingFocusGroup,
        children: (0, y.jsx)(_.Slot, {
          scope: e2.__scopeRovingFocusGroup,
          children: (0, y.jsx)(L, { ...e2, ref: n2 })
        })
      });
    }, "RovingFocusGroup")
  ), L = t.forwardRef(
    j(function(e2, n2) {
      let {
        __scopeRovingFocusGroup: r2,
        orientation: o2,
        loop: a2 = false,
        dir: c2,
        currentTabStopId: l2,
        defaultCurrentTabStopId: g2,
        onCurrentTabStopIdChange: h2,
        onEntryFocus: m2,
        preventScrollOnEntryFocus: w2 = false,
        ...v2
      } = e2, x2 = t.useRef(null), b2 = (0, i.s)(n2, x2), M2 = (0, p.jH)(c2), [C2, R2] = (0, f.i)({
        prop: l2,
        defaultProp: g2 ?? null,
        onChange: h2,
        caller: K
      }), [j2, _2] = t.useState(false), P2 = (0, d.c)(m2), S2 = k(r2), E2 = t.useRef(false), [F2, O2] = t.useState(0);
      return t.useEffect(() => {
        let e3 = x2.current;
        if (e3)
          return e3.addEventListener(D, P2), () => e3.removeEventListener(D, P2);
      }, [P2]), (0, y.jsx)(T, {
        scope: r2,
        orientation: o2,
        dir: M2,
        loop: a2,
        currentTabStopId: C2,
        onItemFocus: t.useCallback((e3) => R2(e3), [R2]),
        onItemShiftTab: t.useCallback(() => _2(true), []),
        onFocusableItemAdd: t.useCallback(() => O2((e3) => e3 + 1), []),
        onFocusableItemRemove: t.useCallback(() => O2((e3) => e3 - 1), []),
        children: (0, y.jsx)(s.sG.div, {
          tabIndex: j2 || 0 === F2 ? -1 : 0,
          "data-orientation": o2,
          ...v2,
          ref: b2,
          style: { outline: "none", ...e2.style },
          onMouseDown: (0, u.mK)(e2.onMouseDown, () => {
            E2.current = true;
          }),
          onFocus: (0, u.mK)(e2.onFocus, (e3) => {
            let n3 = !E2.current;
            if (e3.target === e3.currentTarget && n3 && !j2) {
              let n4 = new CustomEvent(D, I);
              if (e3.currentTarget.dispatchEvent(n4), !n4.defaultPrevented) {
                let e4 = S2().filter((e5) => e5.focusable);
                V(
                  [e4.find((e5) => e5.active), e4.find((e5) => e5.id === C2), ...e4].filter(Boolean).map((e5) => e5.ref.current),
                  w2
                );
              }
            }
            E2.current = false;
          }),
          onBlur: (0, u.mK)(e2.onBlur, () => _2(false))
        })
      });
    }, "RovingFocusGroupImpl")
  ), A = t.forwardRef(
    j(function(e2, n2) {
      let {
        __scopeRovingFocusGroup: r2,
        focusable: o2 = true,
        active: a2 = false,
        tabStopId: i2,
        children: c2,
        ...d2
      } = e2, f2 = (0, l.B)(), p2 = i2 || f2, h2 = F("RovingFocusGroupItem", r2), m2 = h2.currentTabStopId === p2, w2 = k(r2), {
        onFocusableItemAdd: v2,
        onFocusableItemRemove: x2,
        currentTabStopId: b2
      } = h2, M2 = C();
      return (0, g.N)(() => {
        if (M2 && o2) return v2(), () => x2();
      }, [M2, o2, v2, x2]), t.useEffect(() => {
        if (!M2 && o2) return v2(), () => x2();
      }, [M2, o2, v2, x2]), (0, y.jsx)(_.ItemSlot, {
        scope: r2,
        id: p2,
        focusable: o2,
        active: a2,
        children: (0, y.jsx)(s.sG.span, {
          tabIndex: m2 ? 0 : -1,
          "data-orientation": h2.orientation,
          ...d2,
          ref: n2,
          onMouseDown: (0, u.mK)(e2.onMouseDown, (e3) => {
            o2 ? h2.onItemFocus(p2) : e3.preventDefault();
          }),
          onFocus: (0, u.mK)(e2.onFocus, () => h2.onItemFocus(p2)),
          onKeyDown: (0, u.mK)(e2.onKeyDown, (e3) => {
            if ("Tab" === e3.key && e3.shiftKey)
              return void h2.onItemShiftTab();
            if (e3.target !== e3.currentTarget) return;
            let n3 = U(e3, h2.orientation, h2.dir);
            if (void 0 !== n3) {
              if (e3.metaKey || e3.ctrlKey || e3.altKey || e3.shiftKey) return;
              e3.preventDefault();
              let r3 = w2().filter((e4) => e4.focusable).map((e4) => e4.ref.current);
              if ("last" === n3) r3.reverse();
              else if ("prev" === n3 || "next" === n3) {
                "prev" === n3 && r3.reverse();
                let t2 = r3.indexOf(e3.currentTarget);
                r3 = h2.loop ? N(r3, t2 + 1) : r3.slice(t2 + 1);
              }
              setTimeout(() => V(r3));
            }
          }),
          children: "function" == typeof c2 ? c2({ isCurrentTabStop: m2, hasTabStop: null != b2 }) : c2
        })
      });
    }, "RovingFocusGroupItem")
  ), G = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function B(e2, n2) {
    return "rtl" !== n2 ? e2 : "ArrowLeft" === e2 ? "ArrowRight" : "ArrowRight" === e2 ? "ArrowLeft" : e2;
  }
  function U(e2, n2, r2) {
    let t2 = B(e2.key, r2);
    if (!("vertical" === n2 && ["ArrowLeft", "ArrowRight"].includes(t2)) && !("horizontal" === n2 && ["ArrowUp", "ArrowDown"].includes(t2)))
      return G[t2];
  }
  function V(e2, n2 = false) {
    let r2 = document.activeElement;
    for (let t2 of e2)
      if (t2 === r2 || (t2.focus({ preventScroll: n2 }), document.activeElement !== r2))
        return;
  }
  function N(e2, n2) {
    return e2.map((r2, t2) => e2[(n2 + t2) % e2.length]);
  }
  j(B, "getDirectionAwareKey"), j(U, "getFocusIntent"), j(V, "focusFirst"), j(N, "wrapArray");
  var H = O, q = A;
}

__m(__module,__exports,__require);
}