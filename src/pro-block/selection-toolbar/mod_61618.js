function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { x: () => j });
  var n = a(95155), r = a(12115), i = a(18310), l = a(28245), s = a(92171), o = a(25354), c = a(80642), u = a(65377), d = a(9005), p = a(65222), m = a(7770), h = a(80194), f = a.n(h);
  let y = { duration: m.T.duration.standard, ease: [...m.T.ease.enter] }, g = { duration: m.T.duration.instant, ease: [...m.T.ease.standard] }, _ = { exit: (e2) => ({ opacity: 0, transition: e2 ? g : { duration: 0 } }) };
  function x(e2, t2) {
    for (let a2 = e2.indexOf(t2); -1 !== a2; a2 = e2.indexOf(t2, a2 + 1))
      if (0 === a2 || !/[\p{L}\p{N}]/u.test(e2.charAt(a2 - 1))) return a2;
    return -1;
  }
  function b({ text: e2, ranges: t2 }) {
    if (!t2.length) return e2;
    let a2 = Array(e2.length).fill(false);
    for (let [e3, n2] of t2) for (let t3 = e3; t3 < n2; t3++) a2[t3] = true;
    let r2 = [];
    for (let t3 = 0; t3 < e2.length; ) {
      let i2 = t3;
      for (; i2 < e2.length && a2[i2] === a2[t3]; ) i2++;
      r2.push(
        a2[t3] ? (0, n.jsx)(
          "mark",
          { className: f().match, children: e2.slice(t3, i2) },
          t3
        ) : e2.slice(t3, i2)
      ), t3 = i2;
    }
    return r2;
  }
  function j({
    items: e2,
    placeholder: t2 = "Search commands",
    onSelect: a2,
    onClose: h2,
    label: v = "Command palette",
    autoFocus: N = false
  }) {
    let w = (0, r.useId)(), [k, T] = (0, r.useState)(""), [C, L] = (0, r.useState)(null), [E, $] = (0, r.useState)("auto"), M = (0, i.I)(), A = (0, r.useRef)(null), I = (0, r.useRef)(null), D = (0, r.useRef)({ x: -1, y: -1 }), B = (0, r.useRef)(false), P = (0, l.d)(0), R = (0, l.d)(0), Y = (0, l.d)(0), {
      groupedItems: H,
      filtered: K,
      rangesById: S
    } = (0, r.useMemo)(() => {
      let t3 = /* @__PURE__ */ new Map();
      for (let a4 of (function(e3, t4) {
        let a5 = t4.trim().toLowerCase().split(/\s+/).filter(Boolean);
        if (!a5.length)
          return e3.map((e4, t5) => ({
            item: e4,
            score: 0,
            ranges: [],
            order: t5
          }));
        let n2 = [];
        return e3.forEach((e4, t5) => {
          let r2 = e4.label.toLowerCase(), i2 = 0, l2 = [];
          for (let t6 of a5) {
            let a6 = (function(e5, t7, a7) {
              let n3 = x(t7, a7);
              if (0 === n3) return { score: 100, ranges: [[0, a7.length]] };
              if (n3 > 0) return { score: 80, ranges: [[n3, n3 + a7.length]] };
              let r3 = a7.length >= 3 ? t7.indexOf(a7) : -1;
              if (r3 > 0) return { score: 50, ranges: [[r3, r3 + a7.length]] };
              if (e5.keywords?.some((e6) => -1 !== x(e6.toLowerCase(), a7)))
                return { score: 40, ranges: [] };
              if (e5.description && -1 !== x(e5.description.toLowerCase(), a7))
                return { score: 25, ranges: [] };
              let i3 = (function(e6, t8) {
                if (t8.length < 2) return null;
                for (let a8 = e6.indexOf(t8.charAt(0)); -1 !== a8; a8 = e6.indexOf(t8.charAt(0), a8 + 1)) {
                  if (a8 > 0 && /[\p{L}\p{N}]/u.test(e6.charAt(a8 - 1)))
                    continue;
                  let n4 = [[a8, a8 + 1]], r4 = a8;
                  for (let a9 = 1; a9 < t8.length && -1 !== r4 && -1 !== (r4 = e6.indexOf(t8.charAt(a9), r4 + 1)); a9++) {
                    let e7 = n4[n4.length - 1];
                    e7 && e7[1] === r4 ? e7[1] = r4 + 1 : n4.push([r4, r4 + 1]);
                  }
                  if (-1 !== r4 && r4 - a8 < 3 * t8.length) return n4;
                }
                return null;
              })(t7, a7);
              return i3 ? { score: 10, ranges: i3 } : null;
            })(e4, r2, t6);
            if (!a6) return;
            i2 += a6.score, l2.push(...a6.ranges);
          }
          n2.push({ item: e4, score: i2, ranges: l2, order: t5 });
        }), n2.sort((e4, t5) => t5.score - e4.score || e4.order - t5.order);
      })(e2, k)) {
        let e3 = a4.item.group ?? "Actions";
        t3.set(e3, [...t3.get(e3) ?? [], a4]);
      }
      let a3 = [];
      return {
        groupedItems: [...t3.entries()].map(([e3, t4]) => [
          e3,
          t4.map(({ item: e4 }) => ({ item: e4, index: a3.push(e4) - 1 }))
        ]),
        filtered: a3,
        rangesById: new Map(
          [...t3.values()].flat().map((e3) => [e3.item.id, e3.ranges])
        )
      };
    }, [e2, k]), [O, z] = (0, r.useState)({ list: K, glide: true });
    if (O.list !== K) {
      let e3 = new Map(O.list.map((e4, t3) => [e4.id, t3]));
      z({
        list: K,
        glide: K.every((t3, a3) => 6 >= Math.abs((e3.get(t3.id) ?? a3) - a3))
      });
    }
    let F = O.glide && !M, J = K.length ? Math.min(C ?? 0, K.length - 1) : -1, W = K[J]?.id;
    function X(e3) {
      a2?.(e3), T(""), L(null), A.current?.focus();
    }
    return (0, r.useEffect)(() => {
      N && A.current?.focus({ preventScroll: true });
    }, [N]), (0, r.useEffect)(() => {
      let e3 = (e4) => {
        (e4.metaKey || e4.ctrlKey) && "k" === e4.key.toLowerCase() && (e4.preventDefault(), A.current?.focus());
      };
      return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
    }, []), (0, r.useLayoutEffect)(() => {
      let e3 = I.current;
      if (!e3) return;
      let t3 = new ResizeObserver(
        ([t4]) => $(Math.round(t4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight))
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useLayoutEffect)(() => {
      let e3 = W ? document.getElementById(`${w}-${W}`) : null;
      if (!e3) {
        B.current = false, (0, s.i)(Y, 0, { duration: 0.1 * !M });
        return;
      }
      let t3 = !B.current || M ? { duration: 0 } : m.T.spring.snappy, a3 = 0;
      for (let t4 = e3; t4 && t4 !== I.current; t4 = t4.offsetParent)
        a3 += t4.offsetTop + (t4 === e3 ? 0 : t4.clientTop);
      (0, s.i)(P, a3, t3), (0, s.i)(R, e3.offsetHeight, t3), (0, s.i)(Y, 1, { duration: 0.08 * !M }), B.current = true;
    }, [W, K, w, M, P, R, Y]), (0, r.useEffect)(() => {
      W && document.getElementById(`${w}-${W}`)?.scrollIntoView({ block: "nearest" });
    }, [W, w]), (0, n.jsxs)(o.PY1.div, {
      className: f().palette,
      initial: !M && { opacity: 0, y: 6, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: M ? { duration: 0 } : {
        default: m.T.spring.smooth,
        opacity: {
          duration: m.T.duration.fast,
          ease: [...m.T.ease.enter]
        }
      },
      children: [
        (0, n.jsxs)("div", {
          className: f().searchRow,
          children: [
            (0, n.jsx)("span", {
              className: f().searchIcon,
              children: (0, n.jsx)(u.A, {
                width: 18,
                height: 18,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, n.jsx)("label", {
              className: f().visuallyHidden,
              htmlFor: w,
              children: v
            }),
            (0, n.jsx)("input", {
              ref: A,
              id: w,
              role: "combobox",
              "aria-autocomplete": "list",
              "aria-expanded": "true",
              "aria-controls": `${w}-results`,
              "aria-activedescendant": W ? `${w}-${W}` : void 0,
              value: k,
              onChange: (e3) => {
                T(e3.target.value), L(null);
              },
              onKeyDown: function(e3) {
                "ArrowDown" === e3.key && (e3.preventDefault(), L(Math.min(J + 1, Math.max(K.length - 1, 0)))), "ArrowUp" === e3.key && (e3.preventDefault(), L(Math.max(J - 1, 0))), "Home" === e3.key && (e3.preventDefault(), L(0)), "End" === e3.key && (e3.preventDefault(), L(Math.max(K.length - 1, 0)));
                let t3 = K[J];
                "Enter" === e3.key && t3 && (e3.preventDefault(), X(t3)), "Escape" === e3.key && (e3.preventDefault(), k ? (T(""), L(null)) : h2?.());
              },
              placeholder: t2,
              autoComplete: "off"
            }),
            (0, n.jsx)(c.N, {
              mode: "popLayout",
              initial: false,
              children: k ? (0, n.jsx)(
                o.PY1.button,
                {
                  className: f().clearButton,
                  type: "button",
                  "aria-label": "Clear search",
                  onClick: () => {
                    T(""), L(null), A.current?.focus();
                  },
                  initial: !M && {
                    opacity: 0,
                    scale: 0.6,
                    filter: `blur(${m.T.blur.subtle}px)`
                  },
                  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  exit: M ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    scale: 0.6,
                    filter: `blur(${m.T.blur.subtle}px)`,
                    transition: g
                  },
                  transition: M ? { duration: 0 } : {
                    default: m.T.spring.snappy,
                    opacity: { duration: m.T.duration.instant }
                  },
                  children: (0, n.jsx)(d.A, {
                    width: 15,
                    height: 15,
                    "aria-hidden": "true"
                  })
                },
                "clear"
              ) : null
            }),
            h2 ? (0, n.jsx)("button", {
              className: f().closeButton,
              type: "button",
              "aria-label": "Close command palette",
              onClick: h2,
              children: "Esc"
            }) : null,
            (0, n.jsx)("kbd", { className: f().commandKey, children: "\u2318 K" })
          ]
        }),
        (0, n.jsx)(o.PY1.div, {
          className: f().resultsFrame,
          initial: false,
          animate: { height: E },
          transition: M ? { duration: 0 } : m.T.spring.smooth,
          children: (0, n.jsxs)(o.PY1.div, {
            ref: I,
            layoutScroll: true,
            id: `${w}-results`,
            className: f().results,
            role: "listbox",
            "aria-label": "Command results",
            children: [
              (0, n.jsx)(o.PY1.span, {
                className: f().highlight,
                style: { y: P, height: R, opacity: Y },
                "aria-hidden": "true"
              }),
              (0, n.jsx)(c.N, {
                mode: "wait",
                initial: false,
                children: K.length ? (0, n.jsx)(
                  o.PY1.div,
                  {
                    initial: !M && { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: M ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: g },
                    transition: y,
                    children: (0, n.jsx)(c.N, {
                      mode: "popLayout",
                      initial: false,
                      custom: F,
                      children: H.map(
                        ([e3, t3]) => (0, n.jsxs)(
                          o.PY1.div,
                          {
                            layout: !!F && "position",
                            className: f().group,
                            role: "group",
                            "aria-label": e3,
                            variants: _,
                            initial: !M && { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: "exit",
                            transition: M ? { duration: 0 } : { default: y, layout: m.T.spring.smooth },
                            children: [
                              (0, n.jsx)("span", {
                                className: f().groupHeading,
                                "aria-hidden": "true",
                                children: e3
                              }),
                              (0, n.jsx)(c.N, {
                                mode: "popLayout",
                                initial: false,
                                custom: F,
                                children: t3.map(
                                  ({ item: e4, index: t4 }) => (0, n.jsxs)(
                                    o.PY1.button,
                                    {
                                      layout: !!F && "position",
                                      id: `${w}-${e4.id}`,
                                      className: `${f().result} ${t4 === J ? f().activeResult : ""}`,
                                      type: "button",
                                      role: "option",
                                      "aria-selected": t4 === J,
                                      onClick: () => X(e4),
                                      onPointerMove: (e5) => {
                                        (e5.clientX !== D.current.x || e5.clientY !== D.current.y) && (D.current = {
                                          x: e5.clientX,
                                          y: e5.clientY
                                        }, t4 !== J && L(t4));
                                      },
                                      variants: _,
                                      initial: !M && { opacity: 0 },
                                      animate: { opacity: 1 },
                                      exit: "exit",
                                      transition: M ? { duration: 0 } : {
                                        default: y,
                                        layout: m.T.spring.smooth
                                      },
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: f().itemIcon,
                                          "aria-hidden": "true",
                                          children: e4.icon ?? (0, n.jsx)(p.A, {
                                            width: 16,
                                            height: 16
                                          })
                                        }),
                                        (0, n.jsxs)("span", {
                                          className: f().resultCopy,
                                          children: [
                                            (0, n.jsx)("span", {
                                              className: f().resultLabel,
                                              children: (0, n.jsx)(b, {
                                                text: e4.label,
                                                ranges: S.get(e4.id) ?? []
                                              })
                                            }),
                                            e4.description && (0, n.jsx)("span", {
                                              className: f().resultDescription,
                                              children: e4.description
                                            })
                                          ]
                                        }),
                                        e4.shortcut && (0, n.jsx)("span", {
                                          className: f().shortcut,
                                          children: e4.shortcut.split(/\s+|\+(?=.)/).filter(Boolean).map(
                                            (e5, t5) => (0, n.jsx)(
                                              "kbd",
                                              { children: e5 },
                                              t5
                                            )
                                          )
                                        })
                                      ]
                                    },
                                    e4.id
                                  )
                                )
                              })
                            ]
                          },
                          e3
                        )
                      )
                    })
                  },
                  "results"
                ) : (0, n.jsxs)(
                  o.PY1.div,
                  {
                    className: f().empty,
                    initial: !M && {
                      opacity: 0,
                      y: 6,
                      filter: `blur(${m.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: M ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, transition: g },
                    transition: y,
                    children: [
                      (0, n.jsx)("span", {
                        children: (0, n.jsx)(u.A, {
                          width: 20,
                          height: 20,
                          "aria-hidden": "true"
                        })
                      }),
                      (0, n.jsxs)("strong", {
                        children: ["No results for \u201C", k.trim(), "\u201D"]
                      }),
                      (0, n.jsx)("small", {
                        children: "Try a different word or clear the search."
                      })
                    ]
                  },
                  "empty"
                )
              })
            ]
          })
        }),
        (0, n.jsx)("span", {
          className: f().visuallyHidden,
          role: "status",
          "aria-live": "polite",
          children: k.trim() ? K.length ? `${K.length} ${1 === K.length ? "result" : "results"}` : "No results" : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}