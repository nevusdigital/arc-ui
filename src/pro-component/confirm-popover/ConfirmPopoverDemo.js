function(__module,__exports,__require){
"use strict";
function __m(e, r, t) {
  "use strict";
  t.r(r), t.d(r, { ConfirmPopoverDemo: () => k, default: () => N });
  var n = t(95155), i = t(12115), a = t(20508), o = t(25879), s = t(18310), l = t(28245), c = t(92171), d = t(55809), u = t(25354), p = t(80642), m = t(64577), f = t(35484), h = t(7770), v = t(4330), g = t.n(v);
  let _ = { duration: 0 }, x = (e2) => e2.trim().toLowerCase();
  function y({
    children: e2,
    icon: r2,
    title: t2,
    description: a2,
    confirmText: o2,
    confirmLabel: v2 = "Delete",
    cancelLabel: w2 = "Cancel",
    pendingLabel: b2 = "Deleting",
    successLabel: j2 = "Deleted",
    errorTitle: k2 = "That didn't work",
    retryLabel: N2 = "Try again",
    tone: T = "danger",
    onConfirm: A,
    onCancel: C,
    onDone: E,
    onError: R,
    open: L,
    defaultOpen: S = false,
    onOpenChange: M,
    onPhaseChange: D,
    align: P = "start",
    side: z = "auto",
    width: F = 320,
    resultDuration: Y = 1600,
    disabled: $,
    className: G,
    style: q
  }) {
    let W = (0, s.I)() ?? false, J = (0, i.useId)(), O = `${J}-title`, H = `${J}-desc`, I = `${J}-input`, [B, K] = (0, i.useState)(S ? "confirming" : "idle"), [U, V] = (0, i.useState)(S), [X, Z] = (0, i.useState)(null), [Q, ee] = (0, i.useState)(0), [er, et] = (0, i.useState)(""), [en, ei] = (0, i.useState)(null), [ea, eo] = (0, i.useState)(""), es = (0, i.useRef)(null), el = (0, i.useRef)(null), ec = (0, i.useRef)(null), ed = (0, i.useRef)(null), eu = (0, i.useRef)(null), ep = (0, i.useRef)(null), em = (0, i.useRef)(null), ef = (0, i.useRef)(0), eh = (0, i.useRef)(void 0), ev = (0, i.useRef)(false), eg = (0, i.useRef)(null), e_ = (0, l.d)(0), ex = (0, l.d)(0), ey = (0, i.useCallback)(() => {
      W || (0, c.i)(ex, [0, -7, 6, -4, 3, -1, 0], {
        duration: 0.42,
        ease: h.T.ease.standard
      });
    }, [W, ex]), ew = (0, d.G)(
      e_,
      (e3) => `inset(0 ${(1 - Math.min(1, Math.max(0, e3))) * 100}% 0 0)`
    ), eb = (0, l.d)(0), ej = (0, l.d)(0), ek = (0, d.G)(eb, (e3) => -e3), eN = (0, d.G)(() => ej.get() - eb.get()), eT = (0, i.useCallback)(
      (e3) => {
        K(e3), D?.(e3);
      },
      [D]
    ), eA = (0, i.useCallback)(() => {
      let e3 = el.current;
      if (!e3) return null;
      let r3 = e3.getBoundingClientRect(), t3 = document.documentElement.clientWidth, n2 = window.innerHeight, i2 = Math.max(r3.width, Math.min(F, t3 - 32)), a3 = Math.min(
        Math.max(
          "end" === P ? r3.width - i2 : "center" === P ? (r3.width - i2) / 2 : 0,
          16 - r3.left
        ),
        t3 - 16 - i2 - r3.left
      ), o3 = 0.5 > Math.abs(a3 - (r3.width - i2)) && a3 < 0, s2 = "top" === z || "auto" === z && n2 - r3.bottom < 280 && r3.top > n2 - r3.bottom;
      return {
        tw: r3.width,
        th: r3.height,
        radius: parseFloat(getComputedStyle(e3).borderTopLeftRadius) || 14,
        w: i2,
        x: o3 ? 0 : a3,
        up: s2,
        right: o3
      };
    }, [P, z, F]), eC = "confirming" === B || "working" === B || "error" === B, eE = (0, i.useCallback)(() => {
      let e3 = eA();
      e3 && (window.clearTimeout(eh.current), Z(e3), ej.set(e3.x), et(""), eo(""), ei(null), V(true), eT("confirming"), e_.set(+!o2));
    }, [o2, e_, eA, ej, eT]), eR = (0, i.useCallback)(
      (e3 = true) => {
        ev.current = e3, e3 && es.current?.contains(document.activeElement) && ec.current?.focus({ preventScroll: true }), eT("idle");
      },
      [eT]
    );
    (0, i.useEffect)(() => {
      !U && ev.current && (ev.current = false, el.current?.focus({ preventScroll: true }));
    }, [U]), (0, i.useEffect)(() => {
      if ("idle" !== B || !U) return;
      let e3 = window.setTimeout(() => V(false), 900);
      return () => window.clearTimeout(e3);
    }, [B, U]);
    let eL = (0, i.useRef)(L);
    (0, i.useEffect)(() => {
      if (void 0 === L || L === eL.current) return;
      eL.current = L;
      let e3 = requestAnimationFrame(() => {
        L && !eC ? eE() : L || "confirming" !== B && "error" !== B || eR(false);
      });
      return () => cancelAnimationFrame(e3);
    }, [L, eC, B, eE, eR]);
    let eS = (0, i.useCallback)(() => {
      ("confirming" === B || "error" === B) && (eL.current = false, C?.(), M?.(false), eR());
    }, [eR, C, M, B]);
    (0, i.useLayoutEffect)(() => {
      let e3 = ed.current;
      if (!e3 || !eC) return;
      ee(e3.offsetHeight);
      let r3 = new ResizeObserver(() => ee(e3.offsetHeight));
      return r3.observe(e3), () => r3.disconnect();
    }, [eC, U]), (0, i.useEffect)(() => {
      if (!eC) return;
      let e3 = () => {
        let e4 = eA();
        e4 && (Z(e4), ej.set(e4.x));
      };
      return window.addEventListener("resize", e3), () => window.removeEventListener("resize", e3);
    }, [eC, eA, ej]), (0, i.useEffect)(() => {
      if ("confirming" !== B) return;
      let e3 = requestAnimationFrame(
        () => (eu.current ?? ep.current)?.focus({ preventScroll: true })
      );
      return () => cancelAnimationFrame(e3);
    }, [B]), (0, i.useEffect)(() => {
      if ("confirming" !== B && "error" !== B) return;
      let e3 = (e4) => {
        let r3 = es.current;
        r3 && e4.target instanceof Node && !r3.contains(e4.target) && eS();
      };
      return document.addEventListener("pointerdown", e3, true), () => document.removeEventListener("pointerdown", e3, true);
    }, [B, eS]), (0, i.useEffect)(
      () => () => {
        em.current?.abort(), window.clearTimeout(eh.current);
      },
      []
    );
    let eM = !o2 || x(er) === x(o2), eD = async (e3) => {
      if (e3?.preventDefault(), "working" === B) return;
      if (!eM) {
        ey(), eu.current?.focus();
        return;
      }
      let r3 = ++ef.current;
      em.current?.abort();
      let t3 = new AbortController();
      em.current = t3, eo(""), ei(null), (0, c.i)(
        e_,
        0,
        W ? _ : { ...h.T.spring.smooth, visualDuration: 0.3 }
      ), eT("working"), ec.current?.focus({ preventScroll: true });
      try {
        if (await A?.({
          setProgress: (e4) => {
            if (ef.current !== r3) return;
            let t4 = Math.min(1, Math.max(0, e4));
            ei(t4), (0, c.i)(e_, t4, W ? _ : h.T.spring.smooth);
          },
          signal: t3.signal
        }), ef.current !== r3)
          return;
        await (0, c.i)(
          e_,
          1,
          W ? _ : { ...h.T.spring.smooth, visualDuration: 0.25 }
        ), eT("success"), M?.(false), eL.current = false, eh.current = window.setTimeout(() => {
          let e4 = document.activeElement;
          ev.current = e4 === document.body || !!es.current?.contains(e4), eT("idle"), E?.();
        }, Y);
      } catch (e4) {
        if (ef.current !== r3 || t3.signal.aborted) return;
        R?.(e4), eo(e4 instanceof Error ? e4.message : "string" == typeof e4 ? e4 : ""), (0, c.i)(e_, 1, W ? _ : h.T.spring.smooth), eT("error"), ey(), requestAnimationFrame(
          () => eg.current?.focus({ preventScroll: true })
        );
      }
    }, eP = X ? eC ? { width: X.w, height: Q || X.th, x: X.x, borderRadius: 22 } : { width: X.tw, height: X.th, x: 0, borderRadius: X.radius } : void 0, ez = W ? _ : eC ? h.T.spring.morph : { ...h.T.spring.smooth, visualDuration: 0.36 }, eF = eC ? "panel" : "success" === B ? "success" : "trigger", eY = (e3 = 0) => W ? { duration: h.T.duration.fast } : {
      ...h.T.spring.snappy,
      delay: e3,
      filter: { duration: 0.2, delay: e3 }
    }, e$ = "confirming" === B ? "" : "working" === B ? `${b2}${null !== en ? `, ${Math.round(100 * en)} percent` : ""}` : "success" === B ? j2 : "error" === B ? `${"string" == typeof k2 ? k2 : "Failed"}. ${ea}` : "", eG = "working" === B ? `${b2}\u2026` : "error" === B ? N2 : v2;
    return (0, n.jsxs)("div", {
      ref: es,
      className: [g().root, G].filter(Boolean).join(" "),
      style: q,
      "data-tone": T,
      "data-phase": B,
      children: [
        (0, n.jsxs)("button", {
          ref: el,
          type: "button",
          className: g().trigger,
          onClick: () => {
            $ || eC || (eL.current = true, eE(), M?.(true));
          },
          disabled: $,
          "aria-haspopup": "dialog",
          "aria-expanded": eC,
          "data-hidden": U || void 0,
          tabIndex: U ? -1 : void 0,
          children: [
            r2 ? (0, n.jsx)("span", {
              className: g().icon,
              "aria-hidden": true,
              children: r2
            }) : null,
            (0, n.jsx)("span", { children: e2 })
          ]
        }),
        U && X ? (0, n.jsx)(u.PY1.div, {
          ref: ec,
          className: g().surface,
          "data-shape": eF,
          "data-up": X.up || void 0,
          "data-right": X.right || void 0,
          role: eC ? "alertdialog" : void 0,
          "aria-modal": !eC && void 0,
          "aria-labelledby": eC ? O : void 0,
          "aria-describedby": eC ? H : void 0,
          "aria-busy": "working" === B || void 0,
          tabIndex: -1,
          style: { x: eb },
          initial: {
            width: X.tw,
            height: X.th,
            x: 0,
            borderRadius: X.radius
          },
          animate: eP,
          transition: ez,
          onAnimationComplete: () => {
            "idle" === B && V(false);
          },
          onKeyDown: (e3) => {
            if ("Escape" === e3.key) {
              e3.stopPropagation(), e3.preventDefault(), eS();
              return;
            }
            if ("Tab" !== e3.key) return;
            let r3 = [
              ...e3.currentTarget.querySelectorAll(
                "button:not([disabled]), input:not([disabled])"
              )
            ].filter((e4) => !e4.closest("[inert]"));
            if (!r3.length) return void e3.preventDefault();
            let t3 = r3[0], n2 = r3[r3.length - 1];
            e3.shiftKey && (document.activeElement === t3 || document.activeElement === e3.currentTarget) ? (e3.preventDefault(), n2.focus()) : e3.shiftKey || document.activeElement !== n2 || (e3.preventDefault(), t3.focus());
          },
          children: (0, n.jsxs)(p.N, {
            initial: false,
            children: [
              "trigger" === eF ? (0, n.jsxs)(
                u.PY1.span,
                {
                  className: g().faceTrigger,
                  style: { width: X.tw, height: X.th, x: ek },
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: h.T.duration.instant }
                  },
                  transition: eY(0.08),
                  "aria-hidden": true,
                  children: [
                    r2 ? (0, n.jsx)("span", {
                      className: g().icon,
                      children: r2
                    }) : null,
                    (0, n.jsx)("span", { children: e2 })
                  ]
                },
                "trigger"
              ) : null,
              "success" === eF ? (0, n.jsxs)(
                u.PY1.span,
                {
                  className: g().faceSuccess,
                  style: { width: X.tw, height: X.th, x: ek },
                  initial: W ? { opacity: 0 } : {
                    opacity: 0,
                    scale: 0.9,
                    filter: `blur(${h.T.blur.soft}px)`
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                  },
                  exit: {
                    opacity: 0,
                    transition: { duration: h.T.duration.instant }
                  },
                  transition: eY(0.1),
                  children: [
                    (0, n.jsx)(u.PY1.span, {
                      className: g().check,
                      initial: !W && { scale: 0.4, rotate: -30 },
                      animate: { scale: 1, rotate: 0 },
                      transition: W ? _ : { ...h.T.spring.morph, delay: 0.12 },
                      children: (0, n.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 2.25,
                        "aria-hidden": true
                      })
                    }),
                    (0, n.jsx)("span", { children: j2 })
                  ]
                },
                "success"
              ) : null,
              "panel" === eF ? (0, n.jsx)(
                u.PY1.div,
                {
                  ref: ed,
                  className: g().panel,
                  "data-up": X.up || void 0,
                  style: { width: X.w, x: eN },
                  initial: W ? { opacity: 0 } : {
                    opacity: 0,
                    y: X.up ? 6 : -6,
                    filter: `blur(${h.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: W ? { opacity: 0 } : {
                    opacity: 0,
                    filter: `blur(${h.T.blur.subtle}px)`,
                    transition: { duration: h.T.duration.instant }
                  },
                  transition: eY(0.06),
                  children: (0, n.jsxs)(u.PY1.form, {
                    className: g().form,
                    onSubmit: eD,
                    style: { x: ex },
                    noValidate: true,
                    children: [
                      (0, n.jsxs)("div", {
                        className: g().copy,
                        children: [
                          (0, n.jsx)("h2", {
                            id: O,
                            className: g().title,
                            children: t2
                          }),
                          a2 ? (0, n.jsx)("p", {
                            id: H,
                            className: g().description,
                            children: a2
                          }) : null
                        ]
                      }),
                      o2 ? (0, n.jsxs)("div", {
                        className: g().field,
                        children: [
                          (0, n.jsxs)("label", {
                            htmlFor: I,
                            className: g().fieldLabel,
                            children: [
                              "Type ",
                              (0, n.jsx)("span", {
                                className: g().phrase,
                                children: o2
                              }),
                              " to confirm"
                            ]
                          }),
                          (0, n.jsx)("input", {
                            ref: eu,
                            id: I,
                            className: g().input,
                            value: er,
                            onChange: (e3) => ((e4) => {
                              if (et(e4), !o2) return;
                              let r3 = x(o2), t3 = e4.trimStart().toLowerCase(), n2 = 0;
                              for (; n2 < t3.length && n2 < r3.length && t3[n2] === r3[n2]; )
                                n2++;
                              let i2 = n2 === t3.length || x(e4) === r3 ? n2 / r3.length : 0;
                              (0, c.i)(
                                e_,
                                i2,
                                W ? _ : h.T.spring.snappy
                              );
                            })(e3.target.value),
                            placeholder: o2,
                            autoComplete: "off",
                            autoCapitalize: "off",
                            autoCorrect: "off",
                            spellCheck: false,
                            disabled: "working" === B,
                            "aria-invalid": er.length > 0 && !eM || void 0
                          })
                        ]
                      }) : null,
                      (0, n.jsx)(p.N, {
                        initial: false,
                        children: "error" === B ? (0, n.jsx)(
                          u.PY1.div,
                          {
                            className: g().errorWrap,
                            initial: W ? { opacity: 0 } : { opacity: 0, height: 0 },
                            animate: {
                              opacity: 1,
                              height: "auto"
                            },
                            exit: W ? { opacity: 0 } : { opacity: 0, height: 0 },
                            transition: W ? _ : h.T.spring.smooth,
                            children: (0, n.jsxs)("p", {
                              className: g().error,
                              role: "alert",
                              children: [
                                (0, n.jsx)(f.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": true
                                }),
                                (0, n.jsxs)("span", {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: g().errorTitle,
                                      children: k2
                                    }),
                                    ea ? (0, n.jsx)("span", {
                                      className: g().errorText,
                                      children: ea
                                    }) : null
                                  ]
                                })
                              ]
                            })
                          },
                          "error"
                        ) : null
                      }),
                      (0, n.jsxs)("div", {
                        className: g().actions,
                        children: [
                          (0, n.jsx)(u.PY1.span, {
                            className: g().cancelSlot,
                            initial: false,
                            animate: "working" === B ? {
                              flexGrow: 0,
                              opacity: 0,
                              marginRight: 0
                            } : {
                              flexGrow: 1,
                              opacity: 1,
                              marginRight: 8
                            },
                            transition: W ? _ : h.T.spring.smooth,
                            inert: "working" === B,
                            children: (0, n.jsx)("button", {
                              ref: ep,
                              type: "button",
                              className: g().cancel,
                              onClick: eS,
                              children: w2
                            })
                          }),
                          (0, n.jsxs)("button", {
                            ref: eg,
                            type: "submit",
                            className: g().confirm,
                            "data-locked": !eM || void 0,
                            "data-working": "working" === B || void 0,
                            "data-indeterminate": "working" === B && null === en || void 0,
                            "aria-disabled": !eM || "working" === B || void 0,
                            children: [
                              (0, n.jsxs)("span", {
                                className: g().confirmLabel,
                                children: [
                                  (0, n.jsx)("span", { children: eG }),
                                  "working" === B && null !== en ? (0, n.jsxs)("span", {
                                    className: g().percent,
                                    children: [
                                      Math.round(100 * en),
                                      "%"
                                    ]
                                  }) : null
                                ]
                              }),
                              (0, n.jsx)(u.PY1.span, {
                                className: g().fill,
                                style: { clipPath: ew },
                                "aria-hidden": true,
                                children: (0, n.jsxs)("span", {
                                  className: g().confirmLabel,
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: eG
                                    }),
                                    "working" === B && null !== en ? (0, n.jsxs)("span", {
                                      className: g().percent,
                                      children: [
                                        Math.round(100 * en),
                                        "%"
                                      ]
                                    }) : null
                                  ]
                                })
                              }),
                              "working" === B && null === en ? (0, n.jsx)("span", {
                                className: g().sweep,
                                "aria-hidden": true
                              }) : null
                            ]
                          })
                        ]
                      })
                    ]
                  })
                },
                "panel"
              ) : null
            ]
          })
        }) : null,
        (0, n.jsx)("span", {
          className: g().srOnly,
          role: "status",
          "aria-live": "polite",
          children: e$
        })
      ]
    });
  }
  var w = t(75316), b = t.n(w);
  let j = (e2, r2) => new Promise((t2, n2) => {
    let i2 = setTimeout(t2, e2);
    r2?.addEventListener("abort", () => {
      clearTimeout(i2), n2(Error("Aborted"));
    });
  });
  function k() {
    let [e2, r2] = (0, i.useState)(false), [t2, s2] = (0, i.useState)("Nothing has changed yet"), l2 = (0, i.useId)(), c2 = async (t3, { setProgress: n2, signal: i2 }, a2) => {
      for (let a3 = 1; a3 <= t3; a3++) {
        if (await j(360 + 260 * Math.random(), i2), e2 && a3 === Math.ceil(t3 / 2))
          throw r2(false), Error("The server didn't respond. Nothing was changed.");
        n2(a3 / t3);
      }
      s2(a2);
    };
    return (0, n.jsxs)("div", {
      className: b().demo,
      children: [
        (0, n.jsxs)("section", {
          className: b().card,
          "aria-labelledby": "confirm-popover-demo-title",
          children: [
            (0, n.jsx)("h3", {
              id: "confirm-popover-demo-title",
              className: b().heading,
              children: "Atlas settings"
            }),
            (0, n.jsxs)("div", {
              className: b().row,
              children: [
                (0, n.jsx)("img", {
                  className: b().avatar,
                  src: "media/people/portrait/jordan-reyes.svg",
                  alt: "",
                  width: 36,
                  height: 36,
                  draggable: false
                }),
                (0, n.jsxs)("div", {
                  className: b().text,
                  children: [
                    (0, n.jsx)("span", {
                      className: b().name,
                      children: "Jordan Reyes"
                    }),
                    (0, n.jsx)("span", {
                      className: b().meta,
                      children: "Editor \xB7 jordan@atlas.dev"
                    })
                  ]
                }),
                (0, n.jsx)(y, {
                  icon: (0, n.jsx)(a.A, { size: 16, strokeWidth: 1.75 }),
                  align: "end",
                  title: "Remove Jordan from Atlas?",
                  description: "Jordan loses access to the project and its three environments right away. You can invite them again later.",
                  confirmLabel: "Remove",
                  pendingLabel: "Removing",
                  successLabel: "Removed",
                  errorTitle: "Couldn't remove Jordan",
                  onConfirm: (e3) => c2(3, e3, "Jordan was removed (simulated)"),
                  children: "Remove"
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: b().row,
              children: [
                (0, n.jsxs)("div", {
                  className: b().text,
                  children: [
                    (0, n.jsx)("span", {
                      className: b().name,
                      children: "Delete project"
                    }),
                    (0, n.jsx)("span", {
                      className: b().meta,
                      children: "14 deployments, 3 environments and all logs"
                    })
                  ]
                }),
                (0, n.jsx)(y, {
                  icon: (0, n.jsx)(o.A, { size: 16, strokeWidth: 1.75 }),
                  align: "end",
                  title: "Delete Atlas?",
                  description: "This permanently deletes 14 deployments, 3 environments and every log. It can't be undone.",
                  confirmText: "atlas",
                  confirmLabel: "Delete project",
                  errorTitle: "Couldn't delete Atlas",
                  onConfirm: (e3) => c2(5, e3, "Atlas was deleted (simulated)"),
                  children: "Delete"
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: b().footer,
          children: [
            (0, n.jsxs)("label", {
              className: b().switchLabel,
              htmlFor: l2,
              children: [
                (0, n.jsx)("input", {
                  id: l2,
                  type: "checkbox",
                  role: "switch",
                  className: b().switch,
                  checked: e2,
                  onChange: (e3) => r2(e3.target.checked)
                }),
                "Fail the next attempt"
              ]
            }),
            (0, n.jsx)("p", {
              className: b().log,
              "aria-live": "polite",
              children: t2
            })
          ]
        })
      ]
    });
  }
  let N = k;
}

__m(__module,__exports,__require);
}