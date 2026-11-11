function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { L: () => J });
  var n = r(6900), l = r(38873), i = r(69166), o = r(5556), s = r(12115), f = r(72025), a = r(27933);
  function c(e2, t2) {
    let r2, n2 = () => {
      let { currentTime: n3 } = t2, l2 = (null === n3 ? 0 : n3.value) / 100;
      r2 !== l2 && e2(l2), r2 = l2;
    };
    return a.Gt.preUpdate(n2, true), () => (0, a.WG)(n2);
  }
  function u(e2) {
    return !("u" < typeof window) && (e2 ? (0, i.d)() : (0, i.J)());
  }
  var g = r(51275), d = r(18844), h = r(79537);
  let p = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
  }), y = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" }
  };
  function m(e2, t2, r2, n2) {
    let l2 = r2[t2], { length: i2, position: o2 } = y[t2], s2 = l2.current, f2 = r2.time;
    l2.current = Math.abs(e2[`scroll${o2}`]), l2.scrollLength = e2[`scroll${i2}`] - e2[`client${i2}`], l2.offset.length = 0, l2.offset[0] = 0, l2.offset[1] = l2.scrollLength, l2.progress = (0, d.q)(0, l2.scrollLength, l2.current);
    let a2 = n2 - f2;
    l2.velocity = a2 > 50 ? 0 : (0, h.f)(l2.current - s2, a2);
  }
  var v = r(21649), w = r(59337), W = r(94712), E = r(78757);
  let x = { start: 0, center: 0.5, end: 1 };
  function L(e2, t2, r2 = 0) {
    let n2 = 0;
    if (e2 in x && (e2 = x[e2]), "string" == typeof e2) {
      let t3 = parseFloat(e2);
      e2.endsWith("px") ? n2 = t3 : e2.endsWith("%") ? e2 = t3 / 100 : e2.endsWith("vw") ? n2 = t3 / 100 * document.documentElement.clientWidth : e2.endsWith("vh") ? n2 = t3 / 100 * document.documentElement.clientHeight : e2 = t3;
    }
    return "number" == typeof e2 && (n2 = t2 * e2), r2 + n2;
  }
  let k = [0, 0], b = [
    [0, 0],
    [1, 1]
  ], G = { x: 0, y: 0 }, A = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), B = (e2) => e2 === document.scrollingElement ? window : e2;
  function N(e2, {
    container: t2 = document.scrollingElement,
    trackContentSize: r2 = false,
    ...n2
  } = {}) {
    if (!t2) return f.l;
    let l2 = M.get(t2);
    l2 || (l2 = /* @__PURE__ */ new Set(), M.set(t2, l2));
    let i2 = /* @__PURE__ */ (function(e3, t3, r3, n3 = {}) {
      return {
        measure: (t4) => {
          !(function(e4, t5 = e4, r4) {
            if (r4.x.targetOffset = 0, r4.y.targetOffset = 0, t5 !== e4) {
              let n4 = t5;
              for (; n4 && n4 !== e4; )
                r4.x.targetOffset += n4.offsetLeft, r4.y.targetOffset += n4.offsetTop, n4 = n4.offsetParent;
            }
            r4.x.targetLength = t5 === e4 ? t5.scrollWidth : t5.clientWidth, r4.y.targetLength = t5 === e4 ? t5.scrollHeight : t5.clientHeight, r4.x.containerLength = e4.clientWidth, r4.y.containerLength = e4.clientHeight;
          })(e3, n3.target, r3), m(e3, "x", r3, t4), m(e3, "y", r3, t4), r3.time = t4, (n3.offset || n3.target) && (function(e4, t5, r4) {
            let { offset: n4 = b } = r4, { target: l3 = e4, axis: i3 = "y" } = r4, o3 = "y" === i3 ? "height" : "width", s2 = l3 !== e4 ? (function(e5, t6) {
              let r5 = { x: 0, y: 0 }, n5 = e5;
              for (; n5 && n5 !== t6; )
                if ((0, E.s)(n5))
                  r5.x += n5.offsetLeft, r5.y += n5.offsetTop, n5 = n5.offsetParent;
                else if ("svg" === n5.tagName) {
                  let e6 = n5.getBoundingClientRect(), t7 = (n5 = n5.parentElement).getBoundingClientRect();
                  r5.x += e6.left - t7.left, r5.y += e6.top - t7.top;
                } else if (n5 instanceof SVGGraphicsElement) {
                  let { x: e6, y: t7 } = n5.getBBox();
                  r5.x += e6, r5.y += t7;
                  let l4 = null, i4 = n5.parentNode;
                  for (; !l4; )
                    "svg" === i4.tagName && (l4 = i4), i4 = n5.parentNode;
                  n5 = l4;
                } else break;
              return r5;
            })(l3, e4) : G, f2 = l3 === e4 ? { width: e4.scrollWidth, height: e4.scrollHeight } : "getBBox" in l3 && "svg" !== l3.tagName ? l3.getBBox() : { width: l3.clientWidth, height: l3.clientHeight }, a2 = { width: e4.clientWidth, height: e4.clientHeight };
            t5[i3].offset.length = 0;
            let c2 = !t5[i3].interpolate, u2 = n4.length;
            for (let e5 = 0; e5 < u2; e5++) {
              let r5 = (function(e6, t6, r6, n5) {
                let l4 = Array.isArray(e6) ? e6 : k, i4 = 0;
                return "number" == typeof e6 ? l4 = [e6, e6] : "string" == typeof e6 && (l4 = (e6 = e6.trim()).includes(" ") ? e6.split(" ") : [e6, x[e6] ? e6 : "0"]), (i4 = L(l4[0], r6, n5)) - L(l4[1], t6);
              })(n4[e5], a2[o3], f2[o3], s2[i3]);
              c2 || r5 === t5[i3].interpolatorOffsets[e5] || (c2 = true), t5[i3].offset[e5] = r5;
            }
            c2 && (t5[i3].interpolate = (0, v.G)(t5[i3].offset, (0, w.Z)(n4), {
              clamp: false
            }), t5[i3].interpolatorOffsets = [...t5[i3].offset]), t5[i3].progress = (0, W.q)(
              0,
              1,
              t5[i3].interpolate(t5[i3].current)
            );
          })(e3, r3, n3);
        },
        notify: () => t3(r3)
      };
    })(t2, e2, { time: 0, x: p(), y: p() }, n2);
    if (l2.add(i2), !A.has(t2)) {
      let e3 = () => {
        for (let e4 of l2) e4.measure(a.uv.timestamp);
        a.Gt.preUpdate(r3);
      }, r3 = () => {
        for (let e4 of l2) e4.notify();
      }, n3 = () => a.Gt.read(e3);
      A.set(t2, n3);
      let i3 = B(t2);
      window.addEventListener("resize", n3), t2 !== document.documentElement && O.set(t2, (0, g.X)(t2, n3)), i3.addEventListener("scroll", n3), n3();
    }
    if (r2 && !T.has(t2)) {
      let e3 = A.get(t2), r3 = { width: t2.scrollWidth, height: t2.scrollHeight };
      H.set(t2, r3);
      let n3 = a.Gt.read(() => {
        let n4 = t2.scrollWidth, l3 = t2.scrollHeight;
        (r3.width !== n4 || r3.height !== l3) && (e3(), r3.width = n4, r3.height = l3);
      }, true);
      T.set(t2, n3);
    }
    let o2 = A.get(t2);
    return a.Gt.read(o2, false, true), () => {
      (0, a.WG)(o2);
      let e3 = M.get(t2);
      if (!e3 || (e3.delete(i2), e3.size)) return;
      let r3 = A.get(t2);
      A.delete(t2), r3 && (B(t2).removeEventListener("scroll", r3), O.get(t2)?.(), window.removeEventListener("resize", r3));
      let n3 = T.get(t2);
      n3 && ((0, a.WG)(n3), T.delete(t2)), H.delete(t2);
    };
  }
  let P = [
    [
      [
        [0, 1],
        [1, 1]
      ],
      "entry"
    ],
    [
      [
        [0, 0],
        [1, 0]
      ],
      "exit"
    ],
    [
      [
        [1, 0],
        [0, 1]
      ],
      "cover"
    ],
    [b, "contain"]
  ], S = { start: 0, end: 1 };
  function j(e2) {
    if (!e2) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
    for (let [t2, r2] of P)
      if ((function(e3, t3) {
        let r3 = (function(e4) {
          if (2 !== e4.length) return;
          let t4 = [];
          for (let r4 of e4)
            if (Array.isArray(r4)) t4.push(r4);
            else {
              if ("string" != typeof r4) return;
              let e5 = (function(e6) {
                let t5 = e6.trim().split(/\s+/);
                if (2 !== t5.length) return;
                let r5 = S[t5[0]], n2 = S[t5[1]];
                if (void 0 !== r5 && void 0 !== n2) return [r5, n2];
              })(r4);
              if (!e5) return;
              t4.push(e5);
            }
          return t4;
        })(e3);
        if (!r3) return false;
        for (let e4 = 0; e4 < 2; e4++) {
          let n2 = r3[e4], l2 = t3[e4];
          if (n2[0] !== l2[0] || n2[1] !== l2[1]) return false;
        }
        return true;
      })(e2, t2))
        return { rangeStart: `${r2} 0%`, rangeEnd: `${r2} 100%` };
  }
  let C = /* @__PURE__ */ new Map();
  function X(e2) {
    let t2 = { value: 0 }, r2 = N((r3) => {
      t2.value = 100 * r3[e2.axis].progress;
    }, e2);
    return { currentTime: t2, cancel: r2 };
  }
  function R({ source: e2, container: t2, ...r2 }) {
    let { axis: n2 } = r2;
    e2 && (t2 = e2);
    let l2 = C.get(t2);
    l2 || (l2 = /* @__PURE__ */ new Map(), C.set(t2, l2));
    let i2 = r2.target ?? "self", o2 = l2.get(i2);
    o2 || (o2 = {}, l2.set(i2, o2));
    let s2 = n2 + (r2.offset ?? []).join(",");
    return o2[s2] || (r2.target && u(r2.target) ? j(r2.offset) ? o2[s2] = new ViewTimeline({ subject: r2.target, axis: n2 }) : o2[s2] = X({ container: t2, ...r2 }) : u() ? o2[s2] = new ScrollTimeline({ source: t2, axis: n2 }) : o2[s2] = X({ container: t2, ...r2 })), o2[s2];
  }
  function Y(e2, { axis: t2 = "y", container: r2 = document.scrollingElement, ...n2 } = {}) {
    let l2, i2, o2;
    if (!r2) return f.l;
    let s2 = { axis: t2, container: r2, ...n2 };
    return "function" == typeof e2 ? (function(e3, t3) {
      return 2 === e3.length || t3 && (t3.target || t3.offset) ? N((r3) => {
        e3(r3[t3.axis].progress, r3);
      }, t3) : c(e3, R(t3));
    })(e2, s2) : (l2 = R(s2), i2 = s2.target ? j(s2.offset) : void 0, o2 = s2.target ? u(s2.target) && !!i2 : u(), e2.attachTimeline({
      timeline: o2 ? l2 : void 0,
      ...i2 && o2 && { rangeStart: i2.rangeStart, rangeEnd: i2.rangeEnd },
      observe: (e3) => (e3.pause(), c((t3) => {
        e3.time = e3.iterationDuration * t3;
      }, l2))
    }));
  }
  var $ = r(28819), Q = r(65239);
  let V = () => ({
    scrollX: (0, n.OQ)(0),
    scrollY: (0, n.OQ)(0),
    scrollXProgress: (0, n.OQ)(0),
    scrollYProgress: (0, n.OQ)(0)
  }), _ = (e2) => !!e2 && !e2.current;
  function z(e2, t2, r2, n2) {
    return {
      factory: (i2) => {
        let o2, s2 = () => {
          _(r2) || _(n2) ? l.k.read(s2) : o2 = Y(i2, {
            ...t2,
            axis: e2,
            container: r2?.current || void 0,
            target: n2?.current || void 0
          });
        };
        return l.k.read(s2), () => {
          (0, l.c)(s2), o2?.();
        };
      },
      times: [0, 1],
      keyframes: [0, 1],
      ease: (e3) => e3,
      duration: 1
    };
  }
  function J({ container: e2, target: t2, ...r2 } = {}) {
    var n2;
    let f2 = (0, $.M)(V);
    n2 = r2.offset, !("u" < typeof window) && (t2 ? (0, i.d)() && !!j(n2) : (0, i.J)()) && (f2.scrollXProgress.accelerate = z("x", r2, e2, t2), f2.scrollYProgress.accelerate = z("y", r2, e2, t2));
    let a2 = (0, s.useRef)(null), c2 = (0, s.useRef)(false), u2 = (0, s.useCallback)(
      () => (a2.current = Y(
        (e3, { x: t3, y: r3 }) => {
          f2.scrollX.set(t3.current), f2.scrollXProgress.set(t3.progress), f2.scrollY.set(r3.current), f2.scrollYProgress.set(r3.progress);
        },
        {
          ...r2,
          container: e2?.current || void 0,
          target: t2?.current || void 0
        }
      ), () => {
        a2.current?.();
      }),
      [e2, t2, JSON.stringify(r2.offset)]
    );
    return (0, Q.E)(() => {
      if (c2.current = false, !(_(e2) || _(t2))) return u2();
      c2.current = true;
    }, [u2]), (0, s.useEffect)(() => {
      let r3;
      if (!c2.current) return;
      let n3 = () => {
        let n4 = _(e2), l2 = _(t2);
        (0, o.V)(
          !n4,
          "Container ref is defined but not hydrated",
          "use-scroll-ref"
        ), (0, o.V)(
          !l2,
          "Target ref is defined but not hydrated",
          "use-scroll-ref"
        ), n4 || l2 || (r3 = u2());
      };
      return l.k.read(n3), () => {
        (0, l.c)(n3), r3?.();
      };
    }, [u2]), f2;
  }
}

__m(__module,__exports,__require);
}