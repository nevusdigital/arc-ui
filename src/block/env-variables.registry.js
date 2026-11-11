/* env-variables (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(5736, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "lock",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1"
        }
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(14577, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "info",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(18986, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "pencil",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
    ]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(20530, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { S: () => c });
  var a = i(95155), r = i(12115), n = i(47279), s = i(18310), o = i(25354), l = i(7770), d = i(42842), u = i.n(d);
  let c = (0, r.forwardRef)(function({
    label: e2,
    description: t2,
    id: i2,
    className: d2,
    checked: c2,
    defaultChecked: p,
    onCheckedChange: m,
    ...h
  }, f) {
    let x = (0, r.useId)(), _ = i2 ?? x, y = (0, s.I)(), [b, g] = (0, r.useState)(p ?? false), j = c2 ?? b, v = false !== j, w = {
      duration: v ? l.T.duration.instant : l.T.duration.fast,
      ease: [...l.T.ease.standard]
    };
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)(n.bL, {
          ...h,
          id: _,
          ref: f,
          checked: j,
          onCheckedChange: (e3) => {
            void 0 === c2 && g(e3), m?.(e3);
          },
          className: [u().box, d2].filter(Boolean).join(" "),
          "aria-describedby": t2 ? `${_}-description` : void 0,
          "aria-label": h["aria-label"] ?? (e2 ? void 0 : "Checkbox"),
          children: (0, a.jsxs)("span", {
            className: u().visual,
            "aria-hidden": "true",
            children: [
              (0, a.jsx)(o.PY1.span, {
                className: u().fill,
                initial: false,
                animate: { opacity: +!!v, scale: v ? 1 : 0.6 },
                transition: y ? { duration: 0 } : { scale: l.T.spring.snappy, opacity: w }
              }),
              (0, a.jsx)("svg", {
                className: u().mark,
                viewBox: "0 0 18 18",
                fill: "none",
                focusable: "false",
                children: (0, a.jsx)(o.PY1.path, {
                  initial: false,
                  animate: {
                    d: "indeterminate" === j ? "M4.75 9 L9 9 L13.25 9" : "M4.25 9.25 L7.25 12.25 L13.75 5.75",
                    pathLength: +!!v,
                    opacity: +!!v
                  },
                  transition: y ? { duration: 0 } : {
                    d: l.T.spring.morph,
                    pathLength: l.T.spring.snappy,
                    opacity: w
                  },
                  stroke: "currentColor",
                  strokeWidth: 1.75,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            ]
          })
        }),
        e2 || t2 ? (0, a.jsxs)("div", {
          className: u().copy,
          children: [
            e2 ? (0, a.jsx)("label", { htmlFor: _, children: e2 }) : null,
            t2 ? (0, a.jsx)("span", { id: `${_}-description`, children: t2 }) : null
          ]
        }) : null
      ]
    });
  });
  c.displayName = "Checkbox";
}

__m(__module,__exports,__require);
});
A.reg(23637, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "file-up",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M12 12v6", key: "3ahymv" }],
      ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(25182, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "eye",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          key: "1nclc0"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.regCss(42842, ".field{display:inline-flex;align-items:flex-start;gap:0;min-width:0}\n.box{position:relative;flex:0 0 auto;display:grid;place-items:center;width:var(--control-height-md);height:var(--control-height-md);border:0;border-radius:var(--radius-control);padding:0;background:transparent;color:var(--control-glyph);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.box[data-state=checked] .visual,.box[data-state=indeterminate] .visual{border-color:var(--control-on)}\n@media (hover:hover) and (pointer:fine){.box[data-state=unchecked]:hover:not(:disabled) .visual{border-color:var(--text-muted)}\n.box:active:not(:disabled) .visual{transform:scale(.95);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.box:disabled{opacity:.5;cursor:not-allowed}\n@media (prefers-reduced-motion:reduce){.box:active:not(:disabled) .visual,.visual{transition:none;transform:none}\n.visual{position:relative;display:block;width:18px;height:18px;border:1px solid var(--border-strong);border-radius:5px;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.fill{position:absolute;inset:-1px;border-radius:inherit;background:var(--control-on)}\n.mark{position:absolute;inset:-1px;width:18px;height:18px;overflow:visible}\n.copy{display:grid;gap:2px;min-width:0;margin-left:1px;padding-top:calc((var(--control-height-md) - var(--text-sm) * 1.4) / 2)}\n.copy label{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer}\n.copy span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}", {});
A.reg(43298, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(47279, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { bL: () => g });
  var a = i(12115), r = i(47527), n = i(68599), s = i(70379), o = i(59322), l = i(63509), d = i(55897), u = i(95155), c = Object.defineProperty, p = (e2, t2) => c(e2, "name", { value: t2, configurable: true }), m = "Checkbox", [h, f] = (0, n.A)(m), [x, _] = h(m);
  function y(e2) {
    let {
      __scopeCheckbox: t2,
      checked: i2,
      children: r2,
      defaultChecked: n2,
      disabled: s2,
      form: l2,
      name: d2,
      onCheckedChange: c2,
      required: p2,
      value: h2 = "on",
      internal_do_not_use_render: f2
    } = e2, [_2, y2] = (0, o.i)({
      prop: i2,
      defaultProp: n2 ?? false,
      onChange: c2,
      caller: m
    }), [b2, g2] = a.useState(null), [j2, T2] = a.useState(null), k = a.useRef(false), [N, C] = a.useReducer((e3) => e3 + 1, 0), S = !b2 || !!l2 || !!b2.closest("form"), P = {
      checked: _2,
      disabled: s2,
      setChecked: y2,
      control: b2,
      setControl: g2,
      name: d2,
      form: l2,
      value: h2,
      hasConsumerStoppedPropagationRef: k,
      userInteractionCount: N,
      onUserInteraction: C,
      required: p2,
      defaultChecked: !w(n2) && n2,
      isFormControl: S,
      bubbleInput: j2,
      setBubbleInput: T2
    };
    return (0, u.jsx)(x, { scope: t2, ...P, children: v(f2) ? f2(P) : r2 });
  }
  p(y, "CheckboxProvider");
  var b = a.forwardRef(
    p(function({ __scopeCheckbox: e2, onKeyDown: t2, onClick: i2, ...n2 }, o2) {
      let {
        control: l2,
        value: c2,
        disabled: m2,
        checked: h2,
        required: f2,
        setControl: x2,
        setChecked: y2,
        hasConsumerStoppedPropagationRef: b2,
        onUserInteraction: g2,
        isFormControl: j2,
        bubbleInput: v2
      } = _("CheckboxTrigger", e2), k = (0, r.s)(o2, x2), N = a.useRef(h2);
      return a.useEffect(() => {
        let e3 = l2?.form;
        if (e3) {
          let t3 = p(() => y2(N.current), "reset");
          return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
        }
      }, [l2, y2]), (0, u.jsx)(d.sG.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": w(h2) ? "mixed" : h2,
        "aria-required": f2,
        "data-state": T(h2),
        "data-disabled": m2 ? "" : void 0,
        disabled: m2,
        value: c2,
        ...n2,
        ref: k,
        onKeyDown: (0, s.mK)(t2, (e3) => {
          "Enter" === e3.key && e3.preventDefault();
        }),
        onClick: (0, s.mK)(i2, (e3) => {
          g2(), y2((e4) => !!w(e4) || !e4), v2 && j2 && (b2.current = e3.isPropagationStopped(), b2.current || e3.stopPropagation());
        })
      });
    }, "CheckboxTrigger")
  ), g = a.forwardRef(
    p(function(e2, t2) {
      let {
        __scopeCheckbox: i2,
        name: a2,
        checked: r2,
        defaultChecked: n2,
        required: s2,
        disabled: o2,
        value: l2,
        onCheckedChange: d2,
        form: c2,
        ...p2
      } = e2;
      return (0, u.jsx)(y, {
        __scopeCheckbox: i2,
        checked: r2,
        defaultChecked: n2,
        disabled: o2,
        required: s2,
        onCheckedChange: d2,
        name: a2,
        form: c2,
        value: l2,
        internal_do_not_use_render: ({ isFormControl: e3 }) => (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(b, { ...p2, ref: t2, __scopeCheckbox: i2 }),
            e3 && (0, u.jsx)(j, { __scopeCheckbox: i2 })
          ]
        })
      });
    }, "Checkbox")
  ), j = a.forwardRef(
    p(function({ __scopeCheckbox: e2, onClick: t2, ...i2 }, n2) {
      let {
        control: o2,
        hasConsumerStoppedPropagationRef: c2,
        userInteractionCount: p2,
        checked: m2,
        defaultChecked: h2,
        required: f2,
        disabled: x2,
        name: y2,
        value: b2,
        form: g2,
        bubbleInput: j2,
        setBubbleInput: v2
      } = _("CheckboxBubbleInput", e2), T2 = (0, r.s)(n2, v2), k = (0, l.X)(o2), N = a.useRef(false), C = a.useRef(m2), S = a.useRef(p2);
      a.useEffect(() => {
        if (!j2) return;
        let e3 = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "checked"
        ).set, t3 = p2 !== S.current;
        S.current = p2;
        let i3 = C.current !== m2;
        C.current = m2;
        let a2 = !(t3 && c2.current);
        if (i3 && e3) {
          N.current = !t3;
          let i4 = new Event("click", { bubbles: a2 });
          j2.indeterminate = w(m2), e3.call(j2, !w(m2) && m2), j2.dispatchEvent(i4), N.current = false;
        }
      }, [j2, m2, c2, p2]);
      let P = a.useRef(!w(m2) && m2);
      return (0, u.jsx)(d.sG.input, {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: h2 ?? P.current,
        required: f2,
        disabled: x2,
        name: y2,
        value: b2,
        form: g2,
        ...i2,
        tabIndex: -1,
        ref: T2,
        onClick: (0, s.mK)(t2, (e3) => {
          N.current && e3.stopPropagation();
        }),
        style: {
          ...i2.style,
          ...k,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          transform: "translateX(-100%)"
        }
      });
    }, "CheckboxBubbleInput")
  );
  function v(e2) {
    return "function" == typeof e2;
  }
  function w(e2) {
    return "indeterminate" === e2;
  }
  function T(e2) {
    return w(e2) ? "indeterminate" : e2 ? "checked" : "unchecked";
  }
  p(v, "isFunction"), p(w, "isIndeterminate"), p(T, "getState");
}

__m(__module,__exports,__require);
});
A.regCss(68272, ".field{display:grid;min-width:0}\n.field label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.control{width:100%;min-height:110px;resize:vertical;border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:var(--space-3);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);outline:none;box-shadow:0 0 0 6px transparent;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.control::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.control:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.control:focus-visible{border-color:var(--foreground);box-shadow:0 0 0 3px var(--focus-ring);outline:2px solid transparent;outline-offset:2px}\n.control[aria-invalid=true]{border-color:var(--danger)}\n.control:disabled{cursor:not-allowed;background:var(--surface-muted);opacity:.6}\n@media (prefers-reduced-motion:reduce){.control{transition:none}\n.messageSlot{display:block;overflow:hidden}\n.error,.hint{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.hint{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","control":"control","messageSlot":"messageSlot","error":"error","hint":"hint","words":"words","word":"word","column":"column","srOnly":"srOnly"});
A.reg(73051, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => J,
    In: () => q,
    q7: () => ev,
    VF: () => ew,
    p4: () => eg,
    ZL: () => Y,
    bL: () => G,
    wn: () => eb,
    PP: () => eS,
    l9: () => W,
    WT: () => z,
    LM: () => eu
  });
  var r = n(12115), o = n(47650);
  function l(e2, [t2, n2]) {
    return Math.min(n2, Math.max(t2, e2));
  }
  (0, Object.defineProperty)(l, "name", { value: "clamp", configurable: true });
  var i = n(70379), a = n(76094), s = n(47527), u = n(68599), c = n(1933), d = n(19416), p = n(32007), f = n(69885), h = n(89971), v = n(80878), m = n(19040), g = n(83935), w = n(55897), x = n(42442), S = n(17347), y = n(59322), b = n(66294);
  function C(e2) {
    let t2 = r.useRef({ value: e2, previous: e2 });
    return r.useMemo(
      () => (t2.current.value !== e2 && (t2.current.previous = t2.current.value, t2.current.value = e2), t2.current.previous),
      [e2]
    );
  }
  (0, Object.defineProperty)(C, "name", {
    value: "usePrevious",
    configurable: true
  });
  var j = n(40562), P = n(22954), T = n(5174), k = n(95155), I = Object.defineProperty, E = (e2, t2) => I(e2, "name", { value: t2, configurable: true }), R = [" ", "Enter", "ArrowUp", "ArrowDown"], M = [" ", "Enter"], D = "Select", [L, K, B] = (0, a.N)(D), [_, H] = (0, u.A)(D, [B, v.Bk]), N = (0, v.Bk)(), [A, O] = _(D), [V, F] = _(D);
  function U(e2) {
    let {
      __scopeSelect: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: i2,
      value: a2,
      defaultValue: s2,
      onValueChange: u2,
      dir: d2,
      name: p2,
      autoComplete: f2,
      disabled: m2,
      required: g2,
      form: w2,
      internal_do_not_use_render: x2
    } = e2, S2 = N(t2), [b2, C2] = r.useState(null), [j2, P2] = r.useState(null), [T2, I2] = r.useState(false), R2 = (0, c.jH)(d2), [M2, K2] = (0, y.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: i2,
      caller: D
    }), [B2, _2] = (0, y.i)({ prop: a2, defaultProp: s2, onChange: u2, caller: D }), H2 = r.useRef(null), O2 = r.useRef(B2);
    r.useEffect(() => {
      let e3 = w2 ? b2?.ownerDocument.getElementById(w2) : b2?.form;
      if (e3 instanceof HTMLFormElement) {
        let t3 = E(() => _2(O2.current), "reset");
        return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
      }
    }, [w2, b2, _2]);
    let F2 = !b2 || !!w2 || !!b2.closest("form"), [U2, G2] = r.useState(/* @__PURE__ */ new Set()), W2 = (0, h.B)(), z2 = Array.from(U2).map((e3) => e3.props.value).join(";"), q2 = r.useCallback((e3) => {
      G2((t3) => new Set(t3).add(e3));
    }, []), Z2 = r.useCallback((e3) => {
      G2((t3) => {
        let n3 = new Set(t3);
        return n3.delete(e3), n3;
      });
    }, []), X2 = {
      required: g2,
      trigger: b2,
      onTriggerChange: C2,
      valueNode: j2,
      onValueNodeChange: P2,
      valueNodeHasChildren: T2,
      onValueNodeHasChildrenChange: I2,
      contentId: W2,
      value: B2,
      onValueChange: _2,
      open: M2,
      onOpenChange: K2,
      dir: R2,
      triggerPointerDownPosRef: H2,
      disabled: m2,
      name: p2,
      autoComplete: f2,
      form: w2,
      nativeOptions: U2,
      nativeSelectKey: z2,
      isFormControl: F2
    };
    return (0, k.jsx)(v.bL, {
      ...S2,
      children: (0, k.jsx)(A, {
        scope: t2,
        ...X2,
        children: (0, k.jsx)(L.Provider, {
          scope: t2,
          children: (0, k.jsx)(V, {
            scope: t2,
            onNativeOptionAdd: q2,
            onNativeOptionRemove: Z2,
            children: eP(x2) ? x2(X2) : n2
          })
        })
      })
    });
  }
  E(U, "SelectProvider");
  var G = E((e2) => {
    let { __scopeSelect: t2, children: n2, ...r2 } = e2;
    return (0, k.jsx)(U, {
      __scopeSelect: t2,
      ...r2,
      internal_do_not_use_render: ({ isFormControl: e3 }) => (0, k.jsxs)(k.Fragment, {
        children: [n2, e3 ? (0, k.jsx)(ej, { __scopeSelect: t2 }) : null]
      })
    });
  }, "Select"), W = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, disabled: o2 = false, ...l2 } = e2, a2 = N(n2), u2 = O("SelectTrigger", n2), c2 = u2.disabled || o2, d2 = (0, s.s)(t2, u2.onTriggerChange), p2 = K(n2), f2 = r.useRef("touch"), [h2, m2, g2] = ek((e3) => {
        let t3 = p2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.value === u2.value), r2 = eI(t3, e3, n3);
        void 0 !== r2 && u2.onValueChange(r2.value);
      }), x2 = E((e3) => {
        c2 || (u2.onOpenChange(true), g2()), e3 && (u2.triggerPointerDownPosRef.current = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        });
      }, "handleOpen");
      return (0, k.jsx)(v.Mz, {
        asChild: true,
        ...a2,
        children: (0, k.jsx)(w.sG.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u2.open ? u2.contentId : void 0,
          "aria-expanded": u2.open,
          "aria-required": u2.required,
          "aria-autocomplete": "none",
          dir: u2.dir,
          "data-state": u2.open ? "open" : "closed",
          disabled: c2,
          "data-disabled": c2 ? "" : void 0,
          "data-placeholder": eT(u2.value) ? "" : void 0,
          ...l2,
          ref: d2,
          onClick: (0, i.mK)(l2.onClick, (e3) => {
            e3.currentTarget.focus(), "mouse" !== f2.current && x2(e3);
          }),
          onPointerDown: (0, i.mK)(l2.onPointerDown, (e3) => {
            f2.current = e3.pointerType;
            let t3 = e3.target;
            t3.hasPointerCapture(e3.pointerId) && t3.releasePointerCapture(e3.pointerId), 0 === e3.button && false === e3.ctrlKey && "mouse" === e3.pointerType && (x2(e3), e3.preventDefault());
          }),
          onKeyDown: (0, i.mK)(l2.onKeyDown, (e3) => {
            let t3 = "" !== h2.current;
            e3.ctrlKey || e3.altKey || e3.metaKey || 1 !== e3.key.length || m2(e3.key), (!t3 || " " !== e3.key) && R.includes(e3.key) && (x2(), e3.preventDefault());
          })
        })
      });
    }, "SelectTrigger")
  ), z = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        className: o2,
        style: l2,
        children: i2,
        placeholder: a2 = "",
        ...u2
      } = e2, c2 = O("SelectValue", n2), { onValueNodeHasChildrenChange: d2 } = c2, p2 = void 0 !== i2, f2 = (0, s.s)(t2, c2.onValueNodeChange);
      (0, b.N)(() => {
        d2(p2);
      }, [d2, p2]);
      let h2 = eT(c2.value);
      return (0, k.jsx)(w.sG.span, {
        ...u2,
        asChild: !h2 && u2.asChild,
        ref: f2,
        style: { pointerEvents: "none" },
        children: (0, k.jsx)(
          r.Fragment,
          { children: h2 ? a2 : i2 },
          h2 ? "placeholder" : "value"
        )
      });
    }, "SelectValue")
  ), q = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, ...o2 } = e2;
      return (0, k.jsx)(w.sG.span, {
        "aria-hidden": true,
        ...o2,
        ref: t2,
        children: r2 || "\u25BC"
      });
    }, "SelectIcon")
  ), [Z, X] = _("SelectPortal", { forceMount: void 0 }), Y = E((e2) => {
    let { __scopeSelect: t2, forceMount: n2, ...r2 } = e2;
    return (0, k.jsx)(Z, {
      scope: e2.__scopeSelect,
      forceMount: n2,
      children: (0, k.jsx)(m.Z, { asChild: true, ...r2 })
    });
  }, "SelectPortal"), Q = "SelectContent", J = r.forwardRef(
    E(function(e2, t2) {
      let n2 = X(Q, e2.__scopeSelect), { forceMount: o2 = n2.forceMount, ...l2 } = e2, i2 = O(Q, e2.__scopeSelect), [a2, s2] = r.useState();
      return (0, b.N)(() => {
        s2(new DocumentFragment());
      }, []), (0, k.jsx)(g.C, {
        present: o2 || i2.open,
        children: ({ present: e3 }) => e3 ? (0, k.jsx)(er, { ...l2, ref: t2 }) : (0, k.jsx)($, { ...l2, fragment: a2 })
      });
    }, "SelectContent")
  ), $ = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, fragment: l2 } = e2;
      return l2 ? o.createPortal(
        (0, k.jsx)(ee, {
          scope: n2,
          children: (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)("div", { ref: t2, children: r2 })
          })
        }),
        l2
      ) : null;
    }, "SelectContentFragment")
  ), [ee, et] = _(Q), en = (0, x.TL)("SelectContent.RemoveScroll"), er = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2 } = e2, {
        position: o2 = "item-aligned",
        onCloseAutoFocus: l2,
        onEscapeKeyDown: a2,
        onPointerDownOutside: u2,
        side: c2,
        sideOffset: h2,
        align: v2,
        alignOffset: m2,
        arrowPadding: g2,
        collisionBoundary: w2,
        collisionPadding: x2,
        sticky: S2,
        hideWhenDetached: y2,
        avoidCollisions: b2,
        ...C2
      } = e2, j2 = O(Q, n2), [I2, R2] = r.useState(null), [M2, D2] = r.useState(null), L2 = (0, s.s)(t2, R2), [B2, _2] = r.useState(null), [H2, N2] = r.useState(null), A2 = K(n2), [V2, F2] = r.useState(false), U2 = r.useRef(false);
      r.useEffect(() => {
        if (I2) return (0, P.Eq)(I2);
      }, [I2]), (0, p.Oh)();
      let G2 = r.useCallback(
        (e3) => {
          let [t3, ...n3] = A2().map((e4) => e4.ref.current), [r2] = n3.slice(-1), o3 = document.activeElement;
          for (let n4 of e3)
            if (n4 === o3 || (n4?.scrollIntoView({ block: "nearest" }), n4 === t3 && M2 && (M2.scrollTop = 0), n4 === r2 && M2 && (M2.scrollTop = M2.scrollHeight), n4?.focus(), document.activeElement !== o3))
              return;
        },
        [A2, M2]
      ), W2 = r.useCallback(() => G2([B2, I2]), [G2, B2, I2]);
      r.useEffect(() => {
        V2 && W2();
      }, [V2, W2]);
      let { onOpenChange: z2, triggerPointerDownPosRef: q2 } = j2;
      r.useEffect(() => {
        if (I2) {
          let e3 = { x: 0, y: 0 }, t3 = E((t4) => {
            e3 = {
              x: Math.abs(Math.round(t4.pageX) - (q2.current?.x ?? 0)),
              y: Math.abs(Math.round(t4.pageY) - (q2.current?.y ?? 0))
            };
          }, "handlePointerMove"), n3 = E((n4) => {
            e3.x <= 10 && e3.y <= 10 ? n4.preventDefault() : n4.composedPath().includes(I2) || z2(false), document.removeEventListener("pointermove", t3), q2.current = null;
          }, "handlePointerUp");
          return null !== q2.current && (document.addEventListener("pointermove", t3), document.addEventListener("pointerup", n3, {
            capture: true,
            once: true
          })), () => {
            document.removeEventListener("pointermove", t3), document.removeEventListener("pointerup", n3, {
              capture: true
            });
          };
        }
      }, [I2, z2, q2]), r.useEffect(() => {
        let e3 = E(() => z2(false), "close");
        return window.addEventListener("blur", e3), window.addEventListener("resize", e3), () => {
          window.removeEventListener("blur", e3), window.removeEventListener("resize", e3);
        };
      }, [z2]);
      let [Z2, X2] = ek((e3) => {
        let t3 = A2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.ref.current === document.activeElement), r2 = eI(t3, e3, n3);
        r2 && setTimeout(() => r2.ref.current?.focus());
      }), Y2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && (_2(e3), r2 && (U2.current = true));
        },
        [j2.value]
      ), J2 = r.useCallback(() => I2?.focus(), [I2]), $2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && N2(e3);
        },
        [j2.value]
      ), et2 = "popper" === o2 ? el : eo;
      return (0, k.jsx)(ee, {
        scope: n2,
        content: I2,
        viewport: M2,
        onViewportChange: D2,
        itemRefCallback: Y2,
        selectedItem: B2,
        onItemLeave: J2,
        itemTextRefCallback: $2,
        focusSelectedItem: W2,
        selectedItemText: H2,
        position: o2,
        isPositioned: V2,
        searchRef: Z2,
        children: (0, k.jsx)(T.A, {
          as: en,
          allowPinchZoom: true,
          children: (0, k.jsx)(f.n, {
            asChild: true,
            trapped: j2.open,
            onMountAutoFocus: (e3) => {
              e3.preventDefault();
            },
            onUnmountAutoFocus: (0, i.mK)(l2, (e3) => {
              j2.trigger?.focus({ preventScroll: true }), e3.preventDefault();
            }),
            children: (0, k.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: a2,
              onPointerDownOutside: u2,
              onFocusOutside: (e3) => e3.preventDefault(),
              onDismiss: () => j2.onOpenChange(false),
              children: (0, k.jsx)(et2, {
                role: "listbox",
                id: j2.contentId,
                "data-state": j2.open ? "open" : "closed",
                dir: j2.dir,
                onContextMenu: (e3) => e3.preventDefault(),
                ...C2,
                ...et2 === el ? {
                  side: c2,
                  sideOffset: h2,
                  align: v2,
                  alignOffset: m2,
                  arrowPadding: g2,
                  collisionBoundary: w2,
                  collisionPadding: x2,
                  sticky: S2,
                  hideWhenDetached: y2,
                  avoidCollisions: b2
                } : {},
                onPlaced: () => F2(true),
                ref: L2,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...C2.style
                },
                onKeyDown: (0, i.mK)(C2.onKeyDown, (e3) => {
                  let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
                  if ("Tab" === e3.key && e3.preventDefault(), t3 || 1 !== e3.key.length || X2(e3.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e3.key)) {
                    let t4 = A2().filter((e4) => !e4.disabled).map((e4) => e4.ref.current);
                    if (["ArrowUp", "End"].includes(e3.key) && (t4 = t4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e3.key)) {
                      let n3 = e3.target, r2 = t4.indexOf(n3);
                      t4 = t4.slice(r2 + 1);
                    }
                    setTimeout(() => G2(t4)), e3.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    }, "SelectContentImpl")
  ), eo = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onPlaced: o2, ...i2 } = e2, a2 = O(Q, n2), u2 = et(Q, n2), [c2, d2] = r.useState(null), [p2, f2] = r.useState(null), h2 = (0, s.s)(t2, f2), v2 = K(n2), m2 = r.useRef(false), g2 = r.useRef(true), {
        viewport: x2,
        selectedItem: S2,
        selectedItemText: y2,
        focusSelectedItem: C2
      } = u2, j2 = r.useCallback(() => {
        if (a2.trigger && a2.valueNode && c2 && p2 && x2 && S2 && y2) {
          let e3 = a2.trigger.getBoundingClientRect(), t3 = p2.getBoundingClientRect(), n3 = a2.valueNode.getBoundingClientRect(), r2 = y2.getBoundingClientRect();
          if ("rtl" !== a2.dir) {
            let o3 = r2.left - t3.left, i4 = n3.left - o3, a3 = e3.left - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.left = d4 + "px";
          } else {
            let o3 = t3.right - r2.right, i4 = window.innerWidth - n3.right - o3, a3 = window.innerWidth - e3.right - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.right = d4 + "px";
          }
          let i3 = v2(), s2 = window.innerHeight - 20, u3 = x2.scrollHeight, d3 = window.getComputedStyle(p2), f3 = parseInt(d3.borderTopWidth, 10), h3 = parseInt(d3.paddingTop, 10), g3 = parseInt(d3.borderBottomWidth, 10), w2 = f3 + h3 + u3 + parseInt(d3.paddingBottom, 10) + g3, b2 = Math.min(5 * S2.offsetHeight, w2), C3 = window.getComputedStyle(x2), j3 = parseInt(C3.paddingTop, 10), P3 = parseInt(C3.paddingBottom, 10), T3 = e3.top + e3.height / 2 - 10, k2 = S2.offsetHeight / 2, I3 = f3 + h3 + (S2.offsetTop + k2);
          if (I3 <= T3) {
            let e4 = i3.length > 0 && S2 === i3[i3.length - 1].ref.current;
            c2.style.bottom = "0px";
            let t4 = Math.max(
              s2 - T3,
              k2 + (e4 ? P3 : 0) + (p2.clientHeight - x2.offsetTop - x2.offsetHeight) + g3
            );
            c2.style.height = I3 + t4 + "px";
          } else {
            let e4 = i3.length > 0 && S2 === i3[0].ref.current;
            c2.style.top = "0px";
            let t4 = Math.max(T3, f3 + x2.offsetTop + (e4 ? j3 : 0) + k2);
            c2.style.height = t4 + (w2 - I3) + "px", x2.scrollTop = I3 - T3 + x2.offsetTop;
          }
          c2.style.margin = "10px 0", c2.style.minHeight = b2 + "px", c2.style.maxHeight = s2 + "px", o2?.(), requestAnimationFrame(() => m2.current = true);
        }
      }, [v2, a2.trigger, a2.valueNode, c2, p2, x2, S2, y2, a2.dir, o2]);
      (0, b.N)(() => j2(), [j2]);
      let [P2, T2] = r.useState();
      (0, b.N)(() => {
        p2 && T2(window.getComputedStyle(p2).zIndex);
      }, [p2]);
      let I2 = r.useCallback(
        (e3) => {
          e3 && true === g2.current && (j2(), C2?.(), g2.current = false);
        },
        [j2, C2]
      );
      return (0, k.jsx)(ei, {
        scope: n2,
        contentWrapper: c2,
        shouldExpandOnScrollRef: m2,
        onScrollButtonChange: I2,
        children: (0, k.jsx)("div", {
          ref: d2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P2
          },
          children: (0, k.jsx)(w.sG.div, {
            ...i2,
            ref: h2,
            style: { boxSizing: "border-box", maxHeight: "100%", ...i2.style }
          })
        })
      });
    }, "SelectItemAlignedPosition")
  ), el = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        align: r2 = "start",
        collisionPadding: o2 = 10,
        ...l2
      } = e2, i2 = N(n2);
      return (0, k.jsx)(v.UC, {
        ...i2,
        ...l2,
        ref: t2,
        align: r2,
        collisionPadding: o2,
        style: {
          boxSizing: "border-box",
          ...l2.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "SelectPopperPosition")
  ), [ei, ea] = _(Q, {}), es = "SelectViewport", eu = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, nonce: o2, ...l2 } = e2, a2 = et(es, n2), u2 = ea(es, n2), c2 = (0, s.s)(t2, a2.onViewportChange), d2 = r.useRef(0);
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o2
          }),
          (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...l2,
              ref: c2,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...l2.style
              },
              onScroll: (0, i.mK)(l2.onScroll, (e3) => {
                let t3 = e3.currentTarget, { contentWrapper: n3, shouldExpandOnScrollRef: r2 } = u2;
                if (r2?.current && n3) {
                  let e4 = Math.abs(d2.current - t3.scrollTop);
                  if (e4 > 0) {
                    let r3 = window.innerHeight - 20, o3 = Math.max(
                      parseFloat(n3.style.minHeight),
                      parseFloat(n3.style.height)
                    );
                    if (o3 < r3) {
                      let l3 = o3 + e4, i2 = Math.min(r3, l3), a3 = l3 - i2;
                      n3.style.height = i2 + "px", "0px" === n3.style.bottom && (t3.scrollTop = a3 > 0 ? a3 : 0, n3.style.justifyContent = "flex-end");
                    }
                  }
                }
                d2.current = t3.scrollTop;
              })
            })
          })
        ]
      });
    }, "SelectViewport")
  ), [ec, ed] = _("SelectGroup"), ep = "SelectItem", [ef, eh] = _(ep), ev = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        value: o2,
        disabled: l2 = false,
        textValue: a2,
        ...u2
      } = e2, c2 = O(ep, n2), d2 = et(ep, n2), p2 = c2.value === o2, [f2, v2] = r.useState(a2 ?? ""), [m2, g2] = r.useState(false), x2 = (0, S.c)((e3) => d2.itemRefCallback?.(e3, o2, l2)), y2 = (0, s.s)(t2, x2), b2 = (0, h.B)(), C2 = r.useRef("touch"), j2 = E(() => {
        l2 || (c2.onValueChange(o2), c2.onOpenChange(false));
      }, "handleSelect");
      return (0, k.jsx)(ef, {
        scope: n2,
        value: o2,
        disabled: l2,
        textId: b2,
        isSelected: p2,
        onItemTextChange: r.useCallback((e3) => {
          v2((t3) => t3 || (e3?.textContent ?? "").trim());
        }, []),
        children: (0, k.jsx)(L.ItemSlot, {
          scope: n2,
          value: o2,
          disabled: l2,
          textValue: f2,
          children: (0, k.jsx)(w.sG.div, {
            role: "option",
            "aria-labelledby": b2,
            "data-highlighted": m2 ? "" : void 0,
            "aria-selected": p2 && m2,
            "data-state": p2 ? "checked" : "unchecked",
            "aria-disabled": l2 || void 0,
            "data-disabled": l2 ? "" : void 0,
            tabIndex: l2 ? void 0 : -1,
            ...u2,
            ref: y2,
            onFocus: (0, i.mK)(u2.onFocus, () => g2(true)),
            onBlur: (0, i.mK)(u2.onBlur, () => g2(false)),
            onClick: (0, i.mK)(u2.onClick, () => {
              "mouse" !== C2.current && j2();
            }),
            onPointerUp: (0, i.mK)(u2.onPointerUp, () => {
              "mouse" === C2.current && j2();
            }),
            onPointerDown: (0, i.mK)(u2.onPointerDown, (e3) => {
              C2.current = e3.pointerType;
            }),
            onPointerMove: (0, i.mK)(u2.onPointerMove, (e3) => {
              C2.current = e3.pointerType, l2 ? d2.onItemLeave?.() : "mouse" === C2.current && e3.currentTarget.focus({ preventScroll: true });
            }),
            onPointerLeave: (0, i.mK)(u2.onPointerLeave, (e3) => {
              e3.currentTarget === document.activeElement && d2.onItemLeave?.();
            }),
            onKeyDown: (0, i.mK)(u2.onKeyDown, (e3) => {
              l2 || e3.target !== e3.currentTarget || (d2.searchRef?.current === "" || " " !== e3.key) && (M.includes(e3.key) && j2(), " " === e3.key && e3.preventDefault());
            })
          })
        })
      });
    }, "SelectItem")
  ), em = "SelectItemText", eg = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, className: l2, style: i2, ...a2 } = e2, u2 = O(em, n2), c2 = et(em, n2), d2 = eh(em, n2), p2 = F(em, n2), [f2, h2] = r.useState(null), v2 = (0, S.c)((e3) => c2.itemTextRefCallback?.(e3, d2.value, d2.disabled)), m2 = (0, s.s)(t2, h2, d2.onItemTextChange, v2), g2 = f2?.textContent, x2 = r.useMemo(
        () => (0, k.jsx)(
          "option",
          { value: d2.value, disabled: d2.disabled, children: g2 },
          d2.value
        ),
        [d2.disabled, d2.value, g2]
      ), { onNativeOptionAdd: y2, onNativeOptionRemove: C2 } = p2;
      return (0, b.N)(() => (y2(x2), () => C2(x2)), [y2, C2, x2]), (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(w.sG.span, { id: d2.textId, ...a2, ref: m2 }),
          d2.isSelected && u2.valueNode && !u2.valueNodeHasChildren && !eT(u2.value) ? o.createPortal(a2.children, u2.valueNode) : null
        ]
      });
    }, "SelectItemText")
  ), ew = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, ...r2 } = e2;
      return eh("SelectItemIndicator", n2).isSelected ? (0, k.jsx)(w.sG.span, { "aria-hidden": true, ...r2, ref: t2 }) : null;
    }, "SelectItemIndicator")
  ), ex = "SelectScrollUpButton", eS = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ex, e2.__scopeSelect), o2 = ea(ex, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            i2(t3.scrollTop > 0);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop - t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollUpButton")
  ), ey = "SelectScrollDownButton", eb = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ey, e2.__scopeSelect), o2 = ea(ey, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            let e4 = t3.scrollHeight - t3.clientHeight;
            i2(Math.ceil(t3.scrollTop) < e4);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop + t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollDownButton")
  ), eC = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onAutoScroll: o2, ...l2 } = e2, a2 = et("SelectScrollButton", n2), s2 = r.useRef(null), u2 = K(n2), c2 = r.useCallback(() => {
        null !== s2.current && (window.clearInterval(s2.current), s2.current = null);
      }, []);
      return r.useEffect(() => () => c2(), [c2]), (0, b.N)(() => {
        let e3 = u2().find((e4) => e4.ref.current === document.activeElement);
        e3?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u2]), (0, k.jsx)(w.sG.div, {
        "aria-hidden": true,
        ...l2,
        ref: t2,
        style: { flexShrink: 0, ...l2.style },
        onPointerDown: (0, i.mK)(l2.onPointerDown, () => {
          null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerMove: (0, i.mK)(l2.onPointerMove, () => {
          a2.onItemLeave?.(), null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerLeave: (0, i.mK)(l2.onPointerLeave, () => {
          c2();
        })
      });
    }, "SelectScrollButtonImpl")
  ), ej = r.forwardRef(
    E(function({ __scopeSelect: e2, ...t2 }, n2) {
      let o2 = O("SelectBubbleInput", e2), {
        value: l2,
        onValueChange: i2,
        required: a2,
        disabled: u2,
        name: c2,
        autoComplete: d2,
        form: p2
      } = o2, { nativeOptions: f2, nativeSelectKey: h2 } = o2, v2 = r.useRef(null), m2 = (0, s.s)(n2, v2), g2 = l2 ?? "", x2 = C(g2), S2 = Array.from(f2).some((e3) => (e3.props.value ?? "") === "");
      return r.useEffect(() => {
        let e3 = v2.current;
        if (!e3) return;
        let t3 = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value"
        ).set;
        if (x2 !== g2 && t3) {
          let n3 = new Event("change", { bubbles: true });
          t3.call(e3, g2), e3.dispatchEvent(n3);
        }
      }, [x2, g2]), (0, k.jsxs)(
        w.sG.select,
        {
          "aria-hidden": true,
          required: a2,
          tabIndex: -1,
          name: c2,
          autoComplete: d2,
          disabled: u2,
          form: p2,
          onChange: (e3) => i2(e3.target.value),
          ...t2,
          style: { ...j.Qg, ...t2.style },
          ref: m2,
          defaultValue: g2,
          children: [
            eT(l2) && !S2 ? (0, k.jsx)("option", { value: "" }) : null,
            Array.from(f2)
          ]
        },
        h2
      );
    }, "SelectBubbleInput")
  );
  function eP(e2) {
    return "function" == typeof e2;
  }
  function eT(e2) {
    return "" === e2 || void 0 === e2;
  }
  function ek(e2) {
    let t2 = (0, S.c)(e2), n2 = r.useRef(""), o2 = r.useRef(0), l2 = r.useCallback(
      (e3) => {
        t2(n2.current + e3);
      },
      [t2]
    ), i2 = r.useCallback(() => {
      n2.current = "", window.clearTimeout(o2.current);
    }, []);
    return r.useEffect(() => () => window.clearTimeout(o2.current), []), [n2, l2, i2];
  }
  function eI(e2, t2, n2) {
    let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, o2 = n2 ? e2.indexOf(n2) : -1, l2 = eE(e2, Math.max(o2, 0));
    1 === r2.length && (l2 = l2.filter((e3) => e3 !== n2));
    let i2 = l2.find(
      (e3) => e3.textValue.toLowerCase().startsWith(r2.toLowerCase())
    );
    return i2 !== n2 ? i2 : void 0;
  }
  function eE(e2, t2) {
    return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
  }
  E(eP, "isFunction"), E(eT, "shouldShowPlaceholder"), E(ek, "useTypeaheadSearch"), E(eI, "findNextItem"), E(eE, "wrapArray");
}

