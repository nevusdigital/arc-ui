function(__module,__exports,__require){
"use strict";
function __m(e, t) {
  Object.defineProperty(t, "__esModule", { value: true });
  var r = {
    VALID_LOADERS: function() {
      return n;
    },
    imageConfigDefault: function() {
      return a;
    }
  };
  for (var i in r) Object.defineProperty(t, i, { enumerable: true, get: r[i] });
  let n = ["default", "imgix", "cloudinary", "akamai", "custom"], a = {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: ["image/webp"],
    maximumDiskCacheSize: void 0,
    maximumRedirects: 3,
    maximumResponseBody: 5e7,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "attachment",
    localPatterns: void 0,
    remotePatterns: [],
    qualities: [75],
    unoptimized: true,
    customCacheHandler: false
  };
}

__m(__module,__exports,__require);
}