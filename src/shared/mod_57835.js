function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { I: () => r });
  var n = i(28153);
  let s = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
  ];
  function r(t2, e2) {
    let i2 = false, r2 = true, o = { delta: 0, timestamp: 0, isProcessing: false }, a = () => i2 = true, l = s.reduce(
      (t3, e3) => (t3[e3] = /* @__PURE__ */ (function(t4) {
        let e4 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Set(), n2 = false, s2 = false, r3 = /* @__PURE__ */ new Set(), o2 = { delta: 0, timestamp: 0, isProcessing: false };
        function a2(e5) {
          r3.has(e5) && (i3.add(e5), t4()), e5(o2);
        }
        let l2 = {
          schedule: (t5, s3 = false, o3 = false) => {
            let a3 = o3 && n2 ? e4 : i3;
            return s3 && r3.add(t5), a3.add(t5), t5;
          },
          cancel: (t5) => {
            i3.delete(t5), r3.delete(t5);
          },
          process: (t5) => {
            if (o2 = t5, n2) {
              s2 = true;
              return;
            }
            n2 = true;
            let r4 = e4;
            e4 = i3, i3 = r4, e4.forEach(a2), e4.clear(), n2 = false, s2 && (s2 = false, l2.process(t5));
          }
        };
        return l2;
      })(a), t3),
      {}
    ), {
      setup: h,
      read: u,
      resolveKeyframes: d,
      preUpdate: c,
      update: p,
      preRender: m,
      render: f,
      postRender: v
    } = l, y = () => {
      let s2 = n.W.useManualTiming, a2 = s2 ? o.timestamp : performance.now();
      i2 = false, s2 || (o.delta = r2 ? 1e3 / 60 : Math.max(Math.min(a2 - o.timestamp, 40), 1)), o.timestamp = a2, o.isProcessing = true, h.process(o), u.process(o), d.process(o), c.process(o), p.process(o), m.process(o), f.process(o), v.process(o), o.isProcessing = false, i2 && e2 && (r2 = false, t2(y));
    };
    return {
      schedule: s.reduce((e3, n2) => {
        let s2 = l[n2];
        return e3[n2] = (e4, n3 = false, a2 = false) => (!i2 && (i2 = true, r2 = true, o.isProcessing || t2(y)), s2.schedule(e4, n3, a2)), e3;
      }, {}),
      cancel: (t3) => {
        for (let e3 = 0; e3 < s.length; e3++) l[s[e3]].cancel(t3);
      },
      state: o,
      steps: l
    };
  }
}

__m(__module,__exports,__require);
}