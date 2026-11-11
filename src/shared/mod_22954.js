function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { Eq: () => l });
  var r = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), a = {}, c = 0, i = function(e2) {
    return e2 && (e2.host || i(e2.parentNode));
  }, u = function(e2, t2, n2, u2) {
    var l2 = (Array.isArray(e2) ? e2 : [e2]).map(function(e3) {
      if (t2.contains(e3)) return e3;
      var n3 = i(e3);
      return n3 && t2.contains(n3) ? n3 : (console.error(
        "aria-hidden",
        e3,
        "in not contained inside",
        t2,
        ". Doing nothing"
      ), null);
    }).filter(function(e3) {
      return !!e3;
    });
    a[n2] || (a[n2] = /* @__PURE__ */ new WeakMap());
    var s = a[n2], d = [], f = /* @__PURE__ */ new Set(), v = new Set(l2), p = function(e3) {
      !e3 || f.has(e3) || (f.add(e3), p(e3.parentNode));
    };
    l2.forEach(p);
    var h = function(e3) {
      !e3 || v.has(e3) || Array.prototype.forEach.call(e3.children, function(e4) {
        if (f.has(e4)) h(e4);
        else
          try {
            var t3 = e4.getAttribute(u2), a2 = null !== t3 && "false" !== t3, c2 = (r.get(e4) || 0) + 1, i2 = (s.get(e4) || 0) + 1;
            r.set(e4, c2), s.set(e4, i2), d.push(e4), 1 === c2 && a2 && o.set(e4, true), 1 === i2 && e4.setAttribute(n2, "true"), a2 || e4.setAttribute(u2, "true");
          } catch (t4) {
            console.error("aria-hidden: cannot operate on ", e4, t4);
          }
      });
    };
    return h(t2), f.clear(), c++, function() {
      d.forEach(function(e3) {
        var t3 = r.get(e3) - 1, a2 = s.get(e3) - 1;
        r.set(e3, t3), s.set(e3, a2), t3 || (o.has(e3) || e3.removeAttribute(u2), o.delete(e3)), a2 || e3.removeAttribute(n2);
      }), --c || (r = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), a = {});
    };
  }, l = function(e2, t2, n2) {
    void 0 === n2 && (n2 = "data-aria-hidden");
    var r2 = Array.from(Array.isArray(e2) ? e2 : [e2]), o2 = t2 || ("u" < typeof document ? null : (Array.isArray(e2) ? e2[0] : e2).ownerDocument.body);
    return o2 ? (r2.push.apply(
      r2,
      Array.from(o2.querySelectorAll("[aria-live], script"))
    ), u(r2, o2, n2, "aria-hidden")) : function() {
      return null;
    };
  };
}

__m(__module,__exports,__require);
}