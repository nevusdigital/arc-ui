function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { RealtimeStreamDemo: () => S, default: () => P });
  var r = a(95155), n = a(12115), l = a(18310), i = a(61792), s = a(28245), o = a(92171), u = a(55809), h = a(22535), c = a(25354), d = a(7770), m = a(54782), f = a.n(m);
  let { spring: p } = d.T, g = { stiffness: 520, damping: 44, restDelta: 0.01 }, y = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), v = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), x = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }), M = () => () => {
  };
  function w(e2, t2) {
    let a2 = e2 / Math.max(1, t2), r2 = 10 ** Math.floor(Math.log10(a2 || 1)), n2 = a2 / r2;
    return (n2 <= 1 ? 1 : n2 <= 2 ? 2 : n2 <= 2.5 ? 2.5 : n2 <= 5 ? 5 : 10) * r2;
  }
  function _(e2, t2) {
    let a2 = 0, r2 = e2.length;
    for (; a2 < r2; ) {
      let n2 = a2 + r2 >> 1;
      e2[n2].t < t2 ? a2 = n2 + 1 : r2 = n2;
    }
    return a2;
  }
  let b = (e2) => e2 >= 0.5 ? 1 : 1 - Math.exp(-(12 * e2)) * Math.cos(16 * e2);
  function j({
    points: e2,
    label: t2,
    unit: a2 = "",
    windowMs: d2 = 3e4,
    interval: m2 = 1e3,
    height: T2 = 200,
    formatValue: k2,
    formatTime: S2 = (e3) => x.format(e3),
    paused: P2,
    defaultPaused: A = false,
    onPausedChange: N,
    pauseOnHover: E = true,
    min: $,
    max: D,
    emptyLabel: I = "Waiting for data",
    ref: C,
    className: R
  }) {
    let W, L = (W = (0, n.useSyncExternalStore)(
      M,
      () => true,
      () => false
    ), !!(0, l.I)() && W), O = (0, n.useRef)(null), F = (0, n.useRef)(null), G = (0, n.useRef)(null), V = (0, n.useRef)(null), z = (0, n.useRef)(null);
    (0, n.useImperativeHandle)(C, () => O.current);
    let U = (0, i.W)(O, { amount: 0 }), Y = 0 === e2.length, B = e2[e2.length - 1], [H, J] = (0, n.useState)(A), q = P2 ?? H, K = (e3) => {
      void 0 === P2 && J(e3), e3 !== q && N?.(e3);
    }, [X, Q] = (0, n.useState)(null), [Z, ee] = (0, n.useState)(false), et = q || E && Z || null !== X, [ea, er] = (0, n.useState)(0), [en, el] = (0, n.useState)(B?.t);
    B?.t !== en && (el(B?.t), et && void 0 !== en && er((e3) => e3 + 1));
    let [ei, es] = (0, n.useState)(et);
    ei !== et && (es(et), et || er(0));
    let [eo, eu] = (0, n.useState)(""), [eh, ec] = (0, n.useState)(null);
    B?.anomaly && B.t !== eh && (ec(B.t), eu(
      `${"string" == typeof B.anomaly ? B.anomaly : "Anomaly"} at ${S2(B.t)}, ${k2 ? k2(B.value) : v.format(B.value)}${a2 ? ` ${a2}` : ""}`
    ));
    let ed = (0, n.useRef)({
      points: e2,
      windowMs: d2,
      interval: m2,
      height: T2,
      frozen: et,
      reduced: L,
      hover: X,
      min: $,
      max: D
    });
    (0, n.useLayoutEffect)(() => {
      ed.current = {
        points: e2,
        windowMs: d2,
        interval: m2,
        height: T2,
        frozen: et,
        reduced: L,
        hover: X,
        min: $,
        max: D
      };
    });
    let em = (0, n.useRef)({
      t: 0,
      skew: 0,
      lo: 0,
      hi: 1,
      ready: false,
      arrivals: /* @__PURE__ */ new Map(),
      width: 0,
      lastLatest: -1 / 0
    }), ef = (0, n.useRef)({
      ink: "#111",
      accent: "#333",
      surface: "#fff",
      border: "#eee",
      muted: "#888",
      mark: "#e26a2b",
      font: "system-ui, sans-serif"
    }), ep = (0, n.useRef)(() => {
      let e3 = V.current;
      if (!e3) return;
      let t3 = e3.children, a3 = (e4) => getComputedStyle(t3[e4]).color;
      ef.current = {
        ink: a3(0),
        accent: a3(1),
        surface: a3(2),
        border: a3(3),
        muted: a3(4),
        mark: a3(5),
        font: getComputedStyle(e3).fontFamily || "system-ui, sans-serif"
      };
    });
    (0, n.useEffect)(() => {
      let e3 = () => ep.current();
      e3();
      let t3 = new MutationObserver(e3);
      t3.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      });
      let a3 = window.matchMedia("(prefers-color-scheme: dark)");
      return a3.addEventListener("change", e3), () => {
        t3.disconnect(), a3.removeEventListener("change", e3);
      };
    }, []), (0, n.useEffect)(() => {
      let e3 = G.current, t3 = F.current;
      if (!e3 || !t3) return;
      let a3 = e3.getContext("2d");
      if (!a3) return;
      let r2 = 0, n2 = performance.now(), l2 = 0, i2 = (r3) => {
        let i3;
        l2++ % 30 == 0 && ep.current();
        let s3 = Math.min(0.1, (r3 - n2) / 1e3);
        n2 = r3;
        let o2 = ed.current, u2 = em.current, h2 = ef.current, c2 = t3.clientWidth, d3 = o2.height, m3 = window.devicePixelRatio || 1;
        (e3.width !== Math.round(c2 * m3) || e3.height !== Math.round(d3 * m3)) && (e3.width = Math.round(c2 * m3), e3.height = Math.round(d3 * m3)), u2.width = c2, a3.setTransform(m3, 0, 0, m3, 0, 0), a3.clearRect(0, 0, c2, d3);
        let f2 = o2.points;
        if (!f2.length || c2 <= 44) return;
        let p2 = f2[f2.length - 1];
        if (p2.t !== u2.lastLatest) {
          for (let e4 of (u2.lastLatest = p2.t, u2.arrivals.set(p2.t, r3), u2.arrivals.keys()))
            e4 < p2.t - 2 * o2.windowMs && u2.arrivals.delete(e4);
          u2.skew = u2.ready ? u2.skew + (p2.t - Date.now() - u2.skew) * 0.25 : p2.t - Date.now();
        }
        let g2 = o2.reduced ? p2.t : Math.min(Date.now() + u2.skew - o2.interval, p2.t);
        u2.ready || (u2.t = g2, u2.ready = true), o2.frozen || (u2.t = o2.reduced || 4 > Math.abs(g2 - u2.t) ? g2 : u2.t + (g2 - u2.t) * (1 - Math.exp(-(7 * s3))));
        let x2 = u2.t, M2 = x2 - o2.windowMs, j2 = c2 - 44, T3 = d3 - 14 - 22, k3 = (e4) => (e4 - M2) / o2.windowMs * j2, S3 = Math.max(0, _(f2, M2) - 1), P3 = Math.min(f2.length, _(f2, x2) + 1), A2 = f2.slice(S3, P3), N2 = _(f2, x2), E2 = N2 - 1;
        if (E2 < 0) i3 = f2[0];
        else if (N2 >= f2.length) i3 = f2[f2.length - 1];
        else {
          let e4 = f2[E2], t4 = f2[N2], a4 = (x2 - e4.t) / Math.max(1, t4.t - e4.t);
          i3 = { t: x2, value: e4.value + (t4.value - e4.value) * y(a4, 0, 1) };
        }
        let $2 = A2.filter((e4) => e4.t <= x2);
        $2.push(i3);
        let D2 = o2.min ?? 1 / 0, I2 = o2.max ?? -1 / 0;
        if (void 0 === o2.min || void 0 === o2.max)
          for (let e4 of $2)
            void 0 === o2.min && (D2 = Math.min(D2, e4.value)), void 0 === o2.max && (I2 = Math.max(I2, e4.value));
        Number.isFinite(D2) && Number.isFinite(I2) || (D2 = 0, I2 = 1);
        let C2 = Math.max(I2 - D2, 0.1 * Math.abs(I2), 1e-6), R2 = o2.min ?? D2 - 0.18 * C2, W2 = o2.max ?? I2 + 0.18 * C2;
        if (o2.reduced || u2.hi - u2.lo <= 0) u2.lo = R2, u2.hi = W2;
        else {
          let e4 = 1 - Math.exp(-(4 * s3));
          u2.lo += (R2 - u2.lo) * e4, u2.hi += (W2 - u2.hi) * e4;
        }
        let L2 = (e4) => 14 + (1 - (e4 - u2.lo) / (u2.hi - u2.lo)) * T3, O2 = w(u2.hi - u2.lo, Math.max(2, Math.floor(T3 / 44)));
        a3.font = `12px ${h2.font}`, a3.textBaseline = "middle", a3.textAlign = "left";
        for (let e4 = Math.ceil(u2.lo / O2) * O2; e4 <= u2.hi; e4 += O2) {
          let t4 = Math.round(L2(e4)) + 0.5;
          t4 < 12 || t4 > d3 - 22 + 2 || (a3.strokeStyle = h2.border, a3.lineWidth = 1, a3.globalAlpha = 1, a3.beginPath(), a3.moveTo(0, t4), a3.lineTo(j2, t4), a3.stroke(), a3.fillStyle = h2.muted, a3.fillText(v.format(Math.round(100 * e4) / 100), j2 + 8, t4));
        }
        a3.textBaseline = "alphabetic";
        let F2 = 1e3 * w(o2.windowMs / 1e3, Math.max(2, Math.floor(j2 / 90)));
        for (let e4 = 0; e4 <= o2.windowMs; e4 += F2) {
          let t4 = j2 - e4 / o2.windowMs * j2;
          a3.textAlign = 0 === e4 ? "right" : t4 < 20 ? "left" : "center", a3.fillStyle = h2.muted, a3.fillText(
            0 === e4 ? "now" : `\u2212${Math.round(e4 / 1e3)}s`,
            t4,
            d3 - 6
          );
        }
        a3.save(), a3.beginPath(), a3.rect(0, 0, j2, d3), a3.clip();
        let G2 = $2.map((e4) => [k3(e4.t), L2(e4.value)]), V2 = G2.map((e4, t4) => {
          if (G2.length < 2) return 0;
          let a4 = t4 > 0 ? (G2[t4][1] - G2[t4 - 1][1]) / Math.max(1e-6, G2[t4][0] - G2[t4 - 1][0]) : null, r4 = t4 < G2.length - 1 ? (G2[t4 + 1][1] - G2[t4][1]) / Math.max(1e-6, G2[t4 + 1][0] - G2[t4][0]) : null;
          return null === a4 ? r4 ?? 0 : null === r4 ? a4 : a4 * r4 <= 0 ? 0 : 2 * a4 * r4 / (a4 + r4);
        }), z2 = () => {
          a3.moveTo(G2[0][0], G2[0][1]);
          for (let e4 = 0; e4 < G2.length - 1; e4++) {
            let t4 = (G2[e4 + 1][0] - G2[e4][0]) / 3;
            a3.bezierCurveTo(
              G2[e4][0] + t4,
              G2[e4][1] + V2[e4] * t4,
              G2[e4 + 1][0] - t4,
              G2[e4 + 1][1] - V2[e4 + 1] * t4,
              G2[e4 + 1][0],
              G2[e4 + 1][1]
            );
          }
        };
        G2.length > 1 && (a3.beginPath(), z2(), a3.lineTo(G2[G2.length - 1][0], d3 - 22), a3.lineTo(G2[0][0], d3 - 22), a3.closePath(), a3.fillStyle = h2.accent, a3.globalAlpha = 0.08, a3.fill(), a3.beginPath(), z2(), a3.globalAlpha = 1, a3.strokeStyle = h2.accent, a3.lineWidth = 2, a3.lineJoin = "round", a3.lineCap = "round", a3.stroke());
        let U2 = -1 / 0;
        for (let e4 of A2) {
          if (!e4.anomaly || e4.t > x2) continue;
          let t4 = k3(e4.t), n3 = L2(e4.value), l3 = u2.arrivals.get(e4.t), i4 = o2.reduced || void 0 === l3 ? 1 : (r3 - l3) / 1e3 - o2.interval / 1e3;
          if (i4 < 0) continue;
          let s4 = o2.reduced ? 1 : b(i4);
          a3.globalAlpha = 0.45 * y(4 * i4, 0, 1), a3.strokeStyle = h2.mark, a3.lineWidth = 1, a3.beginPath(), a3.moveTo(Math.round(t4) + 0.5, 24), a3.lineTo(Math.round(t4) + 0.5, n3 - 6), a3.stroke(), a3.globalAlpha = 1, a3.beginPath(), a3.arc(t4, n3, 6 * s4, 0, 2 * Math.PI), a3.fillStyle = h2.surface, a3.fill(), a3.beginPath(), a3.arc(t4, n3, 4 * s4, 0, 2 * Math.PI), a3.fillStyle = h2.mark, a3.fill();
          let c3 = "string" == typeof e4.anomaly ? e4.anomaly : "Anomaly";
          a3.font = `500 12px ${h2.font}`;
          let d4 = a3.measureText(c3).width + 14, m4 = y(t4 - d4 / 2, 0, j2 - d4);
          m4 < U2 + 4 || (U2 = m4 + d4, a3.save(), a3.translate(m4 + d4 / 2, 15), a3.scale(s4, s4), a3.translate(-(m4 + d4 / 2), -15), a3.beginPath(), a3.roundRect(m4, 6, d4, 18, 9), a3.fillStyle = h2.surface, a3.fill(), a3.strokeStyle = h2.border, a3.lineWidth = 1, a3.stroke(), a3.fillStyle = h2.ink, a3.textAlign = "center", a3.textBaseline = "middle", a3.fillText(c3, m4 + d4 / 2, 15.5), a3.restore());
        }
        let Y2 = o2.hover;
        if (Y2) {
          let e4 = Math.round(k3(Y2.t)) + 0.5, t4 = L2(Y2.value);
          a3.globalAlpha = 0.5, a3.strokeStyle = h2.ink, a3.lineWidth = 1, a3.beginPath(), a3.moveTo(e4, 14), a3.lineTo(e4, d3 - 22), a3.stroke(), a3.globalAlpha = 1, a3.beginPath(), a3.arc(e4, t4, 6, 0, 2 * Math.PI), a3.fillStyle = h2.surface, a3.fill(), a3.beginPath(), a3.arc(e4, t4, 4, 0, 2 * Math.PI), a3.fillStyle = h2.accent, a3.fill();
        }
        let [B2, H2] = G2[G2.length - 1];
        a3.globalAlpha = 1, a3.beginPath(), a3.arc(B2, H2, 6, 0, 2 * Math.PI), a3.fillStyle = h2.surface, a3.fill(), a3.beginPath(), a3.arc(B2, H2, 4, 0, 2 * Math.PI), a3.fillStyle = h2.accent, a3.fill(), a3.restore();
      }, s2 = (e4) => {
        r2 = requestAnimationFrame(s2), document.hidden || i2(e4);
      };
      return ed.current.reduced ? void i2(performance.now()) : U ? (r2 = requestAnimationFrame(s2), () => cancelAnimationFrame(r2)) : void 0;
    }, [U, L, e2, X, T2, d2]);
    let eg = et ? ea > 0 ? `Paused, ${ea} new` : "Paused" : "Live", ey = (0, n.useRef)(null), ev = (0, s.d)("auto");
    (0, n.useLayoutEffect)(() => {
      let e3 = ey.current;
      if (!e3) return;
      let t3 = e3.offsetWidth;
      if (L || "auto" === ev.get()) return void ev.jump(t3);
      let a3 = (0, o.i)(ev, t3, p.morph);
      return () => a3.stop();
    }, [eg, L, ev]);
    let [ex, eM] = (0, n.useState)(X);
    X && X !== ex && eM(X);
    let ew = X ?? ex, e_ = (0, s.d)(B?.value ?? 0), eb = (0, u.G)(e_, (e3) => k2 ? k2(e3) : v.format(Math.round(e3)));
    (0, n.useEffect)(() => {
      if (!B) return;
      if (L) return void e_.jump(B.value);
      let e3 = (0, o.i)(e_, B.value, p.smooth);
      return () => e3.stop();
    }, [B, L, e_]);
    let ej = (0, s.d)(0), eT = (0, s.d)(0), ek = (0, h.z)(ej, g), eS = (0, h.z)(eT, g), eP = (0, n.useRef)(false);
    (0, n.useLayoutEffect)(() => {
      let e3 = z.current, t3 = F.current;
      if (!X || !e3 || !t3) {
        eP.current = false;
        return;
      }
      let a3 = e3.offsetWidth, r2 = e3.offsetHeight, n2 = t3.clientWidth - 44, l2 = X.x + 14;
      l2 + a3 > n2 && (l2 = X.x - 14 - a3);
      let i2 = y(
        X.y - r2 - 12 < 0 ? X.y + 14 : X.y - r2 - 12,
        0,
        Math.max(0, T2 - r2)
      );
      ej.set(y(l2, 0, Math.max(0, n2 - a3))), eT.set(i2), (!eP.current || L) && (ek.jump(ej.get()), eS.jump(i2)), eP.current = true;
    });
    let eA = () => {
      let e3 = em.current, t3 = ed.current, a3 = e3.width - 44, r2 = t3.height - 14 - 22, n2 = e3.t - t3.windowMs;
      return {
        xOf: (e4) => (e4 - n2) / t3.windowMs * a3,
        yOf: (t4) => 14 + (1 - (t4 - e3.lo) / (e3.hi - e3.lo)) * r2,
        left: n2,
        right: e3.t,
        plotW: a3
      };
    }, eN = (t3) => {
      let a3 = e2[t3];
      if (!a3) return null;
      let r2 = eA();
      return {
        t: a3.t,
        value: a3.value,
        anomaly: a3.anomaly,
        x: r2.xOf(a3.t),
        y: r2.yOf(a3.value)
      };
    }, eE = (t3) => {
      let a3 = F.current?.getBoundingClientRect();
      if (!a3 || Y) return null;
      let r2 = eA(), n2 = r2.left + y((t3 - a3.left) / Math.max(1, r2.plotW), 0, 1) * (r2.right - r2.left), l2 = _(e2, n2), i2 = [l2 - 1, l2].filter(
        (t4) => t4 >= 0 && t4 < e2.length && e2[t4].t <= r2.right
      );
      return i2.length ? i2.reduce(
        (t4, a4) => Math.abs(e2[a4].t - n2) < Math.abs(e2[t4].t - n2) ? a4 : t4
      ) : null;
    }, e$ = X ? _(e2, X.t) : null, eD = (e3) => `${k2 ? k2(e3) : v.format(e3)}${a2 ? ` ${a2}` : ""}`, eI = e2.slice(-20);
    return (0, r.jsxs)("figure", {
      ref: O,
      className: [f().figure, R].filter(Boolean).join(" "),
      "aria-label": t2,
      children: [
        (0, r.jsxs)("div", {
          className: f().head,
          children: [
            (0, r.jsxs)("p", {
              className: f().now,
              "aria-label": B ? `${t2}, ${eD(B.value)}` : `${t2}, ${I}`,
              children: [
                (0, r.jsx)(c.PY1.span, {
                  className: f().value,
                  "aria-hidden": "true",
                  children: B ? eb : "0"
                }),
                a2 && (0, r.jsx)("span", {
                  className: f().unit,
                  "aria-hidden": "true",
                  children: a2
                })
              ]
            }),
            (0, r.jsxs)("button", {
              type: "button",
              className: f().status,
              "data-held": et || void 0,
              "aria-pressed": q,
              onClick: () => K(!q),
              children: [
                (0, r.jsx)("span", {
                  className: f().statusDot,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)(c.PY1.span, {
                  className: f().statusText,
                  style: { width: ev },
                  children: (0, r.jsx)("span", {
                    ref: ey,
                    className: f().statusLabel,
                    children: eg
                  })
                }),
                (0, r.jsx)("span", {
                  className: f().srOnly,
                  children: q ? ", resume" : ", pause"
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: F,
          className: f().plot,
          style: { height: T2 },
          "data-active": !!X || void 0,
          role: "group",
          tabIndex: Y ? -1 : 0,
          "aria-roledescription": "live chart",
          "aria-label": `${t2}, last ${Math.round(d2 / 1e3)} seconds. Focus holds the view. Use left and right arrows to read points, Space to pause or resume.`,
          onPointerEnter: (e3) => {
            "mouse" === e3.pointerType && ee(true);
          },
          onPointerLeave: (e3) => {
            "mouse" === e3.pointerType && (ee(false), Q(null));
          },
          onPointerMove: (e3) => {
            if ("mouse" !== e3.pointerType && !e3.buttons) return;
            let t3 = eE(e3.clientX);
            Q(null === t3 ? null : eN(t3));
          },
          onPointerDown: (e3) => {
            if ("mouse" !== e3.pointerType) {
              e3.currentTarget.setPointerCapture?.(e3.pointerId);
              let t3 = eE(e3.clientX);
              Q(null === t3 ? null : eN(t3));
            }
          },
          onPointerUp: (e3) => {
            "mouse" !== e3.pointerType && Q(null);
          },
          onPointerCancel: () => Q(null),
          onKeyDown: (t3) => {
            if (Y) return;
            if (" " === t3.key || "Enter" === t3.key) {
              t3.preventDefault(), K(!q);
              return;
            }
            if ("Escape" === t3.key) {
              t3.preventDefault(), Q(null), q && K(false);
              return;
            }
            let a3 = eA(), r2 = _(e2, a3.left), n2 = _(e2, a3.right + 1e-3) - 1, l2 = e$ ?? n2 + 1, i2 = {
              ArrowLeft: l2 - 1,
              ArrowRight: l2 + 1,
              Home: r2,
              End: n2,
              PageUp: l2 - 10,
              PageDown: l2 + 10
            };
            t3.key in i2 && (t3.preventDefault(), Q(eN(y(i2[t3.key], r2, n2))));
          },
          onBlur: () => Q(null),
          onFocus: (t3) => {
            t3.currentTarget.matches(":focus-visible") && !Y && Q(eN(Math.max(0, _(e2, eA().right + 1e-3) - 1)));
          },
          children: [
            (0, r.jsx)("canvas", {
              ref: G,
              className: f().canvas,
              style: { height: T2 },
              "aria-hidden": "true"
            }),
            (0, r.jsxs)("span", {
              ref: V,
              className: f().probe,
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("span", {}),
                (0, r.jsx)("span", {}),
                (0, r.jsx)("span", {}),
                (0, r.jsx)("span", {}),
                (0, r.jsx)("span", {}),
                (0, r.jsx)("span", {})
              ]
            }),
            (0, r.jsxs)(c.PY1.div, {
              ref: z,
              className: f().tooltip,
              style: { x: L ? ej : ek, y: L ? eT : eS },
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("p", {
                  className: f().tipValue,
                  children: ew ? eD(ew.value) : ""
                }),
                (0, r.jsx)("p", {
                  className: f().tipMeta,
                  children: ew ? `${S2(ew.t)}${ew.anomaly ? `, ${"string" == typeof ew.anomaly ? ew.anomaly.toLowerCase() : "anomaly"}` : ""}` : ""
                })
              ]
            }),
            Y && (0, r.jsx)("p", { className: f().message, children: I })
          ]
        }),
        (0, r.jsx)("p", {
          className: f().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: eo
        }),
        (0, r.jsx)("p", {
          className: f().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: X ? `${S2(X.t)}, ${eD(X.value)}${X.anomaly ? `, ${"string" == typeof X.anomaly ? X.anomaly : "anomaly"}` : ""}` : ""
        }),
        !Y && (0, r.jsx)("div", {
          className: f().srOnly,
          children: (0, r.jsxs)("table", {
            children: [
              (0, r.jsxs)("caption", {
                children: [t2, ", latest ", eI.length, " readings"]
              }),
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", { scope: "col", children: "Time" }),
                    (0, r.jsx)("th", { scope: "col", children: "Value" }),
                    (0, r.jsx)("th", { scope: "col", children: "Note" })
                  ]
                })
              }),
              (0, r.jsx)("tbody", {
                children: eI.map(
                  (e3) => (0, r.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, r.jsx)("th", { scope: "row", children: S2(e3.t) }),
                        (0, r.jsx)("td", { children: eD(e3.value) }),
                        (0, r.jsx)("td", {
                          children: e3.anomaly ? "string" == typeof e3.anomaly ? e3.anomaly : "Anomaly" : ""
                        })
                      ]
                    },
                    e3.t
                  )
                )
              })
            ]
          })
        })
      ]
    });
  }
  var T = a(60524), k = a.n(T);
  function S() {
    let e2 = (0, n.useId)(), [t2, a2] = (0, n.useState)([]);
    return (0, n.useEffect)(() => {
      let e3, t3, r2, n2 = (e3 = 142, t3 = 12 + 8 * Math.random(), r2 = 0, (a3) => {
        let n3 = 18 * Math.sin(a3 / 9e3) + 8 * Math.sin(a3 / 3100);
        e3 += (138 + n3 - e3) * 0.18 + (Math.random() - 0.5) * 14, (t3 -= 0.5) <= 0 && !r2 && (r2 = 2 + Math.floor(2 * Math.random()), t3 = 15 + 10 * Math.random());
        let l3 = e3;
        r2 && (l3 = 330 + 120 * Math.random(), r2--);
        let i3 = Math.round(l3);
        return { t: a3, value: i3, anomaly: i3 > 300 ? "Spike" : void 0 };
      }), l2 = 500 * Math.floor(Date.now() / 500), i2 = Array.from({ length: 62 }, (e4, t4) => n2(l2 - (61 - t4) * 500)).map(
        (e4) => ({ ...e4, anomaly: void 0 })
      ), s2 = window.setTimeout(() => a2(i2), 0), o2 = window.setInterval(
        () => a2((e4) => [
          ...e4.slice(-160),
          n2(500 * Math.floor(Date.now() / 500))
        ]),
        500
      );
      return () => {
        window.clearTimeout(s2), window.clearInterval(o2);
      };
    }, []), (0, r.jsxs)("section", {
      className: k().card,
      "aria-labelledby": e2,
      children: [
        (0, r.jsxs)("div", {
          className: k().heading,
          children: [
            (0, r.jsx)("h3", {
              id: e2,
              className: k().title,
              children: "Checkout API"
            }),
            (0, r.jsx)("p", {
              className: k().meta,
              children: "p95 latency, simulated feed"
            })
          ]
        }),
        (0, r.jsx)(j, {
          points: t2,
          label: "Checkout API p95 latency",
          unit: "ms",
          interval: 500,
          windowMs: 3e4
        })
      ]
    });
  }
  let P = S;
}

__m(__module,__exports,__require);
}