function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { O: () => h });
  var n = i(87546), s = i(29543), r = i(25952), o = i(39896);
  let a = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, l = r.U.length;
  function h(t2, e2, i2) {
    let { style: h2, vars: u, transformOrigin: d } = t2, c = false, p = false;
    for (let t3 in e2) {
      let i3 = e2[t3];
      if (r.f.has(t3)) {
        c = true;
        continue;
      }
      if ((0, o.j4)(t3)) {
        u[t3] = i3;
        continue;
      }
      {
        let e3 = (0, n.e)(i3, s.W[t3]);
        t3.startsWith("origin") ? (p = true, d[t3] = e3) : h2[t3] = e3;
      }
    }
    if (!e2.transform && (c || i2 ? h2.transform = (function(t3, e3, i3) {
      let o2 = "", h3 = true;
      for (let u3 = 0; u3 < l; u3++) {
        let l2 = r.U[u3], d2 = t3[l2];
        if (void 0 === d2) continue;
        let c2 = true;
        if ("number" == typeof d2) c2 = d2 === +!!l2.startsWith("scale");
        else {
          let t4 = parseFloat(d2);
          c2 = l2.startsWith("scale") ? 1 === t4 : 0 === t4;
        }
        if (!c2 || i3) {
          let t4 = (0, n.e)(d2, s.W[l2]);
          if (!c2) {
            h3 = false;
            let e4 = a[l2] || l2;
            o2 += `${e4}(${t4}) `;
          }
          i3 && (e3[l2] = t4);
        }
      }
      let u2 = t3.pathRotation;
      return u2 && (h3 = false, o2 += `rotate(${(0, n.e)(u2, s.W.pathRotation)}) `), o2 = o2.trim(), i3 ? o2 = i3(e3, h3 ? "" : o2) : h3 && (o2 = "none"), o2;
    })(e2, t2.transform, i2) : h2.transform && (h2.transform = "none")), p) {
      let { originX: t3 = "50%", originY: e3 = "50%", originZ: i3 = 0 } = d;
      h2.transformOrigin = `${t3} ${e3} ${i3}`;
    }
  }
}

__m(__module,__exports,__require);
}