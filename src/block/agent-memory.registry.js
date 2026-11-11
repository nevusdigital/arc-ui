/* agent-memory (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(19805, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "arrow-down",
    size: 24,
    node: [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(29316, function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, {
    AgentMemory: () => ex,
    default: () => ew,
    guessGroup: () => T,
    memoryGroups: () => f,
    sampleCaptured: () => x,
    sampleMemories: () => _
  });
  var r = a(95155), i = a(12115), n = a(18310), s = a(92171), o = a(80642), l = a(25354), d = a(65360), c = a(64577), u = a(37058), m = a(64e3), h = a(19805), p = a(50680), g = a(67752);
  let f = [
    {
      id: "about",
      label: "About you",
      empty: "Nothing about you yet. Details like your role or where you live land here."
    },
    {
      id: "preferences",
      label: "Preferences",
      empty: "No preferences yet. Say how you like answers and they land here."
    },
    {
      id: "projects",
      label: "Projects",
      empty: "No projects yet. Work you mention more than once lands here."
    },
    {
      id: "people",
      label: "People",
      empty: "No people yet. Colleagues you mention by name land here."
    }
  ], y = (e2) => ({ name: g.c0.find((t2) => t2.id === e2).name, src: (0, g.my)(e2) }), _ = [
    {
      id: "m-role",
      group: "about",
      text: "Works as a staff product engineer on the billing team at Northwind",
      source: { kind: "chat", date: "2026-09-08" }
    },
    {
      id: "m-zurich",
      group: "about",
      text: "Lives in Zurich and works on Central European Time",
      source: { kind: "chat", date: "2026-09-08" }
    },
    {
      id: "m-portuguese",
      group: "about",
      text: "Is learning Portuguese, about 20 minutes a day",
      source: { kind: "chat", date: "2026-10-02" }
    },
    {
      id: "m-short",
      group: "preferences",
      text: "Wants the short answer first, with details after",
      source: { kind: "manual", date: "2026-09-12" }
    },
    {
      id: "m-diffs",
      group: "preferences",
      text: "Likes diffs instead of whole files when reviewing code",
      source: { kind: "chat", date: "2026-10-14" }
    },
    {
      id: "m-units",
      group: "preferences",
      text: "Prefers metric units and 24 hour times",
      source: { kind: "chat", date: "2026-09-21" }
    },
    {
      id: "m-next",
      group: "projects",
      text: "Is moving the billing dashboard to Next.js 16 before the Q4 freeze",
      source: { kind: "chat", date: "2026-10-14" }
    },
    {
      id: "m-pricing",
      group: "projects",
      text: "Is writing a design doc on usage based pricing, due Oct 31",
      source: { kind: "chat", date: "2026-10-17" }
    },
    {
      id: "m-daniel",
      group: "people",
      person: y("daniel-kim"),
      text: "Daniel Kim owns the billing API and reviews every schema change",
      source: { kind: "chat", date: "2026-10-09" }
    },
    {
      id: "m-sofia",
      group: "people",
      person: y("sofia-ramirez"),
      text: "Reports to Sofia Ramirez, with 1:1s on Thursday mornings",
      source: { kind: "chat", date: "2026-10-01" }
    },
    {
      id: "m-chloe",
      group: "people",
      person: y("chloe-nguyen"),
      text: "Chloe Nguyen runs the pricing analysis for the design doc",
      source: { kind: "manual", date: "2026-10-17" }
    }
  ], x = [
    {
      note: "Noted: you prefer pnpm over npm",
      memory: {
        id: "m-pnpm",
        group: "preferences",
        text: "Prefers pnpm over npm in install commands"
      }
    }
  ], b = (e2) => e2.reduce((e3, t2) => e3 + t2.text.length, 0), v = Math.round(b(_) / 0.62), w = /\b(manager|boss|colleague|coworker|teammate|partner|wife|husband|friend|sister|brother|mom|dad|mother|father|reports to|my (?:lead|team lead|designer|pm))\b/i, j = /\b(prefer|prefers|like|likes|love|loves|hate|hates|always|never|don't|do not|please|style|tone|format|units|shorter|longer|examples?|answers?|replies|reply|use|uses)\b/i, N = /\b(project|building|build|migrat\w*|working on|launch\w*|deadline|due|doc|repo|app|dashboard|release|roadmap|shipping|ship|side project|prototype)\b/i, k = /\b[A-Z][a-z]+ [A-Z][a-z]+ (?:is|owns|leads|runs|reviews|works|manages|handles|knows|helps|joined|approves)\b/;
  function T(e2) {
    return S(e2) || k.test(e2) || w.test(e2) ? "people" : j.test(e2) ? "preferences" : N.test(e2) ? "projects" : "about";
  }
  function S(e2) {
    let t2 = g.c0.find((t3) => e2.toLowerCase().includes(t3.name.toLowerCase()));
    return t2 ? { name: t2.name, src: (0, g.my)(t2.id) } : void 0;
  }
  function C(e2) {
    let t2 = e2.trim().replace(/\s+/g, " ").replace(/[.\s]+$/, "");
    return t2 ? t2[0].toUpperCase() + t2.slice(1) : "";
  }
  let A = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), E = "2026-10-20";
  var L = a(2125), R = a(35484), P = a(51288), $ = a(52898), M = a(28245), I = a(55809), B = a(11012), z = a(7770), F = a(71516), D = a.n(F);
  let { spring: H, duration: O } = z.T, Y = [0.22, 1, 0.36, 1], q = H.smooth, W = { type: "spring", visualDuration: 0.26, bounce: 0 }, K = (...e2) => e2.filter(Boolean).join(" ");
  function U({ children: e2, reduced: t2, className: a2, id: n2 }) {
    let o2 = (0, i.useRef)(null), d2 = (0, i.useRef)(null), c2 = (0, M.d)("auto"), u2 = (0, i.useRef)(false);
    return (0, i.useLayoutEffect)(() => {
      let e3, a3 = o2.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let i2 = Math.round(r3.borderBoxSize?.[0]?.blockSize ?? a3.offsetHeight), n3 = c2.get();
        if (!u2.current || t2 || "auto" === n3) {
          e3?.stop(), u2.current = true, c2.jump(i2);
          return;
        }
        n3 !== i2 && (e3?.stop(), d2.current?.setAttribute("data-moving", ""), e3 = (0, s.i)(c2, i2, {
          ...q,
          onComplete: () => d2.current?.removeAttribute("data-moving")
        }));
      });
      return r2.observe(a3), () => {
        r2.disconnect(), e3?.stop();
      };
    }, [c2, t2]), (0, r.jsx)(l.PY1.div, {
      ref: d2,
      id: n2,
      className: K(D().autoHeight, a2),
      style: { height: c2 },
      children: (0, r.jsx)("div", {
        ref: o2,
        className: D().autoHeightInner,
        children: e2
      })
    });
  }
  function J({
    id: e2,
    children: t2,
    reduced: a2,
    className: i2,
    align: n2 = "start"
  }) {
    return (0, r.jsx)("span", {
      className: K(D().fade, i2),
      "data-align": n2,
      children: (0, r.jsx)(o.N, {
        initial: false,
        children: (0, r.jsx)(
          l.PY1.span,
          {
            className: D().fadeItem,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: a2 ? O.instant : O.fast, ease: Y }
            },
            exit: {
              opacity: 0,
              y: 0,
              transition: { duration: 0.1 * !a2, ease: Y }
            },
            children: t2
          },
          e2
        )
      })
    });
  }
  function Z({ total: e2, deadline: t2, reduced: a2 }) {
    let n2 = (0, i.useRef)(null);
    return (0, i.useLayoutEffect)(() => {
      let a3 = n2.current;
      a3 && (a3.style.animationDelay = `${Math.min(0, t2 - e2 - Date.now())}ms`);
    }, [t2, e2]), (0, r.jsxs)("svg", {
      className: D().ring,
      viewBox: "0 0 16 16",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          className: D().ringTrack
        }),
        (0, r.jsx)("circle", {
          ref: n2,
          cx: "8",
          cy: "8",
          r: "6",
          pathLength: 1,
          className: D().ringFill,
          "data-static": a2 || void 0,
          style: { animationDuration: `${e2}ms` }
        })
      ]
    });
  }
  function G({ text: e2, query: t2 }) {
    let a2 = t2.trim().toLowerCase();
    if (!a2) return (0, r.jsx)(r.Fragment, { children: e2 });
    let i2 = [], n2 = e2.toLowerCase(), s2 = 0, o2 = n2.indexOf(a2);
    for (; -1 !== o2; )
      o2 > s2 && i2.push(e2.slice(s2, o2)), i2.push(
        (0, r.jsx)(
          "mark",
          { className: D().match, children: e2.slice(o2, o2 + a2.length) },
          o2
        )
      ), s2 = o2 + a2.length, o2 = n2.indexOf(a2, s2);
    return s2 < e2.length && i2.push(e2.slice(s2)), (0, r.jsx)(r.Fragment, { children: i2 });
  }
  function X({ share: e2, reduced: t2 }) {
    let a2 = Math.min(100, Math.round(100 * e2)), n2 = a2 >= 100 ? "full" : a2 >= 90 ? "high" : "ok", o2 = (0, M.d)(a2), d2 = (0, I.G)(o2, (e3) => Math.round(e3)), c2 = (0, M.d)(Math.min(1, e2));
    return (0, i.useEffect)(() => {
      if (t2) return void o2.jump(a2);
      let e3 = (0, s.i)(o2, a2, { duration: 1.5 * O.standard, ease: Y });
      return () => e3.stop();
    }, [a2, t2, o2]), (0, i.useEffect)(() => {
      if (t2) return void c2.jump(Math.min(1, e2));
      let a3 = (0, s.i)(c2, Math.min(1, e2), q);
      return () => a3.stop();
    }, [e2, t2, c2]), (0, r.jsxs)("div", {
      className: D().meter,
      "data-level": n2,
      role: "meter",
      "aria-label": "Memory used",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": a2,
      "aria-valuetext": `${a2}% full`,
      children: [
        (0, r.jsxs)("span", {
          className: D().meterLabel,
          "aria-hidden": "true",
          children: [
            "ok" === n2 ? null : (0, r.jsx)(B.A, { className: D().meterIcon }),
            (0, r.jsxs)("span", {
              className: D().meterNumber,
              children: [(0, r.jsx)(l.PY1.span, { children: d2 }), "%"]
            }),
            " full"
          ]
        }),
        (0, r.jsx)("span", {
          className: D().meterTrack,
          "aria-hidden": "true",
          children: (0, r.jsx)(l.PY1.span, {
            className: D().meterFill,
            style: { scaleX: c2 }
          })
        })
      ]
    });
  }
  function Q({ reduced: e2, onAdd: t2 }) {
    let [a2, n2] = (0, i.useState)(""), [s2, o2] = (0, i.useState)({ kind: "idle" }), l2 = (0, i.useRef)(null), d2 = (0, i.useRef)(0), u2 = (0, i.useId)(), m2 = (0, i.useId)();
    (0, i.useEffect)(() => () => window.clearTimeout(d2.current), []);
    let h2 = "sorting" === s2.kind;
    function p2(e3, t3) {
      window.clearTimeout(d2.current), o2(e3), d2.current = window.setTimeout(() => o2({ kind: "idle" }), t3);
    }
    async function g2(e3) {
      if (e3?.preventDefault(), !h2 && a2.trim() && l2.current) {
        window.clearTimeout(d2.current), o2({ kind: "sorting" });
        try {
          let e4 = await t2(a2, l2.current);
          n2(""), p2({ kind: "added", label: e4 }, 2200);
        } catch (e4) {
          p2(
            {
              kind: "error",
              message: e4 instanceof Error && e4.message ? e4.message : "Couldn't add it. Try again."
            },
            3200
          );
        }
      }
    }
    let f2 = "idle" === s2.kind ? a2.trim() ? "add" : "empty" : s2.kind;
    return (0, r.jsxs)("form", {
      className: D().add,
      onSubmit: g2,
      "data-frame-keep": "",
      "data-busy": h2 || void 0,
      children: [
        (0, r.jsx)(L.A, { className: D().addIcon, "aria-hidden": "true" }),
        (0, r.jsx)("label", {
          className: D().srOnly,
          htmlFor: u2,
          children: "Add memory"
        }),
        (0, r.jsx)("input", {
          id: u2,
          ref: l2,
          className: D().addField,
          placeholder: "Add memory",
          value: a2,
          readOnly: h2,
          autoComplete: "off",
          "aria-describedby": m2,
          maxLength: 240,
          onChange: (e3) => {
            n2(e3.target.value), "error" === s2.kind && o2({ kind: "idle" });
          }
        }),
        (0, r.jsx)("span", {
          id: m2,
          className: D().addSlot,
          "data-error": "error" === s2.kind || void 0,
          children: (0, r.jsx)(J, {
            id: f2,
            reduced: e2,
            align: "end",
            children: "add" === f2 ? (0, r.jsx)(P.$, {
              type: "submit",
              variant: "primary",
              size: "sm",
              children: "Add"
            }) : "sorting" === f2 ? (0, r.jsx)($.n, {
              className: D().addNote,
              children: "Sorting into a group"
            }) : "added" === s2.kind ? (0, r.jsxs)("span", {
              className: D().addNote,
              children: [
                (0, r.jsx)(c.A, { "aria-hidden": "true" }),
                "Added to ",
                s2.label
              ]
            }) : "error" === s2.kind ? (0, r.jsxs)("span", {
              className: D().addNote,
              children: [
                (0, r.jsx)(R.A, { "aria-hidden": "true" }),
                s2.message
              ]
            }) : null
          })
        })
      ]
    });
  }
  var V = a(58081), ee = a(25879), et = a(92218), ea = a(36690);
  let er = { type: "spring", visualDuration: 0.32, bounce: 0 }, ei = {
    hidden: { height: 0, opacity: 0 },
    shown: (e2) => ({
      height: "auto",
      opacity: 1,
      transition: e2 ? { duration: 0 } : { height: er, opacity: { duration: 0.16, ease: Y, delay: 0.04 } }
    }),
    gone: (e2) => ({
      height: 0,
      opacity: 0,
      transition: e2 ? { duration: 0 } : { height: er, opacity: { duration: 0.1, ease: Y } }
    })
  }, en = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.16, ease: Y } },
    gone: { opacity: 0, transition: { duration: 0.1, ease: Y } }
  };
  function es(e2) {
    let { memory: t2, reduced: a2, editing: n2, undo: s2 } = e2, d2 = s2 ? "undo" : n2 ? "edit" : "view", c2 = (0, i.useRef)(null), u2 = (0, i.useRef)(null), m2 = (0, i.useRef)(d2);
    return (0, i.useLayoutEffect)(() => {
      m2.current === d2 || ((u2.current?.contains(document.activeElement) || document.activeElement === document.body) && (c2.current = "edit" === d2 ? "field" : "undo" === d2 ? "undo" : "undo" === m2.current ? "forget" : "edit"), m2.current = d2);
    }, [d2]), (0, i.useEffect)(() => {
      let e3 = c2.current;
      if (!e3) return;
      c2.current = null;
      let t3 = u2.current?.querySelector(`[data-focus="${e3}"]`);
      t3?.focus({ preventScroll: true }), "field" === e3 && t3 instanceof HTMLTextAreaElement && t3.setSelectionRange(t3.value.length, t3.value.length);
    }), (0, r.jsx)(l.PY1.li, {
      ref: u2,
      className: D().rowItem,
      "data-memory-id": t2.id,
      custom: a2,
      variants: ei,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      children: (0, r.jsx)(U, {
        reduced: a2,
        children: (0, r.jsx)("div", {
          className: D().stack,
          children: (0, r.jsx)(o.N, {
            initial: false,
            children: "undo" === d2 && s2 ? (0, r.jsx)(
              l.PY1.div,
              {
                variants: en,
                initial: "hidden",
                animate: "shown",
                exit: "gone",
                children: (0, r.jsx)(ec, {
                  text: t2.text,
                  undo: s2,
                  now: e2.now,
                  reduced: a2,
                  onUndo: e2.onUndo
                })
              },
              "undo"
            ) : "edit" === d2 ? (0, r.jsx)(
              l.PY1.div,
              {
                variants: en,
                initial: "hidden",
                animate: "shown",
                exit: "gone",
                children: (0, r.jsx)(ed, {
                  memory: t2,
                  onSave: e2.onSave,
                  onClose: e2.onCloseEdit
                })
              },
              "edit"
            ) : (0, r.jsx)(
              l.PY1.div,
              {
                variants: en,
                initial: "hidden",
                animate: "shown",
                exit: "gone",
                children: (0, r.jsx)(eo, { ...e2 })
              },
              `view:${t2.text}`
            )
          })
        })
      })
    });
  }
  function eo({
    memory: e2,
    query: t2,
    landing: a2,
    flash: i2,
    onEdit: n2,
    onForget: s2
  }) {
    return (0, r.jsxs)("div", {
      className: D().row,
      "data-landing": a2 || void 0,
      children: [
        i2 ? (0, r.jsx)(
          "span",
          { className: D().flash, "aria-hidden": "true" },
          i2
        ) : null,
        (0, r.jsx)(el, { memory: e2, query: t2 }),
        (0, r.jsxs)("div", {
          className: D().rowActions,
          children: [
            (0, r.jsx)(ea.m, {
              content: "Edit",
              children: (0, r.jsx)("button", {
                type: "button",
                className: D().iconButton,
                "data-focus": "edit",
                "aria-label": `Edit memory: ${e2.text}`,
                onClick: n2,
                children: (0, r.jsx)(V.A, { "aria-hidden": "true" })
              })
            }),
            (0, r.jsx)(ea.m, {
              content: "Forget",
              children: (0, r.jsx)("button", {
                type: "button",
                className: D().iconButton,
                "data-focus": "forget",
                "aria-label": `Forget memory: ${e2.text}`,
                onClick: s2,
                children: (0, r.jsx)(ee.A, { "aria-hidden": "true" })
              })
            })
          ]
        })
      ]
    });
  }
  function el({ memory: e2, query: t2 }) {
    let a2, { source: i2 } = e2;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        e2.person ? (0, r.jsx)(et.e, {
          className: D().portrait,
          name: e2.person.name,
          src: e2.person.src,
          size: "sm"
        }) : null,
        (0, r.jsxs)("div", {
          className: D().rowBody,
          children: [
            (0, r.jsx)("p", {
              className: D().rowText,
              "data-row-text": "",
              children: (0, r.jsx)(G, { text: e2.text, query: t2 })
            }),
            (0, r.jsxs)("p", {
              className: D().rowMeta,
              children: [
                "manual" === i2.kind ? (0, r.jsx)("span", { children: "Added by you" }) : i2.href ? (0, r.jsx)("a", {
                  className: D().sourceLink,
                  href: i2.href,
                  children: "From a chat"
                }) : (0, r.jsx)("span", { children: "From a chat" }),
                (0, r.jsx)("span", { "aria-hidden": "true", children: "\xB7" }),
                (0, r.jsx)("time", {
                  dateTime: i2.date,
                  children: (a2 = i2.date, A.format(/* @__PURE__ */ new Date(`${a2}T12:00:00Z`)))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ed({ memory: e2, onSave: t2, onClose: a2 }) {
    let [n2, s2] = (0, i.useState)(e2.text), [o2, l2] = (0, i.useState)(false), [d2, c2] = (0, i.useState)(""), u2 = (0, i.useRef)(null), m2 = (0, i.useId)(), h2 = (0, i.useId)();
    (0, i.useLayoutEffect)(() => {
      let e3 = u2.current;
      e3 && (e3.style.height = "auto", e3.style.height = `${e3.scrollHeight}px`);
    }, [n2]);
    let p2 = n2.trim().length;
    async function g2(r2) {
      if (r2?.preventDefault(), o2) return;
      let i2 = n2.trim();
      if (!i2) {
        c2("Write something, or use Forget to remove it."), u2.current?.focus();
        return;
      }
      if (p2 > 200) {
        c2("Keep it under 200 characters."), u2.current?.focus();
        return;
      }
      if (i2 === e2.text) return void a2();
      l2(true), c2("");
      try {
        await t2(i2);
      } catch (e3) {
        l2(false), c2(
          e3 instanceof Error && e3.message ? e3.message : "Couldn't save. Try again."
        );
      }
    }
    return (0, r.jsxs)("form", {
      className: D().editor,
      onSubmit: g2,
      children: [
        (0, r.jsx)("label", {
          className: D().srOnly,
          htmlFor: m2,
          children: "Edit memory"
        }),
        (0, r.jsx)("textarea", {
          id: m2,
          ref: u2,
          "data-focus": "field",
          className: D().editorField,
          rows: 1,
          value: n2,
          readOnly: o2,
          "aria-invalid": !!d2 || void 0,
          "aria-describedby": h2,
          onChange: (e3) => {
            s2(e3.target.value), d2 && c2("");
          },
          onKeyDown: function(e3) {
            "Escape" === e3.key ? (e3.preventDefault(), e3.stopPropagation(), o2 || a2()) : "Enter" !== e3.key || e3.shiftKey || e3.nativeEvent.isComposing || (e3.preventDefault(), g2());
          }
        }),
        (0, r.jsxs)("div", {
          className: D().editorFooter,
          children: [
            (0, r.jsx)("p", {
              id: h2,
              className: D().editorHint,
              "data-error": d2 || p2 > 200 ? "" : void 0,
              "aria-live": "polite",
              children: d2 ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(R.A, { "aria-hidden": "true" }), d2]
              }) : p2 > 200 ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(R.A, { "aria-hidden": "true" }),
                  p2,
                  " of ",
                  200,
                  " characters"
                ]
              }) : "Enter to save, Esc to cancel"
            }),
            (0, r.jsxs)("div", {
              className: D().editorActions,
              children: [
                (0, r.jsx)(P.$, {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: a2,
                  disabled: o2,
                  children: "Cancel"
                }),
                (0, r.jsx)(P.$, {
                  type: "submit",
                  variant: "primary",
                  size: "sm",
                  loading: o2,
                  children: "Save"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ec({ text: e2, undo: t2, now: a2, reduced: i2, onUndo: n2 }) {
    let s2 = Math.max(0, Math.ceil((t2.deadline - a2) / 1e3));
    return (0, r.jsxs)("div", {
      className: D().undoBar,
      role: "group",
      "aria-label": "Forgotten memory",
      children: [
        (0, r.jsxs)("p", {
          className: D().undoText,
          children: [
            "Forgot ",
            (0, r.jsx)("q", { className: D().undoQuote, children: e2 })
          ]
        }),
        (0, r.jsxs)("button", {
          type: "button",
          className: K(D().undoButton),
          "data-focus": "undo",
          onClick: n2,
          children: [
            (0, r.jsx)(Z, { total: t2.total, deadline: t2.deadline, reduced: i2 }),
            "Undo",
            (0, r.jsxs)("span", {
              className: D().undoSeconds,
              "aria-label": `${s2} seconds left`,
              children: [s2, "s"]
            })
          ]
        })
      ]
    });
  }
  var eu = a(57700), em = a(65377), eh = a(9005);
  let ep = (0, i.forwardRef)(function({
    groups: e2,
    view: t2,
    onViewChange: a2,
    searchOpen: n2,
    query: s2,
    reduced: o2,
    onOpenSearch: d2,
    onCloseSearch: c2,
    onQueryChange: u2
  }, m2) {
    let h2 = (0, i.useId)(), p2 = [
      { value: "all", label: "All" },
      ...e2.map((e3) => ({ value: e3.id, label: e3.label }))
    ], g2 = Math.max(
      0,
      p2.findIndex((e3) => e3.value === t2)
    ), f2 = (0, i.useRef)(null);
    function y2(e3) {
      let t3 = p2.length - 1, r2 = "ArrowRight" === e3.key ? g2 === t3 ? 0 : g2 + 1 : "ArrowLeft" === e3.key ? 0 === g2 ? t3 : g2 - 1 : "Home" === e3.key ? 0 : "End" === e3.key ? t3 : -1;
      r2 < 0 || (e3.preventDefault(), a2(p2[r2].value), e3.currentTarget.parentElement?.querySelector(`[data-value="${p2[r2].value}"]`)?.focus({ preventScroll: true }));
    }
    return (0, i.useLayoutEffect)(() => {
      let e3 = f2.current;
      if (!e3) return;
      let t3 = () => {
        e3.toggleAttribute("data-fade-start", e3.scrollLeft > 1), e3.toggleAttribute(
          "data-fade-end",
          e3.scrollWidth - e3.clientWidth - e3.scrollLeft > 1
        );
      };
      t3(), e3.addEventListener("scroll", t3, { passive: true });
      let a3 = "u" < typeof ResizeObserver ? null : new ResizeObserver(t3);
      return a3?.observe(e3), () => {
        e3.removeEventListener("scroll", t3), a3?.disconnect();
      };
    }, []), (0, i.useEffect)(() => {
      let e3 = f2.current, t3 = e3?.querySelector('[aria-pressed="true"]');
      if (!e3 || !t3 || e3.scrollWidth <= e3.clientWidth) return;
      let a3 = t3.offsetLeft - 20, r2 = t3.offsetLeft + t3.offsetWidth + 20 - e3.clientWidth, i2 = e3.scrollLeft > a3 ? a3 : e3.scrollLeft < r2 ? r2 : e3.scrollLeft;
      i2 !== e3.scrollLeft && e3.scrollTo({
        left: Math.max(0, i2),
        behavior: o2 ? "auto" : "smooth"
      });
    }, [t2, o2]), (0, r.jsxs)("div", {
      className: D().toolbar,
      "data-search": n2 || void 0,
      children: [
        (0, r.jsx)(eu.o, {
          id: h2,
          children: (0, r.jsx)(l.PY1.div, {
            ref: f2,
            layoutScroll: true,
            className: D().filters,
            role: "group",
            "aria-label": "Filter memories",
            inert: n2 || void 0,
            children: p2.map(
              (e3, i2) => (0, r.jsxs)(
                "button",
                {
                  type: "button",
                  className: D().filter,
                  "data-value": e3.value,
                  "aria-pressed": t2 === e3.value,
                  tabIndex: i2 === g2 ? 0 : -1,
                  onClick: () => a2(e3.value),
                  onKeyDown: y2,
                  children: [
                    t2 === e3.value ? (0, r.jsx)(l.PY1.span, {
                      layoutId: "filter",
                      className: D().filterBg,
                      style: { borderRadius: 999 },
                      transition: o2 ? { duration: 0 } : W,
                      "aria-hidden": "true"
                    }) : null,
                    (0, r.jsx)("span", {
                      className: D().filterLabel,
                      children: e3.label
                    })
                  ]
                },
                e3.value
              )
            )
          })
        }),
        (0, r.jsxs)("div", {
          className: D().search,
          "data-open": n2 || void 0,
          children: [
            (0, r.jsx)("button", {
              type: "button",
              className: D().searchToggle,
              "aria-label": "Search memories",
              "aria-expanded": n2,
              tabIndex: n2 ? -1 : 0,
              onClick: n2 ? () => m2 && "current" in m2 ? m2.current?.focus() : void 0 : d2,
              children: (0, r.jsx)(em.A, { "aria-hidden": "true" })
            }),
            (0, r.jsx)("input", {
              ref: m2,
              type: "search",
              className: D().searchInput,
              placeholder: "Search memories",
              "aria-label": "Search memories",
              value: s2,
              tabIndex: n2 ? 0 : -1,
              autoComplete: "off",
              spellCheck: false,
              onChange: (e3) => u2(e3.target.value),
              onKeyDown: (e3) => {
                "Escape" === e3.key && (e3.preventDefault(), c2());
              },
              onBlur: (e3) => {
                e3.currentTarget.value.trim() || e3.currentTarget.closest(`.${D().search}`)?.contains(e3.relatedTarget) || c2();
              }
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: D().searchClose,
              "aria-label": "Close search",
              tabIndex: n2 ? 0 : -1,
              onClick: c2,
              children: (0, r.jsx)(eh.A, { "aria-hidden": "true" })
            })
          ]
        })
      ]
    });
  }), eg = Math.round(1e3 * q.visualDuration) + 40, ef = (e2) => new Promise((t2) => window.setTimeout(t2, e2)), ey = (e2, t2) => !t2 || e2.text.toLowerCase().includes(t2) || !!e2.person?.name.toLowerCase().includes(t2), e_ = (e2, t2) => {
    let a2 = { ...e2 };
    return delete a2[t2], a2;
  };
  function ex({
    memories: e2,
    captured: t2 = x,
    groups: a2 = f,
    settings: m2,
    capacity: h2 = v,
    assistantName: p2 = "Claude",
    classify: g2,
    onChange: y2,
    onToggle: w2,
    undoSeconds: j2 = 5,
    className: N2
  }) {
    let k2 = (0, n.I)() ?? false, A2 = (0, i.useId)(), L2 = 1e3 * j2, [R2, P2] = (0, i.useState)(() => e2 ?? _), [$2, M2] = (0, i.useState)(e2);
    e2 !== $2 && (M2(e2), P2(e2 ?? _));
    let [I2, B2] = (0, i.useState)(() => ({
      savedMemories: true,
      chatHistory: true,
      ...m2
    })), [z2, F2] = (0, i.useState)("all"), [H2, O2] = (0, i.useState)(false), [W2, Z2] = (0, i.useState)(""), [G2, V2] = (0, i.useState)(null), [ee2, et2] = (0, i.useState)({}), [ea2, er2] = (0, i.useState)(0), [en2, eo2] = (0, i.useState)(null), [ed2, ec2] = (0, i.useState)({}), [eu2, em2] = (0, i.useState)({}), [eh2, ew2] = (0, i.useState)(""), ej = (0, i.useRef)(0), eN = (0, i.useRef)(null), ek = (0, i.useRef)(null), eT = (0, i.useRef)(null), eS = (0, i.useRef)(null), eC = (0, i.useRef)(null), eA = (0, i.useRef)(null), eE = (0, i.useRef)({ view: z2, query: W2 });
    (0, i.useLayoutEffect)(() => {
      eE.current = { view: z2, query: W2 };
    });
    let eL = R2.filter((e3) => !ee2[e3.id]), eR = b(eL) / h2, eP = (e3) => a2.find((t3) => t3.id === e3)?.label ?? e3, e$ = (e3) => ec2((t3) => ({ ...t3, [e3]: ++ej.current })), eM = Object.keys(ee2).length > 0, eI = (0, i.useEffectEvent)(() => {
      let e3 = Date.now();
      er2(e3);
      let t3 = new Set(
        Object.entries(ee2).filter(([, t4]) => t4.deadline <= e3).map(([e4]) => e4)
      );
      if (!t3.size) return;
      let a3 = R2.filter((e4) => t3.has(e4.id)), r2 = R2.filter((e4) => !t3.has(e4.id)), i2 = document.activeElement;
      for (let e4 of (i2 instanceof HTMLElement && "undo" === i2.dataset.focus && eN.current?.contains(i2) && eN.current.querySelector(H2 ? "input[type='search']" : "[aria-pressed='true']")?.focus({ preventScroll: true }), P2(r2), et2(
        (e5) => Object.fromEntries(Object.entries(e5).filter(([e6]) => !t3.has(e6)))
      ), a3))
        y2?.(r2, { type: "forget", memory: e4 });
      a3.length && ew2(
        1 === a3.length ? "Memory forgotten" : `${a3.length} memories forgotten`
      );
    });
    function eB(e3, t3) {
      let a3 = ek.current;
      if (a3) {
        if (eA.current?.stop(), !t3) {
          a3.scrollTop = e3;
          return;
        }
        eA.current = (0, s.i)(a3.scrollTop, e3, {
          ...q,
          onUpdate: (e4) => {
            a3.scrollTop = e4;
          }
        });
      }
    }
    function ez(e3, t3) {
      let { view: a3, query: r2 } = eE.current, i2 = "all" !== a3 && a3 !== e3.group;
      return i2 && F2(e3.group), (r2 || H2) && eW(false), new Promise((a4) => {
        let n2 = () => {
          let r3 = null, i3 = eN.current;
          if (t3 && i3 && !k2) {
            let e4 = i3.getBoundingClientRect(), a5 = t3.getBoundingClientRect();
            r3 = {
              x: a5.left - e4.left - 10,
              y: a5.top - e4.top + a5.height / 2 - 27
            };
          }
          et2((t4) => e_(t4, e3.id)), P2(
            (t4) => t4.some((t5) => t5.id === e3.id) ? t4.map((t5) => t5.id === e3.id ? e3 : t5) : [e3, ...t4]
          ), eo2({ memory: e3, n: ++ej.current, from: r3, to: null }), a4();
        };
        (i2 || r2.trim()) && !k2 ? window.setTimeout(n2, 340) : n2();
      });
    }
    (0, i.useEffect)(() => {
      if (!eM) return;
      let e3 = window.setInterval(eI, 200);
      return () => window.clearInterval(e3);
    }, [eM]), (0, i.useEffect)(() => {
      let e3 = ek.current, t3 = eC.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = () => {
        e3.toggleAttribute("data-fade-top", e3.scrollTop > 1), e3.toggleAttribute(
          "data-fade-bottom",
          e3.scrollTop + e3.clientHeight < e3.scrollHeight - 1
        );
      };
      a3();
      let r2 = new ResizeObserver(a3);
      return r2.observe(e3), r2.observe(t3), e3.addEventListener("scroll", a3, { passive: true }), () => {
        r2.disconnect(), e3.removeEventListener("scroll", a3);
      };
    }, []);
    let eF = (0, i.useEffectEvent)((e3) => {
      eo2((t3) => t3?.n === e3.n ? null : t3), e$(e3.memory.id);
    });
    (0, i.useEffect)(() => {
      if (!en2?.to) return;
      let e3 = window.setTimeout(() => eF(en2), eg);
      return () => window.clearTimeout(e3);
    }, [en2]), (0, i.useLayoutEffect)(() => {
      if (!en2 || en2.to) return;
      let e3 = eN.current, t3 = ek.current, a3 = e3?.querySelector(
        `[data-memory-id="${CSS.escape(en2.memory.id)}"]`
      );
      if (!e3 || !t3 || !a3) {
        let e4 = requestAnimationFrame(() => eF(en2));
        return () => cancelAnimationFrame(e4);
      }
      let r2 = a3.querySelector(`.${D().autoHeightInner}`)?.offsetHeight ?? a3.offsetHeight, i2 = a3.getBoundingClientRect(), n2 = t3.getBoundingClientRect(), s2 = i2.top - n2.top + t3.scrollTop, o2 = t3.scrollTop;
      s2 - 8 < t3.scrollTop ? o2 = s2 - 8 : s2 + r2 + 8 > t3.scrollTop + t3.clientHeight && (o2 = s2 + r2 + 8 - t3.clientHeight);
      let l2 = (o2 = Math.max(0, o2)) - t3.scrollTop;
      if (l2 && eB(o2, !!en2.from), !en2.from) {
        let e4 = requestAnimationFrame(() => eF(en2));
        return () => cancelAnimationFrame(e4);
      }
      let d2 = e3.getBoundingClientRect();
      eo2({
        ...en2,
        to: { x: i2.left - d2.left, y: i2.top - d2.top - l2, w: i2.width }
      });
    }, [en2]);
    let eD = t2?.find((e3) => "gone" !== eu2[e3.memory.id]), eH = !!eD && "saved" === eu2[eD.memory.id];
    async function eO(e3, t3) {
      let a3 = C(e3), r2 = eL.find((e4) => e4.text.toLowerCase() === a3.toLowerCase());
      if (r2) throw Error(`Already in ${eP(r2.group)}`);
      if (b(eL) + a3.length > h2) throw Error("Memory is full");
      let [i2] = await Promise.all([
        g2 ? g2(a3) : T(a3),
        g2 ? null : ef(k2 ? 200 : 650)
      ]), n2 = "people" === i2 ? S(a3) : void 0, s2 = {
        id: `m-${Date.now().toString(36)}`,
        text: a3,
        group: i2,
        source: { kind: "manual", date: E },
        ...n2 ? { person: n2 } : {}
      };
      return await y2?.([s2, ...R2], { type: "add", memory: s2 }), await ez(s2, t3), ew2(
        `Added to ${eP(i2)}. ${g2 ? "" : "In this preview, a keyword guess picked the group."}`
      ), eP(i2);
    }
    async function eY(e3, t3) {
      let a3 = R2.find((t4) => t4.id === e3);
      if (!a3) return;
      let r2 = { ...a3, text: C(t3) };
      y2 ? await y2(
        R2.map((t4) => t4.id === e3 ? r2 : t4),
        { type: "edit", memory: r2, previous: a3.text }
      ) : await ef(380 * !k2), P2((t4) => t4.map((t5) => t5.id === e3 ? r2 : t5)), V2(null), e$(e3), ew2("Memory updated");
    }
    function eq(e3, t3) {
      B2((a3) => ({ ...a3, [e3]: t3 })), w2?.(e3, t3), ew2(
        "savedMemories" === e3 ? t3 ? "Saved memories on" : "Saved memories paused" : t3 ? "Chat history on" : "Chat history off"
      );
    }
    function eW(e3 = true) {
      let t3 = eS.current?.closest(`.${D().search}`)?.contains(document.activeElement);
      O2(false), Z2(""), e3 && t3 && eN.current?.querySelector(`.${D().searchToggle}`)?.focus({ preventScroll: true });
    }
    (0, i.useEffect)(() => {
      H2 && eS.current?.focus({ preventScroll: true });
    }, [H2]);
    let eK = W2.trim().toLowerCase(), eU = eK.length > 0, eJ = a2.map((e3) => ({
      group: e3,
      rows: R2.filter((t3) => t3.group === e3.id && ey(t3, eK))
    })).filter(
      ({ group: e3, rows: t3 }) => eU || "all" === z2 ? t3.length > 0 : z2 === e3.id
    ), eZ = eU || "all" === z2, eG = !I2.savedMemories;
    return (0, r.jsx)("div", {
      className: K(D().root, N2),
      children: (0, r.jsxs)("div", {
        ref: eN,
        className: D().card,
        children: [
          (0, r.jsxs)("header", {
            className: D().header,
            children: [
              (0, r.jsxs)("div", {
                className: D().titleBlock,
                children: [
                  (0, r.jsx)("h2", {
                    className: D().title,
                    children: "Memory"
                  }),
                  (0, r.jsxs)("p", {
                    className: D().subtitle,
                    children: ["What ", p2, " remembers across chats"]
                  })
                ]
              }),
              (0, r.jsx)(X, { share: eR, reduced: k2 })
            ]
          }),
          (0, r.jsxs)("div", {
            className: D().settings,
            children: [
              (0, r.jsx)(ev, {
                id: `${A2}-saved`,
                title: "Reference saved memories",
                on: I2.savedMemories,
                reduced: k2,
                description: I2.savedMemories ? "Uses and adds to the memories below" : "Paused. Nothing new is saved or used",
                onChange: (e3) => eq("savedMemories", e3)
              }),
              (0, r.jsx)(ev, {
                id: `${A2}-history`,
                title: "Reference chat history",
                on: I2.chatHistory,
                reduced: k2,
                description: I2.chatHistory ? "Searches past chats when they help" : "Each chat starts from a blank slate",
                onChange: (e3) => eq("chatHistory", e3)
              })
            ]
          }),
          (0, r.jsxs)("section", {
            className: D().memories,
            "aria-label": "Saved memories",
            "data-frame-keep": "",
            children: [
              (0, r.jsx)(ep, {
                ref: eS,
                groups: a2,
                view: z2,
                onViewChange: function(e3) {
                  e3 !== z2 && (F2(e3), V2(null), ek.current?.scrollTop && eB(0, !k2));
                },
                searchOpen: H2,
                query: W2,
                reduced: k2,
                onOpenSearch: function() {
                  O2(true);
                },
                onCloseSearch: () => eW(),
                onQueryChange: function(e3) {
                  Z2(e3);
                  let t3 = e3.trim().toLowerCase();
                  if (!t3) return void ew2("");
                  let r2 = R2.filter(
                    (e4) => a2.some((t4) => t4.id === e4.group) && ey(e4, t3)
                  ).length;
                  ew2(
                    r2 ? `${r2} ${1 === r2 ? "memory matches" : "memories match"}` : "No memories match"
                  );
                }
              }),
              (0, r.jsx)(U, {
                reduced: k2,
                children: eG ? (0, r.jsxs)("p", {
                  className: D().notice,
                  children: [
                    (0, r.jsx)(d.A, { "aria-hidden": "true" }),
                    p2,
                    " won't use or add to these while saved memories are off."
                  ]
                }) : eD ? (0, r.jsx)("div", {
                  className: D().pillRow,
                  children: (0, r.jsx)("button", {
                    ref: eT,
                    type: "button",
                    className: D().pill,
                    "data-saved": eH || void 0,
                    "aria-disabled": eH || void 0,
                    "aria-label": eH ? `Saved to ${eP(eD.memory.group)}` : `Memory updated. ${eD.note}. File it in ${eP(eD.memory.group)}`,
                    onClick: () => (function(e3) {
                      if (eu2[e3.memory.id]) return;
                      let t3 = {
                        ...e3.memory,
                        source: {
                          kind: "chat",
                          date: E,
                          ...e3.memory.source
                        }
                      }, a3 = [t3, ...R2.filter((e4) => e4.id !== t3.id)];
                      em2((e4) => ({ ...e4, [t3.id]: "saved" })), ew2(`Saved to ${eP(t3.group)}: ${t3.text}`);
                      let r2 = eE.current.query.trim() || "all" !== eE.current.view && eE.current.view !== t3.group ? 340 : 0;
                      ez(t3, eT.current).then(
                        () => y2?.(a3, { type: "capture", memory: t3 })
                      ), window.setTimeout(
                        () => {
                          document.activeElement === eT.current && eT.current?.matches(":focus-visible") && eN.current?.querySelector(
                            `[data-memory-id="${CSS.escape(t3.id)}"] [data-focus="edit"]`
                          )?.focus({ preventScroll: true }), em2((e4) => ({ ...e4, [t3.id]: "gone" }));
                        },
                        (k2 ? 0 : r2 + eg) + 1400
                      );
                    })(eD),
                    children: (0, r.jsxs)("span", {
                      className: D().pillStack,
                      children: [
                        (0, r.jsx)("span", {
                          className: D().pillSizer,
                          "aria-hidden": "true",
                          children: (0, r.jsx)(eb, { note: eD.note })
                        }),
                        (0, r.jsx)(J, {
                          id: eH ? "saved" : "new",
                          reduced: k2,
                          children: eH ? (0, r.jsxs)("span", {
                            className: D().pillLabel,
                            children: [
                              (0, r.jsx)(c.A, {
                                "aria-hidden": "true"
                              }),
                              (0, r.jsxs)("span", {
                                className: D().pillTitle,
                                children: [
                                  "Saved to ",
                                  eP(eD.memory.group)
                                ]
                              })
                            ]
                          }) : (0, r.jsx)(eb, { note: eD.note })
                        })
                      ]
                    })
                  })
                }) : null
              }),
              (0, r.jsx)("div", {
                ref: ek,
                className: D().list,
                "data-paused": eG || void 0,
                onPointerDown: () => eA.current?.stop(),
                onWheel: () => eA.current?.stop(),
                children: (0, r.jsx)("div", {
                  ref: eC,
                  children: (0, r.jsxs)(o.N, {
                    initial: false,
                    children: [
                      eJ.map(({ group: e3, rows: t3 }) => {
                        let a3 = t3.filter((e4) => !ee2[e4.id]).length;
                        return (0, r.jsxs)(
                          l.PY1.div,
                          {
                            role: "group",
                            "aria-label": e3.label,
                            className: D().group,
                            custom: k2,
                            variants: ei,
                            initial: "hidden",
                            animate: "shown",
                            exit: "gone",
                            children: [
                              (0, r.jsx)(o.N, {
                                initial: false,
                                children: eZ ? (0, r.jsx)(
                                  l.PY1.div,
                                  {
                                    className: D().groupHeadingSlot,
                                    custom: k2,
                                    variants: ei,
                                    initial: "hidden",
                                    animate: "shown",
                                    exit: "gone",
                                    children: (0, r.jsxs)("h3", {
                                      className: D().groupHeading,
                                      children: [
                                        e3.label,
                                        (0, r.jsx)("span", {
                                          className: D().groupCount,
                                          children: a3
                                        })
                                      ]
                                    })
                                  },
                                  "heading"
                                ) : null
                              }),
                              (0, r.jsx)("ul", {
                                className: D().rows,
                                children: (0, r.jsx)(o.N, {
                                  initial: false,
                                  children: t3.map(
                                    (e4) => (0, r.jsx)(
                                      es,
                                      {
                                        memory: e4,
                                        query: W2,
                                        reduced: k2,
                                        editing: G2 === e4.id,
                                        undo: ee2[e4.id],
                                        now: ea2,
                                        landing: en2?.memory.id === e4.id,
                                        flash: ed2[e4.id],
                                        onEdit: () => V2(e4.id),
                                        onCloseEdit: () => V2((t4) => t4 === e4.id ? null : t4),
                                        onSave: (t4) => eY(e4.id, t4),
                                        onForget: () => {
                                          var t4;
                                          let a4;
                                          return t4 = e4, V2((e5) => e5 === t4.id ? null : e5), void (er2(a4 = Date.now()), et2((e5) => ({
                                            ...e5,
                                            [t4.id]: {
                                              deadline: a4 + L2,
                                              total: L2
                                            }
                                          })), ew2(
                                            `Forgot "${t4.text}". Undo within ${j2} seconds.`
                                          ));
                                        },
                                        onUndo: () => {
                                          var t4;
                                          return t4 = e4.id, void (et2((e5) => e_(e5, t4)), ew2("Memory restored"));
                                        }
                                      },
                                      e4.id
                                    )
                                  )
                                })
                              }),
                              (0, r.jsx)(o.N, {
                                initial: false,
                                children: t3.length || eU ? null : (0, r.jsx)(
                                  l.PY1.div,
                                  {
                                    className: D().slot,
                                    custom: k2,
                                    variants: ei,
                                    initial: "hidden",
                                    animate: "shown",
                                    exit: "gone",
                                    children: (0, r.jsx)("p", {
                                      className: D().empty,
                                      children: e3.empty
                                    })
                                  },
                                  "empty"
                                )
                              })
                            ]
                          },
                          e3.id
                        );
                      }),
                      eU && !eJ.length ? (0, r.jsx)(
                        l.PY1.div,
                        {
                          className: D().slot,
                          custom: k2,
                          variants: ei,
                          initial: "hidden",
                          animate: "shown",
                          exit: "gone",
                          children: (0, r.jsxs)("div", {
                            className: D().noResults,
                            children: [
                              (0, r.jsx)(u.A, { "aria-hidden": "true" }),
                              (0, r.jsxs)("p", {
                                className: D().noResultsTitle,
                                children: [
                                  "No memories match \u201C",
                                  W2.trim(),
                                  "\u201D"
                                ]
                              }),
                              (0, r.jsx)("button", {
                                type: "button",
                                className: D().textButton,
                                onClick: () => {
                                  Z2(""), eS.current?.focus({
                                    preventScroll: true
                                  });
                                },
                                children: "Clear search"
                              })
                            ]
                          })
                        },
                        "no-results"
                      ) : null,
                      eU || "all" !== z2 || eJ.length ? null : (0, r.jsx)(
                        l.PY1.div,
                        {
                          className: D().slot,
                          custom: k2,
                          variants: ei,
                          initial: "hidden",
                          animate: "shown",
                          exit: "gone",
                          children: (0, r.jsxs)("p", {
                            className: D().empty,
                            children: [
                              "Nothing saved yet. Add a memory below, or ",
                              p2,
                              " will note things as you chat."
                            ]
                          })
                        },
                        "nothing"
                      )
                    ]
                  })
                })
              })
            ]
          }),
          (0, r.jsx)(Q, { reduced: k2, onAdd: eO }),
          en2?.from && en2.to ? (0, r.jsxs)(
            l.PY1.div,
            {
              className: K(D().row, D().flyer),
              "aria-hidden": "true",
              "data-frame-keep": "",
              style: { width: en2.to.w },
              initial: { x: en2.from.x, y: en2.from.y, opacity: 0 },
              animate: { x: en2.to.x, y: en2.to.y, opacity: 1 },
              transition: {
                x: q,
                y: q,
                opacity: { duration: 0.12, ease: Y }
              },
              children: [
                (0, r.jsx)(el, { memory: en2.memory, query: "" }),
                (0, r.jsx)("span", { className: D().rowActions })
              ]
            },
            en2.n
          ) : null,
          (0, r.jsx)("p", {
            className: D().srOnly,
            role: "status",
            "aria-live": "polite",
            children: eh2
          })
        ]
      })
    });
  }
  function eb({ note: e2 }) {
    return (0, r.jsxs)("span", {
      className: D().pillLabel,
      children: [
        (0, r.jsx)(m.A, { "aria-hidden": "true" }),
        (0, r.jsx)("span", {
          className: D().pillTitle,
          children: "Memory updated"
        }),
        (0, r.jsx)("span", { className: D().pillNote, children: e2 }),
        (0, r.jsx)(h.A, { className: D().pillArrow, "aria-hidden": "true" })
      ]
    });
  }
  function ev({
    id: e2,
    title: t2,
    description: a2,
    on: i2,
    reduced: n2,
    onChange: s2
  }) {
    return (0, r.jsxs)("div", {
      className: D().setting,
      children: [
        (0, r.jsxs)("div", {
          className: D().settingText,
          children: [
            (0, r.jsx)("label", {
              className: D().settingLabel,
              htmlFor: e2,
              id: `${e2}-label`,
              children: t2
            }),
            (0, r.jsx)("p", {
              className: D().settingDescription,
              id: `${e2}-description`,
              children: (0, r.jsx)(J, { id: a2, reduced: n2, children: a2 })
            })
          ]
        }),
        (0, r.jsx)(p.d, {
          id: e2,
          checked: i2,
          onCheckedChange: s2,
          "aria-labelledby": `${e2}-label`,
          "aria-describedby": `${e2}-description`
        })
      ]
    });
  }
  let ew = ex;
};

__m(__module,__exports,__require);
});
A.reg(37058, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "search-x",
    size: 24,
    node: [
      ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
      ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(58081, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "pen-line",
    size: 24,
    node: [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ]
    ],
    aliases: ["edit-3"]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(65360, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => i });
  var n = r(51811);
  let a = {
    name: "circle-pause",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
      ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
    ],
    aliases: ["pause-circle"]
  };
  a.node;
  let i = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(71516, ".root{container-type:inline-size;display:grid;width:100%;box-sizing:border-box;justify-items:center;align-content:start;padding:clamp(16px,5vw,48px) 16px;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.card{--inset:20px;--row-x:12px;--row-radius:12px;--tint:color-mix(in oklab,var(--accent) 7%,transparent);position:relative;width:100%;max-width:640px;min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n@container (max-width: 440px){.card{--inset:16px}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.autoHeight{position:relative}\n.autoHeight[data-moving]{overflow:hidden}\n.autoHeightInner{display:flow-root}\n.fade{display:grid;min-width:0}\n.fade[data-align=end]{justify-items:end}\n.fadeItem{grid-area:1/1;min-width:0}\n.stack{display:grid}\n.stack>*{grid-area:1/1;min-width:0}\n.header{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:var(--inset) var(--inset) 8px}\n.titleBlock{min-width:0}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:24px;letter-spacing:-.011em}\n.subtitle{margin:2px 0 0;color:var(--text-secondary);line-height:20px}\n.meter{display:grid;flex:none;justify-items:end;gap:7px;padding-top:4px}\n.meter[data-level=high] .meterLabel,.meter[data-level=high] .meterNumber{color:var(--warning)}\n.meter[data-level=high] .meterFill{background:var(--warning)}\n.meter[data-level=full] .meterLabel,.meter[data-level=full] .meterNumber{color:var(--danger)}\n.meter[data-level=full] .meterFill{background:var(--danger)}\n.meterLabel{display:inline-flex;align-items:center;gap:4px;color:var(--text-secondary);font-size:var(--text-xs);line-height:16px;white-space:nowrap}\n.meterNumber{display:inline-block;min-width:4ch;color:var(--foreground);font-variant-numeric:tabular-nums;text-align:right}\n.meterIcon{width:13px;height:13px}\n.meterTrack{position:relative;display:block;width:96px;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.meterFill{position:absolute;inset:0;background:var(--accent);transform-origin:left center}\n.settings{padding:0 var(--inset) 6px}\n.setting{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 0}\n.setting+.setting{border-top:1px solid var(--border-subtle)}\n.settingText{min-width:0}\n.settingLabel{display:block;color:var(--foreground);line-height:20px;cursor:pointer}\n.settingDescription{margin:1px 0 0;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}\n.memories{border-top:1px solid var(--border)}\n.toolbar{position:relative;display:flex;align-items:center;height:52px;padding:0 calc(var(--inset) + 40px) 0 calc(var(--inset) - var(--row-x))}\n.toolbar[data-search] .filters{opacity:0}\n.filters{display:flex;min-width:0;gap:2px;overflow-x:auto;scrollbar-width:none;transition:opacity var(--duration-fast) var(--ease-standard)}\n.filters::-webkit-scrollbar{display:none}\n@media (prefers-reduced-motion:reduce){.filters,.list,.rowActions,.rowBody,.rowMeta,.row,.searchClose,.searchInput,.search{transition:none}\n.filters{--fade-start:0px;--fade-end:0px;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 var(--fade-start),#000 calc(100% - var(--fade-end)),transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 var(--fade-start),#000 calc(100% - var(--fade-end)),transparent 100%)}\n.filters[data-fade-start]{--fade-start:20px}\n.filters[data-fade-end]{--fade-end:28px}\n.filter{--focus-outline-offset:-2px;position:relative;flex:none;height:32px;padding:0 var(--row-x);border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.filter[aria-pressed=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.filter:hover{color:var(--foreground)}\n.filterBg{position:absolute;inset:0;z-index:0;background:var(--surface-muted)}\n.filterLabel{position:relative;z-index:1;white-space:nowrap}\n.search{position:absolute;top:10px;right:calc(var(--inset) - 8px);display:flex;align-items:center;width:32px;height:32px;overflow:hidden;border:1px solid transparent;border-radius:var(--radius-pill);transition:width var(--duration-standard) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n.search[data-open]{width:calc(100% - 2 * var(--inset) + 16px);border-color:var(--border)}\n.search[data-open]:focus-within{border-color:var(--border-strong)}\n.search[data-open] .searchToggle{cursor:text}\n.search[data-open] .searchClose,.search[data-open] .searchInput{visibility:visible;opacity:1;transition:opacity var(--duration-fast) var(--ease-standard) 60ms,visibility 0s}\n.searchClose:hover,.search:not([data-open]) .searchToggle:hover{color:var(--foreground);background:var(--surface-muted)}\n.searchClose,.searchToggle{--focus-outline-offset:-2px;display:grid;flex:none;width:30px;height:30px;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.searchClose svg,.searchToggle svg{width:16px;height:16px}\n.searchClose{visibility:hidden;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard),visibility 0s linear var(--duration-standard)}\n.searchInput{flex:1;min-width:0;height:100%;padding:0 2px;border:0;background:transparent;color:var(--foreground);font:inherit;visibility:hidden;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard),visibility 0s linear var(--duration-standard)}\n.searchInput::placeholder{color:var(--text-muted)}\n.searchInput::-webkit-search-cancel-button{display:none}\n.pillRow{padding:0 var(--inset) 10px calc(var(--inset) - 4px)}\n.pill{display:inline-flex;max-width:100%;height:34px;align-items:center;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.pill[data-saved]{cursor:default}\n.pill[data-saved] .pillLabel svg{color:var(--success)}\n@media (hover:hover) and (pointer:fine){.pill:not([data-saved]):hover{border-color:var(--border-strong);background:var(--surface-muted)}\n.pillStack{display:grid;min-width:0}\n.pillStack>*{grid-area:1/1;min-width:0}\n.pillSizer{visibility:hidden}\n.pillLabel{display:flex;min-width:0;align-items:center;gap:7px;white-space:nowrap}\n.pillLabel svg{flex:none;width:15px;height:15px;color:var(--text-secondary)}\n.pillLabel .pillArrow{color:var(--text-muted)}\n.pillTitle{flex:none;font-weight:500}\n.pillNote{min-width:0;overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis}\n.notice{display:flex;align-items:flex-start;gap:8px;margin:0;padding:0 var(--inset) 12px;color:var(--text-secondary)}\n.notice svg{flex:none;width:16px;height:16px;margin-top:2px;color:var(--text-muted)}\n.list{position:relative;max-height:380px;overflow-y:auto;overscroll-behavior:contain;padding:0 calc(var(--inset) - var(--row-x)) 10px;scrollbar-width:thin;transition:opacity var(--duration-standard) var(--ease-standard)}\n.list[data-paused]{opacity:.5}\n.list{--fade-top:0px;--fade-bottom:0px;-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 var(--fade-top),#000 calc(100% - var(--fade-bottom)),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 var(--fade-top),#000 calc(100% - var(--fade-bottom)),transparent 100%)}\n.list[data-fade-top]{--fade-top:20px}\n.list[data-fade-bottom]{--fade-bottom:36px}\n.groupHeadingSlot,.group,.rowItem,.slot{overflow:hidden}\n.group+.group .groupHeading{padding-top:14px}\n.groupHeading{display:flex;align-items:baseline;gap:6px;margin:0;padding:8px var(--row-x) 4px;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;line-height:16px}\n.groupCount{color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}\n.rows{margin:0;padding:0;list-style:none}\n.row{position:relative;display:flex;align-items:flex-start;gap:10px;padding:8px 8px 8px var(--row-x);border-radius:var(--row-radius);isolation:isolate;transition:background-color var(--duration-fast) var(--ease-standard)}\n.row .portrait{flex:none;width:22px;height:22px;font-size:9px}\n.row[data-landing] .portrait,.row[data-landing] .rowBody{opacity:0;transition:none}\n.row:focus-within{background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}\n.row:focus-within .rowActions,.row:focus-within .rowMeta{opacity:1}\n@media (hover:hover) and (pointer:fine){.row:hover{background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}\n.row:hover .rowActions,.row:hover .rowMeta{opacity:1}\n.rowBody{flex:1;min-width:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.rowText{margin:0;color:var(--foreground);line-height:22px;text-wrap:pretty}\n.rowMeta{display:flex;gap:5px;margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;white-space:nowrap;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n@media (hover:none){.rowActions,.rowMeta{opacity:1}\n.flyer .rowMeta{opacity:0}\n.sourceLink{color:inherit;text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:2px}\n.rowActions{display:flex;flex:none;width:58px;gap:2px;margin-top:-3px;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.iconButton{display:grid;width:28px;height:28px;place-items:center;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-muted);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.iconButton svg{width:15px;height:15px}\n.iconButton:hover{color:var(--foreground);background:color-mix(in oklab,var(--foreground) 7%,transparent)}\n.match{border-radius:3px;background:color-mix(in oklab,var(--accent) 14%,transparent);color:inherit}\n.flash{position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--tint);pointer-events:none;animation:flash 1.6s var(--ease-standard) forwards}\n.flyer{position:absolute;top:0;left:0;z-index:3;background:color-mix(in oklab,var(--accent) 7%,var(--surface));pointer-events:none;will-change:transform}\n.editor{display:grid;gap:8px;padding:1px 8px 10px calc(var(--row-x) - 11px)}\n.editorField{display:block;width:100%;min-height:38px;margin:0;padding:7px 10px;overflow:hidden;resize:none;border:1px solid var(--border-strong);border-radius:10px;background:var(--surface);color:var(--foreground);font:inherit;line-height:22px;transition:border-color var(--duration-fast) var(--ease-standard)}\n.editorField:focus{border-color:var(--accent)}\n.editorField[aria-invalid=true]{border-color:var(--danger)}\n.editorFooter{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;padding-left:11px}\n.editorHint{display:flex;min-width:0;align-items:center;gap:6px;margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}\n.editorHint[data-error]{color:var(--danger)}\n.editorHint svg{flex:none;width:14px;height:14px}\n.editorActions{display:flex;gap:6px;margin-left:auto}\n.undoBar{display:flex;min-height:46px;align-items:center;justify-content:space-between;gap:12px;padding:6px 6px 6px var(--row-x)}\n.undoText{min-width:0;margin:0;overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}\n.undoQuote{color:var(--text-muted)}\n.undoButton{display:inline-flex;flex:none;height:30px;align-items:center;gap:6px;padding:0 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.undoButton:hover{border-color:var(--border-strong);background:var(--surface-muted)}\n.undoSeconds{min-width:2.5ch;color:var(--text-muted);font-variant-numeric:tabular-nums;text-align:right}\n.ring{width:14px;height:14px;transform:rotate(-90deg)}\n.ringTrack{fill:none;stroke:var(--border);stroke-width:2}\n.ringFill{fill:none;stroke:var(--text-secondary);stroke-width:2;stroke-dasharray:1;stroke-dashoffset:0;animation-name:drain;animation-timing-function:linear;animation-fill-mode:forwards}\n.ringFill[data-static]{animation:none}\n.ringFill{animation:none}\n.empty{margin:0;padding:10px var(--row-x) 12px;color:var(--text-muted)}\n.noResults{display:grid;justify-items:center;gap:6px;padding:28px 16px 22px;color:var(--text-secondary);text-align:center}\n.noResults svg{width:20px;height:20px;color:var(--text-muted)}\n.noResultsTitle{margin:0;color:var(--foreground)}\n.textButton{padding:4px 6px;border:0;border-radius:6px;background:none;color:var(--text-secondary);font:inherit;text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:3px;cursor:pointer}\n@media (hover:hover) and (pointer:fine){.textButton:hover{color:var(--foreground)}\n.add{display:flex;min-height:56px;align-items:center;gap:10px;padding:8px calc(var(--inset) - 8px) 8px var(--inset);border-top:1px solid var(--border);border-radius:0 0 calc(var(--radius-panel) - 1px) calc(var(--radius-panel) - 1px);transition:background-color var(--duration-fast) var(--ease-standard)}\n.add:focus-within{background:color-mix(in oklab,var(--surface-muted) 55%,transparent)}\n.add:focus-within .addIcon{color:var(--foreground)}\n.add[data-busy] .addField{color:var(--text-secondary)}\n.addIcon{flex:none;width:16px;height:16px;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.addField{flex:1;min-width:0;height:36px;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit}\n.addField::placeholder{color:var(--text-muted)}\n.addSlot{display:flex;flex:none;max-width:62%;justify-content:flex-end}\n.addSlot:not([data-error]) .addNote svg{color:var(--success)}\n.addSlot[data-error] .addNote{color:var(--danger)}\n.addNote{display:inline-flex;align-items:center;gap:6px;padding-right:6px;color:var(--text-secondary);white-space:nowrap}\n.addNote svg{flex:none;width:15px;height:15px}", {"root":"root","card":"card","srOnly":"srOnly","autoHeight":"autoHeight","autoHeightInner":"autoHeightInner","fade":"fade","fadeItem":"fadeItem","stack":"stack","header":"header","titleBlock":"titleBlock","title":"title","subtitle":"subtitle","meter":"meter","meterLabel":"meterLabel","meterNumber":"meterNumber","meterFill":"meterFill","meterIcon":"meterIcon","meterTrack":"meterTrack","settings":"settings","setting":"setting","settingText":"settingText","settingLabel":"settingLabel","settingDescription":"settingDescription","memories":"memories","toolbar":"toolbar","filters":"filters","list":"list","rowActions":"rowActions","rowBody":"rowBody","rowMeta":"rowMeta","row":"row","searchClose":"searchClose","searchInput":"searchInput","search":"search","filter":"filter","filterBg":"filterBg","filterLabel":"filterLabel","searchToggle":"searchToggle","pillRow":"pillRow","pill":"pill","pillLabel":"pillLabel","pillStack":"pillStack","pillSizer":"pillSizer","pillArrow":"pillArrow","pillTitle":"pillTitle","pillNote":"pillNote","notice":"notice","groupHeadingSlot":"groupHeadingSlot","group":"group","rowItem":"rowItem","slot":"slot","groupHeading":"groupHeading","groupCount":"groupCount","rows":"rows","portrait":"portrait","rowText":"rowText","flyer":"flyer","sourceLink":"sourceLink","iconButton":"iconButton","match":"match","flash":"flash","editor":"editor","editorField":"editorField","editorFooter":"editorFooter","editorHint":"editorHint","editorActions":"editorActions","undoBar":"undoBar","undoText":"undoText","undoQuote":"undoQuote","undoButton":"undoButton","undoSeconds":"undoSeconds","ring":"ring","ringTrack":"ringTrack","ringFill":"ringFill","empty":"empty","noResults":"noResults","noResultsTitle":"noResultsTitle","textButton":"textButton","add":"add","addIcon":"addIcon","addField":"addField","addSlot":"addSlot","addNote":"addNote"});
A.cssFor("agent-memory", [71516]);
A.item("agent-memory", {entry:29316, export:"AgentMemory", kind:"block", tier:"pro", unresolved:[]});
})();