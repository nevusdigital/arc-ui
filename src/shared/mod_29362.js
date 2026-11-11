function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { TextReveal: () => c });
  var i = n(95155), a = n(12115), r = n(7770), l = n(58418), s = n.n(l);
  let o = r.T.duration.considered;
  function c({ text: e2, as: t2 = "h2", className: n2, id: l2, delay: d = 0 }) {
    let p = e2.split("\n").map((e3) => e3.split(" ").filter(Boolean)), _ = p.reduce((e3, t3) => e3 + t3.length, 0), u = Math.min(r.T.stagger.word, o / Math.max(_, 1)), h = "p" === t2 ? r.T.blur.soft : r.T.blur.text, m = 0, g = e2.replace(/\n/g, " "), f = "p" !== t2;
    return (0, i.jsxs)(t2, { id: l2, "aria-label": f ? g : void 0, className: [s().reveal, n2].filter(Boolean).join(" "), style: { "--reveal-blur": `${h}px` }, children: [f ? null : (0, i.jsx)("span", { className: s().srOnly, children: g }), p.map((e3, t3) => (0, i.jsxs)(a.Fragment, { children: [(0, i.jsx)("span", { className: s().line, "aria-hidden": "true", children: e3.map((n3, r2) => {
      let l3 = m++;
      return (0, i.jsxs)(a.Fragment, { children: [(0, i.jsx)("span", { className: s().clip, children: (0, i.jsx)("span", { className: s().word, style: { "--reveal-delay": `${d + l3 * u + t3 * u}s` }, children: n3 }) }), r2 < e3.length - 1 ? " " : null] }, `${n3}-${l3}`);
    }) }), t3 < p.length - 1 ? " " : null] }, t3))] });
  }
}

__m(__module,__exports,__require);
}