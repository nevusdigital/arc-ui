/* skeleton-morph (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(12308, ".root,.shell{position:relative}\n.shell[data-easing]{overflow:hidden}\n.inner{display:flow-root}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.block{position:relative;max-width:100%}\n.block[data-state=skeleton]{flex-shrink:0}\n.block[data-state=content]{width:fit-content}\n.block[data-state=content] .placeholder{will-change:width,height,opacity}\n.block[data-state=skeleton] .line,.block[data-state=skeleton] .placeholder:not([data-lines]){animation:pulse 1.4s var(--ease-in-out) infinite alternate}\n@media (prefers-reduced-motion:reduce){.block[data-state=skeleton] .line,.block[data-state=skeleton] .placeholder{animation:none}\n.content{position:relative;z-index:1}\n.placeholder{position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;overflow:hidden;pointer-events:none;background:var(--surface-muted)}\n.placeholder[data-lines]{display:flex;flex-direction:column;background:none}\n.line{position:relative;flex:none;width:100%;height:var(--line,20px)}\n.line:before{content:\"\";position:absolute;top:50%;left:0;right:0;height:min(12px,calc(var(--line, 20px) - 6px));translate:0 -50%;border-radius:6px;background:var(--surface-muted)}\n.line[data-last]{width:62%}", {"root":"root","shell":"shell","inner":"inner","srOnly":"srOnly","block":"block","placeholder":"placeholder","line":"line","content":"content"});
A.reg(41189, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let l = {
    name: "rotate-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
          key: "1p45f6"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
    ]
  };
  l.node;
  let n = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.regCss(48732, ".demo{display:grid;grid-template-columns:minmax(0,1fr);min-height:500px;align-content:center;justify-items:center;gap:20px;padding:32px 16px;font-family:var(--font-body);letter-spacing:var(--tracking-body);color:var(--foreground)}\n.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,288px),1fr));gap:16px;width:min(100%,640px);align-items:start}\n.card{padding:20px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n.card>div>div{display:grid;gap:16px}\n.list>li>:last-child{margin-left:auto}\n.list{display:grid;gap:14px;margin:0;padding:0;list-style:none}\n.head{display:flex;align-items:center;gap:12px}\n.who{display:grid;gap:2px;min-width:0}\n.avatar{display:block;border-radius:50%;object-fit:cover}\n.name{margin:0;font-size:var(--text-base);font-weight:500;line-height:20px;white-space:nowrap}\n.role{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:18px;white-space:nowrap}\n.full{width:100%}\n.bio{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:20px}\n.foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px}\n.stats{margin:0;color:var(--text-muted);font-size:var(--text-sm);line-height:20px;white-space:nowrap}\n.stats span{color:var(--foreground);font-variant-numeric:tabular-nums}\n.follow{display:inline-grid;height:var(--control-height-sm);padding:0 14px;border:0;border-radius:var(--radius-control);background:var(--accent);color:var(--accent-foreground);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:20px;place-items:center;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.follow:active{transform:scale(.97)}\n.follow[data-on]{background:var(--surface-muted);color:var(--foreground)}\n.followLabel{grid-area:1/1;white-space:nowrap;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.followLabel[data-active]{opacity:1}\n.title{margin:0;font-size:var(--text-sm);font-weight:500;line-height:20px}\n.row{display:flex;align-items:center;gap:12px}\n.rowText{display:grid;flex:1;gap:2px;min-width:0}\n.rowName{margin:0;font-size:var(--text-sm);font-weight:500;line-height:18px;white-space:nowrap}\n.rowNote{margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;white-space:nowrap}\n.rowNote[data-scheduled]{color:var(--accent)}\n.amount{margin:0;font-size:var(--text-sm);line-height:18px;font-variant-numeric:tabular-nums}\n.reload{display:inline-flex;align-items:center;gap:8px;height:var(--control-height-sm);padding:0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.reload:active{transform:scale(.97)}\n.reload:disabled{opacity:.5;cursor:default}", {"demo":"demo","cards":"cards","card":"card","list":"list","head":"head","who":"who","avatar":"avatar","name":"name","role":"role","full":"full","bio":"bio","foot":"foot","stats":"stats","follow":"follow","followLabel":"followLabel","title":"title","row":"row","rowText":"rowText","rowName":"rowName","rowNote":"rowNote","amount":"amount","reload":"reload"});
A.reg(96257, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SkeletonMorphDemo: () => C });
  var i = a(95155), o = a(12115), r = a(5772), n = a(41189), s = a(18310), l = a(28245), d = a(55809), h = a(92171), c = a(25354), u = a(7770), m = a(12308), p = a.n(m);
  let g = (0, o.createContext)(null), f = () => () => {
  }, w = u.T.spring.smooth, _ = u.T.spring.smooth, b = [...u.T.ease.standard], j = (e2) => "number" == typeof e2 ? `${e2}px` : e2;
  function y({
    loading: e2,
    children: t2,
    stagger: a2 = 0.04,
    loadingLabel: r2 = "Loading",
    as: n2 = "div",
    className: u2,
    style: m2
  }) {
    let w2, b2 = (w2 = (0, o.useSyncExternalStore)(
      f,
      () => true,
      () => false
    ), !!(0, s.I)() && w2), j2 = (0, o.useRef)(/* @__PURE__ */ new Set()), v2 = (0, o.useCallback)(
      (e3) => (j2.current.add(e3), () => {
        j2.current.delete(e3);
      }),
      []
    ), k2 = (0, o.useCallback)((e3) => {
      if (!e3) return 0;
      let t3 = 0;
      for (let a3 of j2.current)
        a3 !== e3 && a3.compareDocumentPosition(e3) & Node.DOCUMENT_POSITION_FOLLOWING && (t3 += 1);
      return t3;
    }, []), x2 = (0, o.useMemo)(
      () => ({ loading: e2, reduced: b2, stagger: a2, register: v2, order: k2 }),
      [e2, k2, b2, v2, a2]
    ), N2 = (0, o.useRef)(null), A2 = (0, o.useRef)(null), C2 = (0, l.d)(-1), T = (0, d.G)(C2, (e3) => e3 < 0 ? "auto" : `${e3}px`);
    return (0, o.useLayoutEffect)(() => {
      let e3 = N2.current, t3 = A2.current;
      if (!e3 || !t3) return;
      let a3 = e3.offsetHeight, i2 = null, o2 = () => {
        C2.jump(-1), delete t3.dataset.easing;
      }, r3 = new ResizeObserver(() => {
        let r4 = e3.offsetHeight;
        if (r4 === a3) return;
        let n3 = 0 > C2.get() ? a3 : C2.get();
        (a3 = r4, i2?.stop(), b2 || 1 > Math.abs(r4 - n3)) ? o2() : (C2.jump(n3), t3.dataset.easing = "", i2 = (0, h.i)(C2, r4, { ..._, onComplete: o2 }));
      });
      return r3.observe(e3), () => {
        r3.disconnect(), i2?.stop();
      };
    }, [b2, C2]), (0, i.jsxs)(n2, {
      className: [p().root, u2].filter(Boolean).join(" "),
      style: m2,
      "aria-busy": e2 || void 0,
      children: [
        (0, i.jsx)("span", {
          className: p().srOnly,
          role: "status",
          children: e2 ? r2 : ""
        }),
        (0, i.jsx)(c.PY1.div, {
          ref: A2,
          className: p().shell,
          style: { height: T },
          children: (0, i.jsx)("div", {
            ref: N2,
            className: p().inner,
            children: (0, i.jsx)(g.Provider, { value: x2, children: t2 })
          })
        })
      ]
    });
  }
  function v({
    children: e2,
    width: t2 = "100%",
    height: a2,
    radius: r2 = 6,
    lines: n2,
    lineHeight: s2 = 20,
    as: l2 = "div",
    className: d2,
    style: m2
  }) {
    let f2 = (0, o.useContext)(g);
    if (!f2) throw Error("MorphBlock must be used inside SkeletonMorph");
    let { loading: _2, reduced: y2, stagger: k2, register: x2, order: N2 } = f2, A2 = (0, o.useRef)(null), C2 = (0, o.useRef)(null);
    (0, o.useEffect)(() => A2.current ? x2(A2.current) : void 0, [x2]);
    let [T, M] = (0, o.useState)(!_2);
    _2 && T && M(false);
    let S = T && !_2;
    (0, o.useEffect)(() => {
      if (_2) return;
      let e3 = y2 ? 0 : N2(A2.current) * k2 * 1e3, t3 = window.setTimeout(() => M(true), e3);
      return () => window.clearTimeout(t3);
    }, [_2, N2, y2, k2]);
    let O = "circle" === r2, P = n2 ?? 0, R = j(t2) ?? "100%", L = j(a2) ?? (P ? `${P * s2}px` : "12px"), E = (0, o.useRef)({ width: R, height: L });
    (0, o.useLayoutEffect)(() => {
      E.current = { width: R, height: L };
    }), (0, o.useLayoutEffect)(() => {
      let e3 = A2.current, t3 = C2.current;
      if (!e3 || !t3) return;
      if (!S) {
        let e4 = (0, h.i)(
          t3,
          { width: "100%", height: "100%", x: 0, y: 0, opacity: 1 },
          { duration: 0 }
        );
        return () => e4.stop();
      }
      if (y2) {
        let e4 = (0, h.i)(
          t3,
          { opacity: [1, 0] },
          { duration: u.T.duration.instant }
        );
        return () => e4.stop();
      }
      let a3 = e3.getBoundingClientRect(), { width: i2, height: o2 } = e3.style;
      e3.dataset.state = "skeleton", e3.style.width = E.current.width, e3.style.height = E.current.height;
      let r3 = e3.getBoundingClientRect();
      e3.dataset.state = "content", e3.style.width = i2, e3.style.height = o2;
      let n3 = (0, h.i)(
        t3,
        {
          width: [r3.width, a3.width],
          height: [r3.height, a3.height],
          x: [r3.left - a3.left, 0],
          y: [r3.top - a3.top, 0],
          opacity: [1, 0]
        },
        {
          width: w,
          height: w,
          x: w,
          y: w,
          opacity: { duration: 0.38, ease: b, delay: 0.06 }
        }
      );
      return () => n3.stop();
    }, [y2, S]);
    let z = S ? {} : { width: R, height: L }, H = { borderRadius: O ? 9999 : P ? 0 : j(r2), "--line": `${s2}px` };
    return (0, i.jsxs)(l2, {
      ref: A2,
      className: [p().block, d2].filter(Boolean).join(" "),
      "data-state": S ? "content" : "skeleton",
      style: { ...m2, ...z },
      children: [
        S && (0, i.jsx)(c.PY1.div, {
          className: p().content,
          initial: y2 ? { opacity: 0 } : { opacity: 0, filter: `blur(${u.T.blur.soft}px)` },
          animate: { opacity: 1, filter: "blur(0px)" },
          transition: { duration: y2 ? u.T.duration.instant : 0.34, ease: b },
          children: e2
        }),
        (0, i.jsx)("span", {
          ref: C2,
          className: p().placeholder,
          "aria-hidden": "true",
          "data-lines": P || void 0,
          style: H,
          children: P > 0 && Array.from(
            { length: P },
            (e3, t3) => (0, i.jsx)(
              "span",
              {
                className: p().line,
                "data-last": t3 === P - 1 && P > 1 || void 0
              },
              t3
            )
          )
        })
      ]
    });
  }
  var k = a(67752), x = a(48732), N = a.n(x);
  let A = [
    {
      id: "marcus-johnson",
      name: "Marcus Johnson",
      note: "Paid today",
      amount: "$1,240"
    },
    {
      id: "chloe-nguyen",
      name: "Chloe Nguyen",
      note: "Paid Sep 22",
      amount: "$860"
    },
    {
      id: "daniel-kim",
      name: "Daniel Kim",
      note: "Scheduled Sep 30",
      amount: "$2,115"
    }
  ];
  function C() {
    let [e2, t2] = (0, o.useState)(true), [a2, s2] = (0, o.useState)(false);
    return (0, o.useEffect)(() => {
      if (!e2) return;
      let a3 = window.setTimeout(() => t2(false), 1500);
      return () => window.clearTimeout(a3);
    }, [e2]), (0, i.jsxs)("div", {
      className: N().demo,
      children: [
        (0, i.jsxs)("div", {
          className: N().cards,
          children: [
            (0, i.jsxs)(y, {
              loading: e2,
              className: N().card,
              loadingLabel: "Loading profile",
              children: [
                (0, i.jsxs)("div", {
                  className: N().head,
                  children: [
                    (0, i.jsx)(v, {
                      radius: "circle",
                      width: 52,
                      height: 52,
                      children: (0, i.jsx)(r.default, {
                        src: (0, k.my)("jasmine-brooks"),
                        alt: "",
                        width: 52,
                        height: 52,
                        className: N().avatar
                      })
                    }),
                    (0, i.jsxs)("div", {
                      className: N().who,
                      children: [
                        (0, i.jsx)(v, {
                          width: 124,
                          lines: 1,
                          lineHeight: 20,
                          children: (0, i.jsx)("p", {
                            className: N().name,
                            children: "Jasmine Brooks"
                          })
                        }),
                        (0, i.jsx)(v, {
                          width: 164,
                          lines: 1,
                          lineHeight: 18,
                          children: (0, i.jsx)("p", {
                            className: N().role,
                            children: "Design lead at Northwind"
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsx)(v, {
                  lines: 3,
                  lineHeight: 20,
                  className: N().full,
                  children: (0, i.jsx)("p", {
                    className: N().bio,
                    children: "Designs calm tools for busy teams. Currently rebuilding the Northwind scheduling flow."
                  })
                }),
                (0, i.jsxs)("div", {
                  className: N().foot,
                  children: [
                    (0, i.jsx)(v, {
                      width: 169,
                      lines: 1,
                      lineHeight: 20,
                      children: (0, i.jsxs)("p", {
                        className: N().stats,
                        children: [
                          (0, i.jsx)("span", { children: "2.4k" }),
                          " followers \xB7 ",
                          (0, i.jsx)("span", { children: "184" }),
                          " posts"
                        ]
                      })
                    }),
                    (0, i.jsx)(v, {
                      width: 90,
                      height: 36,
                      radius: 18,
                      children: (0, i.jsxs)("button", {
                        type: "button",
                        className: N().follow,
                        "data-on": a2 || void 0,
                        "aria-pressed": a2,
                        onClick: () => s2((e3) => !e3),
                        children: [
                          (0, i.jsx)("span", {
                            className: N().followLabel,
                            "data-active": !a2 || void 0,
                            "aria-hidden": a2,
                            children: "Follow"
                          }),
                          (0, i.jsx)("span", {
                            className: N().followLabel,
                            "data-active": a2 || void 0,
                            "aria-hidden": !a2,
                            children: "Following"
                          })
                        ]
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)(y, {
              loading: e2,
              className: N().card,
              loadingLabel: "Loading payouts",
              stagger: 0.035,
              children: [
                (0, i.jsx)(v, {
                  width: 100,
                  lines: 1,
                  lineHeight: 20,
                  children: (0, i.jsx)("p", {
                    className: N().title,
                    children: "Recent payouts"
                  })
                }),
                (0, i.jsx)("ul", {
                  className: N().list,
                  children: A.map(
                    (e3) => (0, i.jsxs)(
                      "li",
                      {
                        className: N().row,
                        children: [
                          (0, i.jsx)(v, {
                            radius: "circle",
                            width: 36,
                            height: 36,
                            children: (0, i.jsx)(r.default, {
                              src: (0, k.my)(e3.id),
                              alt: "",
                              width: 36,
                              height: 36,
                              className: N().avatar
                            })
                          }),
                          (0, i.jsxs)("div", {
                            className: N().rowText,
                            children: [
                              (0, i.jsx)(v, {
                                width: 104,
                                lines: 1,
                                lineHeight: 18,
                                children: (0, i.jsx)("p", {
                                  className: N().rowName,
                                  children: e3.name
                                })
                              }),
                              (0, i.jsx)(v, {
                                width: 76,
                                lines: 1,
                                lineHeight: 16,
                                children: (0, i.jsx)("p", {
                                  className: N().rowNote,
                                  "data-scheduled": e3.note.startsWith("Scheduled") || void 0,
                                  children: e3.note
                                })
                              })
                            ]
                          }),
                          (0, i.jsx)(v, {
                            width: 44,
                            lines: 1,
                            lineHeight: 18,
                            children: (0, i.jsx)("p", {
                              className: N().amount,
                              children: e3.amount
                            })
                          })
                        ]
                      },
                      e3.id
                    )
                  )
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("button", {
          type: "button",
          className: N().reload,
          onClick: () => t2(true),
          disabled: e2,
          children: [
            (0, i.jsx)(n.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            "Reload"
          ]
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("skeleton-morph", [12308,48732]);
A.item("skeleton-morph", {entry:96257, export:"SkeletonMorphDemo", kind:"component", tier:"pro", unresolved:[]});
})();