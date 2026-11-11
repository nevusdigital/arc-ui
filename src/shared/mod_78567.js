function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { TreeTableDemo: () => W, default: () => V });
  var i = t(95155), n = t(12115), r = t(5772), l = t(9005), s = t(92298), o = t(51288), d = t(65024), c = t(18310), h = t(80642), u = t(25354), p = t(53896), m = t(65342), g = t(38158), w = t(92571), b = t(41189), f = t(76721), y = t(20530), x = t(7770), _ = t(98914), v = t.n(_);
  let { spring: j, duration: k, ease: N } = x.T, S = () => () => {
  };
  function C(e2, a2, t2) {
    let [i2, r2] = (0, n.useState)(a2);
    return [void 0 !== e2 ? e2 : i2, (a3) => {
      void 0 === e2 && r2(a3), t2?.(a3);
    }];
  }
  function A({ rows: e2, columns: a2, label: t2, expanded: r2, defaultExpanded: l2 = [], onExpandedChange: s2, selectable: o2 = false, selected: d2, defaultSelected: x2 = [], onSelectedChange: _2, sort: T2, defaultSort: I2 = null, onSortChange: M2, loadChildren: z2, rowLabel: E2, onRowActivate: L2, maxHeight: $2, emptyState: P2, className: R2, ref: D2 }) {
    let W2, V2 = (0, n.useId)().replace(/[^a-zA-Z0-9-]/g, ""), B = (W2 = (0, n.useSyncExternalStore)(S, () => true, () => false), !!(0, c.I)() && W2), O = (0, n.useRef)(null), F = (0, n.useRef)(/* @__PURE__ */ new Map()), [Y, U] = C(r2, l2, s2), [G, H] = C(d2, x2, _2), [J, K] = C(T2, I2, M2), [q, X] = (0, n.useState)({}), [Q, Z] = (0, n.useState)({}), [ee, ea] = (0, n.useState)({ ids: [], at: null }), [et, ei] = (0, n.useState)(null), [en, er] = (0, n.useState)(null), [el, es] = (0, n.useState)(null), [eo, ed] = (0, n.useState)(""), ec = (0, n.useMemo)(() => new Set(Y), [Y]), eh = (0, n.useMemo)(() => new Set(G), [G]), eu = (e3) => e3.children ?? q[e3.id];
    (0, n.useLayoutEffect)(() => {
      let e3 = O.current;
      if (!e3) return;
      let a3 = new ResizeObserver(() => es(e3.offsetWidth));
      return a3.observe(e3), es(e3.offsetWidth), () => a3.disconnect();
    }, []);
    let ep = a2.filter((e3) => null === el || !e3.hideBelow || el >= e3.hideBelow), em = [o2 ? "44px" : "", ...ep.map((e3) => e3.width ?? "minmax(0, 1fr)")].filter(Boolean).join(" "), eg = J ? a2.find((e3) => e3.id === J.columnId && e3.sortValue) : void 0, ew = [], eb = (e3, a3, t3, i2) => {
      let n2 = ((e4) => {
        if (!eg?.sortValue || !J) return e4;
        let a4 = eg.sortValue, t4 = "ascending" === J.direction ? 1 : -1;
        return [...e4].sort((e5, i3) => {
          let n3 = a4(e5.data), r3 = a4(i3.data);
          return t4 * ("number" == typeof n3 && "number" == typeof r3 ? n3 - r3 : String(n3).localeCompare(String(r3), "en-US", { numeric: true }));
        });
      })(e3);
      n2.forEach((e4, r3) => {
        let l3 = ec.has(e4.id), s3 = !!eu(e4)?.length || !!e4.hasChildren && !!z2 && !eu(e4);
        if (ew.push({ kind: "row", key: e4.id, row: e4, depth: a3, parentId: t3, ancestors: i2, position: r3 + 1, size: n2.length, expandable: s3, expanded: l3 && s3 }), !l3 || !s3) return;
        let o3 = eu(e4), d3 = [...i2, e4.id];
        o3 ? eb(o3, a3 + 1, e4.id, d3) : ew.push({ kind: "error" === Q[e4.id] ? "error" : "loading", key: `${e4.id}:pending`, parentId: e4.id, depth: a3 + 1, ancestors: d3, position: 1, size: 1 });
      });
    };
    eb(e2, 1, null, []);
    let ef = ew.filter((e3) => "row" === e3.kind), ey = new Map(ef.map((e3) => [e3.key, e3])), ex = new Set(ee.at === Y ? ee.ids.filter((e3) => ey.get(e3)?.expanded) : []), e_ = (0, n.useMemo)(() => {
      let a3 = /* @__PURE__ */ new Map(), t3 = /* @__PURE__ */ new Map(), i2 = [], n2 = (e3, r3) => e3.forEach((e4) => {
        a3.set(e4.id, r3), i2.push(e4.id);
        let l3 = e4.children ?? q[e4.id];
        l3?.length && (t3.set(e4.id, l3.map((e5) => e5.id)), n2(l3, e4.id));
      });
      return n2(e2, null), { parent: a3, children: t3, all: i2 };
    }, [q, e2]), ev = (0, n.useMemo)(() => {
      let a3 = /* @__PURE__ */ new Set(), t3 = (e3) => {
        let i2 = e_.children.get(e3), n2 = eh.has(e3);
        return i2?.forEach((e4) => {
          t3(e4) && (n2 = true);
        }), n2 && !eh.has(e3) && a3.add(e3), n2;
      };
      return e2.forEach((e3) => t3(e3.id)), a3;
    }, [e_, e2, eh]);
    function ej(a3) {
      let t3 = (e3) => {
        let i2 = e_.children.get(e3);
        return i2 && (i2.map(t3).every(Boolean) ? a3.add(e3) : a3.delete(e3)), a3.has(e3);
      };
      return e2.forEach((e3) => t3(e3.id)), a3;
    }
    function ek(e3, a3 = !eh.has(e3)) {
      let t3 = new Set(eh);
      [e3, ...(function e4(a4) {
        return (e_.children.get(a4) ?? []).flatMap((a5) => [a5, ...e4(a5)]);
      })(e3)].forEach((e4) => a3 ? t3.add(e4) : t3.delete(e4)), H([...ej(t3)]);
    }
    let eN = e2.length > 0 && e2.every((e3) => eh.has(e3.id)), eS = !eN && e_.all.some((e3) => eh.has(e3));
    function eC() {
      H(eN ? [] : [...ej(new Set(e_.all))]), ed(eN ? "Selection cleared" : "All rows selected");
    }
    function eA(e3) {
      z2 && "loading" !== Q[e3.id] && (Z((a3) => ({ ...a3, [e3.id]: "loading" })), ed("Loading"), z2(e3).then((a3) => {
        X((t4) => ({ ...t4, [e3.id]: a3 }));
        let t3 = eE.current;
        if (ea((a4) => ({ ids: a4.at === t3 ? [...a4.ids, e3.id] : [e3.id], at: t3 })), Z((a4) => {
          let t4 = { ...a4 };
          return delete t4[e3.id], t4;
        }), ed(`${a3.length} ${1 === a3.length ? "row" : "rows"} loaded`), eT.current.has(e3.id)) {
          let e4 = (a4) => a4.flatMap((a5) => [a5.id, ...a5.children ? e4(a5.children) : []]);
          eI.current([.../* @__PURE__ */ new Set([...eT.current, ...e4(a3)])]);
        }
      }, () => {
        Z((a3) => ({ ...a3, [e3.id]: "error" })), ed("Couldn't load rows");
      }));
    }
    let eT = (0, n.useRef)(eh), eI = (0, n.useRef)(H), eM = (0, n.useRef)(eA), ez = (0, n.useRef)(ey), eE = (0, n.useRef)(Y);
    (0, n.useEffect)(() => {
      eE.current = Y, eT.current = eh, eI.current = H, eM.current = eA, ez.current = ey;
    });
    let eL = ew.filter((e3) => "loading" === e3.kind && !Q[e3.parentId]).map((e3) => e3.parentId).join(" ");
    function e$(e3, a3) {
      if (a3 === ec.has(e3.id)) return;
      let t3 = new Set(ec);
      a3 ? t3.add(e3.id) : t3.delete(e3.id), U([...t3]), a3 && !eu(e3) && e3.hasChildren && eA(e3);
    }
    (0, n.useEffect)(() => {
      eL && eL.split(" ").forEach((e3) => {
        let a3 = ez.current.get(e3);
        a3 && eM.current(a3.row);
      });
    }, [eL]);
    let eP = (function e3(a3, t3) {
      return a3.flatMap((a4) => {
        let i2 = a4.children ?? t3?.[a4.id];
        return i2?.length ? [a4.id, ...e3(i2, t3)] : [];
      });
    })(e2, q), eR = eP.length > 0 && eP.every((e3) => ec.has(e3));
    function eD() {
      U(eR ? [] : [.../* @__PURE__ */ new Set([...Y, ...eP])]), ed(eR ? "Collapsed all rows" : "Expanded all rows");
    }
    let eW = et && ey.has(et) ? et : null, eV = et && !eW ? (() => {
      let e3 = et;
      for (; e3 && !ey.has(e3); ) e3 = e_.parent.get(e3);
      return e3 ?? ef[0]?.key ?? null;
    })() : null, eB = eW ?? eV ?? ef[0]?.key ?? null;
    function eO(e3) {
      if (!e3) return;
      ei(e3);
      let a3 = F.current.get(e3);
      a3?.focus({ preventScroll: true }), a3?.scrollIntoView({ block: "nearest" });
    }
    (0, n.useEffect)(() => {
      eV && O.current?.contains(document.activeElement) && (ei(eV), F.current.get(eV)?.focus({ preventScroll: true }));
    }, [eV]);
    let eF = en ?? eW, eY = eF ? ey.get(eF)?.expanded ? eF : ey.get(eF)?.parentId : null, eU = J ? `${J.columnId}:${J.direction}` : "none", eG = B ? { duration: 0 } : j.smooth, eH = (e3) => B ? { duration: k.instant } : { ...eG, opacity: { duration: k.standard, ease: [...N.enter], delay: e3 } }, eJ = B ? { opacity: 0, transition: { duration: k.instant } } : { height: 0, opacity: 0, transition: { height: eG, opacity: { duration: k.fast, ease: [...N.standard] } } }, eK = { "--tt-columns": em, "--tt-row": "44px", "--tt-indent": "20px", "--tt-chevron": "24px", "--tt-max": void 0 === $2 ? "none" : "number" == typeof $2 ? `${$2}px` : $2 }, [eq, ...eX] = ep, eQ = (e3, a3) => e3.slice(0, a3 - 1).map((e4, a4) => (0, i.jsx)("span", { className: v().guide, "data-active": e4 === eY || void 0, style: { left: 20 * a4 + 12 }, "aria-hidden": "true" }, e4));
    return (0, i.jsxs)("div", { ref: (e3) => {
      O.current = e3, "function" == typeof D2 ? D2(e3) : D2 && (D2.current = e3);
    }, className: ((...e3) => e3.filter(Boolean).join(" "))(v().root, R2), style: eK, children: [(0, i.jsx)("div", { className: v().scroller, children: (0, i.jsxs)("div", { role: "treegrid", "aria-label": t2, "aria-multiselectable": o2 || void 0, "aria-rowcount": ef.length + 1, className: v().grid, children: [(0, i.jsxs)("div", { role: "row", className: v().header, children: [o2 && (0, i.jsx)("div", { role: "columnheader", className: v().checkCell, children: (0, i.jsx)(y.S, { "aria-label": eN ? "Clear selection" : "Select all rows", tabIndex: -1, checked: !!eN || !!eS && "indeterminate", onCheckedChange: eC }) }), ep.map((e3) => {
      let a3 = J?.columnId === e3.id ? J.direction : void 0;
      return (0, i.jsxs)("div", { role: "columnheader", "aria-sort": e3.sortValue ? a3 ?? "none" : void 0, className: v().headerCell, "data-align": e3.align, "data-tree": e3 === eq || void 0, children: [e3 === eq && 0 === eP.length && (0, i.jsx)("span", { className: v().leaf, "aria-hidden": "true" }), e3 === eq && eP.length > 0 && (0, i.jsx)("button", { type: "button", className: v().expandAll, onClick: eD, "aria-label": eR ? "Collapse all" : "Expand all", title: eR ? "Collapse all" : "Expand all", children: (0, i.jsx)(h.N, { mode: "popLayout", initial: false, children: (0, i.jsx)(u.PY1.span, { className: v().glyph, initial: B ? { opacity: 0 } : { opacity: 0, scale: 0.7, rotate: eR ? -90 : 90 }, animate: { opacity: 1, scale: 1, rotate: 0 }, exit: B ? { opacity: 0 } : { opacity: 0, scale: 0.7, rotate: eR ? 90 : -90 }, transition: B ? { duration: k.instant } : j.snappy, children: eR ? (0, i.jsx)(p.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) : (0, i.jsx)(m.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }, eR ? "in" : "out") }) }), e3.sortValue ? (0, i.jsxs)("button", { type: "button", className: v().sort, "data-sorted": a3 ? "" : void 0, onClick: () => {
        let a4;
        K(a4 = J?.columnId !== e3.id ? { columnId: e3.id, direction: "ascending" } : "ascending" === J.direction ? { columnId: e3.id, direction: "descending" } : null), ed(a4 ? `Sorted by ${e3.header.toLowerCase()}, ${a4.direction}` : "Sort cleared");
      }, children: [(0, i.jsx)("span", { className: v().headerLabel, children: e3.header }), (0, i.jsx)(u.PY1.span, { className: v().sortIcon, initial: false, "aria-hidden": "true", animate: { opacity: +!!a3, rotate: 180 * ("descending" === a3), y: a3 || B ? 0 : 2 }, transition: B ? { duration: 0 } : j.snappy, children: (0, i.jsx)(g.A, { size: 14, strokeWidth: 1.75 }) })] }) : (0, i.jsx)("span", { className: v().headerLabel, children: e3.header })] }, e3.id);
    })] }), 0 === ef.length && (0, i.jsx)("div", { role: "row", className: v().empty, children: (0, i.jsx)("div", { role: "gridcell", children: P2 ?? "Nothing to show" }) }), (0, i.jsx)(h.N, { initial: false, custom: ex, children: ew.map((e3) => {
      let a3 = "row" === e3.kind && 1 === e3.position && !!e3.parentId && ex.has(e3.parentId), t3 = B ? { opacity: 0 } : { height: 44 * !!a3, opacity: 0 }, n2 = B ? 0 : 0.018 * Math.min(e3.position - 1, 8);
      if ("row" !== e3.kind) {
        let a4, n3 = ey.get(e3.parentId);
        return (0, i.jsxs)(u.PY1.div, { role: "row", "aria-level": e3.depth, className: v().row, "data-pending": e3.kind, initial: t3, animate: { height: 44, opacity: 1 }, variants: (a4 = e3.parentId, { leave: (e4) => e4?.has(a4) ? { height: 0, opacity: 0, transition: { duration: 0 } } : eJ }), exit: "leave", transition: eH(0), children: [o2 && (0, i.jsx)("div", { role: "gridcell", className: v().checkCell }), (0, i.jsxs)("div", { role: "gridcell", className: v().treeCell, style: { paddingLeft: (e3.depth - 1) * 20 }, children: [eQ(e3.ancestors, e3.depth), "loading" === e3.kind ? (0, i.jsxs)("span", { className: v().pending, children: [(0, i.jsx)(w.A, { className: v().spin, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Loading"] }) : (0, i.jsxs)("span", { className: v().pending, "data-tone": "danger", children: ["Couldn\u2019t load", (0, i.jsxs)("button", { type: "button", className: v().retry, onClick: () => n3 && eA(n3.row), children: [(0, i.jsx)(b.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), "Retry"] })] })] }), eX.map((a5) => (0, i.jsx)("div", { role: "gridcell", className: v().cell, "data-align": a5.align, children: "loading" === e3.kind && (0, i.jsx)("span", { className: v().skeleton, "aria-hidden": "true" }) }, a5.id))] }, e3.key);
      }
      let r3 = e3.row, l3 = { row: r3, depth: e3.depth, expanded: e3.expanded }, s3 = !!eh.has(e3.key) || !!ev.has(e3.key) && "indeterminate", d3 = "loading" === Q[e3.key];
      return (0, i.jsxs)(u.PY1.div, { ref: (a4) => {
        a4 ? F.current.set(e3.key, a4) : F.current.delete(e3.key);
      }, role: "row", "aria-level": e3.depth, "aria-posinset": e3.position, "aria-setsize": e3.size, "aria-expanded": e3.expandable ? e3.expanded : void 0, "aria-selected": o2 ? true === s3 : void 0, "aria-busy": d3 || void 0, tabIndex: eB === e3.key ? 0 : -1, className: v().row, "data-selected": true === s3 || void 0, "data-expandable": e3.expandable || void 0, initial: t3, animate: { height: 44, opacity: 1 }, exit: eJ, transition: eH(n2), layout: "position", layoutDependency: eU, onFocus: (a4) => {
        a4.target === a4.currentTarget && ei(e3.key);
      }, onPointerEnter: () => er(e3.key), onPointerLeave: () => er((a4) => a4 === e3.key ? null : a4), onClick: () => {
        ei(e3.key), e3.expandable ? e$(r3, !e3.expanded) : L2?.(r3);
      }, onKeyDown: (a4) => (function(e4, a5) {
        if (e4.target !== e4.currentTarget) return;
        let t4 = ef.indexOf(a5), i2 = a5.row, n3 = (a6) => {
          e4.preventDefault(), eO(ef[Math.max(0, Math.min(ef.length - 1, a6))]?.key);
        };
        switch (e4.key) {
          case "ArrowDown":
            return n3(t4 + 1);
          case "ArrowUp":
            return n3(t4 - 1);
          case "Home":
            return n3(0);
          case "End":
            return n3(ef.length - 1);
          case "PageDown":
            return n3(t4 + 10);
          case "PageUp":
            return n3(t4 - 10);
          case "ArrowRight":
            e4.preventDefault(), a5.expandable && !a5.expanded ? e$(i2, true) : a5.expanded && eO(ef[t4 + 1]?.parentId === a5.key ? ef[t4 + 1].key : void 0);
            return;
          case "ArrowLeft":
            e4.preventDefault(), a5.expanded ? e$(i2, false) : a5.parentId && eO(a5.parentId);
            return;
          case "*": {
            e4.preventDefault();
            let t5 = ef.filter((e5) => e5.parentId === a5.parentId && e5.expandable).map((e5) => e5.row);
            U([.../* @__PURE__ */ new Set([...Y, ...t5.map((e5) => e5.id)])]), t5.forEach((e5) => {
              !eu(e5) && e5.hasChildren && eA(e5);
            });
            return;
          }
          case " ":
            if (!o2) return;
            e4.preventDefault(), ek(a5.key);
            return;
          case "Enter":
            e4.preventDefault(), "error" === Q[a5.key] ? eA(i2) : a5.expandable ? e$(i2, !a5.expanded) : L2?.(i2);
            return;
          case "a":
            o2 && (e4.metaKey || e4.ctrlKey) && (e4.preventDefault(), eC());
            return;
        }
      })(a4, e3), children: [o2 && (0, i.jsx)("div", { role: "gridcell", className: v().checkCell, onClick: (e4) => e4.stopPropagation(), children: (0, i.jsx)(y.S, { "aria-label": E2 ? `Select ${E2(r3.data)}` : `Select row ${e3.position} of ${e3.size}`, tabIndex: -1, checked: s3, onCheckedChange: () => ek(e3.key) }) }), eq && (0, i.jsxs)("div", { role: "gridcell", className: v().treeCell, style: { paddingLeft: (e3.depth - 1) * 20 }, "data-align": eq.align, children: [eQ(e3.ancestors, e3.depth), e3.expandable ? (0, i.jsx)("button", { type: "button", tabIndex: -1, "aria-hidden": "true", className: v().chevron, onClick: (a4) => {
        a4.stopPropagation(), ei(e3.key), e$(r3, !e3.expanded);
      }, children: d3 ? (0, i.jsx)(w.A, { className: v().spin, size: 16, strokeWidth: 1.75 }) : (0, i.jsx)(u.PY1.span, { className: v().glyph, initial: false, animate: { rotate: 90 * !!e3.expanded }, transition: B ? { duration: 0 } : j.snappy, children: (0, i.jsx)(f.A, { size: 16, strokeWidth: 1.75 }) }) }) : (0, i.jsx)("span", { className: v().leaf, "aria-hidden": "true" }), (0, i.jsx)("span", { className: v().treeContent, children: eq.cell(r3.data, l3) })] }), eX.map((e4) => (0, i.jsx)("div", { role: "gridcell", className: v().cell, "data-align": e4.align, children: e4.cell(r3.data, l3) }, e4.id))] }, e3.key);
    }) })] }) }), (0, i.jsx)("p", { id: `${V2}-live`, className: v().srOnly, "aria-live": "polite", children: eo })] });
  }
  var T = t(67752), I = t(21477), M = t.n(I);
  let z = { warehouse: [{ id: "events-cluster", name: "Events cluster", detail: "us-east-1", cost: 2480, resources: 8 }, { id: "reporting-replica", name: "Reporting replica", detail: "us-east-1", cost: 640, resources: 2 }, { id: "nightly-exports", name: "Nightly exports", detail: "us-west-2", cost: 180, resources: 1 }], legacy: [{ id: "billing-v1", name: "Billing v1", detail: "us-east-1", cost: 540, resources: 3 }, { id: "cron-box", name: "Cron box", detail: "us-east-1", cost: 95, resources: 1 }] };
  function E(e2, a2) {
    let t2 = e2.children ?? (e2.lazy ? z[e2.id] : void 0), i2 = t2?.map((t3) => E(t3, e2.owner ?? a2)), n2 = e2.cost ?? i2?.reduce((e3, a3) => e3 + a3.data.cost, 0) ?? 0, r2 = e2.resources ?? i2?.reduce((e3, a3) => e3 + a3.data.resources, 0) ?? 0;
    return { id: e2.id, data: { name: e2.name, detail: e2.detail, owner: e2.owner ?? a2, cost: n2, resources: r2 }, children: e2.lazy ? void 0 : i2, hasChildren: e2.lazy || void 0 };
  }
  let L = [{ id: "platform", name: "Platform", owner: "nathan-cole", children: [{ id: "gateway", name: "API gateway", owner: "daniel-kim", children: [{ id: "api-prod", name: "api-prod", detail: "us-east-1", cost: 1840, resources: 12 }, { id: "api-staging", name: "api-staging", detail: "us-east-1", cost: 310, resources: 4 }] }, { id: "auth", name: "Auth service", owner: "olivia-bennett", children: [{ id: "auth-prod", name: "auth-prod", detail: "us-east-1", cost: 920, resources: 6 }, { id: "session-cache", name: "Session cache", detail: "eu-west-1", cost: 260, resources: 2 }] }, { id: "runners", name: "Build runners", owner: "marcus-johnson", cost: 1120, resources: 24 }] }, { id: "data", name: "Data", owner: "chloe-nguyen", children: [{ id: "warehouse", name: "Warehouse", owner: "chloe-nguyen", lazy: true }, { id: "pipelines", name: "Pipelines", owner: "daniel-kim", children: [{ id: "ingest", name: "Ingest workers", detail: "us-east-1", cost: 710, resources: 9 }, { id: "dbt", name: "dbt scheduler", detail: "us-east-1", cost: 140, resources: 1 }] }] }, { id: "growth", name: "Growth", owner: "ava-mitchell", children: [{ id: "site", name: "Marketing site", detail: "Edge", cost: 220, resources: 3 }, { id: "experiments", name: "Experiment service", detail: "us-west-2", cost: 380, resources: 4 }] }, { id: "legacy", name: "Legacy services", owner: "nathan-cole", lazy: true }].map((e2) => E(e2)), $ = { warehouse: z.warehouse.map((e2) => E(e2, "chloe-nguyen")), legacy: z.legacy.map((e2) => E(e2, "nathan-cole")) }, P = /* @__PURE__ */ new Map();
  !(function e2(a2, t2) {
    a2.forEach((a3) => {
      P.set(a3.id, { cost: a3.data.cost, resources: a3.data.resources, parent: t2 }), e2(a3.children ?? $[a3.id] ?? [], a3.id);
    });
  })(L, null);
  let R = ["platform", "gateway"], D = [{ id: "name", header: "Name", width: "minmax(0, 2fr)", sortValue: (e2) => e2.name.toLowerCase(), cell: (e2, { depth: a2 }) => (0, i.jsxs)("span", { className: M().name, "data-depth": a2, children: [(0, i.jsx)("span", { className: M().title, title: e2.name, children: e2.name }), e2.detail && (0, i.jsx)("span", { className: M().detail, children: e2.detail })] }) }, { id: "owner", header: "Owner", width: "150px", hideBelow: 600, sortValue: (e2) => e2.owner ? (0, T.MV)(e2.owner).name : "", cell: (e2) => e2.owner ? (0, i.jsxs)("span", { className: M().owner, children: [(0, i.jsx)(r.default, { className: M().avatar, src: (0, T.my)(e2.owner), alt: "", width: 22, height: 22 }), (0, T.MV)(e2.owner).name.split(" ")[0]] }) : null }, { id: "resources", header: "Resources", width: "112px", align: "end", hideBelow: 460, sortValue: (e2) => e2.resources, cell: (e2) => e2.resources }, { id: "cost", header: "Monthly", width: "96px", align: "end", sortValue: (e2) => e2.cost, cell: (e2) => {
    let a2;
    return a2 = e2.cost, `$${a2.toLocaleString("en-US")}`;
  } }];
  function W() {
    let [e2, a2] = (0, n.useState)(0), [t2, r2] = (0, n.useState)(R), [c2, h2] = (0, n.useState)([]), [u2, p2] = (0, n.useState)(null), [m2, g2] = (0, n.useState)(null), w2 = (0, n.useRef)({}), b2 = new Set(c2), f2 = c2.filter((e3) => {
      let a3 = P.get(e3)?.parent;
      for (; a3; ) {
        if (b2.has(a3)) return false;
        a3 = P.get(a3)?.parent;
      }
      return true;
    }), y2 = f2.reduce((e3, a3) => e3 + (P.get(a3)?.cost ?? 0), 0), x2 = f2.reduce((e3, a3) => e3 + (P.get(a3)?.resources ?? 0), 0), _2 = !c2.length && !u2 && !m2 && t2.join() === R.join();
    return (0, i.jsxs)("div", { className: M().demo, children: [(0, i.jsx)(A, { label: "Cloud spend by team", rows: L, columns: D, selectable: true, maxHeight: 440, expanded: t2, onExpandedChange: r2, selected: c2, onSelectedChange: h2, sort: u2, onSortChange: p2, loadChildren: function(e3) {
      let a3 = (w2.current[e3.id] ?? 0) + 1;
      return w2.current[e3.id] = a3, new Promise((t3, i2) => window.setTimeout(() => {
        "legacy" === e3.id && 1 === a3 ? i2(Error("Timed out")) : t3($[e3.id] ?? []);
      }, 900));
    }, rowLabel: (e3) => e3.name, onRowActivate: (e3) => g2(e3.data.name) }, e2), (0, i.jsxs)("div", { className: M().footer, children: [(0, i.jsx)("p", { className: M().summary, role: "status", "aria-live": "polite", children: c2.length ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("span", { className: M().count, children: [x2, " ", 1 === x2 ? "resource" : "resources"] }), (0, i.jsxs)("span", { className: M().total, children: [(0, i.jsx)(d.q, { value: y2, prefix: "$" }), (0, i.jsx)("span", { className: M().per, children: "per month" })] })] }) : m2 ? (0, i.jsxs)("span", { children: ["Opened ", m2] }) : (0, i.jsx)("span", { className: M().hint, children: "Select rows to total their spend" }) }), (0, i.jsxs)("div", { className: M().actions, children: [(0, i.jsxs)(o.A, { variant: "ghost", size: "sm", onClick: () => h2([]), disabled: !c2.length, children: [(0, i.jsx)(l.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }), "Clear"] }), (0, i.jsxs)(o.A, { variant: "secondary", size: "sm", onClick: function() {
      w2.current = {}, r2(R), h2([]), p2(null), g2(null), a2((e3) => e3 + 1);
    }, disabled: _2, children: [(0, i.jsx)(s.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }), "Reset"] })] })] })] });
  }
  let V = W;
}

__m(__module,__exports,__require);
}