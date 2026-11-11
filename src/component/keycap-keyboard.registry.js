/* keycap-keyboard (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(21759, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "corner-down-left",
    size: 24,
    node: [
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
      ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(65817, ".demo{display:grid;width:100%;justify-items:center;gap:16px}\n.segment{position:relative;display:inline-grid;grid-auto-columns:1fr;grid-auto-flow:column;gap:2px;padding:2px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted)}\n.segment:before{position:absolute;top:2px;bottom:2px;left:2px;width:calc(50% - 3px);border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-resting),0 0 0 1px var(--border);content:\"\";transform:translate3d(calc(var(--index, 0) * (100% + 2px)),0,0);transition:transform var(--duration-spring) var(--ease-spring)}\n@media (prefers-reduced-motion:reduce){.segment:before{transition:none}\n.option{position:relative;height:30px;padding:0 14px;border:0;border-radius:var(--radius-pill);background:none;color:var(--text-muted);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.option[aria-pressed=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.option:hover{color:var(--foreground)}", {"demo":"demo","segment":"segment","option":"option"});
A.regCss(86938, ".root{--board:oklch(97% 0 0);--board-edge:oklch(0% 0 0/.07);--cap-top:oklch(100% 0 0);--cap-bottom:oklch(96.5% 0 0);--cap-edge:oklch(0% 0 0/.09);--face-top:oklch(96.8% 0 0);--face-bottom:oklch(99.6% 0 0);--housing:oklch(84% 0 0);--legend:oklch(40% 0 0);--legend-soft:oklch(56% 0 0);--shade:oklch(0% 0 0/.1);--glow:color-mix(in oklab,var(--accent) 30%,transparent);--tint:color-mix(in oklab,var(--accent) 12%,transparent);display:grid;width:100%;max-width:760px;gap:20px;margin-inline:auto;container-type:inline-size;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}\n:root[data-theme=dark] .root{--board:oklch(17.5% 0 0);--board-edge:oklch(100% 0 0/.07);--cap-top:oklch(29% 0 0);--cap-bottom:oklch(25.5% 0 0);--cap-edge:oklch(100% 0 0/.07);--face-top:oklch(26.5% 0 0);--face-bottom:oklch(29.5% 0 0);--housing:oklch(11% 0 0);--legend:oklch(86% 0 0);--legend-soft:oklch(66% 0 0);--shade:oklch(0% 0 0/.4);--glow:color-mix(in oklab,var(--accent) 34%,transparent);--tint:color-mix(in oklab,var(--accent) 14%,transparent)}\n.root .key[data-accent] .legend{color:var(--accent-foreground)}\n.output{display:flex;height:calc(1.3em * 2 + 4px);flex-direction:column-reverse;overflow-y:auto;color:var(--foreground);font-family:var(--font-display);font-size:clamp(1.25rem,4.4cqw,2rem);letter-spacing:var(--tracking-display);line-height:1.3;scrollbar-width:none;cursor:text}\n.output::-webkit-scrollbar{display:none}\n.output[data-typing] .caret{animation:none}\n.text{margin:0;padding-inline:8px;text-align:center;white-space:pre-wrap;overflow-wrap:anywhere}\n.char{animation:arrive .14s var(--ease-standard) both}\n.caret,.char{animation:none}\n.placeholder{color:var(--text-muted)}\n.caret{display:inline-block;width:2px;height:1.08em;margin:0 1px 0 2px;border-radius:1px;background:var(--accent);vertical-align:-.16em;animation:blink 1.06s steps(1) infinite}\n.plate{--pad:clamp(6px,2.2cqw,16px);--u:min(54px,calc((100cqw - var(--pad) * 2 - 2px) / (var(--units) + (var(--units) - 1) * .14)));--gap:calc(var(--u) * .14);--travel:clamp(2px,calc(var(--u) * .085),4.5px);--r:calc(var(--u) * .2);box-sizing:border-box;display:grid;justify-self:center;justify-content:center;gap:var(--gap);padding:var(--pad);border:1px solid var(--board-edge);border-radius:calc(var(--r) + var(--pad));background:var(--board);box-shadow:var(--shadow-resting)}\n.plate[data-morphing]{overflow:hidden}\n.row{display:flex;justify-content:center;gap:var(--gap)}\n.key{position:relative;width:calc(var(--u) * var(--w) + var(--gap) * (var(--w) - 1));height:calc(var(--u) + var(--travel));flex:none;padding:0;border:0;background:none;cursor:pointer;touch-action:manipulation}\n.key[data-corner] .face{place-items:end start;padding:calc(var(--u) * .1) calc(var(--u) * .13)}\n.key[data-corner] .legend{color:var(--legend-soft);font-size:clamp(7px,calc(var(--u) * .21),12px)}\n.key[data-pressed] .cap{transform:translate3d(0,calc(var(--travel) * .92),0);transition:transform 35ms cubic-bezier(.2,.8,.2,1)}\n.key[data-latched] .cap:after,.key[data-pressed] .cap:after{opacity:1;transition-duration:40ms}\n.key[data-pressed] .glow{opacity:1;transition:opacity 40ms linear}\n.key[data-latched] .legend,.key[data-pressed] .legend{color:var(--foreground);transition-duration:40ms}\n.key[data-latched] .cap{transform:translate3d(0,calc(var(--travel) * .5),0)}\n@media (hover:hover) and (pointer:fine){.key:hover .legend{color:var(--foreground)}\n.key[data-accent]{--cap-top:color-mix(in oklab,var(--accent) 86%,oklch(100% 0 0));--cap-bottom:var(--accent);--face-top:color-mix(in oklab,var(--accent) 92%,oklch(0% 0 0));--face-bottom:color-mix(in oklab,var(--accent) 88%,oklch(100% 0 0));--tint:oklch(100% 0 0/.08)}\n@media (prefers-reduced-motion:reduce){.cap,.key[data-latched] .cap,.key[data-pressed] .cap{transform:none;transition:none}\n.glow{position:absolute;inset:calc(var(--u) * -.22);border-radius:calc(var(--r) * 2);background:radial-gradient(closest-side,var(--glow),transparent);opacity:0;transition:opacity .7s var(--ease-standard);pointer-events:none}\n.glow{transition-duration:.2s}\n.housing{position:absolute;inset:var(--travel) 0 0;border-radius:var(--r);background:var(--housing);box-shadow:0 1px 2px var(--shade),0 calc(var(--travel) * .8) calc(var(--travel) * 2) var(--shade)}\n.cap{position:absolute;inset:0 0 var(--travel);border-radius:var(--r);background:linear-gradient(to bottom,var(--cap-top),var(--cap-bottom));box-shadow:inset 0 0 0 1px var(--cap-edge),inset 0 calc(var(--u) * -.07) 0 var(--shade);transition:transform .2s cubic-bezier(.2,.9,.3,1);will-change:transform}\n.cap:after{position:absolute;inset:0;border-radius:inherit;background:var(--tint);content:\"\";opacity:0;transition:opacity .6s var(--ease-standard)}\n.face{position:absolute;z-index:1;inset:calc(var(--u) * .05) calc(var(--u) * .09) calc(var(--u) * .15);display:grid;place-items:center;border-radius:calc(var(--r) * .78);background:linear-gradient(to bottom,var(--face-top),var(--face-bottom));box-shadow:inset 0 1px 1.5px var(--shade),inset 0 -1px 0 oklch(100% 0 0/.5)}\n:root[data-theme=dark] .face{box-shadow:inset 0 1px 1.5px oklch(0 0 0/.35),inset 0 -1px 0 oklch(100% 0 0/.05)}\n.legend{display:grid;place-items:center;color:var(--legend);font-family:var(--font-body);font-size:clamp(9px,calc(var(--u) * .3),16px);font-weight:400;line-height:1;transition:color .4s var(--ease-standard)}\n.legend svg{width:clamp(10px,calc(var(--u) * .3),16px);height:auto}", {"root":"root","key":"key","legend":"legend","output":"output","caret":"caret","text":"text","char":"char","placeholder":"placeholder","plate":"plate","row":"row","face":"face","cap":"cap","glow":"glow","housing":"housing"});
A.reg(90744, function(__module,__exports,__require){
"use strict";
function __m(e, r, a) {
  "use strict";
  a.d(r, { A: () => c });
  var l = a(51811);
  let t = {
    name: "delete",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
          key: "1yo7s0"
        }
      ],
      ["path", { d: "m12 9 6 6", key: "anjzzh" }],
      ["path", { d: "m18 9-6 6", key: "1fp51s" }]
    ]
  };
  t.node;
  let c = (0, l.A)(t);
}

__m(__module,__exports,__require);
});
A.reg(94521, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { KeycapKeyboardDemo: () => M, default: () => z });
  var r = a(95155), n = a(12115), o = a(90744), c = a(21759), s = a(51811);
  let l = {
    name: "arrow-big-up",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z",
          key: "106j91"
        }
      ]
    ]
  };
  l.node;
  let i = (0, s.A)(l);
  var d = a(86938), u = a.n(d);
  let p = {
    "`": "~",
    1: "!",
    2: "@",
    3: "#",
    4: "$",
    5: "%",
    6: "^",
    7: "&",
    8: "*",
    9: "(",
    0: ")",
    "-": "_",
    "=": "+",
    "[": "{",
    "]": "}",
    "\\": "|",
    ";": ":",
    "'": '"',
    ",": "<",
    ".": ">",
    "/": "?"
  }, m = {
    "`": "Backquote",
    "-": "Minus",
    "=": "Equal",
    "[": "BracketLeft",
    "]": "BracketRight",
    "\\": "Backslash",
    ";": "Semicolon",
    "'": "Quote",
    ",": "Comma",
    ".": "Period",
    "/": "Slash"
  }, f = { size: 15, strokeWidth: 1.75, "aria-hidden": true };
  function h(e2, t2 = 1) {
    let a2 = e2.toLowerCase(), r2 = /[a-z]/.test(a2) ? `Key${a2.toUpperCase()}` : /\d/.test(e2) ? `Digit${e2}` : m[e2] ?? `Char${e2.charCodeAt(0)}`, n2 = /[a-z]/.test(a2) ? a2.toUpperCase() : p[e2];
    return { code: r2, legend: a2, name: a2, value: a2, shifted: n2, units: t2 };
  }
  function y(e2, t2) {
    switch (e2) {
      case "space":
        return {
          code: "Space",
          legend: null,
          name: "Space",
          value: " ",
          units: t2 ?? 5
        };
      case "backspace":
        return {
          code: "Backspace",
          legend: (0, r.jsx)(o.A, { ...f }),
          name: "Delete",
          action: "backspace",
          units: t2 ?? 1.6,
          corner: true
        };
      case "enter":
        return {
          code: "Enter",
          legend: (0, r.jsx)(c.A, { ...f }),
          name: "Return",
          value: "\n",
          units: t2 ?? 2.25,
          corner: true,
          accent: true
        };
      case "shift":
        return {
          code: "ShiftLeft",
          also: ["ShiftRight"],
          legend: (0, r.jsx)(i, { ...f }),
          name: "Shift",
          action: "shift",
          units: t2 ?? 2.25,
          corner: true
        };
      case "tab":
        return {
          code: "Tab",
          legend: "tab",
          name: "Tab",
          units: t2 ?? 1.5,
          corner: true
        };
      case "caps":
        return {
          code: "CapsLock",
          legend: "caps",
          name: "Caps lock",
          units: t2 ?? 1.75,
          corner: true
        };
      default:
        return h(e2);
    }
  }
  function k(e2) {
    return e2.map((e3) => e3.map((e4) => 1 === e4.length ? h(e4) : y(e4)));
  }
  let g = k([
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ["space"]
  ]).map(
    (e2, t2) => 2 === t2 ? e2.map((e3) => e3.action ? { ...e3, units: 1.5 } : e3) : 3 === t2 ? e2.map((e3) => ({ ...e3, units: 6, accent: true })) : e2
  ), b = [
    [..."`1234567890-=".split("").map((e2) => h(e2)), y("backspace", 2)],
    [
      y("tab", 1.5),
      ..."qwertyuiop[]".split("").map((e2) => h(e2)),
      h("\\", 1.5)
    ],
    [
      y("caps", 1.75),
      ..."asdfghjkl;'".split("").map((e2) => h(e2)),
      y("enter", 2.25)
    ],
    [
      { ...y("shift", 2.25), also: [] },
      ..."zxcvbnm,./".split("").map((e2) => h(e2)),
      { ...y("shift", 2.75), code: "ShiftRight", also: [] }
    ],
    [
      {
        code: "ControlLeft",
        legend: "ctrl",
        name: "Control",
        units: 1.25,
        corner: true
      },
      {
        code: "AltLeft",
        legend: "opt",
        name: "Option",
        units: 1.25,
        corner: true
      },
      {
        code: "MetaLeft",
        legend: "cmd",
        name: "Command",
        units: 1.5,
        corner: true
      },
      { ...y("space"), units: 7 },
      {
        code: "MetaRight",
        legend: "cmd",
        name: "Command",
        units: 1.5,
        corner: true
      },
      {
        code: "AltRight",
        legend: "opt",
        name: "Option",
        units: 1.25,
        corner: true
      },
      {
        code: "ControlRight",
        legend: "ctrl",
        name: "Control",
        units: 1.25,
        corner: true
      }
    ]
  ];
  function _(e2, t2, a2) {
    e2 && (a2 ? e2.setAttribute(t2, "") : e2.removeAttribute(t2));
  }
  function v(e2, t2) {
    let a2 = parseFloat(e2);
    return Number.isFinite(a2) ? /ms\s*$/.test(e2) ? a2 : 1e3 * a2 : t2;
  }
  let w = (0, n.memo)(function({
    def: e2,
    register: t2,
    onDown: a2,
    onUp: n2,
    onActivate: o2
  }) {
    return (0, r.jsxs)("button", {
      ref: (a3) => t2(e2.code, a3),
      type: "button",
      className: u().key,
      style: { "--w": e2.units },
      "data-keycap": "",
      "data-corner": e2.corner ? "" : void 0,
      "data-accent": e2.accent ? "" : void 0,
      "aria-label": e2.name,
      onPointerDown: (t3) => a2(e2, t3),
      onPointerUp: () => n2(e2),
      onPointerCancel: () => n2(e2),
      onLostPointerCapture: () => n2(e2),
      onClick: (t3) => o2(e2, t3),
      children: [
        (0, r.jsx)("span", { className: u().glow, "aria-hidden": "true" }),
        (0, r.jsx)("span", { className: u().housing, "aria-hidden": "true" }),
        (0, r.jsx)("span", {
          className: u().cap,
          "aria-hidden": "true",
          children: (0, r.jsx)("span", {
            className: u().face,
            children: (0, r.jsx)("span", {
              className: u().legend,
              children: e2.legend
            })
          })
        })
      ]
    });
  });
  function x({
    value: e2,
    defaultValue: t2 = "",
    onValueChange: a2,
    layout: o2 = "compact",
    rows: c2,
    maxLength: s2 = 280,
    listen: l2 = "focus",
    placeholder: i2 = "Start typing",
    showOutput: d2 = true,
    label: p2 = "Keyboard",
    className: m2,
    style: f2
  }) {
    let [h2, y2] = (0, n.useState)(t2), C2 = e2 ?? h2, j2 = (0, n.useRef)(null), E2 = (0, n.useRef)(null), N2 = (0, n.useRef)(/* @__PURE__ */ new Map()), L2 = (0, n.useRef)({
      text: C2,
      controlled: void 0 !== e2,
      onValueChange: a2,
      maxLength: s2
    }), R2 = (0, n.useRef)(false), A2 = (0, n.useRef)(0);
    (0, n.useEffect)(() => {
      L2.current = {
        text: C2,
        controlled: void 0 !== e2,
        onValueChange: a2,
        maxLength: s2
      };
    });
    let M2 = c2 ? JSON.stringify(c2) : "", z2 = (0, n.useMemo)(
      () => M2 ? k(JSON.parse(M2)) : "letters" === o2 ? g : b,
      [M2, o2]
    ), S = (0, n.useMemo)(
      () => Math.max(...z2.map((e3) => e3.reduce((e4, t3) => e4 + t3.units, 0))),
      [z2]
    ), T = (0, n.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      for (let t3 of z2.flat())
        e3.set(t3.code, t3), t3.also?.forEach((a3) => {
          e3.has(a3) || e3.set(a3, t3);
        });
      return e3;
    }, [z2]), q = (0, n.useCallback)((e3, t3) => {
      t3 ? N2.current.set(e3, t3) : N2.current.delete(e3);
    }, []), B = (0, n.useCallback)((e3, t3) => {
      _(N2.current.get(e3), "data-pressed", t3);
    }, []), D = (0, n.useCallback)((e3) => {
      for (let t3 of (R2.current = e3, ["ShiftLeft", "ShiftRight"]))
        _(N2.current.get(t3), "data-latched", e3);
    }, []), P = (0, n.useCallback)((e3) => {
      let { controlled: t3, onValueChange: a3, maxLength: r2 } = L2.current, n2 = Array.from(e3), o3 = n2.length > r2 ? n2.slice(n2.length - r2).join("") : e3;
      L2.current.text = o3, t3 || y2(o3), a3?.(o3);
      let c3 = E2.current;
      c3 && (c3.dataset.typing = "", window.clearTimeout(A2.current), A2.current = window.setTimeout(() => {
        delete c3.dataset.typing;
      }, 600));
    }, []), $ = (0, n.useCallback)((e3) => P(L2.current.text + e3), [P]), K = (0, n.useCallback)(
      () => P(Array.from(L2.current.text).slice(0, -1).join("")),
      [P]
    ), V = (0, n.useCallback)(
      (e3) => {
        if ("shift" === e3.action) return void D(!R2.current);
        if ("backspace" === e3.action) return void K();
        if (void 0 === e3.value) return;
        let t3 = R2.current && e3.shifted ? e3.shifted : e3.value;
        R2.current && D(false), $(t3);
      },
      [K, $, D]
    ), H = (0, n.useCallback)(
      (e3, t3) => {
        0 === t3.button && (t3.preventDefault(), t3.currentTarget.setPointerCapture(t3.pointerId), B(e3.code, true), V(e3));
      },
      [B, V]
    ), W = (0, n.useCallback)((e3) => B(e3.code, false), [B]), O = (0, n.useCallback)(
      (e3, t3) => {
        0 === t3.detail && (B(e3.code, true), V(e3), window.setTimeout(() => B(e3.code, false), 90));
      },
      [B, V]
    );
    (0, n.useEffect)(() => {
      let e3 = j2.current, t3 = "window" === l2 ? window : e3;
      if (!t3 || !e3) return;
      let a3 = (t4) => {
        var a4;
        if (t4.defaultPrevented || t4.metaKey || t4.ctrlKey || t4.altKey) return;
        let r3 = e3.contains(t4.target);
        if (!r3 && (a4 = t4.target) instanceof HTMLElement && (a4.isContentEditable || /^(input|textarea|select)$/i.test(a4.tagName)) || r3 && t4.target instanceof HTMLElement && void 0 !== t4.target.dataset.keycap && ("Enter" === t4.key || " " === t4.key))
          return;
        let n3 = T.get(t4.code);
        if (n3 && !t4.repeat && B(n3.code, true), "Backspace" === t4.key) {
          t4.preventDefault(), K();
          return;
        }
        if ("Enter" === t4.key) {
          t4.preventDefault(), $("\n");
          return;
        }
        1 === t4.key.length && (t4.preventDefault(), R2.current && D(false), $(t4.key));
      }, r2 = (e4) => {
        let t4 = T.get(e4.code);
        t4 && B(t4.code, false);
      }, n2 = () => {
        for (let e4 of N2.current.keys()) B(e4, false);
      };
      return t3.addEventListener("keydown", a3), t3.addEventListener("keyup", r2), window.addEventListener("blur", n2), "focus" === l2 && e3.addEventListener("focusout", n2), () => {
        t3.removeEventListener("keydown", a3), t3.removeEventListener("keyup", r2), window.removeEventListener("blur", n2), e3.removeEventListener("focusout", n2);
      };
    }, [l2, T, B, K, $, D]), (0, n.useEffect)(() => () => window.clearTimeout(A2.current), []);
    let U = (0, n.useRef)(null), Z = (0, n.useRef)(null), F = (0, n.useRef)([]);
    (0, n.useEffect)(() => {
      let e3 = U.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        Z.current = { w: e3.offsetWidth, h: e3.offsetHeight };
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useLayoutEffect)(() => {
      let e3 = U.current, t3 = Z.current;
      if (!e3 || !t3 || "function" != typeof e3.animate) return;
      F.current.forEach((e4) => e4.cancel()), F.current = [], delete e3.dataset.morphing;
      let a3 = { w: e3.offsetWidth, h: e3.offsetHeight };
      if (Z.current = a3, t3.w === a3.w && t3.h === a3.h || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;
      let r2 = getComputedStyle(e3), n2 = r2.getPropertyValue("--ease-spring").trim() || "cubic-bezier(.22, 1, .36, 1)", o3 = v(r2.getPropertyValue("--duration-spring"), 580), c3 = v(r2.getPropertyValue("--duration-standard"), 240), s3 = e3.animate(
        [
          { width: `${t3.w}px`, height: `${t3.h}px` },
          { width: `${a3.w}px`, height: `${a3.h}px` }
        ],
        { duration: o3, easing: n2 }
      );
      e3.dataset.morphing = "", s3.onfinish = s3.oncancel = () => {
        F.current[0] === s3 && delete e3.dataset.morphing;
      }, F.current = [
        s3,
        ...Array.from(
          e3.children,
          (e4) => e4.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: c3,
            delay: 60,
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "backwards"
          })
        )
      ];
    }, [z2]);
    let G = Array.from(C2);
    return (0, r.jsxs)("div", {
      ref: j2,
      className: [u().root, m2].filter(Boolean).join(" "),
      style: { ...f2, "--units": S },
      children: [
        d2 && (0, r.jsx)("div", {
          ref: E2,
          className: u().output,
          role: "textbox",
          "aria-readonly": "true",
          "aria-multiline": "true",
          "aria-label": "Typed text",
          tabIndex: 0,
          children: (0, r.jsxs)("p", {
            className: u().text,
            children: [
              G.map(
                (e3, t3) => "\n" === e3 ? (0, r.jsx)("br", {}, t3) : (0, r.jsx)(
                  "span",
                  { className: u().char, children: e3 },
                  t3
                )
              ),
              (0, r.jsx)("span", {
                className: u().caret,
                "aria-hidden": "true"
              }),
              0 === G.length && (0, r.jsx)("span", {
                className: u().placeholder,
                children: i2
              })
            ]
          })
        }),
        (0, r.jsx)("div", {
          ref: U,
          className: u().plate,
          role: "group",
          "aria-label": p2,
          children: z2.map(
            (e3, t3) => (0, r.jsx)(
              "div",
              {
                className: u().row,
                children: e3.map(
                  (e4) => (0, r.jsx)(
                    w,
                    { def: e4, register: q, onDown: H, onUp: W, onActivate: O },
                    e4.code
                  )
                )
              },
              t3
            )
          )
        })
      ]
    });
  }
  var C = a(65817), j = a.n(C);
  let E = [
    { id: "compact", label: "Compact" },
    { id: "letters", label: "Letters" }
  ], N = "(max-width: 560px)", L = (e2) => {
    let t2 = window.matchMedia(N);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  }, R = () => window.matchMedia(N).matches, A = () => false;
  function M() {
    let e2 = (0, n.useSyncExternalStore)(L, R, A), [t2, a2] = (0, n.useState)(null), o2 = t2 ?? (e2 ? "letters" : "compact");
    return (0, r.jsxs)("div", {
      className: j().demo,
      children: [
        (0, r.jsx)(x, {
          listen: "window",
          layout: o2,
          placeholder: "Type anything"
        }),
        (0, r.jsx)("div", {
          className: j().segment,
          role: "group",
          "aria-label": "Layout",
          style: { "--index": E.findIndex((e3) => e3.id === o2) },
          children: E.map(
            (e3) => (0, r.jsx)(
              "button",
              {
                type: "button",
                className: j().option,
                "aria-pressed": o2 === e3.id,
                onClick: () => a2(e3.id),
                children: e3.label
              },
              e3.id
            )
          )
        })
      ]
    });
  }
  let z = M;
}

__m(__module,__exports,__require);
});
A.cssFor("keycap-keyboard", [65817,86938]);
A.item("keycap-keyboard", {entry:94521, export:"KeycapKeyboardDemo", kind:"component", tier:"pro", unresolved:[]});
})();