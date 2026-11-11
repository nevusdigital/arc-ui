function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { Dc: () => s, TL: () => c });
  var r, o = n(12115), i = n(47527), l = Object.defineProperty, u = (e2, t2) => l(e2, "name", { value: t2, configurable: true });
  function c(e2) {
    let t2 = o.forwardRef((t3, n2) => {
      let { children: r2, ...l2 } = t3, u2 = null, c2 = false, a2 = [];
      b(r2) && "function" == typeof g && (r2 = g(r2._payload)), o.Children.forEach(r2, (e3) => {
        if (m(e3)) {
          c2 = true;
          let t4 = "child" in e3.props ? e3.props.child : e3.props.children;
          b(t4) && "function" == typeof g && (t4 = g(t4._payload)), u2 = f(e3, t4), a2.push(u2?.props?.children);
        } else a2.push(e3);
      }), u2 ? u2 = o.cloneElement(u2, void 0, a2) : !c2 && 1 === o.Children.count(r2) && o.isValidElement(r2) && (u2 = r2);
      let s2 = u2 ? p(u2) : void 0, y2 = (0, i.s)(n2, s2);
      if (!u2) {
        if (r2 || 0 === r2) throw Error(c2 ? E(e2) : v(e2));
        return r2;
      }
      let h2 = d(l2, u2.props ?? {});
      return u2.type !== o.Fragment && (h2.ref = n2 ? y2 : s2), o.cloneElement(u2, h2);
    });
    return t2.displayName = `${e2}.Slot`, t2;
  }
  u(c, "createSlot");
  var a = /* @__PURE__ */ Symbol.for("radix.slottable");
  function s(e2) {
    let t2 = u(
      (e3) => "child" in e3 ? e3.children(e3.child) : e3.children,
      "Slottable"
    );
    return t2.displayName = `${e2}.Slottable`, t2.__radixId = a, t2;
  }
  u(s, "createSlottable");
  var f = u((e2, t2) => {
    if ("child" in e2.props) {
      let t3 = e2.props.child;
      return o.isValidElement(t3) ? o.cloneElement(t3, void 0, e2.props.children(t3.props.children)) : null;
    }
    return o.isValidElement(t2) ? t2 : null;
  }, "getSlottableElementFromSlottable");
  function d(e2, t2) {
    let n2 = { ...t2 };
    for (let r2 in t2) {
      let o2 = e2[r2], i2 = t2[r2];
      /^on[A-Z]/.test(r2) ? o2 && i2 ? n2[r2] = (...e3) => {
        let t3 = i2(...e3);
        return o2(...e3), t3;
      } : o2 && (n2[r2] = o2) : "style" === r2 ? n2[r2] = { ...o2, ...i2 } : "className" === r2 && (n2[r2] = [o2, i2].filter(Boolean).join(" "));
    }
    return { ...e2, ...n2 };
  }
  function p(e2) {
    let t2 = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, n2 = t2 && "isReactWarning" in t2 && t2.isReactWarning;
    return n2 ? e2.ref : (n2 = (t2 = Object.getOwnPropertyDescriptor(e2, "ref")?.get) && "isReactWarning" in t2 && t2.isReactWarning) ? e2.props.ref : e2.props.ref || e2.ref;
  }
  function m(e2) {
    return o.isValidElement(e2) && "function" == typeof e2.type && "__radixId" in e2.type && e2.type.__radixId === a;
  }
  u(d, "mergeProps"), u(p, "getElementRef"), u(m, "isSlottable");
  var y = /* @__PURE__ */ Symbol.for("react.lazy");
  function b(e2) {
    return null != e2 && "object" == typeof e2 && "$$typeof" in e2 && e2.$$typeof === y && "_payload" in e2 && h(e2._payload);
  }
  function h(e2) {
    return "object" == typeof e2 && null !== e2 && "then" in e2;
  }
  u(b, "isLazyComponent"), u(h, "isPromiseLike");
  var v = u(
    (e2) => `${e2} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    "createSlotError"
  ), E = u(
    (e2) => `${e2} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    "createSlottableError"
  ), g = (r || (r = n.t(o, 2)))[" use ".trim().toString()];
}

__m(__module,__exports,__require);
}