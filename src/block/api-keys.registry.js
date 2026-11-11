/* api-keys (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
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
A.reg(42516, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ApiKeys: () => B, default: () => W });
  var s = a(95155), i = a(12115), n = a(80642), r = a(79196), o = a(25354), l = a(28245), c = a(92171), d = a(18310), u = a(11012), p = a(12363), h = a(2125), m = a(92218), y = a(90034), f = a(51288), _ = a(20530), x = a(73474), v = a(70614), k = a(35978), j = a(66558), g = a(7770), b = a(68764), N = a.n(b);
  let w = { name: "Sofia Ramirez", photo: "media/people/sofia-ramirez.svg" }, T = [
    {
      id: "payments:write",
      description: "Create, capture, and refund payments"
    },
    {
      id: "customers:read",
      description: "Read customers and saved payment methods"
    },
    {
      id: "invoices:write",
      description: "Draft, finalize, and send invoices"
    },
    {
      id: "reports:read",
      description: "Download balance and payout reports"
    }
  ], S = [
    {
      id: "production",
      name: "Production server",
      env: "live",
      last4: "4f2a",
      scopes: ["payments:write", "customers:read", "invoices:write"],
      created: "Mar 4, 2026",
      used: "2 min ago",
      source: "34.201.18.7, Ashburn",
      requests: 1284902,
      owner: {
        name: "Emma Collins",
        photo: "media/people/emma-collins.svg"
      }
    },
    {
      id: "billing",
      name: "Billing worker",
      env: "live",
      last4: "9c01",
      scopes: ["invoices:write", "reports:read"],
      created: "Jan 18, 2026",
      used: "3 hours ago",
      source: "18.184.72.40, Frankfurt",
      requests: 48211,
      owner: {
        name: "Marcus Johnson",
        photo: "media/people/marcus-johnson.svg"
      }
    },
    {
      id: "staging",
      name: "Staging",
      env: "test",
      last4: "d7e3",
      scopes: ["payments:write", "customers:read"],
      created: "Aug 30, 2026",
      used: "yesterday",
      source: "CI runner 10.0.12.8",
      requests: 9870,
      owner: {
        name: "Ava Mitchell",
        photo: "media/people/ava-mitchell.svg"
      }
    },
    {
      id: "export",
      name: "Analytics export",
      env: "live",
      last4: "2b8a",
      scopes: ["reports:read"],
      created: "Nov 2, 2025",
      used: "41 days ago",
      source: "52.17.230.9, Dublin",
      idle: "No requests in 41 days. Revoke it if nothing depends on it.",
      requests: 0,
      owner: {
        name: "Jasmine Brooks",
        photo: "media/people/jasmine-brooks.svg"
      }
    },
    {
      id: "local",
      name: "Local development",
      env: "test",
      last4: "6a55",
      scopes: [
        "payments:write",
        "customers:read",
        "invoices:write",
        "reports:read"
      ],
      created: "Sep 9, 2026",
      used: "never",
      requests: 0,
      owner: w
    }
  ], C = [
    { value: "test", label: "Test" },
    { value: "live", label: "Live" }
  ], $ = ["customers:read"], R = new Intl.NumberFormat("en-US"), P = [...g.T.ease.enter], I = [...g.T.ease.standard], E = { duration: 0 }, A = { opacity: 1, y: "0em", filter: "blur(0px)" }, F = { opacity: 0, y: "0.35em", filter: `blur(${g.T.blur.soft}px)` }, L = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${g.T.blur.subtle}px)`,
    transition: { duration: g.T.duration.fast, ease: I }
  }, Y = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${g.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: "0em", filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${g.T.blur.subtle}px)`
    })
  };
  function O({ text: e2, reduced: t2 }) {
    return (0, s.jsx)("span", {
      className: N().swap,
      children: (0, s.jsx)(n.N, {
        mode: "popLayout",
        initial: false,
        children: (0, s.jsx)(z, { text: e2, reduced: t2 }, e2)
      })
    });
  }
  function z({ text: e2, reduced: t2 }) {
    let a2 = (0, r.tF)();
    return (0, s.jsx)(o.PY1.span, {
      className: N().swapText,
      "aria-hidden": !a2 || void 0,
      initial: t2 ? { opacity: 0 } : F,
      animate: A,
      exit: t2 ? { opacity: 0, transition: E } : L,
      transition: t2 ? E : { duration: g.T.duration.standard, ease: P },
      children: e2
    });
  }
  function M({ value: e2, reduced: t2 }) {
    let [a2, r2] = (0, i.useState)({ value: e2, direction: 1 });
    return a2.value !== e2 && r2({ value: e2, direction: e2 > a2.value ? 1 : -1 }), (0, s.jsx)("span", {
      className: N().roll,
      "aria-hidden": "true",
      children: (0, s.jsx)(n.N, {
        mode: "popLayout",
        initial: false,
        custom: a2.direction,
        children: (0, s.jsx)(
          o.PY1.span,
          {
            custom: a2.direction,
            variants: Y,
            initial: !t2 && "enter",
            animate: "center",
            exit: t2 ? void 0 : "exit",
            transition: t2 ? E : {
              y: g.T.spring.snappy,
              opacity: { duration: g.T.duration.fast },
              filter: { duration: g.T.duration.fast }
            },
            children: e2
          },
          e2
        )
      })
    });
  }
  function q({ on: e2, delay: t2, reduced: a2 }) {
    return (0, s.jsx)(o.PY1.span, {
      className: N().strike,
      "aria-hidden": "true",
      initial: false,
      animate: { scaleX: +!!e2 },
      transition: a2 ? E : { duration: g.T.duration.considered, ease: P, delay: t2 }
    });
  }
  function D({
    item: e2,
    rowId: t2,
    open: a2,
    fresh: i2,
    revoked: r2,
    reduced: l2,
    onToggle: c2,
    onRevoke: d2,
    triggerRef: h2
  }) {
    let f2, _2 = `${t2}-detail`;
    return (0, s.jsx)(o.PY1.div, {
      id: t2,
      role: "listitem",
      className: N().row,
      "data-open": a2,
      "data-fresh": i2,
      "data-revoked": r2,
      initial: l2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: l2 ? { opacity: 0, transition: E } : {
        opacity: 0,
        height: 0,
        transition: {
          height: g.T.spring.smooth,
          opacity: { duration: g.T.duration.standard, ease: I }
        }
      },
      transition: l2 ? E : {
        height: g.T.spring.smooth,
        opacity: { duration: g.T.duration.standard, ease: P, delay: 0.08 }
      },
      children: (0, s.jsxs)("div", {
        className: N().rowInner,
        children: [
          (0, s.jsx)("span", { className: N().flash, "aria-hidden": "true" }),
          (0, s.jsxs)("button", {
            ref: h2,
            className: N().trigger,
            type: "button",
            "aria-expanded": a2,
            "aria-controls": a2 ? _2 : void 0,
            disabled: r2,
            onClick: c2,
            children: [
              (0, s.jsxs)("span", {
                className: N().identity,
                children: [
                  (0, s.jsxs)("span", {
                    className: N().nameLine,
                    children: [
                      (0, s.jsxs)("span", {
                        className: N().strikeable,
                        children: [
                          (0, s.jsx)("span", {
                            className: N().name,
                            children: e2.name
                          }),
                          (0, s.jsx)(q, { on: r2, delay: 0, reduced: l2 })
                        ]
                      }),
                      (0, s.jsx)(y.E, {
                        size: "sm",
                        tone: "live" === e2.env ? "success" : "neutral",
                        className: N().env,
                        children: "live" === e2.env ? "Live" : "Test"
                      })
                    ]
                  }),
                  (0, s.jsxs)("span", {
                    className: N().strikeable,
                    children: [
                      (0, s.jsx)("span", {
                        className: N().masked,
                        "aria-hidden": "true",
                        children: `sk_${e2.env}_\u2022\u2022\u2022\u2022${e2.last4}`
                      }),
                      (0, s.jsx)(q, { on: r2, delay: 0.08, reduced: l2 })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: N().srOnly,
                    children: `Key ending in ${e2.last4}${r2 ? ", revoked" : ""}`
                  })
                ]
              }),
              (0, s.jsxs)("span", {
                className: N().scopes,
                children: [
                  (0, s.jsx)("span", {
                    className: N().srOnly,
                    children: "Scopes: "
                  }),
                  e2.scopes.map(
                    (e3) => (0, s.jsx)("span", { className: N().chip, children: e3 }, e3)
                  )
                ]
              }),
              (0, s.jsxs)("span", {
                className: N().dates,
                children: [
                  (0, s.jsxs)("span", {
                    className: N().used,
                    children: [
                      e2.idle ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(u.A, {
                            className: N().idleIcon,
                            size: 13,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, s.jsx)("span", {
                            className: N().srOnly,
                            children: "Idle, "
                          })
                        ]
                      }) : null,
                      "never" === e2.used ? "Never used" : `Used ${e2.used}`
                    ]
                  }),
                  (0, s.jsxs)("span", {
                    className: N().created,
                    children: ["Created ", e2.created]
                  })
                ]
              }),
              (0, s.jsx)(p.A, {
                className: N().chevron,
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            ]
          }),
          (0, s.jsx)(n.N, {
            initial: false,
            children: a2 && (0, s.jsx)(
              o.PY1.div,
              {
                id: _2,
                className: N().detail,
                role: "region",
                "aria-label": `${e2.name} details`,
                initial: l2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: l2 ? { opacity: 0, transition: E } : {
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: g.T.spring.smooth,
                    opacity: { duration: g.T.duration.fast }
                  }
                },
                transition: l2 ? E : {
                  height: g.T.spring.smooth,
                  opacity: {
                    duration: g.T.duration.standard,
                    ease: P,
                    delay: 0.05
                  }
                },
                children: (0, s.jsxs)("div", {
                  className: N().detailInner,
                  children: [
                    (0, s.jsxs)("dl", {
                      className: N().facts,
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("dt", { children: "Created by" }),
                            (0, s.jsxs)("dd", {
                              children: [
                                (0, s.jsx)(m.e, {
                                  name: e2.owner.name,
                                  src: e2.owner.photo,
                                  size: "sm",
                                  "aria-hidden": "true"
                                }),
                                e2.owner.name
                              ]
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("dt", { children: "Last request" }),
                            (0, s.jsx)("dd", {
                              children: "never" === e2.used ? "No requests yet" : `${(f2 = e2.used).charAt(0).toUpperCase() + f2.slice(1)} from ${e2.source}`
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("dt", {
                              children: "Requests in 30 days"
                            }),
                            (0, s.jsx)("dd", {
                              className: N().number,
                              children: R.format(e2.requests)
                            })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: N().narrowFact,
                          children: [
                            (0, s.jsx)("dt", { children: "Created" }),
                            (0, s.jsx)("dd", { children: e2.created })
                          ]
                        }),
                        (0, s.jsxs)("div", {
                          className: `${N().narrowFact} ${N().scopeFact}`,
                          children: [
                            (0, s.jsx)("dt", { children: "Scopes" }),
                            (0, s.jsx)("dd", {
                              className: N().factChips,
                              children: e2.scopes.map(
                                (e3) => (0, s.jsx)(
                                  "span",
                                  { className: N().chip, children: e3 },
                                  e3
                                )
                              )
                            })
                          ]
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: N().revokeRow,
                      children: [
                        (0, s.jsx)("p", {
                          className: N().revokeNote,
                          children: e2.idle ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(u.A, {
                                className: N().idleIcon,
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, s.jsx)("span", { children: e2.idle })
                            ]
                          }) : (0, s.jsx)("span", {
                            children: "Requests signed with this key fail as soon as it is revoked."
                          })
                        }),
                        (0, s.jsx)(v.j, {
                          label: "Hold to revoke",
                          confirmedLabel: "Revoked",
                          onConfirm: d2
                        })
                      ]
                    })
                  ]
                })
              },
              "detail"
            )
          })
        ]
      })
    });
  }
  function B() {
    let e2 = (0, i.useId)(), t2 = (0, d.I)() ?? false, [a2, r2] = (0, i.useState)(S), [p2, m2] = (0, i.useState)(false), [y2, v2] = (0, i.useState)("form"), [b2, R2] = (0, i.useState)(""), [A2, F2] = (0, i.useState)("test"), [L2, Y2] = (0, i.useState)($), [z2, q2] = (0, i.useState)({}), [B2, W2] = (0, i.useState)(false), [K, G] = (0, i.useState)(""), [Q, U] = (0, i.useState)(null), [V, H] = (0, i.useState)(null), [X, Z] = (0, i.useState)([]), [J, ee] = (0, i.useState)(
      "Open a key to see who created it and where it was last used"
    ), {
      width: et,
      height: ea,
      trackRef: es,
      faceRef: ei,
      innerRef: en,
      arm: er
    } = (function(e3, t3) {
      let a3 = (0, l.d)("auto"), s2 = (0, l.d)("auto"), [n2, r3] = (0, i.useState)({ track: 0, face: 0, row: 0, inner: 0 }), o2 = (0, i.useRef)(null), d2 = (0, i.useRef)(null), u2 = (0, i.useRef)(null), p3 = (0, i.useRef)(e3), h2 = (0, i.useRef)(0), m3 = (0, i.useRef)({});
      return (0, i.useLayoutEffect)(() => {
        p3.current = e3;
      }, [e3]), (0, i.useEffect)(() => {
        let e4 = o2.current, t4 = d2.current, a4 = u2.current;
        if (!e4 || !t4 || !a4 || "u" < typeof ResizeObserver) return;
        let s3 = new ResizeObserver(
          () => r3((s4) => {
            let i2 = {
              track: e4.getBoundingClientRect().width,
              face: p3.current && s4.face ? s4.face : t4.getBoundingClientRect().width,
              row: t4.offsetHeight,
              inner: a4.getBoundingClientRect().height
            };
            return i2.track === s4.track && i2.face === s4.face && i2.row === s4.row && i2.inner === s4.inner ? s4 : i2;
          })
        );
        return [e4, t4, a4].forEach((e5) => s3.observe(e5)), () => s3.disconnect();
      }, []), (0, i.useEffect)(() => {
        if (!n2.track || !n2.face || !n2.row) return;
        let i2 = !t3 && performance.now() < h2.current, r4 = (e4, t4, a4) => {
          let s3 = e4.get();
          m3.current[a4]?.stop(), i2 && "number" == typeof s3 ? Math.abs(s3 - t4) > 0.5 && (m3.current[a4] = (0, c.i)(e4, t4, g.T.spring.smooth)) : e4.jump(t4);
        };
        r4(a3, e3 ? n2.track : n2.face, "width"), r4(s2, e3 ? Math.max(n2.inner, n2.row) : n2.row, "height");
      }, [e3, n2, t3, a3, s2]), (0, i.useEffect)(
        () => () => {
          m3.current.width?.stop(), m3.current.height?.stop();
        },
        []
      ), {
        width: a3,
        height: s2,
        trackRef: o2,
        faceRef: d2,
        innerRef: u2,
        arm: () => {
          h2.current = performance.now() + 900;
        }
      };
    })(p2, t2), eo = (0, i.useRef)(null), el = (0, i.useRef)(null), ec = (0, i.useRef)(null), ed = (0, i.useRef)(null), eu = (0, i.useRef)(/* @__PURE__ */ new Map()), ep = (0, i.useRef)(a2), eh = (0, i.useRef)([]), em = (0, i.useRef)(0), ey = (0, i.useRef)(0), ef = (0, i.useRef)(""), e_ = p2 && "reveal" === y2 ? "Key created" : "Create key";
    (0, i.useEffect)(() => {
      ep.current = a2;
    }, [a2]), (0, i.useEffect)(() => {
      let e3 = eh.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let ex = (e3, t3) => {
      eh.current.push(window.setTimeout(e3, t3));
    };
    function ev() {
      p2 && (em.current++, er(), m2(false), W2(false), "reveal" === y2 ? (U(null), ee(
        `${ef.current} added. Only its last four characters stay visible.`
      )) : ee("New key discarded"), eo.current?.focus({ preventScroll: true }));
    }
    return (0, s.jsxs)("section", {
      className: N().keys,
      "aria-labelledby": `${e2}-heading`,
      children: [
        (0, s.jsxs)("div", {
          className: N().top,
          children: [
            (0, s.jsxs)("header", {
              className: N().header,
              children: [
                (0, s.jsx)("h2", { id: `${e2}-heading`, children: "API keys" }),
                (0, s.jsx)("p", {
                  children: "Secret keys sign requests from your servers to the Halden API. Keep them out of browsers and source control."
                })
              ]
            }),
            (0, s.jsxs)("div", {
              ref: es,
              className: N().toolbar,
              onKeyDown: function(e3) {
                "Escape" === e3.key && p2 && (e3.stopPropagation(), ev());
              },
              children: [
                (0, s.jsxs)("p", {
                  className: N().count,
                  "data-hidden": p2,
                  inert: p2,
                  children: [
                    (0, s.jsx)(M, { value: a2.length, reduced: t2 }),
                    (0, s.jsx)("span", {
                      className: N().srOnly,
                      children: a2.length
                    }),
                    " active ",
                    1 === a2.length ? "key" : "keys"
                  ]
                }),
                (0, s.jsx)(o.PY1.div, {
                  className: N().shell,
                  "data-open": p2,
                  style: { width: et, height: ea },
                  children: (0, s.jsxs)("div", {
                    ref: en,
                    className: N().shellInner,
                    children: [
                      (0, s.jsxs)("div", {
                        ref: ei,
                        className: N().face,
                        children: [
                          (0, s.jsx)("button", {
                            ref: eo,
                            className: N().toggle,
                            type: "button",
                            "aria-label": p2 ? "Close" : "Create key",
                            "aria-expanded": p2,
                            "aria-controls": p2 ? `${e2}-panel` : void 0,
                            onClick: p2 ? ev : function() {
                              er(), v2("form"), R2(""), F2("test"), Y2($), q2({}), W2(false), m2(true), ee(
                                "Name the key, pick an environment, and choose its scopes"
                              ), requestAnimationFrame(
                                () => el.current?.focus({ preventScroll: true })
                              );
                            },
                            children: (0, s.jsx)(o.PY1.span, {
                              className: N().toggleIcon,
                              initial: false,
                              animate: { rotate: 45 * !!p2 },
                              transition: t2 ? E : g.T.spring.snappy,
                              children: (0, s.jsx)(h.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          }),
                          (0, s.jsx)("span", {
                            id: `${e2}-title`,
                            className: N().title,
                            role: p2 ? "heading" : void 0,
                            "aria-level": p2 ? 3 : void 0,
                            "aria-hidden": !p2 || void 0,
                            children: (0, s.jsx)(O, { text: e_, reduced: t2 })
                          })
                        ]
                      }),
                      (0, s.jsx)(n.N, {
                        initial: false,
                        children: p2 && (0, s.jsx)(
                          o.PY1.div,
                          {
                            id: `${e2}-panel`,
                            className: N().body,
                            role: "group",
                            "aria-labelledby": `${e2}-title`,
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: t2 ? E : {
                                duration: g.T.duration.standard + 0.04,
                                ease: P,
                                delay: 0.14
                              }
                            },
                            exit: {
                              opacity: 0,
                              transition: t2 ? E : { duration: 0.1, ease: I }
                            },
                            children: (0, s.jsx)(n.N, {
                              mode: "popLayout",
                              initial: false,
                              children: "form" === y2 ? (0, s.jsxs)(
                                o.PY1.form,
                                {
                                  className: N().form,
                                  noValidate: true,
                                  onSubmit: function(e3) {
                                    if (e3.preventDefault(), B2) return;
                                    let t3 = b2.trim(), a3 = {
                                      name: t3 ? void 0 : "Name the key so your team can tell it apart",
                                      scopes: L2.length ? void 0 : "Choose at least one scope"
                                    };
                                    if (q2(a3), a3.name || a3.scopes) {
                                      ee(a3.name ?? a3.scopes ?? ""), a3.name ? el.current?.focus() : ec.current?.querySelector("button")?.focus();
                                      return;
                                    }
                                    let s2 = ++em.current;
                                    W2(true), ee(`Generating ${t3}.`), ex(() => {
                                      if (s2 !== em.current) return;
                                      ey.current += 1;
                                      let e4 = (function(e5, t4) {
                                        let a5 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", s3 = 2166136261;
                                        for (let t5 of e5)
                                          s3 = Math.imul(
                                            s3 ^ t5.charCodeAt(0),
                                            16777619
                                          );
                                        let i2 = "";
                                        for (let e6 = 0; e6 < 40; e6++)
                                          s3 = Math.imul(
                                            (s3 = Math.imul(
                                              s3 ^ s3 >>> 16,
                                              2246822507
                                            )) ^ s3 >>> 13,
                                            3266489909
                                          ), s3 ^= s3 >>> 16, i2 += a5[(s3 >>> 0) % a5.length], s3 = s3 + 2654435769 | 0;
                                        return `sk_${t4}_${i2}`;
                                      })(
                                        `${t3}:${A2}:${ey.current}`,
                                        A2
                                      ), a4 = {
                                        id: `created-${ey.current}`,
                                        name: t3,
                                        env: A2,
                                        last4: e4.slice(-4),
                                        scopes: T.map(
                                          (e5) => e5.id
                                        ).filter(
                                          (e5) => L2.includes(e5)
                                        ),
                                        created: "Sep 22, 2026",
                                        used: "never",
                                        requests: 0,
                                        owner: w
                                      };
                                      ef.current = t3, er(), G(e4), r2((e5) => [a4, ...e5]), U(a4.id), W2(false), v2("reveal"), ee(
                                        `${t3} created. Copy the secret now, it will not be shown again.`
                                      ), requestAnimationFrame(
                                        () => ed.current?.querySelector("button")?.focus({
                                          preventScroll: true
                                        })
                                      );
                                    }, 720);
                                  },
                                  exit: {
                                    opacity: 0,
                                    transition: t2 ? E : {
                                      duration: g.T.duration.instant
                                    }
                                  },
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: N().fields,
                                      children: [
                                        (0, s.jsx)(k.p, {
                                          ref: el,
                                          label: "Name",
                                          placeholder: "Billing sync",
                                          autoComplete: "off",
                                          maxLength: 40,
                                          value: b2,
                                          error: z2.name,
                                          onChange: (e3) => {
                                            R2(e3.target.value), z2.name && q2((e4) => ({
                                              ...e4,
                                              name: void 0
                                            }));
                                          }
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: N().envField,
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: N().fieldLabel,
                                              "aria-hidden": "true",
                                              children: "Environment"
                                            }),
                                            (0, s.jsx)(j.A, {
                                              label: "Environment",
                                              value: A2,
                                              options: C,
                                              onValueChange: (e3) => F2(e3)
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("fieldset", {
                                      ref: ec,
                                      className: N().scopeSet,
                                      "aria-describedby": z2.scopes ? `${e2}-scope-error` : void 0,
                                      children: [
                                        (0, s.jsx)("legend", {
                                          children: "Scopes"
                                        }),
                                        (0, s.jsx)("div", {
                                          className: N().scopeGrid,
                                          children: T.map(
                                            (e3) => (0, s.jsx)(
                                              _.S,
                                              {
                                                label: e3.id,
                                                description: e3.description,
                                                checked: L2.includes(
                                                  e3.id
                                                ),
                                                onCheckedChange: (t3) => {
                                                  var a3, s2;
                                                  return a3 = e3.id, s2 = true === t3, void (Y2(
                                                    (e4) => s2 ? [
                                                      ...e4.filter(
                                                        (e5) => e5 !== a3
                                                      ),
                                                      a3
                                                    ] : e4.filter(
                                                      (e5) => e5 !== a3
                                                    )
                                                  ), s2 && z2.scopes && q2((e4) => ({
                                                    ...e4,
                                                    scopes: void 0
                                                  })));
                                                }
                                              },
                                              e3.id
                                            )
                                          )
                                        }),
                                        (0, s.jsx)(n.N, {
                                          initial: false,
                                          children: z2.scopes && (0, s.jsx)(
                                            o.PY1.p,
                                            {
                                              id: `${e2}-scope-error`,
                                              className: N().scopeError,
                                              role: "alert",
                                              initial: t2 ? { opacity: 0 } : {
                                                height: 0,
                                                opacity: 0
                                              },
                                              animate: {
                                                height: "auto",
                                                opacity: 1
                                              },
                                              exit: t2 ? {
                                                opacity: 0,
                                                transition: E
                                              } : {
                                                height: 0,
                                                opacity: 0
                                              },
                                              transition: t2 ? E : g.T.spring.smooth,
                                              children: (0, s.jsx)(
                                                "span",
                                                {
                                                  children: z2.scopes
                                                }
                                              )
                                            },
                                            "error"
                                          )
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: N().actions,
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: N().hint,
                                          children: (0, s.jsx)(O, {
                                            text: "live" === A2 ? "Live keys act on real payments and customers" : "Test keys only reach test data",
                                            reduced: t2
                                          })
                                        }),
                                        (0, s.jsx)(f.$, {
                                          type: "button",
                                          variant: "ghost",
                                          onClick: ev,
                                          children: "Cancel"
                                        }),
                                        (0, s.jsx)(f.$, {
                                          type: "submit",
                                          loading: B2,
                                          children: "Generate key"
                                        })
                                      ]
                                    })
                                  ]
                                },
                                "form"
                              ) : (0, s.jsxs)(
                                o.PY1.div,
                                {
                                  ref: ed,
                                  className: N().reveal,
                                  initial: t2 ? { opacity: 0 } : { opacity: 0, y: 8 },
                                  animate: { opacity: 1, y: 0 },
                                  transition: t2 ? E : {
                                    duration: g.T.duration.standard + 0.08,
                                    ease: P,
                                    delay: 0.06
                                  },
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: N().secretBlock,
                                      children: [
                                        (0, s.jsx)("span", {
                                          id: `${e2}-secret-label`,
                                          className: N().fieldLabel,
                                          children: "Secret key"
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: N().secretField,
                                          role: "group",
                                          "aria-labelledby": `${e2}-secret-label`,
                                          children: [
                                            (0, s.jsx)(o.PY1.code, {
                                              className: N().secret,
                                              initial: !t2 && {
                                                opacity: 0,
                                                filter: `blur(${g.T.blur.text}px)`
                                              },
                                              animate: {
                                                opacity: 1,
                                                filter: "blur(0px)"
                                              },
                                              transition: {
                                                duration: g.T.duration.considered,
                                                ease: P,
                                                delay: 0.14
                                              },
                                              children: K
                                            }),
                                            (0, s.jsx)(x.CopyButton, {
                                              value: K,
                                              label: "Copy",
                                              onCopied: () => ee(
                                                "Secret copied. Paste it into your secrets manager."
                                              )
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("p", {
                                      className: N().once,
                                      children: [
                                        (0, s.jsx)(u.A, {
                                          size: 16,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        }),
                                        (0, s.jsx)("span", {
                                          children: "Copy it now and keep it in your secrets manager. You will not see this key again after you close this panel."
                                        })
                                      ]
                                    }),
                                    (0, s.jsx)("div", {
                                      className: N().actions,
                                      children: (0, s.jsx)(f.$, {
                                        type: "button",
                                        onClick: ev,
                                        children: "Done"
                                      })
                                    })
                                  ]
                                },
                                "reveal"
                              )
                            })
                          },
                          "body"
                        )
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: N().list,
          role: "list",
          "aria-label": "Active keys",
          children: (0, s.jsx)(n.N, {
            initial: false,
            children: a2.map(
              (a3) => (0, s.jsx)(
                D,
                {
                  item: a3,
                  rowId: `${e2}-${a3.id}`,
                  open: V === a3.id,
                  fresh: Q === a3.id,
                  revoked: X.includes(a3.id),
                  reduced: t2,
                  onToggle: () => {
                    let e3;
                    H(e3 = V === a3.id ? null : a3.id), ee(
                      e3 ? `${a3.name} details opened` : `${a3.name} details closed`
                    );
                  },
                  onRevoke: () => {
                    Z((e3) => [...e3, a3.id]), ee(`${a3.name} revoked.`), ex(() => {
                      let t3 = ep.current, s2 = t3.findIndex((e3) => e3.id === a3.id), i2 = t3[s2 + 1] ?? t3[s2 - 1], n2 = document.getElementById(`${e2}-${a3.id}`)?.contains(document.activeElement) ?? false;
                      r2((e3) => e3.filter((e4) => e4.id !== a3.id)), Z((e3) => e3.filter((e4) => e4 !== a3.id)), H((e3) => e3 === a3.id ? null : e3), n2 && requestAnimationFrame(
                        () => (i2 ? eu.current.get(i2.id) : eo.current)?.focus({
                          preventScroll: true
                        })
                      );
                    }, 900);
                  },
                  triggerRef: (e3) => {
                    e3 ? eu.current.set(a3.id, e3) : eu.current.delete(a3.id);
                  }
                },
                a3.id
              )
            )
          })
        }),
        (0, s.jsx)(n.N, {
          initial: false,
          children: 0 === a2.length && (0, s.jsxs)(
            o.PY1.div,
            {
              className: N().empty,
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: t2 ? E : { duration: g.T.duration.standard, delay: 0.3 }
              },
              exit: { opacity: 0, transition: E },
              children: [
                (0, s.jsx)("p", { children: "No active keys" }),
                (0, s.jsx)("span", {
                  children: "Requests to the Halden API fail until you create one."
                }),
                (0, s.jsx)(f.$, {
                  type: "button",
                  variant: "secondary",
                  size: "sm",
                  onClick: function() {
                    r2(S), ee("Sample keys restored");
                  },
                  children: "Restore sample keys"
                })
              ]
            },
            "empty"
          )
        }),
        (0, s.jsx)("footer", {
          className: N().srOnly,
          children: (0, s.jsx)("p", {
            role: "status",
            "aria-live": "polite",
            children: J
          })
        })
      ]
    });
  }
  let W = B;
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
A.regCss(68764, ".keys{--mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;--inline:20px;--tint:color-mix(in oklab,var(--surface-muted) 80%,var(--surface));container:keys/inline-size;width:min(100%,880px);min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.top{padding:16px var(--inline)}\n@container keys (max-width: 540px){.empty,.footer,.list,.top{--inline:16px}\n.header h2{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.header p{max-width:520px;margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.toolbar{container:toolbar/inline-size;display:grid;margin-top:16px}\n.toolbar>*{grid-area:1/1}\n.count{display:flex;height:36px;align-items:center;align-self:start;justify-self:start;gap:4px;margin:0;color:var(--text-secondary);font-size:var(--text-sm);transition:opacity var(--duration-standard) var(--ease-standard) .1s,visibility 0s linear 0s}\n.count[data-hidden=true]{opacity:0;visibility:hidden;transition:opacity var(--duration-instant) var(--ease-standard),visibility 0s linear var(--duration-instant)}\n@media (prefers-reduced-motion:reduce){.chevron,.count,.dates,.env,.flash,.masked,.name,.rowInner,.scopes,.shell,.toggle,.trigger{transition:none}\n.roll{position:relative;display:inline-flex;color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums}\n.roll>span{display:inline-block}\n.shell{--well:color-mix(in oklab,var(--foreground) 5.5%,var(--surface));position:relative;z-index:1;align-self:start;justify-self:end;max-width:100%;overflow:clip;border-radius:var(--radius-control);background:var(--well);transition:background-color var(--duration-fast) var(--ease-standard)}\n.shell[data-open=false]{cursor:pointer}\n@media (hover:hover) and (pointer:fine){.shell[data-open=false]:hover{background:color-mix(in oklab,var(--foreground) 9%,var(--surface))}\n.shell[data-open=false]:active{background:color-mix(in oklab,var(--foreground) 11%,var(--surface))}\n.shell[data-open=false]:has(.toggle:focus-visible){background:color-mix(in oklab,var(--foreground) 9%,var(--surface))}\n.shell[data-open=false] .toggle:after{content:\"\";position:absolute;inset:0}\n.shell[data-open=true] .toggle:focus-visible{background:color-mix(in oklab,var(--foreground) 8%,transparent)}\n@media (hover:hover) and (pointer:fine){.shell[data-open=true] .toggle:hover{background:color-mix(in oklab,var(--foreground) 8%,transparent)}\n.shell[data-open=true] .toggle:active{background:color-mix(in oklab,var(--foreground) 11%,transparent)}\n.toggle{display:grid;width:28px;height:28px;flex:none;place-items:center;border:0;border-radius:var(--radius-pill);padding:0;background:transparent;color:var(--foreground);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.toggle:focus-visible{outline:none}\n.shellInner{display:flex;flex-direction:column;align-items:flex-start}\n.face{display:flex;width:max-content;height:36px;flex:none;align-items:center;gap:2px;padding:0 14px 0 6px}\n.toggleIcon{display:grid;place-items:center}\n.title{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);white-space:nowrap}\n.swap{position:relative;display:inline-flex}\n.swapText{display:inline-block;white-space:nowrap}\n.body{position:relative;width:100cqw;flex:none;margin-inline-start:calc(100% - 100cqw);padding:4px 14px 14px}\n.form,.reveal{display:grid;gap:16px}\n.fields{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:16px}\n@container toolbar (max-width: 560px){.fields,.scopeGrid{grid-template-columns:minmax(0,1fr)}\n.envField{display:grid;gap:8px}\n.envField>:last-child{justify-self:start}\n.fieldLabel{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.scopeSet{min-width:0;margin:0;border:0;padding:0}\n.scopeSet legend{margin-bottom:2px;padding:0;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.scopeSet .scopeGrid label{font-family:var(--mono);font-size:var(--text-xs);font-weight:500;letter-spacing:0}\n.scopeGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:16px;margin-inline-start:-13px}\n.scopeError{overflow:hidden;margin:0;color:var(--danger);font-size:var(--text-xs);line-height:var(--leading-body)}\n.scopeError span{display:block;padding-top:4px}\n.actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:8px}\n.hint{min-width:0;margin-right:auto;padding-right:8px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.hint{flex-basis:100%;padding:0 0 4px}\n.secretBlock{display:grid;gap:8px}\n.secretField{display:flex;min-height:48px;align-items:center;gap:12px;border:1px solid color-mix(in oklab,var(--accent) 45%,var(--border));border-radius:12px;padding:6px 6px 6px 14px;background:var(--surface)}\n.secret{flex:1;min-width:0;color:var(--foreground);font-family:var(--mono);font-size:var(--text-sm);letter-spacing:0;line-height:1.5;overflow-wrap:anywhere;user-select:all;-webkit-user-select:all}\n.once{display:flex;align-items:flex-start;gap:8px;margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.idleIcon,.once svg{flex:none;color:var(--warning)}\n.once svg{margin-top:2px}\n.list{border-top:1px solid var(--border)}\n.row{position:relative;overflow:hidden}\n.row+.row .rowInner{border-top:1px solid var(--border-subtle)}\n.row[data-open=true] .rowInner{background:var(--tint)}\n.row[data-fresh=true] .flash{opacity:1;transition:none}\n@media (hover:hover) and (pointer:fine){.row[data-open=false] .trigger:hover:not(:disabled){background:var(--tint)}\n.row[data-open=true] .chevron{color:var(--foreground);transform:rotate(180deg)}\n.row[data-revoked=true] .masked,.row[data-revoked=true] .name{color:var(--text-muted)}\n.row[data-revoked=true] .chevron,.row[data-revoked=true] .dates,.row[data-revoked=true] .env,.row[data-revoked=true] .scopes{opacity:.4}\n.rowInner{position:relative;transition:background-color var(--duration-fast) var(--ease-standard)}\n.flash{position:absolute;inset:0;background:var(--accent-subtle);opacity:0;pointer-events:none;transition:opacity 1.2s var(--ease-standard) .3s}\n.trigger{position:relative;display:grid;width:100%;grid-template-columns:minmax(0,1.25fr) minmax(0,1.15fr) minmax(128px,.6fr) 16px;align-items:center;column-gap:20px;border:0;padding:12px var(--inline);background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.trigger:focus-visible{background:var(--tint)}\n.trigger:disabled{cursor:default}\n@container keys (max-width: 700px){.trigger{grid-template-columns:minmax(0,1fr) auto 16px;column-gap:12px}\n.identity{display:grid;min-width:0;justify-items:start;gap:2px}\n.nameLine{display:flex;max-width:100%;min-width:0;align-items:center;gap:8px}\n.strikeable{position:relative;display:block;min-width:0;max-width:100%}\n.name{overflow:hidden;font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis}\n.masked,.name{display:block;line-height:var(--leading-body);white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.masked{color:var(--text-muted);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0}\n.strike{position:absolute;top:52%;right:-2px;left:-2px;height:1.5px;border-radius:1px;background:var(--text-secondary);transform-origin:0 50%;pointer-events:none}\n.env{flex:none}\n.env,.scopes{transition:opacity var(--duration-standard) var(--ease-standard)}\n.scopes{display:flex;min-width:0;flex-wrap:wrap;gap:4px}\n.created,.scopes{display:none}\n.chip{display:inline-flex;height:22px;align-items:center;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 8px;color:var(--text-secondary);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;white-space:nowrap}\n.dates{display:grid;min-width:0;gap:2px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);transition:opacity var(--duration-standard) var(--ease-standard)}\n.dates{justify-items:end;text-align:right}\n.used{display:inline-flex;align-items:center;gap:4px;color:var(--text-secondary);font-size:var(--text-xs)}\n.used{white-space:nowrap}\n.chevron{color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard)}\n.detail{overflow:hidden}\n.detailInner{display:grid;gap:16px;padding:0 var(--inline) 16px}\n.facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px 24px;margin:0}\n.facts>div{display:grid;min-width:0;align-content:start;gap:4px}\n.facts dt{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.facts dd{display:flex;min-width:0;min-height:28px;align-items:center;gap:8px;margin:0;font-size:var(--text-sm);line-height:var(--leading-body)}\n.facts{grid-template-columns:repeat(2,minmax(0,1fr))}\n.facts{grid-template-columns:minmax(0,1fr)}\n.number{font-variant-numeric:tabular-nums}\n.revokeRow{display:flex;align-items:center;justify-content:space-between;gap:12px 24px;border-top:1px solid var(--border-subtle);padding-top:12px}\n.revokeRow>button{flex:none}\n.footer,.revokeRow{flex-direction:column;align-items:flex-start}\n.revokeNote{display:flex;max-width:420px;align-items:flex-start;gap:8px;margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.revokeNote svg{margin-top:2px}\n.empty{display:grid;justify-items:center;gap:4px;padding:40px 24px;text-align:center}\n.empty p{margin:0;font-size:var(--text-sm);font-weight:500}\n.empty span{color:var(--text-muted);font-size:var(--text-sm)}\n.empty button{margin-top:8px}\n.footer{display:flex;min-height:44px;align-items:center;justify-content:space-between;gap:24px;border-top:1px solid var(--border);padding:10px var(--inline);color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.footer>span{flex:none}\n.footer p{min-width:0;overflow:hidden;margin:0;color:var(--text-secondary);text-align:right;text-overflow:ellipsis;white-space:nowrap}\n.footer{gap:2px}\n.footer p{text-align:left;white-space:normal}\n.narrowFact{display:none!important}\n.narrowFact{display:grid!important}\n.factChips{flex-wrap:wrap;gap:4px!important}\n.scopeFact{grid-column:1/-1}\n.scopeFact{grid-column:auto}", {"keys":"keys","srOnly":"srOnly","top":"top","empty":"empty","footer":"footer","list":"list","header":"header","toolbar":"toolbar","count":"count","chevron":"chevron","dates":"dates","env":"env","flash":"flash","masked":"masked","name":"name","rowInner":"rowInner","scopes":"scopes","shell":"shell","toggle":"toggle","trigger":"trigger","roll":"roll","shellInner":"shellInner","face":"face","toggleIcon":"toggleIcon","title":"title","swap":"swap","swapText":"swapText","body":"body","form":"form","reveal":"reveal","fields":"fields","scopeGrid":"scopeGrid","envField":"envField","fieldLabel":"fieldLabel","scopeSet":"scopeSet","scopeError":"scopeError","actions":"actions","hint":"hint","secretBlock":"secretBlock","secretField":"secretField","secret":"secret","once":"once","idleIcon":"idleIcon","row":"row","identity":"identity","nameLine":"nameLine","strikeable":"strikeable","strike":"strike","created":"created","chip":"chip","used":"used","detail":"detail","detailInner":"detailInner","facts":"facts","number":"number","revokeRow":"revokeRow","revokeNote":"revokeNote","narrowFact":"narrowFact","factChips":"factChips","scopeFact":"scopeFact"});
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
A.cssFor("api-keys", [14290,22346,42842,68764,88542]);
A.item("api-keys", {entry:42516, export:"ApiKeys", kind:"block", tier:"pro", unresolved:[]});
})();