function(__module,__exports,__require){
"use strict";
const __m = (e, t, i) => {
  "use strict";
  i.r(t), i.d(t, { PivotBuilder: () => ej, default: () => ey });
  var a = i(95155), n = i(12115), l = i(47650), r = i(57793), s = i(25354), o = i(80642), d = i(28245), c = i(92171), u = i(18310), p = i(57700), h = i(50626), m = i(67033), f = i(85974), g = i(93089), b = i(22350), v = i(52427), _ = i(85302), x = i(17082), j = i(5790), y = i(57465), N = i(47421), k = i(23876), w = i(65342), A = i(53896), C = i(76721), S = i(64577), $ = i(9005), L = i(58274), R = i(12363), E = i(77031), M = i(50825), T = i(51288), z = i(72982), F = i(7770);
  let P = {
    sum: "Sum",
    average: "Average",
    count: "Count",
    distinct: "Distinct",
    percent: "% of total"
  }, I = [
    {
      id: "region",
      label: "Region",
      kind: "dimension",
      values: ["Americas", "EMEA", "APAC"]
    },
    {
      id: "country",
      label: "Country",
      kind: "dimension",
      values: [
        "United States",
        "Canada",
        "Mexico",
        "Brazil",
        "Germany",
        "United Kingdom",
        "France",
        "Netherlands",
        "Japan",
        "Australia",
        "Singapore"
      ]
    },
    {
      id: "channel",
      label: "Channel",
      kind: "dimension",
      values: ["Online", "Retail", "Partner"]
    },
    {
      id: "category",
      label: "Category",
      kind: "dimension",
      values: ["Espresso machines", "Grinders", "Brewers", "Accessories"]
    },
    {
      id: "segment",
      label: "Segment",
      kind: "dimension",
      values: ["Enterprise", "Mid-market", "Small business"]
    },
    {
      id: "quarter",
      label: "Quarter",
      kind: "dimension",
      values: ["Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"]
    },
    {
      id: "revenue",
      label: "Revenue",
      kind: "measure",
      format: "currency",
      aggs: ["sum", "average", "count", "percent"]
    },
    {
      id: "units",
      label: "Units",
      kind: "measure",
      format: "number",
      aggs: ["sum", "average", "count", "percent"]
    },
    {
      id: "discount",
      label: "Discount",
      kind: "measure",
      format: "percent",
      aggs: ["average", "sum", "count"]
    },
    {
      id: "customer",
      label: "Customers",
      kind: "measure",
      format: "text",
      aggs: ["distinct", "count", "percent"]
    }
  ];
  function D(e2, t2) {
    let i2 = t2.reduce((e3, [, t3]) => e3 + t3, 0), a2 = e2() * i2;
    for (let [e3, i3] of t2) if ((a2 -= i3) <= 0) return e3;
    return t2[t2.length - 1][0];
  }
  let W = [
    ["United States", "Americas", 34],
    ["Canada", "Americas", 7],
    ["Mexico", "Americas", 4],
    ["Brazil", "Americas", 5],
    ["Germany", "EMEA", 12],
    ["United Kingdom", "EMEA", 10],
    ["France", "EMEA", 6],
    ["Netherlands", "EMEA", 5],
    ["Japan", "APAC", 8],
    ["Australia", "APAC", 6],
    ["Singapore", "APAC", 3]
  ], B = [
    {
      name: "Espresso machines",
      weight: 18,
      price: [1450, 3800],
      units: [1, 2]
    },
    { name: "Grinders", weight: 26, price: [240, 890], units: [1, 3] },
    { name: "Brewers", weight: 28, price: [95, 420], units: [1, 4] },
    { name: "Accessories", weight: 28, price: [18, 140], units: [2, 14] }
  ], H = (function() {
    let e2, t2 = (e2 = 2025, () => {
      e2 |= 0;
      let t3 = Math.imul((e2 = e2 + 1831565813 | 0) ^ e2 >>> 15, 1 | e2);
      return (((t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3) ^ t3 >>> 14) >>> 0) / 4294967296;
    }), i2 = Array.from({ length: 340 }, (e3, i3) => {
      let [a3, n2] = D(
        t2,
        W.map(([e4, t3, i4]) => [[e4, t3], i4])
      ), l2 = D(t2, [
        ["Enterprise", 20],
        ["Mid-market", 35],
        ["Small business", 45]
      ]);
      return {
        id: `RC-${String(1040 + 7 * i3)}`,
        country: a3,
        region: n2,
        segment: l2
      };
    }), a2 = [];
    for (let e3 = 0; e3 < 1184; e3++) {
      let e4 = i2[Math.floor(t2() * i2.length)], n2 = D(t2, [
        ["Q1 2025", 21],
        ["Q2 2025", 23],
        ["Q3 2025", 24],
        ["Q4 2025", 32]
      ]), l2 = D(
        t2,
        "Enterprise" === e4.segment ? [
          ["Online", 20],
          ["Retail", 10],
          ["Partner", 70]
        ] : [
          ["Online", 52],
          ["Retail", 32],
          ["Partner", 16]
        ]
      ), r2 = D(
        t2,
        B.map((e5) => [e5, e5.weight])
      ), s2 = "Enterprise" === e4.segment ? 3 : "Mid-market" === e4.segment ? 1.6 : 1, o2 = Math.max(
        1,
        Math.round((r2.units[0] + t2() * (r2.units[1] - r2.units[0])) * s2)
      ), d2 = r2.price[0] + t2() * (r2.price[1] - r2.price[0]), c2 = Math.round(
        (("Partner" === l2 ? 8 + 10 * t2() : "Retail" === l2 ? 4 * t2() : 8 * t2()) + 4 * ("Enterprise" === e4.segment)) * 10
      ) / 10;
      a2.push({
        region: e4.region,
        country: e4.country,
        channel: l2,
        category: r2.name,
        segment: e4.segment,
        quarter: n2,
        revenue: Math.round(d2 * o2 * (1 - c2 / 100)),
        units: o2,
        discount: c2,
        customer: e4.id
      });
    }
    return a2;
  })(), O = {
    filters: [{ id: "f-channel", field: "channel" }],
    columns: [{ id: "c-quarter", field: "quarter" }],
    rows: [
      { id: "r-region", field: "region" },
      { id: "r-country", field: "country" }
    ],
    values: [{ id: "v-revenue", field: "revenue", agg: "sum", heat: true }]
  }, U = { filters: [], columns: [], rows: [], values: [] }, Y = (e2) => new Map(e2.map((e3) => [e3.id, e3]));
  function q(e2, t2) {
    let i2 = /* @__PURE__ */ new Set();
    for (let a3 of t2) i2.add(String(a3[e2.id]));
    let a2 = e2.values ?? [];
    return [
      ...a2.filter((e3) => i2.has(e3)),
      ...[...i2].filter((e3) => !a2.includes(e3)).sort((e3, t3) => e3.localeCompare(t3, "en"))
    ];
  }
  let V = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), G = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
  function Q(e2) {
    return e2.implicit ? "Orders" : `${e2.field.label} (${P[e2.agg].toLowerCase()})`;
  }
  let J = (e2) => {
    let t2 = "number" == typeof e2 ? Number.isFinite(e2) ? String(Math.round(100 * e2) / 100) : "" : e2;
    return /[",\n]/.test(t2) ? `"${t2.replace(/"/g, '""')}"` : t2;
  };
  var K = i(57168), X = i.n(K);
  let { spring: Z, duration: ee, ease: et } = F.T, ei = [...et.enter], ea = [...et.exit], en = [...et.standard], el = { ...Z.smooth, visualDuration: 0.3 }, er = [
    {
      id: "filters",
      label: "Filters",
      hint: "Drop a dimension to filter",
      accepts: "dimension"
    },
    {
      id: "columns",
      label: "Columns",
      hint: "Drop a dimension",
      accepts: "dimension"
    },
    {
      id: "rows",
      label: "Rows",
      hint: "Drop a dimension",
      accepts: "dimension"
    },
    {
      id: "values",
      label: "Values",
      hint: "Drop a measure",
      accepts: "measure"
    }
  ], es = {
    filters: "filters",
    columns: "columns",
    rows: "rows",
    values: "values"
  }, eo = {
    region: h.A,
    country: m.A,
    channel: f.A,
    category: g.A,
    segment: b.A,
    quarter: v.A,
    revenue: _.A,
    units: x.A,
    discount: j.A,
    customer: y.A
  };
  function ed({ id: e2, kind: t2, size: i2 = 16 }) {
    let n2 = eo[e2] ?? ("measure" === t2 ? N.A : k.A);
    return (0, a.jsx)(n2, { size: i2, strokeWidth: 1.75, "aria-hidden": "true" });
  }
  let ec = (e2, t2) => er.find((i2) => e2[i2.id].some((e3) => e3.id === t2))?.id ?? null, eu = (e2, t2) => ["filters", "columns", "rows"].find(
    (i2) => e2[i2].some((e3) => e3.field === t2)
  ) ?? null;
  function ep(e2, t2) {
    let i2 = ec(e2, t2);
    return i2 ? { ...e2, [i2]: e2[i2].filter((e3) => e3.id !== t2) } : e2;
  }
  function eh(e2, t2, i2, a2) {
    let n2 = [...e2[t2]];
    return n2.splice(Math.max(0, Math.min(i2, n2.length)), 0, a2), { ...e2, [t2]: n2 };
  }
  function em(e2, t2, i2) {
    let a2 = ec(e2, t2);
    return a2 ? { ...e2, [a2]: e2[a2].map((e3) => e3.id === t2 ? { ...e3, ...i2 } : e3) } : e2;
  }
  function ef(e2, t2) {
    return t2.target ? eh(ep(e2, t2.chip.id), t2.target, t2.index, t2.chip) : t2.remove ? ep(e2, t2.chip.id) : e2;
  }
  function eg({ value: e2, spec: t2, heat: i2, shaded: l2, reduce: r2 }) {
    let o2 = (function(e3, t3) {
      if (!Number.isFinite(e3)) return "";
      if ("count" === t3.agg || "distinct" === t3.agg) return V.format(e3);
      if ("percent" === t3.agg) return `${G.format(e3)}%`;
      switch (t3.field.format) {
        case "currency":
          return `$${V.format(e3)}`;
        case "percent":
          return `${G.format(e3)}%`;
        default:
          return "average" === t3.agg ? G.format(e3) : V.format(e3);
      }
    })(e2, t2), [d2] = (0, n.useState)(o2);
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", {
          className: X().heat,
          style: { opacity: null !== i2 && l2 ? 0.08 + 0.92 * i2 : 0 },
          "aria-hidden": "true"
        }),
        (0, a.jsx)(
          s.PY1.span,
          {
            className: X().value,
            initial: !r2 && o2 !== d2 && { opacity: 0, y: 5 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: ee.standard, ease: ei },
            children: o2 || (0, a.jsx)("span", {
              className: X().srOnly,
              children: "No orders"
            })
          },
          o2
        )
      ]
    });
  }
  function eb({ cells: e2, result: t2, row: i2, reduce: n2, heatRow: l2 }) {
    let { cols: r2, values: s2, range: o2, colFields: d2 } = t2;
    return (0, a.jsx)(a.Fragment, {
      children: r2.map(
        (t3, r3) => s2.map((c2, u2) => {
          let p2 = e2[r3 * s2.length + u2], h2 = "leaf" === t3.kind || !d2.length, m2 = o2[u2], f2 = c2.heat && l2 && h2 && Number.isFinite(p2), g2 = c2.heat ? f2 ? m2.max > m2.min ? (p2 - m2.min) / (m2.max - m2.min) : 1 : 0 : null;
          return (0, a.jsx)(
            "div",
            {
              role: "cell",
              className: X().cell,
              "data-total": "leaf" !== t3.kind && d2.length ? "" : void 0,
              "data-first-total": "total" === t3.kind && 0 === u2 && d2.length ? "" : void 0,
              children: (0, a.jsx)(eg, {
                value: p2,
                spec: c2,
                heat: g2,
                shaded: !!f2,
                reduce: n2
              })
            },
            `${i2}-${t3.key}-${c2.id}`
          );
        })
      )
    });
  }
  function ev({
    result: e2,
    collapsed: t2,
    onToggle: i2,
    onToggleAll: n2,
    reduce: l2
  }) {
    let {
      rowFields: r2,
      colFields: d2,
      values: c2,
      cols: u2,
      headers: p2,
      measureRow: h2,
      tree: m2,
      total: f2
    } = e2, g2 = new Set(t2), b2 = [], v2 = (e3) => e3.forEach((e4) => {
      b2.push(e4), e4.leaf || g2.has(e4.key) || v2(e4.children);
    });
    v2(m2);
    let _2 = u2.length * c2.length, x2 = {
      gridTemplateColumns: `minmax(var(--first), 1.3fr) repeat(${_2}, minmax(var(--col), 1fr))`
    }, j2 = [
      r2.map((e3) => e3.id).join(","),
      u2.map((e3) => e3.key).join(","),
      c2.map((e3) => e3.id).join(",")
    ].join("|"), y2 = r2.length > 1, N2 = m2.some((e3) => g2.has(e3.key)), k2 = r2.map((e3) => e3.label).join(" / "), S2 = h2 || !d2.length, $2 = p2.length + +!!S2, L2 = l2 ? { duration: 0 } : Z.smooth, R2 = (e3) => e3 === $2 - 1 ? (0, a.jsxs)("div", {
      role: "columnheader",
      className: X().corner,
      children: [
        y2 && (0, a.jsx)("button", {
          type: "button",
          className: X().expandAll,
          onClick: n2,
          "aria-label": N2 ? "Expand all rows" : "Collapse all rows",
          children: N2 ? (0, a.jsx)(w.A, {
            size: 15,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }) : (0, a.jsx)(A.A, {
            size: 15,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, a.jsx)("span", { className: X().cornerLabel, children: k2 })
      ]
    }) : (0, a.jsx)("div", {
      role: "columnheader",
      className: X().corner,
      "data-quiet": "",
      children: 0 === e3 && 1 === c2.length ? (0, a.jsx)("span", {
        className: X().cornerLabel,
        children: Q(c2[0])
      }) : null
    });
    return (0, a.jsx)(o.N, {
      mode: "popLayout",
      initial: false,
      children: (0, a.jsxs)(
        s.PY1.div,
        {
          role: "table",
          "aria-label": "Pivot table",
          "aria-colcount": _2 + 1,
          className: X().table,
          style: { "--n": _2 },
          initial: l2 ? { opacity: 0 } : { opacity: 0, y: 6 },
          animate: { opacity: 1, y: 0 },
          exit: {
            opacity: 0,
            transition: { duration: l2 ? 0 : ee.fast, ease: en }
          },
          transition: { duration: l2 ? ee.instant : ee.standard, ease: ei },
          children: [
            (0, a.jsxs)("div", {
              role: "rowgroup",
              className: X().head,
              children: [
                p2.map(
                  (e3, t3) => (0, a.jsxs)(
                    "div",
                    {
                      role: "row",
                      className: X().row,
                      style: x2,
                      children: [
                        R2(t3),
                        e3.map(
                          (e4) => (0, a.jsx)(
                            "div",
                            {
                              role: "columnheader",
                              "aria-colspan": e4.span,
                              className: X().colHead,
                              "data-kind": e4.kind,
                              style: { gridColumn: `span ${e4.span}` },
                              children: (0, a.jsx)("span", {
                                className: X().colLabel,
                                title: e4.label || void 0,
                                children: e4.label
                              })
                            },
                            e4.key
                          )
                        )
                      ]
                    },
                    t3
                  )
                ),
                S2 && (0, a.jsxs)("div", {
                  role: "row",
                  className: X().row,
                  style: x2,
                  children: [
                    R2($2 - 1),
                    u2.map(
                      (e3) => c2.map(
                        (t3) => (0, a.jsx)(
                          "div",
                          {
                            role: "columnheader",
                            className: X().colHead,
                            "data-kind": "leaf" !== e3.kind && d2.length ? "subtotal" : "leaf",
                            children: (0, a.jsxs)("span", {
                              className: X().measure,
                              children: [
                                (0, a.jsx)("span", {
                                  className: X().colLabel,
                                  children: t3.implicit ? "Orders" : t3.field.label
                                }),
                                !t3.implicit && (0, a.jsx)("span", {
                                  className: X().agg,
                                  children: P[t3.agg]
                                })
                              ]
                            })
                          },
                          `${e3.key}-${t3.id}`
                        )
                      )
                    )
                  ]
                })
              ]
            }),
            (0, a.jsx)("div", {
              role: "rowgroup",
              className: X().bodyRows,
              children: (0, a.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: b2.map((t3) => {
                  let n3 = !g2.has(t3.key);
                  return (0, a.jsxs)(
                    s.PY1.div,
                    {
                      role: "row",
                      layout: "position",
                      className: X().row,
                      "data-group": t3.leaf ? void 0 : "",
                      "data-depth": t3.depth,
                      style: x2,
                      initial: l2 ? { opacity: 0 } : { opacity: 0, y: -6 },
                      animate: { opacity: 1, y: 0 },
                      exit: {
                        opacity: 0,
                        transition: { duration: l2 ? 0 : ee.exit, ease: ea }
                      },
                      transition: L2,
                      children: [
                        (0, a.jsx)("div", {
                          role: "rowheader",
                          className: X().rowHead,
                          style: { "--depth": t3.depth },
                          children: t3.leaf ? (0, a.jsx)("span", {
                            className: X().rowLabel,
                            title: t3.label,
                            children: t3.label
                          }) : (0, a.jsxs)("button", {
                            type: "button",
                            className: X().disclose,
                            "aria-expanded": n3,
                            onClick: () => i2(t3),
                            children: [
                              (0, a.jsx)(C.A, {
                                className: X().chevron,
                                "data-open": n3 ? "" : void 0,
                                size: 15,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, a.jsx)("span", {
                                className: X().rowLabel,
                                title: t3.label,
                                children: t3.label
                              })
                            ]
                          })
                        }),
                        (0, a.jsx)(eb, {
                          cells: t3.cells,
                          result: e2,
                          row: t3.key,
                          reduce: l2,
                          heatRow: t3.leaf
                        })
                      ]
                    },
                    t3.key
                  );
                })
              })
            }),
            (0, a.jsx)("div", {
              role: "rowgroup",
              className: X().foot,
              children: (0, a.jsxs)("div", {
                role: "row",
                className: X().row,
                style: x2,
                "data-grand": "",
                children: [
                  (0, a.jsx)("div", {
                    role: "rowheader",
                    className: X().rowHead,
                    children: (0, a.jsx)("span", {
                      className: X().rowLabel,
                      children: r2.length ? "Grand total" : "Total"
                    })
                  }),
                  (0, a.jsx)(eb, {
                    cells: f2,
                    result: e2,
                    row: "grand",
                    reduce: l2,
                    heatRow: !r2.length
                  })
                ]
              })
            })
          ]
        },
        j2
      )
    });
  }
  function e_({ children: e2, label: t2 }) {
    return (0, a.jsx)(r.ZL, {
      children: (0, a.jsx)(r.UC, {
        className: X().menu,
        sideOffset: 6,
        align: "start",
        collisionPadding: 12,
        loop: true,
        "aria-label": t2,
        children: e2
      })
    });
  }
  let ex = ({ children: e2, onSelect: t2, disabled: i2, danger: n2 }) => (0, a.jsx)(r.q7, {
    className: X().item,
    "data-tone": n2 ? "danger" : void 0,
    disabled: i2,
    onSelect: t2,
    children: e2
  });
  function ej({
    records: e2 = H,
    fields: t2 = I,
    defaultLayout: i2 = O,
    defaultExclusions: o2 = {},
    title: h2 = "Sales pivot",
    description: m2 = "Ridgeline Coffee orders, January to December 2025",
    fileName: f2 = "ridgeline-sales-pivot.csv",
    onLayoutChange: g2,
    className: b2
  }) {
    let v2, _2, x2, j2, y2 = (0, u.I)() ?? false, N2 = (0, n.useId)().replace(/:/g, ""), [w2, A2] = (0, n.useState)(i2), [C2, F2] = (0, n.useState)(o2), [D2, W2] = (0, n.useState)([]), [B2, V2] = (0, n.useState)(null), [G2, K2] = (0, n.useState)(null), [et2, ei2] = (0, n.useState)(""), [en2, eo2] = (0, n.useState)(false), [eg2, eb2] = (0, n.useState)(0), ey2 = (0, n.useRef)(null), eN = (0, n.useRef)(null), ek = (0, n.useRef)(0), ew = (0, n.useRef)({}), eA = (0, n.useRef)(null), eC = (0, n.useRef)(0), eS = (0, d.d)(0), e$ = (0, d.d)(0), eL = (0, d.d)(1), eR = (0, d.d)(1), {
      scrollRef: eE,
      sizerRef: eM,
      height: eT
    } = (v2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), x2 = (0, d.d)("auto"), j2 = (0, n.useRef)(false), (0, n.useEffect)(() => {
      let e3 = v2.current, t3 = _2.current;
      if (!e3 || !t3) return;
      let i3 = () => {
        let i4 = parseFloat(getComputedStyle(e3).maxHeight) || 1 / 0, a3 = e3.offsetHeight - e3.clientHeight, n2 = Math.min(t3.offsetHeight + a3, i4), l2 = x2.get();
        l2 !== n2 && (!j2.current || y2 || "auto" === l2 ? x2.jump(n2) : (0, c.i)(x2, n2, Z.smooth), j2.current = true);
      }, a2 = new ResizeObserver(i3);
      return a2.observe(t3), i3(), () => a2.disconnect();
    }, [x2, y2]), { scrollRef: v2, sizerRef: _2, height: x2 }), ez = (0, n.useMemo)(() => new Map(t2.map((e3) => [e3.id, e3])), [t2]), eF = (e3) => {
      ey2.current = e3, V2(e3);
    };
    (0, n.useEffect)(
      () => () => {
        window.clearTimeout(eC.current), eN.current?.cleanup();
      },
      []
    );
    let eP = (0, n.useMemo)(() => B2 ? ef(w2, B2) : w2, [w2, B2]), eI = (0, n.useMemo)(
      () => Object.fromEntries(
        eP.filters.map((e3) => [e3.field, C2[e3.field] ?? []])
      ),
      [eP.filters, C2]
    ), eD = (0, n.useMemo)(() => {
      let i3, a2, n2, l2, r2, s2, o3, d2, c2, u2, p2, h3, m3, f3, g3, b3, v3, _3, x3, j3;
      return i3 = Y(t2), a2 = eP.rows.map((e3) => i3.get(e3.field)).filter((e3) => !!e3), n2 = eP.columns.map((e3) => i3.get(e3.field)).filter((e3) => !!e3), l2 = Y(t2), s2 = (r2 = eP.values.flatMap((e3) => {
        let t3 = l2.get(e3.field);
        return t3 ? [
          {
            id: e3.id,
            field: t3,
            agg: e3.agg ?? t3.aggs?.[0] ?? "sum",
            heat: !!e3.heat,
            implicit: false
          }
        ] : [];
      })).length ? r2 : [
        {
          id: "implicit-count",
          field: {
            id: "__orders",
            label: "Orders",
            kind: "measure",
            format: "number",
            aggs: ["count"]
          },
          agg: "count",
          heat: false,
          implicit: true
        }
      ], d2 = (o3 = eP.filters.map((e3) => e3.field).filter((e3) => eI[e3]?.length)).length ? e2.filter((e3) => o3.every((t3) => !eI[t3].includes(String(e3[t3])))) : e2, c2 = s2.map(
        (e3) => "text" === e3.field.format || "__orders" === e3.field.id ? d2.length : d2.reduce((t3, i4) => t3 + Number(i4[e3.field.id] ?? 0), 0)
      ), u2 = [], p2 = (e3, t3, i4) => {
        let a3 = n2[t3];
        for (let l3 of q(a3, e3)) {
          let r3 = [...i4, l3], s3 = e3.filter((e4) => String(e4[a3.id]) === l3);
          t3 === n2.length - 1 ? u2.push({ key: r3.join(""), path: r3, kind: "leaf" }) : (p2(s3, t3 + 1, r3), u2.push({
            key: `${r3.join("")}sub`,
            path: r3,
            kind: "subtotal"
          }));
        }
      }, n2.length && p2(d2, 0, []), u2.push({ key: "total", path: [], kind: "total" }), h3 = (e3) => u2.flatMap((t3) => {
        let i4 = "total" === t3.kind ? e3 : e3.filter(
          (e4) => t3.path.every((t4, i5) => String(e4[n2[i5].id]) === t4)
        );
        return s2.map(
          (e4, t4) => (function(e6, t5, i5) {
            if (!e6.length)
              return "count" === t5.agg || "distinct" === t5.agg ? 0 : NaN;
            let a3 = t5.field.id, n3 = "text" !== t5.field.format;
            switch (t5.agg) {
              case "count":
                return e6.length;
              case "distinct":
                return new Set(e6.map((e7) => e7[a3])).size;
              case "average":
                return e6.reduce((e7, t6) => e7 + Number(t6[a3]), 0) / e6.length;
              case "percent": {
                let t6 = n3 ? e6.reduce((e7, t7) => e7 + Number(t7[a3]), 0) : e6.length;
                return i5 ? t6 / i5 * 100 : NaN;
              }
              default:
                return e6.reduce((e7, t6) => e7 + Number(t6[a3]), 0);
            }
          })(i4, e4, c2[t4])
        );
      }), m3 = (e3, t3, i4) => {
        let n3 = a2[t3];
        return q(n3, e3).map((l3) => {
          let r3 = [...i4, l3], s3 = e3.filter((e4) => String(e4[n3.id]) === l3), o4 = t3 === a2.length - 1;
          return {
            key: r3.join(""),
            path: r3,
            depth: t3,
            label: l3,
            leaf: o4,
            cells: h3(s3),
            children: o4 ? [] : m3(s3, t3 + 1, r3)
          };
        });
      }, f3 = a2.length ? m3(d2, 0, []) : [], g3 = h3(d2), b3 = [], (v3 = (e3) => e3.forEach((e4) => e4.leaf ? b3.push(e4.cells) : v3(e4.children)))(f3), b3.length || b3.push(g3), _3 = u2.map((e3, t3) => [e3, t3]).filter(([e3]) => "leaf" === e3.kind || !n2.length).map(([, e3]) => e3), x3 = s2.map((e3, t3) => {
        let i4 = 1 / 0, a3 = -1 / 0;
        for (let e4 of b3)
          for (let n3 of _3) {
            let l3 = e4[n3 * s2.length + t3];
            Number.isFinite(l3) && (i4 = Math.min(i4, l3), a3 = Math.max(a3, l3));
          }
        return {
          min: Number.isFinite(i4) ? i4 : 0,
          max: Number.isFinite(a3) ? a3 : 0
        };
      }), j3 = n2.map((e3, t3) => {
        let i4 = [];
        return u2.forEach((e4) => {
          let a3, l3, r3, o4 = t3 === n2.length - 1;
          if ("total" === e4.kind)
            a3 = o4 ? "total" : "blank", l3 = o4 ? "Total" : "", r3 = `t${e4.key}`;
          else if ("subtotal" === e4.kind) {
            let i5 = t3 < e4.path.length - 1;
            a3 = o4 ? "subtotal" : i5 ? "group" : "blank", l3 = o4 ? `${e4.path[e4.path.length - 1]} total` : i5 ? e4.path[t3] : "", r3 = "group" === a3 ? `g${e4.path.slice(0, t3 + 1).join("")}` : `s${e4.key}${t3}`;
          } else {
            let i5 = t3 === n2.length - 1;
            a3 = i5 && 1 === s2.length ? "leaf" : "group", l3 = e4.path[t3], r3 = i5 ? `l${e4.key}` : `g${e4.path.slice(0, t3 + 1).join("")}`;
          }
          let d3 = i4[i4.length - 1];
          d3 && d3.key === r3 && "group" === a3 ? d3.span += s2.length : i4.push({ key: r3, label: l3, span: s2.length, kind: a3 });
        }), i4;
      }), {
        rowFields: a2,
        colFields: n2,
        values: s2,
        cols: u2,
        headers: j3,
        measureRow: s2.length > 1,
        tree: f3,
        total: g3,
        range: x3,
        recordCount: e2.length,
        filteredCount: d2.length
      };
    }, [e2, t2, eP, eI]), eW = !eP.rows.length && !eP.columns.length && !eP.values.length, eB = !eW && 0 === eD.filteredCount;
    function eH(e3, t3) {
      A2(e3), g2?.(e3), t3 && ei2(t3);
    }
    let eO = (e3) => ez.get(e3.field)?.label ?? e3.field, eU = (e3, t3) => (ek.current += 1, "measure" === e3.kind ? {
      id: `v-${e3.id}-${ek.current}`,
      field: e3.id,
      agg: t3 ?? e3.aggs?.[0] ?? "sum"
    } : { id: `d-${e3.id}-${ek.current}`, field: e3.id });
    function eY(e3, t3, i3) {
      let a2 = "dimension" === e3.kind ? w2[eu(w2, e3.id) ?? "rows"].find((t4) => t4.field === e3.id) : void 0, n2 = a2 ?? eU(e3, i3), l2 = a2 ? ep(w2, a2.id) : w2;
      eH(eh(l2, t3, l2[t3].length, n2), `${e3.label} added to ${es[t3]}`);
    }
    function eq(e3, t3) {
      let i3 = ec(w2, e3.id);
      if (!i3) return;
      let a2 = w2[i3], n2 = a2.findIndex((t4) => t4.id === e3.id) + t3;
      n2 < 0 || n2 >= a2.length || eH(
        eh(ep(w2, e3.id), i3, n2, e3),
        `${eO(e3)} moved to position ${n2 + 1} in ${es[i3]}`
      );
    }
    function eV(e3) {
      "filters" === ec(w2, e3.id) && F2((t3) => {
        let i3 = { ...t3 };
        return delete i3[e3.field], i3;
      }), eH(ep(w2, e3.id), `${eO(e3)} removed`);
    }
    function eG(e3, t3) {
      !e3 || y2 ? t3() : Promise.all([
        (0, c.i)(eS, e3.left, el),
        (0, c.i)(e$, e3.top, el),
        (0, c.i)(eR, 1, el)
      ]).then(t3);
    }
    function eQ(e3, t3) {
      if (0 !== e3.button || ey2.current || eN.current) return;
      e3.preventDefault();
      let i3 = e3.currentTarget, a2 = i3.getBoundingClientRect(), n2 = (e4) => {
        let t4 = eN.current;
        if (!t4 || e4.pointerId !== t4.pointerId) return;
        if (!t4.started) {
          if (5 > Math.hypot(e4.clientX - t4.sx, e4.clientY - t4.sy)) return;
          t4.started = true, K2(null), eS.jump(e4.clientX - t4.ox), e$.jump(e4.clientY - t4.oy), eL.jump(1), eR.jump(1), y2 || (0, c.i)(eR, 1.03, Z.snappy);
          let i5 = t4.from ? w2[t4.from].findIndex((e6) => e6.id === t4.chip.id) : -1;
          eF({
            chip: t4.chip,
            kind: t4.kind,
            from: t4.from,
            target: t4.from,
            index: i5,
            remove: false,
            invalid: false,
            settling: false
          });
        }
        eS.set(e4.clientX - t4.ox), e$.set(e4.clientY - t4.oy);
        let i4 = ey2.current;
        if (!i4 || i4.settling) return;
        let a3 = (function(e6, t5, i5) {
          for (let a4 of er) {
            let n3 = ew.current[a4.id];
            if (!n3) continue;
            let l3 = n3.getBoundingClientRect();
            if (e6 >= l3.left - 6 && e6 <= l3.right + 6 && t5 >= l3.top - 6 && t5 <= l3.bottom + 6) {
              if (a4.accepts !== i5.kind)
                return { target: null, index: -1, remove: false, invalid: true };
              return {
                target: a4.id,
                index: (function(e7, t6, i6, a5) {
                  let n4 = e7.querySelector("[data-chips]");
                  if (!n4) return 0;
                  let l4 = [...n4.querySelectorAll("[data-chip]")].filter(
                    (e8) => e8.dataset.chip !== a5
                  );
                  if (!l4.length) return 0;
                  let r3 = n4.getBoundingClientRect(), s3 = l4.map((e8) => ({
                    left: r3.left + e8.offsetLeft,
                    top: r3.top + e8.offsetTop,
                    w: e8.offsetWidth,
                    h: e8.offsetHeight
                  })), o3 = s3[0].top, d2 = 1 / 0;
                  for (let e8 of s3) {
                    let t7 = Math.abs(i6 - (e8.top + e8.h / 2));
                    t7 < d2 && (d2 = t7, o3 = e8.top);
                  }
                  return s3.filter((e8) => e8.top < o3 - 2).length + s3.filter(
                    (e8) => 2 >= Math.abs(e8.top - o3) && t6 > e8.left + e8.w / 2
                  ).length;
                })(n3, e6, t5, i5.chip.id),
                remove: false,
                invalid: false
              };
            }
          }
          return {
            target: null,
            index: -1,
            remove: null !== i5.from,
            invalid: false
          };
        })(e4.clientX, e4.clientY, i4);
        (a3.target !== i4.target || a3.index !== i4.index || a3.remove !== i4.remove || a3.invalid !== i4.invalid) && eF({ ...i4, ...a3 });
      }, l2 = (e4) => {
        let t4 = eN.current;
        if (t4 && e4.pointerId === t4.pointerId) {
          if (t4.cleanup(), eN.current = null, !t4.started) {
            "pointerup" === e4.type && K2(t4.menuId);
            return;
          }
          !(function(e6) {
            let t5 = ey2.current;
            if (!t5) return;
            let i4 = eN.current, a3 = () => eA.current?.querySelector("[data-placeholder]")?.getBoundingClientRect();
            if (!e6 && t5.target) {
              let e7 = ef(w2, t5), i5 = t5.from !== t5.target || w2[t5.target].findIndex((e8) => e8.id === t5.chip.id) !== t5.index;
              eF({ ...t5, settling: true }), eG(a3(), () => {
                i5 && eH(
                  e7,
                  `${eO(t5.chip)} ${t5.from ? "moved" : "added"} to ${es[t5.target]}`
                ), eF(null);
              });
            } else if (!e6 && t5.remove) {
              eF({ ...t5, settling: true });
              let e7 = () => {
                "filters" === t5.from && F2((e8) => {
                  let i5 = { ...e8 };
                  return delete i5[t5.chip.field], i5;
                }), eH(ep(w2, t5.chip.id), `${eO(t5.chip)} removed`), eF(null);
              };
              y2 ? e7() : Promise.all([
                (0, c.i)(eL, 0, { duration: ee.exit, ease: ea }),
                (0, c.i)(eR, 0.92, { duration: ee.exit, ease: ea })
              ]).then(e7);
            } else
              eF(
                t5.from ? {
                  ...t5,
                  target: t5.from,
                  index: w2[t5.from].findIndex((e7) => e7.id === t5.chip.id),
                  remove: false,
                  invalid: false,
                  settling: true
                } : { ...t5, remove: false, invalid: false, settling: true }
              ), requestAnimationFrame(
                () => eG(
                  t5.from ? a3() : i4?.el.getBoundingClientRect(),
                  () => eF(null)
                )
              );
          })("pointercancel" === e4.type);
        }
      };
      window.addEventListener("pointermove", n2), window.addEventListener("pointerup", l2), window.addEventListener("pointercancel", l2);
      let r2 = t3.from && i3.dataset.chip ? e3.clientX - a2.left : 18, s2 = t3.from && i3.dataset.chip ? e3.clientY - a2.top : 16;
      eN.current = {
        pointerId: e3.pointerId,
        sx: e3.clientX,
        sy: e3.clientY,
        ox: r2,
        oy: s2,
        el: i3,
        ...t3,
        started: false,
        cleanup: () => {
          window.removeEventListener("pointermove", n2), window.removeEventListener("pointerup", l2), window.removeEventListener("pointercancel", l2);
        }
      };
    }
    let eJ = y2 ? { duration: 0 } : Z.smooth;
    function eK(e3) {
      let t3 = e3.values ?? [], i3 = C2[e3.id] ?? [], a2 = t3.filter((e4) => !i3.includes(e4));
      return i3.length ? 1 === a2.length ? a2[0] : `${a2.length} of ${t3.length}` : "All";
    }
    function eX(e3) {
      let t3 = "dimension" === e3.kind ? eu(w2, e3.id) : null, i3 = "measure" === e3.kind ? w2.values.filter((t4) => t4.field === e3.id).length : 0, n2 = null !== t3 || i3 > 0, l2 = t3 ? w2[t3].find((t4) => t4.field === e3.id) : void 0, s2 = `field-${e3.id}`, o3 = t3 ? t3[0].toUpperCase() + t3.slice(1) : i3 ? i3 > 1 ? `Values \xD7${i3}` : "Values" : "";
      return (0, a.jsx)(
        "li",
        {
          children: (0, a.jsxs)(r.bL, {
            open: G2 === s2,
            onOpenChange: (e4) => K2(e4 ? s2 : null),
            children: [
              (0, a.jsx)(r.l9, {
                asChild: true,
                children: (0, a.jsxs)("button", {
                  type: "button",
                  className: X().field,
                  "data-placed": n2 ? "" : void 0,
                  "aria-label": `${e3.label}${o3 ? `, in ${o3.toLowerCase()}` : ""}. Place field`,
                  onPointerDown: (i4) => {
                    B2 || eQ(i4, {
                      chip: l2 ?? eU(e3),
                      kind: e3.kind,
                      from: t3,
                      menuId: s2
                    });
                  },
                  children: [
                    (0, a.jsx)("span", {
                      className: X().fieldIcon,
                      children: (0, a.jsx)(ed, { id: e3.id, kind: e3.kind })
                    }),
                    (0, a.jsx)("span", {
                      className: X().fieldLabel,
                      children: e3.label
                    }),
                    (0, a.jsx)("span", {
                      className: X().fieldStatus,
                      children: o3
                    })
                  ]
                })
              }),
              (0, a.jsx)(e_, {
                label: `Place ${e3.label}`,
                children: "measure" === e3.kind ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(r.JU, {
                      className: X().menuLabel,
                      children: "Add to values as"
                    }),
                    (e3.aggs ?? ["sum"]).map(
                      (t4) => (0, a.jsxs)(
                        ex,
                        {
                          onSelect: () => eY(e3, "values", t4),
                          children: [
                            (0, a.jsx)("span", { className: X().check }),
                            P[t4]
                          ]
                        },
                        t4
                      )
                    ),
                    i3 > 0 && (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(r.wv, { className: X().separator }),
                        (0, a.jsxs)(ex, {
                          danger: true,
                          onSelect: () => eH(
                            {
                              ...w2,
                              values: w2.values.filter(
                                (t4) => t4.field !== e3.id
                              )
                            },
                            `${e3.label} removed`
                          ),
                          children: [
                            (0, a.jsx)("span", {
                              className: X().check,
                              children: (0, a.jsx)($.A, {
                                size: 15,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            }),
                            "Remove from values"
                          ]
                        })
                      ]
                    })
                  ]
                }) : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(r.JU, {
                      className: X().menuLabel,
                      children: t3 ? "Move to" : "Add to"
                    }),
                    ["rows", "columns", "filters"].map(
                      (i4) => (0, a.jsxs)(
                        ex,
                        {
                          disabled: i4 === t3,
                          onSelect: () => eY(e3, i4),
                          children: [
                            (0, a.jsx)("span", {
                              className: X().check,
                              children: i4 === t3 && (0, a.jsx)(S.A, {
                                size: 15,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            }),
                            i4[0].toUpperCase() + i4.slice(1)
                          ]
                        },
                        i4
                      )
                    ),
                    l2 && (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(r.wv, { className: X().separator }),
                        (0, a.jsxs)(ex, {
                          danger: true,
                          onSelect: () => eV(l2),
                          children: [
                            (0, a.jsx)("span", {
                              className: X().check,
                              children: (0, a.jsx)($.A, {
                                size: 15,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            }),
                            "Remove from pivot"
                          ]
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        },
        e3.id
      );
    }
    let eZ = t2.filter((e3) => "dimension" === e3.kind), e0 = t2.filter((e3) => "measure" === e3.kind), e1 = eD.values.filter((e3) => e3.heat), e5 = B2 ? ez.get(B2.chip.field) : void 0;
    return (0, a.jsxs)("div", {
      ref: eA,
      className: [X().root, b2].filter(Boolean).join(" "),
      "data-dragging": B2 ? "" : void 0,
      children: [
        (0, a.jsxs)("header", {
          className: X().header,
          children: [
            (0, a.jsxs)("div", {
              className: X().heading,
              children: [
                (0, a.jsx)("h2", { children: h2 }),
                m2 && (0, a.jsx)("p", { children: m2 })
              ]
            }),
            (0, a.jsxs)("div", {
              className: X().actions,
              children: [
                (0, a.jsxs)(T.$, {
                  variant: "ghost",
                  size: "sm",
                  className: X().action,
                  onClick: function() {
                    eb2((e3) => e3 + 1), W2([]), eH(
                      { ...w2, rows: w2.columns, columns: w2.rows },
                      "Rows and columns swapped"
                    );
                  },
                  disabled: !w2.rows.length && !w2.columns.length,
                  "aria-label": "Swap rows and columns",
                  children: [
                    (0, a.jsx)(s.PY1.span, {
                      className: X().swapIcon,
                      animate: { rotate: 180 * eg2 },
                      transition: y2 ? { duration: 0 } : Z.smooth,
                      children: (0, a.jsx)(E.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    }),
                    (0, a.jsx)("span", { children: "Swap" })
                  ]
                }),
                (0, a.jsx)(T.$, {
                  variant: "ghost",
                  size: "sm",
                  className: X().action,
                  onClick: function() {
                    W2([]), F2({}), eH(U, "Pivot cleared");
                  },
                  disabled: eW,
                  children: "Clear"
                }),
                (0, a.jsx)(T.$, {
                  variant: "secondary",
                  size: "sm",
                  className: X().action,
                  onClick: function() {
                    let e3 = new Blob(
                      [
                        (function(e4) {
                          let {
                            rowFields: t4,
                            values: i4,
                            cols: a2,
                            tree: n2,
                            total: l2
                          } = e4, r2 = t4.length ? t4.map((e6) => e6.label) : [""], s2 = [
                            [
                              ...r2,
                              ...a2.flatMap(
                                (t5) => i4.map(
                                  (i5) => [
                                    "total" === t5.kind ? e4.colFields.length ? "Total" : "" : "subtotal" === t5.kind ? `${t5.path.join(" / ")} total` : t5.path.join(" / "),
                                    Q(i5)
                                  ].filter(Boolean).join(" / ")
                                )
                              )
                            ].map(J).join(",")
                          ], o3 = (e6) => e6.forEach((e7) => {
                            let t5 = r2.map(
                              (t6, i5) => i5 < e7.path.length ? e7.path[i5] : i5 === e7.path.length ? "Total" : ""
                            );
                            s2.push([...t5, ...e7.cells].map(J).join(",")), o3(e7.children);
                          });
                          return o3(n2), s2.push(
                            [
                              ...r2.map(
                                (e6, t5) => 0 === t5 ? "Grand total" : ""
                              ),
                              ...l2
                            ].map(J).join(",")
                          ), s2.join("\n");
                        })(eD)
                      ],
                      { type: "text/csv;charset=utf-8" }
                    ), t3 = URL.createObjectURL(e3), i3 = document.createElement("a");
                    i3.href = t3, i3.download = f2, document.body.appendChild(i3), i3.click(), i3.remove(), window.setTimeout(() => URL.revokeObjectURL(t3), 1e3), eo2(true), ei2(`Exported ${f2}`), window.clearTimeout(eC.current), eC.current = window.setTimeout(() => eo2(false), 1800);
                  },
                  disabled: eW || eB,
                  children: en2 ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(S.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Exported"
                    ]
                  }) : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(M.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Export CSV"
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: X().workspace,
          children: [
            (0, a.jsxs)("aside", {
              className: X().fields,
              "aria-label": "Fields",
              children: [
                (0, a.jsxs)("div", {
                  className: X().fieldGroup,
                  children: [
                    (0, a.jsx)("h3", {
                      className: X().groupTitle,
                      children: "Dimensions"
                    }),
                    (0, a.jsx)("ul", {
                      className: X().fieldList,
                      children: eZ.map(eX)
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  className: X().fieldGroup,
                  children: [
                    (0, a.jsx)("h3", {
                      className: X().groupTitle,
                      children: "Measures"
                    }),
                    (0, a.jsx)("ul", {
                      className: X().fieldList,
                      children: e0.map(eX)
                    })
                  ]
                }),
                (0, a.jsx)("p", {
                  className: X().tip,
                  children: "Drag a field into a well, or press Enter on it to place it."
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: X().main,
              children: [
                (0, a.jsx)(p.o, {
                  id: `pivot-${N2}`,
                  children: (0, a.jsx)("div", {
                    className: X().lanes,
                    children: er.map((e3) => {
                      let t3 = eP[e3.id], i3 = !!B2 && B2.kind === e3.accepts;
                      return (0, a.jsxs)(
                        "div",
                        {
                          ref: (t4) => {
                            ew.current[e3.id] = t4;
                          },
                          className: X().lane,
                          role: "group",
                          "aria-label": e3.label,
                          "data-accepts": B2 && i3 ? "" : void 0,
                          "data-refuses": B2 && !i3 ? "" : void 0,
                          "data-over": B2?.target !== e3.id || B2.settling ? void 0 : "",
                          children: [
                            (0, a.jsx)("span", {
                              className: X().laneLabel,
                              children: e3.label
                            }),
                            (0, a.jsxs)("div", {
                              className: X().chips,
                              "data-chips": "",
                              children: [
                                t3.map(
                                  (i4, l2) => (function(e4, t4, i5, l3) {
                                    let o3 = ez.get(e4.field);
                                    if (!o3) return null;
                                    let d2 = B2?.chip.id === e4.id, c2 = e4.agg ?? o3.aggs?.[0] ?? "sum", u2 = "values" === t4 ? P[c2] : "filters" === t4 ? eK(o3) : null;
                                    return (0, a.jsxs)(
                                      r.bL,
                                      {
                                        open: G2 === e4.id,
                                        onOpenChange: (t5) => K2(t5 ? e4.id : null),
                                        children: [
                                          (0, a.jsx)(r.l9, {
                                            asChild: true,
                                            children: (0, a.jsx)(s.PY1.button, {
                                              type: "button",
                                              layoutId: `${N2}-${e4.id}`,
                                              layout: "position",
                                              transition: eJ,
                                              className: X().chip,
                                              "data-chip": e4.id,
                                              "data-placeholder": d2 ? "" : void 0,
                                              "data-lane": t4,
                                              "aria-label": `${o3.label}${u2 ? `, ${u2}` : ""}${e4.heat ? ", heat shading" : ""}. Options`,
                                              "aria-keyshortcuts": "Delete Alt+ArrowLeft Alt+ArrowRight",
                                              onPointerDown: (i6) => eQ(i6, {
                                                chip: e4,
                                                kind: o3.kind,
                                                from: t4,
                                                menuId: e4.id
                                              }),
                                              onKeyDown: (t5) => {
                                                "Delete" === t5.key || "Backspace" === t5.key ? (t5.preventDefault(), eV(e4)) : t5.altKey && ("ArrowLeft" === t5.key || "ArrowRight" === t5.key) && (t5.preventDefault(), eq(
                                                  e4,
                                                  "ArrowLeft" === t5.key ? -1 : 1
                                                ));
                                              },
                                              children: (0, a.jsxs)("span", {
                                                className: X().chipInner,
                                                children: [
                                                  (0, a.jsx)(L.A, {
                                                    className: X().grip,
                                                    size: 14,
                                                    strokeWidth: 1.75,
                                                    "aria-hidden": "true"
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: X().chipLabel,
                                                    children: o3.label
                                                  }),
                                                  u2 && (0, a.jsx)("span", {
                                                    className: X().chipMeta,
                                                    children: u2
                                                  }),
                                                  e4.heat && (0, a.jsx)("span", {
                                                    className: X().heatMark,
                                                    "aria-hidden": "true"
                                                  }),
                                                  (0, a.jsx)(R.A, {
                                                    className: X().chipChevron,
                                                    size: 14,
                                                    strokeWidth: 1.75,
                                                    "aria-hidden": "true"
                                                  })
                                                ]
                                              })
                                            })
                                          }),
                                          (function(e6, t5, i6, l4) {
                                            let s2 = ez.get(e6.field);
                                            if (!s2) return null;
                                            let o4 = e6.agg ?? s2.aggs?.[0] ?? "sum", d3 = C2[s2.id] ?? [], c3 = [];
                                            return "values" === t5 && c3.push(
                                              (0, a.jsxs)(
                                                n.Fragment,
                                                {
                                                  children: [
                                                    (0, a.jsx)(r.JU, {
                                                      className: X().menuLabel,
                                                      children: "Summarize by"
                                                    }),
                                                    (0, a.jsx)(r.z6, {
                                                      value: o4,
                                                      onValueChange: (t6) => eH(
                                                        em(w2, e6.id, {
                                                          agg: t6
                                                        }),
                                                        `${s2.label} shows ${P[t6].toLowerCase()}`
                                                      ),
                                                      children: (s2.aggs ?? ["sum"]).map(
                                                        (e7) => (0, a.jsxs)(
                                                          r.hN,
                                                          {
                                                            value: e7,
                                                            className: X().item,
                                                            children: [
                                                              (0, a.jsx)(
                                                                "span",
                                                                {
                                                                  className: X().check,
                                                                  children: (0, a.jsx)(
                                                                    r.VF,
                                                                    {
                                                                      children: (0, a.jsx)(
                                                                        S.A,
                                                                        {
                                                                          size: 15,
                                                                          strokeWidth: 1.75
                                                                        }
                                                                      )
                                                                    }
                                                                  )
                                                                }
                                                              ),
                                                              P[e7]
                                                            ]
                                                          },
                                                          e7
                                                        )
                                                      )
                                                    })
                                                  ]
                                                },
                                                "agg"
                                              ),
                                              (0, a.jsx)(
                                                n.Fragment,
                                                {
                                                  children: (0, a.jsxs)(
                                                    r.H_,
                                                    {
                                                      className: X().item,
                                                      checked: !!e6.heat,
                                                      onCheckedChange: (t6) => eH(
                                                        em(w2, e6.id, {
                                                          heat: t6
                                                        }),
                                                        `Heat shading ${t6 ? "on" : "off"} for ${s2.label}`
                                                      ),
                                                      children: [
                                                        (0, a.jsx)("span", {
                                                          className: X().check,
                                                          children: (0, a.jsx)(r.VF, {
                                                            children: (0, a.jsx)(S.A, {
                                                              size: 15,
                                                              strokeWidth: 1.75
                                                            })
                                                          })
                                                        }),
                                                        "Heat shading"
                                                      ]
                                                    }
                                                  )
                                                },
                                                "heat"
                                              )
                                            ), "filters" === t5 && c3.push(
                                              (0, a.jsxs)(
                                                n.Fragment,
                                                {
                                                  children: [
                                                    (0, a.jsxs)(r.JU, {
                                                      className: X().menuLabel,
                                                      children: [
                                                        "Show ",
                                                        s2.label.toLowerCase()
                                                      ]
                                                    }),
                                                    (s2.values ?? []).map(
                                                      (e7) => {
                                                        let t6 = !d3.includes(e7), i7 = t6 && 1 === (s2.values ?? []).filter(
                                                          (e8) => !d3.includes(
                                                            e8
                                                          )
                                                        ).length;
                                                        return (0, a.jsxs)(
                                                          r.H_,
                                                          {
                                                            className: X().item,
                                                            checked: t6,
                                                            disabled: i7,
                                                            onSelect: (e8) => e8.preventDefault(),
                                                            onCheckedChange: () => {
                                                              var t7;
                                                              return t7 = s2.id, void F2(
                                                                (i8) => {
                                                                  let a2 = i8[t7] ?? [];
                                                                  return {
                                                                    ...i8,
                                                                    [t7]: a2.includes(
                                                                      e7
                                                                    ) ? a2.filter(
                                                                      (t8) => t8 !== e7
                                                                    ) : [
                                                                      ...a2,
                                                                      e7
                                                                    ]
                                                                  };
                                                                }
                                                              );
                                                            },
                                                            children: [
                                                              (0, a.jsx)(
                                                                "span",
                                                                {
                                                                  className: X().check,
                                                                  children: (0, a.jsx)(
                                                                    r.VF,
                                                                    {
                                                                      children: (0, a.jsx)(
                                                                        S.A,
                                                                        {
                                                                          size: 15,
                                                                          strokeWidth: 1.75
                                                                        }
                                                                      )
                                                                    }
                                                                  )
                                                                }
                                                              ),
                                                              e7
                                                            ]
                                                          },
                                                          e7
                                                        );
                                                      }
                                                    ),
                                                    (0, a.jsxs)(ex, {
                                                      onSelect: () => F2((e7) => ({
                                                        ...e7,
                                                        [s2.id]: []
                                                      })),
                                                      disabled: !d3.length,
                                                      children: [
                                                        (0, a.jsx)("span", {
                                                          className: X().check
                                                        }),
                                                        "Show all"
                                                      ]
                                                    })
                                                  ]
                                                },
                                                "filter"
                                              )
                                            ), l4 > 1 && c3.push(
                                              (0, a.jsxs)(
                                                n.Fragment,
                                                {
                                                  children: [
                                                    (0, a.jsxs)(ex, {
                                                      onSelect: () => eq(e6, -1),
                                                      disabled: 0 === i6,
                                                      children: [
                                                        (0, a.jsx)("span", {
                                                          className: X().check
                                                        }),
                                                        "Move left"
                                                      ]
                                                    }),
                                                    (0, a.jsxs)(ex, {
                                                      onSelect: () => eq(e6, 1),
                                                      disabled: i6 === l4 - 1,
                                                      children: [
                                                        (0, a.jsx)("span", {
                                                          className: X().check
                                                        }),
                                                        "Move right"
                                                      ]
                                                    })
                                                  ]
                                                },
                                                "order"
                                              )
                                            ), "values" !== t5 && c3.push(
                                              (0, a.jsx)(
                                                n.Fragment,
                                                {
                                                  children: [
                                                    "rows",
                                                    "columns",
                                                    "filters"
                                                  ].filter((e7) => e7 !== t5).map(
                                                    (t6) => (0, a.jsxs)(
                                                      ex,
                                                      {
                                                        onSelect: () => {
                                                          let i7;
                                                          eH(
                                                            eh(
                                                              i7 = ep(
                                                                w2,
                                                                e6.id
                                                              ),
                                                              t6,
                                                              i7[t6].length,
                                                              e6
                                                            ),
                                                            `${eO(e6)} moved to ${es[t6]}`
                                                          );
                                                        },
                                                        children: [
                                                          (0, a.jsx)(
                                                            "span",
                                                            {
                                                              className: X().check
                                                            }
                                                          ),
                                                          "Move to ",
                                                          es[t6]
                                                        ]
                                                      },
                                                      t6
                                                    )
                                                  )
                                                },
                                                "move"
                                              )
                                            ), c3.push(
                                              (0, a.jsxs)(
                                                ex,
                                                {
                                                  onSelect: () => eV(e6),
                                                  danger: true,
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className: X().check,
                                                      children: (0, a.jsx)(
                                                        $.A,
                                                        {
                                                          size: 15,
                                                          strokeWidth: 1.75,
                                                          "aria-hidden": "true"
                                                        }
                                                      )
                                                    }),
                                                    "Remove"
                                                  ]
                                                },
                                                "remove"
                                              )
                                            ), (0, a.jsx)(e_, {
                                              label: `${s2.label} options`,
                                              children: c3.map(
                                                (e7, t6) => (0, a.jsxs)(
                                                  n.Fragment,
                                                  {
                                                    children: [
                                                      t6 > 0 && (0, a.jsx)(r.wv, {
                                                        className: X().separator
                                                      }),
                                                      e7
                                                    ]
                                                  },
                                                  t6
                                                )
                                              )
                                            });
                                          })(e4, t4, i5, l3)
                                        ]
                                      },
                                      e4.id
                                    );
                                  })(i4, e3.id, l2, t3.length)
                                ),
                                !t3.length && (0, a.jsx)("span", {
                                  className: X().laneHint,
                                  children: e3.hint
                                })
                              ]
                            })
                          ]
                        },
                        e3.id
                      );
                    })
                  })
                }),
                (0, a.jsxs)("section", {
                  className: X().tableCard,
                  "aria-label": "Result",
                  children: [
                    (0, a.jsx)(s.PY1.div, {
                      ref: eE,
                      className: X().scroll,
                      style: { height: eT },
                      tabIndex: 0,
                      role: "region",
                      "aria-label": "Pivot table, scrollable",
                      "data-empty": eW || eB ? "" : void 0,
                      children: (0, a.jsx)("div", {
                        ref: eM,
                        className: X().sizer,
                        children: eW || eB ? (0, a.jsx)("div", {
                          className: X().emptyWrap,
                          children: (0, a.jsx)(z.p, {
                            icon: (0, a.jsx)(k.A, {
                              size: 24,
                              strokeWidth: 1.75
                            }),
                            title: eW ? "Place a field to build the pivot" : "No orders match these filters",
                            description: eW ? "Drag a dimension into Rows or Columns and a measure into Values. Subtotals and a grand total appear as you go." : "Every value of a filter is hidden. Show at least one to bring the numbers back.",
                            action: eW ? (0, a.jsx)(T.$, {
                              variant: "secondary",
                              size: "sm",
                              className: X().action,
                              onClick: function() {
                                F2({}), eH(O, "Starter layout placed");
                              },
                              children: "Use starter layout"
                            }) : (0, a.jsx)(T.$, {
                              variant: "secondary",
                              size: "sm",
                              className: X().action,
                              onClick: () => F2({}),
                              children: "Show all values"
                            })
                          })
                        }) : (0, a.jsx)(ev, {
                          result: eD,
                          collapsed: D2,
                          onToggle: function(e3) {
                            W2(
                              (t3) => t3.includes(e3.key) ? t3.filter((t4) => t4 !== e3.key) : [...t3, e3.key]
                            );
                          },
                          onToggleAll: function() {
                            W2(
                              (e3) => eD.tree.some((t3) => e3.includes(t3.key)) ? [] : eD.tree.filter((e4) => !e4.leaf).map((e4) => e4.key)
                            );
                          },
                          reduce: y2
                        })
                      })
                    }),
                    (0, a.jsxs)("footer", {
                      className: X().status,
                      children: [
                        (0, a.jsx)("span", {
                          className: X().count,
                          children: eD.filteredCount === eD.recordCount ? `${eD.recordCount.toLocaleString("en-US")} orders` : `${eD.filteredCount.toLocaleString("en-US")} of ${eD.recordCount.toLocaleString("en-US")} orders`
                        }),
                        e1.length > 0 && !eW && !eB && (0, a.jsxs)("span", {
                          className: X().legend,
                          children: [
                            (0, a.jsx)("span", {
                              children: e1.map((e3) => e3.field.label).join(", ")
                            }),
                            (0, a.jsxs)("span", {
                              className: X().legendScale,
                              "aria-hidden": "true",
                              children: [
                                (0, a.jsx)("span", { children: "Low" }),
                                (0, a.jsx)("span", {
                                  className: X().ramp,
                                  children: [0, 1, 2, 3, 4].map(
                                    (e3) => (0, a.jsx)(
                                      "span",
                                      {
                                        style: {
                                          opacity: 0.08 + e3 / 4 * 0.92
                                        }
                                      },
                                      e3
                                    )
                                  )
                                }),
                                (0, a.jsx)("span", { children: "High" })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, a.jsx)("p", {
          className: X().srOnly,
          role: "status",
          "aria-live": "polite",
          children: et2
        }),
        B2 && e5 && "u" > typeof document && (0, l.createPortal)(
          (0, a.jsx)(s.PY1.div, {
            className: X().ghost,
            "data-remove": B2.remove && !B2.settling ? "" : void 0,
            "data-invalid": B2.invalid ? "" : void 0,
            style: { x: eS, y: e$, scale: eR, opacity: eL },
            "aria-hidden": "true",
            children: (0, a.jsxs)("span", {
              className: X().chipInner,
              children: [
                B2.remove ? (0, a.jsx)($.A, {
                  className: X().grip,
                  size: 14,
                  strokeWidth: 1.75
                }) : (0, a.jsx)(L.A, {
                  className: X().grip,
                  size: 14,
                  strokeWidth: 1.75
                }),
                (0, a.jsx)("span", {
                  className: X().chipLabel,
                  children: e5.label
                }),
                "measure" === B2.kind && (0, a.jsx)("span", {
                  className: X().chipMeta,
                  children: P[B2.chip.agg ?? e5.aggs?.[0] ?? "sum"]
                }),
                "filters" === B2.from && (0, a.jsx)("span", {
                  className: X().chipMeta,
                  children: eK(e5)
                }),
                B2.chip.heat && (0, a.jsx)("span", { className: X().heatMark }),
                (0, a.jsx)(R.A, {
                  className: X().chipChevron,
                  size: 14,
                  strokeWidth: 1.75
                })
              ]
            })
          }),
          document.body
        )
      ]
    });
  }
  let ey = ej;
};

__m(__module,__exports,__require);
}