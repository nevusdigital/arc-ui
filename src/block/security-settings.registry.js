/* security-settings (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(1668, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"password-field_field__YmVr4",shell:"password-field_shell__Jn9yt",input:"password-field_input__oFxHZ","resolve-shown":"password-field_resolve-shown__rImNi","resolve-hidden":"password-field_resolve-hidden__Gl28Q",messageSlot:"password-field_messageSlot__xMwqs",hint:"password-field_hint__DMc0w",words:"password-field_words__CjuNB",word:"password-field_word__00TzP",srOnly:"password-field_srOnly__bxC4N"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(7428, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "log-out",
    size: 24,
    node: [
      ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
      ["path", { d: "M21 12H9", key: "dn1m92" }],
      ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(9937, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { x: () => o });
  var n = i(95155), a = i(12115), r = i(30123), l = i(24866), s = i(28819);
  function o({ children: e2, ...t2 }) {
    let i2 = (0, a.useContext)(l.Q);
    (t2 = { ...i2, ...t2 }).transition = (0, r.K)(t2.transition, i2.transition), t2.isStatic = (0, s.M)(() => t2.isStatic);
    let u = (0, a.useMemo)(
      () => t2,
      [
        JSON.stringify(t2.transition),
        t2.transformPagePoint,
        t2.reducedMotion,
        t2.skipAnimations,
        t2.isValidProp
      ]
    );
    return (0, n.jsx)(l.Q.Provider, { value: u, children: e2 });
  }
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
A.regCss(22346, ".badge{--badge-tone:var(--text-secondary);--badge-tint:10%;--badge-ink:84%;--badge-background:color-mix(in oklab,var(--badge-tone) var(--badge-tint),var(--surface));--badge-foreground:color-mix(in oklab,var(--badge-tone) var(--badge-ink),var(--foreground));--badge-color:color-mix(in oklab,var(--badge-tone) 88%,var(--foreground));--badge-border:transparent;--badge-radius:6px;--badge-height:24px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px;box-sizing:border-box;display:inline-flex;min-height:var(--badge-height);flex:none;align-items:center;justify-content:center;vertical-align:middle;border:1px solid var(--badge-border);border-radius:var(--badge-radius);padding:0 var(--badge-pad);color:var(--badge-foreground);background:var(--badge-background);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.005em;line-height:1;white-space:nowrap;overflow:clip;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n:root[data-theme=dark] .badge{--badge-tint:12%;--badge-ink:94%}\n@media (prefers-reduced-motion:reduce){.badge{transition-duration:var(--duration-instant)}\n.outline{--badge-border:color-mix(in oklab,var(--badge-tone) 14%,var(--border))}\n:root[data-theme=dark] .outline{--badge-border:color-mix(in oklab,var(--badge-tone) 22%,var(--border))}\n.sm{--badge-height:20px;--badge-radius:5px;--badge-pad:8px;--badge-gap:4px;--badge-icon:12px;--badge-dot:5px;font-size:11px}\n.md{--badge-height:24px;--badge-radius:6px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px}\n.lg{--badge-height:28px;--badge-radius:7px;--badge-pad:12px;--badge-gap:6px;--badge-icon:16px;--badge-dot:7px;font-size:var(--text-sm)}\n.pill{--badge-radius:var(--radius-pill)}\n.withIcon{padding-inline-start:calc(var(--badge-pad) - 2px)}\n.withDot{padding-inline-start:calc(var(--badge-pad) - 1px)}\n.body,.content{display:flex;align-items:center}\n.content{position:relative;width:max-content;gap:var(--badge-gap)}\n.glyph,.label{position:relative;display:inline-flex;align-items:center}\n.glyph>svg{display:block;width:var(--badge-icon);height:var(--badge-icon)}\n.text{display:block;text-box:trim-both cap alphabetic}\n.icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center;color:var(--badge-color);line-height:0}\n.dot{display:block;width:var(--badge-dot);height:var(--badge-dot);flex:none;border-radius:50%;background:var(--badge-color)}\n.neutral{--badge-tone:var(--text-secondary)}\n.info{--badge-tone:var(--info,var(--tone-sky))}\n.success{--badge-tone:var(--success)}\n.warning{--badge-tone:var(--warning)}\n.amber,.warning{--badge-ink:76%}\n.danger{--badge-tone:var(--danger)}\n.teal{--badge-tone:var(--tone-teal)}\n.sky{--badge-tone:var(--tone-sky)}\n.orchid{--badge-tone:var(--tone-orchid)}\n.violet{--badge-tone:var(--tone-violet)}\n.rose{--badge-tone:var(--tone-rose)}\n.amber{--badge-tone:var(--tone-amber)}", {});
A.reg(28750, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "shield-off",
    size: 24,
    node: [
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      [
        "path",
        {
          d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
          key: "1jlk70"
        }
      ],
      [
        "path",
        {
          d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
          key: "18rp1v"
        }
      ]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(30464, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { l: () => l });
  var r = n(12115), o = n(28819), i = n(24866), s = n(18310), a = n(92171);
  function l() {
    var e2;
    let t2 = (0, o.M)(() => ({ current: null, animations: [] })), n2 = (function() {
      let e3 = (0, s.I)(), { reducedMotion: t3 } = (0, r.useContext)(i.Q);
      return "never" !== t3 && ("always" === t3 || e3);
    })() ?? void 0, { skipAnimations: l2 } = (0, r.useContext)(i.Q), u = (0, r.useMemo)(
      () => (0, a.W)({ scope: t2, reduceMotion: n2, skipAnimations: l2 }),
      [t2, n2, l2]
    );
    return e2 = () => {
      t2.animations.forEach((e3) => e3.stop()), t2.animations.length = 0;
    }, (0, r.useEffect)(() => () => e2(), []), [t2, u];
  }
}

__m(__module,__exports,__require);
});
A.reg(33533, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "tablet",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "16",
          height: "20",
          x: "4",
          y: "2",
          rx: "2",
          ry: "2",
          key: "76otgf"
        }
      ],
      ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(42842, ".field{display:inline-flex;align-items:flex-start;gap:0;min-width:0}\n.box{position:relative;flex:0 0 auto;display:grid;place-items:center;width:var(--control-height-md);height:var(--control-height-md);border:0;border-radius:var(--radius-control);padding:0;background:transparent;color:var(--control-glyph);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.box[data-state=checked] .visual,.box[data-state=indeterminate] .visual{border-color:var(--control-on)}\n@media (hover:hover) and (pointer:fine){.box[data-state=unchecked]:hover:not(:disabled) .visual{border-color:var(--text-muted)}\n.box:active:not(:disabled) .visual{transform:scale(.95);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.box:disabled{opacity:.5;cursor:not-allowed}\n@media (prefers-reduced-motion:reduce){.box:active:not(:disabled) .visual,.visual{transition:none;transform:none}\n.visual{position:relative;display:block;width:18px;height:18px;border:1px solid var(--border-strong);border-radius:5px;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.fill{position:absolute;inset:-1px;border-radius:inherit;background:var(--control-on)}\n.mark{position:absolute;inset:-1px;width:18px;height:18px;overflow:visible}\n.copy{display:grid;gap:2px;min-width:0;margin-left:1px;padding-top:calc((var(--control-height-md) - var(--text-sm) * 1.4) / 2)}\n.copy label{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer}\n.copy span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}", {});
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
A.reg(50598, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { Xh: () => $, co: () => y });
  var s = i(95155), a = i(12115), n = i(80642), r = i(25354), o = i(18310), l = i(28245), d = i(92171), c = i(7770), u = i(84830), p = i.n(u);
  let h = {
    levels: {
      tooShort: "Too short",
      weak: "Weak",
      fair: "Fair",
      good: "Good",
      strong: "Strong"
    },
    showPassword: "Show password",
    meterLabel: "Password strength",
    noPassword: "No password yet",
    rulesLabel: "Password requirements",
    ruleMet: ", met",
    ruleNotMet: ", not met",
    remainingPrefix: "",
    remainingSuffix: "more",
    summary: ({ label: e2, met: t2, total: i2 }) => `Strength: ${e2}. ${t2} of ${i2} requirements met.`
  }, m = (e2) => Array.from(e2).length, x = {
    length: (e2) => `At least ${e2} characters`,
    case: "Upper and lowercase letters",
    number: "At least one number",
    symbol: "At least one symbol"
  }, f = (function({
    minLength: e2 = 12,
    labels: t2,
    countCharacters: i2 = m
  } = {}) {
    let s2 = { ...x, ...t2 };
    return [
      {
        id: "length",
        label: s2.length(e2),
        test: (t3) => i2(t3) >= e2,
        remaining: (t3) => Math.max(0, e2 - i2(t3))
      },
      {
        id: "case",
        label: s2.case,
        test: (e3) => /\p{Ll}/u.test(e3) && /\p{Lu}/u.test(e3)
      },
      { id: "number", label: s2.number, test: (e3) => /\p{N}/u.test(e3) },
      {
        id: "symbol",
        label: s2.symbol,
        test: (e3) => /[^\p{L}\p{N}\s]/u.test(e3)
      }
    ];
  })();
  function y(e2, t2 = f, { shortLength: i2 = 8, levels: s2, countCharacters: a2 = m } = {}) {
    if (!e2) return { level: 0, label: "", met: [] };
    let n2 = { ...h.levels, ...s2 }, r2 = t2.filter((t3) => t3.test(e2)).map((e3) => e3.id);
    if (a2(e2) < i2) return { level: 1, label: n2.tooShort, met: r2, short: true };
    let o2 = Math.min(
      4,
      Math.max(1, Math.round(r2.length / Math.max(t2.length, 1) * 4))
    );
    return {
      level: o2,
      label: [n2.weak, n2.fair, n2.good, n2.strong][o2 - 1] ?? n2.weak,
      met: r2
    };
  }
  let _ = [...c.T.ease.enter], g = [...c.T.ease.standard], j = () => () => {
  }, v = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${c.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: c.T.duration.standard, ease: _ }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${c.T.blur.subtle}px)`,
      transition: { duration: c.T.duration.fast, ease: g }
    })
  }, b = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: c.T.duration.fast } },
    exit: { opacity: 0, transition: { duration: c.T.duration.instant } }
  }, w = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.45 * e2}em`,
      filter: `blur(${c.T.blur.subtle}px)`
    }),
    center: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: {
        y: c.T.spring.snappy,
        opacity: { duration: c.T.duration.fast },
        filter: { duration: c.T.duration.fast }
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.45 * e2}em`,
      filter: `blur(${c.T.blur.subtle}px)`,
      transition: { duration: c.T.duration.fast, ease: g }
    })
  };
  function N({ value: e2, reduced: t2 }) {
    let [i2, o2] = (0, a.useState)({ value: e2, direction: 1 });
    i2.value !== e2 && o2({ value: e2, direction: e2 > i2.value ? 1 : -1 });
    let l2 = String(e2).split("");
    return (0, s.jsx)("span", {
      className: p().number,
      children: (0, s.jsx)(n.N, {
        initial: false,
        custom: i2.direction,
        children: l2.map(
          (e3, a2) => (0, s.jsx)(
            r.PY1.span,
            {
              className: p().place,
              initial: { width: 0, opacity: 0 },
              animate: { width: "auto", opacity: 1 },
              exit: { width: 0, opacity: 0 },
              transition: t2 ? { duration: 0 } : {
                width: c.T.spring.morph,
                opacity: { duration: c.T.duration.fast }
              },
              children: (0, s.jsx)(n.N, {
                mode: "popLayout",
                initial: false,
                custom: i2.direction,
                children: (0, s.jsx)(
                  r.PY1.span,
                  {
                    className: p().digit,
                    custom: i2.direction,
                    variants: t2 ? b : w,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    children: e3
                  },
                  e3
                )
              })
            },
            l2.length - 1 - a2
          )
        )
      })
    });
  }
  function k({ slashed: e2, reduced: t2 }) {
    let i2 = `eye-${(0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, n2 = { pathLength: +!!e2, opacity: +!!e2 }, o2 = t2 ? { duration: 0 } : {
      pathLength: { duration: c.T.duration.standard, ease: g },
      opacity: { duration: c.T.duration.instant }
    };
    return (0, s.jsxs)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, s.jsxs)("mask", {
          id: i2,
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: [
            (0, s.jsx)("rect", {
              width: "24",
              height: "24",
              fill: "white",
              stroke: "none"
            }),
            (0, s.jsx)(r.PY1.path, {
              d: "M3 3l18 18",
              stroke: "black",
              strokeWidth: 5,
              initial: false,
              animate: n2,
              transition: o2
            })
          ]
        }),
        (0, s.jsxs)("g", {
          mask: `url(#${i2})`,
          children: [
            (0, s.jsx)("path", {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            }),
            (0, s.jsx)("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }),
        (0, s.jsx)(r.PY1.path, {
          d: "M3 3l18 18",
          initial: false,
          animate: n2,
          transition: o2
        })
      ]
    });
  }
  function T({ met: e2, delay: t2, reduced: i2 }) {
    return (0, s.jsxs)("span", {
      className: p().mark,
      "aria-hidden": "true",
      children: [
        (0, s.jsx)(r.PY1.span, {
          className: p().markFill,
          initial: false,
          animate: { scale: e2 ? 1 : 0.5, opacity: +!!e2 },
          transition: i2 ? { duration: 0 } : {
            scale: { ...c.T.spring.snappy, delay: t2 },
            opacity: {
              duration: e2 ? c.T.duration.fast : c.T.duration.instant,
              delay: t2
            }
          }
        }),
        (0, s.jsx)("svg", {
          className: p().tick,
          viewBox: "0 0 16 16",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.75,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: (0, s.jsx)(r.PY1.path, {
            d: "M4.75 8.25 7 10.5l4.25-4.75",
            initial: false,
            animate: { pathLength: +!!e2, opacity: +!!e2 },
            transition: i2 ? { duration: 0 } : e2 ? {
              pathLength: {
                duration: c.T.duration.standard,
                ease: _,
                delay: t2 + 0.06
              },
              opacity: { duration: 0.05, delay: t2 + 0.06 }
            } : {
              pathLength: { duration: c.T.duration.fast, ease: g },
              opacity: { duration: c.T.duration.fast, delay: 0.06 }
            }
          })
        })
      ]
    });
  }
  function S({ id: e2, text: t2, reduced: i2 }) {
    let o2 = (0, a.useRef)(null), [l2, d2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let e3 = o2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && d2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, s.jsx)(r.PY1.span, {
      className: p().errorSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: l2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: i2 ? { duration: 0 } : {
          height: c.T.spring.smooth,
          opacity: { duration: c.T.duration.instant }
        }
      },
      transition: i2 ? { duration: 0 } : {
        height: c.T.spring.smooth,
        opacity: { duration: c.T.duration.fast }
      },
      children: (0, s.jsx)("span", {
        ref: o2,
        id: e2,
        className: p().error,
        children: (0, s.jsx)(n.N, {
          mode: "popLayout",
          initial: false,
          custom: 1,
          children: (0, s.jsx)(
            r.PY1.span,
            {
              className: p().errorText,
              custom: 1,
              variants: i2 ? b : v,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: t2
            },
            t2
          )
        })
      })
    });
  }
  let $ = (0, a.forwardRef)(function({
    label: e2,
    value: t2,
    defaultValue: i2 = "",
    onValueChange: u2,
    onChange: m2,
    rules: x2 = f,
    error: _2,
    revealed: g2,
    onRevealedChange: w2,
    messages: $2,
    shortLength: L,
    countCharacters: C,
    id: P,
    className: M,
    ...I
  }, R) {
    let Y = { ...h, ...$2, levels: { ...h.levels, ...$2?.levels } }, z = { shortLength: L, levels: Y.levels, countCharacters: C }, B = (0, a.useId)(), F = P ?? B, O = `${F}-rules`, A = `${F}-error`, E = (0, a.useSyncExternalStore)(
      j,
      () => true,
      () => false
    ), W = (0, o.I)(), D = E && !!W, [H, q] = (0, a.useState)(i2), U = t2 ?? H, [X, Q] = (0, a.useState)(false), V = g2 ?? X, Z = y(U, x2, z), K = new Set(Z.met), G = Z.short ? 0.5 : Z.level, J = Z.met.join(" "), [ee, et] = (0, a.useState)({
      rank: G,
      level: Z.level,
      previousLevel: Z.level,
      direction: 1,
      metKey: J,
      previousMet: J
    });
    (ee.rank !== G || ee.metKey !== J) && et({
      rank: G,
      level: Z.level,
      previousLevel: ee.rank !== G ? ee.level : ee.previousLevel,
      direction: ee.rank === G ? ee.direction : G > ee.rank ? 1 : -1,
      metKey: J,
      previousMet: ee.metKey !== J ? ee.metKey : ee.previousMet
    });
    let ei = new Set(ee.previousMet.split(" ").filter(Boolean)), es = x2.filter((e3) => K.has(e3.id) !== ei.has(e3.id)).map((e3) => e3.id), [ea, en] = (0, a.useState)({ revealed: V, changed: false });
    ea.revealed !== V && en({ revealed: V, changed: true });
    let er = (0, l.d)(0), eo = (0, a.useRef)(null), el = (0, a.useRef)(_2);
    (0, a.useEffect)(() => {
      let e3 = el.current;
      el.current = _2, _2 && _2 !== e3 && !D && (eo.current?.stop(), eo.current = (0, d.i)(er, 0, {
        type: "spring",
        velocity: -240,
        stiffness: 900,
        damping: 57,
        restDelta: 0.1
      }));
    }, [_2, D, er]);
    let ed = Z.level ? Y.summary({ label: Z.label, met: Z.met.length, total: x2.length }) : "", ec = [I["aria-describedby"], _2 ? A : void 0, O].filter(Boolean).join(" ");
    return (0, s.jsxs)("div", {
      className: p().field,
      "data-level": Z.level,
      children: [
        (0, s.jsx)("label", { className: p().label, htmlFor: F, children: e2 }),
        (0, s.jsxs)(r.PY1.div, {
          className: p().shell,
          style: { x: er },
          children: [
            (0, s.jsx)("input", {
              autoComplete: "new-password",
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: false,
              ...I,
              ref: R,
              id: F,
              type: V ? "text" : "password",
              value: U,
              onChange: (e3) => {
                let i3 = e3.target.value;
                void 0 === t2 && q(i3), m2?.(e3), u2?.(i3, y(i3, x2, z));
              },
              "aria-invalid": !!_2 || I["aria-invalid"],
              "aria-describedby": ec,
              "data-reveal": ea.changed ? V ? "shown" : "hidden" : void 0,
              className: [p().input, M].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("button", {
              type: "button",
              className: p().reveal,
              onClick: function() {
                void 0 === g2 && Q(!V), w2?.(!V);
              },
              "aria-label": Y.showPassword,
              "aria-pressed": V,
              "aria-controls": F,
              children: (0, s.jsx)(k, { slashed: V, reduced: D })
            })
          ]
        }),
        (0, s.jsx)(n.N, {
          initial: false,
          children: _2 ? (0, s.jsx)(S, { id: A, text: _2, reduced: D }, "error") : null
        }),
        (0, s.jsxs)("div", {
          className: p().meterRow,
          children: [
            (0, s.jsx)("div", {
              className: p().meter,
              role: "meter",
              "aria-label": Y.meterLabel,
              "aria-valuemin": 0,
              "aria-valuemax": 4,
              "aria-valuenow": Z.level,
              "aria-valuetext": Z.level ? Z.label : Y.noPassword,
              children: [0, 1, 2, 3].map((e3) => {
                let t3 = e3 < Z.level, i3 = t3 ? e3 - ee.previousLevel : ee.previousLevel - 1 - e3;
                return (0, s.jsx)(
                  "span",
                  {
                    className: p().segment,
                    children: (0, s.jsx)(r.PY1.span, {
                      className: p().fill,
                      initial: false,
                      animate: { x: t3 ? "0%" : "-101%" },
                      transition: D ? { duration: 0 } : {
                        ...c.T.spring.smooth,
                        delay: Math.max(0, i3) * (t3 ? 0.05 : 0.03)
                      }
                    })
                  },
                  e3
                );
              })
            }),
            (0, s.jsx)("span", {
              className: p().word,
              "aria-hidden": "true",
              children: (0, s.jsx)(n.N, {
                mode: "popLayout",
                initial: false,
                custom: ee.direction,
                children: Z.level ? (0, s.jsx)(
                  r.PY1.span,
                  {
                    className: p().wordText,
                    custom: ee.direction,
                    variants: D ? b : v,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    children: Z.label
                  },
                  Z.label
                ) : null
              })
            })
          ]
        }),
        (0, s.jsx)("ul", {
          id: O,
          className: p().rules,
          "aria-label": Y.rulesLabel,
          children: x2.map((e3) => {
            let t3 = K.has(e3.id), i3 = U && !t3 ? e3.remaining?.(U) ?? 0 : 0, a2 = es.indexOf(e3.id);
            return (0, s.jsxs)(
              "li",
              {
                className: p().rule,
                "data-met": t3 || void 0,
                children: [
                  (0, s.jsx)(T, {
                    met: t3,
                    delay: a2 > 0 ? 0.05 * a2 : 0,
                    reduced: D
                  }),
                  (0, s.jsxs)("span", {
                    className: p().ruleLabel,
                    children: [
                      e3.label,
                      (0, s.jsx)("span", {
                        className: p().srOnly,
                        children: t3 ? Y.ruleMet : Y.ruleNotMet
                      })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: p().remaining,
                    "aria-hidden": "true",
                    children: (0, s.jsx)(n.N, {
                      mode: "popLayout",
                      initial: false,
                      custom: 1,
                      children: i3 > 0 ? (0, s.jsxs)(
                        r.PY1.span,
                        {
                          className: p().remainingText,
                          custom: 1,
                          variants: D ? b : v,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          children: [
                            Y.remainingPrefix ? `${Y.remainingPrefix} ` : null,
                            (0, s.jsx)(N, { value: i3, reduced: D }),
                            Y.remainingSuffix ? ` ${Y.remainingSuffix}` : null
                          ]
                        },
                        "remaining"
                      ) : null
                    })
                  })
                ]
              },
              e3.id
            );
          })
        }),
        (0, s.jsx)("span", {
          className: p().srOnly,
          role: "status",
          children: ed
        })
      ]
    });
  });
  $.displayName = "PasswordStrength";
}

__m(__module,__exports,__require);
});
A.regCss(69308, ".block{--control-height-md:var(--control-height-sm);container:security/inline-size;box-sizing:border-box;width:min(100%,880px);min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.block h2,.block h3,.block h4,.block ol,.block p,.block ul{margin:0}\n.block ol,.block ul{padding:0;list-style:none}\n.block .hold{padding-inline:var(--space-3)}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.header{padding:16px 20px}\n.header h2{font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.header p{margin-top:2px;color:var(--text-secondary);overflow-wrap:anywhere}\n@container security (max-width: 560px){.header,.section{padding:14px 16px}\n.section{border-top:1px solid var(--border);padding:16px 20px}\n.sectionHead{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:var(--space-3) var(--space-6)}\n.sectionText{display:grid;flex:1 1 280px;min-width:0;gap:var(--space-1)}\n.sectionText h3{display:inline-flex;align-items:baseline;gap:var(--space-2);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.sectionText p{color:var(--text-secondary);font-size:var(--text-xs)}\n.aside{display:flex;flex:none;align-items:center;gap:var(--space-3);min-height:var(--control-height-sm)}\n.actionSlot{display:inline-flex}\n.count{color:var(--text-muted);font-weight:400}\n.swap{vertical-align:top}\n.swapTrack,.swap{position:relative;display:inline-block;max-width:100%}\n.swapText{display:inline-block;max-width:100%}\n.roll{display:inline-flex}\n.num,.roll{font-variant-numeric:tabular-nums}\n.collapse{overflow:hidden;margin-inline:calc(var(--space-2) * -1);padding-inline:var(--space-2)}\n.lead{color:var(--foreground);font-size:var(--text-sm);font-weight:500}\n.muted{color:var(--text-secondary)}\n.copyBlock{display:grid;gap:var(--space-1);min-width:0}\n.codesHead .copyBlock{flex:1 1 280px}\n.tfaBody{display:grid;padding-top:var(--space-4)}\n.rail{display:flex;flex-wrap:wrap;gap:var(--space-1);padding-bottom:var(--space-4)}\n.railItem{position:relative;display:inline-flex;height:28px;align-items:center;gap:var(--space-2);border-radius:var(--radius-pill);padding:0 var(--space-3) 0 6px;color:var(--text-muted);font-size:var(--text-sm);transition:color var(--duration-fast) var(--ease-standard)}\n.railItem[data-state=current]{color:var(--foreground)}\n.railItem[data-state=done]{color:var(--text-secondary)}\n.railItem[data-state=current] .railMark{border-color:var(--accent);color:var(--foreground)}\n.railItem[data-state=done] .railMark{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.railItem,.railMark{transition-duration:0s}\n.railHighlight{position:absolute;inset:0;z-index:0;border-radius:inherit;background:var(--surface-muted)}\n.railLabel,.railMark{position:relative;z-index:1}\n.railMark{display:grid;width:20px;height:20px;flex:none;place-items:center;box-sizing:border-box;border:1px solid var(--border-strong);border-radius:50%;font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:1;transition:background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n.railMark>*{grid-area:1/1}\n.stage{position:relative}\n.stagePane{min-width:0}\n.scan{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:start;gap:var(--space-5)}\n.scan{grid-template-columns:minmax(0,1fr);gap:var(--space-4)}\n.scanCopy{display:grid;align-content:start;gap:var(--space-4);min-width:0}\n.qr{display:grid;box-sizing:content-box;width:150px;grid-template-columns:repeat(25,6px);grid-template-rows:repeat(25,6px);padding:12px;border:1px solid var(--border);border-radius:12px;background:oklch(100% 0 0)}\n.qr{justify-self:start}\n.qrCell{border-radius:1px;background:oklch(20% 0 0);animation:qrIn var(--duration-standard) var(--ease-enter) both}\n@media (prefers-reduced-motion:reduce){.finder,.qrCell{animation:none}\n.finder{display:grid;box-sizing:border-box;place-items:center;border:6px solid oklch(20% 0 0);border-radius:5px;animation:finderIn var(--duration-standard) var(--ease-enter) both}\n.finderDot{width:18px;height:18px;border-radius:3px;background:oklch(20% 0 0)}\n.keyLabel{color:var(--text-muted);font-size:var(--text-xs)}\n.keyRow{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2)}\n.key{box-sizing:border-box;min-height:var(--control-height-sm);display:inline-flex;align-items:center;border-radius:8px;padding:0 var(--space-3);background:var(--surface-muted);color:var(--foreground);font-family:ui-monospace,SF Mono,SFMono-Regular,Menlo,monospace;font-size:var(--text-sm);letter-spacing:.02em;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}\n.stepActions{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2)}\n.verify{display:grid;justify-items:start;gap:var(--space-4)}\n.codesStep{display:grid;gap:var(--space-4)}\n.codesHead{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--space-3) var(--space-6)}\n.codeActions{display:flex;flex:none;flex-wrap:wrap;gap:var(--space-2)}\n.codes{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--space-2) var(--space-4);border-radius:10px;padding:var(--space-3) var(--space-4);background:var(--surface-muted)}\n@container security (max-width: 640px){.codes{grid-template-columns:repeat(2,minmax(0,1fr))}\n.codes{padding:var(--space-3) var(--space-4)}\n.code{color:var(--foreground);font-family:ui-monospace,SF Mono,SFMono-Regular,Menlo,monospace;font-size:var(--text-sm);letter-spacing:.02em;line-height:24px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.codesFoot{justify-content:space-between}\n.codesFoot,.enabled{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-3) var(--space-4)}\n.enabledMark{display:inline-flex;flex:none;color:var(--success)}\n.drawn{display:block}\n.enabledText{display:grid;flex:1 1 240px;min-width:0;gap:2px}\n.pwForm{display:grid;max-width:480px;gap:var(--space-4);padding-top:var(--space-4);padding-bottom:2px}\n.fieldError{padding-top:var(--space-2);color:var(--danger);font-size:var(--text-xs)}\n.pwFoot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-2) var(--space-4)}\n.checkWrap{display:inline-flex;margin-inline-start:-13px}\n.sessions{margin-top:var(--space-2)}\n.session{overflow:hidden}\n.session+.session .sessionInner{border-top:1px solid var(--border-subtle)}\n.sessionInner{display:flex;min-height:52px;align-items:center;gap:var(--space-3);padding:var(--space-2) 0}\n.deviceIcon{flex:none;color:var(--text-secondary)}\n.sessionText{display:grid;flex:1;min-width:0;gap:2px}\n.sessionName{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-1) var(--space-2);font-weight:500}\n.sessionMeta{color:var(--text-muted);font-size:var(--text-xs);overflow-wrap:anywhere}\n.sessionsFoot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3) var(--space-4);padding-top:var(--space-3)}\n.sessionsFoot>p{flex:1 1 200px;min-width:0}\n.sessionsFoot{padding-bottom:2px}\n.alone{padding-top:var(--space-3);color:var(--text-muted)}\n.footer{border-top:1px solid var(--border);padding:12px 20px;color:var(--text-muted);font-size:var(--text-xs)}\n.footer{padding-inline:16px}", {"block":"block","hold":"hold","srOnly":"srOnly","header":"header","section":"section","sectionHead":"sectionHead","sectionText":"sectionText","aside":"aside","actionSlot":"actionSlot","count":"count","swap":"swap","swapTrack":"swapTrack","swapText":"swapText","roll":"roll","num":"num","collapse":"collapse","lead":"lead","muted":"muted","copyBlock":"copyBlock","codesHead":"codesHead","tfaBody":"tfaBody","rail":"rail","railItem":"railItem","railMark":"railMark","railHighlight":"railHighlight","railLabel":"railLabel","stage":"stage","stagePane":"stagePane","scan":"scan","scanCopy":"scanCopy","qr":"qr","qrCell":"qrCell","finder":"finder","finderDot":"finderDot","keyLabel":"keyLabel","keyRow":"keyRow","key":"key","stepActions":"stepActions","verify":"verify","codesStep":"codesStep","codeActions":"codeActions","codes":"codes","code":"code","codesFoot":"codesFoot","enabled":"enabled","enabledMark":"enabledMark","drawn":"drawn","enabledText":"enabledText","pwForm":"pwForm","fieldError":"fieldError","pwFoot":"pwFoot","checkWrap":"checkWrap","sessions":"sessions","session":"session","sessionInner":"sessionInner","deviceIcon":"deviceIcon","sessionText":"sessionText","sessionName":"sessionName","sessionMeta":"sessionMeta","sessionsFoot":"sessionsFoot","alone":"alone","footer":"footer"});
A.reg(70299, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "monitor",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
      ],
      ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(70614, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { j: () => C });
  var a = i(95155), r = i(12115), n = i(25354), s = i(80642), o = i(28245), l = i(92171), c = i(18310), d = i(55809), u = i(25879), p = i(7770), h = i(88542), A = i.n(h);
  let m = [...p.T.ease.enter], f = [...p.T.ease.standard], y = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, _ = { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` }, x = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${p.T.blur.subtle}px)`,
    transition: { duration: p.T.duration.fast, ease: f }
  }, g = { opacity: 0, scale: 0.6, filter: `blur(${p.T.blur.subtle}px)` }, b = { ...g, transition: { duration: p.T.duration.fast, ease: f } }, j = { opacity: 0 }, v = { opacity: 0, transition: { duration: p.T.duration.instant } }, k = {
    ...p.T.spring.snappy,
    opacity: { duration: p.T.duration.fast, ease: m },
    filter: { duration: p.T.duration.fast, ease: m }
  };
  function w({ reduced: e2 }) {
    return (0, a.jsx)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(n.PY1.path, {
        d: "M4 12.5l5 5L20 6.5",
        initial: !e2 && { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: { duration: 0.32, ease: m, delay: 0.08 },
          opacity: { duration: 0.05, delay: 0.08 }
        }
      })
    });
  }
  function N({ icon: e2, text: t2, done: i2, width: r2, reduced: o2, measure: l2 }) {
    return (0, a.jsxs)("span", {
      className: A().face,
      children: [
        (0, a.jsx)("span", {
          className: A().iconSlot,
          children: (0, a.jsx)(s.N, {
            initial: false,
            children: (0, a.jsx)(
              n.PY1.span,
              {
                className: A().iconPhase,
                initial: o2 ? j : g,
                animate: y,
                exit: o2 ? v : b,
                transition: o2 ? { duration: p.T.duration.fast } : k,
                children: i2 ? (0, a.jsx)(w, { reduced: o2 }) : e2
              },
              i2 ? "done" : "idle"
            )
          })
        }),
        (0, a.jsxs)(n.PY1.span, {
          className: A().labelFrame,
          style: { width: r2 },
          children: [
            l2 && (0, a.jsx)("span", {
              ref: l2,
              className: A().measure,
              children: t2
            }),
            (0, a.jsx)(s.N, {
              mode: "popLayout",
              initial: false,
              children: (0, a.jsx)(
                n.PY1.span,
                {
                  className: A().label,
                  initial: o2 ? j : _,
                  animate: y,
                  exit: o2 ? v : x,
                  transition: {
                    duration: o2 ? p.T.duration.fast : p.T.duration.standard,
                    ease: m
                  },
                  children: t2
                },
                t2
              )
            })
          ]
        })
      ]
    });
  }
  function C({
    label: e2,
    confirmedLabel: t2 = "Done",
    onConfirm: i2,
    duration: s2 = 1200,
    icon: h2 = (0, a.jsx)(u.A, { strokeWidth: 1.75 }),
    tone: m2 = "accent",
    confirmed: f2,
    onHoldChange: y2,
    className: _2,
    disabled: x2,
    ...g2
  }) {
    let b2 = (0, c.I)() ?? false, j2 = (0, r.useId)(), [v2, k2] = (0, r.useState)(false), [w2, T] = (0, r.useState)(0), P = f2 ?? v2, [I, E] = (0, r.useState)(false), M = (0, o.d)(0), B = (0, o.d)(1), R = (0, d.G)(
      M,
      (e3) => `inset(0 ${((1 - Math.min(1, Math.max(0, e3))) * 100).toFixed(3)}% 0 0)`
    ), [F, S] = (function(e3) {
      let t3 = (0, o.d)("auto"), [i3, a2] = (0, r.useState)(null);
      return (0, r.useEffect)(() => {
        if (!i3 || "u" < typeof ResizeObserver) return;
        let a3 = null, r2 = null, n2 = new ResizeObserver(([n3]) => {
          let s3 = n3?.borderBoxSize?.[0]?.inlineSize ?? i3.offsetWidth, o2 = i3.textContent, c2 = null !== a3 && a3 !== o2 && !e3 && "number" == typeof t3.get();
          a3 = o2, r2?.stop(), c2 ? r2 = (0, l.i)(t3, s3, p.T.spring.morph) : t3.jump(s3);
        });
        return n2.observe(i3), () => {
          n2.disconnect(), r2?.stop();
        };
      }, [i3, e3, t3]), [t3, a2];
    })(b2), D = (0, r.useRef)(null), Y = (0, r.useRef)("mouse"), Q = (0, r.useRef)(null), L = (0, r.useRef)(null), $ = (0, r.useRef)(null), O = P ? t2 : e2, z = (s2 / 1e3).toLocaleString("en-US", { maximumFractionDigits: 1 });
    function H(e3) {
      if (L.current?.stop(), b2) return void B.jump(1);
      let t3 = ($.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97;
      L.current = (0, l.i)(B, e3 ? t3 : 1, p.T.spring.snappy);
    }
    function U() {
      Q.current?.stop(), b2 ? M.jump(0) : Q.current = (0, l.i)(M, 0, {
        ...p.T.spring.smooth,
        velocity: 0
      });
    }
    function W() {
      D.current = null, E(false), y2?.(false), H(false);
    }
    function G() {
      D.current && (W(), "touch" === Y.current && navigator.vibrate?.(12), k2(true), T((e3) => e3 + 1), i2());
    }
    function V(e3) {
      P || x2 || D.current || (D.current = e3, E(true), y2?.(true), H(true), Q.current?.stop(), Q.current = (0, l.i)(M, 1, {
        duration: (1 - M.get()) * s2 / 1e3,
        ease: "linear",
        onComplete: G
      }));
    }
    function q() {
      D.current && (W(), U());
    }
    let X = (0, r.useEffectEvent)(() => {
      P && 1 > M.get() && !D.current && (Q.current?.stop(), b2 ? M.jump(1) : Q.current = (0, l.i)(M, 1, p.T.spring.smooth)), !P && M.get() > 0 && !D.current && U();
    });
    return (0, r.useEffect)(() => {
      X();
    }, [P, w2]), (0, r.useEffect)(
      () => () => {
        Q.current?.stop(), L.current?.stop();
      },
      []
    ), (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsxs)(n.PY1.button, {
          ...g2,
          ref: $,
          type: "button",
          className: [A().button, _2].filter(Boolean).join(" "),
          "data-tone": m2,
          "data-state": P ? "done" : I ? "holding" : "idle",
          disabled: x2,
          "aria-disabled": P || void 0,
          "aria-label": O,
          "aria-describedby": P ? void 0 : j2,
          style: { scale: B },
          onPointerDown: function(e3) {
            e3.isPrimary && 0 === e3.button && (Y.current = e3.pointerType, e3.currentTarget.setPointerCapture(e3.pointerId), V("pointer"));
          },
          onPointerMove: function(e3) {
            if ("pointer" !== D.current) return;
            let t3 = e3.currentTarget.getBoundingClientRect();
            (e3.clientX < t3.left - 24 || e3.clientX > t3.right + 24 || e3.clientY < t3.top - 24 || e3.clientY > t3.bottom + 24) && q();
          },
          onPointerUp: q,
          onPointerCancel: q,
          onLostPointerCapture: q,
          onKeyDown: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), e3.repeat || V("key"));
          },
          onKeyUp: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), "key" === D.current && q());
          },
          onBlur: q,
          onContextMenu: (e3) => e3.preventDefault(),
          children: [
            (0, a.jsx)(N, {
              icon: h2,
              text: O,
              done: P,
              width: F,
              reduced: b2,
              measure: S
            }),
            (0, a.jsx)(n.PY1.span, {
              className: A().fill,
              style: { clipPath: R },
              "aria-hidden": "true",
              children: (0, a.jsx)(N, {
                icon: h2,
                text: O,
                done: P,
                width: F,
                reduced: b2
              })
            })
          ]
        }),
        (0, a.jsx)("span", {
          id: j2,
          className: A().srOnly,
          children: `Press and hold for ${z} seconds to confirm. With a keyboard, hold Space or Enter.`
        }),
        (0, a.jsx)("span", {
          className: A().srOnly,
          role: "status",
          children: P ? t2 : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(71220, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { SecuritySettings: () => ei, default: () => es });
  var s = i(95155), a = i(12115), n = i(18310), r = i(25354), o = i(80642), l = i(9937), d = i(57700), c = i(85633), u = i(95e3), p = i(70299), h = i(33533), m = i(64577), x = i(50825), f = i(28750), y = i(7428), _ = i(90034), g = i(51288), j = i(20530), v = i(73474), b = i(70614), w = i(78766), N = i(93744), k = i(50598), T = i(7770), S = i(69308), $ = i.n(S);
  let L = "maya@fieldnote.example", C = "N4XG K3LQ 7RPM 2VWD Y6HT A5CJ", P = "246810", M = [
    "7kq2-m9xp",
    "c4tn-8wzr",
    "p3hd-6yvb",
    "x9fm-2rkt",
    "b5wl-4qne",
    "r8jc-7tgs",
    "m2vx-9dph",
    "t6nz-3kwf",
    "h4gy-5bmq",
    "w7rs-8cjd"
  ], I = { off: 0, scan: 1, verify: 2, codes: 3, on: 4 }, R = [
    { step: "scan", label: "Scan" },
    { step: "verify", label: "Verify" },
    { step: "codes", label: "Save codes" }
  ], Y = { laptop: c.A, phone: u.A, desktop: p.A, tablet: h.A }, z = [
    {
      id: "mbp",
      device: "MacBook Pro",
      client: "Chrome 129",
      city: "San Francisco, US",
      seen: "Active now",
      kind: "laptop",
      current: true
    },
    {
      id: "iphone",
      device: "iPhone 15 Pro",
      client: "Fieldnote for iOS",
      city: "San Francisco, US",
      seen: "2 hours ago",
      kind: "phone"
    },
    {
      id: "windows",
      device: "Windows desktop",
      client: "Edge 128",
      city: "Austin, US",
      seen: "Yesterday at 4:12 PM",
      kind: "desktop"
    },
    {
      id: "ipad",
      device: "iPad Air",
      client: "Safari 18",
      city: "Lisbon, PT",
      seen: "Sep 14",
      kind: "tablet"
    },
    {
      id: "thinkpad",
      device: "ThinkPad X1",
      client: "Firefox 130",
      city: "Berlin, DE",
      seen: "Sep 9",
      kind: "laptop",
      flag: "New location"
    }
  ], B = ["1 / 1 / 8 / 8", "1 / 19 / 8 / 26", "19 / 1 / 26 / 8"], F = (() => {
    let e2 = 1592598101, t2 = () => {
      let t3 = Math.imul((e2 = e2 + 1831565813 | 0) ^ e2 >>> 15, 1 | e2);
      return (((t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3) ^ t3 >>> 14) >>> 0) / 4294967296;
    }, i2 = [];
    for (let e3 = 0; e3 < 25; e3++)
      for (let s2 = 0; s2 < 25; s2++) {
        if (e3 < 8 && s2 < 8 || e3 < 8 && s2 > 16 || e3 > 16 && s2 < 8)
          continue;
        let a2 = Math.max(Math.abs(e3 - 18), Math.abs(s2 - 18));
        (a2 <= 2 ? 1 !== a2 : 6 === e3 || 6 === s2 ? (e3 + s2) % 2 == 0 : 0.46 > t2()) && i2.push({ row: e3, col: s2 });
      }
    return i2;
  })(), { spring: O, duration: A, blur: E, stagger: W } = T.T, D = [...T.T.ease.enter], H = [...T.T.ease.standard], q = { duration: 0 }, U = {
    enter: (e2) => ({ opacity: 0, x: 24 * e2, filter: `blur(${E.soft}px)` }),
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      x: -24 * e2,
      filter: `blur(${E.soft}px)`,
      transition: { duration: A.exit, ease: H }
    })
  }, X = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.5 * e2}em`,
      filter: `blur(${E.subtle}px)`
    }),
    center: { opacity: 1, y: "0em", filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.5 * e2}em`,
      filter: `blur(${E.subtle}px)`,
      transition: { duration: A.instant, ease: H }
    })
  };
  function Q() {
    let e2 = (0, a.useRef)(null), [t2, i2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let t3 = e2.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let s2 = new ResizeObserver(() => i2(t3.offsetHeight));
      return s2.observe(t3), () => s2.disconnect();
    }, []), [e2, t2];
  }
  function V({ children: e2, className: t2 }) {
    let i2 = (0, n.I)(), [a2, o2] = Q();
    return (0, s.jsx)(r.PY1.div, {
      className: [$().collapse, t2].filter(Boolean).join(" "),
      initial: { height: 0, opacity: 0 },
      animate: { height: o2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: i2 ? q : { height: O.smooth, opacity: { duration: A.fast, ease: H } }
      },
      transition: i2 ? q : { height: O.smooth, opacity: { duration: A.standard, ease: D } },
      children: (0, s.jsx)("div", { ref: a2, children: e2 })
    });
  }
  function Z({ text: e2 }) {
    let t2 = (0, n.I)();
    return (0, s.jsxs)("span", {
      className: $().swap,
      children: [
        (0, s.jsx)("span", { className: $().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          className: $().swapTrack,
          "aria-hidden": "true",
          children: (0, s.jsx)(o.N, {
            mode: "popLayout",
            initial: false,
            children: (0, s.jsx)(
              r.PY1.span,
              {
                className: $().swapText,
                initial: {
                  opacity: 0,
                  y: "0.45em",
                  filter: `blur(${E.soft}px)`
                },
                animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
                exit: {
                  opacity: 0,
                  y: "-0.35em",
                  filter: `blur(${E.subtle}px)`,
                  transition: t2 ? q : { duration: A.fast, ease: H }
                },
                transition: t2 ? q : { duration: A.standard, ease: D },
                children: e2
              },
              e2
            )
          })
        })
      ]
    });
  }
  function K({ value: e2 }) {
    let t2 = (0, n.I)(), [i2, l2] = (0, a.useState)({ value: e2, direction: 1 });
    return i2.value !== e2 && l2({ value: e2, direction: e2 > i2.value ? 1 : -1 }), (0, s.jsxs)("span", {
      className: $().roll,
      children: [
        (0, s.jsx)("span", { className: $().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          className: $().swapTrack,
          "aria-hidden": "true",
          children: (0, s.jsx)(o.N, {
            mode: "popLayout",
            initial: false,
            custom: i2.direction,
            children: (0, s.jsx)(
              r.PY1.span,
              {
                className: $().swapText,
                custom: i2.direction,
                variants: X,
                initial: "enter",
                animate: "center",
                exit: "exit",
                transition: t2 ? q : {
                  y: O.snappy,
                  opacity: { duration: A.fast },
                  filter: { duration: A.fast }
                },
                children: e2
              },
              e2
            )
          })
        })
      ]
    });
  }
  function G() {
    return (0, s.jsxs)("div", {
      className: $().qr,
      role: "img",
      "aria-label": `QR code that adds Fieldnote for ${L} to an authenticator app`,
      children: [
        B.map(
          (e2, t2) => (0, s.jsx)(
            "span",
            {
              className: $().finder,
              style: { gridArea: e2, animationDelay: `${50 * t2}ms` },
              children: (0, s.jsx)("span", { className: $().finderDot })
            },
            e2
          )
        ),
        F.map(
          ({ row: e2, col: t2 }) => (0, s.jsx)(
            "span",
            {
              className: $().qrCell,
              style: {
                gridArea: `${e2 + 1} / ${t2 + 1}`,
                animationDelay: `${60 + (e2 + t2) * 7}ms`
              }
            },
            `${e2}-${t2}`
          )
        )
      ]
    });
  }
  function J() {
    let e2 = (0, n.I)();
    return (0, s.jsxs)("svg", {
      className: $().drawn,
      width: 40,
      height: 40,
      viewBox: "0 0 40 40",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)(r.PY1.circle, {
          cx: 20,
          cy: 20,
          r: 18.5,
          stroke: "currentColor",
          strokeWidth: 1.5,
          transform: "rotate(-90 20 20)",
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: e2 ? q : { duration: A.considered, ease: D }
        }),
        (0, s.jsx)(r.PY1.path, {
          d: "M13 20.5 18 25.5 27.5 15",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: e2 ? q : { duration: A.standard, ease: D, delay: 0.34 }
        })
      ]
    });
  }
  function ee({ index: e2, done: t2 }) {
    let i2 = (0, n.I)();
    return (0, s.jsx)("span", {
      className: $().railMark,
      "aria-hidden": "true",
      children: (0, s.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: t2 ? (0, s.jsx)(
          r.PY1.svg,
          {
            width: 12,
            height: 12,
            viewBox: "0 0 12 12",
            fill: "none",
            initial: { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.6 },
            transition: i2 ? q : O.snappy,
            children: (0, s.jsx)(r.PY1.path, {
              d: "M2.5 6.25 5 8.75 9.5 3.5",
              stroke: "currentColor",
              strokeWidth: 1.75,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: i2 ? q : { duration: A.standard, ease: D, delay: 0.06 }
            })
          },
          "done"
        ) : (0, s.jsx)(
          r.PY1.span,
          {
            initial: { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.6 },
            transition: i2 ? q : O.snappy,
            children: e2 + 1
          },
          "number"
        )
      })
    });
  }
  function et({ id: e2, children: t2 }) {
    let i2 = (0, n.I)(), [a2, o2] = Q();
    return (0, s.jsx)(r.PY1.li, {
      className: $().session,
      variants: {
        exit: (t3) => {
          let s2 = (t3?.[e2] ?? 0) * W.line;
          return i2 ? { height: 0, opacity: 0, transition: q } : {
            height: 0,
            opacity: 0,
            x: -12,
            transition: {
              height: { ...O.smooth, delay: s2 },
              x: { ...O.smooth, delay: s2 },
              opacity: { duration: A.standard, ease: H, delay: s2 }
            }
          };
        }
      },
      initial: false,
      animate: { height: o2, opacity: 1, x: 0 },
      exit: "exit",
      transition: i2 ? q : { height: O.smooth },
      children: (0, s.jsx)("div", { ref: a2, children: t2 })
    });
  }
  function ei() {
    let e2 = (0, a.useId)(), t2 = (0, n.I)(), [i2, c2] = (0, a.useState)("off"), [u2, p2] = (0, a.useState)(1), [h2, T2] = (0, a.useState)(""), [S2, B2] = (0, a.useState)(""), [F2, X2] = (0, a.useState)(false), [Q2, ei2] = (0, a.useState)(false), [es2, ea] = (0, a.useState)("idle"), [en, er] = (0, a.useState)(false), [eo, el] = (0, a.useState)(""), [ed, ec] = (0, a.useState)(""), [eu, ep] = (0, a.useState)(false), [eh, em] = (0, a.useState)("idle"), [ex, ef] = (0, a.useState)(null), [ey, e_] = (0, a.useState)("Last changed March 4, 2026"), [eg, ej] = (0, a.useState)(z), [ev, eb] = (0, a.useState)({}), [ew, eN] = (0, a.useState)(false), [ek, eT] = (0, a.useState)(""), eS = (0, a.useRef)([]), e$ = (0, a.useRef)(null), eL = (0, a.useRef)(eg), eC = (0, a.useRef)(null), eP = (0, a.useRef)(null), eM = (0, a.useRef)(null), eI = (0, a.useRef)(null), eR = (0, a.useRef)(null), eY = (0, a.useRef)(null), ez = (0, a.useRef)(null), eB = (0, a.useRef)(null), eF = (0, a.useRef)(/* @__PURE__ */ new Map());
    (0, a.useEffect)(() => {
      let e3 = eS.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, a.useEffect)(() => {
      eL.current = eg;
    }, [eg]);
    let eO = eg.filter((e3) => !e3.current), eA = "scan" === i2 || "verify" === i2 || "codes" === i2, eE = I[i2] - 1;
    function eW(e3, t3) {
      let i3 = window.setTimeout(e3, t3);
      return eS.current.push(i3), i3;
    }
    function eD(e3) {
      requestAnimationFrame(
        () => requestAnimationFrame(() => {
          let t3 = e3();
          t3?.isConnected && t3.focus({ preventScroll: true });
        })
      );
    }
    function eH() {
      null !== e$.current && window.clearTimeout(e$.current), e$.current = null, X2(false);
    }
    function eq(e3) {
      p2(I[e3] >= I[i2] ? 1 : -1), c2(e3);
    }
    function eU(e3 = h2) {
      if (null === e$.current) {
        if (e3.length < 6) return void B2("Enter all 6 digits from your app");
        X2(true), e$.current = eW(() => {
          (e$.current = null, X2(false), e3 !== P) ? B2("That code didn\u2019t match. Try the newest code in your app") : (eq("codes"), eT("Code accepted. Save your backup codes to finish"), eD(() => eM.current));
        }, 700);
      }
    }
    function eX(e3 = false) {
      let t3 = eL.current.filter((e4) => !e4.current);
      if (!t3.length) return;
      eb(Object.fromEntries(t3.map((e4, t4) => [e4.id, t4]))), ej((e4) => e4.filter((e5) => e5.current)), eN(false);
      let i3 = `${t3.length} other ${1 === t3.length ? "session" : "sessions"}`;
      eT(e3 ? `Password updated and signed out of ${i3}` : `Signed out of ${i3}`), e3 || eD(() => eB.current);
    }
    let eQ = t2 ? q : {
      x: O.smooth,
      opacity: { duration: A.standard, ease: D },
      filter: { duration: A.standard, ease: D }
    }, eV = {
      initial: { opacity: 0, filter: `blur(${E.subtle}px)` },
      animate: { opacity: 1, filter: "blur(0px)" },
      exit: {
        opacity: 0,
        filter: `blur(${E.subtle}px)`,
        transition: t2 ? q : { duration: A.fast, ease: H }
      },
      transition: t2 ? q : { duration: A.standard, ease: D }
    }, eZ = null;
    return "scan" === i2 && (eZ = (0, s.jsxs)("div", {
      className: $().scan,
      children: [
        (0, s.jsx)(G, {}),
        (0, s.jsxs)("div", {
          className: $().scanCopy,
          children: [
            (0, s.jsxs)("div", {
              className: $().copyBlock,
              children: [
                (0, s.jsx)("p", {
                  className: $().lead,
                  children: "Scan with your authenticator app"
                }),
                (0, s.jsxs)("p", {
                  className: $().muted,
                  children: [
                    "1Password, Authy, and Google Authenticator all work. It adds Fieldnote for ",
                    L,
                    "."
                  ]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: $().copyBlock,
              children: [
                (0, s.jsx)("p", {
                  className: $().keyLabel,
                  children: "Can\u2019t scan it? Enter this setup key"
                }),
                (0, s.jsxs)("div", {
                  className: $().keyRow,
                  children: [
                    (0, s.jsx)("code", { className: $().key, children: C }),
                    (0, s.jsx)(v.CopyButton, {
                      value: C.replace(/\s/g, ""),
                      label: "Copy key",
                      onCopied: () => eT("Setup key copied")
                    })
                  ]
                })
              ]
            }),
            (0, s.jsx)("div", {
              className: $().stepActions,
              children: (0, s.jsx)(g.$, {
                ref: eP,
                type: "button",
                size: "sm",
                onClick: () => eq("verify"),
                children: "Continue"
              })
            })
          ]
        })
      ]
    })), "verify" === i2 && (eZ = (0, s.jsxs)("form", {
      className: $().verify,
      noValidate: true,
      onSubmit: (e3) => {
        e3.preventDefault(), eU();
      },
      children: [
        (0, s.jsx)(w.I, {
          label: "Enter the 6-digit code from your app",
          value: h2,
          onChange: function(e3) {
            eH(), T2(e3), B2(""), 6 === e3.length && eU(e3);
          },
          autoFocus: true,
          error: S2 || void 0,
          description: F2 ? "Checking the code" : `Demo code: ${P}. Codes refresh every 30 seconds.`
        }),
        (0, s.jsxs)("div", {
          className: $().stepActions,
          children: [
            (0, s.jsx)(g.$, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: function() {
                eH(), B2(""), eq("scan"), eD(() => eP.current);
              },
              children: "Back"
            }),
            (0, s.jsx)(g.$, {
              type: "submit",
              size: "sm",
              loading: F2,
              children: "Verify"
            })
          ]
        })
      ]
    })), "codes" === i2 && (eZ = (0, s.jsxs)("div", {
      className: $().codesStep,
      children: [
        (0, s.jsxs)("div", {
          className: $().codesHead,
          children: [
            (0, s.jsxs)("div", {
              className: $().copyBlock,
              children: [
                (0, s.jsx)("h4", {
                  ref: eM,
                  tabIndex: -1,
                  className: $().lead,
                  children: "Save your backup codes"
                }),
                (0, s.jsx)("p", {
                  className: $().muted,
                  children: "Each code signs you in once if you lose your phone. This is the only time they are shown."
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: $().codeActions,
              children: [
                (0, s.jsx)(v.CopyButton, {
                  value: [`Fieldnote backup codes for ${L}`, "", ...M].join(
                    "\n"
                  ),
                  label: "Copy codes",
                  onCopied: () => {
                    ei2(true), eT("Backup codes copied");
                  }
                }),
                (0, s.jsx)(g.$, {
                  type: "button",
                  variant: "secondary",
                  size: "sm",
                  loading: "saving" === es2,
                  onClick: function() {
                    "idle" === es2 && (ea("saving"), eW(() => {
                      ea("done"), ei2(true), eT("Saved fieldnote-backup-codes.txt");
                    }, 600));
                  },
                  children: "done" === es2 ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      }),
                      "Downloaded"
                    ]
                  }) : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(x.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Download"
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("ol", {
          className: $().codes,
          "aria-label": "Backup codes",
          children: M.map(
            (e3, i3) => (0, s.jsx)(
              r.PY1.li,
              {
                className: $().code,
                initial: { opacity: 0, y: 6, filter: `blur(${E.soft}px)` },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                transition: t2 ? q : {
                  duration: A.standard,
                  ease: D,
                  delay: 0.14 + i3 * W.item
                },
                children: e3
              },
              e3
            )
          )
        }),
        (0, s.jsxs)("div", {
          className: $().codesFoot,
          children: [
            (0, s.jsx)("p", {
              className: $().muted,
              children: (0, s.jsx)(Z, {
                text: Q2 ? "Codes saved. Finish to turn on two-factor" : "Copy or download the codes to finish"
              })
            }),
            (0, s.jsx)(g.$, {
              type: "button",
              size: "sm",
              disabled: !Q2,
              onClick: function() {
                eq("on"), eT("Two-factor authentication is on"), eD(() => eI.current);
              },
              children: "Finish setup"
            })
          ]
        })
      ]
    })), "on" === i2 && (eZ = (0, s.jsxs)("div", {
      className: $().enabled,
      children: [
        (0, s.jsx)("span", {
          className: $().enabledMark,
          children: (0, s.jsx)(J, {})
        }),
        (0, s.jsxs)("div", {
          className: $().enabledText,
          children: [
            (0, s.jsx)("p", {
              ref: eI,
              tabIndex: -1,
              className: $().lead,
              children: "Two-factor authentication is on"
            }),
            (0, s.jsxs)("p", {
              className: $().muted,
              children: [
                "Authenticator app added Sep 22, 2026 \xB7 ",
                (0, s.jsx)("span", { className: $().num, children: "10" }),
                " of ",
                (0, s.jsx)("span", { className: $().num, children: "10" }),
                " backup codes unused"
              ]
            })
          ]
        }),
        (0, s.jsx)(b.j, {
          className: $().hold,
          label: "Hold to turn off",
          confirmedLabel: "Turned off",
          icon: (0, s.jsx)(f.A, {
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          onConfirm: function() {
            eW(() => {
              eq("off"), eT("Two-factor authentication turned off"), eD(() => eC.current);
            }, 520);
          }
        })
      ]
    })), (0, s.jsx)(l.x, {
      reducedMotion: "user",
      children: (0, s.jsx)(d.o, {
        id: e2,
        children: (0, s.jsxs)("section", {
          className: $().block,
          "aria-labelledby": `${e2}-title`,
          children: [
            (0, s.jsxs)("header", {
              className: $().header,
              children: [
                (0, s.jsx)("h2", { id: `${e2}-title`, children: "Security" }),
                (0, s.jsxs)("p", {
                  children: [
                    "Control how you sign in to Fieldnote as ",
                    L,
                    "."
                  ]
                })
              ]
            }),
            (0, s.jsxs)("section", {
              className: $().section,
              "aria-labelledby": `${e2}-tfa`,
              children: [
                (0, s.jsxs)("div", {
                  className: $().sectionHead,
                  children: [
                    (0, s.jsxs)("div", {
                      className: $().sectionText,
                      children: [
                        (0, s.jsx)("h3", {
                          id: `${e2}-tfa`,
                          children: "Two-factor authentication"
                        }),
                        (0, s.jsx)("p", {
                          children: "Ask for a code from your authenticator app when you sign in on a new device."
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: $().aside,
                      children: [
                        (0, s.jsx)(_.E, {
                          size: "sm",
                          tone: "on" === i2 ? "success" : "neutral",
                          children: "on" === i2 ? "On" : eA ? "Setting up" : "Off"
                        }),
                        (0, s.jsx)(o.N, {
                          mode: "popLayout",
                          initial: false,
                          children: ("off" === i2 || "scan" === i2 || "verify" === i2) && (0, s.jsx)(
                            r.PY1.span,
                            {
                              className: $().actionSlot,
                              ...eV,
                              children: (0, s.jsx)(g.$, {
                                ref: eC,
                                type: "button",
                                size: "sm",
                                variant: "off" === i2 ? "primary" : "ghost",
                                "aria-expanded": "off" !== i2,
                                onClick: "off" === i2 ? function() {
                                  T2(""), B2(""), ei2(false), ea("idle"), eq("scan"), eT(
                                    "Scan the code with your authenticator app to continue"
                                  );
                                } : function() {
                                  eH(), eq("off"), eT("Two-factor setup canceled");
                                },
                                children: "off" === i2 ? "Enable" : "Cancel"
                              })
                            },
                            "tfa-action"
                          )
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsx)(o.N, {
                  initial: false,
                  children: "off" !== i2 && (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsxs)("div", {
                        className: $().tfaBody,
                        children: [
                          (0, s.jsx)(o.N, {
                            initial: false,
                            children: eA && (0, s.jsx)(
                              V,
                              {
                                children: (0, s.jsx)("ol", {
                                  className: $().rail,
                                  "aria-label": "Setup progress",
                                  children: R.map((e3, i3) => {
                                    let a2 = i3 < eE ? "done" : i3 === eE ? "current" : "next";
                                    return (0, s.jsxs)(
                                      "li",
                                      {
                                        className: $().railItem,
                                        "data-state": a2,
                                        "aria-current": "current" === a2 ? "step" : void 0,
                                        children: [
                                          "current" === a2 && (0, s.jsx)(r.PY1.span, {
                                            layoutId: "security-rail",
                                            className: $().railHighlight,
                                            transition: t2 ? q : O.morph
                                          }),
                                          (0, s.jsx)(ee, {
                                            index: i3,
                                            done: "done" === a2
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: $().railLabel,
                                            children: [
                                              e3.label,
                                              "done" === a2 && (0, s.jsx)("span", {
                                                className: $().srOnly,
                                                children: ", done"
                                              })
                                            ]
                                          })
                                        ]
                                      },
                                      e3.step
                                    );
                                  })
                                })
                              },
                              "rail"
                            )
                          }),
                          (0, s.jsx)("div", {
                            className: $().stage,
                            children: (0, s.jsx)(o.N, {
                              mode: "popLayout",
                              initial: false,
                              custom: u2,
                              children: (0, s.jsx)(
                                r.PY1.div,
                                {
                                  className: $().stagePane,
                                  custom: u2,
                                  variants: U,
                                  initial: "enter",
                                  animate: "center",
                                  exit: "exit",
                                  transition: eQ,
                                  children: eZ
                                },
                                i2
                              )
                            })
                          })
                        ]
                      })
                    },
                    "tfa-body"
                  )
                })
              ]
            }),
            (0, s.jsxs)("section", {
              className: $().section,
              "aria-labelledby": `${e2}-password`,
              children: [
                (0, s.jsxs)("div", {
                  className: $().sectionHead,
                  children: [
                    (0, s.jsxs)("div", {
                      className: $().sectionText,
                      children: [
                        (0, s.jsx)("h3", {
                          id: `${e2}-password`,
                          children: "Password"
                        }),
                        (0, s.jsx)("p", {
                          children: (0, s.jsx)(Z, { text: ey })
                        })
                      ]
                    }),
                    (0, s.jsx)("div", {
                      className: $().aside,
                      children: (0, s.jsx)(g.$, {
                        ref: eR,
                        type: "button",
                        size: "sm",
                        variant: en ? "ghost" : "secondary",
                        disabled: "idle" !== eh,
                        "aria-expanded": en,
                        onClick: function() {
                          if ("idle" === eh) {
                            if (en) {
                              er(false), ef(null), eT("Password change canceled");
                              return;
                            }
                            er(true), eD(() => eY.current);
                          }
                        },
                        children: en ? "Cancel" : "Change password"
                      })
                    })
                  ]
                }),
                (0, s.jsx)(o.N, {
                  initial: false,
                  children: en && (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsxs)("form", {
                        className: $().pwForm,
                        noValidate: true,
                        onSubmit: function(e3) {
                          if (e3.preventDefault(), "idle" !== eh) return;
                          let t3 = (e4, t4) => {
                            ef({ field: e4, text: t4 }), ("current" === e4 ? eY : ez).current?.focus();
                          };
                          return eo ? ed ? ed === eo ? t3(
                            "new",
                            "Use a password that differs from your current one"
                          ) : (0, k.co)(ed).level < 3 ? t3(
                            "new",
                            "Meet at least three of the requirements below"
                          ) : void (ef(null), em("saving"), eW(() => {
                            em("saved"), eT("Password updated"), eu && eX(true), eW(() => {
                              er(false), em("idle"), el(""), ec(""), ep(false), e_("Last changed just now"), eD(() => eR.current);
                            }, 1400);
                          }, 900)) : t3("new", "Choose a new password") : t3("current", "Enter your current password");
                        },
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)(N.s, {
                                ref: eY,
                                label: "Current password",
                                autoComplete: "current-password",
                                value: eo,
                                readOnly: "idle" !== eh,
                                "aria-invalid": ex?.field === "current" || void 0,
                                "aria-describedby": ex?.field === "current" ? `${e2}-current-error` : void 0,
                                onChange: (e3) => {
                                  el(e3.target.value), ex?.field === "current" && ef(null);
                                }
                              }),
                              (0, s.jsx)(o.N, {
                                initial: false,
                                children: ex?.field === "current" && (0, s.jsx)(
                                  V,
                                  {
                                    children: (0, s.jsx)("p", {
                                      id: `${e2}-current-error`,
                                      className: $().fieldError,
                                      role: "alert",
                                      children: ex.text
                                    })
                                  },
                                  "current-error"
                                )
                              })
                            ]
                          }),
                          (0, s.jsx)(k.Xh, {
                            ref: ez,
                            label: "New password",
                            value: ed,
                            readOnly: "idle" !== eh,
                            error: ex?.field === "new" ? ex.text : void 0,
                            onValueChange: (e3) => {
                              ec(e3), ex?.field === "new" && ef(null);
                            }
                          }),
                          (0, s.jsxs)("div", {
                            className: $().pwFoot,
                            children: [
                              (0, s.jsx)("span", {
                                className: $().checkWrap,
                                children: (0, s.jsx)(j.S, {
                                  label: "Sign out of other sessions",
                                  checked: eu,
                                  disabled: !eO.length || "idle" !== eh,
                                  onCheckedChange: (e3) => ep(true === e3)
                                })
                              }),
                              (0, s.jsx)(g.$, {
                                type: "submit",
                                size: "sm",
                                loading: "saving" === eh,
                                children: "saved" === eh ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)(m.A, {
                                      size: 16,
                                      strokeWidth: 2,
                                      "aria-hidden": "true"
                                    }),
                                    "Password updated"
                                  ]
                                }) : "Update password"
                              })
                            ]
                          })
                        ]
                      })
                    },
                    "password-form"
                  )
                })
              ]
            }),
            (0, s.jsxs)("section", {
              className: $().section,
              "aria-labelledby": `${e2}-sessions`,
              children: [
                (0, s.jsx)("div", {
                  className: $().sectionHead,
                  children: (0, s.jsxs)("div", {
                    className: $().sectionText,
                    children: [
                      (0, s.jsxs)("h3", {
                        id: `${e2}-sessions`,
                        ref: eB,
                        tabIndex: -1,
                        children: [
                          "Active sessions ",
                          (0, s.jsx)("span", {
                            className: $().count,
                            children: (0, s.jsx)(K, { value: eg.length })
                          })
                        ]
                      }),
                      (0, s.jsx)("p", {
                        children: "Devices signed in to your account in the last 30 days."
                      })
                    ]
                  })
                }),
                (0, s.jsx)("ul", {
                  className: $().sessions,
                  "aria-labelledby": `${e2}-sessions`,
                  children: (0, s.jsx)(o.N, {
                    initial: false,
                    custom: ev,
                    children: eg.map((e3) => {
                      let t3 = Y[e3.kind];
                      return (0, s.jsx)(
                        et,
                        {
                          id: e3.id,
                          children: (0, s.jsxs)("div", {
                            className: $().sessionInner,
                            children: [
                              (0, s.jsx)(t3, {
                                className: $().deviceIcon,
                                size: 16,
                                strokeWidth: 1.5,
                                "aria-hidden": "true"
                              }),
                              (0, s.jsxs)("div", {
                                className: $().sessionText,
                                children: [
                                  (0, s.jsxs)("span", {
                                    className: $().sessionName,
                                    children: [
                                      e3.device,
                                      e3.current && (0, s.jsx)(_.E, {
                                        size: "sm",
                                        children: "This device"
                                      }),
                                      e3.flag && (0, s.jsx)(_.E, {
                                        size: "sm",
                                        tone: "warning",
                                        children: e3.flag
                                      })
                                    ]
                                  }),
                                  (0, s.jsxs)("span", {
                                    className: $().sessionMeta,
                                    children: [
                                      e3.client,
                                      " \xB7 ",
                                      e3.city,
                                      " \xB7 ",
                                      e3.seen
                                    ]
                                  })
                                ]
                              }),
                              !e3.current && (0, s.jsx)(g.$, {
                                ref: (t4) => {
                                  t4 ? eF.current.set(e3.id, t4) : eF.current.delete(e3.id);
                                },
                                type: "button",
                                variant: "ghost",
                                size: "sm",
                                "aria-label": `Revoke ${e3.device} session in ${e3.city}`,
                                onClick: () => {
                                  let t4, i3;
                                  return t4 = eO.findIndex(
                                    (t5) => t5.id === e3.id
                                  ), i3 = eO[t4 + 1] ?? eO[t4 - 1], void (eb({}), ej(
                                    (t5) => t5.filter((t6) => t6.id !== e3.id)
                                  ), eT(
                                    `Signed out of ${e3.device} in ${e3.city}`
                                  ), eD(
                                    () => (i3 ? eF.current.get(i3.id) : null) ?? eB.current
                                  ));
                                },
                                children: "Revoke"
                              })
                            ]
                          })
                        },
                        e3.id
                      );
                    })
                  })
                }),
                (0, s.jsx)(o.N, {
                  initial: false,
                  children: eO.length ? (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsxs)("div", {
                        className: $().sessionsFoot,
                        children: [
                          (0, s.jsx)("p", {
                            className: $().muted,
                            children: (0, s.jsx)(Z, {
                              text: ew ? `Keep holding to sign out ${eO.length} ${1 === eO.length ? "device" : "devices"}` : "You stay signed in on this device"
                            })
                          }),
                          (0, s.jsx)(b.j, {
                            className: $().hold,
                            label: "Sign out of other sessions",
                            confirmedLabel: "Signed out",
                            icon: (0, s.jsx)(y.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            onHoldChange: eN,
                            onConfirm: () => eX()
                          })
                        ]
                      })
                    },
                    "sign-out-all"
                  ) : (0, s.jsx)(
                    V,
                    {
                      children: (0, s.jsx)("p", {
                        className: $().alone,
                        children: "Only this device is signed in."
                      })
                    },
                    "alone"
                  )
                })
              ]
            }),
            (0, s.jsx)("p", {
              className: $().srOnly,
              "aria-live": "polite",
              children: ek
            })
          ]
        })
      })
    });
  }
  let es = ei;
}

__m(__module,__exports,__require);
});
A.reg(78766, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { I: () => m });
  var n = i(95155), a = i(12115), r = i(18310), s = i(80642), o = i(25354), l = i(30464), u = i(7770), d = i(79374), c = i.n(d);
  function p({ text: e2 }) {
    let t2 = (0, r.I)(), i2 = e2.split(" ");
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", { className: c().srOnly, children: e2 }),
        (0, n.jsx)("span", {
          className: c().words,
          "aria-hidden": "true",
          children: (0, n.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, a2) => (0, n.jsx)(
                o.PY1.span,
                {
                  className: c().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${u.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${u.T.blur.subtle}px)`,
                    transition: {
                      duration: u.T.duration.instant,
                      ease: [...u.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: u.T.duration.instant } : {
                    duration: u.T.duration.standard,
                    ease: [...u.T.ease.enter]
                  },
                  children: a2 < i2.length - 1 ? `${e3} ` : e3
                },
                `${a2}:${e3}`
              )
            )
          })
        })
      ]
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: a2 }) {
    return (0, n.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, n.jsx)(h, { id: e2, text: t2, className: i2, alert: a2 }, "message") : null
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: s2 }) {
    let l2 = (0, r.I)(), d2 = (0, a.useRef)(null), [f2, m2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let e3 = d2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([t4]) => m2(t4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.jsx)(o.PY1.span, {
      className: c().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: f2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: l2 ? { duration: 0 } : {
          height: u.T.spring.smooth,
          opacity: { duration: u.T.duration.instant }
        }
      },
      transition: l2 ? { duration: 0 } : {
        height: u.T.spring.smooth,
        opacity: { duration: u.T.duration.fast }
      },
      children: (0, n.jsx)(o.PY1.span, {
        ref: d2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !l2 && { y: "0.35em", filter: `blur(${u.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: l2 ? 0 : u.T.duration.standard,
          ease: [...u.T.ease.enter]
        },
        children: (0, n.jsx)(p, { text: t2 })
      })
    });
  }
  function m({
    length: e2 = 6,
    value: t2 = "",
    onChange: i2,
    label: d2,
    description: p2,
    error: h2,
    autoFocus: _ = false,
    disabled: y = false,
    inputMode: g = "numeric",
    className: x
  }) {
    let b = (0, a.useId)(), w = (0, r.I)(), [T, v] = (0, l.l)(), j = (0, a.useRef)([]), N = Array.from({ length: e2 }, (e3, i3) => t2[i3] ?? ""), k = p2 ? `${b}-description` : void 0, $ = h2 ? `${b}-error` : void 0, E = [k, $].filter(Boolean).join(" ") || void 0, P = (t3) => j.current[Math.max(0, Math.min(t3, e2 - 1))]?.focus(), S = (e3) => "numeric" === g ? e3.replace(/\D/g, "") : e3, [R, L] = (0, a.useState)({ x: 0, width: 0, shown: false, glide: false }), [Y, z] = (0, a.useState)({ value: t2, wave: false });
    Y.value !== t2 && z({
      value: t2,
      wave: Array.from(
        { length: e2 },
        (e3, i3) => (Y.value[i3] ?? "") !== (t2[i3] ?? "")
      ).filter(Boolean).length > 1
    });
    let B = (0, a.useRef)(h2);
    (0, a.useEffect)(() => {
      _ && j.current[0]?.focus();
    }, [_]), (0, a.useEffect)(() => {
      let e3 = T.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.contains(document.activeElement) ? document.activeElement?.parentElement : null;
        t4 && L(
          (e4) => e4.x === t4.offsetLeft && e4.width === t4.offsetWidth ? e4 : { ...e4, x: t4.offsetLeft, width: t4.offsetWidth, glide: false }
        );
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [T]), (0, a.useEffect)(() => {
      h2 && h2 !== B.current && !w && T.current && v(
        T.current,
        { x: [0, -6, 5, -3, 2, 0] },
        { duration: 0.36, ease: [...u.T.ease.standard] }
      ), B.current = h2;
    }, [h2, w, v, T]);
    let D = (e3) => {
      let t3 = e3.currentTarget.parentElement;
      L((e4) => ({
        x: t3.offsetLeft,
        width: t3.offsetWidth,
        shown: true,
        glide: e4.shown
      }));
    }, M = (e3) => {
      T.current?.contains(e3.relatedTarget) || L((e4) => ({ ...e4, shown: false, glide: false }));
    };
    return (0, n.jsxs)("div", {
      className: [c().field, x].filter(Boolean).join(" "),
      children: [
        (0, n.jsx)("span", { className: c().label, children: d2 }),
        (0, n.jsxs)("div", {
          ref: T,
          className: c().inputs,
          role: "group",
          "aria-label": d2,
          "data-invalid": h2 ? "true" : void 0,
          children: [
            N.map(
              (t3, a2) => (0, n.jsxs)(
                "div",
                {
                  className: c().slot,
                  children: [
                    (0, n.jsx)("input", {
                      ref: (e3) => {
                        j.current[a2] = e3;
                      },
                      className: c().input,
                      "aria-label": `${d2}, digit ${a2 + 1} of ${e2}`,
                      "aria-describedby": E,
                      "aria-invalid": !!h2 || void 0,
                      value: t3,
                      "data-filled": t3 ? "true" : void 0,
                      maxLength: 1,
                      inputMode: g,
                      autoComplete: 0 === a2 ? "one-time-code" : "off",
                      disabled: y,
                      onChange: (t4) => ((t5, n2) => {
                        let a3 = S(n2.target.value);
                        if (a3.length <= 1) {
                          let n3, r3;
                          return void (n3 = N.slice(), r3 = S(a3).slice(-1), n3[t5] = r3, i2?.(n3.join("")), r3 && t5 < e2 - 1 && P(t5 + 1));
                        }
                        let r2 = N.slice();
                        a3.slice(0, e2 - t5).split("").forEach((e3, i3) => {
                          r2[t5 + i3] = e3;
                        }), i2?.(r2.join("")), P(Math.min(t5 + a3.length, e2 - 1));
                      })(a2, t4),
                      onPaste: (t4) => ((t5, n2) => {
                        n2.preventDefault();
                        let a3 = S(n2.clipboardData.getData("text")).slice(
                          0,
                          e2 - t5
                        );
                        if (!a3) return;
                        let r2 = N.slice();
                        a3.split("").forEach((e3, i3) => {
                          r2[t5 + i3] = e3;
                        }), i2?.(r2.join("")), P(Math.min(t5 + a3.length, e2 - 1));
                      })(a2, t4),
                      onKeyDown: (e3) => ((e4, t4) => {
                        if ("ArrowLeft" === t4.key && (t4.preventDefault(), P(e4 - 1)), "ArrowRight" === t4.key && (t4.preventDefault(), P(e4 + 1)), "Backspace" === t4.key && !N[e4] && e4 > 0) {
                          t4.preventDefault();
                          let n2 = N.slice();
                          n2[e4 - 1] = "", i2?.(n2.join("")), P(e4 - 1);
                        }
                        if ("Delete" === t4.key && N[e4]) {
                          let t5 = N.slice();
                          t5[e4] = "", i2?.(t5.join(""));
                        }
                      })(a2, e3),
                      onFocus: D,
                      onBlur: M
                    }),
                    (0, n.jsx)(s.N, {
                      initial: false,
                      children: t3 ? (0, n.jsx)(
                        o.PY1.span,
                        {
                          className: c().glyph,
                          "aria-hidden": "true",
                          initial: w ? { opacity: 0 } : {
                            opacity: 0,
                            y: "0.35em",
                            filter: `blur(${u.T.blur.soft}px)`
                          },
                          animate: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                          },
                          exit: w ? { opacity: 0, transition: { duration: 0 } } : {
                            opacity: 0,
                            scale: 0.9,
                            filter: `blur(${u.T.blur.subtle}px)`,
                            transition: {
                              duration: u.T.duration.instant,
                              ease: [...u.T.ease.standard]
                            }
                          },
                          transition: w ? { duration: u.T.duration.instant } : {
                            duration: u.T.duration.standard,
                            ease: [...u.T.ease.enter],
                            delay: Y.wave ? a2 * u.T.stagger.item : 0
                          },
                          children: t3
                        },
                        t3
                      ) : null
                    })
                  ]
                },
                `${b}-${a2}`
              )
            ),
            (0, n.jsx)(o.PY1.span, {
              className: c().ring,
              "aria-hidden": "true",
              initial: false,
              animate: {
                x: R.x,
                width: R.width,
                opacity: +!!R.shown,
                scale: R.shown ? 1 : 0.94
              },
              transition: w ? { duration: 0 } : {
                x: R.glide ? u.T.spring.snappy : { duration: 0 },
                width: { duration: 0 },
                scale: u.T.spring.snappy,
                opacity: { duration: u.T.duration.fast }
              }
            })
          ]
        }),
        (0, n.jsx)(f, { id: k, text: p2, className: c().description }),
        (0, n.jsx)(f, { id: $, text: h2, className: c().error, alert: true })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(79374, ".field{display:grid;min-width:0}\n.label{margin-bottom:8px;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.inputs{position:relative;display:flex;width:fit-content;max-width:100%;gap:8px}\n.inputs[data-invalid=true] .ring{border-color:var(--danger)}\n@media (max-width:360px){.inputs{gap:6px}\n.slot{position:relative;display:grid;width:42px;height:48px;min-width:0;flex:0 1 42px}\n.slot{height:44px}\n.input{width:100%;height:100%;min-width:0;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:transparent;caret-color:var(--accent);font:inherit;font-size:var(--text-lg);font-variant-numeric:tabular-nums;text-align:center;outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[data-filled=true],[aria-invalid=true]){border-color:var(--border-strong);background:var(--surface-muted)}\n.input[data-filled=true]{border-color:var(--accent);background:var(--accent-subtle)}\n.input:focus-visible{outline:none}\n.input[aria-invalid=true]{border-color:var(--danger);background:color-mix(in srgb,var(--danger) 7%,var(--surface))}\n.input:disabled{cursor:not-allowed;opacity:.48;background:var(--surface-muted)}\n.input:disabled~.glyph{opacity:.48}\n.input:focus-visible{outline:2px solid CanvasText;outline-offset:2px}\n.input{color:CanvasText}\n@media (prefers-reduced-motion:reduce){.input,.ring{transition:none}\n.glyph{position:absolute;inset:0;display:grid;place-items:center;color:var(--foreground);font-size:var(--text-lg);font-variant-numeric:tabular-nums;pointer-events:none}\n.glyph{display:none}\n.ring{position:absolute;top:0;left:0;height:100%;z-index:2;border:1px solid var(--accent-strong);border-radius:var(--radius-control);pointer-events:none;transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (forced-colors:active){.ring{display:none}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:8px;font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","label":"label","inputs":"inputs","ring":"ring","slot":"slot","input":"input","glyph":"glyph","messageSlot":"messageSlot","description":"description","error":"error","words":"words","word":"word","srOnly":"srOnly"});
A.regCss(84830, ".password-strength_field__TL01s{--tone:var(--border-strong);display:grid;min-width:0}.password-strength_field__TL01s[data-level=\"1\"]{--tone:var(--danger)}.password-strength_field__TL01s[data-level=\"2\"]{--tone:var(--warning)}.password-strength_field__TL01s[data-level=\"3\"],.password-strength_field__TL01s[data-level=\"4\"]{--tone:var(--success)}.password-strength_label__LaKQo{margin-bottom:var(--space-2);color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}.password-strength_shell__MrikZ{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-1);padding:0 5px 0 var(--space-4);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.password-strength_shell__MrikZ:hover:not(:focus-within){border-color:var(--text-muted)}}.password-strength_shell__MrikZ:focus-within{border-color:var(--foreground)}.password-strength_shell__MrikZ:has(.password-strength_input__L_KxV[aria-invalid=true]){border-color:var(--danger)}.password-strength_input__L_KxV{width:100%;min-width:0;height:calc(var(--control-height-md) - 2px);padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}.password-strength_input__L_KxV::placeholder{color:var(--text-muted)}@media (pointer:coarse){.password-strength_input__L_KxV{font-size:var(--text-base)}}.password-strength_input__L_KxV[data-reveal=shown]{animation:password-strength_resolve-shown__bWCim var(--duration-standard) var(--ease-enter)}.password-strength_input__L_KxV[data-reveal=hidden]{animation:password-strength_resolve-hidden__IQYVj var(--duration-standard) var(--ease-enter)}@keyframes password-strength_resolve-shown__bWCim{0%{opacity:.35;filter:blur(2px)}}@keyframes password-strength_resolve-hidden__IQYVj{0%{opacity:.35;filter:blur(2px)}}.password-strength_reveal__AR82Y{display:grid;width:34px;height:34px;flex:0 0 auto;place-items:center;padding:0;border:0;border-radius:calc(var(--radius-control) - 5px);background:transparent;color:var(--text-muted);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}@media (hover:hover) and (pointer:fine){.password-strength_reveal__AR82Y:hover{background:var(--surface-muted);color:var(--foreground)}}.password-strength_reveal__AR82Y:active{transform:scale(.94);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform .1s var(--ease-standard)}.password-strength_reveal__AR82Y[aria-pressed=true]{color:var(--foreground)}.password-strength_errorSlot__yfEaV{display:block;overflow:hidden}.password-strength_error__1_gLW{position:relative;display:block;padding-top:var(--space-2);color:var(--danger);font-size:var(--text-xs);line-height:var(--leading-body)}.password-strength_errorText___a_0v{display:block}.password-strength_meterRow__aQt_z{display:flex;align-items:center;gap:var(--space-3);margin-top:var(--space-3)}.password-strength_meter__E_JE8{display:grid;flex:1 1 auto;min-width:0;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}.password-strength_segment__ikpYs{position:relative;height:4px;overflow:hidden;isolation:isolate;border-radius:var(--radius-pill);background:var(--border)}.password-strength_fill__BYFlm{position:absolute;inset:0;border-radius:inherit;background:var(--tone);transition:background-color var(--duration-standard) var(--ease-standard)}.password-strength_word__ivsGS{position:relative;display:block;flex:0 0 4.5rem;height:1.4em;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);text-align:right;white-space:nowrap}.password-strength_wordText__cz0HH{display:inline-block}.password-strength_rules__BK1XB{display:grid;gap:6px;margin:var(--space-4) 0 0;padding:0;list-style:none}.password-strength_rule__LnZfK{display:flex;min-height:1.25rem;align-items:center;gap:10px;color:var(--text-muted);font-size:var(--text-sm);line-height:var(--leading-body);transition:color var(--duration-standard) var(--ease-standard)}.password-strength_rule__LnZfK[data-met]{color:var(--foreground)}.password-strength_ruleLabel__8vkM5{min-width:0}.password-strength_mark__dxakX{position:relative;display:block;width:16px;height:16px;flex:0 0 16px;border:1.25px solid var(--border-strong);border-radius:var(--radius-pill);color:var(--success);transition:border-color var(--duration-fast) var(--ease-standard)}.password-strength_rule__LnZfK[data-met] .password-strength_mark__dxakX{border-color:transparent}.password-strength_markFill__IBpb1{position:absolute;inset:-1.25px;border-radius:inherit;background:color-mix(in oklab,var(--success) 16%,transparent)}.password-strength_tick__nXiTD{position:absolute;inset:-1.25px;width:16px;height:16px}.password-strength_remaining__yul_w{position:relative;display:block;margin-left:auto;padding-left:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}.password-strength_remainingText__Jii7L{display:inline-flex;align-items:baseline;gap:.28em}.password-strength_number__h2ral{display:inline-flex;font-variant-numeric:tabular-nums}.password-strength_place__RwUC_{position:relative;display:inline-block;overflow-x:clip}.password-strength_digit__kcnVc{display:inline-block}.password-strength_srOnly__mLAgm{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.password-strength_fill__BYFlm,.password-strength_mark__dxakX,.password-strength_reveal__AR82Y,.password-strength_rule__LnZfK,.password-strength_shell__MrikZ{transition:none}}@media (prefers-reduced-motion:reduce){.password-strength_reveal__AR82Y:active{transform:none}}@media (prefers-reduced-motion:reduce){.password-strength_input__L_KxV[data-reveal]{animation:none}}", {"field":"password-strength_field__TL01s","label":"password-strength_label__LaKQo","shell":"password-strength_shell__MrikZ","input":"password-strength_input__L_KxV","resolve-shown":"password-strength_resolve-shown__bWCim","resolve-hidden":"password-strength_resolve-hidden__IQYVj","reveal":"password-strength_reveal__AR82Y","errorSlot":"password-strength_errorSlot__yfEaV","error":"password-strength_error__1_gLW","errorText":"password-strength_errorText___a_0v","meterRow":"password-strength_meterRow__aQt_z","meter":"password-strength_meter__E_JE8","segment":"password-strength_segment__ikpYs","fill":"password-strength_fill__BYFlm","word":"password-strength_word__ivsGS","wordText":"password-strength_wordText__cz0HH","rules":"password-strength_rules__BK1XB","rule":"password-strength_rule__LnZfK","ruleLabel":"password-strength_ruleLabel__8vkM5","mark":"password-strength_mark__dxakX","markFill":"password-strength_markFill__IBpb1","tick":"password-strength_tick__nXiTD","remaining":"password-strength_remaining__yul_w","remainingText":"password-strength_remainingText__Jii7L","number":"password-strength_number__h2ral","place":"password-strength_place__RwUC_","digit":"password-strength_digit__kcnVc","srOnly":"password-strength_srOnly__mLAgm"});
A.reg(85633, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var r = a(51811);
  let s = {
    name: "laptop",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
          key: "1pdavp"
        }
      ],
      ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
    ]
  };
  s.node;
  let i = (0, r.A)(s);
}

__m(__module,__exports,__require);
});
A.regCss(88542, ".button{--hold-ink:var(--foreground);--hold-fill:var(--accent);--hold-on-fill:var(--accent-foreground);--hold-border:var(--border-strong);position:relative;display:inline-flex;min-height:var(--control-height-md);align-items:center;justify-content:center;padding:0 var(--space-5);border:1px solid var(--hold-border);border-radius:var(--radius-control);background:var(--surface);color:var(--hold-ink);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.button[data-tone=danger]{--hold-ink:var(--danger);--hold-fill:var(--danger);--hold-on-fill:var(--background);--hold-border:color-mix(in oklab,var(--danger) 32%,var(--border))}\n.button[data-tone=neutral]{--hold-ink:var(--foreground);--hold-fill:var(--foreground);--hold-on-fill:var(--background);--hold-border:var(--border-strong)}\n@media (hover:hover) and (pointer:fine){.button:not(:disabled):not([aria-disabled=true]):hover{background:color-mix(in oklab,var(--hold-fill) 6%,var(--surface))}\n.button[aria-disabled=true]{cursor:default}\n.button:disabled{cursor:not-allowed;opacity:.5}\n@media (prefers-reduced-motion:reduce){.button{transition:none}\n.face{display:inline-flex;align-items:center;gap:var(--space-2);white-space:nowrap}\n.fill{position:absolute;inset:-1px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-control);background:var(--hold-fill);color:var(--hold-on-fill);pointer-events:none}\n.iconSlot{display:grid;width:18px;height:18px;flex:none;place-items:center}\n.iconPhase{display:grid;grid-area:1/1;place-items:center}\n.iconPhase svg{width:18px;height:18px}\n.labelFrame{position:relative;display:inline-flex;min-width:0;clip-path:inset(-.6em -3px)}\n.label{display:block;white-space:nowrap}\n.measure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {});
A.reg(90034, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { E: () => v });
  var n = a(95155), r = a(12115), i = a(79196), s = a(25354), l = a(18310), o = a(28245), d = a(92171), u = a(80642), c = a(7770), p = a(22346), _ = a.n(p);
  let m = { duration: c.T.duration.fast, ease: [...c.T.ease.standard] }, f = { opacity: 0, y: "0.3em", filter: `blur(${c.T.blur.soft}px)` }, y = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${c.T.blur.subtle}px)`,
    transition: m
  }, b = { opacity: 0, scale: 0.6, filter: `blur(${c.T.blur.subtle}px)` }, h = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, g = { opacity: 0, transition: { duration: c.T.duration.instant } };
  function x(e2) {
    let t2 = (0, i.tF)();
    return (0, n.jsx)(s.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function v({
    tone: e2 = "neutral",
    size: t2 = "md",
    icon: a2,
    dot: i2 = false,
    color: p2,
    outline: j = false,
    pill: k = false,
    className: T,
    children: N,
    ...w
  }) {
    let M = (0, l.I)(), A = "string" == typeof N || "number" == typeof N ? String(N) : null, E = a2 ? (function(e3) {
      if (!(0, r.isValidElement)(e3)) return "icon";
      let t3 = e3.type;
      return "string" == typeof t3 ? t3 : t3.displayName ?? t3.name ?? "icon";
    })(a2) : "", z = (0, r.useRef)(null), S = (0, r.useRef)(null), $ = (0, o.d)("auto"), R = (0, r.useRef)(0);
    (0, r.useLayoutEffect)(() => {
      R.current = performance.now();
    }, [A, E]), (0, r.useEffect)(() => {
      let e3, t3, a3 = S.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let n2 = () => {
        $.jump("auto"), z.current && (z.current.style.width = "auto");
      }, r2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let i3 = r3.borderBoxSize?.[0]?.inlineSize ?? a3.offsetWidth, s2 = $.get(), l2 = "number" == typeof s2 ? s2 : e3;
        if (e3 = i3, t3?.stop(), M || void 0 === l2 || l2 === i3 || performance.now() - R.current > 120)
          return n2();
        z.current && (z.current.style.width = `${l2}px`), t3 = (0, d.i)($, [l2, i3], {
          ...c.T.spring.morph,
          onComplete: n2
        });
      });
      return r2.observe(a3), () => {
        r2.disconnect(), t3?.stop();
      };
    }, [$, M]);
    let I = M ? { duration: c.T.duration.instant } : { duration: c.T.duration.standard, ease: [...c.T.ease.enter] }, P = a2 ? _().withIcon : i2 ? _().withDot : void 0, C = [
      _().badge,
      _()[e2],
      p2 ? _()[p2] : void 0,
      _()[t2],
      P,
      j ? _().outline : void 0,
      k ? _().pill : void 0,
      T
    ].filter(Boolean).join(" ");
    return (0, n.jsx)("span", {
      ...w,
      className: C,
      children: (0, n.jsx)(s.PY1.span, {
        ref: z,
        className: _().body,
        style: { width: $ },
        children: (0, n.jsxs)("span", {
          ref: S,
          className: _().content,
          children: [
            !a2 && i2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)("span", { className: _().dot })
            }) : null,
            a2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().glyph,
                    initial: M ? { opacity: 0 } : b,
                    animate: h,
                    exit: M ? g : { ...b, transition: m },
                    transition: M ? I : c.T.spring.snappy,
                    children: a2
                  },
                  E
                )
              })
            }) : null,
            null === A ? N : (0, n.jsx)("span", {
              className: _().label,
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().text,
                    initial: M ? { opacity: 0 } : f,
                    animate: h,
                    exit: M ? g : y,
                    transition: I,
                    children: A
                  },
                  A
                )
              })
            })
          ]
        })
      })
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(93744, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { s: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(25354), o = i(80642), l = i(7770), d = i(1668), u = i.n(d);
  let c = { showPassword: "Show password", hidePassword: "Hide password" };
  function p({ slashed: e2 }) {
    let t2 = (0, n.I)(), i2 = `eye-${(0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, o2 = { pathLength: +!!e2, opacity: +!!e2 }, d2 = t2 ? { duration: 0 } : {
      pathLength: {
        duration: l.T.duration.standard,
        ease: [...l.T.ease.standard]
      },
      opacity: { duration: l.T.duration.instant }
    };
    return (0, a.jsxs)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, a.jsxs)("mask", {
          id: i2,
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: [
            (0, a.jsx)("rect", {
              width: "24",
              height: "24",
              fill: "white",
              stroke: "none"
            }),
            (0, a.jsx)(s.PY1.path, {
              d: "M2 2l20 20",
              stroke: "black",
              strokeWidth: 5,
              initial: false,
              animate: o2,
              transition: d2
            })
          ]
        }),
        (0, a.jsxs)("g", {
          mask: `url(#${i2})`,
          children: [
            (0, a.jsx)("path", {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            }),
            (0, a.jsx)("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }),
        (0, a.jsx)(s.PY1.path, {
          d: "M2 2l20 20",
          initial: false,
          animate: o2,
          transition: d2
        })
      ]
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
          children: (0, a.jsx)(o.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsx)(
                s.PY1.span,
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
                      ease: [...l.T.ease.exit]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: r2 < i2.length - 1 ? `${e3} ` : e3
                },
                `${r2}:${e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(o.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: o2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(s.PY1.span, {
      className: u().messageSlot,
      initial: { height: 0, opacity: 0 },
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
      children: (0, a.jsx)(s.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: o2 ? "alert" : void 0,
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
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, messages: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = { ...c, ...i2 }, m2 = (0, r.useId)(), f2 = n2 ?? m2, [x2, _] = (0, r.useState)(false), [y, b] = (0, r.useState)(false), g = t2 ? `${f2}-description` : void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { htmlFor: f2, children: e2 }),
        (0, a.jsxs)("div", {
          className: u().shell,
          children: [
            (0, a.jsx)("input", {
              ...o2,
              ref: l2,
              id: f2,
              type: x2 ? "text" : "password",
              "data-reveal": y ? x2 ? "shown" : "hidden" : void 0,
              "aria-describedby": [o2["aria-describedby"], g].filter(Boolean).join(" ") || void 0,
              className: [u().input, s2].filter(Boolean).join(" ")
            }),
            (0, a.jsx)("button", {
              type: "button",
              onClick: () => {
                _((e3) => !e3), b(true);
              },
              "aria-label": x2 ? d2.hidePassword : d2.showPassword,
              "aria-pressed": x2,
              children: (0, a.jsx)(p, { slashed: x2 })
            })
          ]
        }),
        (0, a.jsx)(h, { id: g, text: t2, className: u().hint })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.cssFor("security-settings", [22346,42842,69308,79374,84830,88542]);
A.item("security-settings", {entry:71220, export:"SecuritySettings", kind:"block", tier:"pro", unresolved:[]});
})();