__m(__module,__exports,__require);
});
A.reg(76177, function(__module,__exports,__require){
"use strict";
const __m = (e, a, t) => {
  "use strict";
  t.r(a), t.d(a, { EnvVariables: () => K, default: () => et });
  var i = t(95155), n = t(12115), s = t(92171), r = t(18310), l = t(80642), o = t(25354), d = t(23637), c = t(2125), u = t(64577), p = t(35484), h = t(14577), v = t(82749), m = t(5736), _ = t(89034), y = t(25182), x = t(18986), f = t(11012), b = t(77031), j = t(51288), g = t(20530), N = t(73474), k = t(35978), w = t(43298), T = t(66558), C = t(96220), S = t(50680), E = t(87796), R = t(7770);
  let $ = [
    { id: "development", label: "Development" },
    { id: "preview", label: "Preview" },
    { id: "production", label: "Production" }
  ], A = [
    {
      id: "db-prod",
      key: "DATABASE_URL",
      value: "postgresql://storefront:Qm7vR2xKp9LwT4nZ@db-prod.northwind.internal:5432/storefront?sslmode=require",
      environments: ["production"],
      sensitive: true,
      updated: "Aug 12",
      updatedBy: "Emma Collins"
    },
    {
      id: "db-dev",
      key: "DATABASE_URL",
      value: "postgresql://storefront:preview@db-staging.northwind.internal:5432/storefront_preview",
      environments: ["development", "preview"],
      sensitive: false,
      updated: "Aug 12",
      updatedBy: "Emma Collins"
    },
    {
      id: "site-prod",
      key: "NEXT_PUBLIC_SITE_URL",
      value: "https://shop.northwind.example",
      environments: ["production"],
      sensitive: false,
      updated: "Jun 3",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "site-preview",
      key: "NEXT_PUBLIC_SITE_URL",
      value: "https://preview.northwind.example",
      environments: ["preview"],
      sensitive: false,
      updated: "Jun 3",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "site-dev",
      key: "NEXT_PUBLIC_SITE_URL",
      value: "http://localhost:3000",
      environments: ["development"],
      sensitive: false,
      updated: "Jun 3",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "stripe-live",
      key: "STRIPE_SECRET_KEY",
      value: "sk_live_51Nw8QeHv2kR9tXa7LmPq4ZsY0bUcJ3dF",
      environments: ["production"],
      sensitive: true,
      updated: "Sep 2",
      updatedBy: "Ava Mitchell"
    },
    {
      id: "stripe-test",
      key: "STRIPE_SECRET_KEY",
      value: "sk_test_51Nw8QeHv2kR9tXa7Tg6Wn1KcE5pLr8yV",
      environments: ["development", "preview"],
      sensitive: false,
      updated: "Sep 2",
      updatedBy: "Ava Mitchell"
    },
    {
      id: "stripe-hook",
      key: "STRIPE_WEBHOOK_SECRET",
      value: "whsec_9f3KqL2vX8mN4pR7tY1wZ6cB5dH0jG",
      environments: ["production"],
      sensitive: true,
      updated: "Sep 2",
      updatedBy: "Ava Mitchell"
    },
    {
      id: "resend",
      key: "RESEND_API_KEY",
      value: "re_Hk4q9TzLm_8VbWcN2xPr5sJd7FgY3eA",
      environments: ["development", "preview", "production"],
      sensitive: false,
      updated: "Jul 19",
      updatedBy: "Jasmine Brooks"
    },
    {
      id: "sentry",
      key: "SENTRY_DSN",
      value: "https://4b7e21c9d0a34f86@errors.northwind.example/2",
      environments: ["preview", "production"],
      sensitive: false,
      updated: "May 27",
      updatedBy: "Marcus Johnson"
    },
    {
      id: "redis-prod",
      key: "REDIS_URL",
      value: "rediss://default:Xt8pL3qW7nZ2@cache-prod.northwind.internal:6380",
      environments: ["production"],
      sensitive: true,
      updated: "Sep 18",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "redis-preview",
      key: "REDIS_URL",
      value: "redis://cache-staging.northwind.internal:6379",
      environments: ["preview"],
      sensitive: false,
      updated: "Sep 18",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "checkout-flag",
      key: "FEATURE_NEW_CHECKOUT",
      value: "true",
      environments: ["development", "preview"],
      sensitive: false,
      updated: "Sep 21",
      updatedBy: "Emma Collins"
    },
    {
      id: "checkout-flag-prod",
      key: "FEATURE_NEW_CHECKOUT",
      value: "false",
      environments: ["production"],
      sensitive: false,
      updated: "Sep 21",
      updatedBy: "Emma Collins"
    },
    {
      id: "log-dev",
      key: "LOG_LEVEL",
      value: "debug",
      environments: ["development"],
      sensitive: false,
      updated: "Apr 8",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "log",
      key: "LOG_LEVEL",
      value: "info",
      environments: ["preview", "production"],
      sensitive: false,
      updated: "Apr 8",
      updatedBy: "Sofia Ramirez"
    },
    {
      id: "search-admin",
      key: "SEARCH_ADMIN_KEY",
      value: "a1c9f4e27b8d6035e2f7a9b41c8d3e60",
      environments: ["production"],
      sensitive: true,
      updated: "Jul 30",
      updatedBy: "Jasmine Brooks"
    }
  ], L = `# Copied from .env.local
NEXT_PUBLIC_POSTHOG_KEY=phc_Rk2mT8vLq4xW9nZcB7pD1sF6hJ3yG5aE
SEARCH_ADMIN_KEY=b7e2a9c41d06f8e3a5c2b9d7e14f6a08
export SHIPPING_API_TOKEN="shippo_test_4e9c2b7a1f8d3e60c5b2"
LOG_LEVEL=warn
2FA_SECRET=JBSWY3DPEHPK3PXP
LOG_LEVEL=error`;
  var P = t(78136), B = t.n(P);
  let I = /^[A-Za-z_][A-Za-z0-9_]*$/, Y = $.map((e2) => e2.id), O = (e2) => $.find((a2) => a2.id === e2)?.label ?? e2, z = [...R.T.ease.exit], F = [...R.T.ease.standard], W = { duration: 0 };
  function D(e2) {
    let a2 = (0, n.useRef)(null), t2 = (0, n.useRef)(null), i2 = (0, n.useRef)(0);
    return (0, n.useEffect)(() => {
      let n2 = a2.current, r2 = t2.current;
      if (!n2 || !r2 || "u" < typeof ResizeObserver) return;
      let l2 = r2.offsetHeight, o2 = null, d2 = () => {
        o2 = null, n2.style.height = "", n2.style.overflow = "";
      }, c2 = new ResizeObserver(() => {
        let a3 = r2.offsetHeight;
        if (a3 === l2) return;
        let t3 = o2 ? n2.getBoundingClientRect().height : l2;
        if (l2 = a3, e2 || !o2 && performance.now() > i2.current) {
          o2 && (o2.stop(), d2());
          return;
        }
        o2?.stop(), n2.style.overflow = "hidden", n2.style.height = `${t3}px`;
        let c3 = (0, s.i)(n2, { height: [t3, a3] }, R.T.spring.smooth);
        o2 = c3, c3.then(() => {
          o2 === c3 && d2();
        });
      });
      return c2.observe(r2), () => {
        c2.disconnect(), o2?.stop();
      };
    }, [e2]), {
      outer: a2,
      inner: t2,
      arm: (0, n.useCallback)(() => {
        i2.current = performance.now() + 900;
      }, [])
    };
  }
  function M(e2) {
    let a2 = Y.filter((a3) => e2.includes(a3)).map(O);
    return a2.length < 2 ? a2[0] ?? "" : `${a2.slice(0, -1).join(", ")} and ${a2[a2.length - 1]}`;
  }
  let U = (e2, a2) => e2 < a2 ? -1 : +(e2 > a2);
  function V(e2) {
    let a2 = (e3) => Math.min(...e3.environments.map((e4) => Y.indexOf(e4)));
    return [...e2].sort((e3, t2) => U(e3.key, t2.key) || a2(e3) - a2(t2));
  }
  function H(e2) {
    return e2 ? /^[0-9]/.test(e2) ? "Keys can't start with a number" : I.test(e2) ? "" : "Use letters, numbers and underscores only" : "";
  }
  function K({
    variables: e2 = A,
    project: a2 = "northwind-storefront",
    sampleDotenv: t2 = L,
    title: s2 = "Environment variables",
    onChange: u2,
    onRedeploy: p2,
    className: h2
  }) {
    let v2 = !!(0, r.I)(), m2 = (0, n.useRef)(null), _2 = (0, n.useRef)(0), y2 = (0, n.useId)(), [x2, f2] = (0, n.useState)(() => V(e2)), [b2, g2] = (0, n.useState)("list"), [N2, k2] = (0, n.useState)(""), [C2, S2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [E2, P2] = (0, n.useState)(null), [I2, U2] = (0, n.useState)(null), [H2, Z2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [G2, X2] = (0, n.useState)({ count: 0, envs: [] }), [ea2, et2] = (0, n.useState)({ state: "idle", envs: [] }), [ei, en] = (0, n.useState)(null), [es, er] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [el, eo] = (0, n.useState)(""), [ed, ec] = (0, n.useState)("preview"), [eu, ep] = (0, n.useState)("production"), [eh, ev] = (0, n.useState)(false), em = v2 ? W : R.T.spring.smooth, { outer: e_, inner: ey, arm: ex } = D(v2);
    (0, n.useEffect)(() => {
      if (!ei) return;
      let e3 = window.setTimeout(() => en(null), 3800);
      return () => window.clearTimeout(e3);
    }, [ei]), (0, n.useEffect)(() => {
      if (!es.size) return;
      let e3 = window.setTimeout(() => er(/* @__PURE__ */ new Set()), 1800);
      return () => window.clearTimeout(e3);
    }, [es]), (0, n.useEffect)(() => {
      if ("done" !== ea2.state) return;
      let e3 = window.setTimeout(() => et2({ state: "idle", envs: [] }), 2600);
      return () => window.clearTimeout(e3);
    }, [ea2.state]);
    let ef = (e3) => `${e3}-${++_2.current}`;
    function eb(e3, a3, t3, i2) {
      f2(e3), u2?.(e3), Z2((e4) => /* @__PURE__ */ new Set([...e4, ...a3])), X2((e4) => ({
        count: e4.count + 1,
        envs: Y.filter((a4) => e4.envs.includes(a4) || t3.includes(a4))
      })), ("done" === ea2.state || "failed" === ea2.state) && et2({ state: "idle", envs: [] }), eo(i2);
    }
    function ej(e3) {
      window.requestAnimationFrame(() => m2.current?.querySelector(e3)?.focus());
    }
    function eg(e3) {
      P2(null), ej(`[data-edit="${e3}"]`);
    }
    async function eN() {
      let e3 = G2.envs;
      et2({ state: "running", envs: e3 });
      try {
        p2 ? await p2(e3) : await new Promise((e4) => window.setTimeout(e4, 1700)), et2({ state: "done", envs: e3 }), X2({ count: 0, envs: [] }), Z2(/* @__PURE__ */ new Set()), eo(`Redeployed ${M(e3)}`);
      } catch {
        et2({ state: "failed", envs: e3 }), eo("Redeploy failed. Your changes are still queued.");
      }
    }
    function ek(e3) {
      U2((a3) => a3 === e3 ? null : e3), P2(null);
    }
    let ew = N2.trim().toLowerCase(), eT = ew ? x2.filter((e3) => e3.key.toLowerCase().includes(ew)) : x2, eC = new Set(x2.map((e3) => e3.key)).size, eS = Y.map((e3) => x2.filter((a3) => a3.environments.includes(e3)).length), eE = G2.count > 0 || "idle" !== ea2.state, eR = `${b2}|${"list" === b2 && !eT.length}`, e$ = (0, n.useRef)(eR);
    return (0, n.useLayoutEffect)(() => {
      e$.current !== eR && (e$.current = eR, ex());
    }, [eR, ex]), (0, i.jsxs)("section", {
      ref: m2,
      className: [B().root, h2].filter(Boolean).join(" "),
      "aria-labelledby": y2,
      children: [
        (0, i.jsxs)("div", {
          className: B().shell,
          children: [
            (0, i.jsxs)("header", {
              className: B().header,
              children: [
                (0, i.jsxs)("div", {
                  className: B().headText,
                  children: [
                    (0, i.jsx)("h2", {
                      id: y2,
                      className: B().title,
                      children: s2
                    }),
                    (0, i.jsxs)("p", {
                      className: B().meta,
                      children: [
                        (0, i.jsx)("span", {
                          className: B().mono,
                          children: a2
                        }),
                        (0, i.jsx)("span", {
                          className: B().sep,
                          "aria-hidden": "true"
                        }),
                        (0, i.jsxs)("span", {
                          children: [
                            (0, i.jsx)("span", {
                              className: B().num,
                              children: eC
                            }),
                            " ",
                            1 === eC ? "key" : "keys",
                            " across ",
                            $.length,
                            " environments"
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: B().headActions,
                  children: [
                    (0, i.jsxs)(j.$, {
                      variant: "secondary",
                      "data-add-trigger": "paste",
                      "aria-expanded": "paste" === I2,
                      onClick: () => ek("paste"),
                      children: [
                        (0, i.jsx)(d.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Import .env"
                      ]
                    }),
                    (0, i.jsxs)(j.$, {
                      variant: "primary",
                      "data-add-trigger": "single",
                      "aria-expanded": "single" === I2,
                      onClick: () => ek("single"),
                      children: [
                        (0, i.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Add variable"
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)(l.N, {
              initial: false,
              children: eE ? (0, i.jsx)(
                o.PY1.div,
                {
                  className: B().bannerClip,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1, transition: em },
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: v2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  children: (0, i.jsx)(J, {
                    pending: G2,
                    deploy: ea2,
                    onRedeploy: eN,
                    reduce: v2
                  })
                },
                "banner"
              ) : null
            }),
            (0, i.jsx)(l.N, {
              initial: false,
              children: I2 ? (0, i.jsx)(
                o.PY1.div,
                {
                  className: B().addClip,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1, transition: em },
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: v2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  children: (0, i.jsx)(Q, {
                    mode: I2,
                    rows: x2,
                    sampleDotenv: t2,
                    reduce: v2,
                    onModeChange: U2,
                    onCancel: () => {
                      U2(null), ej(`[data-add-trigger='${I2}']`);
                    },
                    onAdd: function(e3, a3) {
                      let t3 = x2, i2 = [];
                      for (let n2 of e3) {
                        let e4 = ef("added");
                        i2.push(e4), t3 = (function(e5, a4) {
                          return V([
                            ...e5.map(
                              (e6) => e6.key === a4.key ? {
                                ...e6,
                                environments: e6.environments.filter(
                                  (e7) => !a4.environments.includes(e7)
                                )
                              } : e6
                            ).filter((e6) => e6.environments.length > 0),
                            a4
                          ]);
                        })(t3, {
                          id: e4,
                          key: n2.key,
                          value: n2.value,
                          environments: a3,
                          sensitive: n2.sensitive,
                          updated: "Just now",
                          updatedBy: "You"
                        });
                      }
                      eb(
                        t3,
                        i2,
                        a3,
                        1 === e3.length ? `${e3[0].key} added to ${M(a3)}` : `${e3.length} variables imported into ${M(a3)}`
                      ), er(new Set(i2)), k2(""), g2("list"), U2(null);
                    }
                  })
                },
                "add"
              ) : null
            }),
            (0, i.jsxs)("div", {
              className: B().toolbar,
              children: [
                (0, i.jsx)("div", {
                  className: B().search,
                  children: (0, i.jsx)(w.L, {
                    label: "Search variables",
                    placeholder: "Search keys",
                    value: N2,
                    onValueChange: k2
                  })
                }),
                (0, i.jsx)(T.A, {
                  label: "View",
                  value: b2,
                  onValueChange: (e3) => {
                    g2(e3), P2(null);
                  },
                  options: [
                    { value: "list", label: "Variables" },
                    { value: "compare", label: "Compare" }
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              ref: e_,
              className: B().viewFrame,
              children: (0, i.jsx)("div", {
                ref: ey,
                className: B().followInner,
                children: (0, i.jsx)(l.N, {
                  mode: "wait",
                  initial: false,
                  children: (0, i.jsx)(
                    o.PY1.div,
                    {
                      className: B().viewPane,
                      initial: v2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: v2 ? W : { duration: R.T.duration.standard, ease: F }
                      },
                      exit: {
                        opacity: 0,
                        transition: v2 ? W : { duration: R.T.duration.instant, ease: z }
                      },
                      children: "list" === b2 ? (0, i.jsx)(q, {
                        rows: eT,
                        total: x2.length,
                        query: N2,
                        envCounts: eS,
                        revealed: C2,
                        editing: E2,
                        changed: H2,
                        fresh: es,
                        note: ei,
                        reduce: v2,
                        onToggleEnv: function(e3, a3) {
                          let t3 = x2.find((a4) => a4.id === e3);
                          if (!t3) return;
                          let i2 = t3.environments.includes(a3);
                          if (i2 && 1 === t3.environments.length)
                            return void en({
                              id: e3,
                              text: "A value needs at least one environment. Remove it instead."
                            });
                          if (!i2 && x2.find(
                            (i3) => i3.id !== e3 && i3.key === t3.key && i3.environments.includes(a3)
                          ))
                            return void en({
                              id: e3,
                              text: `${t3.key} already has a ${O(a3)} value. Turn it off on that row first.`
                            });
                          let n2 = i2 ? t3.environments.filter((e4) => e4 !== a3) : Y.filter(
                            (e4) => e4 === a3 || t3.environments.includes(e4)
                          );
                          en((a4) => a4?.id === e3 ? null : a4), eb(
                            V(
                              x2.map(
                                (a4) => a4.id === e3 ? {
                                  ...a4,
                                  environments: n2,
                                  updated: "Just now",
                                  updatedBy: "You"
                                } : a4
                              )
                            ),
                            [e3],
                            [a3],
                            `${O(a3)} turned ${i2 ? "off" : "on"} for ${t3.key}`
                          );
                        },
                        onToggleReveal: function(e3) {
                          S2((a3) => {
                            let t3 = new Set(a3);
                            return t3.has(e3) ? t3.delete(e3) : t3.add(e3), t3;
                          });
                        },
                        onEdit: function(e3) {
                          P2((a3) => a3 === e3 ? null : e3), S2((a3) => {
                            if (!a3.has(e3)) return a3;
                            let t3 = new Set(a3);
                            return t3.delete(e3), t3;
                          });
                        },
                        onCloseEditor: eg,
                        onSave: function(e3, a3, t3) {
                          let i2 = x2.find((a4) => a4.id === e3);
                          i2 && (eb(
                            x2.map(
                              (i3) => i3.id === e3 ? {
                                ...i3,
                                value: a3 || i3.value,
                                sensitive: t3,
                                updated: "Just now",
                                updatedBy: "You"
                              } : i3
                            ),
                            [e3],
                            i2.environments,
                            `${i2.key} saved`
                          ), er(/* @__PURE__ */ new Set([e3])), eg(e3));
                        },
                        onRemove: function(e3) {
                          let a3 = x2.find((a4) => a4.id === e3);
                          a3 && (P2(null), eb(
                            x2.filter((a4) => a4.id !== e3),
                            [],
                            a3.environments,
                            `${a3.key} removed from ${M(a3.environments)}`
                          ), ej("[data-add-trigger='single']"));
                        },
                        onClearSearch: () => k2(""),
                        onAdd: () => ek("single")
                      }) : (0, i.jsx)(ee, {
                        rows: x2,
                        needle: ew,
                        base: ed,
                        target: eu,
                        showMatching: eh,
                        reduce: v2,
                        onBase: ec,
                        onTarget: ep,
                        onSwap: () => {
                          ec(eu), ep(ed);
                        },
                        onShowMatching: ev,
                        onCopy: function(e3, a3) {
                          eb(
                            V(
                              x2.map(
                                (t3) => t3.id === e3.id ? {
                                  ...t3,
                                  environments: Y.filter(
                                    (e4) => e4 === a3 || t3.environments.includes(e4)
                                  ),
                                  updated: "Just now",
                                  updatedBy: "You"
                                } : t3
                              )
                            ),
                            [e3.id],
                            [a3],
                            `${e3.key} copied to ${O(a3)}`
                          );
                        },
                        onClearSearch: () => k2("")
                      })
                    },
                    b2
                  )
                })
              })
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: B().srOnly,
          role: "status",
          "aria-live": "polite",
          children: el
        })
      ]
    });
  }
  function J({ pending: e2, deploy: a2, onRedeploy: t2, reduce: s2 }) {
    let r2 = "done" === a2.state, d2 = "failed" === a2.state, c2 = r2 ? `Redeployed ${M(a2.envs)}` : d2 ? "Redeploy failed" : `Redeploy to apply ${e2.count} ${1 === e2.count ? "change" : "changes"}`, m2 = r2 ? "New deployments picked up the changes. This demo only simulates the deploy." : d2 ? "Nothing was deployed and your changes are still queued. Try again." : `${M(e2.envs)} ${1 === e2.envs.length ? "keeps" : "keep"} the old values until the next deployment.`, { outer: _2, inner: y2, arm: x2 } = D(s2), f2 = (0, n.useRef)(a2.state);
    (0, n.useLayoutEffect)(() => {
      f2.current !== a2.state && (f2.current = a2.state, x2());
    }, [a2.state, x2]);
    let b2 = s2 ? { opacity: 0 } : { opacity: 0, y: 4 }, g2 = {
      opacity: 0,
      y: s2 ? 0 : -4,
      transition: s2 ? W : { duration: R.T.duration.instant, ease: z }
    }, N2 = s2 ? W : { duration: R.T.duration.standard, ease: F };
    return (0, i.jsx)("div", {
      ref: _2,
      children: (0, i.jsx)("div", {
        ref: y2,
        className: B().followInner,
        children: (0, i.jsxs)("div", {
          className: B().banner,
          "data-state": a2.state,
          children: [
            (0, i.jsx)("span", {
              className: B().bannerIcon,
              "aria-hidden": "true",
              children: (0, i.jsx)(l.N, {
                mode: "popLayout",
                initial: false,
                children: (0, i.jsx)(
                  o.PY1.span,
                  {
                    className: B().bannerGlyph,
                    initial: s2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                    animate: { opacity: 1, scale: 1 },
                    exit: {
                      opacity: 0,
                      scale: s2 ? 1 : 0.6,
                      transition: s2 ? W : { duration: R.T.duration.instant }
                    },
                    transition: s2 ? W : R.T.spring.snappy,
                    children: r2 ? (0, i.jsx)(u.A, { size: 16, strokeWidth: 1.75 }) : d2 ? (0, i.jsx)(p.A, { size: 16, strokeWidth: 1.75 }) : (0, i.jsx)(h.A, { size: 16, strokeWidth: 1.75 })
                  },
                  r2 ? "done" : d2 ? "failed" : "info"
                )
              })
            }),
            (0, i.jsxs)("div", {
              className: B().bannerText,
              children: [
                (0, i.jsx)(l.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, i.jsx)(
                    o.PY1.p,
                    {
                      className: B().bannerTitle,
                      initial: b2,
                      animate: { opacity: 1, y: 0 },
                      exit: g2,
                      transition: N2,
                      children: (0, i.jsx)("span", {
                        className: B().num,
                        children: c2
                      })
                    },
                    c2
                  )
                }),
                (0, i.jsx)(l.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, i.jsx)(
                    o.PY1.p,
                    {
                      className: B().bannerDetail,
                      initial: b2,
                      animate: { opacity: 1, y: 0 },
                      exit: g2,
                      transition: s2 ? W : { ...N2, delay: R.T.stagger.word },
                      children: m2
                    },
                    m2
                  )
                })
              ]
            }),
            (0, i.jsx)(l.N, {
              mode: "popLayout",
              initial: false,
              children: r2 ? null : (0, i.jsx)(
                o.PY1.span,
                {
                  className: B().bannerAction,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: s2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  transition: N2,
                  children: (0, i.jsxs)(j.$, {
                    variant: "secondary",
                    className: B().bannerButton,
                    loading: "running" === a2.state,
                    onClick: t2,
                    children: [
                      (0, i.jsx)(v.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "running" === a2.state ? "Redeploying" : d2 ? "Try again" : "Redeploy"
                    ]
                  })
                },
                "action"
              )
            })
          ]
        })
      })
    });
  }
  function Z({ env: e2, on: a2, name: t2, onToggle: n2, reduce: s2 }) {
    return (0, i.jsxs)("button", {
      type: "button",
      className: B().scope,
      "data-on": a2,
      "aria-pressed": a2,
      "aria-label": t2 ? `${O(e2)} for ${t2}` : void 0,
      onClick: n2,
      children: [
        (0, i.jsxs)("span", {
          className: B().box,
          "aria-hidden": "true",
          children: [
            (0, i.jsx)(o.PY1.span, {
              className: B().boxFill,
              initial: false,
              animate: { opacity: +!!a2, scale: a2 ? 1 : 0.6 },
              transition: s2 ? W : {
                scale: R.T.spring.snappy,
                opacity: { duration: R.T.duration.instant }
              }
            }),
            (0, i.jsx)("svg", {
              className: B().boxMark,
              viewBox: "0 0 18 18",
              fill: "none",
              focusable: "false",
              children: (0, i.jsx)(o.PY1.path, {
                d: "M5 9.4l2.6 2.6L13 6.6",
                initial: false,
                animate: { pathLength: +!!a2, opacity: +!!a2 },
                transition: s2 ? W : {
                  pathLength: R.T.spring.smooth,
                  opacity: { duration: R.T.duration.instant }
                },
                stroke: "currentColor",
                strokeWidth: 1.75,
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })
            })
          ]
        }),
        (0, i.jsx)("span", { className: B().scopeLabel, children: O(e2) })
      ]
    });
  }
  function q({
    rows: e2,
    total: a2,
    query: t2,
    envCounts: n2,
    revealed: s2,
    editing: r2,
    changed: d2,
    fresh: u2,
    note: p2,
    reduce: h2,
    onToggleEnv: v2,
    onToggleReveal: m2,
    onEdit: _2,
    onCloseEditor: y2,
    onSave: x2,
    onRemove: f2,
    onClearSearch: b2,
    onAdd: g2
  }) {
    let N2 = h2 ? W : R.T.spring.smooth;
    return e2.length ? (0, i.jsxs)("div", {
      className: B().table,
      children: [
        (0, i.jsxs)("div", {
          className: B().columns,
          "aria-hidden": "true",
          children: [
            (0, i.jsx)("span", { children: "Key" }),
            (0, i.jsx)("span", { children: "Value" }),
            $.map(
              (e3, a3) => (0, i.jsxs)(
                "span",
                {
                  className: B().envHead,
                  children: [
                    e3.label,
                    (0, i.jsxs)("span", {
                      className: B().envCount,
                      children: [n2[a3], " set"]
                    })
                  ]
                },
                e3.id
              )
            ),
            (0, i.jsx)("span", {})
          ]
        }),
        (0, i.jsx)("ul", {
          className: B().list,
          "aria-label": "Variables",
          children: (0, i.jsx)(l.N, {
            initial: false,
            children: e2.map(
              (e3) => (0, i.jsx)(
                o.PY1.li,
                {
                  className: B().item,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1, transition: N2 },
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: h2 ? W : { duration: R.T.duration.exit, ease: z }
                  },
                  children: (0, i.jsx)(G, {
                    row: e3,
                    revealed: s2.has(e3.id),
                    editing: r2 === e3.id,
                    changed: d2.has(e3.id),
                    fresh: u2.has(e3.id),
                    note: p2?.id === e3.id ? p2.text : null,
                    reduce: h2,
                    onToggleEnv: (a3) => v2(e3.id, a3),
                    onToggleReveal: () => m2(e3.id),
                    onEdit: () => _2(e3.id),
                    onCloseEditor: () => y2(e3.id),
                    onSave: (a3, t3) => x2(e3.id, a3, t3),
                    onRemove: () => f2(e3.id)
                  })
                },
                e3.id
              )
            )
          })
        })
      ]
    }) : (0, i.jsxs)("div", {
      className: B().empty,
      children: [
        (0, i.jsx)("p", {
          className: B().emptyTitle,
          children: a2 ? `No keys match "${t2.trim()}"` : "No variables yet"
        }),
        (0, i.jsx)("p", {
          className: B().emptyText,
          children: a2 ? "Search looks at key names only. Values stay hidden." : "Add one, or paste a .env file to import many at once."
        }),
        a2 ? (0, i.jsx)(j.$, {
          variant: "secondary",
          onClick: b2,
          children: "Clear search"
        }) : (0, i.jsxs)(j.$, {
          variant: "secondary",
          onClick: g2,
          children: [
            (0, i.jsx)(c.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            "Add variable"
          ]
        })
      ]
    });
  }
  function G({
    row: e2,
    revealed: a2,
    editing: t2,
    changed: s2,
    fresh: r2,
    note: d2,
    reduce: c2,
    onToggleEnv: u2,
    onToggleReveal: p2,
    onEdit: h2,
    onCloseEditor: v2,
    onSave: b2,
    onRemove: j2
  }) {
    let g2 = (0, n.useId)(), k2 = c2 ? W : R.T.spring.smooth, w2 = c2 ? W : { duration: R.T.duration.exit, ease: z }, T2 = c2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    } : {
      initial: { opacity: 0, y: 4 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -4 }
    };
    return (0, i.jsxs)("div", {
      className: B().row,
      "data-editing": t2 || void 0,
      "data-fresh": r2 || void 0,
      children: [
        (0, i.jsxs)("div", {
          className: B().rowMain,
          children: [
            (0, i.jsxs)("div", {
              className: B().keyCell,
              children: [
                (0, i.jsxs)("span", {
                  className: B().keyLine,
                  children: [
                    (0, i.jsx)("span", { className: B().key, children: e2.key }),
                    s2 ? (0, i.jsx)("span", {
                      className: B().changedDot,
                      "aria-hidden": "true"
                    }) : null
                  ]
                }),
                (0, i.jsx)("span", {
                  className: B().updated,
                  "data-changed": s2 || void 0,
                  children: s2 ? "Changed, waiting for redeploy" : `Updated ${e2.updated} by ${e2.updatedBy}`
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().valueCell,
              children: [
                (0, i.jsx)("span", {
                  className: B().valueSlot,
                  children: (0, i.jsx)(l.N, {
                    mode: "popLayout",
                    initial: false,
                    children: a2 && !e2.sensitive ? (0, i.jsx)(
                      o.PY1.span,
                      {
                        className: B().value,
                        title: e2.value,
                        ...T2,
                        transition: c2 ? W : { duration: R.T.duration.standard, ease: F },
                        children: e2.value
                      },
                      "value"
                    ) : (0, i.jsxs)(
                      o.PY1.span,
                      {
                        className: B().mask,
                        ...T2,
                        transition: c2 ? W : { duration: R.T.duration.fast, ease: F },
                        children: [
                          (0, i.jsx)("span", {
                            "aria-hidden": "true",
                            children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                          }),
                          (0, i.jsx)("span", {
                            className: B().srOnly,
                            children: e2.sensitive ? "Sensitive value, write-only" : "Hidden value"
                          })
                        ]
                      },
                      "mask"
                    )
                  })
                }),
                e2.sensitive ? (0, i.jsxs)("span", {
                  className: B().sensitive,
                  children: [
                    (0, i.jsx)(m.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Sensitive"
                  ]
                }) : (0, i.jsxs)("span", {
                  className: B().valueActions,
                  children: [
                    (0, i.jsx)(l.N, {
                      initial: false,
                      children: a2 ? (0, i.jsx)(
                        o.PY1.span,
                        {
                          className: B().copySlot,
                          initial: c2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
                          animate: { opacity: 1, scale: 1 },
                          exit: {
                            opacity: 0,
                            scale: c2 ? 1 : 0.8,
                            transition: c2 ? W : {
                              duration: R.T.duration.exit,
                              ease: z
                            }
                          },
                          transition: c2 ? W : R.T.spring.snappy,
                          children: (0, i.jsx)(N.CopyButton, {
                            value: e2.value,
                            label: `Copy ${e2.key}`,
                            iconOnly: true,
                            variant: "plain"
                          })
                        },
                        "copy"
                      ) : null
                    }),
                    (0, i.jsx)("button", {
                      type: "button",
                      className: B().iconButton,
                      "aria-pressed": a2,
                      "aria-label": `Reveal ${e2.key}`,
                      onClick: p2,
                      children: a2 ? (0, i.jsx)(_.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }) : (0, i.jsx)(y.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              className: B().scopes,
              role: "group",
              "aria-label": `Environments for ${e2.key}`,
              children: $.map(
                (a3) => (0, i.jsx)(
                  Z,
                  {
                    env: a3.id,
                    on: e2.environments.includes(a3.id),
                    name: e2.key,
                    onToggle: () => u2(a3.id),
                    reduce: c2
                  },
                  a3.id
                )
              )
            }),
            (0, i.jsx)("div", {
              className: B().rowActions,
              children: (0, i.jsx)("button", {
                type: "button",
                className: B().iconButton,
                "data-edit": e2.id,
                "data-active": t2 || void 0,
                "aria-expanded": t2,
                "aria-controls": t2 ? g2 : void 0,
                "aria-label": `Edit ${e2.key}`,
                onClick: h2,
                children: (0, i.jsx)(x.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            })
          ]
        }),
        (0, i.jsx)(l.N, {
          initial: false,
          children: d2 ? (0, i.jsx)(
            o.PY1.p,
            {
              className: B().noteClip,
              role: "alert",
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1, transition: k2 },
              exit: { height: 0, opacity: 0, transition: w2 },
              children: (0, i.jsxs)("span", {
                className: B().note,
                children: [
                  (0, i.jsx)(f.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  d2
                ]
              })
            },
            "note"
          ) : null
        }),
        (0, i.jsx)(l.N, {
          initial: false,
          children: t2 ? (0, i.jsx)(
            o.PY1.div,
            {
              id: g2,
              className: B().editorClip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1, transition: k2 },
              exit: { height: 0, opacity: 0, transition: w2 },
              children: (0, i.jsx)(X, {
                row: e2,
                onCancel: v2,
                onSave: b2,
                onRemove: j2
              })
            },
            "editor"
          ) : null
        })
      ]
    });
  }
  function X({ row: e2, onCancel: a2, onSave: t2, onRemove: s2 }) {
    let r2 = (0, n.useRef)(null), [l2, o2] = (0, n.useState)(e2.sensitive ? "" : e2.value), [d2, c2] = (0, n.useState)(e2.sensitive), [u2, p2] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      r2.current?.focus({ preventScroll: true });
    }, []);
    let h2 = (e2.sensitive ? l2.length > 0 : l2 !== e2.value && l2.length > 0) || d2 !== e2.sensitive, v2 = !e2.sensitive && 0 === l2.length;
    return (0, i.jsxs)("form", {
      className: B().editor,
      onKeyDown: function(e3) {
        "Escape" === e3.key && (e3.stopPropagation(), a2());
      },
      onSubmit: (e3) => {
        e3.preventDefault(), h2 && !v2 && t2(l2, d2);
      },
      children: [
        (0, i.jsx)(k.p, {
          ref: r2,
          label: `Value for ${M(e2.environments)}`,
          className: B().monoInput,
          value: l2,
          placeholder: e2.sensitive ? "Enter a new value to replace it" : void 0,
          autoComplete: "off",
          spellCheck: false,
          error: v2 ? "A value can't be empty. Remove the variable instead." : void 0,
          onChange: (e3) => o2(e3.target.value)
        }),
        (0, i.jsx)(g.S, {
          label: "Sensitive",
          checked: d2,
          disabled: e2.sensitive,
          description: e2.sensitive ? "This value is write-only. To make it readable again, remove it and add it back." : "Write-only after saving. It can be replaced, but nobody can reveal it again.",
          onCheckedChange: (e3) => c2(true === e3)
        }),
        (0, i.jsxs)("div", {
          className: B().editorActions,
          children: [
            (0, i.jsx)(j.$, {
              type: "button",
              variant: u2 ? "danger" : "ghost",
              className: B().removeButton,
              onClick: () => {
                u2 ? s2() : p2(true);
              },
              onBlur: () => p2(false),
              children: u2 ? "Confirm remove" : "Remove variable"
            }),
            (0, i.jsxs)("span", {
              className: B().editorEnd,
              children: [
                (0, i.jsx)(j.$, {
                  type: "button",
                  variant: "secondary",
                  onClick: a2,
                  children: "Cancel"
                }),
                (0, i.jsx)(j.$, {
                  type: "submit",
                  variant: "primary",
                  disabled: !h2 || v2,
                  children: "Save value"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Q({
    mode: e2,
    rows: a2,
    sampleDotenv: t2,
    reduce: s2,
    onModeChange: r2,
    onCancel: l2,
    onAdd: o2
  }) {
    let d2 = (0, n.useRef)(null), u2 = (0, n.useRef)(null), [h2, v2] = (0, n.useState)(""), [m2, _2] = (0, n.useState)(""), [y2, x2] = (0, n.useState)(false), [b2, N2] = (0, n.useState)(["development", "preview"]), [w2, C2] = (0, n.useState)(t2), [S2, R2] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      let a3 = "single" === e2 ? d2.current : u2.current, t3 = window.requestAnimationFrame(() => a3?.focus({ preventScroll: true }));
      return () => window.cancelAnimationFrame(t3);
    }, [e2]);
    let A2 = (0, n.useMemo)(() => {
      let e3;
      return e3 = [], w2.split(/\r?\n/).forEach((a3, t3) => {
        let i2 = a3.trim();
        if (!i2 || i2.startsWith("#")) return;
        let n2 = i2.replace(/^export\s+/, ""), s3 = n2.indexOf("=");
        if (s3 < 0)
          return void e3.push({
            line: t3 + 1,
            key: n2.slice(0, 40),
            value: "",
            status: "invalid",
            detail: "Missing an equals sign, skipped"
          });
        let r3 = n2.slice(0, s3).trim(), l3 = (function(e4) {
          let a4 = e4.trim(), t4 = a4[0];
          if (('"' === t4 || "'" === t4) && a4.length > 1 && a4.endsWith(t4)) {
            let e5 = a4.slice(1, -1);
            return '"' === t4 ? e5.replace(/\\n/g, "\n").replace(/\\"/g, '"') : e5;
          }
          let i3 = a4.search(/\s#/);
          return (i3 >= 0 ? a4.slice(0, i3) : a4).trim();
        })(n2.slice(s3 + 1)), o3 = r3 ? H(r3) : "Missing a key";
        e3.push(
          o3 ? {
            line: t3 + 1,
            key: r3 || "(empty)",
            value: l3,
            status: "invalid",
            detail: `${o3}, skipped`
          } : {
            line: t3 + 1,
            key: r3,
            value: l3,
            status: "new",
            detail: "New"
          }
        );
      }), e3.map((t3, i2) => {
        if ("invalid" === t3.status) return t3;
        let n2 = e3.slice(i2 + 1).find((e4) => "invalid" !== e4.status && e4.key === t3.key);
        if (n2)
          return {
            ...t3,
            status: "duplicate",
            detail: `Line ${n2.line} sets it again, skipped`
          };
        let s3 = b2.filter(
          (e4) => a2.some((a3) => a3.key === t3.key && a3.environments.includes(e4))
        );
        return s3.length ? {
          ...t3,
          status: "replace",
          detail: `Replaces the ${M(s3)} value`
        } : t3;
      });
    }, [w2, a2, b2]), L2 = A2.filter((e3) => "new" === e3.status || "replace" === e3.status), P2 = A2.length - L2.length, I2 = h2.trim(), O2 = I2 ? b2.filter(
      (e3) => a2.some((a3) => a3.key === I2 && a3.environments.includes(e3))
    ) : [], z2 = H(I2) || (S2 && !I2 ? "Enter a key" : "") || (O2.length ? `Already set in ${M(O2)}. Edit that row, or turn those environments off here.` : ""), F2 = S2 && !m2 ? "Enter a value" : "", W2 = b2.length ? "" : "Choose at least one environment", D2 = (0, i.jsxs)("fieldset", {
      className: B().pickEnvs,
      children: [
        (0, i.jsx)("legend", {
          className: B().fieldLabel,
          children: "single" === e2 ? "Environments" : "Import into"
        }),
        (0, i.jsx)("div", {
          className: B().pickRow,
          children: $.map(
            (e3) => (0, i.jsx)(
              Z,
              {
                env: e3.id,
                on: b2.includes(e3.id),
                onToggle: () => {
                  var a3;
                  return a3 = e3.id, void N2(
                    (e4) => e4.includes(a3) ? e4.filter((e5) => e5 !== a3) : Y.filter((t3) => t3 === a3 || e4.includes(t3))
                  );
                },
                reduce: s2
              },
              e3.id
            )
          )
        }),
        W2 ? (0, i.jsx)("span", { className: B().fieldError, children: W2 }) : null
      ]
    });
    return (0, i.jsxs)("div", {
      className: B().add,
      onKeyDown: function(e3) {
        "Escape" === e3.key && (e3.stopPropagation(), l2());
      },
      role: "group",
      "aria-label": "single" === e2 ? "Add a variable" : "Import a .env file",
      children: [
        (0, i.jsx)("div", {
          className: B().addHead,
          children: (0, i.jsx)(T.A, {
            label: "How to add",
            value: e2,
            onValueChange: (e3) => r2(e3),
            options: [
              { value: "single", label: "One variable" },
              { value: "paste", label: "Paste .env" }
            ]
          })
        }),
        "single" === e2 ? (0, i.jsxs)("form", {
          className: B().addForm,
          onSubmit: (e3) => {
            e3.preventDefault(), R2(true), I2 && m2 && !z2 && !W2 && o2([{ key: I2, value: m2, sensitive: y2 }], b2);
          },
          children: [
            (0, i.jsxs)("div", {
              className: B().pair,
              children: [
                (0, i.jsx)(k.p, {
                  ref: d2,
                  label: "Key",
                  className: B().monoInput,
                  placeholder: "e.g. CLIENT_ID",
                  value: h2,
                  autoComplete: "off",
                  spellCheck: false,
                  description: z2 ? void 0 : "Paste a whole .env here to import many at once",
                  error: z2 || void 0,
                  onPaste: function(e3) {
                    let a3 = e3.clipboardData.getData("text");
                    /\r?\n/.test(a3.trim()) && a3.includes("=") && (e3.preventDefault(), C2(a3), r2("paste"));
                  },
                  onChange: (e3) => v2(e3.target.value)
                }),
                (0, i.jsx)(k.p, {
                  label: "Value",
                  className: B().monoInput,
                  value: m2,
                  autoComplete: "off",
                  spellCheck: false,
                  error: F2 || void 0,
                  onChange: (e3) => _2(e3.target.value)
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().addOptions,
              children: [
                D2,
                (0, i.jsx)(g.S, {
                  label: "Sensitive",
                  description: "Write-only after saving",
                  checked: y2,
                  onCheckedChange: (e3) => x2(true === e3)
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().addActions,
              children: [
                (0, i.jsx)(j.$, {
                  type: "button",
                  variant: "secondary",
                  onClick: l2,
                  children: "Cancel"
                }),
                (0, i.jsx)(j.$, {
                  type: "submit",
                  variant: "primary",
                  children: "Save variable"
                })
              ]
            })
          ]
        }) : (0, i.jsxs)("form", {
          className: B().addForm,
          onSubmit: (e3) => {
            e3.preventDefault(), L2.length && b2.length && o2(
              L2.map((e4) => ({
                key: e4.key,
                value: e4.value,
                sensitive: false
              })),
              b2
            );
          },
          children: [
            (0, i.jsx)(E.T, {
              ref: u2,
              label: ".env contents",
              className: B().monoArea,
              rows: 7,
              value: w2,
              spellCheck: false,
              autoComplete: "off",
              onChange: (e3) => C2(e3.target.value)
            }),
            D2,
            (0, i.jsxs)("div", {
              className: B().parsed,
              children: [
                (0, i.jsx)("p", {
                  className: B().parsedSummary,
                  "aria-live": "polite",
                  children: A2.length ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("span", {
                        className: B().num,
                        children: L2.length
                      }),
                      " to import",
                      P2 ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          ", ",
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: P2
                          }),
                          " skipped"
                        ]
                      }) : null
                    ]
                  }) : "Paste lines like KEY=value. Comments and blank lines are ignored."
                }),
                A2.length ? (0, i.jsx)("ul", {
                  className: B().parsedList,
                  children: A2.map(
                    (e3) => (0, i.jsxs)(
                      "li",
                      {
                        className: B().parsedRow,
                        "data-status": e3.status,
                        children: [
                          (0, i.jsx)("span", {
                            className: B().parsedLine,
                            children: e3.line
                          }),
                          (0, i.jsx)("span", {
                            className: B().parsedKey,
                            children: e3.key
                          }),
                          (0, i.jsx)("span", {
                            className: B().parsedValue,
                            "aria-hidden": "true",
                            children: e3.value ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : ""
                          }),
                          (0, i.jsxs)("span", {
                            className: B().parsedStatus,
                            children: [
                              "new" === e3.status ? (0, i.jsx)(c.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : "invalid" === e3.status ? (0, i.jsx)(p.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : (0, i.jsx)(f.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              e3.detail
                            ]
                          })
                        ]
                      },
                      `${e3.line}-${e3.key}`
                    )
                  )
                }) : null
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().addActions,
              children: [
                (0, i.jsx)(j.$, {
                  type: "button",
                  variant: "secondary",
                  onClick: l2,
                  children: "Cancel"
                }),
                (0, i.jsx)(j.$, {
                  type: "submit",
                  variant: "primary",
                  disabled: !L2.length || !b2.length,
                  children: 1 === L2.length ? "Import 1 variable" : `Import ${L2.length} variables`
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ee({
    rows: e2,
    needle: a2,
    base: t2,
    target: n2,
    showMatching: s2,
    reduce: r2,
    onBase: d2,
    onTarget: c2,
    onSwap: p2,
    onShowMatching: h2,
    onCopy: v2,
    onClearSearch: m2
  }) {
    let _2 = r2 ? W : R.T.spring.smooth, y2 = [...new Set(e2.map((e3) => e3.key))].sort(U).flatMap((a3) => {
      let i2 = e2.find((e3) => e3.key === a3 && e3.environments.includes(t2)), s3 = e2.find((e3) => e3.key === a3 && e3.environments.includes(n2));
      if (!i2 && !s3) return [];
      let r3 = s3 ? i2 ? i2.value === s3.value ? "same" : "different" : "missing-base" : "missing-target";
      return [{ key: a3, base: i2, target: s3, status: r3 }];
    }).filter((e3) => !a2 || e3.key.toLowerCase().includes(a2)), x2 = y2.filter(
      (e3) => "missing-base" === e3.status || "missing-target" === e3.status
    ).length, g2 = y2.filter((e3) => "different" === e3.status).length, N2 = y2.length - x2 - g2, k2 = s2 ? y2 : y2.filter((e3) => "same" !== e3.status), w2 = $.map((e3) => ({ value: e3.id, label: e3.label }));
    return (0, i.jsxs)("div", {
      className: B().compare,
      children: [
        (0, i.jsxs)("div", {
          className: B().compareControls,
          children: [
            (0, i.jsxs)("div", {
              className: B().pickers,
              children: [
                (0, i.jsx)(C.l, {
                  label: "Environment",
                  value: t2,
                  options: w2.map((e3) => ({ ...e3, disabled: e3.value === n2 })),
                  onValueChange: (e3) => d2(e3)
                }),
                (0, i.jsx)("button", {
                  type: "button",
                  className: B().swap,
                  "aria-label": "Swap environments",
                  onClick: p2,
                  children: (0, i.jsx)(b.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, i.jsx)(C.l, {
                  label: "Compared with",
                  value: n2,
                  options: w2.map((e3) => ({ ...e3, disabled: e3.value === t2 })),
                  onValueChange: (e3) => c2(e3)
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: B().summary,
              children: [
                (0, i.jsxs)("p", {
                  className: B().counts,
                  "aria-live": "polite",
                  children: [
                    (0, i.jsx)("span", {
                      "data-tone": "warning",
                      children: (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: x2
                          }),
                          " missing"
                        ]
                      })
                    }),
                    (0, i.jsx)("span", {
                      "data-tone": "info",
                      children: (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: g2
                          }),
                          " different"
                        ]
                      })
                    }),
                    (0, i.jsx)("span", {
                      children: (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("span", {
                            className: B().num,
                            children: N2
                          }),
                          " matching"
                        ]
                      })
                    })
                  ]
                }),
                (0, i.jsx)(S.d, {
                  label: "Show matching",
                  checked: s2,
                  onCheckedChange: h2
                })
              ]
            })
          ]
        }),
        k2.length ? (0, i.jsxs)("div", {
          className: B().table,
          children: [
            (0, i.jsxs)("div", {
              className: B().diffColumns,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)("span", { children: "Key" }),
                (0, i.jsx)("span", { children: O(t2) }),
                (0, i.jsx)("span", { children: O(n2) }),
                (0, i.jsx)("span", { children: "Result" })
              ]
            }),
            (0, i.jsx)("ul", {
              className: B().list,
              "aria-label": `${O(t2)} compared with ${O(n2)}`,
              children: (0, i.jsx)(l.N, {
                initial: false,
                children: k2.map((e3) => {
                  let a3, s3 = "missing-target" === e3.status ? e3.base : "missing-base" === e3.status ? e3.target : void 0, l2 = "missing-target" === e3.status ? n2 : t2;
                  return (0, i.jsx)(
                    o.PY1.li,
                    {
                      className: B().item,
                      initial: { height: 0, opacity: 0 },
                      animate: {
                        height: "auto",
                        opacity: 1,
                        transition: _2
                      },
                      exit: {
                        height: 0,
                        opacity: 0,
                        transition: r2 ? W : { duration: R.T.duration.exit, ease: z }
                      },
                      children: (0, i.jsxs)("div", {
                        className: B().diffRow,
                        "data-status": e3.status,
                        children: [
                          (0, i.jsx)("span", {
                            className: B().key,
                            children: e3.key
                          }),
                          (0, i.jsx)(ea, { env: t2, row: e3.base }),
                          (0, i.jsx)(ea, { env: n2, row: e3.target }),
                          (0, i.jsxs)("span", {
                            className: B().diffResult,
                            children: [
                              (0, i.jsxs)("span", {
                                className: B().diffStatus,
                                "data-status": e3.status,
                                children: [
                                  "same" === e3.status ? (0, i.jsx)(u.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : "different" === e3.status ? (0, i.jsx)(b.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : (0, i.jsx)(f.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  (a3 = e3.status, "missing-target" === a3 ? `Missing in ${O(n2)}` : "missing-base" === a3 ? `Missing in ${O(t2)}` : "different" === a3 ? "Different values" : "Same value")
                                ]
                              }),
                              s3 ? (0, i.jsxs)(j.$, {
                                variant: "secondary",
                                className: B().copyTo,
                                onClick: () => v2(s3, l2),
                                children: ["Copy to ", O(l2)]
                              }) : null
                            ]
                          })
                        ]
                      })
                    },
                    e3.key
                  );
                })
              })
            })
          ]
        }) : (0, i.jsxs)("div", {
          className: B().empty,
          children: [
            (0, i.jsx)("p", {
              className: B().emptyTitle,
              children: y2.length ? `${O(t2)} and ${O(n2)} match` : "No keys match your search"
            }),
            (0, i.jsx)("p", {
              className: B().emptyText,
              children: y2.length ? `Every key has the same value in both. Turn on Show matching to list all ${y2.length}.` : "Search looks at key names only."
            }),
            y2.length ? (0, i.jsx)(j.$, {
              variant: "secondary",
              onClick: () => h2(true),
              children: "Show matching keys"
            }) : (0, i.jsx)(j.$, {
              variant: "secondary",
              onClick: m2,
              children: "Clear search"
            })
          ]
        })
      ]
    });
  }
  function ea({ env: e2, row: a2 }) {
    if (!a2)
      return (0, i.jsxs)("span", {
        className: B().diffCell,
        "data-empty": true,
        children: [
          (0, i.jsx)("span", { className: B().cellEnv, children: O(e2) }),
          "Not set"
        ]
      });
    let t2 = (function(e3) {
      let a3 = 2166136261;
      for (let t3 = 0; t3 < e3.length; t3++)
        a3 ^= e3.charCodeAt(t3), a3 = Math.imul(a3, 16777619);
      return (a3 >>> 0).toString(16).padStart(8, "0").slice(0, 6);
    })(a2.value);
    return (0, i.jsxs)("span", {
      className: B().diffCell,
      children: [
        (0, i.jsx)("span", { className: B().cellEnv, children: O(e2) }),
        (0, i.jsxs)("span", {
          className: B().print,
          children: [
            (0, i.jsx)("span", { "aria-hidden": "true", children: "\u2022\u2022\u2022\u2022" }),
            (0, i.jsx)("span", {
              className: B().srOnly,
              children: "Fingerprint"
            }),
            " ",
            t2
          ]
        }),
        a2.sensitive ? (0, i.jsx)(m.A, {
          size: 14,
          strokeWidth: 1.75,
          role: "img",
          "aria-label": "Sensitive"
        }) : null
      ]
    });
  }
  let et = K;
};

__m(__module,__exports,__require);
});
A.reg(77031, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "arrow-left-right",
    size: 24,
    node: [
      ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
      ["path", { d: "M4 7h16", key: "6tx8e3" }],
      ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
      ["path", { d: "M20 17H4", key: "h6l3hr" }]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(78136, ".root{--mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;--inline:24px;--tint:color-mix(in oklab,var(--foreground) 5%,transparent);--tint-strong:color-mix(in oklab,var(--foreground) 8%,transparent);container:envvars/inline-size;width:100%;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root .monoArea,.root .monoInput{font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0}\n.root .monoArea{min-height:164px;line-height:1.7;resize:vertical}\n@container envvars (max-width: 559px){.shell{--inline:16px}\n.shell{min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:20px;background:var(--surface)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.num{font-variant-numeric:tabular-nums}\n.mono{font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0}\n.meta .mono{color:var(--foreground)}\n.header{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:16px;padding:20px var(--inline) 16px}\n.headText{min-width:0}\n.title{margin:0;font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.meta{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;margin:4px 0 0;color:var(--text-secondary);font-size:var(--text-xs)}\n.meta{flex-direction:column;align-items:flex-start;gap:2px}\n.sep{width:3px;height:3px;border-radius:50%;background:var(--border-strong)}\n@container envvars (max-width: 559px){.sep{display:none}\n.headActions{display:flex;flex-wrap:wrap;gap:8px}\n.headActions{width:100%}\n.headActions>*{flex:1 1 auto}\n.addClip,.bannerClip,.editorClip,.noteClip{overflow:hidden}\n.editorClip{position:relative;z-index:1}\n.noteClip{position:relative;z-index:1;margin:0}\n.banner{--tone:var(--accent);display:grid;grid-template-columns:20px minmax(0,1fr) auto;align-items:center;gap:4px 12px;margin:0 var(--inline) 16px;border:1px solid color-mix(in oklab,var(--tone) 24%,var(--border));border-radius:14px;padding:12px 12px 12px 16px;background:color-mix(in oklab,var(--tone) 7%,var(--surface));position:relative;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard)}\n.banner[data-state=done]{--tone:var(--success)}\n.banner[data-state=failed]{--tone:var(--danger)}\n@container envvars (max-width: 559px){.banner{grid-template-columns:20px minmax(0,1fr)}\n.bannerIcon,.banner,.box,.iconButton,.row,.scope,.swap{transition:none}\n.bannerIcon{position:relative;display:grid;height:20px;place-items:center;align-self:start;margin-top:1px;color:var(--tone);transition:color var(--duration-standard) var(--ease-standard)}\n.bannerGlyph{display:grid;place-items:center}\n.bannerText{position:relative;display:grid;min-width:0;gap:2px}\n.bannerAction{display:flex}\n.bannerAction{grid-column:1/-1}\n.followInner{display:flow-root}\n.bannerTitle{margin:0;font-weight:500}\n.bannerDetail{margin:0;color:var(--text-secondary);font-size:var(--text-xs)}\n.bannerButton{width:100%}\n.add{display:grid;gap:16px;margin:0 var(--inline) 16px;border:1px solid var(--border);border-radius:16px;padding:16px;background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}\n.addHead{display:flex;justify-content:flex-start;min-width:0}\n.addForm,.pair{display:grid;min-width:0;gap:16px}\n@container envvars (min-width: 640px){.pair{grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);align-items:start}\n.addOptions{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:16px 32px}\n.pickEnvs{display:grid;min-width:0;gap:8px;margin:0;border:0;padding:0}\n.fieldLabel{padding:0;font-size:var(--text-sm);font-weight:500}\n.pickRow{display:flex;flex-wrap:wrap;gap:8px}\n.pickRow .scope{width:auto;height:auto;min-height:36px;justify-content:flex-start;border-color:var(--border);border-radius:var(--radius-pill);padding:0 14px 0 10px;background:var(--surface)}\n.pickRow .scope[data-on=true]{border-color:var(--border-strong)}\n.pickRow .scopeLabel{position:static;width:auto;height:auto;overflow:visible;clip-path:none}\n.fieldError{color:var(--danger);font-size:var(--text-xs)}\n.addActions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}\n@container envvars (max-width: 559px){.addActions>*{flex:1 1 auto}\n.parsed{display:grid;min-width:0;gap:8px}\n.parsedSummary{margin:0;color:var(--text-secondary);font-size:var(--text-xs)}\n.parsedList{display:grid;margin:0;overflow:hidden;border:1px solid var(--border);border-radius:12px;padding:0;background:var(--surface);list-style:none}\n.parsedRow{--tone:var(--text-secondary);display:grid;grid-template-columns:24px minmax(0,1fr) 64px minmax(0,1.3fr);align-items:center;gap:8px 12px;min-height:40px;padding:8px 12px}\n.parsedRow+.parsedRow{border-top:1px solid var(--border-subtle)}\n.parsedRow[data-status=duplicate],.parsedRow[data-status=replace]{--tone:var(--warning)}\n.parsedRow[data-status=invalid]{--tone:var(--danger)}\n.parsedRow[data-status=duplicate] .parsedKey,.parsedRow[data-status=invalid] .parsedKey{color:var(--text-muted);text-decoration:line-through;text-decoration-color:var(--border-strong)}\n.parsedRow[data-status=new] .parsedStatus>svg{color:var(--text-muted)}\n@container envvars (max-width: 559px){.parsedRow{grid-template-columns:24px minmax(0,1fr)}\n.parsedKey{overflow:hidden;font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;text-overflow:ellipsis;white-space:nowrap}\n.parsedLine{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}\n.parsedValue{color:var(--text-muted);font-size:var(--text-xs);letter-spacing:.06em}\n.parsedValue{display:none}\n.parsedStatus{display:flex;min-width:0;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-xs)}\n.parsedStatus>svg{flex:none;color:var(--tone)}\n.parsedStatus{grid-column:2}\n.toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 16px;padding:0 var(--inline) 16px}\n.toolbar>:last-child{width:100%}\n.search{flex:1 1 240px;max-width:360px;min-width:0}\n.search label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n@container envvars (max-width: 559px){.search{flex-basis:100%;max-width:none}\n.viewPane{min-width:0}\n.table{min-width:0;border-top:1px solid var(--border)}\n.columns,.diffColumns{display:none}\n@container envvars (min-width: 760px){.columns,.rowMain{grid-template-columns:minmax(0,1.05fr) minmax(0,1.35fr) repeat(3,92px) 52px}\n.columns{display:grid;align-items:end;gap:0 12px;padding:12px var(--inline) 10px;border-bottom:1px solid var(--border);color:var(--text-secondary);font-size:var(--text-xs)}\n@container envvars (min-width: 760px){.diffColumns,.diffRow{grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.5fr)}\n.diffColumns{display:grid;gap:0 12px;padding:12px var(--inline) 10px;border-bottom:1px solid var(--border);color:var(--text-secondary);font-size:var(--text-xs)}\n.list{margin:0;padding:0;list-style:none}\n.item{min-width:0}\n.item+.item>*{border-top:1px solid var(--border-subtle)}\n.row{position:relative;min-width:0}\n.row:after{content:\"\";position:absolute;inset:0;background:var(--accent-subtle);opacity:0;pointer-events:none}\n.row[data-fresh]:after{animation:fresh 1.6s var(--ease-standard)}\n.row{transition:background-color var(--duration-standard) var(--ease-standard)}\n.row[data-editing]{background:color-mix(in oklab,var(--surface-muted) 45%,var(--surface))}\n@media (prefers-reduced-motion:reduce){.row[data-fresh]:after{animation:none}\n.rowMain{position:relative;z-index:1;display:grid;grid-template-areas:\"key actions\" \"value value\" \"scopes scopes\";grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px 12px;padding:12px var(--inline)}\n.rowMain{grid-template-areas:\"key value scopes scopes scopes actions\";min-height:64px;padding-block:10px}\n.keyCell{grid-area:key;display:grid;min-width:0;gap:2px}\n.keyLine{display:flex;min-width:0;align-items:center;gap:8px}\n.key{overflow:hidden;font-family:var(--mono);font-size:var(--text-xs);font-weight:500;letter-spacing:0;text-overflow:ellipsis;white-space:nowrap}\n.diffRow>.key{grid-area:key}\n.changedDot{width:6px;height:6px;flex:none;border-radius:50%;background:var(--accent)}\n.updated{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.updated[data-changed]{color:var(--accent)}\n.valueCell{grid-area:value;display:flex;min-width:0;align-items:center;gap:8px;border-radius:10px}\n.valueSlot{position:relative;display:flex;flex:1 1 auto;min-width:0;align-items:center;min-height:36px}\n.mask,.value{overflow:hidden;font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;text-overflow:ellipsis;white-space:nowrap}\n.mask{color:var(--text-muted);letter-spacing:.08em}\n.valueActions{display:flex;flex:none;align-items:center;gap:2px}\n.copySlot{display:flex}\n.sensitive{display:inline-flex;flex:none;align-items:center;gap:6px;padding-right:8px;color:var(--text-secondary);font-size:var(--text-xs)}\n.iconButton{position:relative;display:grid;width:36px;height:36px;flex:none;place-items:center;border:0;border-radius:10px;padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.iconButton:hover{background:var(--tint);color:var(--foreground)}\n.iconButton:focus-visible{background:var(--tint-strong);color:var(--foreground);outline:none}\n.iconButton[aria-pressed=true],.iconButton[data-active]{background:var(--tint-strong);color:var(--foreground)}\n@media (pointer:coarse){.iconButton{width:44px;height:44px}\n.rowActions{grid-area:actions;display:flex;justify-content:flex-end}\n.scopes{grid-area:scopes;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,7.5rem),1fr));gap:6px}\n.scopes .scope{justify-content:center;padding:0 8px}\n.scopes{display:contents}\n.scope{position:relative;display:inline-flex;min-height:36px;align-items:center;gap:8px;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 14px 0 10px;background:var(--surface);color:var(--text-secondary);font:inherit;font-size:var(--text-xs);letter-spacing:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.scope[data-on=true]{border-color:var(--border-strong);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.scope:hover{background:color-mix(in oklab,var(--foreground) 4%,var(--surface))}\n.scope:focus-visible{background:color-mix(in oklab,var(--foreground) 7%,var(--surface));outline:none}\n.scope:active{background:color-mix(in oklab,var(--foreground) 8%,var(--surface))}\n@media (pointer:coarse){.scope{min-height:44px}\n.scope[data-on=true] .box{box-shadow:inset 0 0 0 1.5px transparent}\n.scope{width:100%;height:44px;justify-content:center;border-color:transparent;border-radius:12px;padding:0;background:transparent}\n.scope[data-on=true]{border-color:transparent}\n.box{position:relative;display:grid;width:18px;height:18px;flex:none;place-items:center;border-radius:6px;box-shadow:inset 0 0 0 1.5px var(--border-strong);transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.boxFill{position:absolute;inset:0;border-radius:inherit;background:var(--control-on)}\n.boxMark{position:relative;width:18px;height:18px;color:var(--control-glyph)}\n.scopeLabel{white-space:nowrap}\n.scopeLabel{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.note{display:flex;align-items:flex-start;gap:8px;padding:0 var(--inline) 12px;color:var(--text-secondary);font-size:var(--text-xs)}\n.note>svg{flex:none;margin-top:2px;color:var(--warning)}\n.editor{display:grid;gap:16px;margin:0 var(--inline) 16px;border:1px solid var(--border);border-radius:14px;padding:16px;background:var(--surface)}\n.editorActions{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px}\n@container envvars (max-width: 559px){.editorActions{flex-direction:column-reverse;align-items:stretch}\n.editorEnd{display:flex;flex-wrap:wrap;gap:8px}\n.editorEnd>*{flex:1 1 auto}\n.envHead{display:grid;justify-items:center;gap:1px;text-align:center}\n.envCount{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.compare{min-width:0}\n.compareControls{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px 24px;padding:4px var(--inline) 16px}\n.pickers{display:grid;flex:1 1 380px;max-width:520px;min-width:0;grid-template-columns:minmax(0,1fr) 44px minmax(0,1fr);align-items:end;gap:8px}\n@container envvars (max-width: 559px){.pickers{flex-basis:100%}\n.swap{display:grid;width:44px;height:44px;place-items:center;border:1px solid var(--border);border-radius:var(--radius-control);padding:0;background:var(--surface);color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n@media (hover:hover) and (pointer:fine){.swap:hover{background:var(--tint);color:var(--foreground)}\n.swap:focus-visible{background:var(--tint-strong);color:var(--foreground);outline:none}\n.swap:active{transform:scale(.96)}\n.summary{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px}\n.counts{display:flex;flex-wrap:wrap;gap:4px 16px;margin:0;color:var(--text-secondary);font-size:var(--text-xs)}\n.counts>span{display:inline-flex;align-items:center;gap:6px}\n.counts>span:before{content:\"\";width:6px;height:6px;border-radius:50%;background:var(--border-strong)}\n.counts>span[data-tone=warning]:before{background:var(--warning)}\n.counts>span[data-tone=info]:before{background:var(--accent)}\n.diffRow{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-areas:\"key key\" \"a b\" \"result result\";align-items:center;gap:8px 12px;padding:12px var(--inline)}\n.diffRow>:nth-child(2){grid-area:a}\n.diffRow>:nth-child(3){grid-area:b}\n.diffRow[data-status=different] .diffCell:not([data-empty]) .print{color:var(--accent)}\n.diffRow{grid-template-areas:\"key a b result\";min-height:64px;padding-block:10px}\n.diffResult{grid-area:result;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;min-width:0}\n.diffCell{display:flex;min-width:0;flex-wrap:wrap;align-items:center;gap:2px 8px;color:var(--text-secondary);font-size:var(--text-xs)}\n.diffCell>svg,.diffCell[data-empty]{color:var(--text-muted)}\n.cellEnv{flex-basis:100%;color:var(--text-muted)}\n.cellEnv{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.print{font-family:var(--mono);letter-spacing:0;font-variant-numeric:tabular-nums;color:var(--foreground)}\n.print>span[aria-hidden]{color:var(--text-muted);letter-spacing:.08em}\n.diffStatus{--tone:var(--text-muted);display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-xs)}\n.diffStatus>svg{flex:none;color:var(--tone)}\n.diffStatus[data-status=missing-base],.diffStatus[data-status=missing-target]{--tone:var(--warning);color:var(--foreground)}\n.diffStatus[data-status=different]{--tone:var(--accent);color:var(--foreground)}\n@container envvars (max-width: 559px){.copyTo{width:100%}\n.empty{display:grid;justify-items:center;gap:4px;padding:48px var(--inline) 56px;border-top:1px solid var(--border);text-align:center}\n.emptyTitle{margin:0;font-weight:500}\n.emptyText{max-width:360px;margin:0 0 12px;color:var(--text-secondary)}", {"root":"root","monoArea":"monoArea","monoInput":"monoInput","shell":"shell","srOnly":"srOnly","num":"num","mono":"mono","meta":"meta","header":"header","headText":"headText","title":"title","sep":"sep","headActions":"headActions","addClip":"addClip","bannerClip":"bannerClip","editorClip":"editorClip","noteClip":"noteClip","banner":"banner","bannerIcon":"bannerIcon","box":"box","iconButton":"iconButton","row":"row","scope":"scope","swap":"swap","bannerGlyph":"bannerGlyph","bannerText":"bannerText","bannerAction":"bannerAction","followInner":"followInner","bannerTitle":"bannerTitle","bannerDetail":"bannerDetail","bannerButton":"bannerButton","add":"add","addHead":"addHead","addForm":"addForm","pair":"pair","addOptions":"addOptions","pickEnvs":"pickEnvs","fieldLabel":"fieldLabel","pickRow":"pickRow","scopeLabel":"scopeLabel","fieldError":"fieldError","addActions":"addActions","parsed":"parsed","parsedSummary":"parsedSummary","parsedList":"parsedList","parsedRow":"parsedRow","parsedKey":"parsedKey","parsedStatus":"parsedStatus","parsedLine":"parsedLine","parsedValue":"parsedValue","toolbar":"toolbar","search":"search","viewPane":"viewPane","table":"table","columns":"columns","diffColumns":"diffColumns","rowMain":"rowMain","diffRow":"diffRow","list":"list","item":"item","keyCell":"keyCell","keyLine":"keyLine","key":"key","changedDot":"changedDot","updated":"updated","valueCell":"valueCell","valueSlot":"valueSlot","mask":"mask","value":"value","valueActions":"valueActions","copySlot":"copySlot","sensitive":"sensitive","rowActions":"rowActions","scopes":"scopes","boxFill":"boxFill","boxMark":"boxMark","note":"note","editor":"editor","editorActions":"editorActions","editorEnd":"editorEnd","envHead":"envHead","envCount":"envCount","compare":"compare","compareControls":"compareControls","pickers":"pickers","summary":"summary","counts":"counts","diffCell":"diffCell","print":"print","diffResult":"diffResult","cellEnv":"cellEnv","diffStatus":"diffStatus","copyTo":"copyTo","empty":"empty","emptyTitle":"emptyTitle","emptyText":"emptyText"});
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(82749, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "refresh-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
          key: "v9h5vc"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      [
        "path",
        {
          d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
          key: "3uifl3"
        }
      ],
      ["path", { d: "M8 16H3v5", key: "1cv678" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(87796, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { T: () => g });
  var i = a(95155), n = a(12115), s = a(18310), r = a(80642), o = a(25354), l = a(7770), c = a(68272), d = a.n(c);
  let u = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function h({ word: e2 }) {
    let t2 = (0, s.I)(), [a2, c2] = (0, n.useState)({ word: e2, direction: 1 });
    a2.word !== e2 && c2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(a2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), p2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, i.jsx)(r.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, i.jsx)(
          o.PY1.span,
          {
            className: d().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: p2,
            children: (0, i.jsx)(r.N, {
              initial: false,
              mode: "popLayout",
              custom: a2.direction,
              children: (0, i.jsx)(
                o.PY1.span,
                {
                  custom: a2.direction,
                  variants: u,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: p2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, s.I)(), a2 = e2.split(" ");
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: d().srOnly, children: e2 }),
        (0, i.jsx)("span", {
          className: d().words,
          "aria-hidden": "true",
          children: (0, i.jsx)(r.N, {
            initial: false,
            mode: "popLayout",
            children: a2.map(
              (e3, n2) => (0, i.jsxs)(
                o.PY1.span,
                {
                  className: d().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.fast,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, i.jsx)(h, { word: e3 }) : e3,
                    n2 < a2.length - 1 ? " " : null
                  ]
                },
                `${n2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function p({ id: e2, text: t2, className: a2, alert: n2 }) {
    return (0, i.jsx)(r.N, {
      initial: false,
      children: t2 ? (0, i.jsx)(f, { id: e2, text: t2, className: a2, alert: n2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: a2, alert: r2 }) {
    let c2 = (0, s.I)(), u2 = (0, n.useRef)(null), [h2, p2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let e3 = u2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && p2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.jsx)(o.PY1.span, {
      className: d().messageSlot,
      initial: !c2 && { height: 0, opacity: 0 },
      animate: { height: h2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: c2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: c2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, i.jsx)(o.PY1.span, {
        ref: u2,
        id: e2,
        className: a2,
        role: r2 ? "alert" : void 0,
        initial: !c2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: c2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, i.jsx)(m, { text: t2 })
      })
    });
  }
  let g = (0, n.forwardRef)(function({ label: e2, description: t2, error: a2, id: s2, className: r2, ...o2 }, l2) {
    let c2 = (0, n.useId)(), u2 = s2 ?? c2, h2 = t2 ? `${u2}-description` : void 0, m2 = a2 ? `${u2}-error` : void 0;
    return (0, i.jsxs)("div", {
      className: d().field,
      children: [
        (0, i.jsx)("label", { htmlFor: u2, children: e2 }),
        (0, i.jsx)("textarea", {
          ...o2,
          id: u2,
          ref: l2,
          className: [d().control, r2].filter(Boolean).join(" "),
          "aria-invalid": !!a2 || o2["aria-invalid"],
          "aria-describedby": [o2["aria-describedby"], h2, m2].filter(Boolean).join(" ") || void 0
        }),
        (0, i.jsx)(p, { id: h2, text: t2, className: d().hint }),
        (0, i.jsx)(p, { id: m2, text: a2, className: d().error, alert: true })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(89034, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "eye-off",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
          key: "ct8e1f"
        }
      ],
      ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
      [
        "path",
        {
          d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
          key: "13bj9a"
        }
      ],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(94088, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(96220, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { l: () => f });
  var s = t(95155), r = t(12115), i = t(73051), n = t(18310), l = t(80642), o = t(25354), d = t(12363), p = t(94088), c = t(64577), m = t(7770), u = t(82016), h = t.n(u);
  let _ = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${m.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: m.T.duration.standard,
        ease: [...m.T.ease.enter]
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${m.T.blur.subtle}px)`,
      transition: {
        duration: m.T.duration.fast,
        ease: [...m.T.ease.standard]
      }
    })
  }, x = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: m.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: m.T.duration.instant } }
  }, f = (0, r.forwardRef)(function({
    label: e2,
    description: a2,
    placeholder: t2 = "Select an option",
    options: m2,
    id: u2,
    className: f2,
    disabled: y,
    onValueChange: j,
    ...b
  }, g) {
    let v = (0, r.useId)(), N = u2 ?? v, w = a2 ? `${N}-description` : void 0, k = (0, n.I)(), [S, T] = (0, r.useState)(b.defaultValue ?? ""), R = b.value ?? S, A = m2.findIndex((e3) => e3.value === R), z = R ? m2[A]?.label ?? "" : t2, [P, I] = (0, r.useState)(A), [M, C] = (0, r.useState)(1);
    return P !== A && (I(A), C(A > P ? 1 : -1)), (0, s.jsxs)("div", {
      className: h().field,
      children: [
        (0, s.jsx)("label", { htmlFor: N, children: e2 }),
        (0, s.jsxs)(i.bL, {
          ...b,
          disabled: y,
          onValueChange: (e3) => {
            T(e3), j?.(e3);
          },
          children: [
            (0, s.jsxs)(i.l9, {
              ref: g,
              id: N,
              "aria-describedby": w,
              className: [h().trigger, f2].filter(Boolean).join(" "),
              children: [
                (0, s.jsx)("span", {
                  className: h().srOnly,
                  children: (0, s.jsx)(i.WT, { placeholder: t2 })
                }),
                (0, s.jsx)("span", {
                  className: h().valueText,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(l.N, {
                    initial: false,
                    custom: M,
                    children: (0, s.jsx)(
                      o.PY1.span,
                      {
                        "data-placeholder": R ? void 0 : "",
                        custom: M,
                        variants: k ? x : _,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: z
                      },
                      R ? `value-${R}` : "placeholder"
                    )
                  })
                }),
                (0, s.jsx)(i.In, {
                  className: h().chevron,
                  children: (0, s.jsx)(d.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsx)(i.ZL, {
              children: (0, s.jsxs)(i.UC, {
                className: h().content,
                position: "popper",
                sideOffset: 4,
                collisionPadding: 12,
                children: [
                  (0, s.jsx)(i.PP, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, s.jsx)(i.LM, {
                    className: h().viewport,
                    children: m2.map(
                      (e3) => (0, s.jsxs)(
                        i.q7,
                        {
                          value: e3.value,
                          disabled: e3.disabled,
                          className: h().item,
                          children: [
                            (0, s.jsx)(i.p4, { children: e3.label }),
                            (0, s.jsx)(i.VF, {
                              className: h().indicator,
                              children: (0, s.jsx)(c.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        },
                        e3.value
                      )
                    )
                  }),
                  (0, s.jsx)(i.wn, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("span", { id: w, className: h().hint, children: a2 })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.cssFor("env-variables", [14290,42842,68272,78136,79698]);
A.item("env-variables", {entry:76177, export:"EnvVariables", kind:"block", tier:"pro", unresolved:[]});
})();