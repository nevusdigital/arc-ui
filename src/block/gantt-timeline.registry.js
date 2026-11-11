/* gantt-timeline (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(15330, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => a });
  var n = r(51811);
  let i = {
    name: "undo-2",
    size: 24,
    node: [
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
      [
        "path",
        {
          d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
          key: "f3b9sd"
        }
      ]
    ]
  };
  i.node;
  let a = (0, n.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(40898, ".root{--gantt-arrow:var(--text-muted);--gantt-bar-fill:color-mix(in oklab,var(--accent) 11%,var(--surface));--gantt-bar-edge:color-mix(in oklab,var(--accent) 26%,transparent);--gantt-bar-done:color-mix(in oklab,var(--accent) 30%,var(--surface));position:relative;box-sizing:border-box;width:min(100%,980px);min-width:0;margin-inline:auto;padding:16px 16px 12px;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n@media (max-width:480px){.root{padding:12px 10px 10px}\n@media (prefers-contrast:more){.root{--gantt-arrow:var(--text-secondary);--gantt-bar-edge:var(--border-strong)}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 16px;padding:0 4px 12px}\n.heading{display:flex;min-width:0;align-items:baseline;gap:10px}\n.title{margin:0;font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body)}\n.meta{margin:0;color:var(--text-muted);white-space:nowrap}\n.num{font-variant-numeric:tabular-nums}\n.controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px}\n.segmented{position:relative;display:inline-flex;padding:3px;border-radius:13px;background:var(--surface-muted)}\n.segment{position:relative;display:inline-grid;height:30px;place-items:center;padding:0 12px;border:0;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.segment[aria-pressed=true]{color:var(--foreground)}\n.segment:hover{color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.arrow,.diamond,.ghost,.groupToggle,.handle:after,.segment,.taskRow,.track{transition:none}\n.segmentThumb{position:absolute;inset:0;border-radius:inherit;background:var(--surface);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n:root[data-theme=dark] .segmentThumb{background:var(--surface-raised)}\n.segmentLabel{position:relative}\n.ghost{display:inline-flex;height:var(--control-height-sm);flex:none;align-items:center;gap:6px;padding:0 12px;border:0;border-radius:var(--radius-control);background:transparent;box-shadow:inset 0 0 0 1px var(--border);color:var(--text-secondary);font:inherit;font-weight:500;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.ghost:active:not(:disabled){transform:scale(.97)}\n.ghost:disabled{opacity:.45;cursor:default}\n@media (hover:hover) and (pointer:fine){.ghost:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.ghost:active:not(:disabled){transform:none}\n.scroller{position:relative;max-height:480px;overflow:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:22px;background:var(--surface);scrollbar-width:thin}\n.canvas{position:relative;width:calc(var(--gantt-left) + var(--gantt-days) * var(--gantt-scale) * 1px);min-width:100%}\n.headRow{position:sticky;z-index:6;top:0;display:flex;height:var(--gantt-header);border-bottom:1px solid var(--border);background:var(--surface)}\n.corner{position:sticky;z-index:2;left:0;display:flex;width:var(--gantt-left);flex:none;align-items:flex-end;padding:0 16px 9px;border-right:1px solid var(--border);background:var(--surface);color:var(--text-muted);font-size:var(--text-xs)}\n.scale{position:relative;min-width:0;flex:1;overflow:hidden}\n.tiers{position:absolute;inset:0}\n.tiers[data-zoom=day] .fine{padding-left:0;transform:translateX(calc((var(--d) + .5) * var(--gantt-scale) * 1px - 50%))}\n.coarse,.fine,.todayTag{position:absolute;left:0;white-space:nowrap;font-size:var(--text-xs)}\n.coarse{top:9px;padding-left:8px;color:var(--text-secondary);font-weight:500}\n.coarse,.fine{transform:translateX(calc(var(--d) * var(--gantt-scale) * 1px))}\n.fine{bottom:9px;padding-left:6px;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.fine[data-soft]{opacity:.6}\n.todayTag{z-index:1;top:7px;padding:1px 7px;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);font-size:var(--text-xs);font-weight:500;line-height:16px;transform:translateX(calc((var(--d) + .5) * var(--gantt-scale) * 1px - 50%))}\n.todayTag:after{content:\"\";position:absolute;top:100%;left:50%;width:1px;height:40px;background:var(--accent)}\n.body{position:relative;display:flex;min-height:var(--gantt-row);background-image:linear-gradient(to bottom,transparent calc(var(--gantt-row) - 1px),var(--border-subtle) 0);background-size:100% var(--gantt-row)}\n.names{position:sticky;z-index:5;left:0;width:var(--gantt-left);flex:none;border-right:1px solid var(--border);background:var(--surface);background-image:inherit;background-size:inherit}\n.groupRow,.taskRow{position:absolute;top:0;right:0;left:0;display:flex;height:var(--gantt-row);align-items:center}\n.taskRow{gap:10px;padding:0 14px 0 36px;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.taskRow[data-selected]{background:var(--accent-subtle);color:var(--foreground)}\n.groupToggle:hover,.taskRow:not([data-selected]):hover{background:var(--surface-muted)}\n.taskRow{padding-left:30px;gap:8px}\n.groupToggle{display:flex;width:100%;height:100%;min-width:0;align-items:center;gap:6px;padding:0 14px 0 8px;border:0;background:transparent;color:var(--foreground);font:inherit;font-weight:500;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.chevron{display:grid;width:22px;height:22px;flex:none;place-items:center;color:var(--text-muted)}\n.groupName{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.groupCount{margin-left:auto;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;font-weight:400}\n.avatar{flex:none;border-radius:50%;object-fit:cover}\n.markSlot{display:grid;width:22px;height:22px;flex:none;place-items:center}\n.mark{width:8px;height:8px;border-radius:1.5px;background:var(--text-muted);rotate:45deg}\n.taskName{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.chart{position:relative;min-width:0;flex:1}\n.grid{position:absolute;inset:0;pointer-events:none}\n.line,.today,.weekend{position:absolute;top:0;bottom:0;left:0}\n.line{width:1px;background:var(--border-subtle);transform:translateX(calc(var(--d) * var(--gantt-scale) * 1px))}\n.line[data-strong]{background:var(--border)}\n.weekend{width:calc(var(--gantt-scale) * 2px);background:color-mix(in oklab,var(--surface-muted) 55%,transparent);transform:translateX(calc(var(--d) * var(--gantt-scale) * 1px))}\n.today{z-index:1;width:1px;background:var(--accent);transform:translateX(calc((var(--d) + .5) * var(--gantt-scale) * 1px));pointer-events:none}\n.arrows{position:absolute;z-index:1;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}\n.arrow{fill:none;stroke-width:1.25;stroke-linecap:round;stroke-linejoin:round;transition:stroke-opacity var(--duration-standard) var(--ease-standard),stroke-width var(--duration-fast) var(--ease-standard)}\n.arrow[data-state=active]{stroke-width:1.75}\n.arrow[data-state=dim]{stroke-opacity:.28}\n.summary{position:absolute;top:calc((var(--gantt-row) - 6px) / 2);left:0;height:6px;overflow:hidden;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 12%,transparent);pointer-events:none}\n.summaryFill{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--accent)}\n.bar,.milestone{position:absolute;z-index:2;top:0;left:0;height:var(--gantt-bar);cursor:grab;touch-action:pan-y;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}\n.bar[data-drag],.milestone[data-drag]{z-index:4;cursor:grabbing}\n.bar[data-drag] .track{box-shadow:inset 0 0 0 1px var(--gantt-bar-edge),var(--shadow-raised)}\n.bar[data-selected] .track{box-shadow:inset 0 0 0 1.5px var(--accent)}\n.bar[data-late] .track{box-shadow:inset 0 0 0 1.5px var(--danger)}\n.bar:focus-visible .track{background:color-mix(in oklab,var(--accent) 20%,var(--surface))}\n.bar[data-done] .fill{background:color-mix(in oklab,var(--accent) 24%,var(--surface))}\n.bar[data-drag=end] .handle[data-edge=end]:after,.bar[data-drag=start] .handle[data-edge=start]:after{opacity:1}\n.bar:hover .handle:after{opacity:.7}\n.bar:hover .track{background:color-mix(in oklab,var(--accent) 15%,var(--surface))}\n.milestone{width:18px;margin-left:-9px;display:grid;place-items:center}\n.milestone[data-selected] .diamond{background:var(--accent);box-shadow:0 0 0 2px var(--surface),0 0 0 3.5px var(--accent)}\n.milestone[data-late] .diamond{background:var(--danger)}\n.milestone:focus-visible .diamond{background:var(--accent)}\n.track{position:absolute;inset:0;overflow:hidden;container-type:inline-size;border-radius:8px;background:var(--gantt-bar-fill);box-shadow:inset 0 0 0 1px var(--gantt-bar-edge);transition:box-shadow var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.fill{position:absolute;inset:0 auto 0 0;background:var(--gantt-bar-done)}\n.barLabel{position:relative;display:flex;height:100%;min-width:0;align-items:center;gap:6px;padding:0 10px;color:var(--foreground);font-size:var(--text-xs);font-weight:500;white-space:nowrap}\n.barName{min-width:0;overflow:hidden;text-overflow:ellipsis}\n@container (max-width: 96px){.barName{display:none}\n.pct{margin-left:auto;color:var(--text-secondary);font-weight:400;font-variant-numeric:tabular-nums}\n.pct{margin-left:0}\n@container (max-width: 36px){.pct{display:none}\n.handle{position:absolute;z-index:1;top:-2px;bottom:-2px;width:12px;cursor:ew-resize;touch-action:none}\n.handle[data-edge=start]{left:-4px}\n.handle[data-edge=end]{right:-4px}\n.handle:after{content:\"\";position:absolute;top:50%;left:50%;width:3px;height:12px;border-radius:2px;background:var(--accent);opacity:0;translate:-50% -50%;transition:opacity var(--duration-fast) var(--ease-standard)}\n.diamond{width:12px;height:12px;border-radius:2px;background:var(--accent);box-shadow:0 0 0 2px var(--surface);rotate:45deg;transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n.milestoneLabel{position:absolute;left:22px;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;white-space:nowrap;pointer-events:none}\n.snap{position:absolute;z-index:1;top:0;left:0;height:var(--gantt-bar);border:1px dashed color-mix(in oklab,var(--accent) 65%,transparent);border-radius:8px;pointer-events:none}\n.snap[data-milestone]{width:16px;height:16px;margin:4px 0 0 -8px;border-radius:3px;rotate:45deg}\n.tip{position:absolute;z-index:5;bottom:calc(100% + 6px);left:50%;padding:4px 8px;border-radius:8px;background:var(--foreground);box-shadow:var(--shadow-raised);color:var(--background);font-size:var(--text-xs);font-variant-numeric:tabular-nums;font-weight:500;line-height:16px;white-space:nowrap;pointer-events:none;translate:-50% 0}\n.tip[data-below]{top:calc(100% + 6px);bottom:auto}\n.footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;padding:12px 4px 0}\n.status{position:relative;min-width:0;min-height:20px;flex:1 1 16rem;margin:0;color:var(--text-secondary)}\n.statusText[data-tone=danger]{color:var(--danger)}\n.statusText{display:block}\n.footerActions{display:flex;gap:6px}", {"root":"root","srOnly":"srOnly","toolbar":"toolbar","heading":"heading","title":"title","meta":"meta","num":"num","controls":"controls","segmented":"segmented","segment":"segment","arrow":"arrow","diamond":"diamond","ghost":"ghost","groupToggle":"groupToggle","handle":"handle","taskRow":"taskRow","track":"track","segmentThumb":"segmentThumb","segmentLabel":"segmentLabel","scroller":"scroller","canvas":"canvas","headRow":"headRow","corner":"corner","scale":"scale","tiers":"tiers","fine":"fine","coarse":"coarse","todayTag":"todayTag","body":"body","names":"names","groupRow":"groupRow","chevron":"chevron","groupName":"groupName","groupCount":"groupCount","avatar":"avatar","markSlot":"markSlot","mark":"mark","taskName":"taskName","chart":"chart","grid":"grid","line":"line","today":"today","weekend":"weekend","arrows":"arrows","summary":"summary","summaryFill":"summaryFill","bar":"bar","milestone":"milestone","fill":"fill","barLabel":"barLabel","barName":"barName","pct":"pct","milestoneLabel":"milestoneLabel","snap":"snap","tip":"tip","footer":"footer","status":"status","statusText":"statusText","footerActions":"footerActions"});
A.reg(66640, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { GanttTimeline: () => Q, default: () => X });
  var n = a(95155), i = a(12115), s = a(5772), r = a(18310), l = a(6900), o = a(55809), d = a(25354), m = a(92171), c = a(7890), g = a(80642), h = a(28245), u = a(57700), p = a(51811);
  let f = {
    name: "crosshair",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
      ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
      ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
    ]
  };
  f.node;
  let y = (0, p.A)(f);
  var w = a(76721), k = a(15330), _ = a(92298), v = a(67752), b = a(7770);
  let x = [
    { id: "discovery", name: "Discovery" },
    { id: "design", name: "Design" },
    { id: "build", name: "Build" },
    { id: "launch", name: "Launch" }
  ], j = [
    {
      id: "interviews",
      name: "User interviews",
      group: "discovery",
      start: "2026-08-31",
      end: "2026-09-09",
      progress: 1,
      assignee: "jasmine-brooks"
    },
    {
      id: "audit",
      name: "Competitive audit",
      group: "discovery",
      start: "2026-09-02",
      end: "2026-09-10",
      progress: 1,
      assignee: "chloe-nguyen"
    },
    {
      id: "readout",
      name: "Research readout",
      group: "discovery",
      start: "2026-09-11",
      end: "2026-09-11",
      milestone: true,
      dependsOn: ["interviews", "audit"]
    },
    {
      id: "navigation",
      name: "Navigation model",
      group: "design",
      start: "2026-09-14",
      end: "2026-09-25",
      progress: 0.7,
      assignee: "emma-collins",
      dependsOn: ["readout"]
    },
    {
      id: "visual",
      name: "Visual system",
      group: "design",
      start: "2026-09-21",
      end: "2026-10-07",
      progress: 0.35,
      assignee: "jasmine-brooks"
    },
    {
      id: "prototype",
      name: "Prototype testing",
      group: "design",
      start: "2026-09-28",
      end: "2026-10-09",
      progress: 0,
      assignee: "emma-collins",
      dependsOn: ["navigation"]
    },
    {
      id: "contracts",
      name: "API contracts",
      group: "build",
      start: "2026-09-16",
      end: "2026-10-02",
      progress: 0.5,
      assignee: "daniel-kim"
    },
    {
      id: "ios",
      name: "iOS app",
      group: "build",
      start: "2026-10-05",
      end: "2026-10-30",
      progress: 0,
      assignee: "mateo-alvarez",
      dependsOn: ["contracts"]
    },
    {
      id: "android",
      name: "Android app",
      group: "build",
      start: "2026-10-12",
      end: "2026-11-04",
      progress: 0,
      assignee: "marcus-johnson",
      dependsOn: ["contracts"]
    },
    {
      id: "payments",
      name: "Payments",
      group: "build",
      start: "2026-10-12",
      end: "2026-10-28",
      progress: 0,
      assignee: "olivia-bennett",
      dependsOn: ["contracts"]
    },
    {
      id: "freeze",
      name: "Beta freeze",
      group: "launch",
      start: "2026-11-06",
      end: "2026-11-06",
      milestone: true,
      dependsOn: ["ios", "android", "payments"]
    },
    {
      id: "review",
      name: "App store review",
      group: "launch",
      start: "2026-11-09",
      end: "2026-11-16",
      progress: 0,
      assignee: "sofia-ramirez",
      dependsOn: ["freeze"]
    },
    {
      id: "campaign",
      name: "Launch campaign",
      group: "launch",
      start: "2026-11-02",
      end: "2026-11-18",
      progress: 0,
      assignee: "ava-mitchell"
    },
    {
      id: "public",
      name: "Public launch",
      group: "launch",
      start: "2026-11-19",
      end: "2026-11-19",
      milestone: true,
      dependsOn: ["review"]
    }
  ], N = ["discovery"];
  var M = a(40898), A = a.n(M);
  let $ = { day: 36, week: 14, month: 5 }, T = [
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" }
  ], { spring: L, duration: P, ease: S } = b.T, C = L.snappy, z = (e2) => {
    let [t2, a2, n2] = e2.split("-").map(Number);
    return Date.UTC(t2, a2 - 1, n2);
  }, D = (e2) => new Date(e2).toISOString().slice(0, 10), O = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), R = new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }), U = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" }), I = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), Y = (e2) => Math.round(100 * e2) / 100, G = () => () => {
  };
  class E {
    task(e2, t2 = 0, a2 = 1) {
      let n2 = this.tasks.get(e2);
      return n2 || (n2 = { start: (0, l.OQ)(t2), len: (0, l.OQ)(a2) }, this.tasks.set(e2, n2)), n2;
    }
    row(e2, t2 = 0, a2 = 1) {
      let n2 = this.rows.get(e2);
      return n2 || (n2 = { y: (0, l.OQ)(t2), vis: (0, l.OQ)(a2) }, this.rows.set(e2, n2)), n2;
    }
    constructor() {
      this.tasks = /* @__PURE__ */ new Map(), this.rows = /* @__PURE__ */ new Map();
    }
  }
  function W({ from: e2, to: t2, stage: a2, scale: i2, state: s2 }) {
    let r2 = a2.task(e2.task.id), l2 = a2.task(t2.task.id), m2 = a2.row(e2.task.id), c2 = a2.row(t2.task.id), g2 = (0, o.G)(() => {
      let a3 = i2.get(), n2 = e2.task.milestone ? (r2.start.get() + 0.5) * a3 + 7 : (r2.start.get() + r2.len.get()) * a3 + 1, s3 = t2.task.milestone ? (l2.start.get() + 0.5) * a3 - 8 : l2.start.get() * a3 - 2;
      return (function(e3, t3, a4, n3) {
        let i3 = e3 + 10, s4 = Math.min(i3, a4 - 10), r3 = t3 + (n3 >= t3 ? 1 : -1) * 40 / 2, l3 = [
          [e3, t3],
          [i3, t3],
          [i3, r3],
          [s4, r3],
          [s4, n3],
          [a4, n3]
        ], o2 = `M${Y(e3)} ${Y(t3)}`;
        for (let e4 = 1; e4 < l3.length - 1; e4++) {
          let [t4, a5] = l3[e4 - 1], [n4, i4] = l3[e4], [s5, r4] = l3[e4 + 1], d2 = Math.hypot(n4 - t4, i4 - a5), m3 = Math.hypot(s5 - n4, r4 - i4), c3 = Math.min(6, d2 / 2, m3 / 2);
          if (c3 < 0.5) {
            o2 += ` L${Y(n4)} ${Y(i4)}`;
            continue;
          }
          o2 += ` L${Y(n4 - (n4 - t4) / d2 * c3)} ${Y(i4 - (i4 - a5) / d2 * c3)} Q${Y(n4)} ${Y(i4)} ${Y(n4 + (s5 - n4) / m3 * c3)} ${Y(i4 + (r4 - i4) / m3 * c3)}`;
        }
        return `${o2} L${Y(a4)} ${Y(n3)} M${Y(a4 - 5)} ${Y(n3 - 4)} L${Y(a4)} ${Y(n3)} L${Y(a4 - 5)} ${Y(n3 + 4)}`;
      })(n2, m2.y.get() + 20, s3, c2.y.get() + 20);
    }), h2 = (0, o.G)(() => Math.max(m2.vis.get(), c2.vis.get())), u2 = (0, o.G)(() => +(l2.start.get() < r2.start.get() + r2.len.get() - 0.02)), p2 = (0, o.G)(u2, (e3) => e3 ? "var(--danger)" : "var(--gantt-arrow)");
    return (0, n.jsx)(d.PY1.path, {
      d: g2,
      style: { opacity: h2, stroke: p2 },
      className: A().arrow,
      "data-state": s2
    });
  }
  function F({ group: e2, plans: t2, stage: a2, scale: i2 }) {
    let s2 = t2.map((e3) => a2.task(e3.task.id)), r2 = a2.row(e2.id), l2 = (0, o.G)(() => Math.min(...s2.map((e3) => e3.start.get()))), m2 = (0, o.G)(() => l2.get() * i2.get()), c2 = (0, o.G)(
      () => Math.max(...s2.map((e3) => e3.start.get() + Math.max(e3.len.get(), 1))) * i2.get() - m2.get()
    ), g2 = t2.filter((e3) => !e3.task.milestone), h2 = g2.reduce((e3, t3) => e3 + t3.len, 0), u2 = h2 ? g2.reduce((e3, t3) => e3 + t3.len * (t3.task.progress ?? 0), 0) / h2 : 0;
    return (0, n.jsx)(d.PY1.div, {
      className: A().summary,
      style: { x: m2, width: c2, y: r2.y },
      "aria-hidden": "true",
      children: (0, n.jsx)("span", {
        className: A().summaryFill,
        style: { width: `${100 * u2}%` }
      })
    });
  }
  function B({
    plan: e2,
    stage: t2,
    scale: a2,
    days: s2,
    reduced: r2,
    hidden: l2,
    first: h2,
    selected: u2,
    tabbable: p2,
    late: f2,
    describedBy: y2,
    scroller: w2,
    onCommit: k2,
    onSelect: _2,
    onFocusBar: v2,
    onStep: b2,
    register: x2,
    label: j2
  }) {
    let { task: N2 } = e2, { start: M2, len: $2 } = t2.task(N2.id, e2.start, e2.len), T2 = t2.row(N2.id), S2 = (0, o.G)(
      () => N2.milestone ? (M2.get() + 0.5) * a2.get() : M2.get() * a2.get()
    ), z2 = (0, o.G)(() => Math.max(1, $2.get() * a2.get())), D2 = (0, o.G)(() => (Math.round(M2.get()) + 0.5 * !!N2.milestone) * a2.get()), O2 = (0, o.G)(() => Math.max(1, Math.round($2.get())) * a2.get()), R2 = (0, o.G)(() => T2.y.get() + 8), [U2, Y2] = (0, i.useState)(null), [G2, E2] = (0, i.useState)({ start: e2.start, len: e2.len }), W2 = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
      if (U2) return;
      if (r2) {
        M2.jump(e2.start), $2.jump(e2.len);
        return;
      }
      let t3 = (0, m.i)(M2, e2.start, C), a3 = (0, m.i)($2, e2.len, C);
      return () => {
        t3.stop(), a3.stop();
      };
    }, [U2, $2, e2.len, e2.start, r2, M2]);
    let F2 = () => {
      if (!W2.current?.moved) return;
      let e3 = {
        start: Math.round(M2.get()),
        len: N2.milestone ? 0 : Math.max(1, Math.round($2.get()))
      };
      E2((t3) => t3.start === e3.start && t3.len === e3.len ? t3 : e3);
    };
    function Q2(e3, t3) {
      0 !== e3.button || W2.current || (e3.stopPropagation(), e3.currentTarget.setPointerCapture(e3.pointerId), W2.current = {
        pointer: e3.pointerId,
        mode: t3,
        x: e3.clientX,
        scroll: w2()?.scrollLeft ?? 0,
        start: M2.get(),
        len: $2.get(),
        moved: false
      });
    }
    function X2(e3) {
      let t3 = W2.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      if (e3.stopPropagation(), W2.current = null, !t3.moved)
        return void _2(u2 ? null : N2.id);
      let a3 = Math.round(M2.get()), n2 = N2.milestone ? 0 : Math.max(1, Math.round($2.get()));
      Y2(null), k2(N2.id, a3, n2, "move" === t3.mode ? "move" : "resize");
    }
    (0, c.L)(M2, "change", F2), (0, c.L)($2, "change", F2);
    let H = {
      onPointerMove: function(e3) {
        let t3 = W2.current, n2 = w2();
        if (!t3 || t3.pointer !== e3.pointerId || !n2) return;
        if (e3.stopPropagation(), !t3.moved) {
          if (3 > Math.abs(e3.clientX - t3.x)) return;
          t3.moved = true, M2.stop(), $2.stop(), Y2(t3.mode), _2(N2.id);
        }
        let i2 = n2.getBoundingClientRect();
        e3.clientX > i2.right - 36 ? n2.scrollLeft += 10 : e3.clientX < i2.left + (n2.clientWidth < 560 ? 132 : 248) + 36 && (n2.scrollLeft -= 10);
        let r3 = (e3.clientX - t3.x + n2.scrollLeft - t3.scroll) / a2.get(), l3 = (e4) => e4 >= 1 ? e4 : 1 - (1 - e4) * 0.18;
        if ("move" === t3.mode)
          M2.set(I(t3.start + r3, 0, s2 - Math.max(1, t3.len)));
        else if ("end" === t3.mode) $2.set(l3(Math.min(t3.len + r3, s2 - t3.start)));
        else {
          let e4 = Math.max(0, t3.start + r3), a3 = l3(t3.start + t3.len - e4);
          M2.set(t3.start + t3.len - a3), $2.set(a3);
        }
      },
      onPointerUp: X2,
      onPointerCancel: X2
    }, q = Math.round((N2.progress ?? 0) * 100), K = (0, n.jsx)(g.N, {
      children: U2 && (0, n.jsx)(
        d.PY1.span,
        {
          className: A().tip,
          "data-below": h2 || void 0,
          initial: r2 ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: h2 ? -4 : 4 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, transition: { duration: P.fast } },
          transition: r2 ? { duration: P.instant } : L.snappy,
          children: j2(G2.start, G2.len, N2.milestone)
        },
        "tip"
      )
    });
    return (0, n.jsxs)(n.Fragment, {
      children: [
        U2 && (0, n.jsx)(d.PY1.span, {
          className: A().snap,
          "data-milestone": N2.milestone || void 0,
          style: { x: D2, width: N2.milestone ? void 0 : O2, y: R2 },
          "aria-hidden": "true"
        }),
        (0, n.jsxs)(d.PY1.div, {
          ref: (e3) => x2(N2.id, e3),
          role: "button",
          tabIndex: p2 && !l2 ? 0 : -1,
          "aria-pressed": u2,
          "aria-roledescription": N2.milestone ? "Milestone" : "Task bar",
          "aria-label": `${N2.name}, ${j2(e2.start, e2.len, N2.milestone)}${N2.milestone ? "" : `, ${q}% done`}${f2 ? ", starts before a task it depends on ends" : ""}`,
          "aria-describedby": y2,
          "aria-hidden": l2 || void 0,
          inert: l2,
          className: N2.milestone ? A().milestone : A().bar,
          "data-selected": u2 || void 0,
          "data-drag": U2 ?? void 0,
          "data-late": f2 || void 0,
          "data-done": 100 === q || void 0,
          style: {
            x: S2,
            width: N2.milestone ? void 0 : z2,
            y: R2,
            opacity: T2.vis
          },
          onPointerDown: (e3) => Q2(e3, "move"),
          ...H,
          onFocus: () => v2(N2.id),
          onKeyDown: function(t3) {
            let a3 = "ArrowRight" === t3.key ? 1 : "ArrowLeft" === t3.key ? -1 : 0;
            if (a3 && t3.altKey) {
              t3.preventDefault(), t3.shiftKey && !N2.milestone ? k2(N2.id, e2.start, I(e2.len + a3, 1, s2 - e2.start), "resize") : k2(
                N2.id,
                I(e2.start + a3, 0, s2 - Math.max(1, e2.len)),
                e2.len,
                "move"
              );
              return;
            }
            if ("ArrowDown" === t3.key || "ArrowUp" === t3.key) {
              t3.preventDefault(), b2(N2.id, "ArrowDown" === t3.key ? 1 : -1);
              return;
            }
            if ("Enter" === t3.key || " " === t3.key) {
              t3.preventDefault(), _2(u2 ? null : N2.id);
              return;
            }
            "Escape" === t3.key && u2 && (t3.preventDefault(), _2(null));
          },
          children: [
            N2.milestone ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("span", { className: A().diamond }),
                (0, n.jsx)("span", {
                  className: A().milestoneLabel,
                  children: N2.name
                })
              ]
            }) : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("span", {
                  className: A().track,
                  children: [
                    (0, n.jsx)("span", {
                      className: A().fill,
                      style: { width: `${q}%` }
                    }),
                    (0, n.jsxs)("span", {
                      className: A().barLabel,
                      children: [
                        (0, n.jsx)("span", {
                          className: A().barName,
                          children: N2.name
                        }),
                        (0, n.jsxs)("span", {
                          className: A().pct,
                          children: [q, "%"]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)("span", {
                  className: A().handle,
                  "data-edge": "start",
                  onPointerDown: (e3) => Q2(e3, "start"),
                  ...H,
                  "aria-hidden": "true"
                }),
                (0, n.jsx)("span", {
                  className: A().handle,
                  "data-edge": "end",
                  onPointerDown: (e3) => Q2(e3, "end"),
                  ...H,
                  "aria-hidden": "true"
                })
              ]
            }),
            K
          ]
        })
      ]
    });
  }
  function Q({
    title: e2 = "App relaunch",
    groups: t2 = x,
    tasks: a2,
    defaultTasks: l2 = j,
    onTasksChange: o2,
    today: c2 = "2026-09-23",
    zoom: p2,
    defaultZoom: f2 = "week",
    onZoomChange: M2,
    collapsed: C2,
    defaultCollapsed: Y2 = N,
    onCollapsedChange: X2,
    className: H
  }) {
    let q, K, Z, J = (0, i.useId)().replace(/[^a-zA-Z0-9-]/g, ""), V = (q = (0, i.useSyncExternalStore)(
      G,
      () => true,
      () => false
    ), !!(0, r.I)() && q), ee = (0, i.useRef)(null), et = (0, i.useRef)(null), ea = (0, i.useRef)(/* @__PURE__ */ new Map()), en = (0, i.useRef)(null), ei = (0, i.useRef)(null), [es, er] = (0, i.useState)(l2), el = a2 ?? es, [eo, ed] = (0, i.useState)(f2), em = p2 ?? eo, [ec, eg] = (0, i.useState)(Y2), eh = C2 ?? ec, [eu, ep] = (0, i.useState)([]), [ef, ey] = (0, i.useState)(null), [ew, ek] = (0, i.useState)(null), [e_, ev] = (0, i.useState)(false), [eb, ex] = (0, i.useState)({
      text: "Drag a bar to move it, or its edges to change dates"
    }), [ej] = (0, i.useState)(() => new E()), [eN] = (0, i.useState)(() => $[p2 ?? f2]), eM = (0, h.d)(eN), eA = e_ ? 132 : 248, [e$] = (0, i.useState)(() => {
      let e3 = l2.map((e4) => z(e4.start)), t3 = l2.map((e4) => z(e4.milestone ? e4.start : e4.end)), a3 = Math.min(...e3, z(c2)) - 6048e5, n2 = Math.max(...t3, z(c2)) + 18144e5, i2 = a3 - (new Date(a3).getUTCDay() + 6) % 7 * 864e5;
      return { origin: i2, days: 7 * Math.ceil((n2 - i2) / 864e5 / 7) };
    }), { origin: eT, days: eL } = e$, eP = Math.round((z(c2) - eT) / 864e5), eS = (e3, t3, a3) => a3 || t3 <= 1 ? O.format(eT + 864e5 * e3) : `${O.format(eT + 864e5 * e3)} \u2013 ${O.format(eT + (e3 + t3 - 1) * 864e5)}, ${t3} days`, eC = (0, i.useMemo)(
      () => el.map((e3) => {
        let t3 = Math.round((z(e3.start) - eT) / 864e5);
        return {
          task: e3,
          start: t3,
          len: e3.milestone ? 0 : Math.round((z(e3.end) - z(e3.start)) / 864e5) + 1
        };
      }),
      [eT, el]
    ), ez = new Map(eC.map((e3) => [e3.task.id, e3])), eD = new Set(
      eC.filter(
        (e3) => e3.task.dependsOn?.some((t3) => {
          let a3 = ez.get(t3);
          return a3 && e3.start < a3.start + a3.len;
        })
      ).map((e3) => e3.task.id)
    ), eO = [], eR = 0;
    t2.forEach((e3) => {
      let t3 = 40 * eR++;
      eO.push({ id: e3.id, y: t3, vis: 1, kind: "group" });
      let a3 = eh.includes(e3.id);
      eC.filter((t4) => t4.task.group === e3.id).forEach((e4) => {
        eO.push({ id: e4.task.id, y: a3 ? t3 : 40 * eR, vis: +!a3, kind: "task" }), !a3 && eR++;
      });
    }), eO.forEach((e3) => ej.row(e3.id, e3.y, e3.vis)), eC.forEach((e3) => ej.task(e3.task.id, e3.start, e3.len));
    let eU = (0, h.d)(40 * eR), eI = eO.map((e3) => `${e3.id}:${e3.y}:${e3.vis}`).join("|"), eY = eC.filter((e3) => !eh.includes(e3.task.group)), eG = t2.flatMap((e3) => eY.filter((t3) => t3.task.group === e3.id));
    function eE(e3, t3) {
      if (ei.current?.stop(), ei.current = null, V) {
        e3.scrollLeft = t3;
        return;
      }
      ei.current = (0, m.i)(e3.scrollLeft, t3, {
        ...L.smooth,
        onUpdate: (t4) => {
          e3.scrollLeft = t4;
        }
      });
    }
    function eW(e3, t3) {
      void 0 === a2 && er(e3), o2?.(e3, t3);
    }
    function eF(e3, t3, a3, n2) {
      let i2 = ez.get(e3);
      if (!i2 || i2.start === t3 && i2.len === a3) return;
      let s2 = i2.task, r2 = {
        ...s2,
        start: D(eT + 864e5 * t3),
        end: D(eT + (s2.milestone ? t3 : t3 + a3 - 1) * 864e5)
      }, l3 = el.map((t4) => t4.id === e3 ? r2 : t4);
      ep((e4) => [...e4.slice(-19), el]), eW(l3, { id: e3, start: r2.start, end: r2.end, kind: n2 });
      let o3 = (r2.dependsOn ?? []).map((e4) => ez.get(e4)).filter((e4) => !!e4 && t3 < e4.start + e4.len), d2 = eC.filter((n3) => n3.task.dependsOn?.includes(e3) && n3.start < t3 + a3), m2 = eS(t3, a3, s2.milestone);
      o3.length ? ex({
        text: `${s2.name} now starts before ${o3[0].task.name} ends`,
        tone: "danger"
      }) : d2.length ? ex({
        text: `${d2[0].task.name} now starts before ${s2.name} ends`,
        tone: "danger"
      }) : ex({ text: `${s2.name}: ${m2}` });
    }
    function eB(e3) {
      let t3 = ea.current.get(e3), a3 = ee.current, n2 = ez.get(e3);
      if (!t3 || !a3 || !n2) return;
      t3.focus({ preventScroll: true });
      let i2 = eM.get(), s2 = a3.clientWidth - eA, r2 = n2.start * i2, l3 = (n2.start + Math.max(1, n2.len)) * i2, o3 = a3.scrollLeft;
      r2 < a3.scrollLeft + 16 ? o3 = r2 - 16 : l3 > a3.scrollLeft + s2 - 16 && (o3 = Math.min(r2 - 16, l3 - s2 + 16));
      let d2 = ej.row(e3).y.get(), m2 = a3.scrollTop, c3 = a3.clientHeight - 56;
      d2 < m2 ? a3.scrollTop = d2 : d2 + 40 > m2 + c3 && (a3.scrollTop = d2 + 40 - c3), o3 !== a3.scrollLeft && eE(a3, o3);
    }
    function eQ(e3, t3) {
      let a3 = eG.findIndex((t4) => t4.task.id === e3), n2 = eG[I(a3 + t3, 0, eG.length - 1)];
      n2 && n2.task.id !== e3 && (ek(n2.task.id), eB(n2.task.id));
    }
    (0, i.useEffect)(() => {
      let e3 = eI.split("|").flatMap((e4) => {
        let [t4, a3, n2] = e4.split(":"), i2 = ej.row(t4);
        return V ? (i2.y.jump(Number(a3)), i2.vis.jump(Number(n2)), []) : [
          (0, m.i)(i2.y, Number(a3), L.smooth),
          (0, m.i)(i2.vis, Number(n2), {
            duration: Number(n2) ? P.standard : P.fast,
            ease: [...S.standard]
          })
        ];
      }), t3 = eI.split("|").filter((e4) => e4.endsWith(":1")).length;
      return V ? eU.jump(40 * t3) : e3.push((0, m.i)(eU, 40 * t3, L.smooth)), () => e3.forEach((e4) => e4.stop());
    }, [eU, V, eI, ej]), (0, i.useEffect)(() => {
      let e3 = (e4) => {
        et.current?.style.setProperty("--gantt-scale", String(e4));
        let t3 = ee.current, a3 = en.current;
        t3 && a3 && (t3.scrollLeft = a3.day * e4 - a3.view / 2);
      };
      return e3(eM.get()), eM.on("change", e3);
    }, [eM]), (0, i.useLayoutEffect)(() => {
      let e3 = ee.current;
      if (!e3) return;
      let t3 = () => ev(e3.clientWidth < 560);
      t3();
      let a3 = new ResizeObserver(t3);
      a3.observe(e3);
      let n2 = e3.clientWidth - (e3.clientWidth < 560 ? 132 : 248);
      return e3.scrollLeft = (eP + 0.5) * eM.get() - 0.3 * n2, () => a3.disconnect();
    }, [eM, eP]);
    let eX = (0, i.useMemo)(
      () => Array.from({ length: eL }, (e3, t3) => {
        let a3 = new Date(eT + 864e5 * t3);
        return {
          day: t3,
          date: a3.getUTCDate(),
          weekday: a3.getUTCDay(),
          month: a3.getUTCMonth(),
          time: a3.getTime()
        };
      }),
      [eL, eT]
    ), eH = eX.filter((e3) => 1 === e3.date || 0 === e3.day), eq = "month" === em ? eH.filter((e3) => 0 === e3.day || e3.month % 3 == 0).map((e3) => ({
      day: e3.day,
      text: `Q${Math.floor(e3.month / 3) + 1} ${new Date(e3.time).getUTCFullYear()}`
    })) : eH.map((e3) => ({ day: e3.day, text: R.format(e3.time) })), eK = "day" === em ? eX.map((e3) => ({
      day: e3.day,
      text: String(e3.date),
      soft: 0 === e3.weekday || 6 === e3.weekday
    })) : "week" === em ? eX.filter((e3) => 1 === e3.weekday).map((e3) => ({ day: e3.day, text: String(e3.date), soft: false })) : eH.filter((e3) => 1 === e3.date).map((e3) => ({ day: e3.day, text: U.format(e3.time), soft: false })), eZ = "day" === em ? eX.map((e3) => ({ day: e3.day, strong: 1 === e3.weekday })) : "week" === em ? eX.filter((e3) => 1 === e3.weekday).map((e3) => ({ day: e3.day, strong: e3.date <= 7 })) : eX.filter((e3) => 1 === e3.weekday || 1 === e3.date).map((e3) => ({ day: e3.day, strong: 1 === e3.date })), eJ = "month" === em ? [] : eX.filter((e3) => 6 === e3.weekday).map((e3) => e3.day), eV = { duration: V ? P.instant : P.standard, ease: [...S.standard] }, e0 = (Z = (K = eC.filter((e3) => !e3.task.milestone)).reduce(
      (e3, t3) => e3 + t3.len,
      0
    )) ? Math.round(
      K.reduce((e3, t3) => e3 + t3.len * (t3.task.progress ?? 0), 0) / Z * 100
    ) : 0, e1 = ew && eY.some((e3) => e3.task.id === ew) ? ew : eG[0]?.task.id, e22 = eC.flatMap(
      (e3) => (e3.task.dependsOn ?? []).map((e4) => ez.get(e4)).filter((e4) => !!e4).map((t3) => ({ from: t3, to: e3 }))
    ), e6 = {
      "--gantt-left": `${eA}px`,
      "--gantt-days": eL,
      "--gantt-scale": eN,
      "--gantt-row": "40px",
      "--gantt-bar": "24px",
      "--gantt-header": "56px"
    }, e5 = V ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${b.T.blur.subtle}px)` };
    return (0, n.jsxs)("section", {
      className: ((...e3) => e3.filter(Boolean).join(" "))(A().root, H),
      "aria-label": e2,
      children: [
        (0, n.jsxs)("header", {
          className: A().toolbar,
          children: [
            (0, n.jsxs)("div", {
              className: A().heading,
              children: [
                (0, n.jsx)("h3", { className: A().title, children: e2 }),
                (0, n.jsxs)("p", {
                  className: A().meta,
                  children: [
                    (0, n.jsxs)("span", {
                      className: A().num,
                      children: [e0, "%"]
                    }),
                    " done"
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: A().controls,
              children: [
                (0, n.jsx)(u.o, {
                  id: `${J}-zoom`,
                  children: (0, n.jsx)("div", {
                    className: A().segmented,
                    role: "group",
                    "aria-label": "Zoom",
                    children: T.map(
                      (e3) => (0, n.jsxs)(
                        "button",
                        {
                          type: "button",
                          className: A().segment,
                          "aria-pressed": em === e3.id,
                          onClick: () => (function(e4) {
                            if (e4 === em) return;
                            void 0 === p2 && ed(e4), M2?.(e4);
                            let t3 = ee.current;
                            if (t3) {
                              let e7 = t3.clientWidth - eA;
                              en.current = {
                                day: (t3.scrollLeft + e7 / 2) / eM.get(),
                                view: e7
                              };
                            }
                            let a3 = () => {
                              en.current = null;
                            };
                            V ? (eM.jump($[e4]), a3()) : (0, m.i)(eM, $[e4], {
                              ...L.smooth,
                              onComplete: a3
                            });
                          })(e3.id),
                          children: [
                            em === e3.id && (0, n.jsx)(d.PY1.span, {
                              layoutId: "zoom",
                              className: A().segmentThumb,
                              transition: V ? { duration: 0 } : L.morph
                            }),
                            (0, n.jsx)("span", {
                              className: A().segmentLabel,
                              children: e3.label
                            })
                          ]
                        },
                        e3.id
                      )
                    )
                  })
                }),
                (0, n.jsxs)("button", {
                  type: "button",
                  className: A().ghost,
                  onClick: function() {
                    let e3 = ee.current;
                    if (!e3) return;
                    en.current = null;
                    let t3 = I(
                      (eP + 0.5) * eM.get() - (e3.clientWidth - eA) * 0.3,
                      0,
                      e3.scrollWidth - e3.clientWidth
                    );
                    eE(e3, t3), ex({ text: `Today is ${O.format(eT + 864e5 * eP)}` });
                  },
                  children: [
                    (0, n.jsx)(y, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Today"
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: ee,
          className: A().scroller,
          onWheel: () => {
            en.current = null, ei.current?.stop();
          },
          onPointerDown: () => {
            en.current = null, ei.current?.stop();
          },
          children: (0, n.jsxs)("div", {
            ref: et,
            className: A().canvas,
            style: e6,
            children: [
              (0, n.jsxs)("div", {
                className: A().headRow,
                children: [
                  (0, n.jsx)("div", {
                    className: A().corner,
                    children: "Tasks"
                  }),
                  (0, n.jsxs)("div", {
                    className: A().scale,
                    "aria-hidden": "true",
                    children: [
                      (0, n.jsx)(g.N, {
                        initial: false,
                        children: (0, n.jsxs)(
                          d.PY1.div,
                          {
                            className: A().tiers,
                            "data-zoom": em,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: eV,
                            children: [
                              eq.map(
                                (e3) => (0, n.jsx)(
                                  "span",
                                  {
                                    className: A().coarse,
                                    style: { "--d": e3.day },
                                    children: e3.text
                                  },
                                  `t${e3.day}`
                                )
                              ),
                              eK.map(
                                (e3) => (0, n.jsx)(
                                  "span",
                                  {
                                    className: A().fine,
                                    "data-soft": e3.soft || void 0,
                                    style: { "--d": e3.day },
                                    children: e3.text
                                  },
                                  `f${e3.day}`
                                )
                              )
                            ]
                          },
                          em
                        )
                      }),
                      (0, n.jsx)("span", {
                        className: A().todayTag,
                        style: { "--d": eP },
                        children: "Today"
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsxs)(d.PY1.div, {
                className: A().body,
                style: { height: eU },
                children: [
                  (0, n.jsxs)("div", {
                    className: A().names,
                    children: [
                      t2.map((e3) => {
                        let t3 = eh.includes(e3.id), a3 = eC.filter((t4) => t4.task.group === e3.id);
                        return (0, n.jsx)(
                          d.PY1.div,
                          {
                            className: A().groupRow,
                            style: { y: ej.row(e3.id).y },
                            children: (0, n.jsxs)("button", {
                              type: "button",
                              className: A().groupToggle,
                              "aria-expanded": !t3,
                              onClick: () => {
                                var n2;
                                n2 = t3 ? eh.filter((t4) => t4 !== e3.id) : [...eh, e3.id], void 0 === C2 && eg(n2), X2?.(n2), !t3 && a3.some((e4) => e4.task.id === ef) && ey(null);
                              },
                              children: [
                                (0, n.jsx)(d.PY1.span, {
                                  className: A().chevron,
                                  initial: false,
                                  animate: { rotate: 90 * !t3 },
                                  transition: V ? { duration: 0 } : L.snappy,
                                  children: (0, n.jsx)(w.A, {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                }),
                                (0, n.jsx)("span", {
                                  className: A().groupName,
                                  children: e3.name
                                }),
                                (0, n.jsx)("span", {
                                  className: A().groupCount,
                                  children: a3.length
                                })
                              ]
                            })
                          },
                          e3.id
                        );
                      }),
                      eC.map((e3) => {
                        let t3 = ej.row(e3.task.id), a3 = eh.includes(e3.task.group), i2 = e3.task.assignee ? (0, v.MV)(e3.task.assignee) : null;
                        return (0, n.jsxs)(
                          d.PY1.div,
                          {
                            className: A().taskRow,
                            "data-selected": ef === e3.task.id || void 0,
                            style: { y: t3.y, opacity: t3.vis },
                            "aria-hidden": a3 || void 0,
                            inert: a3,
                            onClick: () => {
                              a3 || (ey(
                                (t4) => t4 === e3.task.id ? null : e3.task.id
                              ), ek(e3.task.id), eB(e3.task.id));
                            },
                            children: [
                              i2 ? (0, n.jsx)(s.default, {
                                className: A().avatar,
                                src: (0, v.my)(e3.task.assignee),
                                alt: i2.name,
                                title: i2.name,
                                width: 22,
                                height: 22
                              }) : (0, n.jsx)("span", {
                                className: A().markSlot,
                                "aria-hidden": "true",
                                children: (0, n.jsx)("span", {
                                  className: A().mark
                                })
                              }),
                              (0, n.jsx)("span", {
                                className: A().taskName,
                                children: e3.task.name
                              })
                            ]
                          },
                          e3.task.id
                        );
                      })
                    ]
                  }),
                  (0, n.jsxs)("div", {
                    className: A().chart,
                    children: [
                      (0, n.jsx)(g.N, {
                        initial: false,
                        children: (0, n.jsxs)(
                          d.PY1.div,
                          {
                            className: A().grid,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: eV,
                            "aria-hidden": "true",
                            children: [
                              eJ.map(
                                (e3) => (0, n.jsx)(
                                  "span",
                                  {
                                    className: A().weekend,
                                    style: { "--d": e3 }
                                  },
                                  `w${e3}`
                                )
                              ),
                              eZ.map(
                                (e3) => (0, n.jsx)(
                                  "span",
                                  {
                                    className: A().line,
                                    "data-strong": e3.strong || void 0,
                                    style: { "--d": e3.day }
                                  },
                                  `l${e3.day}`
                                )
                              )
                            ]
                          },
                          em
                        )
                      }),
                      t2.map((e3) => {
                        let t3 = eC.filter((t4) => t4.task.group === e3.id);
                        return t3.length ? (0, n.jsx)(
                          F,
                          { group: e3, plans: t3, stage: ej, scale: eM },
                          e3.id
                        ) : null;
                      }),
                      (0, n.jsx)("svg", {
                        className: A().arrows,
                        "aria-hidden": "true",
                        children: e22.map(
                          ({ from: e3, to: t3 }) => (0, n.jsx)(
                            W,
                            {
                              from: e3,
                              to: t3,
                              stage: ej,
                              scale: eM,
                              state: ef ? ef === e3.task.id || ef === t3.task.id ? "active" : "dim" : void 0
                            },
                            `${e3.task.id}>${t3.task.id}`
                          )
                        )
                      }),
                      (0, n.jsx)("span", {
                        className: A().today,
                        style: { "--d": eP },
                        "aria-hidden": "true"
                      }),
                      eC.map(
                        (e3, t3) => (0, n.jsx)(
                          B,
                          {
                            plan: e3,
                            stage: ej,
                            scale: eM,
                            days: eL,
                            reduced: V,
                            hidden: eh.includes(e3.task.group),
                            first: eG[0]?.task.id === e3.task.id || 0 === t3,
                            selected: ef === e3.task.id,
                            tabbable: e1 === e3.task.id,
                            late: eD.has(e3.task.id),
                            describedBy: `${J}-keys`,
                            scroller: () => ee.current,
                            onCommit: eF,
                            label: eS,
                            onSelect: (e4) => ey(e4),
                            onFocusBar: (e4) => ek(e4),
                            onStep: eQ,
                            register: (e4, t4) => {
                              t4 ? ea.current.set(e4, t4) : ea.current.delete(e4);
                            }
                          },
                          e3.task.id
                        )
                      )
                    ]
                  })
                ]
              })
            ]
          })
        }),
        (0, n.jsxs)("footer", {
          className: A().footer,
          children: [
            (0, n.jsx)("p", {
              className: A().status,
              role: "status",
              "aria-live": "polite",
              children: (0, n.jsx)(g.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  d.PY1.span,
                  {
                    className: A().statusText,
                    "data-tone": eb.tone,
                    initial: e5,
                    animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
                    exit: { ...e5, transition: { duration: P.instant } },
                    transition: V ? { duration: P.instant } : { duration: P.standard, ease: [...S.enter] },
                    children: eb.text
                  },
                  eb.text
                )
              })
            }),
            (0, n.jsxs)("div", {
              className: A().footerActions,
              children: [
                (0, n.jsxs)("button", {
                  type: "button",
                  className: A().ghost,
                  onClick: function() {
                    let e3 = eu.at(-1);
                    if (!e3) return;
                    ep((e4) => e4.slice(0, -1));
                    let t3 = e3.find((e4) => {
                      let t4 = el.find((t5) => t5.id === e4.id);
                      return t4 && (t4.start !== e4.start || t4.end !== e4.end);
                    });
                    eW(e3, {
                      id: t3?.id ?? "",
                      start: t3?.start ?? "",
                      end: t3?.end ?? "",
                      kind: "undo"
                    }), ex({
                      text: t3 ? `Undid the change to ${t3.name}` : "Undone"
                    });
                  },
                  disabled: !eu.length,
                  children: [
                    (0, n.jsx)(k.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Undo"
                  ]
                }),
                (0, n.jsxs)("button", {
                  type: "button",
                  className: A().ghost,
                  onClick: function() {
                    ep([]), eW(l2, { id: "", start: "", end: "", kind: "reset" }), ey(null), ex({ text: "Plan reset" });
                  },
                  disabled: el === l2,
                  children: [
                    (0, n.jsx)(_.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Reset"
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("p", {
          id: `${J}-keys`,
          className: A().srOnly,
          children: "Alt and the left or right arrow moves the task by a day. Add Shift to change its end date. Up and down arrows move between tasks."
        })
      ]
    });
  }
  let X = Q;
}

__m(__module,__exports,__require);
});
A.cssFor("gantt-timeline", [40898]);
A.item("gantt-timeline", {entry:66640, export:"GanttTimeline", kind:"block", tier:"pro", unresolved:[]});
})();