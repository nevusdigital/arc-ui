function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { Vf: () => c, f: () => m, nK: () => d });
  var n = i(77054), s = i(21620), r = i(71939);
  let o = new RegExp(s.S.source), a = RegExp(
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu.source,
    "i"
  ), l = "number", h = "color", u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function d(t2) {
    let e2 = t2.toString();
    return o.test(e2) || a.test(e2);
  }
  function c(t2) {
    let e2 = t2.toString(), i2 = [], s2 = { color: [], number: [], var: [] }, r2 = [], o2 = 0, a2 = e2.replace(
      u,
      (t3) => (n.y.test(t3) ? (s2.color.push(o2), r2.push(h), i2.push(n.y.parse(t3))) : t3.startsWith("var(") ? (s2.var.push(o2), r2.push("var"), i2.push(t3)) : (s2.number.push(o2), r2.push(l), i2.push(parseFloat(t3))), ++o2, "${}")
    ).split("${}");
    return { values: i2, split: a2, indexes: s2, types: r2 };
  }
  function p({ split: t2, types: e2 }) {
    let i2 = t2.length;
    return (s2) => {
      let o2 = "";
      for (let a2 = 0; a2 < i2; a2++)
        if (o2 += t2[a2], void 0 !== s2[a2]) {
          let t3 = e2[a2];
          t3 === l ? o2 += (0, r.a)(s2[a2]) : t3 === h ? o2 += n.y.transform(s2[a2]) : o2 += s2[a2];
        }
      return o2;
    };
  }
  let m = {
    test: function(t2) {
      return isNaN(t2) && "string" == typeof t2 && (o.test(t2) || a.test(t2));
    },
    parse: function(t2) {
      return c(t2).values;
    },
    createTransformer: function(t2) {
      return p(c(t2));
    },
    getAnimatableNone: function(t2) {
      let e2 = c(t2);
      return p(e2)(
        e2.values.map(
          (t3, i2) => ((t4, e3) => "number" == typeof t4 ? e3?.trim().endsWith("/") ? t4 : 0 : "number" == typeof t4 ? 0 : n.y.test(t4) ? n.y.getAnimatableNone(t4) : t4)(t3, e2.split[i2])
        )
      );
    }
  };
}

__m(__module,__exports,__require);
}