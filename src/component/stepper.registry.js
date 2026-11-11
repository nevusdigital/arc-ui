/* stepper (free component, cross-ref module 10736, closure 159) */
(function(){var A=globalThis.__ARC__;
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","label":"label","input":"input","messageSlot":"messageSlot","description":"description","error":"error","words":"words","word":"word","column":"column","srOnly":"srOnly"});
A.regCss(24202, ".group{--avatar-size:36px;display:inline-flex;height:var(--avatar-size);align-items:center;padding-left:6px}\n.group.sm{--avatar-size:28px}\n.group.lg{--avatar-size:48px}\n.overflow.sm{width:28px;height:28px;font-size:10px}\n.overflow.lg{width:48px;height:48px;font-size:var(--text-sm)}\n.slot{position:relative;display:inline-flex;flex:0 0 auto;height:var(--avatar-size);align-items:center}\n@media (hover:hover) and (pointer:fine){.slot:hover{z-index:1}\n.slot:hover .avatar,.slot:hover .overflow{box-shadow:0 0 0 1px var(--border-strong)}\n.slot:hover .tip{opacity:1;transform:translate(-50%);transition-delay:60ms}\n.lift{position:relative;display:inline-flex;margin-left:-6px;border-radius:var(--radius-pill)}\n.avatar,.overflow{border:2px solid var(--surface);box-shadow:0 0 0 1px var(--border);transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.overflow{position:relative;display:inline-grid;place-items:center;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums}\n.overflow.md{width:36px;height:36px}\n.count{display:inline-block}\n.tip{position:absolute;z-index:2;bottom:calc(100% + 8px);left:50%;padding:4px 8px;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body);white-space:nowrap;pointer-events:none;opacity:0;transform:translate(-50%,3px);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.tip{transform:translate(-50%);transition:none}", {"group":"group","sm":"sm","lg":"lg","overflow":"overflow","slot":"slot","avatar":"avatar","tip":"tip","lift":"lift","md":"md","count":"count"});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.reg(71914, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Z: () => h });
  var r = a(95155), i = a(12115), s = a(18310), n = a(80642), l = a(25354), o = a(7770), c = a(92218), d = a(24202), p = a.n(d);
  let u = {
    hidden: (e2) => ({
      opacity: 0,
      y: `${0.4 * e2}em`,
      filter: `blur(${o.T.blur.subtle}px)`
    }),
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: o.T.duration.standard,
        ease: [...o.T.ease.enter]
      }
    },
    gone: (e2) => ({
      opacity: 0,
      y: `${-0.4 * e2}em`,
      filter: `blur(${o.T.blur.subtle}px)`,
      transition: {
        duration: o.T.duration.fast,
        ease: [...o.T.ease.standard]
      }
    })
  }, m = {
    hidden: { opacity: 0, y: 0, filter: "blur(0px)" },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: o.T.duration.instant }
    },
    gone: {
      opacity: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: o.T.duration.instant }
    }
  }, _ = {
    initial: { width: 0, opacity: 0, scale: 0.9 },
    animate: { width: "auto", opacity: 1, scale: 1 },
    exit: { width: 0, opacity: 0, scale: 0.9 }
  };
  function h({
    members: e2,
    max: t2 = 4,
    size: a2 = "md",
    label: d2 = "Team members"
  }) {
    let f = !!(0, s.I)(), x = e2.slice(0, Math.max(0, t2)), v = Math.max(0, e2.length - x.length), g = f ? { duration: 0 } : o.T.spring.morph, [y, b] = (0, i.useState)({ overflow: v, direction: 1 });
    return y.overflow !== v && b({ overflow: v, direction: v < y.overflow ? -1 : 1 }), (0, r.jsx)("div", {
      className: [p().group, p()[a2]].join(" "),
      role: "group",
      "aria-label": d2,
      children: (0, r.jsxs)(n.N, {
        initial: false,
        children: [
          x.map(
            (e3) => (0, r.jsx)(
              l.PY1.span,
              {
                className: p().slot,
                ..._,
                transition: g,
                children: (0, r.jsxs)("span", {
                  className: p().lift,
                  children: [
                    (0, r.jsx)(c.e, {
                      className: p().avatar,
                      name: e3.name,
                      src: e3.src,
                      status: e3.status,
                      size: a2
                    }),
                    (0, r.jsx)("span", {
                      className: p().tip,
                      "aria-hidden": "true",
                      children: e3.name
                    })
                  ]
                })
              },
              e3.name
            )
          ),
          v > 0 ? (0, r.jsx)(
            l.PY1.span,
            {
              className: p().slot,
              ..._,
              transition: g,
              children: (0, r.jsx)("span", {
                className: [p().lift, p().overflow, p()[a2]].join(" "),
                role: "img",
                "aria-label": `${v} more ${d2.toLowerCase()}`,
                children: (0, r.jsx)(n.N, {
                  mode: "popLayout",
                  initial: false,
                  custom: y.direction,
                  children: (0, r.jsxs)(
                    l.PY1.span,
                    {
                      className: p().count,
                      custom: y.direction,
                      variants: f ? m : u,
                      initial: "hidden",
                      animate: "shown",
                      exit: "gone",
                      "aria-hidden": "true",
                      children: ["+", v]
                    },
                    v
                  )
                })
              })
            },
            "overflow"
          ) : null
        ]
      })
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("stepper", [14290,24202]);
A.item("stepper", {entry:10736, export:"StepperDemo", kind:"component", tier:"free", unresolved:[], xref:true});
})();