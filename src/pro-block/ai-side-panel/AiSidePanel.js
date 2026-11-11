function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { AiSidePanel: () => Q, default: () => V });
  var n = a(95155), i = a(12115), s = a(18310), r = a(80642), l = a(25354), o = a(58081), d = a(64577), c = a(9005), u = a(92298), p = a(51811);
  let h = {
    name: "panel-right-close",
    size: 24,
    node: [
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
      ],
      ["path", { d: "M15 3v18", key: "14nvp0" }],
      ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
    ]
  };
  h.node;
  let m = (0, p.A)(h);
  var f = a(36483);
  let x = {
    name: "square-dashed-text",
    size: 24,
    node: [
      ["path", { d: "M14 21h1", key: "v9vybs" }],
      ["path", { d: "M14 3h1", key: "1ec4yj" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
      ["path", { d: "M21 14v1", key: "169vum" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
      ["path", { d: "M21 9v1", key: "mxsmne" }],
      ["path", { d: "M3 14v1", key: "vnatye" }],
      ["path", { d: "M3 9v1", key: "1r0deq" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
      ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
      ["path", { d: "M7 12h10", key: "b7w52i" }],
      ["path", { d: "M7 16h6", key: "1vyc9m" }],
      ["path", { d: "M7 8h8", key: "1jbsf9" }],
      ["path", { d: "M9 21h1", key: "15o7lz" }],
      ["path", { d: "M9 3h1", key: "1yesri" }]
    ],
    aliases: ["text-selection", "text-select"]
  };
  x.node;
  let g = (0, p.A)(x);
  var _ = a(35484), b = a(40852), y = a(38158), j = a(51288), v = a(52898), k = a(36690);
  function w({ title: e2 = "Claude", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var N = a(92171), T = a(33072), S = a.n(T);
  let A = [0.22, 1, 0.36, 1], C = { type: "spring", visualDuration: 0.3, bounce: 0 };
  function $({ contentKey: e2, reduced: t2, children: a2 }) {
    let s2 = (0, i.useRef)(null), r2 = (0, i.useRef)(null), l2 = (0, i.useRef)(0), o2 = (0, i.useRef)(e2), d2 = (0, i.useRef)(null);
    return (0, i.useEffect)(() => {
      let e3 = r2.current;
      if (!e3) return;
      l2.current = e3.offsetHeight;
      let t3 = new ResizeObserver(() => {
        l2.current = e3.offsetHeight;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.useLayoutEffect)(() => {
      if (o2.current === e2) return;
      o2.current = e2;
      let a3 = s2.current, n2 = r2.current;
      if (!a3 || !n2) return;
      let i2 = d2.current ? a3.getBoundingClientRect().height : l2.current + 2 * parseFloat(getComputedStyle(a3).paddingTop);
      d2.current?.stop();
      let c2 = n2.offsetHeight + 2 * parseFloat(getComputedStyle(a3).paddingTop);
      if (t2 || !i2 || 1 > Math.abs(i2 - c2)) {
        a3.style.height = "", d2.current = null;
        return;
      }
      let u2 = (0, N.i)(a3, { height: [`${i2}px`, `${c2}px`] }, C);
      d2.current = u2, u2.then(() => {
        d2.current === u2 && (a3.style.height = "", d2.current = null);
      });
    }, [e2, t2]), (0, n.jsx)("div", {
      ref: s2,
      className: S().blockBox,
      children: (0, n.jsx)("div", {
        ref: r2,
        className: S().blockInner,
        children: a2
      })
    });
  }
  function M({ block: e2 }) {
    return "heading" === e2.kind ? (0, n.jsx)("h2", { className: S().docHeading, children: e2.text }) : "paragraph" === e2.kind ? (0, n.jsx)("p", { className: S().docText, children: e2.text }) : (0, n.jsxs)("table", {
      className: S().docTable,
      "aria-label": e2.label,
      children: [
        (0, n.jsx)("thead", {
          children: (0, n.jsx)("tr", {
            children: e2.columns.map(
              (e3, t2) => (0, n.jsx)(
                "th",
                {
                  scope: "col",
                  "data-numeric": t2 > 1 || void 0,
                  children: e3
                },
                e3
              )
            )
          })
        }),
        (0, n.jsx)("tbody", {
          children: e2.rows.map(
            (e3) => (0, n.jsx)(
              "tr",
              {
                children: e3.map(
                  (e4, t2) => 0 === t2 ? (0, n.jsx)("th", { scope: "row", children: e4 }, t2) : (0, n.jsx)(
                    "td",
                    { "data-numeric": t2 > 1 || void 0, children: e4 },
                    t2
                  )
                )
              },
              e3[0]
            )
          )
        })
      ]
    });
  }
  function R({ block: e2, flash: t2, inContext: a2, reduced: i2 }) {
    let s2 = JSON.stringify(e2);
    return (0, n.jsx)("div", {
      className: S().block,
      "data-block": e2.id,
      "data-kind": e2.kind,
      "data-context": a2 || void 0,
      children: (0, n.jsxs)($, {
        contentKey: s2,
        reduced: i2,
        children: [
          t2 ? (0, n.jsx)(
            "span",
            { className: S().sweep, "aria-hidden": "true" },
            t2
          ) : null,
          (0, n.jsx)(r.N, {
            initial: false,
            mode: "popLayout",
            children: (0, n.jsx)(
              l.PY1.div,
              {
                className: S().blockBody,
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: {
                    duration: 0.18 * !i2,
                    delay: 0.08 * !i2,
                    ease: A
                  }
                },
                exit: { opacity: 0, transition: { duration: 0.1 * !i2 } },
                children: (0, n.jsx)(M, { block: e2 })
              },
              s2
            )
          })
        ]
      })
    });
  }
  function E({
    page: e2,
    flash: t2,
    contextBlockId: a2,
    reduced: s2,
    onAskSelection: o2
  }) {
    let d2 = (0, i.useRef)(null), [c2, u2] = (0, i.useState)(null), p2 = (0, i.useCallback)(() => {
      let t3 = d2.current, a3 = window.getSelection();
      if (!t3 || !a3 || !a3.rangeCount || a3.isCollapsed) return void u2(null);
      let n2 = a3.getRangeAt(0);
      if (!t3.contains(n2.commonAncestorContainer)) return void u2(null);
      let i2 = a3.toString().replace(/\s+/g, " ").trim();
      if (i2.length < 2) return void u2(null);
      let s3 = 1 === n2.startContainer.nodeType ? n2.startContainer : n2.startContainer.parentElement, r2 = s3?.closest("[data-block]")?.dataset.block, l2 = e2.blocks.find((e3) => e3.id === r2), o3 = l2 ? "heading" === l2.kind ? l2.text : l2.label : "Title", c3 = n2.getClientRects(), p3 = c3[c3.length - 1] ?? n2.getBoundingClientRect(), h2 = t3.getBoundingClientRect(), m2 = Math.max(0, Math.min(p3.right - h2.left - 24, h2.width - 168));
      u2((e3) => ({
        selection: {
          blockId: l2?.id ?? "title",
          label: o3,
          text: i2.slice(0, 400)
        },
        x: m2,
        y: p3.bottom - h2.top + 8,
        n: (e3?.n ?? 0) + 1
      }));
    }, [e2]);
    return (0, i.useEffect)(() => {
      let e3 = () => {
        let e4 = window.getSelection();
        (!e4 || e4.isCollapsed) && u2(null);
      };
      return document.addEventListener("selectionchange", e3), () => document.removeEventListener("selectionchange", e3);
    }, []), (0, n.jsxs)("article", {
      ref: d2,
      className: S().doc,
      onPointerUp: () => requestAnimationFrame(p2),
      onKeyUp: (e3) => {
        e3.shiftKey && p2();
      },
      children: [
        (0, n.jsxs)("header", {
          className: S().docHead,
          children: [
            (0, n.jsx)("h1", { className: S().docTitle, children: e2.title }),
            e2.meta ? (0, n.jsx)("p", { className: S().docMeta, children: e2.meta }) : null
          ]
        }),
        e2.blocks.map(
          (e3) => (0, n.jsx)(
            R,
            {
              block: e3,
              flash: t2?.blockId === e3.id ? t2.n : 0,
              inContext: a2 === e3.id,
              reduced: s2
            },
            e3.id
          )
        ),
        (0, n.jsx)(r.N, {
          children: c2 ? (0, n.jsxs)(
            l.PY1.button,
            {
              type: "button",
              className: S().askSelection,
              style: { left: c2.x, top: c2.y },
              initial: { opacity: 0, y: 3 * !s2 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.15, ease: A }
              },
              exit: { opacity: 0, transition: { duration: 0.1 } },
              onPointerDown: (e3) => e3.preventDefault(),
              onClick: () => {
                o2(c2.selection), window.getSelection()?.removeAllRanges(), u2(null);
              },
              children: [
                (0, n.jsx)(w, {
                  className: S().mark,
                  "aria-hidden": "true",
                  title: ""
                }),
                " Ask about selection"
              ]
            },
            c2.n
          ) : null
        })
      ]
    });
  }
  let I = (0, i.memo)(function({
    text: e2,
    final: t2,
    frozen: a2 = false,
    onDone: s2
  }) {
    let [r2, l2] = (0, i.useState)([]), o2 = (0, i.useRef)(0), d2 = (0, i.useRef)({ text: e2, final: t2, onDone: s2 });
    return (0, i.useEffect)(() => {
      d2.current = { text: e2, final: t2, onDone: s2 };
    }, [e2, t2, s2]), (0, i.useEffect)(() => {
      if (a2) return;
      let e3 = 0, t3 = 0, n2 = 0, i2 = false, s3 = (a3) => {
        let r3 = d2.current;
        if (t3 || (t3 = a3), a3 - t3 >= 34) {
          let e4 = Math.min(100, a3 - t3);
          t3 = a3;
          let i3 = r3.text.length - o2.current;
          if (i3 > 0) {
            n2 += Math.max(560, i3 / 1.1) * e4 / 1e3;
            let t4 = (function(e5, t5, a4, n3) {
              let i4 = Math.min(e5.length, t5 + a4);
              for (; i4 < e5.length && !/\s/.test(e5[i4]); ) i4++;
              if (i4 < e5.length || n3) return i4;
              let s4 = e5.slice(t5).search(/\s\S*$/);
              return s4 > 0 ? t5 + s4 : t5;
            })(r3.text, o2.current, Math.max(1, Math.round(n2)), r3.final);
            t4 > o2.current && (n2 = Math.max(0, n2 - (t4 - o2.current)), o2.current = t4, l2((e5) => [...e5, t4]));
          }
        }
        if (r3.final && o2.current >= r3.text.length) {
          i2 || (i2 = true, r3.onDone?.());
          return;
        }
        e3 = requestAnimationFrame(s3);
      };
      return e3 = requestAnimationFrame(s3), () => cancelAnimationFrame(e3);
    }, [a2]), (0, n.jsx)(n.Fragment, {
      children: r2.map((t3, a3) => {
        let i2 = a3 ? r2[a3 - 1] : 0;
        return (0, n.jsx)(
          "span",
          { className: S().chunk, children: e2.slice(i2, t3) },
          i2
        );
      })
    });
  }), B = (e2) => "heading" === e2.kind ? e2.text : e2.label, P = (e2, t2) => e2.blocks.find((e3) => e3.id === t2), z = (e2) => e2.trim().split(/\s+/).filter(Boolean).length, L = {
    title: "Team workspaces",
    meta: "Product spec \xB7 Maya Chen \xB7 Edited Oct 18",
    blocks: [
      {
        id: "intro",
        kind: "paragraph",
        label: "Intro",
        text: "Team workspaces are a new feature that will make it possible for people who work together to share their projects, files and billing in one single place, so that they no longer need to forward invoices around or invite each other to every project one at a time."
      },
      { id: "goals-heading", kind: "heading", text: "Goals" },
      {
        id: "goals",
        kind: "paragraph",
        label: "Goals",
        text: "Cut the time it takes to invite a team from six minutes to under one. Move 30% of paid solo accounts to a team plan by the end of March 2027."
      },
      { id: "pricing-heading", kind: "heading", text: "Pricing" },
      {
        id: "pricing",
        kind: "paragraph",
        label: "Pricing",
        text: "Per seat, billed monthly. Admins add or remove seats at any time and changes are prorated on the next invoice."
      },
      {
        id: "pricing-table",
        kind: "table",
        label: "Pricing table",
        columns: ["Plan", "Seats", "Monthly"],
        rows: [
          ["Starter", "Up to 5", "$12"],
          ["Team", "Up to 50", "$24"],
          ["Business", "Unlimited", "$36"]
        ]
      }
    ]
  }, F = [
    "Summarize this page",
    "Tighten the intro",
    "Add an annual price column"
  ], Y = "Team workspaces let people share projects, files and billing in one place, without forwarding invoices or inviting each other project by project.", O = (e2) => Number(e2.replace(/[^0-9.]/g, "")), D = (e2) => `$${Number.isInteger(e2) ? e2 : e2.toFixed(2)}`;
  function q() {
    let e2 = false;
    return async ({ prompt: t2, page: a2, selection: n2, signal: i2 }) => {
      await new Promise((e3, t3) => {
        if (i2.aborted) return t3(new DOMException("Aborted", "AbortError"));
        let a3 = window.setTimeout(e3, 650);
        i2.addEventListener(
          "abort",
          () => {
            window.clearTimeout(a3), t3(new DOMException("Aborted", "AbortError"));
          },
          { once: true }
        );
      });
      let s2 = t2.toLowerCase(), r2 = a2.blocks.find((e3) => "table" === e3.kind), l2 = r2 ? r2.columns.indexOf("Monthly") : -1, o2 = r2 && l2 >= 0 ? r2.rows.map((e3) => O(e3[l2])) : [];
      if (/summar|tl;?dr|overview/.test(s2)) {
        let e3 = o2.length ? ` Pricing is per seat, from ${D(Math.min(...o2))} on ${r2.rows[0][0]} to ${D(Math.max(...o2))} on ${r2.rows[r2.rows.length - 1][0]}${r2.columns.includes("Annual") ? ", with two months free when billed annually" : ", billed monthly"}.` : "";
        return {
          text: `Team workspaces let people share projects, files and billing in one place.

The spec sets two goals: invite a team in under a minute, and move 30% of paid solo accounts to a team plan by March 2027.${e3}`
        };
      }
      if (/tighten|shorten|shorter|intro/.test(s2)) {
        let e3 = P(a2, "intro");
        return e3 && "paragraph" === e3.kind ? e3.text === Y ? {
          text: "The intro is already tight at 22 words. Each clause carries one idea, so I would leave it as it is."
        } : {
          text: `Here is a tighter intro. It keeps what teams share and the two chores it removes, and goes from ${z(e3.text)} words to ${z(Y)}.`,
          change: { blockId: "intro", after: { ...e3, text: Y } }
        } : { text: "This page has no intro to tighten." };
      }
      if (/annual|yearly|year/.test(s2)) {
        if (!r2 || l2 < 0)
          return {
            text: "I could not find a pricing table with a monthly column on this page."
          };
        if (r2.columns.includes("Annual"))
          return { text: "The pricing table already has an annual column." };
        let e3 = o2.map((e4) => D(Math.round(10 * e4 / 12 * 100) / 100));
        return {
          text: `I added an annual column at two months free, shown per seat per month. ${r2.rows[r2.rows.length - 1][0]} comes to ${e3[e3.length - 1]}, or ${D(12 * O(e3[e3.length - 1]))} a seat each year.`,
          change: {
            blockId: r2.id,
            after: {
              ...r2,
              columns: [...r2.columns, "Annual"],
              rows: r2.rows.map((t3, a3) => [...t3, e3[a3]])
            }
          }
        };
      }
      if (n2) {
        let e3 = n2.text.length > 60 ? `${n2.text.slice(0, 57).trimEnd()}...` : n2.text;
        return r2 && n2.blockId === r2.id ? {
          text: `The pricing table lists ${r2.rows.length} per seat plans, from ${D(Math.min(...o2))} to ${D(Math.max(...o2))} a month. ${r2.rows[r2.rows.length - 1][0]} is the only plan without a seat cap, so the step up from ${r2.rows[1]?.[0] ?? "Team"} is mostly about team size.`
        } : "goals" === n2.blockId ? {
          text: "Both goals are measurable: invite time drops from six minutes to under one, and 30% of paid solo accounts move to a team plan by March 2027. Neither names an owner yet, which is worth adding before review."
        } : {
          text: `"${e3}" is from the ${n2.label.toLowerCase()}. I can tighten it, explain it or turn it into a list. Ask for one of those and I will propose the edit.`
        };
      }
      if (!e2) throw e2 = true, Error("Simulated network error");
      return {
        text: "I can summarize this page, tighten the intro or add an annual price column. Select any text in the page to ask about that part."
      };
    };
  }
  let H = { type: "spring", visualDuration: 0.34, bounce: 0 }, U = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }, W = { opacity: 0, transition: { duration: 0.1 } }, G = () => () => {
  };
  function K({ base: e2, after: t2 }) {
    if ("table" === e2.kind && "table" === t2.kind)
      return (0, n.jsxs)("table", {
        className: S().diffTable,
        children: [
          (0, n.jsx)("thead", {
            children: (0, n.jsx)("tr", {
              children: t2.columns.map(
                (t3) => (0, n.jsx)(
                  "th",
                  {
                    scope: "col",
                    children: e2.columns.includes(t3) ? t3 : (0, n.jsx)("ins", { children: t3 })
                  },
                  t3
                )
              )
            })
          }),
          (0, n.jsx)("tbody", {
            children: t2.rows.map(
              (a3, i2) => (0, n.jsx)(
                "tr",
                {
                  children: a3.map((a4, s2) => {
                    let r2 = t2.columns[s2], l2 = e2.columns.includes(r2) ? e2.rows[i2]?.[e2.columns.indexOf(r2)] : void 0;
                    return (0, n.jsx)(
                      "td",
                      {
                        children: void 0 === l2 ? (0, n.jsx)("ins", { children: a4 }) : l2 === a4 ? a4 : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("del", { children: l2 }),
                            " ",
                            (0, n.jsx)("ins", { children: a4 })
                          ]
                        })
                      },
                      s2
                    );
                  })
                },
                i2
              )
            )
          })
        ]
      });
    let a2 = (function(e3, t3) {
      let a3 = e3.split(/\s+/).filter(Boolean), n2 = t3.split(/\s+/).filter(Boolean), i2 = a3.length, s2 = n2.length, r2 = Array.from({ length: i2 + 1 }, () => Array(s2 + 1).fill(0));
      for (let e4 = i2 - 1; e4 >= 0; e4--)
        for (let t4 = s2 - 1; t4 >= 0; t4--)
          r2[e4][t4] = a3[e4] === n2[t4] ? r2[e4 + 1][t4 + 1] + 1 : Math.max(r2[e4 + 1][t4], r2[e4][t4 + 1]);
      let l2 = [], o2 = 0, d2 = 0;
      for (; o2 < i2 || d2 < s2; )
        o2 < i2 && d2 < s2 && a3[o2] === n2[d2] ? (l2.push({ type: "same", text: a3[o2] }), o2++, d2++) : d2 < s2 && (o2 >= i2 || r2[o2][d2 + 1] >= r2[o2 + 1][d2]) ? (l2.push({ type: "ins", text: n2[d2] }), d2++) : (l2.push({ type: "del", text: a3[o2] }), o2++);
      let c2 = [];
      l2.forEach((e4, t4) => {
        let a4 = l2[t4 - 1], n3 = l2[t4 + 1];
        "same" === e4.type && e4.text.length <= 3 && a4 && n3 && "same" !== a4.type && "same" !== n3.type ? c2.push({ type: "del", text: e4.text }, { type: "ins", text: e4.text }) : c2.push(e4);
      });
      let u2 = [], p2 = [], h2 = [], m2 = () => {
        p2.length && u2.push({ type: "del", text: p2.join(" ") }), h2.length && u2.push({ type: "ins", text: h2.join(" ") }), p2 = [], h2 = [];
      };
      for (let e4 of c2)
        if ("del" === e4.type) p2.push(e4.text);
        else if ("ins" === e4.type) h2.push(e4.text);
        else {
          m2();
          let t4 = u2[u2.length - 1];
          t4?.type === "same" ? t4.text += ` ${e4.text}` : u2.push({ ...e4 });
        }
      return m2(), u2;
    })("table" === e2.kind ? "" : e2.text, "table" === t2.kind ? "" : t2.text);
    return (0, n.jsx)("p", {
      className: S().diffText,
      children: a2.map(
        (e3, t3) => (0, n.jsxs)(
          "span",
          {
            children: [
              t3 ? " " : "",
              "del" === e3.type ? (0, n.jsx)("del", { children: e3.text }) : "ins" === e3.type ? (0, n.jsx)("ins", { children: e3.text }) : e3.text
            ]
          },
          t3
        )
      )
    });
  }
  function Z({ turn: e2, onApply: t2, onDiscard: a2, applyRef: i2 }) {
    let { base: s2, change: p2, changeState: h2 = "proposed" } = e2;
    return s2 && p2 ? (0, n.jsxs)("div", {
      className: S().change,
      "data-state": h2,
      children: [
        (0, n.jsxs)("div", {
          className: S().changeHead,
          children: [
            (0, n.jsx)(o.A, { size: 14, "aria-hidden": "true" }),
            (0, n.jsx)("span", {
              className: S().changeLabel,
              children: B(s2)
            }),
            (0, n.jsx)("span", {
              className: S().changeMeta,
              children: (function(e3, t3) {
                if ("table" === e3.kind && "table" === t3.kind) {
                  let a3 = t3.columns.filter((t4) => !e3.columns.includes(t4));
                  return a3.length ? `Adds ${a3.join(", ")} column` : "Edits cells";
                }
                return "table" !== e3.kind && "table" !== t3.kind ? `${z(t3.text)} words, was ${z(e3.text)}` : "Replaces block";
              })(s2, p2.after)
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: S().changeBody,
          children: (0, n.jsx)(K, { base: s2, after: p2.after })
        }),
        (0, n.jsx)("div", {
          className: S().changeFoot,
          children: (0, n.jsx)(r.N, {
            mode: "popLayout",
            initial: false,
            children: (0, n.jsxs)(
              l.PY1.div,
              {
                className: S().changeFootInner,
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: U },
                exit: W,
                children: [
                  "applied" === h2 ? (0, n.jsxs)("span", {
                    className: S().footStatus,
                    "data-tone": "success",
                    children: [
                      (0, n.jsx)(d.A, {
                        size: 14,
                        "aria-hidden": "true"
                      }),
                      " Applied to the page"
                    ]
                  }) : null,
                  "discarded" === h2 ? (0, n.jsxs)("span", {
                    className: S().footStatus,
                    children: [
                      (0, n.jsx)(c.A, {
                        size: 14,
                        "aria-hidden": "true"
                      }),
                      " Discarded"
                    ]
                  }) : null,
                  "undone" === h2 ? (0, n.jsxs)("span", {
                    className: S().footStatus,
                    children: [
                      (0, n.jsx)(u.A, {
                        size: 13,
                        "aria-hidden": "true"
                      }),
                      " Undone"
                    ]
                  }) : null,
                  "proposed" === h2 || "undone" === h2 ? (0, n.jsxs)("span", {
                    className: S().footActions,
                    children: [
                      "proposed" === h2 ? (0, n.jsx)(j.$, {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        className: S().footButton,
                        onClick: a2,
                        children: "Discard"
                      }) : null,
                      (0, n.jsx)(j.$, {
                        ref: i2,
                        type: "button",
                        size: "sm",
                        className: `${S().footButton} ${S().applyButton}`,
                        onClick: t2,
                        children: "Apply"
                      })
                    ]
                  }) : null
                ]
              },
              h2
            )
          })
        })
      ]
    }) : null;
  }
  function Q({
    page: e2 = L,
    respond: t2,
    onApply: a2,
    onUndo: o2,
    defaultOpen: d2 = true,
    suggestions: p2 = F,
    assistant: h2,
    className: x2
  }) {
    let N2, T2 = (0, i.useId)(), A2 = (N2 = (0, s.I)(), !!((0, i.useSyncExternalStore)(
      G,
      () => true,
      () => false
    ) && N2)), C2 = h2?.name ?? "Assistant", $2 = h2?.model ?? "Claude Sonnet 5.5", M2 = h2?.mark ?? (0, n.jsx)(w, {
      className: S().mark,
      "aria-hidden": "true",
      title: ""
    }), [R2] = (0, i.useState)(q), z2 = t2 ?? R2, [Y2, O2] = (0, i.useState)(e2), [D2, K2] = (0, i.useState)(e2);
    e2 !== Y2 && (O2(e2), K2(e2));
    let V2 = (0, i.useRef)(null), X = (0, i.useRef)(null), J = (0, i.useRef)(null), ee = (0, i.useRef)(null), et = (0, i.useRef)(null), ea = (0, i.useRef)(null), en = (0, i.useRef)(null), ei = (0, i.useRef)({}), es = (0, i.useRef)(null), er = (0, i.useRef)(0), el = (0, i.useRef)(true), [eo, ed] = (0, i.useState)(d2), [ec, eu] = (0, i.useState)(false), [ep, eh] = (0, i.useState)(false), [em, ef] = (0, i.useState)([]), [ex, eg] = (0, i.useState)(""), [e_, eb] = (0, i.useState)(null), [ey, ej] = (0, i.useState)(null), [ev, ek] = (0, i.useState)(null), [ew, eN] = (0, i.useState)("");
    (0, i.useLayoutEffect)(() => {
      let e3 = V2.current;
      if (!e3) return;
      let t3 = () => {
        eu(e3.clientWidth < 640), eh(true);
      };
      t3();
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, i.useEffect)(() => () => es.current?.abort(), []), (0, i.useEffect)(() => {
      if (!ey) return;
      let e3 = window.setTimeout(() => ej(null), 1600);
      return () => window.clearTimeout(e3);
    }, [ey]), (0, i.useEffect)(() => {
      let e3 = J.current, t3 = ee.current;
      if (!e3 || !t3) return;
      let a3 = new ResizeObserver(() => {
        if (!el.current) return;
        let t4 = e3.scrollHeight - e3.clientHeight, a4 = t4 - e3.scrollTop;
        a4 <= 0 || (a4 > 48 && !A2 ? e3.scrollTo({ top: t4, behavior: "smooth" }) : e3.scrollTop = t4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, [A2]);
    let eT = (0, i.useCallback)(
      (e3, t3) => ef((a3) => a3.map((a4) => a4.id === e3 ? t3(a4) : a4)),
      []
    ), eS = em.some((e3) => "thinking" === e3.status || "streaming" === e3.status), eA = (0, i.useCallback)(
      async (e3, t3, a3, n2) => {
        es.current?.abort();
        let i2 = new AbortController();
        es.current = i2, eN(`${$2} is reading the page`);
        try {
          let s2 = await z2({
            prompt: t3,
            page: n2,
            selection: a3,
            signal: i2.signal
          });
          if (i2.signal.aborted) return;
          let r2 = s2.change ? P(n2, s2.change.blockId) : void 0, l2 = r2 ? s2.change : void 0;
          if ("string" == typeof s2.text) {
            let t4 = s2.text;
            eT(e3, (e4) => ({
              ...e4,
              status: "streaming",
              text: t4,
              final: true,
              change: l2,
              base: r2,
              changeState: l2 ? "proposed" : void 0
            }));
          } else {
            for await (let t4 of (eT(e3, (e4) => ({
              ...e4,
              status: "streaming",
              change: l2,
              base: r2,
              changeState: l2 ? "proposed" : void 0
            })), s2.text)) {
              if (i2.signal.aborted) return;
              eT(e3, (e4) => ({ ...e4, text: e4.text + t4 }));
            }
            eT(e3, (e4) => ({ ...e4, final: true }));
          }
        } catch (a4) {
          if (i2.signal.aborted) return;
          let t4 = a4 instanceof Error ? a4.message : "Something went wrong";
          eT(e3, (e4) => ({ ...e4, status: "error", error: t4 })), eN(`${$2} did not respond. ${t4}. Retry is available.`);
        }
      },
      [$2, eT, z2]
    ), eC = (e3) => {
      let t3 = e3.trim();
      if (!t3 || eS) return;
      let a3 = `${T2}-t${++er.current}`, n2 = e_ ?? void 0;
      ef((e4) => [
        ...e4,
        {
          id: a3,
          prompt: t3,
          selection: n2,
          attempt: 0,
          status: "thinking",
          text: "",
          final: false
        }
      ]), eg(""), el.current = true, eA(a3, t3, n2, D2);
    }, e$ = (0, i.useCallback)(
      (e3) => {
        eT(
          e3.id,
          (e4) => "streaming" === e4.status ? { ...e4, status: "done" } : e4
        ), eN(
          e3.change && e3.base ? `Answer ready with a proposed change to ${B(e3.base)}` : "Answer ready"
        );
      },
      [eT]
    ), eM = (e3) => requestAnimationFrame(() => {
      let t3 = X.current, a3 = t3?.querySelector(`[data-block="${e3}"]`);
      if (!t3 || !a3) return;
      let n2 = a3.getBoundingClientRect(), i2 = t3.getBoundingClientRect(), s2 = ec ? i2.top + 0.3 * i2.height : i2.bottom;
      (n2.top < i2.top + 12 || n2.bottom > s2 - 12) && t3.scrollBy({
        top: n2.top - i2.top - 24,
        behavior: A2 ? "auto" : "smooth"
      });
    }), eR = (e3) => {
      let t3 = V2.current?.querySelector("aside")?.contains(document.activeElement);
      ed(e3), e3 ? requestAnimationFrame(
        () => et.current?.focus({ preventScroll: true })
      ) : t3 && requestAnimationFrame(
        () => ea.current?.focus({ preventScroll: true })
      );
    }, eE = em[em.length - 1], eI = new Set(em.map((e3) => e3.prompt)), eB = eE && ("done" === eE.status || "stopped" === eE.status) ? p2.filter((e3) => !eI.has(e3)) : [], eP = ep && !A2 ? H : { duration: 0 }, ez = `${T2}-panel`, eL = (0, n.jsxs)("aside", {
      id: ez,
      className: S().panel,
      "aria-label": C2,
      "data-sheet": ec || void 0,
      onKeyDown: (e3) => {
        "Escape" === e3.key && (e3.stopPropagation(), eR(false));
      },
      children: [
        (0, n.jsxs)("header", {
          className: S().head,
          children: [
            (0, n.jsxs)("div", {
              className: S().titleRow,
              children: [
                (0, n.jsxs)("span", {
                  className: S().identity,
                  children: [
                    M2,
                    (0, n.jsx)("span", { className: S().name, children: C2 }),
                    (0, n.jsx)("span", { className: S().model, children: $2 })
                  ]
                }),
                (0, n.jsx)(k.m, {
                  content: "Close",
                  children: (0, n.jsx)("button", {
                    type: "button",
                    className: S().iconButton,
                    "aria-label": `Close ${C2.toLowerCase()}`,
                    "aria-controls": ez,
                    "aria-expanded": eo,
                    onClick: () => eR(false),
                    children: ec ? (0, n.jsx)(c.A, { size: 16, "aria-hidden": "true" }) : (0, n.jsx)(m, { size: 16, "aria-hidden": "true" })
                  })
                })
              ]
            }),
            (0, n.jsxs)("ul", {
              className: S().chips,
              "aria-label": "Context",
              children: [
                (0, n.jsxs)("li", {
                  className: S().chip,
                  children: [
                    (0, n.jsx)(f.A, { size: 13, "aria-hidden": "true" }),
                    (0, n.jsx)("span", { children: "This page" })
                  ]
                }),
                (0, n.jsx)(r.N, {
                  initial: false,
                  children: e_ ? (0, n.jsxs)(
                    l.PY1.li,
                    {
                      className: S().chip,
                      "data-selection": "",
                      title: e_.text,
                      initial: { opacity: 0 },
                      animate: { opacity: 1, transition: U },
                      exit: W,
                      children: [
                        (0, n.jsx)(g, {
                          size: 13,
                          "aria-hidden": "true"
                        }),
                        (0, n.jsxs)("span", {
                          className: S().chipText,
                          children: ["Selection: ", e_.label]
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          className: S().chipRemove,
                          "aria-label": `Remove selection from ${e_.label}`,
                          onClick: () => {
                            eb(null), eN("Selection removed"), et.current?.focus({ preventScroll: true });
                          },
                          children: (0, n.jsx)(c.A, {
                            size: 12,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    },
                    `${e_.blockId}-${e_.text}`
                  ) : null
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: J,
          className: S().thread,
          onWheel: (e3) => {
            e3.deltaY < 0 && (el.current = false);
          },
          onTouchMove: () => {
            el.current = false;
          },
          onScroll: (e3) => {
            let t3 = e3.currentTarget;
            t3.scrollHeight - t3.scrollTop - t3.clientHeight < 24 && (el.current = true);
          },
          children: (0, n.jsx)("div", {
            ref: ee,
            className: S().threadInner,
            children: (0, n.jsx)(r.N, {
              initial: false,
              mode: "popLayout",
              children: em.length ? (0, n.jsxs)(
                l.PY1.ol,
                {
                  className: S().turns,
                  "aria-label": "Conversation",
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: U },
                  children: [
                    em.map(
                      (e3) => (0, n.jsxs)(
                        "li",
                        {
                          className: S().turn,
                          children: [
                            (0, n.jsxs)(l.PY1.div, {
                              className: S().ask,
                              initial: { opacity: 0, y: 3 * !A2 },
                              animate: {
                                opacity: 1,
                                y: 0,
                                transition: U
                              },
                              children: [
                                e3.selection ? (0, n.jsxs)("span", {
                                  className: S().askContext,
                                  children: [
                                    (0, n.jsx)(g, {
                                      size: 12,
                                      "aria-hidden": "true"
                                    }),
                                    " Selection: ",
                                    e3.selection.label
                                  ]
                                }) : null,
                                (0, n.jsx)("p", {
                                  className: S().askBubble,
                                  children: e3.prompt
                                })
                              ]
                            }),
                            (0, n.jsxs)("div", {
                              className: S().answer,
                              children: [
                                "thinking" === e3.status ? (0, n.jsx)(v.n, {
                                  className: S().thinking,
                                  children: "Reading the page"
                                }) : null,
                                "error" === e3.status ? (0, n.jsxs)("div", {
                                  className: S().error,
                                  children: [
                                    (0, n.jsx)(_.A, {
                                      size: 16,
                                      className: S().errorIcon,
                                      "aria-hidden": "true"
                                    }),
                                    (0, n.jsxs)("span", {
                                      className: S().errorText,
                                      children: [
                                        (0, n.jsxs)("span", {
                                          children: [
                                            $2,
                                            " did not respond"
                                          ]
                                        }),
                                        (0, n.jsx)("span", {
                                          className: S().errorDetail,
                                          children: e3.error
                                        })
                                      ]
                                    }),
                                    (0, n.jsxs)(j.$, {
                                      type: "button",
                                      variant: "secondary",
                                      size: "sm",
                                      className: S().footButton,
                                      onClick: () => {
                                        eT(e3.id, (e4) => ({
                                          ...e4,
                                          status: "thinking",
                                          attempt: e4.attempt + 1,
                                          error: void 0,
                                          text: "",
                                          final: false
                                        })), el.current = true, eA(
                                          e3.id,
                                          e3.prompt,
                                          e3.selection,
                                          D2
                                        );
                                      },
                                      children: [
                                        (0, n.jsx)(u.A, {
                                          size: 13,
                                          "aria-hidden": "true"
                                        }),
                                        " Retry"
                                      ]
                                    })
                                  ]
                                }) : null,
                                "streaming" === e3.status || "done" === e3.status || "stopped" === e3.status && e3.text ? (0, n.jsx)("div", {
                                  className: S().answerText,
                                  children: (0, n.jsx)(
                                    I,
                                    {
                                      text: e3.text,
                                      final: e3.final,
                                      frozen: "stopped" === e3.status,
                                      onDone: () => e$(e3)
                                    },
                                    e3.attempt
                                  )
                                }) : null,
                                "stopped" === e3.status ? (0, n.jsxs)("span", {
                                  className: S().stopped,
                                  children: [
                                    (0, n.jsx)(b.A, {
                                      size: 10,
                                      fill: "currentColor",
                                      "aria-hidden": "true"
                                    }),
                                    " Stopped"
                                  ]
                                }) : null,
                                "done" === e3.status && e3.change ? (0, n.jsx)(l.PY1.div, {
                                  initial: { opacity: 0 },
                                  animate: {
                                    opacity: 1,
                                    transition: U
                                  },
                                  children: (0, n.jsx)(Z, {
                                    turn: e3,
                                    onApply: () => ((e4) => {
                                      if (!e4.change) return;
                                      let t3 = P(
                                        D2,
                                        e4.change.blockId
                                      );
                                      if (!t3)
                                        return void eN(
                                          "That part of the page no longer exists"
                                        );
                                      let n2 = {
                                        ...e4.change,
                                        before: t3
                                      }, i2 = {
                                        ...D2,
                                        blocks: D2.blocks.map(
                                          (e5) => e5.id === n2.blockId ? n2.after : e5
                                        )
                                      };
                                      K2(i2), eT(e4.id, (e5) => ({
                                        ...e5,
                                        changeState: "applied"
                                      })), ej((e5) => ({
                                        blockId: n2.blockId,
                                        n: (e5?.n ?? 0) + 1
                                      }));
                                      let s2 = `${B(t3)} updated`;
                                      ek({
                                        turnId: e4.id,
                                        change: n2,
                                        label: s2
                                      }), eN(
                                        `Applied. ${s2}. Undo is available.`
                                      ), eM(n2.blockId), requestAnimationFrame(
                                        () => en.current?.focus({
                                          preventScroll: true
                                        })
                                      ), a2?.(n2, i2);
                                    })(e3),
                                    onDiscard: () => {
                                      eT(e3.id, (e4) => ({
                                        ...e4,
                                        changeState: "discarded"
                                      })), eN("Change discarded"), et.current?.focus({
                                        preventScroll: true
                                      });
                                    },
                                    applyRef: (t3) => {
                                      ei.current[e3.id] = t3;
                                    }
                                  })
                                }) : null
                              ]
                            })
                          ]
                        },
                        e3.id
                      )
                    ),
                    eB.length ? (0, n.jsx)(
                      l.PY1.li,
                      {
                        className: S().suggestions,
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: U },
                        children: eB.map(
                          (e3) => (0, n.jsx)(
                            "button",
                            {
                              type: "button",
                              className: S().suggestion,
                              onClick: () => eC(e3),
                              children: e3
                            },
                            e3
                          )
                        )
                      },
                      `follow-${em.length}`
                    ) : null
                  ]
                },
                "turns"
              ) : (0, n.jsxs)(
                l.PY1.div,
                {
                  className: S().empty,
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: U },
                  exit: W,
                  children: [
                    (0, n.jsxs)("p", {
                      className: S().emptyTitle,
                      children: ["Ask about ", D2.title]
                    }),
                    (0, n.jsxs)("p", {
                      className: S().emptyText,
                      children: [
                        C2,
                        " reads this page and proposes edits. Nothing changes until you apply it.",
                        t2 ? "" : " Answers in this preview are simulated."
                      ]
                    }),
                    (0, n.jsx)("div", {
                      className: S().suggestions,
                      children: p2.map(
                        (e3) => (0, n.jsx)(
                          "button",
                          {
                            type: "button",
                            className: S().suggestion,
                            onClick: () => eC(e3),
                            children: e3
                          },
                          e3
                        )
                      )
                    })
                  ]
                },
                "empty"
              )
            })
          })
        }),
        (0, n.jsxs)("div", {
          className: S().composerArea,
          children: [
            (0, n.jsx)("div", {
              className: S().pillSlot,
              children: (0, n.jsx)(r.N, {
                children: ev ? (0, n.jsxs)(
                  l.PY1.button,
                  {
                    ref: en,
                    type: "button",
                    className: S().undoPill,
                    "aria-label": `Undo: ${ev.label}`,
                    initial: { opacity: 0, y: 4 * !A2 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.18,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    },
                    exit: W,
                    onClick: () => {
                      if (!ev) return;
                      let { change: e3, turnId: t3 } = ev, a3 = {
                        ...D2,
                        blocks: D2.blocks.map(
                          (t4) => t4.id === e3.blockId ? e3.before : t4
                        )
                      };
                      K2(a3), eT(t3, (e4) => ({ ...e4, changeState: "undone" })), ej((t4) => ({
                        blockId: e3.blockId,
                        n: (t4?.n ?? 0) + 1
                      })), ek(null), eN(`Undone. ${B(e3.before)} restored.`), eM(e3.blockId), requestAnimationFrame(
                        () => ei.current[t3]?.focus({ preventScroll: true })
                      ), o2?.(e3, a3);
                    },
                    children: [
                      (0, n.jsx)("span", {
                        className: S().pillLabel,
                        children: ev.label
                      }),
                      (0, n.jsx)("span", {
                        className: S().pillRule,
                        "aria-hidden": "true"
                      }),
                      (0, n.jsx)(u.A, {
                        size: 13,
                        "aria-hidden": "true"
                      }),
                      " Undo"
                    ]
                  },
                  ev.turnId
                ) : null
              })
            }),
            (0, n.jsxs)("form", {
              className: S().composer,
              onSubmit: (e3) => {
                e3.preventDefault(), eC(ex);
              },
              children: [
                (0, n.jsx)("input", {
                  ref: et,
                  className: S().input,
                  value: ex,
                  placeholder: e_ ? `Ask about the ${e_.label.toLowerCase()}` : "Ask about this page",
                  "aria-label": `Message ${C2.toLowerCase()}`,
                  onChange: (e3) => eg(e3.target.value)
                }),
                eS ? (0, n.jsx)("button", {
                  type: "button",
                  className: S().send,
                  "aria-label": "Stop answering",
                  onClick: () => {
                    es.current?.abort(), ef(
                      (e3) => e3.map(
                        (e4) => "thinking" === e4.status || "streaming" === e4.status ? {
                          ...e4,
                          status: "stopped",
                          change: void 0,
                          changeState: void 0
                        } : e4
                      )
                    ), eN("Stopped");
                  },
                  children: (0, n.jsx)(b.A, {
                    size: 11,
                    fill: "currentColor",
                    "aria-hidden": "true"
                  })
                }) : (0, n.jsx)("button", {
                  type: "submit",
                  className: S().send,
                  "aria-label": "Send",
                  disabled: !ex.trim(),
                  children: (0, n.jsx)(y.A, {
                    size: 16,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        })
      ]
    });
    return (0, n.jsxs)("div", {
      ref: V2,
      className: [S().root, x2].filter(Boolean).join(" "),
      "data-sheet": ec || void 0,
      children: [
        (0, n.jsxs)("div", {
          className: S().pageCol,
          inert: !!ec && !!eo || void 0,
          children: [
            (0, n.jsx)("div", {
              ref: X,
              className: S().pageScroll,
              children: (0, n.jsx)(E, {
                page: D2,
                flash: ey,
                contextBlockId: e_?.blockId,
                reduced: A2,
                onAskSelection: (e3) => {
                  eb(e3), eN(`Added selection from ${e3.label} as context`), eR(true);
                }
              })
            }),
            (0, n.jsxs)("button", {
              ref: ea,
              type: "button",
              className: S().reopen,
              "data-hidden": eo || void 0,
              inert: !!eo || void 0,
              "aria-controls": ez,
              "aria-expanded": eo,
              onClick: () => eR(true),
              children: [
                (0, n.jsx)(w, {
                  className: S().mark,
                  "aria-hidden": "true",
                  title: ""
                }),
                " ",
                C2
              ]
            })
          ]
        }),
        ec ? (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(l.PY1.div, {
              className: S().scrim,
              "aria-hidden": "true",
              initial: false,
              animate: { opacity: +!!eo },
              transition: { duration: 0.2 * !A2 },
              style: { pointerEvents: eo ? "auto" : "none" },
              onClick: () => eR(false)
            }),
            (0, n.jsx)(
              l.PY1.div,
              {
                className: S().sheet,
                initial: false,
                animate: { y: eo ? 0 : "104%" },
                transition: eP,
                inert: !eo || void 0,
                children: eL
              },
              "sheet"
            )
          ]
        }) : (0, n.jsx)(
          l.PY1.div,
          {
            className: S().dock,
            initial: false,
            animate: { width: 360 * !!eo },
            transition: eP,
            inert: !eo || void 0,
            children: (0, n.jsx)("div", {
              className: S().dockInner,
              style: { width: 360 },
              children: eL
            })
          },
          "dock"
        ),
        (0, n.jsx)("p", {
          className: S().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ew
        })
      ]
    });
  }
  let V = Q;
}

__m(__module,__exports,__require);
}