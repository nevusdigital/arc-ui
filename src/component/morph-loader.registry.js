/* morph-loader (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(20700, ".root{--morph-loader-success:var(--success);--morph-loader-error:var(--danger);position:relative;display:inline-grid;flex:none;place-items:center;vertical-align:middle;color:currentColor;transition:color var(--duration-standard) var(--ease-standard)}\n.root[data-tone][data-status=success]{color:var(--morph-loader-success)}\n.root[data-tone][data-status=error]{color:var(--morph-loader-error)}\n@media (prefers-reduced-motion:reduce){.root{transition-duration:var(--duration-instant)}\n.svg{display:block;overflow:visible}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","svg":"svg","srOnly":"srOnly"});
A.reg(51001, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { N: () => l });
  var n = i(27933), a = i(12115), r = i(24866);
  function l(e2) {
    let t2 = (0, a.useRef)(0), { isStatic: i2 } = (0, a.useContext)(r.Q);
    (0, a.useEffect)(() => {
      if (i2) return;
      let a2 = ({ timestamp: i3, delta: n2 }) => {
        t2.current || (t2.current = i3), e2(i3 - t2.current, n2);
      };
      return n.Gt.update(a2, true), () => (0, n.WG)(a2);
    }, [e2]);
  }
}

__m(__module,__exports,__require);
});
A.regCss(73282, ".demo{display:grid;width:100%;max-width:480px;gap:20px;margin-inline:auto;justify-items:center}\n.stage{display:grid;width:100%;height:220px;place-items:center;color:var(--accent)}\n.controls{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px}\n.segment{display:flex;height:var(--control-height-sm);padding:2px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-muted)}\n.option{position:relative;display:grid;min-width:60px;place-items:center;padding:0 12px;border:0;border-radius:calc(var(--radius-control) - 3px);background:none;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.option[aria-checked=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.option:hover{color:var(--foreground)}\n@media (max-width:420px){.option{min-width:0;padding:0 10px}\n.thumb{position:absolute;inset:0;border-radius:inherit;background:var(--surface-raised);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n.optionLabel{position:relative}\n.actions{display:flex;gap:8px}\n.action{min-height:var(--control-height-sm);padding:0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.action:active:not(:disabled){transform:scale(.97)}\n.action:disabled{opacity:.45;cursor:default}\n.action:hover:not(:disabled){background:var(--surface-muted)}", {"demo":"demo","stage":"stage","controls":"controls","segment":"segment","option":"option","thumb":"thumb","optionLabel":"optionLabel","actions":"actions","action":"action"});
A.reg(93677, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { MorphLoaderDemo: () => $ });
  var a = r(95155), n = r(12115), s = r(18310), o = r(57700), l = r(25354), i = r(55809), u = r(6900), c = r(28245), d = r(92171), h = r(51001), f = r(7770), p = r(20700), m = r.n(p);
  let g = ["cx", "cy", "len", "ang", "bend", "w", "o"], b = (e2) => e2 * Math.PI / 180, x = (e2, t2, r2, a2, n2) => ({
    cx: (e2 + r2) / 2,
    cy: (t2 + a2) / 2,
    len: Math.hypot(r2 - e2, a2 - t2),
    ang: 180 * Math.atan2(a2 - t2, r2 - e2) / Math.PI,
    bend: 0,
    w: n2,
    o: 1
  }), v = (e2, t2, r2) => ({ cx: e2, cy: t2, len: 0.01, ang: 0, bend: 0, w: r2, o: 1 });
  function M(e2, t2) {
    switch (e2) {
      case "dots":
        return [
          v(5, 12, 4),
          v(12, 12, 4),
          v(19, 12, 4),
          { ...v(12, 12, 0), o: 0 }
        ];
      case "bars":
        return [4.5, 9.5, 14.5, 19.5].map((e3) => x(e3, 6, e3, 18, 3));
      case "ring":
        return [0, 90, 180, 270].map((e3) => {
          var r2;
          let a2, n2;
          return r2 = e3 - 90, a2 = b(32), {
            cx: 12 + 8.5 * Math.cos(a2) * Math.cos(n2 = b(r2)),
            cy: 12 + 8.5 * Math.cos(a2) * Math.sin(n2),
            len: 17 * Math.sin(a2),
            ang: r2 + 90,
            bend: 1 / 8.5,
            w: t2,
            o: 1
          };
        });
      case "square":
        return [
          x(5, 5, 19, 5, t2),
          x(19, 5, 19, 19, t2),
          x(19, 19, 5, 19, t2),
          x(5, 19, 5, 5, t2)
        ];
      case "success":
        return [
          x(5, 12.5, 7.6, 15.1, t2),
          x(7.6, 15.1, 10.2, 17.7, t2),
          x(10.2, 17.7, 14.6, 12.6, t2),
          x(14.6, 12.6, 19, 7.5, t2)
        ];
      case "error":
        return [
          x(6.5, 6.5, 12, 12, t2),
          x(12, 12, 17.5, 17.5, t2),
          x(17.5, 6.5, 12, 12, t2),
          x(12, 12, 6.5, 17.5, t2)
        ];
    }
  }
  let y = () => () => {
  }, _ = (e2, t2) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: r2 * r2,
      damping: 2 * (1 - t2) * r2,
      mass: 1,
      restDelta: 1e-3,
      restSpeed: 0.01
    };
  }, j = _(0.46, 0), w = _(0.52, 0), E = _(0.6, 0), N = (e2) => e2 * e2 * (3 - 2 * e2);
  function k({ values: e2, wave: t2 }) {
    let r2 = (0, i.G)(() => {
      let r3 = t2.get(), a2 = {};
      for (let t3 of g) a2[t3] = e2[t3].get() + (r3[t3] ?? 0);
      return (function(e3) {
        let t3 = Math.max(e3.len, 0.01) / 2, r4 = b(e3.ang), a3 = Math.cos(r4) * t3, n3 = Math.sin(r4) * t3, s3 = (e3.cx - a3).toFixed(3), o2 = (e3.cy - n3).toFixed(3), l2 = (e3.cx + a3).toFixed(3), i2 = (e3.cy + n3).toFixed(3);
        if (4e-3 > Math.abs(e3.bend)) return `M${s3} ${o2}L${l2} ${i2}`;
        let u2 = (1 / Math.abs(e3.bend)).toFixed(3);
        return `M${s3} ${o2}A${u2} ${u2} 0 0 ${+(e3.bend > 0)} ${l2} ${i2}`;
      })(a2);
    }), n2 = (0, i.G)(() => Math.max(0, e2.w.get() + (t2.get().w ?? 0))), s2 = (0, i.G)(() => Math.min(1, Math.max(0, e2.o.get())));
    return (0, a.jsx)(l.PY1.path, { d: r2, strokeWidth: n2, opacity: s2 });
  }
  function L({
    variant: e2 = "dots",
    status: t2 = "loading",
    size: r2 = 24,
    strokeWidth: o2 = 2.5,
    tone: p2 = true,
    label: b2 = "Loading",
    successLabel: x2 = "Done",
    errorLabel: v2 = "Failed",
    decorative: _2 = false,
    className: A2,
    style: C2
  }) {
    let P2, S2 = (P2 = (0, n.useSyncExternalStore)(
      y,
      () => true,
      () => false
    ), !!(0, s.I)() && P2), $2 = "loading" === t2 ? e2 : t2, [I] = (0, n.useState)(
      () => M($2, o2).map(
        (e3) => Object.fromEntries(g.map((t3) => [t3, (0, u.OQ)(e3[t3])]))
      )
    ), [G] = (0, n.useState)(
      () => Array.from({ length: 4 }, () => (0, u.OQ)({}))
    ), F = (0, c.d)(0), O = (0, c.d)(+("loading" === t2)), T = (0, c.d)(1), R = (0, n.useRef)(0), q = (0, n.useRef)(null), U = (0, n.useRef)($2);
    (0, n.useLayoutEffect)(() => {
      U.current = $2;
    }, [$2]), (0, n.useEffect)(() => {
      let e3 = M($2, o2), t3 = [], r3 = "success" === $2 || "error" === $2;
      if (e3.forEach((e4, a2) => {
        let n2 = I[a2];
        g.forEach((s2) => {
          var o3, l2;
          let i2, u2 = n2[s2], c2 = e4[s2];
          ("ang" === s2 && (o3 = u2.get(), c2 = (l2 = c2) + Math.round(
            (o3 - l2) / (i2 = 0 === e4.bend && 4e-3 > n2.bend.get() ? 180 : 360)
          ) * i2), S2) ? u2.set(c2) : t3.push(
            (0, d.i)(u2, c2, {
              ...r3 ? w : j,
              delay: r3 ? 0.035 * a2 : 0
            })
          );
        });
      }), S2) {
        O.set(+("success" !== $2 && "error" !== $2)), F.set(0);
        return;
      }
      if (t3.push(
        (0, d.i)(
          O,
          +!r3,
          r3 ? { duration: f.T.duration.exit, ease: f.T.ease.standard } : { duration: f.T.duration.standard, ease: f.T.ease.standard }
        )
      ), r3) {
        q.current?.stop();
        let e4 = F.get();
        q.current = (0, d.i)(F, 360 * Math.ceil((e4 - 1) / 360), E), t3.push(
          (0, d.i)(T, [1, 1.14, 1], {
            duration: 0.42,
            times: [0, 0.35, 1],
            ease: ["easeOut", "easeInOut"]
          })
        );
      }
      return () => t3.forEach((e4) => e4.stop());
    }, [$2, o2, S2, O, T, F, I]), (0, h.N)((e3, t3) => {
      if (S2) return;
      let r3 = "success" !== U.current && "error" !== U.current, a2 = O.get();
      if (!r3 && a2 < 1e-3) return;
      let n2 = Math.min(t3, 64) / 1e3;
      R.current += n2 * (r3 ? 1 : a2);
      let s2 = R.current, o3 = U.current, l2 = [{}, {}, {}, {}];
      if ("dots" === o3)
        for (let e4 = 0; e4 < 3; e4 += 1) {
          let t4 = Math.sin(s2 / 0.9 * Math.PI * 2 - 0.8 * e4);
          l2[e4] = {
            cy: -3.2 * Math.max(0, t4) * a2,
            w: 0.6 * Math.max(0, t4) * a2
          };
        }
      else if ("bars" === o3)
        for (let e4 = 0; e4 < 4; e4 += 1) {
          let t4 = 0.5 + 0.5 * Math.sin(s2 / 0.95 * Math.PI * 2 - 0.7 * e4);
          l2[e4] = { len: -7.5 * (1 - t4) * a2 };
        }
      else if ("ring" === o3) {
        let e4 = Math.sin(s2 * Math.PI * 2 / 1.4);
        for (let t4 = 0; t4 < 4; t4 += 1)
          l2[t4] = { len: -3.2 * (0.5 + 0.5 * e4) * a2 };
      } else if ("square" === o3) {
        let e4 = Math.sin(N(Math.min(1, s2 / 0.9 % 1 / 0.8)) * Math.PI);
        for (let t4 = 0; t4 < 4; t4 += 1) l2[t4] = { len: -8 * e4 * a2 };
      }
      if (G.forEach((e4, t4) => e4.set(l2[t4])), r3 && ("ring" === o3 || "square" === o3))
        if (q.current?.stop(), q.current = null, "ring" === o3)
          F.set(F.get() + 330 * n2 * a2);
        else {
          let e4 = (e5) => (Math.floor(e5) + N(Math.min(1, e5 % 1 / 0.8))) * 90;
          F.set(F.get() + (e4(s2 / 0.9) - e4((s2 - n2) / 0.9)) * a2);
        }
      else if (r3 && !q.current && Math.abs(F.get() % 360) > 0.01) {
        let e4 = F.get();
        q.current = (0, d.i)(F, 360 * Math.ceil((e4 - 1) / 360), E);
      }
    });
    let D = (0, i.G)(
      () => `rotate(${F.get().toFixed(3)}deg) scale(${T.get().toFixed(4)})`
    ), Y = "success" === t2 ? x2 : "error" === t2 ? v2 : b2;
    return (0, a.jsxs)("span", {
      className: [m().root, A2].filter(Boolean).join(" "),
      "data-status": t2,
      "data-tone": p2 ? "" : void 0,
      style: { ...C2, width: r2, height: r2 },
      role: _2 ? void 0 : "status",
      children: [
        (0, a.jsx)("svg", {
          className: m().svg,
          viewBox: "0 0 24 24",
          width: r2,
          height: r2,
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, a.jsx)(l.PY1.g, {
            style: {
              transform: D,
              transformOrigin: "12px 12px",
              transformBox: "view-box"
            },
            children: I.map(
              (e3, t3) => (0, a.jsx)(k, { values: e3, wave: G[t3] }, t3)
            )
          })
        }),
        !_2 && (0, a.jsx)("span", { className: m().srOnly, children: Y })
      ]
    });
  }
  var A = r(73282), C = r.n(A);
  let P = [
    { value: "dots", label: "Dots" },
    { value: "bars", label: "Bars" },
    { value: "ring", label: "Ring" },
    { value: "square", label: "Square" }
  ], S = () => () => {
  };
  function $() {
    let e2, t2 = (e2 = (0, n.useSyncExternalStore)(
      S,
      () => true,
      () => false
    ), !!(0, s.I)() && e2), [r2, i2] = (0, n.useState)("dots"), [u2, c2] = (0, n.useState)("loading"), d2 = (0, n.useId)();
    return (0, n.useEffect)(() => {
      if ("loading" === u2) return;
      let e3 = window.setTimeout(() => c2("loading"), 1700);
      return () => window.clearTimeout(e3);
    }, [u2]), (0, a.jsxs)("div", {
      className: C().demo,
      children: [
        (0, a.jsx)("div", {
          className: C().stage,
          children: (0, a.jsx)(L, {
            variant: r2,
            status: u2,
            size: 72,
            successLabel: "Published",
            errorLabel: "Publish failed"
          })
        }),
        (0, a.jsxs)("div", {
          className: C().controls,
          children: [
            (0, a.jsx)(o.o, {
              id: d2,
              children: (0, a.jsx)("div", {
                className: C().segment,
                role: "radiogroup",
                "aria-label": "Loader shape",
                children: P.map((e3) => {
                  let n2 = e3.value === r2;
                  return (0, a.jsxs)(
                    "button",
                    {
                      type: "button",
                      role: "radio",
                      "aria-checked": n2,
                      className: C().option,
                      onClick: () => {
                        i2(e3.value), c2("loading");
                      },
                      children: [
                        n2 && (0, a.jsx)(l.PY1.span, {
                          layoutId: "morph-loader-demo-thumb",
                          className: C().thumb,
                          transition: t2 ? { duration: 0 } : f.T.spring.morph
                        }),
                        (0, a.jsx)("span", {
                          className: C().optionLabel,
                          children: e3.label
                        })
                      ]
                    },
                    e3.value
                  );
                })
              })
            }),
            (0, a.jsxs)("div", {
              className: C().actions,
              children: [
                (0, a.jsx)("button", {
                  type: "button",
                  className: C().action,
                  disabled: "loading" !== u2,
                  onClick: () => c2("success"),
                  children: "Succeed"
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  className: C().action,
                  disabled: "loading" !== u2,
                  onClick: () => c2("error"),
                  children: "Fail"
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
A.cssFor("morph-loader", [20700,73282]);
A.item("morph-loader", {entry:93677, export:"MorphLoaderDemo", kind:"component", tier:"pro", unresolved:[]});
})();