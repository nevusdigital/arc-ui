/* cover-flow (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(11434, ".demo{display:grid;width:min(100%,720px);min-width:0;justify-items:center;gap:var(--space-4);padding-bottom:var(--space-2);font-family:var(--font-body);letter-spacing:var(--tracking-body);container-type:inline-size}\n.title{margin:0;color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:1.3}\n.subtitle{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.details{display:grid;width:min(100%,540px);grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:var(--space-4) var(--space-6);padding-top:var(--space-4);border-top:1px solid var(--border-subtle)}\n@container (max-width: 520px){.details{grid-template-columns:minmax(0,1fr);gap:var(--space-4);padding-inline:var(--space-1)}\n.stats{display:grid;grid-template-columns:repeat(3,max-content);gap:var(--space-4) var(--space-8);margin:0}\n.stats{grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-3)}\n.stat{display:grid;min-width:0;align-content:start;gap:4px}\n.stat dt{color:var(--text-muted);font-size:var(--text-xs);line-height:1.3;white-space:nowrap}\n.stat dd{margin:0;line-height:1.3}\n.stat dd>span{font-family:var(--font-body);font-size:var(--text-lg);letter-spacing:var(--tracking-body);line-height:1.3}\n.light,.stat dd>span{font-size:var(--text-base)}\n.light{color:var(--foreground);font-size:var(--text-lg);white-space:nowrap}\n.light{white-space:normal;text-wrap:balance}\n.save{display:inline-flex;min-width:8rem;height:var(--control-height-sm);align-items:center;justify-content:center;gap:6px;padding:0 16px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.save:active{transform:scale(.97)}\n.save[aria-pressed=true]{border-color:transparent;background:var(--foreground);color:var(--background)}\n@media (hover:hover) and (pointer:fine){.save[aria-pressed=false]:hover{background:var(--surface-muted)}\n.save{width:100%;height:var(--control-height-md)}\n@media (prefers-reduced-motion:reduce){.save{transition:none}", {"demo":"demo","title":"title","subtitle":"subtitle","details":"details","stats":"stats","stat":"stat","light":"light","save":"save"});
A.regCss(43900, ".root{display:grid;width:100%;min-width:0;gap:var(--space-4);container-type:inline-size;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.root[data-reduced] .stage{cursor:default}\n.stage{--flow-card:clamp(148px,31cqw,228px);--flow-height:calc(var(--flow-card) * 1.25);--flow-radius:calc(var(--flow-card) * .085);--flow-top:8px;--flow-mirror:calc(var(--flow-height) * .15);--flow-floor:calc(var(--flow-mirror) + 12px);--flow-contact:.36;--flow-ambient:.14;--flow-reflect:.28;--flow-contact-k:.62;--flow-veil:oklch(0% 0 0/.62);position:relative;display:grid;height:calc(var(--flow-top) + var(--flow-height) + var(--flow-floor));perspective:calc(var(--flow-card) * 3.4);perspective-origin:50% calc(var(--flow-top) + var(--flow-height));overflow-x:clip;overflow-y:visible;place-items:center;cursor:grab;touch-action:pan-y;overscroll-behavior-x:contain;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}\n.stage[data-dragging]{cursor:grabbing}\n@container (max-width: 520px){.stage{--flow-card:clamp(148px,54cqw,228px);--flow-floor:22px;--flow-contact-k:1}\n:root[data-theme=dark] .stage{--flow-contact:.66;--flow-ambient:.34;--flow-reflect:.18;--flow-veil:oklch(0% 0 0/.9)}\n.sizer{width:var(--flow-card);height:0;visibility:hidden;grid-area:1/1}\n.card{position:absolute;top:var(--flow-top);left:calc(50% - var(--flow-card) / 2);width:var(--flow-card);height:var(--flow-height);cursor:pointer;will-change:transform;transform:translateZ(0);transform-origin:50% 50%;backface-visibility:hidden;-webkit-backface-visibility:hidden}\n.card[data-active]{cursor:inherit}\n.ambient{position:absolute;inset:6% -3% -4%;background:radial-gradient(closest-side,oklch(0 0 0/var(--flow-ambient)),oklch(0 0 0/calc(var(--flow-ambient) * .4)) 55%,transparent);pointer-events:none}\n.contact{position:absolute;top:calc(100% - 7px);right:5%;left:5%;height:16px;background:radial-gradient(closest-side,oklch(0 0 0/calc(var(--flow-contact) * var(--flow-contact-k))),oklch(0 0 0/calc(var(--flow-contact) * var(--flow-contact-k) * .35)) 60%,transparent);pointer-events:none}\n.reflection{position:absolute;top:calc(100% + 2px);right:0;left:0;height:var(--flow-mirror);overflow:hidden;border-radius:var(--flow-radius) var(--flow-radius) 0 0;pointer-events:none;will-change:opacity;-webkit-mask-image:linear-gradient(oklch(0 0 0/var(--flow-reflect)),transparent 88%);mask-image:linear-gradient(oklch(0 0 0/var(--flow-reflect)),transparent 88%)}\n.reflection .image{bottom:auto;height:var(--flow-height);border-radius:0;transform:scaleY(-1)}\n.reflection{display:none}\n.image{width:100%;height:100%;object-fit:cover;user-select:none;-webkit-user-drag:none}\n.edge,.image,.veil{position:absolute;inset:0;border-radius:var(--flow-radius);pointer-events:none}\n.face{position:absolute;inset:0;border-radius:var(--flow-radius);background:var(--surface-muted)}\n.face:after{position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--foreground) 8%,transparent);content:\"\";pointer-events:none}\n.edge,.veil{will-change:opacity}\n.veil{background:var(--flow-veil)}\n.footer{display:grid;justify-items:center;gap:var(--space-3);padding-inline:var(--space-4)}\n.caption{display:grid;width:100%;min-height:3rem;justify-items:center;text-align:center}\n.captionItem{display:grid;justify-items:center;align-content:start;gap:2px;grid-area:1/1;will-change:opacity,transform}\n.title{margin:0;color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:1.3}\n.subtitle{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.ticks{position:relative;display:flex;height:24px;align-items:center}\n.tick{position:relative;width:16px;height:24px;padding:0;border:0;background:none;cursor:pointer}\n.tick:before{position:absolute;top:50%;left:50%;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;background:color-mix(in oklab,var(--foreground) 22%,transparent);content:\"\";transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.tick:hover:before{background:color-mix(in oklab,var(--foreground) 45%,transparent)}\n.thumb{position:absolute;top:50%;left:2px;width:12px;height:5px;margin-top:-2.5px;border-radius:var(--radius-pill);background:var(--foreground);pointer-events:none;will-change:transform}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","stage":"stage","sizer":"sizer","card":"card","ambient":"ambient","contact":"contact","reflection":"reflection","image":"image","edge":"edge","veil":"veil","face":"face","footer":"footer","caption":"caption","captionItem":"captionItem","title":"title","subtitle":"subtitle","ticks":"ticks","tick":"tick","thumb":"thumb","srOnly":"srOnly"});
A.reg(48555, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { CoverFlowDemo: () => A, default: () => E });
  var i = a(95155), s = a(12115), r = a(51811);
  let n = {
    name: "bookmark-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
          key: "oz39mx"
        }
      ],
      ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
  var o = a(97625), c = a(65024), d = a(18310), u = a(55809), m = a(25354), h = a(28245), g = a(7890), f = a(92171), p = a(43900), v = a.n(p);
  let _ = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), b = (e2, t2 = 3) => Math.round(e2 * 10 ** t2) / 10 ** t2, x = (e2, t2 = 0.6, a2 = 0.55) => e2 * t2 * a2 / (t2 + a2 * Math.abs(e2));
  function w(e2, t2, a2) {
    let i2 = Math.abs(e2) > 1e-3 && Math.sign(e2) === Math.sign(t2) ? Math.sign(t2) * Math.min(Math.abs(t2), a2 * Math.abs(e2)) : t2;
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * a2,
      mass: 1,
      velocity: i2,
      restDelta: 5e-4,
      restSpeed: 0.01
    };
  }
  let j = () => () => {
  };
  function M({
    item: e2,
    index: t2,
    count: a2,
    active: s2,
    position: r2,
    layout: n2,
    width: l2,
    onPick: o2
  }) {
    let { reach: c2, near: d2, far: h2 } = n2, g2 = (0, u.G)(r2, (e3) => t2 - e3), f2 = (0, u.G)(g2, (e3) => {
      let t3 = Math.abs(e3), a3 = Math.sign(e3), i2 = Math.min(t3, 1), s3 = Math.max(0, t3 - 1), r3 = Math.min(s3, c2 - 1) + 0.35 * Math.max(0, t3 - c2), n3 = -l2 * (0.38 * i2 + 0.14 * Math.min(s3, c2));
      return `translate3d(${b(a3 * (d2 * i2 + h2 * r3), 2)}px, 0, ${b(n3, 2)}px) rotateY(${b(-a3 * i2 * 45, 2)}deg)`;
    }), p2 = (0, u.G)(g2, (e3) => b(_((c2 + 0.7 - Math.abs(e3)) / 0.7, 0, 1))), x2 = (0, u.G)(g2, (e3) => Math.round(100 - 10 * Math.abs(e3))), w2 = (0, u.G)(g2, (e3) => Math.abs(e3) > c2 + 0.75 ? "hidden" : "visible"), j2 = (0, u.G)(g2, (e3) => {
      let t3 = Math.abs(e3);
      return b(0.42 * Math.min(t3, 1) + 0.16 * _(t3 - 1, 0, c2));
    }), y2 = (0, u.G)(g2, (e3) => b(0.45 * _(Math.abs(e3), 0, 1))), k2 = (0, u.G)(
      g2,
      (e3) => `linear-gradient(${e3 < 0 ? 90 : 270}deg, transparent 40%, oklch(0% 0 0 / .5))`
    ), N2 = (0, u.G)(g2, (e3) => b(1 - 0.45 * Math.min(Math.abs(e3), 1)));
    return (0, i.jsxs)(m.PY1.div, {
      className: v().card,
      role: "group",
      "aria-roledescription": "slide",
      "aria-label": `${t2 + 1} of ${a2}: ${e2.title}`,
      "aria-hidden": !s2,
      "data-active": s2 || void 0,
      style: { transform: f2, opacity: p2, zIndex: x2, visibility: w2 },
      onClick: () => o2(t2),
      children: [
        (0, i.jsx)("span", { className: v().ambient, "aria-hidden": "true" }),
        (0, i.jsx)(m.PY1.span, {
          className: v().reflection,
          style: { opacity: N2 },
          "aria-hidden": "true",
          children: (0, i.jsx)("img", {
            className: v().image,
            src: e2.image,
            alt: "",
            draggable: false,
            decoding: "async",
            style: { objectPosition: e2.imagePosition }
          })
        }),
        (0, i.jsx)("span", { className: v().contact, "aria-hidden": "true" }),
        (0, i.jsxs)("span", {
          className: v().face,
          children: [
            (0, i.jsx)("img", {
              className: v().image,
              src: e2.image,
              alt: s2 ? e2.alt ?? e2.title : "",
              draggable: false,
              decoding: "async",
              style: { objectPosition: e2.imagePosition }
            }),
            (0, i.jsx)(m.PY1.span, {
              className: v().veil,
              style: { opacity: j2 },
              "aria-hidden": "true"
            }),
            (0, i.jsx)(m.PY1.span, {
              className: v().edge,
              style: { opacity: y2, backgroundImage: k2 },
              "aria-hidden": "true"
            })
          ]
        })
      ]
    });
  }
  function y({ index: e2, position: t2, active: a2, children: s2 }) {
    let r2 = (0, u.G)(t2, (t3) => b(_((0.55 - Math.abs(e2 - t3)) / 0.45, 0, 1))), n2 = (0, u.G)(
      t2,
      (t3) => `translate3d(${b(18 * _(e2 - t3, -1, 1), 2)}px, 0, 0)`
    ), l2 = (0, u.G)(t2, (t3) => 0.56 > Math.abs(e2 - t3) ? "visible" : "hidden");
    return (0, i.jsx)(m.PY1.div, {
      className: v().captionItem,
      "aria-hidden": !a2,
      style: { opacity: r2, transform: n2, visibility: l2 },
      children: s2
    });
  }
  function k({
    items: e2,
    label: t2,
    index: a2,
    defaultIndex: r2 = 0,
    onIndexChange: n2,
    renderCaption: l2,
    className: o2
  }) {
    var c2, p2;
    let N2, P2, S2, $2, A2, E2, L, z = (N2 = (0, s.useSyncExternalStore)(
      j,
      () => true,
      () => false
    ), !!(0, d.I)() && N2), I = e2.length, C = Math.max(0, I - 1), [G] = (0, s.useState)(() => _(Math.round(a2 ?? r2), 0, C)), [Y, R] = (0, s.useState)(G), [D, X] = (0, s.useState)({ stage: 720, card: 232 }), [O, T] = (0, s.useState)(""), B = (P2 = (c2 = D.stage) >= 2.85 * (p2 = D.card) ? 2 : 1, S2 = 3.4 * p2, $2 = p2 / 2, E2 = -p2 * (0.38 + 0.14 * (P2 - 1)) + $2 * Math.sin(A2 = 45 * Math.PI / 180), L = _(
      ((c2 / 2 - Math.max(10, 0.05 * p2)) * (S2 - E2) / S2 - $2 * Math.cos(A2)) / (1 + (P2 - 1) * 0.46),
      0.4 * p2,
      0.8 * p2
    ), { reach: P2, near: L, far: 0.46 * L }), H = (0, h.d)(G), V = (0, s.useRef)(null), F = (0, s.useRef)(null), W = (0, s.useRef)(G), Q = (0, s.useRef)(G), q = (0, s.useRef)(null), J = (0, s.useRef)(false), K = (0, s.useRef)(null), Z = (0, s.useRef)({ timer: 0, samples: [] }), U = (0, s.useRef)(G);
    function ee(t3, a3) {
      t3 !== Q.current && (Q.current = t3, R(t3), n2?.(t3)), a3 && e2[t3] && T(`${e2[t3].title}, ${t3 + 1} of ${I}`);
    }
    function et(e3, t3, a3 = true) {
      let i2 = _(e3, 0, C);
      (W.current = i2, ee(i2, a3), K.current?.stop(), z) ? H.jump(i2) : K.current = (0, f.i)(H, i2, t3);
    }
    (0, s.useLayoutEffect)(() => {
      let e3 = V.current, t3 = F.current;
      if (!e3 || !t3) return;
      let a3 = () => {
        let a4 = { stage: e3.clientWidth || 720, card: t3.offsetWidth || 232 };
        X((e4) => e4.stage === a4.stage && e4.card === a4.card ? e4 : a4);
      };
      a3();
      let i2 = new ResizeObserver(a3);
      return i2.observe(e3), i2.observe(t3), () => i2.disconnect();
    }, []), (0, g.L)(H, "change", (e3) => {
      (q.current?.dragging || Z.current.timer) && ee(_(Math.round(e3), 0, C), false);
    });
    let ea = (e3, t3 = true) => {
      let a3 = _(e3, 0, C);
      et(a3, w(a3 - H.get(), H.getVelocity(), 17), t3);
    }, ei = (e3) => ea(W.current + e3);
    function es(e3) {
      let t3, a3 = H.get(), i2 = _(
        Math.round(a3 + e3 / 1e3 * 0.997 / 0.0030000000000000027),
        0,
        C
      ), s2 = Math.round(U.current);
      Math.abs(e3) > 1.6 && i2 === s2 && (i2 = _(s2 + Math.sign(e3), 0, C)), et(
        i2,
        w(
          i2 - a3,
          e3,
          Math.abs(t3 = i2 - a3) > 0.05 && Math.sign(t3) === Math.sign(e3) ? _(Math.abs(e3 / t3), 8, 18) : 13
        )
      );
    }
    function er(e3) {
      let t3 = q.current;
      if (t3 && t3.pointer === e3.pointerId) {
        if (q.current = null, V.current?.removeAttribute("data-dragging"), !t3.dragging) {
          t3.caught && es(0);
          return;
        }
        if (J.current = true, z) {
          let a3 = e3.clientX - t3.x;
          Math.abs(a3) > 40 && "pointercancel" !== e3.type && ei(a3 < 0 ? 1 : -1);
          return;
        }
        es(
          "pointercancel" === e3.type ? 0 : (function(e4, t4) {
            let a3 = e4.filter((e5) => t4 - e5.t < 100);
            if (a3.length < 2 || t4 - a3[a3.length - 1].t > 60) return 0;
            let i2 = a3[0], s2 = a3[a3.length - 1];
            return s2.t > i2.t ? (s2.p - i2.p) / (s2.t - i2.t) * 1e3 : 0;
          })(t3.samples, e3.timeStamp)
        );
      }
    }
    function en(e3) {
      if (J.current) {
        J.current = false;
        return;
      }
      e3 !== W.current && ea(e3);
    }
    let el = (0, s.useEffectEvent)((e3) => {
      if (Math.abs(e3.deltaX) <= Math.abs(e3.deltaY) || q.current) return;
      e3.preventDefault();
      let t3 = Z.current;
      if (K.current?.stop(), H.stop(), z) {
        t3.timer || ei(e3.deltaX > 0 ? 1 : -1), window.clearTimeout(t3.timer), t3.timer = window.setTimeout(() => {
          t3.timer = 0;
        }, 260);
        return;
      }
      let a3 = H.get() + e3.deltaX / (1.4 * B.near), i2 = a3 < 0 ? Math.max(a3, x(a3)) : a3 > C ? Math.min(a3, C + x(a3 - C)) : a3;
      H.set(i2), t3.samples.push({ t: e3.timeStamp, p: i2 }), t3.samples.length > 10 && t3.samples.shift(), window.clearTimeout(t3.timer), t3.timer = window.setTimeout(() => {
        let e4 = t3.samples, a4 = e4[e4.length - 1], i3 = e4.find((e5) => a4.t - e5.t < 120) ?? a4, s2 = a4.t > i3.t ? (a4.p - i3.p) / (a4.t - i3.t) * 1e3 : 0;
        t3.samples = [], t3.timer = 0, U.current = H.get(), es(_(0.6 * s2, -12, 12));
      }, 90);
    });
    (0, s.useEffect)(() => {
      let e3 = V.current;
      if (!e3) return;
      let t3 = (e4) => el(e4);
      return e3.addEventListener("wheel", t3, { passive: false }), () => e3.removeEventListener("wheel", t3);
    }, []), (0, s.useEffect)(() => () => window.clearTimeout(Z.current.timer), []);
    let eo = (0, s.useEffectEvent)((e3) => {
      e3 !== Q.current && ea(e3, false);
    });
    (0, s.useEffect)(() => {
      void 0 !== a2 && eo(_(Math.round(a2), 0, C));
    }, [a2, C]);
    let ec = (0, u.G)(
      H,
      (e3) => `translate3d(${b(16 * _(e3, -0.4, C + 0.4), 2)}px, 0, 0)`
    );
    return (0, i.jsxs)("section", {
      className: [v().root, o2].filter(Boolean).join(" "),
      "aria-roledescription": "carousel",
      "aria-label": t2,
      "data-reduced": z || void 0,
      children: [
        (0, i.jsxs)("div", {
          ref: V,
          className: v().stage,
          tabIndex: 0,
          onKeyDown: function(e3) {
            if ("ArrowRight" === e3.key) ei(1);
            else if ("ArrowLeft" === e3.key) ei(-1);
            else if ("Home" === e3.key) ea(0);
            else {
              if ("End" !== e3.key) return;
              ea(C);
            }
            e3.preventDefault();
          },
          onPointerDown: function(e3) {
            if (0 !== e3.button || !e3.isPrimary || q.current) return;
            J.current = false;
            let t3 = !z && H.isAnimating();
            t3 && (K.current?.stop(), H.stop()), q.current = {
              pointer: e3.pointerId,
              x: e3.clientX,
              y: e3.clientY,
              start: H.get(),
              dragging: false,
              caught: t3,
              samples: [{ t: e3.timeStamp, p: H.get() }]
            }, U.current = H.get();
          },
          onPointerMove: function(e3) {
            let t3 = q.current;
            if (!t3 || t3.pointer !== e3.pointerId) return;
            let a3 = e3.clientX - t3.x, i2 = e3.clientY - t3.y;
            if (!t3.dragging) {
              if (6 > Math.abs(a3) || Math.abs(a3) < Math.abs(i2)) {
                Math.abs(i2) > 10 && (q.current = null);
                return;
              }
              t3.dragging = true, t3.x = e3.clientX, e3.currentTarget.setPointerCapture(e3.pointerId), V.current?.setAttribute("data-dragging", "");
              return;
            }
            if (z) return;
            let s2 = t3.start - (e3.clientX - t3.x) / B.near, r3 = s2 < 0 ? x(s2) : s2 > C ? C + x(s2 - C) : s2;
            H.set(r3), t3.samples.push({ t: e3.timeStamp, p: r3 }), t3.samples.length > 12 && t3.samples.shift();
          },
          onPointerUp: er,
          onPointerCancel: er,
          onDragStart: (e3) => e3.preventDefault(),
          children: [
            (0, i.jsx)("div", {
              ref: F,
              className: v().sizer,
              "aria-hidden": "true"
            }),
            e2.map(
              (e3, t3) => (0, i.jsx)(
                M,
                {
                  item: e3,
                  index: t3,
                  count: I,
                  active: t3 === Y,
                  position: H,
                  layout: B,
                  width: D.card,
                  onPick: en
                },
                e3.id
              )
            )
          ]
        }),
        (0, i.jsxs)("div", {
          className: v().footer,
          children: [
            (0, i.jsx)("div", {
              className: v().caption,
              children: e2.map(
                (e3, t3) => (0, i.jsx)(
                  y,
                  {
                    index: t3,
                    position: H,
                    active: t3 === Y,
                    children: l2 ? l2(e3, t3) : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("p", {
                          className: v().title,
                          children: e3.title
                        }),
                        (e3.subtitle || e3.meta) && (0, i.jsx)("p", {
                          className: v().subtitle,
                          children: [e3.subtitle, e3.meta].filter(Boolean).join(", ")
                        })
                      ]
                    })
                  },
                  e3.id
                )
              )
            }),
            (0, i.jsxs)("div", {
              className: v().ticks,
              role: "group",
              "aria-label": `${t2} position`,
              children: [
                e2.map(
                  (e3, t3) => (0, i.jsx)(
                    "button",
                    {
                      type: "button",
                      className: v().tick,
                      "aria-label": `Show ${e3.title}`,
                      "aria-current": t3 === Y || void 0,
                      tabIndex: -1,
                      onClick: () => ea(t3)
                    },
                    e3.id
                  )
                ),
                (0, i.jsx)(m.PY1.span, {
                  className: v().thumb,
                  style: { transform: ec },
                  "aria-hidden": "true"
                })
              ]
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: v().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: O
        })
      ]
    });
  }
  var N = a(11434), P = a.n(N);
  let S = "media/specials/cover-flow-", $ = [
    {
      id: "valley-loop",
      title: "Yosemite Valley loop",
      subtitle: "Yosemite, California",
      image: `${S}yosemite.jpg`,
      imagePosition: "50% 40%",
      alt: "Half Dome above a meadow where a deer grazes",
      miles: 7.2,
      gain: 400,
      light: "Late afternoon"
    },
    {
      id: "lake-agnes",
      title: "Lake Agnes Tea House",
      subtitle: "Banff, Alberta",
      image: `${S}lake-louise.jpg`,
      alt: "Lake Louise reflecting the mountains and a glacier",
      miles: 4.5,
      gain: 1300,
      light: "Sunrise"
    },
    {
      id: "limides",
      title: "Lago Limides",
      subtitle: "Cortina d'Ampezzo, Italy",
      image: `${S}lago-limides.jpg`,
      alt: "A small alpine lake below a peak lit by sunset, framed by weathered wood",
      miles: 2.6,
      gain: 750,
      light: "Sunset"
    },
    {
      id: "seceda",
      title: "Seceda ridgeline",
      subtitle: "Val Gardena, Italy",
      image: `${S}seceda.jpg`,
      imagePosition: "50% 20%",
      alt: "A green ridge and yellow wildflowers below the Seceda peaks",
      miles: 6.1,
      gain: 1150,
      light: "Morning"
    },
    {
      id: "canyon",
      title: "Fja\xF0r\xE1rglj\xFAfur rim",
      subtitle: "South Iceland",
      image: `${S}iceland-canyon.jpg`,
      alt: "A river winding through a deep mossy canyon",
      miles: 1.8,
      gain: 330,
      light: "Any weather"
    },
    {
      id: "cape-nelson",
      title: "Cape Nelson lighthouse",
      subtitle: "Victoria, Australia",
      image: `${S}cape-nelson.jpg`,
      imagePosition: "50% 60%",
      alt: "A white lighthouse under a clear evening sky",
      miles: 3.1,
      gain: 260,
      light: "Blue hour"
    },
    {
      id: "lands-end",
      title: "Ocean Beach to Lands End",
      subtitle: "San Francisco, California",
      image: `${S}ocean-beach.jpg`,
      imagePosition: "30% 50%",
      alt: "Cliffs above the Pacific at dusk",
      miles: 3.4,
      gain: 550,
      light: "Sunset"
    }
  ];
  function A() {
    let [e2, t2] = (0, s.useState)(2), [a2, r2] = (0, s.useState)(["lake-agnes"]), n2 = $[e2], d2 = a2.includes(n2.id);
    return (0, i.jsxs)("div", {
      className: P().demo,
      children: [
        (0, i.jsx)(k, {
          items: $,
          label: "Hikes for this fall",
          index: e2,
          onIndexChange: t2,
          renderCaption: (e3) => (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("p", { className: P().title, children: e3.title }),
              (0, i.jsx)("p", {
                className: P().subtitle,
                children: e3.subtitle
              })
            ]
          })
        }),
        (0, i.jsxs)("div", {
          className: P().details,
          children: [
            (0, i.jsxs)("dl", {
              className: P().stats,
              children: [
                (0, i.jsxs)("div", {
                  className: P().stat,
                  children: [
                    (0, i.jsx)("dt", { children: "Round trip" }),
                    (0, i.jsx)("dd", {
                      children: (0, i.jsx)(c.q, {
                        value: n2.miles,
                        decimals: 1,
                        suffix: "\xA0mi"
                      })
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: P().stat,
                  children: [
                    (0, i.jsx)("dt", { children: "Elevation gain" }),
                    (0, i.jsx)("dd", {
                      children: (0, i.jsx)(c.q, {
                        value: n2.gain,
                        suffix: "\xA0ft"
                      })
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: P().stat,
                  children: [
                    (0, i.jsx)("dt", { children: "Best light" }),
                    (0, i.jsx)("dd", {
                      className: P().light,
                      children: n2.light
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)("button", {
              type: "button",
              className: P().save,
              "aria-pressed": d2,
              onClick: () => r2((e3) => d2 ? e3.filter((e4) => e4 !== n2.id) : [...e3, n2.id]),
              children: [
                d2 ? (0, i.jsx)(l, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }) : (0, i.jsx)(o.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", { children: d2 ? "Saved" : "Save hike" })
              ]
            })
          ]
        })
      ]
    });
  }
  let E = A;
}

__m(__module,__exports,__require);
});
A.reg(97625, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var i = a(51811);
  let s = {
    name: "bookmark",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
          key: "oz39mx"
        }
      ]
    ]
  };
  s.node;
  let r = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.cssFor("cover-flow", [11434,43900]);
A.item("cover-flow", {entry:48555, export:"CoverFlowDemo", kind:"component", tier:"pro", unresolved:[]});
})();