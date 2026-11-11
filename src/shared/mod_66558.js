function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => d });
  var a = r(95155), n = r(12115), i = r(18310), s = r(57700), l = r(25354), o = r(7770), c = r(42686), u = r.n(c);
  function d({
    options: e2,
    value: t2,
    onValueChange: r2,
    label: c2,
    onOptionIntent: h,
    className: p
  }) {
    let f = (0, n.useId)(), g = (0, i.I)(), m = (0, n.useRef)(null);
    (0, n.useLayoutEffect)(() => {
      let e3 = m.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = e3.scrollWidth - e3.clientWidth - e3.scrollLeft;
        e3.toggleAttribute("data-fade-start", e3.scrollLeft > 1), e3.toggleAttribute("data-fade-end", t4 > 1);
      };
      t3(), e3.addEventListener("scroll", t3, { passive: true });
      let r3 = "u" < typeof ResizeObserver ? null : new ResizeObserver(t3);
      return r3?.observe(e3), () => {
        e3.removeEventListener("scroll", t3), r3?.disconnect();
      };
    }, [e2.length]);
    let y = (0, n.useRef)(true);
    (0, n.useEffect)(() => {
      let e3 = m.current, t3 = e3?.querySelector('[aria-pressed="true"]');
      if (!e3 || !t3 || e3.scrollWidth <= e3.clientWidth) {
        y.current = false;
        return;
      }
      let r3 = t3.offsetLeft - 20, a2 = t3.offsetLeft + t3.offsetWidth + 20 - e3.clientWidth, n2 = e3.scrollLeft > r3 ? r3 : e3.scrollLeft < a2 ? a2 : e3.scrollLeft;
      n2 !== e3.scrollLeft && e3.scrollTo({
        left: Math.max(0, n2),
        behavior: y.current || g ? "auto" : "smooth"
      }), y.current = false;
    }, [t2, g]);
    let x = Math.max(
      0,
      e2.findIndex((e3) => e3.value === t2)
    ), v = (t3) => {
      let a2 = e2.length - 1, n2 = "ArrowRight" === t3.key || "ArrowDown" === t3.key ? x === a2 ? 0 : x + 1 : "ArrowLeft" === t3.key || "ArrowUp" === t3.key ? 0 === x ? a2 : x - 1 : "Home" === t3.key ? 0 : "End" === t3.key ? a2 : -1;
      !(n2 < 0) && e2[n2] && (t3.preventDefault(), r2(e2[n2].value), m.current?.querySelector(`[data-value="${CSS.escape(e2[n2].value)}"]`)?.focus({ preventScroll: true }));
    };
    return (0, a.jsx)("div", {
      className: `${u().root} ${p ?? ""}`,
      role: "group",
      "aria-label": c2,
      children: (0, a.jsx)(s.o, {
        id: f,
        children: (0, a.jsx)(l.PY1.div, {
          ref: m,
          layoutScroll: true,
          className: u().track,
          children: e2.map(
            (e3, n2) => (0, a.jsxs)(
              "button",
              {
                id: `${f}-${e3.value}`,
                className: u().button,
                type: "button",
                "data-value": e3.value,
                "aria-pressed": t2 === e3.value,
                tabIndex: n2 === x ? 0 : -1,
                onClick: () => r2(e3.value),
                onKeyDown: v,
                onPointerEnter: h ? () => h(e3.value) : void 0,
                onFocus: h ? () => h(e3.value) : void 0,
                children: [
                  t2 === e3.value && (0, a.jsx)(l.PY1.span, {
                    className: u().selection,
                    layoutId: "selection",
                    layoutDependency: t2,
                    transition: g ? { duration: 0 } : o.T.spring.morph,
                    "aria-hidden": "true"
                  }),
                  (0, a.jsxs)("span", {
                    className: u().label,
                    children: [e3.label, e3.accessory]
                  })
                ]
              },
              e3.value
            )
          )
        })
      })
    });
  }
}

__m(__module,__exports,__require);
}