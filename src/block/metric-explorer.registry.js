/* metric-explorer (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(335, function(__module,__exports,__require){
"use strict";
function __m(e, r, a) {
  "use strict";
  a.r(r), a.d(r, { MetricExplorer: () => e$, default: () => eN });
  var t = a(95155), l = a(12115), n = a(18310), i = a(25354), s = a(28245), o = a(92171), c = a(57700), d = a(9751), u = a(9005), p = a(65024), h = a(66558), m = a(7770);
  let x = {
    "30d": { label: "30D", days: 30, weekly: false, words: "30 days" },
    "90d": { label: "90D", days: 90, weekly: false, words: "90 days" },
    "12m": { label: "12M", days: 364, weekly: true, words: "12 months" }
  }, y = ["30d", "90d", "12m"], _ = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], f = Array.from({ length: 730 }, (e2, r2) => {
    let a2 = new Date(Date.UTC(2026, 8, 22 - (729 - r2)));
    return {
      y: a2.getUTCFullYear(),
      m: a2.getUTCMonth(),
      day: a2.getUTCDate(),
      wd: a2.getUTCDay()
    };
  }), v = (e2) => `${_[f[e2].m]} ${f[e2].day}`, g = (e2) => `${v(e2)}, ${f[e2].y}`;
  function b(e2) {
    let r2 = 729 - x[e2].days + 1;
    return f[r2].y === f[729].y ? `${v(r2)} \u2013 ${v(729)}` : `${g(r2)} \u2013 ${g(729)}`;
  }
  function j(e2, r2, a2) {
    let t2, l2 = (t2 = e2 >>> 0, () => {
      let e3 = t2 = t2 + 1831565813 >>> 0;
      return e3 = Math.imul(e3 ^ e3 >>> 15, 1 | e3), (((e3 ^= e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3)) ^ e3 >>> 14) >>> 0) / 4294967296;
    }), n2 = 0;
    return Array.from(
      { length: 730 },
      () => n2 = n2 * r2 + (l2() + l2() + l2() - 1.5) * 2 * a2
    );
  }
  let w = (e2) => e2 <= 0 ? 0 : e2 >= 1 ? 1 : e2 * e2 * (3 - 2 * e2), M = (e2, r2, a2) => e2.map((t2) => Math.round((t2 + r2 - e2[729]) / a2) * a2), $ = Array.from({ length: 730 }, (e2, r2) => r2), N = j(11, 0.94, 21e-4), k = j(23, 0.9, 4.2), L = j(37, 0.88, 0.15), A = j(51, 0.95, 0.045), D = M(
    $.map(
      (e2) => 79e4 * Math.exp(66e-5 * e2) * (1 + N[e2]) + 18400 * w((e2 - 402) / 3) + 23900 * w((e2 - 588) / 3) - 15600 * w((e2 - 668) / 2)
    ),
    1284600,
    100
  ), R = M(
    $.map(
      (e2) => 1388 + 905 * Math.pow(e2 / 729, 1.18) + 21 * Math.sin(e2 / 58) - 34 * Math.exp(-(((e2 - 322) / 16) ** 2)) + k[e2]
    ),
    2318,
    1
  ), P = M(
    $.map(
      (e2) => 33.4 + 2.2 * e2 / 729 + 4.4 * w((e2 - 684) / 28) + 0.55 * Math.sin(e2 / 41) + L[e2]
    ),
    41.8,
    0.1
  ), E = M(
    $.map(
      (e2) => 105.6 + 8.6 * w((e2 - 120) / 560) - 1.9 * w((e2 - 684) / 45) + A[e2]
    ),
    112.4,
    0.1
  ), C = (e2, r2, a2, t2, l2, n2) => ({
    id: e2,
    label: r2,
    short: a2,
    definition: t2,
    change: l2,
    daily: n2,
    weekly: n2.map((e3, r3) => {
      let a3 = (729 - r3) % 7, t3 = r3 + a3, l3 = t3 - 7;
      return 0 === a3 || l3 < 0 ? e3 : n2[l3] + (n2[t3] - n2[l3]) * (7 - a3) / 7;
    })
  }), F = [
    C(
      "mrr",
      "MRR",
      "MRR",
      "Monthly recurring revenue from active subscriptions, before refunds and credits.",
      "percent",
      D
    ),
    C(
      "accounts",
      "Active accounts",
      "Accounts",
      "Paying workspaces with at least one member active in the last 7 days.",
      "percent",
      R
    ),
    C(
      "activation",
      "Activation rate",
      "Activation",
      "New workspaces that invite a teammate within 7 days, trailing 28 days.",
      "points",
      P
    ),
    C(
      "nrr",
      "Net revenue retention",
      "NRR",
      "Revenue kept and expanded from customers of a year ago, trailing 12 months.",
      "points",
      E
    )
  ], S = Object.fromEntries(F.map((e2) => [e2.id, e2]));
  function Y(e2, r2, a2) {
    let t2 = Math.min(729, Math.max(0, a2)), l2 = Math.min(728, Math.floor(t2)), n2 = e2.daily[l2] + (e2.weekly[l2] - e2.daily[l2]) * r2;
    return n2 + (e2.daily[l2 + 1] + (e2.weekly[l2 + 1] - e2.daily[l2 + 1]) * r2 - n2) * (t2 - l2);
  }
  function O(e2, r2, a2) {
    return "percent" === e2.change ? (r2 / a2 - 1) * 100 : r2 - a2;
  }
  let I = (e2) => 0 === Math.round(10 * Math.abs(e2)) ? "" : e2 > 0 ? "+" : "\u2212", T = (e2, r2) => `${0 === Math.round(10 * Math.abs(r2)) ? "flat" : r2 > 0 ? "up" : "down"} ${Math.abs(r2).toFixed(1)}${"percent" === e2.change ? "%" : " points"}`;
  function G(e2, r2) {
    let a2 = e2.daily[729], t2 = e2.daily[729 - x[r2].days];
    return { now: a2, then: t2, change: O(e2, a2, t2) };
  }
  let U = new Intl.NumberFormat("en-US");
  function V(e2, r2) {
    let a2 = "mrr" === e2.id ? {
      value: Math.round(r2 / 1e4) / 100,
      decimals: 2,
      prefix: "$",
      suffix: "M"
    } : "accounts" === e2.id ? { value: Math.round(r2), decimals: 0, prefix: "", suffix: "" } : {
      value: Math.round(10 * r2) / 10,
      decimals: 1,
      prefix: "",
      suffix: "%"
    };
    return `${a2.prefix}${"accounts" === e2.id ? U.format(a2.value) : a2.value.toFixed(a2.decimals)}${a2.suffix}`;
  }
  let B = (e2) => [0, 1, 2, 3].find(
    (r2) => 1e-6 > Math.abs(Math.round(e2 * 10 ** r2) - e2 * 10 ** r2)
  ) ?? 3;
  function z(e2, r2) {
    let a2 = x[r2].days, t2 = 1 / 0, l2 = -1 / 0;
    for (let r3 = 729 - 2 * a2 + 1; r3 <= 729; r3++)
      t2 = Math.min(t2, e2.daily[r3]), l2 = Math.max(l2, e2.daily[r3]);
    let n2 = 0.03 * Math.max(l2 - t2, 2e-3 * Math.abs(l2));
    t2 -= n2, l2 += n2;
    let i2 = "mrr" === e2.id ? 1e4 : "accounts" === e2.id ? 10 : 0.1, s2 = 10 ** Math.floor(Math.log10((l2 - t2) / 4));
    for (; ; ) {
      for (let e3 of [1, 1.5, 2, 2.5, 3, 4, 5]) {
        let r3 = Math.round(e3 * s2 / i2) * i2, a3 = Math.floor(t2 / r3) * r3;
        if (!(!r3 || Math.abs(r3 - e3 * s2) > 1e-9 * s2) && a3 + 4 * r3 >= l2)
          return { lo: a3, hi: a3 + 4 * r3, step: r3 };
      }
      s2 *= 10;
    }
  }
  var H = a(55809), J = a(80642), Z = a(17240), X = a.n(Z);
  let { duration: K, ease: Q, blur: W } = m.T, q = [...Q.enter], ee = [...Q.standard];
  function er({ active: e2, previous: r2, items: a2, className: l2 }) {
    return (0, t.jsx)("span", {
      className: l2 ? `${X().layers} ${l2}` : X().layers,
      children: a2.map(({ key: a3, node: l3 }) => {
        let n2 = a3 === e2 ? "on" : a3 === r2 ? "out" : "idle";
        return (0, t.jsx)(
          "span",
          {
            className: X().layer,
            "data-state": n2,
            "aria-hidden": "on" !== n2 || void 0,
            children: l3
          },
          a3
        );
      })
    });
  }
  function ea({ id: e2, children: r2, delay: a2 = 0 }) {
    let l2 = !!(0, n.I)();
    return (0, t.jsx)("span", {
      className: X().swap,
      children: (0, t.jsx)(J.N, {
        initial: false,
        children: (0, t.jsx)(
          i.PY1.span,
          {
            className: X().swapItem,
            initial: l2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${W.soft}px)` },
            animate: {
              opacity: 1,
              y: "0em",
              filter: "blur(0px)",
              transitionEnd: { filter: "none" }
            },
            exit: l2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              filter: `blur(${W.subtle}px)`,
              transition: { duration: K.fast, ease: ee }
            },
            transition: l2 ? { duration: K.instant } : { duration: K.standard, ease: q, delay: a2 },
            children: r2
          },
          e2
        )
      })
    });
  }
  let { spring: et, duration: el, stagger: en } = m.T, ei = (e2, r2, a2) => Math.min(a2, Math.max(r2, e2)), es = (e2, r2, a2) => {
    let t2 = 729 - r2 + 1;
    return 52 + (e2 - t2) / Math.max(1e-6, 729 - t2) * (a2 - 52 - 6);
  };
  function eo(e2, r2, a2, t2) {
    let l2 = a2.hi - a2.lo || 1, n2 = (Y(e2, a2.k, t2) - a2.lo) / l2, i2 = (Y(e2, a2.k, t2 - a2.span) - a2.lo) / l2;
    return r2 ? [r2.cur[t2] + (n2 - r2.cur[t2]) * a2.p, r2.prev[t2] + (i2 - r2.prev[t2]) * a2.p] : [n2, i2];
  }
  function ec({ d: e2, label: r2, span: a2, width: l2, y: n2 }) {
    let s2 = (0, H.G)([a2, l2], ([r3, a3]) => es(e2, r3, a3)), o2 = (0, H.G)(
      [s2, l2],
      ([e3, r3]) => ei((Math.min(e3 - 52, r3 - 6 - e3) - 4) / 12, 0, 1)
    );
    return (0, t.jsx)(i.PY1.g, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: el.fast } },
      transition: { duration: el.standard, delay: 0.06 },
      children: (0, t.jsx)(i.PY1.text, {
        className: X().axis,
        style: { x: s2, opacity: o2 },
        y: n2,
        textAnchor: "middle",
        children: r2
      })
    });
  }
  function ed({
    metric: e2,
    range: r2,
    hover: a2,
    onHover: c2,
    label: d2,
    tableId: u2
  }) {
    let p2 = !!(0, n.I)(), h2 = (0, l.useRef)(null), [m2, y2] = (0, l.useState)({ w: 720, h: 260 }), { w: b2, h: j2 } = m2, w2 = j2 - 8 - 28, { days: M2, weekly: $2 } = x[r2], N2 = (0, l.useMemo)(() => z(e2, r2), [e2, r2]), k2 = (0, l.useMemo)(
      () => (function(e3, r3) {
        let a3 = x[e3].days, t2 = r3 / Math.max(1, a3 - 1), l2 = 729 - a3 + 1, n2 = [
          { gap: 84, every: 7, test: (e4) => 1 === f[e4].wd, label: v },
          {
            gap: 84,
            every: 14,
            test: (e4) => 1 === f[e4].wd && (728 - e4) / 7 % 2 == 0,
            label: v
          },
          {
            gap: 84,
            every: 15,
            test: (e4) => 1 === f[e4].day || 15 === f[e4].day,
            label: v
          },
          {
            gap: 48,
            every: 30.4,
            test: (e4) => 1 === f[e4].day,
            label: (e4) => _[f[e4].m]
          },
          {
            gap: 80,
            every: 91,
            test: (e4) => 1 === f[e4].day && f[e4].m % 3 == 0,
            label: (e4) => `${_[f[e4].m]} ${f[e4].y}`
          }
        ], i2 = n2.find((e4) => e4.every * t2 >= e4.gap) ?? n2[n2.length - 1], s2 = [];
        for (let e4 = l2; e4 <= 729; e4++)
          i2.test(e4) && s2.push({ d: e4, label: i2.label(e4) });
        return s2;
      })(r2, b2 - 52 - 6),
      [r2, b2]
    ), L2 = $2 ? 729 - 7 * Math.floor((M2 - 1) / 7) : 729 - M2 + 1, A2 = (0, s.d)(M2), D2 = (0, s.d)(+!!$2), R2 = (0, s.d)(N2.lo), P2 = (0, s.d)(N2.hi), E2 = (0, s.d)(1), C2 = (0, s.d)(b2), F2 = (0, s.d)(j2), S2 = (0, s.d)(-1), Y2 = (0, s.d)(0), O2 = (0, l.useRef)({ metric: e2, range: r2 }), I2 = (0, l.useRef)(null), T2 = (0, H.G)(
      [A2, D2, R2, P2, E2, C2, F2, S2, Y2],
      ([e3, r3, a3, t2, l2, n2, i2, s2]) => (function(e4, r4, a4) {
        let t3 = a4.h - 8 - 28, l3 = (e5) => 8 + (1 - e5) * t3, n3 = Math.max(0, Math.floor(729 - a4.span)), i3 = "", s3 = "";
        for (let t4 = n3; t4 <= 729; t4++) {
          let [o3, c4] = eo(e4, r4, a4, t4), d4 = es(t4, a4.span, a4.w).toFixed(1), u4 = t4 === n3 ? "M" : "L";
          i3 += `${u4}${d4} ${l3(o3).toFixed(1)}`, s3 += `${u4}${d4} ${l3(c4).toFixed(1)}`;
        }
        let o2 = a4.hover >= 0 ? a4.hover : 729, [c3, d3] = eo(e4, r4, a4, o2), [u3] = eo(e4, r4, a4, 729), p3 = es(o2, a4.span, a4.w);
        return {
          cur: i3,
          prev: s3,
          endX: es(729, a4.span, a4.w),
          endY: l3(u3),
          x: p3,
          line: Math.round(p3) + 0.5,
          cy: l3(c3),
          py: l3(d3)
        };
      })(O2.current.metric, I2.current, {
        span: e3,
        k: r3,
        lo: a3,
        hi: t2,
        p: l2,
        w: n2,
        h: i2,
        hover: s2
      })
    ), G2 = (0, H.G)(T2, (e3) => e3.cur), Z2 = (0, H.G)(T2, (e3) => e3.prev), K2 = (0, H.G)(T2, (e3) => e3.endX), Q2 = (0, H.G)(T2, (e3) => e3.endY), W2 = (0, H.G)(T2, (e3) => e3.line), q2 = (0, H.G)(T2, (e3) => e3.x), ee2 = (0, H.G)(T2, (e3) => e3.cy), er2 = (0, H.G)(T2, (e3) => e3.py), el2 = (0, H.G)([q2, C2], ([e3, r3]) => ei(e3, 100, r3 - 6 - 48));
    (0, l.useLayoutEffect)(() => {
      let e3 = h2.current;
      if (!e3) return;
      let r3 = () => {
        let r4 = { w: Math.round(e3.clientWidth), h: Math.round(e3.clientHeight) };
        r4.w && r4.h && (C2.set(r4.w), F2.set(r4.h), y2((e4) => e4.w === r4.w && e4.h === r4.h ? e4 : r4));
      };
      if (r3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(r3);
      return a3.observe(e3), () => a3.disconnect();
    }, [C2, F2]), (0, l.useLayoutEffect)(() => {
      let a3 = O2.current;
      if (a3.metric === e2 && a3.range === r2) return;
      let t2 = a3.metric !== e2, l2 = z(e2, r2), n2 = x[r2], i2 = (e3, r3) => {
        p2 ? e3.jump(r3) : (0, o.i)(e3, r3, et.smooth);
      };
      S2.set(-1), t2 ? (I2.current = p2 ? null : (function(e3, r3, a4) {
        let t3 = new Float64Array(730), l3 = new Float64Array(730);
        for (let n3 = 0; n3 <= 729; n3++)
          [t3[n3], l3[n3]] = eo(e3, r3, a4, n3);
        return { cur: t3, prev: l3 };
      })(a3.metric, I2.current, {
        span: A2.get(),
        k: D2.get(),
        lo: R2.get(),
        hi: P2.get(),
        p: E2.get(),
        w: C2.get(),
        h: F2.get(),
        hover: -1
      }), R2.jump(l2.lo), P2.jump(l2.hi), p2 ? E2.jump(1) : (E2.jump(0), (0, o.i)(E2, 1, {
        ...et.smooth,
        onComplete: () => {
          I2.current = null;
        }
      }))) : (i2(R2, l2.lo), i2(P2, l2.hi)), O2.current = { metric: e2, range: r2 }, i2(A2, n2.days), i2(D2, +!!n2.weekly), Y2.set(Y2.get() + 1);
    }, [e2, r2, p2, A2, D2, R2, P2, E2, C2, F2, S2, Y2]);
    let eu2 = (e3) => {
      S2.set(e3 ?? -1), c2(e3);
    }, ep2 = (e3) => {
      let r3, a3 = e3.currentTarget.getBoundingClientRect(), t2 = 729 - A2.get() + 1;
      eu2(
        (r3 = t2 + (e3.clientX - a3.left) / Math.max(1, a3.width) * (729 - t2), ei($2 ? 729 - 7 * Math.round((729 - r3) / 7) : Math.round(r3), L2, 729))
      );
    }, eh2 = a2 ?? 729, em2 = `${g(eh2)}: ${V(e2, e2.daily[eh2])}. ${g(eh2 - M2)}: ${V(e2, e2.daily[eh2 - M2])}`, ex2 = `${u2}-clip`;
    return (0, t.jsxs)("div", {
      ref: h2,
      className: X().chart,
      children: [
        (0, t.jsxs)("svg", {
          className: X().svg,
          width: b2,
          height: j2,
          viewBox: `0 0 ${b2} ${j2}`,
          role: "img",
          "aria-label": d2,
          "aria-describedby": u2,
          children: [
            (0, t.jsx)("defs", {
              children: (0, t.jsx)("clipPath", {
                id: ex2,
                children: (0, t.jsx)("rect", {
                  x: 49,
                  y: 0,
                  width: Math.max(0, b2 - 52 - 6 + 6),
                  height: j2
                })
              })
            }),
            (0, t.jsxs)("g", {
              "aria-hidden": "true",
              children: [
                Array.from({ length: 5 }, (e3, r3) => {
                  let a3 = Math.round(8 + r3 * w2 / 4) + 0.5;
                  return (0, t.jsx)(
                    "line",
                    {
                      className: 4 === r3 ? X().baseline : X().gridLine,
                      x1: 52,
                      x2: b2 - 6,
                      y1: a3,
                      y2: a3
                    },
                    r3
                  );
                }),
                (0, t.jsx)(J.N, {
                  initial: false,
                  children: k2.map(
                    (e3) => (0, t.jsx)(
                      ec,
                      { d: e3.d, label: e3.label, span: A2, width: C2, y: j2 - 8 },
                      `${e3.d}-${e3.label}`
                    )
                  )
                }),
                (0, t.jsxs)("g", {
                  clipPath: `url(#${ex2})`,
                  children: [
                    (0, t.jsx)(i.PY1.path, { className: X().prevLine, d: Z2 }),
                    (0, t.jsx)(i.PY1.path, { className: X().curLine, d: G2 })
                  ]
                }),
                null === a2 ? (0, t.jsx)(i.PY1.circle, {
                  className: X().endDot,
                  cx: K2,
                  cy: Q2,
                  r: 3.5
                }) : (0, t.jsxs)("g", {
                  children: [
                    (0, t.jsx)(i.PY1.line, {
                      className: X().crossLine,
                      x1: W2,
                      x2: W2,
                      y1: 8,
                      y2: j2 - 28
                    }),
                    (0, t.jsx)(i.PY1.circle, {
                      className: X().prevDot,
                      cx: q2,
                      cy: er2,
                      r: 3
                    }),
                    (0, t.jsx)(i.PY1.circle, {
                      className: X().curDot,
                      cx: q2,
                      cy: ee2,
                      r: 4
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, t.jsx)("div", {
          className: X().yLabels,
          style: { width: 40 },
          "aria-hidden": "true",
          children: Array.from({ length: 5 }, (r3, a3) => {
            var l2, n2;
            let i2 = (l2 = N2.lo + a3 * N2.step, n2 = N2.step, "mrr" === e2.id ? `$${(l2 / 1e6).toFixed(Math.max(1, B(n2 / 1e6)))}M` : "accounts" === e2.id ? U.format(Math.round(l2)) : `${l2.toFixed(B(n2))}%`);
            return (0, t.jsx)(
              "span",
              {
                className: X().yLabel,
                style: { top: Math.round(8 + (4 - a3) * w2 / 4) + 0.5 },
                children: (0, t.jsx)(ea, {
                  id: i2,
                  delay: p2 ? 0 : a3 * en.item,
                  children: i2
                })
              },
              a3
            );
          })
        }),
        (0, t.jsx)("div", {
          className: X().hit,
          style: { left: 52, right: 6, height: j2 - 28 },
          tabIndex: 0,
          role: "slider",
          "aria-label": `Scrub ${e2.label}`,
          "aria-orientation": "horizontal",
          "aria-valuemin": L2,
          "aria-valuemax": 729,
          "aria-valuenow": a2 ?? 729,
          "aria-valuetext": em2,
          onPointerDown: ep2,
          onPointerMove: ep2,
          onPointerLeave: () => eu2(null),
          onFocus: () => {
            0 > S2.get() && eu2(729);
          },
          onBlur: () => eu2(null),
          onKeyDown: (e3) => {
            let r3 = ($2 ? 7 : 1) * (e3.shiftKey ? $2 ? 4 : 7 : 1), t2 = a2 ?? 729, l2 = "ArrowLeft" === e3.key || "ArrowDown" === e3.key ? t2 - r3 : "ArrowRight" === e3.key || "ArrowUp" === e3.key ? t2 + r3 : "Home" === e3.key ? L2 : "End" === e3.key ? 729 : "Escape" === e3.key && null !== a2 ? -1 : null;
            null !== l2 && (e3.preventDefault(), eu2(l2 < 0 ? null : ei(l2, L2, 729)));
          }
        }),
        null !== a2 && (0, t.jsx)(i.PY1.div, {
          className: X().pillAnchor,
          style: { x: el2, top: j2 - 28 + 5 },
          "aria-hidden": "true",
          children: (0, t.jsx)("span", {
            className: X().pill,
            children: g(a2)
          })
        })
      ]
    });
  }
  let { spring: eu, duration: ep, ease: eh, blur: em } = m.T, ex = [...eh.enter], ey = F.map((e2) => e2.id), e_ = "inset 0 0 0 1px var(--metric-edge)", ef = {
    cards: { mrr: "s0", accounts: "s1", activation: "s2", nrr: "s3" },
    panel: "s0",
    serial: 4
  };
  function ev() {
    let e2 = !!(0, n.I)();
    return {
      reduce: e2,
      morph: e2 ? { duration: 0 } : eu.smooth,
      reveal: (r2) => e2 ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: ep.instant }
      } : {
        initial: { opacity: 0, y: 6, filter: `blur(${em.soft}px)` },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transitionEnd: { filter: "none" }
        },
        transition: { duration: ep.standard, ease: ex, delay: r2 }
      }
    };
  }
  function eg({ metric: e2, value: r2, roll: a2 = false }) {
    let l2 = "" === I(r2) ? "flat" : r2 > 0 ? "good" : "bad";
    return (0, t.jsxs)("span", {
      className: X().change,
      "data-tone": l2,
      children: [
        (0, t.jsx)("span", {
          className: X().arrow,
          "aria-hidden": "true",
          children: (0, t.jsx)(d.A, { size: 14, strokeWidth: 1.75 })
        }),
        (0, t.jsx)("span", {
          className: X().num,
          children: a2 ? (0, t.jsx)(p.q, {
            value: Math.round(10 * Math.abs(r2)) / 10,
            decimals: 1,
            prefix: I(r2),
            suffix: "percent" === e2.change ? "%" : "\xA0pts"
          }) : `${I(r2)}${Math.abs(r2).toFixed(1)}${"percent" === e2.change ? "%" : " pts"}`
        })
      ]
    });
  }
  function eb({
    metric: e2,
    range: r2,
    surfaceId: a2,
    lead: l2,
    returning: n2,
    onOpen: s2,
    setRef: o2
  }) {
    let { morph: c2, reveal: d2 } = ev(), u2 = G(e2, r2), p2 = (function(e3, r3) {
      let { days: a3, weekly: t2 } = x[r3], l3 = (t2 ? Array.from({ length: a3 / 7 + 1 }, (e4, r4) => 729 - a3 + 7 * r4) : Array.from({ length: a3 }, (e4, r4) => 729 - a3 + 1 + r4)).map((r4) => e3.daily[r4]), n3 = Math.min(...l3), i2 = Math.max(...l3) - n3 || 1, s3 = l3.map((e4, r4) => [
        r4 / (l3.length - 1) * 100,
        2 + (1 - (e4 - n3) / i2) * 28
      ]);
      return {
        d: s3.map(
          ([e4, r4], a4) => `${a4 ? "L" : "M"}${e4.toFixed(2)} ${r4.toFixed(2)}`
        ).join(""),
        end: s3[s3.length - 1][1] / 32 * 100
      };
    })(e2, r2), h2 = x[r2].words, m2 = n2 ? d2(l2 ? 0.16 : 0.08) : {};
    return (0, t.jsx)("li", {
      className: X().cell,
      "data-lead": l2 || void 0,
      children: (0, t.jsxs)("button", {
        ref: o2,
        type: "button",
        className: X().card,
        onClick: s2,
        "aria-label": `${e2.label}: ${V(e2, u2.now)}, ${T(e2, u2.change)} over ${h2}. Open chart`,
        children: [
          (0, t.jsx)(i.PY1.span, {
            layoutId: a2,
            layoutDependency: "card",
            className: X().surface,
            style: { borderRadius: 16, boxShadow: e_ },
            transition: c2,
            initial: !!n2 && !l2 && { opacity: 0 },
            animate: { opacity: 1 },
            "aria-hidden": "true"
          }),
          (0, t.jsxs)(i.PY1.span, {
            className: X().cardBody,
            ...m2,
            children: [
              (0, t.jsx)("span", {
                className: X().cardLabel,
                children: e2.label
              }),
              (0, t.jsx)("span", {
                className: X().cardValue,
                children: V(e2, u2.now)
              }),
              (0, t.jsxs)("span", {
                className: X().cardChange,
                children: [
                  (0, t.jsx)(eg, { metric: e2, value: u2.change }),
                  (0, t.jsx)("span", { className: X().muted, children: h2 })
                ]
              }),
              (0, t.jsxs)("span", {
                className: X().spark,
                "aria-hidden": "true",
                children: [
                  (0, t.jsx)("svg", {
                    viewBox: "0 0 100 32",
                    preserveAspectRatio: "none",
                    children: (0, t.jsx)("path", { d: p2.d })
                  }),
                  (0, t.jsx)("span", {
                    className: X().sparkEnd,
                    style: { top: `${p2.end}%` }
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  function ej({ active: e2, idOf: r2, panelId: a2, onPick: n2 }) {
    let { reduce: c2 } = ev(), d2 = (0, l.useRef)({}), u2 = (0, l.useRef)(e2), p2 = (0, s.d)(0), h2 = (0, s.d)(0);
    return (0, l.useLayoutEffect)(() => {
      let r3 = u2.current === e2 && 0 === h2.get();
      u2.current = e2;
      let a3 = d2.current[e2];
      if (!a3) return;
      if (r3 || c2) {
        p2.jump(a3.offsetLeft), h2.jump(a3.offsetWidth);
        return;
      }
      let t2 = (0, o.i)(p2, a3.offsetLeft, eu.morph), l2 = (0, o.i)(h2, a3.offsetWidth, eu.morph);
      return () => {
        t2.stop(), l2.stop();
      };
    }, [e2, c2, p2, h2]), (0, l.useLayoutEffect)(() => {
      if ("u" < typeof ResizeObserver) return;
      let e3 = new ResizeObserver(() => {
        let e4 = d2.current[u2.current];
        e4 && (p2.jump(e4.offsetLeft), h2.jump(e4.offsetWidth));
      });
      return Object.values(d2.current).forEach((r3) => r3 && e3.observe(r3)), () => e3.disconnect();
    }, [p2, h2]), (0, t.jsxs)("div", {
      className: X().tabs,
      role: "tablist",
      "aria-label": "Metric",
      onKeyDown: (r3) => {
        let a3 = ey.indexOf(e2), t2 = "ArrowRight" === r3.key ? ey[(a3 + 1) % ey.length] : "ArrowLeft" === r3.key ? ey[(a3 + ey.length - 1) % ey.length] : "Home" === r3.key ? ey[0] : "End" === r3.key ? ey[ey.length - 1] : null;
        t2 && (r3.preventDefault(), n2(t2), d2.current[t2]?.focus());
      },
      children: [
        (0, t.jsx)(i.PY1.span, {
          className: X().tabHighlight,
          style: { x: p2, width: h2 },
          "aria-hidden": "true"
        }),
        F.map(
          (l2) => (0, t.jsxs)(
            "button",
            {
              ref: (e3) => {
                d2.current[l2.id] = e3;
              },
              id: r2(l2.id),
              type: "button",
              role: "tab",
              className: X().tab,
              "aria-selected": l2.id === e2,
              "aria-controls": a2,
              tabIndex: l2.id === e2 ? 0 : -1,
              onClick: () => n2(l2.id),
              children: [
                (0, t.jsx)("span", { children: l2.short }),
                (0, t.jsx)("span", {
                  className: X().tabValue,
                  children: V(l2, l2.daily[729])
                })
              ]
            },
            l2.id
          )
        )
      ]
    });
  }
  let ew = (0, l.memo)(function({ metric: e2, range: r2, id: a2 }) {
    let l2 = x[r2], n2 = l2.weekly ? Array.from(
      { length: l2.days / 7 },
      (e3, r3) => 729 - l2.days + 7 * (r3 + 1)
    ) : Array.from({ length: l2.days }, (e3, r3) => 729 - l2.days + 1 + r3);
    return (0, t.jsx)("div", {
      className: X().srOnly,
      children: (0, t.jsxs)("table", {
        id: a2,
        children: [
          (0, t.jsxs)("caption", {
            children: [
              e2.label,
              ", ",
              b(r2),
              ", with the same day in the previous period"
            ]
          }),
          (0, t.jsx)("thead", {
            children: (0, t.jsxs)("tr", {
              children: [
                (0, t.jsx)("th", { scope: "col", children: "Date" }),
                (0, t.jsx)("th", { scope: "col", children: e2.label }),
                (0, t.jsx)("th", { scope: "col", children: "Previous period" })
              ]
            })
          }),
          (0, t.jsx)("tbody", {
            children: n2.map(
              (r3) => (0, t.jsxs)(
                "tr",
                {
                  children: [
                    (0, t.jsx)("th", { scope: "row", children: g(r3) }),
                    (0, t.jsx)("td", { children: V(e2, e2.daily[r3]) }),
                    (0, t.jsx)("td", { children: V(e2, e2.daily[r3 - l2.days]) })
                  ]
                },
                r3
              )
            )
          })
        ]
      })
    });
  });
  function eM({
    surfaceId: e2,
    active: r2,
    previous: a2,
    range: n2,
    prevRange: s2,
    ids: o2,
    onPick: c2,
    onRange: d2,
    onClose: p2
  }) {
    let { morph: m2, reveal: _2 } = ev(), [f2, j2] = (0, l.useState)(null), [w2, M2] = (0, l.useState)({ active: r2, range: n2 });
    (w2.active !== r2 || w2.range !== n2) && (M2({ active: r2, range: n2 }), j2(null));
    let $2 = (e3) => `${o2}-tab-${e3}`, N2 = `${o2}-panel`, k2 = `${o2}-table`, L2 = (0, l.useRef)(null);
    (0, l.useEffect)(() => {
      L2.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus({ preventScroll: true });
    }, []);
    let A2 = S[r2], D2 = x[n2], R2 = G(A2, n2), P2 = f2 ?? 729, E2 = P2 - D2.days, C2 = D2.weekly ? 729 - D2.days + 7 : 729 - D2.days + 1, Y2 = `Line chart of ${A2.label} over the last ${D2.words}, from ${V(A2, A2.daily[C2])} on ${g(C2)} to ${V(A2, R2.now)} today, ${T(A2, R2.change)} from ${D2.words} ago. A dashed line shows the previous ${D2.words}.`, I2 = (e3) => F.map((a3) => ({ key: a3.id, node: e3(a3, a3.id === r2) }));
    return (0, t.jsxs)("div", {
      className: X().panel,
      children: [
        (0, t.jsx)(i.PY1.div, {
          layoutId: e2,
          layoutDependency: "panel",
          className: X().surface,
          style: { borderRadius: 16, boxShadow: e_ },
          transition: m2,
          "aria-hidden": "true"
        }),
        (0, t.jsxs)(i.PY1.div, {
          ref: L2,
          className: X().panelBody,
          ..._2(0.12),
          children: [
            (0, t.jsx)(ej, { active: r2, idOf: $2, panelId: N2, onPick: c2 }),
            (0, t.jsx)("button", {
              type: "button",
              className: X().close,
              onClick: p2,
              "aria-label": "Close chart",
              "aria-keyshortcuts": "Escape",
              children: (0, t.jsx)(u.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, t.jsxs)("div", {
              className: X().view,
              id: N2,
              role: "tabpanel",
              "aria-labelledby": $2(r2),
              children: [
                (0, t.jsxs)("div", {
                  className: X().readout,
                  children: [
                    (0, t.jsxs)("div", {
                      className: X().figures,
                      children: [
                        (0, t.jsx)("h3", {
                          className: X().panelLabel,
                          children: (0, t.jsx)(er, {
                            active: r2,
                            previous: a2,
                            items: I2((e3) => e3.label)
                          })
                        }),
                        (0, t.jsx)("p", {
                          className: X().panelValue,
                          children: (0, t.jsx)(er, {
                            active: r2,
                            previous: a2,
                            items: I2(
                              (e3, r3) => V(e3, r3 && null !== f2 ? e3.daily[P2] : e3.daily[729])
                            )
                          })
                        }),
                        (0, t.jsx)("p", {
                          className: X().panelChange,
                          children: (0, t.jsx)(er, {
                            active: r2,
                            previous: a2,
                            items: I2((e3, r3) => {
                              let a3, l2;
                              return l2 = (a3 = r3 && null !== f2) ? O(e3, e3.daily[P2], e3.daily[E2]) : G(e3, n2).change, (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(eg, {
                                    metric: e3,
                                    value: l2,
                                    roll: r3 && !a3
                                  }),
                                  (0, t.jsx)("span", {
                                    className: X().muted,
                                    children: a3 ? `${v(P2)} vs ${v(E2)}` : `vs ${D2.words} ago`
                                  })
                                ]
                              });
                            })
                          })
                        })
                      ]
                    }),
                    (0, t.jsx)("div", {
                      className: X().presets,
                      children: (0, t.jsx)(h.A, {
                        label: "Chart range",
                        value: n2,
                        onValueChange: (e3) => d2(e3),
                        options: y.map((e3) => ({
                          value: e3,
                          label: x[e3].label
                        }))
                      })
                    })
                  ]
                }),
                (0, t.jsxs)("p", {
                  className: X().legend,
                  "aria-hidden": "true",
                  children: [
                    (0, t.jsxs)("span", {
                      className: X().key,
                      children: [
                        (0, t.jsx)("span", { className: X().keyLine }),
                        "This period"
                      ]
                    }),
                    (0, t.jsxs)("span", {
                      className: X().key,
                      children: [
                        (0, t.jsx)("span", { className: X().keyDash }),
                        "Previous period"
                      ]
                    }),
                    (0, t.jsx)("span", {
                      className: X().window,
                      children: (0, t.jsx)(er, {
                        active: n2,
                        previous: s2,
                        items: y.map((e3) => ({ key: e3, node: b(e3) }))
                      })
                    })
                  ]
                }),
                (0, t.jsx)(ed, {
                  metric: A2,
                  range: n2,
                  hover: f2,
                  onHover: j2,
                  label: Y2,
                  tableId: k2
                }),
                (0, t.jsx)("p", {
                  className: X().definition,
                  children: (0, t.jsx)(er, {
                    active: r2,
                    previous: a2,
                    items: I2((e3) => e3.definition)
                  })
                }),
                (0, t.jsx)(ew, { metric: A2, range: n2, id: k2 })
              ]
            })
          ]
        })
      ]
    });
  }
  function e$() {
    let { morph: e2 } = ev(), r2 = (0, l.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), a2 = `${r2}-title`, [n2, s2] = (0, l.useState)(false), [o2, d2] = (0, l.useState)({ active: "mrr", previous: null }), [u2, p2] = (0, l.useState)({ now: "30d", previous: null }), [h2, m2] = (0, l.useState)(ef), [y2, _2] = (0, l.useState)(false), [f2, v2] = (0, l.useState)(""), b2 = (0, l.useRef)({}), j2 = (0, l.useRef)(false), { active: w2, previous: M2 } = o2;
    (0, l.useEffect)(() => {
      !n2 && j2.current && (j2.current = false, b2.current[w2]?.focus({ preventScroll: true }));
    }, [n2, w2]);
    let $2 = (e3, r3) => {
      let a3 = S[e3], t2 = G(a3, r3);
      return `${a3.label}, last ${x[r3].words}: ${V(a3, t2.now)}, ${T(a3, t2.change)} from ${x[r3].words} ago`;
    }, N2 = () => {
      j2.current = true, m2((e3) => {
        let r3 = e3.serial;
        return {
          cards: Object.fromEntries(
            ey.map((a3) => [a3, a3 === w2 ? e3.panel : `s${r3++}`])
          ),
          panel: e3.panel,
          serial: r3
        };
      }), s2(false), v2(`Chart closed. ${F.length} metrics shown.`);
    };
    return (0, t.jsxs)("section", {
      className: X().root,
      "aria-labelledby": a2,
      onKeyDown: (e3) => {
        n2 && "Escape" === e3.key && !e3.defaultPrevented && (e3.preventDefault(), N2());
      },
      children: [
        (0, t.jsxs)(c.o, {
          id: r2,
          children: [
            (0, t.jsxs)(i.PY1.header, {
              layout: "position",
              layoutDependency: n2,
              transition: e2,
              className: X().header,
              children: [
                (0, t.jsx)("h2", { id: a2, children: "Growth metrics" }),
                (0, t.jsxs)("p", {
                  children: [
                    "Parcelwise \xB7 updated ",
                    g(729),
                    " at 09:00 UTC"
                  ]
                })
              ]
            }),
            n2 ? (0, t.jsx)(eM, {
              surfaceId: h2.panel,
              active: w2,
              previous: M2,
              range: u2.now,
              prevRange: u2.previous,
              ids: r2,
              onPick: (e3) => {
                e3 !== w2 && (d2({ active: e3, previous: w2 }), v2($2(e3, u2.now)));
              },
              onRange: (e3) => {
                e3 !== u2.now && (p2({ now: e3, previous: u2.now }), v2($2(w2, e3)));
              },
              onClose: N2
            }) : (0, t.jsx)("ul", {
              className: X().grid,
              children: ey.map(
                (e3) => (0, t.jsx)(
                  eb,
                  {
                    metric: S[e3],
                    range: u2.now,
                    surfaceId: h2.cards[e3],
                    lead: y2 && e3 === w2,
                    returning: y2,
                    onOpen: () => {
                      m2((r3) => ({ ...r3, panel: r3.cards[e3] })), d2({ active: e3, previous: null }), s2(true), _2(true), v2($2(e3, u2.now));
                    },
                    setRef: (r3) => {
                      b2.current[e3] = r3;
                    }
                  },
                  e3
                )
              )
            })
          ]
        }),
        (0, t.jsx)("p", {
          className: X().srOnly,
          "aria-live": "polite",
          children: f2
        })
      ]
    });
  }
  let eN = e$;
}

__m(__module,__exports,__require);
});
A.regCss(17240, ".root{box-sizing:border-box;width:min(100%,1100px);min-width:0;margin-inline:auto;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.muted{color:var(--text-muted);font-weight:400}\n.cardChange .muted{flex-basis:100%}\n.num{display:inline-flex;font-variant-numeric:tabular-nums}\n.num>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.header{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:4px 16px;margin-bottom:12px}\n.header h2{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.header p{margin:0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.layers{display:inline-grid;max-width:100%}\n.window .layers{justify-items:end}\n.definition .layers{display:grid}\n.layer{grid-area:1/1;min-width:0;transition:opacity var(--duration-standard) var(--ease-enter) 60ms,filter var(--duration-standard) var(--ease-enter) 60ms,transform var(--duration-standard) var(--ease-enter) 60ms,visibility 0s}\n.layer[data-state=idle],.layer[data-state=out]{opacity:0;visibility:hidden}\n.layer[data-state=out]{filter:blur(2px);transform:translateY(-.2em);transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),visibility 0s var(--duration-fast)}\n.layer[data-state=idle]{filter:blur(4px);transform:translateY(.3em);transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard),transform 0s var(--duration-fast),visibility 0s var(--duration-fast)}\n.panelChange .layer{display:inline-flex;flex-wrap:wrap;align-items:center;gap:2px 8px}\n@media (prefers-reduced-motion:reduce){.arrow,.change,.close,.layer,.layer[data-state],.surface,.tab{transition-duration:0s;transition-delay:0s}\n.swap{display:inline-grid}\n.swapItem{grid-area:1/1;white-space:nowrap}\n.change{display:inline-flex;align-items:center;gap:2px;font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.change[data-tone=good]{color:var(--success)}\n.change[data-tone=bad]{color:var(--danger)}\n.change[data-tone=flat]{color:var(--text-muted)}\n.change[data-tone=bad] .arrow{transform:rotate(90deg)}\n.change[data-tone=flat] .arrow{transform:rotate(45deg)}\n.arrow{display:inline-flex;transition:transform var(--duration-spring) var(--ease-spring)}\n.surface{--metric-edge:var(--border);position:absolute;inset:0;background:var(--surface);pointer-events:none;transition:--metric-edge var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.card:hover .surface{--metric-edge:var(--border-strong)}\n.card:active .surface{--metric-edge:var(--border-strong)}\n.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}\n@container (max-width: 760px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}\n@container (max-width: 440px){.grid{gap:8px}\n.cell{position:relative;display:flex;min-width:0}\n.cell[data-lead]{z-index:1}\n.card{position:relative;display:flex;width:100%;min-width:0;padding:0;border:0;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.cardBody{position:relative;display:flex;flex-direction:column;width:100%;min-width:0;padding:16px 20px}\n.cardBody{padding:14px 16px}\n.cardLabel{color:var(--text-secondary);font-size:var(--text-sm)}\n.cardLabel{min-height:calc(2em * 1.4)}\n.cardValue{margin-top:4px;font-family:var(--font-body);font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.25;font-variant-numeric:tabular-nums}\n.cardValue{font-size:var(--text-lg)}\n.cardChange{display:flex;flex-wrap:wrap;align-items:center;gap:2px 6px;margin:4px 0 12px;font-size:var(--text-xs)}\n.spark{position:relative;display:block;height:28px;margin-top:auto}\n.spark svg{display:block;width:100%;height:100%;overflow:visible}\n.spark path{fill:none;stroke:var(--accent);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke}\n.sparkEnd{position:absolute;right:0;width:6px;height:6px;margin:-3px -3px 0 0;border-radius:50%;background:var(--accent)}\n.panel{position:relative;min-width:0}\n.panelBody{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px 12px;min-width:0;padding:16px 20px 20px}\n.panelBody{row-gap:16px;padding:16px}\n.panelBody{row-gap:16px;padding:12px 14px 16px}\n.tabs{position:relative;isolation:isolate;grid-row:1;grid-column:1;justify-self:start;display:flex;gap:2px;max-width:100%;min-width:0;overflow-x:auto;scrollbar-width:none}\n.tabs::-webkit-scrollbar{display:none}\n.tabs{grid-column:1/-1;justify-self:stretch}\n.tabHighlight{position:absolute;z-index:-1;top:0;bottom:0;left:0;border-radius:var(--radius-control);background:var(--surface-muted);pointer-events:none}\n.tab{display:inline-flex;flex:none;align-items:center;gap:8px;min-height:32px;padding:0 12px;border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-sm);font-weight:500;letter-spacing:inherit;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.tab[aria-selected=true]{color:var(--foreground)}\n.tab[aria-selected=true] .tabValue{color:var(--text-secondary)}\n.tab:hover{color:var(--foreground)}\n.tab{flex:1 0 auto;justify-content:center;padding:8px;font-size:var(--text-xs)}\n@container (max-width: 300px){.tab{padding-inline:5px}\n.tabValue{color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}\n@container (max-width: 640px){.tabValue{display:none}\n.close{position:relative;z-index:1;grid-row:1;grid-column:2;align-self:center;display:grid;place-items:center;width:32px;height:32px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),scale var(--duration-fast) var(--ease-standard)}\n.close:active{background:var(--surface-muted);color:var(--foreground);scale:.95}\n.close:hover{background:var(--surface-muted);color:var(--foreground)}\n.close{grid-row:2;align-self:start;margin:-8px -6px 0 0}\n.view{grid-row:2;grid-column:1/-1;min-width:0}\n.readout{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:16px}\n.readout{grid-template-columns:minmax(0,1fr)}\n.figures{display:grid;justify-items:start;gap:4px;min-width:0}\n.panelLabel{margin:0;color:var(--text-secondary);font-size:var(--text-sm);font-weight:400}\n.panelValue{margin:0;font-family:var(--font-body);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.2;font-variant-numeric:tabular-nums;white-space:nowrap}\n.panelValue{font-size:var(--text-xl)}\n.panelChange{margin:0}\n.legend{display:flex;flex-wrap:wrap;gap:4px 16px;margin:20px 0 8px;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.legend{margin-top:16px}\n.key{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}\n.window{margin-left:auto;color:var(--text-muted);white-space:nowrap}\n.keyDash,.keyLine{flex:none;width:16px;height:0}\n.keyLine{border-top:2px solid var(--accent);border-radius:1px}\n.keyDash{border-top:1.5px dashed var(--text-muted)}\n.definition{margin:12px 0 0;color:var(--text-muted);font-size:var(--text-xs)}\n.chart{position:relative;height:clamp(180px,24cqi,240px);min-width:0;touch-action:pan-y;user-select:none;-webkit-user-select:none}\n.svg{position:absolute;inset:0;display:block;overflow:visible}\n.gridLine{stroke:var(--border);stroke-width:1;shape-rendering:crispEdges}\n.baseline{stroke:var(--border-strong);stroke-width:1;shape-rendering:crispEdges}\n.axis{fill:var(--text-muted)}\n.axis,.yLabels{font-size:var(--text-xs);font-variant-numeric:tabular-nums;letter-spacing:0}\n.yLabels{position:absolute;inset:0 auto 0 0;color:var(--text-muted);line-height:1;pointer-events:none}\n.yLabel{position:absolute;right:0;display:flex;justify-content:flex-end;transform:translateY(-50%);white-space:nowrap}\n.curLine,.prevLine{fill:none;stroke-linejoin:round;stroke-linecap:round}\n.curLine{stroke:var(--accent);stroke-width:2}\n.prevLine{stroke:var(--text-muted);stroke-width:1.25;stroke-dasharray:2 4}\n.curDot,.endDot{fill:var(--accent);stroke:var(--surface);stroke-width:2}\n.prevDot{fill:var(--surface);stroke:var(--text-muted);stroke-width:1.5}\n.crossLine{stroke:var(--border-strong);stroke-width:1;shape-rendering:crispEdges}\n.hit{position:absolute;top:0;cursor:crosshair;touch-action:pan-y}\n.pillAnchor{position:absolute;left:0;width:0;pointer-events:none}\n.pill{position:absolute;top:0;left:0;padding:1px 8px 2px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-raised);color:var(--foreground);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap;transform:translateX(-50%)}", {"root":"root","srOnly":"srOnly","muted":"muted","cardChange":"cardChange","num":"num","header":"header","layers":"layers","window":"window","definition":"definition","layer":"layer","panelChange":"panelChange","arrow":"arrow","change":"change","close":"close","surface":"surface","tab":"tab","swap":"swap","swapItem":"swapItem","card":"card","grid":"grid","cell":"cell","cardBody":"cardBody","cardLabel":"cardLabel","cardValue":"cardValue","spark":"spark","sparkEnd":"sparkEnd","panel":"panel","panelBody":"panelBody","tabs":"tabs","tabHighlight":"tabHighlight","tabValue":"tabValue","view":"view","readout":"readout","figures":"figures","panelLabel":"panelLabel","panelValue":"panelValue","legend":"legend","key":"key","keyDash":"keyDash","keyLine":"keyLine","chart":"chart","svg":"svg","gridLine":"gridLine","baseline":"baseline","axis":"axis","yLabels":"yLabels","yLabel":"yLabel","curLine":"curLine","prevLine":"prevLine","curDot":"curDot","endDot":"endDot","prevDot":"prevDot","crossLine":"crossLine","hit":"hit","pillAnchor":"pillAnchor","pill":"pill"});
A.cssFor("metric-explorer", [17240]);
A.item("metric-explorer", {entry:335, export:"MetricExplorer", kind:"block", tier:"pro", unresolved:[]});
})();