function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "getImgProps", {
    enumerable: true,
    get: function() {
      return u;
    }
  });
  let i = r(53887), n = r(12590), a = r(55762), o = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function l(e2) {
    return void 0 !== e2.default;
  }
  function s(e2) {
    return void 0 === e2 ? e2 : "number" == typeof e2 ? Number.isFinite(e2) ? e2 : NaN : "string" == typeof e2 && /^[0-9]+$/.test(e2) ? parseInt(e2, 10) : NaN;
  }
  function u({
    src: e2,
    sizes: t2,
    unoptimized: r2 = false,
    priority: d = false,
    preload: c = false,
    loading: f,
    className: p,
    quality: g,
    width: m,
    height: h,
    fill: b = false,
    style: y,
    overrideSrc: _,
    onLoad: v,
    onLoadingComplete: w,
    placeholder: j = "empty",
    blurDataURL: x,
    fetchPriority: P,
    decoding: S = "async",
    layout: O,
    objectFit: C,
    objectPosition: E,
    lazyBoundary: R,
    lazyRoot: z,
    ...M
  }, I) {
    var $;
    let k, D, A, { imgConf: N, showAltText: L, blurComplete: T, defaultLoader: U } = I, q = N || a.imageConfigDefault;
    if ("allSizes" in q) k = q;
    else {
      let e3 = [...q.deviceSizes, ...q.imageSizes].sort((e4, t4) => e4 - t4), t3 = q.deviceSizes.sort((e4, t4) => e4 - t4), r3 = q.qualities?.sort((e4, t4) => e4 - t4);
      k = { ...q, allSizes: e3, deviceSizes: t3, qualities: r3 };
    }
    if (void 0 === U)
      throw Object.defineProperty(
        Error(
          "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E163", enumerable: false, configurable: true }
      );
    let F = M.loader || U;
    delete M.loader, delete M.srcSet;
    let W = "__next_img_default" in F;
    if (W) {
      if ("custom" === k.loader)
        throw Object.defineProperty(
          Error(`Image with src "${e2}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
          "__NEXT_ERROR_CODE",
          { value: "E252", enumerable: false, configurable: true }
        );
    } else {
      let e3 = F;
      F = (t3) => {
        let { config: r3, ...i2 } = t3;
        return e3(i2);
      };
    }
    if (O) {
      "fill" === O && (b = true);
      let e3 = {
        intrinsic: { maxWidth: "100%", height: "auto" },
        responsive: { width: "100%", height: "auto" }
      }[O];
      e3 && (y = { ...y, ...e3 });
      let r3 = { responsive: "100vw", fill: "100vw" }[O];
      r3 && !t2 && (t2 = r3);
    }
    let B = "", G = s(m), H = s(h);
    if (($ = e2) && "object" == typeof $ && (l($) || void 0 !== $.src)) {
      let t3 = l(e2) ? e2.default : e2;
      if (!t3.src)
        throw Object.defineProperty(
          Error(
            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t3)}`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E460", enumerable: false, configurable: true }
        );
      if (!t3.height || !t3.width)
        throw Object.defineProperty(
          Error(
            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t3)}`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E48", enumerable: false, configurable: true }
        );
      if (D = t3.blurWidth, A = t3.blurHeight, x = x || t3.blurDataURL, B = t3.src, !b)
        if (G || H) {
          if (G && !H) {
            let e3 = G / t3.width;
            H = Math.round(t3.height * e3);
          } else if (!G && H) {
            let e3 = H / t3.height;
            G = Math.round(t3.width * e3);
          }
        } else G = t3.width, H = t3.height;
    }
    let X = !d && !c && ("lazy" === f || void 0 === f);
    (!(e2 = "string" == typeof e2 ? e2 : B) || e2.startsWith("data:") || e2.startsWith("blob:")) && (r2 = true, X = false), k.unoptimized && (r2 = true), W && !k.dangerouslyAllowSVG && e2.split("?", 1)[0].endsWith(".svg") && (r2 = true);
    let V = s(g), J = Object.assign(
      b ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: C,
        objectPosition: E
      } : {},
      L ? {} : { color: "transparent" },
      y
    ), Q = T || "empty" === j ? null : "blur" === j ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({ widthInt: G, heightInt: H, blurWidth: D, blurHeight: A, blurDataURL: x || "", objectFit: J.objectFit })}")` : `url("${j}")`, Y = o.includes(J.objectFit) ? "fill" === J.objectFit ? "100% 100%" : "cover" : J.objectFit, K = Q ? {
      backgroundSize: Y,
      backgroundPosition: J.objectPosition || "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundImage: Q
    } : {}, Z = (function({
      config: e3,
      src: t3,
      unoptimized: r3,
      width: n2,
      quality: a2,
      sizes: o2,
      loader: l2
    }) {
      if (r3) {
        if (t3.startsWith("/") && !t3.startsWith("//")) {
          let e4 = (0, i.getDeploymentId)();
          if (t3.includes("_next/static/immutable") && !(0, i.getAssetToken)())
            e4 = void 0;
          else if (e4) {
            let r4 = t3.indexOf("?");
            if (-1 !== r4) {
              let i2 = new URLSearchParams(t3.slice(r4 + 1));
              i2.get("dpl") || (i2.append("dpl", e4), t3 = t3.slice(0, r4) + "?" + i2.toString());
            } else t3 += `?dpl=${e4}`;
          }
        }
        return { src: t3, srcSet: void 0, sizes: void 0 };
      }
      let { widths: s2, kind: u2 } = (function({ deviceSizes: e4, allSizes: t4 }, r4, i2) {
        if (i2) {
          let r5 = /(^|\s)(1?\d?\d)vw/g, n3 = [];
          for (let e5; e5 = r5.exec(i2); ) n3.push(parseInt(e5[2]));
          if (n3.length) {
            let r6 = 0.01 * Math.min(...n3);
            return { widths: t4.filter((t5) => t5 >= e4[0] * r6), kind: "w" };
          }
          return { widths: t4, kind: "w" };
        }
        return "number" != typeof r4 ? { widths: e4, kind: "w" } : {
          widths: [
            ...new Set(
              [r4, 2 * r4].map(
                (e5) => t4.find((t5) => t5 >= e5) || t4[t4.length - 1]
              )
            )
          ],
          kind: "x"
        };
      })(e3, n2, o2), d2 = s2.length - 1;
      return {
        sizes: o2 || "w" !== u2 ? o2 : "100vw",
        srcSet: s2.map(
          (r4, i2) => `${l2({ config: e3, src: t3, quality: a2, width: r4 })} ${"w" === u2 ? r4 : i2 + 1}${u2}`
        ).join(", "),
        src: l2({ config: e3, src: t3, quality: a2, width: s2[d2] })
      };
    })({
      config: k,
      src: e2,
      unoptimized: r2,
      width: G,
      quality: V,
      sizes: t2,
      loader: F
    }), ee = X ? "lazy" : f;
    return {
      props: {
        ...M,
        loading: ee,
        fetchPriority: P,
        width: G,
        height: H,
        decoding: S,
        className: p,
        style: { ...J, ...K },
        sizes: Z.sizes,
        srcSet: Z.srcSet,
        src: _ || Z.src
      },
      meta: { unoptimized: r2, preload: c || d, placeholder: j, fill: b }
    };
  }
}

__m(__module,__exports,__require);
}