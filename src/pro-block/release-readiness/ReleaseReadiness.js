function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { ReleaseReadiness: () => y, default: () => j });
  var t = i(95155), s = i(12115), n = i(18310), r = i(80642), l = i(25354), o = i(64962), d = i(90467), c = i(92218), h = i(51288), p = i(20530), u = i(50680), m = i(67752), g = i(7770), f = i(66924), _ = i.n(f);
  let b = { brief: true, qa: false, changelog: false, owner: false }, w = [
    {
      id: "brief",
      label: "Product brief approved",
      detail: "Scope and acceptance criteria are final"
    },
    {
      id: "qa",
      label: "Quality checks passed",
      detail: "Build 2.4.0-rc.3 reviewed on staging"
    },
    {
      id: "changelog",
      label: "Changelog is ready",
      detail: "Release notes drafted for customers"
    },
    {
      id: "owner",
      label: "Release owner on call",
      detail: "Someone is available for the handoff"
    }
  ], v = [(0, m.MV)("emma-collins"), (0, m.MV)("marcus-johnson")];
  function y({ onRelease: e2 }) {
    let a2 = (0, s.useId)(), i2 = !!(0, n.I)(), [m2, f2] = (0, s.useState)(b), [j2, k] = (0, s.useState)(true), [x, N] = (0, s.useState)(false), [T, C] = (0, s.useState)(false), [A, R] = (0, s.useState)(""), S = Object.values(m2).filter(Boolean).length, L = w.length - S;
    async function $() {
      N(true), R("");
      try {
        await e2?.(), C(true);
      } catch {
        R("The release could not be started. Try again.");
      } finally {
        N(false);
      }
    }
    return (0, t.jsxs)("section", {
      className: _().release,
      "aria-labelledby": `${a2}-title`,
      children: [
        (0, t.jsxs)("header", {
          className: _().header,
          children: [
            (0, t.jsxs)("div", {
              className: _().titleBlock,
              children: [
                (0, t.jsx)("h2", { id: `${a2}-title`, children: "Release 2.4" }),
                (0, t.jsx)("p", {
                  children: "Atlas workspace \xB7 ships Thursday"
                })
              ]
            }),
            (0, t.jsx)("div", {
              className: _().owners,
              "aria-label": `Release owners: ${v.map((e3) => e3.name).join(" and ")}`,
              children: v.map(
                (e3) => (0, t.jsx)(
                  c.e,
                  {
                    name: e3.name,
                    src: e3.src,
                    size: "sm",
                    "aria-hidden": "true"
                  },
                  e3.id
                )
              )
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: _().progress,
          children: [
            (0, t.jsxs)("div", {
              className: _().progressMeta,
              children: [
                (0, t.jsx)("span", {
                  "aria-live": "polite",
                  children: T ? "Release in progress" : L ? `${L} ${1 === L ? "check" : "checks"} left` : "Ready to ship"
                }),
                (0, t.jsxs)("span", {
                  className: _().count,
                  children: [S, " of ", w.length]
                })
              ]
            }),
            (0, t.jsx)("div", {
              className: _().track,
              role: "progressbar",
              "aria-label": "Readiness",
              "aria-valuemin": 0,
              "aria-valuemax": w.length,
              "aria-valuenow": S,
              children: (0, t.jsx)("span", {
                className: _().fill,
                "data-complete": S === w.length || void 0,
                style: {
                  transform: `translateX(${(S / w.length - 1) * 100}%)`
                }
              })
            })
          ]
        }),
        (0, t.jsx)("ul", {
          className: _().tasks,
          "aria-label": "Before you ship",
          children: w.map((e3) => {
            let i3 = m2[e3.id];
            return (0, t.jsxs)(
              "li",
              {
                className: _().task,
                "data-done": i3 || void 0,
                children: [
                  (0, t.jsx)(p.S, {
                    id: `${a2}-${e3.id}`,
                    checked: i3,
                    disabled: T,
                    onCheckedChange: (a3) => f2((i4) => ({ ...i4, [e3.id]: true === a3 })),
                    "aria-label": e3.label,
                    "aria-describedby": `${a2}-${e3.id}-detail`
                  }),
                  (0, t.jsxs)("label", {
                    htmlFor: `${a2}-${e3.id}`,
                    className: _().taskCopy,
                    children: [
                      (0, t.jsx)("span", {
                        className: _().taskLabel,
                        children: e3.label
                      }),
                      (0, t.jsx)("span", {
                        id: `${a2}-${e3.id}-detail`,
                        className: _().taskDetail,
                        children: e3.detail
                      })
                    ]
                  })
                ]
              },
              e3.id
            );
          })
        }),
        (0, t.jsxs)("footer", {
          className: _().footer,
          children: [
            (0, t.jsx)(u.d, {
              checked: j2,
              onCheckedChange: k,
              label: "Notify #releases",
              disabled: T
            }),
            (0, t.jsxs)("div", {
              className: _().footerActions,
              children: [
                T && (0, t.jsx)(h.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: function() {
                    f2(b), C(false), R("");
                  },
                  children: "Reset"
                }),
                (0, t.jsx)(h.$, {
                  size: "sm",
                  disabled: S < w.length || T,
                  loading: x,
                  onClick: () => void $(),
                  children: T ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(o.A, { size: 16, "aria-hidden": "true" }),
                      "Started"
                    ]
                  }) : (0, t.jsxs)(t.Fragment, {
                    children: [
                      "Start release",
                      (0, t.jsx)(d.A, { size: 16, "aria-hidden": "true" })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, t.jsx)(r.N, {
          initial: false,
          children: (A || T) && (0, t.jsx)(
            l.PY1.div,
            {
              className: _().message,
              initial: !i2 && { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: i2 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
              transition: i2 ? { duration: 0 } : {
                height: g.T.spring.smooth,
                opacity: {
                  duration: g.T.duration.fast,
                  ease: [...g.T.ease.standard]
                }
              },
              children: (0, t.jsx)("p", {
                className: A ? _().error : _().success,
                role: A ? "alert" : "status",
                children: A || `Release 2.4 is rolling out.${j2 ? " #releases was notified." : ""}`
              })
            },
            "message"
          )
        })
      ]
    });
  }
  let j = y;
}

__m(__module,__exports,__require);
}