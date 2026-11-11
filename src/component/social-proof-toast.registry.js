/* social-proof-toast (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(2887, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { SocialProofToastDemo: () => j, default: () => k });
  var i = t(95155), s = t(12115), o = t(18310), n = t(80642), r = t(25354), l = t(34779), d = t(9005), c = t(67752);
  let h = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    focusable: false
  }, m = [
    {
      id: "sofia",
      name: "Sofia",
      action: "started a Pro trial",
      meta: "Madrid",
      time: "2 min ago",
      avatar: (0, c.my)("sofia-ramirez")
    },
    {
      id: "linear",
      name: "Linear",
      action: "upgraded to Business",
      meta: "48 seats",
      time: "4 min ago",
      logo: (0, i.jsx)(function(e2) {
        return (0, i.jsx)("svg", {
          ...h,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
          })
        });
      }, {}),
      verified: true
    },
    {
      id: "daniel",
      name: "Daniel",
      action: "subscribed to Pro yearly",
      meta: "Seoul",
      time: "7 min ago",
      avatar: (0, c.my)("daniel-kim"),
      verified: true
    },
    {
      id: "vercel",
      name: "Vercel",
      action: "added 12 seats to Team",
      meta: "San Francisco",
      time: "11 min ago",
      logo: (0, i.jsx)(function(e2) {
        return (0, i.jsx)("svg", {
          ...h,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "m12 1.608 12 20.784H0Z",
            transform: "translate(12 13) scale(.86) translate(-12 -12)"
          })
        });
      }, {}),
      verified: true
    },
    {
      id: "chloe",
      name: "Chloe",
      action: "booked a product demo",
      meta: "Melbourne",
      time: "14 min ago",
      avatar: (0, c.my)("chloe-nguyen")
    },
    {
      id: "supabase",
      name: "Supabase",
      action: "moved to annual billing",
      meta: "Enterprise",
      time: "18 min ago",
      logo: (0, i.jsx)(function(e2) {
        return (0, i.jsx)("svg", {
          ...h,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
          })
        });
      }, {}),
      verified: true
    },
    {
      id: "hannah",
      name: "Hannah",
      action: "started a Pro trial",
      meta: "Dublin",
      time: "21 min ago",
      avatar: (0, c.my)("hannah-walsh")
    },
    {
      id: "raycast",
      name: "Raycast",
      action: "upgraded to Business",
      meta: "32 seats",
      time: "26 min ago",
      logo: (0, i.jsx)(function(e2) {
        return (0, i.jsx)("svg", {
          ...h,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252-1.252-3.312-3.32V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251-1.253Zm10.655 10.655-1.247 1.251 1.342 1.343 1.253-1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25-1.252z"
          })
        });
      }, {}),
      verified: true
    },
    {
      id: "mateo",
      name: "Mateo",
      action: "invited 6 teammates",
      meta: "Buenos Aires",
      time: "30 min ago",
      avatar: (0, c.my)("mateo-alvarez")
    },
    {
      id: "resend",
      name: "Resend",
      action: "renewed Enterprise",
      meta: "Annual plan",
      time: "34 min ago",
      logo: (0, i.jsx)(function(e2) {
        return (0, i.jsx)("svg", {
          ...h,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M14.679 0c4.648 0 7.413 2.765 7.413 6.434s-2.765 6.434-7.413 6.434H12.33L24 24h-8.245l-8.88-8.44c-.636-.588-.93-1.273-.93-1.86 0-.831.587-1.565 1.713-1.883l4.574-1.224c1.737-.465 2.936-1.81 2.936-3.572 0-2.153-1.761-3.4-3.939-3.4H0V0z",
            transform: "translate(12 12) scale(.88) translate(-12 -12)"
          })
        });
      }, {}),
      verified: true
    }
  ];
  var p = t(49296), g = t.n(p);
  let u = { type: "spring", visualDuration: 0.24, bounce: 0 }, f = [0.22, 1, 0.36, 1];
  function v({
    events: e2 = m,
    interval: a2 = 4e3,
    initialDelay: t2 = 800,
    maxVisible: l2 = 3,
    prefill: d2 = 0,
    position: c2 = "inline",
    expandOnHover: h2 = true,
    loop: p2 = true,
    limit: b2,
    paused: y2 = false,
    onShow: j2,
    onDismiss: k2,
    onSelect: x,
    label: _ = "Recent activity",
    className: A
  }) {
    let M = (0, o.I)() ?? false, S = Math.max(1, Math.floor(l2)), N = (0, s.useRef)(null), C = (0, s.useRef)(e2), L = (0, s.useRef)(j2);
    (0, s.useEffect)(() => {
      C.current = e2, L.current = j2;
    });
    let z = Math.min(Math.max(0, Math.floor(d2)), e2.length, S, b2 ?? 1 / 0), [D, $] = (0, s.useState)(
      () => e2.slice(0, z).map((e3, a3) => ({ key: `${e3.id}-p${a3}`, event: e3 })).reverse()
    ), R = (0, s.useRef)(z), T = (0, s.useRef)(z), E = (0, s.useRef)(0), [H, B] = (0, s.useState)(false), [P, Z] = (0, s.useState)(0), [O, W] = (0, s.useState)(false), [I, F] = (0, s.useState)(false), [K, V] = (0, s.useState)(true), [q, J] = (0, s.useState)(true), [Q, Y] = (0, s.useState)(""), U = (0, s.useCallback)(() => {
      let e3 = C.current;
      if (!e3.length) return;
      if (!p2 && R.current >= e3.length || void 0 !== b2 && T.current >= b2)
        return void B(true);
      let a3 = e3[R.current % e3.length];
      R.current += 1, T.current += 1;
      let t3 = `${a3.id}-${E.current++}`;
      $((e4) => [{ key: t3, event: a3 }, ...e4].slice(0, S + 1)), L.current?.(a3);
    }, [p2, b2, S]);
    (0, s.useEffect)(() => {
      let e3 = N.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let a3 = new IntersectionObserver(([e4]) => V(e4.isIntersecting), {
        rootMargin: "120px"
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, s.useEffect)(() => {
      let e3 = () => J("hidden" !== document.visibilityState);
      return e3(), document.addEventListener("visibilitychange", e3), () => document.removeEventListener("visibilitychange", e3);
    }, []);
    let G = (0, s.useRef)(z > 0 ? a2 : t2), X = O || I, ee = !H && !y2 && !X && K && q && e2.length > 0;
    (0, s.useEffect)(() => {
      if (!ee) return;
      let e3 = performance.now(), t3 = false, i2 = window.setTimeout(() => {
        t3 = true, G.current = a2, U(), Z((e4) => e4 + 1);
      }, G.current);
      return () => {
        window.clearTimeout(i2), t3 || (G.current = Math.max(1200, G.current - (performance.now() - e3)));
      };
    }, [ee, P, a2, U]);
    let ea = (0, s.useCallback)(
      (e3) => {
        let a3 = D.findIndex((a4) => a4.key === e3);
        if (a3 < 0) return;
        let t3 = D[a3], i2 = N.current, s2 = !!i2?.querySelector(`[data-key="${CSS.escape(e3)}"]`)?.contains(document.activeElement);
        if ($((a4) => a4.filter((a5) => a5.key !== e3)), Y(`Dismissed: ${t3.event.name} ${t3.event.action}`), k2?.(t3.event), s2 && i2) {
          let a4 = D.slice(0, S).find((a5) => a5.key !== e3);
          ((a4 ? i2.querySelector(
            `[data-key="${CSS.escape(a4.key)}"] [data-dismiss]`
          ) : null) ?? i2).focus({ preventScroll: true });
        }
      },
      [D, S, k2]
    ), et = h2 && X && D.length > 1, ei = "top-left" === c2 || "top-right" === c2, es = ei ? 1 : -1, eo = M ? { duration: 0.16, y: { duration: 0 }, scale: { duration: 0 } } : { ...u, opacity: { duration: 0.16, ease: f } };
    return (0, i.jsxs)("section", {
      ref: N,
      "aria-label": _,
      tabIndex: -1,
      className: [g().root, A].filter(Boolean).join(" "),
      "data-position": c2,
      "data-anchor": ei ? "top" : "bottom",
      "data-expanded": et || void 0,
      style: {
        "--toast-h": "64px",
        "--toast-gap": "8px",
        height: 64 + 10 * (S - 1)
      },
      onPointerEnter: (e3) => {
        "touch" !== e3.pointerType && W(true);
      },
      onPointerLeave: () => W(false),
      onFocus: () => F(true),
      onBlur: (e3) => {
        e3.currentTarget.contains(e3.relatedTarget) || F(false);
      },
      onKeyDown: (e3) => {
        if ("Escape" !== e3.key || !D.length) return;
        let a3 = e3.target.closest("[data-key]")?.dataset.key;
        e3.preventDefault(), ea(a3 ?? D[0].key);
      },
      children: [
        (0, i.jsx)("ol", {
          className: g().list,
          children: (0, i.jsx)(n.N, {
            initial: false,
            children: D.map((e3, a3) => {
              let t3 = a3 < S, s2 = et ? es * a3 * 72 : es * a3 * 10, o2 = et ? 1 : 1 - 0.05 * Math.min(a3, S);
              return (0, i.jsx)(
                r.PY1.li,
                {
                  "data-key": e3.key,
                  className: g().item,
                  "data-front": 0 === a3 || void 0,
                  "data-dim": !et && a3 > 0 || void 0,
                  "aria-hidden": !t3 || void 0,
                  inert: !t3,
                  initial: { opacity: 0, y: M ? 0 : -(16 * es), scale: 1 },
                  animate: { opacity: +!!t3, y: s2, scale: o2 },
                  exit: {
                    opacity: 0,
                    scale: M ? o2 : o2 - 0.04,
                    transition: { duration: M ? 0.12 : 0.16, ease: f }
                  },
                  transition: eo,
                  style: {
                    zIndex: 100 - a3,
                    transformOrigin: ei ? "50% 100%" : "50% 0%"
                  },
                  children: (0, i.jsx)(w, {
                    event: e3.event,
                    onDismiss: () => ea(e3.key),
                    onSelect: x
                  })
                },
                e3.key
              );
            })
          })
        }),
        (0, i.jsx)("span", {
          className: g().srOnly,
          role: "status",
          "aria-live": "polite",
          children: Q
        })
      ]
    });
  }
  function w({ event: e2, onDismiss: a2, onSelect: t2 }) {
    let s2 = (function(e3) {
      if (void 0 === e3 || "string" == typeof e3) return e3;
      let a3 = Math.max(
        0,
        (Date.now() - (e3 instanceof Date ? e3.getTime() : e3)) / 1e3
      );
      if (a3 < 45) return "Just now";
      let t3 = Math.round(a3 / 60);
      if (t3 < 60) return `${t3} min ago`;
      let i2 = Math.round(t3 / 60);
      return i2 < 24 ? `${i2} h ago` : `${Math.round(i2 / 24)} d ago`;
    })(e2.time), o2 = [e2.meta, s2].filter(Boolean).join(" \xB7 "), n2 = e2.verified ? "string" == typeof e2.verified ? e2.verified : "Verified" : null, r2 = `${e2.name} ${e2.action}`;
    return (0, i.jsxs)("div", {
      className: g().card,
      "data-selectable": !!t2 || void 0,
      children: [
        (0, i.jsxs)("div", {
          className: g().content,
          children: [
            (0, i.jsx)("span", {
              className: g().visual,
              children: e2.avatar ? (0, i.jsx)("img", {
                src: e2.avatar,
                alt: "",
                width: 36,
                height: 36,
                draggable: false
              }) : e2.logo ?? (0, i.jsx)("span", {
                className: g().initials,
                children: e2.name.split(/\s+/).map((e3) => e3[0]).join("").slice(0, 2).toUpperCase()
              })
            }),
            (0, i.jsxs)("span", {
              className: g().text,
              children: [
                (0, i.jsxs)("span", {
                  className: g().title,
                  children: [
                    (0, i.jsx)("span", {
                      className: g().name,
                      children: e2.name
                    }),
                    " ",
                    e2.action
                  ]
                }),
                (0, i.jsxs)("span", {
                  className: g().meta,
                  children: [
                    e2.meta && (0, i.jsx)("span", {
                      className: g().metaText,
                      children: e2.meta
                    }),
                    e2.meta && s2 && (0, i.jsx)("span", {
                      className: g().dot,
                      "aria-hidden": true,
                      children: "\xB7"
                    }),
                    s2 && (0, i.jsx)("span", {
                      className: g().time,
                      suppressHydrationWarning: true,
                      children: s2
                    }),
                    o2 && n2 && (0, i.jsx)("span", {
                      className: g().dot,
                      "aria-hidden": true,
                      children: "\xB7"
                    }),
                    n2 && (0, i.jsxs)("span", {
                      className: g().verified,
                      children: [
                        (0, i.jsx)(l.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": true
                        }),
                        n2
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        t2 && (0, i.jsx)("button", {
          type: "button",
          className: g().hit,
          "aria-label": `${r2}${o2 ? `, ${o2}` : ""}`,
          onClick: () => t2(e2)
        }),
        (0, i.jsx)("button", {
          type: "button",
          className: g().dismiss,
          "data-dismiss": true,
          "aria-label": `Dismiss: ${r2}`,
          onClick: a2,
          children: (0, i.jsx)(d.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": true
          })
        })
      ]
    });
  }
  var b = t(13326), y = t.n(b);
  function j() {
    return (0, i.jsx)("div", {
      className: y().demo,
      children: (0, i.jsx)(v, { prefill: 2, interval: 3200 })
    });
  }
  let k = j;
}

__m(__module,__exports,__require);
});
A.regCss(13326, ".demo{display:flex;align-items:flex-end;justify-content:center;width:100%;min-height:300px;padding:140px 16px 24px;box-sizing:border-box}", {"demo":"demo"});
A.reg(34779, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "badge-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
    ],
    aliases: ["verified"]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.regCss(49296, ".root{position:relative;width:min(360px,100%);flex:none;font-family:var(--font-sans,Inter,system-ui,sans-serif);-webkit-tap-highlight-color:transparent}\n.root[data-position=bottom-left],.root[data-position=bottom-right],.root[data-position=top-left],.root[data-position=top-right]{position:fixed;z-index:60;width:min(360px,calc(100vw - 32px))}\n.root[data-position=bottom-left]{left:24px;bottom:24px}\n.root[data-position=bottom-right]{right:24px;bottom:24px}\n.root[data-position=top-left]{left:24px;top:24px}\n.root[data-position=top-right]{right:24px;top:24px}\n@media (max-width:480px){.root[data-position=bottom-left],.root[data-position=bottom-right]{left:16px;right:16px;bottom:16px;width:auto}\n.root[data-position=top-left],.root[data-position=top-right]{left:16px;right:16px;top:16px;width:auto}\n.root[data-anchor=top] .item{top:0;bottom:auto}\n.root[data-anchor=top] .item:after{top:auto;bottom:100%}\n.root:not([data-expanded]) .item:after{display:none}\n.item[data-front] .card,.root[data-expanded] .card{box-shadow:var(--shadow-floating)}\n.list{position:absolute;inset:0;margin:0;padding:0;list-style:none}\n.item{position:absolute;left:0;right:0;bottom:0;height:var(--toast-h);will-change:transform,opacity}\n.item:after{content:\"\";position:absolute;left:0;right:0;top:100%;height:var(--toast-gap)}\n.item[data-dim] .content{opacity:0}\n.dismiss:focus-visible,.item:hover .dismiss{opacity:1}\n.card{position:relative;display:flex;align-items:center;height:100%;padding:0 44px 0 13px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-raised);transition:box-shadow .16s ease-out,background-color .12s ease-out}\n.card[data-selectable]:hover{background:color-mix(in oklab,var(--surface-raised),var(--foreground) 3%)}\n@media (prefers-reduced-motion:reduce){.card,.content,.dismiss{transition-duration:0s}\n.content{display:flex;align-items:center;gap:12px;min-width:0;flex:1;transition:opacity .16s ease-out}\n.visual{position:relative;display:grid;place-items:center;flex:none;width:36px;height:36px;overflow:hidden;border-radius:999px;background:var(--surface-muted);color:var(--foreground)}\n.visual:after{content:\"\";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--foreground) 9%,transparent);pointer-events:none}\n.visual img{display:block;width:100%;height:100%;object-fit:cover}\n.visual svg{width:18px;height:18px}\n.initials{font-size:12px;line-height:16px;font-weight:500;color:var(--text-secondary)}\n.text{display:flex;flex-direction:column;gap:2px;min-width:0}\n.title{overflow:hidden;font-size:14px;line-height:20px;color:var(--text-secondary);white-space:nowrap;text-overflow:ellipsis}\n.name{font-weight:500;color:var(--foreground)}\n.meta{display:flex;align-items:center;gap:4px;min-width:0;font-size:12px;line-height:16px;color:var(--text-muted);white-space:nowrap}\n.metaText{overflow:hidden;min-width:0;text-overflow:ellipsis}\n.dot,.time{flex:none}\n.verified{display:inline-flex;align-items:center;gap:4px;flex:none;color:var(--text-secondary)}\n.verified svg{flex:none;color:var(--accent)}\n.hit{position:absolute;inset:0;z-index:1;padding:0;border:0;border-radius:inherit;background:transparent;cursor:pointer}\n.dismiss{position:absolute;top:50%;right:12px;z-index:2;display:grid;place-items:center;width:24px;height:24px;margin-top:-12px;padding:0;border:0;border-radius:999px;background:transparent;color:var(--text-muted);cursor:pointer;opacity:0;transition:opacity .12s ease-out,background-color .12s ease-out,color .12s ease-out,scale .12s ease-out}\n.dismiss:hover{background:var(--surface-muted);color:var(--foreground)}\n.dismiss:active{scale:.9}\n@media (hover:none){.dismiss{opacity:1}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","item":"item","card":"card","list":"list","content":"content","dismiss":"dismiss","visual":"visual","initials":"initials","text":"text","title":"title","name":"name","meta":"meta","metaText":"metaText","dot":"dot","time":"time","verified":"verified","hit":"hit","srOnly":"srOnly"});
A.cssFor("social-proof-toast", [13326,49296]);
A.item("social-proof-toast", {entry:2887, export:"SocialProofToastDemo", kind:"component", tier:"pro", unresolved:[]});
})();