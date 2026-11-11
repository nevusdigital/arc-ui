function(__module,__exports,__require){
"use strict";
function __m(e, r, o) {
  o.d(r, { UC: () => el, Y9: () => ea, q7: () => en, bL: () => et, l9: () => ei });
  var t = o(12115), n = o(68599), a = o(76094), i = o(47527), l = o(70379), c = o(59322), s = o(55897), d = o(66294), u = o(83935), p = o(89971), f = o(95155), v = Object.defineProperty, h = (e2, r2) => v(e2, "name", { value: r2, configurable: true }), g = "Collapsible", [C, b] = (0, n.A)(g), [x, m] = C(g), w = t.forwardRef(h(function(e2, r2) {
    let { __scopeCollapsible: o2, open: n2, defaultOpen: a2, disabled: i2, onOpenChange: l2, ...d2 } = e2, [u2, v2] = (0, c.i)({ prop: n2, defaultProp: a2 ?? false, onChange: l2, caller: g });
    return (0, f.jsx)(x, { scope: o2, disabled: i2, contentId: (0, p.B)(), open: u2, onOpenToggle: t.useCallback(() => v2((e3) => !e3), [v2]), children: (0, f.jsx)(s.sG.div, { "data-state": k(u2), "data-disabled": i2 ? "" : void 0, ...d2, ref: r2 }) });
  }, "Collapsible")), j = t.forwardRef(h(function(e2, r2) {
    let { __scopeCollapsible: o2, ...t2 } = e2, n2 = m("CollapsibleTrigger", o2);
    return (0, f.jsx)(s.sG.button, { type: "button", "aria-controls": n2.open ? n2.contentId : void 0, "aria-expanded": n2.open || false, "data-state": k(n2.open), "data-disabled": n2.disabled ? "" : void 0, disabled: n2.disabled, ...t2, ref: r2, onClick: (0, l.mK)(e2.onClick, n2.onOpenToggle) });
  }, "CollapsibleTrigger")), A = "CollapsibleContent", P = t.forwardRef(h(function(e2, r2) {
    let { forceMount: o2, ...t2 } = e2, n2 = m(A, e2.__scopeCollapsible);
    return (0, f.jsx)(u.C, { present: o2 || n2.open, children: ({ present: e3 }) => (0, f.jsx)(R, { ...t2, ref: r2, present: e3 }) });
  }, "CollapsibleContent")), R = t.forwardRef(h(function(e2, r2) {
    let { __scopeCollapsible: o2, present: n2, children: a2, ...l2 } = e2, c2 = m(A, o2), [u2, p2] = t.useState(n2), v2 = t.useRef(null), h2 = (0, i.s)(r2, v2), g2 = t.useRef(0), C2 = g2.current, b2 = t.useRef(0), x2 = b2.current, w2 = c2.open || u2, j2 = t.useRef(w2), P2 = t.useRef(void 0);
    return t.useEffect(() => {
      let e3 = requestAnimationFrame(() => j2.current = false);
      return () => cancelAnimationFrame(e3);
    }, []), (0, d.N)(() => {
      let e3 = v2.current;
      if (e3) {
        P2.current = P2.current || { transitionDuration: e3.style.transitionDuration, animationName: e3.style.animationName }, e3.style.transitionDuration = "0s", e3.style.animationName = "none";
        let r3 = e3.getBoundingClientRect();
        g2.current = r3.height, b2.current = r3.width, j2.current || (e3.style.transitionDuration = P2.current.transitionDuration, e3.style.animationName = P2.current.animationName), p2(n2);
      }
    }, [c2.open, n2]), (0, f.jsx)(s.sG.div, { "data-state": k(c2.open), "data-disabled": c2.disabled ? "" : void 0, id: c2.contentId, hidden: !w2, ...l2, ref: h2, style: { "--radix-collapsible-content-height": C2 ? `${C2}px` : void 0, "--radix-collapsible-content-width": x2 ? `${x2}px` : void 0, ...e2.style }, children: w2 && a2 });
  }, "CollapsibleContentImpl"));
  function k(e2) {
    return e2 ? "open" : "closed";
  }
  h(k, "getState");
  var y = o(1933), I = Object.defineProperty, O = (e2, r2) => I(e2, "name", { value: r2, configurable: true }), _ = "Accordion", D = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [E, F, M] = (0, a.N)(_), [L, N] = (0, n.A)(_, [M, b]), S = b(), T = t.forwardRef(O(function(e2, r2) {
    let { type: o2, ...t2 } = e2;
    return (0, f.jsx)(E.Provider, { scope: e2.__scopeAccordion, children: "multiple" === o2 ? (0, f.jsx)(q, { ...t2, ref: r2 }) : (0, f.jsx)(B, { ...t2, ref: r2 }) });
  }, "Accordion")), [K, G] = L(_), [U, z] = L(_, { collapsible: false }), B = t.forwardRef(O(function(e2, r2) {
    let { value: o2, defaultValue: n2, onValueChange: a2 = O(() => {
    }, "onValueChange"), collapsible: i2 = false, ...l2 } = e2, [s2, d2] = (0, c.i)({ prop: o2, defaultProp: n2 ?? "", onChange: a2, caller: _ });
    return (0, f.jsx)(K, { scope: e2.__scopeAccordion, value: t.useMemo(() => s2 ? [s2] : [], [s2]), onItemOpen: d2, onItemClose: t.useCallback(() => i2 && d2(""), [i2, d2]), children: (0, f.jsx)(U, { scope: e2.__scopeAccordion, collapsible: i2, children: (0, f.jsx)(V, { ...l2, ref: r2 }) }) });
  }, "AccordionImplSingle")), q = t.forwardRef(O(function(e2, r2) {
    let { value: o2, defaultValue: n2, onValueChange: a2 = O(() => {
    }, "onValueChange"), ...i2 } = e2, [l2, s2] = (0, c.i)({ prop: o2, defaultProp: n2 ?? [], onChange: a2, caller: _ }), d2 = t.useCallback((e3) => s2((r3 = []) => [...r3, e3]), [s2]), u2 = t.useCallback((e3) => s2((r3 = []) => r3.filter((r4) => r4 !== e3)), [s2]);
    return (0, f.jsx)(K, { scope: e2.__scopeAccordion, value: l2, onItemOpen: d2, onItemClose: u2, children: (0, f.jsx)(U, { scope: e2.__scopeAccordion, collapsible: true, children: (0, f.jsx)(V, { ...i2, ref: r2 }) }) });
  }, "AccordionImplMultiple")), [H, Z] = L(_), V = t.forwardRef(O(function(e2, r2) {
    let { __scopeAccordion: o2, disabled: n2, dir: a2, orientation: c2 = "vertical", ...d2 } = e2, u2 = t.useRef(null), p2 = (0, i.s)(u2, r2), v2 = F(o2), h2 = "ltr" === (0, y.jH)(a2), g2 = (0, l.mK)(e2.onKeyDown, (e3) => {
      if (!D.includes(e3.key)) return;
      let r3 = e3.target, o3 = v2().filter((e4) => !e4.ref.current?.disabled), t2 = o3.findIndex((e4) => e4.ref.current === r3), n3 = o3.length;
      if (-1 === t2) return;
      e3.preventDefault();
      let a3 = t2, i2 = n3 - 1, l2 = O(() => {
        (a3 = t2 + 1) > i2 && (a3 = 0);
      }, "moveNext"), s2 = O(() => {
        (a3 = t2 - 1) < 0 && (a3 = i2);
      }, "movePrev");
      switch (e3.key) {
        case "Home":
          a3 = 0;
          break;
        case "End":
          a3 = i2;
          break;
        case "ArrowRight":
          "horizontal" === c2 && (h2 ? l2() : s2());
          break;
        case "ArrowDown":
          "vertical" === c2 && l2();
          break;
        case "ArrowLeft":
          "horizontal" === c2 && (h2 ? s2() : l2());
          break;
        case "ArrowUp":
          "vertical" === c2 && s2();
      }
      let d3 = a3 % n3;
      o3[d3].ref.current?.focus();
    });
    return (0, f.jsx)(H, { scope: o2, disabled: n2, direction: a2, orientation: c2, children: (0, f.jsx)(E.Slot, { scope: o2, children: (0, f.jsx)(s.sG.div, { ...d2, "data-orientation": c2, ref: p2, onKeyDown: n2 ? void 0 : g2 }) }) });
  }, "AccordionImpl")), W = "AccordionItem", [$, Y] = L(W), J = t.forwardRef(O(function(e2, r2) {
    let { __scopeAccordion: o2, value: t2, ...n2 } = e2, a2 = Z(W, o2), i2 = G(W, o2), l2 = S(o2), c2 = (0, p.B)(), s2 = t2 && i2.value.includes(t2) || false, d2 = a2.disabled || e2.disabled;
    return (0, f.jsx)($, { scope: o2, open: s2, disabled: d2, triggerId: c2, children: (0, f.jsx)(w, { "data-orientation": a2.orientation, "data-state": eo(s2), ...l2, ...n2, ref: r2, disabled: d2, open: s2, onOpenChange: (e3) => {
      e3 ? i2.onItemOpen(t2) : i2.onItemClose(t2);
    } }) });
  }, "AccordionItem")), Q = t.forwardRef(O(function(e2, r2) {
    let { __scopeAccordion: o2, ...t2 } = e2, n2 = Z(_, o2), a2 = Y("AccordionHeader", o2);
    return (0, f.jsx)(s.sG.h3, { "data-orientation": n2.orientation, "data-state": eo(a2.open), "data-disabled": a2.disabled ? "" : void 0, ...t2, ref: r2 });
  }, "AccordionHeader")), X = "AccordionTrigger", ee = t.forwardRef(O(function(e2, r2) {
    let { __scopeAccordion: o2, ...t2 } = e2, n2 = Z(_, o2), a2 = Y(X, o2), i2 = z(X, o2), l2 = S(o2);
    return (0, f.jsx)(E.ItemSlot, { scope: o2, children: (0, f.jsx)(j, { "aria-disabled": a2.open && !i2.collapsible || void 0, "data-orientation": n2.orientation, id: a2.triggerId, ...l2, ...t2, ref: r2 }) });
  }, "AccordionTrigger")), er = t.forwardRef(O(function(e2, r2) {
    let { __scopeAccordion: o2, ...t2 } = e2, n2 = Z(_, o2), a2 = Y("AccordionContent", o2), i2 = S(o2);
    return (0, f.jsx)(P, { role: "region", "aria-labelledby": a2.triggerId, "data-orientation": n2.orientation, ...i2, ...t2, ref: r2, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...e2.style } });
  }, "AccordionContent"));
  function eo(e2) {
    return e2 ? "open" : "closed";
  }
  O(eo, "getState");
  var et = T, en = J, ea = Q, ei = ee, el = er;
}

__m(__module,__exports,__require);
}