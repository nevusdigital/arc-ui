function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  r.d(e, { i: () => td, W: () => tp });
  class n {
    constructor(t2) {
      this.stop = () => this.runAll("stop"), this.animations = t2.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map((t2) => t2.finished));
    }
    getAll(t2) {
      return this.animations[0][t2];
    }
    setAll(t2, e2) {
      for (let r2 = 0; r2 < this.animations.length; r2++)
        this.animations[r2][t2] = e2;
    }
    attachTimeline(t2) {
      let e2 = this.animations.map((e3) => e3.attachTimeline(t2));
      return () => {
        e2.forEach((t3, e3) => {
          t3 && t3(), this.animations[e3].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(t2) {
      this.setAll("time", t2);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(t2) {
      this.setAll("speed", t2);
    }
    get state() {
      return this.getAll("state");
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      return s(this.animations, "duration");
    }
    get iterationDuration() {
      return s(this.animations, "iterationDuration");
    }
    runAll(t2) {
      this.animations.forEach((e2) => e2[t2]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  function s(t2, e2) {
    let r2 = 0;
    for (let n2 = 0; n2 < t2.length; n2++) {
      let s2 = t2[n2][e2];
      null !== s2 && s2 > r2 && (r2 = s2);
    }
    return r2;
  }
  class i extends n {
    then(t2, e2) {
      return this.finished.finally(t2).then(() => {
      });
    }
  }
  var a = r(5556), l = r(78170), o = r(9247), u = r(6900), f = r(36381), h = r(27933);
  let g = [];
  function c(t2) {
    (0, l.Ai)(g, t2);
  }
  function p(t2, e2, r2 = {}, n2) {
    let s2 = [], { velocity: i2 } = r2, a2 = r2.reduceMotion ?? n2?.shouldReduceMotion;
    for (let l3 in e2) {
      if ("transition" === l3 || "transitionEnd" === l3) continue;
      let u2 = e2[l3];
      if (void 0 === u2) continue;
      let g2 = t2(l3), c2 = g2.get();
      if (void 0 !== c2 && !g2.isAnimating() && !Array.isArray(u2) && u2 === c2 && !i2) {
        h.Gt.update(() => g2.set(u2));
        continue;
      }
      g2.start((0, f.f)(l3, g2, u2, a2 && o.$.has(l3) ? { type: false } : r2, n2)), g2.animation && s2.push(g2.animation);
    }
    let { transitionEnd: l2 } = e2;
    if (l2) {
      let e3 = () => h.Gt.update(() => {
        for (let e4 in l2) t2(e4).set(l2[e4]);
      });
      s2.length ? Promise.all(s2).then(e3) : e3();
    }
    return s2;
  }
  function d(t2, e2, r2, n2, s2) {
    return p(
      (n3) => {
        let i2 = t2.get(e2, n3);
        if (!i2) {
          let o2;
          if (!s2) {
            var l2;
            let s3, i3 = r2[n3];
            o2 = (null === (s3 = Array.isArray(l2 = i3) ? l2[0] : void 0) ? void 0 : s3) ?? t2.read(e2, n3, i3), (0, a.V)(
              void 0 !== o2,
              `"${n3}" can't be read from the animated subject. Provide [from, to] keyframes.`,
              "effect-unreadable-value"
            );
          }
          t2(e2, { [n3]: i2 = (0, u.OQ)(o2, { owner: s2 }) });
        }
        return i2;
      },
      r2,
      n2,
      s2
    );
  }
  var m = r(13031), y = r(59337), v = r(70954), A = r(26262), b = r(17611), w = r(51469), O = r(38621), W = r(12266), k = r(85843);
  function x(t2, e2) {
    var r2;
    let n2;
    return (0, k.h)(t2) ? t2[r2 = t2.length, ((e2 - 0) % (n2 = r2 - 0) + n2) % n2 + 0] : t2;
  }
  var P = r(18844), M = r(58392);
  function E(t2) {
    return "object" == typeof t2 && !Array.isArray(t2);
  }
  function V(t2, e2, r2, n2) {
    return null == t2 ? [] : "string" == typeof t2 && E(e2) ? (0, M.K)(t2, r2, n2) : t2 instanceof NodeList ? Array.from(t2) : Array.isArray(t2) ? t2.filter((t3) => null != t3) : [t2];
  }
  function K(t2, e2, r2, n2) {
    return "number" == typeof e2 ? e2 : e2.startsWith("-") || e2.startsWith("+") ? Math.max(0, t2 + parseFloat(e2)) : "<" === e2 ? r2 : e2.startsWith("<") ? Math.max(0, r2 + parseFloat(e2.slice(1))) : n2.get(e2) ?? t2;
  }
  var G = r(56260);
  function $(t2, e2) {
    return t2.at !== e2.at ? t2.at - e2.at : null === t2.value ? 1 : null === e2.value ? -1 : 0;
  }
  function j(t2, e2) {
    return e2.has(t2) || e2.set(t2, {}), e2.get(t2);
  }
  function R(t2, e2) {
    return e2[t2] || (e2[t2] = []), e2[t2];
  }
  let S = (t2) => "number" == typeof t2, C = (t2) => t2.every(S);
  var N = r(72721), Z = r(73516), B = r(11698), D = r(25952), I = r(78757), L = r(69028), T = r(29543), X = r(87546);
  class _ {
    constructor(t2 = h.Gt.render) {
      this.step = t2, this.values = /* @__PURE__ */ new Map(), this.pending = [], this.numPending = 0, this.flush = () => {
        let { pending: t3, numPending: e2 } = this;
        this.numPending = 0;
        for (let r2 = 0; r2 < e2; r2++) t3[r2]();
      };
    }
    set(t2, e2, r2, n2) {
      if (this.values.get(t2)?.onRemove(), n2)
        for (let t3 of this.values.values()) t3.value === n2 && (r2 = t3.render);
      let s2 = () => r2 && this.schedule(r2);
      void 0 !== e2.get() && s2();
      let i2 = e2.on("change", s2), a2 = () => {
        i2(), r2 && !n2 && this.cancel(r2), this.values.delete(t2);
      };
      return this.values.set(t2, { value: e2, render: n2 ? void 0 : r2, onRemove: a2 }), a2;
    }
    get(t2) {
      return this.values.get(t2)?.value;
    }
    release() {
      let t2 = /* @__PURE__ */ new Map();
      return this.values.forEach((e2, r2) => {
        t2.set(r2, e2.value), e2.onRemove();
      }), this.transformKeys = this.transformValues = void 0, t2;
    }
    schedule(t2) {
      let { pending: e2, numPending: r2 } = this;
      for (let n2 = 0; n2 < r2; n2++) if (e2[n2] === t2) return;
      r2 || this.step(this.flush), e2[this.numPending++] = t2;
    }
    cancel(t2) {
      let { pending: e2 } = this;
      for (let r2 = 0; r2 < this.numPending; r2++)
        if (e2[r2] === t2) {
          e2[r2] = e2[--this.numPending];
          return;
        }
    }
  }
  function q(t2, { step: e2, ...r2 } = {}) {
    let n2 = /* @__PURE__ */ new WeakMap();
    return Object.assign(
      (r3, s2) => {
        let i2 = n2.get(r3) ?? new _(e2);
        n2.set(r3, i2);
        let a2 = [];
        for (let e3 in s2) {
          let n3 = s2[e3], l2 = t2(r3, i2, e3, n3);
          a2.push(l2);
        }
        return () => {
          for (let t3 of a2) t3();
        };
      },
      r2,
      {
        get: (t3, e3) => n2.get(t3)?.get(e3),
        flush: (t3) => n2.get(t3)?.flush(),
        state: (t3) => n2.get(t3)
      }
    );
  }
  var F = r(11136);
  let U = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, Y = {}, z = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]), H = (t2, e2) => (0, X.e)(t2.get(e2)?.get(), T.W[e2]), Q = (t2, e2, r2, n2) => {
    let s2, i2;
    if (D.f.has(r2)) {
      if ("pathRotation" !== r2) {
        let t3 = e2.transformKeys ?? (e2.transformKeys = []);
        (e2.transformValues ?? (e2.transformValues = {}))[r2] = n2, t3.includes(r2) || (t3.push(r2), t3.sort((t4, e3) => D.U.indexOf(t4) - D.U.indexOf(e3)));
      }
      e2.get("transform") || ((0, I.s)(t2) || e2.get("transformBox") || Q(t2, e2, "transformBox", new u.KG("fill-box")), e2.set("transform", new u.KG("none"), () => {
        t2.style.transform = (function(t3) {
          let e3 = "", { transformKeys: r3 = [], transformValues: n3 = {} } = t3;
          for (let t4 = 0; t4 < r3.length; t4++) {
            let s4 = r3[t4], i3 = n3[s4].get();
            void 0 !== i3 && ("number" == typeof i3 ? i3 : parseFloat(i3)) !== +!!s4.startsWith("scale") && (e3 += (e3 && " ") + (Y[s4] || (Y[s4] = (U[s4] || s4) + "(")) + (0, X.e)(i3, F.H[s4]) + ")");
          }
          let s3 = t3.get("pathRotation")?.get();
          return s3 && (e3 += (e3 && " ") + "rotate(" + (0, X.e)(s3, F.H.pathRotation) + ")"), e3 || "none";
        })(e2);
      })), i2 = e2.get("transform");
    } else
      z.has(r2) ? (e2.get("transformOrigin") || e2.set("transformOrigin", new u.KG(""), () => {
        let r3 = H(e2, "originX") ?? "50%", n3 = H(e2, "originY") ?? "50%", s3 = H(e2, "originZ") ?? 0;
        t2.style.transformOrigin = `${r3} ${n3} ${s3}`;
      }), i2 = e2.get("transformOrigin")) : s2 = (0, Z.v)(r2) ? () => {
        t2.style.setProperty(r2, n2.get());
      } : () => {
        t2.style[r2] = (0, X.e)(n2.get(), T.W[r2]);
      };
    return e2.set(r2, n2, s2, i2);
  }, J = (t2, e2) => {
    if (D.f.has(e2)) return (0, B.Ib)(t2, e2);
    let r2 = getComputedStyle(t2), n2 = (0, Z.v)(e2) ? r2.getPropertyValue(e2) : r2[e2];
    return "string" == typeof n2 && n2.trim() || 0;
  }, tt = q(Q, { test: (t2) => (0, I.s)(t2) || (0, L.x)(t2), read: J });
  var te = r(15043), tr = r(44425);
  let tn = (t2, e2, r2, n2, s2 = r2) => {
    let i2 = (function(t3, e3) {
      if (!(e3 in t3)) return false;
      let r3 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t3), e3) || Object.getOwnPropertyDescriptor(t3, e3);
      return r3 && "function" == typeof r3.set;
    })(t2, s2);
    !i2 && (s2.startsWith("data") || s2.startsWith("aria")) && (s2 = (0, te.I)(s2));
    let a2 = T.W[r2] || T.W[s2], l2 = i2 ? () => {
      t2[s2] = (0, X.e)(n2.get(), T.W[r2]);
    } : () => {
      let e3 = (0, X.e)(n2.get(), a2);
      null == e3 ? t2.removeAttribute(s2) : t2.setAttribute(s2, String(e3));
    };
    return e2.set(r2, n2, l2);
  }, ts = q(
    (t2, e2, r2, n2) => {
      if (r2.startsWith("path"))
        return (h.Gt.render(() => t2.setAttribute("pathLength", "1")), "pathOffset" === r2) ? e2.set(r2, n2, () => {
          let e3 = n2.get();
          t2.setAttribute("stroke-dashoffset", `${-e3}`);
        }) : (e2.get("stroke-dasharray") || e2.set("stroke-dasharray", new u.KG("1 1"), () => {
          let r3 = e2.get("pathLength")?.get() ?? 1, n3 = e2.get("pathSpacing")?.get();
          t2.setAttribute(
            "stroke-dasharray",
            `${r3} ${n3 ?? 1 - Number(r3)}`
          );
        }), e2.set(r2, n2, void 0, e2.get("stroke-dasharray")));
      return r2.startsWith("attr") ? tn(t2, e2, r2, n2, ti(r2)) : (r2 in t2.style ? Q : tn)(t2, e2, r2, n2);
    },
    {
      test: L.x,
      read: (t2, e2) => D.f.has(e2) ? T.W[e2]?.default || 0 : tr.W.includes(e2) ? J(t2, e2) : (e2 = ti(e2), t2.getAttribute((0, te.I)(e2)) ?? t2.getAttribute(e2) ?? void 0)
    }
  );
  function ti(t2) {
    return t2.replace(/^attr([A-Z])/, (t3, e2) => e2.toLowerCase());
  }
  var ta = r(93560), tl = r(96653);
  let to = {};
  class tu {
    constructor(t2, e2) {
      this.effect = t2, this.current = e2, this.KeyframeResolver = tl.K;
    }
    getValue(t2) {
      return this.effect.get(this.current, t2);
    }
    readValue(t2, e2) {
      return this.effect.read(this.current, t2, e2);
    }
    render() {
      this.effect.flush(this.current);
    }
    measureViewportBox() {
      return (0, ta.m)(this.current);
    }
    getProps() {
      return to;
    }
  }
  var tf = r(51654), th = r(94601);
  let tg = q(
    (t2, e2, r2, n2) => e2.set(r2, n2, () => {
      t2[r2] = n2.get();
    }),
    {
      test: (t2) => (0, th.G)(t2),
      read: (t2, e2) => {
        let r2 = t2[e2];
        return "string" == typeof r2 || "number" == typeof r2 ? r2 : void 0;
      }
    }
  );
  function tc(t2, e2, r2, n2) {
    let s2 = [];
    if ((0, w.S)(t2) || "number" == typeof t2 || "string" == typeof t2 && !E(e2))
      s2.push((0, N.z)(t2, E(e2) && e2.default || e2, r2 && r2.default || r2));
    else {
      if (null == t2) return s2;
      let i2 = V(t2, e2, n2), l2 = i2.length;
      (0, a.V)(!!l2, "No valid elements provided.", "no-valid-elements");
      for (let t3 = 0; t3 < l2; t3++) {
        let n3 = i2[t3], a2 = { ...r2 };
        "delay" in a2 && "function" == typeof a2.delay && (a2.delay = a2.delay(t3, l2)), n3 instanceof Element ? s2.push(
          ...(function(t4, e3, r3, n4) {
            if (n4) return p((t5) => n4.getValue(t5, null), e3, r3, n4);
            let s3 = (0, L.x)(t4) ? ts : tt;
            return d(s3, t4, e3, r3, new tu(s3, t4));
          })(n3, e2, a2, tf.C.get(n3))
        ) : s2.push(
          ...d(
            (function(t4) {
              return g.find((e3) => e3.test(t4));
            })(n3) ?? tg,
            n3,
            e2,
            a2
          )
        );
      }
    }
    return s2;
  }
  function tp(t2 = {}) {
    let { scope: e2, reduceMotion: r2, skipAnimations: n2 } = t2;
    return function(t3, s2, o2) {
      var f2;
      let h2, g2 = [], c2 = {};
      if (void 0 !== r2 && (c2.reduceMotion = r2), void 0 !== n2 && (c2.skipAnimations = n2), Array.isArray(t3) && t3.some(Array.isArray)) {
        let r3, { onComplete: n3, ...i2 } = s2 || {};
        "function" == typeof n3 && (h2 = n3), f2 = { ...c2, ...i2 }, r3 = [], (function(t4, { defaultTransition: e3 = {}, ...r4 } = {}, n4, s3) {
          let i3 = e3.duration || 0.3, o3 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Map(), f3 = {}, h3 = /* @__PURE__ */ new Map(), g3 = 0, c3 = 0, p3 = 0;
          for (let r5 = 0; r5 < t4.length; r5++) {
            let o4 = t4[r5];
            if ("string" == typeof o4) {
              h3.set(o4, c3);
              continue;
            }
            if (!Array.isArray(o4)) {
              h3.set(o4.name, K(c3, o4.at, g3, h3));
              continue;
            }
            let [k2, P2, M2 = {}] = o4;
            void 0 !== M2.at && (c3 = K(c3, M2.at, g3, h3));
            let E2 = 0, $2 = (t5, r6, n5, o5 = 0, u3 = 0) => {
              var f4;
              let h4 = Array.isArray(f4 = t5) ? f4 : [f4], {
                delay: g4 = 0,
                times: d3 = (0, y.Z)(h4),
                type: m3 = e3.type || "keyframes",
                repeat: w2,
                repeatType: k3,
                repeatDelay: P3 = 0,
                ...M3
              } = r6, { ease: V2 = e3.ease || "easeOut", duration: K2 } = r6, $3 = "function" == typeof g4 ? g4(o5, u3) : g4, j2 = h4.length, R2 = (0, v.W)(m3) ? m3 : s3?.[m3 || "keyframes"];
              if (j2 <= 2 && R2) {
                let t6 = 100;
                2 === j2 && C(h4) && (t6 = Math.abs(h4[1] - h4[0]));
                let r7 = { ...e3, ...M3 };
                void 0 !== K2 && (r7.duration = (0, O.f)(K2));
                let n6 = (0, A.X)(r7, t6, R2);
                V2 = n6.ease, K2 = n6.duration;
              }
              K2 ?? (K2 = i3);
              let S2 = c3 + $3;
              1 === d3.length && 0 === d3[0] && (d3[1] = 1);
              let N2 = d3.length - h4.length;
              if (N2 > 0 && (0, b.f)(d3, N2), 1 === h4.length && h4.unshift(null), w2 && (0, a.$)(
                w2 < 20,
                `Sequence segments can't repeat ${w2} times \u2014 ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`
              ), w2 && w2 < 20) {
                let t6 = K2 > 0 ? P3 / K2 : 0;
                K2 = K2 * (w2 + 1) + P3 * w2;
                let e4 = [...h4], r7 = [...d3], n6 = [...V2 = Array.isArray(V2) ? [...V2] : [V2]], s4 = "reverse" === k3 || "mirror" === k3, i4 = e4, a2 = n6;
                s4 && (i4 = [...e4].reverse(), "reverse" === k3 && (a2 = [...n6].reverse().map(
                  (t7) => "function" == typeof t7 ? (0, W.G)(t7) : t7
                )));
                for (let l2 = 0; l2 < w2; l2++) {
                  let o6 = s4 && l2 % 2 == 0, u4 = o6 ? i4 : e4, f5 = o6 ? a2 : n6, g5 = (l2 + 1) * (1 + t6);
                  t6 > 0 && (h4.push(h4[h4.length - 1]), d3.push(g5), V2.push("linear")), h4.push(...u4);
                  for (let t7 = 0; t7 < u4.length; t7++)
                    d3.push(r7[t7] + g5), V2.push(0 === t7 ? "linear" : x(f5, t7 - 1));
                }
                !(function(t7, e5, r8 = 0) {
                  let n7 = e5 + 1 + e5 * r8;
                  for (let e6 = 0; e6 < t7.length; e6++) t7[e6] = t7[e6] / n7;
                })(d3, w2, t6);
              }
              let Z2 = S2 + K2;
              !(function(t6, e4, r7, n6, s4, i4) {
                for (let e5 = 0; e5 < t6.length; e5++) {
                  let r8 = t6[e5];
                  r8.at > s4 && r8.at < i4 && ((0, l.Ai)(t6, r8), e5--);
                }
                for (let a2 = 0; a2 < e4.length; a2++)
                  t6.push({
                    value: e4[a2],
                    at: (0, G.k)(s4, i4, n6[a2]),
                    easing: x(r7, a2)
                  });
              })(n5, h4, V2, d3, S2, Z2), E2 = Math.max($3 + K2, E2), p3 = Math.max(Z2, p3);
            };
            if ((0, w.S)(k2)) $2(P2, M2, R("default", j(k2, u2)));
            else {
              let t5 = V(k2, P2, n4, f3), e4 = t5.length;
              for (let r6 = 0; r6 < e4; r6++) {
                let n5 = j(t5[r6], u2);
                for (let t6 in P2) {
                  var d2, m2;
                  $2(
                    P2[t6],
                    (d2 = M2, m2 = t6, d2 && d2[m2] ? { ...d2, ...d2[m2] } : { ...d2 }),
                    R(t6, n5),
                    r6,
                    e4
                  );
                }
              }
            }
            g3 = c3, c3 += E2;
          }
          return u2.forEach((t5, n5) => {
            for (let s4 in t5) {
              let i4 = t5[s4];
              i4.sort($);
              let a2 = [], l2 = [], u3 = [];
              for (let t6 = 0; t6 < i4.length; t6++) {
                let { at: e4, value: r5, easing: n6 } = i4[t6];
                a2.push(r5), l2.push((0, P.q)(0, p3, e4)), u3.push(n6 || "easeOut");
              }
              0 !== l2[0] && (l2.unshift(0), a2.unshift(a2[0]), u3.unshift("easeInOut")), 1 !== l2[l2.length - 1] && (l2.push(1), a2.push(null)), o3.has(n5) || o3.set(n5, { keyframes: {}, transition: {} });
              let f4 = o3.get(n5);
              f4.keyframes[s4] = a2;
              let { type: h4, ...g4 } = e3;
              f4.transition[s4] = {
                ...g4,
                duration: p3,
                ease: u3,
                times: l2,
                ...r4
              };
            }
          }), o3;
        })(
          t3.map((t4) => {
            if (Array.isArray(t4) && "function" == typeof t4[0]) {
              let e3 = t4[0], r4 = (0, u.OQ)(0);
              return (r4.on("change", e3), 1 === t4.length) ? [r4, [0, 1]] : 2 === t4.length ? [r4, [0, 1], t4[1]] : [r4, t4[1], t4[2]];
            }
            return t4;
          }),
          f2,
          e2,
          { spring: m.o }
        ).forEach(({ keyframes: t4, transition: e3 }, n4) => {
          r3.push(...tc(n4, t4, e3));
        }), g2 = r3;
      } else {
        let { onComplete: r3, ...n3 } = o2 || {};
        "function" == typeof r3 && (h2 = r3), g2 = tc(t3, s2, { ...c2, ...n3 }, e2);
      }
      let p2 = new i(g2);
      return h2 && p2.finished.then(h2), e2 && (e2.animations.push(p2), p2.finished.then(() => {
        (0, l.Ai)(e2.animations, p2);
      })), p2;
    };
  }
  let td = Object.assign(tp(), {
    addEffect: function(t2) {
      (0, a.V)(
        "function" == typeof t2.test && "function" == typeof t2.read,
        "Effects passed to animate.addEffect() need test() and read().",
        "effect-missing-test"
      ), c(t2), g.unshift(t2);
    },
    removeEffect: c
  });
}

__m(__module,__exports,__require);
}