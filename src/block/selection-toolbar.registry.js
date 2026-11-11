/* selection-toolbar (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(1668, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"password-field_field__YmVr4",shell:"password-field_shell__Jn9yt",input:"password-field_input__oFxHZ","resolve-shown":"password-field_resolve-shown__rImNi","resolve-hidden":"password-field_resolve-hidden__Gl28Q",messageSlot:"password-field_messageSlot__xMwqs",hint:"password-field_hint__DMc0w",words:"password-field_words__CjuNB",word:"password-field_word__00TzP",srOnly:"password-field_srOnly__bxC4N"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(1910, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "file-archive",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
          key: "4pqfef"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M8 12v-1", key: "1ej8lb" }],
      ["path", { d: "M8 18v-2", key: "qcmpov" }],
      ["path", { d: "M8 7V6", key: "1nbb54" }],
      ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(5442, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { m: () => B });
  var n = i(95155), a = i(12115), r = i(28245), s = i(92171), o = i(55809), l = i(25354), u = i(80642), d = i(18310), c = i(35484), p = i(7770), f = i(54210), h = i.n(f);
  let m = { kind: "idle" }, _ = {
    pressed: (e2) => ({
      scale: (e2.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97,
      transition: {
        duration: p.T.duration.instant,
        ease: [...p.T.ease.standard]
      }
    })
  }, y = p.T.spring.morph, g = { duration: p.T.duration.instant }, x = `blur(${p.T.blur.soft}px)`, b = { duration: p.T.duration.standard, ease: [...p.T.ease.enter] }, w = { duration: p.T.duration.fast, ease: [...p.T.ease.standard] }, T = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, v = { ...T, opacity: 0 }, j = { opacity: 0, transition: g }, N = { opacity: 0, y: 4, filter: x }, k = { opacity: 0, y: -3, filter: x, transition: w }, $ = { opacity: 0, scale: 0.5, filter: x }, E = { ...$, transition: w }, P = { scale: p.T.spring.snappy, opacity: b, filter: b }, S = { ...$, clipPath: "inset(0% 100% 0% 0%)" }, R = { ...T, clipPath: "inset(0% 0% 0% 0%)" }, L = {
    scale: { type: "spring", visualDuration: 0.45, bounce: 0 },
    opacity: b,
    filter: b,
    clipPath: { duration: 0.36, ease: [...p.T.ease.standard], delay: 0.02 }
  }, Y = (e2, t2, i2 = 0) => e2.map((e3, n2) => ({ id: `${t2}:${n2}`, char: e3, order: n2, lead: i2 }));
  function z({ text: e2, gap: t2, reduced: i2 }) {
    let d2, c2, f2, m2 = (function(e3) {
      let [t3, i3] = (0, a.useState)(() => ({
        text: e3,
        seq: 0,
        glyphs: Y([...e3], 0)
      }));
      if (t3.text === e3) return t3.glyphs;
      let n2 = [...t3.text], r2 = [...e3], s2 = 0, o2 = 0;
      for (; s2 < n2.length && s2 < r2.length && n2[s2] === r2[s2]; ) s2++;
      for (; o2 < n2.length - s2 && o2 < r2.length - s2 && n2[n2.length - 1 - o2] === r2[r2.length - 1 - o2]; )
        o2++;
      s2 < 2 && (s2 = 0), o2 < 2 && (o2 = 0);
      let l2 = t3.seq + 1, u2 = [
        ...t3.glyphs.slice(0, s2),
        ...Y(r2.slice(s2, r2.length - o2), l2, 0.1 * !n2.length),
        ...t3.glyphs.slice(t3.glyphs.length - o2)
      ];
      return i3({ text: e3, seq: l2, glyphs: u2 }), u2;
    })(e2), _2 = (0, a.useRef)(null), x2 = `${+!!t2}${e2}`, w2 = (d2 = (0, r.d)("auto"), c2 = (0, a.useRef)(x2), f2 = (0, a.useRef)(0), (0, a.useLayoutEffect)(() => {
      c2.current !== x2 && (c2.current = x2, f2.current = performance.now() + 700);
    }, [x2]), (0, a.useEffect)(() => {
      let e3 = _2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = false, n2 = new ResizeObserver(([n3]) => {
        if (!n3) return;
        let a2 = n3.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth;
        if (!t3 || i2 || performance.now() > f2.current) {
          t3 = true, d2.jump(a2);
          return;
        }
        (0, s.i)(d2, a2, y);
      });
      return n2.observe(e3, { box: "border-box" }), () => n2.disconnect();
    }, [_2, i2, d2]), (0, o.G)(d2, (e3) => "number" == typeof e3 ? Math.max(0, e3) : e3));
    return (0, n.jsx)(l.PY1.span, {
      className: h().morph,
      style: { width: w2 },
      "aria-hidden": "true",
      children: (0, n.jsx)("span", {
        ref: _2,
        className: h().glyphs,
        "data-gap": t2 || void 0,
        children: (0, n.jsx)(u.N, {
          mode: "popLayout",
          initial: false,
          children: m2.map(
            (e3) => (0, n.jsx)(
              l.PY1.span,
              {
                className: h().glyph,
                layout: !i2 && "position",
                layoutDependency: x2,
                initial: i2 ? v : N,
                animate: T,
                exit: i2 ? j : k,
                transition: i2 ? g : {
                  ...b,
                  delay: e3.lead + Math.min(e3.order * p.T.stagger.char, 0.12),
                  layout: y
                },
                children: e3.char
              },
              e3.id
            )
          )
        })
      })
    });
  }
  function B({
    states: e2,
    value: t2,
    defaultValue: i2,
    onValueChange: o2,
    onAction: f2,
    failureLabel: x2 = "Try again",
    size: b2 = "md",
    className: w2,
    disabled: N2,
    style: k2,
    ...Y2
  }) {
    let D = e2[0]?.id ?? "", [M, O] = (0, a.useState)(i2 ?? D), [I, W] = (0, a.useState)(m), [q, C] = (0, a.useState)(""), A = (0, a.useRef)(null), F = (0, a.useRef)(0), V = (0, d.I)() ?? false, G = t2 ?? M, X = Math.max(
      0,
      e2.findIndex((e3) => e3.id === G)
    ), H = e2[X] ?? e2[0], Q = e2[(X + 1) % e2.length] ?? H, Z = N2 || e2.length < 2, K = "working" === I.kind, U = "working" === I.kind && !I.target.pendingLabel;
    function J(e3) {
      W(m), void 0 === t2 && O(e3.id), C(e3.label), o2?.(e3.id, e3);
    }
    function ee() {
      W({ kind: "failed" }), C(x2);
    }
    let et = (0, a.useRef)({ commit: J, nextState: Q });
    (0, a.useLayoutEffect)(() => {
      et.current = { commit: J, nextState: Q };
    }), (0, a.useEffect)(
      () => () => {
        F.current += 1;
      },
      []
    );
    let ei = "idle" === I.kind ? H?.holdFor : void 0;
    (0, a.useEffect)(() => {
      if (!ei) return;
      let e3 = window.setTimeout(() => {
        let { commit: e4, nextState: t3 } = et.current;
        t3 && e4(t3);
      }, ei);
      return () => window.clearTimeout(e3);
    }, [ei, H?.id]), (0, a.useEffect)(() => {
      if ("failed" !== I.kind) return;
      let e3 = window.setTimeout(() => W(m), 1800);
      return () => window.clearTimeout(e3);
    }, [I]);
    let en = (0, r.d)(+!!U);
    if ((0, a.useEffect)(() => {
      (0, s.i)(en, +!!U, V ? { duration: 0 } : y);
    }, [en, U, V]), !H)
      return null;
    let ea = "working" === I.kind ? {
      key: "working",
      label: I.target.pendingLabel ?? "",
      icon: (0, n.jsx)("span", { className: h().spinner }),
      tone: H.tone ?? "neutral"
    } : "failed" === I.kind ? {
      key: "failed",
      label: x2,
      icon: (0, n.jsx)(c.A, { size: 16, strokeWidth: 1.75 }),
      tone: "danger"
    } : {
      key: `state:${H.id}`,
      label: H.label,
      icon: H.icon,
      tone: H.tone ?? "neutral"
    }, er = "success" === ea.tone && !V;
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsxs)(l.PY1.button, {
          ...Y2,
          ref: A,
          type: Y2.type ?? "button",
          tabIndex: Y2.tabIndex ?? 0,
          className: [h().button, h()[b2], h()[ea.tone], w2].filter(Boolean).join(" "),
          style: { ...k2, "--fold": en },
          disabled: Z,
          "aria-disabled": K || void 0,
          "aria-busy": K || void 0,
          "aria-label": ea.label || H.label,
          "data-phase": I.kind,
          onClick: function() {
            let e3;
            if (!H || !Q || Z || K) return;
            let t3 = ++F.current;
            try {
              e3 = f2?.(Q, H);
            } catch {
              ee();
              return;
            }
            if (!e3 || "function" != typeof e3.then) return void J(Q);
            W({ kind: "working", target: Q }), C(Q.pendingLabel ?? "Working");
            let i3 = performance.now(), n2 = (e4) => window.setTimeout(
              () => {
                F.current === t3 && e4();
              },
              Math.max(0, 450 - (performance.now() - i3))
            );
            e3.then(
              () => n2(() => J(Q)),
              () => n2(ee)
            );
          },
          custom: A,
          variants: _,
          whileTap: V || Z || K ? void 0 : "pressed",
          transition: p.T.spring.snappy,
          children: [
            (0, n.jsx)(l.PY1.span, {
              className: h().icon,
              "aria-hidden": "true",
              initial: false,
              animate: { width: 16 * !!ea.icon },
              transition: V ? { duration: 0 } : p.T.spring.smooth,
              children: (0, n.jsx)(u.N, {
                initial: false,
                children: ea.icon ? (0, n.jsx)(
                  l.PY1.span,
                  {
                    className: h().iconPhase,
                    "data-tone": ea.tone,
                    initial: V ? v : er ? S : $,
                    animate: er ? R : T,
                    exit: V ? j : E,
                    transition: V ? g : er ? L : P,
                    children: ea.icon
                  },
                  ea.key
                ) : null
              })
            }),
            (0, n.jsx)(z, {
              text: ea.label,
              gap: !!ea.icon && ea.label.length > 0,
              reduced: V
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: h().srOnly,
          role: "status",
          "aria-live": "polite",
          children: q
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(5937, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.d(a, { A: () => n });
  var s = i(51811);
  let t = {
    name: "share-2",
    size: 24,
    node: [
      ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
      ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
      ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
      [
        "line",
        { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }
      ],
      [
        "line",
        { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }
      ]
    ]
  };
  t.node;
  let n = (0, s.A)(t);
}

__m(__module,__exports,__require);
});
A.reg(9107, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "file",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(9146, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={trigger:"dropdown-menu_trigger__tHHfW",item:"dropdown-menu_item__2mM29",triggerIcon:"dropdown-menu_triggerIcon__ePoI_",label:"dropdown-menu_label__E6np5",labelMeasure:"dropdown-menu_labelMeasure__xGL22",labelText:"dropdown-menu_labelText__77jcs",chevron:"dropdown-menu_chevron__4EgVP",menu:"dropdown-menu_menu__N7a5H","menu-exit":"dropdown-menu_menu-exit__njtoa",highlight:"dropdown-menu_highlight___o21W",icon:"dropdown-menu_icon__HqlVs",separator:"dropdown-menu_separator__hTmo3",destructive:"dropdown-menu_destructive__sBler"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(9383, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.d(t, { A: () => l });
  var a = s(51811);
  let r = {
    name: "send",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3"
        }
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
    ]
  };
  r.node;
  let l = (0, a.A)(r);
}

__m(__module,__exports,__require);
});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(17143, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-plus",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(17970, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={overlay:"drawer_overlay__yBV0P",content:"drawer_content__4hPD3",keyframes:"drawer_keyframes__MlZnM","overlay-in":"drawer_overlay-in__inXn7","overlay-out":"drawer_overlay-out__O_7_a","drawer-in":"drawer_drawer-in__zhyCU","drawer-out":"drawer_drawer-out__XdMt1",header:"drawer_header__Al5zH",handle:"drawer_handle__CJ5MI",title:"drawer_title__rL3MA",description:"drawer_description__tFTCe",swap:"drawer_swap__fgWDA",close:"drawer_close__YD2bD",body:"drawer_body__z_QzU","drawer-fade-in":"drawer_drawer-fade-in__1GqIi","drawer-fade-out":"drawer_drawer-fade-out__0XnW7"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
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
A.reg(19876, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => n });
  var r = a(51811);
  let i = {
    name: "file-play",
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
      [
        "path",
        {
          d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z",
          key: "1tzo1f"
        }
      ]
    ],
    aliases: ["file-video"]
  };
  i.node;
  let n = (0, r.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(20122, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { E: () => d });
  var n = a(51469), r = a(71013);
  function d(e2, ...t2) {
    let a2 = e2.length;
    return (0, r.j)(t2.filter(n.S), function() {
      let r2 = "";
      for (let d2 = 0; d2 < a2; d2++) {
        r2 += e2[d2];
        let a3 = t2[d2];
        a3 && (r2 += (0, n.S)(a3) ? a3.get() : a3);
      }
      return r2;
    });
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
A.regCss(24394, ".root{display:grid;width:100%;min-width:0;color:var(--foreground)}\n.input{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;clip-path:inset(50%)}\n.dropzone{display:flex;min-height:92px;align-items:center;gap:12px;padding:16px;border:1px dashed var(--border-strong);border-radius:var(--radius-panel);background:var(--surface);cursor:pointer;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard)}\n.dropzone.dragging,.dropzone:not(.disabled):active{border-color:var(--accent);background:var(--accent-subtle)}\n.dropzone.disabled{cursor:not-allowed;opacity:.52}\n@media (hover:hover) and (pointer:fine){.dropzone:not(.disabled):hover{border-color:var(--accent);background:var(--accent-subtle)}\n@media (prefers-reduced-motion:reduce){.dropzone,.remove,.retry,.uploadIcon{transition:none}\n.dragging .uploadIcon{transform:translateY(-3px)}\n.dragging .uploadIcon,.remove:active,.retry:active{transform:none}\n.fileIcon,.uploadIcon{display:grid;flex:0 0 auto;place-items:center;color:var(--accent-strong)}\n.uploadIcon{width:24px;height:24px;transition:transform var(--duration-spring) var(--ease-spring)}\n.fileIcon{width:24px;height:24px;color:var(--text-secondary)}\n.copy{display:grid;min-width:0;gap:3px;flex:1}\n.copy strong{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.copy>span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);overflow-wrap:anywhere}\n.label{position:relative;display:block;min-width:0}\n.labelText{display:block}\n.browse{flex:0 0 auto;color:var(--accent-strong);font-size:var(--text-xs);font-weight:500}\n.statusFrame{overflow:hidden}\n.status{position:relative;min-height:16px;margin:0;padding-top:8px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.statusText{display:block}\n.fileList{display:grid;margin:0;padding:0;list-style:none}\n.fileRow{overflow:hidden}\n.fileItem{display:flex;margin-top:6px;min-width:0;align-items:center;gap:12px;padding:10px 10px 10px 12px;border:1px solid var(--border-subtle);border-radius:var(--radius-control);background:var(--surface-muted)}\n.fileCopy{display:grid;min-width:0;flex:1;gap:2px}\n.fileCopy strong{overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.fileCopy>span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.fileCopy .error{color:var(--danger)}\n.meta{display:flex;min-width:0;white-space:nowrap;font-variant-numeric:tabular-nums}\n.dot{padding-inline:5px}\n.phase{position:relative;display:inline-block}\n.phaseText{display:block}\n.percent{display:inline-block;min-width:4ch}\n.barFrame{display:block}\n.bar{display:block;height:3px;margin:5px 0 1px;overflow:hidden;border-radius:99px;background:var(--border)}\n.barFill{display:block;width:100%;height:100%;border-radius:inherit;background:var(--accent)}\n.statusSlot{position:relative;width:26px;height:26px;flex:0 0 auto}\n.retrySlot,.statusSlot{display:grid;place-items:center}\n.ready{display:grid;width:22px;height:22px;place-items:center;color:var(--success)}\n.remove,.retry{display:grid;width:26px;height:26px;flex:0 0 auto;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-muted);cursor:pointer;transition:transform var(--duration-spring) var(--ease-spring),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.remove:active,.retry:active{transform:scale(.96);transition-duration:var(--duration-instant);transition-timing-function:var(--ease-standard)}\n.remove:hover,.retry:hover{background:var(--surface);color:var(--foreground)}\n.retry{color:var(--text-secondary)}\n.srOnly{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", {"root":"root","input":"input","dropzone":"dropzone","dragging":"dragging","disabled":"disabled","remove":"remove","retry":"retry","uploadIcon":"uploadIcon","fileIcon":"fileIcon","copy":"copy","label":"label","labelText":"labelText","browse":"browse","statusFrame":"statusFrame","status":"status","statusText":"statusText","fileList":"fileList","fileRow":"fileRow","fileItem":"fileItem","fileCopy":"fileCopy","error":"error","meta":"meta","dot":"dot","phase":"phase","phaseText":"phaseText","percent":"percent","barFrame":"barFrame","bar":"bar","barFill":"barFill","statusSlot":"statusSlot","retrySlot":"retrySlot","ready":"ready","srOnly":"srOnly"});
A.reg(24558, function(__module,__exports,__require){
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
});
A.reg(27502, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var i = t(51811);
  let r = {
    name: "cloud-upload",
    size: 24,
    node: [
      ["path", { d: "M12 13v8", key: "1l5pq0" }],
      [
        "path",
        {
          d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
          key: "1pljnt"
        }
      ],
      ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
    ],
    aliases: ["upload-cloud"]
  };
  r.node;
  let n = (0, i.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(29354, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { tz: () => x });
  var r = n(95155), a = n(47650), i = n(12115), o = n(18310), s = n(80642), l = n(25354), u = n(64577), d = n(59680), c = n(99314), m = n(25879), p = n(7770), f = n(83402), h = n.n(f);
  function _(e2, t2, n2, r2) {
    let a2 = Math.max(8, Math.min(e2, window.innerWidth - n2 - 8)), i2 = Math.max(8, Math.min(t2, window.innerHeight - r2 - 8));
    return {
      x: a2,
      y: i2,
      originX: Math.max(0, Math.min(n2, e2 - a2)),
      originY: Math.max(0, Math.min(r2, t2 - i2))
    };
  }
  function x({ children: e2, items: t2, label: n2 = "Context menu" }) {
    let c2 = (0, o.I)(), [m2, f2] = (0, i.useState)(false), [g, y] = (0, i.useState)(false), [w, v] = (0, i.useState)({ x: 0, y: 0, originX: 0, originY: 0, key: 0 }), [b, T] = (0, i.useState)(null), j = (0, i.useRef)(null), N = (0, i.useRef)(null), k = (0, i.useRef)(false), C = (0, i.useRef)(0), M = (0, i.useRef)(false), P = (0, i.useRef)(false), E = (0, i.useRef)({ x: 0, y: 0 });
    function S(e3, n3) {
      E.current = { x: e3, y: n3 };
      let r2 = _(e3, n3, 208, Math.min(300, 34 * t2.length + 12));
      v((e4) => ({ ...r2, key: e4.key + 1 })), window.clearTimeout(C.current), k.current = false, T(null), y(true), f2(true);
    }
    function L(e3, t3) {
      window.clearTimeout(C.current);
      let n3 = {
        index: Number(e3.dataset.index),
        top: e3.offsetTop,
        height: e3.offsetHeight,
        danger: "danger" === e3.dataset.tone
      };
      T((e4) => ({ ...n3, glide: t3 && null !== e4 }));
    }
    return (0, i.useEffect)(() => {
      P.current = m2;
    }, [m2]), (0, i.useLayoutEffect)(() => {
      let e3 = j.current;
      if (!m2 || !e3) return;
      let t3 = _(E.current.x, E.current.y, e3.offsetWidth, e3.offsetHeight);
      v(
        (e4) => e4.x === t3.x && e4.y === t3.y && e4.originX === t3.originX && e4.originY === t3.originY ? e4 : { ...t3, key: e4.key }
      );
    }, [m2, w.key]), (0, i.useEffect)(() => () => window.clearTimeout(C.current), []), (0, i.useEffect)(() => {
      if (!m2) return;
      j.current?.querySelector('[role="menuitem"]:not(:disabled)')?.focus({ preventScroll: true });
      let e3 = (e4) => {
        j.current?.contains(e4.target) || f2(false);
      }, t3 = (e4) => {
        e4.target instanceof Node && j.current?.contains(e4.target) || f2(false);
      };
      return document.addEventListener("pointerdown", e3), window.addEventListener("scroll", t3, true), window.addEventListener("resize", t3), () => {
        document.removeEventListener("pointerdown", e3), window.removeEventListener("scroll", t3, true), window.removeEventListener("resize", t3);
      };
    }, [m2, w.key]), (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("div", {
          ref: N,
          className: h().target,
          tabIndex: 0,
          onPointerDown: (e3) => {
            M.current = m2 && 0 === e3.button;
          },
          onClick: function() {
            if (M.current) {
              M.current = false;
              return;
            }
            let e3 = N.current?.getBoundingClientRect();
            e3 && S(e3.left + 12, e3.bottom + 8);
          },
          onContextMenu: (e3) => {
            e3.preventDefault(), S(e3.clientX, e3.clientY);
          },
          onKeyDown: function(e3) {
            if ("ContextMenu" === e3.key || e3.shiftKey && "F10" === e3.key) {
              e3.preventDefault();
              let t3 = N.current?.getBoundingClientRect();
              t3 && S(t3.left + 12, t3.bottom + 8);
            }
          },
          "aria-label": n2,
          "aria-haspopup": "menu",
          "aria-expanded": m2,
          children: e2
        }),
        g ? (0, a.createPortal)(
          (0, r.jsx)(s.N, {
            children: m2 && (0, r.jsxs)(
              l.PY1.div,
              {
                ref: (e3) => {
                  e3 && (j.current = e3);
                },
                className: h().menu,
                role: "menu",
                "aria-label": n2,
                tabIndex: -1,
                style: {
                  left: w.x,
                  top: w.y,
                  transformOrigin: `${w.originX}px ${w.originY}px`
                },
                onKeyDown: function(e3) {
                  let n3, r2 = t2.map((e4, t3) => ({ item: e4, index: t3 })).filter(({ item: e4 }) => !e4.disabled), a2 = document.activeElement?.getAttribute(
                    "data-index"
                  ), i2 = r2.findIndex(({ index: e4 }) => String(e4) === a2);
                  "ArrowDown" === e3.key && (n3 = (i2 + 1) % r2.length), "ArrowUp" === e3.key && (n3 = i2 < 0 ? r2.length - 1 : (i2 - 1 + r2.length) % r2.length), "Home" === e3.key && (n3 = 0), "End" === e3.key && (n3 = r2.length - 1), void 0 !== n3 && r2.length && (e3.preventDefault(), e3.currentTarget.querySelector(`[data-index="${r2[n3].index}"]`)?.focus()), "Escape" === e3.key && (e3.preventDefault(), f2(false), N.current?.focus());
                },
                onFocus: function(e3) {
                  let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitem"]') : null;
                  if (t3) {
                    !k.current && t3.matches(":focus-visible") && L(t3, false);
                    return;
                  }
                  window.clearTimeout(C.current), C.current = window.setTimeout(
                    () => T(null),
                    70 * !!k.current
                  );
                },
                onPointerMoveCapture: () => {
                  k.current = true;
                },
                onKeyDownCapture: () => {
                  k.current = false;
                },
                onPointerLeave: (e3) => {
                  P.current && e3.currentTarget.focus({ preventScroll: true });
                },
                initial: c2 ? { opacity: 0 } : { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                exit: c2 ? {
                  opacity: 0,
                  transition: { duration: p.T.duration.instant }
                } : {
                  opacity: 0,
                  scale: 0.98,
                  transition: {
                    duration: p.T.duration.instant,
                    ease: [...p.T.ease.standard]
                  }
                },
                transition: c2 ? { duration: p.T.duration.instant } : {
                  default: p.T.spring.snappy,
                  opacity: {
                    duration: p.T.duration.fast,
                    ease: [...p.T.ease.enter]
                  }
                },
                children: [
                  (0, r.jsx)(l.PY1.span, {
                    className: h().highlight,
                    "data-tone": b?.danger ? "danger" : void 0,
                    "aria-hidden": "true",
                    initial: false,
                    animate: b ? { y: b.top, height: b.height, opacity: 1 } : { opacity: 0 },
                    transition: {
                      default: b?.glide && !c2 ? p.T.spring.snappy : { duration: 0 },
                      opacity: {
                        duration: c2 ? 0 : p.T.duration.instant
                      }
                    }
                  }),
                  t2.map(
                    (e3, t3) => (0, r.jsxs)(
                      "button",
                      {
                        type: "button",
                        role: "menuitem",
                        tabIndex: -1,
                        "data-index": t3,
                        "data-tone": e3.destructive ? "danger" : void 0,
                        style: { "--i": t3 },
                        disabled: e3.disabled,
                        className: [
                          h().item,
                          e3.destructive ? h().destructive : ""
                        ].filter(Boolean).join(" "),
                        onPointerMove: (e4) => {
                          P.current && (window.clearTimeout(C.current), document.activeElement !== e4.currentTarget && e4.currentTarget.focus({
                            preventScroll: true
                          }), b?.index !== t3 && L(e4.currentTarget, true));
                        },
                        onPointerLeave: () => {
                          P.current && j.current?.focus({ preventScroll: true });
                        },
                        onClick: () => {
                          P.current && (P.current = false, e3.onSelect?.(), f2(false), N.current?.focus());
                        },
                        children: [
                          (0, r.jsx)("span", {
                            className: h().icon,
                            "aria-hidden": "true",
                            children: e3.icon ?? (e3.checked ? (0, r.jsx)(u.A, { size: 15 }) : (0, r.jsx)(d.A, { size: 15 }))
                          }),
                          (0, r.jsx)("span", { children: e3.label })
                        ]
                      },
                      e3.id
                    )
                  )
                ]
              },
              w.key
            )
          }),
          document.body
        ) : null
      ]
    });
  }
  c.A, m.A;
}

__m(__module,__exports,__require);
});
A.reg(30377, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "sun-moon",
    size: 24,
    node: [
      ["path", { d: "M12 2v2", key: "tus03m" }],
      [
        "path",
        {
          d: "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715",
          key: "xlf6rm"
        }
      ],
      ["path", { d: "M16 12a4 4 0 0 0-4-4", key: "6vsxu" }],
      ["path", { d: "m19 5-1.256 1.256", key: "1yg6a6" }],
      ["path", { d: "M20 12h2", key: "1q8mjw" }]
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
A.regCss(31058, ".field{display:grid;width:100%;min-width:0}\n.field label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.control{box-sizing:content-box;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);box-shadow:0 0 0 6px transparent;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.control:hover:not(:focus-within){border-color:var(--border-strong)}\n.control:focus-within{border-color:var(--foreground);box-shadow:0 0 0 3px var(--focus-ring);outline:2px solid transparent;outline-offset:2px}\n@media (prefers-reduced-motion:reduce){.control,.tag button{transition:none}\n.content{display:flex;flex-wrap:wrap;align-content:flex-start;gap:6px;min-height:calc(var(--control-height-md) - 2px);padding:7px;cursor:text}\n.content,.tag{position:relative;align-items:center;box-sizing:border-box}\n.content input{flex:1 1 100px;min-width:80px;min-height:28px;box-sizing:border-box;border:0;padding:0 5px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm)}\n.content input:focus,.content input:focus-visible{outline:none}\n.content input::placeholder{color:transparent}\n.tag{display:inline-flex;gap:3px;min-height:28px;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 4px 0 9px;background:var(--surface-muted);color:var(--foreground);font-size:var(--text-sm);white-space:nowrap;cursor:default}\n.tag button{display:grid;width:22px;height:22px;place-items:center;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n@media (hover:hover) and (pointer:fine){.tag button:hover{background:var(--surface);color:var(--foreground)}\n.tag button:focus-visible{background:var(--surface);color:var(--foreground);outline:none;box-shadow:inset 0 0 0 1.5px var(--focus-ring)}\n.tag button:active{transform:scale(.96);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.tagLabel,.tag button{position:relative;z-index:2}\n.tag[data-picked] button{color:var(--foreground)}\n.tag button:active{transform:none}\n.placeholder{position:absolute;inset:0;display:flex;align-items:center;overflow:hidden;padding:0 12px;color:var(--text-muted);font-size:var(--text-sm);white-space:nowrap;pointer-events:none}\n.ring{position:absolute;top:0;left:0;z-index:1;box-sizing:border-box;border:1px solid var(--accent);border-radius:var(--radius-pill);background:var(--accent-subtle);opacity:0;pointer-events:none}\n.messageSlot{display:block;overflow:hidden}\n.hint{display:block;padding-top:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","control":"control","tag":"tag","content":"content","tagLabel":"tagLabel","placeholder":"placeholder","ring":"ring","messageSlot":"messageSlot","hint":"hint","words":"words","word":"word","srOnly":"srOnly"});
A.reg(32159, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var s = a(51811);
  let n = {
    name: "archive",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }
      ],
      [
        "path",
        { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }
      ],
      ["path", { d: "M10 12h4", key: "a56b0p" }]
    ]
  };
  n.node;
  let i = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(34434, ".wrapper{position:relative;display:grid;min-width:0;color:var(--foreground)}\n.dropzone{position:relative;display:grid;min-width:0;border-radius:var(--radius-surface);background:var(--surface);transition:background-color var(--duration-standard) var(--ease-standard),border-radius var(--duration-spring) var(--ease-spring)}\n.dropzone.compact{border-radius:var(--radius-panel)}\n@media (hover:hover) and (pointer:fine){.dropzone:has(.trigger:hover){background:var(--surface-muted)}\n.dropzone:has(.trigger:hover) .edge rect{stroke:var(--text-muted)}\n.dropzone:has(.trigger:active){background:var(--surface-muted)}\n.dropzone.dragging{background:color-mix(in oklab,var(--accent) 2.5%,var(--surface));animation:breathe 2.2s var(--ease-in-out) infinite}\n@media (hover:hover) and (pointer:fine){.dropzone:has(.trigger:hover) .sheet[data-sheet=back]{--r:-15deg;--x:-13px}\n.dropzone:has(.trigger:hover) .sheet[data-sheet=side]{--r:15deg;--x:13px}\n.dropzone:has(.trigger:hover) .sheet[data-sheet=front]{--y:-2px}\n.dropzone.dragging .sheet[data-sheet=back]{--r:-22deg;--x:-20px;--y:-2px}\n.dropzone.dragging .sheet[data-sheet=side]{--r:22deg;--x:20px;--y:-2px}\n.dropzone.dragging .sheet[data-sheet=front]{--y:-8px}\n@media (prefers-reduced-motion:reduce){.dropzone,.edge rect,.glow,.remove,.retry,.row,.sheet,.sheet>svg,.wash{transition:none}\n.dropzone.dragging{animation:none}\n.edge{position:absolute;top:.5px;left:.5px;width:calc(100% - 1px);height:calc(100% - 1px);overflow:visible;pointer-events:none}\n.edge rect{fill:none;stroke:var(--border-strong);stroke-width:1;stroke-dasharray:3.5 3.5;stroke-dashoffset:0;transition:stroke var(--duration-fast) var(--ease-standard),stroke-dasharray var(--duration-standard) var(--ease-standard),stroke-dashoffset var(--duration-standard) var(--ease-standard)}\n.dragging .edge rect{stroke:color-mix(in oklab,var(--accent) 40%,var(--border));stroke-dasharray:7 0;stroke-dashoffset:1.75}\n.trigger{display:flex;width:100%;flex-direction:column;align-items:stretch;justify-content:center;border:0;border-radius:inherit;padding:34px var(--space-5);background:transparent;color:inherit;font:inherit;letter-spacing:var(--tracking-body);text-align:center;cursor:pointer}\n.trigger>*{pointer-events:none}\n.dragging .glow,.dragging .wash{opacity:1}\n.dragging .sheet>svg{transform:translateY(-3px)}\n.dragging .sheet{color:var(--text-secondary);border-color:var(--border-strong)}\n.glow,.wash{position:absolute;inset:0;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard)}\n.glow{padding:1.5px;-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}\n.iconSlot,.noteSlot{display:flex;flex-direction:column;overflow:hidden}\n.sheets{position:relative;display:block;width:36px;height:44px;align-self:center;margin:10px 0 14px}\n.sheet{--r:0deg;--x:0px;--y:0px;position:absolute;inset:0;display:grid;place-items:end center;padding:0 0 5px;border:1px solid var(--border);border-radius:7px;background:var(--surface-raised);color:var(--text-muted);box-shadow:0 1px 2px oklch(0 0 0/.05),0 3px 8px oklch(0 0 0/.04);transform:translate(var(--x),var(--y)) rotate(var(--r));transform-origin:50% 100%;transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard)}\n.sheet:after,.sheet:before{position:absolute;top:8px;left:7px;width:16px;height:2px;border-radius:2px;background:currentColor;content:\"\";opacity:.3}\n.sheet:after{top:13px;width:11px}\n.sheet>svg{transition:transform var(--duration-spring) var(--ease-spring)}\n.sheet[data-sheet=back]{--r:-10deg;--x:-9px;--y:2px}\n.sheet[data-sheet=side]{--r:10deg;--x:9px;--y:2px}\n.label{position:relative;display:block;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.labelText{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;vertical-align:top;white-space:nowrap}\n.hint{margin-top:6px;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.note{padding-top:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.input{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.messageSlot{overflow:hidden}\n.error{display:flex;align-items:flex-start;gap:6px;padding-top:var(--space-3);color:var(--danger);font-size:var(--text-sm);line-height:var(--leading-body)}\n.errorIcon{flex:0 0 auto;margin-top:3px}\n.errorCopy{position:relative;min-width:0;flex:1}\n.list{display:grid;min-width:0;margin:0;padding:0;list-style:none;container:dropzone-list/inline-size}\n.inside .list{padding-inline:12px}\n.item{min-width:0;overflow:hidden}\n.row{position:relative;display:grid;grid-template-columns:40px minmax(0,1fr) auto;align-items:center;column-gap:12px;min-height:58px;margin-top:8px;border:1px solid var(--border);border-radius:var(--radius-control);padding:8px 8px 8px 9px;background:var(--surface);transition:border-color var(--duration-standard) var(--ease-standard)}\n.row.isFailed{border-color:color-mix(in oklab,var(--danger) 26%,var(--border))}\n@container dropzone-list (max-width: 300px){.row{grid-template-columns:minmax(0,1fr) auto;padding-left:14px}\n.fileIcon{display:grid;width:40px;height:40px;place-items:center;color:var(--text-secondary)}\n.fileIcon,.thumb{display:none}\n.thumb{display:block;width:40px;height:40px;overflow:hidden;border-radius:10px;background:var(--surface-muted);box-shadow:inset 0 0 0 1px oklch(0 0 0/.06)}\n.thumb img{display:block;width:100%;height:100%;object-fit:cover}\n.copy{display:grid;min-width:0}\n.name{overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.meta{display:flex;min-width:0;align-items:center;margin-top:1px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dot{padding-inline:6px}\n.phase{position:relative;display:flex;min-width:0;flex:1}\n.state{display:inline-flex;min-width:0;align-items:center;gap:5px}\n.uploaded{color:var(--text-secondary)}\n.uploaded .stateIcon{color:var(--success)}\n.stateIcon{flex:0 0 auto}\n.failed{color:var(--danger)}\n.reason{min-width:0;overflow:hidden;text-overflow:ellipsis}\n.percent{font-variant-numeric:tabular-nums}\n.barFrame,.bar{display:block;overflow:hidden}\n.bar{height:4px;margin:7px 0 2px;border-radius:var(--radius-pill);background:var(--border)}\n.barFill{display:block;width:100%;height:100%;border-radius:inherit;background:var(--accent)}\n.actions{display:flex;align-items:center}\n.retrySlot{display:flex;overflow:hidden}\n.retryInner{display:flex;padding:3px 6px 3px 3px}\n.remove,.retry{display:grid;place-items:center;border:0;color:var(--text-secondary);font:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.retry{display:flex;height:30px;align-items:center;gap:5px;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 12px 0 10px;background:var(--surface);color:var(--foreground);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);white-space:nowrap}\n@container dropzone-list (max-width: 440px){.retry{width:30px;justify-content:center;padding:0}\n@media (hover:hover) and (pointer:fine){.retry:hover{border-color:var(--border-strong);background:var(--surface-muted)}\n.remove:active,.retry:active{transform:scale(.97);transition-duration:var(--duration-instant);transition-timing-function:var(--ease-standard)}\n.remove:active,.retry:active{transform:none}\n.remove{width:32px;height:32px;border-radius:var(--radius-pill);background:transparent}\n.remove:hover{background:var(--surface-muted);color:var(--foreground)}\n.retryLabel{display:none}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"wrapper":"wrapper","dropzone":"dropzone","compact":"compact","trigger":"trigger","edge":"edge","dragging":"dragging","sheet":"sheet","glow":"glow","remove":"remove","retry":"retry","row":"row","wash":"wash","iconSlot":"iconSlot","noteSlot":"noteSlot","sheets":"sheets","label":"label","labelText":"labelText","hint":"hint","note":"note","input":"input","messageSlot":"messageSlot","error":"error","errorIcon":"errorIcon","errorCopy":"errorCopy","list":"list","inside":"inside","item":"item","isFailed":"isFailed","fileIcon":"fileIcon","thumb":"thumb","copy":"copy","name":"name","meta":"meta","dot":"dot","phase":"phase","state":"state","uploaded":"uploaded","stateIcon":"stateIcon","failed":"failed","reason":"reason","percent":"percent","barFrame":"barFrame","bar":"bar","barFill":"barFill","actions":"actions","retrySlot":"retrySlot","retryInner":"retryInner","retryLabel":"retryLabel","words":"words","word":"word","srOnly":"srOnly"});
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
A.regCss(37350, ".split-button_group__c8_Sg{display:inline-flex;align-items:stretch;border:1px solid var(--foreground);border-radius:var(--radius-control);background:var(--foreground);transition:transform var(--duration-spring) var(--ease-spring)}.split-button_group__c8_Sg:has(>.split-button_primary__BvURz:active:not(:disabled)){transform:scale(.97);transition-duration:var(--duration-instant);transition-timing-function:var(--ease-standard)}.split-button_primary__BvURz,.split-button_trigger__jdCRr{border:0;background:var(--foreground);color:var(--background);font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}.split-button_primary__BvURz{position:relative;display:inline-grid;min-height:var(--control-height-md);place-items:center;padding:0 var(--space-4);border-radius:calc(var(--radius-control) - 1px) 0 0 calc(var(--radius-control) - 1px);font-size:var(--text-sm);font-weight:500}.split-button_primarySlot__nzDMf{display:inline-flex;min-width:0;align-items:center}.split-button_primarySlot__nzDMf[data-morphing]{clip-path:inset(-50% calc(var(--space-2) * -1))}.split-button_primaryContent__kcGnk{display:inline-flex;flex:none;align-items:center;gap:var(--space-2);white-space:nowrap}.split-button_mainIcon__9kWao{display:inline-grid;flex:none;place-items:center}.split-button_iconPhase__gGUB7{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center}.split-button_glyphs__Fyah3{position:relative;display:inline-flex;flex:none;white-space:pre}.split-button_glyph__3B11O{display:inline-block}.split-button_trigger__jdCRr{display:grid;width:38px;min-height:var(--control-height-md);place-items:center;border-left:1px solid color-mix(in oklab,var(--background) 18%,var(--foreground));border-radius:0 calc(var(--radius-control) - 1px) calc(var(--radius-control) - 1px) 0}.split-button_chevron__dSYKY{transition:transform var(--duration-spring) var(--ease-spring)}.split-button_trigger__jdCRr[data-state=open] .split-button_chevron__dSYKY{transform:rotate(180deg)}@media (hover:hover) and (pointer:fine){.split-button_primary__BvURz:hover:not(:disabled),.split-button_trigger__jdCRr:hover:not(:disabled){background:color-mix(in oklab,var(--foreground) 88%,var(--background))}}@media (hover:hover) and (pointer:fine){.split-button_secondary__9cxrV .split-button_primary__BvURz:hover:not(:disabled),.split-button_secondary__9cxrV .split-button_trigger__jdCRr:hover:not(:disabled){background:var(--surface-muted)}}.split-button_primary__BvURz:active:not(:disabled),.split-button_trigger__jdCRr:active:not(:disabled),.split-button_trigger__jdCRr[data-state=open]{background:color-mix(in oklab,var(--foreground) 80%,var(--background))}.split-button_primary__BvURz:disabled,.split-button_trigger__jdCRr:disabled{cursor:not-allowed;opacity:.52}.split-button_secondary__9cxrV{border-color:var(--border);border-radius:var(--radius-pill);background:var(--surface)}.split-button_secondary__9cxrV .split-button_primary__BvURz,.split-button_secondary__9cxrV .split-button_trigger__jdCRr{min-height:var(--control-height-sm);background:var(--surface);color:var(--foreground)}.split-button_secondary__9cxrV .split-button_primary__BvURz{min-width:142px;border-radius:var(--radius-pill) 0 0 var(--radius-pill);padding-inline:var(--space-3);font-size:var(--text-xs)}.split-button_secondary__9cxrV .split-button_trigger__jdCRr{width:32px;border-left-color:var(--border-subtle);border-radius:0 var(--radius-pill) var(--radius-pill) 0}.split-button_secondary__9cxrV .split-button_primary__BvURz:active:not(:disabled),.split-button_secondary__9cxrV .split-button_trigger__jdCRr:active:not(:disabled),.split-button_secondary__9cxrV .split-button_trigger__jdCRr[data-state=open]{background:color-mix(in oklab,var(--surface-muted),var(--border) 55%)}.split-button_icon__c20aR{display:inline-flex}.split-button_srOnly___9Sq8{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.split-button_menu__BTohc{--menu-x:0px;--menu-y:-5px;z-index:60;min-width:min(12rem,var(--radix-dropdown-menu-content-available-width));max-width:var(--radix-dropdown-menu-content-available-width);padding:5px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);transform-origin:var(--radix-dropdown-menu-content-transform-origin);transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring)}.split-button_menu__BTohc[data-side=top]{--menu-y:5px}.split-button_menu__BTohc[data-side=left]{--menu-x:5px;--menu-y:0px}.split-button_menu__BTohc[data-side=right]{--menu-x:-5px;--menu-y:0px}.split-button_menu__BTohc[data-state=closed]{opacity:0;transform:translate(calc(var(--menu-x) * .5),calc(var(--menu-y) * .5)) scale(.985);transition:opacity .13s var(--ease-standard),transform .13s var(--ease-standard);animation:split-button_menu-exit__Y0a1Y .13s linear both;pointer-events:none}.split-button_item__zePAB{display:flex;min-height:var(--control-height-sm);align-items:center;gap:10px;padding:0 11px;border-radius:calc(var(--radius-panel) - 6px);font-size:var(--text-sm);cursor:pointer;outline:none;transition:opacity var(--duration-standard) var(--ease-enter) calc(min(var(--i, 0), 4) * 35ms),transform var(--duration-standard) var(--ease-enter) calc(min(var(--i, 0), 4) * 35ms)}.split-button_item__zePAB[data-highlighted]{background:var(--surface-muted)}.split-button_item__zePAB[data-disabled]{cursor:default;opacity:.45}.split-button_destructive__MAzZD{color:var(--danger)}.split-button_destructive__MAzZD[data-highlighted]{background:color-mix(in oklab,var(--danger) 8%,var(--surface))}@keyframes split-button_menu-exit__Y0a1Y{to{--menu-exit:1}}@media (prefers-reduced-motion:reduce){.split-button_chevron__dSYKY,.split-button_group__c8_Sg,.split-button_primary__BvURz,.split-button_trigger__jdCRr{transition:none}}@media (prefers-reduced-motion:reduce){.split-button_group__c8_Sg:has(>.split-button_primary__BvURz:active:not(:disabled)){transform:none}}@media (prefers-reduced-motion:reduce){.split-button_item__zePAB{transition:none}}@media (prefers-reduced-motion:reduce){.split-button_menu__BTohc,.split-button_menu__BTohc[data-state=closed]{transform:none;transition:opacity var(--duration-instant) linear}}", {"group":"split-button_group__c8_Sg","primary":"split-button_primary__BvURz","trigger":"split-button_trigger__jdCRr","primarySlot":"split-button_primarySlot__nzDMf","primaryContent":"split-button_primaryContent__kcGnk","mainIcon":"split-button_mainIcon__9kWao","iconPhase":"split-button_iconPhase__gGUB7","glyphs":"split-button_glyphs__Fyah3","glyph":"split-button_glyph__3B11O","chevron":"split-button_chevron__dSYKY","secondary":"split-button_secondary__9cxrV","icon":"split-button_icon__c20aR","srOnly":"split-button_srOnly___9Sq8","menu":"split-button_menu__BTohc","item":"split-button_item__zePAB","menu-exit":"split-button_menu-exit__Y0a1Y","destructive":"split-button_destructive__MAzZD"});
A.regCss(39126, ".group{display:grid;min-width:0;margin:0;border:0;padding:0}\n.group legend{margin-bottom:var(--space-2);padding:0;font-size:var(--text-sm);font-weight:500}\n.options{position:relative;display:grid;gap:var(--space-2)}\n.options:not([data-ready]) .option:has(input:checked){border-color:var(--control-on);background:color-mix(in oklab,var(--control-on) 5%,transparent)}\n.highlight{position:absolute;top:0;right:0;left:0;z-index:1;box-sizing:border-box;border:1px solid var(--control-on);border-radius:var(--radius-control);background:color-mix(in oklab,var(--control-on) 5%,transparent);opacity:0;pointer-events:none}\n.option{position:relative;display:flex;align-items:center;gap:var(--space-3);border:1px solid var(--border);border-radius:var(--radius-control);padding:var(--space-3);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.option:hover{background:var(--surface-muted)}\n.option:active{background:var(--surface-muted)}\n.option input{position:absolute;opacity:0}\n.option>span{position:relative;z-index:2}\n.option:active:not(:has(input:checked)) .mark:after{opacity:.22}\n.option:active .mark{transform:scale(.88);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),transform .1s var(--ease-standard)}\n.option:has(input:checked) .mark{border-color:var(--control-on);background:var(--control-on)}\n.option:has(input:checked) .dot{background:var(--control-glyph)}\n.option small,.option strong{display:block}\n.option strong{color:var(--text-secondary);font-size:var(--text-sm);font-weight:500;transition:color var(--duration-standard) var(--ease-standard)}\n.option:has(input:checked) strong{color:var(--foreground)}\n.option small{margin-top:2px;color:var(--text-muted);font-size:var(--text-xs)}\n@media (prefers-reduced-motion:reduce){.mark,.mark:after,.option,.option strong{transition:none}\n.option:active .mark{transform:none}\n.mark{display:grid;width:17px;height:17px;flex:0 0 auto;place-items:center;border:1px solid var(--border-strong);border-radius:50%;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.dot,.mark:after{grid-area:1/1;width:7px;height:7px;border-radius:50%;background:var(--foreground)}\n.mark:after{content:\"\";opacity:0;transition:opacity var(--duration-instant) var(--ease-standard)}", {"group":"group","options":"options","option":"option","highlight":"highlight","mark":"mark","dot":"dot"});
A.reg(41189, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let l = {
    name: "rotate-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
          key: "1p45f6"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
    ]
  };
  l.node;
  let n = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(41410, function(__module,__exports,__require){
"use strict";
function __m(t, e, a) {
  "use strict";
  a.d(e, { F: () => y });
  var n = a(95155), i = a(12115), r = a(18310), s = a(80642), l = a(25354), o = a(30464), u = a(9005), c = a(7770), d = a(31058), p = a.n(d);
  function f({ text: t2 }) {
    let e2 = (0, r.I)(), a2 = t2.split(" ");
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", { className: p().srOnly, children: t2 }),
        (0, n.jsx)("span", {
          className: p().words,
          "aria-hidden": "true",
          children: (0, n.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: a2.map(
              (t3, i2) => (0, n.jsx)(
                l.PY1.span,
                {
                  className: p().word,
                  initial: e2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${c.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: e2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${c.T.blur.subtle}px)`,
                    transition: {
                      duration: c.T.duration.instant,
                      ease: [...c.T.ease.standard]
                    }
                  },
                  transition: e2 ? { duration: c.T.duration.instant } : {
                    duration: c.T.duration.standard,
                    ease: [...c.T.ease.enter]
                  },
                  children: i2 < a2.length - 1 ? `${t3} ` : t3
                },
                `${i2}:${t3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: t2, text: e2, className: a2 }) {
    return (0, n.jsx)(s.N, {
      initial: false,
      children: e2 ? (0, n.jsx)(g, { id: t2, text: e2, className: a2 }, "message") : null
    });
  }
  function g({ id: t2, text: e2, className: a2 }) {
    let s2 = (0, r.I)(), o2 = (0, i.useRef)(null), [u2, d2] = (0, i.useState)("auto");
    return (0, i.useEffect)(() => {
      let t3 = o2.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let e3 = new ResizeObserver(
        ([e4]) => d2(e4?.borderBoxSize?.[0]?.blockSize ?? t3.offsetHeight)
      );
      return e3.observe(t3), () => e3.disconnect();
    }, []), (0, n.jsx)(l.PY1.span, {
      className: p().messageSlot,
      initial: !s2 && { height: 0, opacity: 0 },
      animate: { height: u2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: s2 ? { duration: 0 } : {
          height: c.T.spring.smooth,
          opacity: { duration: c.T.duration.instant }
        }
      },
      transition: s2 ? { duration: 0 } : {
        height: c.T.spring.smooth,
        opacity: { duration: c.T.duration.fast }
      },
      children: (0, n.jsx)(l.PY1.span, {
        ref: o2,
        id: t2,
        className: a2,
        initial: !s2 && { y: "0.35em", filter: `blur(${c.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: s2 ? 0 : c.T.duration.standard,
          ease: [...c.T.ease.enter]
        },
        children: (0, n.jsx)(f, { text: e2 })
      })
    });
  }
  function y({
    label: t2,
    value: e2,
    defaultValue: a2 = [],
    onValueChange: d2,
    placeholder: f2 = "Add a tag",
    description: g2,
    id: m
  }) {
    let x = (0, i.useId)(), T = m ?? x, _ = g2 ? `${T}-description` : void 0, [b, j] = (0, i.useState)(a2), [v, N] = (0, i.useState)(""), [w, S] = (0, i.useState)(null), [$, k] = (0, i.useState)(""), C = (0, r.I)(), [R, E] = (0, o.l)(), L = (0, i.useRef)(null), O = (0, i.useRef)(null), P = (0, i.useRef)(null), z = (0, i.useRef)(""), [B, I] = (0, i.useState)("auto"), Y = e2 ?? b, D = null !== w && Y.includes(w) ? w : null;
    function A(t3) {
      k((e3) => e3 === t3 ? `${t3}\xA0` : t3);
    }
    function q(t3) {
      void 0 === e2 && j(t3), d2?.(t3);
    }
    function F(t3) {
      S(t3), null !== t3 && A(`${t3} selected. Press Backspace to remove it.`);
    }
    function H() {
      let t3 = v.trim();
      if (!t3) return;
      let e3 = Y.find((e4) => e4.toLowerCase() === t3.toLowerCase());
      if (e3) {
        let t4 = R.current?.querySelector(`[data-tag="${CSS.escape(e3)}"]`);
        t4 && !C && E(
          t4,
          { scale: [1, 1.06, 1] },
          {
            duration: c.T.duration.standard + c.T.duration.instant,
            ease: [...c.T.ease.inOut]
          }
        ), A(`${e3} is already added`);
        return;
      }
      q([...Y, t3]), N(""), S(null), A(`Added ${t3}`);
    }
    function J(t3) {
      q(Y.filter((e3) => e3 !== t3)), S(null), A(`Removed ${t3}`), O.current?.focus();
    }
    function U(t3, e3) {
      if (!t3.target.closest("button")) {
        if (!e3) return void t3.preventDefault();
        F(D === e3 ? null : e3), O.current?.focus();
      }
    }
    (0, i.useEffect)(() => {
      let t3 = L.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let e3 = new ResizeObserver(() => I(t3.offsetHeight));
      return e3.observe(t3), () => e3.disconnect();
    }, []), (0, i.useLayoutEffect)(() => {
      let t3 = P.current, e3 = null === D ? null : L.current?.querySelector(`[data-tag="${CSS.escape(D)}"]`);
      if (!t3) return;
      if (!e3) {
        z.current && E(t3, C ? { opacity: 0 } : { opacity: 0, scale: 0.9 }, {
          duration: C ? 0 : c.T.duration.instant,
          ease: [...c.T.ease.standard]
        }), z.current = "";
        return;
      }
      let a3 = {
        x: e3.offsetLeft,
        y: e3.offsetTop,
        width: e3.offsetWidth,
        height: e3.offsetHeight
      }, n2 = Object.values(a3).join(" ");
      n2 !== z.current && (!C && (z.current || Number(getComputedStyle(t3).opacity) > 0.02) ? E(
        t3,
        { ...a3, opacity: 1, scale: 1 },
        {
          ...c.T.spring.morph,
          opacity: { duration: c.T.duration.fast }
        }
      ) : E(
        t3,
        { ...a3, opacity: [0, 1], scale: [C ? 1 : 0.9, 1] },
        C ? { duration: 0, opacity: { duration: c.T.duration.instant } } : {
          duration: 0,
          opacity: { duration: c.T.duration.fast },
          scale: c.T.spring.snappy
        }
      ), z.current = n2);
    });
    let K = C ? { duration: 0 } : c.T.spring.morph, M = C ? { duration: 0 } : c.T.spring.smooth;
    return (0, n.jsxs)("div", {
      className: p().field,
      children: [
        (0, n.jsx)("label", { htmlFor: T, children: t2 }),
        (0, n.jsx)(l.PY1.div, {
          ref: R,
          className: p().control,
          initial: false,
          animate: { height: B },
          transition: M,
          children: (0, n.jsxs)("div", {
            ref: L,
            className: p().content,
            onClick: (t3) => {
              t3.target === t3.currentTarget && O.current?.focus();
            },
            children: [
              (0, n.jsx)("span", {
                ref: P,
                className: p().ring,
                "aria-hidden": "true"
              }),
              (0, n.jsx)(s.N, {
                initial: false,
                children: !v && !Y.length && (0, n.jsx)(
                  l.PY1.span,
                  {
                    className: p().placeholder,
                    "aria-hidden": "true",
                    initial: C ? { opacity: 0 } : {
                      opacity: 0,
                      y: "0.3em",
                      filter: `blur(${c.T.blur.soft}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, transition: { duration: 0 } },
                    transition: C ? { duration: c.T.duration.instant } : {
                      duration: c.T.duration.standard,
                      ease: [...c.T.ease.enter]
                    },
                    children: f2
                  },
                  "placeholder"
                )
              }),
              (0, n.jsx)(s.N, {
                initial: false,
                mode: "popLayout",
                children: Y.map(
                  (t3) => (0, n.jsxs)(
                    l.PY1.span,
                    {
                      layout: !C && "position",
                      className: p().tag,
                      "data-tag": t3,
                      "data-picked": t3 === D || void 0,
                      onMouseDown: (t4) => U(t4),
                      onClick: (e3) => U(e3, t3),
                      initial: C ? { opacity: 0 } : {
                        opacity: 0,
                        scale: 0.9,
                        filter: `blur(${c.T.blur.soft}px)`
                      },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        transitionEnd: { filter: "none" }
                      },
                      exit: C ? { opacity: 0, transition: { duration: 0 } } : {
                        opacity: 0,
                        scale: 0.9,
                        filter: `blur(${c.T.blur.subtle}px)`,
                        transition: {
                          duration: c.T.duration.instant,
                          ease: [...c.T.ease.standard]
                        }
                      },
                      transition: C ? { duration: c.T.duration.instant } : {
                        ...c.T.spring.morph,
                        layout: K,
                        opacity: {
                          duration: c.T.duration.fast,
                          ease: [...c.T.ease.enter]
                        },
                        filter: {
                          duration: c.T.duration.standard,
                          ease: [...c.T.ease.enter]
                        }
                      },
                      children: [
                        (0, n.jsx)("span", {
                          className: p().tagLabel,
                          children: t3
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          onClick: () => J(t3),
                          "aria-label": `Remove ${t3}`,
                          children: (0, n.jsx)(u.A, {
                            width: 14,
                            height: 14,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    },
                    t3
                  )
                )
              }),
              (0, n.jsx)(l.PY1.input, {
                layout: !C && "position",
                transition: { layout: K },
                ref: O,
                id: T,
                value: v,
                onChange: (t3) => {
                  N(t3.currentTarget.value), S(null);
                },
                onKeyDown: function(t3) {
                  let { key: e3, currentTarget: a3 } = t3, n2 = 0 === a3.selectionStart && 0 === a3.selectionEnd, i2 = null === D ? Y.length : Y.indexOf(D), r2 = true;
                  "Enter" === e3 || "," === e3 ? H() : ("Backspace" === e3 || "Delete" === e3) && null !== D ? J(D) : "Backspace" === e3 && n2 && Y.length ? F(Y[Y.length - 1]) : "ArrowLeft" === e3 && (n2 || null !== D) && i2 > 0 ? F(Y[i2 - 1]) : "ArrowRight" === e3 && null !== D ? F(Y[i2 + 1] ?? null) : "Escape" === e3 && null !== D ? F(null) : r2 = false, r2 && t3.preventDefault();
                },
                onBlur: () => {
                  H(), S(null);
                },
                placeholder: Y.length ? "" : f2,
                "aria-describedby": _
              })
            ]
          })
        }),
        (0, n.jsx)("span", {
          className: p().srOnly,
          "aria-live": "polite",
          children: $
        }),
        (0, n.jsx)(h, { id: _, text: g2, className: p().hint })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(42454, ".field{position:relative;display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500}\n.control{position:relative;z-index:2;display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);color:var(--foreground);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.control:hover:not(.disabled){border-color:var(--border-strong);background:var(--surface-muted)}\n.control:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--focus-ring)}\n.control.open{border-color:var(--border-strong);background:var(--surface-muted)}\n.control.disabled{opacity:.5;cursor:not-allowed}\n.control input{width:100%;min-width:0;border:0;outline:0;padding:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm)}\n.control input:focus-visible{outline:none}\n.control input::placeholder{color:var(--text-muted)}\n@media (prefers-reduced-motion:reduce){.chevron,.clear,.control,.option{transition:none}\n.open .chevron{transform:rotate(180deg)}\n.searchIcon{flex:0 0 auto;color:var(--text-muted)}\n.chevron{flex:0 0 auto;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring)}\n.clear{display:grid;width:22px;height:22px;flex:0 0 auto;place-items:center;border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.clear:hover{background:var(--surface-muted);color:var(--foreground)}\n.clear:focus-visible{--focus-outline-offset:1px}\n.hint{color:var(--text-muted);font-size:var(--text-xs)}\n.popover{position:absolute;z-index:80;top:calc(100% + 8px);right:0;left:0;overflow:hidden;transform-origin:top center;border:1px solid var(--border);border-radius:var(--radius-panel);padding:5px;background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);will-change:transform,opacity}\n.autoHeight{overflow:hidden}\n.listbox{max-height:min(300px,40vh);overflow-y:auto;overscroll-behavior:contain}\n.option{display:flex;min-height:36px;align-items:center;justify-content:space-between;gap:var(--space-3);border-radius:calc(var(--radius-panel) - 5px);padding:0 12px;color:var(--foreground);font-size:var(--text-sm);cursor:pointer;outline:none;user-select:none;transition:background-color 80ms var(--ease-standard),color 80ms var(--ease-standard)}\n.option>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.option[data-active=true]{background:var(--surface-muted)}\n.option[data-disabled=true]{opacity:.42;cursor:not-allowed}\n.check{flex:0 0 auto;color:var(--foreground)}\n.empty{padding:var(--space-3);color:var(--text-muted);font-size:var(--text-sm)}", {"field":"field","control":"control","disabled":"disabled","open":"open","chevron":"chevron","clear":"clear","option":"option","searchIcon":"searchIcon","hint":"hint","popover":"popover","autoHeight":"autoHeight","listbox":"listbox","check":"check","empty":"empty"});
A.regCss(42842, ".field{display:inline-flex;align-items:flex-start;gap:0;min-width:0}\n.box{position:relative;flex:0 0 auto;display:grid;place-items:center;width:var(--control-height-md);height:var(--control-height-md);border:0;border-radius:var(--radius-control);padding:0;background:transparent;color:var(--control-glyph);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.box[data-state=checked] .visual,.box[data-state=indeterminate] .visual{border-color:var(--control-on)}\n@media (hover:hover) and (pointer:fine){.box[data-state=unchecked]:hover:not(:disabled) .visual{border-color:var(--text-muted)}\n.box:active:not(:disabled) .visual{transform:scale(.95);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.box:disabled{opacity:.5;cursor:not-allowed}\n@media (prefers-reduced-motion:reduce){.box:active:not(:disabled) .visual,.visual{transition:none;transform:none}\n.visual{position:relative;display:block;width:18px;height:18px;border:1px solid var(--border-strong);border-radius:5px;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.fill{position:absolute;inset:-1px;border-radius:inherit;background:var(--control-on)}\n.mark{position:absolute;inset:-1px;width:18px;height:18px;overflow:visible}\n.copy{display:grid;gap:2px;min-width:0;margin-left:1px;padding-top:calc((var(--control-height-md) - var(--text-sm) * 1.4) / 2)}\n.copy label{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer}\n.copy span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}", {});
A.reg(43146, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => G,
    VY: () => W,
    ZL: () => P,
    bL: () => D,
    bm: () => K,
    hE: () => F,
    hJ: () => _,
    l9: () => z
  });
  var r = n(12115), o = n(70379), l = n(47527), a = n(68599), i = n(89971), d = n(59322), u = n(19416), c = n(69885), s = n(19040), f = n(83935), p = n(55897), y = n(32007), h = n(66294), m = n(5174), g = n(22954), x = n(42442), v = n(95155), k = Object.defineProperty, M = (e2, t2) => k(e2, "name", { value: t2, configurable: true }), A = "Dialog", [w, b] = (0, a.A)(A), [j, C] = w(A), D = M((e2) => {
    let {
      __scopeDialog: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: a2,
      modal: u2 = true
    } = e2, c2 = r.useRef(null), s2 = r.useRef(null), [f2, p2] = (0, d.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: a2,
      caller: A
    }), [y2, h2] = r.useState(0), [m2, g2] = r.useState(0);
    return (0, v.jsx)(j, {
      scope: t2,
      triggerRef: c2,
      contentRef: s2,
      contentId: (0, i.B)(),
      titleId: (0, i.B)(),
      descriptionId: (0, i.B)(),
      titlePresent: y2 > 0,
      descriptionPresent: m2 > 0,
      setTitleCount: h2,
      setDescriptionCount: g2,
      open: f2,
      onOpenChange: p2,
      onOpenToggle: r.useCallback(() => p2((e3) => !e3), [p2]),
      modal: u2,
      children: n2
    });
  }, "Dialog"), z = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, a2 = C("DialogTrigger", n2), i2 = (0, l.s)(t2, a2.triggerRef);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a2.open,
        "aria-controls": a2.open ? a2.contentId : void 0,
        "data-state": B(a2.open),
        ...r2,
        ref: i2,
        onClick: (0, o.mK)(e2.onClick, a2.onOpenToggle)
      });
    }, "DialogTrigger")
  ), R = "DialogPortal", [E, O] = w(R, { forceMount: void 0 }), P = M((e2) => {
    let { __scopeDialog: t2, forceMount: n2, children: o2, container: l2 } = e2, a2 = C(R, t2);
    return (0, v.jsx)(E, {
      scope: t2,
      forceMount: n2,
      children: r.Children.map(
        o2,
        (e3) => (0, v.jsx)(f.C, {
          present: n2 || a2.open,
          children: (0, v.jsx)(s.Z, {
            asChild: true,
            container: l2,
            children: e3
          })
        })
      )
    });
  }, "DialogPortal"), I = "DialogOverlay", _ = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(I, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(I, e2.__scopeDialog);
      return l2.modal ? (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: (0, v.jsx)(T, { ...o2, ref: t2 })
      }) : null;
    }, "DialogOverlay")
  ), S = (0, x.TL)("DialogOverlay.RemoveScroll"), T = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C(I, n2), a2 = (0, u.e0)(), i2 = (0, l.s)(t2, a2);
      return (0, v.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        shards: [o2.contentRef],
        children: (0, v.jsx)(p.sG.div, {
          "data-state": B(o2.open),
          ...r2,
          ref: i2,
          style: { pointerEvents: "auto", ...r2.style }
        })
      });
    }, "DialogOverlayImpl")
  ), q = "DialogContent", G = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(q, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(q, e2.__scopeDialog);
      return (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: l2.modal ? (0, v.jsx)(L, { ...o2, ref: t2 }) : (0, v.jsx)(H, { ...o2, ref: t2 })
      });
    }, "DialogContent")
  ), L = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), a2 = r.useRef(null), i2 = (0, l.s)(t2, n2.contentRef, a2);
      return r.useEffect(() => {
        let e3 = a2.current;
        if (e3) return (0, g.Eq)(e3);
      }, []), (0, v.jsx)(V, {
        ...e2,
        ref: i2,
        trapFocus: n2.open,
        disableOutsidePointerEvents: n2.open,
        onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
          e3.preventDefault(), n2.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, o.mK)(e2.onPointerDownOutside, (e3) => {
          let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
          (2 === t3.button || n3) && e3.preventDefault();
        }),
        onFocusOutside: (0, o.mK)(
          e2.onFocusOutside,
          (e3) => e3.preventDefault()
        )
      });
    }, "DialogContentModal")
  ), H = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), o2 = r.useRef(false), l2 = r.useRef(false);
      return (0, v.jsx)(V, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, l2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (l2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && l2.current && t3.preventDefault();
        }
      });
    }, "DialogContentNonModal")
  ), V = r.forwardRef(
    M(function(e2, t2) {
      let {
        __scopeDialog: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: l2,
        ...a2
      } = e2, i2 = C(q, n2);
      return (0, y.Oh)(), (0, v.jsx)(v.Fragment, {
        children: (0, v.jsx)(c.n, {
          asChild: true,
          loop: true,
          trapped: r2,
          onMountAutoFocus: o2,
          onUnmountAutoFocus: l2,
          children: (0, v.jsx)(u.qW, {
            role: "dialog",
            id: i2.contentId,
            "aria-describedby": i2.descriptionPresent ? i2.descriptionId : void 0,
            "aria-labelledby": i2.titlePresent ? i2.titleId : void 0,
            "data-state": B(i2.open),
            ...a2,
            ref: t2,
            deferPointerDownOutside: true,
            onDismiss: () => i2.onOpenChange(false)
          })
        })
      });
    }, "DialogContentImpl")
  ), F = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogTitle", n2), { setTitleCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.h2, { id: o2.titleId, ...r2, ref: t2 });
    }, "DialogTitle")
  ), W = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogDescription", n2), { setDescriptionCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.p, { id: o2.descriptionId, ...r2, ref: t2 });
    }, "DialogDescription")
  ), K = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, l2 = C("DialogClose", n2);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => l2.onOpenChange(false))
      });
    }, "DialogClose")
  );
  function B(e2) {
    return e2 ? "open" : "closed";
  }
  M(B, "getState");
}

__m(__module,__exports,__require);
});
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
A.regCss(44370, ".bar{display:inline-flex;max-width:100%;min-height:46px;align-items:center;gap:8px;border:1px solid var(--border);border-radius:var(--radius-panel);padding:5px 6px 5px 14px;background:var(--surface-raised);box-shadow:var(--shadow-raised);color:var(--foreground);transform-origin:50% 100%}\n@media (max-width:520px){.bar{flex-wrap:wrap;width:100%}\n.count{position:relative;flex:0 0 auto;color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap}\n.count{flex:1 1 auto;min-width:0}\n.countSlot{display:inline-flex;min-width:0}\n.countRow{display:inline-flex;flex:none;align-items:baseline;white-space:pre}\n.countNumber{position:relative;display:inline-flex;min-width:1ch;color:var(--accent);font-weight:500;font-variant-numeric:tabular-nums}\n.digits,.plural,.selected,.words{display:inline-block}\n.words{position:relative}\n.divider{width:1px;height:20px;flex:0 0 auto;background:var(--border)}\n.divider{display:none}\n.actions{display:flex;min-width:0;align-items:center;gap:2px}\n.actions button,.clear{display:inline-flex;min-height:34px;align-items:center;justify-content:center;gap:7px;border:0;border-radius:calc(var(--radius-panel) - 6px);padding:0 10px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-xs);white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.actions button:active,.clear:active{background:var(--surface-muted);transform:scale(.97);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-instant);transition-timing-function:var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.actions button:hover,.clear:hover{background:var(--surface-muted)}\n.actions .destructive:hover{background:color-mix(in oklab,var(--danger) 9%,var(--surface))}\n.actions .destructive{color:var(--danger)}\n.actions .destructive:active{background:color-mix(in oklab,var(--danger) 12%,var(--surface))}\n.actions{flex:1 0 100%;flex-wrap:wrap;border-top:1px solid var(--border-subtle);padding-top:4px}\n.actions button{flex:1 1 auto;padding-inline:6px}\n.actions{order:2}\n@media (prefers-reduced-motion:reduce){.actions button,.clear{transition:none}\n.actions button:active,.clear:active{transform:none}\n.clear:active{transform:scale(.96)}\n.clear{width:34px;flex:0 0 auto;padding:0;color:var(--text-muted)}\n.clear{order:1}\n.actionIcon{display:inline-flex;align-items:center;color:currentColor}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"bar":"bar","count":"count","countSlot":"countSlot","countRow":"countRow","countNumber":"countNumber","digits":"digits","plural":"plural","selected":"selected","words":"words","divider":"divider","actions":"actions","clear":"clear","destructive":"destructive","actionIcon":"actionIcon","srOnly":"srOnly"});
A.reg(44818, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { i: () => j });
  var a = i(95155), n = i(12115), s = i(31966), r = i(90467), o = i(80642), l = i(25354), d = i(28245), c = i(92171), u = i(18310), p = i(7770), h = i(55818), m = i.n(h);
  let x = { duration: p.T.duration.instant, ease: [...p.T.ease.standard] }, f = {
    enter: (e2) => ({ opacity: 0, x: 20 * e2 }),
    center: { opacity: 1, x: 0 },
    exit: (e2) => ({
      opacity: 0,
      x: -20 * e2,
      transition: { x: p.T.spring.smooth, opacity: x }
    })
  }, _ = {
    enter: (e2 = 1) => ({
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${p.T.blur.soft}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2 = 1) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${p.T.blur.subtle}px)`,
      transition: x
    })
  }, b = { duration: p.T.duration.standard, ease: [...p.T.ease.enter] };
  function y({ value: e2, direction: t2 = 1, reduced: i2, className: n2 }) {
    return (0, a.jsx)("span", {
      className: `${m().swap} ${n2 ?? ""}`,
      "aria-hidden": "true",
      children: (0, a.jsx)(o.N, {
        initial: false,
        custom: t2,
        children: (0, a.jsx)(
          l.PY1.span,
          {
            custom: t2,
            variants: _,
            initial: !i2 && "enter",
            animate: "center",
            exit: i2 ? void 0 : "exit",
            transition: i2 ? { duration: 0 } : b,
            children: e2
          },
          String(e2)
        )
      })
    });
  }
  function g({ label: e2, reduced: t2 }) {
    let i2 = (0, n.useRef)(null), s2 = (0, n.useRef)(0), r2 = (0, d.d)("auto");
    return (0, n.useEffect)(() => {
      let e3 = i2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => {
        s2.current = e3.offsetWidth;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useLayoutEffect)(() => {
      let e3 = r2.get(), a2 = i2.current?.offsetWidth ?? 0, n2 = "number" == typeof e3 ? e3 : s2.current;
      if (s2.current = a2, t2 || !n2 || !a2 || 1 > Math.abs(n2 - a2))
        return void r2.jump("auto");
      r2.jump(n2);
      let o2 = (0, c.i)(r2, a2, {
        ...p.T.spring.morph,
        onComplete: () => r2.jump("auto")
      });
      return () => o2.stop();
    }, [e2, t2, r2]), (0, a.jsxs)("span", {
      className: m().morph,
      children: [
        (0, a.jsx)("span", {
          ref: i2,
          className: m().sizer,
          "aria-hidden": "true",
          children: e2
        }),
        (0, a.jsx)(l.PY1.span, {
          className: m().morphBox,
          style: { width: r2 },
          children: (0, a.jsx)(y, { value: e2, reduced: t2 })
        }),
        (0, a.jsx)("span", { className: m().srOnly, children: e2 })
      ]
    });
  }
  function j({
    steps: e2,
    onComplete: t2,
    nextLabel: i2 = "Continue",
    completeLabel: d2 = "Finish",
    initialStep: c2 = 0
  }) {
    let [h2, _2] = (0, n.useState)(
      Math.min(Math.max(c2, 0), Math.max(e2.length - 1, 0))
    ), [v, w] = (0, n.useState)(1), [T, N] = (0, n.useState)(false), [k, S] = (0, n.useState)("auto"), $ = (0, n.useRef)(null), P = (0, n.useRef)(null), C = (0, n.useRef)(null), A = (0, n.useRef)(false), z = (0, n.useId)(), D = (0, u.I)() ?? false;
    (0, n.useEffect)(() => {
      A.current && (A.current = false, (T ? P.current : $.current)?.focus());
    }, [T, h2]);
    let R = (0, n.useCallback)((e3) => {
      if (!e3) return;
      let t3 = new ResizeObserver(
        ([t4]) => S(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    if (!e2.length) return null;
    let L = e2[h2], E = h2 === e2.length - 1, I = D ? { duration: 0 } : { x: p.T.spring.smooth, opacity: b }, M = (e3) => {
      C.current && (C.current.dataset.resizing = String(e3));
    };
    return (0, a.jsxs)("form", {
      className: m().form,
      onSubmit: function(e3) {
        e3.preventDefault(), A.current = true, E ? (N(true), t2?.()) : (w(1), _2((e4) => e4 + 1));
      },
      "aria-label": "Multi-step form",
      children: [
        (0, a.jsxs)("nav", {
          className: m().progress,
          "aria-label": `Progress: step ${h2 + 1} of ${e2.length}`,
          children: [
            (0, a.jsx)("ol", {
              className: m().progressList,
              children: e2.map(
                (e3, t3) => (0, a.jsxs)(
                  "li",
                  {
                    className: `${m().progressItem} ${t3 < h2 || T && t3 === h2 ? m().complete : ""} ${t3 === h2 && !T ? m().current : ""}`,
                    "aria-current": t3 === h2 ? "step" : void 0,
                    children: [
                      (0, a.jsx)("span", {
                        className: m().progressMarker,
                        "aria-hidden": "true",
                        children: (0, a.jsx)(o.N, {
                          initial: false,
                          children: t3 < h2 || T && t3 === h2 ? (0, a.jsx)(
                            l.PY1.svg,
                            {
                              className: m().markerGlyph,
                              viewBox: "0 0 24 24",
                              width: 11,
                              height: 11,
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: 2.6,
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              initial: !D && { opacity: 0, scale: 0.6 },
                              animate: { opacity: 1, scale: 1 },
                              exit: D ? void 0 : {
                                opacity: 0,
                                scale: 0.6,
                                transition: x
                              },
                              transition: D ? { duration: 0 } : p.T.spring.snappy,
                              children: (0, a.jsx)(l.PY1.path, {
                                d: "M4 12.5 9 17.5 20 6.5",
                                initial: !D && { pathLength: 0 },
                                animate: { pathLength: 1 },
                                transition: D ? { duration: 0 } : {
                                  duration: 0.32,
                                  ease: [...p.T.ease.enter],
                                  delay: 0.04
                                }
                              })
                            },
                            "done"
                          ) : (0, a.jsx)(
                            l.PY1.span,
                            {
                              className: m().markerGlyph,
                              initial: !D && {
                                opacity: 0,
                                scale: 0.6,
                                filter: `blur(${p.T.blur.subtle}px)`
                              },
                              animate: {
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)"
                              },
                              exit: D ? void 0 : {
                                opacity: 0,
                                scale: 0.6,
                                transition: x
                              },
                              transition: D ? { duration: 0 } : p.T.spring.snappy,
                              children: t3 + 1
                            },
                            "number"
                          )
                        })
                      }),
                      (0, a.jsx)("span", {
                        className: m().progressLabel,
                        "data-label": e3.title,
                        children: e3.title
                      })
                    ]
                  },
                  e3.id
                )
              )
            }),
            (0, a.jsxs)("span", {
              className: m().progressCount,
              "aria-hidden": "true",
              children: [
                "Step ",
                (0, a.jsx)(y, {
                  value: h2 + 1,
                  direction: v,
                  reduced: D,
                  className: m().countValue
                }),
                " of ",
                e2.length
              ]
            }),
            (0, a.jsxs)("span", {
              className: m().srOnly,
              "aria-live": "polite",
              children: ["Step ", h2 + 1, " of ", e2.length]
            })
          ]
        }),
        (0, a.jsx)(l.PY1.div, {
          ref: C,
          className: m().viewport,
          initial: false,
          animate: { height: k },
          transition: D ? { duration: 0 } : p.T.spring.smooth,
          onAnimationStart: () => M(true),
          onAnimationComplete: () => M(false),
          children: (0, a.jsx)(o.N, {
            initial: false,
            custom: v,
            children: T ? (0, a.jsxs)(
              l.PY1.section,
              {
                ref: R,
                className: m().success,
                initial: !D && { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: D ? { duration: 0 } : {
                  duration: p.T.duration.standard,
                  ease: [...p.T.ease.enter]
                },
                "aria-labelledby": z,
                role: "status",
                children: [
                  (0, a.jsx)("span", {
                    className: m().successIcon,
                    "aria-hidden": "true",
                    children: (0, a.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      width: 18,
                      height: 18,
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: (0, a.jsx)(l.PY1.path, {
                        d: "M4 12.5 9 17.5 20 6.5",
                        initial: !D && { pathLength: 0 },
                        animate: { pathLength: 1 },
                        transition: D ? { duration: 0 } : {
                          duration: 0.4,
                          ease: [...p.T.ease.enter],
                          delay: 0.08
                        }
                      })
                    })
                  }),
                  (0, a.jsx)(l.PY1.h2, {
                    id: z,
                    ref: P,
                    tabIndex: -1,
                    initial: !D && {
                      opacity: 0,
                      y: "0.3em",
                      filter: `blur(${p.T.blur.soft}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    transition: D ? { duration: 0 } : { ...b, delay: 0.1 },
                    children: "All set"
                  }),
                  (0, a.jsx)(l.PY1.p, {
                    className: m().successNote,
                    initial: !D && { opacity: 0, y: "0.3em" },
                    animate: { opacity: 1, y: 0 },
                    transition: D ? { duration: 0 } : { ...b, delay: 0.1 + p.T.stagger.word },
                    children: "Your response has been saved."
                  })
                ]
              },
              "complete"
            ) : (0, a.jsxs)(
              l.PY1.fieldset,
              {
                ref: R,
                className: m().step,
                custom: v,
                variants: f,
                initial: !D && "enter",
                animate: "center",
                exit: D ? void 0 : "exit",
                transition: I,
                children: [
                  (0, a.jsx)("legend", {
                    ref: (e3) => {
                      e3 && ($.current = e3);
                    },
                    tabIndex: -1,
                    children: L.title
                  }),
                  L.description && (0, a.jsx)("p", {
                    className: m().description,
                    children: L.description
                  }),
                  (0, a.jsx)("div", {
                    className: m().content,
                    children: L.content
                  })
                ]
              },
              L.id
            )
          })
        }),
        (0, a.jsx)(o.N, {
          initial: false,
          children: !T && (0, a.jsx)(
            l.PY1.div,
            {
              className: m().actionsShell,
              exit: D ? void 0 : {
                opacity: 0,
                height: 0,
                overflow: "hidden",
                transition: { height: p.T.spring.smooth, opacity: x }
              },
              children: (0, a.jsxs)("div", {
                className: m().actions,
                children: [
                  (0, a.jsxs)("button", {
                    className: m().back,
                    type: "button",
                    onClick: () => {
                      A.current = true, w(-1), _2((e3) => Math.max(0, e3 - 1));
                    },
                    disabled: 0 === h2,
                    children: [
                      (0, a.jsx)(s.A, {
                        "aria-hidden": "true",
                        width: 16,
                        height: 16
                      }),
                      " Back"
                    ]
                  }),
                  (0, a.jsxs)("button", {
                    className: m().next,
                    type: "submit",
                    children: [
                      (0, a.jsx)(g, { label: E ? d2 : i2, reduced: D }),
                      (0, a.jsx)(r.A, {
                        "aria-hidden": "true",
                        width: 16,
                        height: 16
                      })
                    ]
                  })
                ]
              })
            },
            "actions"
          )
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(46439, ".demo{display:grid;justify-items:center;gap:var(--space-4);width:100%;max-width:420px;margin-inline:auto}\n.list{display:grid;width:100%;margin:0;padding:0;list-style:none;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n.row{display:flex;align-items:center;gap:var(--space-3);min-width:0;padding:var(--space-3) var(--space-4)}\n.row+.row{border-top:1px solid var(--border-subtle)}\n.copy{display:grid;min-width:0}\n.meta,.name{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.name{color:var(--foreground);font-size:var(--text-sm);font-weight:500}\n.meta{color:var(--text-muted);font-size:var(--text-xs)}\n.slot{display:flex;justify-content:center;width:100%;min-height:46px}\n@media (max-width:520px){.slot{min-height:93px}", {"demo":"demo","list":"list","row":"row","copy":"copy","meta":"meta","name":"name","slot":"slot"});
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
A.reg(51128, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "link-2",
    size: 24,
    node: [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
      ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(52427, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "calendar-days",
    size: 24,
    node: [
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }
      ],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "M8 13h.01", key: "1sbv64" }],
      ["path", { d: "M12 13h.01", key: "y0uutt" }],
      ["path", { d: "M16 13h.01", key: "wip0gl" }],
      ["path", { d: "M8 17h.01", key: "p3bg7i" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
      ["path", { d: "M16 17h.01", key: "ql8jdd" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(52824, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  let i;
  n.d(t, { o: () => L });
  var r = n(95155), a = n(55809), u = n(25354), s = n(18310), l = n(28245), o = n(92171), c = n(80642), d = n(2125), m = n(36565), f = n(12115), p = n(7770), h = n(78684), x = n.n(h);
  let { spring: b, duration: y, blur: _ } = p.T, g = [...p.T.ease.enter], v = [...p.T.ease.standard], w = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], N = {
    type: "spring",
    stiffness: (i = 2 * Math.PI / (1.2 * b.morph.visualDuration)) * i,
    damping: 2 * (1 - b.morph.bounce) * i
  }, j = (e2) => (String(e2).split(".")[1] ?? "").length, R = (e2, t2) => "function" == typeof e2 ? e2(t2) : e2 ?? "", $ = {
    enter: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${_.soft}px)`
    }),
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: {
        width: b.morph,
        scale: b.morph,
        opacity: b.morph,
        y: b.snappy,
        filter: { duration: 0.3, ease: v }
      }
    },
    exit: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${_.subtle}px)`,
      transition: {
        width: b.smooth,
        scale: b.smooth,
        y: { duration: y.fast, ease: v },
        opacity: { duration: y.instant },
        filter: { duration: y.instant }
      }
    })
  }, M = (e2) => ({ width: "auto", scale: 1, opacity: e2, y: 0, filter: "none" }), P = {
    enter: M(0),
    center: { ...M(1), transition: { duration: y.instant } },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  }, S = {
    enter: M(1),
    center: { ...M(1), transition: { duration: 0 } },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  };
  function E({ position: e2, digit: t2 }) {
    let n2 = (e3) => ((t2 - e3) % 10 + 15) % 10 - 5, i2 = (0, a.G)(e2, (e3) => `${1.05 * n2(e3)}em`), s2 = (0, a.G)(e2, (e3) => Math.max(0, 1 - Math.abs(n2(e3)) ** 1.5 * 1.1)), l2 = (0, a.G)(e2, (e3) => Math.abs(n2(e3)) >= 1 ? "hidden" : "visible"), o2 = (0, a.G)(e2, (e3) => {
      let t3 = Math.abs(n2(e3));
      return t3 < 0.02 || t3 >= 1 ? "none" : `blur(${(t3 * _.soft * 0.75).toFixed(2)}px)`;
    });
    return (0, r.jsx)(u.PY1.span, {
      className: x().glyph,
      style: { y: i2, opacity: s2, filter: o2, visibility: l2 },
      children: t2
    });
  }
  function T({ digit: e2, direction: t2, instant: n2 }) {
    let i2 = (0, s.I)(), a2 = (0, l.d)(e2), u2 = (0, f.useRef)({ digit: e2, target: e2 });
    return (0, f.useLayoutEffect)(() => {
      let r2 = u2.current;
      if (r2.digit === e2) return;
      let s2 = t2 > 0 ? (e2 - r2.digit + 10) % 10 : -((r2.digit - e2 + 10) % 10);
      Math.abs(s2) > 5 && (s2 -= 10 * Math.sign(s2)), r2.target += s2, r2.digit = e2, n2 || i2 ? a2.jump(r2.target) : (0, o.i)(a2, r2.target, b.snappy);
    }, [e2, t2, n2, a2, i2]), (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: x().sizer, children: "0" }),
        w.map((e3) => (0, r.jsx)(E, { position: a2, digit: e3 }, e3))
      ]
    });
  }
  function k({ value: e2, format: t2, direction: n2, instant: i2 }) {
    let a2, l2, o2, d2 = (0, s.I)(), m2 = i2 ? S : d2 ? P : $;
    return (0, r.jsx)(c.N, {
      initial: false,
      custom: n2,
      children: (l2 = (a2 = t2.formatToParts(e2)).reduce(
        (e3, t3) => e3 + ("integer" === t3.type ? t3.value.length : 0),
        0
      ), o2 = 0, a2.flatMap(
        (e3, t3) => "integer" === e3.type ? [...e3.value].map((e4) => ({ key: `i${--l2}`, digit: Number(e4) })) : "fraction" === e3.type ? [...e3.value].map((e4) => ({ key: `f${o2++}`, digit: Number(e4) })) : [
          {
            key: "group" === e3.type ? `g${l2}` : "decimal" === e3.type ? "d" : "minusSign" === e3.type ? "m" : `${e3.type}${t3}`,
            text: e3.value
          }
        ]
      )).map(
        (e3) => (0, r.jsx)(
          u.PY1.span,
          {
            className: "digit" in e3 ? x().column : x().symbol,
            custom: n2,
            variants: m2,
            initial: "enter",
            animate: "center",
            exit: "exit",
            children: "digit" in e3 ? (0, r.jsx)(T, { digit: e3.digit, direction: n2, instant: i2 }) : e3.text
          },
          e3.key
        )
      )
    });
  }
  function D({ text: e2, direction: t2, className: n2 }) {
    let i2 = (0, s.I)();
    return (0, r.jsx)("span", {
      className: n2,
      children: (0, r.jsx)(c.N, {
        initial: false,
        custom: t2,
        children: [...e2].map(
          (e3, n3) => (0, r.jsx)(
            u.PY1.span,
            {
              className: x().char,
              custom: t2,
              variants: i2 ? P : $,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: e3
            },
            `${n3}:${e3}`
          )
        )
      })
    });
  }
  let I = (e2) => {
    let t2 = e2?.replace(/[^\d.-]/g, "");
    return t2 && /\d/.test(t2) && Number.isFinite(Number(t2)) ? Number(t2) : null;
  }, F = (e2, t2) => {
    let n2 = e2.split(" ");
    return t2.split(" ").map((e3, t3) => {
      let i2 = I(n2[t3]), r2 = I(e3);
      return null !== i2 && null !== r2 && r2 < i2 ? -1 : 1;
    });
  }, C = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${_.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: { duration: 0.22, ease: g, opacity: b.morph }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${_.subtle}px)`,
      transition: { duration: 0.14, ease: v }
    })
  }, z = {
    enter: { opacity: 0, y: 0, filter: "none" },
    center: {
      opacity: 1,
      y: 0,
      filter: "none",
      transition: { duration: y.instant }
    },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function A({ word: e2, direction: t2 }) {
    let n2 = (0, s.I)(), i2 = (0, f.useRef)(null), a2 = (0, l.d)("auto"), d2 = (0, f.useRef)(false);
    return (0, f.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        !d2.current || n2 ? a2.jump(e3.offsetWidth) : (0, o.i)(a2, e3.offsetWidth, b.morph), d2.current = true;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [n2, a2]), (0, r.jsxs)(u.PY1.span, {
      className: x().wordSlot,
      style: { width: a2 },
      children: [
        (0, r.jsx)("span", { ref: i2, className: x().wordSizer, children: e2 }),
        (0, r.jsx)(c.N, {
          initial: false,
          mode: "popLayout",
          custom: t2,
          children: (0, r.jsx)(
            u.PY1.span,
            {
              className: x().word,
              custom: t2,
              variants: n2 ? z : C,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function G({ text: e2 }) {
    let [t2, n2] = (0, f.useState)({ text: e2, directions: [] });
    t2.text !== e2 && n2({ text: e2, directions: F(t2.text, e2) });
    let i2 = t2.text === e2 ? t2.directions : F(t2.text, e2), a2 = e2.split(" ");
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: x().srOnly, children: e2 }),
        (0, r.jsx)("span", {
          className: x().words,
          "aria-hidden": "true",
          children: a2.map(
            (e3, t3) => (0, r.jsxs)(
              f.Fragment,
              {
                children: [
                  t3 > 0 && " ",
                  (0, r.jsx)(A, { word: e3, direction: i2[t3] ?? 1 })
                ]
              },
              t3
            )
          )
        })
      ]
    });
  }
  function U({ id: e2, text: t2, className: n2 }) {
    return (0, r.jsx)(c.N, {
      initial: false,
      children: t2 ? (0, r.jsx)(X, { id: e2, text: t2, className: n2 }, "message") : null
    });
  }
  function X({ id: e2, text: t2, className: n2 }) {
    let i2 = (0, s.I)(), a2 = (0, f.useRef)(null), [l2, o2] = (0, f.useState)("auto");
    return (0, f.useLayoutEffect)(() => {
      let e3 = a2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([t4]) => o2(t4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsx)(u.PY1.span, {
      className: x().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: l2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: i2 ? { duration: 0 } : { height: b.smooth, opacity: { duration: y.instant } }
      },
      transition: i2 ? { duration: 0 } : { height: b.smooth, opacity: { duration: y.fast } },
      children: (0, r.jsx)(u.PY1.span, {
        ref: a2,
        id: e2,
        className: n2,
        initial: !i2 && { y: "0.35em", filter: `blur(${_.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: { duration: i2 ? 0 : y.standard, ease: g },
        children: (0, r.jsx)(G, { text: t2 })
      })
    });
  }
  function O({ id: e2, edge: t2, text: n2 }) {
    let i2 = (0, s.I)();
    return (0, r.jsx)(c.N, {
      initial: false,
      children: 0 !== t2 && (0, r.jsx)(
        u.PY1.span,
        {
          id: e2,
          className: x().limit,
          initial: i2 ? { opacity: 0 } : {
            opacity: 0,
            y: `${0.45 * t2}em`,
            filter: `blur(${_.subtle}px)`
          },
          animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transitionEnd: { filter: "none" }
          },
          exit: {
            opacity: 0,
            transition: { duration: i2 ? y.instant : y.standard, ease: v }
          },
          transition: i2 ? { duration: y.instant } : {
            y: b.snappy,
            opacity: { duration: y.fast },
            filter: { duration: y.fast }
          },
          children: n2
        },
        "limit"
      )
    });
  }
  function Y({
    toward: e2,
    label: t2,
    disabled: n2,
    controls: i2,
    limit: a2,
    pressed: u2,
    iconRef: s2,
    onPress: l2,
    onRelease: o2,
    onActivate: c2
  }) {
    let f2 = e2 > 0 ? d.A : m.A;
    return (0, r.jsx)("button", {
      type: "button",
      className: x().step,
      disabled: n2,
      "aria-controls": i2,
      "aria-label": `${e2 > 0 ? "Increase" : "Decrease"} ${t2}`,
      "aria-disabled": a2 || void 0,
      "data-pressed": u2 || void 0,
      onPointerDown: (e3) => {
        0 === e3.button && l2();
      },
      onPointerUp: o2,
      onPointerLeave: o2,
      onPointerCancel: o2,
      onMouseDown: (e3) => e3.preventDefault(),
      onClick: (e3) => {
        0 === e3.detail && c2();
      },
      onContextMenu: (e3) => e3.preventDefault(),
      children: (0, r.jsx)("span", {
        ref: s2,
        className: x().icon,
        children: (0, r.jsx)(f2, {
          size: 16,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        })
      })
    });
  }
  function L({
    label: e2,
    value: t2,
    defaultValue: n2 = 0,
    onValueChange: i2,
    min: c2 = 0,
    max: d2 = Number.MAX_SAFE_INTEGER,
    step: m2 = 1,
    largeStep: p2,
    description: h2,
    disabled: y2,
    id: _2,
    prefix: g2,
    suffix: v2,
    scrub: w2 = false,
    locale: $2 = "en-US",
    formatOptions: M2,
    size: P2 = "md",
    limitHint: S2 = true
  }) {
    let E2 = (0, s.I)(), T2 = (0, f.useId)(), I2 = _2 ?? T2, F2 = h2 ? `${I2}-description` : void 0, C2 = `${I2}-limit`, z2 = m2 > 0 ? m2 : 1, [A2, G2] = (0, f.useState)(n2), X2 = t2 ?? A2, [H, B] = (0, f.useState)(""), [K, W] = (0, f.useState)(false), [q, Z] = (0, f.useState)(0), [J, Q] = (0, f.useState)(false), [V, ee] = (0, f.useState)(""), [et, en] = (0, f.useState)(0), [ei, er] = (0, f.useState)(false), ea = (0, f.useRef)(null), eu = (0, f.useRef)(null), es = (0, f.useRef)(null), el = (0, f.useRef)(void 0), eo = (0, f.useRef)(void 0), ec = (0, f.useRef)(void 0), ed = (0, f.useRef)({ edge: 0, count: 0, at: 0 }), em = (0, f.useRef)(null), ef = (0, f.useRef)(null), ep = (0, f.useRef)(X2), eh = (0, f.useRef)(X2), ex = (0, f.useRef)(void 0), eb = (0, f.useRef)(null), ey = (0, f.useRef)(false), e_ = (0, f.useRef)(null), eg = (0, f.useRef)(false), ev = (0, f.useRef)(() => false), ew = (0, l.d)(0), eN = (0, l.d)(0), ej = (0, l.d)(0), eR = (0, a.G)(() => eN.get() + ej.get()), e$ = Number.isFinite(c2) ? c2 : 0, eM = Math.max(j(z2), j(e$)), eP = M2?.minimumFractionDigits ?? eM, eS = Math.max(eP, M2?.maximumFractionDigits ?? eM), eE = M2?.useGrouping ?? true, eT = (0, f.useMemo)(
      () => new Intl.NumberFormat($2, {
        minimumFractionDigits: eP,
        maximumFractionDigits: eS,
        useGrouping: eE,
        numberingSystem: "latn"
      }),
      [$2, eP, eS, eE]
    ), ek = (0, f.useMemo)(() => {
      let e3 = new Intl.NumberFormat($2).formatToParts(-1234.5);
      return {
        group: e3.find((e4) => "group" === e4.type)?.value ?? ",",
        decimal: e3.find((e4) => "decimal" === e4.type)?.value ?? "."
      };
    }, [$2]), eD = (e3) => Number(e3.toFixed(eM)) || 0, eI = (e3) => eD(e$ + Math.round((e3 - e$) / z2) * z2), eF = (e3, t3) => {
      let n3 = (e3 - e$) / z2;
      return eD(
        e$ + ((t3 > 0 ? Math.floor(n3 + 1e-7) : Math.ceil(n3 - 1e-7)) + t3) * z2
      );
    }, eC = (e3) => `${R(g2, e3)}${eT.format(e3)}${R(v2, e3)}`.trim();
    function ez(e3) {
      let t3 = e3.split(ek.group).join("").replace(ek.decimal, ".").replace(/[^\d.-]/g, "");
      if (!/\d/.test(t3)) return null;
      let n3 = Number(t3);
      return Number.isFinite(n3) ? n3 : null;
    }
    let eA = K ? ez(H) : null, eG = eA ?? X2, [eU, eX] = (0, f.useState)({ value: eG, direction: 1 });
    eU.value !== eG && eX({ value: eG, direction: eG > eU.value ? 1 : -1 });
    let eO = eU.value === eG ? eU.direction : eG > eU.value ? 1 : -1;
    function eY(e3, n3) {
      if (!Number.isFinite(e3)) return false;
      let r2 = Math.min(d2, Math.max(c2, e3)), a2 = Math.sign(e3 - r2);
      return a2 && "scrub" !== n3 ? (!(function(e4, t3) {
        let n4 = performance.now(), i3 = ed.current;
        i3.count = i3.edge === e4 && n4 - i3.at < 700 ? i3.count + 1 : 1, i3.edge = e4, i3.at = n4;
        let r3 = ea.current;
        if (r3 && (r3.dataset.strain = e4 > 0 ? "max" : "min", window.clearTimeout(ec.current), ec.current = window.setTimeout(() => {
          delete r3.dataset.strain;
        }, 420)), !E2) {
          (0, o.i)(ew, 0, {
            ...N,
            velocity: -(130 * e4) * (1 + 0.22 * Math.min(i3.count - 1, 4))
          });
          let n5 = (e4 > 0 ? es : eu).current;
          n5 && ("button" === t3 || "key" === t3) && (0, o.i)(
            n5,
            { x: [0, -2.5, 2.5, -1.5, 1, 0] },
            { duration: 0.32, ease: "easeOut" }
          );
        }
        S2 && (en(e4), window.clearTimeout(el.current), el.current = window.setTimeout(() => en(0), 1500));
      })(a2 > 0 ? 1 : -1, n3), ee(`${eC(r2)}, ${a2 > 0 ? "maximum" : "minimum"}`)) : "button" === n3 && r2 !== ep.current && ee(eC(r2)), r2 !== ep.current && (ep.current = r2, void 0 === t2 && G2(r2), i2?.(r2), true);
    }
    (0, f.useEffect)(
      () => () => {
        window.clearTimeout(ex.current), window.clearTimeout(el.current), window.clearTimeout(eo.current), window.clearTimeout(ec.current);
      },
      []
    );
    let eL = (e3, t3, n3) => eY(eF(ep.current, e3 * t3), n3);
    function eH() {
      let e3 = ef.current;
      e3 && null === e_.current && (e_.current = e3.getBoundingClientRect().left - eN.get() - ej.get());
    }
    function eB() {
      window.clearTimeout(eo.current), er(false);
    }
    function eK() {
      if (!K) return;
      eH(), W(false), eB();
      let e3 = ez(H);
      null !== e3 && eY(eI(e3), "type");
    }
    function eW() {
      window.clearTimeout(ex.current), ex.current = void 0, Z(0);
    }
    function eq(e3, t3, n3) {
      eW(), eK();
      let i3 = Math.max(1, Math.round(t3 / z2));
      "button" === n3 && Z(e3);
      let r2 = 0, a2 = () => {
        let t4 = ev.current(e3, i3, n3);
        ex.current = window.setTimeout(
          a2,
          t4 ? Math.max(40, 150 * 0.86 ** ++r2) : 240
        );
      };
      ex.current = window.setTimeout(a2, eL(e3, i3, n3) ? 400 : 360);
    }
    function eZ(e3) {
      let t3 = eb.current;
      !t3 || t3.pointer !== e3.pointerId || (eb.current = null, t3.active && (ey.current = true, Q(false), (0, o.i)(eN, 0, E2 ? { duration: 0 } : b.snappy), ee(eC(ep.current))));
    }
    (0, f.useLayoutEffect)(() => {
      ep.current = X2, ev.current = eL;
    }), (0, f.useLayoutEffect)(() => {
      let e3 = e_.current, t3 = ef.current;
      if (e_.current = null, eg.current) {
        eg.current = false;
        let e4 = em.current;
        if (e4 && document.activeElement === e4) {
          let t4 = e4.value.length;
          e4.setSelectionRange(t4, t4);
        }
      }
      if (null === e3 || !t3) return;
      let n3 = e3 - (t3.getBoundingClientRect().left - eN.get() - ej.get());
      0.5 > Math.abs(n3) || (ej.set(ej.get() + n3), E2 ? ej.jump(0) : (0, o.i)(ej, 0, b.morph));
    });
    let eJ = (t3) => ({
      toward: t3,
      label: e2,
      disabled: y2,
      controls: I2,
      limit: t3 > 0 ? eG >= d2 : eG <= c2,
      pressed: q === t3
    }), eQ = null === eA ? 0 : eA > d2 ? 1 : eA < c2 && ei ? -1 : 0, eV = S2 ? eQ || et : 0, e0 = eV > 0 ? d2 : c2, e1 = eV ? "function" == typeof S2 ? S2(eV > 0 ? "max" : "min", e0) : `${eV > 0 ? "Max" : "Min"} ${eC(e0)}` : "", e5 = [F2, eQ && S2 ? C2 : void 0].filter(Boolean).join(" ") || void 0;
    return (0, r.jsxs)("div", {
      className: x().field,
      "data-size": P2,
      children: [
        (0, r.jsxs)("div", {
          className: x().head,
          children: [
            (0, r.jsx)("label", {
              htmlFor: I2,
              className: x().label,
              "data-scrub": w2 && !y2 || void 0,
              onPointerDown: function(e3) {
                ey.current = false, w2 && !y2 && 0 === e3.button && (eK(), eb.current = {
                  pointer: e3.pointerId,
                  x: e3.clientX,
                  from: ep.current,
                  active: false
                }, e3.currentTarget.setPointerCapture(e3.pointerId));
              },
              onPointerMove: function(e3) {
                let t3 = eb.current;
                if (!t3 || t3.pointer !== e3.pointerId) return;
                let n3 = e3.clientX - t3.x;
                if (!t3.active) {
                  if (3 > Math.abs(n3)) return;
                  t3.active = true, Q(true);
                }
                let i3 = n3 / 6, r2 = Math.trunc(i3);
                eY(r2 ? eF(t3.from, r2) : t3.from, "scrub");
                let a2 = t3.from + i3 * z2, u2 = a2 > d2 ? (a2 - d2) / z2 * 6 : a2 < c2 ? (a2 - c2) / z2 * 6 : 0;
                eN.set(
                  E2 ? 0 : ((e4, t4 = 10) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)(u2)
                );
              },
              onPointerUp: eZ,
              onPointerCancel: eZ,
              onClick: (e3) => {
                ey.current && (e3.preventDefault(), ey.current = false);
              },
              children: e2
            }),
            (0, r.jsx)(O, { id: C2, edge: eV, text: e1 })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: ea,
          className: x().control,
          "data-scrubbing": J || void 0,
          "data-disabled": y2 || void 0,
          "data-warn": eQ ? eQ > 0 ? "max" : "min" : void 0,
          children: [
            (0, r.jsx)(Y, {
              ...eJ(-1),
              iconRef: eu,
              onPress: () => eq(-1, z2, "button"),
              onRelease: eW,
              onActivate: () => {
                eK(), eL(-1, 1, "button");
              }
            }),
            (0, r.jsx)("div", {
              className: x().valueWrap,
              onMouseDown: (e3) => {
                e3.target !== em.current && e3.preventDefault();
              },
              onClick: (e3) => {
                y2 || e3.target === em.current || (em.current?.focus(), em.current?.select());
              },
              children: (0, r.jsxs)(u.PY1.span, {
                ref: ef,
                className: x().value,
                style: { x: eR, y: ew },
                children: [
                  (0, r.jsx)(D, {
                    text: R(g2, eG),
                    direction: eO,
                    className: x().affix
                  }),
                  (0, r.jsxs)("span", {
                    className: x().number,
                    children: [
                      (0, r.jsx)("span", {
                        className: x().display,
                        "data-hidden": K || void 0,
                        "aria-hidden": "true",
                        children: (0, r.jsx)(k, {
                          value: eG,
                          format: eT,
                          direction: eO,
                          instant: K
                        })
                      }),
                      K && (0, r.jsx)("span", {
                        className: x().mirror,
                        "aria-hidden": "true",
                        children: H
                      }),
                      (0, r.jsx)("input", {
                        ref: em,
                        id: I2,
                        className: x().input,
                        type: "text",
                        role: "spinbutton",
                        inputMode: c2 < 0 ? "text" : eM || eS ? "decimal" : "numeric",
                        autoComplete: "off",
                        spellCheck: false,
                        value: K ? H : eT.format(X2),
                        disabled: y2,
                        "aria-describedby": e5,
                        "aria-invalid": !!eQ || void 0,
                        "aria-valuenow": X2,
                        "aria-valuetext": eC(X2),
                        "aria-valuemin": Number.isFinite(c2) ? c2 : void 0,
                        "aria-valuemax": d2 < Number.MAX_SAFE_INTEGER ? d2 : void 0,
                        onChange: (e3) => {
                          var t3;
                          let n3, i3, r2;
                          return t3 = e3.currentTarget.value, n3 = RegExp(
                            `[^0-9${ek.group.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&")}${eM || eS ? ek.decimal.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&") : ""}${c2 < 0 ? "\\-" : ""}]`,
                            "g"
                          ), i3 = t3.replace(n3, ""), K || (eh.current = X2), eH(), B(i3), W(true), void (null !== (r2 = ez(i3)) && r2 >= c2 && r2 <= d2 && eI(r2) === r2 && eY(r2, "type"), eB(), null !== r2 && r2 < c2 && (eo.current = window.setTimeout(
                            () => er(true),
                            700
                          )));
                        },
                        onKeyDown: function(e3) {
                          let t3 = p2 ?? 10 * z2, n3 = {
                            ArrowUp: [1, e3.shiftKey ? t3 : z2],
                            ArrowDown: [-1, e3.shiftKey ? t3 : z2],
                            PageUp: [1, t3],
                            PageDown: [-1, t3]
                          }[e3.key];
                          if (n3) {
                            e3.preventDefault(), e3.repeat || eq(n3[0], n3[1], "key");
                            return;
                          }
                          if (!K && ("Home" === e3.key && Number.isFinite(c2) || "End" === e3.key && d2 < Number.MAX_SAFE_INTEGER)) {
                            e3.preventDefault(), eY("Home" === e3.key ? c2 : d2, "key");
                            return;
                          }
                          "Enter" === e3.key && (e3.preventDefault(), K ? (eg.current = true, eK()) : e3.currentTarget.select()), "Escape" === e3.key && K && (e3.preventDefault(), eH(), W(false), eB(), eg.current = true, eY(eh.current, "type"));
                        },
                        onKeyUp: (e3) => {
                          /^(Arrow(Up|Down)|Page(Up|Down))$/.test(e3.key) && eW();
                        },
                        onBlur: () => {
                          eW(), eK();
                        }
                      })
                    ]
                  }),
                  (0, r.jsx)(D, {
                    text: R(v2, eG),
                    direction: eO,
                    className: x().affix
                  })
                ]
              })
            }),
            (0, r.jsx)(Y, {
              ...eJ(1),
              iconRef: es,
              onPress: () => eq(1, z2, "button"),
              onRelease: eW,
              onActivate: () => {
                eK(), eL(1, 1, "button");
              }
            })
          ]
        }),
        (0, r.jsx)(U, { id: F2, text: h2, className: x().hint }),
        (0, r.jsx)("span", {
          className: x().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: V
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(52920, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "palette",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
          key: "e79jfc"
        }
      ],
      [
        "circle",
        { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }
      ],
      [
        "circle",
        {
          cx: "17.5",
          cy: "10.5",
          r: ".5",
          fill: "currentColor",
          key: "f64h9f"
        }
      ],
      [
        "circle",
        { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }
      ],
      [
        "circle",
        { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }
      ]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(54210, ".action-swap_button__TY8xB{--swap-height:var(--control-height-md);--swap-pad:var(--space-5);position:relative;display:inline-flex;min-width:var(--swap-height);min-height:var(--swap-height);align-items:center;justify-content:center;padding:0 calc(var(--swap-pad) + ((var(--swap-height) - 18px) / 2 - var(--swap-pad)) * var(--fold, 0));border:1px solid var(--foreground);border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);overflow:clip;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}.action-swap_sm__zbMBM{--swap-height:var(--control-height-sm);--swap-pad:var(--space-4)}.action-swap_md__3pohX{--swap-height:var(--control-height-md);--swap-pad:var(--space-5)}.action-swap_lg__PNGLp{--swap-height:var(--control-height-lg);--swap-pad:var(--space-6)}.action-swap_button__TY8xB:disabled{cursor:default;opacity:.6}.action-swap_button__TY8xB[aria-busy=true]{cursor:progress}.action-swap_neutral__5pFYS{border-color:var(--foreground);background:var(--foreground);color:var(--background)}.action-swap_accent__XVG25{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.action-swap_quiet__pIqp5{border-color:var(--border);background:var(--surface);color:var(--foreground)}.action-swap_success__2qgD6{border-color:color-mix(in oklab,var(--success) 25%,var(--border));background:color-mix(in oklab,var(--success) 10%,var(--surface));color:var(--foreground)}.action-swap_warning__mLQiN{border-color:color-mix(in oklab,var(--warning) 30%,var(--border));background:color-mix(in oklab,var(--warning) 12%,var(--surface));color:var(--foreground)}.action-swap_danger__tw2Z6{border-color:color-mix(in oklab,var(--danger) 25%,var(--border));background:color-mix(in oklab,var(--danger) 10%,var(--surface));color:var(--foreground)}@media (hover:hover) and (pointer:fine){.action-swap_neutral__5pFYS:hover:not(:disabled,[aria-busy=true]){border-color:var(--text-secondary);background:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.action-swap_accent__XVG25:hover:not(:disabled,[aria-busy=true]){border-color:var(--accent-strong);background:var(--accent-strong)}}@media (hover:hover) and (pointer:fine){.action-swap_quiet__pIqp5:hover:not(:disabled,[aria-busy=true]){border-color:var(--border-strong);background:var(--surface-muted)}}@media (hover:hover) and (pointer:fine){.action-swap_success__2qgD6:hover:not(:disabled){border-color:color-mix(in oklab,var(--success) 42%,var(--border))}}@media (hover:hover) and (pointer:fine){.action-swap_warning__mLQiN:hover:not(:disabled){border-color:color-mix(in oklab,var(--warning) 48%,var(--border))}}@media (hover:hover) and (pointer:fine){.action-swap_danger__tw2Z6:hover:not(:disabled){border-color:color-mix(in oklab,var(--danger) 42%,var(--border))}}.action-swap_icon__6phfL{position:relative;display:grid;height:16px;flex:none;place-items:center}.action-swap_iconPhase__598Go{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center}.action-swap_iconPhase__598Go svg{flex:none}.action-swap_iconPhase__598Go[data-tone=success]{color:var(--success)}.action-swap_iconPhase__598Go[data-tone=warning]{color:var(--warning)}.action-swap_iconPhase__598Go[data-tone=danger]{color:var(--danger)}.action-swap_spinner__Hul40{display:block;width:14px;height:14px;border:1.5px solid color-mix(in oklab,currentColor 24%,transparent);border-top-color:currentcolor;border-radius:50%;animation:action-swap_swap-spin__v61bz .75s linear infinite}@keyframes action-swap_swap-spin__v61bz{to{transform:rotate(1turn)}}.action-swap_morph__eClyV{display:inline-flex;min-width:0}.action-swap_glyphs__VQlr1{position:relative;display:inline-flex;flex:none;white-space:pre}.action-swap_glyphs__VQlr1[data-gap]{padding-left:var(--space-2)}.action-swap_glyph__YNqT1{display:inline-block}.action-swap_srOnly__phvWX{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}@media (prefers-reduced-motion:reduce){.action-swap_button__TY8xB{transition:none}}@media (prefers-reduced-motion:reduce){.action-swap_spinner__Hul40{animation:none}}", {"button":"action-swap_button__TY8xB","sm":"action-swap_sm__zbMBM","md":"action-swap_md__3pohX","lg":"action-swap_lg__PNGLp","neutral":"action-swap_neutral__5pFYS","accent":"action-swap_accent__XVG25","quiet":"action-swap_quiet__pIqp5","success":"action-swap_success__2qgD6","warning":"action-swap_warning__mLQiN","danger":"action-swap_danger__tw2Z6","icon":"action-swap_icon__6phfL","iconPhase":"action-swap_iconPhase__598Go","spinner":"action-swap_spinner__Hul40","swap-spin":"action-swap_swap-spin__v61bz","morph":"action-swap_morph__eClyV","glyphs":"action-swap_glyphs__VQlr1","glyph":"action-swap_glyph__YNqT1","srOnly":"action-swap_srOnly__phvWX"});
A.reg(54471, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { n: () => o });
  var r = a(12115);
  let n = (e2) => {
    let t2 = 0, a2 = () => {
      let r3 = /* @__PURE__ */ new Date(), n2 = new Date(r3.getFullYear(), r3.getMonth(), r3.getDate() + 1);
      t2 = window.setTimeout(
        () => {
          e2(), a2();
        },
        n2.getTime() - r3.getTime() + 1e3
      );
    }, r2 = () => {
      "visible" === document.visibilityState && e2();
    };
    return a2(), document.addEventListener("visibilitychange", r2), window.addEventListener("focus", e2), () => {
      window.clearTimeout(t2), document.removeEventListener("visibilitychange", r2), window.removeEventListener("focus", e2);
    };
  }, i = () => {
    let e2;
    return e2 = /* @__PURE__ */ new Date(), `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`;
  }, l = () => "";
  function o() {
    let e2 = (0, r.useSyncExternalStore)(n, i, l);
    return (0, r.useMemo)(
      () => e2 ? ((e3) => {
        let [t2 = 1970, a2 = 1, r2 = 1] = e3.split("-").map(Number);
        return new Date(t2, a2 - 1, r2);
      })(e2) : void 0,
      [e2]
    );
  }
}

