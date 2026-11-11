function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { MorphSelectDemo: () => T, default: () => W });
  var t = i(95155), l = i(12115), o = i(5772), s = i(18310), n = i(80642), r = i(25354), d = i(23723), h = i(67401), c = i(51811);
  let p = { name: "circle-dot-dashed", size: 24, node: [["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }], ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }], ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }], ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }], ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }], ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }], ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }], ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]] };
  p.node;
  let m = (0, c.A)(p);
  var g = i(45263), u = i(64962), y = i(94890), w = i(36565);
  let v = { name: "octagon-alert", size: 24, node: [["path", { d: "M12 16h.01", key: "1drbdi" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z", key: "1fd625" }]], aliases: ["alert-octagon"] };
  v.node;
  let b = (0, c.A)(v);
  var k = i(27040);
  let j = { name: "signal-medium", size: 24, node: [["path", { d: "M2 20h.01", key: "4haj6o" }], ["path", { d: "M7 20v-4", key: "j294jx" }], ["path", { d: "M12 20v-8", key: "i3yub9" }]] };
  j.node;
  let f = (0, c.A)(j), A = { name: "signal-low", size: 24, node: [["path", { d: "M2 20h.01", key: "4haj6o" }], ["path", { d: "M7 20v-4", key: "j294jx" }]] };
  A.node;
  let x = (0, c.A)(A);
  var M = i(88359), _ = i(23026), z = i(67752), C = i(7770), N = i(75837), S = i.n(N);
  let P = { size: 16, strokeWidth: 1.75 }, L = [{ label: "Open", options: [{ value: "backlog", label: "Backlog", icon: (0, t.jsx)(d.A, { ...P }) }, { value: "todo", label: "Todo", icon: (0, t.jsx)(h.A, { ...P }) }, { value: "in-progress", label: "In progress", icon: (0, t.jsx)(m, { ...P }) }, { value: "in-review", label: "In review", icon: (0, t.jsx)(g.A, { ...P }) }] }, { label: "Closed", options: [{ value: "done", label: "Done", icon: (0, t.jsx)(u.A, { ...P }) }, { value: "canceled", label: "Canceled", icon: (0, t.jsx)(y.A, { ...P }) }] }], V = [{ value: "none", label: "No priority", icon: (0, t.jsx)(w.A, { ...P }) }, { value: "urgent", label: "Urgent", icon: (0, t.jsx)(b, { ...P }) }, { value: "high", label: "High", icon: (0, t.jsx)(k.A, { ...P }) }, { value: "medium", label: "Medium", icon: (0, t.jsx)(f, { ...P }) }, { value: "low", label: "Low", icon: (0, t.jsx)(x, { ...P }) }];
  function q(e2, a2 = {}) {
    let i2 = (0, z.MV)(e2);
    return { value: e2, label: i2.name, icon: (0, t.jsx)(o.default, { src: i2.src, alt: "", width: 40, height: 40 }), keywords: i2.role, ...a2 };
  }
  let I = [{ value: "unassigned", label: "Unassigned", icon: (0, t.jsx)(M.A, { ...P }) }, { label: "Design", options: [q("emma-collins"), q("jasmine-brooks")] }, { label: "Engineering", options: [q("marcus-johnson", { meta: "3 open" }), q("olivia-bennett", { meta: "5 open" }), q("daniel-kim", { meta: "1 open" }), q("mateo-alvarez", { meta: "4 open" }), q("nathan-cole", { meta: "Away", disabled: true })] }, { label: "Support", options: [q("hannah-walsh"), q("jordan-reyes")] }];
  function T() {
    let e2 = (0, s.I)(), [a2, i2] = (0, l.useState)([{ id: 0, text: "Emma Collins opened this issue" }]), o2 = (e3) => (a3, t2) => i2((a4) => [{ id: (a4[0]?.id ?? 0) + 1, text: `You set ${e3} to ${t2.label}` }, ...a4].slice(0, 3));
    return (0, t.jsx)("div", { className: S().stage, children: (0, t.jsxs)("article", { className: S().card, children: [(0, t.jsxs)("header", { className: S().header, children: [(0, t.jsx)("h3", { className: S().title, children: "Checkout button stalls on Safari 17" }), (0, t.jsx)("p", { className: S().body, children: "Tapping Pay leaves the spinner running after the card is approved. Reproduced on iOS and macOS." })] }), (0, t.jsxs)("dl", { className: S().properties, children: [(0, t.jsxs)("div", { className: S().row, children: [(0, t.jsx)("dt", { "aria-hidden": "true", children: "Status" }), (0, t.jsx)("dd", { children: (0, t.jsx)(_.N, { label: "Status", hideLabel: true, items: L, defaultValue: "in-progress", align: "end", panelWidth: 232, onValueChange: o2("status") }) })] }), (0, t.jsxs)("div", { className: S().row, children: [(0, t.jsx)("dt", { "aria-hidden": "true", children: "Assignee" }), (0, t.jsx)("dd", { children: (0, t.jsx)(_.N, { label: "Assignee", hideLabel: true, items: I, defaultValue: "marcus-johnson", align: "end", panelWidth: 264, searchPlaceholder: "Find a teammate", onValueChange: o2("assignee") }) })] }), (0, t.jsxs)("div", { className: S().row, children: [(0, t.jsx)("dt", { "aria-hidden": "true", children: "Priority" }), (0, t.jsx)("dd", { children: (0, t.jsx)(_.N, { label: "Priority", hideLabel: true, items: V, defaultValue: "high", align: "end", panelWidth: 208, onValueChange: o2("priority") }) })] })] }), (0, t.jsx)("ol", { className: S().log, "aria-label": "Activity", "aria-live": "polite", children: (0, t.jsx)(n.N, { initial: false, mode: "popLayout", children: a2.map((a3) => (0, t.jsx)(r.PY1.li, { layout: !e2, className: S().entry, initial: e2 ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(4px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: 0.12 } }, transition: e2 ? { duration: 0.15 } : C.T.spring.smooth, children: a3.text }, a3.id)) }) })] }) });
  }
  let W = T;
}

__m(__module,__exports,__require);
}