function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  "use strict";
  i.r(e), i.d(e, { OnboardingIllustration: () => K, default: () => W });
  var a = i(95155), n = i(12115), r = i(55809), s = i(25354), o = i(28245), l = i(92171), c = i(18310), d = i(22535), h = i(80642), u = i(31966), p = i(92298), y = i(90467), m = i(7770), f = i(13568), g = i.n(f);
  let { spring: b, duration: x, blur: _ } = m.T, k = [...m.T.ease.enter], v = [...m.T.ease.standard], j = { duration: 0 }, w = (t2) => Math.round(10 * t2) / 10, N = (t2, e2, i2, a2, n2, r2 = 0, s2 = "paper", o2 = 1) => ({
    x: t2,
    y: e2,
    w: i2,
    h: a2,
    r: n2,
    rot: r2,
    tone: s2,
    o: o2
  }), M = (t2, e2, i2, a2, n2 = false) => ({ x1: t2, y1: e2, x2: i2, y2: a2, accent: n2 }), T = (t2, e2) => [t2, e2, t2, e2, t2, e2, t2, e2];
  function A(t2, e2, i2, a2, n2) {
    let r2 = t2.rot * Math.PI / 180, s2 = Math.cos(r2), o2 = Math.sin(r2), l2 = (e3, i3) => w(t2.x + e3 * s2 - i3 * o2), c2 = (e3, i3) => w(t2.y + e3 * o2 + i3 * s2);
    return M(l2(e2, i2), c2(e2, i2), l2(a2, n2), c2(a2, n2));
  }
  function $(t2) {
    let e2 = t2 * Math.PI / 180;
    return M(
      w(160 + 64 * Math.cos(e2)),
      w(92 + 64 * Math.sin(e2)),
      w(160 + 74 * Math.cos(e2)),
      w(92 + 74 * Math.sin(e2))
    );
  }
  let O = N(120, 62, 44, 22, 7, 0, "shade"), P = N(160, 108, 136, 88, 12, 0, "shade"), Y = N(160, 122, 144, 64, 11), C = N(258, 38, 48, 60, 6, 16, "note"), G = N(160, 92, 20, 20, 10, 0, "paper", 0), S = [
    {
      label: "An open, empty folder with a plus sign above it",
      shapes: [
        O,
        P,
        N(112, 12, 44, 56, 5, -18, "paper", 0),
        N(166, 0, 44, 56, 5, 6, "paper", 0),
        N(214, 12, 44, 56, 5, 20, "paper", 0),
        N(294, 6, 44, 56, 5, 30, "note", 0),
        Y
      ],
      strokes: [
        M(148, 114, 172, 114),
        M(151, 36, 169, 36, true),
        M(160, 27, 160, 45, true)
      ],
      curve: T(226, 30),
      curveOn: false,
      check: false
    },
    {
      label: "Documents flying into the open folder and stacking inside it",
      shapes: [
        O,
        P,
        N(134, 80, 56, 72, 6, -10),
        N(158, 74, 56, 72, 6, -2),
        N(184, 80, 56, 72, 6, 9),
        C,
        Y
      ],
      strokes: [
        A(C, -14, -18, 14, -18),
        A(C, -14, -9, 10, -9),
        A(C, -14, 0, 4, 0)
      ],
      curve: [226, 30, 214, 13, 198, 13, 190, 30],
      curveOn: true,
      check: false
    },
    {
      label: "Three teammates gathered around one shared document",
      shapes: [
        N(160, 58, 40, 34, 17),
        N(160, 27, 22, 22, 11),
        N(88, 128, 46, 40, 20),
        N(88, 90, 28, 28, 14),
        N(232, 128, 46, 40, 20),
        N(232, 90, 28, 28, 14),
        N(160, 106, 72, 88, 8)
      ],
      strokes: [
        M(138, 82, 174, 82),
        M(138, 94, 166, 94, true),
        M(138, 106, 178, 106)
      ],
      curve: [214, 82, 204, 64, 184, 66, 173, 92],
      curveOn: true,
      check: false
    },
    {
      label: "A finished badge with a check mark",
      shapes: [
        N(146, 156, 22, 52, 4, 16),
        N(174, 156, 22, 52, 4, -16),
        N(160, 92, 108, 108, 54, 0, "shade"),
        G,
        G,
        G,
        N(160, 92, 84, 84, 42)
      ],
      strokes: [$(-140), $(-90), $(-40)],
      curve: T(160, 92),
      curveOn: false,
      check: true
    }
  ], L = [
    {
      id: "workspace",
      title: "Create your first workspace",
      body: "Each project gets one home. Start with Q3 vendor contracts and add files whenever you\u2019re ready."
    },
    {
      id: "files",
      title: "Bring in the files you already have",
      body: "Drop PDFs, docs, and spreadsheets onto the workspace. Folio files them by type and keeps every version."
    },
    {
      id: "team",
      title: "Review together in one copy",
      body: "Invite Maya and Theo to the same draft. Comments stay pinned to the exact line they\u2019re about."
    },
    {
      id: "ready",
      title: "You\u2019re ready to go",
      body: "Q3 vendor contracts has 4 files and 2 teammates. You can change any of this later in settings."
    }
  ], z = {
    id: "done",
    title: "Your workspace is open",
    body: "Replay the intro to walk through each step again."
  }, I = [0.4, 0.55, 0.7, 0.8, 0.9, 1, 1], V = L.length - 1, D = (t2) => `M${t2[0]} ${t2[1]}C${t2[2]} ${t2[3]} ${t2[4]} ${t2[5]} ${t2[6]} ${t2[7]}`;
  function E(t2, e2) {
    return { x: (0, r.G)(t2.x, (t3) => t3 * e2), y: (0, r.G)(t2.y, (t3) => t3 * e2) };
  }
  function F({ shape: t2, delay: e2, instant: i2, pointer: n2, depth: r2 }) {
    let o2 = E(n2, r2);
    return (0, a.jsx)(s.PY1.g, {
      initial: false,
      animate: { x: t2.x, y: t2.y },
      transition: i2 ? j : { ...b.smooth, delay: e2 },
      children: (0, a.jsx)(s.PY1.rect, {
        className: `${g().shape} ${g()[t2.tone]}`,
        style: o2,
        initial: false,
        animate: {
          attrX: -t2.w / 2,
          attrY: -t2.h / 2,
          width: t2.w,
          height: t2.h,
          rx: t2.r,
          rotate: t2.rot,
          opacity: t2.o
        },
        transition: i2 ? j : {
          default: { ...b.morph, delay: e2 },
          opacity: { duration: x.standard, ease: v, delay: e2 }
        }
      })
    });
  }
  function R({ stroke: t2, delay: e2, instant: i2, pointer: n2 }) {
    let r2 = E(n2, 1);
    return (0, a.jsx)(s.PY1.line, {
      className: `${g().stroke} ${t2.accent ? g().accent : ""}`,
      style: r2,
      initial: false,
      animate: { x1: t2.x1, y1: t2.y1, x2: t2.x2, y2: t2.y2 },
      transition: i2 ? j : { ...b.smooth, delay: e2 }
    });
  }
  function Q({ points: t2, visible: e2, delay: i2, instant: r2, pointer: c2 }) {
    let d2 = E(c2, 1), h2 = (0, o.d)(D(t2)), u2 = (0, n.useRef)(t2);
    return (0, n.useEffect)(() => {
      let e3 = u2.current;
      if (e3 === t2) return;
      if (r2) {
        u2.current = t2, h2.set(D(t2));
        return;
      }
      let a2 = (0, l.i)(0, 1, {
        ...b.morph,
        delay: i2,
        onUpdate: (i3) => {
          u2.current = e3.map((e4, a3) => e4 + (t2[a3] - e4) * i3), h2.set(D(u2.current));
        }
      });
      return () => a2.stop();
    }, [t2, i2, r2, h2]), (0, a.jsx)(s.PY1.path, {
      d: h2,
      className: `${g().stroke} ${g().trail}`,
      style: d2,
      initial: false,
      animate: { opacity: +!!e2 },
      transition: r2 ? j : { duration: x.standard, ease: v, delay: e2 ? i2 + 0.06 : 0 }
    });
  }
  function B({ scene: t2, dir: e2, rushed: i2, instant: n2, pointer: r2 }) {
    let o2 = t2.shapes.length, l2 = (t3, i3) => e2 > 0 ? t3 : i3 - 1 - t3, c2 = E(r2, 1);
    return (0, a.jsxs)(a.Fragment, {
      children: [
        t2.shapes.map(
          (t3, e3) => (0, a.jsx)(
            F,
            {
              shape: t3,
              depth: I[e3],
              delay: i2 ? 0 : 0.03 * l2(e3, o2),
              instant: n2,
              pointer: r2
            },
            e3
          )
        ),
        (0, a.jsx)(Q, {
          points: t2.curve,
          visible: t2.curveOn,
          delay: 0.1 * !i2,
          instant: n2,
          pointer: r2
        }),
        t2.strokes.map(
          (t3, e3) => (0, a.jsx)(
            R,
            {
              stroke: t3,
              delay: i2 ? 0 : 0.12 + 0.04 * l2(e3, 3),
              instant: n2,
              pointer: r2
            },
            e3
          )
        ),
        (0, a.jsx)(s.PY1.path, {
          d: "M143 93L155 105L178 80",
          className: `${g().stroke} ${g().accent} ${g().check}`,
          style: c2,
          initial: false,
          animate: { pathLength: +!!t2.check, opacity: +!!t2.check },
          transition: n2 ? j : t2.check ? {
            pathLength: {
              duration: x.considered,
              ease: k,
              delay: i2 ? 0.12 : 0.32
            },
            opacity: { duration: 0.01, delay: i2 ? 0.12 : 0.32 }
          } : { duration: x.fast }
        })
      ]
    });
  }
  function K() {
    let [t2, e2] = (0, n.useState)(0), [i2, r2] = (0, n.useState)(false), [l2, m2] = (0, n.useState)({ dir: 1, rushed: false }), f2 = (0, n.useRef)(0), w2 = (0, c.I)() ?? false, N2 = (0, o.d)(0), M2 = (0, o.d)(0), T2 = {
      x: (0, d.z)(N2, { visualDuration: 0.5, bounce: 0 }),
      y: (0, d.z)(M2, { visualDuration: 0.5, bounce: 0 })
    }, A2 = S[t2], $2 = i2 ? z : L[t2];
    function O2(i3) {
      let a2 = Math.max(0, Math.min(V, i3)), n2 = performance.now();
      m2({ dir: a2 >= t2 ? 1 : -1, rushed: n2 - f2.current < 650 }), f2.current = n2, r2(false), e2(a2);
    }
    let P2 = i2 ? { key: "replay", label: "Replay intro" } : t2 === V ? { key: "start", label: "Get started" } : { key: "next", label: "Next" }, Y2 = 0 === t2 || i2, C2 = w2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${_.soft}px)` }, G2 = w2 ? { opacity: 0 } : { opacity: 0, y: -4, filter: `blur(${_.soft}px)` };
    return (0, a.jsxs)("section", {
      className: g().card,
      "aria-label": "Folio onboarding",
      onKeyDown: function(e3) {
        "ArrowRight" === e3.key && !i2 && t2 < V && (e3.preventDefault(), O2(t2 + 1)), "ArrowLeft" === e3.key && !i2 && t2 > 0 && (e3.preventDefault(), O2(t2 - 1));
      },
      children: [
        (0, a.jsxs)("div", {
          className: g().stage,
          onPointerMove: function(t3) {
            if (w2 || "mouse" !== t3.pointerType || !window.matchMedia("(hover: hover)").matches)
              return;
            let e3 = t3.currentTarget.getBoundingClientRect();
            N2.set(((t3.clientX - e3.left) / e3.width - 0.5) * 12), M2.set(((t3.clientY - e3.top) / e3.height - 0.5) * 8);
          },
          onPointerLeave: function() {
            N2.set(0), M2.set(0);
          },
          children: [
            (0, a.jsx)("svg", {
              className: g().art,
              viewBox: "0 0 320 200",
              role: "img",
              "aria-label": A2.label,
              children: (0, a.jsx)(h.N, {
                initial: false,
                children: (0, a.jsx)(
                  s.PY1.g,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: x.standard, ease: v },
                    children: (0, a.jsx)(B, {
                      scene: A2,
                      dir: l2.dir,
                      rushed: l2.rushed,
                      instant: w2,
                      pointer: T2
                    })
                  },
                  w2 ? `still-${t2}` : "live"
                )
              })
            }),
            (0, a.jsx)(h.N, {
              initial: false,
              children: !i2 && t2 < V ? (0, a.jsx)(
                s.PY1.button,
                {
                  type: "button",
                  className: g().skip,
                  onClick: () => O2(V),
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: x.fast },
                  children: "Skip"
                },
                "skip"
              ) : null
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: g().body,
          children: [
            (0, a.jsx)("div", {
              className: g().copy,
              "aria-live": "polite",
              children: (0, a.jsx)(h.N, {
                initial: false,
                children: (0, a.jsxs)(
                  s.PY1.div,
                  {
                    className: g().copyItem,
                    initial: C2,
                    animate: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: x.considered,
                        ease: k,
                        delay: 0.08 * !w2
                      }
                    },
                    exit: { ...G2, transition: { duration: x.exit, ease: v } },
                    children: [
                      (0, a.jsx)("h2", { children: $2.title }),
                      (0, a.jsx)("p", { children: $2.body }),
                      (0, a.jsx)("span", {
                        className: g().srOnly,
                        children: i2 ? "Onboarding complete" : `Step ${t2 + 1} of ${L.length}`
                      })
                    ]
                  },
                  $2.id
                )
              })
            }),
            (0, a.jsxs)("div", {
              className: g().footer,
              children: [
                (0, a.jsx)("div", {
                  className: g().dots,
                  role: "group",
                  "aria-label": "Onboarding steps",
                  children: L.map(
                    (e3, n2) => (0, a.jsx)(
                      "button",
                      {
                        type: "button",
                        className: g().dot,
                        "aria-label": `Step ${n2 + 1}: ${e3.title}`,
                        "aria-current": n2 === t2 ? "step" : void 0,
                        onClick: () => O2(n2),
                        children: (0, a.jsx)(s.PY1.span, {
                          className: g().dotMark,
                          "data-state": n2 === t2 ? "current" : n2 < t2 || i2 ? "complete" : "upcoming",
                          initial: false,
                          animate: { width: n2 === t2 ? 20 : 6 },
                          transition: w2 ? j : b.morph
                        })
                      },
                      e3.id
                    )
                  )
                }),
                (0, a.jsxs)("div", {
                  className: g().actions,
                  children: [
                    (0, a.jsxs)("button", {
                      type: "button",
                      className: g().back,
                      "aria-disabled": Y2,
                      onClick: () => {
                        Y2 || O2(t2 - 1);
                      },
                      children: [
                        (0, a.jsx)(u.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        (0, a.jsx)("span", {
                          className: g().backLabel,
                          children: "Back"
                        })
                      ]
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      className: g().primary,
                      onClick: function() {
                        i2 ? O2(0) : t2 === V ? r2(true) : O2(t2 + 1);
                      },
                      children: (0, a.jsx)(h.N, {
                        initial: false,
                        children: (0, a.jsxs)(
                          s.PY1.span,
                          {
                            className: g().primaryLabel,
                            initial: C2,
                            animate: {
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                              transition: { duration: x.standard, ease: k }
                            },
                            exit: {
                              ...G2,
                              transition: { duration: x.exit, ease: v }
                            },
                            children: [
                              "replay" === P2.key ? (0, a.jsx)(p.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : null,
                              P2.label,
                              "next" === P2.key ? (0, a.jsx)(y.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : null
                            ]
                          },
                          P2.key
                        )
                      })
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let W = K;
}

__m(__module,__exports,__require);
}