/* glass-card (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(39681, ".demo{width:100%;max-width:360px;margin-inline:auto;padding-block:8px;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n@media (min-width:385px) and (max-width:480px){.demo{max-width:min(300px,84%)}\n.rating{display:inline-flex;align-items:center;gap:4px}\n.star{color:var(--accent);fill:currentColor}\n.bio{margin:0 0 14px;color:var(--text-secondary);line-height:var(--leading-body)}\n.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 0 14px}\n.stats div{display:grid;gap:1px}\n.stats dt{color:var(--text-muted);font-size:var(--text-xs)}\n.stats dd{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;font-variant-numeric:tabular-nums}\n.actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.primary,.secondary{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:var(--control-height-md);padding-inline:12px;border:0;border-radius:var(--radius-control);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.primary{background:var(--accent);color:var(--accent-foreground)}\n.primary[data-on]{background:color-mix(in oklab,var(--accent) 16%,transparent);color:color-mix(in oklab,var(--accent) 80%,var(--foreground))}\n.primary:active,.secondary:active{transform:scale(.97)}\n.secondary{background:color-mix(in oklab,var(--foreground) 8%,transparent);color:var(--foreground)}\n.secondary[data-on]{color:var(--text-secondary)}", {"demo":"demo","rating":"rating","star":"star","bio":"bio","stats":"stats","actions":"actions","primary":"primary","secondary":"secondary"});
A.reg(61647, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { GlassCardDemo: () => k, default: () => x });
  var s = i(95155), t = i(12115), n = i(95697), l = i(64577), o = i(18310), r = i(28245), d = i(22535), c = i(25354), h = i(57700), g = i(80642), m = i(7770), p = i(83146), u = i.n(p);
  let w = m.T.spring.morph, b = { stiffness: 260, damping: 24, mass: 0.6 };
  function f({
    image: e2,
    imageAlt: a2,
    title: i2,
    subtitle: n2,
    aside: l2,
    children: p2,
    open: j2,
    defaultOpen: v2 = false,
    onOpenChange: _2,
    tilt: y2 = 6,
    className: k2,
    style: x2
  }) {
    let A = !!(0, o.I)(), N = (0, t.useId)(), C = `${N}-detail`, [z, M] = (0, t.useState)(v2), T = j2 ?? z, P = (0, t.useRef)(null), R = (0, t.useRef)(null), D = (0, t.useCallback)(
      (e3) => {
        void 0 === j2 && M(e3), _2?.(e3);
      },
      [j2, _2]
    ), B = (0, t.useRef)(null), F = (0, r.d)(-400), L = (0, r.d)(-400), S = (0, d.z)(0, b), W = (0, d.z)(0, b), X = (0, d.z)(0, { stiffness: 200, damping: 30 }), E = (0, t.useCallback)(() => {
      S.set(0), W.set(0), X.set(0);
    }, [S, W, X]);
    (0, t.useEffect)(() => {
      T && E();
    }, [T, E]);
    let Y = A ? { duration: 0 } : w;
    return (0, s.jsxs)(c.PY1.div, {
      ref: P,
      className: [u().root, k2].filter(Boolean).join(" "),
      style: { ...x2, rotateX: S, rotateY: W, transformPerspective: 900 },
      "data-open": T || void 0,
      onPointerMove: (e3) => {
        let a3 = P.current, i3 = B.current;
        if (!a3 || !i3 || "touch" === e3.pointerType) return;
        let s2 = a3.getBoundingClientRect(), t2 = i3.getBoundingClientRect(), n3 = Math.min(1, Math.max(0, (e3.clientX - s2.left) / s2.width)), l3 = Math.min(1, Math.max(0, (e3.clientY - s2.top) / s2.height));
        F.set(e3.clientX - t2.left), L.set(e3.clientY - t2.top), X.set(1), A || T || y2 <= 0 || (W.set((n3 - 0.5) * 2 * y2), S.set((0.5 - l3) * 2 * y2));
      },
      onPointerLeave: E,
      onClick: (e3) => {
        let a3 = e3.target;
        a3.closest("[data-glass-card-detail]") || a3.closest("[data-glass-card-toggle]") || D(!T);
      },
      onKeyDown: (e3) => {
        "Escape" === e3.key && T && (e3.preventDefault(), D(false), R.current?.focus());
      },
      children: [
        (0, s.jsx)("img", {
          src: e2,
          alt: a2,
          className: u().image,
          draggable: false
        }),
        (0, s.jsx)("div", { className: u().scrim, "aria-hidden": true }),
        (0, s.jsx)(h.o, {
          id: N,
          children: (0, s.jsxs)(c.PY1.div, {
            ref: B,
            layout: true,
            transition: Y,
            className: u().panel,
            style: { "--gx": F, "--gy": L, "--glare": X, borderRadius: 22 },
            children: [
              (0, s.jsx)("span", { className: u().edge, "aria-hidden": true }),
              (0, s.jsxs)(c.PY1.button, {
                ref: R,
                layout: "position",
                transition: Y,
                type: "button",
                className: u().header,
                "data-glass-card-toggle": true,
                "aria-expanded": T,
                "aria-controls": C,
                onClick: () => D(!T),
                children: [
                  (0, s.jsxs)("span", {
                    className: u().titles,
                    children: [
                      (0, s.jsx)("span", { className: u().title, children: i2 }),
                      n2 ? (0, s.jsx)("span", {
                        className: u().subtitle,
                        children: n2
                      }) : null
                    ]
                  }),
                  l2 ? (0, s.jsx)("span", { className: u().aside, children: l2 }) : null
                ]
              }),
              (0, s.jsx)(g.N, {
                initial: false,
                mode: "popLayout",
                children: T ? (0, s.jsx)(
                  c.PY1.div,
                  {
                    id: C,
                    layout: "position",
                    transition: Y,
                    className: u().detail,
                    "data-glass-card-detail": true,
                    initial: A ? { opacity: 0 } : {
                      opacity: 0,
                      y: 10,
                      filter: `blur(${m.T.blur.soft}px)`
                    },
                    animate: A ? { opacity: 1 } : {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { ...w, delay: 0.06 }
                    },
                    exit: A ? { opacity: 0 } : {
                      opacity: 0,
                      y: 6,
                      filter: `blur(${m.T.blur.subtle}px)`,
                      transition: {
                        duration: m.T.duration.instant,
                        ease: m.T.ease.standard
                      }
                    },
                    children: p2
                  },
                  "detail"
                ) : null
              })
            ]
          })
        })
      ]
    });
  }
  var j = i(67752), v = i(39681), _ = i.n(v);
  let y = (0, j.MV)("jasmine-brooks");
  function k() {
    let [e2, a2] = (0, t.useState)(false), [i2, o2] = (0, t.useState)(false);
    return (0, s.jsx)("div", {
      className: _().demo,
      children: (0, s.jsxs)(f, {
        image: (0, j.o4)("jasmine-brooks"),
        imageAlt: `Portrait of ${y.name}`,
        title: y.name,
        subtitle: "Design lead, Lisbon",
        aside: (0, s.jsxs)("span", {
          className: _().rating,
          children: [
            (0, s.jsx)(n.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": true,
              className: _().star
            }),
            "4.9"
          ]
        }),
        children: [
          (0, s.jsx)("p", {
            className: _().bio,
            children: "Leads design systems at Meridian. Mentors on motion, type, and shipping small teams fast."
          }),
          (0, s.jsxs)("dl", {
            className: _().stats,
            children: [
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("dt", { children: "Sessions" }),
                  (0, s.jsx)("dd", { children: "128" })
                ]
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("dt", { children: "Followers" }),
                  (0, s.jsx)("dd", { children: e2 ? "12.5k" : "12.4k" })
                ]
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("dt", { children: "Replies in" }),
                  (0, s.jsx)("dd", { children: "2 h" })
                ]
              })
            ]
          }),
          (0, s.jsxs)("div", {
            className: _().actions,
            children: [
              (0, s.jsx)("button", {
                type: "button",
                className: _().primary,
                "data-on": e2 || void 0,
                "aria-pressed": e2,
                onClick: () => a2((e3) => !e3),
                children: e2 ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(l.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    "Following"
                  ]
                }) : "Follow"
              }),
              (0, s.jsx)("button", {
                type: "button",
                className: _().secondary,
                "data-on": i2 || void 0,
                "aria-pressed": i2,
                onClick: () => o2((e3) => !e3),
                children: i2 ? "Requested" : "Book a session"
              })
            ]
          })
        ]
      })
    });
  }
  let x = k;
}

__m(__module,__exports,__require);
});
A.regCss(83146, ".root{--glass-highlight:oklch(100% 0 0/.5);--glass-edge:oklch(100% 0 0/.42);position:relative;isolation:isolate;overflow:hidden;width:100%;aspect-ratio:4/5;border-radius:var(--radius-surface);background:var(--surface-muted);box-shadow:var(--shadow-floating);cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body);will-change:transform}\n:root[data-theme=dark] .root{--glass-highlight:oklch(100% 0 0/.12);--glass-edge:oklch(100% 0 0/.14)}\n.root[data-open] .image{transform:scale(1.05)}\n.root[data-open] .scrim{opacity:1}\n.image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.001);transition:transform var(--duration-considered) var(--ease-standard);pointer-events:none}\n.scrim{position:absolute;inset:0;background:linear-gradient(0deg,oklch(0 0 0/.22),transparent 45%);opacity:.6;pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard)}\n.panel{position:absolute;left:12px;right:12px;bottom:12px;z-index:1;overflow:hidden;max-height:calc(100% - 24px);border:1px solid var(--glass-edge);background:color-mix(in oklab,var(--surface) 62%,transparent);-webkit-backdrop-filter:blur(22px) saturate(1.7);backdrop-filter:blur(22px) saturate(1.7);box-shadow:inset 0 1px 0 var(--glass-highlight),0 12px 32px oklch(0 0 0/.16),0 2px 6px oklch(0 0 0/.08);cursor:default}\n.edge,.panel:before{position:absolute;inset:0;border-radius:inherit;opacity:var(--glare,0);pointer-events:none}\n.panel:before{content:\"\";background:radial-gradient(240px circle at calc(var(--gx, -400) * 1px) calc(var(--gy, -400) * 1px),oklch(100% 0 0/.14),transparent 70%)}\n@media (prefers-reduced-transparency:reduce){.panel{background:var(--surface);-webkit-backdrop-filter:none;backdrop-filter:none}\n.edge{z-index:2;padding:1px;background:radial-gradient(160px circle at calc(var(--gx, -400) * 1px) calc(var(--gy, -400) * 1px),oklch(100% 0 0/.95),oklch(100% 0 0/0) 70%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}\n.header{position:relative;z-index:1;display:flex;align-items:center;gap:12px;width:100%;padding:14px 16px;border:0;background:none;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.titles{display:grid;flex:1;min-width:0;gap:1px}\n.title{font-size:var(--text-base);font-weight:500}\n.subtitle,.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.subtitle{color:var(--text-secondary);font-size:var(--text-sm)}\n.aside{flex:none;color:var(--foreground);font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums}\n.detail{position:relative;z-index:1;padding:0 16px 16px;color:var(--text-secondary);font-size:var(--text-sm)}", {"root":"root","image":"image","scrim":"scrim","panel":"panel","edge":"edge","header":"header","titles":"titles","title":"title","subtitle":"subtitle","aside":"aside","detail":"detail"});
A.reg(95697, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var n = a(51811);
  let r = {
    name: "star",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
          key: "r04s7s"
        }
      ]
    ]
  };
  r.node;
  let i = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.cssFor("glass-card", [39681,83146]);
A.item("glass-card", {entry:61647, export:"GlassCardDemo", kind:"component", tier:"pro", unresolved:[]});
})();