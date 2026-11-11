function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { KG: () => l, OQ: () => h, bt: () => a });
  var n = i(73852), s = i(79537), r = i(37035), o = i(27933);
  let a = { current: void 0 };
  class l {
    constructor(t2, e2 = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t3) => {
        let e3 = r.k.now();
        if (this.updatedAt !== e3 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t3), this.current !== this.prev && (this.notifyChange(), this.dependents))
          for (let t4 of this.dependents) t4.dirty();
      }, this.hasAnimated = false, this.setCurrent(t2), this.owner = e2.owner;
    }
    setCurrent(t2) {
      this.current = t2, this.updatedAt = r.k.now(), null === this.canTrackVelocity && void 0 !== t2 && (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
    }
    setPrevFrameValue(t2 = this.current) {
      this.prevFrameValue = t2, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(t2) {
      return this.on("change", t2);
    }
    on(t2, e2) {
      var i2;
      return "change" === t2 ? this.onChangeSubscribe(e2) : ((i2 = this.events)[t2] || (i2[t2] = new n.v())).add(e2);
    }
    onChangeSubscribe(t2) {
      let { events: e2 } = this;
      return e2.change || this.changeSubscriber ? (e2.change || (e2.change = new n.v(), e2.change.add(this.changeSubscriber), this.changeSubscriber = void 0), e2.change.add(t2)) : this.changeSubscriber = t2, () => {
        this.changeSubscriber === t2 ? this.changeSubscriber = void 0 : e2.change?.remove(t2), this.stopIfUnobserved();
      };
    }
    stopIfUnobserved() {
      o.Gt.read(() => {
        this.changeSubscriber || this.events.change?.getSize() || this.stop();
      });
    }
    clearListeners() {
      for (let t2 in this.changeSubscriber = void 0, this.events)
        this.events[t2].clear();
    }
    attach(t2, e2) {
      this.passiveEffect = t2, this.stopPassiveEffect = e2;
    }
    set(t2) {
      this.passiveEffect ? this.passiveEffect(t2, this.updateAndNotify) : this.updateAndNotify(t2);
    }
    setWithVelocity(t2, e2, i2) {
      this.set(e2), this.prev = void 0, this.prevFrameValue = t2, this.prevUpdatedAt = this.updatedAt - i2;
    }
    jump(t2, e2 = true) {
      this.updateAndNotify(t2), this.prev = t2, this.prevUpdatedAt = this.prevFrameValue = void 0, e2 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      this.notifyChange();
    }
    notifyChange() {
      let { current: t2, changeSubscriber: e2 } = this;
      e2 ? e2(t2) : this.events.change?.notify(t2);
    }
    addDependent(t2) {
      this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t2);
    }
    removeDependent(t2) {
      this.dependents && this.dependents.delete(t2);
    }
    get() {
      return a.current && a.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let t2 = r.k.now();
      if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t2 - this.updatedAt > 30)
        return 0;
      let e2 = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return (0, s.f)(
        parseFloat(this.current) - parseFloat(this.prevFrameValue),
        e2
      );
    }
    start(t2) {
      return this.stop(), new Promise((e2) => {
        let i2;
        this.hasAnimated = true;
        let n2 = false;
        i2 = t2(() => {
          n2 = true, this.events.animationComplete?.notify(), this.animation === i2 && this.clearAnimation(), e2();
        }), n2 || (this.animation = i2), this.events.animationStart?.notify();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      this.animation = void 0;
    }
    destroy() {
      this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function h(t2, e2) {
    return new l(t2, e2);
  }
}

__m(__module,__exports,__require);
}