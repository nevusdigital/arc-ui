function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { V: () => P });
  var a = r(95155), n = r(12115), l = r(6900), s = r(92171), i = r(18310), o = r(61792), u = r(27933), c = r(25354), d = r(80642), h = r(7770), m = r(95954), f = r.n(m);
  let y = "__other", v = 2 * Math.PI, { spring: p, ease: g, stagger: k, duration: _ } = h.T, $ = ({ visualDuration: e2, bounce: t2 }, r2 = 5e-4) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: a2 * a2, damping: 2 * (1 - t2) * a2, restDelta: r2, restSpeed: 2 * r2 };
  }, b = $({ visualDuration: 0.72, bounce: 0 }), x = $({ visualDuration: 0.5, bounce: 0 }), M = $(p.snappy, 2e-3), j = [56, 42, 32], w = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), I = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 0 }), N = (e2) => e2 > 0 && e2 < 0.01 ? "<1%" : I.format(e2), S = (e2) => (Math.round(100 * e2) / 100).toString();
  function L({ value: e2, format: t2, reduced: r2 }) {
    let i2 = (0, n.useRef)(null), [o2] = (0, n.useState)(() => t2(e2)), u2 = (0, n.useRef)(null);
    return (0, n.useLayoutEffect)(() => {
      let a2 = i2.current;
      if (!a2) return;
      if (!u2.current) {
        let r3 = { mv: (0, l.OQ)(e2), format: t2, target: e2 };
        r3.mv.on("change", (e3) => {
          a2.textContent = r3.format(Number.isInteger(r3.target) ? Math.round(e3) : e3);
        }), u2.current = r3;
      }
      let n2 = u2.current;
      if (n2.format = t2, n2.target === e2 && !r2) {
        n2.mv.isAnimating() || (a2.textContent = t2(e2));
        return;
      }
      if (n2.target = e2, r2) {
        n2.mv.jump(e2), a2.textContent = t2(e2);
        return;
      }
      (0, s.i)(n2.mv, e2, $({ visualDuration: 0.4, bounce: 0 }, Math.max(1e-3 * Math.abs(e2 - n2.mv.get()), 1e-6)));
    }, [e2, t2, r2]), (0, n.useEffect)(() => () => {
      u2.current?.mv.destroy(), u2.current = null;
    }, []), (0, a.jsx)("span", { ref: i2, children: o2 });
  }
  let A = () => () => {
  };
  function P({ data: e2, label: t2, unit: r2 = "", formatValue: h2 = (e3) => w.format(e3), totalLabel: m2 = "Total", size: $2 = 208, thickness: I2 = 24, groupBelow: E = 0.04, maxSegments: R = 6, otherLabel: D = "Other", activeKey: C, defaultActiveKey: T = null, onActiveChange: O, hiddenKeys: W, defaultHiddenKeys: V, onHiddenKeysChange: Q, legendAction: F = "toggle", legend: B = true, emptyLabel: U = "No data yet", ref: K, className: q }) {
    let z, Y = (z = (0, n.useSyncExternalStore)(A, () => true, () => false), !!(0, i.I)() && z), Z = (0, n.useRef)(null);
    (0, n.useImperativeHandle)(K, () => Z.current);
    let X = (0, o.W)(Z, { once: true, amount: 0.35 }), G = (0, n.useId)(), H = (function(e3, t3, r3, a2) {
      let n2 = e3.filter((e4) => e4.value > 0), l2 = n2.reduce((e4, t4) => e4 + t4.value, 0);
      if (!l2) return [];
      let s2 = new Set([...n2].sort((e4, t4) => t4.value - e4.value).filter((e4, a3) => e4.value / l2 >= t3 && a3 < r3 - 1).map((e4) => e4.key)), i2 = n2.filter((e4) => !s2.has(e4.key));
      return i2.length < 2 ? n2.map((e4) => ({ ...e4 })) : [...n2.filter((e4) => s2.has(e4.key)).map((e4) => ({ ...e4 })), { key: y, label: a2, value: i2.reduce((e4, t4) => e4 + t4.value, 0), members: i2 }];
    })(e2, E, R, D), [J, ee] = (0, n.useState)(V ?? []), et = W ?? J, er = new Set(et.filter((e3) => H.some((t3) => t3.key === e3))), ea = H.filter((e3) => !er.has(e3.key)), en = ea.reduce((e3, t3) => e3 + t3.value, 0), el = `${H.map((e3) => `${e3.key}:${e3.value}${er.has(e3.key) ? "h" : ""}`).join("|")}`, es = r2 ? ` ${r2}` : "", [ei, eo] = (0, n.useState)(() => new Map(e2.map((e3, t3) => [e3.key, t3])));
    if (e2.some((e3) => !ei.has(e3.key))) {
      let t3 = new Map(ei);
      for (let r3 of e2) t3.has(r3.key) || t3.set(r3.key, t3.size);
      eo(t3);
    }
    let eu = (e3) => {
      let t3;
      return e3.color ?? (e3.key === y ? "color-mix(in oklab, var(--foreground) 26%, var(--surface))" : (t3 = ei.get(e3.key) ?? 0) < 4 ? `var(--series-${t3 + 1})` : `color-mix(in oklab, var(--foreground) ${j[(t3 - 4) % j.length]}%, var(--surface))`);
    }, [ec, ed] = (0, n.useState)(H), [eh, em] = (0, n.useState)(el);
    if (eh !== el) {
      em(el);
      let e3 = [...H];
      ec.forEach((t3, r3) => {
        if (e3.some((e4) => e4.key === t3.key)) return;
        let a2 = ec.slice(0, r3).reverse().find((t4) => e3.some((e4) => e4.key === t4.key));
        e3.splice(a2 ? e3.findIndex((e4) => e4.key === a2.key) + 1 : 0, 0, { ...t3, value: 0 });
      }), ed(e3);
    }
    let [ef, ey] = (0, n.useState)(T), ev = void 0 !== C ? C : ef, [ep, eg] = (0, n.useState)(null), ek = (e3) => {
      void 0 === C && ey(e3), O?.(e3);
    }, e_ = [ep, ev].find((e3) => e3 && ea.some((t3) => t3.key === e3)) ?? null, e$ = ea.find((e3) => e3.key === e_) ?? null, [eb, ex] = (0, n.useState)(""), eM = $2 / 2, ej = eM - 7, ew = Math.max(8, ej - I2), eI = Math.min(4, I2 / 4), eN = (0, n.useRef)({ c: eM, outer: ej, inner: ew, corner: eI }), eS = (0, n.useRef)(/* @__PURE__ */ new Map()), eL = (0, n.useRef)(/* @__PURE__ */ new Map()), eA = (0, n.useCallback)((e3) => {
      let t3 = e3?.dataset.key;
      if (e3 && t3) return eL.current.set(t3, e3), () => {
        eL.current.get(t3) === e3 && eL.current.delete(t3);
      };
    }, []), eP = (0, n.useCallback)(() => {
      let { c: e3, outer: t3, inner: r3, corner: a2 } = eN.current;
      for (let [n2, l2] of eL.current) {
        let s2 = eS.current.get(n2);
        if (!s2) {
          l2.setAttribute("d", "");
          continue;
        }
        let i2 = s2.start.get(), o2 = s2.end.get(), u2 = Math.max(0, s2.lift.get()), c2 = t3 + 2 * u2;
        l2.setAttribute("d", (function(e4, t4, r4, a3, n3, l3) {
          let s3 = n3 - a3;
          if (s3 <= 1e-6) return "";
          let i3 = (t5, r5) => `${S(e4 + t5 * Math.cos(r5))} ${S(e4 + t5 * Math.sin(r5))}`;
          if (s3 >= 1 - 1e-6) return `M${i3(t4, -Math.PI / 2)}A${S(t4)} ${S(t4)} 0 1 1 ${i3(t4, Math.PI / 2)}A${S(t4)} ${S(t4)} 0 1 1 ${i3(t4, -Math.PI / 2)}ZM${i3(r4, -Math.PI / 2)}A${S(r4)} ${S(r4)} 0 1 0 ${i3(r4, Math.PI / 2)}A${S(r4)} ${S(r4)} 0 1 0 ${i3(r4, -Math.PI / 2)}Z`;
          let o3 = Math.min(1.5, (1 - s3) * v * t4 / 2), u3 = a3 * v - Math.PI / 2, c3 = n3 * v - Math.PI / 2, d3 = Math.sin(Math.min((c3 - u3) / 2, Math.PI / 2));
          if (d3 * t4 <= o3 + 1e-6) return "";
          let h4 = (t5, r5, a4) => `${S(e4 + t5 * Math.cos(r5) - a4 * o3 * Math.sin(r5))} ${S(e4 + t5 * Math.sin(r5) + a4 * o3 * Math.cos(r5))}`, m3 = (t4 - r4) / 2, f2 = Math.max(0, Math.min(l3, m3, d3 >= 0.9999 ? 1 / 0 : (d3 * t4 - o3) / (1 + d3))), y2 = Math.asin(Math.min(1, (o3 + f2) / (t4 - f2))), p2 = Math.sqrt(Math.max(0, (t4 - f2) ** 2 - (o3 + f2) ** 2)), g2 = +(c3 - u3 - 2 * y2 > Math.PI), k2 = `M${h4(p2, u3, 1)}`;
          if (f2 > 0.01 && (k2 += `A${S(f2)} ${S(f2)} 0 0 1 ${i3(t4, u3 + y2)}`), k2 += `A${S(t4)} ${S(t4)} 0 ${g2} 1 ${i3(t4, c3 - y2)}`, f2 > 0.01 && (k2 += `A${S(f2)} ${S(f2)} 0 0 1 ${h4(p2, c3, -1)}`), d3 * r4 > o3 + 1e-6 || d3 >= 0.9999) {
            let e5 = Math.max(0, Math.min(l3, m3, d3 >= 0.9999 ? 1 / 0 : (d3 * r4 - o3) / (1 - d3))), t5 = Math.asin(Math.min(1, (o3 + e5) / (r4 + e5))), a4 = Math.sqrt(Math.max(0, (r4 + e5) ** 2 - (o3 + e5) ** 2)), n4 = +(c3 - u3 - 2 * t5 > Math.PI);
            k2 += `L${h4(a4, c3, -1)}`, e5 > 0.01 && (k2 += `A${S(e5)} ${S(e5)} 0 0 1 ${i3(r4, c3 - t5)}`), k2 += `A${S(r4)} ${S(r4)} 0 ${n4} 0 ${i3(r4, u3 + t5)}`, e5 > 0.01 && (k2 += `A${S(e5)} ${S(e5)} 0 0 1 ${h4(a4, u3, 1)}`);
          } else k2 += `L${i3(o3 / d3, (u3 + c3) / 2)}`;
          return `${k2}Z`;
        })(e3, c2, r3 - 2 * u2 * 0.5, i2, o2, a2)), l2.setAttribute("fill-opacity", S(Math.min(1, Math.max(0, ((function(e4, t4, r4) {
          let a3 = r4 - t4;
          return a3 >= 1 - 1e-6 ? 1 / 0 : Math.sin(Math.min(a3 * Math.PI, Math.PI / 2)) * e4 - Math.min(1.5, (1 - a3) * v * e4 / 2);
        })(c2, i2, o2) - 1) / 3))));
        let d2 = (i2 + o2) / 2 * v - Math.PI / 2, h3 = 4 * u2;
        l2.setAttribute("transform", `translate(${S(Math.cos(d2) * h3)} ${S(Math.sin(d2) * h3)})`);
      }
    }, []), eE = (0, n.useCallback)(() => {
      u.Gt.render(eP);
    }, [eP]);
    (0, n.useLayoutEffect)(() => {
      eN.current = { c: eM, outer: ej, inner: ew, corner: eI }, eP();
    }), (0, n.useEffect)(() => () => {
      for (let e3 of ((0, u.WG)(eP), eS.current.values())) e3.off();
      eS.current.clear();
    }, [eP]);
    let eR = (0, n.useRef)(/* @__PURE__ */ new Map()), eD = (0, n.useRef)({ drawn: ec, slices: H });
    (0, n.useLayoutEffect)(() => {
      eD.current = { drawn: ec, slices: H };
    });
    let eC = X || Y;
    (0, n.useEffect)(() => {
      let e3, t3;
      if (!eC) return;
      let { drawn: r3, slices: a2 } = eD.current, n2 = (e3 = a2.reduce((e4, t4) => e4 + (er.has(t4.key) ? 0 : t4.value), 0) || 1, t3 = 0, new Map(a2.map((r4) => {
        let a3 = { start: t3, end: t3 + (er.has(r4.key) ? 0 : r4.value / e3) };
        return t3 = a3.end, [r4.key, a3];
      })));
      eR.current = n2;
      let i2 = 0 === eS.current.size, o2 = (e4) => {
        let t4 = r3.slice(0, e4).reverse().find((e5) => n2.has(e5.key));
        return t4 ? n2.get(t4.key).end : 0;
      }, u2 = (e4) => {
        eD.current.slices.some((t4) => t4.key === e4) || (eS.current.get(e4)?.off(), eS.current.delete(e4), ed((t4) => t4.filter((t5) => t5.key !== e4)));
      };
      r3.forEach((e4, t4) => {
        let a3 = !n2.has(e4.key), c2 = n2.get(e4.key) ?? { start: o2(t4), end: o2(t4) }, d2 = eS.current.get(e4.key);
        if (!d2) {
          let a4 = r3.slice(0, t4).reverse().map((e5) => eS.current.get(e5.key)).find(Boolean), n3 = i2 ? 0 : a4 ? a4.end.get() : 0, s2 = (0, l.OQ)(n3), o3 = (0, l.OQ)(n3), u3 = (0, l.OQ)(0), c3 = [s2.on("change", eE), o3.on("change", eE), u3.on("change", eE)];
          d2 = { start: s2, end: o3, lift: u3, off: () => {
            c3.forEach((e5) => e5()), s2.destroy(), o3.destroy(), u3.destroy();
          } }, eS.current.set(e4.key, d2);
        }
        if (Y) {
          d2.start.jump(c2.start), d2.end.jump(c2.end), a3 && u2(e4.key);
          return;
        }
        if (i2) {
          (0, s.i)(d2.start, c2.start, b), (0, s.i)(d2.end, c2.end, { ...b, delay: 0.04 + t4 * k.item });
          return;
        }
        (0, s.i)(d2.start, c2.start, x), (0, s.i)(d2.end, c2.end, { ...x, onComplete: a3 ? () => u2(e4.key) : void 0 });
      }), eE();
    }, [eC, el, Y, eE]), (0, n.useEffect)(() => {
      for (let [e3, t3] of eS.current) {
        let r3 = +(e3 === e_);
        Y ? t3.lift.jump(r3) : (t3.lift.get() !== r3 || t3.lift.isAnimating()) && (0, s.i)(t3.lift, r3, M);
      }
    }, [e_, Y, ec, eC]);
    let eT = (0, n.useRef)(null), eO = (e3) => {
      let t3 = eT.current?.getBoundingClientRect();
      if (!t3 || !t3.width) return;
      let r3 = $2 / t3.width, a2 = (e3.clientX - t3.left) * r3 - eM, n2 = (e3.clientY - t3.top) * r3 - eM, l2 = Math.hypot(a2, n2);
      if (l2 < ew - 6 || l2 > eM) return null;
      let s2 = (Math.atan2(n2, a2) + Math.PI / 2) / v;
      for (let [e4, t4] of (s2 < 0 && (s2 += 1), eR.current)) if (t4.end > t4.start && s2 >= t4.start && s2 < t4.end && ea.some((t5) => t5.key === e4)) return e4;
    }, eW = (e3) => `${h2(e3)}${es}`, eV = (e3) => `${e3.label}, ${eW(e3.value)}, ${N(e3.value / (en || 1))}${e3.members ? `. Includes ${e3.members.map((e4) => e4.label).join(", ")}` : ""}`, eQ = (0, n.useRef)([]), eF = (e3, t3, r3) => ({ ArrowDown: t3 + 1, ArrowRight: t3 + 1, ArrowUp: t3 - 1, ArrowLeft: t3 - 1, Home: 0, End: r3 - 1 })[e3], eB = (e3) => {
      e3.relatedTarget instanceof Node && e3.currentTarget.closest("ul")?.contains(e3.relatedTarget) || eg(null);
    }, eU = e$ ? e$.key : en ? "__total" : "__empty", eK = [{ key: "__total", label: en ? m2 : U, value: en, meta: null }, ...H.map((e3) => ({ key: e3.key, label: e3.label, value: e3.value, meta: e3 }))], eq = Math.max(0, eK.findIndex((e3) => e3.key === ("__empty" === eU ? "__total" : eU))), ez = en ? `${t2}. ${m2} ${eW(en)}. ${ea.map(eV).join(". ")}.` : `${t2}. ${U}.`, eY = `${t2}. Use the arrow keys to read each segment.`;
    return (0, a.jsxs)("figure", { ref: Z, className: [f().figure, q].filter(Boolean).join(" "), "aria-label": t2, "data-legend": B || void 0, children: [(0, a.jsxs)("div", { className: f().ring, style: { width: $2, "--inner": `${2 * ew / $2 * 100}%` }, tabIndex: B ? void 0 : 0, role: B ? void 0 : "group", "aria-label": B ? void 0 : eY, onKeyDown: B ? void 0 : (e3) => {
      if (!ea.length) return;
      if ("Escape" === e3.key) {
        e3.preventDefault(), eg(null), ev && ek(null);
        return;
      }
      if (("Enter" === e3.key || " " === e3.key) && e_) {
        e3.preventDefault(), ek(ev === e_ ? null : e_);
        return;
      }
      let t3 = ea.findIndex((e4) => e4.key === e_), r3 = eF(e3.key, t3 < 0 ? e3.key.endsWith("Up") || e3.key.endsWith("Left") ? 0 : -1 : t3, ea.length);
      if (void 0 === r3) return;
      e3.preventDefault();
      let a2 = ea[(r3 + ea.length) % ea.length];
      eg(a2.key), ex(eV(a2));
    }, onBlur: B ? void 0 : () => eg(null), children: [(0, a.jsxs)("svg", { ref: eT, className: f().svg, viewBox: `0 0 ${$2} ${$2}`, "aria-hidden": "true", focusable: "false", onPointerMove: (e3) => {
      if ("mouse" !== e3.pointerType) return;
      let t3 = eO(e3);
      void 0 !== t3 && t3 !== ep && eg(t3);
    }, onPointerLeave: () => eg(null), onClick: (e3) => {
      let t3 = eO(e3);
      t3 && ek(ev === t3 ? null : t3);
    }, "data-hovering": null !== e_ || void 0, children: [(0, a.jsx)("circle", { className: f().track, cx: eM, cy: eM, r: (ej + ew) / 2, strokeWidth: ej - ew, "data-idle": !eC || !en || void 0 }), ec.map((e3) => (0, a.jsx)("path", { ref: eA, "data-key": e3.key, className: f().segment, "data-active": e3.key === e_ || void 0, "data-dim": null !== e_ && e3.key !== e_ || void 0, style: { "--slice": eu(e3) } }, e3.key))] }), (0, a.jsx)("div", { className: f().center, "aria-hidden": "true", children: eK.map((e3, t3) => {
      let n2;
      return (0, a.jsxs)(c.PY1.span, { className: f().readout, initial: false, ...{ animate: { opacity: +(0 == (n2 = t3 - eq)), y: `${0.45 * Math.sign(n2)}em` }, transition: Y ? { duration: 0 } : 0 === n2 ? { duration: _.standard, ease: [...g.enter] } : { duration: _.fast, ease: [...g.standard] } }, children: [(0, a.jsx)("span", { className: f().centerLabel, children: e3.label }), (0, a.jsx)("span", { className: f().centerValue, children: e3.value || e3.meta ? (0, a.jsx)(L, { value: e3.value, format: h2, reduced: Y }) : " " }), (0, a.jsx)("span", { className: f().centerMeta, children: e3.meta ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(L, { value: en && !er.has(e3.key) ? e3.value / en : 0, format: N, reduced: Y }), " of ", m2.toLowerCase()] }) : r2 || " " })] }, e3.key);
    }) })] }), B && H.length > 0 && (0, a.jsx)("ul", { className: f().legend, "aria-label": `${t2}, segments${"toggle" === F ? ". Press a segment to show or hide it" : ""}`, id: G, onPointerLeave: () => eg(null), children: (0, a.jsx)(d.N, { initial: false, children: H.map((e3, t3) => {
      let r3 = er.has(e3.key);
      return (0, a.jsx)(c.PY1.li, { className: f().item, initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: Y ? { duration: 0 } : p.smooth, children: (0, a.jsxs)("button", { ref: (e4) => {
        e4 && (eQ.current[t3] = e4);
      }, type: "button", className: f().row, "aria-pressed": "toggle" === F ? !r3 : ev === e3.key, "aria-label": r3 ? `${e3.label}, hidden` : eV(e3), "data-active": e3.key === e_ || void 0, "data-pinned": ev === e3.key || void 0, "data-hidden": r3 || void 0, style: { "--slice": eu(e3) }, onClick: () => "toggle" === F ? ((e4) => {
        let t4 = er.has(e4);
        if (!t4 && ea.length <= 1) return;
        let r4 = t4 ? et.filter((t5) => t5 !== e4) : [...et, e4];
        void 0 === W && ee(r4), Q?.(r4);
        let a2 = H.find((t5) => t5.key === e4), n2 = H.reduce((e5, t5) => e5 + (r4.includes(t5.key) ? 0 : t5.value), 0);
        a2 && ex(`${a2.label} ${t4 ? "shown" : "hidden"}. ${m2} ${h2(n2)}${es}.`);
      })(e3.key) : ek(ev === e3.key ? null : e3.key), onPointerEnter: (t4) => {
        "mouse" === t4.pointerType && eg(r3 ? null : e3.key);
      }, onFocus: (t4) => {
        t4.currentTarget.matches(":focus-visible") && eg(r3 ? null : e3.key);
      }, onBlur: eB, onKeyDown: (e4) => ((e5, t4) => {
        if ("Escape" === e5.key && ev) {
          e5.preventDefault(), ek(null);
          return;
        }
        let r4 = eF(e5.key, t4, H.length);
        void 0 !== r4 && (e5.preventDefault(), eQ.current[(r4 + H.length) % H.length]?.focus());
      })(e4, t3), children: [(0, a.jsx)("span", { className: f().dot, "aria-hidden": "true" }), (0, a.jsxs)("span", { className: f().rowText, children: [(0, a.jsx)("span", { className: f().rowLabel, children: e3.label }), e3.members && (0, a.jsx)("span", { className: f().rowMembers, children: e3.members ? e3.members.length > 2 ? `${e3.members.slice(0, 2).map((e4) => e4.label).join(", ")} and ${e3.members.length - 2} more` : e3.members.map((e4) => e4.label).join(" and ") : null })] }), (0, a.jsx)("span", { className: f().rowValue, "aria-hidden": "true", children: (0, a.jsx)(L, { value: e3.value, format: h2, reduced: Y }) }), (0, a.jsx)("span", { className: f().rowShare, "aria-hidden": "true", children: (0, a.jsx)(L, { value: r3 || !en ? 0 : e3.value / en, format: N, reduced: Y }) })] }) }, e3.key);
    }) }) }), (0, a.jsx)("p", { className: f().srOnly, children: ez }), (0, a.jsx)("p", { className: f().srOnly, "aria-live": "polite", children: eb }), en > 0 && (0, a.jsx)("div", { className: f().srOnly, children: (0, a.jsxs)("table", { children: [(0, a.jsx)("caption", { children: t2 }), (0, a.jsx)("thead", { children: (0, a.jsxs)("tr", { children: [(0, a.jsx)("th", { scope: "col", children: "Segment" }), (0, a.jsx)("th", { scope: "col", children: "Value" }), (0, a.jsx)("th", { scope: "col", children: "Share" })] }) }), (0, a.jsx)("tbody", { children: ea.flatMap((e3) => e3.members ? e3.members.map((e4) => ({ key: e4.key, label: `${e4.label} (${D})`, value: e4.value })) : [e3]).map((e3) => (0, a.jsxs)("tr", { children: [(0, a.jsx)("th", { scope: "row", children: e3.label }), (0, a.jsx)("td", { children: eW(e3.value) }), (0, a.jsx)("td", { children: N(e3.value / en) })] }, e3.key)) })] }) })] });
  }
}

__m(__module,__exports,__require);
}