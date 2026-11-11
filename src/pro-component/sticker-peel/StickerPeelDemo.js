function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  "use strict";
  r.r(e), r.d(e, { StickerPeelDemo: () => E });
  var n = r(95155), a = r(12115), i = r(92298), s = r(18310), l = r(28245), o = r(22535), c = r(55809), u = r(92171), h = r(25354), d = r(7770), p = r(516), f = r.n(p);
  let m = { stiffness: 420, damping: 36, mass: 0.7 }, y = { stiffness: 380, damping: 40, mass: 0.9 }, g = { stiffness: 300, damping: 36 }, x = { duration: d.T.duration.standard, ease: d.T.ease.standard }, M = { duration: d.T.duration.exit, ease: d.T.ease.standard }, k = 35 * Math.PI / 180, b = () => () => {
  };
  function j(t2, e2) {
    let r2 = [];
    for (let n2 = 0; n2 < t2.length; n2++) {
      let a2 = t2[n2], i2 = t2[(n2 + 1) % t2.length], s2 = e2(a2), l2 = e2(i2);
      if (s2 >= 0 && r2.push(a2), s2 >= 0 != l2 >= 0) {
        let t3 = s2 / (s2 - l2);
        r2.push([a2[0] + (i2[0] - a2[0]) * t3, a2[1] + (i2[1] - a2[1]) * t3]);
      }
    }
    return r2;
  }
  let v = (t2) => `polygon(${t2.map(([t3, e2]) => `${t3.toFixed(2)}px ${e2.toFixed(2)}px`).join(", ")})`;
  function _(t2, e2, r2, n2, a2) {
    if ("circle" === t2) {
      let t3 = n2 - e2 / 2, i3 = a2 - r2 / 2, s3 = Math.hypot(t3, i3);
      s3 < 1 ? (t3 = 0.7071, i3 = 0.7071) : (t3 /= s3, i3 /= s3);
      let l3 = Math.min(e2, r2) / 2;
      return {
        point: [e2 / 2 + t3 * l3, r2 / 2 + i3 * l3],
        dir: [-t3, -i3],
        corner: -1
      };
    }
    let i2 = n2 >= e2 / 2, s2 = a2 >= r2 / 2, l2 = Math.SQRT1_2;
    return {
      point: [i2 ? e2 : 0, s2 ? r2 : 0],
      dir: [i2 ? -l2 : l2, s2 ? -l2 : l2],
      corner: +!!i2 + 2 * !!s2
    };
  }
  function w(t2, e2, r2) {
    return t2 < e2 ? e2 - (e2 - t2) * 40 / (40 + (e2 - t2)) : t2 > r2 ? r2 + (t2 - r2) * 40 / (40 + (t2 - r2)) : t2;
  }
  function S({
    item: t2,
    placement: e2,
    board: r2,
    z: i2,
    reduced: s2,
    describedBy: d2,
    onFront: p2,
    onPlace: b2,
    announce: T2
  }) {
    let $2 = t2.shape ?? "rounded", Y2 = (0, a.useRef)(null), N2 = (0, a.useRef)(null), P2 = (0, a.useRef)(null), E2 = (0, a.useRef)(null), R = (0, a.useRef)(null), [X, A] = (0, a.useState)(false), C = (0, l.d)(`${100 * e2.x}%`), I = (0, l.d)(`${100 * e2.y}%`), D = (0, l.d)(0), L = (0, l.d)(0), z = (0, o.z)(D, y), G = (0, o.z)(L, y), W = (0, l.d)(e2.rotate), O = (0, o.z)(W, g), B = (0, l.d)(0), F = (0, c.G)(B, [0, 1], [1, 1.03]), V = (0, l.d)(0), H = (0, l.d)(0), q = (0, o.z)(V, m), Q = (0, o.z)(H, m), J = (0, a.useRef)({
      point: [0, 0],
      dir: [Math.SQRT1_2, Math.SQRT1_2],
      corner: 0
    }), K = (0, a.useRef)(null), U = (0, a.useRef)(null), Z = (0, a.useRef)(null), tt = (0, a.useRef)(null), te = () => ({
      w: N2.current?.offsetWidth ?? 0,
      h: N2.current?.offsetHeight ?? 0
    }), tr = () => ({
      W: r2.current?.clientWidth ?? 0,
      H: r2.current?.clientHeight ?? 0
    }), tn = (t3, e3, r3 = false) => {
      V.set(t3), H.set(e3), (r3 || s2) && (q.jump(t3), Q.jump(e3));
    }, ta = (t3) => {
      let { w: e3, h: r3 } = te(), n2 = 2 * (function(t4, e4, r4, n3, a2) {
        let i3 = (i4) => {
          var s4, l3, o3, c3;
          let u2, h2;
          return 0 >= (s4 = t4[0] + e4[0] * i4 - r4 / 2, l3 = t4[1] + e4[1] * i4 - n3 / 2, o3 = r4 / 2, c3 = n3 / 2, Math.hypot(
            Math.max(u2 = Math.abs(s4) - o3 + a2, 0),
            Math.max(h2 = Math.abs(l3) - c3 + a2, 0)
          ) + Math.min(Math.max(u2, h2), 0) - a2);
        };
        if (i3(0)) return 0;
        let s3 = Math.min(r4, n3), l2 = 1;
        for (; l2 <= s3 && !i3(l2); ) l2 += 1;
        if (l2 > s3) return 0;
        let o2 = l2 - 1, c2 = l2;
        for (let t5 = 0; t5 < 8; t5++) {
          let t6 = (o2 + c2) / 2;
          i3(t6) ? c2 = t6 : o2 = t6;
        }
        return c2;
      })(
        t3.point,
        t3.dir,
        e3,
        r3,
        "rounded" === $2 ? Math.min(18, e3 / 2, r3 / 2) : Math.min(e3, r3) / 2
      ) + 9;
      return [t3.dir[0] * n2, t3.dir[1] * n2];
    }, ti = () => {
      var t3;
      let e3 = N2.current, r3 = P2.current, n2 = E2.current, a2 = R.current;
      if (!e3 || !r3 || !n2 || !a2) return;
      let [i3, s3] = J.current.dir, l2 = q.get(), o2 = Q.get(), c2 = l2 * i3 + o2 * s3, u2 = Math.max(
        -Math.abs(c2) * Math.tan(k),
        Math.min(Math.abs(c2) * Math.tan(k), -(l2 * s3) + o2 * i3)
      ), h2 = c2 > 0 ? i3 * c2 - s3 * u2 : 0, d3 = c2 > 0 ? s3 * c2 + i3 * u2 : 0, p3 = Math.hypot(l2, o2);
      if (K.current && p3 < 0.5 && (J.current = K.current, K.current = null, !U.current)) {
        let [t4, e4] = ta(J.current);
        tn(t4, e4);
      }
      if (p3 < 0.5 || 0.5 > Math.hypot(h2, d3)) {
        e3.style.clipPath = "", r3.style.visibility = "hidden";
        return;
      }
      let f2 = e3.offsetWidth, m2 = e3.offsetHeight, [y2, g2] = J.current.point, x2 = Math.hypot(h2, d3), M2 = h2 / x2, b3 = d3 / x2, _2 = y2 + h2 / 2, w2 = g2 + d3 / 2, S2 = [
        [0, 0],
        [f2, 0],
        [f2, m2],
        [0, m2]
      ], T3 = ([t4, e4]) => (t4 - _2) * M2 + (e4 - w2) * b3, $3 = j(S2, T3), Y3 = j(S2, (t4) => -T3(t4));
      if (e3.style.clipPath = $3.length > 2 ? v($3) : "inset(50%)", Y3.length < 3) {
        r3.style.visibility = "hidden";
        return;
      }
      r3.style.visibility = "visible";
      let X2 = Math.min(1, x2 / 80), A2 = 1 - 0.06 * X2, C2 = _2 * M2 + w2 * b3, I2 = -(1 + A2) * M2 * b3;
      n2.style.transform = `matrix(${1 - (1 + A2) * M2 * M2}, ${I2}, ${I2}, ${1 - (1 + A2) * b3 * b3}, ${(1 + A2) * C2 * M2}, ${(1 + A2) * C2 * b3})`, n2.style.clipPath = v(Y3);
      let D2 = -O.get() * Math.PI / 180, L2 = 0.8 + 2 * X2, z2 = -Math.sin(D2) * L2, G2 = Math.cos(D2) * L2;
      r3.style.filter = `drop-shadow(${z2.toFixed(2)}px ${G2.toFixed(2)}px ${(1.5 + 3 * X2).toFixed(2)}px oklch(0% 0 0 / ${(0.1 + 0.06 * X2).toFixed(3)}))`;
      let W2 = 2 * Math.hypot(f2, m2);
      t3 = `linear-gradient(90deg, oklch(0% 0 0 / .07) 0px, oklch(0% 0 0 / 0) ${Math.max(6, Math.min(18, 0.25 * x2))}px)`, a2.style.width = `${W2}px`, a2.style.height = `${2 * W2}px`, a2.style.transform = `translate(${_2}px, ${w2}px) rotate(${Math.atan2(-b3, -M2)}rad) translateY(-50%)`, a2.style.backgroundImage = t3;
    }, ts = (0, a.useRef)(ti);
    (0, a.useEffect)(() => {
      ts.current = ti;
    }), (0, a.useEffect)(() => {
      let t3 = () => ts.current(), e3 = q.on("change", t3), r3 = Q.on("change", t3);
      return () => {
        e3(), r3();
      };
    }, [q, Q]);
    let tl = (0, a.useRef)(e2);
    (0, a.useLayoutEffect)(() => {
      let t3 = tl.current;
      if (tl.current = e2, t3.x === e2.x && t3.y === e2.y && t3.rotate === e2.rotate)
        return;
      let { W: r3, H: n2 } = tr(), a2 = (e2.x - t3.x) * r3, i3 = (e2.y - t3.y) * n2;
      C.set(`${100 * e2.x}%`), I.set(`${100 * e2.y}%`), D.jump(D.get() - a2), L.jump(L.get() - i3), z.jump(z.get() - a2), G.jump(G.get() - i3);
      let l2 = tt.current;
      if ((tt.current = null, !(l2 && 1e-6 > Math.abs(l2.x - e2.x) && 1e-6 > Math.abs(l2.y - e2.y))) && !U.current && !Z.current) {
        if (s2) {
          D.jump(0), L.jump(0), z.jump(0), G.jump(0), W.jump(e2.rotate), O.jump(e2.rotate);
          return;
        }
        D.set(0), L.set(0), W.set(e2.rotate);
      }
    });
    let to = (t3, e3) => {
      let r3 = Y2.current.getBoundingClientRect(), { w: n2, h: a2 } = te(), i3 = -O.get() * Math.PI / 180, s3 = F.get() || 1, l2 = (t3 - (r3.left + r3.width / 2)) / s3, o2 = (e3 - (r3.top + r3.height / 2)) / s3;
      return [
        n2 / 2 + l2 * Math.cos(i3) - o2 * Math.sin(i3),
        a2 / 2 + l2 * Math.sin(i3) + o2 * Math.cos(i3)
      ];
    }, tc = (t3, e3) => {
      let r3 = -O.get() * Math.PI / 180;
      return [
        t3 * Math.cos(r3) - e3 * Math.sin(r3),
        t3 * Math.sin(r3) + e3 * Math.cos(r3)
      ];
    }, tu = (t3 = O.get()) => {
      let { w: r3, h: n2 } = te(), { W: a2, H: i3 } = tr(), s3 = t3 * Math.PI / 180, l2 = Math.abs(Math.cos(s3)), o2 = Math.abs(Math.sin(s3)), c2 = (r3 * l2 + n2 * o2) / 2 + 4, u2 = (r3 * o2 + n2 * l2) / 2 + 4, h2 = e2.x * a2, d3 = e2.y * i3;
      return {
        minX: Math.min(0, c2 - h2),
        maxX: Math.max(0, a2 - c2 - h2),
        minY: Math.min(0, u2 - d3),
        maxY: Math.max(0, i3 - u2 - d3)
      };
    }, th = () => {
      tn(0, 0), s2 ? B.jump(1) : (0, u.i)(B, 1, x), A(true);
    }, td = () => {
      A(false);
      let r3 = e2.rotate, { minX: n2, maxX: a2, minY: i3, maxY: l2 } = tu(r3), o2 = Math.min(a2, Math.max(n2, z.get())), c2 = Math.min(l2, Math.max(i3, G.get())), h2 = Math.abs(o2 - z.get()) + Math.abs(c2 - G.get()) > 0.5;
      D.jump(o2), L.jump(c2), (!h2 || s2) && (z.jump(o2), G.jump(c2)), s2 ? B.jump(0) : (0, u.i)(B, 0, M), ((r4, n3, a3) => {
        let { W: i4, H: s3 } = tr();
        if (!i4 || !s3) return;
        let l3 = {
          x: e2.x + r4 / i4,
          y: e2.y + n3 / s3,
          rotate: Math.round(10 * a3) / 10
        };
        tt.current = l3, b2(t2.id, l3);
      })(o2, c2, r3);
    }, tp = (t3) => {
      if (U.current || "mouse" !== t3.pointerType || s2 || X || Z.current)
        return;
      let { w: e3, h: r3 } = te(), [n2, a2] = to(t3.clientX, t3.clientY), i3 = _($2, e3, r3, n2, a2), l2 = J.current, o2 = Math.hypot(q.get(), Q.get()) > 0.5;
      if ("circle" !== $2 && o2 && i3.corner !== l2.corner || "circle" === $2 && o2 && Math.abs(
        Math.atan2(
          l2.dir[0] * i3.dir[1] - l2.dir[1] * i3.dir[0],
          l2.dir[0] * i3.dir[0] + l2.dir[1] * i3.dir[1]
        )
      ) > 0.6) {
        K.current = i3, tn(0, 0);
        return;
      }
      if (K.current = null, J.current = i3, "circle" === $2 && o2) {
        let t4 = Math.hypot(q.get(), Q.get());
        q.jump(i3.dir[0] * t4), Q.jump(i3.dir[1] * t4);
      }
      let [c2, u2] = ta(i3);
      tn(c2, u2), ti();
    }, tf = (e3) => {
      let r3 = U.current;
      r3.mode = "held";
      let { w: n2, h: a2 } = te(), [i3, s3] = J.current.point, l2 = O.get() * Math.PI / 180, o2 = Math.cos(l2), c2 = Math.sin(l2), u2 = i3 - n2 / 2, h2 = s3 - a2 / 2;
      r3.grabX = (u2 * o2 - h2 * c2) * 0.8, r3.grabY = (u2 * c2 + h2 * o2) * 0.8, th(), T2(`${t2.label} peeled off.`), tm(e3.clientX, e3.clientY);
    }, tm = (t3, n2) => {
      let a2 = U.current;
      if (!a2) return;
      let i3 = r2.current.getBoundingClientRect(), { W: l2, H: o2 } = tr(), { minX: c2, maxX: u2, minY: h2, maxY: d3 } = tu();
      D.set(w(t3 - a2.grabX - i3.left - e2.x * l2, c2, u2)), L.set(w(n2 - a2.grabY - i3.top - e2.y * o2, h2, d3)), s2 && (z.jump(D.get()), G.jump(L.get()));
    }, ty = (e3) => {
      let r3 = U.current;
      if (r3 && e3.pointerId === r3.id) {
        if (U.current = null, "held" === r3.mode) {
          td(), T2(`${t2.label} stuck down.`);
          return;
        }
        tn(0, 0);
      }
    };
    return (0, n.jsxs)(h.PY1.button, {
      ref: Y2,
      type: "button",
      className: f().sticker,
      "data-shape": $2,
      "data-held": X || void 0,
      "aria-label": t2.label,
      "aria-roledescription": "sticker",
      "aria-pressed": X,
      "aria-describedby": d2,
      style: {
        left: C,
        top: I,
        x: z,
        y: G,
        rotate: O,
        scale: F,
        zIndex: X ? 1e3 : i2
      },
      onPointerEnter: tp,
      onPointerMove: (t3) => {
        U.current ? ((t4) => {
          let e3 = U.current;
          if (!e3 || t4.pointerId !== e3.id) return;
          let r3 = Math.max(1, t4.timeStamp - e3.lastT), [n2, a2] = tc(t4.clientX - e3.lastX, t4.clientY - e3.lastY), [i3, s3] = J.current.dir;
          if (e3.pullSpeed = 0.6 * e3.pullSpeed + (n2 * i3 + a2 * s3) / r3 * 400, e3.lastX = t4.clientX, e3.lastY = t4.clientY, e3.lastT = t4.timeStamp, "held" === e3.mode)
            return tm(t4.clientX, t4.clientY);
          let { w: l2, h: o2 } = te(), [c2, u2] = tc(t4.clientX - e3.startX, t4.clientY - e3.startY), h2 = e3.fromX + c2, d3 = e3.fromY + u2, p3 = h2 * i3 + d3 * s3, [f2, m2] = ta(J.current), y2 = Math.hypot(f2, m2);
          if (p3 < y2 && Math.hypot(c2, u2) > 36 && c2 * i3 + u2 * s3 < 0)
            return tf(t4);
          let g2 = Math.max(y2, p3), x2 = Math.max(
            -g2 * Math.tan(k),
            Math.min(g2 * Math.tan(k), -(h2 * s3) + d3 * i3)
          );
          V.set(i3 * g2 - s3 * x2), H.set(s3 * g2 + i3 * x2);
          let [M2, b3] = J.current.point, j2 = Math.max(
            ...[
              [0, 0],
              [l2, 0],
              [l2, o2],
              [0, o2]
            ].map(([t5, e4]) => (t5 - M2) * i3 + (e4 - b3) * s3)
          );
          (g2 > 0.95 * j2 || g2 > 0.45 * j2 && e3.pullSpeed > 1100 || Math.hypot(c2, u2) > Math.max(90, 1.15 * j2)) && tf(t4);
        })(t3) : tp(t3);
      },
      onPointerLeave: (t3) => {
        U.current || "mouse" !== t3.pointerType || X || (K.current = null, tn(0, 0));
      },
      onPointerDown: (e3) => {
        if (e3.button > 0 || U.current) return;
        e3.preventDefault(), Y2.current?.focus({ preventScroll: true });
        try {
          e3.currentTarget.setPointerCapture(e3.pointerId);
        } catch {
        }
        p2(t2.id);
        let { w: r3, h: n2 } = te(), [a2, i3] = to(e3.clientX, e3.clientY);
        K.current = null;
        let l2 = Math.hypot(q.get(), Q.get()) > 1.5, o2 = _($2, r3, n2, a2, i3);
        l2 && ("circle" === $2 || o2.corner === J.current.corner) || (J.current = o2, tn(0, 0, true)), V.set(q.get()), H.set(Q.get());
        let c2 = Y2.current.getBoundingClientRect();
        if (U.current = {
          id: e3.pointerId,
          startX: e3.clientX,
          startY: e3.clientY,
          fromX: q.get(),
          fromY: Q.get(),
          mode: "peel",
          grabX: e3.clientX - (c2.left + c2.width / 2),
          grabY: e3.clientY - (c2.top + c2.height / 2),
          lastX: e3.clientX,
          lastY: e3.clientY,
          lastT: e3.timeStamp,
          pullSpeed: 0
        }, s2)
          U.current.mode = "held", th();
        else {
          let [t3, e4] = ta(J.current);
          Math.hypot(q.get(), Q.get()) < Math.hypot(t3, e4) && (V.set(t3), H.set(e4), U.current.fromX = t3, U.current.fromY = e4);
        }
      },
      onPointerUp: ty,
      onPointerCancel: ty,
      onLostPointerCapture: ty,
      onKeyDown: (e3) => {
        let r3 = null !== Z.current;
        if ("Enter" === e3.key || " " === e3.key) {
          if (e3.preventDefault(), e3.repeat || U.current) return;
          r3 ? (Z.current = null, td(), T2(`${t2.label} stuck down.`)) : (p2(t2.id), Z.current = { x: D.get(), y: L.get() }, th(), T2(
            `${t2.label} picked up. Move with the arrow keys, press Enter to stick it down, or Escape to put it back.`
          ));
          return;
        }
        if (!r3) return;
        if ("Escape" === e3.key || "Tab" === e3.key) {
          "Escape" === e3.key && (e3.preventDefault(), D.set(Z.current.x), L.set(Z.current.y), s2 && (z.jump(D.get()), G.jump(L.get())));
          let r4 = "Escape" === e3.key ? Z.current : null;
          Z.current = null, r4 ? (A(false), s2 ? B.jump(0) : (0, u.i)(B, 0, M)) : td(), T2(r4 ? `${t2.label} put back.` : `${t2.label} stuck down.`);
          return;
        }
        let n2 = e3.shiftKey ? 40 : 10, a2 = {
          ArrowLeft: [-n2, 0],
          ArrowRight: [n2, 0],
          ArrowUp: [0, -n2],
          ArrowDown: [0, n2]
        }[e3.key];
        if (!a2) return;
        e3.preventDefault();
        let { minX: i3, maxX: l2, minY: o2, maxY: c2 } = tu();
        D.set(Math.min(l2, Math.max(i3, D.get() + a2[0]))), L.set(Math.min(c2, Math.max(o2, L.get() + a2[1]))), s2 && (z.jump(D.get()), G.jump(L.get()));
      },
      onContextMenu: (t3) => t3.preventDefault(),
      onBlur: () => {
        Z.current && (Z.current = null, td());
      },
      children: [
        (0, n.jsx)(h.PY1.span, {
          className: f().liftShadow,
          "aria-hidden": "true",
          style: { opacity: B }
        }),
        (0, n.jsx)("span", {
          ref: N2,
          className: f().front,
          "aria-hidden": "true",
          children: (0, n.jsx)("span", {
            className: f().face,
            children: t2.content
          })
        }),
        (0, n.jsx)("span", {
          ref: P2,
          className: f().flap,
          "aria-hidden": "true",
          children: (0, n.jsx)("span", {
            ref: E2,
            className: f().back,
            children: (0, n.jsx)("span", { ref: R, className: f().curl })
          })
        })
      ]
    });
  }
  function T({
    stickers: t2,
    positions: e2,
    onPositionsChange: r2,
    label: i2 = "Stickers",
    children: l2,
    className: o2,
    style: c2
  }) {
    let u2, h2 = (u2 = (0, a.useSyncExternalStore)(
      b,
      () => true,
      () => false
    ), !!(0, s.I)() && u2), d2 = (0, a.useId)(), p2 = (0, a.useRef)(null), [m2, y2] = (0, a.useState)({}), [g2, x2] = (0, a.useState)(() => t2.map((t3) => t3.id)), [M2, k2] = (0, a.useState)(""), j2 = (0, a.useMemo)(
      () => t2.map(
        (t3) => e2?.[t3.id] ?? m2[t3.id] ?? { x: t3.x, y: t3.y, rotate: t3.rotate ?? 0 }
      ),
      [t2, e2, m2]
    ), v2 = (0, a.useCallback)(
      (t3) => x2((e3) => [...e3.filter((e4) => e4 !== t3), t3]),
      []
    ), _2 = (n2, a2) => {
      let i3 = Object.fromEntries(
        t2.map((t3, e3) => [t3.id, t3.id === n2 ? a2 : j2[e3]])
      );
      void 0 === e2 && y2(i3), r2?.(i3);
    };
    return (0, n.jsxs)("div", {
      ref: p2,
      className: [f().board, o2].filter(Boolean).join(" "),
      style: c2,
      role: "group",
      "aria-label": i2,
      children: [
        l2,
        t2.map(
          (t3, e3) => (0, n.jsx)(
            S,
            {
              item: t3,
              placement: j2[e3],
              board: p2,
              z: Math.max(0, g2.indexOf(t3.id)) + 1,
              reduced: h2,
              describedBy: `${d2}-help`,
              onFront: v2,
              onPlace: _2,
              announce: k2
            },
            t3.id
          )
        ),
        (0, n.jsx)("span", {
          id: `${d2}-help`,
          className: f().srOnly,
          children: "Drag to peel and move. With the keyboard, press Enter to pick up, arrow keys to move, and Enter to stick down."
        }),
        (0, n.jsx)("span", {
          className: f().srOnly,
          role: "status",
          children: M2
        })
      ]
    });
  }
  var $ = r(43752), Y = r.n($);
  let N = [
    {
      id: "arc",
      label: "Arc mark sticker",
      shape: "circle",
      x: 0.3,
      y: 0.36,
      rotate: -6,
      content: (0, n.jsx)(function() {
        return (0, n.jsx)("span", {
          className: Y().mark,
          children: (0, n.jsxs)("svg", {
            viewBox: "0 0 64 64",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              (0, n.jsx)("path", {
                d: "M9 48V29C9 15 19 7 32 7s23 8 23 22v19"
              }),
              (0, n.jsx)("path", {
                d: "M20 48V31c0-8 5-13 12-13s12 5 12 13v17"
              }),
              (0, n.jsx)("path", { d: "M32 38v10" })
            ]
          })
        });
      }, {})
    },
    {
      id: "care",
      label: "Made with care sticker",
      shape: "pill",
      x: 0.66,
      y: 0.3,
      rotate: 4,
      content: (0, n.jsx)("span", {
        className: Y().care,
        children: "Made with care"
      })
    },
    {
      id: "spark",
      label: "Sparkle sticker",
      shape: "rounded",
      x: 0.7,
      y: 0.68,
      rotate: 8,
      content: (0, n.jsx)(function() {
        return (0, n.jsx)("span", {
          className: Y().spark,
          children: (0, n.jsx)("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, n.jsx)("path", {
              d: "M12 3.5c.55 4.3 2.7 6.45 7 7-4.3.55-6.45 2.7-7 7-.55-4.3-2.7-6.45-7-7 4.3-.55 6.45-2.7 7-7Z",
              fill: "currentColor"
            })
          })
        });
      }, {})
    },
    {
      id: "ship",
      label: "Ship it sticker",
      shape: "pill",
      x: 0.34,
      y: 0.7,
      rotate: -3,
      content: (0, n.jsx)("span", {
        className: Y().ship,
        children: "Ship it"
      })
    }
  ], P = () => Object.fromEntries(
    N.map((t2) => [t2.id, { x: t2.x, y: t2.y, rotate: t2.rotate ?? 0 }])
  );
  function E() {
    let [t2, e2] = (0, a.useState)(P), r2 = N.some((e3) => {
      let r3 = t2[e3.id];
      return Math.abs(r3.x - e3.x) > 2e-3 || Math.abs(r3.y - e3.y) > 2e-3;
    });
    return (0, n.jsxs)("div", {
      className: Y().demo,
      children: [
        (0, n.jsx)(T, {
          className: Y().surface,
          stickers: N,
          positions: t2,
          onPositionsChange: e2,
          label: "Stickers"
        }),
        (0, n.jsx)("div", {
          className: Y().footer,
          children: (0, n.jsxs)("button", {
            type: "button",
            className: Y().reset,
            onClick: () => e2(P()),
            disabled: !r2,
            children: [
              (0, n.jsx)(i.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              "Reset"
            ]
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}