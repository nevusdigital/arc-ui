/* connected-scatter (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(69519, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    ConnectedScatter: () => O,
    MONTHS: () => p,
    SERIES: () => b,
    TARGET_RATIO: () => j,
    X_AXIS: () => f,
    Y_AXIS: () => g,
    default: () => H
  });
  var n = a(95155), s = a(12115), r = a(6900), l = a(18310), i = a(92171), c = a(25354), o = a(80642), d = a(79267), h = a(92298), u = a(36619), x = a(7770), m = a(51288), y = a(66558);
  let p = [
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
    "May 2025",
    "Jun 2025",
    "Jul 2025",
    "Aug 2025",
    "Sep 2025",
    "Oct 2025",
    "Nov 2025",
    "Dec 2025",
    "Jan 2026",
    "Feb 2026",
    "Mar 2026",
    "Apr 2026",
    "May 2026",
    "Jun 2026"
  ], _ = (e2, t2) => p.map((a2, n2) => ({ label: a2, x: e2[n2], y: t2[n2] })), b = [
    {
      id: "paid-search",
      name: "Paid search",
      points: _(
        [
          760,
          800,
          850,
          905,
          960,
          1030,
          1110,
          1190,
          1260,
          1300,
          1320,
          1290,
          1220,
          1150,
          1080,
          1030,
          990,
          960
        ],
        [
          3e3,
          3060,
          3110,
          3090,
          3140,
          3120,
          3100,
          3080,
          3060,
          3110,
          3200,
          3380,
          3620,
          3900,
          4150,
          4360,
          4520,
          4640
        ]
      ),
      notes: [
        { index: 6, text: "Broad match on", side: "above" },
        { index: 12, text: "Annual plans", side: "left" }
      ]
    },
    {
      id: "organic",
      name: "Organic",
      points: _(
        [
          560,
          540,
          565,
          520,
          495,
          505,
          470,
          450,
          430,
          405,
          420,
          390,
          372,
          385,
          360,
          350,
          356,
          340
        ],
        [
          2350,
          2410,
          2380,
          2500,
          2560,
          2620,
          2700,
          2790,
          2900,
          3150,
          3380,
          3520,
          3610,
          3700,
          3790,
          3860,
          3950,
          4020
        ]
      ),
      notes: [{ index: 9, text: "Docs relaunch", side: "right" }]
    },
    {
      id: "partners",
      name: "Partners",
      points: _(
        [
          1700,
          1660,
          1630,
          1650,
          1580,
          1520,
          1470,
          1490,
          1420,
          1370,
          1330,
          1345,
          1290,
          1240,
          1210,
          1225,
          1180,
          1150
        ],
        [
          4200,
          4280,
          4390,
          4340,
          4520,
          4650,
          4760,
          4720,
          4910,
          5040,
          5130,
          5200,
          5330,
          5420,
          5510,
          5560,
          5660,
          5740
        ]
      ),
      notes: [{ index: 5, text: "Referral tiers", side: "right" }]
    }
  ], f = {
    name: "CAC",
    title: "Customer acquisition cost",
    min: 200,
    max: 1800,
    step: 200
  }, g = {
    name: "LTV",
    title: "12 month lifetime value",
    min: 2e3,
    max: 6e3,
    step: 1e3
  }, j = 3;
  var v = a(83536), N = a.n(v);
  let { spring: M, duration: k, ease: w, stagger: $ } = x.T, P = { w: 760, h: 380 }, A = 1 / 6, L = k.standard, C = $.line, R = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), T = (e2) => Math.round(100 * e2) / 100, E = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), S = (e2) => E.format(Math.round(e2)), I = (e2) => `${e2.toFixed(1)}x`;
  function Y(e2, t2, a2) {
    let n2 = Math.max(e2.w - 44 - 16, 1), s2 = Math.max(e2.h - 14 - 30, 1);
    return {
      ...e2,
      sx: (e3) => T(44 + (e3 - t2.min) / (t2.max - t2.min) * n2),
      sy: (e3) => T(14 + (1 - (e3 - a2.min) / (a2.max - a2.min)) * s2),
      bottom: 14 + s2,
      right: 44 + n2
    };
  }
  function D(e2, t2, a2, n2, s2, r2) {
    var l2;
    let i2, c2, o2, d2, h2, u2, x2, m2 = t2.to.length;
    if (!m2) return;
    if (s2 || !t2.track) {
      t2.data = t2.to.map((e3, a3) => {
        let n4 = t2.from[a3] ?? e3;
        return { x: n4.x + (e3.x - n4.x) * t2.k, y: n4.y + (e3.y - n4.y) * t2.k };
      });
      let n3 = t2.data.map((e3) => ({ x: a2.sx(e3.x), y: a2.sy(e3.y) }));
      t2.track = (function(e3) {
        let t3 = e3.length, a3 = 24 * Math.max(t3 - 1, 1) + 1, n4 = new Float64Array(a3), s3 = new Float64Array(a3), r3 = new Float64Array(a3), l3 = [], i3 = t3 ? `M${e3[0].x.toFixed(2)} ${e3[0].y.toFixed(2)}` : "";
        t3 && (n4[0] = e3[0].x, s3[0] = e3[0].y);
        for (let a4 = 0; a4 < t3 - 1; a4++) {
          let t4 = e3[a4 - 1] ?? e3[a4], c3 = e3[a4], o3 = e3[a4 + 1], d3 = e3[a4 + 2] ?? e3[a4 + 1], h3 = { x: c3.x + (o3.x - t4.x) * A, y: c3.y + (o3.y - t4.y) * A }, u3 = { x: o3.x - (d3.x - c3.x) * A, y: o3.y - (d3.y - c3.y) * A };
          i3 += `C${h3.x.toFixed(2)} ${h3.y.toFixed(2)} ${u3.x.toFixed(2)} ${u3.y.toFixed(2)} ${o3.x.toFixed(2)} ${o3.y.toFixed(2)}`;
          let x3 = (e4) => {
            let t5 = 1 - e4;
            return {
              x: t5 * t5 * t5 * c3.x + 3 * t5 * t5 * e4 * h3.x + 3 * t5 * e4 * e4 * u3.x + e4 * e4 * e4 * o3.x,
              y: t5 * t5 * t5 * c3.y + 3 * t5 * t5 * e4 * h3.y + 3 * t5 * e4 * e4 * u3.y + e4 * e4 * e4 * o3.y
            };
          }, m3 = 24 * a4;
          for (let e4 = 1; e4 <= 24; e4++) {
            let t5 = x3(e4 / 24), a5 = m3 + e4;
            n4[a5] = t5.x, s3[a5] = t5.y, r3[a5] = r3[a5 - 1] + Math.hypot(t5.x - n4[a5 - 1], t5.y - s3[a5 - 1]);
          }
          let y3 = x3(0.5), p3 = x3(0.45), _3 = x3(0.55);
          l3.push({
            x: T(y3.x),
            y: T(y3.y),
            r: T(180 * Math.atan2(_3.y - p3.y, _3.x - p3.x) / Math.PI),
            len: r3[m3 + 24] - r3[m3]
          });
        }
        return { d: i3, xs: n4, ys: s3, cum: r3, mids: l3 };
      })(n3), e2.d.set(t2.track.d), n3.forEach((t3, a3) => {
        e2.dots[a3]?.x.set(t3.x), e2.dots[a3]?.y.set(t3.y);
      }), t2.track.mids.forEach((t3, a3) => {
        e2.arrows[a3]?.x.set(t3.x), e2.arrows[a3]?.y.set(t3.y), e2.arrows[a3]?.r.set(t3.r);
      });
    }
    let y2 = R(n2, 0, m2 - 1), p2 = (l2 = t2.track, i2 = Math.min(Math.floor(y2), Math.max(m2 - 2, 0)), o2 = Math.min(Math.floor(c2 = R((y2 - i2) * 24, 0, 24)), 23), h2 = Math.min((d2 = 24 * i2 + o2) + 1, l2.xs.length - 1), u2 = c2 - o2, x2 = l2.cum[l2.cum.length - 1] || 1, {
      x: l2.xs[d2] + (l2.xs[h2] - l2.xs[d2]) * u2,
      y: l2.ys[d2] + (l2.ys[h2] - l2.ys[d2]) * u2,
      frac: (l2.cum[d2] + (l2.cum[h2] - l2.cum[d2]) * u2) / x2
    });
    e2.hx.set(T(p2.x)), e2.hy.set(T(p2.y)), e2.trail.set(p2.frac), e2.vLen.set(Math.max(T(a2.bottom - p2.y), 0)), e2.hLen.set(Math.max(T(p2.x - 44), 0)), e2.dots.forEach((e3, t3) => e3.on.set(+(y2 >= t3 - 1e-3))), e2.arrows.forEach((e3, t3) => e3.on.set(+(y2 >= t3 + 0.5)));
    let _2 = Math.min(Math.floor(y2), Math.max(m2 - 2, 0)), b2 = m2 > 1 ? y2 - _2 : 0, f2 = t2.data[_2], g2 = t2.data[Math.min(_2 + 1, m2 - 1)], j2 = f2.x + (g2.x - f2.x) * b2, v2 = f2.y + (g2.y - f2.y) * b2;
    e2.xv.set(r2(j2)), e2.yv.set(r2(v2)), e2.ratio.set(I(j2 > 0 ? v2 / j2 : 0));
    let N2 = m2 > 1 ? y2 / (m2 - 1) : 1;
    e2.thumb.set(`${100 * N2}%`), e2.fill.set(N2);
  }
  let F = {
    left: { dx: -10, dy: 4, anchor: "end" },
    right: { dx: 10, dy: 4, anchor: "start" },
    above: { dx: 0, dy: -11, anchor: "middle" },
    below: { dx: 0, dy: 19, anchor: "middle" }
  };
  function z(e2, t2) {
    if (!t2) return "right";
    let a2 = t2.x - e2.x, n2 = t2.y - e2.y;
    return Math.abs(a2) >= 0.8 * Math.abs(n2) ? a2 > 0 ? "left" : "right" : n2 > 0 ? "above" : "below";
  }
  function O({
    series: e2 = b,
    defaultSeries: t2,
    xAxis: a2 = f,
    yAxis: x2 = g,
    targetRatio: p2 = j,
    formatValue: _2 = S,
    title: v2 = "CAC and LTV by channel",
    description: $2 = "Monthly acquisition cost against 12 month lifetime value, January 2025 to June 2026.",
    onMonthChange: A2,
    className: E2
  }) {
    let H2, V, B, G, Q = (0, l.I)(), X = (0, s.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), J = e2.some((e3) => e3.id === t2) ? t2 : e2[0]?.id ?? "", [q, Z] = (0, s.useState)(J), U = e2.find((e3) => e3.id === q) ?? e2[0], W = (0, s.useMemo)(() => U?.points ?? [], [U]), K = W.length, [ee, et] = (0, s.useState)(P), ea = (0, s.useMemo)(() => Y(ee, a2, x2), [ee, a2, x2]), [en, es] = (0, s.useState)(0), [er, el] = (0, s.useState)(false), [ei, ec] = (0, s.useState)(null), [eo, ed] = (0, s.useState)(false), [eh, eu] = (0, s.useState)(""), [ex] = (0, s.useState)(() => (0, r.OQ)(0)), [em] = (0, s.useState)(() => {
      let e3;
      return {
        d: (e3 = (e4) => (0, r.OQ)(e4))(""),
        trail: e3(0),
        ghost: e3(0),
        hx: e3(0),
        hy: e3(0),
        vLen: e3(0),
        hLen: e3(0),
        dots: Array.from({ length: K }, () => ({
          x: e3(0),
          y: e3(0),
          on: e3(0)
        })),
        arrows: Array.from({ length: Math.max(K - 1, 0) }, () => ({
          x: e3(0),
          y: e3(0),
          r: e3(0),
          on: e3(0)
        })),
        xv: e3(""),
        yv: e3(""),
        ratio: e3(""),
        thumb: e3("0%"),
        fill: e3(0)
      };
    }), [ey] = (0, s.useState)(() => {
      let e3 = W.map((e4) => ({ x: e4.x, y: e4.y })), t3 = { from: e3, to: e3, k: 1, data: e3, track: null };
      return D(em, t3, Y(P, a2, x2), 0, true, _2), t3;
    }), ep = (0, s.useRef)(null), e_ = (0, s.useRef)(null), eb = (0, s.useRef)(null), ef = (0, s.useRef)(null), eg = (0, s.useRef)(null), ej = (0, s.useRef)(null), ev = (0, s.useRef)(null), eN = (0, s.useRef)(null), eM = (0, s.useRef)(false), ek = (0, s.useRef)(0), ew = (0, s.useRef)(0), e$ = (0, s.useRef)(null), eP = (0, s.useRef)({ geo: ea, formatValue: _2, n: K, onMonthChange: A2 }), eA = (0, s.useCallback)(
      (e3) => {
        let t3 = eP.current;
        D(em, ey, t3.geo, ex.get(), e3, t3.formatValue);
        let a3 = R(Math.round(ex.get()), 0, Math.max(t3.n - 1, 0));
        a3 !== ek.current && (ek.current = a3, es(a3));
      },
      [ey, em, ex]
    );
    (0, s.useLayoutEffect)(() => {
      eP.current = { geo: ea, formatValue: _2, n: K, onMonthChange: A2 }, eA(true);
    }, [ea, _2, K, A2, eA]), (0, s.useEffect)(() => ex.on("change", () => eA(false)), [ex, eA]), (0, s.useLayoutEffect)(() => {
      let e3 = e_.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = Math.round(e3.clientWidth), a4 = Math.round(e3.clientHeight);
        t4 > 0 && a4 > 0 && et((e4) => e4.w === t4 && e4.h === a4 ? e4 : { w: t4, h: a4 });
      };
      t3();
      let a3 = "u" < typeof ResizeObserver ? null : new ResizeObserver(t3);
      return a3?.observe(e3), () => a3?.disconnect();
    }, []);
    let eL = (0, s.useCallback)(() => {
      eg.current?.stop(), eg.current = null, eN.current && (clearInterval(eN.current), eN.current = null), el(false);
    }, []), eC = (0, s.useCallback)(() => {
      eM.current = true, ev.current?.stop(), Q ? em.ghost.set(1) : ev.current = (0, i.i)(em.ghost, 1, {
        duration: k.standard,
        ease: [...w.standard]
      });
    }, [em, Q]), eR = (0, s.useCallback)(
      (e3) => {
        let t3 = W[e3];
        if (!t3) return "";
        let n2 = t3.x > 0 ? t3.y / t3.x : 0;
        return `${t3.label}: ${a2.name} ${_2(t3.x)}, ${x2.name} ${_2(t3.y)}, ${I(n2)}, ${n2 >= p2 ? "above" : "below"} the ${p2}x target.`;
      },
      [W, a2.name, x2.name, _2, p2]
    ), eT = (0, s.useCallback)(
      (e3, t3 = true) => {
        eP.current.onMonthChange?.(e3), t3 && eu(eR(e3));
      },
      [eR]
    ), eE = (0, s.useCallback)(
      (e3) => {
        eL(), eM.current || eC();
        let t3 = R(e3, 0, K - 1);
        ew.current = t3, Q ? ex.set(t3) : eg.current = (0, i.i)(ex, t3, M.smooth), eT(t3);
      },
      [K, Q, eT, eC, eL, ex]
    );
    (0, s.useEffect)(() => {
      let e3 = ep.current;
      if (!e3 || eM.current) return;
      if (ew.current = K - 1, Q) {
        ex.set(K - 1), eC();
        return;
      }
      let t3 = () => {
        eM.current || (eg.current?.stop(), ex.set(0), eg.current = (0, i.i)(ex, K - 1, {
          duration: (K - 1) * C,
          ease: [...w.inOut],
          onComplete: eC
        }));
      };
      if ("u" < typeof IntersectionObserver) return void t3();
      let a3 = new IntersectionObserver(
        (e4) => {
          e4.some((e5) => e5.isIntersecting) && (a3.disconnect(), t3());
        },
        { threshold: 0.35 }
      );
      return a3.observe(e3), () => a3.disconnect();
    }, [K, Q, eC, ex]), (0, s.useEffect)(
      () => () => {
        eg.current?.stop(), ej.current?.stop(), ev.current?.stop(), eN.current && clearInterval(eN.current);
      },
      []
    );
    let eS = en >= K - 1, eI = (e3) => {
      let t3 = ef.current;
      if (!t3) return 0;
      let a3 = t3.getBoundingClientRect();
      return R((e3 - a3.left) / Math.max(a3.width, 1) * (K - 1), 0, K - 1);
    }, eY = () => {
      let e3 = e$.current;
      e3 && ex.set(e3.start + (e3.target - e3.start) * e3.blend);
    }, eD = (e3) => {
      let t3 = e$.current;
      t3 && t3.pointer === e3.pointerId && (e$.current = null, ed(false), eE(Math.round(t3.target)));
    }, eF = (0, s.useMemo)(
      () => W.map((e3) => ({ x: ea.sx(e3.x), y: ea.sy(e3.y) })),
      [W, ea]
    ), ez = (e3) => {
      let t3 = eb.current;
      if (!t3) return null;
      let a3 = t3.getBoundingClientRect(), n2 = (e3.clientX - a3.left) / Math.max(a3.width, 1) * ea.w, s2 = (e3.clientY - a3.top) / Math.max(a3.height, 1) * ea.h, r2 = null, l2 = "touch" === e3.pointerType ? 45 : 30;
      return eF.forEach((e4, t4) => {
        let a4 = Math.hypot(e4.x - n2, e4.y - s2);
        a4 < l2 && (l2 = a4, r2 = t4);
      }), r2;
    }, eO = (0, s.useMemo)(() => {
      let e3 = ea.w < 440, t3 = [], n2 = a2.step * (e3 ? 2 : 1), s2 = e3 ? Math.ceil((a2.min + 1e-9) / n2) * n2 : a2.min;
      for (let r3 = s2; r3 <= a2.max + 1e-9; r3 += n2)
        (!e3 || r3 < a2.max) && t3.push(r3);
      let r2 = [], l2 = ea.h - 14 - 30 < 240 ? 2 * x2.step : x2.step;
      for (let e4 = x2.min; e4 <= x2.max + 1e-9; e4 += l2) r2.push(e4);
      let i2 = [
        { x: a2.min, y: x2.min },
        { x: a2.max, y: x2.min },
        { x: a2.max, y: x2.max },
        { x: a2.min, y: x2.max }
      ], c2 = (e4) => e4.y - p2 * e4.x, o2 = [];
      i2.forEach((e4, t4) => {
        let a3 = i2[(t4 + 1) % i2.length], n3 = c2(e4), s3 = c2(a3);
        if (n3 >= 0 && o2.push(e4), n3 >= 0 != s3 >= 0) {
          let t5 = n3 / (n3 - s3);
          o2.push({ x: e4.x + (a3.x - e4.x) * t5, y: e4.y + (a3.y - e4.y) * t5 });
        }
      });
      let d2 = o2.length ? `M${o2.map((e4) => `${ea.sx(e4.x)} ${ea.sy(e4.y)}`).join(" L")} Z` : "", h2 = o2.filter((e4) => 1e-6 > Math.abs(c2(e4))).sort((e4, t4) => e4.x - t4.x), u2 = h2[0] ?? { x: a2.min, y: p2 * a2.min }, m2 = h2[h2.length - 1] ?? { x: a2.max, y: p2 * a2.max }, y2 = { x: ea.sx(u2.x), y: ea.sy(u2.y) }, _3 = { x: ea.sx(m2.x), y: ea.sy(m2.y) }, b2 = ea.sy(x2.max), f2 = 180 * Math.atan2(_3.y - y2.y, _3.x - y2.x) / Math.PI, g2 = { x: y2.x + (_3.x - y2.x) * 0.94, y: y2.y + (_3.y - y2.y) * 0.94 };
      return {
        xTicks: t3,
        yTicks: r2,
        origin: y2,
        end: _3,
        region: d2,
        angle: f2,
        labelAt: g2,
        top: b2
      };
    }, [ea, a2, x2, p2]), eH = (0, s.useMemo)(() => {
      if (!K) return [];
      let e3 = [
        { index: 0, text: W[0].label, side: z(eF[0], eF[1]), strong: false },
        {
          index: K - 1,
          text: W[K - 1].label,
          side: z(eF[K - 1], eF[K - 2]),
          strong: true
        }
      ];
      return ea.w < 480 || (U?.notes ?? []).forEach((t3) => {
        t3.index > 0 && t3.index < K - 1 && e3.push({
          index: t3.index,
          text: t3.text,
          side: t3.side,
          strong: false
        });
      }), e3;
    }, [U, W, eF, K, ea.w]), eV = (0, s.useMemo)(
      () => eF.slice(0, -1).map(
        (e3, t3) => Math.hypot(eF[t3 + 1].x - e3.x, eF[t3 + 1].y - e3.y) >= 22
      ),
      [eF]
    ), eB = W[en], eG = W[0], eQ = (eB && eB.x > 0 ? eB.y / eB.x : 0) >= p2, eX = (e3, t3) => {
      let a3 = Math.round(e3 - t3);
      return 0 === a3 ? `Same as ${eG?.label ?? "the start"}` : `${a3 > 0 ? "+" : "\u2212"}${_2(Math.abs(a3))} since ${eG?.label ?? "the start"}`;
    }, [eJ, eq] = (0, s.useState)({ hover: null, last: null, glide: false });
    eJ.hover !== ei && eq({
      hover: ei,
      last: ei ?? eJ.last,
      glide: null !== ei && null !== eJ.hover
    });
    let eZ = ei ?? eJ.last, eU = null !== ei && eJ.glide, eW = null !== eZ && eF[eZ] ? (V = R((H2 = eF[eZ]).x - 88, 0, Math.max(ea.w - 176, 0)), B = H2.y < 118, G = W[eZ], {
      left: V,
      top: H2.y,
      below: B,
      d: G,
      ratio: G.x > 0 ? G.y / G.x : 0,
      x: H2.x,
      y: H2.y
    }) : null, eK = W.map((e3, t3) => {
      let [a3, n2] = e3.label.split(" "), s2 = 0 === t3 || t3 === K - 1, r2 = "Jan" === a3, l2 = ["Jan", "Apr", "Jul", "Oct"].includes(a3);
      return (s2 || l2) && (s2 || !(t3 >= K - 3)) ? {
        i: t3,
        text: s2 || r2 ? `${a3} ${n2}` : a3,
        minor: !s2 && !r2,
        edge: 0 === t3 ? "start" : t3 === K - 1 ? "end" : void 0
      } : null;
    }).filter(Boolean), e0 = er ? d.A : eS ? h.A : u.A;
    return (0, n.jsxs)("section", {
      ref: ep,
      className: [N().root, E2].filter(Boolean).join(" "),
      "aria-labelledby": `${X}-title`,
      children: [
        (0, n.jsxs)("header", {
          className: N().head,
          children: [
            (0, n.jsxs)("div", {
              className: N().headText,
              children: [
                (0, n.jsx)("h2", {
                  id: `${X}-title`,
                  className: N().title,
                  children: v2
                }),
                $2 ? (0, n.jsx)("p", { className: N().description, children: $2 }) : null
              ]
            }),
            e2.length > 1 ? (0, n.jsx)(y.A, {
              label: "Channel",
              value: q,
              onValueChange: (t3) => {
                var n2, s2;
                let l2 = e2.find((e3) => e3.id === t3);
                if (!l2 || t3 === q) return;
                Z(t3), ec(null), eM.current || (eg.current?.stop(), ex.set(K - 1), eC()), ej.current?.stop(), n2 = l2.points.map((e3) => ({ x: e3.x, y: e3.y })), s2 = +!!Q, ey.from = ey.data.map((e3) => ({ ...e3 })), ey.to = n2, ey.k = s2;
                let c2 = ek.current, o2 = l2.points[c2];
                if (o2) {
                  let e3 = o2.x > 0 ? o2.y / o2.x : 0;
                  eu(
                    `${l2.name}. ${o2.label}: ${a2.name} ${_2(o2.x)}, ${x2.name} ${_2(o2.y)}, ${I(e3)}.`
                  );
                }
                if (Q) return void eA(true);
                let d2 = (0, r.OQ)(0);
                d2.on("change", (e3) => {
                  ey.k = e3, eA(true);
                }), ej.current = (0, i.i)(d2, 1, {
                  ...M.smooth,
                  onComplete: () => {
                    ey.k = 1, eA(true);
                  }
                });
              },
              options: e2.map((e3) => ({ value: e3.id, label: e3.name }))
            }) : null
          ]
        }),
        (0, n.jsxs)("dl", {
          className: N().stats,
          children: [
            (0, n.jsxs)("div", {
              className: N().stat,
              children: [
                (0, n.jsx)("dt", { children: "Month" }),
                (0, n.jsxs)("dd", {
                  children: [
                    (0, n.jsx)("span", {
                      className: N().statValue,
                      children: eB?.label
                    }),
                    (0, n.jsxs)("span", {
                      className: N().statNote,
                      children: [en + 1, " of ", K]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: N().stat,
              children: [
                (0, n.jsx)("dt", { children: a2.name }),
                (0, n.jsxs)("dd", {
                  children: [
                    (0, n.jsx)(c.PY1.span, {
                      className: N().statValue,
                      children: em.xv
                    }),
                    (0, n.jsx)("span", {
                      className: N().statNote,
                      children: eB && eG ? eX(eB.x, eG.x) : ""
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: N().stat,
              children: [
                (0, n.jsx)("dt", { children: x2.name }),
                (0, n.jsxs)("dd", {
                  children: [
                    (0, n.jsx)(c.PY1.span, {
                      className: N().statValue,
                      children: em.yv
                    }),
                    (0, n.jsx)("span", {
                      className: N().statNote,
                      children: eB && eG ? eX(eB.y, eG.y) : ""
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: N().stat,
              "data-status": eQ ? "good" : "low",
              children: [
                (0, n.jsxs)("dt", { children: [x2.name, " to ", a2.name] }),
                (0, n.jsxs)("dd", {
                  children: [
                    (0, n.jsx)(c.PY1.span, {
                      className: N().statValue,
                      children: em.ratio
                    }),
                    (0, n.jsxs)("span", {
                      className: N().statNote,
                      children: [
                        (0, n.jsx)("span", {
                          className: N().statusDot,
                          "aria-hidden": "true"
                        }),
                        eQ ? "Above" : "Below",
                        " ",
                        p2,
                        "x target"
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: N().chartBlock,
          children: [
            (0, n.jsxs)("div", {
              className: N().chartHead,
              children: [
                (0, n.jsx)("span", {
                  className: N().axisTitle,
                  children: x2.title
                }),
                (0, n.jsxs)("ul", {
                  className: N().key,
                  "aria-label": "Chart key",
                  children: [
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("span", {
                          className: N().keyLine,
                          "data-line": "path",
                          "aria-hidden": "true"
                        }),
                        U?.name,
                        ", in time order"
                      ]
                    }),
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("span", {
                          className: N().keyLine,
                          "data-line": "target",
                          "aria-hidden": "true"
                        }),
                        x2.name,
                        " = ",
                        p2,
                        "x ",
                        a2.name
                      ]
                    }),
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("span", {
                          className: N().keyZone,
                          "aria-hidden": "true"
                        }),
                        "Healthy zone"
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              ref: e_,
              className: N().plot,
              onPointerLeave: () => ec(null),
              children: [
                (0, n.jsxs)("svg", {
                  ref: eb,
                  className: N().svg,
                  viewBox: `0 0 ${ea.w} ${ea.h}`,
                  "aria-hidden": "true",
                  onPointerMove: (e3) => {
                    if ("touch" === e3.pointerType) return;
                    let t3 = ez(e3);
                    ec((e4) => e4 === t3 ? e4 : t3);
                  },
                  onPointerDown: (e3) => {
                    let t3 = ez(e3);
                    ec(t3), null !== t3 && eE(t3);
                  },
                  children: [
                    (0, n.jsx)("defs", {
                      children: (0, n.jsx)("clipPath", {
                        id: `${X}-clip`,
                        children: (0, n.jsx)("rect", {
                          x: 44,
                          y: 14,
                          width: Math.max(ea.right - 44, 0),
                          height: Math.max(ea.bottom - 14, 0)
                        })
                      })
                    }),
                    (0, n.jsx)("path", { className: N().zone, d: eO.region }),
                    (0, n.jsxs)("g", {
                      children: [
                        eO.yTicks.map(
                          (e3) => (0, n.jsxs)(
                            "g",
                            {
                              children: [
                                (0, n.jsx)("line", {
                                  className: N().grid,
                                  x1: 44,
                                  x2: ea.right,
                                  y1: ea.sy(e3),
                                  y2: ea.sy(e3)
                                }),
                                (0, n.jsx)("text", {
                                  className: N().tick,
                                  x: 36,
                                  y: ea.sy(e3),
                                  dy: "0.32em",
                                  textAnchor: "end",
                                  children: e3 >= 1e3 && e3 % 1e3 == 0 ? `${_2(e3 / 1e3)}k` : _2(e3)
                                })
                              ]
                            },
                            `y${e3}`
                          )
                        ),
                        eO.xTicks.map(
                          (e3) => (0, n.jsx)(
                            "text",
                            {
                              className: N().tick,
                              x: ea.sx(e3),
                              y: ea.bottom + 19,
                              textAnchor: e3 <= a2.min ? "start" : e3 >= a2.max ? "end" : "middle",
                              children: _2(e3)
                            },
                            `x${e3}`
                          )
                        )
                      ]
                    }),
                    (0, n.jsx)("line", {
                      className: N().target,
                      x1: eO.origin.x,
                      y1: eO.origin.y,
                      x2: eO.end.x,
                      y2: eO.end.y
                    }),
                    ea.w >= 480 ? (0, n.jsxs)("text", {
                      className: N().targetLabel,
                      transform: `translate(${T(eO.labelAt.x)} ${T(eO.labelAt.y)}) rotate(${T(eO.angle)})`,
                      y: -7,
                      textAnchor: "end",
                      children: [p2, "x ", a2.name]
                    }) : null,
                    ea.w >= 480 ? (0, n.jsxs)("text", {
                      className: N().zoneLabel,
                      x: 56,
                      y: 32,
                      children: ["Healthy, above ", p2, "x"]
                    }) : null,
                    (0, n.jsxs)("g", {
                      clipPath: `url(#${X}-clip)`,
                      children: [
                        (0, n.jsx)(c.PY1.rect, {
                          className: N().guide,
                          x: -0.5,
                          y: 0,
                          width: 1,
                          height: 1,
                          style: {
                            x: em.hx,
                            y: em.hy,
                            scaleY: em.vLen,
                            originY: 0
                          }
                        }),
                        (0, n.jsx)(c.PY1.rect, {
                          className: N().guide,
                          x: 44,
                          y: -0.5,
                          width: 1,
                          height: 1,
                          style: { y: em.hy, scaleX: em.hLen, originX: 0 }
                        })
                      ]
                    }),
                    (0, n.jsx)(c.PY1.path, {
                      className: N().ghost,
                      d: em.d,
                      style: { opacity: em.ghost }
                    }),
                    (0, n.jsx)(c.PY1.path, {
                      className: N().trail,
                      d: em.d,
                      style: { pathLength: em.trail }
                    }),
                    (0, n.jsx)("g", {
                      children: em.arrows.map(
                        (e3, t3) => eV[t3] ? (0, n.jsxs)(
                          c.PY1.g,
                          {
                            style: { x: e3.x, y: e3.y, rotate: e3.r },
                            children: [
                              (0, n.jsx)(c.PY1.path, {
                                className: N().arrowGhost,
                                d: "M-3.5 -3.5 L3.5 0 L-3.5 3.5 Z",
                                style: { opacity: em.ghost }
                              }),
                              (0, n.jsx)(c.PY1.path, {
                                className: N().arrow,
                                d: "M-3.5 -3.5 L3.5 0 L-3.5 3.5 Z",
                                style: { opacity: e3.on }
                              })
                            ]
                          },
                          t3
                        ) : null
                      )
                    }),
                    (0, n.jsx)("g", {
                      children: em.dots.map(
                        (e3, t3) => (0, n.jsxs)(
                          c.PY1.g,
                          {
                            className: N().dot,
                            "data-hover": ei === t3 ? "" : void 0,
                            style: { x: e3.x, y: e3.y },
                            children: [
                              (0, n.jsx)("circle", {
                                className: N().dotHalo,
                                r: 11
                              }),
                              (0, n.jsx)(c.PY1.circle, {
                                className: N().dotGhost,
                                r: 3,
                                style: { opacity: em.ghost }
                              }),
                              (0, n.jsx)(c.PY1.circle, {
                                className: N().dotPast,
                                r: 3.25,
                                style: { opacity: e3.on }
                              })
                            ]
                          },
                          t3
                        )
                      )
                    }),
                    (0, n.jsx)(c.PY1.g, {
                      style: { opacity: em.ghost },
                      children: (0, n.jsx)(o.N, {
                        initial: false,
                        children: (0, n.jsx)(
                          c.PY1.g,
                          {
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: Q ? { duration: 0 } : {
                                duration: k.standard,
                                ease: [...w.standard],
                                delay: k.standard
                              }
                            },
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: Q ? 0 : k.exit,
                                ease: [...w.exit]
                              }
                            },
                            children: eH.map((e3) => {
                              let t3 = eF[e3.index], a3 = 6.6 * e3.text.length, s2 = F["right" === e3.side && t3.x + 10 + a3 > ea.right ? "left" : "left" === e3.side && t3.x - 10 - a3 < 44 ? "right" : e3.side];
                              return (0, n.jsx)(
                                "text",
                                {
                                  className: N().pointLabel,
                                  "data-strong": e3.strong ? "" : void 0,
                                  x: T(t3.x + s2.dx),
                                  y: T(t3.y + s2.dy),
                                  textAnchor: s2.anchor,
                                  children: e3.text
                                },
                                `${e3.index}-${e3.text}`
                              );
                            })
                          },
                          q
                        )
                      })
                    }),
                    (0, n.jsxs)(c.PY1.g, {
                      className: N().headMark,
                      "data-active": eo || er ? "" : void 0,
                      style: { x: em.hx, y: em.hy },
                      children: [
                        (0, n.jsx)("circle", {
                          className: N().headHalo,
                          r: 13
                        }),
                        (0, n.jsx)("circle", { className: N().headDot, r: 6 })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)("div", {
                  className: N().tip,
                  "data-open": null !== ei && eW ? "" : void 0,
                  "data-glide": eU ? "" : void 0,
                  "data-below": eW?.below ? "" : void 0,
                  style: eW ? {
                    transform: `translate(${T(eW.left)}px, ${T(eW.top)}px)`
                  } : void 0,
                  "aria-hidden": "true",
                  children: eW ? (0, n.jsxs)("div", {
                    className: N().tipCard,
                    children: [
                      (0, n.jsx)("span", {
                        className: N().tipDate,
                        children: eW.d.label
                      }),
                      (0, n.jsxs)("dl", {
                        className: N().tipRows,
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("dt", { children: a2.name }),
                              (0, n.jsx)("dd", { children: _2(eW.d.x) })
                            ]
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("dt", { children: x2.name }),
                              (0, n.jsx)("dd", { children: _2(eW.d.y) })
                            ]
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("dt", { children: "Ratio" }),
                              (0, n.jsx)("dd", {
                                "data-status": eW.ratio >= p2 ? "good" : "low",
                                children: I(eW.ratio)
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }) : null
                })
              ]
            }),
            (0, n.jsx)("span", {
              className: N().axisTitle,
              "data-axis": "x",
              children: a2.title
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: N().scrub,
          children: [
            (0, n.jsxs)(m.$, {
              variant: "secondary",
              className: N().play,
              onClick: () => {
                if (er) {
                  eL(), ew.current = ek.current, eT(ek.current);
                  return;
                }
                eL(), eM.current || eC();
                let e3 = ex.get() >= K - 1 - 0.01 ? 0 : ex.get();
                if (ex.set(e3), ew.current = K - 1, el(true), Q) {
                  let t3 = Math.ceil(e3);
                  eN.current = setInterval(() => {
                    t3 = Math.min(t3 + 1, K - 1), ex.set(t3), t3 >= K - 1 ? (eL(), eT(K - 1)) : ew.current = K - 1;
                  }, 2e3 * k.considered);
                  return;
                }
                eg.current = (0, i.i)(ex, K - 1, {
                  duration: (K - 1 - e3) * L,
                  ease: "linear",
                  onComplete: () => {
                    eg.current = null, el(false), eT(K - 1);
                  }
                });
              },
              "aria-label": er ? "Pause" : eS ? "Replay from the first month" : "Play through the months",
              children: [
                (0, n.jsx)(e0, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                er ? "Pause" : eS ? "Replay" : "Play"
              ]
            }),
            (0, n.jsxs)("div", {
              className: N().timeline,
              children: [
                (0, n.jsxs)("div", {
                  ref: ef,
                  className: N().scrubber,
                  "data-active": eo ? "" : void 0,
                  role: "slider",
                  tabIndex: 0,
                  "aria-label": "Month",
                  "aria-orientation": "horizontal",
                  "aria-valuemin": 1,
                  "aria-valuemax": K,
                  "aria-valuenow": en + 1,
                  "aria-valuetext": eR(en),
                  onPointerDown: (e3) => {
                    if (0 !== e3.button) return;
                    e3.preventDefault(), e3.currentTarget.setPointerCapture(e3.pointerId), e3.currentTarget.focus({ preventScroll: true }), eL(), eM.current || eC();
                    let t3 = {
                      pointer: e3.pointerId,
                      target: eI(e3.clientX),
                      start: ex.get(),
                      blend: +!!Q
                    };
                    e$.current = t3, ed(true), ec(null), Q ? eY() : eg.current = (0, i.i)(0, 1, {
                      ...M.smooth,
                      onUpdate: (e4) => {
                        t3.blend = e4, eY();
                      }
                    });
                  },
                  onPointerMove: (e3) => {
                    let t3 = e$.current;
                    t3 && t3.pointer === e3.pointerId && (t3.target = eI(e3.clientX), t3.blend >= 1 && eY());
                  },
                  onPointerUp: eD,
                  onPointerCancel: eD,
                  onKeyDown: (e3) => {
                    let t3 = ew.current, a3 = null;
                    "ArrowRight" === e3.key || "ArrowUp" === e3.key ? a3 = t3 + 1 : "ArrowLeft" === e3.key || "ArrowDown" === e3.key ? a3 = t3 - 1 : "PageUp" === e3.key ? a3 = t3 + 3 : "PageDown" === e3.key ? a3 = t3 - 3 : "Home" === e3.key ? a3 = 0 : "End" === e3.key && (a3 = K - 1), null !== a3 && (e3.preventDefault(), ec(null), eE(a3));
                  },
                  children: [
                    (0, n.jsx)("div", {
                      className: N().bar,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(c.PY1.span, {
                        className: N().barFill,
                        style: { scaleX: em.fill, originX: 0 }
                      })
                    }),
                    (0, n.jsx)("div", {
                      className: N().notches,
                      "aria-hidden": "true",
                      children: W.map(
                        (e3, t3) => (0, n.jsx)(
                          "span",
                          {
                            className: N().notch,
                            style: {
                              left: `${K > 1 ? t3 / (K - 1) * 100 : 0}%`
                            }
                          },
                          e3.label
                        )
                      )
                    }),
                    (0, n.jsx)("div", {
                      className: N().thumbTrack,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(c.PY1.div, {
                        className: N().thumbRail,
                        style: { x: em.thumb },
                        children: (0, n.jsx)("span", { className: N().thumb })
                      })
                    })
                  ]
                }),
                (0, n.jsx)("div", {
                  className: N().monthLabels,
                  "aria-hidden": "true",
                  children: eK.map(
                    (e3) => (0, n.jsx)(
                      "span",
                      {
                        className: N().monthLabel,
                        "data-minor": e3.minor ? "" : void 0,
                        "data-edge": e3.edge,
                        style: {
                          left: `${K > 1 ? e3.i / (K - 1) * 100 : 0}%`
                        },
                        children: e3.text
                      },
                      e3.i
                    )
                  )
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: N().srOnly,
          children: (0, n.jsxs)("table", {
            children: [
              (0, n.jsxs)("caption", {
                children: [
                  U?.name,
                  ": ",
                  a2.title,
                  " and ",
                  x2.title,
                  " by month"
                ]
              }),
              (0, n.jsx)("thead", {
                children: (0, n.jsxs)("tr", {
                  children: [
                    (0, n.jsx)("th", { scope: "col", children: "Month" }),
                    (0, n.jsx)("th", { scope: "col", children: a2.name }),
                    (0, n.jsx)("th", { scope: "col", children: x2.name }),
                    (0, n.jsx)("th", { scope: "col", children: "Ratio" })
                  ]
                })
              }),
              (0, n.jsx)("tbody", {
                children: W.map(
                  (e3) => (0, n.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, n.jsx)("th", { scope: "row", children: e3.label }),
                        (0, n.jsx)("td", { children: _2(e3.x) }),
                        (0, n.jsx)("td", { children: _2(e3.y) }),
                        (0, n.jsx)("td", {
                          children: I(e3.x > 0 ? e3.y / e3.x : 0)
                        })
                      ]
                    },
                    e3.label
                  )
                )
              })
            ]
          })
        }),
        (0, n.jsx)("p", {
          className: N().srOnly,
          "aria-live": "polite",
          children: eh
        })
      ]
    });
  }
  let H = O;
}

__m(__module,__exports,__require);
});
A.regCss(83536, ".root{container:scatter/inline-size;position:relative;display:grid;width:100%;min-width:0;gap:24px;border:1px solid var(--border);border-radius:var(--radius-surface);padding:24px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root>*{min-width:0}\n@media (max-width:599px){.root{gap:20px;padding:16px;border-radius:var(--radius-panel)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.head{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:16px 24px}\n.headText{min-width:0;flex:1 1 280px}\n.title{margin:0;font-size:var(--text-xl);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.description{margin:4px 0 0;color:var(--text-secondary);text-wrap:pretty}\n.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin:0;border:1px solid var(--border-subtle);border-radius:calc(var(--radius-surface) - 24px)}\n@container scatter (max-width: 719px){.stats{grid-template-columns:repeat(2,minmax(0,1fr))}\n@media (max-width:599px){.stats{border-radius:calc(var(--radius-panel) - 16px)}\n.stat{display:grid;min-width:0;gap:4px;padding:14px 16px}\n.stat+.stat{border-left:1px solid var(--border-subtle)}\n.stat dt{color:var(--text-secondary);font-size:var(--text-xs)}\n.stat dd{display:grid;gap:2px;margin:0}\n.stat[data-status=good] .statusDot{background:var(--success)}\n.stat[data-status=low] .statusDot{background:var(--warning)}\n.stat[data-status] .statNote{color:var(--text-secondary)}\n.stat:nth-child(3){border-left:0}\n.stat:nth-child(n+3){border-top:1px solid var(--border-subtle)}\n@container scatter (max-width: 379px){.stat{padding:12px}\n.statValue{overflow:hidden;font-size:var(--text-xl);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}\n.statValue{font-size:var(--text-lg)}\n.statNote{display:flex;align-items:center;gap:6px;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}\n.statusDot{flex:none;width:6px;height:6px;border-radius:var(--radius-pill);background:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.dotHalo,.headHalo,.statusDot,.thumb,.thumb:after,.tip,.tip[data-glide]{transition:none}\n.chartBlock{display:grid;gap:8px}\n.chartHead{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px}\n.axisTitle{color:var(--text-muted);font-size:var(--text-xs)}\n.axisTitle[data-axis=x]{justify-self:end;margin-top:-4px}\n.key{display:flex;flex-wrap:wrap;gap:4px 16px;margin:0;padding:0;color:var(--text-secondary);font-size:var(--text-xs);list-style:none}\n.key li{display:inline-flex;align-items:center;gap:8px}\n.keyLine{width:16px;height:0;border-top:2px solid var(--accent);border-radius:var(--radius-pill)}\n.keyLine[data-line=target]{border-top:1.5px dashed var(--text-muted)}\n.keyZone{width:12px;height:12px;border-radius:3px;background:color-mix(in oklab,var(--success) 14%,transparent);box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--success) 22%,transparent)}\n.plot{position:relative;height:380px;min-width:0}\n@container scatter (max-width: 719px){.plot{height:330px}\n@container scatter (max-width: 479px){.plot{height:300px}\n.svg{display:block;width:100%;height:100%;overflow:visible;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}\n.grid{stroke:var(--border-subtle);stroke-width:1;shape-rendering:crispEdges}\n.tick{fill:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.zone{fill:color-mix(in oklab,var(--success) 6%,transparent)}\n.target{stroke:var(--text-muted);stroke-width:1.25;stroke-dasharray:4 4}\n.pointLabel,.targetLabel,.zoneLabel{paint-order:stroke;stroke:var(--surface);stroke-width:4px;stroke-linejoin:round;font-size:var(--text-xs)}\n.targetLabel{fill:var(--text-secondary)}\n.zoneLabel{fill:var(--success)}\n.pointLabel{fill:var(--text-secondary)}\n.pointLabel[data-strong]{fill:var(--foreground);font-weight:500}\n.guide{fill:var(--border-strong);opacity:.7}\n.ghost{fill:none;stroke:var(--border-strong);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:2 4}\n.trail{fill:none;stroke:var(--accent);stroke-width:2.25;stroke-linecap:round;stroke-linejoin:round}\n.arrow{fill:var(--accent)}\n.arrowGhost{fill:var(--text-muted)}\n.dotHalo{fill:var(--accent-subtle);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.dot[data-hover] .dotHalo{opacity:1}\n.dotGhost{fill:var(--surface);stroke:var(--text-muted);stroke-width:1.5}\n.dotPast{fill:var(--accent);stroke:var(--surface);stroke-width:1.5}\n.headMark{pointer-events:none}\n.headMark[data-active] .headHalo{transform:scale(1.25)}\n.headHalo{fill:var(--accent-subtle);transform-box:fill-box;transform-origin:center;transition:transform var(--duration-spring) var(--ease-spring)}\n.headDot{fill:var(--accent);stroke:var(--surface);stroke-width:2.5}\n.tip{position:absolute;top:0;left:0;width:176px;opacity:0;pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard)}\n.tip[data-open]{opacity:1}\n.tip[data-glide]{transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.tip[data-below] .tipCard{transform:translateY(14px)}\n.tipCard{display:grid;gap:6px;border:1px solid var(--border);border-radius:14px;padding:10px 12px;background:var(--surface-raised);box-shadow:var(--shadow-floating);transform:translateY(calc(-100% - 14px))}\n.tipDate{font-size:var(--text-xs);font-weight:500}\n.tipRows{display:grid;gap:2px;margin:0}\n.tipRows div{display:flex;justify-content:space-between;gap:12px}\n.tipRows dt{color:var(--text-secondary);font-size:var(--text-xs)}\n.tipRows dd{margin:0;font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums}\n.tipRows dd[data-status=good]{color:var(--success)}\n.tipRows dd[data-status=low]{color:var(--warning)}\n.scrub{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:start;gap:20px;border-top:1px solid var(--border-subtle);padding-top:20px}\n@container scatter (max-width: 479px){.scrub{grid-template-columns:minmax(0,1fr);gap:12px}\n.play{min-width:104px}\n.play{justify-self:start}\n.timeline{display:grid;min-width:0;padding-inline:10px}\n.scrubber{position:relative;height:44px;cursor:pointer;touch-action:none;-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.scrubber:hover .thumb{transform:scale(1.08)}\n.scrubber:focus-visible .thumb:after,.scrubber[data-active] .thumb:after{transform:scale(1.5)}\n.scrubber[data-active] .thumb{transform:scale(1.12)}\n.bar{position:absolute;top:20px;right:0;left:0;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.barFill{position:absolute;inset:0;background:var(--accent);will-change:transform}\n.notches{position:absolute;top:20px;right:0;left:0;height:4px;pointer-events:none}\n.notch{position:absolute;top:1px;width:2px;height:2px;margin-left:-1px;border-radius:var(--radius-pill);background:var(--surface);opacity:.8}\n.thumbTrack{position:absolute;inset:0 -12px;overflow:hidden;pointer-events:none}\n.thumbRail{position:absolute;top:0;right:12px;bottom:0;left:12px;will-change:transform}\n.thumb{position:absolute;top:12px;left:-10px;width:20px;height:20px;border-radius:var(--radius-pill);background:var(--control-thumb-on,var(--surface));box-shadow:var(--control-thumb-shadow,0 0 0 1px var(--border-strong));transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:6px;border-radius:var(--radius-pill);background:var(--accent);transition:transform var(--duration-spring) var(--ease-spring)}\n.monthLabels{position:relative;height:18px;margin-top:-4px}\n.monthLabel{position:absolute;top:0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap;transform:translateX(-50%)}\n.monthLabel[data-edge=start]{transform:translateX(-10px)}\n.monthLabel[data-edge=end]{transform:translateX(calc(-100% + 10px))}\n@container scatter (max-width: 559px){.monthLabel[data-minor]{display:none}", {"root":"root","srOnly":"srOnly","head":"head","headText":"headText","title":"title","description":"description","stats":"stats","stat":"stat","statusDot":"statusDot","statNote":"statNote","statValue":"statValue","dotHalo":"dotHalo","headHalo":"headHalo","thumb":"thumb","tip":"tip","chartBlock":"chartBlock","chartHead":"chartHead","axisTitle":"axisTitle","key":"key","keyLine":"keyLine","keyZone":"keyZone","plot":"plot","svg":"svg","grid":"grid","tick":"tick","zone":"zone","target":"target","pointLabel":"pointLabel","targetLabel":"targetLabel","zoneLabel":"zoneLabel","guide":"guide","ghost":"ghost","trail":"trail","arrow":"arrow","arrowGhost":"arrowGhost","dot":"dot","dotGhost":"dotGhost","dotPast":"dotPast","headMark":"headMark","headDot":"headDot","tipCard":"tipCard","tipDate":"tipDate","tipRows":"tipRows","scrub":"scrub","play":"play","timeline":"timeline","scrubber":"scrubber","bar":"bar","barFill":"barFill","notches":"notches","notch":"notch","thumbTrack":"thumbTrack","thumbRail":"thumbRail","monthLabels":"monthLabels","monthLabel":"monthLabel"});
A.cssFor("connected-scatter", [83536]);
A.item("connected-scatter", {entry:69519, export:"ConnectedScatter", kind:"block", tier:"pro", unresolved:[]});
})();