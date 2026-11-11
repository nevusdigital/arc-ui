function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { BottomSheetDemo: () => y, BottomSheetTrip: () => f, default: () => C });
  var s = i(95155), n = i(5772), r = i(12115), a = i(80642), o = i(25354), l = i(64962), d = i(64577), c = i(11012), h = i(99314), m = i(67026), u = i(51288), x = i(7770), p = i(18611), j = i(89782), g = i.n(j), _ = i(55665);
  let b = [{ time: "05:50", title: "Leave Rua das Flores", detail: "Taxi to the airport, about 25 min" }, { time: "07:05", title: "Boarding at gate B32", detail: "Group 3 boards from 07:20" }, { time: "07:45", title: "Depart Lisbon", detail: "Terminal 1" }, { time: "12:20", title: "Arrive in Copenhagen", detail: "Terminal 3, local time" }, { time: "13:05", title: "Metro M2 to Kongens Nytorv", detail: "15 min, trains every 4 min" }, { time: "15:00", title: "Check in at Hotel Sanders", detail: "3 nights, room held under Emma Collins" }], v = [{ name: "Emma Collins", photo: "media/people/emma-collins.svg", seat: "14C", bags: "1 checked bag" }, { name: "Marcus Johnson", photo: "media/people/marcus-johnson.svg", seat: "14D", bags: "Carry-on only" }];
  function f() {
    let [e2, t2] = (0, r.useState)("open"), [i2, p2] = (0, r.useState)("idle"), j2 = (0, r.useRef)([]);
    (0, r.useEffect)(() => () => j2.current.forEach(clearTimeout), []);
    let f2 = (e3, t3) => {
      j2.current.push(setTimeout(e3, t3));
    };
    async function y2() {
      try {
        await (0, _.a)("K7Q2ZP"), p2("copied");
      } catch {
        p2("failed");
      }
      f2(() => p2("idle"), 1800);
    }
    let C2 = "done" === e2;
    return (0, s.jsxs)("div", { className: g().controls, children: [(0, s.jsx)(a.N, { initial: false, children: C2 && (0, s.jsx)(o.PY1.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: x.T.duration.instant } }, transition: { duration: x.T.duration.fast }, children: (0, s.jsx)(u.$, { variant: "ghost", size: "sm", onClick: () => t2("open"), children: "Reset demo" }) }, "reset") }), (0, s.jsxs)(m.Xn, { trigger: (0, s.jsx)(u.$, { variant: "secondary", className: g().trigger, children: "View trip details" }), title: "Lisbon to Copenhagen", description: "Fri 24 Oct \xB7 Flight TP 754", detents: [0.46, 0.92], children: [(0, s.jsxs)("section", { className: g().flight, "aria-label": "Flight", children: [(0, s.jsxs)("div", { className: g().times, children: [(0, s.jsxs)("div", { children: [(0, s.jsx)("strong", { children: "07:45" }), (0, s.jsx)("span", { children: "Lisbon, T1" })] }), (0, s.jsxs)("div", { className: g().duration, children: [(0, s.jsx)("span", { className: g().rule, "aria-hidden": "true" }), (0, s.jsx)("span", { children: "3h 35m" }), (0, s.jsx)("span", { className: g().rule, "aria-hidden": "true" })] }), (0, s.jsxs)("div", { className: g().arrive, children: [(0, s.jsx)("strong", { children: "12:20" }), (0, s.jsx)("span", { children: "Copenhagen, T3" })] })] }), (0, s.jsxs)("p", { className: g().onTime, children: [(0, s.jsx)(l.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, s.jsxs)("span", { children: [(0, s.jsx)("strong", { children: "On time." }), " Boarding 07:05 at gate B32."] })] })] }), (0, s.jsxs)("dl", { className: g().facts, children: [(0, s.jsxs)("div", { children: [(0, s.jsx)("dt", { children: "Seat" }), (0, s.jsx)("dd", { children: "14C" })] }), (0, s.jsxs)("div", { children: [(0, s.jsx)("dt", { children: "Group" }), (0, s.jsx)("dd", { children: "3" })] }), (0, s.jsxs)("div", { children: [(0, s.jsx)("dt", { children: "Bags" }), (0, s.jsx)("dd", { children: "1 \xD7 23 kg" })] })] }), (0, s.jsxs)("div", { className: g().actions, children: [(0, s.jsx)(u.$, { onClick: function() {
      "open" === e2 && (t2("pending"), f2(() => t2("done"), 1100));
    }, loading: "pending" === e2, variant: C2 ? "secondary" : "primary", "aria-disabled": C2 || void 0, children: C2 ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(d.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Checked in"] }) : "Check in" }), (0, s.jsx)(u.$, { variant: "secondary", onClick: y2, children: "copied" === i2 ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(d.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Copied K7Q2ZP"] }) : "failed" === i2 ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Copy failed"] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(h.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Copy booking code"] }) })] }), (0, s.jsx)("p", { className: g().srOnly, role: "status", children: "pending" === e2 ? "Checking in\u2026" : C2 ? "Checked in." : "" }), (0, s.jsxs)("section", { className: g().section, children: [(0, s.jsx)("h3", { children: "Itinerary" }), (0, s.jsx)("ol", { className: g().timeline, children: b.map((e3) => (0, s.jsxs)("li", { children: [(0, s.jsx)("time", { children: e3.time }), (0, s.jsxs)("div", { children: [(0, s.jsx)("strong", { children: e3.title }), (0, s.jsx)("span", { children: e3.detail })] })] }, e3.time)) })] }), (0, s.jsxs)("section", { className: g().section, children: [(0, s.jsx)("h3", { children: "Travelers" }), (0, s.jsx)("ul", { className: g().people, children: v.map((e3) => (0, s.jsxs)("li", { children: [(0, s.jsx)(n.default, { src: e3.photo, alt: "", width: 36, height: 36 }), (0, s.jsxs)("div", { children: [(0, s.jsx)("strong", { children: e3.name }), (0, s.jsxs)("span", { children: ["Seat ", e3.seat, " \xB7 ", e3.bags] })] })] }, e3.name)) })] }), (0, s.jsxs)("section", { className: g().section, children: [(0, s.jsx)("h3", { children: "Booking" }), (0, s.jsxs)("dl", { className: g().booking, children: [(0, s.jsxs)("div", { children: [(0, s.jsx)("dt", { children: "Reference" }), (0, s.jsx)("dd", { children: "K7Q2ZP" })] }), (0, s.jsxs)("div", { children: [(0, s.jsx)("dt", { children: "Fare" }), (0, s.jsx)("dd", { children: "Classic, \u20AC184.20 per person" })] }), (0, s.jsxs)("div", { children: [(0, s.jsx)("dt", { children: "Changes" }), (0, s.jsx)("dd", { children: "Free until 22 Oct, 23:59" })] })] })] })] })] });
  }
  function y() {
    return (0, s.jsx)("div", { className: g().demo, children: (0, s.jsx)(p.p, { fill: "parent", compact: true, actions: (0, s.jsx)(f, {}) }) });
  }
  let C = y;
}

__m(__module,__exports,__require);
}