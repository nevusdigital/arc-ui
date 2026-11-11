function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { H: () => $ });
  var n = i(95155), s = i(12115), r = i(39551);
  let o = (0, s.createContext)({ strict: false });
  var a = i(24866);
  let l = (0, s.createContext)({});
  var h = i(44616), u = i(63290);
  function d(t2) {
    return Array.isArray(t2) ? t2.join(" ") : t2;
  }
  var c = i(51469), p = i(19274), m = i(54714);
  let f = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
  function v(t2, e2, i2) {
    for (let n2 in e2) (0, c.S)(e2[n2]) || (0, p.zK)(n2, i2) || (t2[n2] = e2[n2]);
  }
  var y = i(44425), g = i(73148);
  let x = () => ({ ...f(), attrs: {} }), w = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport"
  ]);
  function S(t2) {
    return t2.startsWith("while") || t2.startsWith("drag") && "draggable" !== t2 || t2.startsWith("layout") || t2.startsWith("onTap") || t2.startsWith("onPan") || t2.startsWith("onLayout") || w.has(t2);
  }
  var b = i(95391), T = i(43891), P = i(10583), A = i(26087), k = i(76792), E = i(15131), V = i(28819);
  let C = (t2) => (e2, i2) => {
    let n2 = (0, s.useContext)(l), r2 = (0, s.useContext)(E.t), o2 = () => (function({ scrapeMotionValuesFromProps: t3, createRenderState: e3 }, i3, n3, s2) {
      return {
        latestValues: (function(t4, e4, i4, n4) {
          let s3 = {}, r3 = n4(t4, {});
          for (let t5 in r3) s3[t5] = (0, P.u)(r3[t5]);
          let { initial: o3, animate: a2 } = t4, l2 = (0, h.e)(t4), u2 = (0, h.O)(t4);
          e4 && u2 && !l2 && false !== t4.inherit && (void 0 === o3 && (o3 = e4.initial), void 0 === a2 && (a2 = e4.animate));
          let d2 = !!i4 && false === i4.initial, c2 = (d2 = d2 || false === o3) ? a2 : o3;
          if (c2 && "boolean" != typeof c2 && !(0, A.N)(c2)) {
            let e5 = Array.isArray(c2) ? c2 : [c2];
            for (let i5 = 0; i5 < e5.length; i5++) {
              let n5 = (0, k.a)(t4, e5[i5]);
              if (n5) {
                let { transitionEnd: t5, transition: e6, ...i6 } = n5;
                for (let t6 in i6) {
                  let e7 = i6[t6];
                  if (Array.isArray(e7)) {
                    let t7 = d2 ? e7.length - 1 : 0;
                    e7 = e7[t7];
                  }
                  null !== e7 && (s3[t6] = e7);
                }
                for (let e7 in t5) s3[e7] = t5[e7];
              }
            }
          }
          return s3;
        })(i3, n3, s2, t3),
        renderState: e3()
      };
    })(t2, e2, n2, r2);
    return i2 ? o2() : (0, V.M)(o2);
  }, M = C({ scrapeMotionValuesFromProps: T.x, createRenderState: f }), D = C({ scrapeMotionValuesFromProps: i(85068).x, createRenderState: x });
  var R = i(80171);
  let L = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  }, B = false;
  function j() {
    return !(function() {
      if (B) return;
      let t2 = {};
      for (let e2 in L) t2[e2] = { isEnabled: (t3) => L[e2].some((e3) => !!t3[e3]) };
      (0, R.lr)(t2), B = true;
    })(), (0, R.vK)();
  }
  let F = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
  var O = i(43261), I = i(59299), W = i(11493), U = i(65239);
  function N(t2, { forwardMotionProps: e2 = false, type: i2 } = {}, p2, w2) {
    p2 && (function(t3) {
      let e3 = j();
      for (let i3 in t3) e3[i3] = { ...e3[i3], ...t3[i3] };
      (0, R.lr)(e3);
    })(p2);
    let T2 = i2 ? "svg" === i2 : (0, b.Q)(t2), P2 = T2 ? D : M;
    function A2(i3, p3) {
      var A3;
      let k3, V2, C2, M2 = {
        ...(0, s.useContext)(a.Q),
        ...i3,
        layoutId: (function({ layoutId: t3 }) {
          let e3 = (0, s.useContext)(r.L).id;
          return e3 && void 0 !== t3 ? e3 + "-" + t3 : t3;
        })(i3)
      }, { isStatic: D2, isValidProp: R2 } = M2, L2 = (function(t3) {
        let { initial: e3, animate: i4 } = (function(t4, e4) {
          if ((0, h.e)(t4)) {
            let { initial: e5, animate: i5 } = t4;
            return {
              initial: false === e5 || (0, u.w)(e5) ? e5 : void 0,
              animate: (0, u.w)(i5) ? i5 : void 0
            };
          }
          return false !== t4.inherit ? e4 : {};
        })(t3, (0, s.useContext)(l));
        return (0, s.useMemo)(
          () => ({ initial: e3, animate: i4 }),
          [d(e3), d(i4)]
        );
      })(i3), B2 = P2(i3, D2);
      if (!D2 && "u" > typeof window) {
        (0, s.useContext)(o).strict;
        let e3 = (function(t3) {
          let { drag: e4, layout: i4 } = j();
          if (!e4 && !i4) return {};
          let n2 = { ...e4, ...i4 };
          return {
            MeasureLayout: e4?.isEnabled(t3) || i4?.isEnabled(t3) ? n2.MeasureLayout : void 0,
            ProjectionNode: n2.ProjectionNode
          };
        })(M2);
        k3 = e3.MeasureLayout, L2.visualElement = (function(t3, e4, i4, n2, r2, h2) {
          let { visualElement: u2 } = (0, s.useContext)(l), d2 = (0, s.useContext)(o), c2 = (0, s.useContext)(E.t), p4 = (0, s.useContext)(a.Q), m2 = p4.reducedMotion, f2 = p4.skipAnimations, v2 = (0, s.useRef)(null), y2 = (0, s.useRef)(false);
          n2 = n2 || d2.renderer, !v2.current && n2 && (v2.current = n2(t3, {
            visualState: e4,
            parent: u2,
            props: i4,
            presenceContext: c2,
            blockInitialAnimation: !!c2 && false === c2.initial,
            reducedMotionConfig: m2,
            skipAnimations: f2,
            isSVG: h2
          }), y2.current && v2.current && (v2.current.manuallyAnimateOnMount = true));
          let g2 = v2.current, x2 = (0, s.useContext)(I.N);
          g2 && !g2.projection && r2 && ("html" === g2.type || "svg" === g2.type) && (function(t4, e5, i5, n3) {
            let {
              layoutId: s2,
              layout: r3,
              drag: o2,
              dragConstraints: a2,
              layoutScroll: l2,
              layoutRoot: h3,
              layoutAnchor: u3,
              layoutCrossfade: d3
            } = e5;
            t4.projection = new i5(
              t4.latestValues,
              e5["data-framer-portal-id"] ? void 0 : (function t5(e6) {
                if (e6)
                  return false !== e6.options.allowProjection ? e6.projection : t5(e6.parent);
              })(t4.parent)
            ), t4.projection.setOptions({
              layoutId: s2,
              layout: r3,
              alwaysMeasureLayout: !!o2 || a2 && (0, W.X)(a2),
              visualElement: t4,
              animationType: "string" == typeof r3 ? r3 : "both",
              initialPromotionConfig: n3,
              crossfade: d3,
              layoutScroll: l2,
              layoutRoot: h3,
              layoutAnchor: u3
            });
          })(v2.current, i4, r2, x2);
          let w3 = (0, s.useRef)(false);
          (0, s.useInsertionEffect)(() => {
            g2 && w3.current && g2.update(i4, c2);
          });
          let S2 = i4[O.n], b2 = (0, s.useRef)(
            !!S2 && "u" > typeof window && !window.MotionHandoffIsComplete?.(S2) && window.MotionHasOptimisedAnimation?.(S2)
          );
          return (0, U.E)(() => {
            y2.current = true, g2 && (w3.current = true, window.MotionIsMounted = true, g2.updateFeatures(), g2.scheduleRenderMicrotask(), b2.current && g2.animationState && g2.animationState.animateChanges());
          }), (0, s.useEffect)(() => {
            g2 && (!b2.current && g2.animationState && g2.animationState.animateChanges(), b2.current && (queueMicrotask(() => {
              window.MotionHandoffMarkAsComplete?.(S2);
            }), b2.current = false), g2.enteringChildren = void 0);
          }), g2;
        })(t2, B2, M2, w2, e3.ProjectionNode, T2);
      }
      return (0, n.jsxs)(l.Provider, {
        value: L2,
        children: [
          k3 && L2.visualElement ? (0, n.jsx)(k3, { visualElement: L2.visualElement, ...M2 }) : null,
          (function(t3, e3, i4, { latestValues: n2 }, r2, o2 = false, a2, l2) {
            let h2 = (a2 ?? (0, b.Q)(t3) ? function(t4, e4, i5, n3) {
              let r3 = (0, s.useMemo)(() => {
                let i6 = x();
                return (0, y.B)(
                  i6,
                  e4,
                  (0, g.n)(n3),
                  t4.transformTemplate,
                  t4.style
                ), { ...i6.attrs, style: { ...i6.style } };
              }, [e4]);
              if (t4.style) {
                let e5 = {};
                v(e5, t4.style, t4), r3.style = { ...e5, ...r3.style };
              }
              return r3;
            } : function(t4, e4) {
              let i5, n3, r3 = {}, o3 = (i5 = t4.style || {}, v(n3 = {}, i5, t4), Object.assign(
                n3,
                (function({ transformTemplate: t5 }, e5) {
                  return (0, s.useMemo)(() => {
                    let i6 = f();
                    return (0, m.O)(i6, e5, t5), Object.assign({}, i6.vars, i6.style);
                  }, [e5]);
                })(t4, e4)
              ), n3);
              return t4.drag && false !== t4.dragListener && (r3.draggable = false, o3.userSelect = o3.WebkitUserSelect = o3.WebkitTouchCallout = "none", o3.touchAction = true === t4.drag ? "none" : `pan-${"x" === t4.drag ? "y" : "x"}`), void 0 === t4.tabIndex && (t4.onTap || t4.onTapStart || t4.whileTap) && (r3.tabIndex = 0), r3.style = o3, r3;
            })(e3, n2, r2, t3), u2 = (function(t4, e4, i5, n3) {
              let s2 = {};
              for (let r3 in t4)
                ("values" !== r3 || "object" != typeof t4.values) && !(0, c.S)(t4[r3]) && ((r3.startsWith("on") ? !S(r3) : n3?.(r3) ?? !S(r3)) || true === i5 && S(r3) || !e4 && !S(r3) || t4.draggable && r3.startsWith("onDrag")) && (s2[r3] = t4[r3]);
              return s2;
            })(e3, "string" == typeof t3, o2, l2), d2 = t3 !== s.Fragment ? { ...u2, ...h2, ref: i4 } : {}, { children: p4 } = e3, w3 = (0, s.useMemo)(() => (0, c.S)(p4) ? p4.get() : p4, [p4]);
            return (0, s.createElement)(t3, { ...d2, children: w3 });
          })(
            t2,
            i3,
            (A3 = L2.visualElement, V2 = (0, s.useRef)(p3), (0, s.useInsertionEffect)(() => {
              V2.current = p3;
            }), C2 = (0, s.useRef)(null), (0, s.useCallback)(
              (t3) => {
                t3 && B2.onMount?.(t3), A3 && (t3 ? A3.mount(t3) : A3.unmount());
                let e3 = V2.current;
                if ("function" == typeof e3)
                  if (t3) {
                    let i4 = e3(t3);
                    "function" == typeof i4 && (C2.current = i4);
                  } else C2.current ? (C2.current(), C2.current = null) : e3(t3);
                else e3 && (e3.current = t3);
              },
              [A3]
            )),
            B2,
            D2,
            e2,
            T2,
            R2
          )
        ]
      });
    }
    A2.displayName = `motion.${"string" == typeof t2 ? t2 : `create(${t2.displayName ?? t2.name ?? ""})`}`;
    let k2 = (0, s.forwardRef)(A2);
    return k2[F] = t2, k2;
  }
  function $(t2, e2) {
    if ("u" < typeof Proxy) return N;
    let i2 = /* @__PURE__ */ new Map(), n2 = (i3, n3) => N(i3, n3, t2, e2);
    return new Proxy((t3, e3) => n2(t3, e3), {
      get: (s2, r2) => "create" === r2 ? n2 : (i2.has(r2) || i2.set(r2, N(r2, void 0, t2, e2)), i2.get(r2))
    });
  }
}

__m(__module,__exports,__require);
}