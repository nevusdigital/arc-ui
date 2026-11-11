function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { A: () => r });
  var n = i(12115), s = i(90209);
  function r(t2, e2 = [], i2 = []) {
    let o, a = "string" == typeof t2 ? (function(t3, e3, i3 = []) {
      if (null == e3)
        throw Error(
          "[lucide]: iconNode is required when icon name is used"
        );
      return {
        name: t3?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        size: 24,
        node: e3,
        ...i3.length > 0 ? { aliases: i3 } : {}
      };
    })(t2, e2, i2) : t2, l = (0, n.forwardRef)(
      ({ className: t3, ...e3 }, i3) => (0, n.createElement)(s.default, {
        ref: i3,
        icon: a,
        className: t3,
        ...e3
      })
    );
    return a.name && (l.displayName = (o = ((t3) => {
      let e3 = "", i3 = false;
      for (let n2 of t3) {
        if ("-" === n2 || "_" === n2 || n2 <= " ") {
          i3 = e3.length > 0;
          continue;
        }
        0 === e3.length ? e3 += n2.toLowerCase() : e3 += i3 ? n2.toUpperCase() : n2, i3 = false;
      }
      return e3;
    })(a.name)).charAt(0).toUpperCase() + o.slice(1)), l;
  }
}

__m(__module,__exports,__require);
}