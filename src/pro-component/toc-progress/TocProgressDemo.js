function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { TocProgressDemo: () => M, default: () => E });
  var n = r(95155), l = r(12115), o = r(18310), s = r(28245), i = r(55809), a = r(92171), c = r(7890), d = r(80642), u = r(25354), h = r(64577), m = r(7770), f = r(40632), p = r.n(f);
  let g = { 1: 5, 2: 17, 3: 29 }, y = { type: "spring", visualDuration: 0.28, bounce: 0 }, v = () => () => {
  };
  function b(e2, t2) {
    if (!e2) return 0;
    let r2 = Math.min(Math.floor(t2), e2.anchors.length - 2);
    if (r2 < 0) return 0;
    let n2 = Math.min(1, t2 - r2);
    return e2.anchors[r2] + (e2.anchors[r2 + 1] - e2.anchors[r2]) * n2;
  }
  function x({
    items: e2,
    scrollContainer: t2,
    offset: r2 = 96,
    activeId: f2,
    onActiveChange: w2,
    onNavigate: _2,
    readingTime: k2,
    title: j2 = "On this page",
    showTimeLeft: M2 = true,
    label: E2,
    className: N,
    style: T
  }) {
    let A, R = (A = (0, l.useSyncExternalStore)(
      v,
      () => true,
      () => false
    ), !!(0, o.I)() && A), C = (0, l.useId)(), S = (0, l.useRef)(null), D = (0, l.useRef)([]), H = (0, l.useRef)(null), L = (0, l.useRef)(null), O = `toc-knockout-${(0, l.useId)().replace(/[^\w-]/g, "")}`, $ = (0, l.useRef)([]), W = (0, l.useRef)(null), [q, I] = (0, l.useState)(null), [z, B] = (0, l.useState)(0), [Y, F] = (0, l.useState)(k2 ?? null), [G, K] = (0, l.useState)(0), U = (0, l.useRef)(null), P = (0, l.useRef)(() => {
    }), J = (0, s.d)(0), Z = (0, l.useRef)(null), Q = (0, i.G)(J, (e3) => b(Z.current, e3)), V = (0, i.G)(Q, (e3) => `${e3.toFixed(2)} 100000`), X = (0, i.G)(J, (e3) => +(e3 > 1e-3)), ee = e2.length, et = (0, l.useMemo)(() => e2.map((e3) => e3.level ?? 1), [e2]), er = void 0 !== f2 ? Math.max(
      0,
      e2.findIndex((e3) => e3.id === f2)
    ) : z;
    (0, l.useLayoutEffect)(() => {
      let e3 = S.current;
      if (!e3) return;
      let t3 = () => {
        let e4 = (function(e5) {
          if (!e5.length) return null;
          let t4 = [], r4 = [], n2 = (e6, r5) => {
            let n3 = t4[t4.length - 1];
            n3 && n3.x === e6 && n3.y === r5 || t4.push({ x: e6, y: r5 });
          };
          e5.forEach((t5, l3) => {
            let o3 = t5.top + t5.height / 2;
            0 === l3 && n2(t5.lane, o3), r4.push(o3);
            let s3 = e5[l3 + 1];
            if (!s3) return void n2(t5.lane, t5.top + t5.height - 4);
            let i3 = s3.top + s3.height / 2;
            if (s3.lane === t5.lane) return void n2(t5.lane, i3);
            let a3 = (t5.top + t5.height + s3.top) / 2, c2 = Math.min(7, (i3 - o3) / 2 - 1);
            n2(t5.lane, a3 - c2);
            for (let e6 = 1; e6 <= 14; e6++) {
              let r5 = e6 / 14, l4 = 1 - r5;
              n2(
                l4 * l4 * l4 * t5.lane + 3 * l4 * l4 * r5 * t5.lane + 3 * l4 * r5 * r5 * s3.lane + r5 * r5 * r5 * s3.lane,
                l4 * l4 * l4 * (a3 - c2) + 3 * l4 * l4 * r5 * a3 + 3 * l4 * r5 * r5 * a3 + r5 * r5 * r5 * (a3 + c2)
              );
            }
            n2(s3.lane, i3);
          });
          let l2 = [0];
          for (let e6 = 1; e6 < t4.length; e6++) {
            let r5 = t4[e6 - 1], n3 = t4[e6];
            l2.push(l2[e6 - 1] + Math.hypot(n3.x - r5.x, n3.y - r5.y));
          }
          let o2 = l2[l2.length - 1], s2 = r4.map((e6) => {
            let r5 = t4.findIndex((t5) => 0.01 > Math.abs(t5.y - e6));
            return r5 >= 0 ? l2[r5] : 0;
          });
          s2.push(o2);
          let i2 = t4.map(
            (e6, t5) => `${t5 ? "L" : "M"}${e6.x.toFixed(2)} ${e6.y.toFixed(2)}`
          ).join(""), a2 = e5[e5.length - 1];
          return {
            d: i2,
            points: t4,
            cumulative: l2,
            anchors: s2,
            total: o2,
            height: a2.top + a2.height
          };
        })(
          D.current.slice(0, ee).map((e5, t4) => ({
            top: e5?.offsetTop ?? 0,
            height: e5?.offsetHeight ?? 0,
            lane: g[et[t4]]
          }))
        );
        Z.current = e4, I(e4), J.set(J.get());
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let r3 = new ResizeObserver(t3);
      return r3.observe(e3), () => r3.disconnect();
    }, [ee, et, J]), (0, l.useEffect)(() => {
      let n2, l2 = e2[0] ? document.getElementById(e2[0].id) : null, o2 = (t2 ? "current" in t2 ? t2.current : t2 : null) ?? (function(e3) {
        for (let t3 = e3?.parentElement ?? null; t3; t3 = t3.parentElement) {
          let e4 = getComputedStyle(t3).overflowY;
          if (("auto" === e4 || "scroll" === e4 || "overlay" === e4) && t3.scrollHeight > t3.clientHeight)
            return t3;
        }
        return null;
      })(l2);
      W.current = o2;
      let s2 = () => {
        let t3 = o2 ? o2.getBoundingClientRect().top - o2.scrollTop + o2.clientTop : -window.scrollY, r3 = 0;
        $.current = e2.map((e3) => {
          let n3 = document.getElementById(e3.id);
          return r3 = n3 ? n3.getBoundingClientRect().top - t3 : r3;
        }), void 0 === k2 && F(
          Math.max(
            1,
            Math.round(
              ((o2 ?? document.body).textContent ?? "").trim().split(/\s+/).length / 230
            )
          )
        ), i2(true);
      }, i2 = (e3 = false) => {
        let {
          top: t3,
          height: n3,
          max: l3,
          end: s3
        } = o2 ? {
          top: o2.scrollTop,
          height: o2.clientHeight,
          max: o2.scrollHeight - o2.clientHeight,
          end: o2.scrollHeight
        } : {
          top: window.scrollY,
          height: window.innerHeight,
          max: document.documentElement.scrollHeight - window.innerHeight,
          end: document.documentElement.scrollHeight
        }, i3 = $.current;
        if (!i3.length) return;
        let c3 = Math.max(0, l3 - t3), d3 = Math.max(0, n3 - r2), u3 = d3 > 0 && c3 < d3 ? 1 - c3 / d3 : 0, h3 = t3 + r2 + d3 * u3 * u3, m2 = 0;
        if (h3 >= i3[0]) {
          let e4 = i3.length - 1;
          for (; e4 > 0 && i3[e4] > h3; ) e4--;
          let t4 = i3[e4], r3 = e4 + 1 < i3.length ? i3[e4 + 1] : s3;
          m2 = Math.min(
            i3.length,
            e4 + Math.min(1, Math.max(0, (h3 - t4) / Math.max(1, r3 - t4)))
          );
        }
        let f3 = U.current;
        null !== f3 && m2 > f3 + 1 && (m2 = f3), e3 || R ? (J.stop(), J.set(m2)) : (0, a.i)(J, m2, y);
      }, c2 = () => i2(), d2 = () => {
        null !== U.current && (U.current = null, i2());
      }, u2 = o2 ?? window;
      u2.addEventListener("scroll", c2, { passive: true });
      let h2 = ["wheel", "touchstart", "pointerdown", "keydown"];
      for (let e3 of h2) u2.addEventListener(e3, d2, { passive: true });
      if (P.current = i2, window.addEventListener("resize", s2), "u" > typeof ResizeObserver) {
        n2 = new ResizeObserver(s2);
        let e3 = o2?.firstElementChild ?? document.body;
        n2.observe(e3), o2 && n2.observe(o2);
      }
      return s2(), () => {
        for (let e3 of (u2.removeEventListener("scroll", c2), h2))
          u2.removeEventListener(e3, d2);
        window.removeEventListener("resize", s2), n2?.disconnect();
      };
    }, [e2, t2, r2, k2, R, J]);
    let en = (0, l.useRef)(w2), el = (0, l.useRef)(0);
    (0, l.useLayoutEffect)(() => {
      en.current = w2;
    });
    let eo = (0, l.useCallback)((e3) => {
      let t3 = Z.current, r3 = H.current;
      if (!t3 || !r3) return;
      let n2 = (function(e4, t4) {
        let { points: r4, cumulative: n3 } = e4;
        if (t4 <= 0) return r4[0];
        let l3 = 0, o2 = n3.length - 1;
        for (; l3 < o2; ) {
          let e5 = l3 + o2 >> 1;
          n3[e5] < t4 ? l3 = e5 + 1 : o2 = e5;
        }
        let s2 = Math.max(1, l3), i2 = r4[s2 - 1], a2 = r4[s2], c2 = n3[s2] - n3[s2 - 1] || 1, d2 = Math.min(1, Math.max(0, (t4 - n3[s2 - 1]) / c2));
        return { x: i2.x + (a2.x - i2.x) * d2, y: i2.y + (a2.y - i2.y) * d2 };
      })(t3, b(t3, e3)), l2 = `translate(${n2.x.toFixed(2)} ${n2.y.toFixed(2)})`;
      r3.setAttribute("transform", l2), L.current?.setAttribute("transform", l2);
    }, []), es = (0, l.useCallback)(
      (t3) => {
        eo(t3);
        let r3 = Math.min(ee - 1, Math.max(0, Math.floor(t3 + 2e-3)));
        el.current !== r3 && (el.current = r3, B(r3), en.current?.(e2[r3]?.id ?? "")), K(ee ? Math.min(1, t3 / ee) : 0);
      },
      [ee, e2, eo]
    );
    (0, c.L)(J, "change", es), (0, l.useLayoutEffect)(() => {
      eo(J.get());
    }, [q, eo, J]);
    let ei = null === Y ? null : G >= 0.999 ? 0 : Math.max(1, Math.ceil(Y * (1 - G))), ea = null === ei ? "" : 0 === ei ? "Finished" : `${ei} min left`;
    return (0, n.jsxs)("nav", {
      className: [p().root, N].filter(Boolean).join(" "),
      style: T,
      "aria-label": j2 ? void 0 : E2 ?? "On this page",
      "aria-labelledby": j2 ? C : void 0,
      children: [
        j2 || M2 ? (0, n.jsxs)("div", {
          className: p().head,
          children: [
            j2 ? (0, n.jsx)("p", {
              id: C,
              className: p().title,
              children: j2
            }) : null,
            M2 && null !== ei ? (0, n.jsx)("span", {
              className: p().time,
              "data-done": 0 === ei || void 0,
              children: (0, n.jsx)(d.N, {
                initial: false,
                children: (0, n.jsxs)(
                  u.PY1.span,
                  {
                    className: p().timeText,
                    initial: R ? { opacity: 0 } : {
                      opacity: 0,
                      y: 7,
                      filter: `blur(${m.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: R ? { opacity: 0 } : {
                      opacity: 0,
                      y: -7,
                      filter: `blur(${m.T.blur.subtle}px)`
                    },
                    transition: R ? { duration: 0.12 } : m.T.spring.snappy,
                    children: [
                      0 === ei ? (0, n.jsx)(h.A, { "aria-hidden": "true" }) : null,
                      ea
                    ]
                  },
                  ea
                )
              })
            }) : null
          ]
        }) : null,
        (0, n.jsxs)("div", {
          className: p().body,
          children: [
            q ? (0, n.jsxs)("svg", {
              className: p().line,
              width: 40,
              height: q.height,
              viewBox: `0 0 40 ${q.height}`,
              "aria-hidden": "true",
              children: [
                (0, n.jsxs)("mask", {
                  id: O,
                  maskUnits: "userSpaceOnUse",
                  x: -8,
                  y: -8,
                  width: 56,
                  height: q.height + 16,
                  children: [
                    (0, n.jsx)("rect", {
                      x: -8,
                      y: -8,
                      width: 56,
                      height: q.height + 16,
                      fill: "#fff"
                    }),
                    (0, n.jsx)("circle", { ref: L, r: 5.5, fill: "#000" })
                  ]
                }),
                (0, n.jsxs)("g", {
                  mask: `url(#${O})`,
                  children: [
                    (0, n.jsx)("path", { className: p().track, d: q.d }),
                    (0, n.jsx)(u.PY1.path, {
                      className: p().progress,
                      d: q.d,
                      style: { strokeDasharray: V, opacity: X }
                    })
                  ]
                }),
                (0, n.jsx)("g", {
                  ref: H,
                  className: p().marker,
                  children: (0, n.jsx)("circle", {
                    r: 3.5,
                    className: p().markerDot
                  })
                })
              ]
            }) : null,
            (0, n.jsx)("ol", {
              ref: S,
              className: p().list,
              onKeyDown: (e3) => {
                if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e3.key))
                  return;
                let t3 = Array.from(S.current?.querySelectorAll("a") ?? []), r3 = t3.indexOf(document.activeElement);
                if (r3 < 0) return;
                e3.preventDefault();
                let n2 = "Home" === e3.key ? 0 : "End" === e3.key ? t3.length - 1 : r3 + ("ArrowDown" === e3.key ? 1 : -1);
                t3[Math.min(t3.length - 1, Math.max(0, n2))]?.focus();
              },
              children: e2.map(
                (e3, t3) => (0, n.jsx)(
                  "li",
                  {
                    ref: (e4) => {
                      D.current[t3] = e4;
                    },
                    className: p().row,
                    "data-level": et[t3],
                    "data-state": t3 < er ? "read" : t3 === er ? "current" : "ahead",
                    children: (0, n.jsx)("a", {
                      href: `#${e3.id}`,
                      className: p().link,
                      "aria-current": t3 === er ? "location" : void 0,
                      onClick: (n2) => ((e4, t4, n3) => {
                        e4.preventDefault(), _2?.(t4.id);
                        let l2 = document.getElementById(t4.id);
                        if (!l2) return;
                        let o2 = W.current;
                        U.current = n3;
                        let s2 = ($.current[n3] ?? 0) - r2 + 1, i2 = R ? "auto" : "smooth";
                        o2 ? o2.scrollTo({ top: s2, behavior: i2 }) : window.scrollTo({ top: s2, behavior: i2 }), P.current(), l2.hasAttribute("tabindex") || l2.setAttribute("tabindex", "-1"), l2.focus({ preventScroll: true });
                      })(n2, e3, t3),
                      children: e3.label
                    })
                  },
                  e3.id
                )
              )
            })
          ]
        })
      ]
    });
  }
  var w = r(58030), _ = r.n(w);
  let k = [
    {
      id: "cold-starts",
      title: "Why cold starts mattered",
      level: 1,
      body: [
        "Every checkout on our platform runs a pricing function before the payment sheet appears. On a warm instance it answers in 38 ms. On a cold one it took 1.9 seconds at the 95th percentile, and in March cold instances served one request in nine.",
        "Those slow requests were not spread evenly. They clustered on the first checkout after a deploy and on regions that sleep overnight, which is exactly when a merchant is most likely to be watching."
      ]
    },
    {
      id: "measuring",
      title: "Measuring the boot",
      level: 1,
      body: [
        "We could not fix what we could not see, so the first week went into tracing. Each instance now reports four timestamps: process start, runtime ready, first import resolved and first response written.",
        "Sampling every cold request, instead of one in a hundred like the rest of our traces, gave us 40,000 boots in the first three days. That was enough to split the numbers by region, deploy and memory size."
      ]
    },
    {
      id: "tracing",
      title: "Tracing every phase",
      level: 2,
      body: [
        "We added the timestamps to the existing request log instead of a new pipeline. That kept the change to 40 lines and let us compare cold and warm requests in the same query."
      ],
      code: 'boot.mark("runtime-ready");\nconst pricing = await import("./pricing");\nboot.mark("first-import");'
    },
    {
      id: "time-went",
      title: "Where the time went",
      level: 2,
      body: [
        "Runtime startup was only 180 ms. Almost everything else was spent before our own code ran: resolving and evaluating 1,400 modules, most of them pulled in by two SDKs we used for a single call each.",
        "Memory size barely mattered. Doubling it bought 90 ms, which told us the boot was waiting on the file system rather than the processor."
      ]
    },
    {
      id: "resolution",
      title: "Module resolution",
      level: 3,
      body: [
        "Resolution alone cost 610 ms, because every import walked up six directories looking for a package manifest. Bundling the function into one file removed the walk entirely.",
        "Evaluation was the other half. Several SDKs ran setup code at import time, opening connection pools and reading configuration files the pricing path never touched."
      ]
    },
    {
      id: "lazy-loading",
      title: "Loading lazily",
      level: 1,
      body: [
        "The bundle fixed resolution, but evaluation was still slow. The answer was to stop evaluating code a request might never need."
      ]
    },
    {
      id: "splitting",
      title: "Splitting the bundle",
      level: 2,
      body: [
        "We split the function into a small entry that handles the common path and three chunks for tax, currency conversion and fraud checks. Only one checkout in five needs any of them.",
        "The entry went from 2.3 MB to 190 KB. Chunks load on first use and stay cached for the life of the instance."
      ]
    },
    {
      id: "warming",
      title: "Warming the cache",
      level: 2,
      body: [
        "For the regions that sleep overnight we now send one synthetic checkout ten minutes before local business hours. It costs less than a dollar a month and keeps the first real customer off a cold instance.",
        "We tried keeping instances warm around the clock first. It halved cold starts but tripled the bill for the quietest regions, and the synthetic checkout got most of the benefit for almost none of the cost."
      ]
    },
    {
      id: "results",
      title: "Results",
      level: 1,
      body: [
        "Cold starts dropped from 1.9 seconds to 740 ms at the 95th percentile, a 61 percent cut, and cold instances now serve one request in forty. Warm latency did not move.",
        "Checkout abandonment on first requests after a deploy fell from 6.1 to 4.4 percent over the following month."
      ]
    },
    {
      id: "next-time",
      title: "What we would do differently",
      level: 1,
      body: [
        "Trace first. We spent two weeks tuning the runtime before a single trace showed us that the runtime was never the problem.",
        "And keep an eye on dependencies you use for one call. Two of ours cost more at boot than the rest of the function combined."
      ]
    }
  ], j = k.map((e2) => ({ id: `toc-${e2.id}`, label: e2.title, level: e2.level }));
  function M() {
    let e2 = (0, l.useRef)(null), [t2, r2] = (0, l.useState)(j[0].label);
    return (0, n.jsx)("div", {
      className: _().demo,
      "data-canvas": "wide",
      children: (0, n.jsxs)("div", {
        className: _().layout,
        children: [
          (0, n.jsx)("div", {
            ref: e2,
            className: _().article,
            tabIndex: 0,
            "aria-label": "Article",
            children: (0, n.jsxs)("article", {
              className: _().content,
              children: [
                (0, n.jsxs)("header", {
                  className: _().header,
                  children: [
                    (0, n.jsx)("h2", {
                      className: _().title,
                      children: "How we cut checkout cold starts by 61 percent"
                    }),
                    (0, n.jsx)("p", {
                      className: _().byline,
                      children: "Maya Lindqvist, platform team \xB7 September 18, 2026"
                    })
                  ]
                }),
                k.map((e3) => {
                  let t3 = 1 === e3.level ? "h3" : 2 === e3.level ? "h4" : "h5";
                  return (0, n.jsxs)(
                    "section",
                    {
                      className: _().section,
                      "data-level": e3.level,
                      children: [
                        (0, n.jsx)(t3, {
                          id: `toc-${e3.id}`,
                          className: _().heading,
                          children: e3.title
                        }),
                        e3.body.map(
                          (e4) => (0, n.jsx)("p", { children: e4 }, e4.slice(0, 24))
                        ),
                        e3.code ? (0, n.jsx)("pre", {
                          className: _().code,
                          children: (0, n.jsx)("code", {
                            children: e3.code
                          })
                        }) : null
                      ]
                    },
                    e3.id
                  );
                })
              ]
            })
          }),
          (0, n.jsxs)("aside", {
            className: _().aside,
            children: [
              (0, n.jsx)(x, {
                items: j,
                scrollContainer: e2,
                offset: 28,
                readingTime: 6,
                onActiveChange: (e3) => r2(j.find((t3) => t3.id === e3)?.label ?? "")
              }),
              (0, n.jsxs)("p", {
                className: _().reading,
                "aria-live": "polite",
                children: ["Reading ", (0, n.jsx)("span", { children: t2 })]
              })
            ]
          })
        ]
      })
    });
  }
  let E = M;
}

__m(__module,__exports,__require);
}