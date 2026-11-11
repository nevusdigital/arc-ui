function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { K: () => g });
  var n = i(9247), s = i(49637), r = i(11048);
  let o = [
    s.ai,
    r.px,
    r.KN,
    r.uj,
    r.vw,
    r.vh,
    { test: (t2) => "auto" === t2, parse: (t2) => t2 }
  ], a = (t2) => o.find((e2) => e2.test(t2));
  var l = i(5556), h = i(74212), u = i(39896);
  let d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  var c = i(4132), p = i(58974), m = i(83399), f = i(21023);
  let v = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  var y = i(32766);
  class g extends c.h {
    constructor(t2, e2, i2, n2, s2) {
      super(t2, e2, i2, n2, s2, true);
    }
    readKeyframes() {
      let { unresolvedKeyframes: t2, element: e2, name: i2 } = this;
      if (!e2 || !e2.current) return;
      super.readKeyframes();
      for (let i3 = 0; i3 < t2.length; i3++) {
        let n2 = t2[i3];
        if ("string" == typeof n2 && (n2 = n2.trim(), (0, u.pG)(n2))) {
          let s3 = (function t3(e3, i4, n3 = 1) {
            (0, l.V)(
              n3 <= 4,
              `Max CSS variable fallback depth detected in property "${e3}". This may indicate a circular fallback dependency.`,
              "max-css-var-depth"
            );
            let [s4, r3] = (function(t4) {
              let e4 = d.exec(t4);
              if (!e4) return [,];
              let [, i5, n4, s5] = e4;
              return [`--${i5 ?? n4}`, s5];
            })(e3);
            if (!s4) return;
            let o3 = window.getComputedStyle(i4).getPropertyValue(s4);
            if (o3) {
              let t4 = o3.trim();
              return (0, h.i)(t4) ? parseFloat(t4) : t4;
            }
            return (0, u.pG)(r3) ? t3(r3, i4, n3 + 1) : r3;
          })(n2, e2.current);
          void 0 !== s3 && (t2[i3] = s3), i3 === t2.length - 1 && (this.finalKeyframe = n2);
        }
      }
      if (this.resolveNoneKeyframes(), !n.$.has(i2) || 2 !== t2.length) return;
      let [s2, r2] = t2;
      if ("number" == typeof s2 && "number" == typeof r2) return;
      let o2 = a(s2), c2 = a(r2);
      if ((0, u.rm)(s2) !== (0, u.rm)(r2) && y.Hr[i2]) {
        this.needsMeasurement = true;
        return;
      }
      if (o2 !== c2)
        if ((0, y.E4)(o2) && (0, y.E4)(c2))
          for (let e3 = 0; e3 < t2.length; e3++) {
            let i3 = t2[e3];
            "string" == typeof i3 && (t2[e3] = parseFloat(i3));
          }
        else y.Hr[i2] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: t2, name: e2 } = this, i2 = [];
      for (let e3 = 0; e3 < t2.length; e3++) {
        var n2;
        (null === t2[e3] || ("number" == typeof (n2 = t2[e3]) ? 0 === n2 : null === n2 || "none" === n2 || "0" === n2 || (0, p.$)(n2))) && i2.push(e3);
      }
      i2.length && (function(t3, e3, i3) {
        let n3, s2 = 0;
        for (; s2 < t3.length && !n3; ) {
          let e4 = t3[s2];
          "string" == typeof e4 && !v.has(e4) && (0, m.nK)(e4) && (n3 = t3[s2]), s2++;
        }
        if (n3 && i3) for (let s3 of e3) t3[s3] !== n3 && (t3[s3] = (0, f.J)(i3, n3));
      })(t2, i2, e2);
    }
    measure() {
      let { element: t2, name: e2 } = this;
      return y.Hr[e2](
        window.getComputedStyle(t2.current),
        () => t2.measureViewportBox()
      );
    }
    measureInitialState() {
      let { element: t2, unresolvedKeyframes: e2, name: i2 } = this;
      if (!t2 || !t2.current) return;
      "height" === i2 && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), e2[0] = this.measuredOrigin;
      let n2 = e2[e2.length - 1];
      void 0 !== n2 && this.motionValue?.jump(n2, false);
    }
    measureEndState() {
      let { element: t2, unresolvedKeyframes: e2 } = this;
      if (!t2 || !t2.current) return;
      this.motionValue?.jump(this.measuredOrigin, false);
      let i2 = e2.length - 1, n2 = e2[i2];
      e2[i2] = this.measure(), null !== n2 && void 0 === this.finalKeyframe && (this.finalKeyframe = n2), this.removedTransforms?.length && this.removedTransforms.forEach(([e3, i3]) => {
        t2.getValue(e3).set(i3);
      }), this.resolveNoneKeyframes();
    }
  }
}

__m(__module,__exports,__require);
}