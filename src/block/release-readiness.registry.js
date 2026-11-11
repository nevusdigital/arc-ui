/* release-readiness (pro block) */
(function(){var A=globalThis.__ARC__;
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
A.reg(60932, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { ReleaseReadiness: () => y, default: () => j });
  var t = i(95155), s = i(12115), n = i(18310), r = i(80642), l = i(25354), o = i(64962), d = i(90467), c = i(92218), h = i(51288), p = i(20530), u = i(50680), m = i(67752), g = i(7770), f = i(66924), _ = i.n(f);
  let b = { brief: true, qa: false, changelog: false, owner: false }, w = [
    {
      id: "brief",
      label: "Product brief approved",
      detail: "Scope and acceptance criteria are final"
    },
    {
      id: "qa",
      label: "Quality checks passed",
      detail: "Build 2.4.0-rc.3 reviewed on staging"
    },
    {
      id: "changelog",
      label: "Changelog is ready",
      detail: "Release notes drafted for customers"
    },
    {
      id: "owner",
      label: "Release owner on call",
      detail: "Someone is available for the handoff"
    }
  ], v = [(0, m.MV)("emma-collins"), (0, m.MV)("marcus-johnson")];
  function y({ onRelease: e2 }) {
    let a2 = (0, s.useId)(), i2 = !!(0, n.I)(), [m2, f2] = (0, s.useState)(b), [j2, k] = (0, s.useState)(true), [x, N] = (0, s.useState)(false), [T, C] = (0, s.useState)(false), [A, R] = (0, s.useState)(""), S = Object.values(m2).filter(Boolean).length, L = w.length - S;
    async function $() {
      N(true), R("");
      try {
        await e2?.(), C(true);
      } catch {
        R("The release could not be started. Try again.");
      } finally {
        N(false);
      }
    }
    return (0, t.jsxs)("section", {
      className: _().release,
      "aria-labelledby": `${a2}-title`,
      children: [
        (0, t.jsxs)("header", {
          className: _().header,
          children: [
            (0, t.jsxs)("div", {
              className: _().titleBlock,
              children: [
                (0, t.jsx)("h2", { id: `${a2}-title`, children: "Release 2.4" }),
                (0, t.jsx)("p", {
                  children: "Atlas workspace \xB7 ships Thursday"
                })
              ]
            }),
            (0, t.jsx)("div", {
              className: _().owners,
              "aria-label": `Release owners: ${v.map((e3) => e3.name).join(" and ")}`,
              children: v.map(
                (e3) => (0, t.jsx)(
                  c.e,
                  {
                    name: e3.name,
                    src: e3.src,
                    size: "sm",
                    "aria-hidden": "true"
                  },
                  e3.id
                )
              )
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: _().progress,
          children: [
            (0, t.jsxs)("div", {
              className: _().progressMeta,
              children: [
                (0, t.jsx)("span", {
                  "aria-live": "polite",
                  children: T ? "Release in progress" : L ? `${L} ${1 === L ? "check" : "checks"} left` : "Ready to ship"
                }),
                (0, t.jsxs)("span", {
                  className: _().count,
                  children: [S, " of ", w.length]
                })
              ]
            }),
            (0, t.jsx)("div", {
              className: _().track,
              role: "progressbar",
              "aria-label": "Readiness",
              "aria-valuemin": 0,
              "aria-valuemax": w.length,
              "aria-valuenow": S,
              children: (0, t.jsx)("span", {
                className: _().fill,
                "data-complete": S === w.length || void 0,
                style: {
                  transform: `translateX(${(S / w.length - 1) * 100}%)`
                }
              })
            })
          ]
        }),
        (0, t.jsx)("ul", {
          className: _().tasks,
          "aria-label": "Before you ship",
          children: w.map((e3) => {
            let i3 = m2[e3.id];
            return (0, t.jsxs)(
              "li",
              {
                className: _().task,
                "data-done": i3 || void 0,
                children: [
                  (0, t.jsx)(p.S, {
                    id: `${a2}-${e3.id}`,
                    checked: i3,
                    disabled: T,
                    onCheckedChange: (a3) => f2((i4) => ({ ...i4, [e3.id]: true === a3 })),
                    "aria-label": e3.label,
                    "aria-describedby": `${a2}-${e3.id}-detail`
                  }),
                  (0, t.jsxs)("label", {
                    htmlFor: `${a2}-${e3.id}`,
                    className: _().taskCopy,
                    children: [
                      (0, t.jsx)("span", {
                        className: _().taskLabel,
                        children: e3.label
                      }),
                      (0, t.jsx)("span", {
                        id: `${a2}-${e3.id}-detail`,
                        className: _().taskDetail,
                        children: e3.detail
                      })
                    ]
                  })
                ]
              },
              e3.id
            );
          })
        }),
        (0, t.jsxs)("footer", {
          className: _().footer,
          children: [
            (0, t.jsx)(u.d, {
              checked: j2,
              onCheckedChange: k,
              label: "Notify #releases",
              disabled: T
            }),
            (0, t.jsxs)("div", {
              className: _().footerActions,
              children: [
                T && (0, t.jsx)(h.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: function() {
                    f2(b), C(false), R("");
                  },
                  children: "Reset"
                }),
                (0, t.jsx)(h.$, {
                  size: "sm",
                  disabled: S < w.length || T,
                  loading: x,
                  onClick: () => void $(),
                  children: T ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(o.A, { size: 16, "aria-hidden": "true" }),
                      "Started"
                    ]
                  }) : (0, t.jsxs)(t.Fragment, {
                    children: [
                      "Start release",
                      (0, t.jsx)(d.A, { size: 16, "aria-hidden": "true" })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, t.jsx)(r.N, {
          initial: false,
          children: (A || T) && (0, t.jsx)(
            l.PY1.div,
            {
              className: _().message,
              initial: !i2 && { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: i2 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
              transition: i2 ? { duration: 0 } : {
                height: g.T.spring.smooth,
                opacity: {
                  duration: g.T.duration.fast,
                  ease: [...g.T.ease.standard]
                }
              },
              children: (0, t.jsx)("p", {
                className: A ? _().error : _().success,
                role: A ? "alert" : "status",
                children: A || `Release 2.4 is rolling out.${j2 ? " #releases was notified." : ""}`
              })
            },
            "message"
          )
        })
      ]
    });
  }
  let j = y;
}

__m(__module,__exports,__require);
});
A.regCss(66924, ".release{box-sizing:border-box;width:min(100%,560px);min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.release h2,.release p,.release ul{margin:0}\n.release ul{padding:0;list-style:none}\n.header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 20px 12px}\n@media (max-width:420px){.error,.footer,.header,.progress,.success,.task{padding-inline:16px}\n.titleBlock{display:grid;min-width:0;gap:2px}\n.titleBlock h2{font-size:var(--text-base);font-weight:500;letter-spacing:-.01em;line-height:1.4}\n.titleBlock p{color:var(--text-muted)}\n.owners{display:flex;flex:none}\n.owners>*+*{margin-left:-6px;box-shadow:0 0 0 2px var(--surface)}\n.progress{display:grid;gap:8px;padding:0 20px 16px}\n.progressMeta{display:flex;justify-content:space-between;gap:12px;color:var(--text-secondary)}\n.count{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.track{height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.fill{display:block;height:100%;border-radius:inherit;background:var(--accent);transition:transform var(--duration-spring) var(--ease-spring),background-color var(--duration-standard) var(--ease-standard)}\n.fill[data-complete]{background:var(--success)}\n@media (prefers-reduced-motion:reduce){.fill,.taskLabel,.task{transition:none}\n.tasks{border-top:1px solid var(--border)}\n.task{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:start;gap:4px;padding:12px 20px;transition:background-color var(--duration-fast) var(--ease-standard)}\n.task>:first-child{margin:-12px 0 -12px -13px}\n.task+.task{border-top:1px solid var(--border-subtle)}\n@media (hover:hover) and (pointer:fine){.task:hover{background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}\n.task[data-done] .taskLabel{color:var(--text-secondary)}\n.taskCopy{display:grid;min-width:0;gap:1px;padding-top:1px;cursor:pointer}\n.taskLabel{font-weight:500;transition:color var(--duration-fast) var(--ease-standard)}\n.taskDetail{color:var(--text-muted);font-size:var(--text-xs)}\n.footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 16px;padding:12px 20px;border-top:1px solid var(--border)}\n.footerActions{display:flex;align-items:center;gap:8px;margin-left:auto}\n.message{overflow:hidden}\n.error,.success{padding:0 20px 14px;font-size:var(--text-xs)}\n.success{color:var(--text-secondary)}\n.error{color:var(--danger)}", {"release":"release","header":"header","error":"error","footer":"footer","progress":"progress","success":"success","task":"task","titleBlock":"titleBlock","owners":"owners","progressMeta":"progressMeta","count":"count","track":"track","fill":"fill","taskLabel":"taskLabel","tasks":"tasks","taskCopy":"taskCopy","taskDetail":"taskDetail","footerActions":"footerActions","message":"message"});
A.cssFor("release-readiness", [42842,66924]);
A.item("release-readiness", {entry:60932, export:"ReleaseReadiness", kind:"block", tier:"pro", unresolved:[]});
})();