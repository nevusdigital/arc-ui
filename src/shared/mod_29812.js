function(__module,__exports,__require){
"use strict";
function __m(e, t, l) {
  "use strict";
  l.r(t), l.d(t, { WaffleChartDemo: () => T, default: () => F });
  var a = l(95155), r = l(12115), s = l(18310), n = l(28245), o = l(55809), i = l(92171), c = l(25354), u = l(61792), d = l(22535), h = l(7770), f = l(86932), m = l.n(f);
  let { spring: p } = h.T, y = [40, 20, 30, 14], _ = ["square", "round", "framed"], v = (e2, t2, l2) => Math.min(l2, Math.max(t2, e2)), x = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), g = () => () => {
  };
  function k(e2, t2, l2) {
    let a2 = [...e2].sort((e3, t3) => e3.slot - t3.slot), r2 = /* @__PURE__ */ new Map(), s2 = [], n2 = new Map(t2.map((e3, t3) => [e3.key, l2[t3]]));
    for (let e3 of a2) {
      let t3 = null !== e3.key ? r2.get(e3.key) ?? [] : [];
      null !== e3.key && t3.length < (n2.get(e3.key) ?? 0) ? (t3.push(e3), r2.set(e3.key, t3)) : s2.push(e3);
    }
    let o2 = [], i2 = 0;
    return t2.forEach((e3, t3) => {
      let a3 = r2.get(e3.key) ?? [];
      for (; a3.length < l2[t3] && s2.length; ) a3.push(s2.shift());
      a3.sort((e4, t4) => e4.slot - t4.slot).forEach((t4) => o2.push({ id: t4.id, key: e3.key, slot: i2++ }));
    }), s2.forEach((e3) => o2.push({ id: e3.id, key: null, slot: i2++ })), o2.sort((e3, t3) => e3.id - t3.id);
  }
  function w({ value: e2, decimals: t2, reduced: l2 }) {
    let s2 = (0, n.d)(e2), u2 = (0, o.G)(s2, (e3) => `${e3.toFixed(t2)}%`);
    return (0, r.useEffect)(() => {
      if (l2) return void s2.jump(e2);
      let t3 = (0, i.i)(s2, e2, p.smooth);
      return () => t3.stop();
    }, [l2, s2, e2]), (0, a.jsx)(c.PY1.span, { children: u2 });
  }
  function b({ data: e2, label: t2, unit: l2 = "", formatValue: o2, rows: i2 = 10, columns: f2 = 10, accentKey: j2, activeKey: N2, defaultActiveKey: M2 = null, onActiveChange: $2, legend: S2 = true, decimals: E2 = 0, emptyLabel: P2 = "No data", ref: R2, className: L2 }) {
    let D2, T2 = (D2 = (0, r.useSyncExternalStore)(g, () => true, () => false), !!(0, s.I)() && D2), F2 = (0, r.useRef)(null), C = (0, r.useRef)(null), I = (0, r.useRef)(null);
    (0, r.useImperativeHandle)(R2, () => F2.current);
    let W = (0, u.W)(F2, { once: true, amount: 0.35 }), A = Math.max(1, i2 * f2), U = e2.reduce((e3, t3) => e3 + Math.max(0, t3.value), 0), O = !e2.length || U <= 0, B = void 0 === j2 ? e2[0]?.key ?? null : j2, V = `${A}|${e2.map((e3) => `${e3.key}:${e3.value}`).join(",")}`, z = (0, r.useMemo)(() => (function(e3, t3, l3) {
      if (t3 <= 0) return e3.map(() => 0);
      let a2 = e3.map((e4) => Math.max(0, e4.value) / t3 * l3), r2 = a2.map(Math.floor), s2 = l3 - r2.reduce((e4, t4) => e4 + t4, 0), n2 = a2.map((e4, t4) => ({ index: t4, rest: e4 - Math.floor(e4) })).sort((e4, t4) => t4.rest - e4.rest);
      for (let e4 = 0; s2 > 0 && e4 < n2.length; e4++, s2--) r2[n2[e4].index]++;
      return r2;
    })(e2, U, A), [V]), [q, K] = (0, r.useState)(() => ({ cells: k(Array.from({ length: A }, (e3, t3) => ({ id: t3, key: null, slot: t3 })), e2, z), moved: /* @__PURE__ */ new Set(), version: 0 })), [Y, G] = (0, r.useState)(V);
    if (Y !== V) {
      G(V);
      let t3 = Array.from({ length: A }, (e3, t4) => q.cells[t4] ?? { id: t4, key: null, slot: t4 }), l3 = k(t3, e2, z);
      K({ cells: l3, moved: new Set(l3.filter((e3) => t3[e3.id].slot !== e3.slot || t3[e3.id].key !== e3.key).map((e3) => e3.id)), version: q.version + 1 });
    }
    let { cells: H, moved: X, version: J } = q, [Q, Z] = (0, r.useState)(M2), ee = void 0 !== N2 ? N2 : Q, [et, el] = (0, r.useState)(null), [ea, er] = (0, r.useState)(null), es = et?.key ?? ea ?? ee, en = es && e2.some((e3) => e3.key === es) ? es : null, [eo, ei] = (0, r.useState)(0);
    (0, r.useLayoutEffect)(() => {
      let e3 = C.current;
      if (!e3) return;
      let t3 = () => ei(e3.clientWidth);
      if (t3(), "u" < typeof ResizeObserver) return;
      let l3 = new ResizeObserver(t3);
      return l3.observe(e3), () => l3.disconnect();
    }, []);
    let ec = eo ? (eo - 3 * (f2 - 1)) / f2 : 0, eu = ec ? ec * i2 + 3 * (i2 - 1) : 0, ed = (e3) => ({ x: Math.floor(e3 / i2) * (ec + 3), y: (i2 - 1 - e3 % i2) * (ec + 3) }), eh = (t3) => {
      if (null === t3) return "transparent";
      let l3 = e2.findIndex((e3) => e3.key === t3), a2 = e2[l3];
      if (!a2) return "transparent";
      if (a2.color) return a2.color;
      if (t3 === B) return "var(--series-1)";
      let r2 = e2.filter((e3) => e3.key !== B).findIndex((e3) => e3.key === t3);
      return r2 < 3 ? `var(--series-${r2 + 2})` : `color-mix(in oklab, var(--foreground) ${y[(r2 - 3) % y.length]}%, var(--surface))`;
    }, ef = (t3) => {
      if (null === t3 || t3 === B) return "square";
      let l3 = e2.filter((e3) => e3.key !== B).findIndex((e3) => e3.key === t3);
      return l3 < 0 ? "square" : _[l3 % _.length];
    }, em = (0, n.d)(0), ep = (0, n.d)(0), ey = { stiffness: 520, damping: 44, restDelta: 0.01 }, e_ = (0, d.z)(em, ey), ev = (0, d.z)(ep, ey), ex = (0, r.useRef)(false);
    (0, r.useLayoutEffect)(() => {
      let e3 = I.current, t3 = F2.current, l3 = C.current;
      if (!et || !e3 || !t3 || !l3 || !ec) {
        ex.current = false;
        return;
      }
      let a2 = t3.getBoundingClientRect(), r2 = l3.getBoundingClientRect(), { x: s2, y: n2 } = ed(et.slot), o3 = r2.left - a2.left + s2 + ec / 2, i3 = r2.top - a2.top + n2, c2 = e3.offsetWidth, u2 = e3.offsetHeight, d2 = i3 - u2 - 10;
      d2 < 0 && (d2 = i3 + ec + 10);
      let h2 = v(o3 - c2 / 2, 0, Math.max(0, a2.width - c2));
      em.set(h2), ep.set(v(d2, 0, Math.max(0, a2.height - u2))), (!ex.current || T2) && (e_.jump(em.get()), ev.jump(ep.get())), ex.current = true;
    });
    let eg = (e3, t3) => {
      let l3 = C.current?.getBoundingClientRect();
      if (!l3 || !ec) return null;
      let a2 = v(Math.floor((e3 - l3.left) / (ec + 3)), 0, f2 - 1), r2 = v(Math.floor((t3 - l3.top) / (ec + 3)), 0, i2 - 1);
      return a2 * i2 + (i2 - 1 - r2);
    }, ek = (e3) => {
      if (null === e3) return null;
      let t3 = H.find((t4) => t4.slot === e3);
      return t3?.key ? { key: t3.key, slot: e3 } : null;
    }, ew = (e3, t3) => `${o2 ? o2(e3, t3) : x.format(e3)}${l2 ? ` ${l2}` : ""}`, eb = (e3) => U > 0 ? Math.max(0, e3.value) / U * 100 : 0, ej = et ? e2.find((e3) => e3.key === et.key) ?? null : null, eN = ej ? `${ej.label}, ${eb(ej).toFixed(E2)}%, ${ew(ej.value, ej)}` : "", eM = O ? `${t2}. ${P2}.` : `${t2}. ${e2.map((e3) => `${e3.label} ${eb(e3).toFixed(E2)}%`).join(", ")}.`, e$ = T2 ? em : e_, eS = T2 ? ep : ev, eE = T2 ? { duration: 0 } : p.morph;
    return (0, a.jsxs)("figure", { ref: F2, className: [m().figure, L2].filter(Boolean).join(" "), "aria-label": t2, "data-legend": S2 || void 0, children: [(0, a.jsxs)("div", { className: m().body, children: [(0, a.jsxs)("div", { className: m().board, children: [(0, a.jsx)("div", { ref: C, className: m().grid, style: { height: eu || void 0, aspectRatio: eu ? void 0 : `${f2} / ${i2}` }, "data-active": !!en || void 0, role: "group", tabIndex: O ? -1 : 0, "aria-roledescription": "waffle chart", "aria-label": `${t2}. ${A} cells. Use arrow keys to move between cells, Page Up and Page Down to jump between categories.`, onPointerMove: (e3) => {
      ("mouse" === e3.pointerType || e3.buttons) && el(ek(eg(e3.clientX, e3.clientY)));
    }, onPointerDown: (e3) => {
      "mouse" !== e3.pointerType && e3.currentTarget.setPointerCapture?.(e3.pointerId), el(ek(eg(e3.clientX, e3.clientY)));
    }, onPointerUp: (e3) => {
      "mouse" !== e3.pointerType && el(null);
    }, onPointerCancel: () => el(null), onPointerLeave: (e3) => {
      "mouse" === e3.pointerType && el(null);
    }, onKeyDown: (e3) => {
      if (O) return;
      if ("Escape" === e3.key && et) {
        e3.preventDefault(), el(null);
        return;
      }
      let t3 = H.filter((e4) => null !== e4.key).length, l3 = et?.slot ?? 0, a2 = Math.floor(l3 / i2), r2 = l3 % i2, s2 = z.map((e4, t4) => ({ start: z.slice(0, t4).reduce((e5, t5) => e5 + t5, 0), size: e4 })).filter((e4) => e4.size > 0), n2 = Math.max(0, s2.findIndex((e4) => l3 >= e4.start && l3 < e4.start + e4.size)), o3 = { ArrowUp: () => a2 * i2 + Math.min(i2 - 1, r2 + 1), ArrowDown: () => a2 * i2 + Math.max(0, r2 - 1), ArrowRight: () => Math.min(f2 - 1, a2 + 1) * i2 + r2, ArrowLeft: () => Math.max(0, a2 - 1) * i2 + r2, PageDown: () => s2[Math.min(s2.length - 1, n2 + 1)].start, PageUp: () => l3 > s2[n2].start ? s2[n2].start : s2[Math.max(0, n2 - 1)].start, Home: () => 0, End: () => t3 - 1 }[e3.key];
      o3 && (e3.preventDefault(), el(ek(v(et ? o3() : 0, 0, Math.max(0, t3 - 1)))));
    }, onBlur: () => el(null), onFocus: (e3) => {
      e3.currentTarget.matches(":focus-visible") && !O && el((e4) => e4 ?? ek(0));
    }, children: ec > 0 && H.map((e3) => {
      let { x: t3, y: l3 } = ed(e3.slot), r2 = X.has(e3.id) && !T2, s2 = T2 ? 0 : e3.slot / A * 0.32, n2 = null !== e3.key && e3.key === en, o3 = W || T2;
      return (0, a.jsx)(c.PY1.span, { className: m().cell, "aria-hidden": "true", "data-on": n2 || void 0, "data-cursor": et?.slot === e3.slot || void 0, "data-empty": null === e3.key || void 0, "data-shape": ef(e3.key), style: { width: ec, height: ec, "--cell": eh(e3.key), "--delay": `${s2}s` }, initial: !T2 && { x: t3, y: l3, scale: 0.4, opacity: 0 }, animate: o3 ? { x: t3, y: l3, scale: r2 ? [1, 0.62 + J % 2 * 1e-3, 1] : 1, opacity: +(null !== e3.key) } : { x: t3, y: l3, scale: 0.4, opacity: 0 }, transition: T2 ? { duration: 0 } : { x: { ...eE, delay: s2 }, y: { ...eE, delay: s2 }, scale: r2 ? { duration: 0.62, times: [0, 0.42, 1], ease: h.T.ease.inOut, delay: s2 } : { ...p.snappy, delay: 0.6 * s2 }, opacity: { duration: h.T.duration.standard, ease: h.T.ease.standard, delay: 0.6 * s2 } } }, e3.id);
    }) }), !O && (0, a.jsxs)(c.PY1.div, { ref: I, className: m().tooltip, "data-shown": !!et || void 0, style: { x: e$, y: eS }, "aria-hidden": "true", children: [(0, a.jsxs)("p", { className: m().tipRow, children: [(0, a.jsx)("span", { className: m().tipSwatch, "data-shape": ef(ej?.key ?? null), style: { "--cell": eh(ej?.key ?? null) } }), (0, a.jsx)("span", { className: m().tipName, children: ej?.label ?? "" }), (0, a.jsx)("span", { className: m().tipValue, children: ej ? `${eb(ej).toFixed(E2)}%` : "" })] }), (0, a.jsx)("p", { className: m().tipMeta, children: ej ? ew(ej.value, ej) : "" })] }), O && (0, a.jsx)("p", { className: m().message, children: P2 })] }), S2 && !O && (0, a.jsx)("ul", { className: m().legend, "aria-label": `${t2} categories`, onPointerLeave: () => er(null), children: e2.map((e3) => (0, a.jsx)("li", { children: (0, a.jsxs)("button", { type: "button", className: m().item, "aria-pressed": ee === e3.key, "data-on": en === e3.key || void 0, "data-dim": null !== en && en !== e3.key || void 0, onClick: () => {
      var t3;
      return t3 = ee === e3.key ? null : e3.key, void (void 0 === N2 && Z(t3), $2?.(t3));
    }, onPointerEnter: (t3) => {
      "mouse" === t3.pointerType && er(e3.key);
    }, onFocus: (t3) => {
      t3.currentTarget.matches(":focus-visible") && er(e3.key);
    }, onBlur: () => er(null), children: [(0, a.jsx)("span", { className: m().swatch, "data-shape": ef(e3.key), style: { "--cell": eh(e3.key) }, "aria-hidden": "true" }), (0, a.jsx)("span", { className: m().itemLabel, children: e3.label }), (0, a.jsx)("span", { className: m().itemShare, children: (0, a.jsx)(w, { value: eb(e3), decimals: E2, reduced: T2 }) })] }) }, e3.key)) })] }), (0, a.jsx)("p", { className: m().srOnly, "aria-live": "polite", "aria-atomic": "true", children: eN }), (0, a.jsx)("p", { className: m().srOnly, children: eM }), !O && (0, a.jsx)("div", { className: m().srOnly, children: (0, a.jsxs)("table", { children: [(0, a.jsx)("caption", { children: t2 }), (0, a.jsx)("thead", { children: (0, a.jsxs)("tr", { children: [(0, a.jsx)("th", { scope: "col", children: "Category" }), (0, a.jsx)("th", { scope: "col", children: "Value" }), (0, a.jsx)("th", { scope: "col", children: "Share" }), (0, a.jsx)("th", { scope: "col", children: "Cells" })] }) }), (0, a.jsx)("tbody", { children: e2.map((e3, t3) => (0, a.jsxs)("tr", { children: [(0, a.jsx)("th", { scope: "row", children: e3.label }), (0, a.jsx)("td", { children: ew(e3.value, e3) }), (0, a.jsxs)("td", { children: [eb(e3).toFixed(E2), "%"] }), (0, a.jsx)("td", { children: z[t3] })] }, e3.key)) })] }) })] });
  }
  var j = l(66558), N = l(93213), M = l.n(N);
  let $ = [{ key: "wind-solar", label: "Wind and solar" }, { key: "hydro", label: "Hydro" }, { key: "nuclear", label: "Nuclear" }, { key: "gas", label: "Gas" }, { key: "coal", label: "Coal" }, { key: "other", label: "Other" }], S = { de: { total: 507, shares: [43, 4, 1, 15, 26, 11] }, fr: { total: 494, shares: [14, 12, 65, 6, 0.5, 2.5] }, uk: { total: 285, shares: [34, 2, 14, 35, 1, 14] }, us: { total: 4178, shares: [14.5, 6, 18.5, 43, 16, 2] } }, E = [{ value: "de", label: "DE" }, { value: "fr", label: "FR" }, { value: "uk", label: "UK" }, { value: "us", label: "US" }], P = { de: "Germany", fr: "France", uk: "United Kingdom", us: "United States" }, R = (e2) => $.map((t2, l2) => ({ ...t2, value: Math.round(S[e2].total * S[e2].shares[l2]) / 100 })), L = { de: R("de"), fr: R("fr"), uk: R("uk"), us: R("us") }, D = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  function T() {
    let e2 = (0, r.useId)(), [t2, l2] = (0, r.useState)("de");
    return (0, a.jsxs)("section", { className: M().card, "aria-labelledby": e2, children: [(0, a.jsxs)("div", { className: M().top, children: [(0, a.jsxs)("div", { className: M().heading, children: [(0, a.jsx)("h3", { id: e2, className: M().title, children: "Electricity generation, 2023" }), (0, a.jsxs)("p", { className: M().meta, children: [P[t2], ", ", D.format(S[t2].total), " TWh"] })] }), (0, a.jsx)(j.A, { label: "Country", options: E, value: t2, onValueChange: (e3) => l2(e3) })] }), (0, a.jsx)(b, { data: L[t2], label: `Electricity generation by source, ${P[t2]}, 2023`, unit: "TWh", formatValue: (e3) => D.format(e3) })] });
  }
  let F = T;
}

__m(__module,__exports,__require);
}