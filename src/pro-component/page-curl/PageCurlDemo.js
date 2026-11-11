function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { PageCurlDemo: () => P });
  var r = t(95155), i = t(5772), s = t(12115), l = t(18310), o = t(28245), n = t(55809), c = t(22535), d = t(92171), p = t(25354), h = t(78780), u = t(76721), m = t(26927), g = t(68078), f = t.n(g);
  let _ = "polygon(0px 0px, 0px 0px, 0px 0px)", w = () => () => {
  };
  function v(e2, a2) {
    let t2 = [];
    for (let r2 = 0; r2 < e2.length; r2++) {
      let i2 = e2[r2], s2 = e2[(r2 + 1) % e2.length], l2 = a2(i2), o2 = a2(s2);
      if (l2 >= 0 && t2.push(i2), l2 >= 0 != o2 >= 0) {
        let e3 = l2 / (l2 - o2);
        t2.push([i2[0] + (s2[0] - i2[0]) * e3, i2[1] + (s2[1] - i2[1]) * e3]);
      }
    }
    return t2;
  }
  let x = (e2) => e2.length < 3 ? _ : `polygon(${e2.map(([e3, a2]) => `${e3.toFixed(2)}px ${a2.toFixed(2)}px`).join(", ")})`;
  function j({ children: e2, blank: a2 }) {
    return (0, r.jsx)("div", {
      className: f().page,
      "data-blank": a2 || void 0,
      children: e2
    });
  }
  function b({
    pages: e2,
    spread: a2,
    defaultSpread: t2 = 0,
    onSpreadChange: i2,
    pageAspect: g2 = 0.72,
    label: k2 = "Book",
    tease: N2 = true,
    hint: A2 = "Drag the corner",
    controls: $2 = true,
    className: M2,
    style: P2
  }) {
    let C, R = (C = (0, s.useSyncExternalStore)(
      w,
      () => true,
      () => false
    ), !!(0, l.I)() && C), T = Math.ceil(e2.length / 2), [S, z] = (0, s.useState)(t2), W = void 0 !== a2, I = Math.max(0, Math.min(T, W ? a2 : S)), [L, E] = (0, s.useState)(null), [D, F] = (0, s.useState)(0), [B, q] = (0, s.useState)(0), G = (0, s.useRef)(null), U = (0, s.useRef)(null), Y = (0, s.useRef)(L), J = (0, s.useRef)(I);
    (0, s.useLayoutEffect)(() => {
      Y.current = L, J.current = I;
    }, [L, I]);
    let K = (0, s.useCallback)((e3) => {
      Y.current = e3, E(e3);
    }, []), O = (0, s.useRef)([]), [Q, H] = (0, s.useState)(false), X = (0, s.useRef)(0), V = (0, s.useRef)(0), Z = (0, s.useRef)(null);
    (0, s.useLayoutEffect)(() => {
      let e3 = G.current;
      if (!e3) return;
      let a3 = () => q(e3.offsetWidth);
      if (a3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(a3);
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let ee = Math.max(1, Math.floor(B / 2)), ea = Math.round(ee / g2), et = (0, o.d)({ w: ee, h: ea });
    (0, s.useLayoutEffect)(() => {
      et.set({ w: ee, h: ea });
    }, [ee, ea, et]);
    let er = (0, o.d)(ee), ei = (0, o.d)(ea), es = (0, o.d)(ea), el = (0, n.G)(() => {
      let { w: e3, h: a3 } = et.get();
      return (function(e4, a4, t3, r2, i3) {
        let s2 = e4, l2 = a4, o2 = [0, i3], n2 = [0, r2 - i3], c2 = Math.hypot(s2 - o2[0], l2 - o2[1]);
        c2 > t3 && (s2 = o2[0] + (s2 - o2[0]) * t3 / c2, l2 = o2[1] + (l2 - o2[1]) * t3 / c2);
        let d2 = Math.hypot(t3, r2);
        (c2 = Math.hypot(s2 - n2[0], l2 - n2[1])) > d2 && (s2 = n2[0] + (s2 - n2[0]) * d2 / c2, l2 = n2[1] + (l2 - n2[1]) * d2 / c2);
        let p2 = t3 - s2, h2 = i3 - l2, u2 = Math.hypot(p2, h2), m2 = [
          [0, 0],
          [t3, 0],
          [t3, r2],
          [0, r2]
        ];
        if (u2 < 0.5)
          return {
            front: x(m2),
            flap: _,
            matrix: "none",
            fold: "none",
            amount: 0
          };
        let g3 = p2 / u2, f2 = h2 / u2, w2 = (t3 + s2) / 2, j2 = (i3 + l2) / 2, b2 = ([e5, a5]) => (e5 - w2) * g3 + (a5 - j2) * f2, y2 = w2 * g3 + j2 * f2, k3 = 180 * Math.atan2(f2, g3) / Math.PI;
        return {
          front: x(v(m2, (e5) => -b2(e5))),
          flap: x(v(m2, b2)),
          matrix: `matrix(${1 - 2 * g3 * g3}, ${-2 * g3 * f2}, ${-2 * g3 * f2}, ${1 - 2 * f2 * f2}, ${2 * y2 * g3}, ${2 * y2 * f2})`,
          fold: `translate(${w2.toFixed(2)}px, ${j2.toFixed(2)}px) rotate(${k3.toFixed(3)}deg)`,
          amount: Math.min(1, u2 / t3)
        };
      })(er.get(), ei.get(), e3, a3, es.get());
    }), eo = (0, n.G)(() => el.get().front), en = (0, n.G)(() => el.get().flap), ec = (0, n.G)(() => el.get().matrix), ed = (0, n.G)(() => el.get().fold), ep = (0, n.G)(
      () => 0.9 * Math.sin(Math.min(1, el.get().amount) * Math.PI * 0.5 + 0.15)
    ), [eh, eu] = (0, s.useState)(0), em = Math.max(0, Math.min(T, I + eh)), eg = 0 === em ? -ee / 2 : e2[2 * em] ? 0 : ee / 2, ef = (0, c.z)(eg, { stiffness: 170, damping: 26 });
    (0, s.useEffect)(() => {
      R ? ef.jump(eg) : ef.set(eg);
    }, [ef, eg, R]);
    let e_ = (0, s.useRef)(true);
    (0, s.useEffect)(() => {
      ee > 1 && e_.current && (e_.current = false, ef.jump(eg));
    }, [ee, ef, eg]);
    let ew = () => {
      window.clearTimeout(V.current), O.current.forEach((e3) => e3.stop()), O.current = [];
    };
    (0, s.useEffect)(() => () => ew(), []);
    let ev = (0, s.useCallback)(
      (a3) => 1 === a3 ? !!e2[2 * J.current] : !!e2[2 * J.current - 1],
      [e2]
    ), ex = (0, s.useCallback)(
      (e3) => {
        let a3 = J.current + e3;
        J.current = a3, eu(0), K(null), H(true), W || z(a3), i2?.(a3);
      },
      [K, W, i2]
    ), ej = (0, s.useCallback)(
      (e3, a3 = 0) => {
        let t3 = Y.current;
        if (!t3) return;
        if (ew(), R) return void (e3 ? ex(t3.dir) : K(null));
        eu(e3 ? t3.dir : 0);
        let r2 = e3 ? -ee : ee, i3 = { type: "spring", stiffness: 190, damping: 28, restDelta: 0.5 };
        O.current = [
          (0, d.i)(ei, t3.cy, i3),
          (0, d.i)(er, r2, {
            ...i3,
            velocity: a3,
            onComplete: () => {
              e3 ? ex(t3.dir) : K(null);
            }
          })
        ];
      },
      [ee, K, ex, er, ei, R]
    ), eb = (0, s.useCallback)(
      (e3) => {
        if (!ev(e3) || Z.current || Y.current?.mode === "auto") return;
        if (ew(), R) return void ex(e3);
        let a3 = Y.current?.dir === e3, t3 = a3 ? Y.current.cy : ea;
        a3 || (es.set(t3), er.set(ee), ei.set(t3));
        let r2 = { x: er.get(), y: ei.get() };
        K({ dir: e3, cy: t3, mode: "auto" }), eu(e3), O.current = [
          (0, d.i)(0, 1, {
            duration: 0.72,
            ease: [0.45, 0.05, 0.25, 1],
            onUpdate: (e4) => {
              er.set(r2.x + (-ee - r2.x) * e4), ei.set(
                r2.y + (t3 - r2.y) * e4 + (t3 === ea ? -1 : 1) * Math.sin(Math.PI * e4) * ea * 0.16
              );
            },
            onComplete: () => ex(e3)
          })
        ];
      },
      [ea, ee, K, ev, ex, es, er, ei, R]
    ), ey = (0, s.useCallback)(
      (e3) => {
        if (R || Y.current || Z.current || !ev(1) || ee < 2) return;
        ew(), X.current = performance.now(), es.set(ea), er.set(ee), ei.set(ea), K({ dir: 1, cy: ea, mode: "tease" });
        let a3 = { type: "spring", visualDuration: 0.55, bounce: 0.18 };
        O.current = [
          (0, d.i)(er, ee * (1 - e3), a3),
          (0, d.i)(ei, ea * (1 - 0.5 * e3), a3)
        ], V.current = window.setTimeout(() => {
          Y.current?.mode !== "tease" || Z.current || ej(false);
        }, 820);
      },
      [ea, ee, K, ev, es, er, ei, R, ej]
    ), ek = (0, s.useRef)(ey);
    (0, s.useLayoutEffect)(() => {
      ek.current = ey;
    }, [ey]);
    let eN = ee > 1;
    (0, s.useEffect)(() => {
      let e3 = G.current;
      if (!N2 || !eN || !e3 || "u" < typeof IntersectionObserver) return;
      let a3 = 0, t3 = new IntersectionObserver(
        ([e4]) => {
          e4.isIntersecting && (t3.disconnect(), a3 = window.setTimeout(() => ek.current(0.26), 650));
        },
        { threshold: 0.6 }
      );
      return t3.observe(e3), () => {
        t3.disconnect(), window.clearTimeout(a3);
      };
    }, [N2, eN]);
    let eA = (e3, a3) => {
      let t3 = U.current.getBoundingClientRect();
      return { bx: e3 - t3.left, by: a3 - t3.top };
    }, e$ = (e3, a3) => 1 === e3 ? a3 - ee : ee - a3, eM = (e3) => {
      let a3 = Z.current;
      if (!a3 || a3.id !== e3.pointerId) return;
      Z.current = null;
      let t3 = Y.current;
      if (!t3) return;
      let r2 = a3.samples[0], i3 = a3.samples[a3.samples.length - 1], s2 = i3.t - r2.t > 0 ? (i3.x - r2.x) / ((i3.t - r2.t) / 1e3) : 0;
      if (!a3.moved && performance.now() - a3.start < 400) {
        K({ ...t3, mode: "peek" }), eb(t3.dir);
        return;
      }
      ej(er.get() + 0.14 * s2 < 0.5 * ee || s2 < -700, s2);
    }, eP = (e3) => {
      H(true), eb(e3);
    }, eC = (a3) => e2[a3], eR = (e3) => void 0 === eC(e3) ? null : (0, r.jsx)(j, { children: eC(e3) }), eT = L?.dir ?? 0, eS = -1 === eT ? 2 * I - 3 : 2 * I - 1, ez = 1 === eT ? 2 * I + 2 : 2 * I, eW = 1 === eT ? 2 * I : 2 * I - 1, eI = 1 === eT ? 2 * I + 1 : 2 * I - 2, eL = 0 !== eT && void 0 !== eC(eI), eE = 2 * I - 1 >= 0 && void 0 !== eC(2 * I - 1) ? 2 * I : null, eD = void 0 !== eC(2 * I) ? 2 * I + 1 : null, eF = [eE, eD].filter(Boolean).join(" and "), eB = 0 === I ? "Cover" : null === eD ? "Back cover" : null === eE ? `Page ${eD}` : `Pages ${eE}\u2013${eD}`, eq = void 0 !== eC(2 * I), eG = void 0 !== eC(2 * I - 1);
    return (0, r.jsxs)("div", {
      ref: G,
      className: [f().root, M2].filter(Boolean).join(" "),
      style: {
        ...P2,
        "--page-w": `${ee}px`,
        "--page-h": `${ea}px`,
        "--diag": `${Math.ceil(Math.hypot(ee, ea))}px`
      },
      role: "group",
      "aria-roledescription": "book",
      "aria-label": k2,
      tabIndex: 0,
      onKeyDown: (e3) => {
        ("ArrowRight" === e3.key || "PageDown" === e3.key) && (e3.preventDefault(), eP(1)), ("ArrowLeft" === e3.key || "PageUp" === e3.key) && (e3.preventDefault(), eP(-1));
      },
      "data-ready": B ? "" : void 0,
      children: [
        (0, r.jsxs)(p.PY1.div, {
          ref: U,
          className: f().book,
          style: { x: ef },
          "data-half": D || void 0,
          onPointerDown: (e3) => {
            let a3;
            if (Z.current || "mouse" === e3.pointerType && 0 !== e3.button)
              return;
            let { bx: t3, by: r2 } = eA(e3.clientX, e3.clientY), i3 = Y.current;
            if (i3 && "auto" !== i3.mode) a3 = i3.dir;
            else if (!i3 && t3 > +ee && ev(1)) a3 = 1;
            else {
              if (!(!i3 && t3 < +ee && ev(-1))) return;
              a3 = -1;
            }
            ew(), H(true), eu(0), e3.currentTarget.setPointerCapture(e3.pointerId);
            let s2 = i3 ? i3.cy : r2 < ea / 2 ? 0 : ea;
            i3 || (es.set(s2), er.set(ee), ei.set(s2)), K({ dir: a3, cy: s2, mode: "drag" }), Z.current = {
              id: e3.pointerId,
              bx: t3,
              by: r2,
              px: er.get(),
              py: ei.get(),
              samples: [{ x: e$(a3, t3), t: performance.now() }],
              moved: false,
              start: performance.now()
            };
          },
          onPointerMove: (e3) => {
            let { bx: a3, by: t3 } = eA(e3.clientX, e3.clientY), r2 = Z.current;
            if (r2 && r2.id === e3.pointerId) {
              let e4 = Y.current;
              if (!e4) return;
              let i4 = (a3 - r2.bx) * e4.dir, s3 = t3 - r2.by;
              Math.hypot(i4, s3) > 4 && (r2.moved = true), er.set(r2.px + i4), ei.set(r2.py + s3), r2.samples.push({ x: e$(e4.dir, a3), t: performance.now() }), r2.samples.length > 6 && r2.samples.shift();
              return;
            }
            if ("mouse" !== e3.pointerType || (F(a3 > ee && ev(1) ? 1 : a3 < ee && ev(-1) ? -1 : 0), R || Y.current && "peek" !== Y.current.mode))
              return;
            let i3 = (e4, r3) => 44 > Math.hypot(a3 - e4, t3 - r3), s2 = null;
            ev(1) && i3(2 * ee, ea) ? s2 = { dir: 1, cy: ea, mode: "peek" } : ev(1) && i3(2 * ee, 0) ? s2 = { dir: 1, cy: 0, mode: "peek" } : ev(-1) && i3(0, ea) ? s2 = { dir: -1, cy: ea, mode: "peek" } : ev(-1) && i3(0, 0) && (s2 = { dir: -1, cy: 0, mode: "peek" });
            let l2 = Y.current;
            if (s2 && (!l2 || l2.dir !== s2.dir || l2.cy !== s2.cy)) {
              ew(), es.set(s2.cy), er.set(ee), ei.set(s2.cy), K(s2);
              let e4 = { type: "spring", visualDuration: 0.35, bounce: 0.25 };
              O.current = [
                (0, d.i)(er, ee - 34, e4),
                (0, d.i)(ei, s2.cy + (s2.cy ? -26 : 26), e4)
              ];
            } else s2 || l2?.mode !== "peek" || ej(false);
          },
          onPointerUp: eM,
          onPointerCancel: eM,
          onPointerLeave: (e3) => {
            F(0), "mouse" !== e3.pointerType || Z.current || Y.current?.mode !== "peek" || ej(false);
          },
          onPointerEnter: (e3) => {
            "mouse" !== e3.pointerType || !N2 || Q || performance.now() - X.current < 2500 || ey(0.13);
          },
          children: [
            (0, r.jsx)("div", {
              className: `${f().slot} ${f().left}`,
              children: eR(eS)
            }),
            (0, r.jsx)("div", {
              className: `${f().slot} ${f().right}`,
              children: eR(ez)
            }),
            void 0 !== eC(2 * I - 1) && void 0 !== eC(2 * I) && !L && (0, r.jsx)("div", {
              className: f().gutter,
              "aria-hidden": "true"
            }),
            (0, r.jsx)("div", {
              className: `${f().edge} ${f().edgeLeft}`,
              "aria-hidden": "true",
              "data-on": eG || void 0,
              children: (0, r.jsx)("span", {
                className: f().cue,
                children: (0, r.jsx)(h.A, { size: 16, strokeWidth: 1.75 })
              })
            }),
            (0, r.jsx)("div", {
              className: `${f().edge} ${f().edgeRight}`,
              "aria-hidden": "true",
              "data-on": eq || void 0,
              children: (0, r.jsx)("span", {
                className: f().cue,
                children: (0, r.jsx)(u.A, { size: 16, strokeWidth: 1.75 })
              })
            }),
            null !== A2 && eq && (0, r.jsxs)("p", {
              className: f().hint,
              "data-hidden": Q || void 0,
              "aria-hidden": "true",
              children: [A2, (0, r.jsx)(m.A, { size: 14, strokeWidth: 1.75 })]
            }),
            L && (0, r.jsxs)("div", {
              className: f().turn,
              "data-dir": eT,
              "aria-hidden": "true",
              children: [
                (0, r.jsxs)(p.PY1.div, {
                  className: f().front,
                  style: { clipPath: eo },
                  children: [
                    (0, r.jsx)("div", {
                      className: -1 === eT ? f().mirror : void 0,
                      children: eR(eW)
                    }),
                    (0, r.jsx)(y, {
                      at: ed,
                      className: f().frontCurl,
                      opacity: ep
                    })
                  ]
                }),
                (0, r.jsx)(p.PY1.div, {
                  className: f().under,
                  style: { clipPath: en },
                  children: (0, r.jsx)(y, {
                    at: ed,
                    className: f().underShadow,
                    opacity: ep
                  })
                }),
                (0, r.jsx)("div", {
                  className: f().flapWrap,
                  children: (0, r.jsxs)(p.PY1.div, {
                    className: f().flap,
                    style: { clipPath: en, transform: ec },
                    children: [
                      (0, r.jsx)("div", {
                        className: 1 === eT ? f().mirror : void 0,
                        children: eL ? eR(eI) : (0, r.jsx)(j, { blank: true })
                      }),
                      (0, r.jsx)(y, { at: ed, className: f().flapCurl })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        $2 && (0, r.jsxs)("div", {
          className: f().controls,
          children: [
            (0, r.jsx)("button", {
              type: "button",
              className: f().control,
              onClick: () => eP(-1),
              disabled: !eG,
              "aria-label": "Previous page",
              children: (0, r.jsx)(h.A, { size: 18, strokeWidth: 1.75 })
            }),
            (0, r.jsxs)("p", {
              className: f().count,
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("span", { children: eB }),
                (0, r.jsx)("span", {
                  className: f().total,
                  children: 0 === I || null === eD ? `${e2.length} pages` : `of ${e2.length}`
                })
              ]
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: f().control,
              onClick: () => eP(1),
              disabled: !eq,
              "aria-label": "Next page",
              children: (0, r.jsx)(u.A, { size: 18, strokeWidth: 1.75 })
            })
          ]
        }),
        (0, r.jsx)("span", {
          className: f().status,
          role: "status",
          children: eF ? `Page ${eF} of ${e2.length}` : ""
        })
      ]
    });
  }
  function y({ at: e2, className: a2, opacity: t2 }) {
    return (0, r.jsx)(p.PY1.div, {
      className: `${f().shade} ${a2}`,
      style: { transform: e2, opacity: t2 }
    });
  }
  var k = t(67752), N = t(68224), A = t.n(N);
  function $({ id: e2, className: a2 }) {
    let { src: t2, alt: s2 } = (0, k.jW)(e2);
    return (0, r.jsx)("div", {
      className: [A().photo, a2].filter(Boolean).join(" "),
      children: (0, r.jsx)(i.default, {
        src: t2,
        alt: s2,
        fill: true,
        sizes: "260px",
        className: A().image
      })
    });
  }
  let M = [
    (0, r.jsxs)(
      "div",
      {
        className: A().cover,
        children: [
          (0, r.jsx)($, { id: "terracotta-waves", className: A().full }),
          (0, r.jsxs)("div", {
            className: A().coverText,
            children: [
              (0, r.jsx)("p", { className: A().issue, children: "Issue 04" }),
              (0, r.jsx)("p", {
                className: A().coverTitle,
                children: "Slow rooms"
              })
            ]
          })
        ]
      },
      "cover"
    ),
    (0, r.jsxs)(
      "div",
      {
        className: A().text,
        children: [
          (0, r.jsx)("p", {
            className: A().heading,
            children: "Rooms that take their time"
          }),
          (0, r.jsx)("p", {
            className: A().copy,
            children: "Six homes where light, texture, and a few good objects do the work. No trends, just places people love to spend a quiet afternoon."
          }),
          (0, r.jsx)("p", { className: A().folio, children: "2" })
        ]
      },
      "intro"
    ),
    (0, r.jsxs)(
      "div",
      {
        className: A().plate,
        children: [
          (0, r.jsx)($, { id: "sunroom", className: A().tall }),
          (0, r.jsx)("p", {
            className: A().caption,
            children: "A sunroom in Sintra, glass on three sides."
          }),
          (0, r.jsx)("p", { className: A().folio, children: "3" })
        ]
      },
      "sunroom"
    ),
    (0, r.jsxs)(
      "div",
      {
        className: A().plate,
        children: [
          (0, r.jsx)($, { id: "lounge-chair", className: A().tall }),
          (0, r.jsx)("p", {
            className: A().caption,
            children: "Woven oak and sheepskin, built to last decades."
          }),
          (0, r.jsx)("p", { className: A().folio, children: "4" })
        ]
      },
      "chair"
    ),
    (0, r.jsxs)(
      "div",
      {
        className: A().text,
        children: [
          (0, r.jsx)("p", {
            className: A().quote,
            children: "The best rooms are edited, not decorated."
          }),
          (0, r.jsx)("p", {
            className: A().copy,
            children: "Sofia Ramirez, interior designer"
          }),
          (0, r.jsx)("p", { className: A().folio, children: "5" })
        ]
      },
      "quote"
    ),
    (0, r.jsxs)(
      "div",
      {
        className: A().plate,
        children: [
          (0, r.jsx)($, { id: "ceramic-lamp", className: A().tall }),
          (0, r.jsx)("p", {
            className: A().caption,
            children: "A ceramic lamp on walnut, lit at dusk."
          }),
          (0, r.jsx)("p", { className: A().folio, children: "6" })
        ]
      },
      "lamp"
    ),
    (0, r.jsxs)(
      "div",
      {
        className: A().plate,
        children: [
          (0, r.jsx)($, { id: "bedroom", className: A().tall }),
          (0, r.jsx)("p", {
            className: A().caption,
            children: "Striped linen and an oak headboard."
          }),
          (0, r.jsx)("p", { className: A().folio, children: "7" })
        ]
      },
      "bedroom"
    ),
    (0, r.jsxs)(
      "div",
      {
        className: A().back,
        children: [
          (0, r.jsx)("p", { className: A().backTitle, children: "Slow rooms" }),
          (0, r.jsx)("p", {
            className: A().copy,
            children: "Next issue in spring"
          })
        ]
      },
      "back"
    )
  ];
  function P() {
    return (0, r.jsx)("div", {
      className: A().demo,
      children: (0, r.jsx)(b, {
        className: A().book,
        pages: M,
        label: "Slow rooms magazine"
      })
    });
  }
}

__m(__module,__exports,__require);
}