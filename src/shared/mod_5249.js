function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { JsonViewerDemo: () => _, default: () => y });
  var r = a(95155), n = a(12115), s = a(18310), d = a(80642), o = a(25354), i = a(11010), l = a(7770), u = a(76771), c = a.n(u);
  let m = ["page_view", "add_to_cart", "checkout_started", "payment_authorized", "email_opened"], h = ["Chrome 128 on macOS", "Safari on iPhone", "Firefox 130 on Windows"], p = { id: "ord_8Kd2Q7", object: "order", status: "fulfilled", livemode: false, created: 1757851200, currency: "usd", amount_total: 48600, customer: { id: "cus_R3v9", name: "Emma Collins", email: "emma.collins@example.com", address: { line1: "2150 NW Lovejoy St", city: "Portland", state: "OR", postal_code: "97210", country: "US" }, tags: ["returning", "newsletter"] }, items: [{ sku: "OAK-LC-01", name: "Oak lounge chair", quantity: 1, unit_amount: 38e3 }, { sku: "LIN-TH-04", name: "Linen throw, natural", quantity: 2, unit_amount: 4800 }, { sku: "STN-CP-02", name: "Stoneware cups, set of 2", quantity: 1, unit_amount: 1e3 }], shipping: { carrier: "UPS", service: "Ground", tracking: "1Z999AA10123456784", delivered_at: null }, discount: null, metadata: { "campaign id": "fall-26", "gift wrap": true }, events: Array.from({ length: 180 }, (e2, t2) => {
    let a2 = 7 * t2;
    return { id: `evt_${(48213 + 37 * t2).toString(36)}`, type: m[t2 % m.length], at: `2026-09-${String(14 + Math.floor(a2 / 1440)).padStart(2, "0")}T${String(Math.floor(a2 % 1440 / 60)).padStart(2, "0")}:${String(a2 % 60).padStart(2, "0")}:00Z`, agent: h[t2 % h.length], ...131 === t2 ? { note: "Refund requested for damaged lamp shade" } : {} };
  }) };
  function _() {
    let e2 = (0, s.I)(), [t2, a2] = (0, n.useState)(null);
    return (0, r.jsxs)("div", { className: c().demo, children: [(0, r.jsxs)("div", { className: c().request, children: [(0, r.jsx)("span", { className: c().method, children: "GET" }), (0, r.jsx)("code", { className: c().url, children: "/v1/orders/ord_8Kd2Q7" }), (0, r.jsxs)("span", { className: c().status, children: [(0, r.jsx)("span", { className: c().dot, "aria-hidden": "true" }), "200"] }), (0, r.jsx)("span", { className: c().time, children: "84 ms" })] }), (0, r.jsx)(i.p, { data: p, rootName: "order", maxHeight: 380, label: "Order response", onCopy: (e3) => a2((t3) => ({ ...e3, n: (t3?.n ?? 0) + 1 })) }), (0, r.jsx)("div", { className: c().note, "aria-hidden": "true", children: (0, r.jsx)(d.N, { mode: "popLayout", initial: false, children: (0, r.jsx)(o.PY1.span, { className: c().noteText, initial: e2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${l.T.blur.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: e2 ? { opacity: 0 } : { opacity: 0, y: -6, filter: `blur(${l.T.blur.subtle}px)` }, transition: { duration: l.T.duration.standard, ease: [...l.T.ease.enter] }, children: t2 ? (0, r.jsxs)(r.Fragment, { children: ["Copied ", t2.kind, " ", (0, r.jsx)("code", { className: c().code, children: "path" === t2.kind ? t2.text : t2.path })] }) : (0, r.jsxs)(r.Fragment, { children: ["Try searching for ", (0, r.jsx)("code", { className: c().code, children: "refund" }), ", then use the arrow keys"] }) }, t2?.n ?? 0) }) })] });
  }
  let y = _;
}

__m(__module,__exports,__require);
}