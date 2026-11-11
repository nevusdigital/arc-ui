function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { h: () => v, q: () => f });
  var n = i(74212), s = i(58974), r = i(83399), o = i(21023), a = i(32766), l = i(27933);
  let h = /* @__PURE__ */ new Set(), u = false, d = false, c = false;
  function p() {
    if (d) {
      let t2 = [], e2 = /* @__PURE__ */ new Set(), i2 = /* @__PURE__ */ new Set();
      h.forEach((n3) => {
        n3.needsMeasurement && (t2.push(n3), e2.add(n3.element), a.dB.has(n3.name) && i2.add(n3.element));
      });
      let n2 = /* @__PURE__ */ new Map();
      i2.forEach((t3) => {
        let e3 = (0, a.W9)(t3);
        e3.length && (n2.set(t3, e3), t3.render());
      }), t2.forEach((t3) => t3.measureInitialState()), e2.forEach((t3) => {
        t3.render();
        let e3 = n2.get(t3);
        e3 && e3.forEach(([e4, i3]) => {
          t3.getValue(e4)?.set(i3);
        });
      }), t2.forEach((t3) => t3.measureEndState()), t2.forEach((t3) => {
        void 0 !== t3.suspendedScrollY && window.scrollTo(0, t3.suspendedScrollY);
      });
    }
    d = false, u = false, h.forEach((t2) => t2.complete(c)), h.clear();
  }
  function m() {
    h.forEach((t2) => {
      t2.readKeyframes(), t2.needsMeasurement && (d = true);
    });
  }
  function f() {
    c = true, m(), p(), c = false;
  }
  class v {
    constructor(t2, e2, i2, n2, s2, r2 = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...t2], this.onComplete = e2, this.name = i2, this.motionValue = n2, this.element = s2, this.isAsync = r2;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (h.add(this), u || (u = true, l.Gt.read(m), l.Gt.resolveKeyframes(p))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: t2,
        name: e2,
        element: i2,
        motionValue: a2
      } = this;
      if (null === t2[0]) {
        let l2 = a2?.get(), h2 = t2[t2.length - 1];
        if (void 0 !== l2) t2[0] = l2;
        else if (i2 && e2) {
          let a3 = (function(t3, e3, i3) {
            if ("string" == typeof t3) {
              if ((0, n.i)(t3) || (0, s.$)(t3)) return parseFloat(t3);
              else if (!r.f.test(t3) && r.f.test(i3)) return (0, o.J)(e3, i3);
            }
            return t3 ?? void 0;
          })(i2.readValue(e2, h2), e2, h2);
          void 0 !== a3 && (t2[0] = a3);
        }
        void 0 === t2[0] && (t2[0] = h2), a2 && void 0 === l2 && a2.set(t2[0]);
      }
      for (let e3 = 1; e3 < t2.length; e3++) t2[e3] ?? (t2[e3] = t2[e3 - 1]);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(t2 = false) {
      this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t2), h.delete(this);
    }
    cancel() {
      "scheduled" === this.state && (h.delete(this), this.state = "pending");
    }
    resume() {
      "pending" === this.state && this.scheduleResolve();
    }
  }
}

__m(__module,__exports,__require);
}