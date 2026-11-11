function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { p: () => W });
  var n = a(95155), r = a(12115), i = a(25354), s = a(80642), l = a(18310), o = a(92171), d = a(57700), c = a(9005), u = a(65377), h = a(94088), p = a(12363), m = a(65342), y = a(53896), _ = a(76721), f = a(99314), v = a(51128), j = a(7770), w = a(52194), x = a.n(w);
  let k = /^[A-Za-z_$][\w$]*$/;
  function b(e2) {
    if (null === e2) return "null";
    if (Array.isArray(e2)) return "array";
    switch (typeof e2) {
      case "object":
        return "object";
      case "string":
        return "string";
      case "number":
      case "bigint":
        return "number";
      case "boolean":
        return "boolean";
      default:
        return "other";
    }
  }
  let g = (e2) => "object" === e2 || "array" === e2;
  function N(e2) {
    return Array.isArray(e2) ? e2.map((e3, t2) => [t2, e3]) : e2 && "object" == typeof e2 ? Object.entries(e2) : [];
  }
  let C = (e2, t2) => "number" == typeof t2 ? `${e2}[${t2}]` : k.test(t2) ? `${e2}.${t2}` : `${e2}[${JSON.stringify(t2)}]`, S = (e2, t2) => t2 === e2 || t2.startsWith(`${e2}.`) || t2.startsWith(`${e2}[`);
  function $(e2, t2) {
    return "string" === t2 ? e2 : "null" === t2 ? "null" : String(e2);
  }
  let A = (e2, t2, a2) => `${e2} ${1 === e2 ? t2 : a2}`, L = (e2) => "array" === e2.type ? A(e2.count, "item", "items") : A(e2.count, "key", "keys");
  function M(e2, t2, a2) {
    let n2 = [], r2 = /* @__PURE__ */ new Set(), i2 = /* @__PURE__ */ new Map(), s2 = [], l2 = (e3, t3, o2) => {
      if (n2.length >= 2e3) return;
      let d2 = b(e3), c2 = "string" == typeof o2 && o2.toLowerCase().includes(a2), u2 = !g(d2) && $(e3, d2).toLowerCase().includes(a2);
      if (c2 || u2) for (let [e4, a3] of (n2.push(t3), s2)) r2.add(e4), i2.set(e4, Math.max(i2.get(e4) ?? 0, a3 + 1));
      g(d2) && N(e3).forEach(([e4, a3], n3) => {
        s2.push([t3, n3]), l2(a3, C(t3, e4), e4), s2.pop();
      });
    };
    return l2(e2, t2, null), { matches: n2, ancestors: r2, needed: i2 };
  }
  function T({ text: e2, needle: t2, current: a2 }) {
    if (!t2) return (0, n.jsx)(n.Fragment, { children: e2 });
    let r2 = e2.toLowerCase(), i2 = [], s2 = 0, l2 = r2.indexOf(t2);
    for (; -1 !== l2; ) l2 > s2 && i2.push(e2.slice(s2, l2)), i2.push((0, n.jsx)("mark", { className: x().mark, "data-current": a2 || void 0, children: e2.slice(l2, l2 + t2.length) }, l2)), s2 = l2 + t2.length, l2 = r2.indexOf(t2, s2);
    return s2 < e2.length && i2.push(e2.slice(s2)), (0, n.jsx)(n.Fragment, { children: i2 });
  }
  function z({ label: e2, icon: t2, onCopy: a2, reduced: l2, className: o2, focusable: d2 = false }) {
    let [u2, h2] = (0, r.useState)("idle"), p2 = (0, r.useRef)(0);
    (0, r.useEffect)(() => () => window.clearTimeout(p2.current), []);
    let m2 = async () => {
      window.clearTimeout(p2.current);
      try {
        await a2(), h2("done");
      } catch {
        h2("error");
      }
      p2.current = window.setTimeout(() => h2("idle"), 1400);
    }, y2 = "done" === u2 ? (0, n.jsx)("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: (0, n.jsx)(i.PY1.path, { d: "M4 12l5 5L20 6", initial: !l2 && { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.22, ease: [...j.T.ease.standard], delay: 0.04 } }) }) : "error" === u2 ? (0, n.jsx)(c.A, { size: 14, strokeWidth: 2, "aria-hidden": "true" }) : t2;
    return (0, n.jsx)("button", { type: "button", tabIndex: d2 ? void 0 : -1, className: [x().action, o2].filter(Boolean).join(" "), "data-state": u2, "aria-label": "done" === u2 ? "Copied" : "error" === u2 ? "Copy failed" : e2, title: e2, onClick: (e3) => {
      e3.stopPropagation(), m2();
    }, children: (0, n.jsx)(s.N, { initial: false, mode: "popLayout", children: (0, n.jsx)(i.PY1.span, { className: x().actionGlyph, initial: l2 ? { opacity: 0 } : { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, transition: { duration: 0.1 * !l2, ease: [...j.T.ease.standard] } }, transition: { duration: 0.16 * !l2, ease: [...j.T.ease.standard] }, children: y2 }, u2) }) });
  }
  async function E(e2) {
    await E(e2);
  }
  let R = j.T.spring.smooth, W = (0, r.forwardRef)(function({ data: e2, rootName: t2 = "root", defaultExpandDepth: a2 = 1, expanded: c2, defaultExpanded: w2, onExpandedChange: k2, searchable: A2 = true, query: W2, defaultQuery: D = "", onQueryChange: O, pageSize: I = 50, copyable: K = true, onCopy: P, onSelect: B, showPath: F = true, maxHeight: U = 420, label: Y = "JSON", className: H }, q) {
    let J = !!(0, l.I)(), Z = (0, r.useId)(), G = (0, r.useRef)(null), Q = (0, r.useRef)(null), V = (0, r.useRef)(/* @__PURE__ */ new Map()), [X, ee] = (0, r.useState)(() => {
      let n2, r2;
      return w2 ?? (n2 = [], (r2 = (e3, t3, i2) => {
        if (!(i2 >= a2) && g(b(e3))) for (let [a3, s2] of (n2.push(t3), N(e3))) r2(s2, C(t3, a3), i2 + 1);
      })(e2, t2, 0), n2);
    }), et = c2 ?? X, ea = (0, r.useMemo)(() => new Set(et), [et]), en = (0, r.useCallback)((e3) => {
      let t3 = [...e3];
      void 0 === c2 && ee(t3), k2?.(t3);
    }, [c2, k2]), [er, ei] = (0, r.useState)(D), es = W2 ?? er, el = es.trim().toLowerCase(), eo = (0, r.useMemo)(() => el ? M(e2, t2, el) : null, [e2, el, t2]), [ed, ec] = (0, r.useState)({ needle: "", ids: /* @__PURE__ */ new Set() }), eu = ed.needle === el ? ed.ids : null, [eh, ep] = (0, r.useState)(0), em = eo?.matches.length ?? 0, ey = (0, r.useMemo)(() => new Set(eo?.matches ?? []), [eo]), e_ = eo && em ? eo.matches[Math.min(eh, em - 1)] : null, ef = (0, r.useCallback)((e3) => eo && eo.ancestors.has(e3) ? !eu?.has(e3) : ea.has(e3), [ea, eu, eo]), [ev, ej] = (0, r.useState)({}), ew = (0, r.useCallback)((e3) => Math.max((ev[e3] ?? 1) * I, eo?.needed.get(e3) ?? 0), [I, ev, eo]), ex = (0, r.useMemo)(() => {
      let a3 = [], n2 = (e3, t3, r2, i2, s2, l2, o2) => {
        let d2 = b(e3), c3 = g(d2) ? N(e3) : [], u2 = g(d2) && ef(t3);
        if (a3.push({ id: t3, kind: "node", level: i2, name: r2, value: e3, type: d2, count: c3.length, open: u2, parent: s2, posinset: l2, setsize: o2 }), !u2) return;
        let h2 = ew(t3), p2 = c3.slice(0, h2), m2 = c3.length - p2.length, y2 = p2.length + +(m2 > 0);
        p2.forEach(([e4, a4], r3) => n2(a4, C(t3, e4), e4, i2 + 1, t3, r3 + 1, y2)), m2 > 0 && a3.push({ id: `${t3}::more`, kind: "more", level: i2 + 1, name: null, value: null, type: "other", count: 0, open: false, parent: t3, posinset: y2, setsize: y2, hidden: m2 });
      };
      return n2(e2, t2, null, 1, null, 1, 1), a3;
    }, [e2, ef, ew, t2]), [ek, eb] = (0, r.useState)(t2), eg = (0, r.useMemo)(() => {
      if (ex.some((e4) => e4.id === ek)) return ek;
      let e3 = t2;
      for (let t3 of ex) "node" === t3.kind && S(t3.id, ek) && t3.id.length > e3.length && (e3 = t3.id);
      return e3;
    }, [ek, t2, ex]), eN = Math.max(0, ex.findIndex((e3) => e3.id === eg)), eC = eg !== ek, eS = ex[eN], e$ = (0, r.useRef)(B);
    (0, r.useEffect)(() => {
      e$.current = B;
    }, [B]);
    let eA = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      eS && "node" === eS.kind && eA.current !== eS.id && (eA.current = eS.id, e$.current?.({ path: eS.id, value: eS.value, type: eS.type }));
    }, [eS]);
    let eL = (0, r.useRef)(null), eM = (0, r.useCallback)((e3, t3) => {
      let a3 = G.current;
      if (!a3) return;
      let n2 = 30 * e3, r2 = n2 + 30, i2 = a3.clientHeight, s2 = a3.scrollTop, l2 = s2;
      if (t3 ? l2 = n2 - i2 / 2 + 15 : n2 < s2 + 4 ? l2 = n2 - 4 : r2 > s2 + i2 - 4 && (l2 = r2 - i2 + 4), !(1 > Math.abs((l2 = Math.max(0, l2)) - s2))) {
        if (eL.current?.stop(), J) {
          a3.scrollTop = l2;
          return;
        }
        eL.current = (0, o.i)(s2, l2, { ...R, onUpdate: (e4) => {
          a3.scrollTop = e4;
        } });
      }
    }, [J]);
    (0, r.useEffect)(() => () => eL.current?.stop(), []);
    let eT = (0, r.useRef)(false), ez = (0, r.useRef)(null), [eE, eR] = (0, r.useState)(0);
    (0, r.useEffect)(() => {
      eT.current && (eT.current = false, V.current.get(eg)?.focus({ preventScroll: true })), ez.current && (eM(eN, "center" === ez.current), ez.current = null);
    }, [eg, eN, eM, eE]);
    let eW = (e3, t3 = true, a3 = "nearest") => {
      eT.current = t3, ez.current = a3, eb(e3), eR((e4) => e4 + 1);
    }, eD = (e3, t3) => {
      let a3 = ef(e3), n2 = t3 ?? !a3;
      if (n2 === a3) return;
      if (eo?.ancestors.has(e3)) {
        let t4 = new Set(eu ?? []);
        n2 ? t4.delete(e3) : t4.add(e3), ec({ needle: el, ids: t4 }), n2 && !ea.has(e3) && en(new Set(ea).add(e3));
        return;
      }
      let r2 = new Set(ea);
      n2 ? r2.add(e3) : r2.delete(e3), en(r2);
    }, eO = (e3) => ej((t3) => ({ ...t3, [e3]: Math.ceil(ew(e3) / I) + 1 })), [eI, eK] = (0, r.useState)(""), eP = async (e3, t3) => {
      var a3, n2;
      let r2 = "path" === t3 ? e3.id : (a3 = e3.value, "string" === (n2 = e3.type) ? a3 : g(n2) ? JSON.stringify(a3, null, 2) : $(a3, n2));
      try {
        await E(r2), eK(`Copied ${"path" === t3 ? "path" : "value of"} ${e3.id}`), P?.({ kind: t3, path: e3.id, text: r2 });
      } catch (e4) {
        throw eK("Copy failed"), e4;
      }
    }, eB = (e3) => {
      if (!eo || !em) return;
      let t3 = ((Math.min(eh, em - 1) + e3) % em + em) % em;
      ep(t3), eW(eo.matches[t3], false, "center");
    }, eF = (a3) => {
      void 0 === W2 && ei(a3), O?.(a3), ep(0);
      let n2 = a3.trim().toLowerCase();
      if (n2) {
        let a4 = M(e2, t2, n2).matches[0];
        a4 && eW(a4, false, "center");
      } else el && eW(ek, false, "nearest");
    }, eU = { "--json-max-height": "number" == typeof U ? `${U}px` : U }, eY = ex.length > 400, eH = J || eY ? { duration: 0 } : { height: j.T.spring.smooth, opacity: { duration: j.T.duration.fast, ease: [...j.T.ease.standard] } };
    return (0, n.jsxs)("div", { ref: q, className: [x().root, H].filter(Boolean).join(" "), style: eU, children: [A2 || ex.length > 1 ? (0, n.jsxs)("div", { className: x().toolbar, children: [A2 ? (0, n.jsxs)("label", { className: x().search, children: [(0, n.jsx)(u.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true", className: x().searchIcon }), (0, n.jsx)("input", { ref: Q, type: "search", className: x().input, value: es, placeholder: "Search keys and values", "aria-label": "Search JSON", "aria-controls": `${Z}-tree`, onChange: (e3) => eF(e3.target.value), onKeyDown: (e3) => {
      "Enter" === e3.key ? (e3.preventDefault(), eB(e3.shiftKey ? -1 : 1)) : "Escape" === e3.key && es ? (e3.preventDefault(), e3.stopPropagation(), eF("")) : "ArrowDown" !== e3.key || e3.altKey || (e3.preventDefault(), eW(eg, true));
    }, spellCheck: false, autoComplete: "off" }), (0, n.jsx)(s.N, { initial: false, children: el ? (0, n.jsxs)(i.PY1.span, { className: x().matches, initial: J ? { opacity: 0 } : { opacity: 0, x: 6 }, animate: { opacity: 1, x: 0 }, exit: J ? { opacity: 0 } : { opacity: 0, x: 6 }, transition: { duration: j.T.duration.fast, ease: [...j.T.ease.enter] }, children: [(0, n.jsx)("span", { className: x().count, "aria-live": "polite", children: em ? `${Math.min(eh, em - 1) + 1}/${em}` : "0/0" }), (0, n.jsx)("button", { type: "button", className: x().tool, "aria-label": "Previous match", disabled: !em, onClick: () => eB(-1), children: (0, n.jsx)(h.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, n.jsx)("button", { type: "button", className: x().tool, "aria-label": "Next match", disabled: !em, onClick: () => eB(1), children: (0, n.jsx)(p.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }) })] }, "matches") : null })] }) : (0, n.jsx)("span", { className: x().grow }), (0, n.jsx)("span", { className: x().divider, "aria-hidden": "true" }), (0, n.jsx)("button", { type: "button", className: x().tool, "aria-label": "Expand all", title: "Expand all", onClick: () => {
      let a3, n2;
      en(new Set((a3 = [], (n2 = (e3, t3) => {
        if (g(b(e3))) for (let [r2, i2] of (a3.push(t3), N(e3))) n2(i2, C(t3, r2));
      })(e2, t2), a3))), ec({ needle: el, ids: /* @__PURE__ */ new Set() }), eW(eg, false, "nearest");
    }, children: (0, n.jsx)(m.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, n.jsx)("button", { type: "button", className: x().tool, "aria-label": "Collapse all", title: "Collapse all", onClick: () => {
      en(new Set(g(b(e2)) ? [t2] : [])), ec({ needle: el, ids: new Set([...eo?.ancestors ?? []].filter((e3) => e3 !== t2)) }), ej({}), eW(t2, false, "nearest");
    }, children: (0, n.jsx)(y.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }) })] }) : null, (0, n.jsx)(d.o, { id: Z, children: (0, n.jsx)(i.PY1.div, { ref: G, layoutScroll: true, id: `${Z}-tree`, role: "tree", "aria-label": Y, className: x().tree, onKeyDown: (e3) => {
      let t3 = ex[eN];
      if (!t3 || e3.altKey) return;
      let a3 = e3.metaKey || e3.ctrlKey;
      if (a3 && "c" === e3.key.toLowerCase()) {
        "node" !== t3.kind || window.getSelection()?.toString() || (e3.preventDefault(), eP(t3, e3.shiftKey ? "path" : "value").catch(() => {
        }));
        return;
      }
      if (a3) return;
      let n2 = (t4) => {
        e3.preventDefault();
        let a4 = ex[Math.max(0, Math.min(ex.length - 1, t4))];
        a4 && eW(a4.id);
      };
      switch (e3.key) {
        case "ArrowDown":
          n2(eN + 1);
          break;
        case "ArrowUp":
          n2(eN - 1);
          break;
        case "Home":
          n2(0);
          break;
        case "End":
          n2(ex.length - 1);
          break;
        case "ArrowRight":
          e3.preventDefault(), "node" === t3.kind && g(t3.type) && (t3.open ? t3.count && n2(eN + 1) : eD(t3.id, true));
          break;
        case "ArrowLeft":
          e3.preventDefault(), "node" === t3.kind && t3.open ? eD(t3.id, false) : t3.parent && eW(t3.parent);
          break;
        case "Enter":
        case " ":
          e3.preventDefault(), "more" === t3.kind ? eO(t3.parent) : g(t3.type) && eD(t3.id);
          break;
        case "/":
          A2 && (e3.preventDefault(), Q.current?.focus(), Q.current?.select());
      }
    }, children: (0, n.jsx)(s.N, { initial: false, children: ex.map((e3) => {
      let a3, r2 = e3.id === eg, s2 = g(e3.type), l2 = !!eo && "node" === e3.kind && ey.has(e3.id), o2 = e3.id === e_, d2 = l2 ? el : "";
      return (0, n.jsxs)(i.PY1.div, { ref: (t3) => {
        t3 ? V.current.set(e3.id, t3) : V.current.delete(e3.id);
      }, role: "treeitem", tabIndex: r2 ? 0 : -1, "aria-level": e3.level, "aria-posinset": e3.posinset, "aria-setsize": e3.setsize, "aria-expanded": "node" === e3.kind && s2 ? e3.open : void 0, "aria-selected": r2, "aria-label": (a3 = null === e3.name ? t2 : String(e3.name), "more" === e3.kind ? `Show ${Math.min(I, e3.hidden ?? 0)} more, ${e3.hidden} hidden` : g(e3.type) ? `${a3}, ${e3.type}, ${L(e3)}` : `${a3}: ${$(e3.value, e3.type)}`), className: x().row, "data-kind": e3.kind, "data-active": r2 || void 0, style: { "--level": e3.level - 1 }, initial: { height: 0, opacity: 0, overflow: "hidden" }, animate: { height: 30, opacity: 1, transitionEnd: { overflow: "visible" } }, exit: { height: 0, opacity: 0, overflow: "hidden" }, transition: eH, onFocus: (t3) => {
        t3.target === t3.currentTarget && e3.id !== eg && eb(e3.id);
      }, onClick: () => {
        if ("more" === e3.kind) {
          eO(e3.parent), eW(e3.id);
          return;
        }
        s2 && eD(e3.id), eW(e3.id);
      }, children: [r2 ? (0, n.jsx)(i.PY1.span, { layoutId: "json-active", className: x().highlight, transition: J || eC ? { duration: 0 } : R, "aria-hidden": "true" }) : null, (0, n.jsx)("span", { className: x().line, children: "more" === e3.kind ? (0, n.jsxs)("span", { className: x().more, children: [(0, n.jsxs)("span", { className: x().moreLabel, children: ["Show ", Math.min(I, e3.hidden ?? 0), " more"] }), (0, n.jsxs)("span", { className: x().muted, children: [e3.hidden, " hidden"] })] }) : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("span", { className: x().chevron, "data-open": e3.open || void 0, "data-branch": s2 || void 0, "aria-hidden": "true", children: s2 ? (0, n.jsx)(_.A, { size: 14, strokeWidth: 1.75 }) : null }), (0, n.jsx)("span", { className: "number" == typeof e3.name ? x().index : x().key, children: null === e3.name ? t2 : "number" == typeof e3.name ? e3.name : (0, n.jsx)(T, { text: e3.name, needle: d2, current: o2 }) }), (0, n.jsx)("span", { className: x().colon, "aria-hidden": "true", children: null === e3.name && s2 ? "" : ":" }), s2 ? (0, n.jsxs)("span", { className: x().summary, children: [e3.open ? null : (0, n.jsx)("span", { className: x().preview, children: "array" === e3.type ? "[\u2026]" : `{ ${N(e3.value).slice(0, 3).map(([e4]) => e4).join(", ")}${e3.count > 3 ? ", \u2026" : ""} }` }), (0, n.jsx)("span", { className: x().countLabel, children: L(e3) })] }) : (0, n.jsx)("span", { className: x().value, "data-type": e3.type, title: "string" === e3.type && e3.value.length > 40 ? e3.value : void 0, children: "string" === e3.type ? (0, n.jsxs)(n.Fragment, { children: ['"', (0, n.jsx)(T, { text: e3.value, needle: d2, current: o2 }), '"'] }) : (0, n.jsx)(T, { text: $(e3.value, e3.type), needle: d2, current: o2 }) }), K ? (0, n.jsxs)("span", { className: x().actions, children: [(0, n.jsx)(z, { label: "Copy value", icon: (0, n.jsx)(f.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), reduced: J, onCopy: () => eP(e3, "value") }), (0, n.jsx)(z, { label: "Copy path", icon: (0, n.jsx)(v.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), reduced: J, onCopy: () => eP(e3, "path") })] }) : null] }) })] }, e3.id);
    }) }) }) }), F && eS ? (0, n.jsxs)("div", { className: x().pathBar, children: [(0, n.jsx)("code", { className: x().path, title: "node" === eS.kind ? eS.id : eS.parent ?? "", children: "node" === eS.kind ? eS.id : eS.parent }), (0, n.jsx)("span", { className: x().pathType, children: "node" === eS.kind ? g(eS.type) ? `${eS.type}, ${L(eS)}` : eS.type : "page" }), K && "node" === eS.kind ? (0, n.jsx)(z, { focusable: true, className: x().pathCopy, label: "Copy path", icon: (0, n.jsx)(f.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), reduced: J, onCopy: () => eP(eS, "path") }, eS.id) : null] }) : null, (0, n.jsx)("span", { className: x().srOnly, role: "status", children: eI })] });
  });
}

__m(__module,__exports,__require);
}