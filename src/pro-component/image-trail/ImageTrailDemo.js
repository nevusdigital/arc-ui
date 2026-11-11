function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { ImageTrailDemo: () => u, default: () => f });
  var i = t(95155), r = t(12115), o = t(18310), n = t(74458), s = t.n(n);
  let l = () => () => {
  }, d = (e2, a2, t2) => Math.min(t2, Math.max(a2, e2));
  function c({
    images: e2,
    children: a2,
    spacing: t2 = 90,
    lifetime: n2 = 700,
    size: h2 = 168,
    aspectRatio: m2 = 0.8,
    maxTilt: p2 = 10,
    poolSize: g2 = 14,
    intro: u2 = false,
    disabled: f2 = false,
    className: w,
    style: b
  }) {
    let v, y = (v = (0, r.useSyncExternalStore)(
      l,
      () => true,
      () => false
    ), !!(0, o.I)() && v), j = (0, r.useRef)(null), k = (0, r.useRef)([]), _ = (0, r.useRef)({
      next: 0,
      image: 0,
      z: 1,
      drop: null,
      samples: [],
      lastDrop: 0,
      touch: -1,
      touched: false
    }), x = (0, r.useRef)({
      images: e2,
      spacing: t2,
      lifetime: n2,
      size: h2,
      aspectRatio: m2,
      maxTilt: p2,
      disabled: f2,
      reduced: y
    });
    function A(e3, a3, t3) {
      let { spacing: i2, reduced: r2 } = x.current, o2 = _.current;
      for (o2.samples.push({ t: t3, x: e3, y: a3 }); o2.samples.length > 2 && t3 - o2.samples[0].t > 80; )
        o2.samples.shift();
      if (!o2.drop) {
        o2.drop = { x: e3, y: a3 };
        return;
      }
      if (Math.hypot(e3 - o2.drop.x, a3 - o2.drop.y) < i2 * (r2 ? 1.6 : 1) || t3 - o2.lastDrop < 40)
        return;
      let n3 = o2.samples[0], s2 = Math.max(1, t3 - n3.t);
      !(function(e4, a4, t4, i3) {
        let {
          images: r3,
          lifetime: o3,
          size: n4,
          aspectRatio: s3,
          maxTilt: l2,
          reduced: c2
        } = x.current, h3 = _.current, m3 = Math.min(g2, k.current.length), p3 = k.current[h3.next % m3];
        if (!p3 || !r3.length) return;
        h3.next += 1;
        let u3 = p3.firstElementChild, f3 = r3[h3.image % r3.length].src;
        h3.image += 1, u3 && u3.getAttribute("src") !== f3 && u3.setAttribute("src", f3);
        let w2 = n4 / s3, b2 = e4 - n4 / 2, v2 = a4 - w2 / 2;
        for (let e5 of (p3.style.width = `${n4}px`, p3.style.height = `${w2}px`, p3.style.zIndex = String(++h3.z), p3.getAnimations()))
          e5.cancel();
        let y2 = 520 + o3 + 560, j2 = (e5, a5, t5, i4) => `translate3d(${e5.toFixed(1)}px, ${a5.toFixed(1)}px, 0) rotate(${t5.toFixed(2)}deg) scale(${i4})`;
        if (c2)
          return p3.animate(
            [
              { transform: j2(b2, v2, 0, 1), opacity: 0 },
              { transform: j2(b2, v2, 0, 1), opacity: 1, offset: 160 / y2 },
              { transform: j2(b2, v2, 0, 1), opacity: 1, offset: (520 + o3) / y2 },
              { transform: j2(b2, v2, 0, 1), opacity: 0 }
            ],
            { duration: y2, fill: "both" }
          );
        let A2 = (37 * h3.next % 5 - 2) * 0.9, M2 = d(7 * t4, -l2, l2) + A2, T = d(70 * t4, -48, 48), N = d(70 * i3, -48, 48);
        p3.animate(
          [
            {
              transform: j2(b2 - 0.15 * T, v2 - 0.15 * N, 0.4 * M2, 0.6),
              opacity: 0,
              easing: "linear(0, 0.0258, 0.09, 0.1763, 0.2732, 0.3724, 0.4683, 0.5573, 0.6376, 0.7082, 0.7689, 0.8202, 0.8628, 0.8976, 0.9256, 0.9476, 0.9648, 0.9778, 0.9875, 0.9945, 0.9994, 1.0026, 1.0047, 1.0058, 1.0062, 1.0062, 1.0059, 1.0055, 1.0049, 1.0043, 1.0036, 1.0031, 1.0025, 1.002, 1.0016, 1.0013, 1)"
            },
            { transform: j2(b2, v2, M2, 1), opacity: 1, offset: 520 / y2 },
            {
              transform: j2(b2 + 0.25 * T, v2 + 0.25 * N, M2, 1),
              opacity: 1,
              offset: (520 + o3) / y2,
              easing: "cubic-bezier(.22, 1, .36, 1)"
            },
            { transform: j2(b2 + T, v2 + N + 10, 1.25 * M2, 0.86), opacity: 0 }
          ],
          { duration: y2, fill: "both" }
        );
      })(e3, a3, (e3 - n3.x) / s2, (a3 - n3.y) / s2), o2.drop = { x: e3, y: a3 }, o2.lastDrop = t3;
    }
    function M(e3) {
      let a3 = _.current;
      "touch" === e3.pointerType && e3.pointerId === a3.touch && (a3.touch = -1), ("pointerleave" === e3.type || "touch" === e3.pointerType) && (a3.drop = null, a3.samples = []);
    }
    return (0, r.useLayoutEffect)(() => {
      x.current = {
        images: e2,
        spacing: t2,
        lifetime: n2,
        size: h2,
        aspectRatio: m2,
        maxTilt: p2,
        disabled: f2,
        reduced: y
      };
    }), (0, r.useEffect)(() => {
      for (let a3 of e2) {
        let e3 = new Image();
        e3.decoding = "async", e3.src = a3.src;
      }
    }, [e2]), (0, r.useEffect)(() => {
      let e3 = j.current;
      if (!u2 || !e3 || "u" < typeof IntersectionObserver) return;
      let a3 = 0, t3 = new IntersectionObserver(
        ([i2]) => {
          if (!i2?.isIntersecting || (t3.disconnect(), x.current.reduced || x.current.disabled || _.current.touched))
            return;
          let r2 = performance.now(), o2 = (t4) => {
            let i3 = _.current;
            if (i3.touched) {
              i3.drop = null, i3.samples = [];
              return;
            }
            let n3 = Math.min(1, (t4 - r2) / 1100), s2 = n3 < 0.5 ? 2 * n3 * n3 : 1 - Math.pow(-2 * n3 + 2, 2) / 2;
            A(
              e3.offsetWidth * (0.14 + 0.72 * s2),
              e3.offsetHeight * (0.5 + 0.2 * Math.sin(s2 * Math.PI * 2)),
              t4
            ), n3 < 1 ? a3 = requestAnimationFrame(o2) : (i3.drop = null, i3.samples = []);
          };
          a3 = requestAnimationFrame(o2);
        },
        { threshold: 0.6 }
      );
      return t3.observe(e3), () => {
        t3.disconnect(), cancelAnimationFrame(a3);
      };
    }, [u2]), (0, i.jsxs)("div", {
      ref: j,
      className: [s().root, w].filter(Boolean).join(" "),
      style: b,
      "data-disabled": f2 ? "" : void 0,
      onPointerMove: function(e3) {
        if (x.current.disabled) return;
        let a3 = _.current;
        if ("touch" === e3.pointerType && a3.touch !== e3.pointerId) return;
        a3.touched = true;
        let t3 = e3.currentTarget.getBoundingClientRect();
        A(e3.clientX - t3.left, e3.clientY - t3.top, e3.timeStamp);
      },
      onPointerDown: function(e3) {
        if ("touch" !== e3.pointerType || x.current.disabled) return;
        let a3 = _.current;
        a3.touch = e3.pointerId, a3.drop = null, a3.samples = [];
      },
      onPointerUp: M,
      onPointerCancel: M,
      onPointerLeave: M,
      children: [
        (0, i.jsx)("div", {
          className: s().trail,
          "aria-hidden": "true",
          children: Array.from(
            { length: g2 },
            (e3, a3) => (0, i.jsx)(
              "div",
              {
                ref: (e4) => {
                  k.current[a3] = e4;
                },
                className: s().photo,
                children: (0, i.jsx)("img", {
                  alt: "",
                  draggable: false,
                  decoding: "async"
                })
              },
              a3
            )
          )
        }),
        a2 && (0, i.jsx)("div", { className: s().content, children: a2 })
      ]
    });
  }
  var h = t(67752), m = t(96848), p = t.n(m);
  let g = [
    "lisbon-tram",
    "terracotta-waves",
    "sea-at-dusk",
    "ceramic-lamp",
    "lisbon-rooftops",
    "curved-facade",
    "wine-bar",
    "alpine-lake",
    "glass-carafe",
    "lisbon-bridge",
    "stoneware-cups",
    "coastline"
  ].map((e2) => {
    let { src: a2, alt: t2 } = (0, h.jW)(e2);
    return {
      src: `/a2`,
      alt: t2
    };
  });
  function u() {
    return (0, i.jsx)("div", {
      className: p().demo,
      children: (0, i.jsx)(c, {
        className: p().area,
        images: g,
        intro: true,
        children: (0, i.jsxs)("div", {
          className: p().copy,
          children: [
            (0, i.jsx)("h3", {
              className: p().title,
              children: "Lisbon, in passing"
            }),
            (0, i.jsx)("p", {
              className: p().meta,
              children: "Twelve frames, spring 2026"
            })
          ]
        })
      })
    });
  }
  let f = u;
}

__m(__module,__exports,__require);
}