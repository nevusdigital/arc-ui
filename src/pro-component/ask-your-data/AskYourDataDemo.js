function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { AskYourDataDemo: () => ea, default: () => es });
  var s = a(95155), n = a(12115), r = a(92171), i = a(80642), l = a(25354), o = a(18310), d = a(35484), u = a(48329), c = a(86272), h = a(36408), p = a(92298), m = a(34306), _ = a(38158), y = a(12363), g = a(51288), x = a(73474), f = a(66558), k = a(52898);
  let b = {
    match: /sign ?ups?|registrations?|new users/i,
    question: "Weekly signups by plan since August",
    rowsScanned: 1284,
    sql: `-- Weekly signups by plan, full weeks since August
select
  date_trunc('week', u.created_at)::date as week,
  p.name as plan,
  count(*) as signups
from users u
join subscriptions s on s.user_id = u.id
join plans p on p.id = s.plan_id
where u.created_at >= date '2026-08-03'
  and u.created_at < date_trunc('week', now())
group by 1, 2
order by 1, 2;`,
    result: {
      title: "Weekly signups by plan",
      subtitle: "Aug 3 to Oct 25 \xB7 1,284 signups",
      categoryLabel: "Week",
      categories: [
        "Aug 3",
        "Aug 10",
        "Aug 17",
        "Aug 24",
        "Aug 31",
        "Sep 7",
        "Sep 14",
        "Sep 21",
        "Sep 28",
        "Oct 5",
        "Oct 12",
        "Oct 19"
      ],
      series: [
        {
          id: "free",
          label: "Free",
          values: [58, 61, 55, 63, 45, 60, 64, 59, 62, 57, 61, 56]
        },
        {
          id: "pro",
          label: "Pro",
          values: [24, 26, 27, 29, 25, 31, 33, 34, 36, 35, 38, 40]
        },
        {
          id: "team",
          label: "Team",
          values: [9, 10, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        },
        {
          id: "enterprise",
          label: "Enterprise",
          values: [2, 2, 3, 2, 3, 3, 4, 3, 4, 4, 5, 5]
        }
      ],
      stacked: true,
      chart: "bar",
      formatValue: (e2) => e2.toLocaleString("en-US"),
      insight: "Pro is up 67% since August, from 24 to 40 a week, and Team more than doubled. Free held flat near 60, with a dip in Labor Day week.",
      rowCount: 48,
      durationMs: 214
    }
  }, v = [
    b,
    {
      match: /revenue|mrr|arr|billing|income/i,
      question: "Monthly recurring revenue by region in 2026",
      rowsScanned: 18402,
      sql: `-- Monthly recurring revenue by region in 2026
select
  date_trunc('month', i.period_start)::date as month,
  a.region,
  round(sum(i.amount_cents) / 100000.0) as mrr_usd_k
from invoices i
join accounts a on a.id = i.account_id
where i.status = 'paid'
  and i.period_start >= date '2026-01-01'
  and i.period_start < date '2026-10-01'
group by 1, 2
order by 1, 2;`,
      result: {
        title: "Monthly recurring revenue by region",
        subtitle: "Jan to Sep 2026 \xB7 $475k in September",
        categoryLabel: "Month",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ],
        series: [
          {
            id: "na",
            label: "North America",
            values: [182, 189, 197, 204, 215, 223, 236, 244, 258]
          },
          {
            id: "eu",
            label: "Europe",
            values: [96, 101, 104, 111, 117, 124, 129, 138, 146]
          },
          {
            id: "apac",
            label: "Asia Pacific",
            values: [31, 34, 38, 41, 47, 52, 58, 63, 71]
          }
        ],
        stacked: true,
        legendValue: "last",
        chart: "line",
        formatValue: (e2) => `$${e2.toLocaleString("en-US")}k`,
        insight: "Asia Pacific more than doubled this year, from $31k to $71k. Total MRR reached $475k in September, up 54% since January.",
        rowCount: 27,
        durationMs: 386
      }
    },
    {
      match: /churn|cancel|retention|lost/i,
      question: "Monthly churn rate by plan since May",
      rowsScanned: 3912,
      sql: `-- Monthly churn rate on paid plans since May
select
  m.month,
  p.name as plan,
  round(100.0 * sum(m.churned) / nullif(sum(m.active_at_start), 0), 1) as churn_pct
from plan_metrics_monthly m
join plans p on p.id = m.plan_id
where m.month >= date '2026-05-01'
  and m.month < date '2026-10-01'
  and p.name <> 'Free'
group by 1, 2
order by 1, 2;`,
      result: {
        title: "Monthly churn rate by plan",
        subtitle: "May to Sep 2026 \xB7 paid plans",
        categoryLabel: "Month",
        categories: ["May", "Jun", "Jul", "Aug", "Sep"],
        series: [
          { id: "pro", label: "Pro", values: [4.8, 4.6, 4.9, 4.2, 3.9] },
          { id: "team", label: "Team", values: [3.1, 2.9, 2.7, 2.6, 2.3] },
          {
            id: "enterprise",
            label: "Enterprise",
            values: [1.2, 0.9, 1.1, 0.8, 0.7]
          }
        ],
        stacked: false,
        legendValue: "last",
        chart: "line",
        formatValue: (e2) => `${e2.toFixed(1)}%`,
        insight: "Churn fell on every paid plan since May. Pro dropped below 4% for the first time in September, and Team is down to 2.3%.",
        rowCount: 15,
        durationMs: 172
      }
    }
  ], j = v.map((e2) => e2.question);
  var w = a(49722), N = a.n(w);
  let S = (e2) => e2.toLocaleString("en-US"), T = (e2, t2) => e2.series[t2]?.color ?? `var(--series-${t2 % 4 + 1})`, $ = (e2, t2) => e2.series.reduce((e3, a2) => e3 + (a2.values[t2] ?? 0), 0);
  function L(e2, t2, a2, s2, n2) {
    let r2 = Math.max(0, Math.min(n2, a2 / 2, s2));
    return `M${e2},${t2 + s2}V${t2 + r2}Q${e2},${t2} ${e2 + r2},${t2}H${e2 + a2 - r2}Q${e2 + a2},${t2} ${e2 + a2},${t2 + r2}V${t2 + s2}Z`;
  }
  function M({ result: e2, kind: t2, reduced: a2 }) {
    let {
      ref: r2,
      width: i2,
      height: o2
    } = (function() {
      let e3 = (0, n.useRef)(null), [t3, a3] = (0, n.useState)({ width: 0, height: 0 });
      return (0, n.useLayoutEffect)(() => {
        let t4 = e3.current;
        if (!t4) return;
        let s2 = () => a3(
          (e4) => e4.width === t4.clientWidth && e4.height === t4.clientHeight ? e4 : { width: t4.clientWidth, height: t4.clientHeight }
        );
        if (s2(), "u" < typeof ResizeObserver) return;
        let n2 = new ResizeObserver(s2);
        return n2.observe(t4), () => n2.disconnect();
      }, []), { ref: e3, ...t3 };
    })(), [d2, u2] = (0, n.useState)(null), c2 = e2.formatValue ?? S, h2 = false !== e2.stacked, p2 = e2.categories.length, m2 = Math.max(0, i2 - 44), _2 = Math.max(0, o2 - 20 - 8), y2 = p2 ? m2 / p2 : 0, { top: g2, ticks: x2 } = (function(e3, t3 = 4) {
      if (!(e3 > 0)) return { top: 1, ticks: [0, 1] };
      let a3 = e3 / t3, s2 = 10 ** Math.floor(Math.log10(a3)), n2 = [1, 2, 2.5, 5, 10].map((e4) => e4 * s2).find((e4) => e4 >= a3) ?? 10 * s2, r3 = Math.ceil(e3 / n2 - 1e-9) * n2, i3 = [];
      for (let e4 = 0; e4 <= r3 + n2 / 2; e4 += n2) i3.push(Number(e4.toFixed(6)));
      return { top: r3, ticks: i3 };
    })(
      "bar" === t2 && h2 ? Math.max(0, ...e2.categories.map((t3, a3) => $(e2, a3))) : Math.max(0, ...e2.series.flatMap((e3) => e3.values))
    ), f2 = (e3) => 8 + _2 - e3 / g2 * _2, k2 = (e3) => 44 + y2 * e3 + y2 / 2, b2 = Math.max(1, Math.ceil(46 / Math.max(y2, 1))), v2 = "bar" === t2 ? Math.min(28, y2 * (h2 ? 0.58 : 0.76)) : 0, j2 = (e3) => {
      let t3 = r2.current?.getBoundingClientRect();
      if (!t3 || !y2) return;
      let a3 = Math.floor((e3 - t3.left - 44) / y2);
      u2(a3 >= 0 && a3 < p2 ? a3 : null);
    }, w2 = null === d2 ? "" : `${e2.categories[d2]}: ${e2.series.map((e3) => `${e3.label} ${c2(e3.values[d2] ?? 0)}`).join(", ")}${h2 ? `, total ${c2($(e2, d2))}` : ""}`, A2 = null === d2 ? 0 : k2(d2) + (k2(d2) > i2 / 2 ? -y2 / 2 - 8 - 188 : y2 / 2 + 8);
    return (0, s.jsxs)("div", {
      ref: r2,
      className: N().plot,
      tabIndex: 0,
      role: "group",
      "aria-label": `${e2.title}, ${"bar" === t2 ? "bar" : "line"} chart. Use the left and right arrow keys to read each ${(e2.categoryLabel ?? "category").toLowerCase()}.`,
      onKeyDown: (e3) => {
        if (p2)
          if ("ArrowRight" === e3.key || "ArrowLeft" === e3.key) {
            e3.preventDefault();
            let t3 = "ArrowRight" === e3.key ? 1 : -1;
            u2(
              (e4) => null === e4 ? t3 > 0 ? 0 : p2 - 1 : Math.min(p2 - 1, Math.max(0, e4 + t3))
            );
          } else
            "Home" === e3.key ? (e3.preventDefault(), u2(0)) : "End" === e3.key ? (e3.preventDefault(), u2(p2 - 1)) : "Escape" === e3.key && u2(null);
      },
      onBlur: () => u2(null),
      onPointerMove: (e3) => {
        ("touch" !== e3.pointerType || e3.buttons) && j2(e3.clientX);
      },
      onPointerDown: (e3) => j2(e3.clientX),
      onPointerLeave: (e3) => {
        "touch" !== e3.pointerType && u2(null);
      },
      children: [
        i2 > 0 && o2 > 0 ? (0, s.jsxs)("svg", {
          width: i2,
          height: o2,
          className: N().svg,
          "aria-hidden": "true",
          children: [
            x2.map(
              (e3) => (0, s.jsxs)(
                "g",
                {
                  children: [
                    (0, s.jsx)("line", {
                      x1: 44,
                      x2: i2,
                      y1: Math.round(f2(e3)) + 0.5,
                      y2: Math.round(f2(e3)) + 0.5,
                      className: 0 === e3 ? N().baseline : N().grid
                    }),
                    (0, s.jsx)("text", {
                      x: 34,
                      y: f2(e3),
                      dy: "0.32em",
                      textAnchor: "end",
                      className: N().axisText,
                      children: c2(e3)
                    })
                  ]
                },
                e3
              )
            ),
            e2.categories.map(
              (e3, t3) => t3 % b2 == 0 ? (0, s.jsx)(
                "text",
                {
                  x: k2(t3),
                  y: o2 - 4,
                  textAnchor: "middle",
                  className: N().axisLabel,
                  children: e3
                },
                e3 + t3
              ) : null
            ),
            null !== d2 ? (0, s.jsx)("rect", {
              x: 44 + y2 * d2 + 1,
              y: 8,
              width: Math.max(0, y2 - 2),
              height: _2,
              rx: 6,
              className: N().hoverBand
            }) : null,
            "bar" === t2 ? e2.categories.map((t3, n2) => {
              let r3 = 0, i3 = k2(n2) - v2 / 2, o3 = h2 ? v2 : (v2 - (e2.series.length - 1) * 2) / e2.series.length;
              return (0, s.jsx)(
                l.PY1.g,
                {
                  className: N().column,
                  "data-dim": null !== d2 && d2 !== n2 || void 0,
                  style: {
                    transformBox: "fill-box",
                    transformOrigin: "50% 100%"
                  },
                  initial: !a2 && { scaleY: 0 },
                  animate: { scaleY: 1 },
                  transition: {
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                    delay: n2 * Math.min(0.016, 0.18 / Math.max(p2, 1))
                  },
                  children: e2.series.map((t4, a3) => {
                    let l2 = t4.values[n2] ?? 0;
                    if (h2) {
                      let o4 = e2.series.slice(a3 + 1).every((e3) => !(e3.values[n2] > 0)), d4 = f2(r3), u3 = f2(r3 + l2);
                      r3 += l2;
                      let c3 = Math.max(0, d4 - u3 - 1.5 * !o4);
                      return c3 <= 0 ? null : o4 ? (0, s.jsx)(
                        "path",
                        { d: L(i3, u3, v2, c3, 4), fill: T(e2, a3) },
                        t4.id
                      ) : (0, s.jsx)(
                        "rect",
                        {
                          x: i3,
                          y: u3 + 1.5,
                          width: v2,
                          height: c3,
                          fill: T(e2, a3)
                        },
                        t4.id
                      );
                    }
                    let d3 = Math.max(0, f2(0) - f2(l2));
                    return (0, s.jsx)(
                      "path",
                      {
                        d: L(i3 + a3 * (o3 + 2), f2(l2), o3, d3, 3),
                        fill: T(e2, a3)
                      },
                      t4.id
                    );
                  })
                },
                n2
              );
            }) : (0, s.jsxs)(s.Fragment, {
              children: [
                e2.series.map((t3, n2) => {
                  let r3 = t3.values.map(
                    (e3, t4) => `${t4 ? "L" : "M"}${k2(t4).toFixed(2)},${f2(e3).toFixed(2)}`
                  ).join("");
                  return (0, s.jsx)(
                    l.PY1.path,
                    {
                      d: r3,
                      fill: "none",
                      stroke: T(e2, n2),
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      initial: !a2 && { pathLength: 0 },
                      animate: { pathLength: 1 },
                      transition: {
                        duration: 0.46,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.04 * n2
                      }
                    },
                    t3.id
                  );
                }),
                null !== d2 ? e2.series.map(
                  (t3, a3) => (0, s.jsx)(
                    "circle",
                    {
                      cx: k2(d2),
                      cy: f2(t3.values[d2] ?? 0),
                      r: 3.5,
                      fill: "var(--surface)",
                      stroke: T(e2, a3),
                      strokeWidth: 2
                    },
                    t3.id
                  )
                ) : null
              ]
            })
          ]
        }) : null,
        null !== d2 && i2 > 0 ? (0, s.jsxs)("div", {
          className: N().tooltip,
          style: {
            transform: `translate3d(${Math.max(0, Math.min(i2 - 188, A2))}px, 8px, 0)`,
            width: 188
          },
          "aria-hidden": "true",
          children: [
            (0, s.jsx)("span", {
              className: N().tipHead,
              children: e2.categories[d2]
            }),
            e2.series.map(
              (t3, a3) => (0, s.jsxs)(
                "span",
                {
                  className: N().tipRow,
                  children: [
                    (0, s.jsx)("span", {
                      className: N().dot,
                      style: { background: T(e2, a3) }
                    }),
                    (0, s.jsx)("span", {
                      className: N().tipLabel,
                      children: t3.label
                    }),
                    (0, s.jsx)("span", {
                      className: N().tipValue,
                      children: c2(t3.values[d2] ?? 0)
                    })
                  ]
                },
                t3.id
              )
            ),
            h2 ? (0, s.jsxs)("span", {
              className: `${N().tipRow} ${N().tipTotal}`,
              children: [
                (0, s.jsx)("span", {
                  className: N().tipLabel,
                  children: "Total"
                }),
                (0, s.jsx)("span", {
                  className: N().tipValue,
                  children: c2($(e2, d2))
                })
              ]
            }) : null
          ]
        }) : null,
        (0, s.jsx)("span", {
          className: N().srOnly,
          "aria-live": "polite",
          children: w2
        })
      ]
    });
  }
  function A({ result: e2 }) {
    let t2 = e2.formatValue ?? S, a2 = false !== e2.stacked, r2 = (0, n.useRef)(null), [i2, l2] = (0, n.useState)(false);
    return (0, n.useEffect)(() => {
      let e3 = r2.current;
      if (!e3) return;
      let t3 = () => l2(e3.scrollTop > 0);
      return e3.addEventListener("scroll", t3, { passive: true }), () => e3.removeEventListener("scroll", t3);
    }, []), (0, s.jsx)("div", {
      ref: r2,
      className: N().tableWrap,
      tabIndex: 0,
      role: "region",
      "aria-label": `${e2.title}, table`,
      "data-scrolled": i2 || void 0,
      children: (0, s.jsxs)("table", {
        className: N().table,
        children: [
          (0, s.jsx)("thead", {
            children: (0, s.jsxs)("tr", {
              children: [
                (0, s.jsx)("th", {
                  scope: "col",
                  children: e2.categoryLabel ?? "Category"
                }),
                e2.series.map(
                  (t3, a3) => (0, s.jsx)(
                    "th",
                    {
                      scope: "col",
                      className: N().num,
                      children: (0, s.jsxs)("span", {
                        className: N().thInner,
                        children: [
                          (0, s.jsx)("span", {
                            className: N().dot,
                            style: { background: T(e2, a3) },
                            "aria-hidden": "true"
                          }),
                          t3.label
                        ]
                      })
                    },
                    t3.id
                  )
                ),
                a2 ? (0, s.jsx)("th", {
                  scope: "col",
                  className: N().num,
                  children: "Total"
                }) : null
              ]
            })
          }),
          (0, s.jsx)("tbody", {
            children: e2.categories.map(
              (n2, r3) => (0, s.jsxs)(
                "tr",
                {
                  children: [
                    (0, s.jsx)("th", { scope: "row", children: n2 }),
                    e2.series.map(
                      (e3) => (0, s.jsx)(
                        "td",
                        { className: N().num, children: t2(e3.values[r3] ?? 0) },
                        e3.id
                      )
                    ),
                    a2 ? (0, s.jsx)("td", {
                      className: `${N().num} ${N().total}`,
                      children: t2($(e2, r3))
                    }) : null
                  ]
                },
                n2 + r3
              )
            )
          })
        ]
      })
    });
  }
  function q({ size: e2 = 16, className: t2, mono: a2 = false }) {
    return (0, s.jsx)("svg", {
      width: e2,
      height: e2,
      viewBox: "0 0 24 24",
      className: t2,
      "aria-hidden": "true",
      focusable: "false",
      children: (0, s.jsx)("path", {
        fill: a2 ? "currentColor" : "#4169E1",
        d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
      })
    });
  }
  let C = new Set(
    "select from join left right inner outer full cross on where and or not in is null as group by order having limit offset with distinct case when then else end union all asc desc between like ilike exists interval date timestamp timestamptz true false filter over partition window rows range preceding following current row lateral using returning into values".split(
      " "
    )
  ), E = /--[^\n]*|'(?:[^']|'')*'?|\d+(?:\.\d+)?|[A-Za-z_][A-Za-z0-9_]*|\s+|::|<>|<=|>=|!=|[^\sA-Za-z0-9_]/g;
  function R(e2) {
    let t2 = e2.match(E) ?? [];
    return t2.map((e3, a2) => {
      if (e3.startsWith("--")) return { text: e3, kind: "comment" };
      if (e3.startsWith("'")) return { text: e3, kind: "string" };
      if (/^\s+$/.test(e3)) return { text: e3, kind: "space" };
      if (/^\d/.test(e3)) return { text: e3, kind: "number" };
      if (/^[A-Za-z_]/.test(e3)) {
        if ("::" === t2[a2 - 1]) return { text: e3, kind: "keyword" };
        let s2 = a2 + 1;
        for (; s2 < t2.length && /^\s+$/.test(t2[s2]); ) s2++;
        return "(" !== t2[s2] || C.has(e3.toLowerCase()) ? { text: e3, kind: C.has(e3.toLowerCase()) ? "keyword" : "ident" } : { text: e3, kind: "function" };
      }
      return { text: e3, kind: "punct" };
    });
  }
  let I = {
    keyword: N().tkKeyword,
    function: N().tkFunction,
    string: N().tkString,
    number: N().tkNumber,
    comment: N().tkComment,
    punct: N().tkPunct
  };
  function W({ tokens: e2, revealed: t2, settled: a2, label: n2 }) {
    let r2 = e2.slice(0, t2), i2 = e2.slice(t2).map((e3) => e3.text).join(""), l2 = Math.max(
      1,
      e2.reduce((e3, t3) => e3 + (t3.text.match(/\n/g)?.length ?? 0), 1)
    ), o2 = r2.reduce((e3, t3) => e3 + (t3.text.match(/\n/g)?.length ?? 0), 1);
    return (0, s.jsxs)("div", {
      className: N().code,
      "data-settled": a2 || void 0,
      children: [
        (0, s.jsx)("div", {
          className: N().gutter,
          "aria-hidden": "true",
          children: Array.from(
            { length: l2 },
            (e3, t3) => (0, s.jsx)(
              "span",
              { "data-on": t3 < o2 || void 0, children: t3 + 1 },
              t3
            )
          )
        }),
        (0, s.jsx)("pre", {
          className: N().pre,
          tabIndex: 0,
          "aria-label": n2,
          children: (0, s.jsxs)("code", {
            children: [
              r2.map(
                (e3, t3) => (0, s.jsx)(
                  "span",
                  {
                    className: [N().tk, I[e3.kind]].filter(Boolean).join(" "),
                    children: e3.text
                  },
                  t3
                )
              ),
              i2 ? (0, s.jsx)("span", {
                className: N().ghost,
                "aria-hidden": "true",
                children: i2
              }) : null
            ]
          })
        })
      ]
    });
  }
  let z = (...e2) => e2.filter(Boolean).join(" "), P = { name: "analytics", dialect: "PostgreSQL" }, B = [
    { value: "bar", label: "Bar" },
    { value: "line", label: "Line" },
    { value: "table", label: "Table" }
  ];
  class O extends Error {
  }
  function D(e2, t2) {
    return new Promise((a2, s2) => {
      if (t2.aborted) return void s2(new DOMException("Aborted", "AbortError"));
      let n2 = window.setTimeout(a2, e2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(n2), s2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  let F = (e2) => v.find((t2) => t2.match.test(e2));
  async function V(e2, t2, a2) {
    await D(560, a2);
    let s2 = F(e2);
    if (!s2)
      throw new O(
        `No table in ${t2.name} matches "${e2}". This preview knows signups, revenue and churn.`
      );
    return s2.sql;
  }
  async function H(e2, t2, a2, s2) {
    let n2 = F(e2) ?? b;
    if (s2) return a2(n2.rowsScanned, n2.rowsScanned), await D(700, t2), n2.result;
    a2(0, n2.rowsScanned);
    let i2 = (0, r.i)(0, n2.rowsScanned, {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (e3) => a2(Math.round(e3), n2.rowsScanned)
    });
    return t2.addEventListener("abort", () => i2.stop(), { once: true }), await D(1040, t2), n2.result;
  }
  let Y = (e2, t2) => `${e2.toLocaleString("en-US")} ${t2}${1 === e2 ? "" : "s"}`, Q = (e2) => e2 < 1e3 ? `${Math.round(e2)}ms` : `${(e2 / 1e3).toFixed(1)}s`;
  function J({ value: e2, children: t2, className: a2, reduced: n2 }) {
    return (0, s.jsx)("span", {
      className: z(N().swap, a2),
      children: (0, s.jsx)(i.N, {
        initial: false,
        children: (0, s.jsx)(
          l.PY1.span,
          {
            className: N().swapItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16 * !n2, ease: [0.22, 1, 0.36, 1] }
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.1 * !n2, ease: "easeOut" }
            },
            children: t2
          },
          e2
        )
      })
    });
  }
  function K() {
    return (0, s.jsxs)("svg", {
      className: N().spinner,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".2",
          strokeWidth: "1.75"
        }),
        (0, s.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function X({ reduced: e2 }) {
    return (0, s.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, s.jsx)(l.PY1.path, {
        d: "M3.25 8.5 6.5 11.75 12.75 4.75",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
      })
    });
  }
  function U({ kind: e2, reduced: t2 }) {
    return (0, s.jsx)("span", {
      className: N().glyph,
      "aria-hidden": "true",
      children: (0, s.jsx)(i.N, {
        initial: false,
        children: e2 ? (0, s.jsx)(
          l.PY1.span,
          {
            className: N().glyphItem,
            "data-kind": e2,
            initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: t2 ? 1 : 0.6 },
            transition: t2 ? { duration: 0 } : {
              type: "spring",
              visualDuration: 0.2,
              bounce: 0,
              opacity: { duration: 0.12 }
            },
            children: "spinner" === e2 ? (0, s.jsx)(K, {}) : "check" === e2 ? (0, s.jsx)(X, { reduced: t2 }) : "alert" === e2 ? (0, s.jsx)(d.A, { size: 16, strokeWidth: 1.75 }) : (0, s.jsx)(u.A, { size: 16, strokeWidth: 1.75 })
          },
          e2
        ) : null
      })
    });
  }
  function G({ text: e2, shown: t2 }) {
    let a2 = (0, n.useMemo)(() => e2.split(/(\s+)/).filter(Boolean), [e2]), r2 = 0, i2 = a2.length;
    for (let e3 = 0; e3 < a2.length; e3++)
      if (!/^\s+$/.test(a2[e3]) && r2++, r2 > t2) {
        i2 = e3;
        break;
      }
    let l2 = [];
    return a2.slice(0, i2).forEach((e3, t3) => {
      let a3 = Math.floor(t3 / 8);
      (l2[a3] ?? (l2[a3] = [])).push(e3);
    }), (0, s.jsxs)("p", {
      className: N().insight,
      children: [
        (0, s.jsx)(c.A, {
          size: 14,
          strokeWidth: 1.75,
          className: N().insightIcon,
          "aria-hidden": "true"
        }),
        (0, s.jsxs)("span", {
          className: N().insightText,
          children: [
            l2.map(
              (e3, t3) => (0, s.jsx)(
                "span",
                { className: N().tk, children: e3.join("") },
                t3
              )
            ),
            i2 < a2.length ? (0, s.jsx)("span", {
              className: N().ghost,
              "aria-hidden": "true",
              children: a2.slice(i2).join("")
            }) : null
          ]
        })
      ]
    });
  }
  function Z({
    question: e2,
    defaultQuestion: t2 = b.question,
    onQuestionChange: a2,
    placeholder: d2 = "Ask a question about your data",
    source: u2 = P,
    suggestions: c2 = j,
    generateSql: v2,
    runQuery: w2,
    onResult: $2,
    onError: L2,
    chart: C2,
    defaultChart: E2 = "bar",
    onChartChange: I2,
    autoRun: F2,
    keepSqlOpen: K2 = false,
    className: X2
  }) {
    var ee2;
    let et2, ea2, es2, en = (0, o.I)() ?? false, er = (0, n.useId)(), [ei, el] = (0, n.useState)(t2), eo = e2 ?? ei, [ed, eu] = (0, n.useState)("idle"), [ec, eh] = (0, n.useState)(""), [ep, em] = (0, n.useState)(0), [e_, ey] = (0, n.useState)(false), [eg, ex] = (0, n.useState)(0), [ef, ek] = (0, n.useState)(null), [eb, ev] = (0, n.useState)(null), [ej, ew] = (0, n.useState)(E2), eN = C2 ?? ej, [eS, eT] = (0, n.useState)(false), [e$, eL] = (0, n.useState)(0), [eM, eA] = (0, n.useState)(""), [eq, eC] = (0, n.useState)(true), eE = (0, n.useRef)(false), eR = (0, n.useRef)(null), eI = (0, n.useRef)(0), eW = (0, n.useRef)(""), ez = (0, n.useRef)(null), eP = (0, n.useRef)(false), eB = (0, n.useRef)(0), eO = (0, n.useRef)(async () => {
    }), [eD, eF] = (0, n.useState)(null), eV = !v2 || !w2, eH = (0, n.useMemo)(() => R(ec), [ec]), eY = "writing" === ed || "running" === ed, eQ = ec ? ec.split("\n").length : 0, eJ = (ee2 = eS && !!ec, ea2 = (0, n.useRef)(null), es2 = (0, n.useRef)(null), (0, n.useEffect)(() => {
      let e10, t3 = ea2.current, a3 = es2.current;
      if (!t3 || !a3 || "u" < typeof ResizeObserver) return;
      let s2 = a3.offsetHeight, n2 = a3.offsetWidth, i2 = () => {
        t3.style.height = "", t3.style.overflow = "", e10 = void 0;
      }, l2 = new ResizeObserver(() => {
        let l3 = a3.offsetHeight, o2 = a3.offsetWidth, d3 = o2 !== n2;
        if (n2 = o2, l3 === s2) return;
        let u3 = e10 ? t3.getBoundingClientRect().height : s2;
        (s2 = l3, e10?.stop(), en || d3) ? i2() : (t3.style.overflow = "hidden", e10 = (0, r.i)(
          t3,
          { height: [u3, l3] },
          {
            type: "spring",
            visualDuration: 0.24,
            bounce: 0,
            onComplete: i2
          }
        ));
      });
      return l2.observe(a3), () => {
        l2.disconnect(), e10?.stop();
      };
    }, [en, ee2]), { outer: ea2, inner: es2 }), eK = (e10) => {
      eB.current = e10, em(e10);
    }, eX = (t3) => {
      void 0 === e2 && el(t3), a2?.(t3);
    };
    (0, n.useEffect)(() => () => eR.current?.abort(), []);
    let eU = (0, n.useCallback)(
      async (e10) => {
        let t3 = e10.trim();
        if (!t3) return;
        eR.current?.abort();
        let a3 = new AbortController();
        eR.current = a3;
        let s2 = ++eI.current, { signal: n2 } = a3, r2 = () => eI.current === s2 && !n2.aborted;
        eW.current = t3;
        let i2 = "sql", l2 = "";
        eu("writing"), eh(""), eK(0), ey(false), ex(0), eF(null), ek(null), ev(null), eL(0), eE.current || eT(true), eA(`Writing SQL for: ${t3}`);
        try {
          let e11 = v2 ? await v2(t3, { signal: n2, source: u2 }) : await V(t3, u2, n2);
          if (!r2()) return;
          if ("string" == typeof e11) {
            l2 = e11;
            let t4 = (function(e12, t5 = 4) {
              let a5 = [], s4 = 0;
              return e12.forEach((e13, n3) => {
                "space" !== e13.kind && s4++, s4 === t5 && (a5.push(n3 + 1), s4 = 0);
              }), a5.length && a5[a5.length - 1] === e12.length || a5.push(e12.length), a5;
            })(R(l2), 4);
            if (eh(l2), en) eK(t4[t4.length - 1]);
            else
              for (let e12 of t4) {
                if (!r2()) return;
                eK(e12), await D(34, n2);
              }
          } else
            for await (let t4 of (ey(true), e11)) {
              if (!r2()) return;
              l2 += t4, eh(l2), eK(Number.MAX_SAFE_INTEGER);
            }
          if (!r2()) return;
          ey(false), eK(Number.MAX_SAFE_INTEGER), await D(140 * !en, n2), i2 = "query", eu("running"), eE.current || K2 || eT(false), eA("SQL ready. Running query.");
          let a4 = (e12, t4) => {
            r2() && (ex(e12), void 0 !== t4 && eF(t4));
          }, s3 = w2 ? await w2(l2, { signal: n2, onProgress: a4, question: t3 }) : await H(t3, n2, a4, en);
          if (!r2()) return;
          ek(s3), eu("done"), void 0 === C2 && ew(s3.chart ?? E2), $2?.(s3, { question: t3, sql: l2 });
          let o2 = [
            void 0 !== s3.rowCount ? Y(s3.rowCount, "row") : "",
            void 0 !== s3.durationMs ? Q(s3.durationMs) : ""
          ].filter(Boolean).join(", ");
          eA(
            `${s3.title}${o2 ? `, ${o2}` : ""}. ${s3.insight ?? ""}${eV ? " Simulated with sample data, nothing was queried." : ""}`.trim()
          );
        } catch (a4) {
          if (eI.current !== s2) return;
          if (n2.aborted || a4 instanceof DOMException && "AbortError" === a4.name) {
            ev({
              stage: "stopped",
              title: "Stopped",
              message: "sql" === i2 ? "The SQL was not finished, so nothing ran." : "The query was cancelled before it returned."
            }), "sql" === i2 && l2 && eB.current < Number.MAX_SAFE_INTEGER && eh(
              R(l2).slice(0, eB.current).map((e12) => e12.text).join("").trimEnd()
            ), eK(Number.MAX_SAFE_INTEGER), ey(false), eu("error"), eA("Stopped.");
            return;
          }
          let e11 = a4 instanceof Error ? a4.message : String(a4);
          ev(
            "sql" === i2 ? {
              stage: i2,
              title: a4 instanceof O ? "No matching data" : "Could not write a query",
              message: e11
            } : {
              stage: i2,
              title: "The query failed",
              message: "The database returned an error. Edit the question or try again.",
              detail: e11
            }
          ), eu("error"), eA(
            `${"sql" === i2 ? "Could not write a query" : "The query failed"}. ${e11}`
          ), L2?.(a4, { question: t3, stage: i2 });
        }
      },
      [v2, w2, u2, en, K2, C2, E2, $2, L2, eV]
    );
    eO.current = eU;
    let eG = () => eR.current?.abort(), eZ = F2 ?? !v2, e0 = (0, n.useRef)(eo);
    e0.current = eo, (0, n.useEffect)(() => {
      let e10, t3 = ez.current;
      if (!t3 || "u" < typeof IntersectionObserver) return;
      let a3 = new IntersectionObserver(
        ([t4]) => {
          eC(t4.isIntersecting), t4.isIntersecting && eZ && !eP.current && (eP.current = true, e10 = window.setTimeout(() => {
            0 === eI.current && eO.current(e0.current);
          }, 420));
        },
        { threshold: 0.35 }
      );
      return a3.observe(t3), () => {
        a3.disconnect(), window.clearTimeout(e10);
      };
    }, [eZ]);
    let e1 = "done" === ed ? ef?.insight : void 0, e22 = e1 ? e1.split(/\s+/).filter(Boolean).length : 0;
    (0, n.useEffect)(() => {
      if (!e22) return;
      if (en) return void eL(e22);
      let e10 = 0, t3 = window.setTimeout(function a3() {
        eL(e10 = Math.min(e22, e10 + 4)), e10 < e22 && (t3 = window.setTimeout(a3, 34));
      }, 300);
      return () => window.clearTimeout(t3);
    }, [e22, en, ef]);
    let e4 = u2.dialect ?? "SQL", e5 = "Generated SQL", e3 = "done" === ed && ef ? [
      e4,
      void 0 !== ef.rowCount ? Y(ef.rowCount, "row") : `${eQ} lines`,
      void 0 !== ef.durationMs ? Q(ef.durationMs) : ""
    ].filter(Boolean).join(" \xB7 ") : "error" === ed && eb?.stage === "query" ? `${e4} \xB7 failed` : ec && "writing" !== ed ? `${e4} \xB7 ${Y(eQ, "line")}` : `${e4} \xB7 ${u2.name}`, e6 = e3.split(" \xB7 ")[1] ?? e3, e8 = "writing" === ed ? "spinner" : "error" === ed && eb?.stage === "query" ? "alert" : ec && ("running" === ed || "done" === ed) ? "check" : null, e7 = !e_ && ep >= eH.length && "writing" !== ed, e9 = ef?.formatValue ?? S, te = "writing" === ed || "running" === ed ? "spinner" : "error" === ed ? eb?.stage === "stopped" ? "stopped" : "alert" : null, tt = "done" === ed && ef ? { key: `done-${ef.title}`, title: ef.title, sub: ef.subtitle ?? "" } : "writing" === ed ? {
      key: "writing",
      title: "Writing SQL",
      sub: `Reading the ${u2.name} schema`
    } : "running" === ed ? {
      key: "running",
      title: "Running query",
      sub: `Read only on ${u2.name}`
    } : "error" === ed && eb ? {
      key: `error-${eb.title}`,
      title: eb.title,
      sub: "query" === eb.stage ? `${e4} returned an error` : "stopped" === eb.stage ? "Nothing else will run" : "Try a different question"
    } : {
      key: "idle",
      title: "Ask in plain words",
      sub: `Answers are charted from a read only query on ${u2.name}`
    }, ta = { duration: 0.16 * !en, ease: [0.22, 1, 0.36, 1] }, ts = { duration: 0.1 * !en, ease: "easeOut" }, tn = c2.length ? (0, s.jsx)("ul", {
      className: N().suggestions,
      "aria-label": "Suggested questions",
      children: c2.map(
        (e10) => (0, s.jsx)(
          "li",
          {
            children: (0, s.jsxs)("button", {
              type: "button",
              className: N().suggestion,
              onClick: () => {
                eX(e10), eU(e10);
              },
              children: [
                (0, s.jsx)(h.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  className: N().suggestionIcon,
                  "aria-hidden": "true"
                }),
                (0, s.jsx)("span", {
                  className: N().suggestionText,
                  children: e10
                })
              ]
            })
          },
          e10
        )
      )
    }) : null, tr = ef ? ef.legendValue ?? (false !== ef.stacked ? "sum" : "none") : "none", ti = (0, s.jsx)(f.A, {
      options: B,
      value: eN,
      onValueChange: (e10) => {
        void 0 === C2 && ew(e10), I2?.(e10);
      },
      label: "Chart type"
    }), tl = ed;
    return "done" === ed && ef ? (tl = `done-${ef.title}`, et2 = (0, s.jsxs)("div", {
      className: N().result,
      children: [
        (0, s.jsx)("div", { className: N().viewsInline, children: ti }),
        (0, s.jsx)("ul", {
          className: N().legend,
          "aria-label": "Series",
          children: ef.series.map(
            (e10, t3) => (0, s.jsxs)(
              "li",
              {
                className: N().legendItem,
                children: [
                  (0, s.jsx)("span", {
                    className: N().dot,
                    style: { background: T(ef, t3) },
                    "aria-hidden": "true"
                  }),
                  (0, s.jsx)("span", {
                    className: N().legendLabel,
                    children: e10.label
                  }),
                  "sum" === tr ? (0, s.jsx)("span", {
                    className: N().legendValue,
                    children: e9(e10.values.reduce((e11, t4) => e11 + t4, 0))
                  }) : "last" === tr && e10.values.length ? (0, s.jsx)("span", {
                    className: N().legendValue,
                    children: e9(e10.values[e10.values.length - 1])
                  }) : null
                ]
              },
              e10.id
            )
          )
        }),
        (0, s.jsx)("div", {
          className: N().chartArea,
          children: (0, s.jsx)(i.N, {
            initial: false,
            children: (0, s.jsx)(
              l.PY1.div,
              {
                className: N().chartLayer,
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: ta },
                exit: { opacity: 0, transition: ts },
                children: "table" === eN ? (0, s.jsx)(A, { result: ef }) : (0, s.jsx)(M, {
                  result: ef,
                  kind: eN,
                  reduced: en
                })
              },
              eN
            )
          })
        }),
        ef.insight ? (0, s.jsx)(G, { text: ef.insight, shown: e$ }) : (0, s.jsx)("div", { className: N().insightSpacer })
      ]
    })) : "writing" === ed || "running" === ed ? (tl = "pending", et2 = (0, s.jsxs)("div", {
      className: N().skeleton,
      "aria-hidden": "true",
      "data-running": "running" === ed || void 0,
      children: [
        (0, s.jsxs)("div", {
          className: N().skeletonLegend,
          children: [
            (0, s.jsx)("span", {}),
            (0, s.jsx)("span", {}),
            (0, s.jsx)("span", {})
          ]
        }),
        (0, s.jsx)("div", {
          className: N().skeletonPlot,
          children: [
            38,
            52,
            46,
            61,
            44,
            66,
            72,
            64,
            78,
            70,
            84,
            80
          ].map(
            (e10, t3) => (0, s.jsx)(
              "span",
              {
                style: {
                  height: `${e10}%`,
                  animationDelay: `${60 * t3}ms`
                }
              },
              t3
            )
          )
        }),
        (0, s.jsx)("span", { className: N().skeletonInsight })
      ]
    })) : "error" === ed && eb ? (tl = `error-${eb.stage}`, et2 = (0, s.jsxs)("div", {
      className: N().message,
      children: [
        (0, s.jsx)("p", {
          className: N().messageText,
          children: eb.message
        }),
        eb.detail ? (0, s.jsx)("pre", {
          className: N().errorDetail,
          children: eb.detail
        }) : null,
        "sql" === eb.stage && "No matching data" === eb.title ? tn : (0, s.jsx)("div", {
          className: N().messageActions,
          children: (0, s.jsxs)(g.$, {
            variant: "secondary",
            size: "sm",
            onClick: () => void eU(eW.current || eo),
            children: [
              (0, s.jsx)(p.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              "stopped" === eb.stage ? "Run again" : "Try again"
            ]
          })
        })
      ]
    })) : et2 = (0, s.jsx)("div", {
      className: N().message,
      children: tn
    }), (0, s.jsxs)("div", {
      ref: ez,
      className: z(N().root, X2),
      "data-phase": ed,
      "data-offscreen": !eq || void 0,
      children: [
        (0, s.jsx)("form", {
          className: N().ask,
          onSubmit: (e10) => {
            e10.preventDefault(), eY ? eG() : eU(eo);
          },
          role: "search",
          "aria-label": `Ask ${u2.name}`,
          children: (0, s.jsxs)("label", {
            className: N().field,
            children: [
              (0, s.jsxs)("span", {
                className: N().source,
                children: [
                  (0, s.jsx)(m.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, s.jsx)("span", {
                    className: N().sourceName,
                    children: u2.name
                  })
                ]
              }),
              (0, s.jsx)("input", {
                className: N().input,
                value: eo,
                onChange: (e10) => eX(e10.target.value),
                placeholder: d2,
                "aria-label": `Question for ${u2.name}`,
                enterKeyHint: "go",
                onKeyDown: (e10) => {
                  "Escape" === e10.key && eY && (e10.preventDefault(), eG());
                },
                autoComplete: "off",
                spellCheck: false
              }),
              (0, s.jsx)("button", {
                type: "submit",
                className: N().send,
                "data-busy": eY || void 0,
                disabled: !eY && !eo.trim(),
                "aria-label": eY ? "Stop" : "Ask",
                children: (0, s.jsx)(i.N, {
                  initial: false,
                  children: (0, s.jsx)(
                    l.PY1.span,
                    {
                      className: N().sendIcon,
                      initial: { opacity: 0, scale: en ? 1 : 0.7 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: en ? 1 : 0.7 },
                      transition: en ? { duration: 0 } : {
                        type: "spring",
                        visualDuration: 0.18,
                        bounce: 0,
                        opacity: { duration: 0.1 }
                      },
                      children: eY ? (0, s.jsx)("span", { className: N().stopIcon }) : (0, s.jsx)(_.A, { size: 16, strokeWidth: 2 })
                    },
                    eY ? "stop" : "ask"
                  )
                })
              })
            ]
          })
        }),
        (0, s.jsxs)("section", {
          className: N().sql,
          "data-open": eS || void 0,
          "data-empty": !ec || void 0,
          "aria-label": "Generated SQL",
          children: [
            (0, s.jsxs)("div", {
              className: N().sqlHead,
              children: [
                (0, s.jsx)("button", {
                  type: "button",
                  className: N().sqlToggle,
                  onClick: () => {
                    ec && (eE.current = true, eT((e10) => !e10));
                  },
                  disabled: !ec,
                  "aria-expanded": eS && !!ec,
                  "aria-controls": `${er}-sql`,
                  "aria-label": `${e5}, ${e3}`
                }),
                (0, s.jsx)(q, { className: N().pgMark }),
                (0, s.jsx)("span", {
                  className: N().sqlTitle,
                  children: (0, s.jsx)(k.n, {
                    active: "writing" === ed,
                    className: N().sqlTitleText,
                    children: e5
                  })
                }),
                (0, s.jsx)("span", {
                  className: N().sqlMeta,
                  children: (0, s.jsxs)(J, {
                    value: e3,
                    reduced: en,
                    children: [
                      (0, s.jsx)("span", {
                        className: N().metaFull,
                        children: e3
                      }),
                      (0, s.jsx)("span", {
                        className: N().metaShort,
                        children: e6
                      })
                    ]
                  })
                }),
                (0, s.jsx)(U, { kind: e8, reduced: en }),
                (0, s.jsx)("span", {
                  className: N().sqlCopy,
                  children: (0, s.jsx)(x.CopyButton, {
                    value: ec,
                    label: "Copy SQL",
                    iconOnly: true,
                    variant: "plain",
                    disabled: !ec || "writing" === ed
                  })
                }),
                (0, s.jsx)(y.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  className: N().chevron,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, s.jsx)(i.N, {
              initial: false,
              children: eS && ec ? (0, s.jsx)(
                l.PY1.div,
                {
                  id: `${er}-sql`,
                  className: N().sqlClip,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: en ? { duration: 0 } : {
                    height: {
                      type: "spring",
                      visualDuration: 0.3,
                      bounce: 0
                    },
                    opacity: { duration: 0.14 }
                  },
                  children: (0, s.jsx)("div", {
                    ref: eJ.outer,
                    children: (0, s.jsx)("div", {
                      ref: eJ.inner,
                      className: N().sqlBody,
                      children: (0, s.jsx)(W, {
                        tokens: eH,
                        revealed: ep,
                        settled: e7,
                        label: `SQL for: ${eW.current}`
                      })
                    })
                  })
                },
                "sql"
              ) : null
            })
          ]
        }),
        (0, s.jsxs)("section", {
          className: N().stage,
          "aria-label": "Result",
          "aria-busy": eY,
          children: [
            (0, s.jsxs)("div", {
              className: N().stageHead,
              children: [
                (0, s.jsx)("div", {
                  className: N().headText,
                  children: (0, s.jsx)(J, {
                    value: tt.key,
                    reduced: en,
                    children: (0, s.jsxs)("span", {
                      className: te ? N().headLine : void 0,
                      children: [
                        te ? (0, s.jsx)(U, { kind: te, reduced: en }) : null,
                        (0, s.jsxs)("span", {
                          className: N().headCopy,
                          children: [
                            (0, s.jsxs)("span", {
                              className: N().headTitle,
                              children: [
                                eY ? (0, s.jsx)(k.n, {
                                  className: N().headTitleText,
                                  children: tt.title
                                }) : (0, s.jsx)("span", {
                                  className: N().headTitleText,
                                  children: tt.title
                                }),
                                "running" === ed ? (0, s.jsxs)("span", {
                                  className: N().headCount,
                                  children: [
                                    (0, s.jsx)("span", {
                                      "aria-hidden": "true",
                                      children: "\xB7"
                                    }),
                                    (0, s.jsx)("span", {
                                      className: N().count,
                                      style: null !== eD ? {
                                        minWidth: `${eD.toLocaleString("en-US").length - 0.4}ch`
                                      } : void 0,
                                      children: eg.toLocaleString("en-US")
                                    }),
                                    (0, s.jsx)("span", {
                                      children: "rows"
                                    })
                                  ]
                                }) : null
                              ]
                            }),
                            (0, s.jsx)("span", {
                              className: N().headSub,
                              children: tt.sub
                            })
                          ]
                        })
                      ]
                    })
                  })
                }),
                (0, s.jsx)(i.N, {
                  initial: false,
                  children: "done" === ed && ef ? (0, s.jsx)(
                    l.PY1.div,
                    {
                      className: N().views,
                      initial: { opacity: 0 },
                      animate: { opacity: 1, transition: ta },
                      exit: { opacity: 0, transition: ts },
                      children: ti
                    },
                    "views"
                  ) : null
                })
              ]
            }),
            (0, s.jsx)("div", {
              className: N().stageBody,
              children: (0, s.jsx)(i.N, {
                initial: false,
                children: (0, s.jsx)(
                  l.PY1.div,
                  {
                    className: N().stageLayer,
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: ta },
                    exit: { opacity: 0, transition: ts },
                    children: et2
                  },
                  tl
                )
              })
            })
          ]
        }),
        (0, s.jsx)("span", {
          className: N().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eM
        })
      ]
    });
  }
  var ee = a(66074), et = a.n(ee);
  function ea() {
    return (0, s.jsx)("div", {
      className: et().demo,
      children: (0, s.jsx)(Z, { className: et().card })
    });
  }
  let es = ea;
};

__m(__module,__exports,__require);
}