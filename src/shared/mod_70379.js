function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { mK: () => l });
  var r = Object.defineProperty, o = (e2, t2) => r(e2, "name", { value: t2, configurable: true }), i = !!("u" > typeof window && window.document && window.document.createElement);
  function l(e2, t2, { checkForDefaultPrevented: n2 = true } = {}) {
    return o(function(r2) {
      if (e2?.(r2), false === n2 || !r2 || !r2.defaultPrevented) return t2?.(r2);
    }, "handleEvent");
  }
  function u(e2) {
    if (!i) throw Error("Cannot access document outside of the DOM");
    return e2?.ownerDocument ?? document;
  }
  function c(e2) {
    return "IFRAME" === e2.tagName;
  }
  o(l, "composeEventHandlers"), o(function(e2) {
    if (!i) throw Error("Cannot access window outside of the DOM");
    return e2?.ownerDocument?.defaultView ?? window;
  }, "getOwnerWindow"), o(u, "getOwnerDocument"), o(function e2(t2, n2 = false) {
    let { activeElement: r2 } = u(t2);
    if (!r2?.nodeName) return null;
    if (c(r2) && r2.contentDocument) return e2(r2.contentDocument.body, n2);
    if (n2) {
      let e3 = r2.getAttribute("aria-activedescendant");
      if (e3) {
        let t3 = u(r2).getElementById(e3);
        if (t3) return t3;
      }
    }
    return r2;
  }, "getActiveElement"), o(c, "isFrame");
}

__m(__module,__exports,__require);
}