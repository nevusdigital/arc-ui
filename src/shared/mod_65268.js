function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ScrollAreaDemo: () => _, default: () => j });
  var r = a(95155), i = a(12115), l = a(5772), o = a(18310), n = a(80642), s = a(25354), d = a(38158), c = a(78780), h = a(76721), m = a(76142), u = a.n(m);
  let p = (0, i.forwardRef)(function({ children: e2, orientation: t2 = "vertical", fade: a2 = 28, scrollbars: l2 = "auto", hideDelay: o2 = 900, maxHeight: n2, snap: s2, label: d2, wheelToHorizontal: c2 = true, viewportClassName: h2, viewportStyle: m2, viewportRef: p2, onScroll: g2, onEdgeChange: f2, className: w2, ...v2 }, b2) {
    let y2 = (0, i.useRef)(null), _2 = (0, i.useRef)(null), j2 = (0, i.useRef)({ x: null, y: null }), x = (0, i.useRef)({ x: null, y: null }), k = (0, i.useRef)(void 0), A = (0, i.useRef)(""), N = (0, i.useRef)(f2);
    (0, i.useImperativeHandle)(b2, () => y2.current), (0, i.useImperativeHandle)(p2, () => _2.current), (0, i.useEffect)(() => {
      N.current = f2;
    }, [f2]);
    let P = "horizontal" !== t2, C = "vertical" !== t2, M = (0, i.useCallback)(() => {
      let e3 = _2.current, t3 = y2.current;
      if (!e3 || !t3) return;
      let { scrollTop: r2, scrollLeft: i2, scrollHeight: l3, scrollWidth: o3, clientHeight: n3, clientWidth: s3 } = e3, d3 = Math.max(0, l3 - n3), c3 = Math.max(0, o3 - s3), h3 = Math.abs(i2), m3 = { top: P && r2 > 0.5, bottom: P && d3 - r2 > 0.5, left: C && h3 > 0.5, right: C && c3 - h3 > 0.5 };
      a2 > 0 && (e3.style.setProperty("--fade-top", `${P ? Math.min(a2, r2) : 0}px`), e3.style.setProperty("--fade-bottom", `${P ? Math.min(a2, d3 - r2) : 0}px`), e3.style.setProperty("--fade-left", `${C ? Math.min(a2, h3) : 0}px`), e3.style.setProperty("--fade-right", `${C ? Math.min(a2, c3 - h3) : 0}px`));
      let u2 = (e4, t4, a3, r3, i3) => {
        let l4 = j2.current[e4], o4 = x.current[e4];
        if (!l4 || !o4) return;
        let n4 = a3 > 0.5;
        if (l4.toggleAttribute("data-hidden", !n4), !n4) return;
        let s4 = "y" === e4 ? l4.clientHeight : l4.clientWidth, d4 = Math.max(28, s4 * r3 / i3), c4 = t4 / a3 * (s4 - d4);
        o4.style["y" === e4 ? "height" : "width"] = `${d4}px`, o4.style.transform = "y" === e4 ? `translate3d(0, ${c4}px, 0)` : `translate3d(${c4}px, 0, 0)`;
      };
      P && u2("y", r2, d3, n3, l3), C && u2("x", h3, c3, s3, o3), t3.toggleAttribute("data-overflow", d3 > 0.5 || c3 > 0.5);
      let p3 = `${m3.top}${m3.bottom}${m3.left}${m3.right}`;
      p3 !== A.current && (A.current = p3, N.current?.(m3));
    }, [a2, C, P]);
    (0, i.useLayoutEffect)(() => {
      let e3 = _2.current;
      if (!e3 || (M(), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(() => M());
      t3.observe(e3), Array.from(e3.children).forEach((e4) => t3.observe(e4));
      let a3 = new MutationObserver(() => {
        t3.disconnect(), t3.observe(e3), Array.from(e3.children).forEach((e4) => t3.observe(e4)), M();
      });
      return a3.observe(e3, { childList: true }), () => {
        t3.disconnect(), a3.disconnect();
      };
    }, [M]), (0, i.useEffect)(() => () => window.clearTimeout(k.current), []);
    let R = () => {
      let e3 = y2.current;
      e3 && (e3.setAttribute("data-scrolling", ""), window.clearTimeout(k.current), k.current = window.setTimeout(() => e3.removeAttribute("data-scrolling"), o2));
    };
    (0, i.useEffect)(() => {
      let e3 = _2.current;
      if (!e3 || "horizontal" !== t2 || !c2) return;
      let a3 = (t3) => {
        if (t3.ctrlKey || Math.abs(t3.deltaX) >= Math.abs(t3.deltaY)) return;
        let a4 = e3.scrollWidth - e3.clientWidth, r2 = Math.abs(e3.scrollLeft);
        a4 <= 0 || t3.deltaY < 0 && r2 <= 0 || t3.deltaY > 0 && r2 >= a4 - 0.5 || (t3.preventDefault(), e3.scrollLeft += t3.deltaY * ("rtl" === getComputedStyle(e3).direction ? -1 : 1));
      };
      return e3.addEventListener("wheel", a3, { passive: false }), () => e3.removeEventListener("wheel", a3);
    }, [t2, c2]);
    let z = (0, i.useRef)(null), S = (e3) => {
      let t3 = z.current, a3 = _2.current;
      if (!t3 || !a3) return;
      let r2 = (("y" === t3.axis ? e3.clientY : e3.clientX) - t3.start) * t3.ratio;
      "y" === t3.axis ? a3.scrollTop = t3.scroll + r2 : a3.scrollLeft = t3.scroll + r2;
    }, T = (e3) => {
      z.current && (z.current = null, e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.releasePointerCapture(e3.pointerId), y2.current?.removeAttribute("data-dragging"), _2.current && (_2.current.style.scrollSnapType = ""), R());
    }, W = (e3) => (0, r.jsx)("div", { ref: (t3) => {
      j2.current[e3] = t3;
    }, className: u().track, "data-axis": e3, "data-hidden": "", "aria-hidden": "true", onPointerDown: (t3) => ((e4, t4) => {
      let a3 = _2.current, r2 = x.current[t4];
      if (!a3 || !r2 || 0 !== e4.button || e4.target !== e4.currentTarget) return;
      let i2 = r2.getBoundingClientRect(), l3 = "y" === t4 ? e4.clientY < i2.top : e4.clientX < i2.left, o3 = ("y" === t4 ? a3.clientHeight : a3.clientWidth) * 0.9 * (l3 ? -1 : 1), n3 = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      a3.scrollBy({ ["y" === t4 ? "top" : "left"]: o3, behavior: n3 ? "auto" : "smooth" });
    })(t3, e3), children: (0, r.jsx)("div", { ref: (t3) => {
      x.current[e3] = t3;
    }, className: u().thumb, onPointerDown: (t3) => ((e4, t4) => {
      let a3 = _2.current, r2 = j2.current[t4], i2 = x.current[t4];
      if (!a3 || !r2 || !i2 || 0 !== e4.button) return;
      e4.preventDefault(), e4.stopPropagation(), e4.currentTarget.setPointerCapture(e4.pointerId);
      let l3 = "y" === t4 ? r2.clientHeight : r2.clientWidth, o3 = "y" === t4 ? i2.offsetHeight : i2.offsetWidth, n3 = "y" === t4 ? a3.scrollHeight - a3.clientHeight : a3.scrollWidth - a3.clientWidth;
      z.current = { axis: t4, start: "y" === t4 ? e4.clientY : e4.clientX, scroll: "y" === t4 ? a3.scrollTop : a3.scrollLeft, ratio: n3 / Math.max(1, l3 - o3) }, y2.current?.setAttribute("data-dragging", t4), a3.style.scrollSnapType = "none";
    })(t3, e3), onPointerMove: S, onPointerUp: T, onPointerCancel: T }) });
    return (0, r.jsxs)("div", { ref: y2, className: [u().root, w2].filter(Boolean).join(" "), "data-orientation": t2, "data-scrollbars": l2, ...v2, children: [(0, r.jsx)("div", { ref: _2, className: [u().viewport, h2].filter(Boolean).join(" "), "data-fade": a2 > 0 ? t2 : void 0, style: { maxHeight: n2, scrollSnapType: s2, ...m2 }, tabIndex: 0, role: d2 ? "region" : void 0, "aria-label": d2, onScroll: (e3) => {
      M(), R(), g2?.(e3);
    }, children: e2 }), P && W("y"), C && W("x")] });
  });
  var g = a(67752), f = a(7770), w = a(74593), v = a.n(w);
  let b = [{ who: "emma-collins", name: "Emma Collins", text: "approved the onboarding redesign", when: "2m" }, { who: "marcus-johnson", name: "Marcus Johnson", text: "merged fix for the flaky checkout test", when: "9m" }, { who: "chloe-nguyen", name: "Chloe Nguyen", text: "shared the September retention report", when: "21m" }, { who: "daniel-kim", name: "Daniel Kim", text: "rotated the staging API keys", when: "38m" }, { who: "sofia-ramirez", name: "Sofia Ramirez", text: "moved the vendor review to Thursday", when: "1h" }, { who: "jasmine-brooks", name: "Jasmine Brooks", text: "left 4 comments on Pricing page v3", when: "1h" }, { who: "olivia-bennett", name: "Olivia Bennett", text: "scaled the worker pool to 12 nodes", when: "2h" }, { who: "ryan-sullivan", name: "Ryan Sullivan", text: "closed the Northwind renewal", when: "3h" }, { who: "hannah-walsh", name: "Hannah Walsh", text: "resolved 18 support tickets", when: "4h" }, { who: "mateo-alvarez", name: "Mateo Alvarez", text: "published iOS build 4.12 to TestFlight", when: "5h" }, { who: "nathan-cole", name: "Nathan Cole", text: "scheduled the Q4 planning offsite", when: "6h" }, { who: "ava-mitchell", name: "Ava Mitchell", text: "launched the fall email campaign", when: "Yesterday" }], y = [{ id: "living-room", name: "Living room", note: "Oak beams, linen sofas" }, { id: "sunroom", name: "Sunroom", note: "Round table for six" }, { id: "home-office", name: "Study", note: "Green walls, walnut desk" }, { id: "bedroom", name: "Bedroom", note: "Striped linen, oak bed" }, { id: "reading-chair", name: "Reading nook", note: "Armchair and ottoman" }, { id: "pool-house", name: "Pool house", note: "Glass walls, long pool" }];
  function _() {
    let e2 = (0, o.I)(), t2 = (0, i.useRef)(null), a2 = (0, i.useRef)(null), [m2, u2] = (0, i.useState)(null), [w2, _2] = (0, i.useState)(null), j2 = e2 ? "auto" : "smooth", x = (e3) => {
      let t3 = a2.current, r2 = t3?.querySelector("[data-card]");
      t3 && r2 && t3.scrollBy({ left: e3 * (r2.offsetWidth + 12), behavior: j2 });
    };
    return (0, r.jsxs)("div", { className: v().demo, children: [(0, r.jsxs)("section", { className: v().panel, "aria-labelledby": "scroll-area-activity", children: [(0, r.jsxs)("header", { className: v().header, children: [(0, r.jsx)("h3", { id: "scroll-area-activity", className: v().heading, children: "Activity" }), (0, r.jsx)(n.N, { initial: false, children: m2?.top && (0, r.jsxs)(s.PY1.button, { type: "button", className: v().pill, onClick: () => t2.current?.scrollTo({ top: 0, behavior: j2 }), initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: e2 ? { duration: 0 } : f.T.spring.snappy, children: [(0, r.jsx)(d.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Back to top"] }, "top") })] }), (0, r.jsx)(p, { className: v().list, viewportRef: t2, label: "Team activity", onEdgeChange: u2, children: (0, r.jsx)("ul", { className: v().items, children: b.map((e3) => (0, r.jsxs)("li", { className: v().item, children: [(0, r.jsx)(l.default, { className: v().avatar, src: (0, g.my)(e3.who), alt: "", width: 32, height: 32 }), (0, r.jsxs)("p", { className: v().text, children: [(0, r.jsx)("span", { className: v().name, children: e3.name }), " ", e3.text] }), (0, r.jsx)("span", { className: v().when, children: e3.when })] }, `${e3.who}-${e3.when}`)) }) })] }), (0, r.jsxs)("section", { className: v().panel, "aria-labelledby": "scroll-area-rooms", children: [(0, r.jsxs)("header", { className: v().header, children: [(0, r.jsx)("h3", { id: "scroll-area-rooms", className: v().heading, children: "Rooms" }), (0, r.jsxs)("div", { className: v().arrows, children: [(0, r.jsx)("button", { type: "button", className: v().arrow, "aria-label": "Previous rooms", disabled: !w2?.left, onClick: () => x(-1), children: (0, r.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, r.jsx)("button", { type: "button", className: v().arrow, "aria-label": "Next rooms", disabled: !w2?.right, onClick: () => x(1), children: (0, r.jsx)(h.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) })] })] }), (0, r.jsx)(p, { orientation: "horizontal", snap: "x mandatory", viewportRef: a2, label: "Rooms", onEdgeChange: _2, fade: 36, children: (0, r.jsx)("ul", { className: v().rail, children: y.map((e3) => {
      let t3 = (0, g.jW)(e3.id);
      return (0, r.jsxs)("li", { "data-card": true, className: v().card, children: [(0, r.jsx)("span", { className: v().photo, children: (0, r.jsx)(l.default, { src: t3.src, alt: t3.alt, fill: true, sizes: "200px" }) }), (0, r.jsx)("span", { className: v().cardName, children: e3.name }), (0, r.jsx)("span", { className: v().cardNote, children: e3.note })] }, e3.id);
    }) }) })] })] });
  }
  let j = _;
}

__m(__module,__exports,__require);
}