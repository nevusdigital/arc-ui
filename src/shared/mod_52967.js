function(__module,__exports,__require){
"use strict";
function __m(e, a, r) {
  "use strict";
  r.r(a), r.d(a, { RadioCardsDemo: () => h, default: () => b });
  var d = r(95155), s = r(12115), i = r(93089), t = r(13488), l = r(49804), n = r(85974), o = r(62998), c = r(84749), u = r.n(c);
  let p = { size: 18, strokeWidth: 1.75 }, y = [{ value: "single", label: "One bag", description: "12 oz, whole bean", meta: "$18" }, { value: "double", label: "Two bags", description: "Two origins each month", meta: "$34" }, { value: "bulk", label: "Bulk", description: "5 lb for the office", meta: "$72" }, { value: "decaf", label: "Decaf", description: "Swiss water process", meta: "$19", disabled: true, disabledReason: "Back in stock October 14" }], m = [{ value: "standard", label: "Standard", description: "5 to 7 business days", meta: "Free", icon: (0, d.jsx)(i.A, { ...p }) }, { value: "express", label: "Express", description: "2 business days", meta: "$12", icon: (0, d.jsx)(t.A, { ...p }) }, { value: "overnight", label: "Overnight", description: "Tomorrow by 10 am", meta: "$29", icon: (0, d.jsx)(l.A, { ...p }) }, { value: "pickup", label: "Pickup", description: "Roastery on Mission St", meta: "Free", icon: (0, d.jsx)(n.A, { ...p }), disabled: true, disabledReason: "Not available for your address" }];
  function h() {
    let [e2, a2] = (0, s.useState)("double"), [r2, i2] = (0, s.useState)("standard");
    return (0, d.jsxs)("div", { className: u().demo, children: [(0, d.jsxs)("fieldset", { className: u().group, children: [(0, d.jsx)("legend", { className: u().legend, id: "radio-cards-plan", children: "Plan" }), (0, d.jsx)(o.J, { "aria-labelledby": "radio-cards-plan", name: "plan", options: y, value: e2, onValueChange: a2, minColumnWidth: 200 })] }), (0, d.jsxs)("fieldset", { className: u().group, children: [(0, d.jsx)("legend", { className: u().legend, id: "radio-cards-delivery", children: "Delivery" }), (0, d.jsx)(o.J, { "aria-labelledby": "radio-cards-delivery", name: "delivery", layout: "list", options: m, value: r2, onValueChange: i2 })] })] });
  }
  let b = h;
}

__m(__module,__exports,__require);
}