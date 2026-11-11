function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { ActionsInputsPreview: () => tA });
  var a = i(95155), n = i(12115), s = i(18310), r = i(80642), o = i(25354), l = i(2125), d = i(36483), c = i(17143), u = i(18986), p = i(99314), h = i(5937), m = i(51128), x = i(50825), f = i(30377), _ = i(52920), b = i(32159), y = i(90467), g = i(59680), j = i(64577), v = i(9383), w = i(25879), T = i(51288), N = i(5442), k = i(57189), S = i(57793), $ = i(28245), P = i(92171), C = i(12363), A = i(7770), z = i(37350), D = i.n(z);
  let R = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, L = { ...R, opacity: 0 }, E = { opacity: 0, transition: { duration: A.T.duration.instant } }, I = { opacity: 0, y: 5, filter: `blur(${A.T.blur.soft}px)` }, M = {
    opacity: 0,
    y: -4,
    filter: `blur(${A.T.blur.subtle}px)`,
    transition: { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }
  }, Y = { opacity: 0, scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` }, F = {
    ...Y,
    transition: { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }
  }, O = {
    ...A.T.spring.snappy,
    opacity: { duration: A.T.duration.fast, ease: [...A.T.ease.enter] },
    filter: { duration: A.T.duration.fast, ease: [...A.T.ease.enter] }
  }, B = (e10, t2) => e10.map((e11, i2) => ({ id: `${t2}:${i2}`, char: e11, order: i2 }));
  function W({ text: e10, reduced: t2 }) {
    let i2 = (function(e11) {
      let [t3, i3] = (0, n.useState)(() => ({
        text: e11,
        seq: 0,
        glyphs: B([...e11], 0)
      }));
      if (t3.text === e11) return t3.glyphs;
      let a2 = [...t3.text], s2 = [...e11], r2 = 0, o2 = 0;
      for (; r2 < a2.length && r2 < s2.length && a2[r2] === s2[r2]; ) r2++;
      for (; o2 < a2.length - r2 && o2 < s2.length - r2 && a2[a2.length - 1 - o2] === s2[s2.length - 1 - o2]; )
        o2++;
      r2 < 2 && (r2 = 0), o2 < 2 && (o2 = 0);
      let l2 = t3.seq + 1, d2 = [
        ...t3.glyphs.slice(0, r2),
        ...B(s2.slice(r2, s2.length - o2), l2),
        ...t3.glyphs.slice(t3.glyphs.length - o2)
      ];
      return i3({ text: e11, seq: l2, glyphs: d2 }), d2;
    })(e10);
    return (0, a.jsx)("span", {
      className: D().glyphs,
      children: (0, a.jsx)(r.N, {
        mode: "popLayout",
        initial: false,
        children: i2.map(
          (i3) => (0, a.jsx)(
            o.PY1.span,
            {
              className: D().glyph,
              layout: !t2 && "position",
              layoutDependency: e10,
              initial: t2 ? L : I,
              animate: R,
              exit: t2 ? E : M,
              transition: t2 ? { duration: A.T.duration.instant } : {
                duration: A.T.duration.standard,
                ease: [...A.T.ease.enter],
                delay: Math.min(i3.order * A.T.stagger.char, 0.1),
                layout: A.T.spring.morph
              },
              children: i3.char
            },
            i3.id
          )
        )
      })
    });
  }
  function V({
    label: e10,
    actions: t2,
    onClick: i2,
    disabled: l2,
    icon: d2,
    variant: c2 = "primary"
  }) {
    var u2;
    let p2, h2, m2, x2 = (0, s.I)() ?? false, f2 = (0, n.useRef)(null), _2 = (function(e11) {
      if (!(0, n.isValidElement)(e11))
        return null == e11 || "boolean" == typeof e11 ? "" : String(e11);
      let t3 = e11.type;
      return "string" == typeof t3 ? t3 : t3?.displayName ?? t3?.name ?? "icon";
    })(d2), b2 = (u2 = `${_2}|${e10}`, p2 = (0, $.d)("auto"), h2 = (0, n.useRef)(u2), m2 = (0, n.useRef)(0), (0, n.useLayoutEffect)(() => {
      h2.current !== u2 && (h2.current = u2, m2.current = performance.now() + 700);
    }, [u2]), (0, n.useEffect)(() => {
      let e11 = f2.current, t3 = e11?.parentElement;
      if (!e11 || !t3 || "u" < typeof ResizeObserver) return;
      let i3 = false, a2 = new ResizeObserver(([e12]) => {
        if (!e12) return;
        let a3 = e12.contentRect.width;
        if (!a3 || !i3 || x2 || performance.now() > m2.current) {
          i3 = a3 > 0, p2.jump(a3 || "auto"), delete t3.dataset.morphing;
          return;
        }
        t3.dataset.morphing = "", (0, P.i)(p2, a3, {
          ...A.T.spring.morph,
          onComplete: () => {
            delete t3.dataset.morphing;
          }
        });
      });
      return a2.observe(e11), () => a2.disconnect();
    }, [f2, x2, p2]), p2);
    return (0, a.jsxs)(S.bL, {
      children: [
        (0, a.jsxs)("div", {
          className: [D().group, "secondary" === c2 ? D().secondary : ""].filter(Boolean).join(" "),
          children: [
            (0, a.jsxs)("button", {
              className: D().primary,
              type: "button",
              onClick: i2,
              disabled: l2,
              children: [
                (0, a.jsx)(o.PY1.span, {
                  className: D().primarySlot,
                  style: { width: b2 },
                  "aria-hidden": "true",
                  children: (0, a.jsxs)("span", {
                    ref: f2,
                    className: D().primaryContent,
                    children: [
                      d2 ? (0, a.jsx)("span", {
                        className: D().mainIcon,
                        children: (0, a.jsx)(r.N, {
                          initial: false,
                          children: (0, a.jsx)(
                            o.PY1.span,
                            {
                              className: D().iconPhase,
                              initial: x2 ? L : Y,
                              animate: R,
                              exit: x2 ? E : F,
                              transition: x2 ? { duration: A.T.duration.instant } : O,
                              children: d2
                            },
                            _2
                          )
                        })
                      }) : null,
                      (0, a.jsx)(W, { text: e10, reduced: x2 })
                    ]
                  })
                }),
                (0, a.jsx)("span", {
                  className: D().srOnly,
                  "aria-live": "polite",
                  children: e10
                })
              ]
            }),
            (0, a.jsx)(S.l9, {
              className: D().trigger,
              type: "button",
              "aria-label": `${e10} more actions`,
              disabled: l2,
              children: (0, a.jsx)(C.A, {
                className: D().chevron,
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, a.jsx)(S.ZL, {
          children: (0, a.jsx)(S.UC, {
            className: D().menu,
            sideOffset: 4,
            align: "end",
            collisionPadding: 12,
            loop: true,
            children: t2.map(
              (e11, t3) => (0, a.jsxs)(
                S.q7,
                {
                  className: [D().item, e11.destructive ? D().destructive : ""].filter(Boolean).join(" "),
                  style: { "--i": t3 },
                  disabled: e11.disabled,
                  onSelect: e11.onSelect,
                  children: [
                    e11.icon ? (0, a.jsx)("span", {
                      className: D().icon,
                      "aria-hidden": "true",
                      children: e11.icon
                    }) : null,
                    e11.label
                  ]
                },
                e11.label
              )
            )
          })
        })
      ]
    });
  }
  var U = i(60466), H = i(29354), K = i(61618), q = i(73474), G = i(55665), Z = i(98898), Q = i(20530), J = i(9005), X = i(44370), ee = i.n(X);
  let et = { duration: A.T.duration.instant }, ei = {
    enter: (e10) => ({
      opacity: 0,
      y: e10 > 0 ? "0.6em" : "-0.6em",
      filter: `blur(${A.T.blur.subtle}px)`
    }),
    rest: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e10) => ({
      opacity: 0,
      y: e10 > 0 ? "-0.6em" : "0.6em",
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: {
        duration: A.T.duration.fast,
        ease: [...A.T.ease.standard]
      }
    })
  }, ea = {
    enter: { opacity: 0 },
    rest: { opacity: 1 },
    exit: { opacity: 0, transition: et }
  }, en = { opacity: 0, filter: `blur(${A.T.blur.subtle}px)` }, es = {
    ...en,
    transition: { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }
  }, er = { duration: A.T.duration.standard, ease: [...A.T.ease.enter] };
  function eo({ count: e10, noun: t2, reduced: i2 }) {
    let s2, l2, d2, [c2, u2] = (0, n.useState)({ count: e10, dir: 1 });
    c2.count !== e10 && u2({ count: e10, dir: e10 > c2.count ? 1 : -1 });
    let p2 = (0, n.useRef)(null), h2 = (s2 = (0, $.d)("auto"), l2 = (0, n.useRef)(e10), d2 = (0, n.useRef)(0), (0, n.useLayoutEffect)(() => {
      l2.current !== e10 && (l2.current = e10, d2.current = performance.now() + 700);
    }, [e10]), (0, n.useEffect)(() => {
      let e11 = p2.current;
      if (!e11 || "u" < typeof ResizeObserver) return;
      let t3 = false, a2 = new ResizeObserver(([e12]) => {
        let a3 = e12.contentRect.width;
        if (!a3 || !t3 || i2 || performance.now() > d2.current) {
          t3 = a3 > 0, s2.jump(a3 || "auto");
          return;
        }
        (0, P.i)(s2, a3, A.T.spring.morph);
      });
      return a2.observe(e11), () => a2.disconnect();
    }, [p2, i2, s2]), s2), m2 = !i2 && "position";
    return (0, a.jsx)(o.PY1.span, {
      className: ee().countSlot,
      style: { width: h2 },
      "aria-hidden": "true",
      children: (0, a.jsxs)("span", {
        ref: p2,
        className: ee().countRow,
        children: [
          (0, a.jsx)("span", {
            className: ee().countNumber,
            children: (0, a.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              custom: c2.dir,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  className: ee().digits,
                  custom: c2.dir,
                  variants: i2 ? ea : ei,
                  initial: "enter",
                  animate: "rest",
                  exit: "exit",
                  transition: i2 ? et : { ...A.T.spring.snappy, opacity: er, filter: er },
                  children: e10
                },
                e10
              )
            })
          }),
          (0, a.jsxs)(o.PY1.span, {
            className: ee().words,
            layout: m2,
            layoutDependency: e10,
            transition: A.T.spring.morph,
            children: [
              ` ${t2}`,
              (0, a.jsx)(r.N, {
                mode: "popLayout",
                initial: false,
                children: 1 !== e10 && (0, a.jsx)(
                  o.PY1.span,
                  {
                    className: ee().plural,
                    initial: i2 ? { opacity: 0 } : en,
                    animate: { opacity: 1, filter: "blur(0px)" },
                    exit: i2 ? { opacity: 0, transition: { duration: 0 } } : es,
                    transition: i2 ? et : er,
                    children: "s"
                  },
                  "plural"
                )
              }),
              (0, a.jsx)(o.PY1.span, {
                className: ee().selected,
                layout: m2,
                layoutDependency: e10,
                transition: A.T.spring.morph,
                children: " selected"
              })
            ]
          })
        ]
      })
    });
  }
  function el({ count: e10, actions: t2, onClear: i2, noun: n2 = "item" }) {
    let l2 = (0, s.I)() ?? false;
    return (0, a.jsx)(r.N, {
      initial: false,
      children: e10 > 0 && (0, a.jsxs)(
        o.PY1.div,
        {
          className: ee().bar,
          role: "toolbar",
          "aria-label": "Selection actions",
          initial: l2 ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.97 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: l2 ? { opacity: 0, transition: et } : {
            opacity: 0,
            y: 6,
            scale: 0.98,
            transition: {
              duration: A.T.duration.exit,
              ease: [...A.T.ease.standard]
            }
          },
          transition: l2 ? et : {
            ...A.T.spring.smooth,
            opacity: {
              duration: A.T.duration.fast,
              ease: [...A.T.ease.enter]
            }
          },
          children: [
            (0, a.jsxs)("span", {
              className: ee().count,
              children: [
                (0, a.jsx)(eo, { count: e10, noun: n2, reduced: l2 }),
                (0, a.jsx)("span", {
                  className: ee().srOnly,
                  "aria-live": "polite",
                  children: `${e10} ${n2}${1 === e10 ? "" : "s"} selected`
                })
              ]
            }),
            t2.length > 0 && (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("span", {
                  className: ee().divider,
                  "aria-hidden": "true"
                }),
                (0, a.jsx)("div", {
                  className: ee().actions,
                  children: t2.map(
                    (e11) => (0, a.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: e11.destructive ? ee().destructive : "",
                        onClick: e11.onClick,
                        children: [
                          e11.icon && (0, a.jsx)("span", {
                            className: ee().actionIcon,
                            "aria-hidden": "true",
                            children: e11.icon
                          }),
                          e11.label
                        ]
                      },
                      e11.label
                    )
                  )
                })
              ]
            }),
            (0, a.jsx)("button", {
              type: "button",
              className: ee().clear,
              "aria-label": "Clear selection",
              onClick: i2,
              children: (0, a.jsx)(J.A, { size: 15, "aria-hidden": "true" })
            })
          ]
        },
        "selection-toolbar"
      )
    });
  }
  var ed = i(46439), ec = i.n(ed);
  let eu = [
    { id: "atlas", name: "Atlas redesign", meta: "Updated 2 hours ago" },
    { id: "launch", name: "Spring launch site", meta: "Updated yesterday" },
    { id: "billing", name: "Billing migration", meta: "Updated 3 days ago" },
    { id: "onboarding", name: "Onboarding emails", meta: "Updated last week" }
  ];
  function ep({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(["atlas", "launch"]), s2 = (a2) => {
      e10(`${t2.length} ${1 === t2.length ? "project" : "projects"} ${a2}`), i2([]);
    };
    return (0, a.jsxs)("div", {
      className: ec().demo,
      children: [
        (0, a.jsx)("ul", {
          className: ec().list,
          "aria-label": "Projects",
          children: eu.map(
            (e11) => (0, a.jsxs)(
              "li",
              {
                className: ec().row,
                children: [
                  (0, a.jsx)(Q.S, {
                    checked: t2.includes(e11.id),
                    onCheckedChange: (t3) => {
                      let a2, n2;
                      return a2 = e11.id, n2 = true === t3, i2(
                        (e12) => n2 ? e12.includes(a2) ? e12 : [...e12, a2] : e12.filter((e13) => e13 !== a2)
                      );
                    },
                    "aria-label": `Select ${e11.name}`
                  }),
                  (0, a.jsxs)("span", {
                    className: ec().copy,
                    children: [
                      (0, a.jsx)("span", {
                        className: ec().name,
                        children: e11.name
                      }),
                      (0, a.jsx)("span", {
                        className: ec().meta,
                        children: e11.meta
                      })
                    ]
                  })
                ]
              },
              e11.id
            )
          )
        }),
        (0, a.jsx)("div", {
          className: ec().slot,
          children: (0, a.jsx)(el, {
            count: t2.length,
            noun: "project",
            onClear: () => i2([]),
            actions: [
              {
                label: "Archive",
                icon: (0, a.jsx)(b.A, { size: 16, strokeWidth: 1.75 }),
                onClick: () => s2("archived")
              },
              {
                label: "Delete",
                icon: (0, a.jsx)(w.A, { size: 16, strokeWidth: 1.75 }),
                destructive: true,
                onClick: () => s2("deleted")
              }
            ]
          })
        })
      ]
    });
  }
  var eh = i(35978), em = i(87796), ex = i(96220), ef = i(65377), e_ = i(42454), eb = i.n(e_);
  function ey({ children: e10, reduceMotion: t2 }) {
    let i2 = (0, n.useRef)(null), [s2, r2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let e11 = i2.current;
      if (!e11) return;
      let t3 = new ResizeObserver(() => r2(e11.offsetHeight));
      return t3.observe(e11), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.div, {
      className: eb().autoHeight,
      initial: false,
      animate: { height: s2 },
      transition: t2 ? { duration: 0 } : A.T.spring.smooth,
      children: (0, a.jsx)("div", { ref: i2, children: e10 })
    });
  }
  let eg = (0, n.forwardRef)(function({
    label: e10,
    options: t2,
    value: i2,
    defaultValue: l2 = "",
    onValueChange: d2,
    description: c2,
    placeholder: u2 = "Search or select\u2026",
    emptyMessage: p2 = "No matches found",
    id: h2,
    className: m2,
    disabled: x2,
    onFocus: f2,
    ..._2
  }, b2) {
    let y2 = (0, n.useId)(), g2 = h2 ?? y2, v2 = `${g2}-listbox`, w2 = c2 ? `${g2}-description` : void 0, T2 = (0, n.useRef)(null), N2 = (0, n.useRef)(null), k2 = (0, n.useRef)({}), S2 = (0, s.I)(), [$2, z2] = (0, n.useState)(l2), [D2, R2] = (0, n.useState)(false), [L2, E2] = (0, n.useState)(""), [I2, M2] = (0, n.useState)(-1), Y2 = i2 ?? $2, F2 = t2.find((e11) => e11.value === Y2);
    (0, n.useImperativeHandle)(b2, () => N2.current);
    let O2 = (0, n.useRef)(Y2);
    (0, n.useEffect)(() => {
      if (O2.current === Y2) return;
      O2.current = Y2;
      let e11 = N2.current;
      if (!e11 || S2 || Y2 && D2) return;
      let t3 = Y2 ? (0, P.i)(
        e11,
        {
          opacity: [0, 1],
          y: ["0.35em", "0em"],
          filter: [`blur(${A.T.blur.soft}px)`, "blur(0px)"]
        },
        { duration: A.T.duration.standard, ease: [...A.T.ease.enter] }
      ) : (0, P.i)(
        e11,
        { opacity: [0, 1] },
        { duration: A.T.duration.fast, ease: [...A.T.ease.enter] }
      );
      return () => t3.complete();
    }, [Y2, S2, D2]);
    let B2 = (0, n.useMemo)(() => {
      let e11 = L2.trim().toLocaleLowerCase();
      return e11 ? t2.filter(
        (t3) => [t3.label, ...t3.keywords ?? []].some(
          (t4) => t4.toLocaleLowerCase().includes(e11)
        )
      ) : t2;
    }, [t2, L2]), W2 = B2.reduce((e11, t3, i3) => (t3.disabled || e11.push(i3), e11), []);
    (0, n.useEffect)(() => {
      if (!D2) return;
      let e11 = I2 >= 0 ? B2[I2] : void 0, t3 = e11 ? k2.current[e11.value] : null, i3 = t3?.parentElement;
      if (t3 && i3) {
        let e12 = t3.offsetTop, a2 = e12 + t3.offsetHeight;
        e12 < i3.scrollTop ? i3.scrollTop = e12 : a2 > i3.scrollTop + i3.clientHeight && (i3.scrollTop = a2 - i3.clientHeight);
      }
    }, [I2, B2, D2]), (0, n.useEffect)(() => {
      let e11 = (e12) => {
        T2.current && !T2.current.contains(e12.target) && (R2(false), E2(""));
      };
      return document.addEventListener("pointerdown", e11), () => document.removeEventListener("pointerdown", e11);
    }, []);
    let V2 = (e11) => {
      e11.disabled || (z2(e11.value), d2?.(e11.value), E2(""), R2(false), N2.current?.focus());
    }, U2 = () => {
      x2 || (R2(true), E2(""), M2(-1));
    }, H2 = D2 ? L2 : F2?.label ?? "", K2 = I2 >= 0 ? B2[I2] : void 0;
    return (0, a.jsxs)("div", {
      ref: T2,
      className: eb().field,
      children: [
        (0, a.jsx)("label", { htmlFor: g2, children: e10 }),
        (0, a.jsxs)("div", {
          className: [
            eb().control,
            D2 ? eb().open : "",
            x2 ? eb().disabled : "",
            m2 ?? ""
          ].filter(Boolean).join(" "),
          children: [
            (0, a.jsx)(ef.A, {
              className: eb().searchIcon,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, a.jsx)("input", {
              ..._2,
              ref: N2,
              id: g2,
              type: "text",
              role: "combobox",
              value: H2,
              placeholder: F2?.label ?? u2,
              disabled: x2,
              "aria-describedby": w2,
              "aria-expanded": D2,
              "aria-controls": D2 ? v2 : void 0,
              "aria-autocomplete": "list",
              "aria-activedescendant": D2 && K2 ? `${g2}-option-${K2.value}` : void 0,
              onFocus: (e11) => {
                f2?.(e11), U2();
              },
              onClick: U2,
              onChange: (e11) => {
                E2(e11.target.value), R2(true), M2(-1);
              },
              onKeyDown: (e11) => {
                if (!x2) {
                  if ("ArrowDown" === e11.key || "ArrowUp" === e11.key) {
                    if (e11.preventDefault(), !D2) return void U2();
                    if (!W2.length) return;
                    let t3 = W2.indexOf(I2), i3 = "ArrowDown" === e11.key ? (t3 + 1) % W2.length : (t3 - 1 + W2.length) % W2.length;
                    return void M2(W2[i3]);
                  }
                  if ("Enter" === e11.key && D2 && I2 >= 0) {
                    e11.preventDefault();
                    let t3 = B2[I2];
                    t3 && V2(t3);
                    return;
                  }
                  if ("Escape" === e11.key && D2) {
                    e11.preventDefault(), R2(false), E2("");
                    return;
                  }
                }
              }
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: F2 && !x2 && (0, a.jsx)(o.PY1.button, {
                type: "button",
                className: eb().clear,
                "aria-label": "Clear selection",
                onMouseDown: (e11) => e11.preventDefault(),
                onClick: (e11) => {
                  e11.preventDefault(), z2(""), d2?.(""), E2(""), R2(true), N2.current?.focus();
                },
                initial: S2 ? { opacity: 0 } : {
                  opacity: 0,
                  scale: 0.6,
                  filter: `blur(${A.T.blur.subtle}px)`
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: S2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast }
                  }
                },
                exit: {
                  opacity: 0,
                  ...S2 ? {} : { scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` },
                  transition: {
                    duration: A.T.duration.instant,
                    ease: [...A.T.ease.standard]
                  }
                },
                whileTap: {
                  scale: S2 ? 1 : 0.96,
                  transition: {
                    duration: A.T.duration.instant,
                    ease: [...A.T.ease.standard]
                  }
                },
                children: (0, a.jsx)(J.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            }),
            (0, a.jsx)(C.A, {
              className: eb().chevron,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          ]
        }),
        c2 && (0, a.jsx)("span", { id: w2, className: eb().hint, children: c2 }),
        (0, a.jsx)(r.N, {
          initial: false,
          children: D2 && (0, a.jsx)(o.PY1.div, {
            className: eb().popover,
            initial: S2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
            animate: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: S2 ? { duration: A.T.duration.instant } : {
                ...A.T.spring.snappy,
                opacity: {
                  duration: A.T.duration.fast,
                  ease: [...A.T.ease.enter]
                }
              }
            },
            exit: {
              opacity: 0,
              ...S2 ? {} : { y: -4, scale: 0.98 },
              transition: {
                duration: A.T.duration.instant,
                ease: [...A.T.ease.standard]
              }
            },
            role: "presentation",
            children: (0, a.jsx)(ey, {
              reduceMotion: S2,
              children: (0, a.jsx)("div", {
                id: v2,
                className: eb().listbox,
                role: "listbox",
                "aria-label": `${e10} options`,
                children: B2.length ? B2.map(
                  (e11, t3) => (0, a.jsxs)(
                    "div",
                    {
                      ref: (t4) => {
                        k2.current[e11.value] = t4;
                      },
                      id: `${g2}-option-${e11.value}`,
                      className: eb().option,
                      "data-active": t3 === I2 ? "true" : void 0,
                      "data-disabled": e11.disabled ? "true" : void 0,
                      role: "option",
                      "aria-selected": e11.value === Y2,
                      "aria-disabled": e11.disabled || void 0,
                      onMouseDown: (e12) => e12.preventDefault(),
                      onMouseEnter: () => !e11.disabled && M2(t3),
                      onClick: () => V2(e11),
                      children: [
                        (0, a.jsx)("span", { children: e11.label }),
                        e11.value === Y2 && (0, a.jsx)(j.A, {
                          className: eb().check,
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      ]
                    },
                    e11.value
                  )
                ) : (0, a.jsx)(o.PY1.div, {
                  className: eb().empty,
                  role: "status",
                  initial: !S2 && {
                    opacity: 0,
                    y: 4,
                    filter: `blur(${A.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  transition: {
                    duration: A.T.duration.standard,
                    ease: [...A.T.ease.enter]
                  },
                  children: p2
                })
              })
            })
          })
        })
      ]
    });
  });
  eg.displayName = "Combobox";
  var ej = i(50680), ev = i(64312), ew = i.n(ev);
  let eT = A.T.ease.enter, eN = A.T.ease.standard, ek = {
    hidden: { width: 0, opacity: 0 },
    shown: {
      width: "auto",
      opacity: 1,
      transition: {
        width: A.T.spring.smooth,
        opacity: { duration: A.T.duration.fast, ease: eT }
      }
    },
    gone: {
      width: 0,
      opacity: 0,
      transition: {
        width: A.T.spring.smooth,
        opacity: { duration: A.T.duration.instant, ease: eN }
      }
    }
  }, eS = {
    hidden: { scale: 0.9, filter: `blur(${A.T.blur.soft}px)` },
    shown: {
      scale: 1,
      filter: "blur(0px)",
      transition: {
        ...A.T.spring.snappy,
        filter: { duration: A.T.duration.standard, ease: eT }
      }
    },
    gone: {
      scale: 0.9,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: { duration: A.T.duration.instant, ease: eN }
    }
  }, e$ = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.instant }
    },
    gone: { opacity: 0, transition: { duration: A.T.duration.instant } }
  }, eP = {
    hidden: { opacity: 0 },
    shown: {
      width: "auto",
      opacity: 1,
      transition: { duration: A.T.duration.instant }
    },
    gone: { opacity: 0, transition: { duration: A.T.duration.instant } }
  }, eC = {
    hidden: { scale: 1, filter: "blur(0px)" },
    shown: { scale: 1, filter: "blur(0px)" },
    gone: { scale: 1, filter: "blur(0px)" }
  }, eA = {
    hidden: (e10) => ({
      opacity: 0,
      y: `${0.5 * e10}em`,
      filter: `blur(${A.T.blur.subtle}px)`
    }),
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.standard, ease: eT }
    },
    gone: (e10) => ({
      opacity: 0,
      y: `${-0.5 * e10}em`,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: { duration: A.T.duration.instant, ease: eN }
    })
  };
  function ez({ reduce: e10 }) {
    return (0, a.jsx)("svg", {
      className: ew().check,
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.75",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(o.PY1.path, {
        d: "M4 12.5 9 17.5 20 6.5",
        initial: e10 ? { opacity: 0 } : { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        exit: e10 ? { opacity: 0 } : { pathLength: 0, opacity: 0 },
        transition: e10 ? { duration: A.T.duration.instant } : {
          pathLength: { duration: A.T.duration.standard, ease: eT },
          opacity: { duration: A.T.duration.instant }
        }
      })
    });
  }
  function eD({
    label: e10,
    options: t2,
    value: i2,
    defaultValue: l2 = [],
    onValueChange: d2,
    placeholder: c2 = "Select options",
    description: u2,
    maxVisible: p2 = 2,
    disabled: h2 = false,
    className: m2
  }) {
    let x2 = (0, n.useId)(), f2 = `${x2}-label`, _2 = `${x2}-value`, b2 = (0, n.useRef)(null), [y2, g2] = (0, n.useState)(l2), [j2, v2] = (0, n.useState)(false), [w2, T2] = (0, n.useState)(-1), N2 = i2 ?? y2, k2 = (0, n.useMemo)(() => new Set(N2), [N2]), S2 = (e11) => t2.find((t3) => t3.value === e11)?.label ?? e11, $2 = N2.slice(0, p2).map((e11) => ({ value: e11, label: S2(e11) })), P2 = Math.max(0, N2.length - $2.length), [z2, D2] = (0, n.useState)(j2);
    z2 !== j2 && (D2(j2), j2 || T2(-1));
    let [R2, L2] = (0, n.useState)(P2), [E2, I2] = (0, n.useState)(1);
    R2 !== P2 && (L2(P2), I2(P2 > R2 ? 1 : -1)), (0, n.useEffect)(() => {
      let e11 = (e12) => {
        b2.current?.contains(e12.target) || v2(false);
      };
      return document.addEventListener("pointerdown", e11), () => document.removeEventListener("pointerdown", e11);
    }, []);
    let M2 = (e11) => {
      void 0 === i2 && g2(e11), d2?.(e11);
    }, Y2 = (e11) => {
      h2 || e11.disabled || M2(k2.has(e11.value) ? N2.filter((t3) => t3 !== e11.value) : [...N2, e11.value]);
    }, F2 = t2.map((e11, t3) => e11.disabled ? -1 : t3).filter((e11) => e11 >= 0), O2 = (0, s.I)();
    return (0, a.jsxs)("div", {
      ref: b2,
      className: [ew().field, m2].filter(Boolean).join(" "),
      children: [
        (0, a.jsx)("span", { id: f2, className: ew().label, children: e10 }),
        (0, a.jsxs)("div", {
          className: ew().control,
          children: [
            (0, a.jsxs)("button", {
              type: "button",
              className: `${ew().trigger} ${N2.length ? ew().hasClear : ""}`,
              disabled: h2,
              "aria-labelledby": `${f2} ${_2}`,
              "aria-haspopup": "listbox",
              "aria-expanded": j2,
              "aria-controls": `${x2}-listbox`,
              onClick: () => v2((e11) => !e11),
              onKeyDown: (e11) => {
                if (!h2) {
                  if ("Enter" === e11.key && j2 && w2 >= 0) {
                    e11.preventDefault(), Y2(t2[w2]);
                    return;
                  }
                  if ("Enter" === e11.key || " " === e11.key) {
                    e11.preventDefault(), v2((e12) => !e12);
                    return;
                  }
                  if ("Escape" === e11.key) return void v2(false);
                  if (("ArrowDown" === e11.key || "ArrowUp" === e11.key) && F2.length) {
                    e11.preventDefault(), v2(true);
                    let t3 = F2.indexOf(w2), i3 = t3 < 0 ? "ArrowDown" === e11.key ? 0 : F2.length - 1 : "ArrowDown" === e11.key ? (t3 + 1) % F2.length : (t3 - 1 + F2.length) % F2.length;
                    T2(F2[i3]);
                  }
                }
              },
              children: [
                (0, a.jsx)("span", {
                  id: _2,
                  className: ew().srOnly,
                  children: N2.length ? N2.map(S2).join(", ") : c2
                }),
                (0, a.jsx)("span", {
                  className: ew().value,
                  "aria-hidden": "true",
                  children: (0, a.jsxs)(r.N, {
                    initial: false,
                    children: [
                      $2.map(
                        (e11) => (0, a.jsx)(
                          o.PY1.span,
                          {
                            className: ew().slot,
                            variants: O2 ? eP : ek,
                            initial: "hidden",
                            animate: "shown",
                            exit: "gone",
                            children: (0, a.jsx)(o.PY1.span, {
                              className: ew().chip,
                              variants: O2 ? eC : eS,
                              children: e11.label
                            })
                          },
                          `chip-${e11.value}`
                        )
                      ),
                      P2 > 0 && (0, a.jsx)(
                        o.PY1.span,
                        {
                          className: ew().slot,
                          variants: O2 ? eP : ek,
                          initial: "hidden",
                          animate: "shown",
                          exit: "gone",
                          children: (0, a.jsxs)(o.PY1.span, {
                            className: ew().more,
                            variants: O2 ? eC : eS,
                            children: [
                              "+",
                              (0, a.jsx)("span", {
                                className: ew().count,
                                children: (0, a.jsx)(r.N, {
                                  initial: false,
                                  custom: E2,
                                  children: (0, a.jsx)(
                                    o.PY1.span,
                                    {
                                      custom: E2,
                                      variants: O2 ? e$ : eA,
                                      initial: "hidden",
                                      animate: "shown",
                                      exit: "gone",
                                      children: P2
                                    },
                                    P2
                                  )
                                })
                              })
                            ]
                          })
                        },
                        "more"
                      ),
                      !N2.length && (0, a.jsx)(
                        o.PY1.span,
                        {
                          className: ew().placeholder,
                          variants: e$,
                          initial: "hidden",
                          animate: "shown",
                          exit: "gone",
                          children: c2
                        },
                        "placeholder"
                      )
                    ]
                  })
                }),
                (0, a.jsx)(C.A, {
                  className: ew().chevron,
                  size: 16,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: N2.length > 0 && !h2 && (0, a.jsx)(o.PY1.button, {
                type: "button",
                "aria-label": "Clear selections",
                className: ew().clear,
                onClick: () => {
                  M2([]), v2(false);
                },
                initial: O2 ? { opacity: 0 } : {
                  opacity: 0,
                  scale: 0.6,
                  filter: `blur(${A.T.blur.subtle}px)`
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: O2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast }
                  }
                },
                exit: {
                  opacity: 0,
                  ...O2 ? {} : { scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` },
                  transition: { duration: A.T.duration.instant, ease: eN }
                },
                whileTap: {
                  scale: O2 ? 1 : 0.96,
                  transition: { duration: A.T.duration.instant, ease: eN }
                },
                children: (0, a.jsx)(J.A, {
                  size: 14,
                  "aria-hidden": "true"
                })
              })
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: j2 && (0, a.jsx)(o.PY1.div, {
                id: `${x2}-listbox`,
                className: ew().menu,
                role: "listbox",
                "aria-label": e10,
                "aria-multiselectable": "true",
                initial: O2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: O2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast, ease: eT }
                  }
                },
                exit: {
                  opacity: 0,
                  ...O2 ? {} : { y: -4, scale: 0.98 },
                  transition: { duration: A.T.duration.instant, ease: eN }
                },
                children: t2.map(
                  (e11, t3) => (0, a.jsxs)(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": k2.has(e11.value),
                      "aria-disabled": e11.disabled || void 0,
                      className: ew().option,
                      "data-active": w2 === t3,
                      disabled: e11.disabled,
                      onPointerMove: () => {
                        w2 !== t3 && T2(t3);
                      },
                      onClick: () => Y2(e11),
                      children: [
                        (0, a.jsx)("span", { children: e11.label }),
                        (0, a.jsx)(r.N, {
                          initial: false,
                          children: k2.has(e11.value) && (0, a.jsx)(ez, { reduce: O2 }, "check")
                        })
                      ]
                    },
                    e11.value
                  )
                )
              })
            })
          ]
        }),
        u2 && (0, a.jsx)("span", { className: ew().description, children: u2 })
      ]
    });
  }
  var eR = i(52824), eL = i(93744), eE = i(43298), eI = i(41410), eM = i(79196), eY = i(55809), eF = i(7890), eO = i(85815), eB = i(1910), eW = i(9107), eV = i(41189), eU = i(27502), eH = i(24394), eK = i.n(eH);
  let eq = { duration: A.T.duration.standard, ease: [...A.T.ease.enter] }, eG = { duration: A.T.duration.fast, ease: [...A.T.ease.standard] }, eZ = { duration: 0 }, eQ = { opacity: 0, y: "0.3em", filter: `blur(${A.T.blur.soft}px)` }, eJ = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${A.T.blur.subtle}px)`,
    transition: eG
  }, eX = { opacity: 0, scale: 0.6, filter: `blur(${A.T.blur.subtle}px)` }, e0 = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, e1 = { opacity: 0, transition: { duration: A.T.duration.instant } };
  function e6({ file: e10 }) {
    let t2 = { size: 16, strokeWidth: 1.8, "aria-hidden": true };
    return e10.type.startsWith("image/") ? (0, a.jsx)(eO.A, { ...t2 }) : e10.type.startsWith("text/") ? (0, a.jsx)(d.A, { ...t2 }) : e10.type.includes("zip") || e10.name.endsWith(".gz") ? (0, a.jsx)(eB.A, { ...t2 }) : (0, a.jsx)(eW.A, { ...t2 });
  }
  function e5(e10) {
    if (e10 < 1024) return `${e10} B`;
    if (e10 < 1048576) return `${Math.round(e10 / 1024)} KB`;
    let t2 = e10 / 1048576;
    return `${t2 >= 10 ? Math.round(t2) : Number(t2.toFixed(1))} MB`;
  }
  function e2(e10) {
    let t2 = (0, eM.tF)();
    return (0, a.jsx)(o.PY1.span, {
      ...e10,
      "aria-hidden": !t2 || e10["aria-hidden"]
    });
  }
  function e4({
    item: e10,
    upload: t2,
    reduce: i2,
    onRemove: s2,
    onRetry: l2,
    removeRef: d2
  }) {
    let c2 = t2?.status, [u2, p2] = (0, n.useState)("uploading" !== c2), [h2, m2] = (0, n.useState)(c2);
    h2 !== c2 && (m2(c2), "uploading" === c2 && p2(false));
    let x2 = "done" !== c2 || u2 || i2 ? c2 : "uploading", f2 = e10.error ? "invalid" : x2 ?? "ready", _2 = (0, $.d)(t2?.progress ?? 0), b2 = (0, eY.G)(_2, (e11) => `${Math.min(Math.max(e11, 0), 100) - 100}%`), y2 = (0, eY.G)(_2, (e11) => `${Math.round(Math.min(Math.max(e11, 0), 100))}%`), g2 = "done" === c2 ? 100 : t2?.progress ?? 0;
    return (0, n.useEffect)(() => {
      if (i2 || "uploading" === c2 && 0 === g2) return void _2.jump(g2);
      let e11 = (0, P.i)(_2, g2, {
        ...A.T.spring.smooth,
        onComplete: "done" === c2 ? () => p2(true) : void 0
      });
      return () => e11.stop();
    }, [c2, g2, _2, i2]), (0, eF.L)(_2, "change", (e11) => {
      "done" === c2 && e11 >= 99.5 && p2(true);
    }), (0, a.jsxs)("div", {
      className: eK().fileItem,
      children: [
        (0, a.jsx)("span", {
          className: eK().fileIcon,
          children: (0, a.jsx)(e6, { file: e10.file })
        }),
        (0, a.jsxs)("span", {
          className: eK().fileCopy,
          children: [
            (0, a.jsx)("strong", {
              title: e10.file.name,
              children: e10.file.name
            }),
            (0, a.jsxs)("span", {
              className: eK().meta,
              children: [
                e5(e10.file.size),
                x2 ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: eK().dot,
                      "aria-hidden": "true",
                      children: "\xB7"
                    }),
                    (0, a.jsx)("span", {
                      className: eK().phase,
                      children: (0, a.jsx)(r.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, a.jsx)(
                          e2,
                          {
                            className: "failed" === x2 ? `${eK().phaseText} ${eK().error}` : eK().phaseText,
                            ...{
                              initial: i2 ? { opacity: 0 } : eQ,
                              animate: e0,
                              exit: i2 ? e1 : eJ,
                              transition: i2 ? eZ : eq
                            },
                            children: "uploading" === x2 ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                "Uploading ",
                                (0, a.jsx)(o.PY1.span, {
                                  className: eK().percent,
                                  children: y2
                                })
                              ]
                            }) : "done" === x2 ? "Uploaded" : "Upload failed"
                          },
                          x2
                        )
                      })
                    })
                  ]
                }) : null
              ]
            }),
            e10.error && (0, a.jsx)("span", {
              className: eK().error,
              children: e10.error
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: "uploading" === x2 && (0, a.jsx)(
                o.PY1.span,
                {
                  className: eK().barFrame,
                  initial: i2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: i2 ? e1 : {
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { ...A.T.spring.smooth, delay: 0.24 },
                      opacity: { ...eG, delay: 0.24 }
                    }
                  },
                  transition: i2 ? eZ : { height: A.T.spring.smooth, opacity: eq },
                  children: (0, a.jsx)("span", {
                    className: eK().bar,
                    children: (0, a.jsx)(o.PY1.span, {
                      className: eK().barFill,
                      style: { x: b2 }
                    })
                  })
                },
                "bar"
              )
            })
          ]
        }),
        (0, a.jsx)("span", {
          className: eK().statusSlot,
          children: (0, a.jsxs)(r.N, {
            mode: "popLayout",
            initial: false,
            children: [
              ("ready" === f2 || "done" === f2) && (0, a.jsxs)(
                o.PY1.span,
                {
                  className: eK().ready,
                  initial: i2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: e1,
                  transition: i2 ? eZ : A.T.spring.snappy,
                  children: [
                    (0, a.jsx)("svg", {
                      width: 14,
                      height: 14,
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      children: (0, a.jsx)(o.PY1.path, {
                        d: "M4 12.5l5 5L20 6.5",
                        initial: !i2 && { pathLength: 0 },
                        animate: { pathLength: 1 },
                        transition: { ...eq, delay: 0.08 }
                      })
                    }),
                    (0, a.jsx)("span", {
                      className: eK().srOnly,
                      children: "done" === f2 ? "Uploaded" : "Ready"
                    })
                  ]
                },
                "ready"
              ),
              "failed" === f2 && (0, a.jsx)(
                o.PY1.span,
                {
                  className: eK().retrySlot,
                  initial: i2 ? { opacity: 0 } : eX,
                  animate: e0,
                  exit: i2 ? e1 : { ...eX, transition: eG },
                  transition: i2 ? eZ : A.T.spring.snappy,
                  children: (0, a.jsx)("button", {
                    type: "button",
                    className: eK().retry,
                    "aria-label": `Retry ${e10.file.name}`,
                    onClick: l2,
                    children: (0, a.jsx)(eV.A, {
                      size: 14,
                      strokeWidth: 1.8,
                      "aria-hidden": "true"
                    })
                  })
                },
                "retry"
              )
            ]
          })
        }),
        (0, a.jsx)("button", {
          ref: d2,
          type: "button",
          className: eK().remove,
          "aria-label": `Remove ${e10.file.name}`,
          onClick: s2,
          children: (0, a.jsx)(J.A, { size: 15, "aria-hidden": "true" })
        })
      ]
    });
  }
  function e7({
    accept: e10,
    disabled: t2 = false,
    label: i2 = "Upload files",
    description: l2 = "Drop files here or browse from your device.",
    multiple: d2 = true,
    maxSize: c2,
    value: u2,
    onChange: p2,
    onUpload: h2
  }) {
    let m2 = (0, n.useId)(), x2 = (0, s.I)(), f2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), [b2, y2] = (0, n.useState)([]), [g2, j2] = (0, n.useState)(false), [v2, w2] = (0, n.useState)(""), [T2, N2] = (0, n.useState)({}), k2 = (0, n.useRef)(0), S2 = (0, n.useRef)(0), $2 = (0, n.useRef)(/* @__PURE__ */ new Map()), P2 = (0, n.useRef)(/* @__PURE__ */ new Map()), C2 = u2 ?? b2;
    function z2(e11) {
      void 0 === u2 && y2(e11), p2?.(e11);
    }
    function D2(e11) {
      if (!h2) return;
      $2.current.get(e11.id)?.abort();
      let t3 = new AbortController();
      $2.current.set(e11.id, t3);
      let i3 = (t4) => N2((i4) => ({ ...i4, [e11.id]: t4(i4[e11.id]) }));
      i3(() => ({ status: "uploading", progress: 0 })), h2(e11.file, {
        signal: t3.signal,
        onProgress: (e12) => {
          t3.signal.aborted || i3((t4) => ({
            status: "uploading",
            progress: Math.min(Math.max(e12, t4?.progress ?? 0), 100)
          }));
        }
      }).then(
        () => {
          t3.signal.aborted || (i3(() => ({ status: "done", progress: 100 })), w2(`${e11.file.name} uploaded.`));
        },
        () => {
          t3.signal.aborted || (i3((e12) => ({ status: "failed", progress: e12?.progress ?? 0 })), w2(`${e11.file.name} could not be uploaded.`));
        }
      ).finally(() => {
        $2.current.get(e11.id) === t3 && $2.current.delete(e11.id);
      });
    }
    function R2(t3) {
      let i3 = Array.from(t3).slice(0, d2 ? void 0 : 1), a2 = e10?.split(",").map((e11) => e11.trim().toLowerCase()).filter(Boolean) ?? [], n2 = i3.map((e11) => ({
        id: `${e11.name}-${e11.lastModified}-${S2.current++}`,
        file: e11,
        error: 0 === a2.length || a2.some(
          (t4) => t4.startsWith(".") ? e11.name.toLowerCase().endsWith(t4) : t4.endsWith("/*") ? e11.type.startsWith(t4.slice(0, -1)) : e11.type === t4
        ) ? c2 && e11.size > c2 ? `File is larger than ${e5(c2)}.` : void 0 : "This file type is not accepted."
      }));
      d2 || $2.current.forEach((e11) => e11.abort()), z2(d2 ? [...C2, ...n2] : n2);
      let s2 = n2.filter((e11) => e11.error).length, r2 = n2.length - s2, o2 = `${r2} file${1 === r2 ? "" : "s"} added.`, l3 = `${s2} file${1 === s2 ? " needs" : "s need"} attention.`;
      w2(s2 ? r2 ? `${o2} ${l3}` : l3 : o2), n2.filter((e11) => !e11.error).forEach(D2);
    }
    (0, n.useEffect)(() => {
      let e11 = $2.current;
      return () => e11.forEach((e12) => e12.abort());
    }, []);
    let L2 = x2 ? eZ : { height: A.T.spring.smooth, opacity: eq };
    return (0, a.jsxs)("div", {
      className: eK().root,
      children: [
        (0, a.jsx)("input", {
          ref: f2,
          id: m2,
          className: eK().input,
          type: "file",
          accept: e10,
          multiple: d2,
          disabled: t2,
          tabIndex: -1,
          "aria-hidden": "true",
          onChange: function(e11) {
            e11.target.files && R2(e11.target.files), e11.target.value = "";
          }
        }),
        (0, a.jsxs)("div", {
          ref: _2,
          className: [
            eK().dropzone,
            g2 ? eK().dragging : "",
            t2 ? eK().disabled : ""
          ].filter(Boolean).join(" "),
          role: "button",
          tabIndex: t2 ? -1 : 0,
          "aria-disabled": t2,
          "aria-describedby": `${m2}-description`,
          onClick: () => !t2 && f2.current?.click(),
          onKeyDown: function(e11) {
            t2 || ("Enter" === e11.key || " " === e11.key) && (e11.preventDefault(), f2.current?.click());
          },
          onDragEnter: function(e11) {
            e11.preventDefault(), t2 || (k2.current += 1, j2(true));
          },
          onDragOver: (e11) => e11.preventDefault(),
          onDragLeave: function(e11) {
            e11.preventDefault(), k2.current = Math.max(0, k2.current - 1), 0 === k2.current && j2(false);
          },
          onDrop: function(e11) {
            e11.preventDefault(), k2.current = 0, j2(false), !t2 && e11.dataTransfer.files.length && R2(e11.dataTransfer.files);
          },
          children: [
            (0, a.jsx)("span", {
              className: eK().uploadIcon,
              children: (0, a.jsx)(eU.A, {
                size: 20,
                strokeWidth: 1.8,
                "aria-hidden": "true"
              })
            }),
            (0, a.jsxs)("span", {
              className: eK().copy,
              children: [
                (0, a.jsx)("strong", {
                  className: eK().label,
                  children: (0, a.jsx)(r.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, a.jsx)(
                      e2,
                      {
                        className: eK().labelText,
                        initial: x2 ? { opacity: 0 } : eQ,
                        animate: e0,
                        exit: x2 ? e1 : eJ,
                        transition: x2 ? eZ : eq,
                        children: g2 ? `Drop to add ${d2 ? "files" : "a file"}` : i2
                      },
                      g2 ? "drop" : "idle"
                    )
                  })
                }),
                (0, a.jsx)("span", { id: `${m2}-description`, children: l2 })
              ]
            }),
            (0, a.jsx)("span", { className: eK().browse, children: "Browse" })
          ]
        }),
        (0, a.jsx)(o.PY1.div, {
          className: eK().statusFrame,
          initial: false,
          animate: { height: v2 ? "auto" : 0 },
          transition: L2,
          children: (0, a.jsx)("p", {
            className: eK().status,
            "aria-live": "polite",
            "aria-atomic": "true",
            children: (0, a.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              children: v2 ? (0, a.jsx)(
                e2,
                {
                  className: eK().statusText,
                  initial: x2 ? { opacity: 0 } : eQ,
                  animate: e0,
                  exit: x2 ? e1 : eJ,
                  transition: x2 ? eZ : eq,
                  children: v2
                },
                v2
              ) : null
            })
          })
        }),
        (0, a.jsx)(o.PY1.ul, {
          className: eK().fileList,
          "aria-label": "Selected files",
          "aria-hidden": 0 === C2.length || void 0,
          initial: false,
          animate: { paddingTop: 6 * !!C2.length },
          transition: x2 ? eZ : A.T.spring.smooth,
          children: (0, a.jsx)(r.N, {
            initial: false,
            children: C2.map(
              (e11) => (0, a.jsx)(
                o.PY1.li,
                {
                  className: eK().fileRow,
                  initial: x2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: x2 ? e1 : {
                    height: 0,
                    opacity: 0,
                    transition: { height: A.T.spring.smooth, opacity: eG }
                  },
                  transition: L2,
                  children: (0, a.jsx)(e4, {
                    item: e11,
                    upload: T2[e11.id],
                    reduce: x2,
                    onRemove: () => {
                      let t3, i3;
                      return $2.current.get(e11.id)?.abort(), $2.current.delete(e11.id), t3 = C2.findIndex((t4) => t4.id === e11.id), i3 = C2[t3 + 1] ?? C2[t3 - 1], void (z2(C2.filter((t4) => t4.id !== e11.id)), w2(`${e11.file.name} removed.`), requestAnimationFrame(
                        () => (i3 ? P2.current.get(i3.id) : _2.current)?.focus()
                      ));
                    },
                    onRetry: () => D2(e11),
                    removeRef: (t3) => {
                      t3 ? P2.current.set(e11.id, t3) : P2.current.delete(e11.id);
                    }
                  })
                },
                e11.id
              )
            )
          })
        })
      ]
    });
  }
  var e8 = i(95114), e9 = i(67752), e3 = i(78766), te = i(61078), tt = i(66558), ti = i(65332), ta = i(24558), tn = i(59103), ts = i(63386), tr = i.n(ts);
  let to = (e10) => String(e10).padStart(2, "0"), tl = (e10) => {
    let [t2 = NaN, i2 = NaN] = e10.split(":").map(Number);
    return Number.isFinite(t2) && Number.isFinite(i2) ? 60 * t2 + i2 : 0;
  }, td = A.T.ease.enter, tc = A.T.ease.standard, tu = {
    enter: (e10) => ({
      opacity: 0,
      y: `${0.35 * e10}em`,
      filter: `blur(${A.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.standard, ease: td }
    },
    exit: (e10) => ({
      opacity: 0,
      y: `${-0.3 * e10}em`,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: { duration: A.T.duration.fast, ease: tc }
    })
  }, tp = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: A.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: A.T.duration.instant } }
  };
  function th({
    label: e10,
    value: t2,
    defaultValue: i2 = "09:00",
    onChange: l2,
    description: d2,
    placeholder: c2 = "Select a time",
    minuteStep: u2 = 15,
    format: p2 = "12h",
    disabled: h2 = false,
    className: m2
  }) {
    let x2 = (0, n.useId)(), f2 = `${x2}-label`, _2 = `${x2}-value`, b2 = (0, n.useRef)(null), y2 = (0, n.useRef)([]), g2 = (0, n.useRef)(false), [j2, v2] = (0, n.useState)(i2), [w2, T2] = (0, n.useState)(false), [N2, k2] = (0, n.useState)(-1), S2 = t2 ?? j2, $2 = (0, s.I)(), [P2, z2] = (0, n.useState)(S2), [D2, R2] = (0, n.useState)(1);
    P2 !== S2 && (z2(S2), R2(tl(S2) >= tl(P2) ? 1 : -1));
    let L2 = Array.from({ length: Math.ceil(1440 / u2) }, (e11, t3) => {
      let i3 = t3 * u2, a2 = Math.floor(i3 / 60);
      return `${to(a2)}:${to(i3 % 60)}`;
    }), E2 = (e11) => {
      let t3 = tl(e11), i3 = Math.floor(t3 / 60), a2 = t3 % 60;
      return "24h" === p2 ? `${to(i3)}:${to(a2)}` : `${i3 % 12 || 12}:${to(a2)} ${i3 < 12 ? "AM" : "PM"}`;
    };
    (0, n.useEffect)(() => {
      let e11 = (e12) => {
        b2.current?.contains(e12.target) || T2(false);
      };
      return document.addEventListener("pointerdown", e11), () => document.removeEventListener("pointerdown", e11);
    }, []), (0, n.useLayoutEffect)(() => {
      if (!w2 || N2 < 0) return;
      let e11 = y2.current[N2], t3 = e11?.parentElement;
      if (!e11 || !t3) return;
      let i3 = e11.offsetTop, a2 = i3 + e11.offsetHeight;
      g2.current ? (g2.current = false, t3.scrollTop = i3 - (t3.clientHeight - e11.offsetHeight) / 2) : i3 < t3.scrollTop ? t3.scrollTop = i3 : a2 > t3.scrollTop + t3.clientHeight && (t3.scrollTop = a2 - t3.clientHeight);
    }, [N2, w2]);
    let I2 = (e11) => {
      void 0 === t2 && v2(e11), l2?.(e11), T2(false);
    }, M2 = () => {
      let e11 = L2.indexOf(S2);
      k2(e11 >= 0 ? e11 : 0), g2.current = true, T2(true);
    };
    return (0, a.jsxs)("div", {
      ref: b2,
      className: [tr().field, m2].filter(Boolean).join(" "),
      children: [
        (0, a.jsx)("span", { id: f2, className: tr().label, children: e10 }),
        (0, a.jsxs)("div", {
          className: tr().anchor,
          children: [
            (0, a.jsxs)("button", {
              type: "button",
              className: tr().trigger,
              disabled: h2,
              "aria-labelledby": `${f2} ${_2}`,
              "aria-haspopup": "listbox",
              "aria-expanded": w2,
              "aria-controls": `${x2}-listbox`,
              onClick: () => w2 ? T2(false) : M2(),
              onKeyDown: (e11) => {
                if ("Escape" === e11.key) {
                  e11.preventDefault(), T2(false);
                  return;
                }
                if ("Enter" === e11.key || " " === e11.key) {
                  e11.preventDefault(), w2 && N2 >= 0 ? I2(L2[N2]) : M2();
                  return;
                }
                if ("ArrowDown" === e11.key || "ArrowUp" === e11.key) {
                  if (e11.preventDefault(), !w2) return void M2();
                  k2(
                    (t3) => (t3 + ("ArrowDown" === e11.key ? 1 : -1) + L2.length) % L2.length
                  );
                }
              },
              children: [
                (0, a.jsx)(tn.A, { size: 16, "aria-hidden": "true" }),
                (0, a.jsx)("span", {
                  id: _2,
                  className: tr().srOnly,
                  children: S2 ? E2(S2) : c2
                }),
                (0, a.jsx)("span", {
                  className: tr().valueText,
                  "aria-hidden": "true",
                  children: (0, a.jsx)(r.N, {
                    initial: false,
                    custom: D2,
                    children: (0, a.jsx)(
                      o.PY1.span,
                      {
                        className: S2 ? tr().value : tr().placeholder,
                        custom: D2,
                        variants: $2 ? tp : tu,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: S2 ? E2(S2) : c2
                      },
                      S2 || "placeholder"
                    )
                  })
                }),
                (0, a.jsx)(C.A, {
                  className: tr().chevron,
                  size: 16,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, a.jsx)(r.N, {
              initial: false,
              children: w2 && (0, a.jsx)(o.PY1.div, {
                id: `${x2}-listbox`,
                className: tr().menu,
                role: "listbox",
                "aria-label": `${e10} options`,
                initial: $2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: $2 ? { duration: A.T.duration.instant } : {
                    ...A.T.spring.snappy,
                    opacity: { duration: A.T.duration.fast, ease: td }
                  }
                },
                exit: {
                  opacity: 0,
                  ...$2 ? {} : { y: -4, scale: 0.98 },
                  transition: { duration: A.T.duration.instant, ease: tc }
                },
                children: L2.map(
                  (e11, t3) => (0, a.jsxs)(
                    "button",
                    {
                      ref: (e12) => {
                        y2.current[t3] = e12;
                      },
                      id: `${x2}-option-${t3}`,
                      type: "button",
                      role: "option",
                      "aria-selected": e11 === S2,
                      "data-active": N2 === t3 || void 0,
                      className: tr().option,
                      onPointerMove: () => {
                        N2 !== t3 && k2(t3);
                      },
                      onClick: () => I2(e11),
                      children: [
                        E2(e11),
                        e11 === S2 && (0, a.jsx)("span", {
                          className: tr().dot,
                          "aria-hidden": "true"
                        })
                      ]
                    },
                    e11
                  )
                )
              })
            })
          ]
        }),
        d2 && (0, a.jsx)("span", { className: tr().description, children: d2 })
      ]
    });
  }
  var tm = i(44818), tx = i(67834), tf = i.n(tx);
  let t_ = [
    { value: "design", label: "Design" },
    { value: "engineering", label: "Engineering" },
    { value: "research", label: "Research" }
  ], tb = [
    { value: "emma", label: "Emma Collins", keywords: ["design", "owner"] },
    { value: "marcus", label: "Marcus Johnson", keywords: ["engineering"] },
    { value: "ava", label: "Ava Mitchell", keywords: ["research"] }
  ], ty = [
    { value: "motion", label: "Motion" },
    { value: "accessibility", label: "Accessibility" },
    { value: "content", label: "Content" },
    { value: "research", label: "Research" }
  ], tg = [
    {
      id: "hero-shot",
      name: "lounge-chair-hero.jpg",
      size: 18874368e-1,
      status: "uploaded",
      preview: (0, e9.jW)("lounge-chair").src
    },
    {
      id: "brand-guidelines",
      name: "brand-guidelines.pdf",
      size: 25165824e-1,
      status: "uploaded"
    },
    {
      id: "launch-video",
      name: "launch-video.mov",
      size: 90177536e-1,
      status: "failed",
      error: "Connection lost"
    }
  ], tj = (e10, { onProgress: t2, signal: i2 }) => new Promise((a2, n2) => {
    let s2 = 0, r2 = 0, o2 = Math.min(1.5, Math.max(0.9, 2621440 / Math.max(e10.size, 1))), l2 = () => {
      window.clearTimeout(r2), n2(new DOMException("Upload cancelled", "AbortError"));
    }, d2 = () => {
      if (t2(s2 = Math.min(100, s2 + (5 + 17 * Math.random()) * o2)), s2 >= 100) {
        i2.removeEventListener("abort", l2), a2();
        return;
      }
      r2 = window.setTimeout(
        d2,
        130 + 220 * Math.random() + 380 * (0.15 > Math.random())
      );
    };
    i2.addEventListener("abort", l2, { once: true }), r2 = window.setTimeout(d2, 220);
  }), tv = [
    {
      id: "new-project",
      label: "New project",
      description: "Start from a blank setup",
      group: "Create",
      icon: (0, a.jsx)(l.A, { size: 16 }),
      shortcut: "N",
      keywords: ["create", "add"]
    },
    {
      id: "new-document",
      label: "New document",
      description: "Write a brief or a spec",
      group: "Create",
      icon: (0, a.jsx)(d.A, { size: 16 }),
      shortcut: "\u21E7 N",
      keywords: ["create", "page"]
    },
    {
      id: "invite",
      label: "Invite teammate",
      description: "Send an invite by email",
      group: "Create",
      icon: (0, a.jsx)(c.A, { size: 16 }),
      keywords: ["new member", "add people"]
    },
    {
      id: "edit",
      label: "Edit project",
      description: "Update the project details",
      group: "Project",
      icon: (0, a.jsx)(u.A, { size: 16 }),
      shortcut: "E",
      keywords: ["rename"]
    },
    {
      id: "duplicate",
      label: "Duplicate project",
      description: "Create a copy with the same setup",
      group: "Project",
      icon: (0, a.jsx)(p.A, { size: 16 }),
      shortcut: "D"
    },
    {
      id: "share",
      label: "Share project",
      description: "Invite someone to collaborate",
      group: "Project",
      icon: (0, a.jsx)(h.A, { size: 16 }),
      shortcut: "S",
      keywords: ["collaborate"]
    },
    {
      id: "share-link",
      label: "Copy share link",
      description: "Anyone with the link can view",
      group: "Project",
      icon: (0, a.jsx)(m.A, { size: 16 }),
      shortcut: "\u21E7 C",
      keywords: ["url"]
    },
    {
      id: "download",
      label: "Download brief",
      description: "Save the project brief as a PDF",
      group: "Project",
      icon: (0, a.jsx)(x.A, { size: 16 }),
      keywords: ["export", "pdf"]
    },
    {
      id: "theme",
      label: "Toggle theme",
      description: "Switch between light and dark",
      group: "Preferences",
      icon: (0, a.jsx)(f.A, { size: 16 }),
      shortcut: "T",
      keywords: ["dark mode", "light mode", "appearance"]
    },
    {
      id: "accent",
      label: "Change accent color",
      description: "Pick the color for buttons and links",
      group: "Preferences",
      icon: (0, a.jsx)(_.A, { size: 16 }),
      keywords: ["theme", "appearance"]
    },
    {
      id: "archive",
      label: "Archive project",
      description: "Move this project out of the workspace",
      group: "Project",
      icon: (0, a.jsx)(b.A, { size: 16 })
    }
  ];
  function tw({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(false), l2 = (0, s.I)() ?? false;
    return (0, a.jsx)("div", {
      className: tf().commandPreview,
      onKeyDown: (e11) => {
        "Escape" !== e11.key || e11.defaultPrevented || i2(false);
      },
      children: (0, a.jsx)(r.N, {
        initial: false,
        mode: "wait",
        children: t2 ? (0, a.jsx)(
          o.PY1.div,
          {
            className: tf().commandPaletteSurface,
            initial: false,
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: l2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: 4,
              scale: 0.985,
              transition: {
                duration: A.T.duration.exit,
                ease: [...A.T.ease.exit]
              }
            },
            children: (0, a.jsx)(K.x, {
              autoFocus: true,
              label: "Project commands",
              placeholder: "Search project commands",
              items: tv,
              onSelect: (t3) => {
                e10(`${t3.label} selected`), i2(false);
              },
              onClose: () => i2(false)
            })
          },
          "palette"
        ) : (0, a.jsx)(
          o.PY1.div,
          {
            initial: !l2 && { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            exit: l2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              scale: 0.97,
              transition: {
                duration: A.T.duration.instant,
                ease: [...A.T.ease.exit]
              }
            },
            transition: l2 ? { duration: 0 } : {
              default: A.T.spring.snappy,
              opacity: {
                duration: A.T.duration.fast,
                ease: [...A.T.ease.enter]
              }
            },
            children: (0, a.jsx)(T.$, {
              variant: "secondary",
              onClick: () => i2(true),
              children: "Open command palette"
            })
          },
          "trigger"
        )
      })
    });
  }
  function tT({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)("idle");
    return (0, a.jsxs)("div", {
      className: tf().buttonExamples,
      children: [
        (0, a.jsxs)("div", {
          className: tf().buttonExample,
          children: [
            (0, a.jsx)("span", {
              className: tf().buttonExampleLabel,
              children: "Styles"
            }),
            (0, a.jsxs)("div", {
              className: tf().buttonExampleRow,
              children: [
                (0, a.jsx)(T.$, {
                  onClick: () => e10("Changes saved"),
                  children: "Save changes"
                }),
                (0, a.jsx)(T.$, {
                  variant: "secondary",
                  onClick: () => e10("Draft saved"),
                  children: "Secondary"
                }),
                (0, a.jsx)(T.$, {
                  variant: "ghost",
                  onClick: () => e10("Preview opened"),
                  children: "Ghost"
                }),
                (0, a.jsx)(T.$, {
                  variant: "danger",
                  onClick: () => e10("Delete requested"),
                  children: "Delete"
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().buttonExample,
          children: [
            (0, a.jsx)("span", {
              className: tf().buttonExampleLabel,
              children: "Icons and sizes"
            }),
            (0, a.jsxs)("div", {
              className: tf().buttonExampleRow,
              children: [
                (0, a.jsxs)(T.$, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => e10("Item added"),
                  children: [
                    (0, a.jsx)(l.A, { size: 16, "aria-hidden": "true" }),
                    " Add item"
                  ]
                }),
                (0, a.jsxs)(T.$, {
                  onClick: () => e10("Continuing"),
                  children: [
                    "Continue ",
                    (0, a.jsx)(y.A, { size: 16, "aria-hidden": "true" })
                  ]
                }),
                (0, a.jsx)(T.$, {
                  size: "sm",
                  variant: "ghost",
                  "aria-label": "More options",
                  title: "More options",
                  className: tf().iconButton,
                  onClick: () => e10("More options opened"),
                  children: (0, a.jsx)(g.A, {
                    size: 18,
                    "aria-hidden": "true"
                  })
                }),
                (0, a.jsx)(T.$, {
                  size: "lg",
                  variant: "secondary",
                  onClick: () => e10("Large button selected"),
                  children: "Large"
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().buttonExample,
          children: [
            (0, a.jsx)("span", {
              className: tf().buttonExampleLabel,
              children: "Feedback and states"
            }),
            (0, a.jsxs)("div", {
              className: tf().buttonExampleRow,
              children: [
                (0, a.jsx)(q.CopyButton, {
                  value: "https://example.com/components/button",
                  label: "Copy link"
                }),
                (0, a.jsx)(q.CopyButton, {
                  value: "https://example.com/components/button",
                  label: "Copy link",
                  iconOnly: true
                }),
                (0, a.jsx)(T.$, {
                  size: "sm",
                  variant: "secondary",
                  loading: "loading" === t2,
                  onClick: function() {
                    "idle" === t2 && (i2("loading"), window.setTimeout(() => {
                      i2("done"), e10("Upload complete"), window.setTimeout(() => i2("idle"), 1800);
                    }, 1200));
                  },
                  children: "done" === t2 ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(j.A, {
                        size: 16,
                        "aria-hidden": "true"
                      }),
                      " Uploaded"
                    ]
                  }) : "Upload file"
                }),
                (0, a.jsx)(T.$, {
                  size: "sm",
                  variant: "secondary",
                  disabled: true,
                  children: "Disabled"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let tN = [
    {
      id: "follow",
      label: "Follow",
      icon: (0, a.jsx)(c.A, { size: 16 }),
      tone: "neutral"
    },
    {
      id: "following",
      label: "Following",
      icon: (0, a.jsx)(j.A, { size: 16 }),
      tone: "quiet"
    }
  ], tk = [
    {
      id: "add",
      label: "Add to library",
      icon: (0, a.jsx)(l.A, { size: 16 }),
      tone: "quiet"
    },
    {
      id: "added",
      label: "Added",
      icon: (0, a.jsx)(j.A, { size: 16 }),
      tone: "success"
    }
  ], tS = [
    {
      id: "send",
      label: "Send invite",
      icon: (0, a.jsx)(v.A, { size: 16 }),
      tone: "accent"
    },
    {
      id: "sent",
      label: "Sent",
      icon: (0, a.jsx)(j.A, { size: 16 }),
      tone: "success",
      pendingLabel: "Sending",
      holdFor: 2200
    }
  ];
  function t$({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(false), s2 = (i3, a2) => new Promise(
      (n2, s3) => window.setTimeout(() => {
        if (!t2) return n2();
        e10(a2), s3(Error("offline"));
      }, i3)
    );
    return (0, a.jsxs)("div", {
      className: tf().swapDemo,
      children: [
        (0, a.jsxs)("div", {
          className: tf().swapDemoRow,
          children: [
            (0, a.jsxs)("span", {
              className: tf().swapDemoText,
              children: [
                (0, a.jsx)("strong", { children: "Emma Collins" }),
                (0, a.jsx)("span", { children: "Design lead at Arc" })
              ]
            }),
            (0, a.jsx)(N.m, {
              size: "sm",
              states: tN,
              onValueChange: (t3) => e10(
                "following" === t3 ? "You\u2019re following Emma Collins" : "You unfollowed Emma Collins"
              )
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().swapDemoRow,
          children: [
            (0, a.jsxs)("span", {
              className: tf().swapDemoText,
              children: [
                (0, a.jsx)("strong", { children: "Designing calm interfaces" }),
                (0, a.jsx)("span", { children: "Article \xB7 8 min read" })
              ]
            }),
            (0, a.jsx)(N.m, {
              size: "sm",
              states: tk,
              onAction: (e11) => "added" === e11.id ? s2(1100, "Couldn\u2019t save the article. Try again") : void 0,
              onValueChange: (t3) => e10(
                "added" === t3 ? "Saved to your library" : "Removed from your library"
              )
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: tf().swapDemoRow,
          children: [
            (0, a.jsxs)("span", {
              className: tf().swapDemoText,
              children: [
                (0, a.jsx)("strong", { children: "Ava Mitchell" }),
                (0, a.jsx)("span", { children: "ava@example.com" })
              ]
            }),
            (0, a.jsx)(N.m, {
              size: "sm",
              states: tS,
              onAction: (e11) => "sent" === e11.id ? s2(1300, "Couldn\u2019t send the invite. Try again") : void 0,
              onValueChange: (t3) => {
                "sent" === t3 && e10("Invite sent to Ava Mitchell");
              }
            })
          ]
        }),
        (0, a.jsx)(ej.d, {
          className: tf().swapDemoSwitch,
          checked: t2,
          onCheckedChange: (t3) => {
            i2(t3), e10(
              t3 ? "Connection lost: the next request will fail" : "Connection restored"
            );
          },
          label: "Simulate a lost connection"
        })
      ]
    });
  }
  function tP() {
    let [e10, t2] = (0, n.useState)("Arc launch"), i2 = 0 === e10.trim().length;
    return (0, a.jsx)(eh.p, {
      label: "Project name",
      value: e10,
      onChange: (e11) => t2(e11.target.value),
      description: i2 ? void 0 : "Use a short, descriptive name.",
      error: i2 ? "Enter a project name." : void 0
    });
  }
  function tC({ announce: e10 }) {
    let [t2, i2] = (0, n.useState)(null), s2 = (t3, a2, n2) => {
      let s3 = performance.now();
      i2({ at: s3, label: t3, icon: a2 }), e10(n2), window.setTimeout(() => i2((e11) => e11?.at === s3 ? null : e11), 2200);
    };
    return (0, a.jsx)("div", {
      className: tf().actionSolo,
      children: (0, a.jsx)(V, {
        label: t2?.label ?? "Publish",
        icon: t2?.icon ?? (0, a.jsx)(v.A, { size: 15 }),
        onClick: () => s2("Published", (0, a.jsx)(j.A, { size: 15 }), "Published"),
        actions: [
          {
            label: "Publish and notify",
            icon: (0, a.jsx)(v.A, { size: 15 }),
            onSelect: () => s2(
              "Published",
              (0, a.jsx)(j.A, { size: 15 }),
              "Published and notified the team"
            )
          },
          {
            label: "Save as draft",
            icon: (0, a.jsx)(d.A, { size: 15 }),
            onSelect: () => s2("Draft saved", (0, a.jsx)(d.A, { size: 15 }), "Draft saved")
          },
          {
            label: "Delete draft",
            icon: (0, a.jsx)(w.A, { size: 15 }),
            destructive: true,
            onSelect: () => s2(
              "Draft deleted",
              (0, a.jsx)(w.A, { size: 15 }),
              "Draft deleted"
            )
          }
        ]
      })
    });
  }
  function tA({ id: e10 }) {
    let t2, { copy: i2 } = (0, G.q)(), [s2, r2] = (0, n.useState)(""), [o2, l2] = (0, n.useState)(["motion"]), [d2, c2] = (0, n.useState)(true), [h2, m2] = (0, n.useState)(true), [f2, _2] = (0, n.useState)(8), [y2, j2] = (0, n.useState)(1), [v2, N2] = (0, n.useState)(""), [S2, $2] = (0, n.useState)(["release", "web"]), [P2, C2] = (0, n.useState)("482"), [A2, z2] = (0, n.useState)("emma"), [D2, R2] = (0, n.useState)("design"), [L2, E2] = (0, n.useState)("Review"), I2 = (0, ti.nl)(), [M2, Y2] = (0, n.useState)(), F2 = void 0 === M2 ? I2 && ((0, ti.fi)(I2, 3).getMonth() === I2.getMonth() ? (0, ti.fi)(I2, 3) : I2) : M2 ?? void 0, O2 = (e11) => e11.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    }), [B2, W2] = (0, n.useState)("09:30"), [V2, K2] = (0, n.useState)("focused"), J2 = (e11) => r2(e11), X2 = [
      {
        label: "Edit project",
        icon: (0, a.jsx)(u.A, { size: 15 }),
        onSelect: () => J2("Edit opened")
      },
      {
        label: "Download brief",
        icon: (0, a.jsx)(x.A, { size: 15 }),
        onSelect: () => J2("Brief queued")
      },
      {
        label: "Archive",
        icon: (0, a.jsx)(b.A, { size: 15 }),
        onSelect: () => J2("Project archived"),
        separatorBefore: true
      }
    ];
    switch (e10) {
      case "button":
        t2 = (0, a.jsx)(tT, { announce: J2 });
        break;
      case "action-swap":
        t2 = (0, a.jsx)(t$, { announce: J2 });
        break;
      case "action-button":
        t2 = (0, a.jsx)("div", {
          className: tf().actionSolo,
          children: (0, a.jsx)(k.r, {
            label: "Save changes",
            successLabel: "Saved",
            onAction: () => new Promise((e11) => window.setTimeout(e11, 420))
          })
        });
        break;
      case "split-button":
        t2 = (0, a.jsx)(tC, { announce: J2 });
        break;
      case "dropdown-menu":
        t2 = (0, a.jsx)(U.r, {
          label: "Project actions",
          icon: (0, a.jsx)(g.A, { size: 15 }),
          items: X2
        });
        break;
      case "context-menu":
        t2 = (0, a.jsx)(H.tz, {
          label: "Project actions",
          items: [
            {
              id: "edit",
              label: "Edit project",
              icon: (0, a.jsx)(u.A, { size: 15 }),
              onSelect: () => J2("Edit opened")
            },
            {
              id: "copy",
              label: "Copy link",
              icon: (0, a.jsx)(p.A, { size: 15 }),
              onSelect: () => {
                i2(window.location.href, "project-link").then(
                  (e11) => J2(e11 ? "Link copied" : "Could not copy link")
                );
              }
            },
            {
              id: "delete",
              label: "Delete project",
              icon: (0, a.jsx)(w.A, { size: 15 }),
              destructive: true,
              onSelect: () => J2("Project deleted")
            }
          ],
          children: (0, a.jsxs)("div", {
            className: tf().contextTarget,
            children: [
              (0, a.jsxs)("span", {
                className: tf().contextCopy,
                children: [
                  (0, a.jsx)("strong", { children: "Quarterly launch" }),
                  (0, a.jsx)("span", {
                    children: "Product \xB7 Updated today"
                  })
                ]
              }),
              (0, a.jsxs)("span", {
                className: tf().contextAction,
                children: [
                  (0, a.jsx)(g.A, { size: 15, "aria-hidden": "true" }),
                  " Open actions"
                ]
              })
            ]
          })
        });
        break;
      case "command-palette":
        t2 = (0, a.jsx)(tw, { announce: J2 });
        break;
      case "copy-button":
        t2 = (0, a.jsxs)("div", {
          className: tf().copyDemo,
          children: [
            (0, a.jsxs)("div", {
              className: tf().copyDemoField,
              children: [
                (0, a.jsx)("span", {
                  className: tf().copyDemoLabel,
                  children: "Share link"
                }),
                (0, a.jsxs)("div", {
                  className: tf().copyDemoValue,
                  children: [
                    (0, a.jsx)("code", { children: "example.com/launch" }),
                    (0, a.jsx)(q.CopyButton, {
                      value: "https://example.com/launch",
                      label: "Copy link"
                    })
                  ]
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: tf().copyDemoRow,
              children: [
                (0, a.jsx)("span", { children: "Invite code" }),
                (0, a.jsx)("code", { children: "ARC-4821" }),
                (0, a.jsx)(q.CopyButton, {
                  value: "ARC-4821",
                  label: "Copy invite code",
                  iconOnly: true,
                  variant: "plain"
                })
              ]
            })
          ]
        });
        break;
      case "drawer":
        t2 = (0, a.jsxs)(Z._s, {
          children: [
            (0, a.jsx)(Z.Uz, {
              asChild: true,
              children: (0, a.jsx)(T.$, {
                variant: "secondary",
                children: "Open details"
              })
            }),
            (0, a.jsx)(Z.zj, {
              title: "Launch details",
              description: "A quick look at the current project state.",
              children: (0, a.jsxs)("div", {
                className: tf().drawerDetails,
                children: [
                  (0, a.jsx)("strong", { children: "Ready for review" }),
                  (0, a.jsx)("p", {
                    children: "Three people are reviewing the final interaction pass."
                  }),
                  (0, a.jsx)(T.$, {
                    size: "sm",
                    onClick: () => J2("Review requested"),
                    children: "Request review"
                  })
                ]
              })
            })
          ]
        });
        break;
      case "selection-toolbar":
        t2 = (0, a.jsx)(ep, { announce: J2 });
        break;
      case "input":
        t2 = (0, a.jsx)(tP, {});
        break;
      case "textarea":
        t2 = (0, a.jsx)(em.T, {
          label: "Project note",
          defaultValue: "Keep the final pass calm and focused.",
          description: "Visible to everyone on the project."
        });
        break;
      case "select":
        t2 = (0, a.jsx)(ex.l, {
          label: "Team",
          value: D2,
          onValueChange: R2,
          options: t_,
          description: "Choose the team that owns this work."
        });
        break;
      case "combobox":
        t2 = (0, a.jsx)(eg, {
          label: "Owner",
          value: A2,
          onValueChange: z2,
          options: tb,
          placeholder: "Search people"
        });
        break;
      case "checkbox":
        t2 = (0, a.jsx)(Q.S, {
          checked: d2,
          onCheckedChange: (e11) => {
            let t3 = true === e11;
            c2(t3), J2(t3 ? "Archived projects included" : "Archived projects hidden");
          },
          label: "Include archived projects",
          description: "Show projects that are no longer active."
        });
        break;
      case "switch":
        t2 = (0, a.jsx)(ej.d, {
          checked: h2,
          onCheckedChange: m2,
          label: "Weekly digest"
        });
        break;
      case "multi-select":
        t2 = (0, a.jsx)(eD, {
          label: "Focus areas",
          value: o2,
          onValueChange: l2,
          options: ty,
          description: "Pick the areas to include in the review."
        });
        break;
      case "number-field":
        t2 = (0, a.jsxs)("div", {
          className: tf().numberFieldDemo,
          children: [
            (0, a.jsx)(eR.o, {
              label: "Seats",
              min: 1,
              max: 10,
              value: f2,
              onValueChange: _2,
              scrub: true,
              suffix: (e11) => 1 === e11 ? " seat" : " seats",
              description: `$${(12 * f2 + 4 * y2).toLocaleString("en-US")} per month, billed monthly`
            }),
            (0, a.jsx)(eR.o, {
              label: "Guest passes",
              size: "sm",
              min: 0,
              max: 3,
              value: y2,
              onValueChange: j2,
              description: "$4 each, up to 3 per workspace"
            })
          ]
        });
        break;
      case "password-field":
        t2 = (0, a.jsx)(eL.s, {
          label: "Access key",
          defaultValue: "arc-library-secret",
          description: "Use at least 8 characters."
        });
        break;
      case "search-field":
        t2 = (0, a.jsx)(eE.L, {
          label: "Search projects",
          value: v2,
          onValueChange: N2,
          placeholder: "Search by name"
        });
        break;
      case "tag-input":
        t2 = (0, a.jsx)("div", {
          className: tf().tagDemoX,
          children: (0, a.jsx)(eI.F, {
            label: "Project tags",
            value: S2,
            onValueChange: $2,
            placeholder: "Add a tag",
            description: "Press Enter to add a tag. Press Backspace twice to remove the last one."
          })
        });
        break;
      case "file-upload":
        t2 = (0, a.jsx)(e7, {
          label: "Upload brief",
          description: "PDF or markdown, up to 10\xA0MB.",
          accept: ".pdf,.md",
          maxSize: 10485760,
          multiple: false,
          onUpload: (e11, t3) => tj({ id: e11.name, name: e11.name, size: e11.size, file: e11 }, t3)
        });
        break;
      case "file-dropzone":
        t2 = (0, a.jsx)(e8.gH, {
          label: "Add launch assets",
          description: "Drop, paste, or choose files from your device",
          note: "PDF, images, or video up to 10 MB.",
          accept: "image/*,video/*,.pdf",
          maxSize: 10485760,
          maxFiles: 6,
          compactAt: 5,
          defaultItems: tg,
          onUpload: tj
        });
        break;
      case "otp-input":
        t2 = (0, a.jsx)(e3.I, {
          label: "Verification code",
          value: P2,
          onChange: C2,
          description: "Use the six digit code from your email."
        });
        break;
      case "radio-group":
        t2 = (0, a.jsx)(te.z, {
          label: "Review mode",
          value: V2,
          onValueChange: K2,
          options: [
            {
              value: "focused",
              label: "Focused review",
              description: "One reviewer at a time."
            },
            {
              value: "open",
              label: "Open review",
              description: "Everyone can comment together."
            },
            {
              value: "async",
              label: "Async review",
              description: "Reviewers leave notes when they can."
            }
          ]
        });
        break;
      case "segmented-control":
        t2 = (0, a.jsx)(tt.A, {
          label: "Project view",
          value: L2,
          onValueChange: E2,
          options: [
            { value: "Review", label: "Review" },
            { value: "Activity", label: "Activity" },
            { value: "Files", label: "Files" }
          ]
        });
        break;
      case "calendar":
        t2 = (0, a.jsx)("div", {
          className: tf().calendarDemoStage,
          children: (0, a.jsx)("div", {
            className: tf().calendarDemoFrame,
            children: (0, a.jsx)("div", {
              className: tf().calendarDemoCard,
              children: (0, a.jsx)(ti.Vv, {
                value: F2,
                onChange: (e11) => {
                  Y2(e11), J2(`Launch set for ${O2(e11)}`);
                },
                minDate: I2,
                showToday: true
              })
            })
          })
        });
        break;
      case "date-picker":
        t2 = (0, a.jsx)(ta.l, {
          label: "Launch date",
          value: F2,
          onChange: (e11) => {
            Y2(e11 ?? null), J2(e11 ? `Launch set for ${O2(e11)}` : "Launch date cleared");
          },
          minDate: I2,
          showToday: true,
          placeholder: I2 ? void 0 : "",
          description: "Pick the date for the review handoff."
        });
        break;
      case "time-picker":
        t2 = (0, a.jsx)(th, {
          label: "Review time",
          value: B2,
          onChange: W2,
          minuteStep: 15,
          description: "Local time for the review."
        });
        break;
      case "multi-step-form":
        t2 = (0, a.jsx)(tm.i, {
          steps: [
            {
              id: "details",
              title: "Project details",
              description: "A little context helps.",
              content: (0, a.jsx)(eh.p, {
                label: "Project name",
                defaultValue: "Arc launch"
              })
            },
            {
              id: "owner",
              title: "Assign owner",
              content: (0, a.jsx)(eg, {
                label: "Owner",
                options: tb,
                defaultValue: "emma"
              })
            }
          ],
          onComplete: () => J2("Project setup complete"),
          completeLabel: "Finish setup"
        });
        break;
      default:
        return null;
    }
    let ee2 = [
      "input",
      "textarea",
      "select",
      "combobox",
      "multi-select",
      "radio-group",
      "file-upload",
      "file-dropzone",
      "multi-step-form"
    ].includes(e10), et2 = ["date-picker", "time-picker"].includes(e10);
    return (0, a.jsxs)("div", {
      className: `${tf().preview} ${ee2 ? tf().roomy : ""} ${et2 ? tf().compact : ""} ${"radio-group" === e10 ? tf().radioPreview : ""} ${"textarea" === e10 ? tf().textareaPreview : ""} ${"date-picker" === e10 ? tf().datePickerPreview : ""} ${"time-picker" === e10 ? tf().timePickerPreview : ""}`,
      children: [
        (0, a.jsx)("div", { className: tf().surface, children: t2 }),
        (0, a.jsx)("div", {
          className: tf().status,
          role: "status",
          children: s2
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}