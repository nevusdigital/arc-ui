function(__module,__exports,__require){
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
}