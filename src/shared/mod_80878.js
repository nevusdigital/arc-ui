function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  let r;
  n.d(t, {
    Mz: () => eJ,
    i3: () => eQ,
    UC: () => eK,
    bL: () => eU,
    Bk: () => eF
  });
  var i = n(12115);
  let o = ["top", "right", "bottom", "left"], l = Math.min, a = Math.max, f = Math.round, s = Math.floor, c = (e2) => ({ x: e2, y: e2 }), u = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function d(e2, t2) {
    return "function" == typeof e2 ? e2(t2) : e2;
  }
  function p(e2) {
    return e2.split("-")[0];
  }
  function h(e2) {
    return e2.split("-")[1];
  }
  function m(e2) {
    return "x" === e2 ? "y" : "x";
  }
  function g(e2) {
    return "y" === e2 ? "height" : "width";
  }
  function y(e2) {
    let t2 = e2[0];
    return "t" === t2 || "b" === t2 ? "y" : "x";
  }
  function w(e2) {
    return e2.includes("start") ? e2.replace("start", "end") : e2.replace("end", "start");
  }
  let x = ["left", "right"], v = ["right", "left"], b = ["top", "bottom"], A = ["bottom", "top"];
  function R(e2) {
    let t2 = p(e2);
    return u[t2] + e2.slice(t2.length);
  }
  function S(e2) {
    var t2, n2, r2, i2;
    return "number" != typeof e2 ? {
      top: null != (t2 = e2.top) ? t2 : 0,
      right: null != (n2 = e2.right) ? n2 : 0,
      bottom: null != (r2 = e2.bottom) ? r2 : 0,
      left: null != (i2 = e2.left) ? i2 : 0
    } : { top: e2, right: e2, bottom: e2, left: e2 };
  }
  function O(e2) {
    let { x: t2, y: n2, width: r2, height: i2 } = e2;
    return {
      width: r2,
      height: i2,
      top: n2,
      left: t2,
      right: t2 + r2,
      bottom: n2 + i2,
      x: t2,
      y: n2
    };
  }
  function L(e2, t2, n2) {
    let r2, { reference: i2, floating: o2 } = e2, l2 = y(t2), a2 = m(y(t2)), f2 = g(a2), s2 = p(t2), c2 = i2.x + i2.width / 2 - o2.width / 2, u2 = i2.y + i2.height / 2 - o2.height / 2, d2 = i2[f2] / 2 - o2[f2] / 2;
    switch (s2) {
      case "top":
        r2 = { x: c2, y: i2.y - o2.height };
        break;
      case "bottom":
        r2 = { x: c2, y: i2.y + i2.height };
        break;
      case "right":
        r2 = { x: i2.x + i2.width, y: u2 };
        break;
      case "left":
        r2 = { x: i2.x - o2.width, y: u2 };
        break;
      default:
        r2 = { x: i2.x, y: i2.y };
    }
    let w2 = h(t2);
    return w2 && (r2[a2] += d2 * ("end" === w2 ? 1 : -1) * (n2 && "y" === l2 ? -1 : 1)), r2;
  }
  async function P(e2, t2) {
    var n2;
    void 0 === t2 && (t2 = {});
    let { x: r2, y: i2, platform: o2, rects: l2, elements: a2, strategy: f2 } = e2, {
      boundary: s2 = "clippingAncestors",
      rootBoundary: c2 = "viewport",
      elementContext: u2 = "floating",
      altBoundary: p2 = false,
      padding: h2 = 0
    } = d(t2, e2), m2 = S(h2), g2 = a2[p2 ? "floating" === u2 ? "reference" : "floating" : u2], y2 = O(
      await o2.getClippingRect({
        element: null == (n2 = await (null == o2.isElement ? void 0 : o2.isElement(g2))) || n2 ? g2 : g2.contextElement || await (null == o2.getDocumentElement ? void 0 : o2.getDocumentElement(a2.floating)),
        boundary: s2,
        rootBoundary: c2,
        strategy: f2
      })
    ), w2 = "floating" === u2 ? { x: r2, y: i2, width: l2.floating.width, height: l2.floating.height } : l2.reference, x2 = await (null == o2.getOffsetParent ? void 0 : o2.getOffsetParent(a2.floating)), v2 = await (null == o2.isElement ? void 0 : o2.isElement(x2)) && await (null == o2.getScale ? void 0 : o2.getScale(x2)) || {
      x: 1,
      y: 1
    }, b2 = O(
      o2.convertOffsetParentRelativeRectToViewportRelativeRect ? await o2.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a2,
        rect: w2,
        offsetParent: x2,
        strategy: f2
      }) : w2
    );
    return {
      top: (y2.top - b2.top + m2.top) / v2.y,
      bottom: (b2.bottom - y2.bottom + m2.bottom) / v2.y,
      left: (y2.left - b2.left + m2.left) / v2.x,
      right: (b2.right - y2.right + m2.right) / v2.x
    };
  }
  let C = async (e2, t2, n2) => {
    let {
      placement: r2 = "bottom",
      strategy: i2 = "absolute",
      middleware: o2 = [],
      platform: l2
    } = n2, a2 = l2.detectOverflow ? l2 : { ...l2, detectOverflow: P }, f2 = await (null == l2.isRTL ? void 0 : l2.isRTL(t2)), s2 = await l2.getElementRects({ reference: e2, floating: t2, strategy: i2 }), { x: c2, y: u2 } = L(s2, r2, f2), d2 = r2, p2 = 0, h2 = {};
    for (let n3 = 0; n3 < o2.length; n3++) {
      let m2 = o2[n3];
      if (!m2) continue;
      let { name: g2, fn: y2 } = m2, {
        x: w2,
        y: x2,
        data: v2,
        reset: b2
      } = await y2({
        x: c2,
        y: u2,
        initialPlacement: r2,
        placement: d2,
        strategy: i2,
        middlewareData: h2,
        rects: s2,
        platform: a2,
        elements: { reference: e2, floating: t2 }
      });
      c2 = null != w2 ? w2 : c2, u2 = null != x2 ? x2 : u2, h2[g2] = { ...h2[g2], ...v2 }, b2 && p2 < 50 && (p2++, "object" == typeof b2 && (b2.placement && (d2 = b2.placement), b2.rects && (s2 = true === b2.rects ? await l2.getElementRects({
        reference: e2,
        floating: t2,
        strategy: i2
      }) : b2.rects), { x: c2, y: u2 } = L(s2, d2, f2)), n3 = -1);
    }
    return { x: c2, y: u2, placement: d2, strategy: i2, middlewareData: h2 };
  };
  function E(e2, t2) {
    return {
      top: e2.top - t2.height,
      right: e2.right - t2.width,
      bottom: e2.bottom - t2.height,
      left: e2.left - t2.width
    };
  }
  function T(e2) {
    return o.some((t2) => e2[t2] >= 0);
  }
  let k = /* @__PURE__ */ new Set(["left", "top"]);
  async function H(e2, t2) {
    let { placement: n2, platform: r2, elements: i2 } = e2, o2 = await (null == r2.isRTL ? void 0 : r2.isRTL(i2.floating)), l2 = p(n2), a2 = h(n2), f2 = "y" === y(n2), s2 = k.has(l2) ? -1 : 1, c2 = o2 && f2 ? -1 : 1, u2 = d(t2, e2), {
      mainAxis: m2,
      crossAxis: g2,
      alignmentAxis: w2
    } = "number" == typeof u2 ? { mainAxis: u2, crossAxis: 0, alignmentAxis: null } : {
      mainAxis: u2.mainAxis || 0,
      crossAxis: u2.crossAxis || 0,
      alignmentAxis: u2.alignmentAxis
    };
    return a2 && "number" == typeof w2 && (g2 = "end" === a2 ? -1 * w2 : w2), f2 ? { x: g2 * c2, y: m2 * s2 } : { x: m2 * s2, y: g2 * c2 };
  }
  function j() {
    return "u" > typeof window;
  }
  function D(e2) {
    return z(e2) ? (e2.nodeName || "").toLowerCase() : "#document";
  }
  function F(e2) {
    var t2;
    return (null == e2 || null == (t2 = e2.ownerDocument) ? void 0 : t2.defaultView) || window;
  }
  function M(e2) {
    var t2;
    return null == (t2 = (z(e2) ? e2.ownerDocument : e2.document) || window.document) ? void 0 : t2.documentElement;
  }
  function z(e2) {
    return !!j() && (e2 instanceof Node || e2 instanceof F(e2).Node);
  }
  function W(e2) {
    return !!j() && (e2 instanceof Element || e2 instanceof F(e2).Element);
  }
  function $(e2) {
    return !!j() && (e2 instanceof HTMLElement || e2 instanceof F(e2).HTMLElement);
  }
  function N(e2) {
    return !(!j() || "u" < typeof ShadowRoot) && (e2 instanceof ShadowRoot || e2 instanceof F(e2).ShadowRoot);
  }
  function B(e2) {
    let { overflow: t2, overflowX: n2, overflowY: r2, display: i2 } = U(e2);
    return /auto|scroll|overlay|hidden|clip/.test(t2 + r2 + n2) && "inline" !== i2 && "contents" !== i2;
  }
  function V(e2) {
    try {
      if (e2.matches(":popover-open")) return true;
    } catch (e3) {
    }
    try {
      return e2.matches(":modal");
    } catch (e3) {
      return false;
    }
  }
  let _ = /transform|translate|scale|rotate|perspective|filter/, X = /paint|layout|strict|content/, I = (e2) => !!e2 && "none" !== e2;
  function Y(e2) {
    let t2 = W(e2) ? U(e2) : e2;
    return I(t2.transform) || I(t2.translate) || I(t2.scale) || I(t2.rotate) || I(t2.perspective) || !G() && (I(t2.backdropFilter) || I(t2.filter)) || _.test(t2.willChange || "") || X.test(t2.contain || "");
  }
  function G() {
    return null == r && (r = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), r;
  }
  function q(e2) {
    return /^(html|body|#document)$/.test(D(e2));
  }
  function U(e2) {
    return F(e2).getComputedStyle(e2);
  }
  function J(e2) {
    return W(e2) ? { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop } : { scrollLeft: e2.scrollX, scrollTop: e2.scrollY };
  }
  function K(e2) {
    if ("html" === D(e2)) return e2;
    let t2 = e2.assignedSlot || e2.parentNode || N(e2) && e2.host || M(e2);
    return N(t2) ? t2.host : t2;
  }
  function Q(e2, t2, n2) {
    var r2;
    void 0 === t2 && (t2 = []), void 0 === n2 && (n2 = true);
    let i2 = (function e3(t3) {
      let n3 = K(t3);
      return q(n3) ? (t3.ownerDocument || t3).body : $(n3) && B(n3) ? n3 : e3(n3);
    })(e2), o2 = i2 === (null == (r2 = e2.ownerDocument) ? void 0 : r2.body), l2 = F(i2);
    if (!o2) return t2.concat(i2, Q(i2, [], n2));
    {
      let e3 = Z(l2);
      return t2.concat(
        l2,
        l2.visualViewport || [],
        B(i2) ? i2 : [],
        e3 && n2 ? Q(e3) : []
      );
    }
  }
  function Z(e2) {
    return e2.parent && Object.getPrototypeOf(e2.parent) ? e2.frameElement : null;
  }
  function ee(e2) {
    let t2 = U(e2), n2 = parseFloat(t2.width) || 0, r2 = parseFloat(t2.height) || 0, i2 = $(e2), o2 = i2 ? e2.offsetWidth : n2, l2 = i2 ? e2.offsetHeight : r2, a2 = f(n2) !== o2 || f(r2) !== l2;
    return a2 && (n2 = o2, r2 = l2), { width: n2, height: r2, $: a2 };
  }
  function et(e2) {
    return W(e2) ? e2 : e2.contextElement;
  }
  function en(e2) {
    let t2 = et(e2);
    if (!$(t2)) return c(1);
    let n2 = t2.getBoundingClientRect(), { width: r2, height: i2, $: o2 } = ee(t2), l2 = (o2 ? f(n2.width) : n2.width) / r2, a2 = (o2 ? f(n2.height) : n2.height) / i2;
    return l2 && Number.isFinite(l2) || (l2 = 1), a2 && Number.isFinite(a2) || (a2 = 1), { x: l2, y: a2 };
  }
  let er = c(0);
  function ei(e2) {
    let t2 = F(e2);
    return G() && t2.visualViewport ? { x: t2.visualViewport.offsetLeft, y: t2.visualViewport.offsetTop } : er;
  }
  function eo(e2, t2, n2, r2) {
    var i2;
    void 0 === t2 && (t2 = false), void 0 === n2 && (n2 = false);
    let o2 = e2.getBoundingClientRect(), l2 = et(e2), a2 = c(1);
    t2 && (r2 ? W(r2) && (a2 = en(r2)) : a2 = en(e2));
    let f2 = (void 0 === (i2 = n2) && (i2 = false), r2 && i2 && r2 === F(l2)) ? ei(l2) : c(0), s2 = (o2.left + f2.x) / a2.x, u2 = (o2.top + f2.y) / a2.y, d2 = o2.width / a2.x, p2 = o2.height / a2.y;
    if (l2 && r2) {
      let e3 = F(l2), t3 = W(r2) ? F(r2) : r2, n3 = e3, i3 = Z(n3);
      for (; i3 && t3 !== n3; ) {
        let e4 = en(i3), t4 = i3.getBoundingClientRect(), r3 = U(i3), o3 = t4.left + (i3.clientLeft + parseFloat(r3.paddingLeft)) * e4.x, l3 = t4.top + (i3.clientTop + parseFloat(r3.paddingTop)) * e4.y;
        s2 *= e4.x, u2 *= e4.y, d2 *= e4.x, p2 *= e4.y, s2 += o3, u2 += l3, i3 = Z(n3 = F(i3));
      }
    }
    return O({ width: d2, height: p2, x: s2, y: u2 });
  }
  function el(e2, t2) {
    let n2 = J(e2).scrollLeft;
    return t2 ? t2.left + n2 : eo(M(e2)).left + n2;
  }
  function ea(e2, t2) {
    let n2 = e2.getBoundingClientRect();
    return { x: n2.left + t2.scrollLeft - el(e2, n2), y: n2.top + t2.scrollTop };
  }
  function ef(e2, t2, n2) {
    var r2;
    let i2;
    if ("viewport" === t2 || "layoutViewport" === t2)
      i2 = (function(e3, t3, n3) {
        void 0 === n3 && (n3 = "viewport");
        let r3 = "layoutViewport" === n3, i3 = F(e3), o2 = M(e3), l2 = i3.visualViewport, a2 = o2.clientWidth, f2 = o2.clientHeight, s2 = 0, c2 = 0;
        if (l2) {
          let e4 = !G() || "fixed" === t3;
          r3 ? e4 || (s2 = -l2.offsetLeft, c2 = -l2.offsetTop) : (a2 = l2.width, f2 = l2.height, e4 && (s2 = l2.offsetLeft, c2 = l2.offsetTop));
        }
        if (0 >= el(o2)) {
          let e4 = o2.ownerDocument, t4 = e4.body, n4 = getComputedStyle(t4), r4 = "CSS1Compat" === e4.compatMode && parseFloat(n4.marginLeft) + parseFloat(n4.marginRight) || 0, i4 = Math.abs(o2.clientWidth - t4.clientWidth - r4), l3 = "stable both-edges" === getComputedStyle(o2).scrollbarGutter ? i4 / 2 : i4;
          l3 <= 25 && (a2 -= l3);
        }
        return { width: a2, height: f2, x: s2, y: c2 };
      })(e2, n2, t2);
    else if ("document" === t2) {
      let t3, n3, o2, l2, f2, s2;
      t3 = J(r2 = M(e2)), n3 = r2.ownerDocument.body, o2 = a(r2.scrollWidth, r2.clientWidth, n3.scrollWidth, n3.clientWidth), l2 = a(r2.scrollHeight, r2.clientHeight, n3.scrollHeight, n3.clientHeight), f2 = -t3.scrollLeft + el(r2), s2 = -t3.scrollTop, "rtl" === U(n3).direction && (f2 += a(r2.clientWidth, n3.clientWidth) - o2), i2 = { width: o2, height: l2, x: f2, y: s2 };
    } else if (W(t2)) {
      let e3, r3, o2, l2, a2, f2;
      r3 = (e3 = eo(t2, true, "fixed" === n2)).top + t2.clientTop, o2 = e3.left + t2.clientLeft, l2 = en(t2), a2 = t2.clientWidth * l2.x, f2 = t2.clientHeight * l2.y, i2 = { width: a2, height: f2, x: o2 * l2.x, y: r3 * l2.y };
    } else {
      let n3 = ei(e2);
      i2 = { x: t2.x - n3.x, y: t2.y - n3.y, width: t2.width, height: t2.height };
    }
    return O(i2);
  }
  function es(e2) {
    return "static" === U(e2).position;
  }
  function ec(e2, t2) {
    if (!$(e2) || "fixed" === U(e2).position) return null;
    if (t2) return t2(e2);
    let n2 = e2.offsetParent;
    return M(e2) === n2 && (n2 = n2.ownerDocument.body), n2;
  }
  function eu(e2, t2) {
    var n2;
    let r2 = F(e2);
    if (V(e2)) return r2;
    if (!$(e2)) {
      let t3 = K(e2);
      for (; t3 && !q(t3); ) {
        if (W(t3) && !es(t3)) return t3;
        t3 = K(t3);
      }
      return r2;
    }
    let i2 = ec(e2, t2);
    for (; i2 && (n2 = i2, /^(table|td|th)$/.test(D(n2))) && es(i2); ) i2 = ec(i2, t2);
    return i2 && q(i2) && es(i2) && !Y(i2) ? r2 : i2 || (function(e3) {
      let t3 = K(e3);
      for (; $(t3) && !q(t3); ) {
        if (Y(t3)) return t3;
        if (V(t3)) break;
        t3 = K(t3);
      }
      return null;
    })(e2) || r2;
  }
  let ed = async function(e2) {
    let t2 = this.getOffsetParent || eu, n2 = this.getDimensions, r2 = await n2(e2.floating);
    return {
      reference: (function(e3, t3, n3) {
        let r3 = $(t3), i2 = M(t3), o2 = "fixed" === n3, l2 = eo(e3, true, o2, t3), a2 = { scrollLeft: 0, scrollTop: 0 }, f2 = c(0);
        if ((r3 || !o2) && (("body" !== D(t3) || B(i2)) && (a2 = J(t3)), r3)) {
          let e4 = eo(t3, true, o2, t3);
          f2.x = e4.x + t3.clientLeft, f2.y = e4.y + t3.clientTop;
        }
        !r3 && i2 && (f2.x = el(i2));
        let s2 = !i2 || r3 || o2 ? c(0) : ea(i2, a2);
        return {
          x: l2.left + a2.scrollLeft - f2.x - s2.x,
          y: l2.top + a2.scrollTop - f2.y - s2.y,
          width: l2.width,
          height: l2.height
        };
      })(e2.reference, await t2(e2.floating), e2.strategy),
      floating: { x: 0, y: 0, width: r2.width, height: r2.height }
    };
  }, ep = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e2) {
      let { elements: t2, rect: n2, offsetParent: r2, strategy: i2 } = e2, o2 = "fixed" === i2, l2 = M(r2), a2 = !!t2 && V(t2.floating);
      if (r2 === l2 || a2 && o2) return n2;
      let f2 = { scrollLeft: 0, scrollTop: 0 }, s2 = c(1), u2 = c(0), d2 = $(r2);
      if ((d2 || !o2) && (("body" !== D(r2) || B(l2)) && (f2 = J(r2)), d2)) {
        let e3 = eo(r2);
        s2 = en(r2), u2.x = e3.x + r2.clientLeft, u2.y = e3.y + r2.clientTop;
      }
      let p2 = !l2 || d2 || o2 ? c(0) : ea(l2, f2);
      return {
        width: n2.width * s2.x,
        height: n2.height * s2.y,
        x: n2.x * s2.x - f2.scrollLeft * s2.x + u2.x + p2.x,
        y: n2.y * s2.y - f2.scrollTop * s2.y + u2.y + p2.y
      };
    },
    getDocumentElement: M,
    getClippingRect: function(e2) {
      let { element: t2, boundary: n2, rootBoundary: r2, strategy: i2 } = e2, o2 = [
        ..."clippingAncestors" === n2 ? V(t2) ? [] : (function(e3, t3) {
          let n3 = t3.get(e3);
          if (n3) return n3;
          let r3 = Q(e3, [], false).filter((e4) => W(e4) && "body" !== D(e4)), i3 = null, o3 = "fixed" === U(e3).position, l2 = o3 ? K(e3) : e3;
          for (; W(l2) && !q(l2); ) {
            let e4 = U(l2), t4 = Y(l2), n4 = i3 ? i3.position : o3 ? "fixed" : "";
            t4 || "fixed" !== n4 && ("absolute" !== n4 || "static" !== e4.position) ? i3 = e4 : r3 = r3.filter((e5) => e5 !== l2), l2 = K(l2);
          }
          return t3.set(e3, r3), r3;
        })(t2, this._c) : [].concat(n2),
        r2
      ], f2 = ef(t2, o2[0], i2), s2 = f2.top, c2 = f2.right, u2 = f2.bottom, d2 = f2.left;
      for (let e3 = 1; e3 < o2.length; e3++) {
        let n3 = ef(t2, o2[e3], i2);
        s2 = a(n3.top, s2), c2 = l(n3.right, c2), u2 = l(n3.bottom, u2), d2 = a(n3.left, d2);
      }
      return { width: c2 - d2, height: u2 - s2, x: d2, y: s2 };
    },
    getOffsetParent: eu,
    getElementRects: ed,
    getClientRects: function(e2) {
      return e2.getClientRects ? Array.from(e2.getClientRects()) : [];
    },
    getDimensions: function(e2) {
      let { width: t2, height: n2 } = ee(e2);
      return { width: t2, height: n2 };
    },
    getScale: en,
    isElement: W,
    isRTL: function(e2) {
      return "rtl" === U(e2).direction;
    }
  };
  function eh(e2, t2) {
    return e2.x === t2.x && e2.y === t2.y && e2.width === t2.width && e2.height === t2.height;
  }
  let em = (e2) => ({
    name: "arrow",
    options: e2,
    async fn(t2) {
      let {
        x: n2,
        y: r2,
        placement: i2,
        rects: o2,
        platform: f2,
        elements: s2,
        middlewareData: c2
      } = t2, { element: u2, padding: p2 = 0 } = d(e2, t2) || {};
      if (null == u2) return {};
      let w2 = S(p2), x2 = { x: n2, y: r2 }, v2 = m(y(i2)), b2 = g(v2), A2 = await f2.getDimensions(u2), R2 = "y" === v2, O2 = R2 ? "clientHeight" : "clientWidth", L2 = o2.reference[b2] + o2.reference[v2] - x2[v2] - o2.floating[b2], P2 = x2[v2] - o2.reference[v2], C2 = await (null == f2.getOffsetParent ? void 0 : f2.getOffsetParent(u2)), E2 = C2 ? C2[O2] : 0;
      E2 && await (null == f2.isElement ? void 0 : f2.isElement(C2)) || (E2 = s2.floating[O2] || o2.floating[b2]);
      let T2 = E2 / 2 - A2[b2] / 2 - 1, k2 = l(w2[R2 ? "top" : "left"], T2), H2 = l(w2[R2 ? "bottom" : "right"], T2), j2 = E2 - A2[b2] - H2, D2 = E2 / 2 - A2[b2] / 2 + (L2 / 2 - P2 / 2), F2 = a(k2, l(D2, j2)), M2 = !c2.arrow && null != h(i2) && D2 !== F2 && o2.reference[b2] / 2 - (D2 < k2 ? k2 : H2) - A2[b2] / 2 < 0, z2 = M2 ? D2 < k2 ? D2 - k2 : D2 - j2 : 0;
      return {
        [v2]: x2[v2] + z2,
        data: {
          [v2]: F2,
          centerOffset: D2 - F2 - z2,
          ...M2 && { alignmentOffset: z2 }
        },
        reset: M2
      };
    }
  });
  var eg = n(47650), ey = "u" > typeof document ? i.useLayoutEffect : function() {
  };
  function ew(e2, t2) {
    let n2, r2, i2;
    if (e2 === t2) return true;
    if (typeof e2 != typeof t2) return false;
    if ("function" == typeof e2 && e2.toString() === t2.toString()) return true;
    if (e2 && t2 && "object" == typeof e2) {
      if (Array.isArray(e2)) {
        if ((n2 = e2.length) !== t2.length) return false;
        for (r2 = n2; 0 != r2--; ) if (!ew(e2[r2], t2[r2])) return false;
        return true;
      }
      if ((n2 = (i2 = Object.keys(e2)).length) !== Object.keys(t2).length)
        return false;
      for (r2 = n2; 0 != r2--; ) if (!{}.hasOwnProperty.call(t2, i2[r2])) return false;
      for (r2 = n2; 0 != r2--; ) {
        let n3 = i2[r2];
        if (("_owner" !== n3 || !e2.$$typeof) && !ew(e2[n3], t2[n3])) return false;
      }
      return true;
    }
    return e2 != e2 && t2 != t2;
  }
  function ex(e2) {
    return "u" < typeof window ? 1 : (e2.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function ev(e2, t2) {
    let n2 = ex(e2);
    return Math.round(t2 * n2) / n2;
  }
  function eb(e2) {
    let t2 = i.useRef(e2);
    return ey(() => {
      t2.current = e2;
    }), t2;
  }
  var eA = n(55897), eR = n(95155), eS = Object.defineProperty, eO = i.forwardRef(
    eS(
      function(e2, t2) {
        let { children: n2, width: r2 = 10, height: i2 = 5, ...o2 } = e2;
        return (0, eR.jsx)(eA.sG.svg, {
          ...o2,
          ref: t2,
          width: r2,
          height: i2,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e2.asChild ? n2 : (0, eR.jsx)("polygon", { points: "0,0 30,0 15,10" })
        });
      },
      "name",
      { value: "Arrow", configurable: true }
    )
  ), eL = n(47527), eP = n(68599), eC = n(17347), eE = n(66294), eT = n(63509), ek = Object.defineProperty, eH = (e2, t2) => ek(e2, "name", { value: t2, configurable: true }), ej = "Popper", [eD, eF] = (0, eP.A)(ej), [eM, ez] = eD(ej), eW = eH((e2) => {
    let { __scopePopper: t2, children: n2 } = e2, [r2, o2] = i.useState(null), [l2, a2] = i.useState(void 0);
    return (0, eR.jsx)(eM, {
      scope: t2,
      anchor: r2,
      onAnchorChange: o2,
      placementState: l2,
      setPlacementState: a2,
      children: n2
    });
  }, "Popper"), e$ = i.forwardRef(
    eH(function(e2, t2) {
      let { __scopePopper: n2, virtualRef: r2, ...o2 } = e2, l2 = ez("PopperAnchor", n2), a2 = i.useRef(null), f2 = l2.onAnchorChange, s2 = i.useCallback(
        (e3) => {
          a2.current = e3, e3 && f2(e3);
        },
        [f2]
      ), c2 = (0, eL.s)(t2, s2), u2 = i.useRef(null);
      i.useEffect(() => {
        if (!r2) return;
        let e3 = u2.current;
        u2.current = r2.current, e3 !== u2.current && f2(u2.current);
      });
      let d2 = l2.placementState && eq(l2.placementState), p2 = d2?.[0], h2 = d2?.[1];
      return r2 ? null : (0, eR.jsx)(eA.sG.div, {
        "data-radix-popper-side": p2,
        "data-radix-popper-align": h2,
        ...o2,
        ref: c2
      });
    }, "PopperAnchor")
  ), eN = "PopperContent", [eB, eV] = eD(eN), e_ = i.forwardRef(
    eH(function(e2, t2) {
      var n2, r2, o2, f2, c2, u2, S2, O2, L2, P2, j2, D2, z2;
      let W2, $2, N2, B2, V2, _2, {
        __scopePopper: X2,
        side: I2 = "bottom",
        sideOffset: Y2 = 0,
        align: G2 = "center",
        alignOffset: q2 = 0,
        arrowPadding: U2 = 0,
        avoidCollisions: J2 = true,
        collisionBoundary: K2 = [],
        collisionPadding: Z2 = 0,
        sticky: ee2 = "partial",
        hideWhenDetached: en2 = false,
        updatePositionStrategy: er2 = "optimized",
        onPlaced: ei2,
        ...el2
      } = e2, ea2 = ez(eN, X2), [ef2, es2] = i.useState(null), ec2 = (0, eL.s)(t2, es2), [eu2, ed2] = i.useState(null), eS2 = (0, eT.X)(eu2), eO2 = eS2?.width ?? 0, eP2 = eS2?.height ?? 0, ek2 = "number" == typeof Z2 ? Z2 : { top: 0, right: 0, bottom: 0, left: 0, ...Z2 }, ej2 = Array.isArray(K2) ? K2 : [K2], eD2 = ej2.length > 0, eF2 = { padding: ek2, boundary: ej2.filter(eY), altBoundary: eD2 }, {
        refs: eM2,
        floatingStyles: eW2,
        placement: e$2,
        isPositioned: eV2,
        middlewareData: e_2
      } = (function(e3) {
        void 0 === e3 && (e3 = {});
        let {
          placement: t3 = "bottom",
          strategy: n3 = "absolute",
          middleware: r3 = [],
          platform: o3,
          elements: { reference: l2, floating: a2 } = {},
          transform: f3 = true,
          whileElementsMounted: s2,
          open: c3
        } = e3, [u3, d2] = i.useState({
          x: 0,
          y: 0,
          strategy: n3,
          placement: t3,
          middlewareData: {},
          isPositioned: false
        }), [p2, h2] = i.useState(r3);
        ew(p2, r3) || h2(r3);
        let [m2, g2] = i.useState(null), [y2, w2] = i.useState(null), x2 = i.useCallback((e4) => {
          e4 !== R2.current && (R2.current = e4, g2(e4));
        }, []), v2 = i.useCallback((e4) => {
          e4 !== S3.current && (S3.current = e4, w2(e4));
        }, []), b2 = l2 || m2, A2 = a2 || y2, R2 = i.useRef(null), S3 = i.useRef(null), O3 = i.useRef(u3), L3 = null != s2, P3 = eb(s2), E2 = eb(o3), T2 = eb(c3), k2 = i.useCallback(() => {
          var e4, r4;
          let i2, o4, l3;
          if (!R2.current || !S3.current) return;
          let a3 = { placement: t3, strategy: n3, middleware: p2 };
          E2.current && (a3.platform = E2.current), (e4 = R2.current, r4 = S3.current, i2 = /* @__PURE__ */ new Map(), o4 = null != a3 ? a3 : {}, l3 = { ...ep, ...o4.platform, _c: i2 }, C(e4, r4, { ...o4, platform: l3 })).then((e5) => {
            let t4 = { ...e5, isPositioned: false !== T2.current };
            H2.current && !ew(O3.current, t4) && (O3.current = t4, eg.flushSync(() => {
              d2(t4);
            }));
          });
        }, [p2, t3, n3, E2, T2]);
        ey(() => {
          false === c3 && O3.current.isPositioned && (O3.current.isPositioned = false, d2((e4) => ({ ...e4, isPositioned: false })));
        }, [c3]);
        let H2 = i.useRef(false);
        ey(
          () => (H2.current = true, () => {
            H2.current = false;
          }),
          []
        ), ey(() => {
          if (b2 && (R2.current = b2), A2 && (S3.current = A2), b2 && A2) {
            if (P3.current) return P3.current(b2, A2, k2);
            k2();
          }
        }, [b2, A2, k2, P3, L3]);
        let j3 = i.useMemo(
          () => ({
            reference: R2,
            floating: S3,
            setReference: x2,
            setFloating: v2
          }),
          [x2, v2]
        ), D3 = i.useMemo(() => ({ reference: b2, floating: A2 }), [b2, A2]), F2 = i.useMemo(() => {
          let e4 = { position: n3, left: 0, top: 0 };
          if (!D3.floating) return e4;
          let t4 = ev(D3.floating, u3.x), r4 = ev(D3.floating, u3.y);
          return f3 ? {
            ...e4,
            transform: "translate(" + t4 + "px, " + r4 + "px)",
            ...ex(D3.floating) >= 1.5 && { willChange: "transform" }
          } : { position: n3, left: t4, top: r4 };
        }, [n3, f3, D3.floating, u3.x, u3.y]);
        return i.useMemo(
          () => ({
            ...u3,
            update: k2,
            refs: j3,
            elements: D3,
            floatingStyles: F2
          }),
          [u3, k2, j3, D3, F2]
        );
      })({
        strategy: "fixed",
        placement: I2 + ("center" !== G2 ? "-" + G2 : ""),
        whileElementsMounted: eH(
          (...e3) => (function(e4, t3, n3, r3) {
            let i2;
            void 0 === r3 && (r3 = {});
            let {
              ancestorScroll: o3 = true,
              ancestorResize: f3 = true,
              elementResize: c3 = "function" == typeof ResizeObserver,
              layoutShift: u3 = "function" == typeof IntersectionObserver,
              animationFrame: d2 = false
            } = r3, p2 = et(e4), h2 = o3 || f3 ? [...p2 ? Q(p2) : [], ...t3 ? Q(t3) : []] : [];
            h2.forEach((e5) => {
              o3 && e5.addEventListener("scroll", n3), f3 && e5.addEventListener("resize", n3);
            });
            let m2 = p2 && u3 ? (function(e5, t4, n4) {
              let r4, i3 = null, o4 = M(e5);
              function f4() {
                var e6;
                clearTimeout(r4), null == (e6 = i3) || e6.disconnect(), i3 = null;
              }
              function c4(n5, u5) {
                void 0 === n5 && (n5 = false), void 0 === u5 && (u5 = 1), f4();
                let d4 = e5.getBoundingClientRect(), { left: p3, top: h3, width: m3, height: g3 } = d4;
                if (n5 || t4(), !m3 || !g3) return;
                let y3 = {
                  rootMargin: -s(h3) + "px " + -s(o4.clientWidth - (p3 + m3)) + "px " + -s(o4.clientHeight - (h3 + g3)) + "px " + -s(p3) + "px",
                  threshold: a(0, l(1, u5)) || 1
                }, w3 = true;
                function x2(t5) {
                  let n6 = t5[0].intersectionRatio;
                  if (!eh(d4, e5.getBoundingClientRect()))
                    return c4();
                  if (n6 !== u5) {
                    if (!w3) return c4();
                    n6 ? c4(false, n6) : r4 = setTimeout(() => {
                      c4(false, 1e-7);
                    }, 1e3);
                  }
                  w3 = false;
                }
                try {
                  i3 = new IntersectionObserver(x2, {
                    ...y3,
                    root: o4.ownerDocument
                  });
                } catch (e6) {
                  i3 = new IntersectionObserver(x2, y3);
                }
                i3.observe(e5);
              }
              let u4 = F(e5), d3 = () => c4(n4);
              return u4.addEventListener("resize", d3), c4(true), () => {
                u4.removeEventListener("resize", d3), f4();
              };
            })(p2, n3, f3) : null, g2 = -1, y2 = null;
            c3 && (y2 = new ResizeObserver((e5) => {
              let [r4] = e5;
              r4 && r4.target === p2 && y2 && t3 && (y2.unobserve(t3), cancelAnimationFrame(g2), g2 = requestAnimationFrame(() => {
                var e6;
                null == (e6 = y2) || e6.observe(t3);
              })), n3();
            }), p2 && !d2 && y2.observe(p2), t3 && y2.observe(t3));
            let w2 = d2 ? eo(e4) : null;
            return d2 && (function t4() {
              let r4 = eo(e4);
              w2 && !eh(w2, r4) && n3(), w2 = r4, i2 = requestAnimationFrame(t4);
            })(), n3(), () => {
              var e5;
              h2.forEach((e6) => {
                o3 && e6.removeEventListener("scroll", n3), f3 && e6.removeEventListener("resize", n3);
              }), null == m2 || m2(), null == (e5 = y2) || e5.disconnect(), y2 = null, d2 && cancelAnimationFrame(i2);
            };
          })(...e3, { animationFrame: "always" === er2 }),
          "whileElementsMounted"
        ),
        elements: { reference: ea2.anchor },
        middleware: [
          {
            name: (W2 = {
              name: "offset",
              options: r2 = n2 = { mainAxis: Y2 + eP2, alignmentAxis: q2 },
              async fn(e3) {
                var t3, n3;
                let { x: i2, y: o3, placement: l2, middlewareData: a2 } = e3, f3 = await H(e3, r2);
                return l2 === (null == (t3 = a2.offset) ? void 0 : t3.placement) && null != (n3 = a2.arrow) && n3.alignmentOffset ? {} : {
                  x: i2 + f3.x,
                  y: o3 + f3.y,
                  data: { ...f3, placement: l2 }
                };
              }
            }).name,
            fn: W2.fn,
            options: [n2, void 0]
          },
          J2 && {
            name: ($2 = {
              name: "shift",
              options: c2 = f2 = {
                mainAxis: true,
                crossAxis: false,
                limiter: "partial" === ee2 ? {
                  fn: (o2 = void 0, {
                    options: o2 = {},
                    fn(e3) {
                      var t3, n3, r3, i2;
                      let {
                        x: l2,
                        y: a2,
                        placement: f3,
                        rects: s2,
                        middlewareData: c3
                      } = e3, {
                        offset: u3 = 0,
                        mainAxis: h2 = true,
                        crossAxis: g2 = true
                      } = d(o2, e3), w2 = { x: l2, y: a2 }, x2 = y(f3), v2 = m(x2), b2 = w2[v2], A2 = w2[x2], R2 = d(u3, e3), S3 = "number" == typeof R2 ? { mainAxis: R2, crossAxis: 0 } : {
                        mainAxis: null != (t3 = R2.mainAxis) ? t3 : 0,
                        crossAxis: null != (n3 = R2.crossAxis) ? n3 : 0
                      };
                      if (h2) {
                        let e4 = "y" === v2 ? "height" : "width", t4 = s2.reference[v2] - s2.floating[e4] + S3.mainAxis, n4 = s2.reference[v2] + s2.reference[e4] - S3.mainAxis;
                        b2 < t4 ? b2 = t4 : b2 > n4 && (b2 = n4);
                      }
                      if (g2) {
                        let e4 = "y" === v2 ? "width" : "height", t4 = k.has(p(f3)), n4 = s2.reference[x2] - s2.floating[e4] + (t4 && (null == (r3 = c3.offset) ? void 0 : r3[x2]) || 0) + (t4 ? 0 : S3.crossAxis), o3 = s2.reference[x2] + s2.reference[e4] + (t4 ? 0 : (null == (i2 = c3.offset) ? void 0 : i2[x2]) || 0) - (t4 ? S3.crossAxis : 0);
                        A2 < n4 ? A2 = n4 : A2 > o3 && (A2 = o3);
                      }
                      return { [v2]: b2, [x2]: A2 };
                    }
                  }).fn,
                  options: [void 0, void 0]
                } : void 0,
                ...eF2
              },
              async fn(e3) {
                let { x: t3, y: n3, placement: r3, platform: i2 } = e3, {
                  mainAxis: o3 = true,
                  crossAxis: f3 = false,
                  limiter: s2 = {
                    fn: (e4) => {
                      let { x: t4, y: n4 } = e4;
                      return { x: t4, y: n4 };
                    }
                  },
                  ...u3
                } = d(c2, e3), p2 = { x: t3, y: n3 }, h2 = await i2.detectOverflow(e3, u3), g2 = y(r3), w2 = m(g2), x2 = p2[w2], v2 = p2[g2], b2 = (e4, t4) => a(
                  t4 + h2["y" === e4 ? "top" : "left"],
                  l(t4, t4 - h2["y" === e4 ? "bottom" : "right"])
                );
                o3 && (x2 = b2(w2, x2)), f3 && (v2 = b2(g2, v2));
                let A2 = s2.fn({ ...e3, [w2]: x2, [g2]: v2 });
                return {
                  ...A2,
                  data: {
                    x: A2.x - t3,
                    y: A2.y - n3,
                    enabled: { [w2]: o3, [g2]: f3 }
                  }
                };
              }
            }).name,
            fn: $2.fn,
            options: [f2, void 0]
          },
          J2 && {
            name: (N2 = {
              name: "flip",
              options: S2 = u2 = { ...eF2 },
              async fn(e3) {
                var t3, n3, r3, i2, o3, l2, a2, f3;
                let s2, c3, u3, {
                  placement: O3,
                  middlewareData: L3,
                  rects: P3,
                  initialPlacement: C2,
                  platform: E2,
                  elements: T2
                } = e3, {
                  mainAxis: k2 = true,
                  crossAxis: H2 = true,
                  fallbackPlacements: j3,
                  fallbackStrategy: D3 = "bestFit",
                  fallbackAxisSideDirection: F2 = "none",
                  flipAlignment: M2 = true,
                  ...z3
                } = d(S2, e3);
                if (null != (t3 = L3.arrow) && t3.alignmentOffset) return {};
                let W3 = p(O3), $3 = y(C2), N3 = p(C2) === C2, B3 = await (null == E2.isRTL ? void 0 : E2.isRTL(T2.floating)), V3 = j3 || (N3 || !M2 ? [R(C2)] : (s2 = R(C2), [w(C2), s2, w(s2)])), _3 = "none" !== F2;
                !j3 && _3 && V3.push(
                  ...(c3 = h(C2), u3 = (function(e4, t4, n4) {
                    switch (e4) {
                      case "top":
                      case "bottom":
                        if (n4) return t4 ? v : x;
                        return t4 ? x : v;
                      case "left":
                      case "right":
                        return t4 ? b : A;
                      default:
                        return [];
                    }
                  })(p(C2), "start" === F2, B3), c3 && (u3 = u3.map((e4) => e4 + "-" + c3), M2 && (u3 = u3.concat(u3.map(w)))), u3)
                );
                let X3 = [C2, ...V3], I3 = await E2.detectOverflow(e3, z3), Y3 = [], G3 = (null == (n3 = L3.flip) ? void 0 : n3.overflows) || [];
                if (k2 && Y3.push(I3[W3]), H2) {
                  let e4, t4, n4, r4, i3 = (l2 = O3, a2 = P3, void 0 === (f3 = B3) && (f3 = false), e4 = h(l2), n4 = g(t4 = m(y(l2))), r4 = "x" === t4 ? e4 === (f3 ? "end" : "start") ? "right" : "left" : "start" === e4 ? "bottom" : "top", a2.reference[n4] > a2.floating[n4] && (r4 = R(r4)), [r4, R(r4)]);
                  Y3.push(I3[i3[0]], I3[i3[1]]);
                }
                if (G3 = [...G3, { placement: O3, overflows: Y3 }], !Y3.every((e4) => e4 <= 0)) {
                  let e4 = ((null == (r3 = L3.flip) ? void 0 : r3.index) || 0) + 1, t4 = X3[e4];
                  if (t4 && ("alignment" !== H2 || $3 === y(t4) || G3.every(
                    (e5) => y(e5.placement) !== $3 || e5.overflows[0] > 0
                  )))
                    return {
                      data: { index: e4, overflows: G3 },
                      reset: { placement: t4 }
                    };
                  let n4 = null == (i2 = G3.filter((e5) => e5.overflows[0] <= 0).sort(
                    (e5, t5) => e5.overflows[1] - t5.overflows[1]
                  )[0]) ? void 0 : i2.placement;
                  if (!n4)
                    switch (D3) {
                      case "bestFit": {
                        let e5 = null == (o3 = G3.filter((e6) => {
                          if (_3) {
                            let t5 = y(e6.placement);
                            return t5 === $3 || "y" === t5;
                          }
                          return true;
                        }).map((e6) => [
                          e6.placement,
                          e6.overflows.filter((e7) => e7 > 0).reduce((e7, t5) => e7 + t5, 0)
                        ]).sort((e6, t5) => e6[1] - t5[1])[0]) ? void 0 : o3[0];
                        e5 && (n4 = e5);
                        break;
                      }
                      case "initialPlacement":
                        n4 = C2;
                    }
                  if (O3 !== n4) return { reset: { placement: n4 } };
                }
                return {};
              }
            }).name,
            fn: N2.fn,
            options: [u2, void 0]
          },
          {
            name: (B2 = {
              name: "size",
              options: L2 = O2 = {
                ...eF2,
                apply: eH(
                  ({
                    elements: e3,
                    rects: t3,
                    availableWidth: n3,
                    availableHeight: r3
                  }) => {
                    let { width: i2, height: o3 } = t3.reference, l2 = e3.floating.style;
                    l2.setProperty(
                      "--radix-popper-available-width",
                      `${n3}px`
                    ), l2.setProperty(
                      "--radix-popper-available-height",
                      `${r3}px`
                    ), l2.setProperty(
                      "--radix-popper-anchor-width",
                      `${i2}px`
                    ), l2.setProperty(
                      "--radix-popper-anchor-height",
                      `${o3}px`
                    );
                  },
                  "apply"
                )
              },
              async fn(e3) {
                let t3, n3, { placement: r3, rects: i2, platform: o3, elements: f3 } = e3, { apply: s2 = () => {
                }, ...c3 } = d(L2, e3), u3 = await o3.detectOverflow(e3, c3), m2 = p(r3), g2 = h(r3), w2 = "y" === y(r3), { width: x2, height: v2 } = i2.floating;
                "top" === m2 || "bottom" === m2 ? (t3 = m2, n3 = g2 === (await (null == o3.isRTL ? void 0 : o3.isRTL(f3.floating)) ? "start" : "end") ? "left" : "right") : (n3 = m2, t3 = "end" === g2 ? "top" : "bottom");
                let b2 = v2 - u3.top - u3.bottom, A2 = x2 - u3.left - u3.right, R2 = l(v2 - u3[t3], b2), S3 = l(x2 - u3[n3], A2), O3 = e3.middlewareData.shift, P3 = !O3, C2 = R2, E2 = S3;
                null != O3 && O3.enabled.x && (E2 = A2), null != O3 && O3.enabled.y && (C2 = b2), P3 && !g2 && (w2 ? E2 = x2 - 2 * a(u3.left, u3.right) : C2 = v2 - 2 * a(u3.top, u3.bottom)), await s2({ ...e3, availableWidth: E2, availableHeight: C2 });
                let T2 = await o3.getDimensions(f3.floating);
                return x2 !== T2.width || v2 !== T2.height ? { reset: { rects: true } } : {};
              }
            }).name,
            fn: B2.fn,
            options: [O2, void 0]
          },
          eu2 && {
            name: (V2 = {
              name: "arrow",
              options: j2 = P2 = { element: eu2, padding: U2 },
              fn(e3) {
                let { element: t3, padding: n3 } = "function" == typeof j2 ? j2(e3) : j2;
                return t3 && {}.hasOwnProperty.call(t3, "current") ? null != t3.current ? em({ element: t3.current, padding: n3 }).fn(e3) : {} : t3 ? em({ element: t3, padding: n3 }).fn(e3) : {};
              }
            }).name,
            fn: V2.fn,
            options: [P2, void 0]
          },
          eG({ arrowWidth: eO2, arrowHeight: eP2 }),
          en2 && {
            name: (_2 = {
              name: "hide",
              options: z2 = D2 = {
                strategy: "referenceHidden",
                ...eF2,
                boundary: eD2 ? eF2.boundary : void 0
              },
              async fn(e3) {
                let { rects: t3, platform: n3 } = e3, { strategy: r3 = "referenceHidden", ...i2 } = d(z2, e3);
                switch (r3) {
                  case "referenceHidden": {
                    let r4 = E(
                      await n3.detectOverflow(e3, {
                        ...i2,
                        elementContext: "reference"
                      }),
                      t3.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: r4,
                        referenceHidden: T(r4)
                      }
                    };
                  }
                  case "escaped": {
                    let r4 = E(
                      await n3.detectOverflow(e3, { ...i2, altBoundary: true }),
                      t3.floating
                    );
                    return { data: { escapedOffsets: r4, escaped: T(r4) } };
                  }
                  default:
                    return {};
                }
              }
            }).name,
            fn: _2.fn,
            options: [D2, void 0]
          }
        ]
      }), eX2 = ea2.setPlacementState;
      (0, eE.N)(
        () => (eX2(e$2), () => {
          eX2(void 0);
        }),
        [e$2, eX2]
      );
      let [eI2, eU2] = eq(e$2), eJ2 = (0, eC.c)(ei2);
      (0, eE.N)(() => {
        eV2 && eJ2?.();
      }, [eV2, eJ2]);
      let eK2 = e_2.arrow?.x, eQ2 = e_2.arrow?.y, eZ = e_2.arrow?.centerOffset !== 0, [e0, e1] = i.useState();
      return (0, eE.N)(() => {
        ef2 && e1(window.getComputedStyle(ef2).zIndex);
      }, [ef2]), (0, eR.jsx)("div", {
        ref: eM2.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...eW2,
          transform: eV2 ? eW2.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: e0,
          "--radix-popper-transform-origin": [
            e_2.transformOrigin?.x,
            e_2.transformOrigin?.y
          ].join(" "),
          ...e_2.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e2.dir,
        children: (0, eR.jsx)(eB, {
          scope: X2,
          placedSide: eI2,
          placedAlign: eU2,
          onArrowChange: ed2,
          arrowX: eK2,
          arrowY: eQ2,
          shouldHideArrow: eZ,
          children: (0, eR.jsx)(eA.sG.div, {
            "data-side": eI2,
            "data-align": eU2,
            ...el2,
            ref: ec2,
            style: {
              ...el2.style,
              animation: eV2 ? el2.style?.animation : "none"
            }
          })
        })
      });
    }, "PopperContent")
  ), eX = { top: "bottom", right: "left", bottom: "top", left: "right" }, eI = i.forwardRef(
    eH(function(e2, t2) {
      let { __scopePopper: n2, ...r2 } = e2, i2 = eV("PopperArrow", n2), o2 = eX[i2.placedSide];
      return (0, eR.jsx)("span", {
        ref: i2.onArrowChange,
        style: {
          position: "absolute",
          left: i2.arrowX,
          top: i2.arrowY,
          [o2]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i2.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i2.placedSide],
          visibility: i2.shouldHideArrow ? "hidden" : void 0
        },
        children: (0, eR.jsx)(eO, {
          ...r2,
          ref: t2,
          style: { ...r2.style, display: "block" }
        })
      });
    }, "PopperArrow")
  );
  function eY(e2) {
    return null !== e2;
  }
  eH(eY, "isNotNull");
  var eG = eH(
    (e2) => ({
      name: "transformOrigin",
      options: e2,
      fn(t2) {
        let { placement: n2, rects: r2, middlewareData: i2 } = t2, o2 = i2.arrow?.centerOffset !== 0, l2 = o2 ? 0 : e2.arrowWidth, a2 = o2 ? 0 : e2.arrowHeight, [f2, s2] = eq(n2), c2 = { start: "0%", center: "50%", end: "100%" }[s2], u2 = (i2.arrow?.x ?? 0) + l2 / 2, d2 = (i2.arrow?.y ?? 0) + a2 / 2, p2 = "", h2 = "";
        return "bottom" === f2 ? (p2 = o2 ? c2 : `${u2}px`, h2 = `${-a2}px`) : "top" === f2 ? (p2 = o2 ? c2 : `${u2}px`, h2 = `${r2.floating.height + a2}px`) : "right" === f2 ? (p2 = `${-a2}px`, h2 = o2 ? c2 : `${d2}px`) : "left" === f2 && (p2 = `${r2.floating.width + a2}px`, h2 = o2 ? c2 : `${d2}px`), { data: { x: p2, y: h2 } };
      }
    }),
    "transformOrigin"
  );
  function eq(e2) {
    let [t2, n2 = "center"] = e2.split("-");
    return [t2, n2];
  }
  eH(eq, "getSideAndAlignFromPlacement");
  var eU = eW, eJ = e$, eK = e_, eQ = eI;
}

__m(__module,__exports,__require);
}