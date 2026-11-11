function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => z });
  var r, o, a, c, i, u, l, s = function() {
    return (s = Object.assign || function(e2) {
      for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
        for (var o2 in t2 = arguments[n2])
          Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
      return e2;
    }).apply(this, arguments);
  };
  function d(e2, t2) {
    var n2 = {};
    for (var r2 in e2)
      Object.prototype.hasOwnProperty.call(e2, r2) && 0 > t2.indexOf(r2) && (n2[r2] = e2[r2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols)
      for (var o2 = 0, r2 = Object.getOwnPropertySymbols(e2); o2 < r2.length; o2++)
        0 > t2.indexOf(r2[o2]) && Object.prototype.propertyIsEnumerable.call(e2, r2[o2]) && (n2[r2[o2]] = e2[r2[o2]]);
    return n2;
  }
  var f = ("function" == typeof SuppressedError && SuppressedError, n(12115)), v = "right-scroll-bar-position", p = "width-before-scroll-bar";
  function h(e2, t2) {
    return "function" == typeof e2 ? e2(t2) : e2 && (e2.current = t2), e2;
  }
  var m = "u" > typeof window ? f.useLayoutEffect : f.useEffect, g = /* @__PURE__ */ new WeakMap(), y = (void 0 === r && (r = {}), (void 0 === o && (o = function(e2) {
    return e2;
  }), a = [], c = false, i = {
    read: function() {
      if (c)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
        );
      return a.length ? a[a.length - 1] : null;
    },
    useMedium: function(e2) {
      var t2 = o(e2, c);
      return a.push(t2), function() {
        a = a.filter(function(e3) {
          return e3 !== t2;
        });
      };
    },
    assignSyncMedium: function(e2) {
      for (c = true; a.length; ) {
        var t2 = a;
        a = [], t2.forEach(e2);
      }
      a = {
        push: function(t3) {
          return e2(t3);
        },
        filter: function() {
          return a;
        }
      };
    },
    assignMedium: function(e2) {
      c = true;
      var t2 = [];
      if (a.length) {
        var n2 = a;
        a = [], n2.forEach(e2), t2 = a;
      }
      var r2 = function() {
        var n3 = t2;
        t2 = [], n3.forEach(e2);
      }, o2 = function() {
        return Promise.resolve().then(r2);
      };
      o2(), a = {
        push: function(e3) {
          t2.push(e3), o2();
        },
        filter: function(e3) {
          return t2 = t2.filter(e3), a;
        }
      };
    }
  }).options = s({ async: true, ssr: false }, r), i), b = function() {
  }, E = f.forwardRef(function(e2, t2) {
    var n2, r2, o2, a2, c2 = f.useRef(null), i2 = f.useState({
      onScrollCapture: b,
      onWheelCapture: b,
      onTouchMoveCapture: b
    }), u2 = i2[0], l2 = i2[1], v2 = e2.forwardProps, p2 = e2.children, E2 = e2.className, w2 = e2.removeScrollBar, S2 = e2.enabled, C2 = e2.shards, k2 = e2.sideCar, N2 = e2.noRelative, M2 = e2.noIsolation, A2 = e2.inert, R2 = e2.allowPinchZoom, T2 = e2.as, L2 = e2.gapMode, x2 = d(e2, [
      "forwardProps",
      "children",
      "className",
      "removeScrollBar",
      "enabled",
      "shards",
      "sideCar",
      "noRelative",
      "noIsolation",
      "inert",
      "allowPinchZoom",
      "as",
      "gapMode"
    ]), O2 = (n2 = [c2, t2], r2 = function(e3) {
      return n2.forEach(function(t3) {
        return h(t3, e3);
      });
    }, (o2 = (0, f.useState)(function() {
      return {
        value: null,
        callback: r2,
        facade: {
          get current() {
            return o2.value;
          },
          set current(value) {
            var e3 = o2.value;
            e3 !== value && (o2.value = value, o2.callback(value, e3));
          }
        }
      };
    })[0]).callback = r2, a2 = o2.facade, m(
      function() {
        var e3 = g.get(a2);
        if (e3) {
          var t3 = new Set(e3), r3 = new Set(n2), o3 = a2.current;
          t3.forEach(function(e4) {
            r3.has(e4) || h(e4, null);
          }), r3.forEach(function(e4) {
            t3.has(e4) || h(e4, o3);
          });
        }
        g.set(a2, n2);
      },
      [n2]
    ), a2), F2 = s(s({}, x2), u2);
    return f.createElement(
      f.Fragment,
      null,
      S2 && f.createElement(k2, {
        sideCar: y,
        removeScrollBar: w2,
        shards: C2,
        noRelative: N2,
        noIsolation: M2,
        inert: A2,
        setCallbacks: l2,
        allowPinchZoom: !!R2,
        lockRef: c2,
        gapMode: L2
      }),
      v2 ? f.cloneElement(f.Children.only(p2), s(s({}, F2), { ref: O2 })) : f.createElement(
        void 0 === T2 ? "div" : T2,
        s({}, F2, { className: E2, ref: O2 }),
        p2
      )
    );
  });
  E.defaultProps = { enabled: true, removeScrollBar: true, inert: false }, E.classNames = { fullWidth: p, zeroRight: v };
  var w = function(e2) {
    var t2 = e2.sideCar, n2 = d(e2, ["sideCar"]);
    if (!t2)
      throw Error(
        "Sidecar: please provide `sideCar` property to import the right car"
      );
    var r2 = t2.read();
    if (!r2) throw Error("Sidecar medium not found");
    return f.createElement(r2, s({}, n2));
  };
  w.isSideCarExport = true;
  var S = function() {
    var e2 = 0, t2 = null;
    return {
      add: function(r2) {
        if (0 == e2 && (t2 = (function() {
          if (!document) return null;
          var e3 = document.createElement("style");
          e3.type = "text/css";
          var t3 = l || n.nc;
          return t3 && e3.setAttribute("nonce", t3), e3;
        })())) {
          var o2, a2;
          (o2 = t2).styleSheet ? o2.styleSheet.cssText = r2 : o2.appendChild(document.createTextNode(r2)), a2 = t2, (document.head || document.getElementsByTagName("head")[0]).appendChild(a2);
        }
        e2++;
      },
      remove: function() {
        --e2 || !t2 || (t2.parentNode && t2.parentNode.removeChild(t2), t2 = null);
      }
    };
  }, C = function() {
    var e2 = S();
    return function(t2, n2) {
      f.useEffect(
        function() {
          return e2.add(t2), function() {
            e2.remove();
          };
        },
        [t2 && n2]
      );
    };
  }, k = function() {
    var e2 = C();
    return function(t2) {
      return e2(t2.styles, t2.dynamic), null;
    };
  }, N = { left: 0, top: 0, right: 0, gap: 0 }, M = function(e2) {
    return parseInt(e2 || "", 10) || 0;
  }, A = function(e2) {
    var t2 = window.getComputedStyle(document.body), n2 = t2["padding" === e2 ? "paddingLeft" : "marginLeft"], r2 = t2["padding" === e2 ? "paddingTop" : "marginTop"], o2 = t2["padding" === e2 ? "paddingRight" : "marginRight"];
    return [M(n2), M(r2), M(o2)];
  }, R = function(e2) {
    if (void 0 === e2 && (e2 = "margin"), "u" < typeof window) return N;
    var t2 = A(e2), n2 = document.documentElement.clientWidth, r2 = window.innerWidth;
    return {
      left: t2[0],
      top: t2[1],
      right: t2[2],
      gap: Math.max(0, r2 - n2 + t2[2] - t2[0])
    };
  }, T = k(), L = "data-scroll-locked", x = function(e2, t2, n2, r2) {
    var o2 = e2.left, a2 = e2.top, c2 = e2.right, i2 = e2.gap;
    return void 0 === n2 && (n2 = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r2, ";\n   padding-right: ").concat(i2, "px ").concat(r2, ";\n  }\n  body[").concat(L, "] {\n    overflow: hidden ").concat(r2, ";\n    overscroll-behavior: contain;\n    ").concat(
      [
        t2 && "position: relative ".concat(r2, ";"),
        "margin" === n2 && "\n    padding-left: ".concat(o2, "px;\n    padding-top: ").concat(a2, "px;\n    padding-right: ").concat(
          c2,
          "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
        ).concat(i2, "px ").concat(r2, ";\n    "),
        "padding" === n2 && "padding-right: ".concat(i2, "px ").concat(r2, ";")
      ].filter(Boolean).join(""),
      "\n  }\n  \n  ."
    ).concat(v, " {\n    right: ").concat(i2, "px ").concat(r2, ";\n  }\n  \n  .").concat(p, " {\n    margin-right: ").concat(i2, "px ").concat(r2, ";\n  }\n  \n  .").concat(v, " .").concat(v, " {\n    right: 0 ").concat(r2, ";\n  }\n  \n  .").concat(p, " .").concat(p, " {\n    margin-right: 0 ").concat(r2, ";\n  }\n  \n  body[").concat(L, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(i2, "px;\n  }\n");
  }, O = function() {
    var e2 = parseInt(document.body.getAttribute(L) || "0", 10);
    return isFinite(e2) ? e2 : 0;
  }, F = function() {
    f.useEffect(function() {
      return document.body.setAttribute(L, (O() + 1).toString()), function() {
        var e2 = O() - 1;
        e2 <= 0 ? document.body.removeAttribute(L) : document.body.setAttribute(L, e2.toString());
      };
    }, []);
  }, P = function(e2) {
    var t2 = e2.noRelative, n2 = e2.noImportant, r2 = e2.gapMode, o2 = void 0 === r2 ? "margin" : r2;
    F();
    var a2 = f.useMemo(
      function() {
        return R(o2);
      },
      [o2]
    );
    return f.createElement(T, { styles: x(a2, !t2, o2, n2 ? "" : "!important") });
  }, I = false;
  if ("u" > typeof window)
    try {
      var W = Object.defineProperty({}, "passive", {
        get: function() {
          return I = true, true;
        }
      });
      window.addEventListener("test", W, W), window.removeEventListener("test", W, W);
    } catch (e2) {
      I = false;
    }
  var j = !!I && { passive: false }, D = function(e2, t2) {
    if (!(e2 instanceof Element)) return false;
    var n2 = window.getComputedStyle(e2);
    return "hidden" !== n2[t2] && (n2.overflowY !== n2.overflowX || "TEXTAREA" === e2.tagName || "visible" !== n2[t2]);
  }, _ = function(e2, t2) {
    var n2 = t2.ownerDocument, r2 = t2;
    do {
      if ("u" > typeof ShadowRoot && r2 instanceof ShadowRoot && (r2 = r2.host), B(e2, r2)) {
        var o2 = K(e2, r2);
        if (o2[1] > o2[2]) return true;
      }
      r2 = r2.parentNode;
    } while (r2 && r2 !== n2.body);
    return false;
  }, B = function(e2, t2) {
    return "v" === e2 ? D(t2, "overflowY") : D(t2, "overflowX");
  }, K = function(e2, t2) {
    return "v" === e2 ? [t2.scrollTop, t2.scrollHeight, t2.clientHeight] : [t2.scrollLeft, t2.scrollWidth, t2.clientWidth];
  }, X = function(e2, t2, n2, r2, o2) {
    var a2, c2 = (a2 = window.getComputedStyle(t2).direction, "h" === e2 && "rtl" === a2 ? -1 : 1), i2 = c2 * r2, u2 = n2.target, l2 = t2.contains(u2), s2 = false, d2 = i2 > 0, f2 = 0, v2 = 0;
    do {
      if (!u2) break;
      var p2 = K(e2, u2), h2 = p2[0], m2 = p2[1] - p2[2] - c2 * h2;
      (h2 || m2) && B(e2, u2) && (f2 += m2, v2 += h2);
      var g2 = u2.parentNode;
      u2 = g2 && g2.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g2.host : g2;
    } while (!l2 && u2 !== document.body || l2 && (t2.contains(u2) || t2 === u2));
    return d2 && (o2 && 1 > Math.abs(f2) || !o2 && i2 > f2) ? s2 = true : !d2 && (o2 && 1 > Math.abs(v2) || !o2 && -i2 > v2) && (s2 = true), s2;
  }, Y = function(e2) {
    return "changedTouches" in e2 ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY] : [0, 0];
  }, V = function(e2) {
    return [e2.deltaX, e2.deltaY];
  }, G = function(e2) {
    return e2 && "current" in e2 ? e2.current : e2;
  }, H = 0, U = [];
  let Z = (u = function(e2) {
    var t2 = f.useRef([]), n2 = f.useRef([0, 0]), r2 = f.useRef(), o2 = f.useState(H++)[0], a2 = f.useState(k)[0], c2 = f.useRef(e2);
    f.useEffect(
      function() {
        c2.current = e2;
      },
      [e2]
    ), f.useEffect(
      function() {
        if (e2.inert) {
          document.body.classList.add("block-interactivity-".concat(o2));
          var t3 = (function(e3, t4, n3) {
            if (n3 || 2 == arguments.length)
              for (var r3, o3 = 0, a3 = t4.length; o3 < a3; o3++)
                !r3 && o3 in t4 || (r3 || (r3 = Array.prototype.slice.call(t4, 0, o3)), r3[o3] = t4[o3]);
            return e3.concat(r3 || Array.prototype.slice.call(t4));
          })([e2.lockRef.current], (e2.shards || []).map(G), true).filter(
            Boolean
          );
          return t3.forEach(function(e3) {
            return e3.classList.add("allow-interactivity-".concat(o2));
          }), function() {
            document.body.classList.remove(
              "block-interactivity-".concat(o2)
            ), t3.forEach(function(e3) {
              return e3.classList.remove(
                "allow-interactivity-".concat(o2)
              );
            });
          };
        }
      },
      [e2.inert, e2.lockRef.current, e2.shards]
    );
    var i2 = f.useCallback(function(e3, t3) {
      if ("touches" in e3 && 2 === e3.touches.length || "wheel" === e3.type && e3.ctrlKey)
        return !c2.current.allowPinchZoom;
      var o3, a3 = Y(e3), i3 = n2.current, u3 = "deltaX" in e3 ? e3.deltaX : i3[0] - a3[0], l3 = "deltaY" in e3 ? e3.deltaY : i3[1] - a3[1], s3 = e3.target, d3 = Math.abs(u3) > Math.abs(l3) ? "h" : "v";
      if ("touches" in e3 && "h" === d3 && "range" === s3.type) return false;
      var f2 = window.getSelection(), v3 = f2 && f2.anchorNode;
      if (v3 && (v3 === s3 || v3.contains(s3))) return false;
      var p3 = _(d3, s3);
      if (!p3) return true;
      if (p3 ? o3 = d3 : (o3 = "v" === d3 ? "h" : "v", p3 = _(d3, s3)), !p3)
        return false;
      if (!r2.current && "changedTouches" in e3 && (u3 || l3) && (r2.current = o3), !o3)
        return true;
      var h3 = r2.current || o3;
      return X(h3, t3, e3, "h" === h3 ? u3 : l3, true);
    }, []), u2 = f.useCallback(function(e3) {
      if (U.length && U[U.length - 1] === a2) {
        var n3 = "deltaY" in e3 ? V(e3) : Y(e3), r3 = t2.current.filter(function(t3) {
          var r4;
          return t3.name === e3.type && (t3.target === e3.target || e3.target === t3.shadowParent) && (r4 = t3.delta, r4[0] === n3[0] && r4[1] === n3[1]);
        })[0];
        if (r3 && r3.should) {
          e3.cancelable && e3.preventDefault();
          return;
        }
        if (!r3) {
          var o3 = (c2.current.shards || []).map(G).filter(Boolean).filter(function(t3) {
            return t3.contains(e3.target);
          });
          (o3.length > 0 ? i2(e3, o3[0]) : !c2.current.noIsolation) && e3.cancelable && e3.preventDefault();
        }
      }
    }, []), l2 = f.useCallback(function(e3, n3, r3, o3) {
      var a3 = {
        name: e3,
        delta: n3,
        target: r3,
        should: o3,
        shadowParent: (function(e4) {
          for (var t3 = null; null !== e4; )
            e4 instanceof ShadowRoot && (t3 = e4.host, e4 = e4.host), e4 = e4.parentNode;
          return t3;
        })(r3)
      };
      t2.current.push(a3), setTimeout(function() {
        t2.current = t2.current.filter(function(e4) {
          return e4 !== a3;
        });
      }, 1);
    }, []), s2 = f.useCallback(function(e3) {
      n2.current = Y(e3), r2.current = void 0;
    }, []), d2 = f.useCallback(function(t3) {
      l2(t3.type, V(t3), t3.target, i2(t3, e2.lockRef.current));
    }, []), v2 = f.useCallback(function(t3) {
      l2(t3.type, Y(t3), t3.target, i2(t3, e2.lockRef.current));
    }, []);
    f.useEffect(function() {
      return U.push(a2), e2.setCallbacks({
        onScrollCapture: d2,
        onWheelCapture: d2,
        onTouchMoveCapture: v2
      }), document.addEventListener("wheel", u2, j), document.addEventListener("touchmove", u2, j), document.addEventListener("touchstart", s2, j), function() {
        U = U.filter(function(e3) {
          return e3 !== a2;
        }), document.removeEventListener("wheel", u2, j), document.removeEventListener("touchmove", u2, j), document.removeEventListener("touchstart", s2, j);
      };
    }, []);
    var p2 = e2.removeScrollBar, h2 = e2.inert;
    return f.createElement(
      f.Fragment,
      null,
      h2 ? f.createElement(a2, {
        styles: "\n  .block-interactivity-".concat(o2, " {pointer-events: none;}\n  .allow-interactivity-").concat(o2, " {pointer-events: all;}\n")
      }) : null,
      p2 ? f.createElement(P, { noRelative: e2.noRelative, gapMode: e2.gapMode }) : null
    );
  }, y.useMedium(u), w);
  var q = f.forwardRef(function(e2, t2) {
    return f.createElement(E, s({}, e2, { ref: t2, sideCar: Z }));
  });
  q.classNames = E.classNames;
  let z = q;
}

__m(__module,__exports,__require);
}