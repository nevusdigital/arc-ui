function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  let r, i, n, s;
  a.r(t), a.d(t, { PrizeWheelDemo: () => C, default: () => E });
  var l = a(95155), c = a(12115), o = a(18310), d = a(92171), h = a(99314), u = a(41189), p = a(9005), m = a(35230), f = a.n(m), g = a(55665);
  let _ = [
    {
      label: "10% off",
      detail: "Off your first year of Pro",
      code: "SPIN-10OFF",
      weight: 30
    },
    {
      label: "Free month",
      detail: "One month of Pro on us",
      code: "SPIN-FREEMONTH",
      weight: 12
    },
    {
      label: "20% off",
      detail: "Off your first year of Pro",
      code: "SPIN-20OFF",
      weight: 18
    },
    {
      label: "Lifetime Pro",
      detail: "Pro for life, every future update included",
      code: "SPIN-LIFETIME",
      weight: 1,
      featured: true
    },
    {
      label: "15% off",
      detail: "Off your first year of Pro",
      code: "SPIN-15OFF",
      weight: 20
    },
    {
      label: "Extra seat",
      detail: "One more teammate, free for a year",
      code: "SPIN-SEAT",
      weight: 14
    },
    {
      label: "2x credits",
      detail: "Double referral credit for 90 days",
      code: "SPIN-2XCREDIT",
      weight: 3
    },
    {
      label: "Priority help",
      detail: "Replies within four hours for a year",
      code: "SPIN-PRIORITY",
      weight: 2
    }
  ], w = {
    spin: "Spin",
    again: "Spin again",
    done: "Claimed",
    copy: "Copy code",
    copied: "Copied",
    copyFailed: "Copy failed",
    odds: "Odds",
    hint: "Flick the wheel, or hold Spin to wind it up.",
    weak: "A little faster. Flick and let go to spin."
  }, y = () => () => {
  }, x = 2 * Math.PI, b = 0.07, v = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), j = (e2, t2) => [200 + t2 * Math.sin(e2), 200 - t2 * Math.cos(e2)], M = (e2) => Math.round(100 * e2) / 100, N = Math.asin(0.23809523809523808), z = (r = 6.5 * Math.cos(N), i = 7 + 6.5 * Math.sin(N), n = 1.5 * Math.cos(N), s = 28 + 1.5 * Math.sin(N), `M${M(200 - r)} ${M(i)}A6.5 6.5 0 1 1 ${M(200 + r)} ${M(i)}L${M(200 + n)} ${M(s)}A1.5 1.5 0 0 1 ${M(200 - n)} ${M(s)}Z`), k = (e2) => `${Math.round(1e3 * e2) / 10}%`, S = (e2, t2) => !e2.reduced && !e2.paused && e2.speed > 0 && "idle" === e2.phase && "idle" === t2.mode;
  function R({ shown: e2, children: t2 }) {
    let a2 = (0, c.useRef)(null), [r2, i2] = (0, c.useState)([]);
    return (0, c.useLayoutEffect)(() => {
      let e3 = Array.from(a2.current?.children ?? []), t3 = () => i2(e3.map((e4) => e4.offsetWidth));
      if (t3(), "u" < typeof ResizeObserver) return;
      let r3 = new ResizeObserver(t3);
      return e3.forEach((e4) => r3.observe(e4)), () => r3.disconnect();
    }, []), (0, l.jsx)("span", {
      ref: a2,
      className: f().copyStack,
      style: r2[e2] ? { width: r2[e2] } : void 0,
      children: t2
    });
  }
  function P({
    segments: e2,
    title: t2 = "Spin for a reward",
    description: a2 = "Every spin wins something. Your code works at checkout.",
    labels: r2,
    pickWinner: i2,
    onResult: n2,
    once: s2 = false,
    sizing: m2 = "equal",
    showOdds: N2 = true,
    speed: $2 = 1,
    paused: A2 = false,
    accent: C2,
    label: E2 = "Prize wheel",
    className: T,
    style: L
  }) {
    let F, I = (0, c.useMemo)(() => {
      let t3 = (e2 ?? _).slice(0, 12);
      return t3.length >= 2 ? t3 : _;
    }, [e2]), D = { ...w, ...r2 }, O = (F = (0, c.useSyncExternalStore)(
      y,
      () => true,
      () => false
    ), !!(0, o.I)() && F), V = (0, c.useId)().replace(/:/g, ""), B = (0, c.useMemo)(() => {
      let e3 = I.map((e4) => Math.max(0, e4.weight ?? 1)), t3 = e3.reduce((e4, t4) => e4 + t4, 0) || 1, a3 = e3.map((e4) => e4 / t3), r3 = I.map(
        (e4, t4) => "weight" === m2 ? Math.max(a3[t4], 0.012) : 1 / I.length
      ), i3 = r3.map((e4, t4) => r3.slice(0, t4).reduce((e5, t5) => e5 + t5, 0)), n3 = r3.map((e4, t4) => ({ start: i3[t4], end: i3[t4] + e4 })), s3 = x / r3.reduce((e4, t4) => e4 + t4, 0), l2 = n3.map((e4) => ({ start: e4.start * s3, end: e4.end * s3 }));
      return { odds: a3, arcs: l2, pegs: l2.map((e4) => e4.start) };
    }, [I, m2]), [W, Y] = (0, c.useState)("idle"), [q, Z] = (0, c.useState)(null), [H, U] = (0, c.useState)(null), [X, G] = (0, c.useState)(0), [K, Q] = (0, c.useState)(""), [J, ee] = (0, c.useState)("hint"), [et, ea] = (0, c.useState)("idle"), er = (0, c.useRef)(null), ei = (0, c.useRef)(null), en = (0, c.useRef)(null), es = (0, c.useRef)(null), el = (0, c.useRef)(null), ec = (0, c.useRef)(null), eo = (0, c.useRef)(null), ed = (0, c.useRef)(0), eh = (0, c.useRef)(0), eu = (0, c.useRef)(true), ep = (0, c.useRef)(-1e9), em = (0, c.useRef)({ rot: NaN, flap: NaN, ring: NaN }), ef = (0, c.useRef)({
      theta: 0,
      omega: 0,
      mode: "idle",
      lastDir: 1,
      phi: 0,
      phiV: 0,
      spinT: 0,
      spinDur: 1,
      spinFrom: 0,
      spinDist: 0,
      spinDir: 1,
      spinRamp: 0,
      winner: 0,
      charge: 0,
      chargeBase: 0,
      grabTheta: 0,
      grabAngle: 0,
      grabAcc: 0,
      samples: []
    }), eg = (0, c.useRef)({
      segments: I,
      geometry: B,
      pickWinner: i2,
      onResult: n2,
      once: s2,
      speed: $2,
      paused: A2,
      reduced: O,
      phase: W,
      labels: D
    });
    (0, c.useLayoutEffect)(() => {
      eg.current = {
        segments: I,
        geometry: B,
        pickWinner: i2,
        onResult: n2,
        once: s2,
        speed: $2,
        paused: A2,
        reduced: O,
        phase: W,
        labels: D
      };
    });
    let e_ = (0, c.useCallback)(() => {
      let e3 = ef.current, t3 = em.current, a3 = Math.round(180 * e3.theta / Math.PI * 1e3) / 1e3;
      a3 !== t3.rot && en.current && (en.current.style.transform = `rotate(${a3}deg)`, t3.rot = a3);
      let r3 = Math.round(180 * e3.phi / Math.PI * 100) / 100;
      r3 !== t3.flap && es.current && (es.current.style.transform = `rotate(${r3}deg)`, t3.flap = r3);
      let i3 = "charge" === e3.mode ? Math.round((1 - e3.charge) * 1e3) / 1e3 : 1;
      i3 !== t3.ring && el.current && (el.current.style.strokeDashoffset = String(i3), t3.ring = i3);
    }, []), ew = (0, c.useCallback)((e3) => {
      let { segments: t3, onResult: a3 } = eg.current, r3 = t3[e3];
      Y("won"), Z(e3), U(e3), G((e4) => e4 + 1), ea("idle"), Q(
        `You won ${r3.label}.${r3.code ? ` Your code is ${r3.code.split("").join(" ")}.` : ""}`
      ), a3?.(r3, e3);
    }, []), ey = (0, c.useCallback)(
      (e3) => {
        let t3 = ef.current, a3 = eg.current, r3 = t3.theta;
        switch (t3.mode) {
          case "idle":
            S(a3, t3) && (t3.theta += 0.075 * a3.speed * e3);
            break;
          case "charge": {
            t3.charge = Math.min(1, t3.charge + e3 / 1.1);
            let a4 = t3.charge * t3.charge * (3 - 2 * t3.charge);
            t3.theta = t3.chargeBase - 0.24 * a4;
            break;
          }
          case "spin": {
            t3.spinT += e3;
            let a4 = t3.spinRamp, r4 = Math.min(
              1,
              (a4 > 0 ? t3.spinT - a4 * (1 - Math.exp(-t3.spinT / a4)) : t3.spinT) / t3.spinDur
            );
            t3.theta = t3.spinFrom + t3.spinDir * t3.spinDist * (1 - Math.pow(1 - r4, 3)), r4 >= 1 && (t3.mode = "idle", ew(t3.winner));
            break;
          }
          case "coast":
            t3.omega *= Math.exp(-1.9 * e3), t3.theta += t3.omega * e3, 0.05 > Math.abs(t3.omega) && (t3.mode = "idle");
        }
        if ("drag" !== t3.mode && (t3.omega = e3 > 0 ? (t3.theta - r3) / e3 : 0), Math.abs(t3.omega) > 1e-4 && (t3.lastDir = Math.sign(t3.omega)), a3.reduced) {
          t3.phi = 0, t3.phiV = 0;
          return;
        }
        let i3 = a3.geometry.pegs, n3 = t3.theta - r3, s3 = v(Math.ceil(170 * Math.abs(n3) / 1.5), 4, 40), l2 = e3 / s3;
        for (let e4 = 1; e4 <= s3; e4++) {
          let a4 = r3 + n3 * e4 / s3, c2 = t3.phi;
          t3.phiV += (-1e3 * t3.phi - 15 * t3.phiV) * l2, t3.phi += t3.phiV * l2;
          let o2 = false;
          for (let e5 = 0; e5 < i3.length; e5++) {
            let r4 = i3[e5] + a4, n4 = 200 - 170 * Math.cos(r4) - 7;
            if (n4 > 26.1) continue;
            let s4 = 170 * Math.sin(r4), l3 = (function(e6) {
              if (e6 <= 21) {
                let t4 = 10.1 - e6 / 21 * 5;
                return e6 > t4 ? Math.asin(t4 / e6) : Math.PI / 2;
              }
              return e6 >= 26.1 ? 0 : Math.acos(
                v(
                  (e6 * e6 + 441 - 26.009999999999998) / (2 * e6 * 21),
                  -1,
                  1
                )
              );
            })(Math.hypot(s4, n4));
            if (!l3) continue;
            let c3 = Math.atan2(-s4, n4), d2 = t3.phi - c3;
            if (Math.abs(d2) >= l3) continue;
            let h2 = d2 > 0 ? 1 : d2 < 0 ? -1 : -t3.lastDir;
            t3.phi = c3 + h2 * l3, o2 = true;
          }
          o2 && l2 > 0 && (t3.phiV = v((t3.phi - c2) / l2, -9, 9)), Math.abs(t3.phi) > 0.6 && (t3.phi = 0.6 * Math.sign(t3.phi), t3.phiV * t3.phi > 0 && (t3.phiV *= -0.25));
        }
      },
      [ew]
    ), ex = (0, c.useRef)(null);
    (0, c.useLayoutEffect)(() => {
      ex.current = (e3) => {
        let t3, a3, r3 = eh.current ? Math.min(0.034, (e3 - eh.current) / 1e3) : 1 / 60;
        eh.current = e3, ey(r3), e_(), (t3 = eg.current, ("idle" !== (a3 = ef.current).mode || S(t3, a3) || Math.abs(a3.phi) > 2e-3 || Math.abs(a3.phiV) > 0.01) && eu.current) ? ed.current = requestAnimationFrame((e4) => ex.current?.(e4)) : (ed.current = 0, eh.current = 0);
      };
    });
    let eb = (0, c.useCallback)(() => {
      !ed.current && eu.current && (eh.current = 0, ed.current = requestAnimationFrame((e3) => ex.current?.(e3)));
    }, []);
    (0, c.useEffect)(() => {
      let e3 = er.current;
      if (!e3) return;
      let t3 = true, a3 = () => {
        eu.current = t3 && "visible" === document.visibilityState, eu.current ? eb() : ed.current && (cancelAnimationFrame(ed.current), ed.current = 0, eh.current = 0);
      }, r3 = new IntersectionObserver((e4) => {
        t3 = e4.some((e5) => e5.isIntersecting), a3();
      });
      return r3.observe(e3), document.addEventListener("visibilitychange", a3), a3(), () => {
        r3.disconnect(), document.removeEventListener("visibilitychange", a3), ed.current && cancelAnimationFrame(ed.current), ed.current = 0;
      };
    }, [eb]), (0, c.useEffect)(() => {
      eb();
    }, [eb, A2, $2, O, W]);
    let ev = (0, c.useCallback)(
      (e3, t3 = b) => {
        let a3 = eg.current, r3 = ef.current;
        if (a3.once && "won" === a3.phase) return;
        let i3 = a3.segments.length, n3 = 0;
        if (a3.pickWinner) {
          let e4 = Math.round(a3.pickWinner(a3.segments));
          n3 = Number.isFinite(e4) ? v(e4, 0, i3 - 1) : 0;
        } else {
          let e4 = Math.random();
          n3 = i3 - 1;
          for (let t4 = 0; t4 < i3; t4++)
            if ((e4 -= a3.geometry.odds[t4]) <= 0) {
              n3 = t4;
              break;
            }
        }
        let s3 = a3.geometry.arcs[n3], l2 = s3.end - s3.start, c2 = Math.min(0.42 * l2, Math.max(0.12 * l2, 0.07)), o2 = s3.start + c2 + Math.random() * Math.max(0, l2 - 2 * c2), d2 = v(Math.abs(e3), 4.5, 28), h2 = e3 < 0 ? -1 : 1, u2 = (h2 * (-o2 - r3.theta) % x + x) % x, p2 = v(3.8 + 0.12 * d2, 4.2, 7.2), m3 = Math.max(2, Math.round((d2 * p2 / 3 - u2) / x)), f2 = u2 + m3 * x;
        if (Y("spinning"), Z(null), ee("hint"), Q("Spinning"), a3.reduced) {
          r3.theta = r3.theta + h2 * f2, r3.mode = "idle", e_(), ew(n3);
          return;
        }
        r3.mode = "spin", r3.winner = n3, r3.spinT = 0, r3.spinFrom = r3.theta, r3.spinDist = f2, r3.spinDir = h2, r3.spinRamp = t3, r3.spinDur = v(3 * f2 / d2, 3.2, 10), eb();
      },
      [eb, ew, e_]
    ), ej = s2 && "won" === W, eM = "spinning" === W, eN = () => {
      let e3 = ef.current;
      eM || ej || "spin" === e3.mode || "charge" === e3.mode || ("won" === W && (Y("idle"), Z(null)), e3.mode = "charge", e3.charge = 0, e3.chargeBase = e3.theta, eb());
    }, ez = () => {
      let e3 = ef.current;
      if ("charge" !== e3.mode) return;
      ep.current = performance.now();
      let t3 = e3.charge;
      e3.mode = "idle", ev(9 + 19 * t3);
    }, ek = () => {
      let e3 = ef.current;
      "charge" === e3.mode && (e3.mode = "coast", e3.omega = 0.8, eb());
    }, eS = (0, c.useRef)(null), eR = (e3, t3) => {
      let a3 = eS.current;
      if (!a3) return null;
      let r3 = a3.left + a3.width / 2, i3 = a3.top + a3.height / 2, n3 = e3 - r3, s3 = t3 - i3;
      return Math.hypot(n3, s3) < 0.1 * a3.width ? null : Math.atan2(n3, -s3);
    }, eP = (e3) => {
      let t3 = ef.current;
      if ("drag" !== t3.mode) return;
      let a3 = t3.samples[t3.samples.length - 1], r3 = a3 && e3.timeStamp - a3.t < 80 ? t3.omega : 0;
      if (Math.abs(r3) >= 4.5) {
        t3.mode = "idle", ev(v(r3, -28, 28), 0);
        return;
      }
      t3.mode = "coast", t3.omega = r3, Math.abs(t3.theta - t3.grabTheta) > 0.35 && ee("weak"), eb();
    };
    (0, c.useLayoutEffect)(() => {
      let e3 = ec.current, t3 = ei.current;
      if (!X || !e3 || !t3) return;
      let a3 = () => {
        e3.style.transform = "", e3.style.opacity = "";
      };
      if (a3(), O) return;
      let r3 = t3.getBoundingClientRect(), i3 = e3.getBoundingClientRect(), n3 = r3.left + r3.width / 2, s3 = r3.top + 0.257 * r3.height, l2 = n3 - (i3.left + i3.width / 2), c2 = s3 - (i3.top + i3.height / 2), o2 = (0, d.i)(
        e3,
        { x: [l2, 0], y: [c2, 0], scale: [0.18, 1], opacity: [0, 1] },
        { type: "spring", visualDuration: 0.62, bounce: 0.14 }
      );
      return eo.current = o2, o2.then(a3, a3), () => {
        o2.stop(), a3(), eo.current === o2 && (eo.current = null);
      };
    }, [X, O]), (0, c.useLayoutEffect)(() => {
      null === q && eo.current && (eo.current.stop(), eo.current = null, ec.current && (ec.current.style.transform = "", ec.current.style.opacity = ""));
    }, [q]);
    let e$ = async (e3) => {
      try {
        await (0, g.a)(e3), ea("copied"), Q("Code copied");
      } catch {
        ea("failed"), Q("Copy failed. Select the code and copy it manually.");
      }
    };
    (0, c.useEffect)(() => {
      if ("idle" === et) return;
      let e3 = window.setTimeout(() => ea("idle"), 1800);
      return () => window.clearTimeout(e3);
    }, [et]);
    let eA = null !== q ? I[q] : null, eC = eA ?? I[H ?? 0] ?? I[0], eE = `${E2}. ${I.length} prizes: ${I.map((e3, t3) => `${e3.label}, ${k(B.odds[t3])} chance`).join("; ")}.`, eT = { ...L, ...C2 ? { "--pw-accent": C2 } : null };
    return (0, l.jsxs)("div", {
      ref: er,
      className: [f().root, T].filter(Boolean).join(" "),
      style: eT,
      "data-phase": W,
      role: "group",
      "aria-label": E2,
      children: [
        (0, l.jsxs)("div", {
          className: f().layout,
          children: [
            (0, l.jsxs)("div", {
              ref: ei,
              className: f().stage,
              children: [
                (0, l.jsx)("div", {
                  className: f().shadow,
                  "aria-hidden": "true"
                }),
                (0, l.jsx)("div", {
                  className: f().grip,
                  "data-locked": ej || eM || void 0,
                  onPointerDown: (e3) => {
                    let t3 = ef.current;
                    if (0 !== e3.button || eM || ej || "spin" === t3.mode) return;
                    eS.current = ei.current?.getBoundingClientRect() ?? null;
                    let a3 = eR(e3.clientX, e3.clientY);
                    null !== a3 && (e3.currentTarget.setPointerCapture(e3.pointerId), "won" === W && (Y("idle"), Z(null)), t3.mode = "drag", t3.omega = 0, t3.grabTheta = t3.theta, t3.grabAngle = a3, t3.grabAcc = 0, t3.samples = [{ t: e3.timeStamp, theta: t3.theta }], eb());
                  },
                  onPointerMove: (e3) => {
                    let t3, a3 = ef.current;
                    if ("drag" !== a3.mode) return;
                    let r3 = eR(e3.clientX, e3.clientY);
                    if (null === r3) return;
                    a3.grabAcc += ((t3 = (r3 - a3.grabAngle + Math.PI) % x) < 0 && (t3 += x), t3 - Math.PI), a3.grabAngle = r3, a3.theta = a3.grabTheta + a3.grabAcc;
                    let i3 = e3.timeStamp;
                    for (a3.samples.push({ t: i3, theta: a3.theta }); a3.samples.length > 2 && i3 - a3.samples[0].t > 100; )
                      a3.samples.shift();
                    let n3 = a3.samples[0];
                    a3.omega = i3 > n3.t ? (a3.theta - n3.theta) / (i3 - n3.t) * 1e3 : 0, eb();
                  },
                  onPointerUp: eP,
                  onPointerCancel: eP,
                  role: "img",
                  "aria-label": eE,
                  children: (0, l.jsx)("div", {
                    ref: en,
                    className: f().rotor,
                    children: (0, l.jsxs)("svg", {
                      viewBox: "0 0 400 400",
                      className: f().svg,
                      "aria-hidden": "true",
                      children: [
                        I.map((e3, t3) => {
                          let a3 = B.arcs[t3], r3 = 180 * ((a3.start + a3.end) / 2) / Math.PI, i3 = a3.end - a3.start;
                          return (0, l.jsxs)(
                            "g",
                            {
                              className: f().wedge,
                              "data-alt": t3 % 2 == 1 || void 0,
                              "data-featured": e3.featured || void 0,
                              "data-won": q === t3 || void 0,
                              children: [
                                (0, l.jsx)("path", {
                                  d: (function(e4, t4) {
                                    let [a4, r4] = j(e4, 162), [i4, n3] = j(t4, 162), s3 = +(t4 - e4 > Math.PI);
                                    return `M200 200L${M(a4)} ${M(r4)}A162 162 0 ${s3} 1 ${M(i4)} ${M(n3)}Z`;
                                  })(a3.start, a3.end)
                                }),
                                i3 > 0.2 && (0, l.jsx)("text", {
                                  x: 200,
                                  y: 52,
                                  transform: `rotate(${M(r3)} 200 200) rotate(-90 200 52)`,
                                  textAnchor: "end",
                                  dominantBaseline: "central",
                                  children: e3.label
                                })
                              ]
                            },
                            e3.id ?? `${e3.label}-${t3}`
                          );
                        }),
                        B.pegs.map((e3, t3) => {
                          let [a3, r3] = j(e3, 162);
                          return (0, l.jsx)(
                            "line",
                            {
                              className: f().divider,
                              x1: 200,
                              y1: 200,
                              x2: M(a3),
                              y2: M(r3)
                            },
                            `d${t3}`
                          );
                        }),
                        (0, l.jsx)("circle", {
                          className: f().faceEdge,
                          cx: 200,
                          cy: 200,
                          r: 162
                        }),
                        (0, l.jsx)("circle", {
                          className: f().rim,
                          cx: 200,
                          cy: 200,
                          r: 170,
                          strokeWidth: 16
                        }),
                        (0, l.jsx)("circle", {
                          className: f().rimEdge,
                          cx: 200,
                          cy: 200,
                          r: 177.5
                        }),
                        B.pegs.map((e3, t3) => {
                          let [a3, r3] = j(e3, 170);
                          return (0, l.jsxs)(
                            "g",
                            {
                              className: f().peg,
                              children: [
                                (0, l.jsx)("circle", {
                                  cx: M(a3),
                                  cy: M(r3),
                                  r: 3.6
                                }),
                                (0, l.jsx)("circle", {
                                  className: f().pegShine,
                                  cx: M(a3 - 0.9),
                                  cy: M(r3 - 0.9),
                                  r: 1.2
                                })
                              ]
                            },
                            `p${t3}`
                          );
                        })
                      ]
                    })
                  })
                }),
                (0, l.jsxs)("svg", {
                  viewBox: "0 0 400 400",
                  className: f().overlay,
                  "aria-hidden": "true",
                  children: [
                    (0, l.jsx)("defs", {
                      children: (0, l.jsxs)("linearGradient", {
                        id: `${V}-sheen`,
                        x1: "0.15",
                        y1: "0",
                        x2: "0.85",
                        y2: "1",
                        children: [
                          (0, l.jsx)("stop", {
                            offset: "0",
                            className: f().sheenHi
                          }),
                          (0, l.jsx)("stop", {
                            offset: "0.45",
                            className: f().sheenLo
                          }),
                          (0, l.jsx)("stop", {
                            offset: "1",
                            className: f().sheenMid
                          })
                        ]
                      })
                    }),
                    (0, l.jsx)("circle", {
                      cx: 200,
                      cy: 200,
                      r: 170,
                      fill: "none",
                      stroke: `url(#${V}-sheen)`,
                      strokeWidth: 16
                    }),
                    (0, l.jsxs)("g", {
                      ref: es,
                      className: f().flap,
                      children: [
                        (0, l.jsx)("path", { className: f().pointer, d: z }),
                        (0, l.jsx)("circle", {
                          className: f().pivot,
                          cx: 200,
                          cy: 7,
                          r: 2.6
                        })
                      ]
                    })
                  ]
                }),
                (0, l.jsxs)("button", {
                  type: "button",
                  className: f().hub,
                  "aria-disabled": eM || ej || void 0,
                  "aria-describedby": `${V}-hint`,
                  "aria-label": ej ? D.done : eM ? "Spinning" : "Spin the wheel",
                  onPointerDown: (e3) => {
                    0 === e3.button && (e3.currentTarget.setPointerCapture(e3.pointerId), eN());
                  },
                  onPointerUp: ez,
                  onPointerCancel: ek,
                  onLostPointerCapture: ez,
                  onKeyDown: (e3) => {
                    ("Enter" === e3.key || " " === e3.key) && (e3.preventDefault(), e3.repeat || eN());
                  },
                  onKeyUp: (e3) => {
                    ("Enter" === e3.key || " " === e3.key) && (e3.preventDefault(), ez());
                  },
                  onBlur: ek,
                  onClick: () => {
                    performance.now() - ep.current < 500 || eM || ej || "spin" === ef.current.mode || ev(16);
                  },
                  children: [
                    (0, l.jsx)("svg", {
                      viewBox: "0 0 100 100",
                      className: f().hubRing,
                      "aria-hidden": "true",
                      children: (0, l.jsx)("circle", {
                        ref: el,
                        cx: "50",
                        cy: "50",
                        r: "46",
                        pathLength: 1
                      })
                    }),
                    (0, l.jsx)("span", {
                      className: f().hubLabel,
                      children: ej ? D.done : D.spin
                    })
                  ]
                })
              ]
            }),
            (0, l.jsxs)("div", {
              className: f().panel,
              children: [
                (0, l.jsxs)("div", {
                  className: f().slot,
                  children: [
                    I.map(
                      (e3, t3) => (0, l.jsxs)(
                        "div",
                        {
                          className: `${f().card} ${f().sizer}`,
                          "aria-hidden": "true",
                          inert: true,
                          children: [
                            (0, l.jsx)("p", {
                              className: f().cardPrize,
                              children: e3.label
                            }),
                            e3.detail && (0, l.jsx)("p", {
                              className: f().cardDetail,
                              children: e3.detail
                            }),
                            e3.code && (0, l.jsxs)("div", {
                              className: f().code,
                              children: [
                                (0, l.jsx)("span", {
                                  className: f().codeText,
                                  children: e3.code
                                }),
                                (0, l.jsx)("span", {
                                  className: f().copy,
                                  children: (0, l.jsxs)("span", {
                                    className: f().copyFace,
                                    "data-on": true,
                                    children: [
                                      (0, l.jsx)(h.A, {
                                        size: 16,
                                        strokeWidth: 1.75
                                      }),
                                      D.copy
                                    ]
                                  })
                                })
                              ]
                            }),
                            !s2 && (0, l.jsxs)("span", {
                              className: f().again,
                              children: [
                                (0, l.jsx)(u.A, {
                                  size: 16,
                                  strokeWidth: 1.75
                                }),
                                D.again
                              ]
                            })
                          ]
                        },
                        `s-${e3.id ?? `${e3.label}-${t3}`}`
                      )
                    ),
                    (0, l.jsxs)("div", {
                      className: f().idle,
                      "data-hidden": !!eA || void 0,
                      "aria-hidden": !!eA || void 0,
                      children: [
                        (0, l.jsx)("h3", { className: f().title, children: t2 }),
                        (0, l.jsx)("p", {
                          className: f().description,
                          children: a2
                        }),
                        (0, l.jsx)("p", {
                          id: `${V}-hint`,
                          className: f().hint,
                          "data-weak": "weak" === J || void 0,
                          children: "weak" === J ? D.weak : D.hint
                        })
                      ]
                    }),
                    (0, l.jsxs)("div", {
                      ref: ec,
                      className: f().card,
                      "data-show": !!eA || void 0,
                      "aria-hidden": !eA || void 0,
                      inert: !eA,
                      children: [
                        (0, l.jsx)("p", {
                          className: f().cardPrize,
                          children: eC.label
                        }),
                        eC.detail && (0, l.jsx)("p", {
                          className: f().cardDetail,
                          children: eC.detail
                        }),
                        eC.code && (0, l.jsxs)("div", {
                          className: f().code,
                          children: [
                            (0, l.jsx)("span", {
                              className: f().codeText,
                              children: eC.code
                            }),
                            (0, l.jsx)("button", {
                              type: "button",
                              className: f().copy,
                              "data-state": et,
                              onClick: () => e$(eC.code ?? ""),
                              "aria-label": "copied" === et ? D.copied : "failed" === et ? D.copyFailed : `${D.copy} ${eC.code}`,
                              children: (0, l.jsxs)(R, {
                                shown: "copied" === et ? 1 : 2 * ("failed" === et),
                                children: [
                                  (0, l.jsxs)("span", {
                                    className: f().copyFace,
                                    "data-on": "idle" === et || void 0,
                                    children: [
                                      (0, l.jsx)(h.A, {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      }),
                                      D.copy
                                    ]
                                  }),
                                  (0, l.jsxs)("span", {
                                    className: f().copyFace,
                                    "data-on": "copied" === et || void 0,
                                    children: [
                                      (0, l.jsx)("svg", {
                                        width: 16,
                                        height: 16,
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: 1.75,
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: f().copyCheck,
                                        "aria-hidden": "true",
                                        children: (0, l.jsx)("path", {
                                          d: "M4 12l5 5L20 6",
                                          pathLength: 1
                                        })
                                      }),
                                      D.copied
                                    ]
                                  }),
                                  (0, l.jsxs)("span", {
                                    className: f().copyFace,
                                    "data-on": "failed" === et || void 0,
                                    children: [
                                      (0, l.jsx)(p.A, {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      }),
                                      D.copyFailed
                                    ]
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        !s2 && (0, l.jsxs)("button", {
                          type: "button",
                          className: f().again,
                          onClick: () => {
                            s2 || ev(14 + 8 * Math.random());
                          },
                          children: [
                            (0, l.jsx)(u.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            D.again
                          ]
                        })
                      ]
                    })
                  ]
                }),
                N2 && (0, l.jsxs)("div", {
                  className: f().odds,
                  children: [
                    (0, l.jsx)("p", {
                      className: f().oddsTitle,
                      children: D.odds
                    }),
                    (0, l.jsx)("ul", {
                      className: f().oddsList,
                      children: I.map(
                        (e3, t3) => (0, l.jsxs)(
                          "li",
                          {
                            className: f().oddsRow,
                            "data-featured": e3.featured || void 0,
                            "data-won": q === t3 || void 0,
                            children: [
                              (0, l.jsx)("span", {
                                className: f().oddsLabel,
                                children: e3.label
                              }),
                              (0, l.jsx)("span", {
                                className: f().oddsValue,
                                children: k(B.odds[t3])
                              })
                            ]
                          },
                          e3.id ?? `${e3.label}-${t3}`
                        )
                      )
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, l.jsx)("p", {
          className: f().srOnly,
          role: "status",
          "aria-live": "polite",
          children: K
        })
      ]
    });
  }
  var $ = a(14578), A = a.n($);
  function C() {
    return (0, l.jsx)("div", {
      className: A().demo,
      "data-canvas": "wide",
      children: (0, l.jsx)(P, {})
    });
  }
  let E = C;
}

__m(__module,__exports,__require);
}