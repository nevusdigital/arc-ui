function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { BX: () => V, vK: () => E, lr: () => k });
  var n = i(38621), s = i(74212), r = i(58974), o = i(73852), a = i(4132), l = i(3486), h = i(58584), u = i(38873), d = i(37035), c = i(4287), p = i(6900), m = i(83399), f = i(21023), v = i(51469), y = i(51654), g = i(44616), x = i(25952), w = i(10887), S = i(76792), b = i(25620), T = i(27933);
  let P = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], A = {};
  function k(t2) {
    A = t2;
  }
  function E() {
    return A;
  }
  class V {
    scrapeMotionValuesFromProps(t2, e2, i2) {
      return {};
    }
    constructor({
      parent: t2,
      props: e2,
      presenceContext: i2,
      reducedMotionConfig: n2,
      skipAnimations: s2,
      blockInitialAnimation: r2,
      visualState: o2
    }, l2 = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = a.h, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(
          this.current,
          this.renderState,
          this.props.style,
          this.projection
        ));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let t3 = d.k.now();
        this.renderScheduledAt < t3 && (this.renderScheduledAt = t3, T.Gt.render(this.render, false, true));
      };
      const { latestValues: h2, renderState: u2 } = o2;
      this.latestValues = h2, this.baseTarget = { ...h2 }, this.initialValues = e2.initial ? { ...h2 } : {}, this.renderState = u2, this.parent = t2, this.props = e2, this.presenceContext = i2, this.depth = t2 ? t2.depth + 1 : 0, this.reducedMotionConfig = n2, this.skipAnimationsConfig = s2, this.options = l2, this.blockInitialAnimation = !!r2, this.isControllingVariants = (0, g.e)(e2), this.isVariantNode = (0, g.O)(e2), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t2 && t2.current);
      const { willChange: c2, ...p2 } = this.scrapeMotionValuesFromProps(
        e2,
        {},
        this
      );
      for (const t3 in p2) {
        const e3 = p2[t3];
        void 0 !== h2[t3] && (0, v.S)(e3) && e3.set(h2[t3]);
      }
    }
    mount(t2) {
      if (this.hasBeenMounted)
        for (let t3 in this.initialValues)
          this.values.get(t3)?.jump(this.initialValues[t3]), this.latestValues[t3] = this.initialValues[t3];
      this.current = t2, y.C.set(t2, this), this.projection && !this.projection.instance && this.projection.mount(t2), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t3, e2) => this.bindToMotionValue(e2, t3)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = false : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = true : (b.r.current || (0, w.Uu)(), this.shouldReduceMotion = b.O.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      for (let t2 in this.projection && this.projection.unmount(), (0, T.WG)(this.notifyUpdate), (0, T.WG)(this.render), this.valueSubscriptions.forEach((t3) => t3()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events)
        this.events[t2].clear();
      for (let t2 in this.features) {
        let e2 = this.features[t2];
        e2 && (e2.unmount(), e2.isMounted = false);
      }
      this.current = null;
    }
    addChild(t2) {
      this.children.add(t2), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t2);
    }
    removeChild(t2) {
      this.children.delete(t2), this.enteringChildren && this.enteringChildren.delete(t2);
    }
    bindToMotionValue(t2, e2) {
      let i2;
      if (this.valueSubscriptions.has(t2) && this.valueSubscriptions.get(t2)(), e2.accelerate && h.M.has(t2) && this.current instanceof HTMLElement) {
        let {
          factory: i3,
          keyframes: s3,
          times: r3,
          ease: o2,
          duration: a2
        } = e2.accelerate, h2 = new l.m({
          element: this.current,
          name: t2,
          keyframes: s3,
          times: r3,
          ease: o2,
          duration: (0, n.f)(a2)
        }), u2 = i3(h2);
        this.valueSubscriptions.set(t2, () => {
          u2(), h2.cancel();
        });
        return;
      }
      let s2 = x.f.has(t2);
      s2 && this.onBindTransform && this.onBindTransform();
      let r2 = e2.on("change", (e3) => {
        this.latestValues[t2] = e3, this.props.onUpdate && T.Gt.preRender(this.notifyUpdate), s2 && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
      });
      "u" > typeof window && window.MotionCheckAppearSync && (i2 = window.MotionCheckAppearSync(this, t2, e2)), this.valueSubscriptions.set(t2, () => {
        r2(), i2 && i2();
      });
    }
    sortNodePosition(t2) {
      return this.current && this.sortInstanceNodePosition && this.type === t2.type ? this.sortInstanceNodePosition(this.current, t2.current) : 0;
    }
    updateFeatures() {
      let t2 = "animation";
      for (t2 in A) {
        let e2 = A[t2];
        if (!e2) continue;
        let { isEnabled: i2, Feature: n2 } = e2;
        if (!this.features[t2] && n2 && i2(this.props) && (this.features[t2] = new n2(this)), this.features[t2]) {
          let e3 = this.features[t2];
          e3.isMounted ? e3.update() : (e3.mount(), e3.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, c.ge)();
    }
    getStaticValue(t2) {
      return this.latestValues[t2];
    }
    setStaticValue(t2, e2) {
      this.latestValues[t2] = e2;
    }
    update(t2, e2) {
      (t2.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t2, this.prevPresenceContext = this.presenceContext, this.presenceContext = e2;
      for (let e3 = 0; e3 < P.length; e3++) {
        let i2 = P[e3];
        this.propEventSubscriptions[i2] && (this.propEventSubscriptions[i2](), delete this.propEventSubscriptions[i2]);
        let n2 = t2["on" + i2];
        n2 && (this.propEventSubscriptions[i2] = this.on(i2, n2));
      }
      this.prevMotionValues = (function(t3, e3, i2) {
        for (let n2 in e3) {
          let s2 = e3[n2], r2 = i2[n2];
          if ((0, v.S)(s2)) t3.addValue(n2, s2);
          else if ((0, v.S)(r2)) t3.addValue(n2, (0, p.OQ)(s2, { owner: t3 }));
          else if (r2 !== s2)
            if (t3.hasValue(n2)) {
              let e4 = t3.getValue(n2);
              true === e4.liveStyle ? e4.jump(s2) : e4.hasAnimated || e4.set(s2);
            } else {
              let e4 = t3.getStaticValue(n2);
              t3.addValue(n2, (0, p.OQ)(void 0 !== e4 ? e4 : s2, { owner: t3 }));
            }
        }
        for (let n2 in i2) void 0 === e3[n2] && t3.removeValue(n2);
        return e3;
      })(
        this,
        this.scrapeMotionValuesFromProps(t2, this.prevProps || {}, this),
        this.prevMotionValues
      ), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(t2) {
      return this.props.variants ? this.props.variants[t2] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(t2) {
      let e2 = this.getClosestVariantNode();
      if (e2)
        return e2.variantChildren && e2.variantChildren.add(t2), () => e2.variantChildren.delete(t2);
    }
    addValue(t2, e2) {
      let i2 = this.values.get(t2);
      e2 !== i2 && (i2 && this.removeValue(t2), this.bindToMotionValue(t2, e2), this.values.set(t2, e2), this.latestValues[t2] = e2.get());
    }
    removeValue(t2) {
      this.values.delete(t2);
      let e2 = this.valueSubscriptions.get(t2);
      e2 && (e2(), this.valueSubscriptions.delete(t2)), delete this.latestValues[t2], this.removeValueFromRenderState(t2, this.renderState);
    }
    hasValue(t2) {
      return this.values.has(t2);
    }
    getValue(t2, e2) {
      if (this.props.values && this.props.values[t2])
        return this.props.values[t2];
      let i2 = this.values.get(t2);
      return void 0 === i2 && void 0 !== e2 && (i2 = (0, p.OQ)(null === e2 ? void 0 : e2, { owner: this }), this.addValue(t2, i2)), i2;
    }
    readValue(t2, e2) {
      let i2 = void 0 === this.latestValues[t2] && this.current ? this.getBaseTargetFromProps(this.props, t2) ?? this.readValueFromInstance(this.current, t2, this.options) : this.latestValues[t2];
      return null != i2 && ("string" == typeof i2 && ((0, s.i)(i2) || (0, r.$)(i2)) ? i2 = parseFloat(i2) : "number" != typeof i2 && !m.f.test(i2) && m.f.test(e2) && (i2 = (0, f.J)(t2, e2)), this.setBaseTarget(t2, (0, v.S)(i2) ? i2.get() : i2)), (0, v.S)(i2) ? i2.get() : i2;
    }
    setBaseTarget(t2, e2) {
      this.baseTarget[t2] = e2;
    }
    getBaseTarget(t2) {
      let e2, { initial: i2 } = this.props;
      if ("string" == typeof i2 || "object" == typeof i2) {
        let n3 = (0, S.a)(this.props, i2, this.presenceContext?.custom);
        n3 && (e2 = n3[t2]);
      }
      if (i2 && void 0 !== e2) return e2;
      let n2 = this.getBaseTargetFromProps(this.props, t2);
      return void 0 === n2 || (0, v.S)(n2) ? void 0 !== this.initialValues[t2] && void 0 === e2 ? void 0 : this.baseTarget[t2] : n2;
    }
    on(t2, e2) {
      return this.events[t2] || (this.events[t2] = new o.v()), this.events[t2].add(e2);
    }
    notify(t2, ...e2) {
      this.events[t2] && this.events[t2].notify(...e2);
    }
    scheduleRenderMicrotask() {
      u.k.render(this.render);
    }
  }
}

__m(__module,__exports,__require);
}