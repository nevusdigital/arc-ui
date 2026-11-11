/* journey-flow (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(12688, ".flow{container-type:inline-size;contain-intrinsic-inline-size:1100px;width:min(100%,1100px);min-width:0;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.swap{display:block}\n.inlineSwap{display:inline-block}\n.clear,.nodeButton,.segment,.tableToggle{font-family:inherit;letter-spacing:inherit;line-height:1}\n.segment{position:relative;min-height:28px;padding:0 10px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font-size:13px;font-weight:500;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.segment[aria-checked=true]{color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.clear,.label,.node,.ribbon,.segment,.tableToggle,.track{transition:none}\n@media (hover:hover) and (pointer:fine){.segment:hover{color:var(--foreground)}\n.segment{flex:1;padding:0 6px}\n@container (max-width: 479px){.segment{min-width:0;padding:0 4px;font-size:12px}\n.clear{display:inline-flex;align-items:center;gap:4px;min-height:28px;padding:0 10px 0 8px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n.clear:hover{border-color:var(--border-strong);color:var(--foreground)}\n.tableToggle{display:inline-flex;align-items:center;gap:6px;min-height:32px;padding:0 8px 0 12px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--foreground);font-size:13px;font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}\n.tableToggle:hover{background:var(--surface-muted)}\n.nodeButton{position:absolute;top:0;left:0;width:0;height:0;padding:0;border:0;background:none;outline:none;pointer-events:none}\n.nodeButton[data-end] .hitLabel{right:-14px;left:auto}\n.nodeButton[aria-pressed=true] .hitNode{box-shadow:inset 0 0 0 1px var(--border-strong)}\n.header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 24px;padding:16px 20px}\n@container (max-width: 559px){.header{padding:16px}\n.heading{flex:1 1 260px;min-width:0}\n.title{margin:0;font-size:15px;font-weight:500;line-height:1.4}\n.subtitle{margin:2px 0 0;color:var(--text-secondary);font-size:13px}\n.subtitleCount{color:var(--foreground)}\n.segments{display:inline-flex;gap:2px;padding:2px;border:1px solid var(--border);border-radius:10px;background:var(--surface-muted)}\n.segments{display:flex;width:100%}\n.segmentThumb{position:absolute;inset:0;border-radius:inherit;background:var(--surface);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n.segmentLabel{position:relative}\n.body{display:grid;grid-template-columns:minmax(0,1fr);border-top:1px solid var(--border)}\n@container (min-width: 860px){.body{grid-template-columns:minmax(0,1fr) 280px}\n.chartArea{min-width:0;padding:20px 20px 16px}\n.chartArea{padding:16px 16px 12px}\n.chartWrap{position:relative;min-width:0}\n.chart{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:visible;font-family:var(--font-body)}\n.chart[data-tracing] .ribbon{fill-opacity:.035}\n.chart[data-tracing] .ribbon[data-goal]{fill-opacity:.07}\n.chart[data-tracing] .node{opacity:.3}\n.chart[data-tracing] .label:not([data-on]){opacity:.35}\n.backdrop{fill:transparent}\n.guide{stroke:var(--border);stroke-width:1;shape-rendering:crispEdges}\n.stage{fill:var(--text-muted);font-size:11px}\n.label[data-end] text,.stage[data-end]{text-anchor:end}\n.labelCount,.stage{font-size:10px}\n.label{pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard)}\n.label text{paint-order:stroke;stroke:var(--surface);stroke-width:4px;stroke-linejoin:round}\n.ribbon{fill:var(--accent);fill-opacity:.1;stroke:transparent;stroke-width:4px;cursor:pointer;transition:fill-opacity var(--duration-fast) var(--ease-standard)}\n.ribbon[data-exit]{fill-opacity:.04}\n.ribbon[data-goal]{fill:var(--success);fill-opacity:.16}\n.trace{fill:var(--accent);fill-opacity:.32;pointer-events:none}\n.node{fill:var(--accent-strong);pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard)}\n.node[data-kind=exit]{fill:var(--text-muted)}\n.node[data-kind=goal]{fill:var(--success)}\n.overlay{fill:var(--accent);pointer-events:none}\n.labelName{fill:var(--foreground);font-size:var(--text-xs);font-weight:500}\n.labelName{font-size:11px}\n.labelCount{fill:var(--text-secondary);font-size:11px;font-variant-numeric:tabular-nums}\n.nodeLayer{position:absolute;inset:0;pointer-events:none}\n.hitLabel,.hitNode{position:absolute;pointer-events:auto;cursor:pointer}\n.hitLabel{top:-36px;left:-6px;width:var(--hit-w,80px);height:33px;border-radius:8px}\n.hitNode{left:-6px;width:20px;border-radius:6px;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.tooltip{position:absolute;top:0;left:0;z-index:3;width:212px;padding:10px 12px 11px;border:1px solid var(--border);border-radius:12px;background:var(--surface-raised);box-shadow:var(--shadow-raised);pointer-events:none}\n.tipBody{display:grid;gap:2px}\n.tipTitle{overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap;text-overflow:ellipsis}\n.tipCount{margin-bottom:6px;font-size:15px;font-weight:500;font-variant-numeric:tabular-nums}\n.tipRow{display:flex;justify-content:space-between;gap:12px;color:var(--text-secondary);font-size:var(--text-xs)}\n.tipRow b{color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums}\n.panel{display:grid;align-content:start;min-width:0;padding:16px 20px 20px;border-top:1px solid var(--border)}\n.panel{padding:16px 20px 20px;border-top:0;border-left:1px solid var(--border)}\n.panel{padding:16px}\n.panelHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px}\n.panelTitle{position:relative;min-width:0;margin:0;font-size:var(--text-sm);font-weight:500}\n.panelNote{position:relative;min-height:2.8em;margin:2px 0 0;color:var(--text-secondary);font-size:13px}\n.bigNumber{margin:12px 0 0;font-size:var(--text-2xl);font-weight:500;line-height:1.1}\n.caption{position:relative;display:flex;flex-wrap:wrap;align-items:baseline;gap:0 .3em;margin:4px 0 0;color:var(--text-secondary);font-size:13px}\n.caption>.rolling{color:var(--foreground)}\n.rolling{position:relative;display:inline-flex;line-height:1.1;font-variant-numeric:tabular-nums;white-space:nowrap}\n.groups{display:grid;gap:20px;margin-top:20px}\n@container (min-width: 560px) and (max-width: 859px){.groups{grid-template-columns:1fr 1fr;gap:28px}\n.group{min-width:0}\n.groupHeading{position:relative;margin:0 0 8px;color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.rows{display:grid;gap:10px;margin:0;padding:0;list-style:none}\n.row{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:baseline;gap:6px 12px;font-size:13px}\n.row[data-empty] .rowLabel{color:var(--text-muted)}\n.row[data-empty] .track{opacity:0}\n.rowLabel{position:relative;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.rowLabel{white-space:normal}\n.rowCount,.rowShare{text-align:right;font-variant-numeric:tabular-nums}\n.rowCount{min-width:6ch}\n.rowShare{min-width:5.5ch;color:var(--text-secondary)}\n.track{grid-column:1/-1;height:3px;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted);transition:opacity var(--duration-fast) var(--ease-standard)}\n.bar{display:block;height:100%;border-radius:inherit;background:var(--accent);transform-origin:left center}\n.glyphs{display:inline-flex;justify-content:flex-end}\n.sizer{position:absolute;top:0;left:0;visibility:hidden;white-space:pre;pointer-events:none}\n.glyph{display:inline-block}\n.digit{position:relative;display:inline-block;height:1.1em;overflow:hidden}\n.strip{display:flex;flex-direction:column}\n.strip>span{display:block;height:1.1em;line-height:1.1;text-align:center}\n.footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 24px;padding:12px 20px;border-top:1px solid var(--border)}\n.footer{padding:12px 16px}\n.hint{flex:1 1 280px;margin:0;color:var(--text-muted);font-size:12px}\n.chevron{display:inline-flex;color:var(--text-secondary)}\n.tableWrap{overflow:hidden}\n.table{width:calc(100% - 40px);margin:0 20px 20px;border-collapse:collapse;font-size:13px;font-variant-numeric:tabular-nums}\n.table caption{padding:4px 0 10px;color:var(--text-secondary);font-size:var(--text-xs);text-align:left}\n.table td,.table th{padding:8px 0;border-bottom:1px solid var(--border-subtle);font-weight:400;text-align:left}\n.table th{color:var(--text-muted);font-size:var(--text-xs)}\n.table td:nth-child(n+3),.table th:nth-child(n+3){text-align:right}\n.table td:nth-child(2){padding-left:12px}\n.table{width:calc(100% - 32px);margin:0 16px 16px}", {"flow":"flow","srOnly":"srOnly","swap":"swap","inlineSwap":"inlineSwap","clear":"clear","nodeButton":"nodeButton","segment":"segment","tableToggle":"tableToggle","label":"label","node":"node","ribbon":"ribbon","track":"track","hitLabel":"hitLabel","hitNode":"hitNode","header":"header","heading":"heading","title":"title","subtitle":"subtitle","subtitleCount":"subtitleCount","segments":"segments","segmentThumb":"segmentThumb","segmentLabel":"segmentLabel","body":"body","chartArea":"chartArea","chartWrap":"chartWrap","chart":"chart","backdrop":"backdrop","guide":"guide","stage":"stage","labelCount":"labelCount","trace":"trace","overlay":"overlay","labelName":"labelName","nodeLayer":"nodeLayer","tooltip":"tooltip","tipBody":"tipBody","tipTitle":"tipTitle","tipCount":"tipCount","tipRow":"tipRow","panel":"panel","panelHead":"panelHead","panelTitle":"panelTitle","panelNote":"panelNote","bigNumber":"bigNumber","caption":"caption","rolling":"rolling","groups":"groups","group":"group","groupHeading":"groupHeading","rows":"rows","row":"row","rowLabel":"rowLabel","rowCount":"rowCount","rowShare":"rowShare","bar":"bar","glyphs":"glyphs","sizer":"sizer","glyph":"glyph","digit":"digit","strip":"strip","footer":"footer","hint":"hint","chevron":"chevron","tableWrap":"tableWrap","table":"table"});
A.reg(18113, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { JourneyFlow: () => I, default: () => J });
  var n = a(95155), r = a(12115), i = a(18310), o = a(80642), s = a(25354), l = a(6900), d = a(28245), u = a(27933), c = a(92171), h = a(9005), p = a(12363), m = a(7770);
  let x = [
    {
      id: "visited",
      name: "Visited",
      col: 0,
      kind: "step",
      note: "Opened the product site in August"
    },
    {
      id: "signed-up",
      name: "Signed up",
      col: 1,
      kind: "step",
      note: "Created an account"
    },
    {
      id: "bounced",
      name: "Bounced",
      col: 1,
      kind: "exit",
      note: "Left without creating an account"
    },
    {
      id: "onboarded",
      name: "Onboarded",
      col: 2,
      kind: "step",
      note: "Finished the setup checklist"
    },
    {
      id: "dropped",
      name: "Dropped",
      col: 2,
      kind: "exit",
      note: "Left before setup was finished"
    },
    {
      id: "activated",
      name: "Activated",
      col: 3,
      kind: "step",
      note: "Shared a first project in week one"
    },
    {
      id: "stalled",
      name: "Stalled",
      col: 3,
      kind: "exit",
      note: "No second session in week one"
    },
    {
      id: "paid",
      name: "Paid",
      col: 4,
      kind: "goal",
      note: "Started a paid plan"
    },
    {
      id: "free",
      name: "Free",
      col: 4,
      kind: "exit",
      note: "Stayed on the free plan"
    }
  ], y = ["Visit", "Account", "Setup", "First week", "Plan"], f = y.length, _ = [
    { s: 0, t: 1 },
    { s: 0, t: 2 },
    { s: 1, t: 3 },
    { s: 1, t: 4 },
    { s: 3, t: 5 },
    { s: 3, t: 6 },
    { s: 5, t: 7 },
    { s: 5, t: 8 },
    { s: 6, t: 7 },
    { s: 6, t: 8 }
  ], j = [
    {
      id: "organic",
      label: "Organic",
      values: [2863, 5563, 2172, 691, 1394, 778, 463, 931, 41, 737]
    },
    {
      id: "ads",
      label: "Paid ads",
      values: [1294, 4858, 823, 471, 409, 414, 148, 261, 9, 405]
    },
    {
      id: "referral",
      label: "Referral",
      values: [1118, 1269, 957, 161, 722, 235, 331, 391, 28, 207]
    }
  ], w = [
    {
      id: "all",
      label: "All users",
      values: _.map((e2, t2) => j.reduce((e3, a2) => e3 + a2.values[t2], 0))
    },
    ...j
  ];
  function g(e2) {
    let t2 = x.map(() => 0), a2 = x.map(() => 0);
    return _.forEach((n2, r2) => {
      a2[n2.s] += e2[r2], t2[n2.t] += e2[r2];
    }), { inSum: t2, outSum: a2, totals: x.map((e3, n2) => Math.max(t2[n2], a2[n2])) };
  }
  function b(e2, t2, a2) {
    let { totals: n2 } = g(e2), r2 = Math.max(0, a2 - 40 - 34 - 44) / Math.max(1, n2[0]), i2 = Math.max(0, t2 - 8) / (f - 1), o2 = y.map(() => 40), s2 = x.map((e3, t3) => {
      let a3 = Math.round(e3.col * i2), s3 = o2[e3.col], l3 = s3 + Math.max(2, n2[t3] * r2);
      return o2[e3.col] = l3 + 44, { x0: a3, x1: a3 + 8, y0: s3, y1: l3 };
    }), l2 = s2.map((e3) => e3.y0), d2 = s2.map((e3) => e3.y0), u2 = _.map((t3, a3) => {
      let n3 = e2[a3] * r2, i3 = l2[t3.s], o3 = d2[t3.t];
      return l2[t3.s] += n3, d2[t3.t] += n3, { x0: s2[t3.s].x1, x1: s2[t3.t].x0, sy: i3, ty: o3, w: n3 };
    });
    return { nodes: s2, links: u2 };
  }
  function N(e2, t2, a2, n2, r2) {
    let i2 = (e2 + t2) / 2;
    return `M${e2.toFixed(2)} ${a2.toFixed(2)}C${i2.toFixed(2)} ${a2.toFixed(2)} ${i2.toFixed(2)} ${n2.toFixed(2)} ${t2.toFixed(2)} ${n2.toFixed(2)}V${(n2 + r2).toFixed(2)}C${i2.toFixed(2)} ${(n2 + r2).toFixed(2)} ${i2.toFixed(2)} ${(a2 + r2).toFixed(2)} ${e2.toFixed(2)} ${(a2 + r2).toFixed(2)}Z`;
  }
  let v = new Intl.NumberFormat("en-US"), k = (e2) => v.format(Math.round(e2)), $ = (e2) => `${(100 * e2).toFixed(1)}%`;
  var T = a(12688), F = a.n(T);
  let M = f - 1, S = { ...m.T.spring.morph, visualDuration: 0.62 }, A = { ...m.T.spring.smooth, visualDuration: 0.62, delay: 0.06 }, C = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], E = (e2) => e2 < 480 ? 340 : e2 < 720 ? 372 : 404, L = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), P = (e2, t2) => !!e2 && !!t2 && e2.kind === t2.kind && e2.i === t2.i, R = (e2, t2, a2) => a2 >= 600 && e2 > 0 ? `${k(t2[e2])} \xB7 ${Math.round(t2[e2] / t2[0] * 100)}%` : k(t2[e2]), Y = (e2, t2, a2) => `translate(${x[e2].col === M ? t2.x1 : t2.x0} ${(a2 < 600 && "free" === x[e2].id ? t2.y1 + 34 : t2.y0).toFixed(2)})`, B = (e2) => x[e2].name.toLowerCase();
  function W({ id: e2, children: t2, className: a2 }) {
    let r2 = (0, i.I)();
    return (0, n.jsx)(o.N, {
      mode: "popLayout",
      initial: false,
      children: (0, n.jsx)(
        s.PY1.span,
        {
          className: a2 ?? F().swap,
          initial: r2 ? { opacity: 0 } : { opacity: 0, y: 4 },
          animate: { opacity: 1, y: 0 },
          exit: r2 ? { opacity: 0, transition: { duration: 0 } } : {
            opacity: 0,
            transition: {
              duration: m.T.duration.instant,
              ease: m.T.ease.standard
            }
          },
          transition: r2 ? { duration: m.T.duration.fast } : { duration: m.T.duration.standard, ease: m.T.ease.enter },
          children: t2
        },
        e2
      )
    });
  }
  function O({ value: e2, className: t2 }) {
    let a2 = (0, i.I)(), l2 = Array.from(e2), d2 = (0, r.useRef)(null), [u2, c2] = (0, r.useState)("auto");
    return (0, r.useLayoutEffect)(() => {
      let e3 = d2.current;
      if (!e3) return;
      let t3 = () => c2(e3.getBoundingClientRect().width);
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, n.jsxs)("span", {
      className: [F().rolling, t2].filter(Boolean).join(" "),
      children: [
        (0, n.jsx)("span", { className: F().srOnly, children: e2 }),
        (0, n.jsx)("span", {
          ref: d2,
          className: F().sizer,
          "aria-hidden": "true",
          children: e2
        }),
        (0, n.jsx)(s.PY1.span, {
          className: F().glyphs,
          "aria-hidden": "true",
          initial: false,
          animate: { width: u2 },
          transition: a2 ? { duration: 0 } : m.T.spring.smooth,
          children: (0, n.jsx)(o.N, {
            mode: "popLayout",
            initial: false,
            children: l2.map((e3, t3) => {
              let r2 = l2.length - t3;
              return /\d/.test(e3) ? (0, n.jsx)(
                s.PY1.span,
                {
                  className: F().digit,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: m.T.duration.instant }
                  },
                  transition: {
                    duration: m.T.duration.fast,
                    ease: m.T.ease.standard
                  },
                  children: (0, n.jsx)(s.PY1.span, {
                    className: F().strip,
                    initial: false,
                    animate: { y: `${-10 * Number(e3)}%` },
                    transition: a2 ? { duration: 0 } : { ...m.T.spring.smooth, delay: (r2 - 1) * 0.02 },
                    children: C.map(
                      (e4) => (0, n.jsx)("span", { children: e4 }, e4)
                    )
                  })
                },
                `d${r2}`
              ) : (0, n.jsx)(
                s.PY1.span,
                {
                  className: F().glyph,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: m.T.duration.instant }
                  },
                  transition: {
                    duration: m.T.duration.fast,
                    ease: m.T.ease.standard
                  },
                  children: e3
                },
                `s${r2}${e3}`
              );
            })
          })
        })
      ]
    });
  }
  function D({ row: e2, empty: t2 }) {
    let a2 = (0, i.I)(), r2 = e2 ? e2.label : t2;
    return (0, n.jsxs)("li", {
      className: F().row,
      "data-empty": !e2 || void 0,
      "aria-hidden": !e2 && !t2 || void 0,
      children: [
        (0, n.jsx)("span", {
          className: F().rowLabel,
          children: (0, n.jsx)(W, { id: r2 || "blank", children: r2 || "\xA0" })
        }),
        (0, n.jsx)("span", {
          className: F().rowCount,
          children: (0, n.jsx)(O, { value: e2 ? k(e2.count) : "" })
        }),
        (0, n.jsx)("span", {
          className: F().rowShare,
          children: (0, n.jsx)(O, { value: e2 ? $(e2.share) : "" })
        }),
        (0, n.jsx)("span", {
          className: F().track,
          children: (0, n.jsx)(s.PY1.span, {
            className: F().bar,
            initial: false,
            animate: { scaleX: e2 ? e2.share : 0 },
            transition: a2 ? { duration: 0 } : m.T.spring.morph
          })
        })
      ]
    });
  }
  function I({ className: e2 }) {
    let t2 = (0, r.useId)(), a2 = (0, i.I)(), [j2, v2] = (0, r.useState)(0), [T2, C2] = (0, r.useState)(720), [J2, z] = (0, r.useState)(null), [H, K] = (0, r.useState)(null), [Q, U] = (0, r.useState)(0), [G, V] = (0, r.useState)(false), q = E(T2), { label: X, values: Z } = w[j2], [ee] = (0, r.useState)(() => ({
      vals: w[0].values.map((e3) => (0, l.OQ)(e3)),
      shown: w[0].values.map((e3) => (0, l.OQ)(e3)),
      trace: _.map(() => (0, l.OQ)(0))
    })), et = (0, d.d)(0), ea = (0, d.d)(0), en = (0, d.d)(1), er = (0, r.useRef)(null), ei = (0, r.useRef)([]), eo = (0, r.useRef)({
      base: [],
      trace: [],
      src: [],
      dst: [],
      node: [],
      label: [],
      count: [],
      button: [],
      hit: []
    }), es = (0, r.useRef)({ width: 720, height: E(720) }), el = (0, r.useRef)(null), ed = (0, r.useCallback)(() => {
      let { width: e3, height: t3 } = es.current, a3 = eo.current, n2 = b(
        ee.vals.map((e4) => Math.max(0, e4.get())),
        e3,
        t3
      ), r2 = (e4, t4, a4, n3) => {
        e4 && (e4.setAttribute("x", String(t4)), e4.setAttribute("y", a4.toFixed(2)), e4.setAttribute("height", Math.max(0, n3).toFixed(2)));
      };
      n2.links.forEach((e4, t4) => {
        let { s: i3, t: o3 } = _[t4];
        a3.base[t4]?.setAttribute(
          "d",
          N(e4.x0, e4.x1, e4.sy, e4.ty, Math.max(e4.w, 0.75))
        );
        let s2 = e4.w * L(ee.trace[t4].get(), 0, 1);
        a3.trace[t4]?.setAttribute(
          "d",
          s2 > 0.02 ? N(e4.x0, e4.x1, e4.sy, e4.ty, s2) : "M0 0"
        ), r2(a3.src[t4], n2.nodes[i3].x0, e4.sy, s2), r2(a3.dst[t4], n2.nodes[o3].x0, e4.ty, s2);
      });
      let i2 = g(ee.shown.map((e4) => e4.get())).totals;
      n2.nodes.forEach((t4, n3) => {
        let o3 = t4.y1 - t4.y0, s2 = Math.max(14, o3 + 6);
        r2(a3.node[n3], t4.x0, t4.y0, o3), a3.label[n3]?.setAttribute("transform", Y(n3, t4, e3));
        let l2 = R(n3, i2, e3), d2 = a3.count[n3];
        d2 && d2.textContent !== l2 && (d2.textContent = l2);
        let u2 = a3.button[n3], c2 = a3.hit[n3];
        u2 && (u2.style.transform = `translate(${t4.x0}px, ${t4.y0.toFixed(2)}px)`), c2 && (c2.style.height = `${s2.toFixed(2)}px`, c2.style.top = `${((o3 - s2) / 2).toFixed(2)}px`);
      });
      let o2 = el.current;
      if (null !== o2) {
        let a4 = n2.nodes[o2], r3 = a4.x1 + 14 + 212 > e3 ? a4.x0 - 14 - 212 : a4.x1 + 14;
        et.set(L(r3, 0, Math.max(0, e3 - 212))), ea.set(L(a4.y0 - 8, 0, Math.max(0, t3 - 112)));
      }
    }, [ee, et, ea]);
    (0, r.useEffect)(() => {
      let e3 = () => u.Gt.render(ed), t3 = [...ee.vals, ...ee.shown, ...ee.trace].map(
        (t4) => t4.on("change", e3)
      );
      return () => {
        t3.forEach((e4) => e4()), (0, u.WG)(ed);
      };
    }, [ed, ee]), (0, r.useLayoutEffect)(() => {
      es.current = { width: T2, height: q }, ed();
    }, [ed, T2, q, j2]), (0, r.useEffect)(() => {
      let e3 = er.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([e4]) => {
        let t4 = Math.round(e4.contentRect.width);
        t4 > 0 && C2(t4);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useEffect)(() => {
      let e3 = w[j2].values;
      if (a2) {
        ee.vals.forEach((t4, a3) => t4.jump(e3[a3])), ee.shown.forEach((t4, a3) => t4.jump(e3[a3]));
        return;
      }
      let t3 = [
        ...ee.vals.map((t4, a3) => (0, c.i)(t4, e3[a3], S)),
        ...ee.shown.map((t4, a3) => (0, c.i)(t4, e3[a3], A))
      ];
      return () => t3.forEach((e4) => e4.stop());
    }, [ee, j2, a2]);
    let eu = (0, r.useMemo)(
      () => (function(e3, t3) {
        let a3, n2, r2 = _.map(() => 0);
        if (!t3) return r2;
        let { inSum: i2, outSum: o2 } = g(e3), s2 = x.map(() => 0), l2 = x.map(() => 0);
        if ("node" === t3.kind) s2[t3.i] = l2[t3.i] = 1, a3 = n2 = x[t3.i].col;
        else {
          let d2 = _[t3.i];
          r2[t3.i] = 1, s2[d2.t] = e3[t3.i] / (i2[d2.t] || 1), l2[d2.s] = e3[t3.i] / (o2[d2.s] || 1), a3 = x[d2.t].col, n2 = x[d2.s].col;
        }
        for (let t4 = a3 + 1; t4 < f; t4++)
          x.forEach((a4, n3) => {
            a4.col === t4 && _.forEach((t5, a5) => {
              t5.t === n3 && (s2[n3] += e3[a5] / (i2[n3] || 1) * s2[t5.s]);
            });
          });
        for (let t4 = n2 - 1; t4 >= 0; t4--)
          x.forEach((a4, n3) => {
            a4.col === t4 && _.forEach((t5, a5) => {
              t5.s === n3 && (l2[n3] += e3[a5] / (o2[n3] || 1) * l2[t5.t]);
            });
          });
        return _.forEach((e4, t4) => {
          x[e4.s].col >= a3 ? r2[t4] = s2[e4.s] : x[e4.t].col <= n2 && (r2[t4] = l2[e4.t]);
        }), r2;
      })(Z, J2 ?? (null === H ? null : { kind: "node", i: H })),
      [Z, J2, H]
    );
    (0, r.useEffect)(() => {
      if (a2) return void ee.trace.forEach((e4, t3) => e4.jump(eu[t3]));
      let e3 = ee.trace.map((e4, t3) => (0, c.i)(e4, eu[t3], m.T.spring.snappy));
      return () => e3.forEach((e4) => e4.stop());
    }, [ee, eu, a2]);
    let ec = (0, r.useMemo)(() => b(Z, T2, q), [Z, T2, q]), { totals: eh } = g(Z), ep = null !== J2 || null !== H, em = x.map(
      (e3, t3) => P(J2 ?? (null === H ? null : { kind: "node", i: H }), {
        kind: "node",
        i: t3
      }) || _.some((e4, a3) => eu[a3] > 1e-4 && (e4.s === t3 || e4.t === t3))
    ), ex = J2 ? (function(e3, t3) {
      let { totals: a3 } = g(t3);
      if ("link" === e3.kind) {
        let { s: n3, t: r3 } = _[e3.i], i3 = t3[e3.i];
        return {
          title: `${x[n3].name} \u2192 ${x[r3].name}`,
          count: i3,
          rows: [
            [`Share of ${B(n3)}`, $(i3 / a3[n3])],
            ["Share of visitors", $(i3 / a3[0])]
          ]
        };
      }
      let n2 = e3.i, r2 = a3[n2];
      if (0 === n2)
        return {
          title: x[n2].name,
          count: r2,
          rows: _.flatMap(
            (e4, a4) => e4.s === n2 ? [[x[e4.t].name, $(t3[a4] / r2)]] : []
          )
        };
      let i2 = _.filter((e4) => e4.t === n2).map((e4) => e4.s), o2 = i2.reduce((e4, t4) => e4 + a3[t4], 0);
      return {
        title: x[n2].name,
        count: r2,
        rows: [
          [`Share of ${1 === i2.length ? B(i2[0]) : B(3)}`, $(r2 / o2)],
          ["Share of visitors", $(r2 / a3[0])]
        ]
      };
    })(J2, Z) : null, ey = (function(e3, t3, a3) {
      let { totals: n2 } = g(e3), r2 = n2[0];
      if (null === a3)
        return {
          key: "overview",
          title: t3,
          note: "Select a step to see where its users came from and went next",
          count: n2[7],
          share: n2[7] / r2,
          caption: "of visitors started a paid plan",
          groups: [
            {
              heading: "Largest drop-offs",
              empty: "",
              rows: [
                {
                  label: "Bounced after visiting",
                  count: n2[2],
                  share: n2[2] / r2
                },
                {
                  label: "Dropped during setup",
                  count: n2[4],
                  share: n2[4] / n2[1]
                }
              ]
            },
            {
              heading: "Plan after setup",
              empty: "",
              rows: [
                { label: "Paid", count: n2[7], share: n2[7] / n2[3] },
                { label: "Free", count: n2[8], share: n2[8] / n2[3] }
              ]
            }
          ]
        };
      let i2 = n2[a3], o2 = (t4) => {
        let n3 = _.map((e4, t5) => ({ link: e4, i: t5 })).filter(
          ({ link: e4 }) => ("s" === t4 ? e4.t : e4.s) === a3
        );
        return [0, 1].map(
          (a4) => n3[a4] ? {
            label: x[n3[a4].link[t4]].name,
            count: e3[n3[a4].i],
            share: e3[n3[a4].i] / i2
          } : null
        );
      };
      return {
        key: x[a3].id,
        title: x[a3].name,
        note: x[a3].note,
        count: i2,
        share: i2 / r2,
        caption: "of visitors",
        groups: [
          {
            heading: "Came from",
            empty: "Journey starts here",
            rows: o2("s")
          },
          { heading: "Went to", empty: "Journey ends here", rows: o2("t") }
        ]
      };
    })(Z, X, H), ef = Math.max(0, T2 - 8) / M, e_ = Math.round(q - 34 + 10) + 0.5, ej = `Journey flow for ${X.toLowerCase()}: ${k(eh[0])} visited. ${k(eh[1])} signed up and ${k(eh[2])} bounced. ${k(eh[3])} onboarded and ${k(eh[4])} dropped during setup. ${k(eh[5])} activated and ${k(eh[6])} stalled. ${k(eh[7])} started a paid plan and ${k(eh[8])} stayed free.`, ew = (e3) => {
      e3 !== j2 && (v2(e3), a2 && (en.jump(0.35), (0, c.i)(en, 1, {
        duration: m.T.duration.standard,
        ease: m.T.ease.standard
      })));
    }, eg = (e3, t3) => {
      let a3 = er.current?.getBoundingClientRect();
      if (!a3) return;
      let { width: n2, height: r2 } = es.current, i2 = e3 - a3.left, o2 = t3 - a3.top;
      et.set(
        L(i2 + 14 + 212 > n2 ? i2 - 14 - 212 : i2 + 14, 0, Math.max(0, n2 - 212))
      ), ea.set(
        L(
          o2 + 16 + 112 > r2 ? o2 - 16 - 112 : o2 + 16,
          0,
          Math.max(0, r2 - 112)
        )
      );
    }, eb = (e3, t3) => {
      "touch" !== e3.pointerType && (el.current = null, eg(e3.clientX, e3.clientY), z(t3));
    }, eN = (e3, t3) => {
      "touch" !== e3.pointerType && z((e4) => P(e4, t3) ? null : e4);
    };
    return (0, n.jsxs)("section", {
      className: [F().flow, e2].filter(Boolean).join(" "),
      "aria-labelledby": `${t2}-title`,
      children: [
        (0, n.jsxs)("header", {
          className: F().header,
          children: [
            (0, n.jsxs)("div", {
              className: F().heading,
              children: [
                (0, n.jsx)("h2", {
                  id: `${t2}-title`,
                  className: F().title,
                  children: "Journeys to a paid plan"
                }),
                (0, n.jsxs)("p", {
                  className: F().subtitle,
                  children: [
                    (0, n.jsx)(O, {
                      className: F().subtitleCount,
                      value: k(eh[0])
                    }),
                    " visits in August, followed from first session to plan"
                  ]
                })
              ]
            }),
            (0, n.jsx)("div", {
              role: "radiogroup",
              "aria-label": "Acquisition channel",
              className: F().segments,
              children: w.map(
                (e3, r2) => (0, n.jsxs)(
                  "button",
                  {
                    ref: (e4) => {
                      ei.current[r2] = e4;
                    },
                    type: "button",
                    role: "radio",
                    "aria-checked": r2 === j2,
                    tabIndex: r2 === j2 ? 0 : -1,
                    className: F().segment,
                    onClick: () => ew(r2),
                    onKeyDown: (e4) => ((e5, t3) => {
                      let a3 = "ArrowRight" === e5.key || "ArrowDown" === e5.key ? 1 : "ArrowLeft" === e5.key || "ArrowUp" === e5.key ? -1 : 0;
                      if (!a3) return;
                      e5.preventDefault();
                      let n2 = (t3 + a3 + w.length) % w.length;
                      ew(n2), ei.current[n2]?.focus();
                    })(e4, r2),
                    children: [
                      r2 === j2 && (0, n.jsx)(s.PY1.span, {
                        layoutId: `${t2}-segment`,
                        className: F().segmentThumb,
                        transition: a2 ? { duration: 0 } : m.T.spring.snappy
                      }),
                      (0, n.jsx)("span", {
                        className: F().segmentLabel,
                        children: e3.label
                      })
                    ]
                  },
                  e3.id
                )
              )
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: F().srOnly,
          "aria-live": "polite",
          children: `${X}: ${k(eh[0])} visits and ${k(eh[7])} paid plans.`
        }),
        (0, n.jsxs)("div", {
          className: F().body,
          children: [
            (0, n.jsx)("div", {
              className: F().chartArea,
              children: (0, n.jsxs)("div", {
                ref: er,
                className: F().chartWrap,
                style: { height: q, "--hit-w": `${L(ef - 10, 44, 92)}px` },
                onPointerMove: (e3) => {
                  "touch" !== e3.pointerType && null === el.current && eg(e3.clientX, e3.clientY);
                },
                children: [
                  (0, n.jsxs)(s.PY1.svg, {
                    className: F().chart,
                    viewBox: `0 0 ${T2} ${q}`,
                    role: "img",
                    "aria-label": ej,
                    "data-tracing": ep || void 0,
                    style: { opacity: en },
                    children: [
                      (0, n.jsx)("rect", {
                        className: F().backdrop,
                        width: T2,
                        height: q,
                        onClick: () => {
                          el.current = null, z(null), K(null);
                        }
                      }),
                      (0, n.jsxs)("g", {
                        "aria-hidden": "true",
                        children: [
                          y.map((e3, t3) => {
                            let a3 = Math.round(t3 * ef + 4) + 0.5;
                            return (0, n.jsx)(
                              "line",
                              {
                                className: F().guide,
                                x1: a3,
                                x2: a3,
                                y1: 40,
                                y2: e_
                              },
                              e3
                            );
                          }),
                          (0, n.jsx)("line", {
                            className: F().guide,
                            x1: 0,
                            x2: T2,
                            y1: e_,
                            y2: e_
                          }),
                          y.map(
                            (e3, t3) => (0, n.jsx)(
                              "text",
                              {
                                className: F().stage,
                                "data-end": t3 === M || void 0,
                                x: t3 === M ? Math.round(t3 * ef) + 8 : Math.round(t3 * ef),
                                y: q - 6,
                                children: T2 < 440 && "First week" === e3 ? "Week 1" : e3
                              },
                              e3
                            )
                          )
                        ]
                      }),
                      (0, n.jsx)("g", {
                        children: ec.links.map(
                          (e3, t3) => (0, n.jsx)(
                            "path",
                            {
                              ref: (e4) => {
                                eo.current.base[t3] = e4;
                              },
                              className: F().ribbon,
                              "data-exit": "exit" === x[_[t3].t].kind || void 0,
                              "data-goal": "goal" === x[_[t3].t].kind || void 0,
                              d: N(e3.x0, e3.x1, e3.sy, e3.ty, Math.max(e3.w, 0.75)),
                              onPointerEnter: (e4) => eb(e4, { kind: "link", i: t3 }),
                              onPointerLeave: (e4) => eN(e4, { kind: "link", i: t3 }),
                              onPointerUp: (e4) => {
                                var a3;
                                return a3 = { kind: "link", i: t3 }, void ("touch" === e4.pointerType && (el.current = null, eg(e4.clientX, e4.clientY), z((e5) => P(e5, a3) ? null : a3)));
                              }
                            },
                            t3
                          )
                        )
                      }),
                      (0, n.jsx)("g", {
                        "aria-hidden": "true",
                        children: _.map(
                          (e3, t3) => (0, n.jsx)(
                            "path",
                            {
                              ref: (e4) => {
                                eo.current.trace[t3] = e4;
                              },
                              className: F().trace
                            },
                            t3
                          )
                        )
                      }),
                      (0, n.jsxs)("g", {
                        "aria-hidden": "true",
                        children: [
                          ec.nodes.map(
                            (e3, t3) => (0, n.jsx)(
                              "rect",
                              {
                                ref: (e4) => {
                                  eo.current.node[t3] = e4;
                                },
                                className: F().node,
                                "data-kind": x[t3].kind,
                                x: e3.x0,
                                y: e3.y0,
                                width: 8,
                                height: e3.y1 - e3.y0,
                                rx: 1
                              },
                              t3
                            )
                          ),
                          _.map(
                            (e3, t3) => (0, n.jsxs)(
                              "g",
                              {
                                children: [
                                  (0, n.jsx)("rect", {
                                    ref: (e4) => {
                                      eo.current.src[t3] = e4;
                                    },
                                    className: F().overlay,
                                    x: 0,
                                    y: 0,
                                    width: 8,
                                    height: 0,
                                    rx: 1
                                  }),
                                  (0, n.jsx)("rect", {
                                    ref: (e4) => {
                                      eo.current.dst[t3] = e4;
                                    },
                                    className: F().overlay,
                                    x: 0,
                                    y: 0,
                                    width: 8,
                                    height: 0,
                                    rx: 1
                                  })
                                ]
                              },
                              t3
                            )
                          )
                        ]
                      }),
                      (0, n.jsx)("g", {
                        "aria-hidden": "true",
                        children: ec.nodes.map(
                          (e3, t3) => (0, n.jsxs)(
                            "g",
                            {
                              ref: (e4) => {
                                eo.current.label[t3] = e4;
                              },
                              className: F().label,
                              "data-on": !ep || em[t3] || void 0,
                              "data-end": x[t3].col === M || void 0,
                              transform: Y(t3, e3, T2),
                              children: [
                                (T2 >= 440 || "exit" === x[t3].kind) && (0, n.jsx)("text", {
                                  className: F().labelName,
                                  y: -20,
                                  children: x[t3].name
                                }),
                                (0, n.jsx)("text", {
                                  ref: (e4) => {
                                    eo.current.count[t3] = e4;
                                  },
                                  className: F().labelCount,
                                  y: -7,
                                  children: R(t3, eh, T2)
                                })
                              ]
                            },
                            t3
                          )
                        )
                      })
                    ]
                  }),
                  (0, n.jsx)("div", {
                    role: "toolbar",
                    "aria-label": "Journey steps",
                    className: F().nodeLayer,
                    children: ec.nodes.map((e3, t3) => {
                      let a3 = e3.y1 - e3.y0, r2 = Math.max(14, a3 + 6);
                      return (0, n.jsxs)(
                        "button",
                        {
                          ref: (e4) => {
                            eo.current.button[t3] = e4;
                          },
                          type: "button",
                          className: F().nodeButton,
                          "data-end": x[t3].col === M || void 0,
                          tabIndex: Q === t3 ? 0 : -1,
                          "aria-pressed": H === t3,
                          "aria-label": `${x[t3].name}: ${k(eh[t3])} users, ${$(eh[t3] / eh[0])} of visitors. ${x[t3].note}.`,
                          style: {
                            transform: `translate(${e3.x0}px, ${e3.y0.toFixed(2)}px)`
                          },
                          onPointerEnter: (e4) => eb(e4, { kind: "node", i: t3 }),
                          onPointerLeave: (e4) => eN(e4, { kind: "node", i: t3 }),
                          onFocus: (e4) => {
                            U(t3), e4.currentTarget.matches(":focus-visible") && (el.current = t3, z({ kind: "node", i: t3 }), ed());
                          },
                          onBlur: () => {
                            el.current === t3 && (el.current = null, z(
                              (e4) => P(e4, { kind: "node", i: t3 }) ? null : e4
                            ));
                          },
                          onClick: () => K((e4) => e4 === t3 ? null : t3),
                          onKeyDown: (e4) => ((e5, t4) => {
                            let a4 = (e6) => x.map((t5, a5) => t5.col === e6 ? a5 : -1).filter((e7) => e7 >= 0), n2 = -1;
                            if ("ArrowDown" === e5.key || "ArrowUp" === e5.key) {
                              let r3 = a4(x[t4].col);
                              n2 = r3[r3.indexOf(t4) + ("ArrowDown" === e5.key ? 1 : -1)] ?? -1;
                            } else if ("ArrowRight" === e5.key || "ArrowLeft" === e5.key) {
                              let r3 = (e6) => ec.nodes[e6].y0;
                              n2 = a4(
                                x[t4].col + ("ArrowRight" === e5.key ? 1 : -1)
                              ).reduce(
                                (e6, a5) => e6 < 0 || Math.abs(r3(a5) - r3(t4)) < Math.abs(r3(e6) - r3(t4)) ? a5 : e6,
                                -1
                              );
                            } else if ("Home" === e5.key) n2 = 0;
                            else if ("End" === e5.key) n2 = x.length - 1;
                            else {
                              if ("Escape" !== e5.key || null === H) return;
                              e5.preventDefault(), K(null);
                              return;
                            }
                            e5.preventDefault(), n2 >= 0 && eo.current.button[n2]?.focus();
                          })(e4, t3),
                          children: [
                            (0, n.jsx)("span", { className: F().hitLabel }),
                            (0, n.jsx)("span", {
                              ref: (e4) => {
                                eo.current.hit[t3] = e4;
                              },
                              className: F().hitNode,
                              style: {
                                height: `${r2.toFixed(2)}px`,
                                top: `${((a3 - r2) / 2).toFixed(2)}px`
                              }
                            })
                          ]
                        },
                        x[t3].id
                      );
                    })
                  }),
                  (0, n.jsx)(o.N, {
                    children: ex && J2 && (0, n.jsx)(
                      s.PY1.div,
                      {
                        className: F().tooltip,
                        "aria-hidden": "true",
                        style: { x: et, y: ea },
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: m.T.duration.instant },
                        children: (0, n.jsxs)(W, {
                          id: `${J2.kind}${J2.i}-${j2}`,
                          className: F().tipBody,
                          children: [
                            (0, n.jsx)("span", {
                              className: F().tipTitle,
                              children: ex.title
                            }),
                            (0, n.jsxs)("span", {
                              className: F().tipCount,
                              children: [k(ex.count), " users"]
                            }),
                            ex.rows.map(
                              ([e3, t3]) => (0, n.jsxs)(
                                "span",
                                {
                                  className: F().tipRow,
                                  children: [
                                    (0, n.jsx)("span", { children: e3 }),
                                    (0, n.jsx)("b", { children: t3 })
                                  ]
                                },
                                e3
                              )
                            )
                          ]
                        })
                      },
                      "tip"
                    )
                  })
                ]
              })
            }),
            (0, n.jsxs)("aside", {
              className: F().panel,
              "aria-label": "Step breakdown",
              children: [
                (0, n.jsxs)("div", {
                  className: F().panelHead,
                  children: [
                    (0, n.jsx)("h3", {
                      className: F().panelTitle,
                      children: (0, n.jsx)(W, {
                        id: ey.key + ey.title,
                        children: ey.title
                      })
                    }),
                    (0, n.jsx)(o.N, {
                      initial: false,
                      children: null !== H && (0, n.jsxs)(
                        s.PY1.button,
                        {
                          type: "button",
                          className: F().clear,
                          "aria-label": "Clear selected step",
                          onClick: () => {
                            K(null), eo.current.button[H]?.focus();
                          },
                          initial: { opacity: 0, scale: 0.96 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.96 },
                          transition: {
                            duration: m.T.duration.fast,
                            ease: m.T.ease.standard
                          },
                          children: [
                            (0, n.jsx)(h.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Clear"
                          ]
                        },
                        "clear"
                      )
                    })
                  ]
                }),
                (0, n.jsx)("p", {
                  className: F().panelNote,
                  children: (0, n.jsx)(W, { id: ey.note, children: ey.note })
                }),
                (0, n.jsx)("p", {
                  className: F().bigNumber,
                  children: (0, n.jsx)(O, { value: k(ey.count) })
                }),
                (0, n.jsxs)("p", {
                  className: F().caption,
                  children: [
                    (0, n.jsx)(O, { value: $(ey.share) }),
                    (0, n.jsx)(W, {
                      id: ey.caption,
                      className: F().inlineSwap,
                      children: ey.caption
                    })
                  ]
                }),
                (0, n.jsx)("div", {
                  className: F().groups,
                  children: ey.groups.map(
                    (e3, t3) => (0, n.jsxs)(
                      "div",
                      {
                        className: F().group,
                        children: [
                          (0, n.jsx)("h4", {
                            className: F().groupHeading,
                            children: (0, n.jsx)(W, {
                              id: e3.heading,
                              children: e3.heading
                            })
                          }),
                          (0, n.jsx)("ul", {
                            className: F().rows,
                            children: e3.rows.map(
                              (t4, a3) => (0, n.jsx)(
                                D,
                                { row: t4, empty: 0 === a3 ? e3.empty : "" },
                                a3
                              )
                            )
                          })
                        ]
                      },
                      t3
                    )
                  )
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: F().footer,
          children: (0, n.jsxs)("button", {
            type: "button",
            className: F().tableToggle,
            "aria-expanded": G,
            "aria-controls": `${t2}-table`,
            onClick: () => V((e3) => !e3),
            children: [
              "Flow table",
              (0, n.jsx)(s.PY1.span, {
                className: F().chevron,
                animate: { rotate: 180 * !!G },
                transition: a2 ? { duration: 0 } : m.T.spring.snappy,
                children: (0, n.jsx)(p.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            ]
          })
        }),
        (0, n.jsx)(o.N, {
          initial: false,
          children: G && (0, n.jsx)(
            s.PY1.div,
            {
              id: `${t2}-table`,
              className: F().tableWrap,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: a2 ? { duration: 0 } : m.T.spring.smooth,
              children: (0, n.jsxs)("table", {
                className: F().table,
                children: [
                  (0, n.jsxs)("caption", {
                    children: ["Flows for ", X.toLowerCase(), ", August"]
                  }),
                  (0, n.jsx)("thead", {
                    children: (0, n.jsxs)("tr", {
                      children: [
                        (0, n.jsx)("th", { scope: "col", children: "From" }),
                        (0, n.jsx)("th", { scope: "col", children: "To" }),
                        (0, n.jsx)("th", { scope: "col", children: "Users" }),
                        (0, n.jsx)("th", {
                          scope: "col",
                          children: "Share of step"
                        })
                      ]
                    })
                  }),
                  (0, n.jsx)("tbody", {
                    children: _.map(
                      (e3, t3) => (0, n.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, n.jsx)("td", { children: x[e3.s].name }),
                            (0, n.jsx)("td", { children: x[e3.t].name }),
                            (0, n.jsx)("td", { children: k(Z[t3]) }),
                            (0, n.jsx)("td", { children: $(Z[t3] / eh[e3.s]) })
                          ]
                        },
                        t3
                      )
                    )
                  })
                ]
              })
            },
            "table"
          )
        })
      ]
    });
  }
  let J = I;
}

__m(__module,__exports,__require);
});
A.cssFor("journey-flow", [12688]);
A.item("journey-flow", {entry:18113, export:"JourneyFlow", kind:"block", tier:"pro", unresolved:[]});
})();