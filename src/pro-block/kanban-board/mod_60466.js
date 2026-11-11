function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { r: () => f });
  var r = n(95155), a = n(12115), i = n(57793), o = n(18310), s = n(25354), l = n(80642), u = n(12363), d = n(7770), c = n(9146), m = n.n(c);
  function p({ text: e2 }) {
    let t2 = (0, o.I)(), n2 = (0, a.useRef)(null), i2 = (0, a.useRef)(null), [u2, c2] = (0, a.useState)({ width: "auto", animate: false });
    return (0, a.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([t4]) => {
        if (!t4) return;
        let n3 = e3.textContent, r2 = null !== i2.current && i2.current !== n3;
        i2.current = n3, c2({
          width: Math.ceil(
            t4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth
          ),
          animate: r2
        });
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsxs)(s.PY1.span, {
      className: m().label,
      initial: false,
      animate: { width: u2.width },
      transition: u2.animate && !t2 ? d.T.spring.morph : { duration: 0 },
      children: [
        (0, r.jsx)("span", {
          ref: n2,
          className: m().labelMeasure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, r.jsx)(l.N, {
          mode: "popLayout",
          initial: false,
          children: (0, r.jsx)(
            s.PY1.span,
            {
              className: m().labelText,
              initial: !t2 && {
                opacity: 0,
                y: "0.3em",
                filter: `blur(${d.T.blur.soft}px)`
              },
              animate: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                opacity: 0,
                y: "-0.3em",
                filter: `blur(${d.T.blur.subtle}px)`,
                transition: {
                  duration: d.T.duration.fast,
                  ease: [...d.T.ease.standard]
                }
              },
              transition: {
                duration: d.T.duration.standard,
                ease: [...d.T.ease.enter]
              },
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function f({ label: e2, items: t2, icon: n2 }) {
    let l2 = (0, o.I)(), [c2, h] = (0, a.useState)(null), _ = (0, a.useRef)(false), x = (0, a.useRef)(0);
    return (0, a.useEffect)(() => () => window.clearTimeout(x.current), []), (0, r.jsxs)(i.bL, {
      onOpenChange: (e3) => {
        e3 && (window.clearTimeout(x.current), h(null));
      },
      children: [
        (0, r.jsxs)(i.l9, {
          className: m().trigger,
          type: "button",
          children: [
            n2 && (0, r.jsx)("span", {
              className: m().triggerIcon,
              "aria-hidden": "true",
              children: n2
            }),
            (0, r.jsx)(p, { text: e2 }),
            (0, r.jsx)(u.A, {
              className: m().chevron,
              size: 15,
              strokeWidth: 1.8,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, r.jsx)(i.ZL, {
          children: (0, r.jsxs)(i.UC, {
            className: m().menu,
            sideOffset: 6,
            align: "end",
            collisionPadding: 12,
            loop: true,
            onFocus: function(e3) {
              let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitem"]') : null;
              if (window.clearTimeout(x.current), !t3) {
                x.current = window.setTimeout(
                  () => h(null),
                  70 * !!_.current
                );
                return;
              }
              let n3 = {
                top: t3.offsetTop,
                height: t3.offsetHeight,
                danger: "danger" === t3.dataset.tone
              }, r2 = _.current;
              h((e4) => ({ ...n3, glide: r2 && null !== e4 }));
            },
            onPointerMoveCapture: () => {
              _.current = true;
            },
            onKeyDownCapture: () => {
              _.current = false;
            },
            children: [
              (0, r.jsx)(s.PY1.span, {
                className: m().highlight,
                "data-tone": c2?.danger ? "danger" : void 0,
                "aria-hidden": "true",
                initial: false,
                animate: c2 ? { y: c2.top, height: c2.height, opacity: 1 } : { opacity: 0 },
                transition: {
                  default: c2?.glide && !l2 ? d.T.spring.snappy : { duration: 0 },
                  opacity: { duration: 0.08 * !l2 }
                }
              }),
              t2.map(
                (e3, t3) => (0, r.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      e3.separatorBefore && (0, r.jsx)(i.wv, { className: m().separator }),
                      (0, r.jsxs)(i.q7, {
                        className: [
                          m().item,
                          e3.destructive ? m().destructive : ""
                        ].filter(Boolean).join(" "),
                        "data-tone": e3.destructive ? "danger" : void 0,
                        style: { "--i": t3 },
                        disabled: e3.disabled,
                        onSelect: e3.onSelect,
                        children: [
                          e3.icon && (0, r.jsx)("span", {
                            className: m().icon,
                            "aria-hidden": "true",
                            children: e3.icon
                          }),
                          e3.label
                        ]
                      })
                    ]
                  },
                  e3.label
                )
              )
            ]
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}