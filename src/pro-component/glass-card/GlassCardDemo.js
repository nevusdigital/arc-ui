function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { GlassCardDemo: () => k, default: () => x });
  var s = i(95155), t = i(12115), n = i(95697), l = i(64577), o = i(18310), r = i(28245), d = i(22535), c = i(25354), h = i(57700), g = i(80642), m = i(7770), p = i(83146), u = i.n(p);
  let w = m.T.spring.morph, b = { stiffness: 260, damping: 24, mass: 0.6 };
  function f({
    image: e2,
    imageAlt: a2,
    title: i2,
    subtitle: n2,
    aside: l2,
    children: p2,
    open: j2,
    defaultOpen: v2 = false,
    onOpenChange: _2,
    tilt: y2 = 6,
    className: k2,
    style: x2
  }) {
    let A = !!(0, o.I)(), N = (0, t.useId)(), C = `${N}-detail`, [z, M] = (0, t.useState)(v2), T = j2 ?? z, P = (0, t.useRef)(null), R = (0, t.useRef)(null), D = (0, t.useCallback)(
      (e3) => {
        void 0 === j2 && M(e3), _2?.(e3);
      },
      [j2, _2]
    ), B = (0, t.useRef)(null), F = (0, r.d)(-400), L = (0, r.d)(-400), S = (0, d.z)(0, b), W = (0, d.z)(0, b), X = (0, d.z)(0, { stiffness: 200, damping: 30 }), E = (0, t.useCallback)(() => {
      S.set(0), W.set(0), X.set(0);
    }, [S, W, X]);
    (0, t.useEffect)(() => {
      T && E();
    }, [T, E]);
    let Y = A ? { duration: 0 } : w;
    return (0, s.jsxs)(c.PY1.div, {
      ref: P,
      className: [u().root, k2].filter(Boolean).join(" "),
      style: { ...x2, rotateX: S, rotateY: W, transformPerspective: 900 },
      "data-open": T || void 0,
      onPointerMove: (e3) => {
        let a3 = P.current, i3 = B.current;
        if (!a3 || !i3 || "touch" === e3.pointerType) return;
        let s2 = a3.getBoundingClientRect(), t2 = i3.getBoundingClientRect(), n3 = Math.min(1, Math.max(0, (e3.clientX - s2.left) / s2.width)), l3 = Math.min(1, Math.max(0, (e3.clientY - s2.top) / s2.height));
        F.set(e3.clientX - t2.left), L.set(e3.clientY - t2.top), X.set(1), A || T || y2 <= 0 || (W.set((n3 - 0.5) * 2 * y2), S.set((0.5 - l3) * 2 * y2));
      },
      onPointerLeave: E,
      onClick: (e3) => {
        let a3 = e3.target;
        a3.closest("[data-glass-card-detail]") || a3.closest("[data-glass-card-toggle]") || D(!T);
      },
      onKeyDown: (e3) => {
        "Escape" === e3.key && T && (e3.preventDefault(), D(false), R.current?.focus());
      },
      children: [
        (0, s.jsx)("img", {
          src: e2,
          alt: a2,
          className: u().image,
          draggable: false
        }),
        (0, s.jsx)("div", { className: u().scrim, "aria-hidden": true }),
        (0, s.jsx)(h.o, {
          id: N,
          children: (0, s.jsxs)(c.PY1.div, {
            ref: B,
            layout: true,
            transition: Y,
            className: u().panel,
            style: { "--gx": F, "--gy": L, "--glare": X, borderRadius: 22 },
            children: [
              (0, s.jsx)("span", { className: u().edge, "aria-hidden": true }),
              (0, s.jsxs)(c.PY1.button, {
                ref: R,
                layout: "position",
                transition: Y,
                type: "button",
                className: u().header,
                "data-glass-card-toggle": true,
                "aria-expanded": T,
                "aria-controls": C,
                onClick: () => D(!T),
                children: [
                  (0, s.jsxs)("span", {
                    className: u().titles,
                    children: [
                      (0, s.jsx)("span", { className: u().title, children: i2 }),
                      n2 ? (0, s.jsx)("span", {
                        className: u().subtitle,
                        children: n2
                      }) : null
                    ]
                  }),
                  l2 ? (0, s.jsx)("span", { className: u().aside, children: l2 }) : null
                ]
              }),
              (0, s.jsx)(g.N, {
                initial: false,
                mode: "popLayout",
                children: T ? (0, s.jsx)(
                  c.PY1.div,
                  {
                    id: C,
                    layout: "position",
                    transition: Y,
                    className: u().detail,
                    "data-glass-card-detail": true,
                    initial: A ? { opacity: 0 } : {
                      opacity: 0,
                      y: 10,
                      filter: `blur(${m.T.blur.soft}px)`
                    },
                    animate: A ? { opacity: 1 } : {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { ...w, delay: 0.06 }
                    },
                    exit: A ? { opacity: 0 } : {
                      opacity: 0,
                      y: 6,
                      filter: `blur(${m.T.blur.subtle}px)`,
                      transition: {
                        duration: m.T.duration.instant,
                        ease: m.T.ease.standard
                      }
                    },
                    children: p2
                  },
                  "detail"
                ) : null
              })
            ]
          })
        })
      ]
    });
  }
  var j = i(67752), v = i(39681), _ = i.n(v);
  let y = (0, j.MV)("jasmine-brooks");
  function k() {
    let [e2, a2] = (0, t.useState)(false), [i2, o2] = (0, t.useState)(false);
    return (0, s.jsx)("div", {
      className: _().demo,
      children: (0, s.jsxs)(f, {
        image: (0, j.o4)("jasmine-brooks"),
        imageAlt: `Portrait of ${y.name}`,
        title: y.name,
        subtitle: "Design lead, Lisbon",
        aside: (0, s.jsxs)("span", {
          className: _().rating,
          children: [
            (0, s.jsx)(n.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": true,
              className: _().star
            }),
            "4.9"
          ]
        }),
        children: [
          (0, s.jsx)("p", {
            className: _().bio,
            children: "Leads design systems at Meridian. Mentors on motion, type, and shipping small teams fast."
          }),
          (0, s.jsxs)("dl", {
            className: _().stats,
            children: [
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("dt", { children: "Sessions" }),
                  (0, s.jsx)("dd", { children: "128" })
                ]
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("dt", { children: "Followers" }),
                  (0, s.jsx)("dd", { children: e2 ? "12.5k" : "12.4k" })
                ]
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("dt", { children: "Replies in" }),
                  (0, s.jsx)("dd", { children: "2 h" })
                ]
              })
            ]
          }),
          (0, s.jsxs)("div", {
            className: _().actions,
            children: [
              (0, s.jsx)("button", {
                type: "button",
                className: _().primary,
                "data-on": e2 || void 0,
                "aria-pressed": e2,
                onClick: () => a2((e3) => !e3),
                children: e2 ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(l.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    "Following"
                  ]
                }) : "Follow"
              }),
              (0, s.jsx)("button", {
                type: "button",
                className: _().secondary,
                "data-on": i2 || void 0,
                "aria-pressed": i2,
                onClick: () => o2((e3) => !e3),
                children: i2 ? "Requested" : "Book a session"
              })
            ]
          })
        ]
      })
    });
  }
  let x = k;
}

__m(__module,__exports,__require);
}