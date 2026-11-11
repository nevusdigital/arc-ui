function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { o: () => y });
  var n = i(5556), s = i(38621), r = i(94712), o = i(78987), a = i(17964), l = i(26262);
  let h = 0.01, u = 2, d = 5e-3, c = 0.5;
  function p(t2, e2) {
    return t2 * Math.sqrt(1 - e2 * e2);
  }
  let m = ["duration", "bounce"], f = ["stiffness", "damping", "mass"];
  function v(t2, e2) {
    return e2.some((e3) => void 0 !== t2[e3]);
  }
  function y(t2 = 0.3, e2 = 0.3) {
    let i2, l2, g, x = "object" != typeof t2 ? { visualDuration: t2, keyframes: [0, 1], bounce: e2 } : t2, w = x.keyframes[0], S = x.keyframes[x.keyframes.length - 1], b = { done: false, value: w }, {
      stiffness: T,
      damping: P,
      mass: A,
      duration: k,
      velocity: E,
      isResolvedFromDuration: V
    } = (function(t3) {
      let e3 = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: false,
        ...t3
      };
      if (!v(t3, f) && v(t3, m))
        if (e3.velocity = 0, t3.visualDuration) {
          let i3 = 2 * Math.PI / (1.2 * t3.visualDuration), n2 = i3 * i3, s2 = 2 * (0, r.q)(0.05, 1, 1 - (t3.bounce || 0)) * Math.sqrt(n2);
          e3 = { ...e3, mass: 1, stiffness: n2, damping: s2 };
        } else {
          let i3 = (function({
            duration: t4 = 800,
            bounce: e4 = 0.3,
            velocity: i4 = 0,
            mass: o2 = 1
          }) {
            let a2, l3;
            (0, n.$)(
              t4 <= (0, s.f)(10),
              "Spring duration must be 10 seconds or less",
              "spring-duration-limit"
            );
            let h2 = 1 - e4;
            h2 = (0, r.q)(0.05, 1, h2), t4 = (0, r.q)(0.01, 10, (0, s.X)(t4)), h2 < 1 ? (a2 = (e5) => {
              let n2 = e5 * h2, s2 = n2 * t4;
              return 1e-3 - (n2 - i4) / p(e5, h2) * Math.exp(-s2);
            }, l3 = (e5) => {
              let n2 = e5 * h2 * t4, s2 = h2 * h2 * e5 * e5 * t4, r2 = Math.exp(-n2), o3 = p(e5 * e5, h2);
              return (n2 * i4 + i4 - s2) * r2 * (-a2(e5) + 1e-3 > 0 ? -1 : 1) / o3;
            }) : (a2 = (e5) => -1e-3 + Math.exp(-e5 * t4) * ((e5 - i4) * t4 + 1), l3 = (e5) => t4 * t4 * (i4 - e5) * Math.exp(-e5 * t4));
            let u2 = (function(t5, e5, i5) {
              let n2 = i5;
              for (let i6 = 1; i6 < 12; i6++) n2 -= t5(n2) / e5(n2);
              return n2;
            })(a2, l3, 5 / t4);
            if (t4 = (0, s.f)(t4), isNaN(u2))
              return { stiffness: 100, damping: 10, duration: t4 };
            {
              let e5 = u2 * u2 * o2;
              return {
                stiffness: e5,
                damping: 2 * h2 * Math.sqrt(o2 * e5),
                duration: t4
              };
            }
          })({ ...t3, velocity: 0 });
          (e3 = { ...e3, ...i3, mass: 1 }).isResolvedFromDuration = true;
        }
      return e3;
    })({ ...x, velocity: -(0, s.X)(x.velocity || 0) }), C = P / (2 * Math.sqrt(T * A)), M = (0, s.X)(Math.sqrt(T / A)), D = C * M, R = {
      target: S,
      delta: S - w,
      velocity: E || 0,
      restSpeed: 0,
      restDelta: 0
    }, L = () => {
      let t3 = 5 > Math.abs(R.delta);
      R.restSpeed = x.restSpeed || (t3 ? h : u), R.restDelta = x.restDelta || (t3 ? d : c);
    };
    if (L(), C < 1) {
      let t3 = p(M, C), e3 = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
      g = () => {
        e3.A = (R.velocity + D * R.delta) / t3, e3.sinC = D * e3.A + R.delta * t3, e3.cosC = D * R.delta - e3.A * t3;
      };
      let n2 = (i3) => {
        i3 !== e3.t && (e3.t = i3, e3.env = Math.exp(-D * i3), e3.sin = Math.sin(t3 * i3), e3.cos = Math.cos(t3 * i3));
      };
      i2 = (t4) => (n2(t4), R.target - e3.env * (e3.A * e3.sin + R.delta * e3.cos)), l2 = (t4) => (n2(t4), e3.env * (e3.sinC * e3.sin + e3.cosC * e3.cos));
    } else if (1 === C) {
      i2 = (t4) => R.target - Math.exp(-M * t4) * (R.delta + (R.velocity + M * R.delta) * t4);
      let t3 = { C: 0 };
      g = () => {
        t3.C = R.velocity + M * R.delta;
      }, l2 = (e3) => Math.exp(-M * e3) * (M * t3.C * e3 - R.velocity);
    } else {
      let t3 = M * Math.sqrt(C * C - 1);
      i2 = (e4) => {
        let i3 = Math.exp(-D * e4), n2 = Math.min(t3 * e4, 300);
        return R.target - i3 * ((R.velocity + D * R.delta) * Math.sinh(n2) + t3 * R.delta * Math.cosh(n2)) / t3;
      };
      let e3 = { P: 0, sinh: 0, cosh: 0 };
      g = () => {
        e3.P = (R.velocity + D * R.delta) / t3, e3.sinh = D * e3.P - R.delta * t3, e3.cosh = D * R.delta - e3.P * t3;
      }, l2 = (i3) => {
        let n2 = Math.exp(-D * i3), s2 = Math.min(t3 * i3, 300);
        return n2 * (e3.sinh * Math.sinh(s2) + e3.cosh * Math.cosh(s2));
      };
    }
    g();
    let B = !v(x, f) && v(x, m), j = V && k || null, F = {
      calculatedDuration: j,
      retarget: (t3, e3) => {
        R.target = t3[t3.length - 1], R.delta = R.target - t3[0], R.velocity = B ? 0 : -(0, s.X)(e3), x.restSpeed && x.restDelta || L(), F.calculatedDuration = j, b.done = false, g();
      },
      velocity: (t3) => (0, s.f)(l2(t3)),
      next: (t3) => {
        let e3 = i2(t3);
        return V ? b.done = t3 >= k : b.done = Math.abs((0, s.f)(l2(t3))) <= R.restSpeed && Math.abs(R.target - e3) <= R.restDelta, b.value = b.done ? R.target : e3, b;
      },
      toString: () => {
        let t3 = Math.min((0, a.t)(F), a.Y), e3 = (0, o.K)((e4) => F.next(t3 * e4).value, t3, 30);
        return t3 + "ms " + e3;
      },
      toTransition: () => {
      }
    };
    return F;
  }
  y.applyToOptions = (t2) => {
    let e2 = (0, l.X)(t2, 100, y);
    return t2.ease = e2.ease, t2.duration = (0, s.f)(e2.duration), t2.type = "keyframes", t2;
  };
}

__m(__module,__exports,__require);
}