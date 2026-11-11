/* date-range-picker (free component, cross-ref module 42751, closure 153) */
(function(){var A=globalThis.__ARC__;
A.reg(52427, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "calendar-days",
    size: 24,
    node: [
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }
      ],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "M8 13h.01", key: "1sbv64" }],
      ["path", { d: "M12 13h.01", key: "y0uutt" }],
      ["path", { d: "M16 13h.01", key: "wip0gl" }],
      ["path", { d: "M8 17h.01", key: "p3bg7i" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
      ["path", { d: "M16 17h.01", key: "ql8jdd" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(54471, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { n: () => o });
  var r = a(12115);
  let n = (e2) => {
    let t2 = 0, a2 = () => {
      let r3 = /* @__PURE__ */ new Date(), n2 = new Date(r3.getFullYear(), r3.getMonth(), r3.getDate() + 1);
      t2 = window.setTimeout(
        () => {
          e2(), a2();
        },
        n2.getTime() - r3.getTime() + 1e3
      );
    }, r2 = () => {
      "visible" === document.visibilityState && e2();
    };
    return a2(), document.addEventListener("visibilitychange", r2), window.addEventListener("focus", e2), () => {
      window.clearTimeout(t2), document.removeEventListener("visibilitychange", r2), window.removeEventListener("focus", e2);
    };
  }, i = () => {
    let e2;
    return e2 = /* @__PURE__ */ new Date(), `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`;
  }, l = () => "";
  function o() {
    let e2 = (0, r.useSyncExternalStore)(n, i, l);
    return (0, r.useMemo)(
      () => e2 ? ((e3) => {
        let [t2 = 1970, a2 = 1, r2 = 1] = e3.split("-").map(Number);
        return new Date(t2, a2 - 1, r2);
      })(e2) : void 0,
      [e2]
    );
  }
}

__m(__module,__exports,__require);
});
A.cssFor("date-range-picker", []);
A.item("date-range-picker", {entry:42751, export:"DateRangePickerDemo", kind:"component", tier:"free", unresolved:[], xref:true});
})();