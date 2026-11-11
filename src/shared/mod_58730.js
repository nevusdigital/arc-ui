function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  var n = r(12115);
  function a(e2) {
    var t2 = "https://react.dev/errors/" + e2;
    if (1 < arguments.length) {
      t2 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r2 = 2; r2 < arguments.length; r2++)
        t2 += "&args[]=" + encodeURIComponent(arguments[r2]);
    }
    return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var l = {
    d: {
      f: u,
      r: function() {
        throw Error(a(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, o = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.recoverable"), s = /* @__PURE__ */ Symbol.for("react.optimistic_key"), c = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(e2, t2) {
    return "font" === e2 ? "" : "string" == typeof t2 ? "use-credentials" === t2 ? t2 : "" : void 0;
  }
  t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, t.browser = function() {
    var e2 = Error(a(603));
    return Object.defineProperty(e2, "$$typeof", { value: i }), e2;
  }, t.createPortal = function(e2, t2) {
    var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!t2 || 1 !== t2.nodeType && 9 !== t2.nodeType && 11 !== t2.nodeType)
      throw Error(a(299));
    return (function(e3, t3, r3) {
      var n2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: o,
        key: null == n2 ? null : n2 === s ? s : "" + n2,
        children: e3,
        containerInfo: t3,
        implementation: r3
      };
    })(e2, t2, null, r2);
  }, t.flushSync = function(e2) {
    var t2 = c.T, r2 = l.p;
    try {
      if (c.T = null, l.p = 2, e2) return e2();
    } finally {
      c.T = t2, l.p = r2, l.d.f();
    }
  }, t.preconnect = function(e2, t2) {
    "string" == typeof e2 && (t2 = t2 ? "string" == typeof (t2 = t2.crossOrigin) ? "use-credentials" === t2 ? t2 : "" : void 0 : null, l.d.C(e2, t2));
  }, t.prefetchDNS = function(e2) {
    "string" == typeof e2 && l.d.D(e2);
  }, t.preinit = function(e2, t2) {
    if ("string" == typeof e2 && t2 && "string" == typeof t2.as) {
      var r2 = t2.as, n2 = f(r2, t2.crossOrigin), a2 = "string" == typeof t2.integrity ? t2.integrity : void 0, u2 = "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0;
      "style" === r2 ? l.d.S(e2, "string" == typeof t2.precedence ? t2.precedence : void 0, {
        crossOrigin: n2,
        integrity: a2,
        fetchPriority: u2
      }) : "script" === r2 && l.d.X(e2, {
        crossOrigin: n2,
        integrity: a2,
        fetchPriority: u2,
        nonce: "string" == typeof t2.nonce ? t2.nonce : void 0
      });
    }
  }, t.preinitModule = function(e2, t2) {
    if ("string" == typeof e2)
      if ("object" == typeof t2 && null !== t2) {
        if (null == t2.as || "script" === t2.as) {
          var r2 = f(t2.as, t2.crossOrigin);
          l.d.M(e2, {
            crossOrigin: r2,
            integrity: "string" == typeof t2.integrity ? t2.integrity : void 0,
            nonce: "string" == typeof t2.nonce ? t2.nonce : void 0,
            fetchPriority: "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0
          });
        }
      } else null == t2 && l.d.M(e2);
  }, t.preload = function(e2, t2) {
    if ("string" == typeof e2 && "object" == typeof t2 && null !== t2 && "string" == typeof t2.as) {
      var r2 = t2.as, n2 = f(r2, t2.crossOrigin);
      l.d.L(e2, r2, {
        crossOrigin: n2,
        integrity: "string" == typeof t2.integrity ? t2.integrity : void 0,
        nonce: "string" == typeof t2.nonce ? t2.nonce : void 0,
        type: "string" == typeof t2.type ? t2.type : void 0,
        fetchPriority: "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0,
        referrerPolicy: "string" == typeof t2.referrerPolicy ? t2.referrerPolicy : void 0,
        imageSrcSet: "string" == typeof t2.imageSrcSet ? t2.imageSrcSet : void 0,
        imageSizes: "string" == typeof t2.imageSizes ? t2.imageSizes : void 0,
        media: "string" == typeof t2.media ? t2.media : void 0
      });
    }
  }, t.preloadModule = function(e2, t2) {
    if ("string" == typeof e2)
      if (t2) {
        var r2 = f(t2.as, t2.crossOrigin);
        l.d.m(e2, {
          as: "string" == typeof t2.as && "script" !== t2.as ? t2.as : void 0,
          crossOrigin: r2,
          integrity: "string" == typeof t2.integrity ? t2.integrity : void 0,
          nonce: "string" == typeof t2.nonce ? t2.nonce : void 0,
          fetchPriority: "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0
        });
      } else l.d.m(e2);
  }, t.requestFormReset = function(e2) {
    l.d.r(e2);
  }, t.unstable_batchedUpdates = function(e2, t2) {
    return e2(t2);
  }, t.useFormState = function(e2, t2, r2) {
    return c.H.useFormState(e2, t2, r2);
  }, t.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, t.version = "19.3.0-canary-cbb046ab-20260731";
}

__m(__module,__exports,__require);
}