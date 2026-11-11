/* morph-nav (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(6035, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "map",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
          key: "169xi5"
        }
      ],
      ["path", { d: "M15 5.764v15", key: "1pn4in" }],
      ["path", { d: "M9 3.236v15", key: "1uimfh" }]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(12572, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "newspaper",
    size: 24,
    node: [
      ["path", { d: "M15 18h-5", key: "95g1m2" }],
      ["path", { d: "M18 14h-8", key: "sponae" }],
      [
        "path",
        {
          d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
          key: "39pd36"
        }
      ],
      [
        "rect",
        { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }
      ]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(21759, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "corner-down-left",
    size: 24,
    node: [
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
      ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(24067, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { MorphNavDemo: () => es, default: () => ei });
  var r = t(95155), n = t(12115), l = t(5772), s = t(18310), i = t(80642), o = t(25354), c = t(6035), u = t(36483), d = t(51452), h = t(51811);
  let p = {
    name: "workflow",
    size: 24,
    node: [
      [
        "rect",
        { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }
      ],
      ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
      [
        "rect",
        { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }
      ]
    ]
  };
  p.node;
  let m = (0, h.A)(p);
  var v = t(71011), f = t(50981), y = t(90467), x = t(92782), g = t(72809), k = t(57990), b = t(44825), _ = t(40557), j = t(12572), w = t(63769), A = t(49237), N = t(79196), S = t(28245), M = t(92171), z = t(12363), C = t(65377), P = t(9005), R = t(21759), $ = t(7770), E = t(47402), L = t.n(E);
  let { blur: I } = $.T, T = [...$.T.ease.enter], H = [...$.T.ease.standard], D = (e2, a2) => {
    let t2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: t2 * t2,
      damping: 2 * (1 - a2) * t2,
      mass: 1
    };
  }, q = D(0.44, 0.06), W = D(0.34, 0), B = D(0.3, 0.04), F = D(0.4, 0), O = "__menu", V = "__search", Y = () => () => {
  }, G = {
    hidden: (e2) => ({
      opacity: 0,
      x: 20 * e2,
      y: e2 ? 0 : -4,
      filter: `blur(${I.soft}px)`
    }),
    shown: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        x: F,
        y: F,
        opacity: { duration: 0.24, ease: T, delay: 0.04 },
        filter: { duration: 0.26, ease: T, delay: 0.04 }
      }
    },
    gone: (e2) => ({
      opacity: 0,
      x: -(20 * e2 * 0.5),
      y: e2 ? 0 : -2,
      filter: `blur(${I.soft}px)`,
      transition: {
        x: F,
        y: { duration: 0.14, ease: H },
        opacity: { duration: 0.12, ease: H },
        filter: { duration: 0.12, ease: H }
      }
    })
  }, K = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.16 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  };
  function U({
    id: e2,
    direction: a2,
    reduced: t2,
    onSize: l2,
    className: s2,
    children: i2,
    onClick: c2
  }) {
    let u2 = (0, n.useRef)(null), d2 = (0, N.tF)();
    return (0, n.useLayoutEffect)(() => {
      let a3 = u2.current;
      if (!a3 || !d2) return;
      let t3 = () => l2(e2, a3.offsetWidth, a3.offsetHeight);
      if (t3(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(t3);
      return r2.observe(a3), () => r2.disconnect();
    }, [e2, l2, d2]), (0, r.jsx)(o.PY1.div, {
      ref: u2,
      className: [L().face, s2].filter(Boolean).join(" "),
      "data-face": e2,
      custom: a2,
      variants: t2 ? K : G,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      inert: !d2 || void 0,
      onClick: c2,
      children: i2
    });
  }
  function Q({
    items: e2,
    brand: a2,
    action: t2,
    search: l2,
    current: c2,
    compact: u2 = false,
    collapseBelow: d2 = 720,
    onNavigate: h2,
    label: p2 = "Main",
    className: m2
  }) {
    let v2, f2 = (v2 = (0, n.useSyncExternalStore)(
      Y,
      () => true,
      () => false
    ), !!(0, s.I)() && v2), y2 = (0, n.useId)(), x2 = `${y2}-panel`, g2 = `${y2}-results`, k2 = (0, n.useRef)(null), b2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), j2 = (0, n.useRef)(null), w2 = (0, n.useRef)(null), A2 = (0, n.useRef)(null), N2 = (0, n.useRef)(null), [$2, E2] = (0, n.useState)("nav"), [D2, F2] = (0, n.useState)(null), [G2, K2] = (0, n.useState)(0), [X2, Z2] = (0, n.useState)(null), [J2, ee2] = (0, n.useState)(""), [ea2, et2] = (0, n.useState)(0), [er2, en2] = (0, n.useState)(false), el2 = (0, n.useMemo)(() => ({ value: O, label: "Menu" }), []), es2 = er2 ? [el2] : e2, ei2 = (e3) => e3.value === O || !!e3.links?.length || !!e3.feature, eo = "search" === $2 ? V : D2, ec = es2.findIndex((e3) => e3.value === D2), eu = ec >= 0 ? es2[ec] : null, ed = (0, n.useMemo)(() => {
      let e3 = l2?.items ?? [], a3 = J2.trim().toLowerCase();
      return a3 ? e3.map((e4) => {
        let t3;
        return {
          item: e4,
          rank: (t3 = e4.label.toLowerCase()).startsWith(a3) ? 3 : t3.includes(a3) ? 2 : +!!`${e4.description ?? ""} ${e4.group ?? ""} ${e4.keywords ?? ""}`.toLowerCase().includes(a3)
        };
      }).filter((e4) => e4.rank > 0).sort((e4, a4) => a4.rank - e4.rank).slice(0, 6).map((e4) => e4.item) : e3.slice(0, 5);
    }, [J2, l2]), eh = Math.min(ea2, Math.max(0, ed.length - 1)), ep = (0, S.d)(0), em = (0, S.d)(0), ev = (0, S.d)(28), ef = (0, n.useRef)({
      nav: { w: 0, h: 0 },
      search: { w: 0, h: 0 },
      panel: null
    }), ey = (0, n.useRef)({
      panelKey: null,
      mode: "nav",
      reduced: false,
      ready: false
    }), ex = (0, n.useRef)({ w: 0, h: 0, r: 0 }), eg = (0, n.useRef)({ settled: true }), ek = (0, n.useRef)(false), eb = (0, n.useRef)(false), e_ = (0, n.useCallback)(() => {
      eb.current = false;
      let e3 = ey.current, a3 = ef.current, t3 = "search" === e3.mode ? a3.search : a3.nav;
      if (!t3.w || !a3.nav.h) return;
      let r2 = e3.panelKey && a3.panel?.id === e3.panelKey ? a3.panel : null, n2 = {
        w: Math.max(t3.w, r2?.w ?? 0),
        h: a3.nav.h + (r2?.h ?? 0),
        r: r2 ? 22 : a3.nav.h / 2
      }, l3 = ex.current, s2 = Math.abs(n2.w - l3.w) > 0.5 || Math.abs(n2.h - l3.h) > 0.5 || Math.abs(n2.r - l3.r) > 0.5, i2 = ek.current;
      if (ek.current = false, !s2) return;
      if (ex.current = n2, !e3.ready || e3.reduced || !i2 && eg.current.settled) {
        ep.jump(n2.w), em.jump(n2.h), ev.jump(n2.r);
        let e4 = A2.current;
        e4 && (e4.style.width = `${n2.w}px`, e4.style.height = `${n2.h}px`, e4.style.borderRadius = `${n2.r}px`), ey.current.ready = true;
        return;
      }
      let o2 = n2.w * n2.h >= l3.w * l3.h ? q : W, c3 = { settled: false };
      eg.current = c3, Promise.all([
        (0, M.i)(ep, n2.w, o2),
        (0, M.i)(em, n2.h, o2),
        (0, M.i)(ev, n2.r, o2)
      ]).then(() => {
        c3.settled = true;
      });
    }, [em, ev, ep]), ej = (0, n.useCallback)(
      (e3 = false) => {
        e3 && (ek.current = true), eb.current || (eb.current = true, queueMicrotask(e_));
      },
      [e_]
    ), ew = (0, n.useCallback)(
      (e3, a3, t3) => {
        ef.current.panel = { id: e3, w: a3, h: t3 }, ej(true);
      },
      [ej]
    );
    (0, n.useLayoutEffect)(() => {
      ey.current.panelKey = eo, ey.current.mode = $2, ey.current.reduced = f2, ej(true);
    }, [$2, eo, f2, ej]), (0, n.useLayoutEffect)(() => {
      let e3 = b2.current, a3 = _2.current, t3 = k2.current;
      if (!e3 || !t3) return;
      let r2 = () => {
        ef.current.nav = { w: e3.offsetWidth, h: e3.offsetHeight }, a3 && (ef.current.search = { w: a3.offsetWidth, h: a3.offsetHeight }), en2(t3.offsetWidth < d2), ej();
      };
      if (r2(), "u" < typeof ResizeObserver) return;
      let n2 = new ResizeObserver(r2);
      return [e3, t3, a3].forEach((e4) => {
        e4 && n2.observe(e4);
      }), () => n2.disconnect();
    }, [d2, ej]);
    let eA = (0, S.d)(0), eN = (0, S.d)(0), eS = (0, S.d)(0), eM = X2 ?? (ec >= 0 ? ec : null);
    (0, n.useLayoutEffect)(() => {
      let e3 = j2.current, a3 = null === eM ? null : e3?.querySelector(`[data-index="${eM}"]`);
      if (!a3) return void (0, M.i)(eS, 0, { duration: 0.16 * !f2, ease: H });
      let t3 = [a3.offsetLeft, a3.offsetWidth];
      0.05 > eS.get() || f2 ? (eA.jump(t3[0]), eN.jump(t3[1])) : ((0, M.i)(eA, t3[0], B), (0, M.i)(eN, t3[1], B)), (0, M.i)(eS, 1, { duration: 0.14 * !f2, ease: T });
    }, [u2, eS, eN, eA, eM, er2, f2]);
    let ez = (0, n.useRef)({}), eC = () => {
      window.clearTimeout(ez.current.open), window.clearTimeout(ez.current.leave);
    };
    (0, n.useEffect)(
      () => () => {
        window.clearTimeout(ez.current.open), window.clearTimeout(ez.current.leave);
      },
      []
    );
    let eP = (0, n.useRef)(null), eR = (0, n.useRef)(0), e$ = null !== D2;
    (0, n.useEffect)(() => {
      e$ && (eR.current = performance.now());
    }, [e$]);
    let eE = (e3) => {
      if (e3 === D2) return;
      let a3 = es2.findIndex((e4) => e4.value === D2), t3 = es2.findIndex((a4) => a4.value === e3);
      K2(D2 && e3 && a3 >= 0 && t3 >= 0 ? Math.sign(t3 - a3) : 0), F2(e3);
    }, [eL, eI] = (0, n.useState)(`${u2}-${er2}`);
    eL !== `${u2}-${er2}` && (eI(`${u2}-${er2}`), F2(null), Z2(null));
    let eT = (0, n.useCallback)(
      (e3) => {
        eC(), "trigger" === e3 && D2 && (eP.current = `${y2}-trigger-${D2}`), "search-button" === e3 && (eP.current = "search-button"), F2(null), E2("nav"), Z2(null);
      },
      [D2, y2]
    ), eH = (e3) => {
      h2?.(e3), eT();
    };
    (0, n.useLayoutEffect)(() => {
      let e3 = eP.current;
      if (!e3) return;
      eP.current = null;
      let a3 = k2.current;
      a3 && ("input" === e3 ? w2.current?.focus({ preventScroll: true }) : "search-button" === e3 ? N2.current?.focus({ preventScroll: true }) : "panel" === e3 ? a3.querySelector(`[data-face="${eo}"] :is(a[href], button)`)?.focus({ preventScroll: true }) : document.getElementById(e3)?.focus({ preventScroll: true }));
    }, [$2, eo]);
    let eD = null !== D2 || "search" === $2;
    (0, n.useEffect)(() => {
      if (!eD) return;
      let e3 = (e4) => {
        k2.current?.contains(e4.target) || eT();
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [eT, eD]);
    let eq = (e3) => {
      "mouse" === e3.pointerType && (window.clearTimeout(ez.current.open), Z2(null), D2 && eE(null));
    }, eW = (e3) => {
      e3 && (eP.current = "search-button", eH({ label: e3.label, href: e3.href, section: e3.group }));
    }, eB = (e3, a3, t3 = false) => {
      let n2 = (0, r.jsxs)(r.Fragment, {
        children: [
          e3.icon && (0, r.jsx)("span", {
            className: L().linkIcon,
            "aria-hidden": "true",
            children: e3.icon
          }),
          (0, r.jsxs)("span", {
            className: L().linkText,
            children: [
              (0, r.jsx)("span", {
                className: L().linkLabel,
                children: e3.label
              }),
              !t3 && e3.description && (0, r.jsx)("span", {
                className: L().linkDescription,
                children: e3.description
              })
            ]
          })
        ]
      }), l3 = () => h2?.({ label: e3.label, href: e3.href, section: a3 });
      return (0, r.jsx)(
        "li",
        {
          children: e3.href ? (0, r.jsx)("a", {
            className: L().link,
            "data-dense": t3 || void 0,
            href: e3.href,
            onClick: l3,
            children: n2
          }) : (0, r.jsx)("button", {
            type: "button",
            className: L().link,
            "data-dense": t3 || void 0,
            onClick: l3,
            children: n2
          })
        },
        e3.label
      );
    };
    return e2.length ? (0, r.jsx)("nav", {
      ref: k2,
      className: [L().root, m2].filter(Boolean).join(" "),
      "aria-label": p2,
      "data-compact": u2 || void 0,
      "data-narrow": er2 || void 0,
      "data-open": eo ? "" : void 0,
      onKeyDown: (e3) => {
        if ("Escape" === e3.key && !e3.defaultPrevented) {
          if ("search" === $2) {
            e3.preventDefault(), eT("search-button");
            return;
          }
          D2 && (e3.preventDefault(), eT("trigger"));
        }
      },
      onBlur: (e3) => {
        let a3 = e3.relatedTarget;
        a3 && !e3.currentTarget.contains(a3) && D2 && (F2(null), Z2(null));
      },
      onPointerEnter: () => window.clearTimeout(ez.current.leave),
      onPointerLeave: (e3) => {
        "mouse" === e3.pointerType && (window.clearTimeout(ez.current.open), Z2(null), D2 && (ez.current.leave = window.setTimeout(() => eE(null), 180)));
      },
      children: (0, r.jsxs)(o.PY1.div, {
        ref: A2,
        className: L().surface,
        style: { width: ep, height: em, borderRadius: ev },
        children: [
          (0, r.jsxs)(o.PY1.div, {
            ref: b2,
            className: L().bar,
            inert: "search" === $2 || void 0,
            initial: false,
            animate: "nav" === $2 ? { opacity: 1, scale: 1, filter: "blur(0px)" } : f2 ? { opacity: 0 } : {
              opacity: 0,
              scale: 0.96,
              filter: `blur(${I.soft}px)`
            },
            transition: f2 ? { duration: 0.12 } : "nav" === $2 ? {
              opacity: { duration: 0.22, ease: T, delay: 0.06 },
              filter: { duration: 0.24, ease: T, delay: 0.06 },
              scale: q
            } : { duration: 0.14, ease: H },
            children: [
              a2 && (0, r.jsxs)("button", {
                type: "button",
                className: L().brand,
                onPointerEnter: eq,
                onClick: () => eH({ label: a2.name, href: a2.href }),
                children: [
                  (0, r.jsx)("span", {
                    className: L().brandMark,
                    "aria-hidden": "true",
                    children: a2.mark
                  }),
                  (0, r.jsx)("span", {
                    className: L().brandName,
                    children: (0, r.jsx)("span", { children: a2.name })
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                ref: j2,
                className: L().track,
                children: [
                  (0, r.jsx)(o.PY1.span, {
                    className: L().highlight,
                    style: { x: eA, width: eN, opacity: eS },
                    "aria-hidden": "true"
                  }),
                  es2.map((e3, a3) => {
                    let t3 = ei2(e3), n2 = D2 === e3.value, l3 = c2 === e3.value, s2 = {
                      id: `${y2}-trigger-${e3.value}`,
                      className: L().item,
                      "data-index": a3,
                      "data-current": l3 || void 0,
                      onPointerEnter: (e4) => ((e5, a4) => {
                        if ("mouse" !== a4) return;
                        window.clearTimeout(ez.current.leave), window.clearTimeout(ez.current.open), Z2(e5);
                        let t4 = es2[e5];
                        if (!ei2(t4)) {
                          D2 && eE(null);
                          return;
                        }
                        D2 ? eE(t4.value) : ez.current.open = window.setTimeout(
                          () => eE(t4.value),
                          60
                        );
                      })(a3, e4.pointerType),
                      onFocus: () => Z2(a3),
                      onBlur: () => Z2((e4) => e4 === a3 ? null : e4),
                      onKeyDown: (e4) => ((e5, a4) => {
                        let t4 = es2[a4], r2 = Array.from(
                          j2.current?.querySelectorAll(
                            "[data-index]"
                          ) ?? []
                        ), n3 = { ArrowRight: 1, ArrowLeft: -1 };
                        if (e5.key in n3 || "Home" === e5.key || "End" === e5.key) {
                          e5.preventDefault();
                          let t5 = "Home" === e5.key ? 0 : "End" === e5.key ? es2.length - 1 : (a4 + n3[e5.key] + es2.length) % es2.length;
                          r2[t5]?.focus(), Z2(t5), D2 && eE(ei2(es2[t5]) ? es2[t5].value : null);
                          return;
                        }
                        if (("ArrowDown" === e5.key || "Enter" === e5.key || " " === e5.key) && ei2(t4)) {
                          if (e5.preventDefault(), D2 === t4.value)
                            return void k2.current?.querySelector(
                              `[data-face="${t4.value}"] :is(a[href], button)`
                            )?.focus({ preventScroll: true });
                          eP.current = "panel", eE(t4.value);
                        }
                      })(e4, a3)
                    };
                    return !t3 && e3.href ? (0, r.jsx)(
                      "a",
                      {
                        ...s2,
                        href: e3.href,
                        "aria-current": l3 ? "page" : void 0,
                        onClick: () => eH({
                          label: e3.label,
                          href: e3.href,
                          section: e3.value
                        }),
                        children: (0, r.jsx)("span", {
                          className: L().itemLabel,
                          children: e3.label
                        })
                      },
                      e3.value
                    ) : (0, r.jsxs)(
                      "button",
                      {
                        type: "button",
                        ...s2,
                        "aria-current": l3 ? "page" : void 0,
                        "aria-expanded": t3 ? n2 : void 0,
                        "aria-controls": t3 && n2 ? x2 : void 0,
                        onClick: (a4) => ((e4, a5) => {
                          if (!ei2(e4))
                            return void eH({
                              label: e4.label,
                              href: e4.href,
                              section: e4.value
                            });
                          if (D2 === e4.value) {
                            a5 - eR.current > 400 && eE(null);
                            return;
                          }
                          eE(e4.value);
                        })(e3, a4.timeStamp),
                        children: [
                          (0, r.jsx)("span", {
                            className: L().itemLabel,
                            children: e3.label
                          }),
                          t3 && (0, r.jsx)(o.PY1.span, {
                            className: L().chevron,
                            "aria-hidden": "true",
                            initial: false,
                            animate: { rotate: 180 * !!n2 },
                            transition: f2 ? { duration: 0 } : B,
                            children: (0, r.jsx)(z.A, {
                              size: 14,
                              strokeWidth: 1.75
                            })
                          })
                        ]
                      },
                      e3.value
                    );
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: L().tools,
                onPointerEnter: eq,
                children: [
                  l2 && (0, r.jsx)("button", {
                    ref: N2,
                    type: "button",
                    className: L().tool,
                    "aria-label": "Search",
                    onClick: () => {
                      eC(), F2(null), Z2(null), ee2(""), et2(0), K2(0), eP.current = "input", E2("search");
                    },
                    children: (0, r.jsx)(C.A, {
                      size: 17,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  t2 && (t2.href ? (0, r.jsxs)("a", {
                    className: L().action,
                    href: t2.href,
                    onClick: t2.onClick,
                    children: [
                      t2.icon,
                      (0, r.jsx)("span", { children: t2.label })
                    ]
                  }) : (0, r.jsxs)("button", {
                    type: "button",
                    className: L().action,
                    onClick: t2.onClick,
                    children: [
                      t2.icon,
                      (0, r.jsx)("span", { children: t2.label })
                    ]
                  }))
                ]
              })
            ]
          }),
          l2 && (0, r.jsxs)(o.PY1.div, {
            ref: _2,
            className: L().searchBar,
            inert: "search" !== $2 || void 0,
            initial: false,
            animate: "search" === $2 ? { opacity: 1, scale: 1, filter: "blur(0px)" } : f2 ? { opacity: 0 } : {
              opacity: 0,
              scale: 0.97,
              filter: `blur(${I.soft}px)`
            },
            transition: f2 ? { duration: 0.12 } : "search" === $2 ? {
              opacity: { duration: 0.22, ease: T, delay: 0.07 },
              filter: { duration: 0.24, ease: T, delay: 0.07 },
              scale: q
            } : { duration: 0.12, ease: H },
            children: [
              (0, r.jsx)(C.A, {
                className: L().searchIcon,
                size: 18,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              (0, r.jsx)("input", {
                ref: w2,
                className: L().input,
                type: "text",
                role: "combobox",
                "aria-label": "Search",
                "aria-expanded": "search" === $2,
                "aria-controls": g2,
                "aria-autocomplete": "list",
                "aria-activedescendant": "search" === $2 && ed.length ? `${g2}-${eh}` : void 0,
                placeholder: l2.placeholder ?? "Search",
                value: J2,
                autoComplete: "off",
                spellCheck: false,
                onChange: (e3) => {
                  ee2(e3.target.value), et2(0);
                },
                onKeyDown: (e3) => {
                  "ArrowDown" === e3.key || "ArrowUp" === e3.key ? (e3.preventDefault(), ed.length && et2(
                    (eh + ("ArrowDown" === e3.key ? 1 : -1) + ed.length) % ed.length
                  )) : "Enter" === e3.key && (e3.preventDefault(), eW(ed[eh]));
                }
              }),
              (0, r.jsx)("button", {
                type: "button",
                className: L().tool,
                "aria-label": "Close search",
                onClick: () => eT("search-button"),
                children: (0, r.jsx)(P.A, {
                  size: 17,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            ]
          }),
          (0, r.jsxs)(i.N, {
            initial: false,
            custom: G2,
            children: [
              "search" === $2 && l2 && (0, r.jsxs)(
                U,
                {
                  id: V,
                  direction: 0,
                  reduced: f2,
                  onSize: ew,
                  className: L().resultsFace,
                  children: [
                    (0, r.jsx)("p", {
                      className: L().resultsHeading,
                      "aria-live": "polite",
                      children: J2.trim() ? ed.length ? `${ed.length} ${1 === ed.length ? "result" : "results"}` : `No results for \u201C${J2.trim()}\u201D` : "Suggested"
                    }),
                    (0, r.jsx)("ul", {
                      id: g2,
                      className: L().results,
                      role: "listbox",
                      "aria-label": "Search results",
                      children: ed.map(
                        (e3, a3) => (0, r.jsxs)(
                          "li",
                          {
                            id: `${g2}-${a3}`,
                            role: "option",
                            "aria-selected": a3 === eh,
                            className: L().result,
                            onPointerMove: () => {
                              a3 !== eh && et2(a3);
                            },
                            onPointerDown: (e4) => e4.preventDefault(),
                            onClick: () => eW(e3),
                            children: [
                              e3.icon && (0, r.jsx)("span", {
                                className: L().linkIcon,
                                "aria-hidden": "true",
                                children: e3.icon
                              }),
                              (0, r.jsxs)("span", {
                                className: L().linkText,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: L().linkLabel,
                                    children: e3.label
                                  }),
                                  e3.description && (0, r.jsx)("span", {
                                    className: L().linkDescription,
                                    children: e3.description
                                  })
                                ]
                              }),
                              e3.group && (0, r.jsx)("span", {
                                className: L().resultGroup,
                                children: e3.group
                              }),
                              (0, r.jsx)(R.A, {
                                className: L().resultEnter,
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            ]
                          },
                          `${e3.group}-${e3.label}`
                        )
                      )
                    })
                  ]
                },
                V
              ),
              "nav" === $2 && eu && ei2(eu) && (0, r.jsx)(
                U,
                {
                  id: eu.value,
                  direction: G2,
                  reduced: f2,
                  onSize: ew,
                  onClick: (e3) => {
                    let a3 = e3.target.closest("a, button");
                    a3 && e3.currentTarget.contains(a3) && D2 && (eP.current = e3.currentTarget.contains(
                      document.activeElement
                    ) ? `${y2}-trigger-${D2}` : null, F2(null), Z2(null));
                  },
                  children: (0, r.jsx)("div", {
                    id: x2,
                    role: "region",
                    "aria-labelledby": `${y2}-trigger-${eu.value}`,
                    onKeyDown: (e3) => {
                      if ("ArrowDown" !== e3.key && "ArrowUp" !== e3.key)
                        return;
                      let a3 = Array.from(
                        e3.currentTarget.querySelectorAll(
                          ":is(a[href], button)"
                        )
                      ), t3 = a3.indexOf(document.activeElement);
                      if (!(t3 < 0)) {
                        if (e3.preventDefault(), "ArrowUp" === e3.key && 0 === t3 && D2)
                          return void document.getElementById(`${y2}-trigger-${D2}`)?.focus();
                        a3[Math.min(
                          a3.length - 1,
                          Math.max(
                            0,
                            t3 + ("ArrowDown" === e3.key ? 1 : -1)
                          )
                        )]?.focus();
                      }
                    },
                    children: ((a3) => {
                      if (a3.value === O)
                        return (0, r.jsx)("div", {
                          className: L().menu,
                          children: e2.map(
                            (e3) => e3.links?.length ? (0, r.jsxs)(
                              "div",
                              {
                                className: L().menuGroup,
                                children: [
                                  (0, r.jsx)("p", {
                                    className: L().menuHeading,
                                    children: e3.label
                                  }),
                                  (0, r.jsx)("ul", {
                                    className: L().links,
                                    "data-columns": "1",
                                    children: e3.links.map(
                                      (a4) => eB(a4, e3.value, true)
                                    )
                                  })
                                ]
                              },
                              e3.value
                            ) : (0, r.jsx)(
                              "ul",
                              {
                                className: L().links,
                                "data-columns": "1",
                                children: eB(
                                  { label: e3.label, href: e3.href },
                                  e3.value,
                                  true
                                )
                              },
                              e3.value
                            )
                          )
                        });
                      let t3 = a3.columns ?? ((a3.links?.length ?? 0) > 3 ? 2 : 1);
                      return (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsxs)("div", {
                            className: L().panelBody,
                            children: [
                              !!a3.links?.length && (0, r.jsx)("ul", {
                                className: L().links,
                                "data-columns": t3,
                                children: a3.links.map(
                                  (e3) => eB(e3, a3.value)
                                )
                              }),
                              a3.feature && (0, r.jsx)("div", {
                                className: L().feature,
                                children: a3.feature
                              })
                            ]
                          }),
                          a3.footer && (0, r.jsx)("div", {
                            className: L().footer,
                            children: a3.footer
                          })
                        ]
                      });
                    })(eu)
                  })
                },
                eu.value
              )
            ]
          })
        ]
      })
    }) : null;
  }
  var X = t(66558), Z = t(58386), J = t.n(Z);
  let ee = { strokeWidth: 1.75 };
  function ea() {
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 26 26",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("rect", {
          x: ".5",
          y: ".5",
          width: "25",
          height: "25",
          rx: "8",
          fill: "currentColor"
        }),
        (0, r.jsx)("path", {
          d: "M8 17.5V8.5h9M8 13h6.5",
          stroke: "var(--background)",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      ]
    });
  }
  let et = [
    {
      label: "Planning",
      description: "Roadmaps, cycles, and dependencies",
      group: "Product",
      icon: (0, r.jsx)(c.A, { ...ee }),
      keywords: "roadmap cycle sprint"
    },
    {
      label: "Automations",
      description: "Rules that triage, assign, and remind",
      group: "Product",
      icon: (0, r.jsx)(m, { ...ee }),
      keywords: "rules workflow"
    },
    {
      label: "Pricing",
      description: "Free, Team at $10, and Enterprise",
      group: "Company",
      icon: (0, r.jsx)(d.A, { ...ee }),
      keywords: "cost plan billing"
    },
    {
      label: "Documentation",
      description: "Guides and API reference",
      group: "Resources",
      icon: (0, r.jsx)(_.A, { ...ee }),
      keywords: "api docs help"
    },
    {
      label: "Changelog",
      description: "What shipped this week",
      group: "Resources",
      icon: (0, r.jsx)(j.A, { ...ee }),
      keywords: "release updates new"
    },
    {
      label: "Integrations",
      description: "GitHub, Slack, Figma, and 60 more",
      group: "Product",
      icon: (0, r.jsx)(v.A, { ...ee }),
      keywords: "github slack figma"
    },
    {
      label: "Security",
      description: "SSO, audit logs, and data residency",
      group: "Product",
      icon: (0, r.jsx)(f.A, { ...ee }),
      keywords: "sso saml soc2 audit"
    },
    {
      label: "Engineering",
      description: "Ship on a steady, visible cadence",
      group: "Solutions",
      icon: (0, r.jsx)(x.A, { ...ee })
    },
    {
      label: "Help center",
      description: "Answers from our support team",
      group: "Resources",
      icon: (0, r.jsx)(A.A, { ...ee }),
      keywords: "support contact"
    }
  ], er = {
    product: "Product",
    solutions: "Solutions",
    resources: "Resources",
    pricing: "Pricing",
    Product: "Product",
    Solutions: "Solutions",
    Resources: "Resources",
    Company: "Pricing"
  }, en = [
    { value: "full", label: "Full" },
    { value: "compact", label: "Compact" }
  ], el = {
    Product: "product",
    Solutions: "solutions",
    Resources: "resources",
    Company: "pricing"
  };
  function es({ minimal: e2 = false } = {}) {
    let a2 = (0, s.I)(), [t2, h2] = (0, n.useState)({
      label: "Plan the quarter without the spreadsheet"
    }), [p2, N2] = (0, n.useState)(null), [S2, M2] = (0, n.useState)(false), z2 = (e3) => {
      h2(e3), N2(e3);
    }, [C2] = (0, n.useState)(() => {
      var e3;
      return e3 = (e4) => {
        h2(e4), N2(e4);
      }, [
        {
          value: "product",
          label: "Product",
          links: [
            {
              label: "Planning",
              description: "Roadmaps, cycles, and dependencies",
              icon: (0, r.jsx)(c.A, { ...ee })
            },
            {
              label: "Docs",
              description: "Specs that stay in sync with the work",
              icon: (0, r.jsx)(u.A, { ...ee })
            },
            {
              label: "Insights",
              description: "Cycle time and throughput by team",
              icon: (0, r.jsx)(d.A, { ...ee })
            },
            {
              label: "Automations",
              description: "Rules that triage, assign, and remind",
              icon: (0, r.jsx)(m, { ...ee })
            },
            {
              label: "Integrations",
              description: "GitHub, Slack, Figma, and 60 more",
              icon: (0, r.jsx)(v.A, { ...ee })
            },
            {
              label: "Security",
              description: "SSO, audit logs, and data residency",
              icon: (0, r.jsx)(f.A, { ...ee })
            }
          ],
          feature: (0, r.jsxs)("button", {
            type: "button",
            className: J().story,
            onClick: () => e3({ label: "Fieldwork 4.0", section: "product" }),
            children: [
              (0, r.jsx)(l.default, {
                className: J().storyImage,
                src: "media/specials/morph-nav-studio.jpg",
                alt: "",
                width: 640,
                height: 420,
                sizes: "216px"
              }),
              (0, r.jsx)("span", {
                className: J().storyTitle,
                children: "Fieldwork 4.0 is here"
              }),
              (0, r.jsx)("span", {
                className: J().storyMeta,
                children: "Plan, write, and ship from one place"
              })
            ]
          }),
          footer: (0, r.jsxs)("button", {
            type: "button",
            className: J().footerLink,
            onClick: () => e3({ label: "Changelog", section: "resources" }),
            children: [
              (0, r.jsx)("span", {
                children: "Automations can now run on a schedule"
              }),
              (0, r.jsx)(y.A, { size: 14, ...ee, "aria-hidden": "true" })
            ]
          })
        },
        {
          value: "solutions",
          label: "Solutions",
          columns: 1,
          links: [
            {
              label: "Engineering",
              description: "Ship on a steady, visible cadence",
              icon: (0, r.jsx)(x.A, { ...ee })
            },
            {
              label: "Product design",
              description: "Critique, handoff, and QA in one loop",
              icon: (0, r.jsx)(g.A, { ...ee })
            },
            {
              label: "Operations",
              description: "Requests with clear owners and dates",
              icon: (0, r.jsx)(k.A, { ...ee })
            },
            {
              label: "Startups",
              description: "Free for your first year",
              icon: (0, r.jsx)(b.A, { ...ee })
            }
          ],
          feature: (0, r.jsxs)("button", {
            type: "button",
            className: J().story,
            onClick: () => e3({
              label: "Brightline customer story",
              section: "solutions"
            }),
            children: [
              (0, r.jsx)(l.default, {
                className: J().storyImage,
                src: "media/specials/morph-nav-team.jpg",
                alt: "",
                width: 640,
                height: 420,
                sizes: "232px"
              }),
              (0, r.jsx)("span", {
                className: J().storyTitle,
                children: "How Brightline cut planning time by 40%"
              }),
              (0, r.jsxs)("span", {
                className: J().quoteBy,
                children: [
                  (0, r.jsx)(l.default, {
                    className: J().avatar,
                    src: "media/specials/morph-nav-rachel.svg",
                    alt: "",
                    width: 48,
                    height: 48
                  }),
                  (0, r.jsx)("span", {
                    children: "Rachel Adams, VP of Engineering"
                  })
                ]
              })
            ]
          })
        },
        {
          value: "resources",
          label: "Resources",
          columns: 1,
          links: [
            {
              label: "Documentation",
              description: "Guides and API reference",
              icon: (0, r.jsx)(_.A, { ...ee })
            },
            {
              label: "Changelog",
              description: "What shipped this week",
              icon: (0, r.jsx)(j.A, { ...ee })
            },
            {
              label: "Community",
              description: "12,400 teams trading notes",
              icon: (0, r.jsx)(w.A, { ...ee })
            },
            {
              label: "Help center",
              description: "Answers from our support team",
              icon: (0, r.jsx)(A.A, { ...ee })
            }
          ],
          feature: (0, r.jsxs)("button", {
            type: "button",
            className: J().story,
            onClick: () => e3({ label: "A calm planning week", section: "resources" }),
            children: [
              (0, r.jsx)(l.default, {
                className: J().storyImage,
                src: "media/specials/morph-nav-guide.jpg",
                alt: "",
                width: 640,
                height: 420,
                sizes: "232px"
              }),
              (0, r.jsx)("span", {
                className: J().storyTitle,
                children: "A calm planning week"
              }),
              (0, r.jsx)("span", {
                className: J().storyMeta,
                children: "Guide \xB7 12 min read"
              })
            ]
          })
        },
        { value: "pricing", label: "Pricing" }
      ];
    }), P2 = t2.section ? el[t2.section] ?? t2.section : void 0;
    return e2 ? (0, r.jsxs)("div", {
      className: J().minimalDemo,
      children: [
        (0, r.jsx)("div", {
          className: `${J().stage} ${J().minimal}`,
          children: (0, r.jsx)("div", {
            className: J().navSlot,
            children: (0, r.jsx)(Q, {
              items: C2,
              brand: { name: "Fieldwork", mark: (0, r.jsx)(ea, {}) },
              current: P2,
              compact: S2,
              search: { placeholder: "Search Fieldwork", items: et },
              action: {
                label: "Start free",
                onClick: () => z2({ label: "Create your workspace" })
              },
              onNavigate: z2,
              label: "Fieldwork",
              collapseBelow: 620
            })
          })
        }),
        (0, r.jsx)("p", {
          className: J().status,
          "aria-live": "polite",
          children: p2 ? `Opened ${p2.label}` : "Hover a section or press search"
        }),
        (0, r.jsx)(X.A, {
          label: "Bar size",
          options: en,
          value: S2 ? "compact" : "full",
          onValueChange: (e3) => M2("compact" === e3)
        })
      ]
    }) : (0, r.jsx)("div", {
      className: J().stage,
      children: (0, r.jsxs)("div", {
        className: J().viewport,
        onScroll: (e3) => {
          let a3 = e3.currentTarget.scrollTop > 24;
          a3 !== S2 && M2(a3);
        },
        children: [
          (0, r.jsx)("div", {
            className: J().navSlot,
            children: (0, r.jsx)(Q, {
              items: C2,
              brand: { name: "Fieldwork", mark: (0, r.jsx)(ea, {}) },
              current: P2,
              compact: S2,
              search: { placeholder: "Search Fieldwork", items: et },
              action: {
                label: "Start free",
                onClick: () => z2({ label: "Create your workspace" })
              },
              onNavigate: z2,
              label: "Fieldwork",
              collapseBelow: 620
            })
          }),
          (0, r.jsxs)("main", {
            className: J().page,
            children: [
              (0, r.jsx)(i.N, {
                mode: "popLayout",
                initial: false,
                children: (0, r.jsxs)(
                  o.PY1.header,
                  {
                    className: J().hero,
                    initial: a2 ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(4px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: a2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: -6,
                      filter: "blur(4px)",
                      transition: { duration: 0.14 }
                    },
                    transition: a2 ? { duration: 0.15 } : $.T.spring.smooth,
                    children: [
                      t2.section && (0, r.jsx)("p", {
                        className: J().crumb,
                        children: er[t2.section] ?? t2.section
                      }),
                      (0, r.jsx)("h3", {
                        className: J().title,
                        children: t2.label
                      }),
                      (0, r.jsx)("p", {
                        className: J().lede,
                        children: t2.section ? t2.label : "Fieldwork keeps roadmaps, specs, and status in one calm workspace."
                      })
                    ]
                  },
                  `${t2.section}-${t2.label}`
                )
              }),
              (0, r.jsxs)("div", {
                className: J().grid,
                children: [
                  (0, r.jsxs)("section", {
                    className: J().block,
                    children: [
                      (0, r.jsx)("h4", {
                        children: "Roadmaps that stay honest"
                      }),
                      (0, r.jsx)("p", {
                        children: "Cycles close on their own dates, and slipped work carries its history with it."
                      })
                    ]
                  }),
                  (0, r.jsxs)("section", {
                    className: J().block,
                    children: [
                      (0, r.jsx)("h4", {
                        children: "Specs next to the work"
                      }),
                      (0, r.jsx)("p", {
                        children: "Docs link to the issues they describe, so a changed scope shows up in both."
                      })
                    ]
                  }),
                  (0, r.jsxs)("section", {
                    className: J().block,
                    children: [
                      (0, r.jsx)("h4", {
                        children: "Status without meetings"
                      }),
                      (0, r.jsx)("p", {
                        children: "Weekly updates draft themselves from what actually moved."
                      })
                    ]
                  }),
                  (0, r.jsxs)("section", {
                    className: J().block,
                    children: [
                      (0, r.jsx)("h4", {
                        children: "Built for large teams"
                      }),
                      (0, r.jsx)("p", {
                        children: "SSO, audit logs, and granular roles for teams of 50 to 5,000."
                      })
                    ]
                  })
                ]
              }),
              (0, r.jsx)("div", {
                className: J().spacer,
                "aria-hidden": "true"
              })
            ]
          })
        ]
      })
    });
  }
  let ei = es;
}

__m(__module,__exports,__require);
});
A.reg(40557, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "book-open",
    size: 24,
    node: [
      ["path", { d: "M12 5v16", key: "1f6ucr" }],
      [
        "path",
        {
          d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
          key: "1fyvmf"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(44825, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "rocket",
    size: 24,
    node: [
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
          key: "u4xsad"
        }
      ],
      [
        "path",
        {
          d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
          key: "676m9"
        }
      ],
      [
        "path",
        { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }
      ]
    ]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(47402, ".root{--bar-h:56px;--item-pad:14px;position:relative;z-index:10;width:100%;height:var(--bar-h);container-type:inline-size;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);transition:height var(--duration-spring) var(--ease-spring)}\n.root[data-compact]{--bar-h:46px;--item-pad:11px;--control-h:32px}\n.root{--control-h:36px;--tighten:var(--duration-spring) var(--ease-spring)}\n.root[data-open] .surface{box-shadow:var(--_shadow-open)}\n.root[data-compact] .brandMark{scale:.92}\n.root[data-compact] .brandName,.root[data-narrow] .brandName{margin-left:0;grid-template-columns:0fr;opacity:0;filter:blur(2px);transition:grid-template-columns var(--tighten),margin-left var(--tighten),opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard)}\n.root[data-compact] .action{--action-pad:14px}\n@media (prefers-reduced-motion:reduce){.action,.bar,.brandMark,.brandName,.brand,.highlight,.item,.root,.searchBar,.tool{transition-duration:0s;transition-delay:0s}\n.surface{position:absolute;top:0;left:50%;translate:-50% 0;overflow:clip;--_shadow-rest:0 1px 2px oklch(0% 0 0/.03),0 4px 14px oklch(0% 0 0/.04);--_shadow-open:0 2px 6px oklch(0% 0 0/.03),0 16px 40px oklch(0% 0 0/.07);background:color-mix(in oklab,var(--surface-raised) 88%,transparent);box-shadow:var(--_shadow-rest);-webkit-backdrop-filter:blur(20px) saturate(1.3);backdrop-filter:blur(20px) saturate(1.3);transition:box-shadow var(--duration-considered) var(--ease-standard)}\n:root[data-theme=dark] .surface{--_shadow-rest:0 1px 2px oklch(0% 0 0/.2),0 6px 18px oklch(0% 0 0/.18);--_shadow-open:0 2px 6px oklch(0% 0 0/.2),0 20px 48px oklch(0% 0 0/.3)}\n.surface:after{content:\"\";position:absolute;inset:0;border:1px solid color-mix(in oklab,var(--border) 80%,transparent);border-radius:inherit;pointer-events:none}\n@container (max-width: 460px){.surface{--_shadow-open:0 2px 6px oklch(0% 0 0/.04),0 14px 28px -10px oklch(0% 0 0/.14)}\n@media (prefers-reduced-transparency:reduce){.surface{background:var(--surface-raised);-webkit-backdrop-filter:none;backdrop-filter:none}\n@media (prefers-contrast:more){.surface{background:var(--surface-raised);-webkit-backdrop-filter:none;backdrop-filter:none}\n.surface:after{border-color:var(--border-strong)}\n.bar,.face,.searchBar{position:absolute;top:0;left:50%;box-sizing:border-box;translate:-50% 0}\n.bar,.searchBar{display:flex;height:var(--bar-h);align-items:center;transition:height var(--duration-spring) var(--ease-spring)}\n.bar{width:max-content;gap:6px;padding:0 8px 0 10px}\n.bar[inert],.searchBar[inert]{pointer-events:none}\n@media (max-width:420px){.bar{gap:2px;padding-inline:6px}\n.searchBar{width:min(34rem,calc(100cqw - 16px));gap:10px;padding:0 8px 0 18px}\n.searchBar{padding-left:14px}\n.face{top:var(--bar-h);width:max-content;max-width:calc(100cqw - 16px);padding:8px}\n.face:before{content:\"\";position:absolute;top:0;right:20px;left:20px;height:1px;background:color-mix(in oklab,var(--border-subtle) 70%,transparent)}\n.face[inert]{pointer-events:none}\n.face{max-height:min(30rem,calc(100dvh - var(--bar-h) - 40px));overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}\n.face::-webkit-scrollbar{display:none}\n.brand{display:inline-flex;height:var(--control-h);transition:height var(--tighten);align-items:center;padding:0 8px 0 4px;border:0;border-radius:var(--radius-pill);background:transparent;color:inherit;cursor:pointer;font:inherit;font-weight:500;-webkit-tap-highlight-color:transparent}\n.brandMark{display:grid;width:26px;height:26px;flex:none;place-items:center;transition:scale var(--tighten)}\n.brandMark>svg{width:100%;height:100%}\n.brandName{display:grid;margin-left:9px;grid-template-columns:1fr;opacity:1;filter:blur(0);transition:grid-template-columns var(--tighten),margin-left var(--tighten),opacity var(--duration-standard) var(--ease-standard) 60ms,filter var(--duration-standard) var(--ease-standard) 60ms}\n.brandName>span{min-width:0;overflow:hidden;font-size:var(--text-base);white-space:nowrap}\n.track{position:relative;display:flex;align-items:center}\n.highlight{position:absolute;top:50%;left:0;height:var(--control-h);translate:0 -50%;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 4.5%,transparent);pointer-events:none;transition:height var(--tighten)}\n.item{position:relative;display:inline-flex;height:var(--control-h);align-items:center;gap:4px;padding:0 var(--item-pad);border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;font-weight:400;text-decoration:none;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),padding var(--tighten),height var(--tighten)}\n.item[aria-expanded=true],.item[data-current]{color:var(--foreground)}\n.item[data-current]:after{content:\"\";position:absolute;bottom:3px;left:50%;width:3px;height:3px;margin-left:-1.5px;border-radius:50%;background:var(--accent);opacity:.8}\n.item:has(.chevron)[data-current]:after{margin-left:-8.5px}\n@media (hover:hover) and (pointer:fine){.item:hover{color:var(--foreground)}\n.item:focus-visible{color:var(--foreground)}\n.chevron{display:grid;width:14px;height:14px;place-items:center;color:var(--text-muted);opacity:.8}\n.tools{display:flex;align-items:center;gap:4px;margin-left:2px}\n.tool{display:grid;width:var(--control-h);height:var(--control-h);flex:none;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard),width var(--tighten),height var(--tighten)}\n.tool:active{transform:scale(.94)}\n.tool:hover{background:color-mix(in oklab,var(--foreground) 4.5%,transparent);color:var(--foreground)}\n.tool:focus-visible{background:color-mix(in oklab,var(--foreground) 4.5%,transparent)}\n.action{display:inline-flex;height:var(--control-h);align-items:center;gap:6px;padding:0 var(--action-pad,16px);border:0;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);cursor:pointer;font:inherit;font-weight:500;text-decoration:none;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard),height var(--tighten),padding var(--tighten)}\n.action:active{transform:scale(.97)}\n.action>svg{width:16px;height:16px;flex:none}\n.action:hover{background:color-mix(in oklab,var(--foreground) 86%,var(--background))}\n.action{--action-pad:13px}\n.searchIcon{flex:none;color:var(--text-muted)}\n.input{min-width:0;height:100%;flex:1;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-base);letter-spacing:var(--tracking-body);outline:none}\n.input::placeholder{color:var(--text-muted)}\n.panelBody{display:flex;align-items:stretch;gap:8px;padding-top:4px}\n.panelBody{flex-direction:column}\n.links{display:grid;min-width:0;margin:0;padding:0;gap:2px;grid-template-columns:repeat(2,minmax(0,14.5rem));align-content:start;list-style:none}\n.links[data-columns=\"1\"]{grid-template-columns:minmax(0,15.5rem)}\n.menu .links[data-columns=\"1\"]{grid-template-columns:minmax(0,1fr)}\n.links,.links[data-columns=\"1\"]{grid-template-columns:minmax(0,1fr)}\n.link{display:flex;width:100%;box-sizing:border-box;align-items:flex-start;gap:12px;padding:10px 12px;border:0;border-radius:14px;background:transparent;color:inherit;cursor:pointer;font:inherit;text-align:left;text-decoration:none;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.link[data-dense]{padding:8px 12px}\n.link:hover{background:color-mix(in oklab,var(--foreground) 3.5%,transparent)}\n.link:hover .linkIcon{color:var(--foreground)}\n.link:focus-visible{background:color-mix(in oklab,var(--foreground) 3.5%,transparent)}\n.menu .link{gap:8px;padding:7px 8px;border-radius:12px}\n.menuHeading,.menu .link{padding-inline:10px}\n.linkIcon{display:grid;width:20px;height:20px;flex:none;place-items:center;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.linkIcon>svg{width:17px;height:17px;stroke-width:1.75}\n.menu .linkIcon{width:18px;height:18px}\n.menu .linkIcon>svg{width:16px;height:16px}\n@container (max-width: 360px){.menu .linkIcon{display:none}\n.linkText{display:grid;min-width:0;gap:1px}\n.result .linkText{flex:1}\n.linkLabel{overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.linkDescription{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);text-wrap:pretty}\n.result .linkDescription{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.feature{display:flex;min-width:0;flex:0 1 13.5rem}\n.feature>*{flex:1}\n.feature{flex-basis:auto}\n.footer{margin:6px 4px 0;padding:10px 8px 2px;border-top:1px solid var(--border-subtle);color:var(--text-secondary);font-size:var(--text-xs)}\n.menu{display:grid;width:min(30rem,calc(100cqw - 32px));gap:4px 8px;padding-top:4px;grid-template-columns:repeat(2,minmax(0,1fr))}\n.menu{width:calc(100cqw - 16px);gap:2px 4px;grid-template-columns:repeat(2,minmax(0,1fr))}\n.menuGroup{display:grid;min-width:0;align-content:start}\n.menuHeading{margin:0;padding:8px 12px 2px;color:var(--text-muted);font-size:var(--text-xs)}\n.menuHeading{padding:8px 8px 2px}\n.resultsFace{width:min(34rem,calc(100cqw - 16px))}\n.resultsFace{width:calc(100cqw - 16px)}\n.resultsHeading{margin:0;padding:10px 12px 6px;color:var(--text-muted);font-size:var(--text-xs)}\n.results{display:grid;margin:0;padding:0;gap:2px;list-style:none}\n.result{display:flex;align-items:center;gap:12px;padding:9px 12px;border-radius:14px;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}\n.result[aria-selected=true]{background:color-mix(in oklab,var(--foreground) 4.5%,transparent)}\n.result[aria-selected=true] .resultEnter{opacity:1}\n.result{gap:10px;padding:9px 10px}\n.resultGroup{flex:none;color:var(--text-muted);font-size:var(--text-xs)}\n.resultEnter,.resultGroup{display:none}\n.resultEnter{flex:none;color:var(--text-muted);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}", {"root":"root","surface":"surface","brandMark":"brandMark","brandName":"brandName","action":"action","bar":"bar","brand":"brand","highlight":"highlight","item":"item","searchBar":"searchBar","tool":"tool","face":"face","track":"track","chevron":"chevron","tools":"tools","searchIcon":"searchIcon","input":"input","panelBody":"panelBody","links":"links","menu":"menu","link":"link","linkIcon":"linkIcon","menuHeading":"menuHeading","linkText":"linkText","result":"result","linkLabel":"linkLabel","linkDescription":"linkDescription","feature":"feature","footer":"footer","menuGroup":"menuGroup","resultsFace":"resultsFace","resultsHeading":"resultsHeading","results":"results","resultEnter":"resultEnter","resultGroup":"resultGroup"});
A.reg(49237, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "life-buoy",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
      ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
      ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
      ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(50981, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "shield-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(51452, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var o = a(51811);
  let l = {
    name: "chart-no-axes-column",
    size: 24,
    node: [
      ["path", { d: "M5 21v-6", key: "1hz6c0" }],
      ["path", { d: "M12 21V3", key: "1lcnhd" }],
      ["path", { d: "M19 21V9", key: "unv183" }]
    ],
    aliases: ["bar-chart-2"]
  };
  l.node;
  let r = (0, o.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(57990, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "wrench",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
          key: "1ngwbx"
        }
      ]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(58386, ".stage{position:relative;height:520px;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--background)}\n.minimalDemo,.stage{width:min(100%,980px);margin-inline:auto;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.stage:after{content:\"\";position:absolute;z-index:6;right:0;bottom:0;left:0;height:56px;background:linear-gradient(to bottom,transparent,var(--background));pointer-events:none}\n@media (max-width:640px){.stage{height:500px}\n.minimalDemo{display:grid;justify-items:center;gap:var(--space-3)}\n.minimal{height:440px;border:0;border-radius:0;background:transparent;overflow:visible}\n.minimal:after{content:none}\n.minimal{height:520px}\n.status{margin:0;color:var(--text-muted);font-size:var(--text-sm);text-align:center}\n.viewport{height:100%;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}\n.navSlot{position:sticky;z-index:5;top:14px;padding-inline:14px}\n.navSlot{top:10px;padding-inline:10px}\n.page{display:grid;gap:var(--space-8);padding:72px clamp(20px,6%,64px) 0}\n.page{padding-top:56px}\n.hero{display:grid;max-width:38rem;gap:var(--space-3);justify-self:center;text-align:center}\n.crumb{margin:0;color:var(--text-muted);font-size:var(--text-sm)}\n.title{margin:0;color:var(--foreground);font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.title{font-size:var(--text-2xl)}\n.lede{margin:0;color:var(--text-secondary);font-size:var(--text-base);line-height:var(--leading-body);text-wrap:pretty}\n.grid{display:grid;gap:1px;overflow:hidden;border:1px solid var(--border-subtle);border-radius:var(--radius-panel);background:var(--border-subtle);grid-template-columns:repeat(2,minmax(0,1fr))}\n.grid{grid-template-columns:minmax(0,1fr)}\n.block{display:grid;align-content:start;gap:6px;padding:var(--space-6);background:var(--surface)}\n.block h4{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500}\n.block p{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.note{margin:0;color:var(--text-muted);font-size:var(--text-xs);text-align:center}\n.spacer{height:360px}\n.story{display:grid;width:100%;align-content:start;gap:4px;padding:6px;border:0;border-radius:14px;background:transparent;color:inherit;cursor:pointer;font:inherit;text-align:left;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.story:hover{background:color-mix(in oklab,var(--foreground) 3.5%,transparent)}\n.storyImage{display:block;width:100%;height:auto;margin-bottom:8px;aspect-ratio:16/10;border-radius:10px;object-fit:cover}\n.storyTitle{padding-inline:6px;color:var(--foreground);font-weight:500;line-height:var(--leading-body)}\n.storyMeta{padding-inline:6px;color:var(--text-muted);font-size:var(--text-xs)}\n.quoteBy{display:flex;align-items:center;gap:8px;margin-top:4px;padding-inline:6px;color:var(--text-secondary);font-size:var(--text-xs)}\n.avatar{width:22px;height:22px;flex:none;border-radius:50%;object-fit:cover}\n.footerLink{display:inline-flex;align-items:center;gap:6px;padding:0;border:0;background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;transition:color var(--duration-fast) var(--ease-standard)}\n.footerLink:hover{color:var(--foreground)}", {"stage":"stage","minimalDemo":"minimalDemo","minimal":"minimal","status":"status","viewport":"viewport","navSlot":"navSlot","page":"page","hero":"hero","crumb":"crumb","title":"title","lede":"lede","grid":"grid","block":"block","note":"note","spacer":"spacer","story":"story","storyImage":"storyImage","storyTitle":"storyTitle","storyMeta":"storyMeta","quoteBy":"quoteBy","avatar":"avatar","footerLink":"footerLink"});
A.reg(63769, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "messages-square",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
          key: "1n2ejm"
        }
      ],
      [
        "path",
        {
          d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",
          key: "1qfcsi"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(71011, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "blocks",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",
          key: "1ah6g2"
        }
      ],
      [
        "rect",
        { x: "14", y: "2", width: "8", height: "8", rx: "1", key: "88lufb" }
      ]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(72809, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "pen-tool",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
          key: "nt11vn"
        }
      ],
      [
        "path",
        {
          d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
          key: "15qc1e"
        }
      ],
      ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
      ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(92782, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "code-xml",
    size: 24,
    node: [
      ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
      ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
      ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
    ],
    aliases: ["code-2"]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("morph-nav", [47402,58386]);
A.item("morph-nav", {entry:24067, export:"MorphNavDemo", kind:"component", tier:"pro", unresolved:[]});
})();