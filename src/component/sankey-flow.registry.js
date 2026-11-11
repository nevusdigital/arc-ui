/* sankey-flow (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(20942, ".figure{display:grid;min-width:0;gap:var(--space-3);margin:0;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.stages{position:relative;min-width:0;height:20px}\n.stage{position:absolute;top:0;color:var(--text-muted);font-size:var(--text-xs);line-height:20px;white-space:nowrap}\n.stage[data-hidden]{visibility:hidden}\n.footer{display:flex;min-width:0;justify-content:flex-end}\n.flowToggle{display:inline-flex;min-height:32px;flex:none;align-items:center;gap:8px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);cursor:pointer;font:inherit;font-size:var(--text-sm);line-height:1;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.flowToggle:active{transform:scale(.97)}\n.flowToggle[aria-pressed=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.flowToggle:hover{border-color:var(--border-strong);color:var(--foreground)}\n.flowToggle[aria-pressed=true] .flowIcon span{opacity:1;animation:drift 1.2s var(--ease-in-out) infinite}\n.flowToggle[aria-pressed=true] .flowIcon span:nth-child(2){animation-delay:.15s}\n.flowToggle[aria-pressed=true] .flowIcon span:nth-child(3){animation-delay:.3s}\n@media (prefers-reduced-motion:reduce){.band,.flowIcon span,.flowToggle,.nodeLabel,.node,.tooltip{transition:none}\n.flowToggle[aria-pressed=true] .flowIcon span{animation:none}\n.flowIcon{display:inline-flex;width:14px;justify-content:space-between}\n.flowIcon span{width:3px;height:3px;border-radius:50%;background:currentColor;opacity:.45;transition:opacity var(--duration-fast) var(--ease-standard)}\n.chart,.plot{position:relative;min-width:0}\n.chart[data-focus] .band{fill:color-mix(in oklab,var(--foreground) 5%,transparent)}\n@media (hover:hover) and (pointer:fine){.chart:not([data-focus]) .band:hover{fill:color-mix(in oklab,var(--foreground) 14%,transparent)}\n.chart[data-focus] .node{fill:color-mix(in oklab,var(--foreground) 28%,var(--surface))}\n.chart[data-glow=\"0\"]{--glow:var(--series-1)}\n.chart[data-glow=\"1\"]{--glow:var(--series-2)}\n.chart[data-glow=\"2\"]{--glow:var(--series-3)}\n.chart[data-glow=\"3\"]{--glow:var(--series-4)}\n.chart [data-slot=\"0\"]{--ink:var(--series-1)}\n.chart [data-slot=\"1\"]{--ink:var(--series-2)}\n.chart [data-slot=\"2\"]{--ink:var(--series-3)}\n.chart [data-slot=\"3\"]{--ink:var(--series-4)}\n.chart[data-focus] .band[data-slot]{fill:color-mix(in oklab,var(--ink) 7%,transparent)}\n@media (hover:hover) and (pointer:fine){.chart:not([data-focus]) .band[data-slot]:hover{fill:color-mix(in oklab,var(--ink) 36%,transparent)}\n.chart[data-focus] .node[data-slot]{fill:color-mix(in oklab,var(--ink) 40%,var(--surface))}\n.plot{outline:none;touch-action:pan-y;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}\n.svg{position:relative;display:block;overflow:visible}\n.canvas{position:absolute;inset:0;display:block;pointer-events:none}\n.inks{position:absolute;width:0;height:0;overflow:hidden;background:var(--glow,var(--accent));color:var(--foreground);pointer-events:none}\n.band{fill:color-mix(in oklab,var(--foreground) 9%,transparent);cursor:pointer;transition:fill var(--duration-fast) var(--ease-standard)}\n.band[data-slot]{fill:color-mix(in oklab,var(--ink) 22%,transparent)}\n.glows{pointer-events:none}\n.glow{fill:color-mix(in oklab,var(--glow,var(--accent)) 34%,transparent)}\n.node{fill:color-mix(in oklab,var(--foreground) 72%,var(--surface));cursor:pointer;transition:fill var(--duration-fast) var(--ease-standard)}\n.node[data-slot]{fill:var(--ink)}\n.nodeGlow{fill:var(--glow,var(--accent));pointer-events:none}\n.labels{position:absolute;inset:0;pointer-events:none}\n.nodeLabel{position:absolute;top:0;left:0;display:grid;gap:1px;line-height:1.2;white-space:nowrap;text-shadow:0 0 2px var(--surface),0 0 4px var(--surface),0 0 8px var(--surface);transition:opacity var(--duration-fast) var(--ease-standard)}\n.nodeLabel[data-size=short]{grid-auto-flow:column;gap:6px;align-items:baseline}\n.nodeLabel[data-size=none]{opacity:0}\n.nodeLabel[data-size=short] .nodeValue{font-size:var(--text-xs)}\n.nodeLabel[data-lit] .nodeName{color:var(--foreground)}\n.nodeName{overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);text-overflow:ellipsis}\n.nodeValue{overflow:hidden;color:var(--foreground);font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;font-variant-numeric:tabular-nums}\n.tooltip{position:absolute;top:0;left:0;z-index:2;display:grid;min-width:168px;max-width:min(240px,100%);gap:2px;padding:10px 12px;border:1px solid var(--border);border-radius:14px;background:var(--surface-raised);box-shadow:var(--shadow-floating);opacity:0;pointer-events:none;scale:.96;transition:opacity var(--duration-fast) var(--ease-standard),scale var(--duration-fast) var(--ease-standard)}\n.tooltip[data-on]{opacity:1;scale:1}\n.tipTitle{margin:0;color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body)}\n.tipValue{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:1.3;font-variant-numeric:tabular-nums}\n.tipNote{margin:0 0 2px;font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.tipNote,.tipRow{color:var(--text-muted);line-height:var(--leading-body)}\n.tipRow{display:flex;justify-content:space-between;gap:12px;margin:0;font-size:var(--text-xs)}\n.tipShare{color:var(--foreground);font-variant-numeric:tabular-nums}\n.message{position:absolute;inset:0;display:grid;place-items:center;margin:0;color:var(--text-muted);font-size:var(--text-sm);pointer-events:none}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"figure":"figure","stages":"stages","stage":"stage","footer":"footer","flowToggle":"flowToggle","flowIcon":"flowIcon","band":"band","nodeLabel":"nodeLabel","node":"node","tooltip":"tooltip","chart":"chart","plot":"plot","svg":"svg","canvas":"canvas","inks":"inks","glows":"glows","glow":"glow","nodeGlow":"nodeGlow","labels":"labels","nodeValue":"nodeValue","nodeName":"nodeName","tipTitle":"tipTitle","tipValue":"tipValue","tipNote":"tipNote","tipRow":"tipRow","tipShare":"tipShare","message":"message","srOnly":"srOnly"});
A.reg(27296, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SankeyFlowDemo: () => O, default: () => P });
  var l = a(95155), r = a(12115), n = a(18310), s = a(61792), o = a(92171), i = a(28245), d = a(22535), u = a(25354), c = a(7770), f = a(20942), g = a.n(f);
  let { spring: m } = c.T, h = ({ visualDuration: e2, bounce: t2 }, a2 = 1e-3) => {
    let l2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: l2 * l2,
      damping: 2 * (1 - t2) * l2,
      restDelta: a2,
      restSpeed: 2 * a2
    };
  }, p = h(m.smooth), y = h({ visualDuration: 0.95, bounce: 0 }), x = h({ visualDuration: 0.34, bounce: 0 }), v = h(m.snappy, 0.01), w = { stiffness: v.stiffness, damping: v.damping, restDelta: 0.01 }, b = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), _ = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 0
  }), k = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), j = (e2) => `${e2.source}>${e2.target}`;
  function M(e2, t2, a2, l2) {
    let r2 = t2.filter(
      (t3) => t3.value > 0 && e2.some((e3) => e3.id === t3.source) && e2.some((e3) => e3.id === t3.target)
    ), n2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map();
    for (let e3 of r2)
      s2.set(e3.source, (s2.get(e3.source) ?? 0) + e3.value), n2.set(e3.target, (n2.get(e3.target) ?? 0) + e3.value);
    let o2 = /* @__PURE__ */ new Map(), i2 = (t3, a3 = /* @__PURE__ */ new Set()) => {
      let l3 = e2.find((e3) => e3.id === t3)?.column;
      if (void 0 !== l3) return l3;
      if (o2.has(t3)) return o2.get(t3);
      if (a3.has(t3)) return 0;
      a3.add(t3);
      let n3 = r2.filter((e3) => e3.target === t3).map((e3) => i2(e3.source, a3) + 1), s3 = n3.length ? Math.max(...n3) : 0;
      return o2.set(t3, s3), s3;
    };
    for (let t3 of e2) o2.set(t3.id, i2(t3.id));
    let d2 = Math.max(1, ...[...o2.values()].map((e3) => e3 + 1)), u2 = l2 - 4, c2 = Array.from(
      { length: d2 },
      (t3, a3) => e2.filter(
        (e3) => o2.get(e3.id) === a3 && Math.max(n2.get(e3.id) ?? 0, s2.get(e3.id) ?? 0) > 0
      )
    ), f2 = (e3) => Math.max(n2.get(e3) ?? 0, s2.get(e3) ?? 0), g2 = Math.min(
      ...c2.filter((e3) => e3.length).map(
        (e3) => (u2 - (e3.length - 1) * 14) / Math.max(
          1e-9,
          e3.reduce((e4, t3) => e4 + f2(t3.id), 0)
        )
      )
    ), m2 = d2 > 1 ? (a2 - 10) / (d2 - 1) : 0, h2 = /* @__PURE__ */ new Map();
    c2.forEach((e3, t3) => {
      let a3 = 4 + (u2 - (e3.reduce((e4, t4) => e4 + f2(t4.id) * g2, 0) + (e3.length - 1) * 14)) / 2;
      for (let l3 of e3) {
        let e4 = f2(l3.id) * g2;
        h2.set(l3.id, {
          id: l3.id,
          label: l3.label,
          column: t3,
          value: f2(l3.id),
          x0: t3 * m2,
          x1: t3 * m2 + 10,
          y0: a3,
          y1: a3 + e4
        }), a3 += e4 + 14;
      }
    });
    let p2 = (e3) => (e3.y0 + e3.y1) / 2, y2 = (e3) => {
      let t3 = e3.map((e4) => h2.get(e4.id)), a3 = 4;
      for (let e4 of t3) {
        let t4 = e4.y1 - e4.y0;
        e4.y0 < a3 && (e4.y0 = a3, e4.y1 = a3 + t4), a3 = e4.y1 + 14;
      }
      let r3 = l2;
      for (let e4 of [...t3].reverse()) {
        let t4 = e4.y1 - e4.y0;
        e4.y1 > r3 && (e4.y1 = r3, e4.y0 = r3 - t4), r3 = e4.y0 - 14;
      }
    };
    for (let e3 = 0, t3 = 0.9; e3 < 6; e3++, t3 *= 0.7)
      for (let [e4, a3] of [
        [1, c2.slice(1)],
        [-1, c2.slice(0, -1).reverse()]
      ])
        for (let l3 of a3) {
          for (let a4 of l3) {
            let l4 = h2.get(a4.id), n3 = r2.filter(
              (t4) => 1 === e4 ? t4.target === a4.id : t4.source === a4.id
            ), s3 = n3.reduce((e5, t4) => e5 + t4.value, 0);
            if (!s3) continue;
            let o3 = (n3.reduce(
              (t4, a5) => t4 + p2(h2.get(1 === e4 ? a5.source : a5.target)) * a5.value,
              0
            ) / s3 - p2(l4)) * t3;
            l4.y0 += o3, l4.y1 += o3;
          }
          y2(l3);
        }
    let x2 = /* @__PURE__ */ new Map(), v2 = /* @__PURE__ */ new Map(), w2 = /* @__PURE__ */ new Map();
    for (let e3 of [...r2].sort(
      (e4, t3) => p2(h2.get(e4.target)) - p2(h2.get(t3.target)) || p2(h2.get(e4.source)) - p2(h2.get(t3.source))
    )) {
      let t3 = h2.get(e3.source), a3 = v2.get(e3.source) ?? 0;
      v2.set(e3.source, a3 + e3.value * g2), x2.set(j(e3), {
        id: j(e3),
        source: e3.source,
        target: e3.target,
        value: e3.value,
        sy: t3.y0 + a3,
        ty: 0,
        w: e3.value * g2
      });
    }
    for (let e3 of [...r2].sort(
      (e4, t3) => p2(h2.get(e4.source)) - p2(h2.get(t3.source))
    )) {
      let t3 = h2.get(e3.target), a3 = w2.get(e3.target) ?? 0;
      w2.set(e3.target, a3 + e3.value * g2), x2.get(j(e3)).ty = t3.y0 + a3;
    }
    return { boxes: h2, bands: x2, columns: d2, scale: g2 };
  }
  function N(e2, t2, a2, l2, r2, n2 = false) {
    let s2 = (e2 + t2) / 2, o2 = (e3, t3) => n2 ? `${t3.toFixed(2)},${e3.toFixed(2)}` : `${e3.toFixed(2)},${t3.toFixed(2)}`;
    return `M${o2(e2, a2)}C${o2(s2, a2)} ${o2(s2, l2)} ${o2(t2, l2)}L${o2(t2, l2 + r2)}C${o2(s2, l2 + r2)} ${o2(s2, a2 + r2)} ${o2(e2, a2 + r2)}Z`;
  }
  let $ = (e2, t2, a2) => {
    let l2 = 1 - a2;
    return l2 * l2 * l2 * e2 + 3 * l2 * l2 * a2 * e2 + 3 * l2 * a2 * a2 * t2 + a2 * a2 * a2 * t2;
  }, A = (e2, t2, a2) => {
    let l2 = (e2 + t2) / 2, r2 = 1 - a2;
    return r2 * r2 * r2 * e2 + 3 * r2 * r2 * a2 * l2 + 3 * r2 * a2 * a2 * l2 + a2 * a2 * a2 * t2;
  }, R = () => () => {
  };
  function S({
    nodes: e2,
    links: t2,
    label: a2,
    columns: c2,
    unit: f2 = "",
    totalLabel: m2 = "the total",
    formatValue: h2 = (e3) => b.format(e3),
    height: v2 = 340,
    particles: j2,
    defaultParticles: L2 = true,
    onParticlesChange: F2,
    particleToggle: D2 = true,
    emptyLabel: T2 = "No flows yet",
    ref: C2,
    className: E2
  }) {
    let I2, O2 = (I2 = (0, r.useSyncExternalStore)(
      R,
      () => true,
      () => false
    ), !!(0, n.I)() && I2), P2 = (0, r.useRef)(null), z = (0, r.useRef)(null), W = (0, r.useRef)(null), V = (0, r.useRef)(null), q = (0, r.useRef)(null), U = (0, r.useRef)(null), J = (0, r.useRef)(null);
    (0, r.useImperativeHandle)(C2, () => P2.current);
    let Y = (0, s.W)(P2, { once: true, amount: 0.3 }), B = (0, s.W)(P2, { amount: 0 }), [H, Q] = (0, r.useState)(0);
    (0, r.useLayoutEffect)(() => {
      let e3 = z.current;
      if (!e3 || (Q(e3.clientWidth), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(() => Q(e3.clientWidth));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let [X, G] = (0, r.useState)(L2), K = (j2 ?? X) && !O2, Z = JSON.stringify([e2, t2]), ee = k(
      6.6 * Math.max(
        0,
        ...e2.filter(
          (e3) => t2.some((t3) => t3.target === e3.id) && !t2.some((t3) => t3.source === e3.id)
        ).map(
          (e3) => Math.max(
            e3.label.length,
            h2(
              t2.filter((t3) => t3.target === e3.id).reduce((e4, t3) => e4 + t3.value, 0)
            ).length + 1
          )
        )
      ) + 14,
      48,
      120
    ), et = H > 0 && H < 420, ea = et ? Math.max(v2, 480) : v2, el = (0, r.useMemo)(
      () => H ? et ? M(e2, t2, ea - 40, H) : M(e2, t2, Math.max(120, H - ee), v2) : null,
      [Z, H, v2, ee, et, ea]
    ), er = !el || 0 === el.bands.size, en = (0, r.useRef)(null), es = (0, r.useRef)({ links: /* @__PURE__ */ new Map(), nodes: /* @__PURE__ */ new Map() }), [eo, ei] = (0, r.useState)(null), [ed, eu] = (0, r.useState)(null), ec = eo && el && ("node" === eo.kind ? el.boxes.has(eo.id) : el.bands.has(eo.id)) ? eo : null, ef = (0, r.useRef)(ee), eg = (0, r.useRef)(et);
    (0, r.useLayoutEffect)(() => {
      ef.current = ee, eg.current = et;
    });
    let em = (0, r.useCallback)(() => {
      let e3 = en.current;
      if (!e3) return;
      let t3 = eg.current, a3 = (e4, t4) => new Map(
        [...e4?.querySelectorAll(`[${t4}]`) ?? []].map((e5) => [
          e5.getAttribute(t4),
          e5
        ])
      ), l2 = a3(U.current, "data-band"), r2 = a3(U.current, "data-glow"), n2 = a3(U.current, "data-node"), s2 = a3(U.current, "data-node-glow"), o2 = a3(J.current, "data-label");
      for (let [a4, n3] of e3.bands) {
        let s3 = e3.boxes.get(n3.source), o3 = e3.boxes.get(n3.target);
        if (!s3 || !o3) continue;
        l2.get(a4)?.setAttribute(
          "d",
          n3.w > 0.05 ? N(s3.x1, o3.x0, n3.sy, n3.ty, n3.w, t3) : ""
        );
        let i3 = (es.current.links.get(a4) ?? 0) * e3.scale;
        r2.get(a4)?.setAttribute(
          "d",
          i3 > 0.05 ? N(s3.x1, o3.x0, n3.sy, n3.ty, Math.min(n3.w, i3), t3) : ""
        );
      }
      let i2 = (e4, a4, l3) => {
        e4 && (e4.setAttribute("x", (t3 ? a4.y0 : a4.x0).toFixed(2)), e4.setAttribute("y", (t3 ? a4.x0 : a4.y0).toFixed(2)), e4.setAttribute("width", (t3 ? Math.max(0, l3) : 10).toFixed(2)), e4.setAttribute("height", (t3 ? 10 : Math.max(0, l3)).toFixed(2)));
      }, d2 = e3.columns > 1 && e3.boxes.size ? Math.max(...[...e3.boxes.values()].map((e4) => e4.x0)) / (e3.columns - 1) : 0;
      for (let [a4, l3] of e3.boxes) {
        let r3 = l3.y1 - l3.y0;
        i2(n2.get(a4), l3, r3), i2(
          s2.get(a4),
          l3,
          Math.min(r3, (es.current.nodes.get(a4) ?? 0) * e3.scale)
        );
        let u2 = o2.get(a4);
        u2 && (t3 ? (u2.style.transform = `translate(${l3.y0.toFixed(1)}px, ${(l3.x1 + 6).toFixed(1)}px)`, u2.style.maxWidth = `${Math.max(24, r3 + 14 - 6)}px`, u2.dataset.size = r3 >= 22 ? "tall" : "none") : (u2.style.transform = `translate(${(l3.x1 + 7).toFixed(1)}px, ${((l3.y0 + l3.y1) / 2).toFixed(1)}px) translateY(-50%)`, u2.style.maxWidth = `${Math.max(24, l3.column === e3.columns - 1 ? ef.current - 9 : d2 - 10 - 12)}px`, u2.dataset.size = r3 >= 30 ? "tall" : r3 >= 13 ? "short" : "none"));
      }
    }, []), eh = (0, r.useRef)(null), ep = (0, r.useRef)("");
    (0, r.useEffect)(() => {
      if (!el || !Y && !O2) return;
      let e3 = en.current, t3 = !e3, a3 = new Map(
        [...el.boxes].map(([a4, l3]) => [
          a4,
          e3?.boxes.get(a4) ?? (t3 ? {
            ...l3,
            y0: l3.y0 + (l3.y1 - l3.y0) / 2,
            y1: l3.y0 + (l3.y1 - l3.y0) / 2
          } : { ...l3, y0: (l3.y0 + l3.y1) / 2, y1: (l3.y0 + l3.y1) / 2 })
        ])
      ), l2 = new Map(
        [...el.bands].map(([a4, l3]) => [
          a4,
          e3?.bands.get(a4) ?? {
            ...l3,
            w: 0,
            sy: l3.sy + (t3 ? l3.w / 2 : 0),
            ty: l3.ty + (t3 ? l3.w / 2 : 0)
          }
        ])
      ), r2 = e3?.scale ?? el.scale;
      eh.current?.stop();
      let n2 = ep.current === Z;
      if (ep.current = Z, O2 || n2 && !t3) {
        en.current = el, em();
        return;
      }
      return eh.current = (0, o.i)(0, 1, {
        ...t3 ? y : p,
        onUpdate: (e4) => {
          en.current = {
            columns: el.columns,
            scale: r2 + (el.scale - r2) * e4,
            boxes: new Map(
              [...el.boxes].map(([t4, l3]) => {
                let r3 = a3.get(t4);
                return [
                  t4,
                  {
                    ...l3,
                    x0: r3.x0 + (l3.x0 - r3.x0) * e4,
                    x1: r3.x1 + (l3.x1 - r3.x1) * e4,
                    y0: r3.y0 + (l3.y0 - r3.y0) * e4,
                    y1: r3.y1 + (l3.y1 - r3.y1) * e4
                  }
                ];
              })
            ),
            bands: new Map(
              [...el.bands].map(([t4, a4]) => {
                let r3 = l2.get(t4);
                return [
                  t4,
                  {
                    ...a4,
                    sy: r3.sy + (a4.sy - r3.sy) * e4,
                    ty: r3.ty + (a4.ty - r3.ty) * e4,
                    w: r3.w + (a4.w - r3.w) * e4
                  }
                ];
              })
            )
          }, em();
        },
        onComplete: () => {
          en.current = el, em();
        }
      }), () => eh.current?.stop();
    }, [el, Y, O2, em]), (0, r.useLayoutEffect)(em);
    let ey = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      if (!el) return;
      let e3 = (function(e4, t4) {
        let a4 = /* @__PURE__ */ new Map(), l3 = /* @__PURE__ */ new Map();
        if (!e4) return { links: a4, nodes: l3 };
        let r2 = [...t4.bands.values()], n2 = "link" === e4.kind ? t4.bands.get(e4.id) : void 0;
        if ("link" === e4.kind && !n2) return { links: a4, nodes: l3 };
        let s2 = (e5) => r2.filter((t5) => t5.target === e5), o2 = (e5) => r2.filter((t5) => t5.source === e5), i2 = (e5) => e5.reduce((e6, t5) => e6 + t5.value, 0), d2 = [...t4.boxes.values()].sort((e5, t5) => e5.column - t5.column), u2 = (t5) => "node" === e4.kind && e4.id === t5, c3 = /* @__PURE__ */ new Map(), f3 = /* @__PURE__ */ new Map();
        for (let r3 of (n2 ? (a4.set(n2.id, n2.value), l3.set(n2.source, n2.value), l3.set(n2.target, n2.value)) : (c3.set(e4.id, 1), f3.set(e4.id, 1), l3.set(e4.id, t4.boxes.get(e4.id)?.value ?? 0)), d2)) {
          if (u2(r3.id)) continue;
          let e5 = s2(r3.id).reduce(
            (e6, t5) => e6 + (t5 === n2 ? t5.value : t5.value * (c3.get(t5.source) ?? 0)),
            0
          );
          if (e5) {
            for (let e6 of s2(r3.id))
              e6 !== n2 && c3.get(e6.source) && a4.set(e6.id, e6.value * c3.get(e6.source));
            c3.set(r3.id, e5 / (i2(s2(r3.id)) || 1)), l3.set(r3.id, Math.max(l3.get(r3.id) ?? 0, e5));
          }
        }
        for (let e5 of [...d2].reverse()) {
          if (u2(e5.id)) continue;
          let t5 = o2(e5.id).reduce(
            (e6, t6) => e6 + (t6 === n2 ? t6.value : t6.value * (f3.get(t6.target) ?? 0)),
            0
          );
          if (t5) {
            for (let t6 of o2(e5.id))
              t6 !== n2 && f3.get(t6.target) && a4.set(t6.id, t6.value * f3.get(t6.target));
            f3.set(e5.id, t5 / (i2(s2(e5.id)) || i2(o2(e5.id)) || 1)), l3.set(e5.id, Math.max(l3.get(e5.id) ?? 0, t5));
          }
        }
        return { links: a4, nodes: l3 };
      })(ec, el), t3 = es.current, a3 = /* @__PURE__ */ new Set([...t3.links.keys(), ...e3.links.keys()]), l2 = /* @__PURE__ */ new Set([...t3.nodes.keys(), ...e3.nodes.keys()]);
      if (ey.current?.stop(), O2) {
        es.current = e3, em();
        return;
      }
      return ey.current = (0, o.i)(0, 1, {
        ...x,
        onUpdate: (r2) => {
          es.current = {
            links: new Map(
              [...a3].map((a4) => [
                a4,
                (t3.links.get(a4) ?? 0) + ((e3.links.get(a4) ?? 0) - (t3.links.get(a4) ?? 0)) * r2
              ])
            ),
            nodes: new Map(
              [...l2].map((a4) => [
                a4,
                (t3.nodes.get(a4) ?? 0) + ((e3.nodes.get(a4) ?? 0) - (t3.nodes.get(a4) ?? 0)) * r2
              ])
            )
          }, em();
        },
        onComplete: () => {
          es.current = e3, em();
        }
      }), () => ey.current?.stop();
    }, [ec?.kind, ec?.id, el, em, O2]);
    let ex = (0, r.useRef)(/* @__PURE__ */ new Map());
    (0, r.useEffect)(() => {
      let e3 = W.current;
      if (!e3 || !K || !B || !el || !H) {
        let t4 = e3?.getContext("2d");
        t4?.clearRect(0, 0, e3.width, e3.height);
        return;
      }
      let t3 = e3.getContext("2d");
      if (!t3) return;
      let a3 = Math.min(2, window.devicePixelRatio || 1);
      for (let [t4, l3] of (e3.width = Math.round(H * a3), e3.height = Math.round(ea * a3), el.bands)) {
        let e4 = el.boxes.get(l3.source), a4 = el.boxes.get(l3.target), r3 = k(Math.round(l3.w * (a4.x0 - e4.x1) / 520), 1, 34), n3 = ex.current.get(t4) ?? [];
        for (; n3.length < r3; )
          n3.push({ t: Math.random(), lane: 0.12 + 0.76 * Math.random() });
        n3.length = r3, ex.current.set(t4, n3);
      }
      let l2 = { ink: "#888", accent: "#888" }, r2 = 0, n2 = performance.now(), s2 = 0, o2 = () => {
        let e4 = q.current;
        if (!e4) return;
        let t4 = getComputedStyle(e4);
        l2 = { ink: t4.color, accent: t4.backgroundColor };
      };
      o2();
      let i2 = (e4) => {
        let d2 = Math.min(0.05, (e4 - n2) / 1e3);
        n2 = e4, ++r2 % 30 == 0 && o2();
        let u2 = en.current;
        if (t3.setTransform(a3, 0, 0, a3, 0, 0), t3.clearRect(0, 0, H, ea), u2) {
          let e5 = es.current.links.size > 0 && [...es.current.links.values()].some((e6) => e6 > 0);
          for (let [a4, r3] of u2.bands) {
            let n3 = u2.boxes.get(r3.source), s3 = u2.boxes.get(r3.target), o3 = ex.current.get(a4);
            if (!n3 || !s3 || !o3 || r3.w < 0.5) continue;
            let i3 = Math.max(1, s3.x0 - n3.x1), c3 = r3.w ? Math.min(1, (es.current.links.get(a4) ?? 0) * u2.scale / r3.w) : 0;
            for (let a5 of o3) {
              a5.t = (a5.t + 46 * d2 / i3) % 1;
              let o4 = a5.t, u3 = A(n3.x1, s3.x0, o4), f3 = $(r3.sy, r3.ty, o4) + r3.w * a5.lane, g2 = et ? f3 : u3, m3 = et ? u3 : f3, h3 = a5.lane <= c3;
              t3.globalAlpha = (e5 ? h3 ? 0.95 : 0.08 : 0.42) * Math.min(1, 8 * o4, (1 - o4) * 8), t3.fillStyle = e5 && h3 ? l2.accent : l2.ink, t3.beginPath(), t3.arc(g2, m3, 1.15, 0, 2 * Math.PI), t3.fill();
            }
          }
        }
        s2 = requestAnimationFrame(i2);
      };
      return s2 = requestAnimationFrame(i2), () => {
        cancelAnimationFrame(s2), t3.setTransform(1, 0, 0, 1, 0, 0), t3.clearRect(0, 0, e3.width, e3.height);
      };
    }, [K, B, el, H, ea, et]);
    let ev = (0, i.d)(0), ew = (0, i.d)(0), eb = (0, d.z)(ev, w), e_ = (0, d.z)(ew, w), ek = (0, r.useRef)(false);
    (0, r.useLayoutEffect)(() => {
      let e3 = V.current;
      if (!e3 || !ec || !el) {
        ek.current = false;
        return;
      }
      let t3 = ed?.x, a3 = ed?.y;
      if (void 0 === t3 || void 0 === a3) {
        let e4, l3;
        if ("node" === ec.kind) {
          let t4 = el.boxes.get(ec.id);
          e4 = t4.x1, l3 = (t4.y0 + t4.y1) / 2;
        } else {
          let t4 = el.bands.get(ec.id), a4 = el.boxes.get(t4.source), r3 = el.boxes.get(t4.target);
          e4 = (a4.x1 + r3.x0) / 2, l3 = (t4.sy + t4.ty) / 2 + t4.w / 2;
        }
        t3 = et ? l3 : e4, a3 = et ? e4 : l3;
      }
      let l2 = e3.offsetWidth, r2 = e3.offsetHeight, n2 = t3 + 14;
      n2 + l2 > H && (n2 = t3 - 14 - l2);
      let s2 = a3 - r2 - 14;
      s2 < 0 && (s2 = a3 + 14), ev.set(k(n2, 0, Math.max(0, H - l2))), ew.set(k(s2, 0, Math.max(0, ea - r2))), (!ek.current || O2) && (eb.jump(ev.get()), e_.jump(ew.get())), ek.current = true;
    });
    let ej = (e3) => {
      let t3 = z.current?.getBoundingClientRect();
      return t3 ? { x: e3.clientX - t3.left, y: e3.clientY - t3.top } : null;
    }, eM = (e3) => {
      let t3 = e3.target.closest?.("[data-band], [data-node]");
      if (!t3) return null;
      let a3 = t3.getAttribute("data-band");
      return a3 ? { kind: "link", id: a3 } : { kind: "node", id: t3.getAttribute("data-node") };
    }, eN = (0, r.useMemo)(
      () => new Map(
        el ? e2.filter((e3) => el.boxes.get(e3.id)?.column === 0).slice(0, 4).map((e3, t3) => [e3.id, t3]) : []
      ),
      [el, e2]
    ), e$ = (0, r.useMemo)(() => {
      if (!el) return [];
      let e3 = Array.from({ length: el.columns }, () => []);
      for (let t3 of el.boxes.values()) e3[t3.column].push(t3);
      return e3.map((e4) => e4.sort((e5, t3) => e5.y0 - t3.y0));
    }, [el]), eA = (e3) => `${h2(e3)}${f2 ? ` ${f2}` : ""}`, eR = el ? [...el.boxes.values()].filter((e3) => 0 === e3.column).reduce((e3, t3) => e3 + t3.value, 0) : 0, eS = (t3) => e2.find((e3) => e3.id === t3)?.label ?? t3, eL = (e3, t3) => el ? [...el.bands.values()].filter((a3) => a3[t3] === e3).sort((e4, t4) => t4.value - e4.value) : [], eF = null;
    if (ec && el)
      if ("node" === ec.kind) {
        let e3 = el.boxes.get(ec.id), t3 = eL(e3.id, "source"), a3 = eL(e3.id, "target"), l2 = (t3.length ? t3 : a3).slice(0, 4).map((a4) => [
          `${t3.length ? "to" : "from"} ${eS(t3.length ? a4.target : a4.source)}`,
          _.format(a4.value / (e3.value || 1))
        ]);
        eF = {
          title: e3.label,
          value: eA(e3.value),
          note: `${_.format(e3.value / (eR || 1))} of ${m2}`,
          rows: l2
        };
      } else {
        let e3 = el.bands.get(ec.id), t3 = el.boxes.get(e3.source), a3 = el.boxes.get(e3.target);
        eF = {
          title: `${t3.label} to ${a3.label}`,
          value: eA(e3.value),
          note: `${_.format(e3.value / (t3.value || 1))} of ${t3.label}, ${_.format(e3.value / (a3.value || 1))} of ${a3.label}`,
          rows: []
        };
      }
    let [eD, eT] = (0, r.useState)(eF), eC = eF ? JSON.stringify(eF) : "";
    eF && eC !== (eD ? JSON.stringify(eD) : "") && eT(eF);
    let eE = eF ?? eD, eI = eF ? `${eF.title}, ${eF.value}. ${eF.note}. ${eF.rows.map((e3) => `${e3[1]} ${e3[0]}`).join(", ")}` : "";
    return (0, l.jsxs)("figure", {
      ref: P2,
      className: [g().figure, E2].filter(Boolean).join(" "),
      "aria-label": a2,
      children: [
        !!c2?.length && !et && (0, l.jsx)("div", {
          className: g().stages,
          "aria-hidden": "true",
          children: c2.map((e3, t3) => {
            let a3 = el?.columns ?? c2.length, r2 = a3 > 1 ? (Math.max(120, H - ee) - 10) / (a3 - 1) : 0, n2 = t3 === a3 - 1 ? r2 / 2 + ee : r2 - 8;
            return (0, l.jsx)(
              "span",
              {
                className: g().stage,
                "data-hidden": 6.6 * e3.length > n2 || void 0,
                style: { left: t3 * r2 },
                children: e3
              },
              e3
            );
          })
        }),
        (0, l.jsx)("div", {
          className: g().chart,
          "data-focus": ec ? ec.kind : void 0,
          "data-glow": ec ? eN.get(
            "node" === ec.kind ? ec.id : el?.bands.get(ec.id)?.source ?? ""
          ) : void 0,
          children: (0, l.jsxs)("div", {
            ref: z,
            className: g().plot,
            style: { height: ea },
            role: "group",
            tabIndex: er ? -1 : 0,
            "aria-roledescription": "flow diagram",
            "aria-label": `${a2}. Arrow keys move between stages and nodes, Escape clears.`,
            onKeyDown: (e3) => {
              let t3;
              if (!el || er) return;
              if ("Escape" === e3.key && ec) {
                e3.preventDefault(), ei(null);
                return;
              }
              let a3 = ec?.kind === "node" ? el.boxes.get(ec.id) : void 0;
              if (a3)
                if (e3.key === (et ? "ArrowRight" : "ArrowDown") || e3.key === (et ? "ArrowLeft" : "ArrowUp")) {
                  let l2 = e$[a3.column], r2 = l2.indexOf(a3);
                  t3 = l2[k(
                    r2 + (e3.key === (et ? "ArrowRight" : "ArrowDown") ? 1 : -1),
                    0,
                    l2.length - 1
                  )];
                } else if (e3.key === (et ? "ArrowDown" : "ArrowRight") || e3.key === (et ? "ArrowUp" : "ArrowLeft")) {
                  let l2 = e$[a3.column + (e3.key === (et ? "ArrowDown" : "ArrowRight") ? 1 : -1)];
                  if (l2?.length) {
                    let e4 = (a3.y0 + a3.y1) / 2;
                    t3 = l2.reduce(
                      (t4, a4) => Math.abs((a4.y0 + a4.y1) / 2 - e4) < Math.abs((t4.y0 + t4.y1) / 2 - e4) ? a4 : t4
                    );
                  }
                } else
                  "Home" === e3.key ? t3 = e$[0]?.[0] : "End" === e3.key && (t3 = e$[e$.length - 1]?.[0]);
              else
                t3 = [
                  "ArrowRight",
                  "ArrowDown",
                  "ArrowUp",
                  "ArrowLeft",
                  "Home"
                ].includes(e3.key) ? e$[0]?.[0] : void 0;
              t3 && (e3.preventDefault(), eu(null), ei({ kind: "node", id: t3.id }));
            },
            onBlur: () => ei(null),
            onPointerLeave: (e3) => {
              "mouse" === e3.pointerType && (ei(null), eu(null));
            },
            onPointerMove: (e3) => {
              "mouse" === e3.pointerType && ec && eu(ej(e3));
            },
            onFocus: (e3) => {
              e3.currentTarget.matches(":focus-visible") && !ec && e$[0]?.[0] && ei({ kind: "node", id: e$[0][0].id });
            },
            children: [
              (0, l.jsx)("span", {
                ref: q,
                className: g().inks,
                "aria-hidden": "true"
              }),
              (0, l.jsxs)("svg", {
                ref: U,
                className: g().svg,
                width: "100%",
                height: ea,
                "aria-hidden": "true",
                focusable: "false",
                onPointerOver: (e3) => {
                  let t3 = eM(e3);
                  t3 && "mouse" === e3.pointerType && (eu(ej(e3)), ei(t3));
                },
                onPointerDown: (e3) => {
                  let t3 = eM(e3);
                  t3 && "mouse" !== e3.pointerType && (eu(ej(e3)), ei((e4) => e4 && t3 && e4.id === t3.id ? null : t3));
                },
                children: [
                  (0, l.jsx)("g", {
                    children: el && [...el.bands.values()].map(
                      (e3) => (0, l.jsx)(
                        "path",
                        {
                          "data-band": e3.id,
                          className: g().band,
                          "data-slot": eN.get(e3.source),
                          "data-lit": ec?.kind === "link" && ec.id === e3.id || void 0
                        },
                        e3.id
                      )
                    )
                  }),
                  (0, l.jsx)("g", {
                    className: g().glows,
                    children: el && [...el.bands.values()].map(
                      (e3) => (0, l.jsx)(
                        "path",
                        { "data-glow": e3.id, className: g().glow },
                        e3.id
                      )
                    )
                  }),
                  el && [...el.boxes.values()].map(
                    (e3) => (0, l.jsxs)(
                      "g",
                      {
                        children: [
                          (0, l.jsx)("rect", {
                            "data-node": e3.id,
                            className: g().node,
                            "data-slot": eN.get(e3.id),
                            rx: 2.5
                          }),
                          (0, l.jsx)("rect", {
                            "data-node-glow": e3.id,
                            className: g().nodeGlow,
                            rx: 2.5
                          })
                        ]
                      },
                      e3.id
                    )
                  )
                ]
              }),
              (0, l.jsx)("canvas", {
                ref: W,
                className: g().canvas,
                style: { width: "100%", height: ea },
                "aria-hidden": "true",
                "data-on": K || void 0
              }),
              (0, l.jsx)("div", {
                ref: J,
                className: g().labels,
                "aria-hidden": "true",
                children: el && [...el.boxes.values()].map(
                  (e3) => (0, l.jsxs)(
                    "div",
                    {
                      "data-label": e3.id,
                      className: g().nodeLabel,
                      "data-lit": ec?.kind === "node" && ec.id === e3.id || void 0,
                      children: [
                        (0, l.jsx)("span", {
                          className: g().nodeName,
                          children: e3.label
                        }),
                        (0, l.jsx)("span", {
                          className: g().nodeValue,
                          children: h2(e3.value)
                        })
                      ]
                    },
                    e3.id
                  )
                )
              }),
              (0, l.jsx)(u.PY1.div, {
                ref: V,
                className: g().tooltip,
                style: { x: O2 ? ev : eb, y: O2 ? ew : e_ },
                "data-on": !!eF || void 0,
                "aria-hidden": "true",
                children: eE && (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)("p", {
                      className: g().tipTitle,
                      children: eE.title
                    }),
                    (0, l.jsx)("p", {
                      className: g().tipValue,
                      children: eE.value
                    }),
                    (0, l.jsx)("p", {
                      className: g().tipNote,
                      children: eE.note
                    }),
                    eE.rows.map(
                      ([e3, t3]) => (0, l.jsxs)(
                        "p",
                        {
                          className: g().tipRow,
                          children: [
                            (0, l.jsx)("span", { children: e3 }),
                            (0, l.jsx)("span", {
                              className: g().tipShare,
                              children: t3
                            })
                          ]
                        },
                        e3
                      )
                    )
                  ]
                })
              }),
              er && H > 0 && (0, l.jsx)("p", { className: g().message, children: T2 })
            ]
          })
        }),
        D2 && !O2 && (0, l.jsx)("div", {
          className: g().footer,
          children: (0, l.jsxs)("button", {
            type: "button",
            className: g().flowToggle,
            "aria-pressed": K,
            onClick: () => {
              var e3;
              return e3 = !K, void (void 0 === j2 && G(e3), F2?.(e3));
            },
            children: [
              (0, l.jsxs)("span", {
                className: g().flowIcon,
                "aria-hidden": "true",
                children: [
                  (0, l.jsx)("span", {}),
                  (0, l.jsx)("span", {}),
                  (0, l.jsx)("span", {})
                ]
              }),
              "Flow"
            ]
          })
        }),
        (0, l.jsx)("p", {
          className: g().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: eI
        }),
        !er && el && (0, l.jsx)("div", {
          className: g().srOnly,
          children: (0, l.jsxs)("table", {
            children: [
              (0, l.jsx)("caption", { children: a2 }),
              (0, l.jsx)("thead", {
                children: (0, l.jsxs)("tr", {
                  children: [
                    (0, l.jsx)("th", { scope: "col", children: "From" }),
                    (0, l.jsx)("th", { scope: "col", children: "To" }),
                    (0, l.jsx)("th", { scope: "col", children: "Value" }),
                    (0, l.jsx)("th", {
                      scope: "col",
                      children: "Share of source"
                    })
                  ]
                })
              }),
              (0, l.jsx)("tbody", {
                children: [...el.bands.values()].map(
                  (e3) => (0, l.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, l.jsx)("th", {
                          scope: "row",
                          children: eS(e3.source)
                        }),
                        (0, l.jsx)("td", { children: eS(e3.target) }),
                        (0, l.jsx)("td", { children: eA(e3.value) }),
                        (0, l.jsx)("td", {
                          children: _.format(
                            e3.value / (el.boxes.get(e3.source)?.value || 1)
                          )
                        })
                      ]
                    },
                    e3.id
                  )
                )
              })
            ]
          })
        })
      ]
    });
  }
  var L = a(66558), F = a(62816), D = a.n(F);
  let T = [
    { id: "organic", label: "Organic" },
    { id: "paid", label: "Paid" },
    { id: "referral", label: "Referral" },
    { id: "activated", label: "Activated" },
    { id: "inactive", label: "Not activated" },
    { id: "free", label: "Free" },
    { id: "pro", label: "Pro" },
    { id: "team", label: "Team" },
    { id: "retained", label: "Retained" },
    { id: "churned", label: "Churned" }
  ], C = {
    q2: {
      period: "Apr to Jun 2026",
      flows: {
        "organic>activated": 2860,
        "organic>inactive": 1740,
        "paid>activated": 1420,
        "paid>inactive": 2080,
        "referral>activated": 1120,
        "referral>inactive": 380,
        "activated>free": 3310,
        "activated>pro": 1560,
        "activated>team": 530,
        "free>retained": 1690,
        "free>churned": 1620,
        "pro>retained": 1240,
        "pro>churned": 320,
        "team>retained": 480,
        "team>churned": 50
      }
    },
    q3: {
      period: "Jul to Sep 2026",
      flows: {
        "organic>activated": 3380,
        "organic>inactive": 1820,
        "paid>activated": 1990,
        "paid>inactive": 1910,
        "referral>activated": 1640,
        "referral>inactive": 460,
        "activated>free": 3860,
        "activated>pro": 2310,
        "activated>team": 840,
        "free>retained": 2120,
        "free>churned": 1740,
        "pro>retained": 1960,
        "pro>churned": 350,
        "team>retained": 790,
        "team>churned": 50
      }
    }
  }, E = [
    { value: "q2", label: "Q2" },
    { value: "q3", label: "Q3" }
  ], I = new Intl.NumberFormat("en-US");
  function O() {
    let e2 = (0, r.useId)(), [t2, a2] = (0, r.useState)("q3"), { period: n2, flows: s2 } = C[t2], o2 = Object.entries(s2).map(([e3, t3]) => {
      let [a3, l2] = e3.split(">");
      return { source: a3, target: l2, value: t3 };
    }), i2 = o2.filter((e3) => ["organic", "paid", "referral"].includes(e3.source)).reduce((e3, t3) => e3 + t3.value, 0);
    return (0, l.jsxs)("section", {
      className: D().card,
      "aria-labelledby": e2,
      children: [
        (0, l.jsxs)("div", {
          className: D().top,
          children: [
            (0, l.jsxs)("div", {
              className: D().heading,
              children: [
                (0, l.jsx)("h3", {
                  id: e2,
                  className: D().title,
                  children: "Signup journey"
                }),
                (0, l.jsx)("p", {
                  className: D().meta,
                  children: `${I.format(i2)} signups, ${n2}`
                })
              ]
            }),
            (0, l.jsx)(L.A, {
              label: "Quarter",
              options: E,
              value: t2,
              onValueChange: a2
            })
          ]
        }),
        (0, l.jsx)(S, {
          nodes: T,
          links: o2,
          label: `Signup journey, ${n2}`,
          columns: ["Source", "Activation", "Plan", "90 days"],
          unit: "people",
          totalLabel: "signups",
          formatValue: (e3) => I.format(e3)
        })
      ]
    });
  }
  let P = O;
}

__m(__module,__exports,__require);
});
A.regCss(62816, "section.card{width:min(100%,760px)}\n.card{display:grid;min-width:0;gap:var(--space-5);padding:var(--space-6);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n@media (max-width:420px){.card{padding:var(--space-5) var(--space-4)}\n.top{display:flex;min-width:0;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:var(--space-3)}\n.heading{display:grid;min-width:0;gap:2px}\n.title{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.meta{margin:0;color:var(--text-muted);font-size:var(--text-sm);line-height:var(--leading-body);font-variant-numeric:tabular-nums}", {"card":"card","top":"top","heading":"heading","title":"title","meta":"meta"});
A.cssFor("sankey-flow", [20942,62816]);
A.item("sankey-flow", {entry:27296, export:"SankeyFlowDemo", kind:"component", tier:"pro", unresolved:[]});
})();