function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { Oh: () => u });
  var r = n(12115), o = Object.defineProperty, a = (e2, t2) => o(e2, "name", { value: t2, configurable: true }), c = 0, i = null;
  function u() {
    r.useEffect(() => {
      i || (i = { start: l(), end: l() });
      let { start: e2, end: t2 } = i;
      return document.body.firstElementChild !== e2 && document.body.insertAdjacentElement("afterbegin", e2), document.body.lastElementChild !== t2 && document.body.insertAdjacentElement("beforeend", t2), c++, () => {
        1 === c && (i?.start.remove(), i?.end.remove(), i = null), c = Math.max(0, c - 1);
      };
    }, []);
  }
  function l() {
    let e2 = document.createElement("span");
    return e2.setAttribute("data-radix-focus-guard", ""), e2.tabIndex = 0, e2.style.outline = "none", e2.style.opacity = "0", e2.style.position = "fixed", e2.style.pointerEvents = "none", e2;
  }
  a(function(e2) {
    return u(), e2.children;
  }, "FocusGuards"), a(u, "useFocusGuards"), a(l, "createFocusGuard");
}

__m(__module,__exports,__require);
}