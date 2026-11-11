function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { f: () => z });
  var n = i(38621), s = i(28153), r = i(37035), o = i(34017), a = i(94712), l = i(86075), h = i(27933);
  let u = (t2) => {
    let e2 = ({ timestamp: e3 }) => t2(e3);
    return {
      start: (t3 = true) => h.Gt.update(e2, t3),
      stop: () => (0, h.WG)(e2),
      now: () => h.uv.isProcessing ? h.uv.timestamp : r.k.now()
    };
  };
  var d = i(41720), c = i(16660), p = i(17964), m = i(45343), f = i(47736), v = i(20754), y = i(14432), g = i(40660);
  let x = (t2) => t2 / 100;
  class w extends g.q {
    constructor(t2) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: false, value: void 0 }, this.stop = () => {
        let { motionValue: t3 } = this.options;
        t3 && t3.updatedAt !== r.k.now() && this.tick(r.k.now()), this.isStopped = true, "idle" !== this.state && (this.teardown(), this.options.onStop?.());
      }, this.options = t2, this.initAnimation(), this.play(), false === t2.autoplay && this.pause(), (0, y.U)(this, this.options);
    }
    initAnimation() {
      let { options: t2 } = this;
      (0, v.E)(t2);
      let {
        type: e2 = c.i,
        repeat: i2 = 0,
        repeatDelay: n2 = 0,
        repeatType: s2,
        velocity: r2 = 0
      } = t2, { keyframes: a2 } = t2, h2 = e2 || c.i;
      h2 !== c.i && "number" != typeof a2[0] && (this.mixKeyframes = (0, o.F)(x, (0, l.j)(a2[0], a2[1])), a2 = [0, 100]);
      let u2 = h2(a2 === t2.keyframes ? t2 : { ...t2, keyframes: a2 });
      "mirror" === s2 && (this.mirroredGenerator = h2({
        ...t2,
        keyframes: [...a2].reverse(),
        velocity: -r2
      })), null === u2.calculatedDuration && (u2.calculatedDuration = (0, p.t)(u2));
      let { calculatedDuration: d2 } = u2;
      this.calculatedDuration = d2, this.resolvedDuration = d2 + n2, this.totalDuration = this.resolvedDuration * (i2 + 1) - n2, this.generator = u2;
    }
    updateTime(t2) {
      let e2 = Math.round(t2 - this.startTime) * this.playbackSpeed;
      null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e2;
    }
    tick(t2, e2 = false) {
      let i2, {
        generator: n2,
        totalDuration: s2,
        mixKeyframes: r2,
        mirroredGenerator: o2,
        resolvedDuration: l2,
        calculatedDuration: h2
      } = this;
      if (null === this.startTime) return n2.next(0);
      let {
        delay: u2 = 0,
        keyframes: c2,
        repeat: p2,
        repeatType: m2,
        repeatDelay: v2,
        type: y2,
        onUpdate: g2,
        finalKeyframe: x2
      } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t2) : this.speed < 0 && (this.startTime = Math.min(t2 - s2 / this.speed, this.startTime)), e2 ? this.currentTime = t2 : this.updateTime(t2);
      let w2 = this.currentTime - u2 * (this.playbackSpeed >= 0 ? 1 : -1), S2 = this.playbackSpeed >= 0 ? w2 < 0 : w2 > s2;
      this.currentTime = Math.max(w2, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = s2);
      let b2 = this.currentTime, T2 = n2;
      if (p2) {
        let t3 = Math.min(this.currentTime, s2) / l2, e3 = Math.floor(t3), i3 = t3 % 1;
        !i3 && t3 >= 1 && (i3 = 1), 1 === i3 && e3--, (e3 = Math.min(e3, p2 + 1)) % 2 && ("reverse" === m2 ? (i3 = 1 - i3, v2 && (i3 -= v2 / l2)) : "mirror" === m2 && (T2 = o2)), b2 = (0, a.q)(0, 1, i3) * l2;
      }
      S2 ? (this.delayState.value = c2[0], i2 = this.delayState) : i2 = T2.next(b2), r2 && !S2 && (i2.value = r2(i2.value));
      let { done: P2 } = i2;
      S2 || null === h2 || (P2 = this.playbackSpeed >= 0 ? this.currentTime >= s2 : this.currentTime <= 0);
      let A2 = null === this.holdTime && ("finished" === this.state || "running" === this.state && P2);
      return A2 && y2 !== d.B && (i2.value = (0, f.X)(c2, this.options, x2, this.speed)), g2 && g2(i2.value), A2 && this.finish(), i2;
    }
    then(t2, e2) {
      return this.finished.then(t2, e2);
    }
    get duration() {
      return (0, n.X)(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: t2 = 0 } = this.options || {};
      return this.duration + (0, n.X)(t2);
    }
    get time() {
      return (0, n.X)(this.currentTime);
    }
    set time(t2) {
      t2 = (0, n.f)(t2), this.currentTime = t2, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t2 : this.driver && (this.startTime = this.driver.now() - t2 / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = "paused", this.holdTime = t2, this.tick(t2));
    }
    getGeneratorVelocity() {
      return (0, m.Y)(this.generator, this.currentTime, this.options.velocity);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t2) {
      let e2 = this.playbackSpeed !== t2;
      e2 && this.driver && this.updateTime(r.k.now()), this.playbackSpeed = t2, e2 && this.driver && (this.time = (0, n.X)(this.currentTime));
    }
    play() {
      if (this.isStopped) return;
      let { driver: t2 = u, startTime: e2 } = this.options;
      this.driver || (this.driver = t2((t3) => this.tick(t3))), this.options.onPlay?.();
      let i2 = this.driver.now();
      "finished" === this.state ? (this.updateFinished(), this.startTime = i2) : null !== this.holdTime ? this.startTime = i2 - this.holdTime : this.startTime || (this.startTime = e2 ?? i2), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      this.state = "paused", this.updateTime(r.k.now()), this.holdTime = this.currentTime;
    }
    complete() {
      "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t2) {
      return this.startTime = 0, this.tick(t2, true);
    }
    attachTimeline(t2) {
      return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t2.observe(this);
    }
  }
  var S = i(4132), b = i(94980), T = i(3486), P = i(25903), A = i(1406), k = i(89722);
  let E = { anticipate: P.b, backInOut: A.ZZ, circInOut: k.tn };
  class V extends T.m {
    constructor(t2) {
      !(function(t3) {
        "string" == typeof t3.ease && t3.ease in E && (t3.ease = E[t3.ease]);
      })(t2), (0, v.E)(t2), super(t2), void 0 !== t2.startTime && false !== t2.autoplay && (this.startTime = t2.startTime), this.options = t2;
    }
    updateMotionValue(t2) {
      let {
        motionValue: e2,
        onUpdate: i2,
        onComplete: n2,
        element: s2,
        ...o2
      } = this.options;
      if (!e2) return;
      if (void 0 !== t2) return void e2.set(t2);
      let l2 = new w({ ...o2, autoplay: false }), h2 = Math.max(10, r.k.now() - this.startTime), u2 = (0, a.q)(0, 10, h2 - 10), d2 = l2.sample(h2).value, { name: c2 } = this.options;
      s2 && c2 && (0, b.e)(s2, c2, d2), e2.setWithVelocity(l2.sample(Math.max(0, h2 - u2)).value, d2, u2), l2.stop();
    }
  }
  var C = i(5556), M = i(70954), D = i(83399);
  let R = (t2, e2) => "zIndex" !== e2 && !!("number" == typeof t2 || Array.isArray(t2) || "string" == typeof t2 && (D.f.test(t2) || "0" === t2) && !t2.startsWith("url("));
  function L(t2) {
    t2.duration = 0, t2.type = "keyframes";
  }
  var B = i(96291), j = i(58584);
  let F = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/, O = /* @__PURE__ */ new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
  ]), I = (0, B.p)(
    () => Object.hasOwnProperty.call(Element.prototype, "animate")
  );
  class W extends g.q {
    constructor(t2) {
      super(), this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
      }, this.createdAt = r.k.now();
      const { keyframes: e2, name: i2, motionValue: n2, element: s2 } = t2;
      t2.autoplay ?? (t2.autoplay = true), t2.delay ?? (t2.delay = 0), t2.type ?? (t2.type = "keyframes"), t2.repeat ?? (t2.repeat = 0), t2.repeatDelay ?? (t2.repeatDelay = 0), t2.repeatType ?? (t2.repeatType = "loop");
      const o2 = s2?.KeyframeResolver || S.h;
      this.keyframeResolver = new o2(
        e2,
        (e3, i3, n3) => this.onKeyframesResolved(e3, i3, t2, !n3),
        i2,
        n2,
        s2
      ), this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(t2, e2, i2, n2) {
      let o2;
      this.keyframeResolver = void 0;
      let {
        name: a2,
        type: l2,
        velocity: h2,
        delay: u2,
        isHandoff: d2,
        onUpdate: c2
      } = i2;
      this.resolvedAt = r.k.now();
      let p2 = true;
      !(function(t3, e3, i3, n3) {
        let s2 = t3[0];
        if (null === s2) return false;
        if ("display" === e3 || "visibility" === e3) return true;
        let r2 = t3[t3.length - 1], o3 = R(s2, e3), a3 = R(r2, e3);
        return o3 && a3 ? (function(t4) {
          let e4 = t4[0];
          if (1 === t4.length) return true;
          for (let i4 = 0; i4 < t4.length; i4++) if (t4[i4] !== e4) return true;
        })(t3) || ("spring" === i3 || (0, M.W)(i3)) && n3 : (o3 !== a3 && (0, C.$)(
          false,
          `You are trying to animate ${e3} from "${s2}" to "${r2}". "${o3 ? r2 : s2}" is not an animatable value.`,
          "value-not-animatable"
        ), false);
      })(t2, a2, l2, h2) && (p2 = false, (s.W.instantAnimations || !u2) && c2?.((0, f.X)(t2, i2, e2)), t2[0] = t2[t2.length - 1], L(i2), i2.repeat = 0);
      let m2 = n2 ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0, { onComplete: v2 } = i2;
      if (i2.startTime ?? (i2.startTime = m2), i2.finalKeyframe = e2, i2.keyframes = t2, i2.onComplete = () => {
        v2?.(), this.notifyFinished();
      }, p2 && !d2 && (function(t3) {
        let {
          motionValue: e3,
          name: i3,
          repeatDelay: n3,
          repeatType: s2,
          damping: r2,
          type: o3,
          keyframes: a3
        } = t3;
        if (!i3 || !(j.M.has(i3) || O.has(i3))) return false;
        let l3 = e3?.owner?.current;
        if (!(l3 instanceof HTMLElement) && !(l3 instanceof SVGElement))
          return false;
        let { onUpdate: h3, transformTemplate: u3 } = e3.owner.getProps();
        return I() && (j.M.has(i3) || O.has(i3) && (function(t4) {
          for (let e4 = 0; e4 < t4.length; e4++)
            if ("string" == typeof t4[e4] && F.test(t4[e4])) return true;
          return false;
        })(a3)) && ("transform" !== i3 || !u3) && !h3 && !n3 && "mirror" !== s2 && 0 !== r2 && "inertia" !== o3;
      })(i2)) {
        i2.element = i2.motionValue?.owner?.current;
        try {
          o2 = new V(i2);
        } catch {
          o2 = new w(i2);
        }
      } else o2 = new w(i2);
      this.pendingTimeline && (this.stopTimeline = o2.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = o2;
    }
    get finished() {
      return this._animation ? this._animation.finished : super.finished;
    }
    then(t2, e2) {
      return this.finished.finally(t2).then(() => {
      });
    }
    get animation() {
      return this._animation || (this.keyframeResolver?.resume(), (0, S.q)()), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(t2) {
      this.animation.time = t2;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(t2) {
      this.animation.speed = t2;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(t2) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(t2) : this.pendingTimeline = t2, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
    }
  }
  var U = i(75319), N = i(25952);
  let $ = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, X = { type: "keyframes", duration: 0.8 }, G = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, K = /* @__PURE__ */ new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed"
  ]), z = (t2, e2, i2, r2 = {}, o2, a2) => (l2) => {
    let u2 = (0, U.r)(r2, t2) || {}, d2 = u2.delay || r2.delay || 0, { elapsed: c2 = 0 } = r2;
    c2 -= (0, n.f)(d2);
    let p2 = {
      keyframes: Array.isArray(i2) ? i2 : [null, i2],
      ease: "easeOut",
      velocity: e2.getVelocity(),
      ...u2,
      delay: -c2,
      onUpdate: (t3) => {
        e2.set(t3), u2.onUpdate && u2.onUpdate(t3);
      },
      onComplete: () => {
        l2(), u2.onComplete && u2.onComplete();
      },
      name: t2,
      motionValue: e2,
      element: a2 ? void 0 : o2
    };
    !(function(t3) {
      for (let e3 in t3) if (!K.has(e3)) return true;
      return false;
    })(u2) && Object.assign(
      p2,
      ((t3, { keyframes: e3 }) => e3.length > 2 ? X : N.f.has(t3) ? t3.startsWith("scale") ? {
        type: "spring",
        stiffness: 550,
        damping: 0 === e3[1] ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
      } : $ : G)(t2, p2)
    ), p2.duration && (p2.duration = (0, n.f)(p2.duration)), p2.repeatDelay && (p2.repeatDelay = (0, n.f)(p2.repeatDelay)), void 0 !== p2.from && (p2.keyframes[0] = p2.from);
    let m2 = false;
    if (false !== p2.type && (0 !== p2.duration || p2.repeatDelay) || (L(p2), 0 === p2.delay && (m2 = true)), (s.W.instantAnimations || s.W.skipAnimations || o2?.shouldSkipAnimations || u2.skipAnimations) && (m2 = true, L(p2), p2.delay = 0), p2.allowFlatten = !u2.type && !u2.ease, m2 && !a2 && void 0 !== e2.get()) {
      let t3 = (0, f.X)(p2.keyframes, u2);
      if (void 0 !== t3)
        return void h.Gt.update(() => {
          p2.onUpdate(t3), p2.onComplete();
        });
    }
    return u2.isSync ? new w(p2) : new W(p2);
  };
}

__m(__module,__exports,__require);
}