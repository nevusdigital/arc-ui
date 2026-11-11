function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { bL: () => j });
  var n = a(12115), r = a(70379), l = a(47527), i = a(68599), s = a(59322), o = a(63509), c = a(55897), d = a(95155), u = Object.defineProperty, p = (e2, t2) => u(e2, "name", { value: t2, configurable: true }), m = "Switch", [h, _] = (0, i.A)(m), [f, b] = h(m);
  function y(e2) {
    let {
      __scopeSwitch: t2,
      checked: a2,
      children: r2,
      defaultChecked: l2,
      disabled: i2,
      form: o2,
      name: c2,
      onCheckedChange: u2,
      required: p2,
      value: h2 = "on",
      internal_do_not_use_render: _2
    } = e2, [b2, y2] = (0, s.i)({
      prop: a2,
      defaultProp: l2 ?? false,
      onChange: u2,
      caller: m
    }), [x2, j2] = n.useState(null), [v2, w2] = n.useState(null), N = n.useRef(false), [S, T] = n.useReducer((e3) => e3 + 1, 0), R = !x2 || !!o2 || !!x2.closest("form"), P = {
      checked: b2,
      setChecked: y2,
      disabled: i2,
      control: x2,
      setControl: j2,
      name: c2,
      form: o2,
      value: h2,
      hasConsumerStoppedPropagationRef: N,
      userInteractionCount: S,
      onUserInteraction: T,
      required: p2,
      defaultChecked: l2,
      isFormControl: R,
      bubbleInput: v2,
      setBubbleInput: w2
    };
    return (0, d.jsx)(f, { scope: t2, ...P, children: g(_2) ? _2(P) : r2 });
  }
  p(y, "SwitchProvider");
  var x = n.forwardRef(
    p(function({ __scopeSwitch: e2, onClick: t2, ...a2 }, i2) {
      let {
        control: s2,
        form: o2,
        value: u2,
        disabled: m2,
        checked: h2,
        required: _2,
        setControl: f2,
        setChecked: y2,
        hasConsumerStoppedPropagationRef: x2,
        onUserInteraction: j2,
        isFormControl: v2,
        bubbleInput: g2
      } = b("SwitchTrigger", e2), N = (0, l.s)(i2, f2), S = n.useRef(h2);
      return n.useEffect(() => {
        let e3 = o2 ? s2?.ownerDocument.getElementById(o2) : s2?.form;
        if (e3 instanceof HTMLFormElement) {
          let t3 = p(() => y2(S.current), "reset");
          return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
        }
      }, [s2, o2, y2]), (0, d.jsx)(c.sG.button, {
        type: "button",
        role: "switch",
        "aria-checked": h2,
        "aria-required": _2,
        "data-state": w(h2),
        "data-disabled": m2 ? "" : void 0,
        disabled: m2,
        value: u2,
        ...a2,
        ref: N,
        onClick: (0, r.mK)(t2, (e3) => {
          j2(), y2((e4) => !e4), g2 && v2 && (x2.current = e3.isPropagationStopped(), x2.current || e3.stopPropagation());
        })
      });
    }, "SwitchTrigger")
  ), j = n.forwardRef(
    p(function(e2, t2) {
      let {
        __scopeSwitch: a2,
        name: n2,
        checked: r2,
        defaultChecked: l2,
        required: i2,
        disabled: s2,
        value: o2,
        onCheckedChange: c2,
        form: u2,
        ...p2
      } = e2;
      return (0, d.jsx)(y, {
        __scopeSwitch: a2,
        checked: r2,
        defaultChecked: l2,
        disabled: s2,
        required: i2,
        onCheckedChange: c2,
        name: n2,
        form: u2,
        value: o2,
        internal_do_not_use_render: ({ isFormControl: e3 }) => (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(x, { ...p2, ref: t2, __scopeSwitch: a2 }),
            e3 && (0, d.jsx)(v, { __scopeSwitch: a2 })
          ]
        })
      });
    }, "Switch")
  ), v = n.forwardRef(
    p(function({ __scopeSwitch: e2, onClick: t2, ...a2 }, i2) {
      let {
        control: s2,
        hasConsumerStoppedPropagationRef: u2,
        userInteractionCount: p2,
        checked: m2,
        defaultChecked: h2,
        required: _2,
        disabled: f2,
        name: y2,
        value: x2,
        form: j2,
        bubbleInput: v2,
        setBubbleInput: g2
      } = b("SwitchBubbleInput", e2), w2 = (0, l.s)(i2, g2), N = (0, o.X)(s2), S = n.useRef(false), T = n.useRef(m2), R = n.useRef(p2);
      n.useEffect(() => {
        if (!v2) return;
        let e3 = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "checked"
        ).set, t3 = p2 !== R.current;
        R.current = p2;
        let a3 = T.current !== m2;
        T.current = m2;
        let n2 = !(t3 && u2.current);
        if (a3 && e3) {
          S.current = !t3;
          let a4 = new Event("click", { bubbles: n2 });
          e3.call(v2, m2), v2.dispatchEvent(a4), S.current = false;
        }
      }, [v2, m2, u2, p2]);
      let P = n.useRef(m2);
      return (0, d.jsx)(c.sG.input, {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: h2 ?? P.current,
        required: _2,
        disabled: f2,
        name: y2,
        value: x2,
        form: j2,
        ...a2,
        tabIndex: -1,
        ref: w2,
        onClick: (0, r.mK)(t2, (e3) => {
          S.current && e3.stopPropagation();
        }),
        style: {
          ...a2.style,
          ...N,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          transform: "translateX(-100%)"
        }
      });
    }, "SwitchBubbleInput")
  );
  function g(e2) {
    return "function" == typeof e2;
  }
  function w(e2) {
    return e2 ? "checked" : "unchecked";
  }
  p(g, "isFunction"), p(w, "getState");
}

__m(__module,__exports,__require);
}