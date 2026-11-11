function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.d(t, { r: () => C });
  var a = s(95155), r = s(12115), i = s(28245), n = s(92171), o = s(25354), d = s(80642), c = s(18310), l = s(90467), u = s(7770), p = s(66466), h = s.n(p);
  let m = {
    pressed: (e2) => ({
      scale: (e2.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97,
      transition: {
        duration: u.T.duration.instant,
        ease: [...u.T.ease.standard]
      }
    })
  }, _ = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, x = { duration: 0.16, ease: [...u.T.ease.enter] }, f = {
    opacity: 0,
    transition: { duration: 0.1, ease: [...u.T.ease.standard] }
  }, g = { opacity: 0, scale: 0.6, filter: `blur(${u.T.blur.subtle}px)` }, j = {
    ...g,
    transition: { duration: u.T.duration.fast, ease: [...u.T.ease.standard] }
  }, b = { opacity: 0, x: -6, filter: `blur(${u.T.blur.subtle}px)` }, y = {
    opacity: 0,
    x: 8,
    filter: `blur(${u.T.blur.subtle}px)`,
    transition: { duration: u.T.duration.fast, ease: [...u.T.ease.standard] }
  }, w = { ..._, x: 0 }, k = { ..._, opacity: 0 }, v = { opacity: 0, transition: { duration: u.T.duration.instant } }, N = {
    ...u.T.spring.snappy,
    opacity: { duration: u.T.duration.fast, ease: [...u.T.ease.enter] },
    filter: { duration: u.T.duration.fast, ease: [...u.T.ease.enter] }
  };
  function $({ reduced: e2 }) {
    return (0, a.jsx)("svg", {
      className: h().statusIcon,
      width: 17,
      height: 17,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: (0, a.jsx)(o.PY1.path, {
        d: "M4 12l5 5L20 6",
        initial: !e2 && { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: {
            duration: u.T.duration.standard,
            ease: [...u.T.ease.enter],
            delay: 0.05
          },
          opacity: { duration: 0.05, delay: 0.05 }
        }
      })
    });
  }
  function S({ text: e2, reduced: t2 }) {
    let s2, c2, l2, u2 = (0, r.useRef)(null), p2 = (s2 = (0, i.d)("auto"), c2 = (0, r.useRef)(e2), l2 = (0, r.useRef)(0), (0, r.useLayoutEffect)(() => {
      c2.current !== e2 && (c2.current = e2, l2.current = performance.now() + 700);
    }, [e2]), (0, r.useEffect)(() => {
      let e3 = u2.current, a2 = e3?.parentElement;
      if (!e3 || !a2 || "u" < typeof ResizeObserver) return;
      let r2 = false, i2 = new ResizeObserver(([e4]) => {
        if (!e4) return;
        let i3 = e4.contentRect.width;
        if (!i3 || !r2 || t2 || performance.now() > l2.current) {
          r2 = i3 > 0, s2.jump(i3 || "auto"), delete a2.dataset.morphing;
          return;
        }
        a2.dataset.morphing = "", (0, n.i)(s2, i3, {
          type: "spring",
          visualDuration: 0.24,
          bounce: 0,
          onComplete: () => {
            delete a2.dataset.morphing;
          }
        });
      });
      return i2.observe(e3), () => i2.disconnect();
    }, [u2, t2, s2]), s2);
    return (0, a.jsxs)(o.PY1.span, {
      className: h().morph,
      style: { width: p2 },
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("span", { ref: u2, className: h().sizer, children: e2 }),
        (0, a.jsx)(d.N, {
          initial: false,
          children: (0, a.jsx)(
            o.PY1.span,
            {
              className: h().label,
              initial: !t2 && { opacity: 0, y: 2 },
              animate: { opacity: 1, y: 0 },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : f,
              transition: x,
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function C({
    label: e2,
    successLabel: t2 = "Saved",
    pendingLabel: s2 = "Saving",
    onAction: i2,
    resetAfterMs: n2 = 2400,
    onActionError: p2,
    className: _2,
    disabled: x2,
    ...f2
  }) {
    let [T, z] = (0, r.useState)("idle"), R = (0, r.useRef)(null), L = (0, r.useRef)(null), A = (0, c.I)() ?? false, H = "pending" === T ? s2 : "success" === T ? t2 : e2;
    async function P() {
      if ("pending" !== T) {
        R.current && clearTimeout(R.current), z("pending");
        try {
          await i2(), z("success"), n2 > 0 && (R.current = setTimeout(() => z("idle"), n2));
        } catch (e3) {
          z("idle"), p2?.(e3);
        }
      }
    }
    (0, r.useEffect)(
      () => () => {
        R.current && clearTimeout(R.current);
      },
      []
    );
    let M = "pending" === T, I = "idle" === T;
    return (0, a.jsxs)(o.PY1.button, {
      ...f2,
      ref: L,
      tabIndex: f2.tabIndex ?? 0,
      type: f2.type ?? "button",
      className: [h().button, _2].filter(Boolean).join(" "),
      disabled: x2,
      "aria-disabled": !!M || f2["aria-disabled"],
      "aria-busy": M,
      "data-state": T,
      onClick: P,
      custom: L,
      variants: m,
      whileTap: A || x2 || M ? void 0 : "pressed",
      transition: u.T.spring.snappy,
      children: [
        (0, a.jsxs)("span", {
          className: h().content,
          "aria-hidden": "true",
          children: [
            (0, a.jsx)(S, { text: H, reduced: A }),
            (0, a.jsx)("span", {
              className: h().iconSlot,
              children: (0, a.jsx)(d.N, {
                initial: false,
                children: (0, a.jsx)(
                  o.PY1.span,
                  {
                    className: h().phase,
                    initial: A ? k : I ? b : g,
                    animate: w,
                    exit: A ? v : I ? y : j,
                    transition: A ? { duration: u.T.duration.instant } : N,
                    children: M ? (0, a.jsx)("span", { className: h().spinner }) : "success" === T ? (0, a.jsx)($, { reduced: A }) : (0, a.jsx)(l.A, {
                      className: h().arrow,
                      width: 17,
                      height: 17
                    })
                  },
                  T
                )
              })
            })
          ]
        }),
        (0, a.jsx)("span", { className: h().visuallyHidden, children: e2 }),
        (0, a.jsx)("span", {
          className: h().visuallyHidden,
          role: "status",
          children: "pending" === T ? s2 : "success" === T ? t2 : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}