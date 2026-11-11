/* exploded-view (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(14210, function(__module,__exports,__require){
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
});
A.regCss(15651, ".root{--frame-h:clamp(620px,88vh,860px);box-sizing:border-box;container-type:inline-size;position:relative;width:100%;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.root[data-scroll=container] .viewport{height:var(--frame-h);overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:var(--radius-surface);background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface));scrollbar-width:none}\n.root[data-scroll=container] .viewport::-webkit-scrollbar{display:none}\n.root[data-scroll=container] .sticky{height:calc(var(--frame-h) - 2px)}\n.root[data-scroll=page] .sticky{height:100svh}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.viewport{position:relative;width:100%}\n.track{position:relative}\n.sticky{position:sticky;top:0;display:grid;overflow:hidden;grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr) auto;grid-template-areas:\"intro\" \"stage\" \"footer\"}\n@container (min-width: 880px){.sticky{grid-template-columns:minmax(300px,380px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);grid-template-areas:\"intro stage\" \"footer stage\"}\n.intro{grid-area:intro;display:grid;gap:8px;max-width:34rem;padding:clamp(24px,5cqi,40px) clamp(20px,5cqi,40px) 0}\n.intro{align-self:start;padding:clamp(40px,5cqi,64px) 0 0 clamp(40px,5cqi,64px)}\n.title{margin:0;font-family:var(--font-display);font-size:clamp(var(--text-2xl),5cqi,var(--text-4xl));font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.description{margin:0;color:var(--text-secondary);font-size:var(--text-base);text-wrap:pretty}\n.description{font-size:var(--text-sm)}\n.stage{grid-area:stage;position:relative;min-width:0;min-height:0;overflow:hidden}\n.stage[data-focus] .layer:not([data-active]){opacity:.5}\n.scaler{position:absolute;left:50%;top:50%;width:0;height:0;transform-origin:0 0}\n.perspective{position:absolute;left:0;top:0;width:0;height:0;perspective:2400px;perspective-origin:0 0}\n.group{--spread:0;position:absolute;left:0;top:0;width:0;height:0;transform-style:preserve-3d;transform-origin:0 0}\n.layer{position:absolute;left:-140px;top:-310px;width:280px;height:620px;transform-origin:50% 50%;transition:opacity var(--duration-considered) var(--ease-standard);font-size:13px;letter-spacing:-.005em;line-height:1.35;color:var(--foreground);pointer-events:none}\n.layer[data-active] .plate{border-color:var(--accent)}\n.layer[data-active] .sheet:before{border-style:solid;border-color:var(--accent)}\n@media (prefers-reduced-motion:reduce){.labelName,.label:after,.label:before,.layer,.sheet:before,.stopButton,.tick{transition:none}\n.plate,.sheet{position:absolute;inset:0;border-radius:40px}\n.plate{border:1px solid var(--border);background:var(--background)}\n.sheet:before{content:\"\";position:absolute;inset:0;border:1px dashed var(--border-strong);border-radius:inherit;opacity:calc(var(--spread) * .9);transition:border-color var(--duration-standard) var(--ease-standard)}\n.statusBar{position:absolute;left:24px;right:22px;top:14px;display:flex;align-items:center;justify-content:space-between;height:22px;font-size:13px;font-weight:500;font-variant-numeric:tabular-nums}\n.island{width:78px;height:22px;border-radius:12px;background:var(--foreground)}\n.statusIcons{display:inline-flex;align-items:center;gap:6px}\n.battery{position:relative;display:inline-block;width:22px;height:11px;padding:1.5px;border:1px solid var(--text-secondary);border-radius:3.5px}\n.battery span{display:block;width:72%;height:100%;border-radius:1.5px;background:var(--foreground)}\n.grid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:0 16px;opacity:var(--spread);border-radius:inherit;overflow:hidden}\n.column{background:color-mix(in oklab,var(--accent) 9%,transparent);box-shadow:inset 1px 0 0 color-mix(in oklab,var(--accent) 30%,transparent),inset -1px 0 0 color-mix(in oklab,var(--accent) 30%,transparent)}\n.keyline{position:absolute;left:0;right:0;height:1px;background:color-mix(in oklab,var(--accent) 36%,transparent)}\n.muted{color:var(--text-muted);font-weight:400}\n.toastTitle .muted{font-size:12px}\n.head{position:absolute;left:16px;right:16px;top:52px;display:flex;justify-content:space-between;color:var(--text-secondary);font-size:13px}\n.total{position:absolute;left:16px;top:74px;font-family:var(--font-display);font-size:34px;font-weight:500;letter-spacing:-.03em;line-height:1.1;font-variant-numeric:tabular-nums}\n.delta{position:absolute;left:16px;top:118px;display:inline-flex;align-items:center;gap:4px;color:var(--text-secondary);font-size:12px}\n.chart{position:absolute;left:16px;right:16px;top:208px;height:120px;display:grid;grid-template-columns:repeat(7,1fr);gap:10px;align-items:end}\n.barCol{display:grid;justify-items:center;align-content:end;gap:8px;height:100%}\n.bar{width:100%;border-radius:7px;background:var(--surface-muted)}\n.bar[data-peak]{background:var(--accent)}\n.barDay{color:var(--text-muted);font-size:11px;line-height:1}\n.recentHead{position:absolute;left:16px;right:16px;top:352px;display:flex;justify-content:space-between;font-size:13px;font-weight:500}\n.rows{position:absolute;left:16px;right:16px;top:380px;margin:0;padding:0;list-style:none}\n.row{display:grid;grid-template-columns:32px minmax(0,1fr) auto;align-items:center;gap:12px;height:52px;border-top:1px solid var(--border-subtle)}\n.row:first-child{border-top:0}\n.thumb{display:block;width:32px;height:32px;border-radius:50%;object-fit:cover}\n.rowText{display:grid;min-width:0}\n.rowText>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.rowText>span:last-child{font-size:12px}\n.amount{font-variant-numeric:tabular-nums}\n.amount[data-in]{color:var(--success)}\n.segment{position:absolute;left:16px;right:16px;top:148px;display:grid;grid-template-columns:repeat(3,1fr);height:44px;padding:4px;border-radius:16px;background:var(--surface-muted)}\n.segment span{display:grid;place-items:center;border-radius:12px;color:var(--text-secondary);font-size:13px}\n.segment span[data-on]{background:var(--background);color:var(--foreground);font-weight:500;box-shadow:var(--shadow-resting)}\n.tabBar{position:absolute;left:1px;right:1px;bottom:1px;display:grid;grid-template-columns:repeat(4,1fr);align-items:center;height:72px;padding:0 16px 14px;border-top:1px solid var(--border-subtle);border-radius:0 0 39px 39px;background:var(--background)}\n.tab{display:grid;place-items:center;justify-self:center;width:44px;height:44px;border-radius:14px;color:var(--text-muted)}\n.tab[data-on]{color:var(--accent)}\n.toast{position:absolute;left:12px;right:12px;top:466px;display:grid;grid-template-columns:32px minmax(0,1fr);align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:22px;background:var(--surface-raised);box-shadow:var(--shadow-floating)}\n.toastMark{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:color-mix(in oklab,var(--success) 14%,transparent);color:var(--success)}\n.toastText{display:grid;min-width:0}\n.toastTitle{display:flex;justify-content:space-between;gap:8px;font-weight:500}\n.toastBody{overflow:hidden;color:var(--text-secondary);font-size:12px;font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}\n.label{position:absolute;left:0;top:0;display:flex;align-items:center;height:0;pointer-events:none;will-change:transform,opacity}\n.label:before{content:\"\";flex:none;width:7px;height:7px;margin-left:-3.5px;border-radius:50%;background:var(--background);box-shadow:inset 0 0 0 1.5px var(--border-strong);transition:box-shadow var(--duration-standard) var(--ease-standard)}\n.label:after{content:\"\";position:absolute;left:4px;width:24px;height:1px;background:var(--border-strong);transform:scaleX(var(--draw,0));transform-origin:left;transition:background-color var(--duration-standard) var(--ease-standard)}\n.label[data-active]:before{box-shadow:inset 0 0 0 4px var(--accent)}\n.label[data-active]:after{background:var(--accent)}\n.label[data-active] .labelName{color:var(--foreground)}\n.labelBody{display:grid;margin-left:29px;white-space:nowrap}\n.labelName{color:var(--text-secondary);font-size:var(--text-sm);font-weight:500;transition:color var(--duration-standard) var(--ease-standard)}\n.labelName{font-size:var(--text-xs)}\n.labelNote{color:var(--text-muted);font-size:var(--text-xs)}\n@container (max-width: 560px){.labelNote{display:none}\n.footer{grid-area:footer;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:end;gap:16px 32px;padding:0 clamp(20px,5cqi,40px) clamp(20px,4cqi,36px)}\n.footer{grid-template-columns:minmax(0,1fr);align-self:end;gap:20px;padding:0 0 clamp(40px,5cqi,64px) clamp(40px,5cqi,64px)}\n.footer{grid-template-columns:minmax(0,1fr);gap:4px}\n.caption{display:grid;min-height:68px}\n.caption{min-height:96px}\n.caption{min-height:84px}\n.captionItem{grid-area:1/1;display:grid;align-content:end;gap:4px}\n.captionItem{align-content:start}\n.captionGhost{visibility:hidden;pointer-events:none}\n.captionTitle{margin:0;font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body)}\n.captionBody{margin:0;max-width:30rem;color:var(--text-secondary);font-size:var(--text-sm);text-wrap:pretty}\n.stops{display:flex}\n.stops{order:1;margin-left:-8px}\n.stops{order:-1;justify-content:space-between;margin-inline:-8px}\n.stopButton{display:grid;place-items:center;width:36px;height:44px;padding:0;border:0;border-radius:12px;background:transparent;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.stopButton:focus-visible,.stopButton:hover{background:var(--surface-muted)}\n.stopButton[aria-current] .tick{background:var(--accent);transform:scaleY(1.34)}\n.stopButton:active .tick{transform:scaleX(.86)}\n.stopButton[aria-current]:active .tick{transform:scale(.86,1.34)}\n.stopButton{flex:1;width:auto}\n.tick{display:block;width:20px;height:3px;border-radius:var(--radius-pill);background:var(--border-strong);transition:background-color var(--duration-standard) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.tick[data-kind=end]{width:8px}", {"root":"root","viewport":"viewport","sticky":"sticky","srOnly":"srOnly","track":"track","intro":"intro","title":"title","description":"description","stage":"stage","layer":"layer","scaler":"scaler","perspective":"perspective","group":"group","plate":"plate","sheet":"sheet","labelName":"labelName","label":"label","stopButton":"stopButton","tick":"tick","statusBar":"statusBar","island":"island","statusIcons":"statusIcons","battery":"battery","grid":"grid","column":"column","keyline":"keyline","muted":"muted","toastTitle":"toastTitle","head":"head","total":"total","delta":"delta","chart":"chart","barCol":"barCol","bar":"bar","barDay":"barDay","recentHead":"recentHead","rows":"rows","row":"row","thumb":"thumb","rowText":"rowText","amount":"amount","segment":"segment","tabBar":"tabBar","tab":"tab","toast":"toast","toastMark":"toastMark","toastText":"toastText","toastBody":"toastBody","labelBody":"labelBody","labelNote":"labelNote","footer":"footer","caption":"caption","captionItem":"captionItem","captionGhost":"captionGhost","captionTitle":"captionTitle","captionBody":"captionBody","stops":"stops"});
A.reg(38541, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ExplodedView: () => G, default: () => X });
  var s = a(95155), i = a(12115), n = a(5772), r = a(18310), l = a(14210), o = a(22535), d = a(7890), c = a(80642), h = a(25354), p = a(45425), m = a(94774), u = a(71019), x = a(71363), _ = a(51811);
  let v = {
    name: "wifi",
    size: 24,
    node: [
      ["path", { d: "M12 20h.01", key: "zekei9" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
    ]
  };
  v.node;
  let y = (0, _.A)(v);
  var f = a(71556), g = a(64577), w = a(7770);
  let b = [
    {
      id: "surface",
      name: "Surface",
      note: "Semantic tokens",
      body: "One neutral base. Every color resolves to a semantic role, so dark mode is a token swap instead of a redesign."
    },
    {
      id: "grid",
      name: "Layout grid",
      note: "4px rhythm, 16px gutters",
      body: "Four columns and a 4px rhythm put every edge on the same lines, from the header to the tab bar."
    },
    {
      id: "content",
      name: "Content",
      note: "Tabular figures",
      body: "The balance, the weekly chart and the ledger. Figures are tabular, so a new amount never nudges its neighbours."
    },
    {
      id: "controls",
      name: "Controls",
      note: "44px targets",
      body: "A segmented control and the tab bar. Each target is at least 44px tall, sized for a thumb rather than a cursor."
    },
    {
      id: "floating",
      name: "Floating layer",
      note: "The only shadow",
      body: "Notifications sit above everything else, so this is the one layer that earns a shadow."
    }
  ], j = {
    start: {
      title: "One screen",
      body: "Scroll to pull it apart, one layer at a time."
    },
    end: {
      title: "Back to one screen",
      body: "Five layers with one job each. That is why nothing on it competes."
    }
  }, N = ["Week", "Month", "Year"], k = [
    { day: "M", value: 84 },
    { day: "T", value: 42 },
    { day: "W", value: 118 },
    { day: "T", value: 66 },
    { day: "F", value: 164 },
    { day: "S", value: 212 },
    { day: "S", value: 58 }
  ], M = [
    {
      id: "t1",
      name: "Sofia Ramirez",
      detail: "Dinner split",
      amount: "+$38.00",
      incoming: true,
      photo: "media/people/sofia-ramirez.svg"
    },
    {
      id: "t2",
      name: "Tavola wine bar",
      detail: "Food and drink",
      amount: "-$64.20",
      incoming: false,
      photo: "media/photos/wine-bar.jpg"
    },
    {
      id: "t3",
      name: "Daniel Kim",
      detail: "Concert tickets",
      amount: "-$120.00",
      incoming: false,
      photo: "media/people/daniel-kim.svg"
    }
  ], T = "Rent paid", z = "$2,150.00 to Parkside Lofts", A = "now";
  var S = a(15651), C = a.n(S);
  let { duration: I, ease: R } = w.T, B = [...R.enter], F = { tiltX: 60, tiltZ: -40, gap: 136 }, E = { tiltX: 62, tiltZ: -20, gap: 150 }, $ = 140, L = 266, H = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), O = (e2, t2, a2) => {
    let s2 = H((a2 - e2) / (t2 - e2));
    return s2 * s2 * (3 - 2 * s2);
  }, P = (e2, t2, a2) => (e2 - 2) * a2 * t2 + 0.5 * e2;
  function W(e2, t2, a2, s2, i2) {
    let n2 = s2 * Math.PI / 180, r2 = i2 * Math.PI / 180, l2 = e2 * Math.cos(r2) - t2 * Math.sin(r2), o2 = e2 * Math.sin(r2) + t2 * Math.cos(r2), d2 = o2 * Math.cos(n2) - a2 * Math.sin(n2), c2 = 2400 / (2400 - (o2 * Math.sin(n2) + a2 * Math.cos(n2)));
    return { x: l2 * c2, y: d2 * c2 };
  }
  let Z = () => () => {
  };
  function G({
    title: e2 = "Built in layers",
    description: t2 = "Take the Tally home screen apart. Each layer has one job, and together they read as one calm surface.",
    layers: a2 = b,
    ends: n2 = j,
    scroll: p2 = "container",
    length: m2 = 4,
    onStopChange: u2,
    className: x2
  }) {
    let _2, v2 = (_2 = (0, i.useSyncExternalStore)(
      Z,
      () => true,
      () => false
    ), !!(0, r.I)() && _2), y2 = (0, i.useId)(), f2 = (0, i.useRef)(null), g2 = (0, i.useRef)(null), w2 = (0, i.useRef)(null), N2 = (0, i.useRef)(null), k2 = (0, i.useRef)(null), M2 = (0, i.useRef)([]), T2 = (0, i.useRef)([]), z2 = (0, i.useRef)(null), A2 = (0, i.useRef)(0), [S2, V2] = (0, i.useState)(0), J2 = (0, i.useRef)(u2);
    (0, i.useEffect)(() => {
      J2.current = u2;
    }, [u2]);
    let { scrollYProgress: X2 } = (0, l.L)({
      container: "container" === p2 ? f2 : void 0,
      target: g2,
      offset: ["start start", "end end"]
    }), Y = (0, o.z)(X2, {
      stiffness: 200,
      damping: 36,
      mass: 0.6,
      restDelta: 5e-4
    }), q = (0, i.useCallback)(
      (e3) => {
        let t3, a3 = z2.current, s2 = k2.current, i2 = N2.current;
        if (!a3 || !s2 || !i2) return;
        let n3 = e3 < 0.28 ? 0 : e3 >= 0.8 ? 6 : 1 + Math.min(4, Math.floor((e3 - 0.28) / 0.10400000000000001)), r2 = n3 > 0 && n3 < 6, l2 = v2 ? +!!r2 : O(0.04, 0.22, e3) * (1 - O(0.84, 0.98, e3)), o2 = v2 ? +!!r2 : O(0.08, 0.28, e3) * (1 - O(0.8, 0.95, e3)), d2 = a3.geo.tiltX * l2, c2 = a3.geo.tiltZ * l2, h2 = (t3 = a3.s0, t3 + (a3.s1 - t3) * l2), p3 = a3.ox1 * l2, m3 = a3.oy1 * l2;
        i2.style.transform = `translate3d(${p3.toFixed(2)}px, ${m3.toFixed(2)}px, 0) scale(${h2.toFixed(4)})`, s2.style.transform = `rotateX(${d2.toFixed(3)}deg) rotateZ(${c2.toFixed(3)}deg)`, s2.style.setProperty("--spread", o2.toFixed(3));
        for (let e4 = 0; e4 < 5; e4++) {
          let t4 = P(e4, o2, a3.geo.gap), s3 = M2.current[e4];
          s3 && (s3.style.transform = `translate3d(0, 0, ${t4.toFixed(2)}px)`);
          let i3 = T2.current[e4];
          if (!i3) continue;
          let n4 = W($, L, t4, d2, c2), r3 = a3.sw / 2 + p3 + n4.x * h2, l3 = a3.sh / 2 + m3 + n4.y * h2, u3 = v2 ? o2 : H((o2 - 0.45 - 0.07 * e4) / 0.22);
          i3.style.transform = `translate3d(${r3.toFixed(2)}px, ${l3.toFixed(2)}px, 0)`, i3.style.opacity = u3.toFixed(3), i3.style.setProperty("--draw", u3.toFixed(3)), i3.style.visibility = u3 > 1e-3 ? "visible" : "hidden";
        }
        n3 !== A2.current && (A2.current = n3, V2(n3), J2.current?.(n3));
      },
      [v2]
    ), K = (0, i.useCallback)(() => {
      let e3 = w2.current;
      if (!e3) return;
      let t3 = e3.clientWidth, a3 = e3.clientHeight;
      if (!t3 || !a3) return;
      let s2 = Math.max(
        0,
        ...T2.current.map(
          (e4) => e4?.firstElementChild instanceof HTMLElement ? e4.firstElementChild.offsetWidth : 0
        )
      ) + 36, i2 = t3 < 560 && a3 > t3 ? E : F, n3 = 1 / 0, r2 = -1 / 0, l2 = 1 / 0, o2 = -1 / 0, d2 = -1 / 0;
      for (let e4 = 0; e4 < 5; e4++) {
        let t4 = P(e4, 1, i2.gap);
        for (let [e5, a4] of [
          [-140, -310],
          [140, -310],
          [140, 310],
          [-140, 310]
        ]) {
          let s3 = W(e5, a4, t4, i2.tiltX, i2.tiltZ);
          n3 = Math.min(n3, s3.x), r2 = Math.max(r2, s3.x), l2 = Math.min(l2, s3.y), o2 = Math.max(o2, s3.y);
        }
        d2 = Math.max(d2, W($, L, t4, i2.tiltX, i2.tiltZ).x);
      }
      let c2 = 0.94 * t3, h2 = Math.min(
        (c2 - s2) / (d2 - n3),
        c2 / (r2 - n3),
        0.88 * a3 / (o2 - l2),
        1.15
      ), p3 = Math.min(0.9 * t3 / 280, 0.9 * a3 / 620, 1.1), m3 = n3 * h2, u3 = Math.max(r2 * h2, d2 * h2 + s2);
      z2.current = {
        sw: t3,
        sh: a3,
        s0: p3,
        s1: Math.max(0.2, h2),
        ox1: -(m3 + u3) / 2,
        oy1: -(l2 + o2) / 2 * h2,
        geo: i2
      }, q((v2 ? X2 : Y).get());
    }, [q, v2, X2, Y]);
    (0, d.L)(Y, "change", (e3) => {
      v2 || q(e3);
    }), (0, d.L)(X2, "change", (e3) => {
      v2 && (Y.jump(e3), q(e3));
    }), (0, i.useLayoutEffect)(() => {
      let e3 = w2.current;
      if (!e3) return;
      K();
      let t3 = "u" < typeof ResizeObserver ? null : new ResizeObserver(() => K());
      return t3?.observe(e3), () => t3?.disconnect();
    }, [K]);
    let Q = S2 > 0 && S2 < 6 ? S2 - 1 : -1, U = 0 === S2 ? n2.start : 6 === S2 ? n2.end : { title: a2[Q]?.name ?? "", body: a2[Q]?.body ?? "" }, ee = ["Assembled", ...a2.map((e3) => e3.name), "Reassembled"];
    return (0, s.jsxs)("section", {
      className: `${C().root} ${x2 ?? ""}`,
      "data-scroll": p2,
      "aria-labelledby": y2,
      children: [
        (0, s.jsx)("div", {
          ref: f2,
          className: C().viewport,
          tabIndex: "container" === p2 ? 0 : void 0,
          role: "container" === p2 ? "region" : void 0,
          "aria-label": "container" === p2 ? `${e2}, scroll to separate the layers` : void 0,
          children: (0, s.jsx)("div", {
            ref: g2,
            className: C().track,
            style: { height: "page" === p2 ? `${100 * m2}svh` : `${100 * m2}%` },
            children: (0, s.jsxs)("div", {
              className: C().sticky,
              children: [
                (0, s.jsxs)("header", {
                  className: C().intro,
                  children: [
                    (0, s.jsx)("h2", {
                      id: y2,
                      className: C().title,
                      children: e2
                    }),
                    (0, s.jsx)("p", {
                      className: C().description,
                      children: t2
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  ref: w2,
                  className: C().stage,
                  "data-focus": Q >= 0 || void 0,
                  "aria-hidden": "true",
                  children: [
                    (0, s.jsx)("div", {
                      ref: N2,
                      className: C().scaler,
                      style: { transform: "translate3d(0px, 0px, 0) scale(1)" },
                      children: (0, s.jsx)("div", {
                        className: C().perspective,
                        children: (0, s.jsx)("div", {
                          ref: k2,
                          className: C().group,
                          style: { transform: "rotateX(0deg) rotateZ(0deg)" },
                          children: a2.slice(0, 5).map(
                            (e3, t3) => (0, s.jsx)(
                              "div",
                              {
                                ref: (e4) => {
                                  M2.current[t3] = e4;
                                },
                                className: C().layer,
                                "data-layer": t3,
                                "data-active": Q === t3 || void 0,
                                style: {
                                  transform: "translate3d(0px, 0px, 0px)"
                                },
                                children: (0, s.jsx)(D, { index: t3 })
                              },
                              e3.id
                            )
                          )
                        })
                      })
                    }),
                    a2.slice(0, 5).map(
                      (e3, t3) => (0, s.jsx)(
                        "div",
                        {
                          ref: (e4) => {
                            T2.current[t3] = e4;
                          },
                          className: C().label,
                          "data-active": Q === t3 || void 0,
                          style: { opacity: 0, visibility: "hidden" },
                          children: (0, s.jsxs)("span", {
                            className: C().labelBody,
                            children: [
                              (0, s.jsx)("span", {
                                className: C().labelName,
                                children: e3.name
                              }),
                              (0, s.jsx)("span", {
                                className: C().labelNote,
                                children: e3.note
                              })
                            ]
                          })
                        },
                        e3.id
                      )
                    )
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: C().footer,
                  children: [
                    (0, s.jsxs)("div", {
                      className: C().caption,
                      "aria-live": "polite",
                      children: [
                        [
                          n2.start,
                          ...a2.slice(0, 5).map((e3) => ({ title: e3.name, body: e3.body })),
                          n2.end
                        ].map(
                          (e3, t3) => (0, s.jsxs)(
                            "div",
                            {
                              className: `${C().captionItem} ${C().captionGhost}`,
                              "aria-hidden": "true",
                              children: [
                                (0, s.jsx)("h3", {
                                  className: C().captionTitle,
                                  children: e3.title
                                }),
                                (0, s.jsx)("p", {
                                  className: C().captionBody,
                                  children: e3.body
                                })
                              ]
                            },
                            `ghost-${t3}`
                          )
                        ),
                        (0, s.jsx)(c.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, s.jsxs)(
                            h.PY1.div,
                            {
                              className: C().captionItem,
                              initial: v2 ? { opacity: 0 } : { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              exit: v2 ? { opacity: 0, transition: { duration: 0 } } : {
                                opacity: 0,
                                y: -8,
                                transition: {
                                  duration: I.exit,
                                  ease: [...R.exit]
                                }
                              },
                              transition: v2 ? { duration: 0 } : { duration: I.considered, ease: B },
                              children: [
                                (0, s.jsx)("h3", {
                                  className: C().captionTitle,
                                  children: U.title
                                }),
                                (0, s.jsx)("p", {
                                  className: C().captionBody,
                                  children: U.body
                                })
                              ]
                            },
                            S2
                          )
                        })
                      ]
                    }),
                    (0, s.jsx)("div", {
                      className: C().stops,
                      role: "group",
                      "aria-label": "Jump to a layer",
                      children: ee.map(
                        (e3, t3) => (0, s.jsx)(
                          "button",
                          {
                            type: "button",
                            className: C().stopButton,
                            "aria-label": e3,
                            "aria-current": S2 === t3 ? "step" : void 0,
                            onClick: () => ((e4) => {
                              let t4 = e4 <= 0 ? 0 : e4 >= 6 ? 1 : 0.28 + (e4 - 0.5) * 0.10400000000000001, a3 = v2 ? "auto" : "smooth";
                              if ("container" === p2) {
                                let e5 = f2.current;
                                if (!e5) return;
                                e5.scrollTo({
                                  top: (e5.scrollHeight - e5.clientHeight) * t4,
                                  behavior: a3
                                });
                                return;
                              }
                              let s2 = g2.current;
                              if (!s2) return;
                              let i2 = s2.getBoundingClientRect().top + window.scrollY;
                              window.scrollTo({
                                top: i2 + (s2.offsetHeight - window.innerHeight) * t4,
                                behavior: a3
                              });
                            })(t3),
                            children: (0, s.jsx)("span", {
                              className: C().tick,
                              "data-kind": 0 === t3 || 6 === t3 ? "end" : "layer"
                            })
                          },
                          e3 + t3
                        )
                      )
                    })
                  ]
                })
              ]
            })
          })
        }),
        (0, s.jsx)("ol", {
          className: C().srOnly,
          "aria-label": "Layers of the screen, bottom to top",
          children: a2.map(
            (e3) => (0, s.jsxs)("li", { children: [e3.name, ": ", e3.body] }, e3.id)
          )
        })
      ]
    });
  }
  let V = Math.max(...k.map((e2) => e2.value)), J = [p.A, m.A, u.A, x.A];
  function D({ index: e2 }) {
    return 0 === e2 ? (0, s.jsx)("div", {
      className: C().plate,
      children: (0, s.jsxs)("div", {
        className: C().statusBar,
        children: [
          (0, s.jsx)("span", { className: C().time, children: "9:41" }),
          (0, s.jsx)("span", { className: C().island }),
          (0, s.jsxs)("span", {
            className: C().statusIcons,
            children: [
              (0, s.jsx)(y, { size: 13, strokeWidth: 2 }),
              (0, s.jsx)("span", {
                className: C().battery,
                children: (0, s.jsx)("span", {})
              })
            ]
          })
        ]
      })
    }) : 1 === e2 ? (0, s.jsx)("div", {
      className: C().sheet,
      children: (0, s.jsxs)("div", {
        className: C().grid,
        children: [
          [0, 1, 2, 3].map(
            (e3) => (0, s.jsx)("span", { className: C().column }, e3)
          ),
          [52, 148, 208, 352, 548].map(
            (e3) => (0, s.jsx)(
              "span",
              { className: C().keyline, style: { top: e3 } },
              e3
            )
          )
        ]
      })
    }) : 2 === e2 ? (0, s.jsxs)("div", {
      className: C().sheet,
      children: [
        (0, s.jsxs)("div", {
          className: C().head,
          children: [
            (0, s.jsx)("span", { children: "Spending" }),
            (0, s.jsx)("span", {
              className: C().muted,
              children: "September"
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: C().total,
          children: "$2,846.20"
        }),
        (0, s.jsxs)("div", {
          className: C().delta,
          children: [
            (0, s.jsx)(f.A, { size: 13, strokeWidth: 1.75 }),
            "12% less than August"
          ]
        }),
        (0, s.jsx)("div", {
          className: C().chart,
          children: k.map(
            (e3, t2) => (0, s.jsxs)(
              "span",
              {
                className: C().barCol,
                children: [
                  (0, s.jsx)("span", {
                    className: C().bar,
                    "data-peak": 5 === t2 || void 0,
                    style: {
                      height: `${Math.round(e3.value / V * 92)}px`
                    }
                  }),
                  (0, s.jsx)("span", {
                    className: C().barDay,
                    children: e3.day
                  })
                ]
              },
              t2
            )
          )
        }),
        (0, s.jsxs)("div", {
          className: C().recentHead,
          children: [
            (0, s.jsx)("span", { children: "Recent" }),
            (0, s.jsx)("span", {
              className: C().muted,
              children: "See all"
            })
          ]
        }),
        (0, s.jsx)("ul", {
          className: C().rows,
          children: M.map(
            (e3) => (0, s.jsxs)(
              "li",
              {
                className: C().row,
                children: [
                  (0, s.jsx)(n.default, {
                    src: e3.photo,
                    alt: "",
                    width: 32,
                    height: 32,
                    className: C().thumb
                  }),
                  (0, s.jsxs)("span", {
                    className: C().rowText,
                    children: [
                      (0, s.jsx)("span", { children: e3.name }),
                      (0, s.jsx)("span", {
                        className: C().muted,
                        children: e3.detail
                      })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: C().amount,
                    "data-in": e3.incoming || void 0,
                    children: e3.amount
                  })
                ]
              },
              e3.id
            )
          )
        })
      ]
    }) : 3 === e2 ? (0, s.jsxs)("div", {
      className: C().sheet,
      children: [
        (0, s.jsx)("div", {
          className: C().segment,
          children: N.map(
            (e3, t2) => (0, s.jsx)(
              "span",
              { "data-on": 1 === t2 || void 0, children: e3 },
              e3
            )
          )
        }),
        (0, s.jsx)("div", {
          className: C().tabBar,
          children: J.map(
            (e3, t2) => (0, s.jsx)(
              "span",
              {
                className: C().tab,
                "data-on": 1 === t2 || void 0,
                children: (0, s.jsx)(e3, {
                  size: 20,
                  strokeWidth: 1.75
                })
              },
              t2
            )
          )
        })
      ]
    }) : (0, s.jsx)("div", {
      className: C().sheet,
      children: (0, s.jsxs)("div", {
        className: C().toast,
        children: [
          (0, s.jsx)("span", {
            className: C().toastMark,
            children: (0, s.jsx)(g.A, { size: 14, strokeWidth: 2 })
          }),
          (0, s.jsxs)("span", {
            className: C().toastText,
            children: [
              (0, s.jsxs)("span", {
                className: C().toastTitle,
                children: [
                  T,
                  (0, s.jsx)("span", {
                    className: C().muted,
                    children: A
                  })
                ]
              }),
              (0, s.jsx)("span", {
                className: C().toastBody,
                children: z
              })
            ]
          })
        ]
      })
    });
  }
  let X = G;
}

__m(__module,__exports,__require);
});
A.reg(45425, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var i = r(51811);
  let n = {
    name: "house",
    size: 24,
    node: [
      [
        "path",
        { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }
      ],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
          key: "r6nss1"
        }
      ]
    ],
    aliases: ["home"]
  };
  n.node;
  let a = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(71019, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "credit-card",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ["path", { d: "M6 14h2", key: "mk7k0u" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(71363, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var s = a(51811);
  let i = {
    name: "user",
    size: 24,
    node: [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(71556, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "arrow-down-right",
    size: 24,
    node: [
      ["path", { d: "m7 7 10 10", key: "1fmybs" }],
      ["path", { d: "M17 7v10H7", key: "6fjiku" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(94774, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var n = i(51811);
  let s = {
    name: "chart-column",
    size: 24,
    node: [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
      ["path", { d: "M18 17V9", key: "2bz60n" }],
      ["path", { d: "M13 17V5", key: "1frdt8" }],
      ["path", { d: "M8 17v-3", key: "17ska0" }]
    ],
    aliases: ["bar-chart-3"]
  };
  s.node;
  let r = (0, n.A)(s);
}

__m(__module,__exports,__require);
});
A.cssFor("exploded-view", [15651]);
A.item("exploded-view", {entry:38541, export:"ExplodedView", kind:"block", tier:"pro", unresolved:[]});
})();