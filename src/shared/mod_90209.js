function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { default: () => a });
  var n = i(12115);
  let s = (...t2) => t2.filter((t3, e2, i2) => !!t3 && "" !== t3.trim() && i2.indexOf(t3) === e2).join(" ").trim(), r = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, o = (0, n.createContext)({}), a = (0, n.forwardRef)(
    ({
      color: t2,
      size: e2,
      width: i2,
      height: a2,
      strokeWidth: l,
      absoluteStrokeWidth: h,
      nonScalingStroke: u,
      className: d = "",
      children: c,
      iconNode: p = [],
      icon: m = { node: p, aliases: [], size: 24 },
      ...f
    }, v) => {
      let {
        size: y = 24,
        strokeWidth: g = 2,
        absoluteStrokeWidth: x = false,
        nonScalingStroke: w = false,
        color: S = "currentColor",
        className: b = ""
      } = (0, n.useContext)(o) ?? {}, T = !!c || ((t3) => {
        for (let e3 in t3)
          if (e3.startsWith("aria-") || "role" === e3 || "title" === e3)
            return true;
        return false;
      })(f), [P, A, k = []] = (function(t3, e3 = {}) {
        return (function(t4, e4 = {}) {
          let i3 = e4.attributeNames ?? {}, n2 = (t5) => i3[t5] ?? t5, o2 = t4.size ?? t4.width ?? r.width, a3 = t4.size ?? t4.height ?? r.height, l2 = t4.aliases?.filter((t5) => "string" == typeof t5 && "" !== t5.trim()).map((t5) => `lucide-${t5}`) ?? [], h2 = [...t4.name ? [`lucide-${t4.name}`] : [], ...l2], u2 = e4.className?.split(" ").filter(Boolean) ?? [], d2 = false === e4.includeDefaultClasses ? s(...u2) : s("lucide", ...h2, ...u2), c2 = e4.absoluteStrokeWidth ? Number(e4.strokeWidth ?? r["stroke-width"]) * Number(t4.size ?? t4.width ?? r.width) / Number(e4.size ?? e4.width ?? r.width) : e4.strokeWidth ?? r["stroke-width"];
          return [
            "svg",
            {
              ...Object.entries(r).reduce(
                (t5, [e5, i4]) => (t5[n2(e5)] = i4, t5),
                {}
              ),
              ..."color" in e4 && e4.color && { [n2("stroke")]: e4.color },
              ..."size" in e4 && null != e4.size && {
                [n2("width")]: e4.size,
                [n2("height")]: e4.size
              },
              ..."width" in e4 && null != e4.width && { [n2("width")]: e4.width },
              ..."height" in e4 && null != e4.height && { [n2("height")]: e4.height },
              [n2("stroke-width")]: c2,
              ...d2 && { [n2("class")]: d2 },
              [n2("viewBox")]: `0 0 ${o2} ${a3}`,
              ...false === e4.hasA11yProp ? { [n2("aria-hidden")]: "true" } : {},
              ..."attributes" in e4 && e4.attributes
            },
            t4.node.map((t5) => {
              let [i4, s2, r2] = t5, o3 = e4.nonScalingStroke ? { [n2("vector-effect")]: "non-scaling-stroke", ...s2 } : s2;
              return r2 ? [i4, o3, r2] : [i4, o3];
            })
          ];
        })(t3, {
          ...e3,
          attributeNames: {
            ...e3.attributeNames,
            class: "className",
            "stroke-width": "strokeWidth",
            "stroke-linecap": "strokeLinecap",
            "stroke-linejoin": "strokeLinejoin",
            "vector-effect": "vectorEffect"
          }
        });
      })(m, {
        color: t2 ?? S,
        width: i2 ?? e2 ?? y,
        height: a2 ?? e2 ?? y,
        strokeWidth: l ?? g,
        absoluteStrokeWidth: h ?? x,
        nonScalingStroke: u ?? w,
        className: s(b, d),
        hasA11yProp: T,
        attributes: f
      });
      return (0, n.createElement)(P, { ref: v, ...A }, [
        ...k.map(([t3, e3]) => (0, n.createElement)(t3, e3)),
        ...Array.isArray(c) ? c : [c]
      ]);
    }
  );
}

__m(__module,__exports,__require);
}