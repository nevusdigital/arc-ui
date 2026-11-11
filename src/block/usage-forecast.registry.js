/* usage-forecast (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(0, function(){return void 0;});
A.regCss(3976, ".root{box-sizing:border-box;width:min(100%,1100px);min-width:0;margin-inline:auto;container-type:inline-size;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.inner{display:grid;gap:20px;padding:16px 20px 20px}\n@container (max-width: 560px){.inner{gap:16px;padding:16px}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.rise{position:relative;display:inline-flex}\n.rise>span{display:inline-block;white-space:pre}\n.num{display:inline-flex;font-variant-numeric:tabular-nums}\n.num>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.words{position:relative;display:block}\n.word{display:inline-block;margin-inline-end:.26em;white-space:nowrap}\n.header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 24px}\n.heading{min-width:0}\n.heading h2{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.heading p{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-sm)}\n.story{display:grid;gap:4px;max-width:42rem}\n.headline{margin:0;font-family:var(--font-body);font-size:clamp(var(--text-lg),3cqi,var(--text-xl));font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3}\n.detail{margin:0;color:var(--text-secondary);font-size:var(--text-sm);font-variant-numeric:tabular-nums}\n.kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:0}\n@container (max-width: 440px){.kpis{grid-template-columns:minmax(0,1fr)}\n.kpi{display:grid;align-content:start;gap:2px;min-width:0;padding:0 20px;border-left:1px solid var(--border)}\n.kpi:first-child{padding-left:0;border-left:0}\n.kpi dt{color:var(--text-secondary);font-size:var(--text-sm)}\n.kpi dd{min-width:0;margin:0}\n.kpi{padding:0 10px}\n.kpi dt{font-size:var(--text-xs)}\n.kpi{grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:12px;padding:10px 0;border-top:1px solid var(--border-subtle);border-left:0}\n.kpi:first-child{padding-top:0;border-top:0}\n.kpi:last-child{padding-bottom:0}\n.kpi dt{grid-column:1;grid-row:1;font-size:var(--text-sm)}\n.kpi .value{grid-column:2;grid-row:1/span 2;justify-content:flex-end;margin:0}\n.kpi .foot{grid-column:1;grid-row:2}\n.value{display:flex;align-items:baseline;margin-top:2px;font-size:var(--text-xl);font-weight:500;line-height:1.3;font-variant-numeric:tabular-nums;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.value[data-tone=over]{color:var(--danger)}\n.value{font-size:var(--text-lg)}\n@media (prefers-reduced-motion:reduce){.handle,.rule,.value{transition-duration:var(--duration-instant)}\n.unit{color:var(--text-secondary);font-size:var(--text-base)}\n.unit{font-size:var(--text-sm)}\n.foot{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.chart{position:relative;min-width:0;margin-top:-4px;user-select:none;-webkit-user-select:none}\n.chart[data-dragging],.chart[data-dragging] *{cursor:ns-resize}\n.svg{display:block;overflow:visible}\n.grid{stroke:var(--border);shape-rendering:crispEdges}\n.baseline{stroke:var(--border-strong);shape-rendering:crispEdges}\n.axis{fill:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;letter-spacing:0}\n.future{fill:color-mix(in oklab,var(--foreground) 2.5%,transparent)}\n.todayLine{stroke:var(--border-strong);shape-rendering:crispEdges}\n.todayLabel{fill:var(--text-secondary);font-size:var(--text-xs);font-weight:500;letter-spacing:0}\n.band{fill:var(--accent);fill-opacity:.12}\n.band.bandOver{fill:var(--danger);fill-opacity:.1}\n.actual,.forecast{fill:none;stroke:var(--accent);stroke-linejoin:round}\n.actual{stroke-width:2;stroke-linecap:round}\n.actual.over,.forecast.over{stroke:var(--danger)}\n.forecast{stroke-width:1.75;stroke-dasharray:4 4}\n.budget{stroke:var(--foreground);shape-rendering:crispEdges}\n.tick{fill:none;stroke:var(--foreground);stroke-width:1.5;stroke-linecap:round}\n.tickLabel{fill:var(--text-secondary);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:0;paint-order:stroke;stroke:var(--surface);stroke-width:3px;stroke-linejoin:round}\n.drop{fill:none;stroke:var(--danger);stroke-dasharray:2 3}\n.marker{fill:var(--surface);stroke:var(--danger);stroke-width:2}\n.todayDot{fill:var(--accent);stroke:var(--surface);stroke-width:2}\n.hoverLine{stroke:var(--border-strong);shape-rendering:crispEdges}\n.hoverRange{fill:none;stroke:var(--accent);stroke-opacity:.4;stroke-width:3;stroke-linecap:round}\n.hoverDot{fill:var(--accent);stroke:var(--surface);stroke-width:2}\n.hoverDot[data-forecast]{fill:var(--surface);stroke:var(--accent)}\n.yLabels{position:absolute;top:0;bottom:0;left:0;pointer-events:none}\n.yLabel{position:absolute;right:0;display:flex;transform:translateY(-50%);color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;letter-spacing:0;line-height:1;white-space:nowrap}\n.hit{position:absolute;top:0;z-index:1;cursor:crosshair;touch-action:pan-y}\n.zone{position:absolute;top:0;z-index:2;height:32px;cursor:ns-resize;touch-action:none}\n.zone[data-dragging] .handle{border-color:var(--foreground)}\n.zone[data-dragging] .handle svg{color:var(--foreground)}\n.zone:hover .handle{border-color:var(--text-secondary)}\n.zone:hover .handle svg{color:var(--foreground)}\n.handle{position:absolute;top:50%;left:8px;display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 10px 0 7px;box-sizing:border-box;transform:translateY(-50%);border:1px solid var(--border-strong);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap;transition:border-color var(--duration-fast) var(--ease-standard)}\n.handle svg{color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.handleLabel{color:var(--text-secondary);font-weight:400}\n.handleValue{display:inline-flex;align-items:baseline}\n.when{position:absolute;left:0;z-index:3;pointer-events:none}\n.whenInner{display:inline-flex;align-items:center;height:20px;padding:0 8px;box-sizing:border-box;transform:translateX(-50%);border:1px solid color-mix(in oklab,var(--danger) 45%,var(--border));border-radius:var(--radius-pill);background:var(--surface);color:var(--danger);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:0;white-space:nowrap}\n.panel{position:absolute;left:0;z-index:4;box-sizing:border-box;padding:10px 12px;border:1px solid var(--border);border-radius:14px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--text-secondary);font-size:var(--text-xs);pointer-events:none;transform-origin:0 0}\n.panel p{margin:0}\n.panelHead{display:flex;justify-content:space-between;gap:8px;color:var(--foreground);font-weight:500}\n.panelTag{color:var(--text-muted);font-weight:400}\n.panelValue{margin-top:4px!important;color:var(--foreground);font-size:var(--text-base);font-weight:500;font-variant-numeric:tabular-nums}\n.panelNote{font-variant-numeric:tabular-nums}\n.footer{display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding-top:12px;border-top:1px solid var(--border-subtle)}\n.rules{display:flex;flex-wrap:wrap;align-items:center;gap:8px}\n.rules{display:grid;grid-template-columns:minmax(0,1fr);width:100%;gap:6px}\n.rulesLabel{margin-right:4px;color:var(--text-secondary);font-size:var(--text-sm)}\n.rulesLabel{margin:0 0 2px}\n.rule{display:inline-flex;align-items:center;height:32px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:none;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);font-variant-numeric:tabular-nums;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.rule[aria-pressed=true]{border-color:var(--border-strong);background:var(--surface-muted);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.rule:hover{border-color:var(--border-strong);color:var(--foreground)}\n.rule{width:100%;border-radius:10px}\n.check{display:inline-flex;flex:none;overflow:hidden}\n.rulePct{font-weight:500}\n.ruleWhen{margin-left:8px;color:var(--text-muted)}\n.ruleWhen{margin-left:auto}\n.legend{display:flex;flex-wrap:wrap;gap:6px 16px;margin:0;padding:0;list-style:none;color:var(--text-muted);font-size:var(--text-xs)}\n.legend li{display:inline-flex;align-items:center;gap:6px}\n.legend svg{display:block;overflow:visible}\n.legend{gap:6px 12px}\n.note{flex-basis:100%;margin:0;color:var(--text-muted);font-size:var(--text-xs)}", {"root":"root","inner":"inner","srOnly":"srOnly","rise":"rise","num":"num","words":"words","word":"word","header":"header","heading":"heading","story":"story","headline":"headline","detail":"detail","kpis":"kpis","kpi":"kpi","value":"value","foot":"foot","handle":"handle","rule":"rule","unit":"unit","chart":"chart","svg":"svg","grid":"grid","baseline":"baseline","axis":"axis","future":"future","todayLine":"todayLine","todayLabel":"todayLabel","band":"band","bandOver":"bandOver","actual":"actual","forecast":"forecast","over":"over","budget":"budget","tick":"tick","tickLabel":"tickLabel","drop":"drop","marker":"marker","todayDot":"todayDot","hoverLine":"hoverLine","hoverRange":"hoverRange","hoverDot":"hoverDot","yLabels":"yLabels","yLabel":"yLabel","hit":"hit","zone":"zone","handleLabel":"handleLabel","handleValue":"handleValue","when":"when","whenInner":"whenInner","panel":"panel","panelHead":"panelHead","panelTag":"panelTag","panelValue":"panelValue","panelNote":"panelNote","footer":"footer","rules":"rules","rulesLabel":"rulesLabel","check":"check","rulePct":"rulePct","ruleWhen":"ruleWhen","legend":"legend","note":"note"});
A.reg(63053, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { UsageForecast: () => es, default: () => er });
  var s = a(95155), r = a(12115), i = a(92171), n = a(18310), l = a(80642), o = a(25354), c = a(55809), d = a(22535), u = a(28245), h = a(51811);
  let p = {
    name: "grip-horizontal",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
      ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
      ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
      ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
      ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
      ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
    ]
  };
  p.node;
  let x = (0, h.A)(p);
  var g = a(64577), m = a(65024), y = a(66558), f = a(98344), _ = a(7770);
  let j = [0.5, 0.8, 1];
  function v(e2) {
    var t2;
    let a2 = (t2 = e2.seed, () => {
      let e3 = Math.imul((t2 = t2 + 1831565813 | 0) ^ t2 >>> 15, 1 | t2);
      return (((e3 = e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3) ^ e3) ^ e3 >>> 14) >>> 0) / 4294967296;
    }), s2 = (t3) => Math.round(t3 / e2.round) * e2.round, r2 = (t3) => ((t3 + 1) % 7 == 0 || (t3 + 1) % 7 == 6 ? e2.weekend : e2.weekday) * (1 + e2.growth * t3), i2 = e2.readings ?? [e2.start];
    for (let t3 = i2.length; t3 <= 22; t3++)
      i2.push(
        s2(
          i2[t3 - 1] + r2(t3) * (1 + (a2() - 0.5) * 2 * e2.noise) + (e2.events?.[t3] ?? 0)
        )
      );
    let n2 = 0, l2 = 0;
    for (let t3 = 9; t3 <= 22; t3++)
      n2 += i2[t3] - i2[t3 - 1] - (e2.events?.[t3] ?? 0), l2 += r2(t3);
    let o2 = l2 ? n2 / l2 : 1, c2 = [i2[22]], d2 = [i2[22]], u2 = [i2[22]];
    for (let t3 = 23; t3 <= 30; t3++) {
      let a3 = t3 - 22, s3 = c2[a3 - 1] + r2(t3) * o2, i3 = e2.spread * (Math.sqrt(a3) + 0.35 * a3);
      c2.push(s3), d2.push(s3 + 1.2 * i3), u2.push(s3 - 0.85 * i3);
    }
    let {
      key: h2,
      label: p2,
      lo: x2,
      hi: g2,
      step: m2,
      min: y2,
      budget: f2,
      decimals: _2,
      unit: j2,
      price: v2,
      priceNote: b2
    } = e2;
    return {
      key: h2,
      label: p2,
      lo: x2,
      hi: g2,
      step: m2,
      min: y2,
      budget: f2,
      decimals: _2,
      unit: j2,
      price: v2,
      priceNote: b2,
      actual: i2,
      median: c2,
      upper: d2,
      lower: u2
    };
  }
  let b = {
    calls: v({
      key: "calls",
      label: "API calls",
      lo: 0,
      hi: 50,
      step: 1,
      min: 10,
      budget: 38,
      decimals: 1,
      unit: "M",
      price: 200,
      priceNote: "At $0.20 per 1k calls",
      seed: 20260922,
      start: 0,
      weekday: 1.6,
      weekend: 0.7,
      growth: 6e-3,
      noise: 0.07,
      spread: 0.4,
      round: 0.01
    }),
    storage: v({
      key: "storage",
      label: "Storage",
      lo: 2,
      hi: 4.5,
      step: 0.1,
      min: 2.5,
      budget: 4,
      decimals: 2,
      unit: " TB",
      price: 120,
      priceNote: "At $0.12 per GB",
      seed: 4101,
      start: 3.12,
      weekday: 0.031,
      weekend: 0.012,
      growth: 4e-3,
      noise: 0.25,
      spread: 0.034,
      round: 1e-3,
      events: { 10: -0.15 }
    }),
    seats: v({
      key: "seats",
      label: "Seats",
      lo: 140,
      hi: 240,
      step: 5,
      min: 160,
      budget: 200,
      decimals: 0,
      unit: " seats",
      price: 24,
      priceNote: "At $24 per seat",
      seed: 77,
      start: 186,
      weekday: 0.72,
      weekend: 0.08,
      growth: 0,
      noise: 0,
      spread: 0.9,
      round: 1,
      readings: [
        186,
        186,
        187,
        189,
        190,
        190,
        190,
        191,
        193,
        194,
        195,
        195,
        195,
        196,
        197,
        198,
        199,
        201,
        202,
        202,
        202,
        203,
        205
      ]
    })
  }, w = ["calls", "storage", "seats"], N = (e2, t2) => [...e2, ...t2.slice(1)];
  function $(e2, t2) {
    if (e2[0] >= t2) return 0;
    for (let a2 = 1; a2 < e2.length; a2++)
      if (e2[a2] >= t2)
        return a2 - 1 + (t2 - e2[a2 - 1]) / Math.max(1e-9, e2[a2] - e2[a2 - 1]);
    return null;
  }
  function k(e2, t2) {
    let a2 = Math.max(0, Math.min(e2.length - 2, Math.floor(t2))), s2 = Math.max(0, Math.min(1, t2 - a2));
    return e2[a2] + (e2[a2 + 1] - e2[a2]) * s2;
  }
  let M = (e2) => Math.min(30, Math.max(1, Math.ceil(e2 - 1e-6))), P = (e2) => `Sep ${M(e2)}`, L = (e2, t2) => `${t2.toFixed(e2.decimals)}${e2.unit}`;
  var Y = a(3976), S = a.n(Y);
  let { spring: T, duration: A, ease: F, stagger: G } = _.T, z = [...F.enter], D = [...F.standard], O = [1, 8, 15, 22, 29], R = (e2) => e2 < 520 ? 232 : 264, I = { type: "spring", visualDuration: 0.16, bounce: 0 }, H = { visualDuration: 0.24, bounce: 0 }, V = { visualDuration: 0.2, bounce: 0 }, E = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), C = (e2, t2) => (t2 - e2.lo) / (e2.hi - e2.lo), B = (e2, t2) => Number((Math.round(t2 / e2.step) * e2.step).toFixed(2)), U = Object.fromEntries(
    w.map((e2) => {
      let t2 = b[e2], a2 = (e3) => C(t2, e3);
      return [
        e2,
        {
          actual: t2.actual.map(a2),
          median: t2.median.map(a2),
          upper: t2.upper.map(a2),
          lower: t2.lower.map(a2),
          zero: a2(0)
        }
      ];
    })
  ), W = (e2, t2, a2) => e2.map((e3, s2) => e3 + (t2[s2] - e3) * a2);
  function X(e2, t2, a2) {
    return a2 >= 1 || e2 === t2 ? t2 : {
      actual: W(e2.actual, t2.actual, a2),
      median: W(e2.median, t2.median, a2),
      upper: W(e2.upper, t2.upper, a2),
      lower: W(e2.lower, t2.lower, a2),
      zero: e2.zero + (t2.zero - e2.zero) * a2
    };
  }
  let J = (e2, t2) => e2.x0 + t2 / 30 * (e2.x1 - e2.x0), Z = (e2, t2) => e2.y0 + (1 - t2) * (e2.y1 - e2.y0);
  function q(e2, t2, a2, s2) {
    s2 ? e2.jump(t2) : (0, i.i)(e2, t2, a2);
  }
  function Q({ text: e2, className: t2 }) {
    let a2 = (0, n.I)();
    return (0, s.jsx)("span", {
      className: [S().rise, t2].filter(Boolean).join(" "),
      children: (0, s.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: (0, s.jsx)(
          o.PY1.span,
          {
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.45em" },
            animate: { opacity: 1, y: 0 },
            exit: a2 ? { opacity: 0 } : { opacity: 0, y: "-0.45em" },
            transition: { duration: a2 ? A.instant : A.standard, ease: z },
            children: e2
          },
          e2
        )
      })
    });
  }
  function K({ text: e2 }) {
    let t2 = !!(0, n.I)(), [a2, i2] = (0, r.useState)({ current: e2, previous: e2 });
    a2.current !== e2 && i2({ current: e2, previous: a2.current });
    let c2 = new Set(a2.previous.split(" ").map((e3, t3) => `${t3}:${e3}`)), d2 = 0;
    return (0, s.jsx)("span", {
      className: S().words,
      "aria-hidden": "true",
      children: (0, s.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: e2.split(" ").map((e3, a3) => {
          let r2 = `${a3}:${e3}`, i3 = c2.has(r2) ? 0 : Math.min(d2++, 6) * G.word;
          return (0, s.jsx)(
            o.PY1.span,
            {
              className: S().word,
              layout: !t2 && "position",
              initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.35em" },
              animate: { opacity: 1, y: 0 },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                opacity: 0,
                y: "-0.3em",
                transition: { duration: A.fast, ease: D }
              },
              transition: t2 ? { duration: A.instant } : {
                layout: T.smooth,
                default: { duration: A.standard, ease: z, delay: i3 }
              },
              children: e3
            },
            r2
          );
        })
      })
    });
  }
  function ee({ value: e2, decimals: t2, prefix: a2 = "" }) {
    return (0, s.jsx)("span", {
      className: S().num,
      children: (0, s.jsx)(m.q, { value: e2, decimals: t2, prefix: a2 })
    });
  }
  function et({ geo: e2, index: t2, on: a2, reduce: r2 }) {
    let i2 = (0, c.G)(e2, (e3) => J(e3, e3.ticks[t2].x)), n2 = (0, c.G)(e2, (e3) => Z(e3, k(e3.curve, e3.ticks[t2].x))), l2 = (0, c.G)(e2, (e3) => +!!e3.ticks[t2].show), u2 = (0, d.z)(l2, V), h2 = r2 ? { duration: 0 } : T.smooth;
    return (0, s.jsxs)(o.PY1.g, {
      style: { x: i2, y: n2, opacity: r2 ? l2 : u2 },
      children: [
        (0, s.jsx)(o.PY1.path, {
          className: S().tick,
          d: "M0,7V-7",
          initial: false,
          animate: { pathLength: +!!a2, opacity: +!!a2 },
          transition: h2
        }),
        (0, s.jsx)(o.PY1.g, {
          initial: false,
          animate: { opacity: +!!a2 },
          transition: { duration: r2 ? 0 : A.fast, delay: a2 && !r2 ? 0.08 : 0 },
          children: (0, s.jsxs)("text", {
            className: S().tickLabel,
            x: -6,
            y: -6,
            textAnchor: "end",
            children: [Math.round(100 * j[t2]), "%"]
          })
        })
      ]
    });
  }
  function ea({ day: e2, x: t2, y: a2, right: r2, markerX: i2, markerOn: n2 }) {
    let l2 = (0, c.G)(
      () => 1 - n2.get() * E(1 - (Math.abs(i2.get() - t2) - 28) / 12, 0, 1)
    ), d2 = t2 + 20 > r2;
    return (0, s.jsx)(o.PY1.g, {
      style: { opacity: l2 },
      children: (0, s.jsxs)("text", {
        className: S().axis,
        x: d2 ? r2 : t2,
        y: a2,
        textAnchor: d2 ? "end" : "middle",
        children: ["Sep ", e2]
      })
    });
  }
  function es() {
    var e2;
    let t2 = !!(0, n.I)(), a2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), h2 = `${a2}-title`, p2 = `${a2}-table`, m2 = `${a2}-over`, _2 = `${a2}-under`, v2 = `${a2}-note`, [Y2, F2] = (0, r.useState)("calls"), [G2, D2] = (0, r.useState)(() => ({
      calls: b.calls.budget,
      storage: b.storage.budget,
      seats: b.seats.budget
    })), [W2, es2] = (0, r.useState)([false, true, true]), [er2, ei] = (0, r.useState)(null), [en, el] = (0, r.useState)(false), [eo, ec] = (0, r.useState)(760), ed = b[Y2], eu = G2[Y2], eh = (0, r.useMemo)(
      () => (function(e6, t3) {
        let a3, s2, r2 = N(e6.actual, e6.median), i2 = $(r2, t3), n2 = $(N(e6.actual, e6.upper), t3), l2 = $(N(e6.actual, e6.lower), t3), o2 = e6.actual[22], c2 = e6.median[e6.median.length - 1], d2 = null === i2 ? "none" : i2 <= 22 ? "past" : "future", u2 = (e7) => Math.round(e7 / t3 * 100), h3 = L(e6, c2);
        if ("past" === d2) {
          a3 = `You passed the budget on ${P(i2)}`;
          let e7 = u2(o2) - 100;
          s2 = `Usage is ${e7 > 0 ? `${e7}% over` : "at the budget"} today and heading for ${h3} by Sep 30.`;
        } else if ("future" === d2) {
          let e7 = 30 - M(i2);
          a3 = `At this pace you reach the budget on ${P(i2)}`;
          let t4 = 0 === e7 ? "On the last day of the period" : `${e7} ${1 === e7 ? "day" : "days"} before the period closes`, r3 = null !== n2 && null !== l2 && M(n2) !== M(l2) ? `, likely between ${P(n2)} and ${P(l2)}` : null !== n2 && M(n2) !== M(i2) ? `, as early as ${P(n2)}` : "";
          s2 = `${t4}${r3}.`;
        } else
          a3 = "At this pace you stay under budget", s2 = `Heading for ${h3} by Sep 30, ${u2(c2)}% of budget${null !== n2 ? `. A busy week could cross it on ${P(n2)}` : ""}.`;
        return {
          at: i2,
          kind: d2,
          headline: a3,
          detail: s2,
          used: o2,
          end: c2,
          usedPct: u2(o2),
          endPct: u2(c2),
          endLow: e6.lower[e6.lower.length - 1],
          endHigh: e6.upper[e6.upper.length - 1],
          cost: Math.max(0, c2 - t3) * e6.price,
          rules: j.map((e7) => {
            let a4 = $(r2, e7 * t3);
            return null === a4 ? null : a4;
          })
        };
      })(ed, eu),
      [ed, eu]
    ), [ep, ex] = (0, r.useState)(() => null === eh.at ? "" : P(eh.at));
    null !== eh.at && P(eh.at) !== ep && ex(P(eh.at));
    let eg = (0, r.useMemo)(() => N(ed.actual, ed.median), [ed]), em = (0, u.d)({ from: U.calls, to: U.calls }), ey = (0, u.d)(1), ef = (0, u.d)(C(b.calls, b.calls.budget)), e_ = (0, u.d)(760), ej = (0, u.d)(R(760)), ev = (0, u.d)(-1), eb = (0, c.G)(() => {
      var e6, t3, a3, s2;
      let r2, i2, n2, l2, o2, { from: c2, to: d2 } = em.get();
      return e6 = X(c2, d2, ey.get()), t3 = ef.get(), r2 = {
        x0: 52,
        x1: (a3 = e_.get()) - 10,
        y0: 30,
        y1: (s2 = ej.get()) - 30
      }, i2 = (e7, t4) => e7.map((e8, a4) => `${J(r2, t4 + a4).toFixed(2)},${Z(r2, e8).toFixed(2)}`), n2 = N(e6.actual, e6.median), l2 = Z(r2, t3), o2 = j.map((a4) => {
        let s3 = e6.zero + a4 * (t3 - e6.zero), r3 = $(n2, s3);
        return { x: r3 ?? (s3 <= n2[0] ? 0 : 30), show: null !== r3 && r3 > 0 };
      }), {
        ...r2,
        curve: n2,
        upper: e6.upper,
        lower: e6.lower,
        budgetY: l2,
        cross: $(n2, t3),
        ticks: o2,
        actual: `M${i2(e6.actual, 0).join("L")}`,
        forecast: `M${i2(e6.median, 22).join("L")}`,
        band: `M${i2(e6.upper, 22).join("L")}L${i2(e6.lower, 22).reverse().join("L")}Z`,
        over: `M0,-60H${a3}V${l2.toFixed(2)}H0Z`,
        under: `M0,${l2.toFixed(2)}H${a3}V${s2 + 60}H0Z`
      };
    }), ew = (0, c.G)(eb, (e6) => e6.actual), eN = (0, c.G)(eb, (e6) => e6.forecast), e$ = (0, c.G)(eb, (e6) => e6.band), ek = (0, c.G)(eb, (e6) => e6.over), eM = (0, c.G)(eb, (e6) => e6.under), eP = (0, c.G)(eb, (e6) => Math.round(e6.budgetY)), eL = (0, c.G)(eP, (e6) => e6 - 16), eY = (0, c.G)(eb, (e6) => Z(e6, e6.curve[22])), eS = (0, c.G)(eb, (e6) => e6.cross ?? 30), eT = (0, d.z)(eS, H), eA = t2 ? eS : eT, eF = (0, c.G)(eb, (e6) => +(null !== e6.cross)), eG = (0, d.z)(eF, V), ez = t2 ? eF : eG, eD = (0, c.G)(() => J(eb.get(), eA.get())), eO = (0, c.G)(() => {
      let e6 = eb.get();
      return Z(e6, k(e6.curve, eA.get()));
    }), eR = (0, c.G)(() => {
      let e6 = eb.get();
      return `M${eD.get().toFixed(2)},${eO.get().toFixed(2)}V${e6.y1}`;
    }), eI = (0, c.G)(() => E(eD.get(), 74, e_.get() - 10 - 22)), eH = (0, c.G)(() => {
      let e6 = ev.get(), t3 = eb.get();
      return e6 < 0 ? 0 : Math.round(J(t3, e6)) + 0.5;
    }), eV = (0, c.G)(() => {
      let e6 = ev.get(), t3 = eb.get();
      return e6 < 0 ? 0 : Z(t3, t3.curve[e6]);
    }), eE = (0, c.G)(() => {
      let e6 = ev.get(), t3 = eb.get(), a3 = e6 - 22;
      return a3 > 0 ? `M0,${Z(t3, t3.upper[a3]).toFixed(2)}V${Z(t3, t3.lower[a3]).toFixed(2)}` : "M0,0";
    }), eC = (0, c.G)(ev, (e6) => e6 < 0 ? 0 : 1), eB = (0, c.G)(() => {
      let e6 = ev.get(), t3 = e_.get(), a3 = J(eb.get(), Math.max(0, e6));
      return a3 + 14 + 176 <= t3 ? a3 + 14 : Math.max(0, a3 - 14 - 176);
    }), eU = (0, d.z)(eB, { visualDuration: 0.22, bounce: 0 }), eW = t2 ? eB : eU, eX = (0, r.useRef)(null), eJ = (0, r.useRef)(null);
    function eZ(e6) {
      let t3 = ev.get();
      if (ev.set(e6 ?? -1), ei(e6), null !== e6 && t3 < 0) {
        let t4 = e_.get(), a3 = J(eb.get(), e6);
        eU.jump(a3 + 14 + 176 <= t4 ? a3 + 14 : Math.max(0, a3 - 14 - 176));
      }
    }
    (0, r.useEffect)(() => {
      let e6 = eX.current;
      if (!e6) return;
      let t3 = new ResizeObserver(([e7]) => {
        let t4 = Math.round(e7.contentRect.width);
        t4 && (ec(t4), e_.set(t4), ej.set(R(t4)));
      });
      return t3.observe(e6), () => t3.disconnect();
    }, [e_, ej]);
    let eq = (e6) => D2((t3) => t3[Y2] === e6 ? t3 : { ...t3, [Y2]: e6 }), eQ = () => {
      let e6 = eJ.current;
      e6 && (eJ.current = null, el(false), q(ef, C(ed, e6.value), T.snappy, t2));
    }, eK = (e6) => {
      let t3 = eX.current?.getBoundingClientRect();
      return t3 ? E(
        Math.round(
          (e6 - t3.left - 52) / Math.max(1, t3.width - 52 - 10) * 30
        ),
        1,
        30
      ) : null;
    }, e0 = R(eo), e1 = { x0: 52, x1: eo - 10, y0: 30, y1: e0 - 30 }, e22 = Math.round(J(e1, 22)) + 0.5, e5 = Array.from(
      { length: 6 },
      (e6, t3) => ed.lo + (ed.hi - ed.lo) * t3 / 5
    ), e4 = ed.unit.replace(" ", "\xA0"), e3 = `${ed.label}: ${eh.headline}. ${eh.detail}`;
    return (0, s.jsx)("section", {
      className: S().root,
      "aria-labelledby": h2,
      children: (0, s.jsxs)("div", {
        className: S().inner,
        children: [
          (0, s.jsxs)("header", {
            className: S().header,
            children: [
              (0, s.jsxs)("div", {
                className: S().heading,
                children: [
                  (0, s.jsx)("h2", { id: h2, children: "Usage forecast" }),
                  (0, s.jsx)("p", {
                    children: "Northwind Labs \xB7 Scale plan \xB7 Renews Oct 1"
                  })
                ]
              }),
              (0, s.jsx)(y.A, {
                label: "Metric",
                value: Y2,
                onValueChange: function(e6) {
                  if (e6 === Y2) return;
                  let { from: a3, to: s2 } = em.get();
                  em.set({ from: X(a3, s2, ey.get()), to: U[e6] }), t2 ? ey.jump(1) : (ey.jump(0), (0, i.i)(ey, 1, T.smooth)), q(ef, C(b[e6], G2[e6]), T.smooth, t2), F2(e6);
                },
                options: w.map((e6) => ({ value: e6, label: b[e6].label }))
              })
            ]
          }),
          (0, s.jsxs)("div", {
            className: S().story,
            children: [
              (0, s.jsx)("p", {
                className: S().headline,
                children: (0, s.jsx)(K, { text: eh.headline })
              }),
              (0, s.jsx)("p", {
                className: S().detail,
                children: (0, s.jsx)(K, { text: eh.detail })
              }),
              (0, s.jsx)("p", {
                className: S().srOnly,
                "aria-live": "polite",
                children: e3
              })
            ]
          }),
          (0, s.jsxs)("dl", {
            className: S().kpis,
            children: [
              (0, s.jsxs)("div", {
                className: S().kpi,
                children: [
                  (0, s.jsx)("dt", { children: "Used so far" }),
                  (0, s.jsxs)("dd", {
                    className: S().value,
                    children: [
                      (0, s.jsx)(ee, {
                        value: Number(eh.used.toFixed(ed.decimals)),
                        decimals: ed.decimals
                      }),
                      (0, s.jsx)(Q, { text: e4, className: S().unit })
                    ]
                  }),
                  (0, s.jsx)("dd", {
                    className: S().foot,
                    children: (0, s.jsx)(Q, {
                      text: `${eh.usedPct}% of budget`
                    })
                  })
                ]
              }),
              (0, s.jsxs)("div", {
                className: S().kpi,
                children: [
                  (0, s.jsx)("dt", { children: "Projected by Sep 30" }),
                  (0, s.jsxs)("dd", {
                    className: S().value,
                    children: [
                      (0, s.jsx)(ee, {
                        value: Number(eh.end.toFixed(ed.decimals)),
                        decimals: ed.decimals
                      }),
                      (0, s.jsx)(Q, { text: e4, className: S().unit })
                    ]
                  }),
                  (0, s.jsx)("dd", {
                    className: S().foot,
                    children: (0, s.jsx)(Q, {
                      text: `Likely ${eh.endLow.toFixed(ed.decimals)}\u2013${L(ed, eh.endHigh)}`
                    })
                  })
                ]
              }),
              (0, s.jsxs)("div", {
                className: S().kpi,
                children: [
                  (0, s.jsx)("dt", { children: "Cost above budget" }),
                  (0, s.jsx)("dd", {
                    className: S().value,
                    "data-tone": eh.cost > 0 ? "over" : void 0,
                    children: (0, s.jsx)(ee, {
                      value: Math.round(eh.cost),
                      decimals: 0,
                      prefix: "$"
                    })
                  }),
                  (0, s.jsx)("dd", {
                    className: S().foot,
                    children: (0, s.jsx)(Q, {
                      text: eh.cost > 0 ? ed.priceNote : "Within budget"
                    })
                  })
                ]
              })
            ]
          }),
          (0, s.jsxs)("div", {
            ref: eX,
            className: S().chart,
            style: { height: e0 },
            "data-dragging": en || void 0,
            onPointerMove: (e6) => {
              if (eJ.current) return;
              let t3 = eK(e6.clientX);
              null !== t3 && t3 !== ev.get() && eZ(t3);
            },
            onPointerLeave: () => {
              eJ.current || eZ(null);
            },
            children: [
              (0, s.jsxs)("svg", {
                className: S().svg,
                viewBox: `0 0 ${eo} ${e0}`,
                width: "100%",
                height: e0,
                role: "img",
                "aria-describedby": p2,
                "aria-label": `${ed.label} this billing period: ${L(ed, eh.used)} used through Sep 22, forecast ${L(ed, eh.end)} by Sep 30 against a ${L(ed, eu)} budget. ${eh.headline}.`,
                children: [
                  (0, s.jsxs)("defs", {
                    children: [
                      (0, s.jsx)("clipPath", {
                        id: m2,
                        children: (0, s.jsx)(o.PY1.path, { d: ek })
                      }),
                      (0, s.jsx)("clipPath", {
                        id: _2,
                        children: (0, s.jsx)(o.PY1.path, { d: eM })
                      })
                    ]
                  }),
                  (0, s.jsxs)("g", {
                    "aria-hidden": "true",
                    children: [
                      (0, s.jsx)("rect", {
                        className: S().future,
                        x: e22,
                        y: e1.y0,
                        width: Math.max(0, e1.x1 - e22),
                        height: e1.y1 - e1.y0
                      }),
                      e5.map((e6, t3) => {
                        let a3 = Math.round(Z(e1, t3 / 5)) + 0.5;
                        return (0, s.jsx)(
                          "line",
                          {
                            className: 0 === t3 ? S().baseline : S().grid,
                            x1: 52,
                            x2: e1.x1,
                            y1: a3,
                            y2: a3
                          },
                          t3
                        );
                      }),
                      O.map(
                        (e6) => (0, s.jsx)(
                          ea,
                          {
                            day: e6,
                            x: J(e1, e6),
                            y: e0 - 10,
                            right: eo - 1,
                            markerX: eI,
                            markerOn: ez
                          },
                          e6
                        )
                      ),
                      (0, s.jsx)("line", {
                        className: S().todayLine,
                        x1: e22,
                        x2: e22,
                        y1: e1.y0 - 8,
                        y2: e1.y1
                      }),
                      (0, s.jsx)("text", {
                        className: S().todayLabel,
                        x: e22,
                        y: e1.y0 - 14,
                        textAnchor: "middle",
                        children: "Today"
                      }),
                      (0, s.jsx)(o.PY1.path, {
                        className: S().band,
                        d: e$,
                        clipPath: `url(#${_2})`
                      }),
                      (0, s.jsx)(o.PY1.path, {
                        className: `${S().band} ${S().bandOver}`,
                        d: e$,
                        clipPath: `url(#${m2})`
                      }),
                      (0, s.jsx)(o.PY1.path, {
                        className: S().forecast,
                        d: eN,
                        clipPath: `url(#${_2})`
                      }),
                      (0, s.jsx)(o.PY1.path, {
                        className: `${S().forecast} ${S().over}`,
                        d: eN,
                        clipPath: `url(#${m2})`
                      }),
                      (0, s.jsx)(o.PY1.path, {
                        className: S().actual,
                        d: ew,
                        clipPath: `url(#${_2})`
                      }),
                      (0, s.jsx)(o.PY1.path, {
                        className: `${S().actual} ${S().over}`,
                        d: ew,
                        clipPath: `url(#${m2})`
                      }),
                      (0, s.jsx)(o.PY1.g, {
                        style: { y: eP },
                        children: (0, s.jsx)("line", {
                          className: S().budget,
                          x1: 52,
                          x2: e1.x1,
                          y1: 0.5,
                          y2: 0.5
                        })
                      }),
                      j.map(
                        (e6, a3) => (0, s.jsx)(
                          et,
                          { geo: eb, index: a3, on: W2[a3], reduce: t2 },
                          a3
                        )
                      ),
                      (0, s.jsxs)(o.PY1.g, {
                        style: { opacity: ez },
                        children: [
                          (0, s.jsx)(o.PY1.path, {
                            className: S().drop,
                            d: eR
                          }),
                          (0, s.jsx)(o.PY1.circle, {
                            className: S().marker,
                            r: 5,
                            cx: eD,
                            cy: eO
                          })
                        ]
                      }),
                      (0, s.jsx)(o.PY1.circle, {
                        className: S().todayDot,
                        r: 4,
                        cx: e22,
                        cy: eY
                      }),
                      (0, s.jsxs)(o.PY1.g, {
                        style: { opacity: eC },
                        children: [
                          (0, s.jsx)(o.PY1.line, {
                            className: S().hoverLine,
                            x1: eH,
                            x2: eH,
                            y1: e1.y0,
                            y2: e1.y1
                          }),
                          (0, s.jsx)(o.PY1.g, {
                            style: { x: eH },
                            children: (0, s.jsx)(o.PY1.path, {
                              className: S().hoverRange,
                              d: eE
                            })
                          }),
                          (0, s.jsx)(o.PY1.circle, {
                            className: S().hoverDot,
                            "data-forecast": null !== er2 && er2 > 22 ? "" : void 0,
                            r: 4,
                            cx: eH,
                            cy: eV
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, s.jsx)("div", {
                className: S().yLabels,
                style: { width: 42 },
                "aria-hidden": "true",
                children: e5.map((e6, t3) => {
                  let a3;
                  return (0, s.jsx)(
                    "span",
                    {
                      className: S().yLabel,
                      style: { top: Math.round(Z(e1, t3 / 5)) },
                      children: (0, s.jsx)(Q, {
                        text: 0 === e6 ? "0" : `${(a3 = e6.toFixed("seats" === ed.key ? 0 : +("storage" === ed.key))).includes(".") ? a3.replace(/\.?0+$/, "") : a3}${" seats" === ed.unit ? "" : ed.unit}`
                      })
                    },
                    t3
                  );
                })
              }),
              (0, s.jsx)("div", {
                className: S().hit,
                style: { left: 52, right: 10, bottom: 30 },
                tabIndex: 0,
                role: "slider",
                "aria-label": "Inspect a day",
                "aria-orientation": "horizontal",
                "aria-valuemin": 1,
                "aria-valuemax": 30,
                "aria-valuenow": er2 ?? 22,
                "aria-valuetext": (e2 = er2 ?? 22) > 22 ? `Sep ${e2} forecast: ${L(ed, eg[e2])}, likely ${ed.lower[e2 - 22].toFixed(ed.decimals)} to ${L(ed, ed.upper[e2 - 22])}` : `Sep ${e2}: ${L(ed, eg[e2])} used, ${Math.round(eg[e2] / eu * 100)}% of budget`,
                onPointerDown: (e6) => {
                  let t3 = eK(e6.clientX);
                  null !== t3 && eZ(t3);
                },
                onFocus: () => {
                  0 > ev.get() && eZ(22);
                },
                onBlur: () => eZ(null),
                onKeyDown: (e6) => {
                  let t3 = er2 ?? 22, a3 = {
                    ArrowLeft: t3 - 1,
                    ArrowDown: t3 - 1,
                    ArrowRight: t3 + 1,
                    ArrowUp: t3 + 1,
                    PageDown: t3 - 7,
                    PageUp: t3 + 7,
                    Home: 1,
                    End: 30,
                    Escape: -1
                  }[e6.key];
                  void 0 !== a3 && (e6.preventDefault(), eZ(a3 < 0 ? null : E(a3, 1, 30)));
                }
              }),
              (0, s.jsx)(o.PY1.div, {
                className: S().zone,
                style: { left: 52, right: 10, y: eL },
                "data-dragging": en || void 0,
                tabIndex: 0,
                role: "slider",
                "aria-label": `${ed.label} budget`,
                "aria-orientation": "vertical",
                "aria-describedby": v2,
                "aria-valuemin": ed.min,
                "aria-valuemax": ed.hi,
                "aria-valuenow": eu,
                "aria-valuetext": L(ed, eu),
                onPointerDown: (e6) => {
                  0 === e6.button && (e6.preventDefault(), e6.currentTarget.focus({ preventScroll: true }), e6.currentTarget.setPointerCapture(e6.pointerId), eJ.current = {
                    y: e6.clientY,
                    from: eu,
                    plot: ej.get() - 30 - 30,
                    value: eu,
                    stretched: false
                  }, el(true), eZ(null));
                },
                onPointerMove: (e6) => {
                  let a3 = eJ.current;
                  if (!a3) return;
                  let s2 = a3.from + (a3.y - e6.clientY) / a3.plot * (ed.hi - ed.lo), r2 = E(s2, ed.min, ed.hi), i2 = E(B(ed, r2), ed.min, ed.hi);
                  if (s2 !== r2) {
                    let e7;
                    ef.stop(), ef.set(
                      C(ed, r2) + Math.sign(e7 = C(ed, s2) - C(ed, r2)) * (1 - 1 / (0.55 * Math.abs(e7) / 0.07 + 1)) * 0.07
                    );
                  } else
                    (i2 !== a3.value || a3.stretched) && q(ef, C(ed, i2), I, t2);
                  a3.value = i2, a3.stretched = s2 !== r2, eq(i2);
                },
                onPointerUp: eQ,
                onPointerCancel: eQ,
                onKeyDown: (e6) => {
                  let a3 = 5 * ed.step, s2 = {
                    ArrowUp: ed.step,
                    ArrowRight: ed.step,
                    ArrowDown: -ed.step,
                    ArrowLeft: -ed.step,
                    PageUp: a3,
                    PageDown: -a3
                  }[e6.key], r2 = "Home" === e6.key ? ed.min : "End" === e6.key ? ed.hi : void 0 === s2 ? null : E(B(ed, eu + s2), ed.min, ed.hi);
                  null !== r2 && (e6.preventDefault(), eq(r2), q(ef, C(ed, r2), T.snappy, t2));
                },
                children: (0, s.jsxs)("span", {
                  className: S().handle,
                  children: [
                    (0, s.jsx)(x, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsx)("span", {
                      className: S().handleLabel,
                      children: "Budget"
                    }),
                    (0, s.jsxs)("span", {
                      className: S().handleValue,
                      children: [
                        (0, s.jsx)(ee, { value: eu, decimals: +(ed.step < 1) }),
                        (0, s.jsx)(Q, { text: e4 })
                      ]
                    })
                  ]
                })
              }),
              (0, s.jsx)(o.PY1.div, {
                className: S().when,
                style: { x: eI, top: e1.y1 + 6, opacity: ez },
                "aria-hidden": "true",
                children: (0, s.jsx)("span", {
                  className: S().whenInner,
                  children: (0, s.jsx)(Q, { text: ep })
                })
              }),
              (0, s.jsx)(l.N, {
                children: null !== er2 && (0, s.jsxs)(
                  o.PY1.div,
                  {
                    className: S().panel,
                    "aria-hidden": "true",
                    style: { x: eW, top: 30, width: 176 },
                    initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.97 },
                    animate: { opacity: 1, scale: 1 },
                    exit: t2 ? { opacity: 0, transition: { duration: A.instant } } : {
                      opacity: 0,
                      scale: 0.97,
                      transition: { duration: A.fast }
                    },
                    transition: { duration: t2 ? A.instant : A.fast, ease: z },
                    children: [
                      (0, s.jsxs)("p", {
                        className: S().panelHead,
                        children: [
                          (0, s.jsxs)("span", { children: ["Sep ", er2] }),
                          (0, s.jsx)("span", {
                            className: S().panelTag,
                            children: er2 > 22 ? "Forecast" : 22 === er2 ? "Today" : "Actual"
                          })
                        ]
                      }),
                      (0, s.jsx)("p", {
                        className: S().panelValue,
                        children: L(ed, eg[er2])
                      }),
                      (0, s.jsx)("p", {
                        className: S().panelNote,
                        children: er2 > 22 ? `Likely ${ed.lower[er2 - 22].toFixed(ed.decimals)}\u2013${L(ed, ed.upper[er2 - 22])}` : `${Math.round(eg[er2] / eu * 100)}% of budget`
                      })
                    ]
                  },
                  "panel"
                )
              })
            ]
          }),
          (0, s.jsxs)("footer", {
            className: S().footer,
            children: [
              (0, s.jsxs)("div", {
                className: S().rules,
                role: "group",
                "aria-label": "Budget alerts",
                "aria-describedby": v2,
                children: [
                  (0, s.jsx)("span", {
                    className: S().rulesLabel,
                    children: "Alert at"
                  }),
                  j.map((e6, a3) => {
                    var r2;
                    let i2 = null === (r2 = eh.rules[a3]) ? "Not expected" : r2 <= 0 ? "Since Sep 1" : r2 <= 22 ? `Reached ${P(r2)}` : `Expected ${P(r2)}`;
                    return (0, s.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: S().rule,
                        "aria-pressed": W2[a3],
                        "aria-label": `${Math.round(100 * e6)}% of budget, ${i2.toLowerCase()}`,
                        onClick: () => es2((e7) => e7.map((e8, t3) => t3 === a3 ? !e8 : e8)),
                        children: [
                          (0, s.jsx)(o.PY1.span, {
                            className: S().check,
                            initial: false,
                            animate: { width: 20 * !!W2[a3], opacity: +!!W2[a3] },
                            transition: t2 ? { duration: 0 } : T.snappy,
                            "aria-hidden": "true",
                            children: (0, s.jsx)(g.A, {
                              size: 14,
                              strokeWidth: 2
                            })
                          }),
                          (0, s.jsxs)("span", {
                            className: S().rulePct,
                            children: [Math.round(100 * e6), "%"]
                          }),
                          (0, s.jsx)(f.g, {
                            className: S().ruleWhen,
                            children: i2
                          })
                        ]
                      },
                      e6
                    );
                  })
                ]
              }),
              (0, s.jsxs)("ul", {
                className: S().legend,
                "aria-label": "Legend",
                children: [
                  (0, s.jsxs)("li", {
                    children: [
                      (0, s.jsx)("svg", {
                        width: "16",
                        height: "8",
                        "aria-hidden": "true",
                        children: (0, s.jsx)("line", {
                          className: S().actual,
                          x1: "1",
                          x2: "15",
                          y1: "4",
                          y2: "4"
                        })
                      }),
                      "Actual"
                    ]
                  }),
                  (0, s.jsxs)("li", {
                    children: [
                      (0, s.jsx)("svg", {
                        width: "16",
                        height: "8",
                        "aria-hidden": "true",
                        children: (0, s.jsx)("line", {
                          className: S().forecast,
                          x1: "0",
                          x2: "16",
                          y1: "4",
                          y2: "4"
                        })
                      }),
                      "Forecast"
                    ]
                  }),
                  (0, s.jsxs)("li", {
                    children: [
                      (0, s.jsx)("svg", {
                        width: "12",
                        height: "10",
                        "aria-hidden": "true",
                        children: (0, s.jsx)("rect", {
                          className: S().band,
                          width: "12",
                          height: "10",
                          rx: "2"
                        })
                      }),
                      "Likely range"
                    ]
                  }),
                  (0, s.jsxs)("li", {
                    children: [
                      (0, s.jsx)("svg", {
                        width: "16",
                        height: "8",
                        "aria-hidden": "true",
                        children: (0, s.jsx)("line", {
                          className: `${S().actual} ${S().over}`,
                          x1: "1",
                          x2: "15",
                          y1: "4",
                          y2: "4"
                        })
                      }),
                      "Over budget"
                    ]
                  })
                ]
              }),
              (0, s.jsx)("p", {
                id: v2,
                className: S().srOnly,
                children: "Drag the budget line or use the arrow keys."
              })
            ]
          }),
          (0, s.jsx)("div", {
            className: S().srOnly,
            children: (0, s.jsxs)("table", {
              id: p2,
              children: [
                (0, s.jsxs)("caption", {
                  children: [ed.label, ", Sep 1 to 30, 2026"]
                }),
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { scope: "col", children: "Date" }),
                      (0, s.jsx)("th", { scope: "col", children: "Reading" }),
                      (0, s.jsx)("th", {
                        scope: "col",
                        children: "Likely range"
                      })
                    ]
                  })
                }),
                (0, s.jsx)("tbody", {
                  children: Array.from({ length: 30 }, (e6, t3) => t3 + 1).map(
                    (e6) => (0, s.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, s.jsxs)("th", {
                            scope: "row",
                            children: [
                              "Sep ",
                              e6,
                              e6 > 22 ? " (forecast)" : ""
                            ]
                          }),
                          (0, s.jsx)("td", { children: L(ed, eg[e6]) }),
                          (0, s.jsx)("td", {
                            children: e6 > 22 ? `${ed.lower[e6 - 22].toFixed(ed.decimals)} to ${L(ed, ed.upper[e6 - 22])}` : "Measured"
                          })
                        ]
                      },
                      e6
                    )
                  )
                })
              ]
            })
          })
        ]
      })
    });
  }
  let er = es;
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("usage-forecast", [3976,64444]);
A.item("usage-forecast", {entry:63053, export:"UsageForecast", kind:"block", tier:"pro", unresolved:["0"]});
})();