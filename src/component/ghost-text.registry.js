/* ghost-text (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(8857, ".demo{display:flex;justify-content:center;width:100%}", {"demo":"demo"});
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(61356, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { GhostTextDemo: () => G, default: () => Y });
  var a = r(95155), n = r(12115), i = r(18310), s = r(28245), l = r(92171), o = r(25354), c = r(80642), d = r(79196), u = r(64577), h = r(35484), m = r(7770), p = r(76266), g = r(52898), f = r(77970), w = r.n(f);
  let y = [...m.T.ease.standard], b = { name: "Autocomplete" }, x = (e2) => e2.map((e3) => e3.text).join("");
  function v(e2, t2) {
    let r2 = [], a2 = t2;
    for (let t3 of e2) {
      if (a2 >= t3.text.length) {
        a2 -= t3.text.length;
        continue;
      }
      r2.push(a2 ? { ...t3, text: t3.text.slice(a2) } : t3), a2 = 0;
    }
    return r2;
  }
  function k(e2) {
    let {
      value: t2,
      defaultValue: r2 = "",
      multiline: d2 = true,
      variant: u2 = "field",
      rows: h2 = 3,
      maxRows: m2 = 10,
      placeholder: g2,
      label: f2,
      footer: k2,
      model: j2 = b,
      hint: T2 = true,
      disabled: N2 = false,
      name: C2,
      id: A2,
      autoFocus: E2,
      notice: S2,
      className: R2,
      ref: L2,
      demoCaret: M2 = false,
      demoFading: $2 = false
    } = e2, I2 = e2["aria-label"], D2 = (0, i.I)() ?? false, O2 = void 0 !== t2, [z2, P2] = (0, n.useState)(r2), U2 = O2 ? t2 : z2, [F2, B2] = (0, n.useState)([]), [H2, K2] = (0, n.useState)(false), [W2, V2] = (0, n.useState)(null), [G2, Y2] = (0, n.useState)(null), [q, Z] = (0, n.useState)([]), [X, J] = (0, n.useState)(false), [Q, ee] = (0, n.useState)(null), [et, er] = (0, n.useState)(""), ea = (0, n.useRef)(e2), en = (0, n.useRef)(D2), ei = (0, n.useRef)(U2), es = (0, n.useRef)(U2), el = (0, n.useRef)([]), eo = (0, n.useRef)(0), ec = (0, n.useRef)(0), ed = (0, n.useRef)(void 0), eu = (0, n.useRef)(null), eh = (0, n.useRef)(null), em = (0, n.useRef)(null), ep = (0, n.useRef)(void 0), eg = (0, n.useRef)(void 0), ef = (0, n.useRef)(void 0), ew = (0, n.useRef)(/* @__PURE__ */ new Set()), ey = (0, n.useRef)(null), eb = (0, n.useRef)(null), ex = (0, n.useRef)(null), ev = (0, n.useRef)(null), ek = (0, n.useRef)(null), e_ = (0, s.d)(0), [ej, eT] = (0, n.useState)(false), eN = (0, n.useId)(), eC = `${eN}-label`, eA = `${eN}-hint`;
    (0, n.useLayoutEffect)(() => {
      ea.current = e2, en.current = D2, ei.current = U2;
    });
    let eE = (0, n.useCallback)((e3) => {
      el.current = e3, B2(e3);
    }, []), eS = (0, n.useCallback)((e3) => {
      er((t3) => t3 === e3 ? `${e3}\xA0` : e3);
    }, []), eR = (0, n.useCallback)(() => {
      let e3 = ev.current;
      return !e3 || document.activeElement !== e3 || e3.selectionStart === e3.selectionEnd && e3.selectionEnd === e3.value.length;
    }, []), eL = (0, n.useCallback)(() => {
      window.clearTimeout(ed.current), eu.current?.abort(), eu.current = null, K2(false);
    }, []), eM = (0, n.useCallback)(async () => {
      window.clearTimeout(ed.current);
      let e3 = ea.current, t3 = ei.current;
      if (!e3.suggest || e3.disabled || !eR() || t3.trim().length < (e3.minLength ?? 3))
        return;
      eu.current?.abort();
      let r3 = new AbortController();
      eu.current = r3, eE([]), V2(null);
      let a2 = "", n2 = (e4) => {
        let r4 = e4;
        !a2 && /\s$/.test(t3) && (r4 = r4.replace(/^[ \t]+/, "")), r4 && (a2 += r4, eo.current += 1, eE([...el.current, { id: eo.current, text: r4 }]));
      }, i2 = () => {
        eu.current = null, K2(false);
        let e4 = x(el.current);
        e4 && eS(
          `Suggestion: ${e4.length > 160 ? `${e4.slice(0, 157)}...` : e4}. Press Tab to accept.`
        );
      };
      try {
        let a3 = e3.suggest(t3, r3.signal);
        if (null == a3 || "string" == typeof a3) {
          a3 && n2(a3), i2();
          return;
        }
        if (K2(true), null != a3 && "object" == typeof a3 && "function" == typeof a3[Symbol.asyncIterator])
          for await (let e4 of a3) {
            if (r3.signal.aborted) return;
            e4 && n2(e4);
          }
        else {
          let e4 = await a3;
          if (r3.signal.aborted) return;
          e4 && n2(e4);
        }
        if (r3.signal.aborted) return;
        i2();
      } catch (e4) {
        if (r3.signal.aborted) return;
        eu.current = null, K2(false), eE([]), V2(
          e4 instanceof Error && e4.message ? e4.message : "The model did not respond"
        ), eS("Couldn't get a suggestion.");
      }
    }, [eS, eR, eE]), e$ = (0, n.useCallback)(() => {
      window.clearTimeout(ed.current);
      let e3 = ea.current;
      !e3.suggest || e3.disabled || ei.current.trim().length < (e3.minLength ?? 3) || (ed.current = window.setTimeout(() => {
        eM();
      }, e3.delay ?? 450));
    }, [eM]), eI = (0, n.useCallback)((e3) => {
      ee(e3), window.clearTimeout(ep.current), ep.current = window.setTimeout(() => ee(null), 160);
    }, []), eD = (0, n.useCallback)((e3) => {
      void 0 === ea.current.value && P2(e3), ea.current.onValueChange?.(e3);
    }, []), eO = (0, n.useCallback)(
      (e3) => {
        let t3 = x(el.current);
        if (!t3 || ea.current.disabled || !eR()) return false;
        let r3 = "all" === e3 ? t3 : t3.match(/^\s*\S+/)?.[0] ?? t3, a2 = t3.length > r3.length, n2 = ei.current, i2 = n2 + r3;
        if (a2 || eL(), eE(a2 ? v(el.current, r3.length) : []), eh.current = { value: i2, rest: a2 }, em.current = i2.length, Y2(null), !en.current) {
          ec.current += 1;
          let e4 = { key: ec.current, start: n2.length, text: r3 };
          Z((t5) => [...t5, e4]);
          let t4 = window.setTimeout(() => {
            ew.current.delete(t4), Z((t5) => t5.filter((t6) => t6.key !== e4.key));
          }, 240);
          ew.current.add(t4);
        }
        return eI("all" === e3 ? "tab" : "word"), a2 || (J(true), window.clearTimeout(eg.current), eg.current = window.setTimeout(() => J(false), 1e3)), eS(
          "all" !== e3 && a2 ? `Accepted ${r3.trim()}.` : "Suggestion accepted."
        ), eD(i2), ea.current.onAccept?.(r3, e3), true;
      },
      [eS, eR, eD, eI, eL, eE]
    ), ez = (0, n.useCallback)(
      (e3) => {
        (eE([]), window.clearTimeout(ef.current), en.current) ? Y2(null) : (ec.current += 1, Y2({ key: ec.current, text: e3 }), ef.current = window.setTimeout(() => Y2(null), 140));
      },
      [eE]
    ), eP = (0, n.useCallback)(() => {
      let e3 = x(el.current);
      return eL(), !!e3 && (ez(e3), eI("esc"), eS("Suggestion dismissed."), ea.current.onDismiss?.(e3), true);
    }, [eS, ez, eI, eL]), eU = (0, n.useCallback)(() => {
      let e3 = eb.current, t3 = ek.current;
      if (!e3 || !t3 || !eR()) return;
      if (false === ea.current.multiline) {
        let r4 = t3.offsetLeft;
        r4 + 24 > e3.scrollLeft + e3.clientWidth ? e3.scrollLeft = r4 + 24 - e3.clientWidth : r4 - 24 < e3.scrollLeft && (e3.scrollLeft = Math.max(0, r4 - 24));
        return;
      }
      if ("true" !== e3.dataset.scroll) return;
      let r3 = t3.offsetTop, a2 = r3 + t3.offsetHeight + 12;
      a2 > e3.scrollTop + e3.clientHeight ? e3.scrollTop = a2 - e3.clientHeight : r3 - 8 < e3.scrollTop && (e3.scrollTop = Math.max(0, r3 - 8));
    }, [eR]);
    (0, n.useLayoutEffect)(() => {
      let e3 = es.current;
      if (es.current = U2, e3 === U2) return;
      V2(null), Y2(null);
      let t3 = eh.current;
      eh.current = null;
      let r3 = ev.current;
      if (null !== em.current && r3 && document.activeElement === r3 && r3.setSelectionRange(em.current, em.current), em.current = null, eU(), t3 && t3.value === U2) {
        t3.rest || e$();
        return;
      }
      let a2 = x(el.current);
      if (a2 && U2.startsWith(e3)) {
        let t4 = U2.slice(e3.length);
        if (t4.length < a2.length && a2.startsWith(t4))
          return void eE(v(el.current, t4.length));
      }
      el.current.length && eE([]), eL(), e$();
    }, [U2, eU, e$, eL, eE]), (0, n.useLayoutEffect)(() => {
      if (!d2) return;
      let e3 = ex.current, t3 = eb.current;
      if (!e3 || !t3) return;
      let r3 = true, a2 = () => {
        let a3 = parseFloat(getComputedStyle(t3).maxHeight), n3 = e3.offsetHeight, i2 = Number.isFinite(a3) ? Math.min(n3, a3) : n3;
        if (t3.dataset.scroll = Number.isFinite(a3) && n3 > a3 + 0.5 ? "true" : "false", r3 || en.current) {
          r3 = false, e_.jump(i2), eT(true);
          return;
        }
        0.5 > Math.abs(e_.get() - i2) || (0, l.i)(e_, i2, { duration: 0.18, ease: y });
      };
      a2();
      let n2 = new ResizeObserver(a2);
      return n2.observe(e3), () => n2.disconnect();
    }, [d2, e_]), (0, n.useEffect)(
      () => () => {
        window.clearTimeout(ed.current), window.clearTimeout(ep.current), window.clearTimeout(eg.current), window.clearTimeout(ef.current);
        let e3 = ew.current;
        e3.forEach((e4) => window.clearTimeout(e4)), e3.clear(), eu.current?.abort();
      },
      []
    );
    let eF = N2 ? [] : F2, eB = eF.length > 0, eH = W2 ? "error" : eB ? "ready" : H2 ? "loading" : "idle", eK = H2 && eB, eW = (0, n.useRef)({ status: eH, suggestion: "", streaming: eK });
    (0, n.useLayoutEffect)(() => {
      eW.current = { status: eH, suggestion: "", streaming: eK };
    }, [eH, eK]), (0, n.useEffect)(() => {
      ea.current.onStatusChange?.(eH);
    }, [eH]), (0, n.useImperativeHandle)(
      L2,
      () => ({
        focus: () => ev.current?.focus(),
        acceptAll: () => eO("all"),
        acceptWord: () => eO("word"),
        dismiss: eP,
        request: () => {
          eM();
        },
        getState: () => ({ ...eW.current, suggestion: x(el.current) })
      }),
      [eO, eP, eM]
    );
    let eV = D2 ? [] : q.filter((e3) => U2.slice(e3.start, e3.start + e3.text.length) === e3.text).sort((e3, t3) => e3.start - t3.start), eG = [], eY = 0;
    for (let e3 of eV)
      e3.start < eY || (eG.push(U2.slice(eY, e3.start)), eG.push(
        (0, a.jsx)("span", { className: w().merge, children: e3.text }, e3.key)
      ), eY = e3.start + e3.text.length);
    eG.push(U2.slice(eY));
    let eq = W2 ? "error" : eB ? "ready" : H2 ? "loading" : X ? "accepted" : "idle", eZ = [et, S2].filter(Boolean).join(" "), eX = {
      ref: ev,
      className: w().input,
      value: U2,
      name: C2,
      id: A2,
      placeholder: g2,
      disabled: N2,
      autoFocus: E2,
      spellCheck: true,
      autoComplete: "off",
      "aria-label": I2,
      "aria-labelledby": !I2 && f2 ? eC : void 0,
      "aria-describedby": T2 ? eA : void 0,
      onChange: (e3) => {
        eD(d2 ? e3.target.value : e3.target.value.replace(/[\r\n]+/g, " "));
      },
      onKeyDown: (t3) => {
        if (e2.onUserIntent?.(), t3.nativeEvent.isComposing || !el.current.length || ea.current.disabled)
          return;
        let r3 = !t3.shiftKey && !t3.altKey && !t3.metaKey && !t3.ctrlKey;
        "Tab" === t3.key && r3 ? eO("all") && t3.preventDefault() : "ArrowRight" === t3.key && !t3.shiftKey && (t3.metaKey || t3.ctrlKey || t3.altKey) ? eO("word") && t3.preventDefault() : "Escape" === t3.key && (t3.preventDefault(), t3.stopPropagation(), eP());
      },
      onSelect: () => {
        (el.current.length || eu.current) && !eR() && (eL(), eE([]));
      },
      onBlur: (e3) => {
        if (e3.relatedTarget instanceof Node && ey.current?.contains(e3.relatedTarget))
          return;
        eL();
        let t3 = x(el.current);
        t3 && ez(t3);
      },
      onPointerDown: () => e2.onUserIntent?.(),
      onFocus: () => e2.onUserIntent?.()
    };
    return (0, a.jsxs)("div", {
      ref: ey,
      className: [w().root, R2].filter(Boolean).join(" "),
      "data-multiline": d2 ? "true" : "false",
      "data-variant": u2,
      "data-merging": eV.length ? "" : void 0,
      "data-labelled": f2 ? "" : void 0,
      "data-disabled": N2 ? "" : void 0,
      "data-fading": $2 ? "" : void 0,
      style: { "--gt-rows": Math.max(1, h2), "--gt-max-rows": Math.max(h2, m2) },
      children: [
        f2 && d2 ? (0, a.jsx)("div", { id: eC, className: w().label, children: f2 }) : null,
        (0, a.jsx)(o.PY1.div, {
          ref: eb,
          className: w().viewport,
          style: d2 && ej ? { height: e_ } : void 0,
          children: (0, a.jsxs)("div", {
            ref: ex,
            className: w().stack,
            children: [
              (0, a.jsxs)("div", {
                className: w().mirror,
                "aria-hidden": "true",
                children: [
                  eV.length ? eG : U2,
                  (0, a.jsx)("span", {
                    ref: ek,
                    className: w().marker,
                    "data-caret": M2 || void 0,
                    children: "\u200B"
                  }),
                  eF.map(
                    (e3) => (0, a.jsx)(
                      "span",
                      { className: w().ghost, children: e3.text },
                      e3.id
                    )
                  ),
                  G2 && !eB ? (0, a.jsx)(
                    "span",
                    { className: w().ghostOut, children: G2.text },
                    G2.key
                  ) : null
                ]
              }),
              d2 ? (0, a.jsx)("textarea", { ...eX, rows: 1 }) : (0, a.jsx)("input", { ...eX, type: "text" })
            ]
          })
        }),
        T2 || k2 ? (0, a.jsxs)("div", {
          className: w().footer,
          children: [
            d2 ? (0, a.jsx)("div", {
              className: w().footerStart,
              children: k2
            }) : null,
            T2 ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(c.N, {
                  initial: false,
                  children: "ready" === eq && d2 ? (0, a.jsxs)(
                    o.PY1.span,
                    {
                      className: w().keys,
                      "aria-hidden": "true",
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: {
                          duration: 0.16 * !D2,
                          delay: 0.04 * !D2,
                          ease: y
                        }
                      },
                      exit: {
                        opacity: 0,
                        transition: {
                          duration: 0.1 * !D2,
                          ease: y
                        }
                      },
                      children: [
                        (0, a.jsxs)("span", {
                          children: [
                            (0, a.jsx)(p.ue, {
                              keys: "mod+right",
                              size: "sm",
                              pressed: "word" === Q
                            }),
                            "word"
                          ]
                        }),
                        (0, a.jsxs)("span", {
                          children: [
                            (0, a.jsx)(p.ue, {
                              keys: "esc",
                              size: "sm",
                              pressed: "esc" === Q
                            }),
                            "dismiss"
                          ]
                        })
                      ]
                    },
                    "keys"
                  ) : null
                }),
                (0, a.jsx)(_, {
                  state: eq,
                  model: j2,
                  pressed: Q,
                  error: W2,
                  reduced: D2,
                  onActivate: () => {
                    "ready" === eq ? eO("all") : "error" === eq && eM();
                  }
                })
              ]
            }) : null
          ]
        }) : null,
        T2 ? (0, a.jsx)("span", {
          id: eA,
          className: w().srOnly,
          children: "Suggestions appear when you pause. Tab accepts, Command or Control Right Arrow accepts one word, Escape dismisses."
        }) : null,
        (0, a.jsx)("span", {
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          className: w().srOnly,
          children: eZ
        })
      ]
    });
  }
  function _({
    state: e2,
    model: t2,
    pressed: r2,
    error: i2,
    reduced: d2,
    onActivate: m2
  }) {
    let f2 = (0, s.d)(0), [b2, x2] = (0, n.useState)(false), v2 = (0, n.useRef)(true), k2 = (0, n.useRef)(d2);
    (0, n.useLayoutEffect)(() => {
      k2.current = d2;
    });
    let T2 = (0, n.useCallback)(
      (e3) => {
        if (v2.current || k2.current) {
          v2.current = false, f2.jump(e3), x2(true);
          return;
        }
        0.5 > Math.abs(f2.get() - e3) || (0, l.i)(f2, e3, { duration: 0.2, ease: y });
      },
      [f2]
    ), N2 = "ready" === e2 || "error" === e2, C2 = t2.mark ? (0, a.jsx)("span", {
      className: w().mark,
      "aria-hidden": "true",
      children: t2.mark
    }) : null, A2 = "ready" === e2 ? "Accept suggestion" : "error" === e2 ? `Retry suggestion. ${i2 ?? ""}`.trim() : "loading" === e2 ? `${t2.name} is thinking` : `Autocomplete by ${t2.name}`;
    return (0, a.jsx)(o.PY1.button, {
      type: "button",
      className: w().chip,
      "data-state": e2,
      style: b2 ? { width: f2 } : void 0,
      tabIndex: "error" === e2 ? 0 : -1,
      "aria-disabled": !N2 || void 0,
      "aria-label": A2,
      title: "error" === e2 && i2 ? i2 : void 0,
      onPointerDown: (e3) => e3.preventDefault(),
      onClick: () => {
        N2 && m2();
      },
      children: (0, a.jsx)("span", {
        className: w().chipStack,
        children: (0, a.jsx)(c.N, {
          initial: false,
          children: (0, a.jsxs)(
            j,
            {
              onSize: T2,
              reduced: d2,
              children: [
                "idle" === e2 ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    C2,
                    (0, a.jsx)("span", {
                      className: w().chipName,
                      children: t2.name
                    })
                  ]
                }) : null,
                "loading" === e2 ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    C2,
                    (0, a.jsx)(g.n, {
                      className: w().chipName,
                      children: "Thinking"
                    })
                  ]
                }) : null,
                "ready" === e2 ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    C2,
                    (0, a.jsxs)("span", {
                      className: w().desk,
                      children: [
                        (0, a.jsx)(p.ue, {
                          keys: "tab",
                          size: "sm",
                          pressed: "tab" === r2
                        }),
                        (0, a.jsx)("span", { children: "to accept" })
                      ]
                    }),
                    (0, a.jsx)("span", {
                      className: w().touch,
                      children: "Tap to accept"
                    })
                  ]
                }) : null,
                "accepted" === e2 ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(u.A, {
                      className: w().okIcon,
                      "aria-hidden": "true"
                    }),
                    (0, a.jsx)("span", { children: "Accepted" })
                  ]
                }) : null,
                "error" === e2 ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(h.A, {
                      className: w().alertIcon,
                      "aria-hidden": "true"
                    }),
                    (0, a.jsx)("span", { children: "No suggestion" }),
                    (0, a.jsx)("span", {
                      className: w().retry,
                      children: "Retry"
                    })
                  ]
                }) : null
              ]
            },
            e2
          )
        })
      })
    });
  }
  function j({ children: e2, onSize: t2, reduced: r2 }) {
    let i2 = (0, n.useRef)(null), s2 = (0, d.tF)();
    return (0, n.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || !s2) return;
      let r3 = () => t2(e3.getBoundingClientRect().width);
      r3();
      let a2 = new ResizeObserver(r3);
      return a2.observe(e3), () => a2.disconnect();
    }, [s2, t2]), (0, a.jsx)(o.PY1.span, {
      ref: i2,
      className: w().chipLayer,
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: 0.16 * !r2, delay: 0.04 * !r2, ease: y }
      },
      exit: { opacity: 0, transition: { duration: 0.1 * !r2, ease: y } },
      children: e2
    });
  }
  var T = r(92298), N = r(67752), C = r(51288);
  function A({ title: e2 = "GitHub", ...t2 }) {
    return (0, a.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, a.jsx)("path", {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      })
    });
  }
  let E = [...m.T.ease.standard], S = {
    name: "Claude Haiku 5.5",
    mark: (0, a.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, a.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, a.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      { style: { color: "#D97757" } }
    )
  }, R = [
    [
      "Customers who upgraded mid-cycle were ",
      "charged twice for the days left in their billing period."
    ],
    ["used the invoice date instead of the ", "date the plan changed."],
    ["## Changes\n- ", "Compute proration from `changed_at` in `invoice.ts`"],
    [
      "share one helper\n- ",
      "Add a regression test for upgrades on the 31st"
    ],
    [
      "Tested against ",
      "1,240 October invoices from the staging snapshot. Totals match to the cent outside the affected accounts."
    ]
  ], L = [
    "Backfill credits for the 214 affected invoices",
    "Log the old and new plan on every proration",
    "Remove the unused `legacyProrate` helper"
  ], M = [
    "The fix only touches accounts that changed plans after October 1.",
    "No migration is needed, and existing invoices keep their totals.",
    "I'll watch the billing error rate for a day after the deploy."
  ], $ = [
    "proration",
    "prorated",
    "invoice",
    "invoices",
    "customer",
    "customers",
    "regression",
    "subscription",
    "subscriptions",
    "downgrade",
    "downgrades",
    "upgrade",
    "upgrades",
    "billing",
    "migration",
    "staging",
    "accounts",
    "calculated",
    "changed",
    "credit",
    "credits",
    "Stripe",
    "webhook",
    "webhooks",
    "deploy",
    "rollout",
    "snapshot",
    "helper",
    "October",
    "because"
  ];
  function I(e2, t2) {
    for (let [t3, r3] of R) if (e2.endsWith(t3)) return r3;
    if (t2) return null;
    if (/timeout/i.test(e2)) throw Error("The model timed out after 4 seconds");
    let r2 = e2.slice(e2.lastIndexOf("\n") + 1);
    if (/^[-*] $/.test(r2)) return L.find((t3) => !e2.includes(t3)) ?? null;
    if (/^#{1,3} $/.test(r2))
      return e2.includes("## Testing") ? "Rollout" : "Testing";
    if (/\bfix(es|ed)? $/i.test(e2))
      return "the double charge on mid-cycle plan changes.";
    if (/\bcloses $/i.test(e2)) return "#4119 and BILL-882.";
    if (/\btested $/i.test(e2))
      return "against 1,240 October invoices from the staging snapshot.";
    if (/\bthis (pr|change) $/i.test(e2))
      return "moves all proration math into one helper, so upgrades and downgrades share a code path.";
    if (/[.!?](\s|\n)+$/.test(e2) || /\n\n$/.test(e2))
      return M.find((t3) => !e2.includes(t3)) ?? null;
    let a2 = e2.match(/([A-Za-z]{3,})$/)?.[1];
    if (a2) {
      let e3 = $.find(
        (e4) => e4.length > a2.length && e4.toLowerCase().startsWith(a2.toLowerCase())
      );
      if (e3) return e3.slice(a2.length);
    }
    return null;
  }
  let D = (e2, t2) => new Promise((r2, a2) => {
    let n2 = window.setTimeout(r2, e2);
    t2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(n2), a2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  });
  async function* O(e2, t2) {
    await D(480, t2);
    let r2 = e2.match(/\s*\S+/g) ?? [e2];
    for (let e3 = 0, a2 = 3; e3 < r2.length; e3 += a2, a2 = 3 + 7 * e3 % 4)
      e3 > 0 && await D(34, t2), yield r2.slice(e3, e3 + a2).join("");
  }
  function z(e2 = {}) {
    return (t2, r2) => {
      if (/timeout/i.test(t2) && !e2.scriptedOnly)
        return (async function* () {
          await D(900, r2), I(t2, false), yield "";
        })();
      let a2 = I(t2, e2.scriptedOnly ?? false);
      return a2 ? O(a2, r2) : null;
    };
  }
  let P = z({ scriptedOnly: true }), U = z(), F = [
    { kind: "pause", ms: 500 },
    { kind: "type", text: "Customers who upgraded mid-cycle were " },
    { kind: "ready", hold: 700 },
    { kind: "tab" },
    { kind: "pause", ms: 220 },
    {
      kind: "type",
      text: " The credit for the old plan used the invoice date instead of the "
    },
    { kind: "ready", hold: 420 },
    { kind: "type", text: "date the" },
    { kind: "pause", ms: 320 },
    { kind: "tab" },
    { kind: "pause", ms: 220 },
    { kind: "type", text: "\n\n## Changes\n- " },
    { kind: "ready", hold: 520 },
    { kind: "word" },
    { kind: "pause", ms: 260 },
    { kind: "word" },
    { kind: "pause", ms: 210 },
    { kind: "word" },
    { kind: "pause", ms: 280 },
    { kind: "word" },
    { kind: "pause", ms: 460 },
    { kind: "esc" },
    { kind: "pause", ms: 260 },
    {
      kind: "type",
      text: " so upgrades and downgrades share one helper\n- "
    },
    { kind: "ready", hold: 620 },
    { kind: "tab" },
    { kind: "pause", ms: 220 },
    { kind: "type", text: "\n\nTested against " },
    { kind: "ready", hold: 760 },
    { kind: "tab" }
  ];
  class B extends Error {
  }
  function H(e2) {
    let [t2, r2] = (0, n.useState)(""), [s2, l2] = (0, n.useState)("auto"), [d2, u2] = (0, n.useState)("idle"), [h2, m2] = (0, n.useState)(false), [p2, g2] = (0, n.useState)(0), f2 = (0, i.I)() ?? false, y2 = (0, n.useRef)(null), b2 = (0, n.useRef)(null), x2 = (0, n.useRef)(""), v2 = (0, n.useRef)(true), _2 = (0, n.useRef)(s2);
    (0, n.useEffect)(() => {
      _2.current = s2;
    }, [s2]);
    let j2 = (0, n.useCallback)((e3) => {
      x2.current = e3, r2(e3);
    }, []);
    (0, n.useEffect)(() => {
      let e3 = b2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(
        ([e4]) => {
          v2.current = e4.isIntersecting;
        },
        { threshold: 0.1 }
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useEffect)(() => {
      if ("auto" !== s2) return;
      let e3 = false, t3 = async (t4) => {
        let r4 = t4;
        for (; r4 > 0; ) {
          if (e3) throw new B();
          let t5 = Math.min(r4, 40);
          if (await new Promise((e4) => window.setTimeout(e4, t5)), e3)
            throw new B();
          v2.current && !document.hidden && (r4 -= t5);
        }
      }, r3 = async (e4, r4 = 5e3) => {
        let a2 = 0;
        for (; !e4() && a2 < r4; ) await t3(40), a2 += 40;
      };
      return (async () => {
        j2(""), await t3(300 * !!f2);
        for (let e4 = 0; ; e4 += 1) {
          let a2 = (function(e5) {
            let t4 = e5 >>> 0, r4 = () => {
              let e6 = t4 = t4 + 1831565813 >>> 0;
              return e6 = Math.imul(e6 ^ e6 >>> 15, 1 | e6), (((e6 ^= e6 + Math.imul(e6 ^ e6 >>> 7, 61 | e6)) ^ e6 >>> 14) >>> 0) / 4294967296;
            };
            return (e6, t5) => "\n" === e6 ? 170 + 110 * r4() : "\n" === t5 ? 120 + 80 * r4() : /[.,;:!?]/.test(t5) ? 150 + 120 * r4() : " " === e6 ? 46 + 50 * r4() + 150 * (0.14 > r4()) : 26 + 46 * r4();
          })(4127 + e4);
          for (let e5 of F)
            if ("pause" === e5.kind) await t3(e5.ms);
            else if ("type" === e5.kind) {
              for (let r4 of (u2("typing"), e5.text))
                await t3(a2(r4, x2.current.slice(-1))), j2(x2.current + r4);
              u2("idle");
            } else
              "ready" === e5.kind ? (await r3(() => {
                let e6 = y2.current?.getState();
                return e6?.status === "ready" && !e6.streaming;
              }), await t3(e5.hold)) : "tab" === e5.kind ? y2.current?.acceptAll() : "word" === e5.kind ? y2.current?.acceptWord() : "esc" === e5.kind && y2.current?.dismiss();
          if (f2) return void u2("idle");
          await t3(2400), m2(true), await t3(180), j2(""), m2(false), await t3(520);
        }
      })().catch((e4) => {
        if (!(e4 instanceof B)) throw e4;
      }), () => {
        e3 = true;
      };
    }, [s2, p2, f2, j2]);
    let R2 = (0, n.useCallback)(() => {
      "auto" === _2.current && (_2.current = "manual", l2("manual"), m2(false));
    }, []), L2 = (0, a.jsx)(c.N, {
      initial: false,
      mode: "popLayout",
      children: (0, a.jsx)(
        o.PY1.span,
        {
          className: w().simNote,
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { duration: 0.16 * !f2, delay: 0.04 * !f2, ease: E }
          },
          exit: { opacity: 0, transition: { duration: 0.1 * !f2, ease: E } },
          children: "auto" === s2 ? (0, a.jsx)("span", {
            className: w().simText,
            children: "Autoplay. Click to type."
          }) : (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("span", {
                className: w().simText,
                children: "Simulated, nothing is sent"
              }),
              (0, a.jsxs)(C.$, {
                variant: "ghost",
                size: "sm",
                className: w().replay,
                onClick: () => {
                  j2(""), m2(false), l2("auto"), g2((e3) => e3 + 1);
                },
                children: [
                  (0, a.jsx)(T.A, { "aria-hidden": "true" }),
                  "Replay"
                ]
              })
            ]
          })
        },
        s2
      )
    });
    return (0, a.jsx)("div", {
      ref: b2,
      className: w().host,
      children: (0, a.jsxs)("article", {
        className: w().card,
        "aria-label": "Pull request #4127",
        children: [
          (0, a.jsxs)("header", {
            className: w().cardHead,
            children: [
              (0, a.jsx)(A, { className: w().prMark, "aria-hidden": "true" }),
              (0, a.jsxs)("div", {
                className: w().prText,
                children: [
                  (0, a.jsxs)("div", {
                    className: w().prTitleRow,
                    children: [
                      (0, a.jsx)("span", {
                        className: w().prTitle,
                        children: "Fix double charge on mid-cycle upgrades"
                      }),
                      (0, a.jsx)("span", {
                        className: w().prNumber,
                        children: "#4127"
                      })
                    ]
                  }),
                  (0, a.jsxs)("div", {
                    className: w().prMeta,
                    children: [
                      (0, a.jsx)("img", {
                        className: w().prAvatar,
                        src: (0, N.my)("daniel-kim"),
                        alt: "",
                        width: 16,
                        height: 16
                      }),
                      (0, a.jsxs)("span", {
                        className: w().prMetaText,
                        children: [
                          "Daniel Kim wants to merge ",
                          (0, a.jsx)("span", {
                            className: w().prBranch,
                            children: "fix/proration"
                          }),
                          " into ",
                          (0, a.jsx)("span", {
                            className: w().prBranch,
                            children: "main"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)(k, {
            variant: "plain",
            rows: 9,
            maxRows: 14,
            placeholder: "Describe what changed and why",
            "aria-label": "Pull request description",
            footer: L2,
            model: S,
            ...e2,
            ref: y2,
            value: t2,
            onValueChange: (t3) => {
              j2(t3), e2.onValueChange?.(t3);
            },
            suggest: "auto" === s2 ? P : U,
            delay: "auto" === s2 ? 400 : e2.delay ?? 450,
            demoCaret: "auto" === s2 && d2,
            demoFading: h2,
            onUserIntent: R2,
            notice: "manual" === s2 ? "Simulated suggestions, nothing was sent." : void 0
          })
        ]
      })
    });
  }
  function K(e2) {
    return void 0 === e2.suggest && void 0 === e2.value && void 0 === e2.defaultValue ? (0, a.jsx)(H, { ...e2 }) : (0, a.jsx)(k, { ...e2 });
  }
  var W = r(8857), V = r.n(W);
  function G() {
    return (0, a.jsx)("div", {
      className: V().demo,
      children: (0, a.jsx)(K, {})
    });
  }
  let Y = G;
}

__m(__module,__exports,__require);
});
A.reg(76266, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { YV: () => u, ue: () => h });
  var r = a(95155), n = a(12115), s = a(12053), i = a.n(s);
  let o = (...e2) => (t2) => e2.includes(t2.key), l = (e2, ...t2) => (a2) => a2.code === e2 || t2.includes(a2.key), d = () => () => {
  }, c = () => {
    let e2 = navigator;
    return /mac|iphone|ipad|ipod/i.test(
      e2.userAgentData?.platform || e2.platform || e2.userAgent
    ) ? "mac" : "pc";
  };
  function u(e2 = "auto") {
    let t2 = (0, n.useSyncExternalStore)(d, c, () => "mac");
    return "auto" === e2 ? t2 : e2;
  }
  function h({
    keys: e2,
    children: t2,
    size: a2 = "md",
    platform: s2 = "auto",
    listen: d2 = false,
    pressed: c2 = false,
    onTrigger: p,
    className: m,
    ..._
  }) {
    let b = u(s2), y = (void 0 !== e2 ? "string" != typeof e2 ? [...e2] : e2.replace(/\+\+$/, "+plus").split("+").filter(Boolean) : "string" == typeof t2 ? [t2] : []).map(
      (e3) => (function e4(t3, { platform: a3 }) {
        let r2 = t3.trim(), n2 = r2.toLowerCase(), s3 = "mac" === a3;
        switch (n2) {
          case "mod":
            return s3 ? e4("meta", { platform: a3 }) : e4("ctrl", { platform: a3 });
          case "meta":
          case "cmd":
          case "command":
          case "win":
          case "super":
            return {
              id: "meta",
              glyph: s3 ? "\u2318" : "Win",
              name: s3 ? "Command" : "Windows",
              modifier: "meta",
              match: o("Meta", "OS")
            };
          case "ctrl":
          case "control":
            return {
              id: "ctrl",
              glyph: s3 ? "\u2303" : "Ctrl",
              name: "Control",
              modifier: "ctrl",
              match: o("Control")
            };
          case "alt":
          case "option":
          case "opt":
            return {
              id: "alt",
              glyph: s3 ? "\u2325" : "Alt",
              name: s3 ? "Option" : "Alt",
              modifier: "alt",
              match: o("Alt")
            };
          case "shift":
            return {
              id: "shift",
              glyph: s3 ? "\u21E7" : "Shift",
              name: "Shift",
              modifier: "shift",
              match: o("Shift")
            };
          case "enter":
          case "return":
            return {
              id: n2,
              glyph: s3 ? "\u21B5" : "Enter",
              name: s3 ? "Return" : "Enter",
              match: o("Enter")
            };
          case "esc":
          case "escape":
            return {
              id: "esc",
              glyph: "Esc",
              name: "Escape",
              match: o("Escape", "Esc")
            };
          case "tab":
            return {
              id: n2,
              glyph: s3 ? "\u21E5" : "Tab",
              name: "Tab",
              match: o("Tab")
            };
          case "backspace":
            return {
              id: n2,
              glyph: s3 ? "\u232B" : "Backspace",
              name: s3 ? "Delete" : "Backspace",
              match: o("Backspace")
            };
          case "delete":
          case "del":
            return {
              id: "delete",
              glyph: s3 ? "\u2326" : "Del",
              name: s3 ? "Forward delete" : "Delete",
              match: o("Delete")
            };
          case "space":
            return {
              id: n2,
              glyph: "Space",
              name: "Space",
              match: l("Space", " ")
            };
          case "up":
          case "arrowup":
            return {
              id: "up",
              glyph: "\u2191",
              name: "Up arrow",
              match: o("ArrowUp")
            };
          case "down":
          case "arrowdown":
            return {
              id: "down",
              glyph: "\u2193",
              name: "Down arrow",
              match: o("ArrowDown")
            };
          case "left":
          case "arrowleft":
            return {
              id: "left",
              glyph: "\u2190",
              name: "Left arrow",
              match: o("ArrowLeft")
            };
          case "right":
          case "arrowright":
            return {
              id: "right",
              glyph: "\u2192",
              name: "Right arrow",
              match: o("ArrowRight")
            };
          case "pageup":
            return {
              id: n2,
              glyph: "PgUp",
              name: "Page up",
              match: o("PageUp")
            };
          case "pagedown":
            return {
              id: n2,
              glyph: "PgDn",
              name: "Page down",
              match: o("PageDown")
            };
          case "home":
            return { id: n2, glyph: "Home", name: "Home", match: o("Home") };
          case "end":
            return { id: n2, glyph: "End", name: "End", match: o("End") };
          case "plus":
            return { id: n2, glyph: "+", name: "Plus", match: o("+", "=") };
          case "capslock":
            return {
              id: n2,
              glyph: s3 ? "\u21EA" : "Caps",
              name: "Caps lock",
              match: o("CapsLock")
            };
        }
        return /^[a-z]$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: l(`Key${n2.toUpperCase()}`, n2, n2.toUpperCase())
        } : /^[0-9]$/.test(n2) ? { id: n2, glyph: n2, name: n2, match: l(`Digit${n2}`, n2) } : /^f([1-9]|1[0-9]|2[0-4])$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: o(n2.toUpperCase())
        } : {
          id: n2,
          glyph: 1 === r2.length ? r2 : r2.charAt(0).toUpperCase() + r2.slice(1),
          name: r2,
          match: (e5) => e5.key.toLowerCase() === n2
        };
      })(e3, { platform: b })
    ), f = y.map((e3) => e3.id).join("+") + b, [w, x] = (0, n.useState)(() => /* @__PURE__ */ new Set()), k = (0, n.useRef)({ parsed: y, onTrigger: p, mac: "mac" === b });
    (0, n.useEffect)(() => {
      k.current = { parsed: y, onTrigger: p, mac: "mac" === b };
    }), (0, n.useEffect)(() => {
      if (!d2) return;
      let e3 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Map(), a3 = () => x(new Set(e3)), r2 = (r3) => {
        window.clearTimeout(t3.get(r3)), t3.delete(r3), e3.delete(r3) && a3();
      }, n2 = () => {
        t3.forEach((e4) => window.clearTimeout(e4)), t3.clear(), e3.size && (e3.clear(), a3());
      }, s3 = (n3) => {
        var s4;
        let { parsed: i3, onTrigger: o2, mac: l2 } = k.current;
        if (!i3.some(
          (e4) => "meta" === e4.modifier || "ctrl" === e4.modifier || "alt" === e4.modifier
        ) && (s4 = n3.target) && s4.tagName && (s4.isContentEditable || "TEXTAREA" === s4.tagName || "SELECT" === s4.tagName || "INPUT" === s4.tagName && ![
          "checkbox",
          "radio",
          "button",
          "submit",
          "range",
          "color"
        ].includes(s4.type)))
          return;
        let d3 = false;
        if (i3.forEach((a4, s5) => {
          a4.match(n3) && (e3.has(s5) || (e3.add(s5), d3 = true), l2 && n3.metaKey && !a4.modifier && (window.clearTimeout(t3.get(s5)), t3.set(
            s5,
            window.setTimeout(() => r2(s5), 170)
          )));
        }), d3 && a3(), !o2 || n3.repeat || !i3.length)
          return;
        let c3 = { meta: false, ctrl: false, alt: false, shift: false };
        i3.forEach((e4) => {
          e4.modifier && (c3[e4.modifier] = true);
        });
        let u2 = i3.filter((e4) => !e4.modifier), h2 = c3.meta === n3.metaKey && c3.ctrl === n3.ctrlKey && c3.alt === n3.altKey && (c3.shift === n3.shiftKey || !c3.shift && 1 === u2.length && 1 === u2[0].glyph.length && !/[a-z0-9]/i.test(u2[0].glyph)), p2 = u2.length ? u2.every((e4) => e4.match(n3)) : i3.some((e4) => e4.match(n3));
        h2 && p2 && (n3.preventDefault(), o2(n3));
      }, i2 = (e4) => {
        let { parsed: t4 } = k.current;
        "Meta" === e4.key || "OS" === e4.key ? n2() : t4.forEach((t5, a4) => {
          t5.match(e4) && r2(a4);
        });
      };
      return window.addEventListener("keydown", s3), window.addEventListener("keyup", i2), window.addEventListener("blur", n2), document.addEventListener("visibilitychange", n2), () => {
        window.removeEventListener("keydown", s3), window.removeEventListener("keyup", i2), window.removeEventListener("blur", n2), document.removeEventListener("visibilitychange", n2), t3.forEach((e4) => window.clearTimeout(e4)), x(/* @__PURE__ */ new Set());
      };
    }, [d2, f]);
    let g = (e3, t3, a3) => (0, r.jsx)(
      "kbd",
      {
        className: i().key,
        "data-pressed": c2 || w.has(a3) ? "" : void 0,
        children: null === t3 ? e3 : (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("span", {
              className: i().glyph,
              "aria-hidden": "true",
              children: e3
            }),
            (0, r.jsx)("span", {
              className: i().hidden,
              children: t3
            })
          ]
        })
      },
      a3
    ), v = [i().kbd, i()[a2], m].filter(Boolean).join(" ");
    if (void 0 === e2) {
      let e3 = y[0], a3 = e3 && e3.glyph !== e3.name;
      return (0, r.jsx)("kbd", {
        ..._,
        className: v,
        children: g(a3 ? e3.glyph : t2, a3 ? e3.name : null, 0)
      });
    }
    return (0, r.jsx)("kbd", {
      ..._,
      className: v,
      children: y.map(
        (e3, t3) => (0, r.jsxs)(
          "span",
          {
            className: i().slot,
            children: [
              t3 > 0 && (0, r.jsx)("span", { className: i().hidden, children: " " }),
              g(e3.glyph, e3.glyph === e3.name ? null : e3.name, t3)
            ]
          },
          `${e3.id}-${t3}`
        )
      )
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(77970, ".root{--gt-line:22px;--gt-pad-x:16px;--gt-pad-top:14px;--gt-pad-bottom:4px;position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;min-width:0;container-type:inline-size;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);text-align:start;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n.root[data-labelled]{--gt-pad-top:6px}\n@media (hover:hover) and (pointer:fine){.root:not([data-disabled],[data-variant=plain]):hover{border-color:color-mix(in oklab,var(--foreground) 22%,var(--border))}\n.root:not([data-variant=plain]):has(.input:focus-visible){border-color:color-mix(in oklab,var(--foreground) 50%,var(--border));box-shadow:0 0 0 3px var(--focus-ring)}\n.root[data-disabled]{background:var(--surface-muted);opacity:.6}\n.root[data-variant=plain]{border:0;border-radius:0;background:transparent}\n.root[data-variant=plain][data-disabled]{background:transparent}\n.root[data-fading] :is(.mirror,.input){opacity:0}\n.root[data-merging] .mirror{color:var(--foreground)}\n.root[data-merging] .input{color:transparent}\n.root[data-multiline=false]{flex-direction:row;align-items:center}\n.root[data-multiline=false] .viewport{flex:1 1 auto;min-width:0;max-height:none;overflow:auto clip}\n.root[data-multiline=false] .stack{width:max-content;min-width:100%}\n.root[data-multiline=false] :is(.mirror,.input){padding:8px 14px;white-space:pre;overflow-wrap:normal}\n.root[data-multiline=false] .mirror{min-height:0}\n.root[data-multiline=false] .footer{min-height:0;padding:0 7px 0 0}\n.card .root{--gt-pad-top:12px;--gt-pad-bottom:10px}\n@media (prefers-reduced-motion:reduce){.card,.chip,.input,.mirror,.root{transition:none}\n.input,.mirror{box-sizing:border-box;display:block;width:100%;margin:0;padding:var(--gt-pad-top) var(--gt-pad-x) var(--gt-pad-bottom);font:inherit;letter-spacing:inherit;line-height:var(--gt-line);text-align:start;tab-size:4;white-space:pre-wrap;overflow-wrap:break-word;word-break:normal;transition:opacity var(--duration-fast) var(--ease-standard)}\n.input{position:absolute;inset:0;height:100%;border:0;border-radius:0;background:transparent;color:var(--foreground);caret-color:var(--foreground);resize:none;overflow:hidden;outline:none;appearance:none;-webkit-appearance:none}\n.input::placeholder{color:var(--text-muted);opacity:1}\n.input:disabled{cursor:not-allowed}\n.label{display:flex;align-items:center;gap:8px;min-width:0;padding:12px var(--gt-pad-x) 0;font-size:var(--text-xs);line-height:20px;color:var(--text-secondary)}\n.viewport{position:relative;overflow:clip;scrollbar-width:none;max-height:calc(var(--gt-max-rows) * var(--gt-line) + var(--gt-pad-top) + var(--gt-pad-bottom))}\n.viewport::-webkit-scrollbar{display:none}\n.viewport[data-scroll=true]{overflow:hidden auto;overscroll-behavior:contain}\n.stack{position:relative}\n.mirror{min-height:calc(var(--gt-rows) * var(--gt-line) + var(--gt-pad-top) + var(--gt-pad-bottom));color:transparent;pointer-events:none;user-select:none}\n.ghost{color:var(--text-muted);animation:ghostIn .14s var(--ease-standard) both}\n.ghostOut,.ghost,.merge{animation:none}\n.ghostOut{color:var(--text-muted);animation:ghostOut .11s var(--ease-standard) both}\n.ghostOut{opacity:0}\n.merge{animation:merge .2s var(--ease-standard) both}\n.marker{position:relative}\n.marker[data-caret]:after{content:\"\";position:absolute;top:2px;bottom:2px;left:-1px;width:1.5px;border-radius:1px;background:var(--foreground);animation:blink 1.06s step-end infinite}\n.marker[data-caret=typing]:after{animation:none}\n.marker[data-caret]:after{animation:none}\n.footer{display:flex;flex:none;align-items:center;justify-content:flex-end;gap:10px;min-height:30px;padding:0 6px 6px var(--gt-pad-x)}\n.footerStart{display:flex;flex:1 1 auto;gap:8px;min-width:0}\n.footerStart,.keys{align-items:center;font-size:var(--text-xs);line-height:20px;color:var(--text-muted)}\n.keys{display:inline-flex;flex:none;gap:10px;white-space:nowrap}\n.keys>span{display:inline-flex;align-items:center;gap:5px}\n@container (max-width: 519px){.keys{display:none}\n.chip{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:flex-end;box-sizing:border-box;height:24px;margin:0;padding:0;overflow:hidden;border:0;border-radius:12px;background:color-mix(in oklab,var(--surface-muted) 80%,var(--surface));color:var(--text-secondary);font:inherit;font-size:var(--text-xs);line-height:1;white-space:nowrap;cursor:default;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.chip:is([data-state=idle],[data-state=loading],[data-state=accepted]){background:transparent}\n.chip:is([data-state=ready],[data-state=error]){cursor:pointer}\n@media (hover:hover) and (pointer:fine){.chip:is([data-state=ready],[data-state=error]):hover{background:var(--surface-muted);color:var(--foreground)}\n.chip:is([data-state=ready],[data-state=error]):active{background:color-mix(in oklab,var(--foreground) 10%,var(--surface-muted))}\n.chip[data-state=idle] .chipLayer,.chip[data-state=loading] .chipLayer{padding-right:10px}\n.chipStack{display:grid;align-items:center;justify-items:end}\n.chipLayer{display:inline-flex;grid-area:1/1;align-items:center;gap:6px;box-sizing:border-box;height:24px;padding:0 9px 0 6px}\n.mark{display:grid;flex:none;width:12px;height:12px;place-items:center}\n.mark>svg{display:block;width:12px;height:12px}\n.chipName{color:var(--text-secondary)}\n.desk{display:inline-flex;align-items:center;gap:5px}\n@media (hover:none) and (pointer:coarse){.desk{display:none}\n.touch{display:none}\n.touch{display:inline}\n.alertIcon,.okIcon{flex:none;width:13px;height:13px;stroke-width:2}\n.okIcon{color:var(--success)}\n.alertIcon{color:var(--warning)}\n.retry{color:var(--accent);font-weight:500}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.host{width:100%;max-width:680px;margin-inline:auto;container-type:inline-size}\n.card{overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n.card:has(textarea:focus-visible){border-color:color-mix(in oklab,var(--foreground) 50%,var(--border));box-shadow:0 0 0 3px var(--focus-ring)}\n.cardHead{display:flex;align-items:flex-start;gap:12px;padding:14px 16px 12px;border-bottom:1px solid var(--border-subtle)}\n.prMark{flex:none;width:16px;height:16px;margin-top:2px;color:var(--foreground)}\n.prText{display:flex;flex:1 1 auto;flex-direction:column;gap:2px;min-width:0}\n.prTitleRow{display:flex;align-items:baseline;gap:8px;min-width:0;font-size:var(--text-sm);line-height:20px}\n.prTitle{min-width:0;overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.prNumber{flex:none;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.prMeta{display:flex;align-items:center;gap:6px;min-width:0;font-size:var(--text-xs);line-height:20px;color:var(--text-muted)}\n.prAvatar{flex:none;width:16px;height:16px;border-radius:50%;object-fit:cover}\n.prMetaText{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.prBranch{color:var(--text-secondary)}\n.simNote{display:inline-flex;align-items:center;gap:6px;min-width:0}\n.simText{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.replay{flex:none;margin-block:-6px}\n.replay svg{width:14px;height:14px}", {"root":"root","input":"input","mirror":"mirror","viewport":"viewport","stack":"stack","footer":"footer","card":"card","chip":"chip","label":"label","ghost":"ghost","ghostOut":"ghostOut","merge":"merge","marker":"marker","footerStart":"footerStart","keys":"keys","chipLayer":"chipLayer","chipStack":"chipStack","mark":"mark","chipName":"chipName","desk":"desk","touch":"touch","alertIcon":"alertIcon","okIcon":"okIcon","retry":"retry","srOnly":"srOnly","host":"host","cardHead":"cardHead","prMark":"prMark","prText":"prText","prTitleRow":"prTitleRow","prTitle":"prTitle","prNumber":"prNumber","prMeta":"prMeta","prAvatar":"prAvatar","prMetaText":"prMetaText","prBranch":"prBranch","simNote":"simNote","simText":"simText","replay":"replay"});
A.cssFor("ghost-text", [8857,12053,77970]);
A.item("ghost-text", {entry:61356, export:"GhostTextDemo", kind:"component", tier:"pro", unresolved:[]});
})();