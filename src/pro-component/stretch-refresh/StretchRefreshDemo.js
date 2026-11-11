function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { StretchRefreshDemo: () => X });
  var a = r(95155), n = r(12115), s = r(5772), i = r(64962), o = r(95097), l = r(94890), c = r(25354), d = r(80642), u = r(18310), h = r(28245), p = r(55809), f = r(92171), m = r(64577), y = r(11012), _ = r(41189), g = r(7770), v = r(87914), x = r.n(v);
  let { spring: w, duration: j, ease: b, blur: k, stagger: N } = g.T, A = [...b.enter], T = [...b.standard], P = { duration: 0 }, M = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, L = { opacity: 0, y: "0.35em", filter: `blur(${k.soft}px)` }, E = { opacity: 0, scale: 0.5, filter: `blur(${k.subtle}px)` }, Y = (e2, t2 = 0) => e2 ? { duration: j.fast, scale: P, y: P, rotate: P, filter: P } : {
    ...w.snappy,
    delay: t2,
    opacity: { duration: j.fast, ease: A, delay: t2 },
    filter: { duration: j.fast, ease: A, delay: t2 }
  };
  function I({ reduced: e2 }) {
    return (0, a.jsx)("svg", {
      width: 14,
      height: 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.4,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(c.PY1.path, {
        d: "M4.5 12.5l4.8 4.8L19.5 7",
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: e2 ? { duration: 0 } : {
          pathLength: { duration: 0.32, ease: A, delay: 0.16 },
          opacity: { duration: 0.05, delay: 0.16 }
        }
      })
    });
  }
  function R({ text: e2, reduced: t2, className: r2 }) {
    return (0, a.jsx)("span", {
      className: [x().rise, r2].filter(Boolean).join(" "),
      children: (0, a.jsx)(d.N, {
        mode: "popLayout",
        initial: false,
        children: (0, a.jsx)(
          c.PY1.span,
          {
            className: x().riseItem,
            initial: L,
            animate: M,
            exit: {
              opacity: 0,
              y: "-0.3em",
              filter: `blur(${k.subtle}px)`,
              transition: { duration: j.instant, ease: T }
            },
            transition: t2 ? { duration: j.fast, y: P, filter: P } : { duration: j.standard, ease: A },
            children: e2
          },
          e2
        )
      })
    });
  }
  function S({ ref: e2, index: t2, reduced: r2, children: n2 }) {
    let s2 = 0.1 + Math.min(t2, 5) * N.line * 0.75;
    return (0, a.jsx)(c.PY1.li, {
      ref: e2,
      layout: "position",
      className: x().item,
      initial: { opacity: 0, y: -16, scale: 0.97, filter: `blur(${k.soft}px)` },
      animate: M,
      exit: {
        opacity: 0,
        scale: 0.97,
        filter: `blur(${k.subtle}px)`,
        transition: { duration: r2 ? j.instant : j.exit, ease: T }
      },
      transition: r2 ? { duration: j.fast, y: P, scale: P, filter: P, layout: P } : {
        y: { ...w.morph, delay: s2 },
        scale: { ...w.morph, delay: s2 },
        opacity: { duration: j.standard, ease: A, delay: s2 },
        filter: { duration: j.standard, ease: A, delay: s2 },
        layout: w.smooth
      },
      children: (0, a.jsx)("div", {
        className: x().row,
        style: { "--i": Math.min(t2, 6) },
        children: n2
      })
    });
  }
  function C({
    title: e2,
    subtitle: t2,
    items: r2,
    getKey: s2,
    renderItem: i2,
    onRefresh: o2,
    threshold: l2 = 72,
    doneLabel: g2 = "Up to date",
    errorLabel: v2 = "Couldn\u2019t refresh",
    refreshLabel: k2 = "Refresh",
    className: N2
  }) {
    let A2 = (0, u.I)() ?? false, L2 = (0, n.useId)(), z2 = (0, n.useRef)(null), [q2, W2] = (0, n.useState)("idle"), [O2, G2] = (0, n.useState)(null), B2 = (0, n.useRef)({
      phase: "idle",
      source: null,
      pulling: false,
      startY: 0,
      raw: 0,
      pointer: -1,
      lastWheel: -1e9,
      wheelTimer: 0,
      closeTimer: 0,
      suppressClick: false,
      alive: true
    }), $2 = (0, h.d)(0), D2 = (0, h.d)(0), J2 = (0, h.d)(0), U2 = (0, p.G)($2, (e3) => Math.min(1, e3 / l2)), V2 = (0, p.G)(J2, (e3) => `${150 * e3}%`), X2 = (0, p.G)($2, (e3) => (e3 - 34) / 2), F = (0, p.G)($2, [4, 28], [0, 1]), K = (0, p.G)($2, [0, 40], [0, 1]), Q = (e3) => {
      B2.current.phase = e3, W2(e3);
    };
    function Z(e3) {
      (0, f.i)(
        $2,
        e3,
        A2 ? P : { ...e3 ? w.morph : w.smooth, velocity: $2.getVelocity() }
      ), (0, f.i)(D2, 0, A2 ? P : { ...w.morph, velocity: D2.getVelocity() });
    }
    function H() {
      (0, f.i)($2, 0, A2 ? P : w.smooth).then(() => {
        B2.current.alive && "done" === B2.current.phase && (J2.set(0), Q("idle"));
      });
    }
    async function ee() {
      let e3, t3 = B2.current;
      if ("refreshing" === t3.phase || "done" === t3.phase) return;
      window.clearTimeout(t3.wheelTimer), t3.source = null, t3.pulling = false, t3.pointer = -1, Q("refreshing"), Z(60), J2.set(0), A2 || (0, f.i)(J2, 1, {
        duration: 0.7,
        ease: [...b.inOut],
        repeat: 1 / 0,
        repeatType: "mirror"
      });
      let r3 = z2.current;
      r3 && r3.scrollTop > 0 && r3.scrollTo({ top: 0, behavior: A2 ? "auto" : "smooth" });
      try {
        e3 = { ok: true, label: await o2() || g2 };
      } catch {
        e3 = { ok: false, label: v2 };
      }
      t3.alive && (J2.stop(), G2(e3), Q("done"), window.clearTimeout(t3.closeTimer), t3.closeTimer = window.setTimeout(H, e3.ok ? 1200 : 1800));
    }
    function et(e3) {
      let t3, r3 = B2.current;
      r3.raw = Math.max(0, e3);
      let a2 = 196 * (t3 = r3.raw) / (0.7 * t3 + 280);
      $2.set(a2), D2.set(a2);
      let n2 = a2 >= l2 ? "armed" : "pulling";
      r3.phase !== n2 && Q(n2);
    }
    function er(e3, t3) {
      let r3, a2 = B2.current;
      if (a2.source || "idle" !== a2.phase || !((z2.current?.scrollTop ?? 0) <= 0))
        return false;
      $2.stop(), D2.stop();
      let n2 = (r3 = $2.get()) >= 279 ? 11200 : 280 * r3 / (0.7 * (280 - r3));
      return a2.source = e3, a2.pulling = n2 > 0, a2.raw = n2, a2.startY = t3 - n2, true;
    }
    function ea(e3, t3) {
      let r3 = B2.current, a2 = e3 - r3.startY;
      if (!r3.pulling) {
        if (a2 < 0) return r3.source = null, r3.pointer = -1, false;
        if (a2 <= t3) return false;
        r3.pulling = true;
      }
      return et(a2), true;
    }
    function en() {
      let e3 = B2.current;
      if (!e3.source) return;
      let t3 = e3.pulling;
      if (window.clearTimeout(e3.wheelTimer), e3.source = null, e3.pulling = false, e3.pointer = -1, e3.raw = 0, t3) {
        if ("armed" === e3.phase) return void ee();
        Q("idle"), Z(0);
      }
    }
    let es = (0, n.useEffectEvent)(
      (e3) => (function(e4) {
        let t3 = B2.current, r3 = e4.deltaY * (1 === e4.deltaMode ? 16 : 2 === e4.deltaMode ? 400 : 1), a2 = e4.timeStamp - t3.lastWheel;
        if (t3.lastWheel = e4.timeStamp, "wheel" !== t3.source) {
          if (r3 >= 0 || a2 < 180 || Math.abs(e4.deltaX) > Math.abs(r3) || !er("wheel", 0))
            return;
          t3.pulling = true;
        }
        e4.preventDefault(), et(t3.raw - r3), window.clearTimeout(t3.wheelTimer), t3.raw <= 0 ? en() : t3.wheelTimer = window.setTimeout(en, 160);
      })(e3)
    ), ei = (0, n.useEffectEvent)((e3) => {
      1 === e3.touches.length && er("touch", e3.touches[0].clientY);
    }), eo = (0, n.useEffectEvent)((e3) => {
      "touch" === B2.current.source && 1 === e3.touches.length && ea(e3.touches[0].clientY, 0) && e3.cancelable && e3.preventDefault();
    }), el = (0, n.useEffectEvent)(() => {
      "touch" === B2.current.source && en();
    });
    function ec(e3) {
      let t3 = B2.current;
      "pointer" === t3.source && e3.pointerId === t3.pointer && (t3.pulling && (t3.suppressClick = true, window.setTimeout(() => {
        t3.suppressClick = false;
      }, 0)), en());
    }
    (0, n.useEffect)(() => {
      let e3 = z2.current, t3 = B2.current;
      if (t3.alive = true, !e3) return;
      let r3 = (e4) => es(e4), a2 = (e4) => ei(e4), n2 = (e4) => eo(e4), s3 = () => el();
      return e3.addEventListener("wheel", r3, { passive: false }), e3.addEventListener("touchstart", a2, { passive: true }), e3.addEventListener("touchmove", n2, { passive: false }), e3.addEventListener("touchend", s3), e3.addEventListener("touchcancel", s3), () => {
        t3.alive = false, J2.stop(), window.clearTimeout(t3.wheelTimer), window.clearTimeout(t3.closeTimer), e3.removeEventListener("wheel", r3), e3.removeEventListener("touchstart", a2), e3.removeEventListener("touchmove", n2), e3.removeEventListener("touchend", s3), e3.removeEventListener("touchcancel", s3);
      };
    }, [J2]);
    let ed = "armed" === q2, eu = "refreshing" === q2, eh = "done" === q2, ep = O2?.ok ?? true, ef = eu || eh, em = eh ? ep ? "done" : "error" : "refresh";
    return (0, a.jsxs)("section", {
      className: [x().root, N2].filter(Boolean).join(" "),
      "aria-labelledby": L2,
      "data-state": q2,
      "data-pulling": "pulling" === q2 || ed || void 0,
      children: [
        (0, a.jsxs)("header", {
          className: x().header,
          children: [
            (0, a.jsxs)("div", {
              className: x().heading,
              children: [
                (0, a.jsx)("h3", { id: L2, className: x().title, children: e2 }),
                t2 && (0, a.jsx)("p", {
                  className: x().subtitle,
                  children: (0, a.jsx)(R, { text: t2, reduced: A2 })
                })
              ]
            }),
            (0, a.jsx)("button", {
              type: "button",
              className: x().refresh,
              onClick: () => void ee(),
              "aria-label": k2,
              "aria-disabled": ef || void 0,
              "data-busy": eu || void 0,
              children: (0, a.jsx)("span", {
                className: x().refreshGlyph,
                children: (0, a.jsx)(d.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, a.jsx)(
                    c.PY1.span,
                    {
                      className: x().refreshIcon,
                      "data-tone": em,
                      initial: E,
                      animate: M,
                      exit: { ...E, transition: { duration: j.instant } },
                      transition: Y(A2),
                      children: "done" === em ? (0, a.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 2.2,
                        "aria-hidden": "true"
                      }) : "error" === em ? (0, a.jsx)(y.A, {
                        size: 16,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      }) : (0, a.jsx)(_.A, {
                        size: 16,
                        strokeWidth: 2,
                        "aria-hidden": "true",
                        className: x().refreshTurn
                      })
                    },
                    em
                  )
                })
              })
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: x().stage,
          children: [
            (0, a.jsx)("div", {
              className: x().tray,
              "aria-hidden": "true",
              children: (0, a.jsx)(c.PY1.div, {
                className: x().anchor,
                style: { y: X2, opacity: F },
                children: (0, a.jsxs)("div", {
                  className: x().indicator,
                  "data-tone": eh && !ep ? "warning" : void 0,
                  children: [
                    (0, a.jsxs)(c.PY1.span, {
                      className: x().meter,
                      initial: false,
                      animate: eh ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: ed && !A2 ? 1.12 : 1 },
                      transition: A2 ? { duration: j.fast } : eh ? { duration: j.exit, ease: T } : w.snappy,
                      children: [
                        (0, a.jsx)(c.PY1.span, {
                          className: x().meterFill,
                          style: { scaleX: U2 },
                          initial: false,
                          animate: { opacity: eu || eh ? 0 : 1 },
                          transition: { duration: j.fast }
                        }),
                        (0, a.jsx)(c.PY1.span, {
                          className: x().meterRun,
                          style: { x: V2 },
                          initial: false,
                          animate: { opacity: +!!eu },
                          transition: { duration: j.fast }
                        })
                      ]
                    }),
                    (0, a.jsxs)("span", {
                      className: x().status,
                      children: [
                        (0, a.jsx)(d.N, {
                          initial: false,
                          children: eh && (0, a.jsx)(
                            c.PY1.span,
                            {
                              className: x().mark,
                              initial: E,
                              animate: M,
                              exit: {
                                opacity: 0,
                                transition: { duration: j.instant }
                              },
                              transition: Y(A2, 0.06),
                              children: ep ? (0, a.jsx)(I, { reduced: A2 }) : (0, a.jsx)(y.A, {
                                size: 14,
                                strokeWidth: 2
                              })
                            },
                            ep ? "ok" : "error"
                          )
                        }),
                        (0, a.jsx)(R, {
                          text: eh && O2 ? O2.label : eu ? "Refreshing" : ed ? "Release to refresh" : "Pull to refresh",
                          reduced: A2
                        })
                      ]
                    })
                  ]
                })
              })
            }),
            (0, a.jsx)(c.PY1.div, {
              ref: z2,
              layoutScroll: true,
              className: x().viewport,
              style: { y: $2, "--peel": K },
              role: "region",
              "aria-labelledby": L2,
              tabIndex: 0,
              onPointerDown: function(e3) {
                if ("touch" === e3.pointerType || 0 !== e3.button) return;
                let t3 = e3.currentTarget;
                !(e3.clientX - t3.getBoundingClientRect().left > t3.clientWidth) && er("pointer", e3.clientY) && (B2.current.pointer = e3.pointerId);
              },
              onPointerMove: function(e3) {
                let t3 = B2.current;
                if ("pointer" !== t3.source || e3.pointerId !== t3.pointer) return;
                let r3 = !t3.pulling;
                ea(e3.clientY, 4) && r3 && (e3.currentTarget.setPointerCapture(e3.pointerId), window.getSelection()?.removeAllRanges());
              },
              onPointerUp: ec,
              onPointerCancel: ec,
              onClickCapture: function(e3) {
                B2.current.suppressClick && (e3.preventDefault(), e3.stopPropagation());
              },
              children: (0, a.jsx)(c.PY1.ul, {
                className: x().list,
                "aria-busy": eu || void 0,
                style: { "--tension": D2 },
                children: (0, a.jsx)(d.N, {
                  mode: "popLayout",
                  initial: false,
                  children: r2.map(
                    (e3, t3) => (0, a.jsx)(
                      S,
                      { index: t3, reduced: A2, children: i2(e3) },
                      s2(e3)
                    )
                  )
                })
              })
            })
          ]
        }),
        (0, a.jsx)("p", {
          className: x().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eu ? "Refreshing" : eh && O2 ? O2.label : ""
        })
      ]
    });
  }
  var z = r(4583), q = r.n(z);
  let W = (e2, t2) => ({
    name: e2,
    photo: `media/specials/stretch-refresh-${t2}.svg`
  }), O = W("Sarah Mitchell", "sarah-mitchell"), G = W("Marcus Reed", "marcus-reed"), B = W("Jenny Tran", "jenny-tran"), $ = W("Ethan Walsh", "ethan-walsh"), D = W("Ryan Torres", "ryan-torres"), J = [
    {
      id: "a1",
      who: O,
      action: "merged",
      target: "Retry failed card payments",
      meta: "Checkout \xB7 14 min ago"
    },
    {
      id: "a2",
      who: { name: "Build 2481", icon: i.A, tone: "success" },
      action: "passed on",
      target: "staging",
      meta: "Deploys \xB7 22 min ago"
    },
    {
      id: "a3",
      who: G,
      action: "commented on",
      target: "Q4 roadmap",
      quote: "Can search move to week 3? Filters depend on it.",
      meta: "Planning \xB7 38 min ago"
    },
    {
      id: "a4",
      who: { name: "Halden Supply", icon: o.A, tone: "neutral" },
      action: "paid invoice",
      target: "INV-2043",
      meta: "$4,820.00 \xB7 1 hr ago"
    },
    {
      id: "a5",
      who: B,
      action: "added a photo to",
      target: "Spring lookbook",
      attachment: {
        src: "media/specials/stretch-refresh-living-room.jpg",
        alt: "A living room with tan leather chairs around a low fireplace"
      },
      meta: "Brand \xB7 2 hr ago"
    },
    {
      id: "a6",
      who: $,
      action: "closed",
      target: "Safari date picker jumps",
      meta: "Web app \xB7 3 hr ago"
    },
    {
      id: "a7",
      who: D,
      action: "published",
      target: "September release notes",
      meta: "Docs \xB7 Yesterday"
    }
  ], U = [
    [
      {
        id: "b1",
        who: $,
        action: "replied on",
        target: "Retry failed card payments",
        quote: "Shipping it after lunch.",
        meta: "Checkout \xB7 Just now"
      },
      {
        id: "b2",
        who: { name: "Build 2482", icon: l.A, tone: "danger" },
        action: "failed on",
        target: "main",
        meta: "2 checkout tests \xB7 Just now"
      },
      {
        id: "b3",
        who: D,
        action: "requested your review on",
        target: "Search filters",
        meta: "Web app \xB7 Just now"
      }
    ],
    [
      {
        id: "c1",
        who: B,
        action: "added a photo to",
        target: "Big Sur offsite",
        attachment: {
          src: "media/specials/stretch-refresh-coastline.jpg",
          alt: "A modern house on a rocky coastline above a calm blue sea"
        },
        meta: "Events \xB7 Just now"
      }
    ],
    [
      {
        id: "d1",
        who: { name: "Northwind Co.", icon: o.A, tone: "neutral" },
        action: "paid invoice",
        target: "INV-2051",
        meta: "$1,260.00 \xB7 Just now"
      },
      {
        id: "d2",
        who: G,
        action: "assigned you",
        target: "Empty state copy",
        meta: "Planning \xB7 Just now"
      }
    ]
  ];
  function V({ item: e2, unread: t2 }) {
    let { who: r2 } = e2;
    return (0, a.jsxs)("div", {
      className: q().entry,
      children: [
        (0, a.jsx)("span", {
          className: q().avatar,
          "data-kind": "photo" in r2 ? "photo" : "icon",
          "data-tone": "tone" in r2 ? r2.tone : void 0,
          children: "photo" in r2 ? (0, a.jsx)(s.default, {
            src: r2.photo,
            alt: "",
            width: 32,
            height: 32,
            sizes: "32px",
            draggable: false
          }) : (0, a.jsx)(r2.icon, {
            size: 20,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, a.jsxs)("div", {
          className: q().body,
          children: [
            (0, a.jsxs)("p", {
              className: q().line,
              children: [
                t2 && (0, a.jsx)("span", {
                  className: q().srOnly,
                  children: "New. "
                }),
                (0, a.jsx)("span", { className: q().name, children: r2.name }),
                " ",
                e2.action,
                " ",
                (0, a.jsx)("span", { className: q().name, children: e2.target })
              ]
            }),
            e2.quote && (0, a.jsxs)("p", {
              className: q().quote,
              children: ["\u201C", e2.quote, "\u201D"]
            }),
            e2.attachment && (0, a.jsx)("span", {
              className: q().attachment,
              children: (0, a.jsx)(s.default, {
                src: e2.attachment.src,
                alt: e2.attachment.alt,
                fill: true,
                sizes: "(max-width: 480px) 60vw, 240px",
                draggable: false
              })
            }),
            (0, a.jsx)("p", { className: q().meta, children: e2.meta })
          ]
        }),
        (0, a.jsx)("span", {
          className: q().dot,
          "data-on": t2 || void 0,
          "aria-hidden": "true"
        })
      ]
    });
  }
  function X() {
    let [e2, t2] = (0, n.useState)(J), [r2, s2] = (0, n.useState)(0), [i2, o2] = (0, n.useState)(() => /* @__PURE__ */ new Set());
    async function l2() {
      await new Promise((e4) => window.setTimeout(e4, 1150));
      let e3 = U[r2] ?? [];
      return (s2((e4) => e4 + 1), o2(new Set(e3.map((e4) => e4.id))), e3.length) ? (t2((t3) => [...e3, ...t3]), `${e3.length} new ${1 === e3.length ? "update" : "updates"}`) : "You\u2019re up to date";
    }
    return (0, a.jsxs)("div", {
      className: q().demo,
      children: [
        (0, a.jsx)(C, {
          className: q().feed,
          title: "Brightline activity",
          subtitle: r2 ? "Updated just now" : "Updated 14 min ago",
          items: e2,
          getKey: (e3) => e3.id,
          renderItem: (e3) => (0, a.jsx)(V, { item: e3, unread: i2.has(e3.id) }),
          onRefresh: l2,
          refreshLabel: "Refresh activity"
        }),
        (0, a.jsxs)("div", {
          className: q().footer,
          children: [
            (0, a.jsx)("span", {}),
            (0, a.jsx)("button", {
              type: "button",
              className: q().reset,
              onClick: function() {
                t2(J), s2(0), o2(/* @__PURE__ */ new Set());
              },
              disabled: !r2,
              children: "Reset"
            })
          ]
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}