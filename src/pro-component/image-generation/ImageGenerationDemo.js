function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ImageGenerationDemo: () => ey, default: () => ev });
  var r = a(95155), n = a(12115), i = a(6900), s = a(25354), l = a(7890), o = a(80642), d = a(55809), c = a(18310), u = a(28245), m = a(92171), h = a(86272), g = a(35484), p = a(40852), f = a(64577), w = a(92298), x = a(8962), b = a(73246), _ = a(50825), y = a(51288), v = a(36690), j = a(7770);
  let k = { width: 16, height: 16, "aria-hidden": true }, N = [
    {
      id: "gpt-image",
      name: "GPT Image",
      mark: (0, r.jsx)(
        function({ title: e2 = "OpenAI", ...t2 }) {
          return (0, r.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            role: "img",
            "aria-label": e2,
            ...t2,
            children: (0, r.jsx)("path", {
              d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
            })
          });
        },
        { ...k }
      )
    },
    {
      id: "gemini-image",
      name: "Gemini Image",
      mark: (0, r.jsx)(
        function({ title: e2 = "Gemini", ...t2 }) {
          let a2 = (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
          return (0, r.jsxs)("svg", {
            viewBox: "0 0 24 24",
            role: "img",
            "aria-label": e2,
            ...t2,
            children: [
              (0, r.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: "#3186FF"
              }),
              (0, r.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: `url(#lobe-icons-gemini-0-${a2})`
              }),
              (0, r.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: `url(#lobe-icons-gemini-1-${a2})`
              }),
              (0, r.jsx)("path", {
                d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
                fill: `url(#lobe-icons-gemini-2-${a2})`
              }),
              (0, r.jsxs)("defs", {
                children: [
                  (0, r.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `lobe-icons-gemini-0-${a2}`,
                    x1: "7",
                    x2: "11",
                    y1: "15.5",
                    y2: "12",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#08B962" }),
                      (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: "#08B962",
                        stopOpacity: "0"
                      })
                    ]
                  }),
                  (0, r.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `lobe-icons-gemini-1-${a2}`,
                    x1: "8",
                    x2: "11.5",
                    y1: "5.5",
                    y2: "11",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#F94543" }),
                      (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: "#F94543",
                        stopOpacity: "0"
                      })
                    ]
                  }),
                  (0, r.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `lobe-icons-gemini-2-${a2}`,
                    x1: "3.5",
                    x2: "17.5",
                    y1: "13.5",
                    y2: "12",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#FABC12" }),
                      (0, r.jsx)("stop", {
                        offset: ".46",
                        stopColor: "#FABC12",
                        stopOpacity: "0"
                      })
                    ]
                  })
                ]
              })
            ]
          });
        },
        { ...k }
      )
    },
    {
      id: "grok-imagine",
      name: "Grok Imagine",
      mark: (0, r.jsx)(
        function({ title: e2 = "xAI", ...t2 }) {
          return (0, r.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            fillRule: "evenodd",
            role: "img",
            "aria-label": e2,
            ...t2,
            children: (0, r.jsx)("path", {
              d: "M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9l2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"
            })
          });
        },
        { ...k }
      )
    }
  ], $ = [
    { id: "1:1", label: "1:1", width: 1024, height: 1024 },
    { id: "4:5", label: "4:5", width: 1024, height: 1280 },
    { id: "16:9", label: "16:9", width: 1536, height: 864 }
  ], A = [
    "Sculptural architecture, curved facades and terracotta waves against a clear blue sky",
    "Speckled stoneware cups and bowls on a pale table, soft window light",
    "Sunlit reading corner, woven oak lounge chair, linen throws, ceramic lamp"
  ], M = (e2, t2) => ({ src: `media/photos/${e2}.jpg`, alt: t2 }), C = [
    {
      words: [
        "lake",
        "mountain",
        "coast",
        "sea",
        "alpine",
        "dusk",
        "beach",
        "ridge",
        "peak",
        "landscape",
        "ocean",
        "nature",
        "golden hour",
        "film"
      ],
      photos: [
        M(
          "alpine-lake",
          "A calm alpine lake reflecting a rocky peak glowing at golden hour"
        ),
        M(
          "mountain-ridges",
          "Hazy layered mountain ridges under a warm evening sky"
        ),
        M(
          "coastline",
          "A long coastline with waves rolling onto a beach below green cliffs"
        ),
        M(
          "sea-at-dusk",
          "A calm sea at dusk with a lighthouse on a low island"
        )
      ]
    },
    {
      words: [
        "room",
        "nook",
        "chair",
        "lamp",
        "interior",
        "living",
        "bed",
        "sofa",
        "linen",
        "reading",
        "corner",
        "cozy",
        "office"
      ],
      photos: [
        M(
          "lounge-chair",
          "A woven oak lounge chair with a sheepskin and linen cushion on a concrete floor"
        ),
        M(
          "ceramic-lamp",
          "A sculptural ceramic lamp with a linen shade on a walnut sideboard"
        ),
        M(
          "linen-throw",
          "Folded natural linen throws with fringed edges in soft window light"
        ),
        M(
          "reading-chair",
          "A grey armchair and ottoman with a knit throw in a dark green room"
        ),
        M(
          "living-room",
          "A bright living room with timber beams, arched windows, and cream sofas"
        ),
        M(
          "sunroom",
          "A sunroom with a round dining table, plants, and windows on three sides"
        ),
        M(
          "bedroom",
          "A made bed with striped linen pillows against an oak headboard"
        ),
        M(
          "home-office",
          "A home office with a wooden desk and deep green walls"
        )
      ]
    },
    {
      words: [
        "facade",
        "building",
        "architecture",
        "sculptural",
        "balcon",
        "concrete",
        "curved",
        "house",
        "pool",
        "terracotta",
        "wall",
        "tiled"
      ],
      photos: [
        M(
          "terracotta-waves",
          "Wavy terracotta walls rising toward a blue sky"
        ),
        M(
          "curved-facade",
          "A white tiled building facade with curved balconies"
        ),
        M(
          "concert-hall",
          "Curved stainless steel panels of a concert hall against a blue sky"
        ),
        M(
          "pool-house",
          "A modern glass house beside a long pool under a clear sky"
        )
      ]
    },
    {
      words: [
        "food",
        "dinner",
        "dish",
        "salmon",
        "restaurant",
        "wine",
        "chef",
        "plate",
        "meal",
        "kitchen"
      ],
      photos: [
        M(
          "salmon-dinner",
          "Seared salmon with a bright herb salsa and a glass of red wine"
        ),
        M(
          "chef-plating",
          "A chef spooning sauce onto a plated dish in a dark kitchen"
        ),
        M(
          "wine-bar",
          "A glass carafe of red wine on a bar table in low evening light"
        ),
        M(
          "restaurant",
          "A warm restaurant dining room with woven pendant lights and a tree"
        )
      ]
    },
    {
      words: [
        "cup",
        "bowl",
        "carafe",
        "stoneware",
        "ceramic",
        "product",
        "still life",
        "glass",
        "mug",
        "vase"
      ],
      photos: [
        M(
          "stoneware-cups",
          "Two speckled stoneware cups with a lid on a pale table"
        ),
        M(
          "stacked-bowls",
          "Two stacked speckled ceramic bowls against a dark wall"
        ),
        M(
          "glass-carafe",
          "A hand pouring water from a ribbed glass carafe into tumblers"
        ),
        M(
          "table-lamp",
          "A white mushroom table lamp glowing beside books and a small vase"
        )
      ]
    },
    {
      words: [
        "lisbon",
        "city",
        "street",
        "tram",
        "rooftop",
        "bridge",
        "town",
        "urban",
        "travel"
      ],
      photos: [
        M(
          "lisbon-rooftops",
          "Terracotta rooftops of Lisbon running down to the river"
        ),
        M(
          "lisbon-tram",
          "A yellow tram on a street lined with historic buildings in Lisbon"
        ),
        M(
          "lisbon-bridge",
          "The 25 de Abril Bridge crossing the Tagus in Lisbon"
        ),
        M(
          "curved-facade",
          "A white tiled building facade with curved balconies"
        )
      ]
    }
  ];
  function R(e2, t2, a2, r2 = 1.6) {
    return new Promise((n2, i2) => {
      if (t2.aborted) return void i2(new DOMException("Aborted", "AbortError"));
      let s2 = performance.now(), l2 = 0, o2 = (t3) => {
        let i3 = Math.min(1, (t3 - s2) / e2);
        a2(1 - Math.pow(1 - i3, r2)), i3 < 1 ? l2 = requestAnimationFrame(o2) : n2();
      };
      l2 = requestAnimationFrame(o2), t2.addEventListener(
        "abort",
        () => {
          cancelAnimationFrame(l2), i2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  let S = 418203;
  async function E(e2, { signal: t2, onProgress: a2 }) {
    let r2, n2 = (function(e3) {
      let t3 = e3.toLowerCase(), a3 = C[0], r3 = 0;
      for (let e4 of C) {
        let n3 = e4.words.filter((e5) => t3.includes(e5)).length;
        n3 > r3 && (a3 = e4, r3 = n3);
      }
      return a3;
    })(e2.variationOf?.alt ?? e2.prompt).photos, i2 = e2.variationOf ? Math.max(
      0,
      n2.findIndex((t3) => t3.src === e2.variationOf?.src)
    ) + 1 : 0, s2 = n2[(i2 + e2.index) % n2.length];
    return await (r2 = 80 + 90 * e2.index, new Promise((e3, a3) => {
      if (t2.aborted) return void a3(new DOMException("Aborted", "AbortError"));
      let n3 = window.setTimeout(e3, r2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(n3), a3(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    })), a2(0, s2.src), await R(
      4400 + 320 * e2.index + e2.prompt.length % 5 * 60,
      t2,
      (e3) => a2(e3, s2.src),
      1.3
    ), S += 7919, {
      id: `${e2.model.id}-${S}`,
      src: s2.src,
      alt: s2.alt,
      width: e2.aspect.width,
      height: e2.aspect.height,
      seed: S
    };
  }
  async function z(e2, { signal: t2, onProgress: a2 }) {
    return await R(1400, t2, (e3) => {
      let t3 = 1 - Math.pow(1 - e3, 0.625);
      a2(t3 * t3 * (3 - 2 * t3));
    }), {
      ...e2,
      id: `${e2.id}-2x`,
      width: (e2.width ?? 1024) * 2,
      height: (e2.height ?? 1024) * 2
    };
  }
  let T = (e2) => Math.min(1, Math.max(0, e2)), L = (e2) => e2 * e2 * (3 - 2 * e2), P = (e2, t2, a2) => e2 + (t2 - e2) * a2, F = 2 * Math.PI, I = null;
  function D(e2) {
    return (function(e3, t2) {
      if ("u" < typeof document || !e3) return t2;
      if (!I) {
        let e4 = document.createElement("canvas");
        e4.width = 1, e4.height = 1, I = e4.getContext("2d", { willReadFrequently: true });
      }
      if (!I) return t2;
      I.clearRect(0, 0, 1, 1), I.fillStyle = "#000", I.fillStyle = e3, I.fillRect(0, 0, 1, 1);
      let [a2, r2, n2] = I.getImageData(0, 0, 1, 1).data;
      return [a2, r2, n2];
    })(
      getComputedStyle(e2).getPropertyValue("--foreground").trim(),
      [23, 23, 23]
    );
  }
  let O = /* @__PURE__ */ new Map();
  function W(e2, t2, a2) {
    let r2 = `${e2}|${t2}|${a2}`, n2 = O.get(r2);
    if (n2) return n2;
    let i2 = new Promise((r3) => {
      if ("u" < typeof document || t2 < 1 || a2 < 1) return void r3(null);
      let n3 = new Image();
      n3.decoding = "async", n3.onload = () => {
        try {
          let e3 = document.createElement("canvas");
          e3.width = t2, e3.height = a2;
          let i3 = e3.getContext("2d", { willReadFrequently: true });
          if (!i3) return void r3(null);
          let s2 = Math.max(t2 / n3.naturalWidth, a2 / n3.naturalHeight), l2 = n3.naturalWidth * s2, o2 = n3.naturalHeight * s2;
          i3.imageSmoothingQuality = "high", i3.drawImage(n3, (t2 - l2) / 2, (a2 - o2) / 2, l2, o2), r3(i3.getImageData(0, 0, t2, a2).data);
        } catch {
          r3(null);
        }
      }, n3.onerror = () => r3(null), n3.src = e2;
    });
    if (O.set(r2, i2), O.size > 48) {
      let e3 = O.keys().next().value;
      e3 && O.delete(e3);
    }
    return i2;
  }
  function U(e2, t2, a2, r2) {
    let i2 = (0, n.useRef)(r2);
    (0, n.useEffect)(() => {
      i2.current = r2;
    }), (0, n.useEffect)(() => {
      let r3 = e2.current;
      if (!r3 || "u" < typeof ResizeObserver) return;
      let n2 = () => {
        let e3 = r3.clientWidth, n3 = r3.clientHeight;
        if (!e3 || !n3) return;
        let s3 = Math.min(2, window.devicePixelRatio || 1);
        for (let a3 of t2) {
          let t3 = a3.current;
          if (!t3) continue;
          let r4 = Math.round(e3 * s3), i3 = Math.round(n3 * s3);
          t3.width !== r4 && (t3.width = r4), t3.height !== i3 && (t3.height = i3);
        }
        let l2 = Math.max(1, Math.floor(e3 / a2)), o2 = Math.max(1, Math.floor(n3 / a2));
        i2.current({
          w: e3,
          h: n3,
          dpr: s3,
          cols: l2,
          rows: o2,
          ox: (e3 - l2 * a2) / 2 + a2 / 2,
          oy: (n3 - o2 * a2) / 2 + a2 / 2
        });
      };
      n2();
      let s2 = new ResizeObserver(n2);
      return s2.observe(r3), () => s2.disconnect();
    }, [e2, a2]);
  }
  function G({
    progress: e2,
    preview: t2,
    phase: a2,
    reduced: i2,
    seed: s2 = 0,
    pitch: l2 = 8,
    glow: o2 = true,
    className: d2,
    canvasClassName: c2,
    glowClassName: u2,
    previewClassName: m2
  }) {
    var h2;
    let g2, p2, f2, w2 = (0, n.useRef)(null), x2 = (0, n.useRef)(null), b2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), y2 = (0, n.useRef)(null), v2 = (0, n.useRef)([23, 23, 23]), j2 = (0, n.useRef)(null), k2 = (0, n.useRef)(0), N2 = (0, n.useRef)(() => void 0), { visible: $2, listeners: A2 } = (g2 = (0, n.useRef)(true), p2 = (0, n.useRef)(/* @__PURE__ */ new Set()), (0, n.useEffect)(() => {
      let e3 = w2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => {
        g2.current = !!e4?.isIntersecting, p2.current.forEach((e5) => e5());
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [w2]), { visible: g2, listeners: p2 });
    return (0, n.useLayoutEffect)(() => {
      N2.current = () => {
        let t3 = y2.current, r2 = x2.current?.getContext("2d");
        if (!t3 || !r2) return;
        let n2 = "idle" === a2 ? 0 : T(e2?.get() ?? 0), d3 = o2 && "running" === a2 && !i2 ? b2.current?.getContext("2d") : null, c3 = i2 || "running" !== a2, u3 = k2.current, m3 = i2 ? 0 : L(T((n2 - 0.2) / 0.58)), h3 = "done" === a2 ? 1 : i2 ? n2 : L(T((n2 - 0.8) / 0.19999999999999996)), g3 = 1.7 * s2, p3 = c3 ? 0.5 : 0.5 + 0.26 * Math.sin(0.55 * u3 + g3) + 0.06 * Math.sin(1.3 * u3 + 2 * g3), f3 = c3 ? 0.5 : 0.5 + 0.2 * Math.cos(0.42 * u3 + 1.3 * g3), w3 = (c3 ? 0.4 : 0.34 + 0.07 * Math.sin(1.25 * u3 + g3)) * Math.max(t3.w, t3.h), N3 = 1 / (w3 * w3), $3 = p3 * t3.w, A3 = f3 * t3.h, M2 = 1 - 0.7 * m3;
        r2.setTransform(t3.dpr, 0, 0, t3.dpr, 0, 0), r2.clearRect(0, 0, t3.w, t3.h), d3 && (d3.setTransform(t3.dpr, 0, 0, t3.dpr, 0, 0), d3.clearRect(0, 0, t3.w, t3.h));
        let [C2, R2, S2] = v2.current, E2 = m3 > 0 ? j2.current : null, z2 = l2 / 2;
        for (let e3 = 0; e3 < t3.rows; e3++) {
          let a3 = t3.oy + e3 * l2;
          for (let n3 = 0; n3 < t3.cols; n3++) {
            let i3 = t3.ox + n3 * l2, s3 = i3 - $3, o3 = a3 - A3, c4 = Math.exp(-(s3 * s3 + o3 * o3) * N3) * M2, u4 = l2 * (0.1 + 0.17 * c4), h4 = 0.13 + 0.55 * c4, g4 = null;
            if (E2) {
              let a4 = (e3 * t3.cols + n3) * 4, r3 = E2[a4], i4 = E2[a4 + 1], s4 = E2[a4 + 2], l3 = T(m3 * (0.8 + 0.45 * c4));
              u4 = P(
                u4,
                z2 * (0.58 + 0.4 * (1 - (0.2126 * r3 + 0.7152 * i4 + 0.0722 * s4) / 255)),
                l3
              ), h4 = P(h4, 1, l3), g4 = `rgb(${Math.round(P(C2, r3, l3))},${Math.round(P(R2, i4, l3))},${Math.round(P(S2, s4, l3))})`;
            }
            r2.globalAlpha = h4, r2.fillStyle = g4 ?? `rgb(${C2},${R2},${S2})`, r2.beginPath(), r2.arc(i3, a3, u4, 0, F), r2.fill(), d3 && c4 > 0.3 && (d3.globalAlpha = (c4 - 0.3) * 0.9, d3.fillStyle = g4 ?? `rgb(${C2},${R2},${S2})`, d3.beginPath(), d3.arc(i3, a3, 1.7 * u4, 0, F), d3.fill());
          }
        }
        r2.globalAlpha = 1, d3 && (d3.globalAlpha = 1);
        let I2 = x2.current;
        I2.style.opacity = `${1 - h3}`, I2.style.filter = !i2 && h3 > 0 && h3 < 1 ? `blur(${(5 * h3).toFixed(2)}px)` : "", b2.current && (b2.current.style.opacity = d3 ? `${1 - h3}` : "0");
        let D2 = _2.current;
        D2 && (D2.style.opacity = `${h3}`, D2.style.filter = !i2 && h3 < 1 ? `blur(${((1 - h3) * 12).toFixed(2)}px)` : "", D2.style.transform = !i2 && h3 < 1 ? `scale(${(1 + (1 - h3) * 0.04).toFixed(4)})` : "");
      };
    }), U(w2, [x2, b2], l2, (e3) => {
      let a3 = !y2.current || y2.current.cols !== e3.cols || y2.current.rows !== e3.rows;
      y2.current = e3, a3 && (j2.current = null), a3 && t2 && W(t2, e3.cols, e3.rows).then((t3) => {
        y2.current?.cols === e3.cols && y2.current.rows === e3.rows && (j2.current = t3, N2.current());
      }), w2.current && (v2.current = D(w2.current)), N2.current();
    }), (0, n.useEffect)(() => {
      let e3 = y2.current;
      if (j2.current = null, !t2 || !e3) return;
      let a3 = true;
      return W(t2, e3.cols, e3.rows).then((t3) => {
        a3 && y2.current === e3 && (j2.current = t3, N2.current());
      }), () => {
        a3 = false;
      };
    }, [t2]), h2 = () => {
      w2.current && (v2.current = D(w2.current), N2.current());
    }, f2 = (0, n.useRef)(h2), (0, n.useEffect)(() => {
      f2.current = h2;
    }), (0, n.useEffect)(() => {
      if ("u" < typeof MutationObserver) return;
      let e3 = () => f2.current(), t3 = new MutationObserver(e3);
      t3.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "data-theme", "style", "data-accent"]
      });
      let a3 = window.matchMedia?.("(prefers-color-scheme: dark)");
      return a3?.addEventListener?.("change", e3), () => {
        t3.disconnect(), a3?.removeEventListener?.("change", e3);
      };
    }, []), (0, n.useEffect)(() => {
      if (w2.current && (v2.current = D(w2.current)), N2.current(), "running" !== a2)
        return;
      if (i2) return e2?.on("change", () => N2.current());
      let t3 = 0, r2 = 0, n2 = (e3) => {
        k2.current += r2 ? Math.min(0.05, (e3 - r2) / 1e3) : 0, r2 = e3, N2.current(), t3 = $2.current ? requestAnimationFrame(n2) : 0;
      }, s3 = () => {
        $2.current && !t3 && (r2 = 0, t3 = requestAnimationFrame(n2));
      }, l3 = A2.current;
      return l3.add(s3), t3 = requestAnimationFrame(n2), () => {
        cancelAnimationFrame(t3), l3.delete(s3);
      };
    }, [a2, i2, e2, $2, A2]), (0, r.jsxs)("div", {
      ref: w2,
      className: d2,
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("canvas", { ref: b2, className: u2 }),
        (0, r.jsx)("canvas", { ref: x2, className: c2 }),
        t2 ? (0, r.jsx)("img", {
          ref: _2,
          src: t2,
          alt: "",
          className: m2,
          draggable: false,
          decoding: "async",
          style: { opacity: +("done" === a2) }
        }) : null
      ]
    });
  }
  let B = (e2) => -0.14 + 1.28 * T(e2);
  function H({
    src: e2,
    progress: t2,
    pitch: a2 = 6,
    className: i2,
    canvasClassName: s2,
    glowClassName: l2
  }) {
    let o2 = (0, n.useRef)(null), d2 = (0, n.useRef)(null), c2 = (0, n.useRef)(null), u2 = (0, n.useRef)(null), m2 = (0, n.useRef)(null), h2 = (0, n.useRef)(() => void 0);
    return (0, n.useLayoutEffect)(() => {
      h2.current = () => {
        let e3 = u2.current, r2 = d2.current?.getContext("2d"), n2 = c2.current?.getContext("2d");
        if (!e3 || !r2) return;
        r2.setTransform(e3.dpr, 0, 0, e3.dpr, 0, 0), r2.clearRect(0, 0, e3.w, e3.h), n2 && (n2.setTransform(e3.dpr, 0, 0, e3.dpr, 0, 0), n2.clearRect(0, 0, e3.w, e3.h));
        let i3 = m2.current;
        if (!i3) return;
        let s3 = B(t2.get()) * e3.w, l3 = 0.12 * e3.w * 1.15, o3 = Math.max(0, Math.floor((s3 - l3 - e3.ox) / a2)), h3 = Math.min(e3.cols - 1, Math.ceil((s3 + l3 - e3.ox) / a2));
        for (let t3 = o3; t3 <= h3; t3++) {
          let o4 = e3.ox + t3 * a2, d3 = L(T(1 - Math.abs(o4 - s3) / l3));
          if (!(d3 <= 0))
            for (let s4 = 0; s4 < e3.rows; s4++) {
              let l4 = e3.oy + s4 * a2, c3 = (s4 * e3.cols + t3) * 4, u3 = (0.2126 * i3[c3] + 0.7152 * i3[c3 + 1] + 0.0722 * i3[c3 + 2]) / 255, m3 = `rgb(${i3[c3]},${i3[c3 + 1]},${i3[c3 + 2]})`, h4 = 0.5 * a2 * (0.45 + 0.55 * d3) * (0.7 + 0.3 * (1 - u3));
              r2.globalAlpha = 0.55 + 0.45 * d3, r2.fillStyle = m3, r2.beginPath(), r2.arc(o4, l4, h4, 0, F), r2.fill(), n2 && d3 > 0.45 && (n2.globalAlpha = (d3 - 0.45) * 1.2, n2.fillStyle = m3, n2.beginPath(), n2.arc(o4, l4, 1.8 * h4, 0, F), n2.fill());
            }
        }
        r2.globalAlpha = 1, n2 && (n2.globalAlpha = 1);
      };
    }), U(o2, [d2, c2], a2, (t3) => {
      u2.current = t3, W(e2, t3.cols, t3.rows).then((e3) => {
        u2.current === t3 && (m2.current = e3, h2.current());
      }), h2.current();
    }), (0, n.useEffect)(() => t2.on("change", () => h2.current()), [t2]), (0, r.jsxs)("div", {
      ref: o2,
      className: i2,
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("canvas", { ref: c2, className: l2 }),
        (0, r.jsx)("canvas", { ref: d2, className: s2 })
      ]
    });
  }
  let q = [0, 1, 2, 7, 8, 3, 6, 5, 4];
  function K({ className: e2, dotClassName: t2 }) {
    return (0, r.jsx)("span", {
      className: e2,
      "aria-hidden": "true",
      children: q.map(
        (e3, a2) => (0, r.jsx)(
          "span",
          {
            className: t2,
            style: { animationDelay: `${(e3 - 9) * 90}ms` },
            "data-center": 4 === a2 || void 0
          },
          a2
        )
      )
    });
  }
  var V = a(75512), Y = a.n(V);
  let X = (...e2) => e2.filter(Boolean).join(" "), Z = { type: "spring", visualDuration: 0.26, bounce: 0 }, J = { duration: j.T.duration.fast, ease: [...j.T.ease.standard] }, Q = { duration: 0.1, ease: [...j.T.ease.standard] }, ee = { duration: 0 }, et = (e2) => ({
    key: e2,
    status: "running",
    progress: (0, i.OQ)(0),
    startedAt: performance.now()
  }), ea = (e2, t2) => `${e2?.width ?? t2.width} \xD7 ${e2?.height ?? t2.height}`, er = (e2) => e2 instanceof DOMException && "AbortError" === e2.name, en = (e2) => e2 instanceof Error && e2.message ? e2.message : "The model did not return an image.", ei = (e2) => "running" === e2 ? "running" : "done" === e2 ? "done" : "halted";
  function es(e2, t2, a2) {
    let [r2, i2] = (0, n.useState)(t2);
    return [
      e2 ?? r2,
      (0, n.useCallback)(
        (t3) => {
          void 0 === e2 && i2(t3), a2?.(t3);
        },
        [e2, a2]
      )
    ];
  }
  function el({ value: e2, options: t2 }) {
    return (0, r.jsx)("span", {
      className: Y().stable,
      children: Object.entries(t2).map(
        ([t3, a2]) => (0, r.jsx)(
          "span",
          {
            className: Y().stableItem,
            "data-on": t3 === e2 || void 0,
            "aria-hidden": t3 !== e2 || void 0,
            children: a2
          },
          t3
        )
      )
    });
  }
  function eo({ aspect: e2 }) {
    let t2 = e2.width / e2.height, a2 = t2 >= 1 ? 12 : Math.round(12 * t2 * 2) / 2, n2 = t2 >= 1 ? Math.round(12 / t2 * 2) / 2 : 12;
    return (0, r.jsx)("svg", {
      width: 14,
      height: 14,
      viewBox: "0 0 14 14",
      fill: "none",
      "aria-hidden": "true",
      className: Y().glyph,
      children: (0, r.jsx)("rect", {
        x: (14 - a2) / 2 + 0.6,
        y: (14 - n2) / 2 + 0.6,
        width: a2 - 1.2,
        height: n2 - 1.2,
        rx: 2,
        stroke: "currentColor",
        strokeWidth: 1.2
      })
    });
  }
  function ed(e2, t2, a2, r2) {
    let n2 = Math.max(
      0,
      t2.findIndex((e3) => e3.id === a2)
    ), i2 = t2.length - 1, s2 = "ArrowRight" === e2.key || "ArrowDown" === e2.key ? n2 === i2 ? 0 : n2 + 1 : "ArrowLeft" === e2.key || "ArrowUp" === e2.key ? 0 === n2 ? i2 : n2 - 1 : "Home" === e2.key ? 0 : "End" === e2.key ? i2 : -1;
    s2 < 0 || (e2.preventDefault(), r2(t2[s2].id), e2.currentTarget.parentElement?.querySelector(`[data-option="${CSS.escape(t2[s2].id)}"]`)?.focus());
  }
  function ec({ models: e2, value: t2, onChange: a2, reduced: n2 }) {
    return (0, r.jsx)("div", {
      className: Y().chips,
      role: "radiogroup",
      "aria-label": "Model",
      children: e2.map((i2) => {
        let l2 = i2.id === t2, o2 = (0, r.jsxs)("button", {
          type: "button",
          role: "radio",
          "aria-checked": l2,
          "aria-label": i2.name,
          "data-option": i2.id,
          tabIndex: l2 ? 0 : -1,
          className: X(Y().chip, Y().modelChip),
          onClick: () => a2(i2.id),
          onKeyDown: (r2) => ed(r2, e2, t2, a2),
          children: [
            (0, r.jsx)("span", {
              className: Y().chipMark,
              "aria-hidden": "true",
              children: i2.mark ?? (0, r.jsx)(h.A, { size: 14, strokeWidth: 1.75 })
            }),
            (0, r.jsx)(s.PY1.span, {
              className: Y().chipName,
              "aria-hidden": "true",
              initial: false,
              animate: { width: l2 ? "auto" : 0, opacity: +!!l2 },
              transition: n2 ? ee : {
                width: Z,
                opacity: {
                  duration: l2 ? 0.16 : 0.1,
                  ease: [...j.T.ease.standard],
                  delay: 0.04 * !!l2
                }
              },
              children: (0, r.jsx)("span", {
                className: Y().chipNameText,
                children: i2.name
              })
            })
          ]
        });
        return (0, r.jsx)(v.m, { content: i2.name, children: o2 }, i2.id);
      })
    });
  }
  function eu({ aspects: e2, value: t2, onChange: a2 }) {
    return (0, r.jsx)("div", {
      className: Y().chips,
      role: "radiogroup",
      "aria-label": "Aspect ratio",
      children: e2.map((n2) => {
        let i2 = n2.id === t2;
        return (0, r.jsxs)(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": i2,
            "aria-label": `${n2.label}, ${n2.width} by ${n2.height}`,
            "data-option": n2.id,
            tabIndex: i2 ? 0 : -1,
            className: X(Y().chip, Y().aspectChip),
            onClick: () => a2(n2.id),
            onKeyDown: (r2) => ed(r2, e2, t2, a2),
            children: [
              (0, r.jsx)(eo, { aspect: n2 }),
              (0, r.jsx)("span", { "aria-hidden": "true", children: n2.label })
            ]
          },
          n2.id
        );
      })
    });
  }
  function em({ progress: e2 }) {
    let t2 = (0, n.useRef)(null);
    return (0, l.L)(e2, "change", (e3) => {
      t2.current && (t2.current.textContent = `${Math.round(100 * Math.min(1, e3))}%`);
    }), (0, r.jsx)("span", {
      ref: t2,
      className: Y().percent,
      children: `${Math.round(100 * Math.min(1, e2.get()))}%`
    });
  }
  function eh({ id: e2, className: t2, reduced: a2, children: n2 }) {
    return (0, r.jsx)("span", {
      className: t2,
      children: (0, r.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: e2 ? (0, r.jsx)(
          s.PY1.span,
          {
            className: Y().pill,
            initial: a2 ? { opacity: 0 } : { opacity: 0, filter: "blur(3px)" },
            animate: { opacity: 1, filter: "blur(0px)" },
            exit: { opacity: 0, transition: Q },
            transition: { duration: 0.18, ease: [...j.T.ease.standard] },
            children: n2
          },
          e2
        ) : null
      })
    });
  }
  let eg = (e2, t2) => (7 * e2.id + 3.1 * t2) % 11;
  function ep({
    tile: e2,
    seed: t2,
    reduced: a2,
    upscaling: n2,
    upscaleProgress: i2
  }) {
    let l2 = e2.upscaled ?? e2.image, o2 = "done" === e2.status && !!l2, c2 = o2 && n2 && !a2, u2 = (0, d.G)(i2, (e3) => {
      let t3 = 100 * B(e3);
      return `linear-gradient(90deg, #000 ${t3 - 13.200000000000001}%, transparent ${t3 - 5.4}%)`;
    }), m2 = (0, d.G)(i2, (e3) => {
      let t3 = 100 * B(e3);
      return `linear-gradient(90deg, transparent ${t3 + 5.4}%, #000 ${t3 + 13.200000000000001}%)`;
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(G, {
          progress: e2.progress,
          preview: e2.preview,
          phase: ei(e2.status),
          reduced: a2,
          seed: t2,
          pitch: 8,
          className: Y().field,
          canvasClassName: Y().fieldCanvas,
          glowClassName: Y().fieldGlow,
          previewClassName: X(Y().image, Y().preview)
        }),
        o2 && l2 ? (0, r.jsxs)(r.Fragment, {
          children: [
            c2 ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(s.PY1.img, {
                  src: l2.src,
                  alt: "",
                  className: X(Y().image, Y().layer, Y().soft),
                  draggable: false,
                  style: { maskImage: m2, WebkitMaskImage: m2 }
                }),
                (0, r.jsx)(H, {
                  src: l2.src,
                  progress: i2,
                  className: Y().layer,
                  canvasClassName: Y().fieldCanvas,
                  glowClassName: Y().bandGlow
                })
              ]
            }) : null,
            (0, r.jsx)(s.PY1.img, {
              src: l2.src,
              alt: l2.alt,
              className: X(Y().image, Y().layer, Y().final),
              "data-fade": l2.src !== e2.preview || void 0,
              draggable: false,
              decoding: "async",
              style: c2 ? { maskImage: u2, WebkitMaskImage: u2 } : void 0
            })
          ]
        }) : null
      ]
    });
  }
  function ef({
    tile: e2,
    index: t2,
    seed: a2,
    active: n2,
    tabStop: i2,
    reduced: s2,
    onChoose: l2,
    onArrow: o2
  }) {
    let d2 = e2.upscaled ?? e2.image, c2 = "running" === e2.status ? "generating" : "error" === e2.status ? "failed" : "stopped" === e2.status ? "stopped" : d2?.alt ?? "ready";
    return (0, r.jsx)("button", {
      type: "button",
      role: "radio",
      "aria-checked": n2,
      tabIndex: i2 ? 0 : -1,
      className: Y().thumb,
      "data-thumb": t2,
      "data-status": e2.status,
      "data-active": n2 || void 0,
      "aria-label": `Image ${t2 + 1}, ${c2}`,
      onClick: l2,
      onKeyDown: o2,
      children: (0, r.jsxs)("span", {
        className: Y().thumbMedia,
        children: [
          (0, r.jsx)(G, {
            progress: e2.progress,
            preview: e2.preview,
            phase: ei(e2.status),
            reduced: s2,
            seed: a2,
            pitch: 4,
            glow: false,
            className: Y().field,
            canvasClassName: Y().fieldCanvas,
            previewClassName: X(Y().image, Y().preview)
          }),
          "done" === e2.status && d2 ? (0, r.jsx)("img", {
            src: d2.src,
            alt: "",
            className: X(Y().image, Y().layer, Y().final),
            "data-fade": d2.src !== e2.preview || void 0,
            draggable: false,
            decoding: "async"
          }) : null,
          "error" === e2.status || "stopped" === e2.status ? (0, r.jsx)("span", {
            className: Y().thumbHalt,
            "data-status": e2.status,
            children: "error" === e2.status ? (0, r.jsx)(g.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }) : (0, r.jsx)(p.A, {
              size: 10,
              strokeWidth: 2.25,
              "aria-hidden": "true"
            })
          }) : null
        ]
      })
    });
  }
  function ew({
    prompt: e2,
    defaultPrompt: t2 = "Cinematic landscapes at golden hour: an alpine lake under a glowing peak, hazy mountain ridges, a long coastline and a calm sea at dusk, shot on 35mm film",
    onPromptChange: a2,
    models: i2 = N,
    model: l2,
    defaultModel: d2,
    onModelChange: v2,
    aspectRatios: k2 = $,
    aspectRatio: M2,
    defaultAspectRatio: C2,
    onAspectRatioChange: R2,
    onGenerate: S2,
    onUpscale: T2,
    onDownload: L2,
    onSelect: P2,
    suggestions: F2 = A,
    autoGenerate: I2,
    placeholder: D2 = "Describe the image you want",
    className: O2
  }) {
    let W2, U2, B2, H2 = (0, c.I)() ?? false, q2 = !S2, [V2, ei2] = es(e2, t2, a2), [eo2, ed2] = es(l2, d2 ?? i2[0]?.id ?? "", v2), [ex2, eb2] = es(M2, C2 ?? k2[0]?.id ?? "", R2), e_2 = i2.find((e10) => e10.id === eo2) ?? i2[0], ey2 = k2.find((e10) => e10.id === ex2) ?? k2[0], [ev2, ej] = (0, n.useState)(null), [ek, eN] = (0, n.useState)(0), [e$, eA] = (0, n.useState)(null), [eM, eC] = (0, n.useState)(false), [eR, eS] = (0, n.useState)(""), eE = (0, n.useRef)(null), ez = (0, n.useRef)(null), eT = (0, n.useRef)(null), eL = (0, n.useRef)(0), eP = (0, n.useRef)(null), eF = (0, n.useRef)(0), eI = (0, n.useRef)(/* @__PURE__ */ new Map()), eD = (0, n.useRef)(/* @__PURE__ */ new Map()), eO = (0, n.useRef)(/* @__PURE__ */ new Map()), eW = (0, n.useRef)(/* @__PURE__ */ new Set()), eU = (0, u.d)(0), eG = (0, n.useRef)(void 0), eB = (0, n.useRef)(null), eH = (0, n.useRef)(false), eq = (0, n.useRef)(false), eK = (0, n.useRef)(void 0), eV = (e10, t3, a3) => {
      let r2 = Math.max(e10.get(), Math.min(1, Math.max(0, t3))), n2 = a3 ? eD.current.get(a3) : eG.current;
      n2?.stop();
      let i3 = (e11) => {
        a3 ? e11 ? eD.current.set(a3, e11) : eD.current.delete(a3) : eG.current = e11;
      };
      if (H2 || r2 - e10.get() < 0.06) {
        e10.set(r2), i3();
        return;
      }
      i3((0, m.i)(e10, r2, { duration: 0.32, ease: [...j.T.ease.standard] }));
    }, eY = (0, n.useCallback)((e10, t3, a3) => {
      ej(
        (r2) => r2 && r2.id === e10 ? {
          ...r2,
          tiles: r2.tiles.map((e11, r3) => r3 === t3 ? { ...e11, ...a3 } : e11)
        } : r2
      );
    }, []), eX = (e10, t3) => {
      let a3 = eI.current.get(e10);
      if (!a3 || e10 !== eL.current || (a3.pending -= 1, "done" === t3 && (a3.done += 1), "failed" === t3 && (a3.failed += 1), a3.pending > 0))
        return;
      let r2 = performance.now();
      ej((t4) => t4 && t4.id === e10 ? { ...t4, endedAt: r2 } : t4), eS(
        4 === a3.done ? "4 images ready. Pick one to upscale, vary or download." : `${a3.done} of 4 images ready${a3.failed ? `, ${a3.failed} failed` : ""}.`
      );
    }, eZ = (e10, t3, a3) => {
      let { key: r2, progress: n2 } = a3, i3 = new AbortController();
      eO.current.set(r2, i3), n2.set(0), eD.current.get(r2)?.stop(), eD.current.set(
        r2,
        (0, m.i)(n2, 0.9, { duration: 9, ease: [0.1, 0.7, 0.3, 1] })
      ), (S2 ?? E)(
        {
          prompt: e10.prompt,
          model: e10.model,
          aspect: e10.aspect,
          index: t3,
          count: 4,
          variationOf: e10.variationOf?.image
        },
        {
          signal: i3.signal,
          onProgress: (a4, s2) => {
            i3.signal.aborted || (s2 && !eW.current.has(r2) && (eW.current.add(r2), eY(e10.id, t3, { preview: s2 })), eV(n2, a4, r2));
          }
        }
      ).then(
        (a4) => {
          if (i3.signal.aborted) return;
          eO.current.delete(r2), eD.current.get(r2)?.stop();
          let s2 = () => {
            eY(e10.id, t3, {
              status: "done",
              image: a4,
              endedAt: performance.now()
            }), t3 === eF.current && e10.id === eL.current && P2?.(a4), eX(e10.id, "done");
          };
          if (H2 || n2.get() > 0.98) {
            n2.set(1), s2();
            return;
          }
          eD.current.set(
            r2,
            (0, m.i)(n2, 1, {
              duration: 0.36,
              ease: [...j.T.ease.standard],
              onComplete: s2
            })
          );
        },
        (a4) => {
          if (eO.current.delete(r2), eD.current.get(r2)?.stop(), i3.signal.aborted || er(a4)) {
            eY(e10.id, t3, { status: "stopped" }), eX(e10.id, "stopped");
            return;
          }
          eY(e10.id, t3, { status: "error", error: en(a4) }), eS(`Image ${t3 + 1} failed. ${en(a4)}`), eX(e10.id, "failed");
        }
      );
    }, eJ = () => {
      eB.current?.abort(), eG.current?.stop();
    };
    (0, n.useEffect)(
      () => () => {
        eO.current.forEach((e10) => e10.abort()), eD.current.forEach((e10) => e10.stop()), eB.current?.abort(), window.clearTimeout(eK.current);
      },
      []
    );
    let eQ = (e10) => {
      let t3 = (e10 ? ev2?.prompt : V2)?.trim();
      if (!t3 || !e_2 || !ey2) return;
      eO.current.forEach((e11) => e11.abort()), eO.current.clear(), eD.current.forEach((e11) => e11.stop()), eJ();
      let a3 = ++eL.current, r2 = {
        id: a3,
        prompt: t3,
        model: e_2,
        aspect: e10 && ev2 ? ev2.aspect : ey2,
        variationOf: e10,
        tiles: Array.from({ length: 4 }, (e11, t4) => et(`${a3}-${t4}-0`)),
        startedAt: performance.now()
      };
      eD.current.clear(), eI.current.set(a3, { pending: 4, done: 0, failed: 0 }), ej(r2), eN(0), eF.current = 0, eA(null), eC(false), P2?.(null), eS(
        `${e10 ? `Generating variations of image ${e10.index + 1}` : "Generating 4 images"} with ${e_2.name}, ${r2.aspect.label}.${q2 ? " Simulated, nothing was sent." : ""}`
      ), r2.tiles.forEach((e11, t4) => eZ(r2, t4, e11));
    }, e0 = () => {
      eO.current.forEach((e10) => e10.abort()), eS("Stopped. Finished images are kept.");
    }, e1 = (e10) => {
      let t3 = ev2?.tiles[e10];
      if (!t3 || e10 === ek) return;
      e$ && (eJ(), eA(null)), eN(e10), eF.current = e10, eC(false);
      let a3 = t3.upscaled ?? t3.image;
      a3 && P2?.(a3), eS(
        `Image ${e10 + 1}${"running" === t3.status ? ", generating" : "error" === t3.status ? ", failed" : "stopped" === t3.status ? ", stopped" : ""}.`
      );
    }, e4 = I2 ?? q2, e5 = (0, n.useRef)(() => void 0);
    (0, n.useEffect)(() => {
      let e10, t3 = eE.current;
      if (!e4 || eq.current || !t3 || "u" < typeof IntersectionObserver) return;
      let a3 = new IntersectionObserver(
        ([t4]) => {
          t4?.isIntersecting && !eq.current && (eq.current = true, a3.disconnect(), e10 = window.setTimeout(() => {
            eP.current || eH.current || e5.current();
          }, 450));
        },
        { threshold: 0.35 }
      );
      return a3.observe(t3), () => {
        a3.disconnect(), window.clearTimeout(e10);
      };
    }, [e4]), (0, n.useLayoutEffect)(() => {
      e5.current = () => eQ(), eP.current = ev2;
    });
    let e22 = async () => {
      let e10 = ev2?.tiles[ek];
      if (!ev2 || !e10?.image || e10.upscaled) return;
      eB.current?.abort();
      let t3 = new AbortController();
      eB.current = t3, eG.current?.stop(), eU.set(0), eA({ index: ek, status: "running" }), eS(
        `Upscaling image ${ek + 1}.${T2 ? "" : " Simulated, nothing was sent."}`
      );
      try {
        let a3, r2 = await (T2 ?? z)(e10.image, {
          signal: t3.signal,
          onProgress: (e11) => {
            t3.signal.aborted || eV(eU, e11, null);
          }
        });
        if (t3.signal.aborted) return;
        eG.current?.stop(), eU.set(1), eY(ev2.id, ek, { upscaled: r2 }), eA(null), P2?.(r2), a3 = `Upscaled image ${ek + 1} to ${ea(r2, ev2.aspect)}.`, eS(a3);
      } catch (e11) {
        if (t3.signal.aborted || er(e11)) return;
        eA({ index: ek, status: "error", message: en(e11) }), eS(`Upscale failed. ${en(e11)}`);
      }
    }, [e7, e3] = (0, n.useState)(null), e6 = (0, n.useRef)(false);
    (0, n.useLayoutEffect)(() => {
      let e10 = eT.current;
      if (!e10 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        let a3 = Math.round(t4?.contentRect.width ?? e10.offsetWidth);
        e3((e11) => (e11 !== a3 && (e6.current = true), a3));
      });
      return t3.observe(e10), () => t3.disconnect();
    }, []);
    let e9 = ev2?.aspect ?? ey2, e8 = e9 ? e9.width / e9.height : 1, te = e7 ? Math.round(Math.min(e7, 440 * e8)) : 0, tt = Math.round(te / e8), ta = (0, u.d)(0), tr = (0, u.d)(0), tn = (0, n.useRef)(false);
    (0, n.useLayoutEffect)(() => {
      if (!te) return;
      let e10 = !tn.current || e6.current || H2;
      if (tn.current = true, e6.current = false, e10) {
        ta.stop(), tr.stop(), ta.set(te), tr.set(tt);
        return;
      }
      let t3 = (0, m.i)(ta, te, Z), a3 = (0, m.i)(tr, tt, Z);
      return () => {
        t3.stop(), a3.stop();
      };
    }, [te, tt, H2, ta, tr]);
    let ti = ev2?.tiles.some((e10) => "running" === e10.status) ?? false, ts = ev2?.tiles[ek], tl = ts?.upscaled ?? ts?.image, to = e$?.status === "running" && e$.index === ek, td = ev2?.tiles.filter((e10) => "done" === e10.status).length ?? 0, tc = ts?.status === "done" && !!tl && !to, tu = ev2 && ts ? to ? {
      id: `up-${ts.key}`,
      node: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(K, {
            className: Y().spinner,
            dotClassName: Y().spinDot
          }),
          (0, r.jsx)("span", { children: "Upscaling" }),
          (0, r.jsx)(em, { progress: eU })
        ]
      })
    } : e$?.status === "error" && e$.index === ek ? {
      id: `upfail-${ts.key}`,
      node: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(g.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true",
            className: Y().danger
          }),
          (0, r.jsx)("span", { children: "Upscale failed" })
        ]
      })
    } : "running" === ts.status ? {
      id: `run-${ts.key}`,
      node: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(K, {
            className: Y().spinner,
            dotClassName: Y().spinDot
          }),
          (0, r.jsx)("span", {
            children: ev2.variationOf ? "Varying" : "Generating"
          }),
          (0, r.jsx)(em, { progress: ts.progress })
        ]
      })
    } : "done" === ts.status && ts.upscaled && ts.image ? {
      id: `upd-${ts.key}`,
      node: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(f.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          (0, r.jsx)("span", { children: "Upscaled" }),
          (0, r.jsx)("span", {
            className: Y().mono,
            children: (W2 = ts.image, U2 = ts.upscaled, W2.width && U2.width ? `${Math.round(U2.width / W2.width * 10) / 10}\xD7` : "")
          })
        ]
      })
    } : "done" === ts.status && tl ? {
      id: `done-${ts.key}`,
      node: (0, r.jsx)("span", {
        className: Y().mono,
        children: [
          tl.seed ? `seed ${tl.seed}` : null,
          ts.endedAt ? (B2 = ts.endedAt - ts.startedAt, `${(Math.max(B2, 100) / 1e3).toFixed(1)}s`) : null
        ].filter(Boolean).join(" \xB7 ") || `image ${ek + 1}`
      })
    } : null : null, tm = ea(
      ts?.status === "done" ? tl : void 0,
      e9 ?? { id: "", label: "", width: 1024, height: 1024 }
    );
    return (0, r.jsxs)("div", {
      ref: eE,
      className: X(Y().root, O2),
      onPointerDownCapture: () => {
        eH.current = true;
      },
      onKeyDownCapture: (e10) => {
        eH.current = true, "Escape" === e10.key && ti && (e10.preventDefault(), e0());
      },
      children: [
        (0, r.jsx)("div", {
          ref: eT,
          className: Y().frame,
          children: (0, r.jsxs)(s.PY1.div, {
            className: Y().stage,
            "data-status": ts?.status ?? "empty",
            style: te ? { width: ta, height: tr } : {
              width: "100%",
              aspectRatio: `${e8}`,
              maxWidth: `${440 * e8}px`
            },
            children: [
              (0, r.jsx)(o.N, {
                initial: false,
                children: ev2 && ts ? (0, r.jsx)(
                  s.PY1.div,
                  {
                    className: Y().layer,
                    role: "img",
                    "aria-label": "done" === ts.status && tl ? tl.alt : `Image ${ek + 1}, ${"running" === ts.status ? "generating" : "error" === ts.status ? "failed" : "stopped"}`,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: { duration: 0.16 } },
                    transition: H2 ? ee : { duration: 0.2, ease: [...j.T.ease.standard] },
                    children: (0, r.jsx)(ep, {
                      tile: ts,
                      seed: eg(ev2, ek),
                      reduced: H2,
                      upscaling: to,
                      upscaleProgress: eU
                    })
                  },
                  ts.key
                ) : (0, r.jsxs)(
                  s.PY1.div,
                  {
                    className: Y().layer,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: Q },
                    transition: J,
                    children: [
                      (0, r.jsx)(G, {
                        phase: "idle",
                        reduced: H2,
                        pitch: 8,
                        className: Y().field,
                        canvasClassName: Y().fieldCanvas,
                        glowClassName: Y().fieldGlow
                      }),
                      (0, r.jsxs)("div", {
                        className: Y().empty,
                        children: [
                          (0, r.jsx)("p", {
                            className: Y().emptyTitle,
                            children: "Describe an image, then generate"
                          }),
                          (0, r.jsx)("div", {
                            className: Y().suggestions,
                            children: F2.slice(0, 3).map(
                              (e10) => (0, r.jsx)(
                                "button",
                                {
                                  type: "button",
                                  className: Y().suggestion,
                                  onClick: () => {
                                    ei2(e10), ez.current?.focus();
                                  },
                                  children: e10
                                },
                                e10
                              )
                            )
                          })
                        ]
                      })
                    ]
                  },
                  "empty"
                )
              }),
              (0, r.jsx)(o.N, {
                children: ts && ("error" === ts.status || "stopped" === ts.status) ? (0, r.jsxs)(
                  s.PY1.div,
                  {
                    className: Y().halt,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: J,
                    children: [
                      (0, r.jsxs)("span", {
                        className: Y().haltLabel,
                        "data-status": ts.status,
                        children: [
                          "error" === ts.status ? (0, r.jsx)(g.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }) : (0, r.jsx)(p.A, {
                            size: 12,
                            strokeWidth: 2.25,
                            "aria-hidden": "true"
                          }),
                          "error" === ts.status ? "Failed" : "Stopped"
                        ]
                      }),
                      "error" === ts.status && ts.error ? (0, r.jsx)("span", {
                        className: Y().haltMessage,
                        children: ts.error
                      }) : null,
                      (0, r.jsxs)(y.$, {
                        variant: "secondary",
                        size: "sm",
                        className: Y().retry,
                        onClick: () => ((e10) => {
                          let t3 = ev2?.tiles[e10], a3 = ev2 ? eI.current.get(ev2.id) : void 0;
                          if (!ev2 || !t3 || !a3 || "running" === t3.status || "done" === t3.status)
                            return;
                          a3.pending += 1, "error" === t3.status && (a3.failed -= 1);
                          let r2 = et(
                            `${ev2.id}-${e10}-${Number(t3.key.split("-")[2] ?? 0) + 1}`
                          );
                          ej({
                            ...ev2,
                            endedAt: void 0,
                            tiles: ev2.tiles.map(
                              (t4, a4) => a4 === e10 ? r2 : t4
                            )
                          }), eS(
                            `Retrying image ${e10 + 1}.${q2 ? " Simulated, nothing was sent." : ""}`
                          ), eZ(ev2, e10, r2);
                        })(ek),
                        "aria-label": `Retry image ${ek + 1}`,
                        children: [
                          (0, r.jsx)(w.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Retry"
                        ]
                      })
                    ]
                  },
                  `halt-${ts.key}`
                ) : null
              }),
              (0, r.jsx)(eh, {
                id: tu?.id ?? null,
                className: Y().statusSlot,
                reduced: H2,
                children: tu?.node
              }),
              (0, r.jsx)(eh, {
                id: `dims-${tm}`,
                className: Y().dimsSlot,
                reduced: H2,
                children: (0, r.jsx)("span", {
                  className: Y().mono,
                  children: tm
                })
              })
            ]
          })
        }),
        (0, r.jsxs)("div", {
          className: Y().bar,
          children: [
            (0, r.jsx)("div", {
              className: Y().strip,
              role: "radiogroup",
              "aria-label": ev2 ? `Variations for: ${ev2.prompt}` : "Variations",
              "data-empty": !ev2 || void 0,
              children: ev2 ? ev2.tiles.map(
                (e10, t3) => (0, r.jsx)(
                  ef,
                  {
                    tile: e10,
                    index: t3,
                    seed: eg(ev2, t3) + 5,
                    active: t3 === ek,
                    tabStop: t3 === ek,
                    reduced: H2,
                    onChoose: () => e1(t3),
                    onArrow: (e11) => {
                      let a3 = "ArrowRight" === e11.key || "ArrowDown" === e11.key ? (t3 + 1) % 4 : "ArrowLeft" === e11.key || "ArrowUp" === e11.key ? (t3 + 4 - 1) % 4 : "Home" === e11.key ? 0 : "End" === e11.key ? 3 : -1;
                      a3 < 0 || (e11.preventDefault(), e1(a3), eE.current?.querySelector(`[data-thumb="${a3}"]`)?.focus());
                    }
                  },
                  e10.key
                )
              ) : Array.from(
                { length: 4 },
                (e10, t3) => (0, r.jsx)(
                  "span",
                  {
                    className: Y().thumbPlaceholder,
                    "aria-hidden": "true"
                  },
                  t3
                )
              )
            }),
            (0, r.jsxs)("div", {
              className: Y().actions,
              children: [
                (0, r.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  className: Y().action,
                  "aria-label": ts?.upscaled ? "Upscaled" : to ? "Upscaling" : "Upscale",
                  disabled: !tc || !!ts?.upscaled,
                  onClick: e22,
                  children: (0, r.jsx)(el, {
                    value: ts?.upscaled ? "upscaled" : to ? "upscaling" : "upscale",
                    options: {
                      upscale: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(x.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: Y().actionLabel,
                            children: "Upscale"
                          })
                        ]
                      }),
                      upscaling: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(x.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: Y().actionLabel,
                            children: "Upscaling"
                          })
                        ]
                      }),
                      upscaled: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(f.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: Y().actionLabel,
                            children: "Upscaled"
                          })
                        ]
                      })
                    }
                  })
                }),
                (0, r.jsxs)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  className: Y().action,
                  "aria-label": "Vary",
                  disabled: !tc,
                  onClick: () => ts?.image && eQ({ image: ts.image, index: ek }),
                  children: [
                    (0, r.jsx)(b.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, r.jsx)("span", {
                      className: Y().actionLabel,
                      children: "Vary"
                    })
                  ]
                }),
                (0, r.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  className: Y().action,
                  "aria-label": eM ? "Saved" : "Download",
                  disabled: !tc,
                  onClick: () => {
                    var e10;
                    let t3, a3, r2 = ev2?.tiles[ek], n2 = r2?.upscaled ?? r2?.image;
                    if (!ev2 || !n2) return;
                    let i3 = (e10 = ev2.prompt, t3 = e10.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").split("-").slice(0, 5).join("-") || "image", a3 = n2.src.split("?")[0].match(/\.(png|jpe?g|webp|avif)$/i)?.[1] ?? "png", `${t3}-${ek + 1}${n2.width && n2.height ? `-${n2.width}x${n2.height}` : ""}.${a3}`);
                    if (L2) L2(n2);
                    else {
                      let e11 = document.createElement("a");
                      e11.href = n2.src, e11.download = i3, document.body.appendChild(e11), e11.click(), e11.remove();
                    }
                    eC(true), window.clearTimeout(eK.current), eK.current = window.setTimeout(() => eC(false), 1600), eS(
                      L2 ? `Image ${ek + 1} sent to download.` : `Downloaded ${i3}.`
                    );
                  },
                  children: (0, r.jsx)(el, {
                    value: eM ? "saved" : "download",
                    options: {
                      download: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(_.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: Y().actionLabel,
                            children: "Download"
                          })
                        ]
                      }),
                      saved: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(f.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: Y().actionLabel,
                            children: "Saved"
                          })
                        ]
                      })
                    }
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("form", {
          className: Y().composer,
          onSubmit: (e10) => {
            e10.preventDefault(), ti ? e0() : eQ();
          },
          children: [
            (0, r.jsx)("textarea", {
              ref: ez,
              className: Y().prompt,
              value: V2,
              placeholder: D2,
              rows: 2,
              "aria-label": "Prompt",
              "aria-keyshortcuts": "Meta+Enter Control+Enter",
              onChange: (e10) => ei2(e10.target.value),
              onKeyDown: (e10) => {
                "Enter" === e10.key && (e10.metaKey || e10.ctrlKey) && (e10.preventDefault(), ti || eQ());
              }
            }),
            (0, r.jsxs)("div", {
              className: Y().toolbar,
              children: [
                (0, r.jsxs)("div", {
                  className: Y().options,
                  children: [
                    (0, r.jsx)(ec, {
                      models: i2,
                      value: e_2?.id ?? "",
                      onChange: ed2,
                      reduced: H2
                    }),
                    (0, r.jsx)(eu, {
                      aspects: k2,
                      value: ey2?.id ?? "",
                      onChange: eb2
                    })
                  ]
                }),
                (0, r.jsx)(y.$, {
                  type: "submit",
                  size: "sm",
                  variant: ti ? "secondary" : "primary",
                  className: X(Y().generate, !ti && Y().generatePrimary),
                  disabled: !ti && !V2.trim(),
                  children: (0, r.jsx)(el, {
                    value: ti ? "stop" : "generate",
                    options: {
                      generate: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(h.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Generate"
                        ]
                      }),
                      stop: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(p.A, {
                            size: 12,
                            strokeWidth: 2.25,
                            "aria-hidden": "true"
                          }),
                          "Stop",
                          (0, r.jsxs)("span", {
                            className: Y().count,
                            children: [td, "/", 4]
                          })
                        ]
                      })
                    }
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("span", {
          className: Y().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eR
        })
      ]
    });
  }
  var ex = a(50680), eb = a(48634), e_ = a.n(eb);
  function ey() {
    let e2, [t2, a2] = (0, n.useState)(false), i2 = (e2 = (0, n.useRef)(false), (0, n.useCallback)(
      async (a3, r2) => {
        if (0 === a3.index && (e2.current = true), !t2 || 2 !== a3.index || !e2.current)
          return E(a3, r2);
        e2.current = false;
        let n2 = new AbortController(), i3 = () => n2.abort();
        r2.signal.addEventListener("abort", i3, { once: true });
        try {
          return await E(a3, {
            signal: n2.signal,
            onProgress: (e3, t3) => {
              r2.onProgress(e3, t3), e3 > 0.58 && n2.abort();
            }
          });
        } catch (e3) {
          if (r2.signal.aborted) throw e3;
          throw Error("The model timed out. Try again.");
        } finally {
          r2.signal.removeEventListener("abort", i3);
        }
      },
      [t2]
    ));
    return (0, r.jsxs)("div", {
      className: e_().demo,
      children: [
        (0, r.jsx)(ew, { onGenerate: t2 ? i2 : void 0, autoGenerate: true }),
        (0, r.jsx)("div", {
          className: e_().controls,
          children: (0, r.jsx)(ex.d, {
            label: "Fail one image",
            checked: t2,
            onCheckedChange: a2
          })
        })
      ]
    });
  }
  let ev = ey;
}

__m(__module,__exports,__require);
}