/* time-dial (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(6030, ".root{container-type:inline-size;width:100%;max-width:720px;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.layout{display:grid;justify-items:center;gap:var(--space-5)}\n@container (min-width: 600px){.layout{grid-template-columns:auto minmax(0,1fr);align-items:center;justify-items:stretch;column-gap:var(--space-10)}\n.stage{position:relative;width:min(100%,256px);aspect-ratio:1;container-type:inline-size;border-radius:50%;outline:none;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;-webkit-tap-highlight-color:transparent}\n.stage[data-dragging]{cursor:grabbing}\n.stage[data-dragging] .arm[data-home] .bead{box-shadow:var(--shadow-floating)}\n.stage{width:288px}\n.svg{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:visible;pointer-events:none}\n.plate{fill:var(--surface-raised)}\n.work{fill:color-mix(in oklab,var(--success) 9%,transparent);stroke:color-mix(in oklab,var(--success) 22%,transparent);stroke-width:1;vector-effect:non-scaling-stroke}\n.rim{fill:none;stroke:var(--border);stroke-width:1;vector-effect:non-scaling-stroke}\n.core{fill:var(--surface-raised);stroke:var(--border-subtle);stroke-width:1;vector-effect:non-scaling-stroke}\n.homeTrack{fill:none;stroke:var(--border);stroke-width:1;vector-effect:non-scaling-stroke}\n.track{fill:none;stroke:var(--border-strong);stroke-width:1;stroke-dasharray:1 5;stroke-linecap:round;vector-effect:non-scaling-stroke;opacity:.7}\n.major{stroke:var(--text-secondary);stroke-width:1.4;stroke-linecap:round}\n.hour{stroke:var(--border-strong);stroke-width:1;stroke-linecap:round}\n.numeral{fill:var(--text-muted);font-family:var(--font-body);font-size:9.5px;font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:0}\n.sweep{fill:none;stroke:color-mix(in oklab,var(--foreground) 12%,transparent);stroke-width:9;stroke-linecap:round}\n.orbits{pointer-events:none}\n.arm,.orbits{position:absolute;inset:0}\n.arm[data-home]{z-index:1}\n.arm[data-home] .bead{background:var(--foreground);box-shadow:var(--shadow-raised)}\n.anchor{position:absolute;top:50%;left:50%;width:0;height:0}\n.hand{position:absolute;top:calc(50% - 30cqi);left:50%;width:1.5px;height:11.4cqi;border-radius:var(--radius-pill);background:var(--foreground);translate:-50% 0}\n.bead{position:absolute;top:0;left:0;display:grid;width:10.5cqi;height:10.5cqi;box-sizing:border-box;place-items:center;translate:-50% -50%;border-radius:50%;background:var(--surface-raised);box-shadow:inset 0 0 0 1.6cqi var(--text-muted);color:var(--background);transition:background-color var(--duration-standard) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n.bead[data-working]{background:var(--success);box-shadow:inset 0 0 0 0 transparent}\n@media (prefers-reduced-motion:reduce){.bead,.rowIcon,.row{transition:none}\n.glyph{display:grid;width:100%;height:100%;place-items:center}\n.glyph svg{width:5cqi;height:5cqi;stroke-width:2}\n.code{position:absolute;top:0;left:0;translate:-50% -50%;color:var(--text-secondary);font-size:3.4cqi;font-weight:500;line-height:1;white-space:nowrap}\n.readout{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:.4cqi;pointer-events:none}\n.readoutCity{color:var(--text-secondary);font-size:4.2cqi;font-weight:500;line-height:1.25}\n.readoutTime{font-family:var(--font-display);font-size:10.5cqi;font-weight:500;letter-spacing:var(--tracking-display)}\n.readoutNote{color:var(--text-muted);font-size:3.8cqi;line-height:1.25;font-variant-numeric:tabular-nums}\n.clock{display:inline-flex;align-items:baseline;font-variant-numeric:tabular-nums;line-height:1;white-space:nowrap}\n.clock[data-cycle=\"12\"] .wheel:first-child .face{text-align:right}\n.colon{display:inline-block;padding-inline:.03em;translate:0 -.05em}\n.wheel{--feather:.22em;position:relative;display:inline-block;overflow:hidden;vertical-align:bottom;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 var(--feather),#000 calc(100% - var(--feather)),transparent);mask-image:linear-gradient(to bottom,transparent,#000 var(--feather),#000 calc(100% - var(--feather)),transparent)}\n.sizer{display:block;height:1.3em;line-height:1.3em;visibility:hidden}\n.strip{position:absolute;top:0;right:0;left:0;display:flex;flex-direction:column}\n.face{display:block;height:1.3em;line-height:1.3em;text-align:center}\n.meridiem{margin-left:.28em;color:var(--text-secondary);font-family:var(--font-body);font-size:.42em;font-weight:500;letter-spacing:0}\n.rowTime .meridiem{font-size:.62em}\n.rowTime{min-width:5.6em;justify-content:flex-end;font-size:var(--text-lg);font-weight:500}\n.rowTime{grid-column:3;grid-row:1/span 2;font-size:var(--text-base)}\n.swap{position:relative;display:inline-flex;justify-content:inherit}\n.swapItem{display:inline-block;white-space:nowrap}\n.rowMeta .swapItem{white-space:normal}\n.iconSwap{position:relative}\n.iconItem,.iconSwap{display:grid;place-items:center}\n.list{display:grid;width:100%;max-width:420px;gap:2px;margin:0;padding:0;list-style:none}\n.item{display:block}\n.row{position:relative;isolation:isolate;display:grid;width:100%;min-height:52px;align-items:center;grid-template-columns:20px minmax(0,1fr) auto auto;column-gap:var(--space-3);padding:6px var(--space-3) 6px var(--space-4);border:0;border-radius:var(--radius-control);background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.row:not([aria-pressed=true]):hover{background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}\n.row:active{transform:scale(.985);transition:transform var(--duration-instant) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.row{min-height:56px}\n@container (max-width: 360px){.row{grid-template-columns:16px minmax(0,1fr) auto;column-gap:var(--space-2);padding-inline:var(--space-3) var(--space-2)}\n.highlight{position:absolute;z-index:-1;inset:0;border:1px solid var(--border);border-radius:inherit;background:var(--surface-muted)}\n.rowIcon{display:grid;place-items:center;color:var(--text-muted);transition:color var(--duration-standard) var(--ease-standard)}\n.rowIcon[data-day]{color:var(--text-secondary)}\n.rowIcon[data-working]{color:var(--success)}\n.rowIcon svg{width:16px;height:16px;stroke-width:1.75}\n.rowIcon{grid-row:1/span 2}\n.rowText{display:grid;min-width:0}\n.rowText{grid-column:2;grid-row:1}\n.rowCity{overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:1.3;text-overflow:ellipsis;white-space:nowrap}\n.rowMeta{color:var(--text-muted);font-size:var(--text-xs);line-height:1.35}\n@container (max-width: 440px){.rowMeta{display:flex}\n.chipSlot{position:relative;display:flex;justify-content:flex-end}\n.chipSlot{grid-column:2;grid-row:2;justify-content:flex-start}\n.chipSlot:empty{display:none}\n.chip{display:inline-flex;height:20px;align-items:center;padding:0 var(--space-2);border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 7%,transparent);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;line-height:1;white-space:nowrap}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","layout":"layout","stage":"stage","arm":"arm","bead":"bead","svg":"svg","plate":"plate","work":"work","rim":"rim","core":"core","homeTrack":"homeTrack","track":"track","major":"major","hour":"hour","numeral":"numeral","sweep":"sweep","orbits":"orbits","anchor":"anchor","hand":"hand","rowIcon":"rowIcon","row":"row","glyph":"glyph","code":"code","readout":"readout","readoutCity":"readoutCity","readoutTime":"readoutTime","readoutNote":"readoutNote","clock":"clock","wheel":"wheel","face":"face","colon":"colon","sizer":"sizer","strip":"strip","meridiem":"meridiem","rowTime":"rowTime","swap":"swap","swapItem":"swapItem","rowMeta":"rowMeta","iconSwap":"iconSwap","iconItem":"iconItem","list":"list","item":"item","highlight":"highlight","rowText":"rowText","rowCity":"rowCity","chipSlot":"chipSlot","chip":"chip","srOnly":"srOnly"});
A.reg(47603, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => o });
  var i = a(51811);
  let n = {
    name: "sun",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
      ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
      ["path", { d: "M2 12h2", key: "1t8f8n" }],
      ["path", { d: "M20 12h2", key: "1q8mjw" }],
      ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
      ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
    ]
  };
  n.node;
  let o = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(54882, ".demo{display:grid;justify-items:center;gap:var(--space-4);width:min(100%,720px);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.bar{display:flex;flex-wrap:wrap;width:100%;align-items:center;justify-content:space-between;gap:var(--space-3);padding-top:var(--space-3);border-top:1px solid var(--border-subtle)}\n.status{position:relative;margin:0;color:var(--text-secondary);font-size:var(--text-sm);font-variant-numeric:tabular-nums}\n.statusText{display:inline-block;white-space:nowrap}\n.actions{display:flex;gap:var(--space-2)}\n.action{display:inline-flex;min-height:var(--control-height-sm);align-items:center;gap:8px;padding:0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.action svg{width:16px;height:16px;stroke-width:1.75;flex:none}\n@media (hover:hover) and (pointer:fine){.action:hover:not(:disabled){background:var(--surface-muted)}\n.action:active:not(:disabled){transform:scale(.97)}\n.action:disabled{cursor:default;opacity:.45}\n.action{transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.action{transition:none}\n.note{margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);text-align:center}", {"demo":"demo","bar":"bar","status":"status","statusText":"statusText","actions":"actions","action":"action","note":"note"});
A.reg(76976, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { TimeDialDemo: () => eb });
  var i = a(95155), s = a(12115), r = a(18310), n = a(80642), o = a(25354), l = a(86272), d = a(92298), c = a(55809), m = a(28245), u = a(7890), h = a(92171), f = a(47603), p = a(78890), _ = a(7770), x = a(6030), y = a.n(x);
  let { spring: j, duration: g, ease: N, blur: w } = _.T, $ = [...N.enter], b = [...N.standard], M = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], v = (e2, t2) => (e2 % t2 + t2) % t2, k = (e2) => String(e2).padStart(2, "0"), P = (e2) => 15 * Math.round(e2 / 15), I = Array.from({ length: 24 }, (e2, t2) => k(t2)), S = Array.from({ length: 24 }, (e2, t2) => String(t2 % 12 || 12)), T = [540, 1080], C = ["00", "15", "30", "45"], Y = ({ visualDuration: e2, bounce: t2 }) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, A = Y({ visualDuration: 0.3, bounce: 0 }), F = Y({ visualDuration: 0.56, bounce: 0 }), D = Y({ visualDuration: 0.4, bounce: 0 }), L = Y(j.morph), O = Y({ visualDuration: 0.62, bounce: 0 }), X = {
    type: "spring",
    stiffness: 46.69444444444444,
    damping: 11.206666666666665,
    mass: 1
  }, R = (e2) => e2 - 10.799999999999999 / (2 * Math.PI) * Math.sin(2 * Math.PI * e2 / 15), G = (e2) => 1 - 0.72 * Math.cos(2 * Math.PI * e2 / 15), H = (e2) => 90 * e2 * 0.55 / (90 + 0.55 * e2), B = (e2, t2) => {
    let a2 = e2 * Math.PI / 180;
    return [150 + t2 * Math.sin(a2), 150 - t2 * Math.cos(a2)];
  }, E = (e2) => {
    let t2 = v(e2, 1440);
    return t2 >= 360 && t2 < 1080;
  }, Z = (e2, [t2, a2]) => {
    let i2 = v(e2, 1440);
    return i2 >= t2 && i2 < a2;
  }, U = (e2) => Math.floor(e2 / 1440), W = (e2, t2 = 24) => {
    let a2 = v(Math.round(e2), 1440), i2 = Math.floor(a2 / 60);
    return 12 === t2 ? `${i2 % 12 || 12}:${k(a2 % 60)} ${i2 < 12 ? "AM" : "PM"}` : `${k(i2)}:${k(a2 % 60)}`;
  }, z = (e2) => [
    Math.floor(e2 / 60) && `${Math.floor(e2 / 60)} h`,
    e2 % 60 && `${e2 % 60} min`
  ].filter(Boolean).join(" "), J = (e2) => `UTC${e2 < 0 ? "\u2212" : "+"}${Math.floor(Math.abs(e2) / 60)}${Math.abs(e2) % 60 ? `:${k(Math.abs(e2) % 60)}` : ""}`, V = (e2) => 0 === e2 ? "Same time" : `${z(Math.abs(e2))} ${e2 > 0 ? "ahead" : "behind"}`, Q = (e2) => 1 === Math.abs(e2) ? e2 > 0 ? "next day" : "previous day" : `${Math.abs(e2)} days ${e2 > 0 ? "later" : "earlier"}`, q = (e2, t2, a2) => t2.map((t3) => {
    let i2 = P(e2 + t3.offset);
    return `${E(i2) ? "d" : "n"}${Z(i2, a2) ? "w" : ""}${U(i2)}`;
  }).join(" "), K = () => () => {
  }, ee = {
    hidden: { opacity: 0, y: "0.4em", filter: `blur(${w.soft}px)` },
    shown: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: {
        y: j.snappy,
        opacity: { duration: g.standard, ease: $ },
        filter: { duration: g.standard, ease: $ }
      }
    },
    gone: {
      opacity: 0,
      y: "-0.4em",
      filter: `blur(${w.subtle}px)`,
      transition: { duration: g.instant, ease: b }
    }
  }, et = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: g.fast } },
    gone: { opacity: 0, transition: { duration: g.instant } }
  }, ea = {
    hidden: {
      opacity: 0,
      rotate: -90,
      scale: 0.4,
      filter: `blur(${w.soft}px)`
    },
    shown: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        rotate: j.morph,
        scale: j.snappy,
        opacity: { duration: g.standard, ease: $ },
        filter: { duration: g.standard, ease: $ }
      }
    },
    gone: {
      opacity: 0,
      rotate: 90,
      scale: 0.4,
      filter: `blur(${w.subtle}px)`,
      transition: { duration: g.exit, ease: b }
    }
  }, ei = {
    hidden: { opacity: 0, scale: 0.5, x: 10, filter: `blur(${w.soft}px)` },
    shown: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        scale: j.morph,
        x: j.snappy,
        opacity: { duration: g.fast, ease: $ },
        filter: { duration: g.standard, ease: $ }
      }
    },
    gone: {
      opacity: 0,
      scale: 0.6,
      filter: `blur(${w.subtle}px)`,
      transition: { duration: g.instant, ease: b }
    }
  };
  function es({ text: e2, reduced: t2, className: a2 }) {
    return (0, i.jsx)("span", {
      className: [y().swap, a2].filter(Boolean).join(" "),
      children: (0, i.jsx)(n.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          o.PY1.span,
          {
            className: y().swapItem,
            variants: t2 ? et : ee,
            initial: "hidden",
            animate: "shown",
            exit: "gone",
            children: e2
          },
          e2
        )
      })
    });
  }
  function er({ daytime: e2, reduced: t2 }) {
    return (0, i.jsx)("span", {
      className: y().iconSwap,
      children: (0, i.jsx)(n.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          o.PY1.span,
          {
            className: y().iconItem,
            variants: t2 ? et : ea,
            initial: "hidden",
            animate: "shown",
            exit: "gone",
            children: e2 ? (0, i.jsx)(f.A, { "aria-hidden": "true" }) : (0, i.jsx)(p.A, { "aria-hidden": "true" })
          },
          e2 ? "day" : "night"
        )
      })
    });
  }
  function en({ position: e2, faces: t2 }) {
    let a2 = (0, c.G)(e2, (e3) => `${-(1.3 * v(e3, t2.length))}em`);
    return (0, i.jsxs)("span", {
      className: y().wheel,
      children: [
        (0, i.jsx)("span", {
          className: y().sizer,
          children: t2.reduce((e3, t3) => t3.length > e3.length ? t3 : e3, t2[0])
        }),
        (0, i.jsx)(o.PY1.span, {
          className: y().strip,
          style: { y: a2 },
          children: [...t2, t2[0]].map(
            (e3, t3) => (0, i.jsx)("span", { className: y().face, children: e3 }, t3)
          )
        })
      ]
    });
  }
  function eo({
    turn: e2,
    offset: t2,
    lag: a2,
    cycle: r2,
    reduced: n2,
    className: o2
  }) {
    let l2 = (0, m.d)(0), d2 = (0, c.G)([e2, a2 ?? l2], ([e3, a3]) => {
      let i2 = v(e3 + t2, 1440), s2 = Math.floor(i2 / 60);
      return s2 + Math.min(1, Math.max(0, (i2 - 60 * s2 - 45) / 15)) + a3 / 60;
    }), h2 = (0, c.G)(e2, (e3) => v(e3 + t2, 1440) / 15), [f2, p2] = (0, s.useState)(
      () => 720 > v(e2.get() + t2, 1440) ? "AM" : "PM"
    );
    return (0, u.L)(e2, "change", (e3) => {
      let a3 = 720 > v(P(e3) + t2, 1440) ? "AM" : "PM";
      a3 !== f2 && p2(a3);
    }), (0, i.jsxs)("span", {
      className: [y().clock, o2].filter(Boolean).join(" "),
      "data-cycle": r2,
      "aria-hidden": "true",
      children: [
        (0, i.jsx)(en, { position: d2, faces: 12 === r2 ? S : I }),
        (0, i.jsx)("span", { className: y().colon, children: ":" }),
        (0, i.jsx)(en, { position: h2, faces: C }),
        12 === r2 && (0, i.jsx)(es, { className: y().meridiem, text: f2, reduced: n2 })
      ]
    });
  }
  let el = Array.from({ length: 24 }, (e2, t2) => ({
    hour: t2,
    major: t2 % 6 == 0
  })), ed = [0, 6, 12, 18].map((e2) => {
    let t2 = e2 % 12 == 6, [a2, i2] = B((60 * e2 - 720) / 4, t2 ? 130 : 127);
    return {
      hour: e2,
      x: a2.toFixed(2),
      y: i2.toFixed(2),
      anchor: t2 ? 6 === e2 ? "start" : "end" : "middle"
    };
  });
  function ec({ tracks: e2, cycle: t2, work: a2 }) {
    return (0, i.jsxs)("svg", {
      className: y().svg,
      viewBox: "0 0 300 300",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        (0, i.jsx)("circle", {
          className: y().plate,
          cx: 150,
          cy: 150,
          r: 146
        }),
        (0, i.jsx)("path", {
          className: y().work,
          d: (function(e3, t3) {
            let a3 = (e3 - 720) / 4, i2 = (t3 - 720) / 4, s2 = +(v(t3 - e3, 1440) > 720), [r2, n2] = B(a3, 130), [o2, l2] = B(i2, 130), [d2, c2] = B(i2, 60), [m2, u2] = B(a3, 60);
            return `M${r2.toFixed(2)} ${n2.toFixed(2)}A${130} ${130} 0 ${s2} 1 ${o2.toFixed(2)} ${l2.toFixed(2)}L${d2.toFixed(2)} ${c2.toFixed(2)}A${60} ${60} 0 ${s2} 0 ${m2.toFixed(2)} ${u2.toFixed(2)}Z`;
          })(a2[0], a2[1])
        }),
        (0, i.jsx)("circle", { className: y().rim, cx: 150, cy: 150, r: 146 }),
        (0, i.jsx)("circle", {
          className: y().homeTrack,
          cx: 150,
          cy: 150,
          r: 106
        }),
        e2.map(
          (e3) => (0, i.jsx)(
            "circle",
            { className: y().track, cx: 150, cy: 150, r: e3 },
            e3
          )
        ),
        (0, i.jsx)("circle", { className: y().core, cx: 150, cy: 150, r: 56 }),
        el.map(
          (e3) => (0, i.jsx)(
            "line",
            {
              className: e3.major ? y().major : y().hour,
              x1: 150,
              y1: 9,
              x2: 150,
              y2: 4 + (e3.major ? 12 : 9),
              transform: `rotate(${15 * e3.hour} 150 150)`
            },
            e3.hour
          )
        ),
        ed.map((e3) => {
          let a3;
          return (0, i.jsx)(
            "text",
            {
              className: y().numeral,
              x: e3.x,
              y: e3.y,
              textAnchor: e3.anchor,
              dominantBaseline: "central",
              children: (a3 = e3.hour, 24 === t2 ? k(a3) : 12 === a3 ? "Noon" : `${a3 % 12 || 12} ${a3 < 12 ? "AM" : "PM"}`)
            },
            e3.hour
          );
        })
      ]
    });
  }
  function em({
    city: e2,
    turn: t2,
    home: a2,
    track: r2,
    daytime: n2,
    working: l2,
    lifted: d2,
    reduced: u2
  }) {
    let f2 = (0, c.G)(t2, (t3) => (t3 + e2.offset - 720) / 4), p2 = (0, c.G)(f2, (e3) => -e3), _2 = (0, m.d)(r2), x2 = (0, c.G)(_2, (e3) => `${-e3 / 3}cqi`), j2 = (0, c.G)(f2, (e3) => `${-(5.4 * Math.sin(e3 * Math.PI / 180))}cqi`), N2 = (0, c.G)(f2, (e3) => `${3.4 * Math.cos(e3 * Math.PI / 180)}cqi`);
    return (0, s.useEffect)(() => {
      let e3 = (0, h.i)(_2, r2, u2 ? { duration: 0 } : L);
      return () => e3.stop();
    }, [_2, u2, r2]), (0, i.jsx)(o.PY1.div, {
      className: y().arm,
      style: { rotate: f2 },
      "data-home": a2 || void 0,
      children: (0, i.jsxs)(o.PY1.div, {
        className: y().anchor,
        style: { y: x2, rotate: p2 },
        children: [
          (0, i.jsx)(o.PY1.span, {
            className: y().bead,
            "data-working": l2 || void 0,
            initial: false,
            animate: { scale: a2 ? d2 ? 1.12 : 1 : 0.3 },
            transition: u2 ? { duration: 0 } : L,
            children: (0, i.jsx)(o.PY1.span, {
              className: y().glyph,
              initial: false,
              animate: { opacity: +!!a2 },
              transition: a2 ? { duration: g.standard, ease: $, delay: 0.07 * !u2 } : { duration: g.instant, ease: b },
              children: (0, i.jsx)(er, { daytime: n2, reduced: u2 })
            })
          }),
          (0, i.jsx)(o.PY1.span, {
            className: y().code,
            style: { x: j2, y: N2 },
            initial: false,
            animate: { opacity: +!a2 },
            transition: a2 ? { duration: g.instant, ease: b } : { duration: g.standard, ease: $, delay: 0.14 * !u2 },
            children: e2.code
          })
        ]
      })
    });
  }
  function eu({
    city: e2,
    homeCity: t2,
    turn: a2,
    at: s2,
    committed: r2,
    cycle: l2,
    work: d2,
    reduced: c2,
    highlightId: m2,
    onSelect: u2
  }) {
    let h2 = e2.id === t2.id, f2 = E(s2 + e2.offset), p2 = Z(s2 + e2.offset, d2), _2 = U(s2 + e2.offset) - U(s2 + t2.offset), x2 = h2 ? `Home \xB7 ${J(e2.offset)}` : `${J(e2.offset)} \xB7 ${V(e2.offset - t2.offset)}`, j2 = U(r2 + e2.offset) - U(r2 + t2.offset), g2 = `${e2.name}, ${W(r2 + e2.offset, l2)}${j2 ? `, ${Q(j2)}` : ""}${Z(r2 + e2.offset, d2) ? ", working hours" : ""}, ${h2 ? "home city" : V(e2.offset - t2.offset)}`;
    return (0, i.jsx)("li", {
      className: y().item,
      children: (0, i.jsxs)("button", {
        type: "button",
        className: y().row,
        "aria-pressed": h2,
        "aria-label": g2,
        onClick: u2,
        children: [
          h2 && (0, i.jsx)(o.PY1.span, {
            layoutId: m2,
            className: y().highlight,
            transition: c2 ? { duration: 0 } : L
          }),
          (0, i.jsx)("span", {
            className: y().rowIcon,
            "data-day": f2 || void 0,
            "data-working": p2 || void 0,
            children: (0, i.jsx)(er, { daytime: f2, reduced: c2 })
          }),
          (0, i.jsxs)("span", {
            className: y().rowText,
            children: [
              (0, i.jsx)("span", { className: y().rowCity, children: e2.name }),
              (0, i.jsx)(es, { className: y().rowMeta, text: x2, reduced: c2 })
            ]
          }),
          (0, i.jsx)("span", {
            className: y().chipSlot,
            children: (0, i.jsx)(n.N, {
              mode: "popLayout",
              initial: false,
              children: 0 !== _2 && (0, i.jsx)(
                o.PY1.span,
                {
                  className: y().chip,
                  variants: c2 ? et : ei,
                  initial: "hidden",
                  animate: "shown",
                  exit: "gone",
                  children: `${_2 > 0 ? "+" : "\u2212"}${Math.abs(_2)} day${1 === Math.abs(_2) ? "" : "s"}`
                },
                _2
              )
            })
          }),
          (0, i.jsx)(eo, {
            className: y().rowTime,
            turn: a2,
            offset: e2.offset,
            cycle: l2,
            reduced: c2
          })
        ]
      })
    });
  }
  function eh({
    cities: e2,
    value: t2,
    defaultValue: a2 = 0,
    onValueChange: l2,
    homeId: d2,
    defaultHomeId: f2,
    onHomeChange: p2,
    min: _2 = -1 / 0,
    max: x2 = 1 / 0,
    weekday: j2 = 1,
    hourCycle: N2 = 12,
    workingHours: w2 = T,
    label: k2 = "Time",
    className: I2
  }) {
    let S2, [C2, Y2] = w2, J2 = (0, s.useMemo)(() => [C2, Y2], [C2, Y2]), V2 = (0, s.useId)().replace(/[^a-zA-Z0-9-]/g, ""), ea2 = (S2 = (0, s.useSyncExternalStore)(
      K,
      () => true,
      () => false
    ), !!(0, r.I)() && S2), ei2 = Number.isFinite(_2) ? 15 * Math.ceil(_2 / 15) : -1 / 0, er2 = Number.isFinite(x2) ? 15 * Math.floor(x2 / 15) : 1 / 0, en2 = (e3) => Math.min(er2, Math.max(ei2, e3)), el2 = void 0 !== t2, [ed2, ef2] = (0, s.useState)(() => P(a2)), ep2 = el2 ? t2 : ed2, [e_2, ex2] = (0, s.useState)(f2 ?? e2[0]?.id), ey2 = e2.find((e3) => e3.id === (d2 ?? e_2)) ?? e2[0], ej2 = (0, m.d)(ep2), eg2 = (0, m.d)(ep2), eN2 = (0, m.d)(0), ew2 = (0, m.d)(0), e$2 = (0, s.useRef)(ep2), eb2 = (0, s.useRef)(null), eM = (0, s.useRef)(null), ev = (0, s.useRef)(null), ek = (0, s.useRef)(ey2.offset), [eP, eI] = (0, s.useState)(false), [eS, eT] = (0, s.useState)(() => ({ key: q(ep2, e2, J2), at: P(ep2) })), eC = (0, m.d)(ey2.offset), eY = (0, c.G)([ej2, eC], ([e3, t3]) => (e3 + t3 - 720) / 4);
    (0, u.L)(ej2, "change", (t3) => {
      let a3 = q(t3, e2, J2);
      a3 !== eS.key && eT((e3) => e3.key === a3 ? e3 : { key: a3, at: P(t3) });
    });
    let eA = (0, c.G)(
      [ej2, eg2],
      ([e3, t3]) => (function(e4, t4) {
        let a3 = Math.max(-1436, Math.min(1436, t4 - e4)) / 4;
        if (0.5 > Math.abs(a3)) return "M0 0";
        let i2 = (e4 - 720) / 4, [s2, r2] = B(i2, 106), [n2, o2] = B(i2 + a3, 106);
        return `M${s2.toFixed(2)} ${r2.toFixed(2)} A106 106 0 ${+(Math.abs(a3) > 180)} ${+(a3 > 0)} ${n2.toFixed(2)} ${o2.toFixed(2)}`;
      })(t3 + ey2.offset, e3 + ey2.offset)
    ), eF = (0, c.G)([ej2, eg2], ([e3, t3]) => {
      let a3;
      return 0 == (a3 = P(e3) - P(t3)) ? "No change" : `${a3 > 0 ? "+" : "\u2212"}${z(Math.abs(a3))}`;
    });
    (0, s.useEffect)(() => {
      ep2 !== e$2.current && (e$2.current = ep2, eb2.current?.stop(), ea2 ? ej2.set(ep2) : eb2.current = (0, h.i)(ej2, ep2, F));
    }, [ep2, ea2, ej2]), (0, s.useLayoutEffect)(() => {
      let e3 = ek.current;
      if (ek.current = ey2.offset, e3 === ey2.offset) return;
      if (eM.current?.stop(), ea2) {
        ew2.set(0), eC.set(ey2.offset);
        return;
      }
      ew2.set(ew2.get() + e3 - ey2.offset), eM.current = (0, h.i)(ew2, 0, O);
      let t3 = eC.get(), a3 = v(ey2.offset - t3 + 720, 1440) - 720;
      (0, h.i)(eC, t3 + a3, { ...L, onComplete: () => eC.jump(ey2.offset) });
    }, [ey2.offset, ew2, ea2, eC]);
    let eD = (e3, t3, a3) => {
      (eb2.current?.stop(), eb2.current = null, ea2) ? ej2.set(e3) : eb2.current = (0, h.i)(
        ej2,
        e3,
        void 0 === a3 ? t3 : { ...t3, velocity: a3 }
      );
    }, eL = (e3) => {
      e$2.current = e3, el2 || ef2(e3), e3 !== ep2 && l2?.(e3);
    }, eO = (e3, t3, a3) => 180 * Math.atan2(e3 - a3.cx, a3.cy - t3) / Math.PI, eX = (e3) => {
      let t3 = ev.current;
      if (!t3 || e3.pointerId !== t3.id) return;
      ev.current = null, e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.releasePointerCapture(e3.pointerId);
      let a3 = ej2.get();
      if (!t3.moved) {
        if ("pointerup" === e3.type && Math.hypot(e3.clientX - t3.cx, e3.clientY - t3.cy) > 0.55 * t3.radius) {
          let i3 = en2(
            P(
              a3 + v(
                4 * eO(e3.clientX, e3.clientY, t3) + 720 - (a3 + ey2.offset) + 720,
                1440
              ) - 720
            )
          );
          eL(i3), eD(i3, F);
        } else P(a3) !== a3 && (eL(en2(P(a3))), eD(en2(P(a3)), A));
        return;
      }
      eI(false), (0, h.i)(eN2, 0, {
        duration: ea2 ? 0.1 : 0.32,
        ease: b,
        delay: 0.3 * !ea2
      });
      let i2 = t3.samples[0], s2 = t3.samples[t3.samples.length - 1], r2 = s2.t - i2.t, n2 = "pointerup" === e3.type && r2 > 8 && e3.timeStamp - s2.t < 80 ? Math.max(-6e3, Math.min(6e3, (s2.v - i2.v) / r2 * 1e3)) : 0, o2 = a3 > er2 || a3 < ei2, l3 = !o2 && !ea2 && Math.abs(n2) > 120, d3 = en2(P(a3 + (l3 ? 0.24 * n2 : 0)));
      eL(d3), eD(d3, o2 ? D : l3 ? X : A, n2);
    }, eR = e2.filter((e3) => e3.id !== ey2.id), eG = eR.map((e3, t3) => {
      let a3;
      return 88 - t3 * ((a3 = eR.length) > 1 ? Math.min(11, 24 / (a3 - 1)) : 0);
    }), eH = ep2 + ey2.offset, eB = M[v(j2 + U(eS.at + ey2.offset), 7)], eE = `${W(eH, N2)}, ${M[v(j2 + U(eH), 7)]}, ${ey2.name}`, eZ = eR.map((e3) => {
      let t3 = U(ep2 + e3.offset) - U(eH);
      return `${e3.name} ${W(ep2 + e3.offset, N2)}${t3 ? `, ${Q(t3)}` : ""}`;
    }).join(". ");
    return (0, i.jsxs)("div", {
      className: [y().root, I2].filter(Boolean).join(" "),
      children: [
        (0, i.jsxs)("div", {
          className: y().layout,
          children: [
            (0, i.jsxs)("div", {
              className: y().stage,
              role: "slider",
              tabIndex: 0,
              "aria-label": k2,
              "aria-valuemin": 0,
              "aria-valuemax": 1425,
              "aria-valuenow": v(eH, 1440),
              "aria-valuetext": eE,
              "aria-describedby": `${V2}-hint`,
              "data-dragging": eP || void 0,
              onPointerDown: (e3) => {
                if (0 !== e3.button || !e3.isPrimary) return;
                let t3 = e3.currentTarget.getBoundingClientRect(), a3 = { cx: t3.left + t3.width / 2, cy: t3.top + t3.height / 2 };
                eb2.current?.stop();
                let i2 = ej2.get();
                e3.currentTarget.setPointerCapture(e3.pointerId), ev.current = {
                  id: e3.pointerId,
                  ...a3,
                  radius: t3.width / 2,
                  x: e3.clientX,
                  y: e3.clientY,
                  angle: eO(e3.clientX, e3.clientY, a3),
                  raw: i2 >= ei2 && i2 <= er2 ? ((e4) => {
                    let t4 = e4;
                    for (let a4 = 0; a4 < 4; a4++) t4 -= (R(t4) - e4) / G(t4);
                    return t4;
                  })(i2) : i2,
                  from: i2,
                  moved: false,
                  samples: [{ t: e3.timeStamp, v: i2 }]
                };
              },
              onPointerMove: (e3) => {
                let t3, a3 = ev.current;
                if (!a3 || e3.pointerId !== a3.id) return;
                if (!a3.moved) {
                  if (4 > Math.hypot(e3.clientX - a3.x, e3.clientY - a3.y)) return;
                  a3.moved = true, eg2.set(a3.from), (0, h.i)(eN2, 1, { duration: g.fast, ease: $ }), eI(true);
                }
                let i2 = eO(e3.clientX, e3.clientY, a3);
                Math.hypot(e3.clientX - a3.cx, e3.clientY - a3.cy) > 0.14 * a3.radius && (a3.raw += (v(i2 - a3.angle + 180, 360) - 180) * 4), a3.angle = i2, ej2.set(
                  (t3 = a3.raw) > er2 ? er2 + H(t3 - er2) : t3 < ei2 ? ei2 - H(ei2 - t3) : R(t3)
                ), a3.samples = [
                  ...a3.samples.filter((t4) => e3.timeStamp - t4.t < 100),
                  { t: e3.timeStamp, v: a3.raw }
                ];
              },
              onPointerUp: eX,
              onPointerCancel: eX,
              onKeyDown: (e3) => {
                let t3, a3 = {
                  ArrowRight: 15,
                  ArrowUp: 15,
                  ArrowLeft: -15,
                  ArrowDown: -15,
                  PageUp: 60,
                  PageDown: -60
                }, i2 = 1440 * U(e$2.current + ey2.offset) - ey2.offset, s2 = Object.hasOwn(a3, e3.key) ? a3[e3.key] : void 0;
                if (void 0 !== s2) t3 = e$2.current + s2;
                else if ("Home" === e3.key) t3 = i2;
                else {
                  if ("End" !== e3.key) return;
                  t3 = i2 + 1440 - 15;
                }
                e3.preventDefault(), (t3 = en2(P(t3))) !== e$2.current && (eL(t3), eD(t3, "Home" === e3.key || "End" === e3.key ? F : A));
              },
              children: [
                (0, i.jsx)(ec, { tracks: eG, cycle: N2, work: J2 }),
                (0, i.jsx)("svg", {
                  className: y().svg,
                  viewBox: "0 0 300 300",
                  "aria-hidden": "true",
                  focusable: "false",
                  children: (0, i.jsx)(o.PY1.path, {
                    className: y().sweep,
                    d: eA,
                    style: { opacity: eN2 }
                  })
                }),
                (0, i.jsxs)("div", {
                  className: y().orbits,
                  "aria-hidden": "true",
                  children: [
                    (0, i.jsx)(o.PY1.div, {
                      className: y().arm,
                      style: { rotate: eY },
                      children: (0, i.jsx)("span", { className: y().hand })
                    }),
                    e2.map(
                      (e3) => (0, i.jsx)(
                        em,
                        {
                          city: e3,
                          turn: ej2,
                          home: e3.id === ey2.id,
                          track: e3.id === ey2.id ? 106 : eG[eR.indexOf(e3)],
                          daytime: E(eS.at + e3.offset),
                          working: Z(eS.at + e3.offset, J2),
                          lifted: eP,
                          reduced: ea2
                        },
                        e3.id
                      )
                    )
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: y().readout,
                  "aria-hidden": "true",
                  children: [
                    (0, i.jsx)(es, {
                      className: y().readoutCity,
                      text: ey2.name,
                      reduced: ea2
                    }),
                    (0, i.jsx)(eo, {
                      className: y().readoutTime,
                      turn: ej2,
                      offset: ey2.offset,
                      lag: ew2,
                      cycle: N2,
                      reduced: ea2
                    }),
                    (0, i.jsx)("span", {
                      className: [y().swap, y().readoutNote].join(" "),
                      children: (0, i.jsx)(n.N, {
                        mode: "popLayout",
                        initial: false,
                        children: eP ? (0, i.jsx)(
                          o.PY1.span,
                          {
                            className: y().swapItem,
                            variants: ea2 ? et : ee,
                            initial: "hidden",
                            animate: "shown",
                            exit: "gone",
                            children: eF
                          },
                          "delta"
                        ) : (0, i.jsx)(
                          o.PY1.span,
                          {
                            className: y().swapItem,
                            variants: ea2 ? et : ee,
                            initial: "hidden",
                            animate: "shown",
                            exit: "gone",
                            children: eB
                          },
                          eB
                        )
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("ul", {
              className: y().list,
              "aria-label": "Cities. Choose one to read the dial in its time.",
              children: e2.map(
                (e3) => (0, i.jsx)(
                  eu,
                  {
                    city: e3,
                    homeCity: ey2,
                    turn: ej2,
                    at: eS.at,
                    committed: ep2,
                    cycle: N2,
                    work: J2,
                    reduced: ea2,
                    highlightId: `${V2}-home`,
                    onSelect: () => {
                      var t3;
                      (t3 = e3.id) !== ey2.id && (void 0 === d2 && ex2(t3), p2?.(t3));
                    }
                  },
                  e3.id
                )
              )
            })
          ]
        }),
        (0, i.jsx)("span", {
          id: `${V2}-hint`,
          className: y().srOnly,
          children: "Drag around the dial or use the arrow keys to move in 15 minute steps. Page Up and Page Down move by an hour."
        }),
        (0, i.jsx)("p", {
          className: y().srOnly,
          "aria-live": "polite",
          children: eZ
        })
      ]
    });
  }
  var ef = a(54882), ep = a.n(ef);
  let e_ = [
    { id: "nyc", name: "New York", code: "NYC", offset: -240 },
    { id: "sfo", name: "San Francisco", code: "SF", offset: -420 },
    { id: "lon", name: "London", code: "LON", offset: 60 },
    { id: "tyo", name: "Tokyo", code: "TYO", offset: 540 }
  ], ex = (e2) => e_.filter((t2) => {
    let a2;
    return (a2 = ((e2 + t2.offset) % 1440 + 1440) % 1440) >= 540 && a2 < 1080;
  }).length, { spring: ey, duration: ej, ease: eg, blur: eN } = _.T, ew = [...eg.enter], e$ = () => () => {
  };
  function eb() {
    let [e2, t2] = (0, s.useState)(1260), [a2, c2] = (0, s.useState)("nyc"), m2 = (0, s.useSyncExternalStore)(
      e$,
      () => true,
      () => false
    ), u2 = !!(0, r.I)() && m2, h2 = (function(e3, t3) {
      let a3 = 1440 * Math.floor((e3 + t3.offset) / 1440) - t3.offset, i2 = e3;
      for (let t4 = 0; t4 < 96; t4++) {
        let s2 = a3 + 15 * t4;
        (ex(s2) - ex(i2) || Math.abs(i2 - e3) - Math.abs(s2 - e3)) > 0 && (i2 = s2);
      }
      return i2;
    })(e2, e_.find((e3) => e3.id === a2) ?? e_[0]), f2 = `${ex(e2)} of ${e_.length} offices at work`;
    return (0, i.jsxs)("div", {
      className: ep().demo,
      children: [
        (0, i.jsx)(eh, {
          cities: e_,
          value: e2,
          onValueChange: t2,
          homeId: a2,
          onHomeChange: c2,
          weekday: 1,
          hourCycle: 12,
          label: "Call time"
        }),
        (0, i.jsxs)("div", {
          className: ep().bar,
          children: [
            (0, i.jsx)("p", {
              className: ep().status,
              children: (0, i.jsx)(n.N, {
                mode: "popLayout",
                initial: false,
                children: (0, i.jsx)(
                  o.PY1.span,
                  {
                    className: ep().statusText,
                    initial: u2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: "0.4em",
                      filter: `blur(${eN.soft}px)`
                    },
                    animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
                    exit: u2 ? { opacity: 0, transition: { duration: ej.instant } } : {
                      opacity: 0,
                      y: "-0.4em",
                      filter: `blur(${eN.subtle}px)`,
                      transition: { duration: ej.instant }
                    },
                    transition: u2 ? { duration: ej.fast } : {
                      y: ey.snappy,
                      opacity: { duration: ej.standard, ease: ew },
                      filter: { duration: ej.standard, ease: ew }
                    },
                    children: f2
                  },
                  f2
                )
              })
            }),
            (0, i.jsxs)("div", {
              className: ep().actions,
              children: [
                (0, i.jsxs)("button", {
                  type: "button",
                  className: ep().action,
                  disabled: h2 === e2,
                  onClick: () => t2(h2),
                  children: [
                    (0, i.jsx)(l.A, { "aria-hidden": "true" }),
                    "Find overlap"
                  ]
                }),
                (0, i.jsxs)("button", {
                  type: "button",
                  className: ep().action,
                  disabled: 1260 === e2 && "nyc" === a2,
                  onClick: () => {
                    t2(1260), c2("nyc");
                  },
                  children: [
                    (0, i.jsx)(d.A, { "aria-hidden": "true" }),
                    "Reset"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(78890, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => o });
  var i = a(51811);
  let n = {
    name: "moon",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
          key: "kfwtm"
        }
      ]
    ]
  };
  n.node;
  let o = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(86272, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr"
        }
      ],
      ["path", { d: "M20 2v4", key: "1rf3ol" }],
      ["path", { d: "M22 4h-4", key: "gwowj6" }],
      ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
    ],
    aliases: ["stars"]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("time-dial", [6030,54882]);
A.item("time-dial", {entry:76976, export:"TimeDialDemo", kind:"component", tier:"pro", unresolved:[]});
})();