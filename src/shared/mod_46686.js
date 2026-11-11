function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  Object.defineProperty(t, "__esModule", { value: true });
  var i = {
    default: function() {
      return m;
    },
    defaultHead: function() {
      return c;
    }
  };
  for (var n in i) Object.defineProperty(t, n, { enumerable: true, get: i[n] });
  let a = r(73623), o = r(66388), l = r(95155), s = o._(r(12115)), u = a._(r(76899)), d = r(75368);
  function c() {
    return [
      (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
      (0, l.jsx)(
        "meta",
        { name: "viewport", content: "width=device-width" },
        "viewport"
      )
    ];
  }
  function f(e2, t2) {
    return "string" == typeof t2 || "number" == typeof t2 ? e2 : t2.type === s.default.Fragment ? e2.concat(
      s.default.Children.toArray(t2.props.children).reduce(
        (e3, t3) => "string" == typeof t3 || "number" == typeof t3 ? e3 : e3.concat(t3),
        []
      )
    ) : e2.concat(t2);
  }
  let p = ["name", "httpEquiv", "charSet", "itemProp"];
  function g(e2) {
    let t2, r2, i2, n2;
    return e2.reduce(f, []).reverse().concat(c().reverse()).filter(
      (t2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set(), i2 = /* @__PURE__ */ new Set(), n2 = {}, (e3) => {
        let a2 = true, o2 = false;
        if (e3.key && "number" != typeof e3.key && e3.key.indexOf("$") > 0) {
          o2 = true;
          let r3 = e3.key.slice(e3.key.indexOf("$") + 1);
          t2.has(r3) ? a2 = false : t2.add(r3);
        }
        switch (e3.type) {
          case "title":
          case "base":
            r2.has(e3.type) ? a2 = false : r2.add(e3.type);
            break;
          case "meta":
            for (let t3 = 0, r3 = p.length; t3 < r3; t3++) {
              let r4 = p[t3];
              if (e3.props.hasOwnProperty(r4))
                if ("charSet" === r4) i2.has(r4) ? a2 = false : i2.add(r4);
                else {
                  let t4 = e3.props[r4], i3 = n2[r4] || /* @__PURE__ */ new Set();
                  ("name" !== r4 || !o2) && i3.has(t4) ? a2 = false : (i3.add(t4), n2[r4] = i3);
                }
            }
        }
        return a2;
      })
    ).reverse().map((e3, t3) => {
      let r3 = e3.key || t3;
      return s.default.cloneElement(e3, { key: r3 });
    });
  }
  let m = function({ children: e2 }) {
    let t2 = (0, s.useContext)(d.HeadManagerContext);
    return (0, l.jsx)(u.default, {
      reduceComponentsToState: g,
      headManager: t2,
      children: e2
    });
  };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", { value: true }), Object.assign(t.default, t), e.exports = t.default);
}

__m(__module,__exports,__require);
}