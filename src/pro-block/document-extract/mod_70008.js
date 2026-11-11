function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Xi: () => g, av: () => j, j7: () => _, tU: () => y });
  var n = a(95155), r = a(12115), s = a(57518), i = a(78780), o = a(76721), l = a(57700), c = a(18310), d = a(25354), u = a(92171), m = a(80642), p = a(7770), h = a(1260), x = a.n(h);
  let f = (0, r.createContext)({
    active: "",
    layoutId: "tabs",
    direction: 1,
    panelHeightRef: { current: null },
    leavingRectRef: { current: null }
  });
  function y({
    value: e2,
    defaultValue: t2,
    onValueChange: a2,
    className: i2,
    ...o2
  }) {
    let [c2, d2] = (0, r.useState)(t2 ?? ""), [u2, m2] = (0, r.useState)(1), p2 = e2 ?? c2, h2 = (0, r.useId)(), _2 = (0, r.useRef)(null), g2 = (0, r.useRef)(null), b2 = (0, r.useRef)(null);
    return (0, n.jsx)(f.Provider, {
      value: {
        active: p2,
        layoutId: h2,
        direction: u2,
        panelHeightRef: g2,
        leavingRectRef: b2
      },
      children: (0, n.jsx)(l.o, {
        id: h2,
        children: (0, n.jsx)(s.bL, {
          ...o2,
          ref: _2,
          className: [x().root, i2].filter(Boolean).join(" "),
          value: p2,
          onValueChange: function(t3) {
            let n2 = _2.current;
            b2.current = n2?.querySelector(
              ':scope > [role="tabpanel"][data-state="active"]'
            )?.getBoundingClientRect() ?? null;
            let r2 = n2 ? Array.from(n2.querySelectorAll('[role="tab"][data-value]')).filter((e3) => e3.closest(`.${x().root}`) === n2).map((e3) => e3.dataset.value) : [], s2 = r2.indexOf(p2), i3 = r2.indexOf(t3);
            s2 >= 0 && i3 >= 0 && s2 !== i3 && m2(i3 > s2 ? 1 : -1), void 0 === e2 && d2(t3), a2?.(t3);
          }
        })
      })
    });
  }
  function _({ className: e2, ...t2 }) {
    let { active: a2 } = (0, r.useContext)(f), l2 = (0, c.I)(), u2 = (0, r.useRef)(null), m2 = (0, r.useRef)(null), p2 = (0, r.useRef)(null), [h2, y2] = (0, r.useState)({ overflow: false, left: false, right: false }), g2 = (0, r.useCallback)(() => {
      let e3 = u2.current, t3 = m2.current;
      if (!e3 || !t3) return;
      let a3 = Math.max(0, t3.scrollWidth - t3.clientWidth), n2 = {
        overflow: t3.scrollWidth > e3.clientWidth + 1,
        left: t3.scrollLeft > 1,
        right: t3.scrollLeft < a3 - 1
      };
      y2(
        (e4) => e4.overflow === n2.overflow && e4.left === n2.left && e4.right === n2.right ? e4 : n2
      );
    }, []), b2 = (0, r.useCallback)(
      (e3) => {
        let t3 = m2.current;
        if (!t3 || !e3) return;
        let a3 = t3.getBoundingClientRect(), n2 = e3.getBoundingClientRect(), r2 = Math.max(0, t3.scrollWidth - t3.clientWidth), s2 = a3.left + 34 * (t3.scrollLeft > 1), i2 = a3.right - 34 * (t3.scrollLeft < r2 - 1), o2 = n2.left < s2 ? n2.left - s2 : n2.right > i2 ? n2.right - i2 : 0;
        o2 && t3.scrollBy({ left: o2, behavior: l2 ? "instant" : "smooth" });
      },
      [l2]
    );
    (0, r.useLayoutEffect)(() => {
      let e3 = u2.current, t3 = m2.current, a3 = p2.current;
      if (!e3 || !t3 || !a3) return;
      let n2 = new ResizeObserver(g2);
      return n2.observe(e3), n2.observe(t3), n2.observe(a3), t3.addEventListener("scroll", g2, { passive: true }), g2(), () => {
        n2.disconnect(), t3.removeEventListener("scroll", g2);
      };
    }, [g2]), (0, r.useLayoutEffect)(() => {
      b2(
        p2.current?.querySelector('[role="tab"][data-state="active"]') ?? null
      );
    }, [a2, b2]);
    let v2 = (e3) => m2.current?.scrollBy({
      left: e3 * (m2.current?.clientWidth ?? 0) * 0.75,
      behavior: l2 ? "instant" : "smooth"
    });
    return (0, n.jsxs)("div", {
      ref: u2,
      className: x().listShell,
      "data-overflow": h2.overflow,
      "data-left": h2.left,
      "data-right": h2.right,
      children: [
        h2.overflow && (0, n.jsx)("button", {
          type: "button",
          className: `${x().scrollButton} ${x().scrollLeft}`,
          "aria-label": "Scroll tabs left",
          disabled: !h2.left,
          onClick: () => v2(-1),
          children: (0, n.jsx)(i.A, {
            width: 17,
            height: 17,
            "aria-hidden": "true"
          })
        }),
        (0, n.jsx)(d.PY1.div, {
          ref: m2,
          layoutScroll: true,
          className: x().viewport,
          onFocusCapture: (e3) => {
            e3.target instanceof HTMLElement && "tab" === e3.target.getAttribute("role") && b2(e3.target);
          },
          children: (0, n.jsx)(s.B8, {
            ...t2,
            ref: p2,
            className: [x().list, e2].filter(Boolean).join(" ")
          })
        }),
        h2.overflow && (0, n.jsx)("button", {
          type: "button",
          className: `${x().scrollButton} ${x().scrollRight}`,
          "aria-label": "Scroll tabs right",
          disabled: !h2.right,
          onClick: () => v2(1),
          children: (0, n.jsx)(o.A, {
            width: 17,
            height: 17,
            "aria-hidden": "true"
          })
        })
      ]
    });
  }
  function g({ className: e2, children: t2, value: a2, ...i2 }) {
    let { active: o2 } = (0, r.useContext)(f), l2 = (0, c.I)();
    return (0, n.jsxs)(s.l9, {
      ...i2,
      value: a2,
      "data-value": a2,
      className: [x().trigger, e2].filter(Boolean).join(" "),
      children: [
        o2 === a2 && (0, n.jsx)(d.PY1.span, {
          className: x().selection,
          layoutId: "selection",
          layoutDependency: o2,
          transition: l2 ? { duration: 0 } : p.T.spring.morph,
          "aria-hidden": "true"
        }),
        (0, n.jsx)("span", { className: x().triggerLabel, children: t2 })
      ]
    });
  }
  let b = {
    enter: (e2) => ({ opacity: 0, x: 8 * e2 }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: p.T.duration.standard,
          ease: [...p.T.ease.enter]
        },
        x: p.T.spring.smooth
      }
    },
    exit: (e2) => ({
      opacity: 0,
      x: -6 * e2,
      transition: {
        duration: p.T.duration.instant,
        ease: [...p.T.ease.standard]
      }
    })
  }, v = {
    enter: { opacity: 0, x: 0 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: p.T.duration.instant }
    },
    exit: { opacity: 0, x: 0, transition: { duration: 0.1 } }
  };
  function j({ className: e2, value: t2, forceMount: a2, children: i2, ...o2 }) {
    let {
      active: l2,
      direction: h2,
      panelHeightRef: y2,
      leavingRectRef: _2
    } = (0, r.useContext)(f), g2 = (0, c.I)(), k = (0, r.useRef)(null), N = l2 === t2, w = [x().content, e2].filter(Boolean).join(" ");
    return ((0, r.useLayoutEffect)(() => {
      let e3, t3 = k.current;
      if (!t3 || a2) return;
      if (!N) {
        let e4 = _2.current, a3 = t3.getBoundingClientRect();
        e4 && (t3.style.translate = `${e4.left - a3.left}px ${e4.top - a3.top}px`), t3.inert = true;
        return;
      }
      t3.style.translate = "", t3.inert = false;
      let n2 = y2.current, r2 = t3.offsetHeight, s2 = () => {
        t3.style.height = "", t3.style.overflow = "";
      };
      null !== n2 && Math.abs(n2 - r2) > 1 && !g2 && (r2 > n2 && (t3.style.overflow = "clip"), e3 = (0, u.i)(
        t3,
        { height: [n2, r2] },
        { ...p.T.spring.smooth, onComplete: s2 }
      )), y2.current = e3 && null !== n2 ? n2 : r2;
      let i3 = new ResizeObserver(() => {
        y2.current = t3.offsetHeight;
      });
      return i3.observe(t3), () => {
        i3.disconnect(), e3?.stop(), s2();
      };
    }, [N, g2, a2, y2, _2]), a2) ? (0, n.jsx)(s.UC, {
      ...o2,
      value: t2,
      forceMount: true,
      className: w,
      children: i2
    }) : (0, n.jsx)(m.N, {
      initial: false,
      mode: "popLayout",
      custom: h2,
      children: N && (0, r.createElement)(
        s.UC,
        { ...o2, key: t2, value: t2, forceMount: true, asChild: true },
        (0, n.jsx)(d.PY1.div, {
          ref: k,
          className: w,
          custom: h2,
          variants: g2 ? v : b,
          initial: "enter",
          animate: "center",
          exit: "exit",
          children: i2
        })
      )
    });
  }
}

__m(__module,__exports,__require);
}