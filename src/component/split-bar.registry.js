/* split-bar (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(21894, ".figure{position:relative;display:grid;min-width:0;gap:var(--space-3);margin:0;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.probe{position:absolute;visibility:hidden;font-size:var(--text-xs);font-weight:500;pointer-events:none}\n.head{display:flex;min-width:0;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--space-2) var(--space-4)}\n.heading{display:grid;min-width:0;gap:2px}\n.title{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500}\n.description{margin:0;color:var(--text-muted);font-size:var(--text-sm)}\n.readout{position:relative;display:grid;min-width:0;margin-left:auto;justify-items:end}\n.readoutLine{display:flex;min-width:0;align-items:baseline;gap:8px;white-space:nowrap;font-size:var(--text-sm)}\n.readoutSwatch{width:8px;height:8px;flex:none;align-self:center;border-radius:2px;background:var(--seg)}\n.readoutName{overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis}\n.readoutShare{color:var(--foreground);font-size:var(--text-lg);font-weight:500;font-variant-numeric:tabular-nums;line-height:1.2}\n.readoutValue{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.bar{position:relative;height:44px;overflow:hidden;border-radius:12px;background:var(--surface-muted);cursor:default;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.segment{position:absolute;inset:0;background:color-mix(in oklab,var(--seg) 42%,var(--surface));transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard);will-change:clip-path}\n.segment[data-active]{background:color-mix(in oklab,var(--seg) 62%,var(--surface))}\n.segment[data-dimmed]{opacity:.5}\n@media (prefers-reduced-motion:reduce){.cap,.leader,.outside,.segment,.swatch{transition:none}\n.cap{bottom:0;width:3px;background:var(--seg)}\n.cap,.inside{position:absolute;top:0;left:0;pointer-events:none}\n.inside{display:flex;height:100%;align-items:baseline;padding-top:14px;box-sizing:border-box;color:var(--foreground);font-size:var(--text-xs);font-weight:500;white-space:nowrap;font-variant-numeric:tabular-nums}\n.insideName{display:inline-block;overflow:clip;font-weight:400}\n.lane{position:relative;overflow:hidden;margin-top:calc(var(--space-3) * -1)}\n.leaders{position:absolute;top:0;left:0;overflow:visible}\n.leader{fill:none;stroke:var(--border-strong);stroke-width:1;stroke-linejoin:round;transition:opacity var(--duration-standard) var(--ease-standard)}\n.leader[data-dimmed]{opacity:.4}\n.outside{position:absolute;top:18px;left:0;display:inline-flex;gap:4px;color:var(--foreground);font-size:var(--text-xs);font-weight:500;line-height:1.4;white-space:nowrap;font-variant-numeric:tabular-nums;transition:opacity var(--duration-standard) var(--ease-standard)}\n.outside[data-dimmed]{opacity:.45}\n.outsideName{color:var(--text-secondary);font-weight:400}\n.legend{display:flex;min-width:0;flex-wrap:wrap;gap:2px 4px;margin:0 0 0 -8px;padding:0;list-style:none}\n.legendItem{display:inline-flex;min-height:32px;align-items:baseline;gap:8px;padding:6px 10px 6px 8px;border:0;border-radius:10px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.legendItem[data-active]{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.legendItem:hover{background:var(--surface-muted)}\n.legendItem[data-off] .swatch{border-right-color:transparent;background:transparent;box-shadow:inset 0 0 0 1.5px var(--border-strong)}\n.legendItem[data-off] .legendName{color:var(--text-muted);text-decoration:line-through;text-decoration-color:var(--border-strong)}\n.legendLabel{display:inline-flex;align-items:baseline;gap:8px}\n.swatch{position:relative;width:12px;height:12px;flex:none;align-self:center;translate:0 1px;box-sizing:border-box;border-right:3px solid var(--seg);border-radius:3px;background:color-mix(in oklab,var(--seg) 42%,var(--surface));transition:background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n.legendName{color:var(--text-secondary);transition:color var(--duration-fast) var(--ease-standard)}\n.legendShare{position:relative;display:inline-grid;min-width:2.6em;justify-items:start;color:var(--foreground);font-variant-numeric:tabular-nums}\n.legendOff{color:var(--text-muted)}\n.number{display:inline-flex;align-items:flex-start;white-space:nowrap;user-select:none}\n.column{display:inline-block;overflow-x:clip}\n.wheel{--feather:.18em;position:relative;display:inline-block;overflow:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.4),#000 calc(100% - var(--feather) * 1.4),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"figure":"figure","probe":"probe","head":"head","heading":"heading","title":"title","description":"description","readout":"readout","readoutLine":"readoutLine","readoutSwatch":"readoutSwatch","readoutName":"readoutName","readoutShare":"readoutShare","readoutValue":"readoutValue","bar":"bar","segment":"segment","cap":"cap","leader":"leader","outside":"outside","swatch":"swatch","inside":"inside","insideName":"insideName","lane":"lane","leaders":"leaders","outsideName":"outsideName","legend":"legend","legendItem":"legendItem","legendName":"legendName","legendLabel":"legendLabel","legendShare":"legendShare","legendOff":"legendOff","number":"number","column":"column","wheel":"wheel","sizer":"sizer","glyph":"glyph","symbol":"symbol","srOnly":"srOnly"});
A.reg(73473, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SplitBarDemo: () => S, default: () => k });
  var r = a(95155), i = a(12115), l = a(66558), n = a(55809), s = a(25354), o = a(28245), d = a(92171), u = a(80642), c = a(18310), m = a(7770), p = a(21894), h = a.n(p);
  let f = [
    "var(--series-1)",
    "var(--series-2)",
    "var(--series-3)",
    "var(--series-4)",
    "var(--text-muted)",
    "var(--border-strong)"
  ], b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function _({ position: e2, digit: t2 }) {
    let a2 = (0, n.G)(e2, (e3) => ((t2 - e3) % 10 + 15) % 10 - 5), i2 = (0, n.G)(a2, (e3) => `${e3}em`), l2 = (0, n.G)(a2, (e3) => Math.max(0, 1 - 1.2 * Math.abs(e3)));
    return (0, r.jsx)(s.PY1.span, {
      className: h().glyph,
      style: { y: i2, opacity: l2 },
      children: t2
    });
  }
  function x({ digit: e2, direction: t2, reduceMotion: a2 }) {
    let l2 = (0, o.d)(e2), n2 = (0, i.useRef)({ digit: e2, target: e2 });
    return (0, i.useEffect)(() => {
      let r2 = n2.current;
      if (r2.digit === e2) return;
      if (r2.target += t2 < 0 ? -((r2.digit - e2 + 10) % 10) : (e2 - r2.digit + 10) % 10, r2.digit = e2, a2)
        return void l2.jump(r2.target);
      let i2 = (0, d.i)(l2, r2.target, m.T.spring.smooth);
      return () => i2.stop();
    }, [e2, t2, l2, a2]), (0, r.jsxs)("span", {
      className: h().wheel,
      children: [
        (0, r.jsx)("span", { className: h().sizer, children: "0" }),
        b.map((e3) => (0, r.jsx)(_, { position: l2, digit: e3 }, e3))
      ]
    });
  }
  let g = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 }
  };
  function y({ value: e2, formatter: t2, reduceMotion: a2 }) {
    let l2, n2, o2, [d2, c2] = (0, i.useState)({ value: e2, direction: 1 });
    d2.value !== e2 && c2({ value: e2, direction: e2 >= d2.value ? 1 : -1 });
    let p2 = a2 ? { duration: 0 } : m.T.spring.morph;
    return (0, r.jsx)("span", {
      className: h().number,
      "aria-hidden": "true",
      children: (0, r.jsx)(u.N, {
        initial: false,
        children: (n2 = (l2 = t2.formatToParts(e2)).reduce(
          (e3, t3) => e3 + ("integer" === t3.type ? t3.value.length : 0),
          0
        ), o2 = 0, l2.flatMap(
          (e3, t3) => "integer" === e3.type ? [...e3.value].map((e4) => ({ key: `i${--n2}`, digit: Number(e4) })) : "fraction" === e3.type ? [...e3.value].map((e4) => ({ key: `f${o2++}`, digit: Number(e4) })) : [
            {
              key: "group" === e3.type ? `g${n2}` : "literal" === e3.type ? `l${t3}` : e3.type,
              text: e3.value
            }
          ]
        )).map(
          (e3) => "digit" in e3 ? (0, r.jsx)(
            s.PY1.span,
            {
              className: h().column,
              ...g,
              transition: p2,
              children: (0, r.jsx)(x, {
                digit: e3.digit,
                direction: d2.direction,
                reduceMotion: a2
              })
            },
            e3.key
          ) : (0, r.jsx)(
            s.PY1.span,
            {
              className: h().symbol,
              ...g,
              transition: p2,
              children: e3.text
            },
            e3.key
          )
        )
      })
    });
  }
  function v({
    slice: e2,
    color: t2,
    width: a2,
    active: l2,
    dimmed: u2,
    text: c2,
    reduceMotion: p2
  }) {
    let f2 = (0, o.d)(e2.start), b2 = (0, o.d)(e2.end);
    (0, i.useEffect)(() => {
      if (p2) {
        f2.jump(e2.start), b2.jump(e2.end);
        return;
      }
      let t3 = (0, d.i)(f2, e2.start, m.T.spring.smooth), a3 = (0, d.i)(b2, e2.end, m.T.spring.smooth);
      return () => {
        t3.stop(), a3.stop();
      };
    }, [b2, p2, e2.end, e2.start, f2]);
    let _2 = (0, n.G)([f2, b2, a2], ([e3 = 0, t3 = 0, a3 = 0]) => {
      let r2 = Math.min(1, e3 * a3), i2 = Math.min(1, (1 - t3) * a3);
      return `inset(0 calc(${((1 - t3) * 100).toFixed(3)}% + ${i2.toFixed(2)}px) 0 calc(${(100 * e3).toFixed(3)}% + ${r2.toFixed(2)}px) round 4px)`;
    }), x2 = (0, n.G)(
      [b2, a2],
      ([e3 = 0, t3 = 0]) => e3 * t3 - 3 - Math.min(1, (1 - e3) * t3)
    ), g2 = (0, n.G)(
      [f2, b2, a2],
      ([e3 = 0, t3 = 0, a3 = 0]) => Math.max(0, Math.min(1, ((t3 - e3) * a3 - 4) / 6))
    ), j2 = (0, n.G)([f2, a2], ([e3 = 0, t3 = 0]) => e3 * t3 + 10), N2 = e2.on && ("full" === e2.mode || "short" === e2.mode);
    return (0, r.jsxs)(s.PY1.span, {
      className: h().segment,
      "data-active": l2 || void 0,
      "data-dimmed": u2 || void 0,
      style: { clipPath: _2, "--seg": t2 },
      "aria-hidden": "true",
      children: [
        (0, r.jsx)(s.PY1.span, {
          className: h().cap,
          style: { x: x2, opacity: g2 }
        }),
        (0, r.jsxs)(s.PY1.span, {
          className: h().inside,
          style: { x: j2 },
          initial: false,
          animate: { opacity: +!!N2 },
          transition: { duration: p2 ? 0 : m.T.duration.fast },
          children: [
            (0, r.jsx)(s.PY1.span, {
              className: h().insideName,
              initial: false,
              animate: {
                opacity: +("full" === e2.mode),
                width: "full" === e2.mode ? "auto" : 0,
                marginRight: 5 * ("full" === e2.mode)
              },
              transition: p2 ? { duration: 0 } : m.T.spring.morph,
              children: c2.name
            }),
            (0, r.jsx)(y, {
              value: c2.share,
              formatter: c2.formatter,
              reduceMotion: p2
            })
          ]
        })
      ]
    });
  }
  function j({
    segments: e2,
    title: t2,
    description: a2,
    format: l2,
    unit: n2,
    totalLabel: d2 = "Total",
    hidden: p2,
    defaultHidden: b2 = [],
    onHiddenChange: _2,
    legend: x2 = true,
    locale: g2 = "en-US",
    label: N2,
    className: w2,
    style: M2
  }) {
    let $2 = !!(0, c.I)(), S2 = (0, i.useId)(), [k2, T] = (0, i.useState)(() => [...b2]), P = p2 ?? k2, L = (0, i.useMemo)(() => new Set(P), [P]), O = (e3) => {
      p2 || T(e3), _2?.(e3);
    }, E = (0, i.useMemo)(
      () => new Intl.NumberFormat(g2, {
        maximumFractionDigits: 0,
        ...l2,
        numberingSystem: "latn"
      }),
      [l2, g2]
    ), A = (0, i.useMemo)(
      () => new Intl.NumberFormat(g2, {
        style: "percent",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
        numberingSystem: "latn"
      }),
      [g2]
    ), R = (0, i.useRef)(null), D = (0, i.useRef)(null), F = (0, o.d)(0), [Y, I] = (0, i.useState)(0);
    (0, i.useLayoutEffect)(() => {
      let e3 = R.current;
      if (!e3) return;
      let t3 = () => {
        F.set(e3.clientWidth), I(e3.clientWidth);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, [F]);
    let C = (function(e3) {
      let [t3, a3] = (0, i.useState)("");
      return (0, i.useEffect)(() => {
        let t4 = () => {
          e3.current && a3(getComputedStyle(e3.current).font);
        };
        t4(), document.fonts?.ready.then(t4).catch(() => {
        });
      }, [e3]), (0, i.useMemo)(() => {
        let e4, a4;
        return e4 = /* @__PURE__ */ new Map(), (a4 = "u" > typeof document ? document.createElement("canvas").getContext("2d") : null) && t3 && (a4.font = t3), (r2) => {
          let i2 = e4.get(r2);
          if (void 0 !== i2) return i2;
          let l3 = a4 && t3 ? a4.measureText(r2).width : 7 * r2.length;
          return e4.set(r2, l3), l3;
        };
      }, [t3]);
    })(D), [G, W] = (0, i.useState)(null), [U, V] = (0, i.useState)(""), [z, B] = (0, i.useState)(null), X = (e3, t3) => e3.color ?? f[t3 % f.length] ?? "var(--text-muted)", q = e2.filter((e3) => !L.has(e3.id) && e3.value > 0), H = q.reduce((e3, t3) => e3 + t3.value, 0), K = G && q.some((e3) => e3.id === G) ? G : null, Q = (e3) => H > 0 && !L.has(e3.id) ? Math.max(0, e3.value) / H : 0, J = new Map(e2.map((e3) => [e3.id, Q(e3)])), Z = (function(e3, t3, a3, r2, i2, l3) {
      let n3 = new Map(t3);
      if (a3 && r2 > 0) {
        let t4 = n3.get(a3) ?? 0, s3 = e3.find((e4) => e4.id === a3), o2 = s3 ? (i2(`${s3.label} ${l3.format(t4)}`) + 30) / r2 : 0, d3 = Math.min(Math.max(t4 + 0.045, Math.min(o2, 0.42)), 0.9);
        if (d3 > t4 && t4 < 1) {
          let e4 = (1 - d3) / (1 - t4);
          for (let [t5, r3] of n3) n3.set(t5, t5 === a3 ? d3 : r3 * e4);
        }
      }
      let s2 = e3.reduce(
        (e4, t4) => [...e4, (e4[e4.length - 1] ?? 0) + (n3.get(t4.id) ?? 0)],
        []
      );
      return e3.map((e4, a4) => {
        let n4 = t3.get(e4.id) ?? 0, o2 = a4 ? s2[a4 - 1] ?? 0 : 0, d3 = Math.min(1, s2[a4] ?? 0), u2 = (d3 - o2) * r2, c2 = d3 - o2 > 0, m2 = i2(`${e4.label} ${l3.format(n4)}`) + 30, p3 = i2(l3.format(n4)) + 26;
        return {
          id: e4.id,
          start: o2,
          end: d3,
          share: n4,
          on: c2,
          mode: c2 ? u2 >= m2 ? "full" : u2 >= p3 ? "short" : "outside" : "none"
        };
      });
    })(e2, J, K, Y, C, A), ee = (function(e3, t3, a3, r2, i2) {
      let l3 = (l4) => t3.filter((e4) => "outside" === e4.mode).map((t4) => {
        let n4 = l4 ? e3.find((e4) => e4.id === t4.id)?.label ?? "" : "", s2 = i2.format(t4.share);
        return {
          id: t4.id,
          name: n4,
          anchor: (t4.start + t4.end) / 2 * a3,
          width: r2(n4 ? `${n4} ${s2}` : s2) + 6,
          x: 0
        };
      }), n3 = l3(true);
      n3.reduce((e4, t4, a4) => e4 + t4.width + 12 * !!a4, 0) > a3 && (n3 = l3(false)), n3.forEach((e4, t4) => {
        let a4 = n3[t4 - 1];
        e4.x = Math.max(a4 ? a4.x + a4.width + 12 : 0, e4.anchor - e4.width / 2);
      });
      for (let e4 = n3.length - 1; e4 >= 0; e4--) {
        let t4 = n3[e4], r3 = n3[e4 + 1];
        if (!t4) continue;
        let i3 = r3 ? r3.x - 12 : a3;
        t4.x + t4.width > i3 && (t4.x = Math.max(0, i3 - t4.width));
      }
      return n3;
    })(e2, Z, Y, C, A), et = (t3) => {
      let a3 = e2.find((e3) => e3.id === t3);
      if (a3)
        if (L.has(t3)) O(P.filter((e3) => e3 !== t3)), V(`${a3.label} shown.`);
        else {
          if (q.length <= 1) {
            B((e3) => ({ id: t3, key: (e3?.key ?? 0) + 1 })), V(`${a3.label} is the only share shown, so it stays on.`);
            return;
          }
          O([...P, t3]), V(`${a3.label} hidden.`);
        }
    }, ea = (e3) => {
      let t3 = e3.currentTarget.getBoundingClientRect(), a3 = (e3.clientX - t3.left) / t3.width, r2 = Z.find((e4) => e4.on && a3 >= e4.start && a3 < e4.end);
      r2 && r2.id !== G && W(r2.id);
    }, er = K ? e2.find((e3) => e3.id === K) : void 0, ei = er ? e2.indexOf(er) : -1, el = q.map((e3) => `${e3.label} ${A.format(Q(e3))}`).join(", "), en = N2 ?? t2 ?? "Split bar";
    return (0, r.jsxs)("figure", {
      className: [h().figure, w2].filter(Boolean).join(" "),
      style: M2,
      "aria-labelledby": t2 ? S2 : void 0,
      "aria-label": t2 ? void 0 : en,
      children: [
        (0, r.jsx)("span", {
          ref: D,
          className: h().probe,
          "aria-hidden": "true",
          children: "0"
        }),
        (0, r.jsxs)("div", {
          className: h().head,
          children: [
            (t2 || a2) && (0, r.jsxs)("div", {
              className: h().heading,
              children: [
                t2 && (0, r.jsx)("p", {
                  id: S2,
                  className: h().title,
                  children: t2
                }),
                a2 && (0, r.jsx)("p", {
                  className: h().description,
                  children: a2
                })
              ]
            }),
            (0, r.jsx)("div", {
              className: h().readout,
              "aria-hidden": "true",
              children: (0, r.jsx)(u.N, {
                mode: "popLayout",
                anchorX: "right",
                initial: false,
                children: (0, r.jsx)(
                  s.PY1.div,
                  {
                    className: h().readoutLine,
                    initial: $2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: 6,
                      filter: `blur(${m.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: $2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: -6,
                      filter: `blur(${m.T.blur.subtle}px)`,
                      transition: { duration: m.T.duration.fast }
                    },
                    transition: $2 ? { duration: 0 } : {
                      ...m.T.spring.snappy,
                      opacity: { duration: m.T.duration.fast }
                    },
                    children: er ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("span", {
                          className: h().readoutSwatch,
                          style: { "--seg": X(er, ei) }
                        }),
                        (0, r.jsx)("span", {
                          className: h().readoutName,
                          children: er.label
                        }),
                        (0, r.jsx)("span", {
                          className: h().readoutShare,
                          children: (0, r.jsx)(y, {
                            value: Q(er),
                            formatter: A,
                            reduceMotion: $2
                          })
                        }),
                        (0, r.jsxs)("span", {
                          className: h().readoutValue,
                          children: [
                            (0, r.jsx)(y, {
                              value: er.value,
                              formatter: E,
                              reduceMotion: $2
                            }),
                            n2 ? ` ${n2}` : ""
                          ]
                        })
                      ]
                    }) : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("span", {
                          className: h().readoutName,
                          children: d2
                        }),
                        (0, r.jsx)("span", {
                          className: h().readoutShare,
                          children: (0, r.jsx)(y, {
                            value: H,
                            formatter: E,
                            reduceMotion: $2
                          })
                        }),
                        n2 && (0, r.jsx)("span", {
                          className: h().readoutValue,
                          children: n2
                        })
                      ]
                    })
                  },
                  er ? er.id : "total"
                )
              })
            })
          ]
        }),
        (0, r.jsx)("div", {
          ref: R,
          className: h().bar,
          "data-active": K ? "" : void 0,
          tabIndex: 0,
          role: "group",
          "aria-roledescription": "split bar",
          "aria-label": `${en}: ${el}. Use the arrow keys to read each share.`,
          onPointerMove: ea,
          onPointerDown: ea,
          onPointerLeave: (e3) => {
            "mouse" === e3.pointerType && W(null);
          },
          onKeyDown: (t3) => {
            let a3 = q.map((e3) => e3.id);
            if (!a3.length) return;
            let r2 = K ? a3.indexOf(K) : -1, i2 = {
              ArrowRight: r2 + 1,
              ArrowDown: r2 + 1,
              ArrowLeft: r2 <= 0 ? a3.length - 1 : r2 - 1,
              ArrowUp: r2 <= 0 ? a3.length - 1 : r2 - 1,
              Home: 0,
              End: a3.length - 1
            };
            if ("Escape" === t3.key) return void W(null);
            if ("Enter" === t3.key || " " === t3.key) {
              K && (t3.preventDefault(), et(K));
              return;
            }
            if (!(t3.key in i2)) return;
            t3.preventDefault();
            let l3 = a3[(i2[t3.key] + a3.length) % a3.length];
            if (!l3) return;
            W(l3);
            let s2 = e2.find((e3) => e3.id === l3);
            s2 && V(
              `${s2.label}, ${A.format(Q(s2))}, ${E.format(s2.value)}${n2 ? ` ${n2}` : ""}.`
            );
          },
          onBlur: () => W(null),
          children: e2.map((e3, t3) => {
            let a3 = Z[t3];
            return a3 ? (0, r.jsx)(
              v,
              {
                slice: a3,
                color: X(e3, t3),
                width: F,
                active: K === e3.id,
                dimmed: !!K && K !== e3.id,
                text: { name: e3.label, share: a3.share, formatter: A },
                reduceMotion: $2
              },
              e3.id
            ) : null;
          })
        }),
        (0, r.jsxs)(s.PY1.div, {
          className: h().lane,
          initial: false,
          animate: { height: 40 * !!ee.length },
          transition: $2 ? { duration: 0 } : m.T.spring.smooth,
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("svg", {
              className: h().leaders,
              width: "100%",
              height: 40,
              children: (0, r.jsx)(u.N, {
                initial: false,
                children: ee.map((e3) => {
                  let t3 = e3.x + e3.width / 2, a3 = `M${e3.anchor.toFixed(1)} 0 C${e3.anchor.toFixed(1)} 10 ${t3.toFixed(1)} 6 ${t3.toFixed(1)} 15`;
                  return (0, r.jsx)(
                    s.PY1.path,
                    {
                      className: h().leader,
                      "data-dimmed": K && K !== e3.id || void 0,
                      initial: { opacity: 0, d: a3 },
                      animate: { opacity: 1, d: a3 },
                      exit: { opacity: 0 },
                      transition: $2 ? { duration: 0 } : {
                        d: m.T.spring.smooth,
                        opacity: { duration: m.T.duration.fast }
                      }
                    },
                    e3.id
                  );
                })
              })
            }),
            (0, r.jsx)(u.N, {
              initial: false,
              children: ee.map((e3) => {
                let t3 = Z.find((t4) => t4.id === e3.id);
                return (0, r.jsxs)(
                  s.PY1.span,
                  {
                    className: h().outside,
                    "data-dimmed": K && K !== e3.id || void 0,
                    initial: { opacity: 0, x: e3.x, y: -4 },
                    animate: { opacity: 1, x: e3.x, y: 0 },
                    exit: { opacity: 0, y: -4 },
                    transition: $2 ? { duration: 0 } : {
                      ...m.T.spring.smooth,
                      opacity: { duration: m.T.duration.fast }
                    },
                    children: [
                      e3.name && (0, r.jsx)("span", {
                        className: h().outsideName,
                        children: e3.name
                      }),
                      (0, r.jsx)(y, {
                        value: t3?.share ?? 0,
                        formatter: A,
                        reduceMotion: $2
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          ]
        }),
        x2 && (0, r.jsx)("ul", {
          className: h().legend,
          "aria-label": `${en} segments`,
          children: e2.map((e3, t3) => {
            let a3 = !L.has(e3.id);
            return (0, r.jsx)(
              "li",
              {
                children: (0, r.jsxs)("button", {
                  type: "button",
                  className: h().legendItem,
                  "data-off": !a3 || void 0,
                  "data-active": K === e3.id || void 0,
                  "aria-pressed": a3,
                  "aria-label": `${e3.label}, ${a3 ? A.format(Q(e3)) : "hidden"}`,
                  style: { "--seg": X(e3, t3) },
                  onClick: () => et(e3.id),
                  onPointerEnter: (t4) => {
                    "mouse" === t4.pointerType && a3 && W(e3.id);
                  },
                  onPointerLeave: (e4) => {
                    "mouse" === e4.pointerType && W(null);
                  },
                  children: [
                    (0, r.jsxs)(
                      s.PY1.span,
                      {
                        className: h().legendLabel,
                        initial: { x: 0 },
                        animate: z?.id !== e3.id || $2 ? { x: 0 } : { x: [0, -3, 3, -2, 0] },
                        transition: {
                          duration: 0.32,
                          ease: m.T.ease.standard
                        },
                        children: [
                          (0, r.jsx)("span", {
                            className: h().swatch,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: h().legendName,
                            children: e3.label
                          })
                        ]
                      },
                      z?.id === e3.id ? z.key : 0
                    ),
                    (0, r.jsx)("span", {
                      className: h().legendShare,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(u.N, {
                        mode: "popLayout",
                        initial: false,
                        children: a3 ? (0, r.jsx)(
                          s.PY1.span,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: {
                              duration: $2 ? 0 : m.T.duration.fast
                            },
                            children: (0, r.jsx)(y, {
                              value: Q(e3),
                              formatter: A,
                              reduceMotion: $2
                            })
                          },
                          "on"
                        ) : (0, r.jsx)(
                          s.PY1.span,
                          {
                            className: h().legendOff,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: {
                              duration: $2 ? 0 : m.T.duration.fast
                            },
                            children: "Off"
                          },
                          "off"
                        )
                      })
                    })
                  ]
                })
              },
              e3.id
            );
          })
        }),
        (0, r.jsx)("p", {
          className: h().srOnly,
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: U
        })
      ]
    });
  }
  var N = a(87780), w = a.n(N);
  let M = [
    { value: "7d", label: "7 days" },
    { value: "30d", label: "30 days" },
    { value: "90d", label: "90 days" }
  ], $ = {
    "7d": [
      { id: "organic", label: "Organic search", value: 41280 },
      { id: "direct", label: "Direct", value: 24630 },
      { id: "paid", label: "Paid search", value: 18940 },
      { id: "social", label: "Social", value: 9870 },
      { id: "referral", label: "Referral", value: 3120 },
      { id: "other", label: "Other", value: 1460 }
    ],
    "30d": [
      { id: "organic", label: "Organic search", value: 168420 },
      { id: "direct", label: "Direct", value: 88910 },
      { id: "paid", label: "Paid search", value: 97350 },
      { id: "social", label: "Social", value: 51240 },
      { id: "referral", label: "Referral", value: 9870 },
      { id: "other", label: "Other", value: 5310 }
    ],
    "90d": [
      { id: "organic", label: "Organic search", value: 462900 },
      { id: "direct", label: "Direct", value: 301450 },
      { id: "paid", label: "Paid search", value: 214880 },
      { id: "social", label: "Social", value: 93700 },
      { id: "referral", label: "Referral", value: 38260 },
      { id: "other", label: "Other", value: 12940 }
    ]
  };
  function S() {
    let [e2, t2] = (0, i.useState)("7d");
    return (0, r.jsxs)("div", {
      className: w().demo,
      children: [
        (0, r.jsx)(l.A, {
          options: M,
          value: e2,
          onValueChange: t2,
          label: "Period"
        }),
        (0, r.jsx)(j, {
          title: "Traffic by source",
          description: "Sessions on northwind.shop",
          segments: $[e2] ?? [],
          unit: "sessions",
          totalLabel: "Total"
        })
      ]
    });
  }
  let k = S;
}

__m(__module,__exports,__require);
});
A.regCss(87780, ".demo{display:grid;width:100%;max-width:720px;gap:var(--space-6);justify-items:start;margin-inline:auto}\n.demo>:last-child{justify-self:stretch}", {"demo":"demo"});
A.cssFor("split-bar", [21894,87780]);
A.item("split-bar", {entry:73473, export:"SplitBarDemo", kind:"component", tier:"pro", unresolved:[]});
})();