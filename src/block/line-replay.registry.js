/* line-replay (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(12572, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "newspaper",
    size: 24,
    node: [
      ["path", { d: "M15 18h-5", key: "95g1m2" }],
      ["path", { d: "M18 14h-8", key: "sponae" }],
      [
        "path",
        {
          d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
          key: "39pd36"
        }
      ],
      [
        "rect",
        { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }
      ]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(29445, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { LineReplay: () => E, default: () => B });
  var n = a(95155), r = a(12115), l = a(18310), i = a(28245), s = a(92171), o = a(80642), d = a(25354), u = a(44825), c = a(12572), m = a(75796), p = a(11012), h = a(36083), _ = a(79267), y = a(92298), x = a(36619), f = a(7770), b = a(51288), v = a(66558);
  function g(e2) {
    let t2 = e2 >>> 0;
    return () => {
      let e3 = t2 = t2 + 1831565813 >>> 0;
      return e3 = Math.imul(e3 ^ e3 >>> 15, 1 | e3), (((e3 ^= e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3)) ^ e3 >>> 14) >>> 0) / 4294967296;
    };
  }
  function j(e2, t2, a2, n2) {
    if (e2 < t2) return 0;
    let r2 = e2 - t2;
    return (1 - Math.exp(-r2 / a2)) * Math.exp(-r2 / n2);
  }
  let k = (function() {
    let e2 = g(20260908), t2 = g(8092026), a2 = [], n2 = 0, r2 = 0;
    for (let l2 = 0; l2 < 1440; l2 += 5) {
      n2 = 0.82 * n2 + (e2() - 0.5) * 0.09, r2 = 0.8 * r2 + (t2() - 0.5) * 0.07;
      let i2 = (function(e3) {
        let t3 = e3 / 60;
        return 150 + 780 * Math.exp(-(((t3 - 12.8) / 4.3) ** 2)) + 120 * Math.exp(-(((t3 - 20.5) / 1.8) ** 2));
      })(l2), s2 = (1.08 * i2 + (1050 * j(l2, 360, 14, 260) + 1500 * j(l2, 450, 45, 720) + 5600 * j(l2, 580, 22, 150) + 2300 * j(l2, 780, 10, 75) + 900 * j(l2, 1200, 18, 150))) * (1 - 0.3 * j(l2, 680, 4, 22)) * (1 + n2);
      a2.push({
        time: l2,
        value: Math.round(s2),
        baseline: Math.round(i2 * (1 + r2))
      });
    }
    return a2;
  })(), M = [
    {
      id: "post",
      time: 360,
      title: "Launch post published",
      detail: "Blog, X and LinkedIn at the same minute",
      kind: "launch"
    },
    {
      id: "hunt",
      time: 450,
      title: "Live on Product Hunt",
      detail: "Maker comment pinned by 7:34 am",
      kind: "press"
    },
    {
      id: "hn",
      time: 580,
      title: "Hacker News front page",
      detail: "Reached third place in 40 minutes",
      kind: "press"
    },
    {
      id: "slow",
      time: 680,
      title: "Pages slowed under load",
      detail: "Load time hit 3.8 s until the cache scaled out",
      kind: "incident"
    },
    {
      id: "news",
      time: 780,
      title: "Newsletter sent",
      detail: "48,200 subscribers, 41% opened in the first hour",
      kind: "email"
    },
    {
      id: "top",
      time: 1200,
      title: "Product of the day",
      detail: "Top of Product Hunt with 1,184 upvotes",
      kind: "milestone"
    }
  ];
  function N(e2) {
    let t2, a2;
    return a2 = Math.floor((t2 = Math.round(e2) % 1440) / 60), `${a2 % 12 == 0 ? 12 : a2 % 12}:${String(t2 % 60).padStart(2, "0")} ${a2 < 12 ? "am" : "pm"}`;
  }
  function w(e2) {
    let t2 = Math.floor(e2 / 60) % 24;
    return `${t2 % 12 == 0 ? 12 : t2 % 12} ${t2 < 12 ? "am" : "pm"}`;
  }
  let T = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  function $(e2) {
    return T.format(Math.round(e2));
  }
  var R = a(74312), A = a.n(R);
  let L = [
    { value: "0.5", label: "0.5\xD7" },
    { value: "1", label: "1\xD7" },
    { value: "2", label: "2\xD7" },
    { value: "4", label: "4\xD7" }
  ], P = { launch: u.A, press: c.A, email: m.A, incident: p.A, milestone: h.A }, S = 52;
  function C(e2, t2) {
    if (t2 <= e2[0]) return 0;
    let a2 = e2.length - 1;
    if (t2 >= e2[a2]) return a2;
    let n2 = 0, r2 = a2;
    for (; r2 - n2 > 1; ) {
      let a3 = n2 + r2 >> 1;
      e2[a3] <= t2 ? n2 = a3 : r2 = a3;
    }
    return n2 + (t2 - e2[n2]) / (e2[r2] - e2[n2] || 1);
  }
  let F = (e2, t2) => {
    let a2 = Math.floor(t2);
    return a2 >= e2.length - 1 ? e2[e2.length - 1] : e2[a2] + (e2[a2 + 1] - e2[a2]) * (t2 - a2);
  };
  function E({
    title: e2 = "Launch day",
    description: t2 = "People on site every five minutes on Tuesday 8 September 2026, Pacific time.",
    data: a2 = k,
    moments: u2 = M,
    seriesLabel: c2 = "Launch day",
    baselineLabel: m2 = "Typical Tuesday",
    valueLabel: p2 = "On site",
    formatTime: h2 = N,
    formatTick: g2 = w,
    formatValue: j2 = $,
    duration: T2 = 16,
    defaultSpeed: R2 = 1,
    defaultPosition: B2 = "end",
    autoPlay: z = false,
    onMomentReached: O,
    className: D
  }) {
    let I = (0, r.useId)(), H = `${I}-title`, Y = `${I}-moments`, q = (0, l.I)() ?? false, K = (0, r.useMemo)(() => {
      let e10 = a2.map((e11) => e11.time), t3 = a2.map((e11) => e11.value), n2 = a2.length > 0 && a2.every((e11) => "number" == typeof e11.baseline) ? a2.map((e11) => e11.baseline) : null, r2 = [];
      t3.forEach((e11, a3) => {
        r2.push(0 === a3 || e11 > t3[r2[a3 - 1]] ? a3 : r2[a3 - 1]);
      });
      let l2 = Math.max(1, ...t3, ...n2 ?? []), i2 = [...u2].sort((e11, t4) => e11.time - t4.time).map((a3) => {
        let n3 = C(e10, a3.time), r3 = F(t3, n3), l3 = "incident" === a3.kind, i3 = l3 ? 20 : 60, s2 = C(e10, a3.time + i3), o2 = r3;
        for (let e11 = Math.ceil(n3); e11 <= Math.floor(s2); e11++)
          o2 = l3 ? Math.min(o2, t3[e11]) : Math.max(o2, t3[e11]);
        let d2 = l3 ? `\u2212${Math.round((r3 - o2) / (r3 || 1) * 100)}% in ${i3} minutes` : `+${j2(o2 - r3)} in the next hour`;
        return { ...a3, index: n3, endIndex: s2, value: r3, effect: d2 };
      });
      return {
        times: e10,
        values: t3,
        baselines: n2,
        peakIdx: r2,
        max: l2,
        marks: i2,
        last: Math.max(0, t3.length - 1)
      };
    }, [a2, u2, j2]), { times: X, values: V, baselines: Q, peakIdx: W, marks: U, last: J } = K, Z = (0, r.useMemo)(() => {
      let e10, t3, a3;
      return e10 = 1.18 * K.max, t3 = 10 ** Math.floor(Math.log10(e10)), a3 = [1, 2, 2.5, 5, 10].find((a4) => a4 * t3 >= e10 / 4) ?? 10, Math.ceil(e10 / (a3 * t3)) * a3 * t3;
    }, [K.max]), G = "end" === B2 ? J : 0, ee = (0, r.useCallback)(
      (e10) => U.reduce((t3, a3) => t3 + +(a3.index <= e10 + 0.01), 0),
      [U]
    ), et = (0, i.d)(G), [ea, en] = (0, r.useState)(false), [er, el] = (0, r.useState)(R2), [ei, es] = (0, r.useState)(() => ee(G)), eo = (0, r.useCallback)(
      (e10) => U.map((t3) => t3.endIndex <= e10 + 0.01 ? "1" : "0").join(""),
      [U]
    ), [ed, eu] = (0, r.useState)(() => eo(G)), [ec, em] = (0, r.useState)(G >= J), [ep, eh] = (0, r.useState)(null), [e_, ey] = (0, r.useState)(""), [ex, ef] = (0, r.useState)(null), eb = (0, r.useRef)(false), ev = (0, r.useRef)(ei), eg = (0, r.useRef)(ed), ej = (0, r.useRef)(ec), ek = (0, r.useRef)(1), eM = (0, r.useRef)(false), eN = (0, r.useRef)(null), ew = (0, r.useRef)(O);
    (0, r.useEffect)(() => {
      ew.current = O;
    }, [O]), (0, r.useEffect)(() => {
      eb.current = ea;
    }, [ea]), (0, r.useEffect)(() => {
      ek.current = J / Math.max(1, T2) * er;
    }, [J, T2, er]);
    let [eT] = (0, r.useState)(() => {
      let e10 = W[Math.floor(G)] ?? 0, t3 = Q ? F(Q, G) : 0;
      return {
        time: h2(F(X, G)),
        value: j2(F(V, G)),
        ratio: Q ? `${(F(V, G) / (t3 || 1)).toFixed(1)}\xD7` : "",
        peak: `${j2(V[e10] ?? 0)} at ${h2(X[e10] ?? 0)}`,
        fraction: J ? G / J : 0
      };
    }), e$ = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      let e10 = e$.current;
      if (!e10) return;
      let t3 = () => {
        let t4 = Math.round(e10.clientWidth), a4 = Math.round(e10.clientHeight);
        ef(
          (e11) => e11 && e11.width === t4 && e11.height === a4 ? e11 : { width: t4, height: a4 }
        );
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e10), () => a3.disconnect();
    }, []);
    let eR = (0, r.useMemo)(() => {
      if (!ex || ex.width < 40) return null;
      let { width: e10, height: t3 } = ex, a3 = e10 < 520, n2 = a3 ? 30 : 40, r2 = t3 - 32, l2 = e10 - n2 - 16, i2 = r2 - 64, s2 = (e11) => 64 + i2 * (1 - e11 / Z), o2 = (e11) => n2 + (J ? e11 / J * l2 : 0), d2 = V.map((e11, t4) => o2(t4)), u3 = V.map((e11) => s2(e11)), c3 = d2.map((e11, t4) => `L${e11.toFixed(1)} ${u3[t4].toFixed(1)}`), m3 = Q ? Q.map(
        (e11, t4) => `${t4 ? "L" : "M"}${d2[t4].toFixed(1)} ${s2(e11).toFixed(1)}`
      ).join("") : null, p3 = [0, 1, 2, 3, 4].map((e11) => ({
        value: Z / 4 * e11,
        y: s2(Z / 4 * e11)
      })), h3 = a3 ? 360 : 180, _2 = X[0] ?? 0, y2 = X[J] ?? 0, x2 = [];
      for (let t4 = Math.ceil(_2 / h3) * h3; t4 <= y2; t4 += h3) {
        let a4 = o2(C(X, t4));
        a4 > n2 + 14 && a4 < e10 - 16 - 14 && x2.push({ time: t4, x: a4 });
      }
      return {
        width: e10,
        height: t3,
        left: n2,
        plotBottom: r2,
        xs: d2,
        ys: u3,
        segments: c3,
        baseline: m3,
        yTicks: p3,
        xTicks: x2,
        yOf: s2
      };
    }, [ex, V, Q, X, J, Z]), eA = (0, r.useRef)(null), eL = (0, r.useRef)(null), eP = (0, r.useRef)(null), eS = (0, r.useRef)(null), eC = (0, r.useRef)(null), eF = (0, r.useRef)(null), eE = (0, r.useRef)(null), eB = (0, r.useRef)([]), ez = (0, r.useRef)(null), eO = (0, r.useRef)(null), eD = (0, r.useRef)(null), eI = (0, r.useRef)(null), eH = (0, r.useRef)(null), eY = (0, r.useRef)(null), eq = (0, r.useRef)(null), eK = (0, r.useRef)(null), eX = (0, r.useRef)({}), eV = (0, r.useCallback)((e10, t3, a3) => {
      t3 && eX.current[e10] !== a3 && (eX.current[e10] = a3, t3.textContent = a3);
    }, []), eQ = (0, r.useCallback)(
      (e10) => {
        let t3 = eK.current;
        if (!t3) return;
        let a3 = F(X, e10);
        t3.setAttribute("aria-valuenow", String(Math.round(a3))), t3.setAttribute(
          "aria-valuetext",
          `${h2(a3)}, ${j2(F(V, e10))} ${p2.toLowerCase()}`
        );
      },
      [X, V, h2, j2, p2]
    ), eW = (0, r.useCallback)(
      (e10) => {
        let t3 = Math.min(J, Math.max(0, e10)), a3 = Math.floor(t3), n2 = F(V, t3), r2 = F(X, t3);
        eV("time", ez.current, h2(r2)), eV("value", eO.current, j2(n2)), Q && eV(
          "ratio",
          eD.current,
          `${(n2 / (F(Q, t3) || 1)).toFixed(1)}\xD7`
        );
        let l2 = W[a3] ?? 0, i2 = n2 > V[l2];
        eV("peak", eI.current, `${j2(i2 ? n2 : V[l2])} at ${h2(i2 ? r2 : X[l2])}`);
        let s2 = J ? t3 / J : 0;
        eH.current && (eH.current.style.transform = `scaleX(${s2})`);
        let o2 = eq.current?.clientWidth ?? 0;
        eY.current && (eY.current.style.transform = `translateX(${(s2 * o2).toFixed(2)}px)`), eb.current || eQ(t3);
        let d2 = ee(t3);
        if (d2 !== ev.current) {
          let e11 = d2 > ev.current;
          if (ev.current = d2, es(d2), e11 && eb.current) {
            let e12 = U[d2 - 1];
            ey(`${h2(e12.time)}. ${e12.title}.`), ew.current?.(e12);
          }
        }
        let u3 = eo(t3);
        u3 !== eg.current && (eg.current = u3, eu(u3));
        let c3 = t3 >= J - 1e-6;
        if (c3 !== ej.current && (ej.current = c3, em(c3)), !eR) return;
        let {
          xs: m3,
          ys: p3,
          segments: _2,
          left: y2,
          plotBottom: x2,
          width: f2
        } = eR, b2 = m3[a3] + (a3 < J ? (m3[a3 + 1] - m3[a3]) * (t3 - a3) : 0), v2 = eR.yOf(n2), g3 = `M${m3[0].toFixed(1)} ${p3[0].toFixed(1)}${_2.slice(1, a3 + 1).join("")}${t3 > a3 ? `L${b2.toFixed(1)} ${v2.toFixed(1)}` : ""}`;
        eA.current?.setAttribute("d", g3), eL.current?.setAttribute(
          "d",
          `${g3}L${b2.toFixed(1)} ${x2}L${y2} ${x2}Z`
        ), eP.current?.setAttribute(
          "transform",
          `translate(${b2.toFixed(2)} 0)`
        );
        let k2 = eP.current?.lastElementChild;
        k2?.setAttribute("cy", v2.toFixed(2)), eS.current && (eS.current.style.transform = `translate(${b2.toFixed(2)}px, ${v2.toFixed(2)}px)`, eS.current.toggleAttribute("data-flip", b2 > f2 - 96)), eV("tip", eC.current, j2(n2));
        let M2 = Math.min(f2 - 36, Math.max(y2 + 20, b2));
        eF.current && (eF.current.style.transform = `translate(${M2.toFixed(2)}px, ${x2 + 16}px)`), eV("clock", eE.current, h2(r2)), eR.xTicks.forEach((e11, t4) => {
          let a4 = eB.current[t4];
          a4 && (a4.dataset.hidden = String(58 > Math.abs(e11.x - M2)));
        });
      },
      [eR, J, V, X, Q, W, U, ee, eo, h2, j2, eQ, eV]
    );
    (0, r.useLayoutEffect)(
      () => (eX.current = {}, eW(et.get()), et.on("change", eW)),
      [et, eW]
    ), (0, r.useEffect)(() => {
      let e10 = eq.current;
      if (!e10 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => eW(et.get()));
      return t3.observe(e10), () => t3.disconnect();
    }, [eW, et]);
    let eU = (0, r.useCallback)(
      (e10, t3) => {
        eN.current?.stop(), eN.current = null;
        let a3 = Math.min(J, Math.max(0, e10));
        if (!t3 || q) return void et.set(a3);
        let n2 = (0, s.i)(et, a3, { ...f.T.spring.smooth, restDelta: 1e-3 });
        eN.current = n2, n2.then(() => {
          eN.current === n2 && (eN.current = null);
        });
      },
      [J, q, et]
    );
    (0, r.useEffect)(() => {
      if (!ea) return void eQ(et.get());
      let e10 = 0, t3 = performance.now(), a3 = (n2) => {
        let r2 = Math.min(0.1, (n2 - t3) / 1e3);
        if (t3 = n2, !eM.current && !eN.current) {
          let e11 = et.get() + r2 * ek.current;
          if (e11 >= J) {
            et.set(J), en(false);
            let e12 = W[J] ?? 0;
            ey(`Replay finished. Peak ${j2(V[e12])} at ${h2(X[e12])}.`);
            return;
          }
          et.set(e11);
        }
        e10 = requestAnimationFrame(a3);
      };
      return e10 = requestAnimationFrame(a3), () => cancelAnimationFrame(e10);
    }, [ea, J, et, W, V, X, h2, j2, eQ]);
    let eJ = (0, r.useCallback)(() => {
      (ej.current || et.get() >= J - 1e-6) && eU(0, true), ey("Playing"), en(true);
    }, [J, eU, et]), eZ = () => {
      ea ? (en(false), ey(`Paused at ${h2(F(X, et.get()))}`)) : eJ();
    }, eG = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      let e10 = eG.current;
      if (!z || q || !e10 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(
        (e11) => {
          e11.some((e12) => e12.isIntersecting) && (t3.disconnect(), eU(0, false), en(true));
        },
        { threshold: 0.4 }
      );
      return t3.observe(e10), () => t3.disconnect();
    }, [z, q, eU]);
    let e0 = (e10) => {
      if ("track" === e10.currentTarget.dataset.area) {
        let t4 = (eq.current ?? e10.currentTarget).getBoundingClientRect();
        return (e10.clientX - t4.left) / (t4.width || 1) * J;
      }
      if (!eR) return et.get();
      let t3 = e10.currentTarget.getBoundingClientRect(), a3 = eR.width - eR.left - 16;
      return (e10.clientX - t3.left - eR.left) / (a3 || 1) * J;
    }, e1 = (e10) => {
      0 === e10.button && (eN.current?.stop(), eN.current = null, eM.current = true, e10.currentTarget.setPointerCapture(e10.pointerId), et.set(Math.min(J, Math.max(0, e0(e10)))), "track" === e10.currentTarget.dataset.area && eK.current?.focus({ preventScroll: true }));
    }, e22 = (e10) => {
      eM.current && et.set(Math.min(J, Math.max(0, e0(e10))));
    }, e5 = (e10) => {
      eM.current && (eM.current = false, e10.currentTarget.hasPointerCapture(e10.pointerId) && e10.currentTarget.releasePointerCapture(e10.pointerId), eQ(et.get()));
    }, e4 = (0, r.useMemo)(() => {
      let e10 = (X[J] ?? 0) - (X[0] ?? 0);
      return e10 > 0 ? J / e10 * 60 : 12;
    }, [X, J]), e8 = ei > 0 ? U[ei - 1] : null, e6 = (ep ? U.find((e10, t3) => e10.id === ep && t3 < ei) ?? null : null) ?? e8, e7 = X[0] ?? 0, e9 = X[J] ?? 0, e3 = ea ? "Pause" : ec ? "Replay" : "Play", te = ea ? _.A : ec ? y.A : x.A, tt = null;
    if (e6 && eR) {
      let e10 = Math.floor(e6.index), t3 = eR.xs[e10] + (e10 < J ? (eR.xs[e10 + 1] - eR.xs[e10]) * (e6.index - e10) : 0);
      tt = {
        x: t3,
        y: eR.yOf(e6.value),
        align: t3 < eR.left + 110 ? "start" : t3 > eR.width - 120 ? "end" : "center"
      };
    }
    return (0, n.jsxs)("section", {
      ref: eG,
      className: [A().root, D].filter(Boolean).join(" "),
      "aria-labelledby": H,
      children: [
        (0, n.jsxs)("div", {
          className: A().surface,
          children: [
            (0, n.jsxs)("div", {
              className: A().main,
              children: [
                (0, n.jsxs)("header", {
                  className: A().header,
                  children: [
                    (0, n.jsxs)("div", {
                      className: A().heading,
                      children: [
                        (0, n.jsx)("h2", { id: H, children: e2 }),
                        t2 ? (0, n.jsx)("p", { children: t2 }) : null
                      ]
                    }),
                    (0, n.jsxs)("ul", {
                      className: A().legend,
                      "aria-label": "Legend",
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)("svg", {
                              className: A().swatch,
                              viewBox: "0 0 20 8",
                              "aria-hidden": "true",
                              children: (0, n.jsx)("line", {
                                className: A().swLine,
                                x1: "1",
                                y1: "4",
                                x2: "19",
                                y2: "4"
                              })
                            }),
                            c2
                          ]
                        }),
                        Q ? (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)("svg", {
                              className: A().swatch,
                              viewBox: "0 0 20 8",
                              "aria-hidden": "true",
                              children: (0, n.jsx)("line", {
                                className: A().swBase,
                                x1: "1",
                                y1: "4",
                                x2: "19",
                                y2: "4"
                              })
                            }),
                            m2
                          ]
                        }) : null
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)("dl", {
                  className: A().readout,
                  children: [
                    (0, n.jsxs)("div", {
                      className: A().readTime,
                      children: [
                        (0, n.jsx)("dt", { children: "Time" }),
                        (0, n.jsx)("dd", {
                          children: (0, n.jsx)("span", {
                            ref: ez,
                            children: eT.time
                          })
                        })
                      ]
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("dt", { children: p2 }),
                        (0, n.jsx)("dd", {
                          children: (0, n.jsx)("span", {
                            ref: eO,
                            className: A().readStrong,
                            children: eT.value
                          })
                        })
                      ]
                    }),
                    Q ? (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsxs)("dt", {
                          children: [
                            "Versus ",
                            m2.charAt(0).toLowerCase() + m2.slice(1)
                          ]
                        }),
                        (0, n.jsx)("dd", {
                          children: (0, n.jsx)("span", {
                            ref: eD,
                            children: eT.ratio
                          })
                        })
                      ]
                    }) : null,
                    (0, n.jsxs)("div", {
                      className: A().readPeak,
                      children: [
                        (0, n.jsx)("dt", { children: "Peak so far" }),
                        (0, n.jsx)("dd", {
                          children: (0, n.jsx)("span", {
                            ref: eI,
                            children: eT.peak
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  ref: e$,
                  className: A().stage,
                  "data-ready": eR ? "" : void 0,
                  "data-area": "chart",
                  onPointerDown: e1,
                  onPointerMove: e22,
                  onPointerUp: e5,
                  onPointerCancel: e5,
                  "aria-hidden": "true",
                  children: [
                    eR ? (0, n.jsxs)("svg", {
                      className: A().plot,
                      width: eR.width,
                      height: eR.height,
                      viewBox: `0 0 ${eR.width} ${eR.height}`,
                      children: [
                        eR.yTicks.map((e10) => {
                          let t3;
                          return (0, n.jsxs)(
                            "g",
                            {
                              children: [
                                (0, n.jsx)("line", {
                                  className: 0 === e10.value ? A().axis : A().grid,
                                  x1: eR.left,
                                  x2: eR.width - 16,
                                  y1: Math.round(e10.y) + 0.5,
                                  y2: Math.round(e10.y) + 0.5
                                }),
                                (0, n.jsx)("text", {
                                  className: A().yLabel,
                                  x: eR.left - 8,
                                  y: e10.y,
                                  dy: "0.32em",
                                  children: 0 === (t3 = e10.value) ? "0" : t3 >= 1e3 ? `${t3 / 1e3}k` : String(t3)
                                })
                              ]
                            },
                            e10.value
                          );
                        }),
                        eR.xTicks.map(
                          (e10, t3) => (0, n.jsx)(
                            "text",
                            {
                              ref: (e11) => {
                                eB.current[t3] = e11;
                              },
                              className: A().xLabel,
                              x: e10.x,
                              y: eR.plotBottom + 16,
                              dy: "0.32em",
                              children: g2(e10.time)
                            },
                            e10.time
                          )
                        ),
                        eR.baseline ? (0, n.jsx)("path", {
                          className: A().baseline,
                          d: eR.baseline
                        }) : null,
                        (0, n.jsx)("path", {
                          ref: eL,
                          className: A().area
                        }),
                        U.map((e10, t3) => {
                          let a3 = Math.floor(e10.index), r2 = eR.xs[a3] + (a3 < J ? (eR.xs[a3 + 1] - eR.xs[a3]) * (e10.index - a3) : 0), l2 = eR.yOf(e10.value);
                          return (0, n.jsx)(
                            "line",
                            {
                              className: A().stem,
                              x1: r2,
                              x2: r2,
                              y1: l2 + 6,
                              y2: eR.plotBottom,
                              "data-passed": t3 < ei ? "" : void 0
                            },
                            `${e10.id}-stem`
                          );
                        }),
                        (0, n.jsx)(o.N, {
                          initial: false,
                          children: e6 && tt ? (0, n.jsx)(
                            d.PY1.line,
                            {
                              className: A().connector,
                              x1: tt.x,
                              x2: tt.x,
                              y1: S,
                              y2: Math.max(S, tt.y - 7),
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: {
                                opacity: 0,
                                transition: {
                                  duration: f.T.duration.exit
                                }
                              },
                              transition: {
                                duration: q ? f.T.duration.instant : f.T.duration.standard
                              }
                            },
                            e6.id
                          ) : null
                        }),
                        (0, n.jsx)("path", {
                          ref: eA,
                          className: A().line
                        }),
                        U.map((e10, t3) => {
                          let a3 = Math.floor(e10.index), r2 = eR.xs[a3] + (a3 < J ? (eR.xs[a3 + 1] - eR.xs[a3]) * (e10.index - a3) : 0), l2 = eR.yOf(e10.value);
                          return (0, n.jsx)(
                            "circle",
                            {
                              className: A().mark,
                              cx: r2,
                              cy: l2,
                              r: 4,
                              "data-passed": t3 < ei ? "" : void 0,
                              "data-shown": e6?.id === e10.id ? "" : void 0,
                              "data-incident": "incident" === e10.kind ? "" : void 0
                            },
                            e10.id
                          );
                        }),
                        (0, n.jsxs)("g", {
                          ref: eP,
                          className: A().head,
                          children: [
                            (0, n.jsx)("line", {
                              className: A().playhead,
                              x1: 0,
                              x2: 0,
                              y1: 64,
                              y2: eR.plotBottom
                            }),
                            (0, n.jsx)("circle", {
                              className: A().tipDot,
                              cx: 0,
                              cy: 0,
                              r: 4.5
                            })
                          ]
                        })
                      ]
                    }) : null,
                    (0, n.jsx)("div", {
                      ref: eS,
                      className: A().anchor,
                      children: (0, n.jsx)("span", {
                        className: A().tip,
                        children: (0, n.jsx)("span", {
                          ref: eC,
                          className: A().num,
                          children: eT.value
                        })
                      })
                    }),
                    (0, n.jsx)("div", {
                      ref: eF,
                      className: A().anchor,
                      children: (0, n.jsx)("span", {
                        className: A().clock,
                        children: (0, n.jsx)("span", {
                          ref: eE,
                          className: A().num,
                          children: eT.time
                        })
                      })
                    }),
                    (0, n.jsx)(o.N, {
                      initial: false,
                      children: e6 && tt ? (0, n.jsx)(
                        "div",
                        {
                          className: A().calloutAnchor,
                          style: { left: tt.x, top: S },
                          "data-align": tt.align,
                          children: (0, n.jsxs)(d.PY1.div, {
                            className: A().callout,
                            "data-incident": "incident" === e6.kind ? "" : void 0,
                            initial: q ? { opacity: 0 } : { opacity: 0, y: 6 },
                            animate: { opacity: 1, y: 0 },
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: f.T.duration.exit,
                                ease: [...f.T.ease.exit]
                              }
                            },
                            transition: q ? { duration: f.T.duration.instant } : f.T.spring.smooth,
                            children: [
                              (0, n.jsx)("span", {
                                className: A().calloutTitle,
                                children: e6.title
                              }),
                              (0, n.jsx)("span", {
                                className: A().calloutTime,
                                children: h2(e6.time)
                              })
                            ]
                          })
                        },
                        e6.id
                      ) : null
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: A().transport,
                  children: [
                    (0, n.jsxs)(b.$, {
                      variant: "primary",
                      className: A().playButton,
                      onClick: eZ,
                      "aria-label": ea ? "Pause replay" : ec ? "Replay from the start" : "Play replay",
                      children: [
                        (0, n.jsx)(te, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        (0, n.jsx)("span", {
                          className: A().playLabel,
                          children: e3
                        })
                      ]
                    }),
                    (0, n.jsx)("div", {
                      className: A().scrub,
                      "data-area": "track",
                      onPointerDown: e1,
                      onPointerMove: e22,
                      onPointerUp: e5,
                      onPointerCancel: e5,
                      children: (0, n.jsx)("div", {
                        ref: eK,
                        className: A().scrubFocus,
                        role: "slider",
                        tabIndex: 0,
                        "aria-label": "Replay position",
                        "aria-valuemin": Math.round(e7),
                        "aria-valuemax": Math.round(e9),
                        "aria-valuenow": Math.round(F(X, G)),
                        "aria-valuetext": `${eT.time}, ${eT.value} ${p2.toLowerCase()}`,
                        "aria-describedby": Y,
                        onKeyDown: (e10) => {
                          let t3 = et.get(), a3 = null;
                          switch (e10.key) {
                            case "ArrowRight":
                            case "ArrowUp":
                              a3 = Math.floor(t3 + 1e-6) + (e10.shiftKey ? e4 : 1);
                              break;
                            case "ArrowLeft":
                            case "ArrowDown":
                              a3 = Math.ceil(t3 - 1e-6) - (e10.shiftKey ? e4 : 1);
                              break;
                            case "PageUp":
                              a3 = t3 + e4;
                              break;
                            case "PageDown":
                              a3 = t3 - e4;
                              break;
                            case "Home":
                              a3 = 0;
                              break;
                            case "End":
                              a3 = J;
                              break;
                            case " ":
                            case "Enter":
                            case "k":
                            case "K":
                              e10.preventDefault(), eZ();
                              return;
                            default:
                              return;
                          }
                          e10.preventDefault(), eU(a3, false), eQ(Math.min(J, Math.max(0, a3)));
                        },
                        children: (0, n.jsxs)("div", {
                          ref: eq,
                          className: A().track,
                          children: [
                            (0, n.jsx)("div", {
                              ref: eH,
                              className: A().fill,
                              style: { transform: `scaleX(${eT.fraction})` }
                            }),
                            U.map(
                              (e10, t3) => (0, n.jsx)(
                                "span",
                                {
                                  className: A().tick,
                                  style: {
                                    left: `${(J ? e10.index / J : 0) * 100}%`
                                  },
                                  "data-passed": t3 < ei ? "" : void 0,
                                  "data-incident": "incident" === e10.kind ? "" : void 0
                                },
                                e10.id
                              )
                            ),
                            (0, n.jsx)("div", {
                              ref: eY,
                              className: A().thumbRail,
                              children: (0, n.jsx)("span", {
                                className: A().thumb
                              })
                            })
                          ]
                        })
                      })
                    }),
                    (0, n.jsx)(v.A, {
                      className: A().speed,
                      label: "Playback speed",
                      options: L,
                      value: String(er),
                      onValueChange: (e10) => el(Number(e10))
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("aside", {
              className: A().aside,
              "aria-labelledby": Y,
              children: [
                (0, n.jsx)("h3", {
                  id: Y,
                  className: A().asideTitle,
                  children: "Key moments"
                }),
                (0, n.jsx)("ol", {
                  className: A().moments,
                  children: U.map((e10, t3) => {
                    let a3 = P[e10.kind ?? "launch"], r2 = t3 < ei ? t3 === ei - 1 ? "current" : "passed" : "upcoming";
                    return (0, n.jsx)(
                      "li",
                      {
                        children: (0, n.jsxs)("button", {
                          type: "button",
                          className: A().moment,
                          "data-state": r2,
                          "data-incident": "incident" === e10.kind ? "" : void 0,
                          "aria-current": "current" === r2 ? "true" : void 0,
                          onClick: () => {
                            eU(e10.index, true), ey(`Moved to ${h2(e10.time)}, ${e10.title}`);
                          },
                          onPointerEnter: () => eh(e10.id),
                          onPointerLeave: () => eh((t4) => t4 === e10.id ? null : t4),
                          onFocus: () => eh(e10.id),
                          onBlur: () => eh((t4) => t4 === e10.id ? null : t4),
                          children: [
                            (0, n.jsx)(a3, {
                              className: A().momentIcon,
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            (0, n.jsxs)("span", {
                              className: A().momentBody,
                              children: [
                                (0, n.jsxs)("span", {
                                  className: A().momentTop,
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: A().momentTitle,
                                      children: e10.title
                                    }),
                                    (0, n.jsx)("span", {
                                      className: A().momentTime,
                                      children: h2(e10.time)
                                    })
                                  ]
                                }),
                                e10.detail ? (0, n.jsx)("span", {
                                  className: A().momentDetail,
                                  children: e10.detail
                                }) : null,
                                (0, n.jsx)("span", {
                                  className: A().momentEffect,
                                  "data-settled": "1" === ed[t3] ? "" : void 0,
                                  "aria-hidden": "1" !== ed[t3] || void 0,
                                  children: e10.effect
                                })
                              ]
                            })
                          ]
                        })
                      },
                      e10.id
                    );
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: A().srOnly,
          "aria-live": "polite",
          children: e_
        })
      ]
    });
  }
  let B = E;
}

__m(__module,__exports,__require);
});
A.reg(36083, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var n = r(51811);
  let o = {
    name: "trophy",
    size: 24,
    node: [
      [
        "path",
        { d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2", key: "pwuv1l" }
      ],
      [
        "path",
        { d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2", key: "1y54w1" }
      ],
      [
        "path",
        {
          d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
          key: "e30mpu"
        }
      ],
      ["path", { d: "M4 22h16", key: "57wxv0" }],
      [
        "path",
        {
          d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
          key: "1mhfuq"
        }
      ],
      [
        "path",
        {
          d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
          key: "i0yafy"
        }
      ]
    ]
  };
  o.node;
  let a = (0, n.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(44825, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "rocket",
    size: 24,
    node: [
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
          key: "u4xsad"
        }
      ],
      [
        "path",
        {
          d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
          key: "676m9"
        }
      ],
      [
        "path",
        { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }
      ]
    ]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(74312, ".root{container:replay/inline-size;position:relative;width:100%;min-width:0;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n@container replay (max-width: 559px){.root{border-radius:var(--radius-panel)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.num{font-variant-numeric:tabular-nums}\n.surface{display:grid;grid-template-columns:minmax(0,1fr) 300px;min-width:0}\n.surface>*{min-width:0}\n@container replay (max-width: 999px){.surface{grid-template-columns:minmax(0,1fr)}\n.main{display:grid;align-content:start;gap:20px;padding:24px}\n.main>*{min-width:0}\n.main{gap:16px;padding:16px}\n.aside{display:grid;align-content:start;gap:8px;border-left:1px solid var(--border-subtle);padding:24px 16px 16px}\n.aside{border-left:0;border-top:1px solid var(--border-subtle);padding:20px 16px 16px}\n.aside{padding:16px 8px 8px}\n.header{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:8px 24px}\n.heading{min-width:0;flex:1 1 280px}\n.heading h2{margin:0;font-size:var(--text-xl);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);text-wrap:balance}\n.heading p{margin:4px 0 0;color:var(--text-secondary);text-wrap:pretty}\n.legend{display:flex;flex-wrap:wrap;gap:4px 16px;margin:0;padding:4px 0 0;list-style:none;color:var(--text-secondary);font-size:var(--text-xs)}\n.legend li{display:inline-flex;align-items:center;gap:8px;min-height:24px}\n.swatch{width:20px;height:8px;flex:none;overflow:visible}\n.swLine{stroke:var(--series-1);stroke-width:2;stroke-linecap:round}\n.swBase{stroke:var(--text-muted);stroke-width:1.5;stroke-dasharray:3 3}\n.readout{display:flex;flex-wrap:wrap;gap:12px 32px;margin:0}\n.readout>div{display:grid;gap:2px;min-width:0}\n.readout dt{color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap}\n.readout dd{margin:0;font-size:var(--text-base);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}\n.readout dd span{display:inline-block;min-width:5.5ch}\n@container replay (max-width: 559px){.readout{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}\n.readout dt{white-space:normal}\n.readout>div{align-content:end}\n.readout dd span{min-width:0}\n.readTime dd span{min-width:7.5ch}\n.readPeak dd span{min-width:15ch}\n.readPeak{grid-column:1/-1}\n.readStrong{color:var(--series-1)}\n.stage{position:relative;height:380px;margin-inline:-4px;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:ew-resize}\n@container replay (max-width: 559px){.stage{height:300px;margin-inline:-8px 0}\n.stage[data-ready] .head{opacity:1}\n.stage[data-ready] .anchor{opacity:1}\n.plot{position:absolute;top:0;left:0;display:block;overflow:visible}\n.grid{stroke:var(--border-subtle);stroke-width:1;shape-rendering:crispEdges}\n.axis{stroke:var(--border);stroke-width:1;shape-rendering:crispEdges}\n.xLabel,.yLabel{fill:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.yLabel{text-anchor:end}\n.xLabel{text-anchor:middle;transition:opacity var(--duration-fast) var(--ease-standard)}\n.xLabel[data-hidden=true]{opacity:0}\n@media (prefers-reduced-motion:reduce){.anchor,.head,.mark,.momentEffect,.momentIcon,.momentTitle,.moment,.scrubFocus,.stem,.thumb,.tick,.xLabel{transition:none}\n.baseline{fill:none;stroke:var(--text-muted);stroke-width:1.25;stroke-dasharray:3 3;stroke-linejoin:round;opacity:.8}\n.area{fill:color-mix(in oklab,var(--series-1) 9%,transparent)}\n.line{fill:none;stroke:var(--series-1);stroke-width:2;stroke-linejoin:round;stroke-linecap:round}\n.stem{stroke:var(--border-strong);stroke-width:1;stroke-dasharray:2 3;opacity:0;transition:opacity var(--duration-standard) var(--ease-standard)}\n.stem[data-passed]{opacity:.8}\n.mark{fill:var(--surface);stroke:var(--foreground);stroke-width:1.5;opacity:0;transform:scale(.4);transform-box:fill-box;transform-origin:center;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring),fill var(--duration-fast) var(--ease-standard)}\n.mark[data-passed]{opacity:1;transform:none}\n.mark[data-incident]{stroke:var(--warning)}\n.mark[data-shown]{fill:var(--foreground)}\n.mark[data-shown][data-incident]{fill:var(--warning)}\n.connector{stroke:var(--border-strong);stroke-width:1;shape-rendering:crispEdges}\n.head{pointer-events:none;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.playhead{stroke:var(--border-strong);stroke-width:1;shape-rendering:crispEdges}\n.tipDot{fill:var(--series-1);stroke:var(--surface);stroke-width:2}\n.anchor{position:absolute;top:0;left:0;z-index:2;width:0;height:0;pointer-events:none;will-change:transform;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.anchor[data-flip] .tip{left:auto;right:0;transform:translate(-12px,-50%)}\n.clock,.tip{position:absolute;top:0;left:0;display:inline-flex;align-items:center;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);font-size:var(--text-xs);font-weight:500;line-height:1.4;white-space:nowrap}\n.tip{padding:2px 8px;transform:translate(12px,-50%);color:var(--foreground)}\n.clock{padding:1px 8px;transform:translate(-50%,-50%);border-color:var(--border-strong);color:var(--foreground)}\n.calloutAnchor{position:absolute;z-index:3;width:0;height:0;pointer-events:none}\n.calloutAnchor[data-align=start] .callout{translate:-16px 0}\n.calloutAnchor[data-align=end] .callout{left:auto;right:0;translate:16px 0}\n.callout{position:absolute;bottom:0;left:0;display:grid;gap:0;width:max-content;max-width:220px;border:1px solid var(--border);border-radius:12px;padding:6px 10px;background:var(--surface);box-shadow:var(--shadow-resting);translate:-50% 0;white-space:nowrap}\n.callout[data-incident] .calloutTime{color:var(--warning)}\n.calloutTitle{overflow:hidden;font-size:var(--text-xs);font-weight:500;text-overflow:ellipsis}\n.calloutTime{color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.transport{display:flex;align-items:center;gap:16px;min-width:0}\n@container replay (max-width: 559px){.transport{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px 12px}\n.playButton{flex:none;min-width:108px}\n@container replay (max-width: 339px){.playButton{min-width:var(--control-height-md);padding-inline:0}\n.speed{flex:none}\n.speed{justify-self:end}\n.scrub{position:relative;flex:1 1 auto;min-width:0;height:44px;display:flex;align-items:center;touch-action:none;cursor:pointer}\n.scrub:active .thumb{transform:scale(1.12)}\n.scrub{grid-column:1/-1;grid-row:1}\n.scrubFocus{position:relative;width:100%;height:36px;display:flex;align-items:center;border-radius:var(--radius-control);padding-inline:10px;transition:background-color var(--duration-fast) var(--ease-standard)}\n.scrubFocus:focus-visible{background:var(--surface-muted)}\n.track{position:relative;width:100%;height:4px;border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--series-1);transform-origin:left center;will-change:transform}\n.tick{position:absolute;top:50%;width:2px;height:12px;margin-left:-1px;border-radius:1px;background:var(--border-strong);transform:translateY(-50%);transition:background-color var(--duration-fast) var(--ease-standard)}\n.tick[data-passed]{background:var(--foreground)}\n.tick[data-incident]{background:color-mix(in oklab,var(--warning) 55%,var(--border-strong))}\n.tick[data-passed][data-incident]{background:var(--warning)}\n.thumbRail{position:absolute;top:50%;left:0;width:0;height:0;will-change:transform}\n.thumb{position:absolute;top:-8px;left:-8px;width:16px;height:16px;border-radius:50%;background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);transition:transform var(--duration-spring) var(--ease-spring)}\n.playLabel{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.asideTitle{margin:0;padding:0 8px 4px;font-size:var(--text-sm);font-weight:500}\n.moments{display:grid;gap:2px;margin:0;padding:0;list-style:none}\n@container replay (min-width: 560px) and (max-width: 999px){.moments{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:8px}\n.moment{display:grid;grid-template-columns:16px minmax(0,1fr);gap:12px;align-items:start;width:100%;min-height:44px;border:0;border-radius:calc(var(--radius-surface) - 16px);padding:10px 12px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.moment:hover{background:var(--surface-muted)}\n.moment:active,.moment:focus-visible{background:var(--surface-muted)}\n.moment[data-state=current]{background:color-mix(in oklab,var(--series-1) 8%,transparent)}\n.moment[data-state=current] .momentIcon{color:var(--series-1)}\n.moment[data-incident] .momentIcon{color:var(--warning)}\n.moment[data-state=upcoming] .momentIcon{color:var(--text-muted)}\n.moment[data-incident] .momentEffect{color:var(--warning)}\n.moment[data-state=upcoming] .momentTitle{color:var(--text-secondary)}\n.moment[data-state=upcoming] .momentDetail,.moment[data-state=upcoming] .momentTime{color:var(--text-muted)}\n.momentIcon{margin-top:2px;color:var(--text-secondary);transition:color var(--duration-fast) var(--ease-standard)}\n.momentBody{display:grid;gap:2px;min-width:0}\n.momentTop{display:flex;align-items:baseline;justify-content:space-between;gap:12px;min-width:0}\n.momentTitle{min-width:0;font-weight:500;transition:color var(--duration-fast) var(--ease-standard)}\n.momentTime{flex:none;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.momentDetail{color:var(--text-secondary);font-size:var(--text-xs);text-wrap:pretty}\n.momentEffect{color:var(--foreground);font-size:var(--text-xs);font-variant-numeric:tabular-nums;transition:opacity var(--duration-standard) var(--ease-standard)}\n.momentEffect:not([data-settled]){opacity:0}", {"root":"root","srOnly":"srOnly","num":"num","surface":"surface","main":"main","aside":"aside","header":"header","heading":"heading","legend":"legend","swatch":"swatch","swLine":"swLine","swBase":"swBase","readout":"readout","readTime":"readTime","readPeak":"readPeak","readStrong":"readStrong","stage":"stage","head":"head","anchor":"anchor","plot":"plot","grid":"grid","axis":"axis","xLabel":"xLabel","yLabel":"yLabel","mark":"mark","momentEffect":"momentEffect","momentIcon":"momentIcon","momentTitle":"momentTitle","moment":"moment","scrubFocus":"scrubFocus","stem":"stem","thumb":"thumb","tick":"tick","baseline":"baseline","area":"area","line":"line","connector":"connector","playhead":"playhead","tipDot":"tipDot","tip":"tip","clock":"clock","calloutAnchor":"calloutAnchor","callout":"callout","calloutTime":"calloutTime","calloutTitle":"calloutTitle","transport":"transport","playButton":"playButton","speed":"speed","scrub":"scrub","track":"track","fill":"fill","thumbRail":"thumbRail","playLabel":"playLabel","asideTitle":"asideTitle","moments":"moments","momentDetail":"momentDetail","momentTime":"momentTime","momentBody":"momentBody","momentTop":"momentTop"});
A.reg(75796, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "mail",
    size: 24,
    node: [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("line-replay", [74312]);
A.item("line-replay", {entry:29445, export:"LineReplay", kind:"block", tier:"pro", unresolved:[]});
})();