function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  r.d(e, { z: () => m });
  var i = r(51469), n = r(37035), s = r(16660), a = r(45343), o = r(20754), u = r(40660), l = r(27933);
  let h = /* @__PURE__ */ new Set(), c = ({ timestamp: t2 }) => {
    h.forEach((e2) => e2.tick(t2));
  };
  class f extends u.q {
    constructor(t2) {
      super(), this.state = "idle", this.startTime = 0, this.currentTime = 0, this.started = false, this.hasNextTarget = false, this.nextTarget = 0, this.stop = () => {
        "idle" !== this.state && (this.teardown(), this.options.onStop?.());
      }, this.options = t2, (0, o.E)(t2), this.factory = t2.type || s.i, this.generator = this.factory(t2);
      const { driver: e2 } = t2;
      e2 && (this.driver = e2((t3) => this.tick(t3))), this.startTime = this.now(), this.state = "running", this.driver ? this.driver.start() : (h.size || l.Gt.update(c, true), h.add(this));
    }
    setTarget(t2, e2) {
      this.nextTarget = t2, this.nextVelocity = e2, this.hasNextTarget = true;
    }
    retarget(t2, e2) {
      let { options: r2, generator: i2 } = this;
      r2.keyframes = t2, r2.velocity = e2, this.startTime = this.now(), this.currentTime = 0, i2.retarget ? i2.retarget(t2, e2) : this.generator = this.factory(r2);
    }
    tick(t2) {
      let { options: e2, hasNextTarget: r2 } = this, { delay: i2 = 0, onUpdate: n2, onPlay: s2 } = e2, a2 = Math.round(t2 - this.startTime) - i2, o2 = this.currentTime = Math.max(0, a2), u2 = this.generator.next(o2), l2 = a2 < 0 ? e2.keyframes[0] : u2.value;
      if (r2) {
        this.hasNextTarget = false;
        let { keyframes: t3 } = e2;
        t3[0] = l2, t3[1] = this.nextTarget, this.retarget(t3, this.nextVelocity ?? this.getGeneratorVelocity());
      }
      (r2 || !this.started) && (this.started = true, s2?.()), "running" === this.state && (n2?.(l2), u2.done && a2 >= 0 && !r2 && !this.hasNextTarget && "running" === this.state && (this.notifyFinished(), this.teardown(), this.state = "finished", e2.onComplete?.()));
    }
    getGeneratorVelocity() {
      return (0, a.Y)(this.generator, this.currentTime, this.options.velocity);
    }
    now() {
      return this.driver ? this.driver.now() : n.k.now();
    }
    teardown() {
      this.state = "idle", this.driver ? this.driver.stop() : (h.delete(this), h.size || (0, l.WG)(c));
    }
  }
  function d(t2) {
    return "number" == typeof t2 ? t2 : parseFloat(t2);
  }
  var g = r(12115), y = r(24866), p = r(28245), v = r(55809);
  function m(t2, e2 = {}) {
    return (function(t3, e3 = {}) {
      let { isStatic: r2 } = (0, g.useContext)(y.Q), n2 = () => (0, i.S)(t3) ? t3.get() : t3;
      if (r2) return (0, v.G)(n2);
      let s2 = (0, p.d)(n2());
      return (0, g.useInsertionEffect)(
        () => (function(t4, e4, r3 = {}) {
          let n3, s3 = t4.get(), a2 = null, o2 = "string" == typeof s3 ? s3.replace(/[\d.-]/g, "") : void 0, u2 = (t5) => n3(o2 ? t5 + o2 : t5), l2 = () => t4.events.animationStart?.notify(), h2 = () => {
            a2 && (a2.stop(), a2 = null), t4.animation = void 0;
          };
          if (t4.attach((e5, i2) => {
            n3 = i2;
            let s4 = d(e5);
            if (a2?.state === "running")
              return void a2.setTarget(s4, r3.velocity);
            let o3 = d(t4.get()), c2 = a2 ? a2.getGeneratorVelocity() : t4.getVelocity();
            if (h2(), o3 === s4) return;
            let g2 = a2 = new f({
              ...{
                keyframes: [o3, s4],
                velocity: c2,
                type: "spring",
                restDelta: 1e-3,
                restSpeed: 0.01,
                ...r3,
                onUpdate: u2
              },
              onPlay: l2
            });
            t4.animation = g2, g2.then(() => {
              a2 === g2 && (a2 = null, t4.animation = void 0, t4.events.animationComplete?.notify());
            });
          }, h2), (0, i.S)(e4)) {
            let i2 = true === r3.skipInitialAnimation, n4 = e4.on("change", (e5) => {
              var r4, n5, s5, a3;
              i2 ? (i2 = false, t4.jump((r4 = e5, (n5 = o2) ? r4 + n5 : r4), false)) : t4.set((s5 = e5, (a3 = o2) ? s5 + a3 : s5));
            }), s4 = t4.on("destroy", n4);
            return () => {
              n4(), s4();
            };
          }
          return h2;
        })(s2, t3, e3),
        [s2, JSON.stringify(e3)]
      ), s2;
    })(t2, { type: "spring", ...e2 });
  }
}

__m(__module,__exports,__require);
}