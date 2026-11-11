function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { j: () => k });
  var n = i(71939), s = i(34017), r = i(5556), o = i(39896), a = i(77054), l = i(83399), h = i(30281), u = i(88158);
  function d(t2, e2, i2) {
    return (i2 < 0 && (i2 += 1), i2 > 1 && (i2 -= 1), i2 < 1 / 6) ? t2 + (e2 - t2) * 6 * i2 : i2 < 0.5 ? e2 : i2 < 2 / 3 ? t2 + (e2 - t2) * (2 / 3 - i2) * 6 : t2;
  }
  var c = i(27994);
  function p(t2, e2) {
    return (i2) => i2 > 0 ? e2 : t2;
  }
  var m = i(56260);
  let f = (t2, e2, i2) => {
    let n2 = t2 * t2, s2 = i2 * (e2 * e2 - n2) + n2;
    return s2 < 0 ? 0 : Math.sqrt(s2);
  }, v = [h.u, c.B, u.V];
  function y(t2) {
    let e2 = v.find((e3) => e3.test(t2));
    if (!e2)
      return (0, r.$)(
        false,
        `'${t2}' is not an animatable color. Use the equivalent color code instead.`,
        "color-not-animatable"
      ), false;
    let i2 = e2.parse(t2);
    return e2 === u.V && (i2 = (function({ hue: t3, saturation: e3, lightness: i3, alpha: n2 }) {
      t3 /= 360, i3 /= 100;
      let s2 = 0, r2 = 0, o2 = 0;
      if (e3 /= 100) {
        let n3 = i3 < 0.5 ? i3 * (1 + e3) : i3 + e3 - i3 * e3, a2 = 2 * i3 - n3;
        s2 = d(a2, n3, t3 + 1 / 3), r2 = d(a2, n3, t3), o2 = d(a2, n3, t3 - 1 / 3);
      } else s2 = r2 = o2 = i3;
      return {
        red: Math.round(255 * s2),
        green: Math.round(255 * r2),
        blue: Math.round(255 * o2),
        alpha: n2
      };
    })(i2)), i2;
  }
  let g = (t2, e2) => {
    let i2 = y(t2), n2 = y(e2);
    if (!i2 || !n2) return p(t2, e2);
    let s2 = { ...i2 };
    return (t3) => (s2.red = f(i2.red, n2.red, t3), s2.green = f(i2.green, n2.green, t3), s2.blue = f(i2.blue, n2.blue, t3), s2.alpha = (0, m.k)(i2.alpha, n2.alpha, t3), c.B.transform(s2));
  }, x = /* @__PURE__ */ new Set(["none", "hidden"]);
  function w(t2, e2) {
    return (i2) => (0, m.k)(t2, e2, i2);
  }
  function S(t2) {
    return "number" == typeof t2 ? w : "string" == typeof t2 ? (0, o.pG)(t2) ? p : a.y.test(t2) ? g : P : Array.isArray(t2) ? b : "object" == typeof t2 ? a.y.test(t2) ? g : T : p;
  }
  function b(t2, e2) {
    let i2 = [...t2], n2 = i2.length, s2 = t2.map((t3, i3) => S(t3)(t3, e2[i3]));
    return (t3) => {
      for (let e3 = 0; e3 < n2; e3++) i2[e3] = s2[e3](t3);
      return i2;
    };
  }
  function T(t2, e2) {
    let i2 = { ...t2, ...e2 }, n2 = {};
    for (let s2 in i2)
      void 0 !== t2[s2] && void 0 !== e2[s2] && (n2[s2] = S(t2[s2])(t2[s2], e2[s2]));
    return (t3) => {
      for (let e3 in n2) i2[e3] = n2[e3](t3);
      return i2;
    };
  }
  let P = (t2, e2) => {
    let i2 = l.f.createTransformer(e2), n2 = (0, l.Vf)(t2), o2 = (0, l.Vf)(e2);
    if (!(n2.indexes.var.length === o2.indexes.var.length && n2.indexes.color.length === o2.indexes.color.length && n2.indexes.number.length >= o2.indexes.number.length))
      return (0, r.$)(
        true,
        `Complex values '${t2}' and '${e2}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different"
      ), p(t2, e2);
    if (x.has(t2) && !o2.values.length || x.has(e2) && !n2.values.length)
      return x.has(t2) ? (i3) => i3 <= 0 ? t2 : e2 : (i3) => i3 >= 1 ? e2 : t2;
    return (0, s.F)(
      b(
        (function(t3, e3) {
          let i3 = [], n3 = { color: 0, var: 0, number: 0 };
          for (let s2 = 0; s2 < e3.values.length; s2++) {
            let r2 = e3.types[s2], o3 = t3.indexes[r2][n3[r2]], a2 = t3.values[o3] ?? 0;
            i3[s2] = a2, n3[r2]++;
          }
          return i3;
        })(n2, o2),
        o2.values
      ),
      i2
    );
  }, A = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
  function k(t2, e2, i2) {
    if ("number" == typeof t2 && "number" == typeof e2 && "number" == typeof i2)
      return (0, m.k)(t2, e2, i2);
    if ("string" == typeof t2 && "string" == typeof e2) {
      let i3 = (function(t3, e3) {
        let i4 = A.exec(t3);
        if (!i4) return;
        let s2 = A.exec(e3);
        if (!s2 || i4[2] !== s2[2]) return;
        let r2 = i4[2], o2 = parseFloat(i4[1]), a2 = parseFloat(s2[1]);
        return (t4) => (0, n.a)((0, m.k)(o2, a2, t4)) + r2;
      })(t2, e2);
      if (i3) return i3;
    }
    return S(t2)(t2, e2);
  }
}

__m(__module,__exports,__require);
}