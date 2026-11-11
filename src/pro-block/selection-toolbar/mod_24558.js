function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { l: () => g });
  var r = a(95155), n = a(12115), i = a(18310), l = a(80642), s = a(25354), o = a(52427), c = a(12363), d = a(65332), u = a(7770), p = a(98246), h = a.n(p);
  let m = (e2) => new Date(e2.getFullYear(), e2.getMonth(), 1), { spring: f, duration: _, ease: x, blur: y } = u.T, v = { duration: _.instant }, b = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${y.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: _.standard, ease: x.enter }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${y.subtle}px)`,
      transition: { duration: 0.14, ease: x.standard }
    })
  }, k = {
    enter: { opacity: 0 },
    center: { opacity: 1, y: 0, filter: "blur(0px)", transition: v },
    exit: { opacity: 0, transition: v }
  }, j = {
    enter: { opacity: 0, y: "0.3em", filter: `blur(${y.soft}px)` },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: _.standard, ease: x.enter }
    },
    exit: {
      opacity: 0,
      y: "-0.3em",
      filter: `blur(${y.subtle}px)`,
      transition: { duration: 0.14, ease: x.standard }
    }
  };
  function g({
    label: e2,
    value: t2,
    onChange: a2,
    description: u2,
    placeholder: p2 = "Select a date",
    minDate: y2,
    maxDate: w,
    disabledDates: N,
    locale: T = "en-US",
    format: L = { month: "short", day: "numeric", year: "numeric" },
    showToday: D,
    id: S,
    className: $,
    disabled: E,
    ...C
  }) {
    let P = (0, n.useId)(), R = S ?? P, Y = u2 ? `${R}-description` : void 0, [I, W] = (0, n.useState)(false), [A, V] = (0, n.useState)(m(t2 ?? /* @__PURE__ */ new Date())), U = (0, n.useRef)(null), O = (0, n.useRef)(null), B = (0, n.useRef)(null), M = (0, n.useRef)(void 0), F = new Intl.DateTimeFormat(T, L), K = (0, i.I)() ?? false, q = t2?.getTime() ?? null, [z, X] = (0, n.useState)(q), [H, Q] = (0, n.useState)(1);
    z !== q && (X(q), Q(null === q || null === z || q >= z ? 1 : -1));
    let G = t2 ? F.format(t2) : p2, J = t2 ? F.formatToParts(t2) : [], Z = K ? { duration: 0 } : { duration: _.standard, ease: x.enter };
    (0, n.useEffect)(() => {
      let e3 = (e4) => {
        U.current?.contains(e4.target) || (window.clearTimeout(M.current), W(false));
      };
      return document.addEventListener("pointerdown", e3), () => {
        document.removeEventListener("pointerdown", e3), window.clearTimeout(M.current);
      };
    }, []), (0, n.useEffect)(() => {
      I && B.current?.querySelector('[data-present] [data-date][tabindex="0"]')?.focus({ preventScroll: true });
    }, [I]);
    let ee = () => {
      window.clearTimeout(M.current), B.current?.contains(document.activeElement) && O.current?.focus(), W(false);
    }, et = () => {
      window.clearTimeout(M.current), V(m(t2 ?? /* @__PURE__ */ new Date())), W(true);
    }, ea = (e3) => {
      a2?.(e3), window.clearTimeout(M.current), K || !e3 ? ee() : M.current = window.setTimeout(ee, 300);
    };
    return (0, r.jsxs)("div", {
      className: [h().field, $].filter(Boolean).join(" "),
      ref: U,
      onBlur: (e3) => {
        let t3 = e3.relatedTarget;
        I && t3 && !U.current?.contains(t3) && (window.clearTimeout(M.current), W(false));
      },
      children: [
        (0, r.jsx)("label", { className: h().label, htmlFor: R, children: e2 }),
        (0, r.jsxs)("div", {
          className: h().anchor,
          children: [
            (0, r.jsxs)("button", {
              ...C,
              ref: O,
              id: R,
              type: "button",
              disabled: E,
              "aria-haspopup": "dialog",
              "aria-expanded": I,
              "aria-describedby": Y,
              className: h().trigger,
              onClick: () => I ? ee() : et(),
              onKeyDown: (e3) => {
                "ArrowDown" !== e3.key && "Enter" !== e3.key && " " !== e3.key || I || (e3.preventDefault(), et()), "Escape" === e3.key && ee();
              },
              children: [
                (0, r.jsx)(o.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)("span", { className: h().srOnly, children: G }),
                (0, r.jsx)("span", {
                  className: h().valueText,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(l.N, {
                    mode: "popLayout",
                    initial: false,
                    custom: 1,
                    children: t2 ? (0, r.jsx)(
                      s.PY1.span,
                      {
                        className: h().value,
                        custom: 1,
                        variants: K ? k : b,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: J.map(
                          (e3, t3) => (0, r.jsx)(
                            s.PY1.span,
                            {
                              className: h().part,
                              layout: "position",
                              layoutDependency: q,
                              transition: Z,
                              children: "literal" === e3.type ? (0, r.jsx)("span", {
                                className: h().partValue,
                                children: e3.value
                              }) : (0, r.jsx)(l.N, {
                                mode: "popLayout",
                                initial: false,
                                custom: H,
                                children: (0, r.jsx)(
                                  s.PY1.span,
                                  {
                                    className: h().partValue,
                                    custom: H,
                                    variants: K ? k : b,
                                    initial: "enter",
                                    animate: "center",
                                    exit: "exit",
                                    children: e3.value
                                  },
                                  e3.value
                                )
                              })
                            },
                            `${t3}-${e3.type}`
                          )
                        )
                      },
                      "value"
                    ) : (0, r.jsx)(
                      s.PY1.span,
                      {
                        className: h().placeholder,
                        custom: -1,
                        variants: K ? k : b,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: p2
                      },
                      "placeholder"
                    )
                  })
                }),
                (0, r.jsx)(c.A, {
                  className: h().chevron,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, r.jsx)(l.N, {
              children: I && (0, r.jsxs)(s.PY1.div, {
                ref: B,
                className: h().popover,
                role: "dialog",
                "aria-label": `${e2} calendar`,
                onKeyDown: (e3) => {
                  "Escape" === e3.key && (e3.stopPropagation(), ee());
                },
                initial: K ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.95 },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: K ? v : {
                    ...f.snappy,
                    opacity: { duration: _.fast, ease: x.enter }
                  }
                },
                exit: {
                  opacity: 0,
                  ...K ? {} : { y: -6, scale: 0.97 },
                  transition: { duration: 0.14, ease: x.standard }
                },
                children: [
                  (0, r.jsx)(d.Vv, {
                    value: t2,
                    onChange: ea,
                    month: A,
                    onMonthChange: V,
                    minDate: y2,
                    maxDate: w,
                    disabledDates: N,
                    locale: T,
                    showToday: D
                  }),
                  (0, r.jsxs)("div", {
                    className: h().footer,
                    children: [
                      (0, r.jsx)("button", {
                        type: "button",
                        onClick: () => ea(void 0),
                        disabled: !t2,
                        children: "Clear"
                      }),
                      (0, r.jsx)("span", {
                        className: h().status,
                        children: (0, r.jsx)(l.N, {
                          initial: false,
                          children: (0, r.jsx)(
                            s.PY1.span,
                            {
                              variants: K ? k : j,
                              initial: "enter",
                              animate: "center",
                              exit: "exit",
                              children: t2 ? `Selected ${F.format(t2)}` : "Choose a day"
                            },
                            q ?? "none"
                          )
                        })
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        u2 && (0, r.jsx)("span", {
          id: Y,
          className: h().description,
          children: u2
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}