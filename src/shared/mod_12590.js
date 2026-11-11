function(__module,__exports,__require){
"use strict";
function __m(e, t) {
  function r({
    widthInt: e2,
    heightInt: t2,
    blurWidth: i,
    blurHeight: n,
    blurDataURL: a,
    objectFit: o
  }) {
    let l = i ? 40 * i : e2, s = n ? 40 * n : t2, u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
  }
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
      return r;
    }
  });
}

__m(__module,__exports,__require);
}