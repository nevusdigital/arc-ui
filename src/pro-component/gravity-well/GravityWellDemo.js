function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { GravityWellDemo: () => u, default: () => v });
  var i = t(95155), r = t(12115), n = t(18310), o = t(93794), l = t.n(o);
  let s = () => () => {
  }, d = 2 * Math.sqrt(320);
  function h({
    children: e2,
    columns: a2,
    minTileSize: t2 = 56,
    gap: o2 = 8,
    radius: c2 = 150,
    strength: p2 = 1,
    onPulse: m2,
    label: g2 = "Gravity well",
    className: w2,
    style: u2
  }) {
    let v2, f = (v2 = (0, r.useSyncExternalStore)(
      s,
      () => true,
      () => false
    ), !!(0, n.I)() && v2), y = (0, r.useRef)(null), b = (0, r.useRef)([]), x = (0, r.useRef)({ radius: c2, strength: p2, onPulse: m2 });
    (0, r.useEffect)(() => {
      x.current = { radius: c2, strength: p2, onPulse: m2 };
    });
    let k = r.Children.toArray(e2), j = k.length;
    (0, r.useEffect)(() => {
      let e3 = y.current;
      if (!e3) return;
      let a3 = b.current.slice(0, j).filter((e4) => !!e4), t3 = a3.length, i2 = new Float32Array(t3), r2 = new Float32Array(t3), n2 = new Float32Array(t3), o3 = new Float32Array(t3), l2 = new Float32Array(t3), s2 = new Float32Array(t3), h2 = new Float32Array(t3).fill(1), c3 = new Float32Array(t3), p3 = new Float32Array(t3), m3 = [], g3 = 0, w3 = 0, u3 = false, v3 = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        tx: 0,
        ty: 0,
        presence: 0,
        target: 0,
        placed: false
      }, k2 = Math.floor(t3 / 2), A2 = () => {
        for (let e4 = 0; e4 < t3; e4++) {
          let t4 = a3[e4];
          i2[e4] = t4.offsetLeft + t4.offsetWidth / 2, r2[e4] = t4.offsetTop + t4.offsetHeight / 2;
        }
      }, M = () => {
        g3 || u3 || (g3 = requestAnimationFrame(E));
      }, E = (e4) => {
        g3 = 0;
        let u4 = Math.min(1 / 30, w3 ? (e4 - w3) / 1e3 : 1 / 60);
        w3 = e4;
        let { radius: y2, strength: b2 } = x.current, k3 = y2 * y2;
        v3.vx += ((v3.tx - v3.x) * 320 - v3.vx * d) * u4, v3.vy += ((v3.ty - v3.y) * 320 - v3.vy * d) * u4, v3.x += v3.vx * u4, v3.y += v3.vy * u4, v3.presence += (v3.target - v3.presence) * (1 - Math.exp(-(7 * u4))), 2e-3 > Math.abs(v3.target - v3.presence) && (v3.presence = v3.target);
        let j2 = v3.presence !== v3.target || Math.hypot(v3.tx - v3.x, v3.ty - v3.y) > 0.1;
        (m3 = m3.filter((a4) => (e4 - a4.start) / 1e3 * 900 < 12 * y2)).length && (j2 = true);
        for (let d2 = 0; d2 < t3; d2++) {
          let t4 = v3.x - i2[d2], g4 = v3.y - r2[d2], w4 = t4 * t4 + g4 * g4, x2 = f ? 0 : Math.exp(-w4 / (2 * k3)) * v3.presence * b2, A3 = f ? 0 : Math.exp(-w4 / k3) * v3.presence * Math.min(1.2, b2), M2 = 0.36 * t4 * x2, E2 = 0.36 * g4 * x2, L2 = 1 - 0.46 * A3;
          for (let a4 of m3) {
            if (a4.hit[d2]) continue;
            let t5 = i2[d2] - a4.x, n3 = r2[d2] - a4.y, o4 = Math.hypot(t5, n3) || 1;
            if (!f && (e4 - a4.start) / 1e3 * 900 < o4) continue;
            a4.hit[d2] = 1;
            let h3 = Math.exp(-o4 / (3.2 * y2));
            if (!f) {
              let e5 = 720 * h3;
              l2[d2] += t5 / o4 * e5, s2[d2] += n3 / o4 * e5, c3[d2] -= 3.2 * h3;
            }
            p3[d2] = Math.max(p3[d2], Math.min(1, 1.4 * h3));
          }
          l2[d2] += ((M2 - n2[d2]) * 190 - 15 * l2[d2]) * u4, s2[d2] += ((E2 - o3[d2]) * 190 - 15 * s2[d2]) * u4, c3[d2] += ((L2 - h2[d2]) * 190 - 15 * c3[d2]) * u4, n2[d2] += l2[d2] * u4, o3[d2] += s2[d2] * u4, h2[d2] += c3[d2] * u4, (Math.abs(l2[d2]) + Math.abs(s2[d2]) > 0.02 || Math.abs(M2 - n2[d2]) + Math.abs(E2 - o3[d2]) > 0.02 || Math.abs(c3[d2]) > 1e-3 || Math.abs(L2 - h2[d2]) > 5e-4) && (j2 = true), a3[d2].style.transform = `translate3d(${n2[d2].toFixed(2)}px, ${o3[d2].toFixed(2)}px, 0) scale(${h2[d2].toFixed(4)})`, a3[d2].style.opacity = (1 - 0.38 * A3).toFixed(3), a3[d2].style.zIndex = String(10 - Math.round(9 * A3)), p3[d2] > 0 && (p3[d2] = p3[d2] < 0.01 ? 0 : p3[d2] * Math.exp(-(5 * u4)), a3[d2].style.setProperty("--gravity-well-ring", p3[d2].toFixed(3)), p3[d2] && (j2 = true));
        }
        j2 ? M() : w3 = 0;
      }, L = (a4) => {
        let t4 = e3.getBoundingClientRect();
        return { x: a4.clientX - t4.left, y: a4.clientY - t4.top };
      }, F = (e4, a4, t4) => {
        v3.tx = e4, v3.ty = a4, (t4 || !v3.placed) && (v3.x = e4, v3.y = a4, v3.vx = 0, v3.vy = 0, v3.placed = true);
      }, _ = (e4, a4) => {
        m3.push({
          x: e4,
          y: a4,
          start: performance.now(),
          hit: new Uint8Array(t3)
        }), m3.length > 4 && m3.shift(), x.current.onPulse?.({ x: e4, y: a4 }), M();
      }, z = (e4) => {
        let a4 = L(e4);
        F(a4.x, a4.y, v3.presence < 0.02), v3.target = 1, M();
      }, C = () => {
        v3.target = 0, M();
      }, D = (e4) => {
        let a4 = L(e4);
        F(a4.x, a4.y, v3.presence < 0.02), v3.target = 1, _(a4.x, a4.y);
      }, N = (e4) => {
        "mouse" !== e4.pointerType && C();
      }, R = (e4) => {
        F(i2[k2 = Math.max(0, Math.min(t3 - 1, e4))], r2[k2], v3.presence < 0.02), v3.target = 1, M();
      }, S = () => {
        let e4 = 0;
        for (; e4 < t3 && r2[e4] === r2[0]; ) e4++;
        return Math.max(1, e4);
      }, T = (e4) => {
        let a4 = {
          ArrowLeft: -1,
          ArrowRight: 1,
          ArrowUp: -S(),
          ArrowDown: S(),
          Home: -t3,
          End: t3
        }[e4.key];
        if (void 0 !== a4) {
          e4.preventDefault(), R(k2 + a4);
          return;
        }
        (" " === e4.key || "Enter" === e4.key) && (e4.preventDefault(), v3.presence < 0.02 && R(k2), _(i2[k2], r2[k2]));
      }, H = (a4) => {
        a4.target === e3 && e3.matches(":focus-visible") && R(k2);
      }, W = () => {
        v3.target = 0, M();
      };
      A2();
      let B = new ResizeObserver(() => {
        A2(), M();
      });
      return B.observe(e3), e3.addEventListener("pointermove", z), e3.addEventListener("pointerleave", C), e3.addEventListener("pointerdown", D), e3.addEventListener("pointerup", N), e3.addEventListener("pointercancel", C), e3.addEventListener("keydown", T), e3.addEventListener("focus", H), e3.addEventListener("blur", W), () => {
        for (let t4 of (u3 = true, cancelAnimationFrame(g3), B.disconnect(), e3.removeEventListener("pointermove", z), e3.removeEventListener("pointerleave", C), e3.removeEventListener("pointerdown", D), e3.removeEventListener("pointerup", N), e3.removeEventListener("pointercancel", C), e3.removeEventListener("keydown", T), e3.removeEventListener("focus", H), e3.removeEventListener("blur", W), a3))
          t4.style.transform = "", t4.style.opacity = "", t4.style.zIndex = "", t4.style.removeProperty("--gravity-well-ring");
      };
    }, [j, f]);
    let A = {
      "--gravity-well-min": `${t2}px`,
      gap: o2,
      ...a2 ? { gridTemplateColumns: `repeat(${a2}, minmax(0, 1fr))` } : {}
    };
    return (0, i.jsx)("div", {
      ref: y,
      className: [l().root, w2].filter(Boolean).join(" "),
      style: { ...A, ...u2 },
      role: "group",
      "aria-label": g2,
      "aria-roledescription": "gravity well",
      tabIndex: 0,
      children: k.map(
        (e3, a3) => (0, i.jsx)(
          "div",
          {
            ref: (e4) => {
              b.current[a3] = e4;
            },
            className: l().tile,
            children: e3
          },
          a3
        )
      )
    });
  }
  var c = t(67752), p = t(70457), m = t.n(p);
  let g = [...c.KQ, ...c.c0.slice(0, 15)].map((e2) => ({
    src: e2.src,
    alt: "alt" in e2 ? e2.alt : e2.name
  })), w = g.map((e2, a2) => g[17 * a2 % g.length]);
  function u() {
    return (0, i.jsx)("div", {
      className: m().demo,
      children: (0, i.jsx)(h, {
        label: "Studio moodboard",
        className: m().well,
        children: w.map(
          (e2) => (0, i.jsx)(
            "img",
            {
              className: m().image,
              src: e2.src,
              alt: e2.alt,
              loading: "lazy",
              decoding: "async",
              draggable: false
            },
            e2.src
          )
        )
      })
    });
  }
  let v = u;
}

__m(__module,__exports,__require);
}