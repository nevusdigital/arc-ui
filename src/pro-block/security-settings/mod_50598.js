function(__module,__exports,__require){
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
}