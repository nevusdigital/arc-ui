function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { ToastStackDemo: () => A, default: () => x });
  var s = i(95155), a = i(12115), r = i(44825), n = i(68562), d = i(17143), c = i(51811);
  let o = { name: "hard-drive", size: 24, node: [["path", { d: "M10 16h.01", key: "1bzywj" }], ["path", { d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", key: "18tbho" }], ["path", { d: "M21.946 12.013H2.054", key: "zqlbp7" }], ["path", { d: "M6 16h.01", key: "1pmjb7" }]] };
  o.node;
  let l = (0, c.A)(o);
  var h = i(71019), u = i(9005), y = i(51288), p = i(88490), k = i(28399), m = i.n(k);
  let f = [{ name: "Emma Collins", role: "comment on files and review handoffs" }, { name: "Marcus Johnson", role: "edit the release notes and publish previews" }, { name: "Ava Mitchell", role: "run usability sessions and share recordings" }];
  function v() {
    let { toast: e2, update: t2, dismiss: i2, count: c2 } = (0, p.Xv)(), o2 = (0, a.useRef)([]), k2 = (0, a.useRef)(0), v2 = (0, a.useRef)(2);
    (0, a.useEffect)(() => {
      let e3 = o2.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let A2 = (e3, t3) => {
      o2.current.push(window.setTimeout(t3, e3));
    };
    return (0, s.jsxs)("div", { className: m().desk, children: [(0, s.jsx)("div", { className: m().intro, children: (0, s.jsx)("h3", { className: m().heading, children: "Northwind release desk" }) }), (0, s.jsxs)("div", { className: m().actions, children: [(0, s.jsxs)(y.A, { variant: "secondary", size: "sm", onClick: function() {
      let i3 = `4.${v2.current}`, s2 = `4.${v2.current - 1}`;
      v2.current += 1, e2({ type: "success", title: `Release ${i3} published`, description: "Live for 1,284 customers.", action: { label: "Undo", onClick: (e3) => t2(e3, { type: "info", title: `Rolled back to ${s2}`, description: "Customers see the previous release again.", action: void 0 }) } });
    }, children: [(0, s.jsx)(r.A, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Publish release"] }), (0, s.jsxs)(y.A, { variant: "secondary", size: "sm", onClick: function() {
      let i3 = e2({ type: "loading", title: "Uploading brand-kit.zip", description: "3 files, 24.6 MB" });
      A2(2200, () => t2(i3, { type: "success", title: "brand-kit.zip uploaded", description: "Saved to Atlas redesign, in Shared assets." }));
    }, children: [(0, s.jsx)(n.A, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Upload assets"] }), (0, s.jsxs)(y.A, { variant: "secondary", size: "sm", onClick: function() {
      let t3 = f[k2.current % f.length];
      k2.current += 1, e2({ type: "info", title: `${t3.name} joined Atlas redesign`, description: `They can ${t3.role}.` });
    }, children: [(0, s.jsx)(d.A, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Invite teammate"] }), (0, s.jsxs)(y.A, { variant: "secondary", size: "sm", onClick: function() {
      e2({ type: "warning", title: "Storage is 92% full", description: "Northwind uses 9.2 of 10 GB. Exports pause at the limit." });
    }, children: [(0, s.jsx)(l, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Check storage"] }), (0, s.jsxs)(y.A, { variant: "secondary", size: "sm", onClick: function() {
      e2({ type: "error", title: "Payment declined", description: "Visa ending 4242 was declined.", action: { label: "Retry", onClick: (e3) => {
        t2(e3, { type: "loading", title: "Retrying payment", description: "Visa ending 4242", action: void 0 }), A2(1600, () => t2(e3, { type: "success", title: "Payment received", description: "$48.00 charged to Visa ending 4242." }));
      } } });
    }, children: [(0, s.jsx)(h.A, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Charge card"] }), (0, s.jsxs)(y.A, { variant: "ghost", size: "sm", onClick: () => i2(), disabled: 0 === c2, children: [(0, s.jsx)(u.A, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Dismiss all"] })] }), (0, s.jsx)(p.y4, { contained: true, label: "Northwind notifications" })] });
  }
  function A() {
    return (0, s.jsx)(p.xu, { children: (0, s.jsx)(v, {}) });
  }
  let x = A;
}

__m(__module,__exports,__require);
}