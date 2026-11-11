function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { KanbanBoard: () => E, default: () => $ });
  var n = t(95155), i = t(12115), r = t(5772), l = t(18310), s = t(25354), o = t(28245), d = t(22535), c = t(80642), u = t(9937), m = t(57700), h = t(52427), p = t(8143), g = t(11012), b = t(2125), f = t(9005), _ = t(7770), w = t(60466), x = t(67752);
  let v = [
    { id: "backlog", name: "Backlog" },
    { id: "progress", name: "In progress", limit: 3 },
    { id: "review", name: "In review", limit: 2 },
    { id: "done", name: "Done" }
  ], k = [
    { id: "emma", name: "Emma Collins", avatar: (0, x.my)("emma-collins") },
    {
      id: "marcus",
      name: "Marcus Johnson",
      avatar: (0, x.my)("marcus-johnson")
    },
    { id: "chloe", name: "Chloe Nguyen", avatar: (0, x.my)("chloe-nguyen") },
    { id: "daniel", name: "Daniel Kim", avatar: (0, x.my)("daniel-kim") }
  ], y = (...e2) => e2.map(([e3, a2], t2) => ({ id: `c${t2}`, text: e3, done: a2 })), j = [
    {
      id: "BIL-142",
      title: "Proration preview when seats change mid-cycle",
      column: "backlog",
      assignee: "daniel",
      label: "Billing",
      due: "Oct 2",
      points: 5,
      description: "Show the prorated amount before a seat change is confirmed, using the upcoming invoice endpoint.",
      checklist: y(
        ["Upcoming invoice call", false],
        ["Preview row in seat dialog", false],
        ["Copy review", false]
      )
    },
    {
      id: "BIL-151",
      title: "Dunning emails for failed renewals",
      column: "backlog",
      assignee: "chloe",
      label: "Lifecycle",
      due: "Oct 6",
      points: 3
    },
    {
      id: "BIL-155",
      title: "Tax ID field for EU customers",
      column: "backlog",
      assignee: "marcus",
      label: "Billing",
      points: 2
    },
    {
      id: "BIL-160",
      title: "Empty state for invoices list",
      column: "backlog",
      assignee: "emma",
      label: "Design",
      points: 1
    },
    {
      id: "BIL-128",
      title: "Usage meter on the billing page",
      column: "progress",
      assignee: "emma",
      label: "Design",
      due: "Sep 26",
      points: 3,
      description: "Meter per metered feature with the current period, the included amount, and a forecast marker.",
      checklist: y(
        ["Meter component", true],
        ["Forecast marker", true],
        ["Dark mode pass", false],
        ["Handoff notes", false]
      )
    },
    {
      id: "BIL-133",
      title: "Webhook retries for invoice.paid",
      column: "progress",
      assignee: "daniel",
      label: "API",
      due: "Sep 25",
      points: 5,
      checklist: y(["Idempotency keys", true], ["Backoff schedule", false])
    },
    {
      id: "BIL-137",
      title: "Coupon stacking rules",
      column: "progress",
      assignee: "marcus",
      label: "Billing",
      due: "Sep 30",
      points: 3
    },
    {
      id: "BIL-119",
      title: "Annual plan switch keeps credits",
      column: "review",
      assignee: "chloe",
      label: "Billing",
      due: "Sep 24",
      points: 3,
      checklist: y(
        ["Credit carry over", true],
        ["Receipt line", true],
        ["QA on staging", false]
      )
    },
    {
      id: "BIL-124",
      title: "Invoice PDF uses workspace logo",
      column: "review",
      assignee: "emma",
      label: "Design",
      points: 2
    },
    {
      id: "BIL-102",
      title: "Migrate prices to the new catalog",
      column: "done",
      assignee: "daniel",
      label: "API",
      points: 8
    },
    {
      id: "BIL-108",
      title: "Billing settings information architecture",
      column: "done",
      assignee: "emma",
      label: "Design",
      points: 3
    },
    {
      id: "BIL-111",
      title: "Payment method update flow",
      column: "done",
      assignee: "marcus",
      label: "Billing",
      points: 5
    }
  ];
  var N = t(18142), A = t.n(N);
  let I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], C = (e2, a2) => a2 ? `${a2}|${e2}` : e2, T = (e2) => {
    let a2 = e2.indexOf("|");
    return a2 < 0 ? { column: e2, lane: void 0 } : { lane: e2.slice(0, a2), column: e2.slice(a2 + 1) };
  }, S = (e2, a2) => {
    let { column: t2, lane: n2 } = T(a2);
    return e2.column === t2 && (!n2 || e2.assignee === n2);
  };
  function L({ value: e2 }) {
    let a2 = (0, l.I)(), t2 = Array.from(String(e2));
    return (0, n.jsxs)("span", {
      className: A().roll,
      children: [
        t2.map(
          (e3, i2) => (0, n.jsx)(
            "span",
            {
              className: A().rollDigit,
              "aria-hidden": "true",
              children: (0, n.jsx)(s.PY1.span, {
                className: A().rollStrip,
                initial: false,
                animate: { y: `${-10 * Number(e3)}%` },
                transition: a2 ? { duration: 0 } : _.T.spring.snappy,
                children: I.map((e4) => (0, n.jsx)("span", { children: e4 }, e4))
              })
            },
            t2.length - i2
          )
        ),
        (0, n.jsx)("span", { className: A().srOnly, children: e2 })
      ]
    });
  }
  function D({ person: e2, size: a2 = 22 }) {
    if (!e2) return null;
    let t2 = e2.name.split(" ").map((e3) => e3[0]).join("").slice(0, 2);
    return (0, n.jsx)("span", {
      className: A().face,
      style: { width: a2, height: a2 },
      title: e2.name,
      children: e2.avatar ? (0, n.jsx)(r.default, {
        src: e2.avatar,
        alt: "",
        fill: true,
        sizes: `${a2}px`
      }) : (0, n.jsx)("span", { "aria-hidden": "true", children: t2 })
    });
  }
  let B = (0, i.memo)(function({ card: e2, person: a2, lifted: t2 }) {
    let i2 = e2.checklist?.filter((e3) => e3.done).length ?? 0, r2 = e2.checklist?.length ?? 0;
    return (0, n.jsxs)("div", {
      className: A().cardInner,
      "data-lifted": t2 || void 0,
      children: [
        (0, n.jsxs)("div", {
          className: A().cardTop,
          children: [
            (0, n.jsx)("span", { className: A().cardId, children: e2.id }),
            e2.label ? (0, n.jsx)("span", {
              className: A().label,
              "data-label": e2.label,
              children: e2.label
            }) : null
          ]
        }),
        (0, n.jsx)("p", { className: A().cardTitle, children: e2.title }),
        (0, n.jsxs)("div", {
          className: A().cardMeta,
          children: [
            e2.due ? (0, n.jsxs)("span", {
              className: A().metaItem,
              children: [
                (0, n.jsx)(h.A, { size: 13, "aria-hidden": "true" }),
                e2.due
              ]
            }) : null,
            r2 ? (0, n.jsxs)("span", {
              className: A().metaItem,
              "data-complete": i2 === r2 || void 0,
              children: [
                (0, n.jsx)(p.A, { size: 13, "aria-hidden": "true" }),
                i2,
                "/",
                r2
              ]
            }) : null,
            e2.points ? (0, n.jsxs)("span", {
              className: A().metaItem,
              "aria-label": `${e2.points} points`,
              children: [e2.points, " pt"]
            }) : null,
            (0, n.jsx)("span", {
              className: A().metaFace,
              children: (0, n.jsx)(D, { person: a2 })
            })
          ]
        })
      ]
    });
  });
  function E({
    columns: e2 = v,
    people: a2 = k,
    cards: t2,
    defaultCards: r2 = j,
    onCardsChange: h2,
    defaultGroupBy: p2 = "status",
    currentUser: f2 = k[0].id,
    title: w2 = "Billing v2",
    className: x2
  }) {
    let y2 = (0, i.useId)(), N2 = (0, l.I)() ?? false, [I2, $2] = (0, i.useState)(r2), P = t2 ?? I2, R = (0, i.useRef)(P);
    (0, i.useLayoutEffect)(() => {
      R.current = P;
    });
    let F = (0, i.useCallback)(
      (e3) => {
        R.current = e3, t2 || $2(e3), h2?.(e3);
      },
      [t2, h2]
    ), [H, O] = (0, i.useState)(p2), [Y, z] = (0, i.useState)(null), q = (0, i.useRef)(null), K = (e3) => {
      q.current = e3, z(e3);
    }, [W, U] = (0, i.useState)({}), [X, J] = (0, i.useState)(null), [Q, V] = (0, i.useState)(null), [Z, G] = (0, i.useState)(null), [ee, ea] = (0, i.useState)(""), [et, en] = (0, i.useState)(""), ei = (0, i.useRef)(null), er = (0, i.useRef)(null), el = (0, i.useRef)(null), es = (0, i.useRef)({ x: 0, y: 0 }), eo = (0, i.useRef)({ x: 0, y: 0 }), ed = (0, i.useRef)({ x: 0, y: 0, t: 0, px: 0, py: 0 }), ec = (0, i.useRef)(false), eu = (0, i.useRef)(null), em = (0, o.d)(0), eh = (0, o.d)(0), ep = (0, d.z)(0, { stiffness: 380, damping: 38 }), eg = (0, i.useMemo)(() => new Map(a2.map((e3) => [e3.id, e3])), [a2]), eb = (a3) => e2.find((e3) => e3.id === a3)?.name ?? a3, ef = "assignee" === H ? a2.map((e3) => e3.id) : [void 0], e_ = (0, i.useCallback)((e3, a3, t3, n2) => {
      let i2 = e3.find((e4) => e4.id === a3);
      if (!i2) return e3;
      let { column: r3, lane: l2 } = T(t3), s2 = { ...i2, column: r3, assignee: l2 ?? i2.assignee }, o2 = e3.filter((e4) => e4.id !== a3), d2 = o2.filter((e4) => S(e4, t3)), c2 = d2[n2], u2 = c2 ? o2.indexOf(c2) : d2.length ? o2.indexOf(d2[d2.length - 1]) + 1 : o2.length;
      return [...o2.slice(0, u2), s2, ...o2.slice(u2)];
    }, []), ew = (0, i.useCallback)(
      (e3, a3 = R.current) => {
        let t3 = a3.find((a4) => a4.id === e3);
        if (!t3) return null;
        let n2 = C(t3.column, "assignee" === H ? t3.assignee : void 0);
        return {
          key: n2,
          index: a3.filter((e4) => S(e4, n2)).findIndex((a4) => a4.id === e3)
        };
      },
      [H]
    ), ex = (0, i.useCallback)((e3, a3) => {
      let t3, n2 = ei.current;
      if (!n2) return null;
      let i2 = Array.from(n2.querySelectorAll("[data-cell]")), r3 = 1 / 0;
      for (let n3 of i2) {
        let i3 = n3.getBoundingClientRect();
        if (a3 < i3.top - 12 || a3 > i3.bottom + 12) continue;
        let l3 = e3 < i3.left ? i3.left - e3 : e3 > i3.right ? e3 - i3.right : 0;
        l3 < r3 && (r3 = l3, t3 = n3);
      }
      if (!t3 || r3 > 40) return null;
      let l2 = Array.from(t3.querySelectorAll("[data-card-id]")), s2 = l2.length;
      for (let e4 = 0; e4 < l2.length; e4++) {
        let t4 = l2[e4].getBoundingClientRect();
        if (a3 < t4.top + t4.height / 2) {
          s2 = e4;
          break;
        }
      }
      return { cell: t3.dataset.cell, index: s2 };
    }, []), ev = (0, i.useCallback)(() => {
      let e3 = q.current;
      if (!e3 || e3.dropping) return;
      let a3 = ex(es.current.x, es.current.y);
      a3 && (a3.cell !== e3.cell || a3.index !== e3.index) && K({ ...e3, ...a3 });
    }, [ex]), ek = (0, i.useCallback)(() => {
      let e3 = ei.current;
      if (!e3) return;
      let a3 = e3.getBoundingClientRect();
      em.set(es.current.x - a3.left - eo.current.x), eh.set(es.current.y - a3.top - eo.current.y);
    }, [em, eh]), ey = (0, i.useCallback)(
      (e3) => {
        let a3 = ei.current, t3 = ew(e3.id);
        if (!a3 || !t3) return;
        let n2 = e3.element.getBoundingClientRect(), i2 = a3.getBoundingClientRect();
        eo.current = { x: e3.x - n2.left, y: e3.y - n2.top }, em.set(n2.left - i2.left), eh.set(n2.top - i2.top), ed.current = {
          x: 0,
          y: 0,
          t: performance.now(),
          px: e3.x,
          py: e3.y
        }, K({
          id: e3.id,
          cell: t3.key,
          index: t3.index,
          width: n2.width,
          height: n2.height,
          origin: { cell: t3.key, index: t3.index },
          dropping: false
        }), ec.current = true;
        let r3 = R.current.find((a4) => a4.id === e3.id);
        en(`Picked up ${r3?.title}.`);
      },
      [ew, em, eh]
    );
    (0, i.useEffect)(() => {
      if (!Y || Y.dropping) return;
      let e3 = 0, a3 = () => {
        let t3 = er.current;
        if (t3) {
          let e4 = t3.getBoundingClientRect(), a4 = Math.min(64, e4.width / 5), n2 = (e5) => e5 <= 0 ? 0 : Math.ceil(20 * Math.min(1, e5 / a4) ** 2), { x: i2, y: r3 } = es.current, l2 = -1 * n2(e4.left + a4 - i2) + n2(i2 - (e4.right - a4)), s2 = -1 * n2(e4.top + a4 - r3) + n2(r3 - (e4.bottom - a4));
          if (l2 || s2) {
            let e5 = t3.scrollLeft, a5 = t3.scrollTop;
            t3.scrollLeft += l2, t3.scrollTop += s2, (t3.scrollLeft !== e5 || t3.scrollTop !== a5) && ev();
          }
        }
        e3 = requestAnimationFrame(a3);
      };
      return e3 = requestAnimationFrame(a3), () => cancelAnimationFrame(e3);
    }, [Y, ev]);
    let ej = (0, i.useCallback)(
      (e3 = false) => {
        let a3 = q.current;
        if (!a3 || a3.dropping) return;
        let t3 = e3 ? { ...a3, ...a3.origin, dropping: true } : { ...a3, dropping: true };
        K(t3), ep.set(0);
        let { column: n2 } = T(t3.cell), i2 = R.current.find((e4) => e4.id === t3.id);
        en(e3 ? `${i2?.title} returned.` : `Dropped ${i2?.title} in ${eb(n2)}.`);
        let r3 = () => {
          e3 || F(e_(R.current, t3.id, t3.cell, t3.index)), U((e4) => ({ ...e4, [t3.id]: (e4[t3.id] ?? 0) + 1 })), K(null);
        };
        if (N2) return void requestAnimationFrame(r3);
        let l2 = ed.current.x, s2 = ed.current.y, o2 = performance.now(), d2 = 2 * Math.sqrt(460) * 0.8, c2 = (e4) => {
          let a4 = ei.current, t4 = a4?.querySelector("[data-placeholder]");
          if (!a4 || !t4) return void r3();
          let n3 = Math.min(0.032, (e4 - o2) / 1e3);
          o2 = e4;
          let i3 = a4.getBoundingClientRect(), u2 = t4.getBoundingClientRect(), m2 = u2.left - i3.left, h3 = u2.top - i3.top, p3 = em.get(), g2 = eh.get();
          if (l2 += (460 * (m2 - p3) - d2 * l2) * n3, s2 += (460 * (h3 - g2) - d2 * s2) * n3, em.set(p3 + l2 * n3), eh.set(g2 + s2 * n3), 0.5 > Math.abs(m2 - p3) && 0.5 > Math.abs(h3 - g2) && 20 > Math.abs(l2) && 20 > Math.abs(s2)) {
            em.set(m2), eh.set(h3), r3();
            return;
          }
          requestAnimationFrame(c2);
        };
        requestAnimationFrame(c2);
      },
      [F, e_, N2, em, eh, ep]
    );
    (0, i.useEffect)(() => {
      let e3 = (e4) => {
        let a4 = el.current;
        if (es.current = { x: e4.clientX, y: e4.clientY }, a4 && e4.pointerId === a4.pointerId && !q.current) {
          let t5 = Math.hypot(e4.clientX - a4.x, e4.clientY - a4.y);
          if (a4.touch && !a4.armed) {
            t5 > 8 && (window.clearTimeout(a4.timer), el.current = null);
            return;
          }
          if (!(t5 > 5)) return;
          ey(a4);
        }
        let t4 = q.current;
        if (!t4 || t4.dropping || a4 && e4.pointerId !== a4.pointerId) return;
        let n3 = performance.now(), i2 = ed.current, r3 = Math.max(1, n3 - i2.t);
        i2.x = 0.6 * i2.x + (e4.clientX - i2.px) / r3 * 400, i2.y = 0.6 * i2.y + (e4.clientY - i2.py) / r3 * 400, i2.t = n3, i2.px = e4.clientX, i2.py = e4.clientY, N2 || ep.set(Math.max(-7, Math.min(7, i2.x / 160))), ek(), ev();
      }, a3 = (e4) => {
        let a4 = el.current;
        (!a4 || e4.pointerId === a4.pointerId) && (a4 && window.clearTimeout(a4.timer), el.current = null, q.current && ej("pointercancel" === e4.type));
      }, t3 = (e4) => {
        "Escape" === e4.key && q.current && (e4.preventDefault(), ej(true));
      }, n2 = (e4) => {
        (q.current || el.current?.armed) && e4.preventDefault();
      };
      return window.addEventListener("pointermove", e3), window.addEventListener("pointerup", a3), window.addEventListener("pointercancel", a3), window.addEventListener("keydown", t3), window.addEventListener("touchmove", n2, { passive: false }), () => {
        window.removeEventListener("pointermove", e3), window.removeEventListener("pointerup", a3), window.removeEventListener("pointercancel", a3), window.removeEventListener("keydown", t3), window.removeEventListener("touchmove", n2);
      };
    }, [ey, ej, ek, N2, ev, ep]);
    let eN = (e3) => requestAnimationFrame(
      () => ei.current?.querySelector(`[data-card-id="${CSS.escape(e3)}"]`)?.focus({ preventScroll: false })
    ), eA = (e3) => {
      let a3 = ee.trim();
      if (!a3) return void G(null);
      let { column: t3, lane: n2 } = T(e3), i2 = R.current.reduce(
        (e4, a4) => Math.max(e4, Number(a4.id.replace(/\D/g, "")) || 0),
        0
      ), r3 = { id: `BIL-${i2 + 1}`, title: a3, column: t3, assignee: n2 ?? f2 };
      F(e_([...R.current, r3], r3.id, e3, Number.MAX_SAFE_INTEGER)), ea(""), en(`Added ${a3} to ${eb(t3)}.`);
    }, eI = (e3) => {
      eu.current = e3, J(e3);
    }, eC = Y ? P.find((e3) => e3.id === Y.id) : void 0, eT = new Map(
      e2.map((e3) => [e3.id, P.filter((a3) => a3.column === e3.id).length])
    );
    if (Y && eC) {
      let e3 = T(Y.cell).column;
      eT.set(eC.column, (eT.get(eC.column) ?? 1) - 1), eT.set(e3, (eT.get(e3) ?? 0) + 1);
    }
    let eS = (e3) => void 0 !== e3.limit && (eT.get(e3.id) ?? 0) > e3.limit, eL = N2 ? { duration: 0 } : _.T.spring.smooth, eD = X ? P.find((e3) => e3.id === X) : void 0;
    return (0, n.jsx)(u.x, {
      reducedMotion: "user",
      children: (0, n.jsxs)("div", {
        ref: ei,
        className: ((...e3) => e3.filter(Boolean).join(" "))(A().frame, x2),
        "data-dragging": Y ? "" : void 0,
        children: [
          (0, n.jsxs)("header", {
            className: A().toolbar,
            children: [
              (0, n.jsxs)("div", {
                className: A().heading,
                children: [
                  (0, n.jsx)("h2", { children: w2 }),
                  (0, n.jsxs)("span", {
                    className: A().total,
                    children: [(0, n.jsx)(L, { value: P.length }), " cards"]
                  })
                ]
              }),
              (0, n.jsx)("div", {
                className: A().group,
                role: "radiogroup",
                "aria-label": "Group by",
                children: ["status", "assignee"].map(
                  (e3) => (0, n.jsxs)(
                    "button",
                    {
                      type: "button",
                      role: "radio",
                      "aria-checked": H === e3,
                      className: A().groupOption,
                      onClick: () => {
                        O(e3), G(null);
                      },
                      children: [
                        H === e3 ? (0, n.jsx)(s.PY1.span, {
                          layoutId: `${y2}-group`,
                          className: A().groupPill,
                          transition: _.T.spring.morph
                        }) : null,
                        (0, n.jsx)("span", {
                          children: "status" === e3 ? "Status" : "Swimlanes"
                        })
                      ]
                    },
                    e3
                  )
                )
              })
            ]
          }),
          (0, n.jsx)(m.o, {
            id: y2,
            children: (0, n.jsx)(s.PY1.div, {
              ref: er,
              layoutScroll: true,
              className: A().scroller,
              children: (0, n.jsxs)("div", {
                className: A().board,
                style: { "--cols": e2.length },
                "data-mode": H,
                children: [
                  (0, n.jsx)("div", {
                    className: A().headRow,
                    children: e2.map((e3) => {
                      let a3 = eT.get(e3.id) ?? 0, t3 = eS(e3);
                      return (0, n.jsxs)(
                        "div",
                        {
                          className: A().columnHead,
                          "data-over": t3 || void 0,
                          children: [
                            (0, n.jsx)("span", {
                              className: A().columnName,
                              children: e3.name
                            }),
                            (0, n.jsxs)("span", {
                              className: A().count,
                              "aria-label": e3.limit ? `${a3} of ${e3.limit}` : `${a3} cards`,
                              children: [
                                (0, n.jsx)(L, { value: a3 }),
                                e3.limit ? (0, n.jsxs)("span", {
                                  className: A().limit,
                                  children: ["/", e3.limit]
                                }) : null
                              ]
                            }),
                            (0, n.jsx)(c.N, {
                              initial: false,
                              children: t3 ? (0, n.jsx)(
                                s.PY1.span,
                                {
                                  className: A().overTag,
                                  initial: { opacity: 0, scale: 0.9 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: { opacity: 0, scale: 0.9 },
                                  transition: _.T.spring.snappy,
                                  children: "Over limit"
                                },
                                "over"
                              ) : null
                            }),
                            (0, n.jsx)("button", {
                              type: "button",
                              className: A().iconButton,
                              "aria-label": `Add card to ${e3.name}`,
                              onClick: () => {
                                ea(""), G(C(e3.id, "assignee" === H ? f2 : void 0));
                              },
                              children: (0, n.jsx)(b.A, { size: 15 })
                            })
                          ]
                        },
                        e3.id
                      );
                    })
                  }),
                  ef.map((t3) => {
                    let i2 = t3 ? eg.get(t3) : void 0;
                    return (0, n.jsxs)(
                      "section",
                      {
                        className: A().lane,
                        "aria-label": i2 ? `${i2.name} lane` : void 0,
                        children: [
                          i2 ? (0, n.jsxs)("div", {
                            className: A().laneHead,
                            children: [
                              (0, n.jsx)(D, { person: i2, size: 24 }),
                              (0, n.jsx)("span", { children: i2.name }),
                              (0, n.jsx)("span", {
                                className: A().laneCount,
                                children: (0, n.jsx)(L, {
                                  value: P.filter(
                                    (e3) => e3.assignee === t3 && e3.id !== Y?.id
                                  ).length + (Y && T(Y.cell).lane === t3 ? 1 : 0)
                                })
                              })
                            ]
                          }) : null,
                          (0, n.jsx)("div", {
                            className: A().row,
                            children: e2.map((i3) => {
                              let r3, l2, o2, d2, u2, m2;
                              return r3 = C(i3.id, t3), l2 = P.filter(
                                (e3) => S(e3, r3) && e3.id !== Y?.id
                              ), o2 = Y && Y.cell === r3 ? Y.index : -1, d2 = Y && Y.cell === r3 && eS(i3), u2 = l2.map((t4) => {
                                let i4 = Q?.id === t4.id;
                                return (0, n.jsx)(
                                  s.PY1.div,
                                  {
                                    layoutId: `${y2}-${t4.id}-${W[t4.id] ?? 0}`,
                                    layout: "position",
                                    transition: eL,
                                    className: A().card,
                                    "data-card-id": t4.id,
                                    "data-lifted": i4 || void 0,
                                    role: "button",
                                    tabIndex: 0,
                                    "aria-roledescription": "Draggable card",
                                    "aria-label": `${t4.title}, ${t4.id}, ${eg.get(t4.assignee)?.name ?? "Unassigned"}`,
                                    "aria-pressed": i4 || void 0,
                                    onPointerDown: (e3) => ((e4, a3) => {
                                      if (0 !== e4.button || q.current || Q)
                                        return;
                                      ec.current = false;
                                      let t5 = "mouse" !== e4.pointerType, n2 = {
                                        id: a3,
                                        x: e4.clientX,
                                        y: e4.clientY,
                                        pointerId: e4.pointerId,
                                        touch: t5,
                                        element: e4.currentTarget,
                                        armed: !t5
                                      };
                                      es.current = {
                                        x: e4.clientX,
                                        y: e4.clientY
                                      }, t5 && (n2.timer = window.setTimeout(
                                        () => {
                                          el.current === n2 && (n2.armed = true, ey(n2));
                                        },
                                        240
                                      )), el.current = n2;
                                    })(e3, t4.id),
                                    onClick: () => {
                                      if (ec.current) {
                                        ec.current = false;
                                        return;
                                      }
                                      Q || eI(t4.id);
                                    },
                                    onKeyDown: (n2) => {
                                      if ("Enter" === n2.key && !Q) {
                                        n2.preventDefault(), eI(t4.id);
                                        return;
                                      }
                                      ((t5, n3) => {
                                        if (" " === t5.key && !Q) {
                                          t5.preventDefault(), V({
                                            id: n3.id,
                                            snapshot: R.current
                                          });
                                          let e3 = ew(n3.id);
                                          en(
                                            `Lifted ${n3.title}. ${eb(n3.column)}, position ${(e3?.index ?? 0) + 1}. Use arrow keys to move, space to drop, escape to cancel.`
                                          );
                                          return;
                                        }
                                        if (!Q || Q.id !== n3.id) return;
                                        if (" " === t5.key || "Enter" === t5.key) {
                                          t5.preventDefault(), V(null), en(
                                            `Dropped ${n3.title} in ${eb(n3.column)}.`
                                          );
                                          return;
                                        }
                                        if ("Escape" === t5.key) {
                                          t5.preventDefault(), F(Q.snapshot), V(null), en(`${n3.title} returned.`), eN(n3.id);
                                          return;
                                        }
                                        let i5 = ew(n3.id);
                                        if (!i5) return;
                                        let { column: r4, lane: l3 } = T(i5.key), s2 = e2.findIndex((e3) => e3.id === r4), o3 = i5.key, d3 = i5.index;
                                        if ("ArrowUp" === t5.key && t5.shiftKey && l3) {
                                          let e3 = a2.findIndex(
                                            (e4) => e4.id === l3
                                          );
                                          e3 > 0 && (o3 = C(r4, a2[e3 - 1].id));
                                        } else if ("ArrowDown" === t5.key && t5.shiftKey && l3) {
                                          let e3 = a2.findIndex(
                                            (e4) => e4.id === l3
                                          );
                                          e3 < a2.length - 1 && (o3 = C(r4, a2[e3 + 1].id));
                                        } else if ("ArrowUp" === t5.key)
                                          d3 = Math.max(0, d3 - 1);
                                        else if ("ArrowDown" === t5.key)
                                          d3 += 1;
                                        else if ("ArrowLeft" === t5.key && s2 > 0)
                                          o3 = C(e2[s2 - 1].id, l3);
                                        else {
                                          if ("ArrowRight" !== t5.key || !(s2 < e2.length - 1))
                                            return;
                                          o3 = C(e2[s2 + 1].id, l3);
                                        }
                                        t5.preventDefault(), o3 !== i5.key && (d3 = Math.min(
                                          d3,
                                          R.current.filter(
                                            (e3) => e3.id !== n3.id && S(e3, o3)
                                          ).length
                                        ));
                                        let c2 = e_(R.current, n3.id, o3, d3);
                                        F(c2);
                                        let u3 = T(o3), m3 = c2.filter((e3) => S(e3, o3)).findIndex(
                                          (e3) => e3.id === n3.id
                                        ) + 1;
                                        en(
                                          `${eb(u3.column)}${u3.lane ? `, ${eg.get(u3.lane)?.name}` : ""}, position ${m3}.`
                                        ), eN(n3.id);
                                      })(n2, t4);
                                    },
                                    children: (0, n.jsx)(B, {
                                      card: t4,
                                      person: eg.get(t4.assignee),
                                      lifted: i4
                                    })
                                  },
                                  t4.id
                                );
                              }), o2 >= 0 && u2.splice(
                                o2,
                                0,
                                (0, n.jsx)(
                                  s.PY1.div,
                                  {
                                    layout: "position",
                                    transition: eL,
                                    "data-placeholder": "",
                                    className: A().placeholder,
                                    "data-warn": d2 || void 0,
                                    style: { height: Y.height },
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    children: d2 ? (0, n.jsxs)("span", {
                                      className: A().placeholderNote,
                                      children: [
                                        (0, n.jsx)(g.A, {
                                          size: 14,
                                          "aria-hidden": "true"
                                        }),
                                        " Over the limit of ",
                                        i3.limit
                                      ]
                                    }) : null
                                  },
                                  "placeholder"
                                )
                              ), m2 = Z === r3, (0, n.jsxs)(
                                "div",
                                {
                                  className: A().cell,
                                  "data-cell": r3,
                                  "data-over": eS(i3) || void 0,
                                  "data-target": Y && Y.cell === r3 && !Y.dropping ? "" : void 0,
                                  children: [
                                    u2,
                                    (0, n.jsx)(c.N, {
                                      initial: false,
                                      children: m2 ? (0, n.jsxs)(
                                        s.PY1.form,
                                        {
                                          className: A().composer,
                                          initial: {
                                            opacity: 0,
                                            height: 0
                                          },
                                          animate: {
                                            opacity: 1,
                                            height: "auto"
                                          },
                                          exit: { opacity: 0, height: 0 },
                                          transition: eL,
                                          onSubmit: (e3) => {
                                            e3.preventDefault(), eA(r3);
                                          },
                                          children: [
                                            (0, n.jsx)("textarea", {
                                              autoFocus: true,
                                              rows: 2,
                                              value: ee,
                                              placeholder: "Card title",
                                              "aria-label": `New card in ${i3.name}`,
                                              onChange: (e3) => ea(e3.target.value),
                                              onBlur: () => {
                                                ee.trim() || G(null);
                                              },
                                              onKeyDown: (e3) => {
                                                "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), eA(r3)), "Escape" === e3.key && (G(null), ea(""));
                                              }
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: A().composerActions,
                                              children: [
                                                (0, n.jsx)("button", {
                                                  type: "submit",
                                                  className: A().primarySmall,
                                                  disabled: !ee.trim(),
                                                  children: "Add card"
                                                }),
                                                (0, n.jsx)("button", {
                                                  type: "button",
                                                  className: A().ghostSmall,
                                                  onMouseDown: (e3) => e3.preventDefault(),
                                                  onClick: () => {
                                                    G(null), ea("");
                                                  },
                                                  children: "Cancel"
                                                })
                                              ]
                                            })
                                          ]
                                        },
                                        "composer"
                                      ) : "status" === H ? (0, n.jsxs)(
                                        s.PY1.button,
                                        {
                                          type: "button",
                                          layout: "position",
                                          transition: eL,
                                          className: A().addRow,
                                          onClick: () => {
                                            ea(""), G(r3);
                                          },
                                          children: [
                                            (0, n.jsx)(b.A, {
                                              size: 14,
                                              "aria-hidden": "true"
                                            }),
                                            " Add card"
                                          ]
                                        },
                                        "add"
                                      ) : null
                                    })
                                  ]
                                },
                                r3
                              );
                            })
                          })
                        ]
                      },
                      t3 ?? "all"
                    );
                  })
                ]
              })
            })
          }),
          Y && eC ? (0, n.jsx)(s.PY1.div, {
            className: A().overlay,
            style: { x: em, y: eh, rotate: ep, width: Y.width },
            "aria-hidden": "true",
            children: (0, n.jsx)(s.PY1.div, {
              className: A().overlayCard,
              initial: { scale: 1 },
              animate: { scale: Y.dropping ? 1 : 1.035 },
              transition: _.T.spring.snappy,
              "data-dropping": Y.dropping || void 0,
              children: (0, n.jsx)(B, {
                card: eC,
                person: eg.get(eC.assignee)
              })
            })
          }) : null,
          (0, n.jsx)(c.N, {
            children: eD ? (0, n.jsx)(
              M,
              {
                uid: y2,
                card: eD,
                columns: e2,
                people: a2,
                onClose: () => {
                  J(null), eu.current && eN(eu.current);
                },
                onChange: (e3) => {
                  let a3;
                  return a3 = eD.id, F(
                    R.current.map(
                      (t3) => t3.id === a3 ? { ...t3, ...e3 } : t3
                    )
                  );
                }
              },
              "drawer"
            ) : null
          }),
          (0, n.jsx)("p", {
            className: A().srOnly,
            "aria-live": "assertive",
            children: et
          })
        ]
      })
    });
  }
  function M({
    uid: e2,
    card: a2,
    columns: t2,
    people: r2,
    onClose: l2,
    onChange: o2
  }) {
    let d2 = (0, i.useRef)(null), [u2, m2] = (0, i.useState)(""), h2 = a2.checklist?.filter((e3) => e3.done).length ?? 0, p2 = a2.checklist?.length ?? 0, g2 = (0, i.useRef)(null);
    return (0, i.useEffect)(() => {
      d2.current?.querySelector("button")?.focus({ preventScroll: true });
    }, []), (0, i.useLayoutEffect)(() => {
      let e3 = g2.current;
      e3 && (e3.style.height = "auto", e3.style.height = `${e3.scrollHeight}px`);
    }, [a2.title]), (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(s.PY1.div, {
          className: A().scrim,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: {
            duration: _.T.duration.standard,
            ease: [..._.T.ease.standard]
          },
          onClick: l2
        }),
        (0, n.jsxs)(s.PY1.div, {
          ref: d2,
          className: A().drawer,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": `${e2}-drawer-title`,
          initial: { x: "104%" },
          animate: { x: 0 },
          exit: { x: "104%" },
          transition: _.T.spring.smooth,
          onKeyDown: (e3) => {
            if ("Escape" === e3.key) {
              e3.stopPropagation(), l2();
              return;
            }
            if ("Tab" !== e3.key || !d2.current) return;
            let a3 = Array.from(
              d2.current.querySelectorAll("button, input, textarea, select")
            ).filter((e4) => !e4.hasAttribute("disabled")), t3 = a3[0], n2 = a3[a3.length - 1];
            e3.shiftKey && document.activeElement === t3 ? (e3.preventDefault(), n2.focus()) : e3.shiftKey || document.activeElement !== n2 || (e3.preventDefault(), t3.focus());
          },
          children: [
            (0, n.jsxs)("div", {
              className: A().drawerHead,
              children: [
                (0, n.jsx)("span", {
                  id: `${e2}-drawer-title`,
                  className: A().cardId,
                  children: a2.id
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: A().iconButton,
                  "aria-label": "Close details",
                  onClick: l2,
                  children: (0, n.jsx)(f.A, { size: 16 })
                })
              ]
            }),
            (0, n.jsx)("textarea", {
              ref: g2,
              className: A().titleInput,
              value: a2.title,
              rows: 1,
              "aria-label": "Title",
              onChange: (e3) => o2({ title: e3.target.value.replace(/\n/g, " ") })
            }),
            (0, n.jsx)("div", {
              className: A().statusRow,
              role: "radiogroup",
              "aria-label": "Status",
              children: t2.map(
                (t3) => (0, n.jsxs)(
                  "button",
                  {
                    type: "button",
                    role: "radio",
                    "aria-checked": a2.column === t3.id,
                    className: A().statusOption,
                    onClick: () => o2({ column: t3.id }),
                    children: [
                      a2.column === t3.id ? (0, n.jsx)(s.PY1.span, {
                        layoutId: `${e2}-status`,
                        className: A().statusPill,
                        transition: _.T.spring.morph
                      }) : null,
                      (0, n.jsx)("span", { children: t3.name })
                    ]
                  },
                  t3.id
                )
              )
            }),
            (0, n.jsxs)("dl", {
              className: A().props,
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("dt", { children: "Assignee" }),
                    (0, n.jsx)("dd", {
                      children: (0, n.jsx)("span", {
                        className: A().selectRow,
                        children: (0, n.jsx)(w.r, {
                          label: r2.find((e3) => e3.id === a2.assignee)?.name ?? "Unassigned",
                          icon: (0, n.jsx)(D, {
                            person: r2.find((e3) => e3.id === a2.assignee),
                            size: 20
                          }),
                          items: r2.map((e3) => ({
                            label: e3.name,
                            icon: (0, n.jsx)(D, { person: e3, size: 20 }),
                            onSelect: () => o2({ assignee: e3.id })
                          }))
                        })
                      })
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("dt", { children: "Label" }),
                    (0, n.jsx)("dd", { children: a2.label ?? "None" })
                  ]
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("dt", { children: "Due" }),
                    (0, n.jsx)("dd", { children: a2.due ?? "No date" })
                  ]
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("dt", { children: "Estimate" }),
                    (0, n.jsx)("dd", {
                      children: a2.points ? `${a2.points} points` : "None"
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)("label", {
              className: A().drawerLabel,
              htmlFor: `${e2}-description`,
              children: "Description"
            }),
            (0, n.jsx)("textarea", {
              id: `${e2}-description`,
              className: A().description,
              rows: 3,
              value: a2.description ?? "",
              placeholder: "Add context for the team",
              onChange: (e3) => o2({ description: e3.target.value })
            }),
            (0, n.jsxs)("div", {
              className: A().checklistHead,
              children: [
                (0, n.jsx)("span", {
                  className: A().drawerLabel,
                  children: "Checklist"
                }),
                p2 ? (0, n.jsxs)("span", {
                  className: A().checkCount,
                  children: [(0, n.jsx)(L, { value: h2 }), "/", p2]
                }) : null
              ]
            }),
            p2 ? (0, n.jsx)("div", {
              className: A().progress,
              "data-complete": h2 === p2 || void 0,
              "aria-hidden": "true",
              children: (0, n.jsx)(s.PY1.span, {
                initial: false,
                animate: { scaleX: h2 / p2 },
                transition: _.T.spring.smooth
              })
            }) : null,
            (0, n.jsx)("ul", {
              className: A().checklist,
              children: (0, n.jsx)(c.N, {
                initial: false,
                children: a2.checklist?.map(
                  (e3) => (0, n.jsx)(
                    s.PY1.li,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: _.T.spring.smooth,
                      children: (0, n.jsxs)("label", {
                        className: A().checkItem,
                        "data-done": e3.done || void 0,
                        children: [
                          (0, n.jsx)("input", {
                            type: "checkbox",
                            className: A().srOnly,
                            checked: e3.done,
                            onChange: () => o2({
                              checklist: a2.checklist.map(
                                (a3) => a3.id === e3.id ? { ...a3, done: !a3.done } : a3
                              )
                            })
                          }),
                          (0, n.jsx)("span", {
                            className: A().box,
                            "aria-hidden": "true",
                            children: (0, n.jsx)("svg", {
                              viewBox: "0 0 16 16",
                              width: "11",
                              height: "11",
                              children: (0, n.jsx)(s.PY1.path, {
                                d: "M3.5 8.5l3 3 6-7",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                initial: false,
                                animate: {
                                  pathLength: +!!e3.done,
                                  opacity: +!!e3.done
                                },
                                transition: _.T.spring.snappy
                              })
                            })
                          }),
                          (0, n.jsx)("span", { children: e3.text })
                        ]
                      })
                    },
                    e3.id
                  )
                )
              })
            }),
            (0, n.jsxs)("form", {
              className: A().checkAdd,
              onSubmit: (e3) => {
                e3.preventDefault(), u2.trim() && (o2({
                  checklist: [
                    ...a2.checklist ?? [],
                    { id: `n${Date.now()}`, text: u2.trim(), done: false }
                  ]
                }), m2(""));
              },
              children: [
                (0, n.jsx)("input", {
                  value: u2,
                  placeholder: "Add an item",
                  "aria-label": "New checklist item",
                  onChange: (e3) => m2(e3.target.value)
                }),
                (0, n.jsx)("button", {
                  type: "submit",
                  className: A().ghostSmall,
                  disabled: !u2.trim(),
                  children: "Add"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let $ = E;
}

__m(__module,__exports,__require);
}