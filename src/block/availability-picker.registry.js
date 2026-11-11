/* availability-picker (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(52692, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { AvailabilityPicker: () => x, default: () => v });
  var i = t(95155), s = t(12115), l = t(18310), n = t(25354), r = t(80642), o = t(64577), d = t(92218), c = t(51288), u = t(7770), p = t(95260), m = t.n(p);
  let _ = [
    {
      name: "Emma Collins",
      first: "Emma",
      src: "media/people/emma-collins.svg"
    },
    {
      name: "Marcus Johnson",
      first: "Marcus",
      src: "media/people/marcus-johnson.svg"
    },
    {
      name: "Ava Mitchell",
      first: "Ava",
      src: "media/people/ava-mitchell.svg"
    }
  ], y = [
    {
      id: "mon",
      short: "Mon",
      date: "21",
      full: "Monday, 21 September",
      slots: [
        { time: "09:30" },
        { time: "10:30" },
        { time: "14:00", busy: "Marcus" },
        { time: "16:00" }
      ]
    },
    {
      id: "tue",
      short: "Tue",
      date: "22",
      full: "Tuesday, 22 September",
      slots: [
        { time: "09:00", busy: "Ava" },
        { time: "11:00" },
        { time: "13:30" },
        { time: "15:00", busy: "Emma" }
      ]
    },
    {
      id: "wed",
      short: "Wed",
      date: "23",
      full: "Wednesday, 23 September",
      slots: [
        { time: "09:30" },
        { time: "10:30", busy: "Marcus" },
        { time: "14:30" },
        { time: "16:30" }
      ]
    },
    {
      id: "thu",
      short: "Thu",
      date: "24",
      full: "Thursday, 24 September",
      slots: [
        { time: "08:30", busy: "Emma" },
        { time: "10:00" },
        { time: "13:00" },
        { time: "15:30", busy: "Ava" }
      ]
    },
    {
      id: "fri",
      short: "Fri",
      date: "25",
      full: "Friday, 25 September",
      slots: [
        { time: "09:30" },
        { time: "11:30" },
        { time: "14:00", busy: "Marcus" },
        { time: "15:30" }
      ]
    }
  ], b = (e2, a2) => {
    let [t2, i2] = e2.split(":").map(Number), s2 = 60 * t2 + i2 + a2;
    return `${String(Math.floor(s2 / 60)).padStart(2, "0")}:${String(s2 % 60).padStart(2, "0")}`;
  }, h = {
    enter: (e2) => ({ opacity: 0, x: 16 * e2 }),
    center: { opacity: 1, x: 0 },
    exit: (e2) => ({
      opacity: 0,
      x: -16 * e2,
      transition: {
        duration: u.T.duration.fast,
        ease: [...u.T.ease.standard]
      }
    })
  }, f = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function x({ onConfirm: e2 }) {
    let a2 = !!(0, l.I)(), t2 = (0, s.useId)(), [p2, v2] = (0, s.useState)(y[0].id), [j, k] = (0, s.useState)(1), [N, g] = (0, s.useState)("10:30"), [T, C] = (0, s.useState)(false), S = y.find((e3) => e3.id === p2) ?? y[0], E = S.slots.find((e3) => e3.time === N) ?? S.slots[0], $ = `${S.full}, ${E.time} to ${b(E.time, 30)}`, w = T ? "Invites sent" : E.busy ? `${E.busy} will be asked to move a conflict` : "Everyone is free", M = a2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    } : {
      initial: { opacity: 0, y: 4, filter: `blur(${u.T.blur.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -4, filter: `blur(${u.T.blur.subtle}px)` }
    }, B = {
      duration: a2 ? u.T.duration.instant : u.T.duration.fast,
      ease: [...u.T.ease.standard]
    };
    return (0, i.jsx)("section", {
      className: m().root,
      "aria-labelledby": `${t2}-title`,
      children: (0, i.jsxs)("div", {
        className: m().picker,
        children: [
          (0, i.jsxs)("header", {
            className: m().header,
            children: [
              (0, i.jsxs)("div", {
                className: m().headerCopy,
                children: [
                  (0, i.jsx)("h2", {
                    id: `${t2}-title`,
                    children: "Product review"
                  }),
                  (0, i.jsx)("p", {
                    children: "30 minutes \xB7 Z\xFCrich time"
                  })
                ]
              }),
              (0, i.jsx)("div", {
                className: m().attendees,
                "aria-label": "Attendees: Emma Collins, Marcus Johnson and Ava Mitchell",
                children: _.map(
                  (e3) => (0, i.jsx)(
                    d.e,
                    { name: e3.name, src: e3.src, size: "sm" },
                    e3.name
                  )
                )
              })
            ]
          }),
          (0, i.jsx)("div", {
            className: m().days,
            role: "group",
            "aria-label": "Week of 21 September",
            children: y.map((e3, s2) => {
              let l2 = p2 === e3.id, r2 = e3.slots.filter((e4) => !e4.busy).length;
              return (0, i.jsxs)(
                "button",
                {
                  type: "button",
                  className: m().day,
                  "data-selected": l2 || void 0,
                  "aria-pressed": l2,
                  "aria-label": `${e3.full}, ${r2} times everyone is free`,
                  onClick: () => {
                    let e4;
                    (e4 = y[s2]).id !== p2 && (k(s2 > y.findIndex((e5) => e5.id === p2) ? 1 : -1), v2(e4.id), g((e4.slots.find((e5) => !e5.busy) ?? e4.slots[0]).time), C(false));
                  },
                  children: [
                    l2 && (0, i.jsx)(n.PY1.span, {
                      layoutId: `${t2}-day`,
                      className: m().dayHighlight,
                      transition: a2 ? { duration: 0 } : u.T.spring.snappy
                    }),
                    (0, i.jsx)("span", {
                      className: m().dayName,
                      children: e3.short
                    }),
                    (0, i.jsx)("span", {
                      className: m().dayDate,
                      children: e3.date
                    }),
                    (0, i.jsxs)("span", {
                      className: m().dayOpen,
                      children: [r2, " open"]
                    })
                  ]
                },
                e3.id
              );
            })
          }),
          (0, i.jsxs)("div", {
            className: m().slotsHead,
            children: [
              (0, i.jsx)("h3", {
                className: m().slotsTitle,
                children: (0, i.jsx)("span", {
                  className: m().swap,
                  children: (0, i.jsx)(r.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, i.jsx)(
                      n.PY1.span,
                      { ...M, transition: B, children: S.full },
                      S.id
                    )
                  })
                })
              }),
              (0, i.jsxs)("span", {
                className: m().legend,
                children: [
                  (0, i.jsx)("i", {
                    className: m().markFree,
                    "aria-hidden": "true"
                  }),
                  "Free",
                  (0, i.jsx)("i", {
                    className: m().markBusy,
                    "aria-hidden": "true"
                  }),
                  "Busy"
                ]
              })
            ]
          }),
          (0, i.jsx)("div", {
            className: m().slotsStage,
            children: (0, i.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              custom: j,
              children: (0, i.jsx)(
                n.PY1.ul,
                {
                  className: m().slots,
                  "aria-label": `Times on ${S.full}`,
                  custom: j,
                  variants: a2 ? f : h,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: a2 ? { duration: u.T.duration.instant } : {
                    x: u.T.spring.smooth,
                    opacity: { duration: u.T.duration.fast }
                  },
                  children: S.slots.map((e3) => {
                    let a3 = E.time === e3.time, t3 = e3.busy ? `${e3.busy} is busy` : "Everyone is free";
                    return (0, i.jsx)(
                      "li",
                      {
                        children: (0, i.jsxs)("button", {
                          type: "button",
                          className: m().slot,
                          "data-selected": a3 || void 0,
                          "data-busy": e3.busy ? "" : void 0,
                          "aria-pressed": a3,
                          "aria-label": `${e3.time} to ${b(e3.time, 30)}, ${t3}`,
                          onClick: () => {
                            g(e3.time), C(false);
                          },
                          children: [
                            (0, i.jsx)("span", {
                              className: m().slotTime,
                              children: e3.time
                            }),
                            (0, i.jsx)("span", {
                              className: m().slotMeta,
                              children: t3
                            }),
                            (0, i.jsx)("span", {
                              className: m().marks,
                              "aria-hidden": "true",
                              children: _.map(
                                (a4) => (0, i.jsx)(
                                  "i",
                                  {
                                    className: e3.busy === a4.first ? m().markBusy : m().markFree
                                  },
                                  a4.name
                                )
                              )
                            }),
                            (0, i.jsx)("span", {
                              className: m().slotCheck,
                              "aria-hidden": "true",
                              children: (0, i.jsx)(o.A, {
                                size: 14,
                                strokeWidth: 2
                              })
                            })
                          ]
                        })
                      },
                      e3.time
                    );
                  })
                },
                S.id
              )
            })
          }),
          (0, i.jsxs)("footer", {
            className: m().footer,
            children: [
              (0, i.jsxs)("div", {
                className: m().selection,
                children: [
                  (0, i.jsx)("span", {
                    className: m().swap,
                    children: (0, i.jsx)(r.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsx)(
                        n.PY1.span,
                        {
                          className: m().selectionLabel,
                          ...M,
                          transition: B,
                          children: w
                        },
                        w
                      )
                    })
                  }),
                  (0, i.jsx)("span", {
                    className: m().swap,
                    children: (0, i.jsx)(r.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsx)(
                        n.PY1.strong,
                        {
                          className: m().selectionValue,
                          ...M,
                          transition: B,
                          children: $
                        },
                        $
                      )
                    })
                  })
                ]
              }),
              (0, i.jsx)(c.$, {
                variant: T ? "secondary" : "primary",
                onClick: T ? void 0 : function() {
                  C(true), e2?.({ date: S.full, time: E.time });
                },
                "aria-disabled": T || void 0,
                className: m().confirmButton,
                children: (0, i.jsx)("span", {
                  className: m().swap,
                  children: (0, i.jsx)(r.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, i.jsx)(
                      n.PY1.span,
                      {
                        className: m().buttonLabel,
                        ...M,
                        transition: B,
                        children: T ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(o.A, {
                              size: 16,
                              "aria-hidden": "true"
                            }),
                            "Confirmed"
                          ]
                        }) : "Confirm time"
                      },
                      T ? "done" : "idle"
                    )
                  })
                })
              }),
              (0, i.jsx)("p", {
                className: m().srOnly,
                "aria-live": "polite",
                children: T ? `Confirmed ${$}.` : ""
              })
            ]
          })
        ]
      })
    });
  }
  let v = x;
}

__m(__module,__exports,__require);
});
A.regCss(95260, ".root{width:min(100%,720px);min-width:0;margin-inline:auto;container-type:inline-size}\n.picker{overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n@container (max-width: 360px){.picker{border-radius:var(--radius-panel)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.swap{position:relative;display:inline-flex;min-width:0;max-width:100%}\n.swap>*{white-space:nowrap}\n.selection .swap>*{white-space:normal}\n.header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:24px 24px 20px}\n.header h2{margin:0;font-family:var(--font-display);font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.header p{margin:0;color:var(--text-secondary);font-size:var(--text-sm)}\n@container (max-width: 520px){.header{padding:20px 16px 16px}\n.headerCopy{display:grid;gap:4px;min-width:0}\n.attendees{display:flex;flex:none;padding-left:6px}\n.attendees>span{margin-left:-6px;box-shadow:0 0 0 2px var(--surface)}\n.days{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;padding:0 24px}\n.days{gap:4px;padding:0 16px}\n.day{position:relative;isolation:isolate;display:grid;justify-items:center;gap:2px;min-width:0;padding:10px 4px;border:1px solid var(--border);border-radius:14px;background:transparent;color:var(--foreground);font:inherit;outline:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.day:active{transform:scale(.97)}\n.day[data-selected]{border-color:transparent;color:var(--accent-foreground)}\n@media (hover:hover) and (pointer:fine){.day:not([data-selected]):hover,.slot:not([data-selected]):hover{border-color:var(--border-strong)}\n.day{padding:8px 2px;border-radius:12px}\n@media (prefers-reduced-motion:reduce){.day,.slotCheck,.slot{transition:none}\n.day:active,.slot:active{transform:none}\n.dayHighlight{position:absolute;z-index:-1;inset:-1px;border-radius:inherit;background:var(--accent)}\n.dayName{color:inherit;font-size:var(--text-xs);line-height:var(--leading-body);opacity:.72}\n.dayDate{font-family:var(--font-display);font-size:var(--text-xl);font-weight:500;line-height:var(--leading-display);letter-spacing:var(--tracking-display);font-variant-numeric:tabular-nums}\n.dayDate{font-size:var(--text-lg)}\n.dayOpen{color:inherit;font-size:var(--text-xs);line-height:var(--leading-body);opacity:.72}\n.dayOpen,.legend{display:none}\n.slotsHead{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-top:20px;padding:16px 24px 0;border-top:1px solid var(--border-subtle)}\n.slotsHead{padding-inline:16px}\n.slotsTitle{min-width:0;margin:0;font-size:var(--text-sm);font-weight:500}\n.legend{display:inline-flex;flex:none;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs)}\n.legend i:nth-of-type(2){margin-left:8px}\n.legend i,.marks i{display:block;width:4px;height:14px;border-radius:2px}\n.slotsStage{position:relative;padding:12px 24px 24px}\n.slotsStage{padding:12px 16px 16px}\n.slots{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0;padding:0;list-style:none}\n.slots{grid-template-columns:minmax(0,1fr)}\n.slot{display:flex;align-items:center;gap:12px;width:100%;min-width:0;height:48px;padding:0 12px 0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--foreground);font:inherit;text-align:left;outline:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.slot:active{transform:scale(.98)}\n.slot[data-selected]{border-color:var(--accent);background:var(--accent-subtle)}\n.slot[data-busy] .slotMeta{color:var(--text-muted)}\n.slot[data-selected] .slotCheck{width:14px;margin-left:0;opacity:1}\n.slotTime{flex:none;min-width:42px;font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums}\n.slotMeta{flex:1;min-width:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.marks{display:inline-flex;flex:none;align-items:center;gap:3px}\n.markFree{background:var(--success)}\n.markBusy{background:var(--border-strong)}\n.slotCheck{display:grid;flex:none;place-items:center;width:0;margin-left:-12px;overflow:hidden;color:var(--foreground);opacity:0;transition:width var(--duration-spring) var(--ease-spring),margin var(--duration-spring) var(--ease-spring),opacity var(--duration-fast) var(--ease-standard)}\n.footer{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 24px;border-top:1px solid var(--border-subtle);background:var(--surface-muted)}\n.footer{flex-direction:column;align-items:stretch;gap:12px;padding:16px}\n.selection{display:grid;gap:2px;min-width:0}\n.selectionLabel{min-width:0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.selectionValue{min-width:0;overflow:hidden;line-height:var(--leading-body);font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums;text-overflow:ellipsis}\n.confirmButton{flex:none;min-width:136px}\n.confirmButton{width:100%}\n.buttonLabel{display:inline-flex;align-items:center;gap:6px}", {"root":"root","picker":"picker","srOnly":"srOnly","swap":"swap","selection":"selection","header":"header","headerCopy":"headerCopy","attendees":"attendees","days":"days","day":"day","slot":"slot","slotCheck":"slotCheck","dayHighlight":"dayHighlight","dayName":"dayName","dayDate":"dayDate","dayOpen":"dayOpen","legend":"legend","slotsHead":"slotsHead","slotsTitle":"slotsTitle","marks":"marks","slotsStage":"slotsStage","slots":"slots","slotMeta":"slotMeta","slotTime":"slotTime","markFree":"markFree","markBusy":"markBusy","footer":"footer","selectionLabel":"selectionLabel","selectionValue":"selectionValue","confirmButton":"confirmButton","buttonLabel":"buttonLabel"});
A.cssFor("availability-picker", [95260]);
A.item("availability-picker", {entry:52692, export:"AvailabilityPicker", kind:"block", tier:"pro", unresolved:[]});
})();