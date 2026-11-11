function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { MixtureOfExpertsDemo: () => Z, default: () => ee });
  var r = a(95155), s = a(12115), n = a(25354), i = a(18310), l = a(80642), o = a(11012), d = a(64962), u = a(90467), c = a(92298), p = a(36619), x = a(79267), m = a(66558), h = a(52898), f = a(36690), _ = a(7770), y = a(92782), g = a(47421), v = a(71485), k = a(88359), j = a(45739), b = a(49804), N = a(52427), w = a(31396);
  let $ = (e2) => (0, r.jsx)(e2, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), M = [
    {
      name: "Code",
      handles: "Commands, identifiers and keywords",
      icon: $(y.A)
    },
    { name: "Numbers", handles: "Digits, amounts and counts", icon: $(g.A) },
    {
      name: "Punctuation",
      handles: "Commas, periods and brackets",
      icon: $(v.A)
    },
    { name: "Names", handles: "People, products and places", icon: $(k.A) },
    {
      name: "Grammar",
      handles: "Short words such as on, then and the",
      icon: $(j.A)
    },
    { name: "Verbs", handles: "Actions and tense", icon: $(b.A) },
    { name: "Dates", handles: "Months, days and times", icon: $(N.A) },
    {
      name: "Symbols",
      handles: "Currency, units and math signs",
      icon: $(w.A)
    }
  ], A = { total: 671, shared: 5, perExpert: 16 };
  function S(e2) {
    let t2 = 2166136261;
    for (let a2 = 0; a2 < e2.length; a2++)
      t2 ^= e2.charCodeAt(a2), t2 = Math.imul(t2, 16777619);
    return t2 >>> 0;
  }
  function T(e2) {
    let t2 = e2.map((e3) => Number.isFinite(e3) && e3 > 0 ? e3 : 0), a2 = t2.reduce((e3, t3) => e3 + t3, 0);
    return a2 > 0 ? t2.map((e3) => e3 / a2) : t2.map(() => 1 / Math.max(1, t2.length));
  }
  function E(e2, t2, a2, r2, s2, n2) {
    let i2 = Math.max(0, 1 - s2 - n2), l2 = Array.from({ length: t2 }, (e3, t3) => t3).filter(
      (e3) => e3 !== a2 && e3 !== r2
    ), o2 = l2.map((t3) => 0.45 + S(`${e2}:${t3}`) % 1e3 / 1e3), d2 = o2.reduce((e3, t3) => e3 + t3, 0) || 1, u2 = Array(t2).fill(0);
    return u2[a2] = s2, r2 !== a2 && (u2[r2] = n2), l2.forEach((e3, t3) => {
      u2[e3] = Math.min(0.8 * n2, o2[t3] / d2 * i2);
    }), T(u2);
  }
  let L = [
    ["Maya", 3, 5, 0.46, 0.21],
    [" paid", 5, 7, 0.42, 0.2],
    [" $", 7, 1, 0.51, 0.24],
    ["1", 1, 7, 0.48, 0.19],
    [",", 2, 1, 0.44, 0.22],
    ["240", 1, 2, 0.53, 0.17],
    [" on", 4, 6, 0.39, 0.23],
    [" Oct", 6, 3, 0.47, 0.2],
    [" 21", 6, 1, 0.41, 0.29],
    [",", 2, 4, 0.5, 0.18],
    [" then", 4, 5, 0.43, 0.21],
    [" ran", 5, 0, 0.4, 0.24],
    [" npm", 0, 3, 0.55, 0.18],
    [" test", 0, 5, 0.45, 0.26],
    [".", 2, 4, 0.49, 0.2]
  ].map(([e2, t2, a2, r2, s2]) => ({
    text: e2,
    scores: E(e2, M.length, t2, a2, r2, s2)
  })), I = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2));
  function R(e2, t2) {
    let a2 = Math.hypot(t2.x - e2.x, t2.y - e2.y);
    return {
      d: `M${e2.x.toFixed(1)} ${e2.y.toFixed(1)}L${t2.x.toFixed(1)} ${t2.y.toFixed(1)}`,
      len: a2,
      at: (r2) => {
        let s2 = a2 ? I(r2 / a2, 0, 1) : 1;
        return { x: e2.x + (t2.x - e2.x) * s2, y: e2.y + (t2.y - e2.y) * s2 };
      }
    };
  }
  function F(e2, t2, a2, r2) {
    let s2 = (s3) => {
      let n3 = 1 - s3, i3 = n3 * n3 * n3, l3 = 3 * n3 * n3 * s3, o2 = 3 * n3 * s3 * s3, d2 = s3 * s3 * s3;
      return {
        x: i3 * e2.x + l3 * t2.x + o2 * a2.x + d2 * r2.x,
        y: i3 * e2.y + l3 * t2.y + o2 * a2.y + d2 * r2.y
      };
    }, n2 = [0], i2 = e2;
    for (let e3 = 1; e3 <= 40; e3++) {
      let t3 = s2(e3 / 40);
      n2.push(n2[e3 - 1] + Math.hypot(t3.x - i2.x, t3.y - i2.y)), i2 = t3;
    }
    let l2 = n2[40];
    return {
      d: `M${e2.x.toFixed(1)} ${e2.y.toFixed(1)}C${t2.x.toFixed(1)} ${t2.y.toFixed(1)} ${a2.x.toFixed(1)} ${a2.y.toFixed(1)} ${r2.x.toFixed(1)} ${r2.y.toFixed(1)}`,
      len: l2,
      at: (e3) => {
        let t3 = I(e3, 0, l2), a3 = 1;
        for (; a3 < 40 && n2[a3] < t3; ) a3++;
        let r3 = n2[a3] - n2[a3 - 1] || 1;
        return s2((a3 - 1 + (t3 - n2[a3 - 1]) / r3) / 40);
      }
    };
  }
  var C = a(38511), z = a.n(C);
  let P = {
    enter: 0,
    in: 1,
    gate: 2,
    dispatch: 3,
    expert: 4,
    merge: 5,
    out: 6,
    done: 7
  }, W = {
    in: 0.18,
    gate: 0.5,
    dispatch: 0.78,
    expert: 1.16,
    merge: 1.4,
    join: 1.68,
    out: 1.86,
    next: 2.2
  }, O = {
    in: 0,
    gate: 0,
    dispatch: 0.6,
    expert: 0.6,
    merge: 1.1,
    join: 1.1,
    out: 1.1,
    next: 1.8
  }, B = (e2) => `${Math.round(100 * e2)}%`, D = ["first", "second"], q = {
    initial: { opacity: 0, y: 2 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: _.T.duration.fast,
        ease: [..._.T.ease.standard]
      }
    },
    exit: { opacity: 0, transition: { duration: 0.1 } }
  }, V = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function Y({ digit: e2, reduced: t2 }) {
    return (0, r.jsxs)("span", {
      className: z().digit,
      children: [
        (0, r.jsx)("span", { className: z().sizer, children: "0" }),
        (0, r.jsx)(n.PY1.span, {
          className: z().strip,
          initial: false,
          animate: { y: `${-(10 * e2)}%` },
          transition: t2 ? { duration: 0 } : _.T.spring.smooth,
          children: "0123456789".split("").map((e3) => (0, r.jsx)("span", { children: e3 }, e3))
        })
      ]
    });
  }
  function U({ value: e2, reduced: t2 }) {
    let a2 = String(Math.max(0, Math.round(e2)));
    return (0, r.jsx)("span", {
      className: z().roll,
      "aria-hidden": "true",
      children: a2.split("").map((e3, s2) => (0, r.jsx)(Y, { digit: +e3, reduced: t2 }, a2.length - s2))
    });
  }
  let H = () => () => {
  }, K = (e2) => ({ left: e2.x, top: e2.y, width: e2.w, height: e2.h }), J = (e2) => (0, r.jsx)("span", {
    className: z().initial,
    children: e2.trim().charAt(0) || "?"
  });
  function G({
    tokens: e2 = L,
    experts: t2 = M,
    topK: a2,
    defaultTopK: y2 = 2,
    onTopKChange: g2,
    parameters: v2 = A,
    capacityFactor: k2 = 1,
    speed: j2 = 1,
    paused: b2,
    defaultPaused: N2 = false,
    onPausedChange: w2,
    loop: $2 = true,
    onRoute: C2,
    label: Y2 = "Mixture of experts routing",
    className: Q2,
    style: X2
  }) {
    let Z2, ee2, et, ea = (0, i.I)(), er = (0, s.useSyncExternalStore)(
      H,
      () => true,
      () => false
    ) && !!ea, es = (0, s.useMemo)(() => t2.slice(0, 12), [t2]), en = Math.max(1, es.length), ei = e2.length, [el, eo] = (0, s.useState)(y2), ed = a2 ?? el, [eu, ec] = (0, s.useState)(N2), ep = b2 ?? eu, ex = (0, s.useCallback)(
      (e10) => {
        void 0 === b2 && ec(e10), w2?.(e10);
      },
      [b2, w2]
    ), em = !Number.isFinite(k2) || k2 <= 0 || en < 1 ? 1 / 0 : Math.max(1, Math.ceil(k2 * ei * ed / en)), eh = (0, s.useMemo)(() => {
      let t3;
      return t3 = Array(en).fill(0), e2.map((e10, a3) => {
        var r2;
        let s2 = e10.scores && e10.scores.length ? Array.from({ length: en }, (t4, a4) => e10.scores?.[a4] ?? 0) : null, n2 = s2 ? T(s2) : (function(e11, t4) {
          if (t4 <= 1) return [1];
          let a4 = S(e11.trim() || e11), r3 = a4 % t4;
          return E(
            e11,
            t4,
            r3,
            (r3 + 1 + (a4 >>> 8) % (t4 - 1)) % t4,
            0.38 + (a4 >>> 4) % 100 / 100 * 0.17,
            0.16 + (a4 >>> 12) % 100 / 100 * 0.1
          );
        })(e10.text, en), i2 = (r2 = Math.min(ed, en), n2.map((e11, t4) => ({ v: e11, i: t4 })).sort((e11, t4) => t4.v - e11.v || e11.i - t4.i).slice(0, Math.max(1, r2)).map((e11) => e11.i)), l2 = i2.map((e11) => n2[e11]), o2 = l2.reduce((e11, t4) => e11 + t4, 0) || 1, d2 = [];
        return i2.forEach((e11) => {
          t3[e11] >= em ? d2.push(e11) : t3[e11] += 1;
        }), {
          index: a3,
          token: e10.text.trim() || e10.text,
          scores: n2,
          experts: i2,
          weights: l2.map((e11) => e11 / o2),
          dropped: d2,
          loads: t3.slice()
        };
      });
    }, [e2, en, ed, em]), ef = (0, s.useMemo)(() => Array(en).fill(0), [en]), e_ = (0, s.useRef)(null), [ey, eg] = (0, s.useState)(0);
    (0, s.useLayoutEffect)(() => {
      let e10 = e_.current;
      if (!e10 || (eg(e10.clientWidth), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(([e11]) => eg(Math.round(e11.contentRect.width)));
      return t3.observe(e10), () => t3.disconnect();
    }, []);
    let ev = (0, s.useMemo)(() => {
      var e10, t3, a3, r2;
      let s2, n2, i2, l2, o2, d2, u2, c2, p2, x2, m2, h2, f2, _2, y3, g3, v3, k3, j3, b3, N3, w3, $3, M2, A2, S2, T2, E2;
      return ey > 0 ? (s2 = Math.max(240, ey)) >= 520 ? (e10 = s2, i2 = 32 + (n2 = 28 * (t3 = en) + (t3 - 1) * 4) / 2, l2 = Math.round(I(0.12 * e10, 64, 92)), o2 = Math.round(I(0.22 * e10, 124, 168)), d2 = Math.round(I(0.26 * e10, 148, 196)), u2 = e10 - 2 * l2 - o2 - d2, x2 = (p2 = (c2 = l2 + Math.round(0.27 * u2)) + o2 + Math.round(0.33 * u2)) + d2, h2 = Math.round(x2 + ((m2 = e10 - l2) - x2) * 0.62), f2 = (e11) => 32 + 32 * e11 + 14, _2 = Array.from({ length: t3 }, (e11, t4) => t4), y3 = (h2 - x2) * 0.6, {
        w: e10,
        h: 32 + n2 + 10,
        wide: true,
        intake: { x: 0, y: i2 - 14, w: l2, h: 28 },
        output: { x: m2, y: i2 - 14, w: l2, h: 28 },
        router: { x: c2, y: 22, w: o2, h: n2 + 20 },
        tracks: _2.map((e11) => ({
          x: c2 + 12,
          y: f2(e11) - 2,
          w: o2 - 24 - 30 - 6,
          h: 4
        })),
        scores: _2.map((e11) => ({
          x: c2 + o2 - 12 - 30,
          y: f2(e11) - 8,
          w: 30,
          h: 16
        })),
        tiles: _2.map((e11) => ({ x: p2, y: 32 + 32 * e11, w: d2, h: 28 })),
        inSeg: R({ x: l2, y: i2 }, { x: c2, y: i2 }),
        gates: _2.map(
          (e11) => R({ x: c2 + o2, y: f2(e11) }, { x: p2, y: f2(e11) })
        ),
        curves: _2.map(
          (e11) => F(
            { x: x2, y: f2(e11) },
            { x: x2 + y3, y: f2(e11) },
            { x: h2 - 0.55 * y3, y: i2 },
            { x: h2, y: i2 }
          )
        ),
        outSeg: R({ x: h2, y: i2 }, { x: m2, y: i2 }),
        merge: { x: h2, y: i2 },
        labels: [
          { text: "Input", x: l2, y: 11, align: "end" },
          { text: "Router", x: c2 + o2 / 2, y: 11, align: "center" },
          { text: "Experts", x: p2 + d2 / 2, y: 11, align: "center" },
          { text: "Output", x: m2, y: 11, align: "start" }
        ]
      }) : (a3 = s2, g3 = (r2 = en) > 6 ? 4 : 6, v3 = (a3 - (r2 - 1) * g3) / r2, k3 = (e11) => e11 * (v3 + g3) + v3 / 2, j3 = Array.from({ length: r2 }, (e11, t4) => t4), b3 = a3 / 2, N3 = Math.min(180, 0.5 * a3), w3 = 50, $3 = 80, M2 = 50, A2 = 164, S2 = 242, T2 = 258, E2 = 18.2, {
        w: a3,
        h: 286,
        wide: false,
        intake: { x: b3 - N3 / 2, y: 0, w: N3, h: 28 },
        output: { x: b3 - N3 / 2, y: 258, w: N3, h: 28 },
        router: { x: 0, y: 50, w: a3, h: 92 },
        tracks: j3.map((e11) => ({ x: k3(e11) - 2, y: $3, w: 4, h: M2 })),
        scores: j3.map((e11) => ({
          x: k3(e11) - v3 / 2,
          y: w3 + 8,
          w: v3,
          h: 16
        })),
        tiles: j3.map((e11) => ({ x: e11 * (v3 + g3), y: A2, w: v3, h: 52 })),
        inSeg: R({ x: b3, y: 28 }, { x: b3, y: w3 }),
        gates: j3.map(
          (e11) => R({ x: k3(e11), y: w3 + 92 }, { x: k3(e11), y: A2 })
        ),
        curves: j3.map(
          (e11) => F(
            { x: k3(e11), y: A2 + 52 },
            { x: k3(e11), y: A2 + 52 + E2 },
            { x: b3, y: S2 - 0.5 * E2 },
            { x: b3, y: S2 }
          )
        ),
        outSeg: R({ x: b3, y: S2 }, { x: b3, y: T2 }),
        merge: { x: b3, y: S2 },
        labels: [
          { text: "Input", x: 0, y: 14, align: "start" },
          { text: "Output", x: 0, y: T2 + 14, align: "start" }
        ]
      }) : null;
    }, [ey, en]), ek = (0, s.useRef)(null), [ej, eb] = (0, s.useState)(true);
    (0, s.useEffect)(() => {
      let e10 = ek.current;
      if (!e10 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e11]) => eb(e11.isIntersecting), {
        rootMargin: "80px"
      });
      return t3.observe(e10), () => t3.disconnect();
    }, []);
    let [eN, ew] = (0, s.useState)(null), [e$, eM] = (0, s.useState)(null), [eA, eS] = (0, s.useState)(null), eT = eN ?? e$ ?? eA, [eE, eL] = (0, s.useState)(0), [eI, eR] = (0, s.useState)(0), [eF, eC] = (0, s.useState)(""), [ez, eP] = (0, s.useState)({ index: 0, phase: "enter", cycle: 0 }), eW = (0, s.useRef)({ t: 0, index: 0, phase: "enter", cycle: 0 }), eO = er ? O : W, eB = "done" === ez.phase && (!$2 || er), eD = !ep && !eT && ej && !!ev && ei > 0 && j2 > 0 && !eB, eq = (0, s.useRef)([]), eV = (0, s.useRef)({ geo: ev, plan: eh, T: eO, reduced: er });
    (0, s.useEffect)(() => {
      eV.current = { geo: ev, plan: eh, T: eO, reduced: er };
    });
    let eY = (0, s.useCallback)(() => {
      let { geo: e10, plan: t3, T: a3, reduced: r2 } = eV.current, { t: s2, index: n2, phase: i2 } = eW.current, l2 = t3[n2], o2 = [null, null, null, null, null, null];
      if (e10 && l2 && !r2 && "done" !== i2) {
        let t4 = (e11, t5) => {
          let a4;
          return s2 >= e11 && s2 < t5 ? (a4 = (s2 - e11) / (t5 - e11)) < 0.5 ? 4 * a4 * a4 * a4 : 1 - Math.pow(-2 * a4 + 2, 3) / 2 : -1;
        }, r3 = t4(a3.in, a3.gate);
        r3 >= 0 && (o2[0] = { seg: e10.inSeg, at: r3 });
        let n3 = t4(a3.dispatch, a3.expert), i3 = t4(a3.merge, a3.join), d2 = t4(a3.join, a3.out);
        l2.experts.forEach((t5, a4) => {
          n3 >= 0 && (o2[1 + a4] = {
            seg: e10.gates[t5],
            at: l2.dropped.includes(t5) ? 0.92 * n3 : n3
          }), i3 >= 0 && !l2.dropped.includes(t5) && (o2[3 + a4] = { seg: e10.curves[t5], at: i3 });
        }), d2 >= 0 && l2.dropped.length < l2.experts.length && (o2[5] = { seg: e10.outSeg, at: d2 });
      }
      o2.forEach((e11, t4) => {
        let a4 = eq.current[t4];
        if (!a4) return;
        if (!e11) {
          a4.style.opacity = "0";
          return;
        }
        let [r3, s3, n3] = a4.children, { seg: i3, at: l3 } = e11, o3 = l3 * i3.len, d2 = Math.min(34, 0.7 * i3.len);
        r3.getAttribute("d") !== i3.d && (r3.setAttribute("d", i3.d), s3.setAttribute("d", i3.d)), r3.setAttribute("stroke-dasharray", `${d2} ${i3.len + d2}`), r3.setAttribute("stroke-dashoffset", `${d2 - o3}`), s3.setAttribute("stroke-dasharray", `${0.45 * d2} ${i3.len + d2}`), s3.setAttribute("stroke-dashoffset", `${0.45 * d2 - o3}`);
        let u2 = i3.at(o3);
        n3.setAttribute("cx", u2.x.toFixed(2)), n3.setAttribute("cy", u2.y.toFixed(2)), a4.style.opacity = "1";
      });
    }, []);
    (0, s.useEffect)(() => {
      if (!eD) return;
      let e10 = 0, t3 = performance.now(), a3 = (r2) => {
        let s2, n2 = eW.current, { T: i2, plan: l2, reduced: o2 } = eV.current;
        n2.t += Math.min(0.05, (r2 - t3) / 1e3) * j2, t3 = r2, "done" === n2.phase ? n2.t >= 3.6 && $2 && !o2 && (n2.t = 0, n2.index = 0, n2.cycle += 1, n2.phase = "enter") : n2.t >= i2.next && (n2.index + 1 < l2.length ? (n2.index += 1, n2.t -= i2.next) : (n2.phase = "done", n2.t = 0)), "done" !== n2.phase && (s2 = n2.t, n2.phase = s2 < i2.in ? "enter" : s2 < i2.gate ? "in" : s2 < i2.dispatch ? "gate" : s2 < i2.expert ? "dispatch" : s2 < i2.merge ? "expert" : s2 < i2.out ? "merge" : "out"), eP(
          (e11) => e11.index === n2.index && e11.phase === n2.phase && e11.cycle === n2.cycle ? e11 : { index: n2.index, phase: n2.phase, cycle: n2.cycle }
        ), eY(), ("done" !== n2.phase || $2 && !o2) && (e10 = requestAnimationFrame(a3));
      };
      return e10 = requestAnimationFrame(a3), () => cancelAnimationFrame(e10);
    }, [eD, j2, $2, eY]), (0, s.useEffect)(() => {
      eY();
    }, [ev, eh, eY]), (0, s.useEffect)(() => {
      eW.current.index < ei || (eW.current = {
        t: 0,
        index: 0,
        phase: "enter",
        cycle: eW.current.cycle + 1
      }, eP({ index: 0, phase: "enter", cycle: eW.current.cycle }));
    }, [ei]);
    let eU = (0, s.useRef)(C2);
    (0, s.useEffect)(() => {
      eU.current = C2;
    });
    let eH = (0, s.useRef)("");
    (0, s.useEffect)(() => {
      let e10 = eh[ez.index];
      if (!e10 || P[ez.phase] < P.dispatch || "done" === ez.phase) return;
      let t3 = `${ez.cycle}:${ez.index}`;
      eH.current !== t3 && (eH.current = t3, eU.current?.({
        index: e10.index,
        token: e10.token,
        scores: e10.scores,
        experts: e10.experts,
        weights: e10.weights,
        dropped: e10.dropped
      }));
    }, [ez, eh]);
    let eK = P[ez.phase], eJ = "done" === ez.phase, eG = eh[ez.index], eQ = ez.index > 0 ? eh[ez.index - 1] : void 0, eX = eT?.kind === "token" ? eh[eT.index] : void 0, eZ = eT?.kind === "expert" ? eT.index : null, e0 = eJ ? eh[ei - 1]?.loads ?? ef : eK >= P.expert ? eG?.loads ?? ef : eQ?.loads ?? ef, e1 = eX ? eX.loads : e0, e22 = eX ? {
      bars: eX,
      barsLive: true,
      gates: eX,
      curves: eX,
      lit: eX,
      input: eX.index,
      inputSpent: false,
      output: eX.index
    } : {
      bars: eJ ? eh[ei - 1] : eK >= P.gate ? eG : eQ,
      barsLive: !eJ && eK >= P.gate,
      gates: !eJ && null === eZ && eK >= P.dispatch && eK <= P.expert ? eG : void 0,
      curves: eJ || null !== eZ || eK !== P.merge ? void 0 : eG,
      lit: !eJ && null === eZ && eK >= P.expert ? eG : void 0,
      input: eJ || !eG ? null : ez.index,
      inputSpent: eK >= P.gate,
      output: eJ ? ei - 1 : eK >= P.out ? ez.index : ez.index - 1
    }, e5 = (e10, t3) => e10 ? e10.experts.indexOf(t3) : -1, e4 = v2.shared + ed * v2.perExpert, e8 = (function(e10) {
      let t3 = e10.reduce((e11, t4) => e11 + t4, 0);
      if (!t3 || e10.length < 2) return null;
      let a3 = t3 / e10.length;
      return Math.max(0, 1 - (Math.max(...e10) / a3 - 1) / (e10.length - 1));
    })(e1), e6 = e1.reduce((e10, t3) => e10 + t3, 0), e3 = (e10) => {
      try {
        return e10.currentTarget.matches(":focus-visible");
      } catch {
        return true;
      }
    }, e7 = (e10) => {
      let t3 = eA && eA.kind === e10.kind && eA.index === e10.index;
      eS(t3 ? null : e10);
      let a3 = "token" === e10.kind ? eh[e10.index]?.token : es[e10.index]?.name;
      eC(
        t3 ? "Unpinned, routing resumes" : `Pinned ${a3}. Press Escape to resume.`
      );
    }, e9 = (0, s.useRef)([]), te = (0, s.useRef)([]), tt = (e10, t3, a3, r2, s2) => {
      let n2 = a3 - 1, i2 = "ArrowRight" === e10.key || "ArrowDown" === e10.key ? Math.min(n2, t3 + 1) : "ArrowLeft" === e10.key || "ArrowUp" === e10.key ? Math.max(0, t3 - 1) : "Home" === e10.key ? 0 : "End" === e10.key ? n2 : -1;
      i2 < 0 || (e10.preventDefault(), s2(i2), r2[i2]?.focus());
    }, ta = eB ? "Route again" : ep || eA ? "Play" : "Pause", tr = {
      "--moe-wide-h": `${42 + 28 * en + (en - 1) * 4}px`,
      "--moe-narrow-h": `${286}px`,
      ...ev ? { height: ev.h } : null
    }, ts = er ? V : q, tn = (e10) => es[e10]?.name ?? `Expert ${e10 + 1}`, ti = (e10) => (0, r.jsx)("span", { className: z().tokenRef, children: e10 }), tl = (e10) => e10.map(tn).join(" and "), to = eX ?? (!eJ && eK >= P.gate ? eG : void 0);
    if (0 === ei)
      Z2 = "empty", ee2 = (0, r.jsx)("span", {
        className: z().lineMuted,
        children: "No tokens yet"
      }), et = { text: "Pass tokens to see how the gate routes them." };
    else if (null !== eZ) {
      let e10 = es[eZ], t3 = e1[eZ] ?? 0;
      Z2 = `expert-${eZ}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)("span", {
            className: z().lineIcon,
            children: e10?.icon ?? J(e10?.name ?? "")
          }),
          (0, r.jsx)("span", { className: z().lineName, children: tn(eZ) }),
          (0, r.jsx)("span", {
            className: z().lineMeta,
            children: Number.isFinite(em) ? `${t3} of ${em} tokens` : `${t3} ${1 === t3 ? "token" : "tokens"}`
          })
        ]
      });
      let a3 = Number.isFinite(em) && t3 >= em;
      et = {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            e10?.handles ? `Tends to handle ${e10.handles.charAt(0).toLowerCase()}${e10.handles.slice(1)}.` : "Takes whatever the gate sends it.",
            a3 ? " It is full, so later tokens skip it." : ""
          ]
        })
      };
    } else if (eJ && !eX)
      Z2 = `done-${ed}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(d.A, {
            size: 14,
            strokeWidth: 1.75,
            className: z().okIcon,
            "aria-hidden": "true"
          }),
          (0, r.jsxs)("span", {
            className: z().lineName,
            children: ["Routed ", ei, " ", 1 === ei ? "token" : "tokens"]
          })
        ]
      }), et = {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            "Each token used ",
            ed,
            " of ",
            en,
            " experts, so only ",
            e4,
            "B of ",
            v2.total,
            "B parameters ran."
          ]
        })
      };
    else if (to) {
      let e10;
      Z2 = `route-${to.index}-${ed}-${eX ? "still" : ez.cycle}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)("span", { className: z().lineChip, children: to.token }),
          (0, r.jsx)(u.A, {
            size: 14,
            strokeWidth: 1.75,
            className: z().lineArrow,
            "aria-hidden": "true"
          }),
          to.experts.map((e11, t3) => {
            let a3 = to.dropped.includes(e11);
            return (0, r.jsxs)(
              "span",
              {
                className: z().pick,
                "data-rank": t3,
                "data-dropped": a3 || void 0,
                children: [
                  a3 ? (0, r.jsx)(o.A, {
                    size: 12,
                    strokeWidth: 1.75,
                    className: z().warnIcon,
                    "aria-hidden": "true"
                  }) : (0, r.jsx)("span", {
                    className: z().swatch,
                    "aria-hidden": "true"
                  }),
                  (0, r.jsx)("span", {
                    className: z().pickName,
                    children: tn(e11)
                  }),
                  (0, r.jsx)("span", {
                    className: z().pickValue,
                    children: a3 ? "full" : B(to.weights[t3])
                  })
                ]
              },
              e11
            );
          })
        ]
      }), e10 = to.experts.filter((e11) => !to.dropped.includes(e11)), et = to.dropped.length && e10.length ? {
        icon: (0, r.jsx)(o.A, {
          size: 14,
          strokeWidth: 1.75,
          className: z().warnIcon,
          "aria-hidden": "true"
        }),
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tl(to.dropped),
            " is at capacity, so only ",
            tn(e10[0]),
            " processes ",
            ti(to.token),
            "."
          ]
        })
      } : to.dropped.length ? {
        icon: (0, r.jsx)(o.A, {
          size: 14,
          strokeWidth: 1.75,
          className: z().warnIcon,
          "aria-hidden": "true"
        }),
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tl(to.dropped),
            " is at capacity, so ",
            ti(to.token),
            " passes through unchanged."
          ]
        })
      } : 1 === to.experts.length ? {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tn(to.experts[0]),
            " processes ",
            ti(to.token),
            " alone. The other ",
            en - 1,
            " experts stay idle."
          ]
        })
      } : {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            tl(to.experts),
            " process ",
            ti(to.token),
            ". Their outputs blend ",
            to.weights.map((e11) => Math.round(100 * e11)).join(" to "),
            "."
          ]
        })
      };
    } else
      Z2 = `scoring-${ez.index}-${ez.cycle}`, ee2 = (0, r.jsxs)(r.Fragment, {
        children: [
          eG && (0, r.jsx)("span", {
            className: z().lineChip,
            children: eG.token
          }),
          (0, r.jsx)(u.A, {
            size: 14,
            strokeWidth: 1.75,
            className: z().lineArrow,
            "aria-hidden": "true"
          }),
          (0, r.jsx)(h.n, {
            className: z().lineShimmer,
            active: !ep,
            children: `Scoring ${en} experts`
          })
        ]
      }), et = {
        text: (0, r.jsxs)(r.Fragment, {
          children: [
            "The gate scores every expert. The top ",
            ed,
            " ",
            1 === ed ? "takes" : "take",
            " the token."
          ]
        })
      };
    return (0, r.jsx)("div", {
      ref: ek,
      className: `${z().root} ${Q2 ?? ""}`,
      style: X2,
      children: (0, r.jsxs)("div", {
        className: z().card,
        role: "group",
        "aria-label": Y2,
        onKeyDown: (e10) => {
          "Escape" === e10.key && eA && (eS(null), eC("Unpinned, routing resumes"));
        },
        "data-inspect": eT ? eT.kind : void 0,
        "data-reduced": er || void 0,
        children: [
          (0, r.jsxs)("div", {
            className: z().header,
            children: [
              (0, r.jsx)(m.A, {
                label: "Experts per token",
                options: [
                  { value: "1", label: "Top 1" },
                  { value: "2", label: "Top 2" }
                ],
                value: String(ed),
                onValueChange: (e10) => {
                  let t3 = "1" === e10 ? 1 : 2;
                  t3 !== ed && (void 0 === a2 && eo(t3), g2?.(t3), eC(
                    `Top ${t3}: ${v2.shared + t3 * v2.perExpert}B of ${v2.total}B parameters active per token`
                  ));
                }
              }),
              (0, r.jsxs)("p", {
                className: z().params,
                children: [
                  (0, r.jsx)("span", {
                    className: z().paramsLabel,
                    children: "Active parameters"
                  }),
                  (0, r.jsxs)("span", {
                    className: z().paramsValue,
                    children: [(0, r.jsx)(U, { value: e4, reduced: er }), "B"]
                  }),
                  (0, r.jsxs)("span", {
                    className: z().paramsLabel,
                    children: ["of ", v2.total, "B"]
                  }),
                  (0, r.jsxs)("span", {
                    className: z().srOnly,
                    children: [
                      e4,
                      "B of ",
                      v2.total,
                      "B parameters active per token"
                    ]
                  })
                ]
              }),
              (0, r.jsx)(f.m, {
                content: ta,
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: z().play,
                  "aria-label": ta,
                  onClick: () => {
                    if (eB) {
                      eW.current = {
                        t: 0,
                        index: 0,
                        phase: "enter",
                        cycle: eW.current.cycle + 1
                      }, eP({
                        index: 0,
                        phase: "enter",
                        cycle: eW.current.cycle
                      }), ex(false), eS(null), eC("Routing again from the first token");
                      return;
                    }
                    if (eA) {
                      eS(null), ex(false), eC("Routing resumes");
                      return;
                    }
                    ex(!ep), eC(ep ? "Routing resumes" : "Paused");
                  },
                  disabled: 0 === ei,
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      n.PY1.span,
                      {
                        className: z().playIcon,
                        ...ts,
                        children: eB ? (0, r.jsx)(c.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : "Play" === ta ? (0, r.jsx)(p.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : (0, r.jsx)(x.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      },
                      ta
                    )
                  })
                })
              })
            ]
          }),
          (0, r.jsx)("div", {
            ref: e_,
            className: z().stage,
            style: tr,
            "data-ready": ev ? "" : void 0,
            "data-layout": ev ? ev.wide ? "wide" : "narrow" : void 0,
            children: ev && (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("svg", {
                  className: z().lines,
                  width: ev.w,
                  height: ev.h,
                  viewBox: `0 0 ${ev.w} ${ev.h}`,
                  "aria-hidden": "true",
                  children: [
                    (0, r.jsx)("path", {
                      className: z().flow,
                      d: ev.inSeg.d,
                      "data-on": null === e22.input || e22.inputSpent ? void 0 : ""
                    }),
                    ev.gates.map((e10, t3) => {
                      let a3 = e5(e22.gates, t3);
                      return (0, r.jsx)(
                        "path",
                        {
                          className: z().gate,
                          d: e10.d,
                          "data-rank": a3 >= 0 ? a3 : void 0,
                          "data-dropped": a3 >= 0 && e22.gates?.dropped.includes(t3) ? "" : void 0
                        },
                        t3
                      );
                    }),
                    ev.curves.map((e10, t3) => {
                      let a3 = e5(e22.curves, t3), s2 = !!e22.curves?.dropped.includes(t3);
                      return (0, r.jsx)(
                        "path",
                        {
                          className: z().curve,
                          d: e10.d,
                          "data-rank": a3 >= 0 && !s2 ? a3 : void 0
                        },
                        t3
                      );
                    }),
                    (0, r.jsx)("path", {
                      className: z().flow,
                      d: ev.outSeg.d
                    }),
                    (0, r.jsx)("circle", {
                      className: z().joint,
                      cx: ev.merge.x,
                      cy: ev.merge.y,
                      r: 2.5
                    })
                  ]
                }),
                ev.labels.map(
                  (e10) => (0, r.jsx)(
                    "span",
                    {
                      className: z().stageLabel,
                      "data-align": e10.align,
                      style: { left: e10.x, top: e10.y },
                      children: e10.text
                    },
                    e10.text
                  )
                ),
                (0, r.jsx)("div", {
                  className: z().router,
                  style: K(ev.router),
                  "data-live": e22.barsLive ? "" : void 0,
                  "aria-hidden": "true"
                }),
                ev.tracks.map((e10, t3) => {
                  let a3 = e22.bars?.scores[t3] ?? 0, s2 = e22.barsLive ? e5(e22.bars, t3) : -1;
                  return (0, r.jsx)(
                    "span",
                    {
                      className: z().track,
                      style: K(e10),
                      "data-rank": s2 >= 0 ? s2 : void 0,
                      "data-live": e22.barsLive ? "" : void 0,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("span", {
                        className: z().fill,
                        style: { "--s": e22.bars ? a3 : 0 }
                      })
                    },
                    t3
                  );
                }),
                ev.scores.map((e10, t3) => {
                  let a3 = e22.barsLive ? e5(e22.bars, t3) : -1;
                  return (0, r.jsx)(
                    "span",
                    {
                      className: z().score,
                      style: K(e10),
                      "data-rank": a3 >= 0 ? a3 : void 0,
                      "data-live": e22.barsLive ? "" : void 0,
                      "aria-hidden": "true",
                      children: e22.bars ? B(e22.bars.scores[t3] ?? 0) : "0%"
                    },
                    t3
                  );
                }),
                (0, r.jsx)("div", {
                  className: z().tiles,
                  role: "group",
                  "aria-label": "Experts",
                  children: ev.tiles.map((e10, t3) => {
                    let a3 = es[t3], s2 = e5(e22.lit, t3), n2 = s2 >= 0 && !!e22.lit?.dropped.includes(t3), i2 = e1[t3] ?? 0, l2 = Number.isFinite(em) && i2 >= em;
                    return (0, r.jsxs)(
                      "button",
                      {
                        ref: (e11) => {
                          te.current[t3] = e11;
                        },
                        type: "button",
                        className: z().tile,
                        style: {
                          ...K(e10),
                          "--g": Number.isFinite(em) ? Math.min(1, i2 / em) : 0
                        },
                        "data-rank": s2 >= 0 && !n2 ? s2 : void 0,
                        "data-dropped": n2 || void 0,
                        "data-full": l2 || void 0,
                        "data-inspect": eZ === t3 || void 0,
                        "data-pinned": eA?.kind === "expert" && eA.index === t3 ? "" : void 0,
                        tabIndex: t3 === eI ? 0 : -1,
                        "aria-pressed": eA?.kind === "expert" && eA.index === t3,
                        "aria-label": `${tn(t3)} expert, ${i2} ${1 === i2 ? "token" : "tokens"}${l2 ? ", at capacity" : ""}${s2 >= 0 ? `, ${n2 ? "skipped" : `${D[s2]} choice`} for ${e22.lit?.token}` : ""}`,
                        onPointerEnter: (e11) => {
                          "mouse" === e11.pointerType && ew({ kind: "expert", index: t3 });
                        },
                        onPointerLeave: () => ew(null),
                        onFocus: (e11) => {
                          eR(t3), e3(e11) && eM({ kind: "expert", index: t3 });
                        },
                        onBlur: () => eM(null),
                        onKeyDown: (e11) => tt(e11, t3, en, te.current, eR),
                        onClick: () => e7({ kind: "expert", index: t3 }),
                        children: [
                          (0, r.jsx)("span", {
                            className: z().gauge,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: z().tileIcon,
                            "aria-hidden": "true",
                            children: n2 ? (0, r.jsx)(o.A, {
                              size: 14,
                              strokeWidth: 1.75
                            }) : a3?.icon ?? J(a3?.name ?? "")
                          }),
                          (0, r.jsx)("span", {
                            className: z().tileName,
                            children: tn(t3)
                          }),
                          (0, r.jsx)("span", {
                            className: z().tileCount,
                            children: (0, r.jsx)(U, {
                              value: i2,
                              reduced: er
                            })
                          })
                        ]
                      },
                      t3
                    );
                  })
                }),
                (0, r.jsxs)("div", {
                  className: z().slot,
                  "data-side": "in",
                  style: K(ev.intake),
                  children: [
                    (0, r.jsx)(l.N, {
                      initial: false,
                      children: null !== e22.input && eh[e22.input] && (0, r.jsx)(
                        n.PY1.span,
                        {
                          className: z().chip,
                          "data-spent": e22.inputSpent || void 0,
                          initial: er ? { opacity: 0 } : ev.wide ? { opacity: 0, x: -14 } : { opacity: 0, y: -8 },
                          animate: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            transition: er ? { duration: 0 } : {
                              duration: _.T.duration.standard,
                              ease: [..._.T.ease.standard]
                            }
                          },
                          exit: {
                            opacity: 0,
                            transition: { duration: 0.1 * !er }
                          },
                          children: eh[e22.input].token
                        },
                        `in-${e22.input}-${eX ? "still" : ez.cycle}`
                      )
                    }),
                    0 === ei && (0, r.jsx)("span", {
                      className: z().chip,
                      "data-empty": "",
                      children: "Empty"
                    })
                  ]
                }),
                (0, r.jsx)("div", {
                  className: z().slot,
                  "data-side": "out",
                  style: K(ev.output),
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    children: e22.output >= 0 && eh[e22.output] && (0, r.jsxs)(
                      n.PY1.span,
                      {
                        className: z().chip,
                        "data-out": "",
                        "data-pass": eh[e22.output].dropped.length === eh[e22.output].experts.length || void 0,
                        initial: er ? { opacity: 0 } : ev.wide ? { opacity: 0, x: -10 } : { opacity: 0, y: -6 },
                        animate: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: er ? { duration: 0 } : {
                            duration: _.T.duration.standard,
                            ease: [..._.T.ease.standard]
                          }
                        },
                        exit: er ? { opacity: 0, transition: { duration: 0 } } : ev.wide ? {
                          opacity: 0,
                          x: 10,
                          transition: {
                            duration: _.T.duration.fast,
                            ease: [..._.T.ease.standard]
                          }
                        } : {
                          opacity: 0,
                          y: 6,
                          transition: { duration: _.T.duration.fast }
                        },
                        children: [
                          (0, r.jsx)("span", {
                            className: z().chipDots,
                            "aria-hidden": "true",
                            children: eh[e22.output].experts.map(
                              (e10, t3) => eh[e22.output].dropped.includes(e10) ? null : (0, r.jsx)("i", { "data-rank": t3 }, e10)
                            )
                          }),
                          eh[e22.output].token
                        ]
                      },
                      `out-${e22.output}-${eX ? "still" : ez.cycle}`
                    )
                  })
                }),
                (0, r.jsx)("svg", {
                  className: z().packets,
                  width: ev.w,
                  height: ev.h,
                  viewBox: `0 0 ${ev.w} ${ev.h}`,
                  "aria-hidden": "true",
                  children: [0, 1, 2, 3, 4, 5].map(
                    (e10) => (0, r.jsxs)(
                      "g",
                      {
                        ref: (t3) => {
                          eq.current[e10] = t3;
                        },
                        className: z().packet,
                        "data-slot": 0 === e10 || 5 === e10 ? "flow" : (e10 - 1) % 2,
                        style: { opacity: 0 },
                        children: [
                          (0, r.jsx)("path", { className: z().trailLong }),
                          (0, r.jsx)("path", { className: z().trailShort }),
                          (0, r.jsx)("circle", {
                            className: z().dot,
                            r: 3.5
                          })
                        ]
                      },
                      e10
                    )
                  )
                })
              ]
            })
          }),
          (0, r.jsxs)("div", {
            className: z().sequence,
            role: "group",
            "aria-label": "Tokens. Hover, focus or select one to see its route.",
            children: [
              eh.map((e10, t3) => {
                let a3 = eJ || t3 < ez.index || t3 === ez.index && eK >= P.out ? "done" : t3 === ez.index ? "current" : "next", s2 = null !== eZ ? e10.experts.indexOf(eZ) : -1, n2 = eA?.kind === "token" && eA.index === t3;
                return (0, r.jsx)(
                  "button",
                  {
                    ref: (e11) => {
                      e9.current[t3] = e11;
                    },
                    type: "button",
                    className: z().token,
                    "data-state": a3,
                    "data-inspect": eX?.index === t3 || void 0,
                    "data-rank": s2 >= 0 && !e10.dropped.includes(eZ ?? -1) ? s2 : void 0,
                    "data-dropped": s2 >= 0 && e10.dropped.includes(eZ ?? -1) ? "" : void 0,
                    "data-fade": null !== eZ && s2 < 0 ? "" : void 0,
                    tabIndex: t3 === eE ? 0 : -1,
                    "aria-pressed": n2,
                    "aria-label": `${e10.token}: ${e10.experts.map((t4, a4) => `${tn(t4)} ${e10.dropped.includes(t4) ? "skipped, at capacity" : B(e10.weights[a4])}`).join(", ")}`,
                    onPointerEnter: (e11) => {
                      "mouse" === e11.pointerType && ew({ kind: "token", index: t3 });
                    },
                    onPointerLeave: () => ew(null),
                    onFocus: (e11) => {
                      eL(t3), e3(e11) && eM({ kind: "token", index: t3 });
                    },
                    onBlur: () => eM(null),
                    onKeyDown: (e11) => tt(e11, t3, ei, e9.current, eL),
                    onClick: () => e7({ kind: "token", index: t3 }),
                    children: e10.token
                  },
                  t3
                );
              }),
              0 === ei && (0, r.jsx)("span", {
                className: z().sequenceEmpty,
                children: "No tokens to route"
              })
            ]
          }),
          (0, r.jsxs)("div", {
            className: z().footer,
            children: [
              (0, r.jsxs)("div", {
                className: z().inspector,
                children: [
                  (0, r.jsx)("div", {
                    className: z().line,
                    children: (0, r.jsx)(l.N, {
                      initial: false,
                      mode: "popLayout",
                      children: (0, r.jsx)(
                        n.PY1.div,
                        { className: z().lineInner, ...ts, children: ee2 },
                        Z2
                      )
                    })
                  }),
                  (0, r.jsx)("div", {
                    className: z().note,
                    children: (0, r.jsx)(l.N, {
                      initial: false,
                      mode: "popLayout",
                      children: (0, r.jsxs)(
                        n.PY1.p,
                        {
                          className: z().noteInner,
                          ...ts,
                          children: [
                            et.icon,
                            (0, r.jsx)("span", { children: et.text })
                          ]
                        },
                        `${Z2}-note`
                      )
                    })
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: z().load,
                children: [
                  (0, r.jsxs)("div", {
                    className: z().loadHead,
                    children: [
                      (0, r.jsx)("span", { children: "Load balance" }),
                      (0, r.jsx)("span", {
                        className: z().loadValue,
                        children: null === e8 ? (0, r.jsx)("span", {
                          className: z().lineMuted,
                          children: "No routes yet"
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(U, {
                              value: 100 * e8,
                              reduced: er
                            }),
                            "%"
                          ]
                        })
                      })
                    ]
                  }),
                  (0, r.jsx)("div", {
                    className: z().loadBar,
                    "aria-hidden": "true",
                    "data-empty": 0 === e6 || void 0,
                    children: e1.map((e10, t3) => {
                      let a3 = e5(e22.lit, t3);
                      return (0, r.jsx)(
                        "span",
                        {
                          className: z().seg,
                          style: { flexGrow: e10 },
                          "data-zero": 0 === e10 || void 0,
                          "data-rank": a3 >= 0 && !e22.lit?.dropped.includes(t3) ? a3 : void 0,
                          "data-inspect": eZ === t3 || void 0,
                          onPointerEnter: (e11) => {
                            "mouse" === e11.pointerType && ew({ kind: "expert", index: t3 });
                          },
                          onPointerLeave: () => ew(null)
                        },
                        t3
                      );
                    })
                  }),
                  (0, r.jsx)("span", {
                    className: z().srOnly,
                    children: null === e8 ? "No routes yet" : `Load balance ${Math.round(100 * e8)} percent across ${en} experts, ${e6} routes`
                  })
                ]
              })
            ]
          }),
          (0, r.jsx)("span", {
            className: z().srOnly,
            role: "status",
            "aria-live": "polite",
            children: eF
          })
        ]
      })
    });
  }
  var Q = a(1766), X = a.n(Q);
  function Z() {
    return (0, r.jsx)("div", {
      className: X().demo,
      children: (0, r.jsx)(G, {})
    });
  }
  let ee = Z;
}

__m(__module,__exports,__require);
}