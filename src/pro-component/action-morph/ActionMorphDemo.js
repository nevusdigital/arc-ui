function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ActionMorphDemo: () => G, default: () => Z });
  var i = a(95155), r = a(12115), n = a(18310), o = a(80642), s = a(25354), l = a(16420), c = a(82879), d = a(46395), u = a(64577), h = a(79196), m = a(28245), p = a(92171), f = a(2125), _ = a(9005), y = a(31966), b = a(35484), x = a(21759), v = a(92571), k = a(7770), j = a(75434), g = a.n(j);
  let { blur: w } = k.T, N = [...k.T.ease.enter], A = [...k.T.ease.standard], S = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, L = S(0.46, 0), C = S(0.38, 0), P = S(0.28, 0), T = S(0.4, 0), M = S(0.2, 0), E = "menu", R = (e2) => "fab" === e2 ? 0 : e2 === E ? 1 : 2, z = () => () => {
  }, D = {
    hidden: (e2) => e2 ? { opacity: 0, x: 28 * e2, scale: 1, filter: `blur(${w.soft}px)` } : { opacity: 0, x: 0, scale: 0.9, filter: `blur(${w.soft}px)` },
    shown: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: T,
        scale: L,
        opacity: { duration: 0.22, ease: N, delay: 0.05 },
        filter: { duration: 0.24, ease: N, delay: 0.05 },
        delayChildren: 0.06,
        staggerChildren: k.T.stagger.item
      }
    },
    gone: (e2) => e2 ? {
      opacity: 0,
      x: -(28 * e2 * 0.7),
      filter: `blur(${w.soft}px)`,
      transition: {
        x: T,
        opacity: { duration: 0.12, ease: A },
        filter: { duration: 0.12, ease: A }
      }
    } : {
      opacity: 0,
      scale: 0.92,
      filter: `blur(${w.soft}px)`,
      transition: { duration: 0.12, ease: A }
    }
  }, Y = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.16 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  }, $ = {
    hidden: { opacity: 0, y: 8 },
    shown: {
      opacity: 1,
      y: 0,
      transition: { y: S(0.36, 0), opacity: { duration: 0.2, ease: N } }
    }
  }, W = { hidden: { opacity: 1 }, shown: { opacity: 1 } };
  function I({
    id: e2,
    direction: t2,
    reduced: a2,
    onSize: n2,
    className: o2,
    children: l2,
    label: c2,
    role: d2
  }) {
    let u2 = (0, r.useRef)(null), m2 = (0, h.tF)();
    return (0, r.useLayoutEffect)(() => {
      let t3 = u2.current;
      if (!t3 || !m2) return;
      let a3 = () => n2(e2, { w: t3.offsetWidth, h: t3.offsetHeight });
      if (a3(), "u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(a3);
      return i2.observe(t3), () => i2.disconnect();
    }, [e2, n2, m2]), (0, i.jsx)(s.PY1.div, {
      ref: u2,
      className: [g().face, o2].filter(Boolean).join(" "),
      "data-face": e2,
      custom: t2,
      role: d2,
      "aria-label": c2,
      variants: a2 ? Y : D,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      inert: !m2 || void 0,
      children: l2
    });
  }
  function F({ done: e2, reduced: t2 }) {
    let [a2] = (0, r.useState)(e2);
    return (0, i.jsx)("span", {
      className: g().glyph,
      "aria-hidden": "true",
      children: (0, i.jsx)(o.N, {
        initial: a2,
        mode: "popLayout",
        children: e2 ? (0, i.jsx)(
          s.PY1.svg,
          {
            viewBox: "0 0 24 24",
            width: 22,
            height: 22,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { opacity: 0, scale: t2 ? 1 : 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: {
              opacity: 0,
              scale: t2 ? 1 : 0.6,
              transition: { duration: 0.12 }
            },
            transition: t2 ? { duration: 0.12 } : M,
            children: (0, i.jsx)(s.PY1.path, {
              d: "M5.5 12.5l4.2 4.2 8.8-9.2",
              initial: { pathLength: +!!t2 },
              animate: { pathLength: 1 },
              transition: {
                duration: 0.32 * !t2,
                ease: N,
                delay: 0.12 * !t2
              }
            })
          },
          "check"
        ) : (0, i.jsx)(
          s.PY1.span,
          {
            className: g().plus,
            initial: {
              opacity: 0,
              rotate: t2 ? 0 : -90,
              scale: t2 ? 1 : 0.6
            },
            animate: { opacity: 1, rotate: 0, scale: 1 },
            exit: {
              opacity: 0,
              rotate: 45 * !t2,
              scale: t2 ? 1 : 0.6,
              transition: { duration: 0.12 }
            },
            transition: t2 ? { duration: 0.12 } : S(0.36, 0),
            children: (0, i.jsx)(f.A, { size: 22, strokeWidth: 1.75 })
          },
          "plus"
        )
      })
    });
  }
  function q({
    actions: e2,
    label: t2 = "Create",
    onSubmit: a2,
    corner: l2 = "end",
    resetAfter: c2 = 1600,
    className: d2
  }) {
    let u2, h2 = (u2 = (0, r.useSyncExternalStore)(
      z,
      () => true,
      () => false
    ), !!(0, n.I)() && u2), f2 = (0, r.useId)(), k2 = (0, r.useRef)(null), j2 = (0, r.useRef)(null), w2 = (0, r.useRef)(null), S2 = (0, r.useRef)(null), [T2, D2] = (0, r.useState)("fab"), [Y2, B2] = (0, r.useState)(0), [K2, H2] = (0, r.useState)(false), [O2, V2] = (0, r.useState)(false), [Q2, U2] = (0, r.useState)(null), [G2, Z2] = (0, r.useState)({}), [X, J] = (0, r.useState)({}), [ee, et] = (0, r.useState)(null), [ea, ei] = (0, r.useState)({ id: 0, text: "" }), er = e2.find((e3) => e3.id === T2), en = er?.composer, eo = er ? G2[er.id] ?? "" : "", es = er && en?.choices ? X[er.id] ?? en.choices.defaultIndex ?? 0 : 0, el = (0, m.d)("100%"), ec = (0, m.d)("100%"), ed = (0, m.d)("50%"), eu = (0, m.d)(1), eh = (0, r.useRef)(/* @__PURE__ */ new Map()), em = (0, r.useRef)({ view: "fab", reduced: false, measured: false }), ep = (0, r.useRef)({ w: 0, h: 0 }), ef = (0, r.useCallback)(() => {
      let e3 = em.current, t3 = eh.current.get(e3.view);
      if (!t3 || !t3.w) return;
      let a3 = "fab" === e3.view ? t3.h / 2 : 24, i2 = ep.current;
      if (0.5 > Math.abs(i2.w - t3.w) && 0.5 > Math.abs(i2.h - t3.h) && e3.measured)
        return;
      if (ep.current = t3, !e3.measured || e3.reduced) {
        el.jump(t3.w), ec.jump(t3.h), ed.jump(a3), e3.measured = true;
        return;
      }
      let r2 = t3.w * t3.h >= i2.w * i2.h ? L : C;
      (0, p.i)(el, t3.w, r2), (0, p.i)(ec, t3.h, r2), (0, p.i)(ed, a3, r2);
    }, [ec, ed, el]), e_ = (0, r.useCallback)(
      (e3, t3) => {
        eh.current.set(e3, t3), e3 === em.current.view && ef();
      },
      [ef]
    );
    (0, r.useLayoutEffect)(() => {
      em.current.view = T2, em.current.reduced = h2, ef();
    }, [ef, h2, T2]);
    let ey = (e3) => {
      if (e3 === T2) return;
      let t3 = R(T2), a3 = R(e3);
      B2(t3 >= 1 && a3 >= 1 ? Math.sign(a3 - t3) || 1 : 0), U2(null), et(null), D2(e3);
    }, eb = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      let e3 = eb.current;
      e3 && (eb.current = null, "fab" === e3 ? j2.current?.focus({ preventScroll: true }) : "field" === e3 ? w2.current?.focus({ preventScroll: true }) : S2.current?.querySelector(`[data-action="${e3}"]`)?.focus({ preventScroll: true }));
    }, [T2]);
    let ex = (e3) => {
      eb.current = "field", ey(e3);
    }, ev = () => {
      eb.current = T2, ey(E);
    }, ek = (0, r.useCallback)((e3 = true) => {
      e3 && k2.current?.contains(document.activeElement) && (eb.current = "fab"), B2(0), U2(null), et(null), D2("fab");
    }, []);
    (0, r.useEffect)(() => {
      if (!K2) return;
      let e3 = window.setTimeout(() => H2(false), c2);
      return () => window.clearTimeout(e3);
    }, [K2, c2]);
    let ej = "fab" !== T2;
    (0, r.useEffect)(() => {
      if (!ej) return;
      let e3 = (e4) => {
        k2.current?.contains(e4.target) || ek(false);
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [ek, ej]);
    let eg = (0, m.d)(0), ew = () => {
      h2 || (0, p.i)(eg, 0, {
        type: "spring",
        stiffness: 900,
        damping: 57,
        velocity: -260
      });
    }, eN = (0, r.useRef)(0), eA = async (e3) => {
      if (e3?.preventDefault(), !er || !en || O2) return;
      let t3 = eo.trim();
      if (!t3) {
        U2(en.emptyHint ?? "Write something first"), ew(), w2.current?.focus();
        return;
      }
      let i2 = ++eN.current;
      V2(true), U2(null);
      try {
        await a2?.({
          action: er.id,
          text: t3,
          choice: en.choices?.options[es]
        });
      } catch {
        if (i2 !== eN.current) return;
        V2(false), U2("Couldn\u2019t save. Try again."), ew();
        return;
      }
      i2 === eN.current && (V2(false), Z2((e4) => ({ ...e4, [er.id]: "" })), k2.current?.contains(document.activeElement) && (eb.current = "fab"), H2(true), B2(0), D2("fab"), ei((e4) => ({ id: e4.id + 1, text: en.successLabel })));
    }, eS = (0, m.d)(0), eL = (0, m.d)(0), eC = (0, m.d)(0);
    (0, r.useLayoutEffect)(() => {
      let e3 = null === ee ? null : S2.current?.querySelector(`[data-index="${ee}"]`);
      e3 ? (0.05 > eC.get() || h2 ? (eS.jump(e3.offsetTop), eL.jump(e3.offsetHeight)) : ((0, p.i)(eS, e3.offsetTop, P), (0, p.i)(eL, e3.offsetHeight, P)), (0, p.i)(eC, 1, { duration: 0.12 * !h2, ease: N })) : (0, p.i)(eC, 0, { duration: 0.14 * !h2, ease: A });
    }, [eC, eL, ee, eS, h2, T2]);
    let eP = () => (0, p.i)(eu, 1, M), eT = h2 ? W : $, eM = `${f2}-menu-title`, eE = `${f2}-${T2}-title`;
    return (0, i.jsxs)("div", {
      ref: k2,
      className: [g().root, d2].filter(Boolean).join(" "),
      "data-corner": l2,
      "data-view": "fab" === T2 ? "fab" : T2 === E ? "menu" : "composer",
      "data-done": K2 || void 0,
      onKeyDown: (e3) => {
        "Escape" !== e3.key || e3.defaultPrevented || "fab" !== T2 && (e3.preventDefault(), T2 === E ? ek() : O2 || ev());
      },
      children: [
        (0, i.jsx)(s.PY1.div, {
          className: g().shape,
          style: { width: el, height: ec, borderRadius: ed, scale: eu },
          children: (0, i.jsxs)(o.N, {
            initial: false,
            custom: Y2,
            children: [
              "fab" === T2 && (0, i.jsx)(
                I,
                {
                  id: "fab",
                  direction: Y2,
                  reduced: h2,
                  onSize: e_,
                  className: g().fabFace,
                  children: (0, i.jsx)("button", {
                    ref: j2,
                    type: "button",
                    className: g().fab,
                    "aria-label": K2 ? `${t2}. ${ea.text}` : t2,
                    "aria-haspopup": "menu",
                    "aria-expanded": false,
                    onClick: () => {
                      eb.current = e2[0]?.id ?? null, H2(false), ey(E);
                    },
                    onPointerDown: (e3) => {
                      0 === e3.button && (h2 || (0, p.i)(eu, 0.94, M));
                    },
                    onPointerUp: eP,
                    onPointerLeave: eP,
                    onPointerCancel: eP,
                    children: (0, i.jsx)(F, { done: K2, reduced: h2 })
                  })
                },
                "fab"
              ),
              T2 === E && (0, i.jsxs)(
                I,
                {
                  id: E,
                  direction: Y2,
                  reduced: h2,
                  onSize: e_,
                  className: g().menuFace,
                  children: [
                    (0, i.jsxs)(s.PY1.div, {
                      className: g().header,
                      variants: eT,
                      children: [
                        (0, i.jsx)("p", {
                          id: eM,
                          className: g().title,
                          children: t2
                        }),
                        (0, i.jsx)("button", {
                          type: "button",
                          className: g().iconButton,
                          "aria-label": "Close",
                          onClick: () => ek(),
                          children: (0, i.jsx)(_.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      ref: S2,
                      className: g().menu,
                      role: "menu",
                      "aria-labelledby": eM,
                      onKeyDown: (t3) => {
                        let a3 = Array.from(
                          t3.currentTarget.querySelectorAll(
                            "[role='menuitem']"
                          )
                        ), i2 = a3.indexOf(document.activeElement), r2 = { ArrowDown: 1, ArrowUp: -1 }, n2 = null;
                        if (t3.key in r2)
                          n2 = i2 < 0 ? 0 : (i2 + r2[t3.key] + a3.length) % a3.length;
                        else if ("Home" === t3.key) n2 = 0;
                        else if ("End" === t3.key) n2 = a3.length - 1;
                        else if (1 === t3.key.length && !t3.metaKey && !t3.ctrlKey && !t3.altKey) {
                          let a4 = e2.find(
                            (e3) => e3.shortcut?.toLowerCase() === t3.key.toLowerCase()
                          );
                          a4 && (t3.preventDefault(), ex(a4.id));
                          return;
                        }
                        null !== n2 && (t3.preventDefault(), a3[n2]?.focus());
                      },
                      onPointerLeave: () => et(null),
                      children: [
                        (0, i.jsx)(s.PY1.span, {
                          className: g().highlight,
                          style: { y: eS, height: eL, opacity: eC },
                          "aria-hidden": "true"
                        }),
                        e2.map(
                          (e3, t3) => (0, i.jsxs)(
                            s.PY1.button,
                            {
                              type: "button",
                              role: "menuitem",
                              className: g().item,
                              "data-index": t3,
                              "data-action": e3.id,
                              variants: eT,
                              "aria-keyshortcuts": e3.shortcut,
                              onClick: () => ex(e3.id),
                              onPointerMove: (e4) => {
                                "mouse" === e4.pointerType && ee !== t3 && et(t3);
                              },
                              onFocus: () => et(t3),
                              children: [
                                (0, i.jsx)("span", {
                                  className: g().itemIcon,
                                  "aria-hidden": "true",
                                  children: e3.icon
                                }),
                                (0, i.jsxs)("span", {
                                  className: g().itemText,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: g().itemLabel,
                                      children: e3.label
                                    }),
                                    e3.description && (0, i.jsx)("span", {
                                      className: g().itemDescription,
                                      children: e3.description
                                    })
                                  ]
                                }),
                                e3.shortcut && (0, i.jsx)("kbd", {
                                  className: g().kbd,
                                  "aria-hidden": "true",
                                  children: e3.shortcut.toUpperCase()
                                })
                              ]
                            },
                            e3.id
                          )
                        )
                      ]
                    })
                  ]
                },
                E
              ),
              er && en && (0, i.jsx)(
                I,
                {
                  id: er.id,
                  direction: Y2,
                  reduced: h2,
                  onSize: e_,
                  className: g().composerFace,
                  children: (0, i.jsxs)("form", {
                    className: g().form,
                    "aria-labelledby": eE,
                    onSubmit: eA,
                    "aria-busy": O2 || void 0,
                    children: [
                      (0, i.jsxs)(s.PY1.div, {
                        className: g().header,
                        variants: eT,
                        children: [
                          (0, i.jsx)("button", {
                            type: "button",
                            className: g().iconButton,
                            "aria-label": "Back to actions",
                            onClick: ev,
                            disabled: O2,
                            children: (0, i.jsx)(y.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          }),
                          (0, i.jsx)("p", {
                            id: eE,
                            className: g().title,
                            children: en.title
                          }),
                          (0, i.jsx)("button", {
                            type: "button",
                            className: g().iconButton,
                            "aria-label": "Close",
                            onClick: () => ek(),
                            children: (0, i.jsx)(_.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      }),
                      (0, i.jsx)(s.PY1.div, {
                        variants: eT,
                        style: { x: eg },
                        children: en.multiline ? (0, i.jsx)("textarea", {
                          ref: w2,
                          className: `${g().field} ${g().textarea}`,
                          rows: 3,
                          placeholder: en.placeholder,
                          "aria-label": en.title,
                          value: eo,
                          readOnly: O2,
                          "aria-invalid": !!Q2 || void 0,
                          "aria-describedby": Q2 ? `${f2}-error` : void 0,
                          "aria-keyshortcuts": "Meta+Enter Control+Enter",
                          onChange: (e3) => {
                            Z2((t3) => ({
                              ...t3,
                              [er.id]: e3.target.value
                            })), U2(null);
                          },
                          onKeyDown: (e3) => {
                            en?.multiline && "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && (e3.preventDefault(), eA());
                          }
                        }) : (0, i.jsx)("input", {
                          ref: w2,
                          className: g().field,
                          type: "text",
                          placeholder: en.placeholder,
                          "aria-label": en.title,
                          value: eo,
                          readOnly: O2,
                          autoComplete: "off",
                          "aria-invalid": !!Q2 || void 0,
                          "aria-describedby": Q2 ? `${f2}-error` : void 0,
                          onChange: (e3) => {
                            Z2((t3) => ({
                              ...t3,
                              [er.id]: e3.target.value
                            })), U2(null);
                          }
                        })
                      }),
                      en.choices && (0, i.jsxs)(s.PY1.div, {
                        variants: eT,
                        className: g().choiceBlock,
                        children: [
                          (0, i.jsx)("span", {
                            id: `${f2}-choices`,
                            className: g().choiceLabel,
                            children: en.choices.label
                          }),
                          (0, i.jsx)("div", {
                            className: g().choices,
                            role: "radiogroup",
                            "aria-labelledby": `${f2}-choices`,
                            onKeyDown: (e3) => {
                              if (!er || !en?.choices) return;
                              let t3 = en.choices.options.length, a3 = {
                                ArrowRight: 1,
                                ArrowDown: 1,
                                ArrowLeft: -1,
                                ArrowUp: -1
                              };
                              if (!(e3.key in a3)) return;
                              e3.preventDefault();
                              let i2 = (es + a3[e3.key] + t3) % t3;
                              J((e4) => ({ ...e4, [er.id]: i2 })), e3.currentTarget.querySelectorAll("[role='radio']")[i2]?.focus();
                            },
                            style: { "--count": en.choices.options.length },
                            children: en.choices.options.map(
                              (e3, t3) => (0, i.jsxs)(
                                "button",
                                {
                                  type: "button",
                                  role: "radio",
                                  "aria-checked": t3 === es,
                                  tabIndex: t3 === es ? 0 : -1,
                                  className: g().choice,
                                  disabled: O2,
                                  onClick: () => J((e4) => ({ ...e4, [er.id]: t3 })),
                                  children: [
                                    t3 === es && (0, i.jsx)(s.PY1.span, {
                                      layoutId: `${f2}-choice-${er.id}`,
                                      className: g().choicePill,
                                      transition: h2 ? { duration: 0 } : P,
                                      "aria-hidden": "true"
                                    }),
                                    (0, i.jsx)("span", {
                                      className: g().choiceText,
                                      children: e3
                                    })
                                  ]
                                },
                                e3
                              )
                            )
                          })
                        ]
                      }),
                      (0, i.jsxs)(s.PY1.div, {
                        variants: eT,
                        className: g().footer,
                        children: [
                          (0, i.jsx)("span", {
                            id: `${f2}-error`,
                            className: g().status,
                            "aria-live": "polite",
                            children: (0, i.jsx)(o.N, {
                              initial: false,
                              mode: "popLayout",
                              children: Q2 && (0, i.jsxs)(
                                s.PY1.span,
                                {
                                  className: g().error,
                                  initial: { opacity: 0, y: 4 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: {
                                    opacity: 0,
                                    transition: { duration: 0.1 }
                                  },
                                  transition: h2 ? { duration: 0.1 } : P,
                                  children: [
                                    (0, i.jsx)(b.A, {
                                      size: 14,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    Q2
                                  ]
                                },
                                Q2
                              )
                            })
                          }),
                          (0, i.jsxs)("button", {
                            type: "submit",
                            className: g().submit,
                            "aria-disabled": O2 || void 0,
                            children: [
                              (0, i.jsxs)("span", {
                                className: g().submitFace,
                                "data-on": !O2 || void 0,
                                children: [
                                  en.submitLabel,
                                  (0, i.jsx)(x.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                ]
                              }),
                              (0, i.jsxs)("span", {
                                className: g().submitFace,
                                "data-on": O2 || void 0,
                                "aria-hidden": !O2,
                                children: [
                                  (0, i.jsx)(v.A, {
                                    className: g().spinner,
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  "Saving"
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                },
                er.id
              )
            ]
          })
        }),
        (0, i.jsx)("span", {
          className: g().srOnly,
          role: "status",
          "aria-live": "polite",
          children: (0, i.jsx)("span", { children: ea.text }, ea.id)
        })
      ]
    });
  }
  var B = a(66558), K = a(51729), H = a.n(K);
  let O = { strokeWidth: 1.75 }, V = [
    {
      id: "task",
      label: "Task",
      description: "Add to your list",
      icon: (0, i.jsx)(l.A, { ...O }),
      shortcut: "t",
      composer: {
        title: "New task",
        placeholder: "What needs doing?",
        choices: {
          label: "Due",
          options: ["Today", "Tomorrow", "Next week"]
        },
        submitLabel: "Add task",
        successLabel: "Task added",
        emptyHint: "Give the task a title"
      }
    },
    {
      id: "note",
      label: "Note",
      description: "Private to you",
      icon: (0, i.jsx)(c.A, { ...O }),
      shortcut: "n",
      composer: {
        title: "New note",
        placeholder: "Write it down",
        multiline: true,
        submitLabel: "Save note",
        successLabel: "Note saved",
        emptyHint: "The note is empty"
      }
    },
    {
      id: "reminder",
      label: "Reminder",
      description: "Nudge me at a set time",
      icon: (0, i.jsx)(d.A, { ...O }),
      shortcut: "r",
      composer: {
        title: "New reminder",
        placeholder: "Remind me to\u2026",
        choices: {
          label: "When",
          options: ["In 1 hour", "5:00 PM", "Tomorrow"],
          defaultIndex: 1
        },
        submitLabel: "Set reminder",
        successLabel: "Reminder set",
        emptyHint: "Say what to remind you about"
      }
    }
  ], Q = [
    {
      id: 4,
      kind: "task",
      text: "Review Emma\u2019s onboarding flow",
      meta: "Today"
    },
    {
      id: 3,
      kind: "reminder",
      text: "Call Andre about the Q3 budget",
      meta: "4:30 PM"
    },
    {
      id: 2,
      kind: "task",
      text: "Send launch notes to Diane",
      meta: "Tomorrow",
      done: true
    },
    { id: 1, kind: "note", text: "Pricing page: lead with the free tier" }
  ], U = [
    { value: "succeed", label: "Saving works" },
    { value: "fail", label: "Saving fails" }
  ];
  function G() {
    let e2 = (0, n.I)(), [t2, a2] = (0, r.useState)(Q), [l2, h2] = (0, r.useState)("succeed"), m2 = t2.filter((e3) => "task" === e3.kind && !e3.done).length;
    return (0, i.jsxs)("div", {
      className: H().demo,
      children: [
        (0, i.jsxs)("div", {
          className: H().stage,
          children: [
            (0, i.jsxs)("header", {
              className: H().header,
              children: [
                (0, i.jsx)("h3", { className: H().title, children: "Today" }),
                (0, i.jsxs)("p", {
                  className: H().count,
                  "aria-live": "polite",
                  children: [
                    (0, i.jsx)("span", { className: H().number, children: m2 }),
                    " open ",
                    1 === m2 ? "task" : "tasks"
                  ]
                })
              ]
            }),
            (0, i.jsx)("ul", {
              className: H().list,
              children: (0, i.jsx)(o.N, {
                initial: false,
                children: t2.map(
                  (t3) => (0, i.jsxs)(
                    s.PY1.li,
                    {
                      layout: !e2 && "position",
                      className: H().item,
                      initial: e2 ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(4px)" },
                      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                      exit: { opacity: 0 },
                      transition: e2 ? { duration: 0.15 } : k.T.spring.smooth,
                      children: [
                        "task" === t3.kind ? (0, i.jsx)("button", {
                          type: "button",
                          role: "checkbox",
                          "aria-checked": !!t3.done,
                          "aria-label": `Mark \u201C${t3.text}\u201D done`,
                          className: H().check,
                          "data-on": t3.done || void 0,
                          onClick: () => {
                            let e3;
                            return e3 = t3.id, a2(
                              (t4) => t4.map(
                                (t5) => t5.id === e3 ? { ...t5, done: !t5.done } : t5
                              )
                            );
                          },
                          children: (0, i.jsx)(u.A, {
                            size: 12,
                            strokeWidth: 2.5,
                            "aria-hidden": "true"
                          })
                        }) : (0, i.jsx)("span", {
                          className: H().kind,
                          "aria-hidden": "true",
                          children: "note" === t3.kind ? (0, i.jsx)(c.A, { size: 16, ...O }) : (0, i.jsx)(d.A, { size: 16, ...O })
                        }),
                        (0, i.jsx)("span", {
                          className: H().text,
                          "data-done": t3.done || void 0,
                          children: t3.text
                        }),
                        t3.meta && (0, i.jsx)("span", {
                          className: H().meta,
                          children: t3.meta
                        })
                      ]
                    },
                    t3.id
                  )
                )
              })
            }),
            (0, i.jsx)("div", {
              className: H().corner,
              children: (0, i.jsx)(q, {
                actions: V,
                label: "Create",
                onSubmit: ({ action: e3, text: t3, choice: i2 }) => new Promise((r2, n2) => {
                  window.setTimeout(() => {
                    "fail" === l2 ? n2(Error("Simulated failure")) : (a2((a3) => [
                      {
                        id: Math.max(0, ...a3.map((e4) => e4.id)) + 1,
                        kind: e3,
                        text: t3,
                        meta: i2
                      },
                      ...a3
                    ]), r2());
                  }, 650);
                })
              })
            })
          ]
        }),
        (0, i.jsx)("div", {
          className: H().controls,
          children: (0, i.jsx)(B.A, {
            label: "Save result",
            options: U,
            value: l2,
            onValueChange: h2
          })
        })
      ]
    });
  }
  let Z = G;
}

__m(__module,__exports,__require);
}