/* lightbox-gallery (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(55766, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "zoom-in",
    size: 24,
    node: [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(62134, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { LightboxGalleryDemo: () => O, default: () => K });
  var r = i(95155), n = i(12115), a = i(47650), l = i(18310), o = i(28245), s = i(55809), c = i(7890), u = i(92171), d = i(25354), h = i(80642), g = i(89959), m = i(55766), p = i(9005), y = i(78780), f = i(76721), b = i(2520), x = i(7770), v = i(85860), w = i.n(v);
  let { spring: _, duration: j, ease: k } = x.T, Y = [...k.enter], X = [...k.standard], A = ({ visualDuration: e2, bounce: t2 }) => {
    let i2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: i2 * i2,
      damping: 2 * (1 - t2) * i2,
      mass: 1
    };
  }, P = A({ visualDuration: 0.44, bounce: 0 }), z = A({ visualDuration: 0.4, bounce: 0 }), C = A(_.smooth), M = A(_.snappy), N = "(min-width: 900px) 260px, (min-width: 600px) 34vw, 50vw", R = (e2, t2, i2) => Math.min(i2, Math.max(t2, e2)), E = (e2, t2, i2 = 0.55) => e2 * t2 * i2 / (t2 + i2 * Math.abs(e2)), T = (e2, t2, i2) => 1 === t2 ? 16 * e2 : 2 === t2 ? e2 * i2 : e2;
  function S(e2) {
    let t2 = e2.w < 640, i2 = t2 ? 56 : 64, r2 = t2 ? 128 : 140;
    return {
      top: i2,
      bottom: r2,
      pad: t2 ? 12 : 72,
      stage: Math.max(120, e2.h - i2 - r2)
    };
  }
  function L(e2, t2) {
    let i2 = S(t2), r2 = Math.min((t2.w - 2 * i2.pad) / e2.width, (i2.stage - 16) / e2.height), n2 = e2.width * r2, a2 = e2.height * r2;
    return {
      width: n2,
      height: a2,
      left: (t2.w - n2) / 2,
      top: i2.top + (i2.stage - a2) / 2
    };
  }
  function I(e2, t2, i2) {
    let r2 = e2.width * t2 / 2, n2 = e2.height * t2 / 2, a2 = e2.left + e2.width / 2, l2 = e2.top + e2.height / 2, o2 = [i2.w - a2 - r2, r2 - a2], s2 = [i2.h - l2 - n2, n2 - l2];
    return {
      minX: o2[0] > o2[1] ? 0 : o2[0],
      maxX: o2[0] > o2[1] ? 0 : o2[1],
      minY: s2[0] > s2[1] ? 0 : s2[0],
      maxY: s2[0] > s2[1] ? 0 : s2[1]
    };
  }
  function B({
    images: e2,
    minColumnWidth: t2 = 150,
    gap: i2 = 8,
    label: a2 = "Photo gallery",
    className: l2
  }) {
    let o2 = (0, n.useRef)(null), s2 = (0, n.useRef)([]), [c2, u2] = (0, n.useState)(3), [d2, h2] = (0, n.useState)(null), [g2, m2] = (0, n.useState)(0);
    (0, n.useLayoutEffect)(() => {
      let e3 = o2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(([e4]) => {
        u2(Math.max(2, Math.floor((e4.contentRect.width + i2) / (t2 + i2))));
      });
      return r2.observe(e3), () => r2.disconnect();
    }, [i2, t2]);
    let p2 = (0, n.useMemo)(() => {
      let t3;
      return t3 = Array.from({ length: c2 }, () => ({ height: 0, items: [] })), e2.forEach((e3, i3) => {
        let r2 = t3.reduce(
          (e4, t4) => t4.height < e4.height - 0.01 ? t4 : e4,
          t3[0]
        );
        r2.items.push(i3), r2.height += e3.height / e3.width;
      }), t3.map((e3) => e3.items);
    }, [e2, c2]), y2 = (0, n.useCallback)((e3) => s2.current[e3] ?? null, []), f2 = (0, n.useCallback)((e3) => {
      h2(null), s2.current[e3]?.focus({ preventScroll: true });
    }, []);
    return (0, r.jsxs)("div", {
      ref: o2,
      className: l2 ? `${w().root} ${l2}` : w().root,
      role: "region",
      "aria-label": a2,
      children: [
        (0, r.jsx)("div", {
          className: w().grid,
          style: { gap: i2 },
          children: p2.map(
            (t3, n2) => (0, r.jsx)(
              "div",
              {
                className: w().column,
                style: { gap: i2 },
                children: t3.map((t4) => {
                  let i3 = e2[t4];
                  return (0, r.jsx)(
                    "button",
                    {
                      ref: (e3) => {
                        s2.current[t4] = e3;
                      },
                      type: "button",
                      className: w().thumb,
                      "data-hidden": d2 && g2 === t4 ? "" : void 0,
                      style: { aspectRatio: `${i3.width} / ${i3.height}` },
                      "aria-label": `Open ${i3.title ?? i3.alt}, photo ${t4 + 1} of ${e2.length}`,
                      onClick: () => {
                        let e3;
                        return e3 = s2.current[t4]?.getBoundingClientRect(), void (m2(t4), h2({
                          start: t4,
                          from: e3 ? {
                            left: e3.left,
                            top: e3.top,
                            width: e3.width,
                            height: e3.height
                          } : null
                        }));
                      },
                      children: (0, r.jsx)(b.W, {
                        src: i3.src,
                        alt: "",
                        width: i3.width,
                        height: i3.height,
                        sizes: N,
                        draggable: false,
                        className: w().thumbImage
                      })
                    },
                    i3.src
                  );
                })
              },
              n2
            )
          )
        }),
        d2 && (0, r.jsx)(D, {
          images: e2,
          start: d2.start,
          from: d2.from,
          label: a2,
          getThumb: y2,
          onIndexChange: m2,
          onClosed: f2
        })
      ]
    });
  }
  function D({
    images: e2,
    start: t2,
    from: i2,
    label: x2,
    getThumb: v2,
    onIndexChange: _2,
    onClosed: k2
  }) {
    let A2 = !!(0, l.I)(), N2 = (0, n.useId)(), [B2, G2] = (0, n.useState)(() => ({
      w: window.innerWidth,
      h: window.innerHeight
    })), [$2, H2] = (0, n.useState)(t2), [O2, K2] = (0, n.useState)(false), [V, q] = (0, n.useState)(false), J = (0, n.useRef)(t2), F = (0, n.useRef)(B2), U = (0, n.useRef)(false), Z = (0, n.useRef)(null), Q = (0, n.useRef)(null), ee = (0, n.useRef)(null), et = (0, n.useRef)(null), ei = (0, n.useRef)({ mode: "idle" }), er = (0, n.useRef)(/* @__PURE__ */ new Map()), en = (0, n.useRef)(null), ea = (0, o.d)(-t2 * B2.w), el = (0, o.d)(0), eo = (0, o.d)(0), es = (0, o.d)(1), ec = (0, o.d)(1), eu = (0, o.d)(1), ed = (0, o.d)(0), eh = (0, o.d)(0), eg = (0, o.d)(0), em = (0, s.G)(eg, [0.6, 1], [0, 1]), ep = (0, s.G)(() => `${12 / Math.max(0.05, es.get() * eu.get())}px`);
    (0, c.L)(eu, "change", (e3) => K2(e3 > 1.01));
    let ey = (0, n.useCallback)((t3) => L(e2[t3], F.current), [e2]);
    (0, n.useLayoutEffect)(() => {
      let r2 = L(e2[t2], F.current);
      A2 || !i2 ? (ec.jump(0), (0, u.i)(ec, 1, { duration: j.standard, ease: Y })) : (el.jump(i2.left - r2.left), eo.jump(i2.top - r2.top), es.jump(i2.width / r2.width), (0, u.i)(el, 0, P), (0, u.i)(eo, 0, P), (0, u.i)(es, 1, P)), (0, u.i)(eg, 1, { duration: A2 ? j.standard : 0.34, ease: Y }), Q.current?.focus({ preventScroll: true });
    }, []), (0, n.useEffect)(() => {
      let e3 = document.documentElement, t3 = window.innerWidth - e3.clientWidth, i3 = {
        overflow: e3.style.overflow,
        paddingRight: e3.style.paddingRight
      };
      e3.style.overflow = "hidden", t3 > 0 && (e3.style.paddingRight = `${t3}px`);
      let r2 = () => {
        let e4 = { w: window.innerWidth, h: window.innerHeight };
        F.current = e4, ea.jump(-J.current * e4.w), eu.jump(1), ed.jump(0), eh.jump(0), G2(e4);
      };
      return window.addEventListener("resize", r2), () => {
        window.removeEventListener("resize", r2), e3.style.overflow = i3.overflow, e3.style.paddingRight = i3.paddingRight;
      };
    }, [ea, eu, ed, eh]);
    let ef = (0, n.useCallback)(() => {
      eu.stop(), ed.stop(), eh.stop();
    }, [eu, ed, eh]), eb = (0, n.useCallback)(
      (e3) => {
        let t3 = I(ey(J.current), eu.get(), F.current);
        if (A2) {
          (0, u.i)(ed, R(ed.get(), t3.minX, t3.maxX), {
            duration: j.fast,
            ease: X
          }), (0, u.i)(eh, R(eh.get(), t3.minY, t3.maxY), {
            duration: j.fast,
            ease: X
          });
          return;
        }
        let i3 = {
          type: "inertia",
          power: 0.7,
          timeConstant: 300,
          bounceStiffness: 320,
          bounceDamping: 36,
          restDelta: 0.5
        };
        (0, u.i)(ed, ed.get(), {
          ...i3,
          velocity: e3.x,
          min: t3.minX,
          max: t3.maxX
        }), (0, u.i)(eh, eh.get(), {
          ...i3,
          velocity: e3.y,
          min: t3.minY,
          max: t3.maxY
        });
      },
      [ey, ed, eh, A2, eu]
    ), ex = (0, n.useCallback)(
      (e3) => {
        if (!e3 || A2) {
          eu.jump(1), ed.jump(0), eh.jump(0);
          return;
        }
        (0, u.i)(eu, 1, M), (0, u.i)(ed, 0, M), (0, u.i)(eh, 0, M);
      },
      [A2, eu, ed, eh]
    ), ev = (0, n.useCallback)(
      (t3, i3 = 0) => {
        if (U.current) return;
        let r2 = F.current.w, n2 = J.current, a2 = R(t3, 0, e2.length - 1);
        a2 !== n2 && (ex(false), Math.abs(a2 - n2) > 1 && ea.jump(-(a2 - Math.sign(a2 - n2)) * r2 + (ea.get() + n2 * r2)), J.current = a2, H2(a2), _2(a2)), A2 ? ea.jump(-a2 * r2) : (0, u.i)(ea, -a2 * r2, { ...C, velocity: i3 });
      },
      [e2.length, _2, A2, ex, ea]
    ), ew = (0, n.useCallback)(
      (t3) => {
        if (U.current) return;
        let i3 = t3 ?? { x: el.getVelocity(), y: eo.getVelocity() };
        U.current = true, q(true);
        let r2 = J.current, n2 = F.current, a2 = L(e2[r2], n2), l2 = v2(r2);
        l2?.scrollIntoView({ block: "nearest", inline: "nearest" });
        let o2 = l2?.getBoundingClientRect(), s2 = !!o2 && o2.width > 0 && o2.bottom > 0 && o2.top < n2.h && o2.right > 0 && o2.left < n2.w, c2 = () => k2(r2);
        if ((0, u.i)(eg, 0, { duration: A2 ? j.standard : 0.3, ease: X }), A2 || !s2 || !o2) {
          ex(false), ea.jump(-r2 * n2.w), (0, u.i)(ec, 0, { duration: j.exit, ease: X }).then(c2);
          return;
        }
        ex(true), (0, u.i)(ea, -r2 * n2.w, z), (0, u.i)(el, o2.left - a2.left, { ...z, velocity: i3.x }), (0, u.i)(eo, o2.top - a2.top, { ...z, velocity: i3.y }), (0, u.i)(es, o2.width / a2.width, {
          ...z,
          velocity: es.getVelocity()
        }).then(c2);
      },
      [v2, ec, es, el, eo, e2, k2, A2, ex, ea, eg]
    ), e_ = (0, n.useCallback)(
      (e3, t3, i3, r2) => {
        let n2 = ey(J.current), a2 = eu.get(), l2 = n2.left + n2.width / 2, o2 = n2.top + n2.height / 2, s2 = R(i3, 1, 4), c2 = I(n2, s2, F.current), d2 = R(e3 - l2 - (e3 - l2 - ed.get()) * (s2 / a2), c2.minX, c2.maxX), h2 = R(t3 - o2 - (t3 - o2 - eh.get()) * (s2 / a2), c2.minY, c2.maxY);
        r2 && !A2 ? ((0, u.i)(eu, s2, M), (0, u.i)(ed, d2, M), (0, u.i)(eh, h2, M)) : (eu.jump(s2), ed.jump(d2), eh.jump(h2));
      },
      [ey, ed, eh, A2, eu]
    ), ej = (0, n.useCallback)(
      (e3, t3) => {
        let i3 = ey(J.current);
        if (eu.get() > 1.01) return void ex(true);
        let r2 = F.current, n2 = Math.max(r2.w / i3.width, r2.h / i3.height);
        e_(
          e3 ?? i3.left + i3.width / 2,
          t3 ?? i3.top + i3.height / 2,
          R(n2, 2, 4),
          true
        );
      },
      [ey, ex, e_, eu]
    );
    (0, n.useEffect)(() => {
      let e3 = Z.current;
      if (!e3) return;
      let t3 = { travel: 0, locked: false, timer: 0 }, i3 = (e4) => {
        if (e4.preventDefault(), U.current) return;
        let i4 = F.current, r3 = T(e4.deltaX, e4.deltaMode, i4.w), n3 = T(e4.deltaY, e4.deltaMode, i4.h);
        if (e4.ctrlKey) {
          ef(), e_(
            e4.clientX,
            e4.clientY,
            eu.get() * Math.exp(-(0.012 * R(n3, -50, 50))),
            false
          );
          return;
        }
        if (1.01 >= eu.get()) {
          if (window.clearTimeout(t3.timer), t3.timer = window.setTimeout(() => {
            t3.travel = 0, t3.locked = false;
          }, 160), t3.locked || Math.abs(r3) <= Math.abs(n3) || (t3.travel += r3, 70 > Math.abs(t3.travel)))
            return;
          t3.locked = true, ev(J.current + Math.sign(t3.travel));
          return;
        }
        ef();
        let a3 = I(ey(J.current), eu.get(), i4);
        ed.jump(R(ed.get() - r3, a3.minX, a3.maxX)), eh.jump(R(eh.get() - n3, a3.minY, a3.maxY));
      }, r2 = 1, n2 = (e4) => {
        e4.preventDefault(), ef(), r2 = eu.get();
      }, a2 = (e4) => {
        e4.preventDefault(), U.current || e_(e4.clientX, e4.clientY, r2 * e4.scale, false);
      }, l2 = (e4) => e4.preventDefault();
      return e3.addEventListener("wheel", i3, { passive: false }), e3.addEventListener("gesturestart", n2), e3.addEventListener("gesturechange", a2), e3.addEventListener("gestureend", l2), () => {
        window.clearTimeout(t3.timer), e3.removeEventListener("wheel", i3), e3.removeEventListener("gesturestart", n2), e3.removeEventListener("gesturechange", a2), e3.removeEventListener("gestureend", l2);
      };
    }, [ey, ev, ed, eh, ef, e_, eu]);
    let ek = (e3, t3) => {
      let i3 = ee.current?.getBoundingClientRect();
      return !!i3 && e3 >= i3.left && e3 <= i3.right && t3 >= i3.top && t3 <= i3.bottom;
    }, eY = (e3) => {
      if (!er.current.has(e3.pointerId)) return;
      er.current.delete(e3.pointerId), er.current.size || Z.current?.removeAttribute("data-panning");
      let t3 = ei.current, i3 = F.current;
      if ("pinch" === t3.mode) {
        let t4 = eu.get();
        if (t4 < 0.86 && "pointercancel" !== e3.type) {
          er.current.clear(), ei.current = { mode: "idle" }, ew();
          return;
        }
        t4 < 1 && (0, u.i)(eg, 1, { duration: j.fast, ease: Y });
        let r3 = ey(J.current), n3 = [...er.current.entries()][0];
        if (n3 && t4 > 1.01) {
          let [e4, t5] = n3;
          ei.current = {
            mode: "pan",
            id: e4,
            x: t5.x,
            y: t5.y,
            baseStrip: ea.get(),
            basePanX: ed.get(),
            basePanY: eh.get(),
            grabX: 0.5,
            grabY: 0.5,
            onImage: true,
            history: [{ ...t5, t: performance.now() }]
          };
        } else ei.current = { mode: "idle" };
        if (n3 && t4 > 1.01 && t4 <= 4) return;
        if (t4 <= 1.02) return void ex(true);
        let a3 = R(t4, 1, 4), l2 = I(r3, a3, i3);
        return (0, u.i)(eu, a3, M), (0, u.i)(ed, R(ed.get(), l2.minX, l2.maxX), M), void (0, u.i)(eh, R(eh.get(), l2.minY, l2.maxY), M);
      }
      if ("idle" === t3.mode || e3.pointerId !== t3.id) return;
      ei.current = { mode: "idle" };
      let r2 = (function(e4) {
        let t4 = e4[e4.length - 1];
        if (!t4 || performance.now() - t4.t > 60) return { x: 0, y: 0 };
        let i4 = t4;
        for (let r4 = e4.length - 1; r4 >= 0 && t4.t - e4[r4].t <= 80; r4--)
          i4 = e4[r4];
        let r3 = (t4.t - i4.t) / 1e3;
        return r3 > 0 ? { x: (t4.x - i4.x) / r3, y: (t4.y - i4.y) / r3 } : { x: 0, y: 0 };
      })(t3.history), n2 = e3.clientX - t3.x, a2 = e3.clientY - t3.y;
      if ("pending" === t3.mode) {
        if ("pointercancel" === e3.type) return;
        if (!t3.onImage) return void ew();
        if ("mouse" === e3.pointerType) return;
        let i4 = performance.now(), r3 = en.current;
        return void (r3 && i4 - r3.t < 300 && 30 > Math.hypot(r3.x - e3.clientX, r3.y - e3.clientY) ? (en.current = null, ej(e3.clientX, e3.clientY)) : en.current = { x: e3.clientX, y: e3.clientY, t: i4 });
      }
      if ("swipe" === t3.mode) {
        let e4 = n2 + ((e5, t5 = 0.995) => e5 / 1e3 * t5 / (1 - t5))(r2.x), t4 = Math.abs(r2.x) > 450 && Math.sign(r2.x) === Math.sign(n2) ? -Math.sign(r2.x) : 0, a3 = e4 < -(0.3 * i3.w) ? 1 : e4 > 0.3 * i3.w ? -1 : t4;
        ev(J.current + a3, r2.x);
        return;
      }
      if ("dismiss" === t3.mode) {
        if (a2 > 0 && (r2.y > 500 || a2 > 110 && r2.y > -150))
          return void ew(r2);
        let e4 = A2 ? { duration: j.fast, ease: X } : null;
        return (0, u.i)(el, 0, e4 ?? { ...M, velocity: r2.x }), (0, u.i)(eo, 0, e4 ?? { ...M, velocity: r2.y }), (0, u.i)(es, 1, e4 ?? M), void (0, u.i)(eg, 1, { duration: j.standard, ease: Y });
      }
      "pan" === t3.mode && eb(r2);
    };
    (0, n.useEffect)(() => {
      let t3 = et.current, i3 = t3?.querySelector(`[data-index="${$2}"]`);
      if (!t3 || !i3) return;
      let r2 = e2[$2], n2 = R(48 * r2.width / r2.height, 36, 72);
      t3.scrollTo({
        left: i3.offsetLeft + n2 / 2 - t3.clientWidth / 2,
        behavior: A2 ? "auto" : "smooth"
      });
    }, [e2, $2, A2]);
    let eX = S(B2), eA = e2[$2], eP = [$2 - 1, $2, $2 + 1].filter((t3) => t3 >= 0 && t3 < e2.length);
    return (0, a.createPortal)(
      (0, r.jsxs)("div", {
        ref: Z,
        className: w().overlay,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": N2,
        onKeyDown: (e3) => {
          if ("Escape" === e3.key) {
            e3.preventDefault(), ew();
            return;
          }
          if ("ArrowRight" === e3.key) {
            e3.preventDefault(), ev(J.current + 1);
            return;
          }
          if ("ArrowLeft" === e3.key) {
            e3.preventDefault(), ev(J.current - 1);
            return;
          }
          if ("+" === e3.key || "=" === e3.key) {
            e3.preventDefault();
            let t3 = ey(J.current);
            e_(t3.left + t3.width / 2, t3.top + t3.height / 2, 1.5 * eu.get(), true);
            return;
          }
          if ("-" === e3.key) {
            e3.preventDefault();
            let t3 = ey(J.current);
            e_(t3.left + t3.width / 2, t3.top + t3.height / 2, eu.get() / 1.5, true);
            return;
          }
          if ("0" === e3.key) {
            e3.preventDefault(), ex(true);
            return;
          }
          if ("Tab" === e3.key) {
            let t3 = [
              ...Z.current?.querySelectorAll("button:not([disabled])") ?? []
            ];
            if (!t3.length) return;
            let i3 = t3[0], r2 = t3[t3.length - 1];
            e3.shiftKey && document.activeElement === i3 ? (e3.preventDefault(), r2.focus()) : e3.shiftKey || document.activeElement !== r2 || (e3.preventDefault(), i3.focus());
          }
        },
        "data-closing": V || void 0,
        "data-zoomed": O2 || void 0,
        children: [
          (0, r.jsx)(d.PY1.div, {
            className: w().veil,
            style: { opacity: eg },
            "aria-hidden": "true"
          }),
          (0, r.jsx)("div", {
            className: w().stage,
            onPointerDown: (e3) => {
              if (U.current || "mouse" === e3.pointerType && 0 !== e3.button)
                return;
              if (e3.currentTarget.setPointerCapture(e3.pointerId), er.current.set(e3.pointerId, { x: e3.clientX, y: e3.clientY }), 2 === er.current.size) {
                let [e4, t4] = [...er.current.values()];
                (0, u.i)(ea, -J.current * F.current.w, M), (0, u.i)(el, 0, M), (0, u.i)(eo, 0, M), (0, u.i)(es, 1, M), (0, u.i)(eg, 1, { duration: j.fast }), ef(), ei.current = {
                  mode: "pinch",
                  distance: Math.hypot(e4.x - t4.x, e4.y - t4.y) || 1,
                  zoom: eu.get(),
                  midX: (e4.x + t4.x) / 2,
                  midY: (e4.y + t4.y) / 2,
                  panX: ed.get(),
                  panY: eh.get()
                };
                return;
              }
              if (er.current.size > 2) return;
              ea.stop(), ed.stop(), eh.stop(), eu.get() > 1.01 && eu.stop();
              let t3 = ey(J.current);
              ei.current = {
                mode: "pending",
                id: e3.pointerId,
                x: e3.clientX,
                y: e3.clientY,
                baseStrip: ea.get(),
                basePanX: ed.get(),
                basePanY: eh.get(),
                grabX: R((e3.clientX - t3.left) / t3.width, 0, 1),
                grabY: R((e3.clientY - t3.top) / t3.height, 0, 1),
                onImage: ek(e3.clientX, e3.clientY),
                history: [{ x: e3.clientX, y: e3.clientY, t: performance.now() }]
              };
            },
            onPointerMove: (t3) => {
              if (!er.current.has(t3.pointerId)) return;
              er.current.set(t3.pointerId, { x: t3.clientX, y: t3.clientY });
              let i3 = ei.current, r2 = F.current;
              if ("pinch" === i3.mode) {
                if (er.current.size < 2) return;
                let [e3, t4] = [...er.current.values()], r3 = (e3.x + t4.x) / 2, n3 = (e3.y + t4.y) / 2, a3 = i3.zoom * Math.hypot(e3.x - t4.x, e3.y - t4.y) / i3.distance, l2 = a3 < 1 ? 1 - E(1 - a3, 1, 0.4) : a3 > 4 ? 4 + E(a3 - 4, 4, 0.4) : a3, o2 = ey(J.current), s2 = o2.left + o2.width / 2, c2 = o2.top + o2.height / 2;
                eu.set(l2), eg.set(l2 < 1 ? R(1 - (1 - l2) * 4, 0.25, 1) : 1), ed.set(
                  i3.midX - s2 - (i3.midX - s2 - i3.panX) * (l2 / i3.zoom) + (r3 - i3.midX)
                ), eh.set(
                  i3.midY - c2 - (i3.midY - c2 - i3.panY) * (l2 / i3.zoom) + (n3 - i3.midY)
                );
                return;
              }
              if ("idle" === i3.mode || t3.pointerId !== i3.id) return;
              i3.history.push({
                x: t3.clientX,
                y: t3.clientY,
                t: performance.now()
              }), i3.history.length > 12 && i3.history.shift();
              let n2 = t3.clientX - i3.x, a2 = t3.clientY - i3.y;
              if ("pending" === i3.mode) {
                if (6 > Math.hypot(n2, a2)) return;
                i3.mode = eu.get() > 1.01 ? "pan" : Math.abs(n2) > Math.abs(a2) ? "swipe" : "dismiss", "pan" === i3.mode && Z.current?.setAttribute("data-panning", "");
              }
              if ("swipe" === i3.mode) {
                let t4 = -(e2.length - 1) * r2.w, a3 = i3.baseStrip + n2;
                ea.set(a3 > 0 ? E(a3, r2.w) : a3 < t4 ? t4 + E(a3 - t4, r2.w) : a3);
              } else if ("dismiss" === i3.mode) {
                let e3 = R(Math.max(0, a2) / (0.6 * r2.h), 0, 1), t4 = 1 - 0.4 * e3, l2 = ey(J.current);
                es.set(t4), el.set(n2 + (1 - t4) * l2.width * i3.grabX), eo.set(
                  (a2 < 0 ? -E(-a2, r2.h, 0.35) : a2) + (1 - t4) * l2.height * i3.grabY
                ), eg.set(1 - 0.85 * e3);
              } else if ("pan" === i3.mode) {
                let e3 = I(ey(J.current), eu.get(), r2), t4 = (e4, t5, i4, r3) => e4 < t5 ? t5 - E(t5 - e4, r3) : e4 > i4 ? i4 + E(e4 - i4, r3) : e4;
                ed.set(t4(i3.basePanX + n2, e3.minX, e3.maxX, r2.w)), eh.set(t4(i3.basePanY + a2, e3.minY, e3.maxY, r2.h));
              }
            },
            onPointerUp: eY,
            onPointerCancel: eY,
            onDoubleClick: (e3) => {
              !U.current && ek(e3.clientX, e3.clientY) && ej(e3.clientX, e3.clientY);
            },
            children: (0, r.jsx)(d.PY1.div, {
              className: w().strip,
              style: { x: ea },
              children: eP.map((t3) => {
                let i3 = L(e2[t3], B2), n2 = t3 === $2;
                return (0, r.jsx)(
                  "div",
                  {
                    className: w().slide,
                    style: { left: t3 * B2.w, width: B2.w, height: B2.h },
                    "aria-hidden": !n2 || void 0,
                    children: (0, r.jsx)(W, {
                      image: e2[t3],
                      frame: i3,
                      active: n2,
                      imageRef: n2 ? ee : void 0,
                      hero: n2 ? { x: el, y: eo, scale: es, opacity: ec } : null,
                      zoom: n2 ? { scale: eu, x: ed, y: eh, radius: ep } : null
                    })
                  },
                  e2[t3].src
                );
              })
            })
          }),
          (0, r.jsxs)(d.PY1.div, {
            className: w().topBar,
            style: { opacity: em, height: eX.top },
            children: [
              (0, r.jsxs)("p", {
                className: w().counter,
                "aria-live": "polite",
                children: [
                  (0, r.jsx)("span", { className: w().num, children: $2 + 1 }),
                  " of ",
                  (0, r.jsx)("span", {
                    className: w().num,
                    children: e2.length
                  })
                ]
              }),
              (0, r.jsxs)("h2", {
                id: N2,
                className: w().srOnly,
                children: [x2, ": ", eA.title ?? eA.alt]
              }),
              (0, r.jsxs)("div", {
                className: w().actions,
                children: [
                  (0, r.jsx)("button", {
                    type: "button",
                    className: w().iconButton,
                    onClick: () => ej(),
                    "aria-label": O2 ? "Zoom out" : "Zoom in",
                    "aria-pressed": O2,
                    children: O2 ? (0, r.jsx)(g.A, {
                      size: 20,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }) : (0, r.jsx)(m.A, {
                      size: 20,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, r.jsx)("button", {
                    ref: Q,
                    type: "button",
                    className: w().iconButton,
                    onClick: () => ew(),
                    "aria-label": "Close viewer",
                    children: (0, r.jsx)(p.A, {
                      size: 20,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            ]
          }),
          (0, r.jsxs)(d.PY1.div, {
            className: w().sideNav,
            style: { opacity: em },
            children: [
              (0, r.jsx)("button", {
                type: "button",
                className: w().navButton,
                "data-side": "prev",
                onClick: () => ev($2 - 1),
                disabled: 0 === $2,
                "aria-label": "Previous photo",
                children: (0, r.jsx)(y.A, {
                  size: 20,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              }),
              (0, r.jsx)("button", {
                type: "button",
                className: w().navButton,
                "data-side": "next",
                onClick: () => ev($2 + 1),
                disabled: $2 === e2.length - 1,
                "aria-label": "Next photo",
                children: (0, r.jsx)(f.A, {
                  size: 20,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            ]
          }),
          (0, r.jsxs)(d.PY1.div, {
            className: w().bottom,
            style: { opacity: em, height: eX.bottom },
            children: [
              (0, r.jsx)("div", {
                className: w().captions,
                children: (0, r.jsx)(h.N, {
                  initial: false,
                  children: (0, r.jsxs)(
                    d.PY1.div,
                    {
                      className: w().caption,
                      initial: A2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, transition: { duration: j.fast } },
                      transition: A2 ? { duration: j.fast } : { duration: j.standard, ease: Y, delay: 0.04 },
                      children: [
                        eA.title && (0, r.jsx)("p", {
                          className: w().captionTitle,
                          children: eA.title
                        }),
                        eA.caption && (0, r.jsx)("p", {
                          className: w().captionText,
                          children: eA.caption
                        })
                      ]
                    },
                    $2
                  )
                })
              }),
              (0, r.jsx)("div", {
                ref: et,
                className: w().thumbStrip,
                role: "group",
                "aria-label": "All photos",
                children: e2.map((e3, t3) => {
                  let i3 = R(48 * e3.width / e3.height, 36, 72);
                  return (0, r.jsx)(
                    "button",
                    {
                      type: "button",
                      "data-index": t3,
                      className: w().stripThumb,
                      "data-active": t3 === $2 || void 0,
                      style: { width: t3 === $2 ? i3 : 36 },
                      onClick: () => ev(t3),
                      "aria-label": `Show ${e3.title ?? e3.alt}`,
                      "aria-current": t3 === $2 ? "true" : void 0,
                      children: (0, r.jsx)(b.W, {
                        src: e3.src,
                        alt: "",
                        width: e3.width,
                        height: e3.height,
                        sizes: "80px",
                        draggable: false
                      })
                    },
                    e3.src
                  );
                })
              })
            ]
          })
        ]
      }),
      document.body
    );
  }
  function W({ image: e2, frame: t2, active: i2, hero: a2, zoom: l2, imageRef: o2 }) {
    let [s2, c2] = (0, n.useState)(false);
    return (0, r.jsx)(d.PY1.div, {
      className: w().frame,
      style: {
        left: t2.left,
        top: t2.top,
        width: t2.width,
        height: t2.height,
        ...a2 ?? {}
      },
      children: (0, r.jsxs)(d.PY1.div, {
        ref: o2,
        className: w().zoom,
        style: l2 ? { scale: l2.scale, x: l2.x, y: l2.y, borderRadius: l2.radius } : { borderRadius: 12 },
        children: [
          (0, r.jsx)(b.W, {
            src: e2.src,
            alt: "",
            width: e2.width,
            height: e2.height,
            sizes: N,
            draggable: false,
            className: w().layer
          }),
          (0, r.jsx)(b.W, {
            src: e2.src,
            alt: i2 ? e2.alt : "",
            width: e2.width,
            height: e2.height,
            sizes: "100vw",
            draggable: false,
            className: w().layer,
            "data-loaded": s2 || void 0,
            onLoad: () => c2(true),
            loading: i2 ? "eager" : "lazy"
          })
        ]
      })
    });
  }
  var G = i(95330), $ = i.n(G);
  let H = [
    {
      src: "media/photos/lisbon-tram.jpg",
      width: 1600,
      height: 1064,
      alt: "A yellow tram passing ochre buildings on a Lisbon street",
      title: "Tram 28 through Baixa",
      caption: "Photo by Aayush Gupta"
    },
    {
      src: "media/photos/lisbon-rooftops.jpg",
      width: 1280,
      height: 1600,
      alt: "Terracotta rooftops of Alfama running down to the river",
      title: "Alfama rooftops at noon",
      caption: "Photo by Tom Byrom"
    },
    {
      src: "media/photos/chef-plating.jpg",
      width: 1600,
      height: 1600,
      alt: "A chef spooning sauce over a plated dish in low light",
      title: "Last touch at the pass",
      caption: "Photo by Urban Gyllstr\xF6m"
    },
    {
      src: "media/photos/lisbon-bridge.jpg",
      width: 1600,
      height: 1166,
      alt: "The red suspension bridge over the Tagus under a clear sky",
      title: "Across the Tagus",
      caption: "Photo by Svetlana Gumerova"
    },
    {
      src: "media/photos/terracotta-waves.jpg",
      width: 1067,
      height: 1600,
      alt: "Curving terracotta facade against a blue sky",
      title: "Terracotta curves",
      caption: "Photo by Ricardo Gomez Angel"
    },
    {
      src: "media/photos/restaurant.jpg",
      width: 1067,
      height: 1600,
      alt: "A bright dining room with wooden tables and paper lanterns",
      title: "Lunch under the lanterns",
      caption: "Photo by Jelezniac Bianca"
    },
    {
      src: "media/photos/coastline.jpg",
      width: 1200,
      height: 1600,
      alt: "Waves breaking along a long green coastline at sunset",
      title: "Coast road north of Cascais",
      caption: "Photo by Vera Lee Bird"
    },
    {
      src: "media/photos/wine-bar.jpg",
      width: 1600,
      height: 1067,
      alt: "A carafe of red wine on a wooden bar counter",
      title: "House red, poured to order",
      caption: "Photo by Fenghua"
    },
    {
      src: "media/photos/curved-facade.jpg",
      width: 1600,
      height: 1067,
      alt: "White curved balconies of a modern building",
      title: "White balconies in Bel\xE9m",
      caption: "Photo by Kimon Maritz"
    },
    {
      src: "media/photos/salmon-dinner.jpg",
      width: 1067,
      height: 1600,
      alt: "Seared salmon on a bed of vegetables beside a glass of wine",
      title: "Salmon with spring vegetables",
      caption: "Photo by Casey Lee"
    },
    {
      src: "media/photos/pool-house.jpg",
      width: 1600,
      height: 900,
      alt: "A modern house with a long pool and deck chairs",
      title: "Pool house in Comporta",
      caption: "Photo by Salman Saqib"
    },
    {
      src: "media/photos/sea-at-dusk.jpg",
      width: 1067,
      height: 1600,
      alt: "Calm sea at dusk seen from a ferry railing",
      title: "Ferry back at dusk",
      caption: "Photo by Hannah Reding"
    }
  ];
  function O() {
    return (0, r.jsx)("div", {
      className: $().demo,
      children: (0, r.jsx)(B, {
        images: H,
        label: "Lisbon photos",
        minColumnWidth: 140,
        gap: 8
      })
    });
  }
  let K = O;
}

__m(__module,__exports,__require);
});
A.regCss(85860, ".root{width:100%;min-width:0}\n.grid{display:flex;align-items:flex-start}\n.column{display:flex;flex:1 1 0;flex-direction:column;min-width:0}\n.thumb{position:relative;display:block;width:100%;padding:0;overflow:hidden;border:0;border-radius:12px;background:var(--surface-muted);cursor:zoom-in;-webkit-tap-highlight-color:transparent}\n.thumb:active .thumbImage{filter:brightness(.9)}\n@media (hover:hover) and (pointer:fine){.thumb:hover .thumbImage{filter:brightness(.94)}\n.thumb[data-hidden]{visibility:hidden}\n.thumbImage{display:block;width:100%;height:100%;object-fit:cover;user-select:none;-webkit-user-drag:none;transition:filter var(--duration-fast) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.layer+.layer,.stripThumb,.thumbImage{transition-duration:0s}\n.overlay{position:fixed;inset:0;z-index:1000;overflow:hidden;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);touch-action:none;overscroll-behavior:contain}\n.overlay *,.overlay :after,.overlay :before{box-sizing:border-box}\n.overlay[data-closing]{pointer-events:none}\n.overlay[data-zoomed] .zoom{cursor:grab}\n.overlay[data-panning],.overlay[data-panning] .zoom{cursor:grabbing}\n.veil{position:absolute;inset:0;background:var(--background)}\n.stage{position:absolute;inset:0;cursor:default;user-select:none}\n.strip{position:absolute;inset:0;will-change:transform}\n.slide{position:absolute;top:0}\n.frame{position:absolute;transform-origin:0 0;will-change:transform}\n.zoom{position:relative;width:100%;height:100%;overflow:hidden;background:var(--surface-muted);cursor:zoom-in;will-change:transform}\n.layer{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;pointer-events:none;user-select:none;-webkit-user-drag:none}\n.layer+.layer{opacity:0;transition:opacity var(--duration-standard) var(--ease-standard)}\n.layer+.layer[data-loaded]{opacity:1}\n.topBar{position:absolute;top:0;right:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 12px 0 22px}\n.counter{margin:0;color:var(--text-secondary)}\n.counter,.num{font-variant-numeric:tabular-nums}\n.actions{display:flex;gap:4px}\n.iconButton,.navButton{display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--foreground);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.iconButton:active,.navButton:active{transform:scale(.94)}\n@media (hover:hover) and (pointer:fine){.iconButton:hover{background:var(--surface-muted)}\n.iconButton:active,.navButton:active{transform:none}\n.navButton{width:44px;height:44px;margin-top:-22px;border:1px solid var(--border);background:var(--surface-raised);box-shadow:var(--shadow-raised);pointer-events:auto}\n.navButton:disabled{opacity:0;pointer-events:none}\n.sideNav{position:absolute;top:50%;right:16px;left:16px;display:flex;justify-content:space-between;height:0;pointer-events:none}\n@media (max-width:639px){.sideNav{display:none}\n.bottom{position:absolute;right:0;bottom:0;left:0;display:grid;grid-template-rows:1fr auto;gap:10px;padding-bottom:calc(16px + env(safe-area-inset-bottom));pointer-events:none}\n.captions{display:grid;align-items:end;justify-items:center;min-width:0;padding-inline:20px}\n.caption{grid-area:1/1;min-width:0;max-width:36rem;text-align:center}\n.captionText,.captionTitle{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.captionTitle{font-weight:500}\n.captionText{color:var(--text-secondary);font-size:var(--text-xs)}\n.thumbStrip{display:flex;align-items:center;gap:4px;height:52px;padding-inline:calc(50% - 18px);overflow-x:auto;scrollbar-width:none;pointer-events:auto;touch-action:pan-x}\n.thumbStrip::-webkit-scrollbar{display:none}\n.stripThumb{position:relative;flex:none;height:48px;padding:0;overflow:hidden;border:0;border-radius:8px;background:var(--surface-muted);opacity:.5;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:width var(--duration-standard) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.stripThumb[data-active]{opacity:1}\n.stripThumb img{display:block;width:100%;height:100%;object-fit:cover;pointer-events:none}\n@media (hover:hover) and (pointer:fine){.stripThumb:hover{opacity:.8}\n.stripThumb[data-active]:hover{opacity:1}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}", {"root":"root","grid":"grid","column":"column","thumb":"thumb","thumbImage":"thumbImage","layer":"layer","stripThumb":"stripThumb","overlay":"overlay","zoom":"zoom","veil":"veil","stage":"stage","strip":"strip","slide":"slide","frame":"frame","topBar":"topBar","counter":"counter","num":"num","actions":"actions","iconButton":"iconButton","navButton":"navButton","sideNav":"sideNav","bottom":"bottom","captions":"captions","caption":"caption","captionText":"captionText","captionTitle":"captionTitle","thumbStrip":"thumbStrip","srOnly":"srOnly"});
A.reg(89959, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "zoom-out",
    size: 24,
    node: [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(95330, ".demo{box-sizing:border-box;width:min(100%,640px);margin-inline:auto}", {"demo":"demo"});
A.cssFor("lightbox-gallery", [85860,95330]);
A.item("lightbox-gallery", {entry:62134, export:"LightboxGalleryDemo", kind:"component", tier:"pro", unresolved:[]});
})();