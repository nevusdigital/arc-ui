/* ticket-tear (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(37888, function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  "use strict";
  r.d(e, { c: () => a });
  var s = r(95155);
  function a(t2) {
    return (0, s.jsxs)("svg", {
      ...t2,
      viewBox: "0 0 64 64",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "5.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("path", { d: "M9 48V29C9 15 19 7 32 7s23 8 23 22v19" }),
        (0, s.jsx)("path", { d: "M20 48V31c0-8 5-13 12-13s12 5 12 13v17" }),
        (0, s.jsx)("path", { d: "M32 38v10" })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(47055, ".demo{display:grid;grid-template-columns:minmax(0,400px);justify-content:center;min-height:460px;align-content:center;justify-items:center;gap:24px;padding:32px 16px 64px;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.ticket{width:100%;container-type:inline-size}\n.body{display:grid;min-width:0;gap:2px;padding:20px 24px;color:var(--foreground)}\n@container (max-width: 300px){.body{padding:16px 14px}\n.head{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}\n.head{margin-bottom:12px;flex-direction:column;align-items:flex-start;gap:8px}\n.mark{width:22px;height:22px;color:var(--accent)}\n.date{color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.title{margin:0;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.title{font-size:var(--text-xl)}\n.venue{margin:0;color:var(--text-secondary);font-size:var(--text-sm)}\n.meta{display:flex;gap:24px;margin:16px 0 0;padding-top:12px;border-top:1px dashed var(--border-strong)}\n.meta dt{color:var(--text-muted);font-size:var(--text-xs)}\n.meta dd{margin:2px 0 0;font-size:var(--text-sm);font-weight:500}\n.meta{flex-direction:column;gap:8px}\n.stub{display:grid;height:100%;align-content:center;justify-items:center;gap:6px;margin-left:calc(var(--pad, 0px) * -1);padding:16px 8px 16px calc(12px + var(--pad, 0px));background:var(--accent);color:var(--accent-foreground);text-align:center}\n.stubLabel{margin-bottom:6px;color:color-mix(in oklab,var(--accent-foreground) 78%,transparent);font-size:var(--text-xs)}\n.stubValue{font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-display);white-space:nowrap;font-variant-numeric:tabular-nums}\n.stubValue{font-size:var(--text-base)}\n.footer{display:flex;width:100%;min-height:var(--control-height-sm);align-items:center;justify-content:flex-end;gap:16px}\n.done{display:inline-flex;align-items:center;gap:6px;margin-right:auto;color:var(--success);font-size:var(--text-sm)}\n.reset{display:inline-flex;min-height:var(--control-height-sm);align-items:center;gap:8px;padding:0 12px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.reset:active:not(:disabled){transform:scale(.97)}\n.reset:disabled{cursor:default;opacity:.45}\n@media (hover:hover) and (pointer:fine){.reset:hover:not(:disabled){background:var(--surface-muted)}", {"demo":"demo","ticket":"ticket","body":"body","head":"head","mark":"mark","date":"date","title":"title","venue":"venue","meta":"meta","stub":"stub","stubLabel":"stubLabel","stubValue":"stubValue","footer":"footer","done":"done","reset":"reset"});
A.regCss(85634, ".root{--paper:var(--ticket-paper,var(--surface-raised));position:relative;display:flex;width:100%;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}\n:root[data-theme=dark] .root{--paper:var(--ticket-paper,color-mix(in oklab,var(--surface-raised) 94%,white))}\n.bodyWrap,.stubWrap{filter:drop-shadow(0 1px 1px oklch(0 0 0/.06)) drop-shadow(0 8px 18px oklch(0 0 0/.08))}\n:root[data-theme=dark] .bodyWrap,:root[data-theme=dark] .stubWrap{filter:drop-shadow(0 0 0 oklch(100% 0 0/0)) drop-shadow(0 10px 22px oklch(0 0 0/.4))}\n.bodyWrap{position:relative;flex:1;min-width:0;margin-right:calc(var(--stub) - var(--pad))}\n.stubWrap{position:absolute;top:0;right:0;bottom:0;width:calc(var(--stub) + var(--pad));cursor:grab;touch-action:none;will-change:transform}\n.stubWrap:active{cursor:grabbing}\n.body{position:relative}\n.body,.stub{height:100%;background:var(--paper);-webkit-mask-composite:source-in;mask-composite:intersect}\n.body{-webkit-mask:radial-gradient(circle var(--notch) at calc(100% - var(--pad)) 0,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle var(--notch) at calc(100% - var(--pad)) 100%,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle 1.9px at calc(100% - var(--pad)) 50%,#0000 calc(100% - .5px),#000 100%) 0 0 /100% var(--hole) repeat-y;mask:radial-gradient(circle var(--notch) at calc(100% - var(--pad)) 0,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle var(--notch) at calc(100% - var(--pad)) 100%,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle 1.9px at calc(100% - var(--pad)) 50%,#0000 calc(100% - .5px),#000 100%) 0 0 /100% var(--hole) repeat-y;-webkit-mask-composite:source-in;mask-composite:intersect}\n.stub{position:absolute;inset:0;-webkit-mask:radial-gradient(circle var(--notch) at var(--pad) 0,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle var(--notch) at var(--pad) 100%,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle 1.9px at var(--pad) 50%,#0000 calc(100% - .5px),#000 100%) 0 0 /100% var(--hole) repeat-y;mask:radial-gradient(circle var(--notch) at var(--pad) 0,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle var(--notch) at var(--pad) 100%,#0000 calc(100% - .5px),#000 100%),radial-gradient(circle 1.9px at var(--pad) 50%,#0000 calc(100% - .5px),#000 100%) 0 0 /100% var(--hole) repeat-y;-webkit-mask-composite:source-in;mask-composite:intersect;padding-left:var(--pad)}\n.flap{will-change:transform,clip-path}\n.rim{position:absolute;inset:0;background:var(--ticket-fiber,color-mix(in oklab,var(--paper) 84%,var(--foreground)))}\n.status{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","bodyWrap":"bodyWrap","stubWrap":"stubWrap","body":"body","stub":"stub","flap":"flap","rim":"rim","status":"status"});
A.reg(91156, function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  "use strict";
  r.r(e), r.d(e, { TicketTearDemo: () => $ });
  var s = r(95155), a = r(12115), i = r(80642), n = r(25354), o = r(64962), l = r(92298), c = r(18310), d = r(28245), u = r(22535), p = r(55809), h = r(92171), x = r(7770), f = r(85634), m = r.n(f);
  let y = () => () => {
  };
  function g(t2, e2) {
    let r2 = 43758.5453 * Math.sin(12.9898 * t2 + 78.233 * e2);
    return r2 - Math.floor(r2);
  }
  function _(t2, e2, r2 = 0) {
    let s2 = [];
    for (let a2 = 0; a2 < t2; a2 += 1.25) {
      let i2 = Math.min(1, (t2 - a2) / 14), n2 = e2 + ((function(t3) {
        let e3 = Math.round(t3 / 1.25), r3 = (e3 % 8 + 8) % 8;
        if (4 === r3) return 0;
        let s3 = 1 === Math.abs(r3 - 4), a3 = (g(Math.floor(e3 / 2), 1) - 0.5) * 4.4, i3 = (g(e3, 2) - 0.5) * 1.6;
        return s3 ? 0.6 * i3 : a3 + i3;
      })(a2) + (r2 ? r2 * (function(t3) {
        let e3 = g(Math.round(t3 / 1.25), 3);
        return 0.5 + 1.3 * e3 + 1.4 * (e3 > 0.86);
      })(a2) : 0)) * i2;
      s2.push(`${n2.toFixed(2)}px ${a2.toFixed(2)}px`);
    }
    return s2.push(`${e2}px ${t2.toFixed(2)}px`), s2;
  }
  function v({
    children: t2,
    stub: e2,
    torn: r2,
    defaultTorn: i2 = false,
    onTornChange: o2,
    stubWidth: l2 = 104,
    label: f2 = "Tear off stub",
    className: g2,
    style: k2
  }) {
    let b2, j2 = (b2 = (0, a.useSyncExternalStore)(
      y,
      () => true,
      () => false
    ), !!(0, c.I)() && b2), [$2, M] = (0, a.useState)(i2), T = void 0 !== r2, N = T ? r2 : $2, [w, P] = (0, a.useState)(N ? "torn" : "attached"), [C, G] = (0, a.useState)(0), [A, E] = (0, a.useState)(0), S = (0, a.useRef)(null), Y = (0, a.useRef)(null), F = (0, a.useRef)(w);
    (0, a.useLayoutEffect)(() => {
      F.current = w;
    }, [w]);
    let L = (0, a.useRef)([]), W = (0, a.useRef)(0), V = (0, a.useRef)(o2);
    (0, a.useLayoutEffect)(() => {
      V.current = o2;
    });
    let z = (0, d.d)(+!!N), I = (0, d.d)(0), R = (0, u.z)(I, { stiffness: 620, damping: 28, mass: 0.5 }), O = (0, d.d)(0), D = (0, d.d)(0), q = (0, d.d)(0), B = (0, d.d)(1), H = (0, d.d)(1), U = (0, d.d)(0);
    (0, a.useLayoutEffect)(() => {
      let t3 = S.current;
      if (!t3) return;
      let e3 = () => {
        G(t3.offsetHeight), E(t3.offsetWidth - l2);
      };
      if (e3(), "u" < typeof ResizeObserver) return;
      let r3 = new ResizeObserver(e3);
      return r3.observe(t3), () => r3.disconnect();
    }, [l2]);
    let X = Math.max(C, 1), K = l2 + 5, J = (0, d.d)({ h: 1, w: 0 });
    (0, a.useLayoutEffect)(() => {
      J.set({ h: X, w: A });
    }, [X, A, J]);
    let Q = (0, p.G)(() => Math.max(0, Math.min(1, z.get())) * J.get().h), Z = (0, p.G)(() => {
      let t3 = Q.get(), { h: e3, w: r3 } = J.get();
      return `polygon(0px 0px, ${_(t3, r3).join(", ")}, ${r3 + 5}px ${t3.toFixed(2)}px, ${r3 + 5}px ${e3}px, 0px ${e3}px)`;
    }), tt = (0, p.G)(() => {
      let t3 = Q.get(), { h: e3, w: r3 } = J.get();
      return t3 < 0.5 ? "polygon(0px 0px, 0px 0px, 0px 0px)" : `polygon(0px 0px, ${_(t3, r3, 1).join(", ")}, ${r3}px ${t3.toFixed(2)}px, ${r3}px ${e3}px, 0px ${e3}px)`;
    }), te = (0, p.G)(() => {
      let t3 = Q.get();
      return t3 < 0.5 ? "polygon(0px 0px, 0px 0px, 0px 0px)" : `polygon(${_(t3, 5).join(", ")}, ${K}px ${t3.toFixed(2)}px, ${K}px 0px)`;
    }), tr = (0, p.G)(() => {
      let t3 = Math.max(0, Q.get() - 0.5), { h: e3 } = J.get();
      return `polygon(0px ${t3.toFixed(2)}px, ${K}px ${t3.toFixed(2)}px, ${K}px ${e3}px, 0px ${e3}px)`;
    }), ts = (0, p.G)(() => {
      let t3 = Q.get();
      return t3 < 0.5 ? "polygon(0px 0px, 0px 0px, 0px 0px)" : `polygon(${_(t3, 5, -1).join(", ")}, ${K}px ${t3.toFixed(2)}px, ${K}px 0px)`;
    }), ta = (0, p.G)(() => `5px ${Q.get().toFixed(2)}px`), ti = `polygon(${_(X, 5).join(", ")}, ${K}px ${X}px, ${K}px 0px)`, tn = `polygon(${_(X, 5, -1).join(", ")}, ${K}px ${X}px, ${K}px 0px)`, to = () => {
      L.current.forEach((t3) => t3.stop()), L.current = [];
    }, tl = (t3) => {
      let e3 = Math.floor(t3 / 10);
      e3 > W.current && (W.current = e3, "u" > typeof navigator && "vibrate" in navigator && Y.current && navigator.vibrate?.(2));
    }, tc = (0, a.useCallback)(
      (t3) => {
        to(), P("falling");
        let e3 = R.get();
        if (O.set(0), D.set(0), q.set(e3), B.set(1), j2)
          L.current = [
            (0, h.i)(B, 0, {
              duration: x.T.duration.exit,
              ease: [...x.T.ease.standard],
              onComplete: () => P("torn")
            })
          ];
        else {
          let r3 = t3 < -200 ? -1 : 1, s2 = Math.max(-200, Math.min(200, 0.12 * t3));
          L.current = [
            (0, h.i)(D, [0, -6, 1.2 * X + 140], {
              duration: 0.58,
              times: [0, 0.16, 1],
              ease: ["easeOut", [0.55, 0, 0.9, 0.4]]
            }),
            (0, h.i)(O, 30 + s2, {
              duration: 0.58,
              ease: [0.12, 0.7, 0.3, 1]
            }),
            (0, h.i)(q, e3 + r3 * (16 + Math.min(28, 0.014 * Math.abs(t3))), {
              type: "spring",
              stiffness: 210,
              damping: 18,
              velocity: 140 * r3
            }),
            (0, h.i)(B, 0, {
              duration: 0.18,
              delay: 0.24,
              ease: [...x.T.ease.inOut],
              onComplete: () => P("torn")
            })
          ];
        }
        T || M(true), V.current?.(true);
      },
      [X, T, B, q, O, D, j2, R]
    ), td = (0, a.useCallback)(
      (t3 = 0, e3 = false) => {
        if ("attached" !== F.current) return;
        if (to(), j2) {
          z.set(1), tc(t3);
          return;
        }
        let r3 = 1 - z.get(), s2 = e3 ? Math.max(0.07, 0.14 * r3) : Math.max(0.12, 0.3 * r3);
        I.set(Math.max(I.get(), e3 ? 13 : 11)), L.current = [
          (0, h.i)(z, 1, {
            duration: s2,
            ease: e3 ? [0.25, 0.5, 0.6, 1] : [0.6, 0, 0.85, 0.45],
            onUpdate: (t4) => tl(t4 * X),
            onComplete: () => tc(t3)
          })
        ];
      },
      [X, I, tc, z, j2]
    ), tu = (0, a.useCallback)(() => {
      if (to(), z.set(0), I.set(0), R.jump(0), W.current = 0, O.set(0), D.set(0), q.set(0), B.set(1), P("attached"), j2) {
        H.set(0), L.current = [
          (0, h.i)(H, 1, {
            duration: x.T.duration.fast,
            ease: [...x.T.ease.standard]
          })
        ];
        return;
      }
      H.set(0), U.set(18), L.current = [
        (0, h.i)(H, 1, {
          duration: x.T.duration.standard,
          ease: [...x.T.ease.standard]
        }),
        (0, h.i)(U, 0, x.T.spring.morph)
      ];
    }, [I, H, U, B, q, O, D, z, j2, R]), tp = (0, a.useRef)(N);
    (0, a.useEffect)(() => {
      tp.current !== N && (tp.current = N, N && "attached" === F.current && td(), N || "attached" === F.current || tu());
    }, [N, td, tu]), (0, a.useEffect)(() => () => to(), []);
    let th = (t3) => {
      let e3 = Y.current;
      if (!e3 || e3.id !== t3.pointerId) return;
      Y.current = null;
      let r3 = e3.samples[0], s2 = e3.samples[e3.samples.length - 1], a2 = Math.max(1, s2.t - r3.t) / 1e3, i3 = (s2.x - r3.x) / a2, n2 = (s2.y - r3.y) / a2, o3 = Math.hypot(s2.x - e3.x, s2.y - e3.y);
      0.85 * n2 + 0.55 * i3 > 500 && z.get() > 0.12 ? td(i3, true) : o3 < 4 && "mouse" !== t3.pointerType || I.set(j2 ? 0 : 3 * z.get());
    }, tx = C > 0;
    return (0, s.jsxs)("div", {
      ref: S,
      className: [m().root, g2].filter(Boolean).join(" "),
      style: {
        ...k2,
        "--stub": `${l2}px`,
        "--pad": "5px",
        "--notch": "9px",
        "--hole": "10px"
      },
      "data-phase": w,
      children: [
        (0, s.jsxs)("div", {
          className: m().bodyWrap,
          children: [
            !j2 && (0, s.jsx)(n.PY1.div, {
              className: `${m().body} ${m().rim}`,
              "aria-hidden": "true",
              style: { clipPath: tx ? tt : "polygon(0 0, 0 0, 0 0)" }
            }),
            (0, s.jsx)(n.PY1.div, {
              className: m().body,
              style: { clipPath: tx ? Z : void 0 },
              children: t2
            })
          ]
        }),
        "attached" === w && (0, s.jsxs)(n.PY1.div, {
          className: m().stubWrap,
          style: { opacity: H, x: U },
          role: "button",
          tabIndex: 0,
          "aria-label": f2,
          onKeyDown: (t3) => {
            ("Enter" === t3.key || " " === t3.key) && (t3.preventDefault(), td());
          },
          onPointerDown: (t3) => {
            if ("attached" !== w || Y.current || "mouse" === t3.pointerType && 0 !== t3.button)
              return;
            to(), t3.currentTarget.setPointerCapture(t3.pointerId);
            let e3 = performance.now();
            Y.current = {
              id: t3.pointerId,
              x: t3.clientX,
              y: t3.clientY,
              t0: z.get(),
              samples: [{ x: t3.clientX, y: t3.clientY, t: e3 }]
            };
          },
          onPointerMove: (t3) => {
            let e3 = Y.current;
            if (!e3 || e3.id !== t3.pointerId) return;
            let r3 = t3.clientX - e3.x, s2 = t3.clientY - e3.y;
            e3.samples.push({
              x: t3.clientX,
              y: t3.clientY,
              t: performance.now()
            }), e3.samples.length > 6 && e3.samples.shift();
            let a2 = Math.max(0, 0.85 * s2 + 0.55 * r3), i3 = Math.max(z.get(), Math.min(1, e3.t0 + a2 / (0.7 * X)));
            z.set(i3), tl(i3 * X), j2 || I.set(
              i3 > 0 ? Math.max(
                0,
                Math.min(
                  18,
                  3 + 8 * i3 + 0.06 * Math.max(0, r3) + 0.016 * Math.max(0, s2)
                )
              ) : 0
            ), i3 >= 1 && (Y.current = null, tc(4 * Math.max(0, r3) + 300));
          },
          onPointerUp: th,
          onPointerCancel: th,
          children: [
            (0, s.jsx)(n.PY1.div, {
              className: m().stub,
              style: { clipPath: tx ? tr : void 0 },
              children: e2
            }),
            !j2 && (0, s.jsx)(n.PY1.div, {
              className: `${m().stub} ${m().rim} ${m().flap}`,
              "aria-hidden": "true",
              style: {
                clipPath: tx ? ts : "polygon(0 0, 0 0, 0 0)",
                rotate: R,
                transformOrigin: ta
              }
            }),
            (0, s.jsx)(n.PY1.div, {
              className: `${m().stub} ${m().flap}`,
              "aria-hidden": "true",
              style: {
                clipPath: tx ? te : "polygon(0 0, 0 0, 0 0)",
                rotate: R,
                transformOrigin: ta
              },
              children: e2
            })
          ]
        }),
        (0, s.jsx)("span", {
          className: m().status,
          role: "status",
          children: "attached" === w ? "" : "Stub torn off"
        }),
        "falling" === w && (0, s.jsxs)(n.PY1.div, {
          className: m().stubWrap,
          "aria-hidden": "true",
          style: {
            x: O,
            y: D,
            rotate: q,
            opacity: B,
            transformOrigin: `5px ${X}px`,
            pointerEvents: "none"
          },
          children: [
            !j2 && (0, s.jsx)("div", {
              className: `${m().stub} ${m().rim}`,
              style: { clipPath: tn }
            }),
            (0, s.jsx)("div", {
              className: m().stub,
              style: { clipPath: ti },
              children: e2
            })
          ]
        })
      ]
    });
  }
  var k = r(37888), b = r(47055), j = r.n(b);
  function $() {
    let [t2, e2] = (0, a.useState)(false);
    return (0, s.jsxs)("div", {
      className: j().demo,
      children: [
        (0, s.jsx)(v, {
          className: j().ticket,
          torn: t2,
          onTornChange: e2,
          label: "Tear off stub to check in",
          stubWidth: 96,
          stub: (0, s.jsxs)("div", {
            className: j().stub,
            children: [
              (0, s.jsx)("span", {
                className: j().stubLabel,
                children: "Admit one"
              }),
              (0, s.jsx)("span", {
                className: j().stubValue,
                children: "Row F"
              }),
              (0, s.jsx)("span", {
                className: j().stubValue,
                children: "Seat 12"
              })
            ]
          }),
          children: (0, s.jsxs)("div", {
            className: j().body,
            children: [
              (0, s.jsxs)("div", {
                className: j().head,
                children: [
                  (0, s.jsx)(k.c, { className: j().mark }),
                  (0, s.jsx)("span", {
                    className: j().date,
                    children: "Oct 14, 2026"
                  })
                ]
              }),
              (0, s.jsx)("p", { className: j().title, children: "Arc Conf" }),
              (0, s.jsx)("p", {
                className: j().venue,
                children: "Teatro Tivoli, Lisbon"
              }),
              (0, s.jsxs)("dl", {
                className: j().meta,
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("dt", { children: "Guest" }),
                      (0, s.jsx)("dd", { children: "Emma Collins" })
                    ]
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("dt", { children: "Doors" }),
                      (0, s.jsx)("dd", { children: "18:30" })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        (0, s.jsxs)("div", {
          className: j().footer,
          children: [
            (0, s.jsx)(i.N, {
              initial: false,
              children: t2 && (0, s.jsxs)(
                n.PY1.span,
                {
                  className: j().done,
                  initial: { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 4 },
                  transition: {
                    duration: x.T.duration.standard,
                    ease: [...x.T.ease.standard]
                  },
                  children: [
                    (0, s.jsx)(o.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Checked in"
                  ]
                },
                "in"
              )
            }),
            (0, s.jsxs)("button", {
              type: "button",
              className: j().reset,
              onClick: () => e2(false),
              disabled: !t2,
              children: [
                (0, s.jsx)(l.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "New ticket"
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
A.cssFor("ticket-tear", [47055,85634]);
A.item("ticket-tear", {entry:91156, export:"TicketTearDemo", kind:"component", tier:"pro", unresolved:[]});
})();