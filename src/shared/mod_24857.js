function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { P: () => ih });
  var n = i(25952), s = i(47888), r = i(4287), o = i(51469), a = i(96653), l = i(80171);
  class h extends l.BX {
    constructor() {
      super(...arguments), this.KeyframeResolver = a.K;
    }
    sortInstanceNodePosition(t10, e10) {
      return 2 & t10.compareDocumentPosition(e10) ? 1 : -1;
    }
    getBaseTargetFromProps(t10, e10) {
      let i2 = t10.style;
      return i2 ? i2[e10] : void 0;
    }
    removeValueFromRenderState(t10, { vars: e10, style: i2 }) {
      delete e10[t10], delete i2[t10];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let { children: t10 } = this.props;
      (0, o.S)(t10) && (this.childSubscription = t10.on("change", (t11) => {
        this.current && (this.current.textContent = `${t11}`);
      }));
    }
  }
  var u = i(15043), d = i(44425);
  let c = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);
  var p = i(73148);
  function m(t10, { style: e10, vars: i2 }, n2, s2) {
    let r2, o2 = t10.style;
    for (r2 in e10) o2[r2] = e10[r2];
    for (r2 in s2?.applyProjectionStyles(o2, n2), i2) o2.setProperty(r2, i2[r2]);
  }
  var f = i(85068);
  class v extends h {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = r.ge;
    }
    getBaseTargetFromProps(t10, e10) {
      return t10[e10];
    }
    readValueFromInstance(t10, e10) {
      if (n.f.has(e10)) {
        let t11 = (0, s.D)(e10);
        return t11 && t11.default || 0;
      }
      if (d.W.includes(e10)) {
        let i2 = getComputedStyle(t10)[e10];
        if ("string" == typeof i2 && i2) return i2.trim();
      }
      return e10 = c.has(e10) ? e10 : (0, u.I)(e10), t10.getAttribute(e10);
    }
    scrapeMotionValuesFromProps(t10, e10, i2) {
      return (0, f.x)(t10, e10, i2);
    }
    build(t10, e10, i2) {
      (0, d.B)(t10, e10, this.isSVGTag, i2.transformTemplate, i2.style);
    }
    renderInstance(t10, e10, i2, n2) {
      for (let i3 in m(t10, e10, void 0, n2), e10.attrs)
        t10.setAttribute(c.has(i3) ? i3 : (0, u.I)(i3), e10.attrs[i3]);
    }
    mount(t10) {
      this.isSVGTag = (0, p.n)(t10.tagName), super.mount(t10);
    }
  }
  var y = i(5556), g = i(39896), x = i(11698), w = i(93560), S = i(54714), b = i(43891);
  class T extends h {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = m;
    }
    mount(t10) {
      (0, y.V)(
        !!t10.style,
        "motion.create() components must forward their ref to a HTML or SVG element",
        "custom-component-ref"
      ), super.mount(t10);
    }
    readValueFromInstance(t10, e10) {
      if (n.f.has(e10))
        return this.projection?.isProjecting ? (0, x.zs)(e10) : (0, x.Ib)(t10, e10);
      {
        let i2 = window.getComputedStyle(t10), n2 = ((0, g.j4)(e10) ? i2.getPropertyValue(e10) : i2[e10]) || 0;
        return "string" == typeof n2 ? n2.trim() : n2;
      }
    }
    measureInstanceViewportBox(t10, { transformPagePoint: e10 }) {
      return (0, w.m)(t10, e10);
    }
    build(t10, e10, i2) {
      (0, S.O)(t10, e10, i2.transformTemplate);
    }
    scrapeMotionValuesFromProps(t10, e10, i2) {
      return (0, b.x)(t10, e10, i2);
    }
  }
  var P = i(12115), A = i(95391), k = i(32642);
  class E {
    constructor(t10) {
      this.isMounted = false, this.node = t10;
    }
    update() {
    }
  }
  var V = i(38294), C = i(12663), M = i(63290), D = i(51129);
  let R = D._.length;
  var L = i(26087), B = i(91909), j = i(33140);
  function F(t10, e10) {
    if (!Array.isArray(e10)) return false;
    let i2 = e10.length;
    if (i2 !== t10.length) return false;
    for (let n2 = 0; n2 < i2; n2++) if (e10[n2] !== t10[n2]) return false;
    return true;
  }
  let O = [...D.U].reverse(), I = D.U.length;
  function W(t10 = false) {
    return {
      isActive: t10,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function U() {
    return {
      animate: W(true),
      whileInView: W(),
      whileHover: W(),
      whileTap: W(),
      whileDrag: W(),
      whileFocus: W(),
      exit: W()
    };
  }
  class N extends E {
    constructor(t10) {
      super(t10), t10.animationState || (t10.animationState = (function(t11) {
        let e10 = (e11) => Promise.all(
          e11.map(({ animation: e12, options: i3 }) => (0, V._)(t11, e12, i3))
        ), i2 = U(), n2 = true, s2 = false, r2 = (e11) => (i3, n3) => {
          let s3 = (0, j.K)(
            t11,
            n3,
            "exit" === e11 ? t11.presenceContext?.custom : void 0
          );
          if (s3) {
            let { transition: t12, transitionEnd: e12, ...n4 } = s3;
            i3 = { ...i3, ...n4, ...e12 };
          }
          return i3;
        };
        function o2(o3) {
          let { props: a2 } = t11, l2 = (function t12(e11) {
            if (!e11) return;
            if (!e11.isControllingVariants) {
              let i4 = e11.parent && t12(e11.parent) || {};
              return void 0 !== e11.props.initial && (i4.initial = e11.props.initial), i4;
            }
            let i3 = {};
            for (let t13 = 0; t13 < R; t13++) {
              let n3 = D._[t13], s3 = e11.props[n3];
              ((0, M.w)(s3) || false === s3) && (i3[n3] = s3);
            }
            return i3;
          })(t11.parent) || {}, h2 = [], u2 = /* @__PURE__ */ new Set(), d2 = {}, c2 = 1 / 0;
          for (let e11 = 0; e11 < I; e11++) {
            var p2, m2;
            let f3 = O[e11], v2 = i2[f3], y2 = void 0 !== a2[f3] ? a2[f3] : l2[f3], g2 = (0, M.w)(y2), x2 = f3 === o3 ? v2.isActive : null;
            false === x2 && (c2 = e11);
            let w2 = y2 === l2[f3] && y2 !== a2[f3] && g2;
            if (w2 && (n2 || s2) && t11.manuallyAnimateOnMount && (w2 = false), v2.protectedKeys = { ...d2 }, !v2.isActive && null === x2 || !y2 && !v2.prevProp || (0, L.N)(y2) || "boolean" == typeof y2)
              continue;
            if ("exit" === f3 && v2.isActive && true !== x2) {
              v2.prevResolvedValues && (d2 = { ...d2, ...v2.prevResolvedValues });
              continue;
            }
            let S2 = (p2 = v2.prevProp, "string" == typeof (m2 = y2) ? m2 !== p2 : !!Array.isArray(m2) && !F(m2, p2)), b2 = S2 || f3 === o3 && v2.isActive && !w2 && g2 || e11 > c2 && g2, T2 = false, P2 = Array.isArray(y2) ? y2 : [y2], A2 = P2.reduce(r2(f3), {});
            false === x2 && (A2 = {});
            let { prevResolvedValues: k2 = {} } = v2, E2 = { ...k2, ...A2 }, V2 = (e12) => {
              b2 = true, u2.has(e12) && (T2 = true, u2.delete(e12)), v2.needsAnimating[e12] = true;
              let i3 = t11.getValue(e12);
              i3 && (i3.liveStyle = false);
            };
            for (let t12 in E2) {
              let e12 = A2[t12], i3 = k2[t12];
              if (!d2.hasOwnProperty(t12))
                ((0, B.p)(e12) && (0, B.p)(i3) ? !F(e12, i3) || S2 : e12 !== i3) ? null != e12 ? V2(t12) : u2.add(t12) : void 0 !== e12 && u2.has(t12) ? V2(t12) : v2.protectedKeys[t12] = true;
            }
            v2.prevProp = y2, v2.prevResolvedValues = A2, v2.isActive && (d2 = { ...d2, ...A2 }), (n2 || s2) && t11.blockInitialAnimation && (b2 = false);
            let D2 = w2 && S2, R2 = !D2 || T2;
            b2 && R2 && h2.push(
              ...P2.map((e12) => {
                let i3 = { type: f3 };
                if ("string" == typeof e12 && (n2 || s2) && !D2 && t11.manuallyAnimateOnMount && t11.parent) {
                  let { parent: n3 } = t11, s3 = (0, j.K)(n3, e12);
                  if (n3.enteringChildren && s3) {
                    let { delayChildren: e13 } = s3.transition || {};
                    i3.delay = (0, C.L)(n3.enteringChildren, t11, e13);
                  }
                }
                return { animation: e12, options: i3 };
              })
            );
          }
          if (u2.size) {
            let e11 = {};
            if ("boolean" != typeof a2.initial) {
              let i3 = (0, j.K)(
                t11,
                Array.isArray(a2.initial) ? a2.initial[0] : a2.initial
              );
              i3 && i3.transition && (e11.transition = i3.transition);
            }
            u2.forEach((i3) => {
              let n3 = t11.getBaseTarget(i3), s3 = t11.getValue(i3);
              s3 && (s3.liveStyle = true), e11[i3] = n3 ?? null;
            }), h2.push({ animation: e11 });
          }
          let f2 = !!h2.length;
          return n2 && (false === a2.initial || a2.initial === a2.animate) && !t11.manuallyAnimateOnMount && (f2 = false), n2 = false, s2 = false, f2 ? e10(h2) : Promise.resolve();
        }
        return {
          animateChanges: o2,
          setActive: function(e11, n3) {
            if (i2[e11].isActive === n3) return Promise.resolve();
            t11.variantChildren?.forEach(
              (t12) => t12.animationState?.setActive(e11, n3)
            ), i2[e11].isActive = n3;
            let s3 = o2(e11);
            for (let t12 in i2) i2[t12].protectedKeys = {};
            return s3;
          },
          setAnimateFunction: function(i3) {
            e10 = i3(t11);
          },
          getState: () => i2,
          reset: () => {
            i2 = U(), s2 = true;
          }
        };
      })(t10));
    }
    updateAnimationControlsSubscription() {
      let { animate: t10 } = this.node.getProps();
      (0, L.N)(t10) && (this.unmountControls = t10.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: t10 } = this.node.getProps(), { animate: e10 } = this.node.prevProps || {};
      t10 !== e10 && this.updateAnimationControlsSubscription();
    }
    unmount() {
      this.node.animationState.reset(), this.unmountControls?.();
    }
  }
  let $ = 0;
  class X extends E {
    constructor() {
      super(...arguments), this.id = $++, this.isExitComplete = false;
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: t10, onExitComplete: e10 } = this.node.presenceContext, { isPresent: i2 } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t10 === i2) return;
      if (t10 && false === i2) {
        if (this.isExitComplete) {
          let { initial: t11, custom: e11 } = this.node.getProps();
          if ("string" == typeof t11 || "object" == typeof t11 && null !== t11 && !Array.isArray(t11)) {
            let i3 = (0, j.K)(this.node, t11, e11);
            if (i3) {
              let { transition: t12, transitionEnd: e12, ...n3 } = i3;
              for (let t13 in n3) this.node.getValue(t13)?.jump(n3[t13]);
            }
          }
          this.node.animationState.reset(), this.node.animationState.animateChanges();
        } else this.node.animationState.setActive("exit", false);
        this.isExitComplete = false;
        return;
      }
      let n2 = this.node.animationState.setActive("exit", !t10);
      e10 && !t10 && n2.then(() => {
        this.isExitComplete = true, e10(this.id);
      });
    }
    mount() {
      let { register: t10, onExitComplete: e10 } = this.node.presenceContext || {};
      e10 && e10(this.id), t10 && (this.unmount = t10(this.id));
    }
    unmount() {
    }
  }
  var G = i(72025);
  let K = { x: false, y: false };
  function z(t10) {
    return [t10("x"), t10("y")];
  }
  var H = i(11048), q = i(56260);
  function Y(t10) {
    return t10.max - t10.min;
  }
  function _(t10, e10, i2, n2 = 0.5) {
    t10.origin = n2, t10.originPoint = (0, q.k)(e10.min, e10.max, t10.origin), t10.scale = Y(i2) / Y(e10), t10.translate = (0, q.k)(i2.min, i2.max, t10.origin) - t10.originPoint, (t10.scale >= 0.9999 && t10.scale <= 1.0001 || isNaN(t10.scale)) && (t10.scale = 1), (t10.translate >= -0.01 && t10.translate <= 0.01 || isNaN(t10.translate)) && (t10.translate = 0);
  }
  function Q(t10, e10, i2, n2) {
    _(t10.x, e10.x, i2.x, n2 ? n2.originX : void 0), _(t10.y, e10.y, i2.y, n2 ? n2.originY : void 0);
  }
  function Z(t10, e10, i2, n2 = 0) {
    t10.min = (n2 ? (0, q.k)(i2.min, i2.max, n2) : i2.min) + e10.min, t10.max = t10.min + Y(e10);
  }
  function J(t10, e10, i2, n2 = 0) {
    let s2 = n2 ? (0, q.k)(i2.min, i2.max, n2) : i2.min;
    t10.min = e10.min - s2, t10.max = t10.min + Y(e10);
  }
  function tt(t10, e10, i2, n2) {
    J(t10.x, e10.x, i2.x, n2?.x), J(t10.y, e10.y, i2.y, n2?.y);
  }
  var te = i(27933), ti = i(61638), tn = i(27669), ts = i(36381);
  let tr = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]), to = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
  function ta(t10, e10, i2, n2 = { passive: true }) {
    return t10.addEventListener(e10, i2, n2), () => t10.removeEventListener(e10, i2, n2);
  }
  var tl = i(51275);
  let th = (t10) => "mouse" === t10.pointerType ? "number" != typeof t10.button || t10.button <= 0 : false !== t10.isPrimary;
  function tu(t10) {
    return { point: { x: t10.pageX, y: t10.pageY } };
  }
  function td(t10, e10, i2, n2) {
    return ta(t10, e10, (t11) => th(t11) && i2(t11, tu(t11)), n2);
  }
  let tc = ({ current: t10 }) => t10 ? t10.ownerDocument.defaultView : null;
  var tp = i(11493), tm = i(34017), tf = i(38621);
  let tv = (t10, e10) => Math.abs(t10 - e10), ty = /* @__PURE__ */ new Set(["auto", "scroll"]);
  class tg {
    constructor(t10, e10, {
      transformPagePoint: i2,
      contextWindow: n2 = window,
      dragSnapToOrigin: s2 = false,
      distanceThreshold: r2 = 3,
      element: o2
    } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (t11) => {
        this.handleScroll(t11.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        var t11, e11;
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo && (this.lastMoveEventInfo = tx(
          this.lastRawMoveEventInfo,
          this.transformPagePoint
        ));
        let i3 = tS(this.lastMoveEventInfo, this.history), n3 = null !== this.startEvent, s3 = (t11 = i3.offset, e11 = { x: 0, y: 0 }, Math.sqrt(tv(t11.x, e11.x) ** 2 + tv(t11.y, e11.y) ** 2) >= this.distanceThreshold);
        if (!n3 && !s3) return;
        let { point: r3 } = i3, { timestamp: o3 } = te.uv;
        this.history.push({ ...r3, timestamp: o3 });
        let { onStart: a3, onMove: l3 } = this.handlers;
        n3 || (a3 && a3(this.lastMoveEvent, i3), this.startEvent = this.lastMoveEvent), l3 && l3(this.lastMoveEvent, i3);
      }, this.handlePointerMove = (t11, e11) => {
        this.lastMoveEvent = t11, this.lastRawMoveEventInfo = e11, this.lastMoveEventInfo = tx(e11, this.transformPagePoint), te.Gt.update(this.updatePoint, true);
      }, this.handlePointerUp = (t11, e11) => {
        this.end();
        let { onEnd: i3, onSessionEnd: n3, resumeAnimation: s3 } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && s3 && s3(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        let r3 = tS(
          "pointercancel" === t11.type ? this.lastMoveEventInfo : tx(e11, this.transformPagePoint),
          this.history
        );
        this.startEvent && i3 && i3(t11, r3), n3 && n3(t11, r3);
      }, !th(t10))
        return;
      this.dragSnapToOrigin = s2, this.handlers = e10, this.transformPagePoint = i2, this.distanceThreshold = r2, this.contextWindow = n2 || window;
      const a2 = tx(tu(t10), this.transformPagePoint), { point: l2 } = a2, { timestamp: h2 } = te.uv;
      this.history = [{ ...l2, timestamp: h2 }];
      const { onSessionStart: u2 } = e10;
      u2 && u2(t10, tS(a2, this.history));
      const d2 = { passive: true, capture: true };
      this.removeListeners = (0, tm.F)(
        td(this.contextWindow, "pointermove", this.handlePointerMove, d2),
        td(this.contextWindow, "pointerup", this.handlePointerUp, d2),
        td(this.contextWindow, "pointercancel", this.handlePointerUp, d2)
      ), o2 && this.startScrollTracking(o2);
    }
    startScrollTracking(t10) {
      let e10 = t10.parentElement;
      for (; e10; ) {
        let t11 = getComputedStyle(e10);
        (ty.has(t11.overflowX) || ty.has(t11.overflowY)) && this.scrollPositions.set(e10, { x: e10.scrollLeft, y: e10.scrollTop }), e10 = e10.parentElement;
      }
      this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY
      }), window.addEventListener("scroll", this.onElementScroll, {
        capture: true
      }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: true
        }), window.removeEventListener("scroll", this.onWindowScroll);
      };
    }
    handleScroll(t10) {
      let e10 = this.scrollPositions.get(t10);
      if (!e10) return;
      let i2 = t10 === window, n2 = i2 ? { x: window.scrollX, y: window.scrollY } : { x: t10.scrollLeft, y: t10.scrollTop }, s2 = { x: n2.x - e10.x, y: n2.y - e10.y };
      (0 !== s2.x || 0 !== s2.y) && (i2 ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s2.x, this.lastMoveEventInfo.point.y += s2.y) : this.history.length > 0 && (this.history[0].x -= s2.x, this.history[0].y -= s2.y), this.scrollPositions.set(t10, n2), te.Gt.update(this.updatePoint, true));
    }
    updateHandlers(t10) {
      this.handlers = t10;
    }
    end() {
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), (0, te.WG)(this.updatePoint);
    }
  }
  function tx(t10, e10) {
    return e10 ? { point: e10(t10.point) } : t10;
  }
  function tw(t10, e10) {
    return { x: t10.x - e10.x, y: t10.y - e10.y };
  }
  function tS({ point: t10 }, e10) {
    return {
      point: t10,
      delta: tw(t10, tb(e10)),
      offset: tw(t10, e10[0]),
      velocity: (function(t11) {
        if (t11.length < 2) return { x: 0, y: 0 };
        let e11 = t11.length - 1, i2 = null, n2 = tb(t11);
        for (; e11 >= 0 && (i2 = t11[e11], !(n2.timestamp - i2.timestamp > (0, tf.f)(0.1))); )
          e11--;
        if (!i2) return { x: 0, y: 0 };
        i2 === t11[0] && t11.length > 2 && n2.timestamp - i2.timestamp > 2 * (0, tf.f)(0.1) && (i2 = t11[1]);
        let s2 = (0, tf.X)(n2.timestamp - i2.timestamp);
        if (0 === s2) return { x: 0, y: 0 };
        let r2 = { x: (n2.x - i2.x) / s2, y: (n2.y - i2.y) / s2 };
        return r2.x === 1 / 0 && (r2.x = 0), r2.y === 1 / 0 && (r2.y = 0), r2;
      })(e10)
    };
  }
  function tb(t10) {
    return t10[t10.length - 1];
  }
  var tT = i(18844), tP = i(94712);
  function tA(t10, e10, i2) {
    return {
      min: void 0 !== e10 ? t10.min + e10 : void 0,
      max: void 0 !== i2 ? t10.max + i2 - (t10.max - t10.min) : void 0
    };
  }
  function tk(t10, e10) {
    let i2 = e10.min - t10.min, n2 = e10.max - t10.max;
    return e10.max - e10.min < t10.max - t10.min && ([i2, n2] = [n2, i2]), { min: i2, max: n2 };
  }
  function tE(t10, e10, i2) {
    return { min: tV(t10, e10), max: tV(t10, i2) };
  }
  function tV(t10, e10) {
    return "number" == typeof t10 ? t10 : t10[e10] || 0;
  }
  let tC = /* @__PURE__ */ new WeakMap();
  class tM {
    constructor(t10) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = (0, r.ge)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t10;
    }
    start(t10, { snapToCursor: e10 = false, distanceThreshold: i2 } = {}) {
      let { presenceContext: n2 } = this.visualElement;
      if (n2 && false === n2.isPresent) return;
      let s2 = (t11) => {
        e10 && this.snapToCursor(tu(t11).point), this.stopAnimation();
      }, r2 = (t11, e11) => {
        let { drag: i3, dragPropagation: n3, onDragStart: s3 } = this.getProps();
        if (i3 && !n3 && (this.openDragLock && this.openDragLock(), this.openDragLock = (function(t12) {
          if ("x" === t12 || "y" === t12)
            if (K[t12]) return null;
            else
              return K[t12] = true, () => {
                K[t12] = false;
              };
          return K.x || K.y ? null : (K.x = K.y = true, () => {
            K.x = K.y = false;
          });
        })(i3), !this.openDragLock))
          return;
        this.latestPointerEvent = t11, this.latestPanInfo = e11, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), z((t12) => {
          let e12 = this.getAxisMotionValue(t12).get() || 0;
          if (H.KN.test(e12)) {
            let { projection: i4 } = this.visualElement;
            if (i4 && i4.layout) {
              let n4 = i4.layout.layoutBox[t12];
              n4 && (e12 = Y(n4) * (parseFloat(e12) / 100));
            }
          }
          this.originPoint[t12] = e12;
        }), s3 && te.Gt.update(() => s3(t11, e11), false, true), (0, ti.g)(this.visualElement, "transform");
        let { animationState: r3 } = this.visualElement;
        r3 && r3.setActive("whileDrag", true);
      }, o2 = (t11, e11) => {
        this.latestPointerEvent = t11, this.latestPanInfo = e11;
        let {
          dragPropagation: i3,
          dragDirectionLock: n3,
          onDirectionLock: s3,
          onDrag: r3
        } = this.getProps();
        if (!i3 && !this.openDragLock) return;
        let { offset: o3 } = e11;
        if (n3 && null === this.currentDirection) {
          this.currentDirection = (function(t12, e12 = 10) {
            let i4 = null;
            return Math.abs(t12.y) > e12 ? i4 = "y" : Math.abs(t12.x) > e12 && (i4 = "x"), i4;
          })(o3), null !== this.currentDirection && s3 && s3(this.currentDirection);
          return;
        }
        this.updateAxis("x", e11.point, o3), this.updateAxis("y", e11.point, o3), this.visualElement.render(), r3 && te.Gt.update(() => r3(t11, e11), false, true);
      }, a2 = (t11, e11) => {
        this.latestPointerEvent = t11, this.latestPanInfo = e11, this.stop(t11, e11), this.latestPointerEvent = null, this.latestPanInfo = null;
      }, l2 = () => {
        let { dragSnapToOrigin: t11 } = this.getProps();
        (t11 || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      }, { dragSnapToOrigin: h2 } = this.getProps();
      this.panSession = new tg(
        t10,
        {
          onSessionStart: s2,
          onStart: r2,
          onMove: o2,
          onSessionEnd: a2,
          resumeAnimation: l2
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: h2,
          distanceThreshold: i2,
          contextWindow: tc(this.visualElement),
          element: this.visualElement.current
        }
      );
    }
    stop(t10, e10) {
      let i2 = t10 || this.latestPointerEvent, n2 = e10 || this.latestPanInfo, s2 = this.isDragging;
      if (this.cancel(), !s2 || !n2 || !i2) return;
      let { velocity: r2 } = n2;
      this.startAnimation(r2);
      let { onDragEnd: o2 } = this.getProps();
      o2 && te.Gt.postRender(() => o2(i2, n2));
    }
    cancel() {
      this.isDragging = false;
      let { projection: t10, animationState: e10 } = this.visualElement;
      t10 && (t10.isAnimationBlocked = false), this.endPanSession();
      let { dragPropagation: i2 } = this.getProps();
      !i2 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e10 && e10.setActive("whileDrag", false);
    }
    endPanSession() {
      this.panSession && this.panSession.end(), this.panSession = void 0;
    }
    updateAxis(t10, e10, i2) {
      let { drag: n2 } = this.getProps();
      if (!i2 || !tR(t10, n2, this.currentDirection)) return;
      let s2 = this.getAxisMotionValue(t10), r2 = this.originPoint[t10] + i2[t10];
      this.constraints && this.constraints[t10] && (r2 = (function(t11, { min: e11, max: i3 }, n3) {
        return void 0 !== e11 && t11 < e11 ? t11 = n3 ? (0, q.k)(e11, t11, n3.min) : Math.max(t11, e11) : void 0 !== i3 && t11 > i3 && (t11 = n3 ? (0, q.k)(i3, t11, n3.max) : Math.min(t11, i3)), t11;
      })(r2, this.constraints[t10], this.elastic[t10])), s2.set(r2);
    }
    resolveConstraints() {
      let { dragConstraints: t10, dragElastic: e10 } = this.getProps(), i2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout, n2 = this.constraints;
      t10 && (0, tp.X)(t10) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t10 && i2 ? this.constraints = (function(t11, { top: e11, left: i3, bottom: n3, right: s2 }) {
        return { x: tA(t11.x, i3, s2), y: tA(t11.y, e11, n3) };
      })(i2.layoutBox, t10) : this.constraints = false, this.elastic = (function(t11 = 0.35) {
        return false === t11 ? t11 = 0 : true === t11 && (t11 = 0.35), { x: tE(t11, "left", "right"), y: tE(t11, "top", "bottom") };
      })(e10), n2 !== this.constraints && !(0, tp.X)(t10) && i2 && this.constraints && !this.hasMutatedConstraints && z((t11) => {
        var e11, n3;
        let s2;
        false !== this.constraints && this.getAxisMotionValue(t11) && (this.constraints[t11] = (e11 = i2.layoutBox[t11], n3 = this.constraints[t11], s2 = {}, void 0 !== n3.min && (s2.min = n3.min - e11.min), void 0 !== n3.max && (s2.max = n3.max - e11.min), s2));
      });
    }
    resolveRefConstraints() {
      var t10;
      let { dragConstraints: e10, onMeasureDragConstraints: i2 } = this.getProps();
      if (!e10 || !(0, tp.X)(e10)) return false;
      let n2 = e10.current;
      (0, y.V)(
        null !== n2,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
        "drag-constraints-ref"
      );
      let { projection: s2 } = this.visualElement;
      if (!s2 || !s2.layout) return false;
      s2.root && (s2.root.scroll = void 0, s2.root.updateScroll());
      let r2 = (0, w.L)(n2, s2.root, this.visualElement.getTransformPagePoint()), o2 = (t10 = s2.layout.layoutBox, { x: tk(t10.x, r2.x), y: tk(t10.y, r2.y) });
      if (i2) {
        let t11 = i2((0, tn.pA)(o2));
        this.hasMutatedConstraints = !!t11, t11 && (o2 = (0, tn.FY)(t11));
      }
      return o2;
    }
    startAnimation(t10) {
      let {
        drag: e10,
        dragMomentum: i2,
        dragElastic: n2,
        dragTransition: s2,
        dragSnapToOrigin: r2,
        onDragTransitionEnd: o2
      } = this.getProps(), a2 = this.constraints || {};
      return Promise.all(
        z((o3) => {
          if (!tR(o3, e10, this.currentDirection)) return;
          let l2 = a2 && a2[o3] || {};
          (true === r2 || r2 === o3) && (l2 = { min: 0, max: 0 });
          let h2 = {
            type: "inertia",
            velocity: i2 ? t10[o3] : 0,
            bounceStiffness: n2 ? 200 : 1e6,
            bounceDamping: n2 ? 40 : 1e7,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s2,
            ...l2
          };
          return this.startAxisValueAnimation(o3, h2);
        })
      ).then(o2);
    }
    startAxisValueAnimation(t10, e10) {
      let i2 = this.getAxisMotionValue(t10);
      return (0, ti.g)(this.visualElement, t10), i2.start((0, ts.f)(t10, i2, 0, e10, this.visualElement, false));
    }
    stopAnimation() {
      z((t10) => this.getAxisMotionValue(t10).stop());
    }
    getAxisMotionValue(t10) {
      let e10 = `_drag${t10.toUpperCase()}`;
      return this.visualElement.getProps()[e10] || this.visualElement.getValue(t10, this.visualElement.latestValues[t10] ?? 0);
    }
    snapToCursor(t10) {
      z((e10) => {
        let { drag: i2 } = this.getProps();
        if (!tR(e10, i2, this.currentDirection)) return;
        let { projection: n2 } = this.visualElement, s2 = this.getAxisMotionValue(e10);
        if (n2 && n2.layout) {
          let { min: i3, max: r2 } = n2.layout.layoutBox[e10], o2 = s2.get() || 0;
          s2.set(t10[e10] - (0, q.k)(i3, r2, 0.5) + o2);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: t10, dragConstraints: e10 } = this.getProps(), { projection: i2 } = this.visualElement;
      if (!(0, tp.X)(e10) || !i2 || !this.constraints) return;
      this.stopAnimation();
      let n2 = { x: 0, y: 0 };
      z((t11) => {
        let e11 = this.getAxisMotionValue(t11);
        if (e11 && false !== this.constraints) {
          var i3, s3;
          let r2, o2, a2, l2 = e11.get();
          n2[t11] = (i3 = { min: l2, max: l2 }, s3 = this.constraints[t11], r2 = 0.5, o2 = Y(i3), (a2 = Y(s3)) > o2 ? r2 = (0, tT.q)(s3.min, s3.max - o2, i3.min) : o2 > a2 && (r2 = (0, tT.q)(i3.min, i3.max - a2, s3.min)), (0, tP.q)(0, 1, r2));
        }
      });
      let { transformTemplate: s2 } = this.visualElement.getProps();
      this.visualElement.current.style.transform = s2 ? s2({}, "") : "none", i2.root && i2.root.updateScroll(), i2.updateLayout(), this.constraints = false, this.resolveConstraints(), z((e11) => {
        if (!tR(e11, t10, null)) return;
        let i3 = this.getAxisMotionValue(e11), { min: s3, max: r2 } = this.constraints[e11];
        i3.set((0, q.k)(s3, r2, n2[e11]));
      }), this.visualElement.render();
    }
    addListeners() {
      let t10;
      if (!this.visualElement.current) return;
      tC.set(this.visualElement, this);
      let e10 = this.visualElement.current, i2 = td(e10, "pointerdown", (t11) => {
        let { drag: i3, dragListener: n3 = true } = this.getProps(), s3 = t11.target, r3 = s3 !== e10 && (to.has(s3.tagName) || true === s3.isContentEditable);
        i3 && n3 && !r3 && this.start(t11);
      }), n2 = () => {
        var i3, n3, s3;
        let r3, o3, { dragConstraints: a3 } = this.getProps();
        (0, tp.X)(a3) && a3.current && (this.constraints = this.resolveRefConstraints(), t10 || (i3 = e10, n3 = a3.current, s3 = () => this.scalePositionWithinConstraints(), r3 = (0, tl.X)(i3, tD(s3)), o3 = (0, tl.X)(n3, tD(s3)), t10 = () => {
          r3(), o3();
        }));
      }, { projection: s2 } = this.visualElement, r2 = s2.addEventListener("measure", n2);
      s2 && !s2.layout && (s2.root && s2.root.updateScroll(), s2.updateLayout()), te.Gt.read(n2);
      let o2 = ta(window, "resize", () => this.scalePositionWithinConstraints()), a2 = s2.addEventListener(
        "didUpdate",
        ({ delta: t11, hasLayoutChanged: e11 }) => {
          this.isDragging && e11 && (z((e12) => {
            let i3 = this.getAxisMotionValue(e12);
            i3 && (this.originPoint[e12] += t11[e12].translate, i3.set(i3.get() + t11[e12].translate));
          }), this.visualElement.render());
        }
      );
      return () => {
        o2(), i2(), r2(), a2 && a2(), t10 && t10();
      };
    }
    getProps() {
      let t10 = this.visualElement.getProps(), {
        drag: e10 = false,
        dragDirectionLock: i2 = false,
        dragPropagation: n2 = false,
        dragConstraints: s2 = false,
        dragElastic: r2 = 0.35,
        dragMomentum: o2 = true
      } = t10;
      return {
        ...t10,
        drag: e10,
        dragDirectionLock: i2,
        dragPropagation: n2,
        dragConstraints: s2,
        dragElastic: r2,
        dragMomentum: o2
      };
    }
  }
  function tD(t10) {
    let e10 = true;
    return () => {
      if (e10) {
        e10 = false;
        return;
      }
      t10();
    };
  }
  function tR(t10, e10, i2) {
    return (true === e10 || e10 === t10) && (null === i2 || i2 === t10);
  }
  class tL extends E {
    constructor(t10) {
      super(t10), this.removeGroupControls = G.l, this.removeListeners = G.l, this.controls = new tM(t10);
    }
    mount() {
      let { dragControls: t10 } = this.node.getProps();
      t10 && (this.removeGroupControls = t10.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G.l;
    }
    update() {
      let { dragControls: t10 } = this.node.getProps(), { dragControls: e10 } = this.node.prevProps || {};
      t10 !== e10 && (this.removeGroupControls(), t10 && (this.removeGroupControls = t10.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  }
  let tB = (t10) => (e10, i2) => {
    t10 && te.Gt.update(() => t10(e10, i2), false, true);
  };
  class tj extends E {
    constructor() {
      super(...arguments), this.removePointerDownListener = G.l;
    }
    onPointerDown(t10) {
      this.session = new tg(t10, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: tc(this.node)
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: t10,
        onPanStart: e10,
        onPan: i2,
        onPanEnd: n2
      } = this.node.getProps();
      return {
        onSessionStart: tB(t10),
        onStart: tB(e10),
        onMove: tB(i2),
        onEnd: (t11, e11) => {
          delete this.session, n2 && te.Gt.postRender(() => n2(t11, e11));
        }
      };
    }
    mount() {
      this.removePointerDownListener = td(
        this.node.current,
        "pointerdown",
        (t10) => this.onPointerDown(t10)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  var tF = i(95155);
  let tO = { hasAnimatedSinceResize: true, hasEverUpdated: false };
  var tI = i(38873), tW = i(79196), tU = i(39551), tN = i(59299);
  let t$ = false;
  class tX extends P.Component {
    componentDidMount() {
      let {
        visualElement: t10,
        layoutGroup: e10,
        switchLayoutGroup: i2,
        layoutId: n2
      } = this.props, { projection: s2 } = t10;
      s2 && (e10.group && e10.group.add(s2), i2 && i2.register && n2 && i2.register(s2), t$ && s2.root.didUpdate(), s2.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), s2.setOptions({
        ...s2.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), tO.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t10) {
      let {
        layoutDependency: e10,
        visualElement: i2,
        drag: n2,
        isPresent: s2
      } = this.props, { projection: r2 } = i2;
      return r2 && (r2.isPresent = s2, t10.layoutDependency !== e10 && r2.setOptions({ ...r2.options, layoutDependency: e10 }), t$ = true, n2 || t10.layoutDependency !== e10 || void 0 === e10 || t10.isPresent !== s2 ? r2.willUpdate() : this.safeToRemove(), t10.isPresent !== s2 && (s2 ? r2.promote() : r2.relegate() || te.Gt.postRender(() => {
        let t11 = r2.getStack();
        t11 && t11.members.length || this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      let { visualElement: t10, layoutAnchor: e10 } = this.props, { projection: i2 } = t10;
      i2 && (i2.options.layoutAnchor = e10, i2.root.didUpdate(), tI.k.postRender(() => {
        !i2.currentAnimation && i2.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      let {
        visualElement: t10,
        layoutGroup: e10,
        switchLayoutGroup: i2
      } = this.props, { projection: n2 } = t10;
      t$ = true, n2 && (n2.scheduleCheckAfterUnmount(), e10 && e10.group && e10.group.remove(n2), i2 && i2.deregister && i2.deregister(n2));
    }
    safeToRemove() {
      let { safeToRemove: t10 } = this.props;
      t10 && t10();
    }
    render() {
      return null;
    }
  }
  function tG(t10) {
    let [e10, i2] = (0, tW.xQ)(), n2 = (0, P.useContext)(tU.L);
    return (0, tF.jsx)(tX, {
      ...t10,
      layoutGroup: n2,
      switchLayoutGroup: (0, P.useContext)(tN.N),
      isPresent: e10,
      safeToRemove: i2
    });
  }
  var tK = i(73852), tz = i(72721), tH = i(14432), tq = i(61151), tY = i(75319), t_ = i(37035), tQ = i(21872), tZ = i(69028), tJ = i(6900), t0 = i(10583), t1 = i(89722), t2 = i(33177);
  let t5 = t2.S.length, t3 = (t10) => "string" == typeof t10 ? parseFloat(t10) : t10, t9 = (t10) => "number" == typeof t10 || H.px.test(t10);
  function t4(t10, e10) {
    return void 0 !== t10[e10] ? t10[e10] : t10.borderRadius;
  }
  let t6 = t8(0, 0.5, t1.yT), t7 = t8(0.5, 0.95, G.l);
  function t8(t10, e10, i2) {
    return (n2) => n2 < t10 ? 0 : n2 > e10 ? 1 : i2((0, tT.q)(t10, e10, n2));
  }
  function et(t10, e10) {
    t10.min = e10.min, t10.max = e10.max;
  }
  function ee(t10, e10) {
    et(t10.x, e10.x), et(t10.y, e10.y);
  }
  function ei(t10, e10) {
    t10.translate = e10.translate, t10.scale = e10.scale, t10.originPoint = e10.originPoint, t10.origin = e10.origin;
  }
  var en = i(2988);
  function es(t10, e10, i2, n2, s2) {
    return t10 -= e10, t10 = (0, en.hq)(t10, 1 / i2, n2), void 0 !== s2 && (t10 = (0, en.hq)(t10, 1 / s2, n2)), t10;
  }
  function er(t10, e10, [i2, n2, s2], r2, o2) {
    !(function(t11, e11 = 0, i3 = 1, n3 = 0.5, s3, r3 = t11, o3 = t11) {
      if (H.KN.test(e11) && (e11 = parseFloat(e11), e11 = (0, q.k)(o3.min, o3.max, e11 / 100) - o3.min), "number" != typeof e11)
        return;
      let a2 = (0, q.k)(r3.min, r3.max, n3);
      t11 === r3 && (a2 -= e11), t11.min = es(t11.min, e11, i3, a2, s3), t11.max = es(t11.max, e11, i3, a2, s3);
    })(t10, e10[i2], e10[n2], e10[s2], e10.scale, r2, o2);
  }
  let eo = ["x", "scaleX", "originX"], ea = ["y", "scaleY", "originY"];
  function el(t10, e10, i2, n2) {
    er(t10.x, e10, eo, i2 ? i2.x : void 0, n2 ? n2.x : void 0), er(t10.y, e10, ea, i2 ? i2.y : void 0, n2 ? n2.y : void 0);
  }
  function eh(t10) {
    return 0 === t10.translate && 1 === t10.scale;
  }
  function eu(t10) {
    return eh(t10.x) && eh(t10.y);
  }
  function ed(t10, e10) {
    return t10.min === e10.min && t10.max === e10.max;
  }
  function ec(t10, e10) {
    return Math.round(t10.min) === Math.round(e10.min) && Math.round(t10.max) === Math.round(e10.max);
  }
  function ep(t10, e10) {
    return ec(t10.x, e10.x) && ec(t10.y, e10.y);
  }
  function em(t10) {
    return Y(t10.x) / Y(t10.y);
  }
  function ef(t10, e10) {
    return t10.translate === e10.translate && t10.scale === e10.scale && t10.originPoint === e10.originPoint;
  }
  var ev = i(78170);
  class ey {
    constructor() {
      this.members = [];
    }
    add(t10) {
      (0, ev.Kq)(this.members, t10);
      for (let e10 = this.members.length - 1; e10 >= 0; e10--) {
        let i2 = this.members[e10];
        if (i2 === t10 || i2 === this.lead || i2 === this.prevLead) continue;
        let n2 = i2.instance;
        n2 && false !== n2.isConnected || i2.snapshot || ((0, ev.Ai)(this.members, i2), i2.unmount());
      }
      t10.scheduleRender();
    }
    remove(t10) {
      if ((0, ev.Ai)(this.members, t10), t10 === this.prevLead && (this.prevLead = void 0), t10 === this.lead) {
        let t11 = this.members[this.members.length - 1];
        t11 && this.promote(t11);
      }
    }
    relegate(t10) {
      for (let e10 = this.members.indexOf(t10) - 1; e10 >= 0; e10--) {
        let t11 = this.members[e10];
        if (false !== t11.isPresent && t11.instance?.isConnected !== false)
          return this.promote(t11), true;
      }
      return false;
    }
    promote(t10, e10) {
      let i2 = this.lead;
      if (t10 !== i2 && (this.prevLead = i2, this.lead = t10, t10.show(), i2)) {
        i2.updateSnapshot(), t10.scheduleRender();
        let { layoutDependency: n2 } = i2.options, { layoutDependency: s2 } = t10.options;
        (void 0 === n2 || n2 !== s2) && (t10.resumeFrom = i2, e10 && (i2.preserveOpacity = true), i2.snapshot && (t10.snapshot = i2.snapshot, t10.snapshot.latestValues = i2.animationValues || i2.latestValues), t10.root?.isUpdating && (t10.isLayoutDirty = true)), false === t10.options.crossfade && i2.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t10) => {
        t10.options.onExitComplete?.(), t10.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach((t10) => t10.instance && t10.scheduleRender(false));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  }
  let eg = (t10, e10) => t10.depth - e10.depth;
  class ex {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(t10) {
      (0, ev.Kq)(this.children, t10), this.isDirty = true;
    }
    remove(t10) {
      (0, ev.Ai)(this.children, t10), this.isDirty = true;
    }
    forEach(t10) {
      this.isDirty && this.children.sort(eg), this.isDirty = false, this.children.forEach(t10);
    }
  }
  var ew = i(33411);
  let eS = ["", "X", "Y", "Z"], eb = 0;
  function eT(t10, e10, i2, n2) {
    let { latestValues: s2 } = e10;
    s2[t10] && (i2[t10] = s2[t10], e10.setStaticValue(t10, 0), n2 && (n2[t10] = 0));
  }
  function eP({
    attachResizeListener: t10,
    defaultParent: e10,
    measureScroll: i2,
    checkIsScrollRoot: n2,
    resetTransform: s2
  }) {
    return class {
      constructor(t11 = {}, i3 = e10?.()) {
        this.id = eb++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, this.nodes.forEach(eE), this.nodes.forEach(eF), this.nodes.forEach(eO), this.nodes.forEach(eV);
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = t11, this.root = i3 ? i3.root || i3 : this, this.path = i3 ? [...i3.path, i3] : [], this.parent = i3, this.depth = i3 ? i3.depth + 1 : 0;
        for (let t12 = 0; t12 < this.path.length; t12++)
          this.path[t12].shouldResetTransform = true;
        this.root === this && (this.nodes = new ex());
      }
      addEventListener(t11, e11) {
        return this.eventHandlers.has(t11) || this.eventHandlers.set(t11, new tK.v()), this.eventHandlers.get(t11).add(e11);
      }
      notifyListeners(t11, ...e11) {
        let i3 = this.eventHandlers.get(t11);
        i3 && i3.notify(...e11);
      }
      hasListeners(t11) {
        return this.eventHandlers.has(t11);
      }
      mount(e11) {
        if (this.instance) return;
        this.isSVG = (0, tZ.x)(e11) && (!(0, tZ.x)(e11) || "svg" !== e11.tagName), this.instance = e11;
        let { layoutId: i3, layout: n3, visualElement: s3 } = this.options;
        if (s3 && !s3.current && s3.mount(e11), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (n3 || i3) && (this.isLayoutDirty = true), t10) {
          let i4, n4 = 0, s4 = () => this.root.updateBlockedByResize = false;
          te.Gt.read(() => {
            n4 = window.innerWidth;
          }), t10(e11, () => {
            let t11 = window.innerWidth;
            if (t11 !== n4) {
              let e12, r2;
              n4 = t11, this.root.updateBlockedByResize = true, i4 && i4(), e12 = t_.k.now(), r2 = ({ timestamp: t12 }) => {
                let i5 = t12 - e12;
                i5 >= 250 && ((0, te.WG)(r2), s4());
              }, te.Gt.setup(r2, true), i4 = () => (0, te.WG)(r2), tO.hasAnimatedSinceResize && (tO.hasAnimatedSinceResize = false, this.nodes.forEach(ej));
            }
          });
        }
        i3 && this.root.registerSharedNode(i3, this), false !== this.options.animate && s3 && (i3 || n3) && this.addEventListener(
          "didUpdate",
          ({
            delta: t11,
            hasLayoutChanged: e12,
            hasRelativeLayoutChanged: i4,
            layout: n4
          }) => {
            if (this.isTreeAnimationBlocked()) {
              this.target = void 0, this.relativeTarget = void 0;
              return;
            }
            let r2 = this.options.transition || s3.getDefaultTransition() || eX, { onLayoutAnimationStart: o2, onLayoutAnimationComplete: a2 } = s3.getProps(), l2 = !this.targetLayout || !ep(this.targetLayout, n4), h2 = !e12 && i4;
            if (this.options.layoutRoot || this.resumeFrom || h2 || e12 && (l2 || !this.currentAnimation)) {
              this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
              let e13 = {
                ...(0, tY.r)(r2, "layout"),
                onPlay: o2,
                onComplete: a2
              };
              (s3.shouldReduceMotion || this.options.layoutRoot) && (e13.delay = 0, e13.type = false), this.startAnimation(e13), this.setAnimationOrigin(t11, h2, e13.path);
            } else
              e12 || ej(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
            this.targetLayout = n4;
          }
        );
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        let t11 = this.getStack();
        t11 && t11.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, te.WG)(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        !this.isUpdateBlocked() && (this.isUpdating = true, this.nodes && this.nodes.forEach(eI), this.animationId++);
      }
      getTransformTemplate() {
        let { visualElement: t11 } = this.options;
        return t11 && t11.getProps().transformTemplate;
      }
      willUpdate(t11 = true) {
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && (function t12(e12) {
          if (e12.hasCheckedOptimisedAppear = true, e12.root === e12) return;
          let { visualElement: i4 } = e12.options;
          if (!i4) return;
          let n4 = (0, tq.P)(i4);
          if (window.MotionHasOptimisedAnimation(n4, "transform")) {
            let { layout: t13, layoutId: i5 } = e12.options;
            window.MotionCancelOptimisedAnimation(
              n4,
              "transform",
              te.Gt,
              !(t13 || i5)
            );
          }
          let { parent: s3 } = e12;
          s3 && !s3.hasCheckedOptimisedAppear && t12(s3);
        })(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty)
          return;
        this.isLayoutDirty = true;
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let e12 = this.path[t12];
          e12.shouldResetTransform = true, ("string" == typeof e12.latestValues.x || "string" == typeof e12.latestValues.y) && (e12.isLayoutDirty = true), e12.updateScroll("snapshot"), e12.options.layoutRoot && e12.willUpdate(false);
        }
        let { layoutId: e11, layout: i3 } = this.options;
        if (void 0 === e11 && !i3) return;
        let n3 = this.getTransformTemplate();
        this.prevTransformTemplateValue = n3 ? n3(this.latestValues, "") : void 0, this.updateSnapshot(), t11 && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          let t12 = this.updateBlockedByResize;
          this.unblockUpdate(), this.updateBlockedByResize = false, this.clearAllSnapshots(), t12 && this.nodes.forEach(eD), this.nodes.forEach(eM);
          return;
        }
        if (this.animationId <= this.animationCommitId)
          return void this.nodes.forEach(eR);
        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(eL), this.nodes.forEach(eB), this.nodes.forEach(eA), this.nodes.forEach(ek)) : this.nodes.forEach(eR), this.clearAllSnapshots();
        let t11 = t_.k.now();
        te.uv.delta = (0, tP.q)(0, 1e3 / 60, t11 - te.uv.timestamp), te.uv.timestamp = t11, te.uv.isProcessing = true, te.PP.update.process(te.uv), te.PP.preRender.process(te.uv), te.PP.render.process(te.uv), te.uv.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, tI.k.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(eC), this.sharedNodes.forEach(eW);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, te.Gt.preRender(this.updateProjection, false, true));
      }
      scheduleCheckAfterUnmount() {
        te.Gt.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || Y(this.snapshot.measuredBox.x) || Y(this.snapshot.measuredBox.y) || (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let t12 = 0; t12 < this.path.length; t12++)
            this.path[t12].updateScroll();
        let t11 = this.layout;
        this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = (0, r.ge)()), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        let { visualElement: e11 } = this.options;
        e11 && e11.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          t11 ? t11.layoutBox : void 0
        );
      }
      updateScroll(t11 = "measure") {
        let e11 = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t11 && (e11 = false), e11 && this.instance) {
          let e12 = n2(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: t11,
            isRoot: e12,
            offset: i2(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : e12
          };
        }
      }
      resetTransform() {
        if (!s2) return;
        let t11 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, e11 = this.projectionDelta && !eu(this.projectionDelta), i3 = this.getTransformTemplate(), n3 = i3 ? i3(this.latestValues, "") : void 0, r2 = n3 !== this.prevTransformTemplateValue;
        t11 && this.instance && (e11 || (0, ew.HD)(this.latestValues) || r2) && (s2(this.instance, n3), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(t11 = true) {
        var e11;
        let i3 = this.measurePageBox(), n3 = this.removeElementScroll(i3);
        return t11 && (n3 = this.removeTransform(n3)), ez((e11 = n3).x), ez(e11.y), {
          animationId: this.root.animationId,
          measuredBox: i3,
          layoutBox: n3,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        let { visualElement: t11 } = this.options;
        if (!t11) return (0, r.ge)();
        let e11 = t11.measureViewportBox();
        if (!(this.scroll?.wasRoot || this.path.some(eq))) {
          let { scroll: t12 } = this.root;
          t12 && ((0, en.Ql)(e11.x, t12.offset.x), (0, en.Ql)(e11.y, t12.offset.y));
        }
        return e11;
      }
      removeElementScroll(t11) {
        let e11 = (0, r.ge)();
        if (ee(e11, t11), this.scroll?.wasRoot) return e11;
        for (let i3 = 0; i3 < this.path.length; i3++) {
          let n3 = this.path[i3], { scroll: s3, options: r2 } = n3;
          n3 !== this.root && s3 && r2.layoutScroll && (s3.wasRoot && ee(e11, t11), (0, en.Ql)(e11.x, s3.offset.x), (0, en.Ql)(e11.y, s3.offset.y));
        }
        return e11;
      }
      applyTransform(t11, e11 = false, i3) {
        let n3 = i3 || (0, r.ge)();
        ee(n3, t11);
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let i4 = this.path[t12];
          !e11 && i4.options.layoutScroll && i4.scroll && i4 !== i4.root && ((0, en.Ql)(n3.x, -i4.scroll.offset.x), (0, en.Ql)(n3.y, -i4.scroll.offset.y)), (0, ew.HD)(i4.latestValues) && (0, en.Ww)(n3, i4.latestValues, i4.layout?.layoutBox);
        }
        return (0, ew.HD)(this.latestValues) && (0, en.Ww)(n3, this.latestValues, this.layout?.layoutBox), n3;
      }
      removeTransform(t11) {
        let e11 = (0, r.ge)();
        ee(e11, t11);
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let i3, n3 = this.path[t12];
          (0, ew.HD)(n3.latestValues) && (n3.instance && ((0, ew.vk)(n3.latestValues) && n3.updateSnapshot(), ee(i3 = (0, r.ge)(), n3.measurePageBox())), el(e11, n3.latestValues, n3.snapshot?.layoutBox, i3));
        }
        return (0, ew.HD)(this.latestValues) && el(e11, this.latestValues), e11;
      }
      setTargetDelta(t11) {
        this.targetDelta = t11, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(t11) {
        this.options = {
          ...this.options,
          ...t11,
          crossfade: void 0 === t11.crossfade || t11.crossfade
        };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== te.uv.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(t11 = false) {
        let e11 = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = e11.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e11.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e11.isSharedProjectionDirty);
        let i3 = !!this.resumingFrom || this !== e11;
        if (!(t11 || i3 && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
          return;
        let { layout: n3, layoutId: s3 } = this.options;
        if (!this.layout || !(n3 || s3)) return;
        this.resolvedRelativeTargetAt = te.uv.timestamp;
        let o2 = this.getClosestProjectingParent();
        if (o2 && this.linkedParentVersion !== o2.layoutVersion && !o2.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (false !== this.options.layoutAnchor && o2 && o2.layout ? this.createRelativeTarget(
          o2,
          this.layout.layoutBox,
          o2.layout.layoutBox
        ) : this.removeRelativeTarget()), this.relativeTarget || this.targetDelta) {
          if (this.target || (this.target = (0, r.ge)(), this.targetWithTransforms = (0, r.ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
            var a2, l2, h2, u2;
            this.forceRelativeParentToResolveTarget(), a2 = this.target, l2 = this.relativeTarget, h2 = this.relativeParent.target, u2 = this.options.layoutAnchor || void 0, Z(a2.x, l2.x, h2.x, u2?.x), Z(a2.y, l2.y, h2.y, u2?.y);
          } else
            this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, false, this.target) : ee(this.target, this.layout.layoutBox), (0, en.o4)(this.target, this.targetDelta)) : ee(this.target, this.layout.layoutBox);
          this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, false !== this.options.layoutAnchor && o2 && !!o2.resumingFrom == !!this.resumingFrom && !o2.options.layoutScroll && o2.target && 1 !== this.animationProgress ? this.createRelativeTarget(o2, this.target, o2.target) : this.relativeParent = this.relativeTarget = void 0);
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || (0, ew.vk)(this.parent.latestValues) || (0, ew.vF)(this.parent.latestValues)))
          if (this.parent.isProjecting()) return this.parent;
          else return this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(t11, e11, i3) {
        this.relativeParent = t11, this.linkedParentVersion = t11.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, r.ge)(), this.relativeTargetOrigin = (0, r.ge)(), tt(
          this.relativeTargetOrigin,
          e11,
          i3,
          this.options.layoutAnchor || void 0
        ), ee(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        let t11 = this.getLead(), e11 = !!this.resumingFrom || this !== t11, i3 = true;
        if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i3 = false), e11 && (this.isSharedProjectionDirty || this.isTransformDirty) && (i3 = false), this.resolvedRelativeTargetAt === te.uv.timestamp && (i3 = false), i3)
          return;
        let { layout: n3, layoutId: s3 } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n3 || s3))
          return;
        ee(this.layoutCorrected, this.layout.layoutBox);
        let o2 = this.treeScale.x, a2 = this.treeScale.y;
        (0, en.OU)(this.layoutCorrected, this.treeScale, this.path, e11), t11.layout && !t11.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t11.target = t11.layout.layoutBox, t11.targetWithTransforms = (0, r.ge)());
        let { target: l2 } = t11;
        if (!l2) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        this.projectionDelta && this.prevProjectionDelta ? (ei(this.prevProjectionDelta.x, this.projectionDelta.x), ei(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), Q(this.projectionDelta, this.layoutCorrected, l2, this.latestValues), this.treeScale.x === o2 && this.treeScale.y === a2 && ef(this.projectionDelta.x, this.prevProjectionDelta.x) && ef(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", l2));
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(t11 = true) {
        if (this.options.visualElement?.scheduleRender(), t11) {
          let t12 = this.getStack();
          t12 && t12.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = (0, r.xU)(), this.projectionDelta = (0, r.xU)(), this.projectionDeltaWithTransform = (0, r.xU)();
      }
      setAnimationOrigin(t11, e11 = false, i3) {
        let n3, s3 = this.snapshot, o2 = s3 ? s3.latestValues : {}, a2 = { ...this.latestValues }, l2 = (0, r.xU)();
        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e11;
        let h2 = (0, r.ge)(), u2 = (s3 ? s3.source : void 0) !== (this.layout ? this.layout.source : void 0), d2 = this.getStack(), c2 = !d2 || d2.members.length <= 1, p2 = !!(u2 && !c2 && true === this.options.crossfade && !this.path.some(e$));
        this.animationProgress = 0;
        let m2 = i3?.interpolateProjection(t11);
        this.mixTargetDelta = (e12) => {
          let i4 = e12 / 1e3, s4 = m2?.(i4);
          if (s4 ? (l2.x.translate = s4.x, l2.x.scale = (0, q.k)(t11.x.scale, 1, i4), l2.x.origin = t11.x.origin, l2.x.originPoint = t11.x.originPoint, l2.y.translate = s4.y, l2.y.scale = (0, q.k)(t11.y.scale, 1, i4), l2.y.origin = t11.y.origin, l2.y.originPoint = t11.y.originPoint) : (eU(l2.x, t11.x, i4), eU(l2.y, t11.y, i4)), this.setTargetDelta(l2), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var d3, f2, v2, y2, g2, x2;
            tt(
              h2,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ), v2 = this.relativeTarget, y2 = this.relativeTargetOrigin, g2 = h2, x2 = i4, eN(v2.x, y2.x, g2.x, x2), eN(v2.y, y2.y, g2.y, x2), n3 && (d3 = this.relativeTarget, f2 = n3, ed(d3.x, f2.x) && ed(d3.y, f2.y)) && (this.isProjectionDirty = false), n3 || (n3 = (0, r.ge)()), ee(n3, this.relativeTarget);
          }
          u2 && (this.animationValues = a2, (function(t12, e13, i5, n4, s5, r2) {
            s5 ? (t12.opacity = (0, q.k)(0, i5.opacity ?? 1, t6(n4)), t12.opacityExit = (0, q.k)(e13.opacity ?? 1, 0, t7(n4))) : r2 && (t12.opacity = (0, q.k)(e13.opacity ?? 1, i5.opacity ?? 1, n4));
            for (let s6 = 0; s6 < t5; s6++) {
              let r3 = t2.S[s6], o3 = t4(e13, r3), a3 = t4(i5, r3);
              (void 0 !== o3 || void 0 !== a3) && (o3 || (o3 = 0), a3 || (a3 = 0), 0 === o3 || 0 === a3 || t9(o3) === t9(a3) ? (t12[r3] = Math.max((0, q.k)(t3(o3), t3(a3), n4), 0), (H.KN.test(a3) || H.KN.test(o3)) && (t12[r3] += "%")) : t12[r3] = a3);
            }
            (e13.rotate || i5.rotate) && (t12.rotate = (0, q.k)(e13.rotate || 0, i5.rotate || 0, n4));
          })(a2, o2, this.latestValues, i4, p2, c2)), s4 && void 0 !== s4.rotate && (this.animationValues || (this.animationValues = a2), this.animationValues.pathRotation = s4.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i4;
        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
      }
      startAnimation(t11) {
        this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, te.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = te.Gt.update(() => {
          tO.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = (0, tJ.OQ)(0)), this.motionValue.jump(0, false), this.currentAnimation = (0, tz.z)(this.motionValue, [0, 1e3], {
            ...t11,
            velocity: 0,
            isSync: true,
            onUpdate: (e11) => {
              this.mixTargetDelta(e11), t11.onUpdate && t11.onUpdate(e11);
            },
            onComplete: () => {
              t11.onComplete && t11.onComplete(), this.completeAnimation();
            }
          }), (0, tH.m)(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        let t11 = this.getStack();
        t11 && t11.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        let t11 = this.getLead(), { targetWithTransforms: e11, layout: i3, latestValues: n3 } = t11, { target: s3 } = t11;
        if (e11 && s3 && i3) {
          if (this !== t11 && this.layout && i3 && eH(this.options.animationType, this.layout.layoutBox, i3.layoutBox)) {
            s3 = this.target || (0, r.ge)();
            let e12 = Y(this.layout.layoutBox.x);
            s3.x.min = t11.target.x.min, s3.x.max = s3.x.min + e12;
            let i4 = Y(this.layout.layoutBox.y);
            s3.y.min = t11.target.y.min, s3.y.max = s3.y.min + i4;
          }
          ee(e11, s3), (0, en.Ww)(e11, n3), Q(this.projectionDeltaWithTransform, this.layoutCorrected, e11, n3);
        }
      }
      registerSharedNode(t11, e11) {
        this.sharedNodes.has(t11) || this.sharedNodes.set(t11, new ey()), this.sharedNodes.get(t11).add(e11);
        let i3 = e11.options.initialPromotionConfig;
        e11.promote({
          transition: i3 ? i3.transition : void 0,
          preserveFollowOpacity: i3 && i3.shouldPreserveFollowOpacity ? i3.shouldPreserveFollowOpacity(e11) : void 0
        });
      }
      isLead() {
        let t11 = this.getStack();
        return !t11 || t11.lead === this;
      }
      getLead() {
        let { layoutId: t11 } = this.options;
        return t11 && this.getStack()?.lead || this;
      }
      getPrevLead() {
        let { layoutId: t11 } = this.options;
        return t11 ? this.getStack()?.prevLead : void 0;
      }
      getStack() {
        let { layoutId: t11 } = this.options;
        if (t11) return this.root.sharedNodes.get(t11);
      }
      promote({ needsReset: t11, transition: e11, preserveFollowOpacity: i3 } = {}) {
        let n3 = this.getStack();
        n3 && n3.promote(this, i3), t11 && (this.projectionDelta = void 0, this.needsReset = true), e11 && this.setOptions({ transition: e11 });
      }
      relegate() {
        let t11 = this.getStack();
        return !!t11 && t11.relegate(this);
      }
      resetSkewAndRotation() {
        let { visualElement: t11 } = this.options;
        if (!t11) return;
        let e11 = false, { latestValues: i3 } = t11;
        if ((i3.z || i3.rotate || i3.rotateX || i3.rotateY || i3.rotateZ || i3.skewX || i3.skewY) && (e11 = true), !e11)
          return;
        let n3 = {};
        i3.z && eT("z", t11, n3, this.animationValues);
        for (let e12 = 0; e12 < eS.length; e12++)
          eT(`rotate${eS[e12]}`, t11, n3, this.animationValues), eT(`skew${eS[e12]}`, t11, n3, this.animationValues);
        for (let e12 in t11.render(), n3)
          t11.setStaticValue(e12, n3[e12]), this.animationValues && (this.animationValues[e12] = n3[e12]);
        t11.scheduleRender();
      }
      applyProjectionStyles(t11, e11) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) {
          t11.visibility = "hidden";
          return;
        }
        let i3 = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false, t11.visibility = "", t11.opacity = "", t11.pointerEvents = (0, t0.u)(e11?.pointerEvents) || "", t11.transform = i3 ? i3(this.latestValues, "") : "none";
          return;
        }
        let n3 = this.getLead();
        if (!this.projectionDelta || !this.layout || !n3.target) {
          this.options.layoutId && (t11.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t11.pointerEvents = (0, t0.u)(e11?.pointerEvents) || ""), this.hasProjected && !(0, ew.HD)(this.latestValues) && (t11.transform = i3 ? i3({}, "") : "none", this.hasProjected = false);
          return;
        }
        t11.visibility = "";
        let s3 = n3.animationValues || n3.latestValues;
        this.applyTransformsToTarget();
        let r2 = (function(t12, e12, i4) {
          let n4 = "", s4 = t12.x.translate / e12.x, r3 = t12.y.translate / e12.y, o3 = i4?.z || 0;
          if ((s4 || r3 || o3) && (n4 = `translate3d(${s4}px, ${r3}px, ${o3}px) `), (1 !== e12.x || 1 !== e12.y) && (n4 += `scale(${1 / e12.x}, ${1 / e12.y}) `), i4) {
            let {
              transformPerspective: t13,
              rotate: e13,
              pathRotation: s5,
              rotateX: r4,
              rotateY: o4,
              skewX: a4,
              skewY: l3
            } = i4;
            t13 && (n4 = `perspective(${t13}px) ${n4}`), e13 && (n4 += `rotate(${e13}deg) `), s5 && (n4 += `rotate(${s5}deg) `), r4 && (n4 += `rotateX(${r4}deg) `), o4 && (n4 += `rotateY(${o4}deg) `), a4 && (n4 += `skewX(${a4}deg) `), l3 && (n4 += `skewY(${l3}deg) `);
          }
          let a3 = t12.x.scale * e12.x, l2 = t12.y.scale * e12.y;
          return (1 !== a3 || 1 !== l2) && (n4 += `scale(${a3}, ${l2})`), n4 || "none";
        })(this.projectionDeltaWithTransform, this.treeScale, s3);
        i3 && (r2 = i3(s3, r2)), t11.transform = r2;
        let { x: o2, y: a2 } = this.projectionDelta;
        for (let e12 in t11.transformOrigin = `${100 * o2.origin}% ${100 * a2.origin}% 0`, n3.animationValues ? t11.opacity = n3 === this ? s3.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : s3.opacityExit : t11.opacity = n3 === this ? void 0 !== s3.opacity ? s3.opacity : "" : void 0 !== s3.opacityExit ? s3.opacityExit : 0, tQ.H) {
          if (void 0 === s3[e12]) continue;
          let { correct: i4, applyTo: o3, isCSSVariable: a3 } = tQ.H[e12], l2 = "none" === r2 ? s3[e12] : i4(s3[e12], n3);
          if (o3) {
            let e13 = o3.length;
            for (let i5 = 0; i5 < e13; i5++) t11[o3[i5]] = l2;
          } else
            a3 ? this.options.visualElement.renderState.vars[e12] = l2 : t11[e12] = l2;
        }
        this.options.layoutId && (t11.pointerEvents = n3 === this ? (0, t0.u)(e11?.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((t11) => t11.currentAnimation?.stop()), this.root.nodes.forEach(eM), this.root.sharedNodes.clear();
      }
    };
  }
  function eA(t10) {
    t10.updateLayout();
  }
  function ek(t10) {
    let e10 = t10.resumeFrom?.snapshot || t10.snapshot;
    if (t10.isLead() && t10.layout && e10 && t10.hasListeners("didUpdate")) {
      let { layoutBox: i2, measuredBox: n2 } = t10.layout, { animationType: s2 } = t10.options, o2 = e10.source !== t10.layout.source;
      if ("size" === s2)
        z((t11) => {
          let n3 = o2 ? e10.measuredBox[t11] : e10.layoutBox[t11], s3 = Y(n3);
          n3.min = i2[t11].min, n3.max = n3.min + s3;
        });
      else if ("x" === s2 || "y" === s2) {
        let t11 = "x" === s2 ? "y" : "x";
        et(o2 ? e10.measuredBox[t11] : e10.layoutBox[t11], i2[t11]);
      } else
        eH(s2, e10.layoutBox, i2) && z((n3) => {
          let s3 = o2 ? e10.measuredBox[n3] : e10.layoutBox[n3], r2 = Y(i2[n3]);
          s3.max = s3.min + r2, t10.relativeTarget && !t10.currentAnimation && (t10.isProjectionDirty = true, t10.relativeTarget[n3].max = t10.relativeTarget[n3].min + r2);
        });
      let a2 = (0, r.xU)();
      Q(a2, i2, e10.layoutBox);
      let l2 = (0, r.xU)();
      o2 ? Q(l2, t10.applyTransform(n2, true), e10.measuredBox) : Q(l2, i2, e10.layoutBox);
      let h2 = !eu(a2), u2 = false;
      if (!t10.resumeFrom) {
        let n3 = t10.getClosestProjectingParent();
        if (n3 && !n3.resumeFrom) {
          let { snapshot: s3, layout: o3 } = n3;
          if (s3 && o3) {
            let a3 = t10.options.layoutAnchor || void 0, l3 = (0, r.ge)();
            tt(l3, e10.layoutBox, s3.layoutBox, a3);
            let h3 = (0, r.ge)();
            tt(h3, i2, o3.layoutBox, a3), ep(l3, h3) || (u2 = true), n3.options.layoutRoot && (t10.relativeTarget = h3, t10.relativeTargetOrigin = l3, t10.relativeParent = n3);
          }
        }
      }
      t10.notifyListeners("didUpdate", {
        layout: i2,
        snapshot: e10,
        delta: l2,
        layoutDelta: a2,
        hasLayoutChanged: h2,
        hasRelativeLayoutChanged: u2
      });
    } else if (t10.isLead()) {
      let { onExitComplete: e11 } = t10.options;
      e11 && e11();
    }
    t10.options.transition = void 0;
  }
  function eE(t10) {
    t10.parent && (t10.isProjecting() || (t10.isProjectionDirty = t10.parent.isProjectionDirty), t10.isSharedProjectionDirty || (t10.isSharedProjectionDirty = !!(t10.isProjectionDirty || t10.parent.isProjectionDirty || t10.parent.isSharedProjectionDirty)), t10.isTransformDirty || (t10.isTransformDirty = t10.parent.isTransformDirty));
  }
  function eV(t10) {
    t10.isProjectionDirty = t10.isSharedProjectionDirty = t10.isTransformDirty = false;
  }
  function eC(t10) {
    t10.clearSnapshot();
  }
  function eM(t10) {
    t10.clearMeasurements();
  }
  function eD(t10) {
    t10.isLayoutDirty = true, t10.updateLayout();
  }
  function eR(t10) {
    t10.isLayoutDirty = false;
  }
  function eL(t10) {
    t10.isAnimationBlocked && t10.layout && !t10.isLayoutDirty && (t10.snapshot = t10.layout, t10.isLayoutDirty = true);
  }
  function eB(t10) {
    let { visualElement: e10 } = t10.options;
    e10 && e10.getProps().onBeforeLayoutMeasure && e10.notify("BeforeLayoutMeasure"), t10.resetTransform();
  }
  function ej(t10) {
    t10.finishAnimation(), t10.targetDelta = t10.relativeTarget = t10.target = void 0, t10.isProjectionDirty = true;
  }
  function eF(t10) {
    t10.resolveTargetDelta();
  }
  function eO(t10) {
    t10.calcProjection();
  }
  function eI(t10) {
    t10.resetSkewAndRotation();
  }
  function eW(t10) {
    t10.removeLeadSnapshot();
  }
  function eU(t10, e10, i2) {
    t10.translate = (0, q.k)(e10.translate, 0, i2), t10.scale = (0, q.k)(e10.scale, 1, i2), t10.origin = e10.origin, t10.originPoint = e10.originPoint;
  }
  function eN(t10, e10, i2, n2) {
    t10.min = (0, q.k)(e10.min, i2.min, n2), t10.max = (0, q.k)(e10.max, i2.max, n2);
  }
  function e$(t10) {
    return t10.animationValues && void 0 !== t10.animationValues.opacityExit;
  }
  let eX = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, eG = (t10) => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t10), eK = eG("applewebkit/") && !eG("chrome/") ? Math.round : G.l;
  function ez(t10) {
    t10.min = eK(t10.min), t10.max = eK(t10.max);
  }
  function eH(t10, e10, i2) {
    return "position" === t10 || "preserve-aspect" === t10 && !(0.2 >= Math.abs(em(e10) - em(i2)));
  }
  function eq(t10) {
    return t10 !== t10.root && t10.scroll?.wasRoot;
  }
  let eY = eP({
    attachResizeListener: (t10, e10) => ta(t10, "resize", e10),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => true
  }), e_ = { current: void 0 }, eQ = eP({
    measureScroll: (t10) => ({ x: t10.scrollLeft, y: t10.scrollTop }),
    defaultParent: () => {
      if (!e_.current) {
        let t10 = new eY({});
        t10.mount(window), t10.setOptions({ layoutScroll: true }), e_.current = t10;
      }
      return e_.current;
    },
    resetTransform: (t10, e10) => {
      t10.style.transform = void 0 !== e10 ? e10 : "none";
    },
    checkIsScrollRoot: (t10) => "fixed" === window.getComputedStyle(t10).position
  });
  var eZ = i(58392);
  function eJ(t10, e10) {
    let i2 = (0, eZ.K)(t10), n2 = new AbortController();
    return [i2, { passive: true, ...e10, signal: n2.signal }, () => n2.abort()];
  }
  function e0(t10, e10, i2) {
    let { props: n2 } = t10;
    t10.animationState && n2.whileHover && t10.animationState.setActive("whileHover", "Start" === i2);
    let s2 = n2["onHover" + i2];
    s2 && te.Gt.postRender(() => s2(e10, tu(e10)));
  }
  class e1 extends E {
    mount() {
      let { current: t10 } = this.node;
      t10 && (this.unmount = (function(t11, e10, i2 = {}) {
        let [n2, s2, r2] = eJ(t11, i2);
        return n2.forEach((t12) => {
          let i3, n3 = false, r3 = false, o2 = (e11) => {
            i3 && (i3(e11), i3 = void 0), t12.removeEventListener("pointerleave", l2);
          }, a2 = (t13) => {
            n3 = false, window.removeEventListener("pointerup", a2), window.removeEventListener("pointercancel", a2), r3 && (r3 = false, o2(t13));
          }, l2 = (t13) => {
            if ("touch" !== t13.pointerType) {
              if (n3) {
                r3 = true;
                return;
              }
              o2(t13);
            }
          };
          t12.addEventListener(
            "pointerenter",
            (n4) => {
              if ("touch" === n4.pointerType || K.x || K.y) return;
              r3 = false;
              let o3 = e10(t12, n4);
              "function" == typeof o3 && (i3 = o3, t12.addEventListener("pointerleave", l2, s2));
            },
            s2
          ), t12.addEventListener(
            "pointerdown",
            () => {
              n3 = true, window.addEventListener("pointerup", a2, s2), window.addEventListener("pointercancel", a2, s2);
            },
            s2
          );
        }), r2;
      })(
        t10,
        (t11, e10) => (e0(this.node, e10, "Start"), (t12) => e0(this.node, t12, "End"))
      ));
    }
    unmount() {
    }
  }
  class e2 extends E {
    constructor() {
      super(...arguments), this.isActive = false;
    }
    onFocus() {
      let t10 = false;
      try {
        t10 = this.node.current.matches(":focus-visible");
      } catch (e10) {
        t10 = true;
      }
      t10 && this.node.animationState && (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
    }
    onBlur() {
      this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
    }
    mount() {
      this.unmount = (0, tm.F)(
        ta(this.node.current, "focus", () => this.onFocus()),
        ta(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {
    }
  }
  var e5 = i(78757);
  let e3 = (t10, e10) => !!e10 && (t10 === e10 || e3(t10, e10.parentElement)), e9 = /* @__PURE__ */ new WeakSet();
  function e4(t10) {
    return (e10) => {
      "Enter" === e10.key && t10(e10);
    };
  }
  function e6(t10, e10) {
    t10.dispatchEvent(
      new PointerEvent("pointer" + e10, { isPrimary: true, bubbles: true })
    );
  }
  function e7(t10) {
    return th(t10) && !(K.x || K.y);
  }
  let e8 = /* @__PURE__ */ new WeakSet();
  function it(t10, e10, i2) {
    let { props: n2 } = t10;
    if (t10.current instanceof HTMLButtonElement && t10.current.disabled) return;
    t10.animationState && n2.whileTap && t10.animationState.setActive("whileTap", "Start" === i2);
    let s2 = n2["onTap" + ("End" === i2 ? "" : i2)];
    s2 && te.Gt.postRender(() => s2(e10, tu(e10)));
  }
  class ie extends E {
    mount() {
      let { current: t10 } = this.node;
      if (!t10) return;
      let { globalTapTarget: e10, propagate: i2 } = this.node.props;
      this.unmount = (function(t11, e11, i3 = {}) {
        let [n2, s2, r2] = eJ(t11, i3), o2 = (t12) => {
          let n3 = t12.currentTarget;
          if (!e7(t12) || e8.has(t12)) return;
          e9.add(n3), i3.stopPropagation && e8.add(t12);
          let r3 = e11(n3, t12), o3 = { ...s2, capture: true }, a2 = (t13, e12) => {
            window.removeEventListener("pointerup", l2, o3), window.removeEventListener("pointercancel", h2, o3), e9.has(n3) && e9.delete(n3), e7(t13) && "function" == typeof r3 && r3(t13, { success: e12 });
          }, l2 = (t13) => {
            a2(
              t13,
              n3 === window || n3 === document || i3.useGlobalTarget || e3(n3, t13.target)
            );
          }, h2 = (t13) => {
            a2(t13, false);
          };
          window.addEventListener("pointerup", l2, o3), window.addEventListener("pointercancel", h2, o3);
        };
        return n2.forEach((t12) => {
          ((i3.useGlobalTarget ? window : t12).addEventListener(
            "pointerdown",
            o2,
            s2
          ), (0, e5.s)(t12)) && (t12.addEventListener(
            "focus",
            (t13) => ((t14, e12) => {
              let i4 = t14.currentTarget;
              if (!i4) return;
              let n3 = e4(() => {
                if (e9.has(i4)) return;
                e6(i4, "down");
                let t15 = e4(() => {
                  e6(i4, "up");
                });
                i4.addEventListener("keyup", t15, e12), i4.addEventListener("blur", () => e6(i4, "cancel"), e12);
              });
              i4.addEventListener("keydown", n3, e12), i4.addEventListener(
                "blur",
                () => i4.removeEventListener("keydown", n3),
                e12
              );
            })(t13, s2)
          ), tr.has(t12.tagName) || true === t12.isContentEditable || t12.hasAttribute("tabindex") || (t12.tabIndex = 0));
        }), r2;
      })(
        t10,
        (t11, e11) => (it(this.node, e11, "Start"), (t12, { success: e12 }) => it(this.node, t12, e12 ? "End" : "Cancel")),
        { useGlobalTarget: e10, stopPropagation: i2?.tap === false }
      );
    }
    unmount() {
    }
  }
  let ii = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), ir = (t10) => {
    let e10 = ii.get(t10.target);
    e10 && e10(t10);
  }, io = (t10) => {
    t10.forEach(ir);
  }, ia = { some: 0, all: 1 };
  class il extends E {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      var t10;
      let e10;
      this.stopObserver?.();
      let { viewport: i2 = {} } = this.node.getProps(), { root: n2, margin: s2, amount: r2 = "some", once: o2 } = i2, a2 = {
        root: n2 ? n2.current : void 0,
        rootMargin: s2,
        threshold: "number" == typeof r2 ? r2 : ia[r2]
      }, l2 = (t11) => {
        let { isIntersecting: e11 } = t11;
        if (this.isInView === e11 || (this.isInView = e11, o2 && !e11 && this.hasEnteredView))
          return;
        e11 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", e11);
        let { onViewportEnter: i3, onViewportLeave: n3 } = this.node.getProps(), s3 = e11 ? i3 : n3;
        s3 && s3(t11);
      };
      this.stopObserver = (t10 = this.node.current, e10 = (function({ root: t11, ...e11 }) {
        let i3 = t11 || document;
        is.has(i3) || is.set(i3, {});
        let n3 = is.get(i3), s3 = JSON.stringify(e11);
        return n3[s3] || (n3[s3] = new IntersectionObserver(io, { root: t11, ...e11 })), n3[s3];
      })(a2), ii.set(t10, l2), e10.observe(t10), () => {
        ii.delete(t10), e10.unobserve(t10);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if ("u" < typeof IntersectionObserver) return;
      let { props: t10, prevProps: e10 } = this.node;
      ["amount", "margin", "root"].some(
        (function({ viewport: t11 = {} }, { viewport: e11 = {} } = {}) {
          return (i2) => t11[i2] !== e11[i2];
        })(t10, e10)
      ) && this.startObserver();
    }
    unmount() {
      this.stopObserver?.(), this.hasEnteredView = false, this.isInView = false;
    }
  }
  let ih = (0, k.H)(
    {
      animation: { Feature: N },
      exit: { Feature: X },
      inView: { Feature: il },
      tap: { Feature: ie },
      focus: { Feature: e2 },
      hover: { Feature: e1 },
      pan: { Feature: tj },
      drag: { Feature: tL, ProjectionNode: eQ, MeasureLayout: tG },
      layout: { ProjectionNode: eQ, MeasureLayout: tG }
    },
    (t10, e10) => e10.isSVG ?? (0, A.Q)(t10) ? new v(e10) : new T(e10, { allowProjection: t10 !== P.Fragment })
  );
}

__m(__module,__exports,__require);
}