function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "default", {
    enumerable: true,
    get: function() {
      return o;
    }
  });
  let i = r(18857), n = r(53887);
  function a({ config: e2, src: t2, width: r2, quality: o2 }) {
    let l = (0, n.getDeploymentId)();
    if (t2.startsWith("/") && !t2.startsWith("//"))
      if (t2.includes("_next/static/immutable") && !(0, n.getAssetToken)())
        l = void 0;
      else {
        let e3 = t2.indexOf("?");
        if (-1 !== e3) {
          let r3 = new URLSearchParams(t2.slice(e3 + 1)), i2 = r3.get("dpl");
          if (i2) {
            l = i2, r3.delete("dpl");
            let n2 = r3.toString();
            t2 = t2.slice(0, e3) + (n2 ? "?" + n2 : "");
          }
        }
      }
    if (t2.startsWith("/") && t2.includes("?") && e2.localPatterns?.length === 1 && "**" === e2.localPatterns[0].pathname && "" === e2.localPatterns[0].search)
      throw Object.defineProperty(
        Error(`Image with src "${t2}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
        "__NEXT_ERROR_CODE",
        { value: "E871", enumerable: false, configurable: true }
      );
    let s = (0, i.findClosestQuality)(o2, e2);
    return `${e2.path}?url=${encodeURIComponent(t2)}&w=${r2}&q=${s}${t2.startsWith("/") && l ? `&dpl=${l}` : ""}`;
  }
  a.__next_img_default = true;
  let o = a;
}

__m(__module,__exports,__require);
}