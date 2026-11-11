function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { UserMenuDemo: () => j, default: () => A });
  var r = n(95155), a = n(12115), i = n(5772), s = n(18310), l = n(80642), u = n(25354), o = n(88359), c = n(88074), d = n(71019), m = n(51288), f = n(97918), p = n(7770), y = n(60472), h = n.n(y);
  let g = (0, i.getImageProps)({ src: "media/people/emma-collins.svg", alt: "", width: 40, height: 40 }).props, k = { name: "Emma Collins", email: "emma@example.com", plan: "Pro", avatarSrc: g.src, avatarSrcSet: g.srcSet }, x = { light: "light", dark: "dark", system: "match system" }, v = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, _ = [...p.T.ease.enter], b = [...p.T.ease.standard];
  function j() {
    let e2 = (0, s.I)(), [t2, n2] = (0, a.useState)(false), [i2, y2] = (0, a.useState)("system"), [g2, j2] = (0, a.useState)(""), [A2, w] = (0, a.useState)(false), P = (0, a.useRef)(null), S = (0, a.useRef)(null), M = (0, a.useRef)(null), z = (0, a.useRef)([]);
    (0, a.useEffect)(() => () => z.current.forEach((e3) => window.clearTimeout(e3)), []), (0, a.useEffect)(() => {
      window.matchMedia("(min-width: 640px)").matches && queueMicrotask(() => n2(true));
    }, []), (0, a.useEffect)(() => {
      let e3 = M.current;
      M.current = null, "trigger" === e3 && P.current?.focus(), "sign-in" === e3 && S.current?.focus();
    }, [A2]);
    let O = (e3, t3) => {
      z.current.push(window.setTimeout(e3, t3));
    }, T = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: e2 ? { duration: 0 } : { duration: p.T.duration.fast, ease: _ } };
    return (0, r.jsxs)("div", { className: h().stage, children: [(0, r.jsx)("div", { className: h().account, children: (0, r.jsx)(l.N, { mode: "popLayout", initial: false, children: A2 ? (0, r.jsx)(u.PY1.span, { className: h().control, ...T, children: (0, r.jsx)(m.$, { ref: S, variant: "secondary", size: "sm", onClick: function() {
      M.current = "trigger", w(false), j2("Signed back in");
    }, children: "Sign in" }) }, "sign-in") : (0, r.jsx)(u.PY1.span, { className: h().control, ...T, children: (0, r.jsx)(f.Bg, { ref: P, user: k, showName: true, align: "center", portal: false, open: t2, onOpenChange: n2, theme: i2, onThemeChange: function(e3) {
      y2(e3), j2(`Theme set to ${x[e3]}`);
    }, onSignOut: () => new Promise((e3) => O(e3, 900)).then(() => O(() => {
      M.current = "sign-in", w(true), j2("You signed out");
    }, 160)), signOutKeys: ["\u21E7", "\u2318", "Q"], items: [{ label: "Profile", icon: (0, r.jsx)(o.A, { ...v }), keys: ["\u2318", "P"], onSelect: () => j2("Opened profile") }, { label: "Settings", icon: (0, r.jsx)(c.A, { ...v }), keys: ["\u2318", ","], onSelect: () => j2("Opened settings") }, { label: "Billing", icon: (0, r.jsx)(d.A, { ...v }), onSelect: () => j2("Opened billing") }] }) }, "menu") }) }), (0, r.jsx)("p", { className: h().note, role: "status", children: (0, r.jsx)(l.N, { mode: "popLayout", initial: false, children: g2 && (0, r.jsx)(u.PY1.span, { className: h().noteLine, initial: e2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: e2 ? { opacity: 0, transition: { duration: p.T.duration.instant } } : { opacity: 0, y: "-0.3em", filter: `blur(${p.T.blur.subtle}px)`, transition: { duration: p.T.duration.fast, ease: b } }, transition: { duration: e2 ? p.T.duration.fast : p.T.duration.standard, ease: _ }, children: g2 }, g2) }) })] });
  }
  let A = j;
}

__m(__module,__exports,__require);
}