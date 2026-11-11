function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { $: () => P, A: () => A });
  var r = n(95155), o = n(12115), a = n(28245), i = n(92171), s = n(79196), l = n(25354), u = n(18310), c = n(80642), d = n(7770), p = n(31852), f = n.n(p);
  let h = {
    pressed: (e2) => {
      let t2 = e2.current?.offsetWidth ?? 0;
      return {
        scale: t2 > 220 ? 0.985 : t2 && t2 <= 48 ? 0.96 : 0.97,
        transition: {
          duration: d.T.duration.instant,
          ease: [...d.T.ease.standard]
        }
      };
    }
  }, b = { opacity: 1, y: 0, scale: 1 }, y = { opacity: 0, y: 2 }, v = {
    opacity: 0,
    transition: { duration: 0.1, ease: [...d.T.ease.standard] }
  }, m = { opacity: 0, scale: 0.85 }, _ = {
    opacity: 0,
    transition: { duration: 0.1, ease: [...d.T.ease.standard] }
  }, g = { ...b, opacity: 0 }, x = { opacity: 0, transition: { duration: d.T.duration.instant } }, j = {
    ...d.T.spring.snappy,
    opacity: { duration: d.T.duration.fast, ease: [...d.T.ease.enter] }
  };
  function C({ children: e2, icon: t2, reduced: n2, ref: o2 }) {
    let a2 = (0, s.tF)();
    return (0, r.jsx)(l.PY1.span, {
      ref: o2,
      className: f().labelPhase,
      "aria-hidden": !a2 || void 0,
      initial: n2 ? g : t2 ? m : y,
      animate: b,
      exit: n2 ? x : t2 ? _ : v,
      transition: n2 ? { duration: d.T.duration.instant } : t2 ? j : { duration: d.T.duration.standard, ease: [...d.T.ease.enter] },
      children: e2
    });
  }
  let P = (0, o.forwardRef)(function({
    className: e2,
    variant: t2 = "primary",
    size: n2 = "md",
    loading: s2 = false,
    disabled: p2,
    children: b2,
    onClick: y2,
    ...v2
  }, m2) {
    let g2, P2, A2, O = (0, u.I)() ?? false, w = (0, o.useRef)(null), k = (0, o.useRef)(null), R = (function e3(t3) {
      if (null == t3 || "boolean" == typeof t3) return "";
      if ("string" == typeof t3 || "number" == typeof t3 || "bigint" == typeof t3)
        return String(t3);
      if (Array.isArray(t3)) return t3.map(e3).join("");
      if (!(0, o.isValidElement)(t3)) return "";
      let n3 = t3.type;
      return `<${"string" == typeof n3 ? n3 : n3?.displayName ?? n3?.name ?? ""}>${e3(t3.props.children)}`;
    })(b2), N = (g2 = (0, a.d)("auto"), P2 = (0, o.useRef)(R), A2 = (0, o.useRef)(0), (0, o.useLayoutEffect)(() => {
      P2.current !== R && (P2.current = R, A2.current = performance.now() + 700);
    }, [R]), (0, o.useEffect)(() => {
      let e3 = k.current, t3 = e3?.parentElement;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let n3 = false, r2 = new ResizeObserver(([e4]) => {
        if (!e4) return;
        let r3 = e4.contentRect.width;
        if (!r3 || !n3 || O || performance.now() > A2.current) {
          n3 = r3 > 0, g2.jump(r3 || "auto"), delete t3.dataset.morphing;
          return;
        }
        t3.dataset.morphing = "", (0, i.i)(g2, r3, {
          ...d.T.spring.morph,
          onComplete: () => {
            delete t3.dataset.morphing;
          }
        });
      });
      return r2.observe(e3), () => r2.disconnect();
    }, [k, O, g2]), g2), E = (0, o.useCallback)(
      (e3) => {
        w.current = e3, "function" == typeof m2 ? m2(e3) : m2 && (m2.current = e3);
      },
      [m2]
    ), T = v2["aria-haspopup"], F = void 0 !== T && false !== T && "false" !== T || "combobox" === v2.role || void 0 !== v2["data-state"], M = p2 || s2 || true === v2["aria-disabled"] || "true" === v2["aria-disabled"], L = [f().button, f()[t2], f()[n2], e2].filter(Boolean).join(" ");
    return (0, r.jsxs)(l.PY1.button, {
      ref: E,
      tabIndex: v2.tabIndex ?? 0,
      className: L,
      disabled: p2,
      "aria-busy": s2 || void 0,
      custom: w,
      variants: h,
      whileTap: O || F || M ? void 0 : "pressed",
      transition: d.T.spring.snappy,
      ...v2,
      "aria-disabled": s2 || v2["aria-disabled"] || void 0,
      onClick: s2 ? (e3) => e3.preventDefault() : y2,
      children: [
        (0, r.jsx)(c.N, {
          initial: false,
          children: s2 ? (0, r.jsx)(
            l.PY1.span,
            {
              className: f().loader,
              "aria-hidden": "true",
              initial: O ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
              animate: { opacity: 1, scale: 1 },
              exit: O ? x : { ..._, scale: 0.8 },
              transition: O ? { duration: d.T.duration.instant } : j,
              children: (0, r.jsx)("span", { className: f().spinner })
            },
            "loader"
          ) : null
        }),
        (0, r.jsx)(l.PY1.span, {
          className: [f().labelSlot, s2 ? f().loadingLabel : ""].filter(Boolean).join(" "),
          style: { width: N },
          children: (0, r.jsx)("span", {
            ref: k,
            className: f().labelContent,
            children: (0, r.jsx)(c.N, {
              mode: "popLayout",
              initial: false,
              children: (0, r.jsx)(
                C,
                {
                  icon: !/\S/.test(R.replace(/<[^>]*>/g, "")),
                  reduced: O,
                  children: b2
                },
                R
              )
            })
          })
        })
      ]
    });
  });
  P.displayName = "Button";
  let A = P;
}

__m(__module,__exports,__require);
}