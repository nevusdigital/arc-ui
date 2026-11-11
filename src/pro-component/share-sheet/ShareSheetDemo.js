function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ShareSheetDemo: () => em, default: () => eg });
  var s = a(95155), i = a(12115), n = a(75796), r = a(5736), o = a(22350), l = a(50626), c = a(47650), d = a(18310), h = a(79196), u = a(25354), p = a(44952), m = a(28245), g = a(92171), _ = a(80642), f = a(9005), y = a(51128), v = a(35484), x = a(99314), b = a(12363), w = a(64577), j = a(92571), k = a(49260), N = a(7770), L = a(6710), A = a.n(L), S = a(55665);
  let { blur: C } = N.T, P = [...N.T.ease.enter], R = [...N.T.ease.standard], E = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, z = E(0.48, 0), Y = E(0.38, 0), W = E(0.42, 0), B = E(0.5, 0), $ = E(0.26, 0), M = E(0.36, 0), T = E(0.44, 0), D = E(0.32, 0), O = { button: 0, panel: 1, sent: 2 }, F = () => () => {
  }, I = "(max-width: 520px)", V = (e2) => {
    let t2 = window.matchMedia(I);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function G({ reduced: e2 }) {
    let t2 = (0, h.tF)();
    return (0, s.jsx)(u.PY1.div, {
      className: A().scrim,
      "aria-hidden": "true",
      style: { pointerEvents: t2 ? "auto" : "none" },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: e2 ? 0.12 : N.T.duration.standard, ease: R }
    });
  }
  let Q = {
    hidden: (e2) => e2 ? { opacity: 0, x: 32 * e2, scale: 1, filter: `blur(${C.soft}px)` } : { opacity: 0, x: 0, scale: 0.94, filter: `blur(${C.soft}px)` },
    shown: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: W,
        scale: z,
        opacity: { duration: 0.22, ease: P, delay: 0.05 },
        filter: { duration: 0.24, ease: P, delay: 0.05 },
        delayChildren: 0.05,
        staggerChildren: N.T.stagger.item
      }
    },
    gone: (e2) => e2 ? {
      opacity: 0,
      x: -(32 * e2 * 0.6),
      filter: `blur(${C.soft}px)`,
      transition: {
        x: W,
        opacity: { duration: 0.12, ease: R },
        filter: { duration: 0.12, ease: R }
      }
    } : {
      opacity: 0,
      scale: 0.96,
      filter: `blur(${C.soft}px)`,
      transition: { duration: 0.12, ease: R }
    }
  }, q = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.16 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  }, J = {
    hidden: { opacity: 0, y: -6 },
    shown: {
      opacity: 1,
      y: 0,
      transition: { y: M, opacity: { duration: 0.22, ease: P } }
    }
  }, H = { hidden: { opacity: 1 }, shown: { opacity: 1 } }, K = { idle: "Copy", done: "Copied", error: "Retry" }, U = { duration: 0.16, ease: R }, Z = { duration: 0.1, ease: R }, X = { type: "spring", visualDuration: 0.22, bounce: 0 };
  function ee({
    id: e2,
    direction: t2,
    reduced: a2,
    onSize: n2,
    className: r2,
    children: o2
  }) {
    let l2 = (0, i.useRef)(null), c2 = (0, h.tF)();
    return (0, i.useLayoutEffect)(() => {
      let t3 = l2.current;
      if (!t3 || !c2) return;
      let a3 = () => n2(e2, { w: t3.offsetWidth, h: t3.offsetHeight });
      if (a3(), "u" < typeof ResizeObserver) return;
      let s2 = new ResizeObserver(a3);
      return s2.observe(t3), () => s2.disconnect();
    }, [e2, n2, c2]), (0, s.jsx)(u.PY1.div, {
      ref: l2,
      className: [A().face, r2].filter(Boolean).join(" "),
      "data-face": e2,
      custom: t2,
      variants: a2 ? q : Q,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      inert: !c2 || void 0,
      children: o2
    });
  }
  function et({
    person: e2,
    source: t2,
    reduced: a2,
    hidden: n2,
    onLand: r2,
    onRemove: o2,
    ref: l2
  }) {
    let c2 = (0, i.useRef)(null), d2 = (0, i.useRef)(false), h2 = !!t2 && !a2;
    (0, i.useLayoutEffect)(() => {
      let e3 = c2.current;
      if (d2.current || !e3 || !t2 || a2 || (d2.current = true, performance.now() - t2.t > 400))
        return;
      let s2 = e3.closest("[data-chips]");
      s2 && (s2.scrollLeft = s2.scrollWidth), r2(e3.getBoundingClientRect());
    }, [r2, a2, t2]);
    let p2 = e2.name.split(" ")[0];
    return (0, s.jsxs)(u.PY1.li, {
      ref: l2,
      layout: !a2 && "position",
      className: A().chip,
      transition: M,
      exit: {
        opacity: 0,
        scale: a2 ? 1 : 0.8,
        transition: { duration: 0.12, ease: R }
      },
      children: [
        (0, s.jsx)(u.PY1.span, {
          className: A().chipFill,
          "aria-hidden": "true",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.2, delay: 0.18 * !!h2 }
        }),
        (0, s.jsx)("span", {
          ref: c2,
          className: A().chipAvatar,
          "data-hidden": n2 || void 0,
          "aria-hidden": "true",
          children: (0, s.jsx)("img", {
            src: e2.avatar,
            alt: "",
            width: 40,
            height: 40
          })
        }),
        (0, s.jsx)(u.PY1.span, {
          className: A().chipName,
          initial: a2 ? { opacity: 0 } : { opacity: 0, x: -6 },
          animate: { opacity: 1, x: 0 },
          transition: {
            x: M,
            opacity: { duration: 0.2, ease: P },
            delay: 0.2 * !!h2
          },
          children: p2
        }),
        (0, s.jsx)("button", {
          type: "button",
          className: A().chipRemove,
          "aria-label": `Remove ${e2.name}`,
          onClick: o2,
          children: (0, s.jsx)(f.A, {
            size: 12,
            strokeWidth: 2,
            "aria-hidden": "true"
          })
        })
      ]
    });
  }
  function ea(e2) {
    let t2 = e2.map((e3) => e3.name.split(" ")[0]);
    if (1 === t2.length) return e2[0].name;
    if (2 === t2.length) return `${t2[0]} and ${t2[1]}`;
    let a2 = t2.length - 2;
    return `${t2[0]}, ${t2[1]}, and ${a2} ${1 === a2 ? "other" : "others"}`;
  }
  function es({
    title: e2,
    link: t2,
    people: a2,
    channels: n2 = [],
    access: r2,
    defaultAccess: o2,
    onSend: l2,
    onChannel: h2,
    onCopy: N2,
    label: L2 = "Share",
    align: E2 = "end",
    sheetOnPhones: W2 = true,
    className: Q2
  }) {
    let q2, en2, er2 = (q2 = (0, i.useSyncExternalStore)(
      F,
      () => true,
      () => false
    ), !!(0, d.I)() && q2), eo2 = (en2 = (0, i.useSyncExternalStore)(
      V,
      () => window.matchMedia(I).matches,
      () => false
    ), W2 && en2), el2 = (0, i.useRef)(null), ec2 = (0, p.m)(), ed2 = (0, i.useId)(), eh2 = (0, i.useRef)(null), eu2 = (0, i.useRef)(null), ep2 = (0, i.useRef)(null), em2 = (0, i.useRef)(null), eg2 = (0, i.useRef)(null), [e_, ef] = (0, i.useState)("button"), [ey, ev] = (0, i.useState)(0), [ex, eb] = (0, i.useState)([]), [ew, ej] = (0, i.useState)({}), [ek, eN] = (0, i.useState)([]), eL = (0, i.useRef)(null), [eA, eS] = (0, i.useState)(o2 ?? r2[0]?.value ?? ""), [eC, eP] = (0, i.useState)(false), [eR, eE] = (0, i.useState)("idle"), ez = "done" === eR || "error" === eR ? eR : "idle", eY = (0, i.useRef)({}), [eW, eB] = (0, i.useState)({});
    (0, i.useLayoutEffect)(() => {
      let e10 = Object.values(eY.current).filter((e11) => !!e11);
      if (!e10.length) return;
      let t3 = () => eB(
        Object.fromEntries(
          Object.entries(eY.current).map(([e11, t4]) => [
            e11,
            t4?.offsetWidth ?? 0
          ])
        )
      );
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return e10.forEach((e11) => a3.observe(e11)), () => a3.disconnect();
    }, [e_]);
    let e$ = (0, m.d)("auto"), eM = (0, i.useRef)(false), eT = eW[ez];
    (0, i.useLayoutEffect)(() => {
      if (!eT) {
        eM.current = false;
        return;
      }
      if (!eM.current || er2) {
        eM.current = true, e$.jump(eT);
        return;
      }
      let e10 = (0, g.i)(e$, eT, X);
      return () => e10.stop();
    }, [eT, er2, e$]);
    let [eD, eO] = (0, i.useState)({}), [eF, eI] = (0, i.useState)(false), [eV, eG] = (0, i.useState)(null), [eQ, eq] = (0, i.useState)(false), [eJ, eH] = (0, i.useState)({ id: 0, text: "" }), eK = (e10) => eH((t3) => ({ id: t3.id + 1, text: e10 })), eU = ex.map((e10) => a2.find((t3) => t3.id === e10)).filter((e10) => !!e10), eZ = r2.find((e10) => e10.value === eA) ?? r2[0], eX = (0, m.d)("100%"), e0 = (0, m.d)("100%"), e1 = (0, m.d)(9999), e22 = (0, m.d)("auto"), e5 = (0, i.useRef)(/* @__PURE__ */ new Map()), e6 = (0, i.useRef)({
      view: "button",
      reduced: false,
      measured: false,
      settled: true,
      last: { w: 0, h: 0 },
      run: {},
      sheet: false,
      sheetShown: false
    }), e8 = (0, i.useCallback)(
      (e10) => {
        let t3 = e6.current;
        if (t3.sheet) {
          let a4 = e5.current.get("button");
          if (a4?.w && (eX.jump(a4.w), e0.jump(a4.h), e1.jump(a4.h / 2)), "button" === t3.view) {
            t3.sheetShown = false;
            return;
          }
          let s3 = e5.current.get(t3.view);
          if (!s3?.h) return;
          if (!t3.sheetShown || t3.reduced || !e10 && t3.settled) {
            e22.jump(s3.h), t3.sheetShown = true;
            return;
          }
          let i3 = {};
          t3.run = i3, t3.settled = false, (0, g.i)(e22, s3.h, M).then(() => {
            t3.run === i3 && (t3.settled = true);
          });
          return;
        }
        let a3 = e5.current.get(t3.view);
        if (!a3 || !a3.w) return;
        let s2 = "button" === t3.view ? a3.h / 2 : "sent" === t3.view ? 26 : 28, i2 = t3.last;
        if (!e10 && 0.5 > Math.abs(i2.w - a3.w) && 0.5 > Math.abs(i2.h - a3.h))
          return;
        if (t3.last = a3, !t3.measured || t3.reduced || !e10 && t3.settled) {
          eX.jump(a3.w), e0.jump(a3.h), e1.jump(s2), t3.measured = true;
          return;
        }
        let n3 = a3.w * a3.h >= i2.w * i2.h ? z : Y, r3 = {};
        t3.run = r3, t3.settled = false, Promise.all([
          (0, g.i)(eX, a3.w, n3),
          (0, g.i)(e0, a3.h, n3),
          (0, g.i)(e1, s2, n3)
        ]).then(() => {
          t3.run === r3 && (t3.settled = true);
        });
      },
      [e0, e1, e22, eX]
    ), e7 = (0, i.useCallback)(
      (e10, t3) => {
        e5.current.set(e10, t3), e10 === e6.current.view && e8(false);
      },
      [e8]
    );
    (0, i.useLayoutEffect)(() => {
      e6.current.reduced = er2;
    }, [er2]), (0, i.useLayoutEffect)(() => {
      let e10 = e6.current;
      e10.sheet !== eo2 && (Object.assign(e10, {
        sheet: eo2,
        measured: false,
        settled: true,
        sheetShown: false,
        last: { w: 0, h: 0 }
      }), e8(false));
    }, [e8, eo2]), (0, i.useLayoutEffect)(() => {
      e6.current.view !== e_ && (e6.current.view = e_, e8(true));
    }, [e8, e_]);
    let e4 = (0, i.useRef)(null);
    (0, i.useLayoutEffect)(() => {
      let e10 = e4.current;
      if (e10) {
        if (e4.current = null, "option" === e10)
          return void (el2.current ?? eh2.current)?.querySelector("[role='option'][aria-selected='true']")?.focus({ preventScroll: true });
        ({ button: eu2, copy: ep2, done: eg2, access: em2 })[e10].current?.focus({
          preventScroll: true
        });
      }
    }, [e_, eC]);
    let e3 = (e10) => {
      ev(O[e_] >= 1 && O[e10] >= 1 ? Math.sign(O[e10] - O[e_]) : 0), ef(e10);
    }, e9 = (0, i.useCallback)(
      (e10 = true) => {
        let t3 = document.activeElement;
        e10 && (eh2.current?.contains(t3) || el2.current?.contains(t3)) && (e4.current = "button"), "sent" === e_ && (eb([]), ej({})), ev(0), eP(false), eq(false), ef("button");
      },
      [e_]
    ), te = "button" !== e_;
    (0, i.useEffect)(() => {
      if (!te) return;
      let e10 = (e11) => {
        let t3 = e11.target;
        eh2.current?.contains(t3) || el2.current?.contains(t3) || e9(false);
      };
      return document.addEventListener("pointerdown", e10), () => document.removeEventListener("pointerdown", e10);
    }, [e9, te]);
    let tt = eo2 && te;
    (0, i.useEffect)(() => {
      if (!tt) return;
      let e10 = document.documentElement, t3 = e10.style.overflow;
      return e10.style.overflow = "hidden", () => {
        e10.style.overflow = t3;
      };
    }, [tt]);
    let ta = (0, i.useRef)(0);
    (0, i.useEffect)(() => () => window.clearTimeout(ta.current), []);
    let ts = async () => {
      window.clearTimeout(ta.current);
      try {
        await (0, S.a)(t2), eE("done"), eK("Link copied"), N2?.(eA);
      } catch {
        eE("error"), eK("Couldn\u2019t copy the link");
      }
      ta.current = window.setTimeout(() => eE("idle"), 1800);
    }, ti = async (e10) => {
      if ("busy" === eD[e10.id]) return;
      eO((t4) => ({ ...t4, [e10.id]: "busy" }));
      let t3 = "done";
      try {
        await h2?.(e10.id);
      } catch {
        t3 = "error";
      }
      eO((a3) => ({ ...a3, [e10.id]: t3 })), eK("done" === t3 ? `${e10.label}: ${e10.doneLabel}` : `${e10.label} failed`), window.setTimeout(
        () => eO((a3) => a3[e10.id] === t3 ? { ...a3, [e10.id]: "idle" } : a3),
        2e3
      );
    }, tn = (e10, t3) => {
      if (eG(null), eq(false), ex.includes(e10.id)) {
        eb((t4) => t4.filter((t5) => t5 !== e10.id)), eK(`${e10.name} removed`);
        return;
      }
      let a3 = t3?.getBoundingClientRect();
      a3 && ej((t4) => ({
        ...t4,
        [e10.id]: {
          x: a3.left,
          y: a3.top,
          w: a3.width,
          h: a3.height,
          t: performance.now()
        }
      })), eb((t4) => [...t4, e10.id]), eK(`${e10.name} added`);
    }, tr = (0, m.d)(0), to = (0, i.useRef)(0), tl = async () => {
      if (eF) return;
      if (!eU.length) {
        eq(true), eK("Pick someone to send to"), er2 || (0, g.i)(tr, 0, {
          type: "spring",
          stiffness: 900,
          damping: 57,
          velocity: -260
        });
        return;
      }
      let e10 = ++to.current;
      eI(true), eG(null);
      try {
        await l2?.({ people: eU, access: eA });
      } catch {
        if (e10 !== to.current) return;
        eI(false), eG("Couldn\u2019t send. Try again.");
        return;
      }
      if (e10 === to.current) {
        let e11;
        eI(false), eP(false), (e11 = document.activeElement) && (eh2.current?.contains(e11) || el2.current?.contains(e11)) && (e4.current = "done"), eK(`Sent to ${ea(eU)}`), e3("sent");
      }
    }, tc = er2 ? H : J, td = {
      initial: er2 ? { opacity: 0 } : { opacity: 0, y: "0.6em", filter: `blur(${C.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: er2 ? { opacity: 0, transition: { duration: 0.08 } } : {
        opacity: 0,
        y: "-0.6em",
        filter: `blur(${C.subtle}px)`,
        transition: { duration: 0.12, ease: R }
      },
      transition: er2 ? { duration: 0.12 } : {
        y: $,
        opacity: { duration: 0.18, ease: P },
        filter: { duration: 0.18, ease: P }
      }
    }, th = K[ez], tu = (0, s.jsx)(
      ee,
      {
        id: "panel",
        direction: ey,
        reduced: er2,
        onSize: e7,
        className: A().panel,
        children: (0, s.jsxs)("div", {
          ref: eL,
          role: "dialog",
          "aria-labelledby": `${ed2}-title`,
          className: A().panelBody,
          children: [
            (0, s.jsx)("div", {
              className: A().flyers,
              "aria-hidden": "true",
              children: ek.map(
                (e10) => (0, s.jsx)(
                  u.PY1.img,
                  {
                    src: e10.src,
                    alt: "",
                    className: A().flyer,
                    style: {
                      left: e10.to.x,
                      top: e10.to.y,
                      width: e10.to.w,
                      height: e10.to.h
                    },
                    initial: {
                      x: e10.from.x + e10.from.w / 2 - (e10.to.x + e10.to.w / 2),
                      y: e10.from.y + e10.from.h / 2 - (e10.to.y + e10.to.h / 2),
                      scale: e10.from.w / e10.to.w
                    },
                    animate: { x: 0, y: 0, scale: 1 },
                    transition: B,
                    onAnimationComplete: () => eN((t3) => t3.filter((t4) => t4 !== e10))
                  },
                  `${e10.id}-${e10.key}`
                )
              )
            }),
            (0, s.jsxs)(u.PY1.div, {
              className: A().header,
              variants: tc,
              children: [
                (0, s.jsxs)("p", {
                  id: `${ed2}-title`,
                  className: A().title,
                  children: ["Share \u201C", e2, "\u201D"]
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  className: A().iconButton,
                  "aria-label": "Close",
                  onClick: () => e9(),
                  children: (0, s.jsx)(f.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsxs)(u.PY1.div, {
              className: A().linkGroup,
              variants: tc,
              children: [
                (0, s.jsxs)("div", {
                  className: A().linkRow,
                  children: [
                    (0, s.jsx)(y.A, {
                      className: A().muted,
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsx)("span", {
                      className: A().link,
                      title: t2,
                      children: t2
                    }),
                    (0, s.jsx)("button", {
                      ref: ep2,
                      type: "button",
                      className: A().copy,
                      "data-state": eR,
                      onClick: () => void ts(),
                      "aria-label": "idle" === eR ? "Copy link" : void 0,
                      children: (0, s.jsxs)(u.PY1.span, {
                        className: A().copyFace,
                        style: { width: e$ },
                        children: [
                          ["idle", "done", "error"].map(
                            (e10) => (0, s.jsx)(
                              "span",
                              {
                                ref: (t3) => {
                                  eY.current[e10] = t3;
                                },
                                className: A().sizer,
                                "aria-hidden": "true",
                                children: K[e10]
                              },
                              e10
                            )
                          ),
                          (0, s.jsx)(_.N, {
                            initial: false,
                            children: (0, s.jsxs)(
                              u.PY1.span,
                              {
                                className: A().copyLabel,
                                initial: er2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                                animate: { opacity: 1, y: 0 },
                                exit: {
                                  opacity: 0,
                                  transition: er2 ? { duration: 0 } : Z
                                },
                                transition: er2 ? { duration: 0 } : U,
                                children: [
                                  "done" === eR ? (0, s.jsx)("svg", {
                                    width: 14,
                                    height: 14,
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    "aria-hidden": "true",
                                    children: (0, s.jsx)(u.PY1.path, {
                                      d: "M4 12l5 5L20 6",
                                      initial: !er2 && { pathLength: 0 },
                                      animate: { pathLength: 1 },
                                      transition: {
                                        duration: 0.22,
                                        ease: R,
                                        delay: 0.04
                                      }
                                    })
                                  }) : "error" === eR ? (0, s.jsx)(v.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : (0, s.jsx)(x.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  th
                                ]
                              },
                              ez
                            )
                          })
                        ]
                      })
                    })
                  ]
                }),
                (0, s.jsxs)("button", {
                  ref: em2,
                  type: "button",
                  className: A().accessTrigger,
                  "aria-expanded": eC,
                  "aria-controls": `${ed2}-access`,
                  onClick: () => {
                    eC || (e4.current = "option"), eP(!eC);
                  },
                  children: [
                    (0, s.jsx)("span", {
                      className: A().accessIcon,
                      "aria-hidden": "true",
                      children: eZ?.icon
                    }),
                    (0, s.jsx)("span", {
                      className: A().accessText,
                      children: (0, s.jsx)(_.N, {
                        initial: false,
                        mode: "popLayout",
                        children: (0, s.jsxs)(
                          u.PY1.span,
                          {
                            className: A().accessLines,
                            ...td,
                            children: [
                              (0, s.jsx)("span", {
                                className: A().accessLabel,
                                children: eZ?.label
                              }),
                              (0, s.jsx)("span", {
                                className: A().accessDescription,
                                children: eZ?.description
                              })
                            ]
                          },
                          eZ?.value
                        )
                      })
                    }),
                    (0, s.jsx)(u.PY1.span, {
                      className: A().muted,
                      "aria-hidden": "true",
                      initial: false,
                      animate: { rotate: 180 * !!eC },
                      transition: er2 ? { duration: 0 } : $,
                      children: (0, s.jsx)(b.A, {
                        size: 16,
                        strokeWidth: 1.75
                      })
                    })
                  ]
                }),
                (0, s.jsx)(_.N, {
                  initial: false,
                  children: eC && (0, s.jsx)(
                    u.PY1.div,
                    {
                      id: `${ed2}-access`,
                      className: A().accessList,
                      role: "listbox",
                      "aria-label": "Who can open the link",
                      onKeyDown: (e10) => {
                        let t3 = {
                          ArrowDown: 1,
                          ArrowRight: 1,
                          ArrowUp: -1,
                          ArrowLeft: -1
                        };
                        if (!(e10.key in t3)) return;
                        e10.preventDefault();
                        let a3 = Array.from(
                          e10.currentTarget.querySelectorAll(
                            "[role='option']"
                          )
                        ), s2 = a3.indexOf(document.activeElement);
                        a3[(s2 + t3[e10.key] + a3.length) % a3.length]?.focus();
                      },
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: er2 ? { duration: 0, opacity: { duration: 0.12 } } : {
                        height: M,
                        opacity: { duration: 0.18, ease: P }
                      },
                      children: (0, s.jsx)("div", {
                        className: A().accessOptions,
                        children: r2.map(
                          (e10) => (0, s.jsxs)(
                            "button",
                            {
                              type: "button",
                              role: "option",
                              "aria-selected": e10.value === eA,
                              tabIndex: e10.value === eA ? 0 : -1,
                              className: A().accessOption,
                              onClick: () => {
                                eS(e10.value), e4.current = "access", eP(false);
                              },
                              children: [
                                (0, s.jsx)("span", {
                                  className: A().accessIcon,
                                  "aria-hidden": "true",
                                  children: e10.icon
                                }),
                                (0, s.jsxs)("span", {
                                  className: A().accessLines,
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: A().accessLabel,
                                      children: e10.label
                                    }),
                                    (0, s.jsx)("span", {
                                      className: A().accessDescription,
                                      children: e10.description
                                    })
                                  ]
                                }),
                                (0, s.jsx)(w.A, {
                                  className: A().accessCheck,
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              ]
                            },
                            e10.value
                          )
                        )
                      })
                    },
                    "access"
                  )
                })
              ]
            }),
            n2.length > 0 && (0, s.jsx)(u.PY1.div, {
              className: A().channels,
              variants: tc,
              role: "group",
              "aria-label": "Share to",
              children: n2.map((e10) => {
                let t3 = eD[e10.id] ?? "idle";
                return (0, s.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: A().channel,
                    "data-state": t3,
                    "aria-busy": "busy" === t3 || void 0,
                    onClick: () => void ti(e10),
                    children: [
                      (0, s.jsx)("span", {
                        className: A().channelIcon,
                        "aria-hidden": "true",
                        children: (0, s.jsx)(_.N, {
                          initial: false,
                          mode: "popLayout",
                          children: (0, s.jsx)(
                            u.PY1.span,
                            {
                              className: A().channelGlyph,
                              ...td,
                              children: "done" === t3 ? (0, s.jsx)(w.A, {
                                size: 16,
                                strokeWidth: 2
                              }) : "busy" === t3 ? (0, s.jsx)(j.A, {
                                className: A().spinner,
                                size: 16,
                                strokeWidth: 1.75
                              }) : e10.icon
                            },
                            "done" === t3 ? "done" : "busy" === t3 ? "busy" : "icon"
                          )
                        })
                      }),
                      (0, s.jsx)("span", {
                        className: A().channelLabel,
                        children: (0, s.jsx)(_.N, {
                          initial: false,
                          mode: "popLayout",
                          children: (0, s.jsx)(
                            u.PY1.span,
                            {
                              ...td,
                              children: "done" === t3 ? e10.doneLabel : "error" === t3 ? "Failed" : e10.label
                            },
                            "done" === t3 ? "done" : "error" === t3 ? "error" : "idle"
                          )
                        })
                      })
                    ]
                  },
                  e10.id
                );
              })
            }),
            (0, s.jsx)(u.PY1.div, {
              className: A().divider,
              variants: tc,
              "aria-hidden": "true"
            }),
            (0, s.jsxs)(u.PY1.div, {
              className: A().toBlock,
              variants: tc,
              style: { x: tr },
              children: [
                (0, s.jsx)("span", {
                  id: `${ed2}-to`,
                  className: A().sectionLabel,
                  children: "Send to"
                }),
                (0, s.jsxs)("div", {
                  className: A().toRow,
                  "data-empty": !eU.length || void 0,
                  children: [
                    (0, s.jsx)(_.N, {
                      children: !eU.length && (0, s.jsx)(
                        u.PY1.span,
                        {
                          className: A().toEmpty,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            transition: { duration: 0.08 }
                          },
                          "data-hint": eQ || void 0,
                          children: eQ ? "Pick someone to send to" : "Pick people below"
                        },
                        "empty"
                      )
                    }),
                    (0, s.jsx)("ul", {
                      className: A().chips,
                      "data-chips": "",
                      "aria-labelledby": `${ed2}-to`,
                      children: (0, s.jsx)(_.N, {
                        initial: false,
                        mode: "popLayout",
                        children: eU.map(
                          (e10) => (0, s.jsx)(
                            et,
                            {
                              person: e10,
                              source: ew[e10.id],
                              reduced: er2,
                              hidden: ek.some((t3) => t3.id === e10.id),
                              onLand: (t3) => ((e11, t4) => {
                                let a3 = ew[e11.id], s2 = eL.current?.getBoundingClientRect();
                                if (!a3 || !s2) return;
                                let i2 = {
                                  id: e11.id,
                                  key: a3.t,
                                  src: e11.avatar,
                                  from: {
                                    x: a3.x - s2.left,
                                    y: a3.y - s2.top,
                                    w: a3.w,
                                    h: a3.h,
                                    t: a3.t
                                  },
                                  to: {
                                    x: t4.left - s2.left,
                                    y: t4.top - s2.top,
                                    w: t4.width,
                                    h: t4.height,
                                    t: a3.t
                                  }
                                };
                                eN((t5) => [
                                  ...t5.filter((t6) => t6.id !== e11.id),
                                  i2
                                ]);
                              })(e10, t3),
                              onRemove: () => tn(e10, null)
                            },
                            e10.id
                          )
                        )
                      })
                    })
                  ]
                })
              ]
            }),
            (0, s.jsx)(u.PY1.div, {
              className: A().recents,
              variants: tc,
              role: "group",
              "aria-label": "Recent people",
              children: a2.map((e10) => {
                let t3 = ex.includes(e10.id);
                return (0, s.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: A().person,
                    "aria-pressed": t3,
                    "aria-label": e10.name,
                    "data-on": t3 || void 0,
                    onClick: (t4) => tn(e10, t4.currentTarget.querySelector("img")),
                    children: [
                      (0, s.jsxs)("span", {
                        className: A().personAvatar,
                        children: [
                          (0, s.jsx)("img", {
                            src: e10.avatar,
                            alt: "",
                            width: 80,
                            height: 80
                          }),
                          (0, s.jsx)("span", {
                            className: A().badge,
                            "aria-hidden": "true",
                            children: (0, s.jsx)(w.A, {
                              size: 10,
                              strokeWidth: 3
                            })
                          })
                        ]
                      }),
                      (0, s.jsx)("span", {
                        className: A().personName,
                        "aria-hidden": "true",
                        children: e10.name.split(" ")[0]
                      })
                    ]
                  },
                  e10.id
                );
              })
            }),
            (0, s.jsxs)(u.PY1.div, {
              className: A().footer,
              variants: tc,
              children: [
                (0, s.jsx)(_.N, {
                  initial: false,
                  children: eV && (0, s.jsxs)(
                    u.PY1.p,
                    {
                      className: A().error,
                      role: "alert",
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: er2 ? { duration: 0.1 } : M,
                      children: [
                        (0, s.jsx)(v.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        eV
                      ]
                    },
                    "error"
                  )
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  className: A().send,
                  "data-empty": !eU.length || void 0,
                  "aria-disabled": eF || void 0,
                  onClick: () => void tl(),
                  children: (0, s.jsx)(_.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, s.jsx)(
                      u.PY1.span,
                      {
                        className: A().sendLabel,
                        ...td,
                        children: eF ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(j.A, {
                              className: A().spinner,
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Sending"
                          ]
                        }) : eU.length ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            "Send to",
                            "\xA0",
                            (0, s.jsx)(ei, {
                              value: eU.length,
                              reduced: er2
                            }),
                            "\xA0",
                            1 === eU.length ? "person" : "people"
                          ]
                        }) : "Send"
                      },
                      eF ? "sending" : eU.length ? "ready" : "empty"
                    )
                  })
                })
              ]
            })
          ]
        })
      },
      "panel"
    ), tp = (0, s.jsx)(
      ee,
      {
        id: "sent",
        direction: ey,
        reduced: er2,
        onSize: e7,
        className: A().sent,
        children: (0, s.jsxs)("div", {
          role: "status",
          className: A().sentBody,
          children: [
            (0, s.jsxs)(u.PY1.div, {
              className: A().stack,
              variants: tc,
              "aria-hidden": "true",
              children: [
                eU.slice(0, 3).map(
                  (e10, t3) => (0, s.jsx)(
                    u.PY1.span,
                    {
                      className: A().stackAvatar,
                      style: { zIndex: 3 - t3 },
                      initial: !er2 && { x: -10 * t3, opacity: 0 },
                      animate: { x: 0, opacity: 1 },
                      transition: {
                        x: $,
                        opacity: { duration: 0.2 },
                        delay: 0.1 + 0.05 * t3
                      },
                      children: (0, s.jsx)("img", {
                        src: e10.avatar,
                        alt: "",
                        width: 64,
                        height: 64
                      })
                    },
                    e10.id
                  )
                ),
                eU.length > 3 && (0, s.jsxs)("span", {
                  className: `${A().stackAvatar} ${A().more}`,
                  children: ["+", eU.length - 3]
                }),
                (0, s.jsx)(u.PY1.span, {
                  className: A().sentCheck,
                  initial: !er2 && { scale: 0.4, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { ...$, delay: 0.22 },
                  children: (0, s.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    width: 14,
                    height: 14,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 3,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, s.jsx)(u.PY1.path, {
                      d: "M5.5 12.5l4.2 4.2 8.8-9.2",
                      initial: !er2 && { pathLength: 0 },
                      animate: { pathLength: 1 },
                      transition: { duration: 0.3, ease: P, delay: 0.3 }
                    })
                  })
                })
              ]
            }),
            (0, s.jsxs)(u.PY1.p, {
              className: A().sentTitle,
              variants: tc,
              children: ["Sent to ", eU.length ? ea(eU) : "your team"]
            }),
            (0, s.jsxs)(u.PY1.p, {
              className: A().sentMeta,
              variants: tc,
              children: [eZ?.label, " \xB7 ", eZ?.description.toLowerCase()]
            }),
            (0, s.jsxs)(u.PY1.div, {
              className: A().sentActions,
              variants: tc,
              children: [
                (0, s.jsx)("button", {
                  type: "button",
                  className: A().ghostButton,
                  onClick: () => {
                    e4.current = "copy", eK("Back to sharing. Nothing was sent."), e3("panel");
                  },
                  children: "Undo"
                }),
                (0, s.jsx)("button", {
                  ref: eg2,
                  type: "button",
                  className: A().doneButton,
                  onClick: () => e9(),
                  children: "Done"
                })
              ]
            })
          ]
        })
      },
      "sent"
    );
    return (0, s.jsxs)("div", {
      ref: eh2,
      className: [A().root, Q2].filter(Boolean).join(" "),
      "data-align": E2,
      "data-view": eo2 ? "button" : e_,
      onKeyDown: (e10) => {
        if ("Escape" === e10.key && !e10.defaultPrevented && "button" !== e_) {
          if (e10.preventDefault(), eC) {
            e4.current = "access", eP(false);
            return;
          }
          e9();
        }
      },
      children: [
        (0, s.jsxs)("span", {
          className: `${A().pill} ${A().ghost}`,
          "aria-hidden": "true",
          children: [(0, s.jsx)(k.A, { size: 16, strokeWidth: 1.75 }), L2]
        }),
        (0, s.jsx)(u.PY1.div, {
          className: A().shape,
          style: { width: eX, height: e0, borderRadius: e1 },
          children: (0, s.jsxs)(_.N, {
            initial: false,
            custom: ey,
            children: [
              ("button" === e_ || eo2) && (0, s.jsx)(
                ee,
                {
                  id: "button",
                  direction: ey,
                  reduced: er2,
                  onSize: e7,
                  children: (0, s.jsxs)("button", {
                    ref: eu2,
                    type: "button",
                    className: `${A().pill} ${A().trigger}`,
                    "aria-haspopup": "dialog",
                    "aria-expanded": eo2 && te,
                    onClick: () => {
                      "button" === e_ ? (e4.current = "copy", eG(null), e3("panel")) : e9();
                    },
                    children: [
                      (0, s.jsx)(k.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      L2
                    ]
                  })
                },
                "button"
              ),
              !eo2 && "panel" === e_ && tu,
              !eo2 && "sent" === e_ && tp
            ]
          })
        }),
        eo2 && (0, c.createPortal)(
          (0, s.jsxs)(_.N, {
            children: [
              te && (0, s.jsx)(G, { reduced: er2 }, "scrim"),
              te && (0, s.jsxs)(
                u.PY1.div,
                {
                  ref: el2,
                  className: A().sheet,
                  initial: er2 ? { opacity: 0 } : { y: "110%" },
                  animate: er2 ? { opacity: 1 } : { y: 0 },
                  exit: er2 ? { opacity: 0, transition: { duration: 0.12 } } : { y: "110%", transition: D },
                  transition: er2 ? { duration: 0.16 } : T,
                  drag: "y",
                  dragListener: false,
                  dragControls: ec2,
                  dragConstraints: { top: 0, bottom: 0 },
                  dragElastic: { top: 0.04, bottom: 1 },
                  dragMomentum: false,
                  onDragEnd: (e10, t3) => {
                    let a3 = el2.current?.offsetHeight ?? 400;
                    (t3.offset.y > Math.min(120, a3 / 3) || t3.velocity.y > 600) && e9();
                  },
                  children: [
                    (0, s.jsx)("div", {
                      className: A().grabber,
                      "aria-hidden": "true",
                      onPointerDown: (e10) => ec2.start(e10)
                    }),
                    (0, s.jsx)(u.PY1.div, {
                      className: A().sheetFaces,
                      style: { height: e22 },
                      children: (0, s.jsxs)(_.N, {
                        initial: false,
                        custom: ey,
                        children: [
                          "panel" === e_ && tu,
                          "sent" === e_ && tp
                        ]
                      })
                    })
                  ]
                },
                "sheet"
              )
            ]
          }),
          document.body
        ),
        (0, s.jsx)("span", {
          className: A().srOnly,
          role: "status",
          "aria-live": "polite",
          children: (0, s.jsx)("span", { children: eJ.text }, eJ.id)
        })
      ]
    });
  }
  function ei({ value: e2, reduced: t2 }) {
    let [a2, n2] = (0, i.useState)(e2), [r2, o2] = (0, i.useState)(1);
    return e2 !== a2 && (n2(e2), o2(e2 > a2 ? 1 : -1)), (0, s.jsx)("span", {
      className: A().count,
      children: (0, s.jsx)(_.N, {
        initial: false,
        mode: "popLayout",
        custom: r2,
        children: (0, s.jsx)(
          u.PY1.span,
          {
            className: A().countDigit,
            custom: r2,
            variants: {
              enter: (e3) => ({ y: t2 ? 0 : `${70 * e3}%`, opacity: 0 }),
              rest: { y: 0, opacity: 1 },
              exit: (e3) => ({ y: t2 ? 0 : `${-70 * e3}%`, opacity: 0 })
            },
            initial: "enter",
            animate: "rest",
            exit: "exit",
            transition: t2 ? { duration: 0.1 } : { y: $, opacity: { duration: 0.14 } },
            children: e2
          },
          e2
        )
      })
    });
  }
  var en = a(66558), er = a(67752), eo = a(54793), el = a.n(eo);
  let ec = { size: 16, strokeWidth: 1.75 }, ed = [
    "emma-collins",
    "marcus-johnson",
    "jasmine-brooks",
    "daniel-kim",
    "chloe-nguyen"
  ].map((e2) => {
    let t2 = (0, er.MV)(e2);
    return { id: e2, name: t2.name, avatar: t2.src };
  }), eh = [
    {
      id: "email",
      label: "Email",
      icon: (0, s.jsx)(n.A, { ...ec, className: el().mailMark }),
      doneLabel: "Opened"
    },
    {
      id: "slack",
      label: "Slack",
      icon: (0, s.jsx)(function() {
        return (0, s.jsxs)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            (0, s.jsx)("path", {
              fill: "#E01E5A",
              d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
            }),
            (0, s.jsx)("path", {
              fill: "#36C5F0",
              d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
            }),
            (0, s.jsx)("path", {
              fill: "#2EB67D",
              d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
            }),
            (0, s.jsx)("path", {
              fill: "#ECB22E",
              d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
            })
          ]
        });
      }, {}),
      doneLabel: "Posted"
    },
    {
      id: "x",
      label: "X",
      icon: (0, s.jsx)(function() {
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, s.jsx)("path", {
            d: "M17.2 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.3L4.8 21H1.7l7.3-8.3L1.4 3h6.4l4.4 5.8L17.2 3Zm-1.1 16.2h1.7L6.9 4.7H5.1l11 14.5Z"
          })
        });
      }, {}),
      doneLabel: "Drafted"
    }
  ], eu = [
    {
      value: "invited",
      label: "Only people invited",
      description: "Nobody else can open it",
      icon: (0, s.jsx)(r.A, { ...ec })
    },
    {
      value: "team",
      label: "Anyone at Northwind",
      description: "Can view and comment",
      icon: (0, s.jsx)(o.A, { ...ec })
    },
    {
      value: "public",
      label: "Anyone with the link",
      description: "Can view",
      icon: (0, s.jsx)(l.A, { ...ec })
    }
  ], ep = [
    { value: "succeed", label: "Send works" },
    { value: "fail", label: "Send fails" }
  ];
  function em() {
    let [e2, t2] = (0, i.useState)("succeed");
    return (0, s.jsxs)("div", {
      className: el().demo,
      children: [
        (0, s.jsx)("div", {
          className: el().stage,
          children: (0, s.jsx)(es, {
            title: "Q3 launch plan",
            link: "northwind.example/d/q3-launch-plan",
            people: ed,
            channels: eh,
            access: eu,
            defaultAccess: "team",
            align: "center",
            onSend: () => new Promise((t3, a2) => {
              window.setTimeout(
                () => "fail" === e2 ? a2(Error("Simulated failure")) : t3(),
                900
              );
            }),
            onChannel: () => new Promise((e3) => window.setTimeout(e3, 550))
          })
        }),
        (0, s.jsx)("div", {
          className: el().controls,
          children: (0, s.jsx)(en.A, {
            label: "Send result",
            options: ep,
            value: e2,
            onValueChange: t2
          })
        })
      ]
    });
  }
  let eg = em;
}

__m(__module,__exports,__require);
}