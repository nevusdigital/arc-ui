function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { InlineEditDemo: () => v, default: () => _ });
  var r = n(95155), i = n(12115), a = n(80642), s = n(25354), l = n(18310), o = n(67326), c = n(50680), u = n(7770), d = n(64897), f = n.n(d);
  let h = [...u.T.ease.enter], p = [...u.T.ease.standard], m = () => () => {
  };
  function b({ text: e2, reduced: t2 }) {
    return (0, r.jsx)("span", { className: f().rise, children: (0, r.jsx)(a.N, { mode: "popLayout", initial: false, children: (0, r.jsx)(s.PY1.span, { className: f().riseLine, initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${u.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: t2 ? { opacity: 0, transition: { duration: u.T.duration.instant } } : { opacity: 0, y: "-0.3em", filter: `blur(${u.T.blur.subtle}px)`, transition: { duration: u.T.duration.fast, ease: p } }, transition: { duration: t2 ? u.T.duration.fast : u.T.duration.standard, ease: h }, children: e2 }, e2) }) });
  }
  let y = (e2) => e2 ? e2.length > 32 ? `Keep it to 32 characters. This one has ${e2.length}.` : null : "Give the project a name.", x = (e2) => e2.length > 140 ? `Keep it to 140 characters. This one has ${e2.length}.` : null;
  function v() {
    let e2 = (0, i.useSyncExternalStore)(m, () => true, () => false), t2 = ((0, l.I)() ?? false) && e2, [n2, a2] = (0, i.useState)(false), [s2, u2] = (0, i.useState)("Last edited by Emma Collins on Mon 15 Sep"), d2 = (0, i.useRef)([]);
    (0, i.useEffect)(() => () => d2.current.forEach(clearTimeout), []);
    let h2 = (e3, t3) => new Promise((r2, i2) => {
      n2 && a2(false), u2(`Saving ${e3.toLowerCase()}\u2026`), d2.current.push(setTimeout(() => {
        if (n2) {
          u2("The save failed."), i2(Error("Simulated failure"));
          return;
        }
        u2(`${e3} saved as \u201C${t3.length > 28 ? `${t3.slice(0, 27)}\u2026` : t3}\u201D.`), r2();
      }, 900));
    });
    return (0, r.jsxs)("section", { className: f().panel, "aria-label": "Project settings", children: [(0, r.jsxs)("div", { className: f().field, children: [(0, r.jsx)("span", { className: f().label, "aria-hidden": "true", children: "Project name" }), (0, r.jsx)(o.S, { as: "h3", value: "Atlas web app", label: "Project name", validate: y, onSave: (e3) => h2("Name", e3) })] }), (0, r.jsxs)("div", { className: f().field, children: [(0, r.jsx)("span", { className: f().label, "aria-hidden": "true", children: "Description" }), (0, r.jsx)(o.S, { multiline: true, variant: "body", value: "Offline-first field notes for the Atlas survey team. Drafts sync the moment a connection returns.", placeholder: "Add a short description", label: "Description", validate: x, onSave: (e3) => h2("Description", e3) })] }), (0, r.jsxs)("footer", { className: f().footer, children: [(0, r.jsx)(c.d, { checked: n2, onCheckedChange: a2, label: "Fail the next save" }), (0, r.jsx)("p", { className: f().activity, children: (0, r.jsx)(b, { text: s2, reduced: t2 }) })] })] });
  }
  let _ = v;
}

__m(__module,__exports,__require);
}