/* model-training (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(6051, ".root{--mt-accent:var(--accent);container-type:inline-size;display:grid;width:100%;min-width:0;margin:0;gap:var(--space-6);overflow-x:clip;color:var(--foreground);-webkit-tap-highlight-color:transparent}\n.root:not([data-ready]) .stage{height:316px}\n@container (width < 480px){.root:not([data-ready]) .stage{height:330px}\n.root[data-ready] .panel,.root[data-ready] .stage>*{opacity:1}\n@container (width < 560px){.root{gap:var(--space-5)}\n.body{display:grid;min-width:0;gap:var(--space-8)}\n@container (width >= 720px){.body{grid-template-columns:minmax(0,1fr) 232px;align-items:center;gap:var(--space-10)}\n.body{gap:var(--space-6)}\n.diagram{min-width:0}\n.stage{position:relative;width:100%;min-width:0}\n.panel,.stage>*{opacity:0;transition:opacity var(--duration-considered) var(--ease-standard)}\n.stage[data-hover=l0] .edge[data-a=\"0\"],.stage[data-hover=l1] .edge[data-a=\"1\"],.stage[data-hover=l1] .edge[data-b=\"1\"],.stage[data-hover=l2] .edge[data-a=\"2\"],.stage[data-hover=l2] .edge[data-b=\"2\"],.stage[data-hover=l3] .edge[data-b=\"3\"]{stroke:var(--mt-accent)}\n.stage[data-hover=held] .sheet[data-held] .sheetRect,.stage[data-hover=train] .sheet:not([data-held]) .sheetRect{stroke:color-mix(in oklab,var(--mt-accent) 60%,var(--border))}\n@media (prefers-reduced-motion:reduce){.evalSpin,.evalTag,.evalTrack,.face,.outBar,.outName,.panel,.play,.sheetRect,.stage>*,.step,.trackFill{transition-duration:var(--duration-instant)}\n.panel{display:grid;min-width:0;align-content:center;gap:var(--space-4)}\n.svg{position:absolute;inset:0;display:block;overflow:visible;pointer-events:none}\n.hit{fill:transparent;stroke:none;pointer-events:all;cursor:default}\n.back{fill:var(--surface-muted);stroke:var(--border);stroke-width:1}\n.face{fill:var(--surface);stroke:var(--border);stroke-width:1;transition:stroke var(--duration-standard) var(--ease-standard)}\n.plate[data-on] .face{stroke:color-mix(in oklab,var(--mt-accent) 60%,var(--border))}\n.edge{fill:none;stroke:color-mix(in oklab,var(--mt-accent) calc(var(--k, 0) * 80%),var(--text-muted));stroke-linecap:round}\n.dot{fill:var(--mt-accent)}\n.grad{fill:none;stroke:var(--mt-accent);stroke-width:2.25;stroke-linecap:round}\n.node{fill:var(--surface-raised);stroke:var(--border-strong);stroke-width:1.25}\n[data-theme=dark] .node{stroke:color-mix(in oklab,var(--text-muted) 55%,var(--border-strong))}\n.act{fill:var(--mt-accent)}\n.ring{fill:none;stroke:var(--mt-accent);stroke-width:1.25}\n.layerLabel,.outVal,.stackMeta,.tick,.valText{fill:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums}\n.layerLabel{fill:var(--text-secondary)}\n.outRow[data-win=true] .outName,.outRow[data-win=true] .outVal{fill:var(--foreground)}\n.outName,.stackName{fill:var(--foreground);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body)}\n.outName{fill:var(--text-secondary);transition:fill var(--duration-standard) var(--ease-standard)}\n.outRow[data-win=true] .outBar{fill:var(--mt-accent)}\n.outTrack{fill:var(--surface-muted);stroke:var(--border-subtle);stroke-width:1}\n.outBar{fill:var(--text-muted);transition:fill var(--duration-standard) var(--ease-standard)}\n.sheetRect{fill:var(--surface-raised);stroke:var(--border);stroke-width:1;transition:stroke var(--duration-standard) var(--ease-standard)}\n.sheet[data-held] .sheetRect{stroke:var(--border-strong);stroke-dasharray:3 3}\n.sheetBar{fill:color-mix(in oklab,var(--text-muted) 45%,transparent)}\n.sheetBarStrong{fill:color-mix(in oklab,var(--text-muted) 75%,transparent)}\n.tagWrap{position:absolute;top:0;left:0;z-index:2;pointer-events:none}\n.tagWrap[data-align=start] .tag{transform:none}\n.tagWrap[data-align=end] .tag{transform:translateX(-100%)}\n.tag{position:absolute;bottom:0;left:0;padding:3px var(--space-2);border-radius:var(--radius-pill);color:var(--background);background:var(--foreground);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap;transform:translateX(-50%);animation:tagIn var(--duration-standard) var(--ease-standard)}\n.tag{animation:none}\n.stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-4)}\n.stat{display:grid;min-width:0;gap:2px}\n.statLabel{color:var(--text-secondary);font-size:var(--text-xs);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.statValue{color:var(--foreground);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.15;font-variant-numeric:tabular-nums;opacity:var(--o,.4)}\n.statValue{font-size:var(--text-xl)}\n.statMeta{min-height:1.4em;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);letter-spacing:var(--tracking-body);line-height:var(--leading-body);font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap;opacity:calc(var(--o, .4) * 1.8)}\n.chart{position:relative;min-width:0;height:112px}\n.chart>svg{position:absolute;inset:0;display:block;overflow:visible}\n.grid{stroke:var(--border-subtle);stroke-width:1;stroke-dasharray:2 3}\n.axis{stroke:var(--border);stroke-width:1}\n.line{fill:none;stroke:var(--mt-accent);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.head{fill:var(--mt-accent);stroke:var(--background);stroke-width:2}\n.valDot{fill:var(--background);stroke:var(--text-secondary);stroke-width:1.5}\n.evalRow{display:grid;grid-template-columns:24px minmax(0,1fr) auto;align-items:center;gap:var(--space-3);padding-top:var(--space-4);border-top:1px solid var(--border-subtle);opacity:var(--o,1)}\n.evalRow[data-state=running] .evalSpin{opacity:1}\n.evalRow[data-state=passed] .evalTrack{fill:color-mix(in oklab,var(--success) 12%,transparent);stroke:color-mix(in oklab,var(--success) 55%,var(--border))}\n.evalRow[data-state=waiting] .evalValue{visibility:hidden}\n.evalRow[data-state=passed] .evalTag[data-kind=passed],.evalRow[data-state=running] .evalTag[data-kind=running],.evalRow[data-state=waiting] .evalTag[data-kind=waiting]{opacity:1;transform:none;transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.evalMark{width:24px;height:24px;overflow:visible}\n.evalTrack{fill:transparent;stroke:var(--border-strong);stroke-width:1.25;transition:fill var(--duration-standard) var(--ease-standard),stroke var(--duration-standard) var(--ease-standard)}\n.evalSpin{fill:none;stroke:var(--mt-accent);stroke-width:1.75;stroke-linecap:round;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.evalCheck{fill:none;stroke:var(--success);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.evalText{display:grid;min-width:0}\n.evalName{overflow:hidden;font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.evalMeta,.evalName{letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.evalMeta{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.evalRight{display:flex;align-items:center;gap:var(--space-2)}\n.evalValue{min-width:4.9ch;color:var(--foreground);font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body);font-variant-numeric:tabular-nums;text-align:right}\n.evalTags{display:grid;min-height:19px}\n.evalTag{grid-area:1/1;justify-self:end;padding:1px 7px;border-radius:var(--radius-pill);font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.35;white-space:nowrap;opacity:0;transform:scale(.92);transition:opacity var(--duration-fast) var(--ease-exit),transform var(--duration-fast) var(--ease-standard)}\n.evalTag[data-kind=waiting]{color:var(--text-secondary);background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border)}\n.evalTag[data-kind=running]{color:var(--mt-accent);background:color-mix(in oklab,var(--mt-accent) 9%,var(--surface-raised));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--mt-accent) 28%,var(--border))}\n.evalTag[data-kind=passed]{color:var(--success);background:color-mix(in oklab,var(--success) 10%,var(--surface-raised));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--success) 30%,var(--border))}\n.controls{display:flex;min-width:0;align-items:center;gap:var(--space-4)}\n.play{display:grid;flex:none;place-items:center;width:var(--control-height-sm);height:var(--control-height-sm);padding:0;border:1px solid var(--border);border-radius:50%;color:var(--foreground);background:var(--surface);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.play:hover{background:var(--surface-muted)}\n.play:active{transform:scale(.97)}\n.play>svg{width:16px;height:16px}\n.steps{display:grid;flex:1;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--space-2);min-width:0;margin:0;padding:0;list-style:none}\n.stepItem{min-width:0}\n.step{display:grid;width:100%;min-height:44px;align-content:center;gap:7px;padding:0;border:0;color:var(--text-muted);background:none;font:inherit;text-align:left;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.step:hover{color:var(--text-secondary)}\n.step[data-state=current]{color:var(--foreground)}\n.step[data-state=current] .stepNumber{color:var(--mt-accent)}\n.step[data-state=current] .trackFill{background:var(--mt-accent)}\n.stepLabel{display:flex;min-width:0;align-items:baseline;gap:6px;font-size:var(--text-xs);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap}\n.stepNumber{flex:none;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.stepName{overflow:hidden;text-overflow:ellipsis}\n.stepName{display:none}\n.track{position:relative;height:2px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border)}\n.trackFill{position:absolute;inset:0;border-radius:inherit;background:var(--text-muted);transform:scaleX(var(--s,0));transform-origin:0 50%;transition:background-color var(--duration-standard) var(--ease-standard)}\n.caption{display:grid;min-height:calc(var(--text-sm) * var(--leading-body) * 2);margin:0;color:var(--text-secondary);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-align:center;text-wrap:balance}\n.caption{font-size:var(--text-xs);min-height:calc(var(--text-xs) * var(--leading-body) * 3)}\n.captionStage{display:none;color:var(--foreground);font-weight:500}\n.captionStage{display:inline}", {"root":"root","stage":"stage","panel":"panel","body":"body","diagram":"diagram","edge":"edge","sheet":"sheet","sheetRect":"sheetRect","evalSpin":"evalSpin","evalTag":"evalTag","evalTrack":"evalTrack","face":"face","outBar":"outBar","outName":"outName","play":"play","step":"step","trackFill":"trackFill","svg":"svg","hit":"hit","back":"back","plate":"plate","dot":"dot","grad":"grad","node":"node","act":"act","ring":"ring","layerLabel":"layerLabel","outVal":"outVal","stackMeta":"stackMeta","tick":"tick","valText":"valText","outRow":"outRow","stackName":"stackName","outTrack":"outTrack","sheetBar":"sheetBar","sheetBarStrong":"sheetBarStrong","tagWrap":"tagWrap","tag":"tag","stats":"stats","stat":"stat","statLabel":"statLabel","statValue":"statValue","statMeta":"statMeta","chart":"chart","grid":"grid","axis":"axis","line":"line","head":"head","valDot":"valDot","evalRow":"evalRow","evalValue":"evalValue","evalMark":"evalMark","evalCheck":"evalCheck","evalText":"evalText","evalName":"evalName","evalMeta":"evalMeta","evalRight":"evalRight","evalTags":"evalTags","controls":"controls","steps":"steps","stepItem":"stepItem","stepNumber":"stepNumber","stepLabel":"stepLabel","stepName":"stepName","track":"track","caption":"caption","captionStage":"captionStage"});
A.reg(8591, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ModelTrainingDemo: () => P, default: () => Y });
  var s = a(95155), r = a(12115), n = a(79267), l = a(36619), i = a(6051), o = a.n(i);
  let d = ["Batch", "Forward pass", "Backprop", "Epochs", "Evaluate"], c = ["Positive", "Negative"], h = [0, 3.2, 6.2, 9.2, 16.35], m = [2.9, 4.75, 7.8, 14, 20.45], u = [{ s: 1, d: 1.5 }], g = [[], [], []], p = [[], [], []];
  for (let e2 = 0; e2 < 3; e2++)
    g[e2].push({ s: 3.4 + 0.9 * e2, d: 0.8 }), p[e2].push({ s: 6.4 + 0.9 * (2 - e2), d: 0.8 });
  for (let e2 = 0; e2 < 5; e2++) {
    let t2 = 9.2 + 1.35 * e2;
    u.push({ s: t2, d: 0.46 });
    for (let e3 = 0; e3 < 3; e3++)
      g[e3].push({ s: t2 + 0.46 + 0.2 * e3, d: 0.38 }), p[e3].push({ s: t2 + 1.04 + 0.15 * (2 - e3), d: 0.36 });
  }
  let x = { s: 16.55, d: 0.9 };
  for (let e2 = 0; e2 < 3; e2++) g[e2].push({ s: 17.55 + 0.5 * e2, d: 0.55 });
  let _ = g[2][0].s + g[2][0].d, f = [
    g[0][g[0].length - 1].s,
    g[2][g[2].length - 1].s + g[2][g[2].length - 1].d
  ], v = [
    [...u, x].map((e2) => e2.s + e2.d),
    ...g.map((e2) => e2.map((e3) => e3.s + e3.d))
  ], y = [
    p[0].map((e2) => e2.s + e2.d),
    p[1].map((e2) => e2.s + e2.d),
    p[2].map((e2) => e2.s + e2.d),
    p[2].map((e2) => e2.s)
  ], N = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), w = (e2, t2) => (e2 % t2 + t2) % t2, j = (e2, t2, a2) => {
    let s2 = N((a2 - e2) / (t2 - e2));
    return s2 * s2 * (3 - 2 * s2);
  }, b = (e2) => {
    let t2 = N(e2);
    return t2 * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
  }, k = (e2) => 1 - (1 - N(e2)) ** 3, M = (e2) => N(Math.min(e2 / 0.14, (1 - e2) / 0.14)), $ = (e2) => e2.toFixed(2), S = (e2, t2, a2) => [e2[0] + (t2[0] - e2[0]) * a2, e2[1] + (t2[1] - e2[1]) * a2], L = (e2, t2) => {
    let a2 = S(e2[0], e2[1], t2), s2 = S(e2[1], e2[2], t2), r2 = S(e2[2], e2[3], t2);
    return S(S(a2, s2, t2), S(s2, r2, t2), t2);
  }, F = (e2) => `M${$(e2[0][0])} ${$(e2[0][1])}C${$(e2[1][0])} ${$(e2[1][1])} ${$(e2[2][0])} ${$(e2[2][1])} ${$(e2[3][0])} ${$(e2[3][1])}`, R = (e2) => Math.round(e2).toLocaleString("en-US"), T = (e2) => {
    let t2 = 43758.5453 * Math.sin(12.9898 * e2 + 78.233);
    return t2 - Math.floor(t2);
  }, D = (e2, t2) => {
    for (let a2 of e2) if (t2 >= a2.s && t2 <= a2.s + a2.d) return a2;
    return null;
  }, B = (e2, t2, a2 = 0.6) => {
    let s2 = -1 / 0;
    for (let a3 of e2) a3 <= t2 && a3 > s2 && (s2 = a3);
    let r2 = (t2 - s2) / a2;
    return r2 >= 0 && r2 < 1 ? r2 : -1;
  }, W = (e2) => {
    let t2 = 0;
    for (let a2 = 0; a2 < h.length; a2++) e2 >= h[a2] && (t2 = a2);
    return t2;
  }, A = (e2, t2, a2) => {
    let s2 = (Math.exp(-4.2 * e2) - Math.exp(-4.2)) / (1 - Math.exp(-4.2)), r2 = 0.045 * (t2 - a2) * (0.5 + 0.5 * Math.sin(41 * e2) * Math.sin(13 * e2 + 1)) * 4 * e2 * (1 - e2);
    return a2 + (t2 - a2) * s2 + r2;
  }, C = "(prefers-reduced-motion: reduce)", E = (e2) => {
    let t2 = window.matchMedia(C);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function V({
    classes: e2 = c,
    inputs: t2 = 3,
    hidden: a2 = [4, 4],
    samples: i2 = 12800,
    heldOutSamples: I2 = 1600,
    batchSize: O2 = 32,
    epochs: P2 = 12,
    lossFrom: Y2 = 0.69,
    lossTo: z = 0.08,
    accuracy: H = 94.2,
    target: X = 90,
    labels: q,
    steps: G = d,
    defaultStep: Q,
    caption: U = true,
    controls: J = true,
    speed: K = 1,
    paused: Z = false,
    accent: ee,
    label: et,
    className: ea,
    style: es
  }) {
    let er, en = (0, r.useSyncExternalStore)(
      E,
      () => window.matchMedia(C).matches,
      () => false
    ), el = (0, r.useRef)(null), ei = (0, r.useRef)(null), eo = (0, r.useRef)(null), [ed, ec] = (0, r.useState)(0), [eh, em] = (0, r.useState)(0), [eu, eg] = (0, r.useState)(null), [ep, ex] = (0, r.useState)(true), e_ = {
      training: q?.training ?? "Training set",
      heldOut: q?.heldOut ?? "Held-out set",
      unit: q?.unit ?? "reviews",
      input: q?.input ?? "Input",
      hidden: q?.hidden ?? "Hidden",
      output: q?.output ?? "Output",
      loss: q?.loss ?? "Loss",
      epoch: q?.epoch ?? "Epoch",
      evaluation: q?.evaluation ?? "Evaluation",
      waiting: q?.waiting ?? "Waiting",
      running: q?.running ?? "Running",
      passed: q?.passed ?? "Passed",
      noBatch: q?.noBatch ?? "Waiting for a batch"
    }, ef = [e2[0] ?? c[0], e2[1] ?? c[1]], ev = [
      N(Math.round(t2), 2, 5),
      N(Math.round(a2[0] ?? 4), 2, 6),
      N(Math.round(a2[1] ?? 4), 2, 6),
      2
    ].join(","), ey = (0, r.useMemo)(() => ev.split(",").map(Number), [ev]), eN = (0, r.useMemo)(() => d.map((e3, t3) => G[t3] ?? e3), [G]), ew = Math.max(1, Math.round(P2)), ej = (0, r.useMemo)(
      () => ed > 0 ? (function(e3, t3) {
        let a3, s2, r2, n2, l2, i3 = e3 < 480, o2 = i3 ? 4 : 5, d2 = i3 ? 4 : 5, c2 = Math.round(i3 ? 64 : N(0.15 * e3, 76, 100)), h2 = Math.round(c2 * (i3 ? 0.64 : 0.68)), m2 = Math.max(...t3), u2 = i3 ? 36 : 44, g2 = i3 ? 5.5 : 6.5, p2 = i3 ? 16 : 20, x2 = i3 ? 22 : 28;
        if (i3) {
          let e4 = 4 + 3 * d2;
          s2 = [2 + c2 / 2, e4 + h2 / 2], r2 = [2 + 1.5 * c2 + 3 * d2 + 28, e4 + h2 / 2], l2 = Math.round(e4 + h2 + 40 + 34 + (m2 - 1) / 2 * u2 + p2), n2 = x2 / 2 + 4, a3 = Math.round(l2 + (m2 - 1) / 2 * u2 + p2 + 30);
        } else {
          let t4 = 3 * d2 + h2 + 40, i4 = ((a3 = 316) - 2 * t4) / 3;
          s2 = [2 + c2 / 2, i4 + 3 * d2 + h2 / 2], r2 = [2 + c2 / 2, 2 * i4 + t4 + 2 * d2 + h2 / 2], n2 = 2 + c2 + 3 * d2 + N(0.1 * e3, 44, 80), l2 = Math.round(a3 / 2 - 10);
        }
        let _2 = e3 - (i3 ? 78 : 112), f2 = [0, 1, 2, 3].map((e4) => n2 + (_2 - n2) * e4 / 3), v2 = t3.map(
          (e4) => Array.from(
            { length: e4 },
            (t4, a4) => l2 + (a4 - (e4 - 1) / 2) * u2
          )
        ), y2 = t3.map((e4, t4) => ({
          x: f2[t4] - x2 / 2,
          y: l2 - (e4 - 1) / 2 * u2 - p2,
          w: x2,
          h: (e4 - 1) * u2 + 2 * p2
        })), w2 = l2 + (m2 - 1) / 2 * u2 + p2 + 20, j2 = [], b2 = 0;
        for (let e4 = 0; e4 < 3; e4++)
          for (let a4 = 0; a4 < t3[e4]; a4++)
            for (let s3 = 0; s3 < t3[e4 + 1]; s3++) {
              let t4 = [f2[e4] + g2 + 1, v2[e4][a4]], r3 = [f2[e4 + 1] - g2 - 1, v2[e4 + 1][s3]], n3 = (r3[0] - t4[0]) * 0.5, l3 = 0.2 + 0.16 * T(3 * b2 + 1), i4 = T(7 * b2 + 5), o3 = i4 > 0.72 ? 0.78 + 0.22 * T(b2 + 11) : 0.06 + 0.3 * i4;
              j2.push({
                a: e4,
                i: a4,
                j: s3,
                curve: [t4, [t4[0] + n3, t4[1]], [r3[0] - n3, r3[1]], r3],
                init: l3,
                target: o3
              }), b2++;
            }
        let k2 = f2[3] + x2 / 2 + o2 + (i3 ? 7 : 10);
        return {
          w: e3,
          h: a3,
          narrow: i3,
          D: o2,
          SD: d2,
          sheetW: c2,
          sheetH: h2,
          train: s2,
          held: r2,
          trainLabelY: s2[1] + h2 / 2 + 18,
          heldLabelY: r2[1] + h2 / 2 + 18,
          xs: f2,
          ys: v2,
          cy: l2,
          r: g2,
          plates: y2,
          labelY: w2,
          edges: j2,
          classX: k2,
          barW: Math.max(40, Math.min(84, e3 - k2 - 4))
        };
      })(ed, ey) : null,
      [ed, ey]
    ), eb = (0, r.useMemo)(
      () => eh > 0 ? (function(e3, t3, a3) {
        let s2 = e3 - 10, r2 = 1.08 * Math.max(t3, a3), n2 = [];
        for (let e4 = 0; e4 <= 72; e4++) {
          let l3 = e4 / 72;
          n2.push([2 + l3 * (s2 - 2), 10 + (1 - A(l3, t3, a3) / r2) * 82]);
        }
        let l2 = [0];
        for (let e4 = 1; e4 < n2.length; e4++)
          l2.push(
            l2[e4 - 1] + Math.hypot(n2[e4][0] - n2[e4 - 1][0], n2[e4][1] - n2[e4 - 1][1])
          );
        let i3 = l2[l2.length - 1] || 1;
        return {
          w: e3,
          h: 112,
          left: 2,
          right: s2,
          top: 10,
          bottom: 92,
          pts: n2,
          cum: l2.map((e4) => e4 / i3),
          d: n2.map((e4, t4) => `${t4 ? "L" : "M"}${$(e4[0])} ${$(e4[1])}`).join("")
        };
      })(eh, Y2, z) : null,
      [eh, Y2, z]
    ), ek = (0, r.useMemo)(
      () => [
        `A batch of ${O2} labeled ${e_.unit} leaves the training set. Each feature feeds one input.`,
        "Signals flow forward through each layer and the network guesses a label.",
        "The error flows backward and nudges every weight, strengthening the connections that helped.",
        `Batch after batch for ${ew} epochs, the loss falls from ${Y2.toFixed(2)} to ${z.toFixed(2)}.`,
        `The ${e_.heldOut.toLowerCase()} was never trained on. It scores ${H.toFixed(1)}%, above the ${X}% target, so the model passes.`
      ],
      [O2, e_.unit, e_.heldOut, ew, Y2, z, H, X]
    ), eM = (0, r.useRef)({
      edge: [],
      grad: [],
      dot: [],
      act: [[], [], [], []],
      ring: [[], [], [], []],
      sheet: [],
      heldSheet: [],
      outVal: [],
      outBar: [],
      outRow: [],
      loss: null,
      lossMeta: null,
      epoch: null,
      stats: null,
      line: null,
      head: null,
      val: null,
      evalRow: null,
      acc: null,
      spin: null,
      check: null,
      step: [],
      stepFill: [],
      caption: null,
      captionStage: null
    }), e$ = N(Math.round(Q ?? 0), 0, 4), eS = (0, r.useRef)({
      time: 0 === e$ ? 0 : h[e$],
      rate: NaN,
      rateV: 0,
      frame: 0,
      running: false,
      visible: true,
      started: false,
      atStill: false,
      ticked: false,
      cache: /* @__PURE__ */ new Map()
    }), eL = Z || !ep || 0 === K, eF = K * (eu ? 0.6 : 1), eR = (0, r.useRef)({
      g: ej,
      chart: eb,
      hold: eL,
      goal: eF,
      reduced: en,
      captions: ek,
      stepNames: eN,
      lossFrom: Y2,
      lossTo: z,
      accuracy: H,
      epochCount: ew,
      nm: e_
    });
    (0, r.useLayoutEffect)(() => {
      eR.current = {
        g: ej,
        chart: eb,
        hold: eL,
        goal: eF,
        reduced: en,
        captions: ek,
        stepNames: eN,
        lossFrom: Y2,
        lossTo: z,
        accuracy: H,
        epochCount: ew,
        nm: e_
      };
    });
    let eT = (0, r.useCallback)((e3, t3, a3) => {
      if (!e3) return;
      let s2 = eS.current.cache, r2 = s2.get(e3);
      if (r2 || (r2 = {}, s2.set(e3, r2)), r2[t3] !== a3)
        if (r2[t3] = a3, "text" === t3) {
          let t4 = e3.firstChild;
          t4 && 3 === t4.nodeType && !t4.nextSibling ? t4.data = a3 : e3.textContent = a3;
        } else
          t3.startsWith("--") ? e3.style.setProperty(t3, a3) : e3.setAttribute(t3, a3);
    }, []), eD = (0, r.useCallback)(
      (e3) => {
        let {
          g: t3,
          chart: a3,
          lossFrom: s2,
          lossTo: r2,
          accuracy: n2,
          epochCount: l2,
          nm: i3,
          captions: o2,
          stepNames: d2
        } = eR.current, c2 = eM.current, m2 = w(e3, 21.45), F2 = W(m2), R2 = m2 < 0.8, T2 = R2 && m2 < 0.35, C2 = (function(e4) {
          if (e4 < 0.8) return 1;
          let t4 = 0.03 * j(p[0][0].s + 0.1, p[0][0].s + p[0][0].d, e4);
          for (let a4 = 0; a4 < 5; a4++) {
            let s3 = 9.2 + 1.35 * a4;
            t4 += 0.194 * j(s3 + 1.04, s3 + 1.04 + 0.66, e4);
          }
          return t4;
        })(m2), E2 = !R2 && m2 >= _, V2 = 0.5;
        if (R2) V2 = 0.5 + 0.47 * (1 - j(0.05, 0.75, m2));
        else {
          V2 = 0.5 + 0.02 * j(_, _ + 0.3, m2) + 0.42 * C2;
          let e4 = f[1];
          V2 += (0.97 - V2) * j(e4, e4 + 0.3, m2);
        }
        if (t3) {
          let e4 = [0, 1, 2].map(
            (e5) => (function(e6, t4) {
              if (t4 < 0.8) return 1 - j(0.05, 0.75, t4);
              let a5 = 0.12 * j(p[e6][0].s + 0.1, p[e6][0].s + p[e6][0].d, t4);
              for (let s4 = 1; s4 <= 5; s4++) {
                let r4 = p[e6][s4];
                a5 += 0.176 * j(r4.s, r4.s + r4.d, t4);
              }
              return a5;
            })(e5, m2)
          );
          t3.edges.forEach((t4, a5) => {
            let s4 = t4.init + (t4.target - t4.init) * e4[t4.a];
            eT(c2.edge[a5], "stroke-width", $(0.6 + 1.7 * s4)), eT(c2.edge[a5], "stroke-opacity", $(0.3 + 0.7 * s4)), eT(c2.edge[a5], "--k", $(N((s4 - 0.55) / 0.35)));
            let r4 = 0.45 + 0.55 * s4, n4 = D(g[t4.a], m2);
            if (n4) {
              let e5 = (m2 - n4.s) / n4.d, s5 = L(t4.curve, b(e5));
              eT(c2.dot[a5], "transform", `translate(${$(s5[0])} ${$(s5[1])})`), eT(c2.dot[a5], "opacity", $(r4 * M(e5)));
            } else eT(c2.dot[a5], "opacity", "0");
            let l3 = D(p[t4.a], m2);
            if (l3) {
              let e5 = (m2 - l3.s) / l3.d;
              eT(
                c2.grad[a5],
                "stroke-dashoffset",
                (-(1 - 1.2 * b(e5))).toFixed(4)
              ), eT(c2.grad[a5], "opacity", $(r4 * M(e5)));
            } else eT(c2.grad[a5], "opacity", "0");
          });
          let a4 = N((V2 - 0.56) / 0.3);
          for (let e5 = 0; e5 < 4; e5++) {
            let s4 = B(v[e5], m2, 0.7), r4 = s4 >= 0 ? Math.min(1, s4 / 0.12) * (1 - s4) ** 1.5 : 0, n4 = B(y[e5], m2, 0.6);
            for (let s5 = 0; s5 < t3.ys[e5].length; s5++) {
              let l3 = 3 === e5 && 0 === s5 ? 0.85 * a4 : 0;
              eT(c2.act[e5][s5], "opacity", $(Math.max(l3, 0.9 * N(r4)))), n4 >= 0 ? (eT(c2.ring[e5][s5], "r", $(t3.r + 7 * k(n4))), eT(c2.ring[e5][s5], "opacity", $(0.7 * (1 - n4) ** 2))) : eT(c2.ring[e5][s5], "opacity", "0");
            }
          }
          let s3 = [t3.xs[0], t3.cy], r3 = (e5, a5, r4, n4, l3) => {
            let i4 = 0;
            for (let e6 of a5) i4 += j(e6.s, e6.s + e6.d, m2);
            R2 && (i4 = 0);
            let o3 = i4 - Math.floor(i4), d3 = t3.narrow ? [r4, [r4[0], r4[1] + 70], [s3[0] + 30, s3[1] - 80], s3] : [
              r4,
              [r4[0] + 60, r4[1] + l3],
              [s3[0] - 40, s3[1] + 0.6 * l3],
              s3
            ];
            e5.forEach((e6, a6) => {
              let s4 = a6 - o3;
              if (s4 < 0) {
                let t4 = -s4, a7 = L(d3, t4);
                eT(
                  e6,
                  "transform",
                  `translate(${$(a7[0])} ${$(a7[1])}) scale(${(1 - 0.66 * t4).toFixed(3)})`
                ), eT(e6, "opacity", $(1 - j(0.55, 0.98, t4))), eT(e6, "data-front", "true");
              } else {
                let a7 = r4[0] + s4 * t3.SD, l4 = r4[1] - s4 * t3.SD;
                eT(e6, "transform", `translate(${$(a7)} ${$(l4)})`), eT(e6, "opacity", $(s4 > n4 ? N(n4 + 1 - s4) : 1)), eT(e6, "data-front", s4 < 0.5 ? "true" : "false");
              }
            });
          };
          r3(c2.sheet, u, t3.train, 3, t3.narrow ? 0 : -34), r3(c2.heldSheet, [x], t3.held, 2, 30 * !t3.narrow);
          let n3 = [V2, 1 - V2];
          for (let e5 = 0; e5 < 2; e5++)
            eT(c2.outVal[e5], "text", n3[e5].toFixed(2)), eT(c2.outBar[e5], "width", $(Math.max(0.5, t3.barW * n3[e5]))), eT(
              c2.outRow[e5],
              "data-win",
              0 === e5 && a4 > 0.5 ? "true" : "false"
            );
        }
        let I3 = A(C2, s2, r2), O3 = R2 ? m2 < 0.35 ? 1 - j(0, 0.35, m2) : 0.4 * j(0.35, 0.8, m2) : E2 ? 0.4 + 0.6 * j(_, _ + 0.3, m2) : 0.4;
        if (eT(c2.stats, "--o", $(O3)), eT(
          c2.loss,
          "text",
          T2 ? r2.toFixed(2) : E2 ? I3.toFixed(2) : s2.toFixed(2)
        ), eT(
          c2.lossMeta,
          "text",
          T2 || E2 ? `Started at ${s2.toFixed(2)}` : i3.noBatch
        ), eT(
          c2.epoch,
          "text",
          T2 ? String(l2) : E2 ? String(Math.max(1, Math.ceil(l2 * C2 - 1e-6))) : "0"
        ), a3) {
          let e4, t4, s3, r3 = (e4 = N(C2) * (a3.pts.length - 1), t4 = Math.min(a3.pts.length - 2, Math.floor(e4)), s3 = e4 - t4, {
            pt: S(a3.pts[t4], a3.pts[t4 + 1], s3),
            frac: a3.cum[t4] + (a3.cum[t4 + 1] - a3.cum[t4]) * s3
          }), n3 = R2 ? 1 - j(0, 0.5, m2) : E2 ? j(_, _ + 0.25, m2) : 0;
          eT(
            c2.line,
            "stroke-dasharray",
            `${Math.max(5e-4, r3.frac).toFixed(4)} 2`
          ), eT(c2.line, "opacity", $(n3)), eT(
            c2.head,
            "transform",
            `translate(${$(r3.pt[0])} ${$(r3.pt[1])})`
          );
          let l3 = R2 ? 1 - j(0, 0.5, m2) : j(19.15, 19.5, m2);
          eT(c2.head, "opacity", $(n3 * (1 - l3))), eT(c2.val, "opacity", $(l3));
        }
        let P3 = T2 ? "passed" : R2 || m2 < 16.55 ? "waiting" : m2 < 19.15 ? "running" : "passed";
        eT(c2.evalRow, "data-state", P3), eT(
          c2.evalRow,
          "--o",
          $(R2 ? m2 < 0.35 ? 1 - j(0, 0.35, m2) : j(0.35, 0.8, m2) : 1)
        );
        let Y3 = "passed" === P3 ? n2 : "running" === P3 ? n2 * k((m2 - f[0]) / (f[1] - f[0])) : 0;
        eT(c2.acc, "text", "waiting" === P3 ? "" : `${Y3.toFixed(1)}%`), "running" === P3 && eT(c2.spin, "transform", `rotate(${$(360 * m2 % 360)} 12 12)`), eT(
          c2.check,
          "stroke-dashoffset",
          $(T2 ? 0 : 1 - j(19.15, 19.15 + 0.4, m2))
        );
        for (let e4 = 0; e4 < 5; e4++) {
          let t4 = e4 < F2 ? "done" : e4 === F2 ? "current" : "todo", a4 = e4 < 4 ? h[e4 + 1] : 21.45, s3 = 0 === e4 ? 0.8 : h[e4], r3 = R2 && !eS.current.atStill ? 1 - b(m2 / 0.8) : e4 < F2 ? 1 : e4 > F2 ? 0 : eS.current.atStill ? 1 : N((m2 - s3) / (a4 - s3));
          eT(c2.step[e4], "data-state", t4), eT(c2.step[e4], "aria-current", "current" === t4 ? "step" : "false"), eT(c2.stepFill[e4], "--s", $(r3));
        }
        eT(c2.caption, "text", o2[F2]), eT(c2.captionStage, "text", `${d2[F2]}. `);
      },
      [eT]
    ), eB = (0, r.useCallback)(() => {
      let e3 = eS.current;
      if (e3.running || !e3.visible || eR.current.hold || eR.current.reduced)
        return;
      e3.running = true;
      let t3 = performance.now(), a3 = (s2) => {
        let { hold: r2, reduced: n2, goal: l2 } = eR.current;
        if (r2 || n2 || !e3.visible) {
          e3.running = false;
          return;
        }
        let i3 = N((s2 - t3) / 1e3, 0, 0.05);
        t3 = s2, Number.isNaN(e3.rate) && (e3.rate = l2), e3.rateV += (40 * (l2 - e3.rate) - 2 * Math.sqrt(40) * e3.rateV) * i3, e3.rate += e3.rateV * i3, e3.time += i3 * e3.rate, e3.atStill = false, e3.ticked = true, eD(e3.time), e3.frame = requestAnimationFrame(a3);
      };
      e3.frame = requestAnimationFrame(a3);
    }, [eD]);
    (0, r.useLayoutEffect)(() => {
      let e3 = ei.current, t3 = eo.current;
      if (!e3 || !t3) return;
      let a3 = () => {
        ec(Math.floor(e3.clientWidth)), em(Math.floor(t3.clientWidth));
      };
      a3();
      let s2 = new ResizeObserver(a3);
      return s2.observe(e3), s2.observe(t3), () => s2.disconnect();
    }, []), (0, r.useLayoutEffect)(() => {
      let e3 = eS.current;
      e3.cache = /* @__PURE__ */ new Map();
      let t3 = void 0 === Q ? 4 : e$;
      !e3.started && (eL || en) && (e3.time = m[t3], e3.atStill = true), e3.started = true, en && !e3.atStill && (e3.time = e3.ticked ? m[W(w(e3.time, 21.45))] : m[t3], e3.atStill = true), eD(e3.time), eB();
    }, [en, eL, eF, ej, eb, ek, eN, eD, eB, Q, e$]), (0, r.useEffect)(() => {
      let e3 = el.current, t3 = eS.current;
      if (!e3) return;
      let a3 = new IntersectionObserver(([e4]) => {
        t3.visible = e4.isIntersecting && !document.hidden, t3.visible ? eB() : (cancelAnimationFrame(t3.frame), t3.running = false);
      }), s2 = () => {
        t3.visible = !document.hidden, t3.visible ? eB() : (cancelAnimationFrame(t3.frame), t3.running = false);
      };
      return a3.observe(e3), document.addEventListener("visibilitychange", s2), () => {
        a3.disconnect(), document.removeEventListener("visibilitychange", s2), cancelAnimationFrame(t3.frame), t3.running = false;
      };
    }, [eB]);
    let eW = et ?? `Model training. Batches of ${O2} labeled ${e_.unit} feed a small neural network with ${ey[0]} inputs, two hidden layers and a ${ef[0].toLowerCase()} or ${ef[1].toLowerCase()} output. Signals flow forward to a prediction, the error flows backward and strengthens the useful connections, and over ${ew} epochs the loss falls from ${Y2.toFixed(2)} to ${z.toFixed(2)}. A held-out set then scores ${H.toFixed(1)}% against a ${X}% target and the evaluation passes.`, eA = eM.current, eC = { ...ee ? { "--mt-accent": ee } : null, ...es }, eE = (e3) => ({
      onPointerEnter: (t3) => {
        "mouse" === t3.pointerType && eg(e3);
      },
      onPointerLeave: () => eg((t3) => t3 === e3 ? null : t3)
    }), eV = null;
    if (ej && eu)
      if ("train" === eu)
        eV = {
          text: `${R(i2)} labeled ${e_.unit}, batches of ${O2}`,
          x: ej.train[0] - ej.sheetW / 2,
          y: ej.trainLabelY + (ej.narrow ? 42 : 40),
          align: "start"
        };
      else if ("held" === eu)
        eV = {
          text: `${R(I2)} ${e_.unit} it never trains on`,
          x: ej.narrow ? ej.held[0] + ej.sheetW / 2 + 3 * ej.SD : ej.held[0] - ej.sheetW / 2,
          y: ej.narrow ? ej.heldLabelY + 42 : ej.held[1] - ej.sheetH / 2 - 2 * ej.SD - 8,
          align: ej.narrow ? "end" : "start"
        };
      else {
        let e3 = Number(eu.slice(1));
        "end" === (eV = {
          text: 0 === e3 ? `${ey[0]} features per sample` : 3 === e3 ? `Softmax over ${ef[0].toLowerCase()} and ${ef[1].toLowerCase()}` : `${ey[e3]} units, ReLU, ${ey[e3 - 1] * ey[e3]} weights in`,
          x: ej.xs[e3],
          y: ej.plates[e3].y - ej.D - 8,
          align: 3 === e3 ? "end" : 0 === e3 && ej.narrow ? "start" : "center"
        }).align && (eV.x = ej.xs[e3] + ej.plates[e3].w / 2), "start" === eV.align && (eV.x = ej.xs[e3] - ej.plates[e3].w / 2);
      }
    let eI = (e3, t3) => {
      if (!ej) return null;
      let a3 = ej.sheetW, r2 = ej.sheetH, n2 = -a3 / 2, l2 = -r2 / 2, i3 = ey[0], d2 = Array.from({ length: i3 }, (e4, t4) => ({
        y: l2 + (t4 + 1) / (i3 + 1) * r2,
        w: (a3 - 22) * [0.78, 0.92, 0.56, 0.7, 0.84][t4]
      }));
      return (0, s.jsxs)(
        "g",
        {
          ref: (a4) => {
            (t3 ? eA.heldSheet : eA.sheet)[e3] = a4;
          },
          className: o().sheet,
          "data-held": t3 || void 0,
          opacity: 0,
          children: [
            (0, s.jsx)("rect", {
              className: o().sheetRect,
              x: n2,
              y: l2,
              width: a3,
              height: r2,
              rx: ej.narrow ? 6 : 9
            }),
            d2.map(
              (e4, t4) => (0, s.jsx)(
                "rect",
                {
                  className: 0 === t4 ? o().sheetBarStrong : o().sheetBar,
                  x: n2 + 11,
                  y: e4.y - 1.75,
                  width: e4.w,
                  height: 3.5,
                  rx: 1.75
                },
                t4
              )
            )
          ]
        },
        `${t3 ? "h" : "t"}-${e3}`
      );
    };
    return (0, s.jsxs)("figure", {
      ref: el,
      className: [o().root, ea].filter(Boolean).join(" "),
      style: eC,
      "data-ready": !!ej && !!eb || void 0,
      children: [
        (0, s.jsxs)("div", {
          className: o().body,
          children: [
            (0, s.jsx)("div", {
              className: o().diagram,
              role: "img",
              "aria-label": eW,
              children: (0, s.jsxs)("div", {
                ref: ei,
                className: o().stage,
                "data-hover": eu ?? void 0,
                style: ej ? { height: ej.h } : void 0,
                children: [
                  ej && (0, s.jsxs)("svg", {
                    className: o().svg,
                    viewBox: `0 0 ${ej.w} ${ej.h}`,
                    width: ej.w,
                    height: ej.h,
                    "aria-hidden": "true",
                    children: [
                      ej.plates.map(
                        (e3, t3) => (0, s.jsxs)(
                          "g",
                          {
                            className: o().plate,
                            "data-on": eu === `l${t3}` || void 0,
                            children: [
                              (0, s.jsx)("rect", {
                                className: o().back,
                                x: e3.x + ej.D,
                                y: e3.y - ej.D,
                                width: e3.w,
                                height: e3.h,
                                rx: e3.w / 2
                              }),
                              (0, s.jsx)("rect", {
                                className: o().face,
                                x: e3.x,
                                y: e3.y,
                                width: e3.w,
                                height: e3.h,
                                rx: e3.w / 2
                              })
                            ]
                          },
                          `plate-${t3}`
                        )
                      ),
                      ej.edges.map(
                        (e3, t3) => (0, s.jsx)(
                          "path",
                          {
                            ref: (e4) => {
                              eA.edge[t3] = e4;
                            },
                            className: o().edge,
                            "data-a": e3.a,
                            "data-b": e3.a + 1,
                            d: F(e3.curve),
                            strokeWidth: 0.6 + 1.7 * e3.init,
                            strokeOpacity: 0.3 + 0.7 * e3.init
                          },
                          `edge-${t3}`
                        )
                      ),
                      ej.edges.map(
                        (e3, t3) => (0, s.jsx)(
                          "path",
                          {
                            ref: (e4) => {
                              eA.grad[t3] = e4;
                            },
                            className: o().grad,
                            d: F(e3.curve),
                            pathLength: 1,
                            strokeDasharray: "0.2 2",
                            strokeDashoffset: -1,
                            opacity: 0
                          },
                          `grad-${t3}`
                        )
                      ),
                      ej.edges.map(
                        (e3, t3) => (0, s.jsx)(
                          "circle",
                          {
                            ref: (e4) => {
                              eA.dot[t3] = e4;
                            },
                            className: o().dot,
                            r: ej.narrow ? 2.5 : 3,
                            opacity: 0
                          },
                          `dot-${t3}`
                        )
                      ),
                      ej.ys.map(
                        (e3, t3) => e3.map(
                          (e4, a3) => (0, s.jsxs)(
                            "g",
                            {
                              children: [
                                (0, s.jsx)("circle", {
                                  ref: (e5) => {
                                    eA.ring[t3][a3] = e5;
                                  },
                                  className: o().ring,
                                  cx: ej.xs[t3],
                                  cy: e4,
                                  r: ej.r,
                                  opacity: 0
                                }),
                                (0, s.jsx)("circle", {
                                  className: o().node,
                                  cx: ej.xs[t3],
                                  cy: e4,
                                  r: ej.r
                                }),
                                (0, s.jsx)("circle", {
                                  ref: (e5) => {
                                    eA.act[t3][a3] = e5;
                                  },
                                  className: o().act,
                                  cx: ej.xs[t3],
                                  cy: e4,
                                  r: ej.r - 2,
                                  opacity: 0
                                })
                              ]
                            },
                            `node-${t3}-${a3}`
                          )
                        )
                      ),
                      ej.xs.map(
                        (e3, t3) => (0, s.jsx)(
                          "text",
                          {
                            className: o().layerLabel,
                            x: e3,
                            y: ej.labelY,
                            textAnchor: "middle",
                            children: 0 === t3 ? e_.input : 3 === t3 ? e_.output : e_.hidden
                          },
                          `lab-${t3}`
                        )
                      ),
                      ef.map((e3, t3) => {
                        let a3 = ej.ys[3][t3];
                        return (0, s.jsxs)(
                          "g",
                          {
                            ref: (e4) => {
                              eA.outRow[t3] = e4;
                            },
                            className: o().outRow,
                            "data-win": "false",
                            children: [
                              (0, s.jsx)("text", {
                                className: o().outName,
                                x: ej.classX,
                                y: ej.narrow ? a3 - 4 : a3 - 5,
                                children: e3
                              }),
                              (0, s.jsx)("text", {
                                ref: (e4) => {
                                  eA.outVal[t3] = e4;
                                },
                                className: o().outVal,
                                x: ej.narrow ? ej.classX : ej.classX + ej.barW,
                                y: ej.narrow ? a3 + 11 : a3 - 5,
                                textAnchor: ej.narrow ? "start" : "end",
                                children: "0.50"
                              }),
                              !ej.narrow && (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("rect", {
                                    className: o().outTrack,
                                    x: ej.classX,
                                    y: a3 + 3,
                                    width: ej.barW,
                                    height: 3,
                                    rx: 1.5
                                  }),
                                  (0, s.jsx)("rect", {
                                    ref: (e4) => {
                                      eA.outBar[t3] = e4;
                                    },
                                    className: o().outBar,
                                    x: ej.classX,
                                    y: a3 + 3,
                                    width: ej.barW / 2,
                                    height: 3,
                                    rx: 1.5
                                  })
                                ]
                              })
                            ]
                          },
                          `out-${t3}`
                        );
                      }),
                      (0, s.jsx)("text", {
                        className: o().stackName,
                        x: ej.train[0] - ej.sheetW / 2,
                        y: ej.trainLabelY,
                        children: e_.training
                      }),
                      (0, s.jsx)("text", {
                        className: o().stackMeta,
                        x: ej.train[0] - ej.sheetW / 2,
                        y: ej.trainLabelY + 15,
                        children: `${R(i2)} ${e_.unit}`
                      }),
                      (0, s.jsx)("text", {
                        className: o().stackName,
                        x: ej.held[0] - ej.sheetW / 2,
                        y: ej.heldLabelY,
                        children: e_.heldOut
                      }),
                      (0, s.jsx)("text", {
                        className: o().stackMeta,
                        x: ej.held[0] - ej.sheetW / 2,
                        y: ej.heldLabelY + 15,
                        children: `${R(I2)} ${e_.unit}`
                      }),
                      [3, 2, 1, 0].map((e3) => eI(e3, true)),
                      [4, 3, 2, 1, 0].map((e3) => eI(e3, false)),
                      (0, s.jsx)("rect", {
                        className: o().hit,
                        x: ej.train[0] - ej.sheetW / 2 - 2,
                        y: ej.train[1] - ej.sheetH / 2 - 3 * ej.SD,
                        width: ej.sheetW + 3 * ej.SD + 4,
                        height: ej.sheetH + 3 * ej.SD + 40,
                        ...eE("train")
                      }),
                      (0, s.jsx)("rect", {
                        className: o().hit,
                        x: ej.held[0] - ej.sheetW / 2 - 2,
                        y: ej.held[1] - ej.sheetH / 2 - 2 * ej.SD,
                        width: ej.sheetW + 3 * ej.SD + 4,
                        height: ej.sheetH + 2 * ej.SD + 40,
                        ...eE("held")
                      }),
                      ej.plates.map(
                        (e3, t3) => (0, s.jsx)(
                          "rect",
                          {
                            className: o().hit,
                            x: e3.x - 12,
                            y: e3.y - ej.D - 4,
                            width: e3.w + ej.D + 24,
                            height: e3.h + ej.D + 8,
                            ...eE(`l${t3}`)
                          },
                          `hit-${t3}`
                        )
                      )
                    ]
                  }),
                  eV && (0, s.jsx)(
                    "div",
                    {
                      className: o().tagWrap,
                      "data-align": eV.align,
                      style: {
                        transform: `translate(${$(eV.x)}px, ${$(eV.y)}px)`
                      },
                      children: (0, s.jsx)("span", {
                        className: o().tag,
                        children: eV.text
                      })
                    },
                    eu ?? void 0
                  )
                ]
              })
            }),
            (0, s.jsxs)("div", {
              className: o().panel,
              "aria-hidden": "true",
              children: [
                (0, s.jsxs)("div", {
                  ref: (e3) => {
                    eA.stats = e3;
                  },
                  className: o().stats,
                  children: [
                    (0, s.jsxs)("span", {
                      className: o().stat,
                      children: [
                        (0, s.jsx)("span", {
                          className: o().statLabel,
                          children: e_.loss
                        }),
                        (0, s.jsx)("span", {
                          ref: (e3) => {
                            eA.loss = e3;
                          },
                          className: o().statValue,
                          children: Y2.toFixed(2)
                        }),
                        (0, s.jsx)("span", {
                          ref: (e3) => {
                            eA.lossMeta = e3;
                          },
                          className: o().statMeta,
                          children: e_.noBatch
                        })
                      ]
                    }),
                    (0, s.jsxs)("span", {
                      className: o().stat,
                      children: [
                        (0, s.jsx)("span", {
                          className: o().statLabel,
                          children: e_.epoch
                        }),
                        (0, s.jsx)("span", {
                          className: o().statValue,
                          children: (0, s.jsx)("span", {
                            ref: (e3) => {
                              eA.epoch = e3;
                            },
                            children: "0"
                          })
                        }),
                        (0, s.jsxs)("span", {
                          className: o().statMeta,
                          children: ["of ", ew]
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsx)("div", {
                  ref: eo,
                  className: o().chart,
                  children: eb && (0, s.jsxs)("svg", {
                    viewBox: `0 0 ${eb.w} ${eb.h}`,
                    width: eb.w,
                    height: eb.h,
                    children: [
                      [0, 0.5, 1].map(
                        (e3) => (0, s.jsx)(
                          "line",
                          {
                            className: 1 === e3 ? o().axis : o().grid,
                            x1: eb.left,
                            x2: eb.right,
                            y1: eb.top + e3 * (eb.bottom - eb.top),
                            y2: eb.top + e3 * (eb.bottom - eb.top)
                          },
                          e3
                        )
                      ),
                      (0, s.jsx)("text", {
                        className: o().tick,
                        x: eb.left,
                        y: eb.h - 4,
                        children: "1"
                      }),
                      (0, s.jsx)("text", {
                        className: o().tick,
                        x: eb.right,
                        y: eb.h - 4,
                        textAnchor: "end",
                        children: ew
                      }),
                      (0, s.jsx)("path", {
                        ref: (e3) => {
                          eA.line = e3;
                        },
                        className: o().line,
                        d: eb.d,
                        pathLength: 1,
                        strokeDasharray: "0.0005 2",
                        opacity: 0
                      }),
                      (0, s.jsx)("circle", {
                        ref: (e3) => {
                          eA.head = e3;
                        },
                        className: o().head,
                        r: 3.5,
                        opacity: 0
                      }),
                      (0, s.jsx)("g", {
                        ref: (e3) => {
                          eA.val = e3;
                        },
                        opacity: 0,
                        children: (er = eb.top + (1 - 1.4 * z / (1.08 * Math.max(Y2, z))) * (eb.bottom - eb.top), (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("circle", {
                              className: o().valDot,
                              cx: eb.right,
                              cy: er,
                              r: 3.5
                            }),
                            (0, s.jsxs)("text", {
                              className: o().valText,
                              x: eb.right - 8,
                              y: er - 7,
                              textAnchor: "end",
                              children: ["Val ", (1.4 * z).toFixed(2)]
                            })
                          ]
                        }))
                      })
                    ]
                  })
                }),
                (0, s.jsxs)("div", {
                  ref: (e3) => {
                    eA.evalRow = e3;
                  },
                  className: o().evalRow,
                  "data-state": "waiting",
                  children: [
                    (0, s.jsxs)("svg", {
                      className: o().evalMark,
                      viewBox: "0 0 24 24",
                      children: [
                        (0, s.jsx)("circle", {
                          className: o().evalTrack,
                          cx: 12,
                          cy: 12,
                          r: 10.5
                        }),
                        (0, s.jsx)("circle", {
                          ref: (e3) => {
                            eA.spin = e3;
                          },
                          className: o().evalSpin,
                          cx: 12,
                          cy: 12,
                          r: 10.5,
                          pathLength: 1,
                          strokeDasharray: "0.26 1"
                        }),
                        (0, s.jsx)("path", {
                          ref: (e3) => {
                            eA.check = e3;
                          },
                          className: o().evalCheck,
                          d: "M7.5 12.4l3 3 6-6.4",
                          pathLength: 1,
                          strokeDasharray: "1 1",
                          strokeDashoffset: 1
                        })
                      ]
                    }),
                    (0, s.jsxs)("span", {
                      className: o().evalText,
                      children: [
                        (0, s.jsx)("span", {
                          className: o().evalName,
                          children: e_.evaluation
                        }),
                        (0, s.jsxs)("span", {
                          className: o().evalMeta,
                          children: ["Target ", X, "%"]
                        })
                      ]
                    }),
                    (0, s.jsxs)("span", {
                      className: o().evalRight,
                      children: [
                        (0, s.jsx)("span", {
                          ref: (e3) => {
                            eA.acc = e3;
                          },
                          className: o().evalValue
                        }),
                        (0, s.jsxs)("span", {
                          className: o().evalTags,
                          children: [
                            (0, s.jsx)("span", {
                              className: o().evalTag,
                              "data-kind": "waiting",
                              children: e_.waiting
                            }),
                            (0, s.jsx)("span", {
                              className: o().evalTag,
                              "data-kind": "running",
                              children: e_.running
                            }),
                            (0, s.jsx)("span", {
                              className: o().evalTag,
                              "data-kind": "passed",
                              children: e_.passed
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        J && (0, s.jsxs)("div", {
          className: o().controls,
          children: [
            !en && (0, s.jsx)("button", {
              type: "button",
              className: o().play,
              onClick: () => {
                let e3 = eS.current;
                if (!ep && e3.atStill) {
                  let t3 = w(e3.time, 21.45), a3 = W(t3);
                  e3.time = e3.time - t3 + (0 === a3 ? 0.8 : h[a3]), e3.atStill = false;
                }
                ex((e4) => !e4);
              },
              "aria-label": ep && !Z ? "Pause the training run" : "Play the training run",
              children: ep && !Z ? (0, s.jsx)(n.A, {
                "aria-hidden": "true",
                strokeWidth: 1.75
              }) : (0, s.jsx)(l.A, {
                "aria-hidden": "true",
                strokeWidth: 1.75
              })
            }),
            (0, s.jsx)("ol", {
              className: o().steps,
              "aria-label": "Training stages",
              children: eN.map(
                (e3, t3) => (0, s.jsx)(
                  "li",
                  {
                    className: o().stepItem,
                    children: (0, s.jsxs)("button", {
                      type: "button",
                      ref: (e4) => {
                        eA.step[t3] = e4;
                      },
                      className: o().step,
                      "data-state": t3 === e$ ? "current" : t3 < e$ ? "done" : "todo",
                      onClick: () => ((e4) => {
                        let t4 = eS.current, a3 = 21.45 * Math.floor(t4.time / 21.45), { hold: s2, reduced: r2 } = eR.current;
                        t4.atStill = s2 || r2, t4.time = a3 + (t4.atStill ? m[e4] : 0 === e4 ? 0.8 : h[e4]), eD(t4.time);
                      })(t3),
                      "aria-label": `Stage ${t3 + 1}, ${e3}`,
                      children: [
                        (0, s.jsxs)("span", {
                          className: o().stepLabel,
                          children: [
                            (0, s.jsx)("span", {
                              className: o().stepNumber,
                              children: t3 + 1
                            }),
                            (0, s.jsx)("span", {
                              className: o().stepName,
                              children: e3
                            })
                          ]
                        }),
                        (0, s.jsx)("span", {
                          className: o().track,
                          children: (0, s.jsx)("span", {
                            ref: (e4) => {
                              eA.stepFill[t3] = e4;
                            },
                            className: o().trackFill
                          })
                        })
                      ]
                    })
                  },
                  e3 + t3
                )
              )
            })
          ]
        }),
        U && (0, s.jsx)("figcaption", {
          className: o().caption,
          "aria-hidden": "true",
          children: (0, s.jsxs)("span", {
            children: [
              (0, s.jsx)("span", {
                ref: (e3) => {
                  eA.captionStage = e3;
                },
                className: o().captionStage
              }),
              (0, s.jsx)("span", {
                ref: (e3) => {
                  eA.caption = e3;
                },
                children: ek[e$]
              })
            ]
          })
        })
      ]
    });
  }
  var I = a(90938), O = a.n(I);
  function P() {
    return (0, s.jsx)("div", {
      className: O().demo,
      "data-canvas": "wide",
      children: (0, s.jsx)(V, {
        classes: ["Positive", "Negative"],
        samples: 12800,
        heldOutSamples: 1600,
        batchSize: 32,
        epochs: 12,
        lossFrom: 0.69,
        lossTo: 0.08,
        accuracy: 94.2,
        target: 90
      })
    });
  }
  let Y = P;
}

__m(__module,__exports,__require);
});
A.regCss(90938, ".demo{display:grid;width:100%;max-width:960px;margin-inline:auto}", {"demo":"demo"});
A.cssFor("model-training", [6051,90938]);
A.item("model-training", {entry:8591, export:"ModelTrainingDemo", kind:"component", tier:"pro", unresolved:[]});
})();