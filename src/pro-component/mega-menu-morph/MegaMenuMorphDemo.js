function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { MegaMenuMorphDemo: () => el, default: () => eo });
  var r = a(95155), n = a(12115), i = a(18310), s = a(80642), l = a(25354), o = a(79196), u = a(28245), c = a(20122), m = a(92171), d = a(71019), h = a(78912), p = a(85974), f = a(9383), g = a(50981), _ = a(36483), v = a(44825), x = a(22350), y = a(19707), b = a(93089), k = a(57465), j = a(16720), N = a(49804), w = a(40557), A = a(94179), T = a(72974), C = a(54757), R = a(52957), P = a(12572), E = a(90467), L = a(12363), D = a(9005), S = a(96304), I = a(7770), M = a(5834), B = a.n(M);
  let F = (e2) => (0, r.jsx)(e2, { "aria-hidden": "true" }), $ = [
    {
      value: "products",
      label: "Products",
      groups: [
        {
          title: "Payments",
          links: [
            {
              label: "Checkout",
              description: "Hosted pages in 46 currencies",
              icon: F(d.A),
              href: "#checkout"
            },
            {
              label: "Billing",
              description: "Subscriptions, usage and invoices",
              icon: F(h.A),
              href: "#billing"
            },
            {
              label: "Terminal",
              description: "In person payments on any reader",
              icon: F(p.A),
              href: "#terminal"
            }
          ]
        },
        {
          title: "Operations",
          links: [
            {
              label: "Payouts",
              description: "Pay sellers and contractors daily",
              icon: F(f.A),
              href: "#payouts",
              badge: "New"
            },
            {
              label: "Risk",
              description: "Fraud scoring trained on your traffic",
              icon: F(g.A),
              href: "#risk"
            },
            {
              label: "Reports",
              description: "Reconcile every payout to the cent",
              icon: F(_.A),
              href: "#reports"
            }
          ]
        }
      ],
      feature: {
        title: "Instant payouts in the EU",
        description: "Sellers in 27 countries now get paid in seconds, weekends included.",
        cta: "Read the announcement",
        href: "#instant-payouts"
      }
    },
    {
      value: "solutions",
      label: "Solutions",
      groups: [
        {
          title: "By stage",
          links: [
            { label: "Startups", icon: F(v.A), href: "#startups" },
            { label: "Enterprises", icon: F(x.A), href: "#enterprises" },
            { label: "Platforms", icon: F(y.A), href: "#platforms" }
          ]
        },
        {
          title: "By industry",
          links: [
            { label: "Software", icon: F(b.A), href: "#software" },
            { label: "Marketplaces", icon: F(k.A), href: "#marketplaces" },
            { label: "Retail", icon: F(j.A), href: "#retail" }
          ]
        }
      ]
    },
    {
      value: "developers",
      label: "Developers",
      groups: [
        {
          title: "Documentation",
          links: [
            {
              label: "Quickstart",
              description: "Take a first payment in 10 minutes",
              icon: F(N.A),
              href: "#quickstart"
            },
            {
              label: "API reference",
              description: "Every endpoint, with live examples",
              icon: F(w.A),
              href: "#api"
            }
          ]
        },
        {
          title: "Tools",
          links: [
            {
              label: "CLI",
              description: "Replay webhooks from your terminal",
              icon: F(A.A),
              href: "#cli"
            },
            {
              label: "Webhooks",
              description: "Signed events with automatic retries",
              icon: F(T.A),
              href: "#webhooks"
            }
          ]
        }
      ],
      footer: (0, r.jsxs)("span", {
        className: B().status,
        children: [
          (0, r.jsx)("span", {
            className: B().statusDot,
            "aria-hidden": "true"
          }),
          "All systems normal",
          (0, r.jsx)("span", {
            className: B().statusMeta,
            children: "API uptime 99.998% over 90 days"
          })
        ]
      })
    },
    {
      value: "company",
      label: "Company",
      groups: [
        {
          links: [
            { label: "About", icon: F(C.A), href: "#about" },
            { label: "Customers", icon: F(k.A), href: "#customers" },
            {
              label: "Careers",
              icon: F(R.A),
              href: "#careers",
              badge: "12 open roles"
            },
            { label: "Press", icon: F(P.A), href: "#press" }
          ]
        }
      ],
      footer: (0, r.jsx)("span", {
        className: B().footerNote,
        children: "Offices in Zurich, Lisbon and New York"
      })
    },
    { value: "pricing", label: "Pricing", href: "#pricing" }
  ], O = [
    { label: "Sign in", href: "#sign-in" },
    { label: "Start now", href: "#start", variant: "primary" }
  ], Y = {
    name: "Tally",
    href: "#home",
    mark: (0, r.jsxs)("svg", {
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("rect", {
          x: "2",
          y: "2",
          width: "16",
          height: "16",
          rx: "5",
          fill: "currentColor"
        }),
        (0, r.jsx)("path", {
          d: "M6.5 7.5h7M10 7.5v6",
          stroke: "var(--background)",
          strokeWidth: "1.9",
          strokeLinecap: "round"
        })
      ]
    })
  }, q = [...I.T.ease.standard], W = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, G = W(0.42, 0), K = W(0.36, 0), H = W(0.4, 0), z = W(0.32, 0), U = W(0.42, 0), V = {
    hidden: (e2) => ({
      opacity: 0,
      x: 36 * e2,
      filter: `blur(${I.T.blur.subtle}px)`
    }),
    shown: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        x: U,
        opacity: { duration: I.T.duration.standard, ease: q, delay: 0.05 },
        filter: { duration: I.T.duration.standard, ease: q, delay: 0.05 }
      }
    },
    gone: (e2) => ({
      opacity: 0,
      x: -(36 * e2 * 0.6),
      filter: `blur(${I.T.blur.subtle}px)`,
      transition: {
        x: U,
        opacity: { duration: I.T.duration.fast, ease: q },
        filter: { duration: I.T.duration.fast, ease: q }
      }
    })
  }, Q = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.14 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  }, X = () => () => {
  }, Z = (e2, t2, a2) => Math.min(Math.max(e2, t2), Math.max(t2, a2)), J = (e2) => !!(e2.groups?.length || e2.feature);
  function ee({
    id: e2,
    direction: t2,
    reduced: a2,
    onSize: i2,
    active: s2,
    children: u2
  }) {
    let c2 = (0, n.useRef)(null), m2 = (0, o.tF)();
    return (0, n.useLayoutEffect)(() => {
      let t3 = c2.current;
      if (!t3 || !m2) return;
      let a3 = () => {
        let a4 = t3.querySelector("[data-mm-body]"), r3 = t3.querySelector("[data-mm-footer]"), n2 = r3?.offsetHeight ?? 0;
        i2(e2, { w: t3.offsetWidth, h: (a4?.offsetHeight ?? 0) + n2, footer: n2 });
      };
      if (a3(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(a3);
      for (let e3 of Array.from(t3.children)) r2.observe(e3);
      return () => r2.disconnect();
    }, [e2, i2, m2]), (0, r.jsx)(l.PY1.div, {
      ref: c2,
      className: B().face,
      custom: t2,
      variants: a2 ? Q : V,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      inert: !m2 || void 0,
      "data-mm-active": s2 && m2 ? "" : void 0,
      children: u2
    });
  }
  function et({ item: e2, onPick: t2 }) {
    let { feature: a2 } = e2;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsxs)("div", {
          className: B().faceBody,
          "data-mm-body": "",
          children: [
            e2.groups?.map(
              (a3, n2) => (0, r.jsxs)(
                "div",
                {
                  className: B().group,
                  children: [
                    a3.title ? (0, r.jsx)("p", {
                      className: B().groupTitle,
                      children: a3.title
                    }) : null,
                    (0, r.jsx)("ul", {
                      className: B().links,
                      "data-dense": a3.links.every((e3) => !e3.description) || void 0,
                      children: a3.links.map(
                        (a4) => (0, r.jsx)(
                          "li",
                          {
                            children: (0, r.jsxs)("a", {
                              className: B().link,
                              href: a4.href ?? "#",
                              "data-mm-link": "",
                              onClick: (r2) => t2(r2, {
                                label: a4.label,
                                href: a4.href,
                                section: e2.value
                              }),
                              children: [
                                a4.icon ? (0, r.jsx)("span", {
                                  className: B().linkIcon,
                                  children: a4.icon
                                }) : null,
                                (0, r.jsxs)("span", {
                                  className: B().linkText,
                                  children: [
                                    (0, r.jsxs)("span", {
                                      className: B().linkLabel,
                                      children: [
                                        a4.label,
                                        a4.badge ? (0, r.jsx)("span", {
                                          className: B().badge,
                                          children: a4.badge
                                        }) : null
                                      ]
                                    }),
                                    a4.description ? (0, r.jsx)("span", {
                                      className: B().linkDescription,
                                      children: a4.description
                                    }) : null
                                  ]
                                })
                              ]
                            })
                          },
                          a4.label
                        )
                      )
                    })
                  ]
                },
                a3.title ?? n2
              )
            ),
            a2 ? (0, r.jsxs)("a", {
              className: B().feature,
              href: a2.href ?? "#",
              "data-mm-link": "",
              onClick: (r2) => t2(r2, { label: a2.title, href: a2.href, section: e2.value }),
              children: [
                a2.media ? (0, r.jsx)("span", {
                  className: B().featureMedia,
                  children: a2.media
                }) : (0, r.jsxs)("span", {
                  className: B().featureArt,
                  "aria-hidden": "true",
                  children: [
                    (0, r.jsx)("span", {}),
                    (0, r.jsx)("span", {}),
                    (0, r.jsx)("span", {})
                  ]
                }),
                (0, r.jsx)("span", {
                  className: B().featureTitle,
                  children: a2.title
                }),
                a2.description ? (0, r.jsx)("span", {
                  className: B().featureDescription,
                  children: a2.description
                }) : null,
                a2.cta ? (0, r.jsxs)("span", {
                  className: B().featureCta,
                  children: [
                    a2.cta,
                    (0, r.jsx)(E.A, { "aria-hidden": "true" })
                  ]
                }) : null
              ]
            }) : null
          ]
        }),
        e2.footer ? (0, r.jsx)("div", {
          className: B().faceFooter,
          "data-mm-footer": "",
          children: e2.footer
        }) : null
      ]
    });
  }
  function ea({
    items: e2 = $,
    brand: t2 = Y,
    actions: a2 = O,
    value: o2,
    defaultValue: d2 = null,
    onValueChange: h2,
    current: p2,
    openDelay: f2 = 90,
    closeDelay: g2 = 240,
    collapseBelow: _2 = "auto",
    showSafeArea: v2 = false,
    onNavigate: x2,
    label: y2 = "Main",
    className: b2,
    style: k2
  }) {
    let j2, N2 = (j2 = (0, n.useSyncExternalStore)(
      X,
      () => true,
      () => false
    ), !!(0, i.I)() && j2), w2 = (0, n.useId)(), [A2, T2] = (function(e3, t3, a3) {
      let [r2, i2] = (0, n.useState)(t3), s2 = void 0 !== e3;
      return [
        s2 ? e3 : r2,
        (0, n.useCallback)(
          (e4) => {
            s2 || i2(e4), a3?.(e4);
          },
          [s2, a3]
        )
      ];
    })(o2, d2, h2), [C2, R2] = (0, n.useState)(null), [P2, M2] = (0, n.useState)(0), [F2, W2] = (0, n.useState)(false), [V2, Q2] = (0, n.useState)(false), [er2, en2] = (0, n.useState)(null), ei2 = (0, n.useRef)(null), es2 = (0, n.useRef)(null), el2 = (0, n.useRef)(null), eo2 = (0, n.useRef)(null), eu = (0, n.useRef)(null), ec = (0, n.useRef)(/* @__PURE__ */ new Map()), em = (0, n.useRef)(/* @__PURE__ */ new Map()), ed = (0, n.useRef)(A2), eh = (0, n.useRef)(false), ep = (0, n.useRef)({}), ef = (0, n.useRef)([]), eg = (0, n.useRef)(0), e_ = (0, n.useRef)(false), ev = (0, n.useRef)(-1 / 0), ex = (0, n.useRef)(false), ey = (0, n.useRef)(null), eb = (e3) => {
      ey.current = e3, R2(e3);
    }, ek = (0, u.d)(0), ej = (0, u.d)(0), eN = (0, u.d)(0), ew = (0, u.d)(0), eA = (0, u.d)(0), eT = (0, u.d)(0), eC = (0, u.d)(0), eR = (0, u.d)(0), eP = (0, c.E)`${eA}px 0px`, eE = e2.filter(J), eL = (t3) => e2.findIndex((e3) => e3.value === t3), eD = (e3) => {
      window.clearTimeout(ep.current[e3]), ep.current[e3] = void 0;
    };
    (0, n.useEffect)(
      () => () => {
        let e3 = ep.current;
        window.clearTimeout(e3.open), window.clearTimeout(e3.close), window.clearTimeout(e3.aim);
      },
      []
    );
    let eS = (0, n.useCallback)(
      (e3, t3) => {
        let a3 = ei2.current, r2 = ec.current.get(e3), n2 = em.current.get(e3);
        if (!a3 || !r2 || !n2) return;
        let i2 = a3.clientWidth, s2 = Math.min(n2.w, i2 - 16), l2 = r2.offsetLeft + (es2.current?.offsetLeft ?? 0) + r2.offsetWidth / 2, o3 = Z(l2 - s2 / 2, 8, i2 - 8 - s2), u2 = Z(l2 - o3, 26, s2 - 26);
        t3 && (ev.current = performance.now());
        let c2 = performance.now() - ev.current < 200;
        if (t3 || c2 || N2) {
          let a4 = [
            [ek, o3],
            [ej, s2],
            [eN, n2.h],
            [ew, n2.footer],
            [eA, u2]
          ], r3 = () => {
            for (let [e4, t4] of a4) e4.stop(), e4.set(t4);
          };
          r3(), t3 && requestAnimationFrame(() => {
            ed.current === e3 && ej.get() !== s2 && r3();
          });
          return;
        }
        (0, m.i)(ej, s2, s2 >= ej.get() ? G : K);
        let d3 = n2.h >= eN.get() ? G : K;
        (0, m.i)(eN, n2.h, d3), (0, m.i)(ew, n2.footer, d3), (0, m.i)(ek, o3, H), (0, m.i)(eA, u2, H);
      },
      [ew, eA, eN, ej, ek, N2]
    ), eI = (0, n.useCallback)(
      (e3, t3) => {
        em.current.set(e3, t3), ed.current === e3 && (eS(e3, !eh.current), eh.current = true);
      },
      [eS]
    ), eM = (0, n.useCallback)(
      (e3) => {
        let t3 = ed.current;
        e3 !== t3 && (e3 && t3 ? M2(Math.sign(eL(e3) - eL(t3))) : M2(0), ed.current = e3, T2(e3), e3 && em.current.has(e3) && (eS(e3, !eh.current), eh.current = true));
      },
      [eS, T2, e2]
    ), eB = (0, n.useRef)(eM);
    (0, n.useLayoutEffect)(() => {
      eB.current = eM;
    }), (0, n.useLayoutEffect)(() => {
      if (ed.current === A2) return;
      let e3 = ed.current;
      ed.current = A2, A2 && e3 && M2(Math.sign(eL(A2) - eL(e3))), A2 && em.current.has(A2) && (eS(A2, !eh.current), eh.current = true);
    }, [A2]);
    let eF = C2 ?? (F2 ? null : A2);
    (0, n.useLayoutEffect)(() => {
      let e3 = eF ? ec.current.get(eF) : void 0;
      if (!e3) return void (0, m.i)(eR, 0, { duration: 0.18, ease: q });
      if (!(eR.get() > 0.35) || N2) {
        eT.stop(), eC.stop(), eT.set(e3.offsetLeft), eC.set(e3.offsetWidth), (0, m.i)(eR, 1, { duration: 0.16 * !N2, ease: q });
        return;
      }
      (0, m.i)(eR, 1, { duration: 0.12, ease: q }), (0, m.i)(eT, e3.offsetLeft, z), (0, m.i)(eC, e3.offsetWidth, z);
    }, [eF, F2, N2, eR, eC, eT]), (0, n.useLayoutEffect)(() => {
      let e3 = ei2.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = e3.clientWidth, a4 = el2.current?.offsetWidth ?? 0, r2 = "auto" === _2 ? a4 > t4 : t4 < _2;
        r2 !== ex.current ? (ex.current = r2, W2(r2), R2(null), r2 ? eB.current(null) : Q2(false)) : ed.current && eS(ed.current, true);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), el2.current && a3.observe(el2.current), () => a3.disconnect();
    }, [_2, eS]);
    let e$ = (e3 = g2) => {
      eD("open"), eD("aim"), ed.current && !ep.current.close && (ep.current.close = window.setTimeout(() => {
        ep.current.close = void 0, eM(null);
      }, e3));
    }, eO = () => eD("close"), eY = () => {
      var e3, t3;
      let a3, r2, n2, i2, s2 = eo2.current, l2 = ei2.current, o3 = ef.current;
      if (!s2 || !l2 || o3.length < 2) return false;
      let u2 = o3[o3.length - 1], c2 = o3.find((e4) => u2.t - e4.t < 120) ?? o3[0];
      if (3 > Math.hypot(u2.x - c2.x, u2.y - c2.y)) return false;
      let m2 = s2.getBoundingClientRect(), d3 = [
        { x: m2.left - 4, y: m2.top },
        { x: m2.right + 4, y: m2.top }
      ];
      return u2.y >= c2.y - 1 && (e3 = d3[0], t3 = d3[1], r2 = (a3 = (e4, t4, a4) => (e4.x - a4.x) * (t4.y - a4.y) - (t4.x - a4.x) * (e4.y - a4.y))(u2, c2, e3), n2 = a3(u2, e3, t3), i2 = a3(u2, t3, c2), !((r2 < -1 || n2 < -1 || i2 < -1) && (r2 > 1 || n2 > 1 || i2 > 1)));
    }, eq = (e3, t3) => {
      x2 && (e3.preventDefault(), x2(t3)), eD("open"), eD("close"), eD("aim"), eM(null), Q2(false);
    }, eW = () => e2.map((e3) => ec.current.get(e3.value)).filter((e3) => !!e3), eG = () => Array.from(
      eo2.current?.querySelectorAll("[data-mm-active] [data-mm-link]") ?? []
    ), eK = (e3) => {
      let t3 = eG();
      return !!t3.length && (("first" === e3 ? t3[0] : t3[t3.length - 1]).focus(), true);
    };
    (0, n.useEffect)(() => {
      if (!A2 || !e_.current) return;
      let e3 = requestAnimationFrame(() => {
        e_.current && eK("first") && (e_.current = false);
      });
      return () => cancelAnimationFrame(e3);
    }), (0, n.useEffect)(() => {
      if (!A2 && !V2) return;
      let e3 = (e4) => {
        ei2.current?.contains(e4.target) || (eM(null), Q2(false));
      }, t3 = (e4) => {
        "Escape" === e4.key && V2 && (Q2(false), ei2.current?.querySelector("[data-mm-toggle]")?.focus());
      };
      return document.addEventListener("pointerdown", e3), document.addEventListener("keydown", t3), () => {
        document.removeEventListener("pointerdown", e3), document.removeEventListener("keydown", t3);
      };
    }, [A2, V2, eM]);
    let eH = e2.find((e3) => e3.value === A2 && J(e3)), ez = `${w2}-menu`, eU = (e3) => (0, r.jsxs)("a", {
      className: B().brand,
      href: t2.href ?? "#",
      tabIndex: e3 ? -1 : void 0,
      onClick: (a3) => {
        e3 || eq(a3, { label: t2.name, href: t2.href });
      },
      children: [
        t2.mark ? (0, r.jsx)("span", {
          className: B().brandMark,
          children: t2.mark
        }) : null,
        (0, r.jsx)("span", { className: B().brandName, children: t2.name })
      ]
    }), eV = (e3, t3 = a2) => t3.map(
      (t4) => (0, r.jsx)(
        "a",
        {
          className: "primary" === t4.variant ? B().primary : B().quiet,
          href: t4.href ?? "#",
          tabIndex: e3 ? -1 : void 0,
          onPointerEnter: e3 ? void 0 : () => e$(),
          onClick: (a3) => {
            e3 || (t4.onClick?.(), eq(a3, { label: t4.label, href: t4.href }));
          },
          children: t4.label
        },
        t4.label
      )
    ), eQ = a2.filter((e3) => "primary" === e3.variant);
    return (0, r.jsxs)("div", {
      ref: ei2,
      className: [B().root, b2].filter(Boolean).join(" "),
      style: k2,
      "data-collapsed": F2 || void 0,
      "data-open": eH && !F2 || V2 || void 0,
      onPointerMove: (e3) => {
        if ("mouse" !== e3.pointerType && "pen" !== e3.pointerType) return;
        let t3 = ef.current;
        for (t3.push({ x: e3.clientX, y: e3.clientY, t: e3.timeStamp }); t3.length > 12 || t3.length > 2 && e3.timeStamp - t3[0].t > 240; )
          t3.shift();
        v2 && (() => {
          let e4 = eu.current, t4 = eo2.current, a3 = ei2.current, r2 = ef.current;
          if (!e4 || !a3) return;
          if (!t4 || !ed.current || !r2.length)
            return e4.setAttribute("points", "");
          let n2 = a3.getBoundingClientRect(), i2 = t4.getBoundingClientRect(), s2 = r2[r2.length - 1], l2 = r2.find((e5) => s2.t - e5.t < 120) ?? s2;
          e4.setAttribute(
            "points",
            `${l2.x - n2.left},${l2.y - n2.top} ${i2.left - 4 - n2.left},${i2.top - n2.top} ${i2.right + 4 - n2.left},${i2.top - n2.top}`
          ), e4.dataset.aiming = eY() ? "true" : "false";
        })();
      },
      onPointerLeave: (e3) => {
        "touch" !== e3.pointerType && (eb(null), e$());
      },
      onPointerEnter: eO,
      onBlur: (e3) => {
        let t3 = e3.relatedTarget;
        !(t3 && ei2.current?.contains(t3)) && ed.current && t3 && eM(null);
      },
      children: [
        (0, r.jsxs)("nav", {
          className: B().bar,
          "aria-label": y2,
          children: [
            eU(false),
            F2 ? (0, r.jsxs)("div", {
              className: B().actions,
              children: [
                eV(false, eQ),
                (0, r.jsx)("button", {
                  type: "button",
                  className: B().toggle,
                  "data-mm-toggle": "",
                  "aria-expanded": V2,
                  "aria-controls": `${w2}-sheet`,
                  "aria-label": V2 ? "Close menu" : "Open menu",
                  onClick: () => Q2(!V2),
                  children: (0, r.jsx)(s.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      l.PY1.span,
                      {
                        className: B().toggleIcon,
                        initial: N2 ? { opacity: 0 } : {
                          opacity: 0,
                          rotate: V2 ? -45 : 45,
                          scale: 0.7
                        },
                        animate: { opacity: 1, rotate: 0, scale: 1 },
                        exit: N2 ? { opacity: 0 } : {
                          opacity: 0,
                          rotate: V2 ? 45 : -45,
                          scale: 0.7
                        },
                        transition: N2 ? { duration: 0.1 } : I.T.spring.snappy,
                        children: V2 ? (0, r.jsx)(D.A, { "aria-hidden": "true" }) : (0, r.jsx)(S.A, { "aria-hidden": "true" })
                      },
                      V2 ? "close" : "open"
                    )
                  })
                })
              ]
            }) : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  ref: es2,
                  className: B().track,
                  onPointerLeave: () => eb(null),
                  children: [
                    (0, r.jsx)(l.PY1.span, {
                      className: B().highlight,
                      "aria-hidden": "true",
                      style: { x: eT, width: eC, opacity: eR }
                    }),
                    (0, r.jsx)("ul", {
                      className: B().items,
                      children: e2.map((t3) => {
                        let a3, n2 = J(t3), i2 = A2 === t3.value && n2, s2 = {
                          ref: (a3 = t3.value, (e3) => {
                            e3 ? ec.current.set(a3, e3) : ec.current.delete(a3);
                          }),
                          className: B().item,
                          "data-hot": C2 === t3.value || i2 || void 0,
                          "data-current": p2 === t3.value || void 0,
                          onPointerEnter: (e3) => ((e4, t4) => {
                            if ("touch" !== t4.pointerType) {
                              if (eb(e4.value), eO(), !J(e4)) {
                                ed.current && e$(150);
                                return;
                              }
                              if (ed.current) {
                                var a4;
                                let t5;
                                return void (a4 = e4.value, eD("aim"), (t5 = (e5) => {
                                  if (ed.current === a4 || ey.current !== a4)
                                    return;
                                  let r2 = performance.now() - e5;
                                  if (eY() && r2 < 320) {
                                    ep.current.aim = window.setTimeout(
                                      () => t5(e5),
                                      60
                                    );
                                    return;
                                  }
                                  eM(a4);
                                })(performance.now()));
                              }
                              eD("open"), ep.current.open = window.setTimeout(
                                () => {
                                  ep.current.open = void 0, eg.current = performance.now(), eM(e4.value);
                                },
                                f2
                              );
                            }
                          })(t3, e3),
                          onPointerLeave: () => {
                            ey.current === t3.value && eb(null), !ed.current && eD("open");
                          },
                          onFocus: () => eb(t3.value),
                          onBlur: () => {
                            ey.current === t3.value && eb(null);
                          },
                          onKeyDown: (a4) => ((t4, a5) => {
                            let r2 = eW(), n3 = r2.indexOf(t4.currentTarget), i3 = (t5) => {
                              let a6 = r2[(t5 + r2.length) % r2.length];
                              a6?.focus();
                              let n4 = e2.find(
                                (e3) => ec.current.get(e3.value) === a6
                              );
                              ed.current && n4 && eM(J(n4) ? n4.value : null);
                            };
                            switch (t4.key) {
                              case "ArrowRight":
                                t4.preventDefault(), i3(n3 + 1);
                                break;
                              case "ArrowLeft":
                                t4.preventDefault(), i3(n3 - 1);
                                break;
                              case "Home":
                                t4.preventDefault(), i3(0);
                                break;
                              case "End":
                                t4.preventDefault(), i3(r2.length - 1);
                                break;
                              case "ArrowDown":
                                if (!J(a5)) break;
                                t4.preventDefault(), e_.current = true, ed.current !== a5.value ? eM(a5.value) : eK("first");
                                break;
                              case "Tab":
                                !t4.shiftKey && ed.current === a5.value && J(a5) && (t4.preventDefault(), eK("first"));
                                break;
                              case "Escape":
                                ed.current && (t4.preventDefault(), eM(null));
                            }
                          })(a4, t3)
                        };
                        return (0, r.jsx)(
                          "li",
                          {
                            children: n2 ? (0, r.jsxs)("button", {
                              type: "button",
                              ...s2,
                              "aria-expanded": i2,
                              "aria-controls": i2 ? ez : void 0,
                              onClick: (e3) => {
                                let a4;
                                return eD("open"), eO(), a4 = e3.detail > 0 && ey.current === t3.value, void (!(ed.current === t3.value && a4 && performance.now() - eg.current < 450) && eM(
                                  ed.current === t3.value ? null : t3.value
                                ));
                              },
                              children: [
                                t3.label,
                                (0, r.jsx)(L.A, {
                                  className: B().chevron,
                                  "aria-hidden": "true"
                                })
                              ]
                            }) : (0, r.jsx)("a", {
                              ...s2,
                              href: t3.href ?? "#",
                              "aria-current": p2 === t3.value ? "page" : void 0,
                              onClick: (e3) => eq(e3, {
                                label: t3.label,
                                href: t3.href,
                                section: t3.value
                              }),
                              children: t3.label
                            })
                          },
                          t3.value
                        );
                      })
                    })
                  ]
                }),
                (0, r.jsx)("div", {
                  className: B().actions,
                  onPointerEnter: () => e$(),
                  children: eV(false)
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: el2,
          className: B().measure,
          "aria-hidden": "true",
          inert: true,
          children: [
            eU(true),
            (0, r.jsx)("ul", {
              className: B().items,
              children: e2.map(
                (e3) => (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("span", {
                      className: B().item,
                      children: [
                        e3.label,
                        J(e3) ? (0, r.jsx)(L.A, { className: B().chevron }) : null
                      ]
                    })
                  },
                  e3.value
                )
              )
            }),
            (0, r.jsx)("div", { className: B().actions, children: eV(true) })
          ]
        }),
        (0, r.jsx)(s.N, {
          onExitComplete: () => {
            eh.current = false;
          },
          children: eH && !F2 ? (0, r.jsxs)(
            l.PY1.div,
            {
              ref: eo2,
              id: ez,
              className: B().panel,
              style: {
                x: ek,
                width: ej,
                height: eN,
                transformOrigin: eP,
                top: "calc(var(--mm-bar-h) + 10px)"
              },
              initial: N2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: N2 ? { duration: 0.12 } : {
                  opacity: { duration: I.T.duration.fast, ease: q },
                  default: U
                }
              },
              exit: N2 ? { opacity: 0, transition: { duration: 0.1 } } : {
                opacity: 0,
                y: -4,
                scale: 0.985,
                transition: { duration: I.T.duration.exit, ease: q }
              },
              onPointerEnter: eO,
              onKeyDown: (e3) => {
                let t3 = eG(), a3 = t3.indexOf(document.activeElement), r2 = ed.current ? ec.current.get(ed.current) : void 0, n2 = (a4) => {
                  e3.preventDefault(), t3[Z(a4, 0, t3.length - 1)]?.focus();
                };
                switch (e3.key) {
                  case "ArrowDown":
                    n2(a3 + 1);
                    break;
                  case "ArrowUp":
                    a3 <= 0 ? (e3.preventDefault(), r2?.focus()) : n2(a3 - 1);
                    break;
                  case "Home":
                    n2(0);
                    break;
                  case "End":
                    n2(t3.length - 1);
                    break;
                  case "ArrowRight":
                  case "ArrowLeft": {
                    e3.preventDefault();
                    let t4 = "ArrowRight" === e3.key ? 1 : -1, a4 = eE.findIndex((e4) => e4.value === ed.current), r3 = eE[(a4 + t4 + eE.length) % eE.length];
                    if (!r3) break;
                    e_.current = true, eM(r3.value);
                    break;
                  }
                  case "Escape":
                    e3.preventDefault(), eM(null), r2?.focus();
                    break;
                  case "Tab":
                    if (e3.shiftKey && 0 === a3) {
                      e3.preventDefault(), r2?.focus();
                      break;
                    }
                    if (!e3.shiftKey && a3 === t3.length - 1) {
                      e3.preventDefault();
                      let t4 = eW(), a4 = r2 ? t4[t4.indexOf(r2) + 1] : void 0;
                      eM(null), (a4 ?? r2)?.focus();
                    }
                }
              },
              children: [
                (0, r.jsx)("div", {
                  className: B().surface,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(l.PY1.div, {
                    className: B().band,
                    style: { height: ew }
                  })
                }),
                (0, r.jsx)(l.PY1.span, {
                  className: B().caret,
                  "aria-hidden": "true",
                  style: { x: eA }
                }),
                (0, r.jsx)("div", {
                  className: B().clip,
                  children: (0, r.jsx)(s.N, {
                    initial: false,
                    custom: P2,
                    children: (0, r.jsx)(
                      ee,
                      {
                        id: eH.value,
                        direction: P2,
                        reduced: N2,
                        onSize: eI,
                        active: true,
                        children: (0, r.jsx)(et, {
                          item: eH,
                          onPick: eq
                        })
                      },
                      eH.value
                    )
                  })
                })
              ]
            },
            "panel"
          ) : null
        }),
        v2 && !F2 ? (0, r.jsx)("svg", {
          className: B().safeArea,
          "aria-hidden": "true",
          children: (0, r.jsx)("polygon", { ref: eu, points: "" })
        }) : null,
        (0, r.jsx)(s.N, {
          children: F2 && V2 ? (0, r.jsx)(
            l.PY1.div,
            {
              id: `${w2}-sheet`,
              className: B().sheet,
              initial: N2 ? { opacity: 0 } : { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: N2 ? { opacity: 0 } : { opacity: 0, height: 0 },
              transition: N2 ? { duration: 0.12 } : {
                height: I.T.spring.smooth,
                opacity: { duration: 0.18, ease: q }
              },
              children: (0, r.jsxs)(l.PY1.ul, {
                className: B().sheetList,
                initial: "hidden",
                animate: "shown",
                variants: {
                  hidden: {},
                  shown: {
                    transition: {
                      staggerChildren: N2 ? 0 : I.T.stagger.item,
                      delayChildren: 0.04 * !N2
                    }
                  }
                },
                children: [
                  e2.map((e3) => {
                    let t3 = J(e3), a3 = er2 === e3.value;
                    return (0, r.jsx)(
                      l.PY1.li,
                      {
                        className: B().sheetItem,
                        variants: {
                          hidden: N2 ? { opacity: 0 } : { opacity: 0, y: -6 },
                          shown: {
                            opacity: 1,
                            y: 0,
                            transition: N2 ? { duration: 0.1 } : U
                          }
                        },
                        children: t3 ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)("button", {
                              type: "button",
                              className: B().sheetRow,
                              "aria-expanded": a3,
                              "aria-controls": `${w2}-${e3.value}`,
                              "data-current": p2 === e3.value || void 0,
                              onClick: () => en2(a3 ? null : e3.value),
                              children: [
                                e3.label,
                                (0, r.jsx)(L.A, {
                                  className: B().chevron,
                                  "aria-hidden": "true"
                                })
                              ]
                            }),
                            (0, r.jsx)(s.N, {
                              initial: false,
                              children: a3 ? (0, r.jsx)(
                                l.PY1.div,
                                {
                                  id: `${w2}-${e3.value}`,
                                  role: "region",
                                  "aria-label": e3.label,
                                  className: B().sheetBody,
                                  initial: {
                                    height: 0,
                                    opacity: 0
                                  },
                                  animate: {
                                    height: "auto",
                                    opacity: 1
                                  },
                                  exit: { height: 0, opacity: 0 },
                                  transition: N2 ? { duration: 0 } : {
                                    height: I.T.spring.smooth,
                                    opacity: {
                                      duration: 0.2,
                                      ease: q
                                    }
                                  },
                                  children: (0, r.jsxs)("div", {
                                    className: B().sheetGroups,
                                    children: [
                                      e3.groups?.map(
                                        (t4, a4) => (0, r.jsxs)(
                                          "div",
                                          {
                                            className: B().sheetGroup,
                                            children: [
                                              t4.title ? (0, r.jsx)(
                                                "p",
                                                {
                                                  className: B().groupTitle,
                                                  children: t4.title
                                                }
                                              ) : null,
                                              (0, r.jsx)("ul", {
                                                className: B().sheetLinks,
                                                children: t4.links.map(
                                                  (t5) => (0, r.jsx)(
                                                    "li",
                                                    {
                                                      children: (0, r.jsxs)(
                                                        "a",
                                                        {
                                                          className: B().sheetLink,
                                                          href: t5.href ?? "#",
                                                          onClick: (a5) => eq(
                                                            a5,
                                                            {
                                                              label: t5.label,
                                                              href: t5.href,
                                                              section: e3.value
                                                            }
                                                          ),
                                                          children: [
                                                            t5.icon ? (0, r.jsx)(
                                                              "span",
                                                              {
                                                                className: B().linkIcon,
                                                                children: t5.icon
                                                              }
                                                            ) : null,
                                                            (0, r.jsx)(
                                                              "span",
                                                              {
                                                                className: B().linkLabel,
                                                                children: t5.label
                                                              }
                                                            ),
                                                            t5.badge ? (0, r.jsx)(
                                                              "span",
                                                              {
                                                                className: B().badge,
                                                                children: t5.badge
                                                              }
                                                            ) : null
                                                          ]
                                                        }
                                                      )
                                                    },
                                                    t5.label
                                                  )
                                                )
                                              })
                                            ]
                                          },
                                          t4.title ?? a4
                                        )
                                      ),
                                      e3.feature ? (0, r.jsxs)("a", {
                                        className: B().sheetFeature,
                                        href: e3.feature.href ?? "#",
                                        onClick: (t4) => eq(t4, {
                                          label: e3.feature.title,
                                          href: e3.feature.href,
                                          section: e3.value
                                        }),
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: B().featureTitle,
                                            children: e3.feature.title
                                          }),
                                          e3.feature.cta ? (0, r.jsxs)(
                                            "span",
                                            {
                                              className: B().featureCta,
                                              children: [
                                                e3.feature.cta,
                                                (0, r.jsx)(
                                                  E.A,
                                                  {
                                                    "aria-hidden": "true"
                                                  }
                                                )
                                              ]
                                            }
                                          ) : null
                                        ]
                                      }) : null
                                    ]
                                  })
                                },
                                "body"
                              ) : null
                            })
                          ]
                        }) : (0, r.jsx)("a", {
                          className: B().sheetRow,
                          href: e3.href ?? "#",
                          "data-current": p2 === e3.value || void 0,
                          "aria-current": p2 === e3.value ? "page" : void 0,
                          onClick: (t4) => eq(t4, {
                            label: e3.label,
                            href: e3.href,
                            section: e3.value
                          }),
                          children: e3.label
                        })
                      },
                      e3.value
                    );
                  }),
                  a2.some((e3) => "primary" !== e3.variant) ? (0, r.jsx)(l.PY1.li, {
                    className: B().sheetActions,
                    variants: {
                      hidden: { opacity: 0 },
                      shown: {
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }
                    },
                    children: eV(
                      false,
                      a2.filter((e3) => "primary" !== e3.variant)
                    )
                  }) : null
                ]
              })
            },
            "sheet"
          ) : null
        })
      ]
    });
  }
  var er = a(50680), en = a(70597), ei = a.n(en);
  let es = {
    products: "Products",
    solutions: "Solutions",
    developers: "Developers",
    company: "Company",
    pricing: "Pricing"
  };
  function el() {
    let e2 = (0, i.I)(), [t2, a2] = (0, n.useState)("products"), [o2, u2] = (0, n.useState)(null), [c2, m2] = (0, n.useState)(false), d2 = o2 ? o2.section ? `${o2.label} in ${es[o2.section] ?? o2.section}` : o2.label : null;
    return (0, r.jsxs)("div", {
      className: ei().demo,
      "data-canvas": "wide",
      children: [
        (0, r.jsxs)("div", {
          className: ei().window,
          children: [
            (0, r.jsx)(ea, {
              current: t2,
              onNavigate: (e3) => {
                u2(e3), e3.section && a2(e3.section);
              },
              showSafeArea: c2
            }),
            (0, r.jsxs)("div", {
              className: ei().page,
              children: [
                (0, r.jsx)("h2", {
                  className: ei().title,
                  children: "Get paid in 46 currencies, settle in yours"
                }),
                (0, r.jsx)("p", {
                  className: ei().lead,
                  children: "One integration for checkout, subscriptions and payouts, with fraud scoring and reconciliation built in."
                }),
                (0, r.jsx)("p", {
                  className: ei().visit,
                  "aria-live": "polite",
                  children: (0, r.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, r.jsx)(
                      l.PY1.span,
                      {
                        className: ei().visitText,
                        initial: e2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: 6,
                          filter: `blur(${I.T.blur.subtle}px)`
                        },
                        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                        exit: e2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: -6,
                          filter: `blur(${I.T.blur.subtle}px)`
                        },
                        transition: e2 ? { duration: 0.1 } : I.T.spring.smooth,
                        children: d2 ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            "Opened ",
                            (0, r.jsx)("strong", { children: d2 })
                          ]
                        }) : "Choose any destination in the header"
                      },
                      d2 ?? "none"
                    )
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: ei().controls,
          children: [
            (0, r.jsx)(er.d, {
              label: "Show safe area",
              checked: c2,
              onCheckedChange: m2
            }),
            (0, r.jsx)("span", {
              className: ei().hint,
              children: "Move diagonally from a menu into its links, or tab in and use the arrow keys"
            })
          ]
        })
      ]
    });
  }
  let eo = el;
}

__m(__module,__exports,__require);
}