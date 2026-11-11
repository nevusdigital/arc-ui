function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  var n = r(41463), a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), c = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), h = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.view_transition"), g = Symbol.iterator, v = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, m = Object.assign, b = {};
  function E(e2, t2, r2) {
    this.props = e2, this.context = t2, this.refs = b, this.updater = r2 || v;
  }
  function P() {
  }
  function R(e2, t2, r2) {
    this.props = e2, this.context = t2, this.refs = b, this.updater = r2 || v;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(e2, t2) {
    if ("object" != typeof e2 && "function" != typeof e2 && null != e2)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e2, t2, "setState");
  }, E.prototype.forceUpdate = function(e2) {
    this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
  }, P.prototype = E.prototype;
  var S = R.prototype = new P();
  S.constructor = R, m(S, E.prototype), S.isPureReactComponent = true;
  var O = Array.isArray;
  function T() {
  }
  var j = { H: null, A: null, T: null, S: null }, C = Object.prototype.hasOwnProperty;
  function w(e2, t2, r2) {
    var n2 = r2.ref;
    return {
      $$typeof: a,
      type: e2,
      key: t2,
      ref: void 0 !== n2 ? n2 : null,
      props: r2
    };
  }
  function A(e2) {
    return "object" == typeof e2 && null !== e2 && e2.$$typeof === a;
  }
  var M = /\/+/g;
  function x(e2, t2) {
    var r2, n2;
    return "object" == typeof e2 && null !== e2 && null != e2.key ? (r2 = "" + e2.key, n2 = { "=": "=0", ":": "=2" }, "$" + r2.replace(/[=:]/g, function(e3) {
      return n2[e3];
    })) : t2.toString(36);
  }
  function N(e2, t2, r2) {
    if (null == e2) return e2;
    var n2 = [], l2 = 0;
    return !(function e3(t3, r3, n3, l3, o2) {
      var i2, s2, c2, f2 = typeof t3;
      ("undefined" === f2 || "boolean" === f2) && (t3 = null);
      var d2 = false;
      if (null === t3) d2 = true;
      else
        switch (f2) {
          case "bigint":
          case "string":
          case "number":
            d2 = true;
            break;
          case "object":
            switch (t3.$$typeof) {
              case a:
              case u:
                d2 = true;
                break;
              case h:
                return e3((d2 = t3._init)(t3._payload), r3, n3, l3, o2);
            }
        }
      if (d2)
        return o2 = o2(t3), d2 = "" === l3 ? "." + x(t3, 0) : l3, O(o2) ? (n3 = "", null != d2 && (n3 = d2.replace(M, "$&/") + "/"), e3(o2, r3, n3, "", function(e4) {
          return e4;
        })) : null != o2 && (A(o2) && (i2 = o2, s2 = n3 + (null == o2.key || t3 && t3.key === o2.key ? "" : ("" + o2.key).replace(M, "$&/") + "/") + d2, o2 = w(i2.type, s2, i2.props)), r3.push(o2)), 1;
      d2 = 0;
      var p2 = "" === l3 ? "." : l3 + ":";
      if (O(t3))
        for (var y2 = 0; y2 < t3.length; y2++)
          f2 = p2 + x(l3 = t3[y2], y2), d2 += e3(l3, r3, n3, f2, o2);
      else if ("function" == typeof (y2 = null === (c2 = t3) || "object" != typeof c2 ? null : "function" == typeof (c2 = g && c2[g] || c2["@@iterator"]) ? c2 : null))
        for (t3 = y2.call(t3), y2 = 0; !(l3 = t3.next()).done; )
          f2 = p2 + x(l3 = l3.value, y2++), d2 += e3(l3, r3, n3, f2, o2);
      else if ("object" === f2) {
        if ("function" == typeof t3.then)
          return e3(
            (function(e4) {
              switch (e4.status) {
                case "fulfilled":
                  return e4.value;
                case "rejected":
                  throw e4.reason;
                default:
                  switch ("string" == typeof e4.status ? e4.then(T, T) : (e4.status = "pending", e4.then(
                    function(t4) {
                      "pending" === e4.status && (e4.status = "fulfilled", e4.value = t4);
                    },
                    function(t4) {
                      "pending" === e4.status && (e4.status = "rejected", e4.reason = t4);
                    }
                  )), e4.status) {
                    case "fulfilled":
                      return e4.value;
                    case "rejected":
                      throw e4.reason;
                  }
              }
              throw e4;
            })(t3),
            r3,
            n3,
            l3,
            o2
          );
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === (r3 = String(t3)) ? "object with keys {" + Object.keys(t3).join(", ") + "}" : r3) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return d2;
    })(e2, n2, "", "", function(e3) {
      return t2.call(r2, e3, l2++);
    }), n2;
  }
  function I(e2) {
    if (-1 === e2._status) {
      var t2 = (0, e2._result)();
      t2.then(
        function(r2) {
          (0 === e2._status || -1 === e2._status) && (e2._status = 1, e2._result = r2, void 0 === t2.status && (t2.status = "fulfilled", t2.value = r2));
        },
        function(r2) {
          (0 === e2._status || -1 === e2._status) && (e2._status = 2, e2._result = r2, void 0 === t2.status && (t2.status = "rejected", t2.reason = r2));
        }
      ), -1 === e2._status && (e2._status = 0, e2._result = t2);
    }
    if (1 === e2._status) return e2._result.default;
    throw e2._result;
  }
  var F = "function" == typeof reportError ? reportError : function(e2) {
    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
      var t2 = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: "object" == typeof e2 && null !== e2 && "string" == typeof e2.message ? String(e2.message) : String(e2),
        error: e2
      });
      if (!window.dispatchEvent(t2)) return;
    } else if ("object" == typeof n && "function" == typeof n.emit)
      return void n.emit("uncaughtException", e2);
    console.error(e2);
  };
  function D(e2) {
    var t2 = j.T, r2 = {};
    r2.types = null !== t2 ? t2.types : null, j.T = r2;
    try {
      var n2 = e2(), a2 = j.S;
      null !== a2 && a2(r2, n2), "object" == typeof n2 && null !== n2 && "function" == typeof n2.then && n2.then(T, F);
    } catch (e3) {
      F(e3);
    } finally {
      null !== t2 && null !== r2.types && (t2.types = r2.types), j.T = t2;
    }
  }
  function L(e2) {
    var t2 = j.T;
    if (null !== t2) {
      var r2 = t2.types;
      null === r2 ? t2.types = [e2] : -1 === r2.indexOf(e2) && r2.push(e2);
    } else D(L.bind(null, e2));
  }
  t.Activity = y, t.Children = {
    map: N,
    forEach: function(e2, t2, r2) {
      N(
        e2,
        function() {
          t2.apply(this, arguments);
        },
        r2
      );
    },
    count: function(e2) {
      var t2 = 0;
      return N(e2, function() {
        t2++;
      }), t2;
    },
    toArray: function(e2) {
      return N(e2, function(e3) {
        return e3;
      }) || [];
    },
    only: function(e2) {
      if (!A(e2))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e2;
    }
  }, t.Component = E, t.Fragment = l, t.Profiler = i, t.PureComponent = R, t.StrictMode = o, t.Suspense = d, t.ViewTransition = _, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, t.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e2) {
      return j.H.useMemoCache(e2);
    }
  }, t.addTransitionType = L, t.cache = function(e2) {
    return function() {
      return e2.apply(null, arguments);
    };
  }, t.cacheSignal = function() {
    return null;
  }, t.cloneElement = function(e2, t2, r2) {
    if (null == e2)
      throw Error(
        "The argument must be a React element, but you passed " + e2 + "."
      );
    var n2 = m({}, e2.props), a2 = e2.key;
    if (null != t2)
      for (u2 in void 0 !== t2.key && (a2 = "" + t2.key), t2)
        C.call(t2, u2) && "key" !== u2 && "__self" !== u2 && "__source" !== u2 && ("ref" !== u2 || void 0 !== t2.ref) && (n2[u2] = t2[u2]);
    var u2 = arguments.length - 2;
    if (1 === u2) n2.children = r2;
    else if (1 < u2) {
      for (var l2 = Array(u2), o2 = 0; o2 < u2; o2++) l2[o2] = arguments[o2 + 2];
      n2.children = l2;
    }
    return w(e2.type, a2, n2);
  }, t.createContext = function(e2) {
    return (e2 = {
      $$typeof: c,
      _currentValue: e2,
      _currentValue2: e2,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }).Provider = e2, e2.Consumer = { $$typeof: s, _context: e2 }, e2;
  }, t.createElement = function(e2, t2, r2) {
    var n2, a2 = {}, u2 = null;
    if (null != t2)
      for (n2 in void 0 !== t2.key && (u2 = "" + t2.key), t2)
        C.call(t2, n2) && "key" !== n2 && "__self" !== n2 && "__source" !== n2 && (a2[n2] = t2[n2]);
    var l2 = arguments.length - 2;
    if (1 === l2) a2.children = r2;
    else if (1 < l2) {
      for (var o2 = Array(l2), i2 = 0; i2 < l2; i2++) o2[i2] = arguments[i2 + 2];
      a2.children = o2;
    }
    if (e2 && e2.defaultProps)
      for (n2 in l2 = e2.defaultProps) void 0 === a2[n2] && (a2[n2] = l2[n2]);
    return w(e2, u2, a2);
  }, t.createRef = function() {
    return { current: null };
  }, t.forwardRef = function(e2) {
    return { $$typeof: f, render: e2 };
  }, t.isValidElement = A, t.lazy = function(e2) {
    return { $$typeof: h, _payload: { _status: -1, _result: e2 }, _init: I };
  }, t.memo = function(e2, t2) {
    return { $$typeof: p, type: e2, compare: void 0 === t2 ? null : t2 };
  }, t.startTransition = D, t.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, t.use = function(e2) {
    return j.H.use(e2);
  }, t.useActionState = function(e2, t2, r2) {
    return j.H.useActionState(e2, t2, r2);
  }, t.useCallback = function(e2, t2) {
    return j.H.useCallback(e2, t2);
  }, t.useContext = function(e2) {
    return j.H.useContext(e2);
  }, t.useDebugValue = function() {
  }, t.useDeferredValue = function(e2, t2) {
    return j.H.useDeferredValue(e2, t2);
  }, t.useEffect = function(e2, t2) {
    return j.H.useEffect(e2, t2);
  }, t.useEffectEvent = function(e2) {
    return j.H.useEffectEvent(e2);
  }, t.useId = function() {
    return j.H.useId();
  }, t.useImperativeHandle = function(e2, t2, r2) {
    return j.H.useImperativeHandle(e2, t2, r2);
  }, t.useInsertionEffect = function(e2, t2) {
    return j.H.useInsertionEffect(e2, t2);
  }, t.useLayoutEffect = function(e2, t2) {
    return j.H.useLayoutEffect(e2, t2);
  }, t.useMemo = function(e2, t2) {
    return j.H.useMemo(e2, t2);
  }, t.useOptimistic = function(e2, t2) {
    return j.H.useOptimistic(e2, t2);
  }, t.useReducer = function(e2, t2, r2) {
    return j.H.useReducer(e2, t2, r2);
  }, t.useRef = function(e2) {
    return j.H.useRef(e2);
  }, t.useState = function(e2) {
    return j.H.useState(e2);
  }, t.useSyncExternalStore = function(e2, t2, r2) {
    return j.H.useSyncExternalStore(e2, t2, r2);
  }, t.useTransition = function() {
    return j.H.useTransition();
  }, t.version = "19.3.0-canary-cbb046ab-20260731";
}

__m(__module,__exports,__require);
}