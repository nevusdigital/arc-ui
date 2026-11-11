function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { m: () => y });
  var n = i(5556), s = i(38621), r = i(72025), o = i(94980), a = i(69166), l = i(47736), h = i(40660), u = i(14432), d = i(9331);
  let c = (0, i(7145).J)(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (t2) {
      return false;
    }
    return true;
  }, "linearEasing");
  var p = i(78987);
  let m = ([t2, e2, i2, n2]) => `cubic-bezier(${t2}, ${e2}, ${i2}, ${n2})`, f = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: m([0, 0.65, 0.55, 1]),
    circOut: m([0.55, 0, 1, 0.45]),
    backIn: m([0.31, 0.01, 0.66, -0.59]),
    backOut: m([0.33, 1.53, 0.69, 0.99])
  };
  var v = i(70954);
  class y extends h.q {
    constructor(t2) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !t2)
        return;
      const {
        element: e2,
        name: i2,
        keyframes: s2,
        pseudoElement: r2,
        allowFlatten: a2 = false,
        finalKeyframe: h2,
        onComplete: y2
      } = t2;
      this.isPseudoElement = !!r2, this.allowFlatten = a2, this.options = t2, (0, n.V)(
        "string" != typeof t2.type,
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring"
      );
      const g = (function({ type: t3, ...e3 }) {
        return (0, v.W)(t3) && c() ? t3.applyToOptions(e3) : (e3.duration ?? (e3.duration = 300), e3.ease ?? (e3.ease = "easeOut"), e3);
      })(t2);
      this.animation = (function(t3, e3, i3, {
        delay: n2 = 0,
        duration: s3 = 300,
        repeat: r3 = 0,
        repeatType: o2 = "loop",
        ease: a3 = "easeOut",
        times: l2
      } = {}, h3) {
        let u2 = { [e3]: i3 };
        l2 && (u2.offset = l2);
        let v2 = (function t4(e4, i4) {
          if (e4)
            return "function" == typeof e4 ? c() ? (0, p.K)(e4, i4) : "ease-out" : (0, d.D)(e4) ? m(e4) : Array.isArray(e4) ? e4.map((e5) => t4(e5, i4) || f.easeOut) : f[e4];
        })(a3, s3);
        Array.isArray(v2) && (u2.easing = v2);
        let y3 = {
          delay: n2,
          duration: s3,
          easing: Array.isArray(v2) ? "linear" : v2,
          fill: "both",
          iterations: r3 + 1,
          direction: "reverse" === o2 ? "alternate" : "normal"
        };
        return h3 && (y3.pseudoElement = h3), t3.animate(u2, y3);
      })(e2, i2, s2, g, r2), false === g.autoplay && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !r2) {
          let t3 = (0, l.X)(s2, this.options, h2, this.speed);
          this.updateMotionValue && this.updateMotionValue(t3), (0, o.e)(e2, i2, t3), this.animation.cancel();
        }
        y2?.(), this.notifyFinished();
      }, (0, u.U)(this, t2, g);
    }
    play() {
      this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (t2) {
      }
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = true;
      let { state: t2 } = this;
      "idle" !== t2 && "finished" !== t2 && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let t2 = this.options?.element;
      !this.isPseudoElement && t2?.isConnected && this.animation.commitStyles?.();
    }
    get duration() {
      let t2 = this.animation.effect?.getComputedTiming?.().duration || 0;
      return (0, s.X)(Number(t2));
    }
    get iterationDuration() {
      let { delay: t2 = 0 } = this.options || {};
      return this.duration + (0, s.X)(t2);
    }
    get time() {
      return (0, s.X)(Number(this.animation.currentTime) || 0);
    }
    set time(t2) {
      let e2 = null !== this.finishedTime;
      this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = (0, s.f)(t2), e2 && this.animation.pause();
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(t2) {
      t2 < 0 && (this.finishedTime = null), this.animation.playbackRate = t2;
    }
    get state() {
      return null !== this.finishedTime ? "finished" : this.animation.playState;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(t2) {
      this.manualStartTime = this.animation.startTime = t2;
    }
    attachTimeline({ timeline: t2, rangeStart: e2, rangeEnd: i2, observe: n2 }) {
      return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t2 && (0, a.J)()) ? (this.animation.timeline = t2, e2 && (this.animation.rangeStart = e2), i2 && (this.animation.rangeEnd = i2), r.l) : n2(this);
    }
  }
}

__m(__module,__exports,__require);
}