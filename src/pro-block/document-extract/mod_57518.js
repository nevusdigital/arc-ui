function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { B8: () => T, UC: () => I, bL: () => C, l9: () => q });
  var n = a(12115), r = a(70379), d = a(68599), i = a(69245), o = a(83935), l = a(55897), h = a(1933), c = a(59322), s = a(89971), y = a(95155), p = Object.defineProperty, u = (e2, t2) => p(e2, "name", { value: t2, configurable: true }), k = "Tabs", [f, v] = (0, d.A)(k, [i.RG]), m = (0, i.RG)(), [M, b] = f(k), A = n.forwardRef(
    u(function(e2, t2) {
      let {
        __scopeTabs: a2,
        value: n2,
        onValueChange: r2,
        defaultValue: d2,
        orientation: i2 = "horizontal",
        dir: o2,
        activationMode: p2 = "automatic",
        ...u2
      } = e2, f2 = (0, h.jH)(o2), [v2, m2] = (0, c.i)({
        prop: n2,
        onChange: r2,
        defaultProp: d2 ?? "",
        caller: k
      });
      return (0, y.jsx)(M, {
        scope: a2,
        baseId: (0, s.B)(),
        value: v2,
        onValueChange: m2,
        orientation: i2,
        dir: f2,
        activationMode: p2,
        children: (0, y.jsx)(l.sG.div, {
          dir: f2,
          "data-orientation": i2,
          ...u2,
          ref: t2
        })
      });
    }, "Tabs")
  ), g = n.forwardRef(
    u(function(e2, t2) {
      let { __scopeTabs: a2, loop: n2 = true, ...r2 } = e2, d2 = b("TabsList", a2), o2 = m(a2);
      return (0, y.jsx)(i.bL, {
        asChild: true,
        ...o2,
        orientation: d2.orientation,
        dir: d2.dir,
        loop: n2,
        children: (0, y.jsx)(l.sG.div, {
          role: "tablist",
          "aria-orientation": d2.orientation,
          ...r2,
          ref: t2
        })
      });
    }, "TabsList")
  ), w = n.forwardRef(
    u(function(e2, t2) {
      let { __scopeTabs: a2, value: n2, disabled: d2 = false, ...o2 } = e2, h2 = b("TabsTrigger", a2), c2 = m(a2), s2 = z(h2.baseId, n2), p2 = j(h2.baseId, n2), u2 = n2 === h2.value;
      return (0, y.jsx)(i.q7, {
        asChild: true,
        ...c2,
        focusable: !d2,
        active: u2,
        children: (0, y.jsx)(l.sG.button, {
          type: "button",
          role: "tab",
          "aria-selected": u2,
          "aria-controls": p2,
          "data-state": u2 ? "active" : "inactive",
          "data-disabled": d2 ? "" : void 0,
          disabled: d2,
          id: s2,
          ...o2,
          ref: t2,
          onMouseDown: (0, r.mK)(e2.onMouseDown, (e3) => {
            d2 || 0 !== e3.button || false !== e3.ctrlKey ? e3.preventDefault() : h2.onValueChange(n2);
          }),
          onKeyDown: (0, r.mK)(e2.onKeyDown, (e3) => {
            !d2 && e3.target === e3.currentTarget && [" ", "Enter"].includes(e3.key) && h2.onValueChange(n2);
          }),
          onFocus: (0, r.mK)(e2.onFocus, () => {
            let e3 = "manual" !== h2.activationMode;
            u2 || d2 || !e3 || h2.onValueChange(n2);
          })
        })
      });
    }, "TabsTrigger")
  ), x = n.forwardRef(
    u(function(e2, t2) {
      let { __scopeTabs: a2, value: r2, forceMount: d2, children: i2, ...h2 } = e2, c2 = b("TabsContent", a2), s2 = z(c2.baseId, r2), p2 = j(c2.baseId, r2), u2 = r2 === c2.value, k2 = n.useRef(u2);
      return n.useEffect(() => {
        let e3 = requestAnimationFrame(() => k2.current = false);
        return () => cancelAnimationFrame(e3);
      }, []), (0, y.jsx)(o.C, {
        present: d2 || u2,
        children: ({ present: a3 }) => (0, y.jsx)(l.sG.div, {
          "data-state": u2 ? "active" : "inactive",
          "data-orientation": c2.orientation,
          role: "tabpanel",
          "aria-labelledby": s2,
          hidden: !a3,
          id: p2,
          tabIndex: 0,
          ...h2,
          ref: t2,
          style: {
            ...e2.style,
            animationDuration: k2.current ? "0s" : void 0
          },
          children: a3 && i2
        })
      });
    }, "TabsContent")
  );
  function z(e2, t2) {
    return `${e2}-trigger-${t2}`;
  }
  function j(e2, t2) {
    return `${e2}-content-${t2}`;
  }
  u(z, "makeTriggerId"), u(j, "makeContentId");
  var C = A, T = g, q = w, I = x;
}

__m(__module,__exports,__require);
}