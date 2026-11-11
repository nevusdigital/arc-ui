function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ExpandableTextDemo: () => w, default: () => k });
  var r = a(95155), n = a(5772), l = a(95697), s = a(92218), i = a(12115), o = a(12363), d = a(18310), c = a(28245), u = a(55809), p = a(92171), h = a(25354), f = a(71622), m = a.n(f);
  let x = () => () => {
  }, _ = [0.32, 0.5, 0.2, 1];
  function g({ children: e2, lines: t2 = 3, expanded: a2, defaultExpanded: n2 = false, onExpandedChange: l2, moreLabel: s2 = "Read more", lessLabel: f2 = "Show less", className: v2, style: b2, ...y2 }) {
    let j2, w2, [k2, N] = (0, i.useState)(n2), R = a2 ?? k2, [A, M] = (0, i.useState)(true), [T, C] = (0, i.useState)(false), [z, I] = (0, i.useState)(R), P = (j2 = (0, i.useSyncExternalStore)(x, () => true, () => false), w2 = (0, d.I)() ?? false, j2 && w2), E = (0, i.useId)(), O = (0, i.useRef)(null), S = (0, i.useRef)(null), B = (0, i.useRef)(null), L = (0, i.useRef)(null), W = (0, i.useRef)(0), G = (0, i.useRef)({ from: 0, to: 0 }), V = (0, i.useRef)(null), H = (0, i.useRef)(R), $ = (0, c.d)(+!!R), q = (0, c.d)("auto"), J = (0, u.G)($, [0, 1], [0, 180]), D = (0, u.G)($, (e3) => {
      let t3 = Math.pow(1 - Math.min(Math.max(e3, 0), 1), 1.35);
      return t3 <= 2e-3 ? "none" : `linear-gradient(to bottom, #000 calc(100% - 1.6lh), rgb(0 0 0 / ${(1 - 0.96 * t3).toFixed(3)}) 100%)`;
    });
    (0, i.useEffect)(() => $.on("change", (e3) => {
      if (!V.current) return;
      let { from: t3, to: a3 } = G.current;
      q.set(t3 + (a3 - t3) * e3);
    }), [$, q]), (0, i.useLayoutEffect)(() => {
      let e3 = L.current, t3 = B.current;
      if (!e3 || !t3) return;
      let a3 = () => {
        W.current = e3.getBoundingClientRect().height, M(t3.getBoundingClientRect().height > W.current + 1);
      };
      if (a3(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(a3);
      return r2.observe(e3), r2.observe(t3), () => r2.disconnect();
    }, [t2]), (0, i.useLayoutEffect)(() => {
      if (H.current === R) return;
      H.current = R;
      let e3 = S.current, t3 = B.current;
      if (V.current?.stop(), V.current = null, !e3 || !t3 || P) {
        $.set(+!!R), q.set("auto"), C(false), I(R);
        return;
      }
      let a3 = t3.getBoundingClientRect().height, r2 = Math.min(W.current, a3), n3 = e3.getBoundingClientRect().height;
      G.current = { from: r2, to: a3 };
      let l3 = Math.max(a3 - r2, 1);
      $.jump(Math.min(Math.max((n3 - r2) / l3, 0), 1)), e3.style.height = `${n3}px`, q.set(n3), C(true);
      let s3 = +!!R, i2 = Math.abs(s3 - $.get()) * l3;
      V.current = (0, p.i)($, s3, { duration: R ? 0.5 + Math.min(i2 / 1600, 0.1) : 0.4 + Math.min(i2 / 2e3, 0.05), ease: [..._], onComplete: () => {
        V.current = null, q.set("auto"), C(false), I(R);
      } });
    }, [R, P, $, q]), (0, i.useEffect)(() => () => V.current?.stop(), []);
    let K = (e3) => {
      if (e3 === R) return;
      let t3 = O.current;
      !e3 && t3 && t3.getBoundingClientRect().top < 0 && t3.scrollIntoView({ block: "start", behavior: P ? "auto" : "smooth" }), void 0 === a2 && N(e3), l2?.(e3);
    }, Y = !z && !T && A, X = A && (!z || T);
    return (0, r.jsxs)("div", { ...y2, ref: O, onFocusCapture: (e3) => {
      if (y2.onFocusCapture?.(e3), R || !A || e3.target === S.current || !S.current?.contains(e3.target)) return;
      let t3 = S.current?.getBoundingClientRect(), a3 = e3.target.getBoundingClientRect();
      t3 && a3.bottom > t3.bottom + 1 && K(true);
    }, className: [m().root, v2].filter(Boolean).join(" "), style: { ...b2, "--expandable-text-lines": t2 }, children: [(0, r.jsxs)(h.PY1.div, { ref: S, id: E, className: m().content, "data-clamped": Y ? "" : void 0, style: { height: q, WebkitMaskImage: X ? D : "none", maskImage: X ? D : "none" }, children: [(0, r.jsx)("span", { ref: L, className: m().probe, "aria-hidden": "true" }), (0, r.jsx)("div", { ref: B, className: m().inner, children: e2 })] }), A && (0, r.jsxs)("button", { type: "button", className: m().toggle, "aria-expanded": R, "aria-controls": E, onClick: () => K(!R), children: [(0, r.jsxs)("span", { className: m().labels, children: [(0, r.jsx)("span", { className: m().label, "data-active": !R || void 0, "aria-hidden": R || void 0, children: s2 }), (0, r.jsx)("span", { className: m().label, "data-active": R || void 0, "aria-hidden": !R || void 0, children: f2 })] }), (0, r.jsx)(h.PY1.span, { className: m().icon, "aria-hidden": "true", style: { rotate: J }, children: (0, r.jsx)(o.A, { width: 16, height: 16, strokeWidth: 1.75 }) })] })] });
  }
  var v = a(96236), b = a.n(v);
  let y = [{ name: "Hannah Walsh", photo: "media/people/hannah-walsh.svg", date: "Sep 18", rating: 5, title: "The glaze is even better in person", body: ["I bought two sets after holding one at a friend's place, and they have quietly replaced every other mug in the cupboard. The speckled glaze pools slightly darker near the base, so each one looks a little different under morning light.", "They hold a proper 300 ml flat white with room to spare, stay warm for longer than my old porcelain cups, and the unglazed foot sits steady on the table. Two months of daily dishwasher runs and there is not a single chip or crack on any of them."] }, { name: "Daniel Kim", photo: "media/people/daniel-kim.svg", date: "Sep 9", rating: 4, title: "Lovely weight, small handle", body: ["Beautifully made and heavier than they look, which I like. The handle only fits two fingers, so if you have larger hands you will end up holding the body of the cup instead. It does keep the heat, though, so I use a saucer."] }, { name: "Sofia Ramirez", photo: "media/people/sofia-ramirez.svg", date: "Aug 30", rating: 5, title: "Arrived fast", body: ["Well packed and arrived in two days. Exactly as pictured."] }];
  function j({ value: e2 }) {
    return (0, r.jsx)("span", { className: b().rating, role: "img", "aria-label": `${e2} out of 5 stars`, children: Array.from({ length: 5 }, (t2, a2) => (0, r.jsx)(l.A, { width: 13, height: 13, strokeWidth: 1.75, "aria-hidden": "true", className: a2 < e2 ? b().starOn : b().starOff }, a2)) });
  }
  function w() {
    return (0, r.jsxs)("div", { className: b().demo, children: [(0, r.jsxs)("article", { className: b().product, children: [(0, r.jsx)("div", { className: b().photo, children: (0, r.jsx)(n.default, { src: "media/photos/stoneware-cups.jpg", alt: "Two speckled stoneware cups, one with its lid resting against it", fill: true, sizes: "(max-width: 520px) 100vw, 176px" }) }), (0, r.jsxs)("div", { className: b().productCopy, children: [(0, r.jsxs)("div", { className: b().productHead, children: [(0, r.jsx)("h3", { className: b().productName, children: "Speckled stoneware cup" }), (0, r.jsxs)("p", { className: b().price, children: ["$38 ", (0, r.jsx)("span", { children: "set of two" })] })] }), (0, r.jsxs)(g, { lines: 3, children: [(0, r.jsx)("p", { children: "Thrown by hand in a small studio outside Porto, each cup is made from a coarse local stoneware that fires to a warm oatmeal tone. A satin glaze breaks over the iron speckles in the clay, so no two cups in a set are quite alike." }), (0, r.jsx)("p", { children: "They hold 300 ml, which suits a flat white, a long black, or a generous pour of tea. The rim is rolled thin for drinking, the walls are thick enough to keep coffee warm, and the unglazed foot is sanded smooth so it will not scratch a table." }), (0, r.jsx)("p", { children: "Dishwasher and microwave safe. Because every cup is made by hand, sizes can vary by a few millimetres and small marks from the kiln are part of the piece." })] })] })] }), (0, r.jsxs)("section", { className: b().reviews, "aria-label": "Reviews", children: [(0, r.jsxs)("h3", { className: b().reviewsTitle, children: ["Reviews ", (0, r.jsx)("span", { children: "4.7 from 128" })] }), (0, r.jsx)("ul", { className: b().list, children: y.map((e2) => (0, r.jsxs)("li", { className: b().review, children: [(0, r.jsxs)("div", { className: b().author, children: [(0, r.jsx)(s.e, { name: e2.name, src: e2.photo, size: "sm" }), (0, r.jsx)("span", { className: b().name, children: e2.name }), (0, r.jsx)("span", { className: b().date, children: e2.date })] }), (0, r.jsxs)("div", { className: b().reviewHead, children: [(0, r.jsx)(j, { value: e2.rating }), (0, r.jsx)("span", { className: b().reviewTitle, children: e2.title })] }), (0, r.jsx)(g, { lines: 2, children: e2.body.map((e3) => (0, r.jsx)("p", { children: e3 }, e3.slice(0, 24))) })] }, e2.name)) })] })] });
  }
  let k = w;
}

__m(__module,__exports,__require);
}