function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "Image", {
    enumerable: true,
    get: function() {
      return w;
    }
  });
  let i = r(73623), n = r(66388), a = r(95155), o = n._(r(12115)), l = i._(r(47650)), s = i._(r(46686)), u = r(95413), d = r(55762), c = r(17150), f = r(60751), p = i._(r(36095)), g = r(21172), m = {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [75],
    path: "/_next/image",
    loader: "default",
    dangerouslyAllowSVG: false,
    unoptimized: true
  };
  function h(e2, t2, r2, i2, n2, a2, o2) {
    let l2 = e2?.src;
    e2 && e2["data-loaded-src"] !== l2 && (e2["data-loaded-src"] = l2, ("decode" in e2 ? e2.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (e2.parentElement && e2.isConnected) {
        if ("empty" !== t2 && n2(true), r2?.current) {
          let t3 = new Event("load");
          Object.defineProperty(t3, "target", { writable: false, value: e2 });
          let i3 = false, n3 = false;
          r2.current({
            ...t3,
            nativeEvent: t3,
            currentTarget: e2,
            target: e2,
            isDefaultPrevented: () => i3,
            isPropagationStopped: () => n3,
            persist: () => {
            },
            preventDefault: () => {
              i3 = true, t3.preventDefault();
            },
            stopPropagation: () => {
              n3 = true, t3.stopPropagation();
            }
          });
        }
        i2?.current && i2.current(e2);
      }
    }));
  }
  function b(e2) {
    return o.use ? { fetchPriority: e2 } : { fetchpriority: e2 };
  }
  let y = o.useLayoutEffect, _ = (0, o.forwardRef)(
    ({
      src: e2,
      srcSet: t2,
      sizes: r2,
      height: i2,
      width: n2,
      decoding: l2,
      className: s2,
      style: u2,
      fetchPriority: d2,
      placeholder: c2,
      loading: f2,
      unoptimized: p2,
      fill: m2,
      onLoadRef: _2,
      onLoadingCompleteRef: v2,
      setBlurComplete: w2,
      setShowAltText: j,
      sizesInput: x,
      onLoad: P,
      onError: S,
      ...O
    }, C) => {
      let E = (0, o.useRef)(false), R = (0, o.useRef)(null);
      y(() => {
        let { current: e3 } = E, { current: t3 } = R;
        e3 || null === t3 || (S && (t3.src = t3.src), t3.complete && h(t3, c2, _2, v2, w2, p2, x), E.current = true);
      }, [e2, c2, _2, v2, S, p2, x]);
      let z = (0, g.useMergedRef)(C, R);
      return (0, a.jsx)("img", {
        ...O,
        ...b(d2),
        loading: f2,
        width: n2,
        height: i2,
        decoding: l2,
        "data-nimg": m2 ? "fill" : "1",
        className: s2,
        style: u2,
        sizes: r2,
        srcSet: t2,
        src: e2,
        ref: z,
        onLoad: (e3) => {
          h(e3.currentTarget, c2, _2, v2, w2, p2, x);
        },
        onError: (e3) => {
          j(true), "empty" !== c2 && w2(true), S && S(e3);
        }
      });
    }
  );
  function v({ isAppRouter: e2, imgAttributes: t2 }) {
    let r2 = {
      as: "image",
      imageSrcSet: t2.srcSet,
      imageSizes: t2.sizes,
      crossOrigin: t2.crossOrigin,
      referrerPolicy: t2.referrerPolicy,
      ...b(t2.fetchPriority)
    };
    return e2 && l.default.preload ? (l.default.preload(t2.src, r2), null) : (0, a.jsx)(s.default, {
      children: (0, a.jsx)(
        "link",
        { rel: "preload", href: t2.srcSet ? void 0 : t2.src, ...r2 },
        "__nimg-" + t2.src + t2.srcSet + t2.sizes
      )
    });
  }
  let w = (0, o.forwardRef)((e2, t2) => {
    let r2 = (0, o.useContext)(f.RouterContext), i2 = (0, o.useContext)(c.ImageConfigContext), n2 = (0, o.useMemo)(() => {
      let e3 = m || i2 || d.imageConfigDefault, t3 = [...e3.deviceSizes, ...e3.imageSizes].sort((e4, t4) => e4 - t4), r3 = e3.deviceSizes.sort((e4, t4) => e4 - t4), n3 = e3.qualities?.sort((e4, t4) => e4 - t4);
      return {
        ...e3,
        allSizes: t3,
        deviceSizes: r3,
        qualities: n3,
        localPatterns: e3.localPatterns
      };
    }, [i2]), { onLoad: l2, onLoadingComplete: s2 } = e2, g2 = (0, o.useRef)(l2);
    (0, o.useEffect)(() => {
      g2.current = l2;
    }, [l2]);
    let h2 = (0, o.useRef)(s2);
    (0, o.useEffect)(() => {
      h2.current = s2;
    }, [s2]);
    let [b2, y2] = (0, o.useState)(false), [w2, j] = (0, o.useState)(false), { props: x, meta: P } = (0, u.getImgProps)(e2, {
      defaultLoader: p.default,
      imgConf: n2,
      blurComplete: b2,
      showAltText: w2
    });
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(_, {
          ...x,
          unoptimized: P.unoptimized,
          placeholder: P.placeholder,
          fill: P.fill,
          onLoadRef: g2,
          onLoadingCompleteRef: h2,
          setBlurComplete: y2,
          setShowAltText: j,
          sizesInput: e2.sizes,
          ref: t2
        }),
        P.preload ? (0, a.jsx)(v, { isAppRouter: !r2, imgAttributes: x }) : null
      ]
    });
  });
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", { value: true }), Object.assign(t.default, t), e.exports = t.default);
}

__m(__module,__exports,__require);
}