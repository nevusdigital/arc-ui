function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { MrrWaterfall: () => ed, default: () => eu });
  var r = a(95155), n = a(12115), l = a(79196), s = a(25354), o = a(18310), i = a(80642), c = a(55809), d = a(61792), u = a(6900), m = a(92171), h = a(9751), p = a(65024), x = a(66558), f = a(7770);
  let w = [
    {
      id: "start",
      name: "Starting MRR",
      axis: "Start",
      short: "Start",
      tone: "total"
    },
    {
      id: "new",
      name: "New business",
      axis: "New",
      short: "New",
      tone: "gain"
    },
    {
      id: "expansion",
      name: "Expansion",
      axis: "Expansion",
      short: "Exp.",
      tone: "gain"
    },
    {
      id: "reactivation",
      name: "Reactivation",
      axis: "Reactivation",
      short: "React.",
      tone: "gain"
    },
    {
      id: "contraction",
      name: "Contraction",
      axis: "Contraction",
      short: "Contr.",
      tone: "loss"
    },
    {
      id: "churn",
      name: "Churn",
      axis: "Churn",
      short: "Churn",
      tone: "loss"
    },
    {
      id: "end",
      name: "Ending MRR",
      axis: "End",
      short: "End",
      tone: "total"
    }
  ], _ = ["new", "expansion", "reactivation", "contraction", "churn"], g = ["Enterprise", "Scale", "Growth", "Starter"], j = (e2) => e2.reduce((e3, t2) => e3 + t2, 0), b = new Intl.NumberFormat("en-US");
  function y(e2, t2, a2) {
    return {
      total: e2,
      accounts: t2,
      plans: [...a2, [e2 - j(a2.map((e3) => e3[0])), t2 - j(a2.map((e3) => e3[1]))]]
    };
  }
  let v = y(412380, 1241, [
    [151200, 22],
    [137760, 164],
    [96880, 486]
  ]), $ = y(430800, 1276, [
    [156900, 23],
    [144120, 171],
    [101450, 503]
  ]), k = y(442080, 1287, [
    [158300, 23],
    [149660, 178],
    [105230, 511]
  ]), N = y(465650, 1337, [
    [167400, 25],
    [157980, 186],
    [110820, 531]
  ]), M = [
    {
      id: "jul",
      label: "Jul",
      long: "July 2025",
      range: "Jul 1 \u2013 31, 2025",
      from: "Jul 1",
      to: "Jul 31",
      start: v,
      end: $,
      moves: {
        new: {
          count: 64,
          total: 18640,
          top: [
            ["Halcyon Health", "Enterprise, annual", 4800],
            ["Kestrel Freight", "Scale, 60 seats", 1740],
            ["Juniper Legal", "Scale, 45 seats", 1310],
            ["Oakridge Schools", "Growth, 30 seats", 990]
          ]
        },
        expansion: {
          count: 41,
          total: 9870,
          top: [
            ["Brightwater Labs", "Growth to Scale", 1520],
            ["Tessellate", "Added 40 seats", 1160],
            ["Quillon Bank", "Added audit logs", 900],
            ["Pinecrest Realty", "Added 25 seats", 725]
          ]
        },
        reactivation: {
          count: 9,
          total: 2140,
          top: [
            ["Fathom Studio", "Back after 4 months, Growth", 597],
            ["Vireo Travel", "Back after 7 months, Growth", 398],
            ["Bramble Foods", "Back after 2 months, Starter", 245]
          ]
        },
        contraction: {
          count: 19,
          total: 4310,
          top: [
            ["Castor Mobility", "Scale to Growth", 1080],
            ["Sable Insurance", "Removed 30 seats", 870],
            ["Lattice Robotics", "Removed SSO add-on", 400]
          ]
        },
        churn: {
          count: 38,
          total: 7920,
          top: [
            ["Copperline Energy", "Moved to an in-house tool", 1990],
            ["Monarch Dental Group", "Budget cut", 1195],
            ["Wren & Wolfe", "Acquired by Rhodes Group", 796],
            ["Arbor & Finch", "Went back to spreadsheets", 398]
          ]
        }
      }
    },
    {
      id: "aug",
      label: "Aug",
      long: "August 2025",
      range: "Aug 1 \u2013 31, 2025",
      from: "Aug 1",
      to: "Aug 31",
      start: $,
      end: k,
      moves: {
        new: {
          count: 52,
          total: 15210,
          top: [
            ["Northpeak Logistics", "Enterprise, annual", 5200],
            ["Solace Clinics", "Scale, 50 seats", 1450],
            ["Harbor Cooperative", "Growth, 35 seats", 1040],
            ["Ember Coffee", "Growth, 20 seats", 597]
          ]
        },
        expansion: {
          count: 48,
          total: 12460,
          top: [
            ["Halcyon Health", "Added 120 seats", 2400],
            ["Tessellate", "Growth to Scale", 1380],
            ["Kestrel Freight", "Added 30 seats", 870],
            ["Oakridge Schools", "Added data retention", 600]
          ]
        },
        reactivation: {
          count: 6,
          total: 1380,
          top: [
            ["Cobalt Studio", "Back after 6 months, Growth", 398],
            ["Ferris Outdoor", "Back after 3 months, Starter", 196]
          ]
        },
        contraction: {
          count: 26,
          total: 6040,
          top: [
            ["Quillon Bank", "Scale to Growth", 1660],
            ["Juniper Legal", "Removed 20 seats", 580],
            ["Brightwater Labs", "Removed audit logs", 450]
          ]
        },
        churn: {
          count: 47,
          total: 11730,
          top: [
            ["Atlas Freightways", "Consolidated vendors", 3980],
            ["Sable Insurance", "Budget cut", 1470],
            ["Morrow Architects", "Moved to a competitor", 796],
            ["Tidewater Fitness", "Closed the business", 398]
          ]
        }
      }
    },
    {
      id: "sep",
      label: "Sep",
      long: "September 2025",
      range: "Sep 1 \u2013 30, 2025",
      from: "Sep 1",
      to: "Sep 30",
      start: k,
      end: N,
      moves: {
        new: {
          count: 71,
          total: 21950,
          top: [
            ["Granite Mutual", "Enterprise, annual", 6400],
            ["Orchard Health", "Scale, 80 seats", 2320],
            ["Pioneer Robotics", "Scale, 55 seats", 1595],
            ["Lark & Co", "Growth, 25 seats", 750]
          ]
        },
        expansion: {
          count: 36,
          total: 8730,
          top: [
            ["Northpeak Logistics", "Added 60 seats", 1200],
            ["Solace Clinics", "Growth to Scale", 1090],
            ["Halcyon Health", "Added SSO", 800]
          ]
        },
        reactivation: {
          count: 12,
          total: 3260,
          top: [
            ["Copperline Energy", "Back after 2 months, Scale", 1990],
            ["Arbor & Finch", "Back after 2 months, Growth", 398],
            ["Marlow Books", "Back after 9 months, Starter", 147]
          ]
        },
        contraction: {
          count: 15,
          total: 3480,
          top: [
            ["Kestrel Freight", "Removed 15 seats", 435],
            ["Harbor Cooperative", "Growth to Starter", 350],
            ["Pinecrest Realty", "Removed SSO add-on", 300]
          ]
        },
        churn: {
          count: 33,
          total: 6890,
          top: [
            ["Castor Mobility", "Moved to a competitor", 1020],
            ["Ember Coffee", "Budget cut", 597],
            ["Vireo Travel", "Seasonal pause", 398]
          ]
        }
      }
    }
  ], S = {
    id: "q3",
    label: "Q3",
    long: "Q3 2025",
    range: "Jul 1 \u2013 Sep 30, 2025",
    from: "Jul 1",
    to: "Sep 30",
    start: v,
    end: N,
    moves: Object.fromEntries(
      _.map((e2) => {
        let t2, a2, r2;
        return [
          e2,
          (t2 = /* @__PURE__ */ new Map(), M.forEach(
            (a3) => a3.moves[e2].top.forEach(([e3, r3, n2]) => {
              let l2 = t2.get(e3);
              l2 ? (l2.amount += n2, l2.months.push(a3.label)) : t2.set(e3, { amount: n2, months: [a3.label], detail: r3 });
            })
          ), a2 = j(M.map((t3) => t3.moves[e2].top.length)), r2 = [...t2].map(([e3, t3]) => [
            e3,
            t3.months.length > 1 ? `${t3.months.join(" and ")} \xB7 ${t3.months.length} changes` : `${t3.months[0]} \xB7 ${t3.detail}`,
            t3.amount
          ]), {
            count: j(M.map((t3) => t3.moves[e2].count)) - (a2 - t2.size),
            total: j(M.map((t3) => t3.moves[e2].total)),
            top: r2
          })
        ];
      })
    )
  };
  function A(e2) {
    return e2.plans.map(([e3, t2], a2) => ({
      key: g[a2],
      name: g[a2],
      detail: `${b.format(t2)} accounts`,
      amount: e3
    }));
  }
  let R = Object.fromEntries(
    [...M, S].map((e2) => [
      e2.id,
      (function(e3) {
        let { start: t2, end: a2, moves: r2 } = e3, n2 = w.map((e4) => {
          let n3, l3, s3;
          if ("start" === e4.id)
            return {
              ...e4,
              amount: t2.total,
              count: t2.accounts,
              entries: A(t2)
            };
          if ("end" === e4.id)
            return {
              ...e4,
              amount: a2.total,
              count: a2.accounts,
              entries: A(a2)
            };
          let o3 = r2[e4.id];
          return {
            ...e4,
            amount: o3.total,
            count: o3.count,
            entries: (l3 = (n3 = [...o3.top].sort((e5, t3) => t3[2] - e5[2]).slice(0, 5)).map(([e5, t3, a3]) => ({
              key: e5,
              name: e5,
              detail: t3,
              amount: a3
            })), (s3 = o3.count - n3.length) > 0 && l3.push({
              key: "rest",
              name: "Other accounts",
              detail: `${b.format(s3)} accounts`,
              amount: o3.total - j(n3.map((e5) => e5[2]))
            }), l3)
          };
        }), l2 = [t2.total];
        _.forEach(
          (e4) => l2.push(
            l2[l2.length - 1] + ("contraction" === e4 || "churn" === e4 ? -r2[e4].total : r2[e4].total)
          )
        );
        let s2 = r2.new.total + r2.expansion.total + r2.reactivation.total, o2 = r2.contraction.total + r2.churn.total;
        return {
          id: e3.id,
          label: e3.label,
          long: e3.long,
          range: e3.range,
          from: e3.from,
          to: e3.to,
          start: t2.total,
          end: a2.total,
          columns: n2,
          levels: l2,
          stats: {
            netNew: a2.total - t2.total,
            growth: (a2.total - t2.total) / t2.total * 100,
            nrr: (t2.total + r2.expansion.total - o2) / t2.total * 100,
            quick: s2 / o2
          }
        };
      })(e2)
    ])
  ), C = [...M, S].map((e2) => ({ value: e2.id, label: e2.label }));
  function E(e2, t2) {
    let a2 = "pct" === t2 ? 100 / e2.start : 1, r2 = e2.levels.map((e3) => e3 * a2), n2 = Math.min(...r2), l2 = Math.max(...r2), s2 = l2 - n2, o2 = n2 - 0.6 * s2, i2 = l2 + 0.06 * s2, c2 = (function(e3, t3) {
      let a3 = 10 ** Math.floor(Math.log10((t3 - e3) / 8));
      for (let r3 of [1, 2, 2.5, 5, 10, 20]) {
        let n3 = a3 * r3;
        if (Math.ceil(t3 / n3) - Math.floor(e3 / n3) <= 8) return n3;
      }
      return 50 * a3;
    })(o2, i2), d2 = Math.floor(o2 / c2) * c2, u2 = Math.ceil(i2 / c2) * c2, m2 = Array.from(
      { length: Math.round((u2 - d2) / c2) + 1 },
      (e3, t3) => +(d2 + t3 * c2).toFixed(4)
    );
    return { lo: d2 / a2, hi: u2 / a2, ticks: m2 };
  }
  var F = a(52452), O = a.n(F);
  let { spring: G, duration: B, ease: L, stagger: I } = f.T, V = [...L.enter], H = [...L.standard], Y = [
    { value: "usd", label: "USD" },
    { value: "pct", label: "% of start" }
  ], P = {
    start: "paying accounts on",
    new: "new accounts",
    expansion: "accounts expanded",
    reactivation: "accounts came back",
    contraction: "accounts downgraded",
    churn: "accounts cancelled",
    end: "paying accounts on"
  }, Q = "M0 0", q = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), T = new Intl.NumberFormat("en-US"), D = (...e2) => e2.filter(Boolean).join(" "), J = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), z = (e2) => "gain" === e2 ? "+" : "loss" === e2 ? "\u2212" : "", K = (e2) => Math.round(J(0.44 * e2, 232, 300)), U = (e2, t2) => "start" === e2.id ? `${P.start} ${t2.from}` : "end" === e2.id ? `${P.end} ${t2.to}` : P[e2.id];
  function W(e2) {
    let t2 = (e2 - 48) / 7, a2 = Math.round(J(0.56 * t2, 12, 56));
    return {
      band: t2,
      bar: a2,
      left: (e3) => Math.round(48 + t2 * e3 + (t2 - a2) / 2)
    };
  }
  function X(e2, t2, a2, r2) {
    let n2 = z(t2);
    return "pct" === a2 ? {
      value: e2 / r2 * 100,
      decimals: 2,
      prefix: n2,
      suffix: "%",
      key: `pct${n2}`
    } : { value: e2, prefix: `${n2}$`, key: `usd${n2}` };
  }
  function Z(e2, t2, a2, r2) {
    return "pct" === a2 ? `${z(t2)}${(e2 / r2 * 100).toFixed(2)}% of starting MRR` : `${z(t2)}${q.format(e2)}`;
  }
  function ee({ children: e2, reduce: t2, ref: a2 }) {
    let n2 = (0, l.tF)();
    return (0, r.jsx)(s.PY1.span, {
      ref: a2,
      className: O().phase,
      "aria-hidden": !n2 || void 0,
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.4em" },
      animate: { opacity: 1, y: "0em" },
      exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.35em",
        transition: { duration: B.fast, ease: H }
      },
      transition: t2 ? { duration: 0 } : { duration: B.standard, ease: V },
      children: e2
    });
  }
  function et({ text: e2, className: t2 }) {
    let a2 = !!(0, o.I)();
    return (0, r.jsx)("span", {
      className: D(O().swap, t2),
      children: (0, r.jsx)(i.N, {
        mode: "popLayout",
        initial: false,
        children: (0, r.jsx)(ee, { reduce: a2, children: e2 }, e2)
      })
    });
  }
  function ea({ fig: e2, className: t2 }) {
    let a2 = !!(0, o.I)();
    return (0, r.jsx)("span", {
      className: D(O().swap, t2),
      children: (0, r.jsx)(i.N, {
        mode: "popLayout",
        initial: false,
        children: (0, r.jsx)(
          ee,
          {
            reduce: a2,
            children: (0, r.jsx)("span", {
              className: O().num,
              children: (0, r.jsx)(p.q, {
                value: e2.value,
                decimals: e2.decimals,
                prefix: e2.prefix,
                suffix: e2.suffix
              })
            })
          },
          e2.key
        )
      })
    });
  }
  function er({
    value: e2,
    unit: t2,
    lo: a2,
    hi: n2,
    base: l2,
    height: i2,
    width: d2
  }) {
    let u2 = !!(0, o.I)(), m2 = (0, c.G)(
      [a2, n2, l2, i2],
      ([a3, r2, n3, l3]) => Math.round(
        30 + (r2 - ("pct" === t2 ? e2 * n3 / 100 : e2)) / Math.max(1e-6, r2 - a3) * (l3 - 34 - 30)
      ) - 0.5
    ), h2 = (0, c.G)(
      [m2, i2],
      ([e3, t3]) => J(1 - Math.max(16 - e3, e3 - (t3 - 34) - 1, 0) / 10, 0, 1)
    );
    return (0, r.jsx)(s.PY1.g, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: u2 ? 0 : B.fast } },
      transition: { duration: u2 ? 0 : B.standard, ease: V, delay: 0.06 * !u2 },
      children: (0, r.jsxs)(s.PY1.g, {
        style: { y: m2, opacity: h2 },
        children: [
          (0, r.jsx)("line", {
            className: O().grid,
            x1: 48,
            x2: d2,
            y1: 0,
            y2: 0
          }),
          (0, r.jsx)("text", {
            className: O().tick,
            x: 38,
            y: 0,
            dy: ".32em",
            textAnchor: "end",
            children: "pct" === t2 ? `${e2}%` : `$${+(e2 / 1e3).toFixed(1)}k`
          })
        ]
      })
    });
  }
  function en({ index: e2, geo: t2, tone: a2, dim: n2 }) {
    let l2 = (0, c.G)(t2, (t3) => t3.bars[e2]);
    return (0, r.jsx)(s.PY1.path, {
      className: O().bar,
      "data-tone": a2,
      "data-dim": n2 || void 0,
      d: l2
    });
  }
  function el({ index: e2, geo: t2, active: a2 }) {
    let n2 = (0, c.G)(t2, (t3) => t3.breaks[e2]);
    return (0, r.jsx)(s.PY1.path, {
      className: O().break,
      "data-active": a2 || void 0,
      d: n2
    });
  }
  function es({ index: e2, geo: t2 }) {
    let a2 = (0, c.G)(t2, (t3) => t3.links[e2]);
    return (0, r.jsx)(s.PY1.path, { className: O().link, d: a2 });
  }
  function eo({ index: e2, geo: t2, format: a2, reduce: n2 }) {
    let o2 = (0, l.tF)(), i2 = (0, c.G)(t2, (t3) => a2.text(t3.labelValue[e2], t3.base));
    return (0, r.jsx)(s.PY1.span, {
      className: O().labelText,
      "aria-hidden": !o2 || void 0,
      initial: n2 ? { opacity: 0 } : { opacity: 0, y: "0.4em" },
      animate: { opacity: 1, y: "0em" },
      exit: n2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.35em",
        transition: { duration: B.fast, ease: H }
      },
      transition: n2 ? { duration: 0 } : { duration: B.standard, ease: V },
      children: i2
    });
  }
  function ei({ index: e2, geo: t2, x: a2, format: n2, below: l2, dim: d2 }) {
    let u2 = !!(0, o.I)(), m2 = (0, c.G)(t2, (t3) => t3.labelY[e2]), h2 = (0, c.G)(t2, (t3) => t3.labelOpacity[e2]);
    return (0, r.jsx)(s.PY1.div, {
      className: O().label,
      style: { x: a2, y: m2, opacity: h2 },
      children: (0, r.jsx)("div", {
        className: O().labelInner,
        "data-below": l2 || void 0,
        "data-dim": d2 || void 0,
        children: (0, r.jsx)(i.N, {
          initial: false,
          children: (0, r.jsx)(
            eo,
            { index: e2, geo: t2, format: n2, reduce: u2 },
            n2.key
          )
        })
      })
    });
  }
  function ec({ entry: e2, column: t2, unit: a2, start: n2, index: i2, ref: c2 }) {
    let d2 = !!(0, o.I)(), u2 = (0, l.tF)(), m2 = t2.amount ? e2.amount / t2.amount * 100 : 0;
    return (0, r.jsxs)(s.PY1.li, {
      ref: c2,
      layout: "position",
      className: O().row,
      "aria-hidden": !u2 || void 0,
      initial: d2 ? { opacity: 0 } : { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, transition: { duration: d2 ? 0 : B.instant } },
      transition: d2 ? { duration: 0 } : {
        layout: G.smooth,
        default: { duration: B.standard, ease: V, delay: i2 * I.item }
      },
      children: [
        (0, r.jsx)("span", {
          className: O().rowName,
          "data-rest": "rest" === e2.key || void 0,
          children: e2.name
        }),
        (0, r.jsx)(ea, {
          className: O().rowAmount,
          fig: X(e2.amount, t2.tone, a2, n2)
        }),
        (0, r.jsx)(et, { className: O().rowDetail, text: e2.detail }),
        (0, r.jsx)("span", {
          className: O().share,
          "aria-hidden": "true",
          children: (0, r.jsx)(s.PY1.span, {
            className: O().shareFill,
            "data-tone": t2.tone,
            initial: { width: "0%" },
            animate: { width: `${m2}%` },
            transition: d2 ? { duration: 0 } : { ...G.morph, delay: i2 * I.item }
          })
        })
      ]
    });
  }
  function ed() {
    let e2 = !!(0, o.I)(), t2 = (0, n.useId)(), a2 = `${t2}-title`, l2 = `${t2}-panel`, [f2, w2] = (0, n.useState)("q3"), [_2, g2] = (0, n.useState)("usd"), [j2, b2] = (0, n.useState)(1), [y2, v2] = (0, n.useState)(null), [$2, k2] = (0, n.useState)(false), [N2, M2] = (0, n.useState)(700), [S2, A2] = (0, n.useState)(""), F2 = (0, n.useRef)(null), B2 = (0, n.useRef)([]), L2 = (0, d.W)(F2, { once: true, amount: 0.35 }), I2 = R[f2], V2 = (0, n.useMemo)(() => E(I2, _2), [I2, _2]), H2 = K(N2), [P2] = (0, n.useState)(() => {
      let e3 = R.q3, t3 = E(e3, "usd");
      return {
        levels: e3.levels.map((e4) => (0, u.OQ)(e4)),
        grow: Array.from({ length: 7 }, () => (0, u.OQ)(0)),
        draw: Array.from({ length: 6 }, () => (0, u.OQ)(0)),
        lo: (0, u.OQ)(t3.lo),
        hi: (0, u.OQ)(t3.hi),
        base: (0, u.OQ)(e3.start),
        width: (0, u.OQ)(700),
        height: (0, u.OQ)(K(700))
      };
    }), D2 = (0, c.G)(
      [
        ...P2.levels,
        ...P2.grow,
        ...P2.draw,
        P2.lo,
        P2.hi,
        P2.width,
        P2.height,
        P2.base
      ],
      (e3) => (function(e4) {
        let t3 = e4.slice(0, 6), a3 = e4.slice(6, 13), r2 = e4.slice(13, 19), [n2, l3, s2, o2, i2] = e4.slice(19), { bar: c2, left: d2 } = W(s2), u2 = o2 - 34, m2 = (e5) => 30 + (l3 - e5) / Math.max(1e-6, l3 - n2) * (u2 - 30), h2 = {
          bars: [],
          breaks: [],
          links: [],
          labelY: [],
          labelOpacity: [],
          labelValue: [],
          base: i2
        };
        for (let e5 = 0; e5 < 7; e5++) {
          let r3 = 0 === e5 || 6 === e5, l4 = r3 ? n2 : t3[e5 - 1], s3 = 6 === e5 ? t3[5] : t3[e5], o3 = l4 + a3[e5] * (s3 - l4), i3 = Math.round(m2(Math.max(l4, o3))), p2 = r3 ? u2 : Math.round(m2(Math.min(l4, o3))), x2 = d2(e5);
          h2.bars.push(
            (function(e6, t4, a4, r4, n3, l5) {
              if (r4 < 0.5) return Q;
              let s4 = Math.min(n3, r4 / 2, a4 / 2), o4 = Math.min(l5, r4 / 2, a4 / 2);
              return `M${e6} ${t4 + s4}a${s4} ${s4} 0 0 1 ${s4} ${-s4}h${a4 - 2 * s4}a${s4} ${s4} 0 0 1 ${s4} ${s4}v${r4 - s4 - o4}a${o4} ${o4} 0 0 1 ${-o4} ${o4}h${-(a4 - 2 * o4)}a${o4} ${o4} 0 0 1 ${-o4} ${-o4}z`;
            })(x2, i3, c2, p2 - i3, r3 ? 3 : 2, 2 * !r3)
          ), h2.breaks.push(
            r3 && p2 - i3 > 26 ? `M${x2} ${u2 - 9}L${x2 + c2} ${u2 - 14}V${u2 - 11}L${x2} ${u2 - 6}z` : Q
          ), h2.labelY.push(s3 < l4 ? p2 + 6 : i3 - 6), h2.labelOpacity.push(J(1.6 * a3[e5] - 0.1, 0, 1)), h2.labelValue.push(r3 ? o3 : Math.abs(o3 - l4));
        }
        for (let e5 = 0; e5 < 6; e5++) {
          let a4 = d2(e5) + c2, n3 = d2(e5 + 1), l4 = Math.round(m2(t3[e5])) - 0.5;
          h2.links.push(
            r2[e5] > 1e-3 ? `M${a4} ${l4}H${a4 + (n3 - a4) * J(r2[e5], 0, 1)}` : Q
          );
        }
        return h2;
      })(e3)
    );
    (0, n.useLayoutEffect)(() => {
      let e3 = F2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([e4]) => M2(Math.max(260, Math.round(e4.contentRect.width)))
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useLayoutEffect)(() => {
      P2.width.set(N2), P2.height.set(H2);
    }, [P2, N2, H2]), (0, n.useEffect)(() => {
      if (!L2) return;
      if (e2) {
        P2.grow.forEach((e3) => e3.jump(1)), P2.draw.forEach((e3) => e3.jump(1));
        return;
      }
      let t3 = [
        ...P2.grow.map(
          (e3, t4) => (0, m.i)(e3, 1, { ...G.smooth, delay: 0.06 * t4 })
        ),
        ...P2.draw.map(
          (e3, t4) => (0, m.i)(e3, 1, {
            ...G.smooth,
            visualDuration: 0.3,
            delay: 0.06 * t4 + 0.2
          })
        )
      ];
      return () => t3.forEach((e3) => e3.stop());
    }, [L2, e2, P2]), (0, n.useEffect)(() => {
      let t3 = (t4, a3) => {
        e2 ? t4.jump(a3) : (t4.get() !== a3 || t4.isAnimating()) && (0, m.i)(t4, a3, G.morph);
      };
      I2.levels.forEach((e3, a3) => t3(P2.levels[a3], e3)), t3(P2.lo, V2.lo), t3(P2.hi, V2.hi), t3(P2.base, I2.start);
    }, [I2, V2, e2, P2]);
    let { band: ee2, bar: eo2, left: ed2 } = W(N2), eu2 = ee2 < 64, em = ee2 < 48, eh = H2 - 34, ep = y2 ?? ($2 ? j2 : null), ex = I2.columns[y2 ?? j2], ef = I2.columns[0], ew = I2.columns[5].count / ef.count * 100, e_ = `MRR waterfall for ${I2.long}. ${I2.columns.map((e3) => `${e3.name} ${Z(e3.amount, e3.tone, "usd", I2.start)}`).join(", ")}.`, eg = (e3) => {
      b2(e3);
      let t3 = I2.columns[e3];
      A2(
        `${t3.name}, ${Z(t3.amount, t3.tone, _2, I2.start)}, ${T.format(t3.count)} ${U(t3, I2)}`
      );
    }, ej = (e3) => {
      let t3 = {
        ArrowRight: j2 + 1,
        ArrowDown: j2 + 1,
        ArrowLeft: j2 - 1,
        ArrowUp: j2 - 1,
        Home: 0,
        End: 6
      };
      if (!(e3.key in t3)) return;
      e3.preventDefault();
      let a3 = (t3[e3.key] + 7) % 7;
      eg(a3), B2.current[a3]?.focus();
    };
    return (0, r.jsxs)("section", {
      className: O().root,
      "aria-labelledby": a2,
      children: [
        (0, r.jsxs)("header", {
          className: O().header,
          children: [
            (0, r.jsxs)("div", {
              className: O().heading,
              children: [
                (0, r.jsx)("h2", { id: a2, children: "MRR movement" }),
                (0, r.jsx)("p", {
                  children: (0, r.jsx)(et, {
                    text: `All plans \xB7 ${I2.range}`
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: O().controls,
              children: [
                (0, r.jsx)(x.A, {
                  label: "Period",
                  options: C,
                  value: f2,
                  onValueChange: (e3) => {
                    let t3 = R[e3];
                    w2(t3.id), A2(
                      `${t3.long}: MRR moved from ${q.format(t3.start)} to ${q.format(t3.end)}, ${t3.stats.growth >= 0 ? "up" : "down"} ${Math.abs(t3.stats.growth).toFixed(1)}%`
                    );
                  }
                }),
                (0, r.jsx)(x.A, {
                  label: "Show values as",
                  options: Y,
                  value: _2,
                  onValueChange: (e3) => {
                    g2(e3), A2(
                      "pct" === e3 ? "Showing values as a percent of starting MRR" : "Showing values in US dollars"
                    );
                  }
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: O().summary,
          children: [
            (0, r.jsxs)("div", {
              className: O().headline,
              children: [
                (0, r.jsx)("p", {
                  className: O().kpiLabel,
                  children: (0, r.jsx)(et, { text: `Ending MRR on ${I2.to}` })
                }),
                (0, r.jsx)("p", {
                  className: O().kpiValue,
                  children: (0, r.jsx)("span", {
                    className: O().num,
                    children: (0, r.jsx)(p.q, {
                      value: I2.end,
                      prefix: "$",
                      animateOnView: true
                    })
                  })
                }),
                (0, r.jsxs)("p", {
                  className: O().delta,
                  children: [
                    (0, r.jsx)(h.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true",
                      className: O().deltaIcon
                    }),
                    (0, r.jsx)(ea, {
                      className: O().deltaValue,
                      fig: { value: I2.stats.netNew, prefix: "+$", key: "net" }
                    }),
                    (0, r.jsx)(ea, {
                      className: O().deltaValue,
                      fig: {
                        value: I2.stats.growth,
                        decimals: 1,
                        prefix: "+",
                        suffix: "%",
                        key: "growth"
                      }
                    }),
                    (0, r.jsx)(et, { text: `since ${I2.from}` })
                  ]
                })
              ]
            }),
            (0, r.jsxs)("dl", {
              className: O().stats,
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Net revenue retention" }),
                    (0, r.jsx)("dd", {
                      children: (0, r.jsx)(ea, {
                        fig: {
                          value: I2.stats.nrr,
                          decimals: 1,
                          suffix: "%",
                          key: "nrr"
                        }
                      })
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Quick ratio" }),
                    (0, r.jsx)("dd", {
                      children: (0, r.jsx)(ea, {
                        fig: {
                          value: I2.stats.quick,
                          decimals: 2,
                          key: "quick"
                        }
                      })
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Logo churn" }),
                    (0, r.jsx)("dd", {
                      children: (0, r.jsx)(ea, {
                        fig: {
                          value: ew,
                          decimals: 1,
                          suffix: "%",
                          key: "logo"
                        }
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: O().body,
          children: [
            (0, r.jsxs)("div", {
              ref: F2,
              className: O().chart,
              style: { height: H2 },
              children: [
                (0, r.jsxs)("svg", {
                  className: O().svg,
                  width: N2,
                  height: H2,
                  viewBox: `0 0 ${N2} ${H2}`,
                  role: "img",
                  "aria-label": e_,
                  children: [
                    null !== ep && (0, r.jsx)("rect", {
                      className: O().band,
                      x: 48 + ee2 * ep + 3,
                      y: 2,
                      width: Math.max(0, ee2 - 6),
                      height: H2 - 4,
                      rx: 12
                    }),
                    (0, r.jsx)("g", {
                      children: (0, r.jsx)(i.N, {
                        initial: false,
                        children: V2.ticks.map(
                          (e3) => (0, r.jsx)(
                            er,
                            {
                              value: e3,
                              unit: _2,
                              lo: P2.lo,
                              hi: P2.hi,
                              base: P2.base,
                              height: P2.height,
                              width: N2
                            },
                            `${_2}:${e3}`
                          )
                        )
                      })
                    }),
                    (0, r.jsx)("line", {
                      className: O().baseline,
                      x1: 48,
                      x2: N2,
                      y1: eh - 0.5,
                      y2: eh - 0.5
                    }),
                    I2.columns.slice(0, -1).map(
                      (e3, t3) => (0, r.jsx)(es, { index: t3, geo: D2 }, e3.id)
                    ),
                    I2.columns.map(
                      (e3, t3) => (0, r.jsx)(
                        en,
                        {
                          index: t3,
                          geo: D2,
                          tone: e3.tone,
                          dim: null !== ep && ep !== t3
                        },
                        e3.id
                      )
                    ),
                    (0, r.jsx)(el, { index: 0, geo: D2, active: 0 === ep }),
                    (0, r.jsx)(el, { index: 6, geo: D2, active: 6 === ep }),
                    (0, r.jsx)(s.PY1.rect, {
                      className: O().marker,
                      x: 0,
                      y: eh + 2,
                      width: eo2,
                      height: 2,
                      rx: 1,
                      initial: false,
                      animate: { x: ed2(j2) },
                      transition: e2 ? { duration: 0 } : G.snappy
                    }),
                    I2.columns.map(
                      (e3, t3) => (0, r.jsx)(
                        "text",
                        {
                          className: O().axis,
                          "data-tight": em || void 0,
                          "data-current": t3 === (y2 ?? j2) || void 0,
                          x: ed2(t3) + eo2 / 2,
                          y: H2 - 10,
                          textAnchor: "middle",
                          children: eu2 ? e3.short : e3.axis
                        },
                        e3.id
                      )
                    )
                  ]
                }),
                (0, r.jsx)("div", {
                  className: O().labels,
                  "data-tight": em || void 0,
                  "aria-hidden": "true",
                  children: I2.columns.map((e3, t3) => {
                    var a3;
                    let n2;
                    return (0, r.jsx)(
                      ei,
                      {
                        index: t3,
                        geo: D2,
                        x: ed2(t3) + eo2 / 2,
                        format: (a3 = e3.tone, n2 = z(a3), "pct" === _2 ? {
                          key: `pct${n2}${eu2}`,
                          text: (e4, t4) => `${n2}${(e4 / Math.max(1e-6, t4) * 100).toFixed(1)}${eu2 ? "" : "%"}`
                        } : {
                          key: `k${n2}${eu2}`,
                          text: (e4) => `${n2}${eu2 ? "" : "$"}${(e4 / 1e3).toFixed(1)}k`
                        }),
                        below: "loss" === e3.tone,
                        dim: null !== ep && ep !== t3
                      },
                      e3.id
                    );
                  })
                }),
                (0, r.jsx)("div", {
                  className: O().hits,
                  role: "radiogroup",
                  "aria-label": "Movements",
                  "aria-controls": l2,
                  onPointerLeave: () => v2(null),
                  onFocus: (e3) => k2(e3.target.matches(":focus-visible")),
                  onBlur: () => k2(false),
                  children: I2.columns.map(
                    (e3, t3) => (0, r.jsx)(
                      "button",
                      {
                        ref: (e4) => {
                          B2.current[t3] = e4;
                        },
                        type: "button",
                        role: "radio",
                        "aria-checked": j2 === t3,
                        tabIndex: j2 === t3 ? 0 : -1,
                        "aria-label": `${e3.name}, ${Z(e3.amount, e3.tone, _2, I2.start)}, ${T.format(e3.count)} ${U(e3, I2)}`,
                        className: O().hit,
                        style: { left: 48 + ee2 * t3, width: ee2, height: H2 },
                        onPointerEnter: (e4) => {
                          "mouse" === e4.pointerType && v2(t3);
                        },
                        onClick: () => eg(t3),
                        onKeyDown: ej
                      },
                      e3.id
                    )
                  )
                })
              ]
            }),
            (0, r.jsxs)("section", {
              id: l2,
              className: O().panel,
              "aria-label": `Accounts behind ${ex.name.toLowerCase()}`,
              children: [
                (0, r.jsxs)("div", {
                  className: O().panelHead,
                  children: [
                    (0, r.jsxs)("h3", {
                      children: [
                        (0, r.jsx)("span", {
                          className: O().swatch,
                          "data-tone": ex.tone,
                          "aria-hidden": "true"
                        }),
                        (0, r.jsx)(et, { text: ex.name })
                      ]
                    }),
                    (0, r.jsx)(ea, {
                      className: O().panelTotal,
                      fig: X(ex.amount, ex.tone, _2, I2.start)
                    })
                  ]
                }),
                (0, r.jsxs)("p", {
                  className: O().panelMeta,
                  children: [
                    (0, r.jsx)("span", {
                      className: O().num,
                      children: (0, r.jsx)(p.q, { value: ex.count })
                    }),
                    " ",
                    (0, r.jsx)(et, { text: U(ex, I2) })
                  ]
                }),
                (0, r.jsx)("ul", {
                  className: O().rows,
                  children: (0, r.jsx)(i.N, {
                    mode: "popLayout",
                    initial: false,
                    children: ex.entries.map(
                      (e3, t3) => (0, r.jsx)(
                        ec,
                        {
                          entry: e3,
                          column: ex,
                          unit: _2,
                          start: I2.start,
                          index: t3
                        },
                        `${ex.id}:${e3.key}`
                      )
                    )
                  })
                }),
                (0, r.jsx)("p", {
                  className: O().hint,
                  children: (0, r.jsx)(et, {
                    text: null === y2 || y2 === j2 ? "Select a bar or use the arrow keys to see its accounts" : "Click the bar to keep this list"
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: O().srOnly,
          children: (0, r.jsxs)("table", {
            children: [
              (0, r.jsxs)("caption", { children: ["MRR movement, ", I2.long] }),
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", { scope: "col", children: "Movement" }),
                    (0, r.jsx)("th", { scope: "col", children: "Amount" }),
                    (0, r.jsx)("th", {
                      scope: "col",
                      children: "Share of starting MRR"
                    }),
                    (0, r.jsx)("th", { scope: "col", children: "Accounts" })
                  ]
                })
              }),
              (0, r.jsx)("tbody", {
                children: I2.columns.map(
                  (e3) => (0, r.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, r.jsx)("th", { scope: "row", children: e3.name }),
                        (0, r.jsx)("td", {
                          children: Z(e3.amount, e3.tone, "usd", I2.start)
                        }),
                        (0, r.jsxs)("td", {
                          children: [
                            (e3.amount / I2.start * 100).toFixed(1),
                            "%"
                          ]
                        }),
                        (0, r.jsx)("td", { children: T.format(e3.count) })
                      ]
                    },
                    e3.id
                  )
                )
              })
            ]
          })
        }),
        (0, r.jsx)("p", {
          className: O().srOnly,
          "aria-live": "polite",
          children: S2
        })
      ]
    });
  }
  let eu = ed;
}

__m(__module,__exports,__require);
}