__m(__module,__exports,__require);
});
A.regCss(55818, ".form{border:1px solid var(--border);border-radius:var(--radius-surface);padding:var(--space-5);background:var(--surface);box-shadow:var(--shadow-resting)}\n@media (max-width:420px){.form{padding:var(--space-4)}\n.progress{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);margin:calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-6);padding:var(--space-4) var(--space-5);border-bottom:1px solid var(--border-subtle)}\n.progress{align-items:flex-start;flex-direction:column;gap:var(--space-2);margin:calc(var(--space-4) * -1) calc(var(--space-4) * -1) var(--space-5);padding:var(--space-3) var(--space-4)}\n.progressList{display:flex;min-width:0;gap:var(--space-4);margin:0;padding:0;overflow-x:auto;list-style:none;scrollbar-width:none}\n.progressList::-webkit-scrollbar{display:none}\n.progressList{width:100%;gap:var(--space-3)}\n.progressItem{display:inline-flex;flex:0 0 auto;align-items:center;gap:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);font-weight:400;line-height:var(--leading-body);white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.progressItem.current{color:var(--accent);font-weight:500}\n.progressItem.current .progressMarker{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.progressItem.complete{color:var(--text-secondary)}\n.progressItem.complete .progressMarker{border-color:var(--success);color:var(--success)}\n@media (prefers-reduced-motion:reduce){.back,.next,.progressItem,.progressMarker{transition:none}\n.progressLabel{display:inline-flex;flex-direction:column}\n.progressLabel:after{height:0;overflow:hidden;content:attr(data-label);font-weight:500;visibility:hidden;user-select:none;pointer-events:none}\n.progressMarker{display:grid;width:1.25rem;height:1.25rem;place-items:center;border:1px solid var(--border-strong);border-radius:var(--radius-pill);color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n.markerGlyph{display:grid;grid-area:1/1;place-items:center}\n.progressCount{flex:0 0 auto;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.progressCount{order:-1}\n.viewport{display:grid;min-height:14rem}\n.viewport[data-resizing=true]{overflow:visible clip}\n.viewport{min-height:15rem}\n.swap{display:inline-grid}\n.swap>span{grid-area:1/1}\n.countValue{min-width:1ch;text-align:center}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.step,.success{grid-area:1/1;min-width:0;border:0;padding:0;margin:0}\n.step legend+.content{margin-top:var(--space-5)}\n.step legend{max-width:100%;padding:0;color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body)}\n.step .description{margin:var(--space-2) 0 var(--space-5);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.success{display:flex;min-height:14rem;flex-direction:column;align-items:center;justify-content:center;text-align:center}\n.success h2{margin:var(--space-3) 0 0;color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body)}\n.success .successNote{margin:var(--space-2) 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.actionsShell{display:flow-root}\n.actions{display:flex;justify-content:flex-end;gap:var(--space-3);margin-top:var(--space-6)}\n.actions{margin-top:var(--space-5)}\n.back,.next{display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);min-height:var(--control-height-sm);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:1;cursor:pointer;transition:border-color var(--duration-fast),background-color var(--duration-fast),color var(--duration-fast),box-shadow var(--duration-fast),transform var(--duration-spring) var(--ease-spring)}\n.back:active:not(:disabled),.next:active{transform:scale(.97);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-fast),var(--duration-fast),.1s;transition-timing-function:ease,ease,ease,ease,ease-out}\n@media (hover:hover) and (pointer:fine){.back:hover:not(:disabled){border-color:var(--foreground);background:var(--surface-muted)}\n.back:disabled{cursor:not-allowed;opacity:.45}\n.back:active:not(:disabled),.next:active{transform:none}\n.next{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.next:hover{border-color:var(--accent-strong);background:var(--accent-strong)}\n.morph{position:relative;display:inline-flex}\n.morphBox{display:inline-flex;overflow-x:clip;white-space:nowrap}\n.sizer{position:absolute;top:0;left:0;white-space:nowrap;visibility:hidden;pointer-events:none}\n.successIcon{display:grid;width:2rem;height:2rem;place-items:center;color:var(--success)}", {});
A.reg(57189, function(__module,__exports,__require){
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
});
A.reg(59103, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock-3",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6h4", key: "135r8i" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(59680, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "ellipsis",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
      ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
    ],
    aliases: ["more-horizontal"]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(60466, function(__module,__exports,__require){
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
});
A.reg(61078, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { z: () => p });
  var a = i(95155), n = i(12115), s = i(92171), r = i(18310), o = i(25354), l = i(7770), d = i(39126), c = i.n(d);
  function u(e2, t2, i2, a2) {
    let n2 = t2 ? `${t2.offsetTop} ${t2.offsetHeight}` : "";
    if (!e2 || n2 === i2.current) return;
    let r2 = "" !== i2.current;
    if (i2.current = n2, !t2)
      return void (0, s.i)(e2, { opacity: 0 }, { duration: 0 });
    let o2 = { y: t2.offsetTop, height: t2.offsetHeight, opacity: 1 };
    a2 && r2 ? (0, s.i)(e2, o2, { ...l.T.spring.morph, opacity: { duration: 0 } }) : (Object.assign(e2.style, {
      transform: `translateY(${o2.y}px)`,
      height: `${o2.height}px`,
      opacity: "1"
    }), (0, s.i)(e2, o2, { duration: 0 }));
  }
  function p({ label: e2, options: t2, value: i2, onValueChange: s2, name: d2 }) {
    let h = (0, n.useId)(), m = (0, r.I)(), x = (0, n.useRef)(null), f = (0, n.useRef)(null), _ = (0, n.useRef)([]), b = (0, n.useRef)(null), y = (0, n.useRef)(""), g = t2.findIndex((e3) => e3.value === i2);
    return (0, n.useLayoutEffect)(() => {
      u(
        f.current,
        _.current[g],
        y,
        null !== b.current && b.current !== g && !m
      ), b.current = g, x.current?.setAttribute("data-ready", "");
    }, [g, m]), (0, n.useEffect)(() => {
      let e3 = x.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        () => u(f.current, _.current[b.current ?? -1], y, false)
      );
      return t3.observe(e3), _.current.forEach((e4) => e4 && t3.observe(e4)), () => t3.disconnect();
    }, [t2.length]), (0, a.jsxs)("fieldset", {
      className: c().group,
      children: [
        (0, a.jsx)("legend", { children: e2 }),
        (0, a.jsxs)("div", {
          ref: x,
          className: c().options,
          children: [
            (0, a.jsx)("span", {
              ref: f,
              className: c().highlight,
              "aria-hidden": "true"
            }),
            t2.map((e3, t3) => {
              let n2 = i2 === e3.value;
              return (0, a.jsxs)(
                "label",
                {
                  className: c().option,
                  ref: (e4) => {
                    _.current[t3] = e4;
                  },
                  children: [
                    (0, a.jsx)("input", {
                      type: "radio",
                      name: d2 ?? h,
                      value: e3.value,
                      checked: n2,
                      onChange: () => s2(e3.value)
                    }),
                    (0, a.jsx)("span", {
                      className: c().mark,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(o.PY1.span, {
                        className: c().dot,
                        initial: false,
                        animate: n2 ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 },
                        transition: m ? { duration: 0 } : {
                          ...l.T.spring.snappy,
                          opacity: {
                            duration: n2 ? l.T.duration.fast : l.T.duration.instant
                          }
                        }
                      })
                    }),
                    (0, a.jsxs)("span", {
                      children: [
                        (0, a.jsx)("strong", { children: e3.label }),
                        e3.description && (0, a.jsx)("small", { children: e3.description })
                      ]
                    })
                  ]
                },
                e3.value
              );
            })
          ]
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(61618, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { x: () => j });
  var n = a(95155), r = a(12115), i = a(18310), l = a(28245), s = a(92171), o = a(25354), c = a(80642), u = a(65377), d = a(9005), p = a(65222), m = a(7770), h = a(80194), f = a.n(h);
  let y = { duration: m.T.duration.standard, ease: [...m.T.ease.enter] }, g = { duration: m.T.duration.instant, ease: [...m.T.ease.standard] }, _ = { exit: (e2) => ({ opacity: 0, transition: e2 ? g : { duration: 0 } }) };
  function x(e2, t2) {
    for (let a2 = e2.indexOf(t2); -1 !== a2; a2 = e2.indexOf(t2, a2 + 1))
      if (0 === a2 || !/[\p{L}\p{N}]/u.test(e2.charAt(a2 - 1))) return a2;
    return -1;
  }
  function b({ text: e2, ranges: t2 }) {
    if (!t2.length) return e2;
    let a2 = Array(e2.length).fill(false);
    for (let [e3, n2] of t2) for (let t3 = e3; t3 < n2; t3++) a2[t3] = true;
    let r2 = [];
    for (let t3 = 0; t3 < e2.length; ) {
      let i2 = t3;
      for (; i2 < e2.length && a2[i2] === a2[t3]; ) i2++;
      r2.push(
        a2[t3] ? (0, n.jsx)(
          "mark",
          { className: f().match, children: e2.slice(t3, i2) },
          t3
        ) : e2.slice(t3, i2)
      ), t3 = i2;
    }
    return r2;
  }
  function j({
    items: e2,
    placeholder: t2 = "Search commands",
    onSelect: a2,
    onClose: h2,
    label: v = "Command palette",
    autoFocus: N = false
  }) {
    let w = (0, r.useId)(), [k, T] = (0, r.useState)(""), [C, L] = (0, r.useState)(null), [E, $] = (0, r.useState)("auto"), M = (0, i.I)(), A = (0, r.useRef)(null), I = (0, r.useRef)(null), D = (0, r.useRef)({ x: -1, y: -1 }), B = (0, r.useRef)(false), P = (0, l.d)(0), R = (0, l.d)(0), Y = (0, l.d)(0), {
      groupedItems: H,
      filtered: K,
      rangesById: S
    } = (0, r.useMemo)(() => {
      let t3 = /* @__PURE__ */ new Map();
      for (let a4 of (function(e3, t4) {
        let a5 = t4.trim().toLowerCase().split(/\s+/).filter(Boolean);
        if (!a5.length)
          return e3.map((e4, t5) => ({
            item: e4,
            score: 0,
            ranges: [],
            order: t5
          }));
        let n2 = [];
        return e3.forEach((e4, t5) => {
          let r2 = e4.label.toLowerCase(), i2 = 0, l2 = [];
          for (let t6 of a5) {
            let a6 = (function(e5, t7, a7) {
              let n3 = x(t7, a7);
              if (0 === n3) return { score: 100, ranges: [[0, a7.length]] };
              if (n3 > 0) return { score: 80, ranges: [[n3, n3 + a7.length]] };
              let r3 = a7.length >= 3 ? t7.indexOf(a7) : -1;
              if (r3 > 0) return { score: 50, ranges: [[r3, r3 + a7.length]] };
              if (e5.keywords?.some((e6) => -1 !== x(e6.toLowerCase(), a7)))
                return { score: 40, ranges: [] };
              if (e5.description && -1 !== x(e5.description.toLowerCase(), a7))
                return { score: 25, ranges: [] };
              let i3 = (function(e6, t8) {
                if (t8.length < 2) return null;
                for (let a8 = e6.indexOf(t8.charAt(0)); -1 !== a8; a8 = e6.indexOf(t8.charAt(0), a8 + 1)) {
                  if (a8 > 0 && /[\p{L}\p{N}]/u.test(e6.charAt(a8 - 1)))
                    continue;
                  let n4 = [[a8, a8 + 1]], r4 = a8;
                  for (let a9 = 1; a9 < t8.length && -1 !== r4 && -1 !== (r4 = e6.indexOf(t8.charAt(a9), r4 + 1)); a9++) {
                    let e7 = n4[n4.length - 1];
                    e7 && e7[1] === r4 ? e7[1] = r4 + 1 : n4.push([r4, r4 + 1]);
                  }
                  if (-1 !== r4 && r4 - a8 < 3 * t8.length) return n4;
                }
                return null;
              })(t7, a7);
              return i3 ? { score: 10, ranges: i3 } : null;
            })(e4, r2, t6);
            if (!a6) return;
            i2 += a6.score, l2.push(...a6.ranges);
          }
          n2.push({ item: e4, score: i2, ranges: l2, order: t5 });
        }), n2.sort((e4, t5) => t5.score - e4.score || e4.order - t5.order);
      })(e2, k)) {
        let e3 = a4.item.group ?? "Actions";
        t3.set(e3, [...t3.get(e3) ?? [], a4]);
      }
      let a3 = [];
      return {
        groupedItems: [...t3.entries()].map(([e3, t4]) => [
          e3,
          t4.map(({ item: e4 }) => ({ item: e4, index: a3.push(e4) - 1 }))
        ]),
        filtered: a3,
        rangesById: new Map(
          [...t3.values()].flat().map((e3) => [e3.item.id, e3.ranges])
        )
      };
    }, [e2, k]), [O, z] = (0, r.useState)({ list: K, glide: true });
    if (O.list !== K) {
      let e3 = new Map(O.list.map((e4, t3) => [e4.id, t3]));
      z({
        list: K,
        glide: K.every((t3, a3) => 6 >= Math.abs((e3.get(t3.id) ?? a3) - a3))
      });
    }
    let F = O.glide && !M, J = K.length ? Math.min(C ?? 0, K.length - 1) : -1, W = K[J]?.id;
    function X(e3) {
      a2?.(e3), T(""), L(null), A.current?.focus();
    }
    return (0, r.useEffect)(() => {
      N && A.current?.focus({ preventScroll: true });
    }, [N]), (0, r.useEffect)(() => {
      let e3 = (e4) => {
        (e4.metaKey || e4.ctrlKey) && "k" === e4.key.toLowerCase() && (e4.preventDefault(), A.current?.focus());
      };
      return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
    }, []), (0, r.useLayoutEffect)(() => {
      let e3 = I.current;
      if (!e3) return;
      let t3 = new ResizeObserver(
        ([t4]) => $(Math.round(t4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight))
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useLayoutEffect)(() => {
      let e3 = W ? document.getElementById(`${w}-${W}`) : null;
      if (!e3) {
        B.current = false, (0, s.i)(Y, 0, { duration: 0.1 * !M });
        return;
      }
      let t3 = !B.current || M ? { duration: 0 } : m.T.spring.snappy, a3 = 0;
      for (let t4 = e3; t4 && t4 !== I.current; t4 = t4.offsetParent)
        a3 += t4.offsetTop + (t4 === e3 ? 0 : t4.clientTop);
      (0, s.i)(P, a3, t3), (0, s.i)(R, e3.offsetHeight, t3), (0, s.i)(Y, 1, { duration: 0.08 * !M }), B.current = true;
    }, [W, K, w, M, P, R, Y]), (0, r.useEffect)(() => {
      W && document.getElementById(`${w}-${W}`)?.scrollIntoView({ block: "nearest" });
    }, [W, w]), (0, n.jsxs)(o.PY1.div, {
      className: f().palette,
      initial: !M && { opacity: 0, y: 6, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: M ? { duration: 0 } : {
        default: m.T.spring.smooth,
        opacity: {
          duration: m.T.duration.fast,
          ease: [...m.T.ease.enter]
        }
      },
      children: [
        (0, n.jsxs)("div", {
          className: f().searchRow,
          children: [
            (0, n.jsx)("span", {
              className: f().searchIcon,
              children: (0, n.jsx)(u.A, {
                width: 18,
                height: 18,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, n.jsx)("label", {
              className: f().visuallyHidden,
              htmlFor: w,
              children: v
            }),
            (0, n.jsx)("input", {
              ref: A,
              id: w,
              role: "combobox",
              "aria-autocomplete": "list",
              "aria-expanded": "true",
              "aria-controls": `${w}-results`,
              "aria-activedescendant": W ? `${w}-${W}` : void 0,
              value: k,
              onChange: (e3) => {
                T(e3.target.value), L(null);
              },
              onKeyDown: function(e3) {
                "ArrowDown" === e3.key && (e3.preventDefault(), L(Math.min(J + 1, Math.max(K.length - 1, 0)))), "ArrowUp" === e3.key && (e3.preventDefault(), L(Math.max(J - 1, 0))), "Home" === e3.key && (e3.preventDefault(), L(0)), "End" === e3.key && (e3.preventDefault(), L(Math.max(K.length - 1, 0)));
                let t3 = K[J];
                "Enter" === e3.key && t3 && (e3.preventDefault(), X(t3)), "Escape" === e3.key && (e3.preventDefault(), k ? (T(""), L(null)) : h2?.());
              },
              placeholder: t2,
              autoComplete: "off"
            }),
            (0, n.jsx)(c.N, {
              mode: "popLayout",
              initial: false,
              children: k ? (0, n.jsx)(
                o.PY1.button,
                {
                  className: f().clearButton,
                  type: "button",
                  "aria-label": "Clear search",
                  onClick: () => {
                    T(""), L(null), A.current?.focus();
                  },
                  initial: !M && {
                    opacity: 0,
                    scale: 0.6,
                    filter: `blur(${m.T.blur.subtle}px)`
                  },
                  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  exit: M ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    scale: 0.6,
                    filter: `blur(${m.T.blur.subtle}px)`,
                    transition: g
                  },
                  transition: M ? { duration: 0 } : {
                    default: m.T.spring.snappy,
                    opacity: { duration: m.T.duration.instant }
                  },
                  children: (0, n.jsx)(d.A, {
                    width: 15,
                    height: 15,
                    "aria-hidden": "true"
                  })
                },
                "clear"
              ) : null
            }),
            h2 ? (0, n.jsx)("button", {
              className: f().closeButton,
              type: "button",
              "aria-label": "Close command palette",
              onClick: h2,
              children: "Esc"
            }) : null,
            (0, n.jsx)("kbd", { className: f().commandKey, children: "\u2318 K" })
          ]
        }),
        (0, n.jsx)(o.PY1.div, {
          className: f().resultsFrame,
          initial: false,
          animate: { height: E },
          transition: M ? { duration: 0 } : m.T.spring.smooth,
          children: (0, n.jsxs)(o.PY1.div, {
            ref: I,
            layoutScroll: true,
            id: `${w}-results`,
            className: f().results,
            role: "listbox",
            "aria-label": "Command results",
            children: [
              (0, n.jsx)(o.PY1.span, {
                className: f().highlight,
                style: { y: P, height: R, opacity: Y },
                "aria-hidden": "true"
              }),
              (0, n.jsx)(c.N, {
                mode: "wait",
                initial: false,
                children: K.length ? (0, n.jsx)(
                  o.PY1.div,
                  {
                    initial: !M && { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: M ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: g },
                    transition: y,
                    children: (0, n.jsx)(c.N, {
                      mode: "popLayout",
                      initial: false,
                      custom: F,
                      children: H.map(
                        ([e3, t3]) => (0, n.jsxs)(
                          o.PY1.div,
                          {
                            layout: !!F && "position",
                            className: f().group,
                            role: "group",
                            "aria-label": e3,
                            variants: _,
                            initial: !M && { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: "exit",
                            transition: M ? { duration: 0 } : { default: y, layout: m.T.spring.smooth },
                            children: [
                              (0, n.jsx)("span", {
                                className: f().groupHeading,
                                "aria-hidden": "true",
                                children: e3
                              }),
                              (0, n.jsx)(c.N, {
                                mode: "popLayout",
                                initial: false,
                                custom: F,
                                children: t3.map(
                                  ({ item: e4, index: t4 }) => (0, n.jsxs)(
                                    o.PY1.button,
                                    {
                                      layout: !!F && "position",
                                      id: `${w}-${e4.id}`,
                                      className: `${f().result} ${t4 === J ? f().activeResult : ""}`,
                                      type: "button",
                                      role: "option",
                                      "aria-selected": t4 === J,
                                      onClick: () => X(e4),
                                      onPointerMove: (e5) => {
                                        (e5.clientX !== D.current.x || e5.clientY !== D.current.y) && (D.current = {
                                          x: e5.clientX,
                                          y: e5.clientY
                                        }, t4 !== J && L(t4));
                                      },
                                      variants: _,
                                      initial: !M && { opacity: 0 },
                                      animate: { opacity: 1 },
                                      exit: "exit",
                                      transition: M ? { duration: 0 } : {
                                        default: y,
                                        layout: m.T.spring.smooth
                                      },
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: f().itemIcon,
                                          "aria-hidden": "true",
                                          children: e4.icon ?? (0, n.jsx)(p.A, {
                                            width: 16,
                                            height: 16
                                          })
                                        }),
                                        (0, n.jsxs)("span", {
                                          className: f().resultCopy,
                                          children: [
                                            (0, n.jsx)("span", {
                                              className: f().resultLabel,
                                              children: (0, n.jsx)(b, {
                                                text: e4.label,
                                                ranges: S.get(e4.id) ?? []
                                              })
                                            }),
                                            e4.description && (0, n.jsx)("span", {
                                              className: f().resultDescription,
                                              children: e4.description
                                            })
                                          ]
                                        }),
                                        e4.shortcut && (0, n.jsx)("span", {
                                          className: f().shortcut,
                                          children: e4.shortcut.split(/\s+|\+(?=.)/).filter(Boolean).map(
                                            (e5, t5) => (0, n.jsx)(
                                              "kbd",
                                              { children: e5 },
                                              t5
                                            )
                                          )
                                        })
                                      ]
                                    },
                                    e4.id
                                  )
                                )
                              })
                            ]
                          },
                          e3
                        )
                      )
                    })
                  },
                  "results"
                ) : (0, n.jsxs)(
                  o.PY1.div,
                  {
                    className: f().empty,
                    initial: !M && {
                      opacity: 0,
                      y: 6,
                      filter: `blur(${m.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: M ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, transition: g },
                    transition: y,
                    children: [
                      (0, n.jsx)("span", {
                        children: (0, n.jsx)(u.A, {
                          width: 20,
                          height: 20,
                          "aria-hidden": "true"
                        })
                      }),
                      (0, n.jsxs)("strong", {
                        children: ["No results for \u201C", k.trim(), "\u201D"]
                      }),
                      (0, n.jsx)("small", {
                        children: "Try a different word or clear the search."
                      })
                    ]
                  },
                  "empty"
                )
              })
            ]
          })
        }),
        (0, n.jsx)("span", {
          className: f().visuallyHidden,
          role: "status",
          "aria-live": "polite",
          children: k.trim() ? K.length ? `${K.length} ${1 === K.length ? "result" : "results"}` : "No results" : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(63386, ".field{display:grid;gap:var(--space-2);min-width:0}\n.label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.anchor{position:relative;min-width:0}\n.trigger{position:relative;display:flex;width:100%;min-height:var(--control-height-md);align-items:center;gap:9px;border:1px solid var(--border);border-radius:var(--radius-control);padding:0 12px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.trigger:hover:not(:disabled){border-color:var(--border-strong);background:var(--surface-muted)}\n.trigger:active:not(:disabled),.trigger[aria-expanded=true]{border-color:var(--border-strong);background:var(--surface-muted)}\n.trigger:disabled{opacity:.5;cursor:not-allowed}\n.trigger>svg:first-child{flex:0 0 auto;color:var(--text-muted)}\n.trigger[aria-expanded=true] .chevron{transform:rotate(180deg)}\n@media (prefers-reduced-motion:reduce){.chevron,.option,.trigger{transition:none}\n.valueText{display:grid;flex:1;min-width:0;grid-template-columns:minmax(0,1fr)}\n.valueText>span{grid-area:1/1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.value{font-variant-numeric:tabular-nums}\n.description,.placeholder{color:var(--text-muted)}\n.description{font-size:var(--text-xs)}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.chevron{flex:0 0 auto;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring)}\n.menu{position:absolute;z-index:80;top:calc(100% + 6px);right:0;left:0;max-height:250px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:var(--radius-panel);padding:5px;background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:top center;will-change:transform,opacity}\n.option{display:flex;width:100%;min-height:36px;align-items:center;justify-content:space-between;border:0;border-radius:calc(var(--radius-panel) - 5px);padding:0 12px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-variant-numeric:tabular-nums;text-align:left;cursor:pointer;transition:background-color 80ms var(--ease-standard)}\n.option[data-active=true]{background:var(--surface-muted)}\n.dot{width:6px;height:6px;border-radius:999px;background:var(--foreground)}", {"field":"field","label":"label","anchor":"anchor","trigger":"trigger","chevron":"chevron","option":"option","valueText":"valueText","value":"value","description":"description","placeholder":"placeholder","srOnly":"srOnly","menu":"menu","dot":"dot"});
A.regCss(64312, ".field{display:grid;gap:var(--space-2)}\n.control,.field{position:relative;min-width:0}\n.label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.trigger{position:relative;display:flex;width:100%;min-height:var(--control-height-md);align-items:center;gap:8px;border:1px solid var(--border);border-radius:var(--radius-control);padding:5px 11px 5px 12px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.trigger:hover:not(:disabled){border-color:var(--border-strong);background:var(--surface-muted)}\n.trigger:active:not(:disabled),.trigger[aria-expanded=true]{border-color:var(--border-strong);background:var(--surface-muted)}\n.trigger:disabled{opacity:.5;cursor:not-allowed}\n.trigger[aria-expanded=true] .chip,.trigger[aria-expanded=true] .more{background:var(--surface)}\n@media (hover:hover) and (pointer:fine){.trigger:hover:not(:disabled) .chip,.trigger:hover:not(:disabled) .more{background:var(--surface)}\n.trigger[aria-expanded=true] .chevron{transform:rotate(180deg)}\n@media (prefers-reduced-motion:reduce){.chevron,.chip,.clear,.more,.option,.trigger{transition:none}\n.hasClear .chevron{margin-left:26px}\n.chevron{flex:0 0 auto;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring)}\n.value{position:relative;display:flex;min-width:0;min-height:26px;flex:1;align-items:center;overflow:hidden}\n.description,.placeholder{color:var(--text-muted)}\n.placeholder{position:absolute;inset:0;display:flex;align-items:center;overflow:hidden;white-space:nowrap}\n.description{font-size:var(--text-xs)}\n.slot{display:flex;flex:0 1 auto;min-width:0;overflow:hidden}\n.slot:has(.more){flex-shrink:0}\n.chip,.more{box-sizing:border-box;flex:0 0 auto;max-width:9rem;overflow:hidden;margin-right:5px;border-radius:var(--radius-pill);padding:4px 8px;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border-subtle);color:var(--foreground);text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs);transition:background-color var(--duration-fast) var(--ease-standard)}\n.more{display:inline-flex;color:var(--text-secondary);font-variant-numeric:tabular-nums}\n.count{display:inline-grid}\n.count>span{grid-area:1/1}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.clear{position:absolute;top:0;bottom:0;right:36px;display:grid;width:22px;height:22px;margin:auto 0;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.clear:hover{background:var(--surface);color:var(--foreground)}\n.menu{position:absolute;z-index:80;top:calc(100% + 8px);right:0;left:0;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);padding:5px;background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:top center;will-change:transform,opacity}\n.option{display:flex;width:100%;min-height:38px;align-items:center;justify-content:space-between;gap:12px;border:0;border-radius:calc(var(--radius-panel) - 5px);padding:0 11px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:background-color 80ms var(--ease-standard),color 80ms var(--ease-standard)}\n.option>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.option[data-active=true]{background:var(--surface-muted)}\n.option:disabled{opacity:.42;cursor:not-allowed}\n.check{flex:0 0 auto}", {"field":"field","control":"control","label":"label","trigger":"trigger","chip":"chip","more":"more","chevron":"chevron","clear":"clear","option":"option","hasClear":"hasClear","value":"value","description":"description","placeholder":"placeholder","slot":"slot","count":"count","srOnly":"srOnly","menu":"menu","check":"check"});
A.reg(65222, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => o });
  var r = n(51811);
  let a = {
    name: "command",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
          key: "11bfej"
        }
      ]
    ]
  };
  a.node;
  let o = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(65332, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Vv: () => O, fi: () => D, nl: () => y.n });
  var r = a(95155), n = a(12115), i = a(78780), l = a(76721), o = a(28245), d = a(55809), s = a(92171), c = a(25354), u = a(18310), h = a(7890), m = a(80642), g = a(7770), y = a(54471), p = a(85696), _ = a.n(p);
  let f = (e2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()), v = (e2) => new Date(e2.getFullYear(), e2.getMonth(), 1), x = (e2, t2) => !!(e2 && t2 && e2.getFullYear() === t2.getFullYear() && e2.getMonth() === t2.getMonth() && e2.getDate() === t2.getDate()), w = (e2, t2) => !!(e2 && t2 && e2.getFullYear() === t2.getFullYear() && e2.getMonth() === t2.getMonth()), D = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate() + t2), b = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth() + t2, 1), M = (e2, t2) => new Date(
    e2.getFullYear(),
    e2.getMonth() + t2,
    Math.min(
      e2.getDate(),
      new Date(e2.getFullYear(), e2.getMonth() + t2 + 1, 0).getDate()
    )
  ), j = (e2, t2) => !!(t2 && f(e2).getTime() < f(t2).getTime()), N = (e2, t2) => !!(t2 && f(e2).getTime() > f(t2).getTime()), S = (e2) => `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`, T = (e2) => {
    let t2 = D(e2, -e2.getDay());
    return Array.from(
      { length: 6 },
      (e3, a2) => Array.from({ length: 7 }, (e4, r2) => D(t2, 7 * a2 + r2))
    );
  }, k = () => () => {
  }, F = () => true, E = () => false, { spring: A, duration: Y, ease: $ } = g.T, B = { type: "spring", visualDuration: 0.36, bounce: 0, restDelta: 2e-3 }, R = {
    enter: (e2) => ({ opacity: 0, x: 12 * e2 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: Y.standard, ease: $.enter }
    },
    exit: (e2) => ({
      opacity: 0,
      x: -12 * e2,
      transition: { duration: 0.14, ease: $.standard }
    })
  }, C = {
    enter: { opacity: 1, x: 0 },
    center: { opacity: 1, x: 0, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function L({ cell: e2, reduced: t2 }) {
    let a2 = e2 >= 0, i2 = (0, o.d)(a2 ? e2 % 7 : 0), l2 = (0, o.d)(a2 ? Math.floor(e2 / 7) : 0), u2 = (0, o.d)(+!!a2), h2 = (0, o.d)(a2 ? 1 : 0.6), m2 = (0, d.G)(
      () => `translate(calc(${i2.get()} * (100% + 4px)), calc(${l2.get()} * (100% + 4px))) scale(${h2.get()})`
    ), g2 = (0, n.useRef)(!a2);
    return (0, n.useLayoutEffect)(() => {
      if (!a2) {
        g2.current = true;
        let e3 = t2 ? { duration: 0 } : { duration: 0.14, ease: $.standard }, a3 = [(0, s.i)(u2, 0, e3), (0, s.i)(h2, 0.6, e3)];
        return () => a3.forEach((e4) => e4.stop());
      }
      let r2 = e2 % 7, n2 = Math.floor(e2 / 7), o2 = [];
      return g2.current || t2 ? (i2.jump(r2), l2.jump(n2)) : o2.push((0, s.i)(i2, r2, A.morph), (0, s.i)(l2, n2, A.morph)), g2.current = false, o2.push(
        (0, s.i)(
          u2,
          1,
          t2 ? { duration: 0 } : { duration: Y.fast, ease: $.enter }
        ),
        (0, s.i)(h2, 1, t2 ? { duration: 0 } : A.snappy)
      ), () => o2.forEach((e3) => e3.stop());
    }, [e2, a2, t2, i2, l2, u2, h2]), (0, r.jsx)(c.PY1.span, {
      className: _().highlight,
      style: { transform: m2, opacity: u2 },
      "aria-hidden": "true",
      children: (0, r.jsx)("span", { className: _().highlightFill })
    });
  }
  function P({ index: e2, position: t2, present: a2, children: n2 }) {
    let i2 = (0, d.G)(t2, (t3) => `calc(${(e2 - t3) * 100}% + ${(e2 - t3) * 16}px)`), l2 = (0, d.G)(t2, (t3) => 1 - 0.6 * Math.min(1, Math.abs(e2 - t3)));
    return (0, r.jsx)(c.PY1.div, {
      className: _().monthBody,
      style: { x: i2, opacity: l2 },
      "data-present": a2 || void 0,
      "aria-hidden": !a2 || void 0,
      inert: !a2,
      children: n2
    });
  }
  function O({
    value: e2,
    onChange: t2,
    month: a2,
    onMonthChange: d2,
    minDate: g2,
    maxDate: p2,
    disabledDates: A2,
    locale: Y2 = "en-US",
    className: $2,
    showToday: V = false
  }) {
    let I, K = (0, n.useId)(), U = (0, y.n)(), H = (0, n.useSyncExternalStore)(k, F, E), Q = ((0, u.I)() ?? false) && H, [W, q] = (0, n.useState)(() => e2 ? v(e2) : void 0), [z, G] = (0, n.useState)(e2), J = (0, n.useRef)(null), Z = (0, n.useRef)(null), X = e2 ?? U, ee = a2 ? v(a2) : W ?? (X && v(X));
    a2 || W || !ee || q(ee);
    let et = ee?.getTime(), ea = ee ? S(ee) : "pending", [er, en] = (0, n.useState)(et), [ei, el] = (0, n.useState)(0);
    er !== et && (en(et), el(void 0 === er || void 0 === et ? 0 : et > er ? 1 : -1));
    let eo = (0, n.useMemo)(() => void 0 === et ? [] : T(new Date(et)), [et]), ed = ee ? 12 * ee.getFullYear() + ee.getMonth() : 0, es = (0, o.d)(ed), [ec, eu] = (0, n.useState)([ed, ed]);
    (0, h.L)(es, "change", (e3) => {
      let t3 = [Math.floor(e3 + 1e-3), Math.ceil(e3 - 1e-3)];
      eu((e4) => e4[0] === t3[0] && e4[1] === t3[1] ? e4 : t3);
    });
    let eh = void 0 !== ee, em = (0, n.useRef)(eh);
    (0, n.useLayoutEffect)(() => {
      if (!eh) return;
      let e3 = es.get();
      if (e3 === ed) return;
      if (!em.current || Q) {
        em.current = true, es.jump(ed);
        return;
      }
      Math.abs(ed - e3) > 2 && es.jump(ed - Math.sign(ed - e3));
      let t3 = (0, s.i)(es, ed, B);
      return () => t3.stop();
    }, [eh, ed, Q, es]);
    let eg = Array.from(/* @__PURE__ */ new Set([ec[0], ec[1], ed])).sort((e3, t3) => e3 - t3), ey = (0, n.useMemo)(
      () => new Intl.DateTimeFormat(Y2, { month: "long", year: "numeric" }),
      [Y2]
    ), ep = (0, n.useMemo)(
      () => new Intl.DateTimeFormat(Y2, { weekday: "short" }),
      [Y2]
    ), e_ = (0, n.useMemo)(
      () => Array.from(
        { length: 7 },
        (e3, t3) => ep.format(new Date(2024, 0, 7 + t3))
      ),
      [ep]
    ), ef = ee ? ey.format(ee) : "", ev = e2 ? S(e2) : "", [ex, ew] = (0, n.useState)({ key: ev, date: e2 }), [eD, eb] = (0, n.useState)({ from: "", to: "", distance: 0 });
    if (ex.key !== ev) {
      let t3 = ex.date && e2 ? Math.round((f(e2).getTime() - f(ex.date).getTime()) / 864e5) : 0, a3 = ex.date && e2 ? e2.getDay() - ex.date.getDay() : 0;
      ew({ key: ev, date: e2 }), eb({ from: ex.key, to: ev, distance: Math.hypot(a3, (t3 - a3) / 7) });
    }
    let eM = (e3) => j(e3, g2) || N(e3, p2) || !!A2?.(e3), ej = ee && b(ee, -1), eN = ee && b(ee, 1), eS = !!(ej && g2 && ej.getTime() < v(g2).getTime()), eT = !!(eN && p2 && eN.getTime() > v(p2).getTime()), ek = !!(U && !eM(U) && t2), eF = !!(U && w(ee, U) && (!ek || x(e2, U))), eE = (I = (e3) => e3 && w(e3, ee) && !eM(e3) ? S(e3) : "")(z) || I(e2) || I(U) || S(eo.flat().find((e3) => w(e3, ee) && !eM(e3)) ?? /* @__PURE__ */ new Date(0)), eA = (e3) => {
      let t3 = v(e3);
      a2 || q(t3), d2?.(t3);
    };
    (0, n.useLayoutEffect)(() => {
      let e3 = Z.current;
      if (!e3) return;
      let t3 = J.current?.querySelector(`[data-present] [data-date="${e3}"]`);
      t3 && (Z.current = null, t3.focus({ preventScroll: true }));
    });
    let eY = (...e3) => e3.filter(Boolean).join(" ");
    return (0, r.jsxs)("section", {
      className: eY(_().calendar, $2),
      "aria-labelledby": K,
      children: [
        (0, r.jsxs)("div", {
          className: _().header,
          children: [
            (0, r.jsxs)("h2", {
              id: K,
              className: _().heading,
              children: [
                (0, r.jsx)("span", { className: _().srOnly, children: ef }),
                (0, r.jsx)("span", {
                  className: _().title,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(m.N, {
                    initial: false,
                    custom: ei,
                    children: ee && (0, r.jsx)(
                      c.PY1.span,
                      {
                        className: _().titleRow,
                        custom: ei,
                        variants: Q || !ei ? C : R,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: ef
                      },
                      ea
                    )
                  })
                })
              ]
            }),
            (0, r.jsx)("span", {
              className: _().srOnly,
              "aria-live": "polite",
              children: ei ? ef : ""
            }),
            (0, r.jsxs)("div", {
              className: _().navigation,
              children: [
                V && (0, r.jsx)("button", {
                  type: "button",
                  className: _().todayButton,
                  "aria-disabled": eF || void 0,
                  "aria-label": U ? `Today, ${U.toLocaleDateString(Y2, { dateStyle: "full" })}` : "Today",
                  onClick: () => {
                    U && ee && !eF && (G(U), w(U, ee) || eA(U), ek && !x(e2, U) && t2?.(U));
                  },
                  children: "Today"
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: _().navButton,
                  "aria-label": "Previous month",
                  "aria-disabled": eS || void 0,
                  onClick: () => {
                    !eS && ej && eA(ej);
                  },
                  children: (0, r.jsx)(i.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: _().navButton,
                  "aria-label": "Next month",
                  "aria-disabled": eT || void 0,
                  onClick: () => {
                    !eT && eN && eA(eN);
                  },
                  children: (0, r.jsx)(l.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: _().weekdays,
          "aria-hidden": "true",
          children: e_.map(
            (e3, t3) => (0, r.jsx)("span", { children: e3.slice(0, 2) }, `${e3}-${t3}`)
          )
        }),
        (0, r.jsx)("div", {
          className: _().monthViewport,
          ref: J,
          children: ee ? eg.map((a3) => {
            let n2, i2;
            return (0, r.jsx)(
              P,
              {
                index: a3,
                position: es,
                present: a3 === ed,
                children: (n2 = new Date(
                  Math.floor(a3 / 12),
                  (a3 % 12 + 12) % 12,
                  1
                ), i2 = a3 === ed, (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(L, {
                      cell: ((t3) => {
                        if (!e2) return -1;
                        let a4 = D(t3, -t3.getDay()), r2 = Math.round(
                          (f(e2).getTime() - a4.getTime()) / 864e5
                        );
                        return r2 >= 0 && r2 < 42 ? r2 : -1;
                      })(n2),
                      reduced: Q
                    }),
                    (0, r.jsx)("div", {
                      className: _().grid,
                      role: "grid",
                      "aria-label": ey.format(n2),
                      children: T(n2).map(
                        (a4) => (0, r.jsx)(
                          "div",
                          {
                            className: _().week,
                            role: "row",
                            children: a4.map((a5) => {
                              let l2 = S(a5), o2 = x(a5, e2), d3 = x(a5, U);
                              return (0, r.jsx)(
                                "button",
                                {
                                  type: "button",
                                  role: "gridcell",
                                  "data-date": l2,
                                  "aria-label": a5.toLocaleDateString(Y2, {
                                    dateStyle: "full"
                                  }),
                                  "aria-selected": o2,
                                  "aria-current": d3 ? "date" : void 0,
                                  tabIndex: i2 && l2 === eE ? 0 : -1,
                                  disabled: eM(a5),
                                  style: i2 ? ((e3) => {
                                    if (!eD.distance || Q || e3 !== eD.to && e3 !== eD.from)
                                      return;
                                    let t3 = e3 === eD.to ? Math.min(
                                      260,
                                      95 + 85 * Math.log(eD.distance)
                                    ) : Math.max(
                                      20,
                                      130 / eD.distance
                                    );
                                    return {
                                      "--number-delay": `${Math.round(t3)}ms`
                                    };
                                  })(l2) : void 0,
                                  className: eY(
                                    _().day,
                                    !w(a5, n2) && _().outside,
                                    o2 && _().selected,
                                    d3 && _().today
                                  ),
                                  onFocus: () => G(a5),
                                  onKeyDown: (e3) => ((e4, a6) => {
                                    if ("Enter" === e4.key || " " === e4.key) {
                                      e4.preventDefault(), eM(a6) || t2?.(a6);
                                      return;
                                    }
                                    let r2 = {
                                      ArrowLeft: [D(a6, -1), -1],
                                      ArrowRight: [D(a6, 1), 1],
                                      ArrowUp: [D(a6, -7), -1],
                                      ArrowDown: [D(a6, 7), 1],
                                      Home: [D(a6, -a6.getDay()), 1],
                                      End: [D(a6, 6 - a6.getDay()), -1],
                                      PageUp: [
                                        M(a6, e4.shiftKey ? -12 : -1),
                                        -1
                                      ],
                                      PageDown: [
                                        M(a6, e4.shiftKey ? 12 : 1),
                                        1
                                      ]
                                    }[e4.key];
                                    r2 && (e4.preventDefault(), ((e5, t3, a7) => {
                                      let r3 = j(t3, g2) && g2 ? f(g2) : N(t3, p2) && p2 ? f(p2) : t3;
                                      for (let e6 = 0; e6 < 42 && eM(r3); e6 += 1)
                                        r3 = D(r3, a7);
                                      !(eM(r3) || x(r3, e5)) && (G(r3), Z.current = S(r3), w(r3, ee) || eA(r3));
                                    })(a6, r2[0], r2[1]));
                                  })(e3, a5),
                                  onClick: () => t2?.(a5),
                                  children: (0, r.jsx)("span", {
                                    className: _().dayNumber,
                                    children: a5.getDate()
                                  })
                                },
                                l2
                              );
                            })
                          },
                          S(a4[0])
                        )
                      )
                    })
                  ]
                }))
              },
              a3
            );
          }) : (0, r.jsx)("div", {
            className: _().monthBody,
            "aria-hidden": "true",
            children: (0, r.jsx)("div", {
              className: _().grid,
              children: Array.from(
                { length: 6 },
                (e3, t3) => (0, r.jsx)(
                  "div",
                  {
                    className: _().week,
                    children: Array.from(
                      { length: 7 },
                      (e4, t4) => (0, r.jsx)(
                        "span",
                        { className: _().placeholderDay },
                        t4
                      )
                    )
                  },
                  t3
                )
              )
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(66466, ".button{position:relative;display:inline-flex;min-height:var(--control-height-md);align-items:center;justify-content:center;overflow:hidden;padding:0 var(--space-5);border:1px solid var(--foreground);border-radius:var(--radius-control);background:var(--foreground);color:var(--background);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.button:hover:not(:disabled){box-shadow:var(--shadow-resting)}\n.button:disabled{cursor:not-allowed}\n.button:disabled:not([data-state=pending]){opacity:.7}\n.button[data-state=pending]{cursor:progress}\n@media (prefers-reduced-motion:reduce){.button{transition:none}\n.content{display:inline-flex;min-height:1.25rem;align-items:center;justify-content:center;gap:var(--space-2);white-space:nowrap}\n.morph{position:relative;display:inline-grid;min-width:0;justify-items:start}\n.morph[data-morphing]{clip-path:inset(-.6em 0 -.6em -.3em)}\n.sizer{visibility:hidden}\n.label,.sizer{grid-area:1/1;white-space:pre}\n.iconSlot{display:grid;width:17px;height:17px;flex:0 0 17px;place-items:center}\n.phase{grid-area:1/1;display:grid;width:17px;height:17px;place-items:center}\n.arrow{flex:none}\n.statusIcon{color:currentColor}\n.spinner{display:inline-block;width:var(--space-4);height:var(--space-4);border:1.5px solid;border-right:1.5px solid transparent;border-radius:var(--radius-pill);animation:spin .7s linear infinite}\n.spinner{animation:none}\n.visuallyHidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"button":"button","content":"content","morph":"morph","sizer":"sizer","label":"label","iconSlot":"iconSlot","phase":"phase","arrow":"arrow","statusIcon":"statusIcon","spinner":"spinner","visuallyHidden":"visuallyHidden"});
A.regCss(67834, ".preview{width:min(100%,620px);display:grid;gap:16px}\n@media (prefers-reduced-motion:reduce){.preview *,.preview :after,.preview :before{scroll-behavior:auto!important}\n.row{display:flex;align-items:center;flex-wrap:wrap;gap:10px}\n.buttonExamples{display:grid;width:min(100%,580px);justify-items:center;gap:20px}\n.buttonExample{display:grid;justify-items:center;gap:9px}\n.buttonExampleLabel{color:var(--text-secondary);font-size:var(--text-sm)}\n.buttonExampleRow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px}\n.iconButton{width:var(--control-height-sm);padding-inline:0}\n.stack{display:grid;gap:12px}\n.surface{display:grid;gap:8px;justify-items:center;padding:0;background:transparent}\n.surface>*{max-width:100%}\n.surface h3,.surface p{margin:0}\n.surface h3{font-size:13px;letter-spacing:-.01em}\n.status,.surface p{color:var(--text-muted,#64748b);font-size:12px}\n.roomy .surface>*{width:min(100%,540px)}\n.radioPreview .surface>*{width:min(100%,380px)}\n.compact .surface>*{width:min(100%,340px)}\n.actionSolo{display:flex;justify-content:center}\n.actionSolo>button{width:min(100%,210px)}\n.commandPreview{display:grid;width:min(100%,440px);min-height:54px;place-items:center}\n.commandPaletteSurface{width:100%;transform-origin:top center}\n.status{min-height:18px;text-align:center}\n.drawerDetails{display:grid;justify-items:start;gap:10px;max-width:360px}\n.drawerDetails strong{font-size:var(--text-sm);font-weight:500}\n.drawerDetails p{margin:0 0 var(--space-2);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.contextTarget{display:grid;gap:12px;min-width:190px;padding:12px 16px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-muted);color:inherit;text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.contextTarget:hover{border-color:var(--border-strong);background:var(--surface)}\n.contextTarget strong{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.contextCopy{display:grid;gap:4px}\n.contextCopy>span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.contextAction{display:inline-flex;align-items:center;gap:6px;color:var(--accent-strong);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body)}\n.choiceGrid{display:grid;gap:8px}\n.radioPreview{width:min(100%,380px);margin-inline:auto}\n.datePickerPreview{align-self:start;align-content:start;min-height:504px}\n@media (min-width:761px){.datePickerPreview{margin-top:calc(var(--space-3) * -1)}\n.timePickerPreview{align-self:start;margin-top:var(--space-12)}\n.calendar{width:min(100%,378px);max-width:378px;border:1px solid var(--border);border-radius:var(--radius-panel);padding:22px 24px;background:var(--surface);box-shadow:var(--shadow-resting)}\n.calendarDemoStage{container-type:inline-size;width:min(100%,374px)}\n.calendarDemoFrame{display:grid;align-content:start;min-height:calc(142px + (100cqi - 70px) * 6 / 7)}\n@container (max-width: 305px){.calendarDemoFrame{min-height:calc(166.4px + (100cqi - 70px) * 6 / 7)}\n.calendarDemoCard{display:grid;justify-items:center;border:1px solid var(--border);border-radius:var(--radius-panel);padding:20px 22px 22px;background:var(--surface)}\n.tagDemoX{display:grid;align-content:start;width:min(100%,420px);min-height:12rem}\n.swapDemo{display:grid;width:min(100%,440px)}\n.swapDemoRow{display:flex;min-height:4.25rem;align-items:center;justify-content:space-between;gap:var(--space-4);border-bottom:1px solid var(--border)}\n.swapDemoText{display:grid;min-width:0;gap:2px;font-size:var(--text-sm);line-height:var(--leading-body)}\n.swapDemoText strong{overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.swapDemoText span{overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}\n.swapDemoSwitch{justify-self:start;margin-top:var(--space-5)}\n.copyDemo{display:grid;width:min(100%,400px);gap:var(--space-6)}\n.copyDemoField{display:grid;gap:var(--space-2)}\n.copyDemoLabel{color:var(--text-secondary);font-size:var(--text-sm)}\n.copyDemoValue{display:flex;min-width:0;min-height:var(--control-height-md);align-items:center;justify-content:space-between;gap:var(--space-3);border:1px solid var(--border);border-radius:var(--radius-pill);padding:3px 3px 3px var(--space-4);background:var(--surface)}\n.copyDemoRow code,.copyDemoValue code{min-width:0;overflow:hidden;color:var(--foreground);font-size:var(--text-sm);text-overflow:ellipsis;white-space:nowrap}\n.copyDemoRow{display:flex;min-height:var(--control-height-sm);align-items:center;gap:var(--space-3);color:var(--text-secondary);font-size:var(--text-sm)}\n.copyDemoRow code{flex:1}\n.numberFieldDemo{display:grid;width:min(100%,232px);gap:var(--space-6);--number-field-width:100%}\n.textareaPreview{align-self:stretch;grid-template-rows:minmax(0,calc(50% - 114px)) auto auto;align-content:start}\n.textareaPreview:before{content:\"\"}\n.textareaPreview textarea{max-height:220px}", {"preview":"preview","row":"row","buttonExamples":"buttonExamples","buttonExample":"buttonExample","buttonExampleLabel":"buttonExampleLabel","buttonExampleRow":"buttonExampleRow","iconButton":"iconButton","stack":"stack","surface":"surface","status":"status","roomy":"roomy","radioPreview":"radioPreview","compact":"compact","actionSolo":"actionSolo","commandPreview":"commandPreview","commandPaletteSurface":"commandPaletteSurface","drawerDetails":"drawerDetails","contextTarget":"contextTarget","contextCopy":"contextCopy","contextAction":"contextAction","choiceGrid":"choiceGrid","datePickerPreview":"datePickerPreview","timePickerPreview":"timePickerPreview","calendar":"calendar","calendarDemoStage":"calendarDemoStage","calendarDemoFrame":"calendarDemoFrame","calendarDemoCard":"calendarDemoCard","tagDemoX":"tagDemoX","swapDemo":"swapDemo","swapDemoRow":"swapDemoRow","swapDemoText":"swapDemoText","swapDemoSwitch":"swapDemoSwitch","copyDemo":"copyDemo","copyDemoField":"copyDemoField","copyDemoLabel":"copyDemoLabel","copyDemoValue":"copyDemoValue","copyDemoRow":"copyDemoRow","numberFieldDemo":"numberFieldDemo","textareaPreview":"textareaPreview"});
A.regCss(68272, ".field{display:grid;min-width:0}\n.field label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.control{width:100%;min-height:110px;resize:vertical;border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:var(--space-3);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);outline:none;box-shadow:0 0 0 6px transparent;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.control::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.control:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.control:focus-visible{border-color:var(--foreground);box-shadow:0 0 0 3px var(--focus-ring);outline:2px solid transparent;outline-offset:2px}\n.control[aria-invalid=true]{border-color:var(--danger)}\n.control:disabled{cursor:not-allowed;background:var(--surface-muted);opacity:.6}\n@media (prefers-reduced-motion:reduce){.control{transition:none}\n.messageSlot{display:block;overflow:hidden}\n.error,.hint{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.hint{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
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
A.regCss(78684, ".field{--nf-height:var(--control-height-md);--nf-step:34px;--nf-inset:3px;--nf-text:var(--text-base);--nf-width:var(--number-field-width,196px);--nf-limit:color-mix(in oklab,var(--warning) 72%,var(--foreground));display:grid;min-width:0}\n.field[data-size=sm]{--nf-height:var(--control-height-sm);--nf-step:28px;--nf-inset:3px;--nf-text:var(--text-sm);--nf-width:var(--number-field-width,164px)}\n.field[data-size=lg]{--nf-height:var(--control-height-lg);--nf-step:40px;--nf-inset:4px;--nf-text:var(--text-lg);--nf-width:var(--number-field-width,228px)}\n:root[data-theme=dark] .field{--nf-limit:color-mix(in oklab,var(--warning) 88%,var(--foreground))}\n.field[data-size=sm] .label{font-size:var(--text-xs)}\n@media (hover:hover) and (pointer:fine){.control:hover,.field:has(.label[data-scrub]:hover) .control{border-color:var(--border-strong)}\n.head{display:flex;width:min(100%,var(--nf-width));align-items:baseline;justify-content:space-between;gap:var(--space-3);margin-bottom:var(--space-2)}\n.label{min-width:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.label[data-scrub]{cursor:ew-resize;touch-action:pan-y;user-select:none;-webkit-user-select:none}\n.limit{flex:none;color:var(--nf-limit);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums;white-space:nowrap}\n.control{display:flex;align-items:center;width:min(100%,var(--nf-width));min-height:var(--nf-height);gap:2px;border:1px solid var(--border);border-radius:var(--radius-control);padding:var(--nf-inset);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.control[data-scrubbing]{border-color:var(--foreground)}\n.control:has(input:focus){border-color:var(--foreground)}\n.control[data-warn],.control[data-warn]:hover{border-color:color-mix(in oklab,var(--warning) 55%,var(--border));background:color-mix(in oklab,var(--warning) 5%,var(--surface))}\n.control[data-warn]:has(input:focus){border-color:color-mix(in oklab,var(--warning) 80%,var(--border))}\n.control[data-disabled]{opacity:.5;background:var(--surface-muted)}\n.control[data-strain=max] .step[aria-disabled=true]:last-child,.control[data-strain=min] .step[aria-disabled=true]:first-child{opacity:.6;color:var(--nf-limit);transition:opacity 60ms linear,color 60ms linear}\n.control[data-disabled] .valueWrap{cursor:not-allowed}\n@media (prefers-reduced-motion:reduce){.control,.step{transition:opacity var(--duration-instant) linear,border-color var(--duration-instant) linear,background-color var(--duration-instant) linear}\n.control[data-strain] .value{color:var(--nf-limit);transition:none}\n.step{display:grid;width:var(--nf-step);height:var(--nf-step);flex:0 0 var(--nf-step);place-items:center;border:0;border-radius:calc(var(--radius-control) - var(--nf-inset) - 1px);padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.step:hover:not(:disabled,[aria-disabled=true]){background:var(--surface-muted);color:var(--foreground)}\n.step:is(:active,[data-pressed]):not(:disabled,[aria-disabled=true]){background:color-mix(in oklab,var(--foreground) 10%,var(--surface));color:var(--foreground);transition:background-color 60ms linear,color 60ms linear}\n.step:is(:active,[data-pressed]):not(:disabled,[aria-disabled=true]) svg{transform:scale(.82);transition:transform 90ms var(--ease-standard)}\n.step:focus-visible{outline:none;background:var(--surface-muted);color:var(--foreground)}\n.step[aria-disabled=true]{opacity:.32;cursor:not-allowed}\n.step:disabled{opacity:.35;cursor:not-allowed}\n.icon svg,.step:is(:active,[data-pressed]):not(:disabled,[aria-disabled=true]) svg{transform:none;transition:none}\n.icon{display:grid;place-items:center}\n.icon svg{transition:transform var(--duration-spring) var(--ease-spring)}\n.valueWrap{position:relative;display:flex;min-width:0;flex:1;align-self:stretch;align-items:center;justify-content:center;cursor:text}\n.value{display:inline-flex;align-items:center;white-space:nowrap;color:var(--foreground);font-size:var(--nf-text);transition:color var(--duration-standard) var(--ease-standard);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums}\n.affix{display:inline-flex;color:var(--text-secondary);font-weight:400}\n.char{display:inline-block;overflow-x:clip;white-space:pre}\n.number{position:relative;display:inline-grid;align-items:center}\n.display{display:inline-flex;grid-area:1/1}\n.display[data-hidden]{position:absolute;top:0;left:0;visibility:hidden}\n.mirror{grid-area:1/1;white-space:pre}\n.input{position:absolute;z-index:1;top:0;left:0;width:calc(100% + 1em);height:100%;margin:0;border:0;padding:0;background:transparent;color:transparent;caret-color:var(--foreground);font:inherit;font-variant-numeric:inherit;letter-spacing:inherit;line-height:inherit;text-align:left;outline:none}\n.input:focus-visible{outline:none}\n.input::selection{background:color-mix(in oklab,var(--foreground) 16%,transparent);color:transparent}\n.input:disabled{cursor:not-allowed}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent);mask-repeat:repeat-x;mask-clip:no-clip}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}\n.messageSlot{display:block;overflow:hidden}\n.hint{display:block;padding-top:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums}\n.words{position:relative;display:block}\n.wordSlot{position:relative;display:inline-block;vertical-align:top;white-space:pre}\n.wordSizer{position:absolute;top:0;left:0;visibility:hidden;white-space:pre}\n.word{display:inline-block;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
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
A.regCss(79374, ".field{display:grid;min-width:0}\n.label{margin-bottom:8px;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.inputs{position:relative;display:flex;width:fit-content;max-width:100%;gap:8px}\n.inputs[data-invalid=true] .ring{border-color:var(--danger)}\n@media (max-width:360px){.inputs{gap:6px}\n.slot{position:relative;display:grid;width:42px;height:48px;min-width:0;flex:0 1 42px}\n.slot{height:44px}\n.input{width:100%;height:100%;min-width:0;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:transparent;caret-color:var(--accent);font:inherit;font-size:var(--text-lg);font-variant-numeric:tabular-nums;text-align:center;outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[data-filled=true],[aria-invalid=true]){border-color:var(--border-strong);background:var(--surface-muted)}\n.input[data-filled=true]{border-color:var(--accent);background:var(--accent-subtle)}\n.input:focus-visible{outline:none}\n.input[aria-invalid=true]{border-color:var(--danger);background:color-mix(in srgb,var(--danger) 7%,var(--surface))}\n.input:disabled{cursor:not-allowed;opacity:.48;background:var(--surface-muted)}\n.input:disabled~.glyph{opacity:.48}\n.input:focus-visible{outline:2px solid CanvasText;outline-offset:2px}\n.input{color:CanvasText}\n@media (prefers-reduced-motion:reduce){.input,.ring{transition:none}\n.glyph{position:absolute;inset:0;display:grid;place-items:center;color:var(--foreground);font-size:var(--text-lg);font-variant-numeric:tabular-nums;pointer-events:none}\n.glyph{display:none}\n.ring{position:absolute;top:0;left:0;height:100%;z-index:2;border:1px solid var(--accent-strong);border-radius:var(--radius-control);pointer-events:none;transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (forced-colors:active){.ring{display:none}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:8px;font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {});
A.regCss(80194, ".palette{width:100%;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);box-shadow:var(--shadow-floating);transform-origin:top center}\n.searchRow{position:relative;display:flex;min-height:54px;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid var(--border-subtle);transition:background var(--duration-fast) var(--ease-standard)}\n.searchRow:focus-within{background:var(--surface-muted)}\n.searchRow input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm)}\n.searchRow input::placeholder{color:var(--text-muted)}\n.searchRow input:focus-visible{outline:none}\n@media (max-width:480px){.searchRow{gap:8px;padding:8px 11px}\n@media (prefers-reduced-motion:reduce){.clearButton,.closeButton,.itemIcon,.searchRow{transition:none}\n.itemIcon,.searchIcon{display:grid;flex:none;place-items:center;color:var(--text-muted)}\n.searchIcon{width:22px;height:22px}\n.itemIcon{display:grid;width:16px;height:16px;flex:none;place-items:center;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.itemIcon svg{width:16px;height:16px}\n.activeResult .itemIcon{color:var(--foreground)}\n.commandKey{display:inline-flex;align-items:center;justify-content:center;flex:none;border:1px solid var(--border);border-radius:7px;background:var(--surface-muted);color:var(--text-muted);font-family:inherit;font-size:var(--text-xs);font-weight:500;line-height:1;font-variant-numeric:tabular-nums;min-width:38px;height:24px;padding:0 6px;gap:2px}\n.commandKey,.shortcut{display:none}\n.clearButton{display:grid;width:24px;height:24px;flex:none;place-items:center;border:0;border-radius:7px;background:transparent;color:var(--text-muted);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.clearButton:hover,.closeButton:hover{background:var(--surface);color:var(--foreground)}\n.clearButton:active,.closeButton:active{background:var(--surface);color:var(--foreground)}\n.closeButton{display:grid;min-width:27px;height:24px;flex:none;place-items:center;border:1px solid var(--border-subtle);border-radius:7px;background:transparent;color:var(--text-muted);padding:0 6px;font:inherit;font-size:var(--text-xs);font-weight:500;line-height:1;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.resultsFrame{overflow:hidden}\n.results{position:relative;max-height:342px;overflow:auto;padding:6px 8px}\n.results{padding:6px}\n.highlight{position:absolute;top:0;right:8px;left:8px;border-radius:8px;background:var(--surface-muted);opacity:0;pointer-events:none}\n.highlight{right:6px;left:6px}\n.group{position:relative}\n.group+.group{margin-top:6px}\n.groupHeading{display:block;padding:8px 10px 4px;color:var(--text-muted);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body)}\n.result{position:relative;display:flex;width:100%;height:38px;align-items:center;gap:10px;border:0;border-radius:8px;padding:0 10px;background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer}\n.result{gap:8px}\n@media (max-width:340px){.result{padding-inline:6px}\n.resultCopy{display:flex;min-width:0;flex:1;align-items:baseline;gap:8px}\n.resultDescription,.resultLabel{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.resultLabel{flex:none;max-width:100%;color:var(--foreground);font-size:var(--text-sm);font-weight:400}\n.resultDescription{min-width:0;color:var(--text-secondary);font-size:var(--text-xs)}\n.match{background:none;color:inherit;font-weight:500}\n.shortcut{display:flex;flex:none;gap:3px;margin-left:auto}\n.shortcut kbd{display:inline-grid;min-width:20px;height:20px;place-items:center;padding:0 5px;border:1px solid var(--border);border-radius:5px;background:var(--surface);color:var(--text-muted);font-family:inherit;font-size:11px;font-weight:500;line-height:1}\n.empty{display:grid;justify-items:center;gap:4px;padding:26px 12px 28px;text-align:center}\n.empty>span{display:grid;width:32px;height:32px;place-items:center;margin-bottom:5px;color:var(--text-muted)}\n.empty strong{max-width:100%;overflow:hidden;font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.empty small{color:var(--text-secondary);font-size:var(--text-xs)}\n.visuallyHidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"palette":"palette","searchRow":"searchRow","clearButton":"clearButton","closeButton":"closeButton","itemIcon":"itemIcon","searchIcon":"searchIcon","activeResult":"activeResult","commandKey":"commandKey","shortcut":"shortcut","resultsFrame":"resultsFrame","results":"results","highlight":"highlight","group":"group","groupHeading":"groupHeading","result":"result","resultCopy":"resultCopy","resultDescription":"resultDescription","resultLabel":"resultLabel","match":"match","empty":"empty","visuallyHidden":"visuallyHidden"});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.regCss(83402, ".context-menu_target__m7unj{display:block;outline:none}.context-menu_menu__Dk1dC{position:fixed;z-index:100;min-width:min(13rem,calc(100vw - 16px));max-width:calc(100vw - 16px);max-height:min(300px,calc(100vh - 16px));overflow-y:auto;padding:5px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);outline:none}.context-menu_highlight__maPSx{position:absolute;top:0;right:5px;left:5px;border-radius:calc(var(--radius-panel) - 6px);background:var(--surface-muted);opacity:0;pointer-events:none;transition:background-color var(--duration-fast) var(--ease-standard)}.context-menu_highlight__maPSx[data-tone=danger]{background:color-mix(in oklab,var(--danger) 8%,var(--surface))}.context-menu_item__HT_xF{position:relative;display:flex;width:100%;min-height:34px;align-items:center;gap:9px;padding:0 11px;border:0;border-radius:calc(var(--radius-panel) - 6px);background:transparent;color:inherit;font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-align:left;cursor:pointer;outline:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-fast) var(--ease-standard);animation:context-menu_context-item-in__9zRR4 var(--duration-standard) var(--ease-enter) both;animation-delay:calc(min(var(--i, 0), 4) * 35ms)}.context-menu_item__HT_xF:focus-visible{outline:none}.context-menu_item__HT_xF:active:not(:disabled){background:color-mix(in oklab,var(--foreground) 5%,transparent)}.context-menu_item__HT_xF:disabled{opacity:.45;cursor:default}.context-menu_item__HT_xF.context-menu_destructive__X3Ik8{color:var(--danger)}.context-menu_icon__8_M_i{display:inline-flex;flex:none;width:16px;align-items:center;justify-content:center;color:var(--text-secondary)}.context-menu_item__HT_xF>span:last-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.context-menu_destructive__X3Ik8 .context-menu_icon__8_M_i{color:currentColor}@keyframes context-menu_context-item-in__9zRR4{0%{opacity:0;transform:translateY(-2px)}}@media (prefers-reduced-motion:reduce){.context-menu_highlight__maPSx,.context-menu_item__HT_xF{animation:none;transition:none}}", {"target":"context-menu_target__m7unj","menu":"context-menu_menu__Dk1dC","highlight":"context-menu_highlight__maPSx","item":"context-menu_item__HT_xF","context-item-in":"context-menu_context-item-in__9zRR4","destructive":"context-menu_destructive__X3Ik8","icon":"context-menu_icon__8_M_i"});
A.regCss(85696, ".calendar{width:min(100%,328px);min-width:0;color:var(--foreground)}\n.header{container-type:inline-size;display:grid;min-height:34px;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:4px 12px;margin-bottom:14px}\n@container (max-width: 259px){.heading,.navigation{grid-column:1/-1}\n.heading{min-width:0;margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.navigation{justify-self:end}\n.navigation{display:inline-flex;flex:0 0 auto;align-items:center;gap:2px;margin-right:-6px}\n.title{display:grid;line-height:var(--leading-body)}\n.title>.titleRow{grid-area:1/1;justify-self:start}\n.titleRow{display:inline-block;white-space:nowrap;font-variant-numeric:tabular-nums}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.navButton,.todayButton{display:grid;height:32px;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring)}\n.navButton{width:32px}\n@media (hover:hover) and (pointer:fine){.navButton:hover:not([aria-disabled]),.todayButton:hover:not([aria-disabled]){background:var(--surface-muted);color:var(--foreground)}\n.navButton:active:not([aria-disabled]),.todayButton:active:not([aria-disabled]){scale:.96;transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-fast),.1s;transition-timing-function:var(--ease-standard)}\n.navButton[aria-disabled],.todayButton[aria-disabled]{cursor:default;opacity:.36}\n@media (prefers-reduced-motion:reduce){.dayNumber,.day,.day:before,.highlightFill,.navButton,.todayButton{transition:none}\n.day:active .dayNumber,.day:active:before,.monthBody:has(.day.selected:active) .highlightFill,.navButton:active,.todayButton:active{scale:none}\n.todayButton{padding:0 11px;font-size:var(--text-sm);font-weight:500;line-height:1}\n.week,.weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));column-gap:4px}\n.weekdays{margin-bottom:6px;color:var(--text-muted);font-size:var(--text-xs);font-weight:500;line-height:24px;text-align:center}\n.weekdays span{min-width:0;overflow:hidden}\n.monthViewport{position:relative;display:grid;overflow:hidden;contain:paint}\n.monthBody{position:relative;grid-area:1/1;min-width:0;will-change:transform}\n.monthBody[inert]{pointer-events:none}\n.monthBody:has(.day.selected:hover) .highlightFill{background:var(--accent-strong)}\n.day:active:not(:disabled) .dayNumber,.day:active:not(:disabled):before,.monthBody:has(.day.selected:active:not(:disabled)) .highlightFill{scale:.94;transition-duration:var(--duration-fast),.1s;transition-timing-function:var(--ease-standard)}\n.grid{display:grid;row-gap:4px}\n.placeholderDay{aspect-ratio:1}\n.day{position:relative;display:grid;width:100%;aspect-ratio:1;min-width:0;place-items:center;border:0;border-radius:50%;padding:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:400;line-height:1;font-variant-numeric:tabular-nums;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard) var(--number-delay,0s)}\n.day:before{content:\"\";position:absolute;inset:0;border-radius:inherit;background:transparent;transition:background-color var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring)}\n@media (hover:hover) and (pointer:fine){.day:hover:not(:disabled):not(.selected):before{background:var(--surface-muted)}\n.day.outside{color:var(--text-muted)}\n.day.outside:not(.selected) .dayNumber{opacity:.8}\n.day.today .dayNumber:after{content:\"\";position:absolute;top:calc(100% + 4px);left:50%;width:4px;height:4px;margin-left:-2px;border-radius:50%;background:currentColor}\n.day.selected,.day.today{font-weight:500}\n.day.selected{color:var(--accent-foreground)}\n.day:disabled{cursor:default;color:var(--text-muted)}\n.day:disabled .dayNumber{opacity:.42}\n.day.outside:disabled .dayNumber{opacity:.3}\n.dayNumber{position:relative;transition:opacity var(--duration-fast) var(--ease-standard) var(--number-delay,0s),scale var(--duration-spring) var(--ease-spring)}\n.highlight{position:absolute;top:0;left:0;width:calc((100% - 24px) / 7);aspect-ratio:1;pointer-events:none;will-change:transform}\n.highlightFill{position:absolute;inset:0;border-radius:50%;background:var(--accent);transition:background-color var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring)}", {"calendar":"calendar","header":"header","heading":"heading","navigation":"navigation","title":"title","titleRow":"titleRow","srOnly":"srOnly","navButton":"navButton","todayButton":"todayButton","dayNumber":"dayNumber","day":"day","highlightFill":"highlightFill","monthBody":"monthBody","selected":"selected","week":"week","weekdays":"weekdays","monthViewport":"monthViewport","grid":"grid","placeholderDay":"placeholderDay","outside":"outside","today":"today","highlight":"highlight"});
A.reg(85815, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "file-image",
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
      ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
      [
        "path",
        { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
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
A.reg(95114, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { gH: () => J, v7: () => C });
  var r = i(95155), a = i(12115), n = i(85815), s = i(19876), o = i(1910), l = i(36483), d = i(9107), c = i(35484), p = i(41189), u = i(9005), h = i(38158), f = i(79196), m = i(25354), _ = i(80642), g = i(18310), y = i(92171), x = i(28245), b = i(55809), j = i(7890), v = i(22535), z = i(20122), N = i(7770), w = i(34434), $ = i.n(w);
  let T = { duration: N.T.duration.standard, ease: [...N.T.ease.enter] }, L = { duration: N.T.duration.fast, ease: [...N.T.ease.standard] }, S = { duration: 0 }, k = { duration: N.T.duration.instant }, R = { ...N.T.spring.smooth, visualDuration: 0.3 }, A = { opacity: 0, y: "0.3em", filter: `blur(${N.T.blur.soft}px)` }, F = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${N.T.blur.subtle}px)`,
    transition: L
  }, E = { opacity: 1, y: "0em", filter: "blur(0px)" }, D = (e2) => Math.min(Math.max(e2, 0), 100), I = { x: [0, -7, 6, -4, 3, -1.5, 0] }, M = { duration: 0.42, ease: "easeOut" }, O = { type: "spring", visualDuration: 0.42, bounce: 0 };
  function C(e2) {
    if (e2 < 1024) return `${e2} B`;
    if (e2 < 1048576) return `${Math.round(e2 / 1024)} KB`;
    let t2 = e2 / 1048576;
    return `${t2 >= 10 ? Math.round(t2) : Number(t2.toFixed(1))} MB`;
  }
  function P({ name: e2 }) {
    let t2 = { size: 20, strokeWidth: 1.75, "aria-hidden": true }, i2 = e2.toLowerCase().split(".").pop() ?? "";
    return [
      "png",
      "jpg",
      "jpeg",
      "gif",
      "webp",
      "svg",
      "avif",
      "heic"
    ].includes(i2) ? (0, r.jsx)(n.A, { ...t2 }) : ["mov", "mp4", "webm", "m4v", "avi"].includes(i2) ? (0, r.jsx)(s.A, { ...t2 }) : ["zip", "gz", "tar", "rar", "7z"].includes(i2) ? (0, r.jsx)(o.A, { ...t2 }) : ["pdf", "md", "txt", "doc", "docx", "rtf"].includes(i2) ? (0, r.jsx)(l.A, { ...t2 }) : (0, r.jsx)(d.A, { ...t2 });
  }
  function Y(e2) {
    let t2 = (0, f.tF)();
    return (0, r.jsx)(m.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function B({ text: e2, className: t2, reduce: i2 }) {
    return (0, r.jsx)(_.N, {
      mode: "popLayout",
      initial: false,
      children: (0, r.jsx)(
        Y,
        {
          className: t2,
          initial: i2 ? { opacity: 0 } : A,
          animate: E,
          exit: i2 ? { opacity: 0, transition: k } : F,
          transition: i2 ? k : T,
          children: e2
        },
        e2
      )
    });
  }
  function W({ text: e2 }) {
    let t2 = (0, g.I)(), i2 = e2.split(" ");
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: $().srOnly, children: e2 }),
        (0, r.jsx)("span", {
          className: $().words,
          "aria-hidden": "true",
          children: (0, r.jsx)(_.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, a2) => (0, r.jsx)(
                m.PY1.span,
                {
                  className: $().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${N.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${N.T.blur.subtle}px)`,
                    transition: L
                  },
                  transition: t2 ? { duration: N.T.duration.instant } : {
                    duration: N.T.duration.standard,
                    ease: [...N.T.ease.enter]
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
  function U({ text: e2 }) {
    let t2 = (0, g.I)(), i2 = (0, a.useRef)(null), [n2, s2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && s2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsx)(m.PY1.div, {
      className: $().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: n2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: t2 ? { duration: 0 } : {
          height: N.T.spring.smooth,
          opacity: { duration: N.T.duration.instant }
        }
      },
      transition: t2 ? { duration: 0 } : {
        height: N.T.spring.smooth,
        opacity: { duration: N.T.duration.fast }
      },
      children: (0, r.jsxs)(m.PY1.div, {
        ref: i2,
        className: $().error,
        role: "alert",
        initial: !t2 && { y: "0.35em", filter: `blur(${N.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: t2 ? 0 : N.T.duration.standard,
          ease: [...N.T.ease.enter]
        },
        children: [
          (0, r.jsx)(c.A, {
            className: $().errorIcon,
            size: 14,
            strokeWidth: 2.25,
            "aria-hidden": "true"
          }),
          (0, r.jsx)("span", {
            className: $().errorCopy,
            children: (0, r.jsx)(W, { text: e2 })
          })
        ]
      })
    });
  }
  function q({ reduce: e2 }) {
    return (0, r.jsxs)("svg", {
      className: $().stateIcon,
      width: 14,
      height: 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.25,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)(m.PY1.path, {
          d: "M12 2.5a9.5 9.5 0 1 1 0 19a9.5 9.5 0 1 1 0-19",
          initial: !e2 && { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: {
            duration: 0.7 * N.T.duration.considered,
            ease: [...N.T.ease.enter]
          }
        }),
        (0, r.jsx)(m.PY1.path, {
          d: "m8.2 12.4 2.6 2.6 5-5.2",
          initial: !e2 && { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { ...T, delay: 0.16 }
        })
      ]
    });
  }
  function H({ item: e2 }) {
    let [t2, i2] = (0, a.useState)(false);
    return !e2.preview || t2 ? (0, r.jsx)("span", {
      className: $().fileIcon,
      children: (0, r.jsx)(P, { name: e2.name })
    }) : (0, r.jsx)("span", {
      className: $().thumb,
      children: (0, r.jsx)("img", {
        src: e2.preview,
        alt: "",
        width: 40,
        height: 40,
        decoding: "async",
        onError: () => i2(true)
      })
    });
  }
  function G({
    item: e2,
    reduce: t2,
    delay: i2,
    fresh: n2,
    canRetry: s2,
    onRemove: o2,
    onRetry: l2,
    removeRef: d2
  }) {
    let { status: h2 } = e2, f2 = (0, a.useRef)(null), g2 = (0, a.useRef)(n2 ? "new" : h2);
    (0, a.useEffect)(() => {
      let e3 = g2.current;
      if (h2 === e3) return;
      g2.current = h2;
      let r2 = f2.current;
      "failed" === h2 && !t2 && r2 && (0, y.i)(r2, I, { ...M, delay: "new" === e3 ? i2 + 0.3 : 0 });
    }, [h2, t2, i2]);
    let v2 = (0, x.d)("uploaded" === h2 ? 100 : e2.progress ?? 0), z2 = (0, b.G)(v2, (e3) => `${D(e3) - 100}%`), w2 = (0, b.G)(v2, (e3) => `${Math.round(D(e3))}%`), [P2, B2] = (0, a.useState)("uploading" !== h2), [W2, U2] = (0, a.useState)(h2);
    W2 !== h2 && (U2(h2), "uploading" === h2 && B2(false));
    let J2 = "uploaded" !== h2 || P2 || t2 ? h2 : "uploading", V = "uploaded" === h2 ? 100 : e2.progress ?? 0;
    (0, a.useEffect)(() => {
      if ("uploading" !== h2 && "uploaded" !== h2) return;
      if (t2 || "uploading" === h2 && 0 === V) return void v2.jump(V);
      let e3 = (0, y.i)(v2, V, {
        ...N.T.spring.smooth,
        onComplete: "uploaded" === h2 ? () => B2(true) : void 0
      });
      return () => e3.stop();
    }, [h2, V, v2, t2]), (0, j.L)(v2, "change", (e3) => {
      "uploaded" === h2 && e3 >= 99.5 && B2(true);
    });
    let X = "failed" === h2, K = X && s2 && false !== e2.retryable;
    return (0, r.jsx)(m.PY1.li, {
      className: $().item,
      initial: t2 ? { opacity: 0 } : { height: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: t2 ? { opacity: 0, transition: k } : {
        height: 0,
        opacity: 0,
        transition: { height: R, opacity: { ...L, delay: 0.04 } }
      },
      transition: t2 ? k : { height: { ...N.T.spring.smooth, delay: i2 }, opacity: k },
      children: (0, r.jsxs)(m.PY1.div, {
        ref: f2,
        className: `${$().row} ${X ? $().isFailed : ""}`,
        initial: !t2 && {
          opacity: 0,
          y: -22,
          scale: 0.94,
          filter: `blur(${N.T.blur.soft}px)`
        },
        animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        exit: t2 ? void 0 : {
          scale: 0.97,
          filter: `blur(${N.T.blur.subtle}px)`,
          transition: L
        },
        transition: t2 ? S : {
          y: { ...O, delay: i2 },
          scale: { ...O, delay: i2 },
          opacity: { ...T, delay: i2 },
          filter: { ...T, delay: i2 }
        },
        children: [
          (0, r.jsx)(H, { item: e2 }),
          (0, r.jsxs)("span", {
            className: $().copy,
            children: [
              (0, r.jsx)("span", {
                className: $().name,
                title: e2.name,
                children: e2.name
              }),
              (0, r.jsxs)("span", {
                className: $().meta,
                children: [
                  (0, r.jsx)("span", { children: C(e2.size) }),
                  J2 && (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", {
                        className: $().dot,
                        "aria-hidden": "true",
                        children: "\xB7"
                      }),
                      (0, r.jsx)("span", {
                        className: $().phase,
                        children: (0, r.jsx)(_.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, r.jsx)(
                            Y,
                            {
                              className: `${$().state} ${"uploaded" === J2 ? $().uploaded : "failed" === J2 ? $().failed : ""}`,
                              initial: t2 ? { opacity: 0 } : A,
                              animate: E,
                              exit: t2 ? { opacity: 0, transition: k } : F,
                              transition: t2 ? k : T,
                              children: "uploading" === J2 ? (0, r.jsxs)("span", {
                                children: [
                                  "Uploading ",
                                  (0, r.jsx)(m.PY1.span, {
                                    className: $().percent,
                                    children: w2
                                  })
                                ]
                              }) : "uploaded" === J2 ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(q, { reduce: t2 }),
                                  (0, r.jsx)("span", {
                                    children: "Uploaded"
                                  })
                                ]
                              }) : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(c.A, {
                                    className: $().stateIcon,
                                    size: 14,
                                    strokeWidth: 2.25,
                                    "aria-hidden": "true"
                                  }),
                                  (0, r.jsxs)("span", {
                                    className: $().reason,
                                    title: e2.error,
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: $().srOnly,
                                        children: "Failed: "
                                      }),
                                      e2.error || "Upload failed"
                                    ]
                                  })
                                ]
                              })
                            },
                            J2
                          )
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, r.jsx)(_.N, {
                initial: false,
                children: "uploading" === J2 && (0, r.jsx)(
                  m.PY1.span,
                  {
                    className: $().barFrame,
                    initial: t2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: t2 ? { opacity: 0, transition: k } : {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { ...R, delay: 0.22 },
                        opacity: { ...L, delay: 0.16 }
                      }
                    },
                    transition: t2 ? k : { height: N.T.spring.smooth, opacity: T },
                    children: (0, r.jsx)("span", {
                      className: $().bar,
                      role: "progressbar",
                      "aria-label": `Uploading ${e2.name}`,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": Math.round(D(V)),
                      children: (0, r.jsx)(m.PY1.span, {
                        className: $().barFill,
                        style: { x: z2 }
                      })
                    })
                  },
                  "bar"
                )
              })
            ]
          }),
          (0, r.jsxs)("span", {
            className: $().actions,
            children: [
              (0, r.jsx)(_.N, {
                initial: false,
                children: K && (0, r.jsx)(
                  m.PY1.span,
                  {
                    className: $().retrySlot,
                    initial: t2 ? { opacity: 0 } : { width: 0, opacity: 0 },
                    animate: { width: "auto", opacity: 1 },
                    exit: t2 ? { opacity: 0, transition: k } : {
                      width: 0,
                      opacity: 0,
                      transition: {
                        width: R,
                        opacity: { duration: N.T.duration.instant }
                      }
                    },
                    transition: t2 ? k : { width: N.T.spring.smooth, opacity: T },
                    children: (0, r.jsx)(m.PY1.span, {
                      className: $().retryInner,
                      initial: !t2 && {
                        scale: 0.8,
                        filter: `blur(${N.T.blur.subtle}px)`
                      },
                      animate: { scale: 1, filter: "blur(0px)" },
                      transition: t2 ? S : N.T.spring.snappy,
                      children: (0, r.jsxs)("button", {
                        type: "button",
                        className: $().retry,
                        onClick: l2,
                        "aria-label": `Retry ${e2.name}`,
                        title: "Retry",
                        children: [
                          (0, r.jsx)(p.A, {
                            size: 14,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: $().retryLabel,
                            children: "Retry"
                          })
                        ]
                      })
                    })
                  },
                  "retry"
                )
              }),
              (0, r.jsx)("button", {
                ref: d2,
                type: "button",
                className: $().remove,
                onClick: o2,
                "aria-label": `Remove ${e2.name}`,
                title: "Remove",
                children: (0, r.jsx)(u.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            ]
          })
        ]
      })
    });
  }
  function J({
    accept: e2,
    multiple: t2 = true,
    maxFiles: i2 = 5,
    onFilesChange: n2,
    label: s2 = "Add files",
    description: o2 = "Drop files here or choose from your device",
    defaultItems: l2,
    onUpload: d2,
    maxSize: c2,
    listPlacement: p2 = "below",
    note: u2,
    dropLabel: f2,
    compactAt: b2
  }) {
    let [j2, w2] = (0, a.useState)(() => l2 ?? []), [A2, F2] = (0, a.useState)(false), [E2, O2] = (0, a.useState)(""), [P2, Y2] = (0, a.useState)(""), [W2, q2] = (0, a.useState)(0), H2 = (0, a.useRef)(null), V = (0, a.useRef)(null), X = (0, a.useRef)(null), K = (0, a.useRef)(null), Q = (0, a.useRef)(0), Z = (0, a.useRef)(0), ee = (0, a.useRef)(/* @__PURE__ */ new Map()), et = (0, a.useRef)(/* @__PURE__ */ new Map()), ei = (0, a.useId)(), er = (0, a.useId)(), ea = !!(0, g.I)(), en = "inside" === p2, es = void 0 !== b2 && j2.length >= b2, [eo, el] = (0, a.useState)(() => /* @__PURE__ */ new Set()), ed = (0, a.useRef)(/* @__PURE__ */ new Map()), [ec, ep] = (0, a.useState)(false), [eu, eh] = (0, a.useState)(false);
    (0, a.useEffect)(() => {
      let e3 = ee.current, t3 = ed.current;
      return () => {
        e3.forEach((e4) => e4.abort()), t3.forEach((e4) => URL.revokeObjectURL(e4));
      };
    }, []);
    let ef = (0, x.d)(50), em = (0, x.d)(50), e_ = { stiffness: 260, damping: 32, mass: 0.8 }, eg = (0, v.z)(ef, e_), ey = (0, v.z)(em, e_), ex = (0, z.E)`radial-gradient(180px circle at ${eg}% ${ey}%, var(--accent), transparent 70%)`, eb = (0, z.E)`radial-gradient(260px circle at ${eg}% ${ey}%, color-mix(in oklab, var(--accent) 6%, transparent), transparent 70%)`, ej = (e3) => {
      let t3 = X.current;
      if (!t3) return;
      let i3 = t3.getBoundingClientRect(), r2 = (e3.clientX - i3.left) / Math.max(1, i3.width) * 100, a2 = (e3.clientY - i3.top) / Math.max(1, i3.height) * 100;
      ea || !A2 ? (ef.jump(r2), em.jump(a2), eg.jump(r2), ey.jump(a2)) : (ef.set(r2), em.set(a2));
    };
    (0, a.useLayoutEffect)(() => {
      let e3 = X.current, t3 = K.current;
      if (!e3 || !t3) return;
      let i3 = () => {
        let i4 = e3.offsetWidth - 1, r3 = e3.offsetHeight - 1, a3 = Math.max(
          0,
          Math.min(
            parseFloat(getComputedStyle(e3).borderTopLeftRadius) - 0.5,
            i4 / 2,
            r3 / 2
          )
        ), n4 = 2 * (i4 + r3) - 8 * a3 + 2 * Math.PI * a3;
        t3.setAttribute("rx", String(a3)), t3.setAttribute(
          "pathLength",
          String(7 * Math.max(8, Math.round(n4 / 7)))
        );
      };
      i3();
      let r2 = 0, a2 = () => {
        i3(), r2 = requestAnimationFrame(a2);
      }, n3 = (t4) => {
        t4.target === e3 && t4.propertyName.includes("radius") && (cancelAnimationFrame(r2), a2());
      }, s3 = (t4) => {
        t4.target === e3 && t4.propertyName.includes("radius") && (cancelAnimationFrame(r2), i3());
      };
      e3.addEventListener("transitionrun", n3), e3.addEventListener("transitionend", s3), e3.addEventListener("transitioncancel", s3);
      let o3 = "u" < typeof ResizeObserver ? void 0 : new ResizeObserver(i3);
      return o3?.observe(e3), () => {
        o3?.disconnect(), cancelAnimationFrame(r2), e3.removeEventListener("transitionrun", n3), e3.removeEventListener("transitionend", s3), e3.removeEventListener("transitioncancel", s3);
      };
    }, []);
    let ev = (e3) => e3.flatMap((e4) => e4.file ? [e4.file] : []), ez = (e3, t3) => w2((i3) => i3.map((i4) => i4.id === e3 ? t3(i4) : i4));
    function eN(e3) {
      if (!d2) return;
      ee.current.get(e3.id)?.abort();
      let t3 = new AbortController();
      ee.current.set(e3.id, t3), ez(e3.id, (e4) => ({
        ...e4,
        status: "uploading",
        progress: 0,
        error: void 0
      })), d2(
        { ...e3, status: "uploading", progress: 0, error: void 0 },
        {
          signal: t3.signal,
          onProgress: (i3) => {
            t3.signal.aborted || ez(
              e3.id,
              (e4) => "uploading" === e4.status ? { ...e4, progress: Math.max(e4.progress ?? 0, D(i3)) } : e4
            );
          }
        }
      ).then(
        () => {
          t3.signal.aborted || (ez(e3.id, (e4) => ({ ...e4, status: "uploaded", progress: 100 })), Y2(`${e3.name} uploaded`));
        },
        (i3) => {
          if (t3.signal.aborted) return;
          let r2 = i3 instanceof Error && i3.message ? i3.message : "Upload failed";
          ez(e3.id, (e4) => ({
            ...e4,
            status: "failed",
            error: r2,
            retryable: true
          })), Y2(`${e3.name} failed. ${r2}`);
        }
      ).finally(() => {
        ee.current.get(e3.id) === t3 && ee.current.delete(e3.id);
      });
    }
    function ew(r2) {
      let a2 = Array.from(r2), s3 = e2?.split(",").map((e3) => e3.trim().toLowerCase()).filter(Boolean) ?? [], o3 = a2.filter(
        (e3) => 0 === s3.length || s3.some(
          (t3) => t3.startsWith(".") ? e3.name.toLowerCase().endsWith(t3) : t3.endsWith("/*") ? e3.type.startsWith(t3.slice(0, -1)) : e3.type === t3
        )
      ), l3 = t2 ? j2 : [], p3 = (e3, t3) => e3.name === t3.name && e3.size === t3.size && e3.lastModified === t3.lastModified, u3 = o3.filter(
        (e3, t3) => o3.findIndex((t4) => p3(t4, e3)) === t3 && !l3.some((t4) => t4.file && p3(t4.file, e3))
      ), h2 = t2 ? Math.max(0, i2 - l3.length) : 1, f3 = u3.slice(0, h2).map((e3) => {
        let t3 = void 0 !== c2 && e3.size > c2, i3 = `${e3.name}-${e3.size}-${e3.lastModified}-${Z.current++}`, r3 = e3.type.startsWith("image/") && "function" == typeof URL.createObjectURL ? URL.createObjectURL(e3) : void 0;
        return r3 && ed.current.set(i3, r3), {
          id: i3,
          name: e3.name,
          size: e3.size,
          file: e3,
          preview: r3,
          status: t3 ? "failed" : d2 ? "uploading" : void 0,
          progress: 0,
          error: t3 ? `File is larger than ${C(c2)}` : void 0,
          retryable: !t3
        };
      }), m2 = o3.length !== a2.length, _2 = u3.length > f3.length;
      if (O2(
        m2 ? a2.length - o3.length == 1 && 1 === a2.length ? `${a2[0].name} is not an accepted file type.` : "Some files were not added because their type is not accepted." : _2 ? `You can add up to ${i2} ${1 === i2 ? "file" : "files"}.` : ""
      ), (m2 || _2) && !ea && X.current && (0, y.i)(X.current, I, M), !f3.length)
        return;
      t2 || (ee.current.forEach((e3) => e3.abort()), ee.current.clear());
      let g2 = [...l3, ...f3];
      el((e3) => /* @__PURE__ */ new Set([...e3, ...f3.map((e4) => e4.id)])), q2(l3.length), w2((e3) => t2 ? [...e3, ...f3] : f3), n2?.(ev(g2));
      let x2 = f3.filter((e3) => "failed" === e3.status);
      Y2(
        `${f3.length} ${1 === f3.length ? "file" : "files"} added.${x2.length ? ` ${x2.map((e3) => `${e3.name}: ${e3.error}`).join(". ")}.` : ""}`
      ), f3.filter((e3) => "uploading" === e3.status).forEach(eN);
    }
    let e$ = ec || eu, eT = (0, a.useRef)(ew);
    (0, a.useLayoutEffect)(() => {
      eT.current = ew;
    }), (0, a.useEffect)(() => {
      if (!e$) return;
      let e3 = (e4) => {
        let t3 = e4.clipboardData?.files;
        if (!t3?.length) return;
        let i3 = e4.target;
        i3?.closest(
          "input:not([type=file]), textarea, [contenteditable='true']"
        ) || (e4.preventDefault(), eT.current(t3));
      };
      return document.addEventListener("paste", e3), () => document.removeEventListener("paste", e3);
    }, [e$]);
    let eL = (e3) => Array.from(e3.dataTransfer?.types ?? []).includes("Files"), eS = u2 ?? (e2 ? `Accepted: ${e2}` : `Up to ${i2} ${1 === i2 ? "file" : "files"}`), ek = {
      initial: ea ? { opacity: 0 } : { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: ea ? { opacity: 0, transition: k } : { height: 0, opacity: 0, transition: { height: R, opacity: L } },
      transition: ea ? k : { height: N.T.spring.smooth, opacity: T }
    }, eR = en && j2.length > 0, eA = (0, r.jsx)(m.PY1.ul, {
      className: $().list,
      "aria-label": "Files",
      "aria-hidden": !j2.length || void 0,
      onKeyDown: function(e3) {
        if ("Delete" === e3.key || "Backspace" === e3.key) {
          let t4 = e3.target.closest(`.${$().row}`), i4 = t4?.querySelector(`.${$().remove}`);
          i4 && (e3.preventDefault(), i4.click());
          return;
        }
        if ("ArrowDown" !== e3.key && "ArrowUp" !== e3.key) return;
        let t3 = e3.target.closest("button"), i3 = Array.from(e3.currentTarget.querySelectorAll(`.${$().row}`)), r2 = t3?.closest(`.${$().row}`);
        if (!t3 || !r2) return;
        let a2 = i3[i3.indexOf(r2) + ("ArrowDown" === e3.key ? 1 : -1)];
        a2 && (e3.preventDefault(), (a2.querySelector(
          `.${t3.classList.contains($().retry) ? $().retry : $().remove}`
        ) ?? a2.querySelector(`.${$().remove}`))?.focus());
      },
      initial: false,
      animate: {
        paddingTop: j2.length && !en ? 4 : 0,
        paddingBottom: j2.length && en ? 12 : 0
      },
      transition: ea ? S : N.T.spring.smooth,
      children: (0, r.jsx)(_.N, {
        initial: false,
        children: j2.map(
          (e3, t3) => (0, r.jsx)(
            G,
            {
              item: e3,
              reduce: ea,
              delay: ea ? 0 : Math.min(Math.max(0, t3 - W2), 7) * N.T.stagger.item * 1.6,
              fresh: eo.has(e3.id),
              canRetry: !!d2,
              onRemove: () => {
                let t4, i3, r2, a2;
                return ee.current.get(e3.id)?.abort(), ee.current.delete(e3.id), t4 = j2.findIndex((t5) => t5.id === e3.id), i3 = j2[t4 + 1] ?? j2[t4 - 1], r2 = j2.filter((t5) => t5.id !== e3.id), void ((a2 = ed.current.get(e3.id)) && (ed.current.delete(e3.id), window.setTimeout(() => URL.revokeObjectURL(a2), 600)), w2((t5) => t5.filter((t6) => t6.id !== e3.id)), O2(""), Y2(`${e3.name} removed`), e3.file && n2?.(ev(r2)), requestAnimationFrame(
                  () => (i3 ? et.current.get(i3.id) : V.current)?.focus()
                ));
              },
              onRetry: () => {
                Y2(`Retrying ${e3.name}`), eN(e3), requestAnimationFrame(() => et.current.get(e3.id)?.focus());
              },
              removeRef: (t4) => {
                t4 ? et.current.set(e3.id, t4) : et.current.delete(e3.id);
              }
            },
            e3.id
          )
        )
      })
    });
    return (0, r.jsxs)("div", {
      className: $().wrapper,
      onPointerEnter: () => ep(true),
      onPointerLeave: () => ep(false),
      onFocus: () => eh(true),
      onBlur: (e3) => {
        e3.currentTarget.contains(e3.relatedTarget) || eh(false);
      },
      children: [
        (0, r.jsxs)("div", {
          ref: X,
          className: `${$().dropzone} ${A2 ? $().dragging : ""} ${en ? $().inside : ""} ${es ? $().compact : ""}`,
          onDragEnter: (e3) => {
            eL(e3) && (e3.preventDefault(), Q.current || ej(e3), Q.current += 1, F2(true));
          },
          onDragOver: (e3) => {
            eL(e3) && (e3.preventDefault(), e3.dataTransfer.dropEffect = "copy", ej(e3));
          },
          onDragLeave: (e3) => {
            eL(e3) && (Q.current = Math.max(0, Q.current - 1), Q.current || F2(false));
          },
          onDrop: (e3) => {
            e3.preventDefault(), Q.current = 0, F2(false), e3.dataTransfer.files.length && ew(e3.dataTransfer.files);
          },
          children: [
            (0, r.jsx)(m.PY1.span, {
              className: $().wash,
              style: { backgroundImage: eb },
              "aria-hidden": "true"
            }),
            (0, r.jsx)("svg", {
              className: $().edge,
              "aria-hidden": "true",
              children: (0, r.jsx)("rect", {
                ref: K,
                width: "100%",
                height: "100%",
                rx: 33.5,
                pathLength: 1358
              })
            }),
            (0, r.jsx)(m.PY1.span, {
              className: $().glow,
              style: { backgroundImage: ex },
              "aria-hidden": "true"
            }),
            (0, r.jsxs)(m.PY1.button, {
              ref: V,
              type: "button",
              className: $().trigger,
              onClick: () => H2.current?.click(),
              "aria-describedby": es ? ei : `${ei} ${er}`,
              initial: false,
              animate: {
                paddingTop: es ? 16 : 26,
                paddingBottom: es ? eR ? 8 : 16 : eR ? 26 : 34
              },
              transition: ea ? S : N.T.spring.smooth,
              children: [
                (0, r.jsx)(_.N, {
                  initial: false,
                  children: (!es || A2) && (0, r.jsx)(
                    m.PY1.span,
                    {
                      className: $().iconSlot,
                      ...ek,
                      children: (0, r.jsxs)("span", {
                        className: $().sheets,
                        "aria-hidden": "true",
                        children: [
                          (0, r.jsx)("span", {
                            className: $().sheet,
                            "data-sheet": "back"
                          }),
                          (0, r.jsx)("span", {
                            className: $().sheet,
                            "data-sheet": "side"
                          }),
                          (0, r.jsx)("span", {
                            className: $().sheet,
                            "data-sheet": "front",
                            children: (0, r.jsx)(h.A, {
                              size: 14,
                              strokeWidth: 2
                            })
                          })
                        ]
                      })
                    },
                    "icon"
                  )
                }),
                (0, r.jsx)("strong", {
                  className: $().label,
                  children: (0, r.jsx)(B, {
                    text: A2 ? f2 ?? (d2 ? "Drop to upload" : t2 ? "Drop to add files" : "Drop to add the file") : s2,
                    className: $().labelText,
                    reduce: ea
                  })
                }),
                (0, r.jsx)("span", {
                  id: ei,
                  className: $().hint,
                  children: o2
                }),
                (0, r.jsx)(_.N, {
                  initial: false,
                  children: !es && (0, r.jsx)(
                    m.PY1.span,
                    {
                      className: $().noteSlot,
                      ...ek,
                      children: (0, r.jsx)("small", {
                        id: er,
                        className: $().note,
                        children: eS
                      })
                    },
                    "note"
                  )
                })
              ]
            }),
            en && eA
          ]
        }),
        (0, r.jsx)("input", {
          ref: H2,
          className: $().input,
          type: "file",
          accept: e2,
          multiple: t2,
          tabIndex: -1,
          "aria-hidden": "true",
          onChange: (e3) => {
            e3.target.files && ew(e3.target.files), e3.target.value = "";
          }
        }),
        (0, r.jsx)(_.N, {
          initial: false,
          children: E2 ? (0, r.jsx)(U, { text: E2 }, "error") : null
        }),
        !en && eA,
        (0, r.jsx)("span", {
          className: $().srOnly,
          role: "status",
          "aria-live": "polite",
          children: P2
        })
      ]
    });
  }
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
A.reg(97474, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { ActionsInputsPreview: () => tA });
  var a = i(95155), n = i(12115), s = i(18310), r = i(80642), o = i(25354), l = i(2125), d = i(36483), c = i(17143), u = i(18986), p = i(99314), h = i(5937), m = i(51128), x = i(50825), f = i(30377), _ = i(52920), b = i(32159), y = i(90467), g = i(59680), j = i(64577), v = i(9383), w = i(25879), T = i(51288), N = i(5442), k = i(57189), S = i(57793), $ = i(28245), P = i(92171), C = i(12363), A = i(7770), z = i(37350), D = i.n(z);
  let R = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, L = { ...R, opacity: 0 }, E = { opacity: 0, transition: { duration: A.T.duration.instant } }, I = { opacity: 0, y: 5, filter: `blur(${A.T.blur.soft}px)` }, M = {
    opacity: 0,
    y: -4,
    filter: `blur(${A.T.blur.subtle}px)`,
    transition: { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }
  }, Y = { opacity: 0, scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` }, F = {
    ...Y,
    transition: { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }
  }, O = {
    ...A.T.spring.snappy,
    opacity: { duration: A.T.duration.fast, ease: [...A.T.ease.enter] },
    filter: { duration: A.T.duration.fast, ease: [...A.T.ease.enter] }
  }, B = (e10, t2) => e10.map((e11, i2) => ({ id: `${t2}:${i2}`, char: e11, order: i2 }));
  function W({ text: e10, reduced: t2 }) {
    let i2 = (function(e11) {
      let [t3, i3] = (0, n.useState)(() => ({
        text: e11,
        seq: 0,
        glyphs: B([...e11], 0)
      }));
      if (t3.text === e11) return t3.glyphs;
      let a2 = [...t3.text], s2 = [...e11], r2 = 0, o2 = 0;
      for (; r2 < a2.length && r2 < s2.length && a2[r2] === s2[r2]; ) r2++;
      for (; o2 < a2.length - r2 && o2 < s2.length - r2 && a2[a2.length - 1 - o2] === s2[s2.length - 1 - o2]; )
        o2++;
      r2 < 2 && (r2 = 0), o2 < 2 && (o2 = 0);
      let l2 = t3.seq + 1, d2 = [
        ...t3.glyphs.slice(0, r2),
        ...B(s2.slice(r2, s2.length - o2), l2),
        ...t3.glyphs.slice(t3.glyphs.length - o2)
      ];
      return i3({ text: e11, seq: l2, glyphs: d2 }), d2;
    })(e10);
    return (0, a.jsx)("span", {
      className: D().glyphs,
      children: (0, a.jsx)(r.N, {
        mode: "popLayout",
        initial: false,
        children: i2.map(
          (i3) => (0, a.jsx)(
            o.PY1.span,
            {
              className: D().glyph,
              layout: !t2 && "position",
              layoutDependency: e10,
              initial: t2 ? L : I,
              animate: R,
              exit: t2 ? E : M,
              transition: t2 ? { duration: A.T.duration.instant } : {
                duration: A.T.duration.standard,
                ease: [...A.T.ease.enter],
                delay: Math.min(i3.order * A.T.stagger.char, 0.1),
                layout: A.T.spring.morph
              },
              children: i3.char
            },
            i3.id
          )
        )
      })
    });
  }
  function V({
    label: e10,
    actions: t2,
    onClick: i2,
    disabled: l2,
    icon: d2,
    variant: c2 = "primary"
  }) {
    var u2;
    let p2, h2, m2, x2 = (0, s.I)() ?? false, f2 = (0, n.useRef)(null), _2 = (function(e11) {
      if (!(0, n.isValidElement)(e11))
        return null == e11 || "boolean" == typeof e11 ? "" : String(e11);
      let t3 = e11.type;
      return "string" == typeof t3 ? t3 : t3?.displayName ?? t3?.name ?? "icon";
    })(d2), b2 = (u2 = `${_2}|${e10}`, p2 = (0, $.d)("auto"), h2 = (0, n.useRef)(u2), m2 = (0, n.useRef)(0), (0, n.useLayoutEffect)(() => {
      h2.current !== u2 && (h2.current = u2, m2.current = performance.now() + 700);
    }, [u2]), (0, n.useEffect)(() => {
      let e11 = f2.current, t3 = e11?.parentElement;
      if (!e11 || !t3 || "u" < typeof ResizeObserver) return;
      let i3 = false, a2 = new ResizeObserver(([e12]) => {
        if (!e12) return;
        let a3 = e12.contentRect.width;
        if (!a3 || !i3 || x2 || performance.now() > m2.current) {
          i3 = a3 > 0, p2.jump(a3 || "auto"), delete t3.dataset.morphing;
          return;
        }
        t3.dataset.morphing = "", (0, P.i)(p2, a3, {
          ...A.T.spring.morph,
          onComplete: () => {
            delete t3.dataset.morphing;
          }
        });
      });
      return a2.observe(e11), () => a2.disconnect();
    }, [f2, x2, p2]), p2);
    return (0, a.jsxs)(S.bL, {
      children: [
        (0, a.jsxs)("div", {
          className: [D().group, "secondary" === c2 ? D().secondary : ""].filter(Boolean).join(" "),
          children: [
            (0, a.jsxs)("button", {
              className: D().primary,
              type: "button",
              onClick: i2,
              disabled: l2,
              children: [
                (0, a.jsx)(o.PY1.span, {
                  className: D().primarySlot,
                  style: { width: b2 },
                  "aria-hidden": "true",
                  children: (0, a.jsxs)("span", {
                    ref: f2,
                    className: D().primaryContent,
                    children: [
                      d2 ? (0, a.jsx)("span", {
                        className: D().mainIcon,
                        children: (0, a.jsx)(r.N, {
                          initial: false,
                          children: (0, a.jsx)(
                            o.PY1.span,
                            {
                              className: D().iconPhase,
                              initial: x2 ? L : Y,
                              animate: R,
                              exit: x2 ? E : F,
                              transition: x2 ? { duration: A.T.duration.instant } : O,
                              children: d2
                            },
                            _2
                          )
                        })
                      }) : null,
                      (0, a.jsx)(W, { text: e10, reduced: x2 })
                    ]
                  })
                }),
                (0, a.jsx)("span", {
                  className: D().srOnly,
                  "aria-live": "polite",
                  children: e10
                })
              ]
            }),
            (0, a.jsx)(S.l9, {
              className: D().trigger,
              type: "button",
              "aria-label": `${e10} more actions`,
              disabled: l2,
              children: (0, a.jsx)(C.A, {
                className: D().chevron,
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, a.jsx)(S.ZL, {
          children: (0, a.jsx)(S.UC, {
            className: D().menu,
            sideOffset: 4,
            align: "end",
            collisionPadding: 12,
            loop: true,
            children: t2.map(
              (e11, t3) => (0, a.jsxs)(
                S.q7,
                {
                  className: [D().item, e11.destructive ? D().destructive : ""].filter(Boolean).join(" "),
                  style: { "--i": t3 },
                  disabled: e11.disabled,
                  onSelect: e11.onSelect,
                  children: [
                    e11.icon ? (0, a.jsx)("span", {
                      className: D().icon,
                      "aria-hidden": "true",
                      children: e11.icon
                    }) : null,
                    e11.label
                  ]
                },
                e11.label
              )
            )
          })
        })
      ]
    });
  }
  var U = i(60466), H = i(29354), K = i(61618), q = i(73474), G = i(55665), Z = i(98898), Q = i(20530), J = i(9005), X = i(44370), ee = i.n(X);
  let et = { duration: A.T.duration.instant }, ei = {
    enter: (e10) => ({
      opacity: 0,
      y: e10 > 0 ? "0.6em" : "-0.6em",
      filter: `blur(${A.T.blur.subtle}px)`
    }),
    rest: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e10) => ({
      opacity: 0,
      y: e10 > 0 ? "-0.6em" : "0.6em",
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: {
        duration: A.T.duration.fast,
        ease: [...A.T.ease.standard]
      }
    })
  }, ea = {
    enter: { opacity: 0 },
    rest: { opacity: 1 },
    exit: { opacity: 0, transition: et }
  }, en = { opacity: 0, filter: `blur(${A.T.blur.subtle}px)` }, es = {
    ...en,
    transition: { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }
  }, er = { duration: A.T.duration.standard, ease: [...A.T.ease.enter] };
  function eo({ count: e10, noun: t2, reduced: i2 }) {
    let s2, l2, d2, [c2, u2] = (0, n.useState)({ count: e10, dir: 1 });
    c2.count !== e10 && u2({ count: e10, dir: e10 > c2.count ? 1 : -1 });
    let p2 = (0, n.useRef)(null), h2 = (s2 = (0, $.d)("auto"), l2 = (0, n.useRef)(e10), d2 = (0, n.useRef)(0), (0, n.useLayoutEffect)(() => {
      l2.current !== e10 && (l2.current = e10, d2.current = performance.now() + 700);
    }, [e10]), (0, n.useEffect)(() => {
      let e11 = p2.current;
      if (!e11 || "u" < typeof ResizeObserver) return;
      let t3 = false, a2 = new ResizeObserver(([e12]) => {
        let a3 = e12.contentRect.width;
        if (!a3 || !t3 || i2 || performance.now() > d2.current) {
          t3 = a3 > 0, s2.jump(a3 || "auto");
          return;
        }
        (0, P.i)(s2, a3, A.T.spring.morph);
      });
      return a2.observe(e11), () => a2.disconnect();
    }, [p2, i2, s2]), s2), m2 = !i2 && "position";
    return (0, a.jsx)(o.PY1.span, {
      className: ee().countSlot,
      style: { width: h2 },
      "aria-hidden": "true",
      children: (0, a.jsxs)("span", {
        ref: p2,
        className: ee().countRow,
        children: [
          (0, a.jsx)("span", {
            className: ee().countNumber,
            children: (0, a.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              custom: c2.dir,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  className: ee().digits,
                  custom: c2.dir,
                  variants: i2 ? ea : ei,
                  initial: "enter",
                  animate: "rest",
                  exit: "exit",
                  transition: i2 ? et : { ...A.T.spring.snappy, opacity: er, filter: er },
                  children: e10
                },
                e10
              )
            })
          }),
          (0, a.jsxs)(o.PY1.span, {
            className: ee().words,
            layout: m2,
            layoutDependency: e10,
            transition: A.T.spring.morph,
            children: [
              ` ${t2}`,
              (0, a.jsx)(r.N, {
                mode: "popLayout",
                initial: false,
                children: 1 !== e10 && (0, a.jsx)(
                  o.PY1.span,
                  {
                    className: ee().plural,
                    initial: i2 ? { opacity: 0 } : en,
                    animate: { opacity: 1, filter: "blur(0px)" },
                    exit: i2 ? { opacity: 0, transition: { duration: 0 } } : es,
                    transition: i2 ? et : er,
                    children: "s"
                  },
                  "plural"
                )
              }),
              (0, a.jsx)(o.PY1.span, {
                className: ee().selected,
                layout: m2,
                layoutDependency: e10,
                transition: A.T.spring.morph,
                children: " selected"
              })
            ]
          })
        ]
      })
    });
  }
  function el({ count: e10, actions: t2, onClear: i2, noun: n2 = "item" }) {
    let l2 = (0, s.I)() ?? false;
    return (0, a.jsx)(r.N, {
      initial: false,
      children: e10 > 0 && (0, a.jsxs)(
        o.PY1.div,
        {
          className: ee().bar,
          role: "toolbar",
          "aria-label": "Selection actions",
          initial: l2 ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.97 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: l2 ? { opacity: 0, transition: et } : {
            opacity: 0,
            y: 6,
            scale: 0.98,
            transition: {
              duration: A.T.duration.exit,
              ease: [...A.T.ease.standard]
            }
          },
          transition: l2 ? et : {
            ...A.T.spring.smooth,
            opacity: {
              duration: A.T.duration.fast,
              ease: [...A.T.ease.enter]
            }
          },
          children: [
            (0, a.jsxs)("span", {
              className: ee().count,
              children: [
                (0, a.jsx)(eo, { count: e10, noun: n2, reduced: l2 }),
                (0, a.jsx)("span", {
                  className: ee().srOnly,
                  "aria-live": "polite",
                  children: `${e10} ${n2}${1 === e10 ? "" : "s"} selected`
                })
              ]
            }),
            t2.length > 0 && (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("span", {
                  className: ee().divider,
                  "aria-hidden": "true"
                }),
                (0, a.jsx)("div", {
                  className: ee().actions,
                  children: t2.map(
                    (e11) => (0, a.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: e11.destructive ? ee().destructive : "",
                        onClick: e11.onClick,
                        children: [
                          e11.icon && (0, a.jsx)("span", {
                            className: ee().actionIcon,
                            "aria-hidden": "true",
                            children: e11.icon
                          }),
                          e11.label
                        ]
                      },
                      e11.label
                    )
                  )
                })
              ]
            }),
            (0, a.jsx)("button", {
              type: "button",
              className: ee().clear,
              "aria-label": "Clear selection",
              onClick: i2,
              children: (0, a.jsx)(J.A, { size: 15, "aria-hidden": "true" })
            })
          ]
        },
        "selection-toolbar"
      )
    });
  }
  var ed = i(46439), ec = i.n(ed);
  let eu = [
    { id: "atlas", name: "Atlas redesign", meta: "Updated 2 hours ago" },
    { id: "launch", name: "Spring launch site", meta: "Updated yesterday" },
    { id: "billing", name: "Billing migration", meta: "Updated 3 days ago" },
    { id: "onboarding", name: "Onboarding emails", meta: "Updated last week" }
  ];
  function ep({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(["atlas", "launch"]), s2 = (a2) => {
      e10(`${t2.length} ${1 === t2.length ? "project" : "projects"} ${a2}`), i2([]);
    };
    return (0, a.jsxs)("div", {
      className: ec().demo,
      children: [
        (0, a.jsx)("ul", {
          className: ec().list,
          "aria-label": "Projects",
          children: eu.map(
            (e11) => (0, a.jsxs)(
              "li",
              {
                className: ec().row,
                children: [
                  (0, a.jsx)(Q.S, {
                    checked: t2.includes(e11.id),
                    onCheckedChange: (t3) => {
                      let a2, n2;
                      return a2 = e11.id, n2 = true === t3, i2(
                        (e12) => n2 ? e12.includes(a2) ? e12 : [...e12, a2] : e12.filter((e13) => e13 !== a2)
                      );
                    },
                    "aria-label": `Select ${e11.name}`
                  }),
                  (0, a.jsxs)("span", {
                    className: ec().copy,
                    children: [
                      (0, a.jsx)("span", {
                        className: ec().name,
                        children: e11.name
                      }),
                      (0, a.jsx)("span", {
                        className: ec().meta,
                        children: e11.meta
                      })
                    ]
                  })
                ]
              },
              e11.id
            )
          )
        }),
        (0, a.jsx)("div", {
          className: ec().slot,
          children: (0, a.jsx)(el, {
            count: t2.length,
            noun: "project",
            onClear: () => i2([]),
            actions: [
              {
                label: "Archive",
                icon: (0, a.jsx)(b.A, { size: 16, strokeWidth: 1.75 }),
                onClick: () => s2("archived")
              },
              {
                label: "Delete",
                icon: (0, a.jsx)(w.A, { size: 16, strokeWidth: 1.75 }),
                destructive: true,
                onClick: () => s2("deleted")
              }
            ]
          })
        })
      ]
    });
  }
  var eh = i(35978), em = i(87796), ex = i(96220), ef = i(65377), e_ = i(42454), eb = i.n(e_);
  function ey({ children: e10, reduceMotion: t2 }) {
    let i2 = (0, n.useRef)(null), [s2, r2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let e11 = i2.current;
      if (!e11) return;
      let t3 = new ResizeObserver(() => r2(e11.offsetHeight));
      return t3.observe(e11), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.div, {
      className: eb().autoHeight,
      initial: false,
      animate: { height: s2 },
      transition: t2 ? { duration: 0 } : A.T.spring.smooth,
      children: (0, a.jsx)("div", { ref: i2, children: e10 })
    });
  }
  let eg = (0, n.forwardRef)(function({
    label: e10,
    options: t2,
    value: i2,
    defaultValue: l2 = "",
    onValueChange: d2,
    description: c2,
    placeholder: u2 = "Search or select\u2026",
    emptyMessage: p2 = "No matches found",
    id: h2,
    className: m2,
    disabled: x2,
    onFocus: f2,
    ..._2
  }, b2) {
    let y2 = (0, n.useId)(), g2 = h2 ?? y2, v2 = `${g2}-listbox`, w2 = c2 ? `${g2}-description` : void 0, T2 = (0, n.useRef)(null), N2 = (0, n.useRef)(null), k2 = (0, n.useRef)({}), S2 = (0, s.I)(), [$2, z2] = (0, n.useState)(l2), [D2, R2] = (0, n.useState)(false), [L2, E2] = (0, n.useState)(""), [I2, M2] = (0, n.useState)(-1), Y2 = i2 ?? $2, F2 = t2.find((e11) => e11.value === Y2);
    (0, n.useImperativeHandle)(b2, () => N2.current);
    let O2 = (0, n.useRef)(Y2);
    (0, n.useEffect)(() => {
      if (O2.current === Y2) return;
      O2.current = Y2;
      let e11 = N2.current;
      if (!e11 || S2 || Y2 && D2) return;
      let t3 = Y2 ? (0, P.i)(
        e11,
        {
          opacity: [0, 1],
          y: ["0.35em", "0em"],
          filter: [`blur(${A.T.blur.soft}px)`, "blur(0px)"]
        },
        { duration: A.T.duration.standard, ease: [...A.T.ease.enter] }
      ) : (0, P.i)(
        e11,
        { opacity: [0, 1] },
        { duration: A.T.duration.fast, ease: [...A.T.ease.enter] }
      );
      return () => t3.complete();
    }, [Y2, S2, D2]);
    let B2 = (0, n.useMemo)(() => {
      let e11 = L2.trim().toLocaleLowerCase();
      return e11 ? t2.filter(
        (t3) => [t3.label, ...t3.keywords ?? []].some(
          (t4) => t4.toLocaleLowerCase().includes(e11)
        )
      ) : t2;
    }, [t2, L2]), W2 = B2.reduce((e11, t3, i3) => (t3.disabled || e11.push(i3), e11), []);
    (0, n.useEffect)(() => {
      if (!D2) return;
      let e11 = I2 >= 0 ? B2[I2] : void 0, t3 = e11 ? k2.current[e11.value] : null, i3 = t3?.parentElement;
      if (t3 && i3) {
        let e12 = t3.offsetTop, a2 = e12 + t3.offsetHeight;
        e12 < i3.scrollTop ? i3.scrollTop = e12 : a2 > i3.scrollTop + i3.clientHeight && (i3.scrollTop = a2 - i3.clientHeight);
      }
    }, [I2, B2, D2]), (0, n.useEffect)(() => {
      let e11 = (e12) => {
        T2.current && !T2.current.contains(e12.target) && (R2(false), E2(""));
      };
      return document.addEventListener("pointerdown", e11), () => document.removeEventListener("pointerdown", e11);
    }, []);
    let V2 = (e11) => {
      e11.disabled || (z2(e11.value), d2?.(e11.value), E2(""), R2(false), N2.current?.focus());
    }, U2 = () => {
      x2 || (R2(true), E2(""), M2(-1));
    }, H2 = D2 ? L2 : F2?.label ?? "", K2 = I2 >= 0 ? B2[I2] : void 0;
    return (0, a.jsxs)("div", {
      ref: T2,
      className: eb().field,
      children: [
        (0, a.jsx)("label", { htmlFor: g2, children: e10 }),
        (0, a.jsxs)("div", {
          className: [
            eb().control,
            D2 ? eb().open : "",
            x2 ? eb().disabled : "",
            m2 ?? ""
          ].filter(Boolean).join(" "),
          children: [
            (0, a.jsx)(ef.A, {
              className: eb().searchIcon,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, a.jsx)("input", {
              ..._2,
              ref: N2,
              id: g2,
              type: "text",
              role: "combobox",
              value: H2,
              placeholder: F2?.label ?? u2,
              disabled: x2,
              "aria-describedby": w2,
              "aria-expanded": D2,
              "aria-controls": D2 ? v2 : void 0,
              "aria-autocomplete": "list",
              "aria-activedescendant": D2 && K2 ? `${g2}-option-${K2.value}` : void 0,
              onFocus: (e11) => {
                f2?.(e11), U2();
              },
              onClick: U2,
              onChange: (e11) => {
                E2(e11.target.value), R2(true), M2(-1);
              },
              onKeyDown: (e11) => {
                if (!x2) {
                  if ("ArrowDown" === e11.key || "ArrowUp" === e11.key) {
                    if (e11.preventDefault(), !D2) return void U2();
                    if (!W2.length) return;
                    let t3 = W2.indexOf(I2), i3 = "ArrowDown" === e11.key ? (t3 + 1) % W2.length : (t3 - 1 + W2.length) % W2.length;
                    return void M2(W2[i3]);
                  }
                  if ("Enter" === e11.key && D2 && I2 >= 0) {
                    e11.preventDefault();
                    let t3 = B2[I2];
                    t3 && V2(t3);
                    return;
                  }
                  if ("Escape" === e11.key && D2) {
                    e11.preventDefault(), R2(false), E2("");
                    return;
                  }
                }
              }
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: F2 && !x2 && (0, a.jsx)(o.PY1.button, {
                type: "button",
                className: eb().clear,
                "aria-label": "Clear selection",
                onMouseDown: (e11) => e11.preventDefault(),
                onClick: (e11) => {
                  e11.preventDefault(), z2(""), d2?.(""), E2(""), R2(true), N2.current?.focus();
                },
                initial: S2 ? { opacity: 0 } : {
                  opacity: 0,
                  scale: 0.6,
                  filter: `blur(${A.T.blur.subtle}px)`
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: S2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast }
                  }
                },
                exit: {
                  opacity: 0,
                  ...S2 ? {} : { scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` },
                  transition: {
                    duration: A.T.duration.instant,
                    ease: [...A.T.ease.standard]
                  }
                },
                whileTap: {
                  scale: S2 ? 1 : 0.96,
                  transition: {
                    duration: A.T.duration.instant,
                    ease: [...A.T.ease.standard]
                  }
                },
                children: (0, a.jsx)(J.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            }),
            (0, a.jsx)(C.A, {
              className: eb().chevron,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          ]
        }),
        c2 && (0, a.jsx)("span", { id: w2, className: eb().hint, children: c2 }),
        (0, a.jsx)(r.N, {
          initial: false,
          children: D2 && (0, a.jsx)(o.PY1.div, {
            className: eb().popover,
            initial: S2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
            animate: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: S2 ? { duration: A.T.duration.instant } : {
                ...A.T.spring.snappy,
                opacity: {
                  duration: A.T.duration.fast,
                  ease: [...A.T.ease.enter]
                }
              }
            },
            exit: {
              opacity: 0,
              ...S2 ? {} : { y: -4, scale: 0.98 },
              transition: {
                duration: A.T.duration.instant,
                ease: [...A.T.ease.standard]
              }
            },
            role: "presentation",
            children: (0, a.jsx)(ey, {
              reduceMotion: S2,
              children: (0, a.jsx)("div", {
                id: v2,
                className: eb().listbox,
                role: "listbox",
                "aria-label": `${e10} options`,
                children: B2.length ? B2.map(
                  (e11, t3) => (0, a.jsxs)(
                    "div",
                    {
                      ref: (t4) => {
                        k2.current[e11.value] = t4;
                      },
                      id: `${g2}-option-${e11.value}`,
                      className: eb().option,
                      "data-active": t3 === I2 ? "true" : void 0,
                      "data-disabled": e11.disabled ? "true" : void 0,
                      role: "option",
                      "aria-selected": e11.value === Y2,
                      "aria-disabled": e11.disabled || void 0,
                      onMouseDown: (e12) => e12.preventDefault(),
                      onMouseEnter: () => !e11.disabled && M2(t3),
                      onClick: () => V2(e11),
                      children: [
                        (0, a.jsx)("span", { children: e11.label }),
                        e11.value === Y2 && (0, a.jsx)(j.A, {
                          className: eb().check,
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      ]
                    },
                    e11.value
                  )
                ) : (0, a.jsx)(o.PY1.div, {
                  className: eb().empty,
                  role: "status",
                  initial: !S2 && {
                    opacity: 0,
                    y: 4,
                    filter: `blur(${A.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  transition: {
                    duration: A.T.duration.standard,
                    ease: [...A.T.ease.enter]
                  },
                  children: p2
                })
              })
            })
          })
        })
      ]
    });
  });
  eg.displayName = "Combobox";
  var ej = i(50680), ev = i(64312), ew = i.n(ev);
  let eT = A.T.ease.enter, eN = A.T.ease.standard, ek = {
    hidden: { width: 0, opacity: 0 },
    shown: {
      width: "auto",
      opacity: 1,
      transition: {
        width: A.T.spring.smooth,
        opacity: { duration: A.T.duration.fast, ease: eT }
      }
    },
    gone: {
      width: 0,
      opacity: 0,
      transition: {
        width: A.T.spring.smooth,
        opacity: { duration: A.T.duration.instant, ease: eN }
      }
    }
  }, eS = {
    hidden: { scale: 0.9, filter: `blur(${A.T.blur.soft}px)` },
    shown: {
      scale: 1,
      filter: "blur(0px)",
      transition: {
        ...A.T.spring.snappy,
        filter: { duration: A.T.duration.standard, ease: eT }
      }
    },
    gone: {
      scale: 0.9,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: { duration: A.T.duration.instant, ease: eN }
    }
  }, e$ = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.instant }
    },
    gone: { opacity: 0, transition: { duration: A.T.duration.instant } }
  }, eP = {
    hidden: { opacity: 0 },
    shown: {
      width: "auto",
      opacity: 1,
      transition: { duration: A.T.duration.instant }
    },
    gone: { opacity: 0, transition: { duration: A.T.duration.instant } }
  }, eC = {
    hidden: { scale: 1, filter: "blur(0px)" },
    shown: { scale: 1, filter: "blur(0px)" },
    gone: { scale: 1, filter: "blur(0px)" }
  }, eA = {
    hidden: (e10) => ({
      opacity: 0,
      y: `${0.5 * e10}em`,
      filter: `blur(${A.T.blur.subtle}px)`
    }),
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.standard, ease: eT }
    },
    gone: (e10) => ({
      opacity: 0,
      y: `${-0.5 * e10}em`,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: { duration: A.T.duration.instant, ease: eN }
    })
  };
  function ez({ reduce: e10 }) {
    return (0, a.jsx)("svg", {
      className: ew().check,
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.75",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(o.PY1.path, {
        d: "M4 12.5 9 17.5 20 6.5",
        initial: e10 ? { opacity: 0 } : { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        exit: e10 ? { opacity: 0 } : { pathLength: 0, opacity: 0 },
        transition: e10 ? { duration: A.T.duration.instant } : {
          pathLength: { duration: A.T.duration.standard, ease: eT },
          opacity: { duration: A.T.duration.instant }
        }
      })
    });
  }
  function eD({
    label: e10,
    options: t2,
    value: i2,
    defaultValue: l2 = [],
    onValueChange: d2,
    placeholder: c2 = "Select options",
    description: u2,
    maxVisible: p2 = 2,
    disabled: h2 = false,
    className: m2
  }) {
    let x2 = (0, n.useId)(), f2 = `${x2}-label`, _2 = `${x2}-value`, b2 = (0, n.useRef)(null), [y2, g2] = (0, n.useState)(l2), [j2, v2] = (0, n.useState)(false), [w2, T2] = (0, n.useState)(-1), N2 = i2 ?? y2, k2 = (0, n.useMemo)(() => new Set(N2), [N2]), S2 = (e11) => t2.find((t3) => t3.value === e11)?.label ?? e11, $2 = N2.slice(0, p2).map((e11) => ({ value: e11, label: S2(e11) })), P2 = Math.max(0, N2.length - $2.length), [z2, D2] = (0, n.useState)(j2);
    z2 !== j2 && (D2(j2), j2 || T2(-1));
    let [R2, L2] = (0, n.useState)(P2), [E2, I2] = (0, n.useState)(1);
    R2 !== P2 && (L2(P2), I2(P2 > R2 ? 1 : -1)), (0, n.useEffect)(() => {
      let e11 = (e12) => {
        b2.current?.contains(e12.target) || v2(false);
      };
      return document.addEventListener("pointerdown", e11), () => document.removeEventListener("pointerdown", e11);
    }, []);
    let M2 = (e11) => {
      void 0 === i2 && g2(e11), d2?.(e11);
    }, Y2 = (e11) => {
      h2 || e11.disabled || M2(k2.has(e11.value) ? N2.filter((t3) => t3 !== e11.value) : [...N2, e11.value]);
    }, F2 = t2.map((e11, t3) => e11.disabled ? -1 : t3).filter((e11) => e11 >= 0), O2 = (0, s.I)();
    return (0, a.jsxs)("div", {
      ref: b2,
      className: [ew().field, m2].filter(Boolean).join(" "),
      children: [
        (0, a.jsx)("span", { id: f2, className: ew().label, children: e10 }),
        (0, a.jsxs)("div", {
          className: ew().control,
          children: [
            (0, a.jsxs)("button", {
              type: "button",
              className: `${ew().trigger} ${N2.length ? ew().hasClear : ""}`,
              disabled: h2,
              "aria-labelledby": `${f2} ${_2}`,
              "aria-haspopup": "listbox",
              "aria-expanded": j2,
              "aria-controls": `${x2}-listbox`,
              onClick: () => v2((e11) => !e11),
              onKeyDown: (e11) => {
                if (!h2) {
                  if ("Enter" === e11.key && j2 && w2 >= 0) {
                    e11.preventDefault(), Y2(t2[w2]);
                    return;
                  }
                  if ("Enter" === e11.key || " " === e11.key) {
                    e11.preventDefault(), v2((e12) => !e12);
                    return;
                  }
                  if ("Escape" === e11.key) return void v2(false);
                  if (("ArrowDown" === e11.key || "ArrowUp" === e11.key) && F2.length) {
                    e11.preventDefault(), v2(true);
                    let t3 = F2.indexOf(w2), i3 = t3 < 0 ? "ArrowDown" === e11.key ? 0 : F2.length - 1 : "ArrowDown" === e11.key ? (t3 + 1) % F2.length : (t3 - 1 + F2.length) % F2.length;
                    T2(F2[i3]);
                  }
                }
              },
              children: [
                (0, a.jsx)("span", {
                  id: _2,
                  className: ew().srOnly,
                  children: N2.length ? N2.map(S2).join(", ") : c2
                }),
                (0, a.jsx)("span", {
                  className: ew().value,
                  "aria-hidden": "true",
                  children: (0, a.jsxs)(r.N, {
                    initial: false,
                    children: [
                      $2.map(
                        (e11) => (0, a.jsx)(
                          o.PY1.span,
                          {
                            className: ew().slot,
                            variants: O2 ? eP : ek,
                            initial: "hidden",
                            animate: "shown",
                            exit: "gone",
                            children: (0, a.jsx)(o.PY1.span, {
                              className: ew().chip,
                              variants: O2 ? eC : eS,
                              children: e11.label
                            })
                          },
                          `chip-${e11.value}`
                        )
                      ),
                      P2 > 0 && (0, a.jsx)(
                        o.PY1.span,
                        {
                          className: ew().slot,
                          variants: O2 ? eP : ek,
                          initial: "hidden",
                          animate: "shown",
                          exit: "gone",
                          children: (0, a.jsxs)(o.PY1.span, {
                            className: ew().more,
                            variants: O2 ? eC : eS,
                            children: [
                              "+",
                              (0, a.jsx)("span", {
                                className: ew().count,
                                children: (0, a.jsx)(r.N, {
                                  initial: false,
                                  custom: E2,
                                  children: (0, a.jsx)(
                                    o.PY1.span,
                                    {
                                      custom: E2,
                                      variants: O2 ? e$ : eA,
                                      initial: "hidden",
                                      animate: "shown",
                                      exit: "gone",
                                      children: P2
                                    },
                                    P2
                                  )
                                })
                              })
                            ]
                          })
                        },
                        "more"
                      ),
                      !N2.length && (0, a.jsx)(
                        o.PY1.span,
                        {
                          className: ew().placeholder,
                          variants: e$,
                          initial: "hidden",
                          animate: "shown",
                          exit: "gone",
                          children: c2
                        },
                        "placeholder"
                      )
                    ]
                  })
                }),
                (0, a.jsx)(C.A, {
                  className: ew().chevron,
                  size: 16,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: N2.length > 0 && !h2 && (0, a.jsx)(o.PY1.button, {
                type: "button",
                "aria-label": "Clear selections",
                className: ew().clear,
                onClick: () => {
                  M2([]), v2(false);
                },
                initial: O2 ? { opacity: 0 } : {
                  opacity: 0,
                  scale: 0.6,
                  filter: `blur(${A.T.blur.subtle}px)`
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: O2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast }
                  }
                },
                exit: {
                  opacity: 0,
                  ...O2 ? {} : { scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` },
                  transition: { duration: A.T.duration.instant, ease: eN }
                },
                whileTap: {
                  scale: O2 ? 1 : 0.96,
                  transition: { duration: A.T.duration.instant, ease: eN }
                },
                children: (0, a.jsx)(J.A, {
                  size: 14,
                  "aria-hidden": "true"
                })
              })
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: j2 && (0, a.jsx)(o.PY1.div, {
                id: `${x2}-listbox`,
                className: ew().menu,
                role: "listbox",
                "aria-label": e10,
                "aria-multiselectable": "true",
                initial: O2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: O2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast, ease: eT }
                  }
                },
                exit: {
                  opacity: 0,
                  ...O2 ? {} : { y: -4, scale: 0.98 },
                  transition: { duration: A.T.duration.instant, ease: eN }
                },
                children: t2.map(
                  (e11, t3) => (0, a.jsxs)(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": k2.has(e11.value),
                      "aria-disabled": e11.disabled || void 0,
                      className: ew().option,
                      "data-active": w2 === t3,
                      disabled: e11.disabled,
                      onPointerMove: () => {
                        w2 !== t3 && T2(t3);
                      },
                      onClick: () => Y2(e11),
                      children: [
                        (0, a.jsx)("span", { children: e11.label }),
                        (0, a.jsx)(r.N, {
                          initial: false,
                          children: k2.has(e11.value) && (0, a.jsx)(ez, { reduce: O2 }, "check")
                        })
                      ]
                    },
                    e11.value
                  )
                )
              })
            })
          ]
        }),
        u2 && (0, a.jsx)("span", { className: ew().description, children: u2 })
      ]
    });
  }
  var eR = i(52824), eL = i(93744), eE = i(43298), eI = i(41410), eM = i(79196), eY = i(55809), eF = i(7890), eO = i(85815), eB = i(1910), eW = i(9107), eV = i(41189), eU = i(27502), eH = i(24394), eK = i.n(eH);
  let eq = { duration: A.T.duration.standard, ease: [...A.T.ease.enter] }, eG = { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }, eZ = { duration: 0 }, eQ = { opacity: 0, y: "0.3em", filter: `blur(${A.T.blur.soft}px)` }, eJ = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${A.T.blur.subtle}px)`,
    transition: eG
  }, eX = { opacity: 0, scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` }, e0 = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, e1 = { opacity: 0, transition: { duration: A.T.duration.instant } };
  function e6({ file: e10 }) {
    let t2 = { size: 16, strokeWidth: 1.8, "aria-hidden": true };
    return e10.type.startsWith("image/") ? (0, a.jsx)(eO.A, { ...t2 }) : e10.type.startsWith("text/") ? (0, a.jsx)(d.A, { ...t2 }) : e10.type.includes("zip") || e10.name.endsWith(".gz") ? (0, a.jsx)(eB.A, { ...t2 }) : (0, a.jsx)(eW.A, { ...t2 });
  }
  function e5(e10) {
    if (e10 < 1024) return `${e10} B`;
    if (e10 < 1048576) return `${Math.round(e10 / 1024)} KB`;
    let t2 = e10 / 1048576;
    return `${t2 >= 10 ? Math.round(t2) : Number(t2.toFixed(1))} MB`;
  }
  function e2(e10) {
    let t2 = (0, eM.tF)();
    return (0, a.jsx)(o.PY1.span, {
      ...e10,
      "aria-hidden": !t2 || e10["aria-hidden"]
    });
  }
  function e4({
    item: e10,
    upload: t2,
    reduce: i2,
    onRemove: s2,
    onRetry: l2,
    removeRef: d2
  }) {
    let c2 = t2?.status, [u2, p2] = (0, n.useState)("uploading" !== c2), [h2, m2] = (0, n.useState)(c2);
    h2 !== c2 && (m2(c2), "uploading" === c2 && p2(false));
    let x2 = "done" !== c2 || u2 || i2 ? c2 : "uploading", f2 = e10.error ? "invalid" : x2 ?? "ready", _2 = (0, $.d)(t2?.progress ?? 0), b2 = (0, eY.G)(_2, (e11) => `${Math.min(Math.max(e11, 0), 100) - 100}%`), y2 = (0, eY.G)(_2, (e11) => `${Math.round(Math.min(Math.max(e11, 0), 100))}%`), g2 = "done" === c2 ? 100 : t2?.progress ?? 0;
    return (0, n.useEffect)(() => {
      if (i2 || "uploading" === c2 && 0 === g2) return void _2.jump(g2);
      let e11 = (0, P.i)(_2, g2, {
        ...A.T.spring.smooth,
        onComplete: "done" === c2 ? () => p2(true) : void 0
      });
      return () => e11.stop();
    }, [c2, g2, _2, i2]), (0, eF.L)(_2, "change", (e11) => {
      "done" === c2 && e11 >= 99.5 && p2(true);
    }), (0, a.jsxs)("div", {
      className: eK().fileItem,
      children: [
        (0, a.jsx)("span", {
          className: eK().fileIcon,
          children: (0, a.jsx)(e6, { file: e10.file })
        }),
        (0, a.jsxs)("span", {
          className: eK().fileCopy,
          children: [
            (0, a.jsx)("strong", {
              title: e10.file.name,
              children: e10.file.name
            }),
            (0, a.jsxs)("span", {
              className: eK().meta,
              children: [
                e5(e10.file.size),
                x2 ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: eK().dot,
                      "aria-hidden": "true",
                      children: "\xB7"
                    }),
                    (0, a.jsx)("span", {
                      className: eK().phase,
                      children: (0, a.jsx)(r.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, a.jsx)(
                          e2,
                          {
                            className: "failed" === x2 ? `${eK().phaseText} ${eK().error}` : eK().phaseText,
                            ...{
                              initial: i2 ? { opacity: 0 } : eQ,
                              animate: e0,
                              exit: i2 ? e1 : eJ,
                              transition: i2 ? eZ : eq
                            },
                            children: "uploading" === x2 ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                "Uploading ",
                                (0, a.jsx)(o.PY1.span, {
                                  className: eK().percent,
                                  children: y2
                                })
                              ]
                            }) : "done" === x2 ? "Uploaded" : "Upload failed"
                          },
                          x2
                        )
                      })
                    })
                  ]
                }) : null
              ]
            }),
            e10.error && (0, a.jsx)("span", {
              className: eK().error,
              children: e10.error
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: "uploading" === x2 && (0, a.jsx)(
                o.PY1.span,
                {
                  className: eK().barFrame,
                  initial: i2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: i2 ? e1 : {
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { ...A.T.spring.smooth, delay: 0.24 },
                      opacity: { ...eG, delay: 0.24 }
                    }
                  },
                  transition: i2 ? eZ : { height: A.T.spring.smooth, opacity: eq },
                  children: (0, a.jsx)("span", {
                    className: eK().bar,
                    children: (0, a.jsx)(o.PY1.span, {
                      className: eK().barFill,
                      style: { x: b2 }
                    })
                  })
                },
                "bar"
              )
            })
          ]
        }),
        (0, a.jsx)("span", {
          className: eK().statusSlot,
          children: (0, a.jsxs)(r.N, {
            mode: "popLayout",
            initial: false,
            children: [
              ("ready" === f2 || "done" === f2) && (0, a.jsxs)(
                o.PY1.span,
                {
                  className: eK().ready,
                  initial: i2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: e1,
                  transition: i2 ? eZ : A.T.spring.snappy,
                  children: [
                    (0, a.jsx)("svg", {
                      width: 14,
                      height: 14,
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      children: (0, a.jsx)(o.PY1.path, {
                        d: "M4 12.5l5 5L20 6.5",
                        initial: !i2 && { pathLength: 0 },
                        animate: { pathLength: 1 },
                        transition: { ...eq, delay: 0.08 }
                      })
                    }),
                    (0, a.jsx)("span", {
                      className: eK().srOnly,
                      children: "done" === f2 ? "Uploaded" : "Ready"
                    })
                  ]
                },
                "ready"
              ),
              "failed" === f2 && (0, a.jsx)(
                o.PY1.span,
                {
                  className: eK().retrySlot,
                  initial: i2 ? { opacity: 0 } : eX,
                  animate: e0,
                  exit: i2 ? e1 : { ...eX, transition: eG },
                  transition: i2 ? eZ : A.T.spring.snappy,
                  children: (0, a.jsx)("button", {
                    type: "button",
                    className: eK().retry,
                    "aria-label": `Retry ${e10.file.name}`,
                    onClick: l2,
                    children: (0, a.jsx)(eV.A, {
                      size: 14,
                      strokeWidth: 1.8,
                      "aria-hidden": "true"
                    })
                  })
                },
                "retry"
              )
            ]
          })
        }),
        (0, a.jsx)("button", {
          ref: d2,
          type: "button",
          className: eK().remove,
          "aria-label": `Remove ${e10.file.name}`,
          onClick: s2,
          children: (0, a.jsx)(J.A, { size: 15, "aria-hidden": "true" })
        })
      ]
    });
  }
  function e7({
    accept: e10,
    disabled: t2 = false,
    label: i2 = "Upload files",
    description: l2 = "Drop files here or browse from your device.",
    multiple: d2 = true,
    maxSize: c2,
    value: u2,
    onChange: p2,
    onUpload: h2
  }) {
    let m2 = (0, n.useId)(), x2 = (0, s.I)(), f2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), [b2, y2] = (0, n.useState)([]), [g2, j2] = (0, n.useState)(false), [v2, w2] = (0, n.useState)(""), [T2, N2] = (0, n.useState)({}), k2 = (0, n.useRef)(0), S2 = (0, n.useRef)(0), $2 = (0, n.useRef)(/* @__PURE__ */ new Map()), P2 = (0, n.useRef)(/* @__PURE__ */ new Map()), C2 = u2 ?? b2;
    function z2(e11) {
      void 0 === u2 && y2(e11), p2?.(e11);
    }
    function D2(e11) {
      if (!h2) return;
      $2.current.get(e11.id)?.abort();
      let t3 = new AbortController();
      $2.current.set(e11.id, t3);
      let i3 = (t4) => N2((i4) => ({ ...i4, [e11.id]: t4(i4[e11.id]) }));
      i3(() => ({ status: "uploading", progress: 0 })), h2(e11.file, {
        signal: t3.signal,
        onProgress: (e12) => {
          t3.signal.aborted || i3((t4) => ({
            status: "uploading",
            progress: Math.min(Math.max(e12, t4?.progress ?? 0), 100)
          }));
        }
      }).then(
        () => {
          t3.signal.aborted || (i3(() => ({ status: "done", progress: 100 })), w2(`${e11.file.name} uploaded.`));
        },
        () => {
          t3.signal.aborted || (i3((e12) => ({ status: "failed", progress: e12?.progress ?? 0 })), w2(`${e11.file.name} could not be uploaded.`));
        }
      ).finally(() => {
        $2.current.get(e11.id) === t3 && $2.current.delete(e11.id);
      });
    }
    function R2(t3) {
      let i3 = Array.from(t3).slice(0, d2 ? void 0 : 1), a2 = e10?.split(",").map((e11) => e11.trim().toLowerCase()).filter(Boolean) ?? [], n2 = i3.map((e11) => ({
        id: `${e11.name}-${e11.lastModified}-${S2.current++}`,
        file: e11,
        error: 0 === a2.length || a2.some(
          (t4) => t4.startsWith(".") ? e11.name.toLowerCase().endsWith(t4) : t4.endsWith("/*") ? e11.type.startsWith(t4.slice(0, -1)) : e11.type === t4
        ) ? c2 && e11.size > c2 ? `File is larger than ${e5(c2)}.` : void 0 : "This file type is not accepted."
      }));
      d2 || $2.current.forEach((e11) => e11.abort()), z2(d2 ? [...C2, ...n2] : n2);
      let s2 = n2.filter((e11) => e11.error).length, r2 = n2.length - s2, o2 = `${r2} file${1 === r2 ? "" : "s"} added.`, l3 = `${s2} file${1 === s2 ? " needs" : "s need"} attention.`;
      w2(s2 ? r2 ? `${o2} ${l3}` : l3 : o2), n2.filter((e11) => !e11.error).forEach(D2);
    }
    (0, n.useEffect)(() => {
      let e11 = $2.current;
      return () => e11.forEach((e12) => e12.abort());
    }, []);
    let L2 = x2 ? eZ : { height: A.T.spring.smooth, opacity: eq };
    return (0, a.jsxs)("div", {
      className: eK().root,
      children: [
        (0, a.jsx)("input", {
          ref: f2,
          id: m2,
          className: eK().input,
          type: "file",
          accept: e10,
          multiple: d2,
          disabled: t2,
          tabIndex: -1,
          "aria-hidden": "true",
          onChange: function(e11) {
            e11.target.files && R2(e11.target.files), e11.target.value = "";
          }
        }),
        (0, a.jsxs)("div", {
          ref: _2,
          className: [
            eK().dropzone,
            g2 ? eK().dragging : "",
            t2 ? eK().disabled : ""
          ].filter(Boolean).join(" "),
          role: "button",
          tabIndex: t2 ? -1 : 0,
          "aria-disabled": t2,
          "aria-describedby": `${m2}-description`,
          onClick: () => !t2 && f2.current?.click(),
          onKeyDown: function(e11) {
            t2 || ("Enter" === e11.key || " " === e11.key) && (e11.preventDefault(), f2.current?.click());
          },
          onDragEnter: function(e11) {
            e11.preventDefault(), t2 || (k2.current += 1, j2(true));
          },
          onDragOver: (e11) => e11.preventDefault(),
          onDragLeave: function(e11) {
            e11.preventDefault(), k2.current = Math.max(0, k2.current - 1), 0 === k2.current && j2(false);
          },
          onDrop: function(e11) {
            e11.preventDefault(), k2.current = 0, j2(false), !t2 && e11.dataTransfer.files.length && R2(e11.dataTransfer.files);
          },
          children: [
            (0, a.jsx)("span", {
              className: eK().uploadIcon,
              children: (0, a.jsx)(eU.A, {
                size: 20,
                strokeWidth: 1.8,
                "aria-hidden": "true"
              })
            }),
            (0, a.jsxs)("span", {
              className: eK().copy,
              children: [
                (0, a.jsx)("strong", {
                  className: eK().label,
                  children: (0, a.jsx)(r.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, a.jsx)(
                      e2,
                      {
                        className: eK().labelText,
                        initial: x2 ? { opacity: 0 } : eQ,
                        animate: e0,
                        exit: x2 ? e1 : eJ,
                        transition: x2 ? eZ : eq,
                        children: g2 ? `Drop to add ${d2 ? "files" : "a file"}` : i2
                      },
                      g2 ? "drop" : "idle"
                    )
                  })
                }),
                (0, a.jsx)("span", { id: `${m2}-description`, children: l2 })
              ]
            }),
            (0, a.jsx)("span", { className: eK().browse, children: "Browse" })
          ]
        }),
        (0, a.jsx)(o.PY1.div, {
          className: eK().statusFrame,
          initial: false,
          animate: { height: v2 ? "auto" : 0 },
          transition: L2,
          children: (0, a.jsx)("p", {
            className: eK().status,
            "aria-live": "polite",
            "aria-atomic": "true",
            children: (0, a.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              children: v2 ? (0, a.jsx)(
                e2,
                {
                  className: eK().statusText,
                  initial: x2 ? { opacity: 0 } : eQ,
                  animate: e0,
                  exit: x2 ? e1 : eJ,
                  transition: x2 ? eZ : eq,
                  children: v2
                },
                v2
              ) : null
            })
          })
        }),
        (0, a.jsx)(o.PY1.ul, {
          className: eK().fileList,
          "aria-label": "Selected files",
          "aria-hidden": 0 === C2.length || void 0,
          initial: false,
          animate: { paddingTop: 6 * !!C2.length },
          transition: x2 ? eZ : A.T.spring.smooth,
          children: (0, a.jsx)(r.N, {
            initial: false,
            children: C2.map(
              (e11) => (0, a.jsx)(
                o.PY1.li,
                {
                  className: eK().fileRow,
                  initial: x2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: x2 ? e1 : {
                    height: 0,
                    opacity: 0,
                    transition: { height: A.T.spring.smooth, opacity: eG }
                  },
                  transition: L2,
                  children: (0, a.jsx)(e4, {
                    item: e11,
                    upload: T2[e11.id],
                    reduce: x2,
                    onRemove: () => {
                      let t3, i3;
                      return $2.current.get(e11.id)?.abort(), $2.current.delete(e11.id), t3 = C2.findIndex((t4) => t4.id === e11.id), i3 = C2[t3 + 1] ?? C2[t3 - 1], void (z2(C2.filter((t4) => t4.id !== e11.id)), w2(`${e11.file.name} removed.`), requestAnimationFrame(
                        () => (i3 ? P2.current.get(i3.id) : _2.current)?.focus()
                      ));
                    },
                    onRetry: () => D2(e11),
                    removeRef: (t3) => {
                      t3 ? P2.current.set(e11.id, t3) : P2.current.delete(e11.id);
                    }
                  })
                },
                e11.id
              )
            )
          })
        })
      ]
    });
  }
  var e8 = i(95114), e9 = i(67752), e3 = i(78766), te = i(61078), tt = i(66558), ti = i(65332), ta = i(24558), tn = i(59103), ts = i(63386), tr = i.n(ts);
  let to = (e10) => String(e10).padStart(2, "0"), tl = (e10) => {
    let [t2 = NaN, i2 = NaN] = e10.split(":").map(Number);
    return Number.isFinite(t2) && Number.isFinite(i2) ? 60 * t2 + i2 : 0;
  }, td = A.T.ease.enter, tc = A.T.ease.standard, tu = {
    enter: (e10) => ({
      opacity: 0,
      y: `${0.35 * e10}em`,
      filter: `blur(${A.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.standard, ease: td }
    },
    exit: (e10) => ({
      opacity: 0,
      y: `${-0.3 * e10}em`,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: { duration: A.T.duration.fast, ease: tc }
    })
  }, tp = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: A.T.duration.instant } }
  };
  function th({
    label: e10,
    value: t2,
    defaultValue: i2 = "09:00",
    onChange: l2,
    description: d2,
    placeholder: c2 = "Select a time",
    minuteStep: u2 = 15,
    format: p2 = "12h",
    disabled: h2 = false,
    className: m2
  }) {
    let x2 = (0, n.useId)(), f2 = `${x2}-label`, _2 = `${x2}-value`, b2 = (0, n.useRef)(null), y2 = (0, n.useRef)([]), g2 = (0, n.useRef)(false), [j2, v2] = (0, n.useState)(i2), [w2, T2] = (0, n.useState)(false), [N2, k2] = (0, n.useState)(-1), S2 = t2 ?? j2, $2 = (0, s.I)(), [P2, z2] = (0, n.useState)(S2), [D2, R2] = (0, n.useState)(1);
    P2 !== S2 && (z2(S2), R2(tl(S2) >= tl(P2) ? 1 : -1));
    let L2 = Array.from({ length: Math.ceil(1440 / u2) }, (e11, t3) => {
      let i3 = t3 * u2, a2 = Math.floor(i3 / 60);
      return `${to(a2)}:${to(i3 % 60)}`;
    }), E2 = (e11) => {
      let t3 = tl(e11), i3 = Math.floor(t3 / 60), a2 = t3 % 60;
      return "24h" === p2 ? `${to(i3)}:${to(a2)}` : `${i3 % 12 || 12}:${to(a2)} ${i3 < 12 ? "AM" : "PM"}`;
    };
    (0, n.useEffect)(() => {
      let e11 = (e12) => {
        b2.current?.contains(e12.target) || T2(false);
      };
      return document.addEventListener("pointerdown", e11), () => document.removeEventListener("pointerdown", e11);
    }, []), (0, n.useLayoutEffect)(() => {
      if (!w2 || N2 < 0) return;
      let e11 = y2.current[N2], t3 = e11?.parentElement;
      if (!e11 || !t3) return;
      let i3 = e11.offsetTop, a2 = i3 + e11.offsetHeight;
      g2.current ? (g2.current = false, t3.scrollTop = i3 - (t3.clientHeight - e11.offsetHeight) / 2) : i3 < t3.scrollTop ? t3.scrollTop = i3 : a2 > t3.scrollTop + t3.clientHeight && (t3.scrollTop = a2 - t3.clientHeight);
    }, [N2, w2]);
    let I2 = (e11) => {
      void 0 === t2 && v2(e11), l2?.(e11), T2(false);
    }, M2 = () => {
      let e11 = L2.indexOf(S2);
      k2(e11 >= 0 ? e11 : 0), g2.current = true, T2(true);
    };
    return (0, a.jsxs)("div", {
      ref: b2,
      className: [tr().field, m2].filter(Boolean).join(" "),
      children: [
        (0, a.jsx)("span", { id: f2, className: tr().label, children: e10 }),
        (0, a.jsxs)("div", {
          className: tr().anchor,
          children: [
            (0, a.jsxs)("button", {
              type: "button",
              className: tr().trigger,
              disabled: h2,
              "aria-labelledby": `${f2} ${_2}`,
              "aria-haspopup": "listbox",
              "aria-expanded": w2,
              "aria-controls": `${x2}-listbox`,
              onClick: () => w2 ? T2(false) : M2(),
              onKeyDown: (e11) => {
                if ("Escape" === e11.key) {
                  e11.preventDefault(), T2(false);
                  return;
                }
                if ("Enter" === e11.key || " " === e11.key) {
                  e11.preventDefault(), w2 && N2 >= 0 ? I2(L2[N2]) : M2();
                  return;
                }
                if ("ArrowDown" === e11.key || "ArrowUp" === e11.key) {
                  if (e11.preventDefault(), !w2) return void M2();
                  k2(
                    (t3) => (t3 + ("ArrowDown" === e11.key ? 1 : -1) + L2.length) % L2.length
                  );
                }
              },
              children: [
                (0, a.jsx)(tn.A, { size: 16, "aria-hidden": "true" }),
                (0, a.jsx)("span", {
                  id: _2,
                  className: tr().srOnly,
                  children: S2 ? E2(S2) : c2
                }),
                (0, a.jsx)("span", {
                  className: tr().valueText,
                  "aria-hidden": "true",
                  children: (0, a.jsx)(r.N, {
                    initial: false,
                    custom: D2,
                    children: (0, a.jsx)(
                      o.PY1.span,
                      {
                        className: S2 ? tr().value : tr().placeholder,
                        custom: D2,
                        variants: $2 ? tp : tu,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: S2 ? E2(S2) : c2
                      },
                      S2 || "placeholder"
                    )
                  })
                }),
                (0, a.jsx)(C.A, {
                  className: tr().chevron,
                  size: 16,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: w2 && (0, a.jsx)(o.PY1.div, {
                id: `${x2}-listbox`,
                className: tr().menu,
                role: "listbox",
                "aria-label": `${e10} options`,
                initial: $2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: $2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast, ease: td }
                  }
                },
                exit: {
                  opacity: 0,
                  ...$2 ? {} : { y: -4, scale: 0.98 },
                  transition: { duration: A.T.duration.instant, ease: tc }
                },
                children: L2.map(
                  (e11, t3) => (0, a.jsxs)(
                    "button",
                    {
                      ref: (e12) => {
                        y2.current[t3] = e12;
                      },
                      id: `${x2}-option-${t3}`,
                      type: "button",
                      role: "option",
                      "aria-selected": e11 === S2,
                      "data-active": N2 === t3 || void 0,
                      className: tr().option,
                      onPointerMove: () => {
                        N2 !== t3 && k2(t3);
                      },
                      onClick: () => I2(e11),
                      children: [
                        E2(e11),
                        e11 === S2 && (0, a.jsx)("span", {
                          className: tr().dot,
                          "aria-hidden": "true"
                        })
                      ]
                    },
                    e11
                  )
                )
              })
            })
          ]
        }),
        d2 && (0, a.jsx)("span", { className: tr().description, children: d2 })
      ]
    });
  }
  var tm = i(44818), tx = i(67834), tf = i.n(tx);
  let t_ = [
    { value: "design", label: "Design" },
    { value: "engineering", label: "Engineering" },
    { value: "research", label: "Research" }
  ], tb = [
    { value: "emma", label: "Emma Collins", keywords: ["design", "owner"] },
    { value: "marcus", label: "Marcus Johnson", keywords: ["engineering"] },
    { value: "ava", label: "Ava Mitchell", keywords: ["research"] }
  ], ty = [
    { value: "motion", label: "Motion" },
    { value: "accessibility", label: "Accessibility" },
    { value: "content", label: "Content" },
    { value: "research", label: "Research" }
  ], tg = [
    {
      id: "hero-shot",
      name: "lounge-chair-hero.jpg",
      size: 18874368e-1,
      status: "uploaded",
      preview: (0, e9.jW)("lounge-chair").src
    },
    {
      id: "brand-guidelines",
      name: "brand-guidelines.pdf",
      size: 25165824e-1,
      status: "uploaded"
    },
    {
      id: "launch-video",
      name: "launch-video.mov",
      size: 90177536e-1,
      status: "failed",
      error: "Connection lost"
    }
  ], tj = (e10, { onProgress: t2, signal: i2 }) => new Promise((a2, n2) => {
    let s2 = 0, r2 = 0, o2 = Math.min(1.5, Math.max(0.9, 2621440 / Math.max(e10.size, 1))), l2 = () => {
      window.clearTimeout(r2), n2(new DOMException("Upload cancelled", "AbortError"));
    }, d2 = () => {
      if (t2(s2 = Math.min(100, s2 + (5 + 17 * Math.random()) * o2)), s2 >= 100) {
        i2.removeEventListener("abort", l2), a2();
        return;
      }
      r2 = window.setTimeout(
        d2,
        130 + 220 * Math.random() + 380 * (0.15 > Math.random())
      );
    };
    i2.addEventListener("abort", l2, { once: true }), r2 = window.setTimeout(d2, 220);
  }), tv = [
    {
      id: "new-project",
      label: "New project",
      description: "Start from a blank setup",
      group: "Create",
      icon: (0, a.jsx)(l.A, { size: 16 }),
      shortcut: "N",
      keywords: ["create", "add"]
    },
    {
      id: "new-document",
      label: "New document",
      description: "Write a brief or a spec",
      group: "Create",
      icon: (0, a.jsx)(d.A, { size: 16 }),
      shortcut: "\u21E7 N",
      keywords: ["create", "page"]
    },
    {
      id: "invite",
      label: "Invite teammate",
      description: "Send an invite by email",
      group: "Create",
      icon: (0, a.jsx)(c.A, { size: 16 }),
      keywords: ["new member", "add people"]
    },
    {
      id: "edit",
      label: "Edit project",
      description: "Update the project details",
      group: "Project",
      icon: (0, a.jsx)(u.A, { size: 16 }),
      shortcut: "E",
      keywords: ["rename"]
    },
    {
      id: "duplicate",
      label: "Duplicate project",
      description: "Create a copy with the same setup",
      group: "Project",
      icon: (0, a.jsx)(p.A, { size: 16 }),
      shortcut: "D"
    },
    {
      id: "share",
      label: "Share project",
      description: "Invite someone to collaborate",
      group: "Project",
      icon: (0, a.jsx)(h.A, { size: 16 }),
      shortcut: "S",
      keywords: ["collaborate"]
    },
    {
      id: "share-link",
      label: "Copy share link",
      description: "Anyone with the link can view",
      group: "Project",
      icon: (0, a.jsx)(m.A, { size: 16 }),
      shortcut: "\u21E7 C",
      keywords: ["url"]
    },
    {
      id: "download",
      label: "Download brief",
      description: "Save the project brief as a PDF",
      group: "Project",
      icon: (0, a.jsx)(x.A, { size: 16 }),
      keywords: ["export", "pdf"]
    },
    {
      id: "theme",
      label: "Toggle theme",
      description: "Switch between light and dark",
      group: "Preferences",
      icon: (0, a.jsx)(f.A, { size: 16 }),
      shortcut: "T",
      keywords: ["dark mode", "light mode", "appearance"]
    },
    {
      id: "accent",
      label: "Change accent color",
      description: "Pick the color for buttons and links",
      group: "Preferences",
      icon: (0, a.jsx)(_.A, { size: 16 }),
      keywords: ["theme", "appearance"]
    },
    {
      id: "archive",
      label: "Archive project",
      description: "Move this project out of the workspace",
      group: "Project",
      icon: (0, a.jsx)(b.A, { size: 16 })
    }
  ];
  function tw({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(false), l2 = (0, s.I)() ?? false;
    return (0, a.jsx)("div", {
      className: tf().commandPreview,
      onKeyDown: (e11) => {
        "Escape" !== e11.key || e11.defaultPrevented || i2(false);
      },
      children: (0, a.jsx)(r.N, {
        initial: false,
        mode: "wait",
        children: t2 ? (0, a.jsx)(
          o.PY1.div,
          {
            className: tf().commandPaletteSurface,
            initial: false,
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: l2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: 4,
              scale: 0.985,
              transition: {
                duration: A.T.duration.exit,
                ease: [...A.T.ease.exit]
              }
            },
            children: (0, a.jsx)(K.x, {
              autoFocus: true,
              label: "Project commands",
              placeholder: "Search project commands",
              items: tv,
              onSelect: (t3) => {
                e10(`${t3.label} selected`), i2(false);
              },
              onClose: () => i2(false)
            })
          },
          "palette"
        ) : (0, a.jsx)(
          o.PY1.div,
          {
            initial: !l2 && { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            exit: l2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              scale: 0.97,
              transition: {
                duration: A.T.duration.instant,
                ease: [...A.T.ease.exit]
              }
            },
            transition: l2 ? { duration: 0 } : {
              default: A.T.spring.snappy,
              opacity: {
                duration: A.T.duration.fast,
                ease: [...A.T.ease.enter]
              }
            },
            children: (0, a.jsx)(T.$, {
              variant: "secondary",
              onClick: () => i2(true),
              children: "Open command palette"
            })
          },
          "trigger"
        )
      })
    });
  }
  function tT({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)("idle");
    return (0, a.jsxs)("div", {
      className: tf().buttonExamples,
      children: [
        (0, a.jsxs)("div", {
          className: tf().buttonExample,
          children: [
            (0, a.jsx)("span", {
              className: tf().buttonExampleLabel,
              children: "Styles"
            }),
            (0, a.jsxs)("div", {
              className: tf().buttonExampleRow,
              children: [
                (0, a.jsx)(T.$, {
                  onClick: () => e10("Changes saved"),
                  children: "Save changes"
                }),
                (0, a.jsx)(T.$, {
                  variant: "secondary",
                  onClick: () => e10("Draft saved"),
                  children: "Secondary"
                }),
                (0, a.jsx)(T.$, {
                  variant: "ghost",
                  onClick: () => e10("Preview opened"),
                  children: "Ghost"
                }),
                (0, a.jsx)(T.$, {
                  variant: "danger",
                  onClick: () => e10("Delete requested"),
                  children: "Delete"
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().buttonExample,
          children: [
            (0, a.jsx)("span", {
              className: tf().buttonExampleLabel,
              children: "Icons and sizes"
            }),
            (0, a.jsxs)("div", {
              className: tf().buttonExampleRow,
              children: [
                (0, a.jsxs)(T.$, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => e10("Item added"),
                  children: [
                    (0, a.jsx)(l.A, { size: 16, "aria-hidden": "true" }),
                    " Add item"
                  ]
                }),
                (0, a.jsxs)(T.$, {
                  onClick: () => e10("Continuing"),
                  children: [
                    "Continue ",
                    (0, a.jsx)(y.A, { size: 16, "aria-hidden": "true" })
                  ]
                }),
                (0, a.jsx)(T.$, {
                  size: "sm",
                  variant: "ghost",
                  "aria-label": "More options",
                  title: "More options",
                  className: tf().iconButton,
                  onClick: () => e10("More options opened"),
                  children: (0, a.jsx)(g.A, {
                    size: 18,
                    "aria-hidden": "true"
                  })
                }),
                (0, a.jsx)(T.$, {
                  size: "lg",
                  variant: "secondary",
                  onClick: () => e10("Large button selected"),
                  children: "Large"
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().buttonExample,
          children: [
            (0, a.jsx)("span", {
              className: tf().buttonExampleLabel,
              children: "Feedback and states"
            }),
            (0, a.jsxs)("div", {
              className: tf().buttonExampleRow,
              children: [
                (0, a.jsx)(q.CopyButton, {
                  value: "https://example.com/components/button",
                  label: "Copy link"
                }),
                (0, a.jsx)(q.CopyButton, {
                  value: "https://example.com/components/button",
                  label: "Copy link",
                  iconOnly: true
                }),
                (0, a.jsx)(T.$, {
                  size: "sm",
                  variant: "secondary",
                  loading: "loading" === t2,
                  onClick: function() {
                    "idle" === t2 && (i2("loading"), window.setTimeout(() => {
                      i2("done"), e10("Upload complete"), window.setTimeout(() => i2("idle"), 1800);
                    }, 1200));
                  },
                  children: "done" === t2 ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(j.A, {
                        size: 16,
                        "aria-hidden": "true"
                      }),
                      " Uploaded"
                    ]
                  }) : "Upload file"
                }),
                (0, a.jsx)(T.$, {
                  size: "sm",
                  variant: "secondary",
                  disabled: true,
                  children: "Disabled"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let tN = [
    {
      id: "follow",
      label: "Follow",
      icon: (0, a.jsx)(c.A, { size: 16 }),
      tone: "neutral"
    },
    {
      id: "following",
      label: "Following",
      icon: (0, a.jsx)(j.A, { size: 16 }),
      tone: "quiet"
    }
  ], tk = [
    {
      id: "add",
      label: "Add to library",
      icon: (0, a.jsx)(l.A, { size: 16 }),
      tone: "quiet"
    },
    {
      id: "added",
      label: "Added",
      icon: (0, a.jsx)(j.A, { size: 16 }),
      tone: "success"
    }
  ], tS = [
    {
      id: "send",
      label: "Send invite",
      icon: (0, a.jsx)(v.A, { size: 16 }),
      tone: "accent"
    },
    {
      id: "sent",
      label: "Sent",
      icon: (0, a.jsx)(j.A, { size: 16 }),
      tone: "success",
      pendingLabel: "Sending",
      holdFor: 2200
    }
  ];
  function t$({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(false), s2 = (i3, a2) => new Promise(
      (n2, s3) => window.setTimeout(() => {
        if (!t2) return n2();
        e10(a2), s3(Error("offline"));
      }, i3)
    );
    return (0, a.jsxs)("div", {
      className: tf().swapDemo,
      children: [
        (0, a.jsxs)("div", {
          className: tf().swapDemoRow,
          children: [
            (0, a.jsxs)("span", {
              className: tf().swapDemoText,
              children: [
                (0, a.jsx)("strong", { children: "Emma Collins" }),
                (0, a.jsx)("span", { children: "Design lead at Arc" })
              ]
            }),
            (0, a.jsx)(N.m, {
              size: "sm",
              states: tN,
              onValueChange: (t3) => e10(
                "following" === t3 ? "You\u2019re following Emma Collins" : "You unfollowed Emma Collins"
              )
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().swapDemoRow,
          children: [
            (0, a.jsxs)("span", {
              className: tf().swapDemoText,
              children: [
                (0, a.jsx)("strong", { children: "Designing calm interfaces" }),
                (0, a.jsx)("span", { children: "Article \xB7 8 min read" })
              ]
            }),
            (0, a.jsx)(N.m, {
              size: "sm",
              states: tk,
              onAction: (e11) => "added" === e11.id ? s2(1100, "Couldn\u2019t save the article. Try again") : void 0,
              onValueChange: (t3) => e10(
                "added" === t3 ? "Saved to your library" : "Removed from your library"
              )
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().swapDemoRow,
          children: [
            (0, a.jsxs)("span", {
              className: tf().swapDemoText,
              children: [
                (0, a.jsx)("strong", { children: "Ava Mitchell" }),
                (0, a.jsx)("span", { children: "ava@example.com" })
              ]
            }),
            (0, a.jsx)(N.m, {
              size: "sm",
              states: tS,
              onAction: (e11) => "sent" === e11.id ? s2(1300, "Couldn\u2019t send the invite. Try again") : void 0,
              onValueChange: (t3) => {
                "sent" === t3 && e10("Invite sent to Ava Mitchell");
              }
            })
          ]
        }),
        (0, a.jsx)(ej.d, {
          className: tf().swapDemoSwitch,
          checked: t2,
          onCheckedChange: (t3) => {
            i2(t3), e10(
              t3 ? "Connection lost: the next request will fail" : "Connection restored"
            );
          },
          label: "Simulate a lost connection"
        })
      ]
    });
  }
  function tP() {
    let [e10, t2] = (0, n.useState)("Arc launch"), i2 = 0 === e10.trim().length;
    return (0, a.jsx)(eh.p, {
      label: "Project name",
      value: e10,
      onChange: (e11) => t2(e11.target.value),
      description: i2 ? void 0 : "Use a short, descriptive name.",
      error: i2 ? "Enter a project name." : void 0
    });
  }
  function tC({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(null), s2 = (t3, a2, n2) => {
      let s3 = performance.now();
      i2({ at: s3, label: t3, icon: a2 }), e10(n2), window.setTimeout(() => i2((e11) => e11?.at === s3 ? null : e11), 2200);
    };
    return (0, a.jsx)("div", {
      className: tf().actionSolo,
      children: (0, a.jsx)(V, {
        label: t2?.label ?? "Publish",
        icon: t2?.icon ?? (0, a.jsx)(v.A, { size: 15 }),
        onClick: () => s2("Published", (0, a.jsx)(j.A, { size: 15 }), "Published"),
        actions: [
          {
            label: "Publish and notify",
            icon: (0, a.jsx)(v.A, { size: 15 }),
            onSelect: () => s2(
              "Published",
              (0, a.jsx)(j.A, { size: 15 }),
              "Published and notified the team"
            )
          },
          {
            label: "Save as draft",
            icon: (0, a.jsx)(d.A, { size: 15 }),
            onSelect: () => s2("Draft saved", (0, a.jsx)(d.A, { size: 15 }), "Draft saved")
          },
          {
            label: "Delete draft",
            icon: (0, a.jsx)(w.A, { size: 15 }),
            destructive: true,
            onSelect: () => s2(
              "Draft deleted",
              (0, a.jsx)(w.A, { size: 15 }),
              "Draft deleted"
            )
          }
        ]
      })
    });
  }
  function tA({ id: e10 }) {
    let t2, { copy: i2 } = (0, G.q)(), [s2, r2] = (0, n.useState)(""), [o2, l2] = (0, n.useState)(["motion"]), [d2, c2] = (0, n.useState)(true), [h2, m2] = (0, n.useState)(true), [f2, _2] = (0, n.useState)(8), [y2, j2] = (0, n.useState)(1), [v2, N2] = (0, n.useState)(""), [S2, $2] = (0, n.useState)(["release", "web"]), [P2, C2] = (0, n.useState)("482"), [A2, z2] = (0, n.useState)("emma"), [D2, R2] = (0, n.useState)("design"), [L2, E2] = (0, n.useState)("Review"), I2 = (0, ti.nl)(), [M2, Y2] = (0, n.useState)(), F2 = void 0 === M2 ? I2 && ((0, ti.fi)(I2, 3).getMonth() === I2.getMonth() ? (0, ti.fi)(I2, 3) : I2) : M2 ?? void 0, O2 = (e11) => e11.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    }), [B2, W2] = (0, n.useState)("09:30"), [V2, K2] = (0, n.useState)("focused"), J2 = (e11) => r2(e11), X2 = [
      {
        label: "Edit project",
        icon: (0, a.jsx)(u.A, { size: 15 }),
        onSelect: () => J2("Edit opened")
      },
      {
        label: "Download brief",
        icon: (0, a.jsx)(x.A, { size: 15 }),
        onSelect: () => J2("Brief queued")
      },
      {
        label: "Archive",
        icon: (0, a.jsx)(b.A, { size: 15 }),
        onSelect: () => J2("Project archived"),
        separatorBefore: true
      }
    ];
    switch (e10) {
      case "button":
        t2 = (0, a.jsx)(tT, { announce: J2 });
        break;
      case "action-swap":
        t2 = (0, a.jsx)(t$, { announce: J2 });
        break;
      case "action-button":
        t2 = (0, a.jsx)("div", {
          className: tf().actionSolo,
          children: (0, a.jsx)(k.r, {
            label: "Save changes",
            successLabel: "Saved",
            onAction: () => new Promise((e11) => window.setTimeout(e11, 420))
          })
        });
        break;
      case "split-button":
        t2 = (0, a.jsx)(tC, { announce: J2 });
        break;
      case "dropdown-menu":
        t2 = (0, a.jsx)(U.r, {
          label: "Project actions",
          icon: (0, a.jsx)(g.A, { size: 15 }),
          items: X2
        });
        break;
      case "context-menu":
        t2 = (0, a.jsx)(H.tz, {
          label: "Project actions",
          items: [
            {
              id: "edit",
              label: "Edit project",
              icon: (0, a.jsx)(u.A, { size: 15 }),
              onSelect: () => J2("Edit opened")
            },
            {
              id: "copy",
              label: "Copy link",
              icon: (0, a.jsx)(p.A, { size: 15 }),
              onSelect: () => {
                i2(window.location.href, "project-link").then(
                  (e11) => J2(e11 ? "Link copied" : "Could not copy link")
                );
              }
            },
            {
              id: "delete",
              label: "Delete project",
              icon: (0, a.jsx)(w.A, { size: 15 }),
              destructive: true,
              onSelect: () => J2("Project deleted")
            }
          ],
          children: (0, a.jsxs)("div", {
            className: tf().contextTarget,
            children: [
              (0, a.jsxs)("span", {
                className: tf().contextCopy,
                children: [
                  (0, a.jsx)("strong", { children: "Quarterly launch" }),
                  (0, a.jsx)("span", {
                    children: "Product \xB7 Updated today"
                  })
                ]
              }),
              (0, a.jsxs)("span", {
                className: tf().contextAction,
                children: [
                  (0, a.jsx)(g.A, { size: 15, "aria-hidden": "true" }),
                  " Open actions"
                ]
              })
            ]
          })
        });
        break;
      case "command-palette":
        t2 = (0, a.jsx)(tw, { announce: J2 });
        break;
      case "copy-button":
        t2 = (0, a.jsxs)("div", {
          className: tf().copyDemo,
          children: [
            (0, a.jsxs)("div", {
              className: tf().copyDemoField,
              children: [
                (0, a.jsx)("span", {
                  className: tf().copyDemoLabel,
                  children: "Share link"
                }),
                (0, a.jsxs)("div", {
                  className: tf().copyDemoValue,
                  children: [
                    (0, a.jsx)("code", { children: "example.com/launch" }),
                    (0, a.jsx)(q.CopyButton, {
                      value: "https://example.com/launch",
                      label: "Copy link"
                    })
                  ]
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: tf().copyDemoRow,
              children: [
                (0, a.jsx)("span", { children: "Invite code" }),
                (0, a.jsx)("code", { children: "ARC-4821" }),
                (0, a.jsx)(q.CopyButton, {
                  value: "ARC-4821",
                  label: "Copy invite code",
                  iconOnly: true,
                  variant: "plain"
                })
              ]
            })
          ]
        });
        break;
      case "drawer":
        t2 = (0, a.jsxs)(Z._s, {
          children: [
            (0, a.jsx)(Z.Uz, {
              asChild: true,
              children: (0, a.jsx)(T.$, {
                variant: "secondary",
                children: "Open details"
              })
            }),
            (0, a.jsx)(Z.zj, {
              title: "Launch details",
              description: "A quick look at the current project state.",
              children: (0, a.jsxs)("div", {
                className: tf().drawerDetails,
                children: [
                  (0, a.jsx)("strong", { children: "Ready for review" }),
                  (0, a.jsx)("p", {
                    children: "Three people are reviewing the final interaction pass."
                  }),
                  (0, a.jsx)(T.$, {
                    size: "sm",
                    onClick: () => J2("Review requested"),
                    children: "Request review"
                  })
                ]
              })
            })
          ]
        });
        break;
      case "selection-toolbar":
        t2 = (0, a.jsx)(ep, { announce: J2 });
        break;
      case "input":
        t2 = (0, a.jsx)(tP, {});
        break;
      case "textarea":
        t2 = (0, a.jsx)(em.T, {
          label: "Project note",
          defaultValue: "Keep the final pass calm and focused.",
          description: "Visible to everyone on the project."
        });
        break;
      case "select":
        t2 = (0, a.jsx)(ex.l, {
          label: "Team",
          value: D2,
          onValueChange: R2,
          options: t_,
          description: "Choose the team that owns this work."
        });
        break;
      case "combobox":
        t2 = (0, a.jsx)(eg, {
          label: "Owner",
          value: A2,
          onValueChange: z2,
          options: tb,
          placeholder: "Search people"
        });
        break;
      case "checkbox":
        t2 = (0, a.jsx)(Q.S, {
          checked: d2,
          onCheckedChange: (e11) => {
            let t3 = true === e11;
            c2(t3), J2(t3 ? "Archived projects included" : "Archived projects hidden");
          },
          label: "Include archived projects",
          description: "Show projects that are no longer active."
        });
        break;
      case "switch":
        t2 = (0, a.jsx)(ej.d, {
          checked: h2,
          onCheckedChange: m2,
          label: "Weekly digest"
        });
        break;
      case "multi-select":
        t2 = (0, a.jsx)(eD, {
          label: "Focus areas",
          value: o2,
          onValueChange: l2,
          options: ty,
          description: "Pick the areas to include in the review."
        });
        break;
      case "number-field":
        t2 = (0, a.jsxs)("div", {
          className: tf().numberFieldDemo,
          children: [
            (0, a.jsx)(eR.o, {
              label: "Seats",
              min: 1,
              max: 10,
              value: f2,
              onValueChange: _2,
              scrub: true,
              suffix: (e11) => 1 === e11 ? " seat" : " seats",
              description: `$${(12 * f2 + 4 * y2).toLocaleString("en-US")} per month, billed monthly`
            }),
            (0, a.jsx)(eR.o, {
              label: "Guest passes",
              size: "sm",
              min: 0,
              max: 3,
              value: y2,
              onValueChange: j2,
              description: "$4 each, up to 3 per workspace"
            })
          ]
        });
        break;
      case "password-field":
        t2 = (0, a.jsx)(eL.s, {
          label: "Access key",
          defaultValue: "arc-library-secret",
          description: "Use at least 8 characters."
        });
        break;
      case "search-field":
        t2 = (0, a.jsx)(eE.L, {
          label: "Search projects",
          value: v2,
          onValueChange: N2,
          placeholder: "Search by name"
        });
        break;
      case "tag-input":
        t2 = (0, a.jsx)("div", {
          className: tf().tagDemoX,
          children: (0, a.jsx)(eI.F, {
            label: "Project tags",
            value: S2,
            onValueChange: $2,
            placeholder: "Add a tag",
            description: "Press Enter to add a tag. Press Backspace twice to remove the last one."
          })
        });
        break;
      case "file-upload":
        t2 = (0, a.jsx)(e7, {
          label: "Upload brief",
          description: "PDF or markdown, up to 10\xA0MB.",
          accept: ".pdf,.md",
          maxSize: 10485760,
          multiple: false,
          onUpload: (e11, t3) => tj({ id: e11.name, name: e11.name, size: e11.size, file: e11 }, t3)
        });
        break;
      case "file-dropzone":
        t2 = (0, a.jsx)(e8.gH, {
          label: "Add launch assets",
          description: "Drop, paste, or choose files from your device",
          note: "PDF, images, or video up to 10 MB.",
          accept: "image/*,video/*,.pdf",
          maxSize: 10485760,
          maxFiles: 6,
          compactAt: 5,
          defaultItems: tg,
          onUpload: tj
        });
        break;
      case "otp-input":
        t2 = (0, a.jsx)(e3.I, {
          label: "Verification code",
          value: P2,
          onChange: C2,
          description: "Use the six digit code from your email."
        });
        break;
      case "radio-group":
        t2 = (0, a.jsx)(te.z, {
          label: "Review mode",
          value: V2,
          onValueChange: K2,
          options: [
            {
              value: "focused",
              label: "Focused review",
              description: "One reviewer at a time."
            },
            {
              value: "open",
              label: "Open review",
              description: "Everyone can comment together."
            },
            {
              value: "async",
              label: "Async review",
              description: "Reviewers leave notes when they can."
            }
          ]
        });
        break;
      case "segmented-control":
        t2 = (0, a.jsx)(tt.A, {
          label: "Project view",
          value: L2,
          onValueChange: E2,
          options: [
            { value: "Review", label: "Review" },
            { value: "Activity", label: "Activity" },
            { value: "Files", label: "Files" }
          ]
        });
        break;
      case "calendar":
        t2 = (0, a.jsx)("div", {
          className: tf().calendarDemoStage,
          children: (0, a.jsx)("div", {
            className: tf().calendarDemoFrame,
            children: (0, a.jsx)("div", {
              className: tf().calendarDemoCard,
              children: (0, a.jsx)(ti.Vv, {
                value: F2,
                onChange: (e11) => {
                  Y2(e11), J2(`Launch set for ${O2(e11)}`);
                },
                minDate: I2,
                showToday: true
              })
            })
          })
        });
        break;
      case "date-picker":
        t2 = (0, a.jsx)(ta.l, {
          label: "Launch date",
          value: F2,
          onChange: (e11) => {
            Y2(e11 ?? null), J2(e11 ? `Launch set for ${O2(e11)}` : "Launch date cleared");
          },
          minDate: I2,
          showToday: true,
          placeholder: I2 ? void 0 : "",
          description: "Pick the date for the review handoff."
        });
        break;
      case "time-picker":
        t2 = (0, a.jsx)(th, {
          label: "Review time",
          value: B2,
          onChange: W2,
          minuteStep: 15,
          description: "Local time for the review."
        });
        break;
      case "multi-step-form":
        t2 = (0, a.jsx)(tm.i, {
          steps: [
            {
              id: "details",
              title: "Project details",
              description: "A little context helps.",
              content: (0, a.jsx)(eh.p, {
                label: "Project name",
                defaultValue: "Arc launch"
              })
            },
            {
              id: "owner",
              title: "Assign owner",
              content: (0, a.jsx)(eg, {
                label: "Owner",
                options: tb,
                defaultValue: "emma"
              })
            }
          ],
          onComplete: () => J2("Project setup complete"),
          completeLabel: "Finish setup"
        });
        break;
      default:
        return null;
    }
    let ee2 = [
      "input",
      "textarea",
      "select",
      "combobox",
      "multi-select",
      "radio-group",
      "file-upload",
      "file-dropzone",
      "multi-step-form"
    ].includes(e10), et2 = ["date-picker", "time-picker"].includes(e10);
    return (0, a.jsxs)("div", {
      className: `${tf().preview} ${ee2 ? tf().roomy : ""} ${et2 ? tf().compact : ""} ${"radio-group" === e10 ? tf().radioPreview : ""} ${"textarea" === e10 ? tf().textareaPreview : ""} ${"date-picker" === e10 ? tf().datePickerPreview : ""} ${"time-picker" === e10 ? tf().timePickerPreview : ""}`,
      children: [
        (0, a.jsx)("div", { className: tf().surface, children: t2 }),
        (0, a.jsx)("div", {
          className: tf().status,
          role: "status",
          children: s2
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(98246, ".field{display:grid;gap:7px;min-width:0}\n.label{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.anchor{position:relative;min-width:0}\n.anchor:has(.popover)+.description{opacity:0}\n.trigger{position:relative;display:flex;width:100%;min-height:var(--control-height-md);align-items:center;gap:9px;border:1px solid var(--border);border-radius:var(--radius-control);padding:0 12px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.trigger:hover:not(:disabled){border-color:var(--border-strong);background:var(--surface-muted)}\n.trigger:active:not(:disabled),.trigger[aria-expanded=true]{border-color:var(--border-strong);background:var(--surface-muted)}\n.trigger:disabled{cursor:not-allowed;opacity:.5}\n.trigger>svg:first-child{flex:0 0 auto;color:var(--text-muted)}\n.trigger[aria-expanded=true] .chevron{transform:rotate(180deg)}\n@media (prefers-reduced-motion:reduce){.chevron,.description,.footer button,.trigger{transition:none}\n.valueText{position:relative;display:flex;flex:1;min-width:0}\n.part,.value{position:relative;display:inline-flex;white-space:pre}\n.value{font-variant-numeric:tabular-nums}\n.partValue{display:inline-block;white-space:pre}\n.placeholder{min-width:0;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.chevron{flex:0 0 auto;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring)}\n.popover{position:absolute;z-index:20;top:calc(100% + 8px);left:0;width:min(320px,calc(100vw - 32px));overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);padding:16px;background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:22px -8px;will-change:transform,opacity}\n@media (max-width:360px){.popover{right:0;width:auto;padding:12px}\n.footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:14px;border-top:1px solid var(--border-subtle);padding-top:11px;color:var(--text-muted);font-size:var(--text-xs)}\n.footer button{border:0;border-radius:var(--radius-control);padding:4px 8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n@media (hover:hover) and (pointer:fine){.footer button:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.footer button:active:not(:disabled){transform:scale(.97);transition-duration:var(--duration-fast),var(--duration-fast),.1s;transition-timing-function:var(--ease-standard)}\n.footer button:disabled{cursor:not-allowed;opacity:.4}\n.footer button:active:not(:disabled){transform:none}\n.status{display:grid;min-width:0;justify-items:end}\n.status>span{grid-area:1/1;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.description{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);transition:opacity var(--duration-fast) var(--ease-standard)}", {"field":"field","label":"label","anchor":"anchor","popover":"popover","description":"description","trigger":"trigger","chevron":"chevron","footer":"footer","valueText":"valueText","part":"part","value":"value","partValue":"partValue","placeholder":"placeholder","srOnly":"srOnly","status":"status"});
A.reg(98898, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { Uz: () => j, _s: () => x, cp: () => y, iX: () => _, zj: () => N });
  var i = t(95155), s = t(43146), r = t(12115), n = t(18310), o = t(80642), l = t(25354), c = t(28245), d = t(92171), h = t(9005), m = t(7770), u = t(17970), p = t.n(u);
  function _(e2) {
    let [a2, t2] = (0, r.useState)(e2);
    return null != e2 && e2 !== a2 && t2(e2), e2 ?? a2;
  }
  let g = (0, r.createContext)(null);
  function x({ open: e2, defaultOpen: a2 = false, onOpenChange: t2, ...n2 }) {
    let [o2, l2] = (0, r.useState)(a2), [c2, d2] = (0, r.useState)(false), h2 = (0, r.useRef)(0), m2 = e2 ?? o2, u2 = (0, r.useCallback)(
      (a3) => {
        d2(false), a3 && (h2.current = performance.now()), void 0 === e2 && l2(a3), t2?.(a3);
      },
      [e2, t2]
    ), p2 = (0, r.useCallback)(() => {
      u2(false), d2(true);
    }, [u2]), _2 = (0, r.useMemo)(
      () => ({ open: m2, flung: c2, setOpen: u2, fling: p2, openedAt: h2 }),
      [m2, c2, u2, p2]
    );
    return (0, i.jsx)(g.Provider, {
      value: _2,
      children: (0, i.jsx)(s.bL, { ...n2, open: m2, onOpenChange: u2 })
    });
  }
  let j = s.l9, y = s.bm, f = { duration: m.T.duration.instant }, b = {
    duration: m.T.duration.standard,
    times: [0, 0.65, 1],
    ease: "linear"
  }, v = {
    default: {
      duration: m.T.duration.standard,
      ease: [...m.T.ease.standard]
    },
    opacity: b
  }, w = {
    default: { ...m.T.spring.smooth, visualDuration: m.T.duration.standard },
    opacity: b
  };
  function k({ text: e2 }) {
    let a2 = (0, n.I)();
    return (0, i.jsx)(o.N, {
      mode: "popLayout",
      initial: false,
      children: (0, i.jsx)(
        l.PY1.span,
        {
          className: p().swap,
          initial: !a2 && {
            opacity: 0,
            y: "0.3em",
            filter: `blur(${m.T.blur.soft}px)`
          },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
            opacity: 0,
            y: "-0.3em",
            filter: `blur(${m.T.blur.subtle}px)`,
            transition: {
              duration: m.T.duration.fast,
              ease: [...m.T.ease.standard]
            }
          },
          transition: {
            duration: m.T.duration.standard,
            ease: [...m.T.ease.enter]
          },
          children: e2
        },
        e2
      )
    });
  }
  function N({
    title: e2,
    description: a2,
    children: t2,
    side: u2 = "right",
    container: _2,
    className: x2,
    onInteractOutside: j2,
    ...y2
  }) {
    let b2 = (0, r.useContext)(g), T = (0, n.I)(), C = (0, r.useRef)(null), S = (0, c.d)(0), L = (0, r.useRef)(null), P = "left" === u2 || "right" === u2 ? "x" : "y", I = "right" === u2 || "bottom" === u2 ? 1 : -1, z = { [P]: `${100 * I}%` }, A = [p().content, x2].filter(Boolean).join(" "), B = null !== b2 && !T, M = () => ("x" === P ? C.current?.offsetWidth : C.current?.offsetHeight) ?? 480, $ = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)(l.PY1.div, {
          className: [p().header, B ? p().handle : ""].filter(Boolean).join(" "),
          onPanStart: function(e3) {
            let a3 = e3.target instanceof Element ? e3.target : null;
            if (!B || a3?.closest(
              "button, a, input, select, textarea, [role='button']"
            ))
              return;
            let t3 = S.get();
            L.current = "number" == typeof t3 ? t3 : parseFloat(t3) / 100 * M(), S.stop();
          },
          onPan: function(e3, a3) {
            if (null === L.current) return;
            let t3 = (L.current + a3.offset[P]) * I;
            S.set(I * (t3 >= 0 ? t3 : -Math.sqrt(-t3)));
          },
          onPanEnd: function(e3, a3) {
            if (null === L.current) return;
            L.current = null;
            let t3 = Number(S.get()) * I;
            t3 > M() / 3 || t3 > 0 && a3.velocity[P] * I > 500 ? b2?.fling() : (0, d.i)(S, 0, m.T.spring.snappy);
          },
          children: [
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(s.hE, {
                  className: p().title,
                  children: (0, i.jsx)(k, { text: e2 })
                }),
                a2 ? (0, i.jsx)(s.VY, {
                  className: p().description,
                  children: (0, i.jsx)(k, { text: a2 })
                }) : null
              ]
            }),
            (0, i.jsx)(s.bm, {
              className: p().close,
              "aria-label": "Close drawer",
              children: (0, i.jsx)(h.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, i.jsx)("div", { className: p().body, children: t2 })
      ]
    });
    return null === b2 ? (0, i.jsxs)(s.ZL, {
      container: _2,
      children: [
        (0, i.jsx)(s.hJ, {
          className: `${p().overlay} ${p().keyframes}`,
          "data-contained": _2 ? "" : void 0
        }),
        (0, i.jsx)(s.UC, {
          ...y2,
          onInteractOutside: j2,
          "data-side": u2,
          "data-contained": _2 ? "" : void 0,
          className: `${A} ${p().keyframes}`,
          children: $
        })
      ]
    }) : (0, i.jsx)(o.N, {
      custom: b2.flung,
      children: b2.open && (0, i.jsxs)(
        s.ZL,
        {
          forceMount: true,
          container: _2,
          children: [
            (0, i.jsx)(s.hJ, {
              asChild: true,
              forceMount: true,
              children: (0, i.jsx)(l.PY1.div, {
                className: p().overlay,
                "data-contained": _2 ? "" : void 0,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: {
                  opacity: 0,
                  transition: T ? f : {
                    duration: m.T.duration.fast,
                    ease: [...m.T.ease.standard]
                  }
                },
                transition: T ? f : {
                  duration: m.T.duration.standard,
                  ease: [...m.T.ease.enter]
                }
              })
            }),
            (0, i.jsx)(s.UC, {
              ...y2,
              asChild: true,
              forceMount: true,
              onInteractOutside: (e3) => {
                j2?.(e3), e3.detail.originalEvent.timeStamp < b2.openedAt.current && e3.preventDefault();
              },
              children: (0, i.jsx)(l.PY1.div, {
                ref: C,
                className: A,
                "data-side": u2,
                "data-contained": _2 ? "" : void 0,
                style: { [P]: S },
                variants: {
                  exit: (e3) => T ? { opacity: 0, transition: f } : {
                    ...z,
                    opacity: [1, 1, 0],
                    transition: e3 ? w : v
                  }
                },
                initial: T ? { opacity: 0 } : { ...z, opacity: 1 },
                animate: T ? { opacity: 1 } : { [P]: 0, opacity: 1 },
                exit: "exit",
                transition: T ? f : m.T.spring.smooth,
                children: $
              })
            })
          ]
        },
        "drawer"
      )
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("selection-toolbar", [14290,24394,31058,34434,37350,39126,42454,42842,44370,46439,54210,55818,63386,64312,66466,67834,68272,78684,79374,79698,80194,83402,85696,98246]);
A.item("selection-toolbar", {entry:97474, export:"ActionsInputsPreview", kind:"block", tier:"pro", unresolved:[]});
})();