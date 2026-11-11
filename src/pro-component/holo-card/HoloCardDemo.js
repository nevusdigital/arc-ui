function(__module,__exports,__require){
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
}