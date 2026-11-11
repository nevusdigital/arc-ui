function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SeatMap: () => q, default: () => G });
  var s = a(95155), i = a(12115), r = a(18310), n = a(28245), l = a(27933), o = a(92171), d = a(80642), c = a(25354), u = a(5772), h = a(51811);
  let m = {
    name: "accessibility",
    size: 24,
    node: [
      ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
      ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
      ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
      ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
      ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
    ]
  };
  m.node;
  let p = (0, h.A)(m);
  var g = a(2125), f = a(36565), y = a(17951), x = a(9005), _ = a(51288), b = a(65024), w = a(7770), v = a(67752);
  let j = [
    { id: "premium", name: "Premium", price: 148, color: "var(--series-1)" },
    { id: "stalls", name: "Stalls", price: 112, color: "var(--series-4)" },
    { id: "circle", name: "Circle", price: 86, color: "var(--series-2)" },
    { id: "side", name: "Side circle", price: 64, color: "var(--series-3)" }
  ], N = {
    name: "Lena Ostrova plays the Nocturnes",
    venue: "Harbour Hall, main auditorium",
    date: "Sat 14 Nov, 7:30 pm",
    image: { src: (0, v.jW)("concert-hall").src, alt: "" }
  }, k = (e2) => e2 * Math.PI / 180, M = (e2) => Math.round(100 * e2) / 100, $ = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M"], A = ["A", "B", "C", "D", "E", "F"], T = 236 + 21.5 * $.length + 34, S = [
    {
      id: "stalls-left",
      name: "Stalls left",
      from: -41,
      to: -15.5,
      rows: $,
      radius: 236,
      tier: () => "stalls",
      demand: (e2) => 0.5 - 0.02 * e2,
      accessible: "left"
    },
    {
      id: "stalls-centre",
      name: "Stalls centre",
      from: -12.5,
      to: 12.5,
      rows: $,
      radius: 236,
      tier: (e2) => e2 < 6 ? "premium" : "stalls",
      demand: (e2) => 0.66 - 0.025 * e2
    },
    {
      id: "stalls-right",
      name: "Stalls right",
      from: 15.5,
      to: 41,
      rows: $,
      radius: 236,
      tier: () => "stalls",
      demand: (e2) => 0.48 - 0.02 * e2,
      accessible: "right"
    },
    {
      id: "circle-left",
      name: "Circle left",
      from: -44,
      to: -17,
      rows: A,
      radius: T,
      tier: () => "side",
      demand: () => 0.22,
      restricted: "left"
    },
    {
      id: "circle-centre",
      name: "Circle centre",
      from: -14.5,
      to: 14.5,
      rows: A,
      radius: T,
      tier: () => "circle",
      demand: (e2) => 0.44 - 0.03 * e2
    },
    {
      id: "circle-right",
      name: "Circle right",
      from: 17,
      to: 44,
      rows: A,
      radius: T,
      tier: () => "side",
      demand: () => 0.2,
      restricted: "right"
    }
  ], C = (function() {
    let e2, t2 = (e2 = 1411, () => {
      let t3 = e2 = e2 + 1831565813 >>> 0;
      return t3 = Math.imul(t3 ^ t3 >>> 15, 1 | t3), (((t3 ^= t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3)) ^ t3 >>> 14) >>> 0) / 4294967296;
    }), a2 = [], s2 = [], i2 = [];
    for (let e3 of S) {
      let r3 = (e3.from + e3.to) / 2, n3 = e3.radius + (e3.rows.length - 1) * 21.5 + 30;
      i2.push({
        id: e3.id,
        name: e3.name,
        labelX: M(500 + n3 * Math.sin(k(r3))),
        labelY: M(-128 + n3 * Math.cos(k(r3)))
      }), e3.rows.forEach((i3, n4) => {
        let l2 = e3.radius + 21.5 * n4, o2 = Math.floor(l2 * k(e3.to - e3.from) / 20.5), d2 = 20.5 / l2, c2 = k(r3) - d2 * (o2 - 1) / 2, u2 = n4 === e3.rows.length - 1, h2 = false, m2 = 0;
        for (let s3 = 0; s3 < o2; s3++) {
          let r4, p2 = c2 + s3 * d2, g2 = s3 + 1;
          if (u2 && e3.accessible) {
            let t3 = "right" === e3.accessible ? s3 : o2 - 1 - s3;
            t3 < 2 ? r4 = "wheelchair" : 2 === t3 && (r4 = "companion");
          }
          let f2 = e3.demand(n4), y2 = (h2 = h2 ? 0.74 > t2() : t2() < 0.55 * f2) ? "sold" : "available";
          !h2 && 0 === m2 && 0.035 > t2() && (m2 = 2 + Math.floor(3 * t2())), m2 > 0 && !h2 && (y2 = "held", m2--), r4 && "sold" === y2 && 0.6 > t2() && (y2 = "available");
          let x2 = 0 === s3 || s3 === o2 - 1, _2 = "left" === e3.restricted ? s3 < 2 : "right" === e3.restricted && s3 > o2 - 3, b2 = "wheelchair" === r4 ? "Wheelchair space, step free from the foyer" : "companion" === r4 ? "Companion seat next to a wheelchair space" : _2 ? "Restricted view of the stage edge" : x2 ? "Aisle seat" : void 0;
          a2.push({
            id: `${e3.id}-${i3}-${g2}`,
            section: e3.id,
            row: i3,
            number: g2,
            x: M(500 + l2 * Math.sin(p2)),
            y: M(-128 + l2 * Math.cos(p2)),
            rotate: M(-(180 * p2) / Math.PI),
            tier: e3.tier(n4),
            status: y2,
            access: r4,
            note: b2
          });
        }
        if (e3.id.endsWith("-left") || e3.id.endsWith("-right")) {
          let t3 = e3.id.endsWith("-left") ? k(e3.from) - 14 / l2 : k(e3.to) + 14 / l2;
          s2.push({
            id: `${e3.id}-${i3}`,
            row: i3,
            x: M(500 + l2 * Math.sin(t3)),
            y: M(-128 + l2 * Math.cos(t3))
          });
        }
      });
    }
    let r2 = k(27), n2 = (e3, t3) => `${M(500 + e3 * Math.sin(t3))} ${M(-128 + e3 * Math.cos(t3))}`;
    return {
      width: 1e3,
      height: 560,
      stage: `M ${n2(204, -r2)} A 204 204 0 0 0 ${n2(204, r2)} L ${n2(150, r2)} A 150 150 0 0 1 ${n2(150, -r2)} Z`,
      stageLabel: { x: 500, y: M(49) },
      sections: i2,
      seats: a2,
      rows: s2
    };
  })(), R = (() => {
    let e2 = C.seats.filter(
      (e3) => "stalls-centre" === e3.section && "G" === e3.row
    );
    for (let t2 = Math.floor(e2.length / 2); t2 < e2.length - 1; t2++)
      if ("available" === e2[t2].status && "available" === e2[t2 + 1].status)
        return [e2[t2].id, e2[t2 + 1].id];
    return [];
  })();
  var P = a(58402), L = a.n(P);
  let { spring: z, duration: E, ease: I } = w.T, B = { ...z.smooth, visualDuration: 0.52 }, D = (...e2) => e2.filter(Boolean).join(" "), O = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2));
  function F(e2, t2) {
    let a2 = 1 / 0, s2 = 1 / 0, i2 = -1 / 0, r2 = -1 / 0;
    for (let t3 of e2)
      a2 = Math.min(a2, t3.x), s2 = Math.min(s2, t3.y), i2 = Math.max(i2, t3.x), r2 = Math.max(r2, t3.y);
    return { x0: a2 - t2, y0: s2 - t2, x1: i2 + t2, y1: r2 + t2 };
  }
  function W(e2) {
    return `Row ${e2.row}, seat ${e2.number}`;
  }
  let Y = (0, i.memo)(function({
    seat: e2,
    color: t2,
    label: a2,
    selected: i2,
    dimmed: r2,
    active: n2,
    tabbable: l2
  }) {
    let o2 = "wheelchair" === e2.access;
    return (0, s.jsxs)("g", {
      "data-seat": e2.id,
      role: "checkbox",
      "aria-checked": i2,
      "aria-disabled": "available" !== e2.status || void 0,
      "aria-label": a2,
      tabIndex: l2 ? 0 : -1,
      className: L().seat,
      "data-status": e2.status,
      "data-selected": i2 || void 0,
      "data-dimmed": r2 || void 0,
      "data-active": n2 || void 0,
      transform: `translate(${e2.x} ${e2.y}) rotate(${e2.rotate})`,
      style: { "--seat": t2 },
      children: [
        (0, s.jsx)("rect", {
          className: L().hit,
          x: -10.25,
          y: -10.75,
          width: 20.5,
          height: 21.5
        }),
        (0, s.jsx)("rect", {
          className: L().halo,
          x: -10,
          y: -9.75,
          width: 20,
          height: 19.5,
          rx: 6.5
        }),
        o2 ? (0, s.jsx)("rect", {
          className: L().seatBody,
          x: -7.5,
          y: -7.5,
          width: 15,
          height: 15,
          rx: 4
        }) : (0, s.jsx)("rect", {
          className: L().seatBody,
          x: -7,
          y: -6,
          width: 14,
          height: 12,
          rx: 4
        }),
        (0, s.jsxs)("g", {
          transform: `rotate(${-e2.rotate})`,
          className: L().glyphs,
          children: [
            "held" === e2.status && (0, s.jsx)("circle", { className: L().heldDot, r: 1.9 }),
            o2 && (0, s.jsx)(p, {
              className: L().wheel,
              x: -5,
              y: -5,
              width: 10,
              height: 10,
              strokeWidth: 2.4,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("path", {
              className: L().check,
              d: "M-3.4 .2 L-1.1 2.5 L3.5 -2.3"
            })
          ]
        })
      ]
    });
  });
  function H({ color: e2, kind: t2 = "seat" }) {
    return (0, s.jsxs)("svg", {
      className: L().swatch,
      viewBox: "-8 -8 16 16",
      width: 16,
      height: 16,
      "aria-hidden": "true",
      "data-kind": t2,
      style: e2 ? { "--seat": e2 } : void 0,
      children: [
        "wheelchair" === t2 ? (0, s.jsx)("rect", { x: -7, y: -7, width: 14, height: 14, rx: 4 }) : (0, s.jsx)("rect", { x: -7, y: -6, width: 14, height: 12, rx: 4 }),
        "selected" === t2 && (0, s.jsx)("path", { d: "M-3.4 .2 L-1.1 2.5 L3.5 -2.3" }),
        "held" === t2 && (0, s.jsx)("circle", { r: 1.9 }),
        "wheelchair" === t2 && (0, s.jsx)(p, {
          x: -5,
          y: -5,
          width: 10,
          height: 10,
          strokeWidth: 2.4
        })
      ]
    });
  }
  function q({
    event: e2 = N,
    venue: t2 = C,
    tiers: a2 = j,
    maxSeats: h2 = 6,
    serviceFee: m2 = 4.5,
    currency: p2 = "USD",
    holdMinutes: w2 = 10,
    defaultSelected: v2 = R,
    title: k2 = "Your seats",
    onSelectionChange: M2,
    onHold: $2,
    className: A2
  }) {
    let T2, S2, P2 = (0, i.useId)(), G2 = !!(0, r.I)(), U = (0, i.useMemo)(
      () => new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: p2,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }),
      [p2]
    ), Z = (0, i.useMemo)(
      () => new Intl.NumberFormat("en-US", { style: "currency", currency: p2 }),
      [p2]
    ), K = (0, i.useMemo)(
      () => new Intl.NumberFormat("en-US", { style: "currency", currency: p2 }).formatToParts(0).find((e10) => "currency" === e10.type)?.value ?? "",
      [p2]
    ), Q = (0, i.useMemo)(() => new Map(a2.map((e10) => [e10.id, e10])), [a2]), X = (0, i.useMemo)(
      () => new Map(t2.seats.map((e10) => [e10.id, e10])),
      [t2.seats]
    ), V = (0, i.useMemo)(
      () => new Map(t2.sections.map((e10) => [e10.id, e10.name])),
      [t2.sections]
    ), J = (0, i.useMemo)(() => {
      let e10 = F(t2.seats, 30);
      return { ...e10, y0: Math.min(e10.y0, t2.stageLabel.y - 44) };
    }, [t2.seats, t2.stageLabel.y]), ee = (0, i.useMemo)(() => {
      let e10 = /* @__PURE__ */ new Map(), a3 = /* @__PURE__ */ new Map();
      for (let s2 of t2.seats) {
        let t3 = `${s2.section}|${s2.row}`;
        e10.has(t3) || (e10.set(t3, []), a3.set(s2.section, [...a3.get(s2.section) ?? [], s2.row])), e10.get(t3).push(s2);
      }
      return e10.forEach((e11) => e11.sort((e12, t3) => e12.number - t3.number)), { rows: e10, order: a3 };
    }, [t2.seats]), [et, ea] = (0, i.useState)(
      () => v2.filter((e10) => X.get(e10)?.status === "available").slice(0, h2)
    ), [es, ei] = (0, i.useState)(
      () => et[0] ?? t2.seats.find((e10) => "available" === e10.status)?.id ?? null
    ), [er, en] = (0, i.useState)(null), [el, eo] = (0, i.useState)(false), [ed, ec] = (0, i.useState)(false), [eu, eh] = (0, i.useState)(null), [em, ep] = (0, i.useState)(null), [eg, ef] = (0, i.useState)(""), [ey, ex] = (0, i.useState)("fit"), [e_, eb] = (0, i.useState)({ status: "idle", endsAt: 0 }), [ew, ev] = (0, i.useState)(0), ej = (0, i.useMemo)(() => new Set(et), [et]), eN = (0, i.useMemo)(
      () => et.map((e10) => X.get(e10)).filter((e10) => !!e10),
      [et, X]
    ), ek = "holding" === e_.status || "held" === e_.status, eM = (0, i.useRef)(M2);
    (0, i.useEffect)(() => {
      eM.current = M2;
    });
    let e$ = (0, i.useRef)(true);
    (0, i.useEffect)(() => {
      if (e$.current) {
        e$.current = false;
        return;
      }
      eM.current?.(eN);
    }, [eN]);
    let eA = (0, i.useRef)(null), eT = (0, i.useRef)(null), eS = (0, i.useRef)(null), eC = (0, i.useRef)(null), eR = (0, i.useRef)(null), eP = (0, i.useRef)({ w: 0, h: 0 }), eL = (0, i.useRef)({ x: 0, y: 0, s: 1 }), ez = (0, i.useRef)(4), eE = (0, n.d)(0), eI = (0, n.d)(0), eB = (0, n.d)(1), eD = (0, i.useRef)(null), eO = (0, i.useCallback)((e10, t3 = ez.current) => {
      let { w: a3, h: s2 } = eP.current, i2 = O(
        Math.min((a3 - 32) / (e10.x1 - e10.x0), (s2 - 32) / (e10.y1 - e10.y0)),
        eL.current.s,
        t3
      );
      return {
        s: i2,
        x: a3 / 2 - (e10.x0 + e10.x1) / 2 * i2,
        y: s2 / 2 - (e10.y0 + e10.y1) / 2 * i2
      };
    }, []), eF = (0, i.useCallback)(
      (e10) => {
        let { w: t3, h: a3 } = eP.current, s2 = O(e10.s, eL.current.s, ez.current), i2 = (e11, t4, a4, i3) => {
          let r2 = (i3 - a4) * s2;
          return r2 <= t4 - 32 ? (t4 - r2) / 2 - a4 * s2 : O(e11, t4 - 16 - i3 * s2, 16 - a4 * s2);
        };
        return { s: s2, x: i2(e10.x, t3, J.x0, J.x1), y: i2(e10.y, a3, J.y0, J.y1) };
      },
      [J]
    ), eW = (0, i.useCallback)(() => {
      let e10 = eR.current, t3 = eD.current;
      if (!e10 || !t3) return;
      let a3 = eB.get(), s2 = eE.get() + t3.x * a3, i2 = eI.get() + t3.y * a3, r2 = i2 < 96, n2 = e10.offsetWidth / 2, l2 = O(s2, n2 + 8, eP.current.w - n2 - 8), o2 = 9 * Math.max(0.7, a3) + 6;
      e10.style.transform = `translate(${l2.toFixed(1)}px, ${i2.toFixed(1)}px) translate(-50%, ${r2 ? "0%" : "-100%"}) translateY(${r2 ? o2 : -o2}px)`, e10.toggleAttribute("data-below", r2);
    }, [eB, eE, eI]), eY = (0, i.useRef)("fit"), eH = (0, i.useCallback)(() => {
      let e10 = eS.current;
      if (!e10 || !eP.current.w) return;
      e10.setAttribute(
        "transform",
        `translate(${eE.get().toFixed(2)} ${eI.get().toFixed(2)}) scale(${eB.get().toFixed(4)})`
      );
      let t3 = eC.current, a3 = eB.get();
      t3 && (t3.style.setProperty(
        "--label-size",
        `${(O(12 * a3, 9, 13) / a3).toFixed(2)}px`
      ), t3.style.setProperty(
        "--row-size",
        `${(O(9 * a3, 7.5, 11) / a3).toFixed(2)}px`
      ), t3.style.setProperty("--row-opacity", 9 * a3 < 5.5 ? "0" : "1"), t3.style.setProperty("--label-opacity", 12 * a3 < 7 ? "0" : "1")), eW();
      let s2 = a3 <= 1.01 * eL.current.s ? "fit" : a3 >= 0.99 * ez.current ? "max" : "mid";
      s2 !== eY.current && (eY.current = s2, ex(s2));
    }, [eW, eB, eE, eI]);
    (0, i.useEffect)(() => {
      let e10 = () => l.Gt.render(eH), t3 = [eE.on("change", e10), eI.on("change", e10), eB.on("change", e10)];
      return () => t3.forEach((e11) => e11());
    }, [eB, eE, eI, eH]);
    let eq = (0, i.useCallback)(
      (e10) => {
        eE.jump(e10.x), eI.jump(e10.y), eB.jump(e10.s), eH();
      },
      [eB, eE, eI, eH]
    ), eG = (0, i.useCallback)(
      (e10) => {
        let t3 = eF(e10);
        G2 ? eq(t3) : ((0, o.i)(eE, t3.x, B), (0, o.i)(eI, t3.y, B), (0, o.i)(eB, t3.s, B));
      },
      [eF, eq, G2, eB, eE, eI]
    ), eU = (0, i.useCallback)(() => {
      eE.stop(), eI.stop(), eB.stop();
    }, [eB, eE, eI]), eZ = (0, i.useCallback)(
      (e10, t3, a3, s2) => {
        let i2 = eB.get(), r2 = eE.get(), n2 = eI.get(), l2 = O(i2 * e10, eL.current.s, ez.current), o2 = { s: l2, x: t3 - (t3 - r2) / i2 * l2, y: a3 - (a3 - n2) / i2 * l2 };
        s2 ? eG(o2) : eq(eF(o2));
      },
      [eF, eG, eq, eB, eE, eI]
    );
    (0, i.useLayoutEffect)(() => {
      let e10 = eA.current, t3 = eT.current;
      if (!e10 || !t3) return;
      let a3 = () => {
        let a4 = e10.clientWidth, s3 = e10.clientHeight;
        if (!a4 || !s3 || a4 === eP.current.w && s3 === eP.current.h) return;
        let i2 = !eP.current.w || "fit" === eY.current;
        eP.current = { w: a4, h: s3 }, t3.setAttribute("viewBox", `0 0 ${a4} ${s3}`), eL.current = { x: 0, y: 0, s: 0 };
        let r2 = eO(J, 1 / 0);
        eL.current = r2, ez.current = Math.max(4 * r2.s, 44 / 20.5), eU(), eq(i2 ? r2 : eF({ x: eE.get(), y: eI.get(), s: eB.get() }));
      };
      a3();
      let s2 = new ResizeObserver(a3);
      return s2.observe(e10), () => s2.disconnect();
    }, [eO, eF, J, eq, eB, eU, eE, eI]);
    let eK = (0, i.useRef)(void 0), eQ = (0, i.useCallback)((e10, t3 = true) => {
      ef(e10), t3 && (ep((t4) => ({ id: (t4?.id ?? 0) + 1, text: e10 })), clearTimeout(eK.current), eK.current = setTimeout(() => ep(null), 2800));
    }, []);
    (0, i.useEffect)(() => () => clearTimeout(eK.current), []);
    let eX = (0, i.useCallback)(
      (e10) => `${W(e10)}, ${V.get(e10.section) ?? ""}`,
      [V]
    ), eV = (0, i.useCallback)(
      (e10) => {
        let t3 = X.get(e10);
        if (!t3) return;
        if (ei(e10), ek) return void eQ("Release your hold to change seats.");
        if ("sold" === t3.status) return void eQ(`${W(t3)} is sold.`);
        if ("held" === t3.status)
          return void eQ(`${W(t3)} is on hold for another buyer.`);
        if (ej.has(e10)) {
          ea((t4) => t4.filter((t5) => t5 !== e10)), eQ(`Removed ${eX(t3)}.`, false);
          return;
        }
        if (et.length >= h2)
          return void eQ(
            `You can choose up to ${h2} seats. Remove one to pick another.`
          );
        ea((t4) => [...t4, e10]), "error" === e_.status && eb({ status: "idle", endsAt: 0 });
        let a3 = Q.get(t3.tier);
        eQ(
          `Added ${eX(t3)}, ${a3 ? U.format(a3.price) : ""}. ${et.length + 1} of ${h2} seats.`,
          false
        );
      },
      [eX, e_.status, ek, h2, U, eQ, X, et.length, ej, Q]
    ), eJ = (0, i.useCallback)(
      (e10) => {
        let t3 = X.get(e10);
        t3 && !ek && (ea((t4) => t4.filter((t5) => t5 !== e10)), eQ(`Removed ${eX(t3)}.`, false));
      },
      [eX, ek, eQ, X]
    ), e0 = (0, i.useCallback)(
      (e10, t3 = false) => {
        let { w: a3, h: s2 } = eP.current, i2 = eB.get(), r2 = eE.get() + e10.x * i2, n2 = eI.get() + e10.y * i2;
        !t3 && r2 > 48 && r2 < a3 - 48 && n2 > 48 && n2 < s2 - 48 || eG({ s: i2, x: a3 / 2 - e10.x * i2, y: s2 / 2 - e10.y * i2 });
      },
      [eG, eB, eE, eI]
    ), e1 = (0, i.useCallback)(
      (e10) => {
        ei(e10);
        let t3 = eT.current?.querySelector(`[data-seat="${CSS.escape(e10)}"]`);
        t3?.focus({ preventScroll: true });
        let a3 = X.get(e10);
        a3 && e0(a3);
      },
      [e0, X]
    ), e22 = (0, i.useCallback)(
      (e10, a3) => {
        let s2 = ee.rows.get(`${e10.section}|${e10.row}`) ?? [], i2 = s2.findIndex((t3) => t3.id === e10.id), r2 = (t3) => t3.reduce((t4, a4) => {
          let s3 = Math.hypot(a4.x - e10.x, a4.y - e10.y);
          return !t4 || s3 < Math.hypot(t4.x - e10.x, t4.y - e10.y) ? a4 : t4;
        }, null);
        if ("Home" === a3) return s2[0] ?? null;
        if ("End" === a3) return s2[s2.length - 1] ?? null;
        if ("ArrowLeft" === a3 || "ArrowRight" === a3) {
          let n3 = "ArrowLeft" === a3 ? -1 : 1;
          return s2[i2 + n3] ? s2[i2 + n3] : r2(
            t2.seats.filter(
              (t3) => t3.section !== e10.section && t3.row === e10.row && (t3.x - e10.x) * n3 > 0 && 140 > Math.hypot(t3.x - e10.x, t3.y - e10.y)
            )
          );
        }
        let n2 = ee.order.get(e10.section) ?? [], l2 = n2.indexOf(e10.row), o2 = "ArrowUp" === a3 ? -1 : 1, d2 = n2[l2 + o2];
        return r2(
          d2 ? ee.rows.get(`${e10.section}|${d2}`) ?? [] : t2.seats.filter(
            (t3) => t3.section !== e10.section && (t3.y - e10.y) * o2 > 12 && 160 > Math.abs(t3.x - e10.x)
          )
        );
      },
      [ee, t2.seats]
    ), e5 = (0, i.useCallback)(
      (e10) => {
        eZ(e10, eP.current.w / 2, eP.current.h / 2, true);
      },
      [eZ]
    ), e6 = (0, i.useCallback)(() => eG(eL.current), [eG]), e4 = (0, i.useRef)(/* @__PURE__ */ new Map()), e8 = (0, i.useRef)({
      moved: false,
      start: { x: 0, y: 0, s: 1 },
      origin: { x: 0, y: 0 },
      distance: 0,
      mid: { x: 0, y: 0 },
      type: "mouse"
    }), e7 = (0, i.useRef)(false), [e3, e9] = (0, i.useState)(false), te = (e10, t3) => {
      let a3 = eA.current.getBoundingClientRect();
      return { x: e10 - a3.left, y: t3 - a3.top };
    }, tt = () => {
      let e10 = [...e4.current.values()], t3 = e8.current;
      t3.start = { x: eE.get(), y: eI.get(), s: eB.get() }, e10.length >= 2 ? (t3.distance = Math.hypot(e10[0].x - e10[1].x, e10[0].y - e10[1].y), t3.mid = { x: (e10[0].x + e10[1].x) / 2, y: (e10[0].y + e10[1].y) / 2 }) : 1 === e10.length && (t3.origin = e10[0]);
    }, ta = (e10) => {
      e4.current.delete(e10.pointerId) && (e8.current.moved && (e7.current = true), e4.current.size > 0 ? tt() : e9(false));
    }, ts = (0, i.useRef)(0);
    (0, i.useEffect)(() => {
      let e10 = eA.current;
      if (!e10) return;
      let t3 = (t4) => {
        if (!(t4.ctrlKey || t4.metaKey)) {
          let e11 = performance.now();
          e11 - ts.current > 3200 && (ts.current = e11, eQ("Pinch, or hold Ctrl or \u2318 while scrolling, to zoom.", true));
          return;
        }
        t4.preventDefault(), eU();
        let a3 = e10.getBoundingClientRect();
        eZ(
          Math.exp(-(0.012 * t4.deltaY)),
          t4.clientX - a3.left,
          t4.clientY - a3.top,
          false
        );
      };
      return e10.addEventListener("wheel", t3, { passive: false }), () => e10.removeEventListener("wheel", t3);
    }, [eQ, eU, eZ]);
    let ti = (0, i.useMemo)(() => {
      let e10 = /* @__PURE__ */ new Map();
      for (let a3 of t2.seats)
        e10.set(a3.section, [...e10.get(a3.section) ?? [], a3]);
      return e10;
    }, [t2.seats]), tr = (0, i.useMemo)(() => {
      let e10 = /* @__PURE__ */ new Map();
      for (let a3 of t2.seats)
        "available" !== a3.status || ej.has(a3.id) || e10.set(a3.tier, (e10.get(a3.tier) ?? 0) + 1);
      return e10;
    }, [ej, t2.seats]), tn = er ?? (el && ed ? es : null), tl = tn ? X.get(tn) ?? null : null, [to, td] = (0, i.useState)(null);
    tl && tl !== to && td(tl), (0, i.useLayoutEffect)(() => {
      to && (eD.current = to, eW());
    }, [eW, to]);
    let tc = eN.reduce((e10, t3) => e10 + (Q.get(t3.tier)?.price ?? 0), 0), tu = eN.length * m2, th = eN.length < 2 || (() => {
      let e10 = eN[0];
      if (!eN.every((t4) => t4.section === e10.section && t4.row === e10.row))
        return false;
      let t3 = eN.map((e11) => e11.number).sort((e11, t4) => e11 - t4);
      return t3[t3.length - 1] - t3[0] == t3.length - 1;
    })();
    (0, i.useEffect)(() => {
      if ("held" !== e_.status) return;
      let e10 = () => {
        let e11 = Date.now();
        ev(e11), e11 >= e_.endsAt && (eb({ status: "idle", endsAt: 0 }), ef("Your hold expired. The seats are back on sale."));
      };
      e10();
      let t3 = setInterval(e10, 1e3);
      return () => clearInterval(t3);
    }, [e_]);
    let tm = Math.max(0, Math.ceil((e_.endsAt - ew) / 1e3)), tp = `${Math.floor(tm / 60)}:${String(tm % 60).padStart(2, "0")}`, tg = async () => {
      if (eN.length && !ek) {
        eb({ status: "holding", endsAt: 0 });
        try {
          await ($2 ? $2(eN) : new Promise((e11) => setTimeout(e11, 900)));
          let e10 = Date.now() + 6e4 * w2;
          ev(Date.now()), eb({ status: "held", endsAt: e10 }), ef(
            `${eN.length} ${1 === eN.length ? "seat" : "seats"} held for ${w2} minutes.`
          );
        } catch {
          eb({ status: "error", endsAt: 0 }), ef("Those seats could not be held. Try again.");
        }
      }
    }, tf = "held" === e_.status ? "Seats held" : "error" === e_.status ? "Try again" : 0 === eN.length ? "Choose seats" : `Hold ${eN.length} ${1 === eN.length ? "seat" : "seats"}`, ty = (0, i.useCallback)(
      (e10) => {
        let t3 = Q.get(e10.tier), a3 = "sold" === e10.status ? "Sold" : "held" === e10.status ? "On hold for another buyer" : `${t3?.name ?? ""}, ${t3 ? U.format(t3.price) : ""}`;
        return `${W(e10)}, ${V.get(e10.section) ?? ""}. ${a3}${e10.note ? `. ${e10.note}` : ""}`;
      },
      [U, V, Q]
    ), tx = (0, i.useMemo)(
      () => new Map(t2.seats.map((e10) => [e10.id, ty(e10)])),
      [ty, t2.seats]
    ), t_ = G2 ? { duration: 0 } : z.smooth, tb = G2 ? { duration: 0 } : { duration: E.exit, ease: [...I.exit] }, tw = `${P2}-title`, tv = `${P2}-hint`;
    return (0, s.jsxs)("section", {
      className: D(L().root, A2),
      "aria-labelledby": `${P2}-event`,
      children: [
        (0, s.jsxs)("header", {
          className: L().header,
          children: [
            e2.image && (0, s.jsx)(u.default, {
              className: L().thumb,
              src: e2.image.src,
              alt: e2.image.alt,
              width: 88,
              height: 88,
              sizes: "44px"
            }),
            (0, s.jsxs)("div", {
              className: L().headText,
              children: [
                (0, s.jsx)("h2", {
                  id: `${P2}-event`,
                  className: L().eventName,
                  children: e2.name
                }),
                (0, s.jsxs)("p", {
                  className: L().eventMeta,
                  children: [
                    (0, s.jsx)("span", { children: e2.date }),
                    (0, s.jsx)("span", {
                      "aria-hidden": "true",
                      className: L().dot
                    }),
                    (0, s.jsx)("span", { children: e2.venue })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: L().body,
          children: [
            (0, s.jsxs)("div", {
              className: L().mapColumn,
              children: [
                (0, s.jsx)("div", {
                  className: L().tiers,
                  role: "group",
                  "aria-label": "Highlight a price",
                  children: a2.map(
                    (e10) => (0, s.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: L().tier,
                        "aria-pressed": eu === e10.id,
                        onClick: () => ((e11) => {
                          let a3 = eu === e11 ? null : e11;
                          if (eh(a3), !a3) return void e6();
                          let s2 = t2.seats.filter((e12) => e12.tier === a3);
                          s2.length && eG(eO(F(s2, 26), 2 * eL.current.s));
                          let i2 = Q.get(a3), r2 = s2.filter(
                            (e12) => "available" === e12.status && !ej.has(e12.id)
                          ).length;
                          ef(
                            `${i2?.name ?? ""} highlighted, ${r2} seats available.`
                          );
                        })(e10.id),
                        style: { "--seat": e10.color },
                        children: [
                          (0, s.jsx)(H, { color: e10.color }),
                          (0, s.jsx)("span", {
                            className: L().tierName,
                            children: e10.name
                          }),
                          (0, s.jsx)("span", {
                            className: L().tierPrice,
                            children: U.format(e10.price)
                          }),
                          (0, s.jsxs)("span", {
                            className: L().tierLeft,
                            children: [tr.get(e10.id) ?? 0, " left"]
                          })
                        ]
                      },
                      e10.id
                    )
                  )
                }),
                (0, s.jsxs)("div", {
                  ref: eA,
                  className: L().viewport,
                  "data-level": ey,
                  "data-dragging": e3 || void 0,
                  "data-filtered": eu ? "" : void 0,
                  onPointerDown: (e10) => {
                    0 !== e10.button || e10.target.closest("button") || (eo(false), eU(), e4.current.set(e10.pointerId, te(e10.clientX, e10.clientY)), e8.current.type = e10.pointerType, 1 === e4.current.size && (e8.current.moved = false), tt());
                  },
                  onPointerMove: (e10) => {
                    if (!e4.current.has(e10.pointerId)) return;
                    e4.current.set(e10.pointerId, te(e10.clientX, e10.clientY));
                    let t3 = [...e4.current.values()], a3 = e8.current;
                    if (t3.length >= 2) {
                      let e11 = Math.hypot(t3[0].x - t3[1].x, t3[0].y - t3[1].y), s3 = {
                        x: (t3[0].x + t3[1].x) / 2,
                        y: (t3[0].y + t3[1].y) / 2
                      }, i3 = O(
                        a3.start.s * (e11 / Math.max(1, a3.distance)),
                        eL.current.s,
                        ez.current
                      ), r2 = (a3.mid.x - a3.start.x) / a3.start.s, n2 = (a3.mid.y - a3.start.y) / a3.start.s;
                      a3.moved = true, eq(eF({ s: i3, x: s3.x - r2 * i3, y: s3.y - n2 * i3 }));
                      return;
                    }
                    let s2 = t3[0].x - a3.origin.x, i2 = t3[0].y - a3.origin.y;
                    !a3.moved && 5 > Math.hypot(s2, i2) || (a3.moved || (a3.moved = true, eA.current?.setPointerCapture(e10.pointerId), e9(true), en(null)), eq(
                      eF({
                        s: a3.start.s,
                        x: a3.start.x + s2,
                        y: a3.start.y + i2
                      })
                    ));
                  },
                  onPointerUp: ta,
                  onPointerCancel: ta,
                  onPointerLeave: () => {
                    e3 || en(null);
                  },
                  children: [
                    (0, s.jsx)("svg", {
                      ref: eT,
                      className: L().svg,
                      viewBox: `0 0 ${t2.width} ${t2.height}`,
                      role: "group",
                      "aria-label": `Seat map, ${e2.venue}`,
                      "aria-describedby": tv,
                      "data-keyboard": el || void 0,
                      onKeyDown: (e10) => {
                        eo(true);
                        let t3 = es ? X.get(es) : null, a3 = e10.key;
                        if ("+" === a3 || "=" === a3) {
                          e10.preventDefault(), e5(1.5);
                          return;
                        }
                        if ("-" === a3 || "_" === a3) {
                          e10.preventDefault(), e5(1 / 1.5);
                          return;
                        }
                        if ("0" === a3) {
                          e10.preventDefault(), e6();
                          return;
                        }
                        if (t3) {
                          if ("Enter" === a3 || " " === a3) {
                            e10.preventDefault(), eV(t3.id);
                            return;
                          }
                          if ([
                            "ArrowLeft",
                            "ArrowRight",
                            "ArrowUp",
                            "ArrowDown",
                            "Home",
                            "End"
                          ].includes(a3)) {
                            e10.preventDefault();
                            let s2 = e22(t3, a3);
                            s2 && e1(s2.id);
                          }
                        }
                      },
                      onClick: (e10) => {
                        if (e7.current) {
                          e7.current = false;
                          return;
                        }
                        let t3 = e10.target.closest("[data-seat]"), a3 = t3?.dataset.seat;
                        if (!a3) return;
                        let s2 = X.get(a3), i2 = eB.get();
                        if ("touch" === e8.current.type && e10.detail > 0 && 20.5 * i2 < 36) {
                          let e11 = Math.min(ez.current, 44 / 20.5), { w: t4, h: i3 } = eP.current;
                          eG({ s: e11, x: t4 / 2 - s2.x * e11, y: i3 / 2 - s2.y * e11 }), ei(a3), ef("Zoomed in. Tap a seat to choose it.");
                          return;
                        }
                        eV(a3);
                      },
                      onFocus: () => ec(true),
                      onBlur: (e10) => {
                        e10.currentTarget.contains(e10.relatedTarget) || ec(false);
                      },
                      onPointerOver: (e10) => {
                        "mouse" !== e10.pointerType || e3 || en(
                          e10.target.closest("[data-seat]")?.dataset.seat ?? null
                        );
                      },
                      children: (0, s.jsxs)("g", {
                        ref: eS,
                        children: [
                          (0, s.jsx)("path", {
                            className: L().stage,
                            d: t2.stage
                          }),
                          (0, s.jsxs)("g", {
                            ref: eC,
                            "aria-hidden": "true",
                            children: [
                              (0, s.jsx)("text", {
                                className: L().stageLabel,
                                x: t2.stageLabel.x,
                                y: t2.stageLabel.y,
                                textAnchor: "middle",
                                dominantBaseline: "middle",
                                children: "Stage"
                              }),
                              t2.sections.map(
                                (e10) => (0, s.jsx)(
                                  "text",
                                  {
                                    className: L().sectionLabel,
                                    x: e10.labelX,
                                    y: e10.labelY,
                                    textAnchor: "middle",
                                    dominantBaseline: "middle",
                                    children: e10.name
                                  },
                                  `label-${e10.id}`
                                )
                              ),
                              t2.rows.map(
                                (e10) => (0, s.jsx)(
                                  "text",
                                  {
                                    className: L().rowLabel,
                                    x: e10.x,
                                    y: e10.y,
                                    textAnchor: "middle",
                                    dominantBaseline: "middle",
                                    children: e10.row
                                  },
                                  e10.id
                                )
                              )
                            ]
                          }),
                          t2.sections.map(
                            (e10) => (0, s.jsx)(
                              "g",
                              {
                                role: "group",
                                "aria-label": e10.name,
                                children: (ti.get(e10.id) ?? []).map(
                                  (e11) => (0, s.jsx)(
                                    Y,
                                    {
                                      seat: e11,
                                      color: Q.get(e11.tier)?.color ?? "var(--text-muted)",
                                      label: tx.get(e11.id) ?? "",
                                      selected: ej.has(e11.id),
                                      dimmed: !!eu && e11.tier !== eu,
                                      active: es === e11.id,
                                      tabbable: es === e11.id
                                    },
                                    e11.id
                                  )
                                )
                              },
                              e10.id
                            )
                          )
                        ]
                      })
                    }),
                    (0, s.jsx)("div", {
                      ref: eR,
                      className: L().tip,
                      "data-open": tl ? "" : void 0,
                      "aria-hidden": "true",
                      children: to && (T2 = Q.get(to.tier), S2 = ej.has(to.id), (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("span", {
                            className: L().tipTitle,
                            children: W(to)
                          }),
                          (0, s.jsxs)("span", {
                            className: L().tipMeta,
                            children: [
                              V.get(to.section),
                              T2 && !V.get(to.section)?.includes(T2.name) ? `, ${T2.name}` : ""
                            ]
                          }),
                          (0, s.jsx)("span", {
                            className: L().tipPrice,
                            "data-status": to.status,
                            children: "sold" === to.status ? "Sold" : "held" === to.status ? "On hold" : S2 ? `Selected, ${T2 ? U.format(T2.price) : ""}` : T2 ? U.format(T2.price) : ""
                          }),
                          to.note && (0, s.jsx)("span", {
                            className: L().tipNote,
                            children: to.note
                          })
                        ]
                      }))
                    }),
                    (0, s.jsx)(d.N, {
                      children: em && (0, s.jsx)(
                        c.PY1.p,
                        {
                          className: L().notice,
                          initial: G2 ? { opacity: 0 } : { opacity: 0, y: -8 },
                          animate: { opacity: 1, y: 0 },
                          exit: G2 ? { opacity: 0 } : { opacity: 0, y: -6, transition: tb },
                          transition: G2 ? { duration: 0 } : z.smooth,
                          children: em.text
                        },
                        em.id
                      )
                    }),
                    (0, s.jsxs)("div", {
                      className: L().zoom,
                      role: "group",
                      "aria-label": "Zoom",
                      children: [
                        (0, s.jsx)("button", {
                          type: "button",
                          className: L().zoomButton,
                          "aria-label": "Zoom in",
                          disabled: "max" === ey,
                          onClick: () => e5(1.6),
                          children: (0, s.jsx)(g.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        }),
                        (0, s.jsx)("button", {
                          type: "button",
                          className: L().zoomButton,
                          "aria-label": "Zoom out",
                          disabled: "fit" === ey,
                          onClick: () => e5(0.625),
                          children: (0, s.jsx)(f.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        }),
                        (0, s.jsx)("button", {
                          type: "button",
                          className: L().zoomButton,
                          "aria-label": "Show the whole hall",
                          disabled: "fit" === ey,
                          onClick: () => {
                            eh(null), e6();
                          },
                          children: (0, s.jsx)(y.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsxs)("ul", {
                  className: L().legend,
                  "aria-label": "Seat key",
                  children: [
                    (0, s.jsxs)("li", {
                      children: [
                        (0, s.jsx)(H, { kind: "selected" }),
                        "Selected"
                      ]
                    }),
                    (0, s.jsxs)("li", {
                      children: [(0, s.jsx)(H, { kind: "held" }), "On hold"]
                    }),
                    (0, s.jsxs)("li", {
                      children: [(0, s.jsx)(H, { kind: "sold" }), "Sold"]
                    }),
                    (0, s.jsxs)("li", {
                      children: [
                        (0, s.jsx)(H, {
                          kind: "wheelchair",
                          color: "var(--text-secondary)"
                        }),
                        "Wheelchair space"
                      ]
                    })
                  ]
                }),
                (0, s.jsx)("p", {
                  id: tv,
                  className: L().srOnly,
                  children: "Use the arrow keys to move between seats, Home and End for the ends of a row, Enter or Space to choose a seat, plus and minus to zoom, and 0 to show the whole hall."
                })
              ]
            }),
            (0, s.jsxs)("aside", {
              className: L().summary,
              "aria-labelledby": tw,
              children: [
                (0, s.jsxs)("div", {
                  className: L().summaryHead,
                  children: [
                    (0, s.jsx)("h3", {
                      id: tw,
                      className: L().summaryTitle,
                      children: k2
                    }),
                    (0, s.jsxs)("span", {
                      className: L().count,
                      "data-full": eN.length >= h2 || void 0,
                      children: [eN.length, " of ", h2]
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: L().listArea,
                  children: [
                    (0, s.jsx)(d.N, {
                      initial: false,
                      children: 0 === eN.length && (0, s.jsx)(
                        c.PY1.p,
                        {
                          className: L().empty,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            transition: { duration: G2 ? 0 : E.instant }
                          },
                          transition: G2 ? { duration: 0 } : { duration: E.standard, ease: [...I.enter] },
                          children: "Pick seats on the map. Tap a price above to see where it sits."
                        },
                        "empty"
                      )
                    }),
                    (0, s.jsx)("ul", {
                      className: L().list,
                      children: (0, s.jsx)(d.N, {
                        initial: false,
                        children: eN.map((e10) => {
                          let t3 = Q.get(e10.tier);
                          return (0, s.jsx)(
                            c.PY1.li,
                            {
                              className: L().itemWrap,
                              initial: { height: 0, opacity: 0 },
                              animate: { height: "auto", opacity: 1 },
                              exit: { height: 0, opacity: 0, transition: tb },
                              transition: t_,
                              children: (0, s.jsxs)("div", {
                                className: L().item,
                                children: [
                                  (0, s.jsxs)("button", {
                                    type: "button",
                                    className: L().itemMain,
                                    onClick: () => {
                                      let t4 = X.get(e10.id);
                                      t4 && (ei(t4.id), e0(t4, true));
                                    },
                                    "aria-label": `Show ${W(e10)}, ${V.get(e10.section)} on the map`,
                                    children: [
                                      (0, s.jsx)(H, { color: t3?.color }),
                                      (0, s.jsxs)("span", {
                                        className: L().itemText,
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: L().itemName,
                                            children: W(e10)
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: L().itemMeta,
                                            children: [
                                              V.get(e10.section),
                                              "wheelchair" === e10.access ? ", wheelchair space" : ""
                                            ]
                                          })
                                        ]
                                      }),
                                      (0, s.jsx)("span", {
                                        className: L().itemPrice,
                                        children: t3 ? U.format(t3.price) : ""
                                      })
                                    ]
                                  }),
                                  (0, s.jsx)("button", {
                                    type: "button",
                                    className: L().remove,
                                    "aria-label": `Remove ${W(e10)}, ${V.get(e10.section)}`,
                                    disabled: ek,
                                    onClick: () => eJ(e10.id),
                                    children: (0, s.jsx)(x.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    })
                                  })
                                ]
                              })
                            },
                            e10.id
                          );
                        })
                      })
                    }),
                    (0, s.jsx)(d.N, {
                      initial: false,
                      children: !th && (0, s.jsx)(
                        c.PY1.p,
                        {
                          className: L().apart,
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0, transition: tb },
                          transition: t_,
                          children: (0, s.jsx)("span", {
                            className: L().apartInner,
                            children: "These seats are not all together."
                          })
                        },
                        "apart"
                      )
                    })
                  ]
                }),
                (0, s.jsxs)("dl", {
                  className: L().totals,
                  children: [
                    (0, s.jsxs)("div", {
                      className: L().totalRow,
                      children: [
                        (0, s.jsx)("dt", { children: "Tickets" }),
                        (0, s.jsx)("dd", {
                          children: (0, s.jsx)(b.q, {
                            value: tc,
                            prefix: K,
                            decimals: 2
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: L().totalRow,
                      children: [
                        (0, s.jsx)("dt", { children: "Service fee" }),
                        (0, s.jsx)("dd", {
                          children: (0, s.jsx)(b.q, {
                            value: tu,
                            prefix: K,
                            decimals: 2
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: D(L().totalRow, L().grand),
                      children: [
                        (0, s.jsx)("dt", { children: "Total" }),
                        (0, s.jsx)("dd", {
                          children: (0, s.jsx)(b.q, {
                            value: tc + tu,
                            prefix: K,
                            decimals: 2
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: L().actions,
                  children: [
                    (0, s.jsx)(_.$, {
                      className: L().holdButton,
                      variant: "primary",
                      loading: "holding" === e_.status,
                      disabled: 0 === eN.length || "held" === e_.status,
                      onClick: tg,
                      children: tf
                    }),
                    (0, s.jsx)("div", {
                      className: L().status,
                      children: (0, s.jsx)(d.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, s.jsx)(
                          c.PY1.div,
                          {
                            className: L().statusInner,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: {
                              opacity: 0,
                              transition: G2 ? { duration: 0 } : {
                                duration: E.instant,
                                ease: [...I.standard]
                              }
                            },
                            transition: G2 ? { duration: 0 } : { duration: E.standard, ease: [...I.enter] },
                            children: "held" === e_.status ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsxs)("span", {
                                  children: [
                                    "Held for ",
                                    (0, s.jsx)("span", {
                                      className: L().timer,
                                      children: tp
                                    }),
                                    ". Checkout is simulated."
                                  ]
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  className: L().link,
                                  onClick: () => {
                                    eb({ status: "idle", endsAt: 0 }), ef(
                                      "Hold released. You can change your seats."
                                    );
                                  },
                                  children: "Release"
                                })
                              ]
                            }) : "error" === e_.status ? (0, s.jsx)("span", {
                              className: L().error,
                              children: "Those seats could not be held. Try again."
                            }) : (0, s.jsxs)("span", {
                              className: L().statusQuiet,
                              children: [
                                Z.format(m2),
                                " service fee per ticket"
                              ]
                            })
                          },
                          "held" === e_.status ? "held" : "error" === e_.status ? "error" : "idle"
                        )
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: L().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eg
        })
      ]
    });
  }
  let G = q;
}

__m(__module,__exports,__require);
}