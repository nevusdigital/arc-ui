function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { StreamgraphDemo: () => Y, default: () => z });
  var l = r(95155), a = r(12115), n = r(18310), s = r(92171), i = r(7770), o = r(61792), u = r(28245), c = r(22535), d = r(25354), h = r(12086), p = r.n(h);
  let { spring: m } = i.T, f = ({ visualDuration: e2, bounce: t2 }, r2 = 5e-4) => {
    let l2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: l2 * l2, damping: 2 * (1 - t2) * l2, restDelta: r2, restSpeed: 2 * r2 };
  }, y = f(m.smooth), g = f({ visualDuration: 0.9, bounce: 0 }), x = f(m.snappy, 0.01), v = { stiffness: x.stiffness, damping: x.damping, restDelta: 0.01 }, _ = [30, 18, 24, 14], k = (e2, t2) => e2.color ?? (t2 < 4 ? `var(--series-${t2 + 1})` : `color-mix(in oklab, var(--foreground) ${_[(t2 - 4) % _.length]}%, var(--surface))`);
  function b(e2, t2) {
    let r2 = Array.from({ length: e2 }, (e3, t3) => t3);
    return "zero" === t2 ? r2 : r2.reduce((e3, t3) => 0 === t3 ? [0] : t3 % 2 ? [...e3, t3] : [t3, ...e3], []);
  }
  let M = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), j = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), w = () => () => {
  };
  function N({ data: e2, series: t2, label: r2, unit: i2 = "", height: h2 = 260, offset: m2 = "wiggle", formatValue: f2, hiddenSeries: x2, defaultHiddenSeries: _2, onHiddenSeriesChange: $2, onActiveChange: L2, legend: R2 = true, directLabels: S2 = true, categoryLabel: A2 = "Date", emptyLabel: E2 = "No data for this range", ref: D2, className: T2 }) {
    let F2, I2 = (F2 = (0, a.useSyncExternalStore)(w, () => true, () => false), !!(0, n.I)() && F2), C2 = (0, a.useRef)(null), P2 = (0, a.useRef)(null), U2 = (0, a.useRef)(null), W2 = (0, a.useRef)(/* @__PURE__ */ new Map()), O2 = (0, a.useRef)(/* @__PURE__ */ new Map());
    (0, a.useImperativeHandle)(D2, () => C2.current);
    let Y2 = (0, o.W)(C2, { once: true, amount: 0.3 }), z2 = e2.length - 1, V = 0 === e2.length, [q, B] = (0, a.useState)(_2 ?? []), X = x2 ?? q, H = t2.filter((e3) => !X.includes(e3.key)), K = `${t2.map((e3) => e3.key).join(",")}|${e2.map((e3) => t2.map((t3) => e3.values[t3.key] ?? 0).join(",")).join(";")}`, G = (0, a.useMemo)(() => new Map(t2.map((t3) => [t3.key, (function(e3) {
      let t4 = e3.map((e4) => Math.max(0, e4 || 0)), r3 = Array(161);
      if (!t4.length) return r3.fill(0);
      if (1 === t4.length) return r3.fill(t4[0]);
      let l2 = t4.length - 1, a2 = t4.slice(1).map((e4, r4) => e4 - t4[r4]), n2 = t4.map((e4, t5) => 0 === t5 || t5 === l2 ? 0 : (Math.sign(a2[t5 - 1]) + Math.sign(a2[t5])) * Math.min(Math.abs(a2[t5 - 1]), Math.abs(a2[t5]), Math.abs(a2[t5 - 1] + a2[t5]) / 4) || 0);
      l2 > 1 ? (n2[0] = (3 * a2[0] - n2[1]) / 2, n2[l2] = (3 * a2[l2 - 1] - n2[l2 - 1]) / 2) : n2[0] = n2[1] = a2[0];
      for (let e4 = 0; e4 < 161; e4++) {
        let a3 = e4 / 160 * l2, s2 = Math.min(l2 - 1, Math.floor(a3)), i3 = a3 - s2, o2 = i3 * i3, u2 = o2 * i3, c2 = t4[s2], d2 = t4[s2 + 1], h3 = (2 * u2 - 3 * o2 + 1) * c2 + (u2 - 2 * o2 + i3) * n2[s2] + (3 * o2 - 2 * u2) * d2 + (u2 - o2) * n2[s2 + 1];
        r3[e4] = j(h3, Math.min(c2, d2), Math.max(c2, d2));
      }
      return r3;
    })(e2.map((e3) => e3.values[t3.key] ?? 0))])), [K]), [Q, Z] = (0, a.useState)(null), [J, ee] = (0, a.useState)(K);
    J !== K && (ee(K), Z(null));
    let et = Q && !V ? Math.min(Q.index, z2) : null, [er, el] = (0, a.useState)(null), ea = Q?.key ?? er, en = ea && H.some((e3) => e3.key === ea) ? ea : null, es = (0, a.useRef)(0), [ei, eo] = (0, a.useState)(0), eu = (0, a.useRef)(/* @__PURE__ */ new Map()), ec = (0, a.useRef)(/* @__PURE__ */ new Map()), ed = (0, a.useRef)(null), eh = (0, a.useRef)(/* @__PURE__ */ new Map()), ep = (0, u.d)(0), em = (0, a.useRef)({ series: t2, offset: m2 });
    (0, a.useLayoutEffect)(() => {
      em.current = { series: t2, offset: m2 };
    });
    let ef = (0, a.useCallback)(() => {
      let e3 = es.current;
      if (!e3) return;
      let { series: t3, offset: r3 } = em.current, l2 = t3.map((e4) => {
        let t4 = eu.current.get(e4.key), r4 = ec.current.get(e4.key)?.value ?? 1;
        return t4 ? t4.map((e5) => e5 * r4) : Array(161).fill(0);
      }), a2 = b(t3.length, r3), n2 = (function(e4, t4) {
        let r4 = Array(161).fill(0), l3 = r4.map((t5, r5) => e4.reduce((e5, t6) => e5 + t6[r5], 0));
        if ("zero" === t4 || !e4.length) return r4;
        if ("silhouette" === t4) return l3.map((e5) => -e5 / 2);
        for (let t5 = 1; t5 < 161; t5++) {
          let l4 = 0, a4 = 0, n4 = 0;
          for (let r5 of e4) {
            let e5 = r5[t5] - r5[t5 - 1];
            l4 += r5[t5], a4 += (n4 + e5 / 2) * r5[t5], n4 += e5;
          }
          r4[t5] = r4[t5 - 1] - (l4 ? a4 / l4 : 0);
        }
        let a3 = r4.map((e5, t5) => e5 + l3[t5] / 2), n3 = a3.reduce((e5, t5) => e5 + t5, 0) / 161, s3 = 0, i4 = 0;
        a3.forEach((e5, t5) => {
          s3 += (t5 - 80) * (e5 - n3), i4 += (t5 - 80) ** 2;
        });
        let o3 = i4 ? s3 / i4 : 0;
        return r4.map((e5, t5) => e5 - (n3 + o3 * (t5 - 80)));
      })(a2.map((e4) => l2[e4]), r3), s2 = Array(t3.length), i3 = Array(t3.length), o2 = n2.slice();
      for (let e4 of a2) {
        let t4 = l2[e4];
        s2[e4] = o2, o2 = o2.map((e5, r4) => e5 + t4[r4]), i3[e4] = o2;
      }
      let u2 = 1 / 0, c2 = -1 / 0;
      for (let e4 = 0; e4 < 161; e4++) u2 = Math.min(u2, n2[e4]), c2 = Math.max(c2, o2[e4]);
      (!Number.isFinite(u2) || c2 - u2 < 1e-9) && (u2 = -1, c2 = 1);
      let d2 = c2 - u2, p2 = ep.get(), m3 = n2.map((e4, t4) => (e4 + o2[t4]) / 2), f3 = (e4) => 10 + (1 - (e4 - u2) / d2) * (h2 - 20), y2 = (e4, t4) => f3(m3[t4] + (e4 - m3[t4]) * p2);
      ed.current = { lower: s2, upper: i3, toY: f3, center: m3 };
      let g2 = Array.from({ length: 161 }, (t4, r4) => r4 / 160 * e3);
      t3.forEach((t4, r4) => {
        let l3 = i3[r4], a3 = s2[r4], n3 = W2.current.get(t4.key);
        if (n3) {
          let e4 = "";
          for (let t5 = 0; t5 < 161; t5++) e4 += `${t5 ? "L" : "M"}${g2[t5].toFixed(1)},${y2(l3[t5], t5).toFixed(1)}`;
          for (let t5 = 160; t5 >= 0; t5--) e4 += `L${g2[t5].toFixed(1)},${y2(a3[t5], t5).toFixed(1)}`;
          n3.setAttribute("d", `${e4}Z`);
        }
        let o3 = O2.current.get(t4.key);
        if (!o3) return;
        let u3 = 4;
        for (let e4 = 4; e4 < 157; e4++) l3[e4] - a3[e4] > l3[u3] - a3[u3] && (u3 = e4);
        let c3 = eh.current.get(t4.key), m4 = void 0 !== c3 && l3[c3] - a3[c3] >= (l3[u3] - a3[u3]) * 0.8 ? c3 : u3;
        eh.current.set(t4.key, m4);
        let f4 = (l3[m4] - a3[m4]) / d2 * (h2 - 20) * p2, x3 = o3.getComputedTextLength?.() ?? 60, v2 = j(g2[m4], x3 / 2 + 6, e3 - x3 / 2 - 6);
        o3.setAttribute("x", v2.toFixed(1)), o3.setAttribute("y", y2((l3[m4] + a3[m4]) / 2, m4).toFixed(1)), o3.style.opacity = f4 >= 19 && x3 + 16 < e3 ? "1" : "0";
      });
    }, [ep, h2]);
    (0, a.useLayoutEffect)(() => {
      let e3 = P2.current;
      if (!e3) return;
      let t3 = () => {
        es.current = e3.clientWidth, eo(e3.clientWidth), ef();
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let r3 = new ResizeObserver(t3);
      return r3.observe(e3), () => r3.disconnect();
    }, [ef]);
    let ey = (0, a.useRef)(null);
    (0, a.useEffect)(() => {
      let e3 = [];
      for (let [t3, r3] of G) {
        let l2 = eu.current.get(t3);
        if (!l2 || I2) {
          eu.current.set(t3, r3);
          continue;
        }
        e3.push({ key: t3, from: l2, to: r3 });
      }
      for (let e4 of [...eu.current.keys()]) G.has(e4) || eu.current.delete(e4);
      return (ey.current?.stop(), e3.length) ? (ey.current = (0, s.i)(0, 1, { ...y, onUpdate: (t3) => {
        for (let r3 of e3) eu.current.set(r3.key, r3.from.map((e4, l2) => e4 + (r3.to[l2] - e4) * t3));
        ef();
      }, onComplete: () => {
        for (let t3 of e3) eu.current.set(t3.key, t3.to);
        ef();
      } }), () => ey.current?.stop()) : void ef();
    }, [ef, I2, G]);
    let eg = X.join("|");
    (0, a.useEffect)(() => {
      for (let e3 of t2) {
        let t3 = +!X.includes(e3.key), r3 = ec.current.get(e3.key);
        if (!r3) {
          ec.current.set(e3.key, { value: t3, stop: null });
          continue;
        }
        if (r3.value === t3) continue;
        if (r3.stop?.(), I2) {
          r3.value = t3, r3.stop = null;
          continue;
        }
        let l2 = (0, s.i)(r3.value, t3, { ...y, onUpdate: (e4) => {
          r3.value = e4, ef();
        } });
        r3.stop = () => l2.stop();
      }
      ef();
    }, [eg, ef, I2, t2.length]), (0, a.useEffect)(() => {
      if (V) return;
      if (I2) {
        ep.jump(1), ef();
        return;
      }
      if (!Y2 || ep.get() >= 1) return;
      let e3 = (0, s.i)(ep, 1, { ...g, onUpdate: ef });
      return () => e3.stop();
    }, [V, ep, Y2, ef, I2]);
    let ex = (0, u.d)(0), ev = (0, c.z)(ex, v), e_ = (0, u.d)(0), ek = (0, u.d)(0), eb = (0, c.z)(e_, v), eM = (0, c.z)(ek, v), ej = (0, a.useRef)(false);
    (0, a.useLayoutEffect)(() => {
      let e3 = U2.current, r3 = es.current;
      if (null === et || !e3 || !r3) {
        ej.current = false;
        return;
      }
      let l2 = z2 > 0 ? et / z2 * r3 : r3 / 2, a2 = Q?.y ?? null, n2 = ed.current;
      if (null === a2 && n2 && en) {
        let e4 = t2.findIndex((e5) => e5.key === en), s3 = Math.round(l2 / r3 * 160);
        e4 >= 0 && (a2 = n2.toY((n2.upper[e4][s3] + n2.lower[e4][s3]) / 2));
      }
      let s2 = e3.offsetWidth, i3 = e3.offsetHeight, o2 = l2 + 14;
      o2 + s2 > r3 && (o2 = l2 - 14 - s2);
      let u2 = j((a2 ?? h2 / 2) - i3 / 2, 0, Math.max(0, h2 - i3)), c2 = !ej.current || I2;
      ex.set(l2), e_.set(j(o2, 0, Math.max(0, r3 - s2))), ek.set(u2), c2 && (ev.jump(l2), eb.jump(e_.get()), eM.jump(u2)), ej.current = true;
    });
    let ew = (0, a.useRef)(L2);
    (0, a.useLayoutEffect)(() => {
      ew.current = L2;
    }), (0, a.useEffect)(() => {
      ew.current?.(et, en);
    }, [et, en]);
    let eN = (e3, r3) => {
      let l2 = P2.current?.getBoundingClientRect(), a2 = ed.current;
      if (!l2?.width || V) return null;
      let n2 = j((e3 - l2.left) / l2.width, 0, 1), s2 = r3 - l2.top, i3 = z2 > 0 ? Math.round(n2 * z2) : 0, o2 = Math.round(160 * n2), u2 = null;
      return a2 && t2.forEach((e4, t3) => {
        if (X.includes(e4.key)) return;
        let r4 = a2.toY(a2.upper[t3][o2]), l3 = a2.toY(a2.lower[t3][o2]);
        s2 >= r4 - 1 && s2 <= l3 + 1 && (u2 = e4.key);
      }), { index: i3, key: u2, y: s2 };
    }, e$ = (e3, t3) => `${f2 ? f2(e3, t3) : M.format(e3)}${i2 ? ` ${i2}` : ""}`, eL = null === et ? null : e2[et], eR = eL ? `${eL.label}. ${en ? `${t2.find((e3) => e3.key === en)?.label} ${e$(eL.values[en] ?? 0, t2.find((e3) => e3.key === en))}, ` : ""}${H.length} layers, ${M.format(H.reduce((e3, t3) => e3 + Math.max(0, eL.values[t3.key] ?? 0), 0))}${i2 ? ` ${i2}` : ""} in total` : "", eS = V ? `${r2}. ${E2}.` : `${r2}, ${e2[0].label} to ${e2[z2].label}. ${H.map((t3) => `${t3.label}, latest ${e$(e2[z2].values[t3.key] ?? 0, t3)}`).join(". ")}.`, eA = (function(e3, t3) {
      let r3 = e3.flatMap((e4, t4) => e4.axisLabel ? [t4] : []);
      if (!t3 || !r3.length) return [];
      let l2 = Math.ceil(r3.length / Math.max(2, Math.floor(t3 / 72)));
      return r3.reverse().filter((e4, t4) => t4 % l2 == 0).reverse();
    })(e2, ei), eE = I2 ? e_ : eb, eD = I2 ? ek : eM;
    return (0, l.jsxs)("figure", { ref: C2, className: [p().figure, T2].filter(Boolean).join(" "), "aria-label": r2, children: [R2 && t2.length > 1 && (0, l.jsx)("div", { className: p().legend, role: "group", "aria-label": `${r2} layers`, onPointerLeave: () => el(null), children: t2.map((e3, t3) => (0, l.jsxs)("button", { type: "button", className: p().toggle, "aria-pressed": !X.includes(e3.key), "data-active": en === e3.key || void 0, "data-dim": null !== en && en !== e3.key || void 0, onClick: () => {
      var t4;
      let r3;
      return t4 = e3.key, r3 = X.includes(t4) ? X.filter((e4) => e4 !== t4) : [...X, t4], void (void 0 === x2 && B(r3), $2?.(r3));
    }, onPointerEnter: (t4) => {
      "mouse" === t4.pointerType && el(e3.key);
    }, onFocus: (t4) => {
      t4.currentTarget.matches(":focus-visible") && el(e3.key);
    }, onBlur: () => el(null), style: { "--series": k(e3, t3) }, children: [(0, l.jsx)("span", { className: p().swatch, "aria-hidden": "true" }), (0, l.jsx)("span", { className: p().toggleLabel, children: e3.label })] }, e3.key)) }), (0, l.jsxs)("div", { className: p().chart, "data-active": null !== et || void 0, "data-layer": !!en || void 0, children: [(0, l.jsxs)("div", { ref: P2, className: p().plot, style: { height: h2 }, role: "group", tabIndex: V ? -1 : 0, "aria-roledescription": "stream graph", "aria-label": `${r2}. Use left and right arrows to move through time, up and down to change layer.`, onPointerMove: (e3) => {
      ("mouse" === e3.pointerType || e3.buttons) && Z(eN(e3.clientX, e3.clientY));
    }, onPointerDown: (e3) => {
      "mouse" !== e3.pointerType && e3.currentTarget.setPointerCapture?.(e3.pointerId), Z(eN(e3.clientX, e3.clientY));
    }, onPointerUp: (e3) => {
      "mouse" !== e3.pointerType && Z(null);
    }, onPointerCancel: () => Z(null), onPointerLeave: (e3) => {
      "mouse" === e3.pointerType && Z(null);
    }, onKeyDown: (t3) => {
      if (V) return;
      if ("Escape" === t3.key && Q) {
        t3.preventDefault(), Z(null);
        return;
      }
      let r3 = et ?? z2, l2 = H.map((e3) => e3.key), a2 = en ? l2.indexOf(en) : -1, n2 = Math.max(1, Math.round(e2.length / 6)), s2 = { ArrowLeft: () => ({ index: j(r3 - 1, 0, z2), key: en, y: null }), ArrowRight: () => ({ index: j(null === et ? z2 : r3 + 1, 0, z2), key: en, y: null }), PageDown: () => ({ index: j(r3 - n2, 0, z2), key: en, y: null }), PageUp: () => ({ index: j(r3 + n2, 0, z2), key: en, y: null }), Home: () => ({ index: 0, key: en, y: null }), End: () => ({ index: z2, key: en, y: null }), ArrowUp: () => ({ index: r3, key: l2[a2 < 0 ? l2.length - 1 : Math.min(l2.length - 1, a2 + 1)] ?? null, y: null }), ArrowDown: () => ({ index: r3, key: l2[a2 < 0 ? 0 : Math.max(0, a2 - 1)] ?? null, y: null }) }[t3.key];
      s2 && (t3.preventDefault(), Z(s2()));
    }, onBlur: () => Z(null), onFocus: (e3) => {
      e3.currentTarget.matches(":focus-visible") && !V && Z((e4) => e4 ?? { index: z2, key: null, y: null });
    }, children: [(0, l.jsxs)("svg", { className: p().svg, width: "100%", height: h2, "aria-hidden": "true", focusable: "false", children: [t2.map((e3, t3) => (0, l.jsx)("path", { ref: (t4) => {
      t4 ? W2.current.set(e3.key, t4) : W2.current.delete(e3.key);
    }, className: p().layer, "data-active": en === e3.key || void 0, "data-custom": !!e3.color || void 0, style: { "--series": k(e3, t3) } }, e3.key)), (0, l.jsx)(d.PY1.line, { className: p().crosshair, x1: 0, x2: 0, y1: 0, y2: h2, style: { x: I2 ? ex : ev } }), S2 && t2.map((e3) => (0, l.jsx)("text", { ref: (t3) => {
      t3 ? O2.current.set(e3.key, t3) : O2.current.delete(e3.key);
    }, className: p().label, "data-active": en === e3.key || void 0, "data-custom": !!e3.color || void 0, "data-hidden": X.includes(e3.key) || void 0, "data-dim": null !== en && en !== e3.key || void 0, textAnchor: "middle", dominantBaseline: "central", children: e3.label }, e3.key))] }), (0, l.jsxs)(d.PY1.div, { ref: U2, className: p().tooltip, style: { x: eE, y: eD }, "aria-hidden": "true", children: [(0, l.jsx)("p", { className: p().tipTitle, children: eL?.label ?? "" }), b(t2.length, m2).reverse().map((e3) => t2[e3]).filter((e3) => !X.includes(e3.key)).map((e3) => (0, l.jsxs)("p", { className: p().tipRow, "data-active": en === e3.key || void 0, "data-dim": null !== en && en !== e3.key || void 0, style: { "--series": k(e3, t2.indexOf(e3)) }, children: [(0, l.jsx)("span", { className: p().tipSwatch }), (0, l.jsx)("span", { className: p().tipName, children: e3.label }), (0, l.jsx)("span", { className: p().tipValue, children: eL ? e$(eL.values[e3.key] ?? 0, e3) : "" })] }, e3.key))] }), (V || 0 === H.length) && (0, l.jsx)("p", { className: p().message, children: V ? E2 : "Choose a layer to show" })] }), (0, l.jsx)("div", { className: p().axis, "aria-hidden": "true", children: eA.map((t3) => {
      let r3 = z2 > 0 ? t3 / z2 : 0.5, a2 = e2[t3];
      return (0, l.jsx)("span", { className: p().axisLabel, style: { left: `${100 * r3}%`, translate: `${-(100 * r3)}% 0` }, children: a2.axisLabel }, `${a2.key}`);
    }) })] }), (0, l.jsx)("p", { className: p().srOnly, "aria-live": "polite", "aria-atomic": "true", children: eR }), (0, l.jsx)("p", { className: p().srOnly, children: eS }), !V && (0, l.jsx)("div", { className: p().srOnly, children: (0, l.jsxs)("table", { children: [(0, l.jsx)("caption", { children: r2 }), (0, l.jsx)("thead", { children: (0, l.jsxs)("tr", { children: [(0, l.jsx)("th", { scope: "col", children: A2 }), t2.map((e3) => (0, l.jsx)("th", { scope: "col", children: e3.label }, e3.key))] }) }), (0, l.jsx)("tbody", { children: e2.map((e3) => (0, l.jsxs)("tr", { children: [(0, l.jsx)("th", { scope: "row", children: e3.label }), t2.map((t3) => (0, l.jsx)("td", { children: e$(e3.values[t3.key] ?? 0, t3) }, t3.key))] }, e3.key)) })] }) })] });
  }
  var $ = r(66558), L = r(10008), R = r.n(L);
  let S = Date.UTC(2025, 8, 22), A = (e2, t2, r2) => Math.exp(-(((e2 - t2) / r2) ** 2)), E = [{ key: "bugs", label: "Bugs" }, { key: "billing", label: "Billing" }, { key: "integrations", label: "Integrations" }, { key: "onboarding", label: "Onboarding" }, { key: "access", label: "Account access" }, { key: "requests", label: "Feature requests" }], D = (e2) => new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...e2 }), T = D({ month: "short", day: "numeric", year: "numeric" }), F = D({ month: "short", day: "numeric" }), I = D({ month: "short" });
  function C(e2) {
    return Array.from({ length: e2 }, (t2, r2) => {
      let l2, a2, n2 = 52 - e2 + r2, s2 = new Date(S + 6048e5 * n2), i2 = 7 >= s2.getUTCDate(), o2 = e2 <= 12 ? r2 % 2 == 0 ? F.format(s2) : void 0 : i2 ? I.format(s2) : void 0;
      return { key: s2.toISOString().slice(0, 10), label: `Week of ${T.format(s2)}`, axisLabel: o2, values: (l2 = 1 - 0.42 * A(n2, 13.5, 1.1), a2 = (e3) => {
        let t3;
        return 1 + ((t3 = 43758.5453 * Math.sin(127.1 * (7 * n2 + e3) + 311.7)) - Math.floor(t3) - 0.5) * 0.18;
      }, { bugs: Math.round((118 + 22 * Math.sin(n2 / 4.2) + 96 * A(n2, 39, 1.3)) * l2 * a2(1)), billing: Math.round((74 + 150 * A(n2, 28.4, 1.6) + 30 * A(n2, 41, 3)) * l2 * a2(2)), integrations: Math.round((34 + 1.1 * n2 + 70 * A(n2, 38.6, 2.2) * (n2 > 37 ? 1 : 0.3)) * l2 * a2(3)), onboarding: Math.round((52 + 120 * A(n2, 16.5, 2.4) + 18 * Math.sin(n2 / 6)) * l2 * a2(4)), access: Math.round((44 + 8 * Math.cos(n2 / 3)) * l2 * a2(5)), requests: Math.round((46 + 0.5 * n2 + 12 * Math.sin(n2 / 7.5 + 1)) * l2 * a2(6)) }) };
    });
  }
  let P = { "12w": C(12), "26w": C(26), "52w": C(52) }, U = [{ value: "12w", label: "3M" }, { value: "26w", label: "6M" }, { value: "52w", label: "1Y" }], W = new Intl.NumberFormat("en-US");
  function O({ value: e2 }) {
    let [t2, r2] = (0, a.useState)(e2), o2 = (0, a.useRef)(e2), u2 = (0, n.I)();
    return (0, a.useEffect)(() => {
      if (u2) {
        o2.current = e2;
        return;
      }
      let t3 = (0, s.i)(o2.current, e2, { ...i.T.spring.smooth, onUpdate: (e3) => {
        o2.current = e3, r2(Math.round(e3));
      } });
      return () => t3.stop();
    }, [u2, e2]), (0, l.jsx)(l.Fragment, { children: W.format(u2 ? e2 : t2) });
  }
  function Y() {
    let e2 = (0, a.useId)(), [t2, r2] = (0, a.useState)("52w"), n2 = P[t2], s2 = n2.reduce((e3, t3) => e3 + Object.values(t3.values).reduce((e4, t4) => e4 + (t4 ?? 0), 0), 0);
    return (0, l.jsxs)("section", { className: R().card, "aria-labelledby": e2, children: [(0, l.jsxs)("div", { className: R().top, children: [(0, l.jsxs)("div", { className: R().heading, children: [(0, l.jsx)("h3", { id: e2, className: R().title, children: "Support tickets by topic" }), (0, l.jsxs)("p", { className: R().meta, children: [(0, l.jsx)(O, { value: s2 }), " tickets"] })] }), (0, l.jsx)($.A, { label: "Range", options: U, value: t2, onValueChange: (e3) => r2(e3) })] }), (0, l.jsx)(N, { data: n2, series: E, label: "Support tickets by topic", unit: "tickets", categoryLabel: "Week" })] });
  }
  let z = Y;
}

__m(__module,__exports,__require);
}