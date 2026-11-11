function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true });
  var a = {
    default: function() {
      return c;
    },
    getImageProps: function() {
      return d;
    }
  };
  for (var i in a) Object.defineProperty(t, i, { enumerable: true, get: a[i] });
  let n = r(73623), o = r(95413), s = r(38437), l = n._(r(36095));
  function d(e2) {
    let { props: t2 } = (0, o.getImgProps)(e2, {
      defaultLoader: l.default,
      imgConf: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: false,
        unoptimized: true
      }
    });
    for (let [e3, r2] of Object.entries(t2)) void 0 === r2 && delete t2[e3];
    return { props: t2 };
  }
  let c = s.Image;
}

__m(__module,__exports,__require);
}