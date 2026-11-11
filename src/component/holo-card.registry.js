/* holo-card (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(20122, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { E: () => d });
  var n = a(51469), r = a(71013);
  function d(e2, ...t2) {
    let a2 = e2.length;
    return (0, r.j)(t2.filter(n.S), function() {
      let r2 = "";
      for (let d2 = 0; d2 < a2; d2++) {
        r2 += e2[d2];
        let a3 = t2[d2];
        a3 && (r2 += (0, n.S)(a3) ? a3.get() : a3);
      }
      return r2;
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(24925, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { HoloCardDemo: () => M });
  var o = i(95155), t = i(5772), r = i(12115), n = i(18310), s = i(28245), l = i(22535), d = i(55809), c = i(92171), h = i(20122), m = i(25354), p = i(87738), g = i.n(p);
  let u = { stiffness: 160, damping: 22, mass: 0.7 }, w = { stiffness: 120, damping: 20 }, f = { type: "spring", visualDuration: 0.6, bounce: 0.1 }, v = () => () => {
  };
  function b({
    front: e2,
    back: a2,
    flipped: i2,
    defaultFlipped: t2 = false,
    onFlippedChange: p2,
    maxTilt: _2 = 14,
    intensity: j2 = 1,
    gyroscope: k2 = true,
    label: x2,
    className: y2,
    style: N2
  }) {
    let M2, A = (M2 = (0, r.useSyncExternalStore)(
      v,
      () => true,
      () => false
    ), !!(0, n.I)() && M2), [E, G] = (0, r.useState)(t2), P = i2 ?? E, C = (0, r.useRef)(null), D = (0, r.useRef)("off"), R = (0, r.useRef)(null), z = (0, r.useRef)(null), L = (0, s.d)(0.5), $ = (0, s.d)(0.5), B = (0, s.d)(0), S = (0, l.z)(L, w), T = (0, l.z)($, w), K = (0, l.z)(B, w), F = (0, l.z)(
      (0, d.G)([$, B], ([e3, a3]) => (0.5 - e3) * 2 * _2 * a3),
      u
    ), J = (0, l.z)(
      (0, d.G)([L, B], ([e3, a3]) => (e3 - 0.5) * 2 * _2 * a3),
      u
    ), O = (0, d.G)(K, [0, 1], [1, 1.035]), W = (0, s.d)(180 * !!P), Y = (0, r.useRef)(+!!P), H = (0, r.useRef)(1);
    (0, r.useEffect)(() => {
      if (Math.abs(Math.round(Y.current)) % 2 == 1 === P) return;
      if (Y.current += H.current, A) return void W.jump(180 * Y.current);
      let e3 = (0, c.i)(W, 180 * Y.current, f);
      return () => e3.stop();
    }, [P, A, W]);
    let q = (0, d.G)(W, (e3) => Math.abs(Math.sin(e3 / 180 * Math.PI))), I = (0, d.G)(
      () => (S.get() - 0.5) * 120 + (T.get() - 0.5) * 60 + 90 * q.get()
    ), U = (0, d.G)(() => `${100 * S.get() + 60 * q.get()}%`), V = (0, d.G)(() => `${100 * T.get()}%`), X = (0, d.G)(S, (e3) => `${(0.5 - e3) * 36}px`), Z = (0, d.G)(T, (e3) => `${(0.5 - e3) * 36}px`), Q = (0, d.G)(S, (e3) => `${100 * e3}%`), ee = (0, d.G)(T, (e3) => `${100 * e3}%`), ea = (0, d.G)(
      () => Math.min(1, 0.35 + 0.65 * K.get() + 0.5 * q.get()) * j2
    ), ei = (0, d.G)(J, (e3) => `${-(0.9 * e3)}px`), eo = (0, d.G)(F, (e3) => `${18 + 0.9 * e3}px`), et = (0, h.E)`${ei} ${eo} 42px -14px oklch(0% 0 0 / calc(.28 + ${K} * .12))`, er = {
      "--holo-x": Q,
      "--holo-y": ee,
      "--holo-foil-x": U,
      "--holo-foil-y": V,
      "--holo-glitter-x": X,
      "--holo-glitter-y": Z,
      "--holo-hue": (0, h.E)`${I}deg`,
      "--holo-shine": ea
    }, en = (e3) => {
      if (null == e3.beta || null == e3.gamma) return;
      z.current ?? (z.current = { beta: e3.beta, gamma: e3.gamma });
      let a3 = (e4) => Math.max(0, Math.min(1, e4));
      L.set(a3(0.5 + (e3.gamma - z.current.gamma) / 50)), $.set(a3(0.5 + (e3.beta - z.current.beta) / 50)), B.set(1);
    }, es = (0, r.useRef)(en);
    (0, r.useEffect)(() => {
      es.current = en;
    }), (0, r.useEffect)(() => () => R.current?.(), []), (0, r.useEffect)(() => {
      if (!k2 || A || !("DeviceOrientationEvent" in window) || !window.matchMedia("(hover: none) and (pointer: coarse)").matches || "function" == typeof DeviceOrientationEvent.requestPermission)
        return;
      let e3 = (e4) => es.current(e4);
      return D.current = "on", window.addEventListener("deviceorientation", e3), () => {
        window.removeEventListener("deviceorientation", e3), D.current = "off";
      };
    }, [k2, A]);
    let el = () => {
      !k2 || A || "off" !== D.current || "function" == typeof window.DeviceOrientationEvent?.requestPermission && (D.current = "asked", window.DeviceOrientationEvent.requestPermission().then((e3) => {
        let a3;
        "granted" === e3 && (a3 = (e4) => es.current(e4), D.current = "on", window.addEventListener("deviceorientation", a3), R.current = () => window.removeEventListener("deviceorientation", a3));
      }).catch(() => {
      }));
    }, ed = (e3) => {
      if (A || "mouse" !== e3.pointerType && "on" === D.current) return;
      let a3 = C.current?.getBoundingClientRect();
      a3 && (L.set(Math.max(0, Math.min(1, (e3.clientX - a3.left) / a3.width))), $.set(Math.max(0, Math.min(1, (e3.clientY - a3.top) / a3.height))), B.set(1));
    }, ec = (e3) => {
      ("mouse" === e3.pointerType || "on" !== D.current) && (L.set(0.5), $.set(0.5), B.set(0));
    }, eh = (e3) => {
      if (el(), a2) {
        var o2;
        H.current = e3, o2 = !P, void 0 === i2 && G(o2), p2?.(o2);
      }
    }, em = !!a2, ep = A ? void 0 : { rotateY: W };
    return (0, o.jsxs)("div", {
      ref: C,
      className: [g().root, y2].filter(Boolean).join(" "),
      style: N2,
      onPointerMove: ed,
      onPointerEnter: ed,
      onPointerLeave: ec,
      onPointerCancel: ec,
      children: [
        (0, o.jsx)(m.PY1.div, {
          className: g().shadow,
          "aria-hidden": "true",
          style: A ? void 0 : {
            boxShadow: et,
            rotateX: F,
            rotateY: J,
            scale: O,
            transformPerspective: 900
          }
        }),
        (0, o.jsx)(m.PY1.div, {
          className: g().card,
          style: A ? er : {
            ...er,
            rotateX: F,
            rotateY: J,
            scale: O,
            transformPerspective: 900
          },
          role: em ? "button" : void 0,
          tabIndex: em ? 0 : void 0,
          "aria-pressed": em ? P : void 0,
          "aria-roledescription": em ? "flip card" : void 0,
          "aria-label": x2,
          onClick: em ? (e3) => {
            let a3 = C.current?.getBoundingClientRect();
            eh(
              a3 && e3.detail > 0 && e3.clientX < a3.left + a3.width / 2 ? -1 : 1
            );
          } : el,
          onKeyDown: em ? (e3) => {
            ("Enter" === e3.key || " " === e3.key) && (e3.preventDefault(), eh(1));
          } : void 0,
          "data-reduced": A || void 0,
          "data-flipped": P || void 0,
          children: (0, o.jsxs)(m.PY1.div, {
            className: g().inner,
            style: ep,
            children: [
              (0, o.jsxs)("div", {
                className: g().face,
                "data-side": "front",
                "aria-hidden": P || void 0,
                children: [
                  (0, o.jsx)("div", { className: g().content, children: e2 }),
                  (0, o.jsx)("span", {
                    className: g().foil,
                    "aria-hidden": "true"
                  }),
                  (0, o.jsx)("span", {
                    className: g().glitter,
                    "aria-hidden": "true"
                  }),
                  (0, o.jsx)("span", {
                    className: g().glare,
                    "aria-hidden": "true"
                  })
                ]
              }),
              a2 && (0, o.jsxs)("div", {
                className: g().face,
                "data-side": "back",
                "aria-hidden": !P || void 0,
                children: [
                  (0, o.jsx)("div", { className: g().content, children: a2 }),
                  (0, o.jsx)("span", {
                    className: g().foil,
                    "aria-hidden": "true"
                  }),
                  (0, o.jsx)("span", {
                    className: g().glare,
                    "aria-hidden": "true"
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  var _ = i(37888), j = i(67752), k = i(28161), x = i.n(k);
  function y() {
    return (0, o.jsxs)("div", {
      className: x().front,
      children: [
        (0, o.jsx)("div", {
          className: x().photo,
          children: (0, o.jsx)(t.default, {
            src: (0, j.o4)("jasmine-brooks"),
            alt: "",
            fill: true,
            sizes: "300px",
            className: x().image,
            priority: true
          })
        }),
        (0, o.jsxs)("div", {
          className: x().top,
          children: [
            (0, o.jsx)(_.c, { className: x().mark }),
            (0, o.jsx)("span", { className: x().tier, children: "Pro" })
          ]
        }),
        (0, o.jsxs)("div", {
          className: x().info,
          children: [
            (0, o.jsx)("p", {
              className: x().name,
              children: "Jasmine Brooks"
            }),
            (0, o.jsx)("p", { className: x().role, children: "Design lead" }),
            (0, o.jsxs)("dl", {
              className: x().meta,
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("dt", { children: "Member since" }),
                    (0, o.jsx)("dd", { children: "2023" })
                  ]
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("dt", { children: "Shipped" }),
                    (0, o.jsx)("dd", { children: "148" })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function N() {
    return (0, o.jsxs)("div", {
      className: x().back,
      children: [
        (0, o.jsx)(_.c, { className: x().backMark }),
        (0, o.jsx)("p", { className: x().backTitle, children: "Arc Pro" }),
        (0, o.jsx)("p", {
          className: x().backNote,
          children: "Founding member, March 2023"
        }),
        (0, o.jsx)("p", {
          className: x().handle,
          children: "uiarc.dev/jasmine"
        })
      ]
    });
  }
  function M() {
    return (0, o.jsx)("div", {
      className: x().demo,
      children: (0, o.jsx)(b, {
        className: x().card,
        front: (0, o.jsx)(y, {}),
        back: (0, o.jsx)(N, {}),
        label: "Jasmine Brooks, Arc Pro member card"
      })
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(28161, ".demo{--card-accent:color-mix(in oklab,var(--accent) 78%,oklch(100% 0 0));display:grid;min-height:500px;place-items:center;padding:32px 16px;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n:root[data-accent=neutral] .demo{--card-accent:oklch(94% 0 0)}\n.card{width:min(100%,290px)}\n.back,.front{position:absolute;inset:0;background:oklch(16% 0 0);color:oklch(97% 0 0)}\n.back{display:grid;place-content:center;justify-items:center;gap:var(--space-2);padding:24px;text-align:center}\n.photo{position:absolute;inset:0 0 34% 0;overflow:hidden}\n.photo:after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,oklch(16% 0 0/0) 55%,oklch(16% 0 0))}\n.image{object-fit:cover;object-position:50% 30%}\n.top{position:absolute;top:20px;right:20px;left:20px;display:flex;align-items:center;justify-content:space-between}\n.mark{width:24px;height:24px;color:oklch(98% 0 0);filter:drop-shadow(0 1px 2px oklch(0 0 0/.3))}\n.tier{padding:2px 10px;border-radius:var(--radius-pill);background:var(--card-accent);color:oklch(16% 0 0);font-size:var(--text-xs);font-weight:500}\n.info{position:absolute;right:20px;bottom:20px;left:20px;display:grid;gap:2px}\n.name{margin:0;font-family:var(--font-body);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-display)}\n.role{margin:0 0 12px;line-height:var(--leading-body);color:oklch(78% 0 0);font-size:var(--text-sm)}\n.meta{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0;padding-top:12px;border-top:1px solid oklch(100% 0 0/.14)}\n.meta dt{color:oklch(70% 0 0);font-size:var(--text-xs)}\n.meta dd{margin:2px 0 0;font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums}\n.backMark{width:72px;height:72px;margin-bottom:var(--space-4);color:var(--card-accent)}\n.backTitle{margin:0;font-family:var(--font-body);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-display)}\n.backNote{margin:0;color:oklch(76% 0 0);font-size:var(--text-sm)}\n.handle{position:absolute;bottom:20px;left:0;right:0;margin:0;color:oklch(66% 0 0);font-size:var(--text-xs)}", {"demo":"demo","card":"card","back":"back","front":"front","photo":"photo","image":"image","top":"top","mark":"mark","tier":"tier","info":"info","name":"name","role":"role","meta":"meta","backMark":"backMark","backTitle":"backTitle","backNote":"backNote","handle":"handle"});
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
A.regCss(87738, ".root{position:relative;width:min(100%,300px);aspect-ratio:5/7;-webkit-tap-highlight-color:transparent;touch-action:manipulation}\n.card,.shadow{position:absolute;inset:0;border-radius:22px}\n.shadow{inset:3% 5%;background:transparent;pointer-events:none}\n.card{transform-style:preserve-3d;cursor:default;user-select:none;-webkit-user-select:none}\n.card[role=button]{cursor:pointer}\n.card[data-reduced] .face{transition:opacity var(--duration-standard) var(--ease-standard)}\n.card[data-reduced] .face[data-side=back]{transform:none;opacity:0}\n.card[data-reduced][data-flipped] .face[data-side=back]{opacity:1}\n.card[data-reduced][data-flipped] .face[data-side=front]{opacity:0}\n.card[data-reduced] .glitter{display:none}\n.inner{position:absolute;inset:0;transform-style:preserve-3d}\n.face{position:absolute;inset:0;overflow:hidden;border-radius:22px;background:var(--surface-raised);-webkit-backface-visibility:hidden;backface-visibility:hidden;isolation:isolate;box-shadow:inset 0 0 0 1px oklch(100% 0 0/.14)}\n.face[data-side=back]{transform:rotateY(180deg)}\n.content,.foil{position:absolute;inset:0}\n.foil{z-index:1;background-image:repeating-linear-gradient(118deg,oklch(80% .05 340),oklch(86% .045 70) 7%,oklch(88% .045 150) 14%,oklch(84% .045 220) 21%,oklch(80% .05 290) 28%,oklch(80% .05 340) 35%);background-size:260% 260%;background-position:var(--holo-foil-x,50%) var(--holo-foil-y,50%);filter:hue-rotate(var(--holo-hue,0deg));mix-blend-mode:color-dodge;opacity:calc(var(--holo-shine, .35) * .24);-webkit-mask-image:radial-gradient(farthest-corner circle at var(--holo-x,50%) var(--holo-y,50%),#000 10%,oklch(0 0 0/.35) 70%);mask-image:radial-gradient(farthest-corner circle at var(--holo-x,50%) var(--holo-y,50%),#000 10%,oklch(0 0 0/.35) 70%);pointer-events:none}\n@media (prefers-reduced-transparency:reduce){.foil,.glitter{display:none}\n.glitter{inset:-24px;z-index:2;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cg fill='%23fff'%3E%3Ccircle cx='7' cy='12' r='.8'/%3E%3Ccircle cx='31' cy='5' r='.6'/%3E%3Ccircle cx='52' cy='22' r='1'/%3E%3Ccircle cx='88' cy='9' r='.7'/%3E%3Ccircle cx='109' cy='31' r='.9'/%3E%3Ccircle cx='18' cy='44' r='.6'/%3E%3Ccircle cx='44' cy='58' r='.8'/%3E%3Ccircle cx='71' cy='41' r='.6'/%3E%3Ccircle cx='96' cy='63' r='1'/%3E%3Ccircle cx='9' cy='79' r='.9'/%3E%3Ccircle cx='36' cy='92' r='.6'/%3E%3Ccircle cx='62' cy='81' r='.8'/%3E%3Ccircle cx='82' cy='101' r='.6'/%3E%3Ccircle cx='113' cy='88' r='.8'/%3E%3Ccircle cx='24' cy='113' r='.7'/%3E%3Ccircle cx='57' cy='111' r='.9'/%3E%3Ccircle cx='100' cy='116' r='.6'/%3E%3Ccircle cx='76' cy='70' r='.5'/%3E%3C/g%3E%3C/svg%3E\");background-size:120px 120px;opacity:calc(var(--holo-shine, .35) * .55);translate:var(--holo-glitter-x,0) var(--holo-glitter-y,0);-webkit-mask-image:radial-gradient(circle at var(--holo-x,50%) var(--holo-y,50%),#000 0,transparent 55%);mask-image:radial-gradient(circle at var(--holo-x,50%) var(--holo-y,50%),#000 0,transparent 55%)}\n.glare,.glitter{position:absolute;mix-blend-mode:overlay;pointer-events:none}\n.glare{inset:0;z-index:3;background:radial-gradient(farthest-corner circle at var(--holo-x,50%) var(--holo-y,50%),oklch(100% 0 0/.36) 0,oklch(100% 0 0/.1) 32%,oklch(0 0 0/.14) 100%);opacity:var(--holo-shine,.35)}", {"root":"root","card":"card","shadow":"shadow","face":"face","glitter":"glitter","inner":"inner","content":"content","foil":"foil","glare":"glare"});
A.cssFor("holo-card", [28161,87738]);
A.item("holo-card", {entry:24925, export:"HoloCardDemo", kind:"component", tier:"pro", unresolved:[]});
})();