function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { CohortRetention: () => ex, default: () => ep });
  var a = r(95155), n = r(12115), s = r(18310), l = r(80642), i = r(25354), o = r(7890), c = r(55809), h = r(6900), d = r(28245), u = r(22535), m = r(92171), x = r(9751), p = r(66558), j = r(65024), _ = r(7770);
  let g = [
    { value: "all", label: "All", noun: "all workspaces" },
    { value: "self", label: "Self-serve", noun: "self-serve workspaces" },
    { value: "sales", label: "Sales-led", noun: "sales-led workspaces" }
  ], y = [
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
  ], v = (e2, t2 = false) => {
    if (12 === e2) return "Average";
    let r2 = 24307 + e2, a2 = y[r2 % 12], n2 = Math.floor(r2 / 12);
    return t2 ? `${a2} \u2019${String(n2).slice(2)}` : `${a2} ${n2}`;
  }, f = (e2) => 12 === e2 ? 12 : 12 - e2, k = [], w = [];
  for (let e2 = 0; e2 <= 12; e2++)
    for (let t2 = 1; t2 <= f(e2); t2++)
      w[12 * e2 + t2 - 1] = k.length, k.push({ j: k.length, r: e2, k: t2, wave: (e2 + t2 - 1) / 23 });
  let N = (e2, t2) => t2 >= 1 && t2 <= f(e2) ? w[12 * e2 + t2 - 1] : -1;
  function b(e2) {
    var t2;
    let r2 = (t2 = e2.seed, () => {
      let e3 = Math.imul((t2 = t2 + 1831565813 | 0) ^ t2 >>> 15, 1 | t2);
      return (((e3 = e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3) ^ e3) ^ e3 >>> 14) >>> 0) / 4294967296;
    }), a2 = [], n2 = [];
    for (let t3 = 0; t3 < 12; t3++) {
      let s2 = Math.round(e2.size * (1 + e2.growth * t3) * (0.92 + 0.16 * r2())), l2 = e2.m1 + e2.m1Trend * t3 + (e2.dip?.[t3] ?? 0), i2 = e2.floor + e2.floorTrend * t3, o2 = [], c2 = 1, h2 = s2;
      for (let a3 = 1; a3 <= f(t3); a3++)
        h2 = Math.min(
          h2,
          Math.round(s2 * (i2 + (l2 - i2) * c2 + (r2() - 0.5) * 0.02))
        ), o2.push(h2), c2 *= e2.decay;
      a2.push(s2), n2.push(o2);
    }
    return { sizes: a2, retained: n2 };
  }
  let M = b({
    seed: 11,
    size: 300,
    growth: 0.035,
    m1: 0.688,
    m1Trend: 68e-4,
    floor: 0.305,
    floorTrend: 55e-4,
    decay: 0.7,
    dip: { 5: -0.055 }
  }), A = b({
    seed: 29,
    size: 62,
    growth: 0.045,
    m1: 0.925,
    m1Trend: 25e-4,
    floor: 0.715,
    floorTrend: 4e-3,
    decay: 0.8
  }), G = (e2) => e2.reduce((e3, t2) => e3 + t2, 0) / e2.length;
  function S(e2, t2) {
    let r2 = {
      retained: [],
      base: [],
      rate: [],
      sizes: e2,
      total: e2.reduce((e3, t3) => e3 + t3, 0),
      m1: 0,
      m6: 0,
      m1Delta: 0,
      m6Delta: 0
    };
    for (let a3 of k) {
      let n3 = 0, s2 = 0;
      if (12 === a3.r)
        for (let r3 = 0; r3 < 12; r3++)
          a3.k <= f(r3) && (n3 += t2[r3][a3.k - 1], s2 += e2[r3]);
      else n3 = t2[a3.r][a3.k - 1], s2 = e2[a3.r];
      r2.retained.push(n3), r2.base.push(s2), r2.rate.push(n3 / s2);
    }
    let a2 = (e3, t3) => r2.rate[N(e3, t3)], n2 = (e3) => {
      let t3 = Array.from({ length: 12 }, (e4, t4) => t4).filter(
        (t4) => e3 <= f(t4)
      );
      return G(t3.slice(-3).map((t4) => a2(t4, e3))) - G(t3.slice(0, 3).map((t4) => a2(t4, e3)));
    };
    return r2.m1 = a2(12, 1), r2.m6 = a2(12, 6), r2.m1Delta = n2(1), r2.m6Delta = n2(6), r2;
  }
  let $ = {
    self: S(M.sizes, M.retained),
    sales: S(A.sizes, A.retained),
    all: S(
      M.sizes.map((e2, t2) => e2 + A.sizes[t2]),
      M.retained.map((e2, t2) => e2.map((e3, r2) => e3 + A.retained[t2][r2]))
    )
  }, P = [0, 0.2, 0.35, 0.5, 0.65, 0.8], Y = (e2) => {
    let t2 = 0;
    for (let r2 = 1; r2 < P.length; r2++) e2 >= P[r2] && (t2 = r2);
    return t2;
  }, L = new Intl.NumberFormat("en-US"), D = (e2, t2 = 1) => `${(100 * e2).toFixed(t2)}%`, H = (e2) => `${e2 < 0 ? "\u2212" : "+"}${Math.abs(100 * e2).toFixed(1)} pts`;
  function z(e2) {
    let t2 = e2 >= 600, r2 = t2 ? 136 : 56, a2 = t2 ? 30 : 24, n2 = t2 ? 10 : 8, s2 = 12 * a2 + n2 + a2, l2 = Math.max(1, (e2 - r2) / 12);
    return {
      width: e2,
      wide: t2,
      gutter: r2,
      rowH: a2,
      sep: n2,
      plotH: s2,
      height: s2 + 30,
      colW: l2,
      radius: t2 ? 5 : 3,
      values: l2 >= 32
    };
  }
  let E = (e2, t2) => Math.round(e2.gutter + (t2 - 1) * e2.colW), R = (e2, t2) => t2 < 12 ? t2 * e2.rowH : 12 * e2.rowH + e2.sep, C = (e2, t2) => 10 + (1 - t2) * (e2.plotH - 20), T = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), F = (e2, t2, r2) => e2 + (t2 - e2) * r2, I = (e2, t2, r2) => {
    let a2 = T((r2 - e2) / (t2 - e2), 0, 1);
    return a2 * a2 * (3 - 2 * a2);
  }, O = Array.from(
    { length: 13 },
    (e2, t2) => k.filter((e3) => e3.r === t2).map((e3) => e3.j)
  );
  function V(e2, t2) {
    let r2 = t2.x + t2.w + 10, a2 = t2.x - 10 - 200;
    if (r2 + 200 <= e2.width) return { x: r2, y: T(t2.cy - 62, 0, e2.height - 124) };
    if (a2 >= 0) return { x: a2, y: T(t2.cy - 62, 0, e2.height - 124) };
    let n2 = T(t2.cx - 100, 0, Math.max(0, e2.width - 200)), s2 = t2.y - 10 - 124;
    return { x: n2, y: s2 >= 0 ? s2 : Math.min(t2.y + t2.h + 10, e2.height - 124) };
  }
  function W(e2, t2, r2, a2) {
    let n2 = z(t2), s2 = k.map((t3) => {
      let r3 = T(1.5 * e2 - 0.5 * t3.wave, 0, 1), s3 = I(0, 0.6, r3), l3 = I(0.2, 1, r3), i3 = E(n2, t3.k) + 1, o3 = E(n2, t3.k + 1) - 1, c2 = R(n2, t3.r) + 1, h2 = n2.rowH - 2, d2 = 12 === t3.r ? 7 : 5, u2 = a2[t3.j], m2 = (i3 + o3) / 2, x2 = F(c2 + h2 / 2, C(n2, u2), l3), p2 = F(o3 - i3, d2, s3), j2 = F(h2, d2, s3);
      return {
        x: m2 - p2 / 2,
        y: x2 - j2 / 2,
        w: p2,
        h: j2,
        rx: F(n2.radius, d2 / 2, s3),
        cx: m2,
        cy: x2,
        size: s3,
        ink: n2.values ? T(1 - 5 * r3, 0, 1) : 0,
        label: String(Math.round(100 * u2))
      };
    }), l2 = O.map(
      (e3) => e3.map(
        (e4, t3) => `${t3 ? "L" : "M"}${s2[e4].cx.toFixed(1)} ${s2[e4].cy.toFixed(2)}`
      ).join("")
    ), i2 = s2[r2 >= 0 ? r2 : 0], o2 = F(1, 2.75, i2.size);
    return {
      cells: s2,
      paths: l2,
      lines: I(0.3, 0.85, e2),
      labels: 1 - I(0, 0.4, e2),
      grid: I(0.45, 1, e2),
      marker: {
        x: i2.x - o2,
        y: i2.y - o2,
        w: i2.w + 2 * o2,
        h: i2.h + 2 * o2,
        rx: i2.rx + o2
      },
      hoverPath: l2[k[r2 >= 0 ? r2 : 0].r],
      crossX: Math.round(i2.cx) + 0.5,
      crossY: i2.cy,
      panel: V(n2, i2)
    };
  }
  var Q = r(19498), J = r.n(Q);
  let { spring: q, duration: B, ease: X } = _.T, K = [...X.enter], Z = { ...q.smooth, visualDuration: 0.64 }, U = q.smooth, ee = { visualDuration: 0.2, bounce: 0 }, et = [
    { value: "heatmap", label: "Heatmap" },
    { value: "curves", label: "Curves" }
  ], er = Array.from({ length: 13 }, (e2, t2) => t2), ea = Array.from({ length: 12 }, (e2, t2) => t2 + 1), en = [1, 0.75, 0.5, 0.25, 0], es = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2));
  function el(e2, { r: t2, k: r2 }) {
    let a2, n2, s2 = $[e2], l2 = N(t2, r2), i2 = 12 === t2 ? `Average of ${12 - r2 + 1} cohorts` : `${v(t2)} cohort`;
    return `${i2}, month ${r2}: ${D(s2.rate[l2])} retained, ${a2 = s2.retained[l2], L.format(a2)} of ${n2 = s2.base[l2], L.format(n2)} workspaces.`;
  }
  function ei({ text: e2, className: t2 }) {
    let r2 = (0, s.I)();
    return (0, a.jsx)("span", {
      className: [J().rise, t2].filter(Boolean).join(" "),
      children: (0, a.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: (0, a.jsx)(
          i.PY1.span,
          {
            initial: r2 ? { opacity: 0 } : { opacity: 0, y: "0.45em" },
            animate: { opacity: 1, y: 0 },
            exit: r2 ? { opacity: 0 } : { opacity: 0, y: "-0.45em" },
            transition: { duration: r2 ? B.instant : B.standard, ease: K },
            children: e2
          },
          e2
        )
      })
    });
  }
  function eo({ change: e2 }) {
    let t2 = (0, s.I)();
    return (0, a.jsxs)("span", {
      className: J().delta,
      "data-tone": e2 >= 0 ? "good" : "bad",
      children: [
        (0, a.jsx)(i.PY1.span, {
          className: J().deltaIcon,
          initial: false,
          animate: { rotate: e2 >= 0 ? 0 : 90 },
          transition: t2 ? { duration: 0 } : q.snappy,
          children: (0, a.jsx)(x.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, a.jsx)(ei, { text: H(e2), className: J().deltaValue }),
        (0, a.jsx)("span", {
          className: J().deltaContext,
          children: "latest 3 vs first 3 cohorts"
        })
      ]
    });
  }
  function ec({ geo: e2, value: t2, cell: r2, state: s2 }) {
    let [l2, h2] = (0, n.useState)(() => Y(t2.get()));
    (0, o.L)(t2, "change", (e3) => h2(Y(e3)));
    let d2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].x), u2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].y), m2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].w), x2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].h), p2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].rx), j2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].cx), _2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].cy), g2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].ink), y2 = (0, c.G)(e2, (e3) => e3.cells[r2.j].label);
    return (0, a.jsxs)("g", {
      className: J().cell,
      "data-step": l2,
      "data-state": s2,
      "data-avg": 12 === r2.r || void 0,
      children: [
        (0, a.jsx)(i.PY1.rect, { x: d2, y: u2, width: m2, height: x2, rx: p2 }),
        (0, a.jsx)(i.PY1.text, {
          x: j2,
          y: _2,
          dy: ".35em",
          textAnchor: "middle",
          style: { opacity: g2 },
          children: y2
        })
      ]
    });
  }
  function eh({ geo: e2, r: t2, state: r2 }) {
    let n2 = (0, c.G)(e2, (e3) => e3.paths[t2]);
    return (0, a.jsx)(i.PY1.path, {
      className: J().line,
      d: n2,
      "data-state": r2,
      "data-avg": 12 === t2 || void 0
    });
  }
  function ed({ value: e2, x: t2, y: r2 }) {
    let n2 = (0, c.G)(e2, (e3) => {
      let t3;
      return t3 = Math.round(e3), L.format(t3);
    });
    return (0, a.jsx)(i.PY1.text, {
      className: J().size,
      x: t2,
      y: r2,
      dy: ".35em",
      textAnchor: "end",
      children: n2
    });
  }
  function eu({ segment: e2, hover: t2 }) {
    let r2, n2, s2 = $[e2], l2 = N(t2.r, t2.k), i2 = s2.rate[N(12, t2.k)], o2 = s2.rate[l2] - i2;
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsxs)("p", {
          className: J().panelHead,
          children: [
            (0, a.jsx)("span", {
              children: 12 === t2.r ? "Average" : `${v(t2.r)} cohort`
            }),
            (0, a.jsxs)("span", { children: ["Month ", t2.k] })
          ]
        }),
        (0, a.jsx)("p", { className: J().panelValue, children: D(s2.rate[l2]) }),
        (0, a.jsxs)("dl", {
          className: J().panelRows,
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("dt", { children: "Still active" }),
                (0, a.jsxs)("dd", {
                  children: [
                    (r2 = s2.retained[l2], L.format(r2)),
                    " of ",
                    (n2 = s2.base[l2], L.format(n2))
                  ]
                })
              ]
            }),
            12 === t2.r ? (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("dt", { children: "Weighted across" }),
                (0, a.jsxs)("dd", { children: [12 - t2.k + 1, " cohorts"] })
              ]
            }) : (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("dt", { children: "Vs average" }),
                (0, a.jsx)("dd", {
                  "data-tone": 5e-4 > Math.abs(o2) ? void 0 : o2 > 0 ? "good" : "bad",
                  children: H(o2)
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function em({ view: e2 }) {
    let t2 = (0, s.I)();
    return (0, a.jsx)("div", {
      className: J().legendSlot,
      children: (0, a.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: (0, a.jsx)(
          i.PY1.div,
          {
            className: J().legend,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            exit: t2 ? { opacity: 0 } : { opacity: 0, y: -6 },
            transition: { duration: t2 ? B.instant : B.standard, ease: K },
            children: "heatmap" === e2 ? (0, a.jsxs)("div", {
              className: J().scale,
              role: "img",
              "aria-label": "Darker cells retain more. Steps start at 20, 35, 50, 65 and 80 percent retained.",
              children: [
                (0, a.jsx)("span", {
                  className: J().scaleLabel,
                  children: "% retained"
                }),
                (0, a.jsx)("span", {
                  className: J().ramp,
                  "aria-hidden": "true",
                  children: P.map(
                    (e3, t3) => (0, a.jsx)(
                      "span",
                      { className: J().rampStep, "data-step": t3 },
                      e3
                    )
                  )
                }),
                (0, a.jsx)("span", {
                  className: J().rampTicks,
                  "aria-hidden": "true",
                  children: P.slice(1).map(
                    (e3, t3) => (0, a.jsx)(
                      "span",
                      {
                        style: { left: (t3 + 1) * 30 - 1 },
                        children: Math.round(100 * e3)
                      },
                      e3
                    )
                  )
                })
              ]
            }) : (0, a.jsxs)("div", {
              className: J().keys,
              children: [
                (0, a.jsxs)("span", {
                  className: J().key,
                  children: [
                    (0, a.jsx)("span", {
                      className: J().keyAvg,
                      "aria-hidden": "true"
                    }),
                    "Average, size-weighted"
                  ]
                }),
                (0, a.jsxs)("span", {
                  className: J().key,
                  children: [
                    (0, a.jsx)("span", {
                      className: J().keyLine,
                      "aria-hidden": "true"
                    }),
                    "One line per cohort"
                  ]
                })
              ]
            })
          },
          e2
        )
      })
    });
  }
  function ex() {
    let e2 = !!(0, s.I)(), t2 = (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), r2 = `${t2}-title`, l2 = `${t2}-hint`, o2 = `${t2}-table`, [x2, _2] = (0, n.useState)("all"), [y2, w2] = (0, n.useState)("heatmap"), [b2, M2] = (0, n.useState)(720), [A2, G2] = (0, n.useState)(null), [S2, P2] = (0, n.useState)(null), [Y2, F2] = (0, n.useState)(""), [I2] = (0, n.useState)(() => k.map((e3) => (0, h.OQ)($.all.rate[e3.j]))), [O2] = (0, n.useState)(
      () => er.map((e3) => (0, h.OQ)(12 === e3 ? $.all.total : $.all.sizes[e3]))
    ), Q2 = (0, d.d)(0), q2 = (0, d.d)(720), X2 = (0, d.d)(0), K2 = (0, n.useMemo)(() => [Q2, q2, X2, ...I2], [Q2, q2, X2, I2]), ei2 = (0, c.G)(K2, (e3) => W(e3[0], e3[1], e3[2], e3.slice(3))), ex2 = (0, c.G)(ei2, (e3) => e3.lines), ep2 = (0, c.G)(ei2, (e3) => e3.labels), ej = (0, c.G)(ei2, (e3) => e3.grid), e_ = (0, c.G)(ei2, (e3) => e3.marker.x), eg = (0, c.G)(ei2, (e3) => e3.marker.y), ey = (0, c.G)(ei2, (e3) => e3.marker.w), ev = (0, c.G)(ei2, (e3) => e3.marker.h), ef = (0, c.G)(ei2, (e3) => e3.marker.rx), ek = (0, c.G)(ei2, (e3) => e3.hoverPath), ew = (0, c.G)(ei2, (e3) => e3.crossX), eN = (0, c.G)(ei2, (e3) => e3.crossY), eb = (0, c.G)(ei2, (e3) => e3.crossY - 10), eM = (0, c.G)(K2, (e3) => D(e3[3 + Math.max(0, e3[2])])), eA = (0, c.G)(ei2, (e3) => e3.panel.x), eG = (0, c.G)(ei2, (e3) => e3.panel.y), eS = (0, u.z)(eA, ee), e$ = (0, u.z)(eG, ee), eP = e2 ? eA : eS, eY = e2 ? eG : e$, eL = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      let e3 = eL.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([e4]) => {
        let t4 = Math.round(e4.contentRect.width);
        t4 && (M2(t4), q2.set(t4));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [q2]);
    let eD = z(b2), eH = $[x2], ez = "curves" === y2, eE = g.find((e3) => e3.value === x2).noun;
    function eR(e3) {
      if (e3?.r !== A2?.r || e3?.k !== A2?.k) {
        if (e3) {
          let t3 = N(e3.r, e3.k);
          if (!A2) {
            let e4 = V(
              z(q2.get()),
              W(
                Q2.get(),
                q2.get(),
                t3,
                I2.map((e5) => e5.get())
              ).cells[t3]
            );
            eS.jump(e4.x), e$.jump(e4.y);
          }
          X2.set(t3), P2(e3);
        }
        G2(e3);
      }
    }
    let eC = (e3) => {
      let t3 = e3.currentTarget.getBoundingClientRect();
      return (function(e4, t4, r3, a2, n2) {
        if (a2 < e4.gutter || a2 > e4.width || n2 < 0 || n2 > e4.plotH + 6)
          return null;
        let s2 = T(Math.floor((a2 - e4.gutter) / e4.colW) + 1, 1, 12);
        if (t4) {
          let t5 = 12, a3 = Math.abs(C(e4, r3[N(12, s2)]) - n2) - 3;
          for (let l4 = 0; l4 < 12; l4++) {
            if (s2 > f(l4)) continue;
            let i2 = Math.abs(C(e4, r3[N(l4, s2)]) - n2);
            i2 < a3 && (t5 = l4, a3 = i2);
          }
          return { r: t5, k: s2 };
        }
        let l3 = n2 >= 12 * e4.rowH + e4.sep / 2 ? 12 : Math.min(11, Math.floor(n2 / e4.rowH));
        return s2 <= f(l3) ? { r: l3, k: s2 } : null;
      })(eD, ez, eH.rate, e3.clientX - t3.left, e3.clientY - t3.top);
    }, eT = `${ez ? "Retention curves" : "Retention heatmap"} for ${eE}, August 2025 to July 2026 signup cohorts. Month 1 retention averages ${D(eH.m1)} and month 6 retention ${D(eH.m6)}. Newer cohorts retain ${H(eH.m1Delta)} more in month 1 than the first three. Every value is listed in the table that follows.`;
    return (0, a.jsx)("section", {
      className: J().root,
      "aria-labelledby": r2,
      children: (0, a.jsxs)("div", {
        className: J().inner,
        children: [
          (0, a.jsxs)("header", {
            className: J().header,
            children: [
              (0, a.jsxs)("div", {
                className: J().heading,
                children: [
                  (0, a.jsx)("h2", { id: r2, children: "Cohort retention" }),
                  (0, a.jsx)("p", {
                    children: "Workspaces still active each month after signup. Data through Aug 31, 2026."
                  })
                ]
              }),
              (0, a.jsx)(p.A, {
                label: "Segment",
                options: g,
                value: x2,
                onValueChange: function(t3) {
                  if (t3 === x2) return;
                  _2(t3);
                  let r3 = $[t3];
                  I2.forEach((t4, a2) => {
                    e2 ? t4.jump(r3.rate[a2]) : (0, m.i)(t4, r3.rate[a2], {
                      ...U,
                      delay: t4.isAnimating() ? 0 : 0.24 * k[a2].wave
                    });
                  }), O2.forEach((t4, a2) => {
                    let n2 = 12 === a2 ? r3.total : r3.sizes[a2];
                    e2 ? t4.jump(n2) : (0, m.i)(t4, n2, {
                      ...U,
                      delay: t4.isAnimating() ? 0 : a2 / 23 * 0.24
                    });
                  }), F2(
                    `Showing ${g.find((e3) => e3.value === t3).noun}. Month 1 retention ${D(r3.m1)}, month 6 retention ${D(r3.m6)}.`
                  );
                }
              })
            ]
          }),
          (0, a.jsxs)("dl", {
            className: J().kpis,
            children: [
              (0, a.jsxs)("div", {
                className: J().kpi,
                children: [
                  (0, a.jsx)("dt", { children: "Month 1 retention" }),
                  (0, a.jsxs)("dd", {
                    children: [
                      (0, a.jsx)("span", {
                        className: J().value,
                        children: (0, a.jsx)("span", {
                          className: J().num,
                          children: (0, a.jsx)(j.q, {
                            value: Math.round(1e3 * eH.m1) / 10,
                            decimals: 1,
                            suffix: "%"
                          })
                        })
                      }),
                      (0, a.jsx)(eo, { change: eH.m1Delta })
                    ]
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: J().kpi,
                children: [
                  (0, a.jsx)("dt", { children: "Month 6 retention" }),
                  (0, a.jsxs)("dd", {
                    children: [
                      (0, a.jsx)("span", {
                        className: J().value,
                        children: (0, a.jsx)("span", {
                          className: J().num,
                          children: (0, a.jsx)(j.q, {
                            value: Math.round(1e3 * eH.m6) / 10,
                            decimals: 1,
                            suffix: "%"
                          })
                        })
                      }),
                      (0, a.jsx)(eo, { change: eH.m6Delta })
                    ]
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: J().kpi,
                children: [
                  (0, a.jsx)("dt", { children: "New workspaces" }),
                  (0, a.jsxs)("dd", {
                    children: [
                      (0, a.jsx)("span", {
                        className: J().value,
                        children: (0, a.jsx)("span", {
                          className: J().num,
                          children: (0, a.jsx)(j.q, { value: eH.total })
                        })
                      }),
                      (0, a.jsx)("span", {
                        className: J().delta,
                        children: "Signed up Aug 2025 to Jul 2026"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsxs)("div", {
            className: J().toolbar,
            children: [
              (0, a.jsx)(em, { view: y2 }),
              (0, a.jsx)(p.A, {
                label: "Chart view",
                options: et,
                value: y2,
                onValueChange: function(t3) {
                  t3 !== y2 && (w2(t3), e2 ? Q2.jump(+("curves" === t3)) : (0, m.i)(Q2, +("curves" === t3), Z), F2(
                    "curves" === t3 ? "Showing one retention curve per cohort with the weighted average." : "Showing the retention heatmap."
                  ));
                }
              })
            ]
          }),
          (0, a.jsx)("div", {
            ref: eL,
            className: J().chart,
            children: (0, a.jsxs)("div", {
              className: J().plot,
              style: { height: eD.height },
              tabIndex: 0,
              role: "group",
              "aria-label": "Retention by cohort and month",
              "aria-describedby": l2,
              "data-view": y2,
              "data-active": A2 ? "" : void 0,
              onPointerDown: (e3) => eR(eC(e3)),
              onPointerMove: (e3) => eR(eC(e3)),
              onPointerLeave: (e3) => {
                "mouse" === e3.pointerType && eR(null);
              },
              onKeyDown: (e3) => {
                if ("Escape" === e3.key) {
                  A2 && (e3.preventDefault(), eR(null), F2(""));
                  return;
                }
                let t3 = {
                  ArrowUp: [-1, 0],
                  ArrowDown: [1, 0],
                  ArrowLeft: [0, -1],
                  ArrowRight: [0, 1]
                };
                if (!(e3.key in t3) && "Home" !== e3.key && "End" !== e3.key)
                  return;
                e3.preventDefault();
                let r3 = { r: 0, k: 1 };
                if (A2) {
                  let [a2, n2] = t3[e3.key] ?? [0, 0], s2 = es(A2.r + a2, 0, 12), l3 = "Home" === e3.key ? 1 : "End" === e3.key ? f(s2) : A2.k + n2;
                  r3 = { r: s2, k: es(l3, 1, f(s2)) };
                }
                eR(r3), F2(el(x2, r3));
              },
              onFocus: (e3) => {
                !A2 && e3.currentTarget.matches(":focus-visible") && (eR({ r: 0, k: 1 }), F2(el(x2, { r: 0, k: 1 })));
              },
              onBlur: () => eR(null),
              children: [
                (0, a.jsxs)("svg", {
                  className: J().svg,
                  width: b2,
                  height: eD.height,
                  viewBox: `0 0 ${b2} ${eD.height}`,
                  role: "img",
                  "aria-label": eT,
                  children: [
                    (0, a.jsx)(i.PY1.g, {
                      style: { opacity: ej },
                      children: en.map((e3) => {
                        let t3 = Math.round(C(eD, e3)) + 0.5;
                        return (0, a.jsxs)(
                          "g",
                          {
                            children: [
                              (0, a.jsx)("line", {
                                className: 0 === e3 ? J().baseline : J().gridLine,
                                x1: eD.gutter,
                                x2: b2,
                                y1: t3,
                                y2: t3
                              }),
                              (0, a.jsxs)("text", {
                                className: J().axis,
                                x: eD.gutter - 12,
                                y: t3,
                                dy: ".32em",
                                textAnchor: "end",
                                children: [Math.round(100 * e3), "%"]
                              })
                            ]
                          },
                          e3
                        );
                      })
                    }),
                    (0, a.jsx)(i.PY1.g, {
                      style: { opacity: ep2 },
                      children: er.map((e3) => {
                        let t3 = R(eD, e3) + eD.rowH / 2;
                        return (0, a.jsxs)(
                          "g",
                          {
                            className: J().rowLabel,
                            "data-on": A2?.r === e3 || void 0,
                            "data-avg": 12 === e3 || void 0,
                            children: [
                              (0, a.jsx)("text", {
                                x: 0,
                                y: t3,
                                dy: ".35em",
                                children: v(e3, !eD.wide)
                              }),
                              eD.wide && (0, a.jsx)(ed, {
                                value: O2[e3],
                                x: eD.gutter - 14,
                                y: t3
                              })
                            ]
                          },
                          e3
                        );
                      })
                    }),
                    (0, a.jsxs)("g", {
                      children: [
                        (0, a.jsx)("text", {
                          className: J().axis,
                          x: 0,
                          y: eD.plotH + 21,
                          children: eD.wide ? "Months since signup" : "Month"
                        }),
                        ea.map(
                          (e3) => (0, a.jsx)(
                            "text",
                            {
                              className: J().axis,
                              "data-on": A2?.k === e3 || void 0,
                              x: (E(eD, e3) + E(eD, e3 + 1)) / 2,
                              y: eD.plotH + 21,
                              textAnchor: "middle",
                              children: e3
                            },
                            e3
                          )
                        )
                      ]
                    }),
                    A2 && (0, a.jsxs)(i.PY1.g, {
                      className: J().cross,
                      style: { opacity: ex2 },
                      children: [
                        (0, a.jsx)(i.PY1.line, {
                          x1: ew,
                          x2: ew,
                          y1: C(eD, 1) - 6,
                          y2: C(eD, 0)
                        }),
                        (0, a.jsx)(i.PY1.line, {
                          x1: eD.gutter,
                          x2: ew,
                          y1: eN,
                          y2: eN,
                          strokeDasharray: "2 3"
                        })
                      ]
                    }),
                    (0, a.jsxs)(i.PY1.g, {
                      style: { opacity: ex2 },
                      children: [
                        er.map(
                          (e3) => (0, a.jsx)(
                            eh,
                            {
                              geo: ei2,
                              r: e3,
                              state: A2 && 12 !== e3 ? e3 === A2.r ? "on" : "dim" : void 0
                            },
                            e3
                          )
                        ),
                        A2 && 12 !== A2.r && (0, a.jsx)(i.PY1.path, {
                          className: J().line,
                          "data-state": "on",
                          d: ek
                        })
                      ]
                    }),
                    k.map(
                      (e3) => (0, a.jsx)(
                        ec,
                        {
                          geo: ei2,
                          value: I2[e3.j],
                          cell: e3,
                          state: ((e4) => {
                            if (A2)
                              return ez ? e4.r === A2.r ? "on" : 12 === e4.r ? void 0 : "dim" : e4.r === A2.r || e4.k === A2.k ? "on" : "dim";
                          })(e3)
                        },
                        e3.j
                      )
                    ),
                    A2 && (0, a.jsx)(i.PY1.rect, {
                      className: J().marker,
                      x: e_,
                      y: eg,
                      width: ey,
                      height: ev,
                      rx: ef
                    }),
                    A2 && (0, a.jsxs)(i.PY1.g, {
                      className: J().tag,
                      style: { y: eb, opacity: ex2 },
                      children: [
                        (0, a.jsx)("rect", {
                          x: Math.max(2, eD.gutter - 58),
                          y: 0,
                          width: 52,
                          height: 20,
                          rx: 6
                        }),
                        (0, a.jsx)(i.PY1.text, {
                          x: eD.gutter - 12,
                          y: 10,
                          dy: ".35em",
                          textAnchor: "end",
                          children: eM
                        })
                      ]
                    })
                  ]
                }),
                (0, a.jsx)(i.PY1.div, {
                  className: J().panel,
                  style: { x: eP, y: eY },
                  initial: false,
                  animate: { opacity: +!!A2 },
                  transition: { duration: A2 ? B.instant : B.fast },
                  "aria-hidden": "true",
                  children: S2 && (0, a.jsx)(eu, { segment: x2, hover: S2 })
                })
              ]
            })
          }),
          (0, a.jsx)("p", {
            id: l2,
            className: J().srOnly,
            children: "Use the arrow keys to move between cohorts and months, Home and End to jump within a cohort, and Escape to clear."
          }),
          (0, a.jsx)("p", {
            className: J().srOnly,
            "aria-live": "polite",
            children: Y2
          }),
          (0, a.jsx)("div", {
            className: J().srOnly,
            children: (0, a.jsxs)("table", {
              id: o2,
              children: [
                (0, a.jsxs)("caption", {
                  children: [
                    "Share of ",
                    eE,
                    " still active by months since signup"
                  ]
                }),
                (0, a.jsx)("thead", {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)("th", { scope: "col", children: "Cohort" }),
                      (0, a.jsx)("th", {
                        scope: "col",
                        children: "Workspaces"
                      }),
                      ea.map(
                        (e3) => (0, a.jsxs)(
                          "th",
                          { scope: "col", children: ["Month ", e3] },
                          e3
                        )
                      )
                    ]
                  })
                }),
                (0, a.jsx)("tbody", {
                  children: er.map((e3) => {
                    let t3;
                    return (0, a.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, a.jsx)("th", { scope: "row", children: v(e3) }),
                          (0, a.jsx)("td", {
                            children: (t3 = 12 === e3 ? eH.total : eH.sizes[e3], L.format(t3))
                          }),
                          ea.map(
                            (t4) => (0, a.jsx)(
                              "td",
                              {
                                children: t4 <= f(e3) ? D(eH.rate[N(e3, t4)]) : "Not yet measured"
                              },
                              t4
                            )
                          )
                        ]
                      },
                      e3
                    );
                  })
                })
              ]
            })
          })
        ]
      })
    });
  }
  let ep = ex;
}

__m(__module,__exports,__require);
}