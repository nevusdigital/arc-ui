function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { Us: () => A });
  var n = r(95155), i = r(12115), a = r(76721), l = r(64577), o = r(2125), s = r(78780), c = r(9005), u = r(18310), d = r(28245), p = r(92171), f = r(25354), m = r(80642), h = r(79196), b = r(55809), y = r(7770), _ = r(69112), g = r.n(_);
  let x = { duration: y.T.duration.standard, ease: [...y.T.ease.enter] }, v = { duration: y.T.duration.instant, ease: [...y.T.ease.standard] }, j = { duration: 0 }, w = { duration: y.T.duration.instant, ease: [...y.T.ease.standard] }, T = (e2) => `blur(${e2}px)`, N = (e2) => Math.min(1, Math.max(0, e2)), k = (e2) => "string" == typeof e2 ? { value: e2 } : e2, R = (e2) => ({
    initial: e2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: T(y.T.blur.soft) },
    animate: { opacity: 1, y: 0, filter: T(0) },
    exit: e2 ? { opacity: 0, transition: j } : {
      opacity: 0,
      y: "-0.3em",
      filter: T(y.T.blur.subtle),
      transition: v
    },
    transition: e2 ? w : x
  });
  function S({ text: e2 }) {
    let t2 = (0, u.I)() ?? false, r2 = (0, i.useRef)(null), a2 = (0, d.d)("auto");
    return (0, i.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let n2 = null, i2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let i3 = Math.ceil(
          r3.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth
        ), l2 = null !== n2 && n2 !== e3.textContent;
        n2 = e3.textContent, l2 && !t2 ? (0, p.i)(a2, i3, y.T.spring.morph) : a2.jump(i3);
      });
      return i2.observe(e3), () => i2.disconnect();
    }, [t2, a2]), (0, n.jsxs)(f.PY1.span, {
      className: g().morphText,
      style: { width: a2 },
      children: [
        (0, n.jsx)("span", {
          ref: r2,
          className: g().measure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, n.jsx)(m.N, {
          mode: "popLayout",
          initial: false,
          children: (0, n.jsx)(
            f.PY1.span,
            { className: g().morphValue, ...R(t2), children: e2 },
            e2
          )
        })
      ]
    });
  }
  function L({
    rows: e2,
    labelledBy: t2,
    onChoose: r2,
    onBack: a2,
    onLeave: l2,
    radio: o2
  }) {
    let s2 = (0, u.I)() ?? false, c2 = (0, h.tF)(), d2 = (0, i.useRef)(null), p2 = (0, i.useRef)(false), m2 = (0, i.useRef)({ text: "", at: 0 }), [b2, _2] = (0, i.useState)(
      () => Math.max(
        0,
        e2.findIndex((e3) => e3.checked)
      )
    ), [x2, v2] = (0, i.useState)(null), w2 = () => Array.from(d2.current?.querySelectorAll("[data-row]") ?? []);
    return (0, n.jsxs)("div", {
      ref: d2,
      className: g().list,
      role: "menu",
      "aria-labelledby": t2,
      "data-current": c2 ? "" : void 0,
      onKeyDown: function(t3) {
        let n2 = w2(), i2 = n2.indexOf(document.activeElement), l3 = (e3) => {
          var r3;
          let i3;
          t3.preventDefault(), p2.current = false, r3 = n2[e3], i3 = d2.current, r3 && i3 && (r3.focus({ preventScroll: true }), r3.offsetTop < i3.scrollTop ? i3.scrollTop = r3.offsetTop : r3.offsetTop + r3.offsetHeight > i3.scrollTop + i3.clientHeight && (i3.scrollTop = r3.offsetTop + r3.offsetHeight - i3.clientHeight));
        };
        if ("ArrowDown" === t3.key) return l3(i2 < 0 ? 0 : (i2 + 1) % n2.length);
        if ("ArrowUp" === t3.key)
          return l3(i2 < 0 ? n2.length - 1 : (i2 - 1 + n2.length) % n2.length);
        if ("Home" === t3.key) return l3(0);
        if ("End" === t3.key) return l3(n2.length - 1);
        if ("ArrowRight" === t3.key && i2 >= 0 && e2[i2]?.drill) {
          t3.preventDefault(), r2(e2[i2], true);
          return;
        }
        if ("ArrowLeft" === t3.key && a2) {
          t3.preventDefault(), a2(true);
          return;
        }
        if (1 === t3.key.length && /\S/.test(t3.key) && !t3.metaKey && !t3.ctrlKey && !t3.altKey) {
          let e3 = performance.now();
          m2.current = {
            text: e3 - m2.current.at < 700 ? m2.current.text + t3.key.toLowerCase() : t3.key.toLowerCase(),
            at: e3
          };
          let r3 = [
            ...n2.slice(i2 + (m2.current.text.length > 1 ? 0 : 1)),
            ...n2.slice(0, i2 + (m2.current.text.length > 1 ? 0 : 1))
          ].find(
            (e4) => (e4.dataset.text ?? "").toLowerCase().startsWith(m2.current.text)
          );
          r3 && l3(n2.indexOf(r3));
        }
      },
      onFocus: function(e3) {
        let t3 = e3.target.closest("[data-row]");
        if (!t3) return;
        _2(w2().indexOf(t3));
        let r3 = p2.current && !s2, n2 = !p2.current && t3.matches(":focus-visible");
        v2((e4) => ({
          top: t3.offsetTop,
          height: t3.offsetHeight,
          glide: r3 && !!e4?.shown,
          ring: n2,
          shown: true
        }));
      },
      onBlur: function(e3) {
        d2.current?.contains(e3.relatedTarget) || v2((e4) => e4 && { ...e4, glide: false, ring: false, shown: false });
      },
      onPointerLeave: () => {
        p2.current && d2.current?.contains(document.activeElement) && l2();
      },
      children: [
        (0, n.jsx)(f.PY1.span, {
          className: g().highlight,
          "data-ring": x2?.ring || void 0,
          "aria-hidden": "true",
          initial: false,
          animate: x2 ? { y: x2.top, height: x2.height, opacity: +!!x2.shown } : { opacity: 0 },
          transition: {
            default: x2?.glide ? y.T.spring.snappy : j,
            opacity: { duration: 0.08 * !s2 }
          }
        }),
        e2.map(
          (e3, t3) => (0, n.jsxs)(
            "button",
            {
              type: "button",
              className: g().item,
              role: o2 ? "menuitemradio" : "menuitem",
              "aria-checked": o2 ? !!e3.checked : void 0,
              tabIndex: t3 === b2 ? 0 : -1,
              "data-row": e3.key,
              "data-text": e3.label,
              onPointerMove: (e4) => {
                p2.current = true, document.activeElement !== e4.currentTarget && e4.currentTarget.focus({ preventScroll: true });
              },
              onClick: (t4) => r2(e3, 0 === t4.detail),
              children: [
                e3.icon ? (0, n.jsx)("span", {
                  className: g().itemIcon,
                  "aria-hidden": "true",
                  children: e3.icon
                }) : null,
                (0, n.jsx)("span", {
                  className: g().itemLabel,
                  children: e3.label
                }),
                e3.meta ? (0, n.jsx)("span", {
                  className: g().itemMeta,
                  children: e3.meta
                }) : null
              ]
            },
            e3.key
          )
        )
      ]
    });
  }
  function E({
    fields: e2,
    onSelect: t2,
    active: r2 = [],
    label: c2 = "Add filter",
    align: h2 = "end"
  }) {
    let _2 = (0, u.I)() ?? false, S2 = (0, i.useId)(), A2 = `${S2}panel`, C = `${S2}title`, P = (0, i.useRef)(null), M = (0, i.useRef)(null), $ = (0, i.useRef)(null), z = (0, i.useRef)("closed"), O = (0, i.useRef)(0), D = (0, i.useRef)(null), [Y, I] = (0, i.useState)("closed"), [B, H] = (0, i.useState)(null), [W, V] = (0, i.useState)(1), [G, F] = (0, i.useState)(false), [Q, q] = (0, i.useState)("100% 0"), K = (0, d.d)("100%"), U = (0, d.d)("100%"), J = (0, d.d)(0), X = (0, d.d)(0), Z = (0, b.G)(() => X.get() - J.get()), ee = (0, d.d)(0), et = (0, d.d)(0), er = (0, b.G)(() => {
      let e3 = K.get(), t3 = ee.get(), r3 = et.get();
      return "number" != typeof e3 ? 0 : r3 > t3 ? N((e3 - t3) / (r3 - t3)) : 1;
    }), en = (0, b.G)(() => N(er.get() / 0.35)), ei = (0, b.G)(() => N((er.get() - 0.4) / 0.5)), ea = {
      opacity: (0, b.G)(() => 1 - en.get()),
      scale: (0, b.G)(() => 1 - 0.04 * en.get()),
      filter: (0, b.G)(
        () => en.get() ? T(en.get() * y.T.blur.subtle) : "none"
      )
    }, el = {
      opacity: ei,
      transformOrigin: Q,
      scale: (0, b.G)(() => 0.96 + 0.04 * ei.get()),
      y: (0, b.G)(() => (1 - ei.get()) * (G ? -6 : 6)),
      filter: (0, b.G)(
        () => 1 === ei.get() ? "none" : T((1 - ei.get()) * y.T.blur.soft)
      )
    }, eo = "open" === Y, es = e2.find((e3) => e3.id === B) ?? null, ec = (0, i.useCallback)(
      (e3) => {
        let t3 = M.current, r3 = $.current;
        if (!t3 || !r3) return;
        let n2 = t3.getBoundingClientRect(), i2 = r3.offsetWidth + 2, a2 = r3.offsetHeight + 2, l2 = (function(e4) {
          let t4 = {
            left: 0,
            top: 0,
            right: document.documentElement.clientWidth,
            bottom: window.innerHeight
          };
          for (let r4 = e4.parentElement; r4 && r4 !== document.body; r4 = r4.parentElement) {
            let e5 = getComputedStyle(r4);
            if ("visible" === e5.overflowX && "visible" === e5.overflowY)
              continue;
            let n3 = r4.getBoundingClientRect();
            "visible" !== e5.overflowX && (t4.left = Math.max(t4.left, n3.left), t4.right = Math.min(t4.right, n3.right)), "visible" !== e5.overflowY && (t4.top = Math.max(t4.top, n3.top), t4.bottom = Math.min(t4.bottom, n3.bottom));
          }
          return t4;
        })(P.current ?? t3), o2 = l2.left + 16 - n2.left, s2 = l2.right - 16 - n2.left - i2, c3 = n2.width - i2, u2 = "end" === h2 ? c3 >= o2 ? c3 : 0 <= s2 ? 0 : c3 : 0 <= s2 ? 0 : c3 >= o2 ? c3 : 0;
        u2 = Math.round(Math.min(Math.max(u2, o2), Math.max(o2, s2)));
        let d2 = l2.bottom - n2.top, f2 = n2.bottom - l2.top, m2 = d2 < a2 + 16 && f2 > d2;
        "closed" === z.current && (K.jump(n2.width), U.jump(n2.height), J.jump(0)), X.jump(u2), ee.jump(n2.width), et.jump(i2), z.current = "open", O.current += 1, D.current = e3, I("open"), F(m2), H(null), V(-1), q(`${Math.round(n2.width / 2 - u2)}px ${m2 ? "100%" : "0"}`);
        let b2 = _2 ? j : y.T.spring.morph;
        (0, p.i)(J, u2, b2), (0, p.i)(K, i2, b2), (0, p.i)(U, a2, b2);
      },
      [h2, ee, U, J, _2, X, et, K]
    ), eu = (0, i.useCallback)(
      (e3) => {
        let t3 = M.current;
        if ("open" !== z.current || !t3) return;
        z.current = "closing";
        let r3 = O.current += 1;
        I("closing"), e3 && t3.focus({ preventScroll: true, focusVisible: "keyboard" === e3 });
        let n2 = _2 ? j : y.T.spring.snappy;
        (0, p.i)(J, 0, n2);
        let i2 = t3.getBoundingClientRect();
        (0, p.i)(U, i2.height, n2), (0, p.i)(K, i2.width, {
          ...n2,
          onComplete: () => {
            r3 === O.current && (z.current = "closed", K.jump("100%"), U.jump("100%"), I("closed"), H(null));
          }
        });
      },
      [U, J, _2, K]
    );
    function ed(e3) {
      es && (D.current = e3 ? { key: es.id } : "panel", V(-1), H(null));
    }
    (0, i.useLayoutEffect)(() => {
      let e3 = $.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        "open" === z.current && (0, p.i)(U, e3.offsetHeight + 2, _2 ? j : y.T.spring.smooth);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [U, _2]), (0, i.useLayoutEffect)(() => {
      let e3 = D.current, t3 = $.current;
      if (!e3 || !t3 || "open" !== Y) return;
      if (D.current = null, "panel" === e3)
        return void t3.focus({ preventScroll: true });
      let r3 = Array.from(t3.querySelectorAll("[data-current] [data-row]")), n2 = "first" === e3 ? r3[0] : "last" === e3 ? r3.at(-1) : "checked" === e3 ? r3.find((e4) => "true" === e4.getAttribute("aria-checked")) ?? r3[0] : r3.find((t4) => t4.dataset.row === e3.key) ?? r3[0];
      n2?.focus({ preventScroll: true });
    }, [Y, B]), (0, i.useEffect)(() => {
      if ("open" !== Y) return;
      let e3 = (e4) => {
        let t3 = P.current, r3 = e4.target;
        !(!t3 || r3 && t3.contains(r3)) && (eu(false), r3?.closest?.(
          "button, a[href], input, select, textarea, [tabindex], [contenteditable]"
        ) || window.setTimeout(() => {
          let e5 = document.activeElement;
          (!e5 || e5 === document.body || t3.contains(e5)) && M.current?.focus({ preventScroll: true, focusVisible: false });
        }, 0));
      };
      return document.addEventListener("pointerdown", e3, true), () => document.removeEventListener("pointerdown", e3, true);
    }, [eu, Y]);
    let ep = (e3) => r2.find((t3) => t3.id === e3.id)?.value, ef = e2.map((e3) => ({
      key: e3.id,
      label: e3.label,
      icon: e3.icon,
      drill: true,
      meta: (0, n.jsxs)(n.Fragment, {
        children: [
          ep(e3) ? (0, n.jsx)("span", {
            className: g().metaValue,
            children: ep(e3)
          }) : null,
          (0, n.jsx)(a.A, {
            size: 15,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          })
        ]
      })
    })), em = es ? es.options.map(k).map((e3) => {
      let t3 = e3.label ?? e3.value, r3 = ep(es) === t3;
      return {
        key: e3.value,
        label: t3,
        icon: e3.icon,
        checked: r3,
        meta: null != e3.hint || r3 ? (0, n.jsxs)(n.Fragment, {
          children: [
            null != e3.hint ? (0, n.jsx)("span", {
              className: g().hint,
              children: e3.hint
            }) : null,
            (0, n.jsx)("span", {
              className: g().check,
              "data-on": r3 || void 0,
              children: (0, n.jsx)(l.A, {
                size: 15,
                strokeWidth: 2,
                "aria-hidden": "true"
              })
            })
          ]
        }) : null
      };
    }) : [], eh = {
      enter: (e3) => _2 ? { opacity: 0 } : { opacity: 0, x: 18 * e3, filter: T(y.T.blur.soft) },
      center: {
        opacity: 1,
        x: 0,
        filter: T(0),
        transition: _2 ? w : { ...x, x: y.T.spring.smooth }
      },
      exit: (e3) => _2 ? { opacity: 0, transition: j } : {
        opacity: 0,
        x: -18 * e3,
        filter: T(y.T.blur.subtle),
        transition: v
      }
    };
    return (0, n.jsxs)("div", {
      ref: P,
      className: g().menu,
      "data-state": Y,
      "data-y": G ? "up" : "down",
      onKeyDown: (e3) => {
        "Escape" === e3.key && "open" === z.current && (e3.preventDefault(), e3.stopPropagation(), eu("keyboard"));
      },
      onBlur: (e3) => {
        let t3 = e3.relatedTarget;
        "open" === z.current && t3 && !P.current?.contains(t3) && eu(false);
      },
      children: [
        (0, n.jsx)("button", {
          ref: M,
          type: "button",
          className: g().trigger,
          "data-filter-trigger": "",
          "aria-haspopup": "dialog",
          "aria-expanded": eo,
          "aria-controls": A2,
          tabIndex: eo ? -1 : void 0,
          onClick: (e3) => {
            "open" !== z.current && ec(0 === e3.detail ? "first" : "panel");
          },
          onKeyDown: (e3) => {
            ("ArrowDown" === e3.key || "ArrowUp" === e3.key) && (e3.preventDefault(), ec("ArrowDown" === e3.key ? "first" : "last"));
          },
          children: (0, n.jsxs)(f.PY1.span, {
            className: g().face,
            style: ea,
            children: [
              (0, n.jsx)(o.A, {
                size: 15,
                strokeWidth: 1.8,
                "aria-hidden": "true"
              }),
              c2
            ]
          })
        }),
        (0, n.jsx)(f.PY1.div, {
          className: g().surface,
          style: { left: J, width: K, height: U },
          children: (0, n.jsx)(f.PY1.div, {
            ref: $,
            id: A2,
            className: g().panel,
            role: "dialog",
            "aria-labelledby": C,
            tabIndex: -1,
            inert: !eo,
            style: { x: Z },
            onKeyDown: function(e3) {
              if (e3.defaultPrevented) return;
              let t3 = Array.from(
                $.current?.querySelectorAll("[data-current] [data-row]") ?? []
              );
              ("ArrowDown" === e3.key || "ArrowUp" === e3.key) && (e3.preventDefault(), ("ArrowDown" === e3.key ? t3[0] : t3.at(-1))?.focus({
                preventScroll: true
              })), "ArrowLeft" === e3.key && es && (e3.preventDefault(), ed(true));
            },
            children: (0, n.jsxs)(f.PY1.div, {
              style: el,
              children: [
                (0, n.jsxs)("div", {
                  className: g().head,
                  children: [
                    (0, n.jsx)(m.N, {
                      initial: false,
                      children: es ? (0, n.jsx)(
                        f.PY1.button,
                        {
                          type: "button",
                          className: g().back,
                          "aria-label": "Back to fields",
                          onClick: (e3) => ed(0 === e3.detail),
                          initial: _2 ? { opacity: 0, width: 28, marginRight: 2 } : {
                            opacity: 0,
                            width: 0,
                            marginRight: 0,
                            scale: 0.6
                          },
                          animate: {
                            opacity: 1,
                            width: 28,
                            marginRight: 2,
                            scale: 1
                          },
                          exit: _2 ? { opacity: 0, transition: j } : {
                            opacity: 0,
                            width: 0,
                            marginRight: 0,
                            scale: 0.6,
                            transition: {
                              ...y.T.spring.snappy,
                              opacity: v
                            }
                          },
                          transition: _2 ? w : { ...y.T.spring.snappy, opacity: x },
                          children: (0, n.jsx)(s.A, {
                            size: 16,
                            strokeWidth: 1.8,
                            "aria-hidden": "true"
                          })
                        },
                        "back"
                      ) : null
                    }),
                    (0, n.jsx)("span", {
                      className: g().title,
                      id: C,
                      children: (0, n.jsx)(m.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, n.jsx)(
                          f.PY1.span,
                          {
                            className: g().titleText,
                            ...R(_2),
                            children: es ? es.label : c2
                          },
                          es?.id ?? "fields"
                        )
                      })
                    })
                  ]
                }),
                (0, n.jsx)("div", {
                  className: g().stage,
                  children: (0, n.jsx)(m.N, {
                    mode: "popLayout",
                    initial: false,
                    custom: W,
                    children: (0, n.jsx)(
                      f.PY1.div,
                      {
                        className: g().step,
                        custom: W,
                        variants: eh,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: es ? (0, n.jsx)(L, {
                          rows: em,
                          labelledBy: C,
                          radio: true,
                          onChoose: function(e3, r3) {
                            es && (t2(
                              {
                                id: es.id,
                                label: es.label,
                                value: e3.label
                              },
                              es
                            ), eu(r3 ? "keyboard" : "pointer"));
                          },
                          onBack: ed,
                          onLeave: () => $.current?.focus({ preventScroll: true })
                        }) : (0, n.jsx)(L, {
                          rows: ef,
                          labelledBy: C,
                          onChoose: function(e3, t3) {
                            D.current = t3 ? "checked" : "panel", V(1), H(e3.key);
                          },
                          onLeave: () => $.current?.focus({ preventScroll: true })
                        })
                      },
                      es?.id ?? "fields"
                    )
                  })
                })
              ]
            })
          })
        })
      ]
    });
  }
  function A({
    filters: e2,
    onRemove: t2,
    onClearAll: r2,
    children: a2,
    label: l2 = "Active filters",
    addFilter: o2
  }) {
    let s2, h2 = (0, u.I)() ?? false, b2 = (0, i.useRef)(null), _2 = (0, i.useRef)(null), j2 = (0, i.useRef)(0), w2 = (0, i.useRef)(null), [N2, k2] = (0, i.useState)(e2), [L2, C] = (0, i.useState)("");
    if (N2 !== e2) {
      k2(e2);
      let t3 = (function(e3, t4) {
        let r3 = (e4) => e4.value ? `${e4.label}: ${e4.value}` : e4.label, n2 = e3.filter((e4) => !t4.some((t5) => t5.id === e4.id));
        if (!t4.length && n2.length > 1) return "All filters cleared";
        let i2 = t4.filter((t5) => !e3.some((e4) => e4.id === t5.id)), a3 = t4.filter(
          (t5) => e3.some((e4) => e4.id === t5.id && e4.value !== t5.value)
        );
        return [
          ...i2.map((e4) => `Added ${r3(e4)}`),
          ...a3.map((e4) => `${e4.label} changed to ${e4.value ?? "any"}`),
          ...n2.map((e4) => `Removed ${r3(e4)}`)
        ].join(". ");
      })(N2, e2);
      t3 && C(t3);
    }
    let P = e2.map((e3) => `${e3.id}:${e3.value ?? ""}`).join("|");
    (0, i.useLayoutEffect)(() => {
      j2.current = performance.now() + 900;
    }, [P]);
    let M = (s2 = (0, d.d)("auto"), (0, i.useLayoutEffect)(() => {
      let e3 = _2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = false, r3 = new ResizeObserver(() => {
        let r4 = e3.offsetHeight;
        if (!t3 || h2 || performance.now() > j2.current) {
          t3 = true, s2.jump(r4);
          return;
        }
        (0, p.i)(s2, r4, y.T.spring.smooth);
      });
      return r3.observe(e3), () => r3.disconnect();
    }, [j2, s2, _2, h2]), s2);
    (0, i.useLayoutEffect)(() => {
      let e3 = _2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = /* @__PURE__ */ new Map(), r3 = () => {
        let r4 = performance.now();
        for (let n3 of Array.from(e3.children)) {
          let e4 = n3.offsetLeft, i3 = n3.offsetTop, a4 = t3.get(n3);
          if (!a4) {
            t3.set(n3, { x: e4, y: i3, dx: 0, dy: 0 });
            continue;
          }
          let l3 = a4.x - e4, o3 = a4.y - i3;
          if (a4.x = e4, a4.y = i3, h2 || r4 > j2.current || 1 > Math.abs(o3) && 40 > Math.abs(l3))
            continue;
          a4.stop?.();
          let s3 = a4.dx + l3, c2 = a4.dy + o3, u2 = (e5) => {
            a4.dx = s3 * (1 - e5), a4.dy = c2 * (1 - e5), n3.style.translate = e5 >= 1 ? "" : `${a4.dx}px ${a4.dy}px`;
          };
          u2(0), a4.stop = (0, p.i)(0, 1, {
            ...y.T.spring.smooth,
            onUpdate: u2,
            onComplete: () => u2(1)
          }).stop;
        }
        for (let r5 of t3.keys()) r5.parentElement !== e3 && t3.delete(r5);
      }, n2 = new ResizeObserver(r3), i2 = () => {
        for (let t4 of Array.from(e3.children)) n2.observe(t4);
      }, a3 = new MutationObserver(() => {
        i2(), r3();
      });
      return n2.observe(e3), i2(), a3.observe(e3, { childList: true }), () => {
        for (let e4 of (n2.disconnect(), a3.disconnect(), t3.values()))
          e4.stop?.();
      };
    }, [j2, _2, h2]), (0, i.useLayoutEffect)(() => {
      let t3 = w2.current, r3 = b2.current;
      if (null === t3 || !r3) return;
      w2.current = null;
      let n2 = e2[Math.min(t3, e2.length - 1)], i2 = n2 ? r3.querySelector(`[data-chip-remove="${CSS.escape(n2.id)}"]`) : r3.querySelector("[data-filter-trigger]");
      i2?.focus({ preventScroll: true });
    }, [e2]);
    let $ = { duration: 0 }, z = (e3) => ({
      initial: !h2 && {
        width: 0,
        marginRight: -e3,
        overflow: "clip",
        "--slot-moving": 1
      },
      animate: {
        width: "auto",
        marginRight: 0,
        transitionEnd: { overflow: "visible", "--slot-moving": 0 }
      },
      exit: h2 ? { opacity: 0, transition: $ } : {
        width: 0,
        marginRight: -e3,
        overflow: "clip",
        "--slot-moving": 1,
        pointerEvents: "none",
        transition: { ...y.T.spring.smooth, "--slot-moving": $ }
      },
      transition: h2 ? $ : y.T.spring.smooth
    }), O = {
      initial: !h2 && { opacity: 0, scale: 0.9, filter: T(y.T.blur.soft) },
      animate: { opacity: 1, scale: 1, filter: T(0) },
      exit: h2 ? { opacity: 0, transition: $ } : {
        opacity: 0,
        scale: 0.9,
        filter: T(y.T.blur.subtle),
        transition: v
      },
      transition: h2 ? $ : { ...x, scale: y.T.spring.snappy }
    }, D = h2 ? { ...R(true), initial: false } : R(false), Y = h2 ? D : { ...D, transition: { ...x, delay: 0.75 * y.T.duration.instant } };
    return (0, n.jsxs)("div", {
      ref: b2,
      className: g().toolbar,
      role: "group",
      "aria-label": l2,
      children: [
        (0, n.jsx)(f.PY1.div, {
          className: g().frame,
          style: { height: M },
          children: (0, n.jsxs)("div", {
            ref: _2,
            className: g().chips,
            children: [
              (0, n.jsx)(m.N, {
                initial: false,
                children: e2.map(
                  (e3, r3) => (0, n.jsx)(
                    f.PY1.span,
                    {
                      className: g().slot,
                      ...z(8),
                      children: (0, n.jsxs)(f.PY1.span, {
                        className: g().chip,
                        ...O,
                        children: [
                          (0, n.jsxs)("span", {
                            className: g().chipLabel,
                            children: [
                              e3.label,
                              e3.value ? (0, n.jsxs)("span", {
                                className: g().value,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: g().separator,
                                    children: " \xB7 "
                                  }),
                                  (0, n.jsx)(S, { text: e3.value })
                                ]
                              }) : null
                            ]
                          }),
                          (0, n.jsx)("button", {
                            type: "button",
                            "data-chip-remove": e3.id,
                            "aria-label": `Remove ${e3.label}${e3.value ? `: ${e3.value}` : ""}`,
                            onClick: (n2) => {
                              document.activeElement === n2.currentTarget && (w2.current = r3), t2(e3.id);
                            },
                            children: (0, n.jsx)(c.A, {
                              size: 14,
                              strokeWidth: 1.8,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      })
                    },
                    e3.id
                  )
                )
              }),
              (0, n.jsx)(m.N, {
                initial: false,
                children: e2.length ? null : (0, n.jsx)(
                  f.PY1.span,
                  {
                    className: g().empty,
                    ...Y,
                    children: "No filters applied"
                  },
                  "empty"
                )
              })
            ]
          })
        }),
        (0, n.jsxs)("div", {
          className: g().actions,
          children: [
            o2 ? (0, n.jsx)(E, {
              fields: o2.fields,
              onSelect: o2.onAdd,
              active: e2,
              label: o2.label,
              align: o2.align
            }) : null,
            a2,
            (0, n.jsx)(m.N, {
              initial: false,
              children: e2.length > 0 ? (0, n.jsx)(
                f.PY1.span,
                {
                  className: g().slot,
                  ...z(12),
                  children: (0, n.jsx)("button", {
                    className: g().clear,
                    type: "button",
                    onClick: () => {
                      w2.current = -1, r2?.();
                    },
                    children: (0, n.jsx)(f.PY1.span, {
                      className: g().clearText,
                      ...D,
                      children: "Clear all"
                    })
                  })
                },
                "clear"
              ) : null
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: g().srOnly,
          role: "status",
          children: L2
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}