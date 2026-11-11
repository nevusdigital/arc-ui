function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { hO: () => a, sG: () => c });
  var r = n(12115), o = n(47650), i = n(42442), l = n(95155), u = Object.defineProperty, c = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ].reduce((e2, t2) => {
    let n2 = (0, i.TL)(`Primitive.${t2}`), o2 = r.forwardRef((e3, r2) => {
      let { asChild: o3, ...i2 } = e3;
      return "u" > typeof window && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), (0, l.jsx)(o3 ? n2 : t2, { ...i2, ref: r2 });
    });
    return o2.displayName = `Primitive.${t2}`, { ...e2, [t2]: o2 };
  }, {});
  function a(e2, t2) {
    e2 && o.flushSync(() => e2.dispatchEvent(t2));
  }
  u(a, "name", { value: "dispatchDiscreteCustomEvent", configurable: true });
}

__m(__module,__exports,__require);
}