function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { i: () => p });
  var r = n(12115), o = n.t(r, 2), i = n(66294), l = Object.defineProperty, u = o[" useEffectEvent ".trim().toString()], c = o[" useInsertionEffect ".trim().toString()];
  function a(e2) {
    if ("function" == typeof u) return u(e2);
    let t2 = r.useRef(() => {
      throw Error("Cannot call an event handler while rendering.");
    });
    return "function" == typeof c ? c(() => {
      t2.current = e2;
    }) : (0, i.N)(() => {
      t2.current = e2;
    }), r.useMemo(
      () => (...e3) => t2.current?.(...e3),
      []
    );
  }
  l(a, "name", { value: "useEffectEvent", configurable: true });
  var s = Object.defineProperty, f = (e2, t2) => s(e2, "name", { value: t2, configurable: true }), d = o[" useInsertionEffect ".trim().toString()] || i.N;
  function p({
    prop: e2,
    defaultProp: t2,
    onChange: n2 = f(() => {
    }, "onChange"),
    caller: o2
  }) {
    let [i2, l2, u2] = m({ defaultProp: t2, onChange: n2 }), c2 = void 0 !== e2, a2 = c2 ? e2 : i2;
    return [
      a2,
      r.useCallback(
        (t3) => {
          if (c2) {
            let n3 = y(t3) ? t3(e2) : t3;
            n3 !== e2 && u2.current?.(n3);
          } else l2(t3);
        },
        [c2, e2, l2, u2]
      )
    ];
  }
  function m({ defaultProp: e2, onChange: t2 }) {
    let [n2, o2] = r.useState(e2), i2 = r.useRef(n2), l2 = r.useRef(t2);
    return d(() => {
      l2.current = t2;
    }, [t2]), r.useEffect(() => {
      i2.current !== n2 && (l2.current?.(n2), i2.current = n2);
    }, [n2, i2]), [n2, o2, l2];
  }
  function y(e2) {
    return "function" == typeof e2;
  }
  f(p, "useControllableState"), f(m, "useUncontrolledState"), f(y, "isFunction");
  var b = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
  f(function(e2, t2, n2, o2) {
    let { prop: i2, defaultProp: l2, onChange: u2, caller: c2 } = t2, s2 = void 0 !== i2, f2 = a(u2), d2 = [{ ...n2, state: l2 }];
    o2 && d2.push(o2);
    let [p2, m2] = r.useReducer(
      (t3, n3) => {
        if (n3.type === b) return { ...t3, state: n3.state };
        let r2 = e2(t3, n3);
        return s2 && !Object.is(r2.state, t3.state) && f2(r2.state), r2;
      },
      ...d2
    ), y2 = p2.state, h = r.useRef(y2);
    r.useEffect(() => {
      h.current !== y2 && (h.current = y2, s2 || f2(y2));
    }, [y2, h, s2]);
    let v = r.useMemo(() => void 0 !== i2 ? { ...p2, state: i2 } : p2, [p2, i2]);
    return r.useEffect(() => {
      s2 && !Object.is(i2, p2.state) && m2({ type: b, state: i2 });
    }, [i2, p2.state, s2]), [v, m2];
  }, "useControllableStateReducer");
}

__m(__module,__exports,__require);
}