function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.d(t, { N: () => N });
  var n = a(95155), r = a(12115), i = a(25583), s = a(12363), o = a(80642), l = a(25354), c = a(28245), u = a(92171), d = a(18310), p = a(7770), _ = a(73474), f = a(19594), h = a.n(f);
  let m = /^(?:abstract|as|async|await|break|case|catch|class|const|continue|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|of|private|protected|public|readonly|return|set|static|switch|throw|try|type|typeof|var|void|while|with|yield|SELECT|FROM|WHERE|INSERT|UPDATE|DELETE)$/, y = /^(?:true|false|null|undefined|NaN|Infinity)$/, b = /^(?:Array|Boolean|Date|Error|Map|Number|Promise|Record|Set|String|ReactNode|HTMLElement|HTMLButtonElement|Event|unknown|never|void|any|boolean|number|string|object)$/, x = /\/\*[\s\S]*?\*\/|\/\/[^\n]*|<!--[\s\S]*?-->|`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$-]*\b|[{}[\]();,.<>:=+*/!?|&-]/g, j = { duration: p.T.duration.standard, ease: [...p.T.ease.enter] }, v = { duration: p.T.duration.instant, ease: [...p.T.ease.standard] };
  function k({ value: e2, reduced: t2 }) {
    return (0, n.jsx)(o.N, {
      initial: false,
      children: (0, n.jsx)(
        l.PY1.span,
        {
          className: h().swapText,
          initial: !t2 && {
            opacity: 0,
            y: "0.3em",
            filter: `blur(${p.T.blur.soft}px)`
          },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
            opacity: 0,
            y: "-0.3em",
            filter: `blur(${p.T.blur.subtle}px)`,
            transition: v
          },
          transition: t2 ? { duration: 0 } : j,
          children: e2
        },
        e2
      )
    });
  }
  function g({ name: e2, reduced: t2 }) {
    let a2 = (0, r.useRef)(null), i2 = (0, r.useRef)(0), s2 = (0, c.d)("auto");
    return (0, r.useEffect)(() => {
      let e3 = a2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => {
        i2.current = e3.offsetWidth;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useLayoutEffect)(() => {
      let e3 = s2.get(), n2 = a2.current?.offsetWidth ?? 0, r2 = "number" == typeof e3 ? e3 : i2.current;
      if (i2.current = n2, t2 || !r2 || !n2 || 1 > Math.abs(r2 - n2))
        return void s2.jump("auto");
      s2.jump(r2);
      let o2 = (0, u.i)(s2, n2, {
        ...p.T.spring.morph,
        onComplete: () => s2.jump("auto")
      });
      return () => o2.stop();
    }, [e2, t2, s2]), (0, n.jsxs)(l.PY1.span, {
      className: `${h().swap} ${h().filename}`,
      style: { width: s2 },
      children: [
        (0, n.jsx)("span", {
          ref: a2,
          className: h().sizer,
          "aria-hidden": "true",
          children: e2
        }),
        (0, n.jsx)("span", {
          className: h().swapStack,
          "aria-hidden": "true",
          children: (0, n.jsx)(k, { value: e2, reduced: t2 })
        }),
        (0, n.jsx)("span", { className: h().srOnly, children: e2 })
      ]
    });
  }
  function N({ code: e2, filename: t2, language: a2 = "tsx", maxLines: f2 }) {
    let w = a2.toLowerCase().replace(/^\./, ""), T = (0, d.I)() ?? false, E = (0, r.useId)(), C = e2.split("\n").length, $ = null != f2 && f2 > 0 && C > f2, [R, S] = (0, r.useState)(false), L = !$ || R, O = (0, r.useRef)(null), W = (0, r.useRef)(null), P = (0, c.d)(L ? "auto" : "var(--code-collapsed)"), z = (0, r.useRef)({ open: L, reduced: T }), Y = (0, r.useRef)(() => {
    });
    (0, r.useLayoutEffect)(() => {
      let e3 = O.current;
      if (!e3) return;
      let t3 = (e4) => {
        let t4 = W.current;
        if (!t4) return;
        let a4 = z.current.open ? t4.full : t4.collapsed;
        e4 || z.current.reduced || "number" != typeof P.get() ? P.jump(a4) : (0, u.i)(P, a4, p.T.spring.smooth);
      }, a3 = new ResizeObserver(() => {
        let a4 = getComputedStyle(e3), n2 = e3.offsetHeight, r2 = f2 ? Math.min(
          n2,
          Math.round(
            f2 * parseFloat(a4.lineHeight) + parseFloat(a4.paddingTop) + parseFloat(a4.paddingBottom)
          )
        ) : n2, i2 = !W.current;
        W.current = { full: n2, collapsed: r2 }, t3(i2);
      });
      return a3.observe(e3), Y.current = t3, () => a3.disconnect();
    }, [P, f2]), (0, r.useLayoutEffect)(() => {
      z.current = { open: L, reduced: T }, Y.current(false);
    }, [L, T]);
    let A = [`Show all ${C} lines`, "Show fewer lines"];
    return (0, n.jsxs)("section", {
      className: h().block,
      "aria-label": t2 ? `${t2} source code` : `${w} source code`,
      style: f2 ? { "--code-lines": f2 } : void 0,
      children: [
        (0, n.jsxs)("header", {
          className: h().header,
          children: [
            (0, n.jsxs)("div", {
              className: h().file,
              children: [
                (0, n.jsx)(i.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, n.jsx)(g, { name: t2 ?? "Source code", reduced: T }),
                (0, n.jsx)("span", { className: h().language, children: w })
              ]
            }),
            (0, n.jsx)(_.CopyButton, { value: e2, label: "Copy code" })
          ]
        }),
        (0, n.jsx)(l.PY1.div, {
          className: h().viewport,
          style: { height: P },
          children: (0, n.jsx)("pre", {
            ref: O,
            id: E,
            className: h().pre,
            tabIndex: 0,
            "aria-label": "Selectable source code",
            children: (0, n.jsx)(o.N, {
              initial: false,
              mode: "popLayout",
              children: (0, n.jsx)(
                l.PY1.code,
                {
                  className: h().code,
                  initial: !T && { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  exit: T ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: v },
                  transition: T ? { duration: 0 } : j,
                  children: (function(e3, t3) {
                    let a3 = [], i2 = 0;
                    for (let s2 of e3.matchAll(x)) {
                      let o2 = s2[0], l2 = s2.index ?? 0;
                      i2 < l2 && a3.push(e3.slice(i2, l2));
                      let c2 = (function(e4, t4, a4, n2) {
                        if (e4.startsWith("//") || e4.startsWith("/*") || e4.startsWith("<!--"))
                          return "comment";
                        if (e4.startsWith('"') || e4.startsWith("'") || e4.startsWith("`"))
                          return "json" === n2 && /^\s*:/.test(t4.slice(a4 + e4.length)) ? "property" : "string";
                        if (/^\d/.test(e4)) return "number";
                        if (m.test(e4) || y.test(e4)) return "keyword";
                        if (b.test(e4)) return "type";
                        if (/^[{}[\]();,.<>:=+*/!?|&-]$/.test(e4))
                          return "punctuation";
                        let r2 = t4.slice(0, a4), i3 = t4.slice(a4 + e4.length);
                        return ("tsx" === n2 || "jsx" === n2 || "html" === n2 || "vue" === n2) && /<\/?$/.test(r2) ? "tag" : /^\s*\(/.test(i3) && "json" !== n2 ? "function" : ("css" === n2 || "tsx" === n2 || "jsx" === n2) && /^\s*[:=]/.test(i3) ? "property" : void 0;
                      })(o2, e3, l2, t3);
                      a3.push(
                        c2 ? (0, n.jsx)(
                          "span",
                          { className: h()[c2], children: o2 },
                          `${l2}-${o2}`
                        ) : (0, n.jsx)(
                          r.Fragment,
                          { children: o2 },
                          `${l2}-${o2}`
                        )
                      ), i2 = l2 + o2.length;
                    }
                    return i2 < e3.length && a3.push(e3.slice(i2)), a3;
                  })(e2, w)
                },
                e2
              )
            })
          })
        }),
        $ && (0, n.jsxs)("button", {
          type: "button",
          className: h().expand,
          "aria-expanded": R,
          "aria-controls": E,
          onClick: () => S((e3) => !e3),
          children: [
            (0, n.jsxs)("span", {
              className: h().swap,
              "aria-hidden": "true",
              children: [
                A.map(
                  (e3) => (0, n.jsx)(
                    "span",
                    { className: h().reserve, children: e3 },
                    e3
                  )
                ),
                (0, n.jsx)("span", {
                  className: h().swapStack,
                  children: (0, n.jsx)(k, { value: A[+!!R], reduced: T })
                })
              ]
            }),
            (0, n.jsx)("span", { className: h().srOnly, children: A[+!!R] }),
            (0, n.jsx)(l.PY1.span, {
              className: h().chevron,
              "aria-hidden": "true",
              initial: false,
              animate: { rotate: 180 * !!R },
              transition: T ? { duration: 0 } : p.T.spring.snappy,
              children: (0, n.jsx)(s.A, { size: 16, strokeWidth: 1.75 })
            })
          ]
        })
      ]
    });
  }
};

__m(__module,__exports,__require);
}