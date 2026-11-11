function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { _: () => v });
  var n = i(33140), s = i(75319), r = i(30123), o = i(9247), a = i(67119), l = i(61638), h = i(61151), u = i(36381), d = i(27933);
  let c = "u" > typeof window;
  function p(t2, e2, { delay: i2 = 0, transitionOverride: n2, type: m2 } = {}) {
    let { transition: f2, transitionEnd: v2, ...y } = e2, g = t2.getDefaultTransition();
    f2 = f2 ? (0, r.K)(f2, g) : g;
    let x = f2?.reduceMotion, w = f2?.skipAnimations;
    n2 && (f2 = n2);
    let S = [], b = m2 && t2.animationState && t2.animationState.getState()[m2], T = f2?.path;
    for (let e3 in T && T.animateVisualElement(t2, y, f2, i2, S), y) {
      let n3 = t2.getValue(e3, t2.latestValues[e3] ?? null), r2 = y[e3];
      if (void 0 === r2 || b && (function({ protectedKeys: t3, needsAnimating: e4 }, i3) {
        let n4 = t3.hasOwnProperty(i3) && true !== e4[i3];
        return e4[i3] = false, n4;
      })(b, e3))
        continue;
      let a2 = { delay: i2, ...(0, s.r)(f2 || {}, e3) };
      w && (a2.skipAnimations = true);
      let p2 = n3.get();
      if (void 0 !== p2 && !n3.isAnimating() && !Array.isArray(r2) && r2 === p2 && !a2.velocity) {
        d.Gt.update(() => n3.set(r2));
        continue;
      }
      let m3 = false;
      if (c && window.MotionHandoffAnimation) {
        let i3 = (0, h.P)(t2);
        if (i3) {
          let t3 = window.MotionHandoffAnimation(i3, e3, d.Gt);
          null !== t3 && (a2.startTime = t3, m3 = true);
        }
      }
      (0, l.g)(t2, e3);
      let v3 = x ?? t2.shouldReduceMotion;
      n3.start((0, u.f)(e3, n3, r2, v3 && o.$.has(e3) ? { type: false } : a2, t2, m3));
      let g2 = n3.animation;
      g2 && S.push(g2);
    }
    if (v2) {
      let e3 = () => d.Gt.update(() => {
        v2 && (0, a.U)(t2, v2);
      });
      S.length ? Promise.all(S).then(e3) : e3();
    }
    return S;
  }
  var m = i(12663);
  function f(t2, e2, i2 = {}) {
    let s2 = (0, n.K)(
      t2,
      e2,
      "exit" === i2.type ? t2.presenceContext?.custom : void 0
    ), { transition: r2 = t2.getDefaultTransition() || {} } = s2 || {};
    i2.transitionOverride && (r2 = i2.transitionOverride);
    let o2 = s2 ? () => Promise.all(p(t2, s2, i2)) : () => Promise.resolve(), a2 = t2.variantChildren && t2.variantChildren.size ? (n2 = 0) => {
      let {
        delayChildren: s3 = 0,
        staggerChildren: o3,
        staggerDirection: a3
      } = r2;
      return (function(t3, e3, i3 = 0, n3 = 0, s4 = 0, r3 = 1, o4) {
        let a4 = [];
        for (let l3 of t3.variantChildren)
          l3.notify("AnimationStart", e3), a4.push(
            f(l3, e3, {
              ...o4,
              delay: i3 + ("function" == typeof n3 ? 0 : n3) + (0, m.L)(t3.variantChildren, l3, n3, s4, r3)
            }).then(() => l3.notify("AnimationComplete", e3))
          );
        return Promise.all(a4);
      })(t2, e2, n2, s3, o3, a3, i2);
    } : () => Promise.resolve(), { when: l2 } = r2;
    if (!l2) return Promise.all([o2(), a2(i2.delay)]);
    {
      let [t3, e3] = "beforeChildren" === l2 ? [o2, a2] : [a2, o2];
      return t3().then(() => e3());
    }
  }
  function v(t2, e2, i2 = {}) {
    let s2;
    if (t2.notify("AnimationStart", e2), Array.isArray(e2))
      s2 = Promise.all(e2.map((e3) => f(t2, e3, i2)));
    else if ("string" == typeof e2) s2 = f(t2, e2, i2);
    else {
      let r2 = "function" == typeof e2 ? (0, n.K)(t2, e2, i2.custom) : e2;
      s2 = Promise.all(p(t2, r2, i2));
    }
    return s2.then(() => {
      t2.notify("AnimationComplete", e2);
    });
  }
}

__m(__module,__exports,__require);
}