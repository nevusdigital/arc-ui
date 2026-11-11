function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { IconMorphDemo: () => y, default: () => f });
  var n = a(95155), i = a(12115), l = a(18310), o = a(80642), r = a(25354), c = a(66604), s = a(7770), u = a(7590), d = a.n(u), m = a(55665);
  let p = "npx arc add icon-morph", h = [{ name: "menu", label: (e2) => e2 ? "Menu open" : "Menu", action: (e2) => e2 ? "Close menu" : "Open menu" }, { name: "play", label: (e2) => e2 ? "Playing" : "Paused", action: (e2) => e2 ? "Pause" : "Play" }, { name: "plus", label: (e2) => e2 ? "Added" : "Add to list", action: (e2) => e2 ? "Remove from list" : "Add to list" }, { name: "copy", label: () => "", action: () => "Copy install command" }, { name: "theme", label: (e2) => e2 ? "Dark" : "Light", action: (e2) => e2 ? "Switch tile to light" : "Switch tile to dark" }, { name: "chevron", label: (e2) => e2 ? "Hide details" : "Show details", action: (e2) => e2 ? "Hide details" : "Show details" }, { name: "bell", label: (e2) => e2 ? "Alerts on" : "Alerts off", action: (e2) => e2 ? "Turn alerts off" : "Turn alerts on" }, { name: "heart", label: (e2) => `${e2 ? 129 : 128} likes`, action: (e2) => e2 ? "Unlike" : "Like" }];
  function y() {
    let e2 = !!(0, l.I)(), [t2, a2] = (0, i.useState)({ menu: false, play: false, plus: false, copy: false, theme: false, chevron: false, bell: true, heart: false }), [u2, y2] = (0, i.useState)("idle"), f2 = (0, i.useRef)(0);
    async function b(e3) {
      if ("copy" !== e3) return void a2((t3) => ({ ...t3, [e3]: !t3[e3] }));
      window.clearTimeout(f2.current);
      try {
        await (0, m.a)(p), y2("copied");
      } catch {
        y2("failed");
      }
      f2.current = window.setTimeout(() => y2("idle"), 1600);
    }
    (0, i.useEffect)(() => () => window.clearTimeout(f2.current), []);
    let x = e2 ? { opacity: 0 } : { opacity: 0, y: 4, filter: `blur(${s.T.blur.soft}px)` }, _ = e2 ? { opacity: 0 } : { opacity: 0, y: -4, filter: `blur(${s.T.blur.soft}px)` };
    return (0, n.jsxs)("div", { className: d().demo, children: [(0, n.jsx)("div", { className: d().grid, children: h.map((a3) => {
      let i2 = "copy" === a3.name ? "copied" === u2 : t2[a3.name], l2 = "copy" === a3.name ? "copied" === u2 ? "Copied" : "failed" === u2 ? "Copy failed" : "Copy command" : a3.label(i2);
      return (0, n.jsxs)("button", { type: "button", className: d().tile, "data-name": a3.name, "data-on": i2 ? "" : void 0, "aria-label": a3.action(i2), "aria-pressed": "copy" === a3.name ? void 0 : i2, onClick: () => b(a3.name), children: [(0, n.jsx)(c.cW, { name: a3.name, state: i2, size: 28 }), (0, n.jsx)("span", { className: d().label, "aria-hidden": "true", children: (0, n.jsx)(o.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(r.PY1.span, { className: d().labelText, initial: x, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { ..._, transition: { duration: s.T.duration.instant } }, transition: e2 ? { duration: s.T.duration.instant } : { duration: s.T.duration.standard, ease: [...s.T.ease.enter] }, children: l2 }, l2) }) })] }, a3.name);
    }) }), (0, n.jsx)("p", { className: d().srOnly, role: "status", "aria-live": "polite", children: "copied" === u2 ? `Copied \u201C${p}\u201D` : "failed" === u2 ? "Clipboard is unavailable here" : "" })] });
  }
  let f = y;
}

__m(__module,__exports,__require);
}