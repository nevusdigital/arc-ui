function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { N: () => P });
  var l = r(95155), a = r(12115), i = r(18310), n = r(28245), s = r(92171), o = r(25354), u = r(80642), c = r(65377), p = r(9005), d = r(12363), h = r(64577), f = r(7770), m = r(73506), v = r.n(m);
  let { blur: g } = f.T, _ = [...f.T.ease.enter], y = [...f.T.ease.standard], x = (e2, t2) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: r2 * r2,
      damping: 2 * (1 - t2) * r2,
      mass: 1
    };
  }, b = x(0.4, 0), w = x(0.34, 0), j = x(0.28, 0), N = x(0.42, 0), k = x(0.42, 0), $ = x(0.3, 0), R = () => () => {
  };
  function D(e2, t2) {
    return `${e2.label} ${e2.meta ?? ""} ${e2.keywords ?? ""}`.toLowerCase().includes(t2);
  }
  let M = {
    enter: (e2) => e2.fly ? { opacity: 1, x: e2.fly.x, y: e2.fly.y, filter: "blur(0px)" } : {
      opacity: 0,
      x: 0,
      y: `${0.5 * e2.dir}em`,
      filter: `blur(${g.soft}px)`
    },
    rest: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      x: 0,
      y: e2.fly ? "-0.3em" : `${-0.45 * e2.dir}em`,
      filter: `blur(${g.subtle}px)`,
      transition: { duration: 0.12, ease: y }
    })
  }, C = {
    enter: { opacity: 0 },
    rest: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, transition: { duration: 0.1 } }
  }, H = (e2) => {
    let t2 = e2.getBoundingClientRect().width, r2 = e2.offsetWidth;
    return 0.5 >= Math.abs(t2 - r2) ? Math.ceil(t2 - 0.01) : r2 + 1;
  };
  function P({
    label: e2,
    hideLabel: t2 = false,
    items: r2,
    value: f2,
    defaultValue: m2 = null,
    onValueChange: x2,
    placeholder: T = "Select",
    searchable: L = "auto",
    searchPlaceholder: E,
    panelWidth: S = 272,
    maxListHeight: W = 296,
    align: I = "start",
    name: A,
    disabled: K = false,
    className: Y
  }) {
    let B, F = (B = (0, a.useSyncExternalStore)(
      R,
      () => true,
      () => false
    ), !!(0, i.I)() && B), O = (0, a.useId)(), V = `${O}-label`, z = `${O}-list`, U = (e3) => `${O}-option-${e3}`, X = (0, a.useRef)(null), Z = (0, a.useRef)(null), q = (0, a.useRef)(null), G = (0, a.useRef)(null), J = (0, a.useRef)(null), Q = (0, a.useRef)(null), ee = (0, a.useRef)(null), et = (0, a.useRef)(/* @__PURE__ */ new Map()), er = (0, a.useMemo)(() => {
      let e3;
      return e3 = [], r2.forEach((t3, r3) => {
        if ("options" in t3)
          return void e3.push({
            key: `group-${r3}`,
            label: t3.label,
            options: t3.options
          });
        let l2 = e3[e3.length - 1];
        l2 && !l2.label ? l2.options.push(t3) : e3.push({ key: `loose-${r3}`, options: [t3] });
      }), e3;
    }, [r2]), el = (0, a.useMemo)(() => er.flatMap((e3) => e3.options), [er]), ea = (0, a.useMemo)(() => new Map(el.map((e3, t3) => [e3.value, t3])), [el]), ei = "auto" === L ? el.length > 8 : L, [en, es] = (0, a.useState)(m2), eo = void 0 !== f2 ? f2 : en, eu = null === eo ? void 0 : el.find((e3) => e3.value === eo), [ec, ep] = (0, a.useState)(false), [ed, eh] = (0, a.useState)(""), [ef, em] = (0, a.useState)(null), [ev, eg] = (0, a.useState)({ key: 0, value: null, dir: 1, fly: null }), e_ = ed.trim().toLowerCase(), ey = (0, a.useMemo)(
      () => e_ ? er.map((e3) => ({
        ...e3,
        options: e3.options.filter((e4) => D(e4, e_))
      })).filter((e3) => e3.options.length) : er,
      [e_, er]
    ), ex = (0, a.useMemo)(
      () => ey.flatMap((e3) => e3.options).filter((e3) => !e3.disabled),
      [ey]
    ), eb = null !== ef && ex.some((e3) => e3.value === ef) ? ef : ex[0]?.value ?? null, ew = ey.reduce((e3, t3) => e3 + t3.options.length, 0), ej = (0, n.d)("auto"), eN = (0, n.d)("100%"), ek = (0, n.d)("100%"), e$ = (0, n.d)(22), eR = (0, a.useRef)({ trigger: 0, lid: 0, listW: 0, listH: 0 }), eD = (0, a.useRef)({ open: false, reduced: false, measured: false });
    (0, a.useLayoutEffect)(() => {
      eD.current.reduced = F;
    }, [F]);
    let eM = (0, a.useCallback)(
      (e3) => {
        let { trigger: t3, lid: r3, listW: l2, listH: a2 } = eR.current;
        if (!t3 || !r3) return;
        let i2 = eD.current.open, n2 = i2 ? { w: Math.max(t3, l2), h: r3 + a2, r: 22 } : { w: t3, h: r3, r: r3 / 2 };
        if (!e3 || eD.current.reduced || !eD.current.measured) {
          ej.jump(t3), eN.jump(n2.w), ek.jump(n2.h), e$.jump(n2.r), eD.current.measured = true;
          return;
        }
        let o2 = "number" == typeof eN.get() ? eN.get() : n2.w, u2 = "number" == typeof ek.get() ? ek.get() : n2.h, c2 = "number" == typeof ej.get() ? ej.get() : t3, p2 = n2.w * n2.h >= o2 * u2 ? b : w;
        (0, s.i)(ej, t3, t3 < c2 ? k : N), (0, s.i)(eN, n2.w, i2 ? p2 : n2.w < o2 ? k : N), (0, s.i)(ek, n2.h, p2), (0, s.i)(e$, n2.r, p2);
      },
      [ej, e$, ek, eN]
    );
    (0, a.useLayoutEffect)(() => {
      let e3 = Z.current, t3 = q.current, r3 = X.current;
      if (!e3 || !t3 || !r3) return;
      let l2 = () => {
        let l3 = eR.current;
        r3.style.setProperty("--ms-trigger-w", `${H(e3)}px`);
        let a3 = {
          trigger: H(e3),
          lid: e3.offsetHeight,
          listW: t3.offsetWidth,
          listH: t3.offsetHeight
        }, i2 = a3.trigger !== l3.trigger || a3.lid !== l3.lid || eD.current.open && (a3.listW !== l3.listW || a3.listH !== l3.listH);
        eR.current = a3, i2 && eM(eD.current.measured);
      };
      if (l2(), r3.dataset.ready = "", "u" < typeof ResizeObserver) return;
      let a2 = new ResizeObserver(l2);
      return a2.observe(e3), a2.observe(t3), () => a2.disconnect();
    }, [eM]), (0, a.useLayoutEffect)(() => {
      if (eD.current.open === ec) return;
      eD.current.open = ec;
      let e3 = q.current, t3 = Z.current;
      e3 && t3 && (X.current?.style.setProperty("--ms-trigger-w", `${H(t3)}px`), eR.current = {
        trigger: H(t3),
        lid: t3.offsetHeight,
        listW: e3.offsetWidth,
        listH: e3.offsetHeight
      }), eM(true);
    }, [ec, eM]);
    let eC = (0, n.d)(0), eH = (0, n.d)(0), eP = (0, n.d)(0), eT = (0, a.useRef)(false);
    (0, a.useLayoutEffect)(() => {
      let e3 = ec && null !== eb ? et.current.get(eb) : void 0;
      if (!e3)
        return void (0, s.i)(eP, 0, { duration: F || !ec ? 0 : 0.12, ease: y });
      let t3 = e3.offsetTop, r3 = e3.offsetHeight;
      0.05 > eP.get() || F ? (eC.jump(t3), eH.jump(r3)) : ((0, s.i)(eC, t3, j), (0, s.i)(eH, r3, j)), (0, s.i)(eP, 1, { duration: 0.12 * !F, ease: _ });
      let l2 = G.current;
      l2 && eT.current && (eT.current = false, t3 < l2.scrollTop + 6 ? l2.scrollTop = t3 - 6 : t3 + r3 > l2.scrollTop + l2.clientHeight - 6 && (l2.scrollTop = t3 + r3 - l2.clientHeight + 6));
    }, [eb, eH, eP, eC, ec, F, ey]);
    let eL = (0, a.useRef)(null);
    (0, a.useLayoutEffect)(() => {
      let e3 = eL.current;
      eL.current = null, "input" === e3 && Q.current?.focus({ preventScroll: true }), "trigger" === e3 && J.current?.focus({ preventScroll: true });
    }, [ec]);
    let eE = (0, a.useRef)({ buffer: "", at: 0 }), eS = (0, a.useRef)(false), [eW, eI] = (0, a.useState)(""), eA = (e3, t3 = "") => {
      K || ec || (eh(t3), em(void 0 !== e3 ? e3 : eo), eT.current = true, eL.current = ei ? "input" : "trigger", eI(""), ep(true));
    }, eK = (0, a.useCallback)((e3) => {
      eE.current.buffer = "", e3 && (eL.current = "trigger"), ep(false);
    }, []), eY = (e3, t3) => {
      if (e3 && !e3.disabled) {
        if (e3.value !== eo) {
          let r3 = null, l2 = ee.current, a2 = t3?.querySelector("[data-part='value']");
          if (!F && a2 && l2) {
            let e4 = a2.getBoundingClientRect(), t4 = l2.getBoundingClientRect();
            r3 = {
              x: e4.left - t4.left,
              y: e4.top + e4.height / 2 - (t4.top + t4.height / 2)
            };
          }
          let i2 = null === eo ? -1 : ea.get(eo) ?? -1, n2 = ea.get(e3.value) ?? 0;
          eg((t4) => ({
            key: t4.key + 1,
            value: e3.value,
            dir: i2 < 0 ? 1 : Math.sign(n2 - i2) || 1,
            fly: r3
          })), void 0 === f2 && es(e3.value), x2?.(e3.value, e3);
        }
        eK(true);
      }
    }, eB = (e3) => {
      let t3 = performance.now(), r3 = eE.current;
      r3.buffer = t3 - r3.at > 600 ? e3 : r3.buffer + e3, r3.at = t3;
      let l2 = r3.buffer.toLowerCase(), a2 = l2.split("").every((e4) => e4 === l2[0]), i2 = a2 ? l2[0] : l2, n2 = el.filter((e4) => !e4.disabled), s2 = ec ? eb : eo, o2 = n2.findIndex((e4) => e4.value === s2), u2 = a2 || 1 === l2.length ? 1 : 0;
      return [...n2.slice(o2 + u2), ...n2.slice(0, o2 + u2)].find(
        (e4) => e4.label.toLowerCase().startsWith(i2)
      );
    }, eF = (e3) => {
      null != e3 && (eT.current = true, em(e3));
    }, eO = (e3, t3) => {
      let { key: r3 } = e3;
      " " !== r3 || t3 || (eS.current = true);
      let l2 = 1 === r3.length && !e3.metaKey && !e3.ctrlKey && !e3.altKey, a2 = performance.now() - eE.current.at < 600 && eE.current.buffer.length > 0;
      if (!ec) {
        if ("ArrowDown" === r3 || "ArrowUp" === r3 || "Enter" === r3 || " " === r3 && !a2) {
          e3.preventDefault(), eA();
          return;
        }
        if ("Home" === r3 || "End" === r3) {
          e3.preventDefault();
          let t4 = el.filter((e4) => !e4.disabled);
          eA(("Home" === r3 ? t4[0] : t4[t4.length - 1])?.value ?? null);
          return;
        }
        if (l2)
          if (e3.preventDefault(), ei) eA(void 0, r3);
          else {
            let e4 = eB(r3);
            eA(e4?.value ?? eo);
          }
        return;
      }
      let i2 = ex.findIndex((e4) => e4.value === eb), n2 = t3 && ed.length > 0;
      switch (r3) {
        case "ArrowDown":
          e3.preventDefault(), eF(ex[Math.min(ex.length - 1, i2 + 1)]?.value);
          return;
        case "ArrowUp":
          if (e3.preventDefault(), e3.altKey)
            return void eY(ex[i2], et.current.get(eb ?? ""));
          eF(ex[Math.max(0, i2 - 1)]?.value);
          return;
        case "PageDown":
          e3.preventDefault(), eF(ex[Math.min(ex.length - 1, i2 + 8)]?.value);
          return;
        case "PageUp":
          e3.preventDefault(), eF(ex[Math.max(0, i2 - 8)]?.value);
          return;
        case "Home":
          if (n2) return;
          e3.preventDefault(), eF(ex[0]?.value);
          return;
        case "End":
          if (n2) return;
          e3.preventDefault(), eF(ex[ex.length - 1]?.value);
          return;
        case "Enter":
          e3.preventDefault(), eY(ex[i2], et.current.get(eb ?? ""));
          return;
        case "Escape":
          e3.preventDefault(), e3.stopPropagation(), eK(true);
          return;
        case "Tab":
          eK(false);
          return;
      }
      if (!t3) {
        if (" " === r3 && !a2) {
          e3.preventDefault(), eY(ex[i2], et.current.get(eb ?? ""));
          return;
        }
        l2 && (e3.preventDefault(), eF(eB(r3)?.value));
      }
    };
    (0, a.useEffect)(() => {
      if (!ec) return;
      let e3 = (e4) => {
        X.current?.contains(e4.target) || eK(false);
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [eK, ec]);
    let eV = (e3) => {
      eh(e3), em(null), eT.current = true, G.current && (G.current.scrollTop = 0);
      let t3 = e3.trim().toLowerCase(), r3 = t3 ? el.filter((e4) => D(e4, t3)).length : el.length;
      eI(
        t3 ? r3 ? `${r3} ${1 === r3 ? "option" : "options"}` : "No matches" : ""
      );
    }, ez = (e3) => e3 ? (0, l.jsxs)(l.Fragment, {
      children: [
        e3.icon && (0, l.jsx)("span", {
          className: v().icon,
          "aria-hidden": "true",
          children: e3.icon
        }),
        (0, l.jsx)("span", {
          className: v().valueText,
          children: e3.label
        })
      ]
    }) : (0, l.jsx)("span", { className: v().placeholder, children: T }), eU = ec && ei, eX = eo ?? "__empty", eZ = ev.value === eo ? ev : { ...ev, fly: null }, eq = { "--ms-panel-w": `${S}px`, "--ms-list-max": `${W}px` };
    return (0, l.jsxs)("div", {
      ref: X,
      className: [v().root, Y].filter(Boolean).join(" "),
      style: eq,
      "data-open": ec || void 0,
      "data-align": I,
      "data-disabled": K || void 0,
      onBlur: (e3) => {
        let t3 = e3.relatedTarget;
        ec && t3 && !e3.currentTarget.contains(t3) && eK(false);
      },
      children: [
        (0, l.jsx)("span", {
          id: V,
          className: t2 ? v().srOnly : v().label,
          children: e2
        }),
        (0, l.jsxs)(o.PY1.div, {
          className: v().anchor,
          style: { width: ej },
          children: [
            (0, l.jsx)("span", {
              ref: Z,
              className: `${v().trigger} ${v().measure}`,
              "aria-hidden": "true",
              children: ez(eu)
            }),
            (0, l.jsxs)(o.PY1.div, {
              className: v().shape,
              style: { width: eN, height: ek, borderRadius: e$ },
              children: [
                (0, l.jsxs)("div", {
                  className: v().lid,
                  children: [
                    (0, l.jsx)("button", {
                      ref: J,
                      type: "button",
                      className: v().trigger,
                      role: "combobox",
                      "aria-labelledby": V,
                      "aria-haspopup": "listbox",
                      "aria-expanded": ec,
                      "aria-controls": z,
                      "aria-activedescendant": ec && !ei && null !== eb ? U(ea.get(eb) ?? 0) : void 0,
                      disabled: K,
                      inert: eU || void 0,
                      tabIndex: eU ? -1 : 0,
                      onClick: () => {
                        if (eS.current) {
                          eS.current = false;
                          return;
                        }
                        ec ? eK(true) : eA();
                      },
                      onKeyDown: (e3) => eO(e3, false),
                      onKeyUp: (e3) => {
                        " " === e3.key && window.setTimeout(() => {
                          eS.current = false;
                        });
                      },
                      children: (0, l.jsx)("span", {
                        ref: ee,
                        className: v().slot,
                        "data-hidden": eU || void 0,
                        children: (0, l.jsx)(u.N, {
                          initial: false,
                          custom: eZ,
                          children: (0, l.jsx)(
                            o.PY1.span,
                            {
                              className: v().layer,
                              custom: eZ,
                              variants: F ? C : M,
                              initial: "enter",
                              animate: "rest",
                              exit: "exit",
                              transition: F ? { duration: 0.12 } : eZ.fly ? { x: $, y: $, opacity: { duration: 0 } } : {
                                y: j,
                                opacity: { duration: 0.2, ease: _ },
                                filter: { duration: 0.22, ease: _ }
                              },
                              children: ez(eu)
                            },
                            eX
                          )
                        })
                      })
                    }),
                    ei && (0, l.jsxs)(o.PY1.div, {
                      className: v().searchRow,
                      inert: !eU || void 0,
                      initial: false,
                      animate: eU ? { opacity: 1, filter: "blur(0px)" } : {
                        opacity: 0,
                        filter: F ? "blur(0px)" : `blur(${g.subtle}px)`
                      },
                      transition: eU ? { duration: 0.18, ease: _, delay: 0.04 * !F } : { duration: 0.1, ease: y },
                      children: [
                        (0, l.jsx)(c.A, {
                          className: v().searchIcon,
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        (0, l.jsx)("input", {
                          ref: Q,
                          className: v().input,
                          type: "text",
                          role: "combobox",
                          "aria-label": `Search ${e2.toLowerCase()}`,
                          "aria-expanded": ec,
                          "aria-controls": z,
                          "aria-autocomplete": "list",
                          "aria-activedescendant": ec && null !== eb ? U(ea.get(eb) ?? 0) : void 0,
                          placeholder: E ?? eu?.label ?? "Search",
                          value: ed,
                          autoComplete: "off",
                          spellCheck: false,
                          onChange: (e3) => eV(e3.target.value),
                          onKeyDown: (e3) => eO(e3, true)
                        }),
                        (0, l.jsx)(u.N, {
                          initial: false,
                          children: ed && (0, l.jsx)(
                            o.PY1.button,
                            {
                              type: "button",
                              className: v().clear,
                              "aria-label": "Clear search",
                              onPointerDown: (e3) => e3.preventDefault(),
                              onClick: () => {
                                eV(""), Q.current?.focus();
                              },
                              initial: { opacity: 0, scale: 0.6 },
                              animate: { opacity: 1, scale: 1 },
                              exit: {
                                opacity: 0,
                                scale: 0.6,
                                transition: { duration: 0.1 }
                              },
                              transition: F ? { duration: 0 } : j,
                              children: (0, l.jsx)(p.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            },
                            "clear"
                          )
                        }),
                        (0, l.jsx)("button", {
                          type: "button",
                          className: v().closeHit,
                          "aria-label": `Close ${e2.toLowerCase()}`,
                          onClick: () => eK(true)
                        })
                      ]
                    }),
                    (0, l.jsx)(o.PY1.span, {
                      className: v().chevron,
                      "aria-hidden": "true",
                      initial: false,
                      animate: { rotate: 180 * !!ec },
                      transition: F ? { duration: 0 } : j,
                      children: (0, l.jsx)(d.A, {
                        size: 16,
                        strokeWidth: 1.75
                      })
                    })
                  ]
                }),
                (0, l.jsx)(o.PY1.div, {
                  ref: q,
                  className: v().listFace,
                  inert: !ec || void 0,
                  "aria-hidden": !ec || void 0,
                  initial: false,
                  animate: ec ? { opacity: 1, y: 0, filter: "blur(0px)" } : {
                    opacity: 0,
                    y: F ? 0 : -6,
                    filter: F ? "blur(0px)" : `blur(${g.subtle}px)`
                  },
                  transition: ec ? {
                    y: b,
                    opacity: { duration: 0.2, ease: _, delay: 0.04 * !F },
                    filter: { duration: 0.22, ease: _, delay: 0.04 }
                  } : { duration: 0.1, ease: y },
                  children: (0, l.jsx)("div", {
                    ref: G,
                    className: v().scroll,
                    children: (0, l.jsxs)("div", {
                      id: z,
                      className: v().options,
                      role: "listbox",
                      "aria-labelledby": V,
                      children: [
                        (0, l.jsx)(o.PY1.span, {
                          className: v().highlight,
                          style: { y: eC, height: eH, opacity: eP },
                          "aria-hidden": "true"
                        }),
                        ey.map((e3) => {
                          let t3 = e3.options.map((e4) => {
                            let t4 = ea.get(e4.value) ?? 0, r3 = e4.value === eo, a2 = e4.value === eb;
                            return (0, l.jsxs)(
                              "div",
                              {
                                id: U(t4),
                                role: "option",
                                "aria-selected": r3,
                                "aria-disabled": e4.disabled || void 0,
                                className: v().option,
                                "data-active": a2 || void 0,
                                ref: (t5) => {
                                  t5 ? et.current.set(e4.value, t5) : et.current.delete(e4.value);
                                },
                                onPointerMove: (t5) => {
                                  "mouse" !== t5.pointerType || e4.disabled || e4.value === eb || em(e4.value);
                                },
                                onPointerDown: (e5) => e5.preventDefault(),
                                onClick: (t5) => eY(e4, t5.currentTarget),
                                children: [
                                  (0, l.jsxs)("span", {
                                    className: v().optionValue,
                                    "data-part": "value",
                                    children: [
                                      e4.icon && (0, l.jsx)("span", {
                                        className: v().icon,
                                        "aria-hidden": "true",
                                        children: e4.icon
                                      }),
                                      (0, l.jsx)("span", {
                                        className: v().valueText,
                                        children: e4.label
                                      })
                                    ]
                                  }),
                                  e4.meta && (0, l.jsx)("span", {
                                    className: v().meta,
                                    children: e4.meta
                                  }),
                                  (0, l.jsx)("span", {
                                    className: v().check,
                                    "data-on": r3 || void 0,
                                    "aria-hidden": "true",
                                    children: (0, l.jsx)(h.A, {
                                      size: 16,
                                      strokeWidth: 1.75
                                    })
                                  })
                                ]
                              },
                              e4.value
                            );
                          });
                          return e3.label ? (0, l.jsxs)(
                            "div",
                            {
                              role: "group",
                              "aria-labelledby": `${O}-${e3.key}`,
                              className: v().group,
                              children: [
                                (0, l.jsx)("div", {
                                  id: `${O}-${e3.key}`,
                                  className: v().groupLabel,
                                  role: "presentation",
                                  children: e3.label
                                }),
                                t3
                              ]
                            },
                            e3.key
                          ) : (0, l.jsx)(
                            "div",
                            {
                              role: "presentation",
                              className: v().group,
                              children: t3
                            },
                            e3.key
                          );
                        }),
                        0 === ew && (0, l.jsxs)("p", {
                          className: v().empty,
                          children: ["No matches for \u201C", ed.trim(), "\u201D"]
                        })
                      ]
                    })
                  })
                })
              ]
            })
          ]
        }),
        A && (0, l.jsx)("input", { type: "hidden", name: A, value: eo ?? "" }),
        (0, l.jsx)("span", {
          className: v().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eW
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}