/* booking-pill (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(27927, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { BookingPillDemo: () => ef });
  var i = a(95155), n = a(12115), s = a(18310), r = a(79196), l = a(25354), o = a(80642), d = a(92171), c = a(28245), u = a(7890), p = a(42922), h = a(55809), m = a(52427), y = a(31966), b = a(36565), _ = a(2125), f = a(90467), x = a(92298), g = a(7770), k = a(39954), v = a.n(k);
  let j = ["start", "party", "date", "time", "review", "booked"], { spring: w, duration: N, ease: M, blur: $, stagger: A } = g.T, D = [...M.enter], T = [...M.standard], S = ({ visualDuration: e2, bounce: t2 }) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, z = S(w.morph), P = S({ visualDuration: 0.34, bounce: 0 }), C = S({ visualDuration: 0.52, bounce: 0 }), Y = S({ visualDuration: 0.45, bounce: 0 }), E = S(w.morph), L = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], F = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], R = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30"
  ], O = { party: "start", date: "party", time: "date", review: "time" }, B = () => true, I = () => new Promise((e2) => setTimeout(e2, 900)), W = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), X = (e2) => {
    let [t2, a2] = e2.split(":").map(Number);
    return 60 * (t2 || 0) + (a2 || 0);
  }, G = (e2, t2) => `${e2} ${t2}${1 === e2 ? "" : "s"}`, H = () => () => {
  }, K = (e2) => `${L[e2.weekday]}, ${F[e2.month]} ${e2.day}`, q = (e2) => `${L[e2.weekday].slice(0, 3)}, ${F[e2.month].slice(0, 3)} ${e2.day}`, J = (e2, t2) => {
    if (24 === t2) return e2;
    let [a2, i2] = e2.split(":").map(Number);
    return `${a2 % 12 || 12}:${String(i2 || 0).padStart(2, "0")} ${a2 < 12 ? "AM" : "PM"}`;
  }, U = {
    hidden: (e2) => ({
      opacity: 0,
      x: 16 * e2,
      scale: 0.95,
      filter: `blur(${$.soft}px)`
    }),
    shown: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        opacity: { duration: 0.22, ease: D, delay: 0.07 },
        filter: { duration: 0.26, ease: D, delay: 0.07 },
        x: { ...w.snappy, delay: 0.07 },
        scale: { ...w.snappy, delay: 0.07 }
      }
    },
    gone: (e2) => ({
      opacity: 0,
      x: -10 * e2,
      scale: 0.97,
      filter: `blur(${$.soft}px)`,
      transition: { duration: 0.12, ease: T }
    })
  }, Z = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.15 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  }, V = {
    hidden: { opacity: 0, y: 8, filter: `blur(${$.subtle}px)` },
    shown: (e2) => {
      let t2 = 0.13 + e2 * A.line;
      return {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          ...w.snappy,
          delay: t2,
          opacity: { duration: 0.22, ease: D, delay: t2 },
          filter: { duration: 0.22, ease: D, delay: t2 }
        }
      };
    }
  }, Q = {
    hidden: { opacity: 0, y: 8, scale: 0.92 },
    shown: (e2) => {
      let t2 = 0.07 + 0.05 + 0.016 * e2;
      return {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          ...w.snappy,
          delay: t2,
          opacity: { duration: 0.2, ease: D, delay: t2 }
        }
      };
    }
  }, ee = {
    hidden: { opacity: 0, scale: 0.82 },
    shown: {
      opacity: 1,
      scale: 1,
      transition: {
        ...w.snappy,
        delay: 0.17,
        opacity: { duration: 0.16, delay: 0.17 }
      }
    }
  }, et = {
    hidden: { scaleX: 0, opacity: 0 },
    shown: {
      scaleX: 1,
      opacity: 1,
      transition: {
        scaleX: { ...w.smooth, delay: 0.2 },
        opacity: { duration: 0.12, delay: 0.2 }
      }
    }
  };
  function ea({
    name: e2,
    className: t2,
    direction: a2,
    reduced: s2,
    onSize: o2,
    children: d2
  }) {
    let c2 = (0, n.useRef)(null), u2 = (0, r.tF)();
    return (0, n.useLayoutEffect)(() => {
      let t3 = c2.current;
      if (!t3 || !u2) return;
      let a3 = () => o2(e2, t3.offsetWidth, t3.offsetHeight);
      if (a3(), "u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(a3);
      return i2.observe(t3), () => i2.disconnect();
    }, [e2, o2, u2]), (0, i.jsx)(l.PY1.div, {
      ref: c2,
      className: [v().face, t2].filter(Boolean).join(" "),
      "data-face": e2,
      custom: a2,
      variants: s2 ? Z : U,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      inert: !u2 || void 0,
      children: d2
    });
  }
  function ei({
    label: e2,
    onClick: t2,
    tone: a2,
    size: n2,
    disabled: s2,
    focus: r2,
    reduced: o2,
    children: d2
  }) {
    return (0, i.jsx)(l.PY1.button, {
      type: "button",
      className: v().round,
      "data-tone": a2,
      "data-size": n2,
      "data-autofocus": r2 || void 0,
      "aria-label": e2,
      "aria-disabled": s2 || void 0,
      onClick: s2 ? void 0 : t2,
      whileTap: s2 ? void 0 : { scale: 0.88 },
      transition: o2 ? { duration: 0 } : w.snappy,
      children: d2
    });
  }
  function en({
    onClick: e2,
    disabled: t2,
    busy: a2,
    focus: n2,
    reduced: s2,
    children: r2
  }) {
    let o2 = t2 || a2;
    return (0, i.jsx)(l.PY1.button, {
      type: "button",
      className: v().primary,
      "data-autofocus": n2 || void 0,
      "aria-disabled": o2 || void 0,
      "aria-busy": a2 || void 0,
      onClick: o2 ? void 0 : e2,
      whileTap: o2 ? void 0 : { scale: 0.97 },
      transition: s2 ? { duration: 0 } : w.snappy,
      children: r2
    });
  }
  function es({ text: e2, reduced: t2, className: a2 }) {
    let n2 = t2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${$.soft}px)` };
    return (0, i.jsx)("span", {
      className: [v().swap, a2].filter(Boolean).join(" "),
      children: (0, i.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          l.PY1.span,
          {
            className: v().swapItem,
            initial: n2,
            animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
            exit: t2 ? { opacity: 0, transition: { duration: 0.1 } } : {
              opacity: 0,
              y: "-0.3em",
              filter: `blur(${$.subtle}px)`,
              transition: { duration: 0.14, ease: T }
            },
            transition: { duration: t2 ? 0.15 : 0.24, ease: D },
            children: e2
          },
          e2
        )
      })
    });
  }
  let er = {
    enter: (e2) => ({
      y: e2 > 0 ? "0.7em" : "-0.7em",
      opacity: 0,
      filter: `blur(${$.subtle}px)`
    }),
    rest: {
      y: "0em",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        y: w.snappy,
        opacity: { duration: N.fast, ease: D },
        filter: { duration: N.fast, ease: D }
      }
    },
    leave: (e2) => ({
      y: e2 > 0 ? "-0.7em" : "0.7em",
      opacity: 0,
      filter: `blur(${$.subtle}px)`,
      transition: {
        y: w.snappy,
        opacity: { duration: N.instant, ease: T },
        filter: { duration: N.instant }
      }
    })
  }, el = {
    enter: { opacity: 0 },
    rest: { opacity: 1, transition: { duration: N.instant } },
    leave: { opacity: 0, transition: { duration: 0.08 } }
  };
  function eo({ value: e2, reduced: t2 }) {
    let [a2, s2] = (0, n.useState)({ value: e2, direction: 1 });
    a2.value !== e2 && s2({ value: e2, direction: e2 >= a2.value ? 1 : -1 });
    let r2 = [...String(e2)];
    return (0, i.jsx)("span", {
      className: v().roll,
      children: (0, i.jsx)(o.N, {
        initial: false,
        children: r2.map(
          (e3, n2) => (0, i.jsxs)(
            l.PY1.span,
            {
              className: v().column,
              initial: { width: 0, opacity: 0 },
              animate: { width: "auto", opacity: 1 },
              exit: { width: 0, opacity: 0 },
              transition: t2 ? { duration: 0 } : { width: w.morph, opacity: { duration: N.fast } },
              children: [
                (0, i.jsx)("span", { className: v().sizer, children: "0" }),
                (0, i.jsx)(o.N, {
                  initial: false,
                  custom: a2.direction,
                  children: (0, i.jsx)(
                    l.PY1.span,
                    {
                      className: v().digit,
                      custom: a2.direction,
                      variants: t2 ? el : er,
                      initial: "enter",
                      animate: "rest",
                      exit: "leave",
                      children: e3
                    },
                    e3
                  )
                })
              ]
            },
            r2.length - 1 - n2
          )
        )
      })
    });
  }
  function ed({ reduced: e2 }) {
    return (0, i.jsxs)("span", {
      className: v().mark,
      "aria-hidden": "true",
      children: [
        (0, i.jsx)(l.PY1.span, {
          className: v().markDisc,
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: e2 ? { duration: 0 } : { ...C, delay: 0.07 }
        }),
        (0, i.jsx)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          children: (0, i.jsx)(l.PY1.path, {
            d: "M4 9.4l3.2 3.1L14 5.8",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { pathLength: 0, opacity: 0 },
            animate: { pathLength: 1, opacity: 1 },
            transition: e2 ? { duration: 0 } : {
              pathLength: { duration: 0.36, ease: D, delay: 0.26 },
              opacity: { duration: 0.01, delay: 0.26 }
            }
          })
        })
      ]
    });
  }
  function ec({
    days: e2,
    open: t2,
    index: a2,
    x: s2,
    reduced: r2,
    valueText: o2,
    onSubmit: c2
  }) {
    let u2 = e2.length - 1, p2 = (0, n.useRef)(a2), h2 = (0, n.useRef)(false), m2 = (0, n.useRef)(void 0), y2 = (0, n.useMemo)(() => ({ left: -(52 * u2), right: 0 }), [u2]);
    (0, n.useEffect)(() => () => clearTimeout(m2.current), []);
    let b2 = (e3, t3 = 0) => {
      let a3 = W(Math.round(e3), 0, u2);
      p2.current = a3, r2 ? s2.jump(-(52 * a3)) : (0, d.i)(s2, -(52 * a3), { ...Y, velocity: t3 });
    }, _2 = (a3) => e2.map(
      (e3, n2) => (0, i.jsxs)(
        "span",
        {
          className: v().cell,
          "data-index": a3 ? void 0 : n2,
          "data-closed": !t2[n2] || void 0,
          children: [
            (0, i.jsx)("span", {
              className: v().cellTop,
              children: 1 === e3.day ? F[e3.month].slice(0, 3) : L[e3.weekday].slice(0, 3)
            }),
            (0, i.jsx)("span", { className: v().cellDay, children: e3.day })
          ]
        },
        e3.iso
      )
    );
    return (0, i.jsx)("div", {
      className: v().slider,
      role: "slider",
      tabIndex: 0,
      "aria-label": "Date",
      "aria-valuemin": 0,
      "aria-valuemax": u2,
      "aria-valuenow": a2,
      "aria-valuetext": o2,
      "data-autofocus": true,
      onKeyDown: (e3) => {
        if ("Enter" === e3.key) {
          e3.preventDefault(), c2();
          return;
        }
        let t3 = {
          ArrowRight: 1,
          ArrowDown: 1,
          ArrowLeft: -1,
          ArrowUp: -1,
          PageDown: 7,
          PageUp: -7
        }, a3 = "Home" === e3.key ? 0 : "End" === e3.key ? u2 : e3.key in t3 ? p2.current + t3[e3.key] : null;
        null !== a3 && (e3.preventDefault(), b2(a3));
      },
      onWheel: (e3) => {
        Math.abs(e3.deltaX) <= Math.abs(e3.deltaY) || (s2.stop(), s2.set(W(s2.get() - e3.deltaX, -(52 * u2) - 26, 26)), clearTimeout(m2.current), m2.current = setTimeout(() => b2(-s2.get() / 52), 110));
      },
      children: (0, i.jsxs)("div", {
        className: v().track,
        children: [
          (0, i.jsx)(l.PY1.div, {
            className: v().strip,
            style: { x: s2 },
            drag: "x",
            dragConstraints: y2,
            dragElastic: 0.16,
            dragMomentum: false,
            onPointerDown: () => {
              h2.current = false;
            },
            onDragStart: () => {
              h2.current = true;
            },
            onDragEnd: (e3, t3) => b2(
              -(s2.get() + (r2 ? 0 : ((e4, t4 = 0.99) => e4 / 1e3 * t4 / (1 - t4))(
                t3.velocity.x
              ))) / 52,
              t3.velocity.x
            ),
            onClick: (e3) => {
              if (h2.current) return;
              let t3 = e3.target.closest("[data-index]");
              t3 && b2(Number(t3.dataset.index));
            },
            children: _2(false)
          }),
          (0, i.jsx)(l.PY1.div, {
            className: v().lens,
            "aria-hidden": "true",
            variants: r2 ? void 0 : ee,
            children: (0, i.jsx)(l.PY1.div, {
              className: v().strip,
              style: { x: s2 },
              children: _2(true)
            })
          })
        ]
      })
    });
  }
  function eu({
    times: e2,
    free: t2,
    value: a2,
    onChange: s2,
    reduced: r2,
    cycle: o2
  }) {
    let u2 = (0, n.useRef)(null), p2 = (0, c.d)(0), h2 = (0, c.d)(0), m2 = (0, c.d)(0), y2 = (0, c.d)(0), b2 = (0, n.useRef)(false), _2 = a2 ? e2.indexOf(a2) : -1, f2 = e2.findIndex((e3) => t2.includes(e3));
    return (0, n.useLayoutEffect)(() => {
      let e3 = u2.current;
      if (!e3 || _2 < 0) return;
      let t3 = (t4) => {
        let a4 = e3.querySelector(`[data-slot="${_2}"]`);
        if (!a4) return;
        let i3 = [a4.offsetLeft, a4.offsetTop, a4.offsetWidth, a4.offsetHeight];
        [p2, h2, m2, y2].forEach((e4, a5) => {
          t4 ? e4.jump(i3[a5]) : (0, d.i)(e4, i3[a5], E);
        });
      };
      t3(!b2.current || r2), b2.current = true;
      let a3 = e3.offsetWidth;
      if ("u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(() => {
        e3.offsetWidth !== a3 && (a3 = e3.offsetWidth, t3(true));
      });
      return i2.observe(e3), () => i2.disconnect();
    }, [y2, m2, p2, h2, _2, r2]), (0, i.jsxs)("div", {
      ref: u2,
      className: v().slots,
      role: "radiogroup",
      "aria-label": "Time",
      children: [
        (0, i.jsx)(l.PY1.span, {
          className: v().highlight,
          "aria-hidden": "true",
          "data-hidden": _2 < 0 || void 0,
          style: { x: p2, y: h2, width: m2, height: y2 },
          variants: r2 ? void 0 : ee
        }),
        e2.map((a3, n2) => {
          let d2 = t2.includes(a3), c2 = n2 === _2;
          return (0, i.jsx)(
            l.PY1.button,
            {
              type: "button",
              role: "radio",
              className: v().slot,
              "data-slot": n2,
              "data-autofocus": c2 || void 0,
              "aria-checked": c2,
              "aria-disabled": !d2 || void 0,
              tabIndex: c2 || _2 < 0 && n2 === f2 ? 0 : -1,
              custom: n2,
              variants: r2 ? void 0 : Q,
              whileTap: d2 ? { scale: 0.94 } : void 0,
              transition: r2 ? { duration: 0 } : w.snappy,
              onClick: () => {
                d2 && s2(a3);
              },
              onKeyDown: (a4) => ((a5, i2) => {
                let n3 = {
                  ArrowRight: 1,
                  ArrowLeft: -1,
                  ArrowDown: 4,
                  ArrowUp: -4
                }, r3 = -1;
                if (a5.key in n3) {
                  let s3 = n3[a5.key];
                  for (let a6 = i2 + s3; a6 >= 0 && a6 < e2.length; a6 += s3)
                    if (t2.includes(e2[a6])) {
                      r3 = a6;
                      break;
                    }
                } else if ("Home" === a5.key) r3 = f2;
                else if ("End" !== a5.key) return;
                else
                  for (let a6 = e2.length - 1; a6 >= 0; a6--)
                    if (t2.includes(e2[a6])) {
                      r3 = a6;
                      break;
                    }
                a5.preventDefault(), r3 < 0 || (s2(e2[r3]), u2.current?.querySelector(`[data-slot="${r3}"]`)?.focus());
              })(a4, n2),
              children: J(a3, o2)
            },
            a3
          );
        })
      ]
    });
  }
  function ep({
    venue: e2,
    venueDetail: t2,
    startDate: a2,
    days: r2 = 21,
    times: g2 = R,
    isAvailable: k2 = B,
    preferredTime: M2 = "19:30",
    minPartySize: $2 = 1,
    maxPartySize: A2 = 12,
    defaultPartySize: D2 = 2,
    onConfirm: S2 = I,
    onStepChange: Y2,
    hourCycle: E2 = 12,
    label: L2 = "Book a table",
    className: F2
  }) {
    let U2, Z2 = (U2 = (0, n.useSyncExternalStore)(
      H,
      () => true,
      () => false
    ), !!(0, s.I)() && U2), Q2 = (0, n.useRef)(null), ee2 = (0, n.useRef)(false), [er2, el2] = (0, n.useState)("start"), [eh2, em2] = (0, n.useState)(1), [ey2, eb2] = (0, n.useState)(() => W(D2, $2, A2)), [e_2, ef2] = (0, n.useState)(null), [ex, eg] = (0, n.useState)("idle"), [ek, ev] = (0, n.useState)(""), ej = (0, n.useMemo)(
      () => (function(e3, t3) {
        let [a3, i2, n2] = e3.split("-").map(Number), s2 = a3 || 2026, r3 = W((i2 || 1) - 1, 0, 11), l2 = W(n2 || 1, 1, 31);
        return Array.from({ length: t3 }, () => {
          var e4, t4, a4, i3, n3;
          let o2, d2 = {
            iso: `${s2}-${String(r3 + 1).padStart(2, "0")}-${String(l2).padStart(2, "0")}`,
            weekday: (e4 = s2, t4 = r3, a4 = l2, ((o2 = t4 < 2 ? e4 - 1 : e4) + Math.floor(o2 / 4) - Math.floor(o2 / 100) + Math.floor(o2 / 400) + [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4][t4] + a4) % 7),
            day: l2,
            month: r3
          };
          return ++l2 > (i3 = s2, n3 = r3, [
            31,
            i3 % 4 == 0 && i3 % 100 != 0 || i3 % 400 == 0 ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
          ][n3]) && (l2 = 1, ++r3 > 11 && (r3 = 0, s2++)), d2;
        });
      })(a2, Math.max(1, r2)),
      [a2, r2]
    ), ew = (0, n.useMemo)(
      () => ej.map((e3) => g2.some((t3) => k2(e3.iso, t3, ey2))),
      [ej, g2, k2, ey2]
    ), [eN, eM] = (0, n.useState)(() => Math.max(0, ew.indexOf(true))), e$ = (0, c.d)(-(52 * eN));
    (0, u.L)(e$, "change", (e3) => eM(W(Math.round(-e3 / 52), 0, ej.length - 1)));
    let eA = ej[Math.min(eN, ej.length - 1)], eD = g2.filter((e3) => k2(eA.iso, e3, ey2)), eT = e_2 && eD.includes(e_2) ? e_2 : (function(e3, t3) {
      let a3 = null, i2 = 1 / 0;
      for (let n2 of e3) {
        let e4 = Math.abs(X(n2) - X(t3));
        e4 < i2 && (i2 = e4, a3 = n2);
      }
      return a3;
    })(eD, e_2 ?? M2), eS = (0, c.d)(0), ez = (0, c.d)(0), [eP, eC] = (0, n.useState)(false), eY = (0, n.useRef)({ width: 0, height: 0 }), eE = (0, n.useRef)(Z2), eL = (0, c.d)(0);
    (0, n.useEffect)(() => {
      eE.current = Z2, eL.set(+!Z2);
    }, [eL, Z2]);
    let eF = (0, p.V)(eS), eR = (0, p.V)(ez), eO = (0, h.G)(
      [eR, eL],
      ([e3, t3]) => 1 - t3 * Math.min(0.035, Math.abs(e3) / 45e3)
    ), eB = (0, h.G)(
      [eF, eL],
      ([e3, t3]) => 1 - t3 * Math.min(0.035, Math.abs(e3) / 45e3)
    ), eI = (0, n.useCallback)(
      (e3, t3, a3) => {
        let i2 = eY.current;
        if (i2.width === t3 && i2.height === a3) return;
        if (eY.current = { width: t3, height: a3 }, !i2.width || eE.current) {
          eS.jump(t3), ez.jump(a3), eC(true);
          return;
        }
        let n2 = "booked" === e3 ? C : t3 * a3 >= i2.width * i2.height ? z : P;
        (0, d.i)(eS, t3, n2), (0, d.i)(ez, a3, n2);
      },
      [ez, eS]
    ), eW = (0, c.d)(0);
    (0, n.useEffect)(() => {
      let e3 = "review" === er2, t3 = (0, d.i)(
        eW,
        10 * !!e3,
        Z2 ? { duration: 0 } : e3 ? { ...w.snappy, delay: 0.16 } : { duration: N.instant, ease: T }
      );
      return () => t3.stop();
    }, [eW, Z2, er2]);
    let eX = (0, h.G)(
      eW,
      (e3) => e3 < 0.5 ? "none" : ["left", "right"].map(
        (t3) => `radial-gradient(circle ${e3.toFixed(2)}px at ${100 * ("left" !== t3)}% calc(100% - var(--stub)), #0000 ${(e3 - 0.5).toFixed(2)}px, #000 ${e3.toFixed(2)}px) ${t3} / 51% 100% no-repeat`
      ).join(", ")
    );
    (0, n.useEffect)(() => {
      ee2.current && (ee2.current = false, Q2.current?.querySelector(`[data-face="${er2}"] [data-autofocus]`)?.focus({ preventScroll: true }));
    }, [er2]);
    let eG = (e3, t3) => {
      ee2.current = !!Q2.current?.contains(document.activeElement), em2(t3 ?? (Math.sign(j.indexOf(e3) - j.indexOf(er2)) || 1)), el2(e3), Y2?.(e3), "time" === e3 && ev(
        eD.length ? `${G(eD.length, "time")} free on ${K(eA)}` : `No tables free on ${K(eA)}`
      );
    }, eH = "sending" === ex ? void 0 : O[er2], eK = async () => {
      if ("sending" !== ex && eT) {
        eg("sending"), ev("Booking");
        try {
          await S2({ date: eA.iso, time: eT, partySize: ey2 }), eg("idle"), ev(`Booked a table for ${ey2} at ${e2} on ${K(eA)} at ${J(eT, E2)}`), eG("booked");
        } catch {
          eg("error"), ev("");
        }
      }
    }, eq = { direction: eh2, reduced: Z2, onSize: eI };
    return (0, i.jsxs)("div", {
      ref: Q2,
      className: [v().root, F2].filter(Boolean).join(" "),
      onKeyDown: (e3) => {
        "Escape" === e3.key && eH && (e3.preventDefault(), eG(eH));
      },
      children: [
        (0, i.jsxs)(l.PY1.div, {
          className: v().frame,
          style: eP ? { width: eS, height: ez, scaleX: eO, scaleY: eB } : { scaleX: eO, scaleY: eB },
          whileTap: "start" === er2 ? { scale: 0.96 } : void 0,
          transition: Z2 ? { duration: 0 } : w.snappy,
          children: [
            (0, i.jsx)("span", {
              className: v().shadow,
              "aria-hidden": "true"
            }),
            (0, i.jsx)(l.PY1.div, {
              className: v().shape,
              role: "group",
              "aria-label": `${L2} at ${e2}`,
              style: { mask: eX, WebkitMask: eX },
              children: (0, i.jsxs)(o.N, {
                initial: false,
                custom: eh2,
                children: [
                  "start" === er2 && (0, i.jsx)(
                    ea,
                    {
                      name: "start",
                      ...eq,
                      children: (0, i.jsxs)("button", {
                        type: "button",
                        className: v().start,
                        "data-autofocus": true,
                        onClick: () => eG("party"),
                        children: [
                          (0, i.jsx)(m.A, {
                            size: 18,
                            "aria-hidden": "true"
                          }),
                          L2
                        ]
                      })
                    },
                    "start"
                  ),
                  "party" === er2 && (0, i.jsxs)(
                    ea,
                    {
                      name: "party",
                      className: v().row,
                      ...eq,
                      children: [
                        (0, i.jsx)(ei, {
                          label: "Back",
                          onClick: () => eG("start"),
                          reduced: Z2,
                          children: (0, i.jsx)(y.A, {
                            size: 18,
                            "aria-hidden": "true"
                          })
                        }),
                        (0, i.jsxs)("div", {
                          className: v().stepper,
                          role: "group",
                          "aria-label": "Party size",
                          children: [
                            (0, i.jsx)(ei, {
                              label: "Fewer guests",
                              size: "sm",
                              disabled: ey2 <= $2,
                              onClick: () => eb2((e3) => W(e3 - 1, $2, A2)),
                              reduced: Z2,
                              children: (0, i.jsx)(b.A, {
                                size: 16,
                                "aria-hidden": "true"
                              })
                            }),
                            (0, i.jsxs)("output", {
                              className: v().count,
                              "aria-live": "polite",
                              children: [
                                (0, i.jsx)("span", {
                                  className: v().srOnly,
                                  children: G(ey2, "guest")
                                }),
                                (0, i.jsxs)("span", {
                                  className: v().countInk,
                                  "aria-hidden": "true",
                                  children: [
                                    (0, i.jsx)(eo, { value: ey2, reduced: Z2 }),
                                    (0, i.jsxs)("span", {
                                      className: v().countWord,
                                      children: [
                                        "guest",
                                        (0, i.jsx)(o.N, {
                                          initial: false,
                                          children: 1 !== ey2 && (0, i.jsx)(
                                            l.PY1.span,
                                            {
                                              className: v().plural,
                                              initial: {
                                                width: 0,
                                                opacity: 0
                                              },
                                              animate: {
                                                width: "auto",
                                                opacity: 1
                                              },
                                              exit: {
                                                width: 0,
                                                opacity: 0
                                              },
                                              transition: Z2 ? { duration: 0 } : {
                                                width: w.snappy,
                                                opacity: {
                                                  duration: N.fast
                                                }
                                              },
                                              children: "s"
                                            },
                                            "s"
                                          )
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, i.jsx)(ei, {
                              label: "More guests",
                              size: "sm",
                              focus: true,
                              disabled: ey2 >= A2,
                              onClick: () => eb2((e3) => W(e3 + 1, $2, A2)),
                              reduced: Z2,
                              children: (0, i.jsx)(_.A, {
                                size: 16,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        }),
                        (0, i.jsx)(ei, {
                          label: "Next, choose a date",
                          tone: "primary",
                          onClick: () => eG("date"),
                          reduced: Z2,
                          children: (0, i.jsx)(f.A, {
                            size: 18,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    },
                    "party"
                  ),
                  "date" === er2 && (0, i.jsxs)(
                    ea,
                    {
                      name: "date",
                      className: v().dateFace,
                      ...eq,
                      children: [
                        (0, i.jsxs)("div", {
                          className: v().bar,
                          children: [
                            (0, i.jsx)(ei, {
                              label: "Back to party size",
                              onClick: () => eG("party"),
                              reduced: Z2,
                              children: (0, i.jsx)(y.A, {
                                size: 18,
                                "aria-hidden": "true"
                              })
                            }),
                            (0, i.jsx)(es, {
                              className: v().title,
                              text: K(eA),
                              reduced: Z2
                            }),
                            (0, i.jsx)(ei, {
                              label: "Next, choose a time",
                              tone: "primary",
                              onClick: () => eG("time"),
                              reduced: Z2,
                              children: (0, i.jsx)(f.A, {
                                size: 18,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        }),
                        (0, i.jsx)(ec, {
                          days: ej,
                          open: ew,
                          index: eN,
                          x: e$,
                          reduced: Z2,
                          valueText: `${K(eA)}${ew[eN] ? "" : ", no tables free"}`,
                          onSubmit: () => eG("time")
                        })
                      ]
                    },
                    "date"
                  ),
                  "time" === er2 && (0, i.jsxs)(
                    ea,
                    {
                      name: "time",
                      className: v().panel,
                      ...eq,
                      children: [
                        (0, i.jsxs)("div", {
                          className: v().bar,
                          children: [
                            (0, i.jsx)(ei, {
                              label: "Back to dates",
                              focus: !eT,
                              onClick: () => eG("date"),
                              reduced: Z2,
                              children: (0, i.jsx)(y.A, {
                                size: 18,
                                "aria-hidden": "true"
                              })
                            }),
                            (0, i.jsxs)("span", {
                              className: v().heading,
                              children: [
                                (0, i.jsxs)("span", {
                                  className: v().headingTitle,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: v().headingLong,
                                      children: K(eA)
                                    }),
                                    (0, i.jsx)("span", {
                                      className: v().headingShort,
                                      children: q(eA)
                                    })
                                  ]
                                }),
                                (0, i.jsxs)("span", {
                                  className: v().headingSub,
                                  children: [
                                    G(ey2, "guest"),
                                    " \xB7 ",
                                    eD.length ? `${eD.length} free` : "No tables free"
                                  ]
                                })
                              ]
                            }),
                            (0, i.jsx)("span", { "aria-hidden": "true" })
                          ]
                        }),
                        (0, i.jsx)(eu, {
                          times: g2,
                          free: eD,
                          value: eT,
                          onChange: ef2,
                          reduced: Z2,
                          cycle: E2
                        }),
                        (0, i.jsx)(en, {
                          disabled: !eT,
                          onClick: () => eG("review"),
                          reduced: Z2,
                          children: eT ? "Review booking" : "Pick another day"
                        })
                      ]
                    },
                    "time"
                  ),
                  "review" === er2 && eT && (0, i.jsxs)(
                    ea,
                    {
                      name: "review",
                      className: v().ticket,
                      ...eq,
                      children: [
                        (0, i.jsxs)("div", {
                          className: v().ticketMain,
                          children: [
                            (0, i.jsxs)(l.PY1.span, {
                              className: v().venue,
                              custom: 0,
                              variants: Z2 ? void 0 : V,
                              children: [
                                (0, i.jsx)("span", {
                                  className: v().venueName,
                                  children: e2
                                }),
                                t2 && (0, i.jsx)("span", {
                                  className: v().venueDetail,
                                  children: t2
                                })
                              ]
                            }),
                            (0, i.jsxs)(l.PY1.dl, {
                              className: v().facts,
                              custom: 1,
                              variants: Z2 ? void 0 : V,
                              children: [
                                (0, i.jsxs)("div", {
                                  className: v().fact,
                                  children: [
                                    (0, i.jsx)("dt", { children: "Date" }),
                                    (0, i.jsx)("dd", { children: q(eA) })
                                  ]
                                }),
                                (0, i.jsxs)("div", {
                                  className: v().fact,
                                  children: [
                                    (0, i.jsx)("dt", { children: "Time" }),
                                    (0, i.jsx)("dd", { children: J(eT, E2) })
                                  ]
                                }),
                                (0, i.jsxs)("div", {
                                  className: v().fact,
                                  children: [
                                    (0, i.jsx)("dt", { children: "Guests" }),
                                    (0, i.jsx)("dd", { children: ey2 })
                                  ]
                                })
                              ]
                            }),
                            "error" === ex && (0, i.jsx)("p", {
                              className: v().error,
                              role: "alert",
                              children: "This table couldn\u2019t be booked. Try again."
                            })
                          ]
                        }),
                        (0, i.jsxs)("div", {
                          className: v().stub,
                          children: [
                            (0, i.jsx)(l.PY1.span, {
                              className: v().perforation,
                              "aria-hidden": "true",
                              variants: Z2 ? void 0 : et
                            }),
                            (0, i.jsx)(ei, {
                              label: "Change time",
                              disabled: "sending" === ex,
                              onClick: () => eG("time"),
                              reduced: Z2,
                              children: (0, i.jsx)(y.A, {
                                size: 18,
                                "aria-hidden": "true"
                              })
                            }),
                            (0, i.jsx)(en, {
                              focus: true,
                              busy: "sending" === ex,
                              onClick: eK,
                              reduced: Z2,
                              children: (0, i.jsx)(es, {
                                text: "sending" === ex ? "Booking\u2026" : "error" === ex ? "Try again" : "Confirm booking",
                                reduced: Z2
                              })
                            })
                          ]
                        })
                      ]
                    },
                    "review"
                  ),
                  "booked" === er2 && eT && (0, i.jsxs)(
                    ea,
                    {
                      name: "booked",
                      className: v().booked,
                      ...eq,
                      children: [
                        (0, i.jsx)(ed, { reduced: Z2 }),
                        (0, i.jsxs)(l.PY1.span, {
                          className: v().bookedText,
                          custom: 1,
                          variants: Z2 ? void 0 : V,
                          children: [
                            (0, i.jsxs)("span", {
                              className: v().bookedTitle,
                              children: ["Table for ", ey2, " booked"]
                            }),
                            (0, i.jsxs)("span", {
                              className: v().bookedDetail,
                              children: [q(eA), " at ", J(eT, E2)]
                            })
                          ]
                        }),
                        (0, i.jsx)(ei, {
                          label: "Book another table",
                          size: "sm",
                          focus: true,
                          onClick: () => {
                            ev(""), eG("start", -1);
                          },
                          reduced: Z2,
                          children: (0, i.jsx)(x.A, {
                            size: 16,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    },
                    "booked"
                  )
                ]
              })
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: v().srOnly,
          "aria-live": "polite",
          children: ek
        })
      ]
    });
  }
  var eh = a(55153), em = a.n(eh);
  let ey = /* @__PURE__ */ new Set(["2026-09-21", "2026-09-28", "2026-10-05"]), eb = (e2, t2, a2) => !ey.has(e2) && ((e3) => {
    let t3 = 2166136261;
    for (let a3 = 0; a3 < e3.length; a3++)
      t3 = Math.imul(t3 ^ e3.charCodeAt(a3), 16777619);
    return (t3 >>> 0) / 4294967296;
  })(`${e2} ${t2}`) > 0.14 + 0.045 * a2, e_ = () => new Promise((e2) => setTimeout(e2, 1100));
  function ef() {
    return (0, i.jsx)("div", {
      className: em().stage,
      children: (0, i.jsx)(ep, {
        venue: "Olea",
        venueDetail: "432 Octavia Street, San Francisco",
        startDate: "2026-09-21",
        isAvailable: eb,
        onConfirm: e_
      })
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(39954, ".root{--cell:52px;--stub:72px;--shape-radius:30px;position:relative;display:flex;width:100%;align-items:flex-end;justify-content:center;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body);pointer-events:none}\n.frame{position:relative;flex:none;pointer-events:auto;transform-origin:50% 100%;-webkit-tap-highlight-color:transparent}\n.shadow{position:absolute;inset:0;border-radius:var(--shape-radius);box-shadow:var(--shadow-floating);pointer-events:none}\n.shape{position:relative;display:grid;width:100%;height:100%;overflow:clip;border-radius:var(--shape-radius);background:color-mix(in oklab,var(--surface-raised) 80%,transparent);box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--border-strong) 42%,transparent);grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);-webkit-backdrop-filter:blur(24px) saturate(1.6);backdrop-filter:blur(24px) saturate(1.6)}\n.face{box-sizing:border-box;grid-area:1/1;align-self:end;justify-self:center}\n.face[inert]{pointer-events:none}\n.start{display:inline-flex;height:52px;box-sizing:border-box;align-items:center;gap:10px;padding:0 24px 0 20px;border:0;border-radius:var(--radius-pill);background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:var(--text-base);font-weight:500;white-space:nowrap}\n.start>svg{color:var(--accent)}\n@media (hover:hover) and (pointer:fine){.start:hover{background:color-mix(in oklab,var(--foreground) 5%,transparent)}\n.round{display:grid;width:44px;height:44px;flex:none;place-items:center;padding:0;border:0;border-radius:50%;background:var(--surface-muted);color:var(--foreground);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.round[data-tone=primary]{background:var(--accent);color:var(--accent-foreground)}\n.round[data-size=sm]{width:36px;height:36px;background:transparent}\n.round[aria-disabled=true]{cursor:default;opacity:.35}\n.round:not([aria-disabled=true]):hover{background:color-mix(in oklab,var(--surface-muted),var(--foreground) 7%)}\n.primary:not([aria-disabled=true]):hover,.round[data-tone=primary]:not([aria-disabled=true]):hover{background:var(--accent-strong)}\n@media (prefers-reduced-motion:reduce){.primary,.round,.slot,.slot[aria-checked=true]{transition:none}\n.primary{display:flex;height:44px;min-width:0;flex:1;align-items:center;justify-content:center;padding:0 18px;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);cursor:pointer;font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.primary[aria-disabled=true]:not([aria-busy=true]){background:var(--surface-muted);color:var(--text-muted);cursor:default}\n.primary[aria-busy=true]{cursor:progress}\n.swap{position:relative;display:inline-flex;justify-content:center}\n.swapItem{display:inline-block;white-space:nowrap}\n.row{display:flex;width:max-content;align-items:center;gap:6px;padding:8px}\n.stepper{display:flex;align-items:center;gap:2px;padding-inline:2px}\n.count{display:inline-flex;min-width:104px;justify-content:center}\n.countInk{display:inline-flex;align-items:baseline;gap:6px}\n.countWord{display:inline-flex;color:var(--text-secondary);font-size:var(--text-sm)}\n.plural{display:inline-block;overflow:hidden}\n.roll{display:inline-flex;font-size:var(--text-xl);font-variant-numeric:tabular-nums;font-weight:500;line-height:1.2}\n.column{position:relative;display:inline-block;clip-path:inset(-.6em 0)}\n.sizer{visibility:hidden}\n.digit{position:absolute;inset:0;display:flex;justify-content:center}\n.dateFace{display:grid;width:min(420px,calc(100cqw - 24px));grid-template-columns:minmax(0,1fr);gap:4px;padding:8px}\n.bar{display:grid;align-items:center;gap:8px;grid-template-columns:44px minmax(0,1fr) 44px}\n.title{min-width:0;font-size:var(--text-base);font-weight:500}\n.slider{min-width:0;border-radius:20px;outline:none}\n.track{position:relative;height:60px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent);mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent)}\n.strip{display:flex;width:max-content;padding-inline:calc(50% - var(--cell) / 2);cursor:grab;touch-action:pan-y;user-select:none;-webkit-user-select:none}\n.strip:active{cursor:grabbing}\n.cell{display:grid;width:var(--cell);height:60px;flex:none;align-content:center;justify-items:center;gap:2px}\n.cell[data-closed] .cellDay{color:var(--text-muted);text-decoration:line-through;text-decoration-thickness:1px}\n.cellTop{color:var(--text-muted);font-size:var(--text-xs);line-height:1}\n.lens .cellDay,.lens .cellTop{color:inherit}\n.lens .cellTop{opacity:.78}\n.cellDay{font-size:var(--text-lg);font-variant-numeric:tabular-nums;font-weight:500;line-height:1.15}\n.lens{position:absolute;inset:0;background:var(--accent);clip-path:inset(4px calc(50% - var(--cell) / 2) round 16px);color:var(--accent-foreground);pointer-events:none}\n.panel{display:grid;width:min(360px,calc(100cqw - 24px));gap:12px;padding:8px 10px 10px}\n.heading{display:grid;min-width:0;justify-items:center;text-align:center}\n.headingTitle{overflow:hidden;max-width:100%;font-size:var(--text-base);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.headingShort{display:none}\n.headingShort{display:inline}\n.headingSub{color:var(--text-secondary);font-size:var(--text-sm)}\n.slots{position:relative;display:grid;gap:6px;grid-template-columns:repeat(4,minmax(0,1fr))}\n@container (max-width: 380px){.slots{gap:4px}\n.highlight{position:absolute;top:0;left:0;border-radius:14px;background:var(--accent);pointer-events:none}\n.highlight[data-hidden]{visibility:hidden}\n.slot{position:relative;height:40px;padding:0;border:0;border-radius:14px;background:transparent;box-shadow:inset 0 0 0 1px var(--border);color:var(--foreground);cursor:pointer;font:inherit;font-size:var(--text-sm);font-variant-numeric:tabular-nums;font-weight:500;white-space:nowrap;transition:color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.slot[aria-checked=true]{box-shadow:inset 0 0 0 1px transparent;color:var(--accent-foreground);transition-delay:70ms}\n.slot[aria-disabled=true]{box-shadow:inset 0 0 0 1px var(--border-subtle);color:var(--text-muted);cursor:default;text-decoration:line-through;text-decoration-thickness:1px}\n.slot{font-size:var(--text-xs)}\n.slot:not([aria-disabled=true]):not([aria-checked=true]):hover{background:var(--surface-muted)}\n.ticket{display:grid;width:min(340px,calc(100cqw - 24px))}\n.ticketMain{display:grid;gap:16px;padding:20px 22px 18px}\n.venue{display:grid;gap:2px}\n.venueName{font-size:var(--text-xl);font-weight:500;line-height:1.2}\n.venueDetail{color:var(--text-secondary);font-size:var(--text-sm)}\n.facts{display:grid;gap:12px;margin:0;grid-template-columns:minmax(0,1.5fr) repeat(2,minmax(0,1fr))}\n.fact{display:grid;min-width:0;gap:2px}\n.fact dt{color:var(--text-muted);font-size:var(--text-xs)}\n.fact dd{margin:0;font-size:var(--text-base);font-variant-numeric:tabular-nums;font-weight:500;white-space:nowrap}\n.error{margin:0;color:var(--danger);font-size:var(--text-sm)}\n.stub{position:relative;display:flex;height:var(--stub);box-sizing:border-box;align-items:center;gap:8px;padding:0 14px}\n.perforation{position:absolute;top:-1px;right:16px;left:16px;border-top:2px dashed var(--border-strong)}\n.booked{display:flex;width:max-content;height:56px;align-items:center;gap:12px;padding:0 10px 0 12px}\n.mark{position:relative;display:grid;width:32px;height:32px;flex:none;place-items:center;color:var(--background)}\n.mark>svg{position:relative}\n.markDisc{position:absolute;inset:0;border-radius:50%;background:var(--success)}\n.bookedText{display:grid;line-height:1.25;white-space:nowrap}\n.bookedTitle{font-size:var(--text-sm);font-weight:500}\n.bookedDetail{color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.headingLong{display:none}", {"root":"root","frame":"frame","shadow":"shadow","shape":"shape","face":"face","start":"start","round":"round","primary":"primary","slot":"slot","swap":"swap","swapItem":"swapItem","row":"row","stepper":"stepper","count":"count","countInk":"countInk","countWord":"countWord","plural":"plural","roll":"roll","column":"column","sizer":"sizer","digit":"digit","dateFace":"dateFace","bar":"bar","title":"title","slider":"slider","track":"track","strip":"strip","cell":"cell","cellDay":"cellDay","cellTop":"cellTop","lens":"lens","panel":"panel","heading":"heading","headingTitle":"headingTitle","headingShort":"headingShort","headingSub":"headingSub","slots":"slots","highlight":"highlight","ticket":"ticket","ticketMain":"ticketMain","venue":"venue","venueName":"venueName","venueDetail":"venueDetail","facts":"facts","fact":"fact","error":"error","stub":"stub","perforation":"perforation","booked":"booked","mark":"mark","markDisc":"markDisc","bookedText":"bookedText","bookedTitle":"bookedTitle","bookedDetail":"bookedDetail","srOnly":"srOnly","headingLong":"headingLong"});
A.reg(42922, function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  r.d(e, { V: () => a });
  var i = r(27933), n = r(7890), s = r(28245);
  function a(t2) {
    let e2 = (0, s.d)(t2.getVelocity()), r2 = () => {
      let n2 = t2.getVelocity();
      e2.set(n2), n2 && i.Gt.update(r2);
    };
    return (0, n.L)(t2, "change", () => {
      i.Gt.update(r2, false, true);
    }), e2;
  }
}

__m(__module,__exports,__require);
});
A.reg(52427, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "calendar-days",
    size: 24,
    node: [
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }
      ],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "M8 13h.01", key: "1sbv64" }],
      ["path", { d: "M12 13h.01", key: "y0uutt" }],
      ["path", { d: "M16 13h.01", key: "wip0gl" }],
      ["path", { d: "M8 17h.01", key: "p3bg7i" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
      ["path", { d: "M16 17h.01", key: "ql8jdd" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(55153, ".stage{display:flex;width:min(100%,640px);height:25rem;box-sizing:border-box;margin-inline:auto;align-items:flex-end;justify-content:center;padding-bottom:var(--space-10)}\n.stage>*{flex:none}\n@media (max-width:560px){.stage{height:27rem;padding-bottom:var(--space-6)}", {"stage":"stage"});
A.cssFor("booking-pill", [39954,55153]);
A.item("booking-pill", {entry:27927, export:"BookingPillDemo", kind:"component", tier:"pro", unresolved:[]});
})();