function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  let n, s;
  i.d(e, { X: () => m });
  var r = i(69028), o = i(58392);
  let a = /* @__PURE__ */ new WeakMap(), l = (t2, e2, i2) => (n2, s2) => s2 && s2[0] ? s2[0][t2 + "Size"] : (0, r.x)(n2) && "getBBox" in n2 ? n2.getBBox()[e2] : n2[i2], h = l("inline", "width", "offsetWidth"), u = l("block", "height", "offsetHeight");
  function d({ target: t2, borderBoxSize: e2 }) {
    a.get(t2)?.forEach((i2) => {
      i2(t2, {
        get width() {
          return h(t2, e2);
        },
        get height() {
          return u(t2, e2);
        }
      });
    });
  }
  function c(t2) {
    t2.forEach(d);
  }
  let p = /* @__PURE__ */ new Set();
  function m(t2, e2) {
    let i2;
    return "function" == typeof t2 ? (p.add(t2), s || (s = () => {
      let t3 = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      p.forEach((e3) => e3(t3));
    }, window.addEventListener("resize", s)), () => {
      p.delete(t2), p.size || "function" != typeof s || (window.removeEventListener("resize", s), s = void 0);
    }) : (!n && "u" > typeof ResizeObserver && (n = new ResizeObserver(c)), (i2 = (0, o.K)(t2)).forEach((t3) => {
      let i3 = a.get(t3);
      i3 || (i3 = /* @__PURE__ */ new Set(), a.set(t3, i3)), i3.add(e2), n?.observe(t3);
    }), () => {
      i2.forEach((t3) => {
        let i3 = a.get(t3);
        i3?.delete(e2), i3?.size || n?.unobserve(t3);
      });
    });
  }
}

__m(__module,__exports,__require);
}