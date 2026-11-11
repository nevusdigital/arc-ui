function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { OU: () => h, Ql: () => u, Ww: () => p, hq: () => r, o4: () => l });
  var n = i(56260), s = i(33411);
  function r(t2, e2, i2) {
    return i2 + e2 * (t2 - i2);
  }
  function o(t2, e2, i2, n2, s2) {
    return void 0 !== s2 && (t2 = n2 + s2 * (t2 - n2)), n2 + i2 * (t2 - n2) + e2;
  }
  function a(t2, e2 = 0, i2 = 1, n2, s2) {
    t2.min = o(t2.min, e2, i2, n2, s2), t2.max = o(t2.max, e2, i2, n2, s2);
  }
  function l(t2, { x: e2, y: i2 }) {
    a(t2.x, e2.translate, e2.scale, e2.originPoint), a(t2.y, i2.translate, i2.scale, i2.originPoint);
  }
  function h(t2, e2, i2, n2 = false) {
    let r2, o2, a2 = i2.length;
    if (a2) {
      e2.x = e2.y = 1;
      for (let h2 = 0; h2 < a2; h2++) {
        o2 = (r2 = i2[h2]).projectionDelta;
        let { visualElement: a3 } = r2.options;
        (!a3 || !a3.props.style || "contents" !== a3.props.style.display) && (n2 && r2.options.layoutScroll && r2.scroll && r2 !== r2.root && (u(t2.x, -r2.scroll.offset.x), u(t2.y, -r2.scroll.offset.y)), o2 && (e2.x *= o2.x.scale, e2.y *= o2.y.scale, l(t2, o2)), n2 && (0, s.HD)(r2.latestValues) && p(t2, r2.latestValues, r2.layout?.layoutBox));
      }
      e2.x < 1.0000000000001 && e2.x > 0.999999999999 && (e2.x = 1), e2.y < 1.0000000000001 && e2.y > 0.999999999999 && (e2.y = 1);
    }
  }
  function u(t2, e2) {
    t2.min += e2, t2.max += e2;
  }
  function d(t2, e2, i2, s2, r2 = 0.5) {
    let o2 = (0, n.k)(t2.min, t2.max, r2);
    a(t2, e2, i2, o2, s2);
  }
  function c(t2, e2) {
    return "string" == typeof t2 ? parseFloat(t2) / 100 * (e2.max - e2.min) : t2;
  }
  function p(t2, e2, i2) {
    let n2 = i2 ?? t2;
    d(t2.x, c(e2.x, n2.x), e2.scaleX, e2.scale, e2.originX), d(t2.y, c(e2.y, n2.y), e2.scaleY, e2.scale, e2.originY);
  }
}

__m(__module,__exports,__require);
}