function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { DateRangePickerDemo: () => o, default: () => u });
  var a = r(95155), n = r(12115), s = r(24554), l = r(55065), d = r.n(l);
  function o() {
    let e2 = (0, n.useRef)(null), t2 = (0, s.nl)(), [r2, l2] = (0, n.useState)(null), o2 = (0, n.useMemo)(() => r2 ?? (t2 ? { start: new Date(t2.getFullYear(), t2.getMonth(), t2.getDate() + -6), end: t2 } : null), [r2, t2]), u2 = (0, n.useCallback)(() => e2.current, []), i = o2 ? Math.round((Date.UTC(o2.end.getFullYear(), o2.end.getMonth(), o2.end.getDate()) - Date.UTC(o2.start.getFullYear(), o2.start.getMonth(), o2.start.getDate())) / 864e5) + 1 : 0;
    return (0, a.jsxs)("div", { ref: e2, className: d().stage, children: [(0, a.jsx)(s.Ur, { value: o2, onChange: l2, maxDate: t2, boundary: u2, label: "Date range" }), (0, a.jsx)("p", { className: d().note, "aria-live": "polite", children: o2 ? `${i} ${1 === i ? "day" : "days"} selected` : "No range selected" })] });
  }
  let u = o;
}

__m(__module,__exports,__require);
}