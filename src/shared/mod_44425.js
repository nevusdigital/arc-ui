function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { B: () => a, W: () => o });
  var n = i(54714);
  let s = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, r = { offset: "strokeDashoffset", array: "strokeDasharray" }, o = [
    "transform",
    "opacity",
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function a(t2, {
    attrX: e2,
    attrY: i2,
    attrScale: l,
    pathLength: h,
    pathSpacing: u = 1,
    pathOffset: d = 0,
    ...c
  }, p, m, f) {
    if ((0, n.O)(t2, c, m), p) {
      t2.style.viewBox && (t2.attrs.viewBox = t2.style.viewBox);
      return;
    }
    t2.attrs = t2.style, t2.style = {};
    let { attrs: v, style: y } = t2;
    for (let t3 of o) void 0 !== v[t3] && (y[t3] = v[t3], delete v[t3]);
    (y.transform || v.transformOrigin) && (y.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), y.transform && (y.transformBox = f?.transformBox ?? "fill-box", delete v.transformBox), void 0 !== e2 && (v.x = e2), void 0 !== i2 && (v.y = i2), void 0 !== l && (v.scale = l), void 0 !== h && (function(t3, e3, i3 = 1, n2 = 0, o2 = true) {
      t3.pathLength = 1;
      let a2 = o2 ? s : r;
      t3[a2.offset] = `${-n2}`, t3[a2.array] = `${e3} ${i3}`;
    })(v, h, u, d, false);
  }
}

__m(__module,__exports,__require);
}