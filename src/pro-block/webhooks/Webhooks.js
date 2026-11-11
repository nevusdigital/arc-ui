function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { Webhooks: () => em, default: () => eb });
  var i, n = a(95155), s = a(12115), r = a(80642), o = a(79196), l = a(25354), d = a(28245), c = a(92171), u = a(18310), p = a(57700), h = a(11012), _ = a(64577), m = a(41189), b = a(2125), f = a(92218), y = a(90034), x = a(51288), v = a(20530), j = a(73474), g = a(35978), w = a(7770);
  let k = { name: "Sofia Ramirez", photo: "media/people/sofia-ramirez.svg" }, N = [
    { id: "order.paid", description: "An order is paid in full" },
    {
      id: "order.refunded",
      description: "An order is refunded, fully or in part"
    },
    { id: "invoice.paid", description: "A subscription invoice is paid" },
    {
      id: "invoice.payment_failed",
      description: "A renewal charge is declined"
    },
    { id: "payout.paid", description: "A payout reaches your bank" },
    { id: "dispute.created", description: "A customer disputes a charge" }
  ], T = {
    200: "OK",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    504: "Gateway Timeout"
  };
  function $(e2) {
    let t2 = (function(e3) {
      let t3 = 2166136261;
      for (let a2 of e3) t3 = Math.imul(t3 ^ a2.charCodeAt(0), 16777619);
      return t3 >>> 0 || 1;
    })(e2);
    return () => (t2 ^= t2 << 13, t2 ^= t2 >>> 17, t2 ^= t2 << 5, (t2 >>>= 0) / 4294967296);
  }
  function S(e2, t2, a2 = "0123456789abcdef") {
    let i2 = $(e2), n2 = "";
    for (let e3 = 0; e3 < t2; e3++) n2 += a2[Math.floor(i2() * a2.length)];
    return n2;
  }
  let R = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", C = (e2) => e2.split(":").map(Number), L = (e2) => {
    let [t2, a2, i2] = C(e2);
    return Date.UTC(2026, 8, 22, t2, a2, i2) / 1e3;
  }, P = (e2) => {
    let [t2, a2] = C(e2);
    return Math.min(47, Math.floor(((t2 + 9) * 60 + a2) / 30));
  }, I = (e2) => {
    let t2 = (900 + 30 * e2) % 1440, a2 = (t2 + 30) % 1440, i2 = (e3) => `${String(Math.floor(e3 / 60)).padStart(2, "0")}:${String(e3 % 60).padStart(2, "0")}`;
    return 47 === e2 ? `${i2(t2)} to now` : `${i2(t2)} to ${i2(a2)}`;
  }, E = (e2) => {
    let t2 = 52325 + 9 * e2;
    return [Math.floor(t2 / 3600), Math.floor(t2 / 60) % 60, t2 % 60].map((e3) => String(e3).padStart(2, "0")).join(":");
  };
  function M(e2, t2) {
    let a2 = $(e2);
    return Array.from({ length: 48 }, (e3, i2) => {
      let n2 = Math.round(
        (0.1 + 0.9 * Math.max(0, Math.sin(Math.PI * ((15 + i2 / 2) % 24 - 6) / 16))) * t2 * (0.72 + 0.56 * a2())
      );
      return 47 === i2 ? Math.max(1, Math.round(0.12 * n2)) : n2;
    });
  }
  function B(e2) {
    return e2.map(([e3, t2, a2, i2, n2, s2, r2]) => ({
      id: e3,
      eventId: `evt_${S(e3, 10, R)}`,
      event: t2,
      status: a2,
      latency: i2,
      time: n2,
      eventTime: n2,
      attempt: 1,
      response: r2 ?? '{"received":true}',
      data: s2
    }));
  }
  function A(e2) {
    let t2 = [...e2.volume];
    for (let a2 of e2.deliveries) {
      let i2 = P(a2.eventTime);
      t2[i2] = Math.max(
        t2[i2],
        e2.deliveries.filter((e3) => P(e3.eventTime) === i2).length
      );
    }
    return { ...e2, volume: t2 };
  }
  let O = [
    A({
      id: "ledger",
      name: "Ledger sync",
      url: "https://ledger.fernway.example/v1/halden/events",
      events: [
        "invoice.paid",
        "invoice.payment_failed",
        "payout.paid",
        "refund.created"
      ],
      version: "2026-08-01",
      secretTail: "7f3a",
      addedBy: {
        name: "Emma Collins",
        photo: "media/people/emma-collins.svg"
      },
      added: "Mar 4, 2026",
      volume: M("ledger", 14),
      deliveries: B([
        [
          "dlv_8Kq2Lm4",
          "invoice.paid",
          200,
          142,
          "14:31:08",
          {
            id: "in_1Q8vRt2",
            object: "invoice",
            number: "FW-2026-1182",
            customer: "cus_R4bLw9",
            amount_paid: 48e3,
            currency: "usd",
            status: "paid"
          }
        ],
        [
          "dlv_7Hn1Pc9",
          "invoice.payment_failed",
          500,
          2318,
          "14:12:44",
          {
            id: "in_1Q8uXe7",
            object: "invoice",
            number: "FW-2026-1179",
            customer: "cus_P2mZr6",
            amount_due: 129900,
            currency: "usd",
            attempt_count: 2,
            next_payment_attempt: 1790265600
          },
          '{"error":"ledger_write_failed","message":"connection pool exhausted"}'
        ],
        [
          "dlv_6Gm0Ob8",
          "payout.paid",
          200,
          98,
          "13:47:02",
          {
            id: "po_1Q9aZt4",
            object: "payout",
            amount: 1845210,
            currency: "usd",
            arrival_date: 1790035200,
            destination: "ba_1PzR7c",
            status: "paid"
          }
        ],
        [
          "dlv_5Fl9Na7",
          "invoice.paid",
          504,
          3e4,
          "11:05:19",
          {
            id: "in_1Q8pLk3",
            object: "invoice",
            number: "FW-2026-1164",
            customer: "cus_K9dQe2",
            amount_paid: 21900,
            currency: "usd",
            status: "paid"
          },
          "upstream request timeout"
        ],
        [
          "dlv_4Ek8Mz6",
          "refund.created",
          200,
          121,
          "10:22:51",
          {
            id: "re_1Q8nWb5",
            object: "refund",
            charge: "ch_3Q8mTz1",
            amount: 4800,
            currency: "usd",
            reason: "requested_by_customer",
            status: "succeeded"
          }
        ],
        [
          "dlv_3Dj7Ly5",
          "invoice.paid",
          500,
          1904,
          "09:14:36",
          {
            id: "in_1Q8kFa9",
            object: "invoice",
            number: "FW-2026-1151",
            customer: "cus_H3vNp8",
            amount_paid: 9900,
            currency: "usd",
            status: "paid"
          },
          '{"error":"ledger_write_failed","message":"deadlock detected on ledger_entries"}'
        ],
        [
          "dlv_2Ci6Kx4",
          "invoice.paid",
          200,
          133,
          "08:59:10",
          {
            id: "in_1Q8jRm0",
            object: "invoice",
            number: "FW-2026-1149",
            customer: "cus_B7xLc4",
            amount_paid: 36e3,
            currency: "usd",
            status: "paid"
          }
        ]
      ])
    }),
    A({
      id: "orders",
      name: "Order fulfilment",
      url: "https://api.fernway.example/webhooks/halden",
      events: ["order.paid", "order.refunded", "customer.created"],
      version: "2026-08-01",
      secretTail: "c21e",
      addedBy: {
        name: "Marcus Johnson",
        photo: "media/people/marcus-johnson.svg"
      },
      added: "Jan 18, 2026",
      volume: M("orders", 34),
      deliveries: B([
        [
          "dlv_9Lr3Mn5",
          "order.paid",
          200,
          87,
          "14:30:52",
          {
            id: "ord_7Qm2Ks",
            object: "order",
            customer: "cus_T7wQx1",
            amount_total: 21400,
            currency: "usd",
            items: 3,
            shipping: "standard"
          }
        ],
        [
          "dlv_9Ks2Ln4",
          "customer.created",
          200,
          64,
          "14:30:49",
          {
            id: "cus_T7wQx1",
            object: "customer",
            name: "Priya Raman",
            email: "priya@lumenhaus.co",
            country: "US"
          }
        ],
        [
          "dlv_9Jt1Ko3",
          "order.paid",
          200,
          112,
          "14:26:13",
          {
            id: "ord_7Qk8Hd",
            object: "order",
            customer: "cus_M2pRz5",
            amount_total: 5800,
            currency: "usd",
            items: 1,
            shipping: "express"
          }
        ],
        [
          "dlv_9Iu0Jp2",
          "order.refunded",
          200,
          95,
          "14:02:37",
          {
            id: "ord_7Qh4Wn",
            object: "order",
            customer: "cus_D8nVt3",
            amount_refunded: 5800,
            currency: "usd",
            reason: "damaged_in_transit"
          }
        ],
        [
          "dlv_9Hv9Iq1",
          "order.paid",
          200,
          238,
          "13:58:04",
          {
            id: "ord_7Qg1Bc",
            object: "order",
            customer: "cus_F4kYs9",
            amount_total: 13250,
            currency: "usd",
            items: 2,
            shipping: "standard"
          }
        ]
      ])
    }),
    A({
      id: "alerts",
      name: "Ops alerts",
      url: "https://hooks.fernway.example/ops/halden",
      events: ["dispute.created", "payout.failed"],
      version: "2026-05-12",
      secretTail: "90bd",
      addedBy: {
        name: "Ava Mitchell",
        photo: "media/people/ava-mitchell.svg"
      },
      added: "Jun 9, 2026",
      volume: (i = { 4: 1, 17: 1, 32: 1, 43: 2 }, Array.from({ length: 48 }, (e2, t2) => i[t2] ?? 0)),
      deliveries: B([
        [
          "dlv_1Aw5Cr8",
          "dispute.created",
          200,
          311,
          "12:40:18",
          {
            id: "dp_1Q8tYh6",
            object: "dispute",
            charge: "ch_3Q7wPx2",
            amount: 8900,
            currency: "usd",
            reason: "product_not_received",
            status: "needs_response"
          }
        ],
        [
          "dlv_1Bx4Ds7",
          "payout.failed",
          200,
          276,
          "07:12:55",
          {
            id: "po_1Q8hVc2",
            object: "payout",
            amount: 212e3,
            currency: "usd",
            failure_code: "account_closed",
            destination: "ba_1NcT3q"
          }
        ]
      ])
    })
  ], Y = {
    "order.paid": {
      id: "ord_test_4Tq9",
      object: "order",
      customer: "cus_test_Z1",
      amount_total: 2500,
      currency: "usd",
      items: 1,
      shipping: "standard"
    },
    "order.refunded": {
      id: "ord_test_4Tq9",
      object: "order",
      customer: "cus_test_Z1",
      amount_refunded: 2500,
      currency: "usd",
      reason: "requested_by_customer"
    },
    "customer.created": {
      id: "cus_test_Z1",
      object: "customer",
      name: "Test customer",
      email: "test@example.com",
      country: "US"
    },
    "invoice.paid": {
      id: "in_test_8Kd2",
      object: "invoice",
      number: "TEST-0001",
      customer: "cus_test_Z1",
      amount_paid: 2500,
      currency: "usd",
      status: "paid"
    },
    "invoice.payment_failed": {
      id: "in_test_8Kd2",
      object: "invoice",
      number: "TEST-0001",
      customer: "cus_test_Z1",
      amount_due: 2500,
      currency: "usd",
      attempt_count: 1
    },
    "payout.paid": {
      id: "po_test_3Hs7",
      object: "payout",
      amount: 1e5,
      currency: "usd",
      destination: "ba_test_9",
      status: "paid"
    },
    "payout.failed": {
      id: "po_test_3Hs7",
      object: "payout",
      amount: 1e5,
      currency: "usd",
      failure_code: "account_closed"
    },
    "refund.created": {
      id: "re_test_6Pw1",
      object: "refund",
      charge: "ch_test_2",
      amount: 2500,
      currency: "usd",
      status: "succeeded"
    },
    "dispute.created": {
      id: "dp_test_5Lx3",
      object: "dispute",
      charge: "ch_test_2",
      amount: 2500,
      currency: "usd",
      reason: "fraudulent",
      status: "needs_response"
    }
  }, z = (e2) => e2.status >= 300 && !e2.resolved;
  function F(e2) {
    let t2 = Array.from({ length: 48 }, () => 0);
    for (let a3 of e2.deliveries) z(a3) && (t2[P(a3.eventTime)] += 1);
    let a2 = e2.volume.reduce((e3, t3) => e3 + t3, 0), i2 = t2.reduce((e3, t3) => e3 + t3, 0);
    return { volume: e2.volume, fails: t2, total: a2, failing: i2 };
  }
  var H = a(90062), D = a.n(H);
  let W = [...w.T.ease.enter], K = [...w.T.ease.standard], U = { duration: 0 }, q = { opacity: 1, y: "0em", filter: "blur(0px)" }, Q = { opacity: 0, y: "0.35em", filter: `blur(${w.T.blur.soft}px)` }, V = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${w.T.blur.subtle}px)`,
    transition: { duration: w.T.duration.fast, ease: K }
  }, Z = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${w.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: "0em", filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${w.T.blur.subtle}px)`
    })
  }, G = (e2) => ({
    initial: e2 ? { opacity: 0 } : { opacity: 0, height: 0, overflow: "hidden" },
    animate: {
      opacity: 1,
      height: "auto",
      transitionEnd: { overflow: "visible" }
    },
    exit: e2 ? { opacity: 0, transition: U } : {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: {
        height: w.T.spring.smooth,
        opacity: { duration: w.T.duration.fast }
      }
    },
    transition: e2 ? U : {
      height: w.T.spring.smooth,
      opacity: { duration: w.T.duration.standard, ease: W, delay: 0.08 }
    }
  }), J = new Intl.NumberFormat("en-US"), X = (e2) => e2.replace(/^https:\/\//, "").split("/")[0], ee = (e2) => e2 >= 1e4 ? `${(e2 / 1e3).toFixed(1)} s` : `${J.format(e2)} ms`, et = (e2, t2) => e2 ? Math.floor((e2 - t2) / e2 * 1e3) / 10 : 0, ea = (e2, t2) => e2 ? `${et(e2, t2).toFixed(1)}%` : "\u2013", ei = (e2) => (e2.deliveries.find(z) ?? e2.deliveries[0])?.id, en = [
    { slot: 0, label: "15:00" },
    { slot: 12, label: "21:00" },
    { slot: 24, label: "03:00" },
    { slot: 36, label: "09:00" }
  ], es = /^https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+(:\d+)?(\/\S*)?$/i;
  function er({ text: e2, reduced: t2, wrap: a2 = false }) {
    return (0, n.jsx)("span", {
      className: a2 ? D().swapBlock : D().swap,
      children: (0, n.jsx)(r.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(eo, { text: e2, reduced: t2, wrap: a2 }, e2)
      })
    });
  }
  function eo({ text: e2, reduced: t2, wrap: a2 }) {
    let i2 = (0, o.tF)();
    return (0, n.jsx)(l.PY1.span, {
      className: a2 ? D().swapWrap : D().swapText,
      "aria-hidden": !i2 || void 0,
      initial: t2 ? { opacity: 0 } : Q,
      animate: q,
      exit: t2 ? { opacity: 0, transition: U } : V,
      transition: t2 ? U : { duration: w.T.duration.standard, ease: W },
      children: e2
    });
  }
  function el({ text: e2, value: t2, reduced: a2 }) {
    let [i2, o2] = (0, s.useState)({ value: t2, direction: 1 });
    i2.value !== t2 && o2({ value: t2, direction: t2 > i2.value ? 1 : -1 });
    let d2 = [...e2];
    return (0, n.jsx)("span", {
      className: D().roll,
      "aria-hidden": "true",
      children: d2.map((e3, t3) => {
        let s2 = d2.length - t3, o3 = 0.03 * Math.min(s2 - 1, 4);
        return (0, n.jsx)(
          "span",
          {
            className: D().rollSlot,
            children: (0, n.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              custom: i2.direction,
              children: (0, n.jsx)(
                l.PY1.span,
                {
                  custom: i2.direction,
                  variants: Z,
                  initial: !a2 && "enter",
                  animate: "center",
                  exit: a2 ? void 0 : "exit",
                  transition: a2 ? U : {
                    y: { ...w.T.spring.snappy, delay: o3 },
                    opacity: { duration: w.T.duration.fast, delay: o3 },
                    filter: { duration: w.T.duration.fast, delay: o3 }
                  },
                  children: e3
                },
                e3
              )
            })
          },
          s2
        );
      })
    });
  }
  function ed(e2, t2, a2) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e2.key)) return;
    let i2 = Array.from(e2.currentTarget.querySelectorAll(`[${t2}]`)), n2 = i2.indexOf(document.activeElement);
    if (n2 < 0) return;
    e2.preventDefault();
    let s2 = "Home" === e2.key ? 0 : "End" === e2.key ? i2.length - 1 : Math.min(
      i2.length - 1,
      Math.max(0, n2 + ("ArrowDown" === e2.key ? 1 : -1))
    );
    i2[s2].focus(), a2(i2[s2].getAttribute(t2) ?? "");
  }
  function ec({
    item: e2,
    selected: t2,
    selectedId: a2,
    fresh: i2,
    reduced: s2,
    detailId: r2,
    onSelect: o2
  }) {
    let { total: d2, failing: c2 } = F(e2), u2 = e2.events.slice(0, 3), p2 = e2.events.length - u2.length;
    return (0, n.jsx)(l.PY1.div, {
      role: "listitem",
      className: D().row,
      ...G(s2),
      children: (0, n.jsxs)("div", {
        className: D().endpoint,
        "data-fresh": i2,
        children: [
          t2 && (0, n.jsx)(l.PY1.span, {
            layoutId: "endpoint-highlight",
            layoutDependency: a2,
            className: D().highlight,
            transition: s2 ? U : w.T.spring.morph,
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", { className: D().flash, "aria-hidden": "true" }),
          (0, n.jsxs)("button", {
            type: "button",
            className: D().endpointButton,
            "data-endpoint": e2.id,
            "aria-current": t2 ? "true" : void 0,
            "aria-controls": r2,
            onClick: o2,
            children: [
              (0, n.jsxs)("span", {
                className: D().identity,
                children: [
                  (0, n.jsx)("span", { className: D().name, children: e2.name }),
                  (0, n.jsxs)("span", {
                    className: D().url,
                    children: [
                      (0, n.jsx)("span", {
                        className: D().host,
                        children: X(e2.url)
                      }),
                      e2.url.replace(/^https:\/\/[^/]+/, "")
                    ]
                  })
                ]
              }),
              (0, n.jsx)("span", {
                className: D().srOnly,
                children: `Events: ${e2.events.join(", ")}. `
              }),
              (0, n.jsxs)("span", {
                className: D().events,
                "aria-hidden": "true",
                children: [
                  u2.map(
                    (e3) => (0, n.jsx)(
                      "span",
                      {
                        className: D().chip,
                        "aria-hidden": "true",
                        children: e3
                      },
                      e3
                    )
                  ),
                  p2 > 0 && (0, n.jsxs)("span", {
                    className: D().chip,
                    "aria-hidden": "true",
                    children: ["+", p2]
                  })
                ]
              }),
              (0, n.jsxs)("span", {
                className: D().rate,
                children: [
                  (0, n.jsx)(el, {
                    text: ea(d2, c2),
                    value: et(d2, c2),
                    reduced: s2
                  }),
                  (0, n.jsx)("span", {
                    className: D().srOnly,
                    children: d2 ? `${ea(d2, c2)} delivered. ` : "No events yet. "
                  }),
                  (0, n.jsx)("span", {
                    className: D().rateLabel,
                    "aria-hidden": "true",
                    children: "delivered"
                  })
                ]
              }),
              (0, n.jsx)("span", {
                className: D().state,
                children: (0, n.jsx)(y.E, {
                  size: "sm",
                  tone: c2 ? "warning" : d2 ? "success" : "neutral",
                  icon: c2 ? (0, n.jsx)(h.A, { size: 12, strokeWidth: 2 }) : d2 ? (0, n.jsx)(_.A, { size: 12, strokeWidth: 2 }) : void 0,
                  children: c2 ? `${c2} failing` : d2 ? "Healthy" : "No events"
                })
              })
            ]
          })
        ]
      })
    });
  }
  function eu({ endpoint: e2, reduced: t2 }) {
    let { volume: a2, fails: i2, total: r2, failing: o2 } = F(e2), [d2, c2] = (0, s.useState)(null), u2 = Math.max(4, ...a2), p2 = a2.indexOf(Math.max(...a2)), h2 = i2.flatMap((e3, t3) => e3 ? [I(t3)] : []), _2 = r2 ? `Events per half hour over the last 24 hours: ${J.format(r2)} events, ${o2 ? `${o2} still failing, from ${h2.join(", ")}` : "all delivered"}. Busiest from ${I(p2)} with ${a2[p2]} events.` : "No events in the last 24 hours.", m2 = r2 ? `${J.format(r2)} events` : "No events yet";
    return (0, n.jsxs)("div", {
      className: D().chartBlock,
      children: [
        (0, n.jsx)("p", {
          className: D().caption,
          "aria-hidden": "true",
          children: null === d2 ? (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(er, { text: m2, reduced: t2 }),
              o2 ? (0, n.jsxs)("span", {
                className: D().legend,
                children: [
                  (0, n.jsx)("span", { className: D().swatch }),
                  (0, n.jsx)(er, { text: `${o2} failed`, reduced: t2 })
                ]
              }) : r2 ? (0, n.jsx)("span", {
                className: D().legendMuted,
                children: "all delivered"
              }) : null
            ]
          }) : (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("span", {
                className: D().readoutTime,
                children: I(d2)
              }),
              (0, n.jsx)("span", {
                children: `${a2[d2]} ${1 === a2[d2] ? "event" : "events"}`
              }),
              i2[d2] ? (0, n.jsxs)("span", {
                className: D().legend,
                children: [
                  (0, n.jsx)("span", { className: D().swatch }),
                  `${i2[d2]} failed`
                ]
              }) : null
            ]
          })
        }),
        (0, n.jsx)("div", {
          className: D().chart,
          role: "img",
          "aria-label": _2,
          "data-hover": null !== d2,
          onPointerMove: function(e3) {
            let t3 = e3.currentTarget.getBoundingClientRect();
            c2(
              Math.min(
                47,
                Math.max(0, Math.floor((e3.clientX - t3.left) / t3.width * 48))
              )
            );
          },
          onPointerLeave: () => c2(null),
          children: a2.map((e3, a3) => {
            let s2 = i2[a3] ? Math.max(5, Math.round(i2[a3] / u2 * 56) + 1) : 0, r3 = e3 ? Math.max(3, Math.round(e3 / u2 * 56), s2 + (e3 > i2[a3] ? 3 : -1)) : 0, o3 = t2 ? U : { ...w.T.spring.smooth, delay: 4e-3 * a3 };
            return (0, n.jsxs)(
              l.PY1.span,
              {
                className: D().bar,
                "data-active": d2 === a3,
                initial: false,
                animate: { height: r3 },
                transition: o3,
                children: [
                  (0, n.jsx)(l.PY1.span, {
                    className: D().fail,
                    initial: false,
                    animate: { height: s2 },
                    transition: o3
                  }),
                  (0, n.jsx)("span", { className: D().ok })
                ]
              },
              a3
            );
          })
        }),
        (0, n.jsxs)("div", {
          className: D().axis,
          "aria-hidden": "true",
          children: [
            en.map(
              (e3) => (0, n.jsx)(
                "span",
                {
                  style: { left: `${e3.slot / 48 * 100}%` },
                  children: e3.label
                },
                e3.slot
              )
            ),
            (0, n.jsx)("span", { className: D().now, children: "Now" })
          ]
        })
      ]
    });
  }
  function ep({
    item: e2,
    endpointId: t2,
    selected: a2,
    selectedKey: i2,
    fresh: s2,
    sending: o2,
    reduced: d2,
    inspectorId: c2,
    onSelect: u2,
    onRetry: p2,
    buttonRef: h2
  }) {
    let b2 = e2.status < 300, f2 = `${e2.status} ${T[e2.status]}, ${e2.event}${e2.attempt > 1 ? `, attempt ${e2.attempt}` : ""}${e2.test ? ", test event" : ""}, ${ee(e2.latency)}, sent at ${e2.time}${e2.resolved ? ", resolved by a retry" : ""}`, v2 = {
      initial: d2 ? { opacity: 0 } : Q,
      animate: q,
      exit: d2 ? { opacity: 0, transition: U } : V,
      transition: d2 ? U : { duration: w.T.duration.standard, ease: W }
    };
    return (0, n.jsx)(l.PY1.div, {
      role: "listitem",
      className: D().row,
      "data-row": e2.id,
      ...G(d2),
      children: (0, n.jsxs)("div", {
        className: D().delivery,
        "data-fresh": s2,
        "data-resolved": e2.resolved ?? false,
        children: [
          a2 && (0, n.jsx)(l.PY1.span, {
            layoutId: `delivery-${t2}`,
            layoutDependency: i2,
            className: D().highlight,
            transition: d2 ? U : w.T.spring.morph,
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", { className: D().flash, "aria-hidden": "true" }),
          (0, n.jsxs)("button", {
            ref: h2,
            type: "button",
            className: D().deliveryButton,
            "data-delivery": e2.id,
            "aria-current": a2 ? "true" : void 0,
            "aria-controls": c2,
            "aria-label": f2,
            onClick: u2,
            children: [
              (0, n.jsx)(y.E, {
                size: "sm",
                tone: b2 ? "success" : "danger",
                className: D().statusCode,
                children: String(e2.status)
              }),
              (0, n.jsxs)("span", {
                className: D().eventCell,
                children: [
                  (0, n.jsx)("span", {
                    className: D().eventName,
                    children: e2.event
                  }),
                  e2.attempt > 1 ? (0, n.jsxs)("span", {
                    className: D().attempt,
                    children: ["Attempt ", e2.attempt]
                  }) : e2.test ? (0, n.jsx)("span", {
                    className: D().attempt,
                    children: "Test"
                  }) : null
                ]
              }),
              (0, n.jsxs)("span", {
                className: D().meta,
                children: [
                  (0, n.jsx)("span", {
                    className: D().latency,
                    children: ee(e2.latency)
                  }),
                  (0, n.jsx)("span", { className: D().time, children: e2.time })
                ]
              })
            ]
          }),
          (0, n.jsx)("span", {
            className: D().action,
            children: !b2 && (0, n.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              children: e2.resolved ? (0, n.jsxs)(
                l.PY1.span,
                {
                  className: D().resolved,
                  ...v2,
                  children: [
                    (0, n.jsx)(_.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Resolved"
                  ]
                },
                "resolved"
              ) : (0, n.jsx)(
                l.PY1.span,
                {
                  ...v2,
                  children: (0, n.jsx)(x.$, {
                    type: "button",
                    size: "sm",
                    variant: "secondary",
                    loading: o2,
                    "aria-label": o2 ? `Sending ${e2.event} again` : `Retry ${e2.event} from ${e2.time}`,
                    onClick: p2,
                    children: o2 ? "Sending" : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(m.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Retry"
                      ]
                    })
                  })
                },
                "retry"
              )
            })
          })
        ]
      })
    });
  }
  function eh({ text: e2 }) {
    let t2 = /("(?:[^"\\]|\\.)*")(\s*:)?|(-?\d+(?:\.\d+)?)|\b(true|false|null)\b/g;
    return (0, n.jsx)("pre", {
      className: D().code,
      children: (0, n.jsx)("code", {
        children: e2.split("\n").map((e3, a2) => {
          let i2 = [], s2 = 0;
          for (let a3 of e3.matchAll(t2)) {
            let t3 = a3.index ?? 0;
            t3 > s2 && i2.push(e3.slice(s2, t3)), a3[1] ? (i2.push(
              (0, n.jsx)(
                "span",
                {
                  className: a3[2] ? D().key : D().string,
                  children: a3[1]
                },
                t3
              )
            ), a3[2] && i2.push(a3[2])) : i2.push(
              (0, n.jsx)(
                "span",
                {
                  className: a3[3] ? D().number : D().literal,
                  children: a3[3] ?? a3[4]
                },
                t3
              )
            ), s2 = t3 + a3[0].length;
          }
          return s2 < e3.length && i2.push(e3.slice(s2)), (0, n.jsxs)(
            "span",
            {
              className: D().line,
              children: [
                (0, n.jsx)("span", {
                  className: D().lineNumber,
                  "aria-hidden": "true",
                  children: a2 + 1
                }),
                (0, n.jsx)("span", { children: i2 })
              ]
            },
            a2
          );
        })
      })
    });
  }
  function e_({
    endpoint: e2,
    delivery: t2,
    tab: a2,
    reduced: i2,
    id: o2,
    onTab: d2,
    onCopied: c2
  }) {
    let u2 = (0, s.useRef)(null), p2 = (0, s.useRef)({ payload: null, headers: null }), h2 = t2 ? JSON.stringify(
      {
        id: t2.eventId,
        type: t2.event,
        created: L(t2.eventTime),
        api_version: e2.version,
        livemode: !t2.test,
        data: { object: t2.data }
      },
      null,
      2
    ) : "", _2 = t2 ? [
      ["Content-Type", "application/json; charset=utf-8"],
      ["User-Agent", "Halden-Webhooks/2026-08"],
      ["Halden-Event-Id", t2.eventId],
      ["Halden-Delivery-Id", t2.id],
      ["Halden-Attempt", String(t2.attempt)],
      [
        "Halden-Signature",
        `t=${L(t2.time)},v1=${S(`${t2.id}:${e2.secretTail}`, 64)}`
      ]
    ] : [];
    if ((0, s.useEffect)(() => {
      u2.current?.scrollTo({ top: 0, left: 0 });
    }, [t2?.id, a2]), !t2)
      return (0, n.jsx)("section", {
        id: o2,
        className: D().inspector,
        "aria-label": "Delivery inspector",
        children: (0, n.jsx)("p", {
          className: D().placeholder,
          children: "The request body and headers of each delivery show up here."
        })
      });
    let m2 = t2.status < 300, b2 = {
      initial: i2 ? { opacity: 0 } : { opacity: 0, y: 4, filter: `blur(${w.T.blur.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: {
        opacity: 0,
        transition: i2 ? U : { duration: w.T.duration.instant }
      },
      transition: i2 ? U : { duration: w.T.duration.standard, ease: W }
    };
    return (0, n.jsxs)("section", {
      id: o2,
      className: D().inspector,
      "aria-labelledby": `${o2}-title`,
      children: [
        (0, n.jsxs)("div", {
          className: D().inspectorHead,
          children: [
            (0, n.jsxs)("div", {
              className: D().inspectorTitle,
              children: [
                (0, n.jsx)("h4", {
                  id: `${o2}-title`,
                  children: (0, n.jsx)(er, { text: t2.event, reduced: i2 })
                }),
                (0, n.jsx)("p", {
                  children: (0, n.jsx)(er, {
                    text: `${t2.eventId}, attempt ${t2.attempt}`,
                    reduced: i2
                  })
                })
              ]
            }),
            (0, n.jsx)(j.CopyButton, {
              value: "payload" === a2 ? h2 : _2.map(([e3, t3]) => `${e3}: ${t3}`).join("\n"),
              label: "Copy",
              onCopied: () => c2("payload" === a2 ? "Payload" : "Headers")
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: D().response,
          children: [
            (0, n.jsxs)("span", {
              className: D().responseLine,
              children: [
                (0, n.jsx)("span", {
                  className: D().responseLabel,
                  children: "Response"
                }),
                (0, n.jsx)(y.E, {
                  size: "sm",
                  tone: m2 ? "success" : "danger",
                  children: String(t2.status)
                }),
                (0, n.jsx)(er, {
                  text: `${T[t2.status]} in ${ee(t2.latency)}`,
                  reduced: i2
                })
              ]
            }),
            (0, n.jsx)("code", {
              className: D().responseBody,
              children: (0, n.jsx)(er, {
                text: t2.response,
                reduced: i2,
                wrap: true
              })
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: D().tabs,
          role: "tablist",
          "aria-label": "Request",
          onKeyDown: function(e3) {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e3.key))
              return;
            e3.preventDefault();
            let t3 = "Home" === e3.key ? "payload" : "End" === e3.key || "payload" === a2 ? "headers" : "payload";
            d2(t3), p2.current[t3]?.focus();
          },
          children: ["payload", "headers"].map(
            (t3) => (0, n.jsxs)(
              "button",
              {
                ref: (e3) => {
                  p2.current[t3] = e3;
                },
                id: `${o2}-${t3}`,
                type: "button",
                role: "tab",
                className: D().tab,
                "aria-selected": a2 === t3,
                "aria-controls": `${o2}-panel`,
                tabIndex: a2 === t3 ? 0 : -1,
                onClick: () => d2(t3),
                children: [
                  a2 === t3 && (0, n.jsx)(l.PY1.span, {
                    layoutId: `tab-${e2.id}`,
                    layoutDependency: a2,
                    className: D().tabHighlight,
                    transition: i2 ? U : w.T.spring.morph,
                    "aria-hidden": "true"
                  }),
                  (0, n.jsx)("span", {
                    className: D().tabLabel,
                    children: "payload" === t3 ? "Payload" : "Headers"
                  })
                ]
              },
              t3
            )
          )
        }),
        (0, n.jsx)("div", {
          ref: u2,
          id: `${o2}-panel`,
          className: D().panel,
          role: "tabpanel",
          "aria-labelledby": `${o2}-${a2}`,
          tabIndex: 0,
          children: (0, n.jsx)(r.N, {
            mode: "popLayout",
            initial: false,
            children: (0, n.jsx)(
              l.PY1.div,
              {
                className: D().panelBody,
                ...b2,
                children: "payload" === a2 ? (0, n.jsx)(eh, { text: h2 }) : (0, n.jsx)("dl", {
                  className: D().headers,
                  children: _2.map(
                    ([e3, t3]) => (0, n.jsxs)(
                      "div",
                      {
                        children: [
                          (0, n.jsx)("dt", { children: e3 }),
                          (0, n.jsx)("dd", { children: t3 })
                        ]
                      },
                      e3
                    )
                  )
                })
              },
              `${t2.id}-${a2}`
            )
          })
        })
      ]
    });
  }
  function em() {
    let e2, t2, a2, i2 = (0, s.useId)(), o2 = (0, u.I)() ?? false, [_2, m2] = (0, s.useState)(O), [y2, T2] = (0, s.useState)(O[0].id), [$2, C2] = (0, s.useState)(
      () => Object.fromEntries(O.map((e3) => [e3.id, ei(e3)]))
    ), [L2, P2] = (0, s.useState)("payload"), [I2, M2] = (0, s.useState)([]), [B2, A2] = (0, s.useState)([]), [z2, H2] = (0, s.useState)(null), [Z2, J2] = (0, s.useState)(
      "Pick a delivery to inspect its payload and headers"
    ), [ee2, et2] = (0, s.useState)(false), [ea2, en2] = (0, s.useState)("form"), [eo2, eh2] = (0, s.useState)(""), [em2, eb2] = (0, s.useState)(""), [ef, ey] = (0, s.useState)(["order.paid"]), [ex, ev] = (0, s.useState)({}), [ej, eg] = (0, s.useState)(false), [ew, ek] = (0, s.useState)(""), [eN, eT] = (0, s.useState)(null), {
      width: e$,
      height: eS,
      trackRef: eR,
      faceRef: eC,
      innerRef: eL,
      arm: eP
    } = (function(e3, t3) {
      let a3 = (0, d.d)("auto"), i3 = (0, d.d)("auto"), [n2, r2] = (0, s.useState)({ track: 0, face: 0, row: 0, inner: 0 }), o3 = (0, s.useRef)(null), l2 = (0, s.useRef)(null), u2 = (0, s.useRef)(null), p2 = (0, s.useRef)(e3), h2 = (0, s.useRef)(0), _3 = (0, s.useRef)({});
      return (0, s.useLayoutEffect)(() => {
        p2.current = e3;
      }, [e3]), (0, s.useEffect)(() => {
        let e6 = o3.current, t4 = l2.current, a4 = u2.current;
        if (!e6 || !t4 || !a4 || "u" < typeof ResizeObserver) return;
        let i4 = new ResizeObserver(
          () => r2((i5) => {
            let n3 = {
              track: e6.getBoundingClientRect().width,
              face: p2.current && i5.face ? i5.face : t4.getBoundingClientRect().width,
              row: t4.offsetHeight,
              inner: a4.getBoundingClientRect().height
            };
            return n3.track === i5.track && n3.face === i5.face && n3.row === i5.row && n3.inner === i5.inner ? i5 : n3;
          })
        );
        return [e6, t4, a4].forEach((e7) => i4.observe(e7)), () => i4.disconnect();
      }, []), (0, s.useEffect)(() => {
        if (!n2.track || !n2.face || !n2.row) return;
        let s2 = !t3 && performance.now() < h2.current, r3 = (e6, t4, a4) => {
          let i4 = e6.get();
          _3.current[a4]?.stop(), s2 && "number" == typeof i4 ? Math.abs(i4 - t4) > 0.5 && (_3.current[a4] = (0, c.i)(e6, t4, w.T.spring.smooth)) : e6.jump(t4);
        };
        r3(a3, e3 ? n2.track : n2.face, "width"), r3(i3, e3 ? Math.max(n2.inner, n2.row) : n2.row, "height");
      }, [e3, n2, t3, a3, i3]), (0, s.useEffect)(
        () => () => {
          _3.current.width?.stop(), _3.current.height?.stop();
        },
        []
      ), {
        width: a3,
        height: i3,
        trackRef: o3,
        faceRef: l2,
        innerRef: u2,
        arm: () => {
          h2.current = performance.now() + 900;
        }
      };
    })(ee2, o2), {
      outer: eI,
      inner: eE,
      arm: eM
    } = (e2 = (0, s.useRef)(null), t2 = (0, s.useRef)(null), a2 = (0, s.useRef)(0), (0, s.useEffect)(() => {
      let i3, n2 = e2.current, s2 = t2.current;
      if (!n2 || !s2 || "u" < typeof ResizeObserver) return;
      let r2 = s2.offsetHeight, l2 = new ResizeObserver(() => {
        let e3 = s2.offsetHeight;
        if (e3 === r2) return;
        let t3 = i3 ? n2.offsetHeight : r2;
        if (r2 = e3, i3?.stop(), i3 = void 0, o2 || performance.now() > a2.current || 1 > Math.abs(t3 - e3)) {
          n2.style.height = "";
          return;
        }
        n2.style.height = `${t3}px`, i3 = (0, c.i)(
          n2,
          { height: [`${t3}px`, `${e3}px`] },
          {
            ...w.T.spring.smooth,
            onComplete: () => {
              n2.style.height = "", i3 = void 0;
            }
          }
        );
      });
      return l2.observe(s2), () => {
        l2.disconnect(), i3?.stop();
      };
    }, [o2]), {
      outer: e2,
      inner: t2,
      arm: () => {
        a2.current = performance.now() + 500;
      }
    }), eB = (0, s.useRef)(null), eA = (0, s.useRef)(null), eO = (0, s.useRef)(null), eY = (0, s.useRef)(null), ez = (0, s.useRef)(/* @__PURE__ */ new Map()), eF = (0, s.useRef)([]), eH = (0, s.useRef)(0), eD = (0, s.useRef)(0), eW = (0, s.useRef)(0), eK = (0, s.useRef)(""), eU = (0, s.useRef)(y2), eq = _2.find((e3) => e3.id === y2) ?? _2[0], eQ = $2[eq.id] ?? ei(eq), eV = eq.deliveries.find((e3) => e3.id === eQ), eZ = ee2 && "reveal" === ea2 ? "Endpoint added" : ee2 ? "New endpoint" : "Add endpoint", eG = `${i2}-detail`, eJ = `${i2}-inspector`;
    (0, s.useEffect)(() => {
      eU.current = y2;
    }, [y2]), (0, s.useEffect)(() => {
      let e3 = eF.current;
      return () => e3.forEach((e6) => window.clearTimeout(e6));
    }, []);
    let eX = (e3, t3) => {
      eF.current.push(window.setTimeout(e3, t3));
    }, e0 = (e3) => {
      A2((t3) => [...t3, e3]), eX(() => A2((t3) => t3.filter((t4) => t4 !== e3)), 1400);
    }, e1 = (e3) => requestAnimationFrame(
      () => ez.current.get(e3)?.focus({ preventScroll: true })
    );
    function e22(e3) {
      e3 !== eU.current && (eM(), eU.current = e3, T2(e3));
    }
    function e5() {
      ee2 && (eD.current++, eP(), et2(false), eg(false), "reveal" === ea2 ? (eT(null), J2(
        `${eK.current} added. Send a test event to check that it answers.`
      )) : J2("New endpoint discarded"), eB.current?.focus({ preventScroll: true }));
    }
    let e4 = _2.filter((e3) => F(e3).failing > 0).length;
    return (0, n.jsx)(p.o, {
      id: i2,
      children: (0, n.jsxs)("section", {
        className: D().hooks,
        "aria-labelledby": `${i2}-heading`,
        children: [
          (0, n.jsxs)("div", {
            className: D().top,
            children: [
              (0, n.jsxs)("header", {
                className: D().header,
                children: [
                  (0, n.jsx)("h2", {
                    id: `${i2}-heading`,
                    children: "Webhooks"
                  }),
                  (0, n.jsx)("p", {
                    children: "Halden signs every event and posts it to your endpoints. Failed deliveries retry on their own for three days, or you can retry them now."
                  })
                ]
              }),
              (0, n.jsxs)("div", {
                ref: eR,
                className: D().toolbar,
                onKeyDown: (e3) => {
                  "Escape" === e3.key && ee2 && (e3.stopPropagation(), e5());
                },
                children: [
                  (0, n.jsxs)("p", {
                    className: D().count,
                    "data-hidden": ee2,
                    inert: ee2,
                    children: [
                      (0, n.jsx)(el, {
                        text: String(_2.length),
                        value: _2.length,
                        reduced: o2
                      }),
                      (0, n.jsx)("span", {
                        className: D().srOnly,
                        children: _2.length
                      }),
                      (0, n.jsx)("span", {
                        children: 1 === _2.length ? "endpoint" : "endpoints"
                      }),
                      (0, n.jsx)("span", {
                        className: D().countNote,
                        children: (0, n.jsx)(er, {
                          text: e4 ? `${e4} with failed deliveries` : "all delivering",
                          reduced: o2
                        })
                      })
                    ]
                  }),
                  (0, n.jsx)(l.PY1.div, {
                    className: D().shell,
                    "data-open": ee2,
                    style: { width: e$, height: eS },
                    children: (0, n.jsxs)("div", {
                      ref: eL,
                      className: D().shellInner,
                      children: [
                        (0, n.jsxs)("div", {
                          ref: eC,
                          className: D().face,
                          children: [
                            (0, n.jsx)("button", {
                              ref: eB,
                              className: D().toggle,
                              type: "button",
                              "aria-label": ee2 ? "Close" : "Add endpoint",
                              "aria-expanded": ee2,
                              "aria-controls": ee2 ? `${i2}-panel` : void 0,
                              onClick: ee2 ? e5 : function() {
                                eP(), en2("form"), eh2(""), eb2(""), ey(["order.paid"]), ev({}), eg(false), et2(true), J2(
                                  "Enter an HTTPS URL and choose the events it should receive"
                                ), requestAnimationFrame(
                                  () => eA.current?.focus({
                                    preventScroll: true
                                  })
                                );
                              },
                              children: (0, n.jsx)(l.PY1.span, {
                                className: D().toggleIcon,
                                initial: false,
                                animate: { rotate: 45 * !!ee2 },
                                transition: o2 ? U : w.T.spring.snappy,
                                children: (0, n.jsx)(b.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            }),
                            (0, n.jsx)("span", {
                              id: `${i2}-title`,
                              className: D().title,
                              role: ee2 ? "heading" : void 0,
                              "aria-level": ee2 ? 3 : void 0,
                              "aria-hidden": !ee2 || void 0,
                              children: (0, n.jsx)(er, {
                                text: eZ,
                                reduced: o2
                              })
                            })
                          ]
                        }),
                        (0, n.jsx)(r.N, {
                          initial: false,
                          children: ee2 && (0, n.jsx)(
                            l.PY1.div,
                            {
                              id: `${i2}-panel`,
                              className: D().body,
                              role: "group",
                              "aria-labelledby": `${i2}-title`,
                              initial: { opacity: 0 },
                              animate: {
                                opacity: 1,
                                transition: o2 ? U : {
                                  duration: w.T.duration.standard + 0.04,
                                  ease: W,
                                  delay: 0.14
                                }
                              },
                              exit: {
                                opacity: 0,
                                transition: o2 ? U : { duration: 0.1, ease: K }
                              },
                              children: (0, n.jsx)(r.N, {
                                mode: "popLayout",
                                initial: false,
                                children: "form" === ea2 ? (0, n.jsxs)(
                                  l.PY1.form,
                                  {
                                    className: D().form,
                                    noValidate: true,
                                    onSubmit: function(e3) {
                                      if (e3.preventDefault(), ej)
                                        return;
                                      let t3 = eo2.trim(), a3 = {
                                        url: t3 ? es.test(t3) ? void 0 : "Use a public HTTPS URL, such as https://api.fernway.example/webhooks" : "Enter the URL Halden should post events to",
                                        events: ef.length ? void 0 : "Choose at least one event"
                                      };
                                      if (ev(a3), a3.url || a3.events) {
                                        J2(a3.url ?? a3.events ?? ""), a3.url ? eA.current?.focus() : eO.current?.querySelector(
                                          "button"
                                        )?.focus();
                                        return;
                                      }
                                      let i3 = ++eD.current;
                                      eg(true), J2(`Adding ${t3}.`), eX(() => {
                                        let e6;
                                        if (i3 !== eD.current) return;
                                        eW.current += 1;
                                        let a4 = (e6 = `${t3}:${eW.current}`, `whsec_${S(e6, 32, R)}`), n2 = {
                                          id: `new-${eW.current}`,
                                          name: em2.trim() || X(t3),
                                          url: t3,
                                          events: N.map(
                                            (e7) => e7.id
                                          ).filter(
                                            (e7) => ef.includes(e7)
                                          ),
                                          version: "2026-08-01",
                                          secretTail: a4.slice(-4),
                                          addedBy: k,
                                          added: "Sep 22, 2026",
                                          volume: Array.from(
                                            { length: 48 },
                                            () => 0
                                          ),
                                          deliveries: []
                                        };
                                        eK.current = n2.name, eP(), ek(a4), m2((e7) => [n2, ...e7]), eT(n2.id), eg(false), en2("reveal"), J2(
                                          `${n2.name} added. Copy the signing secret now, it will not be shown again.`
                                        ), requestAnimationFrame(
                                          () => eY.current?.querySelector(
                                            "button"
                                          )?.focus({
                                            preventScroll: true
                                          })
                                        ), eX(
                                          () => e22(n2.id),
                                          460 * !o2
                                        );
                                      }, 760);
                                    },
                                    exit: {
                                      opacity: 0,
                                      transition: o2 ? U : {
                                        duration: w.T.duration.instant
                                      }
                                    },
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: D().fields,
                                        children: [
                                          (0, n.jsx)(g.p, {
                                            ref: eA,
                                            label: "Endpoint URL",
                                            placeholder: "https://api.fernway.example/webhooks",
                                            type: "url",
                                            inputMode: "url",
                                            autoComplete: "off",
                                            spellCheck: false,
                                            value: eo2,
                                            error: ex.url,
                                            onChange: (e3) => {
                                              eh2(e3.target.value), ex.url && ev((e6) => ({
                                                ...e6,
                                                url: void 0
                                              }));
                                            }
                                          }),
                                          (0, n.jsx)(g.p, {
                                            label: "Description",
                                            description: "Optional",
                                            placeholder: "Warehouse sync",
                                            autoComplete: "off",
                                            maxLength: 40,
                                            value: em2,
                                            onChange: (e3) => eb2(e3.target.value)
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("fieldset", {
                                        ref: eO,
                                        className: D().eventSet,
                                        "aria-describedby": ex.events ? `${i2}-event-error` : void 0,
                                        children: [
                                          (0, n.jsx)("legend", {
                                            children: "Events to send"
                                          }),
                                          (0, n.jsx)("div", {
                                            className: D().eventGrid,
                                            children: N.map(
                                              (e3) => (0, n.jsx)(
                                                v.S,
                                                {
                                                  label: e3.id,
                                                  description: e3.description,
                                                  checked: ef.includes(
                                                    e3.id
                                                  ),
                                                  onCheckedChange: (t3) => {
                                                    var a3, i3;
                                                    return a3 = e3.id, i3 = true === t3, void (ey(
                                                      (e6) => i3 ? [
                                                        ...e6.filter(
                                                          (e7) => e7 !== a3
                                                        ),
                                                        a3
                                                      ] : e6.filter(
                                                        (e7) => e7 !== a3
                                                      )
                                                    ), i3 && ex.events && ev((e6) => ({
                                                      ...e6,
                                                      events: void 0
                                                    })));
                                                  }
                                                },
                                                e3.id
                                              )
                                            )
                                          }),
                                          (0, n.jsx)(r.N, {
                                            initial: false,
                                            children: ex.events && (0, n.jsx)(
                                              l.PY1.p,
                                              {
                                                id: `${i2}-event-error`,
                                                className: D().fieldError,
                                                role: "alert",
                                                initial: o2 ? { opacity: 0 } : {
                                                  height: 0,
                                                  opacity: 0
                                                },
                                                animate: {
                                                  height: "auto",
                                                  opacity: 1
                                                },
                                                exit: o2 ? {
                                                  opacity: 0,
                                                  transition: U
                                                } : {
                                                  height: 0,
                                                  opacity: 0
                                                },
                                                transition: o2 ? U : w.T.spring.smooth,
                                                children: (0, n.jsx)(
                                                  "span",
                                                  {
                                                    children: ex.events
                                                  }
                                                )
                                              },
                                              "error"
                                            )
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: D().actions,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: D().hint,
                                            children: (0, n.jsx)(er, {
                                              text: 1 === ef.length ? "1 event selected" : `${ef.length} events selected`,
                                              reduced: o2
                                            })
                                          }),
                                          (0, n.jsx)(x.$, {
                                            type: "button",
                                            variant: "ghost",
                                            onClick: e5,
                                            children: "Cancel"
                                          }),
                                          (0, n.jsx)(x.$, {
                                            type: "submit",
                                            loading: ej,
                                            children: ej ? "Adding" : "Add endpoint"
                                          })
                                        ]
                                      })
                                    ]
                                  },
                                  "form"
                                ) : (0, n.jsxs)(
                                  l.PY1.div,
                                  {
                                    ref: eY,
                                    className: D().reveal,
                                    initial: o2 ? { opacity: 0 } : { opacity: 0, y: 8 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: o2 ? U : {
                                      duration: w.T.duration.standard + 0.08,
                                      ease: W,
                                      delay: 0.06
                                    },
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: D().secretBlock,
                                        children: [
                                          (0, n.jsx)("span", {
                                            id: `${i2}-secret-label`,
                                            className: D().fieldLabel,
                                            children: "Signing secret"
                                          }),
                                          (0, n.jsxs)("div", {
                                            className: D().secretField,
                                            role: "group",
                                            "aria-labelledby": `${i2}-secret-label`,
                                            children: [
                                              (0, n.jsx)(l.PY1.code, {
                                                className: D().secret,
                                                initial: !o2 && {
                                                  opacity: 0,
                                                  filter: `blur(${w.T.blur.text}px)`
                                                },
                                                animate: {
                                                  opacity: 1,
                                                  filter: "blur(0px)"
                                                },
                                                transition: {
                                                  duration: w.T.duration.considered,
                                                  ease: W,
                                                  delay: 0.14
                                                },
                                                children: ew
                                              }),
                                              (0, n.jsx)(j.CopyButton, {
                                                value: ew,
                                                label: "Copy",
                                                onCopied: () => J2(
                                                  "Signing secret copied. Store it with your other server secrets."
                                                )
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("p", {
                                        className: D().once,
                                        children: [
                                          (0, n.jsx)(h.A, {
                                            size: 16,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          (0, n.jsx)("span", {
                                            children: "Shown once. Use it to check the Halden-Signature header on every request. You can roll it later, but you cannot view it again."
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("div", {
                                        className: D().actions,
                                        children: (0, n.jsx)(x.$, {
                                          type: "button",
                                          onClick: e5,
                                          children: "Done"
                                        })
                                      })
                                    ]
                                  },
                                  "reveal"
                                )
                              })
                            },
                            "body"
                          )
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)("div", {
            className: D().endpoints,
            role: "list",
            "aria-label": "Endpoints",
            onKeyDown: (e3) => ed(e3, "data-endpoint", e22),
            children: (0, n.jsx)(r.N, {
              initial: false,
              children: _2.map(
                (e3) => (0, n.jsx)(
                  ec,
                  {
                    item: e3,
                    selected: e3.id === eq.id,
                    selectedId: eq.id,
                    fresh: eN === e3.id,
                    reduced: o2,
                    detailId: eG,
                    onSelect: () => e22(e3.id)
                  },
                  e3.id
                )
              )
            })
          }),
          (0, n.jsxs)("div", {
            id: eG,
            className: D().detail,
            role: "region",
            "aria-labelledby": `${i2}-detail-title`,
            children: [
              (0, n.jsx)("div", {
                className: D().detailHead,
                children: (0, n.jsxs)("div", {
                  className: D().detailTitle,
                  children: [
                    (0, n.jsx)("h3", {
                      id: `${i2}-detail-title`,
                      children: (0, n.jsx)(er, { text: eq.name, reduced: o2 })
                    }),
                    (0, n.jsx)("div", {
                      className: D().detailMeta,
                      children: (0, n.jsx)(r.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, n.jsxs)(
                          l.PY1.p,
                          {
                            initial: o2 ? { opacity: 0 } : Q,
                            animate: q,
                            exit: o2 ? { opacity: 0, transition: U } : V,
                            transition: o2 ? U : { duration: w.T.duration.standard, ease: W },
                            children: [
                              (0, n.jsxs)("span", {
                                className: D().metaItem,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: D().dot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsx)(f.e, {
                                    className: D().metaAvatar,
                                    name: eq.addedBy.name,
                                    src: eq.addedBy.photo,
                                    size: "sm",
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("span", {
                                    children: [
                                      "Added by ",
                                      eq.addedBy.name,
                                      " on ",
                                      eq.added
                                    ]
                                  })
                                ]
                              }),
                              (0, n.jsxs)("span", {
                                className: D().metaItem,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: D().dot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: D().mono,
                                    children: ["whsec_\u2022\u2022\u2022\u2022", eq.secretTail]
                                  })
                                ]
                              }),
                              (0, n.jsxs)("span", {
                                className: D().metaItem,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: D().dot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("span", {
                                    children: ["API ", eq.version]
                                  })
                                ]
                              })
                            ]
                          },
                          eq.id
                        )
                      })
                    })
                  ]
                })
              }),
              (0, n.jsx)(eu, { endpoint: eq, reduced: o2 }),
              (0, n.jsx)("div", {
                ref: eI,
                className: D().follow,
                children: (0, n.jsx)("div", {
                  ref: eE,
                  className: D().followInner,
                  children: (0, n.jsx)(r.N, {
                    initial: false,
                    children: (0, n.jsxs)(
                      l.PY1.div,
                      {
                        className: D().split,
                        initial: o2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: 6,
                          filter: `blur(${w.T.blur.subtle}px)`
                        },
                        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                        exit: {
                          opacity: 0,
                          pointerEvents: "none",
                          transition: o2 ? U : { duration: w.T.duration.instant }
                        },
                        transition: o2 ? U : {
                          duration: w.T.duration.standard,
                          ease: W,
                          delay: 0.04
                        },
                        children: [
                          (0, n.jsxs)("div", {
                            className: D().deliveries,
                            children: [
                              (0, n.jsx)("h4", {
                                className: D().sectionLabel,
                                children: "Recent deliveries"
                              }),
                              (0, n.jsx)("div", {
                                className: D().deliveryList,
                                role: "list",
                                "aria-label": `Recent deliveries to ${eq.name}`,
                                onKeyDown: (e3) => ed(
                                  e3,
                                  "data-delivery",
                                  (e6) => C2((t3) => ({ ...t3, [eq.id]: e6 }))
                                ),
                                children: (0, n.jsx)(r.N, {
                                  initial: false,
                                  children: eq.deliveries.map(
                                    (e3) => (0, n.jsx)(
                                      ep,
                                      {
                                        item: e3,
                                        endpointId: eq.id,
                                        selected: e3.id === eQ,
                                        selectedKey: eQ ?? "",
                                        fresh: B2.includes(e3.id),
                                        sending: I2.includes(e3.id),
                                        reduced: o2,
                                        inspectorId: eJ,
                                        onSelect: () => C2((t3) => ({ ...t3, [eq.id]: e3.id })),
                                        onRetry: () => (function(e6, t3) {
                                          if (I2.includes(t3.id)) return;
                                          let a3 = X(e6.url);
                                          M2((e7) => [...e7, t3.id]), J2(`Retrying ${t3.event} to ${a3}.`), eX(() => {
                                            let i3 = ++eH.current, n2 = {
                                              ...t3,
                                              id: `dlv_${S(`${t3.id}:${i3}`, 7)}`,
                                              status: 200,
                                              latency: [
                                                184,
                                                146,
                                                211,
                                                163,
                                                129,
                                                197
                                              ][i3 % 6],
                                              time: E(i3),
                                              attempt: t3.attempt + 1,
                                              response: '{"received":true}',
                                              resolved: false
                                            }, s2 = document.activeElement?.closest(
                                              `[data-row="${t3.id}"]`
                                            ) != null;
                                            m2(
                                              (a4) => a4.map(
                                                (a5) => a5.id !== e6.id ? a5 : {
                                                  ...a5,
                                                  deliveries: [
                                                    n2,
                                                    ...a5.deliveries.map(
                                                      (e7) => e7.id === t3.id ? {
                                                        ...e7,
                                                        resolved: true
                                                      } : e7
                                                    )
                                                  ]
                                                }
                                              )
                                            ), M2(
                                              (e7) => e7.filter((e8) => e8 !== t3.id)
                                            ), e0(n2.id), J2(
                                              `${t3.event} delivered on attempt ${n2.attempt}. ${a3} answered 200 in ${n2.latency} ms.`
                                            ), s2 && e1(n2.id), eX(
                                              () => C2((t4) => ({
                                                ...t4,
                                                [e6.id]: n2.id
                                              })),
                                              460 * !o2
                                            );
                                          }, 1100);
                                        })(eq, e3),
                                        buttonRef: (t3) => {
                                          t3 ? ez.current.set(e3.id, t3) : ez.current.delete(e3.id);
                                        }
                                      },
                                      e3.id
                                    )
                                  )
                                })
                              }),
                              (0, n.jsx)(r.N, {
                                initial: false,
                                children: 0 === eq.deliveries.length && (0, n.jsx)(
                                  l.PY1.div,
                                  {
                                    className: D().emptyWrap,
                                    ...G(o2),
                                    children: (0, n.jsxs)("div", {
                                      className: D().empty,
                                      children: [
                                        (0, n.jsx)("p", {
                                          children: "No deliveries yet"
                                        }),
                                        (0, n.jsxs)("span", {
                                          children: [
                                            "Send a test event to check that ",
                                            X(eq.url),
                                            " answers with a 2xx status."
                                          ]
                                        }),
                                        (0, n.jsx)(x.$, {
                                          type: "button",
                                          variant: "secondary",
                                          size: "sm",
                                          loading: z2 === eq.id,
                                          onClick: () => {
                                            !z2 && (H2(eq.id), J2(
                                              `Sending a test ${eq.events[0]} event to ${X(eq.url)}.`
                                            ), eX(() => {
                                              let e3 = ++eH.current, t3 = E(e3), a3 = eq.events[0], i3 = {
                                                id: `dlv_${S(`${eq.id}:test:${e3}`, 7)}`,
                                                eventId: `evt_${S(`${eq.id}:evt:${e3}`, 10)}`,
                                                event: a3,
                                                status: 200,
                                                latency: 172,
                                                time: t3,
                                                eventTime: t3,
                                                attempt: 1,
                                                response: '{"received":true}',
                                                data: Y[a3],
                                                test: true
                                              };
                                              m2(
                                                (e6) => e6.map(
                                                  (e7) => e7.id !== eq.id ? e7 : {
                                                    ...e7,
                                                    volume: e7.volume.map(
                                                      (e8, t4) => 47 === t4 ? e8 + 1 : e8
                                                    ),
                                                    deliveries: [
                                                      i3,
                                                      ...e7.deliveries
                                                    ]
                                                  }
                                                )
                                              ), C2((e6) => ({
                                                ...e6,
                                                [eq.id]: i3.id
                                              })), H2(null), e0(i3.id), J2(
                                                `Test event delivered. ${X(eq.url)} answered 200 in 172 ms.`
                                              ), e1(i3.id);
                                            }, 900));
                                          },
                                          children: z2 === eq.id ? "Sending" : "Send test event"
                                        })
                                      ]
                                    })
                                  },
                                  "empty"
                                )
                              })
                            ]
                          }),
                          (0, n.jsx)(e_, {
                            endpoint: eq,
                            delivery: eV,
                            tab: L2,
                            reduced: o2,
                            id: eJ,
                            onTab: P2,
                            onCopied: (e3) => J2(`${e3} copied`)
                          })
                        ]
                      },
                      eq.id
                    )
                  })
                })
              })
            ]
          }),
          (0, n.jsx)("footer", {
            className: D().srOnly,
            children: (0, n.jsx)("p", {
              role: "status",
              "aria-live": "polite",
              children: Z2
            })
          })
        ]
      })
    });
  }
  let eb = em;
};

__m(__module,__exports,__require);
}