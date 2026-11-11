/* password-strength (free component, cross-ref module 67556, closure 150) */
(function(){var A=globalThis.__ARC__;
A.reg(50598, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { Xh: () => $, co: () => y });
  var s = i(95155), a = i(12115), n = i(80642), r = i(25354), o = i(18310), l = i(28245), d = i(92171), c = i(7770), u = i(84830), p = i.n(u);
  let h = {
    levels: {
      tooShort: "Too short",
      weak: "Weak",
      fair: "Fair",
      good: "Good",
      strong: "Strong"
    },
    showPassword: "Show password",
    meterLabel: "Password strength",
    noPassword: "No password yet",
    rulesLabel: "Password requirements",
    ruleMet: ", met",
    ruleNotMet: ", not met",
    remainingPrefix: "",
    remainingSuffix: "more",
    summary: ({ label: e2, met: t2, total: i2 }) => `Strength: ${e2}. ${t2} of ${i2} requirements met.`
  }, m = (e2) => Array.from(e2).length, x = {
    length: (e2) => `At least ${e2} characters`,
    case: "Upper and lowercase letters",
    number: "At least one number",
    symbol: "At least one symbol"
  }, f = (function({
    minLength: e2 = 12,
    labels: t2,
    countCharacters: i2 = m
  } = {}) {
    let s2 = { ...x, ...t2 };
    return [
      {
        id: "length",
        label: s2.length(e2),
        test: (t3) => i2(t3) >= e2,
        remaining: (t3) => Math.max(0, e2 - i2(t3))
      },
      {
        id: "case",
        label: s2.case,
        test: (e3) => /\p{Ll}/u.test(e3) && /\p{Lu}/u.test(e3)
      },
      { id: "number", label: s2.number, test: (e3) => /\p{N}/u.test(e3) },
      {
        id: "symbol",
        label: s2.symbol,
        test: (e3) => /[^\p{L}\p{N}\s]/u.test(e3)
      }
    ];
  })();
  function y(e2, t2 = f, { shortLength: i2 = 8, levels: s2, countCharacters: a2 = m } = {}) {
    if (!e2) return { level: 0, label: "", met: [] };
    let n2 = { ...h.levels, ...s2 }, r2 = t2.filter((t3) => t3.test(e2)).map((e3) => e3.id);
    if (a2(e2) < i2) return { level: 1, label: n2.tooShort, met: r2, short: true };
    let o2 = Math.min(
      4,
      Math.max(1, Math.round(r2.length / Math.max(t2.length, 1) * 4))
    );
    return {
      level: o2,
      label: [n2.weak, n2.fair, n2.good, n2.strong][o2 - 1] ?? n2.weak,
      met: r2
    };
  }
  let _ = [...c.T.ease.enter], g = [...c.T.ease.standard], j = () => () => {
  }, v = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${c.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: c.T.duration.standard, ease: _ }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${c.T.blur.subtle}px)`,
      transition: { duration: c.T.duration.fast, ease: g }
    })
  }, b = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: c.T.duration.fast } },
    exit: { opacity: 0, transition: { duration: c.T.duration.instant } }
  }, w = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.45 * e2}em`,
      filter: `blur(${c.T.blur.subtle}px)`
    }),
    center: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: {
        y: c.T.spring.snappy,
        opacity: { duration: c.T.duration.fast },
        filter: { duration: c.T.duration.fast }
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.45 * e2}em`,
      filter: `blur(${c.T.blur.subtle}px)`,
      transition: { duration: c.T.duration.fast, ease: g }
    })
  };
  function N({ value: e2, reduced: t2 }) {
    let [i2, o2] = (0, a.useState)({ value: e2, direction: 1 });
    i2.value !== e2 && o2({ value: e2, direction: e2 > i2.value ? 1 : -1 });
    let l2 = String(e2).split("");
    return (0, s.jsx)("span", {
      className: p().number,
      children: (0, s.jsx)(n.N, {
        initial: false,
        custom: i2.direction,
        children: l2.map(
          (e3, a2) => (0, s.jsx)(
            r.PY1.span,
            {
              className: p().place,
              initial: { width: 0, opacity: 0 },
              animate: { width: "auto", opacity: 1 },
              exit: { width: 0, opacity: 0 },
              transition: t2 ? { duration: 0 } : {
                width: c.T.spring.morph,
                opacity: { duration: c.T.duration.fast }
              },
              children: (0, s.jsx)(n.N, {
                mode: "popLayout",
                initial: false,
                custom: i2.direction,
                children: (0, s.jsx)(
                  r.PY1.span,
                  {
                    className: p().digit,
                    custom: i2.direction,
                    variants: t2 ? b : w,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    children: e3
                  },
                  e3
                )
              })
            },
            l2.length - 1 - a2
          )
        )
      })
    });
  }
  function k({ slashed: e2, reduced: t2 }) {
    let i2 = `eye-${(0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, n2 = { pathLength: +!!e2, opacity: +!!e2 }, o2 = t2 ? { duration: 0 } : {
      pathLength: { duration: c.T.duration.standard, ease: g },
      opacity: { duration: c.T.duration.instant }
    };
    return (0, s.jsxs)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, s.jsxs)("mask", {
          id: i2,
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: [
            (0, s.jsx)("rect", {
              width: "24",
              height: "24",
              fill: "white",
              stroke: "none"
            }),
            (0, s.jsx)(r.PY1.path, {
              d: "M3 3l18 18",
              stroke: "black",
              strokeWidth: 5,
              initial: false,
              animate: n2,
              transition: o2
            })
          ]
        }),
        (0, s.jsxs)("g", {
          mask: `url(#${i2})`,
          children: [
            (0, s.jsx)("path", {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            }),
            (0, s.jsx)("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }),
        (0, s.jsx)(r.PY1.path, {
          d: "M3 3l18 18",
          initial: false,
          animate: n2,
          transition: o2
        })
      ]
    });
  }
  function T({ met: e2, delay: t2, reduced: i2 }) {
    return (0, s.jsxs)("span", {
      className: p().mark,
      "aria-hidden": "true",
      children: [
        (0, s.jsx)(r.PY1.span, {
          className: p().markFill,
          initial: false,
          animate: { scale: e2 ? 1 : 0.5, opacity: +!!e2 },
          transition: i2 ? { duration: 0 } : {
            scale: { ...c.T.spring.snappy, delay: t2 },
            opacity: {
              duration: e2 ? c.T.duration.fast : c.T.duration.instant,
              delay: t2
            }
          }
        }),
        (0, s.jsx)("svg", {
          className: p().tick,
          viewBox: "0 0 16 16",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.75,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: (0, s.jsx)(r.PY1.path, {
            d: "M4.75 8.25 7 10.5l4.25-4.75",
            initial: false,
            animate: { pathLength: +!!e2, opacity: +!!e2 },
            transition: i2 ? { duration: 0 } : e2 ? {
              pathLength: {
                duration: c.T.duration.standard,
                ease: _,
                delay: t2 + 0.06
              },
              opacity: { duration: 0.05, delay: t2 + 0.06 }
            } : {
              pathLength: { duration: c.T.duration.fast, ease: g },
              opacity: { duration: c.T.duration.fast, delay: 0.06 }
            }
          })
        })
      ]
    });
  }
  function S({ id: e2, text: t2, reduced: i2 }) {
    let o2 = (0, a.useRef)(null), [l2, d2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let e3 = o2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && d2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, s.jsx)(r.PY1.span, {
      className: p().errorSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: l2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: i2 ? { duration: 0 } : {
          height: c.T.spring.smooth,
          opacity: { duration: c.T.duration.instant }
        }
      },
      transition: i2 ? { duration: 0 } : {
        height: c.T.spring.smooth,
        opacity: { duration: c.T.duration.fast }
      },
      children: (0, s.jsx)("span", {
        ref: o2,
        id: e2,
        className: p().error,
        children: (0, s.jsx)(n.N, {
          mode: "popLayout",
          initial: false,
          custom: 1,
          children: (0, s.jsx)(
            r.PY1.span,
            {
              className: p().errorText,
              custom: 1,
              variants: i2 ? b : v,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: t2
            },
            t2
          )
        })
      })
    });
  }
  let $ = (0, a.forwardRef)(function({
    label: e2,
    value: t2,
    defaultValue: i2 = "",
    onValueChange: u2,
    onChange: m2,
    rules: x2 = f,
    error: _2,
    revealed: g2,
    onRevealedChange: w2,
    messages: $2,
    shortLength: L,
    countCharacters: C,
    id: P,
    className: M,
    ...I
  }, R) {
    let Y = { ...h, ...$2, levels: { ...h.levels, ...$2?.levels } }, z = { shortLength: L, levels: Y.levels, countCharacters: C }, B = (0, a.useId)(), F = P ?? B, O = `${F}-rules`, A = `${F}-error`, E = (0, a.useSyncExternalStore)(
      j,
      () => true,
      () => false
    ), W = (0, o.I)(), D = E && !!W, [H, q] = (0, a.useState)(i2), U = t2 ?? H, [X, Q] = (0, a.useState)(false), V = g2 ?? X, Z = y(U, x2, z), K = new Set(Z.met), G = Z.short ? 0.5 : Z.level, J = Z.met.join(" "), [ee, et] = (0, a.useState)({
      rank: G,
      level: Z.level,
      previousLevel: Z.level,
      direction: 1,
      metKey: J,
      previousMet: J
    });
    (ee.rank !== G || ee.metKey !== J) && et({
      rank: G,
      level: Z.level,
      previousLevel: ee.rank !== G ? ee.level : ee.previousLevel,
      direction: ee.rank === G ? ee.direction : G > ee.rank ? 1 : -1,
      metKey: J,
      previousMet: ee.metKey !== J ? ee.metKey : ee.previousMet
    });
    let ei = new Set(ee.previousMet.split(" ").filter(Boolean)), es = x2.filter((e3) => K.has(e3.id) !== ei.has(e3.id)).map((e3) => e3.id), [ea, en] = (0, a.useState)({ revealed: V, changed: false });
    ea.revealed !== V && en({ revealed: V, changed: true });
    let er = (0, l.d)(0), eo = (0, a.useRef)(null), el = (0, a.useRef)(_2);
    (0, a.useEffect)(() => {
      let e3 = el.current;
      el.current = _2, _2 && _2 !== e3 && !D && (eo.current?.stop(), eo.current = (0, d.i)(er, 0, {
        type: "spring",
        velocity: -240,
        stiffness: 900,
        damping: 57,
        restDelta: 0.1
      }));
    }, [_2, D, er]);
    let ed = Z.level ? Y.summary({ label: Z.label, met: Z.met.length, total: x2.length }) : "", ec = [I["aria-describedby"], _2 ? A : void 0, O].filter(Boolean).join(" ");
    return (0, s.jsxs)("div", {
      className: p().field,
      "data-level": Z.level,
      children: [
        (0, s.jsx)("label", { className: p().label, htmlFor: F, children: e2 }),
        (0, s.jsxs)(r.PY1.div, {
          className: p().shell,
          style: { x: er },
          children: [
            (0, s.jsx)("input", {
              autoComplete: "new-password",
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: false,
              ...I,
              ref: R,
              id: F,
              type: V ? "text" : "password",
              value: U,
              onChange: (e3) => {
                let i3 = e3.target.value;
                void 0 === t2 && q(i3), m2?.(e3), u2?.(i3, y(i3, x2, z));
              },
              "aria-invalid": !!_2 || I["aria-invalid"],
              "aria-describedby": ec,
              "data-reveal": ea.changed ? V ? "shown" : "hidden" : void 0,
              className: [p().input, M].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("button", {
              type: "button",
              className: p().reveal,
              onClick: function() {
                void 0 === g2 && Q(!V), w2?.(!V);
              },
              "aria-label": Y.showPassword,
              "aria-pressed": V,
              "aria-controls": F,
              children: (0, s.jsx)(k, { slashed: V, reduced: D })
            })
          ]
        }),
        (0, s.jsx)(n.N, {
          initial: false,
          children: _2 ? (0, s.jsx)(S, { id: A, text: _2, reduced: D }, "error") : null
        }),
        (0, s.jsxs)("div", {
          className: p().meterRow,
          children: [
            (0, s.jsx)("div", {
              className: p().meter,
              role: "meter",
              "aria-label": Y.meterLabel,
              "aria-valuemin": 0,
              "aria-valuemax": 4,
              "aria-valuenow": Z.level,
              "aria-valuetext": Z.level ? Z.label : Y.noPassword,
              children: [0, 1, 2, 3].map((e3) => {
                let t3 = e3 < Z.level, i3 = t3 ? e3 - ee.previousLevel : ee.previousLevel - 1 - e3;
                return (0, s.jsx)(
                  "span",
                  {
                    className: p().segment,
                    children: (0, s.jsx)(r.PY1.span, {
                      className: p().fill,
                      initial: false,
                      animate: { x: t3 ? "0%" : "-101%" },
                      transition: D ? { duration: 0 } : {
                        ...c.T.spring.smooth,
                        delay: Math.max(0, i3) * (t3 ? 0.05 : 0.03)
                      }
                    })
                  },
                  e3
                );
              })
            }),
            (0, s.jsx)("span", {
              className: p().word,
              "aria-hidden": "true",
              children: (0, s.jsx)(n.N, {
                mode: "popLayout",
                initial: false,
                custom: ee.direction,
                children: Z.level ? (0, s.jsx)(
                  r.PY1.span,
                  {
                    className: p().wordText,
                    custom: ee.direction,
                    variants: D ? b : v,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    children: Z.label
                  },
                  Z.label
                ) : null
              })
            })
          ]
        }),
        (0, s.jsx)("ul", {
          id: O,
          className: p().rules,
          "aria-label": Y.rulesLabel,
          children: x2.map((e3) => {
            let t3 = K.has(e3.id), i3 = U && !t3 ? e3.remaining?.(U) ?? 0 : 0, a2 = es.indexOf(e3.id);
            return (0, s.jsxs)(
              "li",
              {
                className: p().rule,
                "data-met": t3 || void 0,
                children: [
                  (0, s.jsx)(T, {
                    met: t3,
                    delay: a2 > 0 ? 0.05 * a2 : 0,
                    reduced: D
                  }),
                  (0, s.jsxs)("span", {
                    className: p().ruleLabel,
                    children: [
                      e3.label,
                      (0, s.jsx)("span", {
                        className: p().srOnly,
                        children: t3 ? Y.ruleMet : Y.ruleNotMet
                      })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: p().remaining,
                    "aria-hidden": "true",
                    children: (0, s.jsx)(n.N, {
                      mode: "popLayout",
                      initial: false,
                      custom: 1,
                      children: i3 > 0 ? (0, s.jsxs)(
                        r.PY1.span,
                        {
                          className: p().remainingText,
                          custom: 1,
                          variants: D ? b : v,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          children: [
                            Y.remainingPrefix ? `${Y.remainingPrefix} ` : null,
                            (0, s.jsx)(N, { value: i3, reduced: D }),
                            Y.remainingSuffix ? ` ${Y.remainingSuffix}` : null
                          ]
                        },
                        "remaining"
                      ) : null
                    })
                  })
                ]
              },
              e3.id
            );
          })
        }),
        (0, s.jsx)("span", {
          className: p().srOnly,
          role: "status",
          children: ed
        })
      ]
    });
  });
  $.displayName = "PasswordStrength";
}

__m(__module,__exports,__require);
});
A.reg(57189, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.d(t, { r: () => C });
  var a = s(95155), r = s(12115), i = s(28245), n = s(92171), o = s(25354), d = s(80642), c = s(18310), l = s(90467), u = s(7770), p = s(66466), h = s.n(p);
  let m = {
    pressed: (e2) => ({
      scale: (e2.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97,
      transition: {
        duration: u.T.duration.instant,
        ease: [...u.T.ease.standard]
      }
    })
  }, _ = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, x = { duration: 0.16, ease: [...u.T.ease.enter] }, f = {
    opacity: 0,
    transition: { duration: 0.1, ease: [...u.T.ease.standard] }
  }, g = { opacity: 0, scale: 0.6, filter: `blur(${u.T.blur.subtle}px)` }, j = {
    ...g,
    transition: { duration: u.T.duration.fast, ease: [...u.T.ease.standard] }
  }, b = { opacity: 0, x: -6, filter: `blur(${u.T.blur.subtle}px)` }, y = {
    opacity: 0,
    x: 8,
    filter: `blur(${u.T.blur.subtle}px)`,
    transition: { duration: u.T.duration.fast, ease: [...u.T.ease.standard] }
  }, w = { ..._, x: 0 }, k = { ..._, opacity: 0 }, v = { opacity: 0, transition: { duration: u.T.duration.instant } }, N = {
    ...u.T.spring.snappy,
    opacity: { duration: u.T.duration.fast, ease: [...u.T.ease.enter] },
    filter: { duration: u.T.duration.fast, ease: [...u.T.ease.enter] }
  };
  function $({ reduced: e2 }) {
    return (0, a.jsx)("svg", {
      className: h().statusIcon,
      width: 17,
      height: 17,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: (0, a.jsx)(o.PY1.path, {
        d: "M4 12l5 5L20 6",
        initial: !e2 && { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: {
            duration: u.T.duration.standard,
            ease: [...u.T.ease.enter],
            delay: 0.05
          },
          opacity: { duration: 0.05, delay: 0.05 }
        }
      })
    });
  }
  function S({ text: e2, reduced: t2 }) {
    let s2, c2, l2, u2 = (0, r.useRef)(null), p2 = (s2 = (0, i.d)("auto"), c2 = (0, r.useRef)(e2), l2 = (0, r.useRef)(0), (0, r.useLayoutEffect)(() => {
      c2.current !== e2 && (c2.current = e2, l2.current = performance.now() + 700);
    }, [e2]), (0, r.useEffect)(() => {
      let e3 = u2.current, a2 = e3?.parentElement;
      if (!e3 || !a2 || "u" < typeof ResizeObserver) return;
      let r2 = false, i2 = new ResizeObserver(([e4]) => {
        if (!e4) return;
        let i3 = e4.contentRect.width;
        if (!i3 || !r2 || t2 || performance.now() > l2.current) {
          r2 = i3 > 0, s2.jump(i3 || "auto"), delete a2.dataset.morphing;
          return;
        }
        a2.dataset.morphing = "", (0, n.i)(s2, i3, {
          type: "spring",
          visualDuration: 0.24,
          bounce: 0,
          onComplete: () => {
            delete a2.dataset.morphing;
          }
        });
      });
      return i2.observe(e3), () => i2.disconnect();
    }, [u2, t2, s2]), s2);
    return (0, a.jsxs)(o.PY1.span, {
      className: h().morph,
      style: { width: p2 },
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("span", { ref: u2, className: h().sizer, children: e2 }),
        (0, a.jsx)(d.N, {
          initial: false,
          children: (0, a.jsx)(
            o.PY1.span,
            {
              className: h().label,
              initial: !t2 && { opacity: 0, y: 2 },
              animate: { opacity: 1, y: 0 },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : f,
              transition: x,
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function C({
    label: e2,
    successLabel: t2 = "Saved",
    pendingLabel: s2 = "Saving",
    onAction: i2,
    resetAfterMs: n2 = 2400,
    onActionError: p2,
    className: _2,
    disabled: x2,
    ...f2
  }) {
    let [T, z] = (0, r.useState)("idle"), R = (0, r.useRef)(null), L = (0, r.useRef)(null), A = (0, c.I)() ?? false, H = "pending" === T ? s2 : "success" === T ? t2 : e2;
    async function P() {
      if ("pending" !== T) {
        R.current && clearTimeout(R.current), z("pending");
        try {
          await i2(), z("success"), n2 > 0 && (R.current = setTimeout(() => z("idle"), n2));
        } catch (e3) {
          z("idle"), p2?.(e3);
        }
      }
    }
    (0, r.useEffect)(
      () => () => {
        R.current && clearTimeout(R.current);
      },
      []
    );
    let M = "pending" === T, I = "idle" === T;
    return (0, a.jsxs)(o.PY1.button, {
      ...f2,
      ref: L,
      tabIndex: f2.tabIndex ?? 0,
      type: f2.type ?? "button",
      className: [h().button, _2].filter(Boolean).join(" "),
      disabled: x2,
      "aria-disabled": !!M || f2["aria-disabled"],
      "aria-busy": M,
      "data-state": T,
      onClick: P,
      custom: L,
      variants: m,
      whileTap: A || x2 || M ? void 0 : "pressed",
      transition: u.T.spring.snappy,
      children: [
        (0, a.jsxs)("span", {
          className: h().content,
          "aria-hidden": "true",
          children: [
            (0, a.jsx)(S, { text: H, reduced: A }),
            (0, a.jsx)("span", {
              className: h().iconSlot,
              children: (0, a.jsx)(d.N, {
                initial: false,
                children: (0, a.jsx)(
                  o.PY1.span,
                  {
                    className: h().phase,
                    initial: A ? k : I ? b : g,
                    animate: w,
                    exit: A ? v : I ? y : j,
                    transition: A ? { duration: u.T.duration.instant } : N,
                    children: M ? (0, a.jsx)("span", { className: h().spinner }) : "success" === T ? (0, a.jsx)($, { reduced: A }) : (0, a.jsx)(l.A, {
                      className: h().arrow,
                      width: 17,
                      height: 17
                    })
                  },
                  T
                )
              })
            })
          ]
        }),
        (0, a.jsx)("span", { className: h().visuallyHidden, children: e2 }),
        (0, a.jsx)("span", {
          className: h().visuallyHidden,
          role: "status",
          children: "pending" === T ? s2 : "success" === T ? t2 : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(61491, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => c });
  var n = r(51811);
  let a = {
    name: "wand-sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
          key: "ul74o6"
        }
      ],
      ["path", { d: "m14 7 3 3", key: "1r5n42" }],
      ["path", { d: "M5 6v4", key: "ilb8ba" }],
      ["path", { d: "M19 14v4", key: "blhpug" }],
      ["path", { d: "M10 2v2", key: "7u0qdc" }],
      ["path", { d: "M7 8H3", key: "zfb6yr" }],
      ["path", { d: "M21 16h-4", key: "1cnmox" }],
      ["path", { d: "M11 3H9", key: "1obp7u" }]
    ],
    aliases: ["wand-2"]
  };
  a.node;
  let c = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(66466, ".button{position:relative;display:inline-flex;min-height:var(--control-height-md);align-items:center;justify-content:center;overflow:hidden;padding:0 var(--space-5);border:1px solid var(--foreground);border-radius:var(--radius-control);background:var(--foreground);color:var(--background);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.button:hover:not(:disabled){box-shadow:var(--shadow-resting)}\n.button:disabled{cursor:not-allowed}\n.button:disabled:not([data-state=pending]){opacity:.7}\n.button[data-state=pending]{cursor:progress}\n@media (prefers-reduced-motion:reduce){.button{transition:none}\n.content{display:inline-flex;min-height:1.25rem;align-items:center;justify-content:center;gap:var(--space-2);white-space:nowrap}\n.morph{position:relative;display:inline-grid;min-width:0;justify-items:start}\n.morph[data-morphing]{clip-path:inset(-.6em 0 -.6em -.3em)}\n.sizer{visibility:hidden}\n.label,.sizer{grid-area:1/1;white-space:pre}\n.iconSlot{display:grid;width:17px;height:17px;flex:0 0 17px;place-items:center}\n.phase{grid-area:1/1;display:grid;width:17px;height:17px;place-items:center}\n.arrow{flex:none}\n.statusIcon{color:currentColor}\n.spinner{display:inline-block;width:var(--space-4);height:var(--space-4);border:1.5px solid;border-right:1.5px solid transparent;border-radius:var(--radius-pill);animation:spin .7s linear infinite}\n.spinner{animation:none}\n.visuallyHidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"button":"button","content":"content","morph":"morph","sizer":"sizer","label":"label","iconSlot":"iconSlot","phase":"phase","arrow":"arrow","statusIcon":"statusIcon","spinner":"spinner","visuallyHidden":"visuallyHidden"});
A.reg(84830, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"password-strength_field__TL01s",label:"password-strength_label__LaKQo",shell:"password-strength_shell__MrikZ",input:"password-strength_input__L_KxV","resolve-shown":"password-strength_resolve-shown__bWCim","resolve-hidden":"password-strength_resolve-hidden__IQYVj",reveal:"password-strength_reveal__AR82Y",errorSlot:"password-strength_errorSlot__yfEaV",error:"password-strength_error__1_gLW",errorText:"password-strength_errorText___a_0v",meterRow:"password-strength_meterRow__aQt_z",meter:"password-strength_meter__E_JE8",segment:"password-strength_segment__ikpYs",fill:"password-strength_fill__BYFlm",word:"password-strength_word__ivsGS",wordText:"password-strength_wordText__cz0HH",rules:"password-strength_rules__BK1XB",rule:"password-strength_rule__LnZfK",ruleLabel:"password-strength_ruleLabel__8vkM5",mark:"password-strength_mark__dxakX",markFill:"password-strength_markFill__IBpb1",tick:"password-strength_tick__nXiTD",remaining:"password-strength_remaining__yul_w",remainingText:"password-strength_remainingText__Jii7L",number:"password-strength_number__h2ral",place:"password-strength_place__RwUC_",digit:"password-strength_digit__kcnVc",srOnly:"password-strength_srOnly__mLAgm"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.cssFor("password-strength", [66466]);
A.item("password-strength", {entry:67556, export:"PasswordStrengthDemo", kind:"component", tier:"free", unresolved:[], xref:true});
